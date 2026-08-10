# 🎬 YouTube Video & SRT Lyric Mapping Table

This mapping table connects YouTube Music Video URLs / Video IDs directly with their prepared `.srt` lyric subtitle files in `/lyrics/`.

---

## 📊 Mapping Table

| Song Title | Artist | YouTube Video URL | YouTube Video ID | Prepared SRT Subtitle File |
| :--- | :--- | :--- | :--- | :--- |
| **DRIP** | BABYMONSTER | `https://www.youtube.com/watch?v=Zp-Jhuhq0bQ` | `Zp-Jhuhq0bQ` | [`BABYMONSTER-DRIP.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/BABYMONSTER-DRIP.srt) |
| **Super Shy** | NewJeans | `https://www.youtube.com/watch?v=cxhqqpVk65Q` | `cxhqqpVk65Q` | [`super_shy.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/super_shy.srt) |
| **Dynamite** | BTS | `https://www.youtube.com/watch?v=gdZLi9oWNZg` | `gdZLi9oWNZg` | [`dynamite.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/dynamite.srt) |
| **Magnetic** | ILLIT | `https://www.youtube.com/watch?v=Vk5-c_v4gMU` | `Vk5-c_v4gMU` | [`magnetic.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/magnetic.srt) |
| **Hype Boy** | NewJeans | `https://www.youtube.com/watch?v=aOKqWlsV0H0` | `aOKqWlsV0H0` | [`hype_boy.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/hype_boy.srt) |
| **Flower (꽃)** | JISOO | `https://www.youtube.com/watch?v=Y8JFxS1HlDo` | `Y8JFxS1HlDo` | [`flower.srt`](file:///Users/timchen/korean-typing-game/public/lyrics/flower.srt) |

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
