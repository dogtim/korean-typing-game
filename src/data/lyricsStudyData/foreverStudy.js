// BABYMONSTER - 《FOREVER》 韓英雙語夏日舞曲深度研習資料包
// 本曲為 BABYMONSTER 風靡全球的清爽夏日高音舞曲代表作！
// 特色：無憂自信英美俚語、韓語否定動詞文法、送氣音與高音氣場

export const FOREVER_STUDY_DATA = {
  id: 'forever',
  title: 'FOREVER',
  artist: 'BABYMONSTER',
  album: '數位單曲《FOREVER》',
  year: '2024',
  youtubeId: 'eJCHKjt0MPw',
  altYoutubeIds: ['FhPfx5s_qLg', 'pM9_K5qR_wQ'],
  sentences: [
    {
      id: 'for-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:09',
      timeSec: 9.8,
      korean: 'I got no worries on my mind, 난 멈추지 않아 so you can say goodbye',
      text: 'I got no worries on my mind, 난 멈추지 않아 so you can say goodbye',
      romanization: 'I got no worries on my mind, nan meom-chu-ji an-a so you can say goodbye',
      naturalTranslation: '我心頭毫無一絲憂慮，我的前行步伐永不止息，所以你大可揮手說再見！',
      pillChips: [
        {
          id: 'fp1',
          text: 'no worries on my mind',
          rom: '/noʊ ˈwɜːriz ɑːn maɪ maɪnd/',
          type: 'english-idiom',
          typeLabel: '無憂無慮英文成語',
          lemma: 'no worries on one\'s mind',
          meaning: '心中無牽無掛 / 灑脫自在',
          explanation: '表達卸下所有外界包袱，全心享受當下的自信從容心境。'
        },
        {
          id: 'fp2',
          text: '난 멈추지 않아',
          rom: 'nan meom-chu-ji an-a',
          type: 'korean-grammar',
          typeLabel: '代名詞受詞 + 長型否定文法',
          lemma: '나 + -(으)ㄴ + 멈추다 + -지 않다',
          meaning: '我絕不就此停下腳步',
          explanation: '動詞「멈추다（停止）」加上長型否定語尾「-지 않다」，比短型否定「안 멈춰」更具堅定無移的決心。'
        },
        {
          id: 'fp3',
          text: 'say goodbye',
          rom: '/seɪ ˌɡʊdˈbaɪ/',
          type: 'action-idiom',
          typeLabel: '道別割捨成語',
          lemma: 'say goodbye',
          meaning: '道別送客 / 拋諸腦後',
          explanation: '告別過去的質疑與軟弱，邁向全新高度。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文所有主句 (I got no worries...) + 韓語主格長否定句 (난 멈추지 않아) + 英文結果情態子句 (so you can say goodbye)',
          tokens: [
            { term: 'no worries', role: '否定名詞受詞', desc: '心無牽掛。' },
            { term: '난 (나는)', role: '主格代名詞', desc: '我。' },
            { term: '-지 않다', role: '長型否定語尾', desc: '堅決否定。' },
            { term: 'can say goodbye', role: '情態動詞短語', desc: '隨你自便離去。' }
          ]
        },
        pronunciation: {
          actualSound: '[I got no worries on my mind, 난 멈추지 아나 so you can say goodbye]',
          singingTips: '「않아」中雙收音 ㄶ 遇到後方 ㅇ 時，ㅎ 脫落，讀作 [아나] (a-na)，發音平滑透亮。',
          rules: [
            {
              title: 'ㅎ 脫落現象 (ㅎ-Deletion / ㅎ탈락)',
              badge: '韓語收音規則',
              detail: '收音 ㄶ 或 ㅀ 遇到以初聲 ㅇ 開頭的母音語尾時，ㅎ 音不發音，直接連讀前方的 ㄴ 或 ㄹ。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '瀟灑前行 (Carefree Radiance)',
              badge: '灑脫自信',
              form: 'I have no worries and I\'m never stopping; you\'re free to move along.',
              scene: '甩開負能量，專注追求自我成長'
            }
          ],
          realLifeExample: {
            scenario: '面對總是給出負面評價的人，瀟灑回應',
            dialogue: [
              { speaker: 'Hater', text: 'Aren\'t you afraid you might fail?', trans: '難道你都不怕自己會失敗嗎？' },
              { speaker: 'You', text: 'I got no worries on my mind, 난 멈추지 않아! Watch me shine.', trans: '我心中毫無掛慮，我的腳步永不會停！看著我發光發熱吧。' }
            ]
          }
        }
      }
    },
    {
      id: 'for-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:26',
      timeSec: 26.9,
      korean: '눈부셔, They say she looking flawless',
      text: '눈부셔, They say she looking flawless',
      romanization: 'Nun-bu-syeo, They say she looking flawless',
      naturalTranslation: '耀眼得令人睜不開眼！所有人都驚嘆：她的美貌與氣場無懈可擊！',
      pillChips: [
        {
          id: 'fp4',
          text: '눈부셔',
          rom: 'nun-bu-syeo',
          type: 'sensory-adjective',
          typeLabel: '視覺感官形容詞',
          lemma: '눈부시다 + -어',
          meaning: '耀眼奪目 / 光芒萬丈',
          explanation: '「눈（眼睛）」+「부시다（刺眼/眩目）」，形容光彩照人、讓人無法直視的極致美麗。'
        },
        {
          id: 'fp5',
          text: 'flawless',
          rom: '/ˈflɔːləs/',
          type: 'perfection-adjective',
          typeLabel: '極致完美形容詞',
          lemma: 'flawless',
          meaning: '無懈可擊 / 完美無瑕',
          explanation: '「flaw（瑕疵）」+ 接尾辭「-less（無）」，在歐美流行文化中是稱讚舞台表現或顏值最高等級的讚美詞！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '韓語感嘆形容詞 (눈부셔) + 英文報導句型 (They say [that] she [is] looking flawless)',
          tokens: [
            { term: '눈부시다', role: '形容詞幹', desc: '光彩奪目。' },
            { term: 'They say', role: '引述主謂', desc: '眾人皆讚嘆。' },
            { term: 'flawless', role: '形容詞補語', desc: '完美無瑕。' }
          ]
        },
        pronunciation: {
          actualSound: '[눈부셔 They say she looking ˈflɔːləs]',
          singingTips: '「flawless」的 /ɔː/ 元音要圓潤飽滿，咬字清脆，展現絕對從容的天生巨星氣質。',
          rules: [
            {
              title: '長元音開口度技巧',
              badge: '流行發音',
              detail: 'flawless 中 /flɔː/ 嘴唇呈橢圓形，聲線帶有自然的微氣聲，能增添時髦名媛感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '紅毯驚艷讚譽 (Glamorous Acclaim)',
              badge: '盛讚顏值',
              form: 'She is truly blindingly radiant; she looks absolutely flawless.',
              scene: '時尚雜誌或頒獎典禮盛讚巨星裝扮'
            }
          ],
          realLifeExample: {
            scenario: '好友盛裝打扮準備登台表演',
            dialogue: [
              { speaker: 'You', text: 'Wow, look in the mirror! 눈부셔, they say she looking flawless!', trans: '天哪快照照鏡子！太耀眼了，所有人都在誇你簡直無懈可擊！' },
              { speaker: 'Friend', text: 'Thank you! You just gave me the biggest confidence boost!', trans: '謝謝！你給了我最大的信心！' }
            ]
          }
        }
      }
    }
  ]
};
