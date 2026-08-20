import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LessonMode from './components/LessonMode';
import BadgeModal from './components/BadgeModal';
import { sound } from './utils/audio';

import KpopVideoMode from './components/KpopVideoMode';
import KpopGameMode from './components/KpopGameMode';

export default function App() {
  const [activeTab, setActiveTab] = useState('lessons');

  // Gamification state
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem('hangul_xp') || '0', 10));
  const [level, setLevel] = useState(() => Math.max(1, Math.floor(xp / 100) + 1));
  const [streak, setStreak] = useState(0);
  const [soundMuted, setSoundMuted] = useState(false);
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [unlockedBadges] = useState(['first_step']);

  // Sync Level with XP
  useEffect(() => {
    const calcLevel = Math.max(1, Math.floor(xp / 100) + 1);
    if (calcLevel > level) {
      setLevel(calcLevel);
      sound.playLevelUp();
    }
    localStorage.setItem('hangul_xp', xp.toString());
  }, [xp, level]);

  const handleAddXp = (amount) => {
    setXp(prev => prev + amount);
  };

  const handleUpdateStreak = (newStreak) => {
    setStreak(newStreak);
  };

  const handleToggleSound = () => {
    const isMuted = sound.toggleMute();
    setSoundMuted(isMuted);
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        xp={xp}
        level={level}
        streak={streak}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        onOpenBadges={() => setIsBadgeModalOpen(true)}
      />

      {/* Main Tab Content */}
      <main className="app-main-content">
        {activeTab === 'lessons' && (
          <LessonMode
            onAddXp={handleAddXp}
            onUpdateStreak={handleUpdateStreak}
            soundMuted={soundMuted}
          />
        )}

        {activeTab === 'kpop' && (
          <KpopVideoMode
            onAddXp={handleAddXp}
            onSwitchToGame={() => setActiveTab('kpop-game')}
          />
        )}

        {activeTab === 'kpop-game' && (
          <KpopGameMode
            onAddXp={handleAddXp}
            onSwitchToPractice={() => setActiveTab('kpop')}
          />
        )}
      </main>

      {/* Achievements Modal */}
      <BadgeModal
        isOpen={isBadgeModalOpen}
        onClose={() => setIsBadgeModalOpen(false)}
        xp={xp}
        level={level}
        streak={streak}
        unlockedBadges={unlockedBadges}
      />
    </div>
  );
}
