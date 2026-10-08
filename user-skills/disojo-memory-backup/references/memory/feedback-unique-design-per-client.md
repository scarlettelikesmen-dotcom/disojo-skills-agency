---
name: feedback-unique-design-per-client
description: Never ship a new client site that reuses the Postcards/starter look and flow; each client needs its own identity, layout, nav, scroll choreography and footer
metadata:
  type: feedback
---

On the Mochi & Midori build (Oct 2026) the first deploy reused the starter skeleton (cream editorial look, centred nav + black pill, FAQ accordion, giant footer wordmark, curtain, pinned chapters) and Tejjomay reacted angrily: it was "copied entirely from Postcards". A procedural green-cylinder 3D cake also read as cheap.

**Why:** they are selling premium, distinctive sites at 10-20k; a recognisable template defeats the pitch. The starter is Postcards generalised, so it is an engineering base, not a design.
**How to apply:** use `disojo-site-starter` for plumbing only (Lenis, loader store, build/meta scripts, smoke test). For every client choose a fresh palette, type pairing, nav pattern, scroll choreography, section set, transition and footer *before* writing UI, and say what is different in one line. Prefer photoreal client assets over procedural 3D unless the model is genuinely convincing. Reference build: `~/Desktop/websites ARCHIVE/mochi-midori/site` (circle-opening film hero, six full-screen colour chapters with plated cut-outs, corner nav + full-screen menu, allergen chart, ticket footer, circle-wipe transition).

Related: [[feedback-working-style]], [[reference-scroll-site-skill]].
