#!/usr/bin/env bash
# Slice a turntable video into a JPEG frame sequence for ScrollVideoHero.
# usage: extract_frames.sh input.mp4 outdir "W:H:X:Y" [frames=160]
#   crop = ffmpeg crop box around the product. This also removes the Gemini sparkle watermark
#   (bottom-right corner) as long as the box excludes it. Look at one frame first:
#     ffmpeg -i input.mp4 -frames:v 1 first.png   and pick the box by eye.
# Notes: this ffmpeg build has no libwebp, so frames are JPEG. ~21 KB/frame at 1360x1080 q=4.
set -euo pipefail
in="$1"; out="$2"; crop="$3"; frames="${4:-160}"
mkdir -p "$out"
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$in")
fps=$(python3 -c "print($frames/float($dur))")
ffmpeg -y -loglevel error -i "$in" -vf "crop=$crop,fps=$fps" -frames:v "$frames" -q:v 4 "$out/frame-%03d.jpg"
echo "wrote $(ls "$out" | wc -l) frames to $out (fps=$fps). Set FRAME_COUNT in ScrollVideoHero.jsx to this number."
