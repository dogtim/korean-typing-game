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
    // Dynamically aggregates all available angles across all other concerts (Single Source of Truth)
    get availableAngles() {
      const angles = [];
      const seen = new Set();
      for (const preset of CONCERT_PRESETS) {
        if (!preset || preset.id === 'all_concerts_mix') continue;
        for (const angle of (preset.availableAngles || [])) {
          if (!seen.has(angle.videoId)) {
            seen.add(angle.videoId);
            angles.push(angle);
          }
        }
      }
      return angles;
    },

    // Dynamically merges songs across all concerts for universal cross-tour seek
    get songs() {
      const merged = {};
      for (const preset of CONCERT_PRESETS) {
        if (!preset || preset.id === 'all_concerts_mix' || !preset.songs) continue;
        if (typeof preset.songs !== 'object' || Array.isArray(preset.songs)) continue;
        for (const [key, songData] of Object.entries(preset.songs)) {
          if (!merged[key]) {
            merged[key] = {
              title: songData.title || key.toUpperCase(),
              availableVideos: []
            };
          }
          if (Array.isArray(songData.availableVideos)) {
            const existingVIds = new Set(merged[key].availableVideos.map(v => v.videoId));
            for (const v of songData.availableVideos) {
              if (!existingVIds.has(v.videoId)) {
                existingVIds.add(v.videoId);
                merged[key].availableVideos.push(v);
              }
            }
          }
        }
      }
      return merged;
    }
  },
  {
    id: 'babymonster_choom_2026',
    title: '2026-27 BABYMONSTER WORLD TOUR [춤 (CHOOM)]',
    subTitle: 'SEOUL, MANILA, JAKARTA, MACAO & OSAKA (首爾 / 馬尼拉 / 雅加達 / 澳門 / 大阪京瓷巨蛋)',
    categoryTag: 'CHOOM 巡演 2026',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'KSPO Dome, Seoul / Manila / Jakarta, Indonesia / Venetian Macao / Kyocera Dome Osaka, Japan',
    date: '2026.06.26 - 2026.09.23',
    attendance: 'World Tour Full Show',
    themeColor: '#f97316',
    tourCategory: 'choom',
    description: 'CHOOM 世界巡演全場長片（全部大於 10 分鐘）：CAM 1 雅加達全場含彩排 (1:55:04)、CAM 2 雅加達 4K 全場 (1:45:00)、CAM 3 雅加達主舞台 (1:13:02)。三機位均為雅加達現場，支援全曲目多角度即時同步 Seek 與播放。另收錄首爾、馬尼拉、澳門（威尼斯人綜藝館，Day 1 / Day 2 安可與合輯）與大阪京瓷巨蛋（首次巨蛋公演）的現場影片可自由指派機位。',

    // Song-Centric Setlist for Quick Multi-Cam Seek
    songs: {
      sc_like_that: {
        title: 'LIKE THAT (Soundcheck)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 400 }
        ]
      },
      sc_supa_dupa_luv: {
        title: 'SUPA DUPA LUV (Soundcheck)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 683 }
        ]
      },
      sc_hot_sauce: {
        title: 'HOT SAUCE (Soundcheck)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 845 }
        ]
      },
      intro: {
        title: 'INTRO',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 1018 },
          { videoId: 'Y0jAWFM8IO8', offset: 0 }
        ]
      },
      we_go_up: {
        title: 'WE GO UP',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 1135 },
          { videoId: '0W2kNvTJE_I', offset: 63 },
          { videoId: 'Y0jAWFM8IO8', offset: 137 }
        ]
      },
      choom: {
        title: 'CHOOM',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 1326 },
          { videoId: '0W2kNvTJE_I', offset: 252 },
          { videoId: 'Y0jAWFM8IO8', offset: 336 }
        ]
      },
      batter_up: {
        title: 'BATTER UP',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 1503 },
          { videoId: '0W2kNvTJE_I', offset: 433 },
          { videoId: 'Y0jAWFM8IO8', offset: 471 }
        ]
      },
      drip: {
        title: 'DRIP',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 1724 },
          { videoId: '0W2kNvTJE_I', offset: 662 },
          { videoId: 'Y0jAWFM8IO8', offset: 661 }
        ]
      },
      opening_talk: {
        title: 'Member Greeting & Opening',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 1899 }
        ]
      },
      moon: {
        title: 'MOON',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 2059 },
          { videoId: '0W2kNvTJE_I', offset: 1020 },
          { videoId: 'Y0jAWFM8IO8', offset: 877 }
        ]
      },
      clik_clak: {
        title: 'CLIK CLAK',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 2226 },
          { videoId: '0W2kNvTJE_I', offset: 1194 },
          { videoId: 'Y0jAWFM8IO8', offset: 1038 }
        ]
      },
      sheesh: {
        title: 'SHEESH',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 2389 },
          { videoId: '0W2kNvTJE_I', offset: 1364 }
        ]
      },
      psycho: {
        title: 'PSYCHO',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 2547 },
          { videoId: '0W2kNvTJE_I', offset: 1536 },
          { videoId: 'Y0jAWFM8IO8', offset: 1080 }
        ]
      },
      solo_rora_havana: {
        title: 'Rora – Havana',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 2735 },
          { videoId: '0W2kNvTJE_I', offset: 1784 },
          { videoId: 'Y0jAWFM8IO8', offset: 1182 },
          { videoId: 'cbYjGuqNrX4', offset: 0 }
        ]
      },
      solo_asa_temple: {
        title: 'Asa – Temple',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 2872 },
          { videoId: '0W2kNvTJE_I', offset: 1926 },
          { videoId: 'Y0jAWFM8IO8', offset: 1314 },
          { videoId: 'cbYjGuqNrX4', offset: 138 }
        ]
      },
      solo_pharita_super_bass: {
        title: 'Pharita – Super Bass',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 2985 },
          { videoId: '0W2kNvTJE_I', offset: 2065 },
          { videoId: 'Y0jAWFM8IO8', offset: 1369 },
          { videoId: 'cbYjGuqNrX4', offset: 247 }
        ]
      },
      solo_chiquita_worth_it: {
        title: 'Chiquita – Worth It',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3104 },
          { videoId: '0W2kNvTJE_I', offset: 2196 },
          { videoId: 'Y0jAWFM8IO8', offset: 1459 },
          { videoId: 'cbYjGuqNrX4', offset: 376 }
        ]
      },
      solo_ruka_ratata: {
        title: 'Ruka – Ratata',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3218 },
          { videoId: '0W2kNvTJE_I', offset: 2328 },
          { videoId: 'Y0jAWFM8IO8', offset: 1570 },
          { videoId: 'cbYjGuqNrX4', offset: 495 }
        ]
      },
      solo_ahyeon_problem: {
        title: 'Ahyeon – Problem',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3307 },
          { videoId: '0W2kNvTJE_I', offset: 2454 },
          { videoId: 'Y0jAWFM8IO8', offset: 1651 },
          { videoId: 'cbYjGuqNrX4', offset: 606 }
        ]
      },
      dance_challenge: {
        title: 'DANCE CHALLENGE with MONSTIEZ',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3485 }
        ]
      },
      stuck_in_the_middle: {
        title: 'STUCK IN THE MIDDLE',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3510 },
          { videoId: '0W2kNvTJE_I', offset: 2647 }
        ]
      },
      love_maybe: {
        title: 'LOVE, MAYBE',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3604 },
          { videoId: '0W2kNvTJE_I', offset: 2647 }
        ]
      },
      dream: {
        title: 'DREAM',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3690 },
          { videoId: '0W2kNvTJE_I', offset: 2647 },
          { videoId: 'Y0jAWFM8IO8', offset: 1835 }
        ]
      },
      locked_in: {
        title: 'LOCKED IN',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3799 },
          { videoId: '0W2kNvTJE_I', offset: 2966 },
          { videoId: 'Y0jAWFM8IO8', offset: 1935 }
        ]
      },
      talk_audience_1: {
        title: 'INTERACTION WITH AUDIENCE',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 3969 }
        ]
      },
      really_like_you: {
        title: 'REALLY LIKE YOU',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 4066 },
          { videoId: '0W2kNvTJE_I', offset: 3249 },
          { videoId: 'Y0jAWFM8IO8', offset: 2026 }
        ]
      },
      billionaire: {
        title: 'BILLIONAIRE',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 4280 },
          { videoId: '0W2kNvTJE_I', offset: 3481 },
          { videoId: 'Y0jAWFM8IO8', offset: 2218 }
        ]
      },
      talk_audience_2: {
        title: 'INTERACTION WITH AUDIENCE 2',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 4419 },
          { videoId: 'Y0jAWFM8IO8', offset: 2365 }
        ]
      },
      forever: {
        title: 'FOREVER',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 4604 },
          { videoId: '0W2kNvTJE_I', offset: 3833 },
          { videoId: 'Y0jAWFM8IO8', offset: 2389 }
        ]
      },
      wild: {
        title: 'WILD',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 4813 },
          { videoId: '0W2kNvTJE_I', offset: 4048 },
          { videoId: 'Y0jAWFM8IO8', offset: 2599 }
        ]
      },
      i_like_it: {
        title: 'I LIKE IT',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 4977 },
          { videoId: '0W2kNvTJE_I', offset: 4223 },
          { videoId: 'Y0jAWFM8IO8', offset: 2743 }
        ]
      },
      hot_sauce: {
        title: 'HOT SAUCE',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 5168 },
          { videoId: '0W2kNvTJE_I', offset: 4464 },
          { videoId: 'Y0jAWFM8IO8', offset: 2937 }
        ]
      },
      sugar_honey_ice_tea: {
        title: 'SUGAR HONEY ICE TEA',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 5311 },
          { videoId: '0W2kNvTJE_I', offset: 4625 },
          { videoId: 'Y0jAWFM8IO8', offset: 3079 }
        ]
      },
      encore_supa_dupa_luv: {
        title: 'SUPA DUPA LUV (Encore)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 5480 },
          { videoId: '0W2kNvTJE_I', offset: 4894 },
          { videoId: 'Y0jAWFM8IO8', offset: 3251 }
        ]
      },
      encore_love_in_my_heart: {
        title: 'LOVE IN MY HEART (Encore)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 5640 },
          { videoId: '0W2kNvTJE_I', offset: 5062 },
          { videoId: 'Y0jAWFM8IO8', offset: 3401 }
        ]
      },
      encore_talk_3: {
        title: 'INTERACTION WITH AUDIENCE 3',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 5833 },
          { videoId: 'Y0jAWFM8IO8', offset: 3562 }
        ]
      },
      moment_digoyang: {
        title: 'GAMAU PULANG MOMENT',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 6216 }
        ]
      },
      photo_session: {
        title: 'PHOTO SESSION',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 6240 }
        ]
      },
      encore_batter_up_remix: {
        title: 'BATTER UP REMIX (Encore)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 6317 },
          { videoId: '0W2kNvTJE_I', offset: 5745 },
          { videoId: 'Y0jAWFM8IO8', offset: 3900 }
        ]
      },
      encore_sheesh_remix: {
        title: 'SHEESH REMIX (Encore)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 6510 },
          { videoId: '0W2kNvTJE_I', offset: 5940 },
          { videoId: 'Y0jAWFM8IO8', offset: 4067 }
        ]
      },
      encore_sugar_honey_ice_tea: {
        title: 'SUGAR HONEY ICE TEA (Encore)',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 6718 },
          { videoId: '0W2kNvTJE_I', offset: 6197 },
          { videoId: 'Y0jAWFM8IO8', offset: 4210 }
        ]
      },
      say_thank_you: {
        title: 'SAY THANK YOU',
        availableVideos: [
          { videoId: 'V5LWC7w2YO4', offset: 6904 },
          { videoId: 'Y0jAWFM8IO8', offset: 4382 }
        ]
      }
    },
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: 'BABYMONSTER WORLD TOUR [CHOOM] IN JAKARTA (Full 1:55:04)',
        tag: '雅加達全場 1:55:04',
        videoId: 'V5LWC7w2YO4',
        offset: 1135,
        description: '雅加達站 1 小時 55 分鐘完整巡演舞台，包含彩排 Soundcheck、開場 INTRO、Solo 舞台與安可。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'BABYMONSTER CHOOM CONCERT in JAKARTA (FULL FANCAM 4K)',
        tag: '雅加達 4K 全場',
        videoId: '0W2kNvTJE_I',
        offset: 63,
        description: '雅加達站 4K 高畫質現場舞台全場直擊。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: '[Full Concert] BABYMONSTER World Tour CHOOM In Jakarta (1:13:02)',
        tag: '雅加達主舞台 1:13:02',
        videoId: 'Y0jAWFM8IO8',
        offset: 137,
        description: '雅加達站 73 分鐘主舞台超清現場直擊。'
      }
    ],
    availableAngles: [
      { id: 'choom_jakarta_full', title: 'BABYMONSTER WORLD TOUR [CHOOM] IN JAKARTA (Full 1:55:04)', tag: '雅加達全場', videoId: 'V5LWC7w2YO4', author: 'Monstiez Indo', badge: 'CAM 1' },
      { id: 'choom_jakarta_4k', title: 'BABYMONSTER CHOOM CONCERT in JAKARTA (FULL FANCAM 4K)', tag: '雅加達 4K 全場', videoId: '0W2kNvTJE_I', author: 'Live Stage', badge: 'CAM 2' },
      { id: 'choom_jakarta_2', title: 'BABYMONSTER World Tour CHOOM In Jakarta - Fancam 2 (1:13:02)', tag: '雅加達主舞台', videoId: 'Y0jAWFM8IO8', author: 'K-Fancam', badge: 'CAM 3' },
      { id: 'choom_full_seoul', title: '260628 BABYMONSTER CHOOM WORLD TOUR IN SEOUL (Full 1:40:55)', tag: '首爾全場', videoId: 'A3M7Nxt3_-Q', author: '키코', badge: '首爾全場' },
      { id: 'choom_seoul_vod', title: '[SE] BABYMONSTER: WORLD TOUR [춤 (CHOOM)] in Seoul (Full 1:57:23)', tag: '首爾公演', videoId: 'sODCh7HvDAs', author: 'Sweetener Events', badge: '首爾公演' },
      { id: 'choom_full_manila', title: 'BABYMONSTER CHOOM 2026 WORLD TOUR IN MANILA (Full 1:53:01)', tag: '馬尼拉全場', videoId: 'BN61wzbvI7M', author: '_rvnshlby', badge: '馬尼拉全場' },
      { id: 'choom_seoul_vlog', title: '[몬스티즈 브이로그] 2026-27 WORLD TOUR CHOOM IN SEOUL (1:26:29)', tag: '首爾沉浸直擊', videoId: 'Dr-8WJLQquU', author: '이번 역은 아현', badge: '首爾直擊' },
      { id: 'choom_osaka_full', title: '2nd WORLD TOUR CHOOM LIVE AT KYOCERA DOME in OSAKA (51:18)', tag: '大阪巨蛋全場', videoId: 'nzPPN62FHnQ', author: 'AdarrCP4', badge: '京瓷巨蛋' },
      { id: 'choom_seoul_yg', title: '★YG 官方 BABYMONSTER - WORLD TOUR [춤 (CHOOM)] BEHIND in SEOUL (27:08)', tag: 'YG 官方首爾', videoId: 'U_jAcFKeY_c', author: 'BABYMONSTER', badge: '官方首爾' },
      { id: 'choom_japan_yg', title: '★YG 官方 BABYMONSTER - WORLD TOUR [춤 (CHOOM)] BEHIND in JAPAN #1 (20:01)', tag: 'YG 官方日本', videoId: 'UJjvmfRc51c', author: 'BABYMONSTER', badge: '官方日本' },
      { id: 'choom_osaka_d1_4k', title: 'BABYMONSTER live in Osaka at Kyocera Dome 2026 Night 1 (13:53)', tag: '大阪巨蛋 Day 1 4K', videoId: 'je7aZ-pGcDk', author: 'SaDru', badge: '巨蛋 Day 1' },
      { id: 'choom_osaka_vip', title: 'CHOOM 2026-27 IN OSAKA AT KYOCERA DOME DAY 1 (15:07)', tag: '大阪巨蛋搖滾區', videoId: '39J8a2OgRGQ', author: 'babymonster Haram', badge: '巨蛋搖滾區' },
      { id: 'choom_osaka_d2', title: 'BABY MONSTER IN OSAKA, JAPAN (DAY 2) KYOCERA DOME (14:28)', tag: '大阪巨蛋 Day 2', videoId: '6QnZyKUFAoU', author: 'MONSTIEZ2203', badge: '巨蛋 Day 2' },
      { id: 'choom_macao_d2_main', title: '2026-27 BABYMONSTER WORLD TOUR (CHOOM) Day 2 Macao - BATTER UP｜DRIP｜talk｜MOON｜CLIK CLAK (16:24)', tag: '澳門 Day 2 主舞台', videoId: 'xztX5RPnbQA', author: '卡MEOW', badge: '澳門 Day 2' },
      { id: 'choom_macao_d2_encore', title: '2026-27 BABYMONSTER WORLD TOUR (CHOOM) Day 2 Macao ENCORE - BATTER UP｜SHEESH｜SUGAR HONEY ICE TEA (11:53)', tag: '澳門 Day 2 安可', videoId: '_CFe2iRUxFg', author: '卡MEOW', badge: '澳門安可' },
      { id: 'choom_macao_d1_encore', title: '260911 BABYMONSTER WORLD TOUR [춤(CHOOM)] IN MACAO｜ENCORE+ending (16:53)', tag: '澳門 Day 1 安可', videoId: 'SeGBn4q0lKo', author: 'KW.', badge: '澳門 Day 1' },
      { id: 'choom_macao_d1_soundcheck', title: 'BABYMONSTER - SOUNDCHECK 2026-27 WORLD TOUR [춤 (CHOOM)] IN MACAO 20260911 4K FANCAM (12:26)', tag: '澳門 Soundcheck 4K', videoId: 'FetTyqXwL7E', author: 'R FANCAM 二葉', badge: '澳門彩排' },
      { id: 'choom_solo_comp', title: 'Solo Stage 솔로무대 모음 4K Fancam (CHOOM 260626, 12:35)', tag: 'Solo 舞台 4K', videoId: 'cbYjGuqNrX4', author: 'K-PLANET', badge: 'Solo精選' }
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
    description: 'HELLO MONSTERS 全場長片（全部大於 10 分鐘）：CAM 1 橫濱 K-Arena 4K 全場 (2:13:49)、CAM 2 神奈川 Day 2 全場 (1:53:53)、CAM 3 神奈川完整安可 (27:35)。歌單涵蓋 DRIP (Remix)、BATTER UP、CLIK CLAK、LIKE THAT、SHEESH、成員 Solo、BILLIONAIRE、FOREVER、Love In My Heart 及完整安可。',
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
        title: "'FULL ENCORE' HELLO MONSTER WORLD TOUR KANAGAWA (27:35)",
        tag: '神奈川完整安可 27:35',
        videoId: 't6Zeru_VdSg',
        offset: 0,
        songCues: { hm_opening: 0 },
        description: '神奈川站完整安可片段。'
      }
    ],
    availableAngles: [
      { id: 'hm_karena_full', title: 'HELLO MONSTERS IN JAPAN 2025.04.13 K-ARENA YOKOHAMA [4K] (2:13:49)', tag: '橫濱全場 4K', videoId: 'v0QTRX_fyPk', author: 'Mokrij Vinograd', badge: 'CAM 1', songCues: { hm_opening: 0 } },
      { id: 'hm_kanagawa_d2', title: '【Day2】HELLO MONSTERS IN 神奈川 Full Video (1:53:53)', tag: '神奈川 Day 2 全場', videoId: '81u-SQQyS4o', author: 'Bình Nguyễn', badge: 'CAM 2', songCues: { hm_opening: 0 } },
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
          { videoId: 'WuelifqxMLs', offset: 10 },
          { videoId: 'xJuXrgbx-8I', offset: 10 },
          { videoId: '9Y-95rgsDDY', offset: 4 },
          { videoId: 'wSj_O5v5aMo', offset: 39 },
          { videoId: '_zV0QTAHd5I', offset: 77 }
        ]
      },
      choom: {
        title: 'CHOOM',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 199 },
          { videoId: 'xJuXrgbx-8I', offset: 199 },
          { videoId: '9Y-95rgsDDY', offset: 193 },
          { videoId: 'wSj_O5v5aMo', offset: 228 },
          { videoId: '_zV0QTAHd5I', offset: 266 }
        ]
      },
      moon: {
        title: 'MOON',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 510 },
          { videoId: 'xJuXrgbx-8I', offset: 510 },
          { videoId: '9Y-95rgsDDY', offset: 355 },
          { videoId: 'wSj_O5v5aMo', offset: 539 },
          { videoId: '_zV0QTAHd5I', offset: 577 }
        ]
      },
      drip: {
        title: 'DRIP',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 679 },
          { videoId: 'xJuXrgbx-8I', offset: 679 },
          { videoId: '9Y-95rgsDDY', offset: 524 },
          { videoId: 'wSj_O5v5aMo', offset: 708 },
          { videoId: '_zV0QTAHd5I', offset: 746 }
        ]
      },
      forever: {
        title: 'FOREVER',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 1042 },
          { videoId: 'xJuXrgbx-8I', offset: 1042 },
          { videoId: '9Y-95rgsDDY', offset: 887 },
          { videoId: 'wSj_O5v5aMo', offset: 1071 },
          { videoId: '_zV0QTAHd5I', offset: 1109 }
        ]
      },
      really_like_you: {
        title: 'Really Like You',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 1255 },
          { videoId: 'xJuXrgbx-8I', offset: 1255 },
          { videoId: '9Y-95rgsDDY', offset: 1100 },
          { videoId: 'wSj_O5v5aMo', offset: 1284 },
          { videoId: '_zV0QTAHd5I', offset: 1322 }
        ]
      },
      i_like_it: {
        title: 'I LIKE IT',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 1450 },
          { videoId: 'xJuXrgbx-8I', offset: 1450 },
          { videoId: '9Y-95rgsDDY', offset: 1295 },
          { videoId: 'wSj_O5v5aMo', offset: 1479 },
          { videoId: '_zV0QTAHd5I', offset: 1517 }
        ]
      },
      hot_sauce: {
        title: 'HOT SAUCE',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 1832 },
          { videoId: 'xJuXrgbx-8I', offset: 1832 },
          { videoId: '9Y-95rgsDDY', offset: 1500 },
          { videoId: 'wSj_O5v5aMo', offset: 1861 },
          { videoId: '_zV0QTAHd5I', offset: 1899 }
        ]
      },
      sugar_honey_ice_tea: {
        title: 'SUGAR HONEY ICE TEA',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 1980 },
          { videoId: 'xJuXrgbx-8I', offset: 1980 },
          { videoId: '9Y-95rgsDDY', offset: 1648 },
          { videoId: 'wSj_O5v5aMo', offset: 2009 },
          { videoId: '_zV0QTAHd5I', offset: 2047 }
        ]
      },
      batter_up_remix: {
        title: 'BATTER UP',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 2191 },
          { videoId: 'xJuXrgbx-8I', offset: 2191 },
          { videoId: '9Y-95rgsDDY', offset: 1859 },
          { videoId: 'wSj_O5v5aMo', offset: 2220 },
          { videoId: '_zV0QTAHd5I', offset: 2258 }
        ]
      },
      sheesh_remix: {
        title: 'SHEESH',
        availableVideos: [
          { videoId: 'WuelifqxMLs', offset: 2383 },
          { videoId: 'xJuXrgbx-8I', offset: 2383 },
          { videoId: '9Y-95rgsDDY', offset: 2051 },
          { videoId: 'wSj_O5v5aMo', offset: 2412 },
          { videoId: '_zV0QTAHd5I', offset: 2450 }
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
