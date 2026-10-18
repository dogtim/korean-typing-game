// BABYMONSTER - 《WE GO UP》 韓英雙語歌詞深度研習資料包
// 支援：
// 1. 韓語 (Korean) 核心歌詞句精讀 (詞幹助詞拆解、羅馬拼音、發音音變、敬語日常)
// 2. 英語 (English) 經典嘻哈歌詞精讀 (街頭俚語、慣用語成語、AAVE文法、連音弱讀Flow、正式語域對比)
// 3. 膠囊化單字分塊 (Interactive Pill Chips) + 三層研習抽屜數據

export const WE_GO_UP_STUDY_DATA = {
  id: 'we-go-up',
  title: 'WE GO UP',
  artist: 'BABYMONSTER',
  year: '2025',
  youtubeId: 'wlHwjkYpSr0', // Primary YouTube MV ID in presets (also supports 39J8a2OgRGQ)
  altYoutubeIds: ['39J8a2OgRGQ', '3yXQ3sN2Y6k', 'x4b_9YdhT8M'],
  sentences: [
    // =========================================================================
    // 🇰🇷 韓語歌詞研習句目 (Korean Study Sentences: 1 - 8)
    // =========================================================================
    {
      id: 'wgu-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:30',
      timeSec: 30.3,
      korean: '우리 걱정은 딱히 넣어둬 빨리',
      text: '우리 걱정은 딱히 넣어둬 빨리',
      romanization: 'u-ri geok-jeong-eun ttak-hi neo-eo-dwo ppal-li',
      naturalTranslation: '我們的事你少操心，快把你的擔心收起來吧！',
      pillChips: [
        {
          id: 'p1',
          text: '우리',
          rom: 'u-ri',
          type: 'pronoun',
          typeLabel: '代名詞',
          lemma: '우리',
          meaning: '我們（平語/非謙稱）',
          explanation: '第一人稱代名詞。在敬語情境下通常會謙稱替換為「저희」。'
        },
        {
          id: 'p2',
          text: '걱정은',
          rom: 'geok-jeong-eun',
          type: 'noun-particle',
          typeLabel: '名詞 + 助詞',
          lemma: '걱정 + 은',
          meaning: '至於擔心嘛…',
          explanation: '名詞「걱정（擔心、顧慮）」加上主題助詞「-은」，用於對比或強調主題（「至於我們的事情…」）。'
        },
        {
          id: 'p3',
          text: '딱히',
          rom: 'ttak-hi',
          type: 'adverb',
          typeLabel: '副詞',
          lemma: '딱히',
          meaning: '犯不著 / 倒也沒特別',
          explanation: '副詞，原意為明確地。口語中常用於否定語境，表示「倒也沒特別…」、「犯不著…」。注意激音化實際讀作 [따키]！'
        },
        {
          id: 'p4',
          text: '넣어둬',
          rom: 'neo-eo-dwo',
          type: 'verb-compound',
          typeLabel: '複合動詞祈使',
          lemma: '넣다 + -어 두다',
          meaning: '收起來放著吧',
          explanation: '由動詞「넣다（放進去）」+ 輔助動詞文法「-어/아 두다（放置/維持狀態）」縮寫而成。「걱정을 넣어두다」口語就是別瞎操心。'
        },
        {
          id: 'p5',
          text: '빨리',
          rom: 'ppal-li',
          type: 'adverb',
          typeLabel: '副詞',
          lemma: '빨리',
          meaning: '快點 / 趕緊',
          explanation: '修飾動詞的副詞形態。注意不要與形容詞原型「빠르다（快的）」搞混。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '代名詞 + 名詞 + 主題助詞 + 副詞 + 複合動詞祈使句 + 狀態副詞',
          tokens: [
            { term: '우리', role: '主格代名詞', desc: '第一人稱「我們」平語形式。敬語對照為「저희」。' },
            { term: '걱정', role: '名詞', desc: '擔心、憂慮。' },
            { term: '-은', role: '主題助詞', desc: '接在有收音的名詞後，用以突顯說話話題或對比。' },
            { term: '딱히', role: '副詞', desc: '用於否定語境，「倒也沒特別…」、「犯不著」。' },
            { term: '넣어둬', role: '動詞片語', desc: '넣다(放) + -어 두다(存著) + 非敬語語尾 -어。慣用「收起來別提」。' },
            { term: '빨리', role: '副詞', desc: '修飾動詞表示迅速、儘快。' }
          ]
        },
        pronunciation: {
          actualSound: '[우리 걱쩡은 따키 너어둬 빨릴]',
          singingTips: '此句為節奏強烈的自信反擊！注意「딱히」發音要清脆俐落，不要唸成帶氣濁音。',
          rules: [
            {
              title: '平音緊音化 (경음화)',
              badge: '緊音化',
              detail: '「걱정」中收音 ㄱ [k] 促使後方平音 ㅈ [tɕ] 發生緊音化，發成濃音 [걱쩡]。'
            },
            {
              title: '激音化 / 子音縮約 (격음화)',
              badge: '激音化',
              detail: '「딱히」中收音 ㄱ 遇上子音 ㅎ，結合為送氣激音 ㅋ [kʰ]，實讀 [따키]，不可拆成 [딱-히]。'
            },
            {
              title: 'ㅎ 脫落無聲化與連音',
              badge: '母音連音',
              detail: '「넣어」中的 ㅎ 遇到母音 어 時弱化脫落，聽感流暢如 [너어]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '우리 걱정은 딱히 넣어둬 빨리',
              scene: '朋友、平輩、對質狂妄之徒時的霸氣回嗆'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '저희 걱정은 딱히 넣어두세요 빨리. (或 저희 걱정은 안 하셔도 돼요)',
              scene: '面對前輩、客人、長輩時的禮貌回覆'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '저희 걱정은 딱히 넣어두십시오. / 저희 염려는 하지 마십시오.',
              scene: '公司正式商務簡報、官方公告或電視專訪'
            }
          ],
          realLifeExample: {
            scenario: '面對朋友過度擔心的貼心安慰與自信展現',
            dialogue: [
              { speaker: 'A', text: '너 내일 발표 괜찮아? 너무 떨리지 않아?', trans: '你明天發表演講還好嗎？會不會太緊張？' },
              { speaker: 'B', text: '내 걱정은 넣어둬! 완벽하게 준비했거든.', trans: '少替我瞎操心啦！我準備得可完美了呢。' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:46',
      timeSec: 45.9,
      korean: '어림없거든',
      text: '어림없거든',
      romanization: 'eo-rim-eop-geo-deun',
      naturalTranslation: '門都沒有！休想！差得遠呢！',
      pillChips: [
        {
          id: 'p1',
          text: '어림',
          rom: 'eo-rim',
          type: 'noun',
          typeLabel: '名詞',
          lemma: '어림',
          meaning: '估計 / 推量',
          explanation: '名詞，指大約的度量、推測。'
        },
        {
          id: 'p2',
          text: '없-',
          rom: 'eop-',
          type: 'adjective-stem',
          typeLabel: '形容詞詞幹',
          lemma: '없다',
          meaning: '沒有 / 不存在',
          explanation: '形容詞詞幹。合成詞「어림없다」意指「連邊都沾不上、休想、門都沒有」。'
        },
        {
          id: 'p3',
          text: '-거든',
          rom: 'geo-deun',
          type: 'ending',
          typeLabel: '終結語尾',
          lemma: '-거든',
          meaning: '要知道…才不可能呢！',
          explanation: '終結語尾。在口語中帶有強烈告知事實、傲嬌、反駁或賭氣色彩。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '合成形容詞詞幹 (어림없다) + 說明/反駁終結語尾 (-거든)',
          tokens: [
            { term: '어림', role: '名詞', desc: '估算、推度。' },
            { term: '없다', role: '形容詞', desc: '沒有、不存在。合起來成固定形容詞「어림없다（沒門）」。' },
            { term: '-거든', role: '語尾', desc: '口語語尾，帶有反駁「要知道事實才不是這樣呢」的語氣。' }
          ]
        },
        pronunciation: {
          actualSound: '[어리멉꺼든]',
          singingTips: '收音 ㅁ 連音移到後方，雙收音 ㅄ 簡化並促使 ㄱ 緊音化，發音俐落短促。',
          rules: [
            {
              title: '連音規則 (연음화)',
              badge: '連音',
              detail: '「어림」的收音 ㅁ 連音到後方母音 어，成為 [어리멉...]。'
            },
            {
              title: '雙收音簡化與緊音化 (자음군단순화 & 경음화)',
              badge: '雙收音+緊音',
              detail: '「없」底部雙收音 ㅄ 發代表音 ㅂ，其後的 ㄱ 緊音化為濃音 ㄲ，合為乾脆的 [업꺼든]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '어림없거든',
              scene: '朋友想搶你心愛零食、對手試圖挑戰你的高光時刻'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '어림없거든요.',
              scene: '略帶俏皮或堅定地告訴長輩或同事這件事絕無可能'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '어림없습니다. / 가당치 않습니다.',
              scene: '正式商談或答辯中嚴詞否認不實指控'
            }
          ],
          realLifeExample: {
            scenario: '朋友想跟你打賭自己能一口氣贏你，你自信反嗆',
            dialogue: [
              { speaker: '朋友', text: '내가 이번 판 너 이길 수 있을 것 같은데?', trans: '我覺得這把遊戲我能贏你耶？' },
              { speaker: '你', text: '어림없거든! 내 실력 아직 안 죽었어.', trans: '門都沒有！我的實力可還沒生鏽呢。' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:47',
      timeSec: 47.2,
      korean: '어이없거든',
      text: '어이없거든',
      romanization: 'eo-i-eop-geo-deun',
      naturalTranslation: '真是傻眼！荒唐至極！太莫名其妙了吧！',
      pillChips: [
        {
          id: 'p1',
          text: '어이',
          rom: 'eo-i',
          type: 'noun',
          typeLabel: '名詞（石磨握柄）',
          lemma: '어이',
          meaning: '握柄 / 頭緒',
          explanation: '古語原指石磨頂端的旋轉木握柄「맷돌 손잡이」。少了握柄就無法轉動，引申為荒唐受阻。'
        },
        {
          id: 'p2',
          text: '없-',
          rom: 'eop-',
          type: 'adjective-stem',
          typeLabel: '形容詞詞幹',
          lemma: '없다',
          meaning: '沒有 / 喪失',
          explanation: '形容詞詞幹。合成詞「어이없다」形容令人哭笑不得、荒謬至極的情形。'
        },
        {
          id: 'p3',
          text: '-거든',
          rom: 'geo-deun',
          type: 'ending',
          typeLabel: '終結語尾',
          lemma: '-거든',
          meaning: '真是太…了！',
          explanation: '表達主觀難以置信、向對方聲明個人情緒反彈。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '合成形容詞詞幹 (어이없다) + 說明/抗議終結語尾 (-거든)',
          tokens: [
            { term: '어이', role: '名詞', desc: '原本指石磨把手，比喻行事的依據或常理。' },
            { term: '없다', role: '形容詞', desc: '無。固定成語「어이없다（無語、傻眼）」。' },
            { term: '-거든', role: '語尾', desc: '強調說話者的當下情緒反擊。' }
          ]
        },
        pronunciation: {
          actualSound: '[어이업꺼든]',
          singingTips: '「어이」唸得輕挑傲然，在「없거든」處瞬間切換為濃音 [업꺼든]，展現 YG 招牌 Girl-Crush 不屑氣質。',
          rules: [
            {
              title: '雙收音 ㅄ 簡化與濃音化',
              badge: '濃音化',
              detail: '收音發 ㅂ，後面的 ㄱ 發生硬性緊音化變 ㄲ，唸作 [업꺼든]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '어이없거든',
              scene: '遇到離譜怪事、荒謬流言時的率直反擊'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '진짜 어이없거든요.',
              scene: '向主管或朋友抱怨碰到的荒唐事'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '매우 황당합니다. / 어처구니없습니다.',
              scene: '正式聲明稿中譴責對手無稽之談'
            }
          ],
          realLifeExample: {
            scenario: '聽到離譜八卦謠言時的反擊',
            dialogue: [
              { speaker: '同事', text: '그 소문 들었어? 네가 프로젝트 망쳤다고 하던데?', trans: '你聽說那個謠言了嗎？有人說是你把專案搞砸的耶？' },
              { speaker: '你', text: '진짜 어이없거든! 내가 다 살려놨는데.', trans: '真是荒唐透頂！明明是我一手救回來的。' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:20',
      timeSec: 140.0,
      korean: '우린 보란듯이',
      text: '우린 보란듯이',
      romanization: 'u-rin bo-ran-deu-si',
      naturalTranslation: '我們會堂堂正正、爭氣地做給全世界看！',
      pillChips: [
        {
          id: 'p1',
          text: '우린',
          rom: 'u-rin',
          type: 'pronoun-particle',
          typeLabel: '代名詞 + 助詞縮寫',
          lemma: '우리 + 는',
          meaning: '我們的話 / 至於我們',
          explanation: '口語縮寫。우리（我們）+ 는（主題助詞）縮為「우린」。'
        },
        {
          id: 'p2',
          text: '보란듯이',
          rom: 'bo-ran-deu-si',
          type: 'idiom-adverb',
          typeLabel: '成語化副詞',
          lemma: '보다 + -(으)라는 듯이',
          meaning: '爭氣地做給人看 / 耀武揚威般地',
          explanation: '由「보라（看吧）+ 하듯（如同…一樣）」縮寫而成，代表充滿志氣地以成果堵住質疑者的嘴。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主詞縮寫 (우린) + 引用態比喻副詞片語 (보란듯이)',
          tokens: [
            { term: '우린', role: '代名詞主題', desc: '우리 + 는 縮合。' },
            { term: '보란듯이', role: '副詞片語', desc: '原形 보다 -> 간접인용 -(으)라는 듯이（彷彿叫人看一樣）。' }
          ]
        },
        pronunciation: {
          actualSound: '[우린 보란드시]',
          singingTips: '「보란듯이」的 으 母音要扁平清晰，結尾 si 清脆有力，展現破土而出的爆發力。',
          rules: [
            {
              title: '間接引用縮約音變',
              badge: '慣用縮讀',
              detail: '보라고 하는 듯이 經年代口語縮成流利的四字成語 [보란듯이]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '우린 보란듯이 해낼 거야',
              scene: '身處逆境時激勵全隊隊友'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '저희는 보란듯이 성공해 보일게요.',
              scene: '向支持你的粉絲或父母許下承諾'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '당당하게 실력으로 증명해 보이겠습니다.',
              scene: '競賽發表宣誓以實力證明一切'
            }
          ],
          realLifeExample: {
            scenario: '面對考驗時與好友立下奮鬥誓約',
            dialogue: [
              { speaker: '朋友', text: '사람들이 우리 무대 기대 안 하는 것 같아...', trans: '大家好像不太看好我們的表演…' },
              { speaker: '你', text: '상관없어. 우린 보란듯이 찢고 오자!', trans: '沒關係，我們就爭氣地做給他們看，把舞台炸裂吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:24',
      timeSec: 144.0,
      korean: '불을 지필 거야',
      text: '불을 지필 거야',
      romanization: 'bu-reul ji-pil geo-ya',
      naturalTranslation: '我們會點燃烈火，引爆全場狂潮！',
      pillChips: [
        {
          id: 'p1',
          text: '불을',
          rom: 'bu-reul',
          type: 'noun-object',
          typeLabel: '名詞 + 受格助詞',
          lemma: '불 + 을',
          meaning: '把火 / 將狂熱火焰',
          explanation: '名詞「불（火）」加上受格助詞「-을」，收音 ㄹ 連音到後方。'
        },
        {
          id: 'p2',
          text: '지필',
          rom: 'ji-pil',
          type: 'verb-future-attr',
          typeLabel: '動詞未來定語',
          lemma: '지피다 + -(으)ㄹ',
          meaning: '點燃、生火的…',
          explanation: '動詞「지피다（生火、煽火）」。在舞台比喻中指點燃無比熱情。'
        },
        {
          id: 'p3',
          text: '거야',
          rom: 'geo-ya',
          type: 'future-ending',
          typeLabel: '未來意志終結',
          lemma: '것 + 이야',
          meaning: '定會去做 / 一定是這樣',
          explanation: '韓語最重要的未來式句型「-(으)ㄹ 것이다」口語平語縮寫，表達無比堅定之個人意志。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞受格 (불을) + 動詞定語 (지필) + 未來依存名詞指定句尾 (거야)',
          tokens: [
            { term: '불', role: '名詞', desc: '火、烈焰。' },
            { term: '-을', role: '受格助詞', desc: '標示被點燃的受詞。' },
            { term: '지피다', role: '及物動詞', desc: '生火、引燃熱情。' },
            { term: '-(으)ㄹ 거야', role: '未來句型', desc: '表示說話者百分之百確信的強大決心。' }
          ]
        },
        pronunciation: {
          actualSound: '[부를 지필 꺼야]',
          singingTips: '收音 ㄹ 連音成 [부를]；冠詞形 ㄹ 後方的 ㄱ 必須強制緊音化為 [꺼야]，不可唸成鬆音！',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '連音',
              detail: '「불」的收音 ㄹ 移至後方初聲，唸為 [부를]。'
            },
            {
              title: '冠詞形 ㄹ 後方濃音化 (된소리)',
              badge: '強制限音',
              detail: '未來型 -(으)ㄹ 後方的 ㄱ, ㄷ, ㅂ, ㅅ, ㅈ 必須濃音化，因此「거야」實讀 [꺼야]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '오늘 무대에 불을 지필 거야',
              scene: '偶像在後台與團員圍圈打氣時的高昂誓言'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '오늘 밤 무대에 불을 지필게요!',
              scene: '演唱會現場對全場歌迷的大聲承諾'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '이 열정에 불을 지필 것입니다.',
              scene: '重大發表宣示燃燒全部熱情'
            }
          ],
          realLifeExample: {
            scenario: '體育比賽決賽前夕教練對球員精神喊話',
            dialogue: [
              { speaker: '隊長', text: '다들 긴장하지 말고 후회 없이 뛰자.', trans: '大家不要緊張，毫無保留地衝吧。' },
              { speaker: '你', text: '맞아, 우리가 먼저 코트에 불을 지필 거야!', trans: '沒錯，就由我們率先在球場點燃狂熱烈火！' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-6',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:27',
      timeSec: 147.0,
      korean: '세상 꼭대기에',
      text: '세상 꼭대기에',
      romanization: 'se-sang kkok-dae-gi-e',
      naturalTranslation: '站在世界之巔，在最高峰之處！',
      pillChips: [
        {
          id: 'p1',
          text: '세상',
          rom: 'se-sang',
          type: 'noun',
          typeLabel: '名詞',
          lemma: '세상',
          meaning: '世界 / 世間',
          explanation: '漢字詞「世上」，指全世界。'
        },
        {
          id: 'p2',
          text: '꼭대기',
          rom: 'kkok-dae-gi',
          type: 'noun',
          typeLabel: '空間頂點名詞',
          lemma: '꼭대기',
          meaning: '頂峰 / 最高點',
          explanation: '純韓語固有詞，指山頂或建物頂端，視覺感極為高聳。'
        },
        {
          id: 'p3',
          text: '-에',
          rom: '-e',
          type: 'particle',
          typeLabel: '位置格助詞',
          lemma: '-에',
          meaning: '在…（處所/方向）',
          explanation: '接在處所後表示靜態存在的處所或目標走向。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞修飾 (세상) + 空間頂點名詞 (꼭대기) + 位置格助詞 (-에)',
          tokens: [
            { term: '세상', role: '名詞', desc: '天下、人間世界。' },
            { term: '꼭대기', role: '固有詞名詞', desc: '山巔、最頂層（漢字詞對應為「정상 頂上」）。' },
            { term: '-에', role: '助詞', desc: '指出目標所處的空間點。' }
          ]
        },
        pronunciation: {
          actualSound: '[세상 꼭때기에]',
          singingTips: '「꼭대기」第一音節為濃音 ㄲ，收音 ㄱ 再次讓第二音節 ㄷ 緊音化為 [때]，音感非常立體。',
          rules: [
            {
              title: '內部平音緊音化',
              badge: '緊音化',
              detail: '꼭 [k] 的收音促使 대 [t] 變成濃音 [때]，唸作 [꼭때기]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '세상 꼭대기에 서서 소리쳐',
              scene: '抒發站上登峰造極之處的壯志'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '세상 꼭대기에서 만나요 우리.',
              scene: '與粉絲約定頂峰相見'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '반드시 세상 꼭대기에 서겠습니다.',
              scene: '頒獎典禮感言宣誓要攀登世界頂點'
            }
          ],
          realLifeExample: {
            scenario: '登山登頂後俯瞰群山或是大考放榜奪冠',
            dialogue: [
              { speaker: '朋友', text: '와, 드디어 해냈구나! 지금 기분이 어때?', trans: '哇，你終於做到了！現在心情怎麼樣？' },
              { speaker: '你', text: '진짜 세상 꼭대기에 선 기분이야!', trans: '真的有一種站在世界頂端的感覺！' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-7',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:57',
      timeSec: 57.0,
      korean: '우린 Killas / 우린 Villains',
      text: '우린 Killas / 우린 Villains',
      romanization: 'u-rin Killas / u-rin Villains',
      naturalTranslation: '我們是舞台終結者，我們是狂傲大反派！',
      pillChips: [
        {
          id: 'p1',
          text: '우린',
          rom: 'u-rin',
          type: 'pronoun-particle',
          typeLabel: '代名詞縮寫',
          lemma: '우리 + 는',
          meaning: '我們的話 / 至於我們',
          explanation: '確立 YG 招牌狂傲人設的核心主詞。'
        },
        {
          id: 'p2',
          text: 'Killas',
          rom: 'Killas',
          type: 'slang-noun',
          typeLabel: '嘻哈俚語名詞',
          lemma: 'Killer',
          meaning: '舞台終結者 / 實力碾壓者',
          explanation: 'Hip-Hop 文化中將 Killer 拼作 Killa，象徵以無懈可擊的實力收割全場。'
        },
        {
          id: 'p3',
          text: 'Villains',
          rom: 'Villains',
          type: 'noun',
          typeLabel: '名詞複數',
          lemma: 'Villain',
          meaning: '反派 / 狂放反叛者',
          explanation: '打破傳統乖順女團形象，擁抱強烈個性的狂妄魅力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主格代名詞縮寫 (우린) + 外來語名詞補語 (Killas / Villains)',
          tokens: [
            { term: '우린', role: '代名詞主題', desc: '우리 + 는 的俐落縮略。' },
            { term: 'Killas', role: '嘻哈俚語', desc: 'Killer 的街頭拼法。' },
            { term: 'Villains', role: '英語名詞', desc: '反派角色，展現無懼世俗眼光的強大人設。' }
          ]
        },
        pronunciation: {
          actualSound: '[우린 킬라즈 / 우린 빌런즈]',
          singingTips: '饒舌重音落在 Killas 的 Kil 與 Villains 的 Vil 上，短促乾脆，充滿壓迫感。',
          rules: [
            {
              title: '外來語音譯咬字',
              badge: '外來語',
              detail: 'Killa 轉為激音 ㅋ [kʰ]，Villain 轉為 ㅂ [p/b]，咬字要有重量。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (嘻哈人設)',
              badge: '酷帥態度',
              form: '우린 Killas / 우린 Villains',
              scene: '舞台饒舌炸裂、自我介紹秀'
            },
            {
              name: '日常口語 (Casual)',
              badge: '打趣自信',
              form: '우리 오늘 완전 무대 찢었지?',
              scene: '演出成功後與團員擊掌'
            },
            {
              name: '正式形容 (Formal Expression)',
              badge: '專業評價',
              form: '독보적인 개성과 압도적인 무대 장악력.',
              scene: '樂評對強烈風格女團的讚許'
            }
          ],
          realLifeExample: {
            scenario: '完成一場震撼全場的萬人演唱會演出',
            dialogue: [
              { speaker: '歌迷', text: '오늘 무대 진짜 미쳤다! 카리스마 대박이야!', trans: '今天的舞台真的太瘋狂了！氣場大爆發！' },
              { speaker: '偶像', text: '우린 Killas니까! 끝까지 즐겨주세요!', trans: '因為我們是舞台終結者啊！請盡情享受到底吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-8',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:30',
      timeSec: 150.0,
      korean: '우린 판을 바꿀 Game changer',
      text: '우린 판을 바꿀 Game changer',
      romanization: 'u-rin pa-neul ba-kkul Game changer',
      naturalTranslation: '我們是徹底扭轉遊戲規則的局勢顛覆者！',
      pillChips: [
        {
          id: 'p1',
          text: '우린',
          rom: 'u-rin',
          type: 'pronoun-particle',
          typeLabel: '代名詞 + 助詞',
          lemma: '우리 + 는',
          meaning: '我們',
          explanation: '우리（我們）+ 는（主題助詞）的口語縮略。'
        },
        {
          id: 'p2',
          text: '판을',
          rom: 'pa-neul',
          type: 'noun-object',
          typeLabel: '名詞 + 受格助詞',
          lemma: '판 + 을',
          meaning: '盤面 / 局勢',
          explanation: '名詞「판」指棋局、賭盤，引申為市場格局或遊戲規則。'
        },
        {
          id: 'p3',
          text: '바꿀',
          rom: 'ba-kkul',
          type: 'verb-future-attr',
          typeLabel: '動詞未來冠形詞',
          lemma: '바꾸다 + -(으)ㄹ',
          meaning: '將要改變的…',
          explanation: '動詞 바꾸다（改變、替換）加上未來式冠形語尾 -(으)ㄹ，修飾後方的 Game changer。'
        },
        {
          id: 'p4',
          text: 'Game changer',
          rom: 'Game changer',
          type: 'loanword',
          typeLabel: '英語外來語',
          lemma: 'Game changer',
          meaning: '規則顛覆者 / 破局者',
          explanation: 'K-Pop 歌詞極度常見的酷炫英語外來語，象徵掌握全場主控權。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '代名詞縮寫 (우린) + 名詞受格 (판을) + 未來冠形動詞 (바꿀) + 名詞外來語 (Game changer)',
          tokens: [
            { term: '판', role: '名詞', desc: '局勢、盤面、市場格局。' },
            { term: '-을', role: '受格助詞', desc: '標示動作受詞。' },
            { term: '바꾸다', role: '動詞', desc: '改變、交換。冠形詞型 바꿀 修飾名詞。' }
          ]
        },
        pronunciation: {
          actualSound: '[우린 파늘 바꿀 Game changer]',
          singingTips: '「판을」收音 ㄴ 連音到 을，實讀為 [파늘]。雙子音 ㄲ 要發出乾淨的濃音。',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '連音',
              detail: '「판」收音 ㄴ 移至後方初聲，讀為 [파늘]。'
            },
            {
              title: '濃音節奏 (된소리)',
              badge: '濃音',
              detail: '「바꿀」中的 ㄲ 需收縮喉部，帶出果斷自信的打擊感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞原文 (平語 반말)',
              badge: '歌詞原型',
              form: '우린 판을 바꿀 Game changer야',
              scene: '強大氣場的自我宣示'
            },
            {
              name: '日常敬語 (해요體)',
              badge: '生活推薦',
              form: '저희는 판을 바꿀 게임 체인저예요.',
              scene: '新創公司向投資人推介顛覆性商業模式'
            },
            {
              name: '正式敬語 (하십시오體)',
              badge: '最高敬意',
              form: '저희가 바로 이 판을 바꿀 게임 체인저입니다.',
              scene: '重大發表會正式宣告公司願景'
            }
          ],
          realLifeExample: {
            scenario: '提案會議上提出突破性的創新企劃案',
            dialogue: [
              { speaker: '同事', text: '기존 방식대로 하는 게 안전하지 않을까?', trans: '按照原本的方式做不是比較安全嗎？' },
              { speaker: '你', text: '아니요, 이번엔 우리가 판을 바꿀 때예요!', trans: '不，這次是該由我們來扭轉乾坤顛覆局勢的時刻了！' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 🇺🇸 英語歌詞研習句目 (English Study Sentences: 9 - 16)
    // =========================================================================
    {
      id: 'wgu-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:10',
      timeSec: 10.5,
      korean: 'This ain’t a game and you know we don’t play',
      text: 'This ain’t a game and you know we don’t play',
      romanization: '/ðɪs eɪnt ə ɡeɪm ænd juː noʊ wi doʊnt pleɪ/',
      naturalTranslation: '這可不是在鬧著玩，你知道我們是動真格的！',
      pillChips: [
        {
          id: 'pe1',
          text: 'This',
          rom: '/ðɪs/',
          type: 'pronoun',
          typeLabel: '指示代名詞',
          lemma: 'this',
          meaning: '這一切 / 當前這場對決',
          explanation: '指示代名詞，在此指眼前這場音樂比賽、舞台挑戰或競爭。'
        },
        {
          id: 'pe2',
          text: 'ain’t',
          rom: '/eɪnt/',
          type: 'slang-contraction',
          typeLabel: '口語否定縮約',
          lemma: 'be not / have not',
          meaning: '絕不是 / 根本不是',
          explanation: '非正式口語與嘻哈歌詞中最具態度的否定詞，此處等同於 is not。能瞬間帶出強悍街頭態度！'
        },
        {
          id: 'pe3',
          text: 'a game',
          rom: '/ə ɡeɪm/',
          type: 'noun-phrase',
          typeLabel: '名詞片語',
          lemma: 'game',
          meaning: '兒戲 / 隨便玩玩',
          explanation: '名詞加上不定冠詞，引申為「小打小鬧、鬧著玩的遊戲」。'
        },
        {
          id: 'pe4',
          text: 'and you know',
          rom: '/ən juː noʊ/',
          type: 'discourse-marker',
          typeLabel: '語篇連詞/插入句',
          lemma: 'you know',
          meaning: '而且你心知肚明',
          explanation: '饒舌歌手在強化聽眾共鳴時極常用的節奏填充詞，直接與聽眾對話。'
        },
        {
          id: 'pe5',
          text: 'we don’t play',
          rom: '/wi doʊnt pleɪ/',
          type: 'idiom',
          typeLabel: '道地街頭成語',
          lemma: 'not play',
          meaning: '我們動真格的 / 絕不手軟',
          explanation: '街頭英文高頻經典片語！表面是「我們不玩耍」，實質意思是「我們極度認真、全力以赴、毫不留情」！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '指示代名詞 (This) + 否定縮約 (ain\'t) + 表語名詞 (a game) + 對等連接詞 (and) + 插入語 (you know) + 慣用語否定動詞片語 (we don\'t play)',
          tokens: [
            { term: 'This', role: '主詞代名詞', desc: '指示當前的對決局面或挑戰。' },
            { term: 'ain\'t', role: '口語助動詞', desc: '非標準口語縮約（在此代表 is not），極具態度。' },
            { term: 'a game', role: '名詞表語', desc: '比喻「隨便玩玩的兒戲」。' },
            { term: 'and', role: '對等連接詞', desc: '連接前後兩個平行的主從句。' },
            { term: 'we don\'t play', role: '動詞片語', desc: '慣用語，表示「我們嚴肅認真、玩真的、不開玩笑」。' }
          ]
        },
        pronunciation: {
          actualSound: '[ðɪs eɪnt ə ɡeɪm ən juː noʊ wi doʊnt pleɪ]',
          singingTips: '注意「ain\'t」末端的 t 採用舌尖閉氣的 Stop T（塞音不爆破）；「and」弱化為輕柔的 [ən]，使節奏自然落在 game 與 play 的押韻雙重打擊上！',
          rules: [
            {
              title: '口語縮約 Ain\'t (Colloquial Contraction)',
              badge: '街頭縮讀',
              detail: '可代替 isn\'t, aren\'t, am not, hasn\'t, haven\'t，在美式口語與歌曲中極富節奏感與威懾力。'
            },
            {
              title: '閉氣止音 Stop T (Glottal / Unreleased T)',
              badge: '弱化發音',
              detail: '在「ain\'t a」與「don\'t play」中，t 遇到子音時舌尖貼住齒齦止氣即可，不強行爆破送氣。'
            },
            {
              title: 'And 弱讀成 [ən] (Vowel Reduction)',
              badge: '節奏弱讀',
              detail: '連詞 and 失去 d 音並將母音弱化成 schwa [ən]，讓 Flow 如流水般順暢。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈街頭 / 歌詞原型',
              badge: '態度宣示',
              form: 'This ain\'t a game and you know we don\'t play.',
              scene: '舞台開場、電競對決、運動賽事正面嗆聲'
            },
            {
              name: '日常口語 (Conversational)',
              badge: '日常通用',
              form: 'This isn\'t a joke, and you know we\'re completely serious.',
              scene: '向朋友或夥伴嚴正表明自己絕非開玩笑'
            },
            {
              name: '正式商務 / 書面 (Formal English)',
              badge: '職場專業',
              form: 'This is a serious venture, and we are firmly dedicated to delivering exceptional results.',
              scene: '商業提案簡報、面對客戶承諾交付品質'
            }
          ],
          realLifeExample: {
            scenario: '面對重要專案交付期限，隊長向隊員激勵士氣',
            dialogue: [
              { speaker: 'Colleague', text: 'Are you sure we can deliver this project by Monday?', trans: '你確定我們能在星期一前交出這個專案嗎？' },
              { speaker: 'Leader', text: 'Trust me, we don\'t play. We\'ll get it done tonight!', trans: '相信我，我們是認真的！今晚就把它搞定！' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:16',
      timeSec: 16.1,
      korean: 'You ain’t never seen the typa show we boutta show ya',
      text: 'You ain’t never seen the typa show we boutta show ya',
      romanization: '/ju eɪnt ˈnevər siːn ðə ˈtaɪpə ʃoʊ wi ˈbʌtə ʃoʊ jə/',
      naturalTranslation: '你從未見過我們即將為你呈現的這般震撼大秀！',
      pillChips: [
        {
          id: 'pe1',
          text: 'You ain’t never seen',
          rom: '/ju eɪnt ˈnevər siːn/',
          type: 'double-negative',
          typeLabel: '雙重否定強調句',
          lemma: 'have never seen',
          meaning: '你絕對從來沒看過',
          explanation: '非裔美語 (AAVE) 與嘻哈中極經典的雙重否定（ain\'t + never）。在修辭上不是負負得正，而是成倍放大的強烈否定！'
        },
        {
          id: 'pe2',
          text: 'the typa show',
          rom: '/ðə ˈtaɪpə ʃoʊ/',
          type: 'noun-phrase',
          typeLabel: '名詞縮音片語',
          lemma: 'type of show',
          meaning: '這種等級的秀',
          explanation: '「typa」是「type of」在饒舌中的極致縮讀，介系詞 of 弱化為短舒緩母音 [ə]。'
        },
        {
          id: 'pe3',
          text: 'we boutta',
          rom: '/wi ˈbʌtə/',
          type: 'slang-future',
          typeLabel: '將來時態縮寫',
          lemma: 'be about to',
          meaning: '我們即將 / 正準備',
          explanation: '「boutta」是「about to」的口語連音縮寫，省略首字母 a，表示刻不容緩、馬上就要展開的行動。'
        },
        {
          id: 'pe4',
          text: 'show ya',
          rom: '/ʃoʊ jə/',
          type: 'verb-object',
          typeLabel: '動詞 + 受格代名詞',
          lemma: 'show you',
          meaning: '展現給你看',
          explanation: '「ya」是代名詞 you 的口語非正式讀音與拼法。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '第二人稱主詞 (You) + 雙重否定現在完成式 (ain\'t never seen) + 先行詞 (the typa show) + 關係子句 (we boutta show ya)',
          tokens: [
            { term: 'You', role: '主格代名詞', desc: '聽眾或對手。' },
            { term: 'ain\'t never seen', role: '謂語動詞', desc: '非裔美語強烈雙重否定（相當於 standard English: have never seen）。' },
            { term: 'the typa show', role: '受詞先行詞', desc: 'type of show 的極速口語簡縮。' },
            { term: 'we boutta show ya', role: '關係子句', desc: '省略 that/which，boutta 代替 are about to。' }
          ]
        },
        pronunciation: {
          actualSound: '[ju eɪnt ˈnevər siːn ðə ˈtaɪpə ʃoʊ wi ˈbʌtə ʃoʊ jə]',
          singingTips: '典型的快速半音連拍！「typa show」與「boutta show ya」構成對稱的音律結構，注意「show ya」連音順滑滑入母音。',
          rules: [
            {
              title: '雙重否定強化語氣 (AAVE Double Negative)',
              badge: '修辭語法',
              detail: '在流行音樂與街頭英語中，雙重否定用以極大化「震撼度」，打破標準英語平鋪直敘的語感。'
            },
            {
              title: 'Type of 簡化成 Typa [ˈtaɪpə]',
              badge: '縮音連讀',
              detail: '子音 f 弱化脫落，[taɪp əv] 縮合成單純的 [ˈtaɪpə]，非常適合快速吐字。'
            },
            {
              title: 'About to 簡化成 Boutta [ˈbʌtə]',
              badge: '極速時態',
              detail: '首字母 a 脫落，t 轉化為喉塞音或彈舌音，[əˈbaʊt tuː] 成為緊湊的 [ˈbʌtə]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈舞台 / 街頭自信',
              badge: '舞台女王',
              form: 'You ain\'t never seen the typa show we boutta show ya!',
              scene: '演唱會開場、發布震撼新作品時的宣言'
            },
            {
              name: '日常生活 (Casual English)',
              badge: '朋友分享',
              form: 'You haven\'t seen anything like what we are about to show you.',
              scene: '準備向朋友展示令人驚喜的驚人成果'
            },
            {
              name: '正式發表會 (Formal Presentation)',
              badge: '商務典雅',
              form: 'You are about to experience an unprecedented demonstration of innovation and excellence.',
              scene: '新產品全球發表會、國際設計週開幕演講'
            }
          ],
          realLifeExample: {
            scenario: '設計師向客戶揭開秘密籌備三個月的品牌重塑視覺',
            dialogue: [
              { speaker: 'Client', text: 'Are we finally going to see the new campaign assets today?', trans: '我們今天終於能看到全新的行銷廣告素材了嗎？' },
              { speaker: 'Designer', text: 'Get ready! You ain\'t never seen anything like what we boutta show you.', trans: '準備好了！你絕對從沒見過我們即將端出的這種震撼大作。' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:26',
      timeSec: 26.0,
      korean: 'You will never dominate, domino when I see you fall',
      text: 'You will never dominate, domino when I see you fall',
      romanization: '/ju wɪl ˈnevər ˈdɒmɪneɪt ˈdɒmɪnoʊ wɛn aɪ siː juː fɔːl/',
      naturalTranslation: '你休想稱霸稱王，看著你們像骨牌一樣應聲倒下！',
      pillChips: [
        {
          id: 'pe1',
          text: 'You will never',
          rom: '/ju wɪl ˈnevər/',
          type: 'future-negative',
          typeLabel: '將來否定句型',
          lemma: 'will never',
          meaning: '你絕不可能',
          explanation: '堅決否定對手成功的可能性。'
        },
        {
          id: 'pe2',
          text: 'dominate',
          rom: '/ˈdɒmɪneɪt/',
          type: 'verb',
          typeLabel: '及物動詞',
          lemma: 'dominate',
          meaning: '稱霸 / 支配統治',
          explanation: '及物動詞，指在舞台或比賽中佔據絕對主宰地位。'
        },
        {
          id: 'pe3',
          text: 'domino',
          rom: '/ˈdɒmɪnoʊ/',
          type: 'wordplay-pun',
          typeLabel: '雙關語 / 頭韻修辭',
          lemma: 'domino',
          meaning: '骨牌效應 / 連鎖倒下',
          explanation: '與前詞 dominate 形成精妙的「押頭韻（Alliteration）」與雙關語！將對手被擊垮比喻為骨牌傾倒。'
        },
        {
          id: 'pe4',
          text: 'when I see you fall',
          rom: '/wɛn aɪ siː juː fɔːl/',
          type: 'adverb-clause',
          typeLabel: '時間副詞子句',
          lemma: 'see someone fall',
          meaning: '當我看著你敗退倒下',
          explanation: '感官動詞 see + 受詞 you + 原形動詞補語 fall。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '否定將來時主句 (You will never dominate) + 修辭名詞雙關動態 (domino) + 感官動詞時間副詞子句 (when I see you fall)',
          tokens: [
            { term: 'You will never dominate', role: '主句謂語', desc: '否定將來式，直言對方絕無登頂可能。' },
            { term: 'domino', role: '修辭雙關', desc: '利用 dominate 與 domino 的諧音形成頭韻，兼指骨牌效應。' },
            { term: 'when I see you fall', role: '時間子句', desc: '感官動詞 see 後接原形動詞 fall 作為受詞補語。' }
          ]
        },
        pronunciation: {
          actualSound: '[ju wɪl ˈnevər ˈdɒmɪneɪt ˈdɒmɪnoʊ wɛn aɪ siː juː fɔːl]',
          singingTips: '「dominate」與「domino」前兩個音節重音拍子完全相同，唸起來有極強的打擊感與節奏快感！',
          rules: [
            {
              title: '頭韻修辭 (Alliteration & Wordplay)',
              badge: '歌詞技巧',
              detail: 'dominate 與 domino 共享 domi- 前綴，音韻呼應，創造出擊垮對手骨牌效應的生動意象。'
            },
            {
              title: '感官動詞原形補語 (Bare Infinitive)',
              badge: '核心文法',
              detail: '感官動詞 see/hear/watch 後接原形動詞（see you fall），表示親眼看見整個動作發生的全過程。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞宣戰 / 饒舌對決',
              badge: '強勢氣場',
              form: 'You will never dominate, domino when I see you fall.',
              scene: '反擊競爭對手的狂妄挑戰'
            },
            {
              name: '日常比喻 (Conversational)',
              badge: '生活用法',
              form: 'They couldn\'t maintain their lead and collapsed like dominoes.',
              scene: '描述某個傲慢團隊因失誤引發連鎖崩盤'
            },
            {
              name: '正式分析 (Formal Analysis)',
              badge: '專業論述',
              form: 'A failure to secure the market culminated in a cascading sequence of systemic setbacks.',
              scene: '商業競爭局勢分析報告'
            }
          ],
          realLifeExample: {
            scenario: '分析對手公司因忽視產品品質而導致市場崩盤',
            dialogue: [
              { speaker: 'Analyst A', text: 'Did you hear their competitor tried to undercut our pricing?', trans: '你有聽說競爭對手試圖用削價打擊我們嗎？' },
              { speaker: 'Analyst B', text: 'Yeah, but it backfired completely. Once one store closed, they dominoed.', trans: '聽說了，但完全反噬了。一家分店關門後，他們就像骨牌一樣連環倒下了。' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:32',
      timeSec: 32.1,
      korean: 'Look at me on a roll',
      text: 'Look at me on a roll',
      romanization: '/lʊk ət miː ɒn ə roʊl/',
      naturalTranslation: '看看我現在好運勢不可擋、銳不可當的氣勢！',
      pillChips: [
        {
          id: 'pe1',
          text: 'Look at me',
          rom: '/lʊk ət miː/',
          type: 'imperative-phrase',
          typeLabel: '祈使句動詞片語',
          lemma: 'look at',
          meaning: '看著我吧',
          explanation: '吸引全場目光的經典舞台自信句型。'
        },
        {
          id: 'pe2',
          text: 'on a roll',
          rom: '/ɒn ə roʊl/',
          type: 'high-frequency-idiom',
          typeLabel: '超高頻英文成語',
          lemma: 'on a roll',
          meaning: '勢不可擋 / 手氣正順 / 連連告捷',
          explanation: '源自擲骰子遊戲連續擲出勝點，引申為生活、工作或比賽中連續獲勝、狀態絕佳！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '祈使句及物動詞片語 (Look at) + 受格代名詞 (me) + 狀態介系詞成語片語 (on a roll)',
          tokens: [
            { term: 'Look at', role: '祈使動詞', desc: '祈使句型，引起注意。' },
            { term: 'me', role: '受格代名詞', desc: '第一人稱單數受詞。' },
            { term: 'on a roll', role: '成語片語', desc: '固定介系詞片語，表達手氣正順、好運勢如破竹。' }
          ]
        },
        pronunciation: {
          actualSound: '[lʊk ət miː ɒn ə roʊl]',
          singingTips: '「Look at」字尾 k 與母音 a 自然連音成 [lʊ-kət]；「on a」連音成 [ɒ-nə]，整體一氣呵成。',
          rules: [
            {
              title: '子音接母音連讀 (Consonant-to-Vowel Linking)',
              badge: '流利發音',
              detail: 'Look [k] + at [æ/ə] -> [lʊ-kət]，英文母語者絕對不會在單字間停頓。'
            },
            {
              title: '經典成語 On a roll 的起源',
              badge: '道地成語',
              detail: '意指「好運滾滾來、連戰皆捷」，是各類英語考試與日常美語中最生動讚嘆運氣與實力的片語。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞自信 / 自我激勵',
              badge: '自信爆棚',
              form: 'Look at me on a roll!',
              scene: '連續完成挑戰時向周遭歡呼'
            },
            {
              name: '日常口語 (Casual)',
              badge: '朋友互誇',
              form: 'You\'re really on a roll lately, congratulations!',
              scene: '祝賀朋友考試全過或專案連連達標'
            },
            {
              name: '正式商務 (Formal Professional)',
              badge: '年度總結',
              form: 'Our quarterly performance reflects consistent, upward trajectory and momentum.',
              scene: '向董事會報告業績逆勢暴漲'
            }
          ],
          realLifeExample: {
            scenario: '朋友連續通過三場面試，雀躍分享喜訊',
            dialogue: [
              { speaker: 'Friend A', text: 'Guess what? I just passed the final interview at Google too!', trans: '你猜怎麼著？我剛剛連 Google 的最終面試也通過了！' },
              { speaker: 'Friend B', text: 'No way! You\'re really on a roll, I\'m so proud of you!', trans: '太神了吧！你最近真是勢不可擋，我真替你感到驕傲！' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-en-5',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:33',
      timeSec: 33.0,
      korean: 'Let bygones be bygones',
      text: 'Let bygones be bygones',
      romanization: '/lɛt ˈbaɪɡɒnz biː ˈbaɪɡɒnz/',
      naturalTranslation: '過去的恩怨就讓它隨風而去吧，既往不咎！',
      pillChips: [
        {
          id: 'pe1',
          text: 'Let',
          rom: '/lɛt/',
          type: 'causative-verb',
          typeLabel: '使役動詞',
          lemma: 'let',
          meaning: '讓 / 任憑',
          explanation: '祈使句開頭，引導放下的豁達胸襟。'
        },
        {
          id: 'pe2',
          text: 'bygones',
          rom: '/ˈbaɪɡɒnz/',
          type: 'plural-noun',
          typeLabel: '複數名詞',
          lemma: 'bygone',
          meaning: '過去的嫌隙 / 往事舊怨',
          explanation: '源自古英文動詞 by-go（走過），名詞化指已經過去的事情、過去的衝突或不愉快。'
        },
        {
          id: 'pe3',
          text: 'be',
          rom: '/biː/',
          type: 'bare-infinitive',
          typeLabel: '原形動詞補語',
          lemma: 'be',
          meaning: '作為 / 保持為',
          explanation: '使役動詞 let 後方必須接原形動詞 (Bare Infinitive)。'
        },
        {
          id: 'pe4',
          text: 'bygones',
          rom: '/ˈbaɪɡɒnz/',
          type: 'predicate-noun',
          typeLabel: '名詞補語',
          lemma: 'bygone',
          meaning: '過去的事物',
          explanation: '句意即「讓過去的就當作過去的吧」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '祈使句使役動詞 (Let) + 受詞名詞 (bygones) + 原形動詞 (be) + 受詞補語名詞 (bygones)',
          tokens: [
            { term: 'Let', role: '使役動詞', desc: '祈使引導，放手豁達。' },
            { term: 'bygones', role: '受詞名詞', desc: '指過去的不快或摩擦。' },
            { term: 'be', role: '原形動詞補語', desc: '省略 to 的原形繫動詞。' },
            { term: 'bygones', role: '表語名詞', desc: '完成經典英語格言結構。' }
          ]
        },
        pronunciation: {
          actualSound: '[lɛt ˈbaɪɡɒnz biː ˈbaɪɡɒnz]',
          singingTips: '這是一句傳唱數百年的英語諺語！b 開頭的三個音節形成清脆的雙唇音彈奏節拍，優雅又豁達。',
          rules: [
            {
              title: '英語四百年傳世諺語 (Proverbial Idiom)',
              badge: '文化成語',
              detail: '最早記錄於 16 世紀，常用於雙方和解、決定不再翻舊帳或計較恩怨的場合。'
            },
            {
              title: '使役動詞省略 to (Bare Infinitive)',
              badge: '必考文法',
              detail: 'Let + O + 原形動詞，不可寫成 let bygones to be bygones。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞酷颯 / 瀟灑放下',
              badge: '灑脫風範',
              form: 'Let bygones be bygones.',
              scene: '告別前任、甩開酸民惡評時的帥氣宣言'
            },
            {
              name: '日常修好 (Reconciliation)',
              badge: '冰釋前嫌',
              form: 'Why don\'t we just let bygones be bygones and start fresh?',
              scene: '與朋友吵架後主動遞出橄欖枝和好'
            },
            {
              name: '正式商務調解 (Mediation)',
              badge: '專業和解',
              form: 'Both parties agree to forgo past claims in the interest of forward-looking collaboration.',
              scene: '兩家公司簽署爭端和解協議'
            }
          ],
          realLifeExample: {
            scenario: '兩位曾經有過誤會的同事在聚會中敞開心扉',
            dialogue: [
              { speaker: 'Alex', text: 'I\'m really sorry about how heated that meeting got last month.', trans: '關於上個月那場會議開得太火爆，我真的很抱歉。' },
              { speaker: 'Ben', text: 'Don\'t sweat it. Let bygones be bygones, let\'s grab a coffee!', trans: '別掛在心上啦！過去的事就讓它過去吧，我們去喝杯咖啡！' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-en-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:35',
      timeSec: 35.8,
      korean: 'That high road we gon’ walk over',
      text: 'That high road we gon’ walk over',
      romanization: '/ðæt haɪ roʊd wiː ɡɒn wɔːk ˈoʊvər/',
      naturalTranslation: '那條光明磊落的康莊大道，我們定會昂首踏過！',
      pillChips: [
        {
          id: 'pe1',
          text: 'That high road',
          rom: '/ðæt haɪ roʊd/',
          type: 'fronted-object',
          typeLabel: '受詞前置倒裝',
          lemma: 'high road',
          meaning: '光明坦蕩的大道 / 高尚品格之路',
          explanation: '源自經典片語「take the high road」（走光明大道、不與小人一般見識）。將受詞搬至句首作為強調！'
        },
        {
          id: 'pe2',
          text: 'we gon’',
          rom: '/wiː ɡɒn/',
          type: 'slang-auxiliary',
          typeLabel: '口語縮讀未來式',
          lemma: 'we are going to',
          meaning: '我們將會',
          explanation: '嘻哈口語中 going to 幾乎一律縮音為 gon\' 或 gonna。'
        },
        {
          id: 'pe3',
          text: 'walk over',
          rom: '/wɔːk ˈoʊvər/',
          type: 'phrasal-verb',
          typeLabel: '及物動詞片語',
          lemma: 'walk over',
          meaning: '昂首走過 / 踏平障礙',
          explanation: '雙關走在光明大道上，同時把對手的阻撓輕易踏平。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '受詞前置倒裝強調 (That high road) + 主格代名詞 (we) + 縮音將來助動詞 (gon\') + 動詞片語 (walk over)',
          tokens: [
            { term: 'That high road', role: '前置受詞', desc: '將想要突顯的主題置於句首（Topicalization）。' },
            { term: 'we', role: '主格代名詞', desc: '第一人稱複數主詞。' },
            { term: 'gon\'', role: '助動詞縮約', desc: 'are going to 的俚語縮讀。' },
            { term: 'walk over', role: '謂語動詞', desc: '走過、跨越。' }
          ]
        },
        pronunciation: {
          actualSound: '[ðæt haɪ roʊd wiː ɡɒn wɔːk ˈoʊvər]',
          singingTips: '「walk over」注意 k 與 over 連音成 [wɔː-koʊvər]，節奏沉穩鏗鏘有力。',
          rules: [
            {
              title: '受詞前置焦點修辭 (Topicalization)',
              badge: '修辭結構',
              detail: '正常語序是 We are going to walk over that high road，前置受詞讓態度更加傲岸霸氣！'
            },
            {
              title: '文化意象：Take the high road',
              badge: '道地處世',
              detail: '「High road」象徵不屑與宵小計較的坦蕩胸襟，與「low road（卑劣下策）」形成強烈對比。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞態度 / 睥睨流言',
              badge: '霸氣女王',
              form: 'That high road we gon\' walk over.',
              scene: '面對網路酸民攻擊時，以實力昂首跨越'
            },
            {
              name: '日常自勉 (Conversational)',
              badge: '處事修養',
              form: 'It\'s better to take the high road and ignore the petty gossip.',
              scene: '勸解朋友不要跟惡意造謠者一般見識'
            },
            {
              name: '領袖原則 (Corporate Leadership)',
              badge: '格局格調',
              form: 'Our leadership team consistently chooses the high road of ethical integrity over short-term gain.',
              scene: '企業社會責任與品牌誠信聲明'
            }
          ],
          realLifeExample: {
            scenario: '面對競爭對手的惡意抹黑，團隊決定用頂尖產品說話',
            dialogue: [
              { speaker: 'Teammate', text: 'They just posted another misleading comparison video about us!', trans: '他們剛剛又發了一支針對我們的誤導性惡意對比影片！' },
              { speaker: 'Leader', text: 'Let them. We take the high road. Our users know the truth.', trans: '隨他們去吧。我們走光明正大的路，我們的用戶心中自然有數。' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-en-7',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:37',
      timeSec: 37.3,
      korean: 'Cause icons be icons',
      text: 'Cause icons be icons',
      romanization: '/kəz ˈaɪkɒnz biː ˈaɪkɒnz/',
      naturalTranslation: '因為傳奇巨星終究是傳奇，標竿地位無可撼動！',
      pillChips: [
        {
          id: 'pe1',
          text: 'Cause',
          rom: '/kəz/',
          type: 'conjunction',
          typeLabel: '因果連詞縮讀',
          lemma: 'because',
          meaning: '因為',
          explanation: '口語中 because 極常簡略為 \'cause 或 cuz。'
        },
        {
          id: 'pe2',
          text: 'icons',
          rom: '/ˈaɪkɒnz/',
          type: 'plural-noun',
          typeLabel: '複數名詞',
          lemma: 'icon',
          meaning: '偶像標竿 / 時代傳奇',
          explanation: '指在某領域具備開創性、崇高影響力的靈魂人物。'
        },
        {
          id: 'pe3',
          text: 'be',
          rom: '/biː/',
          type: 'habitual-be',
          typeLabel: 'AAVE 習慣態動詞',
          lemma: 'be',
          meaning: '永遠是 / 始終如一地',
          explanation: '在黑人英語 (AAVE Habitual \'Be\') 中，原形 be 代表一種「永恆不變、持續存在的本質特質」！'
        },
        {
          id: 'pe4',
          text: 'icons',
          rom: '/ˈaɪkɒnz/',
          type: 'predicate-noun',
          typeLabel: '表語名詞',
          lemma: 'icon',
          meaning: '時代傳奇',
          explanation: '重複名詞構成同語反覆（Tautology），表達無可爭辯的事實。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '連接詞縮音 (Cause) + 複數名詞主詞 (icons) + 習慣態原形動詞 (Habitual \'be\') + 複數名詞補語 (icons)',
          tokens: [
            { term: 'Cause', role: '連接詞', desc: 'because 的口語縮寫。' },
            { term: 'icons', role: '主詞名詞', desc: '時代巨星、業界標竿。' },
            { term: 'be', role: '習慣態動詞', desc: 'AAVE 文法特徵，表達恆常本質。' },
            { term: 'icons', role: '同位語/表語', desc: '重複強化「傳奇終究是傳奇」的自明命題。' }
          ]
        },
        pronunciation: {
          actualSound: '[kəz ˈaɪkɒnz biː ˈaɪkɒnz]',
          singingTips: '短小精悍的 Slogan 式發音！「icons」的雙重 s 與「be」的緊湊母音形成重擊重音拍。',
          rules: [
            {
              title: '習慣態 Be 語法 (Habitual \'Be\')',
              badge: '進階語言學',
              detail: '在流行音樂常用句中，be 不進行人稱變化（不是 icons are），而是用原形 be 表達恆定不變的本色。'
            },
            {
              title: '同語反覆修辭 (Tautological Assertion)',
              badge: '修辭亮點',
              detail: '類似「Boys will be boys」或「A deal is a deal」，重複名詞傳遞出毫無妥協餘地的無可辯駁感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '流行頂流 / 流行語',
              badge: '天生巨星',
              form: 'Cause icons be icons.',
              scene: '讚嘆偶像巨星壓倒性的舞台統治力'
            },
            {
              name: '日常讚譽 (Casual English)',
              badge: '真摯誇獎',
              form: 'True legends always shine, no matter what happens.',
              scene: '讚許敬佩的偶像或前輩始終維持高水準'
            },
            {
              name: '文化評論 (Cultural Review)',
              badge: '典雅評論',
              form: 'Pioneering icons inevitably redefine industry standards across generations.',
              scene: '文藝批評與音樂史論述專欄'
            }
          ],
          realLifeExample: {
            scenario: '觀看完一場震撼全球的超級盃中場秀後與朋友讚嘆',
            dialogue: [
              { speaker: 'Fan A', text: 'Did you see that halftime show? Her voice was completely flawless!', trans: '你有看那個中場秀嗎？她的歌聲簡直完美無瑕！' },
              { speaker: 'Fan B', text: 'Unbelievable! Cause icons be icons, she\'s in a league of her own.', trans: '太不可思議了！傳奇終究是傳奇，她完全在另一個不同次元。' }
            ]
          }
        }
      }
    },
    {
      id: 'wgu-en-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:50',
      timeSec: 50.2,
      korean: 'When we pull up, know it’s all on site',
      text: 'When we pull up, know it’s all on site',
      romanization: '/wɛn wiː pʊl ʌp noʊ ɪts ɔːl ɒn saɪt/',
      naturalTranslation: '只要我們一登場現身，所有事情當場擺平拿下！',
      pillChips: [
        {
          id: 'pe1',
          text: 'When we pull up',
          rom: '/wɛn wiː pʊl ʌp/',
          type: 'time-clause',
          typeLabel: '時間副詞子句',
          lemma: 'pull up',
          meaning: '當我們開車抵達 / 強勢現身',
          explanation: '嘻哈極度高頻的片語動詞，原指開豪車停在門口，引申為霸氣登場。'
        },
        {
          id: 'pe2',
          text: 'know it’s',
          rom: '/noʊ ɪts/',
          type: 'imperative-clause',
          typeLabel: '祈使語氣插入',
          lemma: 'know it is',
          meaning: '給我記好了 / 毫無疑問',
          explanation: '省略主詞 you 的祈使句，帶有傲然命令的威懾力。'
        },
        {
          id: 'pe3',
          text: 'all on site',
          rom: '/ɔːl ɒn saɪt/',
          type: 'street-idiom-pun',
          typeLabel: '街頭雙關片語',
          lemma: 'on site / on sight',
          meaning: '當場解決 / 現場直面交鋒',
          explanation: '街頭英語指事情現場解決，絕不拖泥帶水；也是「On sight（一見面就動手）」的帥氣諧音雙關！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '時間副詞子句 (When we pull up) + 祈使句主句動詞 (know) + 受詞名詞子句 (it\'s all on site)',
          tokens: [
            { term: 'When we pull up', role: '時間子句', desc: 'pull up 為片語動詞，表示抵達現場。' },
            { term: 'know', role: '祈使動詞', desc: '宣示性命令句。' },
            { term: 'it\'s all on site', role: '名詞子句', desc: '省略 that，on site 表達現場直接就位解決。' }
          ]
        },
        pronunciation: {
          actualSound: '[wɛn wiː pʊl ʌp noʊ ɪts ɔːl ɒn saɪt]',
          singingTips: '「pull up」連音成 [pʊ-lʌp]，而「on site」重音落在 site 上，尾音清脆止氣。',
          rules: [
            {
              title: 'Pull up 片語動詞的演進',
              badge: '街頭俚語',
              detail: '從開車停在路邊，演變為派對、聚會或舞台上「強勢空降現身」的代名詞。'
            },
            {
              title: 'On Site 與 On Sight 的雙關趣味',
              badge: '音韻雙關',
              detail: '既有「現場（on site）親自處理」的專業感，又有「一見面（on sight）立即決戰」的街頭硬核感！'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈炸場 / 街頭霸氣',
              badge: '全場焦點',
              form: 'When we pull up, know it\'s all on site!',
              scene: '全隊浩浩蕩蕩抵達會場時的霸氣宣告'
            },
            {
              name: '日常團隊信賴 (Casual Teamwork)',
              badge: '靠譜承諾',
              form: 'Once our team gets there, we\'ll take care of everything on the spot.',
              scene: '向客戶承諾團隊抵達現場後將完美處理一切'
            },
            {
              name: '現場調度專業 (Operational Excellence)',
              badge: '商務幹練',
              form: 'Upon arrival, our specialized rapid response unit will resolve all matters immediately on site.',
              scene: '大型展覽現場即時運營承諾'
            }
          ],
          realLifeExample: {
            scenario: '活動企劃團隊在大型晚會即將開始前向主辦方保證',
            dialogue: [
              { speaker: 'Event Host', text: 'The VIP guests are arriving in 15 minutes! Is the staging ready?', trans: '貴賓還有 15 分鐘就要抵達了！舞台設備都準備好了嗎？' },
              { speaker: 'Crew Lead', text: 'Relax. When we pull up, it\'s all on site. We\'ve got full control.', trans: '放心。只要我們一到場，所有事當場搞定，一切都在我們掌控之中。' }
            ]
          }
        }
      }
    }
  ]
};

// Study Library Registry & Lookup Helper
export const LYRIC_STUDY_PRESETS = [
  WE_GO_UP_STUDY_DATA
];

export function findStudyDataForSong(songIdOrTitle) {
  if (!songIdOrTitle) return WE_GO_UP_STUDY_DATA;
  const query = songIdOrTitle.toString().toLowerCase().trim();
  
  const found = LYRIC_STUDY_PRESETS.find(preset => {
    if (preset.id.toLowerCase() === query) return true;
    if (preset.youtubeId.toLowerCase() === query) return true;
    if (preset.title.toLowerCase().includes(query) || query.includes(preset.title.toLowerCase())) return true;
    if (preset.altYoutubeIds && preset.altYoutubeIds.some(id => id.toLowerCase() === query)) return true;
    return false;
  });

  return found || WE_GO_UP_STUDY_DATA;
}
