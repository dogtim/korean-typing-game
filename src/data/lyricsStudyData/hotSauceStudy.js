// BABYMONSTER - 《HOT SAUCE》 韓英雙語辛辣舞曲深度研習資料包
// 本曲為 BABYMONSTER 辛辣霸氣的派對舞曲代表作！
// 特色：美式火辣俚語、食物隱喻雙關、雙押Flow、發音技巧與舞台狂潮

export const HOT_SAUCE_STUDY_DATA = {
  id: 'hot-sauce',
  title: 'HOT SAUCE',
  artist: 'BABYMONSTER',
  album: '數位單曲《HOT SAUCE》',
  year: '2025',
  youtubeId: 'xn8mQqz2xmM',
  altYoutubeIds: ['xn8mQqz2xmM', 'sA8a0FhB958'],
  sentences: [
    {
      id: 'hs-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:08',
      timeSec: 8.09,
      korean: 'Fire go higher wherever we are, BABYMONSTER girls got that woo woo ah',
      text: 'Fire go higher wherever we are, BABYMONSTER girls got that woo woo ah',
      romanization: '/ˈfaɪər ɡoʊ ˈhaɪər wɛrˈɛvər wiː ɑːr/',
      naturalTranslation: '無論我們身處何方，熱情之火皆衝上雲霄，怪物少女們自帶讓人尖叫的強大魔力！',
      pillChips: [
        {
          id: 'hs1_p1',
          text: 'go higher',
          rom: '/ɡoʊ ˈhaɪər/',
          type: 'verb-phrase',
          typeLabel: '動詞短語',
          lemma: 'go higher',
          meaning: '向上攀升 / 熱度加劇',
          explanation: '口語省略三單形式強調節奏律動，表示火焰或氣氛不斷沸騰升級。'
        },
        {
          id: 'hs1_p2',
          text: 'wherever',
          rom: '/wɛrˈɛvər/',
          type: 'conjunction',
          typeLabel: '讓步連接詞',
          lemma: 'wherever',
          meaning: '無論何處 / 不管在哪',
          explanation: '引導無條件讓步副詞子句，展現無論走到哪都是全場焦點的自信。'
        },
        {
          id: 'hs1_p3',
          text: 'got that',
          rom: '/ɡɑːt ðæt/',
          type: 'slang-idiom',
          typeLabel: '流行俚語',
          lemma: 'have got that',
          meaning: '自帶某種魅力 / 具備強大特質',
          explanation: '流行音樂高頻用語，指某人天生散發出無可抗拒的致命吸引力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主謂短語 (Fire go higher) + 讓步狀語子句 (wherever we are) + 伴隨主賓句 (girls got that woo woo ah)',
          tokens: [
            { term: 'Fire go higher', role: '核心主謂', desc: '象徵熱度衝向頂峰。' },
            { term: 'wherever we are', role: '地點狀語子句', desc: '強調無拘無束、處處是主場。' },
            { term: 'girls got that', role: '流行短語', desc: '少女們天生自帶吸睛魔力。' },
            { term: 'woo woo ah', role: '氣氛感嘆詞', desc: '點燃全場尖叫歡呼的聲音標籤。' }
          ]
        },
        pronunciation: {
          actualSound: '[파이어 고 하이어 웨얼에버 위 아]',
          singingTips: 'fire [ˈfaɪər] 與 higher [ˈhaɪər] 完美雙押，口腔需充分垂直打開。',
          rules: [
            {
              title: '雙元音 /aɪ/ 雙押 (Double Rhyme)',
              badge: 'Rap押韻',
              detail: 'fire 與 higher 的雙元音連讀保持音長一致，氣息集中於高位置共鳴。'
            },
            {
              title: '捲舌連鎖 /r/ 連音',
              badge: '連音技巧',
              detail: 'wherever we are 中的 /r/ 音輕微過渡，銜接 we are 時自然流暢。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '派對狂歡 (Party Hype)',
              badge: '派對語氣',
              form: 'Fire go higher wherever we are!',
              scene: '演唱會或派對帶動氣氛時使用'
            },
            {
              name: '日常描述 (Daily English)',
              badge: '標準口語',
              form: 'The energy intensifies dramatically whenever we enter the room.',
              scene: '向他人形容某個團隊進場時氣場驚人'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '우리가 어디에 있든 열기는 더 뜨겁게 타오르죠.',
              scene: '韓語標準禮貌表達熱情燃燒之意'
            }
          ],
          realLifeExample: {
            scenario: '派對 DJ 剛切換音樂，現場舞池瞬間被點燃',
            dialogue: [
              { speaker: 'Host', text: 'The crowd is going absolutely wild tonight!', trans: '今晚現場的人群簡直徹底瘋狂了！' },
              { speaker: 'You', text: 'Fire go higher wherever we are! Let\'s take it all the way up!', trans: '無論我們走到哪，氣氛就燒到哪！讓我們把熱度頂到最高！' }
            ]
          }
        }
      }
    },
    {
      id: 'hs-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:18',
      timeSec: 18.85,
      korean: 'Everybody want some but can’t handle what I brought ’em, I’m like hot sauce',
      text: 'Everybody want some but can’t handle what I brought ’em, I’m like hot sauce',
      romanization: '/ˈɛvribaɪ wɑːnt sʌm bət kænt ˈhændl wʌt aɪ brɔːt əm aɪm laɪk hɑːt sɔːs/',
      naturalTranslation: '人人都渴望分得一杯羹，卻根本承受不住我帶來的強烈震撼；我就如火辣辣椒醬般刺激！',
      pillChips: [
        {
          id: 'hs2_p1',
          text: 'can’t handle',
          rom: '/kænt ˈhændl/',
          type: 'idiom-capacity',
          typeLabel: '無法招架成語',
          lemma: 'cannot handle',
          meaning: '無法承受 / 難以招架',
          explanation: '形容某人或某物的氣場與實力過於強大震撼，一般人難以駕馭。'
        },
        {
          id: 'hs2_p2',
          text: 'what I brought ’em',
          rom: '/wʌt aɪ brɔːt əm/',
          type: 'noun-clause-slang',
          typeLabel: '名詞子句 + 口語縮讀',
          lemma: 'what I brought them',
          meaning: '我為他們帶來的炸裂震撼',
          explanation: '’em 是 them 的口語弱化縮讀，展現街頭從容自信。'
        },
        {
          id: 'hs2_p3',
          text: 'like hot sauce',
          rom: '/laɪk hɑːt sɔːs/',
          type: 'core-title-metaphor',
          typeLabel: '標題靈魂隱喻',
          lemma: 'like hot sauce',
          meaning: '如火辣辣椒醬般辛辣帶勁',
          explanation: '比喻自己熱烈、獨特且令人回味無窮的頂級個性魅力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '並列轉折複合句 (Everybody want some but can\'t handle [Noun Clause]) + 隱喻比喻主句 (I\'m like hot sauce)',
          tokens: [
            { term: 'Everybody want some', role: '主謂賓', desc: '口語中人人想分一杯羹。' },
            { term: 'can\'t handle', role: '能力否定', desc: '駕馭不了、承受不住。' },
            { term: 'what I brought \'em', role: '名詞性子句', desc: '我所端出的辛辣硬實力。' },
            { term: 'I\'m like hot sauce', role: '主系表隱喻', desc: '自比烈火辣醬。' }
          ]
        },
        pronunciation: {
          actualSound: '[에브리바디 원 썸 벗 캔 핸들 왓 아이 브롯 덤 아임 라이크 핫 소스]',
          singingTips: 'brought \'em 讀作 /ˈbrɔː.dəm/，與 hot sauce 的長後元音形成飽滿韻腳。',
          rules: [
            {
              title: '長元音 /ɔː/ 雙押韻腳',
              badge: 'Rap押韻',
              detail: 'brought [brɔːt] 與 sauce [sɔːs] 形成飽滿內押，口腔保持圓唇共鳴。'
            },
            {
              title: '弱讀同化代名詞 \'em',
              badge: '口語縮讀',
              detail: 'them 弱化為 /əm/ 並與 brought 末尾輔音形成拍音連鎖 [ˈbrɔːdəm]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '辛辣女王霸氣 (Spicy Queen Energy)',
              badge: '辛辣氣場',
              form: 'Everybody want some but can\'t handle what I brought \'em, I\'m like hot sauce.',
              scene: '面對跟不上自己步伐的競爭者展現女王魄力'
            },
            {
              name: '商務霸氣 (Executive Confidence)',
              badge: '商務書面',
              form: 'Many crave a share of our market dominance, yet lack the capacity to compete.',
              scene: '市場競爭中展現無可替代的絕對實力'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '모두가 원하지만 감당할 수 없을 걸요, 난 핫소스 같으니까요.',
              scene: '韓語禮貌中帶著自信嗆辣'
            }
          ],
          realLifeExample: {
            scenario: '面對想模仿自己風格卻毫無特色的抄襲者',
            dialogue: [
              { speaker: 'Friend', text: 'Everyone is trying to copy your fierce aesthetic!', trans: '大家都在爭相模仿你霸氣熱烈的風格！' },
              { speaker: 'You', text: 'They can try, but they can\'t handle what I brought \'em. I\'m like hot sauce!', trans: '他們儘管學吧，但他們根本承受不住這種火力，我可是天然辣醬！' }
            ]
          }
        }
      }
    },
    {
      id: 'hs-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:31',
      timeSec: 31.32,
      korean: 'Feeling deadly tonight, B.A.B.Y.M.O.N about to blow your mind',
      text: 'Feeling deadly tonight, B.A.B.Y.M.O.N about to blow your mind',
      romanization: '/ˈfiːlɪŋ ˈdɛdli təˈnaɪt əˈbaʊt tuː bloʊ jɔːr maɪnd/',
      naturalTranslation: '今夜氣場危險迷人，即將徹底震撼顛覆你的大腦！',
      pillChips: [
        {
          id: 'hs3_p1',
          text: 'feeling deadly',
          rom: '/ˈfiːlɪŋ ˈdɛdli/',
          type: 'slang-adjective',
          typeLabel: '流行形容詞短語',
          lemma: 'feel deadly',
          meaning: '氣場危險迷人 / 美得致命',
          explanation: 'deadly 在流行語中指「Drop-dead gorgeous，美到令人窒息、具備殺傷力的魅力」。'
        },
        {
          id: 'hs3_p2',
          text: 'about to',
          rom: '/əˈbaʊt tuː/',
          type: 'future-phrase',
          typeLabel: '即刻將行結構',
          lemma: 'be about to',
          meaning: '正要 / 即將立刻發生',
          explanation: '表即刻就要爆發的高能動態。'
        },
        {
          id: 'hs3_p3',
          text: 'blow your mind',
          rom: '/bloʊ jɔːr maɪnd/',
          type: 'idiom-shock',
          typeLabel: '震驚成語',
          lemma: 'blow one\'s mind',
          meaning: '震撼顛覆大腦 / 令人瞠目結舌',
          explanation: '英文極高頻成語，指演出或視覺效果太過精彩讓人神魂顛倒。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '現在分詞表語短語 (Feeling deadly) + 時間狀語 (tonight) + 準備將行態 (about to blow your mind)',
          tokens: [
            { term: 'Feeling deadly', role: '分詞表語', desc: '狀態致命誘人。' },
            { term: 'tonight', role: '時間狀語', desc: '今夜。' },
            { term: 'B.A.B.Y.M.O.N', role: '主語代稱', desc: '成員團名點名。' },
            { term: 'blow your mind', role: '核心成語謂語', desc: '顛覆三觀與認知。' }
          ]
        },
        pronunciation: {
          actualSound: '[필링 데들리 투나잇 어바웃 투 블로우 유어 마인드]',
          singingTips: 'B-A-B-Y-M-O-N 按八分音符單字點名，節奏短促如同密碼敲擊。',
          rules: [
            {
              title: '縮寫節奏重音點擊',
              badge: '節奏技巧',
              detail: 'B-A-B-Y-M-O-N 每個字母單獨發音，短促有力地推進節奏拍點。'
            },
            {
              title: '雙元音 /aʊ/ 與 /oʊ/ 對比',
              badge: '元音轉換',
              detail: 'about [/əˈbaʊt/] 的開口 /aʊ/ 迅速滑動至 blow [/bloʊ/] 的圓唇 /oʊ/。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '夜行女王霸氣 (Night Queen Flex)',
              badge: '派對氣場',
              form: 'Feeling deadly tonight, about to blow your mind.',
              scene: '登台前向觀眾宣告致命吸引力'
            },
            {
              name: '正式讚譽 (High Praise)',
              badge: '正式評價',
              form: 'Exuding lethal charm and poised to astonish the audience.',
              scene: '藝評家對登台震撼視覺的評價'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '오늘 밤 치명적인 매력으로 당신의 상상을 뒤흔들어 놓을 거예요.',
              scene: '韓語表達今晚充滿致命魅力'
            }
          ],
          realLifeExample: {
            scenario: '盛裝完成準備出發參加頒獎典禮盛會',
            dialogue: [
              { speaker: 'Stylist', text: 'This custom leather outfit is bold and dangerous!', trans: '這套專屬客製的皮質套裝大膽又危險！' },
              { speaker: 'You', text: 'Feeling deadly tonight! We’re about to blow everyone\'s mind.', trans: '今晚狀態極佳！我們就是要震撼全場的眼球。' }
            ]
          }
        }
      }
    },
    {
      id: 'hs-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:36',
      timeSec: 36.91,
      korean: 'We about to leave you breathless, call the doctors, paramedics, cause the stage on fire',
      text: 'We about to leave you breathless, call the doctors, paramedics, cause the stage on fire',
      romanization: '/liːv juː ˈbrɛθləs kɔːl ðə ˈdɑːktərz ˌpærəˈmɛdɪks/',
      naturalTranslation: '我們即將讓你屏息驚嘆，快叫醫生和急救隊，因為整個舞台已被點燃引爆！',
      pillChips: [
        {
          id: 'hs4_p1',
          text: 'leave you breathless',
          rom: '/liːv juː ˈbrɛθləs/',
          type: 'verb-object-complement',
          typeLabel: '動賓補結構',
          lemma: 'leave breathless',
          meaning: '讓人屏息驚嘆 / 美得喘不過氣',
          explanation: '常用來形容震撼的藝術、舞蹈或令人讚嘆的視覺表演。'
        },
        {
          id: 'hs4_p2',
          text: 'paramedics',
          rom: '/ˌpærəˈmɛdɪks/',
          type: 'hyperbole-noun',
          typeLabel: '誇張修辭名詞',
          lemma: 'paramedic',
          meaning: '緊急救護人員 / 急救隊',
          explanation: '流行曲常用誇張手法，形容舞台熱烈程度讓人心跳過速需要急救。'
        },
        {
          id: 'hs4_p3',
          text: 'stage on fire',
          rom: '/steɪdʒ ɑːn ˈfaɪər/',
          type: 'stage-idiom',
          typeLabel: '舞台俚語',
          lemma: 'on fire',
          meaning: '引燃舞台 / 狀態絕佳炙手可熱',
          explanation: '形容演出燃燒全場，氣氛達到沸點。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '結果狀語 (leave you breathless) + 緊急祈使句 (call the doctors, paramedics) + 原因補語 (cause the stage on fire)',
          tokens: [
            { term: 'leave you breathless', role: '動賓補短語', desc: '使觀眾窒息驚嘆。' },
            { term: 'call the doctors', role: '祈使句', desc: '誇張呼叫醫療隊。' },
            { term: 'paramedics', role: '專有名詞', desc: '救護車急救員。' },
            { term: 'cause the stage on fire', role: '原因狀語', desc: '因為舞台已化為火海。' }
          ]
        },
        pronunciation: {
          actualSound: '[리브 유 브레스리스, 콜 더 닥터스 패러메딕스, 커즈 더 스테이지 온 파이어]',
          singingTips: 'breathless 與 paramedics 三連音吐字需極具爆發力，尾音迅速切分。',
          rules: [
            {
              title: '齒間清擦音 /θ/ 快速咬字',
              badge: '發音咬字',
              detail: 'breathless 中的 /θ/ 上下齒輕輕夾住舌尖，快速吐氣銜接 -less。'
            },
            {
              title: '四音節詞 paramedics 重音掌握',
              badge: '重音節拍',
              detail: '重音落在第三音節 /mɛd/ [ˌpærəˈmɛdɪks]，需與小鼓重拍完美契合。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台狂潮 (Stage Ignition)',
              badge: '舞台語氣',
              form: 'Call the doctors, paramedics, cause the stage on fire!',
              scene: '演唱會高潮段落誇張帶動氣氛'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '숨이 멎을 만큼 압도적인 무대를 보여줄게요, 구급차를 불러야 할 정도로요!',
              scene: '韓語禮貌中帶著強大舞台壓迫感'
            }
          ],
          realLifeExample: {
            scenario: '看完巨星演唱會高難度齊舞與高音表演後的驚嘆',
            dialogue: [
              { speaker: 'Fan', text: 'Did you see that dance break? I literally forgot to breathe!', trans: '你有看到剛才那段 Dance Break 嗎？我簡直驚訝到忘記呼吸了！' },
              { speaker: 'Friend', text: 'Totally! Left everyone breathless, call the paramedics!', trans: '完全如此！簡直讓人窒息，快叫急救隊來吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'hs-5',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:44',
      timeSec: 44.29,
      korean: 'Got that chilli pepper, jalapeno, too addictive red hot cheetos, hit like wasabi',
      text: 'Got that chilli pepper, jalapeno, too addictive red hot cheetos, hit like wasabi',
      romanization: '/ˈtʃɪli ˈpɛpər ˌhɑːləˈpeɪnjoʊ tuː əˈdɪktɪv wəˈsɑːbi/',
      naturalTranslation: '擁有紅辣椒與墨西哥辣椒的極致熱辣，宛如嗆辣芥末般瞬間直衝腦門，令人無可自拔地下癮！',
      pillChips: [
        {
          id: 'hs5_p1',
          text: 'jalapeno',
          rom: '/ˌhɑːləˈpeɪnjoʊ/',
          type: 'culinary-loanword',
          typeLabel: '西語辛香料外來語',
          lemma: 'jalapeño',
          meaning: '墨西哥青辣椒',
          explanation: '源自西語的外來名詞，j 發 /h/，比喻辛辣猛烈的性格。'
        },
        {
          id: 'hs5_p2',
          text: 'addictive',
          rom: '/əˈdɪktɪv/',
          type: 'adjective',
          typeLabel: '形容詞',
          lemma: 'addictive',
          meaning: '令人上癮的 / 欲罷不能的',
          explanation: '形容歌曲旋律或個人魅力具有強烈的附著度與成癮性。'
        },
        {
          id: 'hs5_p3',
          text: 'hit like wasabi',
          rom: '/hɪt laɪk wəˈsɑːbi/',
          type: 'sensory-simile',
          typeLabel: '感官明喻成語',
          lemma: 'hit like wasabi',
          meaning: '如山葵芥末般嗆辣直衝腦門',
          explanation: '日式芥末瞬間通透鼻腔的猛烈刺激感，形容表演直擊神經。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '動賓列舉排比 (Got that [Spicy Items]) + 程度形容詞補語 (too addictive) + 比喻動態 (hit like wasabi)',
          tokens: [
            { term: 'Got that', role: '引導謂語', desc: '具備、掌握。' },
            { term: 'chilli pepper, jalapeno', role: '辛辣名詞排比', desc: '紅椒與墨西哥辣椒。' },
            { term: 'red hot cheetos', role: '流行零食文化', desc: '代表極辣酥脆的美式零食。' },
            { term: 'hit like wasabi', role: '感官明喻短語', desc: '如芥末般瞬間擊中神經。' }
          ]
        },
        pronunciation: {
          actualSound: '[칠리 페퍼 할라피뇨, 투 어딕티브 레드 핫 치토스, 힛 라이크 와사비]',
          singingTips: '食物名詞快節奏排比切換，重音分別落在各食物的強拍音節，跳躍明快。',
          rules: [
            {
              title: '西語 Jalapeno 字母 j 讀音',
              badge: '外來語發音',
              detail: 'j 讀作喉音清擦音 /h/ [ˌhɑːləˈpeɪnjoʊ]，切勿誤讀為英語的 /dʒ/。'
            },
            {
              title: '短元音 /ɪ/ 的爆發跳音',
              badge: '跳音節奏',
              detail: 'chilli [ˈtʃɪli]、cheetos [ˈtʃiːtoʊz]、hit [hɪt] 口型緊實俐落。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '辛辣美食串燒修辭 (Spicy Rap Flex)',
              badge: '嘻哈風格',
              form: 'Got that chilli pepper, jalapeno, hit like wasabi!',
              scene: '用豐富的美食文化符號進行比喻'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '와사비처럼 코를 찌르고 중독성 넘치는 화끈한 맛을 가졌죠.',
              scene: '韓語禮貌描述如芥末般直衝大腦的成癮性'
            }
          ],
          realLifeExample: {
            scenario: '向朋友推薦全新發布的強烈節奏舞曲',
            dialogue: [
              { speaker: 'Friend', text: 'How would you describe this new comeback song?', trans: '你會怎麼形容這首全新回歸的主打歌？' },
              { speaker: 'You', text: 'It hits like wasabi! Pure adrenaline and super addictive.', trans: '它就像芥末一樣直衝腦門！純粹的腎上腺素，超級讓人上癮。' }
            ]
          }
        }
      }
    },
    {
      id: 'hs-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:51',
      timeSec: 51.5,
      korean: 'Step to the beat, came ready to eat, you know we bring the flavor',
      text: 'Step to the beat, came ready to eat, you know we bring the flavor',
      romanization: '/stɛp tuː ðə biːt keɪm ˈrɛdi tuː iːt/',
      naturalTranslation: '踏著節拍昂首而來，早已蓄勢待發橫掃全場，你知道我們端上的是最極致的獨家風味！',
      pillChips: [
        {
          id: 'hs6_p1',
          text: 'step to the beat',
          rom: '/stɛp tuː ðə biːt/',
          type: 'rhythmic-action',
          typeLabel: '節奏動作短語',
          lemma: 'step to the beat',
          meaning: '踩著鼓點自信邁步',
          explanation: '舞者或歌手隨節奏自信登場的經典動作指令。'
        },
        {
          id: 'hs6_p2',
          text: 'ready to eat',
          rom: '/ˈrɛdi tuː iːt/',
          type: 'slang-devour',
          typeLabel: '舞台吞噬俚語雙關',
          lemma: 'ready to eat',
          meaning: '準備大開殺戒 / 橫掃全場',
          explanation: '嘻哈與流行文化核心雙關！表面指吃美食，實際指「ate and left no crumbs，徹底虐殺吞噬舞台」。'
        },
        {
          id: 'hs6_p3',
          text: 'bring the flavor',
          rom: '/brɪŋ ðə ˈfleɪvər/',
          type: 'style-phrase',
          typeLabel: '風格展示片語',
          lemma: 'bring the flavor',
          meaning: '帶來獨樹一格的風味魅力',
          explanation: '形容表演極富個人色彩與鮮明記憶點。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '動作祈使 (Step to the beat) + 俚語目的狀語 (came ready to eat) + 認知雙賓句 (bring the flavor)',
          tokens: [
            { term: 'Step to the beat', role: '節奏祈使', desc: '踩著鼓點邁步。' },
            { term: 'came ready to eat', role: '目的狀語', desc: '準備橫掃一切、吞噬舞台。' },
            { term: 'you know', role: '插敘插入語', desc: '你知道的。' },
            { term: 'we bring the flavor', role: '賓語從句', desc: '我們端出最極致的風味。' }
          ]
        },
        pronunciation: {
          actualSound: '[스텝 투 더 비트, 케임 레디 투 이트, 유 노우 위 브링 더 플레이버]',
          singingTips: 'beat [biːt] 與 eat [iːt] 形成完美的單音節長元音尾押韻，尾音短促俐落。',
          rules: [
            {
              title: '長元音 /iː/ 尾押韻 (End Rhyme)',
              badge: 'Rap押韻',
              detail: 'beat 與 eat 的長元音 /iː/ 咬字乾淨，爆破音 /t/ 帶出斷奏感。'
            },
            {
              title: '雙唇音 /b/ 與唇齒音 /f/ 的切分',
              badge: '輔音清晰度',
              detail: 'beat 的雙唇爆破與 flavor [ˈfleɪvər] 的上齒輕咬下唇區別分明。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台吞噬者 (Stage Devourer)',
              badge: '舞台語氣',
              form: 'Came ready to eat, we bring the flavor.',
              scene: '登場前展現吞噬全場的霸氣'
            },
            {
              name: '正式表達 (Professional Artistry)',
              badge: '正式評述',
              form: 'Prepared to deliver a masterclass performance full of character.',
              scene: '正式評價演出的專業與獨特風格'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '박자에 맞춰 무대를 집어삼킬 준비가 되었어요.',
              scene: '韓語表達已經準備好席捲舞台'
            }
          ],
          realLifeExample: {
            scenario: '重要面試或決賽登場前隊友互相激勵',
            dialogue: [
              { speaker: 'Teammate', text: 'Are you nervous about going out there first?', trans: '要第一個上場表演，你緊張嗎？' },
              { speaker: 'You', text: 'Not at all. I came ready to eat! Let\'s bring the flavor.', trans: '一點也不。我早就準備好要大展身手了！讓他們看看我們的真本事。' }
            ]
          }
        }
      }
    },
    {
      id: 'hs-7',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:15',
      timeSec: 75.2,
      korean: 'Hundred miles an hour you won’t never get ahead of me, it’s a secret recipe',
      text: 'Hundred miles an hour you won’t never get ahead of me, it’s a secret recipe',
      romanization: '/ˈhʌndrəd maɪlz ən ˈaʊər juː woʊnt ˈnɛvər ɡɛt əˈhɛd əv miː/',
      naturalTranslation: '時速破百疾馳前進你休想超越我，問我如何做到？這可是獨家祖傳秘方！',
      pillChips: [
        {
          id: 'hs7_p1',
          text: 'hundred miles an hour',
          rom: '/ˈhʌndrəd maɪlz ən ˈaʊər/',
          type: 'speed-adverbial',
          typeLabel: '速度副詞短語',
          lemma: '100 mph',
          meaning: '時速百英里疾馳 / 全速推進',
          explanation: '英美常用形容詞短語，比喻推進速度與效率極高。'
        },
        {
          id: 'hs7_p2',
          text: 'won’t never',
          rom: '/woʊnt ˈnɛvər/',
          type: 'double-negative-slang',
          typeLabel: '雙重否定俚語強調',
          lemma: 'will never',
          meaning: '絕對休想 / 絕無可能',
          explanation: '美式口語與黑人英語（AAVE）中常見的「雙重否定強調肯定」，表不可動搖的決絕。'
        },
        {
          id: 'hs7_p3',
          text: 'get ahead of',
          rom: '/ɡɛt əˈhɛd əv/',
          type: 'phrasal-verb',
          typeLabel: '片語動詞',
          lemma: 'get ahead of',
          meaning: '超越 / 超車領先',
          explanation: '指在競速、學業或職場上搶得先機走在前方。'
        },
        {
          id: 'hs7_p4',
          text: 'secret recipe',
          rom: '/ˈsiːkrət ˈrɛsəpi/',
          type: 'metaphor-noun',
          typeLabel: '秘方比喻名詞',
          lemma: 'secret recipe',
          meaning: '獨門秘方 / 成功心法',
          explanation: '用料理秘方比喻無人能複製的獨特天賦與競爭優勢。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '速度狀語 (Hundred miles an hour) + 雙重否定加強句 (won\'t never get ahead of me) + 判定句 (it\'s a secret recipe)',
          tokens: [
            { term: 'Hundred miles an hour', role: '速度狀語', desc: '全速疾馳。' },
            { term: 'won\'t never', role: '雙重否定副詞', desc: '強烈強調絕無可能。' },
            { term: 'get ahead of me', role: '片語賓語', desc: '超我的車、領先我。' },
            { term: 'secret recipe', role: '表語名詞', desc: '不可告人的獨門秘術。' }
          ]
        },
        pronunciation: {
          actualSound: '[헌드레드 마일즈 언 아우어 유 원 네버 겟 어헤드 오브 미, 잇츠 어 시크릿 레시피]',
          singingTips: 'miles an hour 連讀成 /maɪl.zən.ˈaʊ.ər/，recipe 尾音 /ˈrɛs.ə.pi/ 重音在第一音節。',
          rules: [
            {
              title: '連音 /z/ 弱讀滑行',
              badge: '連音規則',
              detail: 'miles 末尾的濁輔音 /z/ 與 an 的元音平滑相連成 [zən]。'
            },
            {
              title: 'recipe 三音節重音掌握',
              badge: '單字發音',
              detail: 'recipe 重音在首音節 /ˈrɛs/，結尾 -pe 讀長音 /pi/。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極速碾壓 (High-Speed Flex)',
              badge: '競速霸氣',
              form: 'Hundred miles an hour, you won\'t never get ahead of me.',
              scene: '面對競爭者自信展現一騎絕塵'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '시속 백 마일로 질주하니 절대 날 앞지를 수 없어요, 이건 나만의 특급 비법이거든요.',
              scene: '韓語表達超高速狂飆無人能及'
            }
          ],
          realLifeExample: {
            scenario: '同事好奇你的工作效率為何總是高出眾人一倍',
            dialogue: [
              { speaker: 'Colleague', text: 'How do you manage to close so many projects ahead of schedule?', trans: '你是怎麼做到每次都大幅提前完成這麼多專案的？' },
              { speaker: 'You', text: 'Running a hundred miles an hour! Can\'t tell you the secret recipe though!', trans: '時速百里全力衝刺！不過獨家秘方可不能隨便透露喔！' }
            ]
          }
        }
      }
    },
    {
      id: 'hs-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:22',
      timeSec: 82.0,
      korean: 'Carolina reaper kinda vibe like this, sprinkle of pepper I’m stirring the pot',
      text: 'Carolina reaper kinda vibe like this, sprinkle of pepper I’m stirring the pot',
      romanization: '/ˌkærəˈlaɪnə ˈriːpər ˈkaɪndə vaɪb laɪk ðɪs ˈstɜːrɪŋ ðə pɑːt/',
      naturalTranslation: '這就是卡羅萊納死神辣椒般的頂級氣場，灑上辛香胡椒，我正親手掌控全場節奏！',
      pillChips: [
        {
          id: 'hs8_p1',
          text: 'Carolina reaper',
          rom: '/ˌkærəˈlaɪnə ˈriːpər/',
          type: 'pepper-world-record',
          typeLabel: '世界金氏辣度辣椒',
          lemma: 'Carolina Reaper',
          meaning: '卡羅萊納死神辣椒',
          explanation: '金氏世界紀錄認證的極限辣椒，辣度超過200萬度，象徵無人敢正面硬剛的霸道氣場。'
        },
        {
          id: 'hs8_p2',
          text: 'sprinkle of pepper',
          rom: '/ˈsprɪŋkl əv ˈpɛpər/',
          type: 'flavoring-noun',
          typeLabel: '調味動作名詞',
          lemma: 'sprinkle of pepper',
          meaning: '灑上一抹辛香胡椒',
          explanation: '描寫廚藝動作，隱喻隨性點綴就能驚豔全場。'
        },
        {
          id: 'hs8_p3',
          text: 'stir the pot',
          rom: '/stɜːr ðə pɑːt/',
          type: 'idiom-mastermind',
          typeLabel: '控場大師成語',
          lemma: 'stir the pot',
          meaning: '親手掌控節奏 / 掀起熱浪掀起波瀾',
          explanation: '英美核心雙關！表面指拿湯勺攪滾燙熱鍋，實際指「引領話題風潮、主宰局勢發展」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞性比喻短語 (Carolina reaper vibe) + 動作伴隨 (sprinkle of pepper) + 慣用動名詞句 (stirring the pot)',
          tokens: [
            { term: 'Carolina reaper kinda vibe', role: '核心定語比喻', desc: '死神辣椒般狂暴氣場。' },
            { term: 'like this', role: '方式狀語', desc: '就是這個味。' },
            { term: 'sprinkle of pepper', role: '伴隨分詞', desc: '灑上一撮胡椒調味。' },
            { term: 'I\'m stirring the pot', role: '核心動態謂語', desc: '我正一手掌控全局、攪動風雲。' }
          ]
        },
        pronunciation: {
          actualSound: '[캐롤라이나 리퍼 카인다 바이브 라이크 디스, 스프링클 오브 페퍼 아임 스터링 더 팟]',
          singingTips: 'stirring 中的 /ɜːr/ 帶飽滿捲舌音，pot 尾音 /t/ 俐落收住帶出緊湊節奏。',
          rules: [
            {
              title: '捲舌元音 /ɜːr/ 發音飽滿度',
              badge: '發音技巧',
              detail: 'stirring [ˈstɜːrɪŋ] 舌身後縮，舌尖向上捲起，確保重音穩重扎實。'
            },
            {
              title: '塞音 /t/ 的無聲除阻',
              badge: '結尾爆破',
              detail: 'pot [pɑːt] 結尾舌尖頂住上齒齦短暫閉氣收尾，形成俐落節奏切分點。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '控場大師 (The Master Chef & Trendsetter)',
              badge: '控場氣場',
              form: 'Carolina reaper kinda vibe, I\'m stirring the pot.',
              scene: '掌控全場氣氛與話題焦點時使用'
            },
            {
              name: '韓語對應（해요體）',
              badge: '해요체',
              form: '가장 매운 고추 같은 강렬한 바이브로 판을 흔들고 있어요.',
              scene: '韓語表達以最強烈的氛圍攪動全場'
            }
          ],
          realLifeExample: {
            scenario: '策展人將原本平淡的展覽加入大膽前衛的互動裝置',
            dialogue: [
              { speaker: 'Visitor', text: 'This entire installation completely transformed the gallery atmosphere!', trans: '這個裝置藝術徹底改變了整個美術館的氛圍！' },
              { speaker: 'Artist', text: 'Just stirring the pot a little bit! Giving people that Carolina reaper vibe.', trans: '只是稍微攪動一下熱水激起火花！給觀眾帶來最刺激的死神辣椒體驗。' }
            ]
          }
        }
      }
    }
  ]
};
