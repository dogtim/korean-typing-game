// BABYMONSTER - 《Woke Up In Tokyo (RUKA & ASA)》 全英語快嘴饒舌深度研習資料包
// 本曲為 Asa & Ruka 標誌性的 100% 全英文極限快嘴饒舌小分隊名作！
// 特色：美式快嘴饒舌 Flow、都市跨文化象徵、連續音變押韻、街頭雙關語

export const WOKE_UP_IN_TOKYO_STUDY_DATA = {
  id: 'woke-up-in-tokyo',
  title: 'Woke Up In Tokyo',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: 'KcSwEoDRWTA',
  altYoutubeIds: ['w6m0q7XjG7Y'],
  sentences: [
    {
      id: 'wut-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:12',
      timeSec: 12.9,
      korean: 'What you know ain\'t what we see',
      text: 'What you know ain\'t what we see',
      romanization: '/wʌt juː noʊ eɪnt wʌt wiː siː/',
      naturalTranslation: '你所了解的膚淺認知，根本不及我們眼底所見的浩瀚視野！',
      pillChips: [
        {
          id: 'wp1',
          text: 'What you know',
          rom: '/wʌt juː noʊ/',
          type: 'noun-clause',
          typeLabel: '名詞子句主詞',
          lemma: 'what + subject + know',
          meaning: '你所知道的表象認知',
          explanation: '名詞子句做主詞，代表平庸者受限的資訊與認知維度。'
        },
        {
          id: 'wp2',
          text: 'ain’t what we see',
          rom: '/eɪnt wʌt wiː siː/',
          type: 'antithesis-slang',
          typeLabel: '對稱否定名詞子句補語',
          lemma: 'is not what we see',
          meaning: '絕非我們眼前所見的真實格局',
          explanation: 'What you know 與 What we see 形成極度工整的哲學對立，展現饒舌歌手居高臨下的前瞻視野。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '名詞子句主詞 (What you know) + 否定繫詞 (ain\'t) + 名詞子句補語 (what we see)',
          tokens: [
            { term: 'What you know', role: '名詞子句主詞', desc: '你的常規見識。' },
            { term: 'ain\'t', role: '口語謂語', desc: '絕不是。' },
            { term: 'what we see', role: '名詞子句補語', desc: '我們所見的全球格局。' }
          ]
        },
        pronunciation: {
          actualSound: '[wʌtʃə noʊ eɪnt wʌt wiː siː]',
          singingTips: 'What you 快速連音同化為 [wʌtʃə] (whatcha)，咬字要像鼓點般急促精確。',
          rules: [
            {
              title: '同化音變 (Palatalization in Fast Rap)',
              badge: 'Rap咬字',
              detail: 'What you 連讀讀成 [wʌt-tʃuː] 或 [wʌtʃə]，是英文饒舌維持高 BPM Flow 的關鍵技術。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '饒舌對決狠話 (Battle Rap Bar)',
              badge: '高維打擊',
              form: 'What you think you know isn\'t even close to what we see.',
              scene: '展示自己超越同儕的遠大眼界與戰略視野'
            }
          ],
          realLifeExample: {
            scenario: '面對保守質疑，創業者用事實說話',
            dialogue: [
              { speaker: 'Doubter', text: 'Nobody has ever done it this way before.', trans: '之前從來沒有人敢用這種方式做過。' },
              { speaker: 'Visionary', text: 'What you know ain\'t what we see. We\'re building the future.', trans: '你所知道的陳舊經驗，根本不是我們所看見的未來。我們正重新定義時代。' }
            ]
          }
        }
      }
    },
    {
      id: 'wut-en-2',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:18',
      timeSec: 18.2,
      korean: 'I swear I\'m seeing King Kong, Head bouncing like a ping-pong, We poppin\' out, it\'s on',
      text: 'I swear I\'m seeing King Kong, Head bouncing like a ping-pong, We poppin\' out, it\'s on',
      romanization: '/aɪ swɛr aɪm ˈsiːɪŋ kɪŋ kɑːŋ hɛd ˈbaʊnsɪŋ laɪk ə ˈpɪŋ pɑːŋ wiː ˈpɑːpɪŋ aʊt ɪts ɑːn/',
      naturalTranslation: '我敢發誓眼前宛如金剛巨獸現身般震撼，跟著狂暴節奏如乒乓球般瘋狂晃頭晃腦，我們霸氣登場，派對正式開炸！',
      pillChips: [
        {
          id: 'wp3',
          text: 'King Kong',
          rom: '/kɪŋ kɑːŋ/',
          type: 'pop-culture-metaphor',
          typeLabel: '流行文化巨獸隱喻',
          lemma: 'King Kong',
          meaning: '巨大如巨獸金剛震撼登場',
          explanation: '借指能量極其巨大、所向披靡的超強氣場。'
        },
        {
          id: 'wp4',
          text: 'like a ping-pong',
          rom: '/laɪk ə ˈpɪŋ pɑːŋ/',
          type: 'simile-rhyme',
          typeLabel: '生動比喻押韻片語',
          lemma: 'like a ping-pong ball',
          meaning: '如乒乓球般急速彈跳晃動',
          explanation: '形容跟著重低音 Bass 猛烈點頭（Head-banging）時的極致歡快狀態。'
        },
        {
          id: 'wp5',
          text: 'poppin\' out, it\'s on',
          rom: '/ˈpɑːpɪŋ aʊt ɪts ɑːn/',
          type: 'slang-action',
          typeLabel: '街頭登場開戰俚語',
          lemma: 'pop out + it is on',
          meaning: '高調現身登場，好戲全面開打！',
          explanation: '「pop out」指在公眾場合隆重亮相；「it\'s on」指戰鬥或狂歡正式拉開序幕！'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '發誓誓言句 (I swear) + 進行感知句 (I\'m seeing King Kong) + 獨立主格伴隨句 (Head bouncing...) + 俚語宣告句 (it\'s on)',
          tokens: [
            { term: 'I swear', role: '誓言插入語', desc: '強調真實震撼。' },
            { term: 'King Kong', role: '賓語', desc: '巨大形象。' },
            { term: 'ping-pong', role: '比喻押韻', desc: '跳動態勢。' },
            { term: 'it\'s on', role: '固定俚語', desc: '正式開始。' }
          ]
        },
        pronunciation: {
          actualSound: '[aɪ swɛr aɪm ˈsiːɪŋ kɪŋ kɑːŋ hɛd ˈbaʊnsɪŋ laɪk ə ˈpɪŋ pɑːŋ wiː ˈpɑːpɪŋ aʊt ɪts ɑːn]',
          singingTips: 'King Kong 與 ping-pong 形成頂級的 /ɑːŋ/ 鼻音雙重押韻，嘴型開闊、咬字極脆！',
          rules: [
            {
              title: '鼻音尾韻押韻 (Velar Nasal Rhyme in Rap)',
              badge: 'Rap韻律',
              detail: 'King Kong、ping-pong、it\'s on 均押後鼻音，使快嘴段落極富敲擊律動感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '街頭夜生活狂歡 (Hype Party Energy)',
              badge: '派對熱血',
              form: 'We\'re in the building, and it is officially on!',
              scene: '登場演出時點燃全場狂熱氣氛'
            }
          ],
          realLifeExample: {
            scenario: '音樂節主舞台表演者登場瞬間',
            dialogue: [
              { speaker: 'Crowd', text: 'The bass is shaking the entire stadium!', trans: '這重低音震得整座體育館都在晃動！' },
              { speaker: 'Rapper', text: 'We poppin\' out, it\'s on! Let me see everyone jump!', trans: '我們全員就位，開炸啦！所有人跟我一塊跳起來！' }
            ]
          }
        }
      }
    }
  ]
};
