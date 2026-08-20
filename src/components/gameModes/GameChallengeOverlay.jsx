import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getGameModeConfig } from '../../utils/gameModes';
import ChoiceModeChallenge from './ChoiceModeChallenge';
import WordOrderChallenge from './WordOrderChallenge';

// Add new modes here — the id must match a GAME_MODES entry in utils/gameModes.js.
// Every component in this map must accept { line, pool, onAnswer } and call
// onAnswer(correct: boolean) exactly once.
const CHALLENGE_COMPONENTS = {
  choice: ChoiceModeChallenge,
  wordorder: WordOrderChallenge
};

export default function GameChallengeOverlay({ mode, line, pool, onComplete }) {
  const modeConfig = getGameModeConfig(mode);
  const timeLimitSec = modeConfig?.timeLimitSec || 10;
  const [timeLeft, setTimeLeft] = useState(timeLimitSec);
  const settledRef = useRef(false);

  const settle = useCallback((correct) => {
    if (settledRef.current) return;
    settledRef.current = true;
    onComplete({ correct, mode });
  }, [onComplete, mode]);

  useEffect(() => {
    if (timeLeft <= 0) {
      settle(false);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, settle]);

  if (!line || !modeConfig) return null;

  const ChallengeComponent = CHALLENGE_COMPONENTS[mode];
  const ModeIcon = modeConfig.icon;

  return (
    <div className="game-challenge-overlay">
      <div className="challenge-card glassmorphism">
        <div className="challenge-header">
          <span className="challenge-mode-label">
            {ModeIcon && <ModeIcon size={15} />} {modeConfig.label}
          </span>
          <span className={`challenge-timer ${timeLeft <= 3 ? 'urgent' : ''}`}>{timeLeft}s</span>
        </div>

        {ChallengeComponent ? (
          <ChallengeComponent line={line} pool={pool} onAnswer={settle} />
        ) : (
          <p className="challenge-prompt">Unknown game mode: {mode}</p>
        )}
      </div>
    </div>
  );
}
