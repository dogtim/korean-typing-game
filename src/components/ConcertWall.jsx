import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  Maximize2,
  Tv,
  Layers,
  LayoutGrid,
  Radio,
  Sliders,
  Plus,
  RefreshCw,
  ExternalLink,
  Flame,
  Columns2,
  Eye,
  EyeOff
} from 'lucide-react';
import { CONCERT_PRESETS } from '../data/concertsData';
import './ConcertWall.css';

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return '';
  const str = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str;
  }
  const match = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : '';
}

export default function ConcertWall() {
  // Active concert selection
  const [selectedConcertIndex, setSelectedConcertIndex] = useState(0);
  const activeConcert = CONCERT_PRESETS[selectedConcertIndex] || CONCERT_PRESETS[0];

  // Selected song state for angles library
  const [selectedSongId, setSelectedSongId] = useState('sheesh');

  // Active slots (default 3 cameras)
  const [slots, setSlots] = useState(() => activeConcert.defaultSlots.map(s => ({ ...s })));

  // When active concert changes, update slots and reuse existing players via loadVideoById
  useEffect(() => {
    setActiveFocusIndex(0);
    setActiveAudioIndex(0);

    const firstSong = activeConcert.setlist?.mainSet?.[0];
    const initialSlots = (firstSong && firstSong.slots && firstSong.slots.length > 0)
      ? firstSong.slots.map(s => ({ ...s }))
      : activeConcert.defaultSlots.map(s => ({ ...s }));

    setSlots(initialSlots);

    if (firstSong) {
      setSelectedSongId(firstSong.id);
    }

    initialSlots.forEach((slot, idx) => {
      const p = playersRef.current[idx];
      if (p && typeof p.loadVideoById === 'function') {
        try {
          p.loadVideoById(slot.videoId);
          if (idx === 0) {
            p.unMute();
            p.setVolume(100);
          } else {
            p.mute();
          }
        } catch (_e) {
          initPlayer(idx, slot.videoId);
        }
      } else {
        initPlayer(idx, slot.videoId);
      }
    });
  }, [selectedConcertIndex]);

  // Layout mode: 'tri-split' | 'cinema' | 'single'
  const [layoutMode, setLayoutMode] = useState('cinema');

  // Currently focused camera (0, 1, 2)
  const [activeFocusIndex, setActiveFocusIndex] = useState(0);

  // Active audible camera index (0, 1, 2) or -1 for all muted
  const [activeAudioIndex, setActiveAudioIndex] = useState(0);

  // Master playback state
  const [isMasterPlaying, setIsMasterPlaying] = useState(false);

  // Custom URL Modal state
  const [customModalSlot, setCustomModalSlot] = useState(null); // slotIndex or null
  const [customInputUrl, setCustomInputUrl] = useState('');
  const [customInputTitle, setCustomInputTitle] = useState('');

  // YouTube Player instances ref
  const playersRef = useRef([null, null, null]);
  const isApiReadyRef = useRef(false);

  // Initialize a single player by index
  const initPlayer = useCallback((index, videoId) => {
    if (!window.YT || !window.YT.Player) return;

    const elementId = `concert-yt-player-${index}`;
    const domEl = document.getElementById(elementId);
    if (!domEl) return;

    // Destroy existing player if any
    if (playersRef.current[index] && playersRef.current[index].destroy) {
      try {
        playersRef.current[index].destroy();
      } catch (_e) {}
    }

    try {
      playersRef.current[index] = new window.YT.Player(elementId, {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : '',
          widget_referrer: typeof window !== 'undefined' ? window.location.href : ''
        },
        events: {
          onReady: (event) => {
            // Unmute only if activeAudioIndex matches this slot
            if (index === activeAudioIndex) {
              event.target.unMute();
              event.target.setVolume(100);
            } else {
              event.target.mute();
            }
          },
          onError: (err) => {
            console.warn(`Concert Player ${index} Error:`, err.data);
          }
        }
      });
    } catch (err) {
      console.error(`Failed to init player ${index}:`, err);
    }
  }, [activeAudioIndex]);

  // Load YouTube IFrame API script once
  useEffect(() => {
    const handleApiReady = () => {
      isApiReadyRef.current = true;
      slots.forEach((slot, idx) => {
        initPlayer(idx, slot.videoId);
      });
    };

    if (!window.YT) {
      window.onYouTubeIframeAPIReady = handleApiReady;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    } else {
      isApiReadyRef.current = true;
      slots.forEach((slot, idx) => {
        initPlayer(idx, slot.videoId);
      });
    }

    return () => {
      playersRef.current.forEach(p => {
        if (p && p.destroy) {
          try { p.destroy(); } catch (_e) {}
        }
      });
    };
  }, [activeConcert.id]);

  // Update slot video without destroying the player iframe if loadVideoById is available
  const updateSlotVideo = useCallback((slotIndex, newVideoId, newTitle, newTag) => {
    setSlots(prev => {
      const copy = [...prev];
      copy[slotIndex] = {
        ...copy[slotIndex],
        videoId: newVideoId,
        title: newTitle || copy[slotIndex].title,
        tag: newTag || copy[slotIndex].tag,
        offset: 0
      };
      return copy;
    });

    const player = playersRef.current[slotIndex];
    if (player && typeof player.loadVideoById === 'function') {
      try {
        player.loadVideoById(newVideoId);
        if (slotIndex !== activeAudioIndex) {
          player.mute();
        } else {
          player.unMute();
          player.setVolume(100);
        }
        return;
      } catch (_e) {}
    }

    setTimeout(() => {
      initPlayer(slotIndex, newVideoId);
    }, 100);
  }, [initPlayer, activeAudioIndex]);



  // Handle Audio Solo Switch
  const handleSelectAudio = useCallback((targetIndex) => {
    setActiveAudioIndex(targetIndex);
    playersRef.current.forEach((player, idx) => {
      if (player && player.mute && player.unMute) {
        if (idx === targetIndex) {
          player.unMute();
          player.setVolume(100);
        } else {
          player.mute();
        }
      }
    });
  }, []);

  // Handle Layout Switch: 'tri-split' | 'dual-split' | 'cinema' | 'single'
  const handleSetLayoutMode = useCallback((mode) => {
    setLayoutMode(mode);
    if (mode === 'dual-split') {
      if (activeAudioIndex === 2) {
        handleSelectAudio(0);
      }
      if (activeFocusIndex === 2) {
        setActiveFocusIndex(0);
      }
    }
  }, [activeAudioIndex, activeFocusIndex, handleSelectAudio]);

  // Handle Master Play / Pause All
  const handleMasterTogglePlay = useCallback(() => {
    const nextPlaying = !isMasterPlaying;
    setIsMasterPlaying(nextPlaying);

    playersRef.current.forEach(player => {
      if (player && player.playVideo && player.pauseVideo) {
        if (nextPlaying) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      }
    });
  }, [isMasterPlaying]);

  // Master Time Alignment (Sync all to activeFocusIndex's timestamp)
  const handleSyncAllTimestamps = useCallback(() => {
    const masterPlayer = playersRef.current[activeFocusIndex];
    if (!masterPlayer || typeof masterPlayer.getCurrentTime !== 'function') return;

    try {
      const masterCurrentTime = masterPlayer.getCurrentTime() || 0;
      const masterOffset = slots[activeFocusIndex]?.offset || 0;

      playersRef.current.forEach((player, idx) => {
        if (idx !== activeFocusIndex && player && typeof player.seekTo === 'function') {
          const slotOffset = slots[idx]?.offset || 0;
          const targetTime = Math.max(0, masterCurrentTime + (slotOffset - masterOffset));
          player.seekTo(targetTime, true);
        }
      });
    } catch (e) {
      console.warn('Sync error:', e);
    }
  }, [activeFocusIndex, slots]);

  // Individual Slot Micro-Offset Nudge
  const handleNudgeOffset = useCallback((slotIndex, deltaSeconds) => {
    setSlots(prev => {
      const copy = [...prev];
      const newOffset = Math.round((copy[slotIndex].offset + deltaSeconds) * 10) / 10;
      copy[slotIndex] = {
        ...copy[slotIndex],
        offset: newOffset
      };
      return copy;
    });

    const targetPlayer = playersRef.current[slotIndex];
    if (targetPlayer && typeof targetPlayer.getCurrentTime === 'function' && typeof targetPlayer.seekTo === 'function') {
      try {
        const cur = targetPlayer.getCurrentTime();
        targetPlayer.seekTo(Math.max(0, cur + deltaSeconds), true);
      } catch (_e) {}
    }
  }, []);

  // Reset offset for a slot
  const handleResetOffset = useCallback((slotIndex) => {
    setSlots(prev => {
      const copy = [...prev];
      copy[slotIndex] = { ...copy[slotIndex], offset: 0 };
      return copy;
    });
  }, []);

  // Quick swap from bottom angle gallery into a camera slot
  const handleApplyAngleToSlot = useCallback((angleItem, targetSlotIndex) => {
    updateSlotVideo(targetSlotIndex, angleItem.videoId, angleItem.title, angleItem.tag);
  }, [updateSlotVideo]);

  // Submit custom YouTube URL modal
  const handleSaveCustomSlot = () => {
    if (customModalSlot === null) return;
    const vId = extractYouTubeId(customInputUrl);
    if (!vId) {
      alert('請輸入有效的 YouTube 影片網址或 11 碼 Video ID');
      return;
    }
    updateSlotVideo(
      customModalSlot,
      vId,
      customInputTitle || `自訂視角 (${vId})`,
      '自訂視角'
    );
    setCustomModalSlot(null);
    setCustomInputUrl('');
    setCustomInputTitle('');
  };

  // Render a player card given slot and index
  const renderPlayerCard = (slot, index) => {
    const isAudible = activeAudioIndex === index;
    const isFocused = activeFocusIndex === index;

    return (
      <div
        key={`slot-card-stable-${index}`}
        className={`video-slot-card slot-index-${index} ${isAudible ? 'is-active-audio' : ''} ${isFocused ? 'is-active-focus' : ''}`}
        onClick={() => {
          // Clicking any card brings it into focus & sets its audio
          setActiveFocusIndex(index);
        }}
      >
        {/* Top Header of Card */}
        <div className="slot-card-header">
          <div className="slot-header-left">
            <span className="slot-cam-badge">{slot.name || `CAM ${index + 1}`}</span>
            <span className="slot-tag-badge">{slot.tag}</span>
            <span className="slot-header-title" title={slot.title}>
              {slot.title}
            </span>
          </div>

          <div className="slot-header-right">
            {/* Audio Toggle Pill */}
            <button
              type="button"
              className={`slot-audio-toggle-btn ${isAudible ? 'is-live' : 'is-muted'}`}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectAudio(index);
              }}
              title={isAudible ? '現正監聽此視角聲音' : '點擊切換監聽此視角'}
            >
              {isAudible ? (
                <>
                  <div className="audio-equalizer-bars">
                    <span className="eq-bar"></span>
                    <span className="eq-bar"></span>
                    <span className="eq-bar"></span>
                  </div>
                  <span>LIVE 音訊</span>
                </>
              ) : (
                <>
                  <VolumeX size={13} />
                  <span>靜音中</span>
                </>
              )}
            </button>

            {/* Custom URL edit button */}
            <button
              type="button"
              className="slot-icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                setCustomModalSlot(index);
                setCustomInputUrl(`https://www.youtube.com/watch?v=${slot.videoId}`);
                setCustomInputTitle(slot.title);
              }}
              title="自訂換入其他 YouTube 視角"
            >
              <Plus size={13} />
            </button>
            {/* If CAM 3, button to turn off CAM 3 and switch to dual-split */}
            {index === 2 && (
              <button
                type="button"
                className="slot-close-cam-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSetLayoutMode('dual-split');
                }}
                title="關閉 CAM 3，讓 CAM 1 & CAM 2 畫面放大 (雙畫面模式)"
              >
                <EyeOff size={13} />
                <span>關閉 CAM 3</span>
              </button>
            )}
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="player-aspect-wrapper">
          <div id={`concert-yt-player-${index}`} className="yt-iframe-embed"></div>
        </div>

        {/* Card Footer: Micro-Offset & Angle Switcher */}
        <div className="slot-card-footer" onClick={(e) => e.stopPropagation()}>
          <div className="slot-offset-controls">
            <span className="offset-pill-label">微調對齊:</span>
            <button
              type="button"
              className="offset-nudge-btn"
              onClick={() => handleNudgeOffset(index, -1)}
              title="後退 1 秒"
            >
              -1s
            </button>
            <button
              type="button"
              className="offset-nudge-btn"
              onClick={() => handleNudgeOffset(index, -0.2)}
              title="後退 0.2 秒"
            >
              -0.2s
            </button>
            <span className="offset-value-badge">
              {slot.offset >= 0 ? `+${slot.offset.toFixed(1)}s` : `${slot.offset.toFixed(1)}s`}
            </span>
            <button
              type="button"
              className="offset-nudge-btn"
              onClick={() => handleNudgeOffset(index, 0.2)}
              title="前進 0.2 秒"
            >
              +0.2s
            </button>
            <button
              type="button"
              className="offset-nudge-btn"
              onClick={() => handleNudgeOffset(index, 1)}
              title="前進 1 秒"
            >
              +1s
            </button>
            {slot.offset !== 0 && (
              <button
                type="button"
                className="offset-nudge-btn"
                onClick={() => handleResetOffset(index)}
                title="歸零"
              >
                0s
              </button>
            )}
          </div>

          <div className="slot-footer-actions">
            <button
              type="button"
              className="slot-angle-switch-trigger"
              onClick={() => {
                setActiveFocusIndex(index);
                handleSelectAudio(index);
              }}
            >
              <Maximize2 size={12} />
              <span>設為焦點</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  const allSetlistSongs = activeConcert.setlist ? [
    ...(activeConcert.setlist.mainSet || []),
    ...(activeConcert.setlist.soloStages || []),
    ...(activeConcert.setlist.encore || [])
  ] : [];

  const activePlayingSong = allSetlistSongs.find(s => s.id === selectedSongId) || allSetlistSongs[0];

  const currentAvailableAngles = (activePlayingSong && activePlayingSong.availableAngles && activePlayingSong.availableAngles.length > 0)
    ? activePlayingSong.availableAngles
    : (activeConcert.availableAngles || []);

  return (
    <div className="concert-wall-container">
      {/* Prominent Concert Switcher Cards (頂部演唱會場次切換卡片) */}
      <section className="concert-top-switcher-panel">
        <div className="switcher-title-row">
          <div className="switcher-title-badge">
            <Radio size={14} color="#f43f5e" />
            <span>選擇演唱會現場 (SELECT LIVE CONCERT)</span>
          </div>
          <span className="switcher-count-badge">已收錄 {CONCERT_PRESETS.length} 場大型演唱會</span>
        </div>

        <div className="concert-switcher-cards-grid">
          {CONCERT_PRESETS.map((concert, idx) => {
            const isActive = selectedConcertIndex === idx;
            return (
              <button
                key={concert.id}
                type="button"
                className={`concert-card-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setSelectedConcertIndex(idx)}
                style={{
                  '--accent-color': concert.themeColor || '#e11d48'
                }}
              >
                <div className="card-btn-header">
                  <span
                    className="card-category-tag"
                    style={{
                      borderColor: `${concert.themeColor || '#fb7185'}66`,
                      color: concert.themeColor || '#fb7185'
                    }}
                  >
                    {concert.categoryTag || '經典演繹'}
                  </span>
                  {isActive ? (
                    <span className="card-playing-badge">
                      <span className="pulse-dot"></span> 播放中
                    </span>
                  ) : (
                    <span className="card-switch-label">點擊切換</span>
                  )}
                </div>

                <div className="card-btn-title">{concert.title}</div>
                <div className="card-btn-subtitle">{concert.subTitle}</div>

                <div className="card-btn-meta">
                  <span>{concert.venue}</span>
                  <span>•</span>
                  <span>{concert.date}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Concert Info & Hero Banner */}
      <section className="concert-header-card">
        <div className="concert-header-glow"></div>
        <div className="concert-header-content">
          <div className="concert-header-top-row">
            <div className="concert-live-badge">
              <span className="live-pulse-dot"></span>
              <span>LIVE CONCERT 3-CAM WALL</span>
            </div>
            <div className="concert-venue-pill">
              <Radio size={13} color="#f43f5e" />
              <span>{activeConcert.venue}</span>
              <span>•</span>
              <span>{activeConcert.date}</span>
              <span>•</span>
              <span style={{ color: '#fb7185', fontWeight: 600 }}>{activeConcert.attendance}</span>
            </div>
          </div>

          <div className="concert-title-area">
            <h2 className="concert-main-title">{activeConcert.title}</h2>
            <div className="concert-subtitle">{activeConcert.subTitle}</div>
            <p className="concert-desc-text">{activeConcert.description}</p>
          </div>
        </div>
      </section>

      {/* Master Director Console (導播同步控制台) */}
      <section className="director-console-bar">
        {/* Left: Master Play/Pause & Sync */}
        <div className="director-left-controls">
          <button
            type="button"
            className="master-play-btn"
            onClick={handleMasterTogglePlay}
            title="一鍵同步播放或暫停所有視角"
          >
            {isMasterPlaying ? <Pause size={16} /> : <Play size={16} />}
            <span>{isMasterPlaying ? '同步暫停 All' : '一鍵全播 All'}</span>
          </button>

          <button
            type="button"
            className="console-btn-secondary"
            onClick={handleSyncAllTimestamps}
            title="將其他視角的時間校準對齊至主焦點畫面"
          >
            <RefreshCw size={14} />
            <span>對齊主畫面時間</span>
          </button>
        </div>

        {/* Center: Audio Solo Channel Selector */}
        <div className="director-center-controls">
          <div className="audio-selector-tray">
            <span className="audio-tray-title">監聽聲道:</span>
            {slots.map((s, idx) => (
              <button
                key={`audio-chip-${idx}`}
                type="button"
                className={`audio-chip-btn ${activeAudioIndex === idx ? 'active' : ''}`}
                onClick={() => handleSelectAudio(idx)}
              >
                {activeAudioIndex === idx ? <Volume2 size={13} /> : <VolumeX size={13} />}
                <span>{s.name || `CAM ${idx + 1}`}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Layout Switcher */}
        <div className="director-right-controls">
          <div className="layout-switch-group">
            <button
              type="button"
              className={`layout-btn ${layoutMode === 'tri-split' ? 'active' : ''}`}
              onClick={() => handleSetLayoutMode('tri-split')}
              title="三畫面等寬並排 (Tri-Split)"
            >
              <LayoutGrid size={14} />
              <span>三分割</span>
            </button>
            <button
              type="button"
              className={`layout-btn ${layoutMode === 'dual-split' ? 'active' : ''}`}
              onClick={() => handleSetLayoutMode('dual-split')}
              title="雙畫面模式：關閉 CAM 3，讓 CAM 1 與 CAM 2 超大畫面並排放大"
            >
              <Columns2 size={14} />
              <span>雙畫面 (關 CAM 3)</span>
            </button>
            <button
              type="button"
              className={`layout-btn ${layoutMode === 'cinema' ? 'active' : ''}`}
              onClick={() => handleSetLayoutMode('cinema')}
              title="電影導演模式：主畫面大螢幕 + 側邊 2 畫面"
            >
              <Layers size={14} />
              <span>電影焦點</span>
            </button>
            <button
              type="button"
              className={`layout-btn ${layoutMode === 'single' ? 'active' : ''}`}
              onClick={() => handleSetLayoutMode('single')}
              title="單一全景模式"
            >
              <Tv size={14} />
              <span>單畫面</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Video Wall Stage - All 3 slots permanently mounted in DOM */}
      <section className={`video-wall-stage mode-${layoutMode} focus-idx-${activeFocusIndex}`}>
        {slots.map((slot, idx) => renderPlayerCard(slot, idx))}
      </section>

      {/* In Dual-Split mode, show notice with quick button to reopen CAM 3 */}
      {layoutMode === 'dual-split' && (
        <div className="dual-mode-nav-bar">
          <div className="dual-nav-info">
            <EyeOff size={14} color="#38bdf8" />
            <span>已開啟<strong>雙畫面放大模式</strong>（CAM 3 已關閉，CAM 1 與 CAM 2 享有最大可視面積）</span>
          </div>
          <button
            type="button"
            className="dual-reopen-cam-btn"
            onClick={() => handleSetLayoutMode('tri-split')}
            title="重新開啟 CAM 3 還原三分割"
          >
            <Eye size={13} />
            <span>開啟 CAM 3 (還原三分割)</span>
          </button>
        </div>
      )}

      {/* In Single mode, show quick camera switcher tabs below */}
      {layoutMode === 'single' && (
        <div className="single-mode-nav-bar">
          <span className="single-nav-label">切換鏡頭視角:</span>
          {slots.map((slot, idx) => (
            <button
              key={`single-cam-btn-${idx}`}
              type="button"
              className={`single-cam-btn ${activeFocusIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveFocusIndex(idx);
                handleSelectAudio(idx);
              }}
            >
              <span>{slot.name || `CAM ${idx + 1}`}</span>
              <span className="single-cam-btn-tag">{slot.tag}</span>
            </button>
          ))}
        </div>
      )}

      {/* Available Angles Gallery (視角庫選單) */}
      {currentAvailableAngles && currentAvailableAngles.length > 0 && (
        <section className="angles-gallery-card">
          <div className="angles-gallery-header">
            <div className="angles-gallery-title">
              <Flame size={18} color="#e11d48" />
              <span>
                《{activePlayingSong?.title || activeConcert.subTitle.split('(')[0]}》視角庫 (點擊替換至 CAM 1 / 2 / 3)
              </span>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
              共有 {currentAvailableAngles.length} 個精彩角度
            </span>
          </div>

          <div className="angles-gallery-grid">
            {currentAvailableAngles.map((angle) => (
              <div key={angle.id} className="angle-item-card">
                <div className="angle-item-thumb-row">
                  <img
                    src={`https://img.youtube.com/vi/${angle.videoId}/hqdefault.jpg`}
                    alt={angle.title}
                    loading="lazy"
                  />
                  <span className="angle-item-tag">{angle.tag}</span>
                </div>

                <div className="angle-item-info">
                  <div className="angle-item-title" title={angle.title}>
                    {angle.title}
                  </div>
                  <div className="angle-item-author">上傳者: {angle.author}</div>
                </div>

                <div className="angle-swap-actions">
                  <button
                    type="button"
                    className="swap-to-cam-btn"
                    onClick={() => handleApplyAngleToSlot(angle, 0)}
                    title={`替換至 CAM 1: ${angle.title}`}
                  >
                    替換 CAM 1
                  </button>
                  <button
                    type="button"
                    className="swap-to-cam-btn"
                    onClick={() => handleApplyAngleToSlot(angle, 1)}
                    title={`替換至 CAM 2: ${angle.title}`}
                  >
                    替換 CAM 2
                  </button>
                  <button
                    type="button"
                    className="swap-to-cam-btn"
                    onClick={() => handleApplyAngleToSlot(angle, 2)}
                    title={`替換至 CAM 3: ${angle.title}`}
                  >
                    替換 CAM 3
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom YouTube URL Modal */}
      {customModalSlot !== null && (
        <div className="modal-overlay" onClick={() => setCustomModalSlot(null)}>
          <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">
              自訂替換 CAM {customModalSlot + 1} 視角影片
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              貼上任何 YouTube 影片網址或 11 碼 Video ID，即可放入多視角播放牆進行同步觀賞。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                YouTube 網址或 ID:
              </label>
              <input
                type="text"
                className="modal-input-field"
                placeholder="例如: https://www.youtube.com/watch?v=..."
                value={customInputUrl}
                onChange={(e) => setCustomInputUrl(e.target.value)}
                autoFocus
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                自訂視角名稱 (選填):
              </label>
              <input
                type="text"
                className="modal-input-field"
                placeholder="例如: 大阪巨蛋搖滾區近拍"
                value={customInputTitle}
                onChange={(e) => setCustomInputTitle(e.target.value)}
              />
            </div>

            <div className="modal-actions-row">
              <button
                type="button"
                className="console-btn-secondary"
                onClick={() => setCustomModalSlot(null)}
              >
                取消
              </button>
              <button
                type="button"
                className="master-play-btn"
                onClick={handleSaveCustomSlot}
              >
                確定替換
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
