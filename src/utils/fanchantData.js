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
