import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Link2,
  Wand2,
  Play,
  Pause,
  Save,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Camera,
  Film,
  Download,
  Maximize2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  FastForward,
  Rewind,
  Sparkles
} from 'lucide-react';
import { extractYouTubeId, VIDEO_SRT_MAPPINGS } from '../utils/videoSrtMapping';
import { shiftSRT, validateSRT, secondsToTimeString, timeStringToSeconds } from '../../tools/srtEngine.js';
import { convertLrcToSrtString } from '../../tools/lrcConverter.js';

const INPUT_FORMATS = [
  { value: 'plain', label: 'Plain lyrics (auto-align to YouTube captions)' },
  { value: 'lrc', label: 'LRC (already timed, [mm:ss.xx])' },
  { value: 'srt', label: 'SRT (already timed)' }
];

const RESOLUTION_OPTIONS = [
  { value: '1080p', label: '1080p Full HD' },
  { value: '720p', label: '720p HD' },
  { value: 'best', label: 'Original / 4K' }
];

const FORMAT_OPTIONS = [
  { value: 'jpg', label: 'JPG' },
  { value: 'png', label: 'PNG' },
  { value: 'webp', label: 'WebP' }
];

const FRAME_COUNT_PRESETS = [1, 3, 5, 10];
const INTERVAL_PRESETS = [0.1, 0.25, 0.33, 0.5, 1.0];

export default function AdminSyncPage({ onPlayNow }) {
  const [activeAdminTab, setActiveAdminTab] = useState('frames'); // 'frames' or 'sync'

  // Shared Video State
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=x3eqqoZPV_E'); // Default to CHOOM for instant preview
  const videoId = useMemo(() => extractYouTubeId(videoUrl) || '', [videoUrl]);

  // Sync Form State
  const [title, setTitle] = useState('CHOOM (춤)');
  const [artist, setArtist] = useState('BABYMONSTER (베이비몬스터)');
  const [songId, setSongId] = useState('');
  const [inputFormat, setInputFormat] = useState('plain');
  const [rawInput, setRawInput] = useState('');
  const [previewContent, setPreviewContent] = useState('');
  const [offsetSeconds, setOffsetSeconds] = useState('0');
  const [syncStatus, setSyncStatus] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [registeredVideoId, setRegisteredVideoId] = useState(null);

  // Frame Capture State
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0);
  const [playerDuration, setPlayerDuration] = useState(0);
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false);
  const [targetTimestamp, setTargetTimestamp] = useState('00:10.0');
  const [frameCount, setFrameCount] = useState(3);
  const [frameDuration, setFrameDuration] = useState(0.25);
  const [resolution, setResolution] = useState('1080p');
  const [imageFormat, setImageFormat] = useState('jpg');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractStatus, setExtractStatus] = useState(null);
  const [extractedFrames, setExtractedFrames] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Lightbox Modal State
  const [activeLightboxIdx, setActiveLightboxIdx] = useState(null);

  // YouTube Player Ref
  const playerRef = useRef(null);
  const playerContainerId = 'admin-youtube-player-element';

  // Load YouTube Player
  useEffect(() => {
    if (!videoId) return;

    let isMounted = true;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy(); } catch (_e) {}
      }

      playerRef.current = new window.YT.Player(playerContainerId, {
        videoId,
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
          enablejsapi: 1
        },
        events: {
          onReady: (event) => {
            if (isMounted) {
              setPlayerDuration(event.target.getDuration() || 0);
            }
          },
          onStateChange: (event) => {
            if (!isMounted) return;
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlayerPlaying(true);
            } else {
              setIsPlayerPlaying(false);
            }
          }
        }
      });
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
      isMounted = false;
      if (playerRef.current && playerRef.current.destroy) {
        try { playerRef.current.destroy(); } catch (_e) {}
      }
    };
  }, [videoId]);

  // Poll player current time when playing or loaded
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
        const time = playerRef.current.getCurrentTime() || 0;
        setPlayerCurrentTime(time);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Player controls
  const togglePlayPause = () => {
    if (!playerRef.current) return;
    if (isPlayerPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const seekRelative = (deltaSeconds) => {
    if (!playerRef.current || typeof playerRef.current.getCurrentTime !== 'function') return;
    const current = playerRef.current.getCurrentTime() || 0;
    const target = Math.max(0, current + deltaSeconds);
    playerRef.current.seekTo(target, true);
    setPlayerCurrentTime(target);
  };

  const seekToExact = (seconds) => {
    if (!playerRef.current || typeof playerRef.current.seekTo !== 'function') return;
    playerRef.current.seekTo(seconds, true);
    setPlayerCurrentTime(seconds);
  };

  // Pin current player time to target timestamp field
  const handlePinCurrentTime = () => {
    const timeFormatted = secondsToTimeString(playerCurrentTime);
    setTargetTimestamp(timeFormatted);
    setExtractStatus({
      type: 'info',
      message: `Pinned player timestamp: ${timeFormatted} (${playerCurrentTime.toFixed(3)}s)`
    });
  };

  // Handle Preset Select
  const handleSelectPreset = (mapping) => {
    setVideoUrl(mapping.primaryUrl);
    setTitle(mapping.title);
    setArtist(mapping.artist);
    setSongId(mapping.id);
  };

  // Extract Frames Handler
  const handleExtractFrames = async () => {
    setExtractStatus(null);
    if (!videoUrl.trim() && !videoId) {
      setExtractStatus({ type: 'error', message: 'Enter a valid YouTube URL or Video ID first.' });
      return;
    }

    setIsExtracting(true);
    try {
      const res = await fetch('/api/admin/extract-frames', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          video: videoId || videoUrl,
          start: targetTimestamp,
          count: parseInt(frameCount, 10) || 1,
          duration: parseFloat(frameDuration) || 0.25,
          format: imageFormat,
          resolution,
          quality: 2
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Frame extraction failed');

      setExtractedFrames(data.frames || []);
      setExtractStatus({
        type: 'success',
        message: `Extracted ${data.frames?.length || 0} frame(s) successfully at ${data.frames?.map(f => f.timeString).join(', ')}!`
      });
    } catch (err) {
      setExtractStatus({
        type: 'error',
        message: `Extraction failed: ${err.message}. Ensure yt-dlp & ffmpeg are installed locally.`
      });
    } finally {
      setIsExtracting(false);
    }
  };

  // Copy timecode helper
  const handleCopyTimecode = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  // Download Frame Helper
  const handleDownloadFrame = (frame) => {
    if (!frame.dataUrl) return;
    const a = document.createElement('a');
    a.href = frame.dataUrl;
    a.download = frame.filename || `frame_${frame.timestamp}s.${imageFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Download All Frames Helper
  const handleDownloadAll = () => {
    extractedFrames.forEach((frame, idx) => {
      setTimeout(() => handleDownloadFrame(frame), idx * 250);
    });
  };

  // --- SYNC TAB LOGIC ---
  const suggestedFilename = useMemo(() => {
    if (!artist || !title) return '';
    const slug = `${artist}-${title}`.toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return `${slug}.srt`;
  }, [artist, title]);

  const suggestedId = useMemo(() => {
    if (!artist || !title) return '';
    return `${artist}_${title}`.toLowerCase().replace(/[^a-z0-9_]+/g, '_');
  }, [artist, title]);

  const report = useMemo(() => {
    if (!previewContent.trim()) return null;
    try {
      return validateSRT(previewContent);
    } catch (_e) {
      return null;
    }
  }, [previewContent]);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    setRawInput(text);
    const lower = file.name.toLowerCase();
    if (lower.endsWith('.lrc')) setInputFormat('lrc');
    else if (lower.endsWith('.srt')) setInputFormat('srt');
  };

  const handleProcessSync = async () => {
    setSyncStatus(null);
    if (!rawInput.trim()) {
      setSyncStatus({ type: 'error', message: 'Paste or upload lyrics/SRT content first.' });
      return;
    }

    if (inputFormat === 'srt') {
      setPreviewContent(rawInput);
      setSyncStatus({ type: 'info', message: 'Loaded SRT content directly — no alignment needed.' });
      return;
    }

    if (inputFormat === 'lrc') {
      try {
        setPreviewContent(convertLrcToSrtString(rawInput));
        setSyncStatus({ type: 'info', message: 'Converted LRC timestamps to SRT.' });
      } catch (err) {
        setSyncStatus({ type: 'error', message: `LRC conversion failed: ${err.message}` });
      }
      return;
    }

    if (!videoId) {
      setSyncStatus({ type: 'error', message: 'Enter a valid YouTube URL or video ID first.' });
      return;
    }
    setIsSyncing(true);
    try {
      const res = await fetch('/api/admin/sync-youtube', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoId,
          lyricsText: rawInput,
          outputFilename: suggestedFilename || `temp-${videoId}.srt`
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Sync failed');
      setPreviewContent(data.content);
      setSyncStatus({ type: 'success', message: 'Synced with YouTube captions! Review the preview below.' });
    } catch (err) {
      setSyncStatus({ type: 'error', message: `Sync failed: ${err.message}. Make sure yt-dlp is installed locally.` });
    } finally {
      setIsSyncing(false);
    }
  };

  const handleApplyShift = () => {
    const offset = parseFloat(offsetSeconds);
    if (!previewContent.trim() || isNaN(offset) || offset === 0) return;
    try {
      setPreviewContent(shiftSRT(previewContent, offset));
      setOffsetSeconds('0');
      setSyncStatus({ type: 'info', message: `Shifted all timestamps by ${offset >= 0 ? `+${offset}` : offset}s.` });
    } catch (err) {
      setSyncStatus({ type: 'error', message: `Shift failed: ${err.message}` });
    }
  };

  const handleSaveRegister = async () => {
    setSyncStatus(null);
    if (!videoId) return setSyncStatus({ type: 'error', message: 'A YouTube URL/ID is required to register the song.' });
    if (!title.trim() || !artist.trim()) return setSyncStatus({ type: 'error', message: 'Title and artist are required.' });
    if (!previewContent.trim()) return setSyncStatus({ type: 'error', message: 'Nothing to save — process the lyrics first.' });

    setIsSaving(true);
    try {
      const res = await fetch('/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: songId || suggestedId,
          title,
          artist,
          srtFilename: suggestedFilename,
          youtubeIds: [videoId],
          srtContent: previewContent
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Register failed');
      setRegisteredVideoId(videoId);
      setSyncStatus({ type: 'success', message: `Registered "${artist} - ${title}"! It now appears in the video picker.` });
    } catch (err) {
      setSyncStatus({ type: 'error', message: `Save failed: ${err.message}` });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-page-container">
      {/* Top Admin Studio Navigation */}
      <div className="admin-subtabs-row">
        <button
          type="button"
          className={`admin-subtab-btn ${activeAdminTab === 'frames' ? 'active' : ''}`}
          onClick={() => setActiveAdminTab('frames')}
        >
          <Camera size={18} />
          <span>Playback &amp; Frame Capture Studio</span>
        </button>
        <button
          type="button"
          className={`admin-subtab-btn ${activeAdminTab === 'sync' ? 'active' : ''}`}
          onClick={() => setActiveAdminTab('sync')}
        >
          <Wand2 size={18} />
          <span>Lyrics &amp; Subtitle Sync</span>
        </button>
      </div>

      {/* Preset Fast Picker Bar */}
      <div className="admin-presets-bar glassmorphism">
        <span className="admin-presets-label">
          <Film size={14} /> Quick Load Track:
        </span>
        <div className="admin-presets-chips">
          {VIDEO_SRT_MAPPINGS.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`admin-preset-chip ${videoId === m.youtubeIds[0] ? 'active' : ''}`}
              onClick={() => handleSelectPreset(m)}
            >
              {m.title}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PLAYBACK & FRAME CAPTURE STUDIO */}
      {/* ========================================================================= */}
      {activeAdminTab === 'frames' && (
        <div className="admin-panel glassmorphism">
          <div className="admin-panel-header">
            <Camera size={22} className="purple-icon" />
            <div>
              <h3>Video Streaming Playback &amp; Screenshot Studio</h3>
              <span className="admin-panel-subtitle">
                Play video with fine scrubbing, pin exact timestamps, and extract high-resolution multi-frame screenshots.
              </span>
            </div>
          </div>

          {/* YouTube Video URL Input */}
          <div className="admin-form-grid">
            <label className="admin-field" style={{ gridColumn: 'span 2' }}>
              <span>YouTube Video URL or Video ID</span>
              <div className="admin-input-with-icon">
                <Link2 size={14} />
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>
              {videoId && <span className="admin-hint">Active Video ID: {videoId}</span>}
            </label>
          </div>

          {/* Interactive Embedded Streaming Player & Scrubbing Bar */}
          <div className="admin-player-studio-box">
            <div className="admin-video-frame-wrapper">
              <div id={playerContainerId} className="admin-yt-iframe" />
            </div>

            {/* Custom Playback & Fine Scrubbing Controls */}
            <div className="admin-player-controls-bar">
              <button
                type="button"
                className="admin-control-btn admin-play-btn"
                onClick={togglePlayPause}
                title={isPlayerPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlayerPlaying ? <Pause size={18} /> : <Play size={18} />}
                <span>{isPlayerPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <div className="admin-time-badge">
                <Clock size={14} />
                <span>{secondsToTimeString(playerCurrentTime)}</span>
                <span className="admin-time-divider">/</span>
                <span className="admin-time-total">{secondsToTimeString(playerDuration)}</span>
                <span className="admin-time-seconds">({playerCurrentTime.toFixed(2)}s)</span>
              </div>

              {/* Step / Nudge Controls */}
              <div className="admin-nudge-group">
                <button type="button" className="admin-nudge-btn" onClick={() => seekRelative(-5)} title="Rewind 5s">
                  <Rewind size={13} /> -5s
                </button>
                <button type="button" className="admin-nudge-btn" onClick={() => seekRelative(-1)} title="Rewind 1s">
                  -1s
                </button>
                <button type="button" className="admin-nudge-btn" onClick={() => seekRelative(-0.1)} title="Nudge -0.1s">
                  -0.1s
                </button>
                <button type="button" className="admin-nudge-btn" onClick={() => seekRelative(0.1)} title="Nudge +0.1s">
                  +0.1s
                </button>
                <button type="button" className="admin-nudge-btn" onClick={() => seekRelative(1)} title="Forward 1s">
                  +1s
                </button>
                <button type="button" className="admin-nudge-btn" onClick={() => seekRelative(5)} title="Forward 5s">
                  +5s <FastForward size={13} />
                </button>
              </div>

              {/* Pin Current Time Action */}
              <button
                type="button"
                className="srt-btn admin-pin-time-btn"
                onClick={handlePinCurrentTime}
                title="Use current playback timestamp for screenshot extraction"
              >
                <Camera size={15} />
                <span>Pin Current Timestamp</span>
              </button>
            </div>
          </div>

          {/* Screenshot Parameters Form */}
          <div className="admin-capture-settings-card">
            <h4 className="admin-section-heading">
              <Sparkles size={16} /> Screenshot Extraction Parameters
            </h4>

            <div className="admin-capture-grid">
              {/* Target Timestamp */}
              <label className="admin-field">
                <span>Start Timestamp (Seconds or MM:SS.sss)</span>
                <div className="admin-input-with-icon">
                  <Clock size={14} />
                  <input
                    type="text"
                    value={targetTimestamp}
                    onChange={(e) => setTargetTimestamp(e.target.value)}
                    placeholder="e.g. 10, 93.0, or 01:33.0"
                  />
                </div>
                <div className="admin-quick-links">
                  <button type="button" onClick={() => setTargetTimestamp(secondsToTimeString(playerCurrentTime))}>
                    Current ({secondsToTimeString(playerCurrentTime)})
                  </button>
                  <button type="button" onClick={() => setTargetTimestamp('00:10.0')}>00:10</button>
                  <button type="button" onClick={() => setTargetTimestamp('01:00.0')}>01:00</button>
                  <button type="button" onClick={() => setTargetTimestamp('01:33.0')}>01:33</button>
                </div>
              </label>

              {/* Number of Frames */}
              <label className="admin-field">
                <span>Frame Count (Number of Screenshots)</span>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={frameCount}
                  onChange={(e) => setFrameCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                />
                <div className="admin-quick-chips">
                  {FRAME_COUNT_PRESETS.map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      className={`admin-small-chip ${frameCount === cnt ? 'active' : ''}`}
                      onClick={() => setFrameCount(cnt)}
                    >
                      {cnt} frame{cnt > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </label>

              {/* Interval Duration */}
              <label className="admin-field">
                <span>Interval / Step (Seconds between frames)</span>
                <input
                  type="number"
                  step="0.05"
                  min="0.01"
                  value={frameDuration}
                  onChange={(e) => setFrameDuration(Math.max(0.01, parseFloat(e.target.value) || 0.25))}
                />
                <div className="admin-quick-chips">
                  {INTERVAL_PRESETS.map((intv) => (
                    <button
                      key={intv}
                      type="button"
                      className={`admin-small-chip ${frameDuration === intv ? 'active' : ''}`}
                      onClick={() => setFrameDuration(intv)}
                    >
                      {intv}s
                    </button>
                  ))}
                </div>
              </label>

              {/* Resolution & Format */}
              <div className="admin-field">
                <span>Quality &amp; Format</span>
                <div className="admin-quality-row">
                  <select
                    className="admin-select"
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                  >
                    {RESOLUTION_OPTIONS.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>

                  <select
                    className="admin-select"
                    value={imageFormat}
                    onChange={(e) => setImageFormat(e.target.value)}
                  >
                    {FORMAT_OPTIONS.map((f) => (
                      <option key={f.value} value={f.value}>{f.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Extract Action Button */}
            <div className="admin-actions-row" style={{ marginTop: '16px' }}>
              <button
                type="button"
                className="srt-btn admin-extract-action-btn"
                onClick={handleExtractFrames}
                disabled={isExtracting}
              >
                {isExtracting ? <RefreshCw size={18} className="admin-spin" /> : <Camera size={18} />}
                <span>{isExtracting ? 'Extracting High-Res Frames...' : `Extract ${frameCount} Screenshot Frame${frameCount > 1 ? 's' : ''}`}</span>
              </button>
            </div>
          </div>

          {/* Status Message */}
          {extractStatus && (
            <div className={`admin-status admin-status-${extractStatus.type}`}>
              {extractStatus.type === 'error' ? <AlertTriangle size={16} /> : <CheckCircle2 size={16} />}
              <span>{extractStatus.message}</span>
            </div>
          )}

          {/* Extracted Frames Gallery */}
          {extractedFrames.length > 0 && (
            <div className="admin-gallery-section">
              <div className="admin-gallery-header">
                <div>
                  <h4>📸 Extracted Frames Gallery ({extractedFrames.length})</h4>
                  <span className="admin-gallery-subtitle">
                    Captured from {videoId} · Click any frame to inspect full resolution or seek video.
                  </span>
                </div>
                <button type="button" className="srt-btn admin-download-all-btn" onClick={handleDownloadAll}>
                  <Download size={15} /> Download All ({extractedFrames.length})
                </button>
              </div>

              <div className="admin-frames-grid">
                {extractedFrames.map((frame, idx) => (
                  <div key={frame.filename || idx} className="admin-frame-card">
                    <div
                      className="admin-frame-img-box"
                      onClick={() => setActiveLightboxIdx(idx)}
                      title="Click to view full size"
                    >
                      <img src={frame.dataUrl} alt={`Frame at ${frame.timeString}`} className="admin-frame-img" />
                      <div className="admin-frame-overlay">
                        <Maximize2 size={22} className="admin-overlay-icon" />
                      </div>
                      <span className="admin-frame-num-badge">#{frame.index || idx + 1}</span>
                    </div>

                    <div className="admin-frame-meta">
                      <div className="admin-frame-time-row">
                        <span className="admin-frame-time-main">{frame.timeString}</span>
                        <span className="admin-frame-sec">({frame.timestamp.toFixed(3)}s)</span>
                      </div>
                      <div className="admin-frame-filesize">
                        {(frame.sizeBytes / 1024).toFixed(1)} KB · {resolution}
                      </div>

                      <div className="admin-frame-actions">
                        <button
                          type="button"
                          className="admin-frame-action-btn"
                          onClick={() => seekToExact(frame.timestamp)}
                          title="Seek YouTube player to this exact timestamp"
                        >
                          <Play size={13} /> Seek
                        </button>
                        <button
                          type="button"
                          className="admin-frame-action-btn"
                          onClick={() => handleCopyTimecode(frame.timeString, idx)}
                          title="Copy timecode to clipboard"
                        >
                          {copiedIndex === idx ? <Check size={13} className="green-text" /> : <Copy size={13} />}
                          {copiedIndex === idx ? 'Copied' : 'Time'}
                        </button>
                        <button
                          type="button"
                          className="admin-frame-action-btn admin-download-btn"
                          onClick={() => handleDownloadFrame(frame)}
                          title="Download screenshot"
                        >
                          <Download size={13} /> Save
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: LYRICS & SUBTITLE SYNC */}
      {/* ========================================================================= */}
      {activeAdminTab === 'sync' && (
        <div className="admin-panel glassmorphism">
          <div className="admin-panel-header">
            <Wand2 size={20} className="purple-icon" />
            <div>
              <h3>Add &amp; Sync a New K-Pop Song</h3>
              <span className="admin-panel-subtitle">
                Local dev-only tool — drives tools/cli.js. Never included in the production build.
              </span>
            </div>
          </div>

          <div className="admin-form-grid">
            <label className="admin-field">
              <span>YouTube Video URL or ID</span>
              <div className="admin-input-with-icon">
                <Link2 size={14} />
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>
              {videoId && <span className="admin-hint">Video ID: {videoId}</span>}
            </label>

            <label className="admin-field">
              <span>Song Title</span>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. It's Me" />
            </label>

            <label className="admin-field">
              <span>Artist</span>
              <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="e.g. ILLIT (아일릿)" />
            </label>

            <label className="admin-field">
              <span>Song ID (optional)</span>
              <input
                type="text"
                value={songId}
                onChange={(e) => setSongId(e.target.value)}
                placeholder={suggestedId || 'auto-generated from title/artist'}
              />
            </label>
          </div>

          <div className="admin-format-row">
            <span>Input format:</span>
            {INPUT_FORMATS.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`admin-format-chip ${inputFormat === f.value ? 'active' : ''}`}
                onClick={() => setInputFormat(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <label className="admin-field admin-textarea-field">
            <span>
              {inputFormat === 'srt' && 'Paste or upload the already-timed .srt file'}
              {inputFormat === 'lrc' && 'Paste or upload the already-timed .lrc file'}
              {inputFormat === 'plain' && 'Paste plain lyrics (one subtitle line per line) — will be aligned to YouTube captions'}
            </span>
            <textarea
              rows={8}
              value={rawInput}
              onChange={(e) => setRawInput(e.target.value)}
              placeholder="Paste lyrics here, or upload a file below..."
            />
            <input type="file" accept=".srt,.lrc,.txt" onChange={handleFileUpload} />
          </label>

          <div className="admin-actions-row">
            <button type="button" className="srt-btn" onClick={handleProcessSync} disabled={isSyncing}>
              {isSyncing ? <RefreshCw size={16} className="admin-spin" /> : <Wand2 size={16} />}
              {inputFormat === 'plain' ? 'Sync from YouTube Captions' : 'Process'}
            </button>
          </div>

          {syncStatus && (
            <div className={`admin-status admin-status-${syncStatus.type}`}>
              {syncStatus.type === 'error' ? <AlertTriangle size={16} /> : <CheckCircle2 size={16} />}
              <span>{syncStatus.message}</span>
            </div>
          )}

          {previewContent && (
            <div className="admin-preview-block">
              <div className="admin-preview-header">
                <span>Preview &amp; Fine-Tune</span>
                {report && report.totalLines > 0 && (
                  <span className="admin-report">
                    {report.totalLines} lines · Hangul {report.hangulRatio} · {report.duration}
                    {report.errors?.length > 0 && ` · ⚠️ ${report.errors.length} errors`}
                  </span>
                )}
              </div>

              <div className="admin-shift-row">
                <Clock size={14} />
                <input
                  type="number"
                  step="0.1"
                  value={offsetSeconds}
                  onChange={(e) => setOffsetSeconds(e.target.value)}
                  placeholder="offset seconds"
                />
                <button type="button" className="card-nav-btn" onClick={handleApplyShift}>Apply Shift</button>
              </div>

              <textarea
                className="admin-srt-editor"
                rows={12}
                value={previewContent}
                onChange={(e) => setPreviewContent(e.target.value)}
              />

              <div className="admin-actions-row">
                <button type="button" className="srt-btn game-arena-shortcut-btn" onClick={handleSaveRegister} disabled={isSaving}>
                  <Save size={16} /> {isSaving ? 'Saving...' : 'Save & Register'}
                </button>

                {registeredVideoId && (
                  <button
                    type="button"
                    className="srt-btn review-notebook-btn"
                    onClick={() => onPlayNow?.(registeredVideoId)}
                  >
                    <Play size={16} /> Play It Now
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* LIGHTBOX FULLSCREEN MODAL */}
      {/* ========================================================================= */}
      {activeLightboxIdx !== null && extractedFrames[activeLightboxIdx] && (
        <div className="admin-lightbox-overlay" onClick={() => setActiveLightboxIdx(null)}>
          <div className="admin-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-lightbox-header">
              <div className="admin-lightbox-title">
                <Camera size={18} />
                <span>
                  Frame #{activeLightboxIdx + 1} of {extractedFrames.length} — {extractedFrames[activeLightboxIdx].timeString} ({extractedFrames[activeLightboxIdx].timestamp.toFixed(3)}s)
                </span>
              </div>
              <div className="admin-lightbox-actions">
                <button
                  type="button"
                  className="admin-lightbox-btn"
                  onClick={() => handleDownloadFrame(extractedFrames[activeLightboxIdx])}
                  title="Download Frame"
                >
                  <Download size={16} /> Download
                </button>
                <button
                  type="button"
                  className="admin-lightbox-btn admin-lightbox-close"
                  onClick={() => setActiveLightboxIdx(null)}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="admin-lightbox-body">
              <img
                src={extractedFrames[activeLightboxIdx].dataUrl}
                alt={`Screenshot at ${extractedFrames[activeLightboxIdx].timeString}`}
                className="admin-lightbox-img"
              />

              {extractedFrames.length > 1 && (
                <>
                  <button
                    type="button"
                    className="admin-lightbox-nav prev"
                    onClick={() => setActiveLightboxIdx((prev) => (prev > 0 ? prev - 1 : extractedFrames.length - 1))}
                    title="Previous Frame"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    className="admin-lightbox-nav next"
                    onClick={() => setActiveLightboxIdx((prev) => (prev < extractedFrames.length - 1 ? prev + 1 : 0))}
                    title="Next Frame"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="admin-lightbox-footer">
              <span>{extractedFrames[activeLightboxIdx].filename}</span>
              <span>{(extractedFrames[activeLightboxIdx].sizeBytes / 1024).toFixed(1)} KB · {resolution}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
