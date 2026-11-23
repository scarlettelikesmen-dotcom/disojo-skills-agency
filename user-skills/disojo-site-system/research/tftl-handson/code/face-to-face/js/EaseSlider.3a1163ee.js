/* https://13322566869.com/_nuxt/EaseSlider.3a1163ee.js */
import {
  d as x,
  r as g,
  x as y,
  b as d,
  a as m,
  n as w,
  K as C,
  g as c,
  o as p,
  i as t,
  e as b,
  f as T,
  t as v,
  h as I,
  F as B,
  j as V,
  p as A,
  m as D,
  v as E
} from "./entry.3d26c39b.js";
const L = x({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(o, {
      slots: a,
      attrs: s
    }) {
      const r = g(!1);
      return y(() => {
        r.value = !0
      }), l => {
        var i;
        if (r.value) return (i = a.default) == null ? void 0 : i.call(a);
        const n = a.fallback || a.placeholder;
        if (n) return n();
        const _ = l.fallback || l.placeholder || "",
          h = l.fallbackTag || l.placeholderTag || "span";
        return d(h, s, _)
      }
    }
  }),
  S = o => (A("data-v-a5348e6e"), o = o(), D(), o),
  M = {
    class: "hero__slider"
  },
  F = S(() => t("div", {
    class: "hero__slider-bg"
  }, [t("svg", {
    class: "hero__slider-bg-svg",
    viewBox: "0 0 720 176",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0 0H720V176H0V0ZM704 36C704 47.0457 695.046 56 684 56C672.954 56 664 47.0457 664 36C664 24.9543 672.954 16 684 16C695.046 16 704 24.9543 704 36ZM684 56C695.046 56 704 64.9543 704 76C704 87.0457 695.046 96 684 96C672.954 96 664 87.0457 664 76C664 64.9543 672.954 56 684 56Z",
    fill: "white"
  })])], -1)),
  P = {
    class: "hero__slider-pagination",
    ref: "count"
  },
  Z = {
    class: "hero__slider-loader"
  },
  H = S(() => t("svg", {
    class: "hero__slider-loader-svg",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [t("circle", {
    cx: "50%",
    cy: "50%",
    r: "5",
    fill: "none"
  }), t("circle", {
    cx: "50%",
    cy: "50%",
    r: "5",
    fill: "none"
  })], -1)),
  N = {
    class: "ero__slider-counter"
  },
  O = {
    class: "hero__slider-wrapper"
  },
  j = {
    class: "hero__slide-text"
  },
  q = x({
    __name: "EaseSlider",
    props: {
      slider: {}
    },
    setup(o) {
      const a = g([]),
        s = g(0);
      let r = 0,
        l = 5e3;
      m(() => w.isPreloaderVisible, e => {
        e || n()
      }), m(() => w.isTransitionFinish, e => {
        e && n()
      });
      const n = () => {
        r = window.setInterval(h, l), i()
      };
      C(() => {
        clearInterval(r)
      });

      function _(e) {
        a.value.forEach((u, f) => {
          f === e ? c.to(u, {
            autoAlpha: 1,
            yPercent: 0,
            delay: .5
          }) : c.to(u, {
            yPercent: 5,
            autoAlpha: 0
          })
        })
      }

      function h() {
        s.value = (s.value + 1) % a.value.length, _(s.value)
      }

      function i() {
        const e = document.querySelectorAll(".hero__slider-loader-svg circle");
        c.set(e[1], {
          strokeDashoffset: e[1].getTotalLength(),
          strokeDasharray: e[1].getTotalLength()
        }), c.to(e[1], {
          strokeDashoffset: 0,
          duration: 5,
          repeat: -1,
          ease: "none"
        })
      }
      return (e, u) => {
        const f = L;
        return p(), d("div", M, [F, t("div", P, [t("div", Z, [b(f, null, {
          default: T(() => [H]),
          _: 1
        })]), t("div", N, v(I(s) + 1) + " / " + v(e.slider.length), 1)], 512), t("div", O, [(p(!0), d(B, null, V(e.slider, (k, K) => (p(), d("div", {
          class: "hero__slide",
          ref_for: !0,
          ref_key: "heroSlide",
          ref: a
        }, [t("div", j, v(k.description), 1)], 512))), 256))])])
      }
    }
  });
const W = E(q, [
  ["__scopeId", "data-v-a5348e6e"]
]);
export {
  W as _
};