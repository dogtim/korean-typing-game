#!/usr/bin/env node

/**
 * calibrate_offsets.mjs
 * 
 * Anchor Delta Calibration Tool for Concert Multi-Cam Wall
 * 
 * Principle:
 * In continuous uncut concert fancams, the relative time difference (Delta) between any two cameras
 * is constant throughout the entire performance:
 *   Delta_c = TargetCam_Start - AnchorCam_Start
 *   SongOffset_c = AnchorSongOffset + Delta_c
 * 
 * Usage Examples:
 *   node .agents/skills/calibrate-concert-multicam-offsets/scripts/calibrate_offsets.mjs \
 *     --anchor "WuelifqxMLs:10" \
 *     --cams "xJuXrgbx-8I:10,wSj_O5v5aMo:39,_zV0QTAHd5I:77,9Y-95rgsDDY:4"
 * 
 *   node .agents/skills/calibrate-concert-multicam-offsets/scripts/calibrate_offsets.mjs \
 *     --concert "babymonster_summer_sonic_2026"
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workspaceRoot = path.resolve(__dirname, '../../../../');
const concertsDataPath = path.resolve(workspaceRoot, 'src/data/concertsData.js');

const args = process.argv.slice(2);

function getArg(flag, defaultValue = '') {
  const idx = args.indexOf(flag);
  if (idx !== -1 && idx + 1 < args.length) {
    return args[idx + 1];
  }
  return defaultValue;
}

const hasFlag = (flag) => args.includes(flag);

// Convert mm:ss or hh:mm:ss to seconds
function parseTimeToSeconds(timeStr) {
  if (!timeStr) return null;
  const parts = String(timeStr).trim().split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return Number(timeStr) || null;
}

function formatSec(sec) {
  const s = Math.round(sec);
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return `${m}:${rem < 10 ? '0' : ''}${rem} (${s}s)`;
}

// Fetch YouTube chapters / tracklist from description or metadata
function fetchVideoChapters(videoId) {
  console.log(`🔍 [Anchor Analyzer] Extracting tracklist & chapters for ${videoId}...`);
  try {
    const out = execSync(`yt-dlp --dump-json --no-playlist "https://www.youtube.com/watch?v=${videoId}" 2>/dev/null`, {
      encoding: 'utf-8',
      maxBuffer: 20 * 1024 * 1024
    });
    const data = JSON.parse(out);

    // 1. Check native YouTube chapters
    if (Array.isArray(data.chapters) && data.chapters.length > 0) {
      console.log(`✅ Found ${data.chapters.length} native YouTube chapters.`);
      return data.chapters.map(c => ({
        title: c.title.trim(),
        startSec: Math.round(c.start_time)
      }));
    }

    // 2. Parse from description
    const desc = data.description || '';
    const lines = desc.split('\n');
    const parsed = [];
    const timeRegex = /(?:(\d{1,2}:\d{2}(?::\d{2})?))\s+([^\n\r]+)/;

    for (const line of lines) {
      const match = line.match(timeRegex);
      if (match) {
        const sec = parseTimeToSeconds(match[1]);
        if (sec !== null) {
          parsed.push({
            title: match[2].trim().replace(/^[-–—:]\s*/, ''),
            startSec: sec
          });
        }
      }
    }

    if (parsed.length > 0) {
      console.log(`✅ Extracted ${parsed.length} tracklist entries from video description.`);
      return parsed;
    }
  } catch (err) {
    console.warn(`⚠️ Could not auto-fetch chapters for ${videoId}: ${err.message}`);
  }
  return null;
}

async function main() {
  console.log('========================================================================');
  console.log('🎯 CONCERT MULTI-CAM ANCHOR DELTA CALIBRATOR');
  console.log('========================================================================\n');

  const anchorArg = getArg('--anchor', 'WuelifqxMLs:10');
  const camsArg = getArg('--cams', 'xJuXrgbx-8I:10,wSj_O5v5aMo:39,_zV0QTAHd5I:77,9Y-95rgsDDY:4');

  const [anchorId, anchorStartStr] = anchorArg.split(':');
  const anchorBaseSec = Number(anchorStartStr) || 0;

  console.log(`⚓ Master Anchor Video: ${anchorId}`);
  console.log(`⏱️ Anchor Verified Start: ${anchorBaseSec}s (${formatSec(anchorBaseSec)})\n`);

  // Parse other cams
  const camDeltas = [];
  const entries = camsArg.split(',').map(s => s.trim()).filter(Boolean);

  for (const entry of entries) {
    const [vId, secStr] = entry.split(':');
    const sec = Number(secStr) || 0;
    const delta = sec - anchorBaseSec;
    const diffSign = delta >= 0 ? `+${delta}s` : `${delta}s`;
    camDeltas.push({
      videoId: vId,
      startSec: sec,
      delta: delta
    });
    console.log(`📹 CAM [${vId}]:`);
    console.log(`   Song 1 Verified: ${sec}s`);
    console.log(`   Delta relative to Anchor: ${diffSign}\n`);
  }

  // Fetch or use predefined chapters for anchor
  let chapters = fetchVideoChapters(anchorId);
  if (!chapters || chapters.length === 0) {
    console.log('ℹ️ Using default Summer Sonic setlist chapter markers:');
    chapters = [
      { title: 'WE GO UP', startSec: 10 },
      { title: 'CHOOM', startSec: 199 },
      { title: 'MOON', startSec: 510 },
      { title: 'DRIP', startSec: 679 },
      { title: 'FOREVER', startSec: 1042 },
      { title: 'Really Like You', startSec: 1255 },
      { title: 'I LIKE IT', startSec: 1450 },
      { title: 'HOT SAUCE', startSec: 1832 },
      { title: 'SUGAR HONEY ICE TEA', startSec: 1980 },
      { title: 'BATTER UP', startSec: 2191 },
      { title: 'SHEESH', startSec: 2383 }
    ];
  }

  console.log('------------------------------------------------------------------------');
  console.log('🎵 GENERATING MULTI-CAM TIME OFFSETS FOR ALL SONGS:');
  console.log('------------------------------------------------------------------------');

  const generatedSongs = {};

  for (const item of chapters) {
    // Clean key
    const songKey = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    const baseOffset = item.startSec;

    const availableVideos = [];

    // 1. Add Anchor Video
    availableVideos.push({
      videoId: anchorId,
      offset: baseOffset
    });

    // 2. Add each calibrated camera applying Delta
    for (const cam of camDeltas) {
      let calcOffset = Math.max(0, baseOffset + cam.delta);

      // Check if cam is 9Y-95rgsDDY (32-min version with cut MC segments)
      if (cam.videoId === '9Y-95rgsDDY') {
        if (baseOffset >= 500 && baseOffset < 1800) {
          // After MC1 cut (-155s)
          calcOffset = Math.max(0, baseOffset - 155);
        } else if (baseOffset >= 1800) {
          // After MC3 cut (-332s)
          calcOffset = Math.max(0, baseOffset - 332);
        }
      }

      availableVideos.push({
        videoId: cam.videoId,
        offset: calcOffset
      });
    }

    generatedSongs[songKey] = {
      title: item.title,
      availableVideos
    };
  }

  console.log(JSON.stringify(generatedSongs, null, 2));

  console.log('\n✅ [Done] Successfully calculated multi-camera offsets for ' + Object.keys(generatedSongs).length + ' songs.');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
