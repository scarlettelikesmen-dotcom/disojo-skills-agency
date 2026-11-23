/* https://grape.ua/_nuxt/EmptyWithProps.D19AbZT0.js */
import {
  b as S,
  p as M,
  _ as B
} from "./entry.DN75vySF.js";
import {
  i as C
} from "./isVideo.BdcvccDS.js";
import {
  j as A,
  a as l,
  C as N,
  o as V,
  a9 as F,
  ag as P,
  ah as L,
  ai as z,
  M as i,
  N as a,
  U as o,
  J as f,
  $ as h,
  u as t,
  Z as W,
  W as k,
  X as U,
  Y as X
} from "./swiper-vue.BTZulNLT.js";
const b = p => (U("data-v-a5a9e565"), p = p(), X(), p),
  j = {
    class: "swiper-wrapper"
  },
  q = ["src"],
  J = ["src", "alt"],
  T = {
    class: "swiper-wrapper"
  },
  Y = ["src"],
  Z = ["src", "alt"],
  x = {
    class: "slider__header"
  },
  G = {
    class: "slider__dots"
  },
  H = b(() => o("div", null, null, -1)),
  K = [H],
  Q = {
    class: "text-p1 slider__counter"
  },
  R = {
    class: "slider__buttons"
  },
  ee = ["aria-label", "data-cursor-text"],
  se = ["aria-label", "data-cursor-text"],
  te = b(() => o("div", {
    class: "slider__line"
  }, null, -1)),
  oe = A({
    __name: "EmptyWithProps",
    props: {
      photos: {},
      photosMobile: {},
      pageName: {}
    },
    setup(p) {
      const {
        showCursor: y,
        hideCursor: u
      } = S(), _ = l(0), c = l(), v = l(), w = l(), g = l(), $ = l(), d = l(null);
      N(() => {
        m(), window.addEventListener("resize", m)
      }), V(() => {
        window.removeEventListener("resize", m)
      });

      function I() {
        return window.innerWidth < 1200
      }

      function m() {
        var r;
        if (!c.value) return;
        const e = ((r = $.value) == null ? void 0 : r.querySelectorAll(".slider__dot")) ?? [];
        d.value && d.value.destroy(!0, !0), d.value = new F(I() && v.value ? v.value : c.value, {
          modules: [P, L, z],
          autoplay: {
            delay: 5e3
          },
          loop: !0,
          effect: "creative",
          speed: 400,
          creativeEffect: {
            prev: {
              opacity: 0,
              scale: 1.08
            },
            next: {
              opacity: 0,
              scale: 1.08
            }
          },
          on: {
            slideChange(s) {
              _.value = s.realIndex
            },
            autoplayTimeLeft(s, n, D) {
              e.forEach((O, E) => {
                E !== s.realIndex && (O.children[0].style.transform = ""), e[s.realIndex].children[0].style.transform = `scaleX(${1-D})`
              })
            }
          },
          navigation: {
            nextEl: g.value,
            prevEl: w.value
          }
        })
      }
      return (e, r) => (i(), a("section", {
        ref_key: "sliderDOM",
        ref: $,
        class: "slider"
      }, [o("div", {
        ref_key: "swiperDOM",
        ref: c,
        class: "slider__imgs swiper slider__imgs--desktop"
      }, [o("div", j, [(i(!0), a(f, null, h(e.photos, (s, n) => (i(), a("div", {
        key: n,
        class: "swiper-slide"
      }, [("isVideo" in e ? e.isVideo : t(C))(s) ? (i(), a("video", {
        key: 0,
        class: "slider__img",
        src: s,
        autoplay: "",
        playsinline: "",
        muted: "",
        loop: ""
      }, null, 8, q)) : (i(), a("img", {
        key: 1,
        class: "slider__img",
        src: s,
        alt: `${e.pageName}, ${e.$t("photo_word")} ${("photoIndex"in e?e.photoIndex:t(M))(2300,n)}`
      }, null, 8, J))]))), 128))])], 512), o("div", {
        ref_key: "swiperDOMMobile",
        ref: v,
        class: "slider__imgs swiper slider__imgs--mobile"
      }, [o("div", T, [(i(!0), a(f, null, h(e.photosMobile, (s, n) => (i(), a("div", {
        key: n,
        class: "swiper-slide"
      }, [("isVideo" in e ? e.isVideo : t(C))(s) ? (i(), a("video", {
        key: 0,
        class: "slider__img",
        src: s,
        autoplay: "",
        playsinline: "",
        muted: "",
        loop: ""
      }, null, 8, Y)) : (i(), a("img", {
        key: 1,
        class: "slider__img",
        src: s,
        alt: `${e.pageName}, ${e.$t("photo_word")} ${("photoIndex"in e?e.photoIndex:t(M))(2400,n)}`
      }, null, 8, Z))]))), 128))])], 512), o("div", x, [o("div", G, [(i(!0), a(f, null, h(e.photos.length, s => (i(), a("div", {
        key: s,
        class: W(["slider__dot", {
          active: s < t(_) + 1
        }])
      }, K, 2))), 128))]), o("p", Q, k(t(_) + 1) + " / " + k(t(d) ? t(d).slides.length : 0), 1)]), o("div", R, [o("button", {
        ref_key: "prevButtonDOM",
        ref: w,
        "aria-label": e.$t("prev"),
        "data-cursor": "#C9F7CA",
        "data-cursor-text": e.$t("prev"),
        onPointerenter: r[0] || (r[0] = s => t(y)(e.$t("prev"), "#C9F7CA")),
        onPointerleave: r[1] || (r[1] = (...s) => t(u) && t(u)(...s))
      }, null, 40, ee), o("button", {
        ref_key: "nextButtonDOM",
        ref: g,
        "aria-label": e.$t("next"),
        "data-cursor": "#C9F7CA",
        "data-cursor-text": e.$t("next"),
        onPointerenter: r[2] || (r[2] = s => t(y)(e.$t("next"), "#C9F7CA")),
        onPointerleave: r[3] || (r[3] = (...s) => t(u) && t(u)(...s))
      }, null, 40, se)]), te], 512))
    }
  }),
  le = B(oe, [
    ["__scopeId", "data-v-a5a9e565"]
  ]);
export {
  le as _
};