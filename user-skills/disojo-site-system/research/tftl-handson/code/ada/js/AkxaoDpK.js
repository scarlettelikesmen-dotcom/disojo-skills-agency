/* https://aventuradentalarts.com/_nuxt/AkxaoDpK.js */
import {
  a9 as r,
  q as i
} from "./C3LIzMiL.js";
import {
  u as l
} from "./COkvdYZ_.js";

function g(t, e = 16) {
  const n = window.innerWidth >= 1024 ? 1440 : 375;
  return t / n * window.innerWidth
}

function m() {
  if (typeof navigator > "u" || typeof window > "u") return !1;
  const t = navigator.userAgent,
    e = navigator.platform,
    n = /iPhone|iPad|iPod/.test(t),
    s = e === "MacIntel" && navigator.maxTouchPoints > 1,
    o = e === "MacIntel",
    a = t.includes("Safari") && !t.includes("Chrome") && !t.includes("Chromium") && !t.includes("Firefox") && !t.includes("Edg");
  return n || s || o && a
}

function h(t, e) {
  if (e < 1) return [];
  if (t.length >= e) return t;
  const n = t.length * Math.ceil(e / t.length),
    s = [];
  for (let o = 0; o < n; o++) s.push(t[o % t.length]);
  return s
}
const p = t => {
  const e = Math.floor(Math.random() * t.length);
  return t[e]
};

function y() {
  l(() => {
    c(), u()
  })
}
const c = () => {
    const t = "#424346";
    document.querySelectorAll("[data-fill-by-scroll]").forEach(n => {
      const s = n.getAttribute("data-fill-color") || t,
        {
          chars: o
        } = new r(n, {
          type: "words, chars",
          charsClass: "fill-char",
          tag: "span"
        });
      i.to(o, {
        scrollTrigger: {
          trigger: n,
          start: "top 90%",
          end: "center center",
          scrub: !0
        },
        color: s,
        stagger: .25
      })
    })
  },
  u = () => {
    document.querySelectorAll("[data-anim-text-by-lines]").forEach(e => {
      const {
        lines: n
      } = new r(e, {
        type: "lines",
        linesClass: "anim-text-line",
        tag: "span"
      });
      i.set(n, {
        willChange: "transform",
        y: "110%",
        opacity: 0
      }), i.to(n, {
        stagger: .08,
        duration: 1,
        ease: "ease-out-quint",
        scrollTrigger: {
          trigger: e,
          start: "top 90%",
          once: !0
        },
        y: "0%",
        opacity: 1
      })
    })
  };
export {
  h as d, p as g, m as i, g as p, y as u
};