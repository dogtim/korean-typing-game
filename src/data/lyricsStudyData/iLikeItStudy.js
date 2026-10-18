// BABYMONSTER - 《I Like It》 全英語時髦心動深度研習資料包
// 本曲為 BABYMONSTER 俏皮甜美的純英文流行舞曲！
// 特色：當代數位戀愛流行語「literally glitching（腦袋當機）」、Mayday 求救信號、心動失控狀態

export const I_LIKE_IT_STUDY_DATA = {
  id: 'i-like-it',
  title: 'I Like It',
  artist: 'BABYMONSTER',
  album: '第三張迷你專輯《춤 (CHOOM)》',
  year: '2026',
  youtubeId: '9cS2wv6AfHk',
  altYoutubeIds: ['9cS2wv6AfHk'],
  sentences: [
    {
      id: 'ili-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:17',
      timeSec: 17.1,
      korean: 'My mind is a complete mess, It\'s like I\'m literally glitching',
      text: 'My mind is a complete mess, It\'s like I\'m literally glitching',
      romanization: '/maɪ maɪnd ɪz ə kəmˈpliːt mɛs ɪts laɪk aɪm ˈlɪtərəli ˈɡlɪtʃɪŋ/',
      naturalTranslation: '我的思緒徹底亂成一團，只要一遇見你，我的大腦就簡直像是瞬間短路當機了一樣！',
      pillChips: [
        {
          id: 'ip1',
          text: 'complete mess',
          rom: '/kəmˈpliːt mɛs/',
          type: 'idiom-chaos',
          typeLabel: '一團糟 / 徹底混亂成語',
          lemma: 'a complete mess',
          meaning: '徹底大亂 / 亂成一團糟',
          explanation: '形容被強烈心動所震撼，平時冷靜的理智思緒蕩然無存。'
        },
        {
          id: 'ip2',
          text: 'literally glitching',
          rom: '/ˈlɪtərəli ˈɡlɪtʃɪŋ/',
          type: 'modern-slang',
          typeLabel: '當代 Z 世代數位潮流俚語',
          lemma: 'glitch',
          meaning: '大腦瞬間當機 / 程式故障短路',
          explanation: '名詞/動詞「glitch（數位設備小故障/當機卡頓）」，在 Z 世代流行語中用來形容「遇見心動對象時，腦海一片空白、整個人說不出話來的卡頓狀態」！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞補語主謂句 (My mind is a complete mess) + 比喻感官子句 (It\'s like I\'m literally glitching)',
          tokens: [
            { term: 'My mind', role: '主詞', desc: '我的大腦思緒。' },
            { term: 'complete mess', role: '混亂名詞補語', desc: '一團混亂。' },
            { term: 'literally', role: '強調副詞', desc: '簡直是、真的是。' },
            { term: 'glitching', role: '現在分詞謂語', desc: '當機卡頓。' }
          ]
        },
        pronunciation: {
          actualSound: '[maɪ maɪnd ɪz ə kəmˈpliːt mɛs ɪts laɪk aɪm ˈlɪtərəli ˈɡlɪtʃɪŋ]',
          singingTips: '「literally」美式快速發音同化為 [ˈlɪ-trə-li]，「glitching」咬字彈脆，俏皮感十足。',
          rules: [
            {
              title: '美式 T 弱化與快速音變 (Flap T & Syncope)',
              badge: '口語美語技巧',
              detail: 'literally 常略讀中間非重音母音，發音輕巧俐落。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: 'Z 世代直球心動 (Gen-Z Crush Adoration)',
              badge: '心動短路',
              form: 'Whenever you look at me, my brain literally just glitches.',
              scene: '向好友打趣描述自己遇見心上人時的心慌與失態'
            }
          ],
          realLifeExample: {
            scenario: '跟心儀的暗戀對象打了個照面之後向閨蜜尖叫',
            dialogue: [
              { speaker: 'Friend', text: 'Why did you freeze and drop your phone just now?!', trans: '你剛剛怎麼突然整個人僵住，連手機都掉了？！' },
              { speaker: 'You', text: 'He smiled right at me! My mind is a complete mess, I\'m literally glitching!', trans: '他剛剛直直看著我笑了！我的腦子徹底當機了，真的短路了！' }
            ]
          }
        }
      }
    }
  ]
};
