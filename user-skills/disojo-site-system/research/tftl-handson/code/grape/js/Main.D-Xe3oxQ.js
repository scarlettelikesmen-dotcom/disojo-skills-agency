/* https://grape.ua/_nuxt/Main.D-Xe3oxQ.js */
import {
  u as m,
  d as I,
  _ as p,
  v as T
} from "./entry.DN75vySF.js";
import {
  j as d,
  M as n,
  R as l,
  Q as B,
  U as e,
  N as a,
  W as c,
  _ as s,
  u as j,
  X as A,
  Y as P,
  a as N,
  J as E,
  $ as R
} from "./swiper-vue.BTZulNLT.js";
const V = {
    class: "notification-content__wrap"
  },
  D = {
    class: "notification-content__content"
  },
  F = {
    class: "notification-content__img"
  },
  J = ["src", "alt"],
  Q = {
    key: 0,
    class: "text-p3 notification-content__title"
  },
  U = {
    class: "text-p3 notification-content__text"
  },
  W = d({
    __name: "Content",
    props: {
      title: {},
      text: {},
      image: {},
      link: {}
    },
    setup(i) {
      return m(), (t, _) => {
        const r = I;
        return n(), l(r, {
          to: t.link,
          class: "notification-content"
        }, {
          default: B(() => [e("div", V, [e("div", D, [e("div", F, [e("img", {
            src: t.image,
            alt: t.title
          }, null, 8, J)]), t.title ? (n(), a("h5", Q, c(t.title), 1)) : s("", !0), e("p", U, c(t.text), 1)])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  X = p(W, [
    ["__scopeId", "data-v-e6af1d81"]
  ]),
  Y = {
    class: "notification-text__wrap"
  },
  q = {
    class: "notification-text__content"
  },
  z = {
    key: 0,
    class: "text-p3 notification-text__title"
  },
  G = {
    class: "text-p3 notification-text__text"
  },
  H = d({
    __name: "Text",
    props: {
      title: {},
      text: {}
    },
    setup(i) {
      const t = m();
      return (_, r) => {
        const f = I;
        return n(), l(f, {
          to: j(t)("/team"),
          class: "notification-text"
        }, {
          default: B(() => [e("div", Y, [e("div", q, [_.title ? (n(), a("h5", z, c(_.title), 1)) : s("", !0), e("p", G, c(_.text), 1)])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  K = p(H, [
    ["__scopeId", "data-v-bcc5e388"]
  ]),
  O = {
    class: "notification-award"
  },
  Z = {
    class: "notification-award__wrap"
  },
  tt = {
    class: "notification-award__logo"
  },
  et = ["src", "alt"],
  nt = {
    class: "notification-award__content"
  },
  ot = {
    key: 0,
    class: "text-p3 notification-award__title"
  },
  st = {
    class: "text-p3 notification-award__text"
  },
  it = d({
    __name: "Award",
    props: {
      title: {},
      text: {},
      image: {}
    },
    setup(i) {
      return (t, _) => (n(), a("div", O, [e("div", Z, [e("div", tt, [e("img", {
        src: t.image,
        alt: t.title
      }, null, 8, et)]), e("div", nt, [t.title ? (n(), a("h5", ot, c(t.title), 1)) : s("", !0), e("p", st, c(t.text), 1)])])]))
    }
  }),
  at = p(it, [
    ["__scopeId", "data-v-67898c47"]
  ]),
  _t = i => (A("data-v-6f9ed071"), i = i(), P(), i),
  ct = {
    class: "notification-text"
  },
  lt = {
    class: "notification-text__wrap"
  },
  rt = {
    class: "notification-text__content"
  },
  pt = {
    class: "T8 notification-text__title"
  },
  dt = _t(() => e("a", {
    href: "mailto:nb@grape.ua",
    class: "T6 link-2 notification-text__text"
  }, "nb@grape.ua", -1)),
  ut = d({
    __name: "Email",
    setup(i) {
      return T(), (t, _) => (n(), a("div", ct, [e("div", lt, [e("div", rt, [e("h5", pt, c(t.$t("drop")), 1), dt])])]))
    }
  }),
  mt = p(ut, [
    ["__scopeId", "data-v-6f9ed071"]
  ]),
  ft = {
    key: 2,
    class: "text-p3 notifications__more"
  },
  ht = d({
    __name: "Main",
    props: {
      news: {},
      hasEmail: {
        type: Boolean,
        default: !1
      }
    },
    setup(i) {
      const t = i,
        _ = N(null),
        r = N(!1);
      return m(), (f, u) => {
        const C = X,
          S = at,
          L = K,
          M = mt;
        return t.news && t.news.length > 0 || t.hasEmail ? (n(), a("div", {
          key: 0,
          ref_key: "elem",
          ref: _,
          onMouseenter: u[0] || (u[0] = o => r.value = !0),
          onMouseleave: u[1] || (u[1] = o => r.value = !1),
          class: "notifications"
        }, [t.news && t.news.length > 0 ? (n(!0), a(E, {
          key: 0
        }, R(t.news.slice(0, 5), o => {
          var h, w, x, k, v, $, g, y, b;
          return n(), a(E, null, [o.type === "project" ? (n(), l(C, {
            key: 0,
            class: "notifications__item",
            text: (h = o.news_block) == null ? void 0 : h.news_description,
            title: (w = o.news_block) == null ? void 0 : w.news_title,
            image: (x = o.news_block) == null ? void 0 : x.news_background,
            link: (k = o.news_block) == null ? void 0 : k.link
          }, null, 8, ["text", "title", "image", "link"])) : s("", !0), o.type === "award" ? (n(), l(S, {
            key: 1,
            class: "notifications__item",
            text: (v = o.news_block) == null ? void 0 : v.news_description,
            title: ($ = o.news_block) == null ? void 0 : $.news_title,
            image: (g = o.news_block) == null ? void 0 : g.news_background
          }, null, 8, ["text", "title", "image"])) : s("", !0), o.type === "vacancy" ? (n(), l(L, {
            key: 2,
            class: "notifications__item",
            text: (y = o.news_block) == null ? void 0 : y.news_description,
            title: (b = o.news_block) == null ? void 0 : b.news_title
          }, null, 8, ["text", "title"])) : s("", !0)], 64)
        }), 256)) : s("", !0), t.hasEmail ? (n(), l(M, {
          key: 1,
          class: "notifications__item notifications__email"
        })) : s("", !0), t.news && t.news.length + (t.hasEmail ? 1 : 0) > 1 ? (n(), a("div", ft, " +" + c(t.news.length - 1 + (t.hasEmail ? 1 : 0)) + " more ", 1)) : s("", !0)], 544)) : s("", !0)
      }
    }
  }),
  kt = p(ht, [
    ["__scopeId", "data-v-41ac9627"]
  ]);
export {
  X as _, K as a, at as b, kt as c
};