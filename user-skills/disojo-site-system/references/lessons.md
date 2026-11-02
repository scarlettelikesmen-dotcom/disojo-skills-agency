# Lessons that cost a bug or a rejection (kept from the archived skills)

## Taste
- Lighthouse, lint and smoke tests prove it works, never that it is good: Mentable v1 scored 97/100/100/100 and was rejected. Run the first-look review and the side-by-side with a reference first.
- Never build a metaphor ABOUT the client's craft and decorate the page with it (Ascender v1 timecodes and fake editor). Build the page out of one true idea at full commitment with real material.
- No fake product UI in a hero, even labelled illustrative. No real work to show = use real artefacts they have (Ascender v2: six real chat screenshots) and say what is not shown.
- Hero = headline + one sentence + ONE button + one picture. Two buttons, stats, pills read as AI.
- Break equal-card grids: one panel with a selector beats three equal price cards. A bento has exactly the cells you have.
- Dark screenshots sit best on a light page; check the theme against the proof material.
- Do not caption stock mockups as client work. Products without a real image get a typographic specimen, not a fake photo.

## Content
- Copy word for word, including punctuation; only re-case ALL CAPS. The parity audit flags rewording.
- Take label and product wording from a photo of the real thing, character for character; AI tools mangle small print.
- Redo intake: Webflow tab panes and accordions are display:none (intake reads them); body links are relative (make_content localises them); anchors come from the source's section ids; text dropped as "repeated chrome" can be real (the parity audit catches it). JS-heavy or bot-walled sites crawl thin: compare word counts with the source screenshots, or ask for an export.
- When the client has a live site, scrape ITS catalogue (sitemap, product pages, og:image) and hours, never an AI demo's list.

## Build
- Namespace classes per section (`s-xx-`). Generic names (`.c`, `.end`, `.bar`) collided and overlapped cards on Ascender. If a layout overlaps, measure with getBoundingClientRect before guessing.
- First-screen text and photos are never hidden behind a reveal: an opacity reveal cost 1.7 s of LCP (93 to 100 mobile after the fix). Do not preload a hero image unless measured.
- Motion is part of the build, not a polish pass ("very rigid", 2026-11-01): smooth scroll, line masks on headings, in-frame parallax on photos, staggered flow-in, animated FAQ height and menu, the button roll. Reference: `example-movementfirst-A/main.js`.
- Pinned sections: sticky inner, height computed in JS, progress written to CSS vars in rAF (never framework state per frame); phones get a static layout; reduced motion gets no pin.
- Contrast: never dim text with opacity; use a real colour (took accessibility 97 to 100 twice).
- Fonts: self-host latin-only variable woff2 with unicode-range and preload the two above the fold, or subset Google Fonts with `&text=` (a 200 KB Japanese font CSS dropped mobile Lighthouse to 57).
- Counters and loops pause off-screen and stop under reduced motion.
- Static HTML per page beats an SPA for a local business: real HTML for local SEO, tiny JS.
- On the Disojo site keep the Lenis script a plain blocking tag (a `defer` made shared.js run first and Lenis never started).
- Replaced images get a new file name (/work caches a week).

## Deploy
- `vercel.json` header entries need `source`; confirm the deploy printed `Aliased:` before testing (a smoke test once ran against the old version).
- `vercel --prod` can time out while polling: check `vercel inspect <url>` and curl the page before calling it failed or done.
- Judge performance on the deployed URL, not a local uncompressed preview (90 locally, 100 on Vercel).

## Defects seen on the reference sites (never ship these)
Blank first screen for seconds (Supersolid, Mammoth, HISS on phone); scroll-locked or blank intro for 20-35 s (Squiggle); a 10 s phone preloader (OH); fixed logo over text and client logos overlapping (SLIK, Palmo); a trial font in production (Backhouse); "Coming soon" in a hero (Mammoth); cookie and sensor prompts over the hero (Palmo); no reduced-motion path in 3D (Ciao). `scripts/qa_probe.js` checks the first five in the browser JS tool at 1 s, 3 s and 8 s.

## First real run: KDC (2026-11-02)
- A crawled sign-up form that creates accounts (password field, app backend) is never rebuilt: link every "Get Started" to the live form (`REGISTER` in brand.js) and exclude its route. Moving it is a launch task with the client's developer.
- Crawled legal pages carry the site chrome (logo, Register link, a page-title photo): filter it in `[...route].astro` and use the first heading as the h1.
- Take the client's own favicon (`/favicon.ico` on their site) before making one.
- A full accent-coloured section breaks a brief that says "accent as a marker only": the CTA went red in the first build and was taken back to ink. Re-read the brief's colour jobs before styling the last sections.
- 470 px video thumbnails with blurred side panels baked in: crop them to 3:5 portrait cards at about 184 px wide; at 2x anything wider is soft.
- The premium gate's composition checks do not apply to legal text pages; read those FAILs as not applicable, never pad legal pages with photos.
- With one large real photo, the "3 in 8 screens with a big image" check fails honestly. Do not fill it with stock next to claims; put the shoot on the gap list.
