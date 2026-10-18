// BABYMONSTER - 《Love In My Heart》 韓英雙語熱血安可曲深度研習資料包
// 本曲為 BABYMONSTER 演唱會安可萬人齊唱的代表曲目！
// 特色：韓國經典情感成語「걷잡을 수가 없다（一發不可收拾）」、渴望與奔赴動詞、演唱會萬人安可唱法

export const LOVE_IN_MY_HEART_STUDY_DATA = {
  id: 'love-in-my-heart',
  title: 'Love In My Heart',
  artist: 'BABYMONSTER',
  album: '首張正規專輯《DRIP》',
  year: '2024',
  youtubeId: '1kXLsrun51s',
  altYoutubeIds: ['1kXLsrun51s'],
  sentences: [
    {
      id: 'limh-ko-1',
      language: 'ko',
      langLabel: '韓語 (Korean)',
      time: '00:43',
      timeSec: 43.2,
      korean: '내 맘은 불길처럼 걷잡을 수가 없어, 이 밤을 가로질러 너에게 가고 있어',
      text: '내 맘은 불길처럼 걷잡을 수가 없어, 이 밤을 가로질러 너에게 가고 있어',
      romanization: 'Nae mam-eun bul-gil-cheo-reom geot-jab-eul su-ga eop-seo, i bam-eul ga-ro-jil-leo neo-e-ge ga-go iss-eo',
      naturalTranslation: '我的心意宛如燎原烈火般一發不可收拾，我要穿越這漫長黑夜，奮不顧身奔向你的身邊！',
      pillChips: [
        {
          id: 'lp1',
          text: '불길처럼',
          rom: 'bul-gil-cheo-reom',
          type: 'simile-metaphor',
          typeLabel: '烈火比喻助詞',
          lemma: '불길 + -처럼',
          meaning: '如熊熊烈焰一般',
          explanation: '「불길（火勢/烈火）」+「-처럼（如同）」，象徵不可遏制的熾熱愛意。'
        },
        {
          id: 'lp2',
          text: '걷잡을 수가 없어',
          rom: 'geot-jab-eul su-ga eop-seo',
          type: 'korean-idiom-grammar',
          typeLabel: '韓國經典成語慣用語',
          lemma: '걷잡다 + -(으)ㄹ 수가 없다',
          meaning: '一發不可收拾 / 難以收拾控制',
          explanation: '高頻成語！動詞「걷잡다（收拾/平息）」加上能力否定「-(으)ㄹ 수가 없다」，形容形勢或情緒如野火蔓延，再也無法控制壓抑。'
        },
        {
          id: 'lp3',
          text: '가로질러',
          rom: 'ga-ro-jil-leo',
          type: 'movement-verb',
          typeLabel: '空間橫越連鎖動詞',
          lemma: '가로지르다 + -어',
          meaning: '橫越橫穿過',
          explanation: '跨越黑暗、距離與一切阻礙，奔赴相見。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '烈火比喻否定句 (내 맘은 불길처럼 걷잡을 수가 없어) + 空間穿越進行句 (이 밤을 가로질러 너에게 가고 있어)',
          tokens: [
            { term: '내 맘 (내 마음)', role: '主格代名詞', desc: '我的心。' },
            { term: '걷잡다', role: '成語動詞幹', desc: '收拾、收斂。' },
            { term: '-(으)ㄹ 수 없다', role: '能力否定語尾', desc: '無法...。' },
            { term: '가로지르다', role: '橫越動詞', desc: '穿透黑夜。' },
            { term: '-고 있다', role: '進行體態', desc: '正在奔向你。' }
          ]
        },
        pronunciation: {
          actualSound: '[내 마믄 불길처럼 걷짜블 수가 업써, 이 바믈 가로질러 너에게 가고 이っ써]',
          singingTips: '「걷잡을」發生硬音化 [걷짜블]，「가로질러」音色高亢清亮，充滿衝破夜空的少年感！',
          rules: [
            {
              title: '硬音化與收音代表音 (Fortis & Representative Final)',
              badge: '韓語收音規則',
              detail: '收音 ㄷ 遇到初聲 ㅈ 時，發生硬音化發音為 [걷짜블] (geot-jja-beul)。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '熱血奔赴告白 (Passionate Love Run)',
              badge: '演唱會熱血',
              form: '내 맘은 불길처럼 걷잡을 수가 없어, 너에게 달려갈게.',
              scene: '萬人演唱會全場合唱，向所愛之人奔赴'
            }
          ],
          realLifeExample: {
            scenario: '分別數月的情侶終於在機場即將重逢',
            dialogue: [
              { speaker: 'Him', text: '비행기 막 착륙했어! 어디쯤이야?', trans: '飛機剛剛落地了！你到哪裡了？' },
              { speaker: 'Her', text: '지금 이 밤을 가로질러 너에게 가고 있어! 10분만 기다려!', trans: '我正穿過夜色飛奔向你！再等我十分鐘！' }
            ]
          }
        }
      }
    }
  ]
};
