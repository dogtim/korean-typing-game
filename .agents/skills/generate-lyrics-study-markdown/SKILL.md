---
name: generate-lyrics-study-markdown
description: >-
  Use this skill when the user provides a song name (and optional artist) and
  requests to generate a standalone, comprehensive lyrics study Markdown handbook
  (e.g. docs/<song_slug>.md). The skill searches for the song's lyrics/SRT,
  selects key sentences across verses, chorus, and bridge, deconstructs each
  sentence (bilingual translation, politeness speech levels: Banmal, Haeyoche,
  Hasipsioche, word-by-word grammar breakdown, pronunciation and liaison sound
  rules, nuances, and situational dialogues), and outputs a beautifully formatted
  Markdown learning document into docs/.
---

# Generate Lyrics Study Markdown (韓語歌詞深度研習手冊生成 SOP)

本 Skill 定義了將任意 K-Pop / 雙語歌曲轉化為**完整獨立 Markdown 研習教學手冊**（儲存於 `docs/<song_slug>.md`）的標準作業程序。

使用者只需提供歌名（例如：「BABYMONSTER MOON」或「ILLIT Magnetic」），本流程會自動：
1. 檢索歌曲資訊與本機或官方 SRT 歌詞。
2. 精選 8～15 句最具學習價值、跟唱爆點與文法代表性的關鍵歌詞句。
3. 採用《歌詞深度研習》（Lyrics Study Studio）的標準拆解模型進行多維度深度解構。
4. 輸出結構嚴謹、具備跳轉索引目錄、敬語對比、音變規則與實戰情境的 Markdown 學習手冊。

---

## ⚡ 核心執行流程 (5-Step Execution Workflow)

```
[ 使用者輸入：歌名 / 藝人 ]
           │
           ▼
1. 歌詞檢索與定位 (Locate Lyrics)
   ├── 檢查 public/lyrics/<ARTIST>-<SONG>.srt
   ├── 檢查 src/data/lyricsStudyData/ 或 src/utils/kpopSongs.js
   └── 若無本機檔，利用 search_web 檢索官方中韓雙語歌詞
           │
           ▼
2. 精選研習核心句 (Sentence Selection)
   ├── 涵蓋：Intro Hook、Verse 主歌、Pre-chorus、Chorus/Hook、Bridge、Outro
   └── 雙語歌曲按 6:4 或 7:3 比例均衡選取韓語句與英語嘻哈/流行俚語名句
           │
           ▼
3. 多維度語法與音變解構 (Deep Deconstruction)
   ├── 自然意譯 + 羅馬拼音
   ├── 敬語/語體轉換（歌詞平語 반말、日常敬語 해요체、正式敬語 하십시오체）
   ├── 句子結構總結 + 詞根/詞幹、助詞、語尾逐字拆解
   ├── 實際讀音標記 + 韓語語音音變（連音、緊音、激音、同化、收音脫落）
   └── 文化語境、易錯點分析 + 日常雙人生活實戰對話
           │
           ▼
4. 生成 Markdown 學習手冊 (Write to docs/<song_slug>.md)
   └── 包含頁首徽章、導覽索引錨點、結構化章節與語法提示框
           │
           ▼
5. 驗證與交付 (Validation & Delivery)
   └── 檢查 Markdown 錨點格式與連結正確性，通知使用者手冊已生成完畢
```

---

## 📑 標準輸出 Markdown 模板規格

手冊一律輸出至 `docs/<song_slug>.md`，採用 GitHub Flavored Markdown 規格：

```markdown
# 🎵 [藝人] – 《[歌名]》韓語歌詞深度教學手冊 ([song_slug].md)

> 本手冊為韓語與流行音樂學習者專門設計，完整收錄 [藝人] 代表作《[歌名]》中所有的核心歌詞句。包含**敬語/平語多語體版本、標準羅馬拼音、語法詞幹與助詞拆解、連音變音規則、實用語境與日常生活舉一反三**，讓你聽歌練唱的同時打通韓文聽力、口語發音與文法！

---

## 📑 歌詞金句導覽索引

1. [韓文句子 1](#1-anchor-link)（中文簡譯 1）
2. [韓文句子 2](#2-anchor-link)（中文簡譯 2）
...

---

### 1. [韓文句子原文]
*(歌曲時間戳：mm:ss)*

#### 核心翻譯與表達 (Translation)
- **自然韓文表達**：[韓文原文]（[自然中文意境翻譯]）
- **韓文敬語/正式表達**：
  - **日常敬語（해요體）**：[해요體句子]
  - **正式敬語（하십시오體）**：[하십시오體句子]
- **羅馬拼音**：`[標準羅馬拼音 / Revised Romanization]`

#### 句子結構與文法拆解 (Grammar Breakdown)
整個句子結構為：**[成分 1] + [成分 2] + [成分 3]**：
- **[單字 1]**：[詞性]，[原形/lemma]，[詳細語意與文化背景說明]。
- **[單字 2]**：[詞性/助詞]，[詳細文法功能]。
- **[文法點]**：[句型公式 `詞幹 + 語尾`，詳細功能與使用時機]。

#### 發音與連音解析 (Pronunciation & Rules)
- **實際發音**：`[韓文原文]` -> `[實際讀音音標]`
- **發音規則說明**：
  1. **連音化（연음화）**：[收音遇母音往後連讀說明]。
  2. **緊音化（경음화）/ 激音化（격음화）**：[子音碰撞音變說明]。
  3. **跟唱與 Flow 技巧 (Singing Tips)**：[歌手氣息、重音卡點或彈舌技巧]。

#### 實用補充與文化小知識 (Notes & Nuances)
- **使用情境**：[適合在何種心情、生活場合或社群使用]。
- **常見錯誤提醒**：[初學者易混淆的單字或助詞辨析]。
- **相似/替換表達**：
  - `[相似句 1]`：[中文意思]。
  - `[相似句 2]`：[中文意思]。

#### 日常生活實戰對話 (Real-Life Dialogue)
- **情境說明**：[生活化場景設定]
  - **對象 A**：`[A 發話內容]`（[A 發話中文翻譯]）
  - **你 (You)**：`[活用歌詞單字/文法的回答]`（[回答中文翻譯]）

---
```

---

## 🔍 音變規則查檢表 (Checklist)

解構韓語發音時，務必標註以下常見音變現象：
- **連音規則 (연음화 / Liaison)**：前字收音遇到後字初聲母音 `ㅇ` 時連上去讀（例：`빛이` -> `[비치]`、`하늘을` -> `[하느를]`）。
- **代表音規則 (음절 끝소리 규칙)**：收音停頓時歸納為 7 大代表音（例：`ㅅ, ㅈ, ㅊ, ㅌ, ㅎ` 在末尾均發 `[ㄷ]`）。
- **激音化 (격음화 / Aspiration)**：`ㄱ, ㄷ, ㅂ, ㅈ` 遇到 `ㅎ` 結合成送氣激音 `[ㅋ, ㅌ, ㅍ, ㅊ]`（例：`어떻게` -> `[어떠케]`、`착한` -> `[차칸]`）。
- **緊音化 (경음화 / Tensification)**：前字收音促使後字平音變為濃音 `ㄲ, ㄸ, ㅃ, ㅆ, ㅉ`（例：`알잖아` -> `[알자나/알짜나]`、`걱정` -> `[걱쩡]`）。
- **鼻音化 (비음화 / Nasalization)**：收音 `ㄱ, ㄷ, ㅂ` 遇後字初聲 `ㄴ, ㅁ` 時轉為 `[ㅇ, ㄴ, ㅁ]`。
- **流音化 (유음화 / Liquidization)**：`ㄴ` 與 `ㄹ` 相遇時均發成 `[ㄹ]`（例：`연락` -> `[열락]`）。

---

## 🛠️ Step-by-Step 操作示範

當使用者提出：「幫我把 [Song Name] 產出成深度研習 markdown file」：
1. 讀取 `public/lyrics/<ARTIST>-<SONG>.srt` 或使用 `grep_search`。
2. 提煉 8～12 句核心句。
3. 按照模板組裝 Markdown 內容。
4. 使用 `write_to_file` 寫入 `docs/<song_slug>.md`。
5. 提供使用者該 Markdown 的連結 [docs/song_slug.md](file:///Users/timchen/korean-typing-game/docs/song_slug.md) 與章節導覽！
