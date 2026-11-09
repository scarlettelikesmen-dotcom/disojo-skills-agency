---
name: work-summary-2026-11-09
description: Kiran design stopped after slop verdict; audit of the website skills and CLAUDE.md; root fix in progress (backup at skills-archive/2026-11-09-pre-fix)
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-09T15:06:27.795Z
---

**2026-11-09.** Kiran Roy: design-v1 rejected as default slop; design stopped, nothing further built until Tejjo says so. TODO(Kiran) inputs still open (student proof, "1000+", 25,000 Founders Pass, bundle links, category pairing, "Siya Goyal" title).

Tejjo asked to read every skill for the website flagship offer plus CLAUDE.md and "fix everything". Audit findings: no idea stage; rulebook prescribed the hated hero; anti-slop rule lost in the 2 Nov merge; system built as a template; enforcement backwards (hook forces the defect gate, side-by-side self-scored); imported skills teach slop; lessons stuck in project memory, skills map damaged, three reference lists.

**Done and verified:** disojo-site-system now runs intake, idea, message, three first screens, build, defect checks, ship. New `references/idea.md`, `defaults-to-avoid.md`, `templates/IDEA.md`. Hero recipe removed. `site_guard.cjs` has a `pre` mode wired as PreToolUse (14 pipe tests passed). Gate now fails Fraunces/Inter/Instrument Serif and the one-word h1 accent (run on Kiran design-v1: 4 FAIL, 4 WARN, it passed before). side_by_side no longer self-scores. Flagship map, process and one reference list repaired. Kiran `brief/IDEA.md` stub added.
**Later:** six imported skills archived with useful parts moved; Astro-only and footer location/clock rules added. **Not done:** CLAUDE.md swap (draft awaiting Tejjo), mirror not pushed. See [[project-offer-skills-plan]].

**Latest direction from Tejjo:** keep the 20 marketing skills; bring brand-launch, brand-measurement, brand-voice into Visual identity; review the six imported skills together first; then website types by brand type. Details in [[project-offer-skills-plan]].

**Evening state:** six website types locked (Product incl. real estate for 3D, Catalogue, Studio, Person, Local practice, Software). Astro-only and footer location + clock shipped in guard, gate, deploy, starter; tested in scratch, full `new_site.sh` run and real phones/Safari untested. Benchmark cut list for the thin types in progress; per-type skills NOT written until Tejjo cuts it. Still pending: bottlenecks.md, `disojo-visual-identity`, `disojo-digital-systems`, CLAUDE.md swap, mirror push.

Backup before edits: `~/.claude/skills-archive/2026-11-09-pre-fix/`. Rest of the state: see [[feedback-idea-before-pixels]]. Nothing deployed, nothing pushed.

**Late evening:** Awwwards pass for the six types. Method: curl gets 403 on listing pages, built-in browser reads them; categories like `/websites/real-estate/`, `/websites/winner_category_product/`; cards `.card-site`, real URL from the "visit site" link on `/sites/<slug>`. 134 candidates checked, 65 curated into a cut page at scratchpad `bench/site-benchmarks.html` (scratchpad is wiped on restart; move anything kept into the skill folder). Tejjo rejected "they did not load" as an excuse: failed sites go through the in-app browser. Real blocks (Cloudflare challenge, "you have been blocked") are not to be bypassed; report those by name. Then straight on to the skills: bottlenecks.md, six type skills, disojo-visual-identity, disojo-digital-systems, discussing with Tejjo as we go.

**Night:** benchmark cut page published, 76 sites, private: https://claude.ai/artifact/L4Zia3Rph66sXruDPT4xzB (awaiting Tejjo's cuts; 3 types' worth of hands-on pass waits on them). Sources and screens saved in `disojo-site-system/research/awwwards-2026-11-09/` (20 MB, prune after the cut, mirror not pushed). Built and scratch-tested: `references/bottlenecks.md` (every rejection, and honestly whether a tool or only text stops it); `TYPE:` and `3D ALLOWED BY TEJJO:` in templates/IDEA.md + idea.md step 6; gate fails 3D outside Product (5 cases pass); deploy_demo refuses under 3 pages unless ONE_PAGE_OK holds Tejjo's words (stubbed, nothing published). Pilot type skill `disojo-type-local` written as the pattern; other five wait for Tejjo's OK on it. Not run on a real project. Awaiting: cuts, OK on pattern, teardown hook yes/no, CLAUDE.md draft, identity benchmark set.
