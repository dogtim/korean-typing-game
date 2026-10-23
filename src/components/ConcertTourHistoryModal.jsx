import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  X,
  Search,
  Calendar,
  MapPin,
  Flame,
  Sparkles,
  Clock,
  ChevronUp,
  Ticket,
  Filter,
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { CONCERT_TOUR_HISTORY, TOUR_CATEGORIES } from '../data/concertTourHistoryData';
import './ConcertTourHistoryModal.css';

export default function ConcertTourHistoryModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef(null);

  // ESC key listener to close modal
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

  // Prevent background body scroll when modal is open
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

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CONCERT_TOUR_HISTORY.filter(item => {
      const matchCategory = selectedCategory === 'all' || item.tourId === selectedCategory;
      if (!matchCategory) return false;
      if (!q) return true;

      return (
        item.city.toLowerCase().includes(q) ||
        item.venue.toLowerCase().includes(q) ||
        item.tourName.toLowerCase().includes(q) ||
        item.date.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  // Calculate live stats
  const totalFilteredShows = useMemo(() => {
    return filteredItems.reduce((acc, curr) => acc + (curr.shows || 1), 0);
  }, [filteredItems]);

  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="tour-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="tour-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Glow Accent */}
        <div className="tour-modal-glow"></div>

        {/* Modal Header */}
        <header className="tour-modal-header">
          <div className="tour-modal-header-info">
            <div className="tour-modal-badge">
              <Sparkles size={13} color="#f43f5e" />
              <span>LIVE TOUR ARCHIVE • 全球巡演全紀錄</span>
            </div>
            <h2 className="tour-modal-title">
              BABYMONSTER 演唱會巡迴清單
            </h2>
            <p className="tour-modal-desc">
              收錄 43 個城市站點、共 71 場演出紀錄 • 時間軸由最新到最舊（從 2026 年底排定場次至 2025 首度世巡啟航）
            </p>
          </div>

          <button
            type="button"
            className="tour-modal-close-btn"
            onClick={onClose}
            title="關閉 (Esc)"
          >
            <X size={20} />
          </button>
        </header>

        {/* Search & Category Filter Controls */}
        <section className="tour-controls-bar">
          {/* Search Input */}
          <div className="tour-search-box">
            <Search size={16} className="tour-search-icon" />
            <input
              type="text"
              className="tour-search-input"
              placeholder="搜尋城市、國家、場館名稱（例：台北、日本、Arena）..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="tour-search-clear"
                onClick={() => setSearchQuery('')}
                title="清除"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="tour-filter-pills-row">
            {TOUR_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`tour-filter-pill ${isActive ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    '--cat-accent': cat.color || '#f43f5e'
                  }}
                >
                  <span className="pill-dot"></span>
                  <span className="pill-label">{cat.label}</span>
                  <span className="pill-count">{cat.totalShows} 場</span>
                </button>
              );
            })}
          </div>

          {/* Quick Stats Summary Bar */}
          <div className="tour-stats-summary-bar">
            <div className="tour-stat-item">
              <Globe2 size={14} />
              <span>篩選結果：<strong>{filteredItems.length}</strong> 個站點</span>
            </div>
            <div className="tour-stat-item">
              <Flame size={14} color="#f97316" />
              <span>累積演出：<strong>{totalFilteredShows}</strong> 場次</span>
            </div>
            <div className="tour-stat-item timeline-direction-tag">
              <Clock size={13} />
              <span>排序：最新 ➔ 最舊</span>
            </div>
          </div>
        </section>

        {/* Scrollable Timeline Container (從上往下滾動介面) */}
        <div className="tour-timeline-scrollable" ref={scrollContainerRef}>
          {filteredItems.length === 0 ? (
            <div className="tour-empty-state">
              <Filter size={36} color="var(--text-dim)" />
              <div className="tour-empty-title">查無符合條件的演唱會站點</div>
              <p className="tour-empty-desc">
                找不到關鍵字「{searchQuery}」，請嘗試搜尋其他城市或切換巡演類別。
              </p>
              <button
                type="button"
                className="tour-empty-reset-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                重設所有篩選
              </button>
            </div>
          ) : (
            <div className="tour-timeline-stem">
              {filteredItems.map((item, index) => {
                const prevItem = filteredItems[index - 1];
                const showYearHeader = !prevItem || prevItem.year !== item.year;
                const isUpcoming = item.status === 'upcoming';

                return (
                  <React.Fragment key={item.id}>
                    {/* Year Divider Marker */}
                    {showYearHeader && (
                      <div className="tour-year-marker">
                        <div className="year-marker-badge">
                          <Calendar size={13} />
                          <span>{item.year} 年巡迴時程</span>
                        </div>
                        <div className="year-marker-line"></div>
                      </div>
                    )}

                    {/* Timeline Stop Card */}
                    <article
                      className={`tour-stop-card ${isUpcoming ? 'is-upcoming-card' : ''}`}
                      style={{
                        '--tour-theme': item.tourColor
                      }}
                    >
                      {/* Timeline Node & Glowing Dot */}
                      <div className="stop-timeline-node">
                        <div className="timeline-node-dot">
                          {isUpcoming ? (
                            <span className="upcoming-pulse-ring"></span>
                          ) : null}
                        </div>
                      </div>

                      {/* Card Content Box */}
                      <div className="stop-card-content">
                        {/* Top Meta Row */}
                        <div className="stop-top-meta-row">
                          <div className="stop-tour-badge">
                            {item.tourBadge}
                          </div>

                          <div className="stop-status-pill">
                            {isUpcoming ? (
                              <>
                                <span className="status-live-dot"></span>
                                <span>即將開演</span>
                              </>
                            ) : (
                              <>
                                <CheckCircle2 size={12} color="#10b981" />
                                <span>已圓滿舉行</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* City, Flag & Date Row */}
                        <div className="stop-main-info-row">
                          <div className="stop-city-group">
                            <span className="stop-flag">{item.flag}</span>
                            <h3 className="stop-city-name">{item.city}</h3>
                          </div>

                          <div className="stop-date-badge">
                            <Calendar size={13} />
                            <span>{item.date}</span>
                          </div>
                        </div>

                        {/* Venue & Shows Count Row */}
                        <div className="stop-venue-row">
                          <div className="stop-venue-name" title={item.venue}>
                            <MapPin size={14} className="venue-pin-icon" />
                            <span>{item.venue}</span>
                          </div>

                          <div className="stop-shows-count-badge">
                            <Ticket size={13} />
                            <span>{item.shows} 場次</span>
                          </div>
                        </div>

                        {/* Sub Tour Official Name */}
                        <div className="stop-official-tour-name">
                          {item.tourName}
                        </div>
                      </div>
                    </article>
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <footer className="tour-modal-footer">
          <div className="footer-left-info">
            <span>✨ 提示：可於多視角演唱會牆隨時切換觀看已收錄場次之現場長片與 10 機位直拍。</span>
          </div>

          <div className="footer-right-actions">
            <button
              type="button"
              className="tour-scroll-top-btn"
              onClick={handleScrollToTop}
              title="回到最上方"
            >
              <ChevronUp size={15} />
              <span>回到最頂</span>
            </button>
            <button
              type="button"
              className="tour-footer-close-btn"
              onClick={onClose}
            >
              關閉清單
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
