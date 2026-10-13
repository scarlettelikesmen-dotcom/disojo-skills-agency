---
name: disojo-content-copy
description: Writes hooks, short-form scripts, on-screen text, captions, post captions and carousel copy for Tejjomay's three brands (Disojo, personal, trading) in his real voice, without AI-slop and within compliance guards. Use for any content writing request - "write hooks", "script this", "caption this", "post caption", "what should I post", or as the copy step inside disojo-reel-studio and disojo-carousel-studio.
---

# Disojo content copy

Source of rules: `~/.claude/skills/disojo-reel-studio/engine/copy-rules.md` (also at `$HUB/copy-rules.md`). It merges `going-viral`, `viral-hook-writer`, `reel-scripter`, `no-ai-slop` and `brand-voice`. Read it before writing. Voice profiles live in `$HUB/brands/<brand>/voice.md`; the trading/personal profile is built from his own transcripts (example: `engine/templates/voice.example.md`).

## Workflow
1. Identify brand, goal (save/share/follow/lead) and the one idea. If he gave a clip, the idea is what he said: do not substitute your own claim.
2. Read the brand's `voice.md`. If none exists, ask for 3-5 real samples (or run `engine/tools/transcribe_batch.py` on his old clips) and write one; do not imitate generic creators.
3. Draft. Hooks: write 10, rank 3, spoken under 12 words, open a gap not a fact, tease only what you pay off. On-screen hook: 2-3 lines, <= 18 chars each, a paraphrase not a duplicate of the spoken line.
4. Run the anti-slop pass from `no-ai-slop`: no throat-clearing, faux-insight setups, fake-profound closers, stacked fragments, em dashes in short copy, emoji headings. His signature "Most X don't lose because A. They lose because B." is allowed at most once per script because it is his real voice.
5. Honesty check: list every claim, number and promise that he must confirm. Never invent stats, results, quotes, testimonials, client names or offers.

## Post caption (for the reel)
First line carries the keyword or the hook (most people never tap "more"). One action only: save, share, follow or comment a keyword. No fake "comment WORD" unless he will deliver it. A few specific hashtags, not a wall. Trading: no signals or return promises. Disojo: no client names or prices. Draft, then flag; he posts it himself.

## Brand guards
- trading: process, discipline, mistakes; no advice, entries, targets or returns; only real verifiable numbers he gives; flag SEBI-adjacent wording and ask.
- disojo: calm and authoritative; no submissive phrasing; no client names/figures without client OK; Postcards +42% is client-reported; no pricing in public content.
- personal: only facts he confirmed about himself.

## Output format for a content package
1. Goal and one-line angle. 2. Hooks (10, 3 ranked, with on-screen versions). 3. Script with beats. 4. Shot notes. 5. Post caption + hashtags. 6. Claims he must confirm.
