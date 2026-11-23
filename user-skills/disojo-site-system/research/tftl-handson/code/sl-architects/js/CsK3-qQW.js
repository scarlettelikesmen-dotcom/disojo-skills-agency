/* https://ab-sl.ru/_nuxt/CsK3-qQW.js */
import {
  _ as z
} from "./DvGqYPiL.js";
import {
  d as A,
  u as k,
  c as i,
  a as p,
  t as C,
  m as P,
  F as I,
  r as F,
  e as o,
  b as w,
  o as n,
  n as B,
  s as x,
  _ as b,
  J as N,
  G as D,
  f as L,
  q as G,
  g as V,
  h as q,
  w as M,
  l as J,
  z as O,
  A as R,
  i as U
} from "./DROVP5M4.js";
import {
  _ as W
} from "./Cj45ZiUy.js";
import {
  _ as H,
  a as K
} from "./v0Ybna-L.js";
import {
  u as Q,
  s as X
} from "./DFRH1ql4.js";
import {
  a as Y
} from "./CEJKH9bI.js";
import "./BepOh2iV.js";
import "./DXpihNzX.js";
const Z = {
    class: "relative z-1 filters"
  },
  tt = {
    class: "inner container"
  },
  et = {
    key: 0,
    class: "l1 title"
  },
  ot = {
    class: "filters-wrapper"
  },
  st = ["onClick"],
  at = {
    key: 0,
    class: "l1 description"
  },
  nt = {
    class: "location-filter"
  },
  ct = {
    class: "p1 location-filter-title"
  },
  rt = {
    name: "ProjectsFilters"
  },
  it = A({
    ...rt,
    props: {
      data: {},
      filters: {},
      projects: {},
      categories: {}
    },
    emits: ["changeFilters"],
    setup(l, {
      emit: c
    }) {
      const _ = l,
        j = k().$i18n.t,
        v = c,
        d = x(() => {
          const s = _.projects.filter(g => g.category.id === _.filters.activeCategoryId).map(g => g.location);
          return s.unshift(j("anywhere")), [...new Set(s)]
        });

      function h(u) {
        v("changeFilters", u)
      }

      function e(u) {
        h({
          location: d.value[u]
        })
      }
      return (u, s) => {
        const g = z;
        return n(), i("section", Z, [s[0] || (s[0] = p("div", {
          class: "col-18 header-gap"
        }, null, -1)), p("div", tt, [l.data ? (n(), i("p", et, C(l.data.title), 1)) : P("", !0), p("div", ot, [p("ul", null, [(n(!0), i(I, null, F(l.categories, a => (n(), i("li", {
          key: a?.id,
          class: "filter-list__item"
        }, [p("button", {
          class: B(["h1 filter-button", {
            active: l.filters.activeCategoryId === a.id
          }]),
          onClick: f => h({
            category: a.id
          })
        }, C(a.title), 11, st)]))), 128))]), l.data ? (n(), i("p", at, C(l.data.description), 1)) : P("", !0)]), p("div", nt, [p("p", ct, C(o(j)("location")), 1), w(g, {
          class: "location-filter-value",
          options: o(d),
          "active-option": l.filters.activeLocation,
          onOptionChange: e
        }, null, 8, ["options", "active-option"])])])])
      }
    }
  }),
  lt = b(it, [
    ["__scopeId", "data-v-7f279c2a"]
  ]),
  ut = {
    class: "projects container"
  },
  pt = {
    class: "scroll-top-icon"
  },
  _t = {
    name: "ProjectsGrid"
  },
  dt = A({
    ..._t,
    props: {
      projects: {},
      filters: {}
    },
    setup(l) {
      const c = l,
        {
          $gsap: _
        } = k(),
        j = k().$i18n.t,
        v = L(),
        d = L(),
        h = L(),
        e = N({
          activeCategoryId: c.filters.activeCategoryId,
          activeLocation: c.filters.activeLocation
        }),
        u = x(() => {
          if (!c.projects) return;
          let t = [...c.projects];
          return t = t.filter(r => r.category.id === e.activeCategoryId), e.activeLocation !== j("anywhere") && (t = t.filter(r => r.location === e.activeLocation)), t
        }),
        s = x(() => {
          let t = [
            [],
            [],
            []
          ];
          return u.value && u.value.forEach((r, m) => {
            m % 3 === 0 ? t[0].push(r) : (m - 1) % 3 === 0 ? t[1].push(r) : t[2].push(r)
          }), t
        });
      async function g(t) {
        if (!v.value) return;
        await _.to(v.value, {
          opacity: 0,
          duration: .8,
          ease: "custom"
        }), e.activeCategoryId = t.activeCategoryId, e.activeLocation = t.activeLocation, await G();
        const m = Array.from(v.value.querySelectorAll("img")).map(y => y.complete ? Promise.resolve() : new Promise($ => {
          y.onload = y.onerror = $
        }));
        await Promise.all(m), await _.to(v.value, {
          opacity: 1,
          duration: .8,
          ease: "custom"
        })
      }

      function a() {
        _.to(window, {
          scrollTo: 0,
          duration: 1,
          ease: "none"
        })
      }

      function f() {
        !d.value || !h.value || _.to(h.value, {
          scrollTrigger: {
            trigger: d.value,
            start: "top top",
            toggleActions: "play none none reverse"
          },
          opacity: 1,
          yPercent: -100,
          duration: .4,
          ease: "custom"
        })
      }
      return D(() => c.filters, t => {
        g(t)
      }, {
        deep: !0
      }), Q(() => {
        f()
      }), (t, r) => {
        const m = W,
          y = H;
        return n(), i("section", {
          ref_key: "section",
          ref: d
        }, [p("div", ut, [p("div", {
          ref_key: "gridEl",
          ref: v,
          class: "z-1 col-18 grid"
        }, [(n(!0), i(I, null, F(o(s), ($, T) => (n(), i("div", {
          key: T,
          class: "row"
        }, [(n(!0), i(I, null, F($, (E, S) => (n(), i("div", {
          key: S,
          class: "project-item"
        }, [w(m, {
          project: E,
          "no-lazy-load": "",
          "default-visible": ""
        }, null, 8, ["project"])]))), 128))]))), 128))], 512)]), p("button", {
          ref_key: "scrollTopEl",
          ref: h,
          class: "scroll-top",
          onClick: a
        }, [p("span", pt, [w(y)])], 512)], 512)
      }
    }
  }),
  ft = b(dt, [
    ["__scopeId", "data-v-ebc3b54d"]
  ]),
  mt = {
    key: 0,
    class: "page projects-page"
  },
  vt = {
    name: "ProjectsPage"
  },
  xt = A({
    ...vt,
    async setup(l) {
      let c, _;
      const {
        $ScrollTrigger: j
      } = k(), {
        locale: {
          value: v
        },
        t: d
      } = V(), h = q(), {
        data: e
      } = ([c, _] = M(() => U("all-project", () => $fetch("/api/pages/pageProjects", {
        method: "post",
        body: {
          locale: v
        }
      }))), c = await c, _(), c), u = x(() => {
        const a = e.value?.projects?.map(t => t.category);
        if (!a) return [];
        const f = [];
        return a.forEach(t => {
          f.find(m => m.id === t.id) || f.push(t)
        }), f
      }), s = J("projectsFilters", () => ({
        activeCategoryId: u.value[0]?.id ?? -1,
        activeLocation: d("anywhere")
      }));
      X(e.value?.meta);

      function g({
        category: a,
        location: f
      }) {
        a && (s.value.activeCategoryId = a, s.value.activeLocation = d("anywhere")), f && (s.value.activeLocation = f)
      }
      return O(() => j.killAll()), (a, f) => {
        const t = lt,
          r = ft,
          m = K,
          y = Y;
        return n(), i("div", null, [o(e) ? (n(), i("main", mt, [o(e).projects && o(e).filters ? (n(), R(t, {
          key: 0,
          data: o(e).filters,
          categories: o(u),
          filters: o(s),
          projects: o(e).projects,
          onChangeFilters: g
        }, null, 8, ["data", "categories", "filters", "projects"])) : P("", !0), w(r, {
          filters: o(s),
          projects: o(e).projects
        }, null, 8, ["filters", "projects"]), w(m, {
          data: o(e).worldwide
        }, null, 8, ["data"])])) : P("", !0), w(y, {
          "link-text": o(d)("read_about_us"),
          link: o(h)("/about")
        }, null, 8, ["link-text", "link"])])
      }
    }
  });
export {
  xt as
  default
};