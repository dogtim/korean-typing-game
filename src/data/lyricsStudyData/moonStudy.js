// BABYMONSTER - 《Moon》 英文唯美暗夜舞曲深度研習資料包
// 本曲為 BABYMONSTER 充滿魔幻暗夜色彩的純英文名作！
// 特色：滿月暗夜意象、逃脫漫遊俚語、未卜命運語法

export const MOON_STUDY_DATA = {
  id: 'moon',
  title: 'Moon',
  artist: 'BABYMONSTER',
  album: '第三張迷你專輯《춤 (CHOOM)》',
  year: '2026',
  youtubeId: 'LYbHsAsj6i8',
  altYoutubeIds: ['LYbHsAsj6i8'],
  sentences: [
    {
      id: 'mn-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:08',
      timeSec: 8.4,
      korean: 'Full moon night, on the loose, I shine so bright in the gloom',
      text: 'Full moon night, on the loose, I shine so bright in the gloom',
      romanization: '/fʊl muːn naɪt ɑːn ðə luːs aɪ ʃaɪn soʊ braɪt ɪn ðə ɡluːm/',
      naturalTranslation: '圓月當空之夜，擺脫一切束縛肆意狂歡，我在幽暗陰鬱中綻放出最耀眼的皓月光芒！',
      pillChips: [
        {
          id: 'mp1',
          text: 'on the loose',
          rom: '/ɑːn ðə luːs/',
          type: 'freedom-idiom',
          typeLabel: '掙脫束縛成語',
          lemma: 'on the loose',
          meaning: '掙脫束縛 / 肆意妄為 / 逃逸自由',
          explanation: '英美經典成語！指不再受到任何囚禁與規範限制，自由自在地在黑夜中奔馳。'
        },
        {
          id: 'mp2',
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
          structureSummary: '獨立時間介詞狀語 (Full moon night, on the loose) + 主動補結構 (I shine so bright [Prepositional Phrase])',
          tokens: [
            { term: 'Full moon', role: '時間意象', desc: '滿月夜。' },
            { term: 'on the loose', role: '成語狀態狀語', desc: '掙脫束縛。' },
            { term: 'in the gloom', role: '處所狀語', desc: '在暗夜之中。' }
          ]
        },
        pronunciation: {
          actualSound: '[fʊl muːn naɪt ɑːn ðə luːs aɪ ʃaɪn soʊ braɪt ɪn ðə ɡluːm]',
          singingTips: 'loose, gloom, moon 押長元音 /uː/ 韻，空靈而充滿魔幻感。',
          rules: [
            {
              title: '長元音 /uː/ 連鎖押韻 (Chain Rhyme)',
              badge: '魔幻韻律',
              detail: 'moon, loose, gloom 均押長元音 /uː/，口型收圓，氣息悠長。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '皓月當空神秘感 (Mystic Luminescence)',
              badge: '暗夜神話',
              form: 'Like the full moon breaking through the darkness, I shine brightest in adversity.',
              scene: '逆境中綻放光芒的神秘魅力'
            }
          ],
          realLifeExample: {
            scenario: '深夜在頂樓看著城市夜景沉澱心靈',
            dialogue: [
              { speaker: 'Friend', text: 'The city looks so dark and quiet tonight.', trans: '今晚的城市看起來好安靜昏暗。' },
              { speaker: 'You', text: 'Full moon night, on the loose. Even in the gloom, we find a way to shine.', trans: '滿月之夜，心靈自由。即便在幽暗中，我們也能找到綻放光芒的方式。' }
            ]
          }
        }
      }
    }
  ]
};
