/* https://pictoric.com.ua/_nuxt/Default.49af0b27.js */
import {
  _ as a
} from "./SansSerif.76e1e15a.js";
import {
  d as _,
  b as s,
  c,
  g as o,
  a0 as l,
  y as r,
  t as p,
  n as u,
  _ as d
} from "./entry.6cb2d70d.js";
const i = {
    class: "button-icon"
  },
  m = {
    class: "button-text a1"
  },
  f = _({
    __name: "Default",
    props: {
      text: {},
      theme: {
        default: "yellow"
      }
    },
    setup(e) {
      return (t, b) => {
        const n = a;
        return s(), c("span", {
          class: u(["button-inner", [e.theme]])
        }, [o("span", i, [t.$slots.default ? l(t.$slots, "default", {
          key: 0
        }, void 0, !0) : (s(), r(n, {
          key: 1
        }))]), o("span", m, p(e.text), 1)], 2)
      }
    }
  });
const h = d(f, [
  ["__scopeId", "data-v-0cb6847b"]
]);
export {
  h as _
};