import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FANCHANT_PRESETS, FANCHANT_TYPES } from '../src/utils/fanchantData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

export function listFanchants() {
  console.log('\n🪄 Registered K-Pop Fanchant Presets:\n');
  const entries = Object.values(FANCHANT_PRESETS);
  if (entries.length === 0) {
    console.log('  No fanchants registered yet.');
    return;
  }

  console.log('ID           | Song Title                | Group / Artist          | Fandom    | Cues');
  console.log('-------------+---------------------------+-------------------------+-----------+-----');
  for (const item of entries) {
    const id = (item.songId || '').padEnd(12);
    const title = (item.title || '').slice(0, 25).padEnd(25);
    const artist = (item.groupName || item.artist || '').slice(0, 23).padEnd(23);
    const fandom = (item.fandomName || '-').slice(0, 9).padEnd(9);
    const count = String(item.cues?.length || 0).padStart(4);
    console.log(`${id} | ${title} | ${artist} | ${fandom} | ${count}`);
  }
  console.log(`\nTotal: ${entries.length} song(s) with official fanchants.\n`);
}

export function validateFanchants() {
  console.log('\n🔍 Validating K-Pop Fanchant Presets in src/utils/fanchantData.js...\n');
  let errorCount = 0;
  let warnCount = 0;

  const validTypes = new Set(Object.keys(FANCHANT_TYPES).map(k => FANCHANT_TYPES[k].id));

  for (const [id, preset] of Object.entries(FANCHANT_PRESETS)) {
    console.log(`Checking [${id}] "${preset.title}" by ${preset.artist || preset.groupName}...`);

    if (!preset.songId) {
      console.error(`  ❌ Missing songId property in preset ${id}`);
      errorCount++;
    }

    if (!Array.isArray(preset.cues) || preset.cues.length === 0) {
      console.error(`  ❌ Preset ${id} has empty or invalid cues array.`);
      errorCount++;
      continue;
    }

    let prevEnd = 0;
    preset.cues.forEach((cue, idx) => {
      if (typeof cue.start !== 'number' || typeof cue.end !== 'number') {
        console.error(`  ❌ Cue #${idx + 1} (${cue.id || 'unnamed'}): start and end must be numbers.`);
        errorCount++;
      } else if (cue.start >= cue.end) {
        console.error(`  ❌ Cue #${idx + 1} (${cue.chant}): start (${cue.start}) >= end (${cue.end}).`);
        errorCount++;
      } else if (cue.start < prevEnd - 0.2) {
        console.warn(`  ⚠️ Cue #${idx + 1} (${cue.chant}) starts (${cue.start}s) before previous cue ended (${prevEnd}s).`);
        warnCount++;
      }

      if (!cue.chant || typeof cue.chant !== 'string') {
        console.error(`  ❌ Cue #${idx + 1}: chant text cannot be empty.`);
        errorCount++;
      }

      if (!cue.type || !validTypes.has(cue.type)) {
        console.error(`  ❌ Cue #${idx + 1} (${cue.chant}): invalid type "${cue.type}". Allowed types: ${Array.from(validTypes).join(', ')}`);
        errorCount++;
      }

      prevEnd = cue.end || 0;
    });

    console.log(`  ✅ Verified ${preset.cues.length} cue(s) for "${preset.title}".`);
  }

  console.log(`\nValidation Complete: ${errorCount} error(s), ${warnCount} warning(s).\n`);
  return errorCount === 0;
}

export function scaffoldFanchant(videoId) {
  if (!videoId) {
    console.error('❌ Please provide a YouTube Video ID. Example: node tools/cli.js fanchant --scaffold 2wA_b6YHjqQ');
    return;
  }

  // Look for matching SRT in public/lyrics
  const lyricsDir = path.join(rootDir, 'public', 'lyrics');
  let matchingSrt = null;
  if (fs.existsSync(lyricsDir)) {
    const files = fs.readdirSync(lyricsDir);
    // Find file that may contain artist or video ID
    matchingSrt = files.find(f => f.toLowerCase().includes(videoId.toLowerCase())) || null;
  }

  console.log(`\n🪄 Generating Fanchant Scaffold for Video ID: ${videoId}...`);
  const template = {
    songId: videoId,
    title: 'Song Title',
    artist: 'Artist (Hangul)',
    groupName: 'Group Name',
    fandomName: 'Fandom Name',
    description: '官方 Weverse 應援法。注意副歌重音卡點與句尾呼應。',
    cues: [
      {
        id: `${videoId}-1`,
        start: 5.0,
        end: 7.5,
        chant: 'CHANT_HERE!',
        type: 'shout',
        roman: 'CHANT_HERE!',
        meaning: '齊聲大喊',
        tip: '前奏切入點',
        leadTimeSec: 2.0
      },
      {
        id: `${videoId}-2`,
        start: 35.0,
        end: 37.0,
        chant: 'HOOK_CHANT!',
        type: 'hook',
        roman: 'HOOK_CHANT!',
        meaning: '副歌重音連打',
        tip: '配合節拍往下重擊',
        leadTimeSec: 1.0
      }
    ]
  };

  console.log('\nCopy and paste this template into src/utils/fanchantData.js:\n');
  console.log(JSON.stringify({ [videoId]: template }, null, 2));
  console.log('\n');
}
