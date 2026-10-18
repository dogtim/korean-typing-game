// BABYMONSTER - 《Really Like You》 韓英雙語 R&B 深度研習資料包
// 本曲為 BABYMONSTER 溫柔俏皮的 R&B 代表作！
// 特色：韓國生悶氣流行語「나 꽁했어（鬧彆扭）」、遠距離通話、曖昧撒嬌語氣

export const REALLY_LIKE_YOU_STUDY_DATA = {
  id: 'really-like-you',
  title: 'Really Like You',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: 'XShaIZs7J7M',
  altYoutubeIds: ['XShaIZs7J7M'],
  sentences: [
    {
      id: 'rly-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:14',
      timeSec: 14.5,
      korean: '기다리잖아 Call back, uh, 온도 Check 했잖아 나 꽁했어',
      text: '기다리잖아 Call back, uh, 온도 Check 했잖아 나 꽁했어',
      romanization: 'Gi-da-ri-jan-a Call back, uh, on-do Check haet-jan-a na kkong-haess-eo',
      naturalTranslation: '我明明一直在苦苦等待你的回電，你也感受到了我的冷淡溫度吧？我正在跟你鬧彆扭生悶氣呢！',
      pillChips: [
        {
          id: 'rp1',
          text: '기다리잖아',
          rom: 'gi-da-ri-jan-a',
          type: 'korean-grammar',
          typeLabel: '動詞幹 + 確認語尾 (撒嬌/埋怨)',
          lemma: '기다리다 + -잖아(요)',
          meaning: '我不是一直在等你嘛',
          explanation: '語尾「-잖아」指「雙方皆知的事實」，在此帶有俏皮的撒嬌與小埋怨語氣。'
        },
        {
          id: 'rp2',
          text: '온도 Check',
          rom: 'on-do Check',
          type: 'korean-english-blend',
          typeLabel: '情感溫度確認混搭詞',
          lemma: '온도 (溫度) + Check',
          meaning: '確認彼此的情感溫度',
          explanation: '比喻確認兩人間聊天氛圍是熾熱還是降至冰點。'
        },
        {
          id: 'rp3',
          text: '나 꽁했어',
          rom: 'na kkong-haess-eo',
          type: 'korean-slang-idiom',
          typeLabel: '韓國經典日常撒嬌俗語',
          lemma: '꽁하다 + -았/었어',
          meaning: '我鬧彆扭了 / 我在生悶氣呢',
          explanation: '高頻生動俗語！形容因小事感到委屈或心裡不舒坦，噘著嘴鬧彆扭、生悶氣（Pouting）的可愛模樣。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '怨念提醒句 (기다리잖아 Call back) + 狀態推斷句 (온도 Check 했잖아) + 俏皮告白句 (나 꽁했어)',
          tokens: [
            { term: '기다리다', role: '等待動詞', desc: '守著電話。' },
            { term: '-잖아', role: '確認反問語尾', desc: '明明知道。' },
            { term: '꽁하다', role: '鬧脾氣俗語', desc: '噘嘴生悶氣。' }
          ]
        },
        pronunciation: {
          actualSound: '[기다리자나 Call back, uh, 온도 Check 해ッ자나 나 꽁핻써]',
          singingTips: '「꽁했어」讀音雙唇微噘，帶有滿滿的傲嬌甜美 R&B 律動。',
          rules: [
            {
              title: '收音 ㅆ 遇初聲 ㅇ 之音變',
              badge: '韓語發音',
              detail: '收音 ㅆ 遇到初聲 ㅇ 時連音讀作 [써] (sseo)，發音為 [꽁핻써] (kkong-haet-sseo)。'
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
            }
          ],
          realLifeExample: {
            scenario: '男友加班晚了三個小時才回覆訊息',
            dialogue: [
              { speaker: 'Boyfriend', text: '미안해! 오늘 회의가 너무 길어졌어. 화 많이 났어?', trans: '對不起！今天的會議開太長了，你很生氣嗎？' },
              { speaker: 'Girlfriend', text: '기다리잖아! 나 지금 완전 꽁했어! 맛있는 거 사 와.', trans: '我等了那麼久！我現在完全在生悶氣呢，給我買好吃的來賠罪。' }
            ]
          }
        }
      }
    }
  ]
};
