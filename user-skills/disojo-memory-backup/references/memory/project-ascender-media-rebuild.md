---
name: project-ascender-media-rebuild
description: "Ascender Media flagship rebuild status, preview URL, open decisions and where the code lives"
metadata:
  node_type: memory
  type: project
  originSessionId: aec5c1a6-53dc-4b0c-890f-4259beb677e1
  modified: 2026-10-08T22:21:20.630Z
---

Built 2026-10-09: editing-suite concept site (transport-bar dock, timeline demos, pinned system tracks, export-preset pricing, chat-wall proof). Code: `~/Desktop/websites ARCHIVE/ascender-media/site` (git init done, no commits, no remote yet). Public noindex preview: https://ascender-media-preview.vercel.app (Vercel project ascender-media-preview). **Deployed to production 2026-10-09 at the user's request** (www + apex 200; Lighthouse 99/100/100/100; smoke 34/34). Rollback: social-growth-agency-9pzpqpkcw. Method saved as skill `disojo-premium-site-method`.

Measured on the preview: Lighthouse mobile 99 perf / 100 a11y / 100 best practices (SEO 69 is only the preview noindex header); smoke 34/34.

**Why:** user asked for a finished flagship, public link, no raw bits, before any contact.
**How to apply:** open items are form backend choice (FormSubmit used, needs one-time activation email), repo URL, "Beckett" name check, 24h stat vs plan turnaround, approval of H1 "Send the footage. We handle the rest." The old live form was fake (timer only). See [[feedback-unique-design-per-client]].


**2026-10-11 v2:** client said v1 reads as slop. Built v2 (light paper, cobalt, proof-first: real chats in the hero and a pinned wall, bento, verbs, one-panel pricing). Preview https://ascender-media-preview.vercel.app (smoke 36/36, Lighthouse 100/100/100, SEO 69 only from noindex). NOT yet on ascendermedia.in (still v1) until the client approves. Plan: Ascender PLAN-v2.md. No fake reels; option A (own sample reels) still open.

## v3 (2026-10-11): combined build, preview only
Tejjomay liked v2's look but found it too thin; asked to bring back the old site's depth in the new colours. Kept on request: the code-made fake editor hero (labelled "Illustrative preview... Not client footage"), timecode dock, craft demos (captions/hooks/pacing), pinned process board, ruler marquee. Removed: metaphor headings, stat ledger, three equal cards, numbered labels, glow, grain. Kept from v2: light paper + cobalt, chat wall, bento, one-panel pricing, one hero button. New: volume finder slider in Pricing, J/L chapter keys in the dock. Details section dropped (duplicated Inbox/Pricing). Preview https://ascender-media-v3-preview.vercel.app (noindex; v2 preview still up; v2 code in ascender-media/v2-backup). Smoke 52/52 on live, Lighthouse mobile 99/100/100 (SEO 69 = noindex), lint 0 fails. NOT on ascendermedia.in yet; waiting for go.
