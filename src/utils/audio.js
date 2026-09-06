// Web Audio API Synthesizer and Native Speech Synthesizer for Audio Feedback

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.speechSynth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Key press mechanical sound
  playKeyPress() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  // Correct key/word chime
  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.06); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.12); // G5

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Error buzz
  playError() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.setValueAtTime(110, now + 0.08);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  }

  // High streak combo chime
  playCombo(comboCount) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const baseFreq = 440 + Math.min(comboCount * 30, 400);
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.15);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  // Level Up / Victory fanfare
  playLevelUp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.2, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.25);
    });
  }

  // Unified multi-language speech synthesizer (Korean, Hokkien / Taiwanese, English)
  speak(text, lang = 'ko') {
    if (this.muted || !this.speechSynth || !text) return;
    try {
      this.speechSynth.cancel(); // Stop ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);

      const isHokkien = lang === 'nan' || lang === 'hokkien' || lang === 'taiwanese';
      const isKorean = lang === 'ko' || lang === 'korean' || lang === 'ko-KR';

      if (isKorean) {
        utterance.lang = 'ko-KR';
        utterance.rate = 0.9;
      } else if (isHokkien) {
        // Search available system voices for Taiwanese / Hokkien / Minnan or Traditional Chinese
        const voices = this.speechSynth.getVoices() || [];
        const hokkienVoice = voices.find(v =>
          (v.lang && (v.lang.includes('nan') || v.lang.includes('min'))) ||
          (v.name && v.name.toLowerCase().includes('taiwan'))
        ) || voices.find(v => v.lang === 'zh-TW');

        if (hokkienVoice) {
          utterance.voice = hokkienVoice;
          utterance.lang = hokkienVoice.lang;
        } else {
          utterance.lang = 'nan-TW';
        }
        utterance.rate = 0.85; // Slightly slower for clear tones
      } else {
        utterance.lang = lang;
        utterance.rate = 0.9;
      }

      this.speechSynth.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis not available:', e);
    }
  }

  // Speak Korean text using browser Web Speech API (legacy backwards compatible)
  speakKorean(text) {
    this.speak(text, 'ko');
  }

  // Speak Hokkien / Taiwanese text using browser Web Speech API
  speakHokkien(text) {
    this.speak(text, 'hokkien');
  }
}

export const sound = new SoundEngine();
