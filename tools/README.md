# 🎧 K-Pop Subtitle & Lyrics Pre-processing Tool Suite

A suite of Node.js command-line tools for fetching, calibrating, shifting, converting, and registering synchronized bilingual (Hangul + English) subtitles for YouTube videos in **Hangul Type Quest**.

---

## ⚡ Quick Start

```bash
# Display help and all available commands
node tools/cli.js --help
```

---

## 🛠️ Commands & Usage

### 1. Direct YouTube Audio & Caption Auto-Align (`align`)
Directly extracts official / timed audio and caption streams from YouTube videos and aligns them with the provided lyrics string into standard `.srt`.

```bash
# Extract and align from YouTube video ID
node tools/cli.js align --video bMhDJ0S0OBA --output ILLIT-ITS-ME.srt
```

---

### 2. Shift SRT Timestamps (`shift`)
Shifts all timestamps forward (`+seconds`) or backward (`-seconds`) in place in `public/lyrics/`.

```bash
# Shift forward by 4.5 seconds
node tools/cli.js shift --file public/lyrics/ILLIT-ITS-ME.srt --offset +4.5

# Shift backward by 2.0 seconds
node tools/cli.js shift --file public/lyrics/SONG.srt --offset -2.0
```

---

### 2. Auto-Align Video Anchor (`sync`)
Automatically computes the intro delay offset between YouTube video start time and SRT start time, and shifts the file.

```bash
# If vocals start at 00:04.5 in YouTube MV and 00:00.5 in SRT
node tools/cli.js sync --srt public/lyrics/SONG.srt --video-start 00:04.5 --srt-start 00:00.5
```

---

### 3. Convert LRC to SRT (`convert`)
Converts standard raw `.lrc` lyrics (`[mm:ss.xx]Text`) directly into standard `.srt` format with millisecond timestamps and smart auto-durations.

```bash
# Convert with optional intro offset
node tools/cli.js convert --input raw_song.lrc --output public/lyrics/SONG.srt --offset +3.0
```

---

### 4. 1-Command Auto-Registration (`register`)
Automatically adds the new song into:
1. `src/utils/videoSrtMapping.js`
2. `src/utils/preparedLyrics.js`
3. `src/utils/kpopSongs.js`

```bash
node tools/cli.js register \
  --video bMhDJ0S0OBA \
  --srt ILLIT-ITS-ME.srt \
  --title "It's Me" \
  --artist "ILLIT (아일릿)"
```

---

### 5. Validate Subtitle Quality (`validate`)
Inspects sequential timestamp correctness, overlap errors, total track duration, and Hangul/English token percentages.

```bash
node tools/cli.js validate --file public/lyrics/ILLIT-ITS-ME.srt
```
