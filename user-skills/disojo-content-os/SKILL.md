---
name: disojo-content-os
description: START HERE for any content planning or management request across Tejjomay's three Instagram accounts (@disojo.solutions, @codewithabel, abelkapoor-trading) - choosing the brand, strategy, virality, research, hooks, scripts, weekly calendar, filming lists, editing hand-off, compliance and consistency checks, performance logging and weekly review. Use when he says what should I post, plan this week, plan the month, research, write scripts for, review how it did, set up a new series, or names any of the three accounts.
---

# Disojo content OS

**Read first, every time: `$HUB/MASTER-CONTEXT.md`, then `$HUB/brands/OPERATING-MODEL.md`** (3 posts a day per account: A talking head, B hot-take reel, C carousel; tier-1 audience; 5-6 platforms). One place that runs three accounts end to end. Claude does research, strategy, hooks, scripts, direction, planning, editing and review; Tejjomay films, approves and posts (posting, DMs and comments are never done for him).

```
HUB=~/Desktop/"DISOJO SOLUTIONS"/content-hub      ENGINE=~/.claude/skills/disojo-reel-studio/engine
```
Memory (loaded each session): `content-portfolio-two-worlds`, `brand-disojo-solutions`, `brand-codewithabel`, `brand-abelkapoor-trading`.

## 1. Brand registry
| Slug (folder) | Account | World | Goal | Look |
|---|---|---|---|---|
| `disojo` | @disojo.solutions (agency) | Disojo | client leads (90 days) | calm editorial: ink/cream, Host Grotesk |
| `codewithabel` | @codewithabel (build in public) | Disojo | audience via real builds | dev log: IDE, mono, lime |
| `abelkapoor-trading` | trading personal brand (handle TO CONFIRM) | **Trading, fully separate** | pure value, no selling for 6+ months | trading journal: paper, serif, red pen |

**Separation rules (hard):** nothing from the Disojo world (Disojo, codewithabel, disojostudio.com, Tradriv, client work) ever appears on the trading account, and nothing trading-related on the other two. Never reuse one brand's visual identity or voice for another. Never reuse footage across worlds. See `$HUB/brands/README.md`.

## 2. First step of every request
1. Identify the brand (ask only if truly ambiguous). 2. Read `$HUB/brands/README.md`, then `brands/<slug>/brand.md`, `voice.md`, `strategy/strategy.md` and the latest `published/log.md`. 3. Respect `TO CONFIRM` markers: never present an unconfirmed fact as true. 4. Run the separation check on whatever you produce.

## 3. Weekly cycle (the routine)
| Step | What Claude does | Output (in the brand folder) |
|---|---|---|
| Review | Read `published/log.md`, compute what worked (3 s hold, watch time, sends per reach, follows, DMs); apply the decision rules in the strategy; note hypotheses | `research/review-YYYY-MM-DD.md` |
| Research | Short brief: what the audience is asking this week, what formats are moving, compliance changes; sources with dates and caveats (see section 5) | `research/brief-YYYY-MM-DD.md` |
| Plan | Next week's posts from the calendar, pillar mix, one goal per post, experiments running | `calendar/week-YYYY-MM-DD.md` |
| Write | Hooks (bank + new), scripts, A/B/C first lines, on-screen text, carousel copy, post captions (`disojo-content-copy`) | `scripts/`, `hooks/hook-bank.md` |
| Direct | Filming list: shots, lines, screen recordings needed, props, length targets, what to say and not say | `scripts/film-list-YYYY-MM-DD.md` |
| Edit | `disojo-reel-studio` / `disojo-carousel-studio` with the brand's identity | `edits/<name>/` |
| QA | Gates in section 4; `verify_reel.py`; look at the sheet | pass/fail note |
| Hand off | Video, caption, hashtags, alt text, posting time suggestion, one-line "what to watch for" | message |
| Log | After he posts: add the row; after 48 h: metrics; decide keep/kill/iterate | `published/log.md` |
Monthly: strategy review (does the positioning still hold?), prune pillars, update the memory files.

## 4. Quality gates (every piece)
1. **Facts:** every claim, number, quote and personal anecdote is confirmed or removed; unconfirmed items listed for him.
2. **Compliance:** trading = education only, no advice/recommendations/return or win-rate claims, no selling, disclaimer on screen and in caption, no unsourced stats; disojo = no client names/figures without OK, no pricing, results "as reported by the client".
3. **Separation:** nothing crosses worlds; look and voice match the brand.
4. **Voice:** matches `voice.md`; anti-slop pass; blunt lines flagged for his call.
5. **Design/motion:** per `disojo-motion-craft`; look at frames; hard checks pass.
6. **One goal, one CTA** per post.

## 5. Research rules
Allowed: web search and public web pages, his own analytics and comments he pastes, transcripts of his clips, public posts he points to. Always record source, date and caveat; say plainly when evidence is thin (marketing blogs, vendor stats). **Do not scrape Instagram or circumvent blocks** (Reddit returned 403: skip it); ask first before any scraper (Apify) and say it is a ToS gray area. Regulations: cite the primary text where possible and say "verify with a lawyer".

## 6. Where skills fit
`disojo-reel-studio` (edit), `disojo-carousel-studio`, `disojo-panel-designer`, `disojo-motion-craft`, `disojo-sound-design`, `disojo-short-form-playbook` (numbers), `disojo-brand-motion-intake` (a brand's look), `disojo-content-copy` (copy), `disojo-reel-export`. From the imported content skills: `going-viral` (goal -> emotion -> hook), `viral-hook-writer`, `hook-mining`, `ab-hook-tester`, `content-research`, `trend-spotter`, `competitor-teardown`, `comment-mining`, `content-pillar-builder`, `series-planner`, `content-calendar`, `audience-personas`, `positioning-audit`, `analytics-readout`. **Not used:** `comment-responder` and any auto-DM/auto-reply flow (DMs are his).

## 7. Templates (`templates/`)
`weekly-plan.md`, `research-brief.md`, `film-list.md`, `post-package.md`, `weekly-review.md`. Copy into the brand folder with the date.

## 8. Current state
See `$HUB/MASTER-CONTEXT.md` section 8 (done, not built, next builds in order, TO CONFIRM). Do not duplicate state here.

## 9. Distribution layer (decided 2026-10-14): mass production, consistent quality
Outlets: `abelkapoor-trading` 5 (TikTok, Instagram, Snapchat, YouTube, X); `codewithabel` and `disojo` 6 (those five + LinkedIn). Handles per platform: TO CONFIRM (keep them identical where possible).
Rules from research (sources in `brands/disojo/research/distribution.md`):
- **One idea, many native variants.** Never upload a platform's watermarked export elsewhere; export clean masters. Instagram and TikTok reportedly drop watermarked/reuploaded content from recommendations, and credit does not help. Change at least the first line, caption, cover and title per platform; use his A/B/C hook variants across platforms (which doubles as testing).
- **Human contribution is the protection against "mass-produced" policies** (YouTube's July 2025 inauthentic-content rule targets templated videos with minimal variation). Real ideas, real voice, real footage; templates give consistency, content gives variety.
- **Platform fit:** LinkedIn = native captioned talking-head from a personal profile, no outbound links in the post; X = text-first, where indie devs and finance talk; Snapchat Spotlight = reach bonus (monetisation is invitation-only with high thresholds); YouTube Shorts and TikTok = discovery.
- Claude prepares per-platform packs (caption, title, hashtags, cover, alt text) and a scheduler-ready sheet; Tejjomay uploads/schedules and posts. Never automate engagement.
- Log every post per platform in `published/log.md`; review per platform; drop a platform that does not earn its effort after 30 days.
