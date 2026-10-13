---
name: disojo-short-form-playbook
description: The measured house style for short-form video (Reels, Shorts, TikTok) - pacing numbers, layouts, story structure, caption rules, B-roll preference order, sound rules and the lighter raw-reel style - plus how it maps onto Disojo's reel engine. Use when planning or critiquing any reel, deciding what to cut, how long each shot should be, what goes on screen, how to structure the hook-to-CTA arc, or when a reel feels slow, flat or unengaging.
---

# Disojo short-form playbook

Numbers measured by Nate Herk on 27 of his top Instagram Reels (Mar-Sep 2026) and published in the HyperFrames student kit `docs/EDITING-PLAYBOOK.md` (licence unclear: numbers and ideas only, nothing copied). Use them as a starting point for Tejjomay's style, not as law. Re-measure on his own best reels when he has data (`analytics-readout`, `content-audit`).

## Pacing
- Speech starts within 0.1 s. The file ends right after the last word. No intro or outro card.
- No pause over ~0.2 s anywhere; typical word gap 0.04 s (median), 4.0-4.7 words per second. **Tighten pauses, never speed the voice up.**
- Shots average 1.1-1.4 s, none over ~2.8 s. First cut at 0.6-1.0 s on the first charged word. Each item in a spoken list gets its own shot.
- Engine mapping: pauses > 0.28 s are cut; panels last 2-3.3 s (house number is shorter: shorten them when the idea is simple); first emphasis lands ~1.2 s.

## Layouts (1080x1920, every change a hard cut)
- **Split:** visual on top (y 0-880), speaker below. 30-42% of the reel.
- **Full B-roll:** footage fills the frame. 50-55% (in his reels).
- **Punch-in:** tight speaker shot for pivots, emphasis and the CTA. 5-15%.
- Speaker on screen ~45% of the time and never gone more than ~3.5 s. First frame is a split with the topic's tool or brand on top.
- Engine mapping: `layout:"split"` (default) = visual panels on top with the speaker below; full-speaker stretches with zoom pulses are the punch-ins.

## Story
1. Hook in the first 3 s: a claim or command that names the tool or person.
2. One line of credibility or context.
3. A list? Show all items early, blurred, as an open loop.
4. Each item: a card, a one-line definition, two or three literal visuals, a punch-in on the key line.
5. Resolution that calls back to the hook visual.
6. CTA: show the resource first, then a punch-in with the one keyword. **Never assemble a CTA the speaker did not say.**

## Captions
- 1-3 words per chunk on phrase boundaries; one look for the whole reel (same dark box with a thin light edge); never white on light (measure the pixels behind); on the seam in a split, on the chest in a punch-in (not the jaw), in a clear zone when the shot is text to read; never let captions blink out on text-heavy shots.
- His reels hard-swap captions with no pop; Tejjomay chose spring pop with marker highlights on emphasis words. Keep that, and keep chunks short.
- Colour on 25-45% of chunks (whole chunk only) is their technique; ours is the marker highlight on 4-6 words.

## B-roll preference order
1. Real footage of the thing named. 2. A real screen recording of the site/app, zoomed into the part discussed, visible cursor. 3. An animated UI mock (label mocks as examples). 4. AI video with concrete metaphors (not generic stock). 5. Short highlight crops of a real page (<1 s) on names, prices, badges.
Rules: **never invent numbers, results or a successful test**; a whole web page shrunk to phone size is unreadable (crop and highlight); small UI floating in empty space is the fastest "AI edit" tell (zoom it to fill the panel); never click "Accept" on cookie dialogs while recording; use each B-roll scene once per reel; an AI still image as B-roll is a mistake.

## Sound
Soft taps, dry clicks, paper, air; bed about 11 dB under the voice; master near -14/-16 LUFS, true peak <= -1.5; effects follow visible actions. See `disojo-sound-design`.

## Lighter "raw reel" style
No B-roll, no music. Cut retakes, stutters and dead air only, keep the last clean take. One word at a time, small, lower middle, synced to the exact word. Cut only after a word fully decays (transcripts end words 40-80 ms early).

## Process rules worth keeping
- Cut retakes first (keep the last clean take), tighten every pause, **plan the story before any visuals**, one visual per noun phrase, anchor every shot to the word it illustrates, mix, render a draft, check (frames, sync, sound, captions), fix, render final.
- A raw recording caps the edit: a clip with no hook and no CTA scores low however well it is cut. **Script the hook before he records** (use `disojo-content-copy`).
- Lip sync: select exact frames in one pass (the engine trims and concatenates in one filter graph); encoding segments separately and concatenating drifts about a frame at some joins.
- Check with: frame strips across every cut, caption contrast, loudness on the delivered file, and his own review as the final gate.
