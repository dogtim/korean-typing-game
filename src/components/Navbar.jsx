import React from 'react';
import { BookOpen, Tv, Gamepad2, BookMarked, Wrench } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  showAdminTab = false
}) {
  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <div className="brand-logo">한</div>
        <div className="brand-info">
          <h1 className="brand-title">Hangul PopPop</h1>
          <span className="brand-subtitle">Korean Typing & Listening Game</span>
        </div>
      </div>

      <nav className="navbar-tabs">
        <button
          className={`tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
          onClick={() => setActiveTab('lessons')}
        >
          <BookOpen className="tab-icon" size={18} />
          <span>Lessons (WIP)</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'kpop' ? 'active' : ''}`}
          onClick={() => setActiveTab('kpop')}
        >
          <Tv className="tab-icon" size={18} />
          <span>K-Pop Practice</span>
        </button>

        <button
          className={`tab-btn game-tab-highlight ${activeTab === 'kpop-game' ? 'active' : ''}`}
          onClick={() => setActiveTab('kpop-game')}
        >
          <Gamepad2 className="tab-icon" size={18} />
          <span>K-Pop Game</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'lyrics-ref' ? 'active' : ''}`}
          onClick={() => setActiveTab('lyrics-ref')}
          title="K-Pop Lyrics & Subtitle Reference Hub (k-lyrics & RentAnAdviser)"
        >
          <BookMarked className="tab-icon" size={18} />
          <span>Lyrics Hub (WIP)</span>
        </button>

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
