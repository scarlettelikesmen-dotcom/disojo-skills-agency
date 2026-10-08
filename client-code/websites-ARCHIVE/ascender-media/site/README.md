# Ascender Media: flagship rebuild (Vite + React + Lenis)

Preview (public, noindex): https://ascender-media-preview.vercel.app
Live site it will replace: https://www.ascendermedia.in (Vercel project `social-growth-agency`). NOT deployed there yet.

## Run
npm i && npm run dev | npm run build
Tests (puppeteer-core in ~/.disojo-tools): `NODE_PATH=$HOME/.disojo-tools/node_modules node scripts/smoke.cjs <url> <outdir>` (34 checks, desktop + phone + reduced motion; the form request is intercepted, nothing is emailed). `scripts/tour.cjs` takes screenshots at every section.
Assets: `scripts/make_assets.py` rebuilds WebP chats and the logo mark from the originals in the parent folder.

## Where things are
- All copy, prices, contacts: `src/data/content.js` (real, confirmed by the client).
- Form delivery: `src/lib/submit.js` (FormSubmit.co). Swap providers by replacing that one function.
- Identity: film black #0A0A0B, bone #EDEAE3, one accent #FF5A1F; Bricolage Grotesque + Geist + Geist Mono (self-hosted, latin only).

## Handover notes / things the client must know
1. The old live contact form never sent anything (it showed "Message sent" from a timer). The new one posts to FormSubmit.co; the FIRST real submission triggers an activation email to ascendermedia.in@gmail.com that must be confirmed once. Not yet tested against the real inbox on purpose.
2. Hero preview, caption/hook/pacing demos and the timeline are built in code and labelled "illustrative". They are not client work.
3. The page never shows client reels (agency declined). Chat screenshots are the proof; names used with permission (confirmed by client).
4. The sixth chat is labelled "Beckett" as on the old site, but the screenshot itself only names the sender (Jash). Confirm the name.
5. "24h editing turnaround" stat is the client's number; plan turnaround ranges from 24-48 hours to 3-5 days. Confirm which plan the 24h refers to.
6. No AI-generated imagery is used. Fonts are open licence (OFL).
