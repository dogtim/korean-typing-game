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
