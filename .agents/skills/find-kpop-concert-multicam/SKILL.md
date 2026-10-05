---
name: find-kpop-concert-multicam
description: >-
  Use this skill when the user provides an artist (e.g. BABYMONSTER), a concert
  venue/tour location (e.g. KYOCERA DOME OSAKA, Summer Sonic, KSPO Dome), and/or
  a song name, and requests to: (1) retrieve the concert's full live performance
  setlist, and (2) search and organize 10 distinct multi-angle YouTube videos/fancams
  (CAM 1 to CAM 10: center stage, member-focused cams, VIP pit, upper stand lightstick
  wave, live band mix) for synchronized multi-camera playback in Hangul PopPop's
  Concert Video Wall. Enforces multilingual search (Korean, Japanese, Chinese, English)
  and STRICT exclusion of YouTube Shorts.
---

# Find K-Pop Concert Multi-Cam & Fancams SOP (K-Pop 演唱會歌單與十視角影片檢索技能)

This skill provides an automated, standardized procedure for discovering concert setlists (演唱會完整表演歌單) and finding **10 distinct perspective fancams (10 種不同角度的播放影片)** for any chosen song at a specific concert venue (such as **BABYMONSTER @ KYOCERA DOME OSAKA**).

---

## ⚡ Quick CLI Commands

Use the bundled fast helper script for instant search:

```bash
# 1. Search full setlist / songs performed at a specific concert venue:
node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "BABYMONSTER" --venue "KYOCERA DOME OSAKA" --setlist

# 2. Search 10 distinct camera angles for a specific song (Auto-enforces Multilingual + NO Shorts):
node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "BABYMONSTER" --venue "KYOCERA DOME OSAKA" --song "DRIP"

# 3. Output in JSON format (ready to paste into src/data/concertsData.js):
node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "BABYMONSTER" --venue "KYOCERA DOME OSAKA" --song "DRIP" --json
```

---

## 🌐 Multilingual Query Strategy (韓文、日文、中文、英文四語檢索規範)

When searching for fancams, **always cross-reference multi-language keywords** to capture official broadcasts, Japanese local concert recordings, Korean music show 4K fancams, and overseas fan uploads:

| 語言 | 團體 / 地點關鍵字 | 舞台 / 直拍關鍵字 | 成員名稱對照表 (BABYMONSTER) |
| :--- | :--- | :--- | :--- |
| **韓文 (KO)** | `베이비몬스터`, `쿄세라돔`, `오사카 콘서트` | `직캠`, `풀캠 4K`, `무대`, `앙코르` | `아현` (Ahyeon), `아사` (Asa), `루카` (Ruka), `파리타` (Pharita), `치키타` (Chiquita), `라미` (Rami), `로라` (Rora) |
| **日文 (JA)** | `ベイビーモンスター`, `ベビモン`, `京セラドーム 大阪` | `ライブ`, `ファンカム 4K`, `フルステージ`, `アンコール` | `アヒョン`, `アサ`, `ルカ`, `ファリタ`, `チキータ`, `ラミ`, `ローラ` |
| **中文 (ZH)** | `BABYMONSTER`, `大阪巨蛋`, `日本巡迴演唱會` | `現場直拍`, `全景 4K`, `搖滾區`, `安可`, `手燈海` | `鄭雅譞`, `ASA`, `RUKA`, `PHARITA`, `CHIQUITA`, `RAMI`, `RORA` |
| **英文 (EN)** | `BABYMONSTER`, `Kyocera Dome Osaka`, `CHOOM Tour` | `full fancam 4K`, `center cam`, `VIP pit`, `lightstick wave` | Ahyeon, Asa, Ruka, Pharita, Chiquita, Rami, Rora |

---

## 🏛️ 100% Strict Venue-Matching Policy (100% 場館地點絕對鎖定原則)

**MANDATORY**: 當使用者指定特定演唱會場館（如 `KYOCERA DOME OSAKA` 京瓷巨蛋、`KSPO DOME`、`SUMMER SONIC TOKYO`）時，**全部 10 個機位必須 100% 嚴格錄製於該場館演出現場**：
1. **零跨站替換原則 (Zero Cross-City Substitution)**：
   - **嚴格禁止**拿同一巡迴的其他城市站點（例如：首爾、馬尼拉、澳門、台北、香港）混充指定場館。
   - 所有 10 支影片的標題、錄影地點或演出紀錄，必須經查核確認為該指定場館當日/當場次（例如：京瓷巨蛋 2026.09.22 Day 1 / 2026.09.23 Day 2）。
2. **場館視角組合架構**（當單一曲目的成員直拍數量受場地管制限制時）：
   - `CAM 1 ~ CAM 2`：場館 Day 1 / Day 2 主舞台完整直擊
   - `CAM 3 ~ CAM 4`：主打歌曲現場 / 安可狂歡視角
   - `CAM 5 ~ CAM 6`：9 萬觀眾歡呼聲與巨蛋看台手燈海氛圍
   - `CAM 7 ~ CAM 8`：搖滾區直擊與中央舞台特寫
   - `CAM 9 ~ CAM 10`：該場館公開之成員個人直拍或 Solo 舞台直拍
3. **場館關鍵字強制查驗**：
   - 韓文：`쿄세라돔`, `오사카 돔`
   - 日文：`京セラドーム`, `京セラドーム大阪`, `京セラ`
   - 中文：`京瓷巨蛋`, `大阪巨蛋`
   - 英文：`Kyocera Dome Osaka`, `Kyocera Dome`

---

## 📅 2026 Year-Priority Policy (2026 年份與巡演現場絕對優先原則)

**MANDATORY**: Concert Wall 專為巡迴演唱會現場打造，影片檢索必須**以 2026 年份及巡迴演唱會現場為主**：
1. **優先採集 2026 年巡演/音樂節現場**：
   - 包含 `2026-27 WORLD TOUR [CHOOM]` 各地巡迴（日本、首爾、香港、馬尼拉、澳門、台北等）與 2026 大型音樂節（如 Summer Sonic 2026、TIMA 2026）。
   - **禁止/避免**以 2024 年舊電視打歌棚錄舞台充數，應全面使用 2026 年最新巡演與演唱會現場真實視角。
2. **關鍵字強制嵌入 2026**：
   - 韓文：`2026 베이비몬스터 [곡명] 콘서트 직캠 / 춤 CHOOM 투어`
   - 日文：`2026 ベビモン [曲名] ライブ / 京セラドーム`
   - 中文：`2026 BABYMONSTER [歌名] 巡迴演唱會 / 現場直拍`
   - 英文：`2026 BABYMONSTER WORLD TOUR CHOOM [Song] 4K fancam`

---

## 🚫 Strict YouTube Shorts Exclusion Policy (嚴格排除短影音規範)

**MANDATORY**: Multi-Cam Concert Wall requires horizontal (16:9) full-length stage recordings. **Never include YouTube Shorts** (垂直短影音).

### Shorts Detection & Verification Protocol:
1. **Title / URL Regex Check**:
   - Immediately filter out any video whose title, hashtag, or URL matches:
     `/#shorts?|shorts?|#tiktok/i`
2. **HTTP HEAD Status Verification (Zero False-Positives)**:
   - Query `https://www.youtube.com/shorts/${videoId}` via HTTP HEAD with `redirect: 'manual'`:
     - **HTTP 200 OK**: The video is registered as a Short on YouTube -> **REJECT**.
     - **HTTP 302 / 303 Redirect** (redirects to `/watch?v=${videoId}`): The video is a regular horizontal video -> **ACCEPT**.

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
| **CAM 9** | **搖滾特區/巨蛋直擊 (VIP Pit / Dome Arena Cam)** | `巨蛋現場直擊` | 最貼近舞台的低角度視角、強烈現場低音震盪與零距離沉浸感 |
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

Once the user selects a song (e.g. `DRIP`, `SHEESH`, `BATTER UP`, `WE GO UP`, `PSYCHO`):

1. Execute the multi-angle search with multilingual queries and Shorts filter:
   ```bash
   node .agents/skills/find-kpop-concert-multicam/scripts/search_fancams.mjs --artist "<Artist>" --venue "<Venue>" --song "<Song Title>"
   ```
2. For each of the 10 camera angles:
   - Ensure the video ID is valid (11 characters).
   - Verify it is a full horizontal video (reject all Shorts).
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
       id: 'drip_cam1',
       title: 'BABYMONSTER 1st WORLD TOUR IN JAPAN - DRIP -Encore- [4K]',
       tag: '全景主視角',
       videoId: 'm6A1bCKDrRs',
       author: 'CrushMixes',
       badge: 'CAM 1'
     },
     // ... CAM 2 to CAM 10
   ]
   ```
5. Test locally at `http://localhost:5174/` on the **Concert Wall** tab.
