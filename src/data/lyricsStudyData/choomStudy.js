// BABYMONSTER - 《CHOOM (춤)》 韓語電子舞曲深度研習資料包
// 本曲為 BABYMONSTER 炸裂的電子洗腦舞曲主打！
// 特色：韓國成語「찍 소리 못하다（大氣不敢出一聲）」、星期名詞口訣、舞池派對語氣

export const CHOOM_STUDY_DATA = {
  id: 'choom',
  title: 'CHOOM (춤)',
  artist: 'BABYMONSTER',
  album: '第三張迷你專輯《춤 (CHOOM)》',
  year: '2026',
  youtubeId: 'x3eqqoZPV_E',
  altYoutubeIds: ['x3eqqoZPV_E'],
  sentences: [
    {
      id: 'ch-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:56',
      timeSec: 116.7,
      korean: '모두가 찍 소리 못하는 Groove, 이 구역에 난 I’m a MONSTER queen',
      text: '모두가 찍 소리 못하는 Groove, 이 구역에 난 I’m a MONSTER queen',
      romanization: 'Mo-du-ga jjik so-ri mot-ha-neun Groove, i gu-yeok-e nan I\'m a MONSTER queen',
      naturalTranslation: '讓所有人全都驚呆到大氣不敢出一聲的極致律動，在這片領域裡，我就是至高無上的怪獸女王！',
      pillChips: [
        {
          id: 'cp1',
          text: '찍 소리 못하는',
          rom: 'jjik so-ri mot-ha-neun',
          type: 'korean-idiom-modifier',
          typeLabel: '韓國經典成語定語',
          lemma: '찍 소리(도) 못하다 + -는',
          meaning: '連大氣都不敢出一聲 / 啞口無言被震懾',
          explanation: '韓國極其道地的成語！「찍」指微小的吱聲，形容因對方氣場過於強大震撼，所有人嚇得或敬佩得連一絲雜音都不敢發出。'
        },
        {
          id: 'cp2',
          text: '이 구역에',
          rom: 'i gu-yeok-e',
          type: 'territory-noun-particle',
          typeLabel: '領地名詞 + 處所助詞',
          lemma: '이 구역 (此區域) + -에',
          meaning: '在這塊地盤領地之中',
          explanation: '象徵自己的統治範疇。'
        },
        {
          id: 'cp3',
          text: 'MONSTER queen',
          rom: '/ˈmɑːnstər kwiːn/',
          type: 'title-slang',
          typeLabel: '女王頭銜',
          lemma: 'Monster Queen',
          meaning: '怪獸女王 / 全場統治者',
          explanation: '展現制霸全場的絕對統治魄力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '定語修飾名詞 (모두가 찍 소리 못하는 Groove) + 空間宣告主謂句 (이 구역에 난 I\'m a MONSTER queen)',
          tokens: [
            { term: '모두가', role: '主格代名詞', desc: '所有人。' },
            { term: '찍 소리 못하다', role: '成語慣用語', desc: '嚇得屏息安靜。' },
            { term: '이 구역', role: '處所名詞', desc: '這片地盤。' },
            { term: 'MONSTER queen', role: '補語名詞', desc: '舞台女王。' }
          ]
        },
        pronunciation: {
          actualSound: '[모두가 씩 쏘리 모타는 Groove, 이 구여게 난 I\'m a MONSTER queen]',
          singingTips: '「못하는」發生激音化，發音為 [모타는] (mo-ta-neun)；「찍 소리」緊音硬音噴發有力！',
          rules: [
            {
              title: '激音化現象 (Aspiration / 격음화)',
              badge: '韓語重要音變',
              detail: '收音 ㄷ (ㅅ代表音) 遇到初聲 ㅎ 時，結合轉變為激音 ㅌ，讀作 [모타는] (mo-ta-neun)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台女王氣場 (Queen Stage Presence)',
              badge: '絕對氣場',
              form: '이 무대 위에서 나를 막을 자는 아무도 없어.',
              scene: '舞台掌控全場的傲人宣示'
            }
          ],
          realLifeExample: {
            scenario: '街舞 Battle 比賽拔得頭籌後的喝采',
            dialogue: [
              { speaker: 'Audience', text: '그 춤을 보고 다들 숨도 못 쉬었어!', trans: '看完剛才那段舞，大家連呼吸都不敢大聲！' },
              { speaker: 'Dancer', text: '모두가 찍 소리 못하는 그루브였지? 다음 라운드도 기대해!', trans: '就是讓所有人都屏息的節奏吧？下一輪更精彩！' }
            ]
          }
        }
      }
    }
  ]
};
