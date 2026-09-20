import { FANCHANT_TYPES } from './types.js';

import sheesh from './babymonster_sheesh.js';
import drip from './babymonster_drip.js';
import likeThat from './babymonster_likeThat.js';
import sugarHoneyIceTea from './babymonster_sugarHoneyIceTea.js';
import forever from './babymonster_forever.js';
import clikClak from './babymonster_clikClak.js';
import choom from './babymonster_choom.js';
import hotSauce from './babymonster_hotSauce.js';
import stuckInTheMiddle from './babymonster_stuckInTheMiddle.js';
import dream from './babymonster_dream.js';
import weGoUp from './babymonster_weGoUp.js';
import loveInMyHeart from './babymonster_loveInMyHeart.js';
import reallyLikeYou from './babymonster_reallyLikeYou.js';
import billionaire from './babymonster_billionaire.js';
import loveMaybe from './babymonster_loveMaybe.js';
import wokeUpInTokyo from './babymonster_wokeUpInTokyo.js';
import moon from './babymonster_moon.js';
import iLikeIt from './babymonster_iLikeIt.js';

export { FANCHANT_TYPES };

const allSongs = [
  sheesh,
  drip,
  likeThat,
  sugarHoneyIceTea,
  forever,
  clikClak,
  choom,
  hotSauce,
  stuckInTheMiddle,
  dream,
  weGoUp,
  loveInMyHeart,
  reallyLikeYou,
  billionaire,
  loveMaybe,
  wokeUpInTokyo,
  moon,
  iLikeIt,
];

export const FANCHANT_PRESETS = allSongs.reduce((acc, song) => {
  acc[song.songId] = song;
  return acc;
}, {});

export const FANCHANT_ALIASES = allSongs.reduce((acc, song) => {
  if (Array.isArray(song.aliases)) {
    for (const alias of song.aliases) {
      acc[alias] = song.songId;
    }
  }
  return acc;
}, {});

/**
 * Retrieve fanchant guide for a given song videoId or title.
 */
export function getFanchantForSong(songIdOrTitle) {
  if (!songIdOrTitle) return null;
  const targetId = FANCHANT_ALIASES[songIdOrTitle] || songIdOrTitle;
  if (FANCHANT_PRESETS[targetId]) {
    return FANCHANT_PRESETS[targetId];
  }
  // Try matching by title
  const found = Object.values(FANCHANT_PRESETS).find(
    preset => preset.title.toLowerCase() === String(targetId).toLowerCase()
  );
  return found || null;
}

/**
 * Check if the song has an official fanchant guide available.
 */
export function hasFanchant(songIdOrTitle) {
  return Boolean(getFanchantForSong(songIdOrTitle));
}

/**
 * Given the current video playback time, find:
 * - activeCue: the cue currently playing right now
 * - upcomingCue: the next cue that will start within leadTime seconds
 * - progress: countdown completion percentage from 0 to 1 for the upcoming cue
 */
export function getFanchantStatusAtTime(cues, currentTime) {
  if (!Array.isArray(cues) || cues.length === 0) {
    return { activeCue: null, upcomingCue: null, countdownSec: null, countdownPercent: 0, nextIdx: -1 };
  }

  // 1. Check for active cue
  let activeCue = null;
  for (const cue of cues) {
    if (currentTime >= cue.start && currentTime <= cue.end) {
      activeCue = cue;
      break;
    }
  }

  // 2. Check for upcoming cue within its leadTimeSec (default 2.0s)
  let upcomingCue = null;
  let countdownSec = null;
  let countdownPercent = 0;
  let nextIdx = -1;

  for (let i = 0; i < cues.length; i++) {
    const cue = cues[i];
    const leadTime = cue.leadTimeSec || 2.0;
    const diff = cue.start - currentTime;

    if (diff > 0 && diff <= leadTime) {
      upcomingCue = cue;
      countdownSec = diff;
      countdownPercent = Math.min(1, Math.max(0, (leadTime - diff) / leadTime));
      nextIdx = i;
      break;
    } else if (diff > 0 && upcomingCue === null) {
      upcomingCue = cue;
      nextIdx = i;
      break;
    }
  }

  return {
    activeCue,
    upcomingCue,
    countdownSec,
    countdownPercent,
    nextIdx
  };
}

export default FANCHANT_PRESETS;

