#!/bin/bash
# Downloads every studio reference listed in refs.txt (songKey youtubeId) to .cache/audio/ref_<songKey>.wav
cd "$(dirname "$0")" || exit 1
awk '{print "ref_"$1, $2}' refs.txt | xargs -P 6 -L1 ./dl.sh
