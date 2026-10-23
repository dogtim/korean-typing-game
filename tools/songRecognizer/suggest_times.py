#!/usr/bin/env python3
"""Turn a recog.py result into lines for src/data/concertSongTimes.js.

usage: suggest_times.py <recog_output.json> --video <youtubeId> [--mode MODE] [--shift -3]

modes
  generic       one entry per song (the occurrence with the most matched chunks)
  choom_full    full Choom show: tells soundcheck / main set / encore apart (we_go_up and love_in_my_heart as anchors)
  choom_main    fragment from the main set
  choom_encore  fragment from the encore
Each printed line is `songKey  videoId  seconds`; add `videoId: seconds` under that key in SONG_START_TIMES.
Detections need >= 5 matched chunks (clik_clak: 3). The default shift of -3 s makes the jump land just before the song.
"""
import argparse, json, sys

MIN_CHUNKS = 5
MIN_CHUNKS_SHORT = {'clik_clak': 3}

SLOT = {
    'like_that': {'sc': 'sc_like_that'},
    'supa_dupa_luv': {'sc': 'sc_supa_dupa_luv', 'main': 'encore_supa_dupa_luv', 'encore': 'encore_supa_dupa_luv'},
    'hot_sauce': {'sc': 'sc_hot_sauce', 'main': 'hot_sauce'},
    'billionaire': {'sc': 'sc_billionaire', 'main': 'billionaire'},
    'love_in_my_heart': {'main': 'encore_love_in_my_heart', 'encore': 'encore_love_in_my_heart'},
    'batter_up': {'main': 'batter_up', 'encore': 'encore_batter_up_remix'},
    'sheesh': {'main': 'sheesh', 'encore': 'encore_sheesh_remix'},
    'sugar_honey_ice_tea': {'main': 'sugar_honey_ice_tea', 'encore': 'encore_sugar_honey_ice_tea'},
}
for s in ['we_go_up', 'choom', 'drip', 'moon', 'clik_clak', 'psycho', 'stuck_in_the_middle', 'love_maybe', 'locked_in',
          'really_like_you', 'forever', 'wild', 'i_like_it']:
    SLOT.setdefault(s, {'main': s})


def best(occs):
    return sorted(occs, key=lambda o: (-o['chunks'], o['start']))[0] if occs else None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('result')
    ap.add_argument('--video', required=True)
    ap.add_argument('--mode', default='generic', choices=['generic', 'choom_full', 'choom_main', 'choom_encore'])
    ap.add_argument('--shift', type=float, default=-3)
    a = ap.parse_args()

    songs = json.load(open(a.result))['songs']
    cand = {s: [o for o in l if o['chunks'] >= MIN_CHUNKS_SHORT.get(s, MIN_CHUNKS)] for s, l in songs.items()}
    picks = {}
    if a.mode == 'generic':
        for s, l in cand.items():
            o = best(l)
            if o:
                picks[s] = o
    else:
        tw = best(cand.get('we_go_up', []))
        tw_t = tw['start'] if tw else None
        enc_t = None
        if a.mode == 'choom_full':
            e = best([o for o in cand.get('love_in_my_heart', []) if tw_t is None or o['start'] > tw_t])
            enc_t = e['start'] if e else None
        per_key = {}
        for s, l in cand.items():
            for o in l:
                t = o['start']
                if a.mode == 'choom_encore':
                    phase = 'encore'
                elif a.mode == 'choom_main':
                    phase = 'main'
                elif tw_t is not None and t < tw_t - 5:
                    phase = 'sc'
                elif enc_t is not None and t >= enc_t - 5:
                    phase = 'encore'
                else:
                    phase = 'main'
                key = SLOT.get(s, {}).get(phase)
                if key:
                    per_key.setdefault(key, []).append(o)
        picks = {k: best(v) for k, v in per_key.items()}

    rows = sorted(((max(0, int(round(o['start'] + a.shift))), k, o['chunks']) for k, o in picks.items()))
    for off, key, chunks in rows:
        print(f"{key:<28} {a.video}  {off:>6}   # {off // 60}:{off % 60:02d}, {chunks} chunks")
    if not rows:
        print('nothing detected', file=sys.stderr)


if __name__ == '__main__':
    main()
