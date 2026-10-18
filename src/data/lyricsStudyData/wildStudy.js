// BABYMONSTER - 《WILD》 韓英雙語狂野女力深度研習資料包
// 本曲為 BABYMONSTER 帥氣狂野的女力代表作！
// 特色：韓國俗諺「사람은 쉽게 안 변해（江山易改本性難移）」、隨心所欲語法、星光花朵意象

export const WILD_STUDY_DATA = {
  id: 'wild',
  title: 'WILD',
  artist: 'BABYMONSTER',
  album: '第二張迷你專輯《WE GO UP》',
  year: '2025',
  youtubeId: 'PdB0EBaWKEk',
  altYoutubeIds: ['PdB0EBaWKEk'],
  sentences: [
    {
      id: 'wild-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:10',
      timeSec: 10.3,
      korean: '사람은 쉽게 안 변해, Don\'t need a hero, get outta my way, 마음 가는 대로',
      text: '사람은 쉽게 안 변해, Don\'t need a hero, get outta my way, 마음 가는 대로',
      romanization: 'Sa-ram-eun swip-ge an byeon-hae, Don\'t need a hero, get outta my way, ma-eum ga-neun dae-ro',
      naturalTranslation: '江山易改本性難移，我本就狂野無畏！不需要任何救世英雄，統統給我閃開，我偏要隨心所欲主宰自己的人生！',
      pillChips: [
        {
          id: 'wp1',
          text: '사람은 쉽게 안 변해',
          rom: 'sa-ram-eun swip-ge an byeon-hae',
          type: 'korean-proverb-phrase',
          typeLabel: '韓國經典日常俗語',
          lemma: '사람은 쉽게 변하지 않는다',
          meaning: '江山易改本性難移 / 人很難輕易改變',
          explanation: '表達對自我狂野本色的堅持與自豪，絕不會為了迎合外界而磨平稜角。'
        },
        {
          id: 'wp2',
          text: 'Don\'t need a hero',
          rom: '/doʊnt niːd ə ˈhɪroʊ/',
          type: 'english-empowerment',
          typeLabel: '獨立自主宣言',
          lemma: 'do not need a hero',
          meaning: '不需要等待救世英雄',
          explanation: '自己就是自己的救世主，打破傳統等待被拯救的刻板印象。'
        },
        {
          id: 'wp3',
          text: '마음 가는 대로',
          rom: 'ma-eum ga-neun dae-ro',
          type: 'korean-idiom-grammar',
          typeLabel: '心之所向 / 隨心所欲語尾',
          lemma: '마음이 가다 + -는 대로',
          meaning: '隨心所欲 / 順從自己心之所向',
          explanation: '「마음이 가다（心意所屬）」加上依存名詞「-대로（照著…）」，指完全遵循內心真實直覺行事。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '否定客觀陳述句 (사람은 쉽게 안 변해) + 英文祈使獨立句 (Don\'t need a hero, get outta my way) + 心意引導狀語 (마음 가는 대로)',
          tokens: [
            { term: '사람은', role: '主格主題', desc: '人。' },
            { term: '쉽게', role: '程度副詞', desc: '容易地。' },
            { term: '안 변해', role: '短型否定謂語', desc: '不會改變。' },
            { term: '-는 대로', role: '依循語尾', desc: '照著心意。' }
          ]
        },
        pronunciation: {
          actualSound: '[사라믄 쉽께 안 변해, Don\'t need a hero, get outta my way, 마음 가는 대로]',
          singingTips: '「쉽게」硬音化讀為 [쉽께]，「get outta」美式發音同化為 [ɡɛt-aʊ-tə]，語氣狂野不羈！',
          rules: [
            {
              title: '收音 ㅂ 引起的硬音化 (Fortis)',
              badge: '韓語音變',
              detail: '收音 ㅂ 遇到初聲 ㄱ 時，ㄱ 變成緊音 ㄲ，因此「쉽게」發音為 [쉽께] (swip-kke)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '狂野無畏宣言 (Wild Autonomy)',
              badge: '狂野女力',
              form: 'I don\'t need anyone to save me; I follow my own wild instincts.',
              scene: '甩開世俗框架，做最真實獨立的自己'
            }
          ],
          realLifeExample: {
            scenario: '面對長輩勸自己要學會妥協聽話',
            dialogue: [
              { speaker: 'Senior', text: 'You need to fit into society\'s expectations.', trans: '你得學會順從社會的期望才行。' },
              { speaker: 'You', text: '사람은 쉽게 안 변해요. 마음 가는 대로 제 길을 갈게요.', trans: '本性是很難輕易改變的。我會依照我心之所向，走出自己的路。' }
            ]
          }
        }
      }
    }
  ]
};
