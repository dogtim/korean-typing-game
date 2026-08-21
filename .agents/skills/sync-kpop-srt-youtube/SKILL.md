---
name: sync-kpop-srt-youtube
description: >-
  Use this skill when the user has a YouTube video (combining Hangul and English)
  and an existing SRT file, and needs to synchronize, calibrate, shift, or re-align
  the SRT timestamps to match the exact audio/video playback using the project's tools/ CLI.
---

# Sync Bilingual K-Pop SRT to YouTube Video Manual

This skill defines the standardized workflow for synchronizing bilingual (Korean Hangul + English) SRT subtitles to any YouTube video using the project's built-in **`tools/`** CLI suite.

---

## 🎯 Core Principles

1. **Bilingual Preservation**:
   - Keep all English phrases (e.g. *"Who's your bias? I'm your bias!"*) and Hangul phrases (e.g. *"Prada보다 비싼 대체불가 나인데"*) intact.
   - The typing/listening engine will automatically extract the Hangul characters for quizzes while preserving the complete English words for natural reading.
2. **Anchor Offset Sync**:
   - Compare the YouTube video's actual first vocal sound timestamp ($t_{\text{video}}$) with the SRT's first line timestamp ($t_{\text{srt}}$).
   - `Offset = t_video - t_srt`.
3. **Automated Tool Execution**:
   - Always utilize `node tools/cli.js ...` commands for deterministic timestamp transformations and registry updates.

---

## 📋 Standard Step-by-Step SOP

### Step 1: Analyze YouTube Video & Target SRT

1. Extract YouTube Video ID from the provided URL:
   ```javascript
   /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
   ```
2. Check the timestamp when the vocals/lyrics start in the YouTube video (e.g. `00:04.5`).
3. Check the timestamp of the first vocal in the existing SRT file (e.g. `00:00.5`).

---

### Step 2: Calibrate & Sync Timestamps

Run the `sync` or `shift` CLI command:

```bash
# Option A: Automatic Anchor Alignment
node tools/cli.js sync --srt public/lyrics/<ARTIST>-<SONG>.srt --video-start 00:04.5 --srt-start 00:00.5

# Option B: Direct Global Offset Shift
node tools/cli.js shift --file public/lyrics/<ARTIST>-<SONG>.srt --offset +4.0
```

---

### Step 3: Validate Subtitle Quality

Run the `validate` CLI command to verify structure and Hangul/English token density:

```bash
node tools/cli.js validate --file public/lyrics/<ARTIST>-<SONG>.srt
```

---

### Step 4: Register into the Game Engine

Use the `register` CLI command to register the video and subtitle across the mapping tables:

```bash
node tools/cli.js register \
  --video <YOUTUBE_ID> \
  --srt <ARTIST>-<SONG>.srt \
  --title "<Song Title>" \
  --artist "<Artist Name (Hangul)>"
```

This automatically syncs:
1. `src/utils/videoSrtMapping.js`
2. `src/utils/preparedLyrics.js`
3. `src/utils/kpopSongs.js`

---

### Step 5: Verification

1. Run `npm run lint` (`oxlint`).
2. Run `npm run build` (`vite build`).
3. Confirm playback synchronization in the browser at `http://localhost:5173/`.
