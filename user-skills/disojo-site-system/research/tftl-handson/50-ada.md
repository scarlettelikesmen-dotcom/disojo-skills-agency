# 50 ADA, Aventura Dental Arts (dental clinic, Florida)
Rescanned 2026-11-23 with a longer wait. Sheet: `scan/ada/sheet.jpg`. The desktop loader ran for about 20 s of the scan (dark frames 0 to 9), so the opening is long or waits on the video.

## Stack
Nuxt + GSAP (ScrollSmoother, Observer, SplitText, DrawSVG, **MorphSVG**). Eases `default-ease .24,1,.36,1`, `ease-out-quint .22,1,.36,1`, `ease-menu .6,.14,0,1`: the Nuxt kit's set (same as DaVincii, SL). Lottie `preloader.json`, `balls.json`. Attributes `data-anim-text-by-lines`, `data-fill-by-scroll`, `data-fill-color`, `data-cursor-place`. One WebM film. 18 MB.

## Idea
A dentist presented like a fashion house: black-and-white portraits of the doctors, a condensed italic serif, a smile-shaped logo line (the ADA mark is a curve like a smile).

## Moments
1. **Loader:** a thin arc spinning, then the smile logo drawn (DrawSVG) on dark navy.
2. **"Our goal is to deliver world-class..."** ink-as-you-read (`data-fill-by-scroll`), beside a B/W portrait of the lead dentist and a row of small team faces "+21".
3. **Services as big italic serif titles over B/W photos** ("Restorative Dentistry", "Preventive Care", "Beyond the Smile"), each with a short list of treatments in the corner.
4. **"Technology-Driven" over a hand on the scanner**, then the machines as a numbered list on pale grey (iTero, Solea Laser, Digital Imaging, 3D CAT Scan), the photo swapping per item.
5. **"Team of Experts"** huge type with the doctors' heads rising through it.
6. **Numbers as balls dropping into an arc:** circles of different sizes (20K+, 27K, 15k, 35, 3) fall and settle into a bowl (Lottie/physics), under "Your Smile". The stat block is a toy.
7. **Close:** "Bringing Your Perfect Smile to Life" in italic serif over a B/W face, the smile logo under it; then a contact form with location tabs (Aventura, Bay Harbor, Coral Gables) and a footer with all three clinics' addresses and hours.

## What Disojo should take
- **A clinic or service business shot and set like fashion** (B/W portraits, condensed italic serif). Proves "premium" is the photography and type, not the topic.
- **Stats as objects that fall and settle**: numbers you play with, not a grid.
- **Location tabs on the contact form** for a business with several branches.

## Honest
The loader blocked the first 20 s of scanning; the very first screen was only seen on phone ("Premium Esthetic Dentistry").
