import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import LessonMode from './components/LessonMode';
import BadgeModal from './components/BadgeModal';
import ReviewNotebookModal from './components/ReviewNotebookModal';
import { sound } from './utils/audio';

import KpopVideoMode from './components/KpopVideoMode';
import KpopGameMode from './components/KpopGameMode';
import AdminSyncPage from './components/AdminSyncPage';
import LyricsReferencePage from './components/LyricsReferencePage';
import { KPOP_SONG_PRESETS } from './utils/kpopSongs';

const defaultSongIndex = KPOP_SONG_PRESETS.findIndex(
  p => p.id === 'Zp-Jhuhq0bQ' || p.title === 'DRIP'
);
const DEFAULT_SONG = {
  preset: defaultSongIndex !== -1 ? KPOP_SONG_PRESETS[defaultSongIndex] : KPOP_SONG_PRESETS[0],
  index: defaultSongIndex !== -1 ? defaultSongIndex : 0
};

export default function App() {
  const [activeTab, setActiveTab] = useState('lessons');
  const [autoPlayVideoId, setAutoPlayVideoId] = useState(null);

  // Selected song state across tab navigation (resets to DRIP on fresh page reload)
  const [selectedPracticeSong, setSelectedPracticeSong] = useState(DEFAULT_SONG);
  const [selectedGameSong, setSelectedGameSong] = useState(DEFAULT_SONG);

  // Gamification state
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem('hangul_xp') || '0', 10));
  const [level, setLevel] = useState(() => Math.max(1, Math.floor(xp / 100) + 1));
  const [streak, setStreak] = useState(0);
  const [soundMuted, setSoundMuted] = useState(false);
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [unlockedBadges] = useState(['first_step']);

  // Deep Learning Missed Sentences Review Notebook State
  const [missedSentences, setMissedSentences] = useState(() => {
    try {
      const saved = localStorage.getItem('kpop_missed_reviews');
      return saved ? JSON.parse(saved) : [];
    } catch (_e) {
      return [];
    }
  });
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [loopTarget, setLoopTarget] = useState(null);

  // Sync Level with XP
  useEffect(() => {
    const calcLevel = Math.max(1, Math.floor(xp / 100) + 1);
    if (calcLevel > level) {
      setLevel(calcLevel);
      sound.playLevelUp();
    }
    localStorage.setItem('hangul_xp', xp.toString());
  }, [xp, level]);

  // Save missed sentence to notebook & localStorage
  const handleSaveMissed = useCallback((item) => {
    if (!item || !item.ko) return;
    setMissedSentences(prev => {
      // Avoid duplicate of identical line in the same song
      const exists = prev.some(existing =>
        existing.songId === item.songId &&
        existing.ko.trim() === item.ko.trim() &&
        Math.abs(existing.start - item.start) < 0.5
      );
      if (exists) return prev;

      const updated = [item, ...prev];
      try {
        localStorage.setItem('kpop_missed_reviews', JSON.stringify(updated));
      } catch (_e) {}
      return updated;
    });
  }, []);

  // Remove mastered sentence
  const handleRemoveMissed = useCallback((id) => {
    setMissedSentences(prev => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem('kpop_missed_reviews', JSON.stringify(updated));
      } catch (_e) {}
      return updated;
    });
  }, []);

  // Clear all missed sentences
  const handleClearAllMissed = useCallback(() => {
    setMissedSentences([]);
    try {
      localStorage.removeItem('kpop_missed_reviews');
    } catch (_e) {}
  }, []);

  // Trigger Loop Sentence in Practice Mode
  const handleLoopSentence = useCallback((item) => {
    setLoopTarget({ ...item, autoLoop: true });
    const targetVideoId = item.youtubeId || item.songId;
    if (targetVideoId) {
      const idx = KPOP_SONG_PRESETS.findIndex(p => p.id === targetVideoId);
      if (idx !== -1) {
        setSelectedPracticeSong({ preset: KPOP_SONG_PRESETS[idx], index: idx });
      }
    }
    setActiveTab('kpop');
  }, []);

  // Jump to K-Pop Practice and auto-load a just-registered song from the Admin page
  const handlePlayNow = useCallback((videoId) => {
    const idx = KPOP_SONG_PRESETS.findIndex(p => p.id === videoId);
    if (idx !== -1) {
      setSelectedPracticeSong({ preset: KPOP_SONG_PRESETS[idx], index: idx });
    }
    setAutoPlayVideoId(videoId);
    setActiveTab('kpop');
  }, []);

  const handleAddXp = (amount) => {
    setXp(prev => prev + amount);
  };

  const handleUpdateStreak = (newStreak) => {
    setStreak(newStreak);
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showAdminTab={import.meta.env.DEV}
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
            loopTarget={loopTarget}
            onClearLoopTarget={() => setLoopTarget(null)}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            missedCount={missedSentences.length}
            autoPlayVideoId={autoPlayVideoId}
            onAutoPlayHandled={() => setAutoPlayVideoId(null)}
            selectedSong={selectedPracticeSong}
            onSelectSong={setSelectedPracticeSong}
          />
        )}

        {activeTab === 'admin' && import.meta.env.DEV && (
          <AdminSyncPage onPlayNow={handlePlayNow} />
        )}

        {activeTab === 'lyrics-ref' && (
          <LyricsReferencePage
            onSelectSongForPractice={handlePlayNow}
            onSwitchToAdmin={() => setActiveTab('admin')}
          />
        )}

        {activeTab === 'kpop-game' && (
          <KpopGameMode
            onAddXp={handleAddXp}
            onSwitchToPractice={(preset, idx) => {
              if (preset) {
                setSelectedPracticeSong({ preset, index: idx });
              }
              setActiveTab('kpop');
            }}
            onSaveMissed={handleSaveMissed}
            onLoopSentence={handleLoopSentence}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            missedCount={missedSentences.length}
            selectedSong={selectedGameSong}
            onSelectSong={setSelectedGameSong}
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

      {/* Deep Learning Incorrect Answers Review Notebook Modal */}
      <ReviewNotebookModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        missedSentences={missedSentences}
        onLoopSentence={handleLoopSentence}
        onRemoveMissed={handleRemoveMissed}
        onClearAll={handleClearAllMissed}
      />
    </div>
  );
}
