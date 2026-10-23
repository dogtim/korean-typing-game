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
    },
    {
      id: 'psy-ko-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:27',
      timeSec: 27.3,
      korean: '알 수 없는 끝 향해 달려가자 꿈, 누가 뭐래도 I’mma do',
      text: '알 수 없는 끝 향해 달려가자 꿈, 누가 뭐래도 I’mma do',
      romanization: 'Al su eom-neun kkeut hyang-hae dal-lyeo-ga-ja kkum, nu-ga mwo-rae-do I’mma do',
      naturalTranslation: '朝著不可預測的終點奔向夢想，無論別人嚼什麼舌根，我都照做不誤！',
      pillChips: [
        {
          id: 'pp7',
          text: '알 수 없는',
          rom: 'al su eom-neun',
          type: 'grammar-modifier',
          typeLabel: '無法預知冠形詞',
          lemma: '알다 + -(으)ㄹ 수 없다 + -는',
          meaning: '無法預料的 / 不可知的',
          explanation: '表達未知的冒險與未來。'
        },
        {
          id: 'pp8',
          text: '누가 뭐래도',
          rom: 'nu-ga mwo-rae-do',
          type: 'korean-idiom-speech',
          typeLabel: '口語高頻讓步慣用語',
          lemma: '누가 뭐라고 해도',
          meaning: '不管別人怎麼說 / 無論旁人非議',
          explanation: '「누가 뭐라고 해도」的縮讀，堅定遵循自我內心信念。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '否定能力冠形句 (알 수 없는 끝) + 共動句 (달려가자) + 讓步句 (누가 뭐래도 I\'mma do)',
          tokens: [
            { term: '알 수 없다', role: '能力否定', desc: '無法知曉。' },
            { term: '향해', role: '副詞動詞', desc: '朝向。' },
            { term: '-자', role: '共動語尾', desc: '咱們一起吧。' },
            { term: 'I\'mma do', role: '英文堅定意圖', desc: '我偏要去做。' }
          ]
        },
        pronunciation: {
          actualSound: '[알 쑤 엄는 끋 향해 달려가자 꿈, 누가 뭐래도 아임마 두]',
          singingTips: '「알 수」緊音讀為 [알 쑤]，「없는」鼻音化為 [엄는]。',
          rules: [
            {
              title: '鼻音化現象 (비음화)',
              badge: '韓語音變',
              detail: '收音 ㅂ 遇初聲 ㄴ 變為 [ㅁ]，發音為 [엄는] (eom-neun)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '堅定追夢宣言',
              badge: '義無反顧',
              form: '누가 뭐라고 해도 내 꿈을 향해 달려갈 거예요.',
              scene: '面對長輩質疑時堅定捍衛自我選擇'
            }
          ],
          realLifeExample: {
            scenario: '決定辭職追尋藝術創作理想',
            dialogue: [
              { speaker: 'Parent', text: '그 길이 얼마나 힘든지 알고나 도전하는 거니?', trans: '你到底知不知道那條路走起來有多艱難？' },
              { speaker: 'You', text: '누가 뭐래도 제 꿈을 향해 갈게요. 지켜봐 주세요.', trans: '不管別人說什麼，我都要為自己的夢想奮鬥。請相信我。' }
            ]
          }
        }
      }
    },
    {
      id: 'psy-ko-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:44',
      timeSec: 44.1,
      korean: 'Every rose has a thorn, 우린 모두 Psycho, 누구나 똑같아 너나 나나',
      text: 'Every rose has a thorn, 우린 모두 Psycho, 누구나 똑같아 너나 나나',
      romanization: 'Every rose has a thorn, u-rin mo-du Psycho, nu-gu-na ttok-gat-a neo-na na-na',
      naturalTranslation: '帶刺的玫瑰才美麗，我們都是瘋子，這世上誰不是一樣，你我都沒差！',
      pillChips: [
        {
          id: 'pp9',
          text: 'Every rose has a thorn',
          rom: '/ˈɛvri roʊz hæz ə θɔːrn/',
          type: 'english-proverb',
          typeLabel: '西方經典名諺',
          lemma: 'every rose has a thorn',
          meaning: '玫瑰皆自帶鋒芒利刺',
          explanation: '美麗與鋒芒並存，每個人都有不可侵犯的個性稜角。'
        },
        {
          id: 'pp10',
          text: '너나 나나',
          rom: 'neo-na na-na',
          type: 'colloquial-balance',
          typeLabel: '對稱並列助詞片語',
          lemma: '너 + -(이)나 + 나 + -(이)나',
          meaning: '你和我彼此彼此 / 半斤八兩',
          explanation: '韓語極其地道的對等口語表達，打破高下之分。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文隱喻 (Every rose...) + 全稱主語句 (우린 모두 Psycho) + 泛稱對等句 (누구나 똑같아 너나 나나)',
          tokens: [
            { term: '우린 모두', role: '複數主語', desc: '我們大家全都。' },
            { term: '누구나', role: '不定代名詞', desc: '任誰都是。' },
            { term: '똑같다', role: '形容詞謂語', desc: '一模一樣。' },
            { term: '너나 나나', role: '對等助詞短語', desc: '你也是我也是。' }
          ]
        },
        pronunciation: {
          actualSound: '[에브리 로즈 해즈 어 쏜, 우린 모두 싸이코, 누구나 똑가타 너나 나나]',
          singingTips: '「똑같아」連音激音化為 [똑가타]，「너나 나나」彈性押韻。',
          rules: [
            {
              title: '收音 ㅌ 激音連音',
              badge: '韓語發音',
              detail: '收音 ㅌ 遇母音 ㅏ 直接連音，讀作 [똑가타] (ttok-ga-ta)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '坦然自處 (Acceptance)',
              badge: '破除標籤',
              form: '완벽한 사람은 없어요, 누구나 다 똑같죠.',
              scene: '安慰因小失誤感到焦慮的朋友'
            }
          ],
          realLifeExample: {
            scenario: '朋友為自己偶爾的情緒化感到自責',
            dialogue: [
              { speaker: 'Friend', text: '나 가끔 너무 예민한 것 같아서 힘들어...', trans: '我覺得自己有時太敏感神經質了，好心累…' },
              { speaker: 'You', text: '누구나 똑같아 너나 나나! 자연스러운 감정이야.', trans: '誰不都是這樣，你我都一樣！這是再自然不過的情感了。' }
            ]
          }
        }
      }
    },
    {
      id: 'psy-ko-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:53',
      timeSec: 53.6,
      korean: '서로 다른 Psycho, 모두 다 비정상 너나 나나, 조금 다른 Psycho',
      text: '서로 다른 Psycho, 모두 다 비정상 너나 나나, 조금 다른 Psycho',
      romanization: 'Seo-ro da-reun Psycho, mo-du da bi-jeong-sang neo-na na-na, jo-geum da-reun Psycho',
      naturalTranslation: '彼此瘋狂的維度不同罷了，人人都有點不正常，我們只是活得稍微與眾不同！',
      pillChips: [
        {
          id: 'pp11',
          text: '비정상',
          rom: 'bi-jeong-sang',
          type: 'hanja-noun',
          typeLabel: '漢字名詞 (非正常)',
          lemma: '비정상 (非正常)',
          meaning: '不正常 / 超脫常規',
          explanation: '在此並非貶義病理詞，而是指敢於打破平庸教條的獨特靈魂。'
        },
        {
          id: 'pp12',
          text: '조금 다른',
          rom: 'jo-geum da-reun',
          type: 'modifier-phrase',
          typeLabel: '程度副詞 + 冠形詞',
          lemma: '조금 + 다르다 + -ㄴ',
          meaning: '稍微有些與眾不同',
          explanation: '精妙地將「瘋狂」重新定義為「獨特、與眾不同」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '副詞冠形詞修飾 (서로 다른) + 泛指強調句 (모두 다 비정상) + 程度微調修飾 (조금 다른 Psycho)',
          tokens: [
            { term: '서로', role: '相互副詞', desc: '彼此。' },
            { term: '비정상', role: '名詞補語', desc: '非常規。' },
            { term: '조금', role: '程度副詞', desc: '略微。' }
          ]
        },
        pronunciation: {
          actualSound: '[서로 다른 싸이코, 모두 다 비정상 너나 나나, 조금 다른 싸이코]',
          singingTips: '비정상 的三字平滑吐出，接續緊咬 Psycho 硬音。',
          rules: [
            {
              title: '平舌音與外來語硬音',
              badge: '發音技巧',
              detail: 'Psycho 在韓語中自然硬音化讀作 [싸이코] (ssa-i-ko)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '包容多元 (Embrace Uniqueness)',
              badge: '擁抱不同',
              form: '우린 서로 조금씩 다를 뿐이에요.',
              scene: '肯定彼此個性的獨特與美麗'
            }
          ],
          realLifeExample: {
            scenario: '一群藝術家暢談各自奇特瘋狂的靈感',
            dialogue: [
              { speaker: 'Artist A', text: 'People always call our designs too crazy.', trans: '大家總說我們的設計太瘋狂了。' },
              { speaker: 'Artist B', text: '모두 다 조금 다른 매력인 거지! Wear it proudly.', trans: '大家只是稍微有點不一樣的魅力罷了！驕傲展現出來吧。' }
            ]
          }
        }
      }
    },
    {
      id: 'psy-ko-6',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:07',
      timeSec: 67.3,
      korean: '웃는 얼굴 뒤엔 Just a little psycho, 세상처럼 돌고 도는 우린 Psycho',
      text: '웃는 얼굴 뒤엔 Just a little psycho, 세상처럼 돌고 도는 우린 Psycho',
      romanization: 'Un-neun eol-gul dwi-en Just a little psycho, se-sang-cheo-reom dol-go do-neun u-rin Psycho',
      naturalTranslation: '在甜美笑靨背後藏著一點點反叛瘋狂，就像這瘋狂旋轉的世界，我們也是隨之起舞的狂者！',
      pillChips: [
        {
          id: 'pp13',
          text: '웃는 얼굴',
          rom: 'un-neun eol-gul',
          type: 'verb-modifier-noun',
          typeLabel: '冠形詞修飾名詞組',
          lemma: '웃다 + -는 + 얼굴',
          meaning: '微笑的面龐 / 笑臉',
          explanation: '動詞「웃다（笑）」修飾「얼굴」，收音 ㅅ 遇 ㄴ 發生鼻音化。'
        },
        {
          id: 'pp14',
          text: '돌고 도는',
          rom: 'dol-go do-neun',
          type: 'idiom-cycle',
          typeLabel: '循環往復動詞重疊',
          lemma: '돌고 돌다 + -는',
          meaning: '旋轉不休 / 世事輪迴',
          explanation: '形容世間天旋地轉、變幻莫測的循環律動。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '定語修飾空間狀語 (웃는 얼굴 뒤엔) + 雙語補語 + 比況循環句 (세상처럼 돌고 도는)',
          tokens: [
            { term: '웃는 얼굴', role: '冠形名詞', desc: '笑臉。' },
            { term: '뒤엔', role: '方位處格助詞', desc: '在...背後。' },
            { term: '세상처럼', role: '比況副詞短語', desc: '如同這世界。' },
            { term: '돌고 돌다', role: '慣用動詞', desc: '天旋地轉。' }
          ]
        },
        pronunciation: {
          actualSound: '[운는 얼굴 뒤엔 저스트 어 리틀 싸이코, 세상처럼 돌고 도는 우린 싸이코]',
          singingTips: '「웃는」發生標準鼻音化，發音為 [운는] (un-neun)。',
          rules: [
            {
              title: '收音 ㅅ 的鼻音化 (Nasalization)',
              badge: '韓語收音',
              detail: '收音 ㅅ 代表音 [ㄷ] 遇到初聲 ㄴ 時，轉為 [ㄴ]，讀作 [운는] (un-neun)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '反差魅力 (Hidden Edge)',
              badge: '反差萌',
              form: '웃는 얼굴 뒤에도 저만의 확고한 고집이 있어요.',
              scene: '向他人說明自己溫和外表下的堅毅與果決'
            }
          ],
          realLifeExample: {
            scenario: '看似乖巧的文靜好友在舞台上大放異彩',
            dialogue: [
              { speaker: 'Friend', text: 'You were a completely different beast on stage!', trans: '你在舞台上完全像換了一個人一樣霸氣！' },
              { speaker: 'You', text: '웃는 얼굴 뒤엔 Just a little psycho! Haha.', trans: '在笑臉背後，我也是藏著一點小瘋狂的！哈哈。' }
            ]
          }
        }
      }
    },
    {
      id: 'psy-en-1',
      language: 'en',
      time: '01:23',
      timeSec: 83.2,
      korean: 'Say my name like Ruk ruk ruk, feeling like a villain chilling',
      text: 'Say my name like Ruk ruk ruk, feeling like a villain chilling',
      romanization: '/seɪ maɪ neɪm laɪk rʊk rʊk rʊk ˈfiːlɪŋ laɪk ə ˈvɪlən ˈtʃɪlɪŋ/',
      naturalTranslation: '高呼我的名字 Ruk Ruk Ruk，享受身為反派角色的從容不迫！',
      pillChips: [
        {
          id: 'pp15',
          text: 'Ruk ruk ruk',
          rom: '/rʊk rʊk rʊk/',
          type: 'pun-onomatopoeia',
          typeLabel: '名字呼喊 + 上膛槍擊雙關',
          lemma: 'Ruka + mechanical click',
          meaning: 'Ruka 招牌雙關呼號',
          explanation: '既是 Ruka 成員名字的節奏打點，又是槍械上膛扣扳機的清脆聲響。'
        },
        {
          id: 'pp16',
          text: 'villain chilling',
          rom: '/ˈvɪlən ˈtʃɪlɪŋ/',
          type: 'rhyme-slang',
          typeLabel: '反派雙押俚語',
          lemma: 'villain + chill',
          meaning: '反派悠哉從容 / 自在愜意',
          explanation: '形容不甘受平庸世俗束縛、散發魅惑氣場的自信反派從容感。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '祈使句 (Say my name) + 擬聲方式短語 (like Ruk ruk ruk) + 現在分詞伴隨 (feeling like a villain chilling)',
          tokens: [
            { term: 'Say my name', role: '祈使謂語', desc: '呼喊我的名字。' },
            { term: 'Ruk ruk ruk', role: '擬聲雙關', desc: '節奏扣板機。' },
            { term: 'villain', role: '比喻名詞', desc: '帥氣反派。' },
            { term: 'chilling', role: '俚語狀態分詞', desc: '悠哉從容。' }
          ]
        },
        pronunciation: {
          actualSound: '[세이 마이 네임 라이크 룩 룩 룩, 필링 라이커 빌런 칠링]',
          singingTips: 'villain 与 chilling 构成完美的双音节尾押韵 (/ˈvɪlən/ - /ˈtʃɪlɪŋ/)。',
          rules: [
            {
              title: '雙音節尾押韻 (Double Rhyme)',
              badge: '嘻哈Flow',
              detail: '字尾 short i 與 n 的自然和弦，咬字俐落帥氣。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台帥氣掌控',
              badge: '冷艷王者',
              form: '빌런처럼 여유롭게 무대를 즐기고 있어요.',
              scene: '舞台 Rap 段落展現掌控全場的魅力'
            }
          ],
          realLifeExample: {
            scenario: '完成了一段高難度 Rap 帥氣下台',
            dialogue: [
              { speaker: 'Crowd', text: 'That rap verse was so clean and cold!', trans: '剛才那段饒舌太俐落、太殺了！' },
              { speaker: 'Ruka', text: 'Feeling like a villain chilling! Hope you liked it.', trans: '像從容的反派一樣享受舞台！希望大家喜歡。' }
            ]
          }
        }
      }
    },
    {
      id: 'psy-ko-7',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:23',
      timeSec: 143.0,
      korean: '강가에 비친 두 개의 달은 너와 나, 오늘이 우리 마지막 밤인 것처럼 미쳐가 보자',
      text: '강가에 비친 두 개의 달은 너와 나, 오늘이 우리 마지막 밤인 것처럼 미쳐가 보자',
      romanization: 'Gang-ga-e bi-chin du gae-ui dal-eun neo-wa na, o-neul-i u-ri ma-ji-mak bam-in geot-cheo-reom mi-chyeo-ga bo-ja',
      naturalTranslation: '倒映在江水中的雙月正是你與我，就把今夜當作人生最後一晚，徹底為彼此瘋狂一場吧！',
      pillChips: [
        {
          id: 'pp17',
          text: '강가에 비친',
          rom: 'gang-ga-e bi-chin',
          type: 'location-modifier',
          typeLabel: '空間處格 + 倒映冠形詞',
          lemma: '강가 + -에 + 비치다 + -ㄴ',
          meaning: '倒映在江邊水面上的',
          explanation: '詩意意象，水中的倒影與天上的明月相互輝映，象徵靈魂雙生。'
        },
        {
          id: 'pp18',
          text: '미쳐가 보자',
          rom: 'mi-chyeo-ga bo-ja',
          type: 'compound-verb-proposal',
          typeLabel: '漸進瘋狂嘗試共動句',
          lemma: '미치다 + -어 가다 + -아/어 보다 + -자',
          meaning: '讓我們徹底沉淪瘋狂一場吧',
          explanation: '多重複合動詞結構，表達拋開所有理智束縛、盡情釋放自我。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '定語修飾空間名詞 (강가에 비친 두 개의 달) + 主語等同 (너와 나) + 比況讓步 (마지막 밤인 것처럼) + 漸進共動 (미쳐가 보자)',
          tokens: [
            { term: '강가에', role: '處格狀語', desc: '在江邊。' },
            { term: '비친', role: '過去冠形詞', desc: '倒映著的。' },
            { term: '마지막 밤인 것처럼', role: '比況副詞句', desc: '宛如最後一夜。' },
            { term: '미쳐가다', role: '漸進動詞', desc: '逐漸瘋狂。' }
          ]
        },
        pronunciation: {
          actualSound: '[강가에 비친 두 개의 다른 너와 나, 오느리 우리 마지막 바민 거 처럼 미쳐가 보자]',
          singingTips: '「달은」連音為 [다른]，「오늘이」連音為 [오느리]，「밤인」連音為 [바민]。',
          rules: [
            {
              title: '連音化三重奏 (Continuous Liaison)',
              badge: '抒情發音',
              detail: '收音 ㄹ, ㄹ, ㅁ 分別連入後方母音，流暢如同江水悠揚。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '末日浪漫 (Apocalyptic Passion)',
              badge: '極致浪漫',
              form: '오늘이 마지막인 것처럼 우리 후회 없이 사랑해요.',
              scene: '演唱會高潮全場揮舞手燈深情大合唱'
            }
          ],
          realLifeExample: {
            scenario: '畢業狂歡或演唱會尾聲全體放聲合唱',
            dialogue: [
              { speaker: 'Fan A', text: '오늘 밤이 영원히 안 끝났으면 좋겠어!', trans: '真希望今晚永遠都不要結束！' },
              { speaker: 'Fan B', text: '오늘이 마지막인 것처럼 목청껏 노래하고 미쳐보자!', trans: '就當作是最後一晚，扯開嗓子唱歌、徹底瘋狂吧！' }
            ]
          }
        }
      }
    }
  ]
};
