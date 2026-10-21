import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Search,
  Radio,
  Sparkles,
  Crown,
  Heart,
  Flame,
  Check,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';
import { CONCERT_PRESETS } from '../data/concertsData';

export default function ConcertSelectModal({
  isOpen,
  onClose,
  selectedConcertIndex = 0,
  onSelectConcert,
  activeConcert = null,
  slots = [],
  onAssignConcertToSlot
}) {
  const [activeTourCategory, setActiveTourCategory] = useState('all_concert');
  const [searchQuery, setSearchQuery] = useState('');

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset search when modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Tour category definitions
  const tourCategoryList = useMemo(() => [
    {
      id: 'all_concert',
      label: 'ALL Concert',
      subTitle: '跨巡迴自由搭配 (CAM 1 / 2 / 3)',
      color: '#f43f5e',
      icon: <Sparkles size={14} color="#f43f5e" />
    },
    {
      id: 'hello_monsters',
      label: 'Hello Monsters',
      subTitle: '2025 首次世界巡演 (共 32 場)',
      color: '#a855f7',
      icon: <Crown size={14} color="#a855f7" />
    },
    {
      id: 'love_monsters',
      label: 'Love Monsters',
      subTitle: '2025–2026 Fan Concert 巡迴 (共 12 場)',
      color: '#ec4899',
      icon: <Heart size={14} color="#ec4899" />
    },
    {
      id: 'choom',
      label: 'Choom',
      subTitle: '2026–2027 第二輪世界巡演',
      color: '#f97316',
      icon: <Flame size={14} color="#f97316" />
    },
    {
      id: 'others',
      label: '其他現場',
      subTitle: 'Summer Sonic 2026 音樂祭等',
      color: '#0284c7',
      icon: <Radio size={14} color="#0284c7" />
    }
  ], []);

  // Filter presets based on category and search query
  const categorizedSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    // Helper to check if concert matches search query
    const matchSearch = (preset) => {
      if (!q) return true;
      const titleMatch = preset.title?.toLowerCase().includes(q);
      const subTitleMatch = preset.subTitle?.toLowerCase().includes(q);
      const venueMatch = preset.venue?.toLowerCase().includes(q);
      const dateMatch = preset.date?.toLowerCase().includes(q);
      const categoryMatch = preset.categoryTag?.toLowerCase().includes(q);
      const descMatch = preset.description?.toLowerCase().includes(q);
      const angleMatch = preset.availableAngles?.some(
        a => a.title?.toLowerCase().includes(q) || a.author?.toLowerCase().includes(q) || a.tag?.toLowerCase().includes(q)
      );
      return titleMatch || subTitleMatch || venueMatch || dateMatch || categoryMatch || descMatch || angleMatch;
    };

    if (activeTourCategory === 'all_concert') {
      const allSections = [
        {
          id: 'all_featured_mix',
          label: '🌟 ALL Concert 自由混搭主卡片',
          subTitle: '預設 CAM 1: Hello Monsters × CAM 2: Love Monsters × CAM 3: Choom',
          color: '#f43f5e',
          icon: <Sparkles size={14} color="#f43f5e" />,
          presets: CONCERT_PRESETS.filter(p => p.tourCategory === 'all_concert' && matchSearch(p))
        },
        {
          id: 'hello_monsters',
          label: '👑 Hello Monsters 巡演場次',
          subTitle: '2025 首次世界巡演',
          color: '#a855f7',
          icon: <Crown size={14} color="#a855f7" />,
          presets: CONCERT_PRESETS.filter(p => p.tourCategory === 'hello_monsters' && matchSearch(p))
        },
        {
          id: 'love_monsters',
          label: '💖 Love Monsters 巡演場次',
          subTitle: '2025–2026 Fan Concert 巡迴',
          color: '#ec4899',
          icon: <Heart size={14} color="#ec4899" />,
          presets: CONCERT_PRESETS.filter(p => p.tourCategory === 'love_monsters' && matchSearch(p))
        },
        {
          id: 'choom',
          label: '🔥 Choom 巡演場次',
          subTitle: '2026–2027 第二輪世界巡演',
          color: '#f97316',
          icon: <Flame size={14} color="#f97316" />,
          presets: CONCERT_PRESETS.filter(p => p.tourCategory === 'choom' && matchSearch(p))
        },
        {
          id: 'others',
          label: '🎸 其他現場 (Summer Sonic 等)',
          subTitle: '音樂祭與大型現場',
          color: '#0284c7',
          icon: <Radio size={14} color="#0284c7" />,
          presets: CONCERT_PRESETS.filter(p => p.tourCategory === 'others' && matchSearch(p))
        }
      ];
      return allSections.filter(s => s.presets.length > 0);
    }

    const specificTour = tourCategoryList.find(cat => cat.id === activeTourCategory);
    if (!specificTour) return [];

    const matchedPresets = CONCERT_PRESETS.filter(
      p => p.tourCategory === specificTour.id && matchSearch(p)
    );

    return [{
      ...specificTour,
      presets: matchedPresets
    }].filter(s => s.presets.length > 0);
  }, [activeTourCategory, searchQuery, tourCategoryList]);

  // Total matching count
  const totalMatchingCount = useMemo(() => {
    return categorizedSections.reduce((acc, sec) => acc + sec.presets.length, 0);
  }, [categorizedSections]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay concert-select-modal-overlay" onClick={onClose}>
      <div
        className="modal-content glassmorphism concert-select-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title">
            <Radio className="accent-icon" size={22} color="#f43f5e" />
            <div>
              <h3>選擇演唱會現場</h3>
              <span className="modal-subtitle-text">SELECT LIVE CONCERT · 3-CAM WALL</span>
            </div>
          </div>
          <div className="modal-header-actions">
            <span className="switcher-count-badge">已收錄 {CONCERT_PRESETS.length} 場大型演唱會</span>
            <button
              type="button"
              className="close-btn"
              onClick={onClose}
              aria-label="關閉演唱會選擇視窗"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="video-search-bar-container">
          <div className="video-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="video-search-input"
              placeholder="搜尋演唱會名稱、場館、城市、巡演或曲目 (例: 大阪, 橫濱, 台北小巨蛋, DRIP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                title="清除搜尋"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <div className="video-count-tag">
            <Radio size={13} color="#f43f5e" />
            <span>{totalMatchingCount} 場演唱會</span>
          </div>
        </div>

        {/* Category Tabs: ALL Concert, Hello Monsters, Love Monsters, Choom, 其他 */}
        <div className="concert-category-tabs-bar">
          {tourCategoryList.map((cat) => {
            const count = cat.id === 'all_concert'
              ? CONCERT_PRESETS.length
              : CONCERT_PRESETS.filter(p => p.tourCategory === cat.id).length;
            const isActive = activeTourCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`concert-cat-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveTourCategory(cat.id)}
                style={{ '--cat-color': cat.color }}
              >
                {cat.icon}
                <span className="cat-tab-label">{cat.label}</span>
                <span className="cat-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* ALL Concert Mix Info Banner */}
        {activeTourCategory === 'all_concert' && !searchQuery && (
          <div className="all-concert-mix-banner">
            <div className="mix-banner-left">
              <Sparkles size={16} color="#f43f5e" className="mix-sparkle-icon" />
              <span>
                <strong>ALL Concert 自由搭配模式</strong>：下方收錄所有演唱會，可點擊各場次右下角的 <strong>[CAM 1]</strong>、<strong>[CAM 2]</strong>、<strong>[CAM 3]</strong> 自由混搭（例如 CAM 1 播放 Hello Monsters、CAM 2 播放 Love Monsters、CAM 3 播放 Choom），享受三大巡演同時競演！
              </span>
            </div>
            <div className="mix-banner-pills">
              <span className="mix-cam-pill cam1">CAM 1: {slots[0]?.tag || '機位 1'}</span>
              <span className="mix-cam-pill cam2">CAM 2: {slots[1]?.tag || '機位 2'}</span>
              <span className="mix-cam-pill cam3">CAM 3: {slots[2]?.tag || '機位 3'}</span>
            </div>
          </div>
        )}

        {/* Scrollable Container with Categorized Sections & Cards */}
        <div className="concert-modal-scroll-area">
          {categorizedSections.length === 0 ? (
            <div className="video-empty-state">
              <Sparkles size={40} className="empty-sparkle" color="#f43f5e" />
              <h4>查無符合條件的演唱會場次</h4>
              <p>請嘗試其他搜尋關鍵字（例如：橫濱、首爾、小巨蛋、BATTER UP、Choom）。</p>
              <button
                type="button"
                className="card-nav-btn reset-btn"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTourCategory('all_concert');
                }}
              >
                顯示所有演唱會場次
              </button>
            </div>
          ) : (
            categorizedSections.map((sec) => (
              <div key={sec.id} className="concert-section-group">
                <div className="concert-section-header">
                  <div className="concert-section-title-wrap">
                    {sec.icon}
                    <span className="concert-section-title">{sec.label}</span>
                    <span className="concert-section-sub">• {sec.subTitle}</span>
                  </div>
                  <span className="concert-section-count-tag">
                    {sec.presets.length} 場收錄
                  </span>
                </div>

                <div className="concert-switcher-cards-grid">
                  {sec.presets.map((concert) => {
                    const globalIdx = CONCERT_PRESETS.findIndex(p => p.id === concert.id);
                    const isActive = activeConcert?.id === concert.id || selectedConcertIndex === globalIdx;

                    return (
                      <div
                        key={concert.id}
                        role="button"
                        tabIndex={0}
                        className={`concert-card-btn ${isActive ? 'is-active' : ''}`}
                        onClick={() => {
                          if (globalIdx !== -1) {
                            onSelectConcert(globalIdx);
                            onClose();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            if (globalIdx !== -1) {
                              onSelectConcert(globalIdx);
                              onClose();
                            }
                          }
                        }}
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
                            {concert.categoryTag || sec.label}
                          </span>
                          {isActive ? (
                            <span className="card-playing-badge">
                              <span className="pulse-dot"></span> 播放中
                            </span>
                          ) : (
                            <span className="card-switch-label">點擊切換全場</span>
                          )}
                        </div>

                        <div className="card-btn-title">{concert.title}</div>
                        <div className="card-btn-subtitle">{concert.subTitle}</div>

                        <div className="card-btn-meta">
                          <span>{concert.venue}</span>
                          <span>•</span>
                          <span>{concert.date}</span>
                        </div>

                        {/* Quick Assign to CAM 1 / 2 / 3 */}
                        <div className="card-cam-assign-row" onClick={(e) => e.stopPropagation()}>
                          <span className="cam-assign-hint">自由指派機位:</span>
                          <div className="cam-assign-buttons">
                            {[0, 1, 2].map((slotIdx) => {
                              const targetVideoId = concert.defaultSlots?.[slotIdx]?.videoId || concert.defaultSlots?.[0]?.videoId;
                              const isCurrentCam = slots[slotIdx]?.videoId === targetVideoId;
                              return (
                                <button
                                  key={`assign-${concert.id}-${slotIdx}`}
                                  type="button"
                                  className={`cam-assign-btn ${isCurrentCam ? 'is-active-cam' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onAssignConcertToSlot?.(concert, slotIdx);
                                  }}
                                  title={`將《${concert.title}》指派載入至 CAM ${slotIdx + 1} 播放`}
                                >
                                  {isCurrentCam ? `✓ CAM ${slotIdx + 1}` : `CAM ${slotIdx + 1}`}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
