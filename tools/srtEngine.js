/**
 * SRT Engine: Parsing, Formatting, Shifting, and Validation Utilities
 */

/**
 * Converts HH:MM:SS,mmm or MM:SS,mmm or SS.sss to numeric seconds.
 */
export function timeStringToSeconds(timeStr) {
  if (!timeStr) return 0;
  const str = timeStr.trim().replace('.', ',');
  const parts = str.split(':');
  
  if (parts.length === 3) {
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const [seconds, millis = 0] = parts[2].split(',').map(n => parseInt(n, 10));
    return hours * 3600 + minutes * 60 + seconds + (millis / 1000);
  } else if (parts.length === 2) {
    const minutes = parseInt(parts[0], 10);
    const [seconds, millis = 0] = parts[1].split(',').map(n => parseInt(n, 10));
    return minutes * 60 + seconds + (millis / 1000);
  } else {
    return parseFloat(str.replace(',', '.'));
  }
}

/**
 * Converts numeric seconds to standard SRT format HH:MM:SS,mmm
 */
export function secondsToTimeString(sec) {
  const safeSec = Math.max(0, sec);
  const hours = Math.floor(safeSec / 3600);
  const minutes = Math.floor((safeSec % 3600) / 60);
  const seconds = Math.floor(safeSec % 60);
  const millis = Math.round((safeSec % 1) * 1000);

  const pad = (n, size = 2) => String(n).padStart(size, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)},${pad(millis, 3)}`;
}

/**
 * Parses raw SRT string into structured subtitle items.
 */
export function parseSRT(srtContent) {
  const normalized = srtContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const blocks = normalized.trim().split(/\n\s*\n/);
  const items = [];

  for (const block of blocks) {
    const lines = block.trim().split('\n');
    if (lines.length < 2) continue;

    // Detect if first line is numeric index or timestamp
    let timeLineIdx = 0;
    if (/^\d+$/.test(lines[0].trim())) {
      timeLineIdx = 1;
    }

    const timeLine = lines[timeLineIdx];
    if (!timeLine || !timeLine.includes('-->')) continue;

    const [startStr, endStr] = timeLine.split('-->').map(s => s.trim());
    const start = timeStringToSeconds(startStr);
    const end = timeStringToSeconds(endStr);
    const text = lines.slice(timeLineIdx + 1).join('\n').trim();

    if (text) {
      items.push({
        index: items.length + 1,
        start,
        end,
        startStr,
        endStr,
        text
      });
    }
  }

  return items;
}

/**
 * Formats subtitle items into valid SRT file format.
 */
export function formatSRT(items) {
  return items.map((item, idx) => {
    const index = idx + 1;
    const start = secondsToTimeString(item.start);
    const end = secondsToTimeString(item.end);
    return `${index}\n${start} --> ${end}\n${item.text}`;
  }).join('\n\n') + '\n';
}

/**
 * Shifts all timestamps in the SRT items by offsetSeconds.
 */
export function shiftSRT(srtContent, offsetSeconds) {
  const items = parseSRT(srtContent);
  const shifted = items.map(item => ({
    ...item,
    start: Math.max(0, Math.round((item.start + offsetSeconds) * 1000) / 1000),
    end: Math.max(0.1, Math.round((item.end + offsetSeconds) * 1000) / 1000)
  }));
  return formatSRT(shifted);
}

/**
 * Calibrates the first anchor point: shifts SRT so that srtAnchor becomes videoAnchor.
 */
export function alignAnchor(srtContent, srtAnchorTime, videoAnchorTime) {
  const srtSec = typeof srtAnchorTime === 'number' ? srtAnchorTime : timeStringToSeconds(srtAnchorTime);
  const vidSec = typeof videoAnchorTime === 'number' ? videoAnchorTime : timeStringToSeconds(videoAnchorTime);
  const offset = vidSec - srtSec;
  return {
    offset,
    content: shiftSRT(srtContent, offset)
  };
}

/**
 * Validates SRT structure, timing order, and bilingual (Hangul/English) content.
 */
export function validateSRT(srtContent) {
  const items = parseSRT(srtContent);
  const errors = [];
  const warnings = [];

  if (items.length === 0) {
    errors.push('SRT content contains 0 valid subtitle blocks.');
    return { valid: false, errors, warnings, totalLines: 0 };
  }

  let hangulCount = 0;
  let englishCount = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const lineNum = item.index;

    // Check duration
    if (item.end <= item.start) {
      errors.push(`Line ${lineNum}: End time (${item.end}s) must be greater than start time (${item.start}s).`);
    }

    // Check sequential order
    if (i > 0 && item.start < items[i - 1].start) {
      errors.push(`Line ${lineNum}: Start time (${item.start}s) is earlier than previous line start (${items[i - 1].start}s).`);
    }

    // Language statistics
    if (/[가-힣]/.test(item.text)) hangulCount++;
    if (/[a-zA-Z]/.test(item.text)) englishCount++;
  }

  const hangulRatio = Math.round((hangulCount / items.length) * 100);
  const englishRatio = Math.round((englishCount / items.length) * 100);

  if (hangulRatio < 30) {
    warnings.push(`Low Hangul density (${hangulRatio}%). Game listening and typing challenges may be limited.`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    totalLines: items.length,
    hangulRatio: `${hangulRatio}%`,
    englishRatio: `${englishRatio}%`,
    duration: `${secondsToTimeString(items[items.length - 1].end)}`
  };
}
