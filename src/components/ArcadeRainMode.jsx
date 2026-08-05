import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LESSON_STAGES } from '../utils/curriculum';
import { composeHangul, getQWERTYKeyFromEvent } from '../utils/hangul';
import { sound } from '../utils/audio';
import { Play, RotateCcw, Heart, Flame } from 'lucide-react';

const WORD_POOL = [
  ...LESSON_STAGES[2].items,
  ...LESSON_STAGES[3].items,
  ...LESSON_STAGES[4].items
];

export default function ArcadeRainMode({ onAddXp, soundMuted }) {
  const [gameState, setGameState] = useState('idle'); // 'idle', 'playing', 'gameover'
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('hangul_arcade_highscore') || '0', 10);
  });

  const [fallingWords, setFallingWords] = useState([]);
  const [inputKeys, setInputKeys] = useState('');
  const [inputText, setInputText] = useState('');

  const gameLoopRef = useRef(null);
  const spawnTimerRef = useRef(null);

  // Start Arcade Game
  const startGame = () => {
    setScore(0);
    setLives(3);
    setCombo(0);
    setFallingWords([]);
    setInputKeys('');
    setInputText('');
    setGameState('playing');
    sound.playLevelUp();
  };

  // Spawn falling word
  const spawnWord = () => {
    const randomItem = WORD_POOL[Math.floor(Math.random() * WORD_POOL.length)];
    const newWord = {
      id: Date.now() + Math.random(),
      text: randomItem.text,
      romanization: randomItem.romanization,
      meaning: randomItem.meaning || '',
      x: 10 + Math.random() * 75,
      y: 0,
      speed: 0.35 + Math.random() * 0.4
    };

    setFallingWords(prev => [...prev, newWord]);
  };

  // Game Loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    spawnTimerRef.current = setInterval(() => {
      spawnWord();
    }, 2200);

    gameLoopRef.current = setInterval(() => {
      setFallingWords(prevWords => {
        const nextWords = [];
        let lostLife = false;

        for (const w of prevWords) {
          const nextY = w.y + w.speed;
          if (nextY >= 85) {
            lostLife = true;
            sound.playError();
          } else {
            nextWords.push({ ...w, y: nextY });
          }
        }

        if (lostLife) {
          setLives(prevLives => {
            const updatedLives = prevLives - 1;
            if (updatedLives <= 0) {
              setGameState('gameover');
              sound.playError();
            }
            return updatedLives;
          });
          setCombo(0);
        }

        return nextWords;
      });
    }, 50);

    return () => {
      clearInterval(spawnTimerRef.current);
      clearInterval(gameLoopRef.current);
    };
  }, [gameState]);

  const checkMatch = useCallback((targetText) => {
    if (!targetText) return;

    setFallingWords(prevWords => {
      const matchedIdx = prevWords.findIndex(w => w.text === targetText);

      if (matchedIdx !== -1) {
        sound.playCorrect();
        const next = prevWords.filter((_, idx) => idx !== matchedIdx);

        setInputKeys('');
        setInputText('');

        setCombo(prevCombo => {
          const newCombo = prevCombo + 1;
          if (newCombo % 5 === 0) sound.playCombo(newCombo);
          return newCombo;
        });

        setScore(prevScore => {
          const newScore = prevScore + 15;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('hangul_arcade_highscore', newScore.toString());
          }
          return newScore;
        });

        onAddXp(5);
        return next;
      }
      return prevWords;
    });
  }, [highScore, onAddXp]);

  // Handle Global Keyboard Input
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (gameState !== 'playing') return;

      if (e.key === 'Backspace') {
        e.preventDefault();
        sound.playKeyPress();
        setInputKeys(prev => {
          const next = prev.slice(0, -1);
          setInputText(composeHangul(next));
          return next;
        });
        return;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        checkMatch(inputText);
        setInputKeys('');
        setInputText('');
        return;
      }

      const pressedKey = getQWERTYKeyFromEvent(e);
      if (pressedKey) {
        e.preventDefault();
        sound.playKeyPress();
        const keyToAdd = pressedKey === 'space' ? ' ' : pressedKey;
        setInputKeys(prev => {
          const newKeys = prev + keyToAdd;
          const composed = composeHangul(newKeys);
          setInputText(composed);
          checkMatch(composed);
          return newKeys;
        });
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown, true);
  }, [gameState, inputText, checkMatch]);

  return (
    <div className="arcade-mode-container">
      {/* Game Header Bar */}
      <div className="arcade-header glassmorphism">
        <div className="arcade-stat">
          <span className="stat-label">Score</span>
          <span className="stat-value highlight">{score}</span>
        </div>

        <div className="arcade-stat">
          <span className="stat-label">Combo</span>
          <div className="combo-box">
            <Flame className="flame-icon" size={16} />
            <span className="stat-value">{combo}x</span>
          </div>
        </div>

        <div className="arcade-stat">
          <span className="stat-label">High Score</span>
          <span className="stat-value">{highScore}</span>
        </div>

        <div className="arcade-stat">
          <span className="stat-label">Lives</span>
          <div className="lives-row">
            {[1, 2, 3].map(i => (
              <Heart
                key={i}
                size={22}
                className={`heart-icon ${i <= lives ? 'active' : 'lost'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Arcade Canvas Play Area */}
      <div className="arcade-play-area glassmorphism">
        {gameState === 'idle' && (
          <div className="arcade-overlay">
            <div className="arcade-title">Word Rain Arcade</div>
            <p className="arcade-desc">
              Type the falling Korean words on your physical keyboard before they hit the ground!
            </p>
            <button className="start-game-btn" onClick={startGame}>
              <Play size={24} /> START GAME
            </button>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="arcade-overlay">
            <div className="arcade-title text-red">Game Over!</div>
            <div className="final-score-box">
              <span>Final Score: <strong>{score}</strong></span>
              <span>High Score: <strong>{highScore}</strong></span>
            </div>
            <button className="start-game-btn" onClick={startGame}>
              <RotateCcw size={20} /> PLAY AGAIN
            </button>
          </div>
        )}

        {/* Falling Words */}
        {gameState === 'playing' && fallingWords.map(w => (
          <div
            key={w.id}
            className="falling-word-bubble"
            style={{ left: `${w.x}%`, top: `${w.y}%` }}
          >
            <span className="bubble-text">{w.text}</span>
            <span className="bubble-hint">[{w.romanization}]</span>
          </div>
        ))}

        {/* Laser / Bottom Danger Line */}
        <div className="arcade-danger-line"></div>

        {/* Player Input Bar */}
        <div className="arcade-input-container">
          <span className="input-prompt">TYPE:</span>
          <div className="arcade-input-box">
            <span className="arcade-typed-text">{inputText || 'type physical keys...'}</span>
            <span className="cursor-blink">|</span>
          </div>
        </div>
      </div>
    </div>
  );
}
