/* https://13322566869.com/_nuxt/Link.d8229fef.js */
import {
  d as c,
  o as n,
  H as l,
  f as i,
  z as r,
  t as a,
  B as o,
  b as k,
  M as p,
  v as d
} from "./entry.3d26c39b.js";
const f = ["href"],
  u = c({
    __name: "Link",
    props: {
      isNuxtLink: {
        type: Boolean
      },
      text: {},
      link: {},
      isBlack: {
        type: Boolean
      }
    },
    setup(s) {
      const e = s;
      return (t, x) => {
        const _ = p;
        return e.isNuxtLink ? (n(), l(_, {
          key: 0,
          to: e.link,
          class: o(["default-link hover-fadein", {
            _black: t.isBlack
          }])
        }, {
          default: i(() => [r(a(e.text), 1)]),
          _: 1
        }, 8, ["to", "class"])) : (n(), k("a", {
          key: 1,
          href: e.link,
          target: "_blank",
          rel: "noopener noreferrer",
          class: o(["default-link hover-fadein", {
            _black: t.isBlack
          }])
        }, a(e.text), 11, f))
      }
    }
  });
const B = d(u, [
  ["__scopeId", "data-v-446acb72"]
]);
export {
  B as _
};