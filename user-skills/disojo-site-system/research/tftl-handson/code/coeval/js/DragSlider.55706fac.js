/* https://coevalstudio.com/_nuxt/DragSlider.55706fac.js */
import {
  _ as P,
  f as v,
  h as V,
  i as R,
  C as U,
  k as b,
  o as w,
  c as x,
  a as p,
  F as z,
  r as K,
  L as W,
  u as y,
  t as O,
  K as Y,
  V as F
} from "./entry.7e3c7585.js";
const $ = ["data-cursor-hover"],
  G = ["onMousedown", "onMouseup", "data-cursor-hover"],
  J = {
    class: "slider__img-wrapper img-outer"
  },
  Q = {
    class: "img-inner"
  },
  Z = ["src"],
  ee = {
    class: "text-t3 slider__caption"
  },
  te = {
    name: "DragSlider"
  },
  se = Object.assign(te, {
    props: {
      projects: Array,
      containerSelector: {
        type: String,
        required: !0
      },
      noHover: {
        type: Boolean,
        default: !1
      }
    },
    setup(m) {
      const d = m,
        l = v(!1),
        s = v(null),
        I = v([]),
        k = v(null),
        q = V(),
        M = v(null),
        j = v(null);
      async function A() {
        if (!l.value) return;
        let o = 0,
          r = 0,
          e = [],
          n = 1,
          t = 0,
          i = 0;
        const h = [...s.value.querySelectorAll(".slider__item")];
        h.forEach(a => {
          e.push(r += a.clientWidth)
        }), o = e[e.length - 1];
        const g = (a, c, f) => a * (1 - f) + c * f,
          u = a => {
            F.set(h, {
              x: c => c ? e[c - 1] + a - n * c : a - n * c,
              modifiers: {
                x: (c, f) => `${F.utils.wrap(-f.clientWidth,o-f.clientWidth-h.length*n,parseInt(c))}px`
              }
            })
          };
        u(0);
        let _ = 0,
          L = 0,
          S = !1;
        const D = a => {
            s.value && (_ = a.clientX || a.touches[0].clientX, S = !0, s.value.classList.add("is-dragging"))
          },
          X = a => {
            S && (L = a.clientX || a.touches[0].clientX, t += (L - _) * 2.5, _ = L)
          },
          E = () => {
            S = !1, s.value && s.value.classList.remove("is-dragging")
          };
        if (!s.value) return;
        s.value.addEventListener("touchstart", D), s.value.addEventListener("touchmove", X), s.value.addEventListener("touchend", E), s.value.addEventListener("mousedown", D), s.value.addEventListener("mousemove", X), s.value.addEventListener("mouseleave", E), s.value.addEventListener("mouseup", E), s.value.addEventListener("selectstart", () => !1);
        const B = () => {
          M.value = requestAnimationFrame(B), i = g(i, t, .1), u(i)
        };
        B()
      }

      function N(o, r) {
        r && o.clientX === k.value && q.push({
          path: r
        })
      }

      function T(o) {
        k.value = o.clientX
      }

      function H() {
        var g;
        const o = window.innerWidth,
          r = document.querySelector(d == null ? void 0 : d.containerSelector),
          e = (g = r == null ? void 0 : r.getBoundingClientRect()) == null ? void 0 : g.width,
          n = d.projects.length,
          t = [344, 516, 172],
          i = 3;
        let h = 0;
        if (!(!r || !e)) {
          o <= 1023 && (t[0] = 360, t[1] = 480, t[2] = 180), o <= 767 && (t[0] = 228, t[1] = 340, t[2] = 115);
          for (let u = 1; u <= n; u++) {
            const _ = u % i === 0 ? 2 : u % i - 1;
            h += t[_]
          }
          h > e && (l.value = !0)
        }
      }
      async function C() {
        var o, r;
        if (H(), l.value && ((o = d.projects) == null ? void 0 : o.length) === 3 || l.value && ((r = d.projects) == null ? void 0 : r.length) === 2) {
          const e = j.value,
            n = e.children;
          if (n.length === 3) {
            const t = n[0].cloneNode(!0);
            t.classList.add("slide"), e.appendChild(t)
          }
          if (n.length === 2) {
            const t = n[0].cloneNode(!0);
            t.classList.add("slide");
            const i = n[0].cloneNode(!0);
            i.classList.add("slide"), e.appendChild(t), e.appendChild(i)
          }
        }
        await Y(), A()
      }
      return R(async () => {
        C()
      }), U(async () => {
        C()
      }), b(() => {
        cancelAnimationFrame(M.value)
      }), (o, r) => (w(), x("div", {
        class: W(["slider", {
          carousel: y(l)
        }]),
        ref_key: "slider",
        ref: s
      }, [p("div", {
        ref_key: "list",
        ref: j,
        class: W(["slider__list", {
          carousel: y(l)
        }]),
        "data-cursor-hover": [y(l) ? "Drag" : "null"]
      }, [(w(!0), x(z, null, K(m.projects, e => (w(), x("div", {
        class: W(["slider__item", {
          slide: y(l),
          "no-hover": m.noHover
        }]),
        onMousedown: n => T(n, e.link),
        onMouseup: n => N(n, e.link),
        key: e.id,
        "data-cursor-hover": [m.noHover ? "null" : "Explore Project"],
        ref_for: !0,
        ref_key: "sliderItems",
        ref: I
      }, [p("div", J, [p("div", Q, [p("img", {
        src: e.image,
        class: "slider__img"
      }, null, 8, Z)])]), p("p", ee, O(e.caption), 1)], 42, G))), 128))], 10, $)], 2))
    }
  }),
  re = P(se, [
    ["__scopeId", "data-v-de47f473"]
  ]);
export {
  re as _
};