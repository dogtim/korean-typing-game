/**
 * BABYMONSTER Official Lightstick (Fanlight BLE) Web Bluetooth Controller
 * Protocol: 9-Byte Packet [0x01, 0xFF, 0x00, R, G, B, 0x00, 0x00, Checksum]
 */

export const FANLIGHT_SERVICE_UUID = '00010203-0405-0607-0809-0a0b0c0d1911';
export const FANLIGHT_WRITE_CHAR_UUID = '00010203-0405-0607-0809-0a0b0c0d2b19';
export const FANLIGHT_NOTIFY_CHAR_UUID = '00010203-0405-0607-0809-0a0b0c0d1912';

// 7 位成員專屬色票 (自訂色調)
export const BM_MEMBER_COLORS = [
  { id: 'ruka', name: 'RUKA', koName: '루카', color: '#0047FF', rgb: [0, 71, 255], emoji: '💙', role: 'Main Rapper', desc: 'Bright Deep Blue (湛藍)' },
  { id: 'pharita', name: 'PHARITA', koName: '파리타', color: '#E2E8F0', rgb: [226, 232, 240], emoji: '✨', role: 'Lead Vocal', desc: 'Shine Like Silver (銀芒)' },
  { id: 'asa', name: 'ASA', koName: '아사', color: '#FF69B4', rgb: [255, 105, 180], emoji: '🩷', role: 'Main Rapper', desc: 'Pink (粉紅)' },
  { id: 'ahyeon', name: 'AHYEON', koName: '아현', color: '#FFFFFF', rgb: [255, 255, 255], emoji: '🤍', role: 'All-Rounder', desc: 'White (純白)' },
  { id: 'rami', name: 'RAMI', koName: '라미', color: '#FF0033', rgb: [255, 0, 51], emoji: '❤️', role: 'Main Vocal', desc: 'Red (鮮紅)' },
  { id: 'rora', name: 'RORA', koName: '로라', color: '#9933FF', rgb: [153, 51, 255], emoji: '💜', role: 'Lead Vocal', desc: 'Purple (炫紫)' },
  { id: 'chiquita', name: 'CHIQUITA', koName: '치키타', color: '#18181B', rgb: [0, 0, 0], emoji: '🖤', role: 'Maknae', desc: 'Black (暗夜黑)' }
];

const LOCAL_STORAGE_CUSTOM_COLORS_KEY = 'bm_custom_member_colors';

/**
 * 取得成員色票（優先使用使用者客製化並快取的色碼）
 */
export function getSavedMemberColors() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CUSTOM_COLORS_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return BM_MEMBER_COLORS.map((m) => {
        if (parsed[m.id]) {
          const customHex = parsed[m.id];
          return {
            ...m,
            color: customHex,
            rgb: hexToRgb(customHex),
            isCustom: customHex.toLowerCase() !== m.color.toLowerCase()
          };
        }
        return { ...m, isCustom: false };
      });
    }
  } catch (_e) {}
  return BM_MEMBER_COLORS.map(m => ({ ...m, isCustom: false }));
}

/**
 * 儲存特定成員的客製色碼
 */
export function saveMemberColor(memberId, hex) {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_CUSTOM_COLORS_KEY);
    const map = raw ? JSON.parse(raw) : {};
    map[memberId] = hex;
    localStorage.setItem(LOCAL_STORAGE_CUSTOM_COLORS_KEY, JSON.stringify(map));
  } catch (_e) {}
}

/**
 * 重設特定或全部成員的色碼回原廠預設
 */
export function resetMemberColor(memberId = null) {
  try {
    if (!memberId) {
      localStorage.removeItem(LOCAL_STORAGE_CUSTOM_COLORS_KEY);
    } else {
      const raw = localStorage.getItem(LOCAL_STORAGE_CUSTOM_COLORS_KEY);
      if (raw) {
        const map = JSON.parse(raw);
        delete map[memberId];
        localStorage.setItem(LOCAL_STORAGE_CUSTOM_COLORS_KEY, JSON.stringify(map));
      }
    }
  } catch (_e) {}
  return getSavedMemberColors();
}

// 演唱會主題曲風格燈光
export const BM_SONG_THEMES = {
  'SHEESH': { name: 'SHEESH', color: '#FF0033', rgb: [255, 0, 51], mode: 'strobe', desc: '鮮血紅頻閃 (Crimson Strobe)' },
  'BATTER UP': { name: 'BATTER UP', color: '#FFAA00', rgb: [255, 170, 0], mode: 'flash', desc: '熱血能量橘黃 (Energy Gold)' },
  'FOREVER': { name: 'FOREVER', color: '#00E5FF', rgb: [0, 229, 255], mode: 'breathe', desc: '星空霓虹青光浪 (Cyber Cyan Wave)' },
  'DRIP': { name: 'DRIP', color: '#FF1493', rgb: [255, 20, 147], mode: 'rainbow', desc: '潮流彩繪流光 (Rainbow Drip)' },
  'LIKE THAT': { name: 'LIKE THAT', color: '#9D00FF', rgb: [157, 0, 255], mode: 'breathe', desc: '微醺派對霓虹紫 (Party Violet)' },
  'CLIK CLAK': { name: 'CLIK CLAK', color: '#FFFFFF', rgb: [255, 255, 255], mode: 'strobe', desc: '俐落純白閃擊 (Monochrome Flash)' },
  'REALLY LIKE YOU': { name: 'REALLY LIKE YOU', color: '#FF69B4', rgb: [255, 105, 180], mode: 'breathe', desc: '粉紅告白心動呼吸 (Sweet Pink)' },
  'CHOOM': { name: 'CHOOM', color: '#FF4500', rgb: [255, 69, 0], mode: 'strobe', desc: '紅蓮烈焰舞動 (Blazing Flame)' },
  'WE GO UP': { name: 'WE GO UP', color: '#FFD700', rgb: [255, 215, 0], mode: 'flash', desc: '黃金榮耀衝頂 (Golden Zenith)' }
};

/**
 * 建立 Fanlight 9-Byte RGB 控制封包
 * Checksum = (0x00 + R + G + B + 0x00 + 0x00) % 256
 */
export function buildFanlightColorPacket(r, g, b) {
  const red = Math.max(0, Math.min(255, Math.round(r)));
  const green = Math.max(0, Math.min(255, Math.round(g)));
  const blue = Math.max(0, Math.min(255, Math.round(b)));
  const checksum = (0x00 + red + green + blue + 0x00 + 0x00) & 0xFF;
  return new Uint8Array([0x01, 0xFF, 0x00, red, green, blue, 0x00, 0x00, checksum]);
}

export function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return [r, g, b];
  }
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
}

class BabyMonsterLightstickController {
  constructor() {
    this.device = null;
    this.server = null;
    this.writeCharacteristic = null;
    this.isConnected = false;
    this.isConnecting = false;
    this.deviceName = '';
    this.currentColor = { r: 255, g: 0, b: 51, hex: '#FF0033' }; // 預設 BM 招牌紅
    this.currentMode = 'static'; // 'static' | 'breathe' | 'strobe' | 'rainbow'
    this.batteryLevel = null;
    this.concertSyncEnabled = true;
    this.animationTimer = null;
    this.listeners = new Set();
    this.logs = [];

    // BLE 寫入佇列鎖，防止併發操作報錯
    this.isWriting = false;
    this.pendingRgb = null;
  }

  isSupported() {
    return typeof navigator !== 'undefined' && !!navigator.bluetooth;
  }

  log(msg, type = 'info') {
    const time = new Date().toLocaleTimeString();
    const entry = { time, msg, type };
    this.logs.unshift(entry);
    if (this.logs.length > 50) this.logs.pop();
    this.emitChange();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    // 立即回呼目前狀態
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  emitChange() {
    const state = this.getState();
    this.listeners.forEach(cb => {
      try {
        cb(state);
      } catch (e) {
        console.error('Lightstick listener error:', e);
      }
    });
  }

  getState() {
    return {
      isSupported: this.isSupported(),
      isConnected: this.isConnected,
      isConnecting: this.isConnecting,
      deviceName: this.deviceName,
      currentColor: this.currentColor,
      currentMode: this.currentMode,
      batteryLevel: this.batteryLevel,
      concertSyncEnabled: this.concertSyncEnabled,
      logs: [...this.logs]
    };
  }

  setConcertSync(enabled) {
    this.concertSyncEnabled = enabled;
    this.log(`演唱會自動同步已${enabled ? '開啟' : '關閉'}`);
    this.emitChange();
  }

  async connect(allowAllDevices = false) {
    if (!this.isSupported()) {
      throw new Error('此瀏覽器不支援 Web Bluetooth API。請使用 Google Chrome、Microsoft Edge 或 Opera。');
    }

    if (this.isConnected) {
      return;
    }

    this.isConnecting = true;
    this.emitChange();
    this.log('發起藍牙搜尋... (請確保手燈長按 3 秒進入藍燈閃爍配對模式)');

    try {
      const requestOptions = allowAllDevices
        ? {
            acceptAllDevices: true,
            optionalServices: [
              FANLIGHT_SERVICE_UUID,
              '00010203-0405-0607-0809-0a0b0c0d1912',
              'battery_service',
              0x180f
            ]
          }
        : {
            filters: [
              { namePrefix: 'BABYMONSTER' },
              { namePrefix: 'BM_' },
              { namePrefix: 'BM' },
              { namePrefix: 'FANLIGHT' },
              { namePrefix: 'FL_' }
            ],
            optionalServices: [
              FANLIGHT_SERVICE_UUID,
              '00010203-0405-0607-0809-0a0b0c0d1912',
              'battery_service',
              0x180f
            ]
          };

      this.device = await navigator.bluetooth.requestDevice(requestOptions);
      this.deviceName = this.device.name || 'BABYMONSTER Lightstick';
      this.log(`已選取裝置: ${this.deviceName}，連線 GATT 中...`);

      this.device.addEventListener('gattserverdisconnected', () => {
        this.handleDisconnect('手燈連線中斷 (裝置離線或訊號中斷)');
      });

      this.server = await this.device.gatt.connect();
      this.log('GATT 伺服器已連線，正在解析 Fanlight 服務...');

      // 嘗試解析服務與特徵值
      await this.resolveGattServices();

      this.isConnected = true;
      this.isConnecting = false;
      this.log(`手燈連線成功！歡迎進入 BM 應援世界 ✨`, 'success');
      this.emitChange();

      // 連線成功後點亮目前顏色
      await this.setColor(this.currentColor.r, this.currentColor.g, this.currentColor.b, true);
    } catch (err) {
      this.isConnecting = false;
      this.handleDisconnect(err.message || '藍牙配對已取消');
      throw err;
    }
  }

  async resolveGattServices() {
    let service;
    try {
      service = await this.server.getPrimaryService(FANLIGHT_SERVICE_UUID);
      this.log('成功獲取 Fanlight 主服務 (UUID: 1911)');
    } catch (e) {
      this.log(`未找到預設 Fanlight 服務，啟動自動服務枚舉...`, 'warn');
      const services = await this.server.getPrimaryServices();
      if (services.length > 0) {
        service = services[0];
        this.log(`自動適配第一個可用服務: ${service.uuid}`);
      } else {
        throw new Error('未在該手燈中找到可用的 GATT 服務。');
      }
    }

    try {
      this.writeCharacteristic = await service.getCharacteristic(FANLIGHT_WRITE_CHAR_UUID);
      this.log('成功鎖定控制特徵值 (UUID: 2b19)');
    } catch (e) {
      this.log(`未找到預設寫入特徵值，掃描可用特徵值中...`, 'warn');
      const characteristics = await service.getCharacteristics();
      const writable = characteristics.find(c => c.properties.write || c.properties.writeWithoutResponse);
      if (writable) {
        this.writeCharacteristic = writable;
        this.log(`自動採用可寫特徵值: ${writable.uuid}`);
      } else {
        throw new Error('未找到支援寫入的特徵值。');
      }
    }

    // 嘗試讀取電池電量
    try {
      const batteryService = await this.server.getPrimaryService('battery_service');
      const batteryChar = await batteryService.getCharacteristic('battery_level');
      const val = await batteryChar.readValue();
      this.batteryLevel = val.getUint8(0);
      this.log(`手燈電量: ${this.batteryLevel}%`);
    } catch (_e) {
      // 電池服務非必須，略過
    }
  }

  /**
   * 特徵值深度掃描與診斷工具
   */
  async autoScanGatt() {
    if (!this.server || !this.server.connected) {
      throw new Error('請先連線手燈再執行掃描。');
    }
    this.log('--- 開始執行 GATT 深度診斷掃描 ---');
    try {
      const services = await this.server.getPrimaryServices();
      this.log(`共掃描到 ${services.length} 個 Primary Services`);
      for (const s of services) {
        this.log(`服務 UUID: ${s.uuid}`);
        const chars = await s.getCharacteristics();
        for (const c of chars) {
          const props = [];
          if (c.properties.read) props.push('Read');
          if (c.properties.write) props.push('Write');
          if (c.properties.writeWithoutResponse) props.push('WriteNoResp');
          if (c.properties.notify) props.push('Notify');
          this.log(`  └─ 特徵值: ${c.uuid} [${props.join(', ')}]`);
        }
      }
      this.log('--- 診斷掃描完成 ---', 'success');
    } catch (err) {
      this.log(`診斷掃描失敗: ${err.message}`, 'error');
    }
  }

  async setColor(r, g, b, immediate = false) {
    const red = Math.max(0, Math.min(255, Math.round(r)));
    const green = Math.max(0, Math.min(255, Math.round(g)));
    const blue = Math.max(0, Math.min(255, Math.round(b)));
    this.currentColor = { r: red, g: green, b: blue, hex: rgbToHex(red, green, blue) };
    this.emitChange();

    if (!this.isConnected || !this.writeCharacteristic) return;

    if (immediate) {
      await this.sendPacket(red, green, blue);
    } else {
      this.queuePacket(red, green, blue);
    }
  }

  async setHexColor(hex) {
    this.stopAnimation();
    this.currentMode = 'static';
    const [r, g, b] = hexToRgb(hex);
    await this.setColor(r, g, b);
  }

  queuePacket(r, g, b) {
    this.pendingRgb = [r, g, b];
    if (this.isWriting) return;
    this.processQueue();
  }

  async processQueue() {
    if (!this.pendingRgb || !this.isConnected || !this.writeCharacteristic) return;
    this.isWriting = true;
    const [r, g, b] = this.pendingRgb;
    this.pendingRgb = null;

    try {
      await this.sendPacket(r, g, b);
    } catch (err) {
      console.warn('封包發送警告:', err);
    } finally {
      this.isWriting = false;
      if (this.pendingRgb) {
        this.processQueue();
      }
    }
  }

  async sendPacket(r, g, b) {
    const packet = buildFanlightColorPacket(r, g, b);
    if (this.writeCharacteristic.writeValueWithoutResponse) {
      await this.writeCharacteristic.writeValueWithoutResponse(packet);
    } else {
      await this.writeCharacteristic.writeValue(packet);
    }
  }

  /**
   * 特效：呼吸燈
   */
  startBreathing(r, g, b, cycleMs = 3000) {
    this.stopAnimation();
    this.currentMode = 'breathe';
    this.currentColor = { r, g, b, hex: rgbToHex(r, g, b) };
    this.emitChange();

    let step = 0;
    const interval = 60;
    const totalSteps = cycleMs / interval;

    this.animationTimer = setInterval(() => {
      step = (step + 1) % totalSteps;
      const progress = step / totalSteps;
      // 正弦亮度變化 (0.05 ~ 1.0)
      const factor = 0.525 + 0.475 * Math.sin(progress * 2 * Math.PI - Math.PI / 2);
      this.setColor(r * factor, g * factor, b * factor);
    }, interval);
  }

  /**
   * 特效：彩虹波浪
   */
  startRainbow(speedMs = 4000) {
    this.stopAnimation();
    this.currentMode = 'rainbow';
    this.emitChange();

    let hue = 0;
    const interval = 80;
    const step = 360 / (speedMs / interval);

    this.animationTimer = setInterval(() => {
      hue = (hue + step) % 360;
      const [r, g, b] = hslToRgb(hue / 360, 1, 0.5);
      this.setColor(r, g, b);
    }, interval);
  }

  /**
   * 特效：狂暴頻閃 (Strobe)
   */
  startStrobe(r, g, b, frequencyMs = 120) {
    this.stopAnimation();
    this.currentMode = 'strobe';
    this.currentColor = { r, g, b, hex: rgbToHex(r, g, b) };
    this.emitChange();

    let isOn = false;
    this.animationTimer = setInterval(() => {
      isOn = !isOn;
      if (isOn) {
        this.setColor(r, g, b);
      } else {
        this.setColor(0, 0, 0);
      }
    }, frequencyMs);
  }

  /**
   * 單次爆閃 (Flash)
   */
  async flash(r, g, b, durationMs = 150) {
    const prevColor = { ...this.currentColor };
    const prevMode = this.currentMode;
    this.stopAnimation();

    await this.setColor(r, g, b, true);
    setTimeout(async () => {
      if (prevMode === 'breathe') {
        this.startBreathing(prevColor.r, prevColor.g, prevColor.b);
      } else if (prevMode === 'rainbow') {
        this.startRainbow();
      } else {
        await this.setColor(prevColor.r, prevColor.g, prevColor.b, true);
      }
    }, durationMs);
  }

  stopAnimation() {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
  }

  /**
   * 觸發特定歌曲的主題燈效
   */
  triggerSongTheme(songTitle) {
    if (!this.isConnected || !this.concertSyncEnabled) return;
    const cleanTitle = (songTitle || '').toUpperCase().trim();
    const matched = Object.keys(BM_SONG_THEMES).find(k => cleanTitle.includes(k));
    if (!matched) return;

    const theme = BM_SONG_THEMES[matched];
    this.log(`演唱會連動曲目 [${theme.name}]：切換至 ${theme.desc}`);
    const [r, g, b] = theme.rgb;

    switch (theme.mode) {
      case 'breathe':
        this.startBreathing(r, g, b, 3200);
        break;
      case 'strobe':
        this.startStrobe(r, g, b, 140);
        break;
      case 'rainbow':
        this.startRainbow(4500);
        break;
      case 'flash':
      default:
        this.stopAnimation();
        this.currentMode = 'static';
        this.setColor(r, g, b);
        break;
    }
  }

  handleDisconnect(reason = '') {
    this.stopAnimation();
    this.isConnected = false;
    this.isConnecting = false;
    this.writeCharacteristic = null;
    this.server = null;
    this.deviceName = '';
    if (reason) this.log(reason, 'warn');
    this.emitChange();
  }

  async disconnect() {
    this.stopAnimation();
    if (this.device && this.device.gatt.connected) {
      this.device.gatt.disconnect();
    }
    this.handleDisconnect('已主動中斷手燈連線');
  }
}

function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// 匯出全域單例
export const lightstick = new BabyMonsterLightstickController();
export default lightstick;
