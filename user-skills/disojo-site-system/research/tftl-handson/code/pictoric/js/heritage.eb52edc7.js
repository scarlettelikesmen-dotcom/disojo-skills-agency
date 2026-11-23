/* https://pictoric.com.ua/_nuxt/heritage.eb52edc7.js */
import {
  d as L,
  m as O,
  o as q,
  b as r,
  c as m,
  g as e,
  F as b,
  h as j,
  t as P,
  i as d,
  n as E,
  j as o,
  k as H,
  v as F,
  l as R,
  ae as U,
  _ as S,
  Y as Q,
  r as w,
  a as Y,
  y as M,
  B as N,
  af as W,
  f as Z,
  x as G,
  u as J,
  A as K,
  Z as X,
  $ as ee,
  z as V,
  N as te,
  C as oe,
  O as se,
  P as ne,
  Q as ae
} from "./entry.6cb2d70d.js";
import {
  _ as ce
} from "./About.ae94038d.js";
import {
  _ as le
} from "./TwistedAnimated.8e22b526.js";
import {
  _ as re
} from "./Caret.8726756f.js";
import {
  _ as ie
} from "./Close.de99442d.js";
import {
  _ as _e
} from "./Labels.9876e5d7.js";
import {
  _ as ue
} from "./index.a90ee2f6.js";
import {
  u as de
} from "./index.7717ae4c.js";
import {
  u as pe
} from "./useDefaultAnim.bde1a832.js";
import "./HanddrawnSvg.e4acccd9.js";
import "./Play.26f66faf.js";
import "./Circular.662c8455.js";
import "./SansSerif.76e1e15a.js";
const me = {
    key: 0,
    id: "heritage-page-hero",
    class: "hero"
  },
  ge = {
    class: "title-wrapper"
  },
  he = {
    class: "hero-title h1 anim-title"
  },
  ve = {
    class: "description-wrapper"
  },
  fe = {
    class: "hero-icon"
  },
  xe = ["innerHTML"],
  ye = {
    class: "hero-image"
  },
  $e = {
    class: "hero-content"
  },
  Ce = ["innerHTML"],
  be = {
    class: "hero-circle"
  },
  je = {
    class: "circle-text inset"
  },
  ke = L({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(i) {
      const {
        t: g
      } = O();

      function u() {
        F.to(".hero .hero-circle", {
          rotation: 40,
          scrollTrigger: {
            trigger: ".hero .hero-circle",
            start: "top+=70% bottom",
            end: "bottom top",
            scrub: !0
          }
        })
      }

      function v() {
        const n = F.timeline({
          defaults: {
            scrollTrigger: {
              trigger: "#heritage-page-hero .hero-image",
              start: "top bottom",
              end: "bottom top",
              scrub: .9
            }
          }
        });
        n.fromTo("#heritage-page-hero .layer-1", {
          yPercent: 40
        }, {
          yPercent: 0,
          ease: "none"
        }), n.fromTo("#heritage-page-hero .layer-2", {
          yPercent: 20
        }, {
          yPercent: 0,
          ease: "none"
        }, "<"), n.fromTo("#heritage-page-hero .layer-4", {
          yPercent: 0
        }, {
          yPercent: 20,
          ease: "none"
        }, "<"), n.fromTo("#heritage-page-hero .layer-5", {
          yPercent: 0
        }, {
          yPercent: 40,
          ease: "none"
        }, "<")
      }
      return q(() => {
        u(), v()
      }), (n, c) => {
        const s = R,
          a = U;
        return i.data ? (r(), m("section", me, [e("div", ge, [e("h1", he, [(r(!0), m(b, null, j(i.data.title.split(" "), (h, x) => (r(), m("span", {
          key: x
        }, P(h), 1))), 128))]), e("div", ve, [e("span", fe, [d(s, {
          icon: "smile",
          animated: ""
        })]), e("div", {
          class: "h4 anim-title",
          innerHTML: i.data.descriptions[0]
        }, null, 8, xe)])]), e("div", ye, [(r(), m(b, null, j(5, h => e("div", {
          key: h,
          class: E(["layer", [`layer-${h}`]])
        }, null, 2)), 64))]), e("div", $e, [e("div", {
          class: "hero-text t1 anim-text",
          innerHTML: i.data.descriptions[1]
        }, null, 8, Ce), e("div", be, [d(s, {
          icon: "wink",
          class: "circle-icon"
        }), e("span", je, [d(a, {
          text: o(g)("heritage.circle"),
          radius: 90
        }, null, 8, ["text"])])])])])) : H("", !0)
      }
    }
  });
const Te = S(ke, [
    ["__scopeId", "data-v-30e9e688"]
  ]),
  Pe = {
    id: "filter-modal",
    class: "backdrop inset"
  },
  we = {
    class: "modal-content"
  },
  De = {
    class: "modal-title h4"
  },
  He = {
    class: "modal-categories"
  },
  Me = {
    class: "modal-tags"
  },
  Le = L({
    __name: "HeritageFilter",
    props: {
      projects: {},
      categories: {},
      selectedCategories: {},
      tags: {},
      selectedTags: {}
    },
    emits: ["close", "update"],
    setup(i, {
      emit: g
    }) {
      const u = i,
        v = g,
        {
          lockScroll: n
        } = Q();
      let c;
      const s = w([...u.selectedCategories]),
        a = w([...u.selectedTags]),
        h = N(() => u.projects.length ? !s.value.length && !a.value.length ? u.projects.length : u.projects.filter(t => {
          const _ = !s.value.length || s.value.includes(t.category),
            y = !a.value.length || a.value.some($ => {
              var p;
              return (p = t.tags) == null ? void 0 : p.includes($)
            });
          return _ && y
        }).length : 0);

      function x(t) {
        const _ = s.value.indexOf(t);
        _ !== -1 ? s.value.splice(_, 1) : s.value.push(t)
      }

      function k(t) {
        const _ = a.value.indexOf(t);
        _ !== -1 ? a.value.splice(_, 1) : a.value.push(t)
      }

      function C() {
        v("update", s.value, a.value), l()
      }

      function D() {
        s.value = [], a.value = []
      }

      function I() {
        n(!0), c = F.timeline().fromTo("#filter-modal", {
          y: "-100vh"
        }, {
          y: 0,
          duration: .6,
          ease: "default-ease"
        }, "<")
      }
      async function l() {
        await c.reverse(), v("close")
      }
      return q(() => {
        I()
      }), Y(() => {
        n(!1)
      }), (t, _) => {
        const y = ie,
          $ = W;
        return r(), m("div", Pe, [e("button", {
          class: "hide-button",
          onClick: l
        }, [d(y)]), e("div", we, [e("h2", De, P(o(h)) + " projects", 1), e("div", He, [(r(!0), m(b, null, j(i.categories, (p, T) => (r(), M($, {
          key: T,
          text: p,
          active: o(s).includes(p),
          onClick: A => x(p)
        }, null, 8, ["text", "active", "onClick"]))), 128))]), e("div", Me, [(r(!0), m(b, null, j(i.tags, (p, T) => (r(), M($, {
          key: T,
          text: p.title,
          active: o(a).includes(p.title),
          onClick: A => k(p.title)
        }, null, 8, ["text", "active", "onClick"]))), 128))]), e("div", {
          class: "modal-buttons"
        }, [e("button", {
          class: "modal-button t2-xb",
          type: "button",
          onClick: C
        }, " Accept "), e("button", {
          class: "modal-button t2-xb",
          type: "button",
          onClick: D
        }, " Clear ")])])])
      }
    }
  });
const Se = S(Le, [
    ["__scopeId", "data-v-4182599a"]
  ]),
  Ie = {
    key: 0,
    class: "projects"
  },
  Ae = {
    class: "arrow-icon"
  },
  Be = ["innerHTML"],
  Fe = {
    class: "projects-header"
  },
  Ne = {
    class: "projects-categories"
  },
  Ve = {
    class: "filter-header"
  },
  Oe = {
    class: "projects-count t2-xb"
  },
  qe = {
    class: "projects-items grid-container"
  },
  Ee = {
    class: "project-thumb"
  },
  We = ["src"],
  ze = {
    class: "project-description t2-xb"
  },
  Re = L({
    __name: "Projects",
    props: {
      data: {},
      projects: {},
      tags: {}
    },
    setup(i) {
      const g = i,
        u = Z("commonData"),
        v = G(),
        {
          isMobile: n
        } = J(),
        c = w([]),
        s = w([]),
        a = w(!1),
        h = N(() => !c.value.length && !s.value.length ? g.projects : g.projects.filter(l => {
          const t = !c.value.length || c.value.includes(l.category),
            _ = !s.value.length || s.value.some(y => {
              var $;
              return ($ = l.tags) == null ? void 0 : $.includes(y)
            });
          return t && _
        })),
        x = N(() => c.value.length + s.value.length);

      function k(l) {
        const t = c.value.indexOf(l);
        t !== -1 ? c.value.splice(t, 1) : c.value.push(l)
      }

      function C(l, t) {
        c.value = l, s.value = t
      }

      function D(l) {
        a.value = l
      }

      function I(l) {
        const t = [{
          text: l.category,
          isType: !0
        }];
        if (l.tags) {
          const _ = l.tags.map(y => ({
            text: y
          }));
          t.push(..._)
        }
        return t
      }
      return (l, t) => {
        const _ = le,
          y = W,
          $ = re,
          p = Se,
          T = te,
          A = _e,
          z = oe;
        return i.data ? (r(), m("section", Ie, [e("div", Ae, [d(_, {
          class: "inner-svg"
        })]), e("h2", {
          class: "hero-title h1_2 anim-title",
          innerHTML: i.data.title
        }, null, 8, Be), e("header", Fe, [e("div", Ne, [(r(!0), m(b, null, j(o(u).categories, (f, B) => (r(), M(y, {
          key: B,
          text: f,
          active: o(c).includes(f),
          onClick: Ze => k(f)
        }, null, 8, ["text", "active", "onClick"]))), 128))]), e("div", {
          class: E(["projects-filter t2-xb", {
            selected: o(x) > 0
          }]),
          onClick: t[0] || (t[0] = f => D(!0))
        }, [e("div", Ve, [e("h3", null, [t[2] || (t[2] = K(" Filter ", -1)), X(e("span", null, "(" + P(o(x)) + " options)", 513), [
          [ee, o(x) > 0]
        ])]), d($, {
          class: "filter-icon"
        })])], 2), e("h2", Oe, P(o(h).length) + " projects ", 1)]), d(T, null, {
          default: V(() => [o(n) && o(a) ? (r(), M(p, {
            key: 0,
            projects: i.projects,
            categories: o(u).categories,
            "selected-categories": o(c),
            tags: i.tags.tags,
            "selected-tags": o(s),
            onUpdate: C,
            onClose: t[1] || (t[1] = f => D(!1))
          }, null, 8, ["projects", "categories", "selected-categories", "tags", "selected-tags"])) : H("", !0)]),
          _: 1
        }), e("div", qe, [(r(!0), m(b, null, j(o(h), (f, B) => (r(), m("div", {
          key: B,
          class: "project"
        }, [d(z, {
          to: o(v)(f.slug)
        }, {
          default: V(() => [e("div", Ee, [e("img", {
            class: "project-image",
            src: f.image.original,
            alt: "image"
          }, null, 8, We), d(A, {
            labels: I(f),
            class: "project-labels"
          }, null, 8, ["labels"])]), e("p", ze, P(f.text), 1)]),
          _: 2
        }, 1032, ["to"])]))), 128))])])) : H("", !0)
      }
    }
  });
const Ue = S(Re, [
    ["__scopeId", "data-v-149a429a"]
  ]),
  Qe = {
    key: 0,
    class: "heritage"
  },
  Ye = L({
    __name: "heritage",
    async setup(i) {
      let g, u;
      const {
        value: v
      } = O().locale, {
        data: n
      } = ([g, u] = se(async () => ae("heritage", async () => {
        const [c, s, a] = await Promise.all([$fetch("/api/heritage", {
          method: "get",
          query: {
            locale: v
          }
        }), $fetch("/api/collections/projects", {
          method: "get",
          query: {
            locale: v,
            cardData: !0,
            heritage: !0
          }
        }), $fetch("/api/collections/tags", {
          method: "get",
          query: {
            locale: v
          }
        })]);
        return {
          pageData: c,
          projects: s,
          tags: a
        }
      })), g = await g, u(), g);
      if (!n.value) throw ne({
        statusCode: 404,
        statusMessage: "Error fetching heritage page data",
        fatal: !0
      });
      return de(n.value.pageData.meta), pe(), (c, s) => {
        var C;
        const a = Te,
          h = ce,
          x = Ue,
          k = ue;
        return (C = o(n)) != null && C.pageData ? (r(), m("main", Qe, [d(a, {
          data: o(n).pageData.hero
        }, null, 8, ["data"]), d(h, {
          data: o(n).pageData.about
        }, null, 8, ["data"]), d(x, {
          data: o(n).pageData.projects,
          projects: o(n).projects,
          tags: o(n).tags
        }, null, 8, ["data", "projects", "tags"]), d(k, {
          bg: o(n).pageData.footerImg
        }, null, 8, ["bg"])])) : H("", !0)
      }
    }
  });
const it = S(Ye, [
  ["__scopeId", "data-v-284c090c"]
]);
export {
  it as
  default
};