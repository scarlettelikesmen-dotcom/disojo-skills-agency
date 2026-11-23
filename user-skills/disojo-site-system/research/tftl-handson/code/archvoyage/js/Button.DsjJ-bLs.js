/* https://archvoyage.ae/_nuxt/Button.DsjJ-bLs.js */
import {
  d as a,
  a as o,
  b as n,
  e as t,
  f as _,
  t as s,
  y as d,
  m as p
} from "./entry.YPAKmh3d.js";
const c = {
    class: "text p1 medium"
  },
  r = {
    class: "hover-text p1 medium"
  },
  m = {
    name: "CommonButton"
  },
  i = a({
    ...m,
    props: {
      text: {},
      disabled: {
        type: Boolean
      }
    },
    setup(l) {
      return (e, u) => (o(), n("div", {
        class: d(["button", {
          disabled: e.disabled
        }])
      }, [t("span", c, [_(s(e.text) + " ", 1), t("span", r, s(e.text), 1)])], 2))
    }
  }),
  x = p(i, [
    ["__scopeId", "data-v-2be0b3a5"]
  ]);
export {
  x as _
};