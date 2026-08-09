import React from 'react';
import { Volume2, VolumeX, Flame, Award, BookOpen, Gamepad2, Zap, Tv } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  xp,
  level,
  streak,
  soundMuted,
  onToggleSound,
  onOpenBadges
}) {
  const xpForNextLevel = level * 100;
  const currentLevelXp = xp % 100;
  const xpPercent = Math.min(100, Math.floor((currentLevelXp / 100) * 100));

  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <div className="brand-logo">한</div>
        <div className="brand-info">
          <h1 className="brand-title">Hangul Type Quest</h1>
          <span className="brand-subtitle">Korean Typing Master</span>
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
          <span>K-Pop Video</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'arcade' ? 'active' : ''}`}
          onClick={() => setActiveTab('arcade')}
        >
          <Gamepad2 className="tab-icon" size={18} />
          <span>Word Rain</span>
        </button>

        <button
          className={`tab-btn ${activeTab === 'speed' ? 'active' : ''}`}
          onClick={() => setActiveTab('speed')}
        >
          <Zap className="tab-icon" size={18} />
          <span>Speed Test</span>
        </button>
      </nav>

      <div className="navbar-stats">
        {/* Streak */}
        <div className="stat-badge streak-badge" title="Current Typing Combo Streak">
          <Flame className="stat-icon flame" size={18} />
          <span className="stat-value">{streak}</span>
        </div>

        {/* Level & XP */}
        <div className="level-box" onClick={onOpenBadges} title="Click to view Badges & Stats">
          <div className="level-badge">Lv.{level}</div>
          <div className="xp-bar-container">
            <div className="xp-bar-fill" style={{ width: `${xpPercent}%` }}></div>
          </div>
          <span className="xp-text">{xp} XP</span>
        </div>

        {/* Badges Button */}
        <button className="icon-btn" onClick={onOpenBadges} title="Achievements">
          <Award size={20} />
        </button>

        {/* Mute Button */}
        <button className="icon-btn" onClick={onToggleSound} title={soundMuted ? 'Unmute Sound' : 'Mute Sound'}>
          {soundMuted ? <VolumeX size={20} className="muted-icon" /> : <Volume2 size={20} />}
        </button>
      </div>
    </header>
  );
}
