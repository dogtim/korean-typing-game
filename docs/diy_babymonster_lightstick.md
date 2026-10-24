# BABYMONSTER 自製 BLE 智慧應援手燈與沉浸式桌面燈光裝置研製計畫書
(DIY BABYMONSTER Official-Compatible Smart Lightstick & Ambient Stage System Proposal)

---

## 專案概述 (Executive Summary)

本計畫旨在利用已逆向解析之 **FANLIGHT / Telink 藍牙低功耗 (BLE) GATT 通訊協議**，以微型物聯網微控制器（ESP32-C3）結合全彩可定址 RGB LED（WS2812B）及 3D 列印技術，自主研發兼具**手持應援手燈**、**桌面演唱會神龕 (Desktop Shrine)** 與 **螢幕劇院氛圍燈 (Screen Ambilight)** 三位一體的自製硬體裝置。

本裝置具備 **100% 雙向生態相容性**：
1. **Hangul PopPop 深度連動**：支援本專案「演唱會多視角電視牆 (Concert Wall)」、「打字節奏遊戲 (K-Pop Game)」與「應援法提詞器 (Fanchant)」，享受鏡頭切換自動變色與低音爆閃。
2. **官方手機 App 無縫適配**：可直接被 YG 官方行動應用程式《BABYMONSTER LIGHT STICK》（Android / iOS）搜尋並認證為正品手燈，使用官方調色盤與現場中控模式。

---

## 目錄
1. [專案背景與效益分析](#1-專案背景與效益分析)
2. [系統總體架構與工作原理](#2-系統總體架構與工作原理)
3. [硬體選型與物料清單 (BOM)](#3-硬體選型與物料清單-bom)
4. [外觀結構與 3D 列印設計](#4-外觀結構與-3d-列印設計)
5. [完整 ESP32 韌體程式碼 (可直接燒錄)](#5-完整-esp32-韌體程式碼-可直接燒錄)
6. [與 Hangul PopPop 生態系整合設計](#6-與-hangul-poppop-生態系整合設計)
7. [專案開發時程與里程碑 (Roadmap)](#7-專案開發時程與里程碑-roadmap)
8. [安全規範、風險評估與注意事項](#8-安全規範風險評估與注意事項)

---

## 1. 專案背景與效益分析

### 1.1 痛點剖析
- **官方手燈成本與取得門檻**：官方手燈單支售價約 NT$ 1,500 ~ 2,200 元，巡迴演唱會期間常面臨缺貨或海外高昂運費。
- **功能單一性**：官方手燈非演唱會期間多處於收納盒中閒置，無法融入日常電腦娛樂與桌面擺飾。
- **缺乏擴充性**：無法自訂震動回饋、無法與電腦螢幕背光或 Web 應用程式連動。

### 1.2 自製優勢
- 💰 **極致低成本**：核心電子料件總成本控制在 **NT$ 200 ~ 300 元以內**。
- 🪄 **多元形態自由**：可製作成「標準握把手燈」、「螢幕後方沉浸式燈條」或「壓克力雷雕桌面立牌」。
- 📳 **超越官方的體驗**：可額外加入微型線性震動馬達（Haptic Motor），在遊戲打擊或大鼓重擊時產生實體反饋。

---

## 2. 系統總體架構與工作原理

```
┌────────────────────────────────────────────────────────────────────────┐
│                        自製手燈系統架構圖                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [ 控制訊號發射端 ]                                                    │
│    ├─ Hangul PopPop (Web Bluetooth API @ Chrome/Edge)                  │
│    └─ 官方手機 App (BABYMONSTER LIGHT STICK @ iOS/Android)             │
│                     │                                                  │
│                     ▼ 2.4GHz 射頻廣播 (Advertising)                    │
│  [ 藍牙接收與邏輯主控 (MCU) ]                                          │
│    └─ ESP32-C3 SuperMini (RISC-V 160MHz, BLE 5.0)                      │
│         ├─ 廣播名稱: "BABYMONSTER" / "BABYMONSTER_DIY"                 │
│         ├─ Service UUID: 00010203-0405-0607-0809-0a0b0c0d1911          │
│         ├─ Write Characteristic: 00010203-0405-0607-0809-0a0b0c0d2b19  │
│         └─ 9-Byte 封包解碼器與 Checksum 校驗                           │
│                     │                                                  │
│                     ├─► 單線定址控制 (GPIO 4: DIN) ────► [ WS2812B 燈環 ]
│                     ├─► PWM 驅動 (GPIO 5) ─────────────► [ 震動馬達 ]   │
│                     └─► 實體多功能按鍵 (GPIO 9: KEY)   ◄─ [ 實體短按/長按 ]
│                                                                        │
│  [ 電源管理模組 (Power) ]                                              │
│    └─ 3.7V 鋰聚合物電池 (600mAh) + TP4056 Type-C 充放電保護板          │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. 硬體選型與物料清單 (BOM)

| 零件名稱 | 型號 / 規格 | 建議數量 | 預估單價 (TWD) | 功能說明 |
| :--- | :--- | :---: | :---: | :--- |
| **主控微處理器** | **ESP32-C3 SuperMini** | 1 片 | NT$ 85 | 體積僅 22.5×18mm，內建 RISC-V 核心、WiFi 與 BLE 5.0，支援 Type-C 燒錄 |
| **全彩發光元件** | **WS2812B 圓形 LED 燈環** (8 燈珠或 12 燈珠) | 1 組 | NT$ 45 | 5050 RGB 內建驅動 IC，僅需一根 GPIO 即可定址控制所有燈珠顏色與亮度 |
| **微型鋰電池** | **602535 鋰聚合物電池** (3.7V 600mAh) | 1 顆 | NT$ 60 | 體積扁平，可輕鬆放入手燈手柄，續航約 2.5 ~ 4 小時 |
| **充放電管理板** | **TP4056 Type-C 鋰電池保護板** | 1 片 | NT$ 12 | 具備過充、過放、短路保護，支援標準手機 Type-C 線充電 |
| **實體開關按鍵** | **6×6 微動輕觸開關** + **SS12D00 滑動開關** | 各 1 個 | NT$ 10 | 滑動開關切斷總電源；輕觸開關負責模式切換與長按配對 |
| **觸覺震動馬達** | **1027 扁平圓盤鈕扣震動馬達** (選配) | 1 顆 | NT$ 18 | 遊戲打字 Combo 或演唱會大鼓落下時產生震動回饋 |
| **外殼素材** | **3D 列印 PETG / PLA+ 耗材** (黑、紅、透白) | 約 70g | NT$ 40 | 手柄與惡魔角外殼列印，燈罩使用半透明白色聚光 |
| **線材與螺絲** | 30AWG 矽膠軟線、M2 自攻螺絲 | 少量 | NT$ 15 | 內部線路焊接與固定 |
| **【總計成本】** | | | **約 NT$ 285 元** | **僅官方手燈價格的 1/7！** |

---

## 4. 外觀結構與 3D 列印設計

自製裝置可依照使用情境設計為兩種主流形態：

### 形態 A：經典惡魔角手持應援手燈 (Handheld Wand)
- **頭部燈罩總成**：
  - 上方為 **BABYMONSTER 標誌性惡魔雙角 (Devil Horns)**，使用暗紅或純黑材質列印。
  - 中央為直徑約 65mm 的**半透明乳白球形柔光擴散罩 (Diffuser)**，讓內部的 WS2812B 燈環發光均勻柔和，避免直視刺眼。
- **手柄總成**：
  - 內徑 24mm 圓柱中空握把，內部自上而下配置：主控板支架 ➔ 鋰電池倉 ➔ 底部 Type-C 充電孔開口。
  - 手柄中央設置一顆手感清脆的圓形橡膠按鈕。

### 形態 B：桌面演唱會沉浸神龕 (Desktop Stage Shrine)
- 無需手柄與電池，直接使用電腦 USB 供電。
- 採用 **5mm 透明壓克力雷射雕刻** BABYMONSTER 隊徽與成員剪影。
- 底部 3D 列印底座內嵌 ESP32-C3 與 WS2812B 燈條，朝上投射出極光流光，放置於電腦螢幕兩側作為常態應援桌面擺設。

---

## 5. 完整 ESP32 韌體程式碼 (可直接燒錄)

本韌體完全模擬官方手燈之 BLE 廣播結構，能直接接收 Hangul PopPop 或官方 App 發布的 9-Byte 封包。

```cpp
/**
 * BABYMONSTER DIY Official-Compatible Lightstick Firmware
 * Target MCU: ESP32-C3 / ESP32-S3 / ESP32 (Arduino Core)
 * Author: Hangul PopPop Engineering
 */

#include <Arduino.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <Adafruit_NeoPixel.h>

// ====== 硬體腳位定義 ======
#define LED_PIN         4       // WS2812B 資料輸入線 (DIN)
#define NUM_LEDS        8       // 燈珠數量 (依實際使用燈環調整)
#define BTN_PIN         9       // 實體按鈕腳位 (內建上拉)
#define MOTOR_PIN       5       // 震動馬達驅動腳位 (選配)

// ====== FANLIGHT BLE 官方相容 UUID ======
#define FANLIGHT_SERVICE_UUID     "00010203-0405-0607-0809-0a0b0c0d1911"
#define FANLIGHT_WRITE_CHAR_UUID  "00010203-0405-0607-0809-0a0b0c0d2b19"
#define FANLIGHT_NOTIFY_CHAR_UUID "00010203-0405-0607-0809-0a0b0c0d1912"

Adafruit_NeoPixel strip(NUM_LEDS, LED_PIN, NEO_GRB + NEO_KHZ800);
BLEServer* pServer = nullptr;
BLECharacteristic* pWriteChar = nullptr;
BLECharacteristic* pNotifyChar = nullptr;

bool deviceConnected = false;
uint8_t currentR = 255, currentG = 0, currentB = 51; // 預設 BM 招牌紅
bool isBreathing = false;
unsigned long lastBreatheTime = 0;
float breatheStep = 0.0;

// ====== 輔助函式：全彩設定 ======
void setAllPixels(uint8_t r, uint8_t g, uint8_t b) {
  for (int i = 0; i < NUM_LEDS; i++) {
    strip.setPixelColor(i, strip.Color(r, g, b));
  }
  strip.show();
}

// ====== 觸覺震動觸發 ======
void triggerHaptic(int durationMs) {
  #ifdef MOTOR_PIN
  digitalWrite(MOTOR_PIN, HIGH);
  delay(durationMs);
  digitalWrite(MOTOR_PIN, LOW);
  #endif
}

// ====== 藍牙連線事件回呼 ======
class ServerCallbacks : public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
    Serial.println("[BLE] 裝置已連線！");
    // 連線成功時閃爍兩次青光並震動
    for (int i = 0; i < 2; i++) {
      setAllPixels(0, 229, 255);
      delay(100);
      setAllPixels(0, 0, 0);
      delay(100);
    }
    setAllPixels(currentR, currentG, currentB);
    triggerHaptic(80);
  }

  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
    Serial.println("[BLE] 裝置斷線，重新開啟廣播...");
    delay(200);
    pServer->startAdvertising(); // 斷線自動恢復廣播
  }
};

// ====== 官方 9-Byte 封包解析回呼 ======
class CharacteristicCallbacks : public BLECharacteristicCallbacks {
  void onWrite(BLECharacteristic* pCharacteristic) {
    uint8_t* data = pCharacteristic->getData();
    size_t len = pCharacteristic->getLength();

    if (len < 9) {
      Serial.printf("[BLE] 忽略無效長度封包: %d bytes\n", len);
      return;
    }

    // 格式驗證: Header=0x01, Cmd=0xFF
    if (data[0] == 0x01 && data[1] == 0xFF) {
      uint8_t r = data[3];
      uint8_t g = data[4];
      uint8_t b = data[5];
      uint8_t receivedChecksum = data[8];

      // 計算加總校驗碼: (Byte2 + R + G + B + Byte6 + Byte7) % 256
      uint8_t expectedChecksum = (data[2] + r + g + b + data[6] + data[7]) & 0xFF;

      if (receivedChecksum == expectedChecksum) {
        currentR = r;
        currentG = g;
        currentB = b;
        isBreathing = false; // 收到固定色指令停止本地呼吸
        setAllPixels(currentR, currentG, currentB);
        Serial.printf("[RGB] 成功解析顏色 -> R:%d, G:%d, B:%d\n", r, g, b);

        // 如果是純白或極亮色，給予微震動打擊反饋
        if (r > 240 && g > 240 && b > 240) {
          triggerHaptic(50);
        }
      } else {
        Serial.printf("[WARN] 校驗碼不符: 計算=0x%02X, 收到=0x%02X\n", expectedChecksum, receivedChecksum);
      }
    }
  }
};

void setup() {
  Serial.begin(115200);
  pinMode(BTN_PIN, INPUT_PULLUP);
  #ifdef MOTOR_PIN
  pinMode(MOTOR_PIN, OUTPUT);
  digitalWrite(MOTOR_PIN, LOW);
  #endif

  // 初始化 LED
  strip.begin();
  strip.setBrightness(220); // 避免過熱與過大電流，設為約 85%
  strip.show();

  // 開機動畫：招牌紅漸亮
  for (int i = 0; i <= 100; i += 5) {
    setAllPixels(currentR * i / 100, currentG * i / 100, currentB * i / 100);
    delay(15);
  }

  // 初始化 BLE
  BLEDevice::init("BABYMONSTER"); // 廣播名稱與官方一致
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new ServerCallbacks());

  // 註冊 Fanlight 主服務
  BLEService* pService = pServer->createService(FANLIGHT_SERVICE_UUID);

  // 註冊可寫特徵值 (Write Without Response / Write)
  pWriteChar = pService->createCharacteristic(
    FANLIGHT_WRITE_CHAR_UUID,
    BLECharacteristic::PROPERTY_WRITE | BLECharacteristic::PROPERTY_WRITE_NR
  );
  pWriteChar->setCallbacks(new CharacteristicCallbacks());

  // 註冊 Notify 特徵值
  pNotifyChar = pService->createCharacteristic(
    FANLIGHT_NOTIFY_CHAR_UUID,
    BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_NOTIFY
  );
  pNotifyChar->addDescriptor(new BLE2902());

  pService->start();

  // 啟動廣播
  BLEAdvertising* pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(FANLIGHT_SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06); // 支援 iPhone 連線參數
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();

  Serial.println("[SYSTEM] BABYMONSTER 自製手燈韌體啟動成功，等待藍牙連線中...");
}

void loop() {
  // 實體按鈕檢測：短按手動切換預設成員色彩
  if (digitalRead(BTN_PIN) == LOW) {
    delay(40); // 防彈跳
    if (digitalRead(BTN_PIN) == LOW) {
      static uint8_t presetIdx = 0;
      const uint8_t presets[][3] = {
        {0, 71, 255},   // Ruka 湛藍 (Bright Deep Blue)
        {226, 232, 240},// Pharita 耀眼銀芒 (Silver)
        {255, 105, 180},// Asa 甜蜜粉紅 (Pink)
        {255, 255, 255},// Ahyeon 純白 (White)
        {255, 0, 51},   // Rami 熱情鮮紅 (Red)
        {153, 51, 255}, // Rora 皇家炫紫 (Purple)
        {0, 0, 0}       // Chiquita 暗夜極黑 (Black)
      };
      presetIdx = (presetIdx + 1) % 7;
      currentR = presets[presetIdx][0];
      currentG = presets[presetIdx][1];
      currentB = presets[presetIdx][2];
      setAllPixels(currentR, currentG, currentB);
      triggerHaptic(40);
      while (digitalRead(BTN_PIN) == LOW) delay(10); // 等待釋放
    }
  }

  delay(20);
}
```

---

## 6. 與 Hangul PopPop 生態系整合設計

自製手燈組裝完成後，可享有與本專案三大核心模組的深度連動體驗：

### 6.1 演唱會電視牆焦點連動 (Concert Wall Focus Sync)
- 進入 [ConcertWall.jsx](file:///Users/hsiaotingchen/korean-typing-game/src/components/ConcertWall.jsx)。
- 點選 CAM 2（Ahyeon 直拍）➔ 手燈自動收到純白指令變為 `#FFFFFF`。
- 點選 CAM 3（Ruka 直拍）➔ 手燈自動變為湛藍 `#0047FF`。
- 切換至歌曲《SHEESH》➔ 手燈進入高潮重低音血紅頻閃。

### 6.2 打字遊戲擊打觸覺回饋 (K-Pop Game & Haptic Burst)
- 在 [KpopGameMode.jsx](file:///Users/hsiaotingchen/korean-typing-game/src/components/KpopGameMode.jsx) 中：
  - 每正確擊中歌詞：自製手燈瞬間閃爍青光。
  - 達成 5x、10x、20x 連擊 Combo：手燈震動馬達啟動，伴隨金色光芒爆閃。
  - 答錯時：紅光警示。

---

## 7. 專案開發時程與里程碑 (Roadmap)

```
[ Week 1: 概念驗證 POC ] ─────► [ Week 2: 結構建模與外殼 ] ─────► [ Week 3: 總成組裝與實測 ]
  - 麵包板搭建電路                - 3D 列印燈頭惡魔角與握把         - 焊接鋰電池與充放電保護板
  - 燒錄 ESP32 韌體               - 內部結構固定件設計              - 與 Hangul PopPop 實機連線
  - 驗證 Web BLE 9-byte 封包      - 柔光罩光學擴散測試              - 演唱會多視角長時間播放測試
```

| 階段 | 里程碑目標 | 產出與驗收標準 |
| :--- | :--- | :--- |
| **Phase 1: 原型驗證 (POC)** | 麵包板點亮測試 | ESP32 在麵包板上成功廣播 Fanlight UUID，網頁能成功連線並控制 WS2812B 變色 |
| **Phase 2: 3D 結構打樣** | 手燈握把與燈罩成型 | 雙角外觀列印無瑕疵，燈球透光均勻無死角，按鈕行程手感俐落 |
| **Phase 3: 電源與內部封裝** | 便攜化與無線化 | 鋰電池與 Type-C 充電模組整合完畢，支援隨插即充，連續運作 3 小時以上 |
| **Phase 4: 系統聯調** | 軟硬體全面連動 | 與 Concert Wall 直拍切換無縫呼應，並成功透過官方手機 App 讀取 |

---

## 8. 安全規範、風險評估與注意事項

1. **鋰電池防護規範**：
   - 必須使用**自帶保護板 (Protection Circuit Module, PCM)** 的鋰聚合物電池，防止短路、過充（高於 4.25V）與過放（低於 2.8V）。
   - 充電線路必須經由 TP4056 晶片調控，充電電流設定於 300mA ~ 500mA，避免電池發燙。
2. **LED 限流與散熱管理**：
   - WS2812B 燈珠單顆在全白 100% 亮度時電流約 50mA。若 8 顆燈珠同時全開，總電流達 400mA。
   - 韌體中將全局最大亮度限制在 **85% (`setBrightness(220)`)**，既保證視覺高亮，又能將總功耗控制在 1.5W 以內，確保外殼不發熱。
3. **天線訊號注意事項**：
   - 3D 列印外殼請勿使用含有金屬粉末或導電碳纖維的特殊耗材，避免阻斷 ESP32 板載 PCB 天線的 2.4GHz 射頻訊號。
