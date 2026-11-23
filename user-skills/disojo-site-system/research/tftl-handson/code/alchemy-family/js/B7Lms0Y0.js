/* https://alchemy.family/_nuxt/B7Lms0Y0.js */
import {
  _ as p,
  o as f,
  c as l,
  p as u,
  l as h,
  a as r,
  d as m,
  r as b,
  e as g,
  a7 as k
} from "./CWeo--9S.js";
const v = {},
  s = a => (u("data-v-1c5b1a32"), a = a(), h(), a),
  x = {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg"
  },
  w = s(() => r("path", {
    d: "M1.08789 1.17139L10.9165 11"
  }, null, -1)),
  S = s(() => r("path", {
    d: "M10.9141 1.17139L1.08545 11"
  }, null, -1)),
  y = [w, S];

function T(a, e) {
  return f(), l("svg", x, y)
}
const M = p(v, [
    ["render", T],
    ["__scopeId", "data-v-1c5b1a32"]
  ]),
  B = Symbol.for("nuxt:client-only"),
  C = m({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(a, {
      slots: e,
      attrs: _
    }) {
      const n = b(!1);
      return g(() => {
        n.value = !0
      }), k(B, !0), t => {
        var o;
        if (n.value) return (o = e.default) == null ? void 0 : o.call(e);
        const c = e.fallback || e.placeholder;
        if (c) return c();
        const d = t.fallback || t.placeholder || "",
          i = t.fallbackTag || t.placeholderTag || "span";
        return l(i, _, d)
      }
    }
  });
export {
  C as _, M as a
};