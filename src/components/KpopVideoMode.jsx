import React, { useState, useEffect, useRef, useCallback } from 'react';
import { KPOP_SONG_PRESETS, VOWEL_PRONUNCIATION_GUIDE } from '../utils/kpopSongs';
import { decomposeHangulChar, composeHangul, getQWERTYKeyFromEvent } from '../utils/hangul';
import { sound } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';
import { Play, Tv, Music, Sparkles, BookOpen, Volume2, Type, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';

export default function KpopVideoMode({ onAddXp }) {
  const [selectedSongIdx, setSelectedSongIdx] = useState(0);
  const [customUrl, setCustomUrl] = useState('');
  const [activeVideoId, setActiveVideoId] = useState(KPOP_SONG_PRESETS[0].id);

  const song = KPOP_SONG_PRESETS[selectedSongIdx] || {
    id: activeVideoId,
    title: 'Custom YouTube Video',
    artist: 'K-Pop Track',
    lyrics: [
      { start: 0, end: 10, ko: '한국어 노래 가사', rom: 'han-gug-eo no-rae ga-sa', en: 'Korean Song Lyrics' }
    ]
  };

  const [activeLineIdx, setActiveLineIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [practiceMode, setPracticeMode] = useState(false); // Enable typing practice mode

  // Typing practice state
  const [typedKeys, setTypedKeys] = useState('');
  const [typedText, setTypedText] = useState('');
  const [activeKeyPressed, setActiveKeyPressed] = useState([]);

  const playerRef = useRef(null);

  // Extract YouTube Video ID from any URL format
  const extractVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : url.trim();
  };

  const handleLoadCustomUrl = (e) => {
    e.preventDefault();
    const id = extractVideoId(customUrl);
    if (id) {
      setActiveVideoId(id);
      setSelectedSongIdx(-1);
    } else {
      alert('Please enter a valid YouTube URL');
    }
  };

  // Sync lyrics time ticker
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const time = playerRef.current.getCurrentTime();
          setCurrentTime(time);

          // Find current lyric line based on timestamp
          const matchedIdx = song.lyrics.findIndex(line => time >= line.start && time < line.end);
          if (matchedIdx !== -1 && matchedIdx !== activeLineIdx) {
            setActiveLineIdx(matchedIdx);
            setTypedKeys('');
            setTypedText('');
          }
        }
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, song.lyrics, activeLineIdx]);

  // Load YouTube IFrame API
  useEffect(() => {
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('youtube-player-element', {
          videoId: activeVideoId,
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else {
                setIsPlaying(false);
              }
            }
          }
        });
      }
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = initPlayer;
      document.body.appendChild(tag);
    } else {
      initPlayer();
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy(); } catch (e) {}
      }
    };
  }, [activeVideoId]);

  // Jump player to specific timestamp
  const seekToTime = (seconds) => {
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(seconds, true);
      setCurrentTime(seconds);
    }
  };

  const activeLine = song.lyrics[activeLineIdx] || song.lyrics[0];

  // Helper: Decompose active Korean line into character breakdown & Vowels
  const getVowelBreakdown = (text) => {
    if (!text) return [];
    const tokens = [];
    for (const char of text) {
      if (char === ' ' || !char.trim()) continue;
      const dec = decomposeHangulChar(char);
      if (dec.jungseong) {
        const guide = VOWEL_PRONUNCIATION_GUIDE[dec.jungseong] || { name: dec.jungseong, sound: dec.jungseong, color: '#8b5cf6' };
        tokens.push({
          char,
          consonant: dec.choseong,
          vowel: dec.jungseong,
          batchim: dec.jongseong,
          vowelName: guide.name,
          vowelSound: guide.sound,
          color: guide.color
        });
      }
    }
    return tokens;
  };

  const vowelTokens = getVowelBreakdown(activeLine.ko);

  // Typing practice logic for lyric line
  const handleGlobalKeyDown = useCallback((e) => {
    if (!practiceMode) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      sound.playKeyPress();
      setTypedKeys(prev => {
        const next = prev.slice(0, -1);
        setTypedText(composeHangul(next));
        return next;
      });
      return;
    }

    const pressedKey = getQWERTYKeyFromEvent(e);
    if (pressedKey) {
      e.preventDefault();
      sound.playKeyPress();

      setActiveKeyPressed([pressedKey]);
      setTimeout(() => setActiveKeyPressed([]), 150);

      const keyToAdd = pressedKey === 'space' ? ' ' : pressedKey;
      setTypedKeys(prev => {
        const newKeys = prev + keyToAdd;
        const composed = composeHangul(newKeys);
        setTypedText(composed);

        if (composed.trim() === activeLine.ko.trim()) {
          sound.playCorrect();
          onAddXp(20);
        }
        return newKeys;
      });
    }
  }, [practiceMode, activeLine.ko, onAddXp]);

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown, true);
  }, [handleGlobalKeyDown]);

  return (
    <div className="kpop-mode-container">
      {/* Header Controls & YouTube URL Loader */}
      <div className="kpop-controls-bar glassmorphism">
        <div className="song-presets-group">
          <span className="preset-label">Featured K-Pop Videos:</span>
          {KPOP_SONG_PRESETS.map((p, idx) => (
            <button
              key={p.id}
              className={`preset-btn ${selectedSongIdx === idx ? 'active' : ''}`}
              onClick={(e) => {
                e.currentTarget.blur();
                setSelectedSongIdx(idx);
                setActiveVideoId(p.id);
                setActiveLineIdx(0);
              }}
            >
              <Music size={14} />
              <span>{p.title} - {p.artist}</span>
            </button>
          ))}
        </div>

        {/* Custom YouTube URL Form */}
        <form className="youtube-url-form" onSubmit={handleLoadCustomUrl}>
          <Tv className="yt-icon" size={18} />
          <input
            type="text"
            className="yt-url-input"
            placeholder="Paste YouTube Link (e.g. https://www.youtube.com/watch?v=cxhqqpVk65Q)"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
          />
          <button type="submit" className="load-url-btn">
            Load Video
          </button>
        </form>
      </div>

      {/* Main Grid: YouTube Video + Sync Lyrics CC Overlay */}
      <div className="kpop-main-grid">
        {/* Left Column: YouTube Video & CC Overlay */}
        <div className="video-player-section glassmorphism">
          <div className="video-wrapper">
            <div id="youtube-player-element" className="yt-iframe-container"></div>
          </div>

          {/* CC Style Subtitle Display Banner */}
          <div className="cc-subtitle-overlay">
            <div className="cc-tag">CC SUBTITLES (CLOSED CAPTION)</div>
            <div className="cc-hangul">{activeLine.ko}</div>
            <div className="cc-romanization">[{activeLine.rom}]</div>
            <div className="cc-english">"{activeLine.en}"</div>
          </div>

          {/* Audio Pronounce & Practice Toggle */}
          <div className="video-actions-bar">
            <button
              className="action-btn"
              onClick={(e) => {
                e.currentTarget.blur();
                sound.speakKorean(activeLine.ko);
              }}
            >
              <Volume2 size={18} /> Listen Pronunciation
            </button>

            <button
              className={`action-btn ${practiceMode ? 'active-purple' : ''}`}
              onClick={(e) => {
                e.currentTarget.blur();
                setPracticeMode(!practiceMode);
              }}
            >
              <Type size={18} /> {practiceMode ? 'Typing Practice ON' : 'Practice Typing Lyric'}
            </button>
          </div>
        </div>

        {/* Right Column: Time-synced Lyrics List */}
        <div className="lyrics-panel glassmorphism">
          <div className="panel-header">
            <BookOpen size={18} className="purple-icon" />
            <h3>Synced Lyrics ({song.title})</h3>
          </div>

          <div className="lyrics-scroll-list">
            {song.lyrics.map((line, idx) => {
              const isActive = idx === activeLineIdx;
              return (
                <div
                  key={idx}
                  className={`lyric-row-item ${isActive ? 'active-line' : ''}`}
                  onClick={() => {
                    setActiveLineIdx(idx);
                    seekToTime(line.start);
                  }}
                >
                  <div className="time-badge">
                    {Math.floor(line.start / 60)}:{String(Math.floor(line.start % 60)).padStart(2, '0')}
                  </div>
                  <div className="lyric-content">
                    <div className="lyric-ko">{line.ko}</div>
                    <div className="lyric-rom">{line.rom}</div>
                    <div className="lyric-en">{line.en}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vowel Breakdown Helper Card for Newbies */}
      <div className="vowel-breakdown-card glassmorphism">
        <div className="vowel-card-header">
          <Sparkles className="gold-icon" size={22} />
          <div>
            <h3>Vowel Breakdown Helper (for Newbies & Beginners)</h3>
            <p className="subtitle">
              Learn how vowels (모음) build each Korean word in this line!
            </p>
          </div>
        </div>

        {/* Vowels List Tokens */}
        <div className="vowels-tokens-grid">
          {vowelTokens.map((token, idx) => (
            <div key={idx} className="vowel-token-box" style={{ borderColor: token.color }}>
              <div className="token-syllable">{token.char}</div>
              <div className="token-vowel-badge" style={{ backgroundColor: token.color }}>
                Vowel: {token.vowel} ({token.vowelName})
              </div>
              <div className="token-details">
                <span>Sound: <strong>{token.vowelSound}</strong></span>
                {token.batchim && <span className="batchim-tag">Batchim: {token.batchim}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Vowels Cheat Sheet Reference Bar */}
        <div className="vowel-cheatsheet-bar">
          <span className="cheatsheet-title">Basic Vowels Guide:</span>
          {Object.entries(VOWEL_PRONUNCIATION_GUIDE).slice(0, 10).map(([vChar, info]) => (
            <div key={vChar} className="vowel-pill-item" style={{ backgroundColor: `${info.color}22`, borderColor: info.color }}>
              <span className="v-char" style={{ color: info.color }}>{vChar}</span>
              <span className="v-name">[{info.name}]</span>
              <span className="v-sound">{info.sound.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Lyric Typing Trainer */}
      {practiceMode && (
        <div className="lyric-typing-trainer glassmorphism">
          <div className="trainer-header">
            <h4>Type Along With The K-Pop Song:</h4>
            <span className="target-text-display">{activeLine.ko}</span>
          </div>

          <div className="typed-result-bar">
            <span className="result-text">{typedText || 'Type on physical keyboard...'}</span>
            <span className="cursor-blink">|</span>
          </div>

          <VirtualKeyboard
            targetKey={null}
            activeKeys={activeKeyPressed}
            onVirtualKeyPress={(key) => {
              const pressedKey = key === ' ' ? 'space' : key;
              const keyToAdd = pressedKey === 'space' ? ' ' : pressedKey;
              setTypedKeys(prev => {
                const newKeys = prev + keyToAdd;
                const composed = composeHangul(newKeys);
                setTypedText(composed);
                return newKeys;
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
