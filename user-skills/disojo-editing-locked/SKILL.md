---
name: disojo-editing-locked
description: LOCKED style and motion for Disojo (@disojo.solutions) talking-head reels, approved by Tejjomay 2026-10-17 (v9). Use for ANY Disojo reel edit, "make a Disojo reel", "edit this clip", panel/popup animations, captions, cutaways, or when asked what the Disojo edit looks like. Gives the exact look, motion numbers, pipeline A to Z, QA gate and the skills to chain. Do not redesign it; extend it.
---

# Disojo editing, LOCKED (v9, 2026-10-17)

Tejjomay approved this ("very good", "lock this in completely"). It is the house style for **@disojo.solutions**. Do not reinvent, restyle or add 3D. Extend only by adding panel types or cutaways in the same language. Other accounts reuse the engine but get their own look (see "Other accounts").
Reference: `reference/v9-contact-sheet.png` (8 frames), full source in `reference/src/`, finished render `~/Desktop/DISOJO SOLUTIONS/content-hub/edits/disojo-reel-2198-v9.mp4`.

## The look (one paragraph)
Full-frame talking head, graded warm and soft. At concept beats a flat **panel drops in from the top** (v4 popup), the speaker shrinks into the bottom 1040 px, the panel closes back up when the idea ends. Panels are flat ink or paper with big Host Grotesk type, one highlighted phrase, and a REAL artifact (own screenshot) or a simple animated diagram under the title. Words appear one at a time as captions with the spoken word in a box. Emphasis words get an instant hard-cut punch zoom. Proof moments cut to a full-screen cutaway of real work on cream, sliding up. No 3D, no dotted/grid patterns, no glows, no eyebrows, no gradients on type, no emoji.

## Tokens
- Ink `#131311`, Cream `#E6DDD6`, Paper `#E8E8E3`. Font **Host Grotesk** (variable, in `engine/fonts`), weight 800 for display, tracking -0.05em. Wordmark `reference/assets/wordmark.png` (white; invert on paper). Grain overlay `grain.png` 4 percent, overlay blend.
- Canvas 1080x1920, 30 fps. Output h264 crf 17, yuv420p, bt709, audio aac. Voice -16 LUFS (measure, never "sounds good").

## Geometry
- Panel height 880 (`PANEL_H`). Layout progress `pp` = sum of panel springs (enter `SP.heavy` damping 26 stiffness 120; exit same). Video container `top = 880*pp`, height `1920-880*pp`; inner video `top = -140*pp`. First panel (t0 = 0) is open from frame 0.
- Panel inner: wordmark top-left (64,64, h34), hairline at y128, title block top 300 (170 when an image is shown). Hook size 150px, two lines 112px, one line 128px. Each title line masks up (translateY 110% to 0, spring `SP.pop`, 0.09 s stagger). Key phrase gets a box that wipes in (scaleX spring), text flips to opposite colour. Image card: radius 24, width 560-640, top 440, rises 80px with `SP.heavy`. Bottom hairline 16 percent.
- Diagrams (see `Diagram` in Reel8.tsx): **loop** = dashed ellipse (rx 330, ry 125) with two nodes "You"/"Us" and two dots circling (2.4 rad/s); **rise** = four outlined bars (90/170/260/360) building in sequence, the last filled. Add new diagram types the same way: outline first, one filled hero, spring in, no numbers unless the speaker said them.
- Panel types in spec: `hook` (t0 0), `img` (title + real image), `loop`, `rise`. Alternate dark/light panels.

## Motion rules (numbers matter)
- **Punch zoom:** HARD CUT in at the word onset minus 0.03 s, hold 0.4-0.75 s, HARD CUT out. Peak 1.16-1.26, focal point (50%, 30%) on the face. Never eased, never stacked on a jump cut, at most ~1 per 4 s, none while a panel is open if it fights the layout.
- **Push:** one slow linear push (to 1.07-1.09) across a thesis line. The only smooth zoom.
- **Captions:** phrase groups from the transcript; words are hidden until spoken; the active word sits in a box (cream box + ink text on video, ink box + cream text on cream cutaways). 104px, weight 800, tracking -0.045em. Emphasis words scale 1.1 then settle (`1.1 + 0.1*exp(-dt/0.12)`). Position y 1380 normally, **1710 while a panel is open** (keeps the mouth clear), cutaways use their own `cy`.
- **Cutaway:** real work only (from `~/Desktop/disojo-hybrid/public/work`: phone screenshots, hand-held phone, Ascender quote, Postcards). Cream background, image 1000 wide (phones 644x1400), radius 26, soft tinted shadow, slow 5 percent push. Enter: slide up from bottom (spring damping 30 stiffness 320); exit: slide down over the last 0.14 s. 1.5-2.1 s long, on or just after the word, never before. Never the speaker's own face. Landscape shots as a card, never stretched.
- **Lower third:** 64px left, y 1620, 3px rule + name 44px + role 32px, only while no panel/cutaway is up, one time in the first 8 s.
- **SFX:** real CC0 kit only (`edit_reel.make_sfx`), tick on each punch, pop on each cutaway, whoosh on each panel open/close. Sparse. Never synthesise sounds. Keep the bus at -25 dBFS-ish relative to voice.
- No stacked effects: a beat gets ONE move (panel, punch, or cutaway), not two.

## Pipeline A to Z
1. **Intake:** raw clip in `content-hub/inbox`. Probe (ffprobe), check HDR (HLG to SDR chain), orientation.
2. **Transcript + cut:** skill `disojo-reel-studio` (`engine/tools/make_base.py`, `take_report.py`): faster-whisper words, keep the LAST take of retakes, cut dead air >0.28 s, tighten to 20-35 s. Show him the transcript (Whisper mishears: "clean" as "cream"; use plan.fix).
3. **Base:** `make_base.py` writes `base.mp4` (graded, voice cleaned, loudnorm) + `base.json` + `timeline.json` (caption groups with `emph`).
4. **Beat sheet:** read the transcript; per idea choose ONE move: panel (concept), punch (emphasis), cutaway (proof/artifact), diagram. Source artifacts honestly: only real screenshots/recordings of own work, only verified claims (CLAUDE.md "Verified claims"). No invented stats, clients, prices. Mark every claim about others or promises (care, results) in the delivery note.
5. **Spec:** copy `reference/src/spec8.json`, fill `captions` (from timeline.json), `punches [t, peak, hold]`, `pushes`, `cutaways`, `panels`, `lowerThird`, `duration`.
6. **Project:** Remotion lab at `content-hub/remotion-lab` (node_modules there) or recreate from `reference/src` (+ `public/`: base.mp4, sfx8.wav, grain.png, wordmark.png, fonts/, work/). Register `Reel8` in Root.
7. **SFX:** `../.venv/bin/python` (has numpy) + `edit_reel.make_sfx(events, duration, 'public/sfx8.wav')`.
8. **Stills first:** `npx remotion still src/index.ts Reel8 out.png --frame=N` at every panel, cutaway, punch and caption edge; tile and LOOK. Fix overlaps (panel image must end above y 880; captions off the mouth).
9. **Render:** `npx remotion render src/index.ts Reel8 edits/<name>-vN.mp4` (~2 min for 27 s). Bump the version in the filename.
10. **Verify:** loudness `ffmpeg -af loudnorm=print_format=summary -f null -`, size, resolution 1080x1920, duration. Frame-check cuts. Honest limits: not phone-tested, SFX not judged by ear.
11. **Deliver:** SendUserFile + short honest verdict (what was verified, what was not). Then `disojo-reel-export` / packager for per-platform files.
12. **Record:** append DECISIONS.md and the memory note when something is decided.

## Skills to chain (sweep ALL, say what was used)
`disojo-reel-studio` (engine, base prep), `disojo-motion-craft` (section 8 rules), `disojo-panel-designer`, `disojo-site-system`, `disojo-content-copy` (hooks/scripts), `disojo-short-form-playbook`, `disojo-sound-design`, `disojo-reel-export`, `disojo-carousel-studio`, `disojo-brand-motion-intake` (other accounts), `disojo-content-os`; design taste: `anti-slop-design`, `design-taste-frontend`, `high-end-visual-design` (apply to panel design, not 3D); `disojo-3d-lookdev` only for non-reel work (3D is banned in this style). Study repos used: louisedesadeleer cut-video, add-zooms, b-roll-finder, color-correct, clipify (hard-cut punch zooms, real-artifact cutaways, word-by-word captions, aggressive cutting, grade checked on frames).

## Never
3D objects, dotted/grid patterns, glows/blobs, eyebrow labels, single-word italics, emoji, eased or stacked zooms, blur-flash transitions, synthesised SFX, invented screenshots or stats, the speaker's own face as b-roll, captions over the mouth, music without a licence, claiming "sounds good". Never reuse this look for abelkapoor or codewithabel.

## Other accounts (engine reused, look NOT)
- **codewithabel:** same pipeline and motion discipline; look = cobalt `#2338FF` + acid `#D9FF3F` + ink, Bricolage Grotesque, giant outlined DAY number, code/terminal panels, screen-recording auto-zoom. Build as `disojo-editing-locked`'s sibling after approval.
- **abelkapoor-trading:** restrained "Rulebook" look (off-white/black/red, Big Shoulders + Newsreader italic, B&W speaker), clean captions, chart overlays, purposeful zooms. Fewer effects than Disojo.

## Open (not part of the lock)
Per-reel generator that writes spec8.json from a transcript; carousel/PDF; packager; music licence; phone test.

## Lesson 2026-10-17: "twitching" = corrupt frames from Remotion OffthreadVideo (trading clip)
Symptom: render flashes single garbled frames (tiled/striped) in pairs. Cause: Remotion seeking the crf-16 long-GOP base.mp4. Fix: re-encode the base for Remotion as all-intra (`ffmpeg -i base.mp4 -c:v libx264 -crf 14 -g 1 -bf 0 -pix_fmt yuv420p ... public/base.mp4`, ~390 MB, local only) and render with `--concurrency=1`. Detect: per-frame mean abs diff on a 108x192 gray copy; any consecutive pair >12 outside a panel slide = corrupt. Also: handheld close-ups get a virtual-tripod pass (`scripts/stab_t2257.py` pattern: phase-correlation per frame, subtract +-8 frame moving average, translate the video layer, scale 1.10) and `scripts/measure_shake.py` (face region only, never include overlay text). Fewer cuts: only cut pauses >=0.6 s, leave 0.3 s.


> 2026-10-18: steps 5-10 of the pipeline above are now automated by skill `disojo-reel-pipeline` (`reel.py prep/spec/render/qa`, jobs per reel, all-intra base, QA gate). The look and motion numbers in this skill remain the source of truth.
