// BABYMONSTER - 《DRIP》 韓英雙語歌詞深度研習資料包
// 收錄首張正規專輯同名主打神曲《DRIP》16 句核心中韓英精解：
// 1. 韓語 (Korean) 核心歌詞句精讀 (찌릿찌릿 擬態語、끼리끼리 物以類聚、-지 마 否定祈使、보란 듯이 爭氣、판을 180도 바꿔 扭轉乾坤)
// 2. 英語 (English) 嘻哈名句精讀 (GOAT 歷史最偉大、eat that lunch 碾壓全場、knock off 山寨仿冒、walk-off 再見全壘打絕殺、DRIP 潮流魅力氣場)
// 3. 膠囊化單字分塊 (Interactive Pill Chips) + 三層研習抽屜數據 (文法結構、發音音變與Flow、語域正式度與日常對話)

export const DRIP_STUDY_DATA = {
  id: 'drip',
  title: 'DRIP',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: 'Zp-Jhuhq0bQ', // Official MV
  altYoutubeIds: ['s9Xf7q_E_nQ', 'w4uA3y1Wl9M'],
  sentences: [
    // =========================================================================
    // 🇰🇷 韓語歌詞研習句目 (Korean Study Sentences: 1 - 8)
    // =========================================================================
    {
      id: 'drip-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:16',
      timeSec: 16.2,
      korean: 'Uh 찌릿찌릿, 끼리끼리 놀아볼까?',
      text: 'Uh 찌릿찌릿, 끼리끼리 놀아볼까?',
      romanization: 'Uh jji-rit-jji-rit, kki-ri-kki-ri nor-a-bol-kka?',
      naturalTranslation: '麻酥酥的心動觸電感，志同道合的同伴們，要不要一塊嗨玩一場？',
      pillChips: [
        {
          id: 'p1',
          text: '찌릿찌릿',
          rom: 'jji-rit-jji-rit',
          type: 'mimetic-word',
          typeLabel: '擬態語/擬聲語',
          lemma: '찌릿찌릿하다',
          meaning: '麻酥酥 / 觸電般發麻',
          explanation: '副詞性擬態語，形容電流通過身體或直覺受到強烈震撼時的「刺痛發麻感、電擊心動感」。'
        },
        {
          id: 'p2',
          text: '끼리끼리',
          rom: 'kki-ri-kki-ri',
          type: 'idiom-adverb',
          typeLabel: '同類成語副詞',
          lemma: '끼리끼리',
          meaning: '物以類聚 / 同道中人一夥',
          explanation: '高頻副詞！源自接尾辭「-끼리（彼此/同類之間）」，重疊成「끼리끼리」，韓語成語「끼리끼리 논다（物以類聚）」就是此詞！'
        },
        {
          id: 'p3',
          text: '놀아볼까',
          rom: 'nor-a-bol-kka',
          type: 'verb-suggestion',
          typeLabel: '複合動詞提議疑問',
          lemma: '놀다 + -아/어 보다 + -(으)ㄹ까',
          meaning: '要不要一起痛快玩場？',
          explanation: '動詞「놀다（玩樂）」+ 文法「-아/어 보다（嘗試看看）」+ 提議疑問語尾「-(으)ㄹ까（要不要…呢）」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '感嘆詞 (Uh) + 感覺擬態副詞 (찌릿찌릿) + 同類副詞 (끼리끼리) + 嘗試提議複合句尾 (놀아볼까)',
          tokens: [
            { term: '찌릿찌릿', role: '擬態副詞', desc: '觸電般的一陣陣麻酥感。' },
            { term: '끼리끼리', role: '同類副詞', desc: '志趣相投的圈子聚集在一起。' },
            { term: '놀다', role: '動詞原型', desc: '玩耍、狂歡、展現表演。' },
            { term: '-아/어 보다', role: '輔助動詞', desc: '表達「嘗試體驗」某動作。' },
            { term: '-(으)ㄹ까', role: '終結語尾', desc: '向對方提出建議、徵詢意見的非格式體平語。' }
          ]
        },
        pronunciation: {
          actualSound: '[어 찌릳찌릳 끼리끼리 노라볼까]',
          singingTips: '雙濃音 ㅉ 和 ㄲ 接連出現！第一個音節就要繃緊聲帶，發出清脆乾脆的爆發彈舌音，不要漏氣。',
          rules: [
            {
              title: '收音 ᆺ 代表音規則 (음절의 끝소리 규칙)',
              badge: '收音音變',
              detail: '「찌릿」底部收音 ㅅ 在單獨停頓時發代表音 ㄷ [t]，實讀 [찌릳]。'
            },
            {
              title: '連音規則 (연음화)',
              badge: '連音',
              detail: '「놀아」的收音 ㄹ 連音到後方母音 ㅏ，流暢滑動為 [노라]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '우리 끼리끼리 놀아볼까?',
              scene: '同齡好友、派對開場時向死黨提議狂歡'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '저희끼리 한번 재미있게 놀아볼까요?',
              scene: '社團聚會向學長姐或新朋友提議一起玩遊戲'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '함께 즐거운 시간을 가져보시겠습니까?',
              scene: '官方文娛盛典主持向全場貴賓發起同樂邀請'
            }
          ],
          realLifeExample: {
            scenario: '週末一群音樂愛好者朋友決定組隊去練舞室狂歡',
            dialogue: [
              { speaker: '敏智', text: '오늘 다들 텐션 좋은데 뭐 할까?', trans: '今天大家興致都這麼高，要做點什麼呢？' },
              { speaker: '秀賢', text: '우리 끼리끼리 연습실 빌려서 놀아보자!', trans: '我們這幫志同道合的一起租個練舞室好好嗨一下吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-ko-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:25',
      timeSec: 25.8,
      korean: 'I\'ll be there 고민하지 마',
      text: 'I\'ll be there 고민하지 마',
      romanization: 'I\'ll be there go-min-ha-ji ma',
      naturalTranslation: '我隨時在身旁，別再苦惱、別再多想了！',
      pillChips: [
        {
          id: 'p1',
          text: '고민하지',
          rom: 'go-min-ha-ji',
          type: 'verb-stem',
          typeLabel: '名詞 + 輔助動詞幹',
          lemma: '고민하다',
          meaning: '苦惱 / 躊躇憂心',
          explanation: '漢字詞「苦悶（고민）」加上動詞化接尾辭「-하다」，形容在心頭反覆糾結、焦慮困惑。'
        },
        {
          id: 'p2',
          text: '마',
          rom: 'ma',
          type: 'negative-imperative',
          typeLabel: '否定祈使終結語尾',
          lemma: '말다',
          meaning: '不要… / 別…',
          explanation: '韓語最核心的禁止/否定祈使文法「-지 말다」的平語形態。告誡或安慰對方別去做某事。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文約定句 (I\'ll be there) + 漢字動詞詞幹 (고민하-) + 否定祈使語尾 (-지 마)',
          tokens: [
            { term: 'I\'ll be there', role: '承諾約定句', desc: '表達堅定陪伴與守護。' },
            { term: '고민하다', role: '動詞', desc: '苦思、焦慮憂慮。' },
            { term: '-지 마', role: '禁止語尾', desc: '由補助動詞 말다 + -아 融合而成，用於親密平語中的勸阻。' }
          ]
        },
        pronunciation: {
          actualSound: '[아일 비 데어 고민하지 마]',
          singingTips: '旋律轉折極為溫柔而堅定。「고민하지」音調微揚，最後一個「마」輕柔落下，撫慰聽眾情緒。',
          rules: [
            {
              title: '鼻音化平滑過渡',
              badge: '流暢咬字',
              detail: '「고민」兩個音節均以鼻音 ㅁ, ㄴ 收尾，發音時口腔共鳴要自然飽滿。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '내가 곁에 있을게, 고민하지 마.',
              scene: '安慰傷心猶豫的好友或戀人'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '제가 도와드릴 테니 너무 고민하지 마세요.',
              scene: '職場上前輩對陷入苦思的後輩給予支持'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '더 이상 염려하지 마십시오.',
              scene: '官方客服承諾將全力解決客戶困擾'
            }
          ],
          realLifeExample: {
            scenario: '朋友正面臨職涯選擇而陷入嚴重焦慮',
            dialogue: [
              { speaker: '朋友', text: '이직할지 말지 밤마다 잠이 안 와...', trans: '要不要跳槽我每天晚上都失眠睡不著…' },
              { speaker: '你', text: '내가 옆에서 응원할 테니까 너무 고민하지 마!', trans: '我會在旁邊支持你的，別太苦惱自己啦！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-ko-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:29',
      timeSec: 29.8,
      korean: 'I\'ll be there 망설이지 마',
      text: 'I\'ll be there 망설이지 마',
      romanization: 'I\'ll be there mang-seol-i-ji ma',
      naturalTranslation: '我會守候在此，千萬別再躊躇猶豫！',
      pillChips: [
        {
          id: 'p1',
          text: '망설이지',
          rom: 'mang-seol-i-ji',
          type: 'verb-stem',
          typeLabel: '固有詞動詞幹',
          lemma: '망설이다',
          meaning: '猶豫不決 / 躊躇盤算',
          explanation: '純韓語固有詞，指因害怕失敗或顧慮太多而腳步停滯不前、拿不定主意的心理狀態。'
        },
        {
          id: 'p2',
          text: '마',
          rom: 'ma',
          type: 'negative-imperative',
          typeLabel: '禁止語尾',
          lemma: '말다',
          meaning: '別… / 不要…',
          explanation: '否定祈使句語尾，鼓勵對方鼓起勇氣勇敢邁出第一步。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '約定句 (I\'ll be there) + 固有詞動詞幹 (망설이-) + 否定祈使語尾 (-지 마)',
          tokens: [
            { term: '망설이다', role: '動詞原型', desc: '猶豫不決、躊躇不定。' },
            { term: '-지 마', role: '禁止祈使語尾', desc: '接在動詞詞幹後，表示命令或勸導「不要做某動作」。' }
          ]
        },
        pronunciation: {
          actualSound: '[아일 비 데어 망서리지 마]',
          singingTips: '收音 ㄹ 在後方遇到母音 이 時順勢連音成 [망서리지]，唱腔柔和流暢。',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '連音',
              detail: '「망설」的收音 ㄹ 滑動到「이」的初聲位置，實讀 [망서리...]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '망설이지 마, 지금 바로 해봐!',
              scene: '激勵摯友抓住難得的黃金機會'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '망설이지 마시고 편하게 말씀해 주세요.',
              scene: '請客人或同事放膽提出想法'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '망설이지 마시고 지금 즉시 지원하십시오.',
              scene: '公司徵才廣告號召頂尖人才應聘'
            }
          ],
          realLifeExample: {
            scenario: '朋友想報名參加選秀比賽卻缺乏自信',
            dialogue: [
              { speaker: '朋友', text: '오디션 지원서 썼는데 낼까 말까 망설여져.', trans: '選秀報名表寫好了，但要不要送出我好猶豫。' },
              { speaker: '你', text: '너 실력 충분해! 망설이지 말고 그냥 질러!', trans: '你的實力很足夠！別猶豫了，直接衝一波吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-ko-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:36',
      timeSec: 36.3,
      korean: '아름다운 별들이 빛나는 밤이야',
      text: '아름다운 별들이 빛나는 밤이야',
      romanization: 'a-reum-da-un byeol-deul-i bit-na-neun bam-i-ya',
      naturalTranslation: '這是漫天絕美繁星璀璨閃耀的奇蹟之夜！',
      pillChips: [
        {
          id: 'p1',
          text: '아름다운',
          rom: 'a-reum-da-un',
          type: 'adjective-modifier',
          typeLabel: '形容詞冠形詞 (ㅂ 不規則)',
          lemma: '아름답다',
          meaning: '美麗的 / 絕美的',
          explanation: '形容詞「아름답다（美麗）」發生 ㅂ 不規則音變（ㅂ 遇到母音轉為 우），接冠形詞語尾 -ㄴ 形成「아름다운」，修飾星辰。'
        },
        {
          id: 'p2',
          text: '별들이',
          rom: 'byeol-deul-i',
          type: 'noun-plural-subject',
          typeLabel: '名詞複數 + 主格助詞',
          lemma: '별 + -들 + -이',
          meaning: '群星們 / 顆顆繁星',
          explanation: '名詞「별（星星）」+ 複數接尾辭「-들」+ 主格助詞「-이」（有收音接 -이），連音讀作 [별드리]。'
        },
        {
          id: 'p3',
          text: '빛나는',
          rom: 'bit-na-neun',
          type: 'verb-modifier',
          typeLabel: '動詞現在式冠形詞',
          lemma: '빛나다',
          meaning: '閃耀發光的',
          explanation: '動詞「빛나다（發光）」加上現在定語語尾「-는」，修飾夜晚「밤」。注意鼻音化發音！'
        },
        {
          id: 'p4',
          text: '밤이야',
          rom: 'bam-i-ya',
          type: 'noun-predicate',
          typeLabel: '名詞 + 平語指定詞',
          lemma: '밤 + 이다',
          meaning: '是…夜晚啊',
          explanation: '名詞「밤（夜晚）」加上敘述指定詞「이다（是）」的非格式體平語形式「-이야」（有收音名詞後接 -이야）。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '冠形形容詞 (아름다운) + 複數主語 (별들이) + 定語動詞 (빛나는) + 名詞表語指定句 (밤이야)',
          tokens: [
            { term: '아름답다', role: '形容詞', desc: '美麗，經 ㅂ 音變為冠形詞 아름다운。' },
            { term: '별들', role: '複數名詞', desc: '星群。' },
            { term: '-이', role: '主格助詞', desc: '標示動作或狀態的主體。' },
            { term: '빛나다', role: '動詞', desc: '閃閃發光，冠形詞 빛나는 修飾 밤。' },
            { term: '밤이야', role: '指定名詞句', desc: '밤 + 이야，表達感嘆或陳述當前夜晚。' }
          ]
        },
        pronunciation: {
          actualSound: '[아름다운 별드리 빈나는 바미야]',
          singingTips: '「빛나는」發生極為經典的鼻音化音變 [빈나는]！「별들이」連音為 [별드리]，「밤이야」連音為 [바미야]，如流水般詩意。',
          rules: [
            {
              title: '鼻音化 (비음화)',
              badge: '重要音變',
              detail: '「빛」的收音 ㅊ 在代表音 ㄷ 遇到後方鼻音 ㄴ 時，受其同化變為鼻音 ㄴ，實讀 [빈나는]！'
            },
            {
              title: '連音化 (연음화)',
              badge: '連音',
              detail: '「별들이」-> [별드리]，「밤이야」-> [바미야]，收音順滑上移。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '아름다운 별들이 빛나는 밤이야.',
              scene: '月夜仰望星空時的浪漫抒情感嘆'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '아름다운 별들이 빛나는 밤이에요.',
              scene: '向心儀之人或觀眾深情分享良夜'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '아름다운 별들이 빛나는 밤입니다.',
              scene: '廣播電台節目夜間開場浪漫引言'
            }
          ],
          realLifeExample: {
            scenario: '露營野宿在山頂仰望浩瀚銀河星海',
            dialogue: [
              { speaker: '朋友', text: '하늘 좀 봐, 오늘 별 진짜 쏟아질 것 같아!', trans: '快看天空，今天的星星簡直像要傾瀉下來一樣！' },
              { speaker: '你', text: '응, 정말 아름다운 별들이 빛나는 밤이야.', trans: '嗯，真是個漫天繁星閃耀動人的夜晚啊。' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-ko-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:43',
      timeSec: 43.6,
      korean: '끝없는 가치, You know it\'s all me',
      text: '끝없는 가치, You know it\'s all me',
      romanization: 'kkeut-eom-neun ga-chi, You know it\'s all me',
      naturalTranslation: '無窮無盡的頂級身價與價值，你知道這全是源自我！',
      pillChips: [
        {
          id: 'p1',
          text: '끝없는',
          rom: 'kkeut-eom-neun',
          type: 'adjective-modifier',
          typeLabel: '合成形容詞冠形詞',
          lemma: '끝없다',
          meaning: '無邊無際 / 無窮無盡的',
          explanation: '名詞「끝（盡頭、邊際）」+ 形容詞「없다（無）」，再加上修飾名詞的冠形詞語尾「-는」，讀音有劇烈的音變！'
        },
        {
          id: 'p2',
          text: '가치',
          rom: 'ga-chi',
          type: 'noun',
          typeLabel: '漢字詞名詞',
          lemma: '가치',
          meaning: '價值 / 身價品味',
          explanation: '漢字詞「價值」，在此象徵無可估量、無法替代的獨特藝術才華與市場價值。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '定語形容詞 (끝없는) + 核心名詞 (가치) + 英語強調句 (You know it\'s all me)',
          tokens: [
            { term: '끝없다', role: '形容詞', desc: '字面是沒有盡頭，比喻潛力或價值無可限量。' },
            { term: '가치', role: '名詞', desc: '價值、重要性。' },
            { term: 'You know it\'s all me', role: '英語強調句', desc: '宣示這份耀眼成就全由自我實力塑造。' }
          ]
        },
        pronunciation: {
          actualSound: '[끄덤는 가치 유 노 잇츠 올 미]',
          singingTips: '「끝없는」包含連音 + 雙收音簡化 + 鼻音化三次劇烈音變！實讀為 [끄덤는]，發音極需技巧。',
          rules: [
            {
              title: '連音與代表音簡化',
              badge: '連音化',
              detail: '「끝」的收音 ㅌ 移至「없」的初聲變成 ㄷ；而「없」的雙收音 ㅄ 在遇到後方鼻音 ㄴ 時轉化為鼻音 ㅁ，合為 [끄덤는]！'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (自信宣示)',
              badge: '女王霸氣',
              form: '끝없는 가치를 증명할게.',
              scene: '展現自己身價與不可替代性'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '저의 끝없는 가치를 믿어주세요.',
              scene: '求職面試展現個人對團隊的長遠價值'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '저희 기업의 무한한 가치를 입증하겠습니다.',
              scene: '商業發表會宣示企業市場無窮潛能'
            }
          ],
          realLifeExample: {
            scenario: '面對外界低估自己的實力時的自信宣言',
            dialogue: [
              { speaker: '同行', text: '그 조건으로 계약하면 손해 아니야?', trans: '以那個條件簽約不會吃虧嗎？' },
              { speaker: '你', text: '아니, 나한테는 끝없는 가치가 있거든.', trans: '不會，因為我身上有著無窮無盡的真正價值。' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-ko-6',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:57',
      timeSec: 58.0,
      korean: '난 보란 듯이, Look at that',
      text: '난 보란 듯이, Look at that',
      romanization: 'nan bo-ran deu-si, Look at that',
      naturalTranslation: '我會爭氣地做給全世界看，瞧好了！',
      pillChips: [
        {
          id: 'p1',
          text: '난',
          rom: 'nan',
          type: 'pronoun-particle',
          typeLabel: '代名詞縮寫',
          lemma: '나 + 는',
          meaning: '我（非謙稱）',
          explanation: '第一人稱單數「나」+ 主題助詞「는」的日常極高頻縮寫。'
        },
        {
          id: 'p2',
          text: '보란 듯이',
          rom: 'bo-ran deu-si',
          type: 'idiom-adverb',
          typeLabel: '勵志成語副詞',
          lemma: '보다 + -(으)라는 듯이',
          meaning: '爭氣地展現給人看 / 揚眉吐氣般',
          explanation: 'YG 音樂最核心的逆襲詞彙！由「보라（看吧）+ 하듯（彷彿那樣）」縮寫，意指以令人震撼的成就堵住嘲諷者的嘴。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主格代名詞縮寫 (난) + 比喻勵志副詞成語 (보란 듯이) + 祈使吸引注意 (Look at that)',
          tokens: [
            { term: '난', role: '主格代名詞', desc: '我是這場逆襲的主角。' },
            { term: '보란 듯이', role: '副詞成語', desc: '爭氣地證明、昂首揚眉吐氣。' },
            { term: 'Look at that', role: '英語祈使句', desc: '叫質疑者睜大雙眼看清楚。' }
          ]
        },
        pronunciation: {
          actualSound: '[난 보란드시 룩 앳 댓]',
          singingTips: '「난」要短促有力，「보란 듯이」節奏緊扣鼓點，結尾「Look at that」音量爆發！',
          rules: [
            {
              title: '間接引用緊湊縮合',
              badge: '慣用縮讀',
              detail: '보라고 하는 듯이 縮寫為四音節 [보란듯이]，唸時 으 母音扁平有力。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '난 보란 듯이 성공할 거야.',
              scene: '面對質疑或低谷時激發自我鬥志'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '보란 듯이 멋진 결과를 보여드릴게요.',
              scene: '向支持你的長輩或導師許下承諾'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '당당하게 실력으로 보란 듯이 증명하겠습니다.',
              scene: '入選代表隊後的誓師宣言'
            }
          ],
          realLifeExample: {
            scenario: '遭遇他人看衰時，與隊友互相激勵奮發圖強',
            dialogue: [
              { speaker: '隊友', text: '사람들이 우리 팀이 질 거라고 하네...', trans: '別人都說我們這隊一定會輸…' },
              { speaker: '你', text: '두고 봐! 난 보란 듯이 1등 트로피 들어 올릴 거야!', trans: '走著瞧吧！我一定會爭氣地捧起冠軍獎盃給他們看！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-ko-7',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:00',
      timeSec: 60.4,
      korean: '온몸으로 느끼는 내 몸짓',
      text: '온몸으로 느끼는 내 몸짓',
      romanization: 'on-mom-eu-ro neu-kki-neun nae mom-jit',
      naturalTranslation: '用全身上下每一吋細胞去感受，我這震撼全場的律動身姿！',
      pillChips: [
        {
          id: 'p1',
          text: '온몸으로',
          rom: 'on-mom-eu-ro',
          type: 'noun-particle',
          typeLabel: '接頭辭 + 名詞 + 格助詞',
          lemma: '온- + 몸 + -으로',
          meaning: '用全身 / 以整個身軀',
          explanation: '接頭辭「온-（全部的、完整的）」+ 名詞「몸（身體）」+ 工具方式格助詞「-으로（以、用）」。'
        },
        {
          id: 'p2',
          text: '느끼는',
          rom: 'neu-kki-neun',
          type: 'verb-modifier',
          typeLabel: '動詞冠形詞',
          lemma: '느끼다',
          meaning: '感受到的 / 去體會的',
          explanation: '動詞「느끼다（感覺、感受）」加上現在式定語詞尾「-는」，修飾後方的律動動作。'
        },
        {
          id: 'p3',
          text: '몸짓',
          rom: 'mom-jit',
          type: 'noun',
          typeLabel: '名詞',
          lemma: '몸짓',
          meaning: '肢體動作 / 舞蹈身姿',
          explanation: '名詞「몸（身體）」加上接尾辭「-짓（舉止動作）」，指舞台上充滿張力的肢體語言與舞蹈律動。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '方式格名詞片語 (온몸으로) + 現在定語動詞 (느끼는) + 第一人稱冠形代名詞 (내) + 核心名詞 (몸짓)',
          tokens: [
            { term: '온몸', role: '合成名詞', desc: '整個身軀、全身上下。' },
            { term: '-으로', role: '格助詞', desc: '標示動作所憑藉的手段或器官。' },
            { term: '느끼다', role: '動詞', desc: '感同身受、深層體會。' },
            { term: '몸짓', role: '名詞', desc: '身段姿態、舞蹈律動。' }
          ]
        },
        pronunciation: {
          actualSound: '[온모므로 느끼는 내 몸짇]',
          singingTips: '收音 ㅁ 移到 으 連音讀成 [온모므로]。「느끼는」中的 ㄲ 濃音要深邃飽滿，尾字「몸짓」收音閉塞。',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '連音',
              detail: '「몸」的收音 ㅁ 滑移至後方助詞初聲，實讀 [온모므로]。'
            },
            {
              title: '末尾代表音 (음절 끝소리)',
              badge: '收音規則',
              detail: '「짓」收音 ㅌ/ㅅ/ㅈ 在單詞結尾皆轉為代表音 ㄷ，唸為 [몸짇]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (舞台陶醉)',
              badge: '舞台魅力',
              form: '온몸으로 느끼는 내 몸짓에 빠져봐.',
              scene: '舞台表演引導觀眾沉浸在舞蹈中'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '온몸으로 음악을 느끼며 춤춰요.',
              scene: '舞蹈老師指導學員全身心感受音樂'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '온몸으로 전하는 열정을 느껴보십시오.',
              scene: '藝術展演宣傳稿邀請大眾感受生命律動'
            }
          ],
          realLifeExample: {
            scenario: '舞蹈狂歡派對上與朋友沉浸在低音重拍之中',
            dialogue: [
              { speaker: '朋友', text: '이 비트 진짜 미쳤다! 가슴이 쿵쾅거려!', trans: '這節奏真的太炸了！心臟都在跟著狂跳！' },
              { speaker: '你', text: '생각은 비우고 온몸으로 비트를 느껴봐!', trans: '別去思考，用全身上下去感受這重拍吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-ko-8',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:19',
      timeSec: 79.8,
      korean: '판을 180도 바꿔',
      text: '판을 180도 바꿔',
      romanization: 'pan-eul baek-pal-sip-do ba-kkwo',
      naturalTranslation: '將整個局面 180 度徹底顛覆逆轉！',
      pillChips: [
        {
          id: 'p1',
          text: '판을',
          rom: 'pan-eul',
          type: 'noun-object',
          typeLabel: '名詞 + 受格助詞',
          lemma: '판 + 을',
          meaning: '把局勢 / 將整個局面',
          explanation: '名詞「판」原指棋局、賭盤，引申為市場生態、產業格局與權力版圖。'
        },
        {
          id: 'p2',
          text: '180도',
          rom: 'baek-pal-sip-do',
          type: 'number-unit',
          typeLabel: '數字 + 角度單位',
          lemma: '180 + 도',
          meaning: '180 度 / 徹底翻轉',
          explanation: '漢字詞數字「百八十（백팔십）」+ 角度量詞「度（도）」，形容徹頭徹尾、全然相反的巨大變革。'
        },
        {
          id: 'p3',
          text: '바꿔',
          rom: 'ba-kkwo',
          type: 'verb-imperative',
          typeLabel: '動詞命令/宣示',
          lemma: '바꾸다',
          meaning: '徹底改變 / 顛覆替換',
          explanation: '動詞「바꾸다（改變）」+ 非格式體語尾「-어」融合為「바꿔」，展現毫不猶豫的霸氣行動力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞受格 (판을) + 副詞狀語修飾 (180도) + 動詞宣示謂語 (바꿔)',
          tokens: [
            { term: '판', role: '名詞', desc: '棋局、市場盤面。' },
            { term: '-을', role: '受格助詞', desc: '標註受詞。' },
            { term: '180도', role: '數量副詞', desc: '徹底、一百八十度完全逆轉。' },
            { term: '바꾸다', role: '動詞', desc: '改變、打破現狀。' }
          ]
        },
        pronunciation: {
          actualSound: '[파늘 백팔십또 바꿔]',
          singingTips: '「판을」連音為 [파늘]。「180도」中的「도」發生平音緊音化變濃音 [또]，口氣要霸道堅決！',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '連音',
              detail: '「판」的收音 ㄴ 移至受格助詞 을，唸作 [파늘]。'
            },
            {
              title: '平音緊音化 (경음화)',
              badge: '濃音化',
              detail: '「십」的收音 ㅂ 促使「도」緊音化變濃音 [또]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '우리가 이 판을 180도 바꿔놓을 거야.',
              scene: '向對手宣戰、立誓顛覆舊時代秩序'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '이번 기회에 판을 180도 바꿔봐요.',
              scene: '團隊開會討論提出打破僵局的顛覆性企劃'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '업계의 판도를 180도 완전히 바꾸겠습니다.',
              scene: '新創公司在商業發布會誓言改寫產業遊戲規則'
            }
          ],
          realLifeExample: {
            scenario: '團隊推出革新性 AI 產品，準備撼動傳統市場',
            dialogue: [
              { speaker: '投資人', text: '기존 대기업들이 시장을 꽉 잡고 있는데 가능할까요?', trans: '現有大企業已經牢牢佔據市場，這真的可能嗎？' },
              { speaker: '創辦人', text: '가능합니다. 저희 혁신 기술로 판을 180도 바꿀 겁니다.', trans: '絕對可能。我們將用這項突破技術將局勢 180 度徹底改寫。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 🇺🇸 英語歌詞研習句目 (English Study Sentences: 9 - 16)
    // =========================================================================
    {
      id: 'drip-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:08',
      timeSec: 8.1,
      korean: 'When I dress I don\'t think so much, I could be the GOAT',
      text: 'When I dress I don\'t think so much, I could be the GOAT',
      romanization: '/wɛn aɪ drɛs aɪ doʊnt θɪŋk soʊ mʌtʃ aɪ kʊd biː ðə ɡoʊt/',
      naturalTranslation: '我著裝打扮從不費力思索，隨手一穿便已是全場歷史最佳 (GOAT)！',
      pillChips: [
        {
          id: 'pe1',
          text: 'When I dress',
          rom: '/wɛn aɪ drɛs/',
          type: 'time-clause',
          typeLabel: '時間副詞子句',
          lemma: 'dress',
          meaning: '當我穿衣打扮時',
          explanation: '動詞 dress 指挑選衣物、造型裝扮。'
        },
        {
          id: 'pe2',
          text: 'I don\'t think so much',
          rom: '/aɪ doʊnt θɪŋk soʊ mʌtʃ/',
          type: 'idiomatic-assertion',
          typeLabel: '否定動詞片語',
          lemma: 'not think so much',
          meaning: '從不苦思費勁 / 舉重若輕',
          explanation: '表達渾然天成的時尚品味，完全不需要刻意算計搭配，信手拈來就是潮流。'
        },
        {
          id: 'pe3',
          text: 'the GOAT',
          rom: '/ðə ɡoʊt/',
          type: 'acronym-slang',
          typeLabel: '嘻哈界最高讚譽首字母縮寫',
          lemma: 'G.O.A.T.',
          meaning: '歷史最佳 / 史上最頂尖 (Greatest Of All Time)',
          explanation: '嘻哈、體育（如喬丹、梅西）與流行文化最尊崇的稱號！指無人能及、空前絕後的史上第一人。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '時間副詞子句 (When I dress) + 現在簡單否定主句 (I don\'t think so much) + 推測情態助動詞句 (I could be the GOAT)',
          tokens: [
            { term: 'When I dress', role: '時間子句', desc: '描述情境。' },
            { term: 'don\'t think', role: '現在否定謂語', desc: '表達毫不費力、渾然天成的時尚天賦。' },
            { term: 'could be', role: '情態動詞', desc: '表達從容自信的潛能可能。' },
            { term: 'the GOAT', role: '專有名詞補語', desc: 'Greatest Of All Time 縮寫，定冠詞 the 強化獨一無二。' }
          ]
        },
        pronunciation: {
          actualSound: '[wɛn aɪ drɛs aɪ doʊn θɪŋk soʊ mʌtʃ aɪ kʊd biː ðə ɡoʊt]',
          singingTips: '「don\'t think」的 t 音弱化為停頓鼻音，重音穩穩砸在最後的「GOAT」上，咬字要飽滿有力！',
          rules: [
            {
              title: '首字母縮寫詞讀音 (Acronym Pronunciation)',
              badge: '流行美語',
              detail: 'GOAT 不像普通縮寫逐字唸 G-O-A-T，而是直接當作單字發音 [ɡoʊt]（與動物山羊同音）。'
            },
            {
              title: 'Stop T 弱化音變 (Glottal Stop)',
              badge: '口語發音',
              detail: '「don\'t think」中 don\'t 的 t 遇到子音 th 時不爆破，舌尖閉氣即可。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈狂傲 / 街頭自信',
              badge: '天生巨星',
              form: 'When I dress I don\'t think so much, I could be the GOAT.',
              scene: '紅毯登場、時尚週亮相展現不費力的頂級穿搭'
            },
            {
              name: '日常口語 (Casual English)',
              badge: '自信打趣',
              form: 'I just throw on whatever, but people say I have effortless style.',
              scene: '朋友誇讚你的日常穿搭隨性又有型'
            },
            {
              name: '正式美譽 (Formal Acclaim)',
              badge: '典雅讚譽',
              form: 'Her innate aesthetic intuition effortlessly establishes her among the all-time greats.',
              scene: '國際時尚雜誌封面人物深度專訪讚譽'
            }
          ],
          realLifeExample: {
            scenario: '派對出發前朋友看到你的精湛穿搭讚嘆不已',
            dialogue: [
              { speaker: 'Friend', text: 'How long did it take you to put that outfit together? You look incredible!', trans: '你這套穿搭花了多久搭配啊？你看起來太驚艷了！' },
              { speaker: 'You', text: 'Honestly? I didn\'t think so much. Just picked whatever felt right!', trans: '老實說？我根本沒多想，隨手抓幾件感覺對的就出門了！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:11',
      timeSec: 11.7,
      korean: 'I\'mma set a goal, I\'mma eat that lunch',
      text: 'I\'mma set a goal, I\'mma eat that lunch',
      romanization: '/ˈaɪmə sɛt ə ɡoʊl, ˈaɪmə iːt ðæt lʌntʃ/',
      naturalTranslation: '只要我立下目標，定能徹底碾壓對手、將勝果手到擒來！',
      pillChips: [
        {
          id: 'pe1',
          text: 'I\'mma',
          rom: '/ˈaɪmə/',
          type: 'slang-future',
          typeLabel: '嘻哈時態縮讀',
          lemma: 'I am going to',
          meaning: '我定會 / 我這就去',
          explanation: '黑人英語與饒舌中最經典的將來時態縮寫（I\'m going to -> I\'mma），代表雷厲風行的堅定意志。'
        },
        {
          id: 'pe2',
          text: 'set a goal',
          rom: '/sɛt ə ɡoʊl/',
          type: 'collocation',
          typeLabel: '動賓固定搭配',
          lemma: 'set a goal',
          meaning: '確立目標 / 鎖定勝局',
          explanation: '動詞 set + 不定冠詞 + goal，指確立清晰堅定的奮鬥方向。'
        },
        {
          id: 'pe3',
          text: 'eat that lunch',
          rom: '/iːt ðæt lʌntʃ/',
          type: 'american-idiom',
          typeLabel: '美語競爭成語',
          lemma: 'eat someone\'s lunch',
          meaning: '徹底擊潰對手 / 奪取全部勝果',
          explanation: '美語商業與街頭高頻成語！源自校園「搶走對方的午餐」，引申為在競爭中完全擊潰對手、拿下其市場份額或勝利！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '未來式縮寫 (I\'mma) + 動賓片語 (set a goal) + 對稱未來式縮寫 (I\'mma) + 成語動賓片語 (eat that lunch)',
          tokens: [
            { term: 'I\'mma', role: '第一人稱未來助動詞', desc: 'I am going to 的極速街頭縮約。' },
            { term: 'set a goal', role: '動詞片語', desc: '鎖定野心目標。' },
            { term: 'eat that lunch', role: '成語片語', desc: 'eat someone\'s lunch 的霸氣省略，指摧枯拉朽擊敗競爭者。' }
          ]
        },
        pronunciation: {
          actualSound: '[아이마 셋 어 골 아이마 잇 댓 런치]',
          singingTips: '對稱結構雙連擊！「I\'mma」發音短促脆生，goal 與 lunch 形成節奏停頓點，展現獵豹般的捕食攻擊性。',
          rules: [
            {
              title: 'I\'m going to 極速縮約成 I\'mma',
              badge: '嘻哈文法',
              detail: '將四個音節 [aɪm ˈɡoʊɪŋ tuː] 壓縮為兩個音節 [ˈaɪmə]，在快速饒舌中極其高頻。'
            },
            {
              title: 'Eat someone\'s lunch 成語由來',
              badge: '道地成語',
              detail: '美式英語常用來比喻「在商業競爭或比賽中徹底打敗對方並搶奪其戰果」。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞狼性 / 街頭爭霸',
              badge: '強悍野心',
              form: 'I\'mma set a goal, I\'mma eat that lunch.',
              scene: '重大競賽前夕宣告必勝信念'
            },
            {
              name: '日常口語 (Casual)',
              badge: '全力以赴',
              form: 'Once I set my mind to it, I\'ll definitely outperform the competition.',
              scene: '向朋友保證自己一定能在考試或專案中脫穎而出'
            },
            {
              name: '正式商務 (Business Strategy)',
              badge: '商業競爭',
              form: 'Having identified strategic objectives, we are positioned to capture market share aggressively.',
              scene: '商業戰略會議上宣示擴張與顛覆競品'
            }
          ],
          realLifeExample: {
            scenario: '創業團隊在競標大案前夕互相激勵士氣',
            dialogue: [
              { speaker: 'Partner', text: 'Can our small team really win against that multinational agency?', trans: '我們這支小團隊真的能在競標中贏過那家跨國大公司嗎？' },
              { speaker: 'Founder', text: 'Watch us. We set our goal, and we\'re gonna eat their lunch!', trans: '看好了。我們鎖定目標，一定會徹底把他們比下去拿下這案子！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:13',
      timeSec: 13.8,
      korean: 'Baby so cold get that ice cream truck',
      text: 'Baby so cold get that ice cream truck',
      romanization: '/ˈbeɪbi soʊ koʊld ɡɛt ðæt ˈaɪs kriːm trʌk/',
      naturalTranslation: '女孩氣場冷酷絕頂，快把冰淇淋車（閃耀鑽石珠寶）全給我開過來！',
      pillChips: [
        {
          id: 'pe1',
          text: 'so cold',
          rom: '/soʊ koʊld/',
          type: 'slang-adjective',
          typeLabel: '街頭俚語形容詞',
          lemma: 'cold',
          meaning: '酷絕頂峰 / 帥氣狠辣',
          explanation: '嘻哈文化中「cold」絕不只是指溫度冷，而是指「酷到骨子裡、實力深不可測、令人不寒而慄的帥氣」。'
        },
        {
          id: 'pe2',
          text: 'ice cream truck',
          rom: '/ˈaɪs kriːm trʌk/',
          type: 'hip-hop-metaphor',
          typeLabel: '嘻哈雙關隱喻',
          lemma: 'ice cream truck',
          meaning: '冰淇淋車 / 閃爍珠寶首飾車',
          explanation: '天才雙關！嘻哈中「Ice」指頂級鑽石與珠寶。叫來「ice cream truck」既指降溫，又比喻呼喚滿車如冰塊般奢華璀璨的鑽石！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主詞 + 省略繫動詞狀態 (Baby [is] so cold) + 祈使獲取句 (get that ice cream truck)',
          tokens: [
            { term: 'Baby', role: '主詞代名詞', desc: '在此代表 BABYMONSTER 成員自身。' },
            { term: 'so cold', role: '形容詞表語', desc: '省略 is，AAVE 語法特徵，比喻酷颯絕倫。' },
            { term: 'get that ice cream truck', role: '祈使動詞片語', desc: '雙關呼喚滿載冰晶鑽石的豪車登場。' }
          ]
        },
        pronunciation: {
          actualSound: '[베이비 쏘 콜드 겟 댓 아이스 크림 트럭]',
          singingTips: '「so cold」的 l 音要有渾厚的暗 L (Dark L) 舌根共鳴；「truck」與「lunch/much」押短母音 [ʌ] 的尾韻！',
          rules: [
            {
              title: 'Ice 在嘻哈文化中的暗號',
              badge: '文化黑話',
              detail: '饒舌歌手用「Ice」代表昂貴鑽石（因為晶瑩剔透如冰），「Cold」代表戴滿鑽石後的冰冷奢華感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈黑話 / 鑽石隱喻',
              badge: '奢華酷炫',
              form: 'Baby so cold get that ice cream truck.',
              scene: '舞台閃亮登場、MV 奢華珠寶視覺宣言'
            },
            {
              name: '日常口語 (Casual)',
              badge: '酷帥讚嘆',
              form: 'She is insanely cool and dripping with diamond jewelry.',
              scene: '看到朋友極具個性的冰山美人造型時的驚嘆'
            },
            {
              name: '高雅鑑賞 (Refined Critique)',
              badge: '高雅評論',
              form: 'Her commanding demeanor is accentuated by brilliant, glistening jewelry aesthetics.',
              scene: '高級珠寶雜誌封面造型評論'
            }
          ],
          realLifeExample: {
            scenario: '時尚秀後台化妝師看到模特兒戴上百萬鑽石項鍊後的氣場',
            dialogue: [
              { speaker: 'Stylist', text: 'Look at how those diamonds catch the lights on her!', trans: '看看那些鑽石在她身上折射的光芒！' },
              { speaker: 'Director', text: 'Unbelievable. She\'s so cold she needs an ice cream truck!', trans: '太不可思議了。她簡直酷絕了，渾身冰晶璀璨到不行！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:14',
      timeSec: 74.3,
      korean: 'Monster came to conquer, Baby, holla wassup',
      text: 'Monster came to conquer, Baby, holla wassup',
      romanization: '/ˈmɒnstər keɪm tuː ˈkɒŋkər, ˈbeɪbi, ˈhɒlə wɒsˈʌp/',
      naturalTranslation: '怪獸級巨星君臨現場只為征服全場，寶貝，快大聲向我們打聲招呼！',
      pillChips: [
        {
          id: 'pe1',
          text: 'came to conquer',
          rom: '/keɪm tuː ˈkɒŋkər/',
          type: 'alliteration-phrase',
          typeLabel: '頭韻動詞片語',
          lemma: 'come to conquer',
          meaning: '專程為征服而來',
          explanation: '源自凱薩大帝名言「Veni, vidi, vici（我來，我見，我征服）」。Came 與 Conquer 形成清脆的押頭韻 (Alliteration)！'
        },
        {
          id: 'pe2',
          text: 'holla wassup',
          rom: '/ˈhɒlə wɒsˈʌp/',
          type: 'street-greeting',
          typeLabel: '街頭熱情問候',
          lemma: 'holler + what\'s up',
          meaning: '快大聲打個招呼！近來可好？',
          explanation: '「holla」是「holler（大喊、呼喊）」的街頭拼法；「wassup」是「what\'s up」的縮讀，召集全場觀眾熱情呼應。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞主詞 (Monster) + 過去不定詞片語 (came to conquer) + 呼格稱謂 (Baby) + 街頭祈使問候 (holla wassup)',
          tokens: [
            { term: 'Monster', role: '主詞名詞', desc: '呼應團名 BABYMONSTER 的怪獸霸氣。' },
            { term: 'came to conquer', role: '目的狀語動詞片語', desc: '展現一出擊便要征服全場的絕對統治力。' },
            { term: 'holla wassup', role: '祈使問候句', desc: '主動帶動現場觀眾呼應。' }
          ]
        },
        pronunciation: {
          actualSound: '[몬스터 케임 투 컹커 베이비 할라 왓썹]',
          singingTips: '「came to conquer」兩個 C [k] 音要發出清脆的擊打感；「holla wassup」語調上揚，充滿煽動全場的狂熱能量。',
          rules: [
            {
              title: 'C/K 頭韻修辭 (Consonant Alliteration)',
              badge: '修辭手法',
              detail: 'Came [k] 和 Conquer [k] 連續爆破，強化了霸道征服的節奏力道。'
            },
            {
              title: 'What\'s up -> Wassup 語音演變',
              badge: '街頭縮讀',
              detail: 't 脫落，雙子音 ss 吸收弱化，成為全球最通用的青年街頭問候語。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈巡演 / 現場炸場',
              badge: '征服全場',
              form: 'Monster came to conquer, Baby, holla wassup!',
              scene: '演唱會高潮與全場萬人粉絲大合唱呼應'
            },
            {
              name: '日常口語 (Casual Greeting)',
              badge: '熱情打招呼',
              form: 'We\'re here to win, so shout out and say hello!',
              scene: '團隊進駐運動場或競賽現場時向友軍打招呼'
            },
            {
              name: '正式迎賓 (Formal Introduction)',
              badge: '莊重致意',
              form: 'Our delegation has arrived with decisive purpose; we extend our warmest greetings.',
              scene: '國際代表團抵達主辦國時的官方聲明'
            }
          ],
          realLifeExample: {
            scenario: '體育校隊以王者之姿抵達決賽體育館受到球迷歡呼',
            dialogue: [
              { speaker: 'Fan', text: 'The champions have entered the building!', trans: '衛冕冠軍隊已經進場了！' },
              { speaker: 'Captain', text: 'We came to conquer! Holla wassup everyone!', trans: '我們專程為征服冠軍而來！大家大聲喊出你們的熱情吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-en-5',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:18',
      timeSec: 78.0,
      korean: 'We the best, the rest confess, we blessed',
      text: 'We the best, the rest confess, we blessed',
      romanization: '/wiː ðə bɛst, ðə rɛst kənˈfɛs, wiː blɛst/',
      naturalTranslation: '我們便是舉世無雙的第一，其他人只能甘拜下風，我們備受上天眷顧！',
      pillChips: [
        {
          id: 'pe1',
          text: 'We the best',
          rom: '/wiː ðə bɛst/',
          type: 'aave-copula-omission',
          typeLabel: 'AAVE 零繫詞語法',
          lemma: 'We are the best',
          meaning: '我們是最強第一',
          explanation: '非裔美語極具代表性的「Zero Copula（繫動詞省略）」，省略 are，直接將 We 與 the best 連接，語氣如鋼鐵般果決！'
        },
        {
          id: 'pe2',
          text: 'the rest confess',
          rom: '/ðə rɛst kənˈfɛs/',
          type: 'rhyme-clause',
          typeLabel: '主謂押韻子句',
          lemma: 'the rest confess',
          meaning: '其餘人等心悅誠服地承認',
          explanation: '名詞 the rest（其餘所有人）+ 動詞 confess（坦白認輸/俯首稱臣），與 best 構成完美押韻。'
        },
        {
          id: 'pe3',
          text: 'we blessed',
          rom: '/wiː blɛst/',
          type: 'aave-assertion',
          typeLabel: 'AAVE 幸運與眷顧宣告',
          lemma: 'we are blessed',
          meaning: '我們備受天賦與幸運眷顧',
          explanation: '天賦異稟、氣運加身，象徵具備不可複製的王者幸運。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '零繫動詞主句 (We the best) + 押韻主謂句 (the rest confess) + 零繫動詞總結句 (we blessed)',
          tokens: [
            { term: 'We the best', role: 'AAVE 語法', desc: '省略 are，直截了當宣稱登頂。' },
            { term: 'the rest', role: '主詞名詞片語', desc: '其他所有競爭者。' },
            { term: 'confess', role: '動詞', desc: '承認、折服。' },
            { term: 'we blessed', role: '形容詞補語句', desc: '天賦加身、神聖幸運。' }
          ]
        },
        pronunciation: {
          actualSound: '[위 더 베스트 더 레스트 컨페스 위 블레스트]',
          singingTips: '頂級三連押 (Triplet Rhyme: best / confess / blessed)！結尾的 -est [ɛst] 重音拍如連珠砲般鏗鏘有力。',
          rules: [
            {
              title: '嘻哈連環押韻 (Internal Multi-Rhyme)',
              badge: '饒舌技巧',
              detail: 'Best [bɛst]、Confess [kənˈfɛs]、Blessed [blɛst] 共享同一個短母音 [ɛ] 與雙子音結尾，流暢度極高。'
            },
            {
              title: 'Zero Copula（零繫動詞省略）',
              badge: '語言學精解',
              detail: 'AAVE 經典句型，省略 are，傳遞毫不妥協的絕對真理感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈金句 / 押韻天花板',
              badge: '絕對王者',
              form: 'We the best, the rest confess, we blessed.',
              scene: '領取大獎、打破紀錄時的冠軍頌詞'
            },
            {
              name: '日常口語 (Casual English)',
              badge: '團隊驕傲',
              form: 'We\'re truly the top team; everyone admits our talent, and we\'re lucky to have each other.',
              scene: '專案大獲全勝後向團隊夥伴衷心致謝'
            },
            {
              name: '正式讚揚 (Formal Praise)',
              badge: '商務卓越',
              form: 'Our industry leadership remains uncontested, driven by peer consensus and exceptional fortune.',
              scene: '年度財報致股東信中對企業頂尖地位的總結'
            }
          ],
          realLifeExample: {
            scenario: '黑客松程式設計大賽獲得全體評審滿分一致奪冠',
            dialogue: [
              { speaker: 'Teammate', text: 'All five judges gave us a perfect score! Can you believe it?', trans: '所有五位評委都給了我們滿分！你敢相信嗎？' },
              { speaker: 'Leader', text: 'I sure can. We the best, the rest confess, we blessed!', trans: '我當然信。我們是最強的，所有人都心服口服，我們天賦滿滿！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-en-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:22',
      timeSec: 82.3,
      korean: 'Y to the G, no copy, no Knock off',
      text: 'Y to the G, no copy, no Knock off',
      romanization: '/waɪ tuː ðə dʒiː, noʊ ˈkɒpi, noʊ ˈnɒk ɒf/',
      naturalTranslation: '正宗 YG 頂級血統，絕無抄襲借鑑，更非廉價山寨仿冒品！',
      pillChips: [
        {
          id: 'pe1',
          text: 'Y to the G',
          rom: '/waɪ tuː ðə dʒiː/',
          type: 'hip-hop-spelling',
          typeLabel: '嘻哈拼讀打 call 語句',
          lemma: 'YG',
          meaning: '正宗 YG 娛樂名號',
          explanation: '經典嘻哈拼字句型「[Letter] to the [Letter]」，在此宣告身為 YG Entertainment 正統音樂接班人的強悍驕傲。'
        },
        {
          id: 'pe2',
          text: 'no copy',
          rom: '/noʊ ˈkɒpi/',
          type: 'negative-noun',
          typeLabel: '否定名詞片語',
          lemma: 'copy',
          meaning: '絕無模仿 / 絕非抄襲',
          explanation: '宣告所有原創音樂與獨特風格全屬自主獨創，打破外界一切模仿質疑。'
        },
        {
          id: 'pe3',
          text: 'no Knock off',
          rom: '/noʊ ˈnɒk ɒf/',
          type: 'street-slang-noun',
          typeLabel: '商業俚語名詞',
          lemma: 'knock-off',
          meaning: '非山寨劣質品 / 絕無仿冒',
          explanation: '英語高頻生活俚語！「knock-off」專指廉價的山寨仿製品或贗品。「no knock off」代表貨真價實的唯一原版！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '嘻哈拼讀代號 (Y to the G) + 雙重否定名詞宣告 (no copy, no Knock off)',
          tokens: [
            { term: 'Y to the G', role: '廠牌宣示', desc: 'YG 招牌 Swag 拼讀語法。' },
            { term: 'no copy', role: '否定短語', desc: '拒絕任何抄襲標籤。' },
            { term: 'no knock off', role: '俚語否定', desc: '強調絕對的原汁原味正品。' }
          ]
        },
        pronunciation: {
          actualSound: '[와이 투 더 지 노 카피 노 낙 오프]',
          singingTips: '短促、幹練、傲岸！「Knock off」連音成 [ˈnɒ-kɒf]，清脆爆破聲直截了當回擊所有抹黑。',
          rules: [
            {
              title: 'Knock-off 的生動俚語淵源',
              badge: '道地英語',
              detail: '源自拍賣場敲槌「knock down」或工廠快速複製生產，在日常美語中指任何低劣的模仿複製品。'
            },
            {
              title: '[Letter] to the [Letter] 饒舌修辭',
              badge: '嘻哈句型',
              detail: '例如 S to the N-O-O-P 或 Y to the G，透過介系詞 to the 讓縮寫字母具備強烈律動感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '廠牌自尊 / 傲岸宣誓',
              badge: '正品正統',
              form: 'Y to the G, no copy, no Knock off.',
              scene: '宣示純粹血統與無可複製的原創實力'
            },
            {
              name: '日常口語 (Casual)',
              badge: '原創品質',
              form: 'This is 100% original and authentic, not some cheap imitation.',
              scene: '向朋友展示自己費盡心血設計的原創作品'
            },
            {
              name: '知識產權與商標 (IP & Authenticity)',
              badge: '法律專業',
              form: 'This product represents proprietary, patented innovation with zero tolerance for counterfeit infringements.',
              scene: '品牌官方反盜版與知識產權聲明'
            }
          ],
          realLifeExample: {
            scenario: '獨立潮流服飾設計師面對市場上廉價仿冒品的霸氣回擊',
            dialogue: [
              { speaker: 'Interviewer', text: 'How do you respond to mass-market brands trying to copy your aesthetic?', trans: '你如何回應那些試圖抄襲你美學的大眾快時尚品牌？' },
              { speaker: 'Designer', text: 'Let them try. We are the originals—no copies, and never a knock-off.', trans: '隨他們去吧。我們才是正版原創——絕不抄襲，更不是那些山寨貨。' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-en-7',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:24',
      timeSec: 84.3,
      korean: 'Bet on my life, this pitch I\'m gon\' walk-off',
      text: 'Bet on my life, this pitch I\'m gon\' walk-off',
      romanization: '/bɛt ɒn maɪ laɪf, ðɪs pɪtʃ aɪm ɡɒn wɔːk ɒf/',
      naturalTranslation: '拿我的性命做賭注，面對這記投球，我定會轟出再見全壘打 (Walk-off) 絕殺比賽！',
      pillChips: [
        {
          id: 'pe1',
          text: 'Bet on my life',
          rom: '/bɛt ɒn maɪ laɪf/',
          type: 'high-stakes-idiom',
          typeLabel: '誓言成語',
          lemma: 'bet on one\'s life',
          meaning: '拿生命打賭 / 百分之百確信',
          explanation: '表達絕不反悔、孤注一擲的絕對自信（相當於「我敢拿我這條命保證！」）。'
        },
        {
          id: 'pe2',
          text: 'this pitch',
          rom: '/ðɪs pɪtʃ/',
          type: 'baseball-metaphor',
          typeLabel: '棒球運動隱喻',
          lemma: 'pitch',
          meaning: '這記投球 / 眼前這個重大考驗',
          explanation: '棒球術語，指投手投向打擊區的球；在生活與歌曲中比喻命運拋向你的關鍵考驗。'
        },
        {
          id: 'pe3',
          text: 'walk-off',
          rom: '/wɔːk ɒf/',
          type: 'sports-super-idiom',
          typeLabel: '棒球界殿堂級術語',
          lemma: 'walk-off (homer / win)',
          meaning: '再見全壘打 / 一棒定江山逆轉絕殺',
          explanation: '棒球最激動人心的神話！第九局下半打者轟出決勝全壘打，對手只能直接「走下球場 (walk off the field) 認輸」，比賽當場結束！引申為絕境逆襲一擊必殺！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '祈使賭注誓言 (Bet on my life) + 賓語前置 (this pitch) + 縮音未來謂語 (I\'m gon\' walk-off)',
          tokens: [
            { term: 'Bet on my life', role: '誓言狀語', desc: '以性命作為勝負賭注。' },
            { term: 'this pitch', role: '前置對象', desc: '眼前對手投來的致命關鍵球。' },
            { term: 'I\'m gon\'', role: '助動詞縮約', desc: 'I am going to 的口語縮寫。' },
            { term: 'walk-off', role: '核心動作動詞', desc: '轟出再見全壘打、直接結束整場比賽。' }
          ]
        },
        pronunciation: {
          actualSound: '[벳 온 마이 라이프 디스 피치 아임 곤 워크 오프]',
          singingTips: '棒球擊球瞬間的重擊！「Bet on my life」連音平滑，「this pitch」短促，最後「walk-off」連音成 [wɔː-kɒf]，如球棒正中靶心！',
          rules: [
            {
              title: '棒球傳奇術語 Walk-off 的起源',
              badge: '體育文化',
              detail: '由傳奇投手 Dennis Eckersley 於 1988 年創造，形容全壘打落地瞬間對手只能落寞走出球場，現已成為一切壓哨絕殺的代名詞。'
            },
            {
              title: '連音 [wɔː-kɒf] (Consonant-Vowel Link)',
              badge: '道地口語',
              detail: 'Walk 字尾 k 與 off 初聲母音緊密連讀，絕不可斷開為 walk - off。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '絕殺霸氣 / 體育神話',
              badge: '一棒定江山',
              form: 'Bet on my life, this pitch I\'m gon\' walk-off.',
              scene: '重大決戰關鍵一擊前的豪邁誓言'
            },
            {
              name: '日常口語 (Casual)',
              badge: '孤注一擲',
              form: 'I swear with absolute certainty, this opportunity will seal our victory.',
              scene: '在關鍵時刻向夥伴保證這最後一次機會必能逆風翻盤'
            },
            {
              name: '商業決勝 (Executive Clutch)',
              badge: '戰略絕殺',
              form: 'With unwavering conviction, this concluding initiative will definitively conclude the contest in our favor.',
              scene: '最後競標前向董事會保證本提案必能一錘定音'
            }
          ],
          realLifeExample: {
            scenario: '創業團隊在最後一輪創投競賽面對最後一次三分鐘答辯',
            dialogue: [
              { speaker: 'Co-founder', text: 'This is the final pitch of the entire competition. Everything comes down to this.', trans: '這是全場比賽最後一次三分鐘提案了，成敗在此一舉。' },
              { speaker: 'Presenter', text: 'Bet on my life. I\'m walking this off right now!', trans: '拿我的命打賭。我現在就上去轟出一記絕殺全壘打！' }
            ]
          }
        }
      }
    },
    {
      id: 'drip-en-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:04',
      timeSec: 64.3,
      korean: 'Baby got Drip, drip, drip, drip',
      text: 'Baby got Drip, drip, drip, drip',
      romanization: '/ˈbeɪbi ɡɒt drɪp, drɪp, drɪp, drɪp/',
      naturalTranslation: '女孩渾身上下散發極致潮流酷感，氣場魅力如水滴般四溢迸發！',
      pillChips: [
        {
          id: 'pe1',
          text: 'Baby got',
          rom: '/ˈbeɪbi ɡɒt/',
          type: 'aave-possession',
          typeLabel: '非裔美語所有格句型',
          lemma: 'Baby has got',
          meaning: '女孩生來擁有…',
          explanation: '口語省略助動詞 has（Baby [has] got），直接銜接核心特質。'
        },
        {
          id: 'pe2',
          text: 'Drip',
          rom: '/drɪp/',
          type: 'core-culture-slang',
          typeLabel: '當代潮流文化第一核心熱詞',
          lemma: 'drip',
          meaning: '頂級穿搭品味 / 溢出螢幕的極致魅力氣場',
          explanation: '本歌靈魂概念！源自 2000 年代亞特蘭大嘻哈文化。字面是「水珠滴落」，在街頭文化中專指「穿著打扮品味極高、渾身珠寶像剛從水裡撈出來一樣晶瑩璀璨、散發著無與倫比的酷炫氣場」！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主詞 (Baby) + 所有格動詞省略 (got) + 連環核心流行語反覆 (Drip, drip, drip, drip)',
          tokens: [
            { term: 'Baby', role: '主格名詞', desc: '指稱自信酷颯的成員。' },
            { term: 'got', role: '及物動詞', desc: '擁有、具備無可爭議的特質。' },
            { term: 'Drip', role: '核心潮流名詞', desc: '象徵滿溢的自信、閃耀的鑽石與無懈可擊的時尚魅力。' }
          ]
        },
        pronunciation: {
          actualSound: '[베이비 갓 드립 드립 드립 드립]',
          singingTips: '連環魔性重音敲擊！Dr- [dr] 子音要乾淨俐落，舌尖輕彈，ip [ɪp] 尾音迅速閉塞，帶來像雨滴敲打舞台的律動感。',
          rules: [
            {
              title: '當代潮流俚語 DRIP 的演進',
              badge: '流行文化',
              detail: '從形容水滴滴落，演化為形容珠寶冰涼如水、穿搭「水到流油 (Dripping with swag)」，是當代 Gen-Z 最潮的讚嘆詞。'
            },
            {
              title: '反覆修辭法 (Repetition)',
              badge: '歌曲 Hook',
              detail: '四次連環重複 Drip，營造出不可抵擋的洗腦節奏感與記憶錨點。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '潮流頂流 / 歌曲靈魂 Hook',
              badge: '魅力爆棚',
              form: 'Baby got Drip, drip, drip, drip.',
              scene: '展現無與倫比的時尚氣場與自信魅力'
            },
            {
              name: '日常口語 (Casual Slang)',
              badge: '潮酷讚譽',
              form: 'Your outfit is pure drip today, you look amazing!',
              scene: '在街頭或派對由衷讚美朋友今天的穿搭太有型了'
            },
            {
              name: '時尚藝術評述 (Fashion Critique)',
              badge: '高端美學',
              form: 'The ensemble exudes effortless high-fashion magnetism and sartorial excellence.',
              scene: '國際高訂時裝週專欄評價標竿造型'
            }
          ],
          realLifeExample: {
            scenario: '朋友穿著一身精心搭配的街頭高級潮流服飾現身聚會',
            dialogue: [
              { speaker: 'Friend A', text: 'Whoa! Look at your jacket, your accessories, everything!', trans: '哇！看看你的外套、你的配飾，整套造型太絕了！' },
              { speaker: 'Friend B', text: 'Thanks! Too much drip? Or just enough drip?', trans: '謝啦！是魅力太滿？還是恰到好處的 Drip 呢？' }
            ]
          }
        }
      }
    }
  ]
};
