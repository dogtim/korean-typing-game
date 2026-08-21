import React, { useState, useMemo } from 'react';
import { Link2, Wand2, Play, Save, RefreshCw, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { extractYouTubeId } from '../utils/videoSrtMapping';
import { shiftSRT, validateSRT } from '../../tools/srtEngine.js';
import { convertLrcToSrtString } from '../../tools/lrcConverter.js';

const INPUT_FORMATS = [
  { value: 'plain', label: 'Plain lyrics (auto-align to YouTube captions)' },
  { value: 'lrc', label: 'LRC (already timed, [mm:ss.xx])' },
  { value: 'srt', label: 'SRT (already timed)' }
];

export default function AdminSyncPage({ onPlayNow }) {
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [songId, setSongId] = useState('');
  const [inputFormat, setInputFormat] = useState('plain');
  const [rawInput, setRawInput] = useState('');
  const [previewContent, setPreviewContent] = useState('');
  const [offsetSeconds, setOffsetSeconds] = useState('0');
  const [status, setStatus] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [registeredVideoId, setRegisteredVideoId] = useState(null);

  const videoId = useMemo(() => extractYouTubeId(videoUrl) || '', [videoUrl]);

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

  const handleProcess = async () => {
    setStatus(null);
    if (!rawInput.trim()) {
      setStatus({ type: 'error', message: 'Paste or upload lyrics/SRT content first.' });
      return;
    }

    if (inputFormat === 'srt') {
      setPreviewContent(rawInput);
      setStatus({ type: 'info', message: 'Loaded SRT content directly — no alignment needed.' });
      return;
    }

    if (inputFormat === 'lrc') {
      try {
        setPreviewContent(convertLrcToSrtString(rawInput));
        setStatus({ type: 'info', message: 'Converted LRC timestamps to SRT.' });
      } catch (err) {
        setStatus({ type: 'error', message: `LRC conversion failed: ${err.message}` });
      }
      return;
    }

    // plain: align to official/auto YouTube captions via the local admin API (yt-dlp)
    if (!videoId) {
      setStatus({ type: 'error', message: 'Enter a valid YouTube URL or video ID first.' });
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
      setStatus({ type: 'success', message: 'Synced with YouTube captions! Review the preview below.' });
    } catch (err) {
      setStatus({ type: 'error', message: `Sync failed: ${err.message}. Make sure yt-dlp is installed locally.` });
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
      setStatus({ type: 'info', message: `Shifted all timestamps by ${offset >= 0 ? `+${offset}` : offset}s.` });
    } catch (err) {
      setStatus({ type: 'error', message: `Shift failed: ${err.message}` });
    }
  };

  const handleSaveRegister = async () => {
    setStatus(null);
    if (!videoId) return setStatus({ type: 'error', message: 'A YouTube URL/ID is required to register the song.' });
    if (!title.trim() || !artist.trim()) return setStatus({ type: 'error', message: 'Title and artist are required.' });
    if (!previewContent.trim()) return setStatus({ type: 'error', message: 'Nothing to save — process the lyrics first.' });

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
      setStatus({ type: 'success', message: `Registered "${artist} - ${title}"! It now appears in the video picker.` });
    } catch (err) {
      setStatus({ type: 'error', message: `Save failed: ${err.message}` });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-page-container">
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
          <button type="button" className="srt-btn" onClick={handleProcess} disabled={isSyncing}>
            {isSyncing ? <RefreshCw size={16} className="admin-spin" /> : <Wand2 size={16} />}
            {inputFormat === 'plain' ? 'Sync from YouTube Captions' : 'Process'}
          </button>
        </div>

        {status && (
          <div className={`admin-status admin-status-${status.type}`}>
            {status.type === 'error' ? <AlertTriangle size={16} /> : <CheckCircle2 size={16} />}
            <span>{status.message}</span>
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
    </div>
  );
}
