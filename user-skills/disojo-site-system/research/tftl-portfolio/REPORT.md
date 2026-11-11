# The First The Last: all 96 projects, template or unique? (2026-11-11)

## What was looked at
- **Sitemap:** 96 projects under /work/ on thefirstthelast.agency.
- **59 have a live site.**
  - All 59 were fingerprinted (code), with 52 readable. Dead or blocked: two domains gone, one bad certificate, three that will not load headless, and several behind Cloudflare.
  - All 59 were walked: home plus up to 2 more pages, wheel-scrolled, with buttons hovered.
- **37 exist only as TFTL case pages.** For these, and for 20 live sites that were blocked, down or since rebuilt, TFTL's own case gallery was collected (their screenshots of the finished site and brand).
  - All 57 galleries collected (`sheets/case-*.jpg`, `sheets/case-retry.jpg`).
- **Seen by eye:** all 96 projects, each as 8 scroll screens or 6 to 7 gallery images.
- **The last seven fit the pattern, each from its own subject:**
  - 13 Mission: fashion on black mountains with a violet line
  - Addendum Salon: a serif "Beauty Place" with italic words
  - Addendum Shop: hair close-ups and a product grid
  - Hladkyi Consulting: the consultant's portrait and quiz cards
  - Inch: a footballer-owned restaurant, "every inch" as the line, a football photo
  - Smart Payments: slate-blue orbit lines and cards
  - Spicy no Spicy: line-drawn faces and colour blobs
- **Files:**
  - `NOTES.md` (one line per site)
  - `compare.md` (code numbers)
  - `sheets/first-*.jpg`, `sheets/strip-*.jpg`, `sheets/case-*.jpg`
- **Caution: some live sites are no longer TFTL's design.** vylo, raed, wellness-one, cafe-society and peresvit now look like standard SaaS, WordPress or shop layouts. tommy47 moved to Bandcamp. Their case pages show what TFTL actually made.

## 1. Do they use a template?
**No. Every site is built new.** The evidence:
- **Code naming:** for each of the 1,176 pairs of sites, the overlap in data attributes, CSS variables and class names has a median of **0**. A shared template would show 0.5 or more.
- **Shared code files:** of the files shipped on more than one site, every one is third-party (Cloudflare analytics, reCAPTCHA, Yandex Metrica, a Nuxt cache helper). None is a TFTL theme. The one exception is two WordPress sites sharing a theme file.
- **Platforms:** 29 on Nuxt, 6 on Webflow, 2 on WordPress, and 1 each on Shopify and Framer. There is no one house stack.
- **Look:** no two first screens share a layout. Palettes, type pairings and hero objects differ on every site.

## 2. What is the same (their process and plumbing)
These repeat across most sites. They are the habits of the team, not a look.
1. **The same toolkit:**
   - smooth scroll (Lenis) on 24 of 52
   - a preloader or intro on 21
   - split text animated by line or letter on 16
   - a custom cursor on 11
   - Swiper sliders on about 25
2. **The same naming in the code:**
   - text styles named h1 to h6, p1, p2, l1, a1 (as on ERA) on 10 sites
   - variables like `--z-header`, `--z-preloader`, `--transition`, `--transition-slow`, `--viewport`, `--offset`
   - a developer's habits carried from job to job
3. **The same motion vocabulary,** with eases named the same way on several sites:
   - `In` .5,0,.75,0
   - `Out` .25,1,.5,1
   - `Write` .333,0,.667,1
   - `InOut` .76,0,.24,1
   - `diveIn` .6,0,0,1
4. **The same page skeleton:**
   - a thin fixed top bar (logo left, menu or "Let's talk" right)
   - huge display type that often runs off the screen
   - full-bleed photography or renders
   - a cookie card bottom right
   - small caps labels
5. **A closing screen** that is one huge thing:
   - the wordmark (Bottega53, AEXLAB, 4xstrategy, Junkeenering, Pictoric)
   - the phone number (ERA, Face to Face)
   - the email (Gifford Hill)
   - or "SEND / DROP US" (SAF)
6. **Every page gets designed, including the 404.** Ateliery, Atto, Trender, Zitya, Lenval and Qapara each have a 404 drawn in their own world.
7. **Brand and site together.** Many cases show the identity first and the site second:
   - signage, cups, totes, packaging, business cards, merch
   - Besos, Birdies, Kitchen Hero, Konzept, Janey, Mkaan, The Label, Ateliery
   - The site is one piece of a world, not the whole job.

## 3. What is different and new on each site
The look comes from the client's own subject every time. Each site has one device that only that client could have:

**Real estate and hotels** (the biggest group, about 25 projects) still look nothing alike:
| Site | Its own device |
|---|---|
| ERA | an arch from the building, bougainvillea, day/night renders |
| Son Daven | Carpathian folk engravings and halftone sheep around a hotel investment, returns "up to 10% / 30%" |
| Gifford Hill | a masterplan drawn over aerial farmland, a horse emblem |
| Elara | a curved-arch logo echoing the towers, a 747-unit counter |
| Eywa | botanical line drawings, a crystal shape, real floor plans |
| Horizonte | isometric block plans, "23 villas, 31 residences, 45 parking spaces" as typography |
| Fame Estate | big statistics laid over Dubai renders |
| Miracle | forest houses on phones set on rock |
| Grand Hotel Lviv | a velvet curtain |
| Verholy | dark green plus peach, a video card |
| Phoenix | a mountain chalet with a white 3D site model |

**Architects and interiors:**
| Site | Its own device |
|---|---|
| Santal | a rotating 3D field of sense words ("Touch", "Feel", "Hear"), concrete close-ups |
| TAF | small renders scattered on white |
| Nabil | city names set vertical, a magazine cover |
| Yodezeen | a world map of cities |
| SAF | a wood-panel ground with ice-blue caps |
| Snob | a stacked menu like building slabs |
| Vurrle | a letter grid that spells INTERIOR / CREATE |
| Trender | the logo built from renders |

**Products:**
| Site | Its own device |
|---|---|
| Aura | gold taps on water |
| Max Noah | a chrome lipstick capsule mechanism |
| Comb-on and Addendum Hair | the brush itself on hair and water |
| Jesko Jets | a plane window as the frame, a top-down jet with specs |
| Aerotim | plane line drawings and coordinates "781° N 22°W" |
| Janey | gummy bear and boxes |
| Wood Systems | a product catalogue on forest green |

**Causes and culture:**
| Site | Its own device |
|---|---|
| If a Bomb Falls | a civil-defence manual: rust, archive photos, survival diagrams |
| Babyn Yar | a map of thousands of stories, archive photos, red |
| Brave Action | phones carrying soldiers' and artists' stories |
| Vovky da Vinchi | military photos with the name torn across |
| Made with Switzerland | portrait stories in a grid |

**Brands with a character:**
| Site | Its own device |
|---|---|
| Don't Board Me | a ball game to enter the dog-walking site |
| Purpose Talent | a hand-drawn mascot and Cooper-style type |
| Pictoric | illustrated yellow world |
| Kitchen Hero | a cartoon line character on everything |
| You Can Be Anything | Barbie pink, names spiralling |
| Qapara | glitch faces and dripping paint |
| Junkeenering | game toys |
| Telegram Agency | a duck sticker |

**Scale of the range:** dark luxury, Barbie pink, civil-defence rust and SaaS lavender all come from one studio in the same period.

## 4. What this means for Disojo
1. **Tejjo's worry was right.** If we copy ERA, we get one look. TFTL itself never repeats a look, so learning from them means learning their process.
2. **Reuse exactly what they reuse:**
   - **The kernel:** smooth scroll, the preloader slot, split-text reveals, cursor, page transitions.
   - **Code names:** a token naming scheme (h1..h6, p1, p2, l1, a1, z-index names, transition speeds).
   - **Eases:** a small named set.
   - **Skeleton:** a thin top bar, a designed closing screen, a designed 404, a designed cookie card.
   - All of that is already in our kernel and starter, or easy to add.
3. **Design new every time:**
   - the palette, from the subject
   - the type pairing
   - the hero object
   - the one device that only this client has
   - This is our Idea stage. TFTL shows it working at scale across about 96 projects.
4. **Two habits we do not have yet:**
   - **Brand world first:** they show the identity on real objects (signs, cups, packaging) before the site. For Visual identity jobs, our site should start from those objects too.
   - **Every page designed in the client's world:** 404, cookie card, closing screen. Add these to the build checklist as owned pages, not defaults.
5. **For the starter tokens:** keep ERA's token structure (named text styles, named colours with alpha steps, a unit list, one artboard). That is the plumbing TFTL reuses. Never ship ERA's values. They are ERA's look.

## Honest limits
- **What the evidence shows:** case galleries are TFTL's chosen screenshots, not live interaction. For the live sites, motion was seen through scroll screens and hover crops, not felt by hand.
- **"Interact with every button" was not done literally on every site.** The probe hovers up to 14 controls per page on 3 pages per site.
- **Some live sites have since been changed by others,** as noted above.
