# 🎬 YouTube Video & SRT Lyric Mapping Table

This mapping table connects YouTube Music Video URLs / Video IDs directly with their prepared `.srt` lyric subtitle files in `/lyrics/`.

---

## 📊 Mapping Table

| Song Title | Artist | YouTube Video URL | YouTube Video ID | Prepared SRT Subtitle File |
| :--- | :--- | :--- | :--- | :--- |
| **CHOOM (춤)** | BABYMONSTER | `https://www.youtube.com/watch?v=x3eqqoZPV_E` | `x3eqqoZPV_E` | [`BABYMONSTER-CHOOM.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/BABYMONSTER-CHOOM.srt) |
| **DRIP** | BABYMONSTER | `https://www.youtube.com/watch?v=Zp-Jhuhq0bQ` | `Zp-Jhuhq0bQ` | [`BABYMONSTER-DRIP.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/BABYMONSTER-DRIP.srt) |
| **PSYCHO** | BABYMONSTER | `https://www.youtube.com/watch?v=yd_uG3TtREs` | `yd_uG3TtREs` | [`BABYMONSTER-PSYCHO.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/BABYMONSTER-PSYCHO.srt) |

---

## 🛠️ How to Add a New Video-to-SRT Mapping

1. Place your new `.srt` subtitle file in `public/lyrics/my_song.srt`.
2. Open `src/utils/videoSrtMapping.js`.
3. Add a mapping entry with the song details and YouTube Video ID:
   ```javascript
   {
     id: 'my_song',
     title: 'Song Title',
     artist: 'Artist Name',
     srtFilename: 'my_song.srt',
     srtPath: '/lyrics/my_song.srt',
     youtubeIds: ['YOUR_YOUTUBE_ID'],
     primaryUrl: 'https://www.youtube.com/watch?v=YOUR_YOUTUBE_ID',
     description: 'Prepared SRT subtitles'
   }
   ```
4. Now when users load `https://www.youtube.com/watch?v=YOUR_YOUTUBE_ID` in the app, the `.srt` lyrics will load automatically!
