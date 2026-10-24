# BABYMONSTER 官方應援手燈 (Official Light Stick) 藍牙 BLE 控制與連動技術規格書
(BABYMONSTER Lightstick Web Bluetooth Protocol & Audio-Visual Interactive Sync Specification)

本文檔詳細記錄 Hangul PopPop（韓文節奏打字遊戲）中串接 **BABYMONSTER 官方應援手燈 (Official Light Stick)** 的硬體底層通訊協議、藍牙 BLE (Bluetooth Low Energy) GATT 架構、9-Byte 控制封包格式、Web Bluetooth API 瀏覽器端實作方案，以及與「演唱會多視角電視牆 (Concert Wall)」、「打字節奏遊戲 (K-Pop Game)」與「應援法提詞器 (Fanchant)」的深度連動架構。

---

## 目錄
1. [硬體背景與通訊架構概述](#1-硬體背景與通訊架構概述)
2. [手燈硬體控制與配對流程](#2-手燈硬體控制與配對流程)
3. [藍牙 BLE GATT Profile 規格](#3-藍牙-ble-gatt-profile-規格)
4. [Fanlight 9-Byte 通訊封包與校驗協定](#4-fanlight-9-byte-通訊封包與校驗協定)
5. [成員專屬色票與經典曲目燈光設定](#5-成員專屬色票與經典曲目燈光設定)
6. [Web Bluetooth API 瀏覽器端實作設計](#6-web-bluetooth-api-瀏覽器端實作設計)
7. [Hangul PopPop 系統整合架構](#7-hangul-poppop-系統整合架構)
   - [7.1 核心控制器模組 (`lightstickBle.js`)](#71-核心控制器模組-lightstickblejs)
   - [7.2 懸浮控制視窗與狀態指示 (`LightstickModal.jsx`)](#72-懸浮控制視窗與狀態指示-lightstickmodaljsx)
   - [7.3 演唱會電視牆自動變色連動 (`ConcertWall.jsx`)](#73-演唱會電視牆自動變色連動-concertwalljsx)
   - [7.4 打字遊戲打擊反饋與應援詞爆亮 (`KpopGameMode.jsx`)](#74-打字遊戲打擊反饋與應援詞爆亮-kpopgamemodejsx)
8. [多平臺相容性與環境限制](#8-多平臺相容性與環境限制)
9. [常見問題與除錯指南 (Troubleshooting)](#9-常見問題與除錯指南-troubleshooting)

---

## 1. 硬體背景與通訊架構概述

BABYMONSTER 官方手燈由韓國首屈一指的 K-Pop 演唱會應援周邊製造商 **FANLIGHT Co., Ltd. (한국 팬라이트)** 研發設計與生產，其官方行動應用程式為 `kr.co.fanlight.babymonsterlightstick`。

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BABYMONSTER Lightstick BLE 通訊鏈路             │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [ Chrome / Edge 瀏覽器 ]                                              │
│          │                                                             │
│          ▼ (Web Bluetooth API: navigator.bluetooth)                   │
│  [ Web BLE Client (Hangul PopPop) ]                                    │
│          │                                                             │
│          ▼ (2.4GHz BLE 射頻信號 / 9-Byte GATT Write)                   │
│  [ Telink BLE SoC (TLSR825x / TLSR826x) ]                              │
│          │                                                             │
│          ▼ (PWM 定電流驅動信號)                                       │
│  [ RGB LED 發光總成 (燈頭主發光區 + 雙角裝飾燈) ]                      │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

- **核心晶片組**：採用 Telink Semiconductor 低功耗藍牙 SoC 體系（TLSR 系列）。
- **通訊標準**：Bluetooth 4.2 / 5.0 Low Energy (BLE)。
- **連線拓撲**：
  - 手燈作為 **BLE Peripheral (GATT Server)**，處於廣播或從機狀態。
  - 電腦/手機瀏覽器作為 **BLE Central (GATT Client)**，負責發起連線與下發燈控指令。

---

## 2. 手燈硬體控制與配對流程

手燈手柄上具備實體多功能電源按鍵：

| 操作動作 | 手燈反應 | 當前模式 |
| :--- | :--- | :--- |
| **短按 1 次 (關機狀態)** | 燈光亮起，循環本機預設常亮色 | **單機常亮模式 (Normal Mode)** |
| **短按 1 次 (開機狀態)** | 切換預設燈效（常亮 → 慢閃 → 快閃 → 呼吸） | **單機特效模式 (Preset FX)** |
| **長按 3 秒鐘** | **LED 燈號開始閃爍藍光 (Blinking Blue)** | **藍牙配對廣播模式 (Bluetooth Mode)** |
| **連線成功後** | 藍光停止閃爍，轉為中央主機控制色（預設為白光或紅光） | **受控模式 (Connected / Central Mode)** |
| **長按 5 秒鐘** | 燈光熄滅，手燈關機 | **關機狀態 (Power Off)** |

> [!IMPORTANT]
> 要在網頁上連線手燈，**必須先將手燈開機並長按按鈕 3 秒直至藍燈閃爍**，瀏覽器的藍牙掃描面板方能搜尋到設備。

---

## 3. 藍牙 BLE GATT Profile 規格

Fanlight 體系在 GATT 資料庫中定義了專屬的 Service 與 Characteristic UUID：

### 3.1 核心服務與特徵值 (Primary Services & Characteristics)

| 項目 | 名稱 | UUID | 性質 (Properties) | 說明 |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Service** | Fanlight Custom Service | `00010203-0405-0607-0809-0a0b0c0d1911` | - | 主手燈控制服務 |
| **Characteristic 1** | Light Control (Write) | `00010203-0405-0607-0809-0a0b0c0d2b19` | `WriteWithoutResponse`, `Write` | 下發 9-byte 燈色與特效指令 |
| **Characteristic 2** | Status / Notify (Optional) | `00010203-0405-0607-0809-0a0b0c0d1912` | `Read`, `Notify` | 手燈狀態回報與電量資訊 |
| **Standard Service** | Battery Service | `0x180F` (`0000180f-0000-1000-8000-00805f9b34fb`) | - | 標準藍牙電池電量服務 (部分批次支援) |
| **Standard Char** | Battery Level | `0x2A19` (`00002a19-0000-1000-8000-00805f9b34fb`) | `Read`, `Notify` | 讀取手燈剩餘電量百分比 (0-100%) |

### 3.2 裝置廣播過濾條件 (Advertising Filter)

在瀏覽器調用 `navigator.bluetooth.requestDevice` 時，建議設定如下過濾器與備用服務清單：

```javascript
const BLE_CONFIG = {
  // 過濾裝置名稱前綴
  filters: [
    { namePrefix: 'BABYMONSTER' },
    { namePrefix: 'BM_' },
    { namePrefix: 'FANLIGHT' },
    { namePrefix: 'FL_' }
  ],
  // 萬一某些批次廣播名稱為空，支援 acceptAllDevices 兜底
  optionalServices: [
    '00010203-0405-0607-0809-0a0b0c0d1911',
    '00010203-0405-0607-0809-0a0b0c0d1912',
    'battery_service',
    0x180F
  ]
};
```

---

## 4. Fanlight 9-Byte 通訊封包與校驗協定

### 4.1 靜態 RGB 顏色控制封包結構

Fanlight 手燈標準指令為定長 **9 個位元組 (9 Bytes)** 的 Byte Array：

```
 ┌────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
 │ Byte 0 │ Byte 1 │ Byte 2 │ Byte 3 │ Byte 4 │ Byte 5 │ Byte 6 │ Byte 7 │ Byte 8 │
 ├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
 │  0x01  │  0xFF  │  0x00  │   R    │   G    │   B    │  0x00  │  0x00  │ Check  │
 └────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘
   Header   Command  Option    Red     Green     Blue   Reserved Reserved Checksum
```

- **Byte 0 (Header)**：固定為 `0x01`（起始標頭）。
- **Byte 1 (Command Type)**：固定為 `0xFF`（靜態調色指令，RGB Control）。
- **Byte 2 (Sub-Command)**：固定為 `0x00`（標準模式）。
- **Byte 3 (Red)**：紅色強度，數值 `0 ~ 255` (`0x00 ~ 0xFF`)。
- **Byte 4 (Green)**：綠色強度，數值 `0 ~ 255` (`0x00 ~ 0xFF`)。
- **Byte 5 (Blue)**：藍色強度，數值 `0 ~ 255` (`0x00 ~ 0xFF`)。
- **Byte 6 (Reserved 1)**：預留位元，固定為 `0x00`。
- **Byte 7 (Reserved 2)**：預留位元，固定為 `0x00`。
- **Byte 8 (Checksum)**：累加校驗碼。

### 4.2 校驗碼計算公式 (Checksum Algorithm)

校驗碼為「從 Byte 2 至 Byte 7」的 6 個位元組數值加總，並對 256 取餘數（`mod 256`）：

$$\text{Checksum} = (\text{Byte}_2 + \text{Byte}_3 + \text{Byte}_4 + \text{Byte}_5 + \text{Byte}_6 + \text{Byte}_7) \pmod{256}$$

因 Byte 2, 6, 7 均為 `0x00`，實質上等價於：

$$\text{Checksum} = (R + G + B) \pmod{256}$$

#### JavaScript 封包建構函式範例：

```javascript
/**
 * 建立 Fanlight 9-Byte RGB 控制封包
 * @param {number} r 紅色強度 (0-255)
 * @param {number} g 綠色強度 (0-255)
 * @param {number} b 藍色強度 (0-255)
 * @returns {Uint8Array} 9-byte 封包
 */
export function buildFanlightColorPacket(r, g, b) {
  const red = Math.max(0, Math.min(255, Math.round(r)));
  const green = Math.max(0, Math.min(255, Math.round(g)));
  const blue = Math.max(0, Math.min(255, Math.round(b)));
  
  // 校驗碼累加
  const checksum = (0x00 + red + green + blue + 0x00 + 0x00) & 0xFF;
  
  return new Uint8Array([
    0x01,     // Header
    0xFF,     // RGB Command
    0x00,     // Sub-command
    red,      // R
    green,    // G
    blue,     // B
    0x00,     // Reserved 1
    0x00,     // Reserved 2
    checksum  // Checksum (mod 256)
  ]);
}
```

---

## 5. 成員專屬色票與經典曲目燈光設定

為 Hangul PopPop 設計的專屬色盤，精準還原 BABYMONSTER 七位成員的象徵色與演唱會主題曲情境：

### 5.1 七位成員象徵色 (Member Color Palette)

| 成員 (Member) | 象徵色系 | Hex 碼 | RGB 數值 | 封包 Byte 8 校驗碼 (Hex) | 視覺效果 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AHYEON (아현)** | 純白天使 (White) | `#FFFFFF` | `(255, 255, 255)` | `(255 + 255 + 255) % 256 = 253 (0xFD)` | 高音全能王牌純白璀璨光芒 |
| **RUKA (루카)** | 湛藍深海 (Bright Deep Blue) | `#0047FF` | `(0, 71, 255)` | `(0 + 71 + 255) % 256 = 70 (0x46)` | 強烈俐落的電光湛藍 |
| **RORA (로라)** | 皇家炫紫 (Purple) | `#9933FF` | `(153, 51, 255)` | `(153 + 51 + 255) % 256 = 203 (0xCB)` | 優雅溫柔極光紫 |
| **ASA (아사)** | 甜蜜粉紅 (Pink) | `#FF69B4` | `(255, 105, 180)` | `(255 + 105 + 180) % 256 = 28 (0x1C)` | 俏皮熱烈 Rapper 粉紅 |
| **CHIQUITA (치키타)** | 暗夜極黑 (Black) | `#18181B` | `(0, 0, 0)` | `(0 + 0 + 0) % 256 = 0 (0x00)` | 帥氣忙內黑曜石全暗暗夜風 |
| **RAMI (라미)** | 熱情鮮紅 (Red) | `#FF0033` | `(255, 0, 51)` | `(255 + 0 + 51) % 256 = 50 (0x32)` | 靈魂主唱爆發力狂烈血紅 |
| **PHARITA (파리타)** | 耀眼銀芒 (Shine Like Silver) | `#E2E8F0` | `(226, 232, 240)` | `(226 + 232 + 240) % 256 = 186 (0xBA)` | 迪士尼公主般的晶瑩銀光 |

### 5.2 演唱會曲目情境燈效 (Concert Stage FX Themes)

| 曲目 (Song) | 主題燈光模式 | 色彩配置 (RGB) | 燈光動態節奏 (Dynamic FX) |
| :--- | :--- | :--- | :--- |
| **《SHEESH》** | 惡魔之爪 / 暗黑重低音 | `#FF0033` (鮮血紅) + `#000000` (短暫黑屏) | 重低音 Drop 處執行 **50ms 頻閃 (Strobe)**，副歌伴隨鼓點規律閃擊 |
| **《BATTER UP》** | 全壘打棒球狂歡 | `#FFA500` (能量橘黃) + `#FFFFFF` (純白擊球) | 擊球聲 "BATTER BATTER UP" 時瞬間純白爆閃，隨後回到熱血橘黃 |
| **《FOREVER》** | 夏日星空光浪 | `#E0F7FA` (冰銀白) ↔ `#00E5FF` (霓虹青) | **4 秒循環柔和呼吸燈 (Breathing Wave)**，模擬巨蛋應援燈海起伏 |
| **《DRIP》** | 潮流彩繪雨滴 | `#FF1493` → `#7B1FA2` → `#00E5FF` | **彩虹流光循環 (Rainbow Cycle)**，每 800ms 平滑過渡下一色 |
| **《LIKE THAT》** | 微醺派對霓虹 | `#9D00FF` (派對紫) ↔ `#FF007F` (霓虹粉) | 律動雙色微調，隨 Synth-Pop 節奏呼吸漸變 |
| **《CLIK CLAK》** | 黑白街頭嘻哈 | `#FFFFFF` (高亮純白) ↔ `#000000` (黑屏) | 隨 Hi-Hat 節奏進行乾脆俐落的單拍爆閃 |

---

## 6. Web Bluetooth API 瀏覽器端實作設計

Web Bluetooth 是 W3C 推薦標準，直接在支援的瀏覽器中提供操作低功耗藍牙 GATT 服務的能力：

```javascript
/**
 * BABYMONSTER 手燈藍牙管理類別 (Singleton)
 */
export class BabyMonsterLightstick {
  constructor() {
    this.device = null;
    this.server = null;
    this.writeCharacteristic = null;
    this.isConnected = false;
    this.onStatusChange = null;
    this.animationTimer = null;
  }

  // 1. 發起使用者授權與配對
  async connect() {
    if (!navigator.bluetooth) {
      throw new Error('此瀏覽器不支援 Web Bluetooth API，請使用 Google Chrome 或 Microsoft Edge。');
    }

    // 觸發原生配對彈窗 (必須在使用者手動點擊事件中呼叫)
    this.device = await navigator.bluetooth.requestDevice({
      filters: [
        { namePrefix: 'BABYMONSTER' },
        { namePrefix: 'BM' },
        { namePrefix: 'FL_' }
      ],
      optionalServices: [
        '00010203-0405-0607-0809-0a0b0c0d1911',
        '00010203-0405-0607-0809-0a0b0c0d1912'
      ]
    });

    // 監聽斷線事件
    this.device.addEventListener('gattserverdisconnected', () => {
      this.handleDisconnect();
    });

    // 2. 連線 GATT Server
    this.server = await this.device.gatt.connect();

    // 3. 取得控制 Service
    const service = await this.server.getPrimaryService('00010203-0405-0607-0809-0a0b0c0d1911');

    // 4. 取得可寫特徵值
    this.writeCharacteristic = await service.getCharacteristic('00010203-0405-0607-0809-0a0b0c0d2b19');

    this.isConnected = true;
    if (this.onStatusChange) this.onStatusChange({ connected: true, deviceName: this.device.name });

    // 連線成功後預設點亮白色以示回饋
    await this.setColor(255, 255, 255);
  }

  // 5. 設定手燈顏色
  async setColor(r, g, b) {
    if (!this.isConnected || !this.writeCharacteristic) return;
    const packet = buildFanlightColorPacket(r, g, b);
    try {
      // 優先使用無回執寫入以追求毫秒級低延遲
      if (this.writeCharacteristic.writeValueWithoutResponse) {
        await this.writeCharacteristic.writeValueWithoutResponse(packet);
      } else {
        await this.writeCharacteristic.writeValue(packet);
      }
    } catch (err) {
      console.warn('手燈封包發送失敗:', err);
    }
  }

  // 6. 特效模式：呼吸燈 (Breathing)
  startBreathing(r, g, b, cycleMs = 3000) {
    this.stopAnimation();
    let step = 0;
    const interval = 50; // 每 50ms 更新一次
    const totalSteps = cycleMs / interval;

    this.animationTimer = setInterval(async () => {
      step = (step + 1) % totalSteps;
      // 使用正弦曲線計算平滑亮度 (0.1 ~ 1.0)
      const factor = 0.55 + 0.45 * Math.sin((step / totalSteps) * 2 * Math.PI - Math.PI / 2);
      await this.setColor(r * factor, g * factor, b * factor);
    }, interval);
  }

  // 7. 特效模式：頻閃爆亮 (Strobe Flash)
  async flash(r, g, b, durationMs = 120) {
    await this.setColor(r, g, b);
    setTimeout(async () => {
      await this.setColor(0, 0, 0);
    }, durationMs);
  }

  // 停止動畫定時器
  stopAnimation() {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
  }

  // 斷線處理
  handleDisconnect() {
    this.stopAnimation();
    this.isConnected = false;
    this.writeCharacteristic = null;
    if (this.onStatusChange) this.onStatusChange({ connected: false });
  }

  // 主動斷線
  async disconnect() {
    this.stopAnimation();
    if (this.device && this.device.gatt.connected) {
      this.device.gatt.disconnect();
    }
    this.handleDisconnect();
  }
}
```

---

## 7. Hangul PopPop 系統整合架構

```
                          【Hangul PopPop 手燈連動整合】
                                       │
     ┌─────────────────────────────────┼─────────────────────────────────┐
     │                                 │                                 │
     ▼                                 ▼                                 ▼
[ 導覽列 Navbar 控制面板 ]   [ Concert Wall 電視牆自動燈控 ]   [ 打字遊戲與 Fanchant 互動 ]
  - 藍牙連線 / 斷線狀態鈕      - 隨播放時間軸錨點自動換色      - 達成 Combo 時手燈爆閃
  - 7位成員色盤即時點選        - 演唱會副歌/Drop 重低音頻閃    - 喊出應援詞時顏色同步共振
  - 手動自由調色盤 (Color)     - 依曲目載入預設舞台風格燈效    - 打錯字時短暫紅光警示
```

### 7.1 核心控制器模組 (`src/utils/lightstickBle.js`)
- 實作上述 `BabyMonsterLightstick` 單例（Singleton），供全域組件存取。
- 具備防抖（Debounce）與指令佇列保護，防止快速滑動調色盤時癱瘓 BLE 緩衝區。
- 具備**自動特徵值降級掃描 (Fallback Scanner)**：若特定批次手燈 UUID 存在差異，系統會枚舉當前設備的所有 Services 與 Characteristics，動態找出具備 `write` 屬性的特徵值進行相容。

### 7.2 懸浮控制視窗與狀態指示 (`src/components/LightstickModal.jsx`)
- 提供吸睛的 Cyberpunk / K-Pop 風格懸浮控制模態窗。
- 顯示當前連線手燈名稱、信號圖示與連線開關。
- 快速點擊 7 位成員頭像/顏色圓鈕即時變色。
- 特效模式切換鈕：常亮 (Static)、呼吸 (Breathe)、彩虹 (Rainbow)、派對 (Strobe)。

### 7.3 演唱會電視牆自動變色連動 (`src/components/ConcertWall.jsx`)
- 在 [ConcertWall.jsx](file:///Users/hsiaotingchen/korean-typing-game/src/components/ConcertWall.jsx) 的時間軸監聽循環中：
  - 當切換不同演唱會曲目（如 *SHEESH* → *FOREVER* → *DRIP*）時，自動下發該曲目所屬的主題燈色與動態模式。
  - 當主控攝影機播放到特定高潮段落（透過 `songCues` 中的秒數事件）時，觸發手燈爆閃與變色。

### 7.4 打字遊戲打擊反饋與應援詞爆亮 (`src/components/KpopGameMode.jsx`)
- **Fever / Combo 突破**：當 Combo 達到 20、50、100 連擊時，手燈觸發金色彩虹連閃。
- **應援法 (Fanchant) 連動**：
  - 結合 [create-kpop-fanchant](file:///Users/hsiaotingchen/korean-typing-game/.agents/skills/create-kpop-fanchant/SKILL.md) 技能中定義的應援節奏，當畫面出現「喊叫詞（Shout）」時，手燈以 100ms 頻閃與音樂完美同步。

---

## 8. 多平臺相容性與環境限制

| 作業系統 / 平台 | 推薦瀏覽器 | 支援狀態 | 限制與注意事項 |
| :--- | :--- | :---: | :--- |
| **macOS (Apple Silicon / Intel)** | **Google Chrome / Microsoft Edge** | ✅ **完全支援** | 需在「系統設定 > 隱私權與安全性 > 藍牙」確認已賦予瀏覽器藍牙權限。 |
| **Windows 10 / 11** | **Google Chrome / Microsoft Edge** | ✅ **完全支援** | 電腦需具備藍牙 4.0 以上介面卡，系統藍牙需處於開啟狀態。 |
| **Android (手機 / 平板)** | **Chrome for Android** | ✅ **完全支援** | 需開啟系統「位置資訊 (GPS)」與「附近裝置」權限。 |
| **ChromeOS** | **原生 Chrome 瀏覽器** | ✅ **完全支援** | 原生支援 Web Bluetooth API。 |
| **iOS / iPadOS (iPhone / iPad)** | **Safari / 所有 iOS 瀏覽器** | ❌ **不支援** | Apple WebKit 引擎因隱私與安全策略，**目前全線未開放 Web Bluetooth API**。<br>*註：若必須在 iOS 上執行，需下載支援 WebBLE 的專用瀏覽器 App（如 Bluefy 瀏覽器）。* |

> [!NOTE]
> **安全性規範**：W3C 規定 Web Bluetooth API 僅能在**安全連線環境**下調用：
> 1. 本地開發網址：`http://localhost` 或 `http://127.0.0.1`。
> 2. 正式發佈網址：**HTTPS 安全協議**（如 Firebase Hosting `https://<project-id>.web.app`）。

---

## 9. 常見問題與除錯指南 (Troubleshooting)

### Q1: 點擊「連線手燈」時，瀏覽器彈窗找不到 BABYMONSTER 手燈？
1. **確認手燈是否處於藍牙模式**：手燈必須在開機後「長按按鈕 3 秒鐘」，直至看到**藍燈持續閃爍**。普通開機亮白光只是單機模式，不會發送藍牙廣播。
2. **手燈是否已被手機 App 佔用**：BLE 手燈通常只允許一個 Central 裝置連線。請關閉手機上的官方 App 或關閉手機藍牙，釋放連線通道。
3. **電池電量過低**：當 3 顆 AAA 電池電量不足時，手燈會自動停用藍牙射頻以節省電力。請更換全新電池後再試。

### Q2: 瀏覽器提示 `User cancelled the requestDevice() chooser`？
* 代表使用者在瀏覽器藍牙搜尋彈窗中點擊了「取消」或直接點擊彈窗外關閉。重新點擊一次連線按鈕並點選設備即可。

### Q3: Mac 上的 Chrome 點擊連線毫無反應或直接報錯？
* 前往 macOS「系統設定 > 隱私權與安全性 > 藍牙」，檢查「Google Chrome」是否已被允許使用藍牙。若無，請將開關打開並重啟瀏覽器。

### Q4: 手燈連線成功，但發送顏色指令後手燈沒有改變顏色？
* 某些近期生產或巡演專用韌體可能更新了 Characteristic UUID。可使用控制面板中的「**特徵值自動診斷工具 (Auto Scan GATT)**」，該工具會逐一測試當前連接設備上的所有可寫 Characteristic，自動鎖定正確的控制特徵值並完成記憶。
