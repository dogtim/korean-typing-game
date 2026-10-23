#!/usr/bin/env python3
"""Find where each song starts in a long concert recording, by matching it against the studio tracks.

usage: recog.py <concert.wav> <out.json> [song_key ...]

Method (see README.md):
  1. 12-bin chroma features (long-term mean removed, smoothed) for the concert and for every studio reference.
  2. Each studio song is cut into 24 s chunks (step 8 s); every chunk is cross-correlated against the whole concert.
  3. Chains of chunk matches that advance ~8 s per chunk form an "occurrence" of the song (live edits split chains,
     so nearby chains are merged).
  4. `start` = the strongest low-band energy rise (talk/applause -> music) around the midpoint between the first
     matched chunk and "studio start aligned" (`first_match` / `lower_bound`).
Output per song: list of occurrences { start, first_match, lower_bound, mid, end, chunks, z, onset_score }.
"""
import sys, json, wave, os
import numpy as np
from scipy.signal import oaconvolve

SR = 11025
NFFT = 2048
HOP = 2756            # 0.25 s
FPS = SR / HOP
HERE = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(HERE, '.cache', 'audio')
CHUNK_S, CHUNK_STEP_S = 24, 8
SMOOTH = 5            # frames (~1.25 s)


def load_wav(path):
    with wave.open(path, 'rb') as w:
        assert w.getframerate() == SR and w.getnchannels() == 1
        raw = w.readframes(w.getnframes())
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768.0


_win = np.hanning(NFFT).astype(np.float32)
_freqs = np.fft.rfftfreq(NFFT, 1 / SR)
_sel = (_freqs >= 100) & (_freqs <= 2000)
_pc = (np.round(12 * np.log2(np.maximum(_freqs[_sel], 1e-6) / 440.0)) + 69).astype(int) % 12
_M = np.zeros((12, _sel.sum()), dtype=np.float32)
_M[_pc, np.arange(_sel.sum())] = 1.0


def chroma(x):
    n = 1 + (len(x) - NFFT) // HOP
    out = np.empty((12, n), dtype=np.float32)
    B = 2000
    for st in range(0, n, B):
        e = min(n, st + B)
        idx = (np.arange(st, e)[:, None] * HOP + np.arange(NFFT)[None, :])
        mag = np.abs(np.fft.rfft(x[idx] * _win, axis=1))[:, _sel]
        out[:, st:e] = _M @ mag.T
    out /= (np.linalg.norm(out, axis=0, keepdims=True) + 1e-9)
    out -= out.mean(axis=1, keepdims=True)        # remove long-term per-pitch-class mean
    k = np.ones(SMOOTH, dtype=np.float32) / SMOOTH
    out = np.apply_along_axis(lambda r: np.convolve(r, k, mode='same'), 1, out)
    out /= (np.linalg.norm(out, axis=0, keepdims=True) + 1e-9)
    return out


_lo = (_freqs >= 40) & (_freqs <= 250)


def low_energy(x):
    n = 1 + (len(x) - NFFT) // HOP
    E = np.empty(n, dtype=np.float32)
    B = 2000
    for st in range(0, n, B):
        e = min(n, st + B)
        idx = (np.arange(st, e)[:, None] * HOP + np.arange(NFFT)[None, :])
        mag = np.abs(np.fft.rfft(x[idx] * _win, axis=1))
        E[st:e] = np.log1p(mag[:, _lo].sum(1))
    return E


def refine(E, mid, half=22.0, w=6.0):
    """Pick the strongest low-band energy rise (talk/applause -> music) around mid."""
    wf = int(w * FPS)
    best = None
    for t in range(int((mid - half) * FPS), int((mid + half) * FPS)):
        if t - wf < 0 or t + wf >= len(E):
            continue
        sc = float(E[t:t + wf].mean() - E[t - wf:t].mean())
        if best is None or sc > best[0]:
            best = (sc, t / FPS)
    return best


def sim_curve(C, Q):
    L = Q.shape[1]
    s = np.zeros(C.shape[1] - L + 1, dtype=np.float32)
    for c in range(12):
        s += oaconvolve(C[c], Q[c][::-1], mode='valid').astype(np.float32)
    return s / L


def peaks(sim, k=4, excl=int(20 * FPS)):
    s = sim.copy()
    out = []
    med = np.median(s)
    mad = np.median(np.abs(s - med)) * 1.4826 + 1e-9
    for _ in range(k):
        i = int(np.argmax(s))
        z = (s[i] - med) / mad
        out.append((i, float(s[i]), float(z)))
        s[max(0, i - excl):i + excl] = -9
    return out


def detect(concert_wav, refs, zmin=4.0, simmin=0.30, minrun=3, gap_merge=90.0):
    x = load_wav(concert_wav)
    C = chroma(x)
    E = low_energy(x)
    dur = len(x) / SR
    res = {}
    L = int(CHUNK_S * FPS)
    step = int(CHUNK_STEP_S * FPS)
    for key, rp in refs.items():
        R = chroma(load_wav(rp))
        nodes = []   # per chunk: list of (t, sim, z)
        for ci, s0 in enumerate(range(0, R.shape[1] - L, step)):
            sim = sim_curve(C, R[:, s0:s0 + L])
            nodes.append([(i / FPS, v, z) for (i, v, z) in peaks(sim, k=5) if z >= zmin and v >= simmin])
        # longest chains: chunk i -> i+1 with time advance ~ step (+-3 s)
        n = len(nodes)
        best = [[(1, None)] * len(nodes[i]) for i in range(n)]
        for i in range(1, n):
            for j, (t, v, z) in enumerate(nodes[i]):
                for k, (t0, v0, z0) in enumerate(nodes[i - 1]):
                    if abs((t - t0) - CHUNK_STEP_S) <= 3.0 and best[i - 1][k][0] + 1 > best[i][j][0]:
                        best[i][j] = (best[i - 1][k][0] + 1, (i - 1, k))
        runs = []
        used = set()
        for i in range(n - 1, -1, -1):
            for j in range(len(nodes[i])):
                if (i, j) in used or best[i][j][0] < minrun:
                    continue
                chain = []
                cur = (i, j)
                while cur is not None:
                    used.add(cur)
                    chain.append(cur)
                    cur = best[cur[0]][cur[1]][1]
                chain.reverse()
                ts = [nodes[a][b][0] for a, b in chain]
                zs = [nodes[a][b][2] for a, b in chain]
                runs.append({'t0': ts[0], 't1': ts[-1] + CHUNK_S, 'len': len(chain), 'z': float(np.mean(zs)),
                             'chunk0': chain[0][0]})
        runs.sort(key=lambda r: r['t0'])
        # merge runs that are close in concert time into one occurrence (live edits split a song)
        occ = []
        for r in runs:
            if occ and r['t0'] - occ[-1]['t1'] <= gap_merge:
                occ[-1]['t1'] = max(occ[-1]['t1'], r['t1'])
                occ[-1]['len'] += r['len']
                occ[-1]['z'] = max(occ[-1]['z'], r['z'])
            else:
                occ.append(dict(r))
        outl = []
        for o in occ:
            A = o['t0']
            Bt = A - o['chunk0'] * CHUNK_STEP_S
            mid = (A + Bt) / 2
            rf = refine(E, mid)
            outl.append({'start': round(rf[1], 1) if rf else round(mid, 1), 'onset_score': round(rf[0], 2) if rf else None,
                         'first_match': round(A, 1), 'lower_bound': round(Bt, 1), 'mid': round(mid, 1),
                         'end': round(o['t1'], 1), 'chunks': o['len'], 'z': round(o['z'], 1)})
        res[key] = outl
    return {'duration': round(dur, 1), 'songs': res}


if __name__ == '__main__':
    concert, out = sys.argv[1], sys.argv[2]
    keys = sys.argv[3:]
    refs = {}
    for f in sorted(os.listdir(AUDIO_DIR)):
        if f.startswith('ref_') and f.endswith('.wav'):
            k = f[4:-4]
            if not keys or k in keys:
                refs[k] = os.path.join(AUDIO_DIR, f)
    r = detect(concert, refs)
    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    json.dump(r, open(out, 'w'), indent=1)
    print('done', concert, len(refs), 'songs')
