/**
 * Fanchant Preset Template & Example Reference
 * Place this inside src/utils/fanchantData.js under FANCHANT_PRESETS['<VIDEO_ID>']
 */

export const EXAMPLE_FANCHANT_PRESET = {
  songId: 'VIDEO_ID_HERE',        // 11-char YouTube ID (e.g. 2wA_b6YHjqQ)
  title: 'Song Title',            // English Song Title (e.g. SHEESH)
  artist: 'Group (한국어이름)',     // Full artist name (e.g. BABYMONSTER (베이비몬스터))
  groupName: 'Group Name',        // Short group name (e.g. BABYMONSTER)
  fandomName: 'Fandom Name',      // Official fan club name (e.g. MONSTIEZ)
  description: 'YG 官方 Weverse 應援指南。注意副歌連打與高潮點名。',
  cues: [
    {
      id: 'song-1',
      start: 9.87,                // Exact start timestamp in seconds (float)
      end: 11.49,                 // Exact end timestamp in seconds (float)
      chant: "BABY I'mma MONSTER!", // Text to chant / shout
      type: 'shout',              // One of: 'shout' | 'hook' | 'echo' | 'name' | 'hype' | 'scream'
      roman: "BABY I'mma MONSTER!", // Romanized pronunciation
      meaning: '寶貝我是怪物 (標誌句)',// Optional Chinese or English meaning
      tip: '前奏第 3 遍後立刻爆發！',  // Optional performance tip
      leadTimeSec: 2.0            // Anticipation countdown duration (1.0 - 2.5s)
    },
    {
      id: 'song-2',
      start: 39.08,
      end: 40.24,
      chant: 'SHEESH! SHEESH!',
      type: 'hook',
      roman: 'SHEESH! SHEESH!',
      meaning: '驚嘆連打',
      tip: '配合節拍往下重擊！',
      leadTimeSec: 1.0
    },
    {
      id: 'song-3',
      start: 57.20,
      end: 58.24,
      chant: '축복!',
      type: 'echo',
      roman: 'Chuk-bok!',
      meaning: '祝福 / 恩惠',
      tip: '在原唱句尾瞬間切入！',
      leadTimeSec: 1.5
    },
    {
      id: 'song-4',
      start: 121.50,
      end: 124.15,
      chant: '베! 이! 비! 몬! 스! 터!',
      type: 'name',
      roman: 'BE-I-BI-MON-SEU-TEO!',
      meaning: '團名呼喊',
      tip: '在高音空檔整齊有力喊出！',
      leadTimeSec: 2.2
    },
    {
      id: 'song-5',
      start: 156.08,
      end: 157.32,
      chant: "Let's go!",
      type: 'hype',
      roman: "Let's go!",
      meaning: '出發！',
      tip: '全場暴動跳躍！',
      leadTimeSec: 1.0
    },
    {
      id: 'song-6',
      start: 169.66,
      end: 175.00,
      chant: '📢 ( 와아아아아~~ 全場大尖叫！ )',
      type: 'scream',
      roman: 'WAAAAAHHH!! (SCREAM!)',
      meaning: '終極尖叫歡呼',
      tip: '最後一拍盡情歡呼！',
      leadTimeSec: 1.5
    }
  ]
};
