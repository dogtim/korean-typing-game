# 🇰🇷 Hangul Type Quest (한글 타자 퀘스트)

An interactive, gamified Korean learning and typing web application. Master Korean (Hangul) step-by-step from fundamental consonants to full sentences, sing along to your favorite K-Pop music videos with synchronized bilingual lyrics, and challenge your skills in real-time mini-games!

![Language](https://img.shields.io/badge/Language-Korean%20%2F%20Hangul-8b5cf6?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)

---

## ✨ Features Overview

### 1. ⌨️ Core Hangul Lessons & Typing Engine
- **100% QWERTY-to-Hangul Conversion**: Practice Korean typing on any standard QWERTY keyboard without altering your OS language settings. Keystrokes (e.g. `g k s f m f`) automatically compose into Korean syllables (`한글`).
- **Interactive Dubeolsik (두벌식) Keyboard**: Real-time visual keyboard with finger-placement guidance, color-coded finger zones (pinky, ring, middle, index), and active key feedback.
- **Native Audio & Speech Pronunciation**: Hear native Korean audio powered by Web Speech API for individual letters, syllables, and vocabulary words.
- **Progressive 6-Stage Curriculum**:
  1. **Basic Consonants**: `ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ`
  2. **Basic Vowels**: `ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ`
  3. **2-Letter Syllables**: `가, 나, 다, 라, 마, 바, 사, 아...`
  4. **Syllables with Batchim**: `강, 눈, 달, 맘, 법, 산, 방, 집, 밥, 꽃...`
  5. **Everyday Vocabulary**: `한국, 한글, 안녕, 사랑, 감사, 학교, 친구, 치킨...`
  6. **Conversational Phrases**: `안녕하세요, 감사합니다, 반갑습니다, 괜찮아요...`
- **Gamification & Rewards**: Earn XP, level up, maintain streaks, and unlock achievement badges.

---

### 2. 🎬 K-Pop Video Practice Mode
- **Synchronized YouTube Music Videos**: Learn Korean naturally with synced official YouTube tracks from BABYMONSTER, ILLIT, and more.
- **Bilingual Synchronized Subtitles**: Simultaneous display of Hangul lyrics, Romanization guide, and English translations.
- **Active Lyric Auto-Scroll**: Follow along in real-time as lyrics smoothly auto-scroll and highlight with video playback.
- **Line Loop Practice**: Click any sentence to loop difficult lines continuously until mastered.
- **Customizable Display**: Toggle Romanization and English translations on or off to tailor your practice difficulty.
- **Playback Speed Controls**: Adjust playback speed (0.75x, 1.0x, 1.25x) to match your learning pace.

---

### 3. 🎮 Interactive K-Pop Game Modes
Challenge your Korean listening, reading, speaking, and reflex skills with interactive mini-games timed to lyric playback:

| Game Mode | Icon | Description |
| :--- | :---: | :--- |
| **Choice Mode** | 📋 | **Listening Comprehension**: Pick the correct sentence that was just sung from multiple choices before time runs out. |
| **Word Order Rebuild** | 🔀 | **Sentence Structure**: Tap scrambled Korean words back into their proper sequence. |
| **Sing the Words!** | 🎤 | **Speech Recognition Challenge**: Sing or pronounce the missing Korean lyrics into your microphone with real-time accuracy scoring (70%+ to pass). |
| **Batchim Builder** | 🎯 | **Interactive Catch Game**: Catch floating, drifting Hangul syllable or word tokens in the correct order to assemble the lyric line. |

- **Custom Quiz Configuration**: Choose specific game modes, select the number of questions (5, 10, 15, or all lines), and play through a focused challenge session.
- **Dynamic Time Scaling**: Time limits automatically adjust based on target complexity and word/syllable counts.

---

### 4. 📓 Deep Learning Review Notebook
- **Automated Error Tracking**: Missed sentences from game modes are automatically captured and saved into your personal Review Notebook (`localStorage`).
- **One-Click Loop Practice**: Jump straight from your notebook back to the exact video timestamp in Practice Mode to review problem lines.
- **Mastery Management**: Remove mastered phrases individually or clear completed lists as your proficiency grows.

---

### 5. 🎧 K-Pop Subtitle Tool Suite & Admin Sync
A built-in Node.js CLI tool suite and developer UI for fetching, calibrating, shifting, converting, and registering synchronized `.srt` subtitles:

- **Browser Admin Page**: Test YouTube video embeds and auto-load custom `.srt` files directly in development mode (`npm run dev`).
- **CLI Commands (`npm run tool -- <command>`)**:
  - `align`: Auto-align YouTube audio and caption streams into `.srt`.
  - `shift`: Shift timestamps forward (`+seconds`) or backward (`-seconds`) in place across both `public/lyrics/` and `lyrics/`.
  - `sync`: Calculate intro delay offsets between YouTube playback and SRT start times.
  - `convert`: Convert raw `.lrc` lyric files into timestamped `.srt` format.
  - `register`: 1-command registration that updates video mappings, lyric loaders, and song presets.
  - `validate`: Validate sequential timestamp integrity, detect overlaps, and check token statistics.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/dogtim/korean-typing-game.git
cd korean-typing-game

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 🛠️ Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts the Vite dev server with Hot Module Replacement (HMR) and Admin Sync enabled. |
| **Build** | `npm run build` | Builds the optimized production bundle to the `dist/` folder. |
| **Preview** | `npm run preview` | Locally previews the production build. |
| **Lint** | `npm run lint` | Runs `oxlint` for high-speed JavaScript/JSX code validation. |
| **Subtitle Tools** | `npm run tool -- <command>` | Runs the K-Pop Subtitle CLI tool (`tools/cli.js`). |

---

## 💻 CLI Subtitle Tools Reference

```bash
# View CLI help and all available commands
npm run tool -- --help

# 1. Shift SRT timestamps (+/- seconds)
npm run tool -- shift --file public/lyrics/SONG.srt --offset +2.5

# 2. Synchronize SRT start time with YouTube video audio intro
npm run tool -- sync --srt public/lyrics/SONG.srt --video-start 00:04.5 --srt-start 00:00.5

# 3. Convert raw LRC lyrics to SRT
npm run tool -- convert --input song.lrc --output public/lyrics/SONG.srt --offset +1.0

# 4. Auto-register a new song into the application catalog
npm run tool -- register --video <YOUTUBE_ID> --srt SONG.srt --title "Song Title" --artist "Artist Name"

# 5. Validate SRT formatting and timestamp sequence
npm run tool -- validate --file public/lyrics/SONG.srt
```

---

## 📂 Project Structure

```
korean-typing-game/
├── public/
│   └── lyrics/                 # Static SRT subtitle files served for video playback
├── lyrics/                     # Subtitle source files and mapping documentation
├── src/
│   ├── components/
│   │   ├── gameModes/          # Mini-game challenge components
│   │   │   ├── BatchimBuilderChallenge.jsx
│   │   │   ├── ChoiceModeChallenge.jsx
│   │   │   ├── GameChallengeOverlay.jsx
│   │   │   ├── SingTheWordsChallenge.jsx
│   │   │   └── WordOrderChallenge.jsx
│   │   ├── AdminSyncPage.jsx   # Dev-mode song registration & sync testing UI
│   │   ├── BadgeModal.jsx      # Achievement badges & user stats modal
│   │   ├── KpopGameMode.jsx    # Interactive K-Pop challenge game coordinator
│   │   ├── KpopVideoMode.jsx   # YouTube video player & synchronized lyric viewer
│   │   ├── LessonMode.jsx      # Core Hangul curriculum & typing lessons
│   │   ├── Navbar.jsx          # Top navigation bar & tab switcher
│   │   ├── ReviewNotebookModal.jsx # Review notebook for missed questions
│   │   ├── VideoSelectModal.jsx    # Song catalog & video picker
│   │   └── VirtualKeyboard.jsx # Dubeolsik keyboard with finger guides
│   ├── utils/
│   │   ├── audio.js            # Web Audio API sound effects synthesizer
│   │   ├── curriculum.js       # 6-stage progressive lesson dataset
│   │   ├── gameModes.js        # Challenge generator, scoring, and token splitters
│   │   ├── hangul.js           # QWERTY-to-Hangul 2-Set (두벌식) composition engine
│   │   ├── kpopSongs.js        # Song presets catalog and vowel guide
│   │   ├── preparedLyrics.js   # Pre-bundled lyrics dataset
│   │   ├── srtParser.js        # SRT subtitle parser and converter
│   │   └── videoSrtMapping.js  # YouTube ID to SRT mapping registry
│   ├── App.jsx                 # Root application component and state management
│   ├── index.css               # Dark Glassmorphism CSS design system
│   └── main.jsx                # Application entry point
├── tools/                      # Node.js CLI suite for subtitle processing
│   ├── audioAligner.js
│   ├── autoRegister.js
│   ├── cli.js
│   ├── lrcConverter.js
│   ├── srtEngine.js
│   └── README.md
└── package.json
```

---

## 🧰 Tech Stack

- **Frontend**: React 19, Vite 8
- **Styling**: Vanilla CSS (Custom Glassmorphism Dark Theme Design System)
- **Icons**: [Lucide React](https://lucide.dev)
- **Audio & Speech**: Native Web Audio API (sound synthesis) + Web Speech API (speech synthesis & speech recognition)
- **Visual FX**: Canvas Confetti
- **Tooling & Linter**: Node.js, [Oxlint](https://oxc.rs)

---

## 📄 License

MIT License © 2026 [dogtim](https://github.com/dogtim/korean-typing-game)
