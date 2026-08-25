/**
 * YouTube & Video Frame Extractor Utility
 * Extracts high-resolution frames from YouTube videos or local video files
 * at exact timestamps with customizable intervals and frame counts.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { timeStringToSeconds, secondsToTimeString } from './srtEngine.js';
import { VIDEO_SRT_MAPPINGS } from '../src/utils/videoSrtMapping.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Resolves input string to a YouTube Video ID, YouTube URL, or local file.
 */
export function resolveVideoSource(input) {
  if (!input || typeof input !== 'string') {
    throw new Error('Video source (YouTube URL, Video ID, or Song Name) is required.');
  }

  const trimmed = input.trim();

  // 1. Check if input is a local file
  const localPath = path.isAbsolute(trimmed) ? trimmed : path.resolve(rootDir, trimmed);
  if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
    return {
      type: 'local',
      path: localPath,
      id: path.basename(localPath, path.extname(localPath)),
      title: path.basename(localPath),
      url: null
    };
  }

  // 2. Check if input is a YouTube URL
  const ytMatch = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (ytMatch) {
    const videoId = ytMatch[1];
    // Check if known in mappings
    const mapped = VIDEO_SRT_MAPPINGS.find(m => m.youtubeIds.includes(videoId));
    return {
      type: 'youtube',
      id: mapped ? mapped.srtFilename.replace(/\.srt$/i, '') : videoId,
      videoId,
      title: mapped?.title || videoId,
      url: `https://www.youtube.com/watch?v=${videoId}`
    };
  }

  // 3. Check if input is a direct 11-char YouTube ID
  if (/^[\w-]{11}$/.test(trimmed)) {
    const mapped = VIDEO_SRT_MAPPINGS.find(m => m.youtubeIds.includes(trimmed));
    return {
      type: 'youtube',
      id: mapped ? mapped.srtFilename.replace(/\.srt$/i, '') : trimmed,
      videoId: trimmed,
      title: mapped?.title || trimmed,
      url: `https://www.youtube.com/watch?v=${trimmed}`
    };
  }

  // 4. Check if input is a song alias or title in VIDEO_SRT_MAPPINGS
  const query = trimmed.toLowerCase().replace(/[^a-z0-9]/g, '');
  const matchedMapping = VIDEO_SRT_MAPPINGS.find(m => {
    const cleanId = m.id.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanTitle = m.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanSrt = m.srtFilename.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanId.includes(query) || cleanTitle.includes(query) || cleanSrt.includes(query);
  });

  if (matchedMapping && matchedMapping.youtubeIds.length > 0) {
    const videoId = matchedMapping.youtubeIds[0];
    return {
      type: 'youtube',
      id: matchedMapping.srtFilename.replace(/\.srt$/i, ''),
      videoId,
      title: matchedMapping.title,
      url: `https://www.youtube.com/watch?v=${videoId}`
    };
  }

  // Fallback: treat as raw query for yt-dlp
  return {
    type: 'youtube',
    id: trimmed.replace(/[^a-zA-Z0-9_-]/g, '_'),
    videoId: trimmed,
    title: trimmed,
    url: trimmed.startsWith('http') ? trimmed : `https://www.youtube.com/watch?v=${trimmed}`
  };
}

/**
 * Parses timestamp input into seconds (supports "10", "10.25", "10s", "00:10", "00:00:10,250")
 */
export function parseTimestamp(input) {
  if (typeof input === 'number') return Math.max(0, input);
  if (!input) return 0;
  const clean = String(input).trim().replace(/s(ec(onds?)?)?$/i, '');
  if (/^[\d.]+$/.test(clean)) {
    return Math.max(0, parseFloat(clean));
  }
  return Math.max(0, timeStringToSeconds(clean));
}

/**
 * Extracts multiple frames from a video source.
 * 
 * @param {Object} options
 * @param {string} options.video - YouTube URL, Video ID, or Song Name (e.g. "choom", "x3eqqoZPV_E")
 * @param {number|string} options.start - Starting timestamp in seconds or "MM:SS" (e.g. 10 or "00:10")
 * @param {number} [options.count=1] - Number of frames to extract
 * @param {number} [options.duration=0.25] - Step interval between frames in seconds (e.g. 0.25)
 * @param {string} [options.outputDir] - Output directory for frames (defaults to "output/frames")
 * @param {string} [options.format='jpg'] - Image format ('jpg', 'png', 'webp')
 * @param {number} [options.quality=2] - JPEG/WebP quality (1=best, 31=worst)
 * @param {string} [options.resolution='1080p'] - Video resolution ('1080p', '720p', 'best')
 * @param {string} [options.prefix] - Custom filename prefix
 */
export async function extractVideoFrames({
  video,
  start = 0,
  count = 1,
  duration = 0.25,
  interval,
  outputDir,
  format = 'jpg',
  quality = 2,
  resolution = '1080p',
  prefix
}) {
  const videoSource = resolveVideoSource(video);
  const startSec = parseTimestamp(start);
  const frameCount = Math.max(1, parseInt(count, 10) || 1);
  const stepSec = Math.max(0.01, parseTimestamp(interval ?? duration ?? 0.25));

  // Determine output directory
  const targetDir = outputDir
    ? (path.isAbsolute(outputDir) ? outputDir : path.resolve(rootDir, outputDir))
    : path.resolve(rootDir, 'output', 'frames');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Calculate target timestamps
  const targetTimestamps = [];
  for (let i = 0; i < frameCount; i++) {
    targetTimestamps.push(startSec + i * stepSec);
  }

  const namePrefix = prefix || videoSource.id || 'video';
  console.log(`🎬 Extracting ${frameCount} frame(s) for "${videoSource.title}"...`);
  console.log(`⏱️  Timestamps: ${targetTimestamps.map(t => `${t.toFixed(3)}s (${secondsToTimeString(t)})`).join(', ')}`);

  let videoFilePath = null;
  let isTempFile = false;
  let sliceStartOffset = 0;

  if (videoSource.type === 'local') {
    videoFilePath = videoSource.path;
    sliceStartOffset = 0;
  } else {
    // YouTube Source: download a narrow time slice containing all requested frames
    const minSec = Math.max(0, startSec - 1.0);
    const maxSec = targetTimestamps[targetTimestamps.length - 1] + 1.2;
    sliceStartOffset = minSec;

    const tempDir = path.resolve(rootDir, 'scratch');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const tempVideoPrefix = path.join(tempDir, `slice_${videoSource.videoId}_${Date.now()}`);
    isTempFile = true;

    console.log(`📥 Downloading video slice [${minSec.toFixed(2)}s - ${maxSec.toFixed(2)}s] via yt-dlp...`);

    // Resolution format selector
    let formatSelector = 'bestvideo[height<=1080]+bestaudio/best[height<=1080]/best';
    if (resolution === '720p') {
      formatSelector = 'bestvideo[height<=720]+bestaudio/best[height<=720]/best';
    } else if (resolution === 'best' || resolution === '4k' || resolution === '2160p') {
      formatSelector = 'bestvideo+bestaudio/best';
    }

    const downloadCmd = `yt-dlp --no-warnings --download-sections "*${minSec.toFixed(3)}-${maxSec.toFixed(3)}" --force-keyframes-at-cuts -f "${formatSelector}" -o "${tempVideoPrefix}.%(ext)s" "${videoSource.url}"`;
    
    try {
      execSync(downloadCmd, { stdio: 'pipe' });
    } catch (_err) {
      console.warn('⚠️ Standard slice download failed, retrying with fallback stream...');
      const fallbackCmd = `yt-dlp --no-warnings --download-sections "*${minSec.toFixed(3)}-${maxSec.toFixed(3)}" -f "best" -o "${tempVideoPrefix}.%(ext)s" "${videoSource.url}"`;
      execSync(fallbackCmd, { stdio: 'pipe' });
    }

    // Locate the downloaded slice file
    const matchedFiles = fs.readdirSync(tempDir).filter(f => f.startsWith(path.basename(tempVideoPrefix)));
    if (!matchedFiles || matchedFiles.length === 0) {
      throw new Error(`Failed to download video slice for ${videoSource.url}`);
    }

    videoFilePath = path.join(tempDir, matchedFiles[0]);
  }

  // Extract frames with ffmpeg
  const extractedFrames = [];

  try {
    for (let i = 0; i < targetTimestamps.length; i++) {
      const targetSec = targetTimestamps[i];
      const offsetInSlice = Math.max(0, targetSec - sliceStartOffset);
      const safeTimeStr = targetSec.toFixed(3).replace('.', '_');
      const filename = `${namePrefix}_t${safeTimeStr}s.${format}`;
      const outputPath = path.join(targetDir, filename);

      console.log(`📸 [${i + 1}/${frameCount}] Extracting frame at ${targetSec.toFixed(3)}s ➔ ${filename}`);

      // ffmpeg frame extraction with high visual quality
      const ffmpegCmd = `ffmpeg -y -ss ${offsetInSlice.toFixed(3)} -i "${videoFilePath}" -frames:v 1 -q:v ${quality} "${outputPath}"`;
      execSync(ffmpegCmd, { stdio: 'pipe' });

      if (fs.existsSync(outputPath)) {
        extractedFrames.push({
          index: i + 1,
          timestamp: targetSec,
          timeString: secondsToTimeString(targetSec),
          filename,
          outputPath,
          sizeBytes: fs.statSync(outputPath).size
        });
      }
    }
  } finally {
    // Clean up temporary downloaded slice
    if (isTempFile && videoFilePath && fs.existsSync(videoFilePath)) {
      try {
        fs.unlinkSync(videoFilePath);
        // Also remove any stray .part or .webm files
        const tempBase = videoFilePath.replace(/\.[^/.]+$/, '');
        fs.readdirSync(path.dirname(videoFilePath))
          .filter(f => f.startsWith(path.basename(tempBase)))
          .forEach(f => {
            try { fs.unlinkSync(path.join(path.dirname(videoFilePath), f)); } catch (_e) {}
          });
      } catch (_e) {}
    }
  }

  console.log(`🎉 Successfully extracted ${extractedFrames.length} frame(s) into: ${targetDir}`);

  return {
    success: true,
    video: videoSource,
    startSec,
    stepSec,
    count: frameCount,
    outputDir: targetDir,
    frames: extractedFrames
  };
}
