// BABYMONSTER - 《SHEESH》 韓英雙語歌詞深度研習資料包
// 收錄官方主打代表作《SHEESH》16 句完整核心中韓英精解（8 句韓語核心語法 + 8 句英語嘻哈絕招）：
// 1. 韓語 (Korean): 
//    - 발버둥 쳐봐 (掙扎徒勞)、손바닥 위 (掌中之物 / 孫悟空五指山)
//    - 눈을 뜬 순간 (睜眼覺醒)、불을 질러라 (點燃全場祈使命令)
//    - 걍 들이부어라 (傾瀉直灌)、네 달팽이관에 (耳蝸聽覺神經)
//    - 네 귀에 줄 축복 (耳膜恩賜)、음악에 맞춰 춤 춰 (隨樂起舞)
//    - 분위기 타올라 (氣氛沸騰)、눈 돌아 (瞠目結舌)、띵하니 적잖이 충격 (發懵強烈震憾)
//    - 홈런은 쳤고 (轟出全壘打)、어중이떠중이 (三流雜牌/半吊子)、중간 아님 (絕非平庸)
//    - 마음껏 웃어봐 (盡情嘲笑吧)、이젠 내 차례니까 (因為現在輪到我)
//    - 천천히 불태워 (慢火燃盡)、네가 잠든 사이 (熟睡之際)、온 세상을 뒤집어 (顛覆世界)
// 2. 英語 (English):
//    - Mano a mano (一對一正面單挑)、I see you in slow mo' (慢動作洞悉)
//    - Do or die (全力以赴不成功便成仁)、On my life (賭上性命起誓)、ain't seen nothing yet (好戲還在後頭)
//    - Got them all going Sheesh (掀起全場驚嘆暴動)
//    - 닫혔던 입들 say Sheesh (質疑之嘴啞口無言開口驚嘆)
//    - You know what it is (心知肚明)、I be running this (非裔美語習慣態：掌控全局)
//    - Pull up in a ghost (勞斯萊斯幽靈豪邁現身)、Peek-a-boo (捉迷藏突襲)
//    - Pedal to the metal (油門踩到底全力加速)、pump pump pop (心跳狂飆)
//    - Jump jump and let it go (盡情釋放)、Watch out we on a roll (小心注目勢不可擋)

export const SHEESH_STUDY_DATA = {
  id: 'sheesh',
  title: 'SHEESH',
  artist: 'BABYMONSTER',
  album: '首張迷你專輯《BABYMONS7ER》',
  year: '2024',
  youtubeId: '2wA_b6YHjqQ', // Official MV
  altYoutubeIds: ['2wA_b648RqQ', '0k5G6F0pWoc', '60Hx2Tdsxzw', 'edheIIVQ6Mg', '9Y-95rgsDDY'],
  sentences: [
    // =========================================================================
    // 🇰🇷 韓語歌詞研習句目 (Korean Study Sentences: 1 - 8)
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
          explanation: '比喻一切都在絕對掌控之中，源於如來佛五指山掌控全局的典故。'
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
    {
      id: 'sh-ko-3',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:54',
      timeSec: 54.0,
      korean: 'Yo hold on 쉿, 걍 들이부어라 네 달팽이관에',
      text: 'Yo hold on 쉿, 걍 들이부어라 네 달팽이관에',
      romanization: 'Yo hold on swit, gyang deul-i-bu-eo-ra ne dal-paeng-i-gwan-e',
      naturalTranslation: 'Yo 稍等一下，噓！儘管將狂暴的節奏直接灌進你的耳蝸耳膜裡吧！',
      pillChips: [
        {
          id: 'sp8',
          text: '쉿',
          rom: 'swit',
          type: 'interjection',
          typeLabel: '擬聲感嘆詞',
          lemma: '쉿',
          meaning: '噓！安靜！',
          explanation: '要求全場肅靜的感嘆詞，在嘻哈 Rap 中常作為強烈節拍切分與反差聚焦點。'
        },
        {
          id: 'sp9',
          text: '걍',
          rom: 'gyang',
          type: 'slang-abbreviation',
          typeLabel: '高頻街頭縮寫副詞',
          lemma: '그냥 (geu-nyang)',
          meaning: '就直接 / 索性 / 乾脆',
          explanation: '韓國年輕人日常口語中「그냥（就這樣、乾脆）」的極速單音節縮寫，街頭饒舌快嘴必備！'
        },
        {
          id: 'sp10',
          text: '들이부어라',
          rom: 'deul-i-bu-eo-ra',
          type: 'imperative-verb',
          typeLabel: '接頭辭複合動詞 + 命令語尾',
          lemma: '들이붓다 + -어라',
          meaning: '猛烈灌注吧 / 大口傾瀉而入',
          explanation: '接頭辭「들이-（使勁、猛然）」+ 動詞「붓다（倒、灌）」，比喻音樂音浪強橫無比地傾洩注入！'
        },
        {
          id: 'sp11',
          text: '네 달팽이관에',
          rom: 'ne dal-paeng-i-gwan-e',
          type: 'noun-phrase',
          typeLabel: '代名詞 + 解剖名詞 + 與格助詞',
          lemma: '네 + 달팽이관 + -에',
          meaning: '進到你的耳蝸裡',
          explanation: '「달팽이（蝸牛）」+「관（管）」，醫學名詞「耳蝸管（cochlea）」，饒舌中形容音樂直擊最深層聽覺感知！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '英文節奏停頓 (Yo hold on) + 感嘆肅靜詞 (쉿) + 縮寫副詞 (걍) + 猛烈命令祈使動詞 (들이부어라) + 倒裝空間受格 (네 달팽이관에)',
          tokens: [
            { term: '쉿', role: '擬聲詞', desc: '發出噓聲，示意全神貫注。' },
            { term: '걍', role: '口語縮寫', desc: '「그냥」的極簡化副詞。' },
            { term: '들이붓다', role: '複合動詞', desc: '傾盆倒出、強烈灌入。' },
            { term: '-어라', role: '命令語尾', desc: '非敬語強勢命令法。' },
            { term: '달팽이관', role: '名詞', desc: '內耳的耳蝸組織。' },
            { term: '-에', role: '方向處所助詞', desc: '表示傾倒注入的目標終點。' }
          ]
        },
        pronunciation: {
          actualSound: '[요 홀드 온 쉳 걍 들이부어라 네 달팽이과네]',
          singingTips: '「쉿」音節要戛然而止（閉唇急煞），「걍 들이부어라」六個字要以機關槍般的 16 分音符無縫吐出！',
          rules: [
            {
              title: 'ㅅ 收音代表音 (Neutralization)',
              badge: '收音規則',
              detail: '「쉿」的底層收音 ㅅ 在單音節停頓時轉為代表音 ㄷ，發音為短促收住的 [쉳]。'
            },
            {
              title: '連音化音變 (Liaison)',
              badge: '連音音變',
              detail: '「달팽이관에」中的 ㄴ 遇後方母音 에 連讀成 [달팽이과네]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極速嘻哈霸王非敬語',
              badge: '舞台快嘴',
              form: '걍 들이부어라 네 달팽이관에!',
              scene: '饒舌歌手開口炸場，宣告全場耳膜即將承受最狂聽覺暴擊'
            },
            {
              name: '日常口語分享 (Polite / 해요체)',
              badge: '生活推薦',
              form: '이 노래 비트 장난 아니에요, 꼭 이어폰으로 들어보세요!',
              scene: '向朋友推薦震撼重低音好歌，請對方一定要用好耳機聽'
            }
          ],
          realLifeExample: {
            scenario: '耳機重度發燒友向死黨安利頂級 Hi-Fi 饒舌曲目',
            dialogue: [
              { speaker: '민수 (民秀)', text: '이 곡 베이스 라인이 왜 이렇게 묵직해?', trans: '這首歌的 Bass Line 怎麼這麼厚實沈重？' },
              { speaker: '지호 (志鎬)', text: '볼륨 키우고 달팽이관에 걍 들이부어 봐, 완전 미쳤어!', trans: '音量推到底直接灌進你耳膜裡試試，簡直絕了！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-ko-4',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:56',
      timeSec: 56.2,
      korean: '이건 네 귀에 줄 축복, 음악에 맞춰 걍 춤 춰',
      text: '이건 네 귀에 줄 축복, 음악에 맞춰 걍 춤 춰',
      romanization: 'I-geon ne gwi-e jul chuk-bok, eum-ak-e mat-chwo gyang chum chwo',
      naturalTranslation: '這首神曲就是賜予你雙耳的莫大恩賜，跟著音樂節拍痛痛快快舞動吧！',
      pillChips: [
        {
          id: 'sp12',
          text: '이건',
          rom: 'i-geon',
          type: 'pronoun-subject',
          typeLabel: '指示代名詞 + 主格主題助詞',
          lemma: '이것 + -은',
          meaning: '這個呢 / 此事',
          explanation: '口語縮寫，「이것은」極速壓縮成「이건」。'
        },
        {
          id: 'sp13',
          text: '귀에 줄 축복',
          rom: 'gwi-e jul chuk-bok',
          type: 'idiom-noun',
          typeLabel: '受格 + 將來定語 + 漢字名詞',
          lemma: '귀 + -에 + 주다 + -(으)ㄹ + 축복 (祝福)',
          meaning: '將給予耳朵的祝福恩賜',
          explanation: '韓國流行文化稱美妙天籟或絕世 Beat 為「귀호강（耳朵享福）」或「귀에 주는 축복」。'
        },
        {
          id: 'sp14',
          text: '음악에 맞춰',
          rom: 'eum-ak-e mat-chwo',
          type: 'adverbial-phrase',
          typeLabel: '名詞 + 副詞助詞 + 配合動詞',
          lemma: '음악 + -에 + 맞추다 + -어',
          meaning: '順應配合音樂節奏',
          explanation: '動詞「맞추다（對準、契合、迎合）」，「음악에 맞춰」意為隨著音樂起舞。'
        },
        {
          id: 'sp15',
          text: '춤 춰',
          rom: 'chum chwo',
          type: 'cognate-object-verb',
          typeLabel: '同源同根動詞短語',
          lemma: '춤(을) 추다',
          meaning: '跳舞吧',
          explanation: '名詞「춤（舞蹈）」與動詞「추다（跳）」，非敬語命令口語「춤 춰」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '主題縮寫句 (이건) + 未來定語修飾名詞 (네 귀에 줄 축복) + 狀語從句 (음악에 맞춰) + 命令短語 (걍 춤 춰)',
          tokens: [
            { term: '이건', role: '代名詞', desc: '這首歌、這段音樂。' },
            { term: '주다 + -(으)ㄹ', role: '冠形未來時態', desc: '即將帶給受詞的行為。' },
            { term: '축복 (祝福)', role: '名詞', desc: '極高讚譽的聽覺享受。' },
            { term: '맞추다', role: '動詞', desc: '使節奏契合對位。' },
            { term: '춤을 추다', role: '同根動詞', desc: '盡情舞蹈。' }
          ]
        },
        pronunciation: {
          actualSound: '[이건 네 귀에 줄 축뽁 음악에 마춰 걍 춤 춰]',
          singingTips: '「축복」在 ㄹ 後發生硬音化發 [축뽁]，「음악에」連讀為 [으마게]，「맞춰」發音清脆爆破 [마춰]！',
          rules: [
            {
              title: '連音化現象 (연음화)',
              badge: '連音法則',
              detail: '「음악에」的收音 ㄱ 移至後方初聲 ㅇ，讀作平順的 [으마게]。'
            },
            {
              title: '濃音化 / 硬音化 (Tensing)',
              badge: '硬音化',
              detail: '冠形語尾 -(으)ㄹ 後方接松音 ㅂ 時，常誘發濃音 ㅃ，讀作 [축뽁]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '派對號召平語',
              badge: '派對領袖',
              form: '음악에 맞춰 걍 춤 춰!',
              scene: '夜店或慶典舞台 DJ 帶動全場氣氛甩開拘束狂舞'
            },
            {
              name: '日常禮貌邀請 (Polite / 해요체)',
              badge: '親切邀舞',
              form: '좋은 음악 나오는데 같이 춤춰봐요!',
              scene: '舞會或舞蹈教室邀約同伴一起隨節拍舞動'
            }
          ],
          realLifeExample: {
            scenario: '練舞室中隊長為隊員放了一首重低音嗨歌打氣',
            dialogue: [
              { speaker: '팀원 (隊員)', text: '오늘 안무 너무 복잡해서 머리 아파요.', trans: '今天的編舞太複雜了，頭好痛。' },
              { speaker: '리더 (隊長)', text: '생각 비우고 음악에 맞춰서 걍 춤 춰봐, 몸이 먼저 기억할 거야!', trans: '把腦袋放空，順著音樂乾脆放開跳，身體會先記住節拍的！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-ko-5',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:01',
      timeSec: 61.6,
      korean: '분위기 타올라 너네들 눈 돌아, 띵하니 적잖이 충격일 거야',
      text: '분위기 타올라 너네들 눈 돌아, 띵하니 적잖이 충격일 거야',
      romanization: 'Bun-wi-gi ta-ol-la neo-ne-deul nun dor-a, tting-ha-ni jeok-jan-i chung-gyeok-il geo-ya',
      naturalTranslation: '氣氛狂熱沸騰讓你們目瞪口呆，腦袋發懵呆若木雞，這震撼肯定著實不小吧！',
      pillChips: [
        {
          id: 'sp16',
          text: '분위기 타올라',
          rom: 'bun-wi-gi ta-ol-la',
          type: 'idiom-verb',
          typeLabel: '漢字主語 + 燃燒複合動詞',
          lemma: '분위기 (氛圍氣) + 타오르다',
          meaning: '氛圍燃燒沸騰 / 場面徹底嗨爆',
          explanation: '動詞「타다（燃燒）」+「오르다（攀升）」，形容現場氛圍如同火焰般熊熊向上狂竄！'
        },
        {
          id: 'sp17',
          text: '눈 돌아',
          rom: 'nun dor-a',
          type: 'idiom-expression',
          typeLabel: '高頻慣用語',
          lemma: '눈(이) 돌다',
          meaning: '目瞪口呆 / 眼珠翻轉看呆了',
          explanation: '字面「眼球轉動」，形容因驚異、震撼或刺激而失去冷靜、完全看傻了眼。'
        },
        {
          id: 'sp18',
          text: '띵하니',
          rom: 'tting-ha-ni',
          type: 'mimetic-adverb',
          typeLabel: '感官擬態副詞',
          lemma: '띵하다 + -니',
          meaning: '腦袋發懵 / 一陣暈眩空白',
          explanation: '形容被重擊或極度震驚時，大腦發出一陣「噹——（띵）」的發昏空白感。'
        },
        {
          id: 'sp19',
          text: '적잖이',
          rom: 'jeok-jan-i',
          type: 'pure-korean-adverb',
          typeLabel: '高級純韓副詞',
          lemma: '적지 아니하다 -> 적잖다 + -이',
          meaning: '著實不少 / 相當深刻',
          explanation: '「적지 않다（不算少）」的極致簡化副詞形式，書面語與歌詞中用來表達「程度相當驚人、不可小覷」。'
        },
        {
          id: 'sp20',
          text: '충격일 거야',
          rom: 'chung-gyeok-il geo-ya',
          type: 'future-conjecture',
          typeLabel: '名詞 + 推測語尾',
          lemma: '충격 (衝擊) + -이다 + -(으)ㄹ 것 + -이야',
          meaning: '肯定是一記沈重震撼吧',
          explanation: '漢字詞「衝擊」加上推測語尾「-(으)ㄹ 거야」，自信滿滿預言對方必定心神巨震。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '並列主謂句 (분위기 타올라) + 慣用心理狀態句 (너네들 눈 돌아) + 雙重擬態副詞狀語 (띵하니 적잖이) + 確定推測句尾 (충격일 거야)',
          tokens: [
            { term: '타오르다', role: '動詞', desc: '如烈火般燃燒升溫。' },
            { term: '눈이 돌다', role: '身體慣用語', desc: '眼神失焦、被極大衝擊所撼動。' },
            { term: '띵하다', role: '形容詞幹', desc: '腦袋發脹發木。' },
            { term: '적잖이', role: '高級副詞', desc: '程度十分顯著、絕非一般。' },
            { term: '-(으)ㄹ 거야', role: '推測非敬語', desc: '十拿九穩的自信推斷。' }
          ]
        },
        pronunciation: {
          actualSound: '[분위기 타올라 너네들 눈 도라 띵하니 적짜니 충겨길 거야]',
          singingTips: '「눈 돌아」發生連音 [눈 도라]，「적잖이」中的 ㄶ 遇到 ㅇ 會脫落變成 [적짜니]，濃音爆發力十足！',
          rules: [
            {
              title: '雙收音 ㄶ 音變規則 (ㅎ脫落與激音/濃音化)',
              badge: '特殊音變',
              detail: '「적잖이」雙收音 ㄶ 中 ㄴ保留、ㅎ遇到初聲 ㅇ 時脫落，但前字 ㄱ 受到影響緊喉化讀成 [적짜니]。'
            },
            {
              title: '連音化 (연음화)',
              badge: '連音現象',
              detail: '「충격일」的收音 ㄱ 移至後方初聲 ㅇ，讀作 [충겨길]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '饒舌狠話自信宣布',
              badge: '王牌自信',
              form: '띵하니 적잖이 충격일 거야.',
              scene: '實力完全碾壓對手後，冷靜吐出這句讓對手無地自容'
            },
            {
              name: '日常幽默安撫 (Polite / 해요체)',
              badge: '幽默打趣',
              form: '소식 듣고 다들 적잖이 놀라셨을 거예요.',
              scene: '公布意料之外的重磅喜訊後，向大家幽默致意'
            }
          ],
          realLifeExample: {
            scenario: '黑馬選手在決賽以滿分絕技反超奪冠後',
            dialogue: [
              { speaker: '해설자 (解說員)', text: '방금 그 신기술 뭐였죠?! 현장이 발칵 뒤집혔습니다!', trans: '剛才那個新招是什麼？！全場徹底翻騰了！' },
              { speaker: '동료 (隊友)', text: '심사위원들도 눈 돌았어, 적잖이 충격받았을걸!', trans: '連評審們都看傻了眼，受到的震撼肯定著實不小！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-ko-6',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:06',
      timeSec: 66.7,
      korean: 'Crown this queen, 홈런은 쳤고 내 다음은 위, 어중이떠중이 중간 아님',
      text: 'Crown this queen, 홈런은 쳤고 내 다음은 위, 어중이떠중이 중간 아님',
      romanization: 'Crown this queen, hom-reon-eun chyeot-go nae da-eum-eun wi, eo-jung-i-tteo-jung-i jung-gan a-nim',
      naturalTranslation: '為這位女王加冕！全壘打早已經轟出場外，我的下個目標唯有更高處，三流平庸之輩休想與我並論！',
      pillChips: [
        {
          id: 'sp21',
          text: 'Crown this queen',
          rom: '/kraʊn ðɪs kwiːn/',
          type: 'english-hiphop',
          typeLabel: '英文嘻哈宣言',
          lemma: 'crown this queen',
          meaning: '給女王戴上王冠',
          explanation: '霸氣宣告女性主宰地位，宣告自己已登基王位。'
        },
        {
          id: 'sp22',
          text: '홈런은 쳤고',
          rom: 'hom-reon-eun chyeot-go',
          type: 'verb-past-connective',
          typeLabel: '名詞 + 過去式 + 並列連接詞尾',
          lemma: '홈런 (Home Run) + 치다 + -았/었- + -고',
          meaning: '全壘打已經打了出來',
          explanation: '棒球術語「全壘打（홈런）」比喻已取得決定性巨大勝利，用「-고」連接下一階段更高目標。'
        },
        {
          id: 'sp23',
          text: '내 다음은 위',
          rom: 'nae da-eum-eun wi',
          type: 'noun-phrase',
          typeLabel: '所有格 + 名詞 + 方位詞',
          lemma: '내 + 다음 + -은 + 위',
          meaning: '我的下一步就是頂峰',
          explanation: '簡潔無比的宣言：成功只是常態，我的目標永遠在更高的巔峰！'
        },
        {
          id: 'sp24',
          text: '어중이떠중이',
          rom: 'eo-jung-i-tteo-jung-i',
          type: 'pure-korean-idiom',
          typeLabel: '純韓語高級成語',
          lemma: '어중이떠중이',
          meaning: '烏合之眾 / 三教九流平庸之徒',
          explanation: '韓國國語大辭典收錄經典成語！指毫無真本領、東拼西湊混在中間的雜牌泛泛之輩。'
        },
        {
          id: 'sp25',
          text: '중간 아님',
          rom: 'jung-gan a-nim',
          type: 'negation-noun-ending',
          typeLabel: '名詞 + 否定形容詞名詞形語尾',
          lemma: '중간 + 아니다 + -(으)ㅁ',
          meaning: '絕非中庸半吊子',
          explanation: '名詞化語尾「-ㅁ」，展現社群簡訊或饒舌冷硬堅決的斷定語調。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '加冕動名短語 (Crown this queen) + 既成事實並列 (홈런은 쳤고) + 志向斷定 (내 다음은 위) + 成語名詞否定斷言 (어중이떠중이 중간 아님)',
          tokens: [
            { term: '홈런을 치다', role: '慣用語', desc: '擊出全壘打、大獲全勝。' },
            { term: '-았/었- + -고', role: '時態接續', desc: '先完成前項動作，接續後項。' },
            { term: '위', role: '方位名詞', desc: '頂峰、雲霄之上。' },
            { term: '어중이떠중이', role: '成語名詞', desc: '三流平庸烏合之眾。' },
            { term: '아니다 -> 아님', role: '名詞形終結', desc: '截斷式強烈否定。' }
          ]
        },
        pronunciation: {
          actualSound: '[크라운 디스 퀸 홈러는 첟꼬 내 다으믄 위 어중이떠중이 중간 아님]',
          singingTips: '「어중이떠중이」是全曲最考驗舌尖彈性與節拍重音的饒舌字串，五個音節均勻滑順，收尾「아님」急煞！',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '連音法則',
              detail: '「홈런은」[홈러는] 與「다음은」[다으믄] 尾音平穩滑向後母音。'
            },
            {
              title: '收音代表音與濃音化',
              badge: '硬音化',
              detail: '「쳤고」的 ㅆ 發 ㄷ 代表音，並誘發後方 ㄱ 濃音化為 [첟꼬]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '頂級巨星霸氣名詞形語尾',
              badge: '絕對高標',
              form: '어중이떠중이 중간 아님.',
              scene: '宣告自己對藝術標準有極高潔癖，拒絕平庸半吊子'
            },
            {
              name: '履歷面試高級自信表達 (Formal)',
              badge: '專業志向',
              form: '적당한 성과에 안주하지 않고 항상 최고를 지향합니다.',
              scene: '求職時向主考官自信表明不滿足於現狀、永遠挑戰頂尖'
            }
          ],
          realLifeExample: {
            scenario: '創業家向投資人闡述產品定位',
            dialogue: [
              { speaker: '투자자 (投資人)', text: '경쟁사들이 중저가 시장에 많이 진입하고 있는데요?', trans: '競爭對手很多都切入中低階市場了呢？' },
              { speaker: '대표 (創辦人)', text: '저희는 어중이떠중이 중간 브랜드가 아닙니다. 시장 1위 프리미엄만 봅니다.', trans: '我們絕不是半吊子平庸品牌，我們眼中只有市場第一的頂級標竿。' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-ko-7',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:51',
      timeSec: 111.0,
      korean: '마음껏 웃어봐, 이젠 내 차례니까',
      text: '마음껏 웃어봐, 이젠 내 차례니까',
      romanization: 'Ma-eum-kkeot u-seo-bwa, i-jen nae cha-rye-ni-kka',
      naturalTranslation: '趁現在盡情嘲笑個夠吧，因為從此以後，就是我的逆襲主場了！',
      pillChips: [
        {
          id: 'sp26',
          text: '마음껏',
          rom: 'ma-eum-kkeot',
          type: 'adverb-compound',
          typeLabel: '名詞 + 極致接尾辭副詞',
          lemma: '마음 + -껏',
          meaning: '盡情地 / 隨心所欲地',
          explanation: '名詞「마음（心）」加上接尾辭「-껏（到最大極限）」，組成「隨心痛快、毫不保留」。'
        },
        {
          id: 'sp27',
          text: '웃어봐',
          rom: 'u-seo-bwa',
          type: 'verb-challenge',
          typeLabel: '動詞 + 嘗試挑釁語尾',
          lemma: '웃다 + -아/어 보다',
          meaning: '儘管笑笑看吧',
          explanation: '動詞「웃다（笑/冷笑）」結合「-아/어 보다」，此處具有強烈的反諷挑釁意味。'
        },
        {
          id: 'sp28',
          text: '이젠',
          rom: 'i-jen',
          type: 'time-adverb',
          typeLabel: '時間名詞縮寫',
          lemma: '이제 + -는',
          meaning: '從現在起 / 如今',
          explanation: '口語中「이제는」的標準縮寫，標誌著局勢與攻守的徹底反轉！'
        },
        {
          id: 'sp29',
          text: '내 차례니까',
          rom: 'nae cha-rye-ni-kka',
          type: 'causal-clause',
          typeLabel: '名詞 + 因果主觀接續語尾',
          lemma: '내 + 차례 (次例) + -(이)니까',
          meaning: '因為輪到我的回合了',
          explanation: '漢字詞「차례（輪替次序）」，句尾「-(이)니까」強調說話者自信不可動搖的主觀理由。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '反諷祈使句 (마음껏 웃어봐) + 時間反轉因果句 (이젠 내 차례니까)',
          tokens: [
            { term: '마음껏', role: '副詞', desc: '任憑心思盡情揮灑。' },
            { term: '웃다', role: '動詞原型', desc: '笑、譏笑、傲然發笑。' },
            { term: '-아/어 보다', role: '輔助動詞', desc: '嘗試體驗動作。' },
            { term: '이제는 -> 이젠', role: '時間詞縮寫', desc: '時間轉折點。' },
            { term: '차례', role: '名詞', desc: '輪到的位次與回合。' },
            { term: '-(이)니까', role: '原因接續', desc: '提供不容置疑的正當理由。' }
          ]
        },
        pronunciation: {
          actualSound: '[마음껃 우서봐 이젠 내 차례니까]',
          singingTips: '「마음껏」尾音 ᆺ 發 ㄷ 代表音，「웃어봐」發生流暢連音讀作 [우서봐]，聲線由輕蔑冷笑轉為 Bridge 的高音爆發！',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '核心連音',
              detail: '「웃어봐」中收音 ㅅ 遇到母音 어，平滑後移發音為 [우서봐]。'
            },
            {
              title: '音節末代表音 (음절 끝소리)',
              badge: '收音規則',
              detail: '「마음껏」在停頓時收音 ㅅ 實讀為 ㄷ [마음껃]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '逆襲主角非敬語 (Pan-mal)',
              badge: '反攻宣告',
              form: '마음껏 웃어봐, 이젠 내 차례니까.',
              scene: '忍辱負重後終於登上屬於自己的決勝舞台，向所有質疑者宣告反擊'
            },
            {
              name: '日常遊戲換手 (Polite / 해요체)',
              badge: '日常打趣',
              form: '실컷 웃으세요, 이제 제 차례예요!',
              scene: '桌遊或電競輪到自己操作，胸有成竹準備反敗為勝'
            }
          ],
          realLifeExample: {
            scenario: '選秀比賽中長期被低估的選手在決賽前的獨白',
            dialogue: [
              { speaker: '상대방 (對手)', text: '네가 우리 팀을 이길 수 있을 것 같아?', trans: '你覺得你能贏得了我們這隊？' },
              { speaker: '나 (我)', text: '마음껏 비웃어둬, 곧 내 차례가 올 테니까!', trans: '儘管嘲笑個夠吧，因為我的主場回合馬上就要降臨了！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-ko-8',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '01:57',
      timeSec: 117.4,
      korean: '천천히 불태워 네가 잠든 사이, 온 세상을 뒤집어',
      text: '천천히 불태워 네가 잠든 사이, 온 세상을 뒤집어',
      romanization: 'Cheon-cheon-hi bul-tae-wo ne-ga jam-deun sa-i, on se-sang-eul dwi-jib-eo',
      naturalTranslation: '趁著你渾然熟睡之際，將一切靜靜點燃燒盡，隨後把整個世界徹底顛覆翻轉！',
      pillChips: [
        {
          id: 'sp30',
          text: '천천히',
          rom: 'cheon-cheon-hi',
          type: 'manner-adverb',
          typeLabel: '時間態度副詞',
          lemma: '천천히',
          meaning: '慢慢地 / 從容不迫地',
          explanation: '副詞，形容不疾不徐、按照縝密計畫推進。'
        },
        {
          id: 'sp31',
          text: '불태워',
          rom: 'bul-tae-wo',
          type: 'causative-verb',
          typeLabel: '使動動詞非敬語體',
          lemma: '불태우다 + -어',
          meaning: '燃燒殆盡 / 點燃烈焰',
          explanation: '使動詞（Causative），「불（火）」+「태우다（使之燃燒）」，比喻全身心毫無保留的燃燒。'
        },
        {
          id: 'sp32',
          text: '잠든 사이',
          rom: 'jam-deun sa-i',
          type: 'noun-modifier-phrase',
          typeLabel: '動詞過去定語 + 空間間隔名詞',
          lemma: '잠들다 + -(으)ㄴ + 사이',
          meaning: '沉睡之間的縫隙',
          explanation: '「잠들다（入睡）」，修飾名詞「사이（時間間隙）」，象徵在對手毫無防備的盲區完成致命佈局。'
        },
        {
          id: 'sp33',
          text: '온 세상을 뒤집어',
          rom: 'on se-sang-eul dwi-jib-eo',
          type: 'idiom-verb-phrase',
          typeLabel: '冠詞 + 名詞 + 受格助詞 + 顛覆動詞',
          lemma: '온 + 세상 + -을 + 뒤집다 + -어',
          meaning: '顛覆掀翻整個世界',
          explanation: '冠形詞「온（整個、全方位）」修飾「세상（世界）」，動詞「뒤집다（上下顛倒翻過來）」，比喻改寫時代秩序！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '副詞狀語 (천천히) + 使動謂語 (불태워) + 時間限制副詞片語 (네가 잠든 사이) + 全稱受格顛覆句 (온 세상을 뒤집어)',
          tokens: [
            { term: '천천히', role: '狀態副詞', desc: '循序漸進、從容沉著。' },
            { term: '불태우다', role: '使動動詞', desc: '使其燃燒、化作烈火。' },
            { term: '잠들다', role: '動詞幹', desc: '陷入深層睡眠。' },
            { term: '사이', role: '名詞', desc: '時間長度或縫隙。' },
            { term: '온', role: '冠形詞', desc: '所有的、全面的。' },
            { term: '뒤집다', role: '動詞', desc: '翻天覆地、推翻格局。' }
          ]
        },
        pronunciation: {
          actualSound: '[천천히 불태워 네가 잠든 사이 온 세상을 뒤지버]',
          singingTips: 'Bridge 的情感轉折核心！「천천히 불태워」輕聲耳語營造神秘危險感，到「온 세상을 뒤집어」聲壓陡增全開！',
          rules: [
            {
              title: '連音化 (연음화)',
              badge: '連音法則',
              detail: '「세상을」讀作 [세상얼]，「뒤집어」收音 ㅂ 遇到母音 어，平滑讀為 [뒤지버]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '詩意史詩非敬語',
              badge: '史詩逆襲',
              form: '온 세상을 뒤집어!',
              scene: '動漫主角或舞台王者在最高潮處宣告撼動世界的決心'
            },
            {
              name: '文雅演講書面體 (Formal)',
              badge: '演講典雅',
              form: '세상을 뒤흔들 놀라운 변화를 보여드리겠습니다.',
              scene: '科技峰會上發表顛覆性發明時向世界鄭重宣示'
            }
          ],
          realLifeExample: {
            scenario: '獨立研發團隊熬夜數年即將發布顛覆產業的革命性 App',
            dialogue: [
              { speaker: '팀원 (隊員)', text: '드디어 배포 버튼만 누르면 끝나네요.', trans: '終於只差按下發布按鈕就大功告成了。' },
              { speaker: '팀장 (組長)', text: '남들이 잠든 사이에 조용히 준비했으니, 이제 세상을 뒤집어보자!', trans: '趁著別人都睡著時我們默默備戰，現在去把這世界徹底顛覆翻新吧！' }
            ]
          }
        }
      }
    },

    // =========================================================================
    // 🇺🇸 英語歌詞研習句目 (English & Hip-hop Study Sentences: 9 - 16)
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
      naturalTranslation: '一對一正面單挑對決，你在我眼中全成了慢動作無所遁形！',
      pillChips: [
        {
          id: 'spe1',
          text: 'Mano a mano',
          rom: '/ˌmɑːnoʊ ə ˈmɑːnoʊ/',
          type: 'idiom-latin',
          typeLabel: '西語借詞 / 英語慣用格鬥成語',
          lemma: 'mano a mano (hand-to-hand)',
          meaning: '一對一正面肉搏 / 單挑交鋒',
          explanation: '源自西班牙語「手對手（hand to hand）」，引申為強者之間光明正大、針鋒相對的一對一單挑。'
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
    },
    {
      id: 'sh-en-3',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:37',
      timeSec: 37.6,
      korean: 'Got them all going Sheesh, Sheesh, Sheesh, yeah!',
      text: 'Got them all going Sheesh, Sheesh, Sheesh, yeah!',
      romanization: '/ɡɑːt ðəm ɔːl ˈɡoʊɪŋ ʃiːʃ ʃiːʃ ʃiːʃ jæ/',
      naturalTranslation: '讓全場所有人都陷入瘋狂狂歡，異口同聲驚呼 SHEESH 燃炸全場！',
      pillChips: [
        {
          id: 'spe6',
          text: 'Got them all going',
          rom: '/ɡɑːt ðəm ɔːl ˈɡoʊɪŋ/',
          type: 'idiom-causative',
          typeLabel: '使役動詞慣用語',
          lemma: 'get someone going',
          meaning: '讓所有人熱血沸騰 / 掀起狂瀾',
          explanation: '動詞「get」帶有「使之進入某種亢奮活躍狀態」，「got them all going」意為全場被點燃帶動！'
        },
        {
          id: 'spe7',
          text: 'Sheesh',
          rom: '/ʃiːʃ/',
          type: 'slang-interjection',
          typeLabel: '歐美 Gen-Z 爆款流行俚語',
          lemma: 'sheesh (interjection)',
          meaning: '太神了 / 炸裂 / 驚呆了',
          explanation: 'TikTok 與嘻哈圈瘋傳的超級讚嘆詞！源自「Geez/Jeez」，用以表達對極度酷炫、炸裂、神乎其技事物的由衷讚嘆。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '省略主詞的使役句型 (Got them all going) + 擬聲驚嘆重複疊句 (Sheesh Sheesh Sheesh yeah)',
          tokens: [
            { term: 'Got (Have)', role: '使役動詞', desc: '促使某個狀態發生。' },
            { term: 'them all', role: '代名詞受詞', desc: '在場的所有觀眾群體。' },
            { term: 'going', role: '現在分詞受補', desc: '處於嗨翻天或手舞足蹈的進行狀態。' },
            { term: 'Sheesh', role: '感嘆詞', desc: '由長音 /iː/ 與氣音 /ʃ/ 組成的驚呼炸裂聲。' }
          ]
        },
        pronunciation: {
          actualSound: '[ɡɑːt ðəm ɔːl ˈɡoʊɪŋ ʃiːʃ ʃiːʃ ʃiːʃ jæ]',
          singingTips: '發「SHEESH」時牙齒微合，舌尖稍微後縮，齒齦後部送出飽滿強勁的氣流摩擦音，音調先揚後抑！',
          rules: [
            {
              title: '代名詞弱讀 (Pronoun Reduction)',
              badge: '口語連音',
              detail: '「them」在口語中常弱讀為 /ðəm/ 甚至 /əm/，讀作 [ɡɑːt-əm ɔːl]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '社群炸裂潮流用語',
              badge: '流行爆款',
              form: 'Sheesh! That performance got everybody going!',
              scene: '看完極限扣籃或神級舞台後社群發文狂讚'
            },
            {
              name: '正統讚美 (Standard English)',
              badge: '典雅讚美',
              form: 'The performance was absolutely spectacular and captivated the entire audience.',
              scene: '正式樂評文章或新聞專題讚揚藝術家的感染力'
            }
          ],
          realLifeExample: {
            scenario: '音樂節主舞台壓軸樂隊登台帶來驚艷電吉他 Solo',
            dialogue: [
              { speaker: 'Fan 1', text: 'Did you hear that guitar riff?!', trans: '你有聽到剛才那段吉他 Solo 嗎？！' },
              { speaker: 'Fan 2', text: 'Sheesh! They got the whole crowd going crazy right now!', trans: 'Sheesh！簡直太神了，他們現在把全場觀眾都搞瘋了！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-en-4',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:10',
      timeSec: 70.3,
      korean: '날 보고 닫혔던 입들 say Sheesh, Sheesh, Sheesh',
      text: '날 보고 닫혔던 입들 say Sheesh, Sheesh, Sheesh',
      romanization: 'Nal bo-go dat-hyeot-deon ip-deul say Sheesh, Sheesh, Sheesh',
      naturalTranslation: '先前曾經質疑看衰閉上的嘴，如今注視著我都只能由衷驚嘆呼喊：SHEESH！',
      pillChips: [
        {
          id: 'spe8',
          text: '날 보고',
          rom: 'nal bo-go',
          type: 'pronoun-verb',
          typeLabel: '受格代名詞 + 凝視動詞',
          lemma: '나를 -> 날 + 보다 + -고',
          meaning: '看著我 / 注視著我',
          explanation: '口語中「나를」縮寫為「날」，動詞「보다」加上連接語尾「-고」。'
        },
        {
          id: 'spe9',
          text: '닫혔던 입들',
          rom: 'dat-hyeot-deon ip-deul',
          type: 'passive-retrospective-noun',
          typeLabel: '被動動詞回想定語 + 複數名詞',
          lemma: '닫히다 + -았/었던 + 입 + -들',
          meaning: '曾經緊閉的嘴巴們',
          explanation: '被動詞「닫히다（被關閉）」+ 回想定語語尾「-았던（過去曾經…的）」，比喻那些原本不看好、啞口無言的質疑者。'
        },
        {
          id: 'spe10',
          text: 'say Sheesh',
          rom: '/seɪ ʃiːʃ/',
          type: 'english-verb-quote',
          typeLabel: '引述動詞 + 驚嘆詞',
          lemma: 'say + Sheesh',
          meaning: '齊聲說出 Sheesh',
          explanation: '韓英無縫混血語法，將韓語名詞主詞直接銜接英語動詞「say」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '韓語回想定語名詞短語 (날 보고 닫혔던 입들) + 英語引述動詞與俚語受詞 (say Sheesh)',
          tokens: [
            { term: '날 (나를)', role: '代名詞受格', desc: '我。' },
            { term: '닫히다', role: '被動詞', desc: '被閉上。' },
            { term: '-었던', role: '過去回想冠形', desc: '修飾過去曾發生的狀態。' },
            { term: '입들', role: '名詞複數', desc: '眾人的口舌評論。' },
            { term: 'say', role: '動詞', desc: '開口說道。' }
          ]
        },
        pronunciation: {
          actualSound: '[날 보고 다톋떤 입뜰 세이 쉭 쉭 쉭]',
          singingTips: '「닫혔던」中 ㄷ 遇 ㅎ 激音化發 [다톋]，後方 ㄷ 濃音化為 [떤]，「입들」發硬音 [입뜰]，充滿咬牙切齒後的爽朗大勝！',
          rules: [
            {
              title: '激音化現象 (Aspiration / 격음화)',
              badge: '重要發音',
              detail: '收音 ㄷ 與初聲 ㅎ 結合轉為送氣激音 ㅌ [다텯]。'
            },
            {
              title: '濃音化現象 (경음화)',
              badge: '收音音變',
              detail: '收音 ㅂ 後方松音 ㄷ 硬化為 ㄸ，讀作 [입뜰]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '實力打臉黑粉非敬語',
              badge: '逆襲金句',
              form: '닫혔던 입들 say Sheesh!',
              scene: '用不可反駁的絕對實力讓所有黑粉酸民徹底閉嘴驚嘆'
            },
            {
              name: '成熟勵志感謝 (Polite)',
              badge: '溫和自信',
              form: '의심의 시선들을 멋진 무대로 극복했습니다.',
              scene: '得獎感言中感謝逆境讓自己蛻變成長'
            }
          ],
          realLifeExample: {
            scenario: '曾經落選的練習生在主打歌舞台大爆發引發全網盛讚',
            dialogue: [
              { speaker: '평론가 (樂評人)', text: '초반에 실력을 의심하던 여론이 완전히 뒤바뀌었네요.', trans: '當初質疑實力的輿論現在徹底反轉了呢。' },
              { speaker: '팬 (粉絲)', text: '맞아요, 날 보고 닫혔던 입들이 전부 감탄하고 있어요!', trans: '沒錯，先前閉嘴看衰的人現在全部都在喊絕了！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-en-5',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:13',
      timeSec: 73.7,
      korean: 'You know what it is, I be running this',
      text: 'You know what it is, I be running this',
      romanization: '/juː noʊ wʌt ɪt ɪz aɪ biː ˈrʌnɪŋ ðɪs/',
      naturalTranslation: '你心裡很清楚怎麼回事，這裡始終由我掌控主導全場！',
      pillChips: [
        {
          id: 'spe11',
          text: 'You know what it is',
          rom: '/juː noʊ wʌt ɪt ɪz/',
          type: 'idiom-catchphrase',
          typeLabel: '經典美式口頭禪',
          lemma: 'you know what it is',
          meaning: '你懂的 / 你心知肚明',
          explanation: '嘻哈文化中使用頻率極高的慣用語，意為「事情如何發展你我都清楚，不必我多言」。'
        },
        {
          id: 'spe12',
          text: 'I be running this',
          rom: '/aɪ biː ˈrʌnɪŋ ðɪs/',
          type: 'aave-habitual-be',
          typeLabel: '非裔美語習慣態語法 (AAVE Habitual Be)',
          lemma: 'run this (place/game)',
          meaning: '我始終主宰著這一切',
          explanation: '道地嘻哈語法！「be + V-ing」表示一種「長期、恆常、始終如一」的支配狀態，非一時偶然，意為「我一直在當老大掌控局勢」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '默契共識小句 (You know what it is) + AAVE 習慣態主謂賓 (I be running this)',
          tokens: [
            { term: 'You know', role: '主動詞', desc: '對方具備的情境認知。' },
            { term: 'what it is', role: '名詞子句受詞', desc: '心照不宣的事實真相。' },
            { term: 'be running', role: 'AAVE 習慣態動詞', desc: '長期持續擔任主宰掌門人。' },
            { term: 'this', role: '代名詞受詞', desc: '這整個舞台、音樂產業或遊戲規則。' }
          ]
        },
        pronunciation: {
          actualSound: '[juː noʊ wʌ-tɪ-tɪz aɪ biː ˈrʌnɪŋ ðɪs]',
          singingTips: '「what it is」中三個單字發生連續連音與拍音化（Flap T），讀作滑順的 [wʌ-tɪ-dɪz]！',
          rules: [
            {
              title: '連音與拍音化 (Flap T & Liaison)',
              badge: '美語連讀',
              detail: '「what it is」兩個 t 處於母音之間，弱化為輕快的濁拍音 [d/ɾ]，聽起來像「wuh-dih-diz」。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '嘻哈主宰霸王語氣',
              badge: '主導氣場',
              form: 'You know what it is, I be running this game.',
              scene: '站在金字塔頂端向同行對手宣告無可動搖的霸主地位'
            },
            {
              name: '正統領導責任陳述 (Formal)',
              badge: '管理自持',
              form: 'I have full oversight and leadership over this entire operation.',
              scene: '專案總監在董事會向主管們匯報全面主持專案進度'
            }
          ],
          realLifeExample: {
            scenario: '王牌製作人在錄音室裡掌控整張專輯的混音節奏',
            dialogue: [
              { speaker: 'Assistant', text: 'Should we double-check the final arrangement with the label?', trans: '我們要再跟唱片公司複查一次最終編曲嗎？' },
              { speaker: 'Producer', text: 'You know what it is, I be running this project. Deliver the master as is.', trans: '你心知肚明，這個專案一直是我在統籌。直接交母帶。' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-en-6',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:15',
      timeSec: 75.0,
      korean: 'Pull up in a ghost, Peek a peek a boo hoo',
      text: 'Pull up in a ghost, Peek a peek a boo hoo',
      romanization: '/pʊl ʌp ɪn ə ɡoʊst piːk ə piːk ə buː huː/',
      naturalTranslation: '開著頂級勞斯萊斯 Ghost 華麗抵達現場，捉迷藏驚喜現身讓看衰的人哭喪著臉！',
      pillChips: [
        {
          id: 'spe13',
          text: 'Pull up in a ghost',
          rom: '/pʊl ʌp ɪn ə ɡoʊst/',
          type: 'slang-phrasal-verb',
          typeLabel: '豪車片語動詞',
          lemma: 'pull up + Rolls-Royce Ghost',
          meaning: '開著勞斯萊斯幽靈現身抵達',
          explanation: '動詞片語「pull up（停車抵達）」，「Ghost」雙關勞斯萊斯頂級奢華名車「Rolls-Royce Ghost」與神出鬼沒的幽靈。'
        },
        {
          id: 'spe14',
          text: 'Peek a peek a boo',
          rom: '/piːk ə buː/',
          type: 'nursery-game-slang',
          typeLabel: '捉迷藏兒歌遊戲隱喻',
          lemma: 'peek-a-boo',
          meaning: '躲貓貓 / 突如其來的驚嚇現身',
          explanation: '幼兒捉迷藏遊戲「遮眼現身（Peek-a-boo）」，在暗黑風格歌詞中轉化為令人防不勝防的突襲登場。'
        },
        {
          id: 'spe15',
          text: 'boo hoo',
          rom: '/buː huː/',
          type: 'onomatopoeia-ridicule',
          typeLabel: '嘲諷哭泣擬聲詞',
          lemma: 'boo-hoo (crying sound)',
          meaning: '嗚嗚哭鼻子 / 假裝同情諷刺',
          explanation: '英語中模仿大聲假哭的聲音，專門用來嘲笑對手輸得一敗塗地後的無能狂怒。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '片語動詞動態狀語 (Pull up in a ghost) + 兒歌雙關嘲諷疊字句 (Peek a peek a boo hoo)',
          tokens: [
            { term: 'pull up', role: '動詞片語', desc: '驅車帥氣停在門口。' },
            { term: 'Ghost', role: '專有名詞隱喻', desc: '勞斯萊斯 Ghost 名車 / 神出鬼沒。' },
            { term: 'peek-a-boo', role: '感嘆疊詞', desc: '突然蹦出讓人措手不及。' },
            { term: 'boo-hoo', role: '嘲諷擬聲', desc: '嘲笑失敗者的眼淚。' }
          ]
        },
        pronunciation: {
          actualSound: '[pʊ-lʌ-pɪ-nə ɡoʊst piː-kə piː-kə buː huː]',
          singingTips: '前段「Pull up in a」快速滑順連音 [pʊ-lʌ-pɪ-nə]，後段「Peek a boo hoo」調皮譏諷、尾音上挑！',
          rules: [
            {
              title: '連續三詞子音接母音連讀 (Multi-word Liaison)',
              badge: '極速連音',
              detail: 'Pull /l/ + up /ʌp/ + in /ɪn/ + a /ə/ 一氣呵成，無縫銜接為 [pʊ-lʌ-pɪ-nə]。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '美式嘻哈反諷幽默',
              badge: '嘲弄滿分',
              form: 'Pull up in a ghost, peek-a-boo, cry me a river.',
              scene: '面對競爭者酸言酸語，以成功生活方式作最有力回敬'
            },
            {
              name: '標準客氣敘述 (Standard)',
              badge: '平實表達',
              form: 'We arrived in style and surprised all our competitors.',
              scene: '典雅表述團隊盛大亮相震驚全場'
            }
          ],
          realLifeExample: {
            scenario: '時尚盛典前黑粉以為藝人不會受邀，結果藝人壓軸名車紅毯登場',
            dialogue: [
              { speaker: 'Critic', text: 'I thought their fashion contracts were all canceled?', trans: '我還以為他們的時尚合約全取消了？' },
              { speaker: 'Insider', text: 'Look outside! They just pulled up in a ghost, peek-a-boo!', trans: '看外面！他們剛坐著勞斯萊斯壓軸抵達，驚不驚喜？' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-en-7',
      language: 'en',
      langLabel: '英語 (English)',
      time: '01:19',
      timeSec: 79.3,
      korean: '너네 심장에 박동이 pump pump pop, Pedal to the metal',
      text: '너네 심장에 박동이 pump pump pop, Pedal to the metal',
      romanization: 'Neo-ne sim-jang-e bak-dong-i pump pump pop, Pedal to the metal',
      naturalTranslation: '讓你們的心臟狂跳不已撲通撲通狂飆，油門到底加速踩死，絕不停歇！',
      pillChips: [
        {
          id: 'spe16',
          text: '너네 심장에',
          rom: 'neo-ne sim-jang-e',
          type: 'pronoun-noun-locative',
          typeLabel: '口語代名詞 + 漢字名詞 + 處所助詞',
          lemma: '너네 + 심장 (心臟) + -에',
          meaning: '在你們的心臟裡',
          explanation: '「너네（你們）」為朋友間口語代詞，加上人體核心器官「심장」與處所助詞。'
        },
        {
          id: 'spe17',
          text: '박동이 pump pump pop',
          rom: 'bak-dong-i pump pump pop',
          type: 'noun-onomatopoeia',
          typeLabel: '漢字主語 + 英語擬聲連鎖詞',
          lemma: '박동 (脈搏跳動) + -이 + pump + pop',
          meaning: '心跳脈搏狂烈泵跳',
          explanation: '「박동（搏動）」搭配英語「pump（泵動充氣）」與「pop（炸裂彈出）」，音效震撼無比！'
        },
        {
          id: 'spe18',
          text: 'Pedal to the metal',
          rom: '/ˈpɛdəl tuː ðə ˈmɛtəl/',
          type: 'idiom-driving',
          typeLabel: '汽車競速美語著名成語',
          lemma: 'pedal to the metal',
          meaning: '油門踩到底 / 孤注一擲全力狂飆',
          explanation: '源自賽車用語：把油門踏板（pedal）一路死命踩到碰到底盤金屬板（metal），比喻「開足最大馬力全力以赴」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '韓語生理感官主謂結構 (너네 심장에 박동이) + 擬聲詞重複疊加 (pump pump pop) + 汽車競速成語狀語 (Pedal to the metal)',
          tokens: [
            { term: '너네', role: '代名詞複數', desc: '你們大家。' },
            { term: '박동', role: '名詞', desc: '脈搏與心跳的跳躍節奏。' },
            { term: 'pump pump pop', role: '擬聲詞', desc: '心臟充血極速泵動。' },
            { term: 'Pedal to the metal', role: '固定成語', desc: '將油門踩到底全力前進。' }
          ]
        },
        pronunciation: {
          actualSound: '[너네 심장에 박똥이 펌프 펌프 팝 페덜 투 더 메덜]',
          singingTips: '「박동이」發生硬音化發 [박똥이]，「Pedal」與「metal」兩個 d/t 均發生拍音化（Flap T），讀如 [페덜 ... 메덜]！',
          rules: [
            {
              title: '收音 ㄱ 誘發濃音化 (Tensing)',
              badge: '硬音化',
              detail: '「박동」的收音 ㄱ 使得後方松音 ㄷ 硬化為 ㄸ，實讀 [박똥이]。'
            },
            {
              title: '美語拍音 Flap T/D',
              badge: '美音節奏',
              detail: 'Pedal 與 metal 的介母音 t/d 轉為輕彈舌拍音，聽起來十分流暢。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '賽車狂飆熱血宣告',
              badge: '全速前進',
              form: 'Pedal to the metal, no brakes!',
              scene: '重大競賽衝刺階段，號召隊友絕不退縮、油門到底'
            },
            {
              name: '商務專案全速推進 (Professional)',
              badge: '高效推進',
              form: 'We are accelerating all efforts to meet this deadline ahead of schedule.',
              scene: '專案經理向主管保證全力趕工提前達成目標'
            }
          ],
          realLifeExample: {
            scenario: '體能教練在最後一組高強度間歇訓練（HIIT）向學員吶喊',
            dialogue: [
              { speaker: 'Athlete', text: 'I don\'t know if I can do another sprint!', trans: '我不知道我還能不能再衝刺一趟！' },
              { speaker: 'Coach', text: 'Last 30 seconds! Pedal to the metal! Leave everything on the track!', trans: '最後 30 秒！油門給我踩到底！毫無保留地釋放！' }
            ]
          }
        }
      }
    },
    {
      id: 'sh-en-8',
      language: 'en',
      langLabel: '英語 (English)',
      time: '02:37',
      timeSec: 157.3,
      korean: 'Jump jump and let it go, Watch out we on a roll',
      text: 'Jump jump and let it go, Watch out we on a roll',
      romanization: '/dʒʌmp dʒʌmp ænd lɛt ɪt ɡoʊ wɑːtʃ aʊt wiː ɑːn ə roʊl/',
      naturalTranslation: '跳起來忘情狂歡解放自我，大家小心閃開了，我們正勢如破竹、所向披靡！',
      pillChips: [
        {
          id: 'spe19',
          text: 'let it go',
          rom: '/lɛt ɪt ɡoʊ/',
          type: 'idiom-imperative',
          typeLabel: '釋放情緒片語',
          lemma: 'let it go',
          meaning: '釋放拘束 / 拋開一切束縛',
          explanation: '動詞「let」加上受詞與原型動詞，在舞曲中呼籲所有人丟掉包袱壓力、痛快舞動。'
        },
        {
          id: 'spe20',
          text: 'Watch out',
          rom: '/wɑːtʃ aʊt/',
          type: 'warning-interjection',
          typeLabel: '警告醒目片語',
          lemma: 'watch out',
          meaning: '小心看好 / 注意注目',
          explanation: '日常與嘻哈高頻警示語，提示所有人巨星即將橫空出世。'
        },
        {
          id: 'spe21',
          text: 'we on a roll',
          rom: '/wiː ɑːn ə roʊl/',
          type: 'idiom-luck-streak',
          typeLabel: '經典美語幸運連勝成語 (省略 be 動詞)',
          lemma: 'be on a roll',
          meaning: '勢如破竹 / 好運連連大獲全勝',
          explanation: '源自賭桌骰子持續擲出勝局，形容「手風極順、接二連三收穫巨大成功、擋也擋不住」的巔峰順勢。口語常省略 are（we on a roll）。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '重複動詞祈使句 (Jump jump and let it go) + 警示片語 (Watch out) + 嘻哈省略 be 動詞成語 (we on a roll)',
          tokens: [
            { term: 'Jump jump', role: '重複命令動詞', desc: '帶動全場雙腳躍起。' },
            { term: 'let it go', role: '使役片語', desc: '拋開雜念、徹底沉醉。' },
            { term: 'Watch out', role: '警戒短語', desc: '警示四周避讓矚目。' },
            { term: 'on a roll', role: '成語表語', desc: '處於連續大勝、不可阻擋的巔峰節奏。' }
          ]
        },
        pronunciation: {
          actualSound: '[dʒʌmp dʒʌmp ən lɛ-dɪt ɡoʊ wɑː-tʃaʊt wiː ɑː-nə roʊl]',
          singingTips: 'Outro 慶典舞步高潮！「let it go」尾韻 /oʊ/ 與「on a roll」的 /oʊ/ 形成高亢激昂的雙重尾韻雙元音押韻！',
          rules: [
            {
              title: '連音弱讀 (Liaison & Reduction)',
              badge: '口語連讀',
              detail: '「and」弱化為 [ən]，「let it」拍音化連為 [lɛ-dɪt]，「Watch out」連音為 [wɑː-tʃaʊt]。'
            },
            {
              title: '長雙元音押韻 (Assonance)',
              badge: '韻腳美感',
              detail: 'go 與 roll 押 /oʊ/ 音，在音樂最高潮引領萬人齊聲大合唱。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '演唱會安可帶動氣氛 (Outro Energy)',
              badge: '萬人沸騰',
              form: 'Watch out, we on a roll!',
              scene: '演唱會最後全場燈光手燈齊亮、所有人跳躍狂歡'
            },
            {
              name: '團隊連續成功自豪慶祝 (Professional)',
              badge: '士氣高昂',
              form: 'Our team is on a winning streak with momentum on our side.',
              scene: '團隊連續簽下重大客戶後，主管激勵同仁保持勝勢'
            }
          ],
          realLifeExample: {
            scenario: '體育校隊連勝三場挺進冠軍戰',
            dialogue: [
              { speaker: 'Captain', text: 'Three straight wins, boys!', trans: '連勝三場了，兄弟們！' },
              { speaker: 'Team', text: 'We on a roll! Nothing can stop us now!', trans: '我們現在勢如破竹！誰也擋不住我們！' }
            ]
          }
        }
      }
    }
  ]
};
