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
  },

  // BABYMONSTER - DRIP (Official 2025 World Tour [HELLO MONSTERS] Cheering Guide)
  'Zp-Jhuhq0bQ': {
    songId: 'Zp-Jhuhq0bQ',
    title: 'DRIP',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: '2025 BABYMONSTER 1ST WORLD TOUR <HELLO MONSTERS> 官方現場應援指南。前奏鼓聲喊團名、主歌句尾押韻字卡點、副歌 1/3/5/7 奇數拍 Drip 重擊、饒舌高舉左拳大喊 MONSTIEZ！',
    cues: [
      // 00:05 드럼 소리와 함께 시작 (베이비! 몬스터!)
      {
        id: 'drip-1',
        start: 5.00,
        end: 7.80,
        chant: '베이비! 몬스터!',
        type: 'name',
        roman: 'BE-I-BI! MON-SEU-TEO!',
        meaning: 'BABYMONSTER (前奏鼓聲切入)',
        tip: '🥁 (00:05 드럼 소리와 함께 시작) 伴隨前奏大鼓重音整齊爆發！',
        leadTimeSec: 2.0
      },
      // When I dress I don't think so [much]
      {
        id: 'drip-2',
        start: 9.00,
        end: 9.70,
        chant: 'much!',
        type: 'echo',
        roman: 'much!',
        meaning: '原唱句尾押韻卡點',
        tip: '原唱 When I dress I don\'t think so 唱完瞬間喊 much！',
        leadTimeSec: 1.0
      },
      // I don't need too [much]
      {
        id: 'drip-3',
        start: 11.05,
        end: 11.75,
        chant: 'much!',
        type: 'echo',
        roman: 'much!',
        meaning: '原唱句尾押韻卡點',
        tip: '原唱 I don\'t need too 唱完瞬間喊 much！',
        leadTimeSec: 1.0
      },
      // I'mma eat that [lunch]
      {
        id: 'drip-4',
        start: 13.05,
        end: 13.75,
        chant: 'lunch!',
        type: 'echo',
        roman: 'lunch!',
        meaning: '原唱句尾押韻卡點',
        tip: '原唱 I\'mma eat that 之後大喊 lunch！',
        leadTimeSec: 1.0
      },
      // Baby so cold get that ice cream [truck]
      {
        id: 'drip-5',
        start: 15.00,
        end: 15.75,
        chant: 'truck!',
        type: 'echo',
        roman: 'truck!',
        meaning: '原唱句尾押韻卡點',
        tip: '原唱 get that ice cream 之後大喊 truck！',
        leadTimeSec: 1.0
      },
      // [찌릿찌릿 끼리끼리] 놀아볼까
      {
        id: 'drip-6',
        start: 16.25,
        end: 17.50,
        chant: '찌릿찌릿 끼리끼리!',
        type: 'shout',
        roman: 'Jji-rit-jji-rit kki-ri-kki-ri!',
        meaning: '觸電般 物以類聚 (粉絲先喊前半句)',
        tip: '粉絲先搶先大喊「찌릿찌릿 끼리끼리」，成員接唱「놀아볼까」！',
        leadTimeSec: 1.2
      },
      // [Kitty kitty] yeah we gonna run this town
      {
        id: 'drip-7',
        start: 18.22,
        end: 19.30,
        chant: 'Kitty kitty!',
        type: 'shout',
        roman: 'Kitty kitty!',
        meaning: '小貓咪 (粉絲先喊前半句)',
        tip: '粉絲先喊「Kitty kitty」，成員接唱「yeah we gonna run this town」！',
        leadTimeSec: 1.0
      },
      // Baby got no chance better [hit that dance]
      {
        id: 'drip-8',
        start: 23.30,
        end: 24.32,
        chant: 'hit that dance!',
        type: 'echo',
        roman: 'hit that dance!',
        meaning: '跟著跳舞吧 (句尾大喊)',
        tip: '接在 Baby got no chance better 句尾瞬間大喊！',
        leadTimeSec: 1.2
      },
      // Mmm, [na-na-na]
      {
        id: 'drip-9',
        start: 24.70,
        end: 25.75,
        chant: 'na-na-na!',
        type: 'echo',
        roman: 'na-na-na!',
        meaning: '哼唱呼應',
        tip: '成員唱 Mmm 之後，粉絲齊喊 na-na-na！',
        leadTimeSec: 1.0
      },
      // Uh, [na-na-na]
      {
        id: 'drip-10',
        start: 28.50,
        end: 29.80,
        chant: 'na-na-na!',
        type: 'echo',
        roman: 'na-na-na!',
        meaning: '哼唱呼應 (第二回)',
        tip: '接在 고민하지 마 之後，成員 Uh 之後齊喊 na-na-na！',
        leadTimeSec: 1.0
      },
      // But you don't know 'bout [me]
      {
        id: 'drip-11',
        start: 32.90,
        end: 33.65,
        chant: 'me!',
        type: 'echo',
        roman: 'me!',
        meaning: '我 (句尾單字爆發)',
        tip: '原唱 But you don\'t know \'bout 唱完瞬間爆喊 me！',
        leadTimeSec: 1.0
      },
      // Yeah yeah, you gon' know 'bout [me] boy
      {
        id: 'drip-12',
        start: 35.15,
        end: 35.85,
        chant: 'me!',
        type: 'echo',
        roman: 'me!',
        meaning: '我 (中間重音突刺)',
        tip: '在 you gon\' know \'bout 後重音卡點 me（boy 由成員唱）！',
        leadTimeSec: 1.0
      },
      // 아름다운 별들이 빛나는 [밤이야]
      {
        id: 'drip-13',
        start: 38.60,
        end: 40.15,
        chant: '밤이야!',
        type: 'echo',
        roman: 'Ba-mi-ya!',
        meaning: '夜晚呀 (句尾大合唱)',
        tip: '接在 아름다운 별들이 빛나는 之後齊聲大唱 밤이야！',
        leadTimeSec: 1.2
      },
      // Mmmh, what you say [(what you say)]
      {
        id: 'drip-14',
        start: 41.50,
        end: 43.55,
        chant: '(what you say)!',
        type: 'echo',
        roman: '(what you say)!',
        meaning: '你說什麼 (回音接唱)',
        tip: '原唱 Mmmh, what you say 尾音剛落立刻接回音！',
        leadTimeSec: 1.2
      },
      // Ooh, what you say [(what you say)]
      {
        id: 'drip-15',
        start: 49.60,
        end: 51.80,
        chant: '(what you say)!',
        type: 'echo',
        roman: '(what you say)!',
        meaning: '你說什麼 (回音接唱)',
        tip: '副歌即將爆發前回音！',
        leadTimeSec: 1.2
      },
      // [Are you ready?]
      {
        id: 'drip-16',
        start: 51.85,
        end: 53.05,
        chant: 'Are you ready?',
        type: 'shout',
        roman: 'Are you ready?',
        meaning: '準備好了嗎？ (全員大喊)',
        tip: '副歌前奏倒數！',
        leadTimeSec: 1.0
      },
      // [Set, turn on the lights]
      {
        id: 'drip-17',
        start: 53.08,
        end: 54.75,
        chant: 'Set, turn on the lights!',
        type: 'shout',
        roman: 'Set, turn on the lights!',
        meaning: '就位 開燈！ (全員大喊)',
        tip: '開燈瞬間全場齊喊！',
        leadTimeSec: 1.0
      },
      // [Baby got] passion, ambition
      {
        id: 'drip-18',
        start: 55.78,
        end: 56.80,
        chant: 'Baby got!',
        type: 'shout',
        roman: 'Baby got!',
        meaning: '寶貝擁有 (粉絲先發)',
        tip: '粉絲搶先大喊「Baby got」，成員接唱「passion, ambition」！',
        leadTimeSec: 1.0
      },
      // [Look at that]
      {
        id: 'drip-19',
        start: 59.65,
        end: 60.35,
        chant: 'Look at that!',
        type: 'shout',
        roman: 'Look at that!',
        meaning: '看那邊！',
        tip: '接在 난 보란 듯이 之後瞬間大喊！',
        leadTimeSec: 1.0
      },
      // Baby got [Drip], drip, [drip], drip, [drip], drip, [drip]
      {
        id: 'drip-20',
        start: 64.30,
        end: 67.65,
        chant: 'DRIP! (drip) DRIP! (drip) DRIP! (drip) DRIP!',
        type: 'hook',
        roman: 'DRIP! (1) DRIP! (3) DRIP! (5) DRIP! (7)',
        meaning: '副歌奇數拍連打 (1、3、5、7 拍大喊！)',
        tip: '🔥 官方指南特別標註：只喊第 1、3、5、7 拍的 DRIP！每隔一拍重擊！',
        leadTimeSec: 1.2
      },
      // Baby got [Drip], drip, [drip], drip, [drip], drip, [drip]
      {
        id: 'drip-21',
        start: 68.15,
        end: 71.70,
        chant: 'DRIP! (drip) DRIP! (drip) DRIP! (drip) DRIP!',
        type: 'hook',
        roman: 'DRIP! (1) DRIP! (3) DRIP! (5) DRIP! (7)',
        meaning: '副歌第二回奇數拍連打',
        tip: '🔥 繼續第 1、3、5、7 拍重音打擊！',
        leadTimeSec: 1.0
      },
      // [Monster, monster, monster] came to conquer
      {
        id: 'drip-22',
        start: 74.30,
        end: 75.60,
        chant: 'Monster, monster, monster!',
        type: 'shout',
        roman: 'Monster, monster, monster!',
        meaning: '怪獸怪獸怪獸 (前段三連發)',
        tip: '原唱 Let \'em out 之後立刻大喊 Monster 三次！',
        leadTimeSec: 1.0
      },
      // 판을 [180도 바꿔]
      {
        id: 'drip-23',
        start: 80.40,
        end: 81.80,
        chant: '180도 바꿔!',
        type: 'shout',
        roman: 'Baek-pal-sip-do ba-kkwo!',
        meaning: '180度翻轉！ (句尾爆發)',
        tip: '成員唱 판을 之後，粉絲齊喊 180도 바꿔！',
        leadTimeSec: 1.0
      },
      // (주먹 왼 손 높이 들기!) [MONSTIEZ] 꽉 잡아 Hold tight
      {
        id: 'drip-24',
        start: 86.40,
        end: 87.60,
        chant: 'MONSTIEZ! (✊ 주먹 왼 손 높이 들기!)',
        type: 'name',
        roman: 'MONSTIEZ! (몬스티즈!)',
        meaning: '粉絲名呼喊 (高舉左拳！)',
        tip: '✊【官方核心動作】：高舉左手拳頭，整齊有力大喊「MONSTIEZ」！',
        leadTimeSec: 2.0
      },
      // You know [we gon' ride]
      {
        id: 'drip-25',
        start: 89.40,
        end: 90.38,
        chant: "we gon' ride!",
        type: 'echo',
        roman: "we gon' ride!",
        meaning: '我們即將奔馳！ (句尾卡點)',
        tip: '成員唱 You know 後齊聲大喊 we gon\' ride！',
        leadTimeSec: 1.0
      },
      // Mmm, [na-na-na] (Pre-chorus 2)
      {
        id: 'drip-26',
        start: 90.75,
        end: 91.75,
        chant: 'na-na-na!',
        type: 'echo',
        roman: 'na-na-na!',
        meaning: '哼唱呼應',
        tip: 'Mmm 之後接 na-na-na！',
        leadTimeSec: 1.0
      },
      // Uh, [na-na-na]
      {
        id: 'drip-27',
        start: 94.50,
        end: 95.75,
        chant: 'na-na-na!',
        type: 'echo',
        roman: 'na-na-na!',
        meaning: '哼唱呼應 (第二回)',
        tip: 'Uh 之後接 na-na-na！',
        leadTimeSec: 1.0
      },
      // But you don't know 'bout [me]
      {
        id: 'drip-28',
        start: 98.90,
        end: 99.65,
        chant: 'me!',
        type: 'echo',
        roman: 'me!',
        meaning: '我 (句尾單字爆發)',
        tip: '句尾 me！',
        leadTimeSec: 1.0
      },
      // Yeah yeah, you gon' know 'bout [me] boy
      {
        id: 'drip-29',
        start: 101.20,
        end: 101.85,
        chant: 'me!',
        type: 'echo',
        roman: 'me!',
        meaning: '我 (中間重音卡點)',
        tip: '卡點 me！',
        leadTimeSec: 1.0
      },
      // 아름다운 별들이 빛나는 [밤이야]
      {
        id: 'drip-30',
        start: 104.60,
        end: 106.28,
        chant: '밤이야!',
        type: 'echo',
        roman: 'Ba-mi-ya!',
        meaning: '夜晚呀 (句尾大合唱)',
        tip: '齊唱 밤이야！',
        leadTimeSec: 1.2
      },
      // Mmmh, what you say [(what you say)]
      {
        id: 'drip-31',
        start: 107.50,
        end: 109.15,
        chant: '(what you say)!',
        type: 'echo',
        roman: '(what you say)!',
        meaning: '你說什麼 (回音接唱)',
        tip: '回音接唱！',
        leadTimeSec: 1.2
      },
      // Ooh, what you say [(what you say)]
      {
        id: 'drip-32',
        start: 115.50,
        end: 116.80,
        chant: '(what you say)!',
        type: 'echo',
        roman: '(what you say)!',
        meaning: '你說什麼 (回音接唱)',
        tip: '副歌前夕呼應！',
        leadTimeSec: 1.2
      },
      // [Are you ready?]
      {
        id: 'drip-33',
        start: 117.65,
        end: 118.78,
        chant: 'Are you ready?',
        type: 'shout',
        roman: 'Are you ready?',
        meaning: '準備好了嗎？',
        tip: '副歌準備！',
        leadTimeSec: 1.0
      },
      // [Set, turn on the lights]
      {
        id: 'drip-34',
        start: 118.80,
        end: 120.90,
        chant: 'Set, turn on the lights!',
        type: 'shout',
        roman: 'Set, turn on the lights!',
        meaning: '就位 開燈！',
        tip: '開燈瞬間大喊！',
        leadTimeSec: 1.0
      },
      // [Baby got] passion, ambition
      {
        id: 'drip-35',
        start: 121.78,
        end: 122.70,
        chant: 'Baby got!',
        type: 'shout',
        roman: 'Baby got!',
        meaning: '寶貝擁有 (粉絲先發)',
        tip: '粉絲先喊 Baby got！',
        leadTimeSec: 1.0
      },
      // [Look at that]
      {
        id: 'drip-36',
        start: 125.55,
        end: 126.25,
        chant: 'Look at that!',
        type: 'shout',
        roman: 'Look at that!',
        meaning: '看那邊！',
        tip: '난 보란 듯이 之後瞬間卡點！',
        leadTimeSec: 1.0
      },
      // Baby got [Drip], drip, [drip], drip, [drip], drip, [drip] (Chorus 2)
      {
        id: 'drip-37',
        start: 130.20,
        end: 133.60,
        chant: 'DRIP! (drip) DRIP! (drip) DRIP! (drip) DRIP!',
        type: 'hook',
        roman: 'DRIP! (1) DRIP! (3) DRIP! (5) DRIP! (7)',
        meaning: '副歌 2 奇數拍連打 (1、3、5、7 拍大喊！)',
        tip: '🔥 奇數拍重音下打！',
        leadTimeSec: 1.2
      },
      // Baby got [Drip], drip, [drip], drip, [drip], drip, [drip]
      {
        id: 'drip-38',
        start: 134.05,
        end: 137.60,
        chant: 'DRIP! (drip) DRIP! (drip) DRIP! (drip) DRIP!',
        type: 'hook',
        roman: 'DRIP! (1) DRIP! (3) DRIP! (5) DRIP! (7)',
        meaning: '副歌 2 第二回奇數拍連打',
        tip: '🔥 奇數拍連打！',
        leadTimeSec: 1.0
      },
      // Baby got [drip, drip, drip] (Outro Dance Break)
      {
        id: 'drip-39',
        start: 160.80,
        end: 162.78,
        chant: 'drip, drip, drip!',
        type: 'hype',
        roman: 'drip, drip, drip!',
        meaning: '水滴三連擊 (接在 Baby got 之後)',
        tip: '🎉 成員唱 Baby got 之後，全場接唱 drip, drip, drip！',
        leadTimeSec: 1.2
      },
      // Baby got, baby got, baby got -> [Drip, drip, drip]
      {
        id: 'drip-40',
        start: 164.25,
        end: 166.40,
        chant: 'Drip, drip, drip!',
        type: 'hype',
        roman: 'Drip, drip, drip!',
        meaning: '重音三連跳',
        tip: '成員唱完 baby got x3 之後全場狂喊 Drip, drip, drip！',
        leadTimeSec: 1.0
      },
      // Baby got [drip, drip, drip] (Second Round)
      {
        id: 'drip-41',
        start: 169.20,
        end: 170.75,
        chant: 'drip, drip, drip!',
        type: 'hype',
        roman: 'drip, drip, drip!',
        meaning: '水滴三連擊',
        tip: '成員唱 Baby got 之後接唱！',
        leadTimeSec: 1.0
      },
      // Baby got, baby got, baby got -> [Drip, drip, drip]
      {
        id: 'drip-42',
        start: 172.20,
        end: 174.30,
        chant: 'Drip, drip, drip!',
        type: 'hype',
        roman: 'Drip, drip, drip!',
        meaning: '最後重音跳躍',
        tip: '成員唱完 baby got x3 之後最後狂跳！',
        leadTimeSec: 1.0
      },
      // (함성)
      {
        id: 'drip-43',
        start: 176.50,
        end: 182.00,
        chant: '📢 ( 함성 ~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: '(HAM-SEONG! SCREAM!)',
        meaning: '演唱會終極歡呼',
        tip: '把喉嚨徹底喊啞的全場最高潮尖叫歡呼！',
        leadTimeSec: 1.5
      }
    ]
  },

  // BABYMONSTER - LIKE THAT (Official Exclusive Video / MV: M8r3x4Re8-I)
  'M8r3x4Re8-I': {
    songId: 'M8r3x4Re8-I',
    title: 'LIKE THAT',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: 'HELLO 2025 BABYMONSTER 1ST WORLD TOUR [MONSTERS] 巡迴演唱會官方應援法。吉他第二聲切入團名齊喊，副歌重音 like that / right back 連擊，饒舌 Queen ace blackjack 與結尾全場歡呼！',
    cues: [
      // 0:03 두 번째 기타 소리와 함께 시작 BABY! / MONSTER!
      {
        id: 'like-that-1',
        start: 3.00,
        end: 6.50,
        chant: 'BABY! MONSTER!',
        type: 'shout',
        roman: 'BABY! MONSTER!',
        meaning: '團名吶喊 (隨第二聲吉他音切入齊喊)',
        tip: '0:03 聽見第二聲吉他音響起立刻齊喊 BABY! MONSTER！',
        leadTimeSec: 2.5
      },
      // Verse 1
      {
        id: 'like-that-2',
        start: 18.00,
        end: 19.18,
        chant: 'to',
        type: 'echo',
        roman: 'to',
        meaning: '尾音接唱 (have to)',
        tip: '句尾唱完 Then I might have 接喊 to！',
        leadTimeSec: 1.5
      },
      {
        id: 'like-that-3',
        start: 26.60,
        end: 27.65,
        chant: '(too)',
        type: 'echo',
        roman: '(too)',
        meaning: '我也一樣 (呼應接唱)',
        tip: '接在 And I do 後面一起呼應 (too)！',
        leadTimeSec: 1.5
      },
      // Pre-Chorus 1
      {
        id: 'like-that-4',
        start: 29.49,
        end: 30.60,
        chant: '(They don\'t)',
        type: 'echo',
        roman: '(They don\'t)',
        meaning: '她們根本不懂',
        tip: 'Cause all those girls 唱完立刻切入 (They don\'t)！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-5',
        start: 31.82,
        end: 32.80,
        chant: '(They don\'t)',
        type: 'echo',
        roman: '(They don\'t)',
        meaning: '她們根本不懂',
        tip: 'Know what you need 唱完立刻再喊一次 (They don\'t)！',
        leadTimeSec: 1.2
      },
      // Chorus 1
      {
        id: 'like-that-6',
        start: 38.60,
        end: 39.62,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '副歌第一拍句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-7',
        start: 41.00,
        end: 42.21,
        chant: 'right back',
        type: 'hook',
        roman: 'right back',
        meaning: '立刻回應',
        tip: '接在 give it 後面爆發！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-8',
        start: 44.80,
        end: 45.65,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: 'Baby would you 接唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-9',
        start: 45.85,
        end: 46.67,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '連續第二拍 like that！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-10',
        start: 54.20,
        end: 55.00,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '副歌後半句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-11',
        start: 55.05,
        end: 55.80,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '最後一拍連續重擊！',
        leadTimeSec: 1.0
      },
      // Verse 2 (Rap)
      {
        id: 'like-that-12',
        start: 56.80,
        end: 57.60,
        chant: '(like that)',
        type: 'echo',
        roman: '(like that)',
        meaning: '就是那樣',
        tip: 'Yo it\'s like that like that 後面呼應 (like that)！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-13',
        start: 60.02,
        end: 61.10,
        chant: 'Queen ace blackjack',
        type: 'shout',
        roman: 'Queen ace blackjack',
        meaning: '王牌黑傑克 (霸氣齊喊)',
        tip: '饒舌帥氣連擊！整句全場大齊喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-14',
        start: 62.30,
        end: 63.40,
        chant: 'let it go',
        type: 'echo',
        roman: 'let it go',
        meaning: '隨它去吧',
        tip: 'I need to 之後立刻接喊 let it go！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-15',
        start: 64.30,
        end: 65.40,
        chant: 'let it show',
        type: 'echo',
        roman: 'let it show',
        meaning: '展現出來',
        tip: 'And I\'mma 之後立刻接喊 let it show！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-16',
        start: 70.60,
        end: 71.78,
        chant: 'on and on and on and',
        type: 'hook',
        roman: 'on and on and on and',
        meaning: '持續不斷連擊',
        tip: 'We zoning bet we stunting 之後連續四連打！',
        leadTimeSec: 1.2
      },
      // Pre-Chorus 2
      {
        id: 'like-that-17',
        start: 76.49,
        end: 77.65,
        chant: '(They don\'t)',
        type: 'echo',
        roman: '(They don\'t)',
        meaning: '她們根本不懂',
        tip: 'Cause all those girls 唱完立刻切入！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-18',
        start: 78.83,
        end: 79.80,
        chant: '(They don\'t)',
        type: 'echo',
        roman: '(They don\'t)',
        meaning: '她們根本不懂',
        tip: 'Know what you need 唱完立刻再接 (They don\'t)！',
        leadTimeSec: 1.2
      },
      // Chorus 2
      {
        id: 'like-that-19',
        start: 85.70,
        end: 86.75,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '副歌第一拍句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-20',
        start: 88.00,
        end: 89.13,
        chant: 'right back',
        type: 'hook',
        roman: 'right back',
        meaning: '立刻回應',
        tip: '接在 give it 後面爆發！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-21',
        start: 91.90,
        end: 92.70,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: 'Baby would you 接唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-22',
        start: 92.75,
        end: 93.59,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '連續第二拍 like that！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-23',
        start: 101.40,
        end: 102.20,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '副歌後半句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-24',
        start: 102.25,
        end: 103.10,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '最後一拍連續重擊！',
        leadTimeSec: 1.0
      },
      // Chorus 3
      {
        id: 'like-that-25',
        start: 132.60,
        end: 133.59,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '高潮副歌第一拍句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-26',
        start: 135.00,
        end: 136.18,
        chant: 'right back',
        type: 'hook',
        roman: 'right back',
        meaning: '立刻回應',
        tip: '接在 give it 後面爆發！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-27',
        start: 139.10,
        end: 139.90,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: 'Baby would you 接唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-28',
        start: 139.95,
        end: 140.76,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '連續第二拍 like that！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-29',
        start: 148.50,
        end: 149.30,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '副歌後半句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-30',
        start: 149.35,
        end: 150.15,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '最後一拍連續重擊！',
        leadTimeSec: 1.0
      },
      // Chorus 4 / Outro
      {
        id: 'like-that-31',
        start: 151.40,
        end: 152.44,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '最後副歌第一拍句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-32',
        start: 153.80,
        end: 154.95,
        chant: 'right back',
        type: 'hook',
        roman: 'right back',
        meaning: '立刻回應',
        tip: '接在 give it 後面爆發！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-33',
        start: 157.90,
        end: 158.70,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: 'Baby would you 接唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-34',
        start: 158.75,
        end: 159.53,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '連續第二拍 like that！',
        leadTimeSec: 1.0
      },
      {
        id: 'like-that-35',
        start: 167.20,
        end: 168.10,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '副歌最後後半句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'like-that-36',
        start: 168.15,
        end: 169.20,
        chant: 'like that',
        type: 'hook',
        roman: 'like that',
        meaning: '喜歡那樣嗎',
        tip: '最後一拍連續重擊！',
        leadTimeSec: 1.0
      },
      // (함성)
      {
        id: 'like-that-37',
        start: 169.50,
        end: 175.00,
        chant: '📢 ( 함성 ~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: '(HAM-SEONG! SCREAM!)',
        meaning: '演唱會終極歡呼',
        tip: '歌曲結束全場 MONSTIEZ 狂熱尖叫歡呼！',
        leadTimeSec: 1.5
      }
    ]
  },

  // BABYMONSTER - SUGAR HONEY ICE TEA (Official Weverse / MV: naoGk-Zjc1s / xN3X_tl4zlQ)
  'naoGk-Zjc1s': {
    songId: 'naoGk-Zjc1s',
    title: 'SUGAR HONEY ICE TEA',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: 'YG 官方 Weverse [SUGAR HONEY ICE TEA] 應援法。前奏 (B.A.B.Y.M.O.N) 震撼口號，副歌 and you know it 與 Ice, ice, ice 連擊，饒舌段落 yeah yeah yeah 與結尾全場大尖叫！',
    cues: [
      // Intro
      {
        id: 'shit-1',
        start: 5.96,
        end: 9.50,
        chant: '(B.A.B.Y.M.O.N Sugar Honey Ice Tea)',
        type: 'name',
        roman: '(B.A.B.Y.M.O.N Sugar Honey Ice Tea)',
        meaning: '前奏團名口號齊喊',
        tip: "前奏聽完 I'm the 四次後立刻齊喊！",
        leadTimeSec: 2.0
      },
      {
        id: 'shit-2',
        start: 9.50,
        end: 13.00,
        chant: '(B.A.B.Y.M.O.N Sugar Honey Ice Tea)',
        type: 'name',
        roman: '(B.A.B.Y.M.O.N Sugar Honey Ice Tea)',
        meaning: '前奏團名口號齊喊 (第二遍)',
        tip: '連續第二遍團名口號大合喊！',
        leadTimeSec: 1.0
      },
      // Chorus 1
      {
        id: 'shit-3',
        start: 14.80,
        end: 16.26,
        chant: 'and you know it',
        type: 'hook',
        roman: 'and you know it',
        meaning: '你心知肚明',
        tip: '副歌第一句句尾齊喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-4',
        start: 18.20,
        end: 19.89,
        chant: 'and you know it',
        type: 'hook',
        roman: 'and you know it',
        meaning: '你心知肚明',
        tip: '副歌第二句句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-5',
        start: 19.89,
        end: 21.80,
        chant: 'Ice, ice, ice',
        type: 'hook',
        roman: 'Ice, ice, ice',
        meaning: '冰霜三連擊',
        tip: '句首三連重音向下擊打！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-6',
        start: 25.27,
        end: 27.31,
        chant: "I, I, I'm the sugar honey",
        type: 'hook',
        roman: "I, I, I'm the sugar honey",
        meaning: '我是甜心糖蜜',
        tip: '副歌結尾連續重音接唱！',
        leadTimeSec: 1.2
      },
      // Verse 1
      {
        id: 'shit-7',
        start: 28.30,
        end: 29.32,
        chant: 'ice cream',
        type: 'echo',
        roman: 'ice cream',
        meaning: '冰淇淋 (句尾接唱)',
        tip: 'sweet just like some 後面接喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-8',
        start: 30.00,
        end: 30.82,
        chant: 'icing',
        type: 'echo',
        roman: 'icing',
        meaning: '糖霜 (句尾接唱)',
        tip: 'milk chocolate 後面接喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-9',
        start: 31.90,
        end: 32.99,
        chant: 'pipe dream',
        type: 'echo',
        roman: 'pipe dream',
        meaning: '白日夢 (句尾接唱)',
        tip: 'look like a 後面接喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-10',
        start: 32.99,
        end: 34.78,
        chant: 'I know, I know, I know',
        type: 'shout',
        roman: 'I know, I know, I know',
        meaning: '我知道我知道 (整句齊喊)',
        tip: '整句全場大合喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-11',
        start: 35.50,
        end: 36.45,
        chant: 'enticing',
        type: 'echo',
        roman: 'enticing',
        meaning: '如此誘人 (句尾接唱)',
        tip: "I'm so 後面接喊！",
        leadTimeSec: 1.0
      },
      {
        id: 'shit-12',
        start: 37.10,
        end: 38.07,
        chant: 'lime green',
        type: 'echo',
        roman: 'lime green',
        meaning: '嫉妒發青 (句尾接唱)',
        tip: "I make 'em 後面接喊！",
        leadTimeSec: 1.0
      },
      {
        id: 'shit-13',
        start: 38.90,
        end: 42.00,
        chant: "rising, let's go, let's go, let's go",
        type: 'hype',
        roman: "rising, let's go, let's go, let's go",
        meaning: '狂歡跳躍節奏',
        tip: '氣溫升高！跟著全場狂歡跳躍！',
        leadTimeSec: 1.2
      },
      // Pre-Chorus 1
      {
        id: 'shit-14',
        start: 45.21,
        end: 45.90,
        chant: 'Stop',
        type: 'shout',
        roman: 'Stop',
        meaning: '停 (重音宣告)',
        tip: '句首爆發齊喊 Stop！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-15',
        start: 48.67,
        end: 49.40,
        chant: 'Drop',
        type: 'shout',
        roman: 'Drop',
        meaning: '墜擊 (重音宣告)',
        tip: '句首爆發齊喊 Drop！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-16',
        start: 52.67,
        end: 54.01,
        chant: 'Monster melody',
        type: 'shout',
        roman: 'Monster melody',
        meaning: '怪物旋律 (高潮齊喊)',
        tip: '導歌結尾全員大合唱！',
        leadTimeSec: 1.5
      },
      // Chorus 2
      {
        id: 'shit-17',
        start: 57.80,
        end: 59.85,
        chant: 'and you know it',
        type: 'hook',
        roman: 'and you know it',
        meaning: '你心知肚明',
        tip: '副歌第一句句尾齊喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-18',
        start: 61.30,
        end: 63.10,
        chant: 'and you know it',
        type: 'hook',
        roman: 'and you know it',
        meaning: '你心知肚明',
        tip: '副歌第二句句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-19',
        start: 64.60,
        end: 66.60,
        chant: 'yeah, you know it',
        type: 'hook',
        roman: 'yeah, you know it',
        meaning: '你很清楚',
        tip: "Ain't no other baddie 後面齊喊！",
        leadTimeSec: 1.2
      },
      {
        id: 'shit-20',
        start: 68.27,
        end: 70.57,
        chant: "I, I'm the sugar honey ice",
        type: 'hook',
        roman: "I, I'm the sugar honey ice",
        meaning: '我是甜心糖蜜',
        tip: '副歌結尾連續重音連擊！',
        leadTimeSec: 1.2
      },
      // Verse 2 (Rap)
      {
        id: 'shit-21',
        start: 73.19,
        end: 73.90,
        chant: 'yeah, yeah, yeah',
        type: 'hook',
        roman: 'yeah, yeah, yeah',
        meaning: '耶耶耶 (連擊三拍)',
        tip: 'Just add the commas 後面三連打！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-22',
        start: 76.57,
        end: 77.41,
        chant: 'yeah, yeah, yeah',
        type: 'hook',
        roman: 'yeah, yeah, yeah',
        meaning: '耶耶耶 (連擊三拍)',
        tip: 'Got the wrist on water 後面三連打！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-23',
        start: 78.10,
        end: 78.74,
        chant: '(This)',
        type: 'echo',
        roman: '(This)',
        meaning: '這件事 (呼應接唱)',
        tip: "what you know 'bout 後面接 (This)！",
        leadTimeSec: 1.0
      },
      {
        id: 'shit-24',
        start: 79.70,
        end: 80.49,
        chant: '(You wish)',
        type: 'echo',
        roman: '(You wish)',
        meaning: '你想得美 (呼應接唱)',
        tip: 'Wanna get like me 後面接 (You wish)！',
        leadTimeSec: 1.0
      },
      // Verse 3
      {
        id: 'shit-25',
        start: 85.60,
        end: 86.46,
        chant: 'ice cream',
        type: 'echo',
        roman: 'ice cream',
        meaning: '冰淇淋 (句尾接唱)',
        tip: 'sweet just like some 後面接喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-26',
        start: 87.20,
        end: 88.04,
        chant: 'icing',
        type: 'echo',
        roman: 'icing',
        meaning: '糖霜 (句尾接唱)',
        tip: 'milk chocolate 後面接喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-27',
        start: 89.10,
        end: 90.04,
        chant: 'pipe dream',
        type: 'echo',
        roman: 'pipe dream',
        meaning: '白日夢 (句尾接唱)',
        tip: 'look like a 後面接喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-28',
        start: 90.04,
        end: 92.46,
        chant: 'I know, I know, I know',
        type: 'shout',
        roman: 'I know, I know, I know',
        meaning: '我知道我知道 (整句齊喊)',
        tip: '整句全場大合喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-29',
        start: 93.20,
        end: 94.17,
        chant: 'enticing',
        type: 'echo',
        roman: 'enticing',
        meaning: '如此誘人 (句尾接唱)',
        tip: "I'm so 後面接喊！",
        leadTimeSec: 1.0
      },
      {
        id: 'shit-30',
        start: 94.90,
        end: 95.72,
        chant: 'lime green',
        type: 'echo',
        roman: 'lime green',
        meaning: '嫉妒發青 (句尾接唱)',
        tip: "I make 'em 後面接喊！",
        leadTimeSec: 1.0
      },
      {
        id: 'shit-31',
        start: 96.70,
        end: 99.22,
        chant: "rising, let's go, let's go, let's go",
        type: 'hype',
        roman: "rising, let's go, let's go, let's go",
        meaning: '狂歡跳躍節奏',
        tip: '氣溫升高！跟著全場狂歡跳躍！',
        leadTimeSec: 1.2
      },
      // Pre-Chorus 2
      {
        id: 'shit-32',
        start: 102.22,
        end: 102.90,
        chant: 'Stop',
        type: 'shout',
        roman: 'Stop',
        meaning: '停 (重音宣告)',
        tip: '句首爆發齊喊 Stop！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-33',
        start: 106.10,
        end: 106.90,
        chant: 'Drop',
        type: 'shout',
        roman: 'Drop',
        meaning: '墜擊 (重音宣告)',
        tip: '句首爆發齊喊 Drop！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-34',
        start: 109.94,
        end: 112.27,
        chant: 'Monster melody',
        type: 'shout',
        roman: 'Monster melody',
        meaning: '怪物旋律 (高潮齊喊)',
        tip: '導歌結尾全員大合唱！',
        leadTimeSec: 1.5
      },
      // Chorus 3
      {
        id: 'shit-35',
        start: 114.20,
        end: 115.57,
        chant: 'and you know it',
        type: 'hook',
        roman: 'and you know it',
        meaning: '你心知肚明',
        tip: '副歌第一句句尾齊喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-36',
        start: 118.00,
        end: 120.20,
        chant: 'and you know it',
        type: 'hook',
        roman: 'and you know it',
        meaning: '你心知肚明',
        tip: '副歌第二句句尾重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-37',
        start: 121.80,
        end: 123.70,
        chant: 'yeah, you know it',
        type: 'hook',
        roman: 'yeah, you know it',
        meaning: '你很清楚',
        tip: "Ain't no other baddie 後面齊喊！",
        leadTimeSec: 1.2
      },
      {
        id: 'shit-38',
        start: 125.75,
        end: 127.71,
        chant: "I, I'm the sugar honey ice",
        type: 'hook',
        roman: "I, I'm the sugar honey ice",
        meaning: '我是甜心糖蜜',
        tip: '副歌結尾連續重音連擊！',
        leadTimeSec: 1.2
      },
      // Bridge
      {
        id: 'shit-39',
        start: 127.71,
        end: 128.80,
        chant: 'Tasty',
        type: 'shout',
        roman: 'Tasty',
        meaning: '美味可口',
        tip: 'Bridge 第一句開頭宣告齊喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-40',
        start: 131.21,
        end: 132.30,
        chant: 'Crazy',
        type: 'shout',
        roman: 'Crazy',
        meaning: '瘋狂著迷',
        tip: 'Bridge 第二句開頭宣告齊喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-41',
        start: 134.46,
        end: 135.60,
        chant: 'Baby',
        type: 'shout',
        roman: 'Baby',
        meaning: '寶貝',
        tip: 'Bridge 第三句開頭齊喊！',
        leadTimeSec: 1.2
      },
      // Outro
      {
        id: 'shit-42',
        start: 145.64,
        end: 149.23,
        chant: 'Sugar honey ice tea, you know it, know it',
        type: 'hook',
        roman: 'Sugar honey ice tea, you know it, know it',
        meaning: '甜心冰茶，你心知肚明',
        tip: '尾奏全場合唱重音切入！',
        leadTimeSec: 1.5
      },
      {
        id: 'shit-43',
        start: 149.23,
        end: 152.69,
        chant: "Sugar honey, I'm the sugar, I'm the sugar",
        type: 'hook',
        roman: "Sugar honey, I'm the sugar, I'm the sugar",
        meaning: '甜心糖蜜，我是最甜蜜的',
        tip: '連貫合唱不停歇！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-44',
        start: 152.69,
        end: 156.36,
        chant: 'Sugar honey ice tea, you know it, know it',
        type: 'hook',
        roman: 'Sugar honey ice tea, you know it, know it',
        meaning: '甜心冰茶，你心知肚明',
        tip: '尾奏第二輪合唱！',
        leadTimeSec: 1.2
      },
      {
        id: 'shit-45',
        start: 156.36,
        end: 159.95,
        chant: "Sugar honey, I'm the sugar, I'm the sugar",
        type: 'hook',
        roman: "Sugar honey, I'm the sugar, I'm the sugar",
        meaning: '甜心糖蜜，我是最甜蜜的',
        tip: '連貫合唱不停歇！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-46',
        start: 162.20,
        end: 163.62,
        chant: 'ice tea',
        type: 'echo',
        roman: 'ice tea',
        meaning: '冰茶 (接唱呼應)',
        tip: 'honey 後面立刻接唱 ice tea！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-47',
        start: 165.80,
        end: 167.37,
        chant: 'ice tea',
        type: 'echo',
        roman: 'ice tea',
        meaning: '冰茶 (接唱呼應)',
        tip: 'honey 後面立刻接唱 ice tea！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-48',
        start: 169.20,
        end: 170.62,
        chant: 'ice tea',
        type: 'echo',
        roman: 'ice tea',
        meaning: '冰茶 (接唱呼應)',
        tip: 'honey 後面立刻接唱 ice tea！',
        leadTimeSec: 1.0
      },
      {
        id: 'shit-49',
        start: 173.50,
        end: 174.88,
        chant: 'ice tea',
        type: 'echo',
        roman: 'ice tea',
        meaning: '冰茶 (最後接唱呼應)',
        tip: '最後一句結尾重音 ice tea！',
        leadTimeSec: 1.0
      },
      // (함성)
      {
        id: 'shit-50',
        start: 175.00,
        end: 180.00,
        chant: '📢 ( 함성 ~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: '(HAM-SEONG! SCREAM!)',
        meaning: '全場最高潮狂熱尖叫',
        tip: '歌曲結束全場 MONSTIEZ 狂熱尖叫歡呼！',
        leadTimeSec: 1.5
      }
    ]
  },

  // BABYMONSTER - FOREVER (Official MV: eJCHKjt0MPw / Zy1sU6ZOgjc)
  'eJCHKjt0MPw': {
    songId: 'eJCHKjt0MPw',
    title: 'FOREVER',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: 'YG 官方 Weverse [FOREVER] 應援法。前奏 ok ok ok 與團名爆發，副歌三連 Forever 與四連拍手，饒舌 bad girl 與 B-A-B-Y-M-O-N 大齊喊！',
    cues: [
      // Intro
      {
        id: 'forever-1',
        start: 3.80,
        end: 5.92,
        chant: 'ok ok ok',
        type: 'hook',
        roman: 'ok ok ok',
        meaning: '好 好 好 (節奏呼應)',
        tip: 'Alright, ok 之後立刻接唱 ok ok ok！',
        leadTimeSec: 1.2
      },
      {
        id: 'forever-2',
        start: 8.34,
        end: 9.88,
        chant: 'BABYMONSTER',
        type: 'name',
        roman: 'BABYMONSTER',
        meaning: '團名震撼吶喊',
        tip: '前奏第二次 Alright, ok 後爆發齊喊團名！',
        leadTimeSec: 1.5
      },
      // Verse 1
      {
        id: 'forever-3',
        start: 15.97,
        end: 17.20,
        chant: '(Bye, bye, bye)',
        type: 'echo',
        roman: '(Bye, bye, bye)',
        meaning: '再見 (句尾呼應)',
        tip: 'so you can say goodbye 後立刻接唱！',
        leadTimeSec: 1.2
      },
      {
        id: 'forever-4',
        start: 23.35,
        end: 24.69,
        chant: '👏👏 👏👏 (四連拍手)',
        type: 'hook',
        roman: 'Clap! Clap! Clap! Clap!',
        meaning: '鼓掌拍手打節拍',
        tip: '박수나 쳐보지 唱完立刻連拍 4 下！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-5',
        start: 30.28,
        end: 32.07,
        chant: '(타고났지 like this)',
        type: 'echo',
        roman: '(tagonatji like this)',
        meaning: '天生就是這樣 (句尾接唱)',
        tip: 'I know 後立刻接唱 타고났지 like this！',
        leadTimeSec: 1.2
      },
      // Pre-Chorus 1
      {
        id: 'forever-6',
        start: 43.37,
        end: 45.29,
        chant: 'Ooh-ooh-ooh-ooh-ooh-ooh',
        type: 'shout',
        roman: 'Ooh-ooh-ooh-ooh-ooh-ooh',
        meaning: '月下旋律合唱',
        tip: 'dancing in the moonlight 之後全場合唱！',
        leadTimeSec: 1.5
      },
      {
        id: 'forever-7',
        start: 45.30,
        end: 46.10,
        chant: '👏👏 👏👏 (四連拍手)',
        type: 'hook',
        roman: 'Clap! Clap! Clap! Clap!',
        meaning: '連續鼓掌',
        tip: '緊接四連拍手！',
        leadTimeSec: 0.8
      },
      {
        id: 'forever-8',
        start: 46.10,
        end: 47.50,
        chant: 'Ooh-ooh-ooh-ooh, ayy',
        type: 'shout',
        roman: 'Ooh-ooh-ooh-ooh, ayy',
        meaning: '旋律呼應齊喊',
        tip: '合唱第二句！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-9',
        start: 47.50,
        end: 48.50,
        chant: '👏👏 👏👏 (四連拍手)',
        type: 'hook',
        roman: 'Clap! Clap! Clap! Clap!',
        meaning: '連續鼓掌',
        tip: '再接四連拍手！',
        leadTimeSec: 0.8
      },
      // Chorus 1
      {
        id: 'forever-10',
        start: 108.81,
        end: 111.19,
        chant: 'Forever',
        type: 'hook',
        roman: 'Forever',
        meaning: '永遠 (副歌第一擊)',
        tip: '副歌第一句爆發重擊！',
        leadTimeSec: 1.5
      },
      {
        id: 'forever-11',
        start: 112.57,
        end: 114.74,
        chant: 'Forever',
        type: 'hook',
        roman: 'Forever',
        meaning: '永遠 (副歌第二擊)',
        tip: '第二拍重擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'forever-12',
        start: 116.28,
        end: 118.50,
        chant: 'Forever',
        type: 'hook',
        roman: 'Forever',
        meaning: '永遠 (副歌第三擊)',
        tip: '第三拍連續爆發！',
        leadTimeSec: 1.2
      },
      // Verse 2 (Rap)
      {
        id: 'forever-13',
        start: 130.50,
        end: 131.20,
        chant: '(ah)',
        type: 'echo',
        roman: '(ah)',
        meaning: '嘆息呼應',
        tip: 'pay the price 後立刻呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-14',
        start: 134.96,
        end: 135.60,
        chant: '예뻐',
        type: 'shout',
        roman: 'yeppeo',
        meaning: '真美 (三連字齊喊)',
        tip: '饒舌節奏第一字！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-15',
        start: 136.22,
        end: 136.80,
        chant: '바빠',
        type: 'shout',
        roman: 'bappa',
        meaning: '好忙 (三連字齊喊)',
        tip: '饒舌節奏第二字！',
        leadTimeSec: 0.8
      },
      {
        id: 'forever-16',
        start: 136.85,
        end: 137.47,
        chant: '나빠',
        type: 'shout',
        roman: 'nappa',
        meaning: '真壞 (三連字齊喊)',
        tip: '饒舌節奏第三字！',
        leadTimeSec: 0.8
      },
      {
        id: 'forever-17',
        start: 138.51,
        end: 141.55,
        chant: 'B-A-B-Y-M-O-N',
        type: 'shout',
        roman: 'B-A-B-Y-M-O-N',
        meaning: '團名字母大拼寫',
        tip: '依節奏逐字大聲合喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'forever-18',
        start: 141.55,
        end: 142.22,
        chant: 'Get money',
        type: 'shout',
        roman: 'Get money',
        meaning: '賺大錢',
        tip: '拼完團名立刻齊喊！',
        leadTimeSec: 0.8
      },
      {
        id: 'forever-19',
        start: 148.40,
        end: 149.44,
        chant: 'money in the bag',
        type: 'shout',
        roman: 'money in the bag',
        meaning: '把錢裝進袋子裡',
        tip: '饒舌結尾帥氣重擊！',
        leadTimeSec: 1.0
      },
      // Pre-Chorus 2
      {
        id: 'forever-20',
        start: 153.48,
        end: 155.40,
        chant: 'Ooh-ooh-ooh-ooh-ooh-ooh',
        type: 'shout',
        roman: 'Ooh-ooh-ooh-ooh-ooh-ooh',
        meaning: '月下旋律合唱',
        tip: '全場合唱！',
        leadTimeSec: 1.5
      },
      {
        id: 'forever-21',
        start: 155.40,
        end: 156.20,
        chant: '👏👏 👏👏 (四連拍手)',
        type: 'hook',
        roman: 'Clap! Clap! Clap! Clap!',
        meaning: '連續鼓掌',
        tip: '四連拍手！',
        leadTimeSec: 0.8
      },
      {
        id: 'forever-22',
        start: 156.20,
        end: 157.50,
        chant: 'Ooh-ooh-ooh-ooh, ayy',
        type: 'shout',
        roman: 'Ooh-ooh-ooh-ooh, ayy',
        meaning: '旋律呼應齊喊',
        tip: '合唱第二句！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-23',
        start: 157.50,
        end: 158.50,
        chant: '👏👏 👏👏 (四連拍手)',
        type: 'hook',
        roman: 'Clap! Clap! Clap! Clap!',
        meaning: '連續鼓掌',
        tip: '再接四連拍手！',
        leadTimeSec: 0.8
      },
      // Chorus 2
      {
        id: 'forever-24',
        start: 219.01,
        end: 221.26,
        chant: 'Forever',
        type: 'hook',
        roman: 'Forever',
        meaning: '永遠 (第二副歌)',
        tip: '副歌重擊第一拍！',
        leadTimeSec: 1.5
      },
      {
        id: 'forever-25',
        start: 222.72,
        end: 224.85,
        chant: 'Forever',
        type: 'hook',
        roman: 'Forever',
        meaning: '永遠 (第二副歌)',
        tip: '第二拍連擊！',
        leadTimeSec: 1.2
      },
      {
        id: 'forever-26',
        start: 226.39,
        end: 228.50,
        chant: 'Forever',
        type: 'hook',
        roman: 'Forever',
        meaning: '永遠 (第二副歌)',
        tip: '第三拍爆發！',
        leadTimeSec: 1.2
      },
      // Bridge
      {
        id: 'forever-27',
        start: 253.71,
        end: 255.75,
        chant: 'We forever, forever',
        type: 'shout',
        roman: 'We forever, forever',
        meaning: '我們直到永遠',
        tip: 'Bridge 高潮齊唱！',
        leadTimeSec: 1.5
      },
      {
        id: 'forever-28',
        start: 255.75,
        end: 257.55,
        chant: 'Forever, ever, ever',
        type: 'shout',
        roman: 'Forever, ever, ever',
        meaning: '永遠、永遠、永遠',
        tip: '連貫高音齊唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-29',
        start: 303.50,
        end: 306.14,
        chant: '착각하지는 마',
        type: 'shout',
        roman: 'chakgakajineun ma',
        meaning: '可別自作多情',
        tip: '멋대로 之後立刻爆發大喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'forever-30',
        start: 309.18,
        end: 310.98,
        chant: "I'm spreading my wings",
        type: 'shout',
        roman: "I'm spreading my wings",
        meaning: '展翅高飛',
        tip: '高潮振翅宣告！',
        leadTimeSec: 1.2
      },
      // Final Chorus & Outro
      {
        id: 'forever-31',
        start: 312.52,
        end: 314.90,
        chant: 'Forever 👏👏 👏👏',
        type: 'hook',
        roman: 'Forever + Claps',
        meaning: '永遠 + 鼓掌拍手',
        tip: '最後高潮副歌重擊帶拍手！',
        leadTimeSec: 1.5
      },
      {
        id: 'forever-32',
        start: 314.90,
        end: 316.27,
        chant: 'Forever 👏👏 👏👏',
        type: 'hook',
        roman: 'Forever + Claps',
        meaning: '永遠 + 鼓掌拍手',
        tip: '第二拍重擊帶拍手！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-33',
        start: 316.27,
        end: 318.50,
        chant: 'Forever 👏👏 👏👏',
        type: 'hook',
        roman: 'Forever + Claps',
        meaning: '永遠 + 鼓掌拍手',
        tip: '第三拍重擊帶拍手！',
        leadTimeSec: 1.0
      },
      {
        id: 'forever-34',
        start: 326.50,
        end: 332.00,
        chant: '📢 ( 함성 ~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: '(HAM-SEONG! SCREAM!)',
        meaning: '終極全場大尖叫',
        tip: '歌曲結尾全場狂熱尖叫歡呼！',
        leadTimeSec: 1.5
      }
    ]
  },

  // BABYMONSTER - CLIK CLAK (Official MV: 1eQO8h7XU0Y / le_VX8l35XI)
  '1eQO8h7XU0Y': {
    songId: '1eQO8h7XU0Y',
    title: 'CLIK CLAK',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: 'YG 官方 [CLIK CLAK] 官方應援法。全員饒舌主打！副歌 CLIK CLAK 高跟鞋連打、charge/large/boss/talk 四連重擊、以及尾奏全員大合唱！',
    cues: [
      // Intro
      {
        id: 'clik-clak-1',
        start: 8.50,
        end: 11.07,
        chant: 'Hey, hey, hey, hey',
        type: 'hook',
        roman: 'Hey, hey, hey, hey',
        meaning: '四拍律動開場',
        tip: '前奏 Huh 之後立刻跟隨四連拍！',
        leadTimeSec: 1.2
      },
      // Chorus 1
      {
        id: 'clik-clak-2',
        start: 12.37,
        end: 13.20,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '高跟鞋踏步聲',
        tip: '副歌開頭第一重音！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-3',
        start: 16.50,
        end: 17.31,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連擊',
        tip: 'Money 之後立刻接打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-4',
        start: 18.20,
        end: 19.30,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '連打切入',
        tip: '中間那一拍 CLIK CLAK 大合喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-5',
        start: 21.50,
        end: 24.09,
        chant: 'charge, charge, charge',
        type: 'hook',
        roman: 'charge, charge, charge',
        meaning: '刷卡連擊三拍',
        tip: 'Spending money 之後三連重打！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-6',
        start: 25.00,
        end: 26.89,
        chant: 'large, large, large',
        type: 'hook',
        roman: 'large, large, large',
        meaning: '過得豪爽三拍',
        tip: "Who be livin' 之後三連重打！",
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-7',
        start: 28.30,
        end: 30.33,
        chant: 'boss, boss, boss',
        type: 'hook',
        roman: 'boss, boss, boss',
        meaning: '老闆氣場三拍',
        tip: 'Walking like a 之後三連重打！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-8',
        start: 31.80,
        end: 33.70,
        chant: 'talk, talk, talk, talk',
        type: 'hook',
        roman: 'talk, talk, talk, talk',
        meaning: '議論紛紛四拍',
        tip: "We make 'em 之後四連重打！",
        leadTimeSec: 1.2
      },
      // Verse 1
      {
        id: 'clik-clak-9',
        start: 42.80,
        end: 43.40,
        chant: '(Both)',
        type: 'echo',
        roman: '(Both)',
        meaning: '兩者都要',
        tip: 'You say both 後接 (Both)！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-10',
        start: 43.80,
        end: 44.47,
        chant: '(Both)',
        type: 'echo',
        roman: '(Both)',
        meaning: '兩者都要',
        tip: '緊接第二個 (Both)！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-11',
        start: 46.30,
        end: 47.00,
        chant: '(Pose)',
        type: 'echo',
        roman: '(Pose)',
        meaning: '擺姿勢',
        tip: 'Hit that pose 後接 (Pose)！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-12',
        start: 47.30,
        end: 48.04,
        chant: '(Pose)',
        type: 'echo',
        roman: '(Pose)',
        meaning: '擺姿勢',
        tip: '緊接第二個 (Pose)！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-13',
        start: 55.40,
        end: 56.82,
        chant: 'know, oh, oh',
        type: 'hook',
        roman: 'know, oh, oh',
        meaning: '大家都想知道',
        tip: 'wanna 後面接唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-14',
        start: 57.20,
        end: 58.62,
        chant: 'show, oh, oh',
        type: 'hook',
        roman: 'show, oh, oh',
        meaning: '炸裂全場舞台',
        tip: 'up the 後面接唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-15',
        start: 61.30,
        end: 62.09,
        chant: 'go',
        type: 'hook',
        roman: 'go',
        meaning: '隨它去吧',
        tip: "I'ma let it 後面重擊 go！",
        leadTimeSec: 0.8
      },
      // Chorus 2
      {
        id: 'clik-clak-16',
        start: 62.32,
        end: 63.10,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲第一擊',
        tip: '副歌開頭重音！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-17',
        start: 66.00,
        end: 67.03,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連擊',
        tip: 'Money 之後立刻接打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-18',
        start: 68.00,
        end: 69.20,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '中間拍連打',
        tip: '中間大合喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-19',
        start: 71.20,
        end: 73.30,
        chant: 'charge, charge, charge',
        type: 'hook',
        roman: 'charge, charge, charge',
        meaning: '刷卡三拍',
        tip: '三連重打！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-20',
        start: 74.60,
        end: 76.50,
        chant: 'large, large, large',
        type: 'hook',
        roman: 'large, large, large',
        meaning: '豪爽三拍',
        tip: '三連重打！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-21',
        start: 78.20,
        end: 80.78,
        chant: 'boss, boss, boss',
        type: 'hook',
        roman: 'boss, boss, boss',
        meaning: '氣場三拍',
        tip: '三連重打！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-22',
        start: 81.60,
        end: 83.48,
        chant: 'talk, talk, talk, talk',
        type: 'hook',
        roman: 'talk, talk, talk, talk',
        meaning: '議論四拍',
        tip: '四連重打！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-23',
        start: 83.81,
        end: 84.60,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '副歌後半第一擊',
        tip: '重擊切入！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-24',
        start: 87.40,
        end: 88.45,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: 'Money 之後重擊',
        tip: '立刻接打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-25',
        start: 89.30,
        end: 90.52,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '中間拍合喊',
        tip: '大合喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-26',
        start: 92.20,
        end: 94.32,
        chant: 'boss, boss, boss',
        type: 'hook',
        roman: 'boss, boss, boss',
        meaning: '氣場三拍',
        tip: '三連重打！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-27',
        start: 95.60,
        end: 97.83,
        chant: 'talk, talk, talk, talk',
        type: 'hook',
        roman: 'talk, talk, talk, talk',
        meaning: '議論四拍',
        tip: '四連重打！',
        leadTimeSec: 1.2
      },
      // Verse 2
      {
        id: 'clik-clak-28',
        start: 138.80,
        end: 139.43,
        chant: '(Mad)',
        type: 'echo',
        roman: '(Mad)',
        meaning: '嫉妒眼紅 (句尾呼應)',
        tip: 'they mad 後呼應 (Mad)！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-29',
        start: 140.40,
        end: 141.23,
        chant: '(SAP)',
        type: 'echo',
        roman: '(SAP)',
        meaning: '越快越好 (句尾呼應)',
        tip: 'bring that ASAP 後呼應 (SAP)！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-30',
        start: 142.10,
        end: 142.86,
        chant: '(Too bad)',
        type: 'echo',
        roman: '(Too bad)',
        meaning: '真遺憾 (句尾呼應)',
        tip: 'that’s too bad 後呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-31',
        start: 145.70,
        end: 146.33,
        chant: 'rock',
        type: 'echo',
        roman: 'rock',
        meaning: '鑽戒 (句尾接唱)',
        tip: 'kiss that big 接喊 rock！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-32',
        start: 147.20,
        end: 148.07,
        chant: 'top notch',
        type: 'echo',
        roman: 'top notch',
        meaning: '頂級水準 (句尾接唱)',
        tip: 'twenty-twenty 接喊 top notch！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-33',
        start: 149.30,
        end: 150.21,
        chant: '(So hot)',
        type: 'echo',
        roman: '(So hot)',
        meaning: '太火辣 (句尾呼應)',
        tip: "I'm so hot 後呼應 (So hot)！",
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-34',
        start: 151.00,
        end: 151.74,
        chant: '(DRIP)',
        type: 'echo',
        roman: '(DRIP)',
        meaning: '帥氣四溢 (首張專輯聯名呼應)',
        tip: "that's water 後爆發齊喊 (DRIP)！",
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-35',
        start: 158.25,
        end: 159.08,
        chant: "Who gon' stop me?",
        type: 'shout',
        roman: "Who gon' stop me?",
        meaning: '誰能阻擋我 (霸氣宣告)',
        tip: '踩油門後全場大齊喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-36',
        start: 200.00,
        end: 200.82,
        chant: '(Hits)',
        type: 'echo',
        roman: '(Hits)',
        meaning: '擊中人心 (句尾呼應)',
        tip: 'BABYMONSTER hits 後接 (Hits)！',
        leadTimeSec: 0.8
      },
      {
        id: 'clik-clak-37',
        start: 201.80,
        end: 202.68,
        chant: '(Wrist)',
        type: 'echo',
        roman: '(Wrist)',
        meaning: '耀眼手腕 (句尾呼應)',
        tip: 'on my wrist 後接 (Wrist)！',
        leadTimeSec: 0.8
      },
      // Dance Break / Outro
      {
        id: 'clik-clak-38',
        start: 206.25,
        end: 208.00,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連打',
        tip: '間奏 Dance Break 第一拍！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-39',
        start: 208.50,
        end: 210.00,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連打',
        tip: '第二拍重打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-40',
        start: 210.20,
        end: 211.53,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連打',
        tip: '第三拍重打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-41',
        start: 213.20,
        end: 215.03,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連打',
        tip: '第四拍連打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-42',
        start: 215.50,
        end: 217.00,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連打',
        tip: '第五拍連打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-43',
        start: 217.20,
        end: 218.60,
        chant: 'CLIK CLAK',
        type: 'hook',
        roman: 'CLIK CLAK',
        meaning: '踏步聲連打',
        tip: '第六拍連打！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-44',
        start: 220.80,
        end: 222.10,
        chant: 'heels tap',
        type: 'hook',
        roman: 'heels tap',
        meaning: '踏響鞋跟 (句尾接打)',
        tip: 'CLIK CLIK CLAK 後接 heels tap！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-45',
        start: 222.80,
        end: 223.97,
        chant: 'hips back',
        type: 'hook',
        roman: 'hips back',
        meaning: '自信扭臀 (句尾接打)',
        tip: 'Walkin\' with my 後接 hips back！',
        leadTimeSec: 1.0
      },
      {
        id: 'clik-clak-46',
        start: 224.80,
        end: 226.94,
        chant: 'CLIK CLAK! CLIK CLAK!',
        type: 'hook',
        roman: 'CLIK CLAK! CLIK CLAK!',
        meaning: '雙重重擊連打',
        tip: 'Money 後面連續雙擊！',
        leadTimeSec: 1.0
      },
      // Outro Chant
      {
        id: 'clik-clak-47',
        start: 234.18,
        end: 240.99,
        chant: "Ain't looking back, let's take the lead / Go head ladies, go head ladies",
        type: 'shout',
        roman: "Ain't looking back, let's take the lead / Go head ladies, go head ladies",
        meaning: '絕不回頭帶領全場 (尾奏全員大合唱)',
        tip: '尾奏全場合唱第一段！',
        leadTimeSec: 1.5
      },
      {
        id: 'clik-clak-48',
        start: 240.99,
        end: 249.03,
        chant: "Ain't looking back, let's take the lead / Go head ladies, here we go",
        type: 'shout',
        roman: "Ain't looking back, let's take the lead / Go head ladies, here we go",
        meaning: '引領全場，狂歡啟動！',
        tip: '尾奏全場合唱第二段最高潮！',
        leadTimeSec: 1.2
      },
      {
        id: 'clik-clak-49',
        start: 249.50,
        end: 255.00,
        chant: '📢 ( 함성 ~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: '(HAM-SEONG! SCREAM!)',
        meaning: '全場終極狂熱尖叫',
        tip: '歌曲結束全場 MONSTIEZ 狂熱尖叫歡呼！',
        leadTimeSec: 1.5
      }
    ]
  },

  // BABYMONSTER - CHOOM (춤) (Official MV: x3eqqoZPV_E / UPkyursCTfE)
  'x3eqqoZPV_E': {
    songId: 'x3eqqoZPV_E',
    title: 'CHOOM (춤)',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: 'YG 官方 Weverse [CHOOM (춤)] 應援法。前奏 1, 2 heat is on、副歌連續爆擊「춤, 춤, 춤」、Watch out 呼應，以及尾奏 That’s right 全場合唱！',
    cues: [
      // Intro
      {
        id: 'choom-1',
        start: 27.56,
        end: 29.56,
        chant: 'One, two, heat is on',
        type: 'shout',
        roman: 'One, two, heat is on',
        meaning: '一二，熱力全開',
        tip: '前奏第一句全場齊喊！',
        leadTimeSec: 2.0
      },
      {
        id: 'choom-2',
        start: 31.78,
        end: 33.60,
        chant: 'Three, four, BABYMON',
        type: 'name',
        roman: 'Three, four, BABYMON',
        meaning: '三四，寶貝怪獸',
        tip: '接唱團名宣告！',
        leadTimeSec: 1.2
      },
      // Verse 1
      {
        id: 'choom-3',
        start: 41.58,
        end: 43.76,
        chant: '(We gon’ get this party started)',
        type: 'echo',
        roman: '(We gon’ get this party started)',
        meaning: '派對正式啟動 (接唱呼應)',
        tip: 'Yeah, I know we’re seven but we ate 後面呼應！',
        leadTimeSec: 1.2
      },
      {
        id: 'choom-4',
        start: 50.32,
        end: 51.78,
        chant: 'Better run that, run that',
        type: 'shout',
        roman: 'Better run that, run that',
        meaning: '快跟上腳步',
        tip: '導歌前最後一句大齊喊！',
        leadTimeSec: 1.2
      },
      // Pre-Chorus 1
      {
        id: 'choom-5',
        start: 51.78,
        end: 53.20,
        chant: 'Oh my, oh my, my',
        type: 'hook',
        roman: 'Oh my, oh my, my',
        meaning: '我的天啊 (重音合唱)',
        tip: '導歌開頭整齊齊唱！',
        leadTimeSec: 1.2
      },
      {
        id: 'choom-6',
        start: 54.58,
        end: 56.50,
        chant: 'Oh my, oh my, my',
        type: 'hook',
        roman: 'Oh my, oh my, my',
        meaning: '我的天啊 (第二擊)',
        tip: '連續第二拍重音！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-7',
        start: 59.38,
        end: 60.50,
        chant: 'Loosen up',
        type: 'shout',
        roman: 'Loosen up',
        meaning: '放鬆狂歡',
        tip: '句首爆發齊喊！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-8',
        start: 61.56,
        end: 62.60,
        chant: 'Burn it up',
        type: 'shout',
        roman: 'Burn it up',
        meaning: '燃燒全場',
        tip: '緊接第二句開頭爆發！',
        leadTimeSec: 1.0
      },
      // Chorus 1
      {
        id: 'choom-9',
        start: 67.20,
        end: 68.38,
        chant: '춤',
        type: 'hook',
        roman: 'chum',
        meaning: '跳舞 (副歌重擊)',
        tip: 'Let’s 之後全場爆擊喊「춤」！',
        leadTimeSec: 1.2
      },
      {
        id: 'choom-10',
        start: 70.60,
        end: 72.00,
        chant: '춤',
        type: 'hook',
        roman: 'chum',
        meaning: '跳舞 (第二重擊)',
        tip: '리듬을 삼켜 보자 之後重擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-11',
        start: 73.50,
        end: 75.00,
        chant: '(Watch out, watch out)',
        type: 'echo',
        roman: '(Watch out, watch out)',
        meaning: '當心注意 (接唱呼應)',
        tip: '間奏立刻呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-12',
        start: 79.50,
        end: 81.00,
        chant: '춤',
        type: 'hook',
        roman: 'chum',
        meaning: '跳舞 (第三重擊)',
        tip: '취해 보자 之後重擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-13',
        start: 81.00,
        end: 82.00,
        chant: '(Watch out, watch out)',
        type: 'echo',
        roman: '(Watch out, watch out)',
        meaning: '當心注意 (第二呼應)',
        tip: '立刻呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'choom-14',
        start: 82.00,
        end: 83.50,
        chant: '춤, 춤, 춤, 춤, 춤',
        type: 'hook',
        roman: 'chum, chum, chum, chum, chum',
        meaning: '跳舞五連擊',
        tip: '副歌最後五連發連打！',
        leadTimeSec: 1.0
      },
      // Post-Chorus 1
      {
        id: 'choom-15',
        start: 86.50,
        end: 88.10,
        chant: '“Vroom, vroom”',
        type: 'echo',
        roman: '“Vroom, vroom”',
        meaning: '油門轟鳴聲',
        tip: 'Get out the way like 之後呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-16',
        start: 90.80,
        end: 92.42,
        chant: '“춤, 춤”',
        type: 'echo',
        roman: '“chum, chum”',
        meaning: '跳吧跳吧',
        tip: 'You better dance like 之後呼應！',
        leadTimeSec: 1.0
      },
      // Verse 2
      {
        id: 'choom-17',
        start: 105.50,
        end: 107.64,
        chant: '춤, 춤, 춤',
        type: 'hook',
        roman: 'chum, chum, chum',
        meaning: '舞步三連打',
        tip: '보여주마 나의 之後連續三連打！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-18',
        start: 121.20,
        end: 123.10,
        chant: "I'm a monster queen",
        type: 'shout',
        roman: "I'm a monster queen",
        meaning: '我是怪物女王 (霸氣大齊喊)',
        tip: '이 구역에 난 之後全場大合喊！',
        leadTimeSec: 1.2
      },
      // Pre-Chorus 2
      {
        id: 'choom-19',
        start: 123.10,
        end: 124.29,
        chant: 'Oh my, oh my, my',
        type: 'hook',
        roman: 'Oh my, oh my, my',
        meaning: '我的天啊 (第二導歌)',
        tip: '整齊齊唱！',
        leadTimeSec: 1.2
      },
      {
        id: 'choom-20',
        start: 126.67,
        end: 128.25,
        chant: 'Oh my, oh my, my',
        type: 'hook',
        roman: 'Oh my, oh my, my',
        meaning: '我的天啊 (第二擊)',
        tip: '第二拍重音！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-21',
        start: 130.63,
        end: 131.70,
        chant: 'Loosen up',
        type: 'shout',
        roman: 'Loosen up',
        meaning: '放鬆狂歡',
        tip: '句首爆發！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-22',
        start: 132.72,
        end: 133.80,
        chant: 'Burn it up',
        type: 'shout',
        roman: 'Burn it up',
        meaning: '燃燒全場',
        tip: '緊接第二句開頭爆發！',
        leadTimeSec: 1.0
      },
      // Chorus 2
      {
        id: 'choom-23',
        start: 139.50,
        end: 141.02,
        chant: '춤',
        type: 'hook',
        roman: 'chum',
        meaning: '跳舞 (副歌重擊)',
        tip: 'Let’s 之後全場爆擊喊「춤」！',
        leadTimeSec: 1.2
      },
      {
        id: 'choom-24',
        start: 142.20,
        end: 143.39,
        chant: '춤',
        type: 'hook',
        roman: 'chum',
        meaning: '跳舞 (第二重擊)',
        tip: '리듬을 삼켜 보자 之後重擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-25',
        start: 143.39,
        end: 144.77,
        chant: '(Watch out, watch out)',
        type: 'echo',
        roman: '(Watch out, watch out)',
        meaning: '當心注意 (接唱呼應)',
        tip: '間奏立刻呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-26',
        start: 149.80,
        end: 151.53,
        chant: '춤',
        type: 'hook',
        roman: 'chum',
        meaning: '跳舞 (第三重擊)',
        tip: '취해 보자 之後重擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-27',
        start: 151.53,
        end: 152.82,
        chant: '(Watch out, watch out)',
        type: 'echo',
        roman: '(Watch out, watch out)',
        meaning: '當心注意 (第二呼應)',
        tip: '立刻呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'choom-28',
        start: 152.82,
        end: 155.11,
        chant: '춤, 춤, 춤, 춤, 춤',
        type: 'hook',
        roman: 'chum, chum, chum, chum, chum',
        meaning: '跳舞五連擊',
        tip: '副歌最後五連發連打！',
        leadTimeSec: 1.0
      },
      // Post-Chorus 2
      {
        id: 'choom-29',
        start: 157.50,
        end: 159.03,
        chant: '“Vroom, vroom”',
        type: 'echo',
        roman: '“Vroom, vroom”',
        meaning: '油門轟鳴聲',
        tip: 'Get out the way like 之後呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-30',
        start: 162.20,
        end: 164.41,
        chant: '“춤, 춤”',
        type: 'echo',
        roman: '“chum, chum”',
        meaning: '跳吧跳吧',
        tip: 'You better dance like 之後呼應！',
        leadTimeSec: 1.0
      },
      // Bridge
      {
        id: 'choom-31',
        start: 171.40,
        end: 172.76,
        chant: '(Na-na-na)',
        type: 'echo',
        roman: '(Na-na-na)',
        meaning: '無暇猶豫 (呼應)',
        tip: 'No time to waste 後接唱！',
        leadTimeSec: 0.8
      },
      {
        id: 'choom-32',
        start: 173.20,
        end: 174.55,
        chant: '(Na-na-na)',
        type: 'echo',
        roman: '(Na-na-na)',
        meaning: '慶祝狂歡 (呼應)',
        tip: 'let’s celebrate 後接唱！',
        leadTimeSec: 0.8
      },
      {
        id: 'choom-33',
        start: 177.09,
        end: 179.51,
        chant: '춤, 춤, 춤, 춤',
        type: 'hook',
        roman: 'chum, chum, chum, chum',
        meaning: '舞步四連擊',
        tip: 'Baby 너와 나의 시간 後四連重擊！',
        leadTimeSec: 1.0
      },
      // Outro
      {
        id: 'choom-34',
        start: 179.51,
        end: 180.68,
        chant: "That's right",
        type: 'shout',
        roman: "That's right",
        meaning: '沒錯 (宣告大合喊)',
        tip: '尾奏第一拍宣告！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-35',
        start: 180.68,
        end: 183.00,
        chant: 'Everybody, everybody make some room, 춤',
        type: 'shout',
        roman: 'Everybody, everybody make some room, chum',
        meaning: '大家空出位置，跳舞吧！',
        tip: '尾奏全場合唱！',
        leadTimeSec: 1.2
      },
      {
        id: 'choom-36',
        start: 183.00,
        end: 184.39,
        chant: "That's right",
        type: 'shout',
        roman: "That's right",
        meaning: '沒錯',
        tip: '宣告接唱！',
        leadTimeSec: 0.8
      },
      {
        id: 'choom-37',
        start: 184.39,
        end: 187.40,
        chant: '춤, 춤, 춤, 춤, 춤',
        type: 'hook',
        roman: 'chum, chum, chum, chum, chum',
        meaning: '舞步五連擊',
        tip: '五連拍下擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-38',
        start: 187.40,
        end: 188.44,
        chant: "That's right",
        type: 'shout',
        roman: "That's right",
        meaning: '沒錯',
        tip: '宣告接唱！',
        leadTimeSec: 0.8
      },
      {
        id: 'choom-39',
        start: 188.44,
        end: 190.48,
        chant: 'Everybody, everybody make some room, 춤',
        type: 'shout',
        roman: 'Everybody, everybody make some room, chum',
        meaning: '大家空出位置，跳舞吧！',
        tip: '尾奏全場合唱第二輪！',
        leadTimeSec: 1.2
      },
      {
        id: 'choom-40',
        start: 190.48,
        end: 192.65,
        chant: "That's right",
        type: 'shout',
        roman: "That's right",
        meaning: '沒錯',
        tip: '宣告接唱！',
        leadTimeSec: 0.8
      },
      {
        id: 'choom-41',
        start: 192.65,
        end: 196.00,
        chant: '춤, 춤, 춤, 춤, 춤',
        type: 'hook',
        roman: 'chum, chum, chum, chum, chum',
        meaning: '舞步五連擊',
        tip: '最後五連拍爆發！',
        leadTimeSec: 1.0
      },
      {
        id: 'choom-42',
        start: 196.00,
        end: 202.00,
        chant: '📢 ( 함성 ~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: '(HAM-SEONG! SCREAM!)',
        meaning: '全場終極大狂歡尖叫',
        tip: '歌曲結束全場 MONSTIEZ 狂熱尖叫歡呼！',
        leadTimeSec: 1.5
      }
    ]
  },

  // BABYMONSTER - HOT SAUCE (Official MV: xn8mQqz2xmM / wBHKLsujSNA)
  'xn8mQqz2xmM': {
    songId: 'xn8mQqz2xmM',
    title: 'HOT SAUCE',
    artist: 'BABYMONSTER (베이비몬스터)',
    groupName: 'BABYMONSTER',
    fandomName: 'MONSTIEZ',
    description: 'YG 官方 Weverse [HOT SAUCE] 應援法。前奏 Fire go higher、副歌 Hot (hot) sauce (sauce) 呼應連打、B-A-B-Y-M-O-N 霸氣齊喊與結尾 Hot sauce 四連炸裂！',
    cues: [
      // Intro
      {
        id: 'hot-sauce-1',
        start: 8.09,
        end: 11.80,
        chant: 'Fire go higher wherever we are',
        type: 'shout',
        roman: 'Fire go higher wherever we are',
        meaning: '火焰隨我們燃起 (前奏大齊喊)',
        tip: '前奏第一句全場齊聲合喊！',
        leadTimeSec: 2.0
      },
      {
        id: 'hot-sauce-2',
        start: 11.80,
        end: 15.47,
        chant: 'BABYMONSTER girls got that woo-woo, ah',
        type: 'name',
        roman: 'BABYMONSTER girls got that woo-woo, ah',
        meaning: '寶貝怪獸女孩散發致命魅力',
        tip: '團名震撼宣告齊喊！',
        leadTimeSec: 1.5
      },
      // Chorus 1
      {
        id: 'hot-sauce-3',
        start: 15.50,
        end: 16.50,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱 (重音呼應)',
        tip: 'Hot 之後立刻呼應 (hot)！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-4',
        start: 16.50,
        end: 17.50,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬 (重音呼應)',
        tip: 'sauce 之後立刻呼應 (sauce)！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-5',
        start: 17.50,
        end: 18.20,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '第二拍呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-6',
        start: 18.20,
        end: 18.85,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '第二拍呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-7',
        start: 22.50,
        end: 23.30,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: "I'm like Hot 之後呼應！",
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-8',
        start: 23.30,
        end: 24.39,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: 'sauce 之後呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-9',
        start: 24.40,
        end: 25.30,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '第四拍呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-10',
        start: 25.30,
        end: 26.35,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '第四拍呼應！',
        leadTimeSec: 0.8
      },
      // Verse 1
      {
        id: 'hot-sauce-11',
        start: 33.57,
        end: 35.50,
        chant: 'B-A-B-Y-M-O-N',
        type: 'shout',
        roman: 'B-A-B-Y-M-O-N',
        meaning: '團名拼寫大齊喊',
        tip: '整齊逐字大聲合喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'hot-sauce-12',
        start: 49.75,
        end: 51.50,
        chant: 'BABYMONSTER bring the party',
        type: 'name',
        roman: 'BABYMONSTER bring the party',
        meaning: '寶貝怪獸引燃派對',
        tip: '主歌結尾全員大合唱！',
        leadTimeSec: 1.2
      },
      // Chorus 2
      {
        id: 'hot-sauce-13',
        start: 58.68,
        end: 59.80,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '副歌第二段呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-14',
        start: 59.80,
        end: 60.80,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-15',
        start: 60.80,
        end: 61.50,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '第二拍呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-16',
        start: 61.50,
        end: 62.35,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '第二拍呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-17',
        start: 65.56,
        end: 66.50,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '後半段呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-18',
        start: 66.50,
        end: 67.50,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-19',
        start: 67.50,
        end: 68.50,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-20',
        start: 68.50,
        end: 69.52,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '呼應！',
        leadTimeSec: 0.8
      },
      // Verse 2
      {
        id: 'hot-sauce-21',
        start: 77.00,
        end: 77.70,
        chant: 'lemonade',
        type: 'echo',
        roman: 'lemonade',
        meaning: '檸檬水 (句尾接唱)',
        tip: 'Think you need a 接喊 lemonade！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-22',
        start: 77.70,
        end: 78.53,
        chant: 'remedy',
        type: 'echo',
        roman: 'remedy',
        meaning: '解藥 (句尾接唱)',
        tip: 'Think you need a 接喊 remedy！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-23',
        start: 80.45,
        end: 82.24,
        chant: 'fire like this',
        type: 'echo',
        roman: 'fire like this',
        meaning: '如此熾熱烈火',
        tip: 'never ever felt a 後面接唱！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-24',
        start: 82.24,
        end: 84.12,
        chant: 'vibe like this',
        type: 'echo',
        roman: 'vibe like this',
        meaning: '如此狂熱氛圍',
        tip: 'reaper kinda 後面接唱！',
        leadTimeSec: 1.0
      },
      // Chorus 3
      {
        id: 'hot-sauce-25',
        start: 102.00,
        end: 103.00,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '第三副歌呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-26',
        start: 103.00,
        end: 104.00,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '呼應！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-27',
        start: 108.85,
        end: 110.00,
        chant: '(hot)',
        type: 'echo',
        roman: '(hot)',
        meaning: '火熱',
        tip: '後半段呼應！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-28',
        start: 110.00,
        end: 111.02,
        chant: '(sauce)',
        type: 'echo',
        roman: '(sauce)',
        meaning: '辣醬',
        tip: '呼應！',
        leadTimeSec: 0.8
      },
      // Post-Chorus / Outro
      {
        id: 'hot-sauce-29',
        start: 118.45,
        end: 121.95,
        chant: 'Fire go higher wherever we are',
        type: 'shout',
        roman: 'Fire go higher wherever we are',
        meaning: '火焰隨我們燃起 (高潮合唱)',
        tip: '尾奏全場大齊喊！',
        leadTimeSec: 1.5
      },
      {
        id: 'hot-sauce-30',
        start: 121.95,
        end: 125.54,
        chant: 'BABYMONSTER girls got that woo-woo, ah',
        type: 'name',
        roman: 'BABYMONSTER girls got that woo-woo, ah',
        meaning: '寶貝怪獸女孩魅力全開',
        tip: '全員大合喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'hot-sauce-31',
        start: 125.54,
        end: 129.04,
        chant: 'Fire go higher wherever we are',
        type: 'shout',
        roman: 'Fire go higher wherever we are',
        meaning: '火焰再度飆升！',
        tip: '連續大合喊！',
        leadTimeSec: 1.2
      },
      {
        id: 'hot-sauce-32',
        start: 129.04,
        end: 132.92,
        chant: 'BABYMONSTER girls got that woo-woo',
        type: 'name',
        roman: 'BABYMONSTER girls got that woo-woo',
        meaning: '寶貝怪獸女孩魅力四射',
        tip: '全員大合唱！',
        leadTimeSec: 1.2
      },
      // Outro Hot Sauce 4-count
      {
        id: 'hot-sauce-33',
        start: 133.00,
        end: 134.50,
        chant: '(Hot sauce)',
        type: 'hook',
        roman: '(Hot sauce)',
        meaning: '辣醬第一擊',
        tip: '尾奏四連擊第一擊！',
        leadTimeSec: 1.0
      },
      {
        id: 'hot-sauce-34',
        start: 136.00,
        end: 137.50,
        chant: '(Hot sauce)',
        type: 'hook',
        roman: '(Hot sauce)',
        meaning: '辣醬第二擊',
        tip: '尾奏第二擊！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-35',
        start: 140.00,
        end: 141.50,
        chant: '(Hot sauce)',
        type: 'hook',
        roman: '(Hot sauce)',
        meaning: '辣醬第三擊',
        tip: '尾奏第三擊！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-36',
        start: 143.50,
        end: 145.00,
        chant: '(Hot sauce)',
        type: 'hook',
        roman: '(Hot sauce)',
        meaning: '辣醬終極一擊',
        tip: '尾奏第四擊！',
        leadTimeSec: 0.8
      },
      {
        id: 'hot-sauce-37',
        start: 145.00,
        end: 150.00,
        chant: '📢 ( 함성 ~ 全場大尖叫歡呼！ )',
        type: 'scream',
        roman: '(HAM-SEONG! SCREAM!)',
        meaning: '全場終極狂熱尖叫',
        tip: '歌曲結束全場 MONSTIEZ 狂熱尖叫歡呼！',
        leadTimeSec: 1.5
      }
    ]
  },

  // BABYMONSTER - Stuck In The Middle (GsV1i0QHi-o)
  'GsV1i0QHi-o': {
    "songId": "GsV1i0QHi-o",
    "title": "Stuck In The Middle",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [Stuck In The Middle] 抒情應援法。高潮大合唱段落全場溫柔齊唱、伴隨應援手燈輕柔左右揮舞！",
    "cues": [
        {
            "id": "sitm-1",
            "start": 206.13,
            "end": 208.33,
            "chant": "You tell me that you need me",
            "type": "echo",
            "roman": "You tell me that you need me",
            "meaning": "你對我說你需要我 (終段大合唱)",
            "tip": "伴隨高潮伴奏全場溫柔合唱！",
            "leadTimeSec": 2
        },
        {
            "id": "sitm-2",
            "start": 208.33,
            "end": 209.96,
            "chant": "Then you walk away",
            "type": "echo",
            "roman": "Then you walk away",
            "meaning": "隨後你卻又轉身離開",
            "tip": "接唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-3",
            "start": 209.96,
            "end": 212.34,
            "chant": "Keep promising forever",
            "type": "echo",
            "roman": "Keep promising forever",
            "meaning": "嘴上不斷承諾著永遠",
            "tip": "深情合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-4",
            "start": 212.34,
            "end": 213.88,
            "chant": "With the words you say",
            "type": "echo",
            "roman": "With the words you say",
            "meaning": "用你的字字句句",
            "tip": "深情合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-5",
            "start": 213.88,
            "end": 216.09,
            "chant": "It's true",
            "type": "hook",
            "roman": "It's true",
            "meaning": "這是真的",
            "tip": "重音合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-6",
            "start": 216.09,
            "end": 219.63,
            "chant": "Don't know what I'm supposed to do",
            "type": "echo",
            "roman": "Don't know what I'm supposed to do",
            "meaning": "不知道我到底該怎麼做",
            "tip": "合唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-7",
            "start": 220.38,
            "end": 225.35,
            "chant": "I'm stuck in the middle with you you you",
            "type": "shout",
            "roman": "I'm stuck in the middle with you you you",
            "meaning": "我跟你一起困在回憶的中間",
            "tip": "全場核心標誌句齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-8",
            "start": 225.35,
            "end": 228.48,
            "chant": "With you you",
            "type": "hook",
            "roman": "With you you",
            "meaning": "與你、與你",
            "tip": "輕柔接唱",
            "leadTimeSec": 1.2
        },
        {
            "id": "sitm-9",
            "start": 228.48,
            "end": 232.23,
            "chant": "Oh boy you got me really confused",
            "type": "echo",
            "roman": "Oh boy you got me really confused",
            "meaning": "男孩你讓我真的好困惑",
            "tip": "合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-10",
            "start": 232.23,
            "end": 236.36,
            "chant": "Don't know what I'm supposed to do",
            "type": "echo",
            "roman": "Don't know what I'm supposed to do",
            "meaning": "不知道我到底該怎麼做",
            "tip": "合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-11",
            "start": 236.36,
            "end": 239.75,
            "chant": "I'm stuck in the middle with you",
            "type": "shout",
            "roman": "I'm stuck in the middle with you",
            "meaning": "我只願與你困在一起 (尾音大合唱)",
            "tip": "結尾深情合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "sitm-12",
            "start": 240,
            "end": 244,
            "chant": "BABYMONSTER! MONSTIEZ!",
            "type": "scream",
            "roman": "BABYMONSTER! MONSTIEZ!",
            "meaning": "全場感動掌聲與尖叫",
            "tip": "歌曲落幕全場起立鼓掌尖叫！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - DREAM (ynOtYmpZxak)
  'ynOtYmpZxak': {
    "songId": "ynOtYmpZxak",
    "title": "DREAM",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [DREAM] 官方出道紀念應援法。最終副歌全場合唱追夢金句，為七位女孩獻上最感動的吶喊！",
    "cues": [
        {
            "id": "dream-1",
            "start": 140.5,
            "end": 146.5,
            "chant": "Now I finally found my wings",
            "type": "hook",
            "roman": "Now I finally found my wings",
            "meaning": "如今我終於找到了我的翅膀 (高潮合唱)",
            "tip": "進入高潮大合唱，手燈高舉！",
            "leadTimeSec": 2
        },
        {
            "id": "dream-2",
            "start": 146.5,
            "end": 150.5,
            "chant": "I let go of everything",
            "type": "echo",
            "roman": "I let go of everything",
            "meaning": "我放下了所有的束縛與重擔",
            "tip": "接唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "dream-3",
            "start": 150.5,
            "end": 156,
            "chant": "Decided to follow my heart",
            "type": "hook",
            "roman": "Decided to follow my heart",
            "meaning": "下定決心追隨自己的心聲",
            "tip": "堅定合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "dream-4",
            "start": 156,
            "end": 161.5,
            "chant": "And I finally able to breathe",
            "type": "echo",
            "roman": "And I finally able to breathe",
            "meaning": "我終於能夠大口呼吸",
            "tip": "深情合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "dream-5",
            "start": 161.5,
            "end": 165.5,
            "chant": "Finally able to see",
            "type": "hook",
            "roman": "Finally able to see",
            "meaning": "終於能夠看清楚前方的光芒",
            "tip": "接唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "dream-6",
            "start": 165.5,
            "end": 170,
            "chant": "Just who I was born to be",
            "type": "shout",
            "roman": "Just who I was born to be",
            "meaning": "這就是我生而為人的模樣",
            "tip": "全場用力齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "dream-7",
            "start": 170,
            "end": 176,
            "chant": "I'm waking up in my dream",
            "type": "shout",
            "roman": "I'm waking up in my dream",
            "meaning": "我在我的夢想之中醒來 (主題齊唱)",
            "tip": "合唱達到頂點！",
            "leadTimeSec": 1.5
        },
        {
            "id": "dream-8",
            "start": 176,
            "end": 181,
            "chant": "BABYMONSTER 영원하자!",
            "type": "scream",
            "roman": "BABYMONSTER yeong-won-ha-ja!",
            "meaning": "寶貝怪獸永遠在一起！全場尖叫！",
            "tip": "出道感動落淚全場大尖叫與歡呼！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - WE GO UP (wlHwjkYpSr0)
  'wlHwjkYpSr0': {
    "songId": "wlHwjkYpSr0",
    "title": "WE GO UP",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [WE GO UP] 應援法。開場團名大喊、副歌 Killas & Villains 重音連打、極速饒舌卡點與結尾 B-A-B-Y-M-O-N 瘋狂呼應！",
    "cues": [
        {
            "id": "wgu-1",
            "start": 7,
            "end": 10.5,
            "chant": "BABY! MONSTER!",
            "type": "name",
            "roman": "BABY! MONSTER!",
            "meaning": "團名震撼前奏呼喊",
            "tip": "前奏 Yeah 之後全場整齊有力大喊！",
            "leadTimeSec": 2
        },
        {
            "id": "wgu-2",
            "start": 17.5,
            "end": 19.14,
            "chant": "show ya",
            "type": "echo",
            "roman": "show ya",
            "meaning": "展現給你看 (句尾卡點)",
            "tip": "最後兩個字跟著精準卡點喊出！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wgu-3",
            "start": 20.3,
            "end": 21.86,
            "chant": "on ya",
            "type": "echo",
            "roman": "on ya",
            "meaning": "席捲你們 (句尾卡點)",
            "tip": "句尾呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-4",
            "start": 29.24,
            "end": 30.33,
            "chant": "blow",
            "type": "hook",
            "roman": "blow",
            "meaning": "火箭升空炸裂 (重音爆發)",
            "tip": "watch the rocket blow 尾音用力下沉！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-5",
            "start": 33.5,
            "end": 34.33,
            "chant": "be bygones",
            "type": "echo",
            "roman": "be bygones",
            "meaning": "既往不咎",
            "tip": "句尾呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-6",
            "start": 35,
            "end": 35.87,
            "chant": "no problems",
            "type": "echo",
            "roman": "no problems",
            "meaning": "毫無問題",
            "tip": "句尾呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-7",
            "start": 37.8,
            "end": 39.12,
            "chant": "be icons",
            "type": "hook",
            "roman": "be icons",
            "meaning": "成為指標傳奇",
            "tip": "重音齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-8",
            "start": 39.12,
            "end": 41.71,
            "chant": "What you gon', what you gon', what you gon' do?",
            "type": "shout",
            "roman": "What you gon', what you gon', what you gon' do?",
            "meaning": "你要怎麼辦？(連環齊喊)",
            "tip": "前副歌加速連續連喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wgu-9",
            "start": 41.96,
            "end": 44.54,
            "chant": "Lookin' good, lookin' fly, lookin' brand new",
            "type": "shout",
            "roman": "Lookin' good, lookin' fly, lookin' brand new",
            "meaning": "看起來超棒、超帥、全新出擊",
            "tip": "節奏三連擊大齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-10",
            "start": 47.3,
            "end": 50.22,
            "chant": "You love it, love it",
            "type": "echo",
            "roman": "You love it, love it",
            "meaning": "你愛得不得了",
            "tip": "輕快接唱呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-11",
            "start": 53.22,
            "end": 55.47,
            "chant": "B-A-B-Y-M-O-N, we up, up, up",
            "type": "name",
            "roman": "B-A-B-Y-M-O-N, we up, up, up",
            "meaning": "BABYMON 我們向上攀登 (副歌前引爆點)",
            "tip": "副歌前全場最大聲齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wgu-12",
            "start": 55.47,
            "end": 57.22,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "副歌啟動齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-13",
            "start": 57.22,
            "end": 58.64,
            "chant": "killas, killas",
            "type": "hook",
            "roman": "killas, killas",
            "meaning": "殺手殺手 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-14",
            "start": 58.64,
            "end": 60.1,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "齊唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-15",
            "start": 60.1,
            "end": 61.56,
            "chant": "villains, villains",
            "type": "hook",
            "roman": "villains, villains",
            "meaning": "反派惡魔 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-16",
            "start": 67.03,
            "end": 68.32,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "副歌第二回齊唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-17",
            "start": 68.32,
            "end": 69.82,
            "chant": "killas, killas",
            "type": "hook",
            "roman": "killas, killas",
            "meaning": "殺手殺手 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-18",
            "start": 69.82,
            "end": 71.32,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "齊唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-19",
            "start": 71.32,
            "end": 72.86,
            "chant": "villains, villains",
            "type": "hook",
            "roman": "villains, villains",
            "meaning": "反派惡魔 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-20",
            "start": 79,
            "end": 81.79,
            "chant": "Copy, copy, copy, copy",
            "type": "shout",
            "roman": "Copy, copy, copy, copy",
            "meaning": "抄襲複製 (饒舌連打)",
            "tip": "四連擊節奏卡點齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wgu-21",
            "start": 81.79,
            "end": 83.2,
            "chant": "Copy, copy",
            "type": "hook",
            "roman": "Copy, copy",
            "meaning": "抄襲複製",
            "tip": "兩拍重音接喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-22",
            "start": 95.95,
            "end": 97.31,
            "chant": "be bygones",
            "type": "echo",
            "roman": "be bygones",
            "meaning": "既往不咎",
            "tip": "第二段 Verse 呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-23",
            "start": 97.31,
            "end": 98.72,
            "chant": "no problems",
            "type": "echo",
            "roman": "no problems",
            "meaning": "毫無問題",
            "tip": "第二段 Verse 呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-24",
            "start": 100.14,
            "end": 101.77,
            "chant": "be icons",
            "type": "hook",
            "roman": "be icons",
            "meaning": "成為指標傳奇",
            "tip": "重音齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-25",
            "start": 101.77000000000001,
            "end": 105.02,
            "chant": "What you gon', what you gon', what you gon' do?",
            "type": "shout",
            "roman": "What you gon', what you gon', what you gon' do?",
            "meaning": "你要怎麼辦？(連環齊喊)",
            "tip": "連環加速齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wgu-26",
            "start": 105.02,
            "end": 107.48,
            "chant": "Lookin' good, lookin' fly, lookin' brand new",
            "type": "shout",
            "roman": "Lookin' good, lookin' fly, lookin' brand new",
            "meaning": "看起來超棒、超帥、全新出擊",
            "tip": "節奏三連擊大齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-27",
            "start": 110.07,
            "end": 112.86,
            "chant": "You love it, love it",
            "type": "echo",
            "roman": "You love it, love it",
            "meaning": "你愛得不得了",
            "tip": "輕快接唱呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-28",
            "start": 116.03,
            "end": 118.45,
            "chant": "B-A-B-Y-M-O-N, we up, up, up",
            "type": "name",
            "roman": "B-A-B-Y-M-O-N, we up, up, up",
            "meaning": "BABYMON 我們向上攀登 (副歌前引爆點)",
            "tip": "副歌前全場最大聲齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wgu-29",
            "start": 118.45,
            "end": 119.87,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "副歌啟動齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-30",
            "start": 119.87,
            "end": 121.99,
            "chant": "killas, killas",
            "type": "hook",
            "roman": "killas, killas",
            "meaning": "殺手殺手 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-31",
            "start": 121.99,
            "end": 123.04,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "齊唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-32",
            "start": 123.04,
            "end": 124.5,
            "chant": "villains, villains",
            "type": "hook",
            "roman": "villains, villains",
            "meaning": "反派惡魔 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-33",
            "start": 130,
            "end": 131.38,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "副歌第二回齊唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-34",
            "start": 131.38,
            "end": 133.05,
            "chant": "killas, killas",
            "type": "hook",
            "roman": "killas, killas",
            "meaning": "殺手殺手 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-35",
            "start": 133.05,
            "end": 134.59,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "齊唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-36",
            "start": 134.59,
            "end": 135.89,
            "chant": "villains, villains",
            "type": "hook",
            "roman": "villains, villains",
            "meaning": "反派惡魔 (重音連打)",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-37",
            "start": 143.06,
            "end": 144.64,
            "chant": "run it up",
            "type": "hook",
            "roman": "run it up",
            "meaning": "衝向頂峰",
            "tip": "Bridge 句尾卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-38",
            "start": 146.27,
            "end": 147.44,
            "chant": "burn it up",
            "type": "hook",
            "roman": "burn it up",
            "meaning": "燃燒殆盡",
            "tip": "Bridge 句尾卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-39",
            "start": 148.82,
            "end": 150.19,
            "chant": "say my name",
            "type": "shout",
            "roman": "say my name",
            "meaning": "呼喊我的名字",
            "tip": "Bridge 句尾卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-40",
            "start": 153.28,
            "end": 156.16,
            "chant": "dangerous",
            "type": "hook",
            "roman": "dangerous",
            "meaning": "致命危險",
            "tip": "高潮前的危險警報！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-41",
            "start": 157.49,
            "end": 158.87,
            "chant": "buckle up",
            "type": "shout",
            "roman": "buckle up",
            "meaning": "繫好安全帶",
            "tip": "準備起飛！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-42",
            "start": 164.66,
            "end": 166.12,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "終極副歌全面爆發！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wgu-43",
            "start": 166.12,
            "end": 167.17,
            "chant": "killas, killas",
            "type": "hook",
            "roman": "killas, killas",
            "meaning": "殺手殺手",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-44",
            "start": 167.17,
            "end": 168.5,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "齊唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-45",
            "start": 168.5,
            "end": 170.17,
            "chant": "villains, villains",
            "type": "hook",
            "roman": "villains, villains",
            "meaning": "反派惡魔",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-46",
            "start": 173.34,
            "end": 176.05,
            "chant": "B-A (B-A) B-Y (B-Y) M-O (M-O) N (N)",
            "type": "name",
            "roman": "B-A (B-A) B-Y (B-Y) M-O (M-O) N (N)",
            "meaning": "團名拆解接字大暴走！",
            "tip": "全場一唱一和極速對喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wgu-47",
            "start": 176.05,
            "end": 177.39,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "齊唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-48",
            "start": 177.39,
            "end": 178.6,
            "chant": "killas, killas",
            "type": "hook",
            "roman": "killas, killas",
            "meaning": "殺手殺手",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-49",
            "start": 178.6,
            "end": 180.01,
            "chant": "We go up",
            "type": "shout",
            "roman": "We go up",
            "meaning": "我們向上衝",
            "tip": "齊唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-50",
            "start": 180.01,
            "end": 181.6,
            "chant": "villains, villains",
            "type": "hook",
            "roman": "villains, villains",
            "meaning": "反派惡魔",
            "tip": "重擊呼應！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wgu-51",
            "start": 186,
            "end": 188.27,
            "chant": "We go up!",
            "type": "shout",
            "roman": "We go up!",
            "meaning": "我們登頂！",
            "tip": "最後一擊收尾齊喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wgu-52",
            "start": 188.27,
            "end": 192,
            "chant": "BABYMONSTER! MONSTIEZ!",
            "type": "scream",
            "roman": "BABYMONSTER! MONSTIEZ!",
            "meaning": "全場終極狂熱尖叫",
            "tip": "歌曲結束全場 MONSTIEZ 狂熱尖叫歡呼！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - Love In My Heart (1kXLsrun51s)
  '1kXLsrun51s': {
    "songId": "1kXLsrun51s",
    "title": "Love In My Heart",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [Love In My Heart] 應援法。主歌卡點、副歌 Give you all of the love in my heart 全場大合唱與 Bridge 手燈揮舞！",
    "cues": [
        {
            "id": "limh-1",
            "start": 40.91,
            "end": 43.29,
            "chant": "I can't live without you",
            "type": "hook",
            "roman": "I can't live without you",
            "meaning": "沒有你我活不下去 (第一段主歌高潮卡點)",
            "tip": "Verse 1 標誌句大聲齊唱！",
            "leadTimeSec": 2
        },
        {
            "id": "limh-2",
            "start": 43.29,
            "end": 45.13,
            "chant": "처럼",
            "type": "echo",
            "roman": "cheo-reom",
            "meaning": "如同 (句尾卡點)",
            "tip": "句尾呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "limh-3",
            "start": 45.13,
            "end": 47,
            "chant": "없어",
            "type": "echo",
            "roman": "eop-seo",
            "meaning": "無法抑制 (句尾卡點)",
            "tip": "句尾呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "limh-4",
            "start": 50.84,
            "end": 52.59,
            "chant": "질러",
            "type": "echo",
            "roman": "jil-leo",
            "meaning": "橫越 (句尾卡點)",
            "tip": "句尾呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "limh-5",
            "start": 52.59,
            "end": 54.47,
            "chant": "있어",
            "type": "echo",
            "roman": "is-seo",
            "meaning": "正在奔向你 (句尾卡點)",
            "tip": "句尾呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "limh-6",
            "start": 108.82,
            "end": 112.53,
            "chant": "for all time",
            "type": "shout",
            "roman": "for all time",
            "meaning": "直到永遠 (副歌前齊喊)",
            "tip": "副歌啟動前夕用力齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-7",
            "start": 116.28,
            "end": 119.45,
            "chant": "Give you all of the love in my heart",
            "type": "hook",
            "roman": "Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你 (副歌主題合唱)",
            "tip": "副歌標題句全場大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-8",
            "start": 123.83,
            "end": 126.96,
            "chant": "Give you all of the love in my heart",
            "type": "hook",
            "roman": "Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "主題句再合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-9",
            "start": 128.34,
            "end": 134.59,
            "chant": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "type": "shout",
            "roman": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你 (歡呼合唱)",
            "tip": "全場跟著旋律狂熱齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-10",
            "start": 135.85,
            "end": 142.48,
            "chant": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "type": "shout",
            "roman": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-11",
            "start": 143.14,
            "end": 145.02,
            "chant": "day and night",
            "type": "echo",
            "roman": "day and night",
            "meaning": "日日夜夜 (饒舌句尾卡點)",
            "tip": "饒舌段落精準卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "limh-12",
            "start": 146.4,
            "end": 147.48,
            "chant": "매일매일",
            "type": "echo",
            "roman": "maeil-maeil",
            "meaning": "每天每天",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "limh-13",
            "start": 150.94,
            "end": 152.57,
            "chant": "down bad?",
            "type": "hook",
            "roman": "down bad?",
            "meaning": "深陷其中？",
            "tip": "饒舌重音呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "limh-14",
            "start": 154.78,
            "end": 156.32,
            "chant": "Wooo!",
            "type": "scream",
            "roman": "Wooo!",
            "meaning": "全場尖叫歡呼！",
            "tip": "展現真心尖叫！",
            "leadTimeSec": 1
        },
        {
            "id": "limh-15",
            "start": 156.32,
            "end": 157.53,
            "chant": "into you",
            "type": "hook",
            "roman": "into you",
            "meaning": "為你著迷",
            "tip": "卡點接唱！",
            "leadTimeSec": 1
        },
        {
            "id": "limh-16",
            "start": 168.88,
            "end": 172.67,
            "chant": "for all time",
            "type": "shout",
            "roman": "for all time",
            "meaning": "直到永遠",
            "tip": "第二段副歌前大齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-17",
            "start": 176.39,
            "end": 179.18,
            "chant": "Give you all of the love in my heart",
            "type": "hook",
            "roman": "Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "全場合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-18",
            "start": 183.81,
            "end": 186.6,
            "chant": "Give you all of the love in my heart",
            "type": "hook",
            "roman": "Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "全場合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-19",
            "start": 188.31,
            "end": 194.57,
            "chant": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "type": "shout",
            "roman": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "狂熱合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-20",
            "start": 195.82,
            "end": 202.45,
            "chant": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "type": "shout",
            "roman": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "狂熱合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-21",
            "start": 214.59,
            "end": 217.97,
            "chant": "★ Wave Lightstick ★",
            "type": "hype",
            "roman": "Wave Lightstick",
            "meaning": "全場溫柔揮舞應援手燈",
            "tip": "像繁星般美麗，全場左右揮動手燈！",
            "leadTimeSec": 2
        },
        {
            "id": "limh-22",
            "start": 221.31,
            "end": 224.68,
            "chant": "Give you all of the love in my heart",
            "type": "hook",
            "roman": "Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你 (終曲大爆發)",
            "tip": "最後副歌全力大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-23",
            "start": 228.73,
            "end": 232.57,
            "chant": "Give you all of the love in my heart",
            "type": "hook",
            "roman": "Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "全力大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-24",
            "start": 233.48,
            "end": 239.95,
            "chant": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "type": "shout",
            "roman": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "全場高潮合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-25",
            "start": 240.87,
            "end": 247.21,
            "chant": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "type": "shout",
            "roman": "ah-ya-ya-ya-ya, ah-ya-ya Give you all of the love in my heart",
            "meaning": "把心中的愛全部都給你",
            "tip": "全場高潮合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "limh-26",
            "start": 247.21,
            "end": 252,
            "chant": "BABYMONSTER! MONSTIEZ 사랑해!",
            "type": "scream",
            "roman": "BABYMONSTER! MONSTIEZ sa-rang-hae!",
            "meaning": "寶貝怪獸我愛你！全場尖叫歡呼！",
            "tip": "歌曲圓滿結束全場狂歡尖叫！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - Really Like You (XShaIZs7J7M)
  'XShaIZs7J7M': {
    "songId": "XShaIZs7J7M",
    "title": "Really Like You",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [Really Like You] 應援法。L-O-V-E 拼讀齊喊、Really really like you 甜美大合唱與結尾 Okay okay 跳躍連擊！",
    "cues": [
        {
            "id": "rly-1",
            "start": 14.59,
            "end": 16.85,
            "chant": "call back, uh",
            "type": "echo",
            "roman": "call back, uh",
            "meaning": "快回電 (句尾卡點)",
            "tip": "句尾呼應！",
            "leadTimeSec": 1.5
        },
        {
            "id": "rly-2",
            "start": 16.85,
            "end": 19.31,
            "chant": "꽁했어",
            "type": "echo",
            "roman": "kkong-haet-seo",
            "meaning": "賭氣悶悶不樂",
            "tip": "接唱呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-3",
            "start": 24.27,
            "end": 26.44,
            "chant": "laptop",
            "type": "echo",
            "roman": "laptop",
            "meaning": "筆記型電腦 (句尾呼應)",
            "tip": "句尾卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-4",
            "start": 26.44,
            "end": 29.07,
            "chant": "take out",
            "type": "echo",
            "roman": "take out",
            "meaning": "外帶咖啡 (句尾呼應)",
            "tip": "句尾卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-5",
            "start": 29.07,
            "end": 31.41,
            "chant": "딩디기딩 like a 리기딩딩",
            "type": "shout",
            "roman": "ding-di-gi-ding like a ri-gi-ding-ding",
            "meaning": "輕快節奏齊唱",
            "tip": "歡樂齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "rly-6",
            "start": 31.41,
            "end": 34.12,
            "chant": "빙빙",
            "type": "hook",
            "roman": "bing-bing",
            "meaning": "轉來轉去",
            "tip": "重音接唱！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-7",
            "start": 34.41,
            "end": 38.25,
            "chant": "I'm sick",
            "type": "hook",
            "roman": "I'm sick",
            "meaning": "我心動得要命",
            "tip": "句尾重音齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-8",
            "start": 38.25,
            "end": 42,
            "chant": "You make a good day better too",
            "type": "shout",
            "roman": "You make a good day better too",
            "meaning": "你也讓美好的一天更加幸福",
            "tip": "大聲齊唱呼應！",
            "leadTimeSec": 1.5
        },
        {
            "id": "rly-9",
            "start": 51.5,
            "end": 53.07,
            "chant": "아마 모를걸",
            "type": "echo",
            "roman": "a-ma mo-reul-geol",
            "meaning": "你大概不知道吧 (副歌前暗號)",
            "tip": "副歌前接唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-10",
            "start": 53.07,
            "end": 55.45,
            "chant": "싶어",
            "type": "hook",
            "roman": "si-peo",
            "meaning": "好想對你說 (卡點)",
            "tip": "卡點接喊！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-11",
            "start": 55.45,
            "end": 58.12,
            "chant": "love you",
            "type": "hook",
            "roman": "love you",
            "meaning": "我愛你",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-12",
            "start": 59.96,
            "end": 62.85,
            "chant": "Really, really like you",
            "type": "shout",
            "roman": "Really, really like you",
            "meaning": "真的非常非常喜歡你 (主題齊唱)",
            "tip": "副歌核心主題大合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-13",
            "start": 62.85,
            "end": 65.23,
            "chant": "light",
            "type": "echo",
            "roman": "light",
            "meaning": "月光 (句尾卡點)",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-14",
            "start": 65.23,
            "end": 67.78,
            "chant": "highs",
            "type": "echo",
            "roman": "highs",
            "meaning": "攀登新高",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-15",
            "start": 69.69,
            "end": 72.82,
            "chant": "Really, really like you",
            "type": "shout",
            "roman": "Really, really like you",
            "meaning": "真的非常非常喜歡你",
            "tip": "全場合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-16",
            "start": 84.79,
            "end": 87.25,
            "chant": "L-O-V-E, L-O-V-E",
            "type": "name",
            "roman": "L-O-V-E, L-O-V-E",
            "meaning": "拼寫愛意 (全場大齊喊)",
            "tip": "Verse 2 開頭全場用力拼讀喊出！",
            "leadTimeSec": 1.5
        },
        {
            "id": "rly-17",
            "start": 111.61,
            "end": 113.2,
            "chant": "아마 모를걸",
            "type": "echo",
            "roman": "a-ma mo-reul-geol",
            "meaning": "你大概不知道吧",
            "tip": "副歌前接唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-18",
            "start": 113.53,
            "end": 115.82,
            "chant": "싶어",
            "type": "hook",
            "roman": "si-peo",
            "meaning": "好想說",
            "tip": "卡點接喊！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-19",
            "start": 115.82,
            "end": 118.53,
            "chant": "love you",
            "type": "hook",
            "roman": "love you",
            "meaning": "我愛你",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-20",
            "start": 120.45,
            "end": 123.46,
            "chant": "Really, really like you",
            "type": "shout",
            "roman": "Really, really like you",
            "meaning": "真的非常非常喜歡你",
            "tip": "合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-21",
            "start": 123.46,
            "end": 126,
            "chant": "light",
            "type": "echo",
            "roman": "light",
            "meaning": "月光",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-22",
            "start": 126,
            "end": 128.42,
            "chant": "highs",
            "type": "echo",
            "roman": "highs",
            "meaning": "新高點",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-23",
            "start": 130.42,
            "end": 133.13,
            "chant": "Really, really like you",
            "type": "shout",
            "roman": "Really, really like you",
            "meaning": "真的非常非常喜歡你",
            "tip": "合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-24",
            "start": 153.32,
            "end": 155.53,
            "chant": "싶어",
            "type": "hook",
            "roman": "si-peo",
            "meaning": "好想說",
            "tip": "接喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-25",
            "start": 155.53,
            "end": 158.49,
            "chant": "love you",
            "type": "hook",
            "roman": "love you",
            "meaning": "我愛你",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-26",
            "start": 160.08,
            "end": 163.08,
            "chant": "Really, really like you",
            "type": "shout",
            "roman": "Really, really like you",
            "meaning": "真的非常非常喜歡你",
            "tip": "合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-27",
            "start": 163.08,
            "end": 165.46,
            "chant": "light",
            "type": "echo",
            "roman": "light",
            "meaning": "月光",
            "tip": "接唱！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-28",
            "start": 165.46,
            "end": 168.13,
            "chant": "highs",
            "type": "echo",
            "roman": "highs",
            "meaning": "新高點",
            "tip": "接唱！",
            "leadTimeSec": 1
        },
        {
            "id": "rly-29",
            "start": 170.04,
            "end": 172.46,
            "chant": "Really, really like you",
            "type": "shout",
            "roman": "Really, really like you",
            "meaning": "真的非常非常喜歡你",
            "tip": "合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-30",
            "start": 173.59,
            "end": 176.13,
            "chant": "Okay, okay ... (Hey!)",
            "type": "hook",
            "roman": "Okay, okay ... (Hey!)",
            "meaning": "好吧好吧我認輸 (拍手齊喊 Hey)",
            "tip": "句尾伴隨跳躍用力喊 Hey！",
            "leadTimeSec": 1.5
        },
        {
            "id": "rly-31",
            "start": 176.13,
            "end": 178.55,
            "chant": "Okay, okay ... (Hey!)",
            "type": "hook",
            "roman": "Okay, okay ... (Hey!)",
            "meaning": "好吧好吧星星升起 (跳躍齊喊 Hey)",
            "tip": "用力喊 Hey！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-32",
            "start": 183.56,
            "end": 185.98,
            "chant": "Okay, okay ... (Hey!)",
            "type": "hook",
            "roman": "Okay, okay ... (Hey!)",
            "meaning": "好吧好吧對話氣泡 (跳躍齊喊 Hey)",
            "tip": "用力喊 Hey！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-33",
            "start": 190.02,
            "end": 192.82,
            "chant": "Really, really like you!",
            "type": "shout",
            "roman": "Really, really like you!",
            "meaning": "真的超級超級喜歡你！",
            "tip": "最後一句甜蜜大收尾！",
            "leadTimeSec": 1.2
        },
        {
            "id": "rly-34",
            "start": 192.82,
            "end": 197,
            "chant": "BABYMONSTER! MONSTIEZ!",
            "type": "scream",
            "roman": "BABYMONSTER! MONSTIEZ!",
            "meaning": "全場狂歡尖叫",
            "tip": "歌曲完美結束全場尖叫！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - BILLIONAIRE (Gz_yRl6703c)
  'Gz_yRl6703c': {
    "songId": "Gz_yRl6703c",
    "title": "BILLIONAIRE",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [BILLIONAIRE] 應援法。Baby I'mma monster 標誌齊喊、R-U-K-A 狂熱呼喊與 Bridge 億萬連擊！",
    "cues": [
        {
            "id": "bil-1",
            "start": 4.75,
            "end": 6.92,
            "chant": "Baby, I'mma monster",
            "type": "name",
            "roman": "Baby, I'mma monster",
            "meaning": "寶貝我是怪物 (標誌齊喊)",
            "tip": "前奏標誌句爆發齊喊！",
            "leadTimeSec": 2
        },
        {
            "id": "bil-2",
            "start": 15.64,
            "end": 17.64,
            "chant": "click",
            "type": "hook",
            "roman": "click",
            "meaning": "喀噠 (重音卡點)",
            "tip": "句中重音卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-3",
            "start": 17.64,
            "end": 19.98,
            "chant": "rich",
            "type": "hook",
            "roman": "rich",
            "meaning": "富有 (重音卡點)",
            "tip": "句中重音卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-4",
            "start": 22.94,
            "end": 24.98,
            "chant": "you (You, you, you)",
            "type": "echo",
            "roman": "you (You, you, you)",
            "meaning": "那是你的問題 (連續重音呼應)",
            "tip": "四連擊呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-5",
            "start": 25.82,
            "end": 28.61,
            "chant": "brag",
            "type": "echo",
            "roman": "brag",
            "meaning": "炫耀 (句尾卡點)",
            "tip": "句尾卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-6",
            "start": 28.61,
            "end": 30.7,
            "chant": "cash",
            "type": "echo",
            "roman": "cash",
            "meaning": "現金 (句尾卡點)",
            "tip": "句尾卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-7",
            "start": 38.47,
            "end": 41.17,
            "chant": "sky, sky",
            "type": "shout",
            "roman": "sky, sky",
            "meaning": "天空、天空 (副歌前齊喊)",
            "tip": "副歌啟動前夕用力齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "bil-8",
            "start": 46.84,
            "end": 50.22,
            "chant": "woah",
            "type": "hook",
            "roman": "woah",
            "meaning": "驚嘆聲",
            "tip": "副歌句尾爆發！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-9",
            "start": 50.22,
            "end": 53.8,
            "chant": "unfair",
            "type": "echo",
            "roman": "unfair",
            "meaning": "太不公平",
            "tip": "句尾呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-10",
            "start": 53.8,
            "end": 55.93,
            "chant": "compare",
            "type": "echo",
            "roman": "compare",
            "meaning": "無可比擬",
            "tip": "句尾呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-11",
            "start": 59.35,
            "end": 61.48,
            "chant": "billionaire",
            "type": "shout",
            "roman": "billionaire",
            "meaning": "億萬富翁 (標題齊唱)",
            "tip": "全場大合唱！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-12",
            "start": 68.15,
            "end": 70.99,
            "chant": "Pump it up, back it up, turn in up, R-U-K-A",
            "type": "name",
            "roman": "Pump it up, back it up, turn in up, R-U-K-A",
            "meaning": "RUKA 登場狂熱應援",
            "tip": "極速饒舌全場整齊高喊 R-U-K-A！",
            "leadTimeSec": 1.5
        },
        {
            "id": "bil-13",
            "start": 72.49,
            "end": 73.36,
            "chant": "deal it out",
            "type": "hook",
            "roman": "deal it out",
            "meaning": "發牌吧 (卡點重音)",
            "tip": "句尾重音卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-14",
            "start": 75.62,
            "end": 77.08,
            "chant": "who dat? Who dat? Who dat?",
            "type": "shout",
            "roman": "who dat? Who dat? Who dat?",
            "meaning": "那是誰？那是誰？",
            "tip": "三連擊重音齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-15",
            "start": 77.79,
            "end": 80.08,
            "chant": "life",
            "type": "hook",
            "roman": "life",
            "meaning": "人生成倍 (重音卡點)",
            "tip": "最後一拍重擊！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-16",
            "start": 80.99,
            "end": 83.37,
            "chant": "brag",
            "type": "echo",
            "roman": "brag",
            "meaning": "炫耀",
            "tip": "卡點接唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-17",
            "start": 83.37,
            "end": 85.42,
            "chant": "cash",
            "type": "echo",
            "roman": "cash",
            "meaning": "現金",
            "tip": "卡點接唱！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-18",
            "start": 96.09,
            "end": 98.47,
            "chant": "sky, sky",
            "type": "shout",
            "roman": "sky, sky",
            "meaning": "天空、天空",
            "tip": "大齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "bil-19",
            "start": 101.6,
            "end": 105.06,
            "chant": "woah",
            "type": "hook",
            "roman": "woah",
            "meaning": "驚嘆聲",
            "tip": "爆發！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-20",
            "start": 105.06,
            "end": 108.4,
            "chant": "unfair",
            "type": "echo",
            "roman": "unfair",
            "meaning": "不公平",
            "tip": "呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-21",
            "start": 108.4,
            "end": 110.94,
            "chant": "compare",
            "type": "echo",
            "roman": "compare",
            "meaning": "無可比擬",
            "tip": "呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-22",
            "start": 114.45,
            "end": 118.03,
            "chant": "billionaire",
            "type": "shout",
            "roman": "billionaire",
            "meaning": "億萬富翁",
            "tip": "合唱！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-23",
            "start": 119.95,
            "end": 123.41,
            "chant": "Billionaire, b-b-b-b-billionaire",
            "type": "shout",
            "roman": "Billionaire, b-b-b-b-billionaire",
            "meaning": "億萬富翁節奏大連打",
            "tip": "Bridge 狂暴大齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "bil-24",
            "start": 124.21,
            "end": 128.04,
            "chant": "BABYMONSTER got me feeling like a billionaire",
            "type": "name",
            "roman": "BABYMONSTER got me feeling like a billionaire",
            "meaning": "寶貝怪獸讓我感覺像個億萬富翁",
            "tip": "全場團名核心大齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "bil-25",
            "start": 129.17,
            "end": 132.63,
            "chant": "Billionaire, b-b-b-b-billionaire",
            "type": "shout",
            "roman": "Billionaire, b-b-b-b-billionaire",
            "meaning": "億萬富翁節奏大連打",
            "tip": "齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-26",
            "start": 133.42,
            "end": 137.3,
            "chant": "BABYMONSTER got me feeling like a billionaire",
            "type": "name",
            "roman": "BABYMONSTER got me feeling like a billionaire",
            "meaning": "寶貝怪獸讓我感覺像個億萬富翁",
            "tip": "全場大齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "bil-27",
            "start": 140.47,
            "end": 144.02,
            "chant": "woah",
            "type": "hook",
            "roman": "woah",
            "meaning": "驚嘆聲",
            "tip": "終曲爆發！",
            "leadTimeSec": 1.2
        },
        {
            "id": "bil-28",
            "start": 144.02,
            "end": 147.31,
            "chant": "unfair",
            "type": "echo",
            "roman": "unfair",
            "meaning": "不公平",
            "tip": "呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-29",
            "start": 147.31,
            "end": 149.77,
            "chant": "compare",
            "type": "echo",
            "roman": "compare",
            "meaning": "無可比擬",
            "tip": "呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-30",
            "start": 153.24,
            "end": 156.24,
            "chant": "billionaire!",
            "type": "shout",
            "roman": "billionaire!",
            "meaning": "億萬富翁！",
            "tip": "最後一句標題大齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "bil-31",
            "start": 156.24,
            "end": 160,
            "chant": "BABYMONSTER! MONSTIEZ!",
            "type": "scream",
            "roman": "BABYMONSTER! MONSTIEZ!",
            "meaning": "全場尖叫狂歡",
            "tip": "尾奏全場熱烈尖叫！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - Love, Maybe (q2KJumLIxsM)
  'q2KJumLIxsM': {
    "songId": "q2KJumLIxsM",
    "title": "Love, Maybe",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [Love, Maybe] 抒情應援法。副歌 This must be love, baby 全場合唱呼應，沉浸式手燈海洋！",
    "cues": [
        {
            "id": "love-maybe-1",
            "start": 47.8,
            "end": 52,
            "chant": "This must be love, baby",
            "type": "hook",
            "roman": "This must be love, baby",
            "meaning": "這肯定是愛吧，寶貝",
            "tip": "副歌第一句深情大合唱！",
            "leadTimeSec": 2
        },
        {
            "id": "love-maybe-2",
            "start": 52,
            "end": 54.91,
            "chant": "'Cause I've never felt quite this way",
            "type": "echo",
            "roman": "'Cause I've never felt quite this way",
            "meaning": "因為我從未有過這種感覺",
            "tip": "接唱呼應，揮舞應援棒",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-3",
            "start": 54.92,
            "end": 59,
            "chant": "Think this is love, baby",
            "type": "hook",
            "roman": "Think this is love, baby",
            "meaning": "我想這就是愛吧，寶貝",
            "tip": "深情呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-4",
            "start": 59,
            "end": 63.5,
            "chant": "Get weak when you callin' my name",
            "type": "echo",
            "roman": "Get weak when you callin' my name",
            "meaning": "當你呼喚我名字時我毫無抵抗力",
            "tip": "接唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-5",
            "start": 63.5,
            "end": 70,
            "chant": "This must be love, love, love",
            "type": "shout",
            "roman": "This must be love, love, love",
            "meaning": "這肯定是愛、愛、愛",
            "tip": "連續重音齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-6",
            "start": 70,
            "end": 74.5,
            "chant": "I think this is love, maybe?",
            "type": "hook",
            "roman": "I think this is love, maybe?",
            "meaning": "我想這或許就是愛吧？",
            "tip": "標題句齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-7",
            "start": 74.5,
            "end": 78.5,
            "chant": "'Cause I don't know what else to blame",
            "type": "echo",
            "roman": "'Cause I don't know what else to blame",
            "meaning": "因為我不知道還能歸咎於什麼",
            "tip": "副歌結尾合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-8",
            "start": 107.84,
            "end": 112,
            "chant": "This must be love, love, baby",
            "type": "hook",
            "roman": "This must be love, love, baby",
            "meaning": "這肯定是愛、愛，寶貝",
            "tip": "第二段副歌齊喊！",
            "leadTimeSec": 2
        },
        {
            "id": "love-maybe-9",
            "start": 112,
            "end": 114.23,
            "chant": "'Cause I've never felt quite this way",
            "type": "echo",
            "roman": "'Cause I've never felt quite this way",
            "meaning": "因為我從未有過這種感覺",
            "tip": "接唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-10",
            "start": 114.24,
            "end": 118,
            "chant": "Think this is love, baby",
            "type": "hook",
            "roman": "Think this is love, baby",
            "meaning": "我想這就是愛吧，寶貝",
            "tip": "接唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-11",
            "start": 118,
            "end": 122.5,
            "chant": "Get weak when you callin' my name",
            "type": "echo",
            "roman": "Get weak when you callin' my name",
            "meaning": "當你呼喚我名字時我毫無抵抗力",
            "tip": "接唱呼應",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-12",
            "start": 122.5,
            "end": 129.5,
            "chant": "This must be love, love, love",
            "type": "shout",
            "roman": "This must be love, love, love",
            "meaning": "這肯定是愛、愛、愛",
            "tip": "連續重音齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-13",
            "start": 129.5,
            "end": 134,
            "chant": "I think this is love, maybe?",
            "type": "hook",
            "roman": "I think this is love, maybe?",
            "meaning": "我想這或許就是愛吧？",
            "tip": "標題句齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-14",
            "start": 134,
            "end": 138.5,
            "chant": "'Cause I don't know what else to blame",
            "type": "echo",
            "roman": "'Cause I don't know what else to blame",
            "meaning": "因為我不知道還能歸咎於什麼",
            "tip": "合唱",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-15",
            "start": 169.5,
            "end": 174.5,
            "chant": "This must be love, love, love",
            "type": "shout",
            "roman": "This must be love, love, love",
            "meaning": "這肯定是愛、愛、愛",
            "tip": "終曲全場合唱！",
            "leadTimeSec": 2
        },
        {
            "id": "love-maybe-16",
            "start": 174.5,
            "end": 179.5,
            "chant": "Think this is love, maybe?",
            "type": "hook",
            "roman": "Think this is love, maybe?",
            "meaning": "我想這就是愛吧？",
            "tip": "最後標題句合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "love-maybe-17",
            "start": 180,
            "end": 187,
            "chant": "MONSTIEZ! BABYMONSTER!",
            "type": "scream",
            "roman": "MONSTIEZ! BABYMONSTER!",
            "meaning": "全場尖叫歡呼應援",
            "tip": "尾奏全場舉起應援棒熱烈尖叫！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - Woke Up In Tokyo (RUKA & ASA) (KcSwEoDRWTA)
  'KcSwEoDRWTA': {
    "songId": "KcSwEoDRWTA",
    "title": "Woke Up In Tokyo (RUKA & ASA)",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [Woke Up In Tokyo] 應援法。A-B-C-D-E-F-G 字母爆發齊喊、成員本名大齊唱、龜派氣功狂吼與終曲東京四連擊！",
    "cues": [
        {
            "id": "wuit-1",
            "start": 9.48,
            "end": 12.96,
            "chant": "A-B-C-D-E-F-G",
            "type": "shout",
            "roman": "A-B-C-D-E-F-G",
            "meaning": "字母開場大齊喊",
            "tip": "前奏靜音後全場大聲齊喊字母！",
            "leadTimeSec": 2
        },
        {
            "id": "wuit-2",
            "start": 16.46,
            "end": 18.21,
            "chant": "ding-dong",
            "type": "echo",
            "roman": "ding-dong",
            "meaning": "門鈴聲 (卡點重音)",
            "tip": "句中卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-3",
            "start": 18.68,
            "end": 20.03,
            "chant": "King Kong",
            "type": "hook",
            "roman": "King Kong",
            "meaning": "巨猿金剛 (卡點重音)",
            "tip": "句中卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-4",
            "start": 20.03,
            "end": 21.8,
            "chant": "ping-pong",
            "type": "echo",
            "roman": "ping-pong",
            "meaning": "乒乓彈跳",
            "tip": "句尾呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-5",
            "start": 23.59,
            "end": 25.45,
            "chant": "ding-dong",
            "type": "echo",
            "roman": "ding-dong",
            "meaning": "門鈴聲",
            "tip": "第二回呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-6",
            "start": 25.86,
            "end": 26.95,
            "chant": "King Kong",
            "type": "hook",
            "roman": "King Kong",
            "meaning": "金剛",
            "tip": "卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-7",
            "start": 30.7,
            "end": 32.31,
            "chant": "ni ī",
            "type": "hook",
            "roman": "ni ī",
            "meaning": "二 (日文數數呼應)",
            "tip": "跟著 Ruka 數數卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-8",
            "start": 32.31,
            "end": 34.1,
            "chant": "me-e-e",
            "type": "echo",
            "roman": "me-e-e",
            "meaning": "看著我",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-9",
            "start": 34.1,
            "end": 35.65,
            "chant": "key-ey-ey",
            "type": "echo",
            "roman": "key-ey-ey",
            "meaning": "關鍵節奏",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-10",
            "start": 35.65,
            "end": 37.48,
            "chant": "Ruka Kawai desu",
            "type": "name",
            "roman": "Ruka Kawai desu",
            "meaning": "我是河井瑠花 (成員自我介紹齊喊)",
            "tip": "全場大聲齊喊 Ruka 本名！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-11",
            "start": 43.07,
            "end": 44.86,
            "chant": "BABYMON world",
            "type": "name",
            "roman": "BABYMON world",
            "meaning": "寶貝怪獸的世界",
            "tip": "大齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-12",
            "start": 44.86,
            "end": 46.67,
            "chant": "ni ī",
            "type": "hook",
            "roman": "ni ī",
            "meaning": "二 (Asa 數數呼應)",
            "tip": "卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-13",
            "start": 46.67,
            "end": 48.44,
            "chant": "me-e-e",
            "type": "echo",
            "roman": "me-e-e",
            "meaning": "看著我",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-14",
            "start": 48.44,
            "end": 50,
            "chant": "key-ey-ey",
            "type": "echo",
            "roman": "key-ey-ey",
            "meaning": "關鍵節奏",
            "tip": "接唱呼應！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-15",
            "start": 50,
            "end": 52.04,
            "chant": "Asa Enami desu",
            "type": "name",
            "roman": "Asa Enami desu",
            "meaning": "我是榎並杏紗 (成員自我介紹齊喊)",
            "tip": "全場大聲齊喊 Asa 本名！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-16",
            "start": 52.51,
            "end": 58.87,
            "chant": "I woke up in Tokyo, Tokyo, Tokyo (I'm like, oh, oh, oh)",
            "type": "hook",
            "roman": "I woke up in Tokyo, Tokyo, Tokyo (I'm like, oh, oh, oh)",
            "meaning": "我在東京醒來 (副歌伴唱呼應)",
            "tip": "副歌全場高潮合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wuit-17",
            "start": 70.38,
            "end": 73.5,
            "chant": "Everybody rock and roll",
            "type": "shout",
            "roman": "Everybody rock and roll",
            "meaning": "所有人一起搖滾狂歡",
            "tip": "全場大跳躍大齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-18",
            "start": 81.11,
            "end": 82.19,
            "chant": "Yum, yum, yum",
            "type": "hook",
            "roman": "Yum, yum, yum",
            "meaning": "美味好吃 (極速卡點)",
            "tip": "極速饒舌精準卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-19",
            "start": 82.48,
            "end": 83.99,
            "chant": "run and gun",
            "type": "echo",
            "roman": "run and gun",
            "meaning": "快攻疾馳",
            "tip": "卡點接唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wuit-20",
            "start": 84.26,
            "end": 85.8,
            "chant": "get you some",
            "type": "echo",
            "roman": "get you some",
            "meaning": "來嚐點甜頭",
            "tip": "卡點接唱！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wuit-21",
            "start": 86.07,
            "end": 87.64,
            "chant": "one by one",
            "type": "hook",
            "roman": "one by one",
            "meaning": "一個接著一個擊破",
            "tip": "重音收尾！",
            "leadTimeSec": 0.8
        },
        {
            "id": "wuit-22",
            "start": 88.28,
            "end": 89.4,
            "chant": "Pew, pew",
            "type": "shout",
            "roman": "Pew, pew",
            "meaning": "雷射槍聲",
            "tip": "卡點齊喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-23",
            "start": 90.09,
            "end": 91.19,
            "chant": "Boo-hoo",
            "type": "shout",
            "roman": "Boo-hoo",
            "meaning": "哭哭吧",
            "tip": "卡點齊喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-24",
            "start": 91.86,
            "end": 92.99,
            "chant": "Goku",
            "type": "hook",
            "roman": "Goku",
            "meaning": "悟空變身！",
            "tip": "重音齊喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-25",
            "start": 92.99,
            "end": 95.48,
            "chant": "Kamehameha!",
            "type": "shout",
            "roman": "Kamehameha!",
            "meaning": "龜派氣功！(動漫大絕齊喊)",
            "tip": "雙手擺出龜派氣功全力狂吼！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wuit-26",
            "start": 102.63,
            "end": 109.3,
            "chant": "I woke up in Tokyo, Tokyo, Tokyo (I'm like, oh, oh, oh)",
            "type": "hook",
            "roman": "I woke up in Tokyo, Tokyo, Tokyo (I'm like, oh, oh, oh)",
            "meaning": "我在東京醒來 (副歌合唱)",
            "tip": "副歌合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "wuit-27",
            "start": 120.53,
            "end": 123.62,
            "chant": "Everybody rock and roll",
            "type": "shout",
            "roman": "Everybody rock and roll",
            "meaning": "所有人一起搖滾狂歡",
            "tip": "大齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-28",
            "start": 124.09,
            "end": 126.74,
            "chant": "I woke up in Tokyo",
            "type": "shout",
            "roman": "I woke up in Tokyo",
            "meaning": "我在東京醒來 (四連發終極呼應)",
            "tip": "終曲接連齊喊！",
            "leadTimeSec": 1.2
        },
        {
            "id": "wuit-29",
            "start": 127.69,
            "end": 130.15,
            "chant": "I woke up in Tokyo",
            "type": "shout",
            "roman": "I woke up in Tokyo",
            "meaning": "我在東京醒來",
            "tip": "齊喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-30",
            "start": 131.27,
            "end": 133.74,
            "chant": "I woke up in Tokyo",
            "type": "shout",
            "roman": "I woke up in Tokyo",
            "meaning": "我在東京醒來",
            "tip": "齊喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-31",
            "start": 134.83,
            "end": 138.11,
            "chant": "I woke up in Tokyo!",
            "type": "shout",
            "roman": "I woke up in Tokyo!",
            "meaning": "我在東京醒來！(最後收尾)",
            "tip": "最後一擊收尾大齊喊！",
            "leadTimeSec": 1
        },
        {
            "id": "wuit-32",
            "start": 138.11,
            "end": 142.23,
            "chant": "RUKA! ASA! BABYMONSTER!",
            "type": "scream",
            "roman": "RUKA! ASA! BABYMONSTER!",
            "meaning": "雙人小分隊尖叫喝采",
            "tip": "歌曲結束全場 MONSTIEZ 狂熱尖叫歡呼！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - Moon (LYbHsAsj6i8)
  'LYbHsAsj6i8': {
    "songId": "LYbHsAsj6i8",
    "title": "Moon",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [Moon] 應援法。I'm the moon 核心宣告、Zalabim zalabam zalaboom 月夜魔法連擊與全場合唱！",
    "cues": [
        {
            "id": "moon-1",
            "start": 6.98,
            "end": 8.44,
            "chant": "I'm the moon",
            "type": "shout",
            "roman": "I'm the moon",
            "meaning": "我是月亮 (核心宣告)",
            "tip": "歌曲開頭全場齊唱！",
            "leadTimeSec": 2
        },
        {
            "id": "moon-2",
            "start": 10.81,
            "end": 13.65,
            "chant": "Za-la-bim, za-la-bam, za-la-boom",
            "type": "hook",
            "roman": "Za-la-bim, za-la-bam, za-la-boom",
            "meaning": "月夜魔法咒語 (三連重音爆擊)",
            "tip": "跟隨節奏整齊重擊呼應！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-3",
            "start": 15.73,
            "end": 17.99,
            "chant": "I'm the moon, I'm the moon, I'm the moon",
            "type": "shout",
            "roman": "I'm the moon, I'm the moon, I'm the moon",
            "meaning": "我是月亮三連齊喊",
            "tip": "三連發大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-4",
            "start": 17.99,
            "end": 19.57,
            "chant": "thickens",
            "type": "echo",
            "roman": "thickens",
            "meaning": "濃霧漸起 (句尾卡點)",
            "tip": "句尾精準卡點！",
            "leadTimeSec": 1.2
        },
        {
            "id": "moon-5",
            "start": 19.57,
            "end": 20.9,
            "chant": "vision",
            "type": "echo",
            "roman": "vision",
            "meaning": "夜視視野",
            "tip": "句尾卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "moon-6",
            "start": 23.41,
            "end": 24.58,
            "chant": "digger",
            "type": "echo",
            "roman": "digger",
            "meaning": "掘墓者",
            "tip": "卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "moon-7",
            "start": 24.58,
            "end": 25.66,
            "chant": "figure",
            "type": "echo",
            "roman": "figure",
            "meaning": "想想看吧",
            "tip": "卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "moon-8",
            "start": 38.63,
            "end": 41.18,
            "chant": "까만 밤 빛이나 진짜가 나타나",
            "type": "shout",
            "roman": "kka-man bam bi-chi-na jin-jja-ga na-ta-na",
            "meaning": "漆黑夜裡發光，真正的王者降臨",
            "tip": "副歌前段落整齊大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-9",
            "start": 44.01,
            "end": 46.26,
            "chant": "거울아, 거울아 말해봐, 알잖아",
            "type": "hook",
            "roman": "geo-u-ra, geo-u-ra mal-hae-bwa, al-ja-na",
            "meaning": "魔鏡啊魔鏡，說說看吧你早就明瞭",
            "tip": "全場用力呼應！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-10",
            "start": 48.68,
            "end": 49.98,
            "chant": "I'm the moon",
            "type": "shout",
            "roman": "I'm the moon",
            "meaning": "我是月亮",
            "tip": "齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "moon-11",
            "start": 52.65,
            "end": 55.32,
            "chant": "Za-la-bim, za-la-bam, za-la-boom",
            "type": "hook",
            "roman": "Za-la-bim, za-la-bam, za-la-boom",
            "meaning": "月夜魔法咒語",
            "tip": "節奏連擊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-12",
            "start": 57.4,
            "end": 59.4,
            "chant": "I'm the moon, I'm the moon, I'm the moon",
            "type": "shout",
            "roman": "I'm the moon, I'm the moon, I'm the moon",
            "meaning": "我是月亮三連發",
            "tip": "齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-13",
            "start": 59.4,
            "end": 60.78,
            "chant": "I'm the moon",
            "type": "shout",
            "roman": "I'm the moon",
            "meaning": "我是月亮",
            "tip": "齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "moon-14",
            "start": 62.95,
            "end": 65.95,
            "chant": "Za-la-bim, za-la-bam, za-la-boom",
            "type": "hook",
            "roman": "Za-la-bim, za-la-bam, za-la-boom",
            "meaning": "月夜魔法咒語",
            "tip": "連擊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-15",
            "start": 67.87,
            "end": 70.41,
            "chant": "I'm the moon, I'm the moon, I'm the moon",
            "type": "shout",
            "roman": "I'm the moon, I'm the moon, I'm the moon",
            "meaning": "我是月亮三連發",
            "tip": "齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-16",
            "start": 70.41,
            "end": 74.67,
            "chant": "Charismatic, Energetic It's a habit",
            "type": "shout",
            "roman": "Charismatic, Energetic It's a habit",
            "meaning": "充滿魅力、活力滿點已成習慣 (饒舌齊喊)",
            "tip": "第二段 Verse 開頭極速大齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-17",
            "start": 96.15,
            "end": 98.44,
            "chant": "까만 밤 빛이나 진짜가 나타나",
            "type": "shout",
            "roman": "kka-man bam bi-chi-na jin-jja-ga na-ta-na",
            "meaning": "漆黑夜裡發光，真正的王者降臨",
            "tip": "大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-18",
            "start": 101.15,
            "end": 103.66,
            "chant": "거울아, 거울아 말해봐, 알잖아",
            "type": "hook",
            "roman": "geo-u-ra, geo-u-ra mal-hae-bwa, al-ja-na",
            "meaning": "魔鏡啊魔鏡，說說看吧你早就明瞭",
            "tip": "大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-19",
            "start": 106.07,
            "end": 107.53,
            "chant": "I'm the moon",
            "type": "shout",
            "roman": "I'm the moon",
            "meaning": "我是月亮",
            "tip": "副歌啟動齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "moon-20",
            "start": 110.04,
            "end": 112.5,
            "chant": "Za-la-bim, za-la-bam, za-la-boom",
            "type": "hook",
            "roman": "Za-la-bim, za-la-bam, za-la-boom",
            "meaning": "月夜魔法咒語",
            "tip": "連擊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-21",
            "start": 114.62,
            "end": 118,
            "chant": "I'm the moon, I'm the moon, I'm the moon",
            "type": "shout",
            "roman": "I'm the moon, I'm the moon, I'm the moon",
            "meaning": "我是月亮三連發",
            "tip": "齊唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-22",
            "start": 118,
            "end": 122,
            "chant": "Za-la-bim, za-la-bam, za-la-boom",
            "type": "hook",
            "roman": "Za-la-bim, za-la-bam, za-la-boom",
            "meaning": "月夜魔法咒語 (最後收尾重擊)",
            "tip": "重音收尾！",
            "leadTimeSec": 1.5
        },
        {
            "id": "moon-23",
            "start": 122,
            "end": 126,
            "chant": "BABYMONSTER! MONSTIEZ!",
            "type": "scream",
            "roman": "BABYMONSTER! MONSTIEZ!",
            "meaning": "全場尖叫歡呼",
            "tip": "歌曲高潮結束全場尖叫！",
            "leadTimeSec": 1.5
        }
    ]
},

  // BABYMONSTER - I Like It (9cS2wv6AfHk)
  '9cS2wv6AfHk': {
    "songId": "9cS2wv6AfHk",
    "title": "I Like It",
    "artist": "BABYMONSTER (베이비몬스터)",
    "groupName": "BABYMONSTER",
    "fandomName": "MONSTIEZ",
    "description": "YG 官方 Weverse [I Like It] 應援法。Hey boy 開場切入、Tell me now 齊喊與副歌 I like it when I'm next to you 終極狂歡！",
    "cues": [
        {
            "id": "ili-1",
            "start": 15,
            "end": 15.71,
            "chant": "Hey, boy",
            "type": "hook",
            "roman": "Hey, boy",
            "meaning": "嘿男孩 (歌曲開場切入)",
            "tip": "歌曲開頭第一個音符立刻大聲齊喊！",
            "leadTimeSec": 2
        },
        {
            "id": "ili-2",
            "start": 22.58,
            "end": 23.67,
            "chant": "Mayday",
            "type": "hook",
            "roman": "Mayday",
            "meaning": "五月天求救信號 (卡點重音)",
            "tip": "精準重音切入齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "ili-3",
            "start": 32.17,
            "end": 33.71,
            "chant": "미쳤나 봐",
            "type": "echo",
            "roman": "mi-chyeon-na bwa",
            "meaning": "我大概瘋了吧",
            "tip": "接唱呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "ili-4",
            "start": 39.42,
            "end": 41.08,
            "chant": "웃음이 나",
            "type": "echo",
            "roman": "u-seu-mi na",
            "meaning": "不自覺笑出來",
            "tip": "接唱呼應！",
            "leadTimeSec": 1.2
        },
        {
            "id": "ili-5",
            "start": 45.33,
            "end": 48.42,
            "chant": "Tell me now",
            "type": "shout",
            "roman": "Tell me now",
            "meaning": "現在就告訴我 (副歌前齊喊)",
            "tip": "副歌啟動段落用力齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "ili-6",
            "start": 57,
            "end": 59.5,
            "chant": "one more chance",
            "type": "hook",
            "roman": "one more chance",
            "meaning": "再給一次機會",
            "tip": "副歌前夕卡點重音！",
            "leadTimeSec": 1.2
        },
        {
            "id": "ili-7",
            "start": 76,
            "end": 80,
            "chant": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "type": "shout",
            "roman": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "meaning": "副歌輕快合音合唱",
            "tip": "全場跟隨旋律輕快合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "ili-8",
            "start": 80,
            "end": 84,
            "chant": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "type": "shout",
            "roman": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "meaning": "副歌輕快合音合唱",
            "tip": "全場揮舞手燈合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "ili-9",
            "start": 107.08,
            "end": 110,
            "chant": "Tell me now",
            "type": "shout",
            "roman": "Tell me now",
            "meaning": "現在就告訴我",
            "tip": "第二段副歌前大齊喊！",
            "leadTimeSec": 1.5
        },
        {
            "id": "ili-10",
            "start": 119.96,
            "end": 122.38,
            "chant": "one more chance",
            "type": "hook",
            "roman": "one more chance",
            "meaning": "再給一次機會",
            "tip": "副歌前重音切入！",
            "leadTimeSec": 1.2
        },
        {
            "id": "ili-11",
            "start": 136.42,
            "end": 140.04,
            "chant": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "type": "shout",
            "roman": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "meaning": "副歌合音合唱",
            "tip": "合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "ili-12",
            "start": 140.04,
            "end": 143.54,
            "chant": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "type": "shout",
            "roman": "Ooh-ooh-ooh, ooh-ooh-ooh Ooh-ooh-ooh, ooh, ooh, ooh",
            "meaning": "副歌合音合唱",
            "tip": "合唱！",
            "leadTimeSec": 1.2
        },
        {
            "id": "ili-13",
            "start": 147,
            "end": 149,
            "chant": "I li-li-like it, I li-li-like it",
            "type": "hook",
            "roman": "I li-li-like it, I li-li-like it",
            "meaning": "我非常喜歡 (終曲連環齊唱)",
            "tip": "全場大合唱！",
            "leadTimeSec": 1.5
        },
        {
            "id": "ili-14",
            "start": 149,
            "end": 151,
            "chant": "next to you",
            "type": "echo",
            "roman": "next to you",
            "meaning": "在你身邊 (卡點呼應)",
            "tip": "句尾卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "ili-15",
            "start": 151,
            "end": 153,
            "chant": "I li-li-like it, I li-li-like it",
            "type": "hook",
            "roman": "I li-li-like it, I li-li-like it",
            "meaning": "我非常喜歡",
            "tip": "齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "ili-16",
            "start": 153,
            "end": 155,
            "chant": "next to you",
            "type": "echo",
            "roman": "next to you",
            "meaning": "在你身邊",
            "tip": "卡點！",
            "leadTimeSec": 1
        },
        {
            "id": "ili-17",
            "start": 155,
            "end": 157,
            "chant": "I la-la-like it, I la-la-like it",
            "type": "hook",
            "roman": "I la-la-like it, I la-la-like it",
            "meaning": "我超喜歡",
            "tip": "齊唱！",
            "leadTimeSec": 1
        },
        {
            "id": "ili-18",
            "start": 157,
            "end": 159,
            "chant": "BABYMONSTER! MONSTIEZ!",
            "type": "scream",
            "roman": "BABYMONSTER! MONSTIEZ!",
            "meaning": "全場尖叫大合唱落幕",
            "tip": "結尾全場熱情尖叫！",
            "leadTimeSec": 1.5
        }
    ]
}
};

export const FANCHANT_ALIASES = {
  "xN3X_tl4zlQ": "naoGk-Zjc1s",
  "Zy1sU6ZOgjc": "eJCHKjt0MPw",
  "le_VX8l35XI": "1eQO8h7XU0Y",
  "o0oW3lPoOXM": "1eQO8h7XU0Y",
  "UPkyursCTfE": "x3eqqoZPV_E",
  "wBHKLsujSNA": "xn8mQqz2xmM",
  "aDcMNi_qQyM": "GsV1i0QHi-o",
  "KaM7ZxoGQuE": "GsV1i0QHi-o",
  "3yXQ3sN2Y6k": "wlHwjkYpSr0",
  "x4b_9YdhT8M": "wlHwjkYpSr0",
  "nZzM_X9L8eQ": "1kXLsrun51s",
  "4qL5eP8J0uY": "XShaIZs7J7M",
  "8sK7k0Y9c5A": "Gz_yRl6703c",
  "MN2RlOy8y8k": "Gz_yRl6703c",
  "uQ6J8b_P5iA": "q2KJumLIxsM",
  "7mY3yQ2X1fU": "KcSwEoDRWTA",
  "dY4yqM2Z1cQ": "LYbHsAsj6i8",
  "m7YXyj1RigA": "LYbHsAsj6i8",
  "kP7uX9Z8m1Q": "9cS2wv6AfHk",
  "ZhLZEvR6V5U": "9cS2wv6AfHk"
};

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
