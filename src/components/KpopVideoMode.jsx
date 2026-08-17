import React, { useState, useEffect, useRef, useCallback } from 'react';
import { KPOP_SONG_PRESETS, VOWEL_PRONUNCIATION_GUIDE } from '../utils/kpopSongs';
import { PREPARED_SRT_LIBRARY } from '../utils/preparedLyrics';
import { VIDEO_SRT_MAPPINGS, findMappingByVideoId } from '../utils/videoSrtMapping';
import { parseSRTContent, parseSRTTimeToSeconds, exportLyricsToSRT } from '../utils/srtParser';
import { decomposeHangulChar, composeHangul, getQWERTYKeyFromEvent, romanizeSyllable, romanizeHangulWord } from '../utils/hangul';
import { sound } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';
import { Play, Tv, Music, Sparkles, BookOpen, Type, Upload, FileText, X, ChevronRight, FolderOpen, Folder, ExternalLink, Table, Repeat, Download, Edit3, Clock, Check, Locate } from 'lucide-react';

export default function KpopVideoMode({ onAddXp }) {
  const [selectedSongIdx, setSelectedSongIdx] = useState(0);
  const [customUrl, setCustomUrl] = useState('');
  const [activeVideoId, setActiveVideoId] = useState(KPOP_SONG_PRESETS[0].id);

  // Custom uploaded or prepared SRT lyrics state
  const [customLyrics, setCustomLyrics] = useState(null);
  const [customTrackTitle, setCustomTrackTitle] = useState('');
  const [showSrtModal, setShowSrtModal] = useState(false);
  const [showLibraryModal, setShowLibraryModal] = useState(false);
  const [libraryTab, setLibraryTab] = useState('grid'); // 'grid' | 'table'
  const [rawSrtText, setRawSrtText] = useState('');

  const currentPreset = KPOP_SONG_PRESETS[selectedSongIdx];
  const song = {
    id: activeVideoId,
    title: customLyrics ? (customTrackTitle || 'Custom SRT Lyrics Video') : (currentPreset ? currentPreset.title : 'YouTube Video'),
    artist: customLyrics ? 'SRT Lyrics' : (currentPreset ? currentPreset.artist : 'K-Pop Track'),
    lyrics: customLyrics || (currentPreset ? currentPreset.lyrics : [
      { start: 0, end: 10, ko: '한국어 가사 srt 파일 업로드 가능', rom: 'han-gug-eo ga-sa srt fa-il eop-ro-deu ga-neung', en: 'Upload your own SRT subtitle file!' }
    ])
  };

  const [activeLineIdx, setActiveLineIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [isLineLoopEnabled, setIsLineLoopEnabled] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Typing practice state
  const [typedKeys, setTypedKeys] = useState('');
  const [typedText, setTypedText] = useState('');
  const [activeKeyPressed, setActiveKeyPressed] = useState([]);

  // Timestamp editing state
  const [editingLineIdx, setEditingLineIdx] = useState(-1);
  const [editTimeValue, setEditTimeValue] = useState('');

  // Format seconds into MM:SS.s display
  const formatTimeMinutesSeconds = (sec) => {
    const s = Math.max(0, sec || 0);
    const m = Math.floor(s / 60);
    const remainder = (s % 60).toFixed(1);
    const parts = remainder.split('.');
    const wholeSecs = String(parts[0]).padStart(2, '0');
    return `${m}:${wholeSecs}${parts[1] && parts[1] !== '0' ? '.' + parts[1] : ''}`;
  };

  // Update timestamp in state
  const updateLineTimestamp = (lineIdx, newStartSeconds) => {
    const currentList = Array.from(song.lyrics);
    if (!currentList[lineIdx]) return;
    const targetLine = { ...currentList[lineIdx] };
    const duration = (targetLine.end > targetLine.start) ? (targetLine.end - targetLine.start) : 3;
    targetLine.start = Math.max(0, parseFloat(newStartSeconds) || 0);
    targetLine.end = targetLine.start + duration;
    currentList[lineIdx] = targetLine;

    setCustomLyrics(currentList);
  };

  // Sync line timestamp to current video playback time
  const handleSyncToCurrentTime = (e, lineIdx) => {
    e.stopPropagation();
    const roundedTime = Math.round(currentTime * 10) / 10;
    updateLineTimestamp(lineIdx, roundedTime);
    sound.playKeyPress();
  };

  // Export updated lyrics to downloadable SRT file
  const handleExportSrt = () => {
    const srtContent = exportLyricsToSRT(song.lyrics);
    const blob = new Blob([srtContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const filename = (song.title || 'lyrics').toLowerCase().replace(/[^a-z0-9_-]/g, '_') + '.srt';
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    sound.playCorrect();
  };

  const playerRef = useRef(null);
  const fileInputRef = useRef(null);
  const lyricsContainerRef = useRef(null);
  const activeRowRef = useRef(null);

  // Auto-scroll lyrics container to center active line when activeLineIdx or autoScrollEnabled changes
  useEffect(() => {
    if (autoScrollEnabled && activeRowRef.current && lyricsContainerRef.current) {
      const container = lyricsContainerRef.current;
      const activeRow = activeRowRef.current;

      const containerHeight = container.clientHeight;
      const rowOffsetTop = activeRow.offsetTop;
      const rowHeight = activeRow.clientHeight;

      const targetScrollTop = rowOffsetTop - (containerHeight / 2) + (rowHeight / 2);

      container.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: 'smooth'
      });
    }
  }, [activeLineIdx, autoScrollEnabled]);

  // Extract YouTube Video ID
  const extractVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : url.trim();
  };

  const handleLoadCustomUrl = async (e) => {
    e.preventDefault();
    const id = extractVideoId(customUrl);
    if (id) {
      setActiveVideoId(id);
      setSelectedSongIdx(-1);

      // Auto-match prepared SRT mapping if available
      const mapped = findMappingByVideoId(id);
      if (mapped) {
        await handleLoadPreparedSrt(mapped);
      }
    } else {
      alert('Please enter a valid YouTube URL');
    }
  };

  // Process SRT File Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const parsed = parseSRTContent(content);
      if (parsed.length > 0) {
        setCustomLyrics(parsed);
        const fileNameClean = file.name.replace(/\.[^/.]+$/, "");
        setCustomTrackTitle(fileNameClean);
        setSelectedSongIdx(-1);
        setActiveLineIdx(0);

        // Auto-match video mapping by filename or title
        const mapped = VIDEO_SRT_MAPPINGS.find(m => 
          m.srtFilename.toLowerCase() === file.name.toLowerCase() ||
          m.id.toLowerCase() === fileNameClean.toLowerCase() ||
          fileNameClean.toLowerCase().includes(m.title.toLowerCase())
        );

        if (mapped && mapped.youtubeIds.length > 0) {
          setActiveVideoId(mapped.youtubeIds[0]);
        }

        sound.playCorrect();
        alert(`✅ Loaded ${parsed.length} lyric lines from ${file.name}${mapped ? ` & switched video to "${mapped.title}"` : ''}!`);
      } else {
        alert('Could not parse SRT file. Please ensure it follows standard SRT format.');
      }
    };
    reader.readAsText(file);
  };

  // Process pasted SRT text
  const handleParsePastedSrt = () => {
    const parsed = parseSRTContent(rawSrtText);
    if (parsed.length > 0) {
      setCustomLyrics(parsed);
      setCustomTrackTitle('Pasted SRT Lyrics');
      setSelectedSongIdx(-1);
      setActiveLineIdx(0);
      setShowSrtModal(false);
      sound.playCorrect();
      alert(`✅ Loaded ${parsed.length} lyric lines!`);
    } else {
      alert('Could not parse SRT text. Check timestamps format (e.g. 00:00:05,000 --> 00:00:10,000).');
    }
  };

  // Load Prepared SRT File from /lyrics/ folder & auto-play mapped video URL
  const handleLoadPreparedSrt = useCallback(async (item, silent = false) => {
    try {
      const srtPath = item.path || item.srtPath;
      const res = await fetch(srtPath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const parsed = parseSRTContent(text);
      if (parsed.length > 0) {
        setCustomLyrics(parsed);
        setCustomTrackTitle(`${item.title} - ${item.artist}`);
        
        // Lookup video mapping by ID or path
        const mapped = findMappingByVideoId(item.youtubeId) || 
                       VIDEO_SRT_MAPPINGS.find(m => m.srtPath === srtPath || m.srtFilename === item.filename || m.id === item.id);
        
        const targetVideoId = item.youtubeId || (mapped && mapped.youtubeIds && mapped.youtubeIds[0]);

        const presetIdx = KPOP_SONG_PRESETS.findIndex(p => p.id === targetVideoId || p.title.toLowerCase() === item.title.toLowerCase());
        setSelectedSongIdx(presetIdx !== -1 ? presetIdx : 0);
        setActiveLineIdx(0);

        if (targetVideoId) {
          setActiveVideoId(targetVideoId);
        }

        setShowLibraryModal(false);
        if (!silent) {
          sound.playCorrect();
          alert(`✅ Loaded prepared SRT lyrics & switched video for "${item.title}" (${parsed.length} lines)!`);
        }
      } else {
        if (!silent) alert('Could not parse the prepared SRT file.');
      }
    } catch (err) {
      console.error('Failed to load prepared SRT file:', err);
      if (!silent) alert(`Could not load SRT file from ${item.path || item.srtPath}. Ensure it is present in public/lyrics/ folder.`);
    }
  }, []);

  // Auto-load default song (DRIP) video & full SRT subtitles on initial mount
  useEffect(() => {
    const dripItem = PREPARED_SRT_LIBRARY.find(item => item.id === 'babymonster_drip') || {
      id: 'babymonster_drip',
      title: 'DRIP',
      artist: 'BABYMONSTER (베이비몬스터)',
      youtubeId: 'Zp-Jhuhq0bQ',
      path: '/lyrics/BABYMONSTER-DRIP.srt',
      filename: 'BABYMONSTER-DRIP.srt'
    };
    handleLoadPreparedSrt(dripItem, true);
  }, [handleLoadPreparedSrt]);

  // Sync lyrics time ticker & sentence loop option
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const time = playerRef.current.getCurrentTime();
          setCurrentTime(time);

          if (isLineLoopEnabled) {
            const activeLine = song.lyrics[activeLineIdx];
            if (activeLine && typeof activeLine.start === 'number' && typeof activeLine.end === 'number') {
              // If video reaches or exceeds line end (or jumps outside line range), loop back to start timestamp
              if (time >= activeLine.end || time < activeLine.start - 0.5) {
                playerRef.current.seekTo(activeLine.start, true);
                setTypedKeys('');
                setTypedText('');
                return;
              }
            }
          } else {
            const matchedIdx = song.lyrics.findIndex(line => time >= line.start && time < line.end);
            if (matchedIdx !== -1 && matchedIdx !== activeLineIdx) {
              setActiveLineIdx(matchedIdx);
              setTypedKeys('');
              setTypedText('');
            }
          }
        }
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, song.lyrics, activeLineIdx, isLineLoopEnabled]);

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

  const seekToTime = (seconds) => {
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(seconds, true);
      setCurrentTime(seconds);
    }
  };

  const activeLine = song.lyrics[activeLineIdx] || song.lyrics[0] || { ko: '', rom: '', en: '' };

  // Decompose Hangul into word-level & syllable-level breakdown for Beginners
  const getVowelBreakdown = (text) => {
    if (!text) return [];
    // Split by words first
    const words = text.trim().split(/\s+/);
    const tokens = [];

    for (const word of words) {
      const wordRom = romanizeHangulWord(word);
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const dec = decomposeHangulChar(char);
        if (dec.jungseong) {
          const guide = VOWEL_PRONUNCIATION_GUIDE[dec.jungseong] || { name: dec.jungseong, sound: dec.jungseong, color: '#8b5cf6' };
          const syllableRom = romanizeSyllable(char);
          tokens.push({
            char,
            word,
            wordRom,
            isFirstInWord: i === 0,
            consonant: dec.choseong,
            vowel: dec.jungseong,
            batchim: dec.jongseong,
            syllableRom,
            vowelName: guide.name,
            vowelSound: guide.sound,
            color: guide.color
          });
        }
      }
    }
    return tokens;
  };

  const vowelTokens = getVowelBreakdown(activeLine.ko);

  // Typing practice logic
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
      {/* Header Controls & YouTube URL / SRT Loader */}
      <div className="kpop-controls-bar glassmorphism">
        <div className="song-presets-group">
          <span className="preset-label">Featured K-Pop Videos:</span>
          {KPOP_SONG_PRESETS.map((p, idx) => (
            <button
              key={p.id}
              className={`preset-btn ${selectedSongIdx === idx ? 'active' : ''}`}
              onClick={async (e) => {
                e.currentTarget.blur();
                setSelectedSongIdx(idx);
                setActiveVideoId(p.id);
                setActiveLineIdx(0);

                const mappedItem = PREPARED_SRT_LIBRARY.find(item => item.youtubeId === p.id || item.title.toLowerCase() === p.title.toLowerCase()) ||
                                   (p.srtPath ? { path: p.srtPath, title: p.title, artist: p.artist, youtubeId: p.id } : null);
                if (mappedItem) {
                  await handleLoadPreparedSrt(mappedItem, true);
                  setSelectedSongIdx(idx);
                } else {
                  setCustomLyrics(null);
                  setCustomTrackTitle('');
                }
              }}
            >
              <Music size={14} />
              <span>{p.title} - {p.artist}</span>
            </button>
          ))}
        </div>

        {/* Action Row: Custom YouTube URL & Upload SRT */}
        <div className="controls-action-row">
          <form className="youtube-url-form" onSubmit={handleLoadCustomUrl}>
            <Tv className="yt-icon" size={18} />
            <input
              type="text"
              className="yt-url-input"
              placeholder="Paste YouTube Link (e.g. https://www.youtube.com/watch?v=x3eqqoZPV_E)"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
            />
            <button type="submit" className="load-url-btn">
              Load Video
            </button>
          </form>

          {/* Upload & Prepared SRT Buttons */}
          <div className="srt-upload-group">
            <button
              className="srt-btn library-btn"
              onClick={() => setShowLibraryModal(true)}
            >
              <FolderOpen size={16} /> SRT Library
            </button>

            <input
              type="file"
              ref={fileInputRef}
              accept=".srt,.txt"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <button
              className="srt-btn upload-file-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={16} /> Upload .SRT
            </button>

            <button
              className="srt-btn paste-text-btn"
              onClick={() => setShowSrtModal(true)}
            >
              <FileText size={16} /> Paste SRT
            </button>
          </div>
        </div>
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
            <div className="cc-hangul">{activeLine.ko}</div>
            {activeLine.en && <div className="cc-english">"{activeLine.en}"</div>}
          </div>

          {/* Loop & Practice Toggle Bar */}
          <div className="video-actions-bar">

            <button
              className={`action-btn ${isLineLoopEnabled ? 'active-green' : ''}`}
              onClick={(e) => {
                e.currentTarget.blur();
                const nextLoopState = !isLineLoopEnabled;
                setIsLineLoopEnabled(nextLoopState);
                if (nextLoopState) {
                  const currentLine = song.lyrics[activeLineIdx];
                  if (currentLine && typeof currentLine.start === 'number') {
                    seekToTime(currentLine.start);
                  }
                }
              }}
              title="Repeat the selected lyric sentence segment forever"
            >
              <Repeat size={18} /> {isLineLoopEnabled ? 'Loop Sentence ON' : 'Loop Sentence'}
            </button>

            <button
              className={`action-btn ${practiceMode ? 'active-purple' : ''}`}
              onClick={(e) => {
                e.currentTarget.blur();
                setPracticeMode(!practiceMode);
              }}
            >
              <Type size={18} /> {practiceMode ? 'Typing Practice ON' : 'Practice Typing'}
            </button>
          </div>
        </div>

        {/* Right Column: Time-synced Lyrics List */}
        <div className="lyrics-panel glassmorphism">
          <div className="panel-header">
            <div className="panel-header-left">
              <BookOpen size={18} className="purple-icon" />
              <h3>Synced Lyrics ({song.title})</h3>
            </div>
            <div className="header-actions">
              <button
                className={`auto-scroll-btn ${autoScrollEnabled ? 'active' : ''}`}
                onClick={() => setAutoScrollEnabled(!autoScrollEnabled)}
                title={autoScrollEnabled ? 'Auto-center lyrics to current timestamp (Click to disable)' : 'Auto-center lyrics to current timestamp (Click to enable)'}
              >
                <Locate size={14} /> {autoScrollEnabled ? 'Auto-Center ON' : 'Auto-Center OFF'}
              </button>
              <button className="export-srt-btn" onClick={handleExportSrt} title="Save and download updated .srt subtitle file">
                <Download size={14} /> Export SRT
              </button>
            </div>
          </div>

          <div className="lyrics-scroll-list" ref={lyricsContainerRef}>
            {song.lyrics.map((line, idx) => {
              const isActive = idx === activeLineIdx;
              const isEditingThisTime = editingLineIdx === idx;
              return (
                <div
                  key={idx}
                  ref={isActive ? activeRowRef : null}
                  className={`lyric-row-item ${isActive ? 'active-line' : ''}`}
                  onClick={() => {
                    setActiveLineIdx(idx);
                    seekToTime(line.start);
                  }}
                >
                  <div className="time-badge-container" onClick={(e) => e.stopPropagation()}>
                    {isEditingThisTime ? (
                      <div className="time-badge-editor">
                        <input
                          type="text"
                          className="time-edit-input"
                          value={editTimeValue}
                          onChange={(e) => setEditTimeValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              const parsedSec = parseSRTTimeToSeconds(editTimeValue);
                              updateLineTimestamp(idx, parsedSec);
                              setEditingLineIdx(-1);
                            } else if (e.key === 'Escape') {
                              setEditingLineIdx(-1);
                            }
                          }}
                          autoFocus
                        />
                        <button
                          className="time-save-btn"
                          title="Save Timestamp"
                          onClick={() => {
                            const parsedSec = parseSRTTimeToSeconds(editTimeValue);
                            updateLineTimestamp(idx, parsedSec);
                            setEditingLineIdx(-1);
                          }}
                        >
                          <Check size={12} />
                        </button>
                      </div>
                    ) : (
                      <div
                        className="time-badge"
                        title="Click to edit timestamp manually"
                        onClick={() => {
                          setEditingLineIdx(idx);
                          setEditTimeValue(formatTimeMinutesSeconds(line.start));
                        }}
                      >
                        {formatTimeMinutesSeconds(line.start)}
                        <Edit3 size={10} className="edit-time-icon" />
                      </div>
                    )}
                    <button
                      className="sync-now-btn"
                      title="Sync timestamp to current video playback time"
                      onClick={(e) => handleSyncToCurrentTime(e, idx)}
                    >
                      <Clock size={10} /> Sync
                    </button>
                  </div>

                  <div className="lyric-content">
                    <div className="lyric-ko">{line.ko}</div>
                    {line.en && <div className="lyric-en">{line.en}</div>}
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
          </div>
        </div>

        {/* Vowels & Word Pronunciation List Tokens */}
        <div className="vowels-tokens-grid">
          {vowelTokens.map((token, idx) => (
            <div key={idx} className="vowel-token-box" style={{ borderColor: token.color }}>
              <div className="token-syllable">{token.char}</div>
              <div className="token-vowel-badge" style={{ backgroundColor: token.color }}>
                {token.syllableRom} ({token.vowel})
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

      {/* Paste SRT Text Modal */}
      {showSrtModal && (
        <div className="modal-overlay" onClick={() => setShowSrtModal(false)}>
          <div className="modal-content glassmorphism srt-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <FileText size={22} className="purple-icon" />
                <h3>Paste Your Custom SRT Subtitle Lyrics</h3>
              </div>
              <button className="close-btn" onClick={() => setShowSrtModal(false)}>
                <X size={20} />
              </button>
            </div>

            <p className="modal-instruction">
              Paste standard <code>.srt</code> text below. Lines can contain Korean, Romanization, or pipe <code>|</code> separated columns.
            </p>

            <textarea
              className="srt-textarea"
              rows={10}
              placeholder={`Example SRT format:\n\n1\n00:00:09,000 --> 00:00:14,000\n가만히 보고만 있지 말고\nga-man-hi bo-go-man it-ji mal-go\nDon't just stand there watching\n\n2\n00:00:14,000 --> 00:00:18,000\n나를 봐 내 이름은 Super Shy`}
              value={rawSrtText}
              onChange={(e) => setRawSrtText(e.target.value)}
            />

            <div className="modal-actions">
              <button className="card-nav-btn reset-btn" onClick={() => setShowSrtModal(false)}>
                Cancel
              </button>
              <button className="card-nav-btn primary" onClick={handleParsePastedSrt}>
                Apply Custom SRT Lyrics
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Prepared SRT Library & Mapping Table Modal */}
      {showLibraryModal && (
        <div className="modal-overlay" onClick={() => setShowLibraryModal(false)}>
          <div className="modal-content glassmorphism library-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <FolderOpen size={24} className="accent-icon" />
                <h3>Prepared SRT Lyrics & Mapping Table</h3>
              </div>
              <button className="close-btn" onClick={() => setShowLibraryModal(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Modal Tabs Header */}
            <div className="library-tabs-bar">
              <button
                className={`tab-toggle-btn ${libraryTab === 'grid' ? 'active' : ''}`}
                onClick={() => setLibraryTab('grid')}
              >
                <FolderOpen size={15} /> Prepared Songs ({PREPARED_SRT_LIBRARY.length})
              </button>
              <button
                className={`tab-toggle-btn ${libraryTab === 'table' ? 'active' : ''}`}
                onClick={() => setLibraryTab('table')}
              >
                <Table size={15} /> Video & SRT Mapping Table ({VIDEO_SRT_MAPPINGS.length})
              </button>
            </div>

            {libraryTab === 'grid' && (
              <>
                <p className="modal-instruction">
                  Select any pre-formatted <code>.srt</code> subtitle file saved in the project's <code>/public/lyrics/</code> folder to practice synced typing!
                </p>

                <div className="prepared-srt-grid">
                  {PREPARED_SRT_LIBRARY.map((item) => (
                    <div key={item.id} className="prepared-srt-card glassmorphism">
                      <div className="srt-card-header">
                        <div className="srt-card-badge">.SRT</div>
                        <h4>{item.title}</h4>
                      </div>
                      <p className="srt-card-artist">{item.artist}</p>
                      <p className="srt-card-desc">{item.description}</p>
                      <div className="srt-card-footer">
                        <code className="srt-path-code">{item.filename}</code>
                        <button
                          className="card-nav-btn primary srt-load-card-btn"
                          onClick={() => handleLoadPreparedSrt(item)}
                        >
                          Load SRT
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {libraryTab === 'table' && (
              <div className="mapping-table-wrapper">
                <p className="modal-instruction">
                  Map of YouTube Video URLs / Video IDs to their prepared <code>.srt</code> subtitle files in <code>/public/lyrics/</code>.
                </p>
                <div className="table-scroll-container">
                  <table className="srt-mapping-table">
                    <thead>
                      <tr>
                        <th>Track / Artist</th>
                        <th>YouTube Video URL</th>
                        <th>Video ID</th>
                        <th>SRT File</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {VIDEO_SRT_MAPPINGS.map((mapItem) => (
                        <tr key={mapItem.id}>
                          <td className="track-cell">
                            <strong>{mapItem.title}</strong>
                            <span className="artist-sub">{mapItem.artist}</span>
                          </td>
                          <td className="url-cell">
                            <a
                              href={mapItem.primaryUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="yt-link"
                            >
                              {mapItem.primaryUrl} <ExternalLink size={12} />
                            </a>
                            {mapItem.alternateUrls?.map((alt, idx) => (
                              <div key={idx} className="alt-url">
                                Alt: <a href={alt} target="_blank" rel="noreferrer" className="yt-link">{alt}</a>
                              </div>
                            ))}
                          </td>
                          <td className="id-cell">
                            {mapItem.youtubeIds.map(id => (
                              <code key={id} className="yt-id-badge">{id}</code>
                            ))}
                          </td>
                          <td className="srt-cell">
                            <code className="srt-path-badge">{mapItem.srtFilename}</code>
                          </td>
                          <td className="action-cell">
                            <button
                              className="card-nav-btn primary table-load-btn"
                              onClick={() => handleLoadPreparedSrt({
                                path: mapItem.srtPath,
                                youtubeId: mapItem.youtubeIds[0],
                                title: mapItem.title,
                                artist: mapItem.artist
                              })}
                            >
                              Load Pair
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="folder-tip-box">
              <Folder size={18} />
              <span>
                <strong>Tip:</strong> You can add new video mappings in <code>src/utils/videoSrtMapping.js</code> or place <code>.srt</code> files into <code>/public/lyrics/</code>.
              </span>
            </div>

            <div className="modal-actions">
              <button className="card-nav-btn reset-btn" onClick={() => setShowLibraryModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
