// BABYMONSTER - 《BILLIONAIRE》 全英語 Y2K 嘻哈深度研習資料包
// 本曲為 100% 全英文時髦甜酷嘻哈！
// 特色：非物質財富自信俚語、現代美式口語文法、AAVE 習慣用法、語域對比

export const BILLIONAIRE_STUDY_DATA = {
  id: 'billionaire',
  title: 'BILLIONAIRE',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: 'Gz_yRl6703c',
  altYoutubeIds: ['bV4r2xP0w1A'],
  sentences: [
    {
      id: 'bil-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:15',
      timeSec: 15.6,
      korean: 'Something click it’s a state of mind, Type of rich can’t be quantified',
      text: 'Something click it’s a state of mind, Type of rich can’t be quantified',
      romanization: '/ˈsʌmθɪŋ klɪk ɪts ə steɪt əv maɪnd taɪp əv rɪtʃ kænt biː ˈkwɑːntɪfaɪd/',
      naturalTranslation: '靈光猛然乍現，這是一種無與倫比的心境格局；這種心靈的富足傲氣，根本無法用金錢數字來衡量！',
      pillChips: [
        {
          id: 'bp1',
          text: 'Something click',
          rom: '/ˈsʌmθɪŋ klɪk/',
          type: 'idiom-insight',
          typeLabel: '領悟頓悟成語',
          lemma: 'something clicks',
          meaning: '靈光一閃 / 茅塞頓開',
          explanation: '名詞 + 動詞片語，形容某個瞬間突然想通了一切、開竅領悟出至理。'
        },
        {
          id: 'bp2',
          text: 'state of mind',
          rom: '/steɪt əv maɪnd/',
          type: 'psychology-noun',
          typeLabel: '心理境界名詞',
          lemma: 'state of mind',
          meaning: '精神格局 / 心靈境界',
          explanation: '形容真正的億萬富翁並非只看銀行存款，而是源於自信自律、從容大度的王者格局。'
        },
        {
          id: 'bp3',
          text: 'can’t be quantified',
          rom: '/kænt biː ˈkwɑːntɪfaɪd/',
          type: 'passive-advanced',
          typeLabel: '高階被動片語',
          lemma: 'quantify',
          meaning: '無法量化計算',
          explanation: '動詞「quantify（量化）」，強調自我價值超越一切凡俗定價。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '獨立無連詞感悟句 (Something click, it\'s a state of mind) + 省略關係代名詞的被動句 ([The] type of rich [that] can\'t be quantified)',
          tokens: [
            { term: 'Something click', role: '頓悟主謂', desc: '靈光猛然契合。' },
            { term: 'state of mind', role: '名詞補語', desc: '內心精神境界。' },
            { term: 'type of rich', role: '名詞短語', desc: '某種富足形態。' },
            { term: 'quantify', role: '被動及物謂語', desc: '用數字評估度量。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˈsʌmθɪŋ klɪk ɪts ə steɪt əv maɪnd taɪp əv rɪtʃ kænt biː ˈkwɑːntəfaɪd]',
          singingTips: 'mind 與 quantified 尾音押長雙元音 /aɪnd/ 與 /aɪd/，節奏瀟灑鬆弛。',
          rules: [
            {
              title: '雙元音尾韻押韻 (Assonance Flow)',
              badge: '嘻哈Flow',
              detail: 'state of mind 的 /aɪnd/ 與 quantified 的 /aɪd/ 構成清脆順口的押韻。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極致自信宣言 (Unstoppable Confidence)',
              badge: '名媛氣場',
              form: 'True wealth is a state of mind that money can never buy.',
              scene: '展現精神高度與從容氣度'
            }
          ],
          realLifeExample: {
            scenario: '面對只看身價標籤的世俗眼光，展現自我精神價值',
            dialogue: [
              { speaker: 'Critic', text: 'How do you measure your success?', trans: '你用什麼來衡量你的成功？' },
              { speaker: 'You', text: 'It\'s a state of mind. My peace and confidence can\'t be quantified.', trans: '這是一種精神格局。我內心的平靜與自信，是永遠無法被數字量化的。' }
            ]
          }
        }
      }
    },
    {
      id: 'bil-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:19',
      timeSec: 19.9,
      korean: 'And it ain’t my fault if you not trying to match my mood, Sorry but that’s on you',
      text: 'And it ain’t my fault if you not trying to match my mood, Sorry but that’s on you',
      romanization: '/ənd ɪt eɪnt maɪ fɔːlt ɪf juː nɑːt ˈtraɪɪŋ tə mætʃ maɪ muːd ˈsɑːri bət ðæts ɑːn juː/',
      naturalTranslation: '如果你跟不上我的高昂氣場與節奏，那可怪不得我，不好意思，那完全是你自己的問題！',
      pillChips: [
        {
          id: 'bp4',
          text: 'ain’t my fault',
          rom: '/eɪnt maɪ fɔːlt/',
          type: 'slang-idiom',
          typeLabel: '道地口語成語',
          lemma: 'it is not one\'s fault',
          meaning: '絕非我的過錯 / 怪不得我',
          explanation: 'ain\'t 是口語中最霸氣的否定助動詞，明確劃清責任邊界。'
        },
        {
          id: 'bp5',
          text: 'match my mood',
          rom: '/mætʃ maɪ muːd/',
          type: 'collocation-slang',
          typeLabel: '潮流氛圍搭配詞',
          lemma: 'match one\'s mood / energy',
          meaning: '匹配我的氣場與心境',
          explanation: '在流行文化中指頻率相同、能跟上同等高級的情緒與生活質感。'
        },
        {
          id: 'bp6',
          text: 'that’s on you',
          rom: '/ðæts ɑːn juː/',
          type: 'responsibility-idiom',
          typeLabel: '責任歸屬慣用語',
          lemma: 'that is on someone',
          meaning: '那是你自找的 / 後果你自己承擔',
          explanation: '美語高頻慣用語！「It\'s on you」代表「這是你自己的責任，與他人無關」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '否定主句 (And it ain\'t my fault) + 條件子句 (if you not trying...) + 果斷定論句 (Sorry but that\'s on you)',
          tokens: [
            { term: 'ain\'t', role: '口語縮寫', desc: '替代 is not。' },
            { term: 'match my mood', role: '動賓搭配', desc: '氣場同頻。' },
            { term: 'on you', role: '介系詞片語', desc: '由你全權負責。' }
          ]
        },
        pronunciation: {
          actualSound: '[ən ɪt eɪnt maɪ fɔːlt ɪf jə nɑːt ˈtraɪɪŋ tə mætʃ maɪ muːd ˈsɑːri bət ðæts ɑːn juː]',
          singingTips: 'mood 與 you 尾音押 /uː/ 韻，Sorry 帶著微諷笑意，氣質傲然。',
          rules: [
            {
              title: 'AAVE 省略 be 動詞現象',
              badge: '俚語語法',
              detail: '「if you not trying」口語中省略了 are，是道地嘻哈與流行歌詞的常見語法。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '瀟灑自信界限 (Confident Boundaries)',
              badge: '清晰邊界',
              form: 'If you can\'t match my energy, that\'s entirely on you.',
              scene: '面對跟不上自己前進步伐的抱怨者'
            }
          ],
          realLifeExample: {
            scenario: '朋友抱怨活動氣氛太熱血自己跟不上',
            dialogue: [
              { speaker: 'Friend', text: 'You guys are moving too fast for me!', trans: '你們節奏也太快了吧，我快跟不上了！' },
              { speaker: 'You', text: 'We brought the high energy! If you can\'t match the mood, that\'s on you.', trans: '我們全員頂滿了狀態！如果你跟不上這波節奏，那可只能怪你自己囉。' }
            ]
          }
        }
      }
    }
  ]
};
