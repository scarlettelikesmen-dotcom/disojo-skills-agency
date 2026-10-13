#!/usr/bin/env python3
"""Transcribe many clips to text files (for building a voice profile). Local only.
   .venv/bin/python tools/transcribe_batch.py OUTDIR clip1.mov clip2.mov ..."""
import subprocess, sys, json
from pathlib import Path
import numpy as np
from faster_whisper import WhisperModel
out = Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
m = WhisperModel("small", device="cpu", compute_type="int8")
for f in sys.argv[2:]:
    raw = subprocess.run(["ffmpeg","-v","error","-i",f,"-f","f32le","-ac","1","-ar","16000","-"],capture_output=True).stdout
    a = np.frombuffer(raw, dtype=np.float32)
    segs, info = m.transcribe(a, vad_filter=True)
    text = " ".join(s.text.strip() for s in segs)
    (out / (Path(f).stem + ".txt")).write_text(f"lang={info.language} p={info.language_probability:.2f} dur={len(a)/16000:.1f}s\n{text}\n")
    print(Path(f).stem, info.language, round(info.language_probability,2), flush=True)
