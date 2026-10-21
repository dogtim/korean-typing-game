// BABYMONSTER - 《Moon》 雙語唯美暗夜舞曲深度研習資料包
// 收錄第三張迷你專輯《춤 (CHOOM)》核心名曲《MOON》10 句韓英雙語精解：
// 1. 韓語 (Korean) 核心歌詞句精讀 (보름달 滿月、뜨는 升起、까만 밤 漆黑夜、빛이나 發光、진짜가 나타나 王者降臨、세상을 불태워라 燃燒世界、거울아 魔鏡啊、알잖아 你早明瞭、하늘을 봐 仰望星空、내 길을 가 走自己的路)
// 2. 英語 (English) 嘻哈與流行名句精讀 (on the loose 掙脫束縛、in the gloom 幽暗之中、unwritten 未卜命運、keep up with the pace 跟上節奏、stuntin' 炫目大放異彩、outta this world 超凡脫俗、all eyes on me 萬眾矚目)
// 3. 膠囊化單字分塊 (Interactive Pill Chips) + 三層研習抽屜數據 (文法結構、發音音變與Flow、語域正式度與日常對話)

export const MOON_STUDY_DATA = {
  id: 'moon',
  title: 'Moon',
  artist: 'BABYMONSTER',
  album: '第三張迷你專輯《춤 (CHOOM)》',
  year: '2026',
  youtubeId: 'LYbHsAsj6i8',
  altYoutubeIds: ['LYbHsAsj6i8', 'xXZwZ0DolJc'],
  sentences: [
    // =========================================================================
    // 🇰🇷 韓語歌詞研習句目 (Korean Study Sentences)
    // =========================================================================
    {
      id: 'mn-kr-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:07',
      timeSec: 6.98,
      korean: "I'm the moon, 보름달 뜨는 밤, on the loose",
      text: "I'm the moon, 보름달 뜨는 밤, on the loose",
      romanization: "I'm the moon, bo-reum-dal tteu-neun bam, on the loose",
      naturalTranslation: '我是月亮，滿月升起之夜，掙脫束縛自在狂歡！',
      pillChips: [
        {
          id: 'mp1',
          text: '보름달',
          rom: 'bo-reum-dal',
          type: 'noun',
          typeLabel: '名詞 (滿月/圓月)',
          lemma: '보름달',
          meaning: '滿月 / 望月 (陰曆十五的圓月)',
          explanation: '由「보름 (陰曆十五)」加「달 (月亮)」組成的固有詞，象徵圓滿、神秘力量與明亮純淨。'
        },
        {
          id: 'mp2',
          text: '뜨는',
          rom: 'tteu-neun',
          type: 'verb-modifier',
          typeLabel: '現在時定語詞尾',
          lemma: '뜨다',
          meaning: '升起 / 浮現 (動詞뜨다 + 定語詞尾-는)',
          explanation: '動詞「뜨다（升起、浮現）」接現在時定語詞尾「-는」，用來修飾後方的名詞「밤（夜晚）」。'
        },
        {
          id: 'mp3',
          text: 'on the loose',
          rom: '/ɑːn ðə luːs/',
          type: 'freedom-idiom',
          typeLabel: '掙脫束縛成語',
          lemma: 'on the loose',
          meaning: '掙脫束縛 / 肆意自由',
          explanation: '經典英文成語，指不受限制地在夜幕中自由奔馳。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '獨立主語宣告 (I’m the moon) + 動詞定語修飾結構 (보름달 뜨는 밤) + 狀態副詞短語 (on the loose)',
          tokens: [
            { term: 'I’m the moon', role: '核心宣告', desc: '自我身份的象徵宣示。' },
            { term: '보름달 뜨는 밤', role: '時間狀語', desc: '動詞定語뜨는修飾名詞「밤 (夜晚)」。' },
            { term: 'on the loose', role: '狀態修飾', desc: '擺脫拘束的狂歡狀態。' }
          ]
        },
        pronunciation: {
          actualSound: '[I’m the moon 보름달 뜨는 밤 on the loose]',
          singingTips: '「뜨는」的緊音 ㄸ 發音要俐落乾脆，「loose」收尾呼應後續的「boom / gloom」。',
          rules: [
            {
              title: '硬顎濃音 ㄸ (Tense Consonant)',
              badge: '發音重點',
              detail: '發「뜨」時聲帶緊繃不送氣，製造出強烈節奏卡點感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '暗夜主宰宣告 (Night Sovereign)',
              badge: '霸氣自信',
              form: 'Like the full moon rising into the sky, no one can stop our shining.',
              scene: '月夜中無拘無束展現自我的自信時刻'
            },
            {
              name: '日常生活敬語 (해요體)',
              badge: '生活推薦',
              form: '보름달이 뜨는 밤에 신나게 놀아봐요!',
              scene: '朋友或社群聚會時提議在滿月夜暢快出遊'
            },
            {
              name: '正式公告體 (하십시오體)',
              badge: '最高敬意',
              form: '보름달이 뜨는 아름다운 밤을 만끽하시기 바랍니다.',
              scene: '中秋晚會或官方觀星慶典主持致詞'
            }
          ],
          realLifeExample: {
            scenario: '夜跑或沉浸於專注創作的深夜時光',
            dialogue: [
              { speaker: 'Friend', text: '오늘 밤 달이 정말 크고 밝네!', trans: '今晚的月亮真的又大又亮呢！' },
              { speaker: 'You', text: '맞아, 보름달 뜨는 밤이니까 우리도 힘내서 달려보자!', trans: '對呀，正因為是滿月之夜，我們也充滿活力狂奔吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-kr-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:31',
      timeSec: 31.8,
      korean: 'With the pace, 더 빨리 더 높이',
      text: 'With the pace, 더 빨리 더 높이',
      romanization: 'With the pace, deo ppal-li deo nop-i',
      naturalTranslation: '跟上節奏步伐，更加迅速、攀登得更高！',
      pillChips: [
        {
          id: 'mp4',
          text: '더',
          rom: 'deo',
          type: 'adverb',
          typeLabel: '程度副詞 (更加/更)',
          lemma: '더',
          meaning: '更加 / 更為 / 再 (比較級)',
          explanation: '韓語極高頻的程度比較副詞，修飾後方的形容詞或副詞，表示程度加深。'
        },
        {
          id: 'mp5',
          text: '빨리',
          rom: 'ppal-li',
          type: 'adverb',
          typeLabel: '方式副詞 (快點/迅速)',
          lemma: '빠르다',
          meaning: '迅速地 / 快點',
          explanation: '源自形容詞「빠르다 (快的)」，轉化為副詞「빨리」，常用於催促或強調速度。'
        },
        {
          id: 'mp6',
          text: '높이',
          rom: 'nop-i',
          type: 'adverb',
          typeLabel: '方式副詞 (高高地/更高)',
          lemma: '높다',
          meaning: '高高地 / 向高處',
          explanation: '形容詞「높다 (高的)」接副詞後綴「-이」轉化為方式副詞，象徵向上躍升。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '介詞狀語 (With the pace) + 雙重副詞遞進修飾 (더 빨리 + 더 높이)',
          tokens: [
            { term: 'With the pace', role: '節奏狀語', desc: '指配合快節奏的速度與節拍。' },
            { term: '더 빨리', role: '速度比較副詞', desc: '更加迅速地奔馳。' },
            { term: '더 높이', role: '高度比較副詞', desc: '朝向更高的目標躍進。' }
          ]
        },
        pronunciation: {
          actualSound: '[With the pace 더 빨릴 더 노피]',
          singingTips: '「빨리」的 ㅃ 需清脆爆破，雙 ㄹ 連音舌尖緊貼上顎滑動；「높이」發生連音化讀作 [노피]。',
          rules: [
            {
              title: '連音化規則 (연음화)',
              badge: '收音音變',
              detail: '「높이」收音 ㅍ 遇到母音 ㅣ，轉移至後字首音讀為 [노피 (nop-i)]。'
            },
            {
              title: '雙濃音 ㅃ (Tense Bilabial)',
              badge: '發音重點',
              detail: '發「빨」時雙唇緊閉聚氣，瞬間爆破，絕不能漏氣送氣。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極限催促 (平語 반말)',
              badge: '歌詞原型',
              form: '더 빨리, 더 높이 뛰어봐!',
              scene: '體育訓練、跳舞練習時激勵夥伴加快速度跳更高'
            },
            {
              name: '日常指導敬語 (해요體)',
              badge: '生活推薦',
              form: '조금만 더 빠르고 높게 해볼까요?',
              scene: '健身教練向學員給予正向積極的動作指導'
            },
            {
              name: '企業願景正式體 (하십시오體)',
              badge: '最高敬意',
              form: '더 높고 빠른 혁신을 이루어내겠습니다.',
              scene: '新產品發布會宣示超越極限'
            }
          ],
          realLifeExample: {
            scenario: '體能訓練或期末衝刺時與隊友互相打氣',
            dialogue: [
              { speaker: 'Coach', text: '지치지 말고 마지막 한 세트 남았다!', trans: '不要洩氣，還剩最後一組！' },
              { speaker: 'You', text: '네! 더 빨리, 더 높이 달려보겠습니다!', trans: '好的！我會更迅速、跳得更高全力衝刺！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-kr-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:38',
      timeSec: 38.64,
      korean: '까만 밤 빛이나 진짜가 나타나',
      text: '까만 밤 빛이나 진짜가 나타나',
      romanization: 'kka-man bam bi-chi-na jin-jja-ga na-ta-na',
      naturalTranslation: '漆黑夜裡綻放光芒，真正的王者降臨！',
      pillChips: [
        {
          id: 'mp7',
          text: '까만',
          rom: 'kka-man',
          type: 'adjective',
          typeLabel: '冠形詞 (漆黑的)',
          lemma: '까맣다',
          meaning: '漆黑的 / 烏黑的',
          explanation: '形容詞「까맣다」接定語詞尾「-(으)ㄴ」變為「까만」，形容夜色深沉極致。'
        },
        {
          id: 'mp8',
          text: '빛이나',
          rom: 'bi-chi-na',
          type: 'phrase',
          typeLabel: '慣用詞組 (發光)',
          lemma: '빛이 나다',
          meaning: '發光 / 閃閃發亮',
          explanation: '「빛（光芒）」加上「나다（產生、發出）」，形容人或事物散發耀眼光彩。'
        },
        {
          id: 'mp9',
          text: '진짜',
          rom: 'jin-jja',
          type: 'noun',
          typeLabel: '名詞 (真正的王者/實力者)',
          lemma: '진짜',
          meaning: '真正 / 真的 (強烈對比冒牌者)',
          explanation: '日常高頻詞，此處指「真正的實力者、正牌主角」。'
        },
        {
          id: 'mp10',
          text: '나타나',
          rom: 'na-ta-na',
          type: 'verb',
          typeLabel: '動詞 (現身/登場)',
          lemma: '나타나다',
          meaning: '現身 / 顯現 / 登場',
          explanation: '動詞「나타나다」的非格式體平語，生動表現焦點主角降臨的瞬間。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '定語修飾句 (까만 밤) + 主謂慣用語 (빛이 나) + 主格標記主謂句 (진짜가 나타나)',
          tokens: [
            { term: '까만 밤', role: '時間狀語', desc: '漆黑的夜晚。' },
            { term: '빛이 나', role: '謂語結構', desc: '光芒綻放。' },
            { term: '진짜가 나타나', role: '主動結構', desc: '真正的實力者現身登場。' }
          ]
        },
        pronunciation: {
          actualSound: '[까만 밤 비치나 진짜가 나타나]',
          singingTips: '連續兩句押「-나 (-na)」韻，極具押韻律動與衝擊力！',
          rules: [
            {
              title: '連音化 (Liaison)',
              badge: '發音重點',
              detail: '「빛이」收音 ㅊ 移到後方 ㅇ 位置，讀作 [비치 (bi-chi)]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '王者自信登場 (True Authenticity)',
              badge: '氣場全開',
              form: 'When true talent steps up, the entire room lights up.',
              scene: '用無可辯駁的實力閃耀登場'
            },
            {
              name: '日常稱讚敬語 (해요體)',
              badge: '生活推薦',
              form: '어두운 곳에서도 진짜 실력은 빛이 나요.',
              scene: '向默默耕耘的同事或朋友表達真誠肯定'
            },
            {
              name: '正式致詞 (하십시오體)',
              badge: '最高敬意',
              form: '진정한 실력자가 마침내 무대에 나타났습니다.',
              scene: '大型頒獎典禮介紹重量級嘉賓登場'
            }
          ],
          realLifeExample: {
            scenario: '登上舞台或在關鍵比賽中完美發揮',
            dialogue: [
              { speaker: 'Judge', text: '무대 위에서 완전 빛이 나네요!', trans: '在舞台上真的散發耀眼光芒呢！' },
              { speaker: 'You', text: '감사합니다, 진짜 실력을 보여드리고 싶었습니다!', trans: '謝謝您，我想展現真正的實力！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-kr-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:41',
      timeSec: 41.2,
      korean: '세상을 불태워라 (baby, do you see me now?)',
      text: '세상을 불태워라 (baby, do you see me now?)',
      romanization: 'se-sang-eul bul-tae-wo-ra (baby, do you see me now?)',
      naturalTranslation: '讓世界燃燒吧！親愛的，你現在看見我了嗎？',
      pillChips: [
        {
          id: 'mp11',
          text: '세상을',
          rom: 'se-sang-eul',
          type: 'noun-object',
          typeLabel: '受格名詞 (世界)',
          lemma: '세상 + -을',
          meaning: '世界 (受格標記)',
          explanation: '名詞「세상 (世界)」接受格助詞「-을」，作為後方動作「불태우다 (燃燒)」的受詞。'
        },
        {
          id: 'mp12',
          text: '불태워라',
          rom: 'bul-tae-wo-ra',
          type: 'verb-imperative',
          typeLabel: '命令祈使語尾',
          lemma: '불태우다 + -아/어라',
          meaning: '燃燒吧 / 點燃熱情吧',
          explanation: '使役動詞「불태우다 (點燃/燃燒)」接書面命令語尾「-아/어라」，展現磅礴氣勢。'
        },
        {
          id: 'mp13',
          text: 'see me now',
          rom: '/siː miː naʊ/',
          type: 'idiom',
          typeLabel: '流行認可反問句',
          lemma: 'see someone now',
          meaning: '見證我的成長與光芒',
          explanation: '英文流行名句，常用於證明自己蛻變成熟後向質疑者宣示實力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '賓格標記受詞 (세상을) + 強烈命令語尾動詞 (불태워라) + 英文現在進行反問句 (do you see me now)',
          tokens: [
            { term: '세상', role: '賓語名詞', desc: '全世界。' },
            { term: '-을', role: '目的格助詞', desc: '標註動作受詞。' },
            { term: '불태우다', role: '使役動詞', desc: '使…燃燒、點燃熱火。' },
            { term: '-아/어라', role: '直接命令語尾', desc: '口號、歌詞與文學書面中的強烈祈使語氣。' }
          ]
        },
        pronunciation: {
          actualSound: '[세상을 불태워라 / do you see me now]',
          singingTips: '「불태」重音落在「태」的送氣音 ㅌ 上，釋放強大爆發力。',
          rules: [
            {
              title: '舌尖流音 ㄹ (Alveolar Flap)',
              badge: '發音重點',
              detail: '「불」收音 ㄹ 遇後字 ㅌ 時輕觸齒齦，乾淨收音。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '燃燒宣告 (命令體 명령형)',
              badge: '歌詞原型',
              form: '온 세상을 뜨겁게 불태워라!',
              scene: '演唱會萬人齊聚時的主唱熱血吶喊'
            },
            {
              name: '日常生活鼓勵 (해요體)',
              badge: '生活推薦',
              form: '우리 열정으로 세상을 한번 불태워봐요!',
              scene: '創業團隊在誓師大會上彼此鼓勵熱血奮鬥'
            },
            {
              name: '正式演說體 (하십시오體)',
              badge: '最高敬意',
              form: '저희의 열정이 세상을 밝히기를 기대합니다.',
              scene: '官方慶典演說中寄語年輕一代綻放光彩'
            }
          ],
          realLifeExample: {
            scenario: '專案上線前夕團隊齊心全力以赴',
            dialogue: [
              { speaker: 'Leader', text: '드디어 오늘 밤 프로젝트 오픈이다!', trans: '終於在今晚專案正式上線了！' },
              { speaker: 'You', text: '모두 고생 많으셨습니다, 세상을 불태울 준비 되었습니다!', trans: '大家都辛苦了，已經做好驚豔全世界的準備了！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-kr-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:44',
      timeSec: 44.0,
      korean: '거울아, 거울아 말해봐, 알잖아',
      text: '거울아, 거울아 말해봐, 알잖아',
      romanization: 'geo-u-ra, geo-u-ra mal-hae-bwa, al-ja-na',
      naturalTranslation: '魔鏡啊魔鏡，說說看吧，你早就明白的！',
      pillChips: [
        {
          id: 'mp14',
          text: '거울아',
          rom: 'geo-u-ra',
          type: 'vocative',
          typeLabel: '呼格助詞 (魔鏡啊)',
          lemma: '거울 + -아',
          meaning: '魔鏡啊 (擬人化稱呼)',
          explanation: '名詞「거울 (鏡子)」有收音，接親暱/擬人呼格助詞「-아」，借用白雪公主童話意象。'
        },
        {
          id: 'mp15',
          text: '말해봐',
          rom: 'mal-hae-bwa',
          type: 'verb-attempt',
          typeLabel: '嘗試祈使 (說說看)',
          lemma: '말하다 + -아/어 보다',
          meaning: '說說看吧 / 說出來試試',
          explanation: '動詞「말하다 (說)」接輔助動詞「-아/어 보다 (嘗試看看)」，為非格式體平語。'
        },
        {
          id: 'mp16',
          text: '알잖아',
          rom: 'al-ja-na',
          type: 'verb-confirmation',
          typeLabel: '確認事實語尾 (你懂的)',
          lemma: '알다 + -잖아(요)',
          meaning: '你不是早就知道嗎 / 你心知肚明',
          explanation: '「알다 (知道)」+ 語尾「-잖아」，用在「雙方都知道的事實，尋求共識或提醒對方」的場合。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '童話呼格擬人 (거울아, 거울아) + 嘗試祈使結構 (말해봐) + 事實確認復合語尾 (알잖아)',
          tokens: [
            { term: '거울', role: '名詞', desc: '鏡子。' },
            { term: '-아', role: '呼格助詞', desc: '有收音的名詞後接的親切呼喚助詞。' },
            { term: '말해봐', role: '複合動詞', desc: '「말하다 + -아 보다」嘗試表達。' },
            { term: '-잖아', role: '確認終結語尾', desc: '提醒對方早已熟知的事實。' }
          ]
        },
        pronunciation: {
          actualSound: '[거우라 거우라 말해봐 알자나]',
          singingTips: '「거울아」連音化讀成 [거우라]；「알잖아」中的 ㅈ 受到收音影響帶點濃音化。',
          rules: [
            {
              title: '連音化 (Liaison)',
              badge: '收音規則',
              detail: '「거울」收音 ㄹ 連至後方 ㅇ，發音為流暢的 [거우라]。'
            },
            {
              title: '事實確認語尾 -잖아 發音',
              badge: '口語語感',
              detail: '收音 ㄹ 後接 ㅈ，自然滑讀為 [알자나]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '自信問答 (平語 반말)',
              badge: '歌詞原型',
              form: '거울아, 내가 최고인 거 알잖아?',
              scene: '對著鏡子梳理造型、給予自己強大信心暗示'
            },
            {
              name: '日常提醒敬語 (해요體)',
              badge: '生活推薦',
              form: '거울아, 솔직하게 말해줘, 다 알고 있잖아요.',
              scene: '朋友間開玩笑地互相提醒早已熟知的小秘密'
            },
            {
              name: '正式陳述體 (하십시오體)',
              badge: '最高敬意',
              form: '이미 모든 사실을 인지하고 계실 줄 압니다.',
              scene: '正式商務對話中委婉表達「雙方皆已掌握情況」'
            }
          ],
          realLifeExample: {
            scenario: '出門前化妝鏡前欣賞完美穿搭',
            dialogue: [
              { speaker: 'Friend', text: '오늘 스타일링 진짜 신경 많이 썼네?', trans: '今天造型真的很用心打扮呢？' },
              { speaker: 'You', text: '거울아 말해봐, 오늘 내 코디 최고인 거 알잖아!', trans: '鏡子啊說說看吧，你知道我今天穿搭最亮眼的吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-kr-6',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '02:07',
      timeSec: 127.6,
      korean: "하늘을 봐, we gonna shine bright, 내 길을 가, baby, it's our time",
      text: "하늘을 봐, we gonna shine bright, 내 길을 가, baby, it's our time",
      romanization: "ha-neul-eul bwa, we gonna shine bright, nae gil-eul ga, baby, it's our time",
      naturalTranslation: '仰望星空，我們將綻放璀璨光芒；走我自己的路，寶貝，這屬於我們的時代！',
      pillChips: [
        {
          id: 'mp17',
          text: '하늘을',
          rom: 'ha-neul-eul',
          type: 'noun-object',
          typeLabel: '受格名詞 (天空)',
          lemma: '하늘 + -을',
          meaning: '天空 (受格標記)',
          explanation: '名詞「하늘 (天空)」接受格助詞「-을」，比喻廣袤無垠的星空與遠大夢想。'
        },
        {
          id: 'mp18',
          text: '봐',
          rom: 'bwa',
          type: 'verb-imperative',
          typeLabel: '動詞祈使 (看吧)',
          lemma: '보다',
          meaning: '看 / 仰望',
          explanation: '動詞「보다」的非格式體平語，意為「抬頭看、端詳」。'
        },
        {
          id: 'mp19',
          text: '내 길을',
          rom: 'nae gil-eul',
          type: 'noun-phrase',
          typeLabel: '名詞短語 (我自己的路)',
          lemma: '나의 길 + -을',
          meaning: '我自己的道路 / 獨特人生路徑',
          explanation: '第一人稱所有格「내 (我的)」+ 名詞「길 (道路)」+ 受格「-을」，象徵不隨波逐流。'
        },
        {
          id: 'mp20',
          text: '가',
          rom: 'ga',
          type: 'verb-imperative',
          typeLabel: '動詞 (前進/走去)',
          lemma: '가다',
          meaning: '走 / 邁進',
          explanation: '動詞「가다」的平語祈使型態，堅定地邁步向前。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '受格祈使句 (하늘을 봐) + 英文未來祈使宣告 (we gonna shine bright) + 獨立主格行進句 (내 길을 가) + 時代宣告 (it’s our time)',
          tokens: [
            { term: '하늘을 봐', role: '祈使動作', desc: '抬頭仰望廣闊夜空。' },
            { term: 'we gonna shine bright', role: '英文未來願景', desc: '堅信自身璀璨閃耀。' },
            { term: '내 길을 가', role: '自主宣言', desc: '堅持走屬於自己的獨立道路。' },
            { term: "it's our time", role: '主格宣告', desc: '屬於我們的輝煌時刻已經到來。' }
          ]
        },
        pronunciation: {
          actualSound: '[하느를 봐 we gonna shine bright 내 기를 가 baby it’s our time]',
          singingTips: '「하늘을」連音為 [하느를]，旋律舒展悠長；「내 길을」連音為 [내 기를]，感情飽滿。',
          rules: [
            {
              title: '連續連音 (Sequential Liaison)',
              badge: '發音重點',
              detail: '「하늘」收音 ㄹ 連到「을」發音為 [하느를]；「길」連到「을」發音為 [기를]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '逐夢獨立宣言 (平語 반말)',
              badge: '歌詞原型',
              form: '하늘을 봐, 난 내 길을 갈 거야.',
              scene: '對未來充滿信心時向知心朋友立下人生誓言'
            },
            {
              name: '溫柔鼓勵敬語 (해요體)',
              badge: '生活推薦',
              form: '하늘을 봐요, 우리 모두 각자의 길에서 빛날 거예요.',
              scene: '在畢業季或離別時刻給予後輩同伴溫暖期許'
            },
            {
              name: '立志致詞體 (하십시오體)',
              badge: '最高敬意',
              form: '높은 하늘을 바라보며 저만의 길을 묵묵히 걷겠습니다.',
              scene: '正式自傳或演講中表達堅定不移的奮鬥精神'
            }
          ],
          realLifeExample: {
            scenario: '面對未來抉擇時堅定走出自己的道路',
            dialogue: [
              { speaker: 'Mentor', text: '남들과 다른 길을 가는 게 두렵지 않니?', trans: '走跟別人不一樣的路，不覺得害怕嗎？' },
              { speaker: 'You', text: '하늘을 보면 용기가 생겨요. 제 길을 가면 결국 빛날 걸 압니다!', trans: '只要抬頭看天空就會湧現勇氣。我知道只要走自己的路最終一定會發光！' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 🇺🇸 英語嘻哈與流行歌詞研習句目 (English Hip-Hop & Pop Vocal Sentences)
    // =========================================================================
    {
      id: 'mn-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:10',
      timeSec: 10.8,
      korean: 'Zalabim zalabam zalaboom, I shine so bright in the gloom',
      text: 'Zalabim zalabam zalaboom, I shine so bright in the gloom',
      romanization: '/zæləbɪm zæləbæm zæləbuːm, aɪ ʃaɪn soʊ braɪt ɪn ðə ɡluːm/',
      naturalTranslation: '薩拉賓、薩拉邦、薩拉崩！我在濃重幽暗中綻放極致耀眼的光芒！',
      pillChips: [
        {
          id: 'mp21',
          text: 'Zalabim zalabam zalaboom',
          rom: '/zæ-lə-bɪm zæ-lə-bæm zæ-lə-buːm/',
          type: 'incantation',
          typeLabel: '魔法咒語三連重擊',
          lemma: 'Zalabim zalabam zalaboom',
          meaning: '月夜魔法咒語 (重拍卡點打擊)',
          explanation: '致敬經典魔法咒語音節（類似 Abracadabra），透過三連發重音韻律製造魔幻暗夜氛圍。'
        },
        {
          id: 'mp22',
          text: 'shine so bright',
          rom: '/ʃaɪn soʊ braɪt/',
          type: 'verb-phrase',
          typeLabel: '動詞短語 (極致閃耀)',
          lemma: 'shine bright',
          meaning: '散發無比耀眼的光輝',
          explanation: '動詞「shine」加上程度副詞「so bright」，形成明亮純粹的視覺對比。'
        },
        {
          id: 'mp23',
          text: 'in the gloom',
          rom: '/ɪn ðə ɡluːm/',
          type: 'contrast-imagery',
          typeLabel: '幽暗幽冥意象',
          lemma: 'gloom',
          meaning: '幽暗低谷 / 陰鬱陰霾',
          explanation: '名詞「gloom（陰暗/陰沉）」，與前方的「shine so bright」形成強烈的明暗光影反差。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '節奏咒語感嘆短語 (Zalabim zalabam zalaboom) + 主謂補主幹結構 (I shine so bright [Prepositional Phrase])',
          tokens: [
            { term: 'Zalabim zalabam zalaboom', role: '咒語擬聲', desc: '三連發強拍打擊，啟動魔幻月夜開場。' },
            { term: 'I', role: '主語', desc: '主格第一人稱單數。' },
            { term: 'shine', role: '謂語動詞', desc: '發光、綻放光芒。' },
            { term: 'so bright', role: '程度狀語', desc: '修飾 shine 的亮度。' },
            { term: 'in the gloom', role: '介詞處所狀語', desc: '在幽暗陰鬱的逆境深處。' }
          ]
        },
        pronunciation: {
          actualSound: '[zæləbɪm zæləbæm zæləbuːm / aɪ ʃaɪn soʊ braɪt ɪn ðə ɡluːm]',
          singingTips: '「boom」與「gloom」押長元音 /uː/ 韻，口型收圓，氣息悠長空靈。',
          rules: [
            {
              title: '長元音 /uː/ 連鎖押韻 (Chain Rhyme)',
              badge: '魔幻韻律',
              detail: 'moon, loose, boom, gloom 均押長元音 /uː/，口型收圓，氣息悠長。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台魔幻自傲 (Mystic Magic)',
              badge: '歌詞原型',
              form: "Even in the deepest gloom, I'm gonna shine the brightest.",
              scene: '演唱會主歌向萬千歌迷展示無畏逆境的光芒'
            },
            {
              name: '溫暖激勵口吻 (Casual Polite)',
              badge: '生活推薦',
              form: 'When times feel gloomy, remember you have your own light to shine.',
              scene: '好友失落低潮時給予最誠摯的暖心激勵'
            },
            {
              name: '勵志演說體 (Formal Inspiring)',
              badge: '最高敬意',
              form: 'True brilliance emerges most vividly in times of hardship.',
              scene: '畢業典禮或年會演講鼓舞聽眾逆光前行'
            }
          ],
          realLifeExample: {
            scenario: '深夜遭遇低潮困境時自我激勵',
            dialogue: [
              { speaker: 'Friend', text: 'Everything feels so uncertain and gloomy lately.', trans: '最近感覺一切都很迷惘灰暗。' },
              { speaker: 'You', text: 'I know, but remember: the moon shines brightest in the deepest gloom.', trans: '我明白，但要記得：月亮正是在最幽暗之處才綻放最璀璨的光芒！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:18',
      timeSec: 18.0,
      korean: 'Fog thickens, night vision, where we gonna end up is unwritten',
      text: 'Fog thickens, night vision, where we gonna end up is unwritten',
      romanization: '/fɔːɡ ˈθɪkənz naɪt ˈvɪʒən wɛr wi ˈɡənə ɛnd ʌp ɪz ʌnˈrɪtən/',
      naturalTranslation: '濃霧漸漸瀰漫，開啟夜視視野；我們最終的去向，仍是一幅未繪就的篇章！',
      pillChips: [
        {
          id: 'mp24',
          text: 'fog thickens',
          rom: '/fɔːɡ ˈθɪkənz/',
          type: 'verb-phrase',
          typeLabel: '自然動態描繪 (濃霧瀰漫)',
          lemma: 'thicken',
          meaning: '迷霧漸濃 / 視線受阻',
          explanation: '動詞「thicken」意為變厚、變濃稠，此處營造神秘深邃的夜幕氛圍。'
        },
        {
          id: 'mp25',
          text: 'night vision',
          rom: '/naɪt ˈvɪʒən/',
          type: 'compound-noun',
          typeLabel: '複合名詞 (夜視能力)',
          lemma: 'night vision',
          meaning: '暗夜視野 / 洞悉未來的敏銳度',
          explanation: '指黑暗中精準鎖定目標的夜視能力，引申為不畏迷霧的自信與洞察力。'
        },
        {
          id: 'mp26',
          text: 'unwritten',
          rom: '/ʌnˈrɪtən/',
          type: 'adjective',
          typeLabel: '形容詞 (未曾寫就的)',
          lemma: 'unwritten',
          meaning: '未被定型 / 充滿無限可能',
          explanation: '前綴「un- (未)」加「written (書寫的)」，象徵命運掌握在自己手中，尚未被任何人定義。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '獨立主謂短語 (Fog thickens) + 名詞短語省略結構 (night vision) + 名詞性從句主語 (where we gonna end up) + 繫表結構 (is unwritten)',
          tokens: [
            { term: 'Fog thickens', role: '主謂主幹 1', desc: '大霧變濃。' },
            { term: 'night vision', role: '定語省略', desc: '開啟暗夜視野。' },
            { term: 'where we gonna end up', role: '主語從句', desc: '我們最後抵達的終點。' },
            { term: 'is unwritten', role: '繫表結構', desc: '尚未被定義、無限可能。' }
          ]
        },
        pronunciation: {
          actualSound: '[fɔːɡ ˈθɪkənz naɪt ˈvɪʒən wɛr wi ˈɡənə ɛnd ʌp ɪz ʌnˈrɪtən]',
          singingTips: '「thickens」與「vision」尾音帶清脆輕聲；「end up is」快速滑動連讀為 [ɛndʌpɪz]。',
          rules: [
            {
              title: '連音滑動 (Flap / T-voicing)',
              badge: '連音技巧',
              detail: '「end up is」中子音與母音緊密銜接，流暢過渡不出現停頓。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '冒險自傲 (Adventure Spirit)',
              badge: '歌詞原型',
              form: 'The future is unwritten, so let us make our own rules.',
              scene: '面對充滿未知的新企劃展現昂揚鬥志'
            },
            {
              name: '日常寬慰口吻 (Casual Polite)',
              badge: '生活推薦',
              form: "Don't worry too much about the ending; the story is still unwritten.",
              scene: '在朋友焦慮未來發展時給予寬慰'
            },
            {
              name: '正式致詞 (Formal Philosophical)',
              badge: '最高敬意',
              form: 'Tomorrow remains unwritten, awaiting the courage of our actions.',
              scene: '典禮演說談及開創未來'
            }
          ],
          realLifeExample: {
            scenario: '大學畢業或轉職新領域時暢想未來',
            dialogue: [
              { speaker: 'Colleague', text: 'Are you sure about stepping into this new industry?', trans: '你確定要踏入這個全新的領域嗎？' },
              { speaker: 'You', text: "Yes! Where I'm gonna end up is unwritten, and that's the most exciting part.", trans: '沒錯！最終能走到哪裡尚未定數，而這正是最讓人興奮的地方！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:10',
      timeSec: 70.4,
      korean: "Charismatic, energetic, it's a habit, oh, she stuntin', she stuntin'",
      text: "Charismatic, energetic, it's a habit, oh, she stuntin', she stuntin'",
      romanization: "/ˌkærɪzˈmætɪk ˌɛnərˈdʒɛtɪk ɪts ə ˈhæbɪt oʊ ʃi ˈstʌntɪn ʃi ˈstʌntɪn/",
      naturalTranslation: '超凡魅力、活力滿點，這全都是日常習慣！噢看她炫耀全場、光芒四射！',
      pillChips: [
        {
          id: 'mp27',
          text: 'charismatic',
          rom: '/ˌkærɪzˈmætɪk/',
          type: 'adjective',
          typeLabel: '形容詞 (極具魅力的)',
          lemma: 'charisma',
          meaning: '領袖氣場 / 超凡吸引力',
          explanation: '形容自帶強大氣場與光環，舉手投足吸引眾人目光。'
        },
        {
          id: 'mp28',
          text: 'energetic',
          rom: '/ˌɛnərˈdʒɛtɪk/',
          type: 'adjective',
          typeLabel: '形容詞 (充滿活力的)',
          lemma: 'energy',
          meaning: '精力充沛 / 活力滿點',
          explanation: '形容舞台表演爆發力十足，節奏感與感染力滿分。'
        },
        {
          id: 'mp29',
          text: "it's a habit",
          rom: "/ɪts ə ˈhæbɪt/",
          type: 'phrase',
          typeLabel: '口語名句 (早已成習慣)',
          lemma: 'habit',
          meaning: '習慣成自然 / 稀鬆平常',
          explanation: '自信地表示優秀與耀眼對自己來說不是刻意為之，而是日常刻進骨子裡的習慣。'
        },
        {
          id: 'mp30',
          text: "stuntin'",
          rom: "/ˈstʌntɪn/",
          type: 'hiphop-slang',
          typeLabel: '嘻哈俚語 (大放異彩/秀翻全場)',
          lemma: 'stunt',
          meaning: '炫技 / 大展魅力秀出風采',
          explanation: '嘻哈街頭高頻俚語（源自 stunt），形容自信展現穿搭、身手或成就，驚豔全場。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '並列雙重形容詞列舉 (Charismatic, energetic) + 繫表客觀陳述 (it’s a habit) + 第三人生進行俚語 (she stuntin’)',
          tokens: [
            { term: 'Charismatic, energetic', role: '並列定語', desc: '連鎖形容詞列舉。' },
            { term: "it's a habit", role: '主繫表結構', desc: '表示早已習以為常。' },
            { term: 'oh, she stuntin’', role: '感嘆進行句', desc: 'AAVE 語法省略系詞 is，突出動作即時感。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˌkærɪzˈmætɪk ˌɛnərˈdʒɛtɪk ɪts ə ˈhæbɪt oʊ ʃi ˈstʌntɪn ʃi ˈstʌntɪn]',
          singingTips: 'Rap Flow 極速連打，句尾「-tic」短促俐落；「stuntin’」的 -ing 縮讀為 -in，帶點美式彈舌。',
          rules: [
            {
              title: '嘻哈弱讀與縮讀 (G-Dropping)',
              badge: '嘻哈技巧',
              detail: '詞尾「stunting」中的 -ing 縮讀為 [ɪn]，製造俐落乾脆的街頭律動。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈酷炫 (Street Cool)',
              badge: '歌詞原型',
              form: "Look at her outfit tonight, she's straight stuntin'!",
              scene: '在派對或演唱會讚美朋友的絕美穿搭與氣場'
            },
            {
              name: '日常真誠稱讚 (Casual Polite)',
              badge: '生活推薦',
              form: 'You are so charismatic on stage; it feels totally natural for you!',
              scene: '演出後向表演者表達由衷的佩服'
            },
            {
              name: '正式評價體 (Formal Commendation)',
              badge: '最高敬意',
              form: 'Her exceptional charisma and energy captivated the entire audience.',
              scene: '媒體樂評報導讚譽藝人驚人的舞台號召力'
            }
          ],
          realLifeExample: {
            scenario: '好友盛裝出席派對，全場焦點瞬間聚集',
            dialogue: [
              { speaker: 'Friend A', text: 'Wow, look at you! That jacket is absolute perfection.', trans: '哇，看看妳！這件外套簡直太完美了。' },
              { speaker: 'You', text: "Thanks! Charismatic and energetic, it's just a habit, you know?", trans: '謝啦！超凡魅力與活力四射，早已是日常習慣了，妳懂的！' }
            ]
          }
        }
      }
    },
    {
      id: 'mn-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '02:28',
      timeSec: 148.5,
      korean: "Outta this world, we be takin' off, get in, all eyes on me",
      text: "Outta this world, we be takin' off, get in, all eyes on me",
      romanization: "/ˈaʊtə ðɪs wɜːrld wi bi ˈteɪkɪŋ ɔːf ɡɛt ɪn ɔːl aɪz ɑːn mi/",
      naturalTranslation: '超凡脫俗、超越星際！我們即將起飛，快跟上來，全場焦點都在我身上！',
      pillChips: [
        {
          id: 'mp31',
          text: 'outta this world',
          rom: '/ˈaʊtə ðɪs wɜːrld/',
          type: 'idiom',
          typeLabel: '流行成語 (超凡脫俗/跨越星際)',
          lemma: 'out of this world',
          meaning: '絕妙非凡 / 震撼超凡',
          explanation: '口語縮讀「out of」為「outta」，形容事物令人驚嘆到彷彿超越這個星球的境界。'
        },
        {
          id: 'mp32',
          text: "we be takin' off",
          rom: "/wi bi ˈteɪkɪŋ ɔːf/",
          type: 'aave-grammar',
          typeLabel: '常態體 (我們持續高飛)',
          lemma: 'take off',
          meaning: '騰空起飛 / 事業迅速起飛',
          explanation: '使用非裔美語 (AAVE) 常態動詞「be」，表示「我們隨時都在不斷起飛突破」的自信節奏。'
        },
        {
          id: 'mp33',
          text: 'get in',
          rom: '/ɡɛt ɪn/',
          type: 'phrasal-verb',
          typeLabel: '動詞短語 (快上車/加入我們)',
          lemma: 'get in',
          meaning: '加入同行 / 快坐進飛船',
          explanation: '直爽的短語邀請，呼喚聽眾一起乘上太空飛船探索未知。'
        },
        {
          id: 'mp34',
          text: 'all eyes on me',
          rom: '/ɔːl aɪz ɑːn mi/',
          type: 'punchline',
          typeLabel: '經典宣言 (萬眾矚目)',
          lemma: 'all eyes on someone',
          meaning: '萬眾矚目 / 全場焦點匯聚',
          explanation: '嘻哈傳奇經典名句（致敬 2Pac 傳世名篇），象徵無論身處何地皆是無可撼動的核心焦點。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '介詞修飾成語 (Outta this world) + AAVE 習慣體進行式 (we be takin’ off) + 祈使動詞 (get in) + 全稱受格焦點短語 (all eyes on me)',
          tokens: [
            { term: 'Outta this world', role: '狀態修飾', desc: '超越凡俗的星際氣場。' },
            { term: 'we be takin’ off', role: '持續性動態', desc: '勢不可擋的上升姿態。' },
            { term: 'get in', role: '祈使呼喚', desc: '邀請志同道合者加入。' },
            { term: 'all eyes on me', role: '高潮 Punchline', desc: '宣告舞台與焦點的絕對統治。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˈaʊtə ðɪs wɜːrld wi bi ˈteɪkɪn ɔːf ɡɛt ɪn ɔːl aɪz ɑːn mi]',
          singingTips: '「Outta」雙寫 t 轉為閃音；「all eyes on me」的 z 與 o 連讀為 [aɪz ɑːn mi]，氣勢萬鈞！',
          rules: [
            {
              title: '連音與語音同化 (Liaison & Voicing)',
              badge: '重拍技巧',
              detail: '「eyes on me」中的濁輔音 z 與後方元音 ɑː 緊密相連，發出渾厚有力的胸腔共鳴。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '王者謝幕 (Concert Climax)',
              badge: '歌詞原型',
              form: "We're taking off right now, keep all eyes on us!",
              scene: '演唱會安可曲前夕全場吶喊達到最高峰'
            },
            {
              name: '日常熱血呼喚 (Casual Polite)',
              badge: '生活推薦',
              form: "Hop on in, we're heading toward something extraordinary!",
              scene: '邀請朋友參與熱血自駕旅行或全新創作冒險'
            },
            {
              name: '正式宣告體 (Formal Visionary)',
              badge: '最高敬意',
              form: 'Our visionary journey has commenced, drawing global recognition.',
              scene: '跨國科技或文娛品牌宣布全球戰略啟航'
            }
          ],
          realLifeExample: {
            scenario: '帶領團隊展開全新專案與成果展示',
            dialogue: [
              { speaker: 'Partner', text: 'Is the team ready for the product worldwide launch?', trans: '團隊已經做好全球產品發布的準備了嗎？' },
              { speaker: 'You', text: "We are outta this world and takin' off! Just watch, all eyes on us!", trans: '我們已經超凡就緒、即將起飛！看著吧，全世界的目光都將聚焦在我們身上！' }
            ]
          }
        }
      }
    }
  ]
};
