---
name: sync-song-lyrics
description: >-
  Use this skill to select and execute different lyric synchronization workflows for songs
  (K-Pop, Hokkien, Pop, etc.) in Hangul PopPop. ALWAYS prompts the user with ask_question
  to pick the synchronization method first (Method 1: Tap-to-Sync, Method 2: Acoustic Vocal
  Alignment, Method 3: Anchor Shift, Method 4: Visual Frame OCR) before performing any sync.
---

# Lyric Synchronization Framework & Multi-Method Selection Guide

This skill provides a standardized framework for aligning song lyrics to audio/video playback in **Hangul PopPop**.

> [!IMPORTANT]
> ### 🚨 Mandatory User Method Prompt (Required Every Time)
> Whenever this skill is activated or any lyric synchronization task is requested, the Agent **MUST NOT** assume or silently pick a method.
> The Agent **MUST ALWAYS** prompt the user using the `ask_question` tool every time so the user can explicitly select which sync method to use for the song before executing any alignment commands or scripts.

---

## 🧭 Step 0: Prompt User for Method Selection (Mandatory)

Before analyzing audio, reading video files, or running CLI tools, invoke `ask_question`:

```json
{
  "questions": [
    {
      "question": "Which synchronization method would you like to use for this song?",
      "options": [
        "(Recommended) Method 2: Acoustic Vocal Alignment (Automated audio onset & attack detection with game pre-roll)",
        "Method 1: Interactive Tap-to-Sync (Manual keypress marking during playback)",
        "Method 3: Anchor Shift & Linear Rescaling (Global intro delay offset or dual-anchor stretch)",
        "Method 4: Visual Frame OCR Diffing (Video frame sampling for burned-in typography)"
      ],
      "is_multi_select": false
    }
  ],
  "toolSummary": "Select lyric sync method",
  "toolAction": "Prompting user for sync method"
}
```

Wait for the user's response and then branch to the corresponding method SOP below.

---

## 📊 Method Selection Matrix & Overview

| Method | Best Used When | Effort | Precision | Current Support |
| :--- | :--- | :--- | :--- | :--- |
| **Method 1: Tap-to-Sync (Interactive)** | Freestyle rap, live recordings, conversational dialogue without metronome | Medium (manual playback tap) | ±50ms (human reflex) | *Extensible roadmap* |
| **Method 2: Acoustic Vocal Alignment (Recommended)** | Song has singing vocals, audio/video available, visual subtitles lag behind audio | **Low (Automated)** | **High (±20ms audio attack)** | **✅ Fully Implemented CLI (`align-acoustic`)** |
| **Method 3: Anchor Shift & Linear Rescale** | High-quality SRT exists from streaming services, but intro delay offset differs from YouTube MV | Very Low (single offset) | High (uniform drift) | ✅ Implemented in `tools/cli.js shift` / `sync` |
| **Method 4: Visual Frame OCR Detection** | Official MV has hardcoded burned-in typography and no lyric text or captions exist | Medium (frame sampling + OCR) | Medium (visual lag ~1-2s) | ✅ Implemented in `tools/frameExtractor.js` |

---

## 🎯 SOP: Method 2 — Acoustic / Vocal Energy Alignment

### 1. Why Method 2 Works Best
When subtitles are transcribed visually from official MVs, on-screen typography animations, calligraphy brush fades, and entrance transitions cause visual subtitles to appear **1.0 to 2.5 seconds after** the singer starts.
Method 2 isolates vocal frequencies, detects the acoustic energy attack ($dE/dt$), applies a game pre-roll anticipation window (~0.25s–0.35s), and locks verified manual anchors.

### 2. Execution Steps

#### Step 2.1: Gather Inputs & Check Ground-Truth Anchors
1. Check if the user has manually verified any anchor lines (e.g. lines 1 to 8). If so, preserve them using `--anchors <range>`.
2. Locate the audio source (YouTube URL, video ID, or audio file) and target SRT file in `public/lyrics/`.

#### Step 2.2: Execute via CLI
Run the built-in Node CLI tool:

```bash
# Acoustic alignment with YouTube video and preserved anchors
node tools/cli.js align-acoustic \
  --srt public/lyrics/<FILENAME>.srt \
  --audio "https://www.youtube.com/watch?v=<VIDEO_ID>" \
  --anchors 1-8 \
  --pre-roll 0.30

# Or with a local audio or video file
node tools/cli.js align-acoustic \
  --srt public/lyrics/<FILENAME>.srt \
  --audio path/to/audio_filtered.wav \
  --pre-roll 0.30
```

#### CLI Options:
- `--srt <path>`: Target SRT file path.
- `--audio <url|path>`: YouTube URL/ID or local audio/video file.
- `--pre-roll <seconds>`: Anticipation window before vocal attack (default: `0.30s`). Recommended `0.25s` for fast rap, `0.35s` for slow ballads.
- `--anchors <indices>`: Cues to keep locked as ground truth, e.g. `--anchors 1-8` or `--anchors 1,2,5,10`.
- `--output <path>`: (Optional) Output path. Defaults to in-place overwrite of `--srt`.

#### Step 2.3: Underlying Audio Algorithm Reference
```
[Input Audio / Video / YouTube]
             │
             ▼
[FFmpeg Vocal Bandpass Filter]
  highpass=f=200, lowpass=f=3500, mono 16kHz WAV
             │
             ▼
[Short-Time RMS Energy Calculation]
  Window: 40ms | Step: 20ms
             │
             ▼
[Vocal Attack Detection (dE/dt)]
  Search window: [max(prev_onset + min_gap, orig_s - 2.8s), orig_s + 0.4s]
  Onset: argmax ( (E[i] - E[i-2]) * (E[i] / local_mean) )
             │
             ▼
[Game Pre-Roll Calibration]
  start_time = max(prev_start + 1.0s, onset_time - preRoll)
  end_time   = min(next_start, start_time + original_duration)
             │
             ▼
[Deterministic SRT Generation]
  Valid HH:MM:SS,mmm formatting & overlap resolution
```

#### Step 2.4: Validate Calibrated Subtitles
```bash
node tools/cli.js validate --file public/lyrics/<FILENAME>.srt
```
Ensure:
- ✅ **Status: VALID**
- ✅ Non-overlapping timestamps.
- ✅ Monotonically increasing cue sequence.

---

## ⚡ SOP: Method 3 — Anchor Shift & Linear Rescale

If the user selects **Method 3**:
1. Check the intro delay offset ($t_{\text{video}} - t_{\text{srt}}$).
2. Execute global offset shift:
   ```bash
   node tools/cli.js shift --file public/lyrics/<FILENAME>.srt --offset +4.5
   ```
   Or anchor alignment:
   ```bash
   node tools/cli.js sync --srt public/lyrics/<FILENAME>.srt --video-start 00:04.5 --srt-start 00:00.5
   ```

---

## 🔮 Roadmap: Extending Methods 1 & 4

- **Method 1: Interactive Tap-to-Sync (Planned)**:
  Terminal or UI-based keypress listener logging timestamps on `[Spacebar]` taps while streaming YouTube audio.
- **Method 4: Visual Frame OCR Diffing (Extending `frameExtractor`)**:
  Automate batch frame extraction around transition zones, crop bounding boxes for subtitle regions, and use image hashing / OCR diffs to detect exact visual subtitle change frames.
