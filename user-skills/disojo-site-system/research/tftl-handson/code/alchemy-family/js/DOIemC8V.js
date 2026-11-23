/* https://alchemy.family/_nuxt/DOIemC8V.js */
import {
  d as b,
  r as y,
  e as _,
  o as u,
  c as p,
  a,
  t as r,
  k as c,
  C as V,
  H,
  g as B,
  p as C,
  l as S,
  _ as k
} from "./CWeo--9S.js";
const E = o => (C("data-v-f607211b"), o = o(), S(), o),
  I = ["type", "value", "disabled", "id", "name"],
  L = {
    class: "inner-placeholder"
  },
  q = {
    key: 0,
    class: "error-message"
  },
  R = E(() => a("div", {
    class: "wrap-icon"
  }, [a("svg", {
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    class: "inner-svg",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [a("rect", {
    y: "0.5",
    width: "9",
    height: "9",
    rx: "4.5",
    fill: "#D72525"
  }), a("path", {
    d: "M4.17417 6.846H4.82817V7.5H4.17417V6.846ZM4.17417 4.374V3.21H4.82217V4.374L4.67217 6.33H4.33017L4.17417 4.374Z",
    fill: "#E8E8E8"
  })])], -1)),
  D = b({
    __name: "Auth",
    props: {
      modelValue: {},
      placeholder: {},
      type: {
        default: "text"
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      required: {
        type: Boolean,
        default: !1
      },
      error: {}
    },
    emits: ["update:modelValue", "resetError", "focusHandler", "blurHandler"],
    setup(o, {
      emit: h
    }) {
      const f = o,
        s = y(null),
        l = h;

      function m(e) {
        const t = e.target;
        l("resetError"), l("update:modelValue", t.value)
      }

      function g(e) {
        const t = e.target;
        l("focusHandler", t.value)
      }

      function v(e) {
        const t = e.target;
        l("blurHandler", t.value)
      }

      function w() {
        if (!s.value) return;
        const e = s.value.querySelector("p.placeholder"),
          t = e == null ? void 0 : e.querySelector("span.inner-placeholder"),
          {
            width: n
          } = e.getBoundingClientRect(),
          {
            width: d
          } = t.getBoundingClientRect();
        if (n < d) {
          const i = B.timeline({
            repeat: -1,
            repeatDelay: 2
          });
          i.set(t, {
            x: 0
          }), i.to(t, {
            x: (n - d) * (f.modelValue.length > 0 ? 1.3 : 1),
            duration: 2.5,
            ease: "none"
          }, "<+=2")
        }
      }
      return _(() => {
        w()
      }), (e, t) => (u(), p("label", {
        ref_key: "inputRef",
        ref: s,
        class: c(["input-wrap", {
          error: e.error.status,
          disabled: e.disabled
        }])
      }, [a("input", {
        type: e.type,
        value: e.modelValue,
        disabled: e.disabled,
        class: "input a1 text",
        id: e.placeholder.toLowerCase(),
        name: e.placeholder.toLowerCase(),
        onInput: m,
        onFocus: g,
        onBlur: v
      }, null, 40, I), a("p", {
        class: c(["placeholder a1 text", {
          "has-value": e.modelValue.length
        }])
      }, [a("span", L, r(e.placeholder) + " " + r(e.required ? "*" : ""), 1)], 2), e.error.status ? (u(), p("div", q, [R, a("span", null, r(e.error.message), 1)])) : V("", !0), H(e.$slots, "icon", {}, void 0, !0)], 2))
    }
  }),
  W = k(D, [
    ["__scopeId", "data-v-f607211b"]
  ]);
export {
  W as _
};