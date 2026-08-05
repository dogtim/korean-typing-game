import React from 'react';
import { ACHIEVEMENTS } from '../utils/curriculum';
import { X, Award, Flame, Zap, Trophy } from 'lucide-react';

export default function BadgeModal({ isOpen, onClose, xp, level, streak, unlockedBadges = [] }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glassmorphism" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <Trophy className="gold-icon" size={24} />
            <h2>Your Achievements & Profile</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Profile Overview Card */}
        <div className="profile-summary-box">
          <div className="summary-stat">
            <span className="sum-label">Level</span>
            <span className="sum-val highlight">Lv.{level}</span>
          </div>
          <div className="summary-stat">
            <span className="sum-label">Total XP</span>
            <span className="sum-val">{xp} XP</span>
          </div>
          <div className="summary-stat">
            <span className="sum-label">Current Streak</span>
            <div className="flex-val">
              <Flame size={18} className="flame" />
              <span>{streak}</span>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <h3 className="section-subtitle">Badges ({unlockedBadges.length} / {ACHIEVEMENTS.length} Unlocked)</h3>
        <div className="badges-grid">
          {ACHIEVEMENTS.map(badge => {
            const isUnlocked = unlockedBadges.includes(badge.id) || level > 1; // Unlocks as player progresses
            return (
              <div key={badge.id} className={`badge-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
                <div className="badge-icon">{badge.icon}</div>
                <div className="badge-info">
                  <h4 className="badge-name">{badge.name}</h4>
                  <p className="badge-desc">{badge.desc}</p>
                </div>
                <div className="badge-status">
                  {isUnlocked ? '✓ Unlocked' : '🔒 Locked'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
