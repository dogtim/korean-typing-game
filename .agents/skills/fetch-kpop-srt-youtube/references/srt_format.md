# SRT Subtitle Specification & Validation Guide

This reference details the exact SRT formatting rules required by the Korean Typing Game engine.

---

## 1. SRT Subtitle Schema

Each subtitle block must have:
1. An incrementing numeric sequence number.
2. Standard SRT timestamp line: `HH:MM:SS,mmm --> HH:MM:SS,mmm`.
3. Synchronized lyric line in Korean Hangul (with optional English translation on a new line or separated by `|`).
4. An empty blank line between blocks.

### Example:
```text
1
00:00:08,000 --> 00:00:09,500
When I dress I don't think so much

2
00:00:09,500 --> 00:00:10,800
I could be the GOAT

3
00:00:16,000 --> 00:00:18,500
Uh 찌릿찌릿, 끼리끼리 놀아볼까?

4
00:00:18,500 --> 00:00:20,800
kitty kitty yeah we gonna run this town
```

---

## 2. Timing Rules
- **Timestamp format**: `00:01:23,456 --> 00:01:27,890` (comma for milliseconds, 3 digits).
- **Sequential order**: `start < end` for every line.
- **No overlapping blocks**: Line $N+1$ `start` should be $\ge$ Line $N$ `start`.
- **Hangul density**: $\ge 70\%$ of the lines in the song must contain Hangul syllables (`/[가-힣]/`) so that listening quizzes and pronunciation challenges have sufficient coverage.
