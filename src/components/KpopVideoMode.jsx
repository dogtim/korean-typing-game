import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { KPOP_SONG_PRESETS, VOWEL_PRONUNCIATION_GUIDE } from '../utils/kpopSongs';
import { PREPARED_SRT_LIBRARY } from '../utils/preparedLyrics';
import { VIDEO_SRT_MAPPINGS, findMappingByVideoId } from '../utils/videoSrtMapping';
import { parseSRTContent, parseSRTTimeToSeconds } from '../utils/srtParser';
import { decomposeHangulChar, composeHangul, getQWERTYKeyFromEvent, romanizeSyllable, romanizeHangulWord } from '../utils/hangul';
import { sound } from '../utils/audio';
import VirtualKeyboard from './VirtualKeyboard';
import VideoSelectModal from './VideoSelectModal';
import {
  Sparkles,
  Type,
  Repeat,
  RotateCcw,
  X,
  Edit3,
  Clock,
  Check,
  Locate,
  Mic,
  Square,
  Volume2,
  Bookmark,
  Film,
  ChevronDown
} from 'lucide-react';

export default function KpopVideoMode({
  onAddXp,
  onSwitchToGame: _onSwitchToGame,
  loopTarget,
  onClearLoopTarget,
  onOpenReviewModal,
  missedCount = 0,
  autoPlayVideoId = null,
  onAutoPlayHandled,
  selectedSong = null,
  onSelectSong = null
}) {
  const [selectedSongIdx, setSelectedSongIdx] = useState(() => selectedSong?.index ?? 0);
  const [activeVideoId, setActiveVideoId] = useState(() => selectedSong?.preset?.id || KPOP_SONG_PRESETS[0].id);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Custom uploaded or prepared SRT lyrics state
  const [customLyrics, setCustomLyrics] = useState(null);
  const [customTrackTitle, setCustomTrackTitle] = useState('');

  const currentPreset = KPOP_SONG_PRESETS[selectedSongIdx];
  const song = useMemo(() => ({
    id: activeVideoId,
    title: customLyrics ? (customTrackTitle || 'Custom SRT Lyrics Video') : (currentPreset ? currentPreset.title : 'YouTube Video'),
    artist: customLyrics ? 'SRT Lyrics' : (currentPreset ? currentPreset.artist : 'K-Pop Track'),
    lyrics: customLyrics || (currentPreset ? currentPreset.lyrics : [
      { start: 0, end: 10, ko: '한국어 가사 srt 파일 업로드 가능', rom: 'han-gug-eo ga-sa srt fa-il eop-ro-deu ga-neung', en: 'Upload your own SRT subtitle file!' }
    ])
  }), [activeVideoId, customLyrics, customTrackTitle, currentPreset]);

  const [activeLineIdx, setActiveLineIdx] = useState(0);
  const activeLine = song.lyrics[activeLineIdx] || song.lyrics[0] || { ko: '', rom: '', en: '' };
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [isLineLoopEnabled, setIsLineLoopEnabled] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Multi-line selection and consecutive range loop state
  const [selectedRange, setSelectedRange] = useState(null); // [startIdx, endIdx] or null
  const [anchorLineIdx, setAnchorLineIdx] = useState(0);
  const isMultiSelected = selectedRange && selectedRange[0] < selectedRange[1];
  const rangeCount = isMultiSelected ? (selectedRange[1] - selectedRange[0] + 1) : 1;

  // Typing practice state
  const [_typedKeys, setTypedKeys] = useState('');
  const [typedText, setTypedText] = useState('');
  const [activeKeyPressed, setActiveKeyPressed] = useState([]);

  // Timestamp editing state
  const [editingLineIdx, setEditingLineIdx] = useState(-1);
  const [editTimeValue, setEditTimeValue] = useState('');

  // Voice recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  const [isPlayingRecordedAudio, setIsPlayingRecordedAudio] = useState(false);

  // Web Speech API state (ko-KR)
  const [speechTranscript, setSpeechTranscript] = useState('');
  const [speechAccuracy, setSpeechAccuracy] = useState(null);
  const recognitionRef = useRef(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recordedAudioRef = useRef(null);

  // Revoke object URL and stop recognition on unmount or URL change
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (recordedAudioRef.current) {
        recordedAudioRef.current.pause();
      }
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
      stopSpeechRecognition();
    };
  }, [recordedAudioUrl]);

  // Calculate Hangul character match percentage between target line and detected speech
  const calculateSpeechAccuracy = (target, detected) => {
    if (!target || !detected) return 0;
    const cleanTarget = target.replace(/[^\uAC00-\uD7A3]/g, '');
    const cleanDetected = detected.replace(/[^\uAC00-\uD7A3]/g, '');
    if (!cleanTarget || !cleanDetected) return 0;

    let matches = 0;
    const targetChars = cleanTarget.split('');
    const detectedChars = cleanDetected.split('');

    let tIdx = 0;
    for (let dChar of detectedChars) {
      const foundIdx = targetChars.indexOf(dChar, tIdx);
      if (foundIdx !== -1) {
        matches++;
        tIdx = foundIdx + 1;
      }
    }

    const score = Math.round((matches / Math.max(targetChars.length, 1)) * 100);
    return Math.min(100, score);
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSpeechTranscript('⚠️ Web Speech API is not supported in this browser. Please use Chrome, Edge, or Safari for voice recognition.');
      return;
    }

    try {
      stopSpeechRecognition();

      const recognition = new SpeechRecognition();
      recognition.lang = 'ko-KR';
      recognition.continuous = true;
      recognition.interimResults = true;

      setSpeechTranscript('');
      setSpeechAccuracy(null);

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setSpeechTranscript(currentTranscript);
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setSpeechTranscript('⚠️ Microphone permission denied for speech recognition. Please allow microphone access in your browser settings.');
        } else if (event.error === 'network') {
          setSpeechTranscript('⚠️ Speech recognition network error. Please check your internet connection.');
        } else if (event.error !== 'no-speech') {
          setSpeechTranscript(`⚠️ Speech recognition notice: ${event.error}`);
        }
      };

      recognition.start();
      recognitionRef.current = recognition;
    } catch (e) {
      console.error('Failed to start speech recognition:', e);
      setSpeechTranscript('⚠️ Unable to start voice detection. Please check browser microphone permissions.');
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (_e) { }
      recognitionRef.current = null;
    }
  };

  // Update accuracy score whenever speech transcript or target lyric line changes
  useEffect(() => {
    if (speechTranscript && activeLine?.ko) {
      const acc = calculateSpeechAccuracy(activeLine.ko, speechTranscript);
      setSpeechAccuracy(acc);
    }
  }, [speechTranscript, activeLine?.ko]);

  const startVoiceRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Your browser does not support audio recording (navigator.mediaDevices is unavailable). Please ensure you are opening this site on http://localhost or via HTTPS.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl((prevUrl) => {
          if (prevUrl) URL.revokeObjectURL(prevUrl);
          return url;
        });
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      startSpeechRecognition();
    } catch (err) {
      console.error('Error accessing microphone:', err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        alert('Microphone access was denied. Please allow microphone permissions in your browser address bar (click the lock/camera icon near the URL) and try again.');
      } else {
        alert(`Could not open microphone: ${err.message || err.name || 'Unknown error'}. Make sure your microphone is plugged in.`);
      }
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    stopSpeechRecognition();
  };

  const toggleVoiceRecording = (e) => {
    e?.currentTarget?.blur();
    if (isRecording) {
      stopVoiceRecording();
    } else {
      if (isPlayingRecordedAudio && recordedAudioRef.current) {
        recordedAudioRef.current.pause();
        setIsPlayingRecordedAudio(false);
      }
      startVoiceRecording();
    }
  };

  const togglePlayRecordedAudio = (e) => {
    e?.currentTarget?.blur();
    if (!recordedAudioUrl) return;

    if (isPlayingRecordedAudio && recordedAudioRef.current) {
      recordedAudioRef.current.pause();
      recordedAudioRef.current.currentTime = 0;
      setIsPlayingRecordedAudio(false);
    } else {
      const audio = new Audio(recordedAudioUrl);
      recordedAudioRef.current = audio;
      audio.onended = () => setIsPlayingRecordedAudio(false);
      audio.onerror = () => setIsPlayingRecordedAudio(false);
      audio.play().then(() => {
        setIsPlayingRecordedAudio(true);
      }).catch((err) => {
        console.error('Playback error:', err);
        setIsPlayingRecordedAudio(false);
      });
    }
  };

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

  const playerRef = useRef(null);
  const lyricsContainerRef = useRef(null);
  const activeRowRef = useRef(null);
  const [listPadding, setListPadding] = useState(200);

  // Measure container height dynamically to calculate exact padding for vertical centering
  useEffect(() => {
    if (!lyricsContainerRef.current) return;
    const el = lyricsContainerRef.current;
    const updatePadding = () => {
      const h = el.clientHeight;
      if (h > 80) {
        // Half container height minus half typical row height (~28px)
        const pad = Math.max(60, Math.floor(h / 2 - 28));
        setListPadding(pad);
      }
    };
    updatePadding();
    const ro = new ResizeObserver(updatePadding);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Smoothly center the active lyric line in the container viewport
  const centerActiveLyric = useCallback((smooth = true) => {
    if (!autoScrollEnabled) return;
    const container = lyricsContainerRef.current;
    const activeRow = activeRowRef.current;
    if (!container || !activeRow) return;

    const containerRect = container.getBoundingClientRect();
    const rowRect = activeRow.getBoundingClientRect();
    if (containerRect.height === 0 || rowRect.height === 0) return;

    // Calculate row position relative to container's scroll canvas
    const rowContentTop = (rowRect.top - containerRect.top) + container.scrollTop;
    const targetScrollTop = rowContentTop - (containerRect.height / 2) + (rowRect.height / 2);

    container.scrollTo({
      top: Math.max(0, targetScrollTop),
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, [autoScrollEnabled]);

  // Trigger centering when activeLineIdx, autoScrollEnabled, or listPadding changes
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      centerActiveLyric(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeLineIdx, autoScrollEnabled, listPadding, centerActiveLyric]);

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

  // Auto-load initial song video & full SRT subtitles on initial mount
  useEffect(() => {
    const targetPreset = selectedSong?.preset;
    let targetItem = null;

    if (targetPreset) {
      targetItem = PREPARED_SRT_LIBRARY.find(
        item => item.youtubeId === targetPreset.id || item.title.toLowerCase() === targetPreset.title.toLowerCase()
      ) || (targetPreset.srtPath ? {
        path: targetPreset.srtPath,
        title: targetPreset.title,
        artist: targetPreset.artist,
        youtubeId: targetPreset.id,
        filename: targetPreset.srtFilename
      } : null);
    }

    if (!targetItem) {
      targetItem = PREPARED_SRT_LIBRARY.find(item => item.id === 'babymonster_drip') || {
        id: 'babymonster_drip',
        title: 'DRIP',
        artist: 'BABYMONSTER (베이비몬스터)',
        youtubeId: 'Zp-Jhuhq0bQ',
        path: '/lyrics/BABYMONSTER-DRIP.srt',
        filename: 'BABYMONSTER-DRIP.srt'
      };
    }

    handleLoadPreparedSrt(targetItem, true);
    if (typeof selectedSong?.index === 'number') {
      setSelectedSongIdx(selectedSong.index);
    }
  }, [handleLoadPreparedSrt, selectedSong]);

  // Handle Review Loop Target: automatically load song, jump to timestamp, and loop sentence
  useEffect(() => {
    if (!loopTarget) return;

    const applyLoopTarget = async () => {
      const targetVideoId = loopTarget.youtubeId || loopTarget.songId;
      if (targetVideoId && targetVideoId !== activeVideoId) {
        const presetIdx = KPOP_SONG_PRESETS.findIndex(p => p.id === targetVideoId);
        if (presetIdx !== -1) {
          setSelectedSongIdx(presetIdx);
          onSelectSong?.({ preset: KPOP_SONG_PRESETS[presetIdx], index: presetIdx });
        }
        setActiveVideoId(targetVideoId);

        const mappedItem = PREPARED_SRT_LIBRARY.find(item => item.youtubeId === targetVideoId || item.id === targetVideoId) ||
          (loopTarget.srtPath ? { path: loopTarget.srtPath, youtubeId: targetVideoId, title: loopTarget.songTitle, artist: loopTarget.artist } : null);
        if (mappedItem) {
          await handleLoadPreparedSrt(mappedItem, true);
        }
      }

      // Activate Line Loop
      setIsLineLoopEnabled(true);

      // Find matching line by start timestamp or text
      const targetStart = loopTarget.start;
      const matchedIdx = song.lyrics.findIndex(l => Math.abs(l.start - targetStart) < 0.6 || (l.ko && l.ko.trim() === loopTarget.ko.trim()));
      const finalIdx = matchedIdx !== -1 ? matchedIdx : (loopTarget.lineIdx || 0);
      setActiveLineIdx(finalIdx);

      // Seek & Play
      if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
        playerRef.current.seekTo(targetStart, true);
        if (typeof playerRef.current.playVideo === 'function') {
          playerRef.current.playVideo();
        }
      }
    };

    applyLoopTarget();
  }, [loopTarget, activeVideoId, handleLoadPreparedSrt, onSelectSong, song.lyrics]);

  // Sync lyrics time ticker & sentence/range loop option
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const time = playerRef.current.getCurrentTime();
          setCurrentTime(time);

          if (isLineLoopEnabled) {
            const isMulti = selectedRange && selectedRange[0] < selectedRange[1];
            const rangeStartIdx = isMulti ? selectedRange[0] : activeLineIdx;
            const rangeEndIdx = isMulti ? selectedRange[1] : activeLineIdx;

            const startLine = song.lyrics[rangeStartIdx];
            const endLine = song.lyrics[rangeEndIdx];

            if (startLine && endLine && typeof startLine.start === 'number') {
              const loopStart = startLine.start;
              const loopEnd = (typeof endLine.end === 'number' && endLine.end > loopStart)
                ? endLine.end
                : (endLine.start + 3);

              // If video reaches or exceeds loop range end (or jumps outside range), loop back to start
              if (time >= loopEnd || time < loopStart - 0.5) {
                playerRef.current.seekTo(loopStart, true);
                setActiveLineIdx(rangeStartIdx);
                setTypedKeys('');
                setTypedText('');
                return;
              }

              // Follow progression of lines within the selected multi-line range
              if (isMulti) {
                const matchedIdx = song.lyrics.findIndex((line, lIdx) =>
                  lIdx >= rangeStartIdx && lIdx <= rangeEndIdx && time >= line.start && time < (line.end || line.start + 3)
                );
                if (matchedIdx !== -1 && matchedIdx !== activeLineIdx) {
                  setActiveLineIdx(matchedIdx);
                  setTypedKeys('');
                  setTypedText('');
                }
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
  }, [isPlaying, song.lyrics, activeLineIdx, isLineLoopEnabled, selectedRange]);

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
        try { playerRef.current.destroy(); } catch (_e) { }
      }
    };
  }, [activeVideoId]);

  const seekToTime = (seconds) => {
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(seconds, true);
      setCurrentTime(seconds);
    }
  };

  // Decompose Hangul into word-level & syllable-level breakdown for Beginners
  const getVowelBreakdown = (text) => {
    if (!text) return [];
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

  const handleSelectSongPreset = useCallback(async (p, idx) => {
    setSelectedSongIdx(idx);
    setActiveVideoId(p.id);
    setActiveLineIdx(0);

    const mappedItem = PREPARED_SRT_LIBRARY.find(
      item => item.youtubeId === p.id || item.title.toLowerCase() === p.title.toLowerCase()
    ) || (p.srtPath ? { path: p.srtPath, title: p.title, artist: p.artist, youtubeId: p.id } : null);

    if (mappedItem) {
      await handleLoadPreparedSrt(mappedItem, true);
      setSelectedSongIdx(idx);
    } else {
      setCustomLyrics(null);
      setCustomTrackTitle('');
    }

    onSelectSong?.({ preset: p, index: idx });
  }, [handleLoadPreparedSrt, onSelectSong]);

  // Auto-load a song just registered from the Admin page (freshly written to
  // KPOP_SONG_PRESETS via the local admin API + Vite HMR) and start playing it
  useEffect(() => {
    if (!autoPlayVideoId) return;
    const idx = KPOP_SONG_PRESETS.findIndex(p => p.id === autoPlayVideoId);
    if (idx !== -1) {
      handleSelectSongPreset(KPOP_SONG_PRESETS[idx], idx);
    }
    onAutoPlayHandled?.();
  }, [autoPlayVideoId, handleSelectSongPreset, onAutoPlayHandled]);

  return (
    <div className="kpop-mode-container">
      {/* Header Controls Bar */}
      <div className="kpop-controls-bar glassmorphism">
        <div className="song-presets-group">
          <button
            type="button"
            className="select-video-trigger-btn"
            onClick={() => setIsVideoModalOpen(true)}
            title="Choose a K-Pop video to practice"
          >
            <div className="trigger-icon-wrap">
              <Film size={17} />
            </div>
            <div className="trigger-text-wrap">
              <span className="trigger-label">Select Video</span>
              <span className="trigger-current-song">
                {song.title} <span className="trigger-artist">({song.artist})</span>
              </span>
            </div>
            <ChevronDown size={16} className="trigger-chevron" />
          </button>
        </div>

        {/* Action Controls: Review Notebook */}
        {onOpenReviewModal && (
          <div className="kpop-controls-actions">
            <button
              type="button"
              className={`kpop-review-btn ${missedCount > 0 ? 'has-missed' : ''}`}
              onClick={onOpenReviewModal}
              title="Open Incorrect Answers Review Notebook"
            >
              <div className="kpop-review-icon-wrap">
                <Bookmark size={15} />
              </div>
              <span className="kpop-review-text">Review Missed</span>
              <span className="kpop-review-count-badge">
                {missedCount}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Active Loop Review Notification Banner */}
      {loopTarget && isLineLoopEnabled && (
        <div className="active-loop-review-banner glassmorphism">
          <div className="loop-banner-info">
            <Repeat size={18} className="loop-banner-icon rotating" />
            <div className="loop-banner-texts">
              <div className="loop-banner-title">
                <strong>Looping Missed Review Sentence:</strong> {loopTarget.songTitle && <span className="song-sub">({loopTarget.songTitle})</span>}
              </div>
              <div className="loop-banner-text">"{loopTarget.ko}"</div>
              <div className="loop-banner-time">
                <Clock size={12} /> {loopTarget.timestampStr || `${loopTarget.start}s - ${loopTarget.end}s`}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="loop-banner-dismiss-btn"
            onClick={() => {
              setIsLineLoopEnabled(false);
              if (onClearLoopTarget) onClearLoopTarget();
            }}
            title="Stop looping review sentence"
          >
            Stop Looping
          </button>
        </div>
      )}

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
                  const targetStartIdx = isMultiSelected ? selectedRange[0] : activeLineIdx;
                  const currentLine = song.lyrics[targetStartIdx];
                  if (currentLine && typeof currentLine.start === 'number') {
                    seekToTime(currentLine.start);
                    setActiveLineIdx(targetStartIdx);
                  }
                }
              }}
              title={isMultiSelected
                ? `Repeat selected ${rangeCount}-line loop range forever`
                : "Repeat the selected lyric sentence segment forever"}
            >
              <Repeat size={18} /> {isLineLoopEnabled
                ? (isMultiSelected ? `Loop Range ON (${rangeCount} lines)` : 'Loop Sentence ON')
                : (isMultiSelected ? `Loop Range (${rangeCount} lines)` : 'Loop Sentence')}
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

            <button
              className={`action-btn ${isRecording ? 'active-red' : ''}`}
              onClick={toggleVoiceRecording}
              title={isRecording ? "Click to stop and save voice recording" : "Click to start recording voice"}
            >
              {isRecording ? (
                <>
                  <Square size={18} fill="currentColor" /> Stop Recording
                </>
              ) : (
                <>
                  <Mic size={18} /> Record Voice
                </>
              )}
            </button>

            {recordedAudioUrl && (
              <button
                className={`action-btn ${isPlayingRecordedAudio ? 'active-blue' : ''}`}
                onClick={togglePlayRecordedAudio}
                title={isPlayingRecordedAudio ? "Click to stop playing voice recording" : "Click to play voice recording"}
              >
                {isPlayingRecordedAudio ? (
                  <>
                    <Square size={18} fill="currentColor" /> Stop Playback
                  </>
                ) : (
                  <>
                    <Volume2 size={18} /> Play Recording
                  </>
                )}
              </button>
            )}
          </div>

          {/* Web Speech API Pronunciation Check Display */}
          {(isRecording || speechTranscript) && (
            <div className="speech-recognition-box">
              <div className="speech-header">
                <Sparkles size={16} className="sparkle-icon" />
                <span>Korean Pronunciation Check (ko-KR)</span>
                {isRecording && <span className="listening-badge">Listening...</span>}
              </div>

              <div className={`speech-transcript-area ${!speechTranscript ? 'placeholder' : ''}`}>
                {speechTranscript || (isRecording ? 'Listening to your Korean pronunciation...' : 'No speech detected.')}
              </div>

              {activeLine?.ko && speechTranscript && (
                <div className="speech-comparison">
                  <div>
                    Target Lyric: <span className="target-text">{activeLine.ko}</span>
                  </div>
                  {typeof speechAccuracy === 'number' && (
                    <div className={`accuracy-badge ${speechAccuracy >= 70 ? 'high' : speechAccuracy >= 40 ? 'medium' : 'low'}`}>
                      {speechAccuracy}% Match {speechAccuracy >= 70 ? '🎉 Great!' : speechAccuracy >= 40 ? '👍 Keep Going' : '💡 Try Again'}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Time-synced Lyrics List */}
        <div className="lyrics-panel glassmorphism">
          <div className="panel-header">
            <div className="panel-header-left">
              <span className="lyrics-header-hint">
                💡 <kbd>Shift</kbd> + <kbd>Click</kbd> to select &amp; loop multiple consecutive lines
              </span>
            </div>
            <div className="header-actions">
              <button
                type="button"
                className={`auto-scroll-btn ${autoScrollEnabled ? 'active' : ''}`}
                onClick={() => {
                  const nextState = !autoScrollEnabled;
                  setAutoScrollEnabled(nextState);
                  if (nextState) {
                    requestAnimationFrame(() => centerActiveLyric(true));
                  }
                }}
                title={autoScrollEnabled ? 'Auto-Center ON: Active lyric is kept centered. Click to disable.' : 'Auto-Center OFF: Free scrolling mode. Click to enable auto-centering.'}
                aria-pressed={autoScrollEnabled}
              >
                <span className="btn-icon-wrapper">
                  <Locate size={13} className="auto-scroll-icon" />
                </span>
                <span className="btn-text">Auto-Center</span>
                <span className={`status-pill ${autoScrollEnabled ? 'on' : 'off'}`}>
                  <span className="status-dot" />
                  {autoScrollEnabled ? 'ON' : 'OFF'}
                </span>
              </button>
            </div>
          </div>

          {/* Multi-Line Range Loop Banner */}
          {isMultiSelected && (
            <div className="multi-range-loop-banner glassmorphism">
              <div className="range-banner-info">
                <Repeat size={16} className={`range-loop-icon ${isLineLoopEnabled ? 'rotating' : ''}`} />
                <div className="range-banner-text">
                  <div className="range-title">
                    {isLineLoopEnabled ? '🔁 Multi-Line Loop Active' : '⏸️ Multi-Line Range Selected'}
                    <span className="range-count-tag">{rangeCount} lines</span>
                  </div>
                  <div className="range-details">
                    Lines <strong>#{selectedRange[0] + 1}</strong> ~ <strong>#{selectedRange[1] + 1}</strong> ({formatTimeMinutesSeconds(song.lyrics[selectedRange[0]]?.start)} ~ {formatTimeMinutesSeconds(song.lyrics[selectedRange[1]]?.end || song.lyrics[selectedRange[1]]?.start + 3)})
                  </div>
                </div>
              </div>
              <div className="range-banner-buttons">
                <button
                  type="button"
                  className="range-btn replay"
                  onClick={() => {
                    const startLine = song.lyrics[selectedRange[0]];
                    if (startLine && typeof startLine.start === 'number') {
                      seekToTime(startLine.start);
                      setActiveLineIdx(selectedRange[0]);
                    }
                    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
                      playerRef.current.playVideo();
                    }
                  }}
                  title="Replay from start of the selected loop range"
                >
                  <RotateCcw size={12} /> Replay
                </button>
                <button
                  type="button"
                  className="range-btn clear"
                  onClick={() => {
                    setSelectedRange([activeLineIdx, activeLineIdx]);
                  }}
                  title="Clear multi-line selection"
                >
                  <X size={12} /> Clear Range
                </button>
              </div>
            </div>
          )}

          <div
            className={`lyrics-scroll-list ${autoScrollEnabled ? 'auto-center-mode' : ''}`}
            ref={lyricsContainerRef}
            style={{
              paddingTop: autoScrollEnabled ? `${listPadding}px` : '8px',
              paddingBottom: autoScrollEnabled ? `${listPadding}px` : '16px'
            }}
          >
            {song.lyrics.map((line, idx) => {
              const isActive = idx === activeLineIdx;
              const isEditingThisTime = editingLineIdx === idx;
              const isInRange = isMultiSelected && idx >= selectedRange[0] && idx <= selectedRange[1];
              const isRangeStart = isMultiSelected && idx === selectedRange[0];
              const isRangeEnd = isMultiSelected && idx === selectedRange[1];

              return (
                <div
                  key={idx}
                  ref={isActive ? activeRowRef : null}
                  className={`lyric-row-item ${isActive ? 'active-line' : ''} ${isInRange ? 'in-loop-range' : ''} ${isRangeStart ? 'range-start' : ''} ${isRangeEnd ? 'range-end' : ''}`}
                  onClick={(e) => {
                    if (e.shiftKey) {
                      // Multi-line selection with Shift + Click
                      const anchor = (typeof anchorLineIdx === 'number' && anchorLineIdx >= 0) ? anchorLineIdx : activeLineIdx;
                      const start = Math.min(anchor, idx);
                      const end = Math.max(anchor, idx);
                      setSelectedRange([start, end]);
                      setIsLineLoopEnabled(true); // Automatically loop the selected range
                      setActiveLineIdx(start);
                      if (song.lyrics[start] && typeof song.lyrics[start].start === 'number') {
                        seekToTime(song.lyrics[start].start);
                      }
                      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
                        playerRef.current.playVideo();
                      }
                    } else {
                      // Single line click
                      setAnchorLineIdx(idx);
                      setSelectedRange([idx, idx]);
                      setActiveLineIdx(idx);
                      seekToTime(line.start);
                    }
                  }}
                  title="Click to play · Shift + Click to select multiple consecutive lyrics to loop"
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
                    <div className="lyric-ko-row">
                      <div className="lyric-ko">{line.ko}</div>
                      {isRangeStart && <span className="range-badge-pill start">🔁 Loop Start</span>}
                      {isRangeEnd && <span className="range-badge-pill end">🔁 Loop End</span>}
                    </div>
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
            <h3>Vowel Breakdown Helper </h3>
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

      {/* Video Selection Modal Popup */}
      <VideoSelectModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onSelectSong={handleSelectSongPreset}
        selectedSongIdx={selectedSongIdx}
        activeVideoId={activeVideoId}
      />
    </div>
  );
}
