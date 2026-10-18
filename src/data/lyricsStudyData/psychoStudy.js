// BABYMONSTER - 《PSYCHO》 韓英雙語 Trap 深度研習資料包
// 本曲為 BABYMONSTER 帥氣暗黑風 Trap 代表作！
// 特色：韓國國民級俗諺「빈 수레가 요란하다（空車喧囂 / 虛張聲勢）」、猛獸比喻修辭、Trap 頓挫 Flow

export const PSYCHO_STUDY_DATA = {
  id: 'psycho',
  title: 'PSYCHO',
  artist: 'BABYMONSTER',
  album: '第二張迷你專輯《WE GO UP》',
  year: '2025',
  youtubeId: 'yd_uG3TtREs',
  altYoutubeIds: ['yd_uG3TtREs'],
  sentences: [
    {
      id: 'psy-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:09',
      timeSec: 9.0,
      korean: '너는 너무 말이 많아, 빈 수레가 요란할 뿐',
      text: '너는 너무 말이 많아, 빈 수레가 요란할 뿐',
      romanization: 'Neo-neun neo-mu mal-i man-a, bin su-re-ga yo-ran-hal ppun',
      naturalTranslation: '你話未免也太多了，不過是空無一物的馬車在那虛張聲勢、叮噹隆隆作響罷了！',
      pillChips: [
        {
          id: 'pp1',
          text: '말이 많아',
          rom: 'mal-i man-a',
          type: 'idiom-collocation',
          typeLabel: '話多 / 饒舌多嘴慣用語',
          lemma: '말(이) 많다',
          meaning: '廢話連篇 / 說得天花亂墜',
          explanation: '名詞「말（話語）」+ 形容詞「많다（多）」，常用於諷刺只會動嘴皮子卻缺乏真才實學的人。'
        },
        {
          id: 'pp2',
          text: '빈 수레가 요란할 뿐',
          rom: 'bin su-re-ga yo-ran-hal ppun',
          type: 'korean-proverb',
          typeLabel: '韓國經典成語俗諺',
          lemma: '빈 수레가 요란하다 + -(으)ㄹ 뿐',
          meaning: '空車隆隆響 / 半瓶水響叮噹 / 虛張聲勢',
          explanation: '韓國極其著名的成語俗諺！裝滿貨物的推車前行安靜沉穩，只有肚子裡空空如也的空車（빈 수레）才會一路發出巨大喧鬧聲（요란하다）。加上「-(으)ㄹ 뿐（只不過是…罷了）」，極致精妙！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '過度評價主謂句 (너는 너무 말이 많아) + 經典俗諺限制句 (빈 수레가 요란할 뿐)',
          tokens: [
            { term: '너는', role: '主格代名詞', desc: '你。' },
            { term: '너무', role: '程度副詞', desc: '過分、太。' },
            { term: '빈 수레', role: '冠形詞修飾名詞', desc: '空車、肚裡無貨者。' },
            { term: '요란하다', role: '形容詞謂語', desc: '喧囂吵鬧。' },
            { term: '-(으)ㄹ 뿐', role: '限定依存名詞語尾', desc: '只不過是...罷了。' }
          ]
        },
        pronunciation: {
          actualSound: '[너는 너무 마리 마나, 빈 수레가 요란할 뿐]',
          singingTips: '「말이」連音為 [마리]，「많아」連音為 [마나]（ㅎ脫落），「요란할 뿐」的 뿐 為硬音（緊音），咬字要清脆諷刺！',
          rules: [
            {
              title: '連音與 ㅎ 脫落綜合規則',
              badge: '重要發音技巧',
              detail: '「많아」中收音 ㄶ 遇到初聲 ㅇ 時，ㅎ 脫落，收音 ㄴ 移至後方初聲，發音為 [마나] (ma-na)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '一針見血非敬語 (Sharp Wit / Pan-mal)',
              badge: '辛辣打臉',
              form: '너는 너무 말이 많아, 빈 수레가 요란할 뿐이야.',
              scene: '面對吹牛說大話的對手，一語道破其虛張聲勢本質'
            },
            {
              name: '委婉哲理建言 (Polite / 해요체)',
              badge: '為人處世',
              form: '빈 수레가 요란하다는 말처럼, 행동으로 보여주는 게 더 중요해요.',
              scene: '勸導同仁多做實事少誇誇其談'
            }
          ],
          realLifeExample: {
            scenario: '競爭對手在賽前不斷放話挑釁',
            dialogue: [
              { speaker: 'Opponent', text: 'You guys don\'t stand a chance against my genius strategy!', trans: '你們在我的天才策略面前根本毫無勝算！' },
              { speaker: 'You', text: '말이 너무 많네. 빈 수레가 요란할 뿐이야. 결과로 보자.', trans: '話真多。空車才會響叮噹，我們賽場結果見真章。' }
            ]
          }
        }
      }
    },
    {
      id: 'psy-ko-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:20',
      timeSec: 20.0,
      korean: '난 치타처럼 달려 나가, 독수리처럼 날아올라',
      text: '난 치타처럼 달려 나가, 독수리처럼 날아올라',
      romanization: 'Nan chi-ta-cheo-reom dal-ryeo na-ga, dok-su-ri-cheo-reom nal-a-ol-ra',
      naturalTranslation: '我如獵豹般迅捷疾馳而出，宛如雄鷹般展翅翱翔天際！',
      pillChips: [
        {
          id: 'pp3',
          text: '치타처럼',
          rom: 'chi-ta-cheo-reom',
          type: 'simile-particle',
          typeLabel: '名詞 + 助詞比喻',
          lemma: '치타 + -처럼',
          meaning: '如同獵豹一般',
          explanation: '「치타（獵豹）」+「-처럼（如同）」，象徵地面上的極致奔馳速度與捕獵爆發力。'
        },
        {
          id: 'pp4',
          text: '달려 나가',
          rom: 'dal-ryeo na-ga',
          type: 'compound-verb',
          typeLabel: '複合運動動詞',
          lemma: '달리다 + -어 나가다',
          meaning: '疾馳而出 / 飛奔出去',
          explanation: '動詞「달리다（奔跑）」+「나가다（向外走出）」，充滿衝破障礙的動態視覺感。'
        },
        {
          id: 'pp5',
          text: '독수리처럼',
          rom: 'dok-su-ri-cheo-reom',
          type: 'simile-particle',
          typeLabel: '名詞 + 助詞比喻',
          lemma: '독수리 + -처럼',
          meaning: '宛如雄鷹一般',
          explanation: '「독수리（禿鷹/雕鷹）」象徵制霸天空的強大翼展與居高臨下。'
        },
        {
          id: 'pp6',
          text: '날아올라',
          rom: 'nal-a-ol-ra',
          type: 'compound-verb',
          typeLabel: '複合上升動詞',
          lemma: '날다 + -아 오르다',
          meaning: '展翅翱翔上升',
          explanation: '動詞「날다（飛）」+「오르다（攀升）」，展現陸空兼備的王者魄力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '陸空對仗排比句 ([Noun]-처럼 [Action Verb 1], [Noun]-처럼 [Action Verb 2])',
          tokens: [
            { term: '치타 / 독수리', role: '名詞比喻本體', desc: '陸地最速與天空霸主。' },
            { term: '-처럼', role: '比況格助詞', desc: '如同、像...一樣。' },
            { term: '달려 나가다', role: '複合動詞 1', desc: '向前衝刺。' },
            { term: '날아오르다', role: '複合動詞 2', desc: '騰空翱翔。' }
          ]
        },
        pronunciation: {
          actualSound: '[난 치타처럼 달려 나가, 독수리처럼 나라올라]',
          singingTips: '「날아올라」發生標準連音化，發音為 [나라올라] (na-ra-ol-ra)，節奏充滿獵殺敏銳度。',
          rules: [
            {
              title: '平滑連音化 (Liaison / 연음화)',
              badge: '韓語基礎發音',
              detail: '「날아」中收音 ㄹ 移至後方初聲 ㅇ，發音為 [나라] (na-ra)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極限進擊宣言',
              badge: '銳不可當',
              form: '난 치타처럼 달려 나가, 독수리처럼 날아올라.',
              scene: '面對激烈競技或重大舞台，展現無與倫比的突破決心'
            }
          ],
          realLifeExample: {
            scenario: '體能訓練或接力賽前隊員自我動員',
            dialogue: [
              { speaker: 'Athlete A', text: '트랙 위에 서니까 심장이 터질 것 같아!', trans: '站在跑道上，心臟簡直快要跳出來了！' },
              { speaker: 'Athlete B', text: '치타처럼 달리고 독수리처럼 날아오르자! 우린 해낼 수 있어!', trans: '像獵豹一樣衝刺、像雄鷹一樣起飛吧！我們絕對能做到！' }
            ]
          }
        }
      }
    }
  ]
};
