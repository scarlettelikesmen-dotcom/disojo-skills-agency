/* https://archvoyage.ae/_nuxt/DragCursor.DPcV-VC9.js */
import {
  d as B,
  r as o,
  w as D,
  o as F,
  n as A,
  B as I,
  a as S,
  b as M,
  e as i,
  t as P,
  j as $,
  z as b,
  p as q,
  l as N,
  m as O
} from "./entry.YPAKmh3d.js";
const V = s => (q("data-v-c4271991"), s = s(), N(), s),
  X = V(() => i("svg", {
    class: "drag-circle",
    width: "77",
    height: "77",
    viewBox: "0 0 77 77",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, [i("circle", {
    cx: "38",
    cy: "38",
    r: "35",
    stroke: "#F5F5F5",
    "stroke-width": "1",
    "stroke-dashoffset": "1000",
    "stroke-dasharray": "1000 1000"
  })], -1)),
  Y = {
    class: "drag-text-wrapper"
  },
  j = B({
    __name: "DragCursor",
    props: {
      container: {},
      isOnLink: {
        type: Boolean
      }
    },
    emits: ["pressed", "unpressed"],
    setup(s, {
      emit: C
    }) {
      const n = s,
        m = C,
        {
          $gsap: v
        } = b(),
        t = o(),
        r = o(),
        c = o("Drag");
      let u;
      const p = o(0),
        f = o(0);
      let a, w;
      D(() => n.isOnLink, e => {
        clearTimeout(u), e ? u = setTimeout(() => {
          y("View", !0)
        }, 200) : u = setTimeout(() => {
          y("Drag", !1)
        }, 200)
      }), F(async () => {
        await A(), T()
      }), I(() => {
        n.container && (n.container.removeEventListener("mouseenter", g), n.container.removeEventListener("mouseleave", _)), document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", L), document.removeEventListener("mouseup", x), window.cancelAnimationFrame(a)
      });

      function T() {
        !n.container || window.innerWidth < 1025 || (n.container.addEventListener("mouseenter", g), n.container.addEventListener("mouseleave", _))
      }

      function g() {
        var e;
        clearTimeout(w), (e = t.value) == null || e.classList.add("show"), a = requestAnimationFrame(h), document.addEventListener("mousemove", d), document.addEventListener("mousedown", L), document.addEventListener("mouseup", x)
      }

      function _() {
        var e;
        (e = t.value) == null || e.classList.remove("show"), w = setTimeout(() => {
          window.cancelAnimationFrame(a), document.removeEventListener("mousemove", d)
        }, 500)
      }

      function d(e) {
        p.value = e.clientX, f.value = e.clientY
      }

      function L() {
        var e;
        (e = t.value) == null || e.classList.add("active"), m("pressed")
      }

      function x() {
        var e;
        (e = t.value) == null || e.classList.remove("active"), m("unpressed")
      }

      function h() {
        t.value && (t.value.style.transform = `translate(${p.value}px, ${f.value}px)`, a = requestAnimationFrame(h))
      }
      async function y(e, l = !1) {
        var k, E;
        !r.value || e === c.value || (l && ((k = t.value) == null || k.classList.add("on-link")), await v.to(r.value, {
          yPercent: -110,
          y: 0,
          duration: .2,
          ease: "custom"
        }), c.value = e, v.fromTo(r.value, {
          yPercent: 110,
          y: 0
        }, {
          yPercent: 0,
          y: 0,
          duration: .2,
          ease: "custom"
        }), l || (E = t.value) == null || E.classList.remove("on-link"))
      }
      return (e, l) => (S(), M("div", {
        ref_key: "dragCursor",
        ref: t,
        class: "drag-cursor"
      }, [X, i("div", Y, [i("p", {
        ref_key: "cursorTextEl",
        ref: r,
        class: "drag-text p1"
      }, P($(c)), 513)])], 512))
    }
  }),
  H = O(j, [
    ["__scopeId", "data-v-c4271991"]
  ]);
export {
  H as _
};