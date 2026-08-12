// Dubeolsik (2-Set) Keyboard Mapping and Hangul Assembly Engine

export const KEYBOARD_LAYOUT = [
  // Row 1
  [
    { key: 'q', ko: 'ㅂ', koShift: 'ㅃ', finger: 'left-pinky' },
    { key: 'w', ko: 'ㅈ', koShift: 'ㅉ', finger: 'left-ring' },
    { key: 'e', ko: 'ㄷ', koShift: 'ㄸ', finger: 'left-middle' },
    { key: 'r', ko: 'ㄱ', koShift: 'ㄲ', finger: 'left-index' },
    { key: 't', ko: 'ㅅ', koShift: 'ㅆ', finger: 'left-index' },
    { key: 'y', ko: 'ㅛ', koShift: 'ㅛ', finger: 'right-index' },
    { key: 'u', ko: 'ㅕ', koShift: 'ㅕ', finger: 'right-index' },
    { key: 'i', ko: 'ㅑ', koShift: 'ㅑ', finger: 'right-middle' },
    { key: 'o', ko: 'ㅐ', koShift: 'ㅒ', finger: 'right-ring' },
    { key: 'p', ko: 'ㅔ', koShift: 'ㅖ', finger: 'right-pinky' },
  ],
  // Row 2
  [
    { key: 'a', ko: 'ㅁ', koShift: 'ㅁ', finger: 'left-pinky' },
    { key: 's', ko: 'ㄴ', koShift: 'ㄴ', finger: 'left-ring' },
    { key: 'd', ko: 'ㅇ', koShift: 'ㅇ', finger: 'left-middle' },
    { key: 'f', ko: 'ㄹ', koShift: 'ㄹ', finger: 'left-index' },
    { key: 'g', ko: 'ㅎ', koShift: 'ㅎ', finger: 'left-index' },
    { key: 'h', ko: 'ㅗ', koShift: 'ㅗ', finger: 'right-index' },
    { key: 'j', ko: 'ㅓ', koShift: 'ㅓ', finger: 'right-index' },
    { key: 'k', ko: 'ㅏ', koShift: 'ㅏ', finger: 'right-middle' },
    { key: 'l', ko: 'ㅣ', koShift: 'ㅣ', finger: 'right-ring' },
  ],
  // Row 3
  [
    { key: 'z', ko: 'ㅋ', koShift: 'ㅋ', finger: 'left-pinky' },
    { key: 'x', ko: 'ㅌ', koShift: 'ㅌ', finger: 'left-ring' },
    { key: 'c', ko: 'ㅊ', koShift: 'ㅊ', finger: 'left-middle' },
    { key: 'v', ko: 'ㅍ', koShift: 'ㅍ', finger: 'left-index' },
    { key: 'b', ko: 'ㅠ', koShift: 'ㅠ', finger: 'left-index' },
    { key: 'n', ko: 'ㅜ', koShift: 'ㅜ', finger: 'right-index' },
    { key: 'm', ko: 'ㅡ', koShift: 'ㅡ', finger: 'right-index' },
  ]
];

// Flat key map for fast lookup
export const QWERTY_TO_KO = {
  q: 'ㅂ', Q: 'ㅃ',
  w: 'ㅈ', W: 'ㅉ',
  e: 'ㄷ', E: 'ㄸ',
  r: 'ㄱ', R: 'ㄲ',
  t: 'ㅅ', T: 'ㅆ',
  y: 'ㅛ', Y: 'ㅛ',
  u: 'ㅕ', U: 'ㅕ',
  i: 'ㅑ', I: 'ㅑ',
  o: 'ㅐ', O: 'ㅒ',
  p: 'ㅔ', P: 'ㅖ',
  a: 'ㅁ', A: 'ㅁ',
  s: 'ㄴ', S: 'ㄴ',
  d: 'ㅇ', D: 'ㅇ',
  f: 'ㄹ', F: 'ㄹ',
  g: 'ㅎ', G: 'ㅎ',
  h: 'ㅗ', H: 'ㅗ',
  j: 'ㅓ', J: 'ㅓ',
  k: 'ㅏ', K: 'ㅏ',
  l: 'ㅣ', L: 'ㅣ',
  z: 'ㅋ', Z: 'ㅋ',
  x: 'ㅌ', X: 'ㅌ',
  c: 'ㅊ', C: 'ㅊ',
  v: 'ㅍ', V: 'ㅍ',
  b: 'ㅠ', B: 'ㅠ',
  n: 'ㅜ', N: 'ㅜ',
  m: 'ㅡ', M: 'ㅡ',
};

// Reverse map: Jamo to QWERTY key representation
export const KO_TO_QWERTY = {
  'ㅂ': 'q', 'ㅃ': 'Q',
  'ㅈ': 'w', 'ㅉ': 'W',
  'ㄷ': 'e', 'ㄸ': 'E',
  'ㄱ': 'r', 'ㄲ': 'R',
  'ㅅ': 't', 'ㅆ': 'T',
  'ㅛ': 'y',
  'ㅕ': 'u',
  'ㅑ': 'i',
  'ㅐ': 'o', 'ㅒ': 'O',
  'ㅔ': 'p', 'ㅖ': 'P',
  'ㅁ': 'a',
  'ㄴ': 's',
  'ㅇ': 'd',
  'ㄹ': 'f',
  'ㅎ': 'g',
  'ㅗ': 'h',
  'ㅓ': 'j',
  'ㅏ': 'k',
  'ㅣ': 'l',
  'ㅋ': 'z',
  'ㅌ': 'x',
  'ㅊ': 'c',
  'ㅍ': 'v',
  'ㅠ': 'b',
  'ㅜ': 'n',
  'ㅡ': 'm',
};

// Unicode Constants for Hangul Composition
const HANGUL_BASE = 0xAC00;
const HANGUL_END = 0xD7A3;

export const CHOSEONG = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

export const JUNGSEONG = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
  'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

export const JONGSEONG = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ',
  'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

// Complex Vowels Combination Map (Jungseong)
const COMPLEX_VOWELS = {
  'ㅗㅏ': 'ㅘ',
  'ㅗㅐ': 'ㅙ',
  'ㅗㅣ': 'ㅚ',
  'ㅜㅓ': 'ㅝ',
  'ㅜㅔ': 'ㅞ',
  'ㅜㅣ': 'ㅟ',
  'ㅡㅣ': 'ㅢ'
};

// Complex Jongseong Combination Map
const COMPLEX_JONGSEONG = {
  'ㄱㅅ': 'ㄳ',
  'ㄴㅈ': 'ㄵ',
  'ㄴㅎ': 'ㄶ',
  'ㄹㄱ': 'ㄺ',
  'ㄹㅁ': 'ㄻ',
  'ㄹㅂ': 'ㄼ',
  'ㄹㅅ': 'ㄽ',
  'ㄹㅌ': 'ㄾ',
  'ㄹㅍ': 'ㄿ',
  'ㄹㅎ': 'ㅀ',
  'ㅂㅅ': 'ㅄ'
};

/**
 * Safely extracts standard QWERTY key representation from physical KeyboardEvent (e.code or e.key).
 */
export function getQWERTYKeyFromEvent(e) {
  const isShift = e.shiftKey;

  // Spacebar
  if (e.code === 'Space' || e.key === ' ' || e.key === 'Space') {
    return 'space';
  }

  // Physical QWERTY key detection via e.code (works regardless of OS Keyboard Language)
  if (e.code && e.code.startsWith('Key')) {
    const letter = e.code.replace('Key', '').toLowerCase();
    // Check shifted keys for double consonants & complex vowels
    if (isShift) {
      if (['q', 'w', 'e', 'r', 't', 'o', 'p'].includes(letter)) {
        return letter.toUpperCase();
      }
    }
    return letter;
  }

  // Fallback to e.key
  if (e.key && e.key.length === 1) {
    if (KO_TO_QWERTY[e.key]) {
      return KO_TO_QWERTY[e.key];
    }
    return e.key;
  }

  return null;
}

/**
 * Decomposes a Hangul character into its constituent Jamos and required QWERTY keypresses.
 */
export function decomposeHangulChar(char) {
  const code = char.charCodeAt(0);
  if (code < HANGUL_BASE || code > HANGUL_END) {
    // Single Jamo or non-Hangul
    const key = KO_TO_QWERTY[char] || char;
    return { choseong: char, jungseong: '', jongseong: '', jamos: [char], keys: [key] };
  }

  const offset = code - HANGUL_BASE;
  const choseongIdx = Math.floor(offset / (21 * 28));
  const jungseongIdx = Math.floor((offset % (21 * 28)) / 28);
  const jongseongIdx = offset % 28;

  const cho = CHOSEONG[choseongIdx];
  const jung = JUNGSEONG[jungseongIdx];
  const jong = JONGSEONG[jongseongIdx];

  const jamos = [cho, jung];
  if (jong) jamos.push(jong);

  // Helper to convert complex vowel/jongseong to individual keypresses
  const keys = [];

  // Cho key
  if (KO_TO_QWERTY[cho]) keys.push(KO_TO_QWERTY[cho]);

  // Jung keys
  const reverseComplexVowel = Object.entries(COMPLEX_VOWELS).find(([_, v]) => v === jung);
  if (reverseComplexVowel) {
    for (const vChar of reverseComplexVowel[0]) {
      keys.push(KO_TO_QWERTY[vChar]);
    }
  } else if (KO_TO_QWERTY[jung]) {
    keys.push(KO_TO_QWERTY[jung]);
  }

  // Jong keys
  if (jong) {
    const reverseComplexJong = Object.entries(COMPLEX_JONGSEONG).find(([_, v]) => v === jong);
    if (reverseComplexJong) {
      for (const jChar of reverseComplexJong[0]) {
        keys.push(KO_TO_QWERTY[jChar]);
      }
    } else if (KO_TO_QWERTY[jong]) {
      keys.push(KO_TO_QWERTY[jong]);
    }
  }

  return { choseong: cho, jungseong: jung, jongseong: jong, jamos, keys };
}

// Romanization map for Choseong (initial consonant)
const CHO_ROM = {
  'ㄱ': 'g', 'ㄲ': 'kk', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄸ': 'tt', 'ㄹ': 'r', 'ㅁ': 'm',
  'ㅂ': 'b', 'ㅃ': 'pp', 'ㅅ': 's', 'ㅆ': 'ss', 'ㅇ': '', 'ㅈ': 'j', 'ㅉ': 'jj',
  'ㅊ': 'ch', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h'
};

// Romanization map for Jungseong (vowel)
const JUNG_ROM = {
  'ㅏ': 'a', 'ㅐ': 'ae', 'ㅑ': 'ya', 'ㅒ': 'yae', 'ㅓ': 'eo', 'ㅔ': 'e',
  'ㅕ': 'yeo', 'ㅖ': 'ye', 'ㅗ': 'o', 'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe',
  'ㅛ': 'yo', 'ㅜ': 'u', 'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi', 'ㅠ': 'yu',
  'ㅡ': 'eu', 'ㅢ': 'ui', 'ㅣ': 'i'
};

// Romanization map for Jongseong (final consonant / batchim)
const JONG_ROM = {
  '': '', 'ㄱ': 'k', 'ㄲ': 'k', 'ㄳ': 'k', 'ㄴ': 'n', 'ㄵ': 'n', 'ㄶ': 'n',
  'ㄷ': 't', 'ㄹ': 'l', 'ㄺ': 'k', 'ㄻ': 'm', 'ㄼ': 'p', 'ㄽ': 'l', 'ㄾ': 'l',
  'ㄿ': 'p', 'ㅀ': 'l', 'ㅁ': 'm', 'ㅂ': 'p', 'ㅄ': 'p', 'ㅅ': 't', 'ㅆ': 't',
  'ㅇ': 'ng', 'ㅈ': 't', 'ㅊ': 't', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 't'
};

/**
 * Romanize a single Hangul syllable character.
 */
export function romanizeSyllable(char) {
  const dec = decomposeHangulChar(char);
  if (!dec.jungseong) return char;
  const cho = CHO_ROM[dec.choseong] ?? dec.choseong;
  const jung = JUNG_ROM[dec.jungseong] ?? dec.jungseong;
  const jong = JONG_ROM[dec.jongseong] ?? '';
  return cho + jung + jong;
}

/**
 * Romanizes full Hangul text with syllable-linking / liaison rules.
 */
export function romanizeHangulWord(word) {
  if (!word) return '';
  const syllables = [];
  for (const char of word) {
    const dec = decomposeHangulChar(char);
    if (dec.jungseong) {
      syllables.push(dec);
    } else {
      syllables.push({ isNonHangul: true, char });
    }
  }

  let result = '';
  for (let i = 0; i < syllables.length; i++) {
    const cur = syllables[i];
    if (cur.isNonHangul) {
      result += cur.char;
      continue;
    }
    const next = syllables[i + 1];

    let choStr = CHO_ROM[cur.choseong] ?? cur.choseong;
    let jungStr = JUNG_ROM[cur.jungseong] ?? cur.jungseong;
    let jongStr = JONG_ROM[cur.jongseong] ?? '';

    // Liaison rule: If current has batchim and next syllable starts with 'ㅇ' (silent initial),
    // batchim carries over to initial consonant of next syllable!
    if (cur.jongseong && next && !next.isNonHangul && next.choseong === 'ㅇ') {
      // Transfer batchim sound to initial consonant of next syllable
      if (cur.jongseong === 'ㄷ' || cur.jongseong === 'ㅅ' || cur.jongseong === 'ㅈ' || cur.jongseong === 'ㅊ' || cur.jongseong === 'ㅌ') {
        // e.g. 뜻 + 이 -> 뜨 + 시/디 -> deu-si / deu-di
        if (cur.jongseong === 'ㅅ') jongStr = ''; // move to next as 's'
        else if (cur.jongseong === 'ㄷ') jongStr = '';
        else jongStr = '';
      } else if (cur.jongseong === 'ㄹ') {
        // e.g. 알 + 아 -> a-ra
        jongStr = '';
      } else if (cur.jongseong === 'ㄱ' || cur.jongseong === 'ㄴ' || cur.jongseong === 'ㅁ' || cur.jongseong === 'ㅂ') {
        jongStr = '';
      }
    }

    // Adjust initial consonant if previous syllable carried over
    const prev = i > 0 ? syllables[i - 1] : null;
    if (prev && !prev.isNonHangul && prev.jongseong && cur.choseong === 'ㅇ') {
      if (prev.jongseong === 'ㄹ') choStr = 'r';
      else if (prev.jongseong === 'ㄱ') choStr = 'g';
      else if (prev.jongseong === 'ㄷ') choStr = 'd';
      else if (prev.jongseong === 'ㅂ') choStr = 'b';
      else if (prev.jongseong === 'ㅅ') choStr = 's';
      else if (prev.jongseong === 'ㅈ') choStr = 'j';
      else if (prev.jongseong === 'ㄴ') choStr = 'n';
      else if (prev.jongseong === 'ㅁ') choStr = 'm';
    }

    result += choStr + jungStr + jongStr;
  }

  // Capitalize first letter of word for readability
  if (result.length > 0) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  return result;
}

/**
 * Returns complete key sequence for a Hangul string.
 */
export function getRequiredKeys(text) {
  const result = [];
  for (const char of text) {
    if (char === ' ') {
      result.push({ char: ' ', key: 'space', jamo: ' ' });
      continue;
    }
    const dec = decomposeHangulChar(char);
    for (let i = 0; i < dec.keys.length; i++) {
      result.push({
        char,
        key: dec.keys[i],
        jamo: dec.jamos[i] || QWERTY_TO_KO[dec.keys[i]] || dec.keys[i]
      });
    }
  }
  return result;
}

/**
 * Assembles a sequence of QWERTY keys or Korean Jamos into composed Hangul text.
 */
export function composeHangul(inputStr) {
  let result = '';
  let cho = '';
  let jung = '';
  let jong = '';

  const chars = [];
  for (const char of inputStr) {
    const koChar = QWERTY_TO_KO[char] || char;
    chars.push(koChar);
  }

  function flushSyllable() {
    if (!cho) return;
    if (cho && !jung) {
      result += cho;
    } else if (cho && jung) {
      const choIdx = CHOSEONG.indexOf(cho);
      const jungIdx = JUNGSEONG.indexOf(jung);
      const jongIdx = jong ? JONGSEONG.indexOf(jong) : 0;

      if (choIdx !== -1 && jungIdx !== -1 && jongIdx !== -1) {
        const unicode = HANGUL_BASE + (choIdx * 21 * 28) + (jungIdx * 28) + jongIdx;
        result += String.fromCharCode(unicode);
      } else {
        result += cho + jung + (jong || '');
      }
    }
    cho = '';
    jung = '';
    jong = '';
  }

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];

    // Non-Korean or Space
    if (!CHOSEONG.includes(c) && !JUNGSEONG.includes(c) && !Object.values(COMPLEX_VOWELS).includes(c)) {
      flushSyllable();
      result += c;
      continue;
    }

    const isConsonant = CHOSEONG.includes(c);
    const isVowel = JUNGSEONG.includes(c) || Object.values(COMPLEX_VOWELS).includes(c);

    if (!cho) {
      if (isConsonant) {
        cho = c;
      } else {
        result += c; // Vowel alone without initial consonant
      }
    } else if (cho && !jung) {
      if (isVowel) {
        jung = c;
      } else {
        // Double initial consonant or consecutive consonants
        flushSyllable();
        cho = c;
      }
    } else if (cho && jung && !jong) {
      if (isVowel) {
        // Compound vowel? (e.g. ㅗ + ㅏ = ㅘ)
        const combinedVowel = COMPLEX_VOWELS[jung + c];
        if (combinedVowel) {
          jung = combinedVowel;
        } else {
          flushSyllable();
          result += c;
        }
      } else if (isConsonant) {
        // Is it a valid final consonant (jongseong)?
        // Check next char: if next char is a vowel, then this consonant is actually the initial consonant of next syllable!
        const nextChar = chars[i + 1];
        const nextIsVowel = nextChar && JUNGSEONG.includes(nextChar);

        if (nextIsVowel) {
          flushSyllable();
          cho = c;
        } else if (JONGSEONG.includes(c)) {
          jong = c;
        } else {
          flushSyllable();
          cho = c;
        }
      }
    } else if (cho && jung && jong) {
      if (isVowel) {
        // The jongseong breaks off to become the choseong of the new syllable!
        // Handle complex jongseong split if any (e.g. ㄳ -> ㄱ goes to old jong, ㅅ goes to new cho)
        const complexPair = Object.entries(COMPLEX_JONGSEONG).find(([_, v]) => v === jong);
        if (complexPair) {
          const [firstJong, secondCho] = complexPair[0];
          jong = firstJong;
          flushSyllable();
          cho = secondCho;
          jung = c;
        } else {
          const prevJong = jong;
          jong = '';
          flushSyllable();
          cho = prevJong;
          jung = c;
        }
      } else if (isConsonant) {
        // Try compound jongseong (e.g. ㄱ + ㅅ = ㄳ)
        const combinedJong = COMPLEX_JONGSEONG[jong + c];
        const nextChar = chars[i + 1];
        const nextIsVowel = nextChar && JUNGSEONG.includes(nextChar);

        if (combinedJong && !nextIsVowel) {
          jong = combinedJong;
        } else {
          flushSyllable();
          cho = c;
        }
      }
    }
  }

  flushSyllable();
  return result;
}
