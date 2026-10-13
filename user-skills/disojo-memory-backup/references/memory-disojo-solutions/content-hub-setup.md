---
name: content-hub-setup
description: "Tejjomay's content production desk (content-hub/) for Disojo, personal brand and trading; what exists, what is untested, what is still needed from them"
metadata:
  node_type: memory
  type: project
  originSessionId: daca52f2-769c-4755-896e-17d66f27b274
  modified: 2026-10-13T14:53:30.206Z
---

Content hub built 2026-10-13 at `~/Desktop/DISOJO SOLUTIONS/content-hub` (see its CLAUDE.md for tools and rules). Installed Ootto-AI/claude-content-skills (53 skills, reviewed, safe; marketing footers inside) into ~/.claude/skills.

Tejjomay films raw footage; Claude does hooks, scripts, simple cuts, brand captions, carousels, review. They want SIMPLE edits ("simple cuts, simple caption, a little motion"), well-designed carousels, a design system per brand.

**Done and verified (visually):** Disojo design system v1 (`design/disojo/tokens.css`: #131311/#E6DDD6/#E8E8E3, Host Grotesk, JetBrains Mono, wordmark from logo/justtext.png), carousel renderer, reel pipeline (faster-whisper + ffmpeg + Chrome-rendered captions).
**Untested:** Hinglish/Hindi transcription, fresh raw footage, 120fps clips, anything on a real phone/Instagram.
**Still needed:** brand.md answers for personal + trading (colours/look not given; trading compliance: SEBI status, what they sell, provable results), fresh raw footage. Existing reel files all have baked captions. LEADVIX REELS contains AI-generated footage, not theirs.

**Why:** Trading content must avoid advice/unverified results; each brand needs its own look (see [[feedback-unique-design-per-client]]).
**How to apply:** read brand.md first; show transcript before editing; render and look at frames before presenting.

**Font decision (2026-10-13):** Tejjomay compared 12 bold reel fonts, briefly picked Anton, then settled on keeping Host Grotesk for reels. Don't re-suggest fonts. They like large captions. Motion demos (8 scenes) exist in tools/motion-lab.html; not yet wired into edit_reel.py.

**2026-10-13 later:** Tejjomay judged motion demo v1 "mid"; rebuilt as `tools/timeline.html` (skills-based easing, blur enter, idle push, 1.2s claim wipe). Voice clean + loudnorm + music ducking added to edit_reel.py. Voice profile for trading/personal derived from 18 of their own reel transcripts (`brands/trading/voice.md`): hook A/B/C variants over one body, "Most traders don't lose because X, they lose because Y", honest humility is the differentiator. Merged copy rules in `content-hub/copy-rules.md`. Still unported motion: lower third, stat, underline, steps.
**Plan workflow built 2026-10-13:** take_report.py + plan.json (keep ranges, hook, emphasis, callouts) + spring/marker motion. Waiting on Tejjomay's 1-1.5 min raw clip to cut into a 30s reel. Old IMG_4094 used only as a test.
**IMG_2198 Disojo reel (2026-10-13):** 94s raw -> 28.0s via scripts/plan-disojo-2198.json. Whisper (small AND medium.en) hears 'cream software'; captioned as 'clean' via plan.fix, flagged for Tejjomay to confirm. Source peak -0.6 dBFS (possible clipping). Fixed along the way: chunking at cut boundaries, mid-sentence capitals, caption contrast on bright footage, overlay layer seam (capture layers in isolation).
**v3 (2026-10-13):** Tejjomay said v2 was 'just captions' and asked for engaging motion 3 times. Added illustrated cards tied to his words, zoom pulses, synthesized SFX. Lesson: don't ship a captions-only edit when he asks for motion; build visuals that illustrate the content.

**2026-10-13 end of session: workflow packaged as skills** `disojo-reel-studio` (main, includes engine/ with tools, fonts, design, templates; scripts/setup.sh; references plan-schema, motion-rules, lessons), `disojo-carousel-studio`, `disojo-content-copy`. Pointer added to ~/.claude/CLAUDE.md. Hub tools/design/assets/fonts are symlinks to the skill engine; old copies in content-hub/_archive_pre_skill. Verified by running the documented flow from skill paths on IMG_4112. NOT yet pushed to the skills GitHub repo (ask first; see disojo-memory-backup). Still open: personal/trading brand looks, trading compliance answers, whether synthesized SFX sound good, more card types.

**v4 (2026-10-13 night):** after reading the 20-repo motion article he said design/motion were still "mid". Studied all repos (notes in skill `references/research-2026-10-13.md`). Built: HDR(HLG)->SDR BT.709 tone-map (his iPhone clips are HDR; old exports were flat gray), split-layout visual panels (top 880px panel, speaker bottom, boxed captions on the seam), real CC0 SFX kit (no synthesized beeps), springs damping>=0.72, grain/vignette/dot-drift, frame-0 pre-roll, verify_reel BT.709 + frame-0 checks, brands/disojo/MOTION.md. Tone-map look (280 nit, sat .85) chosen by eye: ask him to compare one frame with the iPhone Photos app. Not pushed to the skills GitHub repo. Next upgrades: persistent morphing panel (motion-broll idea), whip transitions (HyperFrames catalog), music bed, personal/trading brand looks.

**2026-10-13 end of day:** created sister skills from the 20-repo study: disojo-motion-craft, disojo-sound-design, disojo-short-form-playbook, disojo-reel-export, disojo-brand-motion-intake, disojo-panel-designer (+ engine tools measure_audio.py, export_safe.py). Tejjomay's verdict on v4: motion good, "design is kind of mid", to be fixed next session: start from disojo-panel-designer/references/known-weaknesses.md and show STILLS before building. He authorised pushing everything to the skills GitHub repo (done via disojo-memory-backup; backup now also includes this project's memory and the content-hub text files). He said good night: resume tomorrow.
