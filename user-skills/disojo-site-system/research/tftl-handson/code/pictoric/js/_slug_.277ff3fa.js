/* https://pictoric.com.ua/_nuxt/_slug_.277ff3fa.js */
import {
  d as v,
  m as w,
  o as V,
  b as i,
  c as _,
  i as l,
  j as s,
  g as e,
  F as A,
  A as q,
  t as h,
  k as u,
  v as E,
  T as O,
  _ as f,
  x as I,
  h as P,
  z as g,
  y as H,
  r as R,
  B as F,
  C as B,
  N as W,
  W as z,
  O as Q,
  P as G,
  f as J,
  Q as K
} from "./entry.6cb2d70d.js";
import {
  _ as U
} from "./HanddrawnSvg.e4acccd9.js";
import {
  _ as X
} from "./TwistedAnimated.8e22b526.js";
import {
  _ as Y
} from "./Circular.662c8455.js";
import {
  _ as Z
} from "./Illustration.29a479eb.js";
import {
  _ as tt
} from "./index.3c30ea43.js";
import {
  _ as et
} from "./index.a90ee2f6.js";
import {
  u as at
} from "./index.7717ae4c.js";
import {
  u as nt
} from "./useDefaultAnim.bde1a832.js";
import "./SansSerif.76e1e15a.js";
import "./Close.de99442d.js";
import "./Caret.8726756f.js";
import "./useResize.e6421d34.js";
import "./pagination.9e265203.js";
const st = {
    key: 0,
    class: "hero"
  },
  ot = ["innerHTML"],
  it = ["innerHTML"],
  ct = {
    class: "hero-thumb"
  },
  rt = {
    class: "hero-image"
  },
  lt = ["src"],
  _t = {
    class: "hero-author__img"
  },
  ut = ["src"],
  dt = {
    key: 0,
    class: "hero-author t2-xb"
  },
  mt = v({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(t) {
      const {
        t: c
      } = w();

      function d(n) {
        const r = n.getBoundingClientRect(),
          a = window.innerHeight;
        return r.top <= a / 2 ? Math.abs(a / 2 - r.top) : 0
      }

      function o() {
        const n = document.querySelector(".hero .hero-image .inner-img");
        n && (d(n), E.to(n, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: n,
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          }
        }))
      }
      return V(o), (n, r) => {
        const a = O;
        return t.data ? (i(), _("section", st, [l(a, {
          class: "hero-button mob",
          "button-text": s(c)("buttons.back")
        }, null, 8, ["button-text"]), e("div", {
          class: "hero-description t2-xb anim-text",
          innerHTML: t.data.suptitle
        }, null, 8, ot), e("h1", {
          class: "hero-title h2 anim-title",
          innerHTML: t.data.title
        }, null, 8, it), e("div", ct, [e("div", rt, [e("img", {
          class: "inner-img",
          src: t.data.image.original,
          alt: "image"
        }, null, 8, lt)]), e("div", _t, [e("img", {
          class: "inner-img",
          src: t.data.photo.original,
          alt: "image"
        }, null, 8, ut)])]), t.data.author.name ? (i(), _("p", dt, [t.data.author.title ? (i(), _(A, {
          key: 0
        }, [q(h(t.data.author.title), 1)], 64)) : u("", !0), e("span", null, h(t.data.author.name), 1)])) : u("", !0)])) : u("", !0)
      }
    }
  });
const pt = f(mt, [
    ["__scopeId", "data-v-0aceb522"]
  ]),
  gt = {
    key: 0,
    class: "about"
  },
  ht = {
    class: "title-wrapper"
  },
  vt = ["innerHTML"],
  ft = {
    class: "about-icon"
  },
  xt = ["innerHTML"],
  bt = {
    class: "arrow-icon"
  },
  $t = v({
    __name: "About",
    props: {
      data: {}
    },
    setup(t) {
      return (c, d) => {
        const o = U,
          n = X;
        return t.data ? (i(), _("section", gt, [e("div", ht, [e("h2", {
          class: "about-title h1 anim-title",
          innerHTML: t.data.title
        }, null, 8, vt), e("div", ft, [l(o, {
          "svg-link": t.data.icon.original
        }, null, 8, ["svg-link"])])]), e("div", {
          class: "about-description h4 anim-title",
          innerHTML: t.data.description
        }, null, 8, xt), e("div", bt, [l(n, {
          class: "inner-svg"
        })])])) : u("", !0)
      }
    }
  });
const yt = f($t, [
    ["__scopeId", "data-v-81d9f8b4"]
  ]),
  kt = {
    key: 0,
    class: "projects-wrapper"
  },
  wt = ["innerHTML"],
  At = {
    class: "projects grid-container"
  },
  Ht = ["onClick"],
  Tt = {
    class: "project-thumb"
  },
  jt = ["src"],
  Ct = {
    class: "project-title t2-xb"
  },
  Mt = {
    class: "illustration-title a1"
  },
  Lt = {
    class: "illustration-title__btn"
  },
  Dt = v({
    __name: "Projects",
    props: {
      title: {},
      data: {}
    },
    setup(t) {
      const c = t;
      w();
      const d = I(),
        o = R(null),
        n = F(() => o.value === null ? {
          image: {
            thumbnail: "",
            small: "",
            medium: "",
            large: "",
            original: "",
            alt: ""
          },
          description: ""
        } : {
          image: c.data[o.value].image,
          description: c.data[o.value].description
        });

      function r(a) {
        o.value = a
      }
      return (a, m) => {
        const x = Y,
          b = B,
          $ = Z,
          y = W;
        return t.data ? (i(), _("section", kt, [e("h2", {
          class: "projects-title h1_2 anim-title",
          innerHTML: t.title
        }, null, 8, wt), e("div", At, [(i(!0), _(A, null, P(t.data, (p, k) => (i(), _("div", {
          key: k,
          class: "project"
        }, [e("div", {
          class: "project-inner",
          onClick: T => r(k)
        }, [e("div", Tt, [e("img", {
          class: "project-image",
          src: p.image.original,
          alt: "image"
        }, null, 8, jt)]), e("h3", Ct, h(p.title), 1)], 8, Ht)]))), 128))]), l(y, null, {
          default: g(() => [s(o) !== null ? (i(), H($, {
            key: 0,
            data: s(n),
            "no-info": !t.data[s(o)].project.slug,
            onHideModal: m[0] || (m[0] = p => r(null))
          }, {
            header: g(() => [l(b, {
              to: s(d)(`/art/${t.data[s(o)].project.slug}`),
              class: "illustration-title__wrapper"
            }, {
              default: g(() => [e("h2", Mt, h(t.data[s(o)].project.title), 1), e("button", Lt, [l(x)])]),
              _: 1
            }, 8, ["to"])]),
            _: 1
          }, 8, ["data", "no-info"])) : u("", !0)]),
          _: 1
        }), u("", !0)])) : u("", !0)
      }
    }
  });
const It = f(Dt, [
    ["__scopeId", "data-v-2e87d1ee"]
  ]),
  Pt = {
    key: 0,
    class: "artists-wrapper"
  },
  Bt = {
    class: "artists-inner"
  },
  St = ["innerHTML"],
  Nt = {
    class: "artist-img__wrapper"
  },
  Vt = ["src"],
  qt = {
    class: "t2-xb"
  },
  Et = v({
    __name: "Artists",
    props: {
      title: {},
      data: {}
    },
    setup(t) {
      const c = I();
      return (d, o) => {
        const n = B,
          r = tt;
        return t.data ? (i(), _("section", Pt, [e("div", Bt, [e("h2", {
          class: "artists-title h1_2 anim-title",
          innerHTML: t.title
        }, null, 8, St), l(r, {
          id: "artists",
          "pagination-position": "bottom",
          class: "artists",
          "cursor-shown": t.data.length > 3
        }, {
          slides: g(() => [(i(!0), _(A, null, P(t.data, (a, m) => (i(), H(n, {
            key: m,
            to: s(c)(a.slug),
            class: "artist swiper-slide"
          }, {
            default: g(() => [e("div", Nt, [e("img", {
              class: "inner-img",
              src: a.image.original,
              alt: "image"
            }, null, 8, Vt)]), e("h3", qt, h(a.title), 1)]),
            _: 2
          }, 1032, ["to"]))), 128))]),
          _: 1
        }, 8, ["cursor-shown"])])])) : u("", !0)
      }
    }
  });
const Ot = f(Et, [
    ["__scopeId", "data-v-b3983c9c"]
  ]),
  Rt = {
    key: 0,
    class: "artist"
  },
  Ft = v({
    __name: "[slug]",
    async setup(t) {
      var x, b;
      let c, d;
      const {
        params: o
      } = z(), n = o.slug, {
        value: r
      } = w().locale, {
        data: a
      } = ([c, d] = Q(async () => K(`artist-${n}`, async () => {
        const [$, y] = await Promise.all([$fetch("/api/collections/artists", {
          method: "get",
          query: {
            locale: r,
            slug: n
          }
        }), $fetch("/api/collections/artists/card", {
          method: "get",
          query: {
            locale: r,
            slug: n
          }
        })]);
        return {
          pageData: $,
          artists: y
        }
      })), c = await c, d(), c);
      if (!((x = a.value) != null && x.pageData)) throw G({
        statusCode: 404,
        statusMessage: "Error fetching artist page data",
        fatal: !0
      });
      at(a.value.pageData.meta), nt();
      const m = J("headerTitle");
      return m.value = (b = a.value.pageData.hero) == null ? void 0 : b.title, ($, y) => {
        var j, C, M, L, D;
        const p = pt,
          k = yt,
          T = It,
          S = Ot,
          N = et;
        return (j = s(a)) != null && j.pageData ? (i(), _("main", Rt, [l(p, {
          data: s(a).pageData.hero
        }, null, 8, ["data"]), l(k, {
          data: s(a).pageData.about
        }, null, 8, ["data"]), (M = (C = s(a).pageData.projects) == null ? void 0 : C.illustrations) != null && M.length ? (i(), H(T, {
          key: 0,
          title: (L = s(a).pageData.projects) == null ? void 0 : L.title,
          data: s(a).pageData.projects.illustrations
        }, null, 8, ["title", "data"])) : u("", !0), l(S, {
          title: (D = s(a).pageData.artists) == null ? void 0 : D.title,
          data: s(a).artists
        }, null, 8, ["title", "data"]), l(N, {
          bg: s(a).pageData.footerImg
        }, null, 8, ["bg"])])) : u("", !0)
      }
    }
  });
const se = f(Ft, [
  ["__scopeId", "data-v-7f8b8887"]
]);
export {
  se as
  default
};