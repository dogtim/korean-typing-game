import React, { useState, useRef } from 'react';
import { shuffleWords } from '../../utils/gameModes';

// Same one-shot `onAnswer(correct)` contract as ChoiceModeChallenge.
export default function WordOrderChallenge({ line, onAnswer }) {
  const originalTokens = useRef(line.ko.trim().split(/\s+/)).current;
  const [tray, setTray] = useState(() =>
    shuffleWords(originalTokens).map((text, idx) => ({ id: `${idx}-${text}`, text }))
  );
  const [answer, setAnswer] = useState([]);
  const settledRef = useRef(false);

  const moveToAnswer = (token) => {
    if (settledRef.current) return;
    setTray(prev => prev.filter(t => t.id !== token.id));
    setAnswer(prev => {
      const next = [...prev, token];
      if (next.length === originalTokens.length) {
        settledRef.current = true;
        const isCorrect = next.map(t => t.text).join(' ') === originalTokens.join(' ');
        setTimeout(() => onAnswer(isCorrect), 500);
      }
      return next;
    });
  };

  const moveToTray = (token) => {
    if (settledRef.current) return;
    setAnswer(prev => prev.filter(t => t.id !== token.id));
    setTray(prev => [...prev, token]);
  };

  return (
    <div className="wordorder-challenge">
      <p className="challenge-prompt">Tap the words back into the correct order:</p>

      <div className="wordorder-answer-row">
        {answer.length === 0 && <span className="answer-placeholder">Tap words below to build the sentence...</span>}
        {answer.map(token => (
          <button
            key={token.id}
            type="button"
            className="word-chip answer-chip"
            onClick={() => moveToTray(token)}
          >
            {token.text}
          </button>
        ))}
      </div>

      <div className="wordorder-tray-row">
        {tray.map(token => (
          <button
            key={token.id}
            type="button"
            className="word-chip tray-chip"
            onClick={() => moveToAnswer(token)}
          >
            {token.text}
          </button>
        ))}
      </div>
    </div>
  );
}
