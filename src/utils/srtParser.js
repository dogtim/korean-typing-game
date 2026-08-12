// SRT Subtitle Parser Utility for Custom User Lyrics Upload

/**
 * Converts SRT timestamp string (HH:MM:SS,mmm) to total seconds.
 */
export function parseSRTTimeToSeconds(timeStr) {
  if (!timeStr) return 0;
  const clean = timeStr.trim().replace(',', '.');
  const parts = clean.split(':');
  if (parts.length === 3) {
    const hours = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);
    return hours * 3600 + minutes * 60 + seconds;
  } else if (parts.length === 2) {
    const minutes = parseFloat(parts[0]);
    const seconds = parseFloat(parts[1]);
    return minutes * 60 + seconds;
  }
  return parseFloat(clean) || 0;
}

/**
 * Parses full SRT file text into synced lyrics structure.
 */
export function parseSRTContent(srtText) {
  if (!srtText) return [];

  const normalized = srtText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const blocks = normalized.split(/\n\s*\n/);

  const results = [];

  for (const block of blocks) {
    const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) continue;

    // Find timestamp line (containing '-->')
    const timeLineIdx = lines.findIndex(l => l.includes('-->'));
    if (timeLineIdx === -1) continue;

    const timeParts = lines[timeLineIdx].split('-->');
    if (timeParts.length < 2) continue;

    const start = parseSRTTimeToSeconds(timeParts[0]);
    const end = parseSRTTimeToSeconds(timeParts[1]);

    const textLines = lines.slice(timeLineIdx + 1);
    if (textLines.length === 0) continue;

    let ko = '';
    let rom = '';
    let en = '';

    // If text line has pipe '|' separators (e.g. Hangul | Romanization | English)
    if (textLines[0].includes('|')) {
      const parts = textLines[0].split('|').map(p => p.trim());
      ko = parts[0] || '';
      rom = parts.length > 2 ? parts[1] : '';
      en = parts.length > 2 ? parts[2] : (parts[1] || '');
    } else {
      ko = textLines.join(' ');
      rom = '';
      en = '';
    }

    results.push({ start, end, ko, rom, en });
  }

  return results;
}
