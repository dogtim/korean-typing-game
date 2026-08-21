---
name: fetch-kpop-srt-youtube
description: >-
  Use this skill when the user provides one or multiple YouTube links for a K-Pop song
  and requests to search/fetch Korean (Hangul) synchronized SRT subtitles from RentAnAdviser
  (https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx) or verified lyric databases,
  save the SRT file, and update the video-to-SRT mapping table.
---

# Fetch K-Pop SRT & YouTube Mapping Manual

This skill defines the standardized SOP for fetching authentic Korean (Hangul) time-synced lyrics from **RentAnAdviser Subtitles** (or verified lyric databases) and registering YouTube video links to the game's mapping table.

---

## ⚠️ Core Architectural Principles

1. **YouTube Video = Media Playback Only**:
   - YouTube links are used exclusively for video playback, embedding via YouTube IFrame Player, extracting Video IDs (`youtubeIds`), and identifying the artist/song name.
   - **DO NOT** extract or infer lyrics from YouTube video summaries or hallucinated machine translations.
2. **Lyrics Source = Authentic Lyric Databases**:
   - **Primary Source**: [RentAnAdviser Subtitles](https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx) (Look for Korean `-ko` entry with synced timestamps).
   - **Secondary / Verification Sources**: Genius, AZLyrics, Kugeci, Melon, or Musixmatch for exact syllable-accurate Hangul text.
3. **Hangul Integrity**:
   - Ensure the lyrics lines match the authentic Korean artist vocals with accurate timestamps for listening, typing, and pronunciation training.

---

## 🎯 Input Parameters

The user will provide:
1. **One or Multiple YouTube Links / IDs** (e.g. Official MV, Dance Practice, Live Stage).
2. **(Optional) Song Title & Artist Name** (if omitted, extracted from YouTube metadata).

---

## 📋 Standard Step-by-Step SOP

### Step 1: Extract All YouTube Video IDs

1. Parse all provided YouTube links using the standard extraction regex:
   ```javascript
   /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
   ```
2. Extract:
   - `primaryId`: The main video ID (first link / official MV).
   - `allIds`: Array of all extracted 11-character video IDs `['id_1', 'id_2', ...]`.
   - `primaryUrl`: Primary YouTube watch URL.
   - `alternateUrls`: Array of additional URLs provided.
3. Identify Song Title and Artist Name (e.g., `BABYMONSTER - SHEESH`).

---

### Step 2: Search RentAnAdviser & Verified Databases for Authentic Korean Lyrics

1. Search RentAnAdviser Subtitles:
   - Target: `https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx`
   - Query: `[Artist] [Song Title]`
   - Select the **Korean (Hangul)** version (marked with `-ko` or containing verified Hangul syllables `/[가-힣]/`).
2. Verify against authoritative lyric sources (Genius, AZLyrics, Melon) to ensure every line is the authentic song lyric (and not synthetic translations).
3. If lyrics are in LRC format (`[mm:ss.xx]Text`), convert timestamps to standard SRT format (`00:mm:ss,xxx --> 00:mm:ss,xxx`).

---

### Step 3: Format & Validate the SRT File

Ensure the generated SRT follows the standard format:

```text
1
00:00:10,500 --> 00:00:13,200
Da-la-lun-dun, Da-la-lun-dun

2
00:00:13,200 --> 00:00:16,000
Baby, I'ma monster

3
00:00:16,000 --> 00:00:19,200
Mano a mano, I see you in slow-mo

4
00:00:19,200 --> 00:00:22,000
넌 바라봐 내 손짓, 온 세상을 뒤집어
```

#### Validation Checklist:
- [x] Timestamps use comma `,` for milliseconds (`00:01:23,456 --> 00:01:27,890`).
- [x] Every line has an incrementing index (`1, 2, 3...`).
- [x] End timestamp is strictly greater than start timestamp (`end > start`).
- [x] Lines contain authentic Korean vocals.

#### File Placement:
Save the formatted `.srt` file into two locations:
1. `public/lyrics/<ARTIST>-<SONG>.srt` (e.g. `public/lyrics/BABYMONSTER-SHEESH.srt`)
2. `lyrics/<ARTIST>-<SONG>.srt`

---

### Step 4: Update Video Mapping Table & Registries

Update the following three registry files:

#### 1. [`src/utils/videoSrtMapping.js`](file:///Users/hsiaotingchen/korean-typing-game/src/utils/videoSrtMapping.js)
Append a new entry to `VIDEO_SRT_MAPPINGS`:
```javascript
{
  id: '<artist_song_id>', // lowercase snake_case (e.g. 'babymonster_sheesh')
  title: '<Song Title>',
  artist: '<Artist Name (Hangul)>',
  srtFilename: '<ARTIST>-<SONG>.srt',
  srtPath: '/lyrics/<ARTIST>-<SONG>.srt',
  youtubeIds: ['<primary_id>', '<alt_id_1>', '<alt_id_2>'], // All YouTube IDs supported!
  primaryUrl: 'https://www.youtube.com/watch?v=<primary_id>',
  alternateUrls: [
    'https://www.youtube.com/watch?v=<alt_id_1>'
  ],
  description: '<Artist> - <Song> synchronized SRT subtitle lyrics'
}
```

#### 2. [`src/utils/preparedLyrics.js`](file:///Users/hsiaotingchen/korean-typing-game/src/utils/preparedLyrics.js)
Append to `PREPARED_SRT_LIBRARY`:
```javascript
{
  id: '<artist_song_id>',
  title: '<Song Title>',
  artist: '<Artist Name (Hangul)>',
  youtubeId: '<primary_id>',
  filename: '<ARTIST>-<SONG>.srt',
  path: '/lyrics/<ARTIST>-<SONG>.srt',
  description: '<Artist> <Song> full prepared SRT subtitle file.'
}
```

#### 3. [`src/utils/kpopSongs.js`](file:///Users/hsiaotingchen/korean-typing-game/src/utils/kpopSongs.js)
Append to `KPOP_SONG_PRESETS`:
```javascript
{
  id: '<primary_id>',
  title: '<Song Title>',
  artist: '<Artist Name (Hangul)>',
  youtubeUrl: 'https://www.youtube.com/watch?v=<primary_id>',
  thumbnail: 'https://img.youtube.com/vi/<primary_id>/hqdefault.jpg',
  srtFilename: '<ARTIST>-<SONG>.srt',
  srtPath: '/lyrics/<ARTIST>-<SONG>.srt',
  lyrics: []
}
```

---

### Step 5: Verification & Quality Check

1. Run `npm run lint` (`oxlint`) to ensure zero lint errors.
2. Run `npm run build` (`vite build`) to verify bundle integrity.
3. Verify playback and subtitle synchronization in the game.
