/* https://pictoric.com.ua/_nuxt/Canvas.ae6b6afa.js */
import {
  d as z,
  o as B,
  a as M,
  b as O,
  c as F,
  j as b,
  r as P,
  G as C,
  B as T,
  _ as H
} from "./entry.6cb2d70d.js";
const I = ["width", "height"],
  q = 30,
  W = 100,
  E = 5,
  X = z({
    __name: "Canvas",
    props: {
      fillColor: {}
    },
    setup(L) {
      const w = L,
        a = P(),
        n = T(() => {
          var e;
          return (e = a.value) == null ? void 0 : e.parentElement
        });
      let t;
      const i = C({
          width: 0,
          height: 0
        }),
        r = C({
          x: 0,
          y: 0
        });
      let c, l, v;

      function y() {
        a.value && (_(), R(), t = a.value.getContext("2d"), A())
      }

      function R() {
        n.value && (v = new ResizeObserver(_), v.observe(n.value))
      }

      function _() {
        !a.value || !n.value || (i.width = n.value.clientWidth, i.height = n.value.clientHeight)
      }

      function A() {
        n.value && (n.value.addEventListener("mouseenter", p), n.value.addEventListener("mouseleave", d))
      }

      function S() {
        n.value && (n.value.removeEventListener("mouseenter", p), n.value.removeEventListener("mouseleave", d))
      }

      function p(e) {
        var s;
        f(e), m(), (s = n.value) == null || s.addEventListener("mousemove", f), document.addEventListener("scroll", m), l = requestAnimationFrame(g)
      }

      function d() {
        var e;
        (e = n.value) == null || e.removeEventListener("mousemove", f), document.removeEventListener("scroll", m), window.cancelAnimationFrame(l)
      }

      function f(e) {
        r.x = e.clientX, r.y = e.clientY
      }

      function m() {
        a.value && (c = a.value.getBoundingClientRect())
      }
      const o = [];
      let u = null;

      function g() {
        if (!t || !c || !a.value) return;
        const e = r.x - c.left,
          s = r.y - c.top;
        if (u && (Math.abs(u.x - e) > E || Math.abs(u.y - s) > E) && (o.push({
            x: e,
            y: s
          }), o.length > W && o.shift()), k(), o.length > 0) {
          t.beginPath(), t.moveTo(o[0].x, o[0].y);
          for (let h = 1; h < o.length; h++) {
            const x = o[h];
            t.lineTo(x.x, x.y)
          }
          t.lineWidth = q * 2, t.lineJoin = "round", t.lineCap = "round", t.strokeStyle = w.fillColor, t.stroke()
        }
        u = {
          x: e,
          y: s
        }, l = requestAnimationFrame(g)
      }

      function k() {
        !a.value || !t || t.clearRect(0, 0, a.value.width, a.value.height)
      }
      return B(y), M(() => {
        d(), S(), v.disconnect()
      }), (e, s) => (O(), F("canvas", {
        ref_key: "canvasRef",
        ref: a,
        class: "canvas inset",
        width: b(i).width,
        height: b(i).height
      }, null, 8, I))
    }
  });
const D = H(X, [
  ["__scopeId", "data-v-6dbcb8cc"]
]);
export {
  D as _
};