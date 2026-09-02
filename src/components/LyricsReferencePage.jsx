import React, { useState, useMemo } from 'react';
import {
  BookMarked,
  ExternalLink,
  Search,
  FileText,
  Clock,
  Sparkles,
  Copy,
  Check,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Info,
  Layers,
  Music2,
  Tv,
  ArrowRight,
  Code2,
  Wand2
} from 'lucide-react';
import { convertLrcToSrtString } from '../../tools/lrcConverter.js';
import { shiftSRT, secondsToTimeString } from '../../tools/srtEngine.js';

// Curated reference song presets demonstrating the different formats
const SAMPLE_SONGS = [
  {
    id: 'super_lady',
    title: 'Super Lady',
    artist: '(G)I-DLE ((여자)아이들)',
    year: '2024',
    album: '2',
    rentanadviserId: '4',
    klyricsSlug: 'g-i-dle-super-lady',
    youtubeId: 'VCDWg0ljbFQ',
    hasInGame: false,
    plainLyrics: [
      { ko: 'I am the top, super lady', rom: 'I am the top, super lady', en: 'I am the top, super lady' },
      { ko: 'I never lose yeah', rom: 'I never lose yeah', en: 'I never lose yeah' },
      { ko: "('Cause got a super power)", rom: "('Cause got a super power)", en: "('Cause got a super power)" },
      { ko: 'I am a god, super lady', rom: 'I am a god, super lady', en: 'I am a god, super lady' },
      { ko: 'I NEVER DIE 봤지?', rom: 'I NEVER DIE bwat-ji?', en: 'I NEVER DIE, saw that?' },
      { ko: '모두 Follow', rom: 'mo-du Follow', en: 'Everyone Follow' },
      { ko: 'Boy boy boy 거기 비켜 어서', rom: 'Boy boy boy geo-gi bi-kyeo eo-seo', en: 'Boy boy boy get out of the way quick' },
      { ko: '우린 Love love love 따위 하긴 바빠', rom: 'u-rin Love love love tta-wi ha-gin ba-ppa', en: "We're too busy to bother with love" }
    ],
    lrcRaw: `[00:05.46]I am the top, super lady
[00:08.26](Oh)
[00:09.46]I never lose yeah
[00:11.05]('Cause got a super power)
[00:13.20]I am a god, super lady
[00:16.07](Oh)
[00:17.26]I NEVER DIE 봤지?
[00:19.05]모두 Follow
[00:20.86]Boy boy boy
[00:21.65]거기 비켜 어서
[00:22.84]우린 Love love love 따위 하긴 바빠`,
    lrc1Raw: `[00:05.46]<00:05.46>I <00:05.80>am <00:06.10>the <00:06.40>top, <00:07.10>super <00:07.70>lady
[00:08.26]<00:08.26>(Oh)
[00:09.46]<00:09.46>I <00:09.80>never <00:10.20>lose <00:10.60>yeah
[00:11.05]<00:11.05>('Cause <00:11.40>got <00:11.80>a <00:12.10>super <00:12.60>power)
[00:13.20]<00:13.20>I <00:13.60>am <00:14.00>a <00:14.30>god, <00:14.90>super <00:15.50>lady
[00:16.07]<00:16.07>(Oh)
[00:17.26]<00:17.26>I <00:17.60>NEVER <00:18.00>DIE <00:18.40>봤지?
[00:19.05]<00:19.05>모두 <00:19.80>Follow`,
    karaokeSyllables: [
      { word: 'I', start: 5.46, end: 5.80 },
      { word: 'am', start: 5.80, end: 6.10 },
      { word: 'the', start: 6.10, end: 6.40 },
      { word: 'top,', start: 6.40, end: 7.10 },
      { word: 'super', start: 7.10, end: 7.70 },
      { word: 'lady', start: 7.70, end: 8.25 },
      { word: 'I', start: 9.46, end: 9.80 },
      { word: 'never', start: 9.80, end: 10.20 },
      { word: 'lose', start: 10.20, end: 10.60 },
      { word: 'yeah', start: 10.60, end: 11.00 },
      { word: 'I', start: 13.20, end: 13.60 },
      { word: 'am', start: 13.60, end: 14.00 },
      { word: 'a', start: 14.00, end: 14.30 },
      { word: 'god,', start: 14.30, end: 14.90 },
      { word: 'super', start: 14.90, end: 15.50 },
      { word: 'lady', start: 15.50, end: 16.05 },
      { word: 'I', start: 17.26, end: 17.60 },
      { word: 'NEVER', start: 17.60, end: 18.00 },
      { word: 'DIE', start: 18.00, end: 18.40 },
      { word: '봤지?', start: 18.40, end: 19.00 },
      { word: '모두', start: 19.05, end: 19.80 },
      { word: 'Follow', start: 19.80, end: 20.60 }
    ],
    srtRaw: `1
00:00:05,460 --> 00:00:08,260
I am the top, super lady
I am the top, super lady

2
00:00:09,460 --> 00:00:11,050
I never lose yeah
I never lose yeah

3
00:00:11,050 --> 00:00:13,200
('Cause got a super power)
('Cause got a super power)

4
00:00:13,200 --> 00:00:16,070
I am a god, super lady
I am a god, super lady

5
00:00:17,260 --> 00:00:19,050
I NEVER DIE 봤지?
I NEVER DIE, saw that?

6
00:00:19,050 --> 00:00:20,860
모두 Follow
Everyone Follow`,
    vttRaw: `WEBVTT

00:00:05.460 --> 00:00:08.260
I am the top, super lady

00:00:09.460 --> 00:00:11.050
I never lose yeah

00:00:11.050 --> 00:00:13.200
('Cause got a super power)

00:00:13.200 --> 00:00:16.070
I am a god, super lady

00:00:17.260 --> 00:00:19.050
I NEVER DIE 봤지?

00:00:19.050 --> 00:00:20.860
모두 Follow`
  },
  {
    id: 'babymonster_choom',
    title: 'CHOOM (춤)',
    artist: 'BABYMONSTER (베이비몬스터)',
    year: '2024',
    album: 'DRIP',
    rentanadviserId: '',
    klyricsSlug: 'babymonster-choom',
    youtubeId: 'x3eqqoZPV_E',
    hasInGame: true,
    plainLyrics: [
      { ko: '1, 2 heat is on', rom: '1, 2 heat is on', en: '1, 2 heat is on' },
      { ko: 'Own it, burn it, kick it, flip that', rom: 'Own it, burn it, kick it, flip that', en: 'Own it, burn it, kick it, flip that' },
      { ko: '3, 4 BABYMON', rom: '3, 4 BABYMON', en: '3, 4 BABYMON' },
      { ko: "We gon' get this party started", rom: "We gon' get this party started", en: "We gon' get this party started" },
      { ko: 'Oh my, oh my, my 지금 이 순간', rom: 'Oh my, oh my, my ji-geum i sun-gan', en: 'Oh my right now at this moment' },
      { ko: '리듬을 삼켜 보자 춤', rom: 'ri-deum-eul sam-kyeo bo-ja chum', en: "Let's swallow the rhythm, dance!" },
      { ko: '월, 화, 수, 목, 금, 토 모두 다 함께', rom: 'wol, hwa, su, mok, geum, to mo-du da ham-kke', en: 'Mon, Tue, Wed, Thu, Fri, Sat, all together' },
      { ko: '취해 보자 춤', rom: 'chwi-hae bo-ja chum', en: "Let's get drunk on the dance!" }
    ],
    lrcRaw: `[00:25.00]1, 2 heat is on
[00:30.00]Own it, burn it, kick it, flip that
[00:34.00]3, 4 BABYMON
[00:37.00]We gon' get this party started
[01:13.00]Oh my, oh my, my 지금 이 순간
[02:13.00]리듬을 삼켜 보자 춤
[02:23.00]월, 화, 수, 목, 금, 토 모두 다 함께 취해 보자 춤`,
    lrc1Raw: `[00:25.00]<00:25.00>1, <00:26.00>2 <00:27.00>heat <00:28.00>is <00:29.00>on
[00:30.00]<00:30.00>Own <00:30.80>it, <00:31.40>burn <00:32.00>it, <00:32.60>kick <00:33.20>it, <00:33.80>flip <00:34.20>that
[01:13.00]<01:13.00>Oh <01:13.60>my, <01:14.20>oh <01:14.80>my, <01:15.40>my <01:16.00>지금 <01:16.60>이 <01:17.00>순간
[02:13.00]<02:13.00>리듬을 <02:14.20>삼켜 <02:15.40>보자 <02:16.60>춤`,
    karaokeSyllables: [
      { word: '1,', start: 25.0, end: 26.0 },
      { word: '2', start: 26.0, end: 27.0 },
      { word: 'heat', start: 27.0, end: 28.0 },
      { word: 'is', start: 28.0, end: 29.0 },
      { word: 'on', start: 29.0, end: 30.0 },
      { word: 'Own', start: 30.0, end: 30.8 },
      { word: 'it,', start: 30.8, end: 31.4 },
      { word: 'burn', start: 31.4, end: 32.0 },
      { word: 'it,', start: 32.0, end: 32.6 },
      { word: 'kick', start: 32.6, end: 33.2 },
      { word: 'it,', start: 33.2, end: 33.8 },
      { word: 'flip', start: 33.8, end: 34.2 },
      { word: 'that', start: 34.2, end: 34.8 }
    ],
    srtRaw: `1
00:00:25,000 --> 00:00:30,000
1, 2 heat is on
1, 2 heat is on

2
00:00:30,000 --> 00:00:34,000
Own it, burn it, kick it, flip that
Own it, burn it, kick it, flip that

3
00:00:34,000 --> 00:00:37,000
3, 4 BABYMON
3, 4 BABYMON

4
00:00:37,000 --> 00:00:41,000
We gon' get this party started
We gon' get this party started`,
    vttRaw: `WEBVTT

00:00:25.000 --> 00:00:30.000
1, 2 heat is on

00:00:30.000 --> 00:00:34.000
Own it, burn it, kick it, flip that

00:00:34.000 --> 00:00:37.000
3, 4 BABYMON`
  },
  {
    id: 'seventeen_world',
    title: '_WORLD',
    artist: 'SEVENTEEN (세븐틴)',
    year: '2022',
    album: 'SECTOR 17',
    rentanadviserId: '',
    klyricsSlug: 'seventeen-_world',
    youtubeId: 'VCDWg0ljbFQ',
    hasInGame: false,
    plainLyrics: [
      { ko: 'Hey 아까부터 널 봤어', rom: 'Hey a-kka-bu-teo neol bwass-eo', en: "Hey I've been watching you for a while" },
      { ko: '우린 처음이지만 모든 재미를 느낄 수 있어', rom: 'u-rin cheo-eum-i-ji-man mo-deun jae-mi-reul neu-kkil su iss-eo', en: "It's our first time, but we can feel all the fun" },
      { ko: '더 알고 싶어', rom: 'deo al-go sip-eo', en: 'I want to know more' },
      { ko: 'Hey 웃지만 말고 말이야', rom: 'Hey us-ji-man mal-go mal-i-ya', en: "Hey don't just laugh, you know" },
      { ko: '가본 적이 없는 곳에 너를 데려가 줄게', rom: 'ga-bon jeok-i eop-neun gos-e neo-reul de-ryeo-ga jul-ge', en: "I'll take you to a place you've never been" },
      { ko: 'Come with me, put it on put it on me', rom: 'Come with me, put it on put it on me', en: 'Come with me, put it on put it on me' },
      { ko: '결국 내 손을 잡을 거야', rom: 'gyeol-guk nae son-eul jap-eul geo-ya', en: "In the end you'll hold my hand" }
    ],
    lrcRaw: `[00:10.50]Hey 아까부터 널 봤어
[00:13.20]우린 처음이지만 모든 재미를 느낄 수 있어
[00:16.80]더 알고 싶어
[00:18.40]Hey 웃지만 말고 말이야
[00:21.10]가본 적이 없는 곳에 너를 데려가 줄게
[00:25.00]Come with me, put it on put it on me
[00:28.50]결국 내 손을 잡을 거야`,
    lrc1Raw: `[00:10.50]<00:10.50>Hey <00:11.20>아까부터 <00:12.10>널 <00:12.70>봤어
[00:13.20]<00:13.20>우린 <00:13.80>처음이지만 <00:14.80>모든 <00:15.50>재미를 <00:16.10>느낄 <00:16.50>수 <00:16.70>있어
[00:16.80]<00:16.80>더 <00:17.30>알고 <00:17.90>싶어
[00:18.40]<00:18.40>Hey <00:19.00>웃지만 <00:19.80>말고 <00:20.40>말이야`,
    karaokeSyllables: [
      { word: 'Hey', start: 10.50, end: 11.20 },
      { word: '아까부터', start: 11.20, end: 12.10 },
      { word: '널', start: 12.10, end: 12.70 },
      { word: '봤어', start: 12.70, end: 13.20 },
      { word: '우린', start: 13.20, end: 13.80 },
      { word: '처음이지만', start: 13.80, end: 14.80 },
      { word: '모든', start: 14.80, end: 15.50 },
      { word: '재미를', start: 15.50, end: 16.10 },
      { word: '느낄', start: 16.10, end: 16.50 },
      { word: '수', start: 16.50, end: 16.70 },
      { word: '있어', start: 16.70, end: 17.20 }
    ],
    srtRaw: `1
00:00:10,500 --> 00:00:13,200
Hey 아까부터 널 봤어
Hey I've been watching you for a while

2
00:00:13,200 --> 00:00:16,800
우린 처음이지만 모든 재미를 느낄 수 있어
It's our first time, but we can feel all the fun

3
00:00:16,800 --> 00:00:18,400
더 알고 싶어
I want to know more`,
    vttRaw: `WEBVTT

00:00:10.500 --> 00:00:13.200
Hey 아까부터 널 봤어

00:00:13.200 --> 00:00:16.800
우린 처음이지만 모든 재미를 느낄 수 있어`
  }
];

// Popular K-Pop artist shortcuts for 1-click external navigation
const POPULAR_ARTISTS = [
  { name: 'BABYMONSTER', hangul: '베이비몬스터' },
  { name: 'ILLIT', hangul: '아일릿' },
  { name: '(G)I-DLE', hangul: '여자아이들' },
  { name: 'aespa', hangul: '에스파' },
  { name: 'NewJeans', hangul: '뉴진스' },
  { name: 'IVE', hangul: '아이브' },
  { name: 'LE SSERAFIM', hangul: '르세라핌' },
  { name: 'SEVENTEEN', hangul: '세븐틴' },
  { name: 'BTS', hangul: '방탄소년단' },
  { name: 'Stray Kids', hangul: '스트레이 키즈' },
  { name: 'TWICE', hangul: '트와이스' },
  { name: 'BLACKPINK', hangul: '블랙핑크' }
];

const ALPHABET_LIST = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];

export default function LyricsReferencePage({ onSelectSongForPractice, onSwitchToAdmin }) {
  // Search & Navigation State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Showcase Preset & Format State
  const [selectedSongId, setSelectedSongId] = useState('super_lady');
  const [activeFormatTab, setActiveFormatTab] = useState('plain'); // 'plain', 'lrc', 'lrc1', 'srt', 'vtt'
  const [copiedFormat, setCopiedFormat] = useState(false);

  // Karaoke Simulator State
  const [simulatedTime, setSimulatedTime] = useState(5.46);
  const [isSimulating, setIsSimulating] = useState(false);

  // Sandbox & Utility State
  const [sandboxInput, setSandboxInput] = useState('');
  const [sandboxOffset, setSandboxOffset] = useState('0');
  const [sandboxOutput, setSandboxOutput] = useState('');
  const [sandboxCopied, setSandboxCopied] = useState(false);
  const [sandboxAction, setSandboxAction] = useState(null);

  const currentSong = useMemo(() => {
    return SAMPLE_SONGS.find(s => s.id === selectedSongId) || SAMPLE_SONGS[0];
  }, [selectedSongId]);

  // Handle Karaoke Simulator Timer
  React.useEffect(() => {
    let interval;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimulatedTime(prev => {
          const next = prev + 0.1;
          if (next > 22.0) {
            setIsSimulating(false);
            return 5.46;
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  // Copy code helper
  const handleCopy = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedFormat(true);
    setTimeout(() => setCopiedFormat(false), 2000);
  };

  // Get active format text
  const currentFormatCode = useMemo(() => {
    switch (activeFormatTab) {
      case 'lrc':
        return currentSong.lrcRaw;
      case 'lrc1':
        return currentSong.lrc1Raw;
      case 'srt':
        return currentSong.srtRaw;
      case 'vtt':
        return currentSong.vttRaw;
      default:
        return currentSong.plainLyrics
          .map(l => `${l.ko}\n${l.rom}\n${l.en}\n`)
          .join('\n');
    }
  }, [activeFormatTab, currentSong]);

  // Sandbox Live Stats
  const sandboxStats = useMemo(() => {
    if (!sandboxInput.trim()) return null;
    const isLrc = /\[\d{2}:\d{2}/.test(sandboxInput);
    const isSrt = /\d+\s*\n\d{2}:\d{2}:\d{2}[,.]\d{3}\s*-->/.test(sandboxInput);
    const isLrc1 = isLrc && /<\d{2}:\d{2}/.test(sandboxInput);
    const hangulMatches = sandboxInput.match(/[가-힣]/g) || [];
    const totalChars = sandboxInput.replace(/\s+/g, '').length;
    const hangulRatio = totalChars > 0 ? Math.round((hangulMatches.length / totalChars) * 100) : 0;
    const lineCount = sandboxInput.trim().split('\n').length;

    let formatName = 'Plain Text';
    if (isLrc1) formatName = 'LRC1 (Enhanced Syllable LRC)';
    else if (isLrc) formatName = 'LRC (Standard Line Timed)';
    else if (isSrt) formatName = 'SRT (SubRip Standard)';

    return {
      formatName,
      lineCount,
      hangulRatio,
      isLrc,
      isSrt,
      isLrc1
    };
  }, [sandboxInput]);

  // Sandbox Conversion Handlers
  const handleConvertLrcToSrt = () => {
    try {
      const srt = convertLrcToSrtString(sandboxInput);
      setSandboxOutput(srt);
      setSandboxAction('Converted LRC ➔ SRT successfully!');
    } catch (err) {
      setSandboxAction(`Conversion error: ${err.message}`);
    }
  };

  const handleShiftSandbox = () => {
    try {
      const offset = parseFloat(sandboxOffset);
      if (isNaN(offset)) throw new Error('Invalid offset seconds');
      const shifted = shiftSRT(sandboxInput, offset);
      setSandboxOutput(shifted);
      setSandboxAction(`Shifted timestamps by ${offset > 0 ? `+${offset}` : offset}s!`);
    } catch (err) {
      setSandboxAction(`Shift error: ${err.message}`);
    }
  };

  const handleCopySandbox = () => {
    if (!sandboxOutput) return;
    navigator.clipboard.writeText(sandboxOutput);
    setSandboxCopied(true);
    setTimeout(() => setSandboxCopied(false), 2000);
  };

  // Build external URLs
  const getKlyricsSearchUrl = (query) => {
    if (!query) return 'https://k-lyrics.com/songs';
    return `https://k-lyrics.com/songs?q=${encodeURIComponent(query)}`;
  };

  const getRentAnAdviserSearchUrl = (query) => {
    if (!query) return 'https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx';
    return `https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx?artist=${encodeURIComponent(query)}`;
  };

  return (
    <div className="lyrics-ref-container">
      {/* 1. Hero Header Banner */}
      <section className="lyrics-ref-hero">
        <div className="hero-badge">
          <BookMarked size={16} />
          <span>K-Pop Lyrics & Subtitle Reference Hub</span>
        </div>
        <h1 className="hero-title">
          Learn Lyrics, Master Romanization & <span className="gradient-text">Subtitle Formats</span>
        </h1>
        <p className="hero-description">
          A dedicated educational reference connecting Hangul learners, singers, and typists with the best lyrics databases.
          Compare static phonetics with time-synchronized subtitles (LRC, LRC1, SRT, VTT) and practice typing directly in game.
        </p>

        <div className="hero-stats-row">
          <div className="hero-stat-pill">
            <span className="stat-num">3,900+</span>
            <span className="stat-label">Songs on K-Lyrics (Hangul + Romanization)</span>
          </div>
          <div className="hero-stat-pill">
            <span className="stat-num">56,000+</span>
            <span className="stat-label">Synced Subtitles on RentAnAdviser</span>
          </div>
          <div className="hero-stat-pill">
            <span className="stat-num">4 Formats</span>
            <span className="stat-label">LRC, LRC1, SRT & VTT Supported</span>
          </div>
        </div>
      </section>

      {/* 2. Source Comparison Cards */}
      <section className="sources-comparison-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Authoritative Lyrics & Subtitle Sources</h2>
            <p className="section-subtitle">
              Understanding the fundamental difference between static pronunciation databases and synchronized subtitle archives
            </p>
          </div>
        </div>

        <div className="source-cards-grid">
          {/* Card 1: k-lyrics.com */}
          <div className="source-card source-klyrics">
            <div className="source-card-top">
              <div className="source-badge klyrics-badge">
                <Music2 size={16} />
                <span>k-lyrics.com</span>
              </div>
              <span className="source-tag">Phonetic Romanization & Reading</span>
            </div>

            <h3 className="source-title">K-Lyrics (A-Z Song Catalog)</h3>
            <p className="source-desc">
              Extensive directory of over 3,900+ K-Pop songs categorized alphabetically. Provides full original Korean Hangul
              paired line-by-line with English phonetic romanization and official YouTube MV embeds.
            </p>

            <div className="source-feature-list">
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-pink" />
                <span>Line-by-line Hangul & Romanization reading guide</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-pink" />
                <span>Album art, release year, artist catalog & MV embeds</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-pink" />
                <span>Alphabetical A-Z filtering for easy song discovery</span>
              </div>
            </div>

            <div className="source-caution-box caution-klyrics">
              <AlertTriangle size={18} className="caution-icon" />
              <div>
                <strong>No Timecodes (No LRC / LRC1 / SRT)</strong>
                <p>
                  K-Lyrics does <em>not</em> contain timecoded subtitle files. It is designed for reading comprehension, pronunciation study,
                  and singing along, rather than automated video syncing.
                </p>
              </div>
            </div>

            <div className="source-card-actions">
              <a
                href="https://k-lyrics.com/songs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-source-primary btn-klyrics"
              >
                <span>Browse All Songs on K-Lyrics</span>
                <ExternalLink size={16} />
              </a>
              <button
                className="btn-source-outline"
                onClick={() => setSearchQuery('aespa')}
              >
                Try Search Example
              </button>
            </div>
          </div>

          {/* Card 2: RentAnAdviser.com */}
          <div className="source-card source-rentanadviser">
            <div className="source-card-top">
              <div className="source-badge rentanadviser-badge">
                <Clock size={16} />
                <span>rentanadviser.com</span>
              </div>
              <span className="source-tag">Time-Synchronized Subtitles</span>
            </div>

            <h3 className="source-title">RentAnAdviser (Subtitles for Songs)</h3>
            <p className="source-desc">
              The premier global archive hosting over 56,000+ synchronized lyrics and subtitles for music videos.
              Offers multiple timecode standards including famous LRC, enhanced syllable LRC1, SRT, and VTT formats.
            </p>

            <div className="source-feature-list">
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Standard LRC & Enhanced Syllable-timed LRC1</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Millisecond-accurate SubRip SRT and WebVTT tracks</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>Dedicated Korean Hangul subtitle entries (<code className="tag-code">-ko</code>)</span>
              </div>
            </div>

            <div className="source-caution-box caution-rentanadviser">
              <Info size={18} className="caution-icon" />
              <div>
                <strong>Timing Note: MV Intro Delay Offsets</strong>
                <p>
                  Subtitles often start from studio audio timing (00:00:00). When syncing with YouTube MVs that contain visual intro skits,
                  apply an intro offset using our built-in utility or Admin tool.
                </p>
              </div>
            </div>

            <div className="source-card-actions">
              <a
                href="https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-source-primary btn-rentanadviser"
              >
                <span>Explore RentAnAdviser Subtitles</span>
                <ExternalLink size={16} />
              </a>
              <button
                className="btn-source-outline"
                onClick={() => onSwitchToAdmin && onSwitchToAdmin()}
                title="Go to local sync tool"
              >
                Open App Sync Tool
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Universal Search & Quick Artist Launchpad */}
      <section className="search-launchpad-section">
        <div className="launchpad-header">
          <div className="launchpad-icon-wrap">
            <Search size={22} className="text-purple" />
          </div>
          <div>
            <h2 className="section-title">Universal Lyrics Search Launchpad</h2>
            <p className="section-subtitle">
              Type any artist or song name to instantly search across both K-Lyrics and RentAnAdviser
            </p>
          </div>
        </div>

        <div className="search-input-wrapper">
          <div className="search-input-box">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search by song name or artist (e.g., BABYMONSTER, ILLIT, Super Lady, aespa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-text-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                ✕
              </button>
            )}
          </div>

          <div className="search-action-buttons">
            <a
              href={getKlyricsSearchUrl(searchQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-search-action btn-klyrics-search"
            >
              <Music2 size={16} />
              <span>Search on K-Lyrics</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={getRentAnAdviserSearchUrl(searchQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-search-action btn-rentanadviser-search"
            >
              <Clock size={16} />
              <span>Search on RentAnAdviser</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Popular Artist Shortcuts */}
        <div className="popular-artists-container">
          <span className="artists-label">Trending Artists:</span>
          <div className="artist-pills-wrap">
            {POPULAR_ARTISTS.map((artist) => (
              <button
                key={artist.name}
                className={`artist-pill ${searchQuery.toLowerCase() === artist.name.toLowerCase() ? 'active' : ''}`}
                onClick={() => setSearchQuery(artist.name)}
              >
                <span>{artist.name}</span>
                <span className="artist-hangul">{artist.hangul}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Alphabet Directory Bar */}
        <div className="alphabet-bar-container">
          <span className="alphabet-label">A-Z Directories:</span>
          <div className="alphabet-pills-row">
            {ALPHABET_LIST.map((char) => (
              <a
                key={char}
                href={`https://www.rentanadviser.com/subtitles/subtitlesforsongs.aspx?artists=${char === '#' ? 'numeric' : char}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`alphabet-link ${selectedLetter === char ? 'active' : ''}`}
                onClick={() => setSelectedLetter(char)}
                title={`RentAnAdviser artists starting with ${char}`}
              >
                {char}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Subtitle Formats Comparison Matrix */}
      <section className="format-matrix-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">K-Pop Subtitle & Lyrics Formats Compared</h2>
            <p className="section-subtitle">
              Detailed technical breakdown of the 5 main formats used across lyrics databases and media players
            </p>
          </div>
        </div>

        <div className="matrix-table-container">
          <table className="format-matrix-table">
            <thead>
              <tr>
                <th>Format</th>
                <th>Syntax Example</th>
                <th>Time Precision</th>
                <th>Granularity</th>
                <th>Primary Use Case</th>
                <th>App Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="format-badge-cell">
                    <span className="badge-format badge-plain">Plain + Romanization</span>
                    <span className="badge-source">k-lyrics.com</span>
                  </div>
                </td>
                <td>
                  <code className="code-snippet">
                    Hey 아까부터 널 봤어<br />
                    Hey a-kka-bu-teo neol bwass-eo
                  </code>
                </td>
                <td>None (Static)</td>
                <td>Sentence / Line</td>
                <td>Pronunciation learning, vocabulary study & vocal sing-along</td>
                <td>
                  <span className="status-tag status-green">
                    <Check size={14} /> Auto-align in Admin
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="format-badge-cell">
                    <span className="badge-format badge-lrc">LRC</span>
                    <span className="badge-source">RentAnAdviser</span>
                  </div>
                </td>
                <td>
                  <code className="code-snippet">[00:05.46] I am the top, super lady</code>
                </td>
                <td>Centiseconds (0.01s)</td>
                <td>Line-by-line</td>
                <td>Audio players (Spotify, Foobar2000, VLC) scrolling lyrics</td>
                <td>
                  <span className="status-tag status-green">
                    <Check size={14} /> Built-in 1-Click Convert
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="format-badge-cell">
                    <span className="badge-format badge-lrc1">LRC1 (Enhanced)</span>
                    <span className="badge-source">RentAnAdviser</span>
                  </div>
                </td>
                <td>
                  <code className="code-snippet">
                    [00:05.46] &lt;00:05.46&gt;I &lt;00:05.80&gt;am &lt;00:06.10&gt;the &lt;00:06.40&gt;top
                  </code>
                </td>
                <td>Centiseconds (0.01s)</td>
                <td>Word / Syllable</td>
                <td>Karaoke machines & lyric videos with word-level highlight sweeps</td>
                <td>
                  <span className="status-tag status-cyan">
                    <Sparkles size={14} /> Interactive Preview
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="format-badge-cell">
                    <span className="badge-format badge-srt">SRT (SubRip)</span>
                    <span className="badge-source">RentAnAdviser & App</span>
                  </div>
                </td>
                <td>
                  <code className="code-snippet">
                    1<br />
                    00:00:05,460 --&gt; 00:00:08,260<br />
                    I am the top, super lady
                  </code>
                </td>
                <td>Milliseconds (0.001s)</td>
                <td>Timed Subtitle Block</td>
                <td>YouTube, Netflix, video players & Hangul PopPop game engine</td>
                <td>
                  <span className="status-tag status-gold">
                    <CheckCircle2 size={14} /> Primary Game Format
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="format-badge-cell">
                    <span className="badge-format badge-vtt">VTT (WebVTT)</span>
                    <span className="badge-source">RentAnAdviser</span>
                  </div>
                </td>
                <td>
                  <code className="code-snippet">
                    WEBVTT<br /><br />
                    00:00:05.460 --&gt; 00:00:08.260<br />
                    I am the top, super lady
                  </code>
                </td>
                <td>Milliseconds (0.001s)</td>
                <td>Timed Cue Block</td>
                <td>Modern HTML5 &lt;video&gt; & &lt;track&gt; elements on the web</td>
                <td>
                  <span className="status-tag status-green">
                    <Check size={14} /> Compatible
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Live Multi-Format Interactive Showcase & Karaoke Simulator */}
      <section className="interactive-showcase-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Interactive Multi-Format Song Showcase</h2>
            <p className="section-subtitle">
              Inspect how the exact same K-Pop track is formatted across Plain Text, LRC, LRC1, SRT, and VTT
            </p>
          </div>

          <div className="song-preset-selector">
            <span className="selector-label">Select Track:</span>
            <div className="preset-tabs">
              {SAMPLE_SONGS.map((song) => (
                <button
                  key={song.id}
                  className={`preset-tab-btn ${selectedSongId === song.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedSongId(song.id);
                    setSimulatedTime(song.karaokeSyllables[0]?.start || 0);
                    setIsSimulating(false);
                  }}
                >
                  <span>{song.title}</span>
                  <span className="preset-artist-small">{song.artist.split('(')[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="showcase-card">
          {/* Song Overview Header */}
          <div className="showcase-track-header">
            <div className="track-info">
              <h3 className="track-title">{currentSong.title}</h3>
              <p className="track-meta">
                <span className="track-artist">{currentSong.artist}</span>
                <span className="meta-dot">•</span>
                <span className="track-album">Album: {currentSong.album}</span>
                <span className="meta-dot">•</span>
                <span className="track-year">{currentSong.year}</span>
              </p>
            </div>

            <div className="track-links">
              {currentSong.rentanadviserId && (
                <a
                  href={`https://www.rentanadviser.com/subtitles/getsubtitles.aspx?id=${currentSong.rentanadviserId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-track-external"
                  title="View on RentAnAdviser"
                >
                  <Clock size={14} />
                  <span>RentAnAdviser Subtitle #{currentSong.rentanadviserId}</span>
                  <ExternalLink size={12} />
                </a>
              )}

              <a
                href={`https://k-lyrics.com/songs/${currentSong.klyricsSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-track-external"
                title="View on K-Lyrics"
              >
                <Music2 size={14} />
                <span>K-Lyrics Page</span>
                <ExternalLink size={12} />
              </a>

              {currentSong.hasInGame && (
                <button
                  onClick={() => onSelectSongForPractice && onSelectSongForPractice(currentSong.youtubeId)}
                  className="btn-track-practice"
                >
                  <Play size={14} />
                  <span>Play In-Game Practice</span>
                </button>
              )}
            </div>
          </div>

          {/* Format Tabs Bar */}
          <div className="format-tabs-bar">
            <div className="tabs-left">
              <button
                className={`format-tab-btn ${activeFormatTab === 'plain' ? 'active' : ''}`}
                onClick={() => setActiveFormatTab('plain')}
              >
                <FileText size={16} />
                <span>Plain + Romanization</span>
                <span className="tab-pill">k-lyrics</span>
              </button>

              <button
                className={`format-tab-btn ${activeFormatTab === 'lrc' ? 'active' : ''}`}
                onClick={() => setActiveFormatTab('lrc')}
              >
                <Clock size={16} />
                <span>LRC (Line-Timed)</span>
                <span className="tab-pill">RentAnAdviser</span>
              </button>

              <button
                className={`format-tab-btn ${activeFormatTab === 'lrc1' ? 'active' : ''}`}
                onClick={() => setActiveFormatTab('lrc1')}
              >
                <Sparkles size={16} />
                <span>LRC1 (Karaoke Syllables)</span>
                <span className="tab-pill">RentAnAdviser</span>
              </button>

              <button
                className={`format-tab-btn ${activeFormatTab === 'srt' ? 'active' : ''}`}
                onClick={() => setActiveFormatTab('srt')}
              >
                <Code2 size={16} />
                <span>SRT (SubRip)</span>
                <span className="tab-pill">App Native</span>
              </button>

              <button
                className={`format-tab-btn ${activeFormatTab === 'vtt' ? 'active' : ''}`}
                onClick={() => setActiveFormatTab('vtt')}
              >
                <Layers size={16} />
                <span>VTT (WebVTT)</span>
              </button>
            </div>

            <button className="btn-copy-format" onClick={() => handleCopy(currentFormatCode)}>
              {copiedFormat ? (
                <>
                  <Check size={16} className="text-green" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Format</span>
                </>
              )}
            </button>
          </div>

          {/* Format Body Preview */}
          <div className="format-preview-body">
            {activeFormatTab === 'plain' && (
              <div className="plain-lyrics-preview">
                <div className="preview-guide-banner">
                  <Info size={16} />
                  <span>
                    <strong>k-lyrics.com format:</strong> Designed for reading practice. Korean Hangul is displayed with phonetic
                    pronunciation below each syllable, showing batchim liaison and rhythm.
                  </span>
                </div>

                <div className="lyrics-lines-list">
                  {currentSong.plainLyrics.map((line, idx) => (
                    <div key={idx} className="lyrics-study-card">
                      <div className="study-line-ko">{line.ko}</div>
                      <div className="study-line-rom">{line.rom}</div>
                      <div className="study-line-en">{line.en}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeFormatTab === 'lrc1' && (
              <div className="lrc1-karaoke-wrapper">
                {/* Karaoke Interactive Player Simulator */}
                <div className="karaoke-simulator-box">
                  <div className="simulator-header">
                    <div className="sim-title-group">
                      <Sparkles size={18} className="text-cyan" />
                      <h4>Live LRC1 Word-by-Word Karaoke Simulation</h4>
                    </div>
                    <div className="sim-time-display">
                      <span>Time: {secondsToTimeString(simulatedTime).slice(3)}</span>
                    </div>
                  </div>

                  <div className="karaoke-display-stage">
                    <div className="karaoke-words-container">
                      {currentSong.karaokeSyllables.map((item, idx) => {
                        const isPast = simulatedTime >= item.end;
                        const isCurrent = simulatedTime >= item.start && simulatedTime < item.end;
                        return (
                          <span
                            key={idx}
                            className={`karaoke-word ${isCurrent ? 'highlight-active' : isPast ? 'highlight-passed' : 'highlight-upcoming'}`}
                          >
                            {item.word}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="simulator-controls">
                    <button
                      className="btn-sim-play"
                      onClick={() => setIsSimulating(!isSimulating)}
                    >
                      {isSimulating ? <Pause size={16} /> : <Play size={16} />}
                      <span>{isSimulating ? 'Pause Simulator' : 'Play Karaoke Simulator'}</span>
                    </button>

                    <button
                      className="btn-sim-reset"
                      onClick={() => {
                        setIsSimulating(false);
                        setSimulatedTime(currentSong.karaokeSyllables[0]?.start || 0);
                      }}
                    >
                      <RotateCcw size={16} />
                      <span>Reset</span>
                    </button>

                    <div className="slider-wrapper">
                      <input
                        type="range"
                        min={currentSong.karaokeSyllables[0]?.start || 0}
                        max={currentSong.karaokeSyllables[currentSong.karaokeSyllables.length - 1]?.end || 30}
                        step="0.05"
                        value={simulatedTime}
                        onChange={(e) => {
                          setSimulatedTime(parseFloat(e.target.value));
                          setIsSimulating(false);
                        }}
                        className="karaoke-time-slider"
                      />
                    </div>
                  </div>
                </div>

                {/* Raw LRC1 Code */}
                <div className="raw-code-box">
                  <div className="raw-code-label">Raw LRC1 Syllable Timestamp Data (RentAnAdviser):</div>
                  <pre className="code-content">{currentSong.lrc1Raw}</pre>
                </div>
              </div>
            )}

            {activeFormatTab !== 'plain' && activeFormatTab !== 'lrc1' && (
              <div className="raw-code-box">
                <div className="raw-code-label">
                  Raw {activeFormatTab.toUpperCase()} Subtitle Data ({activeFormatTab === 'srt' ? 'Used in App' : 'Standard Web/Media Format'}):
                </div>
                <pre className="code-content">{currentFormatCode}</pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Step-by-Step Learning SOP Roadmap */}
      <section className="learning-sop-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">How to Learn K-Pop Lyrics Step-by-Step</h2>
            <p className="section-subtitle">
              A 3-step master workflow combining pronunciation reading with millisecond synchronized typing
            </p>
          </div>
        </div>

        <div className="sop-cards-grid">
          <div className="sop-card">
            <div className="sop-step-number">1</div>
            <div className="sop-card-header">
              <Music2 size={20} className="text-pink" />
              <h3>Pronunciation & Romanization</h3>
              <span className="sop-platform-tag">k-lyrics.com</span>
            </div>
            <p className="sop-description">
              Start on <strong>k-lyrics.com</strong> to study the phonetic romanization of tricky Korean syllable blocks:
            </p>
            <ul className="sop-checklist">
              <li>Read batchim (받침) final consonants and their pronunciation changes</li>
              <li>Practice liaison sound shifts between adjacent syllables</li>
              <li>Understand the English translation and meaning of the poetic verse</li>
            </ul>
          </div>

          <div className="sop-card">
            <div className="sop-step-number">2</div>
            <div className="sop-card-header">
              <Clock size={20} className="text-cyan" />
              <h3>Fetch Synced Subtitle (LRC/SRT)</h3>
              <span className="sop-platform-tag">rentanadviser.com</span>
            </div>
            <p className="sop-description">
              Find the authentic millisecond timestamps on <strong>RentAnAdviser</strong>:
            </p>
            <ul className="sop-checklist">
              <li>Search the song and select the Korean entry (<code className="tag-code">-ko</code>)</li>
              <li>Complete the numeric verification code challenge to reveal full unclipped text</li>
              <li>Download or copy the raw LRC or SRT subtitle content</li>
            </ul>
          </div>

          <div className="sop-card highlight-sop">
            <div className="sop-step-number">3</div>
            <div className="sop-card-header">
              <Tv size={20} className="text-gold" />
              <h3>Calibrate Intro & Practice Typing</h3>
              <span className="sop-platform-tag">Hangul PopPop App</span>
            </div>
            <p className="sop-description">
              Import the subtitle into Hangul PopPop to sing and type along with the music video:
            </p>
            <ul className="sop-checklist">
              <li>Check if the YouTube MV has an intro skit (e.g. 4.5s intro delay)</li>
              <li>Apply <code className="tag-code">+Offset</code> so lyrics match vocal delivery</li>
              <li>Switch to K-Pop Practice or Game Mode to type Hangul in real-time!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Quick Subtitle Utility & Format Converter Sandbox */}
      <section className="sandbox-utility-section">
        <div className="launchpad-header">
          <div className="launchpad-icon-wrap">
            <Wand2 size={22} className="text-pink" />
          </div>
          <div>
            <h2 className="section-title">In-Browser Subtitle Converter & Inspector</h2>
            <p className="section-subtitle">
              Paste raw lyrics or subtitles from any source to analyze format, convert LRC ➔ SRT, and adjust intro offsets
            </p>
          </div>
        </div>

        <div className="sandbox-grid">
          {/* Left: Input Textarea */}
          <div className="sandbox-panel">
            <div className="panel-header">
              <span className="panel-title">Input: Paste LRC, SRT, or Lyrics</span>
              {sandboxStats && (
                <span className="format-detected-tag">
                  Detected: <strong>{sandboxStats.formatName}</strong>
                </span>
              )}
            </div>

            <textarea
              className="sandbox-textarea"
              placeholder={`Paste any LRC or SRT from RentAnAdviser here...\n\nExample LRC:\n[00:05.46] I am the top, super lady\n[00:09.46] I never lose yeah`}
              value={sandboxInput}
              onChange={(e) => setSandboxInput(e.target.value)}
              rows={10}
            />

            {sandboxStats && (
              <div className="sandbox-stats-bar">
                <div className="stat-item">
                  <span className="stat-label">Lines:</span>
                  <span className="stat-val">{sandboxStats.lineCount}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Hangul Content:</span>
                  <span className="stat-val">{sandboxStats.hangulRatio}%</span>
                </div>
              </div>
            )}

            <div className="sandbox-actions-toolbar">
              <button
                className="btn-utility-primary"
                onClick={handleConvertLrcToSrt}
                disabled={!sandboxInput.trim()}
              >
                <Wand2 size={16} />
                <span>Convert LRC ➔ SRT</span>
              </button>

              <div className="offset-control-group">
                <span className="offset-label">Shift (sec):</span>
                <input
                  type="number"
                  step="0.5"
                  className="offset-input"
                  value={sandboxOffset}
                  onChange={(e) => setSandboxOffset(e.target.value)}
                  placeholder="0.0"
                />
                <button
                  className="btn-utility-secondary"
                  onClick={handleShiftSandbox}
                  disabled={!sandboxInput.trim() || sandboxOffset === '0'}
                >
                  Apply Offset
                </button>
              </div>
            </div>
          </div>

          {/* Right: Output Textarea */}
          <div className="sandbox-panel">
            <div className="panel-header">
              <span className="panel-title">Output Result</span>
              {sandboxAction && (
                <span className="action-feedback-tag">
                  <CheckCircle2 size={14} />
                  <span>{sandboxAction}</span>
                </span>
              )}
            </div>

            <textarea
              className="sandbox-textarea"
              readOnly
              placeholder="Conversion and shifted result will appear here..."
              value={sandboxOutput}
              rows={10}
            />

            <div className="sandbox-output-footer">
              <button
                className="btn-copy-result"
                onClick={handleCopySandbox}
                disabled={!sandboxOutput}
              >
                {sandboxCopied ? (
                  <>
                    <Check size={16} className="text-green" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Output to Clipboard</span>
                  </>
                )}
              </button>

              {onSwitchToAdmin && (
                <button
                  className="btn-to-admin"
                  onClick={() => onSwitchToAdmin()}
                >
                  <span>Open Admin Sync Tool</span>
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
