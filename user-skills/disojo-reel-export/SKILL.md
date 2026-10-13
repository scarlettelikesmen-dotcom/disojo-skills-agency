---
name: disojo-reel-export
description: Exports any video as an upload-safe Instagram Reel / TikTok / Short - 1080x1920, 30 fps, H.264 High, yuv420p, BT.709 tv-range tags, faststart, HDR iPhone footage tone-mapped to SDR, an always-present AAC track - and checks it. Use when a video from any tool (screen recording, AI video, a landscape clip, a motion piece) must be turned into a vertical file that uploads without washed colours, or before delivering any reel, or when a video looks flat, gray or wrong after upload.
---

# Disojo reel export

Why this exists: phone clips are often HEVC, 10-bit, HDR (HLG, Dolby Vision) and uploaded as is they can come out washed out or badly re-encoded. Naive re-encoding to 8-bit H.264 keeps HDR tags on SDR-looking pixels (flat, gray). Ideas from charlie947/motion-graphics-skills `reel-export` (MIT) and howseen-ai/claude-motion-design's delivery checklist; the HDR to SDR conversion is Disojo's own (`sdr_chain` in `edit_reel.py`).

```
ENGINE=~/.claude/skills/disojo-reel-studio/engine ; HUB=~/Desktop/"DISOJO SOLUTIONS"/content-hub
cd $HUB && .venv/bin/python $ENGINE/tools/export_safe.py IN.mov OUT.mp4 [--fit cover|contain] [--bg 0B0B0F] [--loudnorm]
.venv/bin/python $ENGINE/tools/verify_reel.py OUT.mp4
```
- `cover` fills the frame and crops (right for footage); `contain` fits inside and pads with `--bg` (right for landscape screen recordings that must not be cropped; put a headline above/below on the padding).
- Reels edited by `disojo-reel-studio` are already exported this way; use this tool for everything else.
- Tested on a 4K HDR iPhone clip (10 s clip in ~30 s). Not yet tested on PQ (HDR10) or Dolby Vision profile 5 sources; the log prints the source transfer, so check it says tone-mapped for HDR and treated as SDR for SDR.

## Safe zone (the apps draw their own UI over the edges)
Keep every word and logo **between y 360 and 1420** (nothing in the bottom ~500 px) and out of the right 120 px. Headline at the top of that zone, video beneath it (a 16:9 clip scaled to 1080 wide is 608 tall: place it around y 660). A logo over footage vanishes on light frames: put it on its own dark rounded tile. Keep a hook to two short lines.
(The reel engine's split layout puts panel text in y 296..820 and the seam caption near y 964; the references use 360 as the conservative top. If a hook line sits at the very top, check it on a phone.)

## Hard checks (all must pass; `verify_reel.py` runs them)
H.264 High, 1080x1920, yuv420p, 30 fps, **colour tags bt709 / bt709 / bt709 / tv**, one AAC audio stream, `+faststart`, loudness -17..-14 LUFS, true peak <= -1 dBFS, frame 0 not black. If ffprobe shows `hevc`, `color_range=pc`, or `arib-std-b67`/`smpte2084` on the output, encode again. Then look at one frame from the middle at phone size.

## Gotchas
- `ffprobe -show_entries stream=color_transfer -of csv=p=0` prints a trailing comma (`arib-std-b67,`): split before comparing.
- RGB overlays need an explicit BT.709 matrix conversion or ffmpeg guesses BT.601 and shifts colours.
- A silent AAC track is added when the source has none (some apps refuse files without audio).
- The tone-map look (diffuse white 280 nits, saturation 0.85) was chosen by eye on one clip; compare one frame against the iPhone Photos app when in doubt and adjust `sdr_chain(white_nits, sat)`.
