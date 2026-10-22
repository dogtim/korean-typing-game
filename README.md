# 🇰🇷 Hangul PopPop (한글 팝팝) & 🇹🇼 Hokkien PopPop

> **An interactive, gamified language learning platform and multi-camera K-Pop concert experience.** Master Korean (Hangul) step-by-step from fundamental syllables to conversational fluency, sing along with synchronized bilingual lyrics and official fanchant guides, dive deep into sentence deconstruction at the K-Lyric Studio, and command a multi-angle synchronized concert video wall!

![Language](https://img.shields.io/badge/Language-Korean%20%2F%20Hangul%20%7C%20Taiwanese%20Hokkien-8b5cf6?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)

---

## 🌟 Major Highlights & Feature Modules

```
                    ┌────────────────────────────────────────────────────────┐
                    │               Hangul PopPop Navigation Hub             │
                    └────────────────────────────────────────────────────────┘
                               │                │                │
            ┌──────────────────┴──┐      ┌──────┴──────┐   ┌─────┴──────────────────┐
            │ 🎸 Concert Wall     │      │ 🎬 Practice │   │ 🎓 K-Lyric Studio      │
            │ Multi-CAM Video     │      │ MV + Lyrics │   │ Tokenization & Grammar │
            │ Synchronized Seek   │      │ + Fanchants │   │ Politeness & Dialogues │
            └─────────────────────┘      └─────────────┘   └────────────────────────┘
                       │                        │
            ┌──────────┴──────────┐      ┌──────┴────────────────┐
            │ 🎮 K-Pop Game Arena │      │ 📓 Review Notebook    │
            │ 4 Interactive Modes │      │ Missed Question Loops │
            └─────────────────────┘      └───────────────────────┘
```

---

### 1. 🎸 Concert Multi-CAM Video Wall (搖滾區多視角演唱會影音牆)

> Experience the live stage from every angle. Play up to **3 synchronized camera perspectives** side-by-side with director-level control, zero-lag cross-camera seeking, and dynamic multi-tour setlists.

- **3-Angle Simultaneous Playback**: View CAM 1, CAM 2, and CAM 3 in a unified cinematic viewport (Master Audio + 2 muted companion angles).
- **Master Director Control Bar**:
  - **Master Play / Pause**: Start and pause all 3 cameras concurrently.
  - **Master Synchronous Seek**: Global timeline slider keeping all angles aligned down to the sub-second offset.
  - **Active Audio Selector**: Instantly switch the primary audio feed between CAM 1, 2, or 3 without audio overlap.
  - **Live Camera Angle Picker**: Pull up the angle switcher drawer to replace any slot with member-focused fancams, VIP pit angles, or wide stadium views.
- **Setlist Horizontal Scroll View (橫向曲目跳轉列)**:
  - Fluid, center-aligned horizontal scroll list covering entire concert setlists (Soundcheck, Main Stage, Solos, Encore) with 40+ tracks (e.g. CHOOM Jakarta).
  - 1-click synchronous seek jumping all active cameras to the target song instantly.
- **Dynamic Single Source of Truth Architecture**:
  - `all_concerts_mix.availableAngles` and `songs` dynamically aggregate and deduplicate 29+ unique angles across all tour stops with zero redundant configuration.
- **Featured Concert Presets**:
  - **2026-27 BABYMONSTER WORLD TOUR [춤 (CHOOM)]**: Seoul KSPO Dome, Manila, & Jakarta 4K Full Concerts (1:55:04).
  - **Summer Sonic 2026**: Tokyo Mountain Stage live band mix and multi-camera fancams.
  - **Hello Monsters 2025 Japan Tour**: Pia Arena MM Yokohama & Kobe World Memorial Hall.
  - **All-Concerts Mix (全巡演混搭特調)**: Dynamic cross-tour angle sandbox.

---

### 2. 🎬 K-Pop & Hokkien Video Practice Mode (歌曲跟唱與練習)

> Sing along to official music videos and live performances with real-time synchronized bilingual lyrics and official cheering guides.

- **Bilingual Synchronized Lyrics**: Real-time display of Korean Hangul lyrics, Romanization guide, and English/Traditional Chinese translations with smooth auto-scroll.
- **📣 Official Fanchant Guide (應援法互動指南)**:
  - Synchronized fanchant prompter overlay displaying live fan cheering cues (`SHOUT`, `HOOK`, `ECHO`, `MEMBER NAMES`, `HYPE`, `SCREAM`) timed to the MV.
  - 1-click toggle to practice official fan club cheering alongside the song.
- **Precision Looping Modes**:
  - **Single-Line Looping**: Click any lyric line to repeat it continuously until pronunciation is mastered.
  - **Multi-Line Range Looping**: Define custom start and end lines to loop entire verses, choruses, or rapid rap segments.
- **Microphone Speech Recognition**: Sing or pronounce the active Korean line into your microphone with Web Speech API real-time accuracy scoring.
- **🇹🇼 Hokkien PopPop Mode (台語金曲學習)**:
  - Bilingual platform switcher toggling between Korean K-Pop and Taiwanese Hokkien classics with Tai-lo (台羅) romanization and dual-language subtitles.

---

### 3. 🎓 K-Lyric Studio (歌詞深度研習室)

> A dedicated linguistic studio for breaking down K-Pop lyrics into grammar, pronunciation rules, politeness levels, and real-life conversational dialogues.

- **Interactive Tokenization Pill Chips**: Click individual words to inspect grammatical categories, dictionary root lemmas, and in-depth meanings.
- **3-Layer In-Depth Analysis Drawer**:
  - **Layer 1: Grammar Token Breakdown (文法解構)**: Morpheme-by-morpheme breakdown of particles (`-은/는`, `-을/를`, `-에서`), verb conjugations, and sentence endings.
  - **Layer 2: Pronunciation Rules & Vocal Delivery (發音連音與演唱技巧)**: Phonetic liaison (연음), nasalization (비음화), tensification (된소리되기), rhythm cadence, and breathing cues.
  - **Layer 3: Politeness Registers & Real-Life Dialogues (敬語位階與情境生活對話)**: Conversion across **Banmal (반말 / 半語)**, **Haeyoche (해요체 / 非格式體敬語)**, and **Hasipsioche (하십시오체 / 格式體敬語)**, paired with realistic daily dialogue scripts.

---

### 4. 🎮 Interactive K-Pop Game Arena

> Challenge your Korean listening comprehension, sentence structure, speech pronunciation, and reflexes:

| Game Mode | Icon | Description |
| :--- | :---: | :--- |
| **Choice Mode** | 📋 | **Listening Comprehension**: Listen to the vocal line and select the matching Korean sentence from 4 options before the timer expires. |
| **Word Order Rebuild** | 🔀 | **Sentence Structure**: Tap scrambled Korean word blocks back into their correct sequence to reconstruct the lyric line. |
| **Sing the Words!** | 🎤 | **Speech Recognition Challenge**: Sing or pronounce missing Korean lyrics into your microphone with real-time accuracy scoring (70%+ to pass). |
| **Batchim Builder** | 🎯 | **Interactive Catch Game**: Catch drifting Hangul syllable or word tokens in the correct sequence to assemble the target lyric. |

- **Flexible Song Coverage**: Customize challenge scope to 5 lines, 10 lines, 15 lines, or the complete song (100% full-track coverage).
- **Batchim Builder Granularity**: Toggle between **By Syllable** (detailed Hangul block assembly) and **By Word** (word-level assembly).
- **Configurable Survival Lives & Dynamic Time Limits**: Adjustable life count and complexity-scaled challenge timers.
- **Post-Game Scorecard**: In-depth review with accuracy statistics, missed questions breakdown, and direct shortcuts to Practice Mode.

---

### 5. 📓 Deep Learning Review Notebook (오답 筆記本)

- **Automated Error Logging**: Automatically stores missed sentences from game challenges into local storage (`localStorage`).
- **One-Click Video Context Jump**: Instantly jump from any notebook entry to the exact timestamp in Video Practice Mode to review difficult lyrics in audio-visual context.
- **Proficiency Tracking**: Mark phrases as mastered, filter by song, or clear review lists as your skill progresses.

---

### 6. ⌨️ Core Hangul Lessons & Typing Engine *(🚧 WIP / Temporarily Hidden in Nav)*

> ⚠️ **Status Note**: The core typing curriculum is undergoing a major content and stage-level upgrade and is temporarily hidden from the top navigation bar. It will be reopened when the revamped curriculum is finalized.

- **100% QWERTY-to-Hangul Conversion**: Practice Korean typing on any standard keyboard without changing your OS input method. Keystrokes (e.g. `g k s f m f`) automatically assemble into syllables (`한글`).
- **Interactive Dubeolsik (두벌식) Keyboard**: Real-time visual keyboard featuring finger-placement guides, color-coded finger zones, and active key feedback.
- **Progressive 6-Stage Curriculum**:
  1. Basic Consonants (`ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ...`)
  2. Basic Vowels (`ㅏ, ㅑ, ㅓ, ㅕ, ㅗ...`)
  3. 2-Letter Syllables (`가, 나, 다, 라, 마...`)
  4. Syllables with Batchim (`강, 눈, 달, 맘, 집...`)
  5. Everyday Vocabulary (`한국, 한글, 사랑, 친구...`)
  6. Conversational Phrases (`안녕하세요, 감사합니다...`)

---

### 7. 🎧 K-Pop Subtitle Tool Suite & Developer Sync CLI

A built-in Node.js CLI tool suite and developer UI for fetching, calibrating, shifting, converting, extracting frames, and registering synchronized `.srt` subtitles and concert setlists:

- **Browser Admin Page (`/admin` tab)**: Test YouTube embeds, fine-tune intro offsets, edit `.srt` text, and register songs with Vite Hot Module Replacement (HMR).
- **CLI Commands (`npm run tool -- <command>`)**:
  - `align`: Auto-align YouTube audio and caption streams into `.srt`.
  - `shift`: Shift timestamps forward (`+seconds`) or backward (`-seconds`) in `public/lyrics/`.
  - `sync`: Calculate intro delay offsets between YouTube playback and SRT start times.
  - `convert`: Convert raw `.lrc` lyric files into timestamped `.srt` format.
  - `register`: 1-command registration that updates video mappings, lyric loaders, and song presets.
  - `validate`: Validate sequential timestamp integrity and detect overlaps.
  - `frame`: Extract high-resolution video frames at exact timestamps using `yt-dlp` and `ffmpeg`.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm**, **yarn**, or **pnpm**

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
| **Development** | `npm run dev` | Starts Vite dev server with Hot Module Replacement (HMR) and Admin Sync enabled. |
| **Build** | `npm run build` | Builds optimized production bundle to the `dist/` directory. |
| **Preview** | `npm run preview` | Locally preview the production build. |
| **Deploy** | `npm run deploy` | Builds the project and deploys to Firebase Hosting. |
| **Lint** | `npm run lint` | Runs `oxlint` for high-speed JavaScript/JSX code validation. |
| **Subtitle Tools** | `npm run tool -- <command>` | Runs the K-Pop Subtitle CLI tool (`tools/cli.js`). |

---

## 🚢 Deployment to Firebase Hosting

The application is pre-configured with `firebase.json` and `.firebaserc` for fast, global hosting via **Firebase Hosting**.

### 1. Install Firebase CLI & Authenticate
```bash
npm install -g firebase-tools
firebase login
```

### 2. Configure Your Firebase Project
```bash
# Select or switch your project ID
firebase use <your-project-id>
```

### 3. Build & Deploy
```bash
# Build production bundle and deploy
npm run deploy

# Or deploy manually
npm run build
firebase deploy --only hosting
```

---

## 📂 Project Structure

```
korean-typing-game/
├── public/
│   └── lyrics/                     # Static SRT subtitle files and video mapping docs
├── src/
│   ├── components/
│   │   ├── gameModes/              # Game Arena challenge components
│   │   │   ├── BatchimBuilderChallenge.jsx
│   │   │   ├── ChoiceModeChallenge.jsx
│   │   │   ├── GameChallengeOverlay.jsx
│   │   │   ├── SingTheWordsChallenge.jsx
│   │   │   └── WordOrderChallenge.jsx
│   │   ├── AdminSyncPage.jsx       # Dev-mode song registration & sync testing UI
│   │   ├── BadgeModal.jsx          # Achievement badges & user stats modal
│   │   ├── ConcertSelectModal.jsx  # Concert preset selection modal
│   │   ├── ConcertTourHistoryModal.jsx # World tour timeline & stop history modal
│   │   ├── ConcertWall.jsx         # 3-camera synchronized live concert video wall
│   │   ├── FanchantPrompter.jsx    # Live fanchant prompter overlay
│   │   ├── KpopGameMode.jsx        # Interactive K-Pop challenge game coordinator
│   │   ├── KpopVideoMode.jsx       # YouTube video player & synchronized lyric viewer
│   │   ├── LessonMode.jsx          # Core Hangul curriculum & typing lessons (WIP)
│   │   ├── LyricStudyStudio.jsx    # K-Lyric Studio: tokenization, grammar, & dialogues
│   │   ├── LyricsReferencePage.jsx # Full-song lyrics reference handbook
│   │   ├── Navbar.jsx              # Navigation header with language & tab switchers
│   │   ├── ReviewNotebookModal.jsx # Review notebook for missed questions
│   │   ├── VideoSelectModal.jsx    # Song catalog & video picker
│   │   └── VirtualKeyboard.jsx     # Dubeolsik keyboard with finger guides
│   ├── data/
│   │   ├── concertTourHistoryData.js # World tour dates, venues, and setlist metadata
│   │   ├── concertsData.js         # Multi-cam angles, setlist offsets, & dynamic mix getters
│   │   ├── fanchants/              # 18+ official agency fanchant guide datasets
│   │   └── lyricsStudyData/        # 22+ deep lyrics study packs (tokens, grammar, politeness)
│   ├── utils/
│   │   ├── audio.js                # Web Audio API sound effects synthesizer
│   │   ├── curriculum.js           # 6-stage progressive lesson dataset
│   │   ├── fanchantData.js         # Fanchant index and cue resolver
│   │   ├── gameModes.js            # Challenge generator, scoring, and token splitters
│   │   ├── hangul.js               # QWERTY-to-Hangul 2-Set (두벌식) composition engine
│   │   ├── hokkien.js              # Taiwanese Hokkien song presets & romanization
│   │   ├── kpopSongs.js            # K-Pop song presets catalog
│   │   ├── preparedLyrics.js       # Pre-bundled lyrics dataset
│   │   ├── songDifficulty.js       # Lyric line difficulty scoring
│   │   ├── srtParser.js            # SRT subtitle parser and converter
│   │   └── videoSrtMapping.js      # YouTube ID to SRT mapping registry
│   ├── App.jsx                     # Root application coordinator
│   ├── index.css                   # Cyber dark glassmorphism design system
│   └── main.jsx                    # Application entry point
├── tools/                          # Node.js CLI suite for subtitle & timestamp processing
│   ├── audioAligner.js             # YouTube audio & caption stream aligner
│   ├── autoRegister.js             # Automated catalog registration script
│   ├── cli.js                      # CLI command runner entry point
│   ├── frameExtractor.js           # Video frame extraction via ffmpeg/yt-dlp
│   ├── lrcConverter.js             # LRC to SRT subtitle converter
│   └── srtEngine.js                # SRT shift, parse, format, and validation engine
└── package.json
```

---

## 🧰 Tech Stack

- **Frontend**: React 19, Vite 8
- **Styling**: Vanilla CSS (Cyber Dark Glassmorphism Design System)
- **Icons**: [Lucide React](https://lucide.dev)
- **Audio & Speech**: Native Web Audio API (sound synthesis) + Web Speech API (speech synthesis & real-time voice evaluation)
- **Video Player**: YouTube IFrame Player API (Multi-instance synchronizer)
- **Visual FX**: Canvas Confetti
- **Tooling & Linter**: Node.js, [Oxlint](https://oxc.rs)

---

## 📄 License

MIT License © 2026 [dogtim](https://github.com/dogtim/korean-typing-game)
