---
name: feedback-port-elements-only
description: "When bringing pieces from a concept (e.g. disojo-v4) into the live Disojo site, add only the element asked for; never touch existing positioning, spacing or fonts"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-10-27T19:02:06.189Z
---

Tejjo (2026-10-28), porting the v4 "Two O's" concept into ~/Desktop/disojo-hybrid: "nav bar positioning and spacing dont touch, just add that beautiful square that pops up on hover, dont change font anything, just elements okay? remember this for future".

**Why:** they like the live site's layout and type as it is; they want only the named concept elements layered on, not a restyle.

**How to apply:** when Tejjo names a concept piece to bring across, add it as a new element or effect only (absolute/pseudo-elements, extra CSS in a marked block at the end of global.css), and measure before/after that nothing else moved (positions, widths, font). Do not carry over the concept's fonts, sizes, gaps or colours unless named. Workflow: iterate at localhost:4430 (fresh dev server), deploy only on "deploy". Related: [[project-disojo-v4-concept]], [[feedback-how-tejjo-iterates]].
