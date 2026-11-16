---
name: project-print-elements-multipage
description: Print Elements multi-page site (OH Architecture design language), built 2026-10-22; replaces the one-page Ascender-style version; location, routes, live preview, open items
metadata:
  type: project
---

Tejjo (2026-10-22): the one-page Ascender-style site was "slop"; wanted the OVERALL design style of oharchitecture.com.au (not a section-for-section copy) and a proper complex multi-page site like printelements.ca (which is a 3-category, ~36-product catalogue).

**Code:** `~/Desktop/websites ARCHIVE/print-elements-multipage` (Vite + React 19 + react-router-dom, Lenis, Phosphor; no git remote). **Live preview (own Vercel project, noindex):** https://pe-d4edb3.vercel.app . Redeploy: `npx vite build && vercel deploy --prod --yes`. Older one-page preview: pe-857fd6.vercel.app (superseded). Tests: `node interact.mjs <url>` (15 flow checks), `node linkcheck.mjs <url>` (64 routes), `node shots.mjs <url> <dir> <w> <h> [route]`.

**OH style carried over:** #fcfcfc page, black type, Hanken Grotesk (OH uses PP Neue Montreal, paid), uppercase ultra-tight display type with indented 2nd line, "(01)" numbered indexes, bracket micro-labels, header that folds into floating Get-a-quote + Menu pills, full-screen numbered menu, curtain page transitions, multi-step quote wizard (OH "Get in touch" pattern), dark full-bleed sections, hover-preview product index.

**Routes:** / , /products (search + category filter), /products/:cat (6 categories), /product/:slug (48 items: 16 digital, 11 wide format, 4 windows/wraps, 11 promo, 4 copy/scan, 2 design), /gallery, /studio, /process, /reviews, /contact, /quote (quote list in localStorage), /privacy, /terms (DRAFTS), 404. Nothing is priced; no specs claimed; product blurbs are drafted by us. Old pandemic items (masks, sneeze guard, social-distancing posters) deliberately omitted: confirm. Quote/contact forms open a mailto (no backend).

**Images:** hero = ~/Desktop/dojacatbro.png (AI-generated; its door hours Mon-Fri 9-6, Sat 10-4 conflict with site hours 10-18 / 11-17: confirm). Interior = Blender renders (hi-res 3200x1800 frames f50/f100/f128 in print-elements-flagship/3d/renders/hires; I patched build_story.py so --range works with --inside). Product plates = 3D turntable renders. NO photographs of real finished jobs exist yet: Gallery is labelled honestly; need real photos from Vijay.

**Open:** real hours, primary phone (778 is on the logo), vehicle wraps offered?, testimonial permissions, Delta vs Surrey, prices (publish?), product specs/options, legal copy review, SSR/prerender for SEO before launch (SPA now), sitemap draft at source/sitemap.xml, custom domain + redirects from old Wix URLs (list in print-elements-flagship/01-discovery/redirects.txt).

## Update 2026-10-22 (after Tejjo's notes)
- 3D FIXED: old plates twitched because the "turntable" was a 48-degree camera swing in 24 frames that snapped back at loop end, products clipped the frame, 900px, f/4 depth-of-field blur, noisy per-frame sampling, and a shadow-catcher haze rectangle. New: `build_products2.py` (+ `render_prod2.sh`): 40 frames, 1200px, +-32 degree sweep, fixed seed, f/16, per-product margin; `prep-prod.py` fades the haze at the frame edge; player is a canvas ping-pong with cosine easing, frame blending and pointer inertia (`Plate` in shared.jsx). Renders in print-elements-flagship/3d/renders/prod2 (about 75 min total).
- Reviews: all three on Home with photos; photos downloaded with Tejjo's yes from printelements.ca (Randy Image.jpg, Sanjay Gupta_PNG.png, jus sage.jpg) into source/people + public/img/people. Jasmine's "photo" is the Jus Sage COMPANY LOGO, not a face. Reviewer permission still unconfirmed.
- Removed the home band (Blender window render) per Tejjo ("disgusting"). Other Blender interior renders still used: Process hero, Studio image, Gallery, Footer-free. Tejjo dislikes that look: replace with real photos when available.
- De-OH'd: replaced the 4-step "Get in touch"-style wizard with a JOB TICKET side drawer (lettered boxes A-D, CMYK bar, registration marks, ticket number); replaced "(06)" style counts with "6 categories" and bracket labels with a registration-mark tag; added a live Open now / Closed indicator (Vancouver time, from the published hours). The category count is real (CATEGORIES.length = 6); only the parenthesised display device was OH's.
- Tejjo is sensitive about anything that reads as copied from OH: header fold-to-pills, numbered index lists and uppercase offset display type are still OH-like.
