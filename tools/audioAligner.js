/**
 * Audio / YouTube Forced Alignment & Subtitle Sync Pipeline
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseSRT, formatSRT } from './srtEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Extract audio from a video/audio file or YouTube link, and filter to vocal frequencies (200Hz - 3500Hz).
 */
export function extractAndFilterAudio({ input, outputWav }) {
  const ytMatch = input.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))?([\w-]{11})/);
  let source = input;
  let tempDownload = null;

  if (ytMatch && (input.includes('youtube.com') || input.includes('youtu.be') || input.length === 11)) {
    const videoId = ytMatch[1];
    tempDownload = path.join(rootDir, 'tools', `temp_audio_${videoId}.webm`);
    console.log(`⬇️ Downloading YouTube audio stream for ${videoId}...`);
    execSync(`yt-dlp -f "ba" -o "${tempDownload}" "https://www.youtube.com/watch?v=${videoId}"`, { stdio: 'pipe' });
    source = tempDownload;
  }

  console.log(`🎙️ Filtering vocal frequencies (200Hz - 3500Hz) to 16kHz mono WAV...`);
  const targetDir = path.dirname(outputWav);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  execSync(`ffmpeg -y -i "${source}" -vn -ar 16000 -ac 1 -af "highpass=f=200,lowpass=f=3500" "${outputWav}"`, { stdio: 'pipe' });

  if (tempDownload && fs.existsSync(tempDownload)) {
    try { fs.unlinkSync(tempDownload); } catch {}
  }

  return outputWav;
}

/**
 * Method 2: Acoustic / Vocal Onset Alignment
 * Aligns SRT subtitle cues to audio energy attacks in a vocal-filtered WAV.
 */
export function acousticAlignSRT({
  srtContent,
  wavPath,
  preRoll = 0.30,
  manualAnchors = {}
}) {
  const items = parseSRT(srtContent);
  if (items.length === 0) throw new Error('SRT content has no subtitle cues.');

  const buf = fs.readFileSync(wavPath);
  const sampleRate = buf.readUInt32LE(24);
  const channels = buf.readUInt16LE(22);
  const bitsPerSample = buf.readUInt16LE(34);

  if (channels !== 1 || bitsPerSample !== 16) {
    throw new Error(`Expected 16-bit mono WAV, got channels=${channels}, bits=${bitsPerSample}. Please use extractAndFilterAudio.`);
  }

  const samples = [];
  for (let i = 44; i < buf.length - 1; i += 2) {
    samples.push(buf.readInt16LE(i));
  }

  const win = Math.floor(sampleRate * 0.04);
  const step = Math.floor(sampleRate * 0.02);
  const times = [];
  const energies = [];

  for (let i = 0; i < samples.length - win; i += step) {
    let sum = 0;
    for (let j = 0; j < win; j++) {
      const s = samples[i + j];
      sum += s * s;
    }
    const rms = Math.sqrt(sum / win);
    times.push(i / sampleRate);
    energies.push(rms);
  }

  const results = [];

  for (let idx = 0; idx < items.length; idx++) {
    const cueNum = idx + 1;
    const item = items[idx];
    const origS = item.start;
    const origE = item.end;
    const origDur = Math.max(1.0, origE - origS);

    if (manualAnchors[cueNum]) {
      const [anchorS, anchorE] = manualAnchors[cueNum];
      results.push({
        index: cueNum,
        start: anchorS,
        end: anchorE,
        text: item.text,
        onset: anchorS + preRoll,
        isAnchor: true
      });
      continue;
    }

    const prevResult = results.length > 0 ? results[results.length - 1] : null;
    const prevOnset = prevResult ? prevResult.onset : 0;
    const prevStart = prevResult ? prevResult.start : 0;

    let minSearchS = Math.max(prevOnset + 1.0, origS - 2.8);
    let maxSearchS = origS + 0.4;
    if (minSearchS >= maxSearchS) {
      minSearchS = origS - 1.5;
    }

    let bestOnset = origS - 0.8;
    let bestScore = -1e9;

    const windowIndices = [];
    let locSum = 0;
    for (let i = 0; i < times.length; i++) {
      if (times[i] >= minSearchS && times[i] <= maxSearchS) {
        windowIndices.push(i);
        locSum += energies[i];
      }
    }
    const locMean = windowIndices.length > 0 ? locSum / windowIndices.length : 5000;

    for (const i of windowIndices) {
      if (i < 2 || i >= times.length - 2) continue;
      const t = times[i];
      const dE = energies[i] - energies[i - 2];
      const level = energies[i];
      if (dE > 1500 && level > locMean * 0.7) {
        const score = dE * (level / locMean);
        if (score > bestScore) {
          bestScore = score;
          bestOnset = t;
        }
      }
    }

    const targetS = Math.max(prevStart + 1.0, Math.round((bestOnset - preRoll) * 100) / 100);
    const targetE = Math.round((targetS + origDur) * 100) / 100;

    if (prevResult && prevResult.end > targetS) {
      prevResult.end = Math.round(targetS * 100) / 100;
    }

    results.push({
      index: cueNum,
      start: targetS,
      end: targetE,
      text: item.text,
      onset: bestOnset,
      isAnchor: false
    });
  }

  const calibratedItems = results.map(r => ({
    index: r.index,
    start: r.start,
    end: r.end,
    text: r.text
  }));

  return {
    content: formatSRT(calibratedItems),
    items: calibratedItems,
    details: results
  };
}

/**
 * Extracts and aligns YouTube audio/subtitles to target lyrics text.
 */
export async function syncVideoLyrics({
  videoId,
  lyricsText,
  outputFilename,
  preferredLanguages = ['ko', 'en']
}) {
  const cleanId = videoId.replace(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/, '$1');
  const tempPrefix = path.join(rootDir, 'tools', `temp_${cleanId}`);
  const url = `https://www.youtube.com/watch?v=${cleanId}`;

  console.log(`🔍 [1/3] Checking official synchronized subtitles on YouTube for: ${cleanId}...`);

  try {
    const langArgs = preferredLanguages.join(',');
    const cmd = `yt-dlp --write-sub --write-auto-sub --sub-lang "${langArgs}" --convert-subs srt --skip-download -o "${tempPrefix}.%(ext)s" "${url}"`;
    execSync(cmd, { stdio: 'pipe' });
  } catch (err) {
    console.warn('⚠️ Could not automatically download YouTube sub tracks:', err.message);
  }

  const possibleFiles = [
    `${tempPrefix}.ko.srt`,
    `${tempPrefix}.en.srt`,
    `${tempPrefix}.srt`
  ];

  let rawSrtContent = null;
  for (const f of possibleFiles) {
    if (fs.existsSync(f)) {
      rawSrtContent = fs.readFileSync(f, 'utf-8');
      break;
    }
  }

  let finalSrtContent = '';

  if (rawSrtContent) {
    console.log(`✅ [2/3] Successfully extracted official synchronized stream (${possibleFiles.find(f => fs.existsSync(f))})!`);

    if (lyricsText && lyricsText.trim()) {
      console.log('🔄 [3/3] Aligning timestamps to provided authentic lyrics string...');
      const officialItems = parseSRT(rawSrtContent);
      const userLines = lyricsText.split('\n').map(l => l.trim()).filter(Boolean);

      if (officialItems.length === userLines.length) {
        const alignedItems = officialItems.map((item, idx) => ({
          ...item,
          text: userLines[idx]
        }));
        finalSrtContent = formatSRT(alignedItems);
      } else {
        finalSrtContent = rawSrtContent;
      }
    } else {
      finalSrtContent = rawSrtContent;
    }
  } else {
    throw new Error(`Could not extract subtitle stream from YouTube video ${cleanId}.`);
  }

  for (const f of possibleFiles) {
    if (fs.existsSync(f)) {
      try { fs.unlinkSync(f); } catch {}
    }
  }

  const targetPublic = path.join(rootDir, 'public', 'lyrics', outputFilename);
  if (!fs.existsSync(path.dirname(targetPublic))) {
    fs.mkdirSync(path.dirname(targetPublic), { recursive: true });
  }
  fs.writeFileSync(targetPublic, finalSrtContent, 'utf-8');

  console.log(`💾 Synced SRT saved to: ${targetPublic}`);
  return {
    success: true,
    outputPath: targetPublic,
    content: finalSrtContent
  };
}
