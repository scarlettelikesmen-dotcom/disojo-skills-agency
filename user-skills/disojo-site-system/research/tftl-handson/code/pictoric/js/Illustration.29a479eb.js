/* https://pictoric.com.ua/_nuxt/Illustration.29a479eb.js */
import {
  _ as D
} from "./Close.de99442d.js";
import {
  _ as I,
  b as C,
  c as E,
  g as e,
  d as T,
  o as A,
  a as V,
  i as v,
  q as F,
  j as o,
  r as d,
  v as S,
  B as N,
  G as X,
  m as j,
  Y as W,
  u as G,
  z as $,
  Z as b,
  y as K,
  $ as M,
  k as H,
  n as L,
  a0 as O,
  A as P,
  t as U,
  a1 as Z,
  N as J
} from "./entry.6cb2d70d.js";
import {
  _ as Q
} from "./Caret.8726756f.js";
import {
  u as ee
} from "./useResize.e6421d34.js";
const te = {},
  ne = {
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function oe(a, t) {
  return C(), E("svg", ne, [...t[0] || (t[0] = [e("path", {
    d: "M1.83594 1.44336H6.83594V6.44336",
    stroke: "#411F15",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1)])])
}
const se = I(te, [
    ["render", oe]
  ]),
  ae = {
    class: "content"
  },
  re = ["innerHTML"],
  ie = T({
    __name: "Border",
    props: {
      text: {},
      triggerSelector: {
        default: void 0
      },
      offsetX: {
        default: 20
      },
      offsetY: {
        default: 15
      }
    },
    setup(a) {
      const t = a,
        s = d(),
        r = N(() => {
          var n;
          return t.triggerSelector && document.querySelector(t.triggerSelector) || ((n = s.value) == null ? void 0 : n.parentElement)
        }),
        i = d(!0),
        _ = d(!0),
        l = X({
          x: 0,
          y: 0
        });
      let c, p;

      function g() {
        r.value && (r.value.addEventListener("mouseenter", k), r.value.addEventListener("mouseleave", h))
      }

      function u() {
        r.value && (r.value.removeEventListener("mouseenter", k), r.value.removeEventListener("mouseleave", h))
      }

      function m({
        clientX: n,
        clientY: w
      }) {
        l.x = n + t.offsetX, l.y = w + t.offsetY
      }

      function k(n) {
        s.value && (clearTimeout(p), _.value ? (document.addEventListener("pointermove", m), S.set(s.value, {
          x: n.clientX + t.offsetX,
          y: n.clientY + t.offsetY
        }), i.value = !1, _.value = !1, c = requestAnimationFrame(y)) : i.value = !1)
      }

      function h() {
        i.value = !0, p = setTimeout(() => {
          document.removeEventListener("pointermove", m), cancelAnimationFrame(c), _.value = !0
        }, 600)
      }

      function y() {
        s.value && (S.to(s.value, {
          x: l.x,
          y: l.y,
          duration: .3,
          ease: "default-ease"
        }), c = requestAnimationFrame(y))
      }
      return A(g), V(() => {
        u(), h()
      }), (n, w) => {
        const x = se;
        return C(), E("span", {
          ref_key: "cursorRef",
          ref: s,
          class: "cursor",
          style: F({
            opacity: o(i) ? 0 : 1
          })
        }, [e("span", ae, [v(x, {
          class: "left-corner"
        }), e("span", {
          class: "t2-xb",
          innerHTML: a.text
        }, null, 8, re), v(x, {
          class: "right-corner"
        })])], 4)
      }
    }
  });
const le = I(ie, [
    ["__scopeId", "data-v-61b1a04a"]
  ]),
  ce = {
    key: 0,
    id: "illustration-modal",
    class: "backdrop inset"
  },
  ue = ["src"],
  de = {
    class: "title-icon"
  },
  _e = ["innerHTML"],
  me = T({
    __name: "Illustration",
    props: {
      data: {},
      noInfo: {
        type: Boolean
      }
    },
    emits: ["hideModal"],
    setup(a, {
      emit: t
    }) {
      const s = a,
        r = t,
        {
          t: i
        } = j(),
        {
          lockScroll: _
        } = W(),
        {
          isDesktop: l
        } = G();
      ee(n);
      const c = d(),
        p = d(0),
        g = d(!1),
        u = d(!1);
      let m;
      const k = N(() => {
        var f;
        return (f = s.data) != null && f.description ? s.data.description.replace(/style="[^"]*"/g, "") : ""
      });

      function h() {
        _(!0), m = S.timeline().from("#illustration-modal .overlay", {
          autoAlpha: 0,
          duration: .6,
          ease: "default-ease"
        }), s.noInfo || m.to("#illustration-modal .illustration", {
          y: 0,
          duration: .6,
          ease: "default-ease"
        }, "<")
      }
      async function y() {
        await m.reverse(), r("hideModal")
      }

      function n() {
        c.value && (p.value = c.value.clientHeight)
      }

      function w() {
        l.value && (u.value = !u.value)
      }

      function x(f) {
        f.code === "Escape" && y()
      }
      return A(() => {
        h(), n(), document.addEventListener("keydown", x)
      }), V(() => {
        document.removeEventListener("keydown", x), _(!1)
      }), (f, B) => {
        const R = D,
          Y = le,
          q = J,
          z = Q;
        return a.data ? (C(), E("div", ce, [e("div", {
          class: L([{
            scaled: o(u),
            full: a.noInfo
          }, "overlay inset"]),
          "data-lenis-prevent": ""
        }, [e("button", {
          class: "hide-button",
          onClick: y
        }, [v(R)]), e("div", {
          class: "illustration-img__wrapper",
          onClick: w
        }, [e("img", {
          src: a.data.image.original,
          alt: "image",
          class: "illustration-img"
        }, null, 8, ue), v(q, null, {
          default: $(() => [o(l) ? b((C(), K(Y, {
            key: 0,
            text: o(i)("buttons.scale")
          }, null, 8, ["text"])), [
            [M, !o(u)]
          ]) : H("", !0)]),
          _: 1
        })])], 2), v(Z, {
          name: "fast-fade"
        }, {
          default: $(() => [b(e("div", {
            class: L(["illustration", {
              hide: a.noInfo
            }])
          }, [O(f.$slots, "header", {}, void 0, !0), e("div", {
            class: L(["illustration-content", {
              active: o(g)
            }])
          }, [e("h3", {
            class: "content-title t2-xb",
            onClick: B[0] || (B[0] = fe => g.value = !o(g))
          }, [P(U(o(i)("popup.aboutWork")) + " ", 1), e("span", de, [v(z, {
            class: "inner-svg"
          })])]), e("div", {
            class: "description-wrapper",
            style: F(`--content-height: ${o(p)}`)
          }, [e("div", {
            ref_key: "contentRef",
            ref: c,
            class: "content-description t2-xb",
            innerHTML: o(k)
          }, null, 8, _e)], 4)], 2)], 2), [
            [M, !o(u)]
          ])]),
          _: 3
        })])) : H("", !0)
      }
    }
  });
const ye = I(me, [
  ["__scopeId", "data-v-fdc075d5"]
]);
export {
  ye as _
};