---
name: find-kpop-concert-multicam
description: >-
  Use this skill when the user provides an artist (e.g. BABYMONSTER), a concert
  venue/tour location (e.g. KYOCERA DOME OSAKA, Summer Sonic, KSPO Dome), and/or
  a song name, and requests to: (1) retrieve the concert's full live performance
  setlist, and (2) search and organize 10 distinct multi-angle YouTube videos/fancams
  (CAM 1 to CAM 10: center stage, member-focused cams, VIP pit, upper stand lightstick
  wave, live band mix) for synchronized multi-camera playback in Hangul PopPop's
  Concert Video Wall.
---

# Find K-Pop Concert Multi-Cam & Fancams SOP (K-Pop 演唱會歌單與十視角影片檢索技能)

This skill provides an automated, standardized procedure for discovering concert setlists (演唱會完整表演歌單) and finding **10 distinct perspective fancams (10 種不同角度的播放影片)** for any chosen song at a specific concert venue (such as **BABYMONSTER @ KYOCERA DOME OSAKA**).

---

## ⚡ Quick CLI Commands

Use the bundled fast helper script for instant search:

```bash
# 1. Search full setlist / songs performed at a specific concert venue:
node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "BABYMONSTER" --venue "KYOCERA DOME OSAKA" --setlist

# 2. Search 10 distinct camera angles for a specific song at that concert:
node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "BABYMONSTER" --venue "KYOCERA DOME OSAKA" --song "SHEESH"

# 3. Output in JSON format (ready to paste into src/data/concertsData.js):
node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "BABYMONSTER" --venue "KYOCERA DOME OSAKA" --song "DRIP" --json
```

---

## 🎯 The 10 Camera Angle Taxonomy (十角機位標準架構)

When gathering 10 multi-angle videos for a song, classify each video into this standard 10-camera framework:

| 機位編號 | 視角類型名稱 | 標籤 Tag | 鏡頭特色與畫面重點 |
| :--- | :--- | :--- | :--- |
| **CAM 1** | **主舞台全景 (Center Stage Full Cam)** | `全景主視角` | 4K 廣角拍攝舞台整體視覺、大螢幕 LED 背景、完整走位與隊形變換 |
| **CAM 2** | **Ahyeon 焦點直拍 (Ahyeon Focus Cam)** | `Ahyeon 直拍` | 高音主唱爆發力、舞台氣場狂野表情與中心跳舞段落 |
| **CAM 3** | **Asa 饒舌與舞台特寫 (Asa Focus Cam)** | `Asa 特寫` | 快嘴饒舌、流暢律動與標誌性手勢近身直拍 |
| **CAM 4** | **Ruka 舞台焦點直拍 (Ruka Focus Cam)** | `Ruka 直拍` | 刀群舞核心力道、嘻哈帥氣氣場與走位掌控 |
| **CAM 5** | **Pharita 高音主唱視角 (Pharita Focus Cam)** | `Pharita 直拍` | 清澈高音延伸、優雅身態與大合唱互動特寫 |
| **CAM 6** | **Chiquita 舞蹈動作焦點 (Chiquita Focus Cam)** | `Chiquita 直拍` | 忙內反差萌、超強彈性與極限力量感舞蹈焦點 |
| **CAM 7** | **Rami 靈魂歌聲直拍 (Rami Focus Cam)** | `Rami 直拍` | 獨特厚實靈魂音色、生嗓開麥與即興轉音特寫 |
| **CAM 8** | **Rora 情感特寫焦點 (Rora Focus Cam)** | `Rora 直拍` | 抒情段落深情眼神、甜美微笑道歉與主旋律和聲 |
| **CAM 9** | **搖滾特區前排直擊 (VIP Pit / Floor Arena)** | `搖滾區近景` | 最貼近舞台的低角度視角、強烈現場低音震盪與零距離沉浸感 |
| **CAM 10** | **看台手燈海與震撼全景 (Upper Stand Wave)** | `全場燈海` | 高處俯瞰 9 萬觀眾紅色手燈海波浪、雷射燈光秀與全場震撼大合唱 |

---

## 📋 Full 3-Phase Execution Workflow

### Phase 1: Retrieve Concert Setlist (檢索演唱會整場歌單)

When the user specifies an artist and venue (e.g. *Baby Monster* at *KYOCERA DOME OSAKA*), **first discover and present the full concert setlist** before diving into individual songs:

1. Run the CLI setlist search:
   ```bash
   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "<Artist>" --venue "<Venue>" --setlist
   ```
2. Supplement with web search if needed:
   - Query: `"<Artist>" "<Venue>" setlist`
3. Structure the setlist by concert sections:
   - **Act I: 開場震撼主舞台 (Opening & Title Hits)**
   - **Act II: 成員個人 Solo & 小分隊 (Solo Stages & Unit Collabs)**
   - **Act III: 核心專輯打歌段落 (Album Highlights & Dance Breaks)**
   - **Act IV: 安可巡場大合唱 (Encore & Send-off)**
4. Present the setlist clearly to the user and prompt them to select which song(s) they want to explore in 10-camera multi-angle view.

---

### Phase 2: Find 10 Multi-Angle Videos for Selected Song (十角度影片檢索)

Once the user selects a song (e.g. `SHEESH`, `DRIP`, `BATTER UP`, `WE GO UP`, `PSYCHO`):

1. Execute the multi-angle search:
   ```bash
   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "<Artist>" --venue "<Venue>" --song "<Song Title>"
   ```
2. For each of the 10 camera angles:
   - Ensure the video ID is valid (11 characters).
   - Prefer 4K / 60fps / 1080p high quality fancams.
   - Verify the recording is from the target venue or the official tour performance.
3. Present the 10-camera table with clickable Markdown links:
   - Camera Number (`CAM 1` ~ `CAM 10`)
   - Angle Type & Tag
   - YouTube Title & Uploader Name
   - Clickable YouTube link with Video ID

---

### Phase 3: Integration into Hangul PopPop Concert Wall (整合至播放牆)

To immediately display these 10 angles inside the web app's **Concert Wall**:

1. Open [`src/data/concertsData.js`](file:///Users/timchen/korean-typing-game/src/data/concertsData.js).
2. Locate the concert entry (or create a new concert preset).
3. Place 3 favorite angles into `defaultSlots` (Slot 0, Slot 1, Slot 2).
4. Add all 10 angles into `availableAngles`:
   ```javascript
   availableAngles: [
     {
       id: 'angle_osaka_cam1',
       title: '京瓷巨蛋大舞台全景 (Center Stage 4K)',
       tag: '全景主視角',
       videoId: '<11_CHAR_ID>',
       author: '<Uploader>',
       badge: 'CAM 1'
     },
     // ... CAM 2 to CAM 10
   ]
   ```
5. Test locally at `http://localhost:5174/` on the **Concert Wall** tab.

---

## 💡 Example Prompt Scenarios

- **Scenario 1 (Setlist Discovery)**:
  - *User*: "我想看 BABYMONSTER 大阪巨蛋 (KYOCERA DOME OSAKA) 的演唱會，先幫我列出整場表演歌單。"
  - *Action*: Execute Phase 1 -> Output structured setlist -> Ask user which song to expand.

- **Scenario 2 (10-Camera Fancam Search)**:
  - *User*: "幫我找大阪巨蛋的 SHEESH，我要 10 個不同角度的影片！"
  - *Action*: Execute Phase 2 -> Run `search_fancams.mjs` -> Output 10-camera table -> Offer integration into `concertsData.js`.
