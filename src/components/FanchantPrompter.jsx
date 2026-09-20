import React, { useEffect, useRef } from 'react';
import { FANCHANT_TYPES, getFanchantStatusAtTime } from '../utils/fanchantData';
import { RotateCcw, Info } from 'lucide-react';
import { sound } from '../utils/audio';

export default function FanchantPrompter({
  fanchant,
  currentTime,
  isPlaying,
  onSeek,
  activeLine
}) {
  const showRoman = true;
  const soundEnabled = true;
  const lightstickActive = true;

  const cues = fanchant?.cues || [];
  const status = getFanchantStatusAtTime(cues, currentTime);
  const { activeCue, upcomingCue, countdownSec, countdownPercent } = status;

  // Track cue transitions to play crowd cheer SFX or sound
  const lastActiveCueIdRef = useRef(null);
  useEffect(() => {
    if (activeCue && activeCue.id !== lastActiveCueIdRef.current) {
      lastActiveCueIdRef.current = activeCue.id;
      if (soundEnabled && isPlaying && sound) {
        if (typeof sound.playCorrect === 'function') {
          sound.playCorrect();
        } else if (typeof sound.playSuccess === 'function') {
          sound.playSuccess();
        }
      }
    } else if (!activeCue) {
      lastActiveCueIdRef.current = null;
    }
  }, [activeCue, soundEnabled, isPlaying]);

  if (!fanchant) return null;

  const typeConfig = activeCue
    ? FANCHANT_TYPES[activeCue.type.toUpperCase()] || FANCHANT_TYPES.SHOUT
    : upcomingCue
      ? FANCHANT_TYPES[upcomingCue.type.toUpperCase()] || FANCHANT_TYPES.SHOUT
      : FANCHANT_TYPES.SHOUT;

  const isCountingDown = typeof countdownSec === 'number' && countdownSec <= (upcomingCue?.leadTimeSec || 2.0);

  return (
    <div className={`fanchant-prompter-stage glassmorphism ${activeCue ? 'is-chant-active' : ''}`}>
      {/* Main Prompter Center Area */}
      <div className="prompter-main-canvas">
        {/* Background Singer Lyrics (Dimmed) */}
        {activeLine?.ko && (
          <div className="prompter-bg-singer">
            <span className="singer-label">🎤 歌手演唱中：</span>
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

            {showRoman && (
              <div className="chant-sub-info">
                {activeCue.roman && <div className="chant-roman">{activeCue.roman}</div>}
                {activeCue.meaning && <div className="chant-meaning">💡 {activeCue.meaning}</div>}
              </div>
            )}

            {activeCue.tip && (
              <div className="chant-tip-bubble">
                <Info size={13} />
                <span>{activeCue.tip}</span>
              </div>
            )}

            <button
              type="button"
              className="chant-reseek-btn"
              onClick={() => onSeek && onSeek(Math.max(0, activeCue.start - 1.5))}
              title="倒回 1.5 秒重新練習這一句應援"
            >
              <RotateCcw size={13} /> 重新練習這句
            </button>
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
              {showRoman && upcomingCue.roman && (
                <div className="upcoming-roman-text">
                  {upcomingCue.roman}
                </div>
              )}
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
                  onClick={() => onSeek && onSeek(Math.max(0, upcomingCue.start - 2.0))}
                  title="跳轉到該句前 2 秒"
                >
                  直達這段 ⏩
                </button>
              </div>
            )}
          </div>
        )}

        {/* Animated Virtual Lightstick in Corner */}
        {lightstickActive && (
          <div className={`virtual-lightstick-widget ${isPlaying ? 'is-swinging' : ''} ${activeCue ? 'is-blasting' : ''}`}>
            <div className="lightstick-glow-orb" />
            <svg className="lightstick-svg" viewBox="0 0 60 120" fill="none">
              {/* Stick Handle */}
              <rect x="25" y="55" width="10" height="60" rx="5" fill="#1e1e28" stroke="#4a4a5a" strokeWidth="2" />
              <rect x="27" y="65" width="6" height="20" rx="3" fill="#ff3366" opacity="0.8" />
              {/* Lightstick Head / Horns / Orb */}
              <circle cx="30" cy="35" r="22" fill="url(#lightstick-gradient)" stroke="#ff6699" strokeWidth="3" />
              {/* Horns for BABYMONSTER Devil motif */}
              <path d="M 16 26 Q 10 10 20 18" stroke="#ff3366" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M 44 26 Q 50 10 40 18" stroke="#ff3366" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Inner Logo */}
              <text x="30" y="41" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">😈</text>
              <defs>
                <radialGradient id="lightstick-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff77aa" />
                  <stop offset="80%" stopColor="#ff0055" />
                  <stop offset="100%" stopColor="#990033" />
                </radialGradient>
              </defs>
            </svg>
            <div className="lightstick-label">MONSTIEZ</div>
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
