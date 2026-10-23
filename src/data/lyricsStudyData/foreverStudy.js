// BABYMONSTER - 《FOREVER》 韓英雙語清爽夏日深度研習資料包
// 本曲為 BABYMONSTER 破億播放夏日高音舞曲代表作！
// 特色：敬語/平語多語體版本、標準羅馬拼音、文法詞幹與助詞拆解、連音變音規則、高音Flow技巧

export const FOREVER_STUDY_DATA = {
  id: 'forever',
  title: 'FOREVER',
  artist: 'BABYMONSTER',
  album: '數位單曲《FOREVER》',
  year: '2024',
  youtubeId: 'eJCHKjt0MPw',
  altYoutubeIds: ['FhPfx5s_qLg', 'pM9_K5qR_wQ'],
  sentences: [
    {
      id: 'for-1',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '00:09',
      timeSec: 9.88,
      korean: 'I got no worries on my mind, 난 멈추지 않아 so you can say goodbye',
      text: 'I got no worries on my mind, 난 멈추지 않아 so you can say goodbye',
      romanization: 'I got no worries on my mind, nan meom-chu-ji an-a so you can say goodbye',
      naturalTranslation: '我心頭毫無一絲憂慮，我的前行步伐永不止息，所以你大可揮手說再見！',
      pillChips: [
        {
          id: 'for1_p1',
          text: 'no worries on my mind',
          rom: '/noʊ ˈwɜːriz ɑːn maɪ maɪnd/',
          type: 'english-idiom',
          typeLabel: '無憂無慮成語',
          lemma: 'no worries on one\'s mind',
          meaning: '心中無牽無掛 / 灑脫自在',
          explanation: '表達卸下所有外界包袱，全心享受當下的自信從容心境。'
        },
        {
          id: 'for1_p2',
          text: '난 멈추지 않아',
          rom: 'nan meom-chu-ji an-a',
          type: 'korean-grammar',
          typeLabel: '代名詞 + 長型否定文法',
          lemma: '나 + -(으)ㄴ + 멈추다 + -지 않다',
          meaning: '我絕不就此停下腳步',
          explanation: '動詞「멈추다（停止）」加上長型否定語尾「-지 않다」，比短型否定「안 멈춰」更具堅定無移的決心。'
        },
        {
          id: 'for1_p3',
          text: 'say goodbye',
          rom: '/seɪ ˌɡʊdˈbaɪ/',
          type: 'action-idiom',
          typeLabel: '道別割捨成語',
          lemma: 'say goodbye',
          meaning: '道別送客 / 拋諸腦後',
          explanation: '告別過去的質疑與軟弱，邁向全新高度。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文所有主句 (I got no worries...) + 韓語主格長否定句 (난 멈추지 않아) + 英文結果情態子句 (so you can say goodbye)',
          tokens: [
            { term: 'no worries', role: '否定名詞受詞', desc: '心無牽掛。' },
            { term: '난 (나는)', role: '主格代名詞', desc: '我。' },
            { term: '-지 않다', role: '長型否定語尾', desc: '堅決否定。' },
            { term: 'can say goodbye', role: '情態動詞短語', desc: '隨你自便離去。' }
          ]
        },
        pronunciation: {
          actualSound: '[아이 갓 노 워리즈 온 마이 마인드, 난 멈추지 아나 쏘 유 캔 세이 굿바이]',
          singingTips: '「않아」中雙收音 ㄶ 遇到後方 ㅇ 時，ㅎ 脫落，讀作 [아나] (a-na)，發音平滑透亮。',
          rules: [
            {
              title: 'ㅎ 脫落現象 (ㅎ-Deletion / ㅎ탈락)',
              badge: '韓語收音規則',
              detail: '收音 ㄶ 或 ㅀ 遇到以初聲 ㅇ 開頭的母音語尾時，ㅎ 音不發音，直接連讀前方的 ㄴ 或 ㄹ。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '瀟灑前行 (Carefree Radiance)',
              badge: '灑脫自信',
              form: 'I have no worries and I\'m never stopping; you\'re free to move along.',
              scene: '甩開負能量，專注追求自我成長'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '마음에 아무런 걱정도 없어요, 전 멈추지 않으니 안녕히 가세요.',
              scene: '標準禮貌表達無憂前進'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '저희는 결코 멈추지 않습니다. 지켜보십시오.',
              scene: '正式宣告堅持決心'
            }
          ],
          realLifeExample: {
            scenario: '面對總是潑冷水的消極同仁，瀟灑表達自己的堅持',
            dialogue: [
              { speaker: 'Colleague', text: 'Aren\'t you worried this project might not succeed?', trans: '難道你就不擔心這個專案會不成功嗎？' },
              { speaker: 'You', text: 'I got no worries on my mind, 난 멈추지 않아! 결과로 증명할게.', trans: '我心中毫無掛慮，我的腳步永不會停！我會用結果來證明。' }
            ]
          }
        }
      }
    },
    {
      id: 'for-2',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '00:17',
      timeSec: 17.22,
      korean: 'I’ll fulfill my fantasy and you can watch and see 박수나 쳐보지',
      text: 'I’ll fulfill my fantasy and you can watch and see 박수나 쳐보지',
      romanization: 'I’ll fulfill my fantasy and you can watch and see bak-su-na chyeo-bo-ji',
      naturalTranslation: '我將親手實現我所有的幻想，你就在一旁睜大雙眼看著，乖乖為我鼓掌喝采吧！',
      pillChips: [
        {
          id: 'for2_p1',
          text: 'fulfill my fantasy',
          rom: '/fʊlˈfɪl maɪ ˈfæntəsi/',
          type: 'verb-object',
          typeLabel: '動賓短語',
          lemma: 'fulfill one\'s fantasy',
          meaning: '實現夢想 / 踐行幻想',
          explanation: '表達主動掌控命運，將看似不可能的願景化為真實。'
        },
        {
          id: 'for2_p2',
          text: '박수나',
          rom: 'bak-su-na',
          type: 'noun-particle',
          typeLabel: '名詞 + 諷刺助詞',
          lemma: '박수 + -(이)나',
          meaning: '倒不如拍拍手 / 乾脆鼓掌',
          explanation: '助詞「-(이)나」帶有「退而求其次、輕蔑諷刺」語氣，反正你也幫不上忙，不如乖乖鼓掌。'
        },
        {
          id: 'for2_p3',
          text: '쳐보지',
          rom: 'chyeo-bo-ji',
          type: 'verb-ending',
          typeLabel: '嘗試補助動詞 + 終結語尾',
          lemma: '치다 + -어 보다 + -지',
          meaning: '拍拍看唄 / 不如試著鼓掌',
          explanation: '接嘲諷語尾「-지」，營造出居高臨下的俏皮挑釁。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文目標宣告 (I’ll fulfill...) + 諷刺祈使共動句 (박수나 쳐보지)',
          tokens: [
            { term: 'fulfill my fantasy', role: '英語核心動賓', desc: '實現夢想藍圖。' },
            { term: 'watch and see', role: '並列動詞', desc: '拭目以待。' },
            { term: '박수나', role: '名詞+諷刺助詞', desc: '鼓掌就是你唯一能做的。' },
            { term: '쳐보지', role: '嘗試動詞+語尾', desc: '拍拍看唄。' }
          ]
        },
        pronunciation: {
          actualSound: '[박쑤나 쳐보지]',
          singingTips: '「박수」收音 ㄱ 遇 ㅅ 發生緊音化，讀作 [박쑤] (bak-ssu)。',
          rules: [
            {
              title: '緊音化（경음화）',
              badge: '音變規則',
              detail: '收音 ㄱ, ㄷ, ㅂ 後方的平音 ㄱ, ㄷ, ㅂ, ㅅ, ㅈ 強化為濃音 ㄲ, ㄸ, ㅃ, ㅆ, ㅉ。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '自信挑釁 (Playful Taunt)',
              badge: '挑釁語氣',
              form: 'I’ll fulfill my fantasy, you just sit back and clap.',
              scene: '面對質疑者時展現實力差距'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '꿈을 이룰 테니 지켜보시면서 박수나 쳐주세요.',
              scene: '敬語半開玩笑地讓對方為自己鼓掌'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '저희의 성공을 지켜보시며 박수를 보내주십시오.',
              scene: '正式商務場合請大家見證成果'
            }
          ],
          realLifeExample: {
            scenario: '向曾經看扁自己的人宣告目標即將達成',
            dialogue: [
              { speaker: 'Doubter', text: 'You really think you can make that happen?', trans: '你真以為自己能做得到？' },
              { speaker: 'You', text: 'Just watch and see! 그때 가서 박수나 쳐보지 그래?', trans: '你就等著看吧！到時候你就在台下好好鼓掌就行了！' }
            ]
          }
        }
      }
    },
    {
      id: 'for-3',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '00:24',
      timeSec: 24.69,
      korean: '눈부셔 They say she looking flawless, I know 타고났지 Like this',
      text: '눈부셔 They say she looking flawless, I know 타고났지 Like this',
      romanization: 'Nun-bu-syeo They say she looking flawless, I know ta-go-nat-ji Like this',
      naturalTranslation: '耀眼奪目！所有人都驚嘆她完美無瑕；我心裡有數，我生來便是如此出眾！',
      pillChips: [
        {
          id: 'for3_p1',
          text: '눈부셔',
          rom: 'nun-bu-syeo',
          type: 'adjective',
          typeLabel: '感官形容詞',
          lemma: '눈부시다 + -어',
          meaning: '耀眼奪目 / 眩目刺眼',
          explanation: '由「눈（眼睛）」+「부시다（刺眼）」構成，形容魅力璀璨讓人無法直視。'
        },
        {
          id: 'for3_p2',
          text: 'flawless',
          rom: '/ˈflɔːləs/',
          type: 'english-adjective',
          typeLabel: '美語形容詞',
          lemma: 'flawless',
          meaning: '完美無瑕 / 無懈可擊',
          explanation: '形容外貌、技藝或舞台狀態沒有絲毫缺陷。'
        },
        {
          id: 'for3_p3',
          text: '타고났지',
          rom: 'ta-go-nat-ji',
          type: 'compound-verb',
          typeLabel: '複合動詞 + 確認語尾',
          lemma: '타고나다 + -았/었- + -지',
          meaning: '天生自帶 / 生來如此',
          explanation: '由「타다（受領天命）」+「나다（出生）」構成，指天賦異稟，接「-지」表理所當然。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '感嘆形容詞 (눈부셔) + 英文盛讚 (she looking flawless) + 宿命動詞確認句 (타고났지)',
          tokens: [
            { term: '눈부셔', role: '感嘆形容詞', desc: '美到刺眼。' },
            { term: 'she looking flawless', role: '引述英語句', desc: '大家都誇讚完美無瑕。' },
            { term: 'I know', role: '認知插入語', desc: '我早就知道了。' },
            { term: '타고났지', role: '天賦複合動詞', desc: '天生就是這樣。' }
          ]
        },
        pronunciation: {
          actualSound: '[눈부셔 데이 세이 쉬 루킹 플로리스, 아이 노우 타고낟찌 라이크 디스]',
          singingTips: '「타고났지」收音 ㅆ 歸為代表音 [ㄷ]，促使 ㅈ 緊音化為 [ㅉ]，讀作 [타고낟찌]。',
          rules: [
            {
              title: '收音代表音化與緊音化連鎖',
              badge: '複合音變',
              detail: 'ㅆ 在子音前發 [ㄷ]，隨後促使後面的 ㅈ 讀為濃音 [ㅉ] (ta-go-nat-jji)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '天生女王 (Born This Way)',
              badge: '天賦自信',
              form: 'Blinding lights, flawless look, I was born like this.',
              scene: '自信展示天生麗質與才華'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '눈이 부실 정도로 완벽하죠, 타고난 매력이에요.',
              scene: '韓語禮貌描述天生散發光芒'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '대단히 눈부신 재능을 타고났습니다.',
              scene: '正式讚揚卓越天賦'
            }
          ],
          realLifeExample: {
            scenario: '好友看到你為時尚雜誌拍的封面大片',
            dialogue: [
              { speaker: 'Friend', text: 'This photoshoot is unreal! You look absolutely flawless!', trans: '這組大片簡直美得不真實！你看起來完美無瑕！' },
              { speaker: 'You', text: '눈부시지? 타고났잖아 like this!', trans: '很耀眼對吧？天生麗質就是擋不住啊！' }
            ]
          }
        }
      }
    },
    {
      id: 'for-4',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '00:33',
      timeSec: 33.95,
      korean: '여기저기 다 난리 난리, 가나다라마바 싸가지, Gotta gotta go so c’est la vie',
      text: '여기저기 다 난리 난리, 가나다라마바 싸가지, Gotta gotta go so c’est la vie',
      romanization: 'Yeo-gi-jeo-gi da nan-li nan-li, ga-na-da-ra-ma-ba ssa-ga-ji, Gotta gotta go so c’est la vie',
      naturalTranslation: '大街小巷為我掀起狂潮，背完注音韓字就想教訓我的無禮之徒滾一邊去，人生就是如此瀟灑！',
      pillChips: [
        {
          id: 'for4_p1',
          text: '여기저기',
          rom: 'yeo-gi-jeo-gi',
          type: 'adverbial-noun',
          typeLabel: '處所副詞',
          lemma: '여기저기',
          meaning: '到處 / 四面八方 / 大街小巷',
          explanation: '指全城或整個網路到處都在熱烈討論。'
        },
        {
          id: 'for4_p2',
          text: '난리 난리',
          rom: 'nan-li nan-li',
          type: 'noun-reduplication',
          typeLabel: '漢字重疊名詞',
          lemma: '난리 (亂離)',
          meaning: '掀起狂潮 / 騷動轟動',
          explanation: '疊字加強震撼感，指引爆熱烈追捧與話題。'
        },
        {
          id: 'for4_p3',
          text: '가나다라마바 싸가지',
          rom: 'ga-na-da-ra-ma-ba ssa-ga-ji',
          type: 'wordplay-slang',
          typeLabel: '諧音雙關諷刺',
          lemma: '가나다라마바 + 싸가지 (싹수)',
          meaning: '字母都沒認全的沒禮貌無知之徒',
          explanation: '表面是韓文字母順序前六字，後方接俚語「싸가지（禮貌教養）」，諷刺韓語都還沒學會就對人指指點點的沒教養鍵盤俠。'
        },
        {
          id: 'for4_p4',
          text: 'c’est la vie',
          rom: '/seɪ lɑː ˈviː/',
          type: 'french-idiom',
          typeLabel: '法語外來諺語',
          lemma: 'c\'est la vie',
          meaning: '這就是人生 / 瀟灑處世',
          explanation: '傳達笑看紛擾、不隨波逐流的從容哲學。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '處所副詞句 (여기저기 다 난리) + 字母順序雙關調侃 (가나다라마바 싸가지) + 法語成語結尾 (c’est la vie)',
          tokens: [
            { term: '여기저기', role: '處所狀語', desc: '到處大街小巷。' },
            { term: '난리 난리', role: '狀態重疊名詞', desc: '陷入狂熱騷動。' },
            { term: '가나다라마바 싸가지', role: '雙關諷刺短語', desc: '諷刺不自量力的黑粉。' },
            { term: 'c\'est la vie', role: '法語感嘆名言', desc: '這就是人生。' }
          ]
        },
        pronunciation: {
          actualSound: '[여기저기 다 날리 날리, 가나다라마바 싸가지, 가러 가러 고 쏘 쎌라비]',
          singingTips: '「난리」收音 ㄴ 遇 ㄹ 發生流音化，讀作 [날리] (nal-li)。快嘴 Flow 均勻吐字。',
          rules: [
            {
              title: '流音化（유음화 / Liquidization）',
              badge: '流音規則',
              detail: 'ㄴ 與 ㄹ 相鄰時，ㄴ 同化為流音 ㄹ，난리 實際讀作 [날리]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '瀟灑回擊 (Cool Dismissal)',
              badge: '諷刺調侃',
              form: 'Total chaos everywhere, mind your manners and c\'est la vie.',
              scene: '面對網路鍵盤俠時一笑置之'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '온 세상이 떠들썩하고 난리가 났네요, 신경 쓰지 말고 갈 길 가요.',
              scene: '韓語勸勉不理會外界紛擾'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '소란에 휘둘리지 마시고 전진하십시오.',
              scene: '正式場合勉勵保持專注'
            }
          ],
          realLifeExample: {
            scenario: '面對網路上的無厘頭酸民留言，一笑置之',
            dialogue: [
              { speaker: 'Friend', text: 'Are you okay with all those negative comments online?', trans: '看到網路上那些酸言酸語，你還好嗎？' },
              { speaker: 'You', text: '가나다라마바 싸가지 없는 말들엔 신경 안 써. Gotta go, c’est la vie!', trans: '那些沒水準的酸話我才不在乎。前進吧，這就是人生！' }
            ]
          }
        }
      }
    },
    {
      id: 'for-5',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '00:54',
      timeSec: 54.0,
      korean: 'Baby it was all a dream you thought I was yours, 멋대로 착각하지는 마',
      text: 'Baby it was all a dream you thought I was yours, 멋대로 착각하지는 마',
      romanization: 'Baby it was all a dream you thought I was yours, meot-dae-ro chak-gak-ha-ji-neun ma',
      naturalTranslation: '天真以為我屬於你？那不過是場黃粱美夢，少在那一廂情願自作多情了！',
      pillChips: [
        {
          id: 'for5_p1',
          text: 'all a dream',
          rom: '/ɔːl ə driːm/',
          type: 'english-phrase',
          typeLabel: '英文短語',
          lemma: 'all a dream',
          meaning: '一場黃粱美夢 / 空想',
          explanation: '揭穿對方的非分之想與虛妄期待。'
        },
        {
          id: 'for5_p2',
          text: '멋대로',
          rom: 'meot-dae-ro',
          type: 'adverb',
          typeLabel: '方式副詞',
          lemma: '멋대로 (제멋대로)',
          meaning: '隨心所欲地 / 擅自胡亂地',
          explanation: '批評他人未經允許就一廂情願揣測。'
        },
        {
          id: 'for5_p3',
          text: '착각하지는 마',
          rom: 'chak-gak-ha-ji-neun ma',
          type: 'verb-ending',
          typeLabel: '禁止命令語尾 + 強調助詞',
          lemma: '착각하다 + -지 마 + -는',
          meaning: '可別自作多情 / 少在那誤會',
          explanation: '助詞「-는」加在禁止「-지 마」中間，劃清明確心理界線。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文虛妄揭穿句 (all a dream...) + 方式副詞 (멋대로) + 強調禁止命令句 (착각하지는 마)',
          tokens: [
            { term: 'all a dream', role: '表語名詞', desc: '純屬幻想。' },
            { term: 'you thought I was yours', role: '賓語子句', desc: '你以為我屬於你。' },
            { term: '멋대로', role: '方式狀語', desc: '擅自、任性地。' },
            { term: '착각하지는 마', role: '強調禁止句', desc: '少給我自作多情。' }
          ]
        },
        pronunciation: {
          actualSound: '[먿때로 차카카지는 마]',
          singingTips: '「착각하다」發生激音化讀為 [차카카]，멋대로 緊音化讀作 [먿때로]。',
          rules: [
            {
              title: '激音化（격음화 / Aspiration）',
              badge: '激音規則',
              detail: '收音 ㄱ 遇初聲 ㅎ 結合為激音 [ㅋ]，착각하다 -> [차카카다]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '清醒界線 (Sharp Boundary)',
              badge: '清醒果斷',
              form: 'You thinking I was yours was just a dream; stop jumping to conclusions.',
              scene: '果斷拒絕自作多情者的曖昧'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '혼자서 제멋대로 착각하지 마세요.',
              scene: '敬語禮貌提醒請勿過度解讀'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '오해하지 마십시오. 선을 지켜주시기 바랍니다.',
              scene: '正式公文/談判提醒遵守邊界'
            }
          ],
          realLifeExample: {
            scenario: '對方誤以為你對他有好感，態度曖昧',
            dialogue: [
              { speaker: 'Acquaintance', text: 'I thought we had something special going on between us.', trans: '我還以為我們之間有些特別的情愫呢。' },
              { speaker: 'You', text: '친절하게 대했다고 멋대로 착각하지는 마.', trans: '我只是出於禮貌對你客氣，可別擅自一廂情願胡思亂想。' }
            ]
          }
        }
      }
    },
    {
      id: 'for-6',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '01:04',
      timeSec: 64.0,
      korean: '저 하늘 높이 I’m spreading my wings like I’mma live forever',
      text: '저 하늘 높이 I’m spreading my wings like I’mma live forever',
      romanization: 'Jeo ha-neul nop-i I’m spreading my wings like I’mma live forever',
      naturalTranslation: '向著那遼闊長空展翅高飛，宛如我將永生不朽般光芒萬丈！',
      pillChips: [
        {
          id: 'for6_p1',
          text: '저 하늘 높이',
          rom: 'jeo ha-neul nop-i',
          type: 'noun-adverbial',
          typeLabel: '空間副詞短語',
          lemma: '저 + 하늘 + 높이',
          meaning: '向著那片長空高高翱翔',
          explanation: '遠稱指示詞「저」加上派生副詞「높이」，意境開闊高遠。'
        },
        {
          id: 'for6_p2',
          text: 'spreading my wings',
          rom: '/ˈsprɛdɪŋ maɪ wɪŋz/',
          type: 'english-idiom',
          typeLabel: '展翅成語',
          lemma: 'spread one\'s wings',
          meaning: '展翅高飛 / 放手施展抱負',
          explanation: '比喻不再受任何限制，全身心追求極致的自我實現。'
        },
        {
          id: 'for6_p3',
          text: 'live forever',
          rom: '/lɪv fəˈrɛvər/',
          type: 'theme-phrase',
          typeLabel: '全曲核心主題',
          lemma: 'live forever',
          meaning: '永生不朽 / 璀璨長存',
          explanation: '全曲精神象徵，代表青春、夢想與藝術生命力將化為永恆。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '指示代詞空間狀語 (저 하늘 높이) + 動作進行句 (spreading my wings) + 永恆比況句 (live forever)',
          tokens: [
            { term: '저 하늘', role: '空間名詞', desc: '那片遠方的天空。' },
            { term: '높이', role: '派生副詞', desc: '高高地。' },
            { term: 'spreading my wings', role: '進行動詞短語', desc: '展翅翱翔。' },
            { term: 'live forever', role: '比喻狀語', desc: '如不朽傳奇。' }
          ]
        },
        pronunciation: {
          actualSound: '[저 하널 노피 아임 스프레딩 마이 윙즈 라이크 아임마 리브 포에버]',
          singingTips: '「높이」收音 ㅍ 為激音，遇母音直接連音讀作 [노피]。Forever 的 /fɔːr/ 需運用混聲共鳴。',
          rules: [
            {
              title: '激音連音化 (Aspirated Liaison)',
              badge: '發音規則',
              detail: '높이 激音 ㅍ 移至後方初聲母音 ㅇ 位置，保持清脆送氣音 [노피]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '展翅高飛 (Soaring Ambition)',
              badge: '高飛雄心',
              form: 'High into the skies, spreading my wings to live forever.',
              scene: '踏上追夢新征程時抒發豪情壯志'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '저 높은 하늘을 향해 영원히 살 것처럼 날개를 펼쳐요.',
              scene: '韓語表達迎向藍天展翅高飛'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '저 높은 창공을 향해 비상하십시오.',
              scene: '正式演講激勵眾人高飛'
            }
          ],
          realLifeExample: {
            scenario: '畢業典禮或踏上海外留學旅途前的雄心壯志',
            dialogue: [
              { speaker: 'Friend', text: 'Are you ready to take on the world out there?', trans: '準備好去那廣闊的世界上大展拳腳了嗎？' },
              { speaker: 'You', text: '저 하늘 높이 날아오를 준비 됐어! Like I\'mma live forever!', trans: '我已經準備好飛向更高天空了！如同青春永不落幕！' }
            ]
          }
        }
      }
    },
    {
      id: 'for-7',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '01:26',
      timeSec: 86.0,
      korean: 'I’m that nice 뭘 것 같아 너와 내 차이, Pull up on me pay the price',
      text: 'I’m that nice 뭘 것 같아 너와 내 차이, Pull up on me pay the price',
      romanization: 'I’m that nice mwol geot gat-a neo-wa nae cha-i, Pull up on me pay the price',
      naturalTranslation: '我就是如此出類拔萃，你覺得你跟我差距在哪？膽敢招惹我就得付出代價！',
      pillChips: [
        {
          id: 'for7_p1',
          text: 'that nice',
          rom: '/ðæt naɪs/',
          type: 'slang-compliment',
          typeLabel: '嘻哈讚美俚語',
          lemma: 'that nice',
          meaning: '實力拔群 / 技藝驚為天人',
          explanation: '嘻哈文化常用語，指實力太過頂尖出眾。'
        },
        {
          id: 'for7_p2',
          text: '뭘 것 같아',
          rom: 'mwol geot gat-a',
          type: 'speculative-phrase',
          typeLabel: '縮略推測疑問短語',
          lemma: '무엇 + -일 것 같다',
          meaning: '你覺得會是什麼呢？',
          explanation: '帶有居高臨下反問對手的優越感。'
        },
        {
          id: 'for7_p3',
          text: '너와 내 차이',
          rom: 'neo-wa nae cha-i',
          type: 'comparison-noun',
          typeLabel: '對比名詞短語',
          lemma: '너 + -와 + 내 + 차이',
          meaning: '你與我的差距',
          explanation: '直白指出段位與級別的鴻溝。'
        },
        {
          id: 'for7_p4',
          text: 'pay the price',
          rom: '/peɪ ðə praɪs/',
          type: 'warning-idiom',
          typeLabel: '警告成語',
          lemma: 'pay the price',
          meaning: '付出沉重代價',
          explanation: '警告挑釁者必將自食惡果。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文肯定 (I\'m that nice) + 疑問推測句 (뭘 것 같아) + 對比主語名詞 (너와 내 차이) + 押韻警示 (pay the price)',
          tokens: [
            { term: 'that nice', role: '俚語表語', desc: '出神入化。' },
            { term: '뭘 것 같아', role: '推測反問句', desc: '你猜會是什麼？' },
            { term: '너와 내 차이', role: '對比名詞', desc: '級別間的鴻溝。' },
            { term: 'pay the price', role: '警告祈使短語', desc: '付出代價。' }
          ]
        },
        pronunciation: {
          actualSound: '[아이엠 댓 나이스 뭘 껏 가타 너와 내 차이, 풀 업 온 미 페이 더 프라이스]',
          singingTips: 'nice [/naɪs/] 與 price [/praɪs/] 完美雙押，「뭘 것 같아」連音激音化 [가타]。',
          rules: [
            {
              title: '雙元音 /aɪ/ 嘻哈押韻',
              badge: 'Rap押韻',
              detail: 'nice 與 price 的尾擦音 /s/ 需俐落切斷，咬字鏗鏘。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '降維打擊 (League Apart)',
              badge: '絕對實力',
              form: 'I’m simply that good; what do you think separates us? Cross me and pay up.',
              scene: '面對無端挑釁展現絕對差距'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '저와 당신의 차이가 무엇일 것 같나요? 선을 넘으면 대가를 치르게 될 거예요.',
              scene: '韓語禮貌中帶著不可侵犯的威嚴'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '차이를 인정하십시오. 무모한 도전엔 대가가 따릅니다.',
              scene: '正式談判要求正視實力懸殊'
            }
          ],
          realLifeExample: {
            scenario: '在電競比賽或運動場上拉開巨大分數差距',
            dialogue: [
              { speaker: 'Opponent', text: 'How are you guys always one step ahead in every match?', trans: '你們怎麼可能在每場比賽中都永遠領先一步？' },
              { speaker: 'You', text: '뭘 것 같아 너와 내 차이? It’s pure dedication and skill.', trans: '你覺得你跟我的差距在哪？這就是無可替代的專注與實力。' }
            ]
          }
        }
      }
    },
    {
      id: 'for-8',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '01:34',
      timeSec: 94.0,
      korean: '예뻐 그러니까 바빠, 아니 나빠 온 세상 울리는 Bad girl',
      text: '예뻐 그러니까 바빠, 아니 나빠 온 세상 울리는 Bad girl',
      romanization: 'Ye-ppeo geu-reo-ni-kka ba-ppa, a-ni na-ppa on se-sang ul-li-neun Bad girl',
      naturalTranslation: '人美天生就繁忙，不，甚至有點小使壞，震撼整個世界的迷人壞女孩！',
      pillChips: [
        {
          id: 'for8_p1',
          text: '예뻐 그러니까 바빠',
          rom: 'ye-ppeo geu-reo-ni-kka ba-ppa',
          type: 'rhyme-cause-effect',
          typeLabel: '因果押韻短句',
          lemma: '예쁘다 + 그러니까 + 바쁘다',
          meaning: '人美所以行程滿檔',
          explanation: '俏皮自信地把繁忙歸因於美麗，-뻐 與 -빠 形成趣味雙押。'
        },
        {
          id: 'for8_p2',
          text: '아니 나빠',
          rom: 'a-ni na-ppa',
          type: 'pivot-adjective',
          typeLabel: '轉折調皮形容詞',
          lemma: '아니 + 나쁘다',
          meaning: '不，應該說我很使壞',
          explanation: '跳脫傳統乖乖女框架，展現略帶危險的小惡魔魅力。'
        },
        {
          id: 'for8_p3',
          text: '온 세상 울리는',
          rom: 'on se-sang ul-li-neun',
          type: 'participial-clause',
          typeLabel: '冠形詞修飾子句',
          lemma: '온 세상 + 울리다 + -는',
          meaning: '震撼全宇宙 / 響徹世界',
          explanation: '動詞「울리다（迴盪/鳴響）」修飾 Bad girl，形容聲量極大。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '原因因果連接句 (예뻐 그러니까 바빠) + 轉折遞進 (아니 나빠) + 冠形詞修飾子句 (온 세상 울리는 Bad girl)',
          tokens: [
            { term: '예뻐', role: '原因形容詞', desc: '貌美出眾。' },
            { term: '그러니까 바빠', role: '因果連詞+形容詞', desc: '所以行程繁忙。' },
            { term: '아니 나빠', role: '轉折修正形容詞', desc: '甚至帶著壞女孩的小任性。' },
            { term: '온 세상 울리는', role: '現在冠形詞子句', desc: '震撼轟動全世界。' }
          ]
        },
        pronunciation: {
          actualSound: '[예뻐 그러니까 바빠, 아니 나빠 온 세상 울리는 배드 걸]',
          singingTips: '「예뻐」-「바빠」-「나빠」形成俏皮洗腦的三連音節尾押韻，咬字短促輕快。',
          rules: [
            {
              title: '三連音節濃音尾押 (Triple Rhyme)',
              badge: 'Flow技巧',
              detail: '-뻐, -빠, -빠 濃音 ㅃ 連續發聲，雙唇緊抿後爆發，充滿俏皮律動。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '迷人壞女孩 (Charming Bad Girl)',
              badge: '俏皮壞女孩',
              form: 'Too pretty to have free time; actually bad enough to shake the world.',
              scene: '幽默開脫自己的繁忙日常'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '예뻐서 바쁘고, 온 세상을 울릴 만큼 매력적인 나쁜 여자예요.',
              scene: '韓語禮貌中帶著自信壞笑'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '온 세상을 뒤흔드는 당당한 주역이 되십시오.',
              scene: '正式勉勵展現震動世界的自信'
            }
          ],
          realLifeExample: {
            scenario: '閨蜜約你週末逛街，你行程表早已排得水洩不通',
            dialogue: [
              { speaker: 'Friend', text: 'Why are you always booked every single weekend?', trans: '你怎麼每個週末行程都排得那麼滿啊？' },
              { speaker: 'You', text: '예뻐, 그러니까 바빠! Haha, let me squeeze you in for Sunday brunch!', trans: '人漂亮所以天生就忙嘛！哈哈，我把週日早午餐時間留給你！' }
            ]
          }
        }
      }
    },
    {
      id: 'for-9',
      language: 'ko',
      langLabel: '韓英雙語 (Ko-En)',
      time: '01:38',
      timeSec: 98.0,
      korean: 'B-A-B-Y-M-O-N, 발끝까지 리듬 타지 기분 짜릿짜릿',
      text: 'B-A-B-Y-M-O-N, 발끝까지 리듬 타지 기분 짜릿짜릿',
      romanization: 'B-A-B-Y-M-O-N, bal-kkeut-kka-ji ri-deum ta-ji gi-bun jja-rit-jja-rit',
      naturalTranslation: '從頭到腳尖都在享受律動節拍，心情酥麻觸電般無比暢快！',
      pillChips: [
        {
          id: 'for9_p1',
          text: '발끝까지',
          rom: 'bal-kkeut-kka-ji',
          type: 'noun-particle',
          typeLabel: '範圍助詞短語',
          lemma: '발끝 + -까지',
          meaning: '直到腳尖 / 從頭到腳',
          explanation: '「발（腳）」+「끝（尖端）」，加格助詞「-까지」，形容全身沉浸。'
        },
        {
          id: 'for9_p2',
          text: '리듬 타지',
          rom: 'ri-deum ta-ji',
          type: 'idiom-verb',
          typeLabel: '音樂慣用語',
          lemma: '리듬을 타다 + -지',
          meaning: '隨節奏律動 / 乘著音樂拍點',
          explanation: '字面指「騎乘節奏」，實際指完全融入音樂跳動。'
        },
        {
          id: 'for9_p3',
          text: '짜릿짜릿',
          rom: 'jja-rit-jja-rit',
          type: 'mimetic-word',
          typeLabel: '擬態副詞',
          lemma: '짜릿짜릿',
          meaning: '觸電般酥麻 / 興奮刺激',
          explanation: '模擬電流穿過身體般的酥麻快感，傳達極度興奮沉浸的心情。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '拼讀點名呼號 (B-A-B-Y-M-O-N) + 範圍界線名詞 (발끝까지) + 動賓慣用語 (리듬 타지) + 擬態心境補語 (기분 짜릿짜릿)',
          tokens: [
            { term: 'B-A-B-Y-M-O-N', role: '團名呼號', desc: '標誌性標籤。' },
            { term: '발끝까지', role: '範圍狀語', desc: '通體上下直至腳尖。' },
            { term: '리듬 타지', role: '動賓慣用謂語', desc: '享受律動。' },
            { term: '짜릿짜릿', role: '擬態補語', desc: '觸電般舒暢興奮。' }
          ]
        },
        pronunciation: {
          actualSound: '[비 에이 비 와이 엠 오 엔, 발끋까지 리듬 타지 기분 짜릳짜릳]',
          singingTips: '「발끝」收音 ㅌ 遇子音歸為 [ㄷ]。「짜릿짜릿」濃音 ㅉ 彈出短促爆發音。',
          rules: [
            {
              title: '濃音擬態詞發音技巧',
              badge: '擬態音變',
              detail: '짜릿짜릿 聲帶預先收緊，利用聲門微弱阻斷後突然爆破，傳遞電流酥麻感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '全身律動 (Total Euphoria)',
              badge: '沉浸狂歡',
              form: 'Rhythm in every toe, pure electric excitement.',
              scene: '派對舞池中全身心放鬆享受音樂'
            },
            {
              name: '日常敬語（해요體）',
              badge: '해요체',
              form: '발끝까지 리듬을 타면서 짜릿한 전율을 느껴봐요.',
              scene: '韓語禮貌邀請一起享受酥麻節奏'
            },
            {
              name: '正式敬語（하십시오體）',
              badge: '하십시오체',
              form: '온몸으로 음악을 느끼며 짜릿한 순간을 만끽하십시오.',
              scene: '正式活動引言邀請盡情享受'
            }
          ],
          realLifeExample: {
            scenario: '在演唱會搖滾區跟隨舞曲跳躍沉浸',
            dialogue: [
              { speaker: 'Fan A', text: 'The bass drops are shaking the entire stadium floor!', trans: '重低音震動整座體育館的地板！' },
              { speaker: 'Fan B', text: '발끝까지 리듬 타는 중이야! 기분 완전 짜릿짜릿해!', trans: '從頭到腳指頭都在跟著節奏跳！全身觸電一樣太過癮了！' }
            ]
          }
        }
      }
    }
  ]
};
