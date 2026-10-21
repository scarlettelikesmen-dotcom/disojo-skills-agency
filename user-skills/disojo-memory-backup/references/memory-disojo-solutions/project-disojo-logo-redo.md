---
name: project-disojo-logo-redo
description: "Disojo logo/brand redo started 2026-10-21; Tejjo's brief, the 6 reference reels studied, open decisions"
metadata:
  node_type: memory
  type: project
  originSessionId: af288f10-aa9e-4ad6-ae50-afeef2951d0a
  modified: 2026-10-21T17:19:18.873Z
---

Started 2026-10-21. Tejjo wants to "build Claude's taste" and work as a team: Claude does development, Tejjo does sales and marketing. First project is the Disojo site and brand. Content stays; current visuals must not influence the redo.

**Logo brief (Tejjo):** the current logo is too generic ("just disojo written in a pretty font"). The name stays Disojo. Wanted: a hybrid wordmark, or a wordmark and a separate mark. Colours are probably staying ("maybe not colours but logo definitely").

**References studied (6 reels DM'd by tjoe/cjtiax on Instagram):** polidori.dev bakery scroll-video site; jerrythewebdev on alche.studio (the triangle mark IS the A in the wordmark, a hybrid); jackwatsondesigns Nonstop (custom-drawn lettering wordmark, then chrome and cursor-lit 3D in Blender; "it worked because the design existed in Figma first"); jackwatsondesigns Bloom (concept from meaning: petals + spark + inward arrows; mark taken apart into a grid system and 3D objects; the wordmark borrows the mark's angles so the two read as one family); thenickcornelius ("design skill" lead magnet = brand guide + motion + design library + screenshot QA loop); ayzz.thedesigner (redesign of an ads agency: offer as the headline, a focal visual that tells the business, proof right after the hero, then problem, case studies, 4 steps, testimonials, final CTA, one motif carried through).

**Sketched 2026-10-21** in `~/Desktop/DISOJO SOLUTIONS/branding/disojo-logo` (build.py + page.py -> index.html, serve on :4460): A Always on (last o is a switch, on), B Sealed (last o is an even ring with one tile slotted in), C Stages (upper half of the d stem is a separate piece being lowered in). Hanken Grotesk 620, colours ink #131311 / paper #E6DDD6 / blue #2A45F0. Lessons from my own checks: cutting the d stem from its bowl reads 'cl'; a short lifted ascender reads as an i-dot; a radial segment in a ring reads as a pie chart. Awaiting Tejjo's pick.

Related: [[project-site-state-2026-10-20]], [[feedback-logo-taste]], [[feedback-unique-design-per-client]]

**Update 2026-10-21 (later):** Tejjo rejected A/B/C ("disgusting") and asked for a mix of Monolog / Bloom / ALCHE, then pointed at nonstopbranding's abstract handstyle avatar ("something more abstract like"). Exploration sheet `explore.html` (custom squared caps + constructed marks) and `blades.html` (flat-nib pen attempt) both fell short of that bar; I said so. Agreed route: Tejjo generates handstyle options in ChatGPT image (prompts given in chat), then I trace them (potrace installed), clean the vectors and build the system (flat, chrome, avatar, favicon, matching wordmark, motion).

**WINNER 2026-10-22:** Tejjo "love love love" a ChatGPT result from round 3 prompt 01: "DISOJO" in heavy wide rounded grotesk caps, first O = hand-drawn marker loop, last O = hollow rounded square. Source + potrace vector in `branding/disojo-logo/winner/` (source-chatgpt.png, disojo-wordmark-traced.svg, compare.html). Next: redraw caps cleanly (straight stems, even radii, spacing), smooth the loop, then the system (loop O as standalone mark, favicon, light/dark/blue, nav test, draw-on motion). AI-origin: redrawn vectors, disclose that it started from an AI image.
