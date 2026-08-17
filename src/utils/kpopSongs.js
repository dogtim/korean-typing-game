// K-Pop Songs Dataset with Timed Lyrics, Romanization, English Translation & Vowel Data

export const KPOP_SONG_PRESETS = [
  {
    id: 'x3eqqoZPV_E',
    title: 'CHOOM (춤)',
    artist: 'BABYMONSTER (베이비몬스터)',
    youtubeUrl: 'https://www.youtube.com/watch?v=x3eqqoZPV_E',
    thumbnail: 'https://img.youtube.com/vi/x3eqqoZPV_E/hqdefault.jpg',
    srtFilename: 'BABYMONSTER-CHOOM.srt',
    srtPath: '/lyrics/BABYMONSTER-CHOOM.srt',
    lyrics: [
      { start: 25, end: 30, ko: "1, 2 heat is on", rom: "1, 2 heat is on", en: "1, 2 heat is on" },
      { start: 30, end: 34, ko: "Own it, burn it, kick it, flip that", rom: "Own it, burn it, kick it, flip that", en: "Own it, burn it, kick it, flip that" },
      { start: 34, end: 37, ko: "3, 4 BABYMON", rom: "3, 4 BABYMON", en: "3, 4 BABYMON" },
      { start: 37, end: 41, ko: "We gon' get this party started", rom: "We gon' get this party started", en: "We gon' get this party started" },
      { start: 73, end: 77, ko: "Oh my, oh my, my 지금 이 순간", rom: "Oh my, oh my, my ji-geum i sun-gan", en: "Oh my right now at this moment" },
      { start: 133, end: 138, ko: "리듬을 삼켜 보자 춤", rom: "ri-deum-eul sam-kyeo bo-ja chum", en: "Let's swallow the rhythm, dance!" },
      { start: 143, end: 148, ko: "월, 화, 수, 목, 금, 토 모두 다 함께 취해 보자 춤", rom: "wol, hwa, su, mok, geum, to mo-du da ham-kke chwi-hae bo-ja chum", en: "Mon, Tue, Wed, Thu, Fri, Sat, let's all get drunk together, dance!" },
      { start: 148, end: 153, ko: "춤, 춤, 춤, 춤, 춤", rom: "chum, chum, chum, chum, chum", en: "Dance, dance, dance, dance, dance" }
    ]
  },
  {
    id: 'Zp-Jhuhq0bQ',
    title: 'DRIP',
    artist: 'BABYMONSTER (베이비몬스터)',
    youtubeUrl: 'https://www.youtube.com/watch?v=Zp-Jhuhq0bQ',
    thumbnail: 'https://img.youtube.com/vi/Zp-Jhuhq0bQ/hqdefault.jpg',
    srtFilename: 'BABYMONSTER-DRIP.srt',
    srtPath: '/lyrics/BABYMONSTER-DRIP.srt',
    lyrics: [
      {
        start: 8,
        end: 9,
        ko: "When I dress I don't think so much",
        rom: "When I dress I don't think so much",
        en: "When I dress I don't think so much"
      },
      {
        start: 9,
        end: 10,
        ko: "I could be the GOAT",
        rom: "I could be the GOAT",
        en: "I could be the GOAT"
      },
      {
        start: 16,
        end: 18,
        ko: "Uh 찌릿찌릿, 끼리끼리 놀아볼까?",
        rom: "Uh jji-rit-jji-rit, kki-ri-kki-ri no-ra-bol-kka?",
        en: "Uh feel the thrill, shall we play together?"
      },
      {
        start: 18,
        end: 20,
        ko: "kitty kitty yeah we gonna run this town",
        rom: "kitty kitty yeah we gonna run this town",
        en: "kitty kitty yeah we gonna run this town"
      },
      {
        start: 25,
        end: 28,
        ko: "I'll be there 고민하지 마",
        rom: "I'll be there go-min-ha-ji ma",
        en: "I'll be there don't worry"
      },
      {
        start: 29,
        end: 32,
        ko: "I'll be there 망설이지 마",
        rom: "I'll be there mang-seol-i-ji ma",
        en: "I'll be there don't hesitate"
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
