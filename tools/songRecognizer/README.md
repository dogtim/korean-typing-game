# Song Recognizer — find where each song starts in a concert video

Concert Wall needs, for every video, the second at which each song starts (`src/data/concertSongTimes.js`).
When a video has no chapters or timestamp comments, this tool finds them by **matching the audio against the
studio tracks** (chroma features + cross-correlation), so nobody has to scrub through a 2-hour video.

## Setup (once)

```bash
cd tools/songRecognizer
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt   # numpy, scipy
./fetch_refs.sh                                                      # studio tracks from refs.txt -> .cache/
```

Needs `yt-dlp` and `ffmpeg` on PATH. `.cache/` is git-ignored.

## Per video

```bash
./dl.sh seoul A3M7Nxt3_-Q                                            # -> .cache/audio/seoul.wav
.venv/bin/python recog.py .cache/audio/seoul.wav .cache/out/seoul.json
python3 suggest_times.py .cache/out/seoul.json --video A3M7Nxt3_-Q --mode choom_full
```

`suggest_times.py` prints `songKey  videoId  seconds` lines. Add each one as `videoId: seconds` under that song in
`SONG_START_TIMES`, and mark the video in `TIME_SOURCES` (`'audio'`). Modes: `generic`, `choom_full`, `choom_main`,
`choom_encore` (see the script header). A song with no studio reference in `refs.txt` (solos, talks, covers) cannot
be detected.

## How accurate is it?

Checked against hand-entered times and YouTube chapters on 59 detections (Jakarta ×3, Summer Sonic):

| | |
|---|---|
| median error | 3 s |
| within 5 s | 41 / 59 (69 %) |
| within 10 s | 48 / 59 (81 %) |
| off by more than 20 s | 9 / 59 (15 %) |

Detections run about 2 s late on average, so `suggest_times.py` shifts them 3 s early by default.
The confidence numbers (matched chunks, z-score) do **not** predict which detections are the bad ones, so treat
audio-sourced times as "close": the Concert Wall's nudge buttons fix the rest.

Weak spots: songs the live show shortens a lot (e.g. `clik_clak`, `hot_sauce` often give only 3–7 matching chunks),
videos that are mostly talking (vlogs), and very short fragments (< 20 min). Those were left out of the data.

## Adding a new concert

1. Add its videos to the concert's `availableAngles` in `src/data/concertsData.js`.
2. Run the three steps above for each long video that has no chapters.
3. If a video has chapters or a pinned timestamp comment, use those instead: they are exact.
