// BABYMONSTER - 《DESERVE》 韓英雙語抒情放手之歌深度研習資料包
// 收錄 2026 數位單曲《DESERVE》核心歌詞 10 句韓英雙語精解：
// 1. 韓語 (Korean) 核心歌詞句精讀 (오랜만이야 久別重逢、눈이 부셔 耀眼奪目、전해 들었어 輾轉聽聞、-다고 間接引述、덮어준 너의 봄 覆蓋寒冬的春天、-네 發現語尾、찬란했던 回想式定語詞尾)
// 2. 英語 (English) 抒情流行名句精讀 (come rushing back 湧上心頭、I see it in your eyes 從眼神讀懂、ain't supposed to 不該如此、deserve better 你值得更好的)
// 3. 膠囊化單字分塊 (Interactive Pill Chips) + 三層研習抽屜數據 (文法結構、發音音變與Flow、語域正式度與日常對話)
// 歌詞時間軸對應官方 MV (oC6brLXQe4I) 字幕。

export const DESERVE_STUDY_DATA = {
  id: 'deserve',
  title: 'DESERVE',
  artist: 'BABYMONSTER',
  album: '數位單曲《DESERVE》',
  year: '2026',
  youtubeId: 'oC6brLXQe4I',
  altYoutubeIds: ['oC6brLXQe4I'],
  sentences: [
    // =========================================================================
    // 🇰🇷 韓語歌詞研習句目 (Korean Study Sentences)
    // =========================================================================
    {
      id: 'ds-kr-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:16',
      timeSec: 16.4,
      korean: '오랜만이야 잘 지낸 거니',
      text: '오랜만이야 잘 지낸 거니',
      romanization: 'o-raen-man-i-ya jal ji-naen geo-ni',
      naturalTranslation: '好久不見了，你過得還好嗎？',
      pillChips: [
        {
          id: 'dsp1',
          text: '오랜만',
          rom: 'o-raen-man',
          type: 'noun',
          typeLabel: '名詞 (隔了很久/久別)',
          lemma: '오랜만 (오래간만)',
          meaning: '隔了很長一段時間',
          explanation: '「오래간만」的縮約形，後接「이야」變成「오랜만이야」，是重逢時最常用的第一句話。'
        },
        {
          id: 'dsp2',
          text: '지낸',
          rom: 'ji-naen',
          type: 'verb-modifier',
          typeLabel: '過去式定語詞尾 (-ㄴ)',
          lemma: '지내다',
          meaning: '過日子 / 度過 / 相處',
          explanation: '「지내다」搭配「잘」問候近況，是「過得好嗎」的核心動詞；加上 -ㄴ 變成修飾「거」的過去式定語。'
        },
        {
          id: 'dsp3',
          text: '거니',
          rom: 'geo-ni',
          type: 'ending',
          typeLabel: '疑問語尾 (-ㄴ 거니)',
          lemma: '-ㄴ 것이니 → -ㄴ 거니',
          meaning: '（你）是不是……了呢？',
          explanation: '「거」是「것」的口語，「-니」是溫柔的非敬語疑問語尾，語氣比「-어?」更柔和、帶著關心。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞 + 이야 (叙述格助詞，非敬語) + 副詞 잘 + 動詞過去式定語 (지낸) + 依存名詞 거 + 疑問語尾 -니',
          tokens: [
            { term: '오랜만이야', role: '名詞 + 叙述格助詞', desc: '「오랜만」加上「이야」，等於「是隔了很久（的重逢）」。' },
            { term: '잘', role: '副詞', desc: '修飾動詞「지내다」，表示「好好地」。' },
            { term: '지낸', role: '過去式定語', desc: '動詞詞幹「지내」+ -ㄴ，修飾後面的「거」。' },
            { term: '거니', role: '依存名詞 + 疑問語尾', desc: '「거 (것)」+「-이니」縮約，是柔和的非敬語疑問句尾。' }
          ]
        },
        pronunciation: {
          actualSound: '[오랜마니야 잘 지낸 거니]',
          singingTips: '開場第一句要輕柔如耳語，「오랜만이야」的連音要順，句尾「거니」的 -니 用氣音收尾，營造久別重逢的猶豫與溫柔。',
          rules: [
            {
              title: '連音化規則 (연음화)',
              badge: '收音音變',
              detail: '「오랜만이야」中「만」的收音 ㄴ 遇到後面母音 ㅣ，移到下一音節開頭，讀作 [오랜마니야]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '平語 (반말)',
              badge: '歌詞原型',
              form: '오랜만이야. 잘 지낸 거니?',
              scene: '與親近的舊朋友、前任或同輩重逢時的問候'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '오랜만이에요. 잘 지내셨어요?',
              scene: '遇到久未見面的學長姐、前同事時禮貌問候'
            },
            {
              name: '正式體 (하십시오體)',
              badge: '最高敬意',
              form: '오랜만에 뵙겠습니다. 그동안 평안하셨습니까?',
              scene: '正式場合向長輩或客戶問候'
            }
          ],
          realLifeExample: {
            scenario: '在街上巧遇多年未見的高中同學',
            dialogue: [
              { speaker: '同學', text: '어! 진짜 오랜만이다!', trans: '哇！真的好久不見！' },
              { speaker: '你 (You)', text: '오랜만이야. 잘 지낸 거니?', trans: '好久不見了，你過得還好嗎？' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-kr-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:21',
      timeSec: 21.1,
      korean: '여전히 눈이 부셔 넌',
      text: '여전히 눈이 부셔 넌',
      romanization: 'yeo-jeon-hi nun-i bu-syeo neon',
      naturalTranslation: '你依舊耀眼得讓我睜不開眼。',
      pillChips: [
        {
          id: 'dsp4',
          text: '여전히',
          rom: 'yeo-jeon-hi',
          type: 'adverb',
          typeLabel: '副詞 (依舊/一如往昔)',
          lemma: '여전히',
          meaning: '依然 / 仍舊 / 一如既往',
          explanation: '漢字詞「如前」的副詞形，表示狀態與過去相比沒有改變。'
        },
        {
          id: 'dsp5',
          text: '눈이 부셔',
          rom: 'nun-i bu-syeo',
          type: 'idiom',
          typeLabel: '慣用表達 (耀眼/刺眼)',
          lemma: '눈이 부시다',
          meaning: '光芒刺眼 / 耀眼得睜不開眼',
          explanation: '字面是「眼睛被光晃到」，常用來形容人或事物美得耀眼；「부시어」縮約為「부셔」。'
        },
        {
          id: 'dsp6',
          text: '넌',
          rom: 'neon',
          type: 'particle',
          typeLabel: '縮約主題格 (너는)',
          lemma: '너는',
          meaning: '你（作為話題）',
          explanation: '「너는」的口語縮約。歌詞把主題放到句尾，有倒裝強調「說的就是你」的效果。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '副詞 (여전히) + 主語「눈이」+ 形容詞 부셔 (해體) + 倒置的話題 넌',
          tokens: [
            { term: '여전히', role: '副詞', desc: '表示狀態持續不變。' },
            { term: '눈이', role: '主語', desc: '「눈이 부시다」是固定搭配，主語是「眼睛」而非「你」。' },
            { term: '부셔', role: '形容詞 (해體)', desc: '부시다 + -어 → 부셔，非敬語終結語尾。' },
            { term: '넌', role: '話題 (倒置)', desc: '倒置在句尾，加強「是你」的指向。' }
          ]
        },
        pronunciation: {
          actualSound: '[여전히 누니 부셔 넌]',
          singingTips: '「눈이 부셔」要把 [누니] 連成一口氣，「부셔」的 ㅕ 嘴型略拉開帶出驚嘆感，句尾「넌」輕輕帶過、不要重音。',
          rules: [
            {
              title: '連音化規則 (연음화)',
              badge: '收音音變',
              detail: '「눈이」收音 ㄴ 遇到母音 ㅣ，讀作 [누니]。'
            },
            {
              title: '縮約形 (준말)',
              badge: '口語縮約',
              detail: '「부시어」縮約為「부셔」，「너는」縮約為「넌」，歌詞與口語中都極其常見。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '平語 (반말)',
              badge: '歌詞原型',
              form: '여전히 눈이 부셔, 넌.',
              scene: '對親近的人坦白說出內心的讚嘆'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '여전히 눈부시네요.',
              scene: '稱讚久未見面的朋友依然光彩動人'
            },
            {
              name: '正式體 (하십시오體)',
              badge: '最高敬意',
              form: '여전히 눈부시게 아름다우십니다.',
              scene: '正式致詞中對長輩或貴賓的讚美'
            }
          ],
          realLifeExample: {
            scenario: '看到久未見面的朋友出現在聚會上',
            dialogue: [
              { speaker: '朋友', text: '나 많이 변했지?', trans: '我變了很多吧？' },
              { speaker: '你 (You)', text: '아니, 여전히 눈이 부셔.', trans: '沒有，你依然耀眼。' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-kr-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:35',
      timeSec: 35.8,
      korean: '전해 들었어 네 옆엔 아직 그 사람이 있다고',
      text: '전해 들었어 네 옆엔 아직 그 사람이 있다고',
      romanization: 'jeon-hae deul-eot-eo ne yeop-en a-jik geu sa-ram-i it-da-go',
      naturalTranslation: '聽說了，你身邊還是有那個人在。',
      pillChips: [
        {
          id: 'dsp7',
          text: '전해 들었어',
          rom: 'jeon-hae deul-eot-eo',
          type: 'verb-compound',
          typeLabel: '複合動詞 (輾轉聽說)',
          lemma: '전해 듣다',
          meaning: '從別人那裡聽說',
          explanation: '「전하다 (傳達)」+「듣다 (聽)」，表示並非親眼所見，而是透過別人轉述得知。「듣다」是 ㄷ 불규칙，遇母音變成「들」。'
        },
        {
          id: 'dsp8',
          text: '옆엔',
          rom: 'yeop-en',
          type: 'noun',
          typeLabel: '名詞 + 縮約助詞 (옆에는)',
          lemma: '옆',
          meaning: '身旁 / 旁邊',
          explanation: '「옆에는」縮約成「옆엔」，「는」帶有對比意味：別的不說，唯獨在你身邊。'
        },
        {
          id: 'dsp9',
          text: '있다고',
          rom: 'it-da-go',
          type: 'ending',
          typeLabel: '間接引述語尾 (-다고)',
          lemma: '있다 + -다고',
          meaning: '（聽說）有……',
          explanation: '「-다고」用於引述聽來的內容，放在「전해 들었어」之前說明「聽到了什麼」，這裡順序倒過來放在句尾。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主要動詞 (전해 들었어) + 引述內容子句 (네 옆엔 아직 그 사람이 있다고)，語序倒置，把引述內容放在句尾。',
          tokens: [
            { term: '전해 들었어', role: '主要動詞 (過去式 해體)', desc: '「전해」是 -아/어 連接形，「들었어」是 듣다 的過去式。' },
            { term: '네 옆엔', role: '處所補語', desc: '「네」是「너의」縮約（發音上為與「내」區分常讀作 [니]），後接「옆에는」。' },
            { term: '아직', role: '副詞', desc: '表示「仍然、還」，隱含「本以為已經不在」的語氣。' },
            { term: '그 사람이', role: '主語', desc: '直接以「那個人」稱呼，不點名，是歌詞刻意的含蓄。' },
            { term: '있다고', role: '間接引述語尾', desc: '「있다」+「-고」，表示轉述聽來的消息。' }
          ]
        },
        pronunciation: {
          actualSound: '[전해 드러써 네 여펜 아직 그 사라미 읻따고]',
          singingTips: '「들었어」要唱成 [드러써]，句尾稍微下沉帶出失落；「있다고」的 [읻따고] 中 ㄸ 要有輕輕的頓點，像把話嚥回去。',
          rules: [
            {
              title: '連音化規則 (연음화)',
              badge: '收音音變',
              detail: '「들었어」→ [드러써]、「옆엔」→ [여펜]、「사람이」→ [사라미]，收音遇到母音都會移到下一音節。'
            },
            {
              title: '終聲法則 + 硬音化 (경음화)',
              badge: '發音重點',
              detail: '「있다」的 ㅆ 收音先讀成 [ㄷ]，後面的「ㄷ」受影響變成硬音 [ㄸ]，所以「있다고」讀作 [읻따고]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '平語 (반말)',
              badge: '歌詞原型',
              form: '전해 들었어. 네 옆엔 아직 그 사람이 있다고.',
              scene: '對舊情人或親近朋友坦白說自己聽說了什麼'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '전해 들었어요. 옆에 아직 그분이 계시다고요.',
              scene: '對較不熟的人轉述自己聽來的消息'
            },
            {
              name: '正式體 (하십시오體)',
              badge: '最高敬意',
              form: '전해 들었습니다. 곁에 아직 그분이 계시다고 합니다.',
              scene: '正式場合轉達聽聞的消息'
            }
          ],
          realLifeExample: {
            scenario: '朋友之間確認從共同好友那裡聽來的消息',
            dialogue: [
              { speaker: '你 (You)', text: '전해 들었어. 너 이번에 합격했다고!', trans: '我聽說了，你這次考上了！' },
              { speaker: '朋友', text: '와, 벌써 소문났네!', trans: '哇，消息這麼快就傳開了！' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-kr-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:23',
      timeSec: 83.2,
      korean: '겨울을 덮어준 너의 봄',
      text: '겨울을 덮어준 너의 봄',
      romanization: 'gyeo-ul-eul deop-eo-jun neo-ui bom',
      naturalTranslation: '覆蓋了我寒冬的，是你的春天。',
      pillChips: [
        {
          id: 'dsp10',
          text: '겨울',
          rom: 'gyeo-ul',
          type: 'noun',
          typeLabel: '名詞 (冬天)',
          lemma: '겨울',
          meaning: '冬天 / 寒冬',
          explanation: '在歌詞中象徵孤單與寒冷的處境，與下一個字「봄 (春天)」形成強烈對比。'
        },
        {
          id: 'dsp11',
          text: '덮어준',
          rom: 'deop-eo-jun',
          type: 'verb-modifier',
          typeLabel: '受惠動詞 + 過去式定語',
          lemma: '덮어주다',
          meaning: '（為我）蓋上 / 替我覆蓋',
          explanation: '「덮다 (蓋)」+「-어 주다 (為對方做)」，表示對方為自己做了這個動作，再加 -ㄴ 修飾「봄」。'
        },
        {
          id: 'dsp12',
          text: '너의 봄',
          rom: 'neo-ui bom',
          type: 'metaphor',
          typeLabel: '名詞隱喻 (你的春天)',
          lemma: '너의 + 봄',
          meaning: '你是我的春天',
          explanation: '把「你」比喻成春天，說明你的溫暖融化了我的寒冬，是全曲最有畫面感的一句。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '受詞 (겨울을) + 受惠動詞過去式定語 (덮어준) + 所有格 (너의) + 被修飾名詞 (봄)',
          tokens: [
            { term: '겨울을', role: '受詞', desc: '「겨울」加受格助詞「을」，是「덮어주다」的對象。' },
            { term: '덮어준', role: '定語 (過去式)', desc: '덮어주다 詞幹 + -ㄴ，修飾後面的「봄」。' },
            { term: '너의', role: '所有格', desc: '「너」+「의」，表示「你的」。' },
            { term: '봄', role: '被修飾名詞', desc: '整句的核心，是前面一長串修飾語要說明的對象。' }
          ]
        },
        pronunciation: {
          actualSound: '[겨우를 더퍼준 너에 봄]',
          singingTips: '「겨울을」[겨우를] 要唱得綿長帶一點冷意，「너의 봄」的「봄」用溫暖飽滿的胸腔音收尾，形成冬與春的聲音對比。',
          rules: [
            {
              title: '連音化規則 (연음화)',
              badge: '收音音變',
              detail: '「겨울을」→ [겨우를]、「덮어준」→ [더퍼준]，收音 ㄹ、ㅍ 遇母音移到後一音節。'
            },
            {
              title: '所有格「의」的發音',
              badge: '發音重點',
              detail: '助詞「의」表示所有格時，口語與歌唱中常讀作 [에]，所以「너의」常唱成 [너에]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '平語 (반말)',
              badge: '歌詞原型',
              form: '내 겨울을 덮어준 너의 봄.',
              scene: '對親近的人表達感激或懷念'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '제 겨울을 덮어 준 당신의 봄이었어요.',
              scene: '向曾經幫助過自己的人表達感謝'
            },
            {
              name: '正式體 (하십시오體)',
              badge: '最高敬意',
              form: '저의 겨울을 따뜻하게 감싸 주신 당신의 봄이었습니다.',
              scene: '感謝信或致詞中向恩人表達謝意'
            }
          ],
          realLifeExample: {
            scenario: '在畢業卡片上感謝一路陪伴的人',
            dialogue: [
              { speaker: '朋友', text: '졸업 축하해. 그동안 고마웠어.', trans: '畢業快樂，這段時間謝謝你。' },
              { speaker: '你 (You)', text: '내 힘든 겨울을 덮어준 너의 봄 같은 친구였어.', trans: '你就像是覆蓋我艱難寒冬的春天一樣的朋友。' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-kr-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:37',
      timeSec: 97.1,
      korean: '결국 비는 내리고 난 우산이 없네',
      text: '결국 비는 내리고 난 우산이 없네',
      romanization: 'gyeol-guk bi-neun nae-ri-go nan u-san-i eop-ne',
      naturalTranslation: '到頭來，雨還是下了，而我卻沒有雨傘。',
      pillChips: [
        {
          id: 'dsp13',
          text: '결국',
          rom: 'gyeol-guk',
          type: 'adverb',
          typeLabel: '副詞 (結果/終究)',
          lemma: '결국',
          meaning: '到頭來 / 最終',
          explanation: '漢字詞「結局」，表示經過一連串過程後得到（通常不如意的）結果。'
        },
        {
          id: 'dsp14',
          text: '내리고',
          rom: 'nae-ri-go',
          type: 'verb',
          typeLabel: '連接語尾 (-고)',
          lemma: '내리다',
          meaning: '下（雨）/ 落下',
          explanation: '「내리다」搭配「비」表示下雨，「-고」連接兩個並列的句子：雨下了，而且我沒有傘。'
        },
        {
          id: 'dsp15',
          text: '없네',
          rom: 'eop-ne',
          type: 'ending',
          typeLabel: '感嘆語尾 (-네)',
          lemma: '없다 + -네',
          meaning: '（原來）沒有啊',
          explanation: '「-네」表示說話者剛剛發現或意識到某件事，帶著一點自嘲或感嘆，非常適合這句淡淡的失落。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '副詞 (결국) + 主題 (비는) + 動詞 (내리고，並列連接) + 話題縮約 (난) + 主語 (우산이) + 形容詞感嘆句尾 (없네)',
          tokens: [
            { term: '결국', role: '副詞', desc: '點出事情走到這個結局。' },
            { term: '비는', role: '主題', desc: '「는」把「雨」作為話題，暗示「雨終究還是來了」。' },
            { term: '내리고', role: '並列連接', desc: '用 -고 連接兩件同時成立的事實。' },
            { term: '난', role: '話題縮約', desc: '「나는」的縮約，把視角轉回「我」。' },
            { term: '우산이 없네', role: '主語 + 感嘆句尾', desc: '「없다」搭配「-네」，表達發現自己沒帶傘的失落。' }
          ]
        },
        pronunciation: {
          actualSound: '[결국 비는 내리고 난 우사니 엄네]',
          singingTips: '「없네」要唱成 [엄네]，ㅁ 的閉唇音讓句子在鼻腔裡收住，像一聲輕輕的嘆息；「내리고」的 ㄹ 用舌尖輕彈即可。',
          rules: [
            {
              title: '鼻音化規則 (비음화)',
              badge: '收音音變',
              detail: '「없네」的收音「ㅄ」先讀成 [ㅂ]，遇到後面的 ㄴ，ㅂ 被同化為 [ㅁ]，所以讀作 [엄네]。'
            },
            {
              title: '連音化規則 (연음화)',
              badge: '收音音變',
              detail: '「우산이」的收音 ㄴ 遇到母音 ㅣ，讀作 [우사니]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '平語 (반말)',
              badge: '歌詞原型',
              form: '결국 비는 내리고 난 우산이 없네.',
              scene: '自言自語或對親近的人感嘆時運不濟'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '결국 비가 오는데 우산이 없네요.',
              scene: '向同事或朋友自嘲忘了帶傘'
            },
            {
              name: '正式體 (하십시오體)',
              badge: '最高敬意',
              form: '결국 비가 내리는데 우산이 없습니다.',
              scene: '正式場合陳述沒有準備雨具的狀況'
            }
          ],
          realLifeExample: {
            scenario: '下班時突然下起大雨，卻沒有帶傘',
            dialogue: [
              { speaker: '同事', text: '어? 비 온다. 우산 안 가져왔어요?', trans: '咦？下雨了。你沒帶傘嗎？' },
              { speaker: '你 (You)', text: '결국 비는 내리고 난 우산이 없네요.', trans: '雨終究還是下了，而我偏偏沒有傘。' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-kr-6',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:39',
      timeSec: 99.3,
      korean: '찬란했던 계절 속에 빛은 어디로',
      text: '찬란했던 계절 속에 빛은 어디로',
      romanization: 'chal-lan-haet-deon gye-jeol sok-e bit-eun eo-di-ro',
      naturalTranslation: '在那曾經燦爛的季節裡，光芒究竟去了哪裡？',
      pillChips: [
        {
          id: 'dsp16',
          text: '찬란했던',
          rom: 'chal-lan-haet-deon',
          type: 'verb-modifier',
          typeLabel: '回想式過去定語 (-았/었던)',
          lemma: '찬란하다',
          meaning: '（曾經）燦爛輝煌的',
          explanation: '「찬란하다 (燦爛)」加 -았/었던，表示「過去持續過、現在已不再」的狀態，帶有懷念與惋惜。'
        },
        {
          id: 'dsp17',
          text: '계절 속',
          rom: 'gye-jeol sok',
          type: 'noun',
          typeLabel: '名詞片語 (季節之中)',
          lemma: '계절 + 속',
          meaning: '在那個季節裡',
          explanation: '「속」意為「裡面、內部」，常用來描述被某種時光或情感包圍的狀態。'
        },
        {
          id: 'dsp18',
          text: '어디로',
          rom: 'eo-di-ro',
          type: 'particle',
          typeLabel: '疑問詞 + 方向助詞',
          lemma: '어디 + 로',
          meaning: '往哪裡去',
          explanation: '「어디」(哪裡) 加方向助詞「로」，原句省略了「갔을까」，留下沒有說完的餘韻。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '回想式定語 (찬란했던) + 名詞片語 (계절 속에) + 主題 (빛은) + 疑問方向詞 (어디로)，句尾動詞省略。',
          tokens: [
            { term: '찬란했던', role: '回想式定語', desc: '찬란하다 + -았/었던，修飾後面的「계절」。' },
            { term: '계절 속에', role: '處所補語', desc: '「속」加「에」，表示「在……之中」。' },
            { term: '빛은', role: '主題', desc: '「빛」加「은」，作為被追問的對象。' },
            { term: '어디로', role: '疑問方向詞', desc: '省略「갔을까」，用未完的句子營造失落感。' }
          ]
        },
        pronunciation: {
          actualSound: '[찰란핻떤 계절 소게 비츤 어디로]',
          singingTips: '「찬란했던」的 [찰란핻떤] 唱得飽滿明亮，反襯後面「어디로」的低落；「빛은」[비츤] 連音要輕。',
          rules: [
            {
              title: '流音化規則 (유음화)',
              badge: '收音音變',
              detail: '「찬란」的 ㄴ 遇到後面的 ㄹ，被同化為 [ㄹ]，讀作 [찰란]。'
            },
            {
              title: '終聲法則 + 硬音化 (경음화)',
              badge: '發音重點',
              detail: '「했던」的 ㅆ 收音讀成 [ㄷ]，後面的 ㄷ 變為硬音 [ㄸ]，所以讀作 [핻떤]。'
            },
            {
              title: '連音化規則 (연음화)',
              badge: '收音音變',
              detail: '「속에」→ [소게]、「빛은」→ [비츤]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '平語 (반말)',
              badge: '歌詞原型',
              form: '찬란했던 계절 속에 빛은 어디로 갔어?',
              scene: '對回憶或親近的人感嘆過去美好不再'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '그 찬란했던 시절의 빛은 어디로 갔을까요?',
              scene: '與朋友聊起懷念的青春時光'
            },
            {
              name: '正式體 (하십시오體)',
              badge: '最高敬意',
              form: '찬란했던 시절의 빛은 어디로 사라졌습니까?',
              scene: '正式文章或演說中感嘆時光流逝'
            }
          ],
          realLifeExample: {
            scenario: '翻看大學時期的舊照片，與老友感慨',
            dialogue: [
              { speaker: '朋友', text: '이 사진 봐, 우리 진짜 어렸다.', trans: '你看這張照片，我們那時候真年輕。' },
              { speaker: '你 (You)', text: '그러게. 찬란했던 그 시절의 빛은 어디로 갔을까?', trans: '就是啊，那段燦爛時光的光芒到哪去了呢？' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 🇺🇸 英語歌詞研習句目 (English Study Sentences)
    // =========================================================================
    {
      id: 'ds-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:30',
      timeSec: 30.7,
      korean: 'All of the memories, All of the moments, Come rushing back',
      text: 'All of the memories, All of the moments, Come rushing back',
      romanization: '/ɔːl əv ðə ˈmɛməriz ɔːl əv ðə ˈmoʊmənts kʌm ˈrʌʃɪŋ bæk/',
      naturalTranslation: '所有的回憶、每一個瞬間，全都一股腦湧上心頭。',
      pillChips: [
        {
          id: 'dsp19',
          text: 'All of the',
          rom: '/ɔːl əv ðə/',
          type: 'quantifier',
          typeLabel: '數量詞排比 (全部的)',
          lemma: 'all of the + noun',
          meaning: '所有的……',
          explanation: '兩次重複「All of the」形成排比，強調回憶多到無法逐一細數。'
        },
        {
          id: 'dsp20',
          text: 'come rushing back',
          rom: '/kʌm ˈrʌʃɪŋ bæk/',
          type: 'phrasal-idiom',
          typeLabel: '動詞片語 (湧上心頭)',
          lemma: 'come rushing back',
          meaning: '（回憶）瞬間湧回',
          explanation: '「rush」表示急速沖來，「come + V-ing」描寫動作進行中的畫面，常用來形容記憶或情緒猛然襲來。'
        },
        {
          id: 'dsp21',
          text: 'memories / moments',
          rom: '/ˈmɛməriz/ /ˈmoʊmənts/',
          type: 'alliteration',
          typeLabel: '頭韻 (m 音重複)',
          lemma: 'memory / moment',
          meaning: '回憶 / 片刻',
          explanation: '兩個名詞都以 /m/ 開頭，形成柔和的頭韻，唱起來有如回憶一波波拍岸。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '排比主語 (All of the memories, All of the moments) + 動詞片語 (come rushing back)',
          tokens: [
            { term: 'All of the memories', role: '主語 1', desc: '第一個主語，泛指所有回憶。' },
            { term: 'All of the moments', role: '主語 2', desc: '與第一個主語並列，語意遞進。' },
            { term: 'come rushing back', role: '謂語', desc: '「come」搭配現在分詞，描寫動作進行的畫面。' }
          ]
        },
        pronunciation: {
          actualSound: '[ɔːl əv ðə ˈmɛməriz ɔːl əv ðə ˈmoʊmənts kʌm ˈrʌʃɪŋ bæk]',
          singingTips: '「of the」弱讀成 [əv ðə]，把重音留給 memories 與 moments；「rushing」的 /ʃ/ 氣音拉長，營造回憶湧來的感覺。',
          rules: [
            {
              title: '弱讀 (Weak Form)',
              badge: '節奏重點',
              detail: '功能詞 of、the 在歌曲中不重讀，會縮成 [əv ðə]，使重音落在內容詞上。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '口語自白 (Casual)',
              badge: '歌詞原型',
              form: 'All those memories just come rushing back.',
              scene: '與朋友聊起舊時光時脫口而出'
            },
            {
              name: '生活常用 (Everyday)',
              badge: '生活推薦',
              form: 'Looking at this photo, everything came flooding back.',
              scene: '看到舊照片時向家人分享感受'
            },
            {
              name: '正式書面 (Formal)',
              badge: '最高敬意',
              form: 'The memories of that period returned to me vividly.',
              scene: '書信或回憶錄中的正式表達'
            }
          ],
          realLifeExample: {
            scenario: '回到老家，看到小時候的房間',
            dialogue: [
              { speaker: 'Mom', text: 'Your room looks the same as before.', trans: '你的房間跟以前一模一樣。' },
              { speaker: 'You', text: 'Yeah, all of the memories come rushing back.', trans: '是啊，所有回憶都湧上心頭。' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:45',
      timeSec: 45.2,
      korean: 'I see it in your eyes, That you need me by your side',
      text: 'I see it in your eyes, That you need me by your side',
      romanization: '/aɪ siː ɪt ɪn jʊr aɪz ðæt juː niːd miː baɪ jʊr saɪd/',
      naturalTranslation: '我從你的眼神裡看得出來，你需要我陪在你身邊。',
      pillChips: [
        {
          id: 'dsp22',
          text: 'see it in your eyes',
          rom: '/siː ɪt ɪn jʊr aɪz/',
          type: 'idiom',
          typeLabel: '慣用表達 (從眼神看出)',
          lemma: 'see it in someone\'s eyes',
          meaning: '從某人眼神中看穿心思',
          explanation: '這裡的「see」是「看出、察覺」，並非單純用眼睛看，表示對方沒說出口的情緒藏在眼神裡。'
        },
        {
          id: 'dsp23',
          text: 'that you need me',
          rom: '/ðæt juː niːd miː/',
          type: 'noun-clause',
          typeLabel: '同位語子句 (that 子句)',
          lemma: 'that + clause',
          meaning: '（看出）你需要我',
          explanation: '「it」是預先代指，真正的內容由後面的 that 子句補充，是英文「虛指 it + that 子句」的典型寫法。'
        },
        {
          id: 'dsp24',
          text: 'by your side',
          rom: '/baɪ jʊr saɪd/',
          type: 'phrase',
          typeLabel: '介詞片語 (在你身旁)',
          lemma: 'by someone\'s side',
          meaning: '陪伴在身邊',
          explanation: '不僅是物理距離，更暗示情感上的支持與陪伴，常見於愛情與友情的歌詞。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主語 + 動詞 + 虛指 it (I see it) + 地點狀語 (in your eyes) + 同位語子句 (that you need me by your side)',
          tokens: [
            { term: 'I see it', role: '主句', desc: '「it」先佔位，內容留給後面的 that 子句。' },
            { term: 'in your eyes', role: '地點狀語', desc: '說明從哪裡看出來。' },
            { term: 'that you need me', role: '同位語子句', desc: '補充說明「it」到底是什麼。' },
            { term: 'by your side', role: '介詞片語', desc: '補充說明「需要我」的方式與位置。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪ siː ɪt ɪn jʊr aɪz ðæt juː niːd miː baɪ jʊr saɪd]',
          singingTips: '重音在 see、eyes、need、side；「in your」連在一起略輕，帶著坦白又克制的語氣，避免唱得太用力。',
          rules: [
            {
              title: '連音 (Linking)',
              badge: '節奏重點',
              detail: '「see it」與「in your」中，前一字結尾與後一字開頭母音相連，讀來像 [siːɪt]、[ɪnjʊr]，讓旋律更流暢。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '口語自白 (Casual)',
              badge: '歌詞原型',
              form: 'I can see it in your eyes that you need me.',
              scene: '對親近的人說出你看穿的心思'
            },
            {
              name: '生活常用 (Everyday)',
              badge: '生活推薦',
              form: 'I can tell you\'re not okay. I\'m here if you need me.',
              scene: '察覺朋友情緒低落時的關心'
            },
            {
              name: '正式書面 (Formal)',
              badge: '最高敬意',
              form: 'I sense that you may require my support.',
              scene: '正式場合表達願意提供協助'
            }
          ],
          realLifeExample: {
            scenario: '朋友嘴上說沒事，卻明顯心情不好',
            dialogue: [
              { speaker: 'Friend', text: 'I\'m fine, really.', trans: '我沒事，真的。' },
              { speaker: 'You', text: 'I see it in your eyes. You need someone by your side.', trans: '我從你的眼神就看得出來，你需要有人陪在身邊。' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:49',
      timeSec: 49.8,
      korean: 'And I can\'t walk away, Cause love ain\'t supposed to be a riddle',
      text: 'And I can\'t walk away, Cause love ain\'t supposed to be a riddle',
      romanization: '/ænd aɪ kænt wɔːk əˈweɪ kəz lʌv eɪnt səˈpoʊzd tə bi ə ˈrɪdl/',
      naturalTranslation: '我無法就這樣轉身離開，因為愛本來就不該像個謎題。',
      pillChips: [
        {
          id: 'dsp25',
          text: 'walk away',
          rom: '/wɔːk əˈweɪ/',
          type: 'phrasal-verb',
          typeLabel: '片語動詞 (轉身離去)',
          lemma: 'walk away',
          meaning: '走開 / 抽身離去',
          explanation: '除了字面上的走開，也常指從感情或問題中抽身而退；搭配 can\'t 表示「做不到」。'
        },
        {
          id: 'dsp26',
          text: 'ain\'t supposed to',
          rom: '/eɪnt səˈpoʊzd tə/',
          type: 'slang',
          typeLabel: '口語縮約 (不應該)',
          lemma: 'isn\'t supposed to',
          meaning: '本來就不該……',
          explanation: '「ain\'t」是非正式的「isn\'t / aren\'t」，流行歌常用；「be supposed to」表示按理應該如何的期待。'
        },
        {
          id: 'dsp27',
          text: 'riddle',
          rom: '/ˈrɪdl/',
          type: 'metaphor',
          typeLabel: '隱喻名詞 (謎題)',
          lemma: 'riddle',
          meaning: '謎語 / 難解之謎',
          explanation: '把愛比喻成謎題，表示感情應該是坦率清楚的，而不是互相猜測的遊戲。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '連接詞 And + 能力否定句 (I can\'t walk away) + 原因連接詞 \'Cause + 主語 + ain\'t supposed to be + 補語 (a riddle)',
          tokens: [
            { term: 'And I can\'t walk away', role: '主句', desc: '用 can\'t 表示無法做到轉身離開。' },
            { term: '\'Cause', role: '連接詞', desc: '「because」的口語縮寫，引出原因。' },
            { term: 'love', role: '主語', desc: '抽象名詞，不加冠詞。' },
            { term: 'ain\'t supposed to be', role: '謂語', desc: '否定的「應當」，語氣口語且帶情緒。' },
            { term: 'a riddle', role: '補語', desc: '用名詞隱喻形容愛情的模樣。' }
          ]
        },
        pronunciation: {
          actualSound: '[ænd aɪ kænt wɔːk əˈweɪ kəz lʌv eɪnt səˈpoʊzd tə bi ə ˈrɪdl]',
          singingTips: '「supposed to」中的 to 弱讀成 [tə]，快速帶過；「riddle」的 /dl/ 收尾輕巧，像把疑問留在空氣裡。',
          rules: [
            {
              title: '縮約與弱讀 (Contractions & Weak Forms)',
              badge: '口語重點',
              detail: '\'Cause 讀 [kəz]、ain\'t 讀 [eɪnt]、to 弱讀為 [tə]，這些都是流行歌曲中最常聽到的口語節奏。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '口語自白 (Casual)',
              badge: '歌詞原型',
              form: 'I can\'t walk away \'cause love ain\'t supposed to be a riddle.',
              scene: '向好友傾訴自己放不下一段感情'
            },
            {
              name: '生活常用 (Everyday)',
              badge: '生活推薦',
              form: 'I can\'t just leave. Love shouldn\'t be so confusing.',
              scene: '與朋友討論感情中的困惑'
            },
            {
              name: '正式書面 (Formal)',
              badge: '最高敬意',
              form: 'I am unable to leave, as love ought not to be a puzzle.',
              scene: '書面表達或文學化的寫法'
            }
          ],
          realLifeExample: {
            scenario: '向朋友傾訴一段曖昧不清的感情',
            dialogue: [
              { speaker: 'Friend', text: 'Why don\'t you just walk away?', trans: '你為什麼不乾脆走開？' },
              { speaker: 'You', text: 'I can\'t. Love ain\'t supposed to be a riddle.', trans: '我做不到。愛本來就不該像個謎題。' }
            ]
          }
        }
      }
    },
    {
      id: 'ds-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:00',
      timeSec: 61.0,
      korean: 'Baby you deserve better, I could love you til the end of time',
      text: 'Baby you deserve better, I could love you til the end of time',
      romanization: '/ˈbeɪbi juː dɪˈzɜːrv ˈbɛtər aɪ kʊd lʌv juː tɪl ði ɛnd əv taɪm/',
      naturalTranslation: '寶貝，你值得更好的；我可以愛你直到時間的盡頭。',
      pillChips: [
        {
          id: 'dsp28',
          text: 'deserve better',
          rom: '/dɪˈzɜːrv ˈbɛtər/',
          type: 'collocation',
          typeLabel: '動詞 + 比較級名詞化 (值得更好)',
          lemma: 'deserve better',
          meaning: '你值得更好的對待 / 更好的人',
          explanation: '「better」在這裡當名詞用，指「更好的人或對待」。這句既是祝福也是自己放手的理由，是全曲的核心句。'
        },
        {
          id: 'dsp29',
          text: 'could love',
          rom: '/kʊd lʌv/',
          type: 'modal',
          typeLabel: '情態動詞 (有能力愛 / 假設語氣)',
          lemma: 'could + verb',
          meaning: '我本來可以 / 我願意去愛',
          explanation: '「could」表示能力或假設，語氣比「will」更溫柔含蓄，暗含「如果你願意的話」的意思。'
        },
        {
          id: 'dsp30',
          text: 'til the end of time',
          rom: '/tɪl ði ɛnd əv taɪm/',
          type: 'idiom',
          typeLabel: '成語 (直到永遠)',
          lemma: 'till the end of time',
          meaning: '直到時間盡頭 / 永遠',
          explanation: '「til」是「until / till」的縮寫，「the end of time」是誇張的永恆修辭，常見於情歌。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '呼語 (Baby) + 主句 (you deserve better) + 情態動詞句 (I could love you) + 時間狀語 (til the end of time)',
          tokens: [
            { term: 'Baby', role: '呼語', desc: '對戀人的親暱稱呼。' },
            { term: 'you deserve better', role: '主句', desc: '「deserve」後面直接接名詞化的 better。' },
            { term: 'I could love you', role: '情態動詞句', desc: '「could」表示有能力、也帶假設意味。' },
            { term: 'til the end of time', role: '時間狀語', desc: '說明愛的持續時間，強調永恆。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˈbeɪbi juː dɪˈzɜːrv ˈbɛtər aɪ kʊd lʌv juː tɪl ði ɛnd əv taɪm]',
          singingTips: '副歌的重音落在 deserve 與 better，「better」尾音 /ər/ 帶著氣音延長；「end of time」要唱得開闊，像把愛拉到很遠的地方。',
          rules: [
            {
              title: '連音 (Linking)',
              badge: '節奏重點',
              detail: '「end of」連成 [ɛndəv]，「til the end」中的 the 在母音前讀 [ði]，使句子更流暢。'
            },
            {
              title: '尾音弱化 (Final /t/ & /d/ Softening)',
              badge: '發音重點',
              detail: '「could」「end」結尾的 /d/ 在連續唱時會被輕輕帶過，不需完全爆破。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '口語自白 (Casual)',
              badge: '歌詞原型',
              form: 'You deserve better. I could love you forever.',
              scene: '對戀人說出放手前的最後告白'
            },
            {
              name: '生活常用 (Everyday)',
              badge: '生活推薦',
              form: 'You deserve someone who treats you right.',
              scene: '鼓勵朋友不要委屈自己，值得更好的對象'
            },
            {
              name: '正式書面 (Formal)',
              badge: '最高敬意',
              form: 'You deserve a better outcome than this.',
              scene: '正式場合表達你值得更好的結果'
            }
          ],
          realLifeExample: {
            scenario: '安慰一位在感情裡一直受委屈的朋友',
            dialogue: [
              { speaker: 'Friend', text: 'Maybe I\'m asking for too much.', trans: '也許是我要求太多了。' },
              { speaker: 'You', text: 'No. You deserve better.', trans: '不會的，你值得更好的。' }
            ]
          }
        }
      }
    }
  ]
};
