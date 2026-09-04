// Utility for calculating and retrieving Hangul coverage & difficulty levels for songs
// Rules defined:
// - Easy: < 30% Hangul coverage
// - Medium: 30% ~ 50% Hangul coverage
// - Hard: > 50% Hangul coverage
// - English: 0% Hangul coverage (pure foreign/English tracks)

export const DIFFICULTY_LEVEL_FILTERS = [
  { id: 'ALL', label: 'All Levels' },
  { id: 'easy', label: 'Easy (<30%)' },
  { id: 'medium', label: 'Medium (30~50%)' },
  { id: 'hard', label: 'Hard (>50%)' },
  { id: 'english', label: 'English Only' }
];

export const SONG_DIFFICULTY_MAP = {
  // 1. Stuck In The Middle
  'GsV1i0QHi-o': { hangulLines: 0, totalLines: 89, coveragePercent: 0, level: 'english', label: 'English' },
  // 2. SHEESH
  '2wA_b6YHjqQ': { hangulLines: 25, totalLines: 77, coveragePercent: 32.5, level: 'medium', label: 'Medium' },
  // 3. LIKE THAT
  'M8r3x4Re8-I': { hangulLines: 0, totalLines: 69, coveragePercent: 0, level: 'english', label: 'English' },
  // 4. BATTER UP (7 ver.)
  'olDWm2veCrM': { hangulLines: 32, totalLines: 74, coveragePercent: 43.2, level: 'medium', label: 'Medium' },
  // 5. DREAM
  'ynOtYmpZxak': { hangulLines: 0, totalLines: 42, coveragePercent: 0, level: 'english', label: 'English' },
  // 6. FOREVER
  'eJCHKjt0MPw': { hangulLines: 18, totalLines: 90, coveragePercent: 20.0, level: 'easy', label: 'Easy' },
  // 7. CLIK CLAK
  'o0oW3lPoOXM': { hangulLines: 0, totalLines: 80, coveragePercent: 0, level: 'english', label: 'English' },
  // 8. DRIP
  'Zp-Jhuhq0bQ': { hangulLines: 18, totalLines: 78, coveragePercent: 23.1, level: 'easy', label: 'Easy' },
  // 9. Love, Maybe
  'q2KJumLIxsM': { hangulLines: 0, totalLines: 50, coveragePercent: 0, level: 'english', label: 'English' },
  // 10. Really Like You
  'XShaIZs7J7M': { hangulLines: 37, totalLines: 75, coveragePercent: 49.3, level: 'medium', label: 'Medium' },
  // 11. BILLIONAIRE
  'Gz_yRl6703c': { hangulLines: 0, totalLines: 58, coveragePercent: 0, level: 'english', label: 'English' },
  // 12. Love In My Heart
  '1kXLsrun51s': { hangulLines: 25, totalLines: 63, coveragePercent: 39.7, level: 'medium', label: 'Medium' },
  // 13. Woke Up In Tokyo (RUKA & ASA)
  'KcSwEoDRWTA': { hangulLines: 0, totalLines: 107, coveragePercent: 0, level: 'english', label: 'English' },
  // 14. HOT SAUCE
  'xn8mQqz2xmM': { hangulLines: 0, totalLines: 64, coveragePercent: 0, level: 'english', label: 'English' },
  // 15. WE GO UP
  'wlHwjkYpSr0': { hangulLines: 21, totalLines: 107, coveragePercent: 19.6, level: 'easy', label: 'Easy' },
  // 16. PSYCHO
  'yd_uG3TtREs': { hangulLines: 25, totalLines: 78, coveragePercent: 32.1, level: 'medium', label: 'Medium' },
  // 17. Supa Dupa Luv
  'SbdOIdg2McI': { hangulLines: 0, totalLines: 106, coveragePercent: 0, level: 'english', label: 'English' },
  // 18. WILD
  'PdB0EBaWKEk': { hangulLines: 12, totalLines: 61, coveragePercent: 19.7, level: 'easy', label: 'Easy' },
  // 19. CHOOM (춤)
  'x3eqqoZPV_E': { hangulLines: 15, totalLines: 67, coveragePercent: 22.4, level: 'easy', label: 'Easy' },
  // 20. Moon
  'LYbHsAsj6i8': { hangulLines: 0, totalLines: 74, coveragePercent: 0, level: 'english', label: 'English' },
  // 21. I Like It
  '9cS2wv6AfHk': { hangulLines: 0, totalLines: 58, coveragePercent: 0, level: 'english', label: 'English' },
  // 22. SUGAR HONEY ICE TEA
  'naoGk-Zjc1s': { hangulLines: 4, totalLines: 74, coveragePercent: 5.4, level: 'easy', label: 'Easy' },
  // 23. Magnetic (ILLIT)
  'Vk5-c_v4gMU': { hangulLines: 28, totalLines: 61, coveragePercent: 45.9, level: 'medium', label: 'Medium' },
  // 24. It's Me (ILLIT)
  'bMhDJ0S0OBA': { hangulLines: 13, totalLines: 76, coveragePercent: 17.1, level: 'easy', label: 'Easy' }
};

/**
 * Returns difficulty level, coverage percentage, and line counts for a given song preset.
 */
export function getSongDifficulty(preset) {
  if (!preset) {
    return { level: 'easy', label: 'Easy', coveragePercent: 0, hangulLines: 0, totalLines: 0 };
  }

  // Lookup in precomputed map by YouTube ID
  if (preset.id && SONG_DIFFICULTY_MAP[preset.id]) {
    return SONG_DIFFICULTY_MAP[preset.id];
  }

  // Dynamic fallback: calculate from preset.lyrics array if provided
  const lyrics = Array.isArray(preset.lyrics) ? preset.lyrics : [];
  if (lyrics.length > 0) {
    let hangul = 0;
    for (const line of lyrics) {
      if (typeof line.ko === 'string' && /[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(line.ko)) {
        hangul++;
      }
    }
    const total = lyrics.length;
    const pct = total > 0 ? parseFloat(((hangul / total) * 100).toFixed(1)) : 0;
    let level = 'easy';
    let label = 'Easy';
    if (pct === 0) {
      level = 'english';
      label = 'English';
    } else if (pct < 30) {
      level = 'easy';
      label = 'Easy';
    } else if (pct <= 50) {
      level = 'medium';
      label = 'Medium';
    } else {
      level = 'hard';
      label = 'Hard';
    }
    return { hangulLines: hangul, totalLines: total, coveragePercent: pct, level, label };
  }

  return { level: 'easy', label: 'Easy', coveragePercent: 0, hangulLines: 0, totalLines: 0 };
}
