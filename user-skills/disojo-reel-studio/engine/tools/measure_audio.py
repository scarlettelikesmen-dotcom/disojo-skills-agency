#!/usr/bin/env python3
"""Measure delivery loudness on the exported file, stereo AND mono (a phone speaker is mono: a mono fold-down reads ~3 dB lower).
  measure_audio.py FILE.mp4 [--target -16] [--tolerance 1.5] [--tp -1.0]
Prints integrated LUFS, loudness range and true peak; exit code 1 if outside the target window. Never judges how it sounds."""
import argparse, re, subprocess, sys

def ebur(path, mono=False):
    cmd = ["ffmpeg", "-nostats", "-i", path, "-vn"] + (["-ac", "1"] if mono else []) + ["-af", "ebur128=peak=true", "-f", "null", "-"]
    r = subprocess.run(cmd, capture_output=True, text=True).stderr
    tail = r[r.rfind("Summary:"):]
    g = lambda k: float((re.search(k + r":\s+(-?[\d.]+)", tail) or [None, "nan"])[1])
    return g("I"), g("LRA"), g("Peak")

ap = argparse.ArgumentParser(); ap.add_argument("file"); ap.add_argument("--target", type=float, default=-16.0)
ap.add_argument("--tolerance", type=float, default=1.5); ap.add_argument("--tp", type=float, default=-1.0)
a = ap.parse_args()
I, lra, tp = ebur(a.file)
ok = abs(I - a.target) <= a.tolerance and tp <= a.tp
print(f"stereo          {I:6.1f} LUFS  LRA {lra:4.1f}  true peak {tp:5.1f} dBFS  [{'ok' if ok else 'OUT OF WINDOW'}]")
Im, lram, tpm = ebur(a.file, mono=True)
print(f"mono fold-down  {Im:6.1f} LUFS  true peak {tpm:5.1f} dBFS  (difference {Im - I:+.1f} dB: informational; a phone speaker is mono, dual-mono voice shows ~0, wide stereo music reads lower)")
print(f"target {a.target:.0f} LUFS +/-{a.tolerance}, true peak <= {a.tp} dBFS (measured on the exported file, not the intermediate WAV)")
sys.exit(0 if ok else 1)
