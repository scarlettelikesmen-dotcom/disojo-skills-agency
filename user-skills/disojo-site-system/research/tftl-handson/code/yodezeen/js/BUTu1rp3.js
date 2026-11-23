/* https://yodezeen.com/_nuxt/BUTu1rp3.js */
import {
  u as r
} from "./vJMSihe0.js";
import {
  z as a,
  g as i
} from "./BfIK-IeK.js";
async function s(t) {
  const e = r(t.element);
  if (await a(), !!e) return i.fromTo(e, {
    yPercent: 150,
    rotate: 2
  }, {
    ease: "power4.inOut",
    yPercent: 0,
    rotate: 0,
    stagger: .2,
    duration: 1.5,
    ...t.values,
    scrollTrigger: {
      trigger: t.element,
      start: "top bottom"
    }
  })
}
export {
  s as a
};