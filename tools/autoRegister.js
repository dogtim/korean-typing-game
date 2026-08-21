/**
 * Auto-Registration Utility for Video Mappings, Prepared Lyrics, and Preset Songs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Registers a new song in videoSrtMapping.js, preparedLyrics.js, and kpopSongs.js
 */
export function registerSong({
  id,
  title,
  artist,
  srtFilename,
  youtubeIds = [],
  primaryUrl
}) {
  if (!id || !title || !artist || !srtFilename) {
    throw new Error('id, title, artist, and srtFilename are required fields.');
  }

  const cleanFilename = srtFilename.endsWith('.srt') ? srtFilename : `${srtFilename}.srt`;
  const srtPath = `/lyrics/${cleanFilename}`;
  const ids = Array.isArray(youtubeIds) ? youtubeIds : [youtubeIds];
  const primaryId = ids[0] || '';
  const watchUrl = primaryUrl || `https://www.youtube.com/watch?v=${primaryId}`;
  const alternateUrls = ids.slice(1).map(vidId => `https://www.youtube.com/watch?v=${vidId}`);

  let updatedCount = 0;

  // 1. Update src/utils/videoSrtMapping.js
  const mappingFile = path.join(rootDir, 'src/utils/videoSrtMapping.js');
  if (fs.existsSync(mappingFile)) {
    let content = fs.readFileSync(mappingFile, 'utf-8');
    if (!content.includes(`id: '${id}'`)) {
      const newEntry = `  {
    id: '${id}',
    title: "${title.replace(/"/g, '\\"')}",
    artist: '${artist.replace(/'/g, "\\'")}',
    srtFilename: '${cleanFilename}',
    srtPath: '${srtPath}',
    youtubeIds: [${ids.map(i => `'${i}'`).join(', ')}],
    primaryUrl: '${watchUrl}',
    alternateUrls: [${alternateUrls.map(u => `'${u}'`).join(', ')}],
    description: "${artist} - ${title} synchronized SRT subtitle lyrics"
  }`;

      content = content.replace(/export const VIDEO_SRT_MAPPINGS = \[([\s\S]*?)\];/, (match, p1) => {
        const trimmed = p1.trimEnd();
        const separator = trimmed.length > 0 ? ',\n' : '\n';
        return `export const VIDEO_SRT_MAPPINGS = [${trimmed}${separator}${newEntry}\n];`;
      });

      fs.writeFileSync(mappingFile, content, 'utf-8');
      updatedCount++;
    }
  }

  // 2. Update src/utils/preparedLyrics.js
  const preparedFile = path.join(rootDir, 'src/utils/preparedLyrics.js');
  if (fs.existsSync(preparedFile)) {
    let content = fs.readFileSync(preparedFile, 'utf-8');
    if (!content.includes(`id: '${id}'`)) {
      const newEntry = `  {
    id: '${id}',
    title: "${title.replace(/"/g, '\\"')}",
    artist: '${artist.replace(/'/g, "\\'")}',
    youtubeId: '${primaryId}',
    filename: '${cleanFilename}',
    path: '${srtPath}',
    description: "${artist} ${title} full prepared SRT subtitle file."
  }`;

      content = content.replace(/export const PREPARED_SRT_LIBRARY = \[([\s\S]*?)\];/, (match, p1) => {
        const trimmed = p1.trimEnd();
        const separator = trimmed.length > 0 ? ',\n' : '\n';
        return `export const PREPARED_SRT_LIBRARY = [${trimmed}${separator}${newEntry}\n];`;
      });

      fs.writeFileSync(preparedFile, content, 'utf-8');
      updatedCount++;
    }
  }

  // 3. Update src/utils/kpopSongs.js
  const kpopSongsFile = path.join(rootDir, 'src/utils/kpopSongs.js');
  if (fs.existsSync(kpopSongsFile)) {
    let content = fs.readFileSync(kpopSongsFile, 'utf-8');
    if (!content.includes(`srtFilename: '${cleanFilename}'`)) {
      const newEntry = `  {
    id: '${primaryId}',
    title: "${title.replace(/"/g, '\\"')}",
    artist: '${artist.replace(/'/g, "\\'")}',
    youtubeUrl: '${watchUrl}',
    thumbnail: 'https://img.youtube.com/vi/${primaryId}/hqdefault.jpg',
    srtFilename: '${cleanFilename}',
    srtPath: '${srtPath}',
    lyrics: []
  }`;

      content = content.replace(/export const KPOP_SONG_PRESETS = \[([\s\S]*?)\];/, (match, p1) => {
        const trimmed = p1.trimEnd();
        const separator = trimmed.length > 0 ? ',\n' : '\n';
        return `export const KPOP_SONG_PRESETS = [${trimmed}${separator}${newEntry}\n];`;
      });

      fs.writeFileSync(kpopSongsFile, content, 'utf-8');
      updatedCount++;
    }
  }

  return {
    success: true,
    updatedRegistries: updatedCount,
    songId: id,
    srtPath
  };
}
