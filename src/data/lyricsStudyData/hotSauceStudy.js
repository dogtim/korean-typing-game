// BABYMONSTER - 《HOT SAUCE》 韓英雙語辛辣舞曲深度研習資料包
// 本曲為 BABYMONSTER 辛辣霸氣的派對舞曲代表作！
// 特色：美式火辣俚語、韓英雙語雙關、食物隱喻與舞台氣場

export const HOT_SAUCE_STUDY_DATA = {
  id: 'hot-sauce',
  title: 'HOT SAUCE',
  artist: 'BABYMONSTER',
  album: '數位單曲《HOT SAUCE》',
  year: '2025',
  youtubeId: 'xn8mQqz2xmM',
  altYoutubeIds: ['xn8mQqz2xmM', 'sA8a0FhB958'],
  sentences: [
    {
      id: 'hs-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:18',
      timeSec: 18.8,
      korean: 'Everybody want some but can’t handle what I brought ’em, I’m like hot sauce',
      text: 'Everybody want some but can’t handle what I brought ’em, I’m like hot sauce',
      romanization: '/ˈɛvribaɪ wɑːnt sʌm bət kænt ˈhændl wʌt aɪ brɔːt əm aɪm laɪk hɑːt sɔːs/',
      naturalTranslation: '人人都渴望分得一杯羹，卻根本承受不住我帶來的強烈震撼；我就如火辣辣的辣椒醬般熾烈刺激！',
      pillChips: [
        {
          id: 'hp1',
          text: 'can’t handle',
          rom: '/kænt ˈhændl/',
          type: 'idiom-capacity',
          typeLabel: '無法招架成語',
          lemma: 'cannot handle',
          meaning: '無法承受 / 難以招架',
          explanation: '形容某人或某物的氣場與實力過於強大震撼，一般人難以駕馭。'
        },
        {
          id: 'hp2',
          text: 'what I brought ’em',
          rom: '/wʌt aɪ brɔːt əm/',
          type: 'noun-clause-slang',
          typeLabel: '名詞子句 + 口語縮讀代名詞',
          lemma: 'what I brought them',
          meaning: '我為他們帶來的炸裂震撼',
          explanation: '’em 是 them 的口語弱化縮讀，展現街頭從容自信。'
        },
        {
          id: 'hp3',
          text: 'like hot sauce',
          rom: '/laɪk hɑːt sɔːs/',
          type: 'core-title-metaphor',
          typeLabel: '標題靈魂隱喻',
          lemma: 'like hot sauce',
          meaning: '如火辣辣椒醬般辛辣帶勁',
          explanation: '比喻自己熱烈、獨特且令人回味無窮的頂級個性魅力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '並列轉折複合句 (Everybody want some but can\'t handle [Noun Clause]) + 隱喻比喻主句 (I\'m like hot sauce)',
          tokens: [
            { term: 'Everybody want', role: '口語主謂', desc: '口語人人都想要。' },
            { term: 'can\'t handle', role: '能力否定', desc: '無法招架。' },
            { term: 'brought \'em', role: '雙賓短語', desc: '給他們端上的猛料。' },
            { term: 'hot sauce', role: '隱喻補語', desc: '辛辣刺激。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˈɛvribʌdi wɑːnt sʌm bət kænt ˈhændl wʌt aɪ brɔːt əm aɪm laɪk hɑːt sɔːs]',
          singingTips: 'brought \'em 與 hot sauce 押長元音 /ɔː/ 韻，節奏感鏗鏘有力。',
          rules: [
            {
              title: '長元音 /ɔː/ 押韻技巧',
              badge: 'Rap押韻',
              detail: 'brought [brɔːt] 與 sauce [sɔːs] 形成飽滿內押，口腔需保持充足空間。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '辛辣女王霸氣 (Spicy Queen Energy)',
              badge: '辛辣氣場',
              form: 'Everyone wants a piece of this, but they simply can\'t handle my heat.',
              scene: '面對跟不上自己步伐的競爭者展現女王魄力'
            }
          ],
          realLifeExample: {
            scenario: '面對想模仿自己風格卻毫無特色的抄襲者',
            dialogue: [
              { speaker: 'Friend', text: 'Everyone is trying to copy your style!', trans: '大家都在嘗試模仿你的穿搭與風格！' },
              { speaker: 'You', text: 'They can try, but they can\'t handle the heat. I\'m like hot sauce.', trans: '他們儘管學吧，但他們根本招架不住我的辛辣氣場，我可是辣椒醬。' }
            ]
          }
        }
      }
    }
  ]
};
