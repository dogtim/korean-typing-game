import React from 'react';
import { BookOpen, Tv, Gamepad2 } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab
}) {
  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <div className="brand-logo">한</div>
        <div className="brand-info">
          <h1 className="brand-title">Hangul Type Quest</h1>
          <span className="brand-subtitle">Korean Typing & Listening Game</span>
        </div>
      </div>

      <nav className="navbar-tabs">
        <button
          className={`tab-btn ${activeTab === 'lessons' ? 'active' : ''}`}
          onClick={() => setActiveTab('lessons')}
        >
          <BookOpen className="tab-icon" size={18} />
          <span>Lessons</span>
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
      </nav>
    </header>
  );
}
