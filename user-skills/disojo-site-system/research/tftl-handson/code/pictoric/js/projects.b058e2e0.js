/* https://pictoric.com.ua/_nuxt/projects.b058e2e0.js */
import {
  d as R,
  u as z,
  o as Y,
  b as f,
  c as h,
  g as _,
  F as D,
  h as V,
  i as $,
  z as oe,
  A as Z,
  t as L,
  n as T,
  J as se,
  q as ae,
  j as n,
  k as B,
  v as x,
  G,
  V as re,
  _ as q,
  w as K,
  a as ne,
  E as ce,
  s as le,
  r as I,
  f as W,
  B as M,
  X as ie,
  m as ee,
  H as ue,
  O as _e,
  P as de,
  al as pe,
  a6 as fe,
  y as F,
  Q as me,
  I as X,
  M as ge
} from "./entry.6cb2d70d.js";
import {
  u as ve
} from "./useResize.e6421d34.js";
import {
  _ as ye
} from "./Caret.8726756f.js";
import {
  _ as he
} from "./Card.9c884948.js";
import {
  _ as Pe
} from "./index.a90ee2f6.js";
import {
  u as ke
} from "./useDefaultAnim.bde1a832.js";
import {
  u as be
} from "./index.7717ae4c.js";
import "./Labels.9876e5d7.js";
import "./Play.26f66faf.js";
import "./Circular.662c8455.js";
import "./SansSerif.76e1e15a.js";
const Ce = {
    key: 0,
    class: "hero"
  },
  xe = {
    class: "hero-description t2-xb anim-text"
  },
  je = R({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(v) {
      function g() {
        const c = document.querySelectorAll(".projects-wrapper .circle");
        c && c.forEach(d => {
          x.fromTo(d, {
            scale: .7
          }, {
            scale: 1,
            duration: 2.5,
            ease: "elastic.out(1, 0.3)"
          })
        })
      }
      const {
        isMobile: y
      } = z();
      let a;
      const i = G({
        first: 0,
        second: 0
      });

      function s() {
        var j;
        (j = a == null ? void 0 : a.kill) == null || j.call(a);
        const c = document.querySelector(".projects-wrapper"),
          d = c == null ? void 0 : c.querySelector(`${y.value?".circles.mob":".circles.desk"}`),
          p = d == null ? void 0 : d.querySelectorAll(".circle");
        if (!d || !(p != null && p.length)) return;
        const r = x.timeline({
          paused: !0
        });
        p.forEach((b, u) => {
          const l = y.value ? 3 : 1,
            C = -1 * (Math.random() * (100 / l) + 50 / l);
          r.to(b, {
            y: C
          }, 0), u === 0 && r.to(i, {
            first: C
          }, 0), (u === 4 || y.value && u === 2) && r.to(i, {
            second: C
          }, 0)
        }), a = re.create({
          trigger: d,
          start: 0,
          end: "bottom top",
          scrub: !0,
          animation: r
        })
      }
      return ve(s), Y(() => {
        g(), s()
      }), (c, d) => v.data ? (f(), h("section", Ce, [_("div", {
        class: "title-wrapper",
        style: ae(`--first-mask-offset: ${n(i).first}; --second-mask-offset: ${n(i).second};`)
      }, [(f(), h(D, null, V(2, p => $(se(p === 1 ? "h1" : "div"), {
        key: p,
        class: T(["hero-title h1_2 anim-title", {
          inset: p === 1
        }])
      }, {
        default: oe(() => [Z(L(v.data.title), 1)]),
        _: 1
      }, 8, ["class"])), 64))], 4), _("p", xe, L(v.data.description), 1)])) : B("", !0)
    }
  });
const we = q(je, [
  ["__scopeId", "data-v-4995da3f"]
]);
const $e = {},
  Se = {
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Te(v, g) {
  return f(), h("svg", Se, [...g[0] || (g[0] = [_("g", {
    id: "Frame 35"
  }, [_("path", {
    id: "Ellipse 49",
    d: "M10.8332 6.5C10.8332 7.68096 10.3618 8.75036 9.59516 9.53267C8.80781 10.3362 7.71256 10.8333 6.49989 10.8333C4.10666 10.8333 2.16656 8.89323 2.16656 6.5C2.16656 4.10676 4.10666 2.16666 6.49989 2.16666C8.89313 2.16666 10.8332 4.10676 10.8332 6.5Z",
    stroke: "#411F15",
    "stroke-width": "1.44444"
  }), _("path", {
    id: "Vector 40",
    d: "M10.1113 10.1111L11.5558 11.5556",
    stroke: "#411F15",
    "stroke-width": "1.44444",
    "stroke-linecap": "round"
  })], -1)])])
}
const Ie = q($e, [
    ["render", Te],
    ["__scopeId", "data-v-9e4cf009"]
  ]),
  qe = {
    class: "filter-wrapper inset"
  },
  Ae = {
    class: "filters-list"
  },
  Ee = ["onClick"],
  Me = {
    class: "filter-buttons"
  },
  De = {
    class: "button-icon"
  },
  Ve = {
    class: "filter-search"
  },
  Re = ["value"],
  Fe = R({
    __name: "Filter",
    props: {
      filters: {},
      modelValue: {},
      activeCategory: {}
    },
    emits: ["setActiveCategory", "update:modelValue", "scrollToTop"],
    setup(v, {
      emit: g
    }) {
      const y = v,
        a = g,
        {
          isDesktop: i
        } = z(),
        s = le(),
        c = I(!1),
        d = I(!1);

      function p(u) {
        i.value || (d.value = u, u && (c.value = !1, a("scrollToTop")))
      }

      function r(u) {
        let l = u;
        if (y.activeCategory === l) {
          if (i.value) return;
          l = "all"
        }
        a("scrollToTop"), c.value = !1, a("setActiveCategory", l)
      }

      function j(u) {
        const l = u.target;
        a("scrollToTop"), a("update:modelValue", l.value)
      }

      function b(u) {
        const l = u.target;
        !s.value || l === s.value || s.value.contains(l) || (c.value = !1)
      }
      return K(c, u => u ? document.addEventListener("click", b) : document.removeEventListener("click", b)), ne(() => document.removeEventListener("click", b)), (u, l) => {
        const C = ye,
          A = Ie;
        return f(), h("section", qe, [_("div", {
          class: T(["filter", {
            focus: n(d)
          }]),
          onClick: l[3] || (l[3] = ce(P => p(!1), ["self"]))
        }, [_("div", {
          ref_key: "filterRef",
          ref: s,
          class: T(["filter-inner", {
            active: n(c)
          }])
        }, [_("ul", Ae, [(f(!0), h(D, null, V(v.filters, (P, e) => (f(), h("li", {
          key: e,
          class: T(["filters-list__item", {
            active: v.activeCategory === P
          }])
        }, [_("button", {
          type: "button",
          class: "filters-list__button t2-xb",
          onClick: t => r(P)
        }, L(P), 9, Ee)], 2))), 128))]), _("div", Me, [_("button", {
          class: "filter-button t2-xb",
          type: "button",
          onClick: l[0] || (l[0] = P => c.value = !n(c))
        }, [Z(L(v.activeCategory) + " ", 1), _("span", De, [$(C, {
          class: "inner-svg",
          direction: n(c) ? "bottom" : "top"
        }, null, 8, ["direction"])])]), _("label", Ve, [_("input", {
          class: "search-input t2-xb",
          type: "text",
          placeholder: "Search",
          value: v.modelValue,
          onFocusin: l[1] || (l[1] = P => p(!0)),
          onInput: j
        }, null, 40, Re), _("button", {
          class: "search-btn",
          type: "button",
          onClick: l[2] || (l[2] = P => p(!1))
        }, [$(A, {
          class: "search-icon"
        })])])])], 2)], 2)])
      }
    }
  });
const Be = q(Fe, [
    ["__scopeId", "data-v-544be8c4"]
  ]),
  Le = R({
    __name: "Grid",
    props: {
      params: {},
      projects: {}
    },
    setup(v, {
      expose: g
    }) {
      const y = v,
        a = I(),
        i = M(() => {
          var e;
          return (e = a.value) == null ? void 0 : e.firstChild
        }),
        s = G({
          query: "",
          category: "all",
          currentPage: 1,
          postsPerPage: 7
        }),
        c = M(() => (s.category === "all" ? y.projects : y.projects.filter(({
          category: e
        }) => e === s.category)).filter(({
          title: e
        }) => e.toLowerCase().includes(s.query.toLowerCase()))),
        d = M(() => {
          const e = [],
            t = [3, 2, 2];
          let o = [],
            m = new Set,
            k = 0;
          const S = [];
          for (const w of c.value) {
            if (m.has(w.category)) {
              S.push(w);
              continue
            }
            o.length >= t[k % t.length] && (e.push(o), o = [], m = new Set, k++), o.push(w), m.add(w.category)
          }
          for (o.length > 0 && e.push(o); S.length > 0;) {
            const w = t[k % t.length];
            e.push(S.splice(0, w)), k++
          }
          return e.flat()
        }),
        p = M(() => d.value.slice(0, s.postsPerPage * s.currentPage));
      g({
        filteredProjects: c
      });
      let r;

      function j(e) {
        if (!a.value || !i.value) return;
        r && clearTimeout(r);
        const t = !(e.currentPage !== s.currentPage && e.category === s.category && e.query === s.query);
        x.set(a.value, {
          height: i.value.clientHeight
        }), t && x.to(a.value, {
          autoAlpha: 0,
          duration: .6,
          ease: "default-ease"
        }), r = setTimeout(async () => {
          Object.assign(s, e), await ie(), x.to(a.value, {
            autoAlpha: 1,
            height: i.value.clientHeight,
            duration: .6,
            ease: "default-ease"
          }), b(t)
        }, t ? 600 : 0)
      }
      K(() => y.params, j, {
        deep: !0
      });

      function b(e = !1) {
        const t = document.getElementById("projects-wrapper"),
          o = t == null ? void 0 : t.querySelectorAll(".projects-list__item");
        if (!(o != null && o.length)) return;
        const m = [...o].slice((s.currentPage - 1) * s.postsPerPage);
        x.from(m, {
          y: 150,
          stagger: .05,
          duration: 1,
          clearProps: "all",
          ease: "default-ease"
        }), setTimeout(() => {
          !s.query && s.category === "all" && !l.value ? P(m) : A(m)
        }, 500)
      }
      const u = W("lenis"),
        {
          isMobile: l
        } = z();
      let C = [];

      function A(e) {
        C.forEach(t => {
          var o;
          return (o = t == null ? void 0 : t.kill) == null ? void 0 : o.call(t)
        }), C = [], e.forEach(t => {
          const o = t.querySelector(".card");
          o && x.set(o, {
            clearProps: "all"
          })
        })
      }

      function P(e) {
        var o;
        const t = (((o = e[0].querySelector(".card")) == null ? void 0 : o.getBoundingClientRect().top) || 0) - u.value.scroll;
        e.forEach(m => {
          const k = m.querySelector(".card");
          if (k && !k.classList.contains("art")) {
            const S = x.to(k, {
              scrollTrigger: {
                trigger: a.value,
                start: `top ${t-150}px`,
                end: "bottom top",
                scrub: !0
              },
              y: "random(-50, -200)",
              ease: "none"
            });
            C.push(S)
          }
        })
      }
      return Y(b), (e, t) => {
        const o = he;
        return f(), h("section", {
          id: "projects-wrapper",
          ref_key: "wrapperRef",
          ref: a,
          class: "projects"
        }, [_("ul", {
          class: T(["projects-list grid-container", n(s).category])
        }, [(f(!0), h(D, null, V(n(p), (m, k) => (f(), h("li", {
          key: k,
          class: T(["projects-list__item", m == null ? void 0 : m.category])
        }, [$(o, {
          data: m
        }, null, 8, ["data"])], 2))), 128))], 2)], 512)
      }
    }
  });
const He = q(Le, [
    ["__scopeId", "data-v-372900ea"]
  ]),
  ze = {
    class: "pagination"
  },
  Ge = R({
    __name: "Pagination",
    emits: ["loadMore"],
    setup(v, {
      emit: g
    }) {
      const y = g,
        {
          t: a
        } = ee();
      return (i, s) => {
        const c = ue;
        return f(), h("section", ze, [_("button", {
          type: "button",
          class: "pagination-button",
          onClick: s[0] || (s[0] = d => y("loadMore"))
        }, [$(c, {
          text: n(a)("buttons.loadMore")
        }, null, 8, ["text"])])])
      }
    }
  });
const Ne = q(Ge, [
    ["__scopeId", "data-v-6fc4c5b4"]
  ]),
  Oe = {
    key: 0,
    class: "projects"
  },
  Ue = {
    class: "projects-wrapper"
  },
  Je = {
    class: "circles desk"
  },
  Qe = {
    class: "circles mob"
  },
  Xe = R({
    __name: "projects",
    async setup(v) {
      let g, y;
      ke();
      const {
        locale: a
      } = ee(), {
        data: i
      } = ([g, y] = _e(async () => me("projects-page", async () => {
        const [e, t] = await Promise.all([$fetch("/api/projects", {
          method: "get",
          query: {
            locale: a.value
          }
        }), $fetch("/api/collections/projects", {
          method: "get",
          query: {
            locale: a.value,
            cardData: !0
          }
        })]);
        return {
          pageData: e,
          projects: t
        }
      })), g = await g, y(), g);
      if (!i.value) throw de({
        statusCode: 404,
        statusMessage: "Error fetching main page data",
        fatal: !0
      });
      be(i.value.pageData.meta);
      const s = W("commonData"),
        c = I(pe()),
        d = I(),
        p = I(""),
        r = G({
          query: "",
          category: "all",
          currentPage: 1,
          postsPerPage: 7
        }),
        j = ["all", ...s.value.categories];
      let b;
      const u = M(() => {
        var t;
        if (!((t = i.value) != null && t.projects)) return [];
        const e = new Set(i.value.projects.flatMap(o => o.articlePodcastIds || []));
        return i.value.projects.filter(o => o.category !== "podcasts" ? !0 : !o.podcastId || !e.has(o.podcastId))
      });

      function l(e) {
        clearTimeout(b), b = setTimeout(() => {
          r.query = e, r.currentPage = 1, P()
        }, 200)
      }

      function C(e) {
        switch (r.category = e, r.currentPage = 1, e) {
          case "art":
            r.postsPerPage = 9;
            break;
          case "all":
            r.postsPerPage = 7;
            break;
          case "podcasts":
            r.postsPerPage = 10;
            break;
          case "articles":
          case "video":
            r.postsPerPage = 12;
            break
        }
      }

      function A() {
        r.currentPage += 1
      }

      function P() {
        window.scrollY >= window.innerHeight / 2 && x.to(window, {
          scrollTo: window.innerHeight / 4,
          duration: .6,
          ease: "default-ease"
        })
      }
      return (e, t) => {
        var N, O, U, J, Q;
        const o = ge,
          m = we,
          k = Be,
          S = He,
          w = Ne,
          te = Pe;
        return (N = n(i)) != null && N.pageData ? (f(), h("main", Oe, [_("div", Ue, [_("div", Je, [(f(!0), h(D, null, V(n(c).desk, (E, H) => (f(), F(o, X({
          key: H
        }, {
          ref_for: !0
        }, E), null, 16))), 128))]), _("div", Qe, [(f(!0), h(D, null, V(n(c).mob, (E, H) => (f(), F(o, X({
          key: H
        }, {
          ref_for: !0
        }, E), null, 16))), 128))]), $(m, {
          data: n(i).pageData.hero
        }, null, 8, ["data"]), $(k, {
          modelValue: n(p),
          "onUpdate:modelValue": [t[0] || (t[0] = E => fe(p) ? p.value = E : null), l],
          filters: j,
          "active-category": n(r).category,
          onSetActiveCategory: C,
          onScrollToTop: P
        }, null, 8, ["modelValue", "active-category"]), n(u) ? (f(), F(S, {
          key: 0,
          ref_key: "gridRef",
          ref: d,
          projects: n(u),
          params: n(r)
        }, null, 8, ["projects", "params"])) : B("", !0)]), n(d) && (((U = (O = n(d)) == null ? void 0 : O.filteredProjects) == null ? void 0 : U.length) || 0) > n(r).postsPerPage && (((Q = (J = n(d)) == null ? void 0 : J.filteredProjects) == null ? void 0 : Q.length) || 0) > n(r).postsPerPage * n(r).currentPage ? (f(), F(w, {
          key: 0,
          onLoadMore: A
        })) : B("", !0), $(te, {
          bg: n(i).pageData.footerImg
        }, null, 8, ["bg"])])) : B("", !0)
      }
    }
  });
const ct = q(Xe, [
  ["__scopeId", "data-v-c4ae549e"]
]);
export {
  ct as
  default
};