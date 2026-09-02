# 🇰🇷 Hangul PopPop (한글 팝팝)

An interactive, gamified Korean learning and typing web application. Master Korean (Hangul) step-by-step from fundamental consonants to conversational phrases, sing along to your favorite K-Pop music videos with synchronized bilingual lyrics, and challenge your skills in real-time mini-games!

![Language](https://img.shields.io/badge/Language-Korean%20%2F%20Hangul-8b5cf6?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)

---

## ✨ Features Overview

### 1. ⌨️ Core Hangul Lessons & Typing Engine
- **100% QWERTY-to-Hangul Conversion**: Practice Korean typing on any standard QWERTY keyboard without altering your operating system's language input settings. Keystrokes (e.g., typing `g k s f m f`) automatically compose into Korean syllables (`한글`).
- **Interactive Dubeolsik (두벌식) Keyboard**: Real-time visual keyboard featuring finger-placement guidance, color-coded finger zones (pinky, ring, middle, index), and dynamic active key feedback.
- **Native Audio & Speech Pronunciation**: Hear native Korean pronunciations powered by Web Speech API for individual letters, syllables, and vocabulary words.
- **Progressive 6-Stage Curriculum**:
  1. **Basic Consonants**: `ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ`
  2. **Basic Vowels**: `ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ`
  3. **2-Letter Syllables**: `가, 나, 다, 라, 마, 바, 사, 아...`
  4. **Syllables with Batchim**: `강, 눈, 달, 맘, 법, 산, 방, 집, 밥, 꽃...`
  5. **Everyday Vocabulary**: `한국, 한글, 안녕, 사랑, 감사, 학교, 친구, 치킨...`
  6. **Conversational Phrases**: `안녕하세요, 감사합니다, 반갑습니다, 괜찮아요...`
- **Gamification & Rewards**: Earn XP, level up, maintain practice streaks, and unlock achievement badges.

---

### 2. 🎬 K-Pop Video Practice Mode
- **Sleek Cyber Glassmorphism Header**: Compact, responsive controls bar featuring a quick Video Selector trigger, two-tier song/artist title hierarchy, and a dedicated Review Missed notebook shortcut with count badges.
- **Synchronized YouTube Music Videos**: Practice Korean with official tracks from BABYMONSTER, ILLIT, and more.
- **Bilingual Synchronized Subtitles**: Simultaneous display of Hangul lyrics, Romanization guide, and English translations.
- **Active Lyric Auto-Scroll**: Follow along in real-time as lyrics smoothly auto-scroll and highlight with video playback.
- **Flexible Looping Options**:
  - **Single-Line Looping**: Click any sentence to loop difficult lines continuously until mastered.
  - **Multi-Line Range Looping**: Select custom start and end lines to loop an entire verse or chorus.
- **Speech Recognition Pronunciation Practice**: Tap the microphone button to sing or pronounce the active line into your mic and test your speech accuracy.
- **Precision Timing & Custom Uploads**: Fine-tune subtitle sync offsets (+/- ms) or upload custom `.srt` subtitle files directly into the player.
- **Display & Speed Controls**: Toggle Romanization and English translations on or off, and adjust playback speed (0.75x, 1.0x, 1.25x).

---

### 3. 🎮 Interactive K-Pop Game Arena
Test your Korean listening comprehension, sentence structure, speech pronunciation, and reflexes timed to music video playback:

| Game Mode | Icon | Description |
| :--- | :---: | :--- |
| **Choice Mode** | 📋 | **Listening Comprehension**: Listen to the sung line and select the correct matching Korean sentence from multiple choices before time runs out. |
| **Word Order Rebuild** | 🔀 | **Sentence Structure**: Tap scrambled Korean words back into their proper sequence to reconstruct the lyric. |
| **Sing the Words!** | 🎤 | **Speech Recognition Challenge**: Sing or pronounce missing Korean lyrics into your microphone with real-time accuracy scoring (70%+ match to pass). |
| **Batchim Builder** | 🎯 | **Interactive Catch Game**: Catch floating, drifting Hangul syllable or word tokens in the correct order to assemble the target lyric line. |

- **Custom Challenge Coverage**: Configure the challenge length to 5 lines, 10 lines, 15 lines, or the full song (100% coverage).
- **Batchim Builder Granularity**: Toggle between **By Syllable** (detailed Hangul assembly) and **By Word** (whole-word assembly).
- **Survival Hearts / Lives**: Optional survival mode with configurable life counts and instant feedback.
- **Dynamic Time Scaling**: Time limits automatically adjust based on target complexity and word/syllable counts.
- **Post-Game Results & Review**: Comprehensive score screen with accuracy statistics, missed questions breakdown, and one-click options to retry or jump into Practice Mode.

---

### 4. 📓 Deep Learning Review Notebook (오답 노트)
- **Automated Error Tracking**: Missed sentences from any game challenge are automatically captured and stored in your personal Review Notebook (`localStorage`).
- **One-Click Loop Practice**: Jump straight from your notebook back to the exact video timestamp in Practice Mode to review difficult sentences in context.
- **Mastery Management**: Remove mastered phrases individually or clear review lists as your proficiency grows.

---

### 5. 🎧 K-Pop Subtitle Tool Suite & Admin Sync
A built-in Node.js CLI tool suite and developer UI for fetching, calibrating, shifting, converting, extracting frames, and registering synchronized `.srt` subtitles:

- **Browser Admin Page (`/admin` tab)**: Test YouTube video embeds, fine-tune intro offsets, edit `.srt` text, and register songs directly with Vite Hot Module Replacement (HMR) during development.
- **CLI Commands (`npm run tool -- <command>`)**:
  - `align`: Auto-align YouTube audio and caption streams into `.srt`.
  - `shift`: Shift timestamps forward (`+seconds`) or backward (`-seconds`) in place in `public/lyrics/`.
  - `sync`: Calculate intro delay offsets between YouTube playback and SRT start times.
  - `convert`: Convert raw `.lrc` lyric files into timestamped `.srt` format.
  - `register`: 1-command registration that updates video mappings, lyric loaders, and song presets.
  - `validate`: Validate sequential timestamp integrity, detect overlaps, and check token statistics.
  - `frame`: Extract high-resolution video frames at exact timestamps and custom intervals using `yt-dlp` and `ffmpeg`.

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
| **Deploy** | `npm run deploy` | Builds the project and deploys to Firebase Hosting. |
| **Lint** | `npm run lint` | Runs `oxlint` for high-speed JavaScript/JSX code validation. |
| **Subtitle Tools** | `npm run tool -- <command>` | Runs the K-Pop Subtitle CLI tool (`tools/cli.js`). |

---

## 🚢 Deployment to Firebase Hosting

The application is pre-configured with `firebase.json` and `.firebaserc` for fast, global hosting via **Firebase Hosting**.

### 1. Install Firebase CLI & Authenticate
If you haven't installed `firebase-tools` yet, install it globally:
```bash
npm install -g firebase-tools
```

Authenticate with your Google account:
```bash
firebase login
# Or if working in a remote/headless terminal:
firebase login --no-localhost
```

### 2. Configure Your Firebase Project
Link your repository to your own Firebase project (or use the default project):
```bash
# View current project
firebase projects:list

# Switch to your project ID
firebase use <your-project-id>

# Or initialize a new Firebase Hosting configuration from scratch:
firebase init hosting
```
*(When prompted by `firebase init`, specify `dist` as your public directory and answer `Yes` to configure as a single-page app).*

### 3. Build & Deploy to Production
You can build and deploy with a single shortcut:
```bash
npm run deploy
```

Or execute the steps individually:
```bash
# 1. Build the production bundle
npm run build

# 2. Deploy to Firebase Hosting
firebase deploy --only hosting
```

### 4. Deploy to a Preview Channel (Optional)
Test your changes on a temporary live URL before publishing to your production domain:
```bash
firebase hosting:channel:deploy <channel-name>
```

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

# 6. Extract high-res frames at timestamps (e.g. 3 frames starting at 10s with 0.25s interval)
npm run tool -- frame --video choom --start 10 --count 3 --duration 0.25
```

---

## 📂 Project Structure

```
korean-typing-game/
├── public/
│   └── lyrics/                 # Static SRT subtitle files and video mapping docs
├── src/
│   ├── components/
│   │   ├── gameModes/          # Game Arena challenge components
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
│   ├── audioAligner.js         # YouTube audio & caption stream aligner
│   ├── autoRegister.js         # Automated catalog registration script
│   ├── cli.js                  # CLI command runner entry point
│   ├── frameExtractor.js       # Video frame extraction via ffmpeg/yt-dlp
│   ├── lrcConverter.js         # LRC to SRT subtitle converter
│   ├── srtEngine.js            # SRT shift, parse, format, and validation engine
│   └── README.md               # Subtitle CLI documentation
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
