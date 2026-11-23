/* https://grape.ua/_nuxt/AwardsWithProps.vue.D6tqsxmX.js */
import {
  u as w,
  a as g,
  d as v
} from "./entry.DN75vySF.js";
import {
  j as d,
  M as t,
  N as e,
  U as s,
  W as o,
  J as c,
  $ as l,
  V as C,
  R as x,
  Q as f,
  u as $,
  _ as k
} from "./swiper-vue.BTZulNLT.js";
const L = "" + globalThis.__publicAssetsURL("img/about-first-preview.png"),
  V = {
    class: "video-preview"
  },
  B = {
    class: "video-preview__image"
  },
  N = ["alt"],
  b = s("span", {
    class: "video-preview__play"
  }, [s("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, [s("path", {
    d: "M7.46864 5.0014L18.6772 11.5401C18.7575 11.5871 18.8241 11.6543 18.8704 11.7351C18.9167 11.8158 18.9411 11.9073 18.9411 12.0003C18.9411 12.0934 18.9167 12.1849 18.8704 12.2656C18.8241 12.3464 18.7575 12.4136 18.6772 12.4606L7.46864 18.9993C7.38743 19.0467 7.29514 19.0717 7.20112 19.072C7.10709 19.0722 7.01468 19.0476 6.93325 19.0006C6.85181 18.9536 6.78425 18.8859 6.73741 18.8043C6.69056 18.7228 6.6661 18.6304 6.66651 18.5363V5.4622C6.66648 5.36836 6.69121 5.27617 6.73821 5.19495C6.78521 5.11372 6.8528 5.04633 6.93418 4.99959C7.01555 4.95284 7.10781 4.9284 7.20165 4.92871C7.29549 4.92903 7.38759 4.95411 7.46864 5.0014Z",
    fill: "white"
  })])], -1),
  I = d({
    __name: "VideoPreview",
    props: {
      alt: {}
    },
    setup(n) {
      return (a, r) => (t(), e("button", V, [s("span", B, [s("img", {
        src: L,
        class: "video-preview__img",
        alt: a.alt
      }, null, 8, N)]), b]))
    }
  }),
  y = {
    class: "awards"
  },
  P = {
    class: "awards__header"
  },
  T = {
    class: "text-p3 awards__title"
  },
  j = {
    class: "text-p3 awards__text"
  },
  A = {
    class: "awards__title"
  },
  D = {
    class: "awards__item-projectcs"
  },
  F = ["src", "alt"],
  M = {
    class: "title-h1 awards__other"
  },
  R = {
    key: 0,
    class: "text-p1 awards__description"
  },
  J = d({
    __name: "AwardsWithProps",
    props: {
      awards: {},
      description: {}
    },
    setup(n) {
      const a = n,
        r = w(),
        {
          t: p
        } = g(),
        h = {
          and_others: p("and_others")
        };
      return (u, U) => {
        const m = v;
        return t(), e("section", y, [s("div", P, [s("h4", T, o(u.$t("main_page.awards")), 1), s("p", j, "2011 – " + o(new Date().getFullYear()), 1)]), s("ul", A, [(t(!0), e(c, null, l(a.awards, _ => (t(), e("li", {
          key: _.id,
          class: "title-h1t awards__item"
        }, [s("span", null, o(_.name), 1), C("; "), s("div", D, [(t(!0), e(c, null, l(_.projects, i => (t(), x(m, {
          class: "awards__item-projects-link",
          to: $(r)(`/portfolio/${i.slug}`)
        }, {
          default: f(() => [s("img", {
            src: i.photo,
            alt: i.name
          }, null, 8, F)]),
          _: 2
        }, 1032, ["to"]))), 256))])]))), 128)), s("li", M, o(h.and_others) + ".", 1)]), a.description ? (t(), e("p", R, o(a.description), 1)) : k("", !0)])
      }
    }
  });
export {
  I as _, J as a
};