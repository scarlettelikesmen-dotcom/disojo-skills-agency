# TFTL portfolio study: working notes (2026-11-11)

## Data quality
- Sitemap: 96 /work/ projects. 59 have a live link, 37 exist only as TFTL case pages.
- Fingerprint (fp/): 49 of 59 loaded on the first pass. 7 timed out (heavy WebGL or slow) and are retried with longer timeouts: 4-x-strategy, ada, face-to-face (Nuxt) and kitchen-hero recovered; made-with-swiss, miracle and qapara still fail and are read from their TFTL case pages. Dead: woodsystems and you-can-be-anything (domain gone), cfe (bad certificate).
- **The first screen is not the real site on these, so exclude them from code comparisons:**
  - agency-telegram and rose-family: 403 page. Their "identical" data-attribute match is the shared error page, not a shared template.
  - horizonte: Cloudflare block. shelter: Cloudflare bot check.
  - max-noah: 502. the-label: down. tommy47: Bandcamp page.
- **Probably rebuilt or changed since TFTL**, so the case page is the fairer record (to verify against case-page screens): vylo (generic SaaS), raed, wellness-one (WordPress blog), cafe-society (Shopify shop), peresvit (shop).

## Code findings (compare.md)
- Platforms: Nuxt 29, unidentified 9, Webflow 6, WordPress 2, Shopify 1, Vue 1, Framer 1. No single house stack.
- Median Jaccard over 1,176 site pairs: data attributes 0, CSS vars 0, classes 0.01. **No shared template.**
- Identical own scripts across sites are third-party only: Cloudflare beacon, reCAPTCHA, Yandex Metrica, Nuxt workbox, plus one 160KB lib/main on iqosa, sl-architects and yodezeen. That one is probably a third-party widget; not verified. raed and wellness-one share a WordPress theme file.
- **Shared habits** (the toolkit, not the look):
  - Lenis 24, preloader 21, split text 16, custom cursor 11
  - type-token class names h1..h6 / p1 / p2 / l1 / a1: 10 (the same names as ERA)
  - named CustomEases: In .5,0,.75,0 / Out .25,1,.5,1 / Write .333,0,.667,1 / diveIn .6,0,0,1 / InOut .76,0,.24,1 / horScroll, each on 2 to 4 sites
  - CSS vars --z-header, --transition(-slow/-fast), --z-preloader, --viewport, --offset

## First screens by eye (sheets/first-*.jpg)
Every first screen is a different composition. Each one's hero is the client's own object or world:
- aexlab: VR headset footage, dark, mono labels, live clock
- alchemy-family: engraved storm clouds, an editorial illustration
- archvoyage: dark, expertise accordion
- bottega-53: wedding photo grid
- brave: two phones with soldier and artist stories
- cassaia: interior photos scattered as a collage
- coeval: huge serif "What We Create" with a checker pattern
- davincii: an engraved dial or compass
- don-t-board-me: "BOUNCE A BALL TO GET TO THE SITE", a dog-walking game gate in red on pink
- duck-english: teacher cards with serif names
- envy-maison: an app phone over a dark gradient
- era-residence: the plum arch
- fame-estate: huge stats over a Dubai render
- gifford-hill: a masterplan render plus developer logos
- grand-hotel: a pale "EVENTS" slab and a plum band
- grape: work cards with pill tags
- hilight: a full-bleed interior render
- hle: a typed statement in big grotesk, typing cursor visible
- if-an-a-bomb-falls: rust-red with line drawings, a civil-defence guide
- iqosa: a light serif statement split across the screen
- jesko-jets: a top-down jet with specs around it
- junkeenering: giant overlapping headline with robot toys
- lenval-properties: an interior plus an architecture split
- moralia: a dark furniture render with a 100% loader
- nabil: a black building with a stacked thin "CAN DESIGN SHAPE HOW WE FEEL?"
- pictoric: hand script plus a fan of collectible cards
- saf: huge type over a bathroom photo
- santal-architecture: a dark grid of words ("Touch", "Feel", "Hear") on lines
- sl-architects: a Russian headline over a blurred photo, team faces
- snob: stacked beige geometric shapes and neon ticket tabs
- son-daven: a stretched wide wordmark over a hotel render, with returns in %
- taf: scattered small project photos on white
- tanya-timal-photography: torn photo strips and a hand-drawn "View shooting"
- verholy: amenities in serif Ukrainian over cut photos

## Scroll walks by eye (sheets/strip-*.jpg, home page sampled across 8 screens)
Blank, blocked or failed walks: agency-telegram, rose-family (403); horizonte, shelter (Cloudflare); max-noah, kitchen-hero (502); iqosa (stuck on the cookie card); lenval-properties (one screen only); hle and moralia (only 3 screens: the scroll is hijacked or a loader holds the page). These need their case pages.

What each one does that is its own (the device the whole site repeats):
- **4-x-strategy** (algorithmic FX): candlestick charts are the graphics; mint-green on black, a pixel-condensed display face, the footer is a giant logo on mint.
- **ada** (a dental clinic): high-contrast serif phrases with italic words split across the screen ("We are *here* to Enhance Your Smile"), black-and-white portraits, ends on a smile line drawing.
- **aexlab** (VR company): acid-yellow on black, condensed caps, numbered lists 01 to 05, a game-world band, a giant wordmark footer.
- **alchemy-family** (a private club): engraved cloud and ocean illustrations throughout, a seal, "The Fellowship Edicts" as rules, member portraits in circles. A secret-society world.
- **archvoyage** (a developer): sea and skyline photo, thin wide caps with italic words, an expertise accordion, an awards list, "SEND REQUEST" in mixed italic.
- **avalon** (a residential developer, Ukraine): slate grey, project cards with prices, a handwritten signature, a news grid.
- **bottega-53** (a wedding planner): a photo mosaic edge to edge for 52 screens, a wordmark that breaks apart, a giant wordmark footer.
- **brave** (Brave Action Ukraine, a charity): huge condensed caps with words split across photos, phone frames with stories, yellow and blue only at the footer.
- **cafe-society** (a vintage designer archive shop): a plain product grid on cream. Shopify; probably not TFTL's design any more.
- **cassaia** (an interior studio): a dark and sage palette, a serif statement, a circular "cassaia" stamp, interiors as a collage.
- **coeval** (an interiors and architecture studio): a big light serif with parenthesis labels "(View All)", team photos, "From You" in the footer.
- **davincii** (an agency): engraved instrument dials and a dark parchment; client logos float as 3D badges; numbers 13/23/33 in serif.
- **don-t-board-me** (dog walking): a game gate; you bounce a ball to enter.
- **duck-english** (an English school, Russian): curved text on a path, lime-yellow stickers, teacher cards with photos.
- **envy-maison** (a real-estate app): one phone stays fixed in the centre while screens and property cards fly around it.
- **era-residence**: the arch, flowers, sky ground, the map line, a plum phone number.
- **face-to-face** (a holding company or agency): huge red "FACE TO FACE" split by a portrait, then each portfolio company as a full chapter (Yodezeen interiors), a giant phone number.
- **fame-estate** (Dubai real estate): big stats over renders, red "HEAVEN?" slab, an office tower, a 3D monogram footer.
- **gifford-hill** (a new town, South Australia): a masterplan over aerial photos, a horse emblem, "Join the Future", an email set huge as the footer.
- **grand-hotel** (Grand Hotel Lviv): velvet red curtain hero, serif caps, rooms, spa, restaurants as photo cards in muted burgundy and sand.
- **grape** (a brand agency, Ukraine): lavender ground, big client-name list, award names underlined, "©2026" huge.
- **hilight** (an architecture firm): renders, a slow tree, a night globe of projects with glowing dots.
- **hle** (music talent and content): a typed statement, then an object on a shelf (an old radio or monitor).
- **if-an-a-bomb-falls** (a civil-defence guide): rust and black, archive photos, a nuclear cloud as the headline, "BACKPACK = A HIGH CHANCE OF SURVIVAL" as an instruction diagram, hand-drawn icons.
- **jesko-jets** (private aviation): a plane window as the hero frame, a top-down jet with specs, a sky band, a huge "Global" with a globe.
- **junkeenering** (a robot game): toy renders, card grid, map, game-battle headline; game marketing language.
- **moralia** (furniture): dark renders, serif caps, room types.
- **nabil** (an architect): black, city names set vertical (MIAMI, MILAN, DUBAI), thin display, a magazine cover moment.
- **peresvit** (an MMA gear shop): a store. Probably not TFTL's current design.
- **pictoric** (an illustration platform): yellow world, illustrated characters, sticker shapes, a giant wordmark.
- **raed** (a VC fund): generic corporate. Probably rebuilt.
- **saf** (an architecture firm, Cairo): brown wood-panel ground, condensed caps in ice blue, a live Cairo clock, "SEND / DROP US".
- **santal-architecture**: a word field ("Touch", "Feel", "Hear", "Perception") rotating in 3D, concrete texture close-ups, a grid paper ground, "WE SEE HEAR TOUCH".
- **sl-architects** (Russia): building photos, team portraits, a white circle cursor.

## Pattern so far
- **Different on each site:**
  - the palette, from the subject (mint charts, rust civil defence, velvet hotel, wood-panel architect, yellow illustration)
  - the type pairing
  - the hero object
  - the one device
- **The same on most sites:**
  - a fixed thin top bar with a logo and menu or "Let's talk"
  - huge display type that runs off the screen
  - a full-bleed image or render
  - a closing screen with a giant wordmark, phone number or email
  - a cookie card bottom right
  - small labels in caps
- **snob** (architects): stacked beige and blue geometric shapes like building blocks, neon ticket tabs at the bottom. Short walk; the scroll is hijacked.
- **son-daven** (a resort hotel investment in Yaremche): a wide stretched wordmark, returns "up to 10% / 30%", then a khaki, halftone, engraved world of Carpathian folk scenes (a bonfire, sheep stacked, a river), cut-out photos. An investment pitch dressed as local folklore.
- **taf** (architects): small project renders scattered on white, a vertical nav strip on the left. The scatter is the whole site.
- **tanya-timal-photography**: the name huge behind her photo, photos fanned and torn, a ribbon of italic "available worldwide" across the screen, a hand-drawn "View shooting" oval.
- **tommy47**: now on Bandcamp (not TFTL). the-label: down.
- **verholy** (a relax park, Ukraine): dark green plus peach, a thin serif in caps, amenities listed big, a video card fixed bottom right.
- **vurrle** (interiors): a letter grid where the words INTERIOR / CREATE light up, then dark interior photos.
- **vylo** (SaaS calls): a standard SaaS layout. Not TFTL's look now, or a different brief.
- **wellness-one**: a WordPress catalogue. Likely not TFTL's design now.
- **yodezeen** (interior architects): a jungle-and-concrete project film, "WE DO" huge, a world map of cities where they work, city names stacked.
