---
name: project-print-elements-ascender-style
description: Print Elements site rebuilt in Ascender's exact flow/style (2026-10-22): location, live preview, what is real vs placeholder, open items
metadata:
  type: project
---

Tejjo asked (2026-10-22) to replicate ascendermedia.in's flow, font (Hanken Grotesk), paper/ink backgrounds, parallax, Roll hover, tabbed stage etc. for Print Elements. Built as a NEW Vite+React project: `~/Desktop/websites ARCHIVE/print-elements-ascender-style` (copied Ascender's lib/CSS, new content). Live preview (own Vercel project, noindex): https://pe-857fd6.vercel.app (scope scarlettelikesmen-dotcom). Redeploy: `npx vite build && vercel deploy --prod --yes` from that folder. No git remote yet.

Hero image = `~/Desktop/dojacatbro.png` (AI-generated photoreal shopfront, 1672x941; disclose AI/SynthID). Its door text shows hours Mon-Fri 9-6, Sat 10-4 which CONFLICTS with the site's hours (Mon-Fri 10-18, Sat 11-17): confirm real hours with Vijay. Interior bands use Blender renders at 1600px (soft); hi-res renders were queued in `print-elements-flagship/3d/renders/hires/` (run.sh, frames 1,50,100,128 at 3200x1800); after they finish run `python3 scripts-prep-images.py` and redeploy.

Accent = Print Elements magenta #d0007c; nav logo = client's round badge; footer giant "Print Elements" is type, not a logo. Quote form opens a mailto (no backend). Visit section sits where Ascender's pricing is (nothing priced).
Still unconfirmed (ask Vijay): which phone is primary (778 is on the logo), whether vehicle wraps are offered, testimonial permissions (Randy Mann, Sanjay Gupta, Jasmine S), process wording "Think / Print / Visit" is drafted by us.
