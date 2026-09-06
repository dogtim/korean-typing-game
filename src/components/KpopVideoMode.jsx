import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { KPOP_SONG_PRESETS, VOWEL_PRONUNCIATION_GUIDE } from '../utils/kpopSongs';
import { PREPARED_SRT_LIBRARY } from '../utils/preparedLyrics';
import { VIDEO_SRT_MAPPINGS, findMappingByVideoId } from '../utils/videoSrtMapping';
import { parseSRTContent, parseSRTTimeToSeconds, exportLyricsToSRT, downloadSRTFile } from '../utils/srtParser';
import { decomposeHangulChar, composeHangul, getQWERTYKeyFromEvent, romanizeSyllable, romanizeHangulWord } from '../utils/hangul';
import { getHokkienLineBreakdown } from '../utils/hokkien';
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
  ChevronDown,
  Sliders,
  Download,
  Copy,
  Save,
  FileText,
  Play,
  Pause
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
  const [loopBufferSec, setLoopBufferSec] = useState(() => {
    const saved = localStorage.getItem('kpop_loop_buffer_sec');
    return saved !== null ? parseFloat(saved) : 1.0;
  });
  const [isLoopBuffering, setIsLoopBuffering] = useState(false);
  const loopBufferTimeoutRef = useRef(null);
  const isWaitingLoopBufferRef = useRef(false);
  const loopBufferSecRef = useRef(loopBufferSec);
  loopBufferSecRef.current = loopBufferSec;

  const clearLoopBufferTimeout = useCallback(() => {
    if (loopBufferTimeoutRef.current) {
      clearTimeout(loopBufferTimeoutRef.current);
      loopBufferTimeoutRef.current = null;
    }
    isWaitingLoopBufferRef.current = false;
    setIsLoopBuffering(false);
  }, []);

  useEffect(() => {
    return () => {
      clearLoopBufferTimeout();
    };
  }, [clearLoopBufferTimeout]);

  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Live Tap-to-Sync Studio State
  const [isSyncStudioOpen, setIsSyncStudioOpen] = useState(false);
  const [syncToastMessage, setSyncToastMessage] = useState(null);
  const [isSrtPreviewOpen, setIsSrtPreviewOpen] = useState(false);
  const [srtPreviewText, setSrtPreviewText] = useState('');
  const [isSavingSrt, setIsSavingSrt] = useState(false);
  const [startInputStr, setStartInputStr] = useState('');
  const [endInputStr, setEndInputStr] = useState('');

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

  const isHokkienSong = Boolean(
    currentPreset?.language === 'hokkien' ||
    (activeLine?.ko && /[\u4e00-\u9fa5]/.test(activeLine.ko) && !/[가-힣]/.test(activeLine.ko))
  );

  // Calculate character / word match percentage between target line and detected speech
  const calculateSpeechAccuracy = (target, detected) => {
    if (!target || !detected) return 0;

    if (isHokkienSong) {
      // 1. Check Chinese character matches
      const cleanTargetHanzi = target.replace(/[^\u4e00-\u9fa5]/g, '');
      const cleanSpokenHanzi = detected.replace(/[^\u4e00-\u9fa5]/g, '');
      if (cleanTargetHanzi && cleanSpokenHanzi) {
        let matches = 0;
        const targetChars = cleanTargetHanzi.split('');
        for (const dChar of cleanSpokenHanzi) {
          if (targetChars.includes(dChar)) matches++;
        }
        return Math.min(100, Math.round((matches / Math.max(targetChars.length, 1)) * 100));
      }
      // 2. Check Romanized / Tâi-lô matches
      const targetWords = (activeLine.rom || target).toLowerCase().replace(/[^a-z0-9]/g, ' ').trim().split(/\s+/).filter(Boolean);
      const spokenWords = detected.toLowerCase().replace(/[^a-z0-9]/g, ' ').trim().split(/\s+/).filter(Boolean);
      if (targetWords.length > 0 && spokenWords.length > 0) {
        let matches = 0;
        for (const w of spokenWords) {
          if (targetWords.includes(w)) matches++;
        }
        return Math.min(100, Math.round((matches / targetWords.length) * 100));
      }
      return 0;
    }

    // Default Korean matching
    const cleanTarget = target.replace(/[^\uAC00-\uD7A3]/g, '');
    const cleanDetected = detected.replace(/[^\uAC00-\uD7A3]/g, '');
    if (!cleanTarget || !cleanDetected) return 0;

    let matches = 0;
    const targetChars = cleanTarget.split('');
    const detectedChars = cleanDetected.split('');

    let tIdx = 0;
    for (const dChar of detectedChars) {
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
      recognition.lang = isHokkienSong ? 'nan-TW' : 'ko-KR';
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
        } else if (event.error === 'language-not-supported' && isHokkienSong && recognition.lang !== 'zh-TW') {
          // Graceful fallback from nan-TW to zh-TW
          try {
            recognition.lang = 'zh-TW';
            recognition.start();
            return;
          } catch (_e) {}
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
  // Hold Shift to ripple-shift this line and all following lines!
  const handleSyncToCurrentTime = (e, lineIdx) => {
    e.stopPropagation();
    const roundedTime = Math.round(currentTime * 10) / 10;

    if (e.shiftKey) {
      const currentList = customLyrics ? [...customLyrics] : [...song.lyrics];
      const target = currentList[lineIdx];
      if (target) {
        const delta = Math.round((roundedTime - target.start) * 10) / 10;
        for (let i = lineIdx; i < currentList.length; i++) {
          const l = currentList[i];
          const newStart = Math.max(0, Math.round((l.start + delta) * 10) / 10);
          const newEnd = Math.max(newStart + 0.5, Math.round(((l.end || newStart + 3) + delta) * 10) / 10);
          currentList[i] = { ...l, start: newStart, end: newEnd };
        }
        setCustomLyrics(currentList);
        sound.playCorrect();
        setSyncToastMessage(`🌊 Ripple shifted lines #${lineIdx + 1} ~ #${currentList.length} by ${delta > 0 ? '+' : ''}${delta}s!`);
        setTimeout(() => setSyncToastMessage(null), 3000);
        return;
      }
    }

    updateLineTimestamp(lineIdx, roundedTime);
    sound.playKeyPress();
  };

  // Resolved filename for saving and exporting
  const resolvedSrtFilename = useMemo(() => {
    if (currentPreset?.srtFilename) return currentPreset.srtFilename;
    const mapped = findMappingByVideoId(activeVideoId);
    if (mapped?.srtFilename) return mapped.srtFilename;
    const safeTitle = (song.title || 'song').replace(/[^a-zA-Z0-9_-]+/g, '-');
    const safeArtist = (song.artist || 'artist').replace(/[^a-zA-Z0-9_-]+/g, '-');
    return `${safeArtist}-${safeTitle}.srt`.toUpperCase();
  }, [currentPreset, activeVideoId, song.title, song.artist]);

  // Keep input fields synchronized whenever activeLine or activeLineIdx changes
  useEffect(() => {
    if (activeLine) {
      const s = typeof activeLine.start === 'number' ? activeLine.start.toFixed(1) : '0.0';
      const e = typeof activeLine.end === 'number' ? activeLine.end.toFixed(1) : (Number(activeLine.start || 0) + 3).toFixed(1);
      setStartInputStr(s);
      setEndInputStr(e);
    }
  }, [activeLineIdx, activeLine?.start, activeLine?.end]);

  // Toggle video play / pause
  const toggleVideoPlayback = useCallback(() => {
    if (!playerRef.current) return;
    if (isPlaying) {
      if (typeof playerRef.current.pauseVideo === 'function') playerRef.current.pauseVideo();
    } else {
      if (typeof playerRef.current.playVideo === 'function') playerRef.current.playVideo();
    }
  }, [isPlaying]);

  // Update Start Time for active line
  const updateActiveLineStart = useCallback((newStart, syncInputText = true) => {
    const s = Math.max(0, Math.round(newStart * 10) / 10);
    if (syncInputText) {
      setStartInputStr(s.toFixed(1));
    }
    setCustomLyrics((prevCustom) => {
      const baseList = prevCustom || song.lyrics;
      if (!baseList || baseList.length === 0) return prevCustom;
      const currentList = [...baseList];
      const target = currentList[activeLineIdx];
      if (!target) return prevCustom;
      currentList[activeLineIdx] = { ...target, start: s };
      return currentList;
    });
  }, [song.lyrics, activeLineIdx]);

  // Update End Time for active line
  const updateActiveLineEnd = useCallback((newEnd, syncInputText = true) => {
    const e = Math.max(0, Math.round(newEnd * 10) / 10);
    if (syncInputText) {
      setEndInputStr(e.toFixed(1));
    }
    setCustomLyrics((prevCustom) => {
      const baseList = prevCustom || song.lyrics;
      if (!baseList || baseList.length === 0) return prevCustom;
      const currentList = [...baseList];
      const target = currentList[activeLineIdx];
      if (!target) return prevCustom;
      currentList[activeLineIdx] = { ...target, end: e };
      return currentList;
    });
  }, [song.lyrics, activeLineIdx]);

  // Set Start Time = Current Live Video Time
  const setStartToLiveTime = useCallback(() => {
    const stamped = Math.round(currentTime * 10) / 10;
    updateActiveLineStart(stamped, true);
    sound.playKeyPress();
    setSyncToastMessage(`🟢 Set Start Time = ${formatTimeMinutesSeconds(stamped)} (${stamped}s)`);
    setTimeout(() => setSyncToastMessage(null), 2000);
  }, [currentTime, updateActiveLineStart]);

  // Set End Time = Current Live Video Time
  const setEndToLiveTime = useCallback(() => {
    const stamped = Math.round(currentTime * 10) / 10;
    updateActiveLineEnd(stamped, true);
    sound.playKeyPress();
    setSyncToastMessage(`🔴 Set End Time = ${formatTimeMinutesSeconds(stamped)} (${stamped}s)`);
    setTimeout(() => setSyncToastMessage(null), 2000);
  }, [currentTime, updateActiveLineEnd]);

  // Nudge Start Time
  const nudgeActiveLineStart = useCallback((delta) => {
    const target = song.lyrics[activeLineIdx];
    if (!target) return;
    const newStart = Math.max(0, Math.round((target.start + delta) * 10) / 10);
    updateActiveLineStart(newStart, true);
    sound.playKeyPress();
  }, [song.lyrics, activeLineIdx, updateActiveLineStart]);

  // Nudge End Time
  const nudgeActiveLineEnd = useCallback((delta) => {
    const target = song.lyrics[activeLineIdx];
    if (!target) return;
    const currentEnd = (typeof target.end === 'number' && target.end > target.start) ? target.end : target.start + 3;
    const newEnd = Math.max(0, Math.round((currentEnd + delta) * 10) / 10);
    updateActiveLineEnd(newEnd, true);
    sound.playKeyPress();
  }, [song.lyrics, activeLineIdx, updateActiveLineEnd]);

  // Replay active line from start
  const replayActiveLine = useCallback(() => {
    const line = song.lyrics[activeLineIdx];
    if (line && typeof line.start === 'number') {
      seekToTime(line.start);
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
      }
    }
  }, [song.lyrics, activeLineIdx]);

  // Direct save to public/lyrics folder via local Vite dev server API
  const handleSaveSrtToDisk = useCallback(async () => {
    const srtContent = exportLyricsToSRT(song.lyrics);
    if (!srtContent) {
      alert('No lyrics available to export.');
      return;
    }
    setIsSavingSrt(true);
    try {
      const res = await fetch('/api/admin/save-srt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          srtFilename: resolvedSrtFilename,
          srtContent
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        sound.playCorrect();
        setSyncToastMessage(`✅ Successfully saved directly to public/lyrics/${data.filename}!`);
        setTimeout(() => setSyncToastMessage(null), 3500);
      } else {
        downloadSRTFile(resolvedSrtFilename, srtContent);
        setSyncToastMessage(`📥 Downloaded ${resolvedSrtFilename} to your device!`);
        setTimeout(() => setSyncToastMessage(null), 3500);
      }
    } catch (_err) {
      downloadSRTFile(resolvedSrtFilename, srtContent);
      setSyncToastMessage(`📥 Downloaded ${resolvedSrtFilename} to your device!`);
      setTimeout(() => setSyncToastMessage(null), 3500);
    } finally {
      setIsSavingSrt(false);
    }
  }, [song.lyrics, resolvedSrtFilename]);

  // Download .srt file to local machine
  const handleDownloadSrt = useCallback(() => {
    const srtContent = exportLyricsToSRT(song.lyrics);
    if (!srtContent) {
      alert('No lyrics available to export.');
      return;
    }
    downloadSRTFile(resolvedSrtFilename, srtContent);
    sound.playCorrect();
    setSyncToastMessage(`📥 Downloaded ${resolvedSrtFilename}!`);
    setTimeout(() => setSyncToastMessage(null), 3500);
  }, [song.lyrics, resolvedSrtFilename]);

  // Copy full formatted SRT content to clipboard
  const handleCopySrt = useCallback(() => {
    const srtContent = exportLyricsToSRT(song.lyrics);
    if (!srtContent) return;
    navigator.clipboard.writeText(srtContent).then(() => {
      sound.playCorrect();
      setSyncToastMessage('📋 Full SRT copied to clipboard!');
      setTimeout(() => setSyncToastMessage(null), 3000);
    }).catch(() => {
      alert('Could not copy to clipboard.');
    });
  }, [song.lyrics]);

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

              // If video reaches or exceeds loop range end, handle pause buffer before rewinding
              if (time >= loopEnd) {
                if (isWaitingLoopBufferRef.current) {
                  return;
                }

                const currentBufferSec = loopBufferSecRef.current;
                if (currentBufferSec > 0) {
                  isWaitingLoopBufferRef.current = true;
                  setIsLoopBuffering(true);

                  if (playerRef.current) {
                    if (typeof playerRef.current.pauseVideo === 'function') {
                      playerRef.current.pauseVideo();
                    }
                    if (typeof playerRef.current.seekTo === 'function') {
                      playerRef.current.seekTo(loopEnd, true);
                    }
                  }

                  if (loopBufferTimeoutRef.current) {
                    clearTimeout(loopBufferTimeoutRef.current);
                  }

                  loopBufferTimeoutRef.current = setTimeout(() => {
                    isWaitingLoopBufferRef.current = false;
                    setIsLoopBuffering(false);
                    loopBufferTimeoutRef.current = null;

                    if (playerRef.current) {
                      if (typeof playerRef.current.seekTo === 'function') {
                        playerRef.current.seekTo(loopStart, true);
                      }
                      if (typeof playerRef.current.playVideo === 'function') {
                        playerRef.current.playVideo();
                      }
                    }
                    setActiveLineIdx(rangeStartIdx);
                    setTypedKeys('');
                    setTypedText('');
                  }, currentBufferSec * 1000);
                  return;
                } else {
                  // Instant rewind (0s buffer)
                  playerRef.current.seekTo(loopStart, true);
                  setActiveLineIdx(rangeStartIdx);
                  setTypedKeys('');
                  setTypedText('');
                  return;
                }
              }

              // If video jumps backward outside loop segment
              if (time < loopStart - 0.5) {
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
            // When Sync Studio is open, do not auto-advance activeLineIdx based on uncalibrated timestamps
            if (!isSyncStudioOpen) {
              const matchedIdx = song.lyrics.findIndex(line => time >= line.start && time < line.end);
              if (matchedIdx !== -1 && matchedIdx !== activeLineIdx) {
                setActiveLineIdx(matchedIdx);
                setTypedKeys('');
                setTypedText('');
              }
            }
          }
        }
      }, isSyncStudioOpen ? 100 : 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, song.lyrics, activeLineIdx, isLineLoopEnabled, selectedRange, isSyncStudioOpen]);

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
                if (isWaitingLoopBufferRef.current) {
                  clearLoopBufferTimeout();
                }
              } else {
                setIsPlaying(false);
                if (!isWaitingLoopBufferRef.current) {
                  clearLoopBufferTimeout();
                }
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
    clearLoopBufferTimeout();
    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(seconds, true);
      setCurrentTime(seconds);
    }
  };

  // Decompose lyrics into word-level & syllable-level breakdown for Beginners
  const getVowelBreakdown = (text) => {
    if (!text) return [];
    if (isHokkienSong) {
      return getHokkienLineBreakdown(text, activeLine.rom);
    }

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

  // Typing practice logic & Live Sync Studio shortcut handler
  const handleGlobalKeyDown = useCallback((e) => {
    // If Live Sync Studio is active and user is not in a text input or practice mode:
    if (isSyncStudioOpen && !practiceMode && editingLineIdx === -1 && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        toggleVideoPlayback();
        return;
      }
      if (e.key.toLowerCase() === 's' || e.key === '[') {
        e.preventDefault();
        setStartToLiveTime();
        return;
      }
      if (e.key.toLowerCase() === 'e' || e.key === ']') {
        e.preventDefault();
        setEndToLiveTime();
        return;
      }
      if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        replayActiveLine();
        return;
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveLineIdx(prev => Math.max(0, prev - 1));
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveLineIdx(prev => Math.min(song.lyrics.length - 1, prev + 1));
        return;
      }
    }

    if (!practiceMode) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      sound.playKeyPress();
      if (isHokkienSong) {
        setTypedText(prev => prev.slice(0, -1));
        setTypedKeys(prev => prev.slice(0, -1));
        return;
      }
      setTypedKeys(prev => {
        const next = prev.slice(0, -1);
        setTypedText(composeHangul(next));
        return next;
      });
      return;
    }

    if (isHokkienSong) {
      if (e.key === ' ' || (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey)) {
        e.preventDefault();
        sound.playKeyPress();
        const char = e.key;
        setActiveKeyPressed([char.toLowerCase()]);
        setTimeout(() => setActiveKeyPressed([]), 150);

        setTypedText(prev => {
          const next = prev + char;
          const targetText = (activeLine.rom || activeLine.ko || '').toLowerCase().trim();
          if (next.toLowerCase().trim() === targetText) {
            sound.playCorrect();
            onAddXp(20);
          }
          return next;
        });
        setTypedKeys(prev => prev + char);
      }
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
  }, [
    isSyncStudioOpen,
    practiceMode,
    editingLineIdx,
    toggleVideoPlayback,
    setStartToLiveTime,
    setEndToLiveTime,
    replayActiveLine,
    song.lyrics.length,
    isHokkienSong,
    activeLine.ko,
    activeLine.rom,
    onAddXp
  ]);

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown, true);
  }, [handleGlobalKeyDown]);

  const handleSelectSongPreset = useCallback(async (p, idx) => {
    clearLoopBufferTimeout();
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
                <Clock size={12} /> {loopTarget.timestampStr || `${loopTarget.start}s - ${loopTarget.end}s`} · {loopBufferSec}s thinking buffer
              </div>
            </div>
          </div>
          <button
            type="button"
            className="loop-banner-dismiss-btn"
            onClick={() => {
              clearLoopBufferTimeout();
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
          <div className={`cc-subtitle-overlay ${isLoopBuffering ? 'cc-buffering' : ''}`}>
            {isLoopBuffering && (
              <div className="cc-buffer-pill">
                <Clock size={12} className="spin-slow" />
                <span>Thinking Pause ({loopBufferSec}s) · Rewinding soon...</span>
              </div>
            )}
            <div className="cc-hangul">{activeLine.ko}</div>
            {activeLine.rom && <div className="cc-romanization">{activeLine.rom}</div>}
            {activeLine.en && <div className="cc-english">"{activeLine.en}"</div>}
          </div>

          {/* Loop & Practice Toggle Bar */}
          <div className="video-actions-bar">
            <button
              className={`action-btn ${isLineLoopEnabled ? 'active-green' : ''} ${isLoopBuffering ? 'buffering-pulse' : ''}`}
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
                } else {
                  clearLoopBufferTimeout();
                }
              }}
              title={isMultiSelected
                ? `Repeat selected ${rangeCount}-line loop range with ${loopBufferSec}s thinking buffer`
                : `Repeat the selected lyric sentence segment with ${loopBufferSec}s thinking buffer`}
            >
              <Repeat size={18} className={isLineLoopEnabled ? 'rotating' : ''} />
              {isLoopBuffering
                ? `Looping in ${loopBufferSec}s...`
                : isLineLoopEnabled
                  ? (isMultiSelected ? `Loop Range ON (${rangeCount} lines)` : `Loop ON (${loopBufferSec}s buffer)`)
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
              className={`action-btn ${isSyncStudioOpen ? 'active-amber' : ''}`}
              onClick={(e) => {
                e.currentTarget.blur();
                setIsSyncStudioOpen(!isSyncStudioOpen);
              }}
              title="Open Live Tap-to-Sync Studio: Stamp timestamps in real-time as song plays, adjust and export the whole SRT"
            >
              <Sliders size={18} /> {isSyncStudioOpen ? 'Sync Studio ON' : 'Live Sync Studio'}
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

          {/* Loop Buffer Pause Toolbar */}
          {isLineLoopEnabled && (
            <div className="loop-buffer-toolbar glassmorphism">
              <div className="loop-buffer-info">
                <div className="loop-buffer-status-indicator">
                  <span className={`loop-status-dot ${isLoopBuffering ? 'buffering' : 'active'}`} />
                  <span className="loop-status-text">
                    {isLoopBuffering ? `🧠 Thinking pause (${loopBufferSec}s)...` : `🔁 Sentence Loop Active`}
                  </span>
                </div>
                {isLoopBuffering && (
                  <div className="loop-buffer-progress-track">
                    <div
                      key={Date.now()}
                      className="loop-buffer-progress-bar"
                      style={{ animationDuration: `${loopBufferSec}s` }}
                    />
                  </div>
                )}
              </div>

              <div className="loop-buffer-settings">
                <span className="loop-buffer-label">
                  <Clock size={13} /> Thinking Buffer:
                </span>
                <div className="loop-buffer-pills">
                  {[
                    { label: '0s (Off)', val: 0 },
                    { label: '0.5s', val: 0.5 },
                    { label: '1s', val: 1 },
                    { label: '1.5s', val: 1.5 },
                    { label: '2s', val: 2 },
                    { label: '3s', val: 3 },
                  ].map(item => (
                    <button
                      key={item.val}
                      type="button"
                      className={`buffer-pill ${loopBufferSec === item.val ? 'active' : ''}`}
                      onClick={() => {
                        setLoopBufferSec(item.val);
                        loopBufferSecRef.current = item.val;
                        localStorage.setItem('kpop_loop_buffer_sec', item.val.toString());
                      }}
                      title={item.val === 0 ? 'No pause, loop sentence immediately' : `Pause for ${item.val} second${item.val > 1 ? 's' : ''} after sentence before looping`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Live Sync Studio Panel: Separate Start / End Time & Live Time Controls */}
          {isSyncStudioOpen && (
            <div className="sync-studio-panel glassmorphism">
              <div className="sync-studio-header">
                <div className="sync-studio-title-group">
                  <div className="sync-studio-badge">
                    <Sliders size={15} />
                    <span>Sync Studio</span>
                  </div>
                  <div className="live-video-time-pill" title="Live real-time YouTube video playback time">
                    <span className="live-pulse-dot" />
                    <Clock size={16} className="live-clock-icon" />
                    <span className="live-pill-label">Live Video Time:</span>
                    <strong className="live-clock-text">{formatTimeMinutesSeconds(currentTime)}</strong>
                    <span className="live-clock-sec">({currentTime.toFixed(1)}s)</span>
                  </div>
                </div>

                <div className="sync-studio-export-group">
                  <button
                    type="button"
                    className="sync-action-pill play-toggle"
                    onClick={toggleVideoPlayback}
                    title="Play / Pause Video (Shortcut: Space)"
                  >
                    {isPlaying ? <Pause size={13} /> : <Play size={13} />} {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <button
                    type="button"
                    className="sync-action-pill save-disk"
                    onClick={handleSaveSrtToDisk}
                    disabled={isSavingSrt}
                    title="Save directly to public/lyrics folder on local server"
                  >
                    <Save size={13} /> {isSavingSrt ? 'Saving...' : 'Save to Disk'}
                  </button>
                  <button
                    type="button"
                    className="sync-action-pill download"
                    onClick={handleDownloadSrt}
                    title="Download the updated .srt file to your computer"
                  >
                    <Download size={13} /> Download .srt
                  </button>
                  <button
                    type="button"
                    className="sync-action-pill copy"
                    onClick={handleCopySrt}
                    title="Copy formatted SRT content to clipboard"
                  >
                    <Copy size={13} /> Copy SRT
                  </button>
                  <button
                    type="button"
                    className="sync-action-pill preview"
                    onClick={() => {
                      setSrtPreviewText(exportLyricsToSRT(song.lyrics));
                      setIsSrtPreviewOpen(true);
                    }}
                    title="Preview or edit full SRT raw text"
                  >
                    <FileText size={13} /> Preview
                  </button>
                  <button
                    type="button"
                    className="sync-close-btn"
                    onClick={() => setIsSyncStudioOpen(false)}
                    title="Close Live Sync Studio"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Active Sentence Selector & Display */}
              <div className="sync-sentence-card">
                <div className="sync-sentence-nav">
                  <button
                    type="button"
                    className="sentence-nav-btn prev"
                    disabled={activeLineIdx <= 0}
                    onClick={() => setActiveLineIdx(prev => Math.max(0, prev - 1))}
                    title="Previous Sentence (Shortcut: Left Arrow)"
                  >
                    ◀ Prev Line
                  </button>
                  <div className="sentence-counter-badge">
                    Sentence <strong>#{activeLineIdx + 1}</strong> of <strong>{song.lyrics.length}</strong>
                  </div>
                  <button
                    type="button"
                    className="sentence-nav-btn next"
                    disabled={activeLineIdx >= song.lyrics.length - 1}
                    onClick={() => setActiveLineIdx(prev => Math.min(song.lyrics.length - 1, prev + 1))}
                    title="Next Sentence (Shortcut: Right Arrow)"
                  >
                    Next Line ▶
                  </button>
                  <button
                    type="button"
                    className="sentence-replay-btn"
                    onClick={replayActiveLine}
                    title="Seek to Start & Play this line (Shortcut: R)"
                  >
                    <RotateCcw size={13} /> Play Line
                  </button>
                </div>

                <div className="sync-sentence-text-block">
                  <div className="sync-ko-text">{activeLine.ko}</div>
                  {activeLine.rom && <div className="sync-rom-text">{activeLine.rom}</div>}
                  {activeLine.en && <div className="sync-en-text">"{activeLine.en}"</div>}
                </div>
              </div>

              {/* Separate Start & End Time Modification Grid */}
              <div className="sync-times-grid">
                {/* START TIME SECTION */}
                <div className="sync-time-card start-card">
                  <div className="time-card-header">
                    <div className="time-card-title-group">
                      <span className="dot-indicator green" />
                      <span className="time-card-label">START TIME</span>
                    </div>
                    <span className="time-card-formatted">{formatTimeMinutesSeconds(activeLine.start)}</span>
                  </div>

                  <div className="time-input-row">
                    <input
                      type="text"
                      inputMode="decimal"
                      className="time-numeric-input"
                      value={startInputStr}
                      onChange={(e) => {
                        const txt = e.target.value;
                        setStartInputStr(txt);
                        const parsed = parseFloat(txt);
                        if (!isNaN(parsed) && parsed >= 0) {
                          updateActiveLineStart(parsed, false);
                        }
                      }}
                      onBlur={() => {
                        const parsed = parseFloat(startInputStr);
                        if (!isNaN(parsed) && parsed >= 0) {
                          updateActiveLineStart(parsed, true);
                        } else {
                          setStartInputStr(typeof activeLine.start === 'number' ? activeLine.start.toFixed(1) : '0.0');
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') e.target.blur();
                      }}
                      title="Directly edit start time in seconds (e.g. 14.2)"
                    />
                    <span className="time-unit">sec</span>
                    <button
                      type="button"
                      className="set-time-btn start-stamp-btn"
                      onClick={setStartToLiveTime}
                      title="Set Start Time = Current Live Video Time (Shortcut: S or [)"
                    >
                      📍 Set = Live Time ({currentTime.toFixed(1)}s)
                    </button>
                  </div>

                  <div className="time-nudge-row">
                    <span className="nudge-sub-label">Nudge:</span>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineStart(-0.5)}>-0.5s</button>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineStart(-0.1)}>-0.1s</button>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineStart(+0.1)}>+0.1s</button>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineStart(+0.5)}>+0.5s</button>
                    <button
                      type="button"
                      className="nudge-chip seek"
                      onClick={() => seekToTime(activeLine.start)}
                      title="Jump video to Start Time"
                    >
                      Seek ⏩
                    </button>
                  </div>
                </div>

                {/* END TIME SECTION */}
                <div className="sync-time-card end-card">
                  <div className="time-card-header">
                    <div className="time-card-title-group">
                      <span className="dot-indicator red" />
                      <span className="time-card-label">END TIME</span>
                    </div>
                    <span className="time-card-formatted">{formatTimeMinutesSeconds(activeLine.end)}</span>
                  </div>

                  <div className="time-input-row">
                    <input
                      type="text"
                      inputMode="decimal"
                      className="time-numeric-input"
                      value={endInputStr}
                      onChange={(e) => {
                        const txt = e.target.value;
                        setEndInputStr(txt);
                        const parsed = parseFloat(txt);
                        if (!isNaN(parsed) && parsed >= 0) {
                          updateActiveLineEnd(parsed, false);
                        }
                      }}
                      onBlur={() => {
                        const parsed = parseFloat(endInputStr);
                        if (!isNaN(parsed) && parsed >= 0) {
                          updateActiveLineEnd(parsed, true);
                        } else {
                          setEndInputStr(typeof activeLine.end === 'number' ? activeLine.end.toFixed(1) : (Number(activeLine.start || 0) + 3).toFixed(1));
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') e.target.blur();
                      }}
                      title="Directly edit end time in seconds (e.g. 18.5)"
                    />
                    <span className="time-unit">sec</span>
                    <button
                      type="button"
                      className="set-time-btn end-stamp-btn"
                      onClick={setEndToLiveTime}
                      title="Set End Time = Current Live Video Time (Shortcut: E or ])"
                    >
                      🏁 Set = Live Time ({currentTime.toFixed(1)}s)
                    </button>
                  </div>

                  <div className="time-nudge-row">
                    <span className="nudge-sub-label">Nudge:</span>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineEnd(-0.5)}>-0.5s</button>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineEnd(-0.1)}>-0.1s</button>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineEnd(+0.1)}>+0.1s</button>
                    <button type="button" className="nudge-chip" onClick={() => nudgeActiveLineEnd(+0.5)}>+0.5s</button>
                    <button
                      type="button"
                      className="nudge-chip seek"
                      onClick={() => seekToTime(activeLine.end || (activeLine.start + 3))}
                      title="Jump video to End Time"
                    >
                      Seek ⏩
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(isRecording || speechTranscript) && (
            <div className="speech-recognition-box">
              <div className="speech-header">
                <Sparkles size={16} className="sparkle-icon" />
                <span>{isHokkienSong ? 'Taiwanese Pronunciation Check (nan-TW)' : 'Korean Pronunciation Check (ko-KR)'}</span>
                {isRecording && <span className="listening-badge">Listening...</span>}
              </div>

              <div className={`speech-transcript-area ${!speechTranscript ? 'placeholder' : ''}`}>
                {speechTranscript || (isRecording ? (isHokkienSong ? 'Listening to your Taiwanese pronunciation...' : 'Listening to your Korean pronunciation...') : 'No speech detected.')}
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
                    {isLineLoopEnabled ? `🔁 Multi-Line Loop Active (${loopBufferSec}s buffer)` : '⏸️ Multi-Line Range Selected'}
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
                  className={`lyric-row-item ${isActive ? 'active-line' : ''} ${isSyncStudioOpen && isActive ? 'sync-editing-line' : ''} ${isInRange ? 'in-loop-range' : ''} ${isRangeStart ? 'range-start' : ''} ${isRangeEnd ? 'range-end' : ''}`}
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
                  title="Click to select · Shift + Click to select multiple consecutive lyrics to loop"
                >
                  <div className="time-badge-container" onClick={(e) => e.stopPropagation()}>
                    {isSyncStudioOpen ? (
                      <div className="sync-studio-row-times" title="Sentence Start ~ End. Click this row to edit in Studio">
                        <span className="sync-row-badge start" title="Start Time">
                          S: {formatTimeMinutesSeconds(line.start)}
                        </span>
                        <span className="sync-row-sep">~</span>
                        <span className="sync-row-badge end" title="End Time">
                          E: {formatTimeMinutesSeconds(line.end || line.start + 3)}
                        </span>
                      </div>
                    ) : isEditingThisTime ? (
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
                    {!isSyncStudioOpen && (
                      <button
                        className="sync-now-btn"
                        title="Sync timestamp to current video time (Tip: Hold Shift to ripple shift this & all following lines!)"
                        onClick={(e) => handleSyncToCurrentTime(e, idx)}
                      >
                        <Clock size={10} /> Sync
                      </button>
                    )}
                  </div>

                  <div className="lyric-content">
                    <div className="lyric-ko-row">
                      <div className="lyric-ko">{line.ko}</div>
                      {isSyncStudioOpen && isActive && <span className="sync-studio-active-tag">✏️ Editing in Studio</span>}
                      {isRangeStart && <span className="range-badge-pill start">🔁 Loop Start</span>}
                      {isRangeEnd && <span className="range-badge-pill end">🔁 Loop End</span>}
                    </div>
                    {line.rom && <div className="lyric-rom">{line.rom}</div>}
                    {line.en && <div className="lyric-en">{line.en}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vowel / Syllable Breakdown Helper Card */}
      <div className="vowel-breakdown-card glassmorphism">
        <div className="vowel-card-header">
          <Sparkles className="gold-icon" size={22} />
          <div>
            <h3>{isHokkienSong ? 'Hokkien Phonetic Breakdown (台語聲韻調分解)' : 'Syllable Breakdown'}</h3>
            <span className="vowel-card-desc">
              {isHokkienSong
                ? 'Siann-bú (聲母 Initial) + Ūn-bú (韻母 Rime) + Siann-tiāu (聲調 8 Tones) · Tâi-lô & 方音符號'
                : 'Click or hover each syllable to review consonants, vowels & batchim.'}
            </span>
          </div>
        </div>

        {/* Vowels & Word Pronunciation List Tokens */}
        <div className="vowels-tokens-grid">
          {vowelTokens.map((token, idx) => (
            <div key={idx} className="vowel-token-box" style={{ borderColor: token.color }}>
              <div className="token-syllable">{token.char}</div>
              <div className="token-vowel-badge" style={{ backgroundColor: token.color }}>
                {isHokkienSong
                  ? `${token.syllable || token.char} · ${token.toneName || ''}`
                  : `${token.syllableRom} (${token.vowel})`}
              </div>
              {isHokkienSong && token.initialDisplay && (
                <div className="token-hokkien-meta">
                  <span className="meta-init">聲: {token.initialDisplay}</span>
                  {token.vowel && <span className="meta-rime"> · 韻: {token.vowel}{token.coda || ''}</span>}
                  {token.tonePitch && <span className="meta-pitch"> · {token.tonePitch}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Optional Lyric Typing Trainer */}
      {practiceMode && (
        <div className="lyric-typing-trainer glassmorphism">
          <div className="trainer-header">
            <h4>{isHokkienSong ? 'Type Along With The Song (Tâi-lô / Lyrics):' : 'Type Along With The K-Pop Song:'}</h4>
            <span className="target-text-display">{activeLine.rom ? `${activeLine.ko} (${activeLine.rom})` : activeLine.ko}</span>
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

      {/* Floating Sync Alert Toast */}
      {syncToastMessage && (
        <div className="sync-toast-alert animate-bounce-in">
          <span>{syncToastMessage}</span>
        </div>
      )}

      {/* Raw SRT Preview & Batch Edit Modal */}
      {isSrtPreviewOpen && (
        <div className="srt-preview-modal-overlay" onClick={() => setIsSrtPreviewOpen(false)}>
          <div className="srt-preview-modal-content glassmorphism" onClick={(e) => e.stopPropagation()}>
            <div className="srt-preview-header">
              <div className="srt-preview-title">
                <FileText size={18} className="gold-icon" />
                <span>SRT Subtitle Preview: <strong>{resolvedSrtFilename}</strong></span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsSrtPreviewOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="srt-preview-body">
              <textarea
                className="srt-preview-textarea"
                value={srtPreviewText}
                onChange={(e) => setSrtPreviewText(e.target.value)}
                spellCheck={false}
              />
            </div>

            <div className="srt-preview-footer">
              <div className="srt-preview-footer-left">
                <span className="srt-line-count-badge">
                  {song.lyrics.length} subtitle blocks
                </span>
              </div>
              <div className="srt-preview-footer-right">
                <button
                  type="button"
                  className="action-btn active-purple"
                  onClick={() => {
                    const parsed = parseSRTContent(srtPreviewText);
                    if (parsed && parsed.length > 0) {
                      setCustomLyrics(parsed);
                      sound.playCorrect();
                      setSyncToastMessage(`✅ Applied ${parsed.length} lines from preview editor!`);
                      setTimeout(() => setSyncToastMessage(null), 3000);
                      setIsSrtPreviewOpen(false);
                    } else {
                      alert('Could not parse SRT text.');
                    }
                  }}
                  title="Apply changes made in the textarea to player"
                >
                  <Check size={14} /> Apply Edits to Player
                </button>
                <button
                  type="button"
                  className="action-btn active-green"
                  onClick={handleSaveSrtToDisk}
                  disabled={isSavingSrt}
                  title="Save directly to public/lyrics folder"
                >
                  <Save size={14} /> Save to Disk
                </button>
                <button
                  type="button"
                  className="action-btn active-blue"
                  onClick={handleDownloadSrt}
                  title="Download the updated .srt file"
                >
                  <Download size={14} /> Download .srt
                </button>
                <button
                  type="button"
                  className="action-btn"
                  onClick={handleCopySrt}
                  title="Copy formatted SRT to clipboard"
                >
                  <Copy size={14} /> Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
