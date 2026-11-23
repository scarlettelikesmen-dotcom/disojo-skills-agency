/* https://coevalstudio.com/_nuxt/CommonButton.058c734e.js */
import {
  _ as u,
  g as p,
  S as o,
  f as n,
  i as _,
  o as d,
  c as m,
  a as c,
  t as r,
  P as b,
  L as h
} from "./entry.7e3c7585.js";
const y = {
    name: "CommonButton"
  },
  S = Object.assign(y, {
    props: {
      label: {
        type: String,
        required: !0
      },
      white: {
        type: Boolean,
        default: !1
      },
      noDifference: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["clicked"],
    setup(e, {
      emit: g
    }) {
      p.registerPlugin(o);
      const i = n(null),
        a = n(null),
        s = n(null);

      function f() {
        [a.value, s.value].forEach(t => {
          new o(t, {
            type: "chars",
            charsClass: "btn-span__char"
          })
        })
      }
      return _(() => {
        f()
      }), (l, t) => (d(), m("button", {
        onClick: t[0] || (t[0] = b(k => l.$emit("clicked", e.label), ["prevent", "stop"])),
        class: h(["btn text-h5", {
          difference: !e.noDifference,
          white: e.white
        }]),
        ref_key: "button",
        ref: i
      }, [c("span", {
        class: "btn-span --first",
        ref_key: "firstSpan",
        ref: a
      }, r(e.label), 513), c("span", {
        class: "btn-span --last",
        ref_key: "lastSpan",
        ref: s
      }, r(e.label), 513)], 2))
    }
  }),
  v = u(S, [
    ["__scopeId", "data-v-1c4fa146"]
  ]);
export {
  v as _
};