---
name: feedback-window-scroll-effect
description: "When Tejjo asks for 'that scroll effect, like a window' (Monolog success stories, lilt three-people photo), it is the window parallax, NOT a zoom; approved on CTESCOA hero 2026-11-11"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-11T06:25:19.286Z
---

Tejjo calls it "zoom in, zoom out" or "like a window" and can't name it. It is the **window**: a frame clips a photo about 1.5x taller than itself (T = 0.094 x (viewport + frame height) above and below); as the frame crosses the screen the photo slides inside it, linear, about 0.19px of image travel per 1px of scroll. Measured on bymonolog.com home success stories (frame 500, image 600, 56px per 300px scroll). Code: `lilt-site/site/src/scripts/main.js:74` and `ctescoa-site/site/src/layouts/Base.astro` (class `win`). Turn off any CSS transition on that img or it lags.

**Why:** 2026-11-11 I first described it as a pinned zoom-to-fullscreen; Tejjo said "not really" and pointed to Monolog and lilt. Once built on the CTESCOA hero he said "this is exactly what I wanted". He wants the landing screen to feel alive as you scroll past it, not stagnant.
**How to apply:** when he mentions this effect, use the window code above; confirm which photo, don't propose zooms. Related: [[project-ctescoa]], [[project-lilt]], [[feedback-button-motion]].
