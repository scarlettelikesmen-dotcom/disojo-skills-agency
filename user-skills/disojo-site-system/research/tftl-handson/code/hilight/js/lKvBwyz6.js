/* https://hilight.design/_nuxt/lKvBwyz6.js */
import {
  d as a,
  c as t,
  e as o,
  ak as r,
  v as l,
  o as p,
  n as c
} from "#entry";
const d = {
    class: "icon-wrap"
  },
  i = a({
    __name: "Round",
    props: {
      white: {
        type: Boolean
      },
      border: {
        type: Boolean
      }
    },
    setup(n) {
      return (s, e) => (p(), t("span", {
        class: l(["btn-template", {
          white: n.white,
          border: n.border
        }])
      }, [e[0] || (e[0] = o("span", {
        class: "circle"
      }, null, -1)), e[1] || (e[1] = o("span", {
        class: "background"
      }, null, -1)), o("span", d, [r(s.$slots, "default", {}, void 0)])], 2))
    }
  }),
  _ = Object.assign(c(i, [
    ["__scopeId", "data-v-96a9e3a3"]
  ]), {
    __name: "CommonButtonRound"
  });
export {
  _
};