// Centralized Lyrics Study Library for BABYMONSTER & K-Pop Songs
// Complete Discography Coverage for BABYMONSTER (All 23 Songs!)
// Supports:
// 1. 韓英雙語深度精讀 (Korean + English Bilingual Analysis)
// 2. 100% 全英語美式嘻哈深度研習 (All-English Hip-Hop Analysis)
// 3. 100% 全英語靈魂抒情深度研習 (All-English Ballad Analysis)
// 4. 100% 全英語流行時髦深度研習 (All-English Pop Analysis)
// 5. 膠囊化單字分塊 (Interactive Pill Chips)
// 6. 三層研習抽屜數據 (文法結構、發音音變與Flow、語域正式度與情境對話)

import { DRIP_STUDY_DATA } from './dripStudy';
import { WE_GO_UP_STUDY_DATA } from './weGoUpStudy';
import { CLIK_CLAK_STUDY_DATA } from './clikClakStudy';
import { SHEESH_STUDY_DATA } from './sheeshStudy';
import { STUCK_IN_THE_MIDDLE_STUDY_DATA } from './stuckInTheMiddleStudy';
import { LIKE_THAT_STUDY_DATA } from './likeThatStudy';
import { BATTER_UP_STUDY_DATA } from './batterUpStudy';
import { BILLIONAIRE_STUDY_DATA } from './billionaireStudy';
import { WOKE_UP_IN_TOKYO_STUDY_DATA } from './wokeUpInTokyoStudy';
import { FOREVER_STUDY_DATA } from './foreverStudy';
import { PSYCHO_STUDY_DATA } from './psychoStudy';
import { DREAM_STUDY_DATA } from './dreamStudy';
import { HOT_SAUCE_STUDY_DATA } from './hotSauceStudy';
import { LOVE_IN_MY_HEART_STUDY_DATA } from './loveInMyHeartStudy';
import { REALLY_LIKE_YOU_STUDY_DATA } from './reallyLikeYouStudy';
import { LOVE_MAYBE_STUDY_DATA } from './loveMaybeStudy';
import { SUGAR_HONEY_ICE_TEA_STUDY_DATA } from './sugarHoneyIceTeaStudy';
import { CHOOM_STUDY_DATA } from './choomStudy';
import { SUPA_DUPA_LUV_STUDY_DATA } from './supaDupaLuvStudy';
import { WILD_STUDY_DATA } from './wildStudy';
import { MOON_STUDY_DATA } from './moonStudy';
import { I_LIKE_IT_STUDY_DATA } from './iLikeItStudy';
import { DESERVE_STUDY_DATA } from './deserveStudy';

export {
  DRIP_STUDY_DATA,
  WE_GO_UP_STUDY_DATA,
  CLIK_CLAK_STUDY_DATA,
  SHEESH_STUDY_DATA,
  STUCK_IN_THE_MIDDLE_STUDY_DATA,
  LIKE_THAT_STUDY_DATA,
  BATTER_UP_STUDY_DATA,
  BILLIONAIRE_STUDY_DATA,
  WOKE_UP_IN_TOKYO_STUDY_DATA,
  FOREVER_STUDY_DATA,
  PSYCHO_STUDY_DATA,
  DREAM_STUDY_DATA,
  HOT_SAUCE_STUDY_DATA,
  LOVE_IN_MY_HEART_STUDY_DATA,
  REALLY_LIKE_YOU_STUDY_DATA,
  LOVE_MAYBE_STUDY_DATA,
  SUGAR_HONEY_ICE_TEA_STUDY_DATA,
  CHOOM_STUDY_DATA,
  SUPA_DUPA_LUV_STUDY_DATA,
  WILD_STUDY_DATA,
  MOON_STUDY_DATA,
  I_LIKE_IT_STUDY_DATA,
  DESERVE_STUDY_DATA
};

export const LYRIC_STUDY_PRESETS = [
  DRIP_STUDY_DATA,
  STUCK_IN_THE_MIDDLE_STUDY_DATA,
  CLIK_CLAK_STUDY_DATA,
  LIKE_THAT_STUDY_DATA,
  WE_GO_UP_STUDY_DATA,
  SHEESH_STUDY_DATA,
  BATTER_UP_STUDY_DATA,
  FOREVER_STUDY_DATA,
  PSYCHO_STUDY_DATA,
  BILLIONAIRE_STUDY_DATA,
  WOKE_UP_IN_TOKYO_STUDY_DATA,
  DREAM_STUDY_DATA,
  HOT_SAUCE_STUDY_DATA,
  LOVE_IN_MY_HEART_STUDY_DATA,
  REALLY_LIKE_YOU_STUDY_DATA,
  LOVE_MAYBE_STUDY_DATA,
  CHOOM_STUDY_DATA,
  SUPA_DUPA_LUV_STUDY_DATA,
  WILD_STUDY_DATA,
  MOON_STUDY_DATA,
  I_LIKE_IT_STUDY_DATA,
  SUGAR_HONEY_ICE_TEA_STUDY_DATA,
  DESERVE_STUDY_DATA
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
export function findStudyDataForSong(songIdOrTitle, fallbackToDefault = false) {
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

    let typeLabel = '🇰🇷🇺🇸 韓英雙語精解';
    if (isPureEnglish) {
      if (preset.title.includes('CLIK') || preset.title.includes('Tokyo') || preset.title.includes('BILLIONAIRE')) {
        typeLabel = '🇺🇸 全美式嘻哈饒舌';
      } else if (preset.title.includes('Stuck') || preset.title.includes('DREAM') || preset.title.includes('Maybe')) {
        typeLabel = '🇺🇸 全美式抒情靈魂';
      } else {
        typeLabel = '🇺🇸 100% 全美語深度研習';
      }
    }

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
      typeLabel,
      tagColor: isPureEnglish ? '#00e5ff' : '#ff4081'
    };
  });
}
