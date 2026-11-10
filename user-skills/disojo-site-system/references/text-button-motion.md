# Text button motion (hard rule, Tejjomay, 2026-11-10)

Every textual button on every site has one of these two label effects on hover and keyboard focus. Tejjomay's names:

| Name | What moves | Source |
|---|---|---|
| **Up down** (Disojo) | The whole label rolls up as one block and its copy arrives from below | `starter/src/components/Btn.astro`, `.btn .roll` in `starter/src/styles/base.css` (0.7s, strong ease-out, -130% / 130%) |
| **Side up down** (Print Elements) | Each letter rolls up to its twin, one after another, so the roll travels sideways across the word | Print Elements v8 `src/scripts/buttons.js` and `global.css`; first ported to lilt |

Which one a site gets is Tejjomay's call or follows from the idea. The button's shape, colour and everything else still come from the idea; only this label motion is fixed.

A textual button means any `<button>` with words, any link styled as a button, nav links, and text calls to action such as "See the Panel". Image-only controls are outside it. Leave the footer credit alone: its text must stay exact.

## Side up down, exact code
`src/lib/wave.js`, rendered on the server so labels do not shift when the page loads:
```js
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
export const wave = text =>
  `<span class="wave-t">${esc(text)}</span><span class="wave" aria-hidden="true">${[...text].map((c, i) => `<span class="ch" style="--i:${i}" data-c="${esc(c)}">${esc(c)}</span>`).join('')}</span>`;
```
Use: `<a class="..." href="..." set:html={wave('Label')}></a>`. A label that changes in the browser: `el.innerHTML = wave('New label')`.
```css
.wave-t{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.wave{display:inline-block;overflow:hidden;vertical-align:top;line-height:1.25;padding-bottom:.04em;white-space:nowrap}
.wave .ch{display:inline-block;position:relative;white-space:pre;transition:transform .5s cubic-bezier(.625,.05,0,1);transition-delay:calc(var(--i)*14ms)}
.wave .ch::after{content:attr(data-c);position:absolute;left:0;top:100%}
:is(a,button):is(:hover,:focus-visible) .wave .ch{transform:translateY(-100%)}
@media (prefers-reduced-motion:reduce){.wave .ch{transition:none;transform:none!important}}
```
Notes from lilt: use the curve through a token, because `system_check` allows two easings. `.wave` is 1.25em tall, so tight display type needs negative `margin-block` to keep its size. A parent rule like `.x span` also hits the letters: write `.x>span`. Letters lose kerning when split, about 1 to 2 px at button size and more at display size.

`premium_gate.cjs` fails a page with a visible text button that has neither `.roll` nor `.wave` inside it.
