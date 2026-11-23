/* https://alchemy.family/_nuxt/CAVGkUTV.js */
import {
  g as r,
  f as o,
  S as l
} from "./CWeo--9S.js";

function c(e, i = {}) {
  const t = e ? typeof e == "string" ? [...document.querySelectorAll(e)] : e : null;
  if (!t || t instanceof Array && t.length === 0) return r.timeline();
  let n = [];
  return t instanceof Array ? t.forEach(a => {
    const s = new o(a, {
      type: "lines"
    });
    n = [...n, ...s.lines]
  }) : n = new o(t, {
    type: "lines"
  }).lines, r.timeline().from(n, {
    opacity: 0,
    yPercent: 50,
    duration: 1,
    stagger: .1,
    ...i
  })
}

function g(e, i = {}, t = {}) {
  const n = c(e, t);
  return l.create({
    trigger: e,
    start: "center bottom",
    animation: n,
    ...i
  })
}
export {
  c as a, g as b
};