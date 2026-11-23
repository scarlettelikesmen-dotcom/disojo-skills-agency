/* https://ab-sl.ru/_nuxt/DCyA0qmY.js */
import {
  k as B,
  d as F,
  p as b,
  C as q,
  q as H,
  z as P,
  o as C,
  c as h,
  a as i,
  m as D,
  t as S,
  n as W,
  f as n,
  _ as Y
} from "./DROVP5M4.js";
async function V({
  node: r,
  strength: a = 50,
  useScaleY: e = !1,
  start: u = "top bottom",
  yPercentFrom: m = a / 2 * -1,
  yPercentTo: t = a / 2
}) {
  const f = 1 + a / 100,
    c = 1 + a / 100,
    d = r.parentElement;
  B.set(r, {
    width: "100%",
    height: "100%",
    scale: e ? void 0 : f,
    scaleY: e ? c : void 0,
    willChange: "transform"
  }), await setTimeout(() => {}, 0), B.fromTo(r, {
    yPercent: m
  }, {
    yPercent: t,
    ease: "linear",
    scrollTrigger: {
      trigger: d,
      start: u,
      end: "bottom top",
      scrub: !0,
      invalidateOnRefresh: !0
    }
  })
}
const $ = {
    key: 0,
    class: "drag-arrow"
  },
  z = {
    key: 1,
    class: "drag-arrow"
  },
  I = F({
    __name: "DragCursor",
    props: {
      container: {},
      cursorText: {},
      withArrows: {
        type: Boolean
      },
      hideCursorTriggers: {}
    },
    emits: ["pressed", "unpressed"],
    setup(r, {
      emit: a
    }) {
      const e = r,
        u = a,
        {
          isDesktop: m
        } = b(),
        t = n(),
        f = n(),
        c = n(0),
        d = n(0),
        w = n(0),
        L = n(0),
        E = n(0);
      let l, x;
      q(async () => {
        await H(), M(), t.value && (L.value = t.value.offsetWidth, E.value = t.value.offsetHeight)
      }), P(() => {
        e.container && (e.container.removeEventListener("mouseenter", T), e.container.removeEventListener("mouseleave", y)), document.removeEventListener("mousemove", v), document.removeEventListener("mousedown", k), document.removeEventListener("mouseup", A), window.cancelAnimationFrame(l)
      });

      function M() {
        !e.container || !m.value || (e.container.addEventListener("mouseenter", T), e.container.addEventListener("mouseleave", y))
      }

      function T(o) {
        clearTimeout(x), v(o), p(), l = requestAnimationFrame(_), document.addEventListener("mousemove", v), document.addEventListener("mousedown", k), document.addEventListener("mouseup", A), e.hideCursorTriggers && e.hideCursorTriggers.forEach(s => {
          s && (s.addEventListener("mouseenter", g), s.addEventListener("mouseleave", p))
        })
      }

      function y() {
        g(), x = setTimeout(() => {
          window.cancelAnimationFrame(l), document.removeEventListener("mousemove", v), e.hideCursorTriggers && e.hideCursorTriggers.forEach(o => {
            o && (o.removeEventListener("mouseenter", g), o.removeEventListener("mouseleave", p))
          })
        }, 500)
      }

      function g() {
        w.value = 0
      }

      function p() {
        w.value = 1
      }

      function v(o) {
        c.value = o.clientX - L.value / 2, d.value = o.clientY - E.value / 2
      }

      function k() {
        t.value?.classList.add("active"), u("pressed")
      }

      function A() {
        t.value?.classList.remove("active"), u("unpressed")
      }

      function _() {
        t.value && (t.value.style.scale = `${w.value}`, t.value.style.translate = `${c.value}px ${d.value}px`, l = requestAnimationFrame(_))
      }
      return (o, s) => (C(), h("div", {
        ref_key: "dragCursor",
        ref: t,
        class: "drag-cursor"
      }, [i("div", {
        class: W(["drag-text-wrapper", {
          "with-arrows": r.withArrows
        }])
      }, [r.withArrows ? (C(), h("div", $, [...s[0] || (s[0] = [i("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [i("path", {
        d: "M7.21968 7.99953L10.0481 10.828C10.3085 11.0883 10.3085 11.5104 10.0481 11.7708C9.78777 12.0311 9.36566 12.0311 9.10532 11.7708L6.04119 8.70664C5.65066 8.31612 5.65066 7.68295 6.04119 7.29243L9.10532 4.22833C9.36567 3.96798 9.78777 3.96798 10.0481 4.22833C10.3085 4.48868 10.3085 4.91079 10.0481 5.17114L7.21968 7.99953Z",
        fill: "#525151"
      })], -1)])])) : D("", !0), i("p", {
        ref_key: "cursorTextEl",
        ref: f,
        class: "drag-text l1"
      }, S(r.cursorText), 513), r.withArrows ? (C(), h("div", z, [...s[1] || (s[1] = [i("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [i("path", {
        d: "M8.78032 8.00047L5.95188 5.17203C5.69153 4.91168 5.69153 4.48956 5.95188 4.22921C6.21223 3.96887 6.63434 3.96887 6.89468 4.22922L9.95881 7.29336C10.3493 7.68388 10.3493 8.31705 9.95881 8.70757L6.89468 11.7717C6.63433 12.032 6.21223 12.032 5.95188 11.7717C5.69153 11.5113 5.69153 11.0892 5.95188 10.8289L8.78032 8.00047Z",
        fill: "#525151"
      })], -1)])])) : D("", !0)], 2)], 512))
    }
  }),
  X = Y(I, [
    ["__scopeId", "data-v-a1aac18f"]
  ]);
export {
  X as _, V as p
};