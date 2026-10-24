import React, { useState, useEffect, useRef } from 'react';
import {
  Bluetooth,
  Radio,
  Sparkles,
  Zap,
  Sun,
  Flame,
  Waves,
  Palette,
  X,
  ChevronDown,
  ChevronUp,
  Battery,
  Activity,
  Music,
  RotateCw,
  Edit3,
  Check
} from 'lucide-react';
import {
  lightstick,
  BM_MEMBER_COLORS,
  BM_SONG_THEMES,
  hexToRgb,
  getSavedMemberColors,
  saveMemberColor,
  resetMemberColor
} from '../utils/lightstickBle';
import './LightstickModal.css';

export default function LightstickModal({ isOpen, onClose }) {
  const [bleState, setBleState] = useState(lightstick.getState());
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [memberColors, setMemberColors] = useState(() => getSavedMemberColors());
  const [editingMember, setEditingMember] = useState(null);
  const [editingColorHex, setEditingColorHex] = useState('#FFFFFF');

  const longPressTimerRef = useRef(null);
  const isLongPressTriggeredRef = useRef(false);

  // 監聽手燈狀態更新
  useEffect(() => {
    const unsubscribe = lightstick.subscribe((newState) => {
      setBleState(newState);
    });
    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  const handleConnect = async (allowAll = false) => {
    try {
      await lightstick.connect(allowAll);
    } catch (err) {
      console.warn('連線流程完成或取消:', err.message);
    }
  };

  const handleDisconnect = async () => {
    await lightstick.disconnect();
    setSelectedMember(null);
  };

  const handleSelectMember = async (member) => {
    setSelectedMember(member.id);
    const [r, g, b] = member.rgb;
    await lightstick.setColor(r, g, b, true);
  };

  // 長按檢測邏輯 (550ms 判定為長按)
  const handlePressStart = (member) => {
    isLongPressTriggeredRef.current = false;
    if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
    longPressTimerRef.current = setTimeout(() => {
      isLongPressTriggeredRef.current = true;
      setEditingMember(member);
      setEditingColorHex(member.color);
    }, 550);
  };

  const handlePressEnd = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const handleContextMenu = (e, member) => {
    e.preventDefault();
    setEditingMember(member);
    setEditingColorHex(member.color);
  };

  const handleMemberClick = (member) => {
    if (isLongPressTriggeredRef.current) {
      isLongPressTriggeredRef.current = false;
      return;
    }
    handleSelectMember(member);
  };

  // 即時儲存客製色碼並同步手燈
  const handleSaveCustomColor = (newHex) => {
    if (!editingMember) return;
    const cleanHex = newHex.startsWith('#') ? newHex : `#${newHex}`;
    saveMemberColor(editingMember.id, cleanHex);

    const updated = memberColors.map((m) => {
      if (m.id === editingMember.id) {
        return {
          ...m,
          color: cleanHex,
          rgb: hexToRgb(cleanHex),
          isCustom: true
        };
      }
      return m;
    });
    setMemberColors(updated);
    setEditingColorHex(cleanHex);

    if (selectedMember === editingMember.id) {
      const [r, g, b] = hexToRgb(cleanHex);
      lightstick.setColor(r, g, b, true);
    }
  };

  // 恢復當前成員預設
  const handleResetThisMember = () => {
    if (!editingMember) return;
    const updated = resetMemberColor(editingMember.id);
    setMemberColors(updated);
    const original = updated.find((m) => m.id === editingMember.id);
    if (original) {
      setEditingColorHex(original.color);
      if (selectedMember === editingMember.id) {
        const [r, g, b] = original.rgb;
        lightstick.setColor(r, g, b, true);
      }
    }
  };

  // 恢復所有成員預設
  const handleResetAllMembers = () => {
    const defaultColors = resetMemberColor(null);
    setMemberColors(defaultColors);
    setEditingMember(null);
    if (selectedMember) {
      const cur = defaultColors.find((m) => m.id === selectedMember);
      if (cur) {
        const [r, g, b] = cur.rgb;
        lightstick.setColor(r, g, b, true);
      }
    }
  };

  const handleSetEffect = (mode) => {
    const { r, g, b } = bleState.currentColor;
    switch (mode) {
      case 'static':
        lightstick.stopAnimation();
        lightstick.setColor(r, g, b, true);
        break;
      case 'breathe':
        lightstick.startBreathing(r, g, b, 3000);
        break;
      case 'strobe':
        lightstick.startStrobe(r, g, b, 120);
        break;
      case 'rainbow':
        lightstick.startRainbow(4000);
        break;
      default:
        break;
    }
  };

  const handleColorChange = async (e) => {
    const hex = e.target.value;
    setSelectedMember(null);
    await lightstick.setHexColor(hex);
  };

  const handleQuickColor = async (hex) => {
    setSelectedMember(null);
    await lightstick.setHexColor(hex);
  };

  const handleTriggerSong = (songTitle) => {
    lightstick.triggerSongTheme(songTitle);
  };

  const handleScanGatt = async () => {
    try {
      await lightstick.autoScanGatt();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="lightstick-modal-backdrop" onClick={onClose}>
      <div className="lightstick-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="lightstick-header">
          <div className="lightstick-header-brand">
            <div className="lightstick-logo-icon">
              <Zap size={22} color="#ffffff" />
            </div>
            <div className="lightstick-title-box">
              <h3>BABYMONSTER 手燈藍牙連動</h3>
              <span>OFFICIAL LIGHT STICK BLE CONTROLLER</span>
            </div>
          </div>
          <button className="lightstick-close-btn" onClick={onClose} title="關閉視窗">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="lightstick-body">
          {/* Hero Section: 實體手燈發光預覽 & 連線操作 */}
          <div className="lightstick-hero">
            <div className="lightstick-graphic-stage">
              <div className="stick-bulb-container">
                {/* 惡魔角雙翼裝飾 SVG */}
                <svg className="stick-horns" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M10 25 C15 5, 25 2, 35 18 C30 22, 20 28, 10 25 Z"
                    fill="var(--glow-color, #ff0033)"
                    opacity="0.9"
                  />
                  <path
                    d="M90 25 C85 5, 75 2, 65 18 C70 22, 80 28, 90 25 Z"
                    fill="var(--glow-color, #ff0033)"
                    opacity="0.9"
                  />
                </svg>

                {/* 燈頭主球體 */}
                <div
                  className={`stick-bulb ${
                    bleState.currentMode === 'breathe'
                      ? 'pulse'
                      : bleState.currentMode === 'strobe'
                      ? 'strobe'
                      : ''
                  }`}
                  style={{ '--glow-color': bleState.currentColor.hex }}
                >
                  <span className="stick-inner-logo">BM</span>
                </div>
              </div>

              {/* 手柄握把 */}
              <div className="stick-handle">
                <div className="stick-btn-dot" />
              </div>
            </div>

            {/* 連線狀態與主要按鈕 */}
            <div className="lightstick-hero-details">
              <div className="status-badge-row">
                {bleState.isConnected ? (
                  <span className="status-indicator-pill connected">
                    <span className="status-dot" />
                    已連線: {bleState.deviceName || 'BABYMONSTER Lightstick'}
                  </span>
                ) : bleState.isConnecting ? (
                  <span className="status-indicator-pill connecting">
                    <span className="status-dot anim-spin" />
                    正在搜尋與配對手燈...
                  </span>
                ) : (
                  <span className="status-indicator-pill disconnected">
                    <span className="status-dot" />
                    未連線 (等待配對)
                  </span>
                )}

                {bleState.batteryLevel !== null && (
                  <span className="status-indicator-pill connected">
                    <Battery size={14} />
                    {bleState.batteryLevel}%
                  </span>
                )}
              </div>

              <div className="hero-actions">
                {!bleState.isConnected ? (
                  <>
                    <button
                      className="btn-ble-connect"
                      onClick={() => handleConnect(false)}
                      disabled={bleState.isConnecting}
                    >
                      <Bluetooth size={16} />
                      {bleState.isConnecting ? '搜尋中...' : '連線 BABYMONSTER 手燈'}
                    </button>
                    <button
                      className="btn-subtle-fallback"
                      onClick={() => handleConnect(true)}
                      title="若特定裝置名稱無法被過濾器識別，可點此掃描所有周圍藍牙裝置"
                    >
                      相容模式掃描
                    </button>
                  </>
                ) : (
                  <button className="btn-ble-disconnect" onClick={handleDisconnect}>
                    <Activity size={16} />
                    中斷手燈連線
                  </button>
                )}
              </div>

              <div className="pairing-instruction-tip">
                💡 <strong>配對指南</strong>：請長按手燈按鈕 <strong>3 秒</strong> 直至
                <strong>藍燈持續閃爍</strong>，並確認已關閉手機 App。
              </div>
            </div>
          </div>

          {/* 7位成員專屬色快捷盤 */}
          <div>
            <div className="section-title">
              <span>BABYMONSTER 成員象徵色 (7 MEMBERS)</span>
              {selectedMember && (
                <span style={{ fontSize: '0.75rem', color: '#ff4d6d' }}>
                  目前選擇: {selectedMember.toUpperCase()}
                </span>
              )}
            </div>

            <div className="member-color-grid">
              {memberColors.map((m) => {
                const isSelected = selectedMember === m.id;
                const isEditing = editingMember?.id === m.id;
                return (
                  <button
                    key={m.id}
                    className={`member-card-btn ${isSelected ? 'active' : ''} ${isEditing ? 'is-editing' : ''}`}
                    style={{
                      '--member-color': m.id === 'chiquita' ? '#64748b' : m.color,
                      '--member-glow': m.id === 'chiquita' ? 'rgba(255, 255, 255, 0.25)' : m.color + '66'
                    }}
                    onMouseDown={() => handlePressStart(m)}
                    onMouseUp={handlePressEnd}
                    onMouseLeave={handlePressEnd}
                    onTouchStart={() => handlePressStart(m)}
                    onTouchEnd={handlePressEnd}
                    onTouchCancel={handlePressEnd}
                    onContextMenu={(e) => handleContextMenu(e, m)}
                    onClick={() => handleMemberClick(m)}
                    title={`${m.name} (${m.koName}) - ${m.desc || m.role} (長按或右鍵可自訂色碼)`}
                  >
                    {m.isCustom && <span className="member-custom-badge" title="已自訂色碼" />}
                    <div
                      className="member-color-dot"
                      style={{
                        background: m.id === 'chiquita' ? '#0a0a0f' : m.color,
                        boxShadow: m.id === 'chiquita' ? '0 0 8px rgba(255, 255, 255, 0.3)' : `0 0 10px ${m.color}`,
                        border: m.id === 'chiquita' ? '2px solid rgba(255, 255, 255, 0.9)' : undefined
                      }}
                    />
                    <span className="member-name-label">
                      {m.emoji} {m.name}
                    </span>
                    <span className="member-ko-label">{m.koName}</span>
                  </button>
                );
              })}
            </div>

            {/* 長按自訂成員色碼編輯面板 */}
            {editingMember && (
              <div className="member-edit-panel">
                <div className="member-edit-header">
                  <div className="member-edit-title">
                    <Edit3 size={15} color="#38bdf8" />
                    <span>自訂【{editingMember.name}】色碼</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>({editingMember.koName})</span>
                  </div>
                  <button
                    className="lightstick-close-btn"
                    style={{ width: '26px', height: '26px' }}
                    onClick={() => setEditingMember(null)}
                    title="關閉編輯"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="member-edit-controls">
                  <div className="member-edit-input-group">
                    <input
                      type="color"
                      className="member-color-picker-input"
                      value={editingColorHex}
                      onChange={(e) => handleSaveCustomColor(e.target.value)}
                      title="點擊自訂調色"
                    />
                    <input
                      type="text"
                      className="member-hex-text-input"
                      value={editingColorHex}
                      maxLength={7}
                      onChange={(e) => handleSaveCustomColor(e.target.value)}
                      placeholder="#RRGGBB"
                    />
                  </div>

                  <div className="member-edit-actions">
                    <button
                      type="button"
                      className="btn-member-reset"
                      onClick={handleResetThisMember}
                      title="恢復此成員預設色彩"
                    >
                      恢復預設
                    </button>
                    <button
                      type="button"
                      className="btn-member-save"
                      onClick={() => setEditingMember(null)}
                    >
                      <Check size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      完成
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="member-grid-hint-row">
              <span>💡 提示：長按按鈕（或右鍵）可自訂專屬色碼，調整後自動記憶</span>
              {memberColors.some((m) => m.isCustom) && (
                <button
                  type="button"
                  className="btn-reset-all-members"
                  onClick={handleResetAllMembers}
                >
                  恢復所有成員預設色
                </button>
              )}
            </div>
          </div>

          {/* 燈光動態特效模式 */}
          <div>
            <div className="section-title">
              <span>燈光動態特效 (LIGHTING EFFECTS)</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                當前: {bleState.currentMode.toUpperCase()}
              </span>
            </div>

            <div className="effects-row">
              <button
                className={`effect-btn ${bleState.currentMode === 'static' ? 'active' : ''}`}
                onClick={() => handleSetEffect('static')}
              >
                <Sun size={18} />
                <span>常亮 (Static)</span>
              </button>

              <button
                className={`effect-btn ${bleState.currentMode === 'breathe' ? 'active' : ''}`}
                onClick={() => handleSetEffect('breathe')}
              >
                <Waves size={18} />
                <span>柔和呼吸 (Breathe)</span>
              </button>

              <button
                className={`effect-btn ${bleState.currentMode === 'strobe' ? 'active' : ''}`}
                onClick={() => handleSetEffect('strobe')}
              >
                <Flame size={18} />
                <span>狂暴頻閃 (Strobe)</span>
              </button>

              <button
                className={`effect-btn ${bleState.currentMode === 'rainbow' ? 'active' : ''}`}
                onClick={() => handleSetEffect('rainbow')}
              >
                <Sparkles size={18} />
                <span>彩虹波浪 (Rainbow)</span>
              </button>
            </div>
          </div>

          {/* 自訂顏色選取器與演唱會同步開關 */}
          <div className="custom-color-controls">
            <div className="color-input-wrapper">
              <input
                type="color"
                className="color-picker-native"
                value={bleState.currentColor.hex}
                onChange={handleColorChange}
                title="點擊自由選色"
              />
              <span className="hex-display-pill">{bleState.currentColor.hex}</span>
            </div>

            {/* 快速預設色 */}
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {[
                { label: '熄滅', hex: '#000000' },
                { label: '純白', hex: '#FFFFFF' },
                { label: '招牌紅', hex: '#FF0033' },
                { label: '青空藍', hex: '#00E5FF' },
                { label: '耀眼金', hex: '#FFD700' }
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => handleQuickColor(c.hex)}
                  style={{
                    background: c.hex === '#000000' ? '#1e293b' : c.hex,
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: c.hex === '#FFFFFF' || c.hex === '#FFD700' ? '#000' : '#fff',
                    borderRadius: '6px',
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="sync-toggle-box">
              <label className="toggle-switch-label">
                <input
                  type="checkbox"
                  checked={bleState.concertSyncEnabled}
                  onChange={(e) => lightstick.setConcertSync(e.target.checked)}
                />
                <Radio size={15} color="#ff0033" />
                <span>演唱會/歌曲自動連動</span>
              </label>
            </div>
          </div>

          {/* 演唱會主題曲風格預覽測試 */}
          <div>
            <div className="section-title">
              <span>經典曲目即時燈效預覽測試 (STAGE THEMES)</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.keys(BM_SONG_THEMES).map((title) => {
                const theme = BM_SONG_THEMES[title];
                return (
                  <button
                    key={title}
                    onClick={() => handleTriggerSong(title)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${theme.color}55`,
                      color: '#f1f5f9',
                      padding: '0.4rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = theme.color;
                      e.currentTarget.style.background = `${theme.color}22`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${theme.color}55`;
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: theme.color,
                        boxShadow: `0 0 6px ${theme.color}`
                      }}
                    />
                    <span>{title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 藍牙特徵值深度掃描與除錯抽屜 */}
          <div className="diagnostic-drawer">
            <div
              className="diagnostic-header"
              onClick={() => setShowDiagnostics(!showDiagnostics)}
            >
              <span>
                <RotateCw size={14} />
                藍牙連線記錄與 GATT 深度除錯 (GATT Debug)
              </span>
              {showDiagnostics ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>

            {showDiagnostics && (
              <div className="diagnostic-content">
                <div className="diagnostic-actions">
                  <button
                    className="btn-scan-gatt"
                    onClick={handleScanGatt}
                    disabled={!bleState.isConnected}
                  >
                    執行 GATT 特徵值深度掃描
                  </button>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', alignSelf: 'center' }}>
                    可掃描手燈內部所有服務與可寫特徵值
                  </span>
                </div>

                <div className="diagnostic-logs-box">
                  {bleState.logs.length === 0 ? (
                    <div className="log-entry">尚未有任何連線日誌...</div>
                  ) : (
                    bleState.logs.map((entry, idx) => (
                      <div key={idx} className={`log-entry ${entry.type || 'info'}`}>
                        <span className="log-time">[{entry.time}]</span>
                        <span>{entry.msg}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
