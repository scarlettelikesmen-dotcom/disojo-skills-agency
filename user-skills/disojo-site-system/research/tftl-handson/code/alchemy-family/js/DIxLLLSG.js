/* https://alchemy.family/_nuxt/DIxLLLSG.js */
import {
  _ as y,
  o as i,
  c as l,
  p as H,
  l as O,
  a as e,
  d as V,
  U as T,
  u as j,
  B as G,
  J,
  z as q,
  k as c,
  j as n,
  m as K,
  t as _,
  r as x,
  a1 as D,
  K as N,
  L as A,
  E as L,
  F as M,
  i as b,
  C as Z,
  g as F,
  s as U
} from "./CWeo--9S.js";
import {
  _ as W,
  a as Q
} from "./B7Lms0Y0.js";
const X = {},
  R = s => (H("data-v-4313c340"), s = s(), O(), s),
  Y = {
    width: "12",
    height: "12",
    class: "icon",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  ee = R(() => e("rect", {
    width: "12",
    height: "12",
    rx: "6",
    fill: "#E8E8E8",
    "fill-opacity": "0.3"
  }, null, -1)),
  te = R(() => e("path", {
    d: "M6 2.5L6 3.5",
    stroke: "#E8E8E8"
  }, null, -1)),
  se = R(() => e("path", {
    d: "M6 4.5L6 9.5",
    stroke: "#E8E8E8"
  }, null, -1)),
  oe = [ee, te, se];

function ne(s, v) {
  return i(), l("svg", Y, oe)
}
const ae = y(X, [
    ["render", ne],
    ["__scopeId", "data-v-4313c340"]
  ]),
  ie = {
    class: "text"
  },
  re = V({
    __name: "Tooltip",
    props: {
      text: {},
      isAbsolute: {
        type: Boolean
      }
    },
    setup(s) {
      const v = s,
        u = T({
          x: 0,
          y: 0
        }),
        {
          isMobile: r
        } = j();

      function m(h) {
        if (v.isAbsolute) return;
        const w = 20,
          a = h.target.getBoundingClientRect(),
          g = a.top,
          E = a.left;
        u.x = E + w, u.y = g
      }
      return (h, w) => {
        const o = ae,
          a = W;
        return i(), G(a, null, {
          default: J(() => [e("div", {
            class: "icon-wrap",
            onMouseenter: m
          }, [q(o, {
            class: "icon-info"
          }), e("div", {
            class: c(["info", {
              absolute: h.isAbsolute,
              "mobile-input": n(r)
            }]),
            style: K(h.isAbsolute || n(r) ? {} : {
              left: n(u).x + "px",
              top: n(u).y + "px"
            })
          }, [e("p", ie, _(v.text), 1)], 6)], 32)]),
          _: 1
        })
      }
    }
  }),
  Le = y(re, [
    ["__scopeId", "data-v-aa407132"]
  ]),
  S = s => (H("data-v-fccae480"), s = s(), O(), s),
  le = {
    class: "placeholder a1"
  },
  ce = S(() => e("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M0.757359 3.24264L5 7.48528L9.24264 3.24264",
    stroke: "#E8E8E8",
    "stroke-linecap": "round"
  })], -1)),
  ue = [ce],
  de = ["onClick"],
  pe = S(() => e("div", {
    class: "arrow-icon"
  }, [e("svg", {
    width: "14",
    height: "15",
    viewBox: "0 0 14 15",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    opacity: "0.3",
    d: "M1.97412 6.53526L6.04465 10.6058L12.1504 4.5",
    stroke: "#262626",
    "stroke-linecap": "round"
  })])], -1)),
  _e = {
    key: 0,
    class: "error-message"
  },
  ve = S(() => e("div", {
    class: "wrap-icon-error"
  }, [e("svg", {
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    class: "inner-svg",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("rect", {
    y: "0.5",
    width: "9",
    height: "9",
    rx: "4.5",
    fill: "#D72525"
  }), e("path", {
    d: "M4.17417 6.846H4.82817V7.5H4.17417V6.846ZM4.17417 4.374V3.21H4.82217V4.374L4.67217 6.33H4.33017L4.17417 4.374Z",
    fill: "#E8E8E8"
  })])], -1)),
  he = ["onClick"],
  fe = {
    class: "remove-icon"
  },
  me = V({
    __name: "Multiple",
    props: {
      value: {},
      placeholder: {},
      options: {},
      required: {
        type: Boolean
      },
      maxReveal: {
        type: Boolean
      },
      error: {}
    },
    emits: ["select", "removeItem", "resetError"],
    setup(s, {
      emit: v
    }) {
      const u = v,
        r = s,
        {
          placeholder: m,
          options: h,
          required: w
        } = r,
        o = x(!1),
        a = x(),
        g = x(!0);

      function E(t) {
        u("removeItem", t)
      }

      function $() {
        a.value && (o.value = !o.value)
      }

      function B(t) {
        var d;
        const f = (d = a.value) == null ? void 0 : d.querySelector(".option-list");
        f && F.to(f, {
          height: t ? "auto" : 0,
          duration: .35,
          ease: "my-ease"
        })
      }

      function C() {
        o.value && (o.value = !1)
      }

      function I(t) {
        u("resetError"), u("select", t)
      }
      return D(() => o.value, t => {
        B(t)
      }), (t, f) => {
        const d = Q,
          k = N("click-outside");
        return i(), l("div", null, [A((i(), l("button", {
          ref_key: "selectRef",
          ref: a,
          type: "button",
          class: c(["wrap-select", {
            error: t.error.status
          }]),
          onClick: L($, ["stop"])
        }, [e("p", le, _(`${n(m)}${n(w)?" *":""}`), 1), e("div", {
          class: c(["wrap-icon", {
            opened: n(o)
          }])
        }, ue, 2), e("div", {
          class: c(["option-list", {
            "bottom-pos": n(g),
            "max-reveal": t.maxReveal
          }]),
          "data-lenis-prevent": ""
        }, [(i(!0), l(M, null, b(n(h), p => (i(), l("div", {
          key: p,
          class: c(["option-item a1", {
            active: r.value.includes(p)
          }]),
          onClick: P => I(p)
        }, [e("span", null, _(p), 1), pe], 10, de))), 128))], 2), t.error.status ? (i(), l("div", _e, [ve, e("span", null, _(t.error.message), 1)])) : Z("", !0)], 2)), [
          [k, C]
        ]), e("div", {
          class: c(["selected-items", {
            "has-selected": t.value.length
          }])
        }, [(i(!0), l(M, null, b(t.value, p => (i(), l("button", {
          key: p,
          class: "selected-item",
          onClick: L(P => E(p), ["stop"])
        }, [e("span", null, _(p), 1), e("div", fe, [q(d, {
          class: "inner-svg"
        })])], 8, he))), 128))], 2)])
      }
    }
  }),
  Me = y(me, [
    ["__scopeId", "data-v-fccae480"]
  ]),
  z = s => (H("data-v-2e216ea4"), s = s(), O(), s),
  we = z(() => e("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M0.757359 3.24264L5 7.48528L9.24264 3.24264",
    stroke: "#E8E8E8",
    "stroke-linecap": "round"
  })], -1)),
  ge = [we],
  ke = ["onClick"],
  xe = z(() => e("div", {
    class: "arrow-icon"
  }, [e("svg", {
    width: "14",
    height: "15",
    viewBox: "0 0 14 15",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    opacity: "0.3",
    d: "M1.97412 6.53526L6.04465 10.6058L12.1504 4.5",
    stroke: "#262626",
    "stroke-linecap": "round"
  })])], -1)),
  Ee = {
    key: 0,
    class: "error-message"
  },
  ye = z(() => e("div", {
    class: "wrap-icon-error"
  }, [e("svg", {
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    class: "inner-svg",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("rect", {
    y: "0.5",
    width: "9",
    height: "9",
    rx: "4.5",
    fill: "#D72525"
  }), e("path", {
    d: "M4.17417 6.846H4.82817V7.5H4.17417V6.846ZM4.17417 4.374V3.21H4.82217V4.374L4.67217 6.33H4.33017L4.17417 4.374Z",
    fill: "#E8E8E8"
  })])], -1)),
  $e = 120,
  Be = V({
    __name: "Main",
    props: {
      value: {},
      placeholder: {},
      options: {},
      required: {
        type: Boolean
      },
      error: {}
    },
    emits: ["select", "resetError"],
    setup(s, {
      emit: v
    }) {
      const u = v,
        r = s,
        {
          placeholder: m,
          options: h,
          required: w
        } = r,
        o = x(!1),
        a = x(),
        g = x(!0),
        E = U(() => r.value ? r.value : m);

      function $() {
        if (a.value) {
          if (!o.value) {
            const {
              bottom: t
            } = a.value.getBoundingClientRect();
            g.value = Math.floor(window.innerHeight - t) >= $e
          }
          o.value = !o.value
        }
      }

      function B(t) {
        var d;
        const f = (d = a.value) == null ? void 0 : d.querySelector(".option-list");
        f && F.to(f, {
          height: t ? "auto" : 0,
          duration: .35,
          ease: "my-ease"
        })
      }

      function C() {
        o.value && (o.value = !1)
      }

      function I(t) {
        u("resetError"), u("select", t)
      }
      return D(() => o.value, t => {
        B(t)
      }), (t, f) => {
        const d = N("click-outside");
        return A((i(), l("button", {
          ref_key: "selectRef",
          ref: a,
          type: "button",
          class: c(["wrap-select", {
            error: t.error.status
          }]),
          onClick: L($, ["stop"])
        }, [e("p", {
          class: c(["placeholder a1", {
            "has-value": r.value.length
          }])
        }, _(`${n(m)}${n(w)?" *":""}`), 3), e("p", {
          class: c(["fake-placeholder a1", {
            "has-value": r.value.length
          }])
        }, _(n(E)), 3), e("div", {
          class: c(["wrap-icon", {
            opened: n(o)
          }])
        }, ge, 2), e("div", {
          class: c(["option-list", {
            "bottom-pos": n(g)
          }]),
          "data-lenis-prevent": ""
        }, [(i(!0), l(M, null, b(n(h), k => (i(), l("div", {
          key: k,
          class: c(["option-item a1", {
            active: k === r.value
          }]),
          onClick: p => I(k)
        }, [e("span", null, _(k), 1), xe], 10, ke))), 128))], 2), t.error.status ? (i(), l("div", Ee, [ye, e("span", null, _(t.error.message), 1)])) : Z("", !0)], 2)), [
          [d, C]
        ])
      }
    }
  }),
  be = y(Be, [
    ["__scopeId", "data-v-2e216ea4"]
  ]);

function He(s) {
  return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(s)
}
export {
  Le as _, Me as a, be as b, He as v
};