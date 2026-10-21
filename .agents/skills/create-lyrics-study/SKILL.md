---
name: create-lyrics-study
description: >-
  Use this skill when the user wants to create, expand, calibrate, or register
  deep lyrics study data packs (「歌詞深度研習」 / Lyric Study Studio) for any song in
  Hangul PopPop. Covers sentence selection (Korean highlights + English hip-hop/pop
  idioms), interactive Pill Chips tokenization (lemmas, speech types, meanings),
  3-layer drawer generation (Grammar token breakdown, Pronunciation / Sound rules
  & singing tips, Politeness registers: Banmal, Haeyoche, Hasipsioche, and real-life
  situational dialogue), and registration in src/data/lyricsStudyData/index.js.
---

# Create Lyrics Study (歌詞深度研習製作與登錄 SOP)

This skill provides the standard operational procedure for designing, generating, and registering deep lyrics study datasets (**歌詞深度研習 / Lyric Study Studio**) in **Hangul PopPop**.

Each dataset provides an interactive learner experience:
1. **Interactive Pill Chips (單字膠囊)**: Clickable word chips that display lexical category, root lemma, core meaning, and nuanced explanation with text-to-speech audio.
2. **3-Tab Learning Drawer (三層深度研習抽屜)**:
   - **Tab 1: 結構與文法拆解 (Grammar & Anatomy)**: Sentence summary and token-by-token table.
   - **Tab 2: 發音與音變密技 / 嘻哈 Flow (Pronunciation & Flow)**: Actual sound (IPA/連音音標), vocal flow tips, and phonetic rules.
   - **Tab 3: 敬語對比與日常實戰 (Politeness & Real-Life Context)**: Speech levels (Banmal, Haeyoche, Hasipsioche for Korean; Street slang, Casual, Professional for English) and bilingual everyday situational dialogue.

---

## 📁 File Structure & Registration

- **Study Pack Location**: `src/data/lyricsStudyData/<songName>Study.js`
- **Central Index & Presets**: `src/data/lyricsStudyData/index.js`
  - Export data: `export { <SONG>_STUDY_DATA };`
  - Add to presets: `LYRIC_STUDY_PRESETS = [ ... ]`
  - Ensure lookup handles: `id`, `youtubeId`, `altYoutubeIds`, and normalized song title.

---

## 📐 Data Schema Reference

```javascript
export const <SONG>_STUDY_DATA = {
  id: '<song_slug>', // e.g. 'moon', 'drip', 'we_go_up'
  title: '<Song Title>',
  artist: '<Artist Name>',
  album: '<Album Title>',
  year: '<Year>',
  youtubeId: '<Primary_YouTube_ID>',
  altYoutubeIds: ['<Alt_ID_1>', '<Alt_ID_2>'],
  sentences: [
    {
      id: '<song_slug>-<ko|en>-<index>', // e.g. 'mn-kr-1', 'mn-en-1'
      language: 'ko', // 'ko' (Korean) or 'en' (English)
      langLabel: '韓語 (Korean)', // or '英語 (English)'
      time: 'mm:ss', // Timecode in MV, e.g. '00:07'
      timeSec: 7.0, // Floating seconds for video seek
      korean: '原文歌詞 (韓文或包含韓文的雙語句)',
      text: '顯示歌詞',
      romanization: '標準羅馬拼音或英語 IPA / Flow',
      naturalTranslation: '自然流暢的繁體中文意境翻譯',
      pillChips: [
        {
          id: 'p1',
          text: '單字文字',
          rom: '拼音',
          type: 'noun', // CSS classification tag
          typeLabel: '詞性標籤 (例如：名詞 (滿月/圓月))',
          lemma: '辭典原形 / 詞根',
          meaning: '核心語義',
          explanation: '深入文化背景、詞源或語法說明'
        }
      ],
      drawer: {
        grammar: {
          structureSummary: '全句語法結構白話總結',
          tokens: [
            { term: '詞彙/片語', role: '語法成分 (主語/謂語/狀語/語尾)', desc: '詳細語法作用' }
          ]
        },
        pronunciation: {
          actualSound: '[實際讀音標記，如：보름달 뜨는 밤 / 노라볼까]',
          singingTips: '跟唱節奏、氣息、咬字或 Flow 卡點訣竅',
          rules: [
            {
              title: '音變/連音規則名稱 (例：硬顎濃音、連音化、鼻音化)',
              badge: '重點類型 (例：發音重點、收音音變)',
              detail: '規則說明與發音嘴型技巧'
            }
          ]
        },
        politeness: {
          levels: [
            {
              name: '歌詞語體 (平語 반말 / 街頭俚語 Street Slang)',
              badge: '歌詞原型',
              form: '歌詞中使用的型態',
              scene: '朋友間、同齡好友隨意交談場景'
            },
            {
              name: '日常敬語 (해요體 / 標準生活口語 Casual Polite)',
              badge: '生活推薦',
              form: '生活或社群中最推薦使用的表達',
              scene: '日常生活向店員、學長姐或同事禮貌表達'
            },
            {
              name: '正式體 (하십시오體 / 正式商務 Formal)',
              badge: '最高敬意',
              form: '正式書面或隆重場合表達',
              scene: '正式演講、舞台公告或書信'
            }
          ],
          realLifeExample: {
            scenario: '日常生活中活學活用的具體場景描述',
            dialogue: [
              { speaker: '對象 A', text: '對話原文', trans: '中文翻譯' },
              { speaker: '你 (You)', text: '活用歌詞單字/文法的回答', trans: '中文翻譯' }
            ]
          }
        }
      }
    }
  ]
};
```

---

## 🏷️ Pill Chips 常用詞性標籤 (`type` & `typeLabel`)

| `type` | 適用對象 | `typeLabel` 範例 |
| :--- | :--- | :--- |
| `noun` | 名詞 | `名詞 (滿月/圓月)` |
| `verb-modifier` | 定語修飾詞尾 | `現在時定語詞尾 (-는)` |
| `verb` / `verb-action` | 動詞原形/動作動詞 | `動詞原形 (升起/浮現)` |
| `adjective` | 形容詞 | `冠形詞 (漆黑的)` |
| `mimetic-word` | 擬態語/擬聲語 | `擬態語 (麻酥酥/心動觸電)` |
| `idiom-adverb` | 成語/成語副詞 | `成語副詞 (物以類聚)` |
| `phrase` | 慣用片語 | `慣用詞組 (發光)` |
| `freedom-idiom` / `slang` | 英文俚語/成語 | `自由成語 (on the loose)` / `街頭俚語 (stuntin')` |

---

## 🛠️ Step-by-Step Production SOP

1. **挑選金句 (Sentence Selection)**:
   - 挑選歌曲中具備高跟唱度、強烈記憶點（Punchline / Hook）或核心文法概念的 6~12 句。
   - 雙語歌曲建議韓語 4~8 句 + 英語嘻哈/流行俚語 2~4 句，均衡兼顧韓語學習與流行文化。
2. **對齊時間戳 (Timestamp Alignment)**:
   - 參考對應的 `.srt` 檔案時間標記，填寫精準的 `time` (mm:ss) 與 `timeSec`（秒數浮點數）。
3. **膠囊化單字拆解 (Tokenization)**:
   - 每一句將 2~4 個核心單字拆解成獨立的 `pillChips`，提供清楚的原形（`lemma`）與白話釋義。
4. **撰寫三層研習抽屜 (Drawer Generation)**:
   - 文法結構：使用直白名詞說明句型骨架。
   - 發音規則：標註連音（연음）、濃音（된소리）、鼻音化（비音화）或舌位咬字技巧。
   - 敬語與實戰：提供平語、해요體、하십시오體的對比，並設計生活化對話。
5. **整合與驗證 (Verification)**:
   - 在 `src/data/lyricsStudyData/index.js` 註冊。
   - 執行 `npm run build` 驗證模組打包無報錯。
