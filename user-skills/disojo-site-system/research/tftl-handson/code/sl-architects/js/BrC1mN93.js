/* https://ab-sl.ru/_nuxt/BrC1mN93.js */
import {
  S as p,
  k as r
} from "./DROVP5M4.js";

function h(t, s) {
  if (!t) return null;
  const {
    paused: a = !1,
    withoutScrollTrigger: i = !1
  } = s || {}, e = new p(t, {
    type: "words,chars",
    tag: "span",
    charsClass: "split-char"
  });
  r.set(e.words, {
    perspective: 1e3
  });
  const o = r.timeline({
    paused: a,
    ...!i && {
      scrollTrigger: {
        trigger: t,
        start: "center bottom"
      }
    }
  });
  return e.words.forEach(l => {
    const n = l.querySelectorAll(".split-char"),
      c = r.timeline().fromTo([...n], {
        willChange: "transform",
        opacity: 0,
        rotationY: 90
      }, {
        duration: .6,
        ease: "expo",
        opacity: 1,
        rotationY: 0,
        stagger: {
          each: .04,
          from: "end"
        }
      });
    o.add(c, `previous+=${Math.random()*.5}`)
  }), o
}
export {
  h as t
};