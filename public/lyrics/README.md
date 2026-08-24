# 🎤 Prepared SRT Lyrics Folder

Welcome to the **SRT Lyrics Directory**! You can save prepared `.srt` subtitle files in this folder to use them inside the K-Pop Video Typing Mode of the app.

---

## 📁 Folder Structure

Place your `.srt` subtitle files in this directory (`public/lyrics/`).
Any file saved here can be loaded in the app or parsed using standard SRT subtitle syntax.

---

## 📜 Supported SRT Formats

The parser supports **two** formats for line synchronized lyrics:

### Option 1: Multi-line Format (Recommended)
Each block contains 3 text lines following the timestamp:
1. **Line 1:** Korean Hangul (`가사`)
2. **Line 2:** Romanization (`rom-an-i-za-tion`)
3. **Line 3:** English Translation (`Translation`)

```srt
1
00:00:09,000 --> 00:00:14,000
가만히 보고만 있지 말고
ga-man-hi bo-go-man it-ji mal-go
Don't just stand there watching

2
00:00:14,000 --> 00:00:18,000
나를 봐 내 이름은 Super Shy
na-reul bwa nae i-reum-eun Super Shy
Look at me, my name is Super Shy
```

### Option 2: Pipe-Separated Format (`|`)
Single line separated by pipe `|` characters:

```srt
1
00:00:09,000 --> 00:00:14,000
가만히 보고만 있지 말고 | ga-man-hi bo-go-man it-ji mal-go | Don't just stand there watching

2
00:00:14,000 --> 00:00:18,000
나를 봐 내 이름은 Super Shy | na-reul bwa nae i-reum-eun Super Shy | Look at me, my name is Super Shy
```

---

## 🚀 How to Use in App

1. Place your `.srt` file into `public/lyrics/my_song.srt`.
2. Open the **K-Pop Video Mode** in the Korean Typing Game.
3. Click **"Prepared SRT Library"** or upload your `.srt` file directly using **"Upload .SRT File"**.
4. Start practicing typing to your favorite K-Pop music video!
