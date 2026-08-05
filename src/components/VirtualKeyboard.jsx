import React, { useState, useEffect } from 'react';
import { KEYBOARD_LAYOUT } from '../utils/hangul';

export default function VirtualKeyboard({ targetKey, activeKeys = [], onVirtualKeyPress }) {
  const [shiftPressed, setShiftPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Shift') setShiftPressed(true);
    };
    const handleKeyUp = (e) => {
      if (e.key === 'Shift') setShiftPressed(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Determine key styling
  const getKeyStatusClass = (keyObj) => {
    const keyLower = keyObj.key.toLowerCase();
    const targetLower = targetKey ? targetKey.toLowerCase() : '';
    const isShifted = shiftPressed || (targetKey && targetKey === targetKey.toUpperCase() && targetKey !== targetKey.toLowerCase());

    const isTarget = targetLower === keyLower;
    const isActive = activeKeys.map(k => k.toLowerCase()).includes(keyLower);

    let classes = `vkey finger-${keyObj.finger}`;
    if (isTarget) classes += ' target-key';
    if (isActive) classes += ' pressed-key';
    return classes;
  };

  return (
    <div className="virtual-keyboard-container">
      <div className="keyboard-header">
        <span className="kb-title">2-Set Dubeolsik (두벌식) Keyboard Guide</span>
        <button
          className={`shift-toggle-btn ${shiftPressed ? 'active' : ''}`}
          onClick={() => setShiftPressed(!shiftPressed)}
        >
          Shift {shiftPressed ? 'ON (ㄲ, ㄸ, ㅃ...)' : 'OFF'}
        </button>
      </div>

      <div className="keyboard-rows">
        {KEYBOARD_LAYOUT.map((row, rowIdx) => (
          <div key={rowIdx} className={`keyboard-row row-${rowIdx}`}>
            {rowIdx === 2 && (
              <button
                className={`vkey key-special ${shiftPressed ? 'pressed-key' : ''}`}
                onClick={() => setShiftPressed(!shiftPressed)}
              >
                Shift
              </button>
            )}

            {row.map((k) => {
              const displayKo = shiftPressed ? k.koShift : k.ko;
              const displayEn = shiftPressed ? k.key.toUpperCase() : k.key;
              return (
                <button
                  key={k.key}
                  className={getKeyStatusClass(k)}
                  onClick={() => onVirtualKeyPress && onVirtualKeyPress(shiftPressed ? k.key.toUpperCase() : k.key)}
                >
                  <span className="ko-char">{displayKo}</span>
                  <span className="en-char">{displayEn}</span>
                </button>
              );
            })}

            {rowIdx === 2 && (
              <button
                className="vkey key-special key-backspace"
                onClick={() => onVirtualKeyPress && onVirtualKeyPress('Backspace')}
              >
                ⌫
              </button>
            )}
          </div>
        ))}

        {/* Spacebar Row */}
        <div className="keyboard-row row-space">
          <button
            className={`vkey key-space ${targetKey === 'space' || targetKey === ' ' ? 'target-key' : ''}`}
            onClick={() => onVirtualKeyPress && onVirtualKeyPress(' ')}
          >
            SPACEBAR (띄어쓰기)
          </button>
        </div>
      </div>

      {/* Finger Legend */}
      <div className="finger-legend">
        <div className="legend-item"><span className="dot finger-left-pinky"></span> Left Pinky</div>
        <div className="legend-item"><span className="dot finger-left-ring"></span> Left Ring</div>
        <div className="legend-item"><span className="dot finger-left-middle"></span> Left Middle</div>
        <div className="legend-item"><span className="dot finger-left-index"></span> Left Index (Consonants)</div>
        <div className="legend-item"><span className="dot finger-right-index"></span> Right Index (Vowels)</div>
        <div className="legend-item"><span className="dot finger-right-middle"></span> Right Middle</div>
        <div className="legend-item"><span className="dot finger-right-ring"></span> Right Ring</div>
        <div className="legend-item"><span className="dot finger-right-pinky"></span> Right Pinky</div>
      </div>
    </div>
  );
}
