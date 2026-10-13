#!/usr/bin/env python3
"""python tools/transcribe_words.py RAW.mov OUT.json [model]  -> word list with probabilities (for checking low-confidence words)."""
import sys, json, subprocess, numpy as np
from faster_whisper import WhisperModel
raw = subprocess.run(["ffmpeg","-v","error","-i",sys.argv[1],"-f","f32le","-ac","1","-ar","16000","-"],capture_output=True).stdout
a = np.frombuffer(raw, dtype=np.float32)
m = WhisperModel(sys.argv[3] if len(sys.argv) > 3 else "medium.en", device="cpu", compute_type="int8")
segs, info = m.transcribe(a, word_timestamps=True, vad_filter=True, language="en", initial_prompt="Disojo is a software studio. Clean software, agencies, business.")
json.dump([dict(s=w.start,e=w.end,w=w.word.strip(),p=round(w.probability,2)) for sg in segs for w in sg.words], open(sys.argv[2],"w"), indent=1)
print("done")
