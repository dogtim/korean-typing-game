// Progressive Curriculum Dataset for Korean Typing & Language Learning

export const LESSON_STAGES = [
  {
    id: 'consonants',
    title: '1. Basic Consonants (기초 자음)',
    subtitle: 'Learn the 14 basic Korean consonants and their QWERTY keys',
    icon: '🔤',
    level: 1,
    items: [
      { text: 'ㄱ', romanization: 'g / k', keyHint: 'r', desc: 'Giyeok (k/g sound)' },
      { text: 'ㄴ', romanization: 'n', keyHint: 's', desc: 'Nieun (n sound)' },
      { text: 'ㄷ', romanization: 'd / t', keyHint: 'e', desc: 'Digeut (d sound)' },
      { text: 'ㄹ', romanization: 'r / l', keyHint: 'f', desc: 'Rieul (r/l sound)' },
      { text: 'ㅁ', romanization: 'm', keyHint: 'a', desc: 'Mieum (m sound)' },
      { text: 'ㅂ', romanization: 'b / p', keyHint: 'q', desc: 'Bieup (b/p sound)' },
      { text: 'ㅅ', romanization: 's', keyHint: 't', desc: 'Siot (s sound)' },
      { text: 'ㅇ', romanization: 'ng / silent', keyHint: 'd', desc: 'Ieung (silent start / ng end)' },
      { text: 'ㅈ', romanization: 'j / ch', keyHint: 'w', desc: 'Jieut (j sound)' },
      { text: 'ㅊ', romanization: 'ch', keyHint: 'c', desc: 'Chieut (ch sound)' },
      { text: 'ㅋ', romanization: 'k', keyHint: 'z', desc: 'Kieuk (aspirated k)' },
      { text: 'ㅌ', romanization: 't', keyHint: 'x', desc: 'Tieut (aspirated t)' },
      { text: 'ㅍ', romanization: 'p', keyHint: 'v', desc: 'Pieup (aspirated p)' },
      { text: 'ㅎ', romanization: 'h', keyHint: 'g', desc: 'Hieut (h sound)' }
    ]
  },
  {
    id: 'vowels',
    title: '2. Basic Vowels (기초 모음)',
    subtitle: 'Master the 10 fundamental Korean vowels on the right side of keyboard',
    icon: '🗣️',
    level: 2,
    items: [
      { text: 'ㅏ', romanization: 'a', keyHint: 'k', desc: 'Ah (like in father)' },
      { text: 'ㅑ', romanization: 'ya', keyHint: 'i', desc: 'Yah (like in yard)' },
      { text: 'ㅓ', romanization: 'eo', keyHint: 'j', desc: 'Uh (like in fun)' },
      { text: 'ㅕ', romanization: 'yeo', keyHint: 'u', desc: 'Yuh (like in young)' },
      { text: 'ㅗ', romanization: 'o', keyHint: 'h', desc: 'Oh (like in go)' },
      { text: 'ㅛ', romanization: 'yo', keyHint: 'y', desc: 'Yo (like in yo-yo)' },
      { text: 'ㅜ', romanization: 'u / oo', keyHint: 'n', desc: 'Oo (like in moon)' },
      { text: 'ㅠ', romanization: 'yu', keyHint: 'b', desc: 'Yoo (like in youth)' },
      { text: 'ㅡ', romanization: 'eu', keyHint: 'm', desc: 'Eu (unrounded sound)' },
      { text: 'ㅣ', romanization: 'i / ee', keyHint: 'l', desc: 'Ee (like in meet)' }
    ]
  },
  {
    id: 'syllable-2let',
    title: '3. Simple Syllables (2-Letter Blocks)',
    subtitle: 'Combine 1 Consonant + 1 Vowel into Korean syllable blocks',
    icon: '🧩',
    level: 3,
    items: [
      { text: '가', romanization: 'ga', meaning: 'go', keys: 'r k' },
      { text: '나', romanization: 'na', meaning: 'I / me', keys: 's k' },
      { text: '다', romanization: 'da', meaning: 'all', keys: 'e k' },
      { text: '라', romanization: 'ra', meaning: 'la', keys: 'f k' },
      { text: '마', romanization: 'ma', meaning: 'hemp', keys: 'a k' },
      { text: '바', romanization: 'ba', meaning: 'bar', keys: 'q k' },
      { text: '사', romanization: 'sa', meaning: 'four / buy', keys: 't k' },
      { text: '아', romanization: 'ah', meaning: 'ah!', keys: 'd k' },
      { text: '자', romanization: 'ja', meaning: 'ruler / sleep', keys: 'w k' },
      { text: '차', romanization: 'cha', meaning: 'car / tea', keys: 'c k' },
      { text: '하', romanization: 'ha', meaning: 'ha!', keys: 'g k' },
      { text: '고', romanization: 'go', meaning: 'and', keys: 'r h' },
      { text: '노', romanization: 'no', meaning: 'furnace', keys: 's h' },
      { text: '두', romanization: 'du', meaning: 'two', keys: 'e n' },
      { text: '모', romanization: 'mo', meaning: 'mother', keys: 'a h' }
    ]
  },
  {
    id: 'batchim',
    title: '4. Syllables with Batchim (받침)',
    subtitle: 'Practice 3-letter syllable blocks with final bottom consonants',
    icon: '📦',
    level: 4,
    items: [
      { text: '강', romanization: 'gang', meaning: 'river', keys: 'r k d' },
      { text: '눈', romanization: 'nun', meaning: 'eye / snow', keys: 's n s' },
      { text: '달', romanization: 'dal', meaning: 'moon / month', keys: 'e k f' },
      { text: '맘', romanization: 'mam', meaning: 'heart / mind', keys: 'a k a' },
      { text: '법', romanization: 'beop', meaning: 'law', keys: 'q j q' },
      { text: '산', romanization: 'san', meaning: 'mountain', keys: 't k s' },
      { text: '방', romanization: 'bang', meaning: 'room', keys: 'q k d' },
      { text: '집', romanization: 'jip', meaning: 'house', keys: 'w l q' },
      { text: '밥', romanization: 'bap', meaning: 'rice / meal', keys: 'q k q' },
      { text: '꽃', romanization: 'kkot', meaning: 'flower', keys: 'R h c' },
      { text: '말', romanization: 'mal', meaning: 'horse / words', keys: 'a k f' },
      { text: '별', romanization: 'byeol', meaning: 'star', keys: 'q u f' }
    ]
  },
  {
    id: 'common-words',
    title: '5. Useful Everyday Words (기초 단어)',
    subtitle: 'Type essential real-world Korean vocabulary words',
    icon: '🌟',
    level: 5,
    items: [
      { text: '한국', romanization: 'han-guk', meaning: 'Korea' },
      { text: '한글', romanization: 'han-geul', meaning: 'Korean Alphabet' },
      { text: '안녕', romanization: 'an-nyeong', meaning: 'Hello / Bye' },
      { text: '사랑', romanization: 'sa-rang', meaning: 'Love' },
      { text: '감사', romanization: 'gam-sa', meaning: 'Gratitude' },
      { text: '학교', romanization: 'hak-gyo', meaning: 'School' },
      { text: '친구', romanization: 'chin-gu', meaning: 'Friend' },
      { text: '하늘', romanization: 'ha-neul', meaning: 'Sky' },
      { text: '우유', romanization: 'u-yu', meaning: 'Milk' },
      { text: '치킨', romanization: 'chi-kin', meaning: 'Chicken' },
      { text: '라면', romanization: 'ra-myeon', meaning: 'Ramen' },
      { text: '커피', romanization: 'keo-pi', meaning: 'Coffee' },
      { text: '음악', romanization: 'eum-ak', meaning: 'Music' },
      { text: '바다', romanization: 'ba-da', meaning: 'Ocean' }
    ]
  },
  {
    id: 'phrases',
    title: '6. Common Phrases (실전 문장)',
    subtitle: 'Master full Korean sentences and conversational greetings',
    icon: '💬',
    level: 6,
    items: [
      { text: '안녕하세요', romanization: 'an-nyeong-ha-se-yo', meaning: 'Hello (polite)' },
      { text: '감사합니다', romanization: 'gam-sa-ham-ni-da', meaning: 'Thank you' },
      { text: '반갑습니다', romanization: 'ban-gap-seum-ni-da', meaning: 'Nice to meet you' },
      { text: '괜찮아요', romanization: 'gwaen-chan-a-yo', meaning: 'It is okay / fine' },
      { text: '사랑해요', romanization: 'sa-rang-hae-yo', meaning: 'I love you' },
      { text: '화이팅', romanization: 'hwa-i-ting', meaning: 'Fighting! / Good luck!' },
      { text: '한국어를 공부해요', romanization: 'han-gug-eo-reul gong-bu-hae-yo', meaning: 'I study Korean language' }
    ]
  }
];

// Achievements / Badges System
export const ACHIEVEMENTS = [
  { id: 'first_step', name: 'First Key', desc: 'Type your very first Korean character', icon: '🌱' },
  { id: 'streak_10', name: 'On Fire', desc: 'Reach a 10-key combo streak', icon: '🔥' },
  { id: 'streak_30', name: 'Lightning Typer', desc: 'Reach a 30-key combo streak', icon: '⚡' },
  { id: 'consonant_master', name: 'Consonants Master', desc: 'Complete all basic consonants lessons', icon: '🥇' },
  { id: 'vowel_master', name: 'Vowels Master', desc: 'Complete all basic vowels lessons', icon: '🎨' }
];
