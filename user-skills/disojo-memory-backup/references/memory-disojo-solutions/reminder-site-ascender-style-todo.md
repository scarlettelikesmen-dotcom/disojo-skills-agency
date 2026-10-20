---
name: reminder-site-ascender-style-todo
description: "Tejjo's to-do for the Disojo site noted 2026-10-19 (not started): white brief section, copy Ascender Media site's look, font and background, \"up down feature\""
metadata:
  node_type: memory
  type: project
  originSessionId: 60ef3da9-acfc-4f23-89f1-e7c9ce0538c6
  modified: 2026-10-19T00:41:29.782Z
---

On 2026-10-19 Tejjo said: "just put this in a to-do to do next time. Don't do anything." Remind them at the start of the next Disojo site session and ask for the details they said they would give.

1. Make the "We build [websites / apps / dashboards / tools] for owner-run businesses" section (home `#brief`, the rolling-word section, currently the dark "end" world) **white / light** as well.
2. **ascendermedia.in** (voice-dictated as "sender media.in"; the Ascender Media site Disojo built, code `~/Desktop/websites ARCHIVE/ascender-media/site`): Tejjo thinks it looks better than their own site. List things to copy from it so disojostudio.com looks as good (they will say which).
3. Copy the **font** used on the Ascender Media site (they find it very clean). Check the real font in that site's CSS first; never guess.
4. Copy the **background colour** of the Ascender Media site (very clean; the home world for Ascender already uses #F3F3F0 / #121214).
5. The **"up down feature"** = the Ascender site's button hover motion (Tejjo pasted the details, 2026-10-19 night; source is `src/index.css` and the component CSS of the Ascender site). See the section below. Still to ask: which Disojo buttons and links get it.

**Why:** the Disojo site should match the quality of the Ascender flagship.
**How to apply:** do nothing until Tejjo gives the details; ask about item 5 first. Iterate on localhost (http://localhost:4399), preview push occasionally, deploy only on "deploy" (see [[feedback-how-tejjo-iterates]] and [[project-our-work-rebuild-options]]).


## Ascender hover and motion details (pasted by Tejjo, to copy later)
- **Text roll** ("rolling text", slot-machine hover): two copies of the label, `.roll-a` and `.roll-b`. On hover the first goes `translateY(-125%)` and the second comes up from 125% to rest.
- **Arrow swap** ("arrow island"): two arrows in a clipped box (`.ar-a`, `.ar-b`). On hover the first goes `translate(130%, -130%)` and the second goes to `none` (arrives from bottom left).
- **Scale-up hover**: the hero button uses `transform: scale(1.04)` on hover.
- **Underline draw** (grow from left): pseudo-element with `scaleX(0)` to `scaleX(1)` on hover; used on the pricing and process rows. Plain links use a normal `text-decoration: underline` with an offset.
- **Hover lift**: the proof chat bubbles use `translateY(-0.5rem)` on hover.
- **Easing** (the "bounce" feel is expo-out, not a real bounce): `cubic-bezier(0.16, 1, 0.35, 1)`; the click "press" curve is `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Scroll reveal** (`.rv`): content slides up and fades in as it enters the screen. **Masked word reveal** (`.cut`): headline words rise out of a hidden line, staggered.
Read the Ascender site's real CSS before copying; verify the names and numbers there.

**Done 2026-10-20 (localhost + preview, not deployed):** item 1 (brief section now `data-world="base"`, light) and item 5 (Ascender hover motion: `src/scripts/ui.js` wraps `.btn`/`.sg-go` labels and arrows; CSS `.roll`, `.ar`, underline draw, hero button scale at the end of global.css). Sounds built too: `src/scripts/sound.js` (Web Audio, on by default, toggle `.snd` next to Build with us, saved in localStorage `dsj-sound`). Items 2, 3, 4 (copy Ascender's look, font, background) still open.
