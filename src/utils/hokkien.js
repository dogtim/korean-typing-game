// Taiwanese Hokkien (Tâi-lô / 方音符號) Phonetic Breakdown & Assembly Engine

/**
 * 17 Standard Tâi-lô Initial Consonants (聲母 Siann-bú)
 */
export const HOKKIEN_INITIALS = [
  { id: 'p', tps: 'ㄅ', ipa: 'p', desc: 'Unaspirated voiceless bilabial stop (邊 / 邊音)' },
  { id: 'ph', tps: 'ㄆ', ipa: 'pʰ', desc: 'Aspirated voiceless bilabial stop (頗 / 吐氣音)' },
  { id: 'm', tps: 'ㄇ', ipa: 'm', desc: 'Bilabial nasal (門 / 鼻音)' },
  { id: 'b', tps: 'ㆠ', ipa: 'b', desc: 'Voiced bilabial stop (文 / 濁音)' },
  { id: 't', tps: 'ㄉ', ipa: 't', desc: 'Unaspirated voiceless alveolar stop (地 / 齒音)' },
  { id: 'th', tps: 'ㄊ', ipa: 'tʰ', desc: 'Aspirated voiceless alveolar stop (他 / 吐氣齒音)' },
  { id: 'n', tps: 'ㄋ', ipa: 'n', desc: 'Alveolar nasal (年 / 舌尖鼻音)' },
  { id: 'l', tps: 'ㄌ', ipa: 'l', desc: 'Alveolar lateral flap (柳 / 來母)' },
  { id: 'k', tps: 'ㄍ', ipa: 'k', desc: 'Unaspirated voiceless velar stop (求 / 舌根音)' },
  { id: 'kh', tps: 'ㄎ', ipa: 'kʰ', desc: 'Aspirated voiceless velar stop (去 / 吐氣舌根音)' },
  { id: 'ng', tps: 'ㄫ', ipa: 'ŋ', desc: 'Velar nasal initial (雅 / 舌根鼻音)' },
  { id: 'g', tps: 'ㆣ', ipa: 'ɡ', desc: 'Voiced velar stop (語 / 濁舌根音)' },
  { id: 'ts', tps: 'ㄗ', ipa: 'ts', alt: 'ch', desc: 'Unaspirated voiceless affricate (曾 / 舌尖塞擦音)' },
  { id: 'tsh', tps: 'ㄘ', ipa: 'tsʰ', alt: 'chh', desc: 'Aspirated voiceless affricate (出 / 吐氣塞擦音)' },
  { id: 's', tps: 'ㄙ', ipa: 's', desc: 'Voiceless alveolar sibilant (時 / 齒擦音)' },
  { id: 'j', tps: 'ㆢ', ipa: 'dz / z', desc: 'Voiced alveolar affricate / fricative (入 / 濁齒擦音)' },
  { id: 'h', tps: 'ㄏ', ipa: 'h', desc: 'Glottal fricative (喜 / 喉音)' }
];

/**
 * 8 Taiwanese Tones (聲調 Siann-tiāu)
 */
export const HOKKIEN_TONE_GUIDE = {
  1: {
    tone: 1,
    name: '第1調 陰平',
    pitch: '55 (高平調)',
    diacritic: '',
    tpsMark: '',
    color: '#06b6d4', // Cyan
    example: '君 (kun)',
    desc: 'High level tone (no diacritic)'
  },
  2: {
    tone: 2,
    name: '第2調 陰上',
    pitch: '51 (高降調)',
    diacritic: '´ (acute)',
    tpsMark: 'ˋ',
    color: '#3b82f6', // Blue
    example: '滾 (kún)',
    desc: 'High falling tone'
  },
  3: {
    tone: 3,
    name: '第3調 陰去',
    pitch: '31 (低降調)',
    diacritic: '` (grave)',
    tpsMark: '˪',
    color: '#8b5cf6', // Purple
    example: '棍 (kùn)',
    desc: 'Low falling tone'
  },
  4: {
    tone: 4,
    name: '第4調 陰入',
    pitch: '21 (低促調 / 入聲)',
    diacritic: '-p, -t, -k, -h',
    tpsMark: '•',
    color: '#ec4899', // Pink
    example: '骨 (kut)',
    desc: 'Short low stopped syllable (-p, -t, -k, -h)'
  },
  5: {
    tone: 5,
    name: '第5調 陽平',
    pitch: '24 (低升調)',
    diacritic: 'ˆ (circumflex)',
    tpsMark: 'ˊ',
    color: '#10b981', // Emerald
    example: '群 (kûn)',
    desc: 'Low rising tone'
  },
  7: {
    tone: 7,
    name: '第7調 陽去',
    pitch: '33 (中平調)',
    diacritic: '¯ (macron)',
    tpsMark: '˫',
    color: '#f59e0b', // Amber
    example: '郡 (kūn)',
    desc: 'Mid level sustained tone'
  },
  8: {
    tone: 8,
    name: '第8調 陽入',
    pitch: '53 (高促調 / 入聲)',
    diacritic: '̍ (vertical bar) / -p, -t, -k, -h',
    tpsMark: '•',
    color: '#ef4444', // Red
    example: '滑 (ku̍t)',
    desc: 'Short high stopped syllable'
  }
};

// Map diacritic characters to base vowel + tone number
const DIACRITIC_MAP = {
  // Acute (Tone 2)
  'á': { v: 'a', t: 2 }, 'í': { v: 'i', t: 2 }, 'ú': { v: 'u', t: 2 },
  'é': { v: 'e', t: 2 }, 'ó': { v: 'o', t: 2 }, 'ḿ': { v: 'm', t: 2 }, 'ń': { v: 'n', t: 2 },
  // Grave (Tone 3)
  'à': { v: 'a', t: 3 }, 'ì': { v: 'i', t: 3 }, 'ù': { v: 'u', t: 3 },
  'è': { v: 'e', t: 3 }, 'ò': { v: 'o', t: 3 },
  // Circumflex (Tone 5)
  'â': { v: 'a', t: 5 }, 'î': { v: 'i', t: 5 }, 'û': { v: 'u', t: 5 },
  'ê': { v: 'e', t: 5 }, 'ô': { v: 'o', t: 5 },
  // Macron (Tone 7)
  'ā': { v: 'a', t: 7 }, 'ī': { v: 'i', t: 7 }, 'ū': { v: 'u', t: 7 },
  'ē': { v: 'e', t: 7 }, 'ō': { v: 'o', t: 7 },
  // Vertical line above (Tone 8) - Unicode combining char \u030D or precomposed
  'a̍': { v: 'a', t: 8 }, 'i̍': { v: 'i', t: 8 }, 'u̍': { v: 'u', t: 8 },
  'e̍': { v: 'e', t: 8 }, 'o̍': { v: 'o', t: 8 }
};

/**
 * Normalizes Tâi-lô syllable with tone diacritics into base letters and tone number.
 * Example: 'tiān' -> { base: 'tian', tone: 7 }
 * Example: 'hué' -> { base: 'hue', tone: 2 }
 * Example: 'kut' -> { base: 'kut', tone: 4 }
 * Example: 'ku̍t' -> { base: 'kut', tone: 8 }
 */
export function normalizeTaiLo(syllable) {
  if (!syllable) return { base: '', tone: 1 };
  let s = syllable.trim().toLowerCase();

  // Strip punctuation, hyphens, and whitespace
  s = s.replace(/^[^\w\u00C0-\u024F\u0300-\u036F]+|[^\w\u00C0-\u024F\u0300-\u036F]+$/g, '');

  let detectedTone = null;

  // Check explicit ending numbers (e.g. tian7 -> tone 7)
  const numMatch = s.match(/([a-z\u00C0-\u024F\u0300-\u036F]+)([1-8])$/);
  if (numMatch) {
    s = numMatch[1];
    detectedTone = parseInt(numMatch[2], 10);
  }

  // Check combining vertical mark for Tone 8 (e.g. \u030D)
  if (s.includes('\u030D')) {
    detectedTone = 8;
    s = s.replace(/\u030D/g, '');
  }

  let cleanBase = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const twoChar = (i + 1 < s.length && s[i + 1] === '\u030D') ? ch + '\u030D' : null;
    if (twoChar && DIACRITIC_MAP[twoChar]) {
      cleanBase += DIACRITIC_MAP[twoChar].v;
      if (!detectedTone) detectedTone = DIACRITIC_MAP[twoChar].t;
      i++; // skip combining
      continue;
    }

    if (DIACRITIC_MAP[ch]) {
      cleanBase += DIACRITIC_MAP[ch].v;
      if (!detectedTone) detectedTone = DIACRITIC_MAP[ch].t;
    } else {
      cleanBase += ch;
    }
  }

  // Checked tone rules: if syllable ends with -p, -t, -k, -h and no diacritic, default is Tone 4!
  const isChecked = /[ptkh]$/.test(cleanBase);
  if (!detectedTone) {
    detectedTone = isChecked ? 4 : 1;
  }

  return { base: cleanBase, tone: detectedTone };
}

/**
 * Decomposes a single Tâi-lô syllable into Initial, Vowel, Coda, and Tone components.
 * Equivalent to Hangul's Choseong + Jungseong + Jongseong!
 */
export function decomposeHokkienSyllable(syllableStr) {
  if (!syllableStr) {
    return {
      raw: '',
      base: '',
      initial: '',
      vowel: '',
      coda: '',
      tone: 1,
      toneGuide: HOKKIEN_TONE_GUIDE[1],
      keys: []
    };
  }

  const { base, tone } = normalizeTaiLo(syllableStr);
  const toneGuide = HOKKIEN_TONE_GUIDE[tone] || HOKKIEN_TONE_GUIDE[1];

  let initial = '';
  let remainder = base;

  // 1. Match Initial Consonant (ordered by length descending: tsh, chh, ts, ch, ph, th, kh, ng, ...)
  const initialPatterns = ['tsh', 'chh', 'ts', 'ch', 'ph', 'th', 'kh', 'ng', 'p', 'm', 'b', 't', 'n', 'l', 'k', 'g', 's', 'j', 'h'];
  for (const init of initialPatterns) {
    if (remainder.startsWith(init)) {
      // Special case: 'ng' or 'm' alone is a syllabic consonant (e.g. ng5 '黃', m7 '不')
      if ((init === 'ng' || init === 'm') && remainder.length === init.length) {
        initial = 'Ø';
        remainder = init;
      } else {
        initial = init === 'ch' ? 'ts' : (init === 'chh' ? 'tsh' : init);
        remainder = remainder.slice(init.length);
      }
      break;
    }
  }

  if (!initial) {
    initial = 'Ø'; // Zero initial (零聲母)
  }

  // 2. Match Coda (韻尾: -ng, -nn, -m, -n, -p, -t, -k, -h)
  let coda = '';
  let vowel = remainder;

  if (remainder.endsWith('ng') && remainder.length > 2) {
    coda = 'ng';
    vowel = remainder.slice(0, -2);
  } else if (remainder.endsWith('nn') && remainder.length > 2) {
    // Nasalized vowel indicator (e.g. 'suann' -> vowel 'ua', nasal 'nn')
    coda = 'ⁿ (鼻化)';
    vowel = remainder.slice(0, -2);
  } else if (/[mnptkh]$/.test(remainder) && remainder.length > 1) {
    coda = remainder.slice(-1);
    vowel = remainder.slice(0, -1);
  }

  // Initial metadata
  const initMeta = HOKKIEN_INITIALS.find(i => i.id === initial) || { id: initial, tps: 'Ø', desc: 'Zero Initial' };

  // Generate required typing keys
  const keys = base.split('');

  return {
    raw: syllableStr,
    base,
    initial: initial === 'Ø' ? '' : initial,
    initialDisplay: initial === 'Ø' ? 'Ø (零聲母)' : `${initial} (${initMeta.tps})`,
    initialTps: initMeta.tps,
    vowel,
    coda,
    tone,
    toneName: toneGuide.name,
    tonePitch: toneGuide.pitch,
    toneColor: toneGuide.color,
    toneGuide,
    keys
  };
}

/**
 * Breaks down a paired Hanzi and Tâi-lô line into rich educational breakdown tokens.
 */
export function getHokkienLineBreakdown(hanziLine, tailoLine) {
  if (!tailoLine && !hanziLine) return [];

  const rawTailoWords = (tailoLine || '').trim().split(/\s+/).filter(Boolean);
  const hanziChars = (hanziLine || '').replace(/\s+/g, '');

  const tokens = [];
  let hanziIdx = 0;

  for (let wIdx = 0; wIdx < rawTailoWords.length; wIdx++) {
    const word = rawTailoWords[wIdx];
    // A word can be hyphenated compound (e.g. "tiān-hué-ông", "tsi̍t-khoo-lān")
    const syllables = word.split('-');

    for (let sIdx = 0; sIdx < syllables.length; sIdx++) {
      const syl = syllables[sIdx];
      const dec = decomposeHokkienSyllable(syl);

      // Match corresponding Hanzi char if available
      let char = '';
      if (hanziIdx < hanziChars.length) {
        char = hanziChars[hanziIdx];
        hanziIdx++;
      }

      tokens.push({
        char: char || syl,
        word,
        syllable: syl,
        isFirstInWord: sIdx === 0,
        initial: dec.initial,
        initialDisplay: dec.initialDisplay,
        initialTps: dec.initialTps,
        vowel: dec.vowel,
        coda: dec.coda,
        tone: dec.tone,
        toneName: dec.toneName,
        tonePitch: dec.tonePitch,
        toneColor: dec.toneColor,
        color: dec.toneColor,
        keys: dec.keys
      });
    }
  }

  return tokens;
}
