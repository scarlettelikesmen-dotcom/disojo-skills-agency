---
name: feedback-button-motion
description: How Tejjo wants hover motion to feel: strong ease-out like bymonolog.com, not ease-in-out and not fast
metadata:
  type: feedback
---

Hover motion on buttons should use a strong ease-out: cubic-bezier(.16,1,.35,1) at about 0.6s for the label roll and twin arrows, plus a small shrink of the arrow box, a light-up on hover and a springy press. This was measured from bymonolog.com; on 2026-11-02 Tejjo said "there it is, finally".

**Why:** ease-in-out at 0.4s felt dead to him, and cutting it to 0.2s made it worse. What makes motion feel alive is that most of the movement happens in the first ~100ms and then it glides to a stop. Total time matters less than the curve.

**How to apply:** for any hover or press motion on Disojo or client sites, start from this curve. Don't answer "it feels dead" by changing the duration; change the curve. Measure the reference site frame by frame before copying it. Live implementation: end of global.css in ~/Desktop/disojo-hybrid (`--b-alive`).

Related: [[project-disojo-graphite-palette]]
