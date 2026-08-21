import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { KPOP_SONG_PRESETS } from '../utils/kpopSongs';
import { PREPARED_SRT_LIBRARY } from '../utils/preparedLyrics';
import { VIDEO_SRT_MAPPINGS, findMappingByVideoId } from '../utils/videoSrtMapping';
import { parseSRTContent, formatSrtTimestampRange } from '../utils/srtParser';
import { GAME_MODES, getGameModeConfig, containsKorean, buildKoreanLinePool, pickChoiceOptions, shuffleWords } from '../utils/gameModes';
import { sound } from '../utils/audio';
import GameChallengeOverlay from './gameModes/GameChallengeOverlay';
import {
  Trophy,
  Flame,
  Heart,
  RotateCcw,
  Sparkles,
  Music,
  ListChecks,
  Shuffle,
  Dices,
  Award,
  XCircle,
  BookOpen,
  Target,
  Play,
  HelpCircle,
  Zap,
  Mic,
  Repeat,
  Clock,
  Bookmark
} from 'lucide-react';

export default function KpopGameMode({
  onAddXp,
  onSwitchToPractice,
  onSaveMissed,
  onLoopSentence,
  onOpenReviewModal,
  missedCount = 0
}) {
  // Song selection
  const [selectedSongIdx, setSelectedSongIdx] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(KPOP_SONG_PRESETS[0].id);
  const [customLyrics, setCustomLyrics] = useState(null);
  const [customTrackTitle, setCustomTrackTitle] = useState('');

  const currentPreset = KPOP_SONG_PRESETS[selectedSongIdx];
  const song = useMemo(() => ({
    id: activeVideoId,
    title: customLyrics ? (customTrackTitle || 'Custom Song') : (currentPreset ? currentPreset.title : 'K-Pop Video'),
    artist: customLyrics ? 'SRT Lyrics' : (currentPreset ? currentPreset.artist : 'K-Pop Track'),
    lyrics: customLyrics || (currentPreset ? currentPreset.lyrics : [])
  }), [activeVideoId, customLyrics, customTrackTitle, currentPreset]);

  // Extract all Korean lines from the song lyrics
  const allKoreanLines = useMemo(() => {
    return song.lyrics
      .map((line, idx) => ({ ...line, originalIdx: idx }))
      .filter(line => line?.ko && containsKorean(line.ko));
  }, [song.lyrics]);

  // Coverage setting: 1.0 (100% all sentences, default) | 0.8 (80%) | 0.7 (70% minimum)
  const [coverageRate, setCoverageRate] = useState(1.0);

  // Selected challenge lines based on coverage (at least 70% of Korean sentences, default 100%)
  const challengeLines = useMemo(() => {
    if (allKoreanLines.length === 0) return [];
    if (coverageRate >= 0.99) return allKoreanLines;

    // Pick evenly distributed lines to satisfy at least coverageRate (>= 70%)
    const targetCount = Math.max(1, Math.ceil(allKoreanLines.length * coverageRate));
    if (targetCount >= allKoreanLines.length) return allKoreanLines;

    const step = allKoreanLines.length / targetCount;
    const selected = [];
    for (let i = 0; i < targetCount; i++) {
      const targetIdx = Math.min(allKoreanLines.length - 1, Math.floor(i * step));
      const candidate = allKoreanLines[targetIdx];
      if (!selected.some(s => s.originalIdx === candidate.originalIdx)) {
        selected.push(candidate);
      }
    }
    return selected;
  }, [allKoreanLines, coverageRate]);

  // Korean-only sentence pool for distractor generation
  const koreanLinePool = useMemo(() => buildKoreanLinePool(song.lyrics), [song.lyrics]);

  // Game configuration
  const [selectedGameMode, setSelectedGameMode] = useState('choice'); // 'choice' | 'wordorder' | 'sing' | 'mixed'
  const [useHearts] = useState(true);
  const maxHearts = 3;
  const [hearts, setHearts] = useState(maxHearts);

  // Pre-extracted Exam Questions Map (populated during pre-action)
  const [_preparedExamMap, setPreparedExamMap] = useState({});

  // Game state: 'ready' | 'preparing' | 'playing' | 'victory' | 'gameover'
  const [gameState, setGameState] = useState('ready');
  const [countdown, setCountdown] = useState(null); // 3 | 2 | 1 | 'GO!'

  // Game runtime stats
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalXpEarned, setTotalXpEarned] = useState(0);
  const [recentScorePopup, setRecentScorePopup] = useState(null);

  // Missed sentences recorded in current session
  const [sessionMissed, setSessionMissed] = useState([]);

  // Reactive state for challenged indices (ensures HUD progress updates in real time)
  const [challengedIndices, setChallengedIndices] = useState(() => new Set());
  const challengedSetRef = useRef(new Set());

  const [isPlaying, setIsPlaying] = useState(false);
  const [_currentTime, setCurrentTime] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null); // { lineIdx, mode, line } | null
  const [effectiveLineMode, setEffectiveLineMode] = useState('choice');

  const playerRef = useRef(null);

  // Load Prepared SRT
  const handleLoadPreparedSrt = useCallback(async (item) => {
    try {
      const srtPath = item.path || item.srtPath;
      const res = await fetch(srtPath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const parsed = parseSRTContent(text);
      if (parsed.length > 0) {
        setCustomLyrics(parsed);
        setCustomTrackTitle(`${item.title} - ${item.artist}`);

        const mapped = findMappingByVideoId(item.youtubeId) ||
          VIDEO_SRT_MAPPINGS.find(m => m.srtPath === srtPath || m.srtFilename === item.filename || m.id === item.id);

        const targetVideoId = item.youtubeId || (mapped && mapped.youtubeIds && mapped.youtubeIds[0]);
        if (targetVideoId) {
          setActiveVideoId(targetVideoId);
        }
      }
    } catch (err) {
      console.error('Failed to load prepared SRT in game mode:', err);
    }
  }, []);

  // Initial load default song (DRIP)
  useEffect(() => {
    const dripItem = PREPARED_SRT_LIBRARY.find(item => item.id === 'babymonster_drip');
    if (dripItem) {
      handleLoadPreparedSrt(dripItem);
    }
  }, [handleLoadPreparedSrt]);

  // Reset to Ready Screen
  const resetToReady = useCallback(() => {
    challengedSetRef.current = new Set();
    setChallengedIndices(new Set());
    setActiveChallenge(null);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setCorrectCount(0);
    setTotalAnswered(0);
    setTotalXpEarned(0);
    setHearts(maxHearts);
    setSessionMissed([]);
    setGameState('ready');
    setCountdown(null);
    setRecentScorePopup(null);

    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      playerRef.current.pauseVideo();
      playerRef.current.seekTo(0, true);
    }
  }, [maxHearts]);

  // When song, lyrics, or coverage change, return to Ready state
  useEffect(() => {
    challengedSetRef.current = new Set();
    setChallengedIndices(new Set());
    setActiveChallenge(null);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setCorrectCount(0);
    setTotalAnswered(0);
    setTotalXpEarned(0);
    setHearts(maxHearts);
    setSessionMissed([]);
    setGameState('ready');
    setCountdown(null);
  }, [song.lyrics, activeVideoId, maxHearts, coverageRate]);

  // Pre-action to extract exam questions and trigger countdown
  const handleTriggerPreActionAndStart = () => {
    setGameState('preparing');
    sound.playKeyPress();

    // 1. Pre-extract and construct all exam challenges
    const examMap = {};
    const availableModes = GAME_MODES.map(m => m.id);

    challengeLines.forEach((line, idx) => {
      let modeToUse = selectedGameMode;
      if (selectedGameMode === 'mixed') {
        modeToUse = availableModes[idx % availableModes.length];
      }

      examMap[line.originalIdx] = {
        lineIdx: line.originalIdx,
        mode: modeToUse,
        line: line,
        options: modeToUse === 'choice' ? pickChoiceOptions(line.ko, koreanLinePool, 3) : null,
        tokens: modeToUse === 'wordorder' ? shuffleWords(line.ko.trim().split(/\s+/)) : null
      };
    });

    setPreparedExamMap(examMap);

    // 2. Countdown sequence: 3 -> 2 -> 1 -> START!
    setCountdown(3);
    sound.playKeyPress();

    setTimeout(() => {
      setCountdown(2);
      sound.playKeyPress();
    }, 600);

    setTimeout(() => {
      setCountdown(1);
      sound.playKeyPress();
    }, 1200);

    setTimeout(() => {
      setCountdown('GO!');
      sound.playCorrect();
    }, 1700);

    setTimeout(() => {
      setCountdown(null);
      setGameState('playing');
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
      }
    }, 2200);
  };

  // Fire confetti on victory
  useEffect(() => {
    if (gameState === 'victory') {
      sound.playLevelUp();
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    } else if (gameState === 'gameover') {
      sound.playError();
    }
  }, [gameState]);

  // YouTube IFrame API Initialization (with autoplay disabled initially)
  useEffect(() => {
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('youtube-game-player-element', {
          videoId: activeVideoId,
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1,
            controls: 1
          },
          events: {
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else {
                setIsPlaying(false);
              }
              if (event.data === window.YT.PlayerState.ENDED) {
                // If there is no active challenge, trigger victory
                setActiveChallenge(curr => {
                  if (!curr) {
                    setGameState('victory');
                  }
                  return curr;
                });
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
        try { playerRef.current.destroy(); } catch (_e) {}
      }
    };
  }, [activeVideoId]);

  // Bulletproof time ticker: pauses video and triggers challenge as soon as a Korean line ends
  useEffect(() => {
    let interval = null;
    if (isPlaying && gameState === 'playing') {
      interval = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const time = playerRef.current.getCurrentTime();
          setCurrentTime(time);

          if (!activeChallenge && challengeLines.length > 0) {
            // Find the pending challenge line that has finished playing
            const pendingLine = challengeLines.find(line => {
              if (challengedSetRef.current.has(line.originalIdx)) return false;
              // Trigger when time has reached line.end (with a small buffer window)
              return time >= (line.end - 0.12) && time <= (line.end + 2.5);
            });

            if (pendingLine) {
              // Mark as challenged synchronously in ref & reactive state
              challengedSetRef.current.add(pendingLine.originalIdx);
              setChallengedIndices(new Set(challengedSetRef.current));

              // Determine mode for this challenge
              let modeToUse = selectedGameMode;
              if (selectedGameMode === 'mixed') {
                const availableModes = GAME_MODES.map(m => m.id);
                modeToUse = availableModes[Math.floor(Math.random() * availableModes.length)];
              }
              setEffectiveLineMode(modeToUse);

              // Pause video immediately
              if (typeof playerRef.current.pauseVideo === 'function') {
                playerRef.current.pauseVideo();
              }
              setActiveChallenge({
                lineIdx: pendingLine.originalIdx,
                mode: modeToUse,
                line: pendingLine
              });
            }
          }
        }
      }, 80); // Fast 80ms interval ensures no line transitions are missed
    }
    return () => clearInterval(interval);
  }, [isPlaying, gameState, activeChallenge, challengeLines, selectedGameMode]);

  // Challenge Complete Handler
  const handleChallengeComplete = useCallback((result) => {
    const isCorrect = !!result?.correct;
    const challengeLine = activeChallenge?.line || (activeChallenge && song.lyrics[activeChallenge.lineIdx]);
    setActiveChallenge(null);
    setTotalAnswered(prev => prev + 1);

    if (isCorrect) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo(prev => Math.max(prev, newCombo));
      setCorrectCount(prev => prev + 1);

      // Combo multiplier: 1x, 1.2x, 1.5x, 2.0x
      const multiplier = newCombo >= 5 ? 2.0 : newCombo >= 3 ? 1.5 : newCombo >= 2 ? 1.2 : 1.0;
      const basePoints = 100;
      const pointsEarned = Math.round(basePoints * multiplier);
      setScore(prev => prev + pointsEarned);

      const xpEarned = getGameModeConfig(result?.mode || effectiveLineMode)?.xpReward || 30;
      setTotalXpEarned(prev => prev + xpEarned);
      onAddXp(xpEarned);

      if (newCombo >= 2) {
        sound.playCombo(newCombo);
      } else {
        sound.playCorrect();
      }

      setRecentScorePopup({
        text: `+${pointsEarned} PTS ${newCombo >= 2 ? `🔥 ${newCombo}x COMBO!` : '✨'}`,
        type: 'correct',
        id: Date.now()
      });
    } else {
      sound.playError();
      setCombo(0);

      // Record wrong answer to review notebook
      if (challengeLine) {
        const missedItem = {
          id: `${song.id}-${challengeLine.originalIdx !== undefined ? challengeLine.originalIdx : activeChallenge?.lineIdx}-${Date.now()}`,
          songId: song.id,
          songTitle: song.title,
          artist: song.artist,
          youtubeId: activeVideoId,
          srtPath: currentPreset?.srtPath || null,
          lineIdx: challengeLine.originalIdx !== undefined ? challengeLine.originalIdx : activeChallenge?.lineIdx,
          ko: challengeLine.ko,
          en: challengeLine.en || '',
          start: challengeLine.start,
          end: challengeLine.end,
          timestampStr: formatSrtTimestampRange(challengeLine.start, challengeLine.end),
          mode: result?.mode || effectiveLineMode,
          date: new Date().toLocaleDateString()
        };

        setSessionMissed(prev => [missedItem, ...prev]);
        if (onSaveMissed) {
          onSaveMissed(missedItem);
        }
      }

      setRecentScorePopup({
        text: 'MISS! 💔 COMBO RESET',
        type: 'wrong',
        id: Date.now()
      });

      if (useHearts) {
        setHearts(prev => {
          const nextHearts = prev - 1;
          if (nextHearts <= 0) {
            setGameState('gameover');
            if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
              playerRef.current.pauseVideo();
            }
          }
          return Math.max(0, nextHearts);
        });
      }
    }

    // Clear popup after 2 seconds
    setTimeout(() => {
      setRecentScorePopup(null);
    }, 2000);

    // If all challenges completed and video is done or near end, check for victory
    if (challengedSetRef.current.size >= challengeLines.length && challengeLines.length > 0) {
      if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
        const pState = playerRef.current.getPlayerState();
        if (pState === window.YT.PlayerState.ENDED) {
          setGameState('victory');
          return;
        }
      }
    }

    // Resume video playback if not game over
    if (gameState === 'playing' && playerRef.current && typeof playerRef.current.playVideo === 'function') {
      playerRef.current.playVideo();
    }
  }, [combo, effectiveLineMode, onAddXp, useHearts, gameState, challengeLines.length, activeChallenge, song, activeVideoId, currentPreset, onSaveMissed]);

  // Accuracy calculation
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  const completedCount = challengedIndices.size;
  const totalCount = challengeLines.length;
  const progressPercent = totalCount > 0
    ? Math.min(100, Math.round((completedCount / totalCount) * 100))
    : 0;

  const actualCoveragePercent = allKoreanLines.length > 0
    ? Math.round((challengeLines.length / allKoreanLines.length) * 100)
    : 100;

  const activeModeConfig = getGameModeConfig(selectedGameMode) || { label: 'Mixed Challenges', icon: Dices };
  const ModeIcon = activeModeConfig.icon || Dices;

  return (
    <div className="kpop-game-arena-container">
      {/* Top Game Bar: Presets & Mode Selector & Coverage Selector */}
      <div className="game-top-bar glassmorphism">
        <div className="song-presets-group">
          <span className="preset-label"><Music size={14} /> Choose Song:</span>
          {KPOP_SONG_PRESETS.map((p, idx) => (
            <button
              key={p.id}
              className={`preset-btn ${selectedSongIdx === idx ? 'active' : ''}`}
              onClick={async (e) => {
                e.currentTarget.blur();
                setSelectedSongIdx(idx);
                setActiveVideoId(p.id);

                const mappedItem = PREPARED_SRT_LIBRARY.find(
                  item => item.youtubeId === p.id || item.title.toLowerCase() === p.title.toLowerCase()
                ) || (p.srtPath ? { path: p.srtPath, title: p.title, artist: p.artist, youtubeId: p.id } : null);

                if (mappedItem) {
                  await handleLoadPreparedSrt(mappedItem);
                } else {
                  setCustomLyrics(null);
                  setCustomTrackTitle('');
                }
                resetToReady();
              }}
            >
              <span>{p.title} - {p.artist}</span>
            </button>
          ))}
        </div>

        {/* Game Mode Selector */}
        <div className="game-mode-toggle-group">
          <button
            className={`game-nav-btn ${selectedGameMode === 'choice' ? 'active' : ''}`}
            onClick={() => { setSelectedGameMode('choice'); resetToReady(); }}
            title="Listen and choose the matching Korean sentence"
          >
            <ListChecks size={15} /> Choice Mode
          </button>
          <button
            className={`game-nav-btn ${selectedGameMode === 'wordorder' ? 'active' : ''}`}
            onClick={() => { setSelectedGameMode('wordorder'); resetToReady(); }}
            title="Assemble scrambled words into the correct order"
          >
            <Shuffle size={15} /> Word Order Rebuild
          </button>
          <button
            className={`game-nav-btn ${selectedGameMode === 'sing' ? 'active' : ''}`}
            onClick={() => { setSelectedGameMode('sing'); resetToReady(); }}
            title="Sing or pronounce missing Korean words into your mic (70%+ match to pass)"
          >
            <Mic size={15} /> Sing the Words!
          </button>
          <button
            className={`game-nav-btn ${selectedGameMode === 'mixed' ? 'active' : ''}`}
            onClick={() => { setSelectedGameMode('mixed'); resetToReady(); }}
            title="Randomized alternating challenges for full mastery"
          >
            <Dices size={15} /> Mixed Challenges
          </button>
        </div>

        {/* Challenge Coverage Selector (>= 70% guarantee) */}
        <div className="game-coverage-toggle-group">
          <span className="coverage-label" title="Percentage of Korean lyric sentences to test in this song">
            <Target size={14} /> Test Coverage:
          </span>
          <button
            className={`coverage-btn ${coverageRate === 1.0 ? 'active' : ''}`}
            onClick={() => { setCoverageRate(1.0); resetToReady(); }}
            title="Test 100% of all Korean sentences in the song"
          >
            100% (All {allKoreanLines.length})
          </button>
          <button
            className={`coverage-btn ${coverageRate === 0.8 ? 'active' : ''}`}
            onClick={() => { setCoverageRate(0.8); resetToReady(); }}
            title="Test 80% of Korean sentences in the song"
          >
            80% High ({Math.ceil(allKoreanLines.length * 0.8)})
          </button>
          <button
            className={`coverage-btn ${coverageRate === 0.7 ? 'active' : ''}`}
            onClick={() => { setCoverageRate(0.7); resetToReady(); }}
            title="Test at least 70% (7 out of 10) Korean sentences"
          >
            70% Standard ({Math.ceil(allKoreanLines.length * 0.7)})
          </button>
        </div>
      </div>

      {/* Main Game HUD Bar */}
      <div className="game-hud-bar glassmorphism">
        {/* Score & Combo */}
        <div className="hud-stat score-stat">
          <Trophy className="hud-icon gold" size={20} />
          <div className="hud-value-group">
            <span className="hud-label">SCORE</span>
            <span className="hud-number">{score.toLocaleString()}</span>
          </div>
        </div>

        {/* Combo Multiplier */}
        <div className={`hud-stat combo-stat ${combo >= 2 ? 'active-combo' : ''}`}>
          <Flame className={`hud-icon ${combo >= 3 ? 'flame-hot' : 'flame'}`} size={20} />
          <div className="hud-value-group">
            <span className="hud-label">COMBO</span>
            <span className="hud-number">
              {combo > 0 ? `${combo}x` : '0'}
              {combo >= 2 && <span className="multiplier-tag">{combo >= 5 ? '2.0x' : combo >= 3 ? '1.5x' : '1.2x'}</span>}
            </span>
          </div>
        </div>

        {/* Lives / Hearts */}
        {useHearts && (
          <div className="hud-stat hearts-stat">
            <span className="hud-label">LIVES</span>
            <div className="hearts-container">
              {Array.from({ length: maxHearts }).map((_, i) => (
                <Heart
                  key={i}
                  size={18}
                  className={`heart-icon ${i < hearts ? 'filled' : 'lost'}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Progress Counter */}
        <div className="hud-stat progress-stat">
          <div className="progress-info">
            <span className="hud-label">PROGRESS ({actualCoveragePercent}% TESTED)</span>
            <span className="hud-progress-text">
              {completedCount} / {totalCount}
            </span>
          </div>
          <div className="hud-progress-bar">
            <div className="hud-progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="hud-actions">
          {onOpenReviewModal && (
            <button
              className={`hud-btn review-hud-btn ${missedCount > 0 ? 'has-missed' : ''}`}
              onClick={onOpenReviewModal}
              title="Open Review Notebook of missed sentences"
            >
              <Bookmark size={15} />
              <span>Review ({missedCount})</span>
            </button>
          )}

          {gameState === 'playing' ? (
            <button
              className="hud-btn restart-btn"
              onClick={resetToReady}
              title="Return to Ready screen and restart"
            >
              <RotateCcw size={15} /> Restart
            </button>
          ) : (
            <button
              className="hud-btn ready-hud-btn"
              onClick={handleTriggerPreActionAndStart}
              title="Extract exam and start playing"
            >
              <Play size={15} /> Start Challenge
            </button>
          )}

          {onSwitchToPractice && (
            <button
              className="hud-btn practice-switch-btn"
              onClick={onSwitchToPractice}
              title="Switch to Practice Mode to study lyrics"
            >
              <BookOpen size={15} /> Practice Mode
            </button>
          )}
        </div>
      </div>

      {/* Floating Score Feedback Popup */}
      {recentScorePopup && (
        <div className={`floating-score-banner ${recentScorePopup.type}`} key={recentScorePopup.id}>
          {recentScorePopup.text}
        </div>
      )}

      {/* Center Theater Game Video Arena (NO LYRICS / CC SUBTITLES) */}
      <div className="game-arena-stage glassmorphism">
        <div className="game-video-wrapper">
          <div id="youtube-game-player-element" className="yt-game-iframe"></div>

          {/* 1. Pre-Game Ready Screen (Before starting video) */}
          {gameState === 'ready' && (
            <div className="game-ready-overlay">
              <div className="game-ready-card glassmorphism">
                <div className="ready-header">
                  <div className="ready-badge"><Zap size={14} /> EXAM PREPARATION</div>
                  <h2>{song.title}</h2>
                  <p className="ready-artist">{song.artist}</p>
                </div>

                <div className="exam-brief-grid">
                  <div className="brief-item">
                    <span className="brief-label">GAME MODE</span>
                    <span className="brief-val"><ModeIcon size={14} /> {activeModeConfig.label || 'Mixed Challenges'}</span>
                  </div>
                  <div className="brief-item">
                    <span className="brief-label">TEST COVERAGE</span>
                    <span className="brief-val highlight-cyan">{actualCoveragePercent}% ({totalCount} sentences)</span>
                  </div>
                  <div className="brief-item">
                    <span className="brief-label">LIVES</span>
                    <span className="brief-val highlight-red">3 Hearts ❤️❤️❤️</span>
                  </div>
                  <div className="brief-item">
                    <span className="brief-label">EXAM FORMAT</span>
                    <span className="brief-val highlight-gold">No Lyrics Spoilers 🎧</span>
                  </div>
                </div>

                <div className="ready-instructions">
                  <p><HelpCircle size={14} /> <strong>Rule:</strong> Video plays without subtitles. When a Korean line ends, the video pauses for a quick listening quiz.</p>
                </div>

                <button
                  className="ready-start-btn"
                  onClick={handleTriggerPreActionAndStart}
                >
                  <Play size={20} fill="currentColor" />
                  <span>READY! START EXAM</span>
                </button>
              </div>
            </div>
          )}

          {/* 2. Pre-Action Countdown Animation (3.. 2.. 1.. GO!) */}
          {gameState === 'preparing' && countdown && (
            <div className="countdown-overlay">
              <div className="countdown-content">
                <span className="countdown-tag">PREPARING EXAM QUESTIONS...</span>
                <div className="countdown-number-box">
                  <span className={`countdown-number ${typeof countdown === 'string' ? 'go-text' : ''}`}>
                    {countdown}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 3. Interactive Challenge Popup when Video Pauses */}
          {activeChallenge && song.lyrics[activeChallenge.lineIdx] && (
            <GameChallengeOverlay
              key={`${song.id}-${activeChallenge.lineIdx}`}
              mode={activeChallenge.mode || effectiveLineMode}
              line={song.lyrics[activeChallenge.lineIdx]}
              pool={koreanLinePool}
              onComplete={handleChallengeComplete}
            />
          )}

          {/* 4. Listening Prompt Banner during Playback */}
          {!activeChallenge && gameState === 'playing' && (
            <div className="listening-prompt-banner">
              <Sparkles size={14} className="sparkle-pulse" />
              <span>🎧 Listen closely! Video will pause to test your Korean comprehension ({completedCount}/{totalCount}).</span>
            </div>
          )}
        </div>
      </div>

      {/* Game Over / Victory Modal */}
      {(gameState === 'victory' || gameState === 'gameover') && (
        <div className="game-result-modal-overlay">
          <div className="game-result-card glassmorphism">
            <div className="result-header">
              {gameState === 'victory' ? (
                <>
                  <Award size={48} className="victory-trophy" />
                  <h2>🎉 STAGE CLEARED!</h2>
                  <p className="result-sub">You tested {totalAnswered} / {totalCount} Korean sentences ({actualCoveragePercent}% coverage)!</p>
                </>
              ) : (
                <>
                  <XCircle size={48} className="gameover-icon" />
                  <h2>💔 GAME OVER</h2>
                  <p className="result-sub">You ran out of lives ({totalAnswered} / {totalCount} sentences completed). Keep practicing!</p>
                </>
              )}
            </div>

            <div className="result-stats-grid">
              <div className="result-stat-box">
                <span className="stat-name">FINAL SCORE</span>
                <span className="stat-val highlight-gold">{score.toLocaleString()}</span>
              </div>
              <div className="result-stat-box">
                <span className="stat-name">ACCURACY</span>
                <span className="stat-val">{accuracy}% ({correctCount}/{totalAnswered})</span>
              </div>
              <div className="result-stat-box">
                <span className="stat-name">MAX COMBO</span>
                <span className="stat-val highlight-orange">{maxCombo}x 🔥</span>
              </div>
              <div className="result-stat-box">
                <span className="stat-name">XP EARNED</span>
                <span className="stat-val highlight-purple">+{totalXpEarned} XP</span>
              </div>
            </div>

            {/* Missed Sentences Review Section */}
            {sessionMissed.length > 0 && (
              <div className="result-missed-section">
                <div className="result-missed-header">
                  <Bookmark size={16} className="gold" />
                  <span>Missed Sentences to Review & Loop ({sessionMissed.length})</span>
                </div>
                <div className="result-missed-list">
                  {sessionMissed.map((item) => (
                    <div key={item.id} className="result-missed-row">
                      <div className="missed-row-text-group">
                        <span className="missed-ko-text">{item.ko}</span>
                        <span className="missed-time-chip">
                          <Clock size={11} /> {item.timestampStr}
                        </span>
                      </div>
                      {onLoopSentence && (
                        <button
                          type="button"
                          className="missed-loop-btn"
                          onClick={() => onLoopSentence(item)}
                          title="Open Practice Mode and loop this exact timestamp segment"
                        >
                          <Repeat size={13} />
                          <span>Loop Segment</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="result-modal-actions">
              <button className="result-btn primary-btn" onClick={resetToReady}>
                <RotateCcw size={16} /> Play Again
              </button>
              {onSwitchToPractice && (
                <button className="result-btn secondary-btn" onClick={onSwitchToPractice}>
                  <BookOpen size={16} /> Study in Practice Mode
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
