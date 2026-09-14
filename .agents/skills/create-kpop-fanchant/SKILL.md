---
name: create-kpop-fanchant
description: >-
  Use this skill when the user wants to create, register, search, or synchronize
  an official K-Pop fanchant (應援 / 應援法 / 응원 / 응원법 / cheering guide) for any
  song in Hangul PopPop. Covers finding official agency cheering guides (Weverse
  notices, YouTube cheering guide videos, fan community cheat sheets), aligning
  chant cues with the song's YouTube MV and SRT timestamps, setting cue types
  (shout, hook, echo, name, hype, scream), and registering into
  src/utils/fanchantData.js.
---

# Create K-Pop Fanchant (K-Pop 官方應援曲製作與同步 SOP)

This skill provides a standardized, end-to-end operational procedure for creating and registering **official K-Pop Fanchants (應援法 / 응원법)** into Hangul PopPop's **Concert Fanchant Practice Mode**.

---

## ⚡ Quick CLI Commands

```bash
# 1. List all currently registered fanchant songs:
node tools/cli.js fanchant --list

# 2. Scaffold a new fanchant template from an existing song's SRT:
node tools/cli.js fanchant --scaffold <YouTube_Video_ID>

# 3. Validate fanchant data integrity and timestamp alignment:
node tools/cli.js fanchant --validate
```

---

## 🎯 The 6 Core Cheering Cue Types (應援類型標籤)

Every cheering cue must specify one of the following 6 standard types:

| Type ID | 標籤名稱 | 代表顏色 | 圖示 | 適用時機與技巧說明 |
| :--- | :--- | :--- | :--- | :--- |
| `shout` | **大聲齊喊** | `#ff3366` | 📢 | 前奏宣告、重要歌詞大合喊（如：`BABY I'mma MONSTER!`、`Got them all going!`） |
| `hook` | **重音連打** | `#ec4899` | 🔥 | 副歌 Hook 重音打擊連打（如：`SHEESH! SHEESH!`、連續三連拍） |
| `echo` | **接唱呼應** | `#38bdf8` | 🗣️ | 成員唱完句尾最後 1~2 拍的即時反擊（如：`축복!`、`춤 춰!`、`boom boom pow!`） |
| `name` | **團名/成員呼喊** | `#a855f7` | ⚡ | 成員依序點名（Roll-call）或高潮空檔團名吶喊（如：`베! 이! 비! 몬! 스! 터!`） |
| `hype` | **狂歡跳躍** | `#f59e0b` | 🎉 | 間奏/結尾 Dance Break 跳躍與全場狂歡（如：`Let's go!`、`Jump jump and let it go!`） |
| `scream` | **全場尖叫** | `#10b981` | 🌟 | 高音延伸、結尾最後一拍的全場歡呼尖叫（如：`📢 ( 와아아아아~~ 全場大尖叫！ )`） |

---

## 📋 Full 5-Step Operational SOP

### Step 1: Verify Song & Subtitle Existence
1. Check if the song is already registered in `src/utils/kpopSongs.js` and has an SRT file in `public/lyrics/`:
   ```bash
   grep -i "<Song Title>" src/utils/kpopSongs.js
   ```
2. If the song does NOT exist yet, first use the `add-kpop-song-by-name` skill to fetch the official MV and bilingual SRT:
   ```bash
   node tools/cli.js fetch --song "<Artist> <Song Title>" --register
   ```
3. Record the YouTube `videoId` (e.g. `2wA_b6YHjqQ`) and corresponding `.srt` path.

---

### Step 2: Retrieve the Official Cheering Guide (應援法蒐集)

Search for the **official cheering guide** released by the artist's agency or major fan clubs:

#### 1. Official Agency Weverse Notice (最高優先級)
- Search query: `"<Artist>" "<Song Title>" "응원법 안내" site:weverse.io` or `https://m.weverse.io/<artist>/notice`
- Contains:
  - Official colored lyrics (bold/colored text = fan chant).
  - Parentheses `()` or brackets `[]` denoting actions or crowd shouts.
  - Member roll-call order (usually leader-first or age order).

#### 2. KpopChords Fanchant Index & Guides (極高實用度，含雙語對照)
- URL / Index: `https://www.kpopchords.com/chant/<artist>-fanchant-index` (例：`https://www.kpopchords.com/chant/babymonster-fanchant-index`)
- 特色與使用要點：
  - 整理了官方 Weverse 發布的應援法與對應嵌入 YouTube MV。
  - **重要準則：務必優先檢視「KOREAN」版本標籤頁**（非僅看 ROMANIZED）。
  - **色彩判定**：通常非白色字體即為需要應援的詞（HTML 標籤為 `<span class="chant1">` 重音/齊喊、`<span class="chant2">` 團名/口號呼應、`<span class="chant3">` `[함성]` 尖叫歡呼）。
  - 可直接透過 `read_url_content` 快速抓取頁面並解析。

#### 3. Official YouTube Cheering Guide Video
- Search query:
  ```bash
  yt-dlp --print "%(id)s %(title)s" "ytsearch3:<Artist> <Song Title> CHEERING GUIDE"
  ```
- Official cheering videos usually have members holding lightsticks demonstrating the shouts in real time with on-screen karaoke lyrics.

#### 4. Japanese Fan Blog / Community Cheat Sheets (備用對照)
- Search Ameblo or Naver Blog for `<Artist> <Song Title> 掛け声 / 응원법`.
- Japanese fan guides are exceptionally detailed with line-by-line color coding and kana/romanization.

---

### Step 3: Calibrate Cue Timestamps Against Video & SRT

1. Open the song's existing SRT file (`public/lyrics/<SONG>.srt`).
2. Map each chant cue to the exact playback timestamp ($t_{\text{start}}$ ~ $t_{\text{end}}$):
   - **For `shout` / `hook`**: Match the musical beat or lyric line where the shout occurs.
   - **For `echo`**: Locate the idol's lyric line, and place the chant start time at the silence/pause right after the syllable ends.
   - **For `name`**: Align roll-call names with the 4-count or 8-count beat.
3. Configure `leadTimeSec`:
   - Fast beats / Hook: `1.0s` ~ `1.2s`
   - Normal verses / Echo: `1.5s`
   - Important group name shouts / Intros: `2.0s` ~ `2.2s` (allows full 3-2-1 visual countdown)

---

### Step 4: Register into `src/utils/fanchantData.js`

Add the song definition to `FANCHANT_PRESETS` in `src/utils/fanchantData.js`:

```javascript
export const FANCHANT_PRESETS = {
  // Existing songs...
  '<YOUTUBE_VIDEO_ID>': {
    songId: '<YOUTUBE_VIDEO_ID>',
    title: '<Song Title>',
    artist: '<Artist (Hangul)>',
    groupName: '<Group Name>',
    fandomName: '<Fandom Name>',
    description: '<Brief cheering guide tips and highlights>',
    cues: [
      {
        id: '<song-prefix>-1',
        start: 9.87,
        end: 11.49,
        chant: 'BABY I\'mma MONSTER!',
        type: 'shout',
        roman: 'BABY I\'mma MONSTER!',
        meaning: '寶貝我是怪物 (官方標誌句齊喊)',
        tip: '前奏聽完 3 次 Da la lun dun 之後立刻爆發！',
        leadTimeSec: 2.0
      },
      // ... more cues
    ]
  }
};
```

---

### Step 5: Verification & Quality Assurance

1. **Syntax & Build Check**:
   ```bash
   npm run build
   npm run lint
   ```
2. **CLI Data Validation**:
   ```bash
   node tools/cli.js fanchant --validate
   ```
3. **Local In-App Verification**:
   - Start or check dev server: `npm run dev`
   - Open Song Practice (`KpopVideoMode`).
   - Switch to the newly added song.
   - Verify the **「🪄 應援模式 ON」** button appears.
   - Verify that:
     - 3-2-1 ring countdown triggers smoothly before each cue.
     - NOW SHOUT pop animation fires accurately on beat.
     - Audio cue chime plays (if sound enabled).
     - Lightstick swings and blasts during shouts.
     - Right-column lyrics list displays glowing fanchant badges.
     - Clicking any fanchant badge rewinds 1.5s to practice the cue.

---

## 🛡️ Important Safety & Policy Rules

- **No Unauthorized File Deletions**: Never delete existing workspace files.
- **No Automatic Deployment**: Local verification with `npm run build` is allowed, but never run `deploy` or `firebase deploy` unless explicitly instructed.
- **Preserve Existing Cues**: When updating a song, never remove existing cues unless fixing incorrect timestamps.
