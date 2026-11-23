/* https://archvoyage.ae/_nuxt/titleAnim.CszaPWUV.js */
import {
  S as r,
  P as a
} from "./entry.YPAKmh3d.js";

function i(t, s) {
  const e = new r(t, {
      type: "words",
      wordsClass: "anim-split-line-wrap",
      tag: "span"
    }),
    o = new r(e.words, {
      type: "words",
      tag: "span"
    }).words;
  a.from(o, {
    scrollTrigger: {
      trigger: t,
      start: "top bottom"
    },
    yPercent: 110,
    rotate: 10,
    duration: .6,
    transformOrigin: "left center",
    stagger: .1,
    clearProps: "all",
    delay: 0,
    ease: "custom",
    ...s
  })
}
export {
  i as t
};