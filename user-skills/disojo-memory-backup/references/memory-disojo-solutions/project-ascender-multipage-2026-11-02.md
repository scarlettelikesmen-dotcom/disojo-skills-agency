---
name: project-ascender-multipage-2026-11-02
description: Ascender rebuild-v6 on 2026-11-02 got a hero posting calendar, Monolog button motion and a 7-page multipage split (copied from the Oct 14 site's structure); local only, NOT deployed
metadata:
  type: project
---

Local work in `~/Desktop/websites ARCHIVE/ascender-media/rebuild-v6` (served on localhost:4490). None of it is deployed.
- The desktop hero has a posting calendar ("A month on Starter", 26 Reel/Short chips). "(Illustration)" was removed at Tejjo's request. Still open: whether to relabel Reel/Short (Instagram/YouTube, all "Video", or keep as is).
- Buttons use the Monolog motion: cubic-bezier(.16,1,.35,1) at .6s, a label roll and twin arrows.
- Multipage: `build.py` splits `src/index.src.html` into /, /process/, /services/, /proof/, /pricing/, /contact/ and 404.html. The old single-page build is `build_single.py`. Backups are `src/index.src.before-*.html`. Only the structure was copied from 127.0.0.1:4801 (the Oct 14 rebrand); the teaser lines and page titles came from it too.
- Before deploying: favicon.png, favicon.ico and img/apple-touch-icon.png are missing (they 404 on the live site already). Add a .vercelignore for src/, the backups, _qa and _study.

**Why:** Tejjo said the desktop hero looked empty and asked: "build ours multipage".
**How to apply:** iterate on localhost:4490; deploy only on "deploy". Related: [[project-ascender-site-iteration-plan]]

Later 2026-11-02: page changes made smooth. Added cross-document view transitions (the nav stays fixed, the active pill slides, the page fades up), prerendering on hover via speculation rules (animations wait for `whenShown`), and the page-head heading is fitted before first paint (the Services heading used to jump from 384px to 100px). Proof copy now says the work is white label, under NDA, so the videos stay private (Tejjo's request). Backups are `*.before-smoothnav.*`. Tejjo said: smoothness like this is expected without asking.
