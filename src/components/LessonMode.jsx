import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { LESSON_STAGES } from '../utils/curriculum';
import { getRequiredKeys, composeHangul, getQWERTYKeyFromEvent } from '../utils/hangul';
import { sound } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';
import { Volume2, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LessonMode({ onAddXp, onUpdateStreak, soundMuted }) {
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  const stage = LESSON_STAGES[selectedStageIdx];
  const currentItem = stage.items[itemIndex];

  // Typing state
  const [typedKeys, setTypedKeys] = useState(''); // Store raw QWERTY key presses
  const [typedText, setTypedText] = useState(''); // Composed Hangul text
  const [errorCount, setErrorCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [localStreak, setLocalStreak] = useState(0);
  const [activeKeyPressed, setActiveKeyPressed] = useState([]);

  // Compute required QWERTY keys for target item
  const requiredKeys = getRequiredKeys(currentItem.text);
  const targetKeyObj = requiredKeys[typedKeys.length];
  const nextTargetKey = targetKeyObj ? targetKeyObj.key : null;

  // Pronounce item when item changes
  useEffect(() => {
    setTypedKeys('');
    setTypedText('');
    sound.speakKorean(currentItem.text);
  }, [selectedStageIdx, itemIndex, currentItem.text]);

  const handleNextItem = useCallback(() => {
    if (itemIndex < stage.items.length - 1) {
      setItemIndex(prev => prev + 1);
    } else {
      // Stage Completed!
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      sound.playLevelUp();
      onAddXp(50);
      alert(`🎉 Stage Completed! You earned +50 XP!`);
      if (selectedStageIdx < LESSON_STAGES.length - 1) {
        setSelectedStageIdx(prev => prev + 1);
        setItemIndex(0);
      } else {
        setItemIndex(0);
      }
    }
  }, [itemIndex, stage.items.length, selectedStageIdx, onAddXp]);

  const handlePrevItem = () => {
    if (itemIndex > 0) {
      setItemIndex(prev => prev - 1);
    }
  };

  // Process a key input (from physical event or virtual keyboard click)
  const processKeyInput = useCallback((pressedKey) => {
    if (!pressedKey) return;

    // Highlight key on virtual keyboard
    setActiveKeyPressed([pressedKey]);
    setTimeout(() => setActiveKeyPressed([]), 150);

    setTotalCount(prev => prev + 1);

    // Check if key matches required key
    const expectedKey = nextTargetKey;
    const isMatch = (pressedKey.toLowerCase() === (expectedKey || '').toLowerCase()) ||
                    (pressedKey === 'space' && expectedKey === ' ');

    if (isMatch) {
      sound.playKeyPress();
      setTypedKeys(prevKeys => {
        const keyToAdd = pressedKey === 'space' ? ' ' : pressedKey;
        const newKeys = prevKeys + keyToAdd;
        const composed = composeHangul(newKeys);
        setTypedText(composed);

        if (newKeys.length >= requiredKeys.length) {
          sound.playCorrect();
          setTimeout(() => {
            handleNextItem();
          }, 180);
        }
        return newKeys;
      });

      setLocalStreak(prev => {
        const newStreak = prev + 1;
        onUpdateStreak(newStreak);
        if (newStreak % 5 === 0) sound.playCombo(newStreak);
        return newStreak;
      });
      onAddXp(2);
    } else {
      // Typing Error
      sound.playError();
      setErrorCount(prev => prev + 1);
      setLocalStreak(0);
      onUpdateStreak(0);
    }
  }, [nextTargetKey, requiredKeys.length, handleNextItem, onAddXp, onUpdateStreak]);

  // Global Keyboard Listener (useCapture phase = true guarantees receiving all physical keys)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        sound.speakKorean(currentItem.text);
        return;
      }

      if (e.key === 'Backspace') {
        e.preventDefault();
        sound.playKeyPress();
        setTypedKeys(prev => {
          const next = prev.slice(0, -1);
          setTypedText(composeHangul(next));
          return next;
        });
        return;
      }

      const pressedKey = getQWERTYKeyFromEvent(e);
      if (pressedKey) {
        e.preventDefault();
        processKeyInput(pressedKey);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown, true);
  }, [currentItem.text, processKeyInput]);

  return (
    <div className="lesson-mode-container">
      {/* Stage Selector Pills */}
      <div className="stage-selector">
        {LESSON_STAGES.map((stg, idx) => (
          <button
            key={stg.id}
            className={`stage-pill ${idx === selectedStageIdx ? 'active' : ''}`}
            onClick={(e) => {
              e.currentTarget.blur();
              setSelectedStageIdx(idx);
              setItemIndex(0);
            }}
          >
            <span className="stage-icon">{stg.icon}</span>
            <span className="stage-name">{stg.title.split('(')[0]}</span>
          </button>
        ))}
      </div>

      {/* Main Flashcard Input Game Box */}
      <div className="lesson-card glassmorphism">
        <div className="lesson-card-header">
          <span className="lesson-subtitle">{stage.subtitle}</span>
          <div className="lesson-progress-text">
            Item {itemIndex + 1} of {stage.items.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="stage-progress-bar">
          <div
            className="stage-progress-fill"
            style={{ width: `${((itemIndex + 1) / stage.items.length) * 100}%` }}
          ></div>
        </div>

        {/* Target Item Display Area */}
        <div className="target-display-box">
          <div className="target-hangul-text">
            {currentItem.text.split('').map((char, idx) => {
              const isTyped = typedText.length > idx;
              const isCurrent = typedText.length === idx;
              return (
                <span
                  key={idx}
                  className={`hangul-char-block ${isTyped ? 'typed' : ''} ${isCurrent ? 'current' : ''}`}
                >
                  {char}
                </span>
              );
            })}
          </div>

          <button
            className="audio-speak-btn"
            onClick={(e) => {
              e.currentTarget.blur();
              sound.speakKorean(currentItem.text);
            }}
            title="Listen to Pronunciation (or press Tab)"
          >
            <Volume2 size={24} />
            <span>Listen</span>
          </button>
        </div>

        {/* Romanization & Meaning */}
        <div className="target-meta-box">
          <div className="meta-item">
            <span className="meta-label">Pronunciation:</span>
            <span className="meta-value romanization">[{currentItem.romanization}]</span>
          </div>
          {currentItem.meaning && (
            <div className="meta-item">
              <span className="meta-label">Meaning:</span>
              <span className="meta-value meaning">"{currentItem.meaning}"</span>
            </div>
          )}
          {currentItem.desc && (
            <div className="meta-item">
              <span className="meta-label">Letter Info:</span>
              <span className="meta-value desc">{currentItem.desc}</span>
            </div>
          )}
        </div>

        {/* Live Keystroke Visualizer & Hint */}
        <div className="keystroke-guide-box">
          <div className="keystroke-row">
            <span className="guide-title">Keys Required:</span>
            <div className="key-chips">
              {requiredKeys.map((k, idx) => {
                const isDone = idx < typedKeys.length;
                const isNext = idx === typedKeys.length;
                return (
                  <span
                    key={idx}
                    className={`key-chip ${isDone ? 'done' : ''} ${isNext ? 'next' : ''}`}
                  >
                    <span className="chip-en">{k.key.toUpperCase()}</span>
                    <span className="chip-ko">{k.jamo}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Typing Buffer Feedback */}
          <div className="typed-feedback-row">
            <span className="feedback-label">Your Input:</span>
            <div className="typed-box">
              <span className="typed-result">{typedText || 'Type your physical keyboard...'}</span>
              <span className="cursor-blink">|</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="lesson-action-bar">
          <button className="card-nav-btn" onClick={(e) => { e.currentTarget.blur(); handlePrevItem(); }} disabled={itemIndex === 0}>
            <ChevronLeft size={20} /> Prev
          </button>

          <button className="card-nav-btn reset-btn" onClick={(e) => { e.currentTarget.blur(); setTypedKeys(''); setTypedText(''); }}>
            <RefreshCw size={18} /> Reset
          </button>

          <button className="card-nav-btn primary" onClick={(e) => { e.currentTarget.blur(); handleNextItem(); }}>
            Next <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Virtual Keyboard Guide */}
      <VirtualKeyboard
        targetKey={nextTargetKey}
        activeKeys={activeKeyPressed}
        onVirtualKeyPress={(key) => {
          processKeyInput(key);
        }}
      />
    </div>
  );
}
