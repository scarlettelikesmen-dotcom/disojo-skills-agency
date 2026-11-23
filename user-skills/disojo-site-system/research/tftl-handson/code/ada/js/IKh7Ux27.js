/* https://aventuradentalarts.com/_nuxt/IKh7Ux27.js */
import {
  d as B,
  b as L,
  v as i,
  U as R,
  o as y,
  g as S,
  C as I,
  i as n,
  n as M,
  f as d,
  e as U,
  q as b,
  D as A,
  m as H
} from "./C3LIzMiL.js";
import {
  p as P
} from "./AkxaoDpK.js";
import {
  u as G
} from "./COkvdYZ_.js";
const O = {
    width: "180",
    height: "180",
    viewBox: "0 0 180 180",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  },
  V = ["stroke"],
  W = ["id"],
  X = ["stop-color"],
  Y = ["stop-color"],
  q = B({
    __name: "MouseControls",
    props: {
      dark: {
        type: Boolean
      }
    },
    emits: ["changeSlide"],
    setup(z, {
      emit: k
    }) {
      const w = k,
        {
          isMobile: r
        } = L(),
        a = i(),
        t = i(),
        o = i(!1),
        c = i(1),
        u = i({
          x: 0,
          y: 0
        });
      let v = Math.random().toString(36).substring(2, 15);
      const x = () => {
          if (!a.value || r.value) return;
          const e = a.value.closest("[data-cursor-place]");
          e && (e == null || e.addEventListener("mousemove", p, {
            passive: !0
          }), e == null || e.addEventListener("click", _), e.addEventListener("pointerleave", f))
        },
        f = () => {
          r.value || o.value && (o.value = !1, t.value.style.opacity = "0")
        },
        p = e => {
          var h, g;
          if (r.value) return;
          const s = P(16);
          if (!a.value || !t.value) return;
          const l = ((h = e.target) == null ? void 0 : h.closest("[data-cursor-place]")) !== null,
            C = ((g = e.target) == null ? void 0 : g.closest("[data-hide-cursor]")) !== null,
            m = a.value.getBoundingClientRect(),
            E = m.height > window.innerHeight ? m.top : 0;
          if (c.value = e.clientX >= window.innerWidth / 2 ? 1 : -1, u.value.x = e.clientX - s + (c.value === -1 ? -t.value.offsetHeight + s * 2 : 0), u.value.y = e.clientY - E - t.value.offsetHeight + s, C) {
            o.value = !1, t.value.style.opacity = "0";
            return
          }
          l !== o.value && (o.value = l, t.value.style.opacity = l ? "1" : "0"), o.value && b.to(t.value, {
            x: u.value.x,
            y: u.value.y,
            duration: 1.5,
            ease: "power3.out"
          })
        },
        _ = () => {
          !o.value || r.value || w("changeSlide", c.value)
        };
      return G(x), R(() => {
        var s;
        if (r.value) return;
        const e = (s = a.value) == null ? void 0 : s.closest("[data-cursor-place]");
        e && (e.removeEventListener("mousemove", p), e.removeEventListener("click", _), e.removeEventListener("pointerleave", f))
      }), (e, s) => {
        const l = A;
        return y(), S(l, null, {
          default: I(() => [n("div", {
            ref_key: "controlsRef",
            ref: a,
            class: "mouse-controls"
          }, [n("div", {
            ref_key: "cursorElRef",
            ref: t,
            class: M(["circle", {
              left: d(c) === -1,
              dark: e.dark
            }])
          }, [(y(), U("svg", O, [n("circle", {
            class: "path-loader",
            cx: "90",
            cy: "90",
            r: "89.25",
            stroke: `url(#${d(v)})`,
            "stroke-width": "1.5"
          }, null, 8, V), n("defs", null, [n("linearGradient", {
            id: d(v),
            x1: "180",
            y1: "90",
            x2: "0",
            y2: "90",
            gradientUnits: "userSpaceOnUse"
          }, [n("stop", {
            "stop-color": e.dark ? "#14151d" : "white"
          }, null, 8, X), n("stop", {
            offset: "0.846094",
            "stop-color": e.dark ? "#14151d" : "#ffffff",
            "stop-opacity": "0"
          }, null, 8, Y)], 8, W)])]))], 2)], 512)]),
          _: 1
        })
      }
    }
  }),
  $ = H(q, [
    ["__scopeId", "data-v-e268f249"]
  ]);
export {
  $ as _
};