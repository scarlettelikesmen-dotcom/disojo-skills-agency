---
name: disojo-motion-craft
description: The taste and review rules behind every Disojo motion piece - numeric easing, spring, timing and hold rules, the three motion layers, safe zones, deterministic seek(t) rendering, and a self-review loop that scores frames and fixes only what fails. Use whenever you design, animate, retime, critique or polish motion or video (reels, panels, carousels-in-motion, site motion, intros), when Tejjomay says it looks mid, cheap, bouncy or flat, and before calling any motion piece done.
---

# Disojo motion craft

Distilled on 2026-10-13 from 20 public motion repos (see `disojo-reel-studio/references/research-2026-10-13.md`): claude-motion, claude-motion-design, LottieFiles motion-design-skill, motion-graphics-skills, motion-broll, the HyperFrames student kit playbook (ideas only; its licence is unclear). The numbers are starting points you deviate from on purpose, not by accident.

## 1. Before animating anything: five questions
1. What should the viewer **feel**? (calm, urgency, authority.) Disojo reels are **premium, calm, precise**, not playful.
2. What is the micro-story? setup, action, resolution. One idea per beat.
3. What is the **primary** motion (the thing to follow), the **secondary** (supporting richness) and the **ambient** (always-on life)? Flat animation = a missing layer.
4. Does it need to animate at all? Motion must guide attention, communicate state or keep continuity. Otherwise cut it.
5. What does the brand's `MOTION.md` say? (`brands/<brand>/MOTION.md`; create one with `disojo-brand-motion-intake` if missing.)

## 2. Numbers
| Thing | Rule |
|---|---|
| Entrance easing | `cubic-bezier(.23,1,.32,1)` (strong ease-out). Moves between states `cubic-bezier(.77,0,.175,1)`. Linear only for continuous motion (drift, rotation, holds) |
| Springs | damping ratio zeta = c / (2*sqrt(k)) **>= 0.72**; overshoot under ~4%. Engine presets: pop 300/26, soft 220/24, heavy 140/19. One elastic accent per piece at most |
| Never | scale from 0 (start >= .85 with opacity + blur), `ease-in` on entrances, bounce on text, particles, glow gradients |
| Enter | opacity + 20-30 px lift + 6-8 px blur resolving sharp; text rises out of a mask |
| Exit | about half the entrance, quiet (opacity + small lift) |
| Stagger | 55-70 ms between words/items |
| Reading holds | >= 1 s for a short phrase, +0.25 s per word beyond three; >= 2 s on the last hook. When in doubt hold longer, animate less |
| Scene length | 1.5-3 s; nothing mid-piece static for > 1 s; every ~7-8 s of density give a ~1 s rest beat |
| Safe zone (9:16) | key text in y 296..1420, out of the right 120 px, nothing in the bottom ~500 px |
| Frame 0 | a real image (it is the autoplay thumbnail) |
| First change | lands 0.6-1.0 s in |

## 3. Look rules
- One accent colour with a meaning; palette tokens, no new hex in components.
- One thing moves at a time; transformations, not cuts ("premium = one object changing shape").
- Keep a **ghost of the start state** after a change so the eye follows it.
- Texture: grain (about 8%, reseeded on twos), vignette, slow drifting grid. Nothing is dead-still; a small thing stays alive in every hold (ring pulse, sway).
- Type is a character: scale it, one italic accent word per line, mono labels are decoration only.
- Real data only; anything illustrative is labelled. Never invent numbers, quotes or results.

## 4. Render deterministically
Every frame is a pure function of time `t`: no CSS transitions, timers, `Math.random` (seed it), `Date`. Drive third-party animation by seeking: WAAPI `document.getAnimations().forEach(a=>{a.pause();a.currentTime=t*1000})`; GSAP `tl.pause(); tl.totalTime(t+.001,true); tl.totalTime(t,true)`. Wait 2 rAFs after each seek before the screenshot. Capture each overlay layer in isolation. A WAAPI effect-level `easing` warps keyframe offsets: use linear at effect level and ease per keyframe. Motion blur (if used): sub-frames over a 180 degree shutter, adaptive to speed, never across a hard cut.

## 5. The review loop (mandatory before "done")
You cannot watch video; you can look at frames. Never report done without looking at the current render.
1. Sheet: one frame per beat plus 0.3 s after, phone-size tiles (300 px wide). `engine/tools/verify_reel.py` makes one.
2. Zoom suspicious moments: frame strips (12 frames) across every cut and every fast move.
3. Score each shot /10 on readability at phone width, rhythm, shape continuity, branding/consistency, composition. **Fix shots at 7 or below; do not touch 9+.**
4. Checklist: one focal point; no collisions during swaps; nothing clipped; key message readable shrunk; text not moving while being read; exits faster than entrances; same element looks the same everywhere; frame 0 real; safe area respected.
5. Silent test: with sound off, can a viewer say what it shows in one sentence? If they hesitate, too much moves.
6. Report: what you checked, what you fixed, which sheet shows it. Never claim a fix you have not re-rendered and looked at.

## 6. Anti-patterns
Everything fading in at once; the same duration for everything; linear easing on anything that starts or stops; text that moves while it should be read; two focal points; empty or black frame 0; a fade between two pictures instead of a morph; bouncy cheap springs; invented data; the same look as every other "AI motion" post.

## 7. The loop that makes it better
Every note Tejjomay gives becomes a permanent rule: fix the piece, then write the rule into the relevant skill (rule, check or script change) so he never gives the same note twice.

## 8. Rules added 2026-10-17 (from Tejjomay's notes on the Remotion pilot; apply always)
- "Twitching" = stacked zoom changes. Never add a kick/pulse on a frame that already has a hard-cut zoom jump; emphasis swell amplitude <= 1.5% with a soft attack (no instant jump) and slow release; no blur kicks; cap per-frame zoom change inside a segment at about 1% (measure it).
- Dot grids, radial glows, vignette-on-panels, tracked all-caps eyebrow labels, italic single-word accents, avatar circles, stock icon graphics (code bars, seesaw, growth chart) are AI tells: do not use.
- But flat type-only panels read as "too raw" too: use ONE persistent hero object that re-forms between ideas (built in code with real light, shadow, material), graded footage, one hairline and one wordmark. The anti-slop and taste skills are web-UI skills: apply the principles, not the code.
- Titles top, object grounded at the seam; nothing overlaps; check a settled frame per panel and a mid-morph frame.
- Grade the footage (lift shadows, calm the orange cast, slight clarity); it is part of the design, not an extra.
