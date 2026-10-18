// BABYMONSTER - 《Supa Dupa Luv》 英文復古律動深度研習資料包
// 本曲為 BABYMONSTER 復古甜蜜律動名作！
// 特色：流星許願假設語氣、超級雙關修飾語、深情傾注表達

export const SUPA_DUPA_LUV_STUDY_DATA = {
  id: 'supa-dupa-luv',
  title: 'Supa Dupa Luv',
  artist: 'BABYMONSTER',
  album: '第二張迷你專輯《WE GO UP》',
  year: '2025',
  youtubeId: 'SbdOIdg2McI',
  altYoutubeIds: ['SbdOIdg2McI'],
  sentences: [
    {
      id: 'sdl-en-1',
      language: 'en',
      langLabel: '英語 (English)',
      time: '00:19',
      timeSec: 19.9,
      korean: 'If I ever saw a sky full of shooting stars, I\'d be spending every single wish on you',
      text: 'If I ever saw a sky full of shooting stars, I\'d be spending every single wish on you',
      romanization: '/ɪf aɪ ˈɛvər sɔː ə skaɪ fʊl əv ˈʃuːtɪŋ stɑːrz aɪd biː ˈspɛndɪŋ ˈɛvri ˈsɪŋɡl wɪʃ ɑːn juː/',
      naturalTranslation: '倘若我能看見漫天流星劃破夜空，我願意毫不猶豫將每一個許願的機會，全都毫無保留傾注在你的身上。',
      pillChips: [
        {
          id: 'sp1',
          text: 'sky full of shooting stars',
          rom: '/skaɪ fʊl əv ˈʃuːtɪŋ stɑːrz/',
          type: 'poetic-imagery',
          typeLabel: '詩意浪漫天文意象',
          lemma: 'shooting star',
          meaning: '滿天流星閃爍的夜空',
          explanation: '英美情歌最唯美的浪漫意象之一，代表奇蹟與心願的降臨。'
        },
        {
          id: 'sp2',
          text: 'every single wish',
          rom: '/ˈɛvri ˈsɪŋɡl wɪʃ/',
          type: 'emphatic-determiner',
          typeLabel: '極致強調限定詞',
          lemma: 'every single',
          meaning: '每一個、無一例外的心願',
          explanation: '「single」加在 every 後加強語氣，表達專一無二、心無旁騖的深情。'
        },
        {
          id: 'sp3',
          text: 'spending ... on you',
          rom: '/ˈspɛndɪŋ ... ɑːn juː/',
          type: 'verb-preposition',
          typeLabel: '傾注寄託動詞片語',
          lemma: 'spend something on someone',
          meaning: '為你傾注全部 / 全部花費在你身上',
          explanation: '將「許願的機會（wish）」當作最珍貴的財富傾囊相贈。'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '與現在事實相反的第二條件虛擬語氣 (If I [Past Simple]... I\'d be [Present Participle])',
          tokens: [
            { term: 'If I ever saw', role: '條件虛擬句', desc: '假設看見奇蹟。' },
            { term: 'I\'d be spending', role: '主句情態進行', desc: '會毫不保留持續傾注。' },
            { term: 'every single', role: '強調限定詞', desc: '絕無保留。' }
          ]
        },
        pronunciation: {
          actualSound: '[ɪf aɪ ˈɛvər sɔː ə skaɪ fʊl əv ˈʃuːtɪŋ stɑːrz aɪd biː ˈspɛndɪŋ ˈɛvri ˈsɪŋɡl wɪʃ ɑːn juː]',
          singingTips: '「shooting stars」與「single wish on you」需以柔和流暢的 R&B 切分音輕輕唱出，字字飽含真情。',
          rules: [
            {
              title: '虛擬語氣的情感表達',
              badge: '文法技巧',
              detail: '「I\'d be spending」比「I would spend」更具畫面感與持續投入的動態深情。'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '極致深情誓言 (Devoted Romantic Vow)',
              badge: '星空浪漫',
              form: 'If I had infinite wishes, every single one of them would belong to you.',
              scene: '仰望星空時向深愛之人許下此生承諾'
            }
          ],
          realLifeExample: {
            scenario: '一起去山頂看英仙座流星雨時的告白',
            dialogue: [
              { speaker: 'Her', text: 'Look! Another shooting star! Did you make a wish?', trans: '快看！又一顆流星！你有許願嗎？' },
              { speaker: 'Him', text: 'I\'d spend every single wish on you. I already have everything I could ever want right here.', trans: '我所有的願望都許給你了。因為對我來說，我想要的一切就已經在身邊了。' }
            ]
          }
        }
      }
    }
  ]
};
