---
name: project-lilt
description: "lilt, Mumbai small-batch clothing, identity + launch of Batch 001: bakery idea picked by Tejjo 2026-11-10; first real run of the new system"
metadata:
  type: project
---

Client came with an idea; only material is one AI-looking board (`websites ARCHIVE/lilt-site/assets/`). Tejjo picked the bakery 2026-11-10: clothing sold like baked goods, small numbered batches, sold out when gone, gable box, cookie kept as a bite-mark stamp. "This is the identity", for the launch of Batch 001, dropping soon, not live.

**Why:** Tejjo named the risk: a gimmick if the garments are average.

**How to apply:** first real run of disojo-visual-identity and disojo-site-system. Pick is recorded in `brief/IDEA.md`. Signed; drop date 1 January 2027; Shopify, API connected later (Tejjo 2026-11-10). Open: samples, batch size, trademark check on the name, whether the board's wordmark and palette stay. Nothing built yet. Never fake scarcity or stock. See [[feedback-idea-before-pixels]].

Client checklist doc (private until Tejjo shares it): https://claude.ai/artifact/8KiorhxPw6HG99WFWFYLU5. Due dates are my proposal. Shoot arrangement and who pays for it are not settled.

2026-11-10 image set on Desktop (1bor to 13bor, 14 files, no 8bor; "lilt things" folder empty): logo raster, 3 lifestyle, 5 tee flats, 2 macros, stack, box, unboxing. Appear AI-generated (image-model sizes, saved within 13 minutes), not confirmed. Max 1672px wide, so soft at full width under the gate. Tees only; no pink flat, no red back, no bite stamp or batch number shown, no bakery setting. No facts, prices or story in the set. Not copied into the project yet.

Batch 001 confirmed by Tejjo 2026-11-10: 4 tees at 1299 rupees tax included, 75 units per size: blue wrap (4bor), cream (7bor), plain tee in 3 colours (2bor; colours unnamed, my reading of 13bor is red, blue, pink), panelled blue/cream/red (14bor). Details in brief/SIGNING.md.

2026-11-10 stage 3: images copied to assets/set-2026-11-10, wordmark traced (brand/logo, site/src/data), cutouts in site/public/img. brief/MESSAGE.md written. Three first screens at localhost:4650/first/a,b,c (preview config 'lilt'): A box on counter, B batch board, C bite. Sent to Tejjo, awaiting pick. I recommended A, with B as the Batch 001 page.

2026-11-10 round 2: Tejjo leans C, A can be refined, B rejected as a homepage (use it as the pricing section). Asked for D (2bor full-size hero, /first/d/). Sent A with an explaining line, C with teeth and slab depth, D. Awaiting final pick. C has no line telling a new visitor what lilt is; asked Tejjo. 2bor is 1672px: gate fails D as soft until a larger source exists.

2026-11-10 FULL BUILD done on localhost:4650, not deployed: Tejjo picked C (top), D photo below, A box lower, B as price board. Pages: home, /batch-001/, four tee pages, /how/, /help/, /legal/, 404. Data in site/src/data/batch.js (STATE, LIST_ENDPOINT null, SHOP_URL null). Old first screens in _archive/first-screens-2026-11-10. Open: waitlist not connected (form says demo), Help and Legal say 'Published before the drop' as placeholders, bite stamp artwork missing, plain tee colours, sizes, fabric, 2bor and 13bor too small (gate FAIL soft), real shoot, trademark, Pepsi resemblance. Awaiting Tejjo's reaction.

2026-11-10: demo live at https://lilt-demo.vercel.app/ on Tejjo's go (noindex, own Vercel project lilt-demo). Production domain not set up. Republish with deploy_demo.sh after changes only when asked.

2026-11-10: side up down letter wave added to every text button (site/src/lib/wave.js, .wave in lilt.css), demo republished on Tejjo's word. Phone menu links and the footer credit left without it. Rule: [[feedback-text-button-roll]].

2026-11-10 NEXT (Tejjo's plan, not started, usage limit hit): home = bite slab, then the eaten state becomes a pinned 4-product scroller (logo left, big number 1-4 bottom left, short details right, hover shows back, click morphs the shirt into its product page via Astro view transitions). Remove: street section (hero-red, "Small numbered batches"), Board (price list), joined Wrap pair, collar/cuff close-ups, Panel turn section. Keep gable box; redo handovers between images, the 1 January 2027 section and footer. Build real product pages (size, price, colour, Add to bag). Add image "window" parallax everywhere (measure Monolog success stories first). Blocking answers asked: sizes, plain colours (red/blue/pink?), plain has no back photo, Add to bag before the drop.

2026-11-10 DONE on localhost:4650, NOT deployed (no 'deploy' word): the plan above is built. Home = bite slab, then pinned rack of 4 tees (logo left, number bottom left, details right, hover shows back, click morphs into the page via cross-document view transition `tee`), box sheet slides over the last tee, group photo in a .win window on cream, 1 January 2027 on cream, footer uncovered from underneath (sticky footer, main z-index 1). Removed from home: street, Board, Wrap pair, collar/cuff, Panel section (Board still on /batch-001/, which still has stack+collar close-ups). Product pages: gallery + sticky buy panel, sizes XS-XL (Tejjo), Plain colours red/blue/pink UNCONFIRMED (photos show red only), qty, Add to bag; demo bag in localStorage (src/lib/bag.js, drawer in Base), checkout disabled 'Checkout opens 1 January 2027'. Plain back = Tejjo's ~/Desktop/bor12.png cut out to plain-red-back.webp (copied to assets/set-2026-11-10b). Window effect: .win in main.js, Monolog numbers (0.094*(vh+frame) travel each way, linear). Gate: only soft-image FAILs left (sources ~1100px). View-transition morph not filmed (headless cannot capture it); Firefox gets a normal page change.

2026-11-10: rack + product pages + bag demo DEPLOYED to https://lilt-demo.vercel.app/ on Tejjo's "deploy" (all 9 pages 200, noindex).

2026-11-10 later (localhost only, not deployed): Tejjo rejected the scroll-driven rack. Now Wrap stays as the bite end screen (slab 230dvh), then Cream, Plain, Panel are normal 100dvh .tee-s sections (components/TeeInfo.astro: number + details, hover back, click morph). Box sheet no longer overlaps. Nav: underlines removed, links sit left beside the logo, Bag stays top right; slab sentence moved to top 76px.

2026-11-10: flowing tee sections + nav change DEPLOYED to lilt-demo.vercel.app on Tejjo's "deploy".
