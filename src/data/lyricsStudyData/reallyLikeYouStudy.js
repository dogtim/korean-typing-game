// BABYMONSTER - 《Really Like You》 韓英雙語 R&B 深度研習資料包
// 本曲為 BABYMONSTER 溫柔俏皮的 R&B 代表作！
// 特色：韓國生悶氣流行語「나 꽁했어（鬧彆扭）」、遠距離通話、曖昧撒嬌語氣、認輸告白名場面「내가 졌으니까」
// 全篇精選 12 句核心歌詞：涵蓋 Intro Hook、Verse 1 傲嬌撒嬌、Verse 2 酥麻心動、Pre-Chorus 晨昏思念、Verse 3 字母解鎖告白、Bridge 夢中相遇與 Outro 甜蜜認輸！

export const REALLY_LIKE_YOU_STUDY_DATA = {
  id: 'really_like_you',
  title: 'Really Like You',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: 'XShaIZs7J7M',
  altYoutubeIds: ['XShaIZs7J7M', 'eCFlXhPmaBs', '4qL5eP8J0uY', 'really-like-you', 'really_like_you'],
  sentences: [
    // =========================================================================
    // 1. Intro Hook: 開門見山甜美表白
    // =========================================================================
    {
      id: 'rly-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:03',
      timeSec: 3.3,
      korean: '말하고 싶어 To say I love you, but boy, I like you, really really like you',
      text: '말하고 싶어 To say I love you, but boy, I like you, really really like you',
      romanization: 'Mal-ha-go sip-eo To say I love you, but boy, I like you, really really like you',
      naturalTranslation: '好想親口對你訴說，雖然深愛難以啟齒，但我真的、真的好喜歡你！',
      pillChips: [
        {
          id: 'rp1_1',
          text: '말하고 싶어',
          rom: 'mal-ha-go sip-eo',
          type: 'korean-grammar',
          typeLabel: '動詞幹 + 願望語尾',
          lemma: '말하다 + -고 싶다',
          meaning: '好想親口訴說',
          explanation: '動詞「말하다（訴說）」加上表示第一人稱願望的語尾「-고 싶다（想做…）」，流露真摯又害羞的心聲。'
        },
        {
          id: 'rp1_2',
          text: 'To say I love you',
          rom: '/tə seɪ aɪ lʌv juː/',
          type: 'phrase',
          typeLabel: '英文不定詞目的片語',
          lemma: 'say I love you',
          meaning: '親口說出我愛你',
          explanation: '表達想正式向對方宣告愛意的目的。但在戀愛初期直接說「Love」過於沉重，因此隨後轉折為甜美純真的「Like」。'
        },
        {
          id: 'rp1_3',
          text: 'really really like you',
          rom: '/ˈrɪəli ˈrɪəli laɪk juː/',
          type: 'slang',
          typeLabel: '副詞疊加強調流行語',
          lemma: 'really like you',
          meaning: '真的、真的好喜歡你',
          explanation: '副詞「really」連續重複兩次，強化青澀心動的純粹與滿滿的雀躍悸動！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '動詞願望型 (말하고 싶어) + 英文目的不定詞 (To say I love you) + 轉折輕量告白句 (but boy, I like you, really really like you)',
          tokens: [
            { term: '말하다', role: '動詞原形', desc: '說話、表達。' },
            { term: '-고 싶다', role: '願望輔助詞', desc: '第一人稱表示想做某動作（平語口語為 -고 싶어）。' },
            { term: 'To say', role: '英文不定詞', desc: '表達動作目的。' },
            { term: 'really really like', role: '副詞加強短語', desc: '強調純真無負擔的純粹喜歡。' }
          ]
        },
        pronunciation: {
          actualSound: '[말하고 시퍼 투 세이 아이 러브 유, 벗 보이 아이 라익 유 릴리 릴리 라익 유]',
          singingTips: '「싶어」要帶有連音氣息，尾音輕柔上揚，營造出少女初戀的小小羞赧感。',
          rules: [
            {
              title: '激音連音化 (격음화 연음)',
              badge: '韓語音變',
              detail: '「싶어」中收音 ㅍ 為激音，遇到後方初聲母音 ㅇ 時連上去讀作 [시퍼] (si-peo)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原型 (平語 반말)',
              badge: '歌詞原型',
              form: '말하고 싶어, 너를 정말 많이 좋아해.',
              scene: '同齡好友或暗戀對象面前真情流露'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '정말 많이 좋아한다고 꼭 말씀드리고 싶어요.',
              scene: '日常向學長姐或喜歡的人禮貌誠懇地表白'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '당신을 진심으로 좋아하고 있음을 전하고 싶습니다.',
              scene: '正式情書書信或深情告白儀式'
            }
          ],
          realLifeExample: {
            scenario: '在校園圖書館門口鼓起勇氣向暗戀對象表白',
            dialogue: [
              { speaker: 'Friend', text: 'Are you finally going to confess your feelings to him?', trans: '你終於打算向他表明心意了嗎？' },
              { speaker: 'You', text: '말하고 싶어! I really really like him. Wish me luck!', trans: '我想親口告訴他！我真的非常喜歡他。祝我好運吧！' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 2. Verse 1 Part A: 傲嬌生悶氣日常俗語「나 꽁했어」
    // =========================================================================
    {
      id: 'rly-ko-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:14',
      timeSec: 14.5,
      korean: 'Hey, what you doin’? 기다리잖아 Call back, uh, 온도 Check 했잖아 나 꽁했어',
      text: 'Hey, what you doin’? 기다리잖아 Call back, uh, 온도 Check 했잖아 나 꽁했어',
      romanization: 'Hey, what you doin’? Gi-da-ri-jan-a Call back, uh, on-do Check haet-jan-a na kkong-haess-eo',
      naturalTranslation: '嘿，你在幹嘛呢？我明明一直在苦等你的回電，你也感受到我的冷淡溫度了吧？我正在跟你鬧彆扭呢！',
      pillChips: [
        {
          id: 'rp2_1',
          text: '기다리잖아',
          rom: 'gi-da-ri-jan-a',
          type: 'korean-grammar',
          typeLabel: '動詞幹 + 確認反問語尾',
          lemma: '기다리다 + -잖아(요)',
          meaning: '我不是一直在等你嘛',
          explanation: '高頻語尾「-잖아」指「雙方皆知的事實」，在情侶語境中帶有俏皮的撒嬌與微嗔。'
        },
        {
          id: 'rp2_2',
          text: '온도 Check',
          rom: 'on-do Check',
          type: 'korean-english-blend',
          typeLabel: '情感溫度確認混搭詞',
          lemma: '온도 (溫度) + Check',
          meaning: '確認彼此的情感溫度',
          explanation: '比喻確認兩人間聊天氛圍是熾熱還是降至冰點，韓英混搭充滿時髦感。'
        },
        {
          id: 'rp2_3',
          text: '나 꽁했어',
          rom: 'na kkong-haess-eo',
          type: 'korean-slang-idiom',
          typeLabel: '韓國日常撒嬌生動俗語',
          lemma: '꽁하다 + -았/었어',
          meaning: '我鬧彆扭了 / 我在生悶氣呢',
          explanation: '極生動日常俗語！形容因小委屈或被冷落而噘著嘴鬧小脾氣、生悶氣（Pouting）的可愛模樣。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '怨念提醒句 (기다리잖아 Call back) + 狀態推斷句 (온도 Check 했잖아) + 傲嬌小脾氣 (나 꽁했어)',
          tokens: [
            { term: '기다리다', role: '動詞原形', desc: '等待。' },
            { term: '-잖아', role: '反問語尾', desc: '明明知道、不是…嘛（撒嬌微嗔）。' },
            { term: '온도 Check', role: '名詞片語', desc: '氣氛與心理溫度確認。' },
            { term: '꽁하다', role: '生動俗語', desc: '噘嘴生悶氣、鬧彆扭。' }
          ]
        },
        pronunciation: {
          actualSound: '[기다리자나 콜 백, 어, 온도 체크 핻자나 나 꽁핻써]',
          singingTips: '發「꽁했어」時雙唇微噘，帶有滿滿的傲嬌甜美 R&B 律動與輕快卡點。',
          rules: [
            {
              title: '收音 ㅆ 遇初聲 ㅇ 之連音 (연음화)',
              badge: '韓語音變',
              detail: '「했잖아」實讀 [핻자나]，「꽁했어」收音 ㅆ 遇母音 ㅇ 連音讀作 [꽁핻써] (kkong-haet-sseo)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '情侶戀愛撒嬌 (Playful Pouting)',
              badge: '戀愛傲嬌',
              form: '왜 연락이 없어? 나 지금 꽁해 있단 말이야.',
              scene: '對方太晚回訊息，向伴侶撒嬌表達小委屈'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '답장을 계속 기다렸잖아요, 나 지금 조금 삐쳤어요.',
              scene: '生活中溫和表達被冷落的無奈'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '회신을 애타게 기다리고 있었습니다.',
              scene: '正式公務商務等待回音'
            }
          ],
          realLifeExample: {
            scenario: '伴侶加班晚了三個小時才回覆訊息',
            dialogue: [
              { speaker: 'Boyfriend', text: '미안해! 오늘 갑자기 야근하느라 연락 못 했어.', trans: '對不起！今天臨時加班所以沒能及時聯絡你。' },
              { speaker: 'Girlfriend', text: '기다리잖아! 나 지금 완전 꽁했어. 얼른 맛있는 디저트 사 와.', trans: '我等了那麼久！我現在完全在生悶氣呢，快給我買好吃的甜點來賠罪。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 3. Verse 1 Part B: 被動依偎與撒嬌蓋被「감기고 싶어」
    // =========================================================================
    {
      id: 'rly-ko-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:19',
      timeSec: 19.3,
      korean: '추워 나 감기고 싶어, Hurry up 이불 가져와 덮어줘',
      text: '추워 나 감기고 싶어, Hurry up 이불 가져와 덮어줘',
      romanization: 'Chu-wo na gam-gi-go sip-eo, Hurry up i-bul ga-jyeo-wa deop-eo-jwo',
      naturalTranslation: '好冷啊我想緊緊依偎著你，快拿被子過來替我蓋上吧！',
      pillChips: [
        {
          id: 'rp3_1',
          text: '추워',
          rom: 'chu-wo',
          type: 'adjective',
          typeLabel: 'ㅂ不規則感官形容詞',
          lemma: '춥다 + -어',
          meaning: '好冷 / 天氣寒冷',
          explanation: '形容詞「춥다」遇母音語尾「-어」時，收音「ㅂ」轉化為「우」，結合成「추워」。'
        },
        {
          id: 'rp3_2',
          text: '감기고 싶어',
          rom: 'gam-gi-go sip-eo',
          type: 'verb-action',
          typeLabel: '被動動詞 + 願望語尾',
          lemma: '감기다 + -고 싶다',
          meaning: '想被緊緊環抱/依偎',
          explanation: '動詞「감다（纏繞/環繞）」的被動形「감기다」，比喻像藤蔓般被溫柔環抱、緊密依偎在對方懷裡。'
        },
        {
          id: 'rp3_3',
          text: '덮어줘',
          rom: 'deop-eo-jwo',
          type: 'korean-grammar',
          typeLabel: '動詞幹 + 恩惠請求語尾',
          lemma: '덮다 + -아/어 주다',
          meaning: '替我蓋上 / 幫我覆蓋',
          explanation: '動詞「덮다（覆蓋/蓋上）」加上「-아/어 주다（為某人做某事）」，以平語懇請對方為自己蓋被子。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '感官形容詞 (추워) + 被動依偎願望句 (감기고 싶어) + 英文急促祈使 (Hurry up) + 恩惠請求命令句 (이불 가져와 덮어줘)',
          tokens: [
            { term: '춥다', role: '感官形容詞', desc: '寒冷（ㅂ 不規則音變為 추워）。' },
            { term: '감기다', role: '被動動詞', desc: '被環繞、依偎相擁。' },
            { term: '이불', role: '名詞賓語', desc: '棉被。' },
            { term: '가져오다', role: '複合動詞', desc: '拿過來。' },
            { term: '덮어주다', role: '恩惠動詞', desc: '為某人蓋上被子。' }
          ]
        },
        pronunciation: {
          actualSound: '[추워 나 감기고 시퍼, 허리 업 이불 가져와 더퍼줘]',
          singingTips: '「덮어줘」收音 ㅍ 遇到母音 ㅓ 流暢連音為 [더퍼줘]，語音飽滿圓潤。',
          rules: [
            {
              title: '激音化連音 (격음화 연음)',
              badge: '韓語音變',
              detail: '「덮어줘」中收音 ㅍ 遇母音連音，實讀 [더퍼줘] (deo-peo-jwo)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '추워! Hurry up, 이불 가져와서 같이 덮자.',
              scene: '情侶或家人之間隨性取暖撒嬌'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '날씨가 추워요, 따뜻하게 안아주고 이불을 덮어주세요.',
              scene: '日常溫柔客氣地請求照顧'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '따뜻한 온기를 나누어 주시기 바랍니다.',
              scene: '正式敬語表述'
            }
          ],
          realLifeExample: {
            scenario: '寒流冬夜窩在沙發上看電影，感到客廳有些微涼',
            dialogue: [
              { speaker: 'Friend', text: 'The living room is getting quite chilly.', trans: '客廳變得有點涼颼颼的。' },
              { speaker: 'You', text: '추워! Hurry up, 이불 가져와서 같이 덮자.', trans: '好冷！快去拿毯子過來一起蓋吧。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 4. Verse 1 Part C: 外帶咖啡比喻與形影不離「빙빙 놀고 싶어」
    // =========================================================================
    {
      id: 'rly-ko-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:26',
      timeSec: 26.4,
      korean: '날 보러 와 커피처럼 Take out, 너랑 같이 빙빙 놀고 싶어 Errtime',
      text: '날 보러 와 커피처럼 Take out, 너랑 같이 빙빙 놀고 싶어 Errtime',
      romanization: 'Nal bo-reo wa keo-pi-cheo-reom Take out, neo-rang gat-i bing-bing nol-go sip-eo Errtime',
      naturalTranslation: '快來見我吧就像外帶一杯咖啡一樣迅速，好想跟你一起形影不離到處閒晃玩耍每一分每一秒！',
      pillChips: [
        {
          id: 'rp4_1',
          text: '날 보러 와',
          rom: 'nal bo-reo wa',
          type: 'phrase',
          typeLabel: '目的動作祈使詞組',
          lemma: '나를 + 보다 + -(으)러 + 오다',
          meaning: '快來看我 / 來見我',
          explanation: '代詞「나（我）」加賓格「-를」縮略為「날」，搭配目的連接語尾「-(으)러（為了…而做）」與來訪動詞「오다」。'
        },
        {
          id: 'rp4_2',
          text: '커피처럼 Take out',
          rom: 'keo-pi-cheo-reom Take out',
          type: 'korean-english-blend',
          typeLabel: '明喻副詞片語',
          lemma: '커피 + -처럼 + Take out',
          meaning: '就像外帶咖啡一樣迅速便利',
          explanation: '比喻隨傳隨到、毫不猶豫地見面，現代都市戀愛特有的輕快比喻。'
        },
        {
          id: 'rp4_3',
          text: '빙빙',
          rom: 'bing-bing',
          type: 'mimetic-word',
          typeLabel: '擬態副詞 (遊蕩/繞圈)',
          lemma: '빙빙',
          meaning: '轉來轉去 / 形影不離閒晃',
          explanation: '形容兩個人親暱黏在一起、漫無目的地轉悠閒逛，畫面感極強。'
        },
        {
          id: 'rp4_4',
          text: 'Errtime',
          rom: '/ˈɛvri taɪm/',
          type: 'slang',
          typeLabel: '美式嘻哈街頭縮寫',
          lemma: 'every time',
          meaning: '每一分每一秒 / 無時無刻',
          explanation: '流行音樂中常見的「every time」口語連讀縮寫，帶出俏皮的節奏韻律。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '目的動作祈使 (날 보러 와) + 明喻副詞 (커피처럼 Take out) + 伴隨擬態願望句 (너랑 같이 빙빙 놀고 싶어 Errtime)',
          tokens: [
            { term: '날 (나를)', role: '賓格代詞', desc: '我。' },
            { term: '보러 오다', role: '目的動作動詞', desc: '為了見面而前來。' },
            { term: '-처럼', role: '比喻助詞', desc: '像…一樣。' },
            { term: '빙빙', role: '擬態副詞', desc: '打轉、到處遊蕩。' },
            { term: '놀고 싶다', role: '願望動詞', desc: '想要玩耍狂歡。' }
          ]
        },
        pronunciation: {
          actualSound: '[날 보러 와 커피처럼 테이크 아웃, 너랑 가치 빙빙 놀고 시퍼 에브리타임]',
          singingTips: '注意「같이」的腭化讀音為 [가치]，節奏要像外帶咖啡般輕快俐落。',
          rules: [
            {
              title: '腭化現象 (구개음화)',
              badge: '韓語音變',
              detail: '「같이」中收音 ㅌ 遇到母音 ㅣ 時腭化發為 [ㅊ]，實讀作 [가치] (ga-chi)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '날 보러 와! 커피 사 줄게, 같이 산책이나 하자.',
              scene: '週末隨意通話約喜歡的同齡朋友出門'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '날 보러 와주세요, 함께 즐겁게 놀고 싶어요.',
              scene: '日常溫柔邀約'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '저를 찾아와 주셔서 소중한 시간을 함께해 주십시오.',
              scene: '正式接待與致意'
            }
          ],
          realLifeExample: {
            scenario: '週末在家無聊時，打電話給暗戀對象約對方見面喝咖啡',
            dialogue: [
              { speaker: 'You', text: '날 보러 와! 커피 사 줄게, 같이 산책이나 하자.', trans: '快來找我！我請你喝咖啡，一起去散散步吧。' },
              { speaker: 'Crush', text: 'Sounds perfect! I’ll be there in ten minutes.', trans: '聽起來太棒了！我十分鐘後到。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 5. Verse 2 Part A: 心動觸電擬態詞「간질간질해」
    // =========================================================================
    {
      id: 'rly-ko-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:34',
      timeSec: 34.4,
      korean: '내 맘이 간질간질해 I’m sick, Always you and me like a symphony',
      text: '내 맘이 간질간질해 I’m sick, Always you and me like a symphony',
      romanization: 'Nae mam-i gan-jil-gan-jil-hae I’m sick, Always you and me like a symphony',
      naturalTranslation: '我的心頭小鹿亂撞酥酥癢癢的像生了場相思病，你與我如同和諧交響樂般天生一對！',
      pillChips: [
        {
          id: 'rp5_1',
          text: '내 맘이',
          rom: 'nae mam-i',
          type: 'noun',
          typeLabel: '代名詞 + 縮略名詞 + 主格',
          lemma: '나의 + 마음 + -이',
          meaning: '我的心 / 我的內心感受',
          explanation: '「나의（我的）」縮為「내」，「마음（心）」在口語和歌詞中常縮寫為「맘」。'
        },
        {
          id: 'rp5_2',
          text: '간질간질해',
          rom: 'gan-jil-gan-jil-hae',
          type: 'mimetic-word',
          typeLabel: '經典戀愛心動擬態詞',
          lemma: '간질간질하다',
          meaning: '酥酥癢癢 / 小鹿亂撞',
          explanation: '極道地的韓語心理擬態詞！形容心臟深處因為極度悸動、觸電而感受到的「酥癢麻酥感」，生動描繪戀愛初期受寵若驚的微妙心理。'
        },
        {
          id: 'rp5_3',
          text: 'like a symphony',
          rom: '/laɪk ə ˈsɪmfəni/',
          type: 'phrase',
          typeLabel: '音樂明喻比喻片語',
          lemma: 'like a symphony',
          meaning: '如同和諧交響樂',
          explanation: '比喻兩人的頻率、步調與心跳完美契合，如同一曲宏大精緻的和聲樂章。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '心理擬態描摹句 (내 맘이 간질간질해) + 英文相思隱喻 (I’m sick) + 和諧比喻排比 (Always you and me like a symphony)',
          tokens: [
            { term: '내 맘 (나의 마음)', role: '主語', desc: '我的心靈。' },
            { term: '간질간질하다', role: '擬態形容詞', desc: '發癢、小鹿亂撞。' },
            { term: 'I’m sick', role: '隱喻修辭', desc: '為你害上了相思病。' },
            { term: 'like a symphony', role: '比喻狀語', desc: '像和諧協奏的交響樂。' }
          ]
        },
        pronunciation: {
          actualSound: '[내 마미 간질간질해 아임 씩, 올웨이즈 유 앤 미 라익 어 심포니]',
          singingTips: 'Pharita 的靈魂唱腔需要微帶氣音，「간질간질해」輕巧飄逸，表現出羽毛撫過心坎的酥麻感。',
          rules: [
            {
              title: '連音化現象 (연음화)',
              badge: '韓語音變',
              detail: '「맘이」中收音 ㅁ 移至後方初聲母音 ㅇ，流暢讀作 [마미] (ma-mi)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '내 맘이 완전 간질간질해! 심장이 터질 것 같아.',
              scene: '同齡閨蜜好友傾訴暗戀觸電感覺'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '가슴이 간질간질하고 너무 설레요.',
              scene: '日常含蓄表達心動之情'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '마음이 벅차오르고 무척 설렙니다.',
              scene: '正式抒發感激與喜悅'
            }
          ],
          realLifeExample: {
            scenario: '向閨蜜描述被暗戀對象牽到手時的觸電心跳',
            dialogue: [
              { speaker: 'Friend', text: 'How did it feel when he held your hand?', trans: '當他牽起你的手時，是什麼感覺？' },
              { speaker: 'You', text: '내 맘이 완전 간질간질했어! I literally couldn\'t breathe!', trans: '我的心臟簡直癢到不行酥酥麻麻的！我連大氣都不敢喘了！' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 6. Verse 2 Part B: 雙重治癒比較句「You make a bad day better」
    // =========================================================================
    {
      id: 'rly-en-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:44',
      timeSec: 44.9,
      korean: '너의 넘치는 매력, You make a bad day better, you make a good day better too',
      text: '너의 넘치는 매력, You make a bad day better, you make a good day better too',
      romanization: 'Neo-ui neom-chi-neun mae-ryeok, You make a bad day better, you make a good day better too',
      naturalTranslation: '你那滿溢的迷人魅力，讓糟糕失落的壞日子變好，更讓本就美好的日子加倍璀璨！',
      pillChips: [
        {
          id: 'rp6_1',
          text: '넘치는 매력',
          rom: 'neom-chi-neun mae-ryeok',
          type: 'noun',
          typeLabel: '定語修飾名詞片語',
          lemma: '넘치다 + -는 + 매력',
          meaning: '滿溢的魅力 / 傾瀉的吸引力',
          explanation: '動詞「넘치다（溢出/充沛）」接現在時定語詞尾「-는」，修飾名詞「매력（魅力）」。'
        },
        {
          id: 'rp6_2',
          text: 'make a bad day better',
          rom: '/meɪk ə bæd deɪ ˈbɛtər/',
          type: 'phrase',
          typeLabel: '使役比較治癒片語',
          lemma: 'make something better',
          meaning: '讓糟糕的日子轉好',
          explanation: '動詞 make + 受詞 + 比較級形容詞，表達對方能將生活中的陰霾一掃而空的治癒能量。'
        },
        {
          id: 'rp6_3',
          text: 'better too',
          rom: '/ˈbɛtər tuː/',
          type: 'phrase',
          typeLabel: '雙重遞進強調片語',
          lemma: 'better too',
          meaning: '也加倍美好',
          explanation: '與前一句的「bad day」形成鮮明正反對比，點明無論順境或逆境，對方的存在都讓生命錦上添花。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞定語結構 (너의 넘치는 매력) + 使役動詞比較排比句 (make a bad day better, you make a good day better too)',
          tokens: [
            { term: '넘치는', role: '現在時定語', desc: '充沛溢出的。' },
            { term: '매력', role: '核心名詞', desc: '魅力。' },
            { term: 'make ... better', role: '使役動詞句型', desc: '使…變得更好更完美。' },
            { term: 'bad day / good day', role: '正反排比', desc: '低谷或順境。' }
          ]
        },
        pronunciation: {
          actualSound: '[너의 넘치는 매력, 유 메이크 어 배드 데이 베러, 유 메이크 어 굿 데이 베러 투]',
          singingTips: 'Chiquita 唱這句時咬字活潑明亮，美式發音中「better」的 t 弱化為閃音（Flap T），清脆躍動。',
          rules: [
            {
              title: '齒齦閃音 (Flap T)',
              badge: '美式英語發音',
              detail: '單字「better」處於兩母音之間且非重音音節，t 發成輕快的閃音 [ɾ]，近似 [베러]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '至高讚譽情話 (Deep Appreciation)',
              badge: '暖心致謝',
              form: 'You truly make every single bad day better. Thank you for being in my life.',
              scene: '真誠向深愛的人表達謝意與愛意'
            },
            {
              name: '日常敬語 (해요體對應)',
              badge: '生活推薦',
              form: '당신은 지친 날도 기쁜 날도 전부 더 빛나게 만들어줘요.',
              scene: '日常溫馨告白'
            },
            {
              name: '正式敬語 (하십시오體對應)',
              badge: '最高敬意',
              form: '언제나 저에게 큰 힘과 위로가 되어 주셔서 감사드립니다.',
              scene: '正式感謝辭或卡片題字'
            }
          ],
          realLifeExample: {
            scenario: '感謝低潮時期始終陪伴在身邊的伴侶或摯友',
            dialogue: [
              { speaker: 'Friend', text: 'I\'m always here for you, through thick and thin.', trans: '無論順境或逆境，我都會一直陪在你身邊。' },
              { speaker: 'You', text: 'You truly make every single bad day better. Thank you for being in my life.', trans: '你真的讓所有難熬的日子都變好了。謝謝你出現在我的生命裡。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 7. Pre-Chorus: 晨昏思念雙重助詞「아침부터 새벽까지」
    // =========================================================================
    {
      id: 'rly-ko-7',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:54',
      timeSec: 54.0,
      korean: '눈을 뜨는 아침부터 달이 지는 새벽까지, 네 생각에 행복해 아마 모를걸',
      text: '눈을 뜨는 아침부터 달이 지는 새벽까지, 네 생각에 행복해 아마 모를걸',
      romanization: 'Nun-eul tteu-neun a-chim-bu-teo dal-i ji-neun sae-byeok-kka-ji, ne saeng-gak-e haeng-bok-hae a-ma mo-reul-geol',
      naturalTranslation: '從睜開雙眼的清晨直至月落的拂曉黎明，只要一想起你我便幸福滿溢，你大概還不知道吧！',
      pillChips: [
        {
          id: 'rp7_1',
          text: '아침부터 새벽까지',
          rom: 'a-chim-bu-teo sae-byeok-kka-ji',
          type: 'korean-grammar',
          typeLabel: '時間起止雙重助詞對',
          lemma: '-부터 (起) ~ -까지 (止)',
          meaning: '從早到晚 / 從早晨直至拂曉',
          explanation: '助詞「-부터」表示時間或地點的起點，「-까지」表示終點，連用構成完整的時間跨度。'
        },
        {
          id: 'rp7_2',
          text: '달이 지는',
          rom: 'dal-i ji-neun',
          type: 'phrase',
          typeLabel: '自然景觀定語詞組',
          lemma: '달이 지다 + -는',
          meaning: '月亮西沉落下的',
          explanation: '固有詞名詞「달（月亮）」加主格助詞「-이」，搭配動詞「지다（落/西沉）」修飾名詞「새벽（清晨/黎明）」。'
        },
        {
          id: 'rp7_3',
          text: '네 생각에',
          rom: 'ne saeng-gak-e',
          type: 'noun',
          typeLabel: '代名詞 + 名詞 + 原因助詞',
          lemma: '네 (你的) + 생각 (思念) + -에',
          meaning: '因想著你 / 一想起你',
          explanation: '助詞「-에」此處表「心理原因或觸發點」，表達因陷入對對方的思念而帶來的心靈悸動。'
        },
        {
          id: 'rp7_4',
          text: '아마 모를걸',
          rom: 'a-ma mo-reul-geol',
          type: 'korean-grammar',
          typeLabel: '副詞 + 推測反問語尾',
          lemma: '아마 + 모르다 + -(으)ㄹ걸',
          meaning: '你大概還不知道吧',
          explanation: '語尾「-(으)ㄹ걸」表示說話者對某情況的推測，在此帶有少女暗戀特有的害羞與俏皮自語。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '雙重時間狀語從句 (아침부터 ~ 새벽까지) + 原因狀語與情感謂語 (네 생각에 행복해) + 俏皮推測結尾 (아마 모를걸)',
          tokens: [
            { term: '눈을 뜨다', role: '動賓片語', desc: '睜開雙眼。' },
            { term: '-부터 ~ -까지', role: '格助詞對', desc: '從…開始直至…為止。' },
            { term: '네 생각', role: '原因狀語', desc: '對你的思念。' },
            { term: '행복하다', role: '形容詞', desc: '感到幸福。' },
            { term: '-(으)ㄹ걸', role: '終結語尾', desc: '可能/大概…吧（推測猜想）。' }
          ]
        },
        pronunciation: {
          actualSound: '[누늘 뜨는 아침부터 다리 지는 새벽까지, 네 생가게 행복해 아마 모를껄]',
          singingTips: '連音非常密集！「눈을 -> 누늘」、「달이 -> 다리」、「생각에 -> 생가게」，歌聲如流水般綿延不斷。',
          rules: [
            {
              title: '連音與濃音化規則',
              badge: '韓語音變',
              detail: '收音遇母音連音：「눈을」讀 [누늘]，「생각에」讀 [생가게]；「모를걸」讀濃音 [모를껄]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原型 (平語 반말)',
              badge: '歌詞原型',
              form: '아침부터 밤까지 네 생각하느라 하루 종일 행복해.',
              scene: '情侶聊天或個人隨筆日記'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '아침부터 새벽까지 온종일 당신 생각에 행복해요.',
              scene: '日常向伴侶表達感激與愛慕'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '하루 종일 당신을 생각하며 큰 행복을 느낍니다.',
              scene: '正式抒情信函'
            }
          ],
          realLifeExample: {
            scenario: '睡前互道晚安時，甜蜜傾訴自己一整天的思念',
            dialogue: [
              { speaker: 'Crush', text: 'Did you have a good day today?', trans: '你今天過得好嗎？' },
              { speaker: 'You', text: '아침부터 밤까지 네 생각하느라 하루 종일 행복했어.', trans: '從早到晚都在想你，一整天都覺得好幸福。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 8. Chorus Part B: 月下漫步與情感升華「reaching new highs」
    // =========================================================================
    {
      id: 'rly-en-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:12',
      timeSec: 72.8,
      korean: 'And in this moonlight, we’re reaching new highs, but boy, I like you, really really like you',
      text: 'And in this moonlight, we’re reaching new highs, but boy, I like you, really really like you',
      romanization: 'And in this moonlight, we’re reaching new highs, but boy, I like you, really really like you',
      naturalTranslation: '在這片皎潔月光下，我們的情感正攀上全新巔峰，但我心儀的大男孩啊，我真的、真的好喜歡你！',
      pillChips: [
        {
          id: 'rp8_1',
          text: 'in this moonlight',
          rom: '/ɪn ðɪs ˈmuːnlaɪt/',
          type: 'phrase',
          typeLabel: '氛圍介系詞短語',
          lemma: 'moonlight',
          meaning: '在月光之下',
          explanation: '營造深夜私語、銀色月色灑落的浪漫電影感氛圍。'
        },
        {
          id: 'rp8_2',
          text: 'reaching new highs',
          rom: '/ˈriːtʃɪŋ nuː haɪz/ ',
          type: 'idiom-adverb',
          typeLabel: '感情昇華經典成語片語',
          lemma: 'reach new highs',
          meaning: '攀向全新巔峰 / 甜蜜破表',
          explanation: '本為金融或運動用語，在此轉喻兩人之間的情感連結達到前所未有的默契與熱烈高度。'
        },
        {
          id: 'rp8_3',
          text: 'boy, I like you',
          rom: '/bɔɪ aɪ laɪk juː/',
          type: 'phrase',
          typeLabel: '親暱呼喚表白片語',
          lemma: 'boy, I like you',
          meaning: '大男孩啊，我喜歡你',
          explanation: '以口語「boy」作為親暱呼喚詞，帶有美式 R&B 的慵懶浪漫腔調。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '時間環境狀語 (And in this moonlight) + 現在進行時情感昇華 (we’re reaching new highs) + 轉折輕量告白 (but boy, I like you...)',
          tokens: [
            { term: 'in this moonlight', role: '地點/環境介系詞短語', desc: '月光下浪漫背景。' },
            { term: 'are reaching', role: '現在進行時', desc: '正逐漸攀升。' },
            { term: 'new highs', role: '受詞名詞片語', desc: '感情的嶄新高潮點。' },
            { term: 'really really like', role: '真情疊詞告白', desc: '最真摯的純真告白。' }
          ]
        },
        pronunciation: {
          actualSound: '[앤 인 디스 문라이트, 위어 리칭 뉴 하이즈, 벗 보이 아이 라익 유]',
          singingTips: 'Pharita 的轉音非常絲滑，「highs」要有延伸的假音空氣感，營造出在雲端飄浮的浪漫意境。',
          rules: [
            {
              title: '英文連讀與弱讀',
              badge: '英文發音',
              detail: '「And in」連讀為 [앤인]，「reaching」重音在前音節，後綴 ing 輕巧帶過。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '浪漫月夜告白 (Moonlight Confession)',
              badge: '浪漫氛圍',
              form: 'Under the moonlight, my heart has never felt this full. I really really like you.',
              scene: '月夜漫步時向彼此敞開心扉'
            },
            {
              name: '日常敬語 (해요體對應)',
              badge: '生活推薦',
              form: '달빛 아래에서 우리 사이가 더욱 깊어지고 있어요. 당신을 정말 많이 좋아해요.',
              scene: '真誠表白心意'
            },
            {
              name: '正式敬語 (하십시오體對應)',
              badge: '最高敬意',
              form: '달빛 아래에서 소중한 인연을 더욱 깊이 키워나가고 싶습니다.',
              scene: '隆重正式表述'
            }
          ],
          realLifeExample: {
            scenario: '深夜在漢江邊漫步賞月時，終於確認了彼此心意',
            dialogue: [
              { speaker: 'Partner', text: 'The moonlight tonight is so mesmerizing.', trans: '今晚的月色真的很迷人。' },
              { speaker: 'You', text: 'And in this moonlight, I realized I really really like you.', trans: '而在這片月光下，我更加確定自己真的、真的好喜歡你。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 9. Verse 3 Part A: 拼圖比喻與傾吐心事「퍼즐같이 입안에 담고 있는 말」
    // =========================================================================
    {
      id: 'rly-ko-9',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:24',
      timeSec: 84.8,
      korean: 'L-O-V-E 흐트러진 퍼즐같이, 입안에 담고 있는 말 이제는 말하고 싶어',
      text: 'L-O-V-E 흐트러진 퍼즐같이, 입안에 담고 있는 말 이제는 말하고 싶어',
      romanization: 'L-O-V-E heu-teu-reo-jin peo-jeul-gat-i, ib-an-e dam-go iss-neun mal i-je-neun mal-ha-go sip-eo',
      naturalTranslation: 'L-O-V-E 就像零亂散落的拼圖碎片，那些一直咬在嘴邊的心事，現在我終於想全部親口對你說！',
      pillChips: [
        {
          id: 'rp9_1',
          text: '흐트러진',
          rom: 'heu-teu-reo-jin',
          type: 'adjective',
          typeLabel: '動詞過去時定語詞尾',
          lemma: '흐트러지다 + -(으)ㄴ',
          meaning: '散落零亂的 / 被打散的',
          explanation: '動詞「흐트러지다（散亂/打翻）」加上定語詞尾「-(으)ㄴ」，比喻未曾梳理、紛亂紛飛的思緒。'
        },
        {
          id: 'rp9_2',
          text: '퍼즐같이',
          rom: 'peo-jeul-gat-i',
          type: 'noun',
          typeLabel: '外來詞名詞 + 比喻助詞',
          lemma: '퍼즐 (Puzzle) + -같이',
          meaning: '如同拼圖碎片般',
          explanation: '助詞「-같이（如同…一樣）」接在名詞後表示明喻，形容零散的線索渴望被完整拼湊。'
        },
        {
          id: 'rp9_3',
          text: '입안에 담고 있는',
          rom: 'ib-an-e dam-go iss-neun',
          type: 'phrase',
          typeLabel: '慣用語 (默默含在嘴裡)',
          lemma: '입안 + -에 + 담다 + -고 있다 + -는',
          meaning: '一直咬在嘴邊呼之欲出的',
          explanation: '動詞「담다（裝入/盛放）」接進行時定語詞尾「-고 있는」，指反覆在唇齒間琢磨、卻遲遲羞於啟齒的話語。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '字母拼讀開頭 (L-O-V-E) + 散亂比喻定語 (흐트러진 퍼즐같이) + 進行時定語句 (입안에 담고 있는 말) + 決心願望句 (이제는 말하고 싶어)',
          tokens: [
            { term: '흐트러지다', role: '狀態動詞', desc: '被打散、凌亂。' },
            { term: '퍼즐같이', role: '明喻狀語', desc: '如同散落拼圖。' },
            { term: '입안에 담다', role: '慣用語動詞', desc: '含在嘴裡、吞吞吐吐。' },
            { term: '이제는', role: '時間副詞+強調', desc: '現在這刻（強調轉捩點）。' },
            { term: '말하고 싶다', role: '願望動詞', desc: '想要親口傾吐。' }
          ]
        },
        pronunciation: {
          actualSound: '[엘-오-브이-이 흐스러진 퍼즐가치, 이바네 담고 인는 말 이제는 말하고 시퍼]',
          singingTips: 'Chiquita 唱這段帶有節奏分明的俏皮切分音，字母「L-O-V-E」拼讀清晰有力。',
          rules: [
            {
              title: '腭化與鼻音化複合音變',
              badge: '韓語音變',
              detail: '「퍼즐같이」腭化實讀 [퍼즐가치]；「있는」中收音 ㅆ 遇初聲 ㄴ 鼻音化實讀 [인는]；「입안에」連音實讀 [이바네]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '마음속에만 담아뒀던 말, 이제는 솔직하게 다 말할래.',
              scene: '鼓起勇氣向朋友或曖昧對象敞開心扉'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '마음속에만 담고 있던 고백을 이제는 말씀드리고 싶어요.',
              scene: '日常誠懇告白'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '오랜 시간 가슴에 품어왔던 진심을 이제 전하고자 합니다.',
              scene: '正式演講或深情告白'
            }
          ],
          realLifeExample: {
            scenario: '猶豫了幾個月，終於決定不再隱瞞心意',
            dialogue: [
              { speaker: 'Crush', text: 'You looked like you had something to tell me all evening.', trans: '你整個晚上看起來都像是有話想對我說。' },
              { speaker: 'You', text: '입안에만 담고 있던 말인데, 이제는 말하고 싶어. 나 너 좋아해.', trans: '雖然一直只敢放在嘴邊不敢說，但現在我想說了。我喜歡你。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 10. Verse 3 Part B: 霸氣禁止祈使句「날 거부하지 마 so」
    // =========================================================================
    {
      id: 'rly-ko-10',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:35',
      timeSec: 95.3,
      korean: 'Tonight 이제 그만 고민하고, Yeah boy, I’d like 날 거부하지 마 so',
      text: 'Tonight 이제 그만 고민하고, Yeah boy, I’d like 날 거부하지 마 so',
      romanization: 'Tonight i-je geu-man go-min-ha-go, Yeah boy, I’d like nal geo-bu-ha-ji ma so',
      naturalTranslation: '今夜就別再反覆苦惱躊躇了，是的男孩，遵從你心中的渴望，可千萬別拒絕推開我呀！',
      pillChips: [
        {
          id: 'rp10_1',
          text: '이제 그만',
          rom: 'i-je geu-man',
          type: 'phrase',
          typeLabel: '停止副詞短語',
          lemma: '이제 + 그만',
          meaning: '現在別再… / 到此為止',
          explanation: '由「이제（現在）」加上表示「停止、適可而止」的副詞「그만」組成，用於勸阻對方停止猶豫。'
        },
        {
          id: 'rp10_2',
          text: '고민하고',
          rom: 'go-min-ha-go',
          type: 'verb-stem',
          typeLabel: '漢字詞動詞幹 + 並列連接',
          lemma: '고민하다 + -고',
          meaning: '苦惱糾結 / 瞻前顧後',
          explanation: '漢字詞「苦悶」動詞化，接連接語尾「-고」連接後續的動作訴求。'
        },
        {
          id: 'rp10_3',
          text: '거부하지 마',
          rom: 'geo-bu-ha-ji ma',
          type: 'korean-grammar',
          typeLabel: '漢字詞動詞 + 禁止祈使語尾',
          lemma: '거부하다 (拒否) + -지 마(라)',
          meaning: '別拒絕我 / 別推開我',
          explanation: '「-지 마」是向對方發出強烈禁止要求的非格式體平語，在此充滿主動自信、霸氣告白的魅力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文時間開頭 (Tonight) + 停止苦惱副詞並列 (이제 그만 고민하고) + 英文意願插入 (Yeah boy, I’d like) + 霸氣禁止祈使句 (날 거부하지 마 so)',
          tokens: [
            { term: '이제 그만', role: '時間副詞片語', desc: '別再繼續。' },
            { term: '고민하다', role: '動詞', desc: '苦惱、躊躇。' },
            { term: '거부하다 (拒否)', role: '動詞', desc: '拒絕、排斥。' },
            { term: '-지 마', role: '禁止語尾', desc: '不要…、別…（平語命令）。' }
          ]
        },
        pronunciation: {
          actualSound: '[투나잇 이제 그만 고민하고, 예 보이 아이드 라익 날 거부하지 마 쏘]',
          singingTips: 'Asa 經典的甜酷 Flow！「거부하지 마」咬字堅定俐落，「so」帶著強烈重音切入。',
          rules: [
            {
              title: '禁止祈使語尾 -지 마 發音技巧',
              badge: '韓語音變',
              detail: '「-지 마」語調平穩有力，不拖泥帶水，展現少女主動追求幸福的自信與率性。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原型 (霸氣平語 반말)',
              badge: '歌詞原型',
              form: '더 이상 망설이지 말고 내 손 잡아. 날 거부하지 마!',
              scene: '面對曖昧猶豫的對方，霸氣主動伸出手'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '이제 너무 많이 고민하지 마시고 제 마음을 받아주세요.',
              scene: '日常溫柔勸勉'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '부디 저의 제안을 외면하지 말아 주시길 부탁드립니다.',
              scene: '正式商務或隆重請求'
            }
          ],
          realLifeExample: {
            scenario: '面對總是顧慮太多不敢跨出那一步的暗戀對象',
            dialogue: [
              { speaker: 'Boyfriend', text: 'I really like you too, but I\'m worried things might change.', trans: '我也真的很喜歡你，但我很擔心關係會變質。' },
              { speaker: 'You', text: '이제 그만 고민하고 내 손 잡아. 날 거부하지 마!', trans: '別再前怕狼後怕虎苦惱了，牽起我的手吧。可不許拒絕我！' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 11. Bridge: 夢境相會與晨曦悵惘「처음 본 순간부터 내 꿈에 나와」
    // =========================================================================
    {
      id: 'rly-ko-11',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:14',
      timeSec: 134.5,
      korean: '오 널 처음 본 순간부터 자꾸 내 꿈에 나와 눈 뜨면 아쉬워',
      text: '오 널 처음 본 순간부터 자꾸 내 꿈에 나와 눈 뜨면 아쉬워',
      romanization: 'O neol cheo-eum bon sun-gan-bu-teo jak-kku nae kkum-e na-wa nun tteu-myeon a-swi-wo',
      naturalTranslation: '喔，從初次看見你的那一瞬間開始，你便總是頻繁出現在我的夢中，每天早晨一睜開眼就感到無限悵惘不捨！',
      pillChips: [
        {
          id: 'rp11_1',
          text: '처음 본 순간부터',
          rom: 'cheo-eum bon sun-gan-bu-teo',
          type: 'phrase',
          typeLabel: '經典一見鍾情定語片語',
          lemma: '처음 + 보다 + -(으)ㄴ + 순간 + -부터',
          meaning: '從初次見你的那一刻起',
          explanation: '韓劇與流行歌中極經典的表白公式句型！精準刻畫一見傾心的命中註定感。'
        },
        {
          id: 'rp11_2',
          text: '자꾸',
          rom: 'jak-kku',
          type: 'mimetic-word',
          typeLabel: '高頻副詞 (反覆/總是)',
          lemma: '자꾸',
          meaning: '頻繁地 / 一再地 / 總是',
          explanation: '口語高頻副詞，表達不由自主、無法克制地一再重複發生。'
        },
        {
          id: 'rp11_3',
          text: '눈 뜨면 아쉬워',
          rom: 'nun tteu-myeon a-swi-wo',
          type: 'korean-grammar',
          typeLabel: '條件句尾 + ㅂ不規則形容詞',
          lemma: '눈을 뜨다 + -(으)면 + 아쉽다',
          meaning: '一睜開眼就感到依依不捨',
          explanation: '形容詞「아쉽다」遇母音變為「아쉬워」，形容美夢破曉時捨不得抽離的悵惘與眷戀。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '過去時定語時間結構 (처음 본 순간부터) + 副詞頻率句 (자꾸 내 꿈에 나와) + 條件轉折惋惜句 (눈 뜨면 아쉬워)',
          tokens: [
            { term: '처음', role: '時間副詞', desc: '初次。' },
            { term: '본 순간', role: '定語名詞結構', desc: '看見的那一瞬間。' },
            { term: '자꾸', role: '頻率副詞', desc: '總是、反覆。' },
            { term: '꿈에 나오다', role: '動賓短語', desc: '入夢、在夢境中出現。' },
            { term: '아쉽다', role: '心理形容詞', desc: '感到可惜與不捨。' }
          ]
        },
        pronunciation: {
          actualSound: '[오 널 처음 본 순간부터, 자꾸 내 꾸메 나와 눈 뜨면 아쉬워]',
          singingTips: 'Rami 的靈魂高音爆發！「꿈에」連音實讀為 [꾸메]，真假音轉換要溫柔充沛。',
          rules: [
            {
              title: '連音與 ㅂ 不規則發音',
              badge: '韓語音變',
              detail: '「꿈에」連音讀作 [꾸메]；「아쉽다」與語尾 -어 結合時，收音 ㅂ 變為 우，合為 [아쉬워] (a-swi-wo)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原型 (平語 반말)',
              badge: '歌詞原型',
              form: '너 매일 밤마다 내 꿈에 나와서 아침에 깰 때마다 너무 아쉬워.',
              scene: '情侶或摯愛之間深情訴說夜思'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '처음 본 순간부터 자꾸 제 꿈에 나타나셔서 눈 뜨면 늘 아쉬워요.',
              scene: '日常含蓄深情告白'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '첫 만남 이후 늘 꿈결처럼 그리운 마음이었습니다.',
              scene: '正式唯美抒情表達'
            }
          ],
          realLifeExample: {
            scenario: '早晨醒來給喜歡的人傳訊息，分享昨晚夢見對方的悸動',
            dialogue: [
              { speaker: 'Crush', text: 'Good morning! Did you sleep well?', trans: '早安！昨晚睡得好嗎？' },
              { speaker: 'You', text: '네 꿈꿨어! 자꾸 내 꿈에 나와서 눈 뜨면 너무 아쉬워.', trans: '我夢見你了！你總是跑到我夢裡，早上一醒來真的好捨不得。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 12. Outro: 認輸告白名場面「내가 졌으니까 오늘 너의 맘을 허락해」
    // =========================================================================
    {
      id: 'rly-ko-12',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:53',
      timeSec: 173.5,
      korean: 'Okay okay 내가 졌으니까 오늘 너의 맘을 허락해, 별이 떴으니까 손잡고 눈을 감을게',
      text: 'Okay okay 내가 졌으니까 오늘 너의 맘을 허락해, 별이 떴으니까 손잡고 눈을 감을게',
      romanization: 'Okay okay nae-ga jyeoss-eu-ni-kka o-neul neo-ui mam-eul heo-rak-hae, byeol-i tteoss-eu-ni-kka son-jap-go nun-eul gam-eul-ge',
      naturalTranslation: '好啦好啦算我輸給你了，今天我就欣然接納你的心意吧！既然漫天星辰已經升起，那就牽著我的手一起閉上雙眼吧！',
      pillChips: [
        {
          id: 'rp12_1',
          text: '내가 졌으니까',
          rom: 'nae-ga jyeoss-eu-ni-kka',
          type: 'korean-grammar',
          typeLabel: '主格 + 動詞過去時 + 因果語尾',
          lemma: '나 + -가 + 지다 + -았/었으니까',
          meaning: '算我輸給你了 / 誰叫我敗給你',
          explanation: '動詞「지다（輸/敗北）」接因果語尾「-(으)니까」，在情侶對話中是極為寵溺、傲嬌退讓的認輸告白名言！'
        },
        {
          id: 'rp12_2',
          text: '너의 맘을 허락해',
          rom: 'neo-ui mam-eul heo-rak-hae',
          type: 'phrase',
          typeLabel: '動賓告白片語',
          lemma: '너의 + 마음 + -을 + 허락하다',
          meaning: '允諾接納你的心意',
          explanation: '漢字詞「許諾」動詞化，帶有高貴又甜蜜的宣判感，正式宣告交往的甜蜜名場面。'
        },
        {
          id: 'rp12_3',
          text: '별이 떴으니까',
          rom: 'byeol-i tteoss-eu-ni-kka',
          type: 'korean-grammar',
          typeLabel: '名詞主格 + 動詞過去時因果',
          lemma: '별 + -이 + 뜨다 + -았/었으니까',
          meaning: '既然星星已經升起',
          explanation: '以繁星當空作為浪漫的契機與藉口，推動牽手閉眼的親暱動作。'
        },
        {
          id: 'rp12_4',
          text: '눈을 감을게',
          rom: 'nun-eul gam-eul-ge',
          type: 'korean-grammar',
          typeLabel: '動詞幹 + 承諾語尾',
          lemma: '눈을 감다 + -(으)ㄹ게',
          meaning: '我會閉上雙眼',
          explanation: '語尾「-(으)ㄹ게」表示說話者向對方承諾或告知自己接下來的動作，溫柔又充滿期待。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '傲嬌讓步因果句 (내가 졌으니까 ~ 허락해) + 浪漫夜色因果句 (별이 떴으니까 ~ 손잡고 눈을 감을게)',
          tokens: [
            { term: '지다', role: '動詞原形', desc: '輸了、敗北（傲嬌認輸）。' },
            { term: '-(으)니까', role: '原因連接語尾', desc: '因為…、既然…（主觀原因）。' },
            { term: '허락하다 (許諾)', role: '動詞原形', desc: '答應、接納。' },
            { term: '손을 잡다', role: '伴隨動作', desc: '牽起雙手。' },
            { term: '-(으)ㄹ게', role: '承諾終結語尾', desc: '我會…（向對方承諾動作）。' }
          ]
        },
        pronunciation: {
          actualSound: '[오케이 오케이 내가 져쓰니까 오늘 너의 마믈 허라캐, 벼리 떠쓰니까 손잡꼬 누늘 가믈게]',
          singingTips: '全體成員齊聲合唱的甜蜜結尾！節奏明快歡樂，「허락해」激音實讀 [허라캐]，「눈을 감을게」溫柔收尾。',
          rules: [
            {
              title: '收音音變與激音化規則',
              badge: '韓語音變',
              detail: '「졌으니까」雙收音 ㅆ 遇母音連濃音讀 [져쓰니까]；「허락해」收音 ㄱ 遇 ㅎ 激音化為 [허라캐]；「손잡고」收音 ㅂ 促使 ㄱ 濃音化為 [손잡꼬]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '情侶戀愛終極告白 (Playful Concession)',
              badge: '甜蜜宣告',
              form: '알았어, 내가 졌어! 오늘부터 우리 정식으로 사귀는 거다.',
              scene: '經歷曖昧拉扯後，俏皮宣布正式在一起'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '제가 졌어요, 오늘 그 마음 기쁘게 받아들일게요. 손잡고 같이 가요.',
              scene: '日常誠懇浪漫答應'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '귀하의 소중한 마음을 감사히 받아들이겠습니다.',
              scene: '正式誓言與典禮'
            }
          ],
          realLifeExample: {
            scenario: '經歷了幾次浪漫約會與曖昧試探後，終於答應對方的告白',
            dialogue: [
              { speaker: 'Crush', text: 'So... have you made up your mind about us?', trans: '那麼…關於我們的事，你做好決定了嗎？' },
              { speaker: 'You', text: 'Okay okay, 내가 졌으니까 오늘 너의 맘을 허락해! 손잡자.', trans: '好啦好啦，算我輸給你了，今天我就接受你的心意吧！牽手吧。' }
            ]
          }
        }
      }
    }
  ]
};
