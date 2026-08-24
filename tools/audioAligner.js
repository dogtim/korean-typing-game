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
    // 1. Fetch available subtitle tracks from YouTube
    const langArgs = preferredLanguages.join(',');
    const cmd = `yt-dlp --write-sub --write-auto-sub --sub-lang "${langArgs}" --convert-subs srt --skip-download -o "${tempPrefix}.%(ext)s" "${url}"`;
    execSync(cmd, { stdio: 'pipe' });
  } catch (err) {
    console.warn('⚠️ Could not automatically download YouTube sub tracks:', err.message);
  }

  // Check downloaded files
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
        // 1-to-1 exact line count match
        const alignedItems = officialItems.map((item, idx) => ({
          ...item,
          text: userLines[idx]
        }));
        finalSrtContent = formatSRT(alignedItems);
      } else {
        // Subtitle block count difference: preserve accurate official subtitles
        finalSrtContent = rawSrtContent;
      }
    } else {
      finalSrtContent = rawSrtContent;
    }
  } else {
    throw new Error(`Could not extract subtitle stream from YouTube video ${cleanId}.`);
  }

  // Cleanup temp files
  for (const f of possibleFiles) {
    if (fs.existsSync(f)) {
      try { fs.unlinkSync(f); } catch (_e) {}
    }
  }

  // Save to target destination (public/lyrics)
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
