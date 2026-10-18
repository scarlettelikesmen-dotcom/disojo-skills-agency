---
name: disojo-reel-pipeline
description: The one-command reel, carousel, chart-overlay and per-platform packaging pipeline (built 2026-10-18) for Disojo (@disojostudio), Coded by Abel (@codedbyabel) and trading (@abelkapoor). Use whenever a clip must become a finished reel, a carousel (PNG + LinkedIn PDF) or an upload pack. Gives the exact commands, brand modes, job layout, QA gate and rules learned (all-intra base, safe zone, corrupt-frame scan, calm pause cutting). Code lives in content-hub (reel.py, package.py, carousel.py, chart_probe.py, remotion-lab) and is mirrored in this skill's code/ folder.
---

# Reel pipeline (one command per stage)
All commands run from `~/Desktop/DISOJO SOLUTIONS/content-hub` with `.venv/bin/python`. Styles: Disojo = `disojo-editing-locked` (v9, never redesign); trading = lite by default (raw selfie, one hook line, plain captions) or Rulebook panels; Coded by Abel = Disojo engine for now (own look not built yet). Posting is always Tejjomay's.

## 1. Reel
```
reel.py prep CLIP --job NAME --brand disojo|trading|code [--keep 0-10,24-31] [--stab] [--energy]
   -> transcribe (cached), cut pauses, graded SDR base, all-intra copy for Remotion, word map, BEAT SHEET (word:time)
   (write jobs/NAME/plan.json: hook, emphasis words, panels, punches, cutaways, lowerThird; see plan keys below)
reel.py spec NAME --plan jobs/NAME/plan.json   -> remotion-lab/public/jobs/NAME/spec.json (captions auto-grouped, SFX events)
reel.py render NAME [--comp Reel8|TradeLite|Trade]   -> SFX, Remotion render (1 frame at a time), QA gate, small delivery copy (<30 MB)
reel.py qa FILE [--job NAME]      reel.py make CLIP --job N --brand B --plan P   (all stages)
```
Plan keys: `brand`, `emphasis:[words]`, `breaks:[times]`, `hook:{lines:["TEXT","*EMPHASIS* LINE"]}` (trading lite), `panels` (types: hook, img, loop, rise for Disojo; title, list, stack, chart for Rulebook), `punches:[[t,peak,hold]]`, `pushes:[[t0,t1,peak]]`, `cutaways:[{t0,t1,img,w,h,y,cy}]`, `lowerThird`, `stab:true`, `sfx:true|false`.
Brand modes: disojo = cut gaps >0.28 s from the transcript; trading = energy-based pauses >=0.6 s, leave 0.3 s (fewer, calmer cuts; the 17-cut version twitched).
Job layout: `jobs/NAME/` (transcript, base.json, words_edit.json, beats.txt, plan.json) and `remotion-lab/public/jobs/NAME/` (base.mp4 all-intra, spec.json, sfx.wav). Never reuse one base for two reels.
QA gate (hard FAIL stops delivery): 1080x1920, 30 fps h264 yuv420p, bt709 tags, loudness -17..-14 LUFS, true peak <= -1, no corrupt frames; WARN: duration, mono fold-down, caption bottom above y 1420 (safe zone). A contact sheet `<video>-qa.png` is written: LOOK at it before showing.

## 2. Chart overlays (trading)
`chart_probe.py CHART.mp4 --t 3` writes a frame with a 0-1 grid so positions can be read. Overlays go in a panel (`{"type":"chart","video":"chart.mp4","srcStart":0,"crop":[x0,y0,x1,y1],"aspect":1.778,"overlays":[...]}` in Rulebook comp `Trade`) or a lite cutaway (`cutaways:[{t0,t1,video,crop,overlays}]` in `TradeLite`). Overlay kinds: `line`, `box` (hot = red = WALL), `arrow`, `tag`, `tick` (CISD). Times are absolute reel seconds, pinned to spoken words. Chart file goes in `remotion-lab/public/jobs/NAME/chart.mp4`. LIMIT: overlays are fixed on the recording frame: they do not follow a scrolling/zooming chart, so record with a static view or tell me to track. Never use fake market data in a published post (the demo chart is labelled SAMPLE).

## 3. Carousel
`carousel.py SPEC.json OUTDIR` -> slide PNGs (1080x1350), layout warnings (overflow/footer collisions), `<name>.pdf` (LinkedIn document), `_sheet.png`. Brands: `disojo`, `trading` (Rulebook), `code` (Coded by Abel, cobalt/acid, giant outlined number). Types: cover, point, cta, list, compare, stamp, image (real chart screenshot + tags), code. Specs in `content-hub/carousels/`.

## 4. Upload pack
`package.py NAME --post jobs/NAME/post.json` -> `deliverables/NAME/` with per-platform mp4 + shaped caption (.txt), `.srt`, a different cover frame per platform, README checklist, rows appended to `deliverables/schedule.csv` (fill slot, mark posted). Platform limits in the script are from memory: verify in-app. Trading posts require `"disclaimer": true`.

## Rules learned (do not relearn)
- Remotion must read an ALL-INTRA base (`-g 1 -bf 0`); long-GOP seeking produced garbled frames that looked like twitching. reel.py does this.
- Render with `--concurrency=1`. Check with the QA gate, not by eye alone.
- Captions: keep inside y <= 1420 (apps draw UI below). Disojo's approved panel layout keeps captions lower over the shirt (WARN, Tejjomay's call: parked question).
- Handheld close-ups: fewer cuts + `--stab`, tripod on set. 4K30 SDR (HDR off) from the phone.
- Trading: disclaimer on screen + in caption; no win-rate/income claims; tier-1 copy (no WhatsApp/UPI/QR wording).
- Back up with `~/.claude/skills/disojo-memory-backup/scripts/backup_memory.sh` (code is included now; footage and renders are not).
