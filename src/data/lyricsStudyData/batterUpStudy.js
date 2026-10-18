// BABYMONSTER - 《BATTER UP》 韓英雙語深度研習資料包
// 本曲為 BABYMONSTER 震撼全球的出道霸氣代表作！
// 特色：棒球術語引申成語、拳王阿里名言、自主決策霸氣文法、送氣音與舞台強烈節奏

export const BATTER_UP_STUDY_DATA = {
  id: 'batter-up',
  title: 'BATTER UP',
  artist: 'BABYMONSTER',
  album: '數位單曲《BATTER UP》',
  year: '2023',
  youtubeId: 'olDWm2veCrM',
  altYoutubeIds: ['olDWb98mD7c', 'wXjWn5z9V_Y'],
  sentences: [
    {
      id: 'bu-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:17',
      timeSec: 17.7,
      korean: 'I’m on a mission, don’t need permission, no matter what I’m gonna make my own decisions',
      text: 'I’m on a mission, don’t need permission, no matter what I’m gonna make my own decisions',
      romanization: '/aɪm ɑːn ə ˈmɪʃn doʊnt niːd pərˈmɪʃn noʊ ˈmætər wʌt aɪm ˈɡənə meɪk maɪ oʊn dɪˈsɪʒnz/',
      naturalTranslation: '我正肩負著重大使命，無須任何人的恩准許可，無論前路如何，我終將自己做主掌握命運！',
      pillChips: [
        {
          id: 'bp1',
          text: 'on a mission',
          rom: '/ɑːn ə ˈmɪʃn/',
          type: 'idiom-collocation',
          typeLabel: '目標使命成語',
          lemma: 'be on a mission',
          meaning: '肩負重大使命 / 目標堅定不移',
          explanation: '形容一個人專注致志於自己的理想或任務，任何外界干擾都無法動搖。'
        },
        {
          id: 'bp2',
          text: 'don’t need permission',
          rom: '/doʊnt niːd pərˈmɪʃn/',
          type: 'verb-object',
          typeLabel: '獨立自主宣告',
          lemma: 'need permission',
          meaning: '不需要他人准許',
          explanation: '表達自我賦權（Empowerment），不再受制於體制或他人的眼光評價。'
        },
        {
          id: 'bp3',
          text: 'make my own decisions',
          rom: '/meɪk maɪ oʊn dɪˈsɪʒnz/',
          type: 'idiom-agency',
          typeLabel: '自主決策成語',
          lemma: 'make one\'s own decision',
          meaning: '自己的命運自己作主',
          explanation: '強調人生的主導權掌握在自己手中。mission、permission 與 decisions 形成強大的三連押韻。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '三連押韻對仗句 (on a mission / no permission / my own decisions) + 讓步副詞子句 (no matter what)',
          tokens: [
            { term: 'on a mission', role: '介系詞表狀態', desc: '全神貫注執行。' },
            { term: 'no matter what', role: '讓步狀語', desc: '無論發生什麼狀況。' },
            { term: 'make decisions', role: '動賓固定搭配', desc: '做決定。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪm ɑːn ə ˈmɪʃn doʊn niːd pərˈmɪʃn noʊ ˈmætər wʌt aɪm ˈɡənə meɪk maɪ oʊn dɪˈsɪʒnz]',
          singingTips: 'mission、permission、decisions 押 /ɪʃn/ 韻，節奏感鏗鏘有力，重音分明。',
          rules: [
            {
              title: '三重尾韻押韻 (Triple Rhyme in Hip-Hop)',
              badge: 'Rap技巧',
              detail: 'mission, permission, decisions 連續三押，是現代流行音樂最強調自主態度的經典 Hook。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '自主無畏霸氣 (Bold Independence)',
              badge: '女力宣言',
              form: 'I\'m on a mission, and I make my own decisions.',
              scene: '面對質疑時，自信堅定宣示自己的事業規劃'
            }
          ],
          realLifeExample: {
            scenario: '面對親友對自己勇敢追夢的質疑',
            dialogue: [
              { speaker: 'Relative', text: 'Are you sure you don\'t want a conventional job?', trans: '你確定不要一份穩定的傳統工作嗎？' },
              { speaker: 'You', text: 'I\'m on a mission. I know exactly what I\'m capable of, and I make my own decisions.', trans: '我有我肩負的夢想與使命。我清楚知道自己的能耐，我的未來由我自己做主。' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:34',
      timeSec: 34.2,
      korean: 'Sting like a bee, 굶주린 사자 같은 personality',
      text: 'Sting like a bee, 굶주린 사자 같은 personality',
      romanization: 'Sting like a bee, gum-ju-rin sa-ja ga-teun personality',
      naturalTranslation: '如蜜蜂般出刺快狠準，宛如飢腸轆轆的雄獅般狂傲兇猛的王者氣魄！',
      pillChips: [
        {
          id: 'bp4',
          text: 'Sting like a bee',
          rom: '/stɪŋ laɪk ə biː/',
          type: 'proverb-quote',
          typeLabel: '傳奇拳王阿里經典名言',
          lemma: 'Float like a butterfly, sting like a bee',
          meaning: '如蜜蜂般迅猛蜇刺 / 出擊快狠準',
          explanation: '拳王穆罕默德·阿里（Muhammad Ali）最著名的格言！象徵出手疾如閃電、一擊必殺的凌厲攻擊性。'
        },
        {
          id: 'bp5',
          text: '굶주린 사자',
          rom: 'gum-ju-rin sa-ja',
          type: 'noun-modifier',
          typeLabel: '動詞過去定語 + 名詞',
          lemma: '굶주리다 + -(으)ㄴ + 사자',
          meaning: '飢餓的雄獅 / 飢渴野性的獅群',
          explanation: '動詞「굶주리다（受飢渴所迫）」修飾「사자（獅子）」，形容對舞台與成功有著無止境渴望的野獸霸氣。'
        },
        {
          id: 'bp6',
          text: '같은',
          rom: 'ga-teun',
          type: 'particle-adjective',
          typeLabel: '形容詞性修飾語 (比喻)',
          lemma: '같다 + -(으)ㄴ',
          meaning: '如…一般的',
          explanation: '接在體言名詞後，表示形象上的生動比喻。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文名言插入 (Sting like a bee) + 韓語定語修飾結構 (굶주린 사자 같은) + 英文名詞 (personality)',
          tokens: [
            { term: 'Sting like a bee', role: '引語隱喻', desc: '拳王出擊致命一擊。' },
            { term: '굶주리다', role: '動詞幹', desc: '對勝利無比飢渴。' },
            { term: '사자', role: '名詞', desc: '萬獸之王獅子。' },
            { term: '같은', role: '比喻冠形詞', desc: '如...一般的。' }
          ]
        },
        pronunciation: {
          actualSound: '[Sting like a bee, 굼주린 사자 가튼 personality]',
          singingTips: '「굶주린」的雙收音 ㄻ 遇到子音時只發 ㅁ 音，因此發音為 [굼주린]；bee 與 personality 形成雙語韻腳。',
          rules: [
            {
              title: '雙收音簡化規則 (Consonant Cluster Simplification)',
              badge: '韓語收音規則',
              detail: '雙收音 ㄻ 在後方遇到初聲子音 ㅈ 時，脫落 ㄹ 只讀 ㅁ，因此讀成 [굼주린] (gum-ju-rin)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台王者狂言',
              badge: '霸氣破表',
              form: 'Sting like a bee, 굶주린 사자 같은 personality.',
              scene: '舞台開場宣告自己無所畏懼的強大野心'
            }
          ],
          realLifeExample: {
            scenario: '體育運動員或競技隊伍在總決賽前激勵隊友',
            dialogue: [
              { speaker: 'Captain', text: '상대팀 만만치 않아. 준비됐어?', trans: '對手實力不可小覷，大家準備好了嗎？' },
              { speaker: 'Player', text: '벌처럼 쏘고 사자처럼 물어뜯을 준비 끝났습니다!', trans: '早就準備好如蜜蜂般出刺快狠準、如雄獅般將對手徹底拿下了！' }
            ]
          }
        }
      }
    }
  ]
};
