# Brand brief (fill during intake; every line maps to a key in src/brand.config.js or src/data/products.js)

| Question | Answer | Goes to |
|---|---|---|
| Brand name as written on the product | | `brand.name`, `loader.mark` (uppercase) |
| Legal name for the footer | | `brand.legalName` |
| One-line descriptor / tagline | | `brand.descriptor`, `seo.description` |
| Domain (final) | | `seo.siteUrl` |
| Email / phone / Instagram | | `brand.email`, `phone`, `instagram` |
| What do we call one product? (scent, piece, flavour, blend...) | | `nouns.one / many` |
| Hero line (max ~14 words, specific, no "elevate/unlock") | | `hero.statement` |
| Number of products (ideal 4; wheel/quiz tuned for 3-8) | | `data/products.js` |
| Per product: name, subtitle, tagline, price, size, 2-3 facts, description | | `data/products.js` |
| Per product tint colours (pull from label/packaging) | | `gradientFrom / gradientTo / textColor` |
| Bundles/offers (exact prices) | | `bundle` |
| How do people buy? | | `checkout.mode` (+ `shopifyDomain` / `whatsapp`) |
| Story in their words (3 short paragraphs) | | `about`, `story.quote` |
| 3 real values/principles | | `about.values` |
| Real reviews (with permission) | | `testimonials` (leave disabled if none) |
| FAQ: shipping, returns, usage, ingredients/materials | | `faq.items` |
| Do they sell to businesses? Terms | | `business` |
| Quiz: how do customers actually choose between products? | | `data/quiz.js` |
| Palette and fonts | | tokens in `src/index.css` |
| Claims we must avoid | | review copy before launch |

Rules: nothing goes live that the client did not provide or approve. Mark unknowns with "TODO(client)" in the config and list them in the
handover note. Keep `testimonials.enabled=false` and `checkout.mode='demo'` until real data and real checkout are confirmed.
