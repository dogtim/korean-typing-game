// BABYMONSTER - 《Love, Maybe》 英文抒情靈魂深度研習資料包
// 本曲為 BABYMONSTER 溫柔細膩的靈魂抒情代表作！
// 特色：初陷愛河祈使語句、錄音倒帶隱喻、不可控的情感漩渦

export const LOVE_MAYBE_STUDY_DATA = {
  id: 'love-maybe',
  title: 'Love, Maybe',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: 'q2KJumLIxsM',
  altYoutubeIds: ['q2KJumLIxsM'],
  sentences: [
    {
      id: 'lm-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:17',
      timeSec: 17.5,
      korean: 'Falling for the first time, I got feelings that I can\'t fight, Lord, please have mercy on me',
      text: 'Falling for the first time, I got feelings that I can\'t fight, Lord, please have mercy on me',
      romanization: '/ˈfɔːlɪŋ fər ðə fɜːrst taɪm aɪ ɡɑːt ˈfiːlɪŋz ðæt aɪ kænt faɪt lɔːrd pliːz hæv ˈmɜːrsi ɑːn miː/',
      naturalTranslation: '人生第一次如此難以自拔地墜入愛河，心中的洶湧悸動我再也無法抵擋，上天啊，請對我手下留情吧！',
      pillChips: [
        {
          id: 'lmp1',
          text: 'Falling for the first time',
          rom: '/ˈfɔːlɪŋ fər ðə fɜːrst taɪm/',
          type: 'love-phrasal',
          typeLabel: '墜入愛河片語',
          lemma: 'fall for someone',
          meaning: '初次深陷愛河',
          explanation: '「fall for」指毫無防備地愛上某人。'
        },
        {
          id: 'lmp2',
          text: 'feelings that I can\'t fight',
          rom: '/ˈfiːlɪŋz ðæt aɪ kænt faɪt/',
          type: 'relative-clause',
          typeLabel: '無法抗拒的情感關係子句',
          lemma: 'feelings + that I cannot fight',
          meaning: '無法抵抗與壓抑的情感',
          explanation: '理智全面棄守，甘願沉淪。'
        },
        {
          id: 'lmp3',
          text: 'have mercy on me',
          rom: '/hæv ˈmɜːrsi ɑːn miː/',
          type: 'plea-idiom',
          typeLabel: '祈求留情成語祈使句',
          lemma: 'have mercy on someone',
          meaning: '饒了我吧 / 請對我手下留情',
          explanation: '源自祈禱用語，在情歌中用來形容被愛意折磨得神魂顛倒時的半開玩笑嬌嗔。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '分詞時間伴隨句 (Falling for the first time) + 關係代名詞限制句 (I got feelings [that] I can\'t fight) + 祈使感嘆句 (Lord, please have mercy on me)',
          tokens: [
            { term: 'Falling for', role: '伴隨分詞', desc: '深陷愛河。' },
            { term: 'feelings that', role: '先行詞加定語', desc: '無法抗拒的心動。' },
            { term: 'have mercy on', role: '祈禱片語', desc: '手下留情。' }
          ]
        },
        pronunciation: {
          actualSound: '[ˈfɔːlɪŋ fər ðə fɜːrst taɪm aɪ ɡɑːt ˈfiːlɪŋz ðət aɪ kænt faɪt lɔːrd pliːz hæv ˈmɜːrsi ɑːn miː]',
          singingTips: '「have mercy on me」氣聲由輕轉深，帶著脆弱無助的靈魂樂柔和轉音。',
          rules: [
            {
              title: '靈魂樂轉音修飾 (Melismatic Phrasing in R&B)',
              badge: '唱法技巧',
              detail: 'Lord 與 mercy 尾音輕輕顫音下行，能強化面對深厚愛意時的甘心投降感。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '深情投降自白 (Surrender to Love)',
              badge: '深情投降',
              form: 'I\'ve never felt this way before; I\'m completely helpless against my feelings.',
              scene: '承認自己徹底愛上了對方，毫無招架之力'
            }
          ],
          realLifeExample: {
            scenario: '好友看著你整天望著對方照片傻笑',
            dialogue: [
              { speaker: 'Friend', text: 'You are totally head over heels, aren\'t you?', trans: '你完全神魂顛倒了對吧？' },
              { speaker: 'You', text: 'Lord, please have mercy on me. I really got feelings that I can\'t fight.', trans: '天啊饒了我吧，我真的完全無法抵擋這股心動。' }
            ]
          }
        }
      }
    }
  ]
};
