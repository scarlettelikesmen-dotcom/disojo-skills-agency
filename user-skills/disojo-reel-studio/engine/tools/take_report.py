#!/usr/bin/env python3
"""Read a raw take like an editor: sentences with timestamps, retakes, fillers, long pauses. Use it to write the plan.
  .venv/bin/python tools/take_report.py RAW.mov --out edits/name   (transcribes once, cached in out/transcript.json)"""
import argparse, json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from edit_reel import transcribe, clean_words, norm, FILLERS

ap = argparse.ArgumentParser(); ap.add_argument("input"); ap.add_argument("--out", required=True); ap.add_argument("--model", default="small"); ap.add_argument("--lang")
a = ap.parse_args(); out = Path(a.out); out.mkdir(parents=True, exist_ok=True)
tj = out / "transcript.json"
if tj.exists(): c = json.loads(tj.read_text()); words, lang, dur = c["words"], c["lang"], c["dur"]
else:
    words, lang, dur = transcribe(a.input, a.model, a.lang); tj.write_text(json.dumps(dict(words=words, lang=lang, dur=dur), indent=1))
kept, dropped = clean_words(words)
kept_ids = {id(w) for w in kept}
print(f"{a.input}  {dur:.1f}s  lang={lang}  words={len(words)}  after cleaning={len(kept)}  (retakes found: {len(dropped)})\n")
# sentences: end on . ? ! or a pause > 0.7s
sents, cur = [], []
for w in words:
    if cur and w["s"] - cur[-1]["e"] > 0.7: sents.append(cur); cur = []
    cur.append(w)
    if re.search(r"[.?!]$", w["w"]): sents.append(cur); cur = []
if cur: sents.append(cur)
for i, sg in enumerate(sents):
    flags = []
    if all(id(w) not in kept_ids for w in sg if norm(w["w"]) not in FILLERS): flags.append("RETAKE (removed)")
    elif any(id(w) not in kept_ids and norm(w["w"]) not in FILLERS for w in sg): flags.append("partial false start inside")
    if any(norm(w["w"]) in FILLERS for w in sg): flags.append("filler")
    pause = (sg[0]["s"] - sents[i - 1][-1]["e"]) if i else sg[0]["s"]
    if pause > 1.5: flags.append(f"pause {pause:.1f}s before")
    print(f"[{i:02d}] {sg[0]['s']:6.1f}-{sg[-1]['e']:6.1f}s  {' '.join(w['w'] for w in sg)}" + (f"   <-- {', '.join(flags)}" if flags else ""))
tot = sum(w["e"] - w["s"] for w in kept)
print(f"\nspoken time kept after cleaning: {tot:.1f}s of {dur:.1f}s (plus ~0.2s breathing per phrase). Target reel ~30s: keep roughly {max(0, tot - 30):.0f}s less than this.")
