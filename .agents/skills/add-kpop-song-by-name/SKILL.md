---
name: add-kpop-song-by-name
description: >-
  Use this skill when the user provides a K-Pop song name (and optional artist)
  and requests to find the YouTube video URL, retrieve or generate synchronized
  bilingual (Hangul + English) SRT subtitles, calibrate timestamps, and register
  the song into Hangul PopPop for practice and game modes.
---

# Add K-Pop Song by Name (YouTube Video + SRT Generator & Auto-Register SOP)

This skill defines the standardized end-to-end automated workflow for adding any K-Pop song to **Hangul PopPop** simply from the song's name.

The pipeline automatically:
1. Searches and selects the best official YouTube music video URL and video ID.
2. Extracts or retrieves authentic time-synchronized bilingual (Hangul + English) subtitles in standard `.srt` format.
3. Calibrates intro delay offsets so lyrics align with vocal audio.
4. Registers the song across all 3 game registries (`videoSrtMapping.js`, `preparedLyrics.js`, `kpopSongs.js`).
5. Makes the song immediately playable in Practice and Game modes.

---

## ⚡ Quick 1-Command CLI Execution

Whenever the user gives a song name (e.g. `"ILLIT Magnetic"` or `"aespa Supernova"`), you can run:

```bash
# 1. Search, extract SRT, and auto-register in 1 command:
node tools/cli.js fetch --song "ILLIT Magnetic" --register

# Or specify custom artist/title overrides:
node tools/cli.js fetch --song "Supernova" --artist "aespa (에스파)" --title "Supernova" --register
```

---

## 📋 Full 5-Step Operational SOP

### Step 1: Video Search & Target Identification
1. Run the YouTube search query using `node tools/cli.js fetch --song "<Song Name>"` or direct `yt-dlp`:
   ```bash
   yt-dlp "ytsearch3:<Artist> <Song Name> Official MV" --print "%(id)s|||%(title)s|||%(duration_string)s|||%(webpage_url)s"
   ```
2. Verify the selected video is the **official MV** or highest-quality studio performance track (e.g. Studio Choom).
3. Extract:
   - `primaryId`: 11-character YouTube video ID (e.g. `Vk5-c_v4gMU`)
   - `videoTitle`: Full YouTube title
   - `videoUrl`: `https://www.youtube.com/watch?v=<primaryId>`
   - `artist`: Artist name in English + Hangul (e.g. `ILLIT (아일릿)`)
   - `title`: Song title (e.g. `Magnetic`)

---

### Step 2: Subtitle Retrieval & Format Generation

Check the 3 primary sources in priority order:

#### Path A: Official YouTube Synchronized Subtitle Stream (Fastest)
The CLI `fetch` command automatically attempts this:
```bash
node tools/cli.js fetch --song "<Song Name>"
```
- If YouTube contains official Korean (`ko`) captions, it downloads, converts to millisecond `.srt`, and validates sequential order automatically into `public/lyrics/<ARTIST>-<SONG>.srt`.

#### Path B: RentAnAdviser Synchronized Subtitle Archive (If Path A is unavailable)
If YouTube does not have embedded official captions:
1. Search RentAnAdviser: `https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx?artist=<Song>`
2. Look for the Korean Hangul subtitle entry (`-ko`).
3. If necessary, navigate via `browser_subagent` to `getsubtitles.aspx?id=...`, solve the numeric captcha, and copy the full unclipped raw LRC or SRT.
4. If the raw format is `.lrc`, convert it via the CLI:
   ```bash
   node tools/cli.js convert --input raw_song.lrc --output public/lyrics/<ARTIST>-<SONG>.srt
   ```

#### Path C: K-Lyrics + Forced Caption Alignment (If only static lyrics exist)
If only raw lyrics exist on `https://k-lyrics.com/songs`:
1. Copy the Korean Hangul lyric text.
2. Run audio-alignment against the YouTube audio:
   ```bash
   node tools/cli.js align --video <YOUTUBE_ID> --output <ARTIST>-<SONG>.srt --lyrics "<lyrics_text>"
   ```

---

### Step 3: Intro Offset Calibration (YouTube MV Alignment)
Many K-Pop YouTube music videos have a 3~10 second visual intro before singing begins, whereas studio audio starts at 00:00.

1. Check when the first vocal starts in the YouTube video ($t_{\text{video}}$).
2. Check the timestamp of the first subtitle cue in the SRT ($t_{\text{srt}}$).
3. If $t_{\text{video}} \neq t_{\text{srt}}$, shift all timestamps:
   ```bash
   # If video vocals start at 00:04.5 and SRT starts at 00:00.5 (Offset = +4.0s)
   node tools/cli.js shift --file public/lyrics/<ARTIST>-<SONG>.srt --offset +4.0
   ```

---

### Step 4: Game Engine Auto-Registration

Ensure the song is registered in the 3 required mapping files:
```bash
node tools/cli.js register \
  --video <PRIMARY_YOUTUBE_ID> \
  --srt <ARTIST>-<SONG>.srt \
  --title "<Song Title>" \
  --artist "<Artist Name (Hangul)>"
```

This command automatically adds the entry to:
1. `src/utils/videoSrtMapping.js` (`VIDEO_SRT_MAPPINGS`)
2. `src/utils/preparedLyrics.js` (`PREPARED_SRT_LIBRARY`)
3. `src/utils/kpopSongs.js` (`KPOP_SONG_PRESETS` with thumbnail and preset button)

---

### Step 5: Quality Validation & Verification
1. Run subtitle validation:
   ```bash
   node tools/cli.js validate --file public/lyrics/<ARTIST>-<SONG>.srt
   ```
2. Verify zero lint errors and clean build:
   ```bash
   npx oxlint
   npm run build
   ```
3. Report back to the user with:
   - YouTube Video URL and ID
   - Generated SRT File path (`public/lyrics/...`)
   - Subtitle line count & Hangul character density
   - Direct confirmation that the song is loaded and playable in the game.
