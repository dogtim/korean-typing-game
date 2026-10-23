# K-Pop 多機位演唱會同步播放：技術挑戰與實作架構指南
(Multi-Camera Synchronized Concert Wall: Technical Challenges & Implementation Architecture)

本文檔詳細記錄 Hangul PopPop（韓文節奏打字遊戲）中**「演唱會多視角電視牆 (Concert Video Wall)」**在多機位同步播放、時間軸錨定、3D Coverflow 滑動以及曲目無縫切換中所面臨的**核心困難點**與**完整實作架構**。

---

## 目錄
1. [系統背景與業務需求](#1-系統背景與業務需求)
2. [同步曲目播放的五大核心困難點](#2-同步曲目播放的五大核心困難點)
   - [難點一：異質影片源與開場時間軸偏差](#難點一異質影片源與開場時間軸偏差)
   - [難點二：YouTube IFrame API 生命週期與重載黑畫面](#難點二youtube-iframe-api-生命週期與重載黑畫面)
   - [難點三：瀏覽器 Autoplay 政策與多音訊硬體衝突](#難點三瀏覽器-autoplay-政策與多音訊硬體衝突)
   - [難點四：React Hook 依賴鏈引發的非預期重載迴圈](#難點四react-hook-依賴鏈引發的非預期重載迴圈)
   - [難點五：3D 透視空間下的事件穿透與微小時間漂移](#難點五3d-透視空間下的事件穿透與微小時間漂移)
3. [核心架構與實作方式](#3-核心架構與實作方式)
   - [實作一：多維時間軸錨點矩陣 (`songCues` Matrix)](#實作一多維時間軸錨點矩陣-songcues-matrix)
   - [實作二：純粹秒數跳轉與無感換曲 (`handleJumpToSong`)](#實作二純粹秒數跳轉與無感換曲-handlejumptosong)
   - [實作三：Ref 穩定化生命週期架構 (Decoupled Lifecycle)](#實作三ref-穩定化生命週期架構-decoupled-lifecycle)
   - [實作四：動態歌曲進度換算與無縫視角切換 (`seamlessSwitchFocus`)](#實作四動態歌曲進度換算與無縫視角切換-seamlessswitchfocus)
   - [實作五：3D Coverflow 舞臺渲染與事件遮罩 (`coverflow-click-shield`)](#實作五3d-coverflow-舞臺渲染與事件遮罩-coverflow-click-shield)
4. [資料結構定義範例](#4-資料結構定義範例)
5. [成果驗證與測試總結](#5-成果驗證與測試總結)

---

## 1. 系統背景與業務需求

在大型 K-Pop 巡迴演唱會或音樂祭（例如 BABYMONSTER at Summer Sonic 2026、Kyocera Dome Osaka 2026）中，觀眾常希望同時觀賞多個攝影機角度：
- **CAM 1**：音樂祭中央大舞台全景（Full Stage Master）
- **CAM 2**：VIP 搖滾區近距離直拍（Pit Fancam）
- **CAM 3**：看台區廣角/燈海全景（Upper Stand Stadium Panoramic）

使用者需要在不同曲目（如 *WE GO UP*、*CHOOM*、*DRIP*、*SHEESH*）之間隨時跳轉，並在「三分割」、「立體三分割 (3D Coverflow)」、「電影導演模式」間切換；在切換曲目與左右滑動視角時，**三台機位必須保持持續同步播放，且切換時不可重新載入影片、不可重新從頭播放，達成絲滑無縫接軌**。

---

## 2. 同步曲目播放的五大核心困難點

```
                           【五大同步技術瓶頸】
 ┌──────────────────────────────────────────────────────────────┐
 │ 1. 異質時間軸偏差 (Intro Offset)   : 影片長度、開場秒數皆不一致       │
 │ 2. IFrame 重建延遲 (DOM Re-mount) : 重建播放器引發黑畫面與重頭播放  │
 │ 3. 瀏覽器自動播放限制 (Autoplay)  : 多聲道同播會被瀏覽器強制阻擋    │
 │ 4. React 依賴陷阱 (Hook Cascading): 狀態更新誘發 Effect 錯誤銷毀     │
 │ 5. 網路抖動漂移 (Network Jitter)  : 長時間播放產生累積時間差        │
 └──────────────────────────────────────────────────────────────┘
```

### 難點一：異質影片源與開場時間軸偏差
各機位影片來源不同（官方轉播、不同粉絲站直拍、全場完整記錄）：
- 影片 A：開頭有 8 秒的入場 intro。
- 影片 B：開頭有 14 秒的觀眾歡呼聲。
- 影片 C：是一場長達 90 分鐘的完整表演，該首歌曲始於 1 分 22 秒（82.0 秒）。
- **關鍵問題**：無法使用任何「通用絕對時間」（Global Time）進行同步。若單純讓所有播放器 seek 到第 X 秒，三個畫面唱的根本不是同一句歌詞，甚至出現嚴重的節奏錯位。

### 難點二：YouTube IFrame API 生命週期與重載黑畫面
- YouTube IFrame API 在重新載入影片時（無論是使用 `container.innerHTML` 清空重建，或是反覆調用 `loadVideoById`），均需重新進行認證、初始化播放器物件、握手與緩衝。
- 這會產生 **500ms ~ 2000ms 的明顯延遲與黑畫面閃爍**，徹底摧毀音樂祭演出緊湊連貫的現場沉浸感。

### 難點三：瀏覽器 Autoplay 政策與多音訊硬體衝突
- 現代主流瀏覽器（Chrome, Safari, Edge）基於使用者體驗考量，**全面禁止未經使用者點擊手勢自動播放帶有聲音的媒體**。
- 若同時讓 3 部影片開啟聲音播放，瀏覽器音效裝置會產生硬體衝突，進而強制暫停其中 2 部影片。
- **兩難矛盾**：
  - 若將未關注的機位直接 `pauseVideo()`，當使用者往左或往右滑動時，新機位必須重新發起解碼播放，無法達成「絲滑無縫接上」。
  - 若不暫停，如何讓三部影片在背景持續傳輸串流而不被瀏覽器擋下？

### 難點四：React Hook 依賴鏈引發的非預期重載迴圈
在複雜的多視角元件中，容易落入 React 的依賴鏈陷阱（Dependency Cascade）：
- 若播放器初始化函式 `initPlayer` 將 `activeAudioIndex` 列為依賴：
  每當使用者切換聲音焦點或滑動機位，`initPlayer` 的記憶體引用即改變。
- 若頂層「切換演唱會」的 `useEffect` 不慎將 `initPlayer` 列為依賴：
  使用者點擊「下一首歌曲」$\rightarrow$ `activeAudioIndex` 變更 $\rightarrow$ `initPlayer` 重製 $\rightarrow$ 觸發演唱會重載 Effect $\rightarrow$ 重設回到第一首歌（`firstSong`）並清空 DOM 重建！
- **後果**：使用者無論點擊哪一首歌，播放器都會在數百毫秒後全部被摧毀重置，強制回到整場演唱會最初的第一首歌重新播放。

### 難點五：3D 透視空間下的事件穿透與微小時間漂移
- 在 3D Coverflow（立體三分割）模式中，左右側卡片具備 3D 傾角（`rotateY(±42deg)`）與空間深度（`translateZ(-160px)`）。
- 原生 YouTube `<iframe>` 在 3D 空間下會攔截游標事件，使使用者在左右滑動時無法點擊側邊視角直接切換。
- 各影片解析度（4K vs 1080p）與緩衝速度不同，播放數分鐘後可能產生 200ms ~ 500ms 的背景時鐘漂移。

---

## 3. 核心架構與實作方式

```mermaid
flowchart TD
    A[使用者點選歌曲 / 下一首] --> B[查詢 songCues 錨點時間矩陣]
    B --> C[計算各機位精準起始秒數]
    C --> D[直接呼叫 player.seekTo(cueTime, true)]
    D --> E[保留 DOM 與 IFrame 原型: 零重載]
    E --> F[主視角: unMute + 100% 音量]
    E --> G[兩側視角: mute + 持續 playVideo]
    
    H[使用者向左 / 向右滑動 Coverflow] --> I[讀取當前播放進度 Δt]
    I --> J{目標機位漂移是否 > 0.4s?}
    J -- 是 --> K[執行 seekTo 微校準]
    J -- 否 --> L[完全不 seek: 零抖動無縫接軌]
    K --> M[切換主聲道監聽]
    L --> M
```

---

### 實作一：多維時間軸錨點矩陣 (`songCues` Matrix)
為解決異質影片源的時間偏差，在資料層建立曲目與影片的多維矩陣映射。

每場演唱會定義標準曲目表 `songs`，並在每個機位的資料結構中，明確標定每首歌對應到該影片的**精確絕對秒數**：

$$\text{CAM } i \text{ 的第 } K \text{ 首歌起始時間} = \text{slot}[i].\text{songCues}[\text{songId}_K]$$

#### 數據矩陣對照表（Summer Sonic 2026 實例）：
| 歌曲 ID | 歌曲名稱 | CAM 1 (9Y-95rgsDDY) | CAM 2 (xJuXrgbx-8I) | CAM 3 (_zV0QTAHd5I) |
| :--- | :--- | :--- | :--- | :--- |
| `we_go_up` | WE GO UP | **0:08** (8.0s) | **0:14** (14.0s) | **1:22** (82.0s) |
| `choom` | 춤 (CHOOM) | **2:59** (179.0s) | **3:05** (185.0s) | **4:13** (253.0s) |
| `drip` | DRIP | **8:39** (519.0s) | **8:45** (525.0s) | **9:53** (593.0s) |
| `forever` | FOREVER | **11:39** (699.0s) | **11:45** (705.0s) | **12:53** (773.0s) |
| `sheesh` | SHEESH | **28:19** (1699.0s) | **28:25** (1705.0s) | **29:33** (1773.0s) |

---

### 實作二：純粹秒數跳轉與無感換曲 (`handleJumpToSong`)
在切換歌曲時，**嚴格禁止重新調用 `loadVideoById` 或重建 DOM**，改以原地毫秒級 `seekTo` 搭配全機位同步運轉：

```javascript
// 跳轉至指定歌曲錨點（不銷毀任何播放器）
const handleJumpToSong = useCallback((songId) => {
  setActiveSongId(songId);
  setSlots(prev => prev.map(s => s.offset === 0 ? s : { ...s, offset: 0 }));

  slots.forEach((slot, idx) => {
    const cueTime = findVideoSongCue(slot.videoId, songId);
    if (cueTime !== null) {
      const p = playersRef.current[idx];
      if (p) {
        // 1. 原地尋軌至精準起唱點
        if (typeof p.seekTo === 'function') {
          try { p.seekTo(cueTime, true); } catch (_e) {}
        }
        // 2. 聲道嚴格分離：焦點機位發聲，背景機位靜音
        if (idx === activeFocusIndexRef.current) {
          if (p.unMute) p.unMute();
          if (p.setVolume) p.setVolume(100);
        } else {
          if (p.mute) p.mute();
        }
        // 3. 關鍵：背景機位必須同時持續 playVideo()，確保畫面持續在動
        if (typeof p.playVideo === 'function') {
          try { p.playVideo(); } catch (_e) {}
        }
      }
    }
  });

  setIsMasterPlaying(true);
}, [slots, findVideoSongCue]);
```

**機制優勢**：
- 兩側非焦點機位因為處於 `mute()` 狀態，完美符合瀏覽器自動播放政策，瀏覽器不會強行阻斷其畫面串流。
- 使用者在觀賞時，左右兩側卡片內的偶像早已在同步唱歌跳舞。

---

### 實作三：Ref 穩定化生命週期架構 (Decoupled Lifecycle)
為消除 Hook 依賴鏈造成的「切歌強制回第一首重新播放」Bug，實施引用解耦：

```javascript
// 1. 使用 Ref 同步最新狀態，不產生重新渲染依賴
const activeAudioIndexRef = useRef(activeAudioIndex);
useEffect(() => {
  activeAudioIndexRef.current = activeAudioIndex;
}, [activeAudioIndex]);

const activeFocusIndexRef = useRef(activeFocusIndex);
useEffect(() => {
  activeFocusIndexRef.current = activeFocusIndex;
}, [activeFocusIndex]);

// 2. initPlayer 的依賴陣列改為純空陣列 []，保證生命週期引用恆定
const initPlayer = useCallback((index, videoId, startSeconds = 0) => {
  // ...
  // 事件內部讀取 ref.current，擺脫對 state 的依賴
  if (index === activeAudioIndexRef.current) {
    event.target.unMute();
    event.target.setVolume(100);
  } else {
    event.target.mute();
  }
  try { event.target.playVideo(); } catch (_e) {}
}, []);

// 3. 演唱會切換 Effect 的依賴嚴格鎖定於 [selectedConcertIndex]
useEffect(() => {
  // 僅在使用者點擊切換不同演唱會時執行全新初始化
  // 切歌、切焦點、切音訊時，此 Effect 絕對不會被觸發！
}, [selectedConcertIndex]);
```

---

### 實作四：動態歌曲進度換算與無縫視角切換 (`seamlessSwitchFocus`)
當使用者在 3D Coverflow 舞臺向左/向右滑動，或直接點選兩側視角時，系統進行**歌曲相對進度推算**與**微小漂移容差過濾**：

```javascript
const seamlessSwitchFocus = useCallback((targetIndex, fromIndex) => {
  setActiveAudioIndex(targetIndex);
  setActiveFocusIndex(targetIndex);

  // 1. 即時切換發聲音訊
  playersRef.current.forEach((player, idx) => {
    if (player) {
      if (idx === targetIndex) {
        if (player.unMute) player.unMute();
        if (player.setVolume) player.setVolume(100);
      } else {
        if (player.mute) player.mute();
      }
      // 確保所有機位都在運轉中
      if (typeof player.playVideo === 'function') {
        try {
          const state = player.getPlayerState ? player.getPlayerState() : -1;
          if (state !== 1 && state !== 3) player.playVideo();
        } catch (_e) {}
      }
    }
  });

  // 2. 微小時間漂移校準算法
  if (activeSongId && typeof fromIndex === 'number' && fromIndex !== targetIndex) {
    const fromPlayer = playersRef.current[fromIndex];
    const targetPlayer = playersRef.current[targetIndex];
    const fromSlot = slots[fromIndex];
    const targetSlot = slots[targetIndex];

    if (fromPlayer && targetPlayer && fromSlot && targetSlot) {
      const fromCue = findVideoSongCue(fromSlot.videoId, activeSongId);
      const targetCue = findVideoSongCue(targetSlot.videoId, activeSongId);

      if (typeof fromCue === 'number' && typeof targetCue === 'number') {
        try {
          const fromCurTime = fromPlayer.getCurrentTime ? (fromPlayer.getCurrentTime() || 0) : 0;
          // 計算當前歌曲已經唱了多少秒
          const elapsed = Math.max(0, fromCurTime - fromCue);
          const idealTarget = targetCue + elapsed;
          const actualTarget = targetPlayer.getCurrentTime ? (targetPlayer.getCurrentTime() || 0) : idealTarget;

          // 容差判斷：若漂移小於 0.4 秒，完全不調用 seekTo，保證聲音 100% 絲滑連貫
          if (Math.abs(actualTarget - idealTarget) > 0.4 && typeof targetPlayer.seekTo === 'function') {
            targetPlayer.seekTo(idealTarget, true);
          }
        } catch (_e) {}
      }
    }
  }
}, [activeSongId, findVideoSongCue, slots]);
```

---

### 實作五：3D Coverflow 舞臺渲染與事件遮罩 (`coverflow-click-shield`)
為實現如 Apple Coverflow 般的立體黑膠陳列感，CSS 配合 React 進行相對空間計算：

```javascript
// 計算卡片相對於焦點卡片的 3D 位置 (0: 中央, 1: 右側, 2: 左側)
const coverflowDiff = (index - activeFocusIndex + 3) % 3;
let coverflowPosClass = '';
if (layoutMode === 'coverflow') {
  if (coverflowDiff === 0) coverflowPosClass = 'coverflow-pos-center';
  else if (coverflowDiff === 1) coverflowPosClass = 'coverflow-pos-right';
  else if (coverflowDiff === 2) coverflowPosClass = 'coverflow-pos-left';
}
```

```css
/* 3D 舞臺核心樣式 */
.video-wall-stage.mode-coverflow {
  perspective: 1200px;
  perspective-origin: 50% 48%;
  transform-style: preserve-3d;
}

/* 經典鏡面地板反射 */
.video-wall-stage.mode-coverflow .video-slot-card {
  -webkit-box-reflect: below 6px linear-gradient(
    to bottom,
    transparent 65%,
    rgba(0, 0, 0, 0.35) 85%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

/* 中央卡片：平面正視、放大、高亮發光 */
.video-wall-stage.mode-coverflow .video-slot-card.coverflow-pos-center {
  transform: translateX(0) translateZ(100px) rotateY(0deg) scale(1.05);
  z-index: 10;
  box-shadow: 0 25px 65px -10px rgba(0, 0, 0, 0.95), 0 0 45px rgba(225, 29, 72, 0.4);
}

/* 左側卡片：右旋 42 度斜向內收、景深推遠 */
.video-wall-stage.mode-coverflow .video-slot-card.coverflow-pos-left {
  transform: translateX(-64%) translateZ(-160px) rotateY(42deg) scale(0.85);
  z-index: 4;
  filter: brightness(0.65);
}

/* 右側卡片：左旋 42 度斜向內收、景深推遠 */
.video-wall-stage.mode-coverflow .video-slot-card.coverflow-pos-right {
  transform: translateX(64%) translateZ(-160px) rotateY(-42deg) scale(0.85);
  z-index: 4;
  filter: brightness(0.65);
}
```

#### 事件遮罩 (`coverflow-click-shield`)：
兩側卡片透過覆蓋一層半透明遮罩，解決 YouTube iframe 阻斷點擊與滑動事件的問題。點擊遮罩即觸發 `seamlessSwitchFocus`，卡片旋轉置中後遮罩自動移除，恢復 iframe 原生全功能操作。

---

## 4. 資料結構定義範例

在 `src/data/concertsData.js` 中的標準定義模式（注意：各曲目的開始秒數已抽離到 `src/data/concertSongTimes.js` 的 `SONG_START_TIMES[歌曲][videoId]`，`concertsData.js` 會依各場次的機位自動產生 `songs`；下方 `songs` 區塊為舊版寫法，僅供理解資料形狀）：

```javascript
{
  id: 'babymonster_summer_sonic_2026',
  title: 'BABYMONSTER AT SUMMER SONIC 2026',
  venue: 'ZOZO Marine Stadium, Tokyo, Japan',
  date: '2026.08.14',

  // 1. 標準曲目清單 (Setlist Index)
  songs: [
    { id: 'we_go_up', title: 'WE GO UP', tag: '音樂祭開場' },
    { id: 'choom', title: '춤 (CHOOM)', tag: '極限刀群舞' },
    { id: 'drip', title: 'DRIP', tag: '全場最炸焦點' },
    { id: 'forever', title: 'FOREVER', tag: '萬人大合唱' },
    { id: 'sheesh', title: 'SHEESH', tag: '壓軸樂團版' }
  ],

  // 2. 預設 3 機位配置與對應曲目秒數
  defaultSlots: [
    {
      slotId: 0,
      name: 'CAM 1',
      title: 'BABYMONSTER [FULL PERFORMANCE] SUMMER SONIC 2026',
      tag: '全景主視角',
      videoId: '9Y-95rgsDDY',
      offset: 0,
      songCues: {
        we_go_up: 8.0,
        choom: 179.0,
        drip: 519.0,
        forever: 699.0,
        sheesh: 1699.0
      }
    },
    {
      slotId: 1,
      name: 'CAM 2',
      title: 'BABYMONSTER PERFORMANCE Full fancam [Summer Sonic Tokyo 2026]',
      tag: '搖滾區視角',
      videoId: 'xJuXrgbx-8I',
      offset: 0,
      songCues: {
        we_go_up: 14.0,
        choom: 185.0,
        drip: 525.0,
        forever: 705.0,
        sheesh: 1705.0
      }
    },
    {
      slotId: 2,
      name: 'CAM 3',
      title: 'BABYMONSTER SUMMER SONIC 2026 TOKYO, JAPAN',
      tag: '球場全景',
      videoId: '_zV0QTAHd5I',
      offset: 0,
      songCues: {
        we_go_up: 82.0,
        choom: 253.0,
        drip: 593.0,
        forever: 773.0,
        sheesh: 1773.0
      }
    }
  ]
}
```

---

## 5. 成果驗證與測試總結

| 驗證項目 | 舊版行為（未修復前） | 新版架構行為（已修復） |
| :--- | :--- | :--- |
| **點擊「下一首 ⏭」** | 觸發 Effect 重載，iframe 閃爍銷毀，全部回到第一首歌從頭播 | 3 機位同步在背景原地尋軌，瞬間跳轉至該曲秒數並持續播放 |
| **左右滑動 3D 視角** | 側邊視角呈現靜止狀態，滑過來後需要重新啟動播放 | 側邊視角早已同步動態運轉，滑入中央無縫出聲，零卡頓 |
| **切換聲音監聽** | 重新建構 `initPlayer`，引發整體頁面抖動 | 透過 Ref 隔離依賴，直接呼叫原生 `unMute()`，純粹音訊淡入淡出 |
| **累積時間差 (Drift)** | 播放數分鐘後各機位口型與舞步逐漸脫節 | 滑動時自動檢測相對歌曲秒數，超過 0.4 秒即自動無感校準 |

---
*文檔建立時間：2026-10-17*  
*適用專案：Hangul PopPop (korean-typing-game)*
