import React, { useState, useEffect, useMemo } from 'react';
import { X, Search, Play, Check, Music, Film, Sparkles, Disc3, Layers } from 'lucide-react';
import { KPOP_SONG_PRESETS, ALBUM_METADATA } from '../utils/kpopSongs';

export default function VideoSelectModal({
  isOpen,
  onClose,
  onSelectSong,
  selectedSongIdx = 0,
  activeVideoId = null,
  presets = KPOP_SONG_PRESETS
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlbumFilter, setSelectedAlbumFilter] = useState('ALL');

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

  // Reset search query and filter whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setSelectedAlbumFilter('ALL');
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
        const albumMatch = preset.album?.toLowerCase().includes(q);
        const idMatch = preset.id?.toLowerCase().includes(q);
        return titleMatch || artistMatch || albumMatch || idMatch;
      });
  }, [presets, searchQuery]);

  // Group presets into Album Sections
  const groupedByAlbum = useMemo(() => {
    const albumMap = new Map();

    filteredPresets.forEach(({ preset, index }) => {
      const albumKey = preset.album || 'Unkonw';
      if (!albumMap.has(albumKey)) {
        const meta = ALBUM_METADATA[albumKey] || {
          releaseDate: '',
          category: albumKey === 'Unkonw' ? 'Other Releases' : 'Single/Album',
          order: 999
        };
        albumMap.set(albumKey, {
          albumName: albumKey,
          releaseDate: meta.releaseDate,
          category: meta.category,
          order: meta.order,
          songs: []
        });
      }
      albumMap.get(albumKey).songs.push({ preset, index });
    });

    const sorted = Array.from(albumMap.values()).sort((a, b) => a.order - b.order);

    if (selectedAlbumFilter === 'ALL') {
      return sorted;
    }
    return sorted.filter((group) => group.albumName === selectedAlbumFilter);
  }, [filteredPresets, selectedAlbumFilter]);

  // Extract all available album names for filter pills
  const availableAlbums = useMemo(() => {
    const set = new Set();
    presets.forEach((p) => {
      set.add(p.album || 'Unkonw');
    });
    return Array.from(set).sort((a, b) => {
      const orderA = ALBUM_METADATA[a]?.order ?? 999;
      const orderB = ALBUM_METADATA[b]?.order ?? 999;
      return orderA - orderB;
    });
  }, [presets]);

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
                Choose a music video organized by album to learn Korean lyrics with synchronized subtitles
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
              placeholder="Search by song title, album, artist (e.g. DRIP, BABYMONSTER, ILLIT)..."
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

        {/* Album Quick-Filter Pills */}
        <div className="video-album-pills-bar">
          <button
            type="button"
            className={`album-pill-btn ${selectedAlbumFilter === 'ALL' ? 'is-active' : ''}`}
            onClick={() => setSelectedAlbumFilter('ALL')}
          >
            <Layers size={13} /> All Albums ({presets.length})
          </button>
          {availableAlbums.map((albumName) => {
            const count = presets.filter((p) => (p.album || 'Unkonw') === albumName).length;
            const isUnkonw = albumName === 'Unkonw';
            return (
              <button
                key={albumName}
                type="button"
                className={`album-pill-btn ${selectedAlbumFilter === albumName ? 'is-active' : ''} ${isUnkonw ? 'is-unkonw' : ''}`}
                onClick={() => setSelectedAlbumFilter(albumName)}
              >
                <Disc3 size={13} /> {albumName} ({count})
              </button>
            );
          })}
        </div>

        {/* Video Grid List grouped by Album Section */}
        <div className="video-cards-grid-container">
          {groupedByAlbum.length === 0 ? (
            <div className="video-empty-state">
              <Sparkles size={40} className="empty-sparkle" />
              <h4>No matching songs found</h4>
              <p>Try searching for a different title, album, or artist name.</p>
              <button
                type="button"
                className="card-nav-btn reset-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedAlbumFilter('ALL');
                }}
              >
                Show All Videos
              </button>
            </div>
          ) : (
            groupedByAlbum.map(({ albumName, releaseDate, category, songs }) => {
              const isUnkonw = albumName === 'Unkonw';
              return (
                <div
                  className={`video-album-section ${isUnkonw ? 'section-unkonw' : ''}`}
                  key={albumName}
                  id={`album-section-${albumName.replace(/[^a-zA-Z0-9]/g, '_')}`}
                >
                  {/* Album Section Header */}
                  <div className="video-album-section-header">
                    <div className="album-title-group">
                      <div className="album-icon-badge">
                        <Disc3 size={16} className="album-header-icon" />
                      </div>
                      <h4 className="album-section-title">{albumName}</h4>
                      {releaseDate && (
                        <span className="album-release-badge" title="Release Date">
                          {releaseDate}
                        </span>
                      )}
                      {category && (
                        <span className={`album-type-badge type-${category}`} title="Category">
                          {category}
                        </span>
                      )}
                    </div>
                    <span className="album-song-count">
                      {songs.length} {songs.length === 1 ? 'track' : 'tracks'}
                    </span>
                  </div>

                  {/* Album Video Cards Grid */}
                  <div className="video-cards-grid">
                    {songs.map(({ preset, index }) => {
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
                              <span
                                className="video-album-tag"
                                title={`Album: ${preset.album || 'Unkonw'}`}
                              >
                                {preset.album || 'Unkonw'}
                              </span>
                              <span className="video-action-hint">
                                {isSelected ? 'Currently Selected' : 'Click to Load & Play'}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
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
