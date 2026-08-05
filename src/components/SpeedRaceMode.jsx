import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { composeHangul, getQWERTYKeyFromEvent } from '../utils/hangul';
import { sound } from '../utils/audio';
import { Timer, Zap, Target, RotateCcw } from 'lucide-react';

const SPEED_PARAGRAPHS = [
  "안녕하세요 한국어를 공부하는 것은 정말 즐겁습니다",
  "감사합니다 오늘도 즐겁고 행복한 하루 보내세요",
  "바다 하늘 산 친구 사랑 한국 요리 라면 치킨 우유",
  "괜찮아요 천천히 연습하면 누구나 한국어 타자를 잘 할 수 있습니다"
];

export default function SpeedRaceMode({ onAddXp }) {
  const [testTime, setTestTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [paragraphIdx, setParagraphIdx] = useState(0);
  const targetText = SPEED_PARAGRAPHS[paragraphIdx];

  const [typedKeys, setTypedKeys] = useState('');
  const [typedText, setTypedText] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const [totalKeys, setTotalKeys] = useState(0);

  // Timer Countdown
  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      setIsFinished(true);
      sound.playLevelUp();
      confetti({ particleCount: 100, spread: 70 });
      onAddXp(30);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, onAddXp]);

  const startTest = useCallback(() => {
    setTimeLeft(testTime);
    setIsActive(true);
    setIsFinished(false);
    setTypedKeys('');
    setTypedText('');
    setErrorCount(0);
    setTotalKeys(0);
    sound.playKeyPress();
  }, [testTime]);

  const resetTest = () => {
    setIsActive(false);
    setIsFinished(false);
    setTimeLeft(testTime);
    setTypedKeys('');
    setTypedText('');
    setErrorCount(0);
    setTotalKeys(0);
  };

  // Global Keyboard Listener
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (isFinished) return;

      if (!isActive) {
        startTest();
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
        sound.playKeyPress();

        const keyToAdd = pressedKey === 'space' ? ' ' : pressedKey;
        setTypedKeys(prev => {
          const newKeys = prev + keyToAdd;
          const composed = composeHangul(newKeys);
          setTypedText(composed);

          // Check accuracy against target text
          const currentCharIdx = composed.length - 1;
          if (composed[currentCharIdx] !== targetText[currentCharIdx]) {
            setErrorCount(errs => errs + 1);
            sound.playError();
          }

          // Auto finish if completed target
          if (composed.length >= targetText.length) {
            setIsActive(false);
            setIsFinished(true);
            sound.playLevelUp();
            confetti({ particleCount: 120, spread: 80 });
            onAddXp(40);
          }

          return newKeys;
        });

        setTotalKeys(tot => tot + 1);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown, true);
  }, [isActive, isFinished, startTest, targetText, onAddXp]);

  // Speed Calculations (CPM & WPM)
  const timeElapsedSec = testTime - timeLeft || 1;
  const cpm = Math.round((typedText.length / timeElapsedSec) * 60);
  const wpm = Math.round(cpm / 5);
  const accuracy = totalKeys > 0 ? Math.max(0, Math.round(((totalKeys - errorCount) / totalKeys) * 100)) : 100;

  return (
    <div className="speed-mode-container">
      {/* Time & Speed Controls */}
      <div className="speed-header glassmorphism">
        <div className="time-select-group">
          <span className="select-label">Time Attack:</span>
          <button
            className={`time-btn ${testTime === 30 ? 'active' : ''}`}
            onClick={(e) => { e.currentTarget.blur(); setTestTime(30); setTimeLeft(30); resetTest(); }}
          >
            30 Sec
          </button>
          <button
            className={`time-btn ${testTime === 60 ? 'active' : ''}`}
            onClick={(e) => { e.currentTarget.blur(); setTestTime(60); setTimeLeft(60); resetTest(); }}
          >
            60 Sec
          </button>
        </div>

        <div className="speed-stats-row">
          <div className="speed-stat">
            <Timer className="stat-icon" size={20} />
            <span className="stat-val">{timeLeft}s</span>
          </div>

          <div className="speed-stat">
            <Zap className="stat-icon yellow" size={20} />
            <span className="stat-val">{cpm} <small>CPM</small></span>
          </div>

          <div className="speed-stat">
            <Target className="stat-icon green" size={20} />
            <span className="stat-val">{accuracy}%</span>
          </div>
        </div>
      </div>

      {/* Main Typing Test Card */}
      <div className="speed-card glassmorphism">
        {!isActive && !isFinished && (
          <div className="start-prompt-banner">
            👇 Press any physical key on your keyboard to start the speed test!
          </div>
        )}

        {/* Target Text Paragraph */}
        <div className="speed-target-text">
          {targetText.split('').map((char, idx) => {
            const typedChar = typedText[idx];
            let status = '';
            if (typedChar !== undefined) {
              status = typedChar === char ? 'correct' : 'wrong';
            }
            const isCurrent = idx === typedText.length;

            return (
              <span
                key={idx}
                className={`speed-char ${status} ${isCurrent ? 'current-caret' : ''}`}
              >
                {char === ' ' ? '␣' : char}
              </span>
            );
          })}
        </div>

        {/* Results Screen */}
        {isFinished && (
          <div className="speed-results-card">
            <h2 className="results-title">🎉 Speed Test Finished!</h2>
            <div className="results-grid">
              <div className="res-item">
                <span className="res-label">Characters / Min</span>
                <span className="res-val highlight">{cpm} CPM</span>
              </div>
              <div className="res-item">
                <span className="res-label">Words / Min</span>
                <span className="res-val">{wpm} WPM</span>
              </div>
              <div className="res-item">
                <span className="res-label">Accuracy</span>
                <span className="res-val">{accuracy}%</span>
              </div>
            </div>
            <button className="restart-test-btn" onClick={startTest}>
              <RotateCcw size={18} /> TRY AGAIN
            </button>
          </div>
        )}

        <div className="speed-actions">
          <button className="change-text-btn" onClick={(e) => { e.currentTarget.blur(); setParagraphIdx((paragraphIdx + 1) % SPEED_PARAGRAPHS.length); }}>
            Change Practice Text
          </button>
          <button className="reset-test-btn" onClick={(e) => { e.currentTarget.blur(); resetTest(); }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
