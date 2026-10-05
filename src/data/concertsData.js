// Concerts & Multi-Angle Live Feeds Dataset
// Provides multi-angle YouTube fancams and official live recordings for BABYMONSTER concerts

export const CONCERT_PRESETS = [
  {
    id: 'babymonster_kyocera_dome_osaka_2026',
    title: '2026-27 BABYMONSTER WORLD TOUR [CHOOM] IN JAPAN',
    subTitle: 'SPECIAL LIVE AT KYOCERA DOME OSAKA (京瓷大阪巨蛋)',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'Kyocera Dome Osaka, Japan (京瓷大阪巨蛋)',
    date: '2026.09.22 - 2026.09.23',
    attendance: '90,000 Fans (2 Days Sold-out)',
    themeColor: '#e11d48',
    description: 'BABYMONSTER 首次巨蛋公演！震撼 9 萬名現場觀眾的大阪巨蛋特輯。點選下方完整的 Main Set、Solo Stages 或 Encore 歌單，即可即時載入該首歌曲的 3 角度多視角畫面！',
    
    // Categorized Setlist for Kyocera Dome Osaka
    setlist: {
      mainSet: [
        {
          id: 'sheesh',
          title: 'SHEESH (Band Live Version)',
          koreanTitle: 'SHEESH',
          tag: '代表作炸場',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: '京瓷巨蛋 SHEESH 樂團搖滾炸場版 (Live Band)',
              tag: '全景主視角',
              videoId: '60Hx2Tdsxzw',
              offset: 0,
              description: '大阪巨蛋中央大舞台全景，重金屬現場鼓點全開麥。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Ahyeon 4K 焦點直拍 (Ahyeon Salute Pose Focus)',
              tag: 'Ahyeon 直拍',
              videoId: 'nQa8CKSSIkw',
              offset: 0,
              description: '超高清 4K 個人直拍，高音爆發與舞台狂野表情。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'Asa 饒舌快嘴與舞台特寫 (Asa Focus Cam)',
              tag: 'Asa 特寫',
              videoId: 'kRoTXaF470I',
              offset: 0,
              description: '快嘴饒舌連擊與流暢律動近身特寫。'
            }
          ],
          availableAngles: [
            { id: 'sheesh_ang_1', title: 'SHEESH 樂團搖滾現場 (Live Band)', tag: '全景主視角', videoId: '60Hx2Tdsxzw', author: 'YG Entertainment', badge: 'CAM 1' },
            { id: 'sheesh_ang_2', title: 'Ahyeon 4K 焦點直拍', tag: 'Ahyeon 直拍', videoId: 'nQa8CKSSIkw', author: 'supergaga', badge: 'CAM 2' },
            { id: 'sheesh_ang_3', title: 'Asa 饒舌快嘴直拍', tag: 'Asa 特寫', videoId: 'kRoTXaF470I', author: 'M2', badge: 'CAM 3' },
            { id: 'sheesh_ang_4', title: 'Pharita "SHEESH Remix" 現場焦點', tag: 'Pharita 直拍', videoId: 'mPfUS0AVerA', author: 'supergaga', badge: 'CAM 4' },
            { id: 'sheesh_ang_5', title: 'Rami & Rora 歌聲走位直拍', tag: '雙主唱焦點', videoId: 'fmv6p_YYlAI', author: '1Blink Channel', badge: 'CAM 5' },
            { id: 'sheesh_ang_6', title: '京瓷巨蛋 9 萬手燈海全景', tag: '燈海全景', videoId: 'jrmuquHtcfM', author: 'EnhaPink', badge: 'CAM 6' }
          ]
        },
        {
          id: 'drip',
          title: 'DRIP',
          koreanTitle: 'DRIP',
          tag: '舞蹈主打',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'BABYMONSTER live in Osaka at Kyocera Dome 2026, Night 1 (京セラドーム 大阪 1日目)',
              tag: '京瓷巨蛋 Day 1 現場',
              videoId: 'je7aZ-pGcDk',
              offset: 0,
              description: '2026.09.22 京瓷巨蛋首日現場直擊，震撼 4 萬 5 千名觀眾熱烈歡呼。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'BABY MONSTER IN OSAKA, JAPAN (DAY 2) KYOCERA DOME CHOOM WORLD TOUR',
              tag: '京瓷巨蛋 Day 2 現場',
              videoId: '6QnZyKUFAoU',
              offset: 0,
              description: '2026.09.23 京瓷巨蛋第二日大舞台現場，全開麥炸裂巨蛋。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'BABYMONSTER - ‘춤 (CHOOM)’ Live at WORLD TOUR [CHOOM] IN KYOCERA DOME OSAKA',
              tag: '巨蛋主打曲現場',
              videoId: 'cB4StGH94qI',
              offset: 0,
              description: '京瓷巨蛋主打演出視角，燈光雷射秀與萬人整齊應援。'
            }
          ],
          availableAngles: [
            { id: 'drip_cam_1', title: 'BABYMONSTER live in Osaka at Kyocera Dome 2026, Night 1 (京セラドーム 1日目)', tag: '京瓷巨蛋 Day 1 現場', videoId: 'je7aZ-pGcDk', author: 'SaDru', badge: 'CAM 1' },
            { id: 'drip_cam_2', title: 'BABY MONSTER IN OSAKA, JAPAN (DAY 2) KYOCERA DOME CHOOM WORLD TOUR', tag: '京瓷巨蛋 Day 2 現場', videoId: '6QnZyKUFAoU', author: 'MONSTIEZ2203', badge: 'CAM 2' },
            { id: 'drip_cam_3', title: 'BABYMONSTER - ‘춤 (CHOOM)’ Live at WORLD TOUR IN KYOCERA DOME OSAKA', tag: '巨蛋主打曲現場', videoId: 'cB4StGH94qI', author: 'MONSTIEZ', badge: 'CAM 3' },
            { id: 'drip_cam_4', title: 'BABYMONSTER ENCORE in Kyocera Dome Osaka 2026 Day 1 (巨蛋安可視角)', tag: '巨蛋安可全景', videoId: 'S7dRry_GmrE', author: 'kiamonztie', badge: 'CAM 4' },
            { id: 'drip_cam_5', title: 'BABYMONSTER LIVE PERFOMANCE KYOCERA DOME OSAKA - THE CROWD', tag: '9萬觀眾燈海氛圍', videoId: 'UOZ7u36aiWY', author: 'Yoel', badge: 'CAM 5' },
            { id: 'drip_cam_6', title: 'BABYMONSTER World Tour CHOOM at Kyocera Dome Day 2 in Osaka Japan', tag: '大阪 Day 2 全場實況', videoId: 'T6AH56gGyCU', author: 'KPOP CRAXE', badge: 'CAM 6' },
            { id: 'drip_cam_7', title: 'BABYMONSTER WORLD TOUR CHOOM 2026-27 IN OSAKA AT KYOCERA DOME DAY 1', tag: '巨蛋搖滾區直擊', videoId: '39J8a2OgRGQ', author: 'babymonster Haram', badge: 'CAM 7' },
            { id: 'drip_cam_8', title: 'BABYMONSTER in Kyocera Dome Osaka 2026 Day 1 Live Stage', tag: '巨蛋主舞台特寫', videoId: 'IT_78ewOyzw', author: 'kiamonztie', badge: 'CAM 8' },
            { id: 'drip_cam_9', title: '[4K] 260922-260923 BABYMONSTER ASA 아사 \'TEMPLE\' 직캠 | KYOCERA DOME OSAKA', tag: 'Asa 巨蛋直拍', videoId: 'iWoodjQ7p8g', author: 'miracle.', badge: 'CAM 9' },
            { id: 'drip_cam_10', title: '260923 \'SUPER BASS\' BABYMONSTER PHARITA solo 직캠 ㅣ KYOCERA DOME OSAKA', tag: 'Pharita 巨蛋直拍', videoId: 'uILoaUwvAko', author: 'horizon', badge: 'CAM 10' }
          ]
        },
        {
          id: 'we_go_up',
          title: 'WE GO UP',
          koreanTitle: 'WE GO UP',
          tag: '震撼開場曲',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'WE GO UP 巨蛋震撼開場大舞台 (Opening Stage Cam)',
              tag: '開場全景',
              videoId: 'wlHwjkYpSr0',
              offset: 0,
              description: '巡迴開場大螢幕震撼視覺與煙火特效。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'WE GO UP 全員舞台律動 (Choreography Cam)',
              tag: '舞蹈焦點',
              videoId: 'xn8mQqz2xmM',
              offset: 0,
              description: '成員高難度舞蹈編排與力量感動作。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '京瓷巨蛋開場萬人歡呼氛圍 (Dome Hype Cam)',
              tag: '全場氛圍',
              videoId: 'SyxYiwd9TFo',
              offset: 0,
              description: '9 萬人開場起立齊喊應援熱浪。'
            }
          ],
          availableAngles: [
            { id: 'wgu_ang_1', title: 'WE GO UP 巨蛋開場大舞台', tag: '開場全景', videoId: 'wlHwjkYpSr0', author: 'Stage Cam', badge: 'CAM 1' },
            { id: 'wgu_ang_2', title: 'WE GO UP 全員舞台律動', tag: '舞蹈焦點', videoId: 'xn8mQqz2xmM', author: 'Performance Mix', badge: 'CAM 2' },
            { id: 'wgu_ang_3', title: '京瓷巨蛋開場萬人歡呼氛圍', tag: '全場氛圍', videoId: 'SyxYiwd9TFo', author: 'KpopVault', badge: 'CAM 3' }
          ]
        },
        {
          id: 'batter_up',
          title: 'BATTER UP',
          koreanTitle: 'BATTER UP',
          tag: '全場合唱主打',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'BATTER UP (7 ver.) 巨蛋大舞台現場',
              tag: '主舞台全景',
              videoId: 'olDWm2veCrM',
              offset: 0,
              description: '7 人完全體 BATTER UP 巨蛋首度登台。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'BATTER UP Live 樂團改編開麥視角',
              tag: '現場開麥',
              videoId: '_OUeWzS-iGg',
              offset: 0,
              description: '生嗓強開麥與重音打擊現場。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'BATTER UP 舞蹈高潮排舞直拍',
              tag: '舞蹈特寫',
              videoId: 'UAIWgiJYi8s',
              offset: 0,
              description: '副歌棒球打擊動作全體焦點。'
            }
          ],
          availableAngles: [
            { id: 'bu_ang_1', title: 'BATTER UP (7 ver.) 巨蛋舞台', tag: '主舞台全景', videoId: 'olDWm2veCrM', author: 'Official Live', badge: 'CAM 1' },
            { id: 'bu_ang_2', title: 'BATTER UP Live 樂團開麥視角', tag: '現場開麥', videoId: '_OUeWzS-iGg', author: 'Live Sound', badge: 'CAM 2' },
            { id: 'bu_ang_3', title: 'BATTER UP 舞蹈排舞直拍', tag: '舞蹈特寫', videoId: 'UAIWgiJYi8s', author: 'Dance Cam', badge: 'CAM 3' }
          ]
        },
        {
          id: 'psycho',
          title: 'PSYCHO',
          koreanTitle: 'PSYCHO',
          tag: '巨蛋限定特別舞台',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'BABYMONSTER "Psycho" in Kyocera Dome Osaka',
              tag: '神級改編現場',
              videoId: '2giUibg3Jpg',
              offset: 0,
              description: 'Red Velvet 名曲 Psycho 神級翻唱改編，大阪巨蛋引爆尖叫。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Rora & Chiquita Psycho 舞台笑靨與合音直拍',
              tag: '成員互動直拍',
              videoId: 'Qu6H_GjRu0o',
              offset: 0,
              description: 'Chiquita 與 Rora 互動走位與甜美笑容。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'Psycho 舞台前排震撼特寫 (VIP Cam)',
              tag: '前排特寫',
              videoId: 'L2oKUnBmbZ8',
              offset: 0,
              description: '前排直擊 Psycho 經典舞步與眼神殺。'
            }
          ],
          availableAngles: [
            { id: 'psy_ang_1', title: 'Psycho in Kyocera Dome Osaka', tag: '神級改編現場', videoId: '2giUibg3Jpg', author: 'kiamonztie', badge: 'CAM 1' },
            { id: 'psy_ang_2', title: 'Rora & Chiquita Psycho 合音直拍', tag: '成員互動直拍', videoId: 'Qu6H_GjRu0o', author: 'Cybér nét', badge: 'CAM 2' },
            { id: 'psy_ang_3', title: 'Psycho 舞台前排震撼特寫', tag: '前排特寫', videoId: 'L2oKUnBmbZ8', author: 'BAEMONST7', badge: 'CAM 3' }
          ]
        },
        {
          id: 'clik_clak',
          title: 'CLIK CLAK',
          koreanTitle: 'CLIK CLAK',
          tag: '全員嘻哈饒舌',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'CLIK CLAK 巨蛋黑白黑金嘻哈大舞台',
              tag: '嘻哈主舞台',
              videoId: '1eQO8h7XU0Y',
              offset: 0,
              description: '全員 Rap 輪番登場，態度感拉滿的帥氣舞台。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'CLIK CLAK 饒舌節奏律動走位直拍',
              tag: '節奏走位',
              videoId: 'o0oW3lPoOXM',
              offset: 0,
              description: '成員嘻哈 Swagger 律動特寫。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'CLIK CLAK 舞台前排重低音直擊',
              tag: '重低音搖滾區',
              videoId: 'le_VX8l35XI',
              offset: 0,
              description: '低音砲震耳欲聾的前排視角。'
            }
          ],
          availableAngles: [
            { id: 'cc_ang_1', title: 'CLIK CLAK 黑金嘻哈大舞台', tag: '嘻哈主舞台', videoId: '1eQO8h7XU0Y', author: 'BABYMONSTER', badge: 'CAM 1' },
            { id: 'cc_ang_2', title: 'CLIK CLAK 饒舌節奏律動直拍', tag: '節奏走位', videoId: 'o0oW3lPoOXM', author: 'Rap Cam', badge: 'CAM 2' },
            { id: 'cc_ang_3', title: 'CLIK CLAK 舞台前排重低音直擊', tag: '重低音搖滾區', videoId: 'le_VX8l35XI', author: 'Bass Vault', badge: 'CAM 3' }
          ]
        },
        {
          id: 'ghost',
          title: 'GHOST',
          koreanTitle: 'GHOST',
          tag: '日本限定原創曲首演',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'GHOST 京瓷巨蛋日本原創曲震撼世界首演',
              tag: '世界首演全景',
              videoId: 'SyxYiwd9TFo',
              offset: 0,
              description: '為日本巡演打造的全新原創曲首次曝光。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'GHOST 日本歌迷應援與主舞台特寫',
              tag: '日本限定舞台',
              videoId: 'oMKrylfWcQw',
              offset: 0,
              description: '大阪巨蛋特有雷射幽靈光影秀。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'GHOST 萬人紅海手燈互動全景',
              tag: '紅海燈效',
              videoId: 'jrmuquHtcfM',
              offset: 0,
              description: '9 萬人手燈隨 GHOST 節奏變色狂歡。'
            }
          ],
          availableAngles: [
            { id: 'gh_ang_1', title: 'GHOST 京瓷巨蛋世界首演', tag: '世界首演全景', videoId: 'SyxYiwd9TFo', author: 'KpopVault', badge: 'CAM 1' },
            { id: 'gh_ang_2', title: 'GHOST 日本限定舞台特寫', tag: '日本限定舞台', videoId: 'oMKrylfWcQw', author: 'kiamonztie', badge: 'CAM 2' }
          ]
        }
      ],

      soloStages: [
        {
          id: 'asa_temple',
          title: 'Asa – Temple',
          koreanTitle: '아사 – Temple (Solo)',
          tag: 'Asa 快嘴獨舞 Solo',
          performer: 'Asa (아사)',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: '[4K] 260922-260923 BABYMONSTER ASA "TEMPLE" 直拍',
              tag: 'Asa 4K 直拍',
              videoId: 'iWoodjQ7p8g',
              offset: 0,
              description: 'Asa 在大阪巨蛋引爆全場的震撼 Solo 舞台與快嘴饒舌爆發。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Asa Emotional Solo Stage Fancam 直拍',
              tag: '感動眼淚特寫',
              videoId: 'hZXz1mK9HIU',
              offset: 0,
              description: 'Solo 舞台結束後回歸家鄉巨蛋圓夢的感動瞬間。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'Asa Backstage & Stage Focus @ Kyocera Dome',
              tag: '登台直擊',
              videoId: 'BhEYyTR6UPw',
              offset: 0,
              description: '超高清 4K 登台前準備與 Solo 爆發全過程。'
            }
          ],
          availableAngles: [
            { id: 'asa_ang_1', title: 'Asa "TEMPLE" 4K 巨蛋直拍', tag: 'Asa 4K 直拍', videoId: 'iWoodjQ7p8g', author: 'miracle.', badge: 'CAM 1' },
            { id: 'asa_ang_2', title: 'Asa 巨蛋圓夢感動直拍', tag: '感動特寫', videoId: 'hZXz1mK9HIU', author: 'Fancam Vault', badge: 'CAM 2' },
            { id: 'asa_ang_3', title: 'Asa 登台準備全過程直擊', tag: '登台直擊', videoId: 'BhEYyTR6UPw', author: 'supergaga', badge: 'CAM 3' },
            { id: 'asa_ang_4', title: 'Asa 巨蛋 Solo 淚崩報導畫面', tag: '新聞花絮', videoId: 'UzByEFWP_vo', author: 'Yumi Wong', badge: 'CAM 4' }
          ]
        },
        {
          id: 'pharita_super_bass',
          title: 'Pharita – Super Bass',
          koreanTitle: '파리타 – Super Bass (Solo)',
          tag: 'Pharita 清澈高音 Solo',
          performer: 'Pharita (파리타)',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: '260923 [4K] BABYMONSTER PHARITA @ Kyocera Dome',
              tag: 'Pharita 4K 直拍',
              videoId: 'QfphPJtUiHc',
              offset: 0,
              description: 'Nicki Minaj 翻唱，清甜音色與俏皮快嘴驚豔全場。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Pharita 巨蛋舞台全景走位直擊',
              tag: '主舞台特寫',
              videoId: 'jC5lLCpqd1k',
              offset: 0,
              description: '迪士尼公主般優雅身態與歌唱實力。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: 'Pharita 巨蛋應援觀眾互動視角',
              tag: '搖滾區互動',
              videoId: 'SyxYiwd9TFo',
              offset: 0,
              description: '與看台及前排歌迷眼神互動甜美畫面。'
            }
          ],
          availableAngles: [
            { id: 'pha_ang_1', title: 'Pharita 4K 巨蛋個人直拍', tag: 'Pharita 4K 直拍', videoId: 'QfphPJtUiHc', author: 'supergaga', badge: 'CAM 1' },
            { id: 'pha_ang_2', title: 'Pharita 巨蛋舞台全景走位', tag: '主舞台特寫', videoId: 'jC5lLCpqd1k', author: 'supergaga', badge: 'CAM 2' }
          ]
        },
        {
          id: 'ahyeon_problem',
          title: 'Ahyeon – Problem',
          koreanTitle: '아현 – Problem (Solo)',
          tag: 'Ahyeon 鐵肺高音 Solo',
          performer: 'Ahyeon (아현)',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'Ahyeon 4K 爆發力高音 Solo 直拍 (Problem Stage)',
              tag: 'Ahyeon 4K 直拍',
              videoId: 'nQa8CKSSIkw',
              offset: 0,
              description: 'Ariana Grande 翻唱，海豚音與超強轉音震懾巨蛋。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Ahyeon 舞台氣場掌控全景 (Stage Presence Cam)',
              tag: '氣場焦點',
              videoId: 'ruriaRvnIEw',
              offset: 0,
              description: '小鋼砲般滿溢能量與舞台自信神態。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '巨蛋看台直擊 Ahyeon 超高音延伸',
              tag: '全場迴盪',
              videoId: 'jrmuquHtcfM',
              offset: 0,
              description: '巨蛋頂部迴盪的驚人高音現場聲響。'
            }
          ],
          availableAngles: [
            { id: 'ahy_ang_1', title: 'Ahyeon 4K 高音直拍', tag: 'Ahyeon 4K 直拍', videoId: 'nQa8CKSSIkw', author: 'supergaga', badge: 'CAM 1' },
            { id: 'ahy_ang_2', title: 'Ahyeon 氣場掌控焦點', tag: '氣場焦點', videoId: 'ruriaRvnIEw', author: 'Fancam Live', badge: 'CAM 2' }
          ]
        },
        {
          id: 'ruka_ratatata',
          title: 'Ruka – Ratatata',
          koreanTitle: '루카 – Ratatata (Solo)',
          tag: 'Ruka 嘻哈舞王 Solo',
          performer: 'Ruka (루카)',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'Ruka 嘻哈力量感舞蹈炸場直拍 (Ratatata Cam)',
              tag: 'Ruka 4K 直拍',
              videoId: 'PC6AbyGWLYE',
              offset: 0,
              description: '刀群舞核心，極限力量控制與超帥嘻哈律動。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Ruka 饒舌咬字與酷帥表情特寫',
              tag: '表情殺特寫',
              videoId: 'KcSwEoDRWTA',
              offset: 0,
              description: '回歸日本巨蛋舞台的自信霸氣魅力。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '搖滾特區前排直擊 Ruka 舞蹈衝擊',
              tag: '前排衝擊視角',
              videoId: 'i0Ry503-XJY',
              offset: 0,
              description: '最近距離感受舞步地板動作震盪。'
            }
          ],
          availableAngles: [
            { id: 'ruk_ang_1', title: 'Ruka 力量感舞蹈直拍', tag: 'Ruka 4K 直拍', videoId: 'PC6AbyGWLYE', author: 'MBCkpop', badge: 'CAM 1' },
            { id: 'ruk_ang_2', title: 'Ruka 饒舌酷帥表情特寫', tag: '表情殺特寫', videoId: 'KcSwEoDRWTA', author: 'Rap Stage', badge: 'CAM 2' }
          ]
        },
        {
          id: 'rora_havana',
          title: 'Rora – Havana',
          koreanTitle: '로라 – Havana (Solo)',
          tag: 'Rora 甜美優雅 Solo',
          performer: 'Rora (로라)',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: '260922 [4K] BABYMONSTER RORA Havana 巨蛋直拍',
              tag: 'Rora 4K 直拍',
              videoId: 'UmheslX6mqo',
              offset: 0,
              description: 'Camila Cabello Havana 翻唱，深情浪漫嗓音。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Rora 主唱靈魂歌聲特寫 (Vocal Focus)',
              tag: '主唱特寫',
              videoId: 'fmv6p_YYlAI',
              offset: 0,
              description: '巨蛋抒情舞台溫暖甜美笑靨。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '巨蛋中央大螢幕 Rora 特寫映象視角',
              tag: '大螢幕映象',
              videoId: 'MzoW7IFMA7M',
              offset: 0,
              description: '主舞台高清大螢幕唯美鏡頭。'
            }
          ],
          availableAngles: [
            { id: 'ror_ang_1', title: 'Rora Havana 巨蛋 4K 直拍', tag: 'Rora 4K 直拍', videoId: 'UmheslX6mqo', author: 'supergaga', badge: 'CAM 1' },
            { id: 'ror_ang_2', title: 'Rora 主唱靈魂歌聲特寫', tag: '主唱特寫', videoId: 'fmv6p_YYlAI', author: '1Blink Channel', badge: 'CAM 2' }
          ]
        },
        {
          id: 'chiquita_worth_it',
          title: 'Chiquita – Worth It',
          koreanTitle: '치키타 – Worth It (Solo)',
          tag: 'Chiquita 忙內反差萌 Solo',
          performer: 'Chiquita (치키타)',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'Chiquita Solo Dance Focus (Worth It Cam 4K)',
              tag: 'Chiquita 4K 直拍',
              videoId: 'hZXz1mK9HIU',
              offset: 0,
              description: 'Fifth Harmony Worth It 翻唱，忙內爆發性感力量舞蹈。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'Chiquita 巨蛋舞台活力走位直擊',
              tag: '活力走位',
              videoId: '2giUibg3Jpg',
              offset: 0,
              description: '超強肢體彈性與自信燦爛笑容。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '搖滾區零距離直擊 Chiquita 舞蹈動作',
              tag: '搖滾區近拍',
              videoId: 'i0Ry503-XJY',
              offset: 0,
              description: '舞台延伸台前排超近距離。'
            }
          ],
          availableAngles: [
            { id: 'chi_ang_1', title: 'Chiquita Solo Dance 4K 直拍', tag: 'Chiquita 4K 直拍', videoId: 'hZXz1mK9HIU', author: 'Fancam Vault', badge: 'CAM 1' },
            { id: 'chi_ang_2', title: 'Chiquita 巨蛋舞台活力走位', tag: '活力走位', videoId: '2giUibg3Jpg', author: 'kiamonztie', badge: 'CAM 2' }
          ]
        }
      ],

      encore: [
        {
          id: 'love_in_my_heart',
          title: 'LOVE IN MY HEART (Send-off Cart)',
          koreanTitle: 'LOVE IN MY HEART',
          tag: '花道巡場推車互動',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'LOVE IN MY HEART 巨蛋安可巡場大合唱',
              tag: '安可大合唱',
              videoId: '1kXLsrun51s',
              offset: 0,
              description: '成員乘坐巡場小花車環繞大阪巨蛋與粉絲揮手。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: '[4K] 260922 BABYMONSTER Send-off Focus @ Kyocera Dome',
              tag: '巡場特寫',
              videoId: 'MzoW7IFMA7M',
              offset: 0,
              description: '超高清 4K 送別會與安可互動溫馨特寫。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '京瓷巨蛋 9 萬觀眾手燈海安可大波浪',
              tag: '看台燈海波浪',
              videoId: 'jrmuquHtcfM',
              offset: 0,
              description: '全場手燈同步掀起壯觀紅白色波浪。'
            }
          ],
          availableAngles: [
            { id: 'limh_ang_1', title: 'LOVE IN MY HEART 巨蛋安可合唱', tag: '安可大合唱', videoId: '1kXLsrun51s', author: 'Live Archive', badge: 'CAM 1' },
            { id: 'limh_ang_2', title: 'BABYMONSTER Send-off 巡場特寫', tag: '巡場特寫', videoId: 'MzoW7IFMA7M', author: 'supergaga', badge: 'CAM 2' }
          ]
        },
        {
          id: 'batter_up_remix',
          title: 'BATTER UP (Remix Encore)',
          koreanTitle: 'BATTER UP (Remix)',
          tag: '安可嗨跳版',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'BATTER UP (Remix) 安可全員狂跳現場',
              tag: '安可狂歡',
              videoId: '_OUeWzS-iGg',
              offset: 0,
              description: '成員無拘無束狂歡嗨跳，把巨蛋變成大型夜店派對。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: 'BATTER UP 安可主唱高音自由發揮',
              tag: '即興高音',
              videoId: 'olDWm2veCrM',
              offset: 0,
              description: '主唱自由飆高音與成員灑水狂歡。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '巨蛋搖滾區全場齊跳震撼地面震動',
              tag: '搖滾區齊跳',
              videoId: 'i0Ry503-XJY',
              offset: 0,
              description: '9 萬人共同跳躍的震撼地面震盪。'
            }
          ],
          availableAngles: [
            { id: 'bur_ang_1', title: 'BATTER UP (Remix) 安可狂跳現場', tag: '安可狂歡', videoId: '_OUeWzS-iGg', author: 'Encore Cam', badge: 'CAM 1' },
            { id: 'bur_ang_2', title: 'BATTER UP 即興飆高音直拍', tag: '即興高音', videoId: 'olDWm2veCrM', author: 'Live Vocal', badge: 'CAM 2' }
          ]
        },
        {
          id: 'drip_double_encore',
          title: 'DRIP / PSYCHO (Double Encore)',
          koreanTitle: 'DRIP (Double Encore)',
          tag: '二次安可最終狂歡',
          performer: 'BABYMONSTER',
          slots: [
            {
              slotId: 0,
              name: 'CAM 1',
              title: 'DRIP / PSYCHO 巨蛋二次安可終極謝幕舞台',
              tag: '二次安可全景',
              videoId: '2giUibg3Jpg',
              offset: 0,
              description: '全場歌迷大喊安可不願離場，成員再度登台壓軸狂唱。'
            },
            {
              slotId: 1,
              name: 'CAM 2',
              title: '二次安可成員不捨謝幕感動淚目特寫',
              tag: '謝幕淚目直拍',
              videoId: 'hZXz1mK9HIU',
              offset: 0,
              description: '成員向巨蛋四面觀眾 90 度深鞠躬與真情告白。'
            },
            {
              slotId: 2,
              name: 'CAM 3',
              title: '大阪巨蛋終場漫天彩帶與手燈落幕全景',
              tag: '漫天彩帶全景',
              videoId: 'jrmuquHtcfM',
              offset: 0,
              description: '金色銀色彩帶噴射與巨蛋公演圓滿成功。'
            }
          ],
          availableAngles: [
            { id: 'dde_ang_1', title: '二次安可終極謝幕舞台', tag: '二次安可全景', videoId: '2giUibg3Jpg', author: 'kiamonztie', badge: 'CAM 1' },
            { id: 'dde_ang_2', title: '謝幕淚目與真情告白特寫', tag: '謝幕淚目直拍', videoId: 'hZXz1mK9HIU', author: 'Fancam Vault', badge: 'CAM 2' }
          ]
        }
      ]
    },

    // Default 3 Slots (initial load is SHEESH)
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: '京瓷巨蛋 SHEESH 樂團搖滾炸場版 (Live Band)',
        tag: '全景主視角',
        videoId: '60Hx2Tdsxzw',
        offset: 0,
        description: '大阪巨蛋中央大舞台全景，重金屬現場鼓點全開麥。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'Ahyeon 4K 焦點直拍 (Ahyeon Salute Pose Focus)',
        tag: 'Ahyeon 直拍',
        videoId: 'nQa8CKSSIkw',
        offset: 0,
        description: '超高清 4K 個人直拍，高音爆發與舞台狂野表情。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: 'Asa 饒舌快嘴與舞台特寫 (Asa Focus Cam)',
        tag: 'Asa 特寫',
        videoId: 'kRoTXaF470I',
        offset: 0,
        description: '快嘴饒舌連擊與流暢律動近身特寫。'
      }
    ],
    availableAngles: [
      { id: 'ang_default_1', title: '京瓷巨蛋大舞台 (Full Dome Stage View)', tag: '全景主視角', videoId: 'SyxYiwd9TFo', author: 'KpopVault', badge: 'CAM 1' },
      { id: 'ang_default_2', title: 'Pharita 專屬焦點直拍 (4K Focus)', tag: '成員直拍', videoId: 'QfphPJtUiHc', author: 'supergaga', badge: 'CAM 2' },
      { id: 'ang_default_3', title: 'ASA "TEMPLE" 獨舞饒舌爆發 (Asa Solo)', tag: '個人舞台特寫', videoId: 'iWoodjQ7p8g', author: 'miracle.', badge: 'CAM 3' },
      { id: 'ang_default_4', title: 'Psycho 神級改編翻唱現場 (Psycho Live)', tag: '熱門特別舞台', videoId: '2giUibg3Jpg', author: 'kiamonztie', badge: 'CAM 4' },
      { id: 'ang_default_5', title: '謝幕巡場與粉絲互動視角 (Send-off Focus)', tag: '巡場與謝幕', videoId: 'MzoW7IFMA7M', author: 'supergaga', badge: 'CAM 5' },
      { id: 'ang_default_6', title: 'SHEESH REMIX 樂團炸場版 (Live Band Version)', tag: '樂團搖滾版', videoId: '60Hx2Tdsxzw', author: 'YG Entertainment', badge: 'CAM 6' }
    ]
  },
  {
    id: 'babymonster_summer_sonic_live',
    title: 'BABYMONSTER LIVE @ SUMMER SONIC JAPAN',
    subTitle: 'TOKYO & OSAKA FESTIVAL SPECIAL (夏日音樂祭全開麥)',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'Summer Sonic Mountain Stage (Osaka & Tokyo)',
    date: '2024 - 2026',
    attendance: 'Outdoor Festival Arena',
    themeColor: '#f59e0b',
    description: '日本最大夏日音樂祭 Summer Sonic 萬人燃爆現場！全開麥 Live 樂團版本震撼演繹，多角度直擊超強現場實力。',
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: '全開麥串燒 (SHEESH + BATTER UP + FOREVER)',
        tag: '音樂節全曲',
        videoId: 'JAFLqbej8Rw',
        offset: 0,
        description: '音樂節完整熱門歌曲串燒現場，萬人齊跳尖叫。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'SHEESH 搖滾重金屬改編版 (Rock Band Live)',
        tag: '樂團搖滾',
        videoId: 'xPcBqfjOgus',
        offset: 0,
        description: '現場樂手超炸鼓點與貝斯，搭配少女們超燃開麥。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: 'Pharita "SHEESH Remix" 4K 現場直拍',
        tag: '成員直拍',
        videoId: 'mPfUS0AVerA',
        offset: 0,
        description: 'Summer Sonic 現場超清 4K 成員舞台直拍。'
      }
    ],
    availableAngles: [
      { id: 'angle_ss_1', title: '全開麥串燒 (SHEESH + BATTER UP + FOREVER)', tag: '音樂節全曲', videoId: 'JAFLqbej8Rw', author: 'Live Archive', badge: 'CAM 1' },
      { id: 'angle_ss_2', title: 'SHEESH 搖滾重金屬改編版 (Rock Band Live)', tag: '樂團搖滾', videoId: 'xPcBqfjOgus', author: 'Sonic Rock', badge: 'CAM 2' },
      { id: 'angle_ss_3', title: 'Pharita "SHEESH Remix" 4K 現場直拍', tag: '成員直拍', videoId: 'mPfUS0AVerA', author: 'Fancam Live', badge: 'CAM 3' },
      { id: 'angle_ss_4', title: 'Summer Sonic 幕後紀實與日本巡演花絮', tag: '幕後紀實', videoId: 'tO-4QFfSsCo', author: 'BABYMONSTER Official', badge: 'CAM 4' }
    ]
  },
  {
    id: 'babymonster_hello_monsters_world_tour',
    title: '1ST WORLD TOUR [HELLO MONSTERS]',
    subTitle: 'KANAGAWA & SEOUL ARENA STAGES (世界巡演震撼現場)',
    artist: 'BABYMONSTER (베이비몬스터)',
    venue: 'Pia Arena MM & KSPO Dome',
    date: '2025.02 - 2025.05',
    attendance: 'Arena World Tour',
    themeColor: '#8b5cf6',
    description: 'BABYMONSTER 首次全球巡演精彩回顧，體驗巡迴安可大合唱、舞台舞蹈特寫與震撼聲光效果。',
    defaultSlots: [
      {
        slotId: 0,
        name: 'CAM 1',
        title: 'SHEESH 安可狂歡現場 (Encore Live 4K)',
        tag: '安可主舞台',
        videoId: 'edheIIVQ6Mg',
        offset: 0,
        description: '神奈川體育館安可環節，成員無拘無束嗨翻全場。'
      },
      {
        slotId: 1,
        name: 'CAM 2',
        title: 'SHEESH 世界巡演主舞台震撼編舞',
        tag: '巡演主舞台',
        videoId: 'kzrmNI2Grg8',
        offset: 0,
        description: '高難度編舞與走位全景紀錄。'
      },
      {
        slotId: 2,
        name: 'CAM 3',
        title: '馬尼拉巡演場安可直擊 (Manila Encore)',
        tag: '海外場視角',
        videoId: 'ZdUw1ornwfk',
        offset: 0,
        description: '全場應援歡呼聲震耳欲聾的海外巡演盛況。'
      }
    ],
    availableAngles: [
      { id: 'angle_hm_1', title: 'SHEESH 安可狂歡現場 (Encore Live 4K)', tag: '安可主舞台', videoId: 'edheIIVQ6Mg', author: 'Live Fan', badge: 'CAM 1' },
      { id: 'angle_hm_2', title: 'SHEESH 世界巡演主舞台震撼編舞', tag: '巡演主舞台', videoId: 'kzrmNI2Grg8', author: 'World Stage', badge: 'CAM 2' },
      { id: 'angle_hm_3', title: '馬尼拉巡演場安可直擊 (Manila Encore)', tag: '海外場視角', videoId: 'ZdUw1ornwfk', author: 'Manila Live', badge: 'CAM 3' },
      { id: 'angle_hm_4', title: 'CLIK CLAK 嘻哈強烈開場 (Hip-Hop Stage)', tag: '嘻哈開場', videoId: '1eQO8h7XU0Y', author: 'BABYMONSTER Official', badge: 'CAM 4' }
    ]
  }
];
