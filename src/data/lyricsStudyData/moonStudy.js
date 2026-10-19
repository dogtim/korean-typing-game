// BABYMONSTER - 《Moon》 雙語唯美暗夜舞曲深度研習資料包
// 本曲為 BABYMONSTER 充滿魔幻暗夜色彩的雙語代表作！
// 特色：滿月暗夜意象、韓英交錯押韻、王者降臨自信語法

export const MOON_STUDY_DATA = {
  id: 'moon',
  title: 'Moon',
  artist: 'BABYMONSTER',
  album: '第三張迷你專輯《춤 (CHOOM)》',
  year: '2026',
  youtubeId: 'LYbHsAsj6i8',
  altYoutubeIds: ['LYbHsAsj6i8', 'xXZwZ0DolJc'],
  sentences: [
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
          explanation: '由「보름 (陰曆十五)」加「달 (月亮)」組成的固有詞，象徵圓滿與神祕力量。'
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
          structureSummary: '獨立主語 (I’m the moon) + 時間定語結構 (보름달 뜨는 밤) + 狀態狀語 (on the loose)',
          tokens: [
            { term: 'I’m the moon', role: '核心宣告', desc: '自我身份的象徵宣示。' },
            { term: '보름달 뜨는 밤', role: '時間狀語', desc: '動詞定語修飾「밤 (夜晚)」。' },
            { term: 'on the loose', role: '狀態修飾', desc: '擺脫拘束的狂歡狀態。' }
          ]
        },
        pronunciation: {
          actualSound: '[보름달 뜨는 밤 / I’m the moon on the loose]',
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
      time: '00:38',
      timeSec: 38.64,
      korean: '까만 밤 빛이나 진짜가 나타나',
      text: '까만 밤 빛이나 진짜가 나타나',
      romanization: 'kka-man bam bi-chi-na jin-jja-ga na-ta-na',
      naturalTranslation: '漆黑夜裡綻放光芒，真正的王者降臨！',
      pillChips: [
        {
          id: 'mp4',
          text: '까만',
          rom: 'kka-man',
          type: 'adjective',
          typeLabel: '冠形詞 (漆黑的)',
          lemma: '까맣다',
          meaning: '漆黑的 / 烏黑的',
          explanation: '形容詞「까맣다」接定語詞尾「-(으)ㄴ」變為「까만」，形容夜色深沉極致。'
        },
        {
          id: 'mp5',
          text: '빛이나',
          rom: 'bi-chi-na',
          type: 'phrase',
          typeLabel: '慣用詞組 (發光)',
          lemma: '빛이 나다',
          meaning: '發光 / 閃閃發亮',
          explanation: '「빛（光芒）」加上「나다（產生、發出）」，形容人或事物散發耀眼光彩。'
        },
        {
          id: 'mp6',
          text: '진짜',
          rom: 'jin-jja',
          type: 'noun',
          typeLabel: '名詞 (真正的王者/真實之人)',
          lemma: '진짜',
          meaning: '真正 / 真的 (強烈對比冒牌者)',
          explanation: '日常高頻詞，此處指「真正的實力者、正牌主角」。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '定語修飾句 (까만 밤) + 主謂結構 (빛이 나) + 主謂結構 (진짜가 나타나)',
          tokens: [
            { term: '까만 밤', role: '時間狀語', desc: '漆黑的夜晚。' },
            { term: '빛이 나', role: '謂語結構', desc: '光芒綻放。' },
            { term: '진짜가 나타나', role: '主動結構', desc: '真正的王者現身登場。' }
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
    }
  ]
};
