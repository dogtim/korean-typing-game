import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { Crosshair } from 'lucide-react';
import { buildSyllableChunks, shuffleArray } from '../../utils/gameModes';
import { sound } from '../../utils/audio';

// Six fixed screen regions (percentage rects) so syllables scatter into
// distinct corners/edges instead of clumping together. Zone assignment is
// shuffled independently of catch order, so screen position never hints at
// which syllable comes next — the player has to actually track each one.
const ZONES = [
  { top: [10, 22], left: [6, 24] },
  { top: [10, 22], left: [70, 90] },
  { top: [42, 54], left: [4, 20] },
  { top: [42, 54], left: [76, 92] },
  { top: [74, 86], left: [8, 26] },
  { top: [74, 86], left: [68, 88] }
];

function randomInRange([min, max]) {
  return min + Math.random() * (max - min);
}

// Independent random drift offsets per token, consumed by the shared
// syllable-drift keyframes via CSS custom properties.
function randomDrift() {
  const px = () => `${Math.round((Math.random() - 0.5) * 120)}px`;
  return {
    '--dx1': px(), '--dy1': px(),
    '--dx2': px(), '--dy2': px(),
    '--dx3': px(), '--dy3': px()
  };
}

function buildFloatingTokens(chunks) {
  const zoneOrder = shuffleArray(ZONES.map((_, i) => i));
  return chunks.map((chunk, idx) => {
    const zone = ZONES[zoneOrder[idx % zoneOrder.length]];
    return {
      ...chunk,
      top: randomInRange(zone.top),
      left: randomInRange(zone.left),
      duration: 3 + Math.random() * 2.5,
      delay: -(Math.random() * 4),
      drift: randomDrift(),
      wrongFlash: false
    };
  });
}

// Same one-shot `onAnswer(correct)` contract as the other challenge modes.
// Unlike ChoiceMode/WordOrder, this mode is fullBleed (see GAME_MODES) — it
// positions its own elements across the whole stage rather than living
// inside GameChallengeOverlay's centered challenge-card.
export default function BatchimBuilderChallenge({ line, onAnswer }) {
  const chunks = useMemo(() => buildSyllableChunks(line.ko), [line.ko]);
  const settledRef = useRef(false);
  const nextIdxRef = useRef(0);

  const [floating, setFloating] = useState(() => buildFloatingTokens(chunks));
  const [caught, setCaught] = useState([]);

  const settle = useCallback((correct) => {
    if (settledRef.current) return;
    settledRef.current = true;
    setTimeout(() => onAnswer(correct), 550);
  }, [onAnswer]);

  // Too few Hangul syllables to make a meaningful catch challenge — auto-pass
  // rather than punishing the player for an unlucky line pick.
  useEffect(() => {
    if (chunks.length < 2) settle(true);
  }, [chunks.length, settle]);

  const handleTap = (token) => {
    if (settledRef.current) return;

    if (token.order !== nextIdxRef.current) {
      sound.playError();
      setFloating(prev => prev.map(t => (t.id === token.id ? { ...t, wrongFlash: true } : t)));
      setTimeout(() => {
        setFloating(prev => prev.map(t => (t.id === token.id ? { ...t, wrongFlash: false } : t)));
      }, 350);
      return;
    }

    sound.playCorrect();
    nextIdxRef.current += 1;
    setFloating(prev => prev.filter(t => t.id !== token.id));
    setCaught(prev => {
      const next = [...prev, token];
      if (next.length === chunks.length) settle(true);
      return next;
    });
  };

  if (chunks.length < 2) {
    return (
      <div className="batchim-challenge-field">
        <p className="challenge-prompt">Line too short for Batchim Builder — auto-passing!</p>
      </div>
    );
  }

  return (
    <div className="batchim-challenge-field">
      <div className="batchim-target-bar glassmorphism">
        <p className="challenge-prompt">
          <Crosshair size={15} /> Catch the syllables in the correct order!
        </p>
        <div className="batchim-progress-row">
          {caught.map(tok => (
            <span key={tok.id} className="syllable-chip caught-chip">
              {tok.char}
              {tok.spaceAfter ? ' ' : ''}
            </span>
          ))}
          <span className="batchim-progress-count">{caught.length} / {chunks.length}</span>
        </div>
      </div>

      {floating.map(token => (
        <button
          key={token.id}
          type="button"
          className={`syllable-token ${token.wrongFlash ? 'wrong-flash' : ''}`}
          style={{
            top: `${token.top}%`,
            left: `${token.left}%`,
            animationDuration: `${token.duration}s`,
            animationDelay: `${token.delay}s`,
            ...token.drift
          }}
          onClick={() => handleTap(token)}
        >
          {token.char}
        </button>
      ))}
    </div>
  );
}
