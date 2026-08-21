import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getGameModeConfig, computeTimeLimitSec } from '../../utils/gameModes';
import ChoiceModeChallenge from './ChoiceModeChallenge';
import WordOrderChallenge from './WordOrderChallenge';
import SingTheWordsChallenge from './SingTheWordsChallenge';
import BatchimBuilderChallenge from './BatchimBuilderChallenge';

// Add new modes here — the id must match a GAME_MODES entry in utils/gameModes.js.
// Every component in this map must accept { line, pool, onAnswer } and call
// onAnswer(correct: boolean) exactly once.
const CHALLENGE_COMPONENTS = {
  choice: ChoiceModeChallenge,
  wordorder: WordOrderChallenge,
  sing: SingTheWordsChallenge,
  batchim: BatchimBuilderChallenge
};

export default function GameChallengeOverlay({ mode, line, pool, batchimUnit, onComplete }) {
  const modeConfig = getGameModeConfig(mode);
  const timeLimitSec = computeTimeLimitSec(mode, line, batchimUnit);
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

  const header = (
    <div className="challenge-header">
      <span className="challenge-mode-label">
        {ModeIcon && <ModeIcon size={15} />} {modeConfig.label}
      </span>
      <span className={`challenge-timer ${timeLeft <= 3 ? 'urgent' : ''}`}>{timeLeft}s</span>
    </div>
  );

  const body = ChallengeComponent ? (
    <ChallengeComponent line={line} pool={pool} unit={batchimUnit} onAnswer={settle} />
  ) : (
    <p className="challenge-prompt">Unknown game mode: {mode}</p>
  );

  // fullBleed modes (e.g. Batchim Builder) need the entire stage area to
  // scatter moving elements across — they skip the centered, width-capped
  // challenge-card and position the header as a small floating HUD instead.
  if (modeConfig.fullBleed) {
    return (
      <div className="game-challenge-overlay">
        <div className="challenge-floating-hud glassmorphism">{header}</div>
        {body}
      </div>
    );
  }

  return (
    <div className="game-challenge-overlay">
      <div className="challenge-card glassmorphism">
        {header}
        {body}
      </div>
    </div>
  );
}
