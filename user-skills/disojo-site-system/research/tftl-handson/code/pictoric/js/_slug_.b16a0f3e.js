/* https://pictoric.com.ua/_nuxt/_slug_.b16a0f3e.js */
import {
  d as j,
  m as E,
  o as V,
  b as o,
  c as l,
  g as t,
  i as d,
  j as e,
  k as u,
  F as I,
  A as z,
  t as x,
  v as S,
  T as st,
  _ as B,
  f as G,
  u as W,
  x as O,
  D as nt,
  h as P,
  y as H,
  I as K,
  z as A,
  n as X,
  q as ot,
  r as R,
  U as at,
  B as U,
  V as Y,
  M as Z,
  C as Q,
  a as it,
  E as lt,
  s as rt,
  N as ct,
  W as _t,
  O as ut,
  P as dt,
  Q as mt,
  R as ht,
  S as pt
} from "./entry.6cb2d70d.js";
import {
  _ as tt
} from "./HanddrawnSvg.e4acccd9.js";
import {
  _ as gt,
  a as yt
} from "./Slide.a40fee9e.js";
import {
  a as ft,
  _ as vt
} from "./index.eb2de3e0.js";
import {
  _ as xt
} from "./Default.49af0b27.js";
import {
  _ as kt
} from "./Circular.662c8455.js";
import {
  _ as $t
} from "./Illustration.29a479eb.js";
import {
  _ as bt
} from "./index.3c30ea43.js";
import {
  f as Ct,
  a as Mt
} from "./Select.148f86b8.js";
import {
  _ as wt
} from "./SansSerif.76e1e15a.js";
import {
  u as Tt
} from "./index.7717ae4c.js";
import {
  u as At
} from "./useDefaultAnim.bde1a832.js";
import "./index.13429eea.js";
import "./useResize.e6421d34.js";
import "./Close.de99442d.js";
import "./Caret.8726756f.js";
import "./pagination.9e265203.js";
const Ht = {
    key: 0,
    class: "hero"
  },
  Lt = {
    class: "sticky-container"
  },
  St = ["innerHTML"],
  It = {
    key: 0,
    class: "hero-icon"
  },
  Dt = ["innerHTML"],
  Pt = {
    class: "hero-thumb"
  },
  jt = ["src"],
  Bt = {
    key: 0,
    class: "hero-author t2-xb"
  },
  Et = j({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(s) {
      const {
        t: y
      } = E();

      function k(c) {
        const h = c.getBoundingClientRect(),
          n = window.innerHeight;
        return h.top <= n / 2 ? Math.abs(n / 2 - h.top) : 0
      }

      function r() {
        const c = document.querySelector(".hero .hero-thumb .inner-img");
        c && (k(c), S.to(c, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: c,
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          }
        }))
      }
      return V(r), (c, h) => {
        const n = st,
          b = tt;
        return s.data ? (o(), l("section", Ht, [t("div", Lt, [d(n, {
          class: "hero-button mob",
          "button-text": e(y)("buttons.back")
        }, null, 8, ["button-text"]), t("div", {
          class: "hero-description t2-xb anim-text",
          innerHTML: s.data.suptitle
        }, null, 8, St), s.data.icon ? (o(), l("div", It, [d(b, {
          "svg-link": s.data.icon.original
        }, null, 8, ["svg-link"])])) : u("", !0), t("h1", {
          class: "hero-title h2 anim-title",
          innerHTML: s.data.title
        }, null, 8, Dt), t("div", Pt, [t("img", {
          class: "inner-img",
          src: s.data.image.original,
          alt: "image"
        }, null, 8, jt)])]), s.data.author.name ? (o(), l("p", Bt, [s.data.author.title ? (o(), l(I, {
          key: 0
        }, [z(x(s.data.author.title), 1)], 64)) : u("", !0), t("span", null, x(s.data.author.name), 1)])) : u("", !0)])) : u("", !0)
      }
    }
  });
const qt = B(Et, [
    ["__scopeId", "data-v-7d2ec8f3"]
  ]),
  Ft = {
    key: 0,
    class: "team"
  },
  Nt = {
    class: "title-wrapper"
  },
  Rt = {
    class: "team-title h1_2 anim-title"
  },
  Vt = ["innerHTML"],
  Wt = {
    class: "team-items"
  },
  zt = {
    class: "displayed-items"
  },
  J = 30,
  Gt = j({
    __name: "Team",
    props: {
      data: {}
    },
    setup(s) {
      const y = s,
        k = G("touchDevice"),
        {
          isDesktop: r
        } = W(),
        {
          t: c
        } = E(),
        h = R(at()),
        n = R(!1),
        b = O(),
        a = U(() => y.data ? y.data.participants.slice(J) : []),
        {
          isMobile: i
        } = W(),
        _ = R();
      let p, v, w, m;

      function T() {
        if (!k.value || !r.value || !_.value) return;
        const g = _.value.querySelectorAll(".circle");
        if (!(g != null && g.length)) return;
        const f = [...g];
        f.pop(), S.set(f, {
          scale: 0
        });
        const $ = S.timeline({
          paused: !0
        });
        $.to(f, {
          scale: 1,
          duration: 2,
          stagger: () => parseFloat((Math.random() * .2).toFixed(2)),
          ease: "elastic.out(1, 0.4)"
        }), m = Y.create({
          trigger: _.value.parentElement,
          start: "top bottom-=20%",
          onEnter: () => $.play(),
          once: !0
        })
      }

      function L() {
        var $, M;
        if (k.value || i.value) return;
        const g = ($ = _.value) == null ? void 0 : $.querySelectorAll(".circle");
        if (!(g != null && g.length) || p) return;
        clearTimeout(w), (M = v == null ? void 0 : v.kill) == null || M.call(v), v = void 0;
        const f = [...g];
        f.pop(), p = S.to(f, {
          scale: 1,
          duration: 2,
          stagger: () => parseFloat((Math.random() * .2).toFixed(2)),
          ease: "elastic.out(1, 0.4)"
        })
      }

      function q() {
        var $;
        if (k.value || i.value) return;
        const g = ($ = _.value) == null ? void 0 : $.querySelectorAll(".circle");
        if (!(g != null && g.length) || v) return;
        const f = [...g];
        f.pop(), w = setTimeout(() => {
          var M;
          (M = p == null ? void 0 : p.kill) == null || M.call(p), p = void 0, v = S.to(f, {
            scale: 0,
            duration: 1,
            stagger: () => parseFloat((Math.random() * .2).toFixed(2)),
            ease: "elastic.in(1, 0.6)"
          })
        }, 100)
      }
      return V(T), nt(() => {
        m && m.kill()
      }), (g, f) => {
        const $ = Z,
          M = Q,
          F = ft,
          N = xt;
        return s.data ? (o(), l("section", Ft, [t("div", {
          ref_key: "circlesWrapper",
          ref: _,
          class: "circles desk"
        }, [(o(!0), l(I, null, P(e(h).desk, (C, D) => (o(), H($, K({
          key: D
        }, {
          ref_for: !0
        }, C), null, 16))), 128))], 512), t("div", Nt, [t("h2", Rt, [t("span", null, x(s.data.titles[0]), 1), t("span", null, x(s.data.titles[1]), 1)]), t("div", {
          class: "team-description t2-xb",
          innerHTML: s.data.description
        }, null, 8, Vt)]), t("div", Wt, [t("div", zt, [(o(!0), l(I, null, P(s.data.participants.slice(0, J), (C, D) => (o(), H(M, {
          key: D,
          to: e(b)(`/artist/${C.slug}`),
          class: "team-name t1 anim-text",
          onMouseenter: L,
          onMouseleave: q
        }, {
          default: A(() => [t("span", null, x(C.name), 1)]),
          _: 2
        }, 1032, ["to"]))), 128))]), t("div", {
          class: X(["additional-items", {
            active: e(n)
          }]),
          style: ot(`--items-count: ${Math.ceil(e(a).length/3)}`)
        }, [(o(!0), l(I, null, P(e(a), (C, D) => (o(), H(M, {
          key: D,
          to: e(b)(`/artist/${C.slug}`),
          class: "team-name t1",
          onMouseenter: L,
          onMouseleave: q
        }, {
          default: A(() => [t("span", null, x(C.name), 1)]),
          _: 2
        }, 1032, ["to"]))), 128))], 6)]), t("button", {
          class: X(["team-button", {
            active: e(a).length
          }]),
          type: "button",
          onClick: f[0] || (f[0] = C => n.value = !e(n))
        }, [d(N, {
          text: e(n) ? e(c)("buttons.showLess") : e(c)("buttons.loadMore")
        }, {
          default: A(() => [d(F, {
            class: "button-icon"
          })]),
          _: 1
        }, 8, ["text"])], 2)])) : u("", !0)
      }
    }
  });
const Ot = B(Gt, [
    ["__scopeId", "data-v-62253aa8"]
  ]),
  Ut = {
    key: 0,
    class: "illustrations"
  },
  Qt = ["innerHTML"],
  Xt = {
    class: "illustrations-wrapper"
  },
  Jt = ["onClick"],
  Kt = {
    class: "illustrations-list__thumb"
  },
  Yt = ["src"],
  Zt = {
    class: "illustrations-list__meta"
  },
  te = {
    key: 0,
    class: "illustrations-list__title t2-xb"
  },
  ee = {
    class: "illustrations-list__buy-text t2-xb"
  },
  se = {
    class: "illustrations-list__buy-btn"
  },
  ne = {
    class: "illustration-title a1"
  },
  oe = {
    class: "illustration-author t2-xb"
  },
  ae = {
    class: "illustration-author__btn"
  },
  ie = j({
    __name: "Illustrations",
    props: {
      data: {}
    },
    setup(s) {
      const {
        t: y
      } = E(), k = O(), r = R(null), c = rt(), h = [];

      function n(a) {
        r.value = a
      }
      const b = () => {
        if (!c.value) return;
        const a = c.value.querySelectorAll(".illustrations-list__item");
        a.length && (S.set(a, {
          y: 70,
          opacity: 0
        }), a.forEach((i, _) => {
          const p = Y.create({
            trigger: i,
            start: "top bottom-=10%",
            once: !0,
            onEnter: () => {
              S.to(i, {
                y: 0,
                opacity: 1,
                duration: .6,
                ease: "power2.out",
                delay: _ * .1
              })
            }
          });
          h.push(p)
        }))
      };
      return V(() => {
        b()
      }), it(() => {
        h.length && h.forEach(a => {
          a && a.kill && a.kill()
        })
      }), (a, i) => {
        const _ = kt,
          p = Q,
          v = $t,
          w = ct;
        return s.data ? (o(), l("section", Ut, [t("h2", {
          class: "illustrations-title h4 anim-title",
          innerHTML: s.data.title
        }, null, 8, Qt), t("div", Xt, [t("ul", {
          ref_key: "illustrationsRef",
          ref: c,
          class: "illustrations-list grid-container"
        }, [(o(!0), l(I, null, P(s.data.projects, (m, T) => (o(), l("li", {
          key: T,
          class: "illustrations-list__item"
        }, [t("div", {
          class: "illustrations-list__inner",
          onClick: L => n(T)
        }, [t("div", Kt, [t("img", {
          class: "illustrations-list__img",
          src: m.image.original,
          alt: "image"
        }, null, 8, Yt)]), t("div", Zt, [m.author.name ? (o(), l("h3", te, [i[2] || (i[2] = z(" author: ", -1)), t("span", null, x(m.author.name), 1)])) : u("", !0), m.link ? (o(), H(p, {
          key: 1,
          to: m.link,
          class: "illustrations-list__buy",
          external: "",
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          onClick: i[0] || (i[0] = lt(() => {}, ["stop"]))
        }, {
          default: A(() => [t("span", ee, x(e(y)("buttons.buy")), 1), t("span", se, [d(_, {
            animated: ""
          })])]),
          _: 1
        }, 8, ["to"])) : u("", !0)])], 8, Jt)]))), 128))], 512)]), u("", !0), d(w, null, {
          default: A(() => [e(r) !== null ? (o(), H(v, {
            key: 0,
            data: s.data.projects[e(r)],
            onHideModal: i[1] || (i[1] = m => n(null))
          }, {
            header: A(() => [t("h2", ne, x(s.data.projects[e(r)].title), 1), s.data.projects[e(r)].author.slug && s.data.projects[e(r)].author.name ? (o(), H(p, {
              key: 0,
              to: e(k)(s.data.projects[e(r)].author.slug),
              class: "illustration-author__wrapper"
            }, {
              default: A(() => [t("p", oe, x(s.data.projects[e(r)].author.name), 1), t("button", ae, [d(_, {
                animated: ""
              })])]),
              _: 1
            }, 8, ["to"])) : u("", !0)]),
            _: 1
          }, 8, ["data"])) : u("", !0)]),
          _: 1
        })])) : u("", !0)
      }
    }
  });
const le = B(ie, [
    ["__scopeId", "data-v-5dedb90f"]
  ]),
  re = {
    key: 0,
    class: "gallery-wrapper"
  },
  ce = ["innerHTML"],
  _e = j({
    __name: "Gallery",
    props: {
      data: {}
    },
    setup(s) {
      return (y, k) => {
        const r = gt,
          c = bt;
        return s.data && s.data.projects.length ? (o(), l("section", re, [s.data.title ? (o(), l("h2", {
          key: 0,
          class: "gallery-title h1_2 anim-title",
          innerHTML: s.data.title
        }, null, 8, ce)) : u("", !0), d(c, {
          id: "gallery",
          "cursor-shown": s.data.projects.length * 2 > 3
        }, {
          slides: A(() => [(o(!0), l(I, null, P(s.data.projects, (h, n) => (o(), H(r, {
            key: n,
            data: h
          }, null, 8, ["data"]))), 128))]),
          _: 1
        }, 8, ["cursor-shown"])])) : u("", !0)
      }
    }
  });
const ue = B(_e, [
    ["__scopeId", "data-v-5630e37e"]
  ]),
  de = {
    key: 0,
    class: "history"
  },
  me = {
    class: "title-wrapper"
  },
  he = ["innerHTML"],
  pe = {
    class: "description-wrapper"
  },
  ge = {
    key: 0,
    class: "title-icon"
  },
  ye = ["innerHTML"],
  fe = {
    id: "art-history-list",
    class: "history-list"
  },
  ve = {
    key: 0,
    class: "history-list__item-line history-list__item-line--bottom"
  },
  xe = {
    class: "history-list__date t2-xb"
  },
  ke = {
    class: "history-list__wrapper"
  },
  $e = {
    class: "history-list__content"
  },
  be = {
    class: "history-list__title t2-xb"
  },
  Ce = {
    class: "history-list__icon"
  },
  Me = {
    class: "history-list__description t1"
  },
  we = {
    class: "history-list__inner"
  },
  Te = {
    class: "history-list__thumb"
  },
  Ae = ["src"],
  He = {
    class: "history-list__icon"
  },
  Le = j({
    __name: "History",
    props: {
      data: {}
    },
    setup(s) {
      var b;
      const y = s,
        r = (b = G("commonData").value) == null ? void 0 : b.titles.history;
      E();
      const c = O(),
        h = U(() => {
          var a;
          return (a = y.data) != null && a.length ? [...y.data].sort((i, _) => new Date(_.date).getTime() - new Date(i.date).getTime()) : []
        });

      function n() {
        const a = document.getElementById("art-history-list"),
          i = a == null ? void 0 : a.querySelectorAll(".history-list__item-line");
        i != null && i.length && i.forEach(_ => {
          S.to(_, {
            scrollTrigger: {
              trigger: _
            },
            scaleX: 1,
            duration: 1,
            ease: "default-ease"
          })
        })
      }
      return V(n), (a, i) => {
        var w;
        const _ = tt,
          p = wt,
          v = Q;
        return (w = s.data) != null && w.length && e(r) ? (o(), l("section", de, [t("div", me, [t("h2", {
          class: "history-title h1 anim-title",
          innerHTML: e(r).title
        }, null, 8, he), t("div", pe, [e(r).icon.original ? (o(), l("div", ge, [d(_, {
          "svg-link": e(r).icon.original
        }, null, 8, ["svg-link"])])) : u("", !0), t("div", {
          class: "history-description h4 anim-title",
          innerHTML: e(r).description
        }, null, 8, ye)])]), t("ul", fe, [(o(!0), l(I, null, P(e(h), (m, T) => {
          var L;
          return o(), l("li", {
            key: T,
            class: "history-list__item"
          }, [i[0] || (i[0] = t("div", {
            class: "history-list__item-line"
          }, null, -1)), (L = e(h)) != null && L.length && T === e(h).length - 1 ? (o(), l("div", ve)) : u("", !0), d(v, {
            class: "history-list__link grid-container",
            to: e(c)(m.link),
            external: "",
            rel: "noopener noreferrer nofollow",
            target: "_blank"
          }, {
            default: A(() => [t("p", xe, x(e(Ct)(m.date)), 1), t("div", ke, [t("div", $e, [t("h3", be, [z(x(m.title) + " ", 1), t("span", Ce, [d(p, {
              class: "inner-svg"
            })])]), t("p", Me, x(m.description), 1)]), t("div", we, [t("div", Te, [t("img", {
              class: "inner-img",
              src: m.photo.original,
              alt: "image"
            }, null, 8, Ae)]), t("div", He, [d(p, {
              class: "inner-svg"
            })])])])]),
            _: 2
          }, 1032, ["to"])])
        }), 128))]), u("", !0)])) : u("", !0)
      }
    }
  });
const Se = B(Le, [
    ["__scopeId", "data-v-8fba0f96"]
  ]),
  Ie = {
    key: 0,
    class: "project"
  },
  De = {
    key: 1,
    class: "sections-wrapper"
  },
  Pe = {
    class: "sections-inner"
  },
  je = {
    class: "partners-wrapper"
  },
  Be = {
    key: 0,
    class: "circles"
  },
  Ee = j({
    __name: "[slug]",
    async setup(s) {
      var _;
      let y, k;
      const {
        params: r
      } = _t(), c = r.slug, {
        value: h
      } = E().locale, {
        data: n
      } = ([y, k] = ut(async () => mt(`art-${c}`, async () => await $fetch("/api/collections/projects/arts", {
        method: "get",
        query: {
          locale: h,
          slug: c
        }
      }))), y = await y, k(), y);
      if (!n.value) throw dt({
        statusCode: 404,
        statusMessage: "Error fetching art page data",
        fatal: !0
      });
      Tt(n.value.meta), At();
      const b = G("headerTitle");
      b.value = (_ = n.value.hero) == null ? void 0 : _.title;
      const {
        isDesktop: a
      } = W(), i = U(() => a.value ? ht() : pt());
      return (p, v) => {
        var F, N, C;
        const w = qt,
          m = yt,
          T = Ot,
          L = le,
          q = ue,
          g = vt,
          f = Z,
          $ = Mt,
          M = Se;
        return e(n) ? (o(), l("main", Ie, [d(w, {
          data: e(n).hero
        }, null, 8, ["data"]), d(m, {
          data: e(n).about
        }, null, 8, ["data"]), d(T, {
          data: e(n).team
        }, null, 8, ["data"]), (F = e(n).illustrations) != null && F.projects.length ? (o(), H(L, {
          key: 0,
          data: e(n).illustrations
        }, null, 8, ["data"])) : u("", !0), e(n).gallery || (N = e(n).mapCountries) != null && N.length ? (o(), l("div", De, [t("div", Pe, [d(q, {
          data: e(n).gallery
        }, null, 8, ["data"]), d(g, {
          data: e(n).mapCountries
        }, null, 8, ["data"])])])) : u("", !0), t("div", je, [e(n).gallery || (C = e(n).mapCountries) != null && C.length ? (o(), l("div", Be, [(o(!0), l(I, null, P(e(i), (D, et) => (o(), H(f, K({
          key: et
        }, {
          ref_for: !0
        }, D), null, 16))), 128))])) : u("", !0), d($, {
          data: e(n).partners
        }, null, 8, ["data"])]), d(M, {
          data: e(n).history
        }, null, 8, ["data"])])) : u("", !0)
      }
    }
  });
const es = B(Ee, [
  ["__scopeId", "data-v-3107d38f"]
]);
export {
  es as
  default
};