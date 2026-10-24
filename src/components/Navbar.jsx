import React, { useState, useEffect } from 'react';
import { BookOpen, Tv, Gamepad2, BookMarked, Wrench, Radio, Zap } from 'lucide-react';
import { lightstick } from '../utils/lightstickBle';

export default function Navbar({
  activeTab,
  setActiveTab,
  showAdminTab = false,
  learningLanguage = 'korean',
  onSelectLanguage,
  onOpenLightstick
}) {
  const isHokkien = learningLanguage === 'hokkien';
  const [bleState, setBleState] = useState(() => lightstick.getState());

  useEffect(() => {
    const unsubscribe = lightstick.subscribe((st) => setBleState(st));
    return unsubscribe;
  }, []);

  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <div className="brand-logo">{isHokkien ? '台' : '한'}</div>
        <div className="brand-info">
          <h1 className="brand-title">{isHokkien ? 'Hokkien PopPop' : 'Hangul PopPop'}</h1>
          <span className="brand-subtitle">{isHokkien ? 'Taiwanese' : 'Korean'}</span>
        </div>
      </div>

      <nav className="navbar-tabs">
        {/* Lessons (WIP) / Typing series temporarily hidden until complete */}
        {/* {!isHokkien && (
          <button
            className={`tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
            onClick={() => setActiveTab('lessons')}
          >
            <BookOpen className="tab-icon" size={18} />
            <span>Lessons (WIP)</span>
          </button>
        )} */}

        <button
          className={`tab-btn ${activeTab === 'kpop' ? 'active' : ''}`}
          onClick={() => setActiveTab('kpop')}
        >
          <Tv className="tab-icon" size={18} />
          <span>Song Practice</span>
        </button>

        {!isHokkien && (
          <button
            className={`tab-btn game-tab-highlight ${activeTab === 'kpop-game' ? 'active' : ''}`}
            onClick={() => setActiveTab('kpop-game')}
          >
            <Gamepad2 className="tab-icon" size={18} />
            <span>K-Pop Game</span>
          </button>
        )}

        <button
          className={`tab-btn concert-tab-highlight ${activeTab === 'concert' ? 'active' : ''}`}
          onClick={() => setActiveTab('concert')}
          title="BABYMONSTER 演唱會多視角播放牆 (Concert Wall)"
        >
          <Radio className="tab-icon" size={18} />
          <span>Concert Wall</span>
        </button>

        {!isHokkien && onOpenLightstick && (
          <button
            type="button"
            className={`tab-btn lightstick-nav-btn ${bleState.isConnected ? 'connected' : ''}`}
            onClick={onOpenLightstick}
            title="BABYMONSTER 官方手燈藍牙連動控制 (Fanlight BLE)"
          >
            <Zap
              className="tab-icon"
              size={17}
              style={{
                color: bleState.isConnected ? bleState.currentColor.hex : '#ff0033',
                filter: bleState.isConnected ? `drop-shadow(0 0 6px ${bleState.currentColor.hex})` : 'none'
              }}
            />
            <span>手燈連動</span>
            {bleState.isConnected && (
              <span
                className="ble-status-dot"
                style={{
                  background: bleState.currentColor.hex,
                  boxShadow: `0 0 8px ${bleState.currentColor.hex}`
                }}
              />
            )}
          </button>
        )}

        {/* Lyrics Hub (WIP) temporarily hidden */}
        {/* {!isHokkien && (
          <button
            className={`tab-btn ${activeTab === 'lyrics-ref' ? 'active' : ''}`}
            onClick={() => setActiveTab('lyrics-ref')}
            title="K-Pop Lyrics & Subtitle Reference Hub (k-lyrics & RentAnAdviser)"
          >
            <BookMarked className="tab-icon" size={18} />
            <span>Lyrics Hub (WIP)</span>
          </button>
        )} */}

        {showAdminTab && (
          <button
            className={`tab-btn admin-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
            title="Local dev-only tool for syncing & registering new songs"
          >
            <Wrench className="tab-icon" size={18} />
            <span>Admin</span>
          </button>
        )}
      </nav>
    </header>
  );
}
