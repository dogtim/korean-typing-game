import React, { useState, useRef } from 'react';
import { pickChoiceOptions } from '../../utils/gameModes';

// Contract every game mode challenge component follows: receive the target
// `line` (+ any mode-specific data like `pool`), and call `onAnswer(correct)`
// exactly once when the player has made their choice. Timing, XP, and
// resuming playback are all owned by GameChallengeOverlay.
export default function ChoiceModeChallenge({ line, pool, onAnswer }) {
  const [options] = useState(() => pickChoiceOptions(line.ko, pool, 3));
  const [selected, setSelected] = useState(null);
  const lockedRef = useRef(false);

  const handleSelect = (option) => {
    if (lockedRef.current) return;
    lockedRef.current = true;
    setSelected(option);
    const correct = option === line.ko;
    setTimeout(() => onAnswer(correct), 700);
  };

  return (
    <div className="choice-challenge">
      <p className="challenge-prompt">Which sentence did you just hear?</p>
      <div className="choice-options">
        {options.map((opt, idx) => {
          const revealed = selected !== null;
          const isCorrectOpt = opt === line.ko;
          const isPickedWrong = revealed && selected === opt && !isCorrectOpt;
          return (
            <button
              key={idx}
              type="button"
              className={`choice-option-btn ${revealed && isCorrectOpt ? 'correct' : ''} ${isPickedWrong ? 'wrong' : ''}`}
              onClick={() => handleSelect(opt)}
              disabled={revealed}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
