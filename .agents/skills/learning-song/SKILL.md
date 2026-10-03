---
name: learning-song
description: >-
  Use this skill when the user provides a lyric (in Korean, English, Romanized, or Chinese)
  from a song and wants to find the Korean sentence, get its Romanization and translation,
  and receive a beginner-friendly breakdown of vocabulary, grammar, and pronunciation for learning Korean.
---

# LearningSong Skill (韓語歌詞沈浸式零基礎學習 SOP)

本 Skill 專門為「**零韓文基礎**」的學習者設計。當使用者提供某首歌的一句歌詞（無論是韓文原文、英文翻譯、羅馬拼音、中文意思，或是附帶歌名）時，系統會自動定位該句歌詞，並生成最易懂、好跟唱、能學到韓文單字與文法的拆解教學。

---

## 🎯 核心執行流程 (Workflow)

```
[ 使用者提供歌詞句 / 歌名片段 ]
           │
           ▼
1. 檢索定位 (Search & Locate) ───► 在 public/lyrics/*.srt 或透過網路搜尋找到完整對應句
           │
           ▼
2. 提取資訊 (Extract & Align) ───► 取得：韓文原文、標準羅馬拼音、時間戳、上下文
           │
           ▼
3. 零基礎教學解析 (Generate Breakdown)
           │
           ├── A. 原文與精準標注 (Hangul + Context)
           ├── B. 羅馬拼音與跟唱發音指南 (Pronunciation & Sound Rules)
           ├── C. 歌詞意境與語感 (Natural Meaning)
           ├── D. 單字逐字拆解 (Word-by-word Breakdown)
           ├── E. 零基礎文法與助詞精講 (Grammar Made Easy)
           ├── F. 歌曲跟唱歌唱技巧 (Singing & Rhythm Tip)
           └── G. 日常生活舉一反三 (Real-Life Application)
```

---

## 🛠 Step 1: 檢索定位歌詞 (Search & Locate)

1. **本機歌詞搜尋**：
   - 優先在 `public/lyrics/` 目錄下的 `.srt` 檔案中使用 `grep_search`。
   - 範例：若使用者給予 `"waking up in my dream"` 或 `"I'm getting stronger"`，在 `public/lyrics/*.srt` 中搜尋該句。
   - 取得該句對應的：
     - 所屬歌曲與藝人（例如：BABYMONSTER - DREAM）
     - 原文韓文（若該曲為韓文歌）或對應的英/韓對照
     - 歌曲中的時間標記（Timecode, 例如 `02:57,500 --> 03:02,500`）
2. **外部歌曲檢索**：
   - 若本機庫存無此歌曲，直接根據歌名與歌詞進行搜尋，取得官方韓文歌詞與發音。

---

## 📖 Step 2: 輸出標準教學模板 (Teaching Output Template)

回覆使用者時，一律採用結構清晰、排版優美、親切易懂的格式：

```markdown
### 🎵 歌曲來源：[藝人] - [歌名] (時間戳: mm:ss)

---

#### 1. 🎯 核心句子 (Target Sentence)
- **韓文原文**：[韓文句子]
- **羅馬拼音**：`[標準 Revised Romanization]`
- **中文意譯**：[自然流暢的中文意境翻譯]
- **字面直譯**：[逐字對應的原意]

---

#### 2. 🗣️ 發音與跟唱指南 (Pronunciation Guide)
- **新手跟唱拼音**：[標示連音與重音的拼音，例如：gayeo (ga-yeo)]
- **連音與變音重點**：
  - *連音規則 (연음)*：若前面單字有收音（底部的子音），遇上後面的母音 `ㅇ` 會往後連上去發音（例：`있어` -> `이써 [i-sseo]`）。
  - *收音發音 (받침)*：說明該收音的閉唇/頂舌技巧。
- **唱腔技巧 (Singing Tip)**：歌手在此句的語調、拍子重音或氣音處理。

---

#### 3. 🔍 單字逐字拆解 (Vocabulary Breakdown)
| 韓文 | 羅馬音 | 詞性 / 原型 | 中文意思 | 備註 / 記憶小撇步 |
| :--- | :--- | :--- | :--- | :--- |
| 단어 1 | dan-eo | 名詞 / 動詞原型 | ... | ... |
| 단어 2 | ... | 助詞 | ... | ... |

---

#### 4. 🧩 零基礎文法解析 (Grammar Point)
- **核心句型 / 助詞**：`[文法點，例：-고 싶다 / -잖아 / -았/었-]`
- **新手白話解釋**：[用最直白的方式解釋這個句型代表的語氣與時態，避免艱深難懂的語言學術語]
- **句型拆解**：
  > `[動詞字根]` + `[句尾變化]` = `[表達的意思]`

---

#### 5. 💬 換你試試看！日常生活這樣用 (Real-Life Everyday Example)
- **情境**：在日常生活中如果想表達類似心情，可以這樣說：
  - 韓文：`[日常例句]`
  - 拼音：`[拼音]`
  - 意思：[中文意思]
```

---

## 💡 初學者友好原則 (Beginner-Friendly Rules)

1. **避免過度學術的術語**：
   - 不要只講「主格助詞、賓格助詞、終結詞尾」，要具體說明「這個詞放在名詞後面，代表它是這句話的主角 / 正在被做的事情」。
2. **務必標示動詞/形容詞「原型 (Dictionary Form)」**：
   - 韓文動詞在句子中會產生時態與口語變換（活用），初學者無法直接在字典查到變化後的詞。必須列出原型（如 `가다`、`하다`、`예쁘다`）。
3. **區分口語縮寫與正式說法**：
   - 歌詞中極常出現縮寫（例如：`난` = `나는`、`널` = `너를`、`내꺼` = `내 것`），務必特別點出，幫助學習者打通聽力盲點。
4. **正向鼓勵**：
   - 語氣保持親切、活潑且充滿鼓勵，讓不懂韓文的人也能輕鬆唱出來並享受學習樂趣。
