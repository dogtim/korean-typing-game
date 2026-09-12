// Official K-Pop Fanchant (응원법) Guide Data
// Synchronized with official music videos and stage performance cheering guides.

export const FANCHANT_TYPES = {
  SHOUT: { id: 'shout', label: '大聲齊喊', color: '#ff3366', icon: '📢' },
  ECHO: { id: 'echo', label: '接唱呼應', color: '#38bdf8', icon: '🗣️' },
  HOOK: { id: 'hook', label: '重音爆擊', color: '#ec4899', icon: '🔥' },
  NAME: { id: 'name', label: '團名呼喊', color: '#a855f7', icon: '⚡' },
  HYPE: { id: 'hype', label: '狂歡跳躍', color: '#f59e0b', icon: '🎉' },
  SCREAM: { id: 'scream', label: '全場尖叫', color: '#10b981', icon: '🌟' }
};

export const FANCHANT_PRESETS = {
  // BABYMONSTER - SHEESH (Official Music Video: 2wA_b6YHjqQ)
  '2wA_b6YHjqQ': {
    songId: '2wA_b6YHjqQ',
    title: 'SHEESH',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: 'YG 官方 Weverse [SHEESH] 官方應援法。注意副歌的連續連打、饒舌段落最後兩拍的切入卡點，以及 Bridge 高潮的團名爆發！',
    cues: [
      {
        id: 'sheesh-1',
        start: 9.87,
        end: 11.49,
        chant: "BABY I'mma MONSTER!",
        type: 'shout',
        roman: "BABY I'mma MONSTER!",
        meaning: '寶貝我是怪物 (官方標誌句齊喊)',
        tip: '前奏聽完 3 次 Da la lun dun 之後立刻爆發！',
        leadTimeSec: 2.0
      },
      {
        id: 'sheesh-2',
        start: 37.66,
        end: 39.03,
        chant: 'Got them all going!',
        type: 'shout',
        roman: 'Got them all going!',
        meaning: '讓大家全都瘋狂',
        tip: '副歌啟動第一句，切入整齊有力！',
        leadTimeSec: 1.5
      },
      {
        id: 'sheesh-3',
        start: 39.08,
        end: 40.24,
        chant: 'SHEESH! SHEESH!',
        type: 'hook',
        roman: 'SHEESH! SHEESH!',
        meaning: '驚嘆聲 (重音連打)',
        tip: '每拍一下，配合應援棒往下重擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-4',
        start: 40.29,
        end: 44.07,
        chant: 'SHEESH! SHEESH! SHEESH yeah!',
        type: 'hook',
        roman: 'SHEESH! SHEESH! SHEESH yeah!',
        meaning: '驚嘆三連擊',
        tip: '速度快，注意最後一拍 yeah 尾音拉高！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-5',
        start: 45.79,
        end: 47.90,
        chant: 'SHEESH! SHEESH!',
        type: 'hook',
        roman: 'SHEESH! SHEESH!',
        meaning: '重音連打',
        tip: '等原唱 B-A-B-Y-M-O-N 唱完立刻接！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-6',
        start: 47.95,
        end: 51.20,
        chant: 'SHEESH! SHEESH! SHEESH yeah!',
        type: 'hook',
        roman: 'SHEESH! SHEESH! SHEESH yeah!',
        meaning: '驚嘆三連擊',
        tip: '副歌尾段蓄力！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-7',
        start: 51.25,
        end: 52.57,
        chant: 'Got them all going!',
        type: 'shout',
        roman: 'Got them all going!',
        meaning: '副歌完美收尾',
        tip: '乾脆俐落結束副歌！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-8',
        start: 57.20,
        end: 58.24,
        chant: '축복!',
        type: 'echo',
        roman: 'Chuk-bok!',
        meaning: '祝福 / 恩惠',
        tip: '在原唱「이건 네 귀에 줄 (這是給你耳朵的)」唱完的瞬間爆喊「축복」！',
        leadTimeSec: 1.5
      },
      {
        id: 'sheesh-9',
        start: 59.00,
        end: 59.99,
        chant: '춤 춰!',
        type: 'echo',
        roman: 'Chum-chwo!',
        meaning: '跳舞吧',
        tip: '在原唱「음악에 맞춰 걍 (配合音樂就)」句尾瞬間切入！',
        leadTimeSec: 1.2
      },
      {
        id: 'sheesh-10',
        start: 60.80,
        end: 61.61,
        chant: 'boom boom pow!',
        type: 'echo',
        roman: 'boom boom pow!',
        meaning: '重低音效炸裂',
        tip: '配合鼓點重音大喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'sheesh-11',
        start: 71.50,
        end: 73.70,
        chant: 'SHEESH! SHEESH! SHEESH!',
        type: 'hook',
        roman: 'SHEESH! SHEESH! SHEESH!',
        meaning: '反擊三連發',
        tip: '接在「날 보고 닫혔던 입들 say」之後！',
        leadTimeSec: 1.5
      },
      {
        id: 'sheesh-12',
        start: 81.87,
        end: 82.66,
        chant: 'High high high high!',
        type: 'shout',
        roman: 'High high high high!',
        meaning: '衝向更高天空',
        tip: '接在「Put’em up to the sky」之後雙手高舉！',
        leadTimeSec: 1.2
      },
      {
        id: 'sheesh-13',
        start: 96.00,
        end: 97.28,
        chant: 'Got them all going!',
        type: 'shout',
        roman: 'Got them all going!',
        meaning: '副歌 2 啟動',
        tip: '第二段副歌開始！',
        leadTimeSec: 1.5
      },
      {
        id: 'sheesh-14',
        start: 97.33,
        end: 99.20,
        chant: 'SHEESH! SHEESH!',
        type: 'hook',
        roman: 'SHEESH! SHEESH!',
        meaning: '重音連打',
        tip: '配合節拍下壓！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-15',
        start: 99.25,
        end: 102.36,
        chant: 'SHEESH! SHEESH! SHEESH yeah!',
        type: 'hook',
        roman: 'SHEESH! SHEESH! SHEESH yeah!',
        meaning: '驚嘆三連擊',
        tip: '三連拍打擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-16',
        start: 104.20,
        end: 106.03,
        chant: 'SHEESH! SHEESH!',
        type: 'hook',
        roman: 'SHEESH! SHEESH!',
        meaning: '重音連打',
        tip: '原唱 B-A-B-Y-M-O-N 之後！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-17',
        start: 106.08,
        end: 109.57,
        chant: 'SHEESH! SHEESH! SHEESH yeah!',
        type: 'hook',
        roman: 'SHEESH! SHEESH! SHEESH yeah!',
        meaning: '驚嘆三連擊',
        tip: '副歌收尾連打！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-18',
        start: 109.62,
        end: 110.95,
        chant: 'Got them all going!',
        type: 'shout',
        roman: 'Got them all going!',
        meaning: '副歌結束',
        tip: '完美卡點！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-19',
        start: 121.50,
        end: 124.15,
        chant: '베! 이! 비! 몬! 스! 터!',
        type: 'name',
        roman: 'BE-I-BI-MON-SEU-TEO!',
        meaning: 'BABYMONSTER (全曲靈魂空檔！)',
        tip: '⚡ 在 Rami 唱完「천천히 불태워 네가 잠든 사이」後、Ahyeon「Time\'s up」前，整齊有力喊出 6 個字！',
        leadTimeSec: 2.2
      },
      {
        id: 'sheesh-20',
        start: 124.50,
        end: 127.20,
        chant: '올라가 올라가 더!',
        type: 'shout',
        roman: 'Ol-la-ga ol-la-ga deo!',
        meaning: '爬上去 爬上去 更加',
        tip: '跟著 Ahyeon 的 Time\'s up 之後全力大合唱！',
        leadTimeSec: 1.2
      },
      {
        id: 'sheesh-21',
        start: 127.25,
        end: 128.86,
        chant: '꼭대기 꼭대기로!',
        type: 'shout',
        roman: 'Kkok-dae-gi kkok-dae-gi-ro!',
        meaning: '向著頂點 頂點',
        tip: '氣勢往上堆疊！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-22',
        start: 128.91,
        end: 130.15,
        chant: '하늘 위 하늘 위로!',
        type: 'shout',
        roman: 'Ha-neul wi ha-neul wi-ro!',
        meaning: '向著天空 空中',
        tip: '接 Fly away 前的衝天怒吼！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-23',
        start: 143.58,
        end: 146.53,
        chant: 'B A B Y M O N',
        type: 'shout',
        roman: 'B A B Y M O N',
        meaning: '拼字大合唱',
        tip: '一個字母一拍，全場齊唱！',
        leadTimeSec: 1.5
      },
      {
        id: 'sheesh-24',
        start: 150.50,
        end: 153.32,
        chant: 'B A B Y M O N',
        type: 'shout',
        roman: 'B A B Y M O N',
        meaning: '拼字大合唱 (第二回)',
        tip: '準備進入最後終極舞段！',
        leadTimeSec: 1.5
      },
      {
        id: 'sheesh-25',
        start: 156.08,
        end: 157.32,
        chant: "Let's go!",
        type: 'hype',
        roman: "Let's go!",
        meaning: '出發！',
        tip: '全場暴動跳躍開始！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-26',
        start: 157.37,
        end: 158.95,
        chant: 'Jump jump and let it go!',
        type: 'hype',
        roman: 'Jump jump and let it go!',
        meaning: '跳吧跳吧 徹底放開！',
        tip: '應援棒瘋狂搖晃！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-27',
        start: 159.00,
        end: 160.65,
        chant: 'Watch out we on a roll!',
        type: 'hype',
        roman: 'Watch out we on a roll!',
        meaning: '小心點 我們勢不可擋！',
        tip: '大合唱節奏！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-28',
        start: 160.70,
        end: 162.95,
        chant: 'Rum pump pump pump it up then!',
        type: 'hype',
        roman: 'Rum pump pump pump it up then!',
        meaning: '燃燒熱度！',
        tip: '重擊鼓點！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-29',
        start: 164.25,
        end: 165.61,
        chant: 'Jump jump and let it go!',
        type: 'hype',
        roman: 'Jump jump and let it go!',
        meaning: '再次狂跳！',
        tip: '第二回跳躍！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-30',
        start: 165.66,
        end: 167.61,
        chant: 'Watch out we on a roll!',
        type: 'hype',
        roman: 'Watch out we on a roll!',
        meaning: '勢不可擋！',
        tip: '合唱衝頂！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-31',
        start: 167.66,
        end: 169.62,
        chant: 'Rum pump pump pump it up then!',
        type: 'hype',
        roman: 'Rum pump pump pump it up then!',
        meaning: '最後重音爆破！',
        tip: '最後一拍準備深呼吸！',
        leadTimeSec: 1.0
      },
      {
        id: 'sheesh-32',
        start: 169.66,
        end: 175.00,
        chant: '📢 ( 와아아아아~~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: 'WAAAAAHHH!! (SCREAM!)',
        meaning: '演唱會終極歡呼',
        tip: '把最後的喉嚨全部奉獻給舞台！',
        leadTimeSec: 1.5
      }
    ]
  }
};

/**
 * Retrieve fanchant guide for a given song videoId or title.
 */
export function getFanchantForSong(songIdOrTitle) {
  if (!songIdOrTitle) return null;
  if (FANCHANT_PRESETS[songIdOrTitle]) {
    return FANCHANT_PRESETS[songIdOrTitle];
  }
  // Try matching by title
  const found = Object.values(FANCHANT_PRESETS).find(
    preset => preset.title.toLowerCase() === String(songIdOrTitle).toLowerCase()
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
      // Keep track of the very next future cue even if farther than leadTime
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
