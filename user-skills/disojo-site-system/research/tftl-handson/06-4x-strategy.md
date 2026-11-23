# 4X Strategy (4xstrategy.com), scanned 2026-11-23

Algorithmic FX software licensed to institutional funds. Study only.

## Stack
- **Nuxt (Vue)**, not Webflow. GSAP with ScrollTrigger, SplitText, Flip, DrawSVG, MotionPath, Observer, ScrollSmoother (smooth scroll by GSAP, not Lenis). Swiper. 2.4 MB total, no canvas, no video.
- Fonts: Astraneo (a squared techno display) + GT America. Black ground, one mint green, white cards.

## The idea
**The page is a trading chart.** The hero sits on a live-looking price line and volume bars; scrolling zooms into the chart until single candlesticks fill the screen; the services ("Quantitative strategy", "Market intelligence", "Risk management") are written on white and green candles standing at different heights, like a chart you read left to right. The subject's own picture (a candle chart) carries the content instead of cards.

## Moments
1. Loader: a thin vertical tick and a percentage, then the headline in the techno face over the chart.
2. Scroll zoom from the full chart into a few candles (drawn SVG, `data-svg-origin` on 253 elements: the chart is SVG animated by GSAP).
3. Candles as service cards, a big "7+" number badge.
4. Pricing as two cards (fixed-cost / performance-based), FAQ accordion, newsletter, then a mint footer with the wordmark huge and a rounded black panel sliding over it.

## What Disojo should take
- **The client's own diagram as the layout** (a chart, a plan, a score, a map): content sits on it instead of in a grid of cards.
- Zooming into the hero picture until one element of it becomes the next section.
- An SVG drawing animated by GSAP is enough; no WebGL needed.

## Honest
Scanned with a real wheel (14 stops), intro frames and 4 phone frames; code read from the bundle names. Not done: inner pages, hover states.
