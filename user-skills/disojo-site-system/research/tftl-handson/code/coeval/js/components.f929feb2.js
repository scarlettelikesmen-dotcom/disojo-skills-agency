/* https://coevalstudio.com/_nuxt/components.f929feb2.js */
import {
  ak as i,
  al as l
} from "./entry.7e3c7585.js";
const o = n => Object.fromEntries(Object.entries(n).filter(([, e]) => e !== void 0)),
  d = (n, e) => (r, t) => (l(() => n({
    ...o(r),
    ...t.attrs
  }, t)), () => {
    var s, a;
    return e ? (a = (s = t.slots).default) == null ? void 0 : a.call(s) : null
  }),
  f = i({
    name: "Title",
    inheritAttrs: !1,
    setup: d((n, {
      slots: e
    }) => {
      var t, s, a;
      return {
        title: ((a = (s = (t = e.default) == null ? void 0 : t.call(e)) == null ? void 0 : s[0]) == null ? void 0 : a.children) || null
      }
    })
  }),
  p = i({
    name: "Head",
    inheritAttrs: !1,
    setup: (n, e) => () => {
      var r, t;
      return (t = (r = e.slots).default) == null ? void 0 : t.call(r)
    }
  });
export {
  p as H, f as T
};