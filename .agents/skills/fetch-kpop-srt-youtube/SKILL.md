---
name: fetch-kpop-srt-youtube
description: >-
  Use this skill when the user provides one or multiple YouTube links for a K-Pop song
  and requests to search/fetch Korean (Hangul) synchronized SRT subtitles from RentAnAdviser
  (https://www.rentanadviser.com/subtitles/getsubtitles.aspx or subtitlesforsongs.aspx)
  by completing the numeric verification challenge using browser_subagent,
  calibrating the intro offset, saving the SRT file, and updating the video mapping table.
---

# Fetch K-Pop SRT & YouTube Mapping Manual (with RentAnAdviser Verification SOP)

This skill defines the standardized automated SOP for fetching authentic Korean (Hangul) time-synced lyrics from **RentAnAdviser Subtitles** by solving the numeric verification code challenge via `browser_subagent`, aligning the intro offset to the YouTube video, and registering the mapping table.

---

## 🎯 Core Architectural Principles

1. **YouTube Link = Media Playback & Intro Timestamp Anchor**:
   - YouTube links are used exclusively for video playback, embedding via YouTube IFrame Player, extracting Video IDs (`youtubeIds`), and measuring the exact intro duration before vocals start.
   - **DO NOT** guess or infer lyrics from video descriptions.
2. **RentAnAdviser (`getsubtitles.aspx`) = Raw Subtitle Authority**:
   - RentAnAdviser holds the community-verified, syllable-accurate Korean lyrics and millisecond timestamps.
   - To obtain the **complete unclipped raw string**, the AI must navigate to `getsubtitles.aspx` and complete the numeric verification code challenge.
3. **Intro Offset Calibration**:
   - CD/Studio versions in lyric databases usually start at `00:00:00`.
   - YouTube MVs usually have a 3~10 second visual intro.
   - `Offset = (YouTube First Vocal Timestamp) - (Raw Lyric First Vocal Timestamp)`
   - Apply `+Offset` to every subtitle line in the file.

---

## 📋 Standard Step-by-Step SOP

### Step 1: Extract YouTube Video IDs & Song Query

1. Parse all provided YouTube links using regex:
   ```javascript
   /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
   ```
2. Extract:
   - `primaryId`: Primary YouTube video ID.
   - `allIds`: Array of all extracted 11-character video IDs `['id_1', 'id_2', ...]`.
   - `primaryUrl`: Primary YouTube watch URL.
   - `alternateUrls`: Additional YouTube URLs provided.
3. Determine Artist Name and Song Title (in English and Korean).

---

### Step 2: Fetch Complete Raw SRT from RentAnAdviser via `browser_subagent`

1. Launch `browser_subagent` to open RentAnAdviser search or subtitle page:
   - Search URL: `https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx`
   - Direct subtitle page: `https://www.rentanadviser.com/subtitles/getsubtitles.aspx?....`
2. Locate the **Korean (Hangul / `-ko`)** subtitle entry.
3. **Solve the Numeric Verification Code**:
   - Identify the verification digits displayed on `getsubtitles.aspx`.
   - Enter the verification numbers into the input field and click Submit / Download.
4. **Copy the Full Raw Subtitle Text**:
   - Extract the entire unclipped SRT / LRC text returned by the page.

---

### Step 3: Calibrate Intro Offset & Validate Format

1. Check when the first lyric line starts in the YouTube video vs. the downloaded subtitle:
   - If the MV has an intro offset (e.g. vocals start at 0:04.5 in MV vs 0:00.5 in raw SRT), calculate `Offset = +4.000s`.
   - Shift all timestamps by `+Offset`.
2. Ensure the resulting `.srt` meets the format specification:
   - Millisecond-accurate timestamps (`00:00:04,500 --> 00:00:08,200`).
   - Incrementing line numbers (`1, 2, 3...`).
   - Over 70% of lines contain Korean Hangul syllables (`/[가-힣]/`).
3. Save the formatted `.srt` file to:
   - `public/lyrics/<ARTIST>-<SONG>.srt`

---

### Step 4: Update Video Mapping Table & Registries

Update the three registry files:

1. **[`src/utils/videoSrtMapping.js`](file:///Users/hsiaotingchen/korean-typing-game/src/utils/videoSrtMapping.js)**:
   ```javascript
   {
     id: '<artist_song_id>',
     title: '<Song Title>',
     artist: '<Artist Name (Hangul)>',
     srtFilename: '<ARTIST>-<SONG>.srt',
     srtPath: '/lyrics/<ARTIST>-<SONG>.srt',
     youtubeIds: ['<primary_id>', '<alt_id_1>'],
     primaryUrl: 'https://www.youtube.com/watch?v=<primary_id>',
     alternateUrls: ['https://www.youtube.com/watch?v=<alt_id_1>'],
     description: '<Artist> - <Song> synchronized SRT subtitle lyrics'
   }
   ```
2. **[`src/utils/preparedLyrics.js`](file:///Users/hsiaotingchen/korean-typing-game/src/utils/preparedLyrics.js)**:
   Add entry to `PREPARED_SRT_LIBRARY`.
3. **[`src/utils/kpopSongs.js`](file:///Users/hsiaotingchen/korean-typing-game/src/utils/kpopSongs.js)**:
   Add preset button to `KPOP_SONG_PRESETS`.

---

### Step 5: Verification & Quality Check

1. Run `npm run lint` (`oxlint`) to ensure zero errors.
2. Run `npm run build` (`vite build`) to verify bundle integrity.
3. Test video playback in the browser to confirm lyrics sync with audio.
