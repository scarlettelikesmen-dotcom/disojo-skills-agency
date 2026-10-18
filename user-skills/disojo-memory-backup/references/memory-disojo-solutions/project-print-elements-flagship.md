---
name: project-print-elements-flagship
description: "Fresh flagship build for Print Elements (Vijay Kapoor, Delta BC), signed 2026-10-14 at CAD 19,500; facts, rules, open questions"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-10-15T04:14:23.573Z
---

**FRESH BUILD (Tejjo, 2026-10-14):** nothing earlier is to be reused, consulted or revived. The old work was scrapped and the mediocre design it produced is not coming back. Start from the guidebook (skill `high-ticket-flagship-3d`) at Phase 2.

Client: Vijay Kapoor, Print Elements (printelements.ca, Instagram @printelements). Signed **CAD 19,500**; **4,000 received upfront** (currency presumed CAD, confirm). Client dislikes the current Wix site and says photos, logo assets and Instagram access are all available. Tejjo works alone on it (no Divyansh or freelancer).

Project folder: `~/Desktop/websites ARCHIVE/print-elements-flagship` (local git, no remote yet; make it private, the scope holds the fee). Draft scope sheet and asset request live there; the asset request is not sent.

**Quality bar:** the nine reference sites in the guidebook, never Postcards or Ascender. No-copy law applies.

**Confirmed by Tejjo 2026-10-15:** new logo and all branding are IN scope; deadline is **two weeks** (about Thu 2026-10-29, confirm exact date); build locally for the first days, no deploy until Tejjo says so; **3D decisions are taken jointly by Tejjo and Claude**.

**Phase 3 prep done 2026-10-15** (in `01-discovery/`): audit of printelements.ca (Lighthouse mobile Perf 53, LCP 10.7 s, 4.09 MB, 397 requests; Services page is Wix template text; 4 nav links point to home; conflicting phones/emails; postcode is V4C 0C1), market scan (partial: FASTSIGNS blocked, Minuteman not viewed), Instagram review (@printelements 7,657 followers, 1,672 posts), discovery guide for Vijay, brand context draft (`brand/00-context.md`). Plan: `00-admin/plan.md`. 3D shortlist: `3d/route-shortlist.md` (A storefront transformation leads tentatively, D lit logo as fallback; nothing chosen).

**Decided 2026-10-15:** 3D lead = Option A, storefront transformation (bare to branded shopfront, scroll-driven), fallback Option D (lit new mark) if the Gate 3 test scene is not premium by 10-21. No site visit possible (Tejjo in India, client in Canada): photos come from Vijay via a shot list. Discovery call with Vijay has HAPPENED but its notes are not yet captured: ask Tejjo for transcript, recording or notes. Plans: `3d/storefront-plan.md`, `01-discovery/photo-shotlist-for-vijay.md`.

**Decided 2026-10-15 (later):** the call was NOT recorded and Tejjo said "forget the call": work from research (site audit, market scan, Instagram incl. highlights) and a written follow-up to Vijay if needed. Our own logo is designed by us (the client's logo files are optional reference only). **Images: ChatGPT image generation is the tool, run by Tejjo; Claude writes prompts and reviews.** Rules in `brief/image-strategy.md`: real photos from Vijay for all proof, no AI fabricated proof or customers or text-in-image, disclose AI, log every prompt. Project brief: `00-admin/project-brief.md` (working concept "the quiet shopfront", NOT yet approved at Gate 1).

**Open (ask, never assume):** payment schedule; which GitHub account for the remote; exactly what the client will send; which phone/email are real; whether wraps are core; price publication.

**Update 2026-10-17:** First full site built locally (`site/`, Vite + Three.js) and previewed at https://print-elements-preview.vercel.app (own Vercel project, noindex). Tejjo chose the FULLY PHOTOREAL route and will extend the deadline with Vijay (suggested mid-November). Plan: Blender (5.2.2, installed at /Applications/Blender.app, run headless by scripts in `3d/blender/`) + Cycles pre-rendered scroll sequence; Cycles on Metal works (M1 Pro 14-core GPU, 16 GB). Real facade reference is the Instagram post DVimb7lGPGW (door left with "109", wide gridded window, dark transom with OPEN sign). Hero font is Krona One (closest to the pe mark's wide squared-round shape). Vijay's own line "make your brand impossible to miss" is pinned on his Instagram.

**Update 2026-10-18 (REBRAND REVERSED):** Vijay did NOT request a rebrand. Tejjo: use their MAIN LOGO ONLY for everything. My "pe" mark, Krona One, ember/ink palette are DROPPED. Brand now = their round badge (CMYK ink drip, brown "print", magenta "elements", tagline "you think it, we print it", 778.321.1010), files in `brand/client-logo/` (original from printelements.ca Wix media 2700x2100; `rondo.avif` from Tejjo is only 198x160; Tejjo suggested the Instagram profile picture could be a better source but I never log into Instagram: ask Vijay for the vector). Palette from the logo: magenta #EC008C (ink), brown #602800, cyan #4FC9F5, yellow #FFF212, key #383038; site accent #D0007C (white text passes). Font Questrial (Century-Gothic-like). Hero line = their tagline; last beat = Vijay's pinned line.
Pipeline since 10-17: dusk Cycles hero (240 desktop / 180 phone), blending scrub engine (`makeSeq` in site/src/main.js, frames as blobs + ImageBitmap window), "explore the shopfront" hotspots from Blender masks (`--masks`), studio product renders (`build_products.py`), "step inside" sequence (`--inside`), queue scripts `render_all.sh` then `render_queue2.sh` (resumable, outputs in 3d/renders). Old-brand frames moved to `3d/renders/_old_pe_brand`. Preview deploy only to print-elements-preview. Site frames dirs: /seq/d3,p3 (hero), /seq/in-d,in-p (inside), /prod/<name>.
