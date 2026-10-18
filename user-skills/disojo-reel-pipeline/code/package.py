#!/usr/bin/env python3
"""package.py: turn a finished reel into a per-platform upload folder + schedule rows.

  .venv/bin/python package.py NAME --post jobs/NAME/post.json [--video edits/<file>.mp4] [--account abelkapoor|codedbyabel|disojostudio]

post.json (written per reel by Claude, approved by Tejjomay):
  {"account":"abelkapoor","brand":"trading","hook":"Trading is just your self-beliefs.",
   "lines":["One sentence of context.","One more."],"cta":"Save this video.",
   "title":"Trading is just your self-beliefs",            # YouTube Shorts title (<= 100 chars)
   "hashtags":["daytrading","trading","futures"],          # core set; platform variants are trimmed from it
   "disclaimer":true, "ai_disclosure":false, "cover_t":1.0, "slot":"2026-10-26 09:30"}

Writes deliverables/NAME/: <platform>.mp4 (master copy; X/LinkedIn get the small copy), <platform>.txt (platform-shaped copy), <NAME>.srt,
cover-<platform>.png (a different frame per platform: no identical reposts), README.md (checks), and appends rows to deliverables/schedule.csv.
Platform limits below are from my knowledge of 2026 rules and MUST be re-verified in each app before relying on them.
"""
import argparse, csv, json, re, shutil, subprocess, sys
from pathlib import Path

HUB = Path(__file__).resolve().parent
LIMITS = {   # seconds, caption characters (verify in-app)
    "instagram": dict(max_s=180, cap=2200, tags=5),
    "tiktok":    dict(max_s=600, cap=2200, tags=5),
    "youtube":   dict(max_s=180, cap=5000, tags=3),
    "snapchat":  dict(max_s=60,  cap=250,  tags=0),
    "x":         dict(max_s=140, cap=280,  tags=2),
    "linkedin":  dict(max_s=600, cap=3000, tags=3),
}
PLATFORMS = {"trading": ["instagram", "tiktok", "snapchat", "youtube", "x"],
             "disojo": ["instagram", "tiktok", "snapchat", "youtube", "x", "linkedin"],
             "code": ["instagram", "tiktok", "snapchat", "youtube", "x", "linkedin"]}
DISCLAIMER = "Education only. Not financial advice. Trading involves risk."
AI_LINE = "Built with Claude Code."

def tags(core, n): return " ".join("#" + t.lstrip("#") for t in core[:n]) if n else ""

def copy_for(pf, p, lim):
    hook, lines, cta = p["hook"].strip(), [l.strip() for l in p.get("lines", [])], p.get("cta", "").strip()
    disc = DISCLAIMER if p.get("disclaimer") else ""; ai = AI_LINE if p.get("ai_disclosure") else ""
    tg = tags(p.get("hashtags", []), lim["tags"])
    if pf == "instagram": parts = [hook, "", *lines, "", cta, ai, disc, "", tg]
    elif pf == "tiktok": parts = [hook + (" " + lines[0] if lines else ""), cta, disc, tg]
    elif pf == "youtube": parts = [p.get("title", hook)[:100], "", *lines, cta, ai, disc, "", "#Shorts " + tg]
    elif pf == "x": parts = [hook, *(lines[:1]), disc if len(hook) < 150 else "", tg]
    elif pf == "linkedin": parts = [hook, "", *lines, "", cta, ai, disc, "", tg]           # no outbound links in the body (kills reach)
    else: parts = [hook, disc]                                                          # snapchat: one line
    txt = "\n".join(x for x in parts if x is not None).strip()
    txt = re.sub(r"\n{3,}", "\n\n", txt)
    return txt[: lim["cap"]], len(txt) > lim["cap"]

def srt(spec):
    def ts(t): h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60; return f"{h:02d}:{m:02d}:{int(s):02d},{int((s % 1) * 1000):03d}"
    out = []
    for i, c in enumerate(spec["captions"], 1):
        out.append(f"{i}\n{ts(c['t0'])} --> {ts(max(c['t1'], c['t0'] + .4))}\n{' '.join(w['w'] for w in c['words'])}\n")
    return "\n".join(out)

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("name"); ap.add_argument("--post", required=True); ap.add_argument("--video"); ap.add_argument("--account")
    a = ap.parse_args()
    p = json.loads(Path(a.post).read_text()); brand = p.get("brand", "disojo")
    spec = json.loads((HUB / "remotion-lab/public/jobs" / a.name / "spec.json").read_text())
    vids = sorted((HUB / "edits").glob(f"{a.name}-*-v*.mp4"), key=lambda x: x.stat().st_mtime)
    vids = [v for v in vids if not v.stem.endswith(("-small", "-qa"))]
    master = Path(a.video) if a.video else (vids[-1] if vids else None)
    if not master or not master.exists(): sys.exit("no rendered video found: run reel.py render first")
    small = master.with_name(master.stem + "-small.mp4")
    d = HUB / "deliverables" / a.name; d.mkdir(parents=True, exist_ok=True)
    dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(master)], capture_output=True, text=True).stdout.strip())
    notes, rows, base_t = [], [], float(p.get("cover_t", 1.0))
    for k, pf in enumerate(PLATFORMS[brand]):
        lim = LIMITS[pf]
        if dur > lim["max_s"]: notes.append(f"WARN {pf}: {dur:.0f}s is over the {lim['max_s']}s limit (verify in-app)")
        src = small if (pf in ("x", "linkedin") and small.exists()) else master
        shutil.copy(src, d / f"{pf}.mp4")
        txt, cut = copy_for(pf, p, lim)
        if cut: notes.append(f"WARN {pf}: copy trimmed to {lim['cap']} characters")
        (d / f"{pf}.txt").write_text(txt + "\n")
        t = min(dur - .2, base_t + k * 0.9)       # a different cover frame per platform (identical reposts are demoted)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.2f}", "-i", str(master), "-frames:v", "1", str(d / f"cover-{pf}.png")])
        rows.append([p.get("slot", ""), p.get("account", a.account or ""), pf, f"deliverables/{a.name}/{pf}.mp4", f"deliverables/{a.name}/{pf}.txt", "ready"])
    (d / f"{a.name}.srt").write_text(srt(spec))
    sched = HUB / "deliverables/schedule.csv"; new = not sched.exists()
    with sched.open("a", newline="") as f:
        w = csv.writer(f)
        if new: w.writerow(["slot", "account", "platform", "video", "caption", "status"])
        w.writerows(rows)
    if brand == "trading" and not p.get("disclaimer"): notes.append("FAIL trading post without disclaimer: set \"disclaimer\": true")
    (d / "README.md").write_text(f"# {a.name} upload pack\nMaster: {master.name} ({dur:.1f}s). Account: {p.get('account', '')}. Slot: {p.get('slot', 'unset')}.\n\n"
        "Checklist before posting (you post; I never do):\n- [ ] watch the master once with sound on a phone\n- [ ] add trending audio in-app (keep voice audible), per platform\n- [ ] paste the platform text from <platform>.txt (edit freely)\n- [ ] upload captions file (.srt) where the platform supports it\n- [ ] pick the cover frame (cover-<platform>.png) or a better one in-app\n- [ ] trading: disclaimer is in the caption and on screen\n\n"
        + ("Notes:\n" + "\n".join("- " + n for n in notes) + "\n" if notes else "No warnings.\n") + "\nPlatform limits in package.py are from memory (2026): verify in each app.\n")
    print(f"package ready: {d}\n" + "\n".join(f"  {n}" for n in notes) + f"\n  schedule rows added: {len(rows)}")

if __name__ == "__main__":
    main()
