/**
 * Song & Subtitle Fetcher Utility
 * Automatically searches YouTube by song name, retrieves official synchronized subtitles,
 * converts formats, and optionally registers the song directly into Hangul PopPop.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { registerSong } from './autoRegister.js';
import { validateSRT, shiftSRT } from './srtEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Searches YouTube for candidate videos matching the query.
 */
export function searchYouTube(query, maxResults = 3) {
  if (!query || !query.trim()) throw new Error('Search query is required.');

  // Refine query to target official music video or performance
  const cleanQuery = query.toLowerCase().includes('mv') || query.toLowerCase().includes('official')
    ? query
    : `${query} Official MV`;

  const cmd = `yt-dlp "ytsearch${maxResults}:${cleanQuery.replace(/"/g, '\\"')}" --print "%(id)s|||%(title)s|||%(duration_string)s|||%(webpage_url)s"`;

  try {
    const rawOutput = execSync(cmd, { stdio: 'pipe' }).toString().trim();
    if (!rawOutput) return [];

    const lines = rawOutput.split('\n').filter(Boolean);
    return lines.map(line => {
      const [id, title, duration, url] = line.split('|||');
      return { id: id.trim(), title: title.trim(), duration: duration?.trim() || '', url: url?.trim() || `https://www.youtube.com/watch?v=${id.trim()}` };
    });
  } catch (err) {
    console.warn('⚠️ yt-dlp search error:', err.message);
    return [];
  }
}

/**
 * Downloads subtitle tracks from YouTube.
 * Uploaded (manual) captions are tried first. Auto-generated speech-recognition
 * captions are only used as a fallback and are flagged with `isAuto: true`,
 * because they contain [music] tags, misheard words and rolling duplicate cues.
 */
export function downloadYouTubeSubtitles(videoId, preferredLangs = ['ko', 'en']) {
  const cleanId = videoId.replace(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/, '$1');
  const url = `https://www.youtube.com/watch?v=${cleanId}`;
  const langList = preferredLangs.join(',');

  const attempt = (autoFlag) => {
    const tempPrefix = path.join(rootDir, 'tools', `sub_${cleanId}_${Date.now()}`);
    const cmd = `yt-dlp --write-sub ${autoFlag} --sub-lang "${langList}" --convert-subs srt --skip-download -o "${tempPrefix}.%(ext)s" "${url}"`;

    try {
      execSync(cmd, { stdio: 'pipe' });
    } catch (_e) {
      // Ignore error if subtitles not found
    }

    const checkedFiles = [
      { lang: 'ko', path: `${tempPrefix}.ko.srt` },
      { lang: 'en', path: `${tempPrefix}.en.srt` },
      { lang: 'general', path: `${tempPrefix}.srt` }
    ];

    let foundContent = null;
    let detectedLang = null;
    for (const item of checkedFiles) {
      if (fs.existsSync(item.path)) {
        foundContent = fs.readFileSync(item.path, 'utf-8');
        detectedLang = item.lang;
        break;
      }
    }

    // Clean up any temp files matching prefix
    try {
      const dir = path.dirname(tempPrefix);
      const prefixName = path.basename(tempPrefix);
      fs.readdirSync(dir)
        .filter(f => f.startsWith(prefixName))
        .forEach(f => {
          try { fs.unlinkSync(path.join(dir, f)); } catch (_e) {}
        });
    } catch (_e) {}

    return foundContent ? { content: foundContent, lang: detectedLang } : null;
  };

  const manual = attempt('');
  if (manual) {
    return { success: true, isAuto: false, lang: manual.lang, content: manual.content };
  }

  const auto = attempt('--write-auto-sub');
  if (auto) {
    return { success: true, isAuto: true, lang: auto.lang, content: auto.content };
  }

  return {
    success: false,
    message: 'No subtitles found on YouTube.'
  };
}

/**
 * Full end-to-end song fetcher pipeline.
 */
export async function fetchSongPipeline({
  query,
  artist,
  title,
  register = false,
  customVideoId = null,
  customOffset = 0,
  allowAuto = false
}) {
  console.log(`\n🔎 Searching for K-Pop song: "${query}"...`);

  let targetVideo = null;
  if (customVideoId) {
    targetVideo = {
      id: customVideoId,
      title: `${artist || 'Artist'} - ${title || query}`,
      url: `https://www.youtube.com/watch?v=${customVideoId}`
    };
  } else {
    const candidates = searchYouTube(query, 3);
    if (candidates.length === 0) {
      throw new Error(`Could not find any YouTube video for "${query}".`);
    }
    targetVideo = candidates[0];
    console.log(`🎥 Best YouTube Match: ${targetVideo.title}`);
    console.log(`🔗 Video URL: ${targetVideo.url} (ID: ${targetVideo.id}, Duration: ${targetVideo.duration || 'N/A'})`);
  }

  // Infer Artist and Song Title if not explicitly provided
  let songTitle = title;
  let songArtist = artist;

  if (!songTitle || !songArtist) {
    const cleaned = targetVideo.title
      .replace(/\[.*?\]|\(.*?\)|Official\s*MV|MV|M\/V|Music\s*Video/gi, '')
      .trim();

    if (cleaned.includes('-')) {
      const parts = cleaned.split('-');
      songArtist = songArtist || parts[0].trim();
      songTitle = songTitle || parts[1].trim();
    } else if (cleaned.includes('‘') && cleaned.includes('’')) {
      const match = cleaned.match(/(.*?)[‘'](.*?)['’]/);
      if (match) {
        songArtist = songArtist || match[1].trim();
        songTitle = songTitle || match[2].trim();
      }
    } else {
      songTitle = songTitle || query;
      songArtist = songArtist || 'K-Pop';
    }
  }

  // Generate clean filename
  const cleanArtist = (songArtist.split('(')[0] || songArtist).trim().replace(/[^a-zA-Z0-9가-힣]/g, '-').toUpperCase();
  const cleanTitle = (songTitle.split('(')[0] || songTitle).trim().replace(/[^a-zA-Z0-9가-힣]/g, '-').toUpperCase();
  const srtFilename = `${cleanArtist}-${cleanTitle}.srt`;
  const srtOutputPath = path.join(rootDir, 'public', 'lyrics', srtFilename);

  console.log(`\n🎧 Checking synchronized subtitles on YouTube for: ${targetVideo.id}...`);
  const subResult = downloadYouTubeSubtitles(targetVideo.id, ['ko', 'en']);

  let srtContent = null;
  let source = null;
  let autoOnly = false;

  if (subResult.success && subResult.isAuto && !allowAuto) {
    console.log(`⚠️ Only YouTube AUTO-GENERATED captions exist for this video. They contain [music] tags, misheard words and`);
    console.log(`   rolling duplicate cues, so they were NOT saved and the song was NOT registered.`);
    console.log(`   Next steps: get real lyrics (K-Lyrics / Genius), build an SRT, then run \`align-acoustic\` or sync manually.`);
    console.log(`   (Pass --allow-auto to save the auto captions anyway.)`);
    console.log(`   1. RentAnAdviser: https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx?artist=${encodeURIComponent(songTitle)}`);
    console.log(`   2. K-Lyrics:      https://k-lyrics.com/songs?q=${encodeURIComponent(songTitle)}`);
    autoOnly = true;
  } else if (subResult.success) {
    console.log(subResult.isAuto
      ? `⚠️ Using AUTO-GENERATED YouTube ${subResult.lang.toUpperCase()} captions (--allow-auto). Review the lyrics before release!`
      : `✅ Found uploaded YouTube ${subResult.lang.toUpperCase()} synchronized subtitles!`);
    srtContent = subResult.content;
    if (customOffset && customOffset !== 0) {
      srtContent = shiftSRT(srtContent, customOffset);
      console.log(`⏱️ Applied intro offset shift: ${customOffset >= 0 ? `+${customOffset}` : customOffset}s`);
    }
    source = subResult.isAuto ? 'youtube_auto' : 'youtube_official';

    // Save to public/lyrics
    if (!fs.existsSync(path.dirname(srtOutputPath))) {
      fs.mkdirSync(path.dirname(srtOutputPath), { recursive: true });
    }
    fs.writeFileSync(srtOutputPath, srtContent, 'utf-8');
    console.log(`💾 Saved synchronized SRT to: public/lyrics/${srtFilename}`);

    const quality = validateSRT(srtContent);
    console.log(`📊 Quality Report: ${quality.totalLines} lines | Hangul Ratio: ${quality.hangulRatio}%`);
  } else {
    console.log(`ℹ️ No direct subtitle stream on YouTube.`);
    console.log(`🌐 Recommended next sources to extract time-synced lyrics:`);
    console.log(`   1. RentAnAdviser: https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx?artist=${encodeURIComponent(songTitle)}`);
    console.log(`   2. K-Lyrics:      https://k-lyrics.com/songs?q=${encodeURIComponent(songTitle)}`);
  }

  // Auto-Registration
  let registered = false;
  if (register && srtContent) {
    const songId = `${cleanArtist.toLowerCase()}_${cleanTitle.toLowerCase()}`.replace(/-/g, '_');
    registerSong({
      id: songId,
      title: songTitle,
      artist: songArtist,
      srtFilename,
      youtubeIds: [targetVideo.id],
      primaryUrl: targetVideo.url
    });
    registered = true;
    console.log(`🚀 Registered song "${songTitle}" by "${songArtist}" into Hangul PopPop game registries!`);
  }

  return {
    videoId: targetVideo.id,
    videoTitle: targetVideo.title,
    videoUrl: targetVideo.url,
    title: songTitle,
    artist: songArtist,
    srtFilename,
    srtPath: `/lyrics/${srtFilename}`,
    srtContent,
    hasSubtitles: !!srtContent,
    autoOnly,
    source,
    registered
  };
}
