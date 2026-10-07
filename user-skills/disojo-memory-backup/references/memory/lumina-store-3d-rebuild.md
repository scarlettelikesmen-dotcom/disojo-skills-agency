---
name: lumina-store-3d-rebuild
description: Status of the finished Postcards Perfumes free rebuild (Lumina Store codebase) and the skill made from it
metadata:
  node_type: memory
  type: project
  originSessionId: aec5c1a6-53dc-4b0c-890f-4259beb677e1
  modified: 2026-10-07T00:00:00.000Z
---

The Postcards Perfumes free rebuild is done as Tejjomay's proof-of-capability piece (see [[reels-to-skills-goal]], [[disojo-business]]). The Three.js "Home3D journey" approach was abandoned; the shipped site uses a scroll-scrubbed 360° video hero (160 JPEG frames on a canvas), scent wheel, pinned horizontal testimonials, a 4-question scent quiz with a staged reveal, and Lenis smooth scroll.

Location: `/Users/tejjo/Desktop/websites ARCHIVE/lumina-store`, branch `3d-rebuild`, all work committed (latest quiz commit `09ab0f5`). Remote: private repo `disojo-solutions/postcards-perfumes-web` (agency GitHub account), branches `main` and `3d-rebuild` pushed 2026-10-07. `gh` is not installed. Live public demo: https://postcards-rebuild-demo.vercel.app (Vercel project `postcards-rebuild-demo`, deployed from a dist-only folder; preview deploys under `lumina-store` are SSO-protected).

The reusable recipe is the skill `~/.claude/skills/disojo-scroll-site-rebuild` (templates, scripts, prompts, gotchas, client checklist). Use it for the next client instead of rebuilding from scratch.

**Later changes (2026-10-07):** Lighthouse-driven a11y/robots fixes committed (`2517629`, mobile a11y 93->97, SEO 92->100, redeployed); curtain page transition (`5490f88`). The reusable skill set now includes a config-driven starter, intake, launch checklist and motion kit (see [[reference-scroll-site-skill]]).

**Open items:** testimonials may be placeholders (one mentions a "Discovery Set" that does not exist in the rebuild); two different contact emails (FAQ vs `care@postcardsperfumes.in`); B2B form and newsletter are mailto placeholders; hero AI video label is misspelled and its bottle does not match the real smooth-capped bottle; product popup right side still has old terracotta styling; Himalayan/Rani/Malabar stills have ribbed caps while Old Haveli's is smooth; real-phone test not done; the user's Gemini API key was pasted in chat once (stored only in gitignored `.env.local`) - suggest rotating it.

**Why:** user wants a finished, shareable showpiece to sign clients at 10-20k, and to skip this whole process next time.
**How to apply:** for a new client site of this type, invoke the skill first; do not re-derive. Keep the user's preferences: finish whole sections before showing, never invent content, state placeholders plainly.
