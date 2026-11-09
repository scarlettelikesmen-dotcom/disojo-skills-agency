# What the client receives (the full deliverables list)

Scope is fixed in the signed scope sheet (`templates/scope-sheet.md`). Items marked **(confirm)** are proposals that Tejjomay has not decided; do not promise them to a client until he confirms. IP release follows `08-commercials.md`.

## 1. Strategy pack
- Discovery findings (what is true about the business, where the work leaks).
- Brand strategy report, positioning statement, audience, competitor read.
- A name and a basic availability check, only if naming is in scope.

## 2. Identity pack
- Logo suite: primary mark, wordmark, any monogram, in SVG (ink, colour, white) and transparent PNG; tested at 24 px, one colour and inverted.
- Favicon and app icon set.
- Colour system: 3 to 4 colours with jobs, hex values, contrast ratios.
- Typography: at most two families with licences recorded and fallbacks.
- Voice guide: adjectives, vocabulary, banned words, sample lines, channel notes.
- Brand board (HTML or PDF) and the **brand guidelines** document (logo use, colour, type, voice, messaging, application rules).
- `tokens.json`: the machine-readable source of truth.
- Social avatars and a profile image set **(confirm)**; stationery or deck templates **(confirm, not in scope by default)**.

## 3. 3D pack (included)
- The agreed hero objects (count in the scope sheet), lit and finished.
- Web-ready optimised `.glb` files, within budget (model <= 0.6 MB each, HDR <= 1.5 MB).
- Editable source (Blender file or the code-built scene module) **(confirm whether source transfers)**.
- The 3D scene module: portable, runs inside the site, can be dropped into a Webflow embed if the client later needs that.
- Fallbacks: a static image per scene with the same copy; a simplified phone scene; a reduced-motion path.
- Stills or a turntable render for the client's own use **(confirm)**.
- Licence log for every model, HDRI and texture, and an AI-disclosure note where AI assisted.

## 4. Website
- The bespoke scroll-driven site, deployed to the client's domain at launch.
- Pages per `plan/site-flow.md` (default: Home, Work or Story, Process, About, Contact).
- Enquiry flow with a working backend, honest states and a fallback.
- SEO basics: titles and meta, structured data, sitemap, redirects from any old URLs (kept 180 days or more, as for disojostudio.com), OG image, 404 page.
- Analytics: **decision open**, ask Tejjomay (privacy and cost).
- A CMS or editing route only if the client buys it **(confirm: the default stack has none)**.

## 5. Quality and handover documents
- QA report: the scorecard with numbers, screenshots, Lighthouse, and the "not tested" list.
- `handover/README`: how to run, deploy, roll back; what is real, AI-generated or placeholder; every `TODO(client)` resolved or listed.
- Licence log (fonts, models, HDRI, stock, music) and AI disclosure.
- Credentials list handed over securely (never in chat or git).
- Rollback URL and the previous deployment kept.
- Footer credit exactly "Design & Systems · © Disojo Studio 2026" linking to https://disojostudio.com (hard rule).

## 6. Aftercare
- Disojo stays on after launch (the site's promise): fixes and upgrades.
- 30-day check: QA probe and Lighthouse re-run, issues fixed.
- Optional retainer **(confirm USD terms)**.

## 7. Release rule
Production repositories, cloud credentials, DNS and the IP transfer deed are released only after the final invoice is paid and reconciled (AGENTS.md; confirm for this tier). The client owns their brand identity and business content; Disojo keeps its own reusable frameworks and tooling.

## 8. Not included unless separately bought
Ads, email, WhatsApp, ASO, UGC and influencer work; ongoing content production; a store or checkout for non-Shopify shops; a client portal or internal tools; native apps. These are Disojo's other services and are separate scopes.
