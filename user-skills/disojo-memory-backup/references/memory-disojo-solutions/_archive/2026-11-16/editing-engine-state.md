---
name: editing-engine-state
description: State of the reel editing engine (Remotion v5-v7 pilot), Tejjomay's design verdicts, open editing list, how to run it
metadata:
  type: project
---
Editing is the current focus (2026-10-17). Engine v4 (Chrome PNG overlays + ffmpeg) is superseded by Remotion: source in `~/.claude/skills/disojo-reel-studio/engine-remotion/` (README has the pipeline), working copy `content-hub/remotion-lab/` (node_modules there). Base prep: `engine/tools/make_base.py` (cut, HDR->SDR, grade, voice clean, no overlays). Render: `npx remotion render src/index.ts Reel out/reel.mp4 --gl=angle` (~2.5 min per 27 s).
Latest: `content-hub/edits/disojo-reel-2198-v7-remotion.mp4` = persistent 3D module system (nine rounded modules re-forming per idea, cream protagonist), graded footage, smooth camera, flat Disojo ink/paper panels, wordmark + hairline, lower third.
**Why:** Tejjomay said v4 editing is "very mid" (no transitions, graphics, motion); matters hugely for @disojo.solutions and @codewithabel, trading stays restrained.
**Verdict history:** v5 "not bad but twitching" (cause: stacked zoom pulses on cuts, fixed); v5b "animations good, design mid, the dotted pattern looks AI"; v6 flat typography "too raw"; v7 awaiting feedback. He is sending reference repos.
**How to apply:** read `disojo-motion-craft` section 8 rules before any edit; look at frames (sheet per beat + mid-morph) before claiming quality; never claim audio "sounds good" (measure); phone test not done. Open list: captions redesign, b-roll + scene transitions, codewithabel components (code/terminal animation, screen-recording auto-zoom), trading restrained look, B generator, carousel templates, packager.

## Update 2026-10-17 later
v7 rejected (3D "disgusting"), dropped. v8b approved ("very good"): src/Reel8.tsx + spec8.json (render `npx remotion render src/index.ts Reel8 out.mp4`; SFX via ../.venv python + edit_reel.make_sfx). Recipe: popup panels (v4 behaviour, 2D, real screenshots inside), hard-cut punch zooms, slow push on thesis lines only, word-by-word captions with active-word box, cutaways of real work from ~/Desktop/disojo-hybrid/public/work. Study of louisedesadeleer repos drove it (see DECISIONS 2026-10-17 later).

## LOCKED 2026-10-17: Disojo style = skill `disojo-editing-locked` (v9). Approved by Tejjomay ("lock this in completely"). Next: trading look, then codewithabel.
