# Monolog: why it looks the way it does (measured 2026-11-10)

bymonolog.com, a Melbourne and Hanoi studio, on Tejjo's approved list. I walked home, about (a drawer), work and contact at 1512 and 390. Raw: `raw/monolog/`. Study only: never copy its fonts, copy, images or code.

## The one-line read
A studio that sounds like a person: one plain grotesk doing almost everything, black and warm grey that flip by section, film grain, and documentary video of the actual team. Calm type, loud content.

## Colour
- Near-black `#080807` covers 32% of all pixels and warm grey paper `#e8e8e3` the next big share. Sections flip between them as you scroll.
- **Hierarchy by grey value, not only by size.** Text colours:
  - `#e8e8e3` and `#080807` for what matters
  - `#938f8a` (37% of characters) and `#6b645c` for everything secondary
  - In the services list the current item is light and the others are grey at the same size. The long statement greys out word by word as you scroll past it.
- **No UI accent colour.** Colour comes only from the client work images (orange Shortscut, pink murals, green HISS). The interface stays neutral so the work is the only colour.
- Film grain over every flat surface, so black and grey never look like default CSS.

## Typography
- **One grotesk carries 96% of characters** (weights 500 and 700, Khteka), with three supporting jobs:
  - a mono at 10 to 12px capitals for meta lines ("EST 2022", captions, testimonial credits)
  - a condensed face in capitals for a handful of shouts ("WE CLOSE THAT GAP", "PROJECT JOURNEY")
- **The same negative tracking at every display size: -0.03em** at 143, 95, 74 and 54px. Leading is 0.9 to 1.0 on display and 1.25 on body.
- **Scale:** 143, 95, 74, 54, 46, 24, 20, 18 (body), 16, 12, 10. The largest is about 8 times body, much flatter than ERA.
  - More sizes than ERA, but each has one job:
    - 24px bold is the statement voice
    - 18px is reading
    - 12px mono is meta
  - On phones the same steps compress (81, 50, 33, 22, 16, 14, 10) and the -0.03em tracking stays.
- Text is left aligned and ragged. No centred paragraphs except the one quote.

## Spacing and layout
- **One gutter rules everything.** About 26.9px at 1512 (1.78vw). Section paddings are about 1.2, 4, 5.8 and 8 gutters (31.7, 108.7, 155.05, 216.3px). It is fluid, so it holds at every width.
- **Inside a group things are tight; between groups they are far apart.**
  - Measured gaps cluster at 12px (x57) and 24px (x37), then jump to 80px and 256px.
  - There is almost nothing at 40 to 60px.
  - That contrast is what makes groups read as groups.
- **Asymmetric two-zone grid.** A thin label column on the left (a dot plus "Success Stories", "FAQs", "What we can help with") and the content starting about a third of the way across (444 to 520px). Headlines fill the right two thirds.
- **Work is staggered:** one image about half the screen wide, title, line, one number with a one-line result ("21% increase in conversions"). It alternates position as you scroll. No card borders, no grid of tiles.
- **Moments of scale:**
  - "WE CLOSE [video] THAT GAP": a video opens between the words
  - "PROJECT JOURNEY" runs edge to edge
  - "LET'S BUILD AN EXPERIENCE THAT MOVES → PEOPLE" sits over full-bleed b/w documentary video
- About 95 words a screen. It is wordier than ERA, but the words sit in small, well-spaced type.

## Images and video
- Corners are 0px, or 2.4px on small UI images (86 of 90 boxes at 0).
- Shapes: square (1:1), portrait 0.8, landscape 1.5 to 1.8, and a few wide 4.4 strips.
- **Real people**, filmed documentary style, in black and white with grain: the founder at the keyboard, hands on a notebook. This is the trust layer, and it cannot be faked with stock.
- Client work is shown as the client's own key visual, full colour, inside the neutral page.

## Buttons and links
- **The main button is small:**
  - a near-black or light rectangle, radius 2.4px, 18px text at weight 500
  - a small square arrow tile at the end ("Start a project ↗", "Tell us your story ↗")
  - On hover the label rolls and the arrow tile swaps (`.22,1,.36,1`, 0.375s on colour).
  - Inner transforms use a slight overshoot `.48,1.68,.64,1` at 0.35s. That is the springy feel.
- **The menu and footer nav are a list in big type** (about 54px) with hairline rules. A row fills on hover and an arrow appears.
- FAQ rows are full-width hairline rows. Logos sit in a strict row with mono captions under each.
- **Footer:**
  - huge nav list, a live Hanoi clock and date, "Back to top"
  - a halftone liquid shape at the bottom that moves with the pointer
  - "Ask Claude / Gemini / ChatGPT about MONOLOG" icon buttons
- A custom cursor carries a label (the probe read "Hello world").

## What we would have done instead
| We would have done | They did |
|---|---|
| Accent colour on CTAs | Neutral UI, colour only from the work |
| A bordered card grid of work | Staggered single images with one number each |
| Mid-size headings everywhere | Grey value for hierarchy, one statement size |
| Stock or AI imagery | Their own team on film |
| Even 40 to 64px gaps | Tight 12/24 inside groups, 80 to 256 between |
