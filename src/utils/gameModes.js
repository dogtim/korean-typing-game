// Game Mode Registry — pluggable "pause & challenge" mini-games that trigger
// after a Korean lyric line finishes playing. To add a new mode: append an
// entry here and register its challenge component in
// components/gameModes/GameChallengeOverlay.jsx's CHALLENGE_COMPONENTS map.

import { ListChecks, Shuffle, Mic, Crosshair } from 'lucide-react';

export const GAME_MODES = [
  {
    id: 'choice',
    label: 'Choice Mode',
    icon: ListChecks,
    timeLimitSec: 10,
    xpReward: 30,
    description: 'Pick the sentence that was just sung before the timer runs out.'
  },
  {
    id: 'wordorder',
    label: 'Word Order Rebuild',
    icon: Shuffle,
    timeLimitSec: 20,
    xpReward: 30,
    description: 'Tap the scrambled words back into the correct order.'
  },
  {
    id: 'sing',
    label: 'Sing the Words!',
    icon: Mic,
    timeLimitSec: 15,
    xpReward: 35,
    description: 'Sing or pronounce the missing Korean words into your mic (70%+ match to pass).'
  },
  {
    id: 'batchim',
    label: 'Batchim Builder',
    icon: Crosshair,
    timeLimitSec: 25,
    xpReward: 45,
    // Tells GameChallengeOverlay to skip the centered challenge-card and let
    // this mode's component freely position elements across the full stage.
    fullBleed: true,
    description: 'Catch the scattered, drifting Hangul syllables in the correct order to rebuild the sentence.'
  }
];

export function getGameModeConfig(id) {
  return GAME_MODES.find(m => m.id === id) || null;
}

// Only lines containing actual Hangul syllables are eligible for gameplay —
// pure English/instrumental SRT lines are skipped entirely.
export function containsKorean(text) {
  return typeof text === 'string' && /[가-힣]/.test(text);
}

// Deduplicated pool of Korean sentence text drawn from a lyrics array, used
// to source real distractor options for Choice Mode.
export function buildKoreanLinePool(lyrics) {
  if (!Array.isArray(lyrics)) return [];
  const seen = new Set();
  const pool = [];
  for (const line of lyrics) {
    if (line?.ko && containsKorean(line.ko) && !seen.has(line.ko)) {
      seen.add(line.ko);
      pool.push(line.ko);
    }
  }
  return pool;
}

export function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Shuffles word-level tokens, retrying (bounded) until the order actually
// differs from the input — a no-op scramble isn't a useful puzzle.
export function shuffleWords(tokens) {
  if (tokens.length <= 1) return [...tokens];
  let shuffled = shuffleArray(tokens);
  let attempts = 0;
  while (shuffled.join(' ') === tokens.join(' ') && attempts < 8) {
    shuffled = shuffleArray(tokens);
    attempts++;
  }
  return shuffled;
}

function tokenize(text) {
  return text.trim().split(/\s+/);
}

function scrambleSentence(text) {
  const tokens = tokenize(text);
  if (tokens.length <= 1) return text;
  return shuffleWords(tokens).join(' ');
}

// Word-level vocabulary of Korean tokens across a sentence pool — the raw
// material for crafting near-miss distractors (swap a real word for another
// real word, rather than showing an unrelated sentence).
function buildWordBank(sentences) {
  const bank = new Set();
  for (const sentence of sentences) {
    if (!sentence) continue;
    for (const token of tokenize(sentence)) {
      if (containsKorean(token)) bank.add(token);
    }
  }
  return Array.from(bank);
}

// Builds a distractor by swapping 1-2 Korean words in the correct sentence
// for different real Korean words from the vocabulary bank. English/filler
// words (e.g. "I'll be there") are left untouched so the player's attention
// stays on the Korean. Returns null if no distinct swap could be made.
function makeNearMissDistractor(correctTokens, wordBank, usedResults) {
  const koreanIdxs = correctTokens
    .map((token, idx) => (containsKorean(token) ? idx : -1))
    .filter(idx => idx !== -1);
  if (koreanIdxs.length === 0 || wordBank.length === 0) return null;

  const swapCount = koreanIdxs.length >= 2 && Math.random() < 0.5 ? 2 : 1;
  const swapIdxs = shuffleArray(koreanIdxs).slice(0, Math.min(swapCount, koreanIdxs.length));
  const correctJoined = correctTokens.join(' ');
  // Never swap in a word that's already used elsewhere in the sentence — that
  // just produces a silly "가치 가치"-style repeat instead of a real near-miss.
  const existingWords = new Set(correctTokens);

  for (let attempt = 0; attempt < 12; attempt++) {
    const candidateTokens = [...correctTokens];
    for (const idx of swapIdxs) {
      const replacements = wordBank.filter(w => !existingWords.has(w));
      if (replacements.length === 0) continue;
      candidateTokens[idx] = replacements[Math.floor(Math.random() * replacements.length)];
    }
    const candidate = candidateTokens.join(' ');
    if (candidate !== correctJoined && !usedResults.has(candidate)) {
      return candidate;
    }
  }
  return null;
}

// Builds a shuffled set of Choice Mode options: the correct sentence plus
// (count - 1) near-miss distractors — the same sentence with a couple of its
// Korean words swapped out, so the player has to actually read the sentence
// rather than pattern-match its overall shape against unrelated lines.
export function pickChoiceOptions(correctText, pool = [], count = 3) {
  const correctTokens = tokenize(correctText);
  const wordBank = buildWordBank([correctText, ...pool]);
  const usedResults = new Set([correctText]);
  const distractors = [];

  let guard = 0;
  while (distractors.length < count - 1 && guard < 30) {
    const candidate = makeNearMissDistractor(correctTokens, wordBank, usedResults);
    guard++;
    if (!candidate) break;
    distractors.push(candidate);
    usedResults.add(candidate);
  }

  guard = 0;
  while (distractors.length < count - 1 && guard < 10) {
    const synthetic = scrambleSentence(correctText);
    guard++;
    if (synthetic !== correctText && !usedResults.has(synthetic)) {
      distractors.push(synthetic);
      usedResults.add(synthetic);
    }
  }

  return shuffleArray([correctText, ...distractors]);
}

// Splits a line into tokens and identifies Hangul vs non-Hangul parts for Sing the Words mode
export function maskHangulTokens(text) {
  if (!text) return { tokens: [], hangulTarget: '', hasKorean: false };
  const rawWords = text.trim().split(/\s+/);
  const hangulWords = [];
  const tokens = [];

  rawWords.forEach((word, idx) => {
    const isKorean = containsKorean(word);
    if (isKorean) {
      hangulWords.push(word);
    }
    tokens.push({
      id: `${idx}-${word}`,
      text: word,
      isKorean
    });
  });

  return {
    tokens,
    hangulTarget: hangulWords.join(' '),
    hasKorean: hangulWords.length > 0
  };
}

// Splits Korean text into ordered Hangul-syllable "chunks" for Batchim
// Builder — spaces/punctuation/non-Hangul characters are dropped entirely,
// only individual 음절 (syllable) characters become catchable targets. Each
// chunk remembers whether a space followed it in the source text, so the
// caught-so-far preview can reinsert word breaks correctly.
export function buildSyllableChunks(text) {
  if (!text) return [];
  const chars = Array.from(text.trim());
  const chunks = [];
  chars.forEach((ch, i) => {
    if (/[가-힣]/.test(ch)) {
      chunks.push({
        id: `${chunks.length}-${ch}-${i}`,
        char: ch,
        order: chunks.length,
        spaceAfter: chars[i + 1] === ' '
      });
    }
  });
  return chunks;
}

// Calculate Hangul character match percentage between target line and detected speech (Korean only)
export function calculateHangulAccuracy(target, detected) {
  if (!target || !detected) return 0;
  const cleanTarget = target.replace(/[^\uAC00-\uD7A3]/g, '');
  const cleanDetected = detected.replace(/[^\uAC00-\uD7A3]/g, '');
  if (!cleanTarget || !cleanDetected) return 0;

  let matches = 0;
  const targetChars = cleanTarget.split('');
  const detectedChars = cleanDetected.split('');

  let tIdx = 0;
  for (const dChar of detectedChars) {
    const foundIdx = targetChars.indexOf(dChar, tIdx);
    if (foundIdx !== -1) {
      matches++;
      tIdx = foundIdx + 1;
    }
  }

  const score = Math.round((matches / Math.max(targetChars.length, 1)) * 100);
  return Math.min(100, score);
}
