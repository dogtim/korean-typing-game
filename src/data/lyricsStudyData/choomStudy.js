// BABYMONSTER - 《CHOOM (춤)》 韓語電子舞曲深度研習資料包
// 本曲為 BABYMONSTER 炸裂的電子洗腦舞曲主打！
// 特色：韓國成語「찍 소리 못하다（大氣不敢出一聲）」、星期名詞口訣、舞池派對語氣、雙向互動對話

export const CHOOM_STUDY_DATA = {
  id: 'choom',
  title: 'CHOOM (춤)',
  artist: 'BABYMONSTER',
  album: '第三張迷你專輯《춤 (CHOOM)》',
  year: '2026',
  youtubeId: 'x3eqqoZPV_E',
  altYoutubeIds: ['x3eqqoZPV_E', 'A3M7Nxt3_-Q'],
  sentences: [
    {
      id: 'ch-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:27',
      timeSec: 27.5,
      korean: '1, 2 heat is on, Walk in, stomping like we own the place',
      text: '1, 2 heat is on, Walk in, stomping like we own the place',
      romanization: '/wɔːk ɪn ˈstɑːmpɪŋ laɪk wiː oʊn ðə pleɪs/',
      naturalTranslation: '倒數一二點燃狂潮，昂首挺胸闊步登場，彷彿我們早已買下這整座全場！',
      pillChips: [
        {
          id: 'cp1',
          text: 'heat is on',
          rom: '/hiːt ɪz ɑːn/',
          type: 'idiom-hype',
          typeLabel: '熱戰沸騰成語',
          lemma: 'the heat is on',
          meaning: '戰局白熱化 / 熱浪點燃',
          explanation: '形容競爭進入最激烈的白熱化高潮階段。'
        },
        {
          id: 'cp2',
          text: 'own the place',
          rom: '/oʊn ðə pleɪs/',
          type: 'attitude-idiom',
          typeLabel: '掌控主宰成語',
          lemma: 'own the place',
          meaning: '像會場主人般霸氣自若',
          explanation: '形容舉手投足散發強大自信，猶如自己是全場至高無上的統治者。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '動作短語 (Walk in) + 現在分詞伴隨狀語 (stomping) + 方式比喻子句 (like we own the place)',
          tokens: [
            { term: 'Walk in', role: '祈使動詞短語', desc: '昂首走入會場。' },
            { term: 'stomping', role: '現在分詞狀語', desc: '重踏腳步展現氣勢。' },
            { term: 'like we own the place', role: '比喻方式子句', desc: '如場地主人般自信。' }
          ]
        },
        pronunciation: {
          actualSound: '[워크 인, 스톰핑 라이크 위 온 더 플레이스]',
          singingTips: 'walk in 連音為 [wɔː.kɪn]，own 的 /oʊ/ 圓潤飽滿。',
          rules: [
            {
              title: '連音與爆破弱化',
              badge: 'Flow技巧',
              detail: 'walk in 順滑連讀，place 結尾爆破音短促利落。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '霸氣登場 (Showstopper)',
              badge: '王者風範',
              form: 'Walk in, stomping like we own the place.',
              scene: '踏入紅毯或大賽現場時的氣勢'
            }
          ],
          realLifeExample: {
            scenario: '隊員自信步入比賽會場',
            dialogue: [
              { speaker: 'Teammate', text: 'Everyone is staring at us!', trans: '大家都在盯著我們看！' },
              { speaker: 'You', text: 'Keep your chin up, walk in like we own the place!', trans: '抬起頭來，走進去，就像全場是我們的地盤一樣！' }
            ]
          }
        }
      }
    },
    {
      id: 'ch-en-2',
      language: 'en',
      time: '00:39',
      timeSec: 39.6,
      korean: 'Yeah, I know we\'re seven but we ate, Better run that',
      text: 'Yeah, I know we\'re seven but we ate, Better run that',
      romanization: '/wiːr ˈsɛvən bət wiː eɪt ˈbɛtər rʌn ðæt/',
      naturalTranslation: '沒錯，我們雖僅七人但實力早已橫掃全場無人能敵，趕緊把音樂推到底吧！',
      pillChips: [
        {
          id: 'cp3',
          text: 'we ate',
          rom: '/wiː eɪt/',
          type: 'slang-mastery',
          typeLabel: '橫掃吃乾抹淨俚語',
          lemma: 'ate (ate and left no crumbs)',
          meaning: '完虐全場 / 表現無可挑剔',
          explanation: '歐美當代最頂級流行俚語，形容舞台表現強大到無人能敵。'
        },
        {
          id: 'cp4',
          text: 'run that',
          rom: '/rʌn ðæt/',
          type: 'action-slang',
          typeLabel: '啟動節奏短語',
          lemma: 'run that',
          meaning: '放音樂 / 啟動節奏',
          explanation: 'DJ 常用口頭禪，意為把音樂推到最大聲。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '人數主謂句 (we\'re seven) + 俚語轉折 (but we ate) + 祈使情態短語 (better run that)',
          tokens: [
            { term: 'we\'re seven', role: '主表人數', desc: '雖然只有七位成員。' },
            { term: 'we ate', role: '俚語謂語', desc: '實力橫掃全場。' },
            { term: 'run that', role: '動賓短語', desc: '啟動狂熱音樂。' }
          ]
        },
        pronunciation: {
          actualSound: '[위어 세븐 벗 위 에이트, 베러 런 댓]',
          singingTips: 'better 在口語中發生閃音 (Flap T)，讀作 [베러]。',
          rules: [
            {
              title: '美式 T 閃音化 (Flap T)',
              badge: '口語發音',
              detail: 'better 中的 tt 弱化為齒齦閃音，讀作 [ˈbɛt̬.ər]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台完虐宣告 (Stage Slayer)',
              badge: '實力自豪',
              form: 'We might be seven, but we totally ate that stage up.',
              scene: '演出後對舞台表現的絕對自豪'
            }
          ],
          realLifeExample: {
            scenario: '演出結束後全場起立鼓掌',
            dialogue: [
              { speaker: 'Critic', text: 'How was the performance?', trans: '剛剛這場表演如何？' },
              { speaker: 'Fan', text: 'They completely ate! Left zero crumbs!', trans: '她們完全殺瘋了！無可挑剔！' }
            ]
          }
        }
      }
    },
    {
      id: 'ch-ko-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:51',
      timeSec: 51.7,
      korean: 'Oh my, oh my, my 지금 이 순간, Let it hypnotize',
      text: 'Oh my, oh my, my 지금 이 순간, Let it hypnotize',
      romanization: 'Oh my, oh my, my ji-geum i sun-gan, Let it hypnotize',
      naturalTranslation: '天哪，就在此時此刻，任由那致命迷人的節奏催眠全場神經！',
      pillChips: [
        {
          id: 'cp5',
          text: '지금 이 순간',
          rom: 'ji-geum i sun-gan',
          type: 'time-phrase',
          typeLabel: '此時此刻名詞組',
          lemma: '지금 + 이 순간',
          meaning: '就是現在此時此刻',
          explanation: '韓語最浪漫的時間片語，表達活在當下、專注眼前奇蹟。'
        },
        {
          id: 'cp6',
          text: 'hypnotize',
          rom: '/ˈhɪpnətaɪz/',
          type: 'verb-trance',
          typeLabel: '催眠沉迷動詞',
          lemma: 'hypnotize',
          meaning: '催眠 / 深深著迷沉醉',
          explanation: '形容音樂旋律如同魔咒般讓人神經放鬆徹底陷落。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '感嘆詞重疊 (Oh my my) + 時間冠形短語 (지금 이 순간) + 使役催眠句 (Let it hypnotize)',
          tokens: [
            { term: '지금', role: '時間副詞', desc: '現在。' },
            { term: '이 순간', role: '指示代詞+名詞', desc: '這個瞬間。' },
            { term: 'Let it hypnotize', role: '使役動詞短語', desc: '任其催眠沉醉。' }
          ]
        },
        pronunciation: {
          actualSound: '[오 마이 마이 지금 이 순간 렛 잇 힙노타이즈]',
          singingTips: '「지금 이」平滑連音為 [지그미]，hypnotize 氣聲輕柔。',
          rules: [
            {
              title: '連音化現象 (연음화)',
              badge: '韓語發音',
              detail: '收音 ㅁ 移至後方初聲 ㅇ，平滑連讀為 [지그미] (ji-geu-mi)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '享受當下 (In the Moment)',
              badge: '沉浸氛圍',
              form: '지금 이 순간을 마음껏 즐겨봐요.',
              scene: '沉浸在音樂節奏中與朋友分享'
            }
          ],
          realLifeExample: {
            scenario: '演唱會燈光亮起的夢幻時刻',
            dialogue: [
              { speaker: 'Friend', text: '이 분위기 진짜 대박이다!', trans: '這氣氛真的太神了！' },
              { speaker: 'You', text: '지금 이 순간을 그냥 즐겨! 완전히 빠져들어 보자.', trans: '就享受此時此刻吧！讓我們完全沉浸進去。' }
            ]
          }
        }
      }
    },
    {
      id: 'ch-ko-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:03',
      timeSec: 63.8,
      korean: 'Play the music Let\'s 춤, 리듬을 삼켜 보자 춤',
      text: 'Play the music Let\'s 춤, 리듬을 삼켜 보자 춤',
      romanization: 'Play the music Let\'s chum, ri-deum-eul sam-kyeo bo-ja chum',
      naturalTranslation: '音樂奏響，起舞吧！徹底將整段節奏吞噬入肚，全情狂舞！',
      pillChips: [
        {
          id: 'cp7',
          text: '리듬을 삼켜',
          rom: 'ri-deum-eul sam-kyeo',
          type: 'verb-metaphor',
          typeLabel: '吞噬節奏隱喻',
          lemma: '리듬을 삼키다 + -어',
          meaning: '吞噬節奏 / 徹底駕馭音樂',
          explanation: '動詞「삼키다（吞下）」比喻不僅僅是跟隨節奏，而是徹底將音樂化為自己身體的一部分。'
        },
        {
          id: 'cp8',
          text: '춤',
          rom: 'chum',
          type: 'core-title-noun',
          typeLabel: '全曲核心標題名詞',
          lemma: '춤 (춤추다)',
          meaning: '舞蹈 / 跳舞',
          explanation: '韓語純粹名詞「춤（舞蹈）」，打擊感極強。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '動賓短語 (리듬을) + 比喻動詞嘗試共動句 (삼켜 보자) + 名詞重拍衝擊 (춤)',
          tokens: [
            { term: '리듬을', role: '賓語名詞', desc: '節奏。' },
            { term: '삼키다', role: '及物動詞', desc: '吞入腹中。' },
            { term: '-아/어 보다 + -자', role: '嘗試共動語尾', desc: '咱們試著一起...吧。' },
            { term: '춤', role: '核心名詞', desc: '跳舞。' }
          ]
        },
        pronunciation: {
          actualSound: '[리드믈 삼켜 보자 춤]',
          singingTips: '「삼켜」的 켜 為送氣激音，最後「춤」雙唇瞬間閉合形成有力停頓。',
          rules: [
            {
              title: '連音化與雙唇閉合音',
              badge: '節奏重音',
              detail: '「리듬을」連音為 [리드믈]，춤 結尾 ㅁ 需緊閉雙唇。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '狂歡共動 (Dance Party Vibe)',
              badge: '派對號召',
              form: '우리 함께 춤추며 리듬을 느껴봐요.',
              scene: '派對舞池中號召好友一起跳舞'
            }
          ],
          realLifeExample: {
            scenario: '副歌高潮音樂響起',
            dialogue: [
              { speaker: 'Friend', text: 'Come on, get in the middle of the dance floor!', trans: '快來，進到舞池中央！' },
              { speaker: 'You', text: '리듬을 삼켜 보자! Let\'s 춤!', trans: '徹底吞噬這段節奏吧！跳起來！' }
            ]
          }
        }
      }
    },
    {
      id: 'ch-ko-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:15',
      timeSec: 75.7,
      korean: '월, 화, 수, 목, 금, 토 모두 다 함께 취해 보자 춤',
      text: '월, 화, 수, 목, 금, 토 모두 다 함께 취해 보자 춤',
      romanization: 'Wol, hwa, su, mok, geum, to mo-du da ham-kke chwi-hae bo-ja chum',
      naturalTranslation: '星期一到星期六，全體齊聚一堂沉醉其中，盡情狂舞吧！',
      pillChips: [
        {
          id: 'cp9',
          text: '월, 화, 수, 목, 금, 토',
          rom: 'wol, hwa, su, mok, geum, to',
          type: 'week-days',
          typeLabel: '星期簡稱點名',
          lemma: '월화수목금토',
          meaning: '週一至週六天天狂歡',
          explanation: '月、火、水、木、金、土，形容天天不休眠的狂熱活力。'
        },
        {
          id: 'cp10',
          text: '취해 보자',
          rom: 'chwi-hae bo-ja',
          type: 'verb-trance',
          typeLabel: '沉醉共動句型',
          lemma: '취하다 + -아/어 보다 + -자',
          meaning: '讓我們沉醉其中吧',
          explanation: '動詞「취하다（陶醉/沉醉）」比喻被音樂的狂熱徹底征服。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '星期名詞縮寫列舉 + 泛指副詞 (모두 다 함께) + 狀態沉醉嘗試句 (취해 보자 춤)',
          tokens: [
            { term: '월화수목금토', role: '時間列舉', desc: '一週每日。' },
            { term: '모두 다 함께', role: '副詞短語', desc: '大家一同。' },
            { term: '취하다', role: '動詞', desc: '陶醉。' },
            { term: '-자', role: '共動詞尾', desc: '咱們一起吧。' }
          ]
        },
        pronunciation: {
          actualSound: '[월 화 수 목 끔 토 모두 다 함께 취해 보자 춤]',
          singingTips: '六連音節快嘴吐字如點射，節奏感鏗鏘有力。',
          rules: [
            {
              title: '快嘴節奏切分 (Rapid Syllabic Articulation)',
              badge: 'Flow技巧',
              detail: '每個音節時長精確均等，咬字短促俐落。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '放鬆狂歡號召',
              badge: '解壓生活',
              form: '일주일 동안 쌓인 스트레스를 춤으로 날려버려요.',
              scene: '週末下班後與同事相約狂歡解壓'
            }
          ],
          realLifeExample: {
            scenario: '週五下班後的狂歡派對',
            dialogue: [
              { speaker: 'Colleague', text: 'This week was so tiring!', trans: '這週工作真的太累了！' },
              { speaker: 'You', text: '월화수목금 다 버텼잖아! 오늘 밤엔 다 함께 취해 보자 춤!', trans: '週一到週五都熬過來了！今晚大家一起沉醉跳舞吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'ch-en-3',
      language: 'en',
      time: '01:25',
      timeSec: 85.6,
      korean: 'Get out the way like Vroom, vroom, You better dance like 춤, 춤',
      text: 'Get out the way like Vroom, vroom, You better dance like 춤, 춤',
      romanization: '/ɡɛt aʊt ðə weɪ laɪk vruːm vruːm juː ˈbɛtər dæns laɪk chum chum/',
      naturalTranslation: '識相點閃一邊去如引擎轟鳴呼嘯而過，今晚你最好跟隨我們盡情起舞！',
      pillChips: [
        {
          id: 'cp11',
          text: 'Get out the way',
          rom: '/ɡɛt aʊt ðə weɪ/',
          type: 'imperative-slang',
          typeLabel: '閃開讓路祈使句',
          lemma: 'get out of the way',
          meaning: '快閃開別擋道',
          explanation: '口語省略 of，強勢宣告開路。'
        },
        {
          id: 'cp12',
          text: 'Vroom, vroom',
          rom: '/vruːm vruːm/',
          type: 'onomatopoeia',
          typeLabel: '引擎咆哮擬聲詞',
          lemma: 'vroom',
          meaning: '超跑轟油門呼嘯聲',
          explanation: '模擬極速超跑疾馳呼嘯而過的震撼聲浪。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '驅趕祈使句 (Get out the way) + 擬聲詞比喻 (like Vroom vroom) + 強烈建議句 (You better dance like 춤 춤)',
          tokens: [
            { term: 'Get out', role: '祈使動詞', desc: '讓出路來。' },
            { term: 'Vroom vroom', role: '擬聲詞', desc: '引擎轟鳴。' },
            { term: 'You better', role: '情態動詞', desc: '你最好照做。' }
          ]
        },
        pronunciation: {
          actualSound: '[겟 아웃 더 웨이 라이크 브룸 브룸, 유 베러 댄스 라이크 춤 춤]',
          singingTips: 'Vroom vroom 與 춤 춤 形成跨語言擬聲韻律對稱。',
          rules: [
            {
              title: '雙語擬聲對稱押韻',
              badge: '跨語言韻律',
              detail: '英韓擬聲詞自然交織，帶來飽滿的口腔震動感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '霸氣開路',
              badge: '勢不可擋',
              form: '비켜서세요, 우린 멈추지 않고 춤출 테니까요.',
              scene: '氣勢洶洶向前推進時的霸氣宣告'
            }
          ],
          realLifeExample: {
            scenario: '賽車跑道或運動場加速衝刺',
            dialogue: [
              { speaker: 'Skater', text: 'Look at that speed coming down the ramp!', trans: '看那斜坡衝下來的速度！' },
              { speaker: 'You', text: 'Get out the way! Vroom vroom, coming through!', trans: '快讓開！引擎轟鳴，閃開別擋道！' }
            ]
          }
        }
      }
    },
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
          id: 'cp13',
          text: '찍 소리 못하는',
          rom: 'jjik so-ri mot-ha-neun',
          type: 'korean-idiom-modifier',
          typeLabel: '韓國經典成語定語',
          lemma: '찍 소리(도) 못하다 + -는',
          meaning: '連大氣都不敢出一聲 / 啞口無言被震懾',
          explanation: '韓國極其道地的成語！「찍」指微小的吱聲，形容因對方氣場過於強大震撼，所有人嚇得或敬佩得連一絲雜音都不敢發出。'
        },
        {
          id: 'cp14',
          text: '이 구역에',
          rom: 'i gu-yeok-e',
          type: 'territory-noun-particle',
          typeLabel: '領地名詞 + 處所助詞',
          lemma: '이 구역 (此區域) + -에',
          meaning: '在這塊地盤領地之中',
          explanation: '象徵自己的統治範疇。'
        },
        {
          id: 'cp15',
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
    },
    {
      id: 'ch-ko-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:20',
      timeSec: 140.0,
      korean: 'That’s right, 흔들어 봐 All night long, 끝까지 가보자 춤',
      text: 'That’s right, 흔들어 봐 All night long, 끝까지 가보자 춤',
      romanization: 'That’s right, heun-deul-eo bwa All night long, kkeut-kka-ji ga-bo-ja chum',
      naturalTranslation: '沒錯！整夜放肆搖擺釋放靈魂，不見不散戰到最後一刻，跳起來吧！',
      pillChips: [
        {
          id: 'cp16',
          text: '흔들어 봐',
          rom: 'heun-deul-eo bwa',
          type: 'action-try',
          typeLabel: '搖擺嘗試祈使',
          lemma: '흔들다 + -아/어 보다',
          meaning: '試著放肆搖擺起來',
          explanation: '動詞「흔들다（搖擺）」接「-아/어 보다」鼓勵聽眾一同加入。'
        },
        {
          id: 'cp17',
          text: '끝까지',
          rom: 'kkeut-kka-ji',
          type: 'adverb-persistence',
          typeLabel: '堅持到底副詞短語',
          lemma: '끝 (盡頭) + -까지',
          meaning: '堅持到底 / 戰到最後一刻',
          explanation: '永不退縮堅持到底的決心。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '肯定贊同 (That\'s right) + 搖擺嘗試祈使 (흔들어 봐) + 極限共動句 (끝까지 가보자 춤)',
          tokens: [
            { term: '흔들다', role: '及物動詞', desc: '搖擺。' },
            { term: '끝까지', role: '時間副詞短語', desc: '直到最後一刻。' },
            { term: '가보다', role: '複合動詞', desc: '嘗試前行。' },
            { term: '-자', role: '共動語尾', desc: '咱們一起吧。' }
          ]
        },
        pronunciation: {
          actualSound: '[흔드로 봐 올 나잇 롱, 끋까지 가보자 춤]',
          singingTips: '끝까지 收音 ㅌ 轉為代表音 [ㄷ]，가보자 聲調自然推向高潮。',
          rules: [
            {
              title: '收音代表音化 (Representative Sound)',
              badge: '韓語收音',
              detail: '收音 ㅌ 遇子音歸入代表音 [ㄷ]，讀作 [끋까지] (kkeut-kka-ji)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '徹夜狂歡 (All Night Party)',
              badge: '燃燒生命',
              form: '지치지 말고 끝까지 함께 달려가 봐요.',
              scene: '演唱會安可或派對壓軸時呼籲全場不要停下'
            }
          ],
          realLifeExample: {
            scenario: '跨年倒數後的最後狂歡曲',
            dialogue: [
              { speaker: 'Friend', text: 'Are we staying until the sunrise?', trans: '我們要一直嗨到日出嗎？' },
              { speaker: 'You', text: '당연하지! 끝까지 가보자 춤!', trans: '當然！不到最後一刻絕不停下，跳起來！' }
            ]
          }
        }
      }
    }
  ]
};
