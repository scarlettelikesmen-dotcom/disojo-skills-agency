---
name: disojo-launch-checklist
description: Everything between "the demo looks great" and "the client's site is live": a scripted pre-launch gate (placeholders, secrets, image weight, checkout mode, git remote), Lighthouse runs with measured baselines, image optimisation, checkout and form wiring options, SEO/analytics/consent basics, real-iPhone testing, and handover. Use before showing a client the final site, before deploying to their domain, and when auditing an existing site for an upgrade pitch.
---

# Disojo launch checklist

## 1. Run the gate (files only; you still read the site)
```bash
bash ~/.claude/skills/disojo-launch-checklist/scripts/prelaunch_scan.sh <project>
```
Fails while any of these remain: placeholder text ("Replace with", `TODO(client)`, "Item One", example.com), `checkout.mode: 'demo'`,
`seo.siteUrl` unset, missing `og.jpg`/favicon, images over 300 KB, videos over 3 MB, a possible secret in `src/` or `public/`, `.env.local` not
git-ignored, **no git remote**. Warns if testimonials are on (confirm every quote is real and permissioned).

## 2. Measure, do not guess
```bash
bash ~/.claude/skills/disojo-launch-checklist/scripts/lighthouse.sh <url> mobile  /tmp/lh-m.json
bash ~/.claude/skills/disojo-launch-checklist/scripts/lighthouse.sh <url> desktop /tmp/lh-d.json
```
Lab data on one machine, headless Chrome, simulated throttling: a guide, not field data. Measured on 2026-10-07:

| Site | Device | Perf | A11y | Best practices | SEO | Weight |
|---|---|---|---|---|---|---|
| disojo-site-starter (neutral, 1-frame hero) | mobile | 94 | 100 | 100 | 100 | 469 KiB |
| disojo-site-starter | desktop | 100 | 100 | 100 | 100 | 447 KiB |
| Postcards demo (160-frame hero), before fixes | mobile | 93 | 93 | 100 | 92 | 4.4 MiB |
| Postcards demo, after fixes | mobile | 93 | 97 | 100 | 100 | 4.4 MiB |
| Postcards demo | desktop | 97 | 93 | 100 | 92 | 4.0 MiB |

LCP 2.4-2.8 s on mobile for both. Two known false positives: contrast on the offscreen byline of the sideways-scrolling reviews row, and
"label does not match visible text" on the drawn placeholder bottle (disappears with real cut-out images).

Fixes that cost nothing and moved scores: muted text `#7A6E60` -> `#6A5F52` (3.8:1 -> 4.8:1 on cream-alt); terracotta text `#C46C4E` -> `#9C4A2C`
(2.9:1 -> 4.7:1); `role="group"` on any div that has an `aria-label`; accessible names that start with the visible text; a real `robots.txt`
(an SPA rewrite otherwise serves HTML there and fails the audit).

## 3. Weight
- Budgets: home page <= 6-8 MB first load; image <= 250 KB (hero <= 400 KB); video <= 3 MB; no third-party script before interaction/idle.
- `python3 scripts/optimize_images.py <src> <out> [--webp] [--max 2000]` (originals untouched; prints before/after and flags over-budget files).
- Hero frames: JPEG ~21 KB each at 1360x1080 (160 frames = 3.4 MB). Reduce frame count only after checking smoothness.
- For an upgrade pitch, run Lighthouse on the client's current site first and keep the screenshot; promise only what you re-measure on the new one.

## 4. Checkout (never ship `demo` mode to a paying client)
| Client uses | Set | Notes |
|---|---|---|
| Shopify | `checkout.mode='shopify'`, `shopifyDomain`, each product's `shopifyVariantId` | Builds `https://<domain>/cart/<variantId>:<qty>,...`. This is the pattern the original Postcards store used; test an order end to end on the client's store before launch. Discount codes: append `?discount=CODE` |
| WhatsApp orders | `mode='whatsapp'`, `whatsapp='91XXXXXXXXXX'` | Opens a pre-filled chat; no payment inside the site |
| Email orders | `mode='mailto'` | Last resort |
| WooCommerce / other | Not built | Add a branch in `src/lib/checkout.js`; confirm with the client's developer before promising |
Payments, taxes and shipping rules stay on the client's platform. State that in the proposal.

## 5. Forms
Newsletter, business enquiry and contact currently open a pre-filled email (`mailto:`). Before launch pick one and wire it:
a hosted form service (Formspree, Web3Forms, Basin), a Vercel function calling an email API (Resend, Postmark), or the client's CRM/newsletter
tool (Mailchimp, Klaviyo, Brevo). Add spam protection and a success/error state. Not built or tested yet.

## 6. SEO and sharing
`npm run build` already writes title, description, Open Graph, Twitter card, canonical, `robots.txt`, `sitemap.xml` from `brand.seo`. Then:
real 1200x630 `og.jpg`; one `<h1>` per page; meaningful `alt` on photos; add Product JSON-LD per product page if the client has product URLs;
register the domain in Google Search Console and submit the sitemap. A free-rebuild DEMO should not outrank the client's real site: use a
`noindex` meta on the demo host (this lowers the Lighthouse SEO score on purpose).

## 7. Analytics and consent
Load analytics after interaction/idle, not at t=0 (the audited sites loaded up to ten trackers). No popup before engagement; a first-load email
popup was the most intrusive thing in the audited set. If the client needs a cookie banner (EU/UK traffic), use one small card, not a modal.

## 8. Real-device testing (not yet done for the Postcards build)
- iPhone Safari (and one mid-range Android): hero scrubs smoothly, no blank canvas (iOS limits canvas/image memory: if frames drop, reduce
  count or resolution for small screens), no address-bar jump, curtain and wheel work with touch.
- Rotate the phone; tab away and back; low-power mode.
- Tab through the whole site with the keyboard; check focus rings; turn on "reduce motion" and confirm the plain fallbacks.
- Throttle to Slow 4G in DevTools: the loader must not hang (it has a 12 s failsafe).

## 9. Handover
Repo with a remote (not only on one laptop), `README` with how to edit `brand.config.js`, list of TODO(client) items, where assets live,
how to deploy, how to rotate keys, what is placeholder vs real, and what was not tested. Disclose AI-generated assets (and the invisible SynthID
mark Gemini adds). Save the client's final asset originals somewhere that is not the project folder.
