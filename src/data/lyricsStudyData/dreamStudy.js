// BABYMONSTER - 《DREAM》 全英語感性抒情深度研習資料包
// 本曲為 BABYMONSTER 出道前考核催淚神曲，100% 全英文演繹！
// 特色：自我懷疑與重生的深刻英文心理動詞、現在完成時態、抒情高音共鳴

export const DREAM_STUDY_DATA = {
  id: 'dream',
  title: 'DREAM',
  artist: 'BABYMONSTER',
  album: '首張迷你專輯《BABYMONS7ER》',
  year: '2023',
  youtubeId: 'ynOtYmpZxak',
  altYoutubeIds: ['ynOtYmpZxak'],
  sentences: [
    {
      id: 'drm-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:06',
      timeSec: 6.0,
      korean: 'Sometimes, I don\'t know who I am, Doubting myself again, Can\'t find a light in the dark',
      text: 'Sometimes, I don\'t know who I am, Doubting myself again, Can\'t find a light in the dark',
      romanization: '/ˈsʌmtaɪmz aɪ doʊnt noʊ huː aɪ æm ˈdaʊtɪŋ maɪˈsɛlf əˈɡɛn kænt faɪnd ə laɪt ɪn ðə dɑːrk/',
      naturalTranslation: '有時，我也會迷失方向不知自己究竟是誰，再次陷入自我懷疑的泥淖，在無邊黑暗中尋覓不到一絲微光。',
      pillChips: [
        {
          id: 'dp1',
          text: 'who I am',
          rom: '/huː aɪ æm/',
          type: 'identity-clause',
          typeLabel: '身分認同名詞子句',
          lemma: 'who + subject + be',
          meaning: '我是誰 / 自我定位',
          explanation: '表達青少年與追夢者在巨大壓力下的自我身分探索（Identity Crisis）。'
        },
        {
          id: 'dp2',
          text: 'Doubting myself',
          rom: '/ˈdaʊtɪŋ maɪˈsɛlf/',
          type: 'psychology-participle',
          typeLabel: '心理分詞 + 反身受詞',
          lemma: 'doubt oneself',
          meaning: '懷疑自我 / 信心動搖',
          explanation: '反身代名詞「myself」搭配「doubt」，形容內心深處的徬徨不安。'
        },
        {
          id: 'dp3',
          text: 'light in the dark',
          rom: '/laɪt ɪn ðə dɑːrk/',
          type: 'poetic-metaphor',
          typeLabel: '經典詩意隱喻成語',
          lemma: 'light in the dark',
          meaning: '黑暗中的明燈 / 絕境中的希望',
          explanation: '象徵在低谷期苦苦找尋的方向與精神寄託。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '時間副詞 (Sometimes) + 否定現在簡單句 (I don\'t know [Noun Clause]) + 分詞伴隨句 (Doubting myself...) + 省略主詞能力否定句 (Can\'t find...)',
          tokens: [
            { term: 'Sometimes', role: '頻率副詞', desc: '偶發的脆弱時刻。' },
            { term: 'who I am', role: '間接賓語子句', desc: '自我認知探索。' },
            { term: 'Doubting', role: '現在分詞狀語', desc: '伴隨進行的思緒。' },
            { term: 'light in the dark', role: '介詞賓語結構', desc: '暗夜明燈。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˈsʌmtaɪmz aɪ doʊn noʊ huː aɪ æm ˈdaʊtɪŋ maɪˈsɛlf əˈɡɛn kænt faɪnd ə laɪt ɪn ðə dɑːrk]',
          singingTips: '抒情主歌前半段氣息要輕盈，「who I am」尾音帶著嘆息聲，「dark」的 /ɑːrk/ 沉穩落地。',
          rules: [
            {
              title: '抒情氣息控制 (Breath Support in Ballads)',
              badge: '聲樂技巧',
              detail: '慢板英文抒情歌曲中，動詞前的停頓（如 don\'t know 前）能營造真實的情緒脆弱感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '真摯內心剖白 (Vulnerable Confession)',
              badge: '深層自白',
              form: 'Sometimes I feel completely lost and doubt whether I have what it takes.',
              scene: '深夜向最信任的導師或朋友傾訴追夢時的茫然'
            }
          ],
          realLifeExample: {
            scenario: '練習生在考核前因多次失誤而感到挫敗',
            dialogue: [
              { speaker: 'Trainee', text: 'I keep making mistakes today... Sometimes I don\'t know who I am, doubting myself again.', trans: '我今天一直失誤…有時我真的迷失了自己，又開始懷疑自己的能力。' },
              { speaker: 'Coach', text: 'It\'s okay to feel lost. The darkest night produces the brightest stars. Keep pushing.', trans: '感到迷茫很正常。最黑的夜才能襯托最亮的星，繼續堅持下去。' }
            ]
          }
        }
      }
    },
    {
      id: 'drm-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:37',
      timeSec: 37.1,
      korean: 'I made a promise, I\'ll never run and hide, I\'m getting stronger',
      text: 'I made a promise, I\'ll never run and hide, I\'m getting stronger',
      romanization: '/aɪ meɪd ə ˈprɑːmɪs aɪl ˈnɛvər rʌn ənd haɪd aɪm ˈɡɛtɪŋ ˈstrɔːŋɡər/',
      naturalTranslation: '我立下重誓：我絕不再逃避與退縮，每一次跌倒，都在讓我變得更加強大！',
      pillChips: [
        {
          id: 'dp4',
          text: 'made a promise',
          rom: '/meɪd ə ˈprɑːmɪs/',
          type: 'collocation-idiom',
          typeLabel: '許諾發誓動賓搭配',
          lemma: 'make a promise',
          meaning: '立下重誓 / 做出堅定承諾',
          explanation: '表達對自己的靈魂約定，代表從脆弱迷茫走向覺醒獨立的重要轉折點。'
        },
        {
          id: 'dp5',
          text: 'never run and hide',
          rom: '/ˈnɛvər rʌn ənd haɪd/',
          type: 'pair-idiom',
          typeLabel: '成對動詞成語',
          lemma: 'run and hide',
          meaning: '逃跑躲藏 / 畏縮逃避',
          explanation: '「run and hide」是經典成對片語；否定「never」表達迎難而上、直面挑戰的無畏勇氣。'
        },
        {
          id: 'dp6',
          text: 'getting stronger',
          rom: '/ˈɡɛtɪŋ ˈstrɔːŋɡər/',
          type: 'progressive-comparative',
          typeLabel: '進行式 + 比較級 (蛻變成型)',
          lemma: 'get + stronger',
          meaning: '變得日益堅強強大',
          explanation: '「be getting + 比較級」，象徵經歷風雨磨礪後內心力量的不斷覺醒與成長。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '過去決心主句 (I made a promise) + 未來絕對承諾子句 (I\'ll never run and hide) + 現在進行成長句 (I\'m getting stronger)',
          tokens: [
            { term: 'made a promise', role: '動賓謂語', desc: '立下承諾。' },
            { term: 'never run and hide', role: '否定雙動詞', desc: '絕不逃避。' },
            { term: 'getting stronger', role: '進行表變化', desc: '日益茁壯。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪ meɪd ə ˈprɑːməs aɪl ˈnɛvər rʌn ən haɪd aɪm ˈɡɛtɪŋ ˈstrɔːŋɡər]',
          singingTips: '高潮昂揚唱段！hide 的長雙元音 /aɪd/ 與 stronger 的鼻音 /ɔːŋɡər/ 咬字飽滿堅毅，胸腔共鳴全開！',
          rules: [
            {
              title: '比較級情感漸強 (Crescendo in Comparative Phrasing)',
              badge: '高音唱法',
              detail: '連續三次重複「I\'m getting stronger」，音量與力量感需逐層推進（Crescendo），達到情感沸點。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '重生誓言 (Declaration of Resilience)',
              badge: '逆境重生',
              form: 'I promised myself that I will never retreat, and I am emerging stronger every day.',
              scene: '戰勝重大人生挫折後的自我宣言'
            }
          ],
          realLifeExample: {
            scenario: '克服長久傷病後重返舞台的感言',
            dialogue: [
              { speaker: 'Interviewer', text: 'How did you push through those difficult months?', trans: '你是如何熬過那段艱難歲月的？' },
              { speaker: 'Artist', text: 'I made a promise that I\'d never run and hide. With every single struggle, I got stronger.', trans: '我對自己發過誓絕不逃跑躲藏。每一次掙扎與痛苦，都讓我變得更加強大。' }
            ]
          }
        }
      }
    }
  ]
};
