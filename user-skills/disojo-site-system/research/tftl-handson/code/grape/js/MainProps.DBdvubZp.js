/* https://grape.ua/_nuxt/MainProps.DBdvubZp.js */
import {
  _ as T
} from "./AnimCircles.vue.eKAmF3gL.js";
import {
  b as x,
  g as $,
  S,
  p as C,
  _ as k
} from "./entry.DN75vySF.js";
import {
  j as w,
  a as A,
  b as N,
  C as b,
  o as z,
  M as l,
  N as a,
  U as o,
  J as u,
  $ as f,
  u as i,
  Z as F,
  W as m,
  L as M
} from "./swiper-vue.BTZulNLT.js";
const P = {
    class: "slider"
  },
  B = {
    class: "slider__imgs"
  },
  L = ["src", "alt"],
  j = ["data-cursor-text"],
  D = ["data-cursor-text"],
  H = {
    class: "slider__header"
  },
  U = {
    class: "slider__dots"
  },
  W = {
    class: "text-p1 slider__counter"
  },
  E = {
    class: "slider__content"
  },
  J = ["innerHTML"],
  Z = ["src", "alt"],
  q = {
    class: "text-p2 slider__text"
  },
  G = {
    class: "text-p2 slider__name"
  },
  K = w({
    __name: "MainProps",
    props: {
      testimonials: {},
      pageName: {}
    },
    setup(y) {
      const d = y,
        {
          showCursor: v,
          hideCursor: _
        } = x(),
        n = A(0);
      let c = !1,
        p;
      const h = () => {
          c || (n.value = (n.value + 1) % d.testimonials.length)
        },
        I = () => {
          c || (n.value = (d.testimonials.length + n.value - 1) % d.testimonials.length)
        };
      return N(n, (e, s) => {
        clearTimeout(p), p = setTimeout(h, 5e3), $.timeline({
          onStart: () => {
            c = !0
          },
          onComplete: () => {
            c = !1
          }
        }).set(`.slider__item:nth-child(${s+1})`, {
          display: "none"
        }).set(`.slider__item:nth-child(${e+1})`, {
          display: "block"
        }).fromTo(`.slider__img:nth-child(${e+1})`, {
          opacity: 0,
          scale: 1.08,
          zIndex: 2
        }, {
          opacity: 1,
          scale: 1,
          zIndex: 2
        }).fromTo(`.slider__img:nth-child(${s+1})`, {
          opacity: 1,
          scale: 1,
          zIndex: 2
        }, {
          opacity: 0,
          scale: 1.08,
          zIndex: 2
        }, 0).fromTo(`.slider__item:nth-child(${e+1}) .slider__title .word`, {
          opacity: 0
        }, {
          duration: .05,
          opacity: 1,
          stagger: {
            each: .025,
            from: "random"
          }
        }, .4).fromTo(`.slider__item:nth-child(${e+1}) > *:not(:first-child)`, {
          opacity: 0
        }, {
          duration: .4,
          opacity: 1,
          stagger: {
            each: .1
          }
        }, .6)
      }), b(() => {
        $.set(".slider__img:not(:first-child)", {
          opacity: 0
        }), new S(".slider__title", {
          type: "words",
          wordsClass: "word"
        }), p = setTimeout(h, 5e3)
      }), z(() => {
        clearTimeout(p)
      }), (e, s) => {
        const g = T;
        return l(), a("div", P, [o("div", B, [(l(!0), a(u, null, f(d.testimonials, (t, r) => (l(), a("img", {
          key: r,
          class: "slider__img",
          src: t.photo,
          alt: `${e.pageName}, ${e.$t("photo_word")} ${("photoIndex"in e?e.photoIndex:i(C))(1300,r)}`
        }, null, 8, L))), 128))]), o("div", {
          class: "slider__prev",
          "data-cursor": "#C9F7CA",
          "data-cursor-text": e.$t("prev"),
          onClick: I,
          onPointerenter: s[0] || (s[0] = t => i(v)(e.$t("prev"), "#C9F7CA")),
          onPointerleave: s[1] || (s[1] = (...t) => i(_) && i(_)(...t))
        }, null, 40, j), o("div", {
          class: "slider__next",
          "data-cursor": "#C9F7CA",
          "data-cursor-text": e.$t("next"),
          onClick: h,
          onPointerenter: s[2] || (s[2] = t => i(v)(e.$t("next"), "#C9F7CA")),
          onPointerleave: s[3] || (s[3] = (...t) => i(_) && i(_)(...t))
        }, null, 40, D), o("div", H, [o("div", U, [(l(!0), a(u, null, f(e.testimonials.length, (t, r) => (l(), a("div", {
          key: t,
          class: F(["slider__dot", {
            active: r === i(n)
          }])
        }, null, 2))), 128))]), o("p", W, m(i(n) + 1) + " / " + m(e.testimonials.length), 1)]), M(g, {
          color: "white",
          class: "slider__icon"
        }), o("div", E, [(l(!0), a(u, null, f(e.testimonials, (t, r) => (l(), a("div", {
          key: r,
          class: "slider__item"
        }, [o("div", {
          class: "title-h2 slider__title",
          innerHTML: t.text
        }, null, 8, J), o("img", {
          src: t.client.photo,
          class: "slider__brand",
          alt: `${e.pageName}, ${e.$t("photo_word")} ${("photoIndex"in e?e.photoIndex:i(C))(1400,r)}`
        }, null, 8, Z), o("p", q, m(t.project.name), 1), o("p", G, m(t.client.name) + "®", 1)]))), 128))])])
      }
    }
  }),
  X = k(K, [
    ["__scopeId", "data-v-a7fefcb2"]
  ]);
export {
  X as _
};