---
name: disojo-client-intake
description: Turn a new client's raw assets into a build plan and a filled brand config in minutes. Use the moment Tejjomay says "I have a new client", sends product photos/videos/logos, or shares a client's website. Inventories the files, flags what will cause trouble, picks the archetype, lists what is missing, drafts the asset-request message to send the client, and scaffolds the project from disojo-site-starter with the brand config pre-filled.
---

# Disojo client intake

Goal: Tejjomay sends assets; within one session there is (1) an honest inventory, (2) a chosen archetype, (3) a gap list and the message to
send the client, (4) a scaffolded project with `brand.config.js` filled from what we actually have. Nothing invented.

## When the client has not sent anything yet
1. Send `templates/asset-request.md` (edit the name; keep it as one message).
2. Ask Tejjomay for the client's current site or Instagram so we can audit it (screenshots hero/mid/end, desktop + phone; list products, prices,
   claims, policies). Record in `<project>/notes/audit.md`.

## When assets arrive (do these in order)
1. **Inventory**: `python3 ~/.claude/skills/disojo-client-intake/scripts/inventory_assets.py <folder> --md notes/inventory.md`
   (needs `pip install pillow` in a venv; `ffprobe` for videos). Then OPEN the key files and look: the script cannot see whether a label is
   readable, a bottle is the real one, or a photo is a screenshot.
2. **Pick the archetype** with `disojo-site-archetypes` (decision tree). State the choice and why in one line. If assets support a lighter
   archetype than the one the client expects, say so.
3. **Hero route** from what exists:
   | They have | Do |
   |---|---|
   | A steady turntable video of the product | Slice to frames (`disojo-scroll-site-rebuild/scripts/extract_frames.sh`), `hero.frameCount = N` |
   | Only stills | `hero.frameCount: 1` with the best still, OR generate a turntable from a straight-on still (prompt + warnings in `disojo-scroll-site-rebuild/references/prompts.md`; compare to the real product before showing) |
   | A 3D model (GLB) | Switch to `disojo-3d-product-site` |
   | Nothing usable | Stop and request photos; do not fake the hero |
4. **Products**: per product make `images/<slug>.jpg` (`card_crop.py`) and, if the wheel/quiz are used, a transparent cut-out (`cutout.py`).
   Pull the tint colours from the real label.
5. **Scaffold**: copy `disojo-site-starter/starter`, fill `src/brand.config.js` and `src/data/products.js` from the brand brief
   (`templates/brand-brief.md`). Unknowns become `TODO(client)`, never made-up copy. `testimonials.enabled=false` and `checkout.mode='demo'` until real.
6. **Gap list + message**: list exactly what is missing and draft the follow-up to the client (short, specific, grouped by priority).
7. **Verify**: `npm run build`, run `scripts/smoke.cjs`, screenshot desktop + phone, then show Tejjomay the running demo, not a plan.

## Rules that came from the Postcards build
- Take label wording from a photo of the real label, character for character. AI tools mangle small print.
- Never present placeholder content as real (reviews, offers, products, sample sets). If a section has no real data, switch it off.
- One flagship demo per pitch: do the whole section, verify it, then show. Do not stream small check-ins.
- Disclose AI-generated assets (and the invisible SynthID mark) to the client.
- Keep the client's secrets out of the repo (`.env*`, store tokens). Never paste keys into chat.

## Outputs to leave in the project (`notes/`)
`audit.md` (existing site), `inventory.md`, `brand-brief.md` (filled), `gaps.md` (what we still need), `decisions.md` (archetype, hero route, why).
These make the handover and any later session fast.
