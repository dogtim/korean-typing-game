// BABYMONSTER - 《SHEESH》 韓英雙語歌詞深度研習資料包
// 收錄官方主打代表作《SHEESH》核心韓英名句精解：
// 1. 韓語 (Korean): 발버둥 쳐봐 (掙扎徒勞)、손바닥 위 (掌中之物 / 孫悟空五指山)、불을 질러라 (點燃全場祈使命令)、눈을 뜬 순간 (睜眼覺醒)
// 2. 英語 (English): Mano a mano (一對一正面對決)、Do or die (全力以赴不成功便成仁)、ain't seen nothing yet (好戲還在後頭)、SHEESH (驚嘆炸裂流行俚語)

export const SHEESH_STUDY_DATA = {
  id: 'sheesh',
  title: 'SHEESH',
  artist: 'BABYMONSTER',
  album: '首張迷你專輯《BABYMONS7ER》',
  year: '2024',
  youtubeId: '2wA_b648RqQ', // Official MV
  altYoutubeIds: ['60Hx2Tdsxzw', 'edheIIVQ6Mg', '9Y-95rgsDDY'],
  sentences: [
    // =========================================================================
    // 🇰🇷 韓語歌詞研習句目 (Korean Study Sentences)
    // =========================================================================
    {
      id: 'sh-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:18',
      timeSec: 18.3,
      korean: '발버둥 쳐봐, 어차피 손바닥 위에서 못 나가',
      text: '발버둥 쳐봐, 어차피 손바닥 위에서 못 나가',
      romanization: 'Bal-beo-dung cheo-bwa, eo-cha-pi son-ba-dak wi-e-seo mot na-ga',
      naturalTranslation: '儘管掙扎吧，反正任憑你怎麼撲騰，也逃不出我的手掌心！',
      pillChips: [
        {
          id: 'sp1',
          text: '발버둥 쳐봐',
          rom: 'bal-beo-dung cheo-bwa',
          type: 'idiom-verb',
          typeLabel: '慣用動作短語 + 嘗試語尾',
          lemma: '발버둥(을) 치다 + -아/어 보다',
          meaning: '儘管死命掙扎看看吧',
          explanation: '名詞「발버둥（蹬腿掙扎）」+ 動詞「치다（擊打/踢蹬）」形成慣用語「발버둥 치다（死命拼命掙扎）」，結合「-아/어 보다」帶有挑釁傲然的「試試看啊」語氣。'
        },
        {
          id: 'sp2',
          text: '어차피',
          rom: 'eo-cha-pi',
          type: 'adverb-hanja',
          typeLabel: '漢字符詞 (語氣副詞)',
          lemma: '於此彼 (어차피)',
          meaning: '反正 / 無論如何終究',
          explanation: '日常與歌詞超級高頻副詞！指橫豎橫反正結果都已經注定，逃避或反抗都無補於事。'
        },
        {
          id: 'sp3',
          text: '손바닥 위에서',
          rom: 'son-ba-dak wi-e-seo',
          type: 'noun-phrase',
          typeLabel: '名詞 + 方位格助詞',
          lemma: '손바닥 + 위 + -에서',
          meaning: '在手掌心之上',
          explanation: '比喻一切都在絕對掌控之中，源於五指山掌控全局的典故。'
        },
        {
          id: 'sp4',
          text: '못 나가',
          rom: 'mot na-ga',
          type: 'negative-verb',
          typeLabel: '能力否定副詞 + 動詞',
          lemma: '못 + 나가다',
          meaning: '無法逃離出走',
          explanation: '副詞「못」置於動詞前表示「能力上/客觀上無法做到」，強調對手毫無脫困能力。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '挑釁祈使句 (발버둥 쳐봐) + 轉折客觀因果句 (어차피) + 空間限制能力否定句 (손바닥 위에서 못 나가)',
          tokens: [
            { term: '발버둥 치다', role: '慣用語謂語', desc: '手足亂蹬、死命拼搏掙扎。' },
            { term: '-아/어 보다', role: '語尾', desc: '表示嘗試，「-봐」口語非敬語體。' },
            { term: '어차피', role: '副詞', desc: '無論如何，結局已定。' },
            { term: '손바닥', role: '名詞', desc: '手掌心。' },
            { term: '-에서', role: '處所格助詞', desc: '表示動作發生的起點或範疇。' },
            { term: '못 나가다', role: '否定片語', desc: '無法跨越離開。' }
          ]
        },
        pronunciation: {
          actualSound: '[발버둥 쳐봐 어차피 손바당 위에서 몬 나가]',
          singingTips: '「발버둥」後緊接「쳐봐」咬字要帶有冷酷笑意，「못 나가」發生鼻音化（[못 나가] 變 [몬 나가]），音流順暢！',
          rules: [
            {
              title: '鼻音化現象 (Nasalization / 비음화)',
              badge: '重要發音規則',
              detail: '「못 나가」中收音 ㄷ (ㅅ代表音) 遇到後方初聲 ㄴ 時，收音變成鼻音 ㄴ，因此發音為 [몬 나가] (mon-na-ga)。'
            },
            {
              title: '硬音化與激音咬字',
              badge: '舞台節奏',
              detail: '「쳐봐」中的 ㅊ 為送氣清激音，噴氣有力能營造強大舞台挑釁感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台霸氣非敬語 (Pan-mal)',
              badge: '絕對統治',
              form: '발버둥 쳐봐, 어차피 손바닥 위에서 못 나가.',
              scene: '舞台 Rap 展現掌控全場、對手毫無翻身機會的絕對統御氣場'
            },
            {
              name: '日常委婉口語 (Polite / 해요체)',
              badge: '日常勸告',
              form: '아무리 애써도 어차피 제 손안에 있어요.',
              scene: '朋友想跟你打賭或捉迷藏，自信打趣說你逃不出我的算計'
            },
            {
              name: '商務智勝策略 (Formal / 하십시오체)',
              badge: '公務智略',
              form: '모든 상황이 당사의 통제 범위 내에 있으므로 안심하시기 바랍니다.',
              scene: '專案主管向客戶報告危機早已在全面監控預防之中'
            }
          ],
          realLifeExample: {
            scenario: '好友玩抓迷藏或桌遊狼人殺，身為全場主導者胸有成竹',
            dialogue: [
              { speaker: '친구 (朋友)', text: '나 이번엔 진짜 안 잡힐 자신 있어!', trans: '我這次真的有把握絕對不被你抓到！' },
              { speaker: '나 (我)', text: '발버둥 쳐봐~ 어차피 내 손바닥 안이야!', trans: '儘管掙扎試試看吧～反正你終究在我的五指山掌心裡！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-ko-2',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:24',
      timeSec: 24.3,
      korean: '눈을 뜬 순간 피어나, All eyes on me 불을 질러라',
      text: '눈을 뜬 순간 피어나, All eyes on me 불을 질러라',
      romanization: 'Nun-eul tteun sun-gan pi-eo-na, All eyes on me bul-eul jil-leo-ra',
      naturalTranslation: '睜開雙眼的瞬間傲然綻放，萬眾矚目焦點全匯聚於我，點燃席捲全場的熊熊烈焰！',
      pillChips: [
        {
          id: 'sp5',
          text: '눈을 뜬',
          rom: 'nun-eul tteun',
          type: 'noun-verb-modifier',
          typeLabel: '受詞 + 動詞過去定語',
          lemma: '눈(을) 뜨다 + -(으)ㄴ',
          meaning: '睜開雙目的瞬間',
          explanation: '動詞「뜨다（睜開眼）」的過去定語形修飾「순간（瞬間）」，象徵沈睡怪獸猛然覺醒。'
        },
        {
          id: 'sp6',
          text: '피어나',
          rom: 'pi-eo-na',
          type: 'verb-compound',
          typeLabel: '複合動詞主幹',
          lemma: '피다 + -어 나다',
          meaning: '盛開綻放 / 磅礴破土',
          explanation: '花朵破蕾盛放或強大氣場噴薄而出。'
        },
        {
          id: 'sp7',
          text: '불을 질러라',
          rom: 'bul-eul jil-leo-ra',
          type: 'imperative-phrase',
          typeLabel: '名詞受詞 + 放火祈使句',
          lemma: '불을 지르다 + -어라/아라',
          meaning: '點燃烈火吧 / 炸裂引爆吧',
          explanation: '「불을 지르다（放火）」加上文語體命令形「-(으)라」，強烈的舞台煽動口吻，燃炸全場氣氛！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '時間冠形副詞子句 (눈을 뜬 순간) + 動詞主幹 (피어나) + 英文焦點插入句 (All eyes on me) + 命令祈使句 (불을 질러라)',
          tokens: [
            { term: '눈을 뜨다', role: '慣用語', desc: '睜開眼睛、覺醒。' },
            { term: '순간', role: '名詞', desc: '瞬息時刻。' },
            { term: '피어나다', role: '動詞', desc: '盛開、綻放。' },
            { term: '불을 지르다', role: '動詞片語', desc: '點燃熱火、引爆激情。' },
            { term: '-어라', role: '命令語尾', desc: '直說體命令語尾，充滿氣魄。' }
          ]
        },
        pronunciation: {
          actualSound: '[누늘 뜬 순간 피어나 All eyes on me 부를 질러라]',
          singingTips: '「눈을」連音為 [누늘]，「불을」連音為 [부를]，重音在「피어나」與「질러라」的送氣音上，氣勢昂揚！',
          rules: [
            {
              title: '連音化 (Liaison / 연음화)',
              badge: '韓語基礎連音',
              detail: '「눈을」[누늘] 與「불을」[부를] 均為尾音 ㄴ / ㄹ 移至後方初聲 ㅇ 的標準平滑連音。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '舞台命令宣告 (Hae-ra-che / 해라체)',
              badge: '燃炸宣告',
              form: 'All eyes on me 불을 질러라!',
              scene: '演唱會萬人體育館號召全場點燃手燈爆發'
            },
            {
              name: '日常激勵提議 (Polite / 해요체)',
              badge: '共同奮鬥',
              form: '우리 모두의 열정에 불을 지펴봐요!',
              scene: '社團或隊伍上場比賽前相互激勵全力燃燒鬥志'
            }
          ],
          realLifeExample: {
            scenario: '舞蹈公演即將登台前的隊長動員',
            dialogue: [
              { speaker: '팀원 (隊友)', text: '무대 조명 켜진다! 떨린다!', trans: '舞台聚光燈亮起來了！好緊張！' },
              { speaker: '리더 (隊長)', text: '눈 딱 뜨고 무대 위에 불을 지르고 오자!', trans: '眼睛亮起來，去把整座舞台徹底引爆燃炸吧！' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 🇺🇸 英語歌詞研習句目 (English Study Sentences)
    // =========================================================================
    {
      id: 'sh-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:11',
      timeSec: 11.5,
      korean: 'Mano a mano, I see you in slow mo\'',
      text: 'Mano a mano, I see you in slow mo\'',
      romanization: '/ˌmɑːnoʊ ə ˈmɑːnoʊ aɪ siː juː ɪn ˈsloʊ moʊ/',
      naturalTranslation: '一對一正面正面對峙，你在我眼中全成了慢動作無所遁形！',
      pillChips: [
        {
          id: 'spe1',
          text: 'Mano a mano',
          rom: '/ˌmɑːnoʊ ə ˈmɑːnoʊ/',
          type: 'idiom-latin',
          typeLabel: '西語借詞 / 英語慣用格鬥成語',
          lemma: 'mano a mano (hand-to-hand)',
          meaning: '一對一正面肉搏 / 單挑交鋒',
          explanation: '源自西班牙語「手對手（hand to hand）」，引申為男子漢/強者之間光明正大、針鋒相對的一對一單挑。'
        },
        {
          id: 'spe2',
          text: 'slow mo\'',
          rom: '/ˈsloʊ moʊ/',
          type: 'slang-abbreviation',
          typeLabel: '流行美語縮寫',
          lemma: 'slow motion',
          meaning: '慢動作 / 速度如停格一般',
          explanation: '「slow motion」的街頭縮寫。在饒舌中指自己反應神速、感知超群，對手的動作如同慢動作般容易看穿。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '副詞狀語片語 (Mano a mano) + 主詞動詞受詞 (I see you) + 方式介系詞片語 (in slow mo\')',
          tokens: [
            { term: 'Mano a mano', role: '外來成語副詞', desc: '正面交鋒、一對一對戰。' },
            { term: 'I see you', role: '主謂賓', desc: '清晰洞悉對手動向。' },
            { term: 'in slow mo\'', role: '方式片語', desc: '如慢動作電影分鏡般盡收眼底。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˌmɑːnoʊ ə ˈmɑːnoʊ aɪ siː juː ɪn ˈsloʊ moʊ]',
          singingTips: '「mano」尾韻 /oʊ/ 與「slow mo\'」的 /oʊ/ 形成完美的雙重跨句雙元音押韻！',
          rules: [
            {
              title: '雙元音尾韻押韻 (Assonance Rhyme)',
              badge: 'Rap Flow技巧',
              detail: 'Mano a mano 與 slow mo 均押 /oʊ/ 音，朗讀時節奏重音切在 ma- 與 mo- 上。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '格鬥對抗霸氣',
              badge: '競賽狠話',
              form: 'Mano a mano, I see you in slow mo\'.',
              scene: '電競對決或街舞 battle 當面對手宣告'
            },
            {
              name: '標準商務競爭 (Professional / Formal)',
              badge: '商業競爭',
              form: 'We are prepared to compete directly head-to-head in this market.',
              scene: '企業高層在招標競爭中宣告全面直球對決'
            }
          ],
          realLifeExample: {
            scenario: '籃球 1 對 1 街頭鬥牛前挑釁開場',
            dialogue: [
              { speaker: 'Player A', text: 'You think you can get past my defense?', trans: '你覺得你能過得了我的防守嗎？' },
              { speaker: 'Player B', text: 'Mano a mano! You already moving in slow mo\' to me.', trans: '來一對一單挑！在我眼裡你動作已經跟慢動作一樣了。' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:31',
      timeSec: 31.4,
      korean: 'Do or die, On my life, Yeah you ain\'t seen nothing yet',
      text: 'Do or die, On my life, Yeah you ain\'t seen nothing yet',
      romanization: '/duː ɔːr daɪ ɑːn maɪ laɪf jæ juː eɪnt siːn ˈnʌθɪŋ jɛt/',
      naturalTranslation: '破釜沈舟背水一戰，以我的性命作賭注擔保，這一切才剛開始，真正的殺手鐧你還沒見識過呢！',
      pillChips: [
        {
          id: 'spe3',
          text: 'Do or die',
          rom: '/duː ɔːr daɪ/',
          type: 'proverb-idiom',
          typeLabel: '經典英文成語',
          lemma: 'do or die',
          meaning: '背水一戰 / 不成功便成仁',
          explanation: '極限情境下必須竭盡全力、毫無退路的死戰決心。'
        },
        {
          id: 'spe4',
          text: 'On my life',
          rom: '/ɑːn maɪ laɪf/',
          type: 'oath-idiom',
          typeLabel: '發誓誓言慣用語',
          lemma: 'swear on my life',
          meaning: '以性命起誓擔保 / 絕對千真萬確',
          explanation: '口語中極高強度的承諾發誓，相當於「I swear on everything I love」。'
        },
        {
          id: 'spe5',
          text: 'ain\'t seen nothing yet',
          rom: '/eɪnt siːn ˈnʌθɪŋ jɛt/',
          type: 'double-negative-slang',
          typeLabel: '道地口語雙重否定慣用語',
          lemma: 'haven\'t seen anything yet',
          meaning: '精彩高潮還在後頭 / 好戲正要開場',
          explanation: '流行美語著名成語！雖然語法上為雙重否定（ain\'t + nothing），但口語中代表強烈肯定：「最驚艷絕倫的場面你根本還沒見過！」'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '並列決心片語 (Do or die) + 誓言修飾狀語 (On my life) + 雙重否定現在完成名句 (you ain\'t seen nothing yet)',
          tokens: [
            { term: 'Do or die', role: '固定成語', desc: '破釜沈舟、孤注一擲。' },
            { term: 'On my life', role: '誓言片語', desc: '以人格性命起誓。' },
            { term: 'ain\'t', role: '口語縮寫助動詞', desc: '替代 have not，具有濃厚街頭氣場。' },
            { term: 'nothing yet', role: '雙重否定加強', desc: '表示精彩才正要上演。' }
          ]
        },
        pronunciation: {
          actualSound: '[duː ər daɪ ɑːn maɪ laɪf jæ juː eɪnt siːn ˈnʌθɪŋ jɛt]',
          singingTips: '「die」與「life」形成內押韻，最後的「yet」急停咬住（Unreleased T），充滿果敢定奪感！',
          rules: [
            {
              title: '雙重否定俚語 (Double Negative in AAVE)',
              badge: '俚語語法',
              detail: '標準語法需寫為「You haven\'t seen anything yet」，但嘻哈文化中雙重否定「ain\'t seen nothing」更顯霸氣地道。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈熱血豪言',
              badge: '極致自信',
              form: 'Do or die, on my life, you ain\'t seen nothing yet.',
              scene: '重大演唱會或體育總決賽中誓言拔得頭籌'
            },
            {
              name: '正式商業信心承諾 (Executive Reassurance)',
              badge: '商業宣示',
              form: 'We are fully committed to this mission, and the greatest innovations are yet to come.',
              scene: '科技發布會執行長向全球投資人保證未來潛力'
            }
          ],
          realLifeExample: {
            scenario: '創業團隊在第一階段獲得巨大反響後對未來的展望',
            dialogue: [
              { speaker: 'Investor', text: 'Your initial launch numbers exceeded all our expectations!', trans: '你們的第一波發布數據超越了我們所有人的預期！' },
              { speaker: 'Founder', text: 'Thank you! But trust me, you ain\'t seen nothing yet. The real breakthrough is coming next quarter.', trans: '謝謝！但相信我，最精彩的你們還沒見到呢，真正的突破下季度才要登場。' }
            ]
          }
        }
      }
    }
  ]
};
