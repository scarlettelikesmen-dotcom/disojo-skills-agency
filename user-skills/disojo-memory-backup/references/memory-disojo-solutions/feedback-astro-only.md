---
name: feedback-astro-only
description: Hard rule from Tejjo 2026-11-09, every website is built in Astro from the first screen to launch; no hand-written HTML sites
metadata:
  type: feedback
---

Every website is built in Astro, first-screen comparisons included. No hand-written HTML sites or loose index.html concepts ("no html bullshit").

**Why:** Kiran design-v1 and many older client folders were single HTML files; Tejjo does not want that again.

**How to apply:** Websites only, apps and internal tools are outside it. Enforced by site_guard (denies .html in gated projects), premium_gate (FAIL without astro.config), deploy_demo (refuses). Older non-Astro sites stay as they are until Tejjo asks for a rebuild. See [[feedback-idea-before-pixels]].
