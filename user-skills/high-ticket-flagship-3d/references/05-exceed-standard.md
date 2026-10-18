# The exceed standard: how "better than the references" is measured

"Insane" is not a measurement. This is. Score each project at Gate 4 (plan), Phase 10 (QA) and before any "deploy". Every row has a way to check it. Targets marked (AGENTS.md) come from Disojo's standing engineering rules; others are proposals from the measured reference defects and need Tejjomay's confirmation.

## A. Craft (judged by eye, with a named reviewer: Tejjomay)
| # | Criterion | How to check |
|---|---|---|
| A1 | **One concept, stated without naming a colour or effect** | The brief's first line passes the bland test (`disojo-art-direction`) |
| A2 | **One signature move**, original to this client | The distinctness test (`04-no-copy-law.md` section 5) passes |
| A3 | **Type system:** at most 2 families, deliberate tracking and scale, licences recorded | `brand/tokens.json`, `00-admin/licences.md` |
| A4 | **Palette:** 3 to 4 colours with jobs, from the client's brand | `check_tokens.py` prints PASS; contrast recorded |
| A5 | **Real imagery or a well-lit real object**, never decoration or fake product UI | Screenshot review; the real/AI/placeholder list in the brief |
| A6 | **Voice:** specific, plain, a person wrote it; no filler or AI-slop words | `no-ai-slop`, `brand-voice` samples |
| A7 | **The scroll tells a story** with a point at every section | `plan/site-flow.md` storyboard has all columns filled |
| A8 | **Details finished:** hover and focus states, 404 page, favicon set, OG image, form states, empty and error states | Click-through, `click-path-audit` |

## B. First impression (the references' biggest weakness)
| # | Criterion | Target | Check |
|---|---|---|---|
| B1 | Real content visible on the first screen | within about 1 s, desktop and phone | Screenshots at 1 s, 3 s, 8 s; `qa_probe.js` firstScreenContent |
| B2 | Intro or preloader length | capped near 3 s, tied to real progress, with skip | Timed run; code review |
| B3 | Scroll never locked past the cap | 0 s of lock after the cap | `qa_probe.js` scrollLock at 3 s and 8 s |
| B4 | No overlays over the hero | cookie and prompt UI never covers the hero | Screenshot |

## C. 3D quality
| # | Criterion | Target | Check |
|---|---|---|---|
| C1 | Lit by an HDRI, ACES tone mapping, one key light, real materials, subtle bloom | recipe followed | `disojo-3d-lookdev` checklist |
| C2 | Contact shadow or base so the object sits somewhere | present | Screenshot |
| C3 | Compared beside a reference frame at the same size | three differences listed and the biggest fixed | `qa/lookdev-compare.png` |
| C4 | Weights | model <= 0.6 MB, HDR <= 1.5 MB, video <= 3 MB | `qa_probe.js` heavyAssets |
| C5 | Fallbacks | no-WebGL static image with the same copy; reduced-motion path; phone simplified scene | Test each |
| C6 | Rendering pauses off-screen; model lazy-loaded | present | Code review, performance trace |
| C7 | Tested on a real-GPU browser | done | Note in report (headless software GL stalls) |

## D. Engineering and performance
| # | Criterion | Target | Check |
|---|---|---|---|
| D1 | Lighthouse (deployed URL, not local) | 90+ across Performance, Accessibility, Best Practices, SEO (AGENTS.md); explain any 3D shortfall in numbers | `disojo-premium-site-method/scripts/lighthouse_summary.sh` |
| D2 | Home page first load | <= 6-8 MB (from `disojo-site-archetypes`) | Network panel |
| D3 | No horizontal overflow at any test width | 0 px | `qa_probe.js` |
| D4 | No fixed UI overlapping text | none, or a deliberate blend that reads | `qa_probe.js` fixedUiOverlap and a screenshot |
| D5 | Fonts | licensed only; no trial or demo fonts | `qa_probe.js` fonts, licence log |
| D6 | Console clean | 0 errors | `read_console_messages` |
| D7 | Images | WebP or AVIF, <= 250 KB each (hero <= 400 KB) | `disojo-launch-checklist/scripts/optimize_images.py` |

## E. Access and honesty
| # | Criterion | Check |
|---|---|---|
| E1 | All copy lives in the DOM, not the canvas; visible focus; keyboard path | Tab through the page |
| E2 | Text contrast >= 4.5:1 body, 3:1 large | Recorded in tokens |
| E3 | `prefers-reduced-motion` respected everywhere | Emulate and test |
| E4 | Forms confirm success only when the endpoint does; mailto fallback | Intercepted-request test |
| E5 | No invented reviews, stats, prices, contacts; AI media disclosed | Content audit |
| E6 | Credit line present | Footer check |

## F. Consistency across projects (the "system" promise)
Every project has the same folder, a `tokens.json`, a distinctness record, a QA report with the same sections, and a licence log. That is how quality stays repeatable. A project missing any of them is not finished.

## Scoring
Craft (A) is judged; B to E are pass/fail with numbers. **Do not show a build with a failing B row** (the references fail here, so we win here). A and C are approved by Tejjomay at the gates. Record the scorecard in `qa/report.md`.

## What we do not claim
"Better than" is shown by the rows above, not asserted. Real phones, Safari, Firefox, slow networks and screen readers are untested unless a row says otherwise; the report must say so.
