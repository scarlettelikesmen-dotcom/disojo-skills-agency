/* https://pictoric.com.ua/_nuxt/Slide.a40fee9e.js */
import {
  _ as h
} from "./HanddrawnSvg.e4acccd9.js";
import {
  d as u,
  u as g,
  o as v,
  b as o,
  c as i,
  g as t,
  i as a,
  k as s,
  V as b,
  v as x,
  l as f,
  _ as m,
  t as r
} from "./entry.6cb2d70d.js";
import {
  p as d
} from "./index.13429eea.js";
const y = {
    key: 0,
    class: "about"
  },
  M = {
    class: "title-wrapper"
  },
  H = ["innerHTML"],
  T = {
    class: "description-wrapper"
  },
  S = {
    key: 0,
    class: "title-icon"
  },
  L = ["innerHTML"],
  k = {
    key: 0,
    class: "mobile-icon"
  },
  w = {
    class: "grid-container"
  },
  $ = {
    class: "about-icon"
  },
  I = ["innerHTML"],
  V = ["innerHTML"],
  B = ["innerHTML"],
  C = u({
    __name: "About",
    props: {
      data: {},
      showMobileIcon: {
        type: Boolean
      }
    },
    setup(e) {
      const {
        isDesktop: c
      } = g();

      function l() {
        if (!c.value) return;
        const n = document.querySelector(".about .about-icon");
        n && b.create({
          trigger: ".about .grid-container",
          start: `top-=${d(75)}px top`,
          end: () => `bottom-=${n.offsetHeight+d(75)}px top`,
          pin: n,
          pinSpacing: !1,
          scrub: !0,
          invalidateOnRefresh: !0,
          pinType: "transform",
          animation: x.to(n, {
            rotation: 360
          })
        })
      }
      return v(l), (n, O) => {
        const p = h,
          _ = f;
        return e.data ? (o(), i("section", y, [t("div", M, [t("h2", {
          class: "about-title h1 anim-title",
          innerHTML: e.data.title
        }, null, 8, H), t("div", T, [e.data.icon ? (o(), i("div", S, [a(p, {
          "svg-link": e.data.icon.original
        }, null, 8, ["svg-link"])])) : s("", !0), t("div", {
          class: "about-description h4 anim-title",
          innerHTML: e.data.description
        }, null, 8, L)])]), e.showMobileIcon ? (o(), i("div", k, [a(_)])) : s("", !0), t("div", w, [t("div", $, [a(_, {
          icon: "smile"
        })]), t("p", {
          class: "about-text t2-xb anim-text",
          innerHTML: e.data.content.suptitle
        }, null, 8, I), t("h3", {
          class: "content-title h5 anim-title",
          innerHTML: e.data.content.title
        }, null, 8, V), t("div", {
          class: "content-description t1 anim-text",
          innerHTML: e.data.content.description
        }, null, 8, B)])])) : s("", !0)
      }
    }
  });
const F = m(C, [
    ["__scopeId", "data-v-2878a376"]
  ]),
  A = {
    class: "gallery-item swiper-slide"
  },
  N = {
    class: "gallery-img__wrapper"
  },
  D = ["src"],
  E = {
    class: "gallery-item__content t2-xb"
  },
  R = {
    class: "gallery-item__year"
  },
  q = u({
    __name: "Slide",
    props: {
      data: {}
    },
    setup(e) {
      return (c, l) => (o(), i("div", A, [t("div", N, [t("img", {
        class: "inner-img",
        src: e.data.image.original,
        alt: "image"
      }, null, 8, D)]), t("div", E, [t("h2", null, r(e.data.title), 1), t("h2", R, r(e.data.year), 1)])]))
    }
  });
const G = m(q, [
  ["__scopeId", "data-v-77520a1f"]
]);
export {
  G as _, F as a
};