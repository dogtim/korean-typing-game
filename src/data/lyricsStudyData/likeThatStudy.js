// BABYMONSTER - 《LIKE THAT》 全英語靈魂流行深度研習資料包
// 本曲由 Charlie Puth 特別為 BABYMONSTER 量身打造，為 100% 全英文時髦 R&B / Pop 名作！
// 特色：全英文時髦流行語法、調情心理學成語、高階雙關韻腳、優雅自信語域對比

export const LIKE_THAT_STUDY_DATA = {
  id: 'like-that',
  title: 'LIKE THAT',
  artist: 'BABYMONSTER',
  album: '首張迷你專輯《BABYMONS7ER》',
  year: '2024',
  youtubeId: 'M8r3x4Re8-I',
  altYoutubeIds: ['tHqW3w1U9_Y'],
  sentences: [
    {
      id: 'lt-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:09',
      timeSec: 9.6,
      korean: 'I see that look upon your face, something my mind cannot erase',
      text: 'I see that look upon your face, something my mind cannot erase',
      romanization: '/aɪ siː ðæt lʊk əˈpɑːn jʊər feɪs ˈsʌmθɪŋ maɪ maɪnd ˈkænɑːt ɪˈreɪs/',
      naturalTranslation: '我看見你臉上那耐人尋味的眼神，那是我腦海中揮之不去的深刻印記。',
      pillChips: [
        {
          id: 'lp1',
          text: 'that look upon your face',
          rom: '/ðæt lʊk əˈpɑːn jʊər feɪs/',
          type: 'idiom-collocation',
          typeLabel: '神情描寫成語片語',
          lemma: 'a look upon one\'s face',
          meaning: '臉上的神情氣色 / 耐人尋味的眼神',
          explanation: '名詞「look」在此指神情、神態，「upon」為雅緻介系詞，形容彼此眼神交會時那抹藏不住心思的微妙表情。'
        },
        {
          id: 'lp2',
          text: 'cannot erase',
          rom: '/ˈkænɑːt ɪˈreɪs/',
          type: 'verb-metaphor',
          typeLabel: '隱喻能力否定動詞',
          lemma: 'erase',
          meaning: '無法抹滅 / 難以忘懷',
          explanation: '動詞「erase（擦拭/清除）」，在愛情中象徵心頭烙下的深深烙印，揮之不去。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主詞動詞受詞 (I see that look...) + 同位語補充說明子句 (something my mind cannot erase)',
          tokens: [
            { term: 'I see', role: '主謂', desc: '敏銳捕捉信號。' },
            { term: 'that look', role: '名詞受詞', desc: '眼神氣色。' },
            { term: 'cannot erase', role: '定語否定謂語', desc: '難以抹去。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪ siː ðæt lʊk əˈpɑːn jər feɪs ˈsʌmθɪŋ maɪ maɪnd ˈkænɑːt ɪˈreɪs]',
          singingTips: 'face 與 erase 完美押尾韻 /eɪs/，優雅輕柔，氣聲貼耳。',
          rules: [
            {
              title: '長元音尾韻押韻 (End Rhyme in Pop)',
              badge: '流行韻律',
              detail: 'face 與 erase 的尾韻 /eɪs/ 營造出流暢浪漫的節奏感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '曖昧心動 (Romantic Allure)',
              badge: '調情信號',
              form: 'I see that look upon your face; I can\'t get you out of my mind.',
              scene: '與心儀對象眼神相撞時的悸動'
            }
          ],
          realLifeExample: {
            scenario: '派對上一對互相吸引的男女隔著舞池相視而笑',
            dialogue: [
              { speaker: 'She', text: 'Why are you smiling at me like that?', trans: '你幹嘛那樣看著我笑？' },
              { speaker: 'He', text: 'I see that look upon your face, and I just had to come talk to you.', trans: '我看懂了你眼神裡的信號，忍不住就想走過來和你說話。' }
            ]
          }
        }
      }
    },
    {
      id: 'lt-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:37',
      timeSec: 37.3,
      korean: 'If I come close baby would you like that? If I give some would you give it right back?',
      text: 'If I come close baby would you like that? If I give some would you give it right back?',
      romanization: '/ɪf aɪ kʌm kloʊs ˈbeɪbi wʊd juː laɪk ðæt ɪf aɪ ɡɪv sʌm wʊd juː ɡɪv ɪt raɪt bæk/',
      naturalTranslation: '若我步步逼近，親愛的你會喜歡嗎？若我向你傾注心意，你會毫無保留同樣回應我嗎？',
      pillChips: [
        {
          id: 'lp3',
          text: 'come close',
          rom: '/kʌm kloʊs/',
          type: 'action-phrasal',
          typeLabel: '動作片語',
          lemma: 'come close',
          meaning: '靠近 / 步步逼近',
          explanation: '表達物理距離與心理距離的雙重拉近，大膽而自信的主動信號。'
        },
        {
          id: 'lp4',
          text: 'give it right back',
          rom: '/ɡɪv ɪt raɪt bæk/',
          type: 'idiom-reciprocity',
          typeLabel: '互惠回饋慣用語',
          lemma: 'give back + right',
          meaning: '當場同等回饋 / 投桃報李反饋',
          explanation: '「right back」強調即時性與對等性，要求彼此情感投入勢均力敵、雙向奔赴。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '第二條件假想虛擬句 (If I [Past/Present Subjunctive]... would you [Base Verb])',
          tokens: [
            { term: 'If I come close', role: '條件假設子句', desc: '試探彼此邊界。' },
            { term: 'would you like that', role: '情態疑問主句', desc: '委婉而具誘惑力的詢問。' },
            { term: 'give it right back', role: '互惠動詞片語', desc: '同等回贈。' }
          ]
        },
        pronunciation: {
          actualSound: '[ɪf aɪ kʌm kloʊs ˈbeɪbi wʊd juː laɪk ðæt ɪf aɪ ɡɪv sʌm wʊd juː ɡɪv ɪt raɪt bæk]',
          singingTips: 'that 與 back 形成標誌性的 /æt/ 與 /æk/ 內押韻，Charlie Puth 招牌輕快節奏切分音。',
          rules: [
            {
              title: '切分音節奏 (Syncopation Rhythm)',
              badge: '流行唱腔',
              detail: '重音落在 like that 與 right back 的結尾動詞上，充滿自信俏皮感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '自信調情 (Confident Flirtation)',
              badge: '魅力直球',
              form: 'If I come close, would you like that? Are you ready to match my energy?',
              scene: '自信滿滿的現代戀愛直球互動'
            }
          ],
          realLifeExample: {
            scenario: '兩位互相欣賞的舞者在排練室試探默契',
            dialogue: [
              { speaker: 'Dancer A', text: 'Are you sure you can match this choreography?', trans: '你確定你能跟得上這段編舞的節奏嗎？' },
              { speaker: 'Dancer B', text: 'If you bring the heat, I\'ll give it right back. Let\'s see what you\'ve got.', trans: '只要你放馬過來，我就同等奉還，來瞧瞧你的實力吧。' }
            ]
          }
        }
      }
    }
  ]
};
