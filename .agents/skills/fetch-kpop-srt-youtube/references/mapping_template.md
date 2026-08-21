# Video Mapping & Registry Reference Templates

This reference provides exact code templates for registering new songs in the project.

---

## 1. `src/utils/videoSrtMapping.js` Template

```javascript
export const VIDEO_SRT_MAPPINGS = [
  // Existing entries...
  {
    id: 'illit_magnetic',
    title: 'Magnetic',
    artist: 'ILLIT (아일릿)',
    srtFilename: 'ILLIT-MAGNETIC.srt',
    srtPath: '/lyrics/ILLIT-MAGNETIC.srt',
    youtubeIds: ['Vk5-c_v4gMU', '2JzUZZW_4uM'],
    primaryUrl: 'https://www.youtube.com/watch?v=Vk5-c_v4gMU',
    alternateUrls: [
      'https://www.youtube.com/watch?v=2JzUZZW_4uM'
    ],
    description: 'ILLIT - Magnetic synchronized SRT subtitle lyrics'
  }
];
```

---

## 2. `src/utils/preparedLyrics.js` Template

```javascript
export const PREPARED_SRT_LIBRARY = [
  // Existing entries...
  {
    id: 'illit_magnetic',
    title: 'Magnetic',
    artist: 'ILLIT (아일릿)',
    youtubeId: 'Vk5-c_v4gMU',
    filename: 'ILLIT-MAGNETIC.srt',
    path: '/lyrics/ILLIT-MAGNETIC.srt',
    description: 'ILLIT Magnetic full prepared SRT subtitle file.'
  }
];
```

---

## 3. `src/utils/kpopSongs.js` Template

```javascript
export const KPOP_SONG_PRESETS = [
  // Existing entries...
  {
    id: 'Vk5-c_v4gMU',
    title: 'Magnetic',
    artist: 'ILLIT (아일릿)',
    youtubeUrl: 'https://www.youtube.com/watch?v=Vk5-c_v4gMU',
    thumbnail: 'https://img.youtube.com/vi/Vk5-c_v4gMU/hqdefault.jpg',
    srtFilename: 'ILLIT-MAGNETIC.srt',
    srtPath: '/lyrics/ILLIT-MAGNETIC.srt',
    lyrics: []
  }
];
```
