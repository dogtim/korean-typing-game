// BABYMONSTER - 《BATTER UP》 韓英雙語深度研習資料包
// 本曲為 BABYMONSTER 震撼全球的出道霸氣代表作！
// 特色：棒球術語引申成語、拳王阿里名言、自主決策霸氣文法、送氣音與舞台強烈節奏

export const BATTER_UP_STUDY_DATA = {
  id: 'batter-up',
  title: 'BATTER UP',
  artist: 'BABYMONSTER',
  album: '數位單曲《BATTER UP》',
  year: '2023',
  youtubeId: 'olDWm2veCrM',
  altYoutubeIds: ['olDWb98mD7c', 'wXjWn5z9V_Y'],
  sentences: [
    // =========================================================================
    // 🇰🇷 韓語歌詞研習句目 (Korean Study Sentences: 1 - 8)
    // =========================================================================
    {
      id: 'bu-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:28',
      timeSec: 28.5,
      korean: '예쁘고 착한 내가 어떻게 변할지 monster',
      text: '예쁘고 착한 내가 어떻게 변할지 monster',
      romanization: 'ye-ppeu-go chak-han nae-ga eo-tteo-ke byeon-hal-ji monster',
      naturalTranslation: '美麗又善良的我將如何蛻變成可怕的怪物，拭目以待吧！',
      pillChips: [
        {
          id: 'bp_k1_1',
          text: '예쁘고',
          rom: 'ye-ppeu-go',
          type: 'adjective-connector',
          typeLabel: '形容詞幹 + 連接語尾',
          lemma: '예쁘다 + -고',
          meaning: '漂亮且… / 美麗又…',
          explanation: '形容詞「예쁘다（漂亮）」加上並列連接語尾「-고」，用來列舉兩項正向特質。'
        },
        {
          id: 'bp_k1_2',
          text: '착한',
          rom: 'chak-han',
          type: 'adjective-modifier',
          typeLabel: '形容詞冠形詞形',
          lemma: '착하다 + -(으)ㄴ',
          meaning: '善良溫順的',
          explanation: '形容詞「착하다（善良、乖巧）」加上冠形詞尾「-ㄴ」，修飾後方代名詞「내가」。注意激音化發音 [차칸]！'
        },
        {
          id: 'bp_k1_3',
          text: '어떻게',
          rom: 'eo-tteo-ke',
          type: 'adverb-interrogative',
          typeLabel: '疑問副詞',
          lemma: '어떻게',
          meaning: '如何 / 怎樣',
          explanation: '在句子中表示方式、形態的未知狀態。常與後方間接疑問結尾 `-ㄹ지` 搭配。'
        },
        {
          id: 'bp_k1_4',
          text: '변할지',
          rom: 'byeon-hal-ji',
          type: 'verb-ending',
          typeLabel: '動詞幹 + 猜測/間接疑問語尾',
          lemma: '변하다 + -(으)ㄹ지',
          meaning: '究竟會如何轉變',
          explanation: '動詞「변하다（改變、蛻變）」加上表懸念或未知推測的語尾「-(으)ㄹ지」，營造出充滿懸疑與爆發力的期待感。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '並列修飾結構 (예쁘고 착한) + 主語 (내가) + 疑問副詞 (어떻게) + 懸念推測子句 (변할지)',
          tokens: [
            { term: '예쁘다', role: '形容詞詞幹', desc: '外貌美麗漂亮。' },
            { term: '-고', role: '並列連接語尾', desc: '連接兩個同性質的修飾詞。' },
            { term: '착하다', role: '形容詞詞幹', desc: '心性善良乖巧。' },
            { term: '내가', role: '主格代名詞', desc: '第一人稱「나」接主格助詞「-가」時變形為「내가」。' },
            { term: '-(으)ㄹ지', role: '間接疑問/懸念終結語尾', desc: '表「究竟會不會.../究竟會如何...」。' }
          ]
        },
        pronunciation: {
          actualSound: '[예쁘고 차칸 내가 어떠케 변할찌 몬스터]',
          singingTips: '「착한」需透過激音化連讀為 [차칸]；「어떻게」之中的 ㅎ 遇 ㄱ 縮約激音化為 [어떠케]；「변할지」的 ㄹ 使 ㅈ 緊音化為 [변할찌]。',
          rules: [
            {
              title: '子音縮約激音化 (Aspiration / 격음화)',
              badge: '激音化規則',
              detail: '收音 ㅎ 與後續子音 ㄱ 結合成激音 ㅋ，故「착한」發為 [차칸]、「어떻게」發為 [어떠케]。'
            },
            {
              title: '冠形詞形 ㄹ 後緊音化 (Tensing after -(으)ㄹ)',
              badge: '濃音化規則',
              detail: '動詞冠形詞尾 -(으)ㄹ 後方遇到平音 ㅈ 時，ㅈ 會強化發成緊音 ㅉ，故「변할지」實際發音為 [변할찌]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '半語/反差自信宣告 (Informal Bold)',
              badge: '反轉魅力',
              form: '예쁘고 착한 내가 어떻게 변할지 기대해 봐.',
              scene: '面對過去將自己視為純潔柔弱小女孩的旁人，展現即將引爆全場的反差實力'
            },
            {
              name: '正式敬語 (Formal Polite)',
              badge: '官方介紹',
              form: '예쁘고 착했던 저희가 어떻게 변할지 지켜봐 주십시오.',
              scene: '出道記者發布會上向媒體宣告風格劇烈蛻變'
            }
          ],
          realLifeExample: {
            scenario: '平日看似內向溫和的成員即將登台挑戰高強度黑泡饒舌',
            dialogue: [
              { speaker: 'Friend', text: '너 그렇게 얌전한데 힙합 무대 괜찮겠어?', trans: '你平時那麼文靜溫順，演繹高難度嘻哈舞台撐得住嗎？' },
              { speaker: 'You', text: '착했던 내가 무대 위에서 어떻게 변할지 한번 봐봐!', trans: '平時乖巧的我上了舞台會如何銳變，待會你就知道了！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:34',
      timeSec: 34.2,
      korean: 'Sting like a bee, 굶주린 사자 같은 personality',
      text: 'Sting like a bee, 굶주린 사자 같은 personality',
      romanization: 'Sting like a bee, gum-ju-rin sa-ja ga-teun personality',
      naturalTranslation: '如蜜蜂般出刺快狠準，宛如飢腸轆轆的雄獅般狂傲兇猛的王者氣魄！',
      pillChips: [
        {
          id: 'bp_k2_1',
          text: 'Sting like a bee',
          rom: '/stɪŋ laɪk ə biː/',
          type: 'proverb-quote',
          typeLabel: '傳奇拳王阿里經典名言',
          lemma: 'Float like a butterfly, sting like a bee',
          meaning: '如蜜蜂般迅猛蜇刺 / 出擊快狠準',
          explanation: '拳王穆罕默德·阿里（Muhammad Ali）最著名的格言！象徵出手疾如閃電、一擊必殺的凌厲攻擊性。'
        },
        {
          id: 'bp_k2_2',
          text: '굶주린 사자',
          rom: 'gum-ju-rin sa-ja',
          type: 'noun-modifier',
          typeLabel: '動詞過去定語 + 名詞',
          lemma: '굶주리다 + -(으)ㄴ + 사자',
          meaning: '飢餓的雄獅 / 飢渴野性的獅群',
          explanation: '動詞「굶주리다（受飢渴所迫）」修飾「사자（獅子）」，形容對舞台與成功有著無止境渴望的野獸霸氣。'
        },
        {
          id: 'bp_k2_3',
          text: '같은',
          rom: 'ga-teun',
          type: 'particle-adjective',
          typeLabel: '形容詞性修飾語 (比喻)',
          lemma: '같다 + -(으)ㄴ',
          meaning: '如…一般的',
          explanation: '接在體言名詞後，表示形象上的生動比喻。注意收音連讀為 [가튼]！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文名言插入 (Sting like a bee) + 韓語定語修飾結構 (굶주린 사자 같은) + 英文名詞 (personality)',
          tokens: [
            { term: 'Sting like a bee', role: '引語隱喻', desc: '拳王出擊致命一擊。' },
            { term: '굶주리다', role: '動詞幹', desc: '對勝利無比飢渴。' },
            { term: '사자', role: '名詞', desc: '萬獸之王獅子。' },
            { term: '같은', role: '比喻冠形詞', desc: '如...一般的。' }
          ]
        },
        pronunciation: {
          actualSound: '[Sting like a bee, 굼주린 사자 가튼 personality]',
          singingTips: '「굶주린」的雙收音 ㄻ 遇到子音時只發 ㅁ 音，因此發音為 [굼주린]；bee 與 personality 形成雙語韻腳。',
          rules: [
            {
              title: '雙收音簡化規則 (Consonant Cluster Simplification)',
              badge: '韓語收音規則',
              detail: '雙收音 ㄻ 在後方遇到初聲子音 ㅈ 時，脫落 ㄹ 只讀 ㅁ，因此讀成 [굼주린] (gum-ju-rin)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台王者狂言',
              badge: '霸氣破表',
              form: 'Sting like a bee, 굶주린 사자 같은 personality.',
              scene: '舞台開場宣告自己無所畏懼的強大野心'
            }
          ],
          realLifeExample: {
            scenario: '體育運動員或競技隊伍在總決賽前激勵隊友',
            dialogue: [
              { speaker: 'Captain', text: '상대팀 만만치 않아. 준비됐어?', trans: '對手實力不可小覷，大家準備好了嗎？' },
              { speaker: 'Player', text: '벌처럼 쏘고 사자처럼 물어뜯을 준비 끝났습니다!', trans: '早就準備好如蜜蜂般出刺快狠準、如雄獅般將對手徹底拿下了！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:39',
      timeSec: 39.6,
      korean: '네 맘 빼고 다른 것은 원하지 않아',
      text: '네 맘 빼고 다른 것은 원하지 않아',
      romanization: 'ne mam ppae-go da-reun geo-seun won-ha-ji a-na',
      naturalTranslation: '除了你的真心之外，其餘的一切凡俗之物我皆不稀罕！',
      pillChips: [
        {
          id: 'bp_k3_1',
          text: '네 맘',
          rom: 'ne mam',
          type: 'pronoun-noun',
          typeLabel: '口語縮寫',
          lemma: '너의 마음 -> 네 맘',
          meaning: '你的真心 / 你的心意',
          explanation: '第二人稱屬格「너의」在日常口語中讀為「네 [니]」，名詞「마음（心）」在歌詞音節緊湊時極常縮寫為「맘」。'
        },
        {
          id: 'bp_k3_2',
          text: '빼고',
          rom: 'ppae-go',
          type: 'verb-ending',
          typeLabel: '動詞幹 + 排除介詞用法',
          lemma: '빼다 + -고',
          meaning: '除了…之外 / 扣除…',
          explanation: '動詞「빼다（拔除、扣掉）」接「-고」，是韓文中最通用的「除了A以外」片語（= A을/를 제외하고）。'
        },
        {
          id: 'bp_k3_3',
          text: '다른 것은',
          rom: 'da-reun geo-seun',
          type: 'modifier-noun-particle',
          typeLabel: '冠形詞 + 依存名詞 + 助詞',
          lemma: '다르다 + -ㄴ + 것 + -은',
          meaning: '至於其他事物嘛…',
          explanation: '形容詞「다르다（不同）」修飾「것（東西）」，再加上主題強調助詞「-은」。口語常縮寫為「다른 건」。'
        },
        {
          id: 'bp_k3_4',
          text: '원하지 않아',
          rom: 'won-ha-ji a-na',
          type: 'negation-pattern',
          typeLabel: '長否定句型',
          lemma: '원하다 + -지 않다',
          meaning: '並不渴望 / 絕不希罕',
          explanation: '動詞「원하다（渴望、想要）」加上標準長否定語尾「-지 않다」，比短否定「안 원해」更加正式、堅決與深沉。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '排除對象 (네 맘 빼고) + 主題對比 (다른 것은) + 長否定謂語 (원하지 않아)',
          tokens: [
            { term: '네 맘', role: '名詞短語', desc: '對方的愛與認可。' },
            { term: '빼고', role: '排除副詞性短語', desc: '除...之外。' },
            { term: '다른 것', role: '體言', desc: '其他無關緊要的人事物。' },
            { term: '-지 않다', role: '長否定語尾', desc: '堅決表示不想要。' }
          ]
        },
        pronunciation: {
          actualSound: '[네 맘 빼고 다른 거슨 원하지 아나]',
          singingTips: '「것은」收音 ㅅ 與後方 은 連音發為 [거슨]；「않아」中雙收音 ㄶ 的 ㅎ 遇到母音脫落，只留 ㄴ 連上變成 [아나]。',
          rules: [
            {
              title: '雙收音 ㄶ 連音脫落規則',
              badge: '連音法則',
              detail: '收音 ㄶ 遇到以母音 ㅇ 開頭的詞尾時，子音 ㅎ 脫落無聲化，由 ㄴ 連上去，故「않아」讀為 [아나]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '平語摯友對白 (Informal)',
              badge: '平語體',
              form: '네 맘 빼고 다른 것은 원하지 않아.',
              scene: '對真心知己或戀人吐露自己唯一的在乎點'
            },
            {
              name: '日常敬語 (Polite 해요體)',
              badge: '敬語體',
              form: '팬분들의 마음 빼고 다른 것은 원하지 않아요.',
              scene: '粉絲見面會上偶像對台下表達愛意'
            }
          ],
          realLifeExample: {
            scenario: '生日收到很多浮誇禮物，但自己最珍視的是朋友的一封手寫真心信',
            dialogue: [
              { speaker: 'Friend', text: '비싼 선물 못 사줘서 미안해...', trans: '沒能買昂貴的名牌禮物送你，真不好意思…' },
              { speaker: 'You', text: '진짜 괜찮아! 너의 진심 어린 편지 빼고 다른 건 원하지 않아.', trans: '真的沒關係！除了你這封真誠手寫信，其他物質我都不希罕。' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:48',
      timeSec: 48.4,
      korean: '좀 더 강하게 더 빠르게 날려 버릴게',
      text: '좀 더 강하게 더 빠르게 날려 버릴게',
      romanization: 'jom deo gang-ha-ge deo ppa-reu-ge nal-lyeo beo-ril-ge',
      naturalTranslation: '更加強勁霸道、更加迅捷凌厲，將一切阻礙痛快轟飛擊出場外！',
      pillChips: [
        {
          id: 'bp_k4_1',
          text: '좀 더',
          rom: 'jom deo',
          type: 'adverb-compound',
          typeLabel: '程度副詞組合',
          lemma: '조금 + 더',
          meaning: '再更加 / 再多一點',
          explanation: '副詞「조금（稍微、一點）」縮寫為「좀」，搭配「더（更）」，用來強調在現有基礎上不斷向上攀升極限。'
        },
        {
          id: 'bp_k4_2',
          text: '강하게 / 빠르게',
          rom: 'gang-ha-ge / ppa-reu-ge',
          type: 'adjective-to-adverb',
          typeLabel: '形容詞副詞化語尾 (-게)',
          lemma: '강하다/빠르다 + -게',
          meaning: '強烈地 / 快速地',
          explanation: '在形容詞詞幹後加上副詞性格尾「-게」，將「강하다（強大的）」與「빠르다（快速的）」轉化為修飾動作的副詞。'
        },
        {
          id: 'bp_k4_3',
          text: '날려 버릴게',
          rom: 'nal-lyeo beo-ril-ge',
          type: 'auxiliary-verb-ending',
          typeLabel: '使役動詞 + 徹底完成 + 承諾語尾',
          lemma: '날리다 + -어 버리다 + -(으)ㄹ게',
          meaning: '我會全部轟飛消滅掉',
          explanation: '動詞「날다（飛）」的使役態「날리다（使…飛走 / 揮棒擊飛）」+ 輔助動詞「-어 버리다（徹底搞定、痛快完成）」+ 說話者承諾語尾「-(으)ㄹ게」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '程度修飾疊加 (좀 더 강하게, 더 빠르게) + 使役動詞 + 徹底完成語尾 (날려 버리다) + 承諾語尾 (-(으)ㄹ게)',
          tokens: [
            { term: '좀 더', role: '程度副詞', desc: '更加。' },
            { term: '-게', role: '副詞化語尾', desc: '將形容詞轉為修飾動詞之狀態。' },
            { term: '-어 버리다', role: '輔助動詞', desc: '表達動作乾淨俐落地完成或拋開負擔。' },
            { term: '-(으)ㄹ게', role: '意志終結詞尾', desc: '我向你保證我一定會做到。' }
          ]
        },
        pronunciation: {
          actualSound: '[좀 더 강하게 더 빠르게 날려 버릴께]',
          singingTips: '「날려」中 ㄹ 遇到後方母音產生流暢的舌尖輕音；「버릴게」中的 ㄱ 因前面 -(으)ㄹ 冠形詞形而濃音化發成 [버릴께]。',
          rules: [
            {
              title: '約定語尾 -(으)ㄹ게 緊音化發音',
              badge: '發音重點',
              detail: '語尾 -(으)ㄹ게 雖然拼寫為 ㄱ，但標準韓國語語音規則中一律發作緊音 [-(으)ㄹ께]！'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '自信承諾半語 (Informal Promise)',
              badge: '霸氣承諾',
              form: '내가 다 날려 버릴게, 날 믿어!',
              scene: '棒球賽上場前對隊友許諾一定擊出全壘打'
            },
            {
              name: '正式宣告敬語 (Formal Statement)',
              badge: '正式宣誓',
              form: '더 강하고 빠른 무대로 여러분의 스트레스를 날려 버리겠습니다.',
              scene: '演唱會上對台下數萬名觀眾承諾帶來炸裂的舞台'
            }
          ],
          realLifeExample: {
            scenario: '期末考或大型專案前夕壓力極大，好友互相打氣把所有焦慮打飛',
            dialogue: [
              { speaker: 'Friend', text: '이번 시험 준비하느라 스트레스 너무 받는다...', trans: '準備這次考試壓力大到快喘不過氣了…' },
              { speaker: 'You', text: '오늘 밤에 신나게 놀고 스트레스 싹 다 날려 버리자!', trans: '今晚痛痛快快狂歡一場，把所有壓力通通轟飛吧！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:17',
      timeSec: 77.1,
      korean: '난 달려 Never can stop, Rappin 시작 네 귀에 shot, 비명은 함성이 될 거야 loud',
      text: '난 달려 Never can stop, Rappin 시작 네 귀에 shot, 비명은 함성이 될 거야 loud',
      romanization: 'nan dal-lyeo Never can stop, Rappin si-jak ne gwi-e shot, bi-myeong-eun ham-seong-i doel geo-ya loud',
      naturalTranslation: '我狂奔飛馳永不駐足，快嘴 Rap 開火正中你耳膜，原本的驚聲尖叫終將化為全場雷動歡呼！',
      pillChips: [
        {
          id: 'bp_k5_1',
          text: '난 달려',
          rom: 'nan dal-lyeo',
          type: 'pronoun-verb',
          typeLabel: '代名詞縮寫 + 動詞',
          lemma: '나는 -> 난 + 달리다 -> 달려',
          meaning: '我疾速奔馳',
          explanation: '「나는」縮寫為「난」，「달리다（奔跑、衝刺）」在口語非格式體現在式變化為「달려」。'
        },
        {
          id: 'bp_k5_2',
          text: '네 귀에 shot',
          rom: 'ne gwi-e shot',
          type: 'noun-location-metaphor',
          typeLabel: '名詞 + 方位助詞 + 英文比喻',
          lemma: '네 귀 + -에 + shot',
          meaning: '射入你的耳朵 / 正中耳膜',
          explanation: '用射擊「shot」比喻饒舌詞句直擊聽眾耳朵，極具衝擊力與聽覺震撼感。'
        },
        {
          id: 'bp_k5_3',
          text: '함성이 될 거야',
          rom: 'ham-seong-i doel geo-ya',
          type: 'change-pattern',
          typeLabel: '補格助詞 + 轉變動詞 + 未來推測',
          lemma: '함성 + -이 되다 + -(으)ㄹ 거야',
          meaning: '將會成為萬人歡呼聲',
          explanation: '名詞「함성（歡呼吶喊）」接助詞「-이」+ 動詞「되다（成為）」+ 未來推測語尾「-(으)ㄹ 거야」，表達用實力征服黑粉的王者豪氣。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '連續動作主語 (난 달려) + 饒舌隱喻對仗 (네 귀에 shot) + 狀態轉變宣告 (비명은 함성이 될 거야)',
          tokens: [
            { term: '달리다', role: '動詞', desc: '全力往前衝。' },
            { term: '-에', role: '處所/方向助詞', desc: '朝向某個特定目標或部位。' },
            { term: '이/가 되다', role: '狀態變化句型', desc: '由前一狀態徹底演變為另一狀態。' },
            { term: '-(으)ㄹ 거야', role: '推測與意志語尾', desc: '必定會變成那樣。' }
          ]
        },
        pronunciation: {
          actualSound: '[난 달려 네버 캔 스탑, 래핀 시작 네 귀에 샷, 비명은 함성이 될 꺼야 라우드]',
          singingTips: '「비명은」收音 ㅇ 透過鼻音連綿滑向 은 [비명은]；「될 거야」中的 ㄱ 濃音化讀為 [될 꺼야]。',
          rules: [
            {
              title: '未來式 -(으)ㄹ 거야 濃音化規則',
              badge: '音變規則',
              detail: '冠形詞尾 ㄹ 遇後面 ㄱ 時，必然讀作濃音 [꺼]，故「될 거야」發音為 [될 꺼야]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈熱血豪言 (Hip-Hop Swagger)',
              badge: '嘻哈氣場',
              form: '우릴 향한 비명은 곧 거대한 함성이 될 거야!',
              scene: '地下排練室向同甘共苦的隊友誓言日後必定登頂'
            },
            {
              name: '敬語採訪表達 (Formal Interview)',
              badge: '謙遜堅定',
              form: '관객 여러분의 비명이 환호와 함성이 될 수 있도록 최선을 다하겠습니다.',
              scene: '受訪時向大眾保證會拿出最高水準的震撼演出'
            }
          ],
          realLifeExample: {
            scenario: '面臨艱鉅的創業起步期，外界一片唱衰，向團隊宣示決心',
            dialogue: [
              { speaker: 'Partner', text: '지금은 사람들이 다 비웃고 있는데 어떡하지?', trans: '現在業界大家都在看衰嘲笑我們，該怎麼辦？' },
              { speaker: 'You', text: '묵묵히 달리다 보면 그 비웃음이 찬사로 바뀔 거야. 계속 가자!', trans: '默默埋頭狂奔，那些嘲諷終究會變成滿堂喝采的！堅持下去！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-6',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:23',
      timeSec: 83.2,
      korean: 'Yo 몬스터의 등장, 내가 가는 길이 기리 빛이 나리 way',
      text: 'Yo 몬스터의 등장, 내가 가는 길이 기리 빛이 나리 way',
      romanization: 'Yo mon-steo-ui deung-jang, nae-ga ga-neun gi-ri gi-ri bi-chi na-ri way',
      naturalTranslation: 'Yo 怪物巨獸震撼登場！我所踏足之路必將萬古長青、熠熠生輝！',
      pillChips: [
        {
          id: 'bp_k6_1',
          text: '몬스터의 등장',
          rom: 'mon-steo-ui deung-jang',
          type: 'noun-genitive-noun',
          typeLabel: '名詞 + 屬格 + 名詞',
          lemma: '몬스터 + -의 + 등장',
          meaning: '怪物的登場 / 巨星降臨',
          explanation: '「등장（登場、登台）」象徵 BABYMONSTER 作為 YG 新一代怪物新人的重磅宣告。'
        },
        {
          id: 'bp_k6_2',
          text: '내가 가는 길',
          rom: 'nae-ga ga-neun gil',
          type: 'noun-clause-modifier',
          typeLabel: '主語 + 現在冠形詞 + 名詞',
          lemma: '나 + -가 + 가다 + -는 + 길',
          meaning: '我所前行的道路',
          explanation: '動詞「가다（走、去）」接現在進行冠形詞尾「-는」，修飾名詞「길（道路、前程）」。'
        },
        {
          id: 'bp_k6_3',
          text: '기리 빛이 나리',
          rom: 'gi-ri bi-chi na-ri',
          type: 'archaic-lyricism',
          typeLabel: '古風副詞 + 同音文字遊戲 + 誓言語尾',
          lemma: '기리(副詞: 萬古長存) + 빛이 나다 + -리(誓言語尾)',
          meaning: '必將永遠熠熠生輝',
          explanation: '這裡融合了天才雙關押韻：道路「길이」與副詞「기리（長久地、世世代代）」同音雙關！加上古典莊重的誓願詞尾「-리」，氣勢非凡。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞化宣示 (몬스터의 등장) + 定語修飾 (내가 가는 길이) + 雙關古雅誓言 (기리 빛이 나리)',
          tokens: [
            { term: '등장', role: '名詞', desc: '主角隆重亮相。' },
            { term: '가는', role: '現在式冠形詞尾', desc: '修飾前方所踏足的道路。' },
            { term: '기리', role: '古風高雅副詞', desc: '萬代流芳、長長久久。' },
            { term: '-리', role: '高雅誓願語尾', desc: '「-(으)리라」的縮寫，表達必將如此的非凡豪情。' }
          ]
        },
        pronunciation: {
          actualSound: '[몬스터의 등 booze / 몬스터에 등짱, 내가 가는 기리 기리 비치 나리 웨이]',
          singingTips: '「길이」連音為 [기리]，與後方副詞「기리」形成極其流暢的雙連音押韻；「빛이」收音 ㅊ 遇 ㅇ 顎化連音發作 [비치]。',
          rules: [
            {
              title: '收音 ㅊ 連音化 (Palatalization 連音)',
              badge: '連音規則',
              detail: '名詞「빛（光芒）」帶有收音 ㅊ，遇到主格助詞「-이」時，直接連音發為 [비치] (bi-chi)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '詩意史詩狂言 (Poetic Swagger)',
              badge: '文學霸氣',
              form: '내가 가는 길이 기리 빛이 나리라.',
              scene: '面對未來宏圖展現無人能擋的王者風範'
            },
            {
              name: '日常勵志表達 (Daily Encouragement)',
              badge: '溫暖祝福',
              form: '앞으로 걷는 모든 길이 밝게 빛나길 바랄게요.',
              scene: '畢業典禮或換工作時祝福對方前程似錦'
            }
          ],
          realLifeExample: {
            scenario: '畢業典禮上大家互相寫畢業紀念冊，寫下一句霸氣的座右銘',
            dialogue: [
              { speaker: 'Classmate', text: '졸업 축하해! 앞으로 어떤 길을 걷고 싶어?', trans: '畢業快樂！未來你想走一條什麼樣的道路？' },
              { speaker: 'You', text: '내가 가는 길이 기리 빛나도록, 가장 높은 곳까지 도전할 거야!', trans: '我走過的路必將萬古長青、光芒四射，我要向著最高頂峰發起挑戰！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-7',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:31',
      timeSec: 91.6,
      korean: '누가 날 막아 난 더 세게 밟아 너네가 좀 알아서 비켜',
      text: '누가 날 막아 난 더 세게 밟아 너네가 좀 알아서 비켜',
      romanization: 'nu-ga nal ma-ga nan deo se-ge bal-ba neo-ne-ga jom a-ra-seo bi-kyeo',
      naturalTranslation: '誰敢阻擋我的路？我只會更加重踩油門狂飆，你們自個識相點閃邊去！',
      pillChips: [
        {
          id: 'bp_k7_1',
          text: '누가 날 막아',
          rom: 'nu-ga nal ma-ga',
          type: 'rhetorical-question',
          typeLabel: '反問修辭短語',
          lemma: '누구 + -가 + 나 + -를 -> 날 + 막다',
          meaning: '誰擋得住我？ / 誰敢攔我？',
          explanation: '反問修辭法，字面問「誰擋得住我」，實則表達「根本沒有任何人有能耐阻擋我前進」。'
        },
        {
          id: 'bp_k7_2',
          text: '더 세게 밟아',
          rom: 'deo se-ge bal-ba',
          type: 'idiomatic-metaphor',
          typeLabel: '駕駛油門隱喻',
          lemma: '더 + 세다 + -게 + 밟다',
          meaning: '更重地踩油門 / 更加油衝刺',
          explanation: '動詞「밟다（踩踏）」常用於踩油門「액셀을 밟다」。形容遇到阻礙不僅不踩煞車，反而將油門踩到底狂飆衝破障礙。'
        },
        {
          id: 'bp_k7_3',
          text: '너네가 좀 알아서',
          rom: 'neo-ne-ga jom a-ra-seo',
          type: 'spoken-idiom',
          typeLabel: '口語道地生活慣用語',
          lemma: '너네 + -가 + 좀 + 알아서',
          meaning: '你們自個兒識相點 / 看著辦',
          explanation: '「알아서 하다」是韓國極度高頻的日常生活慣用語，意指「不用別人提醒，自己心裡要有數、自己看著辦處理好」。'
        },
        {
          id: 'bp_k7_4',
          text: '비켜',
          rom: 'bi-kyeo',
          type: 'imperative-informal',
          typeLabel: '強烈平語祈使態',
          lemma: '비키다 + -어',
          meaning: '閃開！ / 讓開！',
          explanation: '動詞「비키다（讓道、躲避）」的直接命令態，語氣極度強烈、霸道十足。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '無畏反問 (누가 날 막아) + 加速超車 (난 더 세게 밟아) + 識相退讓命令 (너네가 좀 알아서 비켜)',
          tokens: [
            { term: '막다', role: '動詞幹', desc: '阻擋遮攔。' },
            { term: '밟다', role: '動詞幹', desc: '踩踏（引申為踩油門加速）。' },
            { term: '알아서', role: '副詞性慣用型', desc: '自己識趣、自己揣摩該怎麼做。' },
            { term: '비키다', role: '動詞幹', desc: '讓開道路。' }
          ]
        },
        pronunciation: {
          actualSound: '[누가 날 마가 난 더 세게 발바 너네가 좀 아라서 비켜]',
          singingTips: '「막아」連音為 [마가]；「밟아」雙收音 ㄼ 在母音前連音，ㅂ 往後連讀為 [발바]；「알아서」連音為 [아라서]。',
          rules: [
            {
              title: '雙收音 ㄼ 連音變化',
              badge: '收音連音',
              detail: '雙收音 ㄼ 遇到以母音開頭的詞尾「-아」時，保留第一子音 ㄹ，第二子音 ㅂ 連到後方發音，讀作 [발바] (bal-ba)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '霸氣嘻哈命令體 (Street Swagger)',
              badge: '街頭霸氣',
              form: '누가 날 막아! 난 더 세게 밟으니까 알아서 비켜!',
              scene: '面對擋路者或競爭對手的霸氣清場台詞'
            },
            {
              name: '日常禮貌借過 (Polite Daily Phrase)',
              badge: '必學生活敬語',
              form: '죄송하지만 잠시만 비켜 주시겠어요? / 지나가겠습니다.',
              scene: '在壅擠的地鐵或電梯中禮貌請前方路人讓道'
            }
          ],
          realLifeExample: {
            scenario: '在地鐵尖峰時刻要下車，但門口站滿人，學習生活禮貌句與歌詞之對比',
            dialogue: [
              { speaker: 'You (日常生活禮貌版)', text: '실례합니다, 내리실 분 계셔서 잠시만 길 좀 비켜주시겠어요?', trans: '不好意思，有人要下車，能稍微借過讓個道嗎？' },
              { speaker: 'Passerby', text: '아, 죄송합니다! 먼저 지나가세요.', trans: '啊，不好意思！您先請過。' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-ko-8',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:35',
      timeSec: 95.0,
      korean: '순진한 척 나는 그딴 거 안 해 날 원해? but look in the mirror',
      text: '순진한 척 나는 그딴 거 안 해 날 원해? but look in the mirror',
      romanization: 'sun-jin-han cheok na-neun geu-ttan geo an hae nal won-hae? but look in the mirror',
      naturalTranslation: '裝純裝無辜？我才不做那種做作爛把戲！想要得到我？先回家照照鏡子吧！',
      pillChips: [
        {
          id: 'bp_k8_1',
          text: '순진한 척',
          rom: 'sun-jin-han cheok',
          type: 'grammar-pretend',
          typeLabel: '假裝文法 (-ㄴ 척하다)',
          lemma: '순진하다 + -(으)ㄴ 척',
          meaning: '假裝單純 / 裝作天真純潔',
          explanation: '形容詞「순진하다（天真單純）」加上表「假裝、裝作…」的依存名詞「척」，常搭配「하다」形成「-ㄴ 척하다（裝蒜、假裝）」。'
        },
        {
          id: 'bp_k8_2',
          text: '그딴 거',
          rom: 'geu-ttan geo',
          type: 'demonstrative-derogatory',
          typeLabel: '口語貶損代名詞',
          lemma: '그따위 + 것 -> 그딴 거',
          meaning: '那種鬼東西 / 那種爛套路',
          explanation: '由帶有輕蔑貶低口吻的指示形容詞「그따위（那種貨色、那種程度）」縮寫為冠形詞「그딴」，修飾「거（東西）」，極具帥氣叛逆感。'
        },
        {
          id: 'bp_k8_3',
          text: '날 원해?',
          rom: 'nal won-hae?',
          type: 'direct-challenge',
          typeLabel: '直接挑釁反問',
          lemma: '나를 -> 날 + 원하다 + -어?',
          meaning: '想要我？ / 渴望得到我嗎？',
          explanation: '直接挑明對方的企圖心，緊接著接一句辛辣無比的英文「but look in the mirror（先照照鏡子秤秤自己斤兩）」，諷刺度拉滿。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '假裝做作行為 (순진한 척) + 輕蔑拒絕 (그딴 거 안 해) + 辛辣反擊 (날 원해? but look in the mirror)',
          tokens: [
            { term: '-(으)ㄴ 척하다', role: '假裝文法', desc: '故意偽裝成某種面貌。' },
            { term: '그딴', role: '口語冠形詞', desc: '那種下三濫的、微不足道的套路。' },
            { term: '안 하다', role: '短否定句型', desc: '直截了當拒絕做某事。' },
            { term: '원하다', role: '動詞幹', desc: '想要、奢求。' }
          ]
        },
        pronunciation: {
          actualSound: '[순진한 척 나는 그딴 거 안 해 날 원해? 벗 룩 인 더 미러]',
          singingTips: '「순진한 척」節奏頓挫分明，每一拍都要吐字精準俐落；「안 해」中的 ㅎ 遇到前字收音 ㄴ 產生鼻音同化發音 [안내] 或清楚劃分的 [안해]。',
          rules: [
            {
              title: '口語否定短句節奏斷句',
              badge: '饒舌節奏',
              detail: '「그딴 거 (停頓) 안 해」透過中斷半拍的休止符（Syncopation），強化傲慢堅決的態度。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '辛辣回懟平語 (Sassy Retort)',
              badge: '女王霸氣',
              form: '순진한 척 그런 가식은 안 해, 날 원하면 네 분수부터 알아.',
              scene: '面對心懷不軌或自不量力的追求者給予痛快回擊'
            },
            {
              name: '正直坦率敬語 (Honest Polite)',
              badge: '真誠待人',
              form: '거짓 없이 솔직한 모습 그대로 여러분 앞에 서겠습니다.',
              scene: '向大眾宣誓不作偽、不虛假，展現真實自我'
            }
          ],
          realLifeExample: {
            scenario: '面對職場上喜歡在長官面前裝無辜、私底下卻推卸責任的假面同事',
            dialogue: [
              { speaker: 'Colleague', text: '저 사람 또 상사 앞에서 아무것도 모르는 척 연기하네.', trans: '那個人又在主管面前演那齣一問三不知的無辜裝傻戲碼了。' },
              { speaker: 'You', text: '진짜 답답하다. 난 저런 가식적인 척은 죽어도 안 해.', trans: '真讓人受不了。我這輩子打死也不會搞那種虛偽做作的鬼把戲。' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 🇺🇸 英語歌詞研習句目 (English Study Sentences: 9 - 16)
    // =========================================================================
    {
      id: 'bu-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:17',
      timeSec: 17.7,
      korean: 'I’m on a mission, don’t need permission, no matter what I’m gonna make my own decisions',
      text: 'I’m on a mission, don’t need permission, no matter what I’m gonna make my own decisions',
      romanization: '/aɪm ɑːn ə ˈmɪʃn doʊnt niːd pərˈmɪʃn noʊ ˈmætər wʌt aɪm ˈɡənə meɪk maɪ oʊn dɪˈsɪʒnz/',
      naturalTranslation: '我正肩負著重大使命，無須任何人的恩准許可，無論前路如何，我終將自己做主掌握命運！',
      pillChips: [
        {
          id: 'bp_e1_1',
          text: 'on a mission',
          rom: '/ɑːn ə ˈmɪʃn/',
          type: 'idiom-collocation',
          typeLabel: '目標使命成語',
          lemma: 'be on a mission',
          meaning: '肩負重大使命 / 目標堅定不移',
          explanation: '形容一個人專注致志於自己的理想或任務，任何外界干擾都無法動搖。'
        },
        {
          id: 'bp_e1_2',
          text: 'don’t need permission',
          rom: '/doʊnt niːd pərˈmɪʃn/',
          type: 'verb-object',
          typeLabel: '獨立自主宣告',
          lemma: 'need permission',
          meaning: '不需要他人准許',
          explanation: '表達自我賦權（Empowerment），不再受制於體制或他人的眼光評價。'
        },
        {
          id: 'bp_e1_3',
          text: 'make my own decisions',
          rom: '/meɪk maɪ oʊn dɪˈsɪʒnz/',
          type: 'idiom-agency',
          typeLabel: '自主決策成語',
          lemma: 'make one\'s own decision',
          meaning: '自己的命運自己作主',
          explanation: '強調人生的主導權掌握在自己手中。mission、permission 與 decisions 形成強大的三連押韻。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '三連押韻對仗句 (on a mission / no permission / my own decisions) + 讓步副詞子句 (no matter what)',
          tokens: [
            { term: 'on a mission', role: '介系詞表狀態', desc: '全神貫注執行。' },
            { term: 'no matter what', role: '讓步狀語', desc: '無論發生什麼狀況。' },
            { term: 'make decisions', role: '動賓固定搭配', desc: '做決定。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪm ɑːn ə ˈmɪʃn doʊn niːd pərˈmɪʃn noʊ ˈmætər wʌt aɪm ˈɡənə meɪk maɪ oʊn dɪˈsɪʒnz]',
          singingTips: 'mission、permission、decisions 押 /ɪʃn/ 韻，節奏感鏗鏘有力，重音分明。',
          rules: [
            {
              title: '三重尾韻押韻 (Triple Rhyme in Hip-Hop)',
              badge: 'Rap技巧',
              detail: 'mission, permission, decisions 連續三押，是現代流行音樂最強調自主態度的經典 Hook。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '自主無畏霸氣 (Bold Independence)',
              badge: '女力宣言',
              form: 'I\'m on a mission, and I make my own decisions.',
              scene: '面對質疑時，自信堅定宣示自己的事業規劃'
            }
          ],
          realLifeExample: {
            scenario: '面對親友對自己勇敢追夢的質疑',
            dialogue: [
              { speaker: 'Relative', text: 'Are you sure you don\'t want a conventional job?', trans: '你確定不要一份穩定的傳統工作嗎？' },
              { speaker: 'You', text: 'I\'m on a mission. I know exactly what I\'m capable of, and I make my own decisions.', trans: '我有我肩負的夢想與使命。我清楚知道自己的能耐，我的未來由我自己做主。' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:43',
      timeSec: 43.0,
      korean: 'I would never do you wrong, you’ll regret it when I’m gone',
      text: 'I would never do you wrong, you’ll regret it when I’m gone',
      romanization: '/aɪ wʊd ˈnevər duː juː rɔːŋ juːl rɪˈɡret ɪt wen aɪm ɡɔːn/',
      naturalTranslation: '我本絕不會負你或虧待你，但當我毅然離去時，你終將後悔莫及！',
      pillChips: [
        {
          id: 'bp_e2_1',
          text: 'do you wrong',
          rom: '/duː juː rɔːŋ/',
          type: 'idiom-collocation',
          typeLabel: '道地英文成語',
          lemma: 'do someone wrong',
          meaning: '辜負某人 / 做出對不起某人的背叛行為',
          explanation: '英美流行音樂中最經典的情感成語，表示欺騙、虧待或傷害信任你的人。'
        },
        {
          id: 'bp_e2_2',
          text: 'regret it',
          rom: '/rɪˈɡret ɪt/',
          type: 'verb-object',
          typeLabel: '動賓搭配',
          lemma: 'regret something',
          meaning: '後悔 / 懊悔不已',
          explanation: '「regret」後接受詞「it」，注意 t 遇到後方 i 產生輕快閃音化（Flap T）讀作 [rɪˈɡredɪt]。'
        },
        {
          id: 'bp_e2_3',
          text: 'when I’m gone',
          rom: '/wen aɪm ɡɔːn/',
          type: 'time-clause',
          typeLabel: '時間副詞子句',
          lemma: 'be gone',
          meaning: '當我離去之時 / 當我不在你身邊時',
          explanation: '形容徹底離開某個環境或關係，警告對方失去後才懂得珍惜。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '假設條件讓步 (I would never do you wrong) + 未來時間條件狀語從句 (you’ll regret it when I’m gone)',
          tokens: [
            { term: 'would never', role: '情態助動詞', desc: '表達原本的真心與道德原則。' },
            { term: 'do wrong', role: '成語搭配', desc: '背叛傷害他人。' },
            { term: 'when I’m gone', role: '時間狀語從句', desc: '在現在式中表達未來的時間點。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪ wʊd ˈnevər duː jə rɔːŋ, jəl rɪˈɡredɪt wen aɪm ɡɔːn]',
          singingTips: 'wrong 與 gone 形成完美的押韻，結尾音堅決果斷，不拖泥帶水。',
          rules: [
            {
              title: '美式閃音化 (Flap T in Regret it)',
              badge: '美式連音',
              detail: '「regret it」中的 t 處於兩個母音之間，快速弱化為類似 d 的閃音 [rɪˈɡredɪt]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '果斷警告 (Firm Warning)',
              badge: '高冷宣告',
              form: 'Treat me with respect, or you\'ll regret it when I\'m gone.',
              scene: '面對不珍惜自己付出的合作夥伴或關係給予最後通牒'
            }
          ],
          realLifeExample: {
            scenario: '優秀的核心員工在公司長期被低估，決定離職前夕對主管的坦白',
            dialogue: [
              { speaker: 'Manager', text: 'You\'re easily replaceable here.', trans: '你在這裡隨時有人可以替代。' },
              { speaker: 'You', text: 'I gave my best, but trust me, you\'ll regret it when I\'m gone.', trans: '我付出了全力，但我保證，當我踏出這扇門時，你們很快就會後悔莫及。' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:55',
      timeSec: 55.0,
      korean: 'Got a lot to say, what a big mistake, Batter Batter Batter Up',
      text: 'Got a lot to say, what a big mistake, Batter Batter Batter Up',
      romanization: '/ɡɑːt ə lɑːt tə seɪ wʌt ə bɪɡ mɪˈsteɪk ˈbætər ˈbætər ˈbætər ʌp/',
      naturalTranslation: '你廢話意見真多，這將是你犯下最大的錯誤！擊球手就位，準備接招吧！',
      pillChips: [
        {
          id: 'bp_e3_1',
          text: 'Got a lot to say',
          rom: '/ɡɑːt ə lɑːt tə seɪ/',
          type: 'spoken-idiom',
          typeLabel: '口語主語省略',
          lemma: 'You have got a lot to say',
          meaning: '廢話一堆 / 意見可真多啊',
          explanation: '諷刺那些光說不練、在場邊指手畫腳的酸民。口語中直接省略主詞「You」。'
        },
        {
          id: 'bp_e3_2',
          text: 'What a big mistake',
          rom: '/wʌt ə bɪɡ mɪˈsteɪk/',
          type: 'exclamatory-phrase',
          typeLabel: '感嘆句型',
          lemma: 'What a + adj + noun',
          meaning: '真是犯了天大的錯誤！',
          explanation: '用感嘆句表達招惹到自己是多麼愚蠢且不可挽回的決策。say 與 mistake 押 /eɪ/ 韻！'
        },
        {
          id: 'bp_e3_3',
          text: 'Batter Up',
          rom: '/ˈbætər ʌp/',
          type: 'baseball-idiom',
          typeLabel: '棒球專業術語引申',
          lemma: 'batter up',
          meaning: '擊球員上場就位！ / 下一位接招！',
          explanation: '棒球主裁判在比賽開始或更換擊球員時大喊的口令！在歌名中象徵「怪物新人登台，輪到我們開轟了」！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '口語省略句 (Got a lot to say) + 經典感嘆句 (What a big mistake) + 棒球號令口語 (Batter Up)',
          tokens: [
            { term: 'Got a lot to say', role: '口語省略式', desc: '對批評者的反唇相譏。' },
            { term: 'What a ...', role: '感嘆副詞引導詞', desc: '強調錯誤之嚴重程度。' },
            { term: 'Batter Up', role: '核心成語/口號', desc: '本曲核心靈魂標題。' }
          ]
        },
        pronunciation: {
          actualSound: '[ɡɑːdə lɑːt tə seɪ, wʌdə bɪɡ mɪˈsteɪk, ˈbædər ˈbædər ˈbædər ʌp]',
          singingTips: 'Batter 的 tt 在美式英文中全數轉為閃音 [ˈbædər]；say 與 mistake 精準押 /eɪ/ 韻。',
          rules: [
            {
              title: '雙寫 tt 閃音化 (Flap T in Batter)',
              badge: '棒球經典口號發音',
              detail: '「Batter」中的 tt 處於重音與非重音母音之間，讀作 [ˈbædər]，聽起來像「Bad-er」，節奏富有彈性。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '運動競技挑戰 (Sports Taunt)',
              badge: '挑釁喊話',
              form: 'You think you can beat us? That\'s a big mistake. Batter up!',
              scene: '運動場上或競賽對決前夕向對手宣告即將展開狂轟濫炸'
            }
          ],
          realLifeExample: {
            scenario: '球隊在九局下半落後一分，強打者準備登場擊出致勝全壘打',
            dialogue: [
              { speaker: 'Opponent', text: 'You guys don\'t have a chance to turn this around.', trans: '你們不可能逆轉這場比賽的。' },
              { speaker: 'You', text: 'Big mistake counting us out. Batter up, watch the ball fly!', trans: '太早看扁我們是天大的錯誤。打擊手就位，看好了，這球會直接飛出場外！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:26',
      timeSec: 86.2,
      korean: '어깨 펴고 난 Going going gone, 바통 받고 준비 완료, 후다닥 Run Run Run Run',
      text: '어깨 펴고 난 Going going gone, 바통 받고 준비 완료, 후다닥 Run Run Run Run',
      romanization: 'eo-kkae pyeo-go nan Going going gone, ba-tong bat-go jun-bi wan-ryo, hu-da-dak Run Run Run Run',
      naturalTranslation: '挺起胸膛昂首闊步，球早已飛出界外一去不復返！接過接力棒整裝待發，疾速狂奔衝刺！',
      pillChips: [
        {
          id: 'bp_e4_1',
          text: '어깨 펴고',
          rom: 'eo-kkae pyeo-go',
          type: 'body-idiom',
          typeLabel: '肢體語言慣用句',
          lemma: '어깨 + 펴다 + -고',
          meaning: '挺起胸膛 / 昂首自信',
          explanation: '動詞「펴다（展開、舒展）」與「어깨（肩膀）」結合，是韓語表達「昂首挺胸、自信滿滿」的必學身體慣用語。'
        },
        {
          id: 'bp_e4_2',
          text: 'Going going gone',
          rom: '/ˈɡoʊɪŋ ˈɡoʊɪŋ ɡɔːn/',
          type: 'baseball-commentary',
          typeLabel: '美國大聯盟全壘打主播名言',
          lemma: 'going, going, gone',
          meaning: '球不斷高飛…飛出場外全壘打！',
          explanation: 'MLB 棒球解說中最經典的呼喊！形容球越飛越高、最終徹底飛入外野看台成為致勝全壘打（亦用於拍賣落槌「成交」）。'
        },
        {
          id: 'bp_e4_3',
          text: '바통 받고',
          rom: 'ba-tong bat-go',
          type: 'sports-relay-metaphor',
          typeLabel: '接力賽隱喻',
          lemma: '바통(Baton) + 받다 + -고',
          meaning: '接過接力棒 / 承接傳承大任',
          explanation: '法語借詞 Baton 傳承至韓語。象徵 BABYMONSTER 承接 YG 傳奇前輩的接力棒，正式啟動新時代。'
        },
        {
          id: 'bp_e4_4',
          text: '후다닥',
          rom: 'hu-da-dak',
          type: 'mimetic-word',
          typeLabel: '擬態副詞',
          lemma: '후다닥',
          meaning: '飛也似地 / 迅雷不及掩耳地',
          explanation: '形容動作敏捷、急急忙忙一溜煙衝刺的模樣。生動描繪出盜壘或高速狂奔的視覺感。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '自信動作 (어깨 펴고) + 棒球全壘打解說語 (Going going gone) + 接力傳承 (바통 받고) + 擬態詞狂奔 (후다닥 Run)',
          tokens: [
            { term: '어깨를 펴다', role: '體態成語', desc: '抬頭挺胸自信昂首。' },
            { term: 'Going going gone', role: '棒球名主播口頭禪', desc: '球已飛出場外。' },
            { term: '바통', role: '借詞名詞', desc: '接力賽交接棒。' },
            { term: '후다닥', role: '生動擬態詞', desc: '疾速飛奔貌。' }
          ]
        },
        pronunciation: {
          actualSound: '[어깨 펴고 난 고잉 고잉 곤, 바통 받고 준비 완료, 후다닥 런 런 런 런]',
          singingTips: '「어깨」緊音 ㄲ 發音短促有力；「준비 완료」連音為 [준비 완뇨]（流音同化鼻音現象）。',
          rules: [
            {
              title: '鼻音流音化例外同化 (준비 완료)',
              badge: '發音變化',
              detail: '「완료」中的 ㄴ 遇到 ㄹ 時，口語流暢時順應同化，發音接近 [완뇨] 或流暢連擊。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '熱血衝刺激勵 (Athletic Hype)',
              badge: '青春動力',
              form: '자, 바통 받았으니 후다닥 달려보자!',
              scene: '接下前輩交付的專案接力棒，團隊整裝待發開始衝刺'
            }
          ],
          realLifeExample: {
            scenario: '公司交接年度核心大型活動，新任總召集人勉勵團隊',
            dialogue: [
              { speaker: 'Senior', text: '작년보다 더 잘해야 할 텐데 부담스럽지?', trans: '得比去年辦得更出色，壓力會不會很大？' },
              { speaker: 'You', text: '전혀요! 바통 확실히 받았으니 어깨 펴고 전력 질주하겠습니다.', trans: '完全不會！接力棒已經牢牢握在手裡，我們會抬頭挺胸、全速前進！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-en-5',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:39',
      timeSec: 99.0,
      korean: '지치지 않아 계속 volume up, light em up, 무대 위를 태워 싹 다 치워버려 homerun',
      text: '지치지 않아 계속 volume up, light em up, 무대 위를 태워 싹 다 치워버려 homerun',
      romanization: 'ji-chi-ji a-na gye-sok volume up, light em up, mu-dae wi-reul tae-wo ssak da chi-wo-beo-ryeo homerun',
      naturalTranslation: '不知疲倦永不熄火，把音量拉到最滿、點燃全場狂潮，將舞台燃燒殆盡，所有障礙通通掃光擊出全壘打！',
      pillChips: [
        {
          id: 'bp_e5_1',
          text: 'light em up',
          rom: '/laɪt əm ʌp/',
          type: 'hiphop-slang',
          typeLabel: '嘻哈俚語短語',
          lemma: 'light them up',
          meaning: '點燃全場 / 炸翻舞台',
          explanation: '嘻哈巡演中常用俚語，字面是「把燈光與火焰全點亮」，引申為「讓全場徹底陷入瘋狂狂歡」。'
        },
        {
          id: 'bp_e5_2',
          text: '무대 위를 태워',
          rom: 'mu-dae wi-reul tae-wo',
          type: 'metaphor-collocation',
          typeLabel: '舞台燃燒隱喻',
          lemma: '무대 + 위 + 태우다',
          meaning: '燃燒整個舞台 / 奉獻最熱血演出',
          explanation: '動詞「태우다（燃燒、點火）」，韓娛舞台術語「무대를 불태우다」，象徵竭盡全力揮灑汗水的表演。'
        },
        {
          id: 'bp_e5_3',
          text: '싹 다 치워버려',
          rom: 'ssak da chi-wo-beo-ryeo',
          type: 'emphatic-cleaning-idiom',
          typeLabel: '強調副詞 + 徹底清除',
          lemma: '싹 + 다 + 치우다 + -어 버리다',
          meaning: '通通給我一掃而空 / 全部清理乾淨',
          explanation: '副詞「싹（徹底一掃）」搭配「다（全部）」，再加上「치워버리다（清除乾淨）」，氣勢磅礴地掃清一切眼前雜碎。'
        },
        {
          id: 'bp_e5_4',
          text: 'homerun',
          rom: '/ˈhoʊm rʌn/',
          type: 'baseball-climax',
          typeLabel: '全壘打最高潮',
          lemma: 'homerun',
          meaning: '滿貫全壘打 / 空前巨大成功',
          explanation: '棒球術語「全壘打」，引申為在人生、事業或舞台上取得壓倒性的完全勝利。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '否定耐力 (지치지 않아) + 連續雙動詞短語 (volume up, light em up) + 燃燒與清場 (무대 위를 태워 싹 다 치워버려) + 結尾定槌 (homerun)',
          tokens: [
            { term: '지치다', role: '動詞幹', desc: '疲勞疲倦。' },
            { term: 'light em up', role: '英文短語', desc: '引燃全場激情。' },
            { term: '싹 다', role: '強調副詞組', desc: '毫無保留地一乾二淨。' },
            { term: 'homerun', role: '借詞終結名詞', desc: '全壘打勝利。' }
          ]
        },
        pronunciation: {
          actualSound: '[지치지 아나 계쏙 볼륨 업, 라이덤 업, 무대 위를 태워 싹 따 치워버려 홈런]',
          singingTips: '「light em up」連讀為 [ˈlaɪ-dəm-ʌp]；「싹 다」中 ㄷ 濃音化為 [싹 따]；整體語速飛快極具推動感。',
          rules: [
            {
              title: '收音 ㄱ 後方緊音化 (싹 다 -> [싹 따])',
              badge: '濃音化規則',
              detail: '收音 ㄱ（代表音 k）遇到平音 ㄷ 時，促使 ㄷ 緊音化為 ㄸ，實際讀作 [싹 따]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極限舞台燃燒體 (Concert Hype)',
              badge: '演唱會炸場',
              form: '지치지 말고 오늘 무대 싹 다 태워버리자!',
              scene: '演唱會安可曲開場前對萬名觀眾發出狂歡號召'
            }
          ],
          realLifeExample: {
            scenario: '備戰多個月的舞蹈成發或街舞大賽上台前最後打氣',
            dialogue: [
              { speaker: 'Crew', text: '드디어 결승이다. 심장 터질 것 같아!', trans: '終於進決賽了，心臟緊張得快跳出來了！' },
              { speaker: 'Leader', text: '긴장 풀고 우리가 연습한 대로 무대 위를 다 찢고 홈런 치고 오자!', trans: '放輕鬆！照我們平時練習的把舞台全部炸翻，拿下那座冠軍全壘打！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-en-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:42',
      timeSec: 102.3,
      korean: 'Like a Boss Baby Imma Boss Baby, 모두 다 찢어 like brrra',
      text: 'Like a Boss Baby Imma Boss Baby, 모두 다 찢어 like brrra',
      romanization: 'Like a Boss Baby Imma Boss Baby, mo-du da jji-jeo like brrra',
      naturalTranslation: '宛如天生大領袖般霸氣側漏，我們就是 Boss Baby，將整座舞台徹底撕裂炸翻全場！',
      pillChips: [
        {
          id: 'bp_e6_1',
          text: 'Boss Baby',
          rom: '/bɔːs ˈbeɪbi/',
          type: 'pop-culture-oxymoron',
          typeLabel: '流行文化反差稱號',
          lemma: 'Boss Baby',
          meaning: '娃娃臉霸道領袖 / 年紀輕輕的大Boss',
          explanation: '融合「年幼萌態（Baby）」與「霸道總裁（Boss）」，精準呼應團名 BABYMONSTER 的「寶貝怪物」雙重反差魅力！'
        },
        {
          id: 'bp_e6_2',
          text: 'Imma',
          rom: '/ˈɪmə/',
          type: 'aave-contraction',
          typeLabel: '非裔美式英語縮寫 (AAVE)',
          lemma: 'I am going to / I am a',
          meaning: '我就是… / 我正打算…',
          explanation: '美式嘻哈黑人口語極具辨識度的經典縮寫，充滿隨性、強烈且不羈的態度。'
        },
        {
          id: 'bp_e6_3',
          text: '모두 다 찢어',
          rom: 'mo-du da jji-jeo',
          type: 'stage-slang-idiom',
          typeLabel: '韓國演藝圈炸場專用成語',
          lemma: '모두 다 + 찢다 + -어',
          meaning: '把全場通通撕裂 / 炸裂神級演出',
          explanation: '動詞「찢다（撕碎、扯破）」，在韓國公演文化中「무대를 찢었다（把舞台撕碎了）」是至高無上的讚美，形容表演震撼至極！'
        },
        {
          id: 'bp_e6_4',
          text: 'brrra',
          rom: '/brrr-ɑː/',
          type: 'ad-lib-sound',
          typeLabel: '嘻哈機關槍狀聲詞 (Ad-lib)',
          lemma: 'brrra (onomatopoeia)',
          meaning: '搭搭搭 / 狂射衝擊波',
          explanation: 'Trap 與 Drill 嘻哈樂曲中代表機關槍連射的招牌 Ad-lib 彈舌音。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文反差稱號疊加 (Like a Boss Baby Imma Boss Baby) + 韓語炸場俚語 (모두 다 찢어) + 嘻哈彈舌狀聲詞 (like brrra)',
          tokens: [
            { term: 'Boss Baby', role: '專屬隱喻', desc: '呼應團名之強烈對比。' },
            { term: 'Imma', role: 'AAVE縮寫', desc: '代表自我宣示。' },
            { term: '찢다', role: '舞台俚語動詞', desc: '把舞台演出發揮到神級境界。' },
            { term: 'brrra', role: '嘻哈襯字音', desc: '營造強烈衝擊感。' }
          ]
        },
        pronunciation: {
          actualSound: '[라이크 어 보스 베이비 이마 보스 베이비, 모두 다 찌저 라이크 브르라]',
          singingTips: '「찢어」連音為 [찌저]；brrra 可利用舌尖輕微顫動發出有力的顫音（Rolled R）。',
          rules: [
            {
              title: '收音 ㅈ 連音化規則',
              badge: '連音法則',
              detail: '「찢어」的收音 ㅈ 遇到母音 어 時直接連上去，讀作 [찌저] (jji-jeo)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台神級狂放 (Stage Slaying)',
              badge: 'K-POP行話',
              form: '오늘 무대 우리가 완전히 찢었다!',
              scene: '演出結束後全場歡聲雷動，成員激動擁抱慶祝演出大成功'
            }
          ],
          realLifeExample: {
            scenario: '去看 BABYMONSTER 演唱會，出來後跟朋友激烈討論剛才那段 Solo',
            dialogue: [
              { speaker: 'Fan 1', text: '아사 랩 파트 들었어? 숨도 안 쉬고 뱉던데!', trans: '你剛才聽到 Asa 的 Rap 段落了嗎？她完全不換氣連環快嘴耶！' },
              { speaker: 'Fan 2', text: '진짜 라이브로 무대 완전히 찢어버렸잖아! 미쳤어!', trans: '真的現場直接把整個體育館給撕碎炸翻了！太瘋狂了！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-en-7',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:48',
      timeSec: 108.2,
      korean: 'Remember me, sting like a bee, 무대를 갖고 노는 우린 MVP',
      text: 'Remember me, sting like a bee, 무대를 갖고 노는 우린 MVP',
      romanization: 'Remember me, sting like a bee, mu-dae-reul gat-go no-neun u-rin MVP',
      naturalTranslation: '記住我的名字，出刺如蜜蜂般快狠準，將整座舞台玩弄於股掌之間，我們是全場最具價值 MVP！',
      pillChips: [
        {
          id: 'bp_e7_1',
          text: 'Remember me',
          rom: '/rɪˈmembər miː/',
          type: 'imperative-phrase',
          typeLabel: '祈使宣告句',
          lemma: 'remember someone',
          meaning: '記住我 / 銘刻在心',
          explanation: '以命令祈使語氣讓大眾永遠記住自己的登場，與後方 bee、MVP 形成巧妙的三重押韻（me, bee, MVP 押 /iː/ 韻）。'
        },
        {
          id: 'bp_e7_2',
          text: '갖고 노는',
          rom: 'gat-go no-neun',
          type: 'idiomatic-compound',
          typeLabel: '熟練操縱慣用語',
          lemma: '가지고 놀다 -> 갖고 놀다 + -는',
          meaning: '玩弄於股掌之間 / 游刃有餘地掌控',
          explanation: '「가지고 놀다」口語常縮寫為「갖고 놀다」，本意是「拿著玩」，引申為「對某個領域駕輕就熟、游刃有餘地玩轉掌控」。'
        },
        {
          id: 'bp_e7_3',
          text: '우린 MVP',
          rom: 'u-rin MVP',
          type: 'acronym-identity',
          typeLabel: '縮寫代稱',
          lemma: 'Most Valuable Player',
          meaning: '我們是最具價值球員 / 舞台核心之星',
          explanation: '體育界 MVP 稱號，代表全場表現最優異、無可取代的核心靈魂人物。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文連續三重押韻 (Remember me / sting like a bee / MVP) + 韓語熟稔掌握隱喻 (무대를 갖고 노는)',
          tokens: [
            { term: 'Remember me', role: '英文祈使', desc: '刻印個人記憶。' },
            { term: '갖고 놀다', role: '韓語成語', desc: '掌控局勢、熟能生巧。' },
            { term: '우린', role: '代名詞縮寫', desc: '我們是。' },
            { term: 'MVP', role: '專業縮寫', desc: '最有價值隊員。' }
          ]
        },
        pronunciation: {
          actualSound: '[리멤버 미, 스팅 라이크 어 비, 무대를 가꼬 노는 우린 엠뷔피]',
          singingTips: '「갖고」收音 ㅈ 與 뒤 ᄀ 結合讀為緊音 [가꼬]；me、bee、MVP 尾音長拖音押 /iː/ 韻。',
          rules: [
            {
              title: '收音 ㅈ 後緊音化規則 (갖고 -> [가꼬])',
              badge: '濃音化',
              detail: '收音 ㅈ 遇到後方平音 ㄱ 時，ㄱ 產生硬化緊音，發音為 [가꼬] (gat-kko)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '王者霸氣宣告 (Champion Swagger)',
              badge: 'MVP榮譽',
              form: '이 판을 완전히 장악한 우리가 바로 MVP다!',
              scene: '比賽結束獲頒全場最有價值選手時的獲獎感言'
            }
          ],
          realLifeExample: {
            scenario: '社團在全國大學熱舞大賽中斬獲團體總冠軍',
            dialogue: [
              { speaker: 'Junior', text: '선배님들 이번 대회에서 실수 하나도 없이 완벽했어요!', trans: '學長姐們這次大賽上一個失誤都沒有，太完美了！' },
              { speaker: 'Senior', text: '긴장 안 하고 무대 자체를 즐기며 갖고 놀았더니 좋은 결과가 나온 것 같아!', trans: '不緊張、把舞台當成自己的遊樂場游刃有餘地玩，才拿到了這份全場 MVP！' }
            ]
          }
        }
      }
    },
    {
      id: 'bu-en-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '02:44',
      timeSec: 164.8,
      korean: 'So listen up everybody, 소릴 높여 Move on, We are the Monsters of the world, Batter up 지금 당장 뛰어보자 어디든',
      text: 'So listen up everybody, 소릴 높여 Move on, We are the Monsters of the world, Batter up 지금 당장 뛰어보자 어디든',
      romanization: 'So listen up everybody, so-ril no-pyeo Move on, We are the Monsters of the world, Batter up ji-geum dang-jang ttwieo-bo-ja eo-di-deun',
      naturalTranslation: '所有人都給我聽好，放聲吶喊大步邁進，我們就是席捲全球的怪物巨星！擊球手就位，就是現在，無論天涯海角一同盡情飛躍吧！',
      pillChips: [
        {
          id: 'bp_e8_1',
          text: 'So listen up',
          rom: '/soʊ ˈlɪsn ʌp/',
          type: 'phrasal-verb-call',
          typeLabel: '號召動詞短語',
          lemma: 'listen up',
          meaning: '大家都聽好 / 注意聽！',
          explanation: '英美口語中用來吸引群眾注意力的必備開場白。'
        },
        {
          id: 'bp_e8_2',
          text: '소릴 높여',
          rom: 'so-ril no-pyeo',
          type: 'idiom-causative',
          typeLabel: '使役態短語',
          lemma: '소리 + -를 -> 소릴 + 높이다 + -어 -> 높여',
          meaning: '提高聲音 / 放聲大喊',
          explanation: '名詞「소리（聲音）」縮寫為「소릴」，加上形容詞「높다（高）」的使役動詞「높이다（提高）」，口語活用為「높여」。'
        },
        {
          id: 'bp_e8_3',
          text: '지금 당장',
          rom: 'ji-geum dang-jang',
          type: 'time-adverb-compound',
          typeLabel: '強調時間副詞',
          lemma: '지금 + 당장',
          meaning: '就在此時此刻 / 立刻馬上',
          explanation: '「지금（現在）」加上漢字詞「당장（當場、立刻）」，表示刻不容緩、當機立斷的行動力。'
        },
        {
          id: 'bp_e8_4',
          text: '뛰어보자 어디든',
          rom: 'ttwieo-bo-ja eo-di-deun',
          type: 'try-proposal-indefinite',
          typeLabel: '嘗試 + 共動勸誘語尾 + 無條件代詞',
          lemma: '뛰다 + -어 보다 + -자 + 어디든(지)',
          meaning: '無論何處，讓我們一同勇敢跳躍試試看吧！',
          explanation: '動詞「뛰다（奔馳、跳躍）」+ 嘗試文法「-어 보다」+ 平語共動語尾「-자（...吧！）」+ 表無論何處的「어디든지」口語縮寫「어디든」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '群體召集 (listen up everybody) + 音浪使役 (소릴 높여) + 身份宣告 (Monsters of the world) + 冒險勸誘 (뛰어보자 어디든)',
          tokens: [
            { term: 'listen up', role: '號召短語', desc: '聚集全場目光。' },
            { term: '높이다', role: '使役動詞', desc: '使音量升高。' },
            { term: '지금 당장', role: '時間副詞', desc: '刻不容緩。' },
            { term: '-자', role: '平語共動詞尾', desc: '大家一起做某事吧。' },
            { term: '어디든', role: '不定指副詞', desc: '天涯海角任何角落。' }
          ]
        },
        pronunciation: {
          actualSound: '[쏘 리쓴 업 에브리바디, 소릴 노표 무브 온, 위 아 더 몬스터즈 오브 더 월드, 배더 럽 지금 당장 뛰어보자 어디든]',
          singingTips: '「소릴」連音流暢；「높여」激音化讀為 [노표]；結尾帶動萬人齊跳的大合唱氣氛。',
          rules: [
            {
              title: '使役態 ㅍ 連音發音 (높여 -> [노표])',
              badge: '激音連音',
              detail: '動詞「높이다」的活用型「높여」，激音 ㅍ 與後方母音 여 融合，直接發為送氣音 [노표] (no-pyeo)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '大合唱號召 (Arena Anthem)',
              badge: '熱血共動',
              form: '지금 당장 우리 함께 어디든 뛰어보자!',
              scene: '演唱會最後全場合唱時號召大家把屋頂掀翻'
            },
            {
              name: '正式號召敬語 (Formal Exhortation)',
              badge: '正式邀請',
              form: '지금 당장 저희와 함께 더 넓은 세상으로 나아가 봅시다.',
              scene: '官方發表會上邀請全球粉絲一同邁向世界舞台'
            }
          ],
          realLifeExample: {
            scenario: '高中或大學畢業旅行，站在山頂看日出時大家互相喊話',
            dialogue: [
              { speaker: 'Friend', text: '우리 앞으로 대학 가고 사회 나가도 계속 연락하는 거지?', trans: '我們以後上了大學、進入社會，還是會一直保持聯絡對吧？' },
              { speaker: 'You', text: '당연하지! 지금 당장 어디든 두려움 없이 뛰어보자, 우린 뭐든 할 수 있어!', trans: '那當然！現在開始無論何處都無所畏懼地放手一搏吧，我們無所不能！' }
            ]
          }
        }
      }
    }
  ]
};
