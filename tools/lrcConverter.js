/**
 * LRC to SRT Converter Utility
 */

import { formatSRT } from './srtEngine.js';

/**
 * Parses an LRC string ([mm:ss.xx] or [mm:ss.xxx]) into structured timestamps and text.
 */
export function parseLRC(lrcContent) {
  const lines = lrcContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const entries = [];

  const timeRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    // Ignore metadata tags like [ti:Title], [ar:Artist], [al:Album]
    if (/^\[[a-zA-Z]+:/.test(line)) continue;

    let match;
    const timestamps = [];
    while ((match = timeRegex.exec(line)) !== null) {
      const min = parseInt(match[1], 10);
      const sec = parseInt(match[2], 10);
      const millisStr = match[3] || '00';
      const millis = parseInt(millisStr.padEnd(3, '0').slice(0, 3), 10);
      const totalSec = min * 60 + sec + (millis / 1000);
      timestamps.push(totalSec);
    }

    const text = line.replace(timeRegex, '').trim();
    if (timestamps.length > 0 && text) {
      for (const t of timestamps) {
        entries.push({ time: t, text });
      }
    }
  }

  // Sort chronologically
  entries.sort((a, b) => a.time - b.time);
  return entries;
}

/**
 * Converts LRC entries into SRT items with estimated end times.
 * @param {string} lrcContent - Raw LRC lyrics string
 * @param {number} defaultDuration - Default duration in seconds if last line (default: 4.0s)
 * @param {number} maxLineDuration - Maximum line duration in seconds (default: 6.0s)
 */
export function convertLrcToSrtItems(lrcContent, defaultDuration = 4.0, maxLineDuration = 6.0) {
  const entries = parseLRC(lrcContent);
  const srtItems = [];

  for (let i = 0; i < entries.length; i++) {
    const current = entries[i];
    const next = entries[i + 1];

    const start = current.time;
    let end;

    if (next) {
      // End at next line start, or capped at start + maxLineDuration
      const gap = next.time - current.time;
      end = gap > 0.1 ? Math.min(next.time, start + maxLineDuration) : start + defaultDuration;
    } else {
      end = start + defaultDuration;
    }

    srtItems.push({
      index: i + 1,
      start: Math.round(start * 1000) / 1000,
      end: Math.round(end * 1000) / 1000,
      text: current.text
    });
  }

  return srtItems;
}

/**
 * Converts raw LRC content directly into formatted SRT string.
 */
export function convertLrcToSrtString(lrcContent, defaultDuration = 4.0, maxLineDuration = 6.0) {
  const items = convertLrcToSrtItems(lrcContent, defaultDuration, maxLineDuration);
  return formatSRT(items);
}
