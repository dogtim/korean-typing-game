import React, { useEffect, useRef } from 'react';
import { FANCHANT_TYPES, DEFAULT_LEAD_TIME_SEC, getFanchantStatusAtTime } from '../utils/fanchantData';
import { Info } from 'lucide-react';
import { sound } from '../utils/audio';

export default function FanchantPrompter({
  fanchant,
  currentTime,
  isPlaying,
  onSeek,
  activeLine
}) {
  const cues = fanchant?.cues || [];
  const status = getFanchantStatusAtTime(cues, currentTime);
  const { activeCue, upcomingCue, countdownSec, countdownPercent } = status;

  // Track cue transitions to play crowd cheer SFX or sound
  const lastActiveCueIdRef = useRef(null);
  useEffect(() => {
    if (activeCue && activeCue.id !== lastActiveCueIdRef.current) {
      lastActiveCueIdRef.current = activeCue.id;
      if (isPlaying && sound) {
        if (typeof sound.playCorrect === 'function') {
          sound.playCorrect();
        } else if (typeof sound.playSuccess === 'function') {
          sound.playSuccess();
        }
      }
    } else if (!activeCue) {
      lastActiveCueIdRef.current = null;
    }
  }, [activeCue, isPlaying]);

  if (!fanchant) return null;

  const typeConfig = activeCue
    ? FANCHANT_TYPES[activeCue.type.toUpperCase()] || FANCHANT_TYPES.SHOUT
    : upcomingCue
      ? FANCHANT_TYPES[upcomingCue.type.toUpperCase()] || FANCHANT_TYPES.SHOUT
      : FANCHANT_TYPES.SHOUT;

  const isCountingDown = typeof countdownSec === 'number' && countdownSec <= (upcomingCue?.leadTimeSec ?? DEFAULT_LEAD_TIME_SEC);

  return (
    <div className={`fanchant-prompter-stage glassmorphism ${activeCue ? 'is-chant-active' : ''}`}>
      {/* Main Prompter Center Area */}
      <div className="prompter-main-canvas">
        {/* Background Singer Lyrics (Dimmed) */}
        {activeLine?.ko && (
          <div className="prompter-bg-singer">
            <span className="singer-lyrics">"{activeLine.ko}"</span>
          </div>
        )}

        {/* Dynamic Display: ACTIVE CHANT vs COUNTDOWN vs WAITING */}
        {activeCue ? (
          <div className="chant-active-card animate-chant-pop">
            <div className="chant-type-pill" style={{ backgroundColor: typeConfig.color }}>
              <span>{typeConfig.icon} {typeConfig.label}</span>
              <span className="chant-now-tag">🔥 NOW SHOUT!</span>
            </div>

            <div className="chant-giant-text">
              {activeCue.chant}
            </div>

            {activeCue.meaning && (
              <div className="chant-sub-info">
                <div className="chant-meaning">💡 {activeCue.meaning}</div>
              </div>
            )}

            {activeCue.tip && (
              <div className="chant-tip-bubble">
                <Info size={13} />
                <span>{activeCue.tip}</span>
              </div>
            )}
          </div>
        ) : isCountingDown && upcomingCue ? (
          <div className="chant-countdown-card">
            <div className="countdown-ring-container">
              <svg className="countdown-svg" viewBox="0 0 100 100">
                <circle className="countdown-bg-circle" cx="50" cy="50" r="42" />
                <circle
                  className="countdown-progress-circle"
                  cx="50"
                  cy="50"
                  r="42"
                  style={{
                    strokeDashoffset: (1 - countdownPercent) * 264
                  }}
                />
              </svg>
              <div className="countdown-number-box">
                <span className="countdown-number">
                  {countdownSec < 0.6 ? '🔥' : Math.ceil(countdownSec)}
                </span>
                <span className="countdown-unit">
                  {countdownSec < 0.6 ? '喊！' : '秒後'}
                </span>
              </div>
            </div>

            <div className="upcoming-chant-preview">
              <div className="upcoming-label-row">
                <span className="upcoming-badge" style={{ borderColor: typeConfig.color, color: typeConfig.color }}>
                  {typeConfig.icon} 即將應援 · {typeConfig.label}
                </span>
              </div>
              <div className="upcoming-chant-text">
                {upcomingCue.chant}
              </div>
              {upcomingCue.tip && (
                <div className="upcoming-tip-text">
                  {upcomingCue.tip}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="chant-idle-card">
            {upcomingCue && (
              <div className="next-cue-peek">
                <span className="peek-label">下一處應援預告：</span>
                <span className="peek-time">[{formatTimeSec(upcomingCue.start)}]</span>
                <strong className="peek-chant">【{upcomingCue.chant}】</strong>
                <button
                  type="button"
                  className="peek-jump-btn"
                  onClick={() => onSeek && onSeek(Math.max(0, upcomingCue.start - (upcomingCue.leadTimeSec ?? DEFAULT_LEAD_TIME_SEC)))}
                  title="跳轉到該句開始前"
                >
                  直達這段 ⏩
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function formatTimeSec(sec) {
  if (typeof sec !== 'number' || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
