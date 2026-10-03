# 📋 Hangul PopPop (한글 팝팝) - 開發待辦與功能規劃清單 (TODO)

本清單整理了 **Hangul PopPop** 未來規劃要新增與優化的功能模組。可根據優先順序持續勾選與擴充。

---

## 📱 1. 行動裝置支援與響應式體驗 (Mobile UX & Responsiveness) - ⚡ 最高優先級

- [ ] **響應式佈局重構 (Responsive Layout & Viewport Adaption)**
  - [ ] 支援直式 (Portrait) 與橫式 (Landscape) 自適應排版。
  - [ ] 直式模式：上半部播放 YouTube MV，下半部顯示歌詞 / 應援提詞器 / 答題區。
  - [ ] 橫式模式：左側沉浸式全螢幕 MV，右側浮動半透明歌詞欄。
  - [ ] 針對 iPhone / Android 瀏海屏與安全區域 (`env(safe-area-inset-*)`) 進行邊界適配。
- [ ] **行動版導航與操作介面 (Mobile Navigation & Touch Controls)**
  - [ ] 手機版底部導航欄 (Bottom Navigation Bar) 或滑動抽屜 (Drawer Menu)，取代桌面版 Navbar。
  - [ ] 手勢操作支援：左右滑動切換上下句歌詞、上下滑動切換歌曲。
  - [ ] 觸控目標尺寸優化：加大播放控制按鈕、循環區間按鈕與選歌標籤，符合觸控標準 (最小 48x48px)。
- [ ] **手機版虛擬韓文鍵盤 (Virtual On-Screen Hangul Keyboard)**
  - [ ] 在打字與遊戲練習中，內建手機螢幕可點擊的兩벌式 (2-set) 韓文觸控虛擬鍵盤。
  - [ ] 支援手機原生輸入法相容模式與自動失焦防遮擋處理。
  - [ ] 點擊觸控震動反饋 (Web Haptics API - `navigator.vibrate`)。
- [ ] **行動瀏覽器影音播放相容性優化 (Mobile Media & iOS Safari Compatibility)**
  - [ ] 解決 iOS Safari 與 Android Chrome 自動播放限制 (`autoplay` / `user gesture` 友善引導)。
  - [ ] 支援 Picture-in-Picture (子母畫面) 或背景音訊播放體驗。
- [ ] **PWA (Progressive Web App) 支援**
  - [ ] 配置 `manifest.json` 與 Service Worker，支援「新增至主畫面 / 桌面」。
  - [ ] 支援離線快取靜態資源與常用練習歌詞，啟動更快速且免受網路延遲干擾。

---

## 📣 2. 應援提詞器與跟唱模式優化 (Fanchant & Prompter)

- [ ] **應援節奏與視覺反饋增強**
  - [ ] 應援拍子倒數提示器（3、2、1 閃爍節奏點或呼吸光圈）。
  - [ ] 震動提示（在應援節奏重音拍給予手機觸覺震動回饋）。
  - [ ] 全螢幕大字體「演唱會應援手幅模式」（手機打橫高亮大字，可當手燈提詞）。
- [ ] **語音辨識與跟唱評分進階 (Voice & Speech AI)**
  - [ ] 錄音回放功能：錄下自己唱的片段並與原曲音軌比對。
  - [ ] 提升韓語 Web Speech API 在吵雜環境與音樂背景下的辨識精準度。
- [ ] **個人化播放設定儲存**
  - [ ] 記憶使用者的偏好設定（預設是否顯示羅馬拼音、中文翻譯、預設播放速度、預設循環區間緩衝時間）。

---

## 🎮 3. 遊戲挑戰競技場擴充 (Game Arena & Mini-Games)

- [ ] **節奏打擊模式 (K-Pop Rhythm Tap Mode)**
  - [ ] 結合應援歌詞的下落式或點擊式節奏小遊戲（跟著副歌重音 CLIK CLAK、SHEESH 節奏打擊）。
- [ ] **歌詞克漏字挑戰 (Cloze Test & Lyric Fill-in)**
  - [ ] 依照難度隨機挖空關鍵單字、助詞或收音，考驗聽力與拼字能力。
- [ ] **連線對戰 / 排行榜機制 (Multiplayer & Leaderboards)**
  - [ ] 透過 Firebase 實作每週挑戰排行（答題速度、跟唱準確度、連續打擊 Combo 分數）。

---

## ⌨️ 4. 基礎韓文打字與課程模組重啟 (Core Hangul Curriculum)

- [ ] **課程體系重構與重新上線**
  - [ ] 第一階段：基本母音與子音認識與發音。
  - [ ] 第二階段：雙母音、雙子音與拼字基礎。
  - [ ] 第三階段：收音 (Batchim) 規則與代表音特訓。
  - [ ] 第四階段：實用常用單字與日常生活會話短句。
- [ ] **打字測速與能力雷達圖 (Typing Speed & Analytics)**
  - [ ] 即時計算 CPM (Characters Per Minute) 與 WPM。
  - [ ] 錯字統計分析：找出最容易按錯的鍵位或容易混淆的韓文字母（如 ㅐ/ㅔ、ㅗ/ㅜ）。

---

## ⚙️ 5. 系統架構、效能與使用者帳號 (Infrastructure & Account)

- [ ] **會員帳號與雲端同步 (Firebase Auth & Firestore)**
  - [ ] 支援 Google 快速登入。
  - [ ] 雲端同步「錯題筆記 (Review Notebook)」、「學習進度」、「成就徽章」與「自訂歌曲喜好」。
- [ ] **多語系介面支援 (i18n)**
  - [ ] 支援切換繁體中文、English、日本語、한국어 介面。
- [ ] **效能優化 (Performance Optimization)**
  - [ ] 針對大體積 SRT 與大量歌曲清單實作虛擬列表 (Virtual Scroll) 與動態載入 (`dynamic import()`)。
