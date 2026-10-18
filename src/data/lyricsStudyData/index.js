// Centralized Lyrics Study Library for BABYMONSTER & K-Pop Songs
// Supports:
// 1. 韓英雙語深度精讀 (Korean + English Bilingual Analysis: DRIP, WE GO UP, SHEESH)
// 2. 100% 全英語美式嘻哈深度研習 (All-English Hip-Hop Analysis: CLIK CLAK)
// 3. 膠囊化單字分塊 (Interactive Pill Chips)
// 4. 三層研習抽屜數據 (文法結構、發音音變與Flow、語域正式度與情境對話)

import { DRIP_STUDY_DATA } from './dripStudy';
import { WE_GO_UP_STUDY_DATA } from './weGoUpStudy';
import { CLIK_CLAK_STUDY_DATA } from './clikClakStudy';
import { SHEESH_STUDY_DATA } from './sheeshStudy';

export { DRIP_STUDY_DATA } from './dripStudy';
export { WE_GO_UP_STUDY_DATA } from './weGoUpStudy';
export { CLIK_CLAK_STUDY_DATA } from './clikClakStudy';
export { SHEESH_STUDY_DATA } from './sheeshStudy';

export const LYRIC_STUDY_PRESETS = [
  DRIP_STUDY_DATA,
  WE_GO_UP_STUDY_DATA,
  CLIK_CLAK_STUDY_DATA,
  SHEESH_STUDY_DATA
];

/**
 * Normalizes string for fuzzy/case-insensitive matching
 */
function normalizeQuery(str) {
  if (!str) return '';
  return str
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, '')
    .trim();
}

/**
 * Finds the study dataset for a song by preset ID, YouTube ID, or song title.
 * @param {string} songIdOrTitle - Video ID, preset ID, or title
 * @param {boolean} [fallbackToDefault=true] - Whether to return DRIP as fallback if none matched
 * @returns {object|null} The matching study dataset
 */
export function findStudyDataForSong(songIdOrTitle, fallbackToDefault = true) {
  if (!songIdOrTitle) return fallbackToDefault ? DRIP_STUDY_DATA : null;
  
  const raw = songIdOrTitle.toString().trim();
  const rawLower = raw.toLowerCase();
  const normalized = normalizeQuery(raw);

  // 1. Direct ID or YouTube ID match
  const directMatch = LYRIC_STUDY_PRESETS.find(preset => {
    if (preset.id.toLowerCase() === rawLower) return true;
    if (preset.youtubeId && preset.youtubeId === raw) return true;
    if (preset.altYoutubeIds && preset.altYoutubeIds.includes(raw)) return true;
    return false;
  });
  if (directMatch) return directMatch;

  // 2. Normalized Title match
  const titleMatch = LYRIC_STUDY_PRESETS.find(preset => {
    const presetNorm = normalizeQuery(preset.title);
    if (!presetNorm) return false;
    return normalized.includes(presetNorm) || presetNorm.includes(normalized);
  });
  if (titleMatch) return titleMatch;

  // 3. Fallback to DRIP (or null if strict)
  return fallbackToDefault ? DRIP_STUDY_DATA : null;
}

/**
 * Returns summary info of all currently available study song datasets
 */
export function getAvailableStudyPresets() {
  return LYRIC_STUDY_PRESETS.map(preset => {
    const koCount = preset.sentences.filter(s => s.language === 'ko').length;
    const enCount = preset.sentences.filter(s => s.language === 'en').length;
    const isPureEnglish = koCount === 0 && enCount > 0;

    return {
      id: preset.id,
      title: preset.title,
      artist: preset.artist,
      album: preset.album,
      year: preset.year,
      youtubeId: preset.youtubeId,
      totalCount: preset.sentences.length,
      koCount,
      enCount,
      isPureEnglish,
      typeLabel: isPureEnglish ? '🇺🇸 全英語純粹解析' : '🇰🇷🇺🇸 韓英雙語精解',
      tagColor: isPureEnglish ? '#00e5ff' : '#ff4081'
    };
  });
}
