#!/usr/bin/env python3
"""Export ANY video as an upload-safe vertical file: 1080x1920, 30 fps, H.264 High, yuv420p, BT.709 tv-range tags, faststart,
HDR (HLG/PQ) tone-mapped to SDR, always an AAC track (silent if the source has none).
  export_safe.py IN OUT [--fit cover|contain] [--bg 0B0B0F] [--loudnorm] [--max 90]
cover = fill the frame and crop; contain = fit inside and pad with --bg. Keep text inside y 360..1420 and out of the right 120 px:
the apps draw their own buttons there (see disojo-reel-export)."""
import argparse, subprocess, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from edit_reel import sdr_chain, run

ap = argparse.ArgumentParser(); ap.add_argument("input"); ap.add_argument("output")
ap.add_argument("--fit", choices=["cover", "contain"], default="cover"); ap.add_argument("--bg", default="0B0B0F")
ap.add_argument("--loudnorm", action="store_true"); ap.add_argument("--max", type=float, default=90.0)
a = ap.parse_args()
pr = run(["ffprobe", "-v", "error", "-show_entries", "stream=codec_type,color_transfer:format=duration", "-of", "default=nw=1", a.input]).stdout
has_audio = "codec_type=audio" in pr
tr = next((l.split("=")[1] for l in pr.splitlines() if l.startswith("color_transfer=") and l.split("=")[1] not in ("", "unknown")), "")
dur = float(next(l.split("=")[1] for l in pr.splitlines() if l.startswith("duration=")))
if dur > a.max: print(f"WARNING: {dur:.0f}s exceeds --max {a.max:.0f}s (Reels cap); exporting anyway")
geo = ("scale=1080:1920:force_original_aspect_ratio=increase:flags=lanczos,crop=1080:1920" if a.fit == "cover"
       else f"scale=1080:1920:force_original_aspect_ratio=decrease:flags=lanczos,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=0x{a.bg}")
vf = f"fps=30,{geo},{sdr_chain(tr)},setsar=1,setparams=colorspace=bt709:color_primaries=bt709:color_trc=bt709:range=tv"
cmd = ["ffmpeg", "-v", "error", "-y", "-i", a.input]
if not has_audio: cmd += ["-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo"]
af = "aresample=48000,aformat=channel_layouts=stereo" + (",loudnorm=I=-16:TP=-1.5:LRA=9" if a.loudnorm else "")
cmd += ["-vf", vf, "-map", "0:v:0", "-map", "0:a:0" if has_audio else "1:a:0", "-af", af, "-shortest",
        "-c:v", "libx264", "-profile:v", "high", "-crf", "17", "-preset", "medium", "-pix_fmt", "yuv420p",
        "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-color_range", "tv", "-r", "30",
        "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", a.output]
run(cmd)
print(f"exported {a.output}  (source transfer: {tr or 'sdr/unspecified'}, audio: {'source' if has_audio else 'silent track added'})")
