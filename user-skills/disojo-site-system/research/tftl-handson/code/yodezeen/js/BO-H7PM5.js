/* https://yodezeen.com/_nuxt/BO-H7PM5.js */
import {
  g as i,
  X as a
} from "./BfIK-IeK.js";

function r(t, o) {
  const n = typeof t == "string" ? document.querySelectorAll(t) : t,
    e = i.timeline(),
    s = new a(n, {
      type: "lines,words",
      linesClass: "line"
    });
  return i.to(n, {
    autoAlpha: 1
  }), e.from(s.lines, {
    transition: "unset",
    y: 90,
    delay: .1,
    opacity: 0,
    duration: 1,
    stagger: .1,
    ...o
  }), e.set(s.lines, {
    clearProps: "all"
  }), e
}
export {
  r as a
};