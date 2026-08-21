import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { Crosshair } from 'lucide-react';
import { buildBatchimTargets, shuffleArray } from '../../utils/gameModes';
import { sound } from '../../utils/audio';

// Six fixed screen regions (percentage rects), all placed below the fixed
// header (floating mode/timer HUD + the "Catch the syllables..." target
// bar) so drifting tokens never wander behind that fixed UI. SAFE_TOP_PX is
// a pixel floor on top of the percentage — it's what actually protects
// short/narrow arenas where the header's fixed pixel height would otherwise
// eat a much bigger share of the stage. Zone assignment is shuffled
// independently of catch order, so screen position never hints at which
// syllable comes next — the player has to actually track each one.
const SAFE_TOP_PX = 176;
const ZONES = [
  { top: [50, 60], left: [4, 20] },
  { top: [50, 60], left: [42, 58] },
  { top: [50, 60], left: [80, 96] },
  { top: [76, 88], left: [6, 24] },
  { top: [76, 88], left: [38, 62] },
  { top: [76, 88], left: [76, 94] }
];

function randomInRange([min, max]) {
  return min + Math.random() * (max - min);
}

// Independent random drift offsets per token, consumed by the shared
// syllable-drift keyframes via CSS custom properties. Vertical drift is
// kept smaller than horizontal so tokens near the top of their zone can't
// wander back up into the reserved header band.
function randomDrift() {
  const dx = () => `${Math.round((Math.random() - 0.5) * 120)}px`;
  const dy = () => `${Math.round((Math.random() - 0.5) * 56)}px`;
  return {
    '--dx1': dx(), '--dy1': dy(),
    '--dx2': dx(), '--dy2': dy(),
    '--dx3': dx(), '--dy3': dy()
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
//
// `unit` ('syllable' | 'word') controls the chunking granularity — see
// buildBatchimTargets() in utils/gameModes.js. Defaults to 'syllable' (the
// harder option) if the player hasn't picked one.
export default function BatchimBuilderChallenge({ line, unit = 'syllable', onAnswer }) {
  const chunks = useMemo(() => buildBatchimTargets(line.ko, unit), [line.ko, unit]);
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

  const unitLabel = unit === 'word' ? 'words' : 'syllables';

  return (
    <div className="batchim-challenge-field">
      <div className="batchim-target-bar glassmorphism">
        <p className="challenge-prompt">
          <Crosshair size={15} /> Catch the {unitLabel} in the correct order!
        </p>
        <div className="batchim-progress-row">
          {caught.map(tok => (
            <span key={tok.id} className="syllable-chip caught-chip">
              {tok.text}
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
          className={`syllable-token ${unit === 'word' ? 'word-unit' : ''} ${token.wrongFlash ? 'wrong-flash' : ''}`}
          style={{
            top: `max(${token.top}%, ${SAFE_TOP_PX}px)`,
            left: `${token.left}%`,
            animationDuration: `${token.duration}s`,
            animationDelay: `${token.delay}s`,
            ...token.drift
          }}
          onClick={() => handleTap(token)}
        >
          {token.text}
        </button>
      ))}
    </div>
  );
}
