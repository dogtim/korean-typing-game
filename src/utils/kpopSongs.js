// K-Pop Songs Dataset with Timed Lyrics, Romanization, English Translation & Vowel Data

export const KPOP_SONG_PRESETS = [
  {
    id: 'cxhqqpVk65Q', // User's requested video!
    title: 'Super Shy',
    artist: 'NewJeans (뉴진스)',
    youtubeUrl: 'https://www.youtube.com/watch?v=cxhqqpVk65Q',
    thumbnail: 'https://img.youtube.com/vi/cxhqqpVk65Q/hqdefault.jpg',
    lyrics: [
      {
        start: 0,
        end: 5,
        ko: "I'm super shy, super shy",
        rom: "I'm super shy, super shy",
        en: "I'm super shy, super shy"
      },
      {
        start: 5,
        end: 9,
        ko: "Make it move, baby, take my arm",
        rom: "Make it move, baby, take my arm",
        en: "Make it move, baby, take my arm"
      },
      {
        start: 9,
        end: 14,
        ko: "가만히 보고만 있지 말고",
        rom: "ga-man-hi bo-go-man it-ji mal-go",
        en: "Don't just stand there watching"
      },
      {
        start: 14,
        end: 18,
        ko: "나를 봐 내 이름은 Super Shy",
        rom: "na-reul bwa nae i-reum-eun Super Shy",
        en: "Look at me, my name is Super Shy"
      },
      {
        start: 18,
        end: 23,
        ko: "떨리는 지금도",
        rom: "tteol-li-neun ji-geum-do",
        en: "Even right now as I tremble"
      },
      {
        start: 23,
        end: 27,
        ko: "You're on my mind all the time",
        rom: "You're on my mind all the time",
        en: "You're on my mind all the time"
      },
      {
        start: 27,
        end: 32,
        ko: "I wanna tell you, 하지만",
        rom: "I wanna tell you, ha-ji-man",
        en: "I wanna tell you, but..."
      },
      {
        start: 32,
        end: 36,
        ko: "I'm super shy, super shy",
        rom: "I'm super shy, super shy",
        en: "I'm super shy, super shy"
      },
      {
        start: 36,
        end: 41,
        ko: "새말을 하고 싶은데",
        rom: "sae-mal-eul ha-go sip-eun-de",
        en: "I want to say something new"
      },
      {
        start: 41,
        end: 46,
        ko: "내 맘은 자꾸만 달라져",
        rom: "nae mam-eun ja-kku-man dal-ra-jyeo",
        en: "My heart keeps changing"
      },
      {
        start: 46,
        end: 51,
        ko: "자꾸만 너를 생각해",
        rom: "ja-kku-man neo-reul saeng-gak-hae",
        en: "I keep thinking about you"
      },
      {
        start: 51,
        end: 56,
        ko: "You're on my mind all the time",
        rom: "You're on my mind all the time",
        en: "You're on my mind all the time"
      }
    ]
  },
  {
    id: 'gdZLi9oWNZg',
    title: 'Dynamite',
    artist: 'BTS (방탄소년단)',
    youtubeUrl: 'https://www.youtube.com/watch?v=gdZLi9oWNZg',
    thumbnail: 'https://img.youtube.com/vi/gdZLi9oWNZg/hqdefault.jpg',
    lyrics: [
      {
        start: 0,
        end: 8,
        ko: "Cos I'm in the stars tonight",
        rom: "Cos I'm in the stars tonight",
        en: "Cos I'm in the stars tonight"
      },
      {
        start: 8,
        end: 15,
        ko: "So watch me bring the fire and set the night alight",
        rom: "So watch me bring the fire and set the night alight",
        en: "So watch me bring the fire and set the night alight"
      },
      {
        start: 15,
        end: 22,
        ko: "신발 신고 아침 일어나",
        rom: "sin-bal sin-go a-chim i-reo-na",
        en: "Shoes on, get up in the morning"
      },
      {
        start: 22,
        end: 28,
        ko: "커피 한 잔 마시고 시작해",
        rom: "keo-pi han jan ma-si-go si-jak-hae",
        en: "Drink a cup of coffee and start the day"
      },
      {
        start: 28,
        end: 35,
        ko: "Light it up like dynamite",
        rom: "Light it up like dynamite",
        en: "Light it up like dynamite"
      }
    ]
  },
  {
    id: 'Vk5-c_v4gMU',
    title: 'Magnetic',
    artist: 'ILLIT (아일릿)',
    youtubeUrl: 'https://www.youtube.com/watch?v=Vk5-c_v4gMU',
    thumbnail: 'https://img.youtube.com/vi/Vk5-c_v4gMU/hqdefault.jpg',
    lyrics: [
      {
        start: 0,
        end: 6,
        ko: "Baby I'm just trying to play it cool",
        rom: "Baby I'm just trying to play it cool",
        en: "Baby I'm just trying to play it cool"
      },
      {
        start: 6,
        end: 12,
        ko: "너에게 끌려가 끌려가",
        rom: "neo-e-ge kkeul-ryeo-ga kkeul-ryeo-ga",
        en: "Attracted to you, drawn to you"
      },
      {
        start: 12,
        end: 18,
        ko: "You're magnetic, I can't deny",
        rom: "You're magnetic, I can't deny",
        en: "You're magnetic, I can't deny"
      },
      {
        start: 18,
        end: 24,
        ko: "내 마음이 너를 향해 달려가",
        rom: "nae ma-eum-i neo-reul hyang-hae dal-ryeo-ga",
        en: "My heart runs towards you"
      }
    ]
  }
];

export const VOWEL_PRONUNCIATION_GUIDE = {
  'ㅏ': { name: 'a', sound: 'Ah (father)', example: '가 (ga), 나 (na)', color: '#f97316' },
  'ㅑ': { name: 'ya', sound: 'Yah (yard)', example: '야 (ya), ㅑ', color: '#fb923c' },
  'ㅓ': { name: 'eo', sound: 'Uh (fun)', example: '너 (neo), 거 (geo)', color: '#10b981' },
  'ㅕ': { name: 'yeo', sound: 'Yuh (young)', example: '여 (yeo), 벼 (byeo)', color: '#34d399' },
  'ㅗ': { name: 'o', sound: 'Oh (go)', example: '보 (bo), 도 (do)', color: '#a855f7' },
  'ㅛ': { name: 'yo', sound: 'Yo (yo-yo)', example: '요 (yo), 쇼 (sho)', color: '#c084fc' },
  'ㅜ': { name: 'u', sound: 'Oo (moon)', example: '두 (du), 루 (ru)', color: '#06b6d4' },
  'ㅠ': { name: 'yu', sound: 'Yoo (youth)', example: '유 (yu), 류 (ryu)', color: '#38bdf8' },
  'ㅡ': { name: 'eu', sound: 'Eu (flat sound)', example: '그 (geu), 르 (reu)', color: '#eab308' },
  'ㅣ': { name: 'i', sound: 'Ee (meet)', example: '비 (bi), 시 (si)', color: '#ec4899' },
  'ㅐ': { name: 'ae', sound: 'Ae (cat)', example: '내 (nae), 개 (gae)', color: '#f43f5e' },
  'ㅒ': { name: 'yae', sound: 'Yae (yankee)', example: '얘 (yae)', color: '#fb7185' },
  'ㅔ': { name: 'e', sound: 'Eh (pet)', example: '게 (ge), 제 (je)', color: '#6366f1' },
  'ㅖ': { name: 'ye', sound: 'Yeh (yes)', example: '예 (ye), 계 (gye)', color: '#818cf8' },
  'ㅘ': { name: 'wa', sound: 'Wa (water)', example: '과 (gwa), 와 (wa)', color: '#14b8a6' },
  'ㅙ': { name: 'wae', sound: 'Wae (wait)', example: '돼 (dwae), 왜 (wae)', color: '#2dd4bf' },
  'ㅚ': { name: 'oe', sound: 'Oe (wet)', example: '외 (oe), 뇌 (noe)', color: '#0284c7' },
  'ㅝ': { name: 'wo', sound: 'Wo (wonder)', example: '원 (won), ㅝ', color: '#0369a1' },
  'ㅞ': { name: 'we', sound: 'We (west)', example: '웨 (we)', color: '#4338ca' },
  'ㅟ': { name: 'wi', sound: 'Wi (win)', example: '위 (wi), 귀 (gwi)', color: '#6d28d9' },
  'ㅢ': { name: 'ui', sound: 'Ui (eu + i)', example: '의 (ui), 희 (hui)', color: '#d97706' }
};
