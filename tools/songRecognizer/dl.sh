#!/bin/bash
# usage: dl.sh <name> <youtubeId>
# Downloads the audio of a YouTube video to .cache/audio/<name>.wav (11.025 kHz, mono). Needs yt-dlp + ffmpeg.
# Studio references must be named ref_<songKey> (see refs.txt / fetch_refs.sh).
cd "$(dirname "$0")" || exit 1
mkdir -p .cache/audio
out=".cache/audio/$1.wav"
[ -f "$out" ] && exit 0
yt-dlp -q -f "ba" -o ".cache/audio/$1.%(ext)s" "https://www.youtube.com/watch?v=$2" >/dev/null 2>&1
f=$(ls .cache/audio/$1.* 2>/dev/null | grep -v '\.wav$' | head -1)
[ -n "$f" ] && ffmpeg -loglevel error -y -i "$f" -ac 1 -ar 11025 -c:a pcm_s16le "$out" && rm -f "$f"
echo "done $1"
