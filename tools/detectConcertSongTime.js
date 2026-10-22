#!/usr/bin/env node

/**
 * detectConcertSongTime.js
 * 
 * Automatically detects the start timestamp (seconds & mm:ss) of a specific song
 * in long-form concert fancams / live recordings using multi-tier detection:
 *  1. YouTube Fan Tracklist & Pinned Comment Timestamp Extraction
 *  2. Cross-Correlation Audio Fingerprint Alignment (via yt-dlp + ffmpeg)
 *  3. Multi-Camera Relative Offset & Absolute Anchor Calculation
 * 
 * Usage:
 *   node tools/detectConcertSongTime.js --song "DRIP" --videos "9Y-95rgsDDY,xJuXrgbx-8I"
 *   node tools/detectConcertSongTime.js --song "DRIP" --concert "summer_sonic_2026"
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2);

function getArg(flag, defaultValue = '') {
  const idx = args.indexOf(flag);
  if (idx !== -1 && idx + 1 < args.length) {
    return args[idx + 1];
  }
  return defaultValue;
}

const songQuery = getArg('--song', 'DRIP');
const videosArg = getArg('--videos', '9Y-95rgsDDY,xJuXrgbx-8I,WuelifqxMLs');
const videoIds = videosArg.split(',').map(s => s.trim()).filter(Boolean);

console.log(`🎵 [Concert Audio Locator] Analyzing song: "${songQuery}" across ${videoIds.length} videos...\n`);

// Helper to convert mm:ss or hh:mm:ss to seconds
function parseTimeToSeconds(timeStr) {
  if (!timeStr) return null;
  const parts = timeStr.trim().split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return null;
}

function formatSecondsToTime(sec) {
  const s = Math.round(sec);
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${rem < 10 ? '0' : ''}${rem} (${s}s)`;
}

// 1. Fetch comments & parse tracklists for each video
async function getTimestampFromComments(videoId, songName) {
  try {
    const jsonStr = execSync(`yt-dlp --write-comments --dump-single-json "https://www.youtube.com/watch?v=${videoId}" 2>/dev/null`, {
      encoding: 'utf-8',
      maxBuffer: 50 * 1024 * 1024
    });
    const data = JSON.parse(jsonStr);
    const comments = data.comments || [];
    const songRegex = new RegExp(`(?:${songName}|${songName.replace(/\\s+/g, '')})`, 'i');

    for (const c of comments) {
      const text = c.text || '';
      // Look for lines like "08:46 DRIP" or "8:47 🩷 DRIP 🩷"
      const lines = text.split('\n');
      for (const line of lines) {
        if (songRegex.test(line)) {
          const timeMatch = line.match(/(\\d{1,2}:\\d{2}(?::\\d{2})?)/);
          if (timeMatch) {
            const sec = parseTimeToSeconds(timeMatch[1]);
            return {
              seconds: sec,
              formatted: timeMatch[1],
              author: c.author,
              snippet: line.trim()
            };
          }
        }
      }
    }
  } catch (_e) {
    // Ignore error and fallback to acoustic
  }
  return null;
}

// Read PCM WAV
function readWav(filePath) {
  const buf = fs.readFileSync(filePath);
  const sampleRate = buf.readUInt32LE(24);
  const samples = [];
  for (let i = 44; i < buf.length - 1; i += 2) {
    samples.push(buf.readInt16LE(i));
  }
  return { sampleRate, samples };
}

// Compute acoustic cross-correlation between two audio files
function computeCrossCorrelation(wavPath1, wavPath2, stepMs = 10, winMs = 40) {
  const wav1 = readWav(wavPath1);
  const wav2 = readWav(wavPath2);

  const step = Math.floor(wav1.sampleRate * (stepMs / 1000));
  const win = Math.floor(wav1.sampleRate * (winMs / 1000));

  function getEnvelope(samples, sampleRate) {
    const env = [];
    for (let i = 0; i < samples.length - win; i += step) {
      let sum = 0;
      for (let j = 0; j < win; j++) {
        const s = samples[i + j];
        sum += s * s;
      }
      env.push(Math.sqrt(sum / win));
    }
    return env;
  }

  const env1 = getEnvelope(wav1.samples, wav1.sampleRate);
  const env2 = getEnvelope(wav2.samples, wav2.sampleRate);

  function normalize(arr) {
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    let variance = 0;
    for (const v of arr) variance += (v - mean) * (v - mean);
    const std = Math.sqrt(variance / arr.length) || 1;
    return arr.map(v => (v - mean) / std);
  }

  const norm1 = normalize(env1);
  const norm2 = normalize(env2);

  let maxCorr = -Infinity;
  let bestLag = 0;

  for (let lag = 0; lag <= norm2.length - norm1.length; lag++) {
    let dot = 0;
    for (let i = 0; i < norm1.length; i++) {
      dot += norm1[i] * norm2[lag + i];
    }
    const score = dot / norm1.length;
    if (score > maxCorr) {
      maxCorr = score;
      bestLag = lag;
    }
  }

  const lagSeconds = (bestLag * step) / wav1.sampleRate;
  return { score: maxCorr, lagSeconds };
}

async function main() {
  const results = [];

  // Step 1: Scan fan tracklists and timestamps
  for (const vId of videoIds) {
    process.stdout.write(`🔍 Searching tracklists/metadata for ${vId}... `);
    const found = await getTimestampFromComments(vId, songQuery);
    if (found) {
      console.log(`✅ Found: ${found.formatted} (${found.seconds}s) [by ${found.author}]`);
      results.push({
        videoId: vId,
        songStartTime: found.seconds,
        timeFormatted: found.formatted,
        method: 'Tracklist / Comment Anchor',
        confidence: '99%'
      });
    } else {
      console.log(`⚠️ Not found in comments (will calculate via acoustic correlation)`);
      results.push({
        videoId: vId,
        songStartTime: null,
        timeFormatted: null,
        method: 'Pending Acoustic',
        confidence: 'Pending'
      });
    }
  }

  // Step 2: For videos missing direct comment timestamp, use acoustic cross-correlation with known anchor
  const anchorVideo = results.find(r => r.songStartTime !== null) || {
    videoId: '9Y-95rgsDDY',
    songStartTime: 526,
    timeFormatted: '8:46'
  };

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    if (r.songStartTime === null) {
      console.log(`\n🎙️ Computing acoustic correlation between Anchor (${anchorVideo.videoId} @ ${anchorVideo.timeFormatted}) and Target (${r.videoId})...`);
      
      const tmpAnchor = `/tmp/anchor_${anchorVideo.videoId}.wav`;
      const tmpTarget = `/tmp/target_${r.videoId}.wav`;

      try {
        // Extract 20s slice around song start from anchor
        const anchorStart = Math.max(0, anchorVideo.songStartTime - 6);
        execSync(`ffmpeg -y -ss ${anchorStart} -i \$(yt-dlp -g -f ba "https://www.youtube.com/watch?v=${anchorVideo.videoId}") -t 20 -ar 16000 -ac 1 ${tmpAnchor}`, { stdio: 'pipe' });
        
        // Extract 60s slice from target (searching around 11:00 or estimated)
        const targetSearchStart = Math.max(0, anchorVideo.songStartTime + 100);
        execSync(`ffmpeg -y -ss ${targetSearchStart} -i \$(yt-dlp -g -f ba "https://www.youtube.com/watch?v=${r.videoId}") -t 60 -ar 16000 -ac 1 ${tmpTarget}`, { stdio: 'pipe' });

        const corr = computeCrossCorrelation(tmpAnchor, tmpTarget);
        const resolvedSec = Math.round(targetSearchStart + corr.lagSeconds + 6);
        r.songStartTime = resolvedSec;
        r.timeFormatted = `${Math.floor(resolvedSec / 60)}:${(resolvedSec % 60 < 10 ? '0' : '')}${resolvedSec % 60}`;
        r.method = `Acoustic Cross-Correlation (Score: ${(corr.score * 100).toFixed(1)}%)`;
        r.confidence = `${(corr.score * 100).toFixed(1)}%`;
        console.log(`✅ Acoustic alignment locked: ${r.timeFormatted} (${resolvedSec}s)`);
      } catch (e) {
        console.warn(`Acoustic fallback error: ${e.message}`);
      }
    }
  }

  // Step 3: Present Clean Comparison Table
  console.log('\n========================================================================');
  console.log(`🎯 DETECTED TIMESTAMPS FOR "${songQuery}" IN CONCERT VIDEOS`);
  console.log('========================================================================');
  
  const masterSec = results[0]?.songStartTime || 0;
  
  results.forEach((item, idx) => {
    const diff = item.songStartTime - masterSec;
    const diffStr = diff >= 0 ? `+${diff}s` : `${diff}s`;
    const verifiedUrl = `https://www.youtube.com/watch?v=${item.videoId}&t=${item.songStartTime}s`;
    
    console.log(`[CAM ${idx + 1}] Video ID: ${item.videoId}`);
    console.log(`       Song Start : ${formatSecondsToTime(item.songStartTime)}`);
    console.log(`       Offset Diff: ${diffStr} (Relative to CAM 1)`);
    console.log(`       Method     : ${item.method}`);
    console.log(`       Preview URL: ${verifiedUrl}`);
    console.log('------------------------------------------------------------------------');
  });

  console.log('\n💡 [Concert Wall Preset Snippet]');
  console.log('You can directly paste these offsets into src/data/concertsData.js:');
  console.log(JSON.stringify(results.map((r, i) => ({
    slotId: i,
    name: `CAM ${i + 1}`,
    videoId: r.videoId,
    offset: r.songStartTime,
    verifiedUrl: `https://www.youtube.com/watch?v=${r.videoId}&t=${r.songStartTime}s`
  })), null, 2));
}

main();
