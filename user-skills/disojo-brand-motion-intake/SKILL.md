---
name: disojo-brand-motion-intake
description: Sets up a brand's motion and visual identity before any content is made - a short interview plus reference frames become brand.md (who, what, assets, voice) and MOTION.md (palette with meanings, type, easing, durations, motion personality, layers, layout, sound, never-list) for Disojo, personal or trading. Use when a brand has no look yet (personal and trading do not), when Tejjomay says the design is mid or every brand looks the same, when starting a new client's social or video identity, or before building a design system for a brand.
---

# Disojo brand motion intake

Adapted from charlie947/motion-graphics-skills `brand-intake` (MIT) and the "reference first" and brief-before-code rules in howseen-ai/claude-motion-design (MIT). **Rule: every brand gets its own visual identity. Never reuse another brand's look.** Never call a result on-brand without a real `MOTION.md`.

## State today (2026-10-13)
- `disojo`: `$HUB/brands/disojo/MOTION.md` exists (premium, calm, precise; ink/cream; Host Grotesk; split panels). Design critique from Tejjomay: motion good, design still "mid" (see `disojo-panel-designer/references/known-weaknesses.md`).
- `codewithabel` and `abelkapoor-trading`: identity directions decided as **stills (2026-10-14)**, awaiting approval: see `brands/<slug>/visual-identity.md` and `MOTION.md`; engine theming not built. Run this intake only to refine or if he rejects the direction.

## Interview (one round, skip anything already answered; at most ~8 questions)
1. Who watches, and what should they feel after (trust, calm, urgency, authority)?
2. Three words for the brand's personality; three it must never feel like.
3. Colours: hex codes if they exist, else 2-3 reference images or accounts he admires (take the grammar, never the content or logos).
4. A font preference (or "propose"), a logo/wordmark file, existing posts.
5. Motion personality: Premium (350-600 ms, no overshoot), Corporate (200-400 ms, <=3% overshoot), Energetic (100-250 ms, 15-30% overshoot) or Playful. Pick ONE.
6. Format and where it lives (Reels, LinkedIn 4:5, X, YouTube Shorts).
7. Hard limits: words, claims, topics, compliance (trading: no advice/signals/returns; flag SEBI-adjacent wording).
8. Real proof he can show (numbers with sources, screenshots).

## From references to a look
If he gives reference video or frames: extract a frame every 0.5 s (`ffmpeg -i ref.mp4 -vf fps=2 ref_%03d.png`), look at a contact sheet, and write `style_guide.md`: palette hex, type, typical shot length, transitions, camera, texture, text in/out. Take the grammar, never the content or logos. Wait for his OK before building anything.

## Write the files
1. `$HUB/brands/<brand>/brand.md` from `disojo-reel-studio/engine/templates/brand.template.md` (audience, voice, pillars, proof, off-limits, filming).
2. `$HUB/brands/<brand>/MOTION.md` from `templates/MOTION.template.md` here. Fill every field; **name the one thing each colour means**; define signature easing, a 3-value duration palette and one entrance pattern (80% of animations use them).
3. A design system file `engine/design/<brand>/tokens.css` for carousels (see `disojo-carousel-studio`) and, for reels, panel theme variables (see `disojo-panel-designer`).
4. Render 2-4 **stills** of the look (a carousel cover, a reel hook panel, a caption on bright and dark footage) and show them before building more. Fix, then proceed.

## Checks
Palette has at most ~5 hues, each with a meaning; contrast of caption text on the brightest footage; the look is clearly different from the other two brands side by side; a stranger could say in one sentence what the brand is from a still.
