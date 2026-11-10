---
name: feedback-no-npc-nav
description: "Hard rule 2026-11-10 - never ship the blurred full-width top bar with same-size links; the nav comes from the idea, three options in words"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-10T05:43:11.331Z
---

Never ship the "NPC nav": a full-width bar pinned to the top with a blurred backdrop, logo left, a row of links all in one size. Tejjo on Kiran Roy, 2026-11-10: "very NPC, old school... same old blur effect every 2008 site has."

**Why:** the starter shipped that nav and nobody designed the nav from the idea, so every site got it.

**How to apply:** propose the nav in words (three options) alongside the first screens, tied to the picked idea; one action louder than the rest, log in quieter. Kiran Roy's locked answer: the headstock is the menu (links flank the headstock, fold into a headstock tab, menu = six tuning pegs, Prebook in red always on screen). Enforced in disojo-site-system: SKILL.md hard rule, defaults-to-avoid.md, starter base.css comment, premium_gate.cjs NAV_CHECK fails a blurred top bar or 4+ nav links in one size/weight/face. Related: [[feedback-text-button-roll]], [[feedback-multipage-no-basic-ctas]].
