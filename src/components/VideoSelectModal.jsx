import React, { useState, useEffect, useMemo } from 'react';
import { X, Search, Play, Check, Music, Film, Sparkles } from 'lucide-react';
import { KPOP_SONG_PRESETS } from '../utils/kpopSongs';

export default function VideoSelectModal({
  isOpen,
  onClose,
  onSelectSong,
  selectedSongIdx = 0,
  activeVideoId = null,
  presets = KPOP_SONG_PRESETS
}) {
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

  // Reset search query whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Filter songs based on search query
  const filteredPresets = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return presets.map((preset, index) => ({ preset, index }));

    return presets
      .map((preset, index) => ({ preset, index }))
      .filter(({ preset }) => {
        const titleMatch = preset.title?.toLowerCase().includes(q);
        const artistMatch = preset.artist?.toLowerCase().includes(q);
        const idMatch = preset.id?.toLowerCase().includes(q);
        return titleMatch || artistMatch || idMatch;
      });
  }, [presets, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content glassmorphism video-select-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title">
            <Film className="accent-icon" size={24} />
            <div>
              <h3>Select K-Pop Music Video</h3>
              <span className="modal-subtitle">
                Choose a music video to learn Korean lyrics with synchronized subtitles
              </span>
            </div>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            aria-label="Close video selection modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="video-search-bar-container">
          <div className="video-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="video-search-input"
              placeholder="Search by song title, artist (e.g. BABYMONSTER, ILLIT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <div className="video-count-tag">
            <Music size={13} />
            <span>{filteredPresets.length} {filteredPresets.length === 1 ? 'Video' : 'Videos'}</span>
          </div>
        </div>

        {/* Video Grid List */}
        <div className="video-cards-grid-container">
          {filteredPresets.length === 0 ? (
            <div className="video-empty-state">
              <Sparkles size={40} className="empty-sparkle" />
              <h4>No matching songs found</h4>
              <p>Try searching for a different title or artist name.</p>
              <button
                type="button"
                className="card-nav-btn reset-btn"
                onClick={() => setSearchQuery('')}
              >
                Show All Videos
              </button>
            </div>
          ) : (
            <div className="video-cards-grid">
              {filteredPresets.map(({ preset, index }) => {
                const isSelected =
                  activeVideoId ? preset.id === activeVideoId : selectedSongIdx === index;
                const thumbUrl =
                  preset.thumbnail || `https://img.youtube.com/vi/${preset.id}/hqdefault.jpg`;

                return (
                  <div
                    key={preset.id || index}
                    className={`video-card-item glassmorphism ${isSelected ? 'is-active' : ''}`}
                    onClick={() => {
                      onSelectSong(preset, index);
                      onClose();
                    }}
                  >
                    {/* Thumbnail with overlay */}
                    <div className="video-card-thumb-wrapper">
                      <img
                        src={thumbUrl}
                        alt={`${preset.title} thumbnail`}
                        className="video-card-thumbnail"
                        loading="lazy"
                      />
                      <div className="video-thumb-overlay">
                        <div className="play-circle-icon">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                      {preset.srtPath && (
                        <span className="video-badge-srt">
                          <span className="dot" /> Synced SRT
                        </span>
                      )}
                    </div>

                    {/* Content info */}
                    <div className="video-card-details">
                      <div className="video-card-header-row">
                        <h4 className="video-card-title">{preset.title}</h4>
                        {isSelected && (
                          <span className="video-active-chip">
                            <Check size={12} /> Active
                          </span>
                        )}
                      </div>
                      <p className="video-card-artist">{preset.artist}</p>

                      <div className="video-card-footer">
                        <span className="video-action-hint">
                          {isSelected ? 'Currently Selected' : 'Click to Load & Play'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-actions">
          <button type="button" className="card-nav-btn reset-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
