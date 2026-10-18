// BABYMONSTER - 《CLIK CLAK》 全英語嘻哈深度研習資料包
// 本歌為 BABYMONSTER 標誌性的純英文 (100% All-English) 嘻哈名作！
// 特色：純英文深度解析（AAVE 習慣態文法、雙關語成語、道地街頭俚語、押韻 Flow、語域正式度對比與日常會話）

export const CLIK_CLAK_STUDY_DATA = {
  id: 'clik-clak',
  title: 'CLIK CLAK',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: 'o0oW3lPoOXM', // Official MV
  altYoutubeIds: ['39vUvI8D73w', '6YwR7y2Z1q8'],
  sentences: [
    {
      id: 'cc-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:12',
      timeSec: 12.4,
      korean: 'CLIK CLAK heels tap, walkin\' with my hips back',
      text: 'CLIK CLAK heels tap, walkin\' with my hips back',
      romanization: '/klɪk klæk hiːlz tæp ˈwɔːkɪŋ wɪð maɪ hɪps bæk/',
      naturalTranslation: '高跟鞋踏出清脆喀噠聲響，昂首邁步間身姿氣場傲然！',
      pillChips: [
        {
          id: 'pe1',
          text: 'CLIK CLAK',
          rom: '/klɪk klæk/',
          type: 'onomatopoeia',
          typeLabel: '擬聲詞 (Onomatopoeia)',
          lemma: 'click-clack',
          meaning: '喀噠喀噠聲 / 高跟鞋清脆敲地聲',
          explanation: '英語經典擬聲詞，模擬高跟鞋踏在大理石地面、或是相機快門閃爍的清脆打擊聲。'
        },
        {
          id: 'pe2',
          text: 'heels tap',
          rom: '/hiːlz tæp/',
          type: 'verb-noun-collocation',
          typeLabel: '名詞 + 輕敲動詞',
          lemma: 'heel tap',
          meaning: '鞋跟節奏敲擊',
          explanation: '名詞 heels（高跟鞋）加上 tap（輕快敲打），營造出 T 台走秀般的壓倒性步伐。'
        },
        {
          id: 'pe3',
          text: 'walkin\' with my hips back',
          rom: '/ˈwɔːkɪŋ wɪð maɪ hɪps bæk/',
          type: 'attitude-posture',
          typeLabel: '體態姿態描述',
          lemma: 'walk with hips back',
          meaning: '挺拔搖曳的超模走姿',
          explanation: '描述充滿自信、核心穩定、自然擺動髖部的大氣超模走姿（Catwalk）。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '擬聲副詞 (CLIK CLAK) + 主謂短語 (heels tap) + 現在分詞伴隨狀語 (walkin\' with my hips back)',
          tokens: [
            { term: 'CLIK CLAK', role: '擬聲狀語', desc: '強調高跟鞋踩擊地面的聲音。' },
            { term: 'heels', role: '主詞名詞', desc: '高跟鞋後跟。' },
            { term: 'tap', role: '謂語動詞', desc: '節奏輕敲。' },
            { term: 'walkin\'', role: '現在分詞', desc: '伴隨動作，省略 g 反映口語節奏。' }
          ]
        },
        pronunciation: {
          actualSound: '[클릭 클래크 힐즈 탭 워킹 위드 마이 힙스 백]',
          singingTips: '「CLIK CLAK」兩個單字押 [ɪ] 與 [æ] 的前母音對比，舌尖要敏捷俐落；「hips back」尾音短促乾脆。',
          rules: [
            {
              title: '元音交替擬聲詞 (Ablaut Reduplication)',
              badge: '修辭語音',
              detail: '如同 tick-tock、drip-drop，由短高母音 [ɪ] 躍升至開闊母音 [æ]，具有極佳的聽覺節奏。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞走秀 / 舞台女王',
              badge: '超模氣場',
              form: 'CLIK CLAK heels tap, walkin\' with my hips back.',
              scene: '紅毯登場、超模走秀自信滿溢'
            },
            {
              name: '日常口語 (Casual)',
              badge: '自信步伐',
              form: 'Listen to my heels tapping as I strut with absolute confidence.',
              scene: '穿上新買的高跟鞋向閨蜜展現自信步伐'
            },
            {
              name: '時尚評論 (Runway Critique)',
              badge: '專業鑑賞',
              form: 'Her commanding runway stride is accentuated by the rhythmic cadence of stilettos.',
              scene: '米蘭時裝週秀場專題報導'
            }
          ],
          realLifeExample: {
            scenario: '朋友穿著高定套裝與高跟鞋步入高級晚宴',
            dialogue: [
              { speaker: 'Friend', text: 'Listen to that entrance! You sound like a supermodel.', trans: '聽聽這登場的氣勢！你的腳步聲簡直像超模一樣。' },
              { speaker: 'You', text: 'CLIK CLAK heels tap! Gotta own every single step tonight.', trans: '喀噠喀噠高跟鞋節拍！今晚每一步都要由我掌控。' }
            ]
          }
        }
      }
    },
    {
      id: 'cc-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:24',
      timeSec: 24.1,
      korean: 'Who be livin’ large large large',
      text: 'Who be livin’ large large large',
      romanization: '/huː biː ˈlɪvɪn lɑːrdʒ lɑːrdʒ lɑːrdʒ/',
      naturalTranslation: '是誰正過著如此闊綽奢華、風光無限的頂級人生？',
      pillChips: [
        {
          id: 'pe1',
          text: 'Who be',
          rom: '/huː biː/',
          type: 'aave-habitual-be',
          typeLabel: 'AAVE 習慣態文法',
          lemma: 'Who is usually',
          meaning: '到底是誰始終…',
          explanation: '非裔美語 (AAVE) 最著名的語法特徵「Habitual Be」，表示長期、持續且恆常的狀態，而非一時半刻的偶發現象。'
        },
        {
          id: 'pe2',
          text: 'livin\' large',
          rom: '/ˈlɪvɪn lɑːrdʒ/',
          type: 'classic-idiom',
          typeLabel: '美語經典財富成語',
          lemma: 'live large',
          meaning: '過著闊綽滋潤 / 揮金如土的奢華生活',
          explanation: '美式英語高頻成語！指生活富足、享受頂級物質待遇、無拘無束大手筆花銷的成功人生。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '疑問代名詞 (Who) + AAVE 習慣態動詞 (be) + 現在分詞成語 (livin\' large) + 三連音重複強調 (large large large)',
          tokens: [
            { term: 'Who', role: '疑問代名詞', desc: '反詰提問，答案顯而易見是自己。' },
            { term: 'be', role: 'AAVE 習慣態', desc: '表達長久處於榮華富貴狀態。' },
            { term: 'livin\' large', role: '核心成語', desc: 'live large 的進行式，意指極致奢華享受。' }
          ]
        },
        pronunciation: {
          actualSound: '[후 비 리빈 라지 라지 라지]',
          singingTips: '連環三次「large large large」短促有力，舌根後縮發出純厚開闊的長母音 [ɑː]，彰顯霸氣。',
          rules: [
            {
              title: 'AAVE Habitual Be 習慣態解構',
              badge: '語言學文法',
              detail: 'Who is living large 僅指當下；而 Who be living large 強調「一直以來都是這般享受富貴」。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈炫富 / 頂峰人生',
              badge: '風光闊綽',
              form: 'Who be livin\' large large large.',
              scene: '慶功宴派對、奢華度假時的歡呼'
            },
            {
              name: '日常口語 (Casual)',
              badge: '生活享受',
              form: 'We are really living the good life now.',
              scene: '辛苦工作後享受一場奢華水療度假'
            },
            {
              name: '正式描繪 (Formal Affluence)',
              badge: '優渥生活',
              form: 'They are enjoying an exceptionally prosperous and luxurious lifestyle.',
              scene: '財富階層生活方式專題論述'
            }
          ],
          realLifeExample: {
            scenario: '老友們包下五星級海景別墅慶祝事業重大突破',
            dialogue: [
              { speaker: 'Friend A', text: 'Private infinity pool, personal chef... Look at us!', trans: '專屬無邊際泳池、私人大廚…看看我們現在！' },
              { speaker: 'Friend B', text: 'Who be livin\' large! We earned every single bit of this.', trans: '是誰過得這麼風光奢華！這全都是我們一步步拼出來的。' }
            ]
          }
        }
      }
    },
    {
      id: 'cc-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:27',
      timeSec: 27.3,
      korean: 'Walking like a boss boss boss',
      text: 'Walking like a boss boss boss',
      romanization: '/ˈwɔːkɪŋ laɪk ə bɒs bɒs bɒs/',
      naturalTranslation: '步履間散發全場大老闆般的掌控力與絕對自信！',
      pillChips: [
        {
          id: 'pe1',
          text: 'like a boss',
          rom: '/laɪk ə bɒs/',
          type: 'pop-culture-catchphrase',
          typeLabel: '流行文化神級金句',
          lemma: 'like a boss',
          meaning: '像大老闆一樣威風 / 游刃有餘霸氣掌控',
          explanation: '席捲全球的網路與街頭流行名句！形容任何人以極致自信、瀟灑、毫無畏懼的頂級姿態完成某事。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '現在分詞狀語 (Walking) + 方式介系詞片語 (like a boss) + 三連音重複加強 (boss boss boss)',
          tokens: [
            { term: 'Walking', role: '動作分詞', desc: '昂首闊步。' },
            { term: 'like a boss', role: '比喻片語', desc: '以最高決策者的從容風範行事。' }
          ]
        },
        pronunciation: {
          actualSound: '[워킹 라이크 어 보스 보스 보스]',
          singingTips: '連音「like a」-> [laɪ-kə]，boss 三連發擊打聲帶，充滿權勢感。',
          rules: [
            {
              title: 'Like a boss 的文化擴散',
              badge: '流行文化',
              detail: '由嘻哈與喜劇傳播，現已成為讚賞他人「幹得太帥了、太有魄力了」最常用的美式俚語。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '街頭霸氣 / 酷帥宣言',
              badge: '領袖氣質',
              form: 'Walking like a boss boss boss.',
              scene: '大步走入會議室或派對全場矚目'
            },
            {
              name: '日常口語 (Casual)',
              badge: '讚賞朋友',
              form: 'You handled that tough presentation like a true boss!',
              scene: '朋友順利搞定艱巨談判後的讚嘆'
            },
            {
              name: '正式行政評述 (Executive Presence)',
              badge: '專業領導力',
              form: 'She exhibits an undeniable executive presence and natural authority.',
              scene: '企業高階領導人才評估報告'
            }
          ],
          realLifeExample: {
            scenario: '同事勇敢果斷向大客戶爭取到最有利條款',
            dialogue: [
              { speaker: 'Colleague', text: 'You totally stood your ground and got the contract signed!', trans: '你完全站穩立場，漂亮地把合約簽下來了！' },
              { speaker: 'You', text: 'You gotta handle it like a boss!', trans: '面對大場面，就得像大老闆一樣有魄力！' }
            ]
          }
        }
      }
    },
    {
      id: 'cc-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:30',
      timeSec: 30.3,
      korean: 'We make ’em talk talk talk talk',
      text: 'We make ’em talk talk talk talk',
      romanization: '/wiː meɪk əm tɔːk tɔːk tɔːk tɔːk/',
      naturalTranslation: '我們只要一亮相，便能引發全城熱議、萬人爭相討論！',
      pillChips: [
        {
          id: 'pe1',
          text: 'make \'em talk',
          rom: '/meɪk əm tɔːk/',
          type: 'causative-idiom',
          typeLabel: '使役動詞成語片語',
          lemma: 'make them talk',
          meaning: '引發萬眾熱議 / 成為全城話題焦點',
          explanation: '使役動詞 make + 縮讀代名詞 \'em（= them）+ 原形動詞受詞補語 talk。指以無與倫比的表現激發眾人熱烈話題。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主格代名詞 (We) + 使役動詞 (make) + 弱化受詞代名詞 (\'em) + 原形補語 (talk) + 四連音節奏重複',
          tokens: [
            { term: 'We', role: '主詞', desc: '引領話題風潮的主角。' },
            { term: 'make', role: '使役動詞', desc: '促成、使之發生。' },
            { term: '\'em', role: '受詞代名詞', desc: 'them 的極致縮讀弱化。' },
            { term: 'talk', role: '原形動詞補語', desc: '使役動詞後省略 to。' }
          ]
        },
        pronunciation: {
          actualSound: '[위 메이큼 톡 톡 톡 톡]',
          singingTips: '「make \'em」連讀成 [ˈmeɪ-kəm]，四個「talk」像打字機快門一樣嗒嗒嗒敲擊，咬字要極度精準俐落。',
          rules: [
            {
              title: 'Them -> \'Em 代名詞弱化 (Elision of Th)',
              badge: '口語連音',
              detail: '非重讀代名詞 them 的子音 th 脫落，弱化為輕柔的 [əm]，與前字尾子音自然連讀。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '話題女王 / 話題焦點',
              badge: '熱議中心',
              form: 'We make \'em talk talk talk talk.',
              scene: '發布轟動新作品，席捲全網熱搜'
            },
            {
              name: '日常口語 (Casual)',
              badge: '引發轟動',
              form: 'Whenever we step out, people can\'t stop talking about us.',
              scene: '與好友盛裝赴宴引來全場讚嘆目光'
            },
            {
              name: '公關傳播學 (Viral Media Impact)',
              badge: '傳播效應',
              form: 'Our campaign organically generates widespread public discourse and viral engagement.',
              scene: '社群行銷病毒式擴散效益報告'
            }
          ],
          realLifeExample: {
            scenario: '新單曲 MV 一上線立刻包攬推特全球趨勢榜首',
            dialogue: [
              { speaker: 'Producer', text: 'The new video hit number one trending in over 40 countries!', trans: '新影片在超過 40 個國家登上發燒趨勢第一名！' },
              { speaker: 'Artist', text: 'That\'s what we do. We make \'em talk!', trans: '這就是我們的實力。一出手就讓全世界爭相討論！' }
            ]
          }
        }
      }
    },
    {
      id: 'cc-en-5',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:33',
      timeSec: 33.7,
      korean: 'I need a van to hold all my bags',
      text: 'I need a van to hold all my bags',
      romanization: '/aɪ niːd ə væn tuː hoʊld ɔːl maɪ bæɡz/',
      naturalTranslation: '我需要一整輛休旅大貨車，才能裝得下我全部的戰利品與賺進的大把鈔票！',
      pillChips: [
        {
          id: 'pe1',
          text: 'a van',
          rom: '/ə væn/',
          type: 'noun',
          typeLabel: '大型箱型廂型車',
          lemma: 'van',
          meaning: '廂型車 / 貨車',
          explanation: '普通跑車後車廂已經裝不下，需要大型廂型車才能載走，誇張修辭！'
        },
        {
          id: 'pe2',
          text: 'hold all my bags',
          rom: '/hoʊld ɔːl maɪ bæɡz/',
          type: 'pun-slang',
          typeLabel: '嘻哈絕妙雙關語',
          lemma: 'hold bags',
          meaning: '裝滿精品包包 / 裝滿賺進的大筆鈔票 (Bag of Money)',
          explanation: '嘻哈經典俚語！「Secure the bag / Get the bag」指賺大錢、大獲豐收。此處既指名牌精品購物袋，又雙關無數裝滿現金的麻袋！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主格代名詞 (I) + 及物動詞 (need) + 受詞名詞 (a van) + 表目的不定詞片語 (to hold all my bags)',
          tokens: [
            { term: 'need a van', role: '核心動賓', desc: '需要大容量車輛。' },
            { term: 'to hold', role: '不定詞目的狀語', desc: '為了容納承載。' },
            { term: 'all my bags', role: '雙關受詞', desc: '指稱奢侈購物袋與巨額財富。' }
          ]
        },
        pronunciation: {
          actualSound: '[아이 니드 어 밴 투 홀드 올 마이 백스]',
          singingTips: '「need a」連音成 [niː-də]；「hold all」連音成 [hoʊl-dɔːl]；bags 尾音 z 飽滿沉穩。',
          rules: [
            {
              title: 'Secure the Bag 嘻哈文化起源',
              badge: '財富黑話',
              detail: 'Bag 在現代饒舌詞彙中專指大筆錢財（Money bag），代表商業上的巨大成功與財務自由。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈財富 / 幽默誇張',
              badge: '滿載而歸',
              form: 'I need a van to hold all my bags.',
              scene: '大獲全勝購物狂歡、事業迎來巨額豐收'
            },
            {
              name: '日常口語 (Casual)',
              badge: '生活幽默',
              form: 'I went a little crazy shopping today, I might need extra luggage!',
              scene: '去國外度假購物買了太多東西向朋友打趣'
            },
            {
              name: '商務盈利 (Commercial Yield)',
              badge: '商業碩果',
              form: 'Our recent ventures have generated monumental financial returns.',
              scene: '投資成果總結會議'
            }
          ],
          realLifeExample: {
            scenario: '海外巡迴演唱會周邊與版稅大豐收後的開玩笑',
            dialogue: [
              { speaker: 'Manager', text: 'Merchandise sales broke every single record this tour!', trans: '這次巡演的周邊商品銷售打破了所有過往紀錄！' },
              { speaker: 'Member', text: 'Haha, told you! We\'re gonna need a van to hold all these bags!', trans: '哈哈，我就說吧！我們真得叫一輛大貨車才能裝下這些戰利品了！' }
            ]
          }
        }
      }
    },
    {
      id: 'cc-en-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:37',
      timeSec: 37.4,
      korean: 'Here with my girls we step on the scene',
      text: 'Here with my girls we step on the scene',
      romanization: '/hɪər wɪð maɪ ɡɜːrlz wiː stɛp ɒn ðə siːn/',
      naturalTranslation: '與我身旁的好姐妹們一同並肩亮相，華麗空降征服全場！',
      pillChips: [
        {
          id: 'pe1',
          text: 'with my girls',
          rom: '/wɪð maɪ ɡɜːrlz/',
          type: 'prep-phrase',
          typeLabel: '團結姐妹情片語',
          lemma: 'my girls',
          meaning: '與我的姐妹團員們',
          explanation: '表達女團成員之間無比信任、情同手足的深厚革命情感。'
        },
        {
          id: 'pe2',
          text: 'step on the scene',
          rom: '/stɛp ɒn ðə siːn/',
          type: 'high-frequency-idiom',
          typeLabel: '經典登場成語',
          lemma: 'step on the scene',
          meaning: '強勢登場 / 空降現場引爆注目',
          explanation: '源自演藝界走上舞台，引申為一現身公眾場合就立刻掌控焦點、成為全場萬眾矚目的中心。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '地點副詞 (Here) + 伴隨介系詞片語 (with my girls) + 主格代名詞 (we) + 片語動詞 (step on the scene)',
          tokens: [
            { term: 'Here', role: '地點副詞', desc: '標示身處的焦點位置。' },
            { term: 'with my girls', role: '伴隨狀語', desc: '凸顯姐妹團魂。' },
            { term: 'step on the scene', role: '動詞片語', desc: '霸氣登場現身。' }
          ]
        },
        pronunciation: {
          actualSound: '[히어 위드 마이 걸즈 위 스텝 온 더 씬]',
          singingTips: '「step on」連音成 [stɛ-pɒn]，scene 結尾長母音 [siːn] 穿透力強，自帶聚光燈效果。',
          rules: [
            {
              title: 'On the scene 的文化意境',
              badge: '道地成語',
              detail: '指融入或引領某個特定文化圈（Hip-Hop scene, Fashion scene），在此指成為主流焦點。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '姐妹團魂 / 霸氣登場',
              badge: '高光亮相',
              form: 'Here with my girls we step on the scene.',
              scene: '全體成員步入派對、紅毯或大舞台'
            },
            {
              name: '日常口語 (Casual)',
              badge: '閨蜜同行',
              form: 'Me and my best friends are arriving to have the best night out.',
              scene: '與好閨蜜盛裝出席聚會'
            },
            {
              name: '正式登場 (Grand Entrance)',
              badge: '尊貴亮相',
              form: 'The ensemble makes their distinguished arrival upon the premier international stage.',
              scene: '國際電影節頒獎典禮官方介紹辭'
            }
          ],
          realLifeExample: {
            scenario: '一群好友精心打扮抵達跨年倒數派對門口',
            dialogue: [
              { speaker: 'Friend A', text: 'Everyone stopped talking when we walked in the door!', trans: '我們一走進大門，全場大家都不約而同停下講話看我們了！' },
              { speaker: 'Friend B', text: 'Of course! When we step on the scene, we own the room.', trans: '那是當然！當我們姐妹登場時，全場焦點就在我們身上。' }
            ]
          }
        }
      }
    },
    {
      id: 'cc-en-7',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:39',
      timeSec: 39.1,
      korean: 'We do it big you know what I mean',
      text: 'We do it big you know what I mean',
      romanization: '/wiː duː ɪt bɪɡ juː noʊ wɒt aɪ miːn/',
      naturalTranslation: '我們要搞就搞最大的、展現大格局，你懂我意思吧！',
      pillChips: [
        {
          id: 'pe1',
          text: 'do it big',
          rom: '/duː ɪt bɪɡ/',
          type: 'american-idiom',
          typeLabel: '美語大格局成語',
          lemma: 'do it big',
          meaning: '大手筆搞大事 / 不做則已一做鳴驚人',
          explanation: '美式生活與音樂高頻成語！指行事氣魄非凡、毫不小家子氣、投入全部資源做最震撼的偉業。'
        },
        {
          id: 'pe2',
          text: 'you know what I mean',
          rom: '/juː noʊ wɒt aɪ miːn/',
          type: 'colloquial-filler',
          typeLabel: '口語共鳴結尾句',
          lemma: 'you know what I mean',
          meaning: '你懂我的意思吧 / 你心領神會吧',
          explanation: '英美口語最自然的對話標記詞，邀請聽眾產生情感與默契共振。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主格代名詞 (We) + 及物動詞片語 (do it big) + 附加問句名詞子句 (you know what I mean)',
          tokens: [
            { term: 'do it big', role: '成語謂語', desc: '大膽開拓、大手筆作為。' },
            { term: 'what I mean', role: '名詞子句受詞', desc: 'know 的受詞，指說話者的心境與追求。' }
          ]
        },
        pronunciation: {
          actualSound: '[위 두 잇 빅 유 노 왓 아이 민]',
          singingTips: '「do it big」中的 it [ɪt] 不完全爆破；「scene」與「mean」完美押長母音 [iːn]！',
          rules: [
            {
              title: '押韻對仗 (End Rhyme: Scene / Mean)',
              badge: '韻律美學',
              detail: '前一句的「scene」[siːn] 與本句「mean」[miːn] 形成清脆的雙行排比雙押。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '大氣豪邁 / 街頭大格局',
              badge: '大刀闊斧',
              form: 'We do it big you know what I mean.',
              scene: '宣示重大企劃將以超大規模震撼問世'
            },
            {
              name: '日常口語 (Casual)',
              badge: '豪邁爽朗',
              form: 'We always go all out, you know how we roll!',
              scene: '為好友籌辦一場驚喜慶生派對'
            },
            {
              name: '戰略願景 (Strategic Vision)',
              badge: '宏大格局',
              form: 'We execute initiatives on an unprecedented, grand scale of ambition.',
              scene: '跨國戰略合併發布會總裁致辭'
            }
          ],
          realLifeExample: {
            scenario: '籌備年度音樂節舞台規格討論會',
            dialogue: [
              { speaker: 'Producer', text: 'Should we stick with the standard stage design to save budget?', trans: '我們是否該採用標準舞台設計以節省預算呢？' },
              { speaker: 'Director', text: 'No way! We do it big, you know what I mean? 360-degree LED screens!', trans: '絕不！我們要做就搞大的，你懂的吧？直接上 360 度全景 LED 巨幕！' }
            ]
          }
        }
      }
    },
    {
      id: 'cc-en-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:52',
      timeSec: 52.9,
      korean: 'No I ain’t the one to play with',
      text: 'No I ain’t the one to play with',
      romanization: '/noʊ aɪ eɪnt ðə wʌn tuː pleɪ wɪð/',
      naturalTranslation: '休想試探我，我可絕不是任人隨便招惹糊弄的角色！',
      pillChips: [
        {
          id: 'pe1',
          text: 'ain\'t',
          rom: '/eɪnt/',
          type: 'slang-contraction',
          typeLabel: '強烈否定縮約',
          lemma: 'am not',
          meaning: '絕不是 / 根本不是',
          explanation: '口語縮寫，比標準的 I am not 具備更強烈的威嚴感與警戒態度。'
        },
        {
          id: 'pe2',
          text: 'the one to play with',
          rom: '/ðə wʌn tuː pleɪ wɪð/',
          type: 'warning-idiom',
          typeLabel: '街頭警戒成語',
          lemma: 'the one to mess with',
          meaning: '可以隨便招惹 / 輕慢對待的軟柿子',
          explanation: '街頭警告名句「I ain\'t the one to play with / mess with」字面是「不是可以拿來開玩笑的人」，意即「惹毛我有你好看的，休想挑釁我」！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '否定副詞 (No) + 主格 (I) + 否定助動詞 (ain\'t) + 代名詞表語 (the one) + 介系詞不定詞修飾語 (to play with)',
          tokens: [
            { term: 'ain\'t', role: '否定詞', desc: '等同於 am not。' },
            { term: 'the one', role: '表語代名詞', desc: '特定對象。' },
            { term: 'to play with', role: '形容詞性不定詞', desc: '修飾 the one，play with 意為輕慢玩弄、隨便招惹。' }
          ]
        },
        pronunciation: {
          actualSound: '[노 아이 에인트 더 원 투 플레이 위드]',
          singingTips: '低音咬字要自帶冷徹鋒芒！「ain\'t」的 Stop T 閉氣，結尾「with」輕觸舌尖齒間，壓迫感拉滿。',
          rules: [
            {
              title: 'Play with 的引申警示含義',
              badge: '警示口語',
              detail: '除字面玩耍外，Don\'t play with me / I ain\'t the one to play with 專用於嚴正警告對方不要越界挑釁。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '街頭狠話 / 霸氣警告',
              badge: '不容招惹',
              form: 'No I ain\'t the one to play with.',
              scene: '遭遇小人挑釁時的強悍警告'
            },
            {
              name: '日常口語 (Casual Boundary)',
              badge: '劃清界限',
              form: 'Don\'t mess with me, I take my boundaries very seriously.',
              scene: '嚴肅告知他人不要挑戰自己的底線'
            },
            {
              name: '正式堅定聲明 (Firm Assertion)',
              badge: '嚴正立場',
              form: 'I will not tolerate any attempt to undermine or dismiss my professional integrity.',
              scene: '商務談判中嚴詞駁斥對方的輕慢與試探'
            }
          ],
          realLifeExample: {
            scenario: '面對競爭對手試圖在背後搞小動作搶走成果',
            dialogue: [
              { speaker: 'Rival', text: 'Maybe you should just step aside and let us take this client.', trans: '也許你該靠邊站，把這個客戶讓給我們。' },
              { speaker: 'You', text: 'Back off. No, I ain\'t the one to play with.', trans: '退後點。別惹我，我可不是隨便任人捏的軟柿子。' }
            ]
          }
        }
      }
    }
  ]
};
