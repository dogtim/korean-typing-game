// Concerts & Multi-Angle Live Feeds Dataset
// Provides multi-angle YouTube fancams and official live recordings for BABYMONSTER concerts
// ALL VIDEOS IN THIS DATASET ARE FILTERED TO BE FULL-LENGTH / LONG-FORM (>= 10 MINUTES)

export const CONCERT_CATEGORY_DEFINITIONS = [
  { id: 'all_concert', label: 'ALL Concert', subTitle: '自由混搭三大巡演與音樂祭', color: '#f43f5e' },
  { id: 'hello_monsters', label: 'Hello Monsters', subTitle: '2025 首次世界巡演 (共 32 場)', color: '#a855f7' },
  { id: 'love_monsters', label: 'Love Monsters', subTitle: '2025–2026 Fan Concert 巡迴 (共 12 場)', color: '#ec4899' },
  { id: 'choom', label: 'Choom', subTitle: '2026–2027 第二輪世界巡演', color: '#f97316' },
  { id: 'others', label: '其他現場', subTitle: 'Summer Sonic 2026 音樂祭等', color: '#0284c7' }
];

export const CONCERT_PRESETS = [
  {
    id: 'all_concerts_mix',
    title: 'ALL CONCERT 跨世代巡迴終極混搭',
    subTitle: 'HELLO MONSTERS × LOVE MONSTERS × CHOOM',
    categoryTag: 'ALL CONCERT 自由混搭',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'K-Arena Yokohama × 台北小巨蛋 × KSPO Dome',
    date: '2025 - 2027 全巡演跨時代自由搭配',
    attendance: 'Global All Tours Mix',
    themeColor: '#f43f5e',
    tourCategory: 'all_concert',
    description: '【終極自由混搭模式】三大巡演長篇全場同時在三機位同台競演！所有收錄之視角皆嚴格排除短片與短影音，全數為 10 分鐘以上至 3 小時的高畫質全場長片。預設 CAM 1 為《Hello Monsters》(橫濱 4K 全場 2:13:49)、CAM 2 為《Love Monsters》(台北小巨蛋全場 1:45:17)、CAM 3 為《Choom》(首爾全場 1:40:55)。您可在下方任意將任一場演唱會指派給 CAM 1、CAM 2 或 CAM 3！',
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: 'HELLO MONSTERS IN JAPAN (K-Arena 橫濱 4K 全場 2:13:49)',
        tag: 'Hello Monsters',
        videoId: 'v0QTRX_fyPk',
        offset: 0,
        description: '2025 首次世界巡演日本橫濱站 4K 全場現場 (2:13:49)。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'LOVE MONSTERS 台北小巨蛋站全場 (1:45:17)',
        tag: 'Love Monsters',
        videoId: 'f9PBmq77faA',
        offset: 0,
        description: '2025–2026 亞洲 Fan Concert 巡迴台北小巨蛋全場 (1:45:17)。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: '260628 BABYMONSTER CHOOM WORLD TOUR IN SEOUL (Full 1:40:55)',
        tag: 'Choom 世巡',
        videoId: 'A3M7Nxt3_-Q',
        offset: 0,
        description: '2026–2027 第二輪世界巡演首爾站 1:40:55 全場長片。'
      }
    ],
    availableAngles: [
      // Hello Monsters (>= 10 mins)
      { id: 'all_hm_1', title: '[Hello Monsters] 橫濱 K-Arena 4K 全場 (2:13:49)', tag: 'Hello Monsters', videoId: 'v0QTRX_fyPk', author: 'Mokrij Vinograd', badge: 'HM 橫濱' },
      { id: 'all_hm_2', title: '[Hello Monsters] 神奈川 Day 2 全場 (1:53:53)', tag: 'Hello Monsters', videoId: '81u-SQQyS4o', author: 'Bình Nguyễn', badge: 'HM 神奈川' },
      { id: 'all_hm_taipei', title: '[Hello Monsters] 台北小巨蛋站 4K 全場 (1:46:41)', tag: 'Hello Monsters', videoId: '_7md4Zp8c4E', author: '黛比的追星日記', badge: 'HM 台北' },
      { id: 'all_hm_3', title: '[Hello Monsters] 神奈川完整安可 (27:35)', tag: 'Hello Monsters', videoId: 't6Zeru_VdSg', author: 'Yakisoba Studio', badge: 'HM 安可' },

      // Love Monsters (>= 10 mins)
      { id: 'all_lm_taipei', title: '[Love Monsters] 台北小巨蛋站全場 (1:45:17)', tag: 'Love Monsters', videoId: 'f9PBmq77faA', author: 'Alung12345', badge: 'LM 台北' },
      { id: 'all_lm_japan', title: '[Love Monsters] 日本 Fan Concert 全場 (2:04:47)', tag: 'Love Monsters', videoId: 'XSFajbcHCZA', author: 'Multiverso kpop', badge: 'LM 日本' },
      { id: 'all_lm_bkk', title: '[Love Monsters] 曼谷 Fan Concert 全場 (1:29:30)', tag: 'Love Monsters', videoId: 'ddnxQR2hWF8', author: 'ม๊ะ!!ดูกัน', badge: 'LM 曼谷' },
      { id: 'all_lm_taipei_p', title: '[Love Monsters] 台北場現場實錄 (42:23)', tag: 'Love Monsters', videoId: '7HobWcbWKjI', author: 'BABYMONSTER fan', badge: 'LM 台北精選' },
      { id: 'all_lm_solo', title: '[Love Monsters] Solo Stage 舞台特寫 4K Fancam (12:35)', tag: 'Love Monsters', videoId: 'cbYjGuqNrX4', author: 'K-PLANET', badge: 'LM 特寫' },

      // Choom (>= 10 mins)
      { id: 'all_ch_japan', title: '[Choom] 日本巡演全場長片 (2:55:30)', tag: 'Choom 世巡', videoId: 'PV606o7b4ik', author: 'れもんばーむ', badge: 'Choom 日本全場' },
      { id: 'all_ch_seoul_vod', title: '[Choom] 首爾 KSPO Dome 全場公演 (1:57:23)', tag: 'Choom 世巡', videoId: 'sODCh7HvDAs', author: 'Sweetener Events', badge: 'Choom 首爾公演' },
      { id: 'all_ch_manila_1', title: '[Choom] 馬尼拉站全場 (1:53:01)', tag: 'Choom 世巡', videoId: 'BN61wzbvI7M', author: '_rvnshlby', badge: 'Choom 馬尼拉' },
      { id: 'all_ch_seoul_1', title: '[Choom] 260628 首爾 KSPO Dome 全場 (1:40:55)', tag: 'Choom 世巡', videoId: 'A3M7Nxt3_-Q', author: '키코', badge: 'Choom 首爾' },
      { id: 'all_ch_manila_2', title: '[Choom] 馬尼拉站全場第二視角 (1:39:01)', tag: 'Choom 世巡', videoId: 'nQCoyE-fK2s', author: 'Cha', badge: 'Choom 馬尼拉2' },
      { id: 'all_ch_seoul_vlog', title: '[Choom] 首爾站沉浸式全場直擊 (1:26:29)', tag: 'Choom 世巡', videoId: 'Dr-8WJLQquU', author: '이번 역은 아현', badge: 'Choom 首爾直擊' },
      { id: 'all_ch_manila_talk', title: '[Choom] 馬尼拉全場 Talk+安可 (1:09:31)', tag: 'Choom 世巡', videoId: 'TG3t--k_7kw', author: 'Sheanne Palma', badge: 'Choom Talk安可' },
      { id: 'all_ch_osaka_full', title: '[Choom] 大阪京瓷巨蛋全場 (51:18)', tag: 'Choom 巨蛋', videoId: 'nzPPN62FHnQ', author: 'AdarrCP4', badge: 'Choom 京瓷巨蛋' },
      { id: 'all_ch_seoul_yg', title: '[Choom] ★YG 官方首爾巡演紀實 (27:08)', tag: 'Choom 官方', videoId: 'U_jAcFKeY_c', author: 'BABYMONSTER Official', badge: 'YG 首爾幕後' },
      { id: 'all_ch_japan_yg', title: '[Choom] ★YG 官方日本巡演實錄 (20:01)', tag: 'Choom 官方', videoId: 'UJjvmfRc51c', author: 'BABYMONSTER Official', badge: 'YG 日本幕後' },
      { id: 'all_ch_osaka_d1_vip', title: '[Choom] 京瓷巨蛋搖滾區現場 (15:07)', tag: 'Choom 巨蛋', videoId: '39J8a2OgRGQ', author: 'babymonster Haram', badge: 'Choom 巨蛋搖滾' },
      { id: 'all_ch_osaka_d2', title: '[Choom] 京瓷巨蛋 Day 2 現場 (14:28)', tag: 'Choom 巨蛋', videoId: '6QnZyKUFAoU', author: 'MONSTIEZ2203', badge: 'Choom 巨蛋D2' },
      { id: 'all_ch_osaka_d1', title: '[Choom] 京瓷巨蛋 Day 1 現場 4K (13:53)', tag: 'Choom 巨蛋', videoId: 'je7aZ-pGcDk', author: 'SaDru', badge: 'Choom 巨蛋D1' },

      // Summer Sonic (>= 10 mins)
      { id: 'all_ss_1', title: '[Summer Sonic] 東京海洋球場全景 (32:53)', tag: '音樂祭', videoId: '9Y-95rgsDDY', author: 'Summer Live', badge: 'SS 全景' },
      { id: 'all_ss_2', title: '[Summer Sonic] WE GO UP 現場樂隊舞台全場 (44:12)', tag: '音樂祭', videoId: 'xJuXrgbx-8I', author: 'Festival Cam', badge: 'SS 樂團' },
      { id: 'all_ss_3', title: '[Summer Sonic] 東京海洋球場 45分鐘超清全景 (45:11)', tag: '音樂祭', videoId: '_zV0QTAHd5I', author: 'Festival Fan', badge: 'SS 45m全景' },
      { id: 'all_ss_4', title: '[Summer Sonic] 東京站 44分鐘完整演出 (44:33)', tag: '音樂祭', videoId: 'wSj_O5v5aMo', author: 'Keep Going', badge: 'SS 完整演出' }
    ]
  },
  {
    id: 'babymonster_choom_seoul_manila_2026',
    title: '2026-27 BABYMONSTER WORLD TOUR [춤 (CHOOM)]',
    subTitle: 'SEOUL KSPO DOME & MANILA (首爾 / 馬尼拉 全場長片)',
    categoryTag: 'CHOOM 巡演 2026',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'KSPO Dome, Seoul / Manila, Philippines',
    date: '2026.06.26 - 2026.09.05',
    attendance: 'World Tour Full Show',
    themeColor: '#f97316',
    tourCategory: 'choom',
    description: 'CHOOM 世界巡演全場長片（全部大於 10 分鐘）：CAM 1 首爾 260628 全場 (1:40:55)、CAM 2 馬尼拉 2026.09.05 全場 (1:53:01)、CAM 3 日本巡演近 3 小時超長篇 (2:55:30) 或首爾站 Solo 舞台 4K 精選 (12:35)。所有影片均可多視角同步播放與獨立切換。',
    songs: [
      { id: 'choom_opening', title: '開場 / 全場播放', tag: '從頭開始' },
      { id: 'rora_havana', title: 'Rora – Havana', tag: 'Solo' },
      { id: 'asa_temple', title: 'Asa – Temple', tag: 'Solo' },
      { id: 'pharita_super_bass', title: 'Pharita – Super Bass', tag: 'Solo' },
      { id: 'chiquita_worth_it', title: 'Chiquita – Worth It', tag: 'Solo' },
      { id: 'ratatata', title: 'RATATATA', tag: 'Solo' },
      { id: 'ahyeon_problem', title: 'Ahyeon – Problem', tag: 'Solo' }
    ],
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: '260628 BABYMONSTER CHOOM 2026-27 WORLD TOUR IN SEOUL (Full 1:40:55)',
        tag: '首爾全場 1:40:55',
        videoId: 'A3M7Nxt3_-Q',
        offset: 0,
        songCues: { choom_opening: 0 },
        description: '首爾 KSPO Dome 巡演啟航站全場錄影。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'BABYMONSTER CHOOM 2026 WORLD TOUR IN MANILA - September 05, 2026 (Full 1:53:01)',
        tag: '馬尼拉全場 1:53:01',
        videoId: 'BN61wzbvI7M',
        offset: 0,
        songCues: { choom_opening: 0 },
        description: '馬尼拉站全場錄影。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: 'BABYMONSTER [CHOOM] WORLDTOUR 2026-27 IN JAPAN (Full 2:55:30)',
        tag: '日本巡演 2:55:30',
        videoId: 'PV606o7b4ik',
        offset: 0,
        songCues: { choom_opening: 0 },
        description: '日本站全場近 3 小時超長篇舞台巡禮。'
      }
    ],
    availableAngles: [
      { id: 'choom_japan_full', title: 'BABYMONSTER [CHOOM] WORLDTOUR 2026-27 IN JAPAN (Full 2:55:30)', tag: '日本全場', videoId: 'PV606o7b4ik', author: 'れもんばーむ', badge: 'CAM 3', songCues: { choom_opening: 0 } },
      { id: 'choom_seoul_vod', title: '[SE] BABYMONSTER: WORLD TOUR [춤 (CHOOM)] in Seoul (Full 1:57:23)', tag: '首爾全場', videoId: 'sODCh7HvDAs', author: 'Sweetener Events', badge: '首爾公演', songCues: { choom_opening: 0 } },
      { id: 'choom_full_manila', title: 'BABYMONSTER CHOOM 2026 WORLD TOUR IN MANILA (Full 1:53:01)', tag: '馬尼拉全場', videoId: 'BN61wzbvI7M', author: '_rvnshlby', badge: 'CAM 2', songCues: { choom_opening: 0 } },
      { id: 'choom_full_seoul', title: '260628 BABYMONSTER CHOOM WORLD TOUR IN SEOUL (Full 1:40:55)', tag: '首爾全場', videoId: 'A3M7Nxt3_-Q', author: '키코', badge: 'CAM 1', songCues: { choom_opening: 0 } },
      { id: 'choom_manila_2', title: 'BABYMONSTER WORLD TOUR - CHOOM - MANILA 2026 (Full 1:39:01)', tag: '馬尼拉全場2', videoId: 'nQCoyE-fK2s', author: 'Cha', badge: '馬尼拉2', songCues: { choom_opening: 0 } },
      { id: 'choom_seoul_vlog', title: '[몬스티즈 브이로그] 2026-27 WORLD TOUR CHOOM IN SEOUL (1:26:29)', tag: '首爾沉浸直擊', videoId: 'Dr-8WJLQquU', author: '이번 역은 아현', badge: '首爾直擊', songCues: { choom_opening: 0 } },
      { id: 'choom_manila_talk', title: 'BABYMONSTER CHOOM IN MANILA | Raw Concert + Talk & Encore (1:09:31)', tag: '馬尼拉全場+Talk', videoId: 'TG3t--k_7kw', author: 'Sheanne Palma', badge: 'Talk+安可', songCues: { choom_opening: 0 } },
      { id: 'choom_osaka_full', title: '2nd WORLD TOUR CHOOM LIVE AT KYOCERA DOME in OSAKA (51:18)', tag: '大阪巨蛋全場', videoId: 'nzPPN62FHnQ', author: 'AdarrCP4', badge: '京瓷巨蛋', songCues: { choom_opening: 0 } },
      { id: 'choom_seoul_yg', title: '★YG 官方 BABYMONSTER - WORLD TOUR [춤 (CHOOM)] BEHIND in SEOUL (27:08)', tag: 'YG 官方首爾', videoId: 'U_jAcFKeY_c', author: 'BABYMONSTER', badge: '官方首爾', songCues: { choom_opening: 0 } },
      { id: 'choom_japan_yg', title: '★YG 官方 BABYMONSTER - WORLD TOUR [춤 (CHOOM)] BEHIND in JAPAN #1 (20:01)', tag: 'YG 官方日本', videoId: 'UJjvmfRc51c', author: 'BABYMONSTER', badge: '官方日本', songCues: { choom_opening: 0 } },
      { id: 'choom_solo_comp', title: 'Solo Stage 솔로무대 모음 4K Fancam (CHOOM 260626, 12:35)', tag: 'Solo 舞台 4K', videoId: 'cbYjGuqNrX4', author: 'K-PLANET', badge: 'Solo精選', songCues: { choom_opening: 0, rora_havana: 0, asa_temple: 138, pharita_super_bass: 247, chiquita_worth_it: 376, ratatata: 495, ahyeon_problem: 606 } }
    ]
  },
  {
    id: 'babymonster_kyocera_dome_osaka_2026',
    title: '2026-27 BABYMONSTER WORLD TOUR [CHOOM] IN JAPAN',
    subTitle: 'KYOCERA DOME OSAKA (大阪京瓷巨蛋 9萬人巡演全場長片)',
    categoryTag: '巨蛋巡演 2026',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'Kyocera Dome Osaka, Japan (京瓷大阪巨蛋)',
    date: '2026.09.22 - 2026.09.23',
    attendance: '90,000 Fans (2 Days Sold-out)',
    themeColor: '#e11d48',
    tourCategory: 'choom',
    description: 'BABYMONSTER 首次巨蛋公演！震撼 9 萬名現場觀眾的大阪巨蛋全場特輯（全數為 10 分鐘以上至近 3 小時高畫質長片，已剔除所有短片）。CAM 1 為日本巡演超長篇 (2:55:30)、CAM 2 為大阪巨蛋 51 分鐘現場長片、CAM 3 為京瓷巨蛋 Day 1 現場 4K (13:53)。',
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: 'BABYMONSTER [CHOOM] WORLDTOUR 2026-27 IN JAPAN (Full 2:55:30)',
        tag: '日本巡演超長篇',
        videoId: 'PV606o7b4ik',
        offset: 0,
        description: '日本站全場近 3 小時超長篇舞台巡禮。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: '2nd WORLD TOUR CHOOM LIVE AT KYOCERA DOME in OSAKA 2026 (51:18)',
        tag: '京瓷巨蛋 51分鐘全場',
        videoId: 'nzPPN62FHnQ',
        offset: 0,
        description: '大阪京瓷巨蛋 51 分鐘長片視角，沉浸感受 4 萬 5 千人紅海震撼氛圍。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: 'BABYMONSTER live in Osaka at Kyocera Dome 2026, Night 1 (13:53)',
        tag: '京瓷巨蛋 Day 1 現場',
        videoId: 'je7aZ-pGcDk',
        offset: 0,
        description: '京瓷巨蛋首日現場直擊 4K 演出。'
      }
    ],
    availableAngles: [
      { id: 'kyd_japan_full', title: 'BABYMONSTER [CHOOM] WORLDTOUR IN JAPAN (2:55:30)', tag: '日本全場', videoId: 'PV606o7b4ik', author: 'れもんばーむ', badge: 'CAM 1' },
      { id: 'kyd_osaka_full', title: 'CHOOM LIVE AT KYOCERA DOME in OSAKA 2026 (51:18)', tag: '巨蛋全場', videoId: 'nzPPN62FHnQ', author: 'AdarrCP4', badge: 'CAM 2' },
      { id: 'kyd_japan_yg', title: '★YG 官方 BABYMONSTER - WORLD TOUR [춤 (CHOOM)] BEHIND in JAPAN #1 (20:01)', tag: 'YG 官方日本', videoId: 'UJjvmfRc51c', author: 'BABYMONSTER', badge: '官方日本' },
      { id: 'kyd_osaka_vip', title: 'CHOOM 2026-27 IN OSAKA AT KYOCERA DOME DAY 1 (15:07)', tag: '巨蛋搖滾區', videoId: '39J8a2OgRGQ', author: 'babymonster Haram', badge: '巨蛋搖滾' },
      { id: 'kyd_osaka_d2', title: 'BABY MONSTER IN OSAKA, JAPAN (DAY 2) KYOCERA DOME (14:28)', tag: '巨蛋 Day 2', videoId: '6QnZyKUFAoU', author: 'MONSTIEZ2203', badge: '巨蛋 Day 2' },
      { id: 'kyd_osaka_d1', title: 'BABYMONSTER live in Osaka at Kyocera Dome 2026 Night 1 (13:53)', tag: '巨蛋 Day 1', videoId: 'je7aZ-pGcDk', author: 'SaDru', badge: 'CAM 3' }
    ]
  },
  {
    id: 'babymonster_hello_monsters_k_arena_2025',
    title: '1st WORLD TOUR [HELLO MONSTERS] IN JAPAN & TAIPEI',
    subTitle: 'K-ARENA YOKOHAMA & TAIPEI ARENA (橫濱 / 台北 4K 全場長片)',
    categoryTag: 'HELLO MONSTERS 2025',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'K-Arena Yokohama, Kanagawa, Japan / 台北小巨蛋',
    date: '2025.04.13 - 2025.06.28',
    attendance: 'Arena World Tour (Japan & Taipei)',
    themeColor: '#a855f7',
    tourCategory: 'hello_monsters',
    description: 'HELLO MONSTERS 全場長片（全部大於 10 分鐘）：CAM 1 橫濱 K-Arena 4K 全場 (2:13:49)、CAM 2 神奈川 Day 2 全場 (1:53:53)、CAM 3 台北小巨蛋站 4K 全場 (1:46:41)。歌單涵蓋 DRIP (Remix)、BATTER UP、CLIK CLAK、LIKE THAT、SHEESH、成員 Solo、BILLIONAIRE、FOREVER、Love In My Heart 及完整安可。',
    songs: [
      { id: 'hm_opening', title: '開場 / 全場播放', tag: '從頭開始' }
    ],
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: 'BABYMONSTER 1st WORLD TOUR *HELLO MONSTERS* IN JAPAN ~2025.04.13 K-ARENA YOKOHAMA~ [4K] (2:13:49)',
        tag: '橫濱全場 4K 2:13:49',
        videoId: 'v0QTRX_fyPk',
        offset: 0,
        songCues: { hm_opening: 0 },
        description: '橫濱 K-Arena 4K 全場錄影，含安可與成員 Solo 角度加映。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: '【Day2】BABYMONSTER 「HELLO MONSTERS」 ワールドツアー IN 神奈川 Full Video (1:53:53)',
        tag: '神奈川 Day 2 全場 1:53:53',
        videoId: '81u-SQQyS4o',
        offset: 0,
        songCues: { hm_opening: 0 },
        description: '神奈川 Day 2 全場錄影。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: '[4K] 2025 BABYMONSTER 1ST WORLD TOUR 《HELLO MONSTERS》 IN TAIPEI | Full concert (1:46:41)',
        tag: '台北站 4K 全場 1:46:41',
        videoId: '_7md4Zp8c4E',
        offset: 0,
        songCues: { hm_opening: 0 },
        description: '台北小巨蛋站 4K 超高清全場演唱會。'
      }
    ],
    availableAngles: [
      { id: 'hm_karena_full', title: 'HELLO MONSTERS IN JAPAN 2025.04.13 K-ARENA YOKOHAMA [4K] (2:13:49)', tag: '橫濱全場 4K', videoId: 'v0QTRX_fyPk', author: 'Mokrij Vinograd', badge: 'CAM 1', songCues: { hm_opening: 0 } },
      { id: 'hm_kanagawa_d2', title: '【Day2】HELLO MONSTERS IN 神奈川 Full Video (1:53:53)', tag: '神奈川 Day 2 全場', videoId: '81u-SQQyS4o', author: 'Bình Nguyễn', badge: 'CAM 2', songCues: { hm_opening: 0 } },
      { id: 'hm_taipei_full', title: '[4K] 2025 HELLO MONSTERS IN TAIPEI | Full concert (1:46:41)', tag: '台北站 4K 全場', videoId: '_7md4Zp8c4E', author: '黛比的追星日記', badge: 'CAM 3', songCues: { hm_opening: 0 } },
      { id: 'hm_kanagawa_encore', title: "'FULL ENCORE' HELLO MONSTER WORLD TOUR KANAGAWA (27:35)", tag: '完整安可', videoId: 't6Zeru_VdSg', author: 'Yakisoba Studio', badge: '安可長片', songCues: { hm_opening: 0 } }
    ]
  },
  {
    id: 'babymonster_love_monsters_fan_concert',
    title: '2025–2026 BABYMONSTER FAN CONCERT [LOVE MONSTERS]',
    subTitle: 'TAIPEI, TOKYO & BANGKOK (台北 / 日本 / 曼谷 全場巡演長片)',
    categoryTag: 'LOVE MONSTERS 巡迴',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: '台北小巨蛋 (Taipei Arena) / LaLa arena TOKYO-BAY / IMPACT Arena Bangkok',
    date: '2025.11.15 - 2026.01.03',
    attendance: 'Fan Concert Tour (共 12 場)',
    themeColor: '#ec4899',
    tourCategory: 'love_monsters',
    description: 'BABYMONSTER 首次亞洲 Fan Concert 巡迴《LOVE MONSTERS》全場長片（全部大於 10 分鐘，已剔除短片與預告）：CAM 1 台北小巨蛋站全場 (1:45:17)、CAM 2 日本 Fan Concert 全場 (2:04:47)、CAM 3 曼谷站全場 (1:29:30) 或 Solo 舞台精選 (12:35)。',
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: 'BABYMONSTER "LOVE MONSTERS" ASIA FAN CONCERT 台北站 (Full 1:45:17)',
        tag: '台北站全場 1:45:17',
        videoId: 'f9PBmq77faA',
        offset: 0,
        description: '台北小巨蛋站 1 小時 45 分鐘全開麥全場現場。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'BABYMONSTER LOVE MONSTERS JAPAN FAN CONCERT (Full 2:04:47)',
        tag: '日本站全場 2:04:47',
        videoId: 'XSFajbcHCZA',
        offset: 0,
        description: '日本站 2 小時 04 分鐘全開麥完整公演。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: 'BABYMONSTER LOVE MONSTERS ASIA FAN CONCERT IN BANGKOK (Full 1:29:30)',
        tag: '曼谷站全場 1:29:30',
        videoId: 'ddnxQR2hWF8',
        offset: 0,
        description: '曼谷 IMPACT Arena 站 1 小時 29 分鐘全場現場。'
      }
    ],
    availableAngles: [
      { id: 'lm_japan_full', title: 'BABYMONSTER LOVE MONSTERS JAPAN FAN CONCERT (Full 2:04:47)', tag: '日本站全場', videoId: 'XSFajbcHCZA', author: 'Multiverso kpop', badge: 'CAM 2' },
      { id: 'lm_taipei_full', title: 'BABYMONSTER "LOVE MONSTERS" 台北站 (Full 1:45:17)', tag: '台北站全場', videoId: 'f9PBmq77faA', author: 'Alung12345', badge: 'CAM 1' },
      { id: 'lm_bkk_full', title: 'BABYMONSTER LOVE MONSTERS IN BANGKOK (Full 1:29:30)', tag: '曼谷站全場', videoId: 'ddnxQR2hWF8', author: 'ม๊ะ!!ดูกัน', badge: 'CAM 3' },
      { id: 'lm_taipei_42m', title: 'BABYMONSTER "LOVE MONSTERS" In Taipei (42:23)', tag: '台北場現場', videoId: '7HobWcbWKjI', author: 'BABYMONSTER fan', badge: '台北精選' },
      { id: 'lm_solo_comp', title: 'Solo Stage 舞台特寫 4K Fancam (12:35)', tag: '舞台特寫', videoId: 'cbYjGuqNrX4', author: 'K-PLANET', badge: 'Solo特寫' }
    ]
  },
  {
    id: 'babymonster_summer_sonic_2026',
    title: 'BABYMONSTER AT SUMMER SONIC 2026',
    subTitle: 'TOKYO MARINE STAGE (ZOZO MARINE STADIUM - 44分鐘完整演出)',
    categoryTag: '夏日音樂祭 2026',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'ZOZO Marine Stadium, Tokyo, Japan (Marine Stage)',
    date: '2026.08.14',
    attendance: '35,000+ Fans (Marine Stage Headline)',
    themeColor: '#0284c7',
    tourCategory: 'others',
    description: 'BABYMONSTER 震撼日本指標性音樂祭 SUMMER SONIC 2026！在千葉海洋球場（ZOZO Marine Stadium）頂著酷暑盛夏帶來的全開麥狂潮，現場樂團編排炸裂三萬五千名樂迷。所有收錄影片皆為 30 至 45 分鐘的完整演出長片，無短片。',
    
    // Song-Centric Setlist for Quick Multi-Cam Seek
    // Each song maps available video IDs to their calibrated start offsets
    songs: {
      intro_we_go_up: {
        title: 'WE GO UP',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 0 },
          { videoId: 'xJuXrgbx-8I', offset: 0 },
          { videoId: '_zV0QTAHd5I', offset: 0 },
          { videoId: 'WuelifqxMLs', offset: 0 },
          { videoId: 'wSj_O5v5aMo', offset: 0 }
        ]
      },
      choom: {
        title: 'CHOOM',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 180 },
          { videoId: 'xJuXrgbx-8I', offset: 180 },
          { videoId: '_zV0QTAHd5I', offset: 253 },
          { videoId: 'WuelifqxMLs', offset: 253 },
          { videoId: 'wSj_O5v5aMo', offset: 245 }
        ]
      },
      moon: {
        title: 'MOON',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 360 },
          { videoId: 'xJuXrgbx-8I', offset: 360 },
          { videoId: '_zV0QTAHd5I', offset: 515 },
          { videoId: 'WuelifqxMLs', offset: 515 },
          { videoId: 'wSj_O5v5aMo', offset: 505 }
        ]
      },
      drip: {
        title: 'DRIP',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 524 },
          { videoId: 'xJuXrgbx-8I', offset: 679 },
          { videoId: 'WuelifqxMLs', offset: 679 },
          { videoId: 'wSj_O5v5aMo', offset: 663 },
          { videoId: '_zV0QTAHd5I', offset: 674 }
        ]
      },
      forever: {
        title: 'FOREVER',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 700 },
          { videoId: 'xJuXrgbx-8I', offset: 700 },
          { videoId: '_zV0QTAHd5I', offset: 773 },
          { videoId: 'WuelifqxMLs', offset: 773 },
          { videoId: 'wSj_O5v5aMo', offset: 760 }
        ]
      },
      really_like_you: {
        title: 'Really Like You',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 900 },
          { videoId: 'xJuXrgbx-8I', offset: 900 },
          { videoId: '_zV0QTAHd5I', offset: 500 },
          { videoId: 'WuelifqxMLs', offset: 960 },
          { videoId: 'wSj_O5v5aMo', offset: 950 }
        ]
      },
      i_like_it: {
        title: 'I LIKE IT',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 1100 },
          { videoId: 'xJuXrgbx-8I', offset: 1100 },
          { videoId: 'WuelifqxMLs', offset: 400 },
          { videoId: '_zV0QTAHd5I', offset: 1160 },
          { videoId: 'wSj_O5v5aMo', offset: 1150 }
        ]
      },
      hot_sauce: {
        title: 'HOT SAUCE',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 1300 },
          { videoId: 'xJuXrgbx-8I', offset: 1300 },
          { videoId: '_zV0QTAHd5I', offset: 700 },
          { videoId: 'WuelifqxMLs', offset: 1360 },
          { videoId: 'wSj_O5v5aMo', offset: 1350 }
        ]
      },
      sugar_honey_ice_tea: {
        title: 'SUGAR HONEY ICE TEA',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 1450 },
          { videoId: 'xJuXrgbx-8I', offset: 1450 },
          { videoId: 'WuelifqxMLs', offset: 900 },
          { videoId: '_zV0QTAHd5I', offset: 1510 },
          { videoId: 'wSj_O5v5aMo', offset: 1500 }
        ]
      },
      batter_up_remix: {
        title: 'BATTER UP',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 1650 },
          { videoId: 'xJuXrgbx-8I', offset: 1650 },
          { videoId: '_zV0QTAHd5I', offset: 1200 },
          { videoId: 'WuelifqxMLs', offset: 1710 },
          { videoId: 'wSj_O5v5aMo', offset: 1700 }
        ]
      },
      sheesh_remix: {
        title: 'SHEESH',
        availableVideos: [
          { videoId: '9Y-95rgsDDY', offset: 1850 },
          { videoId: 'xJuXrgbx-8I', offset: 1850 },
          { videoId: 'wSj_O5v5aMo', offset: 1850 },
          { videoId: '_zV0QTAHd5I', offset: 1900 },
          { videoId: 'WuelifqxMLs', offset: 1900 }
        ]
      }
    },
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: 'BABYMONSTER PERFORMANCE Full fancam [Summer Sonic Tokyo 2026] (44:12)',
        tag: '現場樂隊舞台 44:12',
        videoId: 'xJuXrgbx-8I',
        offset: 0,
        description: '全場樂隊搖滾全開麥狂潮。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'BABYMONSTER SUMMER SONIC 2026 TOKYO, JAPAN (45:11)',
        tag: '45分鐘全景 45:11',
        videoId: '_zV0QTAHd5I',
        offset: 0,
        description: '東京海洋球場 45 分鐘完整全景直擊。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: 'BABYMONSTER FULL PERFORMANCE [Summer Sonic Tokyo] (44:33)',
        tag: '完整直擊 44:33',
        videoId: 'wSj_O5v5aMo',
        offset: 0,
        description: 'Summer Sonic Tokyo 44 分鐘完整舞台直擊。'
      }
    ],
    availableAngles: [
      { id: 'angle_ss_2', title: 'BABYMONSTER PERFORMANCE Full fancam (44:12)', tag: '樂隊搖滾', videoId: 'xJuXrgbx-8I', author: 'Festival Cam', badge: 'CAM 1' },
      { id: 'angle_ss_5', title: 'BABYMONSTER SUMMER SONIC 2026 TOKYO, JAPAN (45:11)', tag: '45分鐘全景', videoId: '_zV0QTAHd5I', author: 'Festival Fan', badge: 'CAM 2' },
      { id: 'angle_ss_4', title: 'BABYMONSTER FULL PERFORMANCE [Summer Sonic Tokyo] (44:33)', tag: '完整直擊', videoId: 'wSj_O5v5aMo', author: 'Keep Going', badge: 'CAM 3' },
      { id: 'angle_ss_1', title: 'BABYMONSTER [FULL PERFORMANCE] SUMMER SONIC 2026 (32:53)', tag: '全景主視角', videoId: '9Y-95rgsDDY', author: 'Summer Live', badge: 'CAM 4' },
      { id: 'angle_ss_3', title: 'BABYMONSTER SUMMER SONIC 2026 in TOKYO (43:58)', tag: '球場特寫', videoId: 'WuelifqxMLs', author: 'Tokyo Live', badge: 'CAM 5' }
    ]
  }
];
