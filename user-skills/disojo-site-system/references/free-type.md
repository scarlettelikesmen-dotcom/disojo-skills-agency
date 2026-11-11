# Free type: where to look, and what we learned (2026-11-11)

Tejjomay rejected the fonts on Marathon (Archivo + IBM Plex Mono) and on the first CTESCOA screens (Schibsted Grotesk, Hanken Grotesk, Big Shoulders, Public Sans, Martian Mono, Space Mono). Their own two sites are proof that free fonts can look good: disojostudio.com uses Bricolage Grotesque with Hanken Grotesk, and Print Elements uses Hanken Grotesk. **Never reuse those for a client** (reuse the process, never the look).

## What the measured sites show
The 84 walked sites (`research/walk-2026-11-10/data`) almost all use paid foundry fonts: Neue Haas, Suisse, GT America, Aeonik, ABC Diatype, Ogg, Editorial Old, Tobias, TWK Lausanne, Neue Montreal. Only Satoshi, Switzer, Onest and Josefin come up free. So our "default" look partly comes from picking the safest Google grotesk. The fix is picking fonts with one clear trait, and setting them with intent: tight tracking at display size, real weight contrast between display and text, width axes used on purpose.

## Free sources with commercial and web use
| Source | Licence | Load | Notes |
|---|---|---|---|
| Google Fonts | OFL | css2 API or self-host | Sort by date added. The 2024-26 additions are where the fresh ones are (Mona Sans, Funnel, Zalando Sans, Mozilla Headline, Redaction, Science Gothic, Special Gothic, Stack Sans, Libre Caslon Condensed, Datatype, Geist Mono, Fragment Mono). Metadata: `curl https://fonts.google.com/metadata/fonts`. |
| Fontshare (Indian Type Foundry) | ITF Free Font License: free for personal and commercial use, web self-hosting allowed; check the bundled licence for redistribution | `https://api.fontshare.com/v2/css?f%5B%5D=<slug>@<weights>&display=swap`, **one family per URL** (multi-family URLs now return only the first) | Switzer, General Sans, Supreme, Cabinet Grotesk, Clash Grotesk, Bespoke Stencil/Sans/Serif, Zodiak, Erode, Gambetta, Sentient, Author, Synonym, Technor, Tabular, Panchang. List: `curl https://api.fontshare.com/v2/fonts?limit=200`. |
| Collletttivo | OFL | woff2 from github.com/collletttivo/<repo>/fonts | Apfel Grotezk, Ronzino, Absans, Mazius Display, Messapia, Ortica, Necto Mono, Borges, Ribes. |
| Velvetyne | OFL (check each) | gitlab.com/velvetyne/<repo> | Avara, Lineal, Compagnon, Sporting Grotesque, Basteleur, Ouroboros, Lack. Mostly display; credit the designer. |
| uncut.wtf | per font | catalogue of 160+ free fonts | Browse for display faces. |

## Method
1. After the idea is picked, choose 15-20 candidates from the sources above. Set them all in the client's real words on the same ground, with display, text, index rows and codes (`ctescoa-site/site/src/pages/first/type.astro` is the template).
2. Check that every font actually loaded (`document.fonts`) before screenshotting.
3. Send the specimen sheet; Tejjomay picks the pairing before the first screens are drawn.
4. Record the picked fonts and licences in tokens.json.
