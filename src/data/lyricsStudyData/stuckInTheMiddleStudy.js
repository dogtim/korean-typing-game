// BABYMONSTER - 《Stuck In The Middle》 全英語抒情深度研習資料包
// 本曲為 BABYMONSTER 標誌性的純英文（100% All-English）抒情靈魂代表作！
// 特色：全英語浪漫抒情深度解析（英語感情成語、戀愛心理詞彙、假設語氣文法、抒情歌唱換氣與氣聲技巧、語域正式度對比與真實情感對話）

export const STUCK_IN_THE_MIDDLE_STUDY_DATA = {
  id: 'stuck-in-the-middle',
  title: 'Stuck In The Middle',
  artist: 'BABYMONSTER',
  album: '數位單曲《Stuck In The Middle》',
  year: '2024',
  youtubeId: 'GsV1i0QHi-o', // Official MV
  altYoutubeIds: ['u1GVtUHb2TM', 'aDcMNi_qQyM', 'KaM7ZxoGQuE'],
  sentences: [
    {
      id: 'sitm-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:04',
      timeSec: 4.6,
      korean: 'All this time we’ve been together, and I still don’t know how you feel',
      text: 'All this time we’ve been together, and I still don’t know how you feel',
      romanization: '/ɔːl ðɪs taɪm wiːv bɪn təˈɡɛðər ənd aɪ stɪl doʊnt noʊ haʊ juː fiːl/',
      naturalTranslation: '明明朝夕相處了這麼長久，我卻依然讀不懂你的真心究竟在想些什麼。',
      pillChips: [
        {
          id: 'sp1',
          text: 'All this time',
          rom: '/ɔːl ðɪs taɪm/',
          type: 'time-idiom',
          typeLabel: '時間頻率成語副詞',
          lemma: 'all this time',
          meaning: '這一整段時間以來 / 這麼久以來',
          explanation: '表達長久以來的時間跨度，帶有「明明歷經了這麼長的時間，卻始終未能明白」的感傷與悵惘語氣。'
        },
        {
          id: 'sp2',
          text: 'we’ve been together',
          rom: '/wiːv bɪn təˈɡɛðər/',
          type: 'verb-tense-aspect',
          typeLabel: '現在完成進行體態',
          lemma: 'we have been together',
          meaning: '我們始終長相廝守在一起',
          explanation: '現在完成式（have been）強調從過去某個時間點直到說話的當下，雙方一直保持著密切相伴的親暱關係。'
        },
        {
          id: 'sp3',
          text: 'how you feel',
          rom: '/haʊ juː fiːl/',
          type: 'noun-clause',
          typeLabel: '疑問詞引導的名詞子句 (間接問句)',
          lemma: 'how + subject + verb',
          meaning: '你的心意感受如何',
          explanation: '作為「know」的受詞，表達內心真正的情愫與情感走向。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '時間副詞狀語 (All this time) + 現在完成時主句 (we\'ve been together) + 並列轉折現在簡單句 (and I still don\'t know...) + 名詞子句 (how you feel)',
          tokens: [
            { term: 'All this time', role: '時間狀語片語', desc: '強調時間的漫長與無奈感。' },
            { term: 'we\'ve been', role: '現在完成式', desc: '表達狀態的持續。' },
            { term: 'still', role: '副詞', desc: '強調儘管時間已久，狀況依然未變。' },
            { term: 'how you feel', role: '間接問句', desc: '標準陳述語序（疑問詞+主詞+動詞），作為受詞。' }
          ]
        },
        pronunciation: {
          actualSound: '[ɔːl ðɪs taɪm wiːv bɪn təˈɡɛðər ən aɪ stɪl doʊn noʊ haʊ juː fiːl]',
          singingTips: '抒情慢歌的氣息支撐要穩。「All this time」字頭舌尖抵住上齒音，and 弱讀為 [ən]，feel 尾音 [l] 舌尖輕抵，聲線柔和延展。',
          rules: [
            {
              title: '連音與弱讀 (Reduction & Elision)',
              badge: '抒情發音',
              detail: '「and I」連讀為 [ən-aɪ]，「don\'t know」口語中常縮讀為 [doʊn-noʊ] 或 [də-noʊ]，傳遞出迷茫嘆息的口吻。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '深情直率心聲 (Emotional Direct)',
              badge: '情話剖白',
              form: 'All this time we\'ve been together, and I still don\'t know how you feel.',
              scene: '深夜長談，向曖昧對象傾訴難以捉摸對方心思的脆弱感'
            },
            {
              name: '溫和委婉溝通 (Gentle Check-in)',
              badge: '日常溝通',
              form: 'We\'ve spent so much time together, but I\'d really love to understand what\'s on your mind.',
              scene: '希望更進一步了解伴侶想法時的體貼詢問'
            },
            {
              name: '成熟理性對話 (Mature Relationship Dialogue)',
              badge: '成熟溝通',
              form: 'Despite our long journey together, I feel there remains an emotional distance between us.',
              scene: '認真探討感情未來發展時的深層溝通'
            }
          ],
          realLifeExample: {
            scenario: '相處已久卻遲遲未確認關係的情侶在星空下散步',
            dialogue: [
              { speaker: 'Sophie', text: 'You know, all this time we\'ve been together, I still don\'t know how you feel about us.', trans: '你知道嗎，我們相處了這麼長的時間，我到現在依然不曉得你對我們的未來是怎麼想的。' },
              { speaker: 'Liam', text: 'I\'m sorry. I haven\'t been good at expressing it, but you mean the world to me.', trans: '對不起。我一直不太擅長表達，但對我來說，你比整個世界都重要。' }
            ]
          }
        }
      }
    },
    {
      id: 'sitm-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:15',
      timeSec: 15.6,
      korean: 'Maybe it’s make believe, maybe it can be true',
      text: 'Maybe it’s make believe, maybe it can be true',
      romanization: '/ˈmeɪbi ɪts ˈmeɪk bɪˈliːv ˈmeɪbi ɪt kæn biː truː/',
      naturalTranslation: '或許這一切只是我的自作多情與一廂情願，又或許，它真有成真的可能。',
      pillChips: [
        {
          id: 'sp4',
          text: 'make believe',
          rom: '/ˈmeɪk bɪˈliːv/',
          type: 'idiom-compound',
          typeLabel: '經典英文成語名詞',
          lemma: 'make-believe',
          meaning: '虛構假想 / 自欺欺人 / 夢幻泡影',
          explanation: '名詞片語，源於假裝遊戲（play make-believe），在愛情中用來形容「自己編織的美麗幻想、自欺欺人的錯覺」。'
        },
        {
          id: 'sp5',
          text: 'Maybe',
          rom: '/ˈmeɪbi/',
          type: 'adverb-possibility',
          typeLabel: '情態推測副詞',
          lemma: 'maybe',
          meaning: '也許 / 或許',
          explanation: '並列重複「Maybe... maybe...」營造出內心在「希望」與「幻滅」之間擺盪不定的猶豫心境。'
        },
        {
          id: 'sp6',
          text: 'can be true',
          rom: '/kæn biː truː/',
          type: 'modal-phrase',
          typeLabel: '情態可能動詞片語',
          lemma: 'can be true',
          meaning: '有可能是真的 / 能夠成真',
          explanation: '「can」在此表達客觀潛在的可能性，反映出心底仍留存著一絲微弱期待。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '對仗推測句 (Maybe it\'s [Noun Phrase], maybe it can be [Adjective])',
          tokens: [
            { term: 'Maybe', role: '推測副詞', desc: '引導猜想情境。' },
            { term: 'make believe', role: '名詞補語', desc: '虛幻想像、假想的美好。' },
            { term: 'can be', role: '情態謂語', desc: '具有化為現實的可能。' },
            { term: 'true', role: '形容詞補語', desc: '真實的、確鑿的。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˈmeɪbi ɪts ˈmeɪk bɪˈliːv ˈmeɪbi ɪt kən biː truː]',
          singingTips: '對仗結構中，第一個「make believe」尾音 /v/ 輕輕掠過收住，第二個「true」尾元音 /uː/ 帶有長音氣聲，表現出如夢初醒的空靈感。',
          rules: [
            {
              title: '音律對仗押韻 (Rhythmic Parallelism)',
              badge: '歌詞修辭',
              detail: '前後句型結構完全一致（Maybe it...），營造出少女心事中理性與感性的天平拉扯。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '文藝自語心境 (Poetic Monologue)',
              badge: '內心獨白',
              form: 'Maybe it\'s make believe, maybe it can be true.',
              scene: '望著窗外星空或聽歌時沉澱思緒的自言自語'
            },
            {
              name: '坦誠情感對話 (Candid Discussion)',
              badge: '真誠表白',
              form: 'I can\'t tell if I\'m just imagining things, or if there\'s genuinely something between us.',
              scene: '認真詢問朋友或對方彼此間是否存在真愛火花'
            }
          ],
          realLifeExample: {
            scenario: '好友看著你沉溺在曖昧關係裡，陪伴你梳理內心情緒',
            dialogue: [
              { speaker: 'Friend', text: 'Do you really think he likes you back?', trans: '你真的覺得他也喜歡你嗎？' },
              { speaker: 'You', text: 'I don\'t know... Maybe it\'s all make believe, but maybe it can be true.', trans: '我不知道…或許全都是我的一廂情願，但說不定也有成真的可能呀。' }
            ]
          }
        }
      }
    },
    {
      id: 'sitm-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:19',
      timeSec: 19.7,
      korean: 'I try to tell myself I’m not in love with you',
      text: 'I try to tell myself I’m not in love with you',
      romanization: '/aɪ traɪ tə tɛl maɪˈsɛlf aɪm nɑːt ɪn lʌv wɪð juː/',
      naturalTranslation: '我不斷努力地說服自己：我才沒有愛上你呢。',
      pillChips: [
        {
          id: 'sp7',
          text: 'try to tell myself',
          rom: '/traɪ tə tɛl maɪˈsɛlf/',
          type: 'verb-reflexive',
          typeLabel: '努力企圖 + 反身代名詞',
          lemma: 'try to do + tell oneself',
          meaning: '努力說服自己 / 心中自我催眠',
          explanation: '動詞「try」接不定詞表示竭力克制；反身代名詞「myself」代表理智的自我正試圖壓抑澎湃的情感。'
        },
        {
          id: 'sp8',
          text: 'in love with you',
          rom: '/ɪn lʌv wɪð juː/',
          type: 'idiom-state',
          typeLabel: '經典愛情狀態片語',
          lemma: 'be in love with someone',
          meaning: '深墜愛河 / 愛上某人',
          explanation: '最地道真摯的戀愛片語！介系詞「with」連接戀慕的對象，否定「not in love」往往反襯出「早已陷得無法自拔」的口是心非。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主詞動詞 (I try) + 不定詞受詞 (to tell myself) + 省略 that 的賓語子句 (I\'m not in love with you)',
          tokens: [
            { term: 'I try to', role: '主謂結構', desc: '付出心力試圖克制。' },
            { term: 'tell myself', role: '雙賓語', desc: '自己告誡自己。' },
            { term: 'be in love with', role: '固定片語', desc: '墜入愛河的持續狀態。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪ traɪ tə tɛl maɪˈsɛlf aɪm nɑːt ɪn lʌv wɪð juː]',
          singingTips: '「tell myself」連讀流暢，「not in love」中的 not 尾音 t 發生喉塞音停頓，「love with you」氣息由弱漸強，唱出壓抑又渴望的心情。',
          rules: [
            {
              title: '反諷情感語氣 (Irony & Denial in Pop Ballads)',
              badge: '情感演繹',
              detail: '歌詞中「I tell myself I don\'t love you」是典型抒情歌曲的心理防禦反動機制（Denial），語音越是急於否定，越顯愛意深重。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘴硬掩飾口吻 (Playful Denial)',
              badge: '傲嬌心理',
              form: 'I try to tell myself I\'m not in love with you.',
              scene: '面對強烈心動時，不甘輕易認輸的內心掙扎'
            },
            {
              name: '坦率坦白 (Honest Acceptance)',
              badge: '真誠剖白',
              form: 'I\'ve been fighting it for so long, but I have to admit that I\'ve fallen for you.',
              scene: '放下防備向對方坦承自己早已動心'
            }
          ],
          realLifeExample: {
            scenario: '與閨蜜分享最近的暗戀心事',
            dialogue: [
              { speaker: 'Bestie', text: 'You smile every time his name pops up on your screen!', trans: '只要他名字一跳上螢幕，你嘴角就忍不住一直笑！' },
              { speaker: 'You', text: 'Stop it! I try so hard to tell myself I\'m not in love with him, but it\'s impossible.', trans: '別鬧啦！我已經很努力催眠自己才沒有喜歡上他，但根本騙不了自己。' }
            ]
          }
        }
      }
    },
    {
      id: 'sitm-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:31',
      timeSec: 31.5,
      korean: 'I get emotional and hypothetical, wondering if there are all kinds of things I’m not supposed to know',
      text: 'I get emotional and hypothetical, wondering if there are all kinds of things I’m not supposed to know',
      romanization: '/aɪ ɡɛt ɪˈmoʊʃənl ənd ˌhaɪpəˈθɛtɪkl ˈwʌndərɪŋ ɪf ðɛr ɑːr ɔːl kaɪndz əv θɪŋz aɪm nɑːt səˈpoʊzd tə noʊ/',
      naturalTranslation: '我變得情緒敏感，總是胡思亂想做著各種假設，胡亂猜測著是不是有許多我本不該探究的秘密。',
      pillChips: [
        {
          id: 'sp9',
          text: 'emotional',
          rom: '/ɪˈmoʊʃənl/',
          type: 'adjective-psychology',
          typeLabel: '心理情感形容詞',
          lemma: 'emotional',
          meaning: '情緒化 / 敏感多思',
          explanation: '指心緒極易因微小事物受到波動，在愛情關係中常用來形容「患得患失」的脆弱心靈狀態。'
        },
        {
          id: 'sp10',
          text: 'hypothetical',
          rom: '/ˌhaɪpəˈθɛtɪkl/',
          type: 'adjective-advanced',
          typeLabel: '高級思維形容詞',
          lemma: 'hypothetical',
          meaning: '假設性的 / 胡思亂想胡亂猜測',
          explanation: '源自假說（hypothesis），在此指腦海中不斷腦補各種「如果他不喜歡我怎麼辦？如果只是玩笑怎麼辦？」的假設性想像。'
        },
        {
          id: 'sp11',
          text: 'not supposed to know',
          rom: '/nɑːt səˈpoʊzd tə noʊ/',
          type: 'idiom-modal',
          typeLabel: '約定俗成義務慣用語',
          lemma: 'be not supposed to do',
          meaning: '不應該知道 / 本該被蒙在鼓裡',
          explanation: '「be supposed to」指照理應當；否定形表達「依照規矩或默契，這本該不是我能過問或知曉的底細」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主詞繫動詞補語 (I get emotional and hypothetical) + 分詞現在伴隨狀語 (wondering if...) + 存在句名詞子句 (there are all kinds of things) + 定語關係子句 (I\'m not supposed to know)',
          tokens: [
            { term: 'I get', role: '繫動詞結構', desc: '表達進入某種心態狀態。' },
            { term: 'emotional & hypothetical', role: '並列形容詞補語', desc: '精準刻畫內心的感性澎湃與理性腦補。' },
            { term: 'wondering if', role: '伴隨分詞狀語', desc: '表伴隨進行的思索猜疑。' },
            { term: 'all kinds of', role: '數量量詞修飾', desc: '形形色色、各種各樣。' },
            { term: 'be supposed to', role: '情態動詞片語', desc: '按常理應當如何。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪ ɡɛt ɪˈmoʊʃnəl ən ˌhaɪpəˈθɛtɪkl ˈwʌndərɪŋ ɪf ðər ɑːr ɔːl kaɪndz əv θɪŋz aɪm nɑːt səˈpoʊst tə noʊ]',
          singingTips: '多音節高級詞彙「hypothetical [ˌhaɪpəˈθɛtɪkl]」需節奏均勻咬字，重音穩落於第三音節 the-；「supposed to」中 ed 與 to 同化為 [səˈpoʊst-tə]。',
          rules: [
            {
              title: '子音同化現象 (Assimilation)',
              badge: '地道美語發音',
              detail: '「supposed to」中末尾的 d 遇到清子音 t 時被同化，發出輕巧的 [st-tə] 音，省力而自然。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '深層自我剖析 (Deep Self-reflection)',
              badge: '情感自白',
              form: 'I get emotional and hypothetical, wondering if there are secrets you haven\'t told me.',
              scene: '面對感情不透明時，向心理諮商師或知己傾訴不安'
            },
            {
              name: '日常溝通提醒 (Gentle Vulnerability)',
              badge: '坦率溝通',
              form: 'I tend to overthink things when we don\'t talk openly. I really value transparency between us.',
              scene: '希望伴侶更加開誠布公，避免無謂猜疑'
            }
          ],
          realLifeExample: {
            scenario: '情侶因彼此隱瞞而產生誤解後的敞開心扉談話',
            dialogue: [
              { speaker: 'Alex', text: 'Why did you stay up so late last night looking so worried?', trans: '你昨晚怎麼那麼晚還沒睡，看起來心事重重的？' },
              { speaker: 'Taylor', text: 'I just got emotional and hypothetical, wondering if there was something you weren\'t telling me.', trans: '我只是情緒一來就開始胡思亂想，猜測著你是不是有什麼事情瞞著我。' }
            ]
          }
        }
      }
    },
    {
      id: 'sitm-en-5',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:48',
      timeSec: 48.1,
      korean: 'You lift my feet off of the ground, keep me spinning around and around, I don’t ever wanna come down from your arms',
      text: 'You lift my feet off of the ground, keep me spinning around and around, I don’t ever wanna come down from your arms',
      romanization: '/juː lɪft maɪ fiːt ɔːf əv ðə ɡraʊnd kiːp miː ˈspɪnɪŋ əˈraʊnd ənd əˈraʊnd aɪ doʊnt ˈɛvər ˈwɑːnə kʌm daʊn frʌm jʊər ɑːrmz/',
      naturalTranslation: '你讓我雙腳騰空飄然離地，帶著我如旋轉木馬般旋轉沉醉，我再也不想從你的溫柔臂彎中甦醒降落。',
      pillChips: [
        {
          id: 'sp12',
          text: 'lift my feet off of the ground',
          rom: '/lɪft maɪ fiːt ɔːf əv ðə ɡraʊnd/',
          type: 'romantic-idiom',
          typeLabel: '經典浪漫愛情成語',
          lemma: 'sweep / lift someone off their feet',
          meaning: '令人神魂顛倒 / 飄飄欲仙 / 雙腳離地',
          explanation: '英美文學極負盛名的浪漫隱喻！形容對方帶給自己無比震撼與極致甜蜜，彷彿重力消失、整個人雀躍得飄入雲端。'
        },
        {
          id: 'sp13',
          text: 'spinning around and around',
          rom: '/ˈspɪnɪŋ əˈraʊnd ənd əˈraʊnd/',
          type: 'imagery-phrase',
          typeLabel: '動態視覺疊詞片語',
          lemma: 'spin around and around',
          meaning: '暈眩旋轉 / 沉溺陶醉',
          explanation: '重疊「around and around」，營造出如舞會華爾滋般目眩神馳、令人心醉神迷的強烈動態意境。'
        },
        {
          id: 'sp14',
          text: 'come down from your arms',
          rom: '/kʌm daʊn frʌm jʊər ɑːrmz/',
          type: 'metaphorical-verb',
          typeLabel: '隱喻動詞片語',
          lemma: 'come down + from one\'s arms',
          meaning: '從興奮狂喜中落地降落',
          explanation: '「come down」雙關指「從高處落下」與「從狂喜藥效般的迷醉狀態中冷靜下來」，表達對對方擁抱的極度依戀。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '並列主謂賓句 (You lift my feet...) + 使役延續句 (keep me spinning...) + 永恆意願否定句 (I don\'t ever wanna come down...)',
          tokens: [
            { term: 'lift ... off of', role: '動詞介系詞結構', desc: '使雙腳離開地面，進入飄然境地。' },
            { term: 'keep + O + V-ing', role: '使役句型', desc: '使某人持續維持在旋轉狀態。' },
            { term: 'don\'t ever wanna', role: '強烈否定意願', desc: '永遠也不想冷卻降落。' },
            { term: 'from your arms', role: '處所狀語', desc: '深陷於懷抱的安全感。' }
          ]
        },
        pronunciation: {
          actualSound: '[juː lɪft maɪ fiːt ɔːf əv ðə ɡraʊnd kiːp miː ˈspɪnɪŋ əˈraʊn ən əˈraʊnd aɪ doʊn ˈɛvər ˈwɑːnə kʌm daʊn frəm jər ɑːrmz]',
          singingTips: '副歌高音與假音轉換的核心句！「around and around」聲線需要圓潤空靈，「wanna come down」用柔和氣聲（Airy Falsetto）托住，充滿夢幻唯美氛圍。',
          rules: [
            {
              title: '連綿重疊流動 (Liquid Flow in Ballads)',
              badge: '聲樂技巧',
              detail: '「spinning around and around」音調如浪花般平滑起伏，and 弱讀省略 d 音，銜接下一段氣息。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極致浪漫誓言 (Ultra-Romantic Expression)',
              badge: '電影浪漫',
              form: 'You lift my feet off the ground, and I never want to leave your arms.',
              scene: '求婚、婚禮誓詞或熱戀中最刻骨銘心的表白'
            },
            {
              name: '日常感謝甜言 (Sweet Everyday Appreciation)',
              badge: '溫柔日常',
              form: 'Every moment with you feels like pure magic; you make me so incredibly happy.',
              scene: '紀念日時感謝伴侶帶給自己無與倫比的幸福'
            }
          ],
          realLifeExample: {
            scenario: '在浪漫舞會上慢舞時的耳邊低語',
            dialogue: [
              { speaker: 'He', text: 'Are you having a good time tonight?', trans: '你今晚開心嗎？' },
              { speaker: 'She', text: 'More than good. You literally lifted my feet off the ground. I never want this dance to end.', trans: '何止是開心。你真的讓我整個人飄上了雲端，我真希望這支舞永遠不要結束。' }
            ]
          }
        }
      }
    },
    {
      id: 'sitm-en-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:04',
      timeSec: 64.0,
      korean: 'You tell me that you need me, then you walk away, keep promising forever with the words you say',
      text: 'You tell me that you need me, then you walk away, keep promising forever with the words you say',
      romanization: '/juː tɛl miː ðæt juː niːd miː ðɛn juː wɔːk əˈweɪ kiːp ˈprɑːmɪsɪŋ fəˈrɛvər wɪð ðə wɜːrdz juː seɪ/',
      naturalTranslation: '你前一刻才對我說你有多需要我，下一秒卻轉身拂袖而去，嘴裡卻還用甜言蜜語許諾著天長地久。',
      pillChips: [
        {
          id: 'sp15',
          text: 'walk away',
          rom: '/wɔːk əˈweɪ/',
          type: 'phrasal-verb',
          typeLabel: '經典動作片語動詞',
          lemma: 'walk away',
          meaning: '轉身離開 / 拂袖而去 / 放棄離場',
          explanation: '象徵在情感上的退縮、逃避承諾或抽身離去，與前面的「you need me」形成刺眼的諷刺對比。'
        },
        {
          id: 'sp16',
          text: 'promising forever',
          rom: '/ˈprɑːmɪsɪŋ fəˈrɛvər/',
          type: 'verb-object-collocation',
          typeLabel: '動名詞搭配詞',
          lemma: 'promise forever',
          meaning: '許下天長地久的承諾',
          explanation: '「keep + V-ing」指反覆不斷發生；嘴上不斷描繪天長地久，實際行動卻在疏離退避。'
        },
        {
          id: 'sp17',
          text: 'with the words you say',
          rom: '/wɪð ðə wɜːrdz juː seɪ/',
          type: 'prepositional-phrase',
          typeLabel: '介系詞修飾關係片語',
          lemma: 'with the words + (that) you say',
          meaning: '僅憑你口頭上的甜言蜜語',
          explanation: '暗示這些承諾「僅止於口頭言語（words only）」，缺乏付諸實踐的真誠行動支撐。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '時間順序並列句 (You tell me... then you walk away) + 矛盾伴隨句 (keep promising forever...) + 限制關係子句 (the words you say)',
          tokens: [
            { term: 'tell me that', role: '間接引語子句', desc: '表白情感需求。' },
            { term: 'then', role: '時間轉折副詞', desc: '隨即發生的殘酷反轉。' },
            { term: 'walk away', role: '動詞片語謂語', desc: '抽身離去。' },
            { term: 'keep + V-ing', role: '習慣性延續', desc: '口頭反覆無常地承諾。' }
          ]
        },
        pronunciation: {
          actualSound: '[juː tɛl miː ðət juː niːd miː ðɛn juː wɔːk əˈweɪ kiːp ˈprɑːməsɪŋ fəˈrɛvər wɪð ðə wɜːrdz juː seɪ]',
          singingTips: '「walk away」與「words you say」尾韻押 /eɪ/ 音，字字句句帶著控訴與心碎的力道，咬字要乾脆俐落。',
          rules: [
            {
              title: '雙行尾韻押韻 (AABB Rhyme Scheme)',
              badge: '詞曲韻律',
              detail: '「away」與「say」押完美單元音長音 /eɪ/，加強了歌詞的情感宣洩張力。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '直指矛盾的痛訴 (Heartfelt Accusation)',
              badge: '情感指控',
              form: 'You tell me you need me, then you walk away; you promise forever, but it\'s just empty words.',
              scene: '面對反覆無常的伴侶，痛定思痛指出對方言行不一'
            },
            {
              name: '成熟邊界設定 (Healthy Boundary Setting)',
              badge: '理性設限',
              form: 'I need consistency. Your actions have to match the promises you make to me.',
              scene: '要求關係中的承諾必須伴隨實際行動，而非只是口頭空頭支票'
            }
          ],
          realLifeExample: {
            scenario: '面對忽冷忽熱的對象，決定把話說清楚',
            dialogue: [
              { speaker: 'Boy', text: 'You know I care about you so much, right?', trans: '你知道我真的很在乎你對吧？' },
              { speaker: 'Girl', text: 'Do you? Because you tell me you need me, then you walk away for days. Words aren\'t enough anymore.', trans: '是嗎？因為你前一秒說需要我，轉身就消失好幾天。只有嘴上說說已經不夠了。' }
            ]
          }
        }
      }
    },
    {
      id: 'sitm-en-7',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:18',
      timeSec: 78.2,
      korean: 'Oh boy you got me really confused, don’t know what I’m supposed to do, I’m stuck in the middle with you',
      text: 'Oh boy you got me really confused, don’t know what I’m supposed to do, I’m stuck in the middle with you',
      romanization: '/oʊ bɔɪ juː ɡɑːt miː ˈrɪəli kənˈfjuːzd doʊnt noʊ wʌt aɪm səˈpoʊzd tə duː aɪm stʌk ɪn ðə ˈmɪdl wɪð juː/',
      naturalTranslation: '天哪男孩，你真把我徹底搞得暈頭轉向，我已手足無措不知該如何是好，就這樣被困在與你進退兩難的曖昧漩渦之中。',
      pillChips: [
        {
          id: 'sp18',
          text: 'stuck in the middle',
          rom: '/stʌk ɪn ðə ˈmɪdl/',
          type: 'core-title-idiom',
          typeLabel: '歌曲核心標題成語',
          lemma: 'be stuck in the middle',
          meaning: '進退維谷 / 卡在曖昧拉鋸的中間點',
          explanation: '整首歌的靈魂成語！形容進一步無名分、退一步又捨不得，被硬生生卡在愛情拉鋸戰最痛苦又最沉溺的夾縫核心。'
        },
        {
          id: 'sp19',
          text: 'got me really confused',
          rom: '/ɡɑːt miː ˈrɪəli kənˈfjuːzd/',
          type: 'causative-result',
          typeLabel: '使役動詞 + 受詞補語',
          lemma: 'get someone confused',
          meaning: '使我徹底陷入困惑混亂',
          explanation: '「get + 受詞 + 形容詞/過去分詞」，指對方的忽冷忽熱讓自己不知所措、心緒大亂。'
        },
        {
          id: 'sp20',
          text: 'what I’m supposed to do',
          rom: '/wʌt aɪm səˈpoʊzd tə duː/',
          type: 'noun-clause-idiom',
          typeLabel: '名詞子句 (間接疑問語)',
          lemma: 'what + be supposed to do',
          meaning: '我究竟該怎麼做才對',
          explanation: '表達在感情迷宮中喪失方向感，找不到正確對應與抉擇之道的無助心態。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '感嘆詞引導使役主句 (Oh boy you got me...) + 現在否定省略句 (don\'t know what I\'m supposed to do) + 標題狀態句 (I\'m stuck in the middle with you)',
          tokens: [
            { term: 'Oh boy', role: '語氣感嘆詞', desc: '表現無奈又深陷的嘆息。' },
            { term: 'get + O + adj', role: '使役結構', desc: '使某人陷入混亂情緒。' },
            { term: 'what I\'m supposed to do', role: '名詞子句', desc: '作為 know 的賓語。' },
            { term: 'stuck in the middle', role: '形容詞性介系詞片語', desc: '進退兩難的被困狀態。' }
          ]
        },
        pronunciation: {
          actualSound: '[oʊ bɔɪ juː ɡɑːt miː ˈrɪli kənˈfjuːzd doʊn noʊ wʌt aɪm səˈpoʊst tə duː aɪm stʌk ɪn ðə ˈmɪdl wɪð juː]',
          singingTips: '本曲最高潮標誌唱段！「confused」與「do」和「you」形成連續多重呼應押韻，重音穩紮在「stuck」與「middle」，音色穿透力極強！',
          rules: [
            {
              title: '元音三連押韻 (Triptych Rhyme)',
              badge: '標題曲高潮技巧',
              detail: 'confused /kənˈfjuːzd/、do /duː/、you /juː/ 連續押 /uː/ 音，使旋律在聽覺上達到最極致的洗腦與記憶點。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '經典無奈自白 (Iconic Love Dilemma)',
              badge: '標題真諦',
              form: 'You\'ve got me so confused; I don\'t know what to do, I\'m just stuck in the middle with you.',
              scene: '面對感情模糊地帶時，最真實而無助的情感剖白'
            },
            {
              name: '直球尋求解答 (Direct Clarification)',
              badge: '直面問題',
              form: 'Your mixed signals are really confusing. Are we just friends, or are we something more?',
              scene: '忍無可忍決定挑明曖昧信號，要求確認彼此關係'
            }
          ],
          realLifeExample: {
            scenario: '深夜通電話，勇敢問出困擾彼此數月的曖昧懸案',
            dialogue: [
              { speaker: 'You', text: 'You call me every night, but you say you\'re not ready for a relationship. You\'ve got me so confused.', trans: '你每天晚上都打電話給我，卻又說自己還沒準備好談戀愛。你真的把我搞得徹底混亂了。' },
              { speaker: 'Him', text: 'I know it\'s unfair to you... I\'m just afraid of ruining what we have.', trans: '我知道這對你很不公平…我只是害怕破壞我們現在這份美好。' },
              { speaker: 'You', text: 'Well, right now I\'m completely stuck in the middle with you.', trans: '可是現在，我就這樣被你卡在進退兩難的中間。' }
            ]
          }
        }
      }
    },
    {
      id: 'sitm-en-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:38',
      timeSec: 98.9,
      korean: 'You were the spark, light in the dark, gave you my everything; pulling me in, pushing me out, pulling me back again',
      text: 'You were the spark, light in the dark, gave you my everything; pulling me in, pushing me out, pulling me back again',
      romanization: '/juː wɜːr ðə spɑːrk laɪt ɪn ðə dɑːrk ɡeɪv juː maɪ ˈɛvriθɪŋ ˈpʊlɪŋ miː ɪn ˈpʊʃɪŋ miː aʊt ˈpʊlɪŋ miː bæk əˈɡɛn/',
      naturalTranslation: '你曾是我生命中的微光星火，破曉了無邊黑夜，我毫無保留為你奉獻了全部；可你卻對我忽冷忽熱、欲擒故縱，一次又一次將我玩弄於股掌之間。',
      pillChips: [
        {
          id: 'sp21',
          text: 'the spark, light in the dark',
          rom: '/ðə spɑːrk laɪt ɪn ðə dɑːrk/',
          type: 'poetic-imagery',
          typeLabel: '詩意對比意象成語',
          lemma: 'spark + light in the dark',
          meaning: '生命火花 / 黑暗中的光芒',
          explanation: '極致詩意的雙重意象，形容對方在自己最灰暗迷茫的時刻登場，宛如點亮希望的星火與明燈。'
        },
        {
          id: 'sp22',
          text: 'pulling me in, pushing me out',
          rom: '/ˈpʊlɪŋ miː ɪn ˈpʊʃɪŋ miː aʊt/',
          type: 'idiom-dichotomy',
          typeLabel: '反義動作成語 (情感拉扯)',
          lemma: 'pull in vs. push out',
          meaning: '忽冷忽熱 / 欲擒故縱 / 左右拉扯',
          explanation: '英美文學中描述「有毒關係（Toxic Relationship）或極致曖昧拉扯」最高頻的成語！一會兒拉近親暱，一會兒又無情推開冷落。'
        },
        {
          id: 'sp23',
          text: 'pulling me back again',
          rom: '/ˈpʊlɪŋ miː bæk əˈɡɛn/',
          type: 'action-cycle',
          typeLabel: '循環輪迴動詞片語',
          lemma: 'pull someone back again',
          meaning: '再次把我拽回漩渦中',
          explanation: '每當自己痛下決心想要放棄抽身時，對方一個溫柔眼神或問候，又再次讓人身不由己深陷其中。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '隱喻排比句 (You were the spark, [the] light in the dark) + 過去全心付出分句 (gave you my everything) + 現在分詞對立循環動態 (pulling me in, pushing me out, pulling me back again)',
          tokens: [
            { term: 'the spark', role: '名詞隱喻補語', desc: '激發靈魂靈感的星火。' },
            { term: 'light in the dark', role: '同位語修飾', desc: '黑夜中的明燈。' },
            { term: 'gave you my everything', role: '主謂雙賓', desc: '傾注所有毫無保留。' },
            { term: 'pulling in / pushing out', role: '反義分詞對比', desc: '動態刻畫忽即忽離的拉鋸。' }
          ]
        },
        pronunciation: {
          actualSound: '[juː wər ðə spɑːrk laɪt ɪn ðə dɑːrk ɡeɪv juː maɪ ˈɛvriθɪŋ ˈpʊlɪŋ miː ɪn ˈpʊʃɪŋ miː aʊt ˈpʊlɪŋ miː bæk əˈɡɛn]',
          singingTips: '「spark」與「dark」完美押長元音 /ɑːrk/；緊接著三組「pulling... pushing... pulling...」如急促的心跳浪潮，需強弱分明，展現無奈而心碎的嘆息。',
          rules: [
            {
              title: '反義對稱發音押韻 (Antithetical Flow)',
              badge: '高階歌詞修辭',
              detail: 'Pulling in 與 Pushing out 形成聲學與動作上的對稱美，是流行樂壇最經典的旋律勾心（Hook）寫法。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '詩意史詩痛惜 (Poetic Lament)',
              badge: '傷逝輓歌',
              form: 'You were my light in the dark, but you kept pulling me in and pushing me away.',
              scene: '分手後沉澱情緒，總結這段刻骨銘心卻又遍體鱗傷的愛戀'
            },
            {
              name: '清醒果斷告別 (Empowered Closure)',
              badge: '清醒告別',
              form: 'I gave you my all, but I refuse to stay on this emotional rollercoaster anymore.',
              scene: '看清對方忽冷忽熱的把戲，決定不再受其操控、重新奪回人生主導權'
            }
          ],
          realLifeExample: {
            scenario: '向最好的朋友哭訴經歷了一場虐心的曖昧拉鋸',
            dialogue: [
              { speaker: 'You', text: 'I don\'t understand him. He gave me so much hope, and now he is pulling me in and pushing me out again.', trans: '我真的一點都搞不懂他。他給了我那麼多希望，現在又開始忽冷忽熱、欲擒故縱。' },
              { speaker: 'Friend', text: 'You gave him your everything, babe. If he keeps playing with your heart, it\'s time to walk away for good.', trans: '寶貝，你已經毫無保留為他付出一切了。如果他一直這樣玩弄你的真心，是時候徹底轉身離開了。' }
            ]
          }
        }
      }
    }
  ]
};
