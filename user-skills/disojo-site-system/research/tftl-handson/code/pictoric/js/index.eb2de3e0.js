/* https://pictoric.com.ua/_nuxt/index.eb2de3e0.js */
import {
  _ as z
} from "./Select.148f86b8.js";
import {
  _ as U
} from "./Default.49af0b27.js";
import {
  _ as C,
  b as l,
  c as f,
  g as t,
  d as E,
  m as W,
  w as N,
  t as h,
  j as o,
  y as F,
  k as $,
  i as M,
  A as P,
  r as A,
  s as V,
  G as q,
  o as R,
  n as S,
  q as B,
  F as T,
  h as D,
  a as G,
  u as O,
  f as Y,
  B as X,
  X as Z,
  v as I
} from "./entry.6cb2d70d.js";
import {
  u as J
} from "./useResize.e6421d34.js";
const K = {},
  Q = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "12",
    viewBox: "0 0 13 12",
    fill: "none"
  };

function tt(s, _) {
  return l(), f("svg", Q, [..._[0] || (_[0] = [t("path", {
    d: "M10.5333 5.76667C10.5333 3.13411 8.39922 1 5.76667 1C3.13411 1 1 3.13411 1 5.76667C1 8.39922 3.13411 10.5333 5.76667 10.5333C7.04743 10.5333 8.21021 10.0282 9.06667 9.20631",
    stroke: "#411F15",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1), t("path", {
    d: "M13 5H8L10.5 9L13 5Z",
    fill: "#411F15"
  }, null, -1)])])
}
const et = C(K, [
    ["render", tt],
    ["__scopeId", "data-v-dc19fddf"]
  ]),
  ot = {
    class: "filter-wrapper"
  },
  st = {
    class: "button-icon"
  },
  nt = E({
    __name: "Filter",
    props: {
      filtersData: {}
    },
    emits: ["apply"],
    setup(s, {
      emit: _
    }) {
      const b = _,
        {
          t: d
        } = W(),
        i = A(!1),
        u = V();
      let r;
      N(i, m => {
        var a, k;
        m ? ((a = u.value) == null || a.classList.add("active"), r = setTimeout(() => {
          var g;
          (g = u.value) == null || g.classList.add("no-clip")
        }, 600)) : (clearTimeout(r), (k = u.value) == null || k.classList.remove("no-clip"), setTimeout(() => {
          var g;
          (g = u.value) == null || g.classList.remove("active")
        }, 0))
      });
      const n = q({
        project: "",
        country: "",
        year: ""
      });

      function y() {
        n.project = "", n.country = "", n.year = "", b("apply", n), i.value = !1
      }
      return (m, a) => {
        const k = z,
          g = U,
          L = et;
        return l(), f("div", {
          ref_key: "mapFilterEl",
          ref: u,
          class: "filter"
        }, [t("button", {
          type: "button",
          class: "filter-title t2-xb",
          onClick: a[0] || (a[0] = e => i.value = !o(i))
        }, h(o(d)("mapFilter.title")) + " " + h(o(i) ? "-" : "+"), 1), t("div", null, [s.filtersData.projects.length ? (l(), F(k, {
          key: 0,
          modelValue: o(n).project,
          "onUpdate:modelValue": a[1] || (a[1] = e => o(n).project = e),
          placeholder: o(d)("mapFilter.project"),
          options: s.filtersData.projects
        }, null, 8, ["modelValue", "placeholder", "options"])) : $("", !0), s.filtersData.countries.length ? (l(), F(k, {
          key: 1,
          modelValue: o(n).country,
          "onUpdate:modelValue": a[2] || (a[2] = e => o(n).country = e),
          placeholder: o(d)("mapFilter.country"),
          options: s.filtersData.countries
        }, null, 8, ["modelValue", "placeholder", "options"])) : $("", !0), s.filtersData.years.length ? (l(), F(k, {
          key: 2,
          modelValue: o(n).year,
          "onUpdate:modelValue": a[3] || (a[3] = e => o(n).year = e),
          placeholder: o(d)("mapFilter.year"),
          options: s.filtersData.years
        }, null, 8, ["modelValue", "placeholder", "options"])) : $("", !0)]), t("div", ot, [t("button", {
          type: "button",
          onClick: a[4] || (a[4] = () => {
            b("apply", o(n)), i.value = !1
          })
        }, [M(g, {
          text: o(d)("mapFilter.apply")
        }, null, 8, ["text"])]), t("button", {
          class: "filter-button t2-xb",
          type: "button",
          onClick: y
        }, [P(h(o(d)("mapFilter.reset")) + " ", 1), t("span", st, [M(L, {
          class: "inner-svg"
        })])])])], 512)
      }
    }
  });
const at = C(nt, [
    ["__scopeId", "data-v-a3310380"]
  ]),
  lt = {
    class: "accordion-title t1"
  },
  it = {
    class: "accordion-icon t1"
  },
  rt = {
    class: "accordion-body"
  },
  ct = {
    class: "project-photo"
  },
  dt = ["src", "alt"],
  ut = {
    class: "project-info"
  },
  pt = {
    class: "country-name t2-xb"
  },
  _t = {
    class: "project-footer"
  },
  mt = {
    class: "project-name t2-xb"
  },
  ft = {
    class: "project-date t2-xb"
  },
  vt = E({
    __name: "item",
    props: {
      country: {},
      titleAdd: {},
      borderTop: {
        type: Boolean
      },
      isActive: {
        type: Boolean
      }
    },
    emits: ["toggle"],
    setup(s, {
      emit: _
    }) {
      const b = _;
      J(u);
      const d = V(),
        i = A(0);

      function u() {
        d.value && (i.value = d.value.clientHeight)
      }
      return R(u), (r, n) => (l(), f("li", {
        class: S(["accordion-item", {
          "border-top": s.borderTop
        }])
      }, [t("div", {
        class: "accordion-header",
        onClick: n[0] || (n[0] = y => b("toggle"))
      }, [t("h4", lt, h(s.titleAdd + s.country.title), 1), t("span", it, h(s.isActive ? "-" : "+"), 1)]), t("div", rt, [t("div", {
        class: S(["content-wrapper", {
          active: s.isActive
        }]),
        style: B(`--content-height: ${o(i)}`)
      }, [t("div", {
        ref_key: "contentRef",
        ref: d,
        class: "accordion-content"
      }, [(l(!0), f(T, null, D(s.country.events, (y, m) => (l(), f("div", {
        key: m,
        class: "project"
      }, [t("div", ct, [t("img", {
        src: y.photo.small,
        alt: y.title
      }, null, 8, dt)]), t("div", ut, [t("p", pt, h(s.country.title), 1), t("div", _t, [t("p", mt, h(y.title), 1), t("p", ft, h(new Date(y.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })), 1)])])]))), 128))], 512)], 6)])], 2))
    }
  });
const yt = C(vt, [
    ["__scopeId", "data-v-204e9d62"]
  ]),
  ht = E({
    __name: "index",
    props: {
      data: {}
    },
    setup(s) {
      const _ = A(-1);

      function b(u) {
        _.value = _.value !== u ? u : -1
      }
      const d = V();

      function i(u) {
        const r = u.target;
        !d.value || r === d.value || d.value.contains(r) || (_.value = -1)
      }
      return R(() => document.addEventListener("click", i)), G(() => document.removeEventListener("click", i)), (u, r) => {
        const n = yt;
        return s.data ? (l(), f("ul", {
          key: 0,
          ref_key: "listRef",
          ref: d,
          class: "accordion"
        }, [(l(!0), f(T, null, D(s.data, (y, m) => (l(), F(n, {
          key: m,
          country: y,
          "title-add": m === 0 ? "Activists of " : "",
          "border-top": m === 0,
          "is-active": m === o(_),
          onToggle: a => b(m)
        }, null, 8, ["country", "title-add", "border-top", "is-active", "onToggle"]))), 128))], 512)) : $("", !0)
      }
    }
  }),
  gt = "" + globalThis.__publicAssetsURL("images/project/map/image.webp"),
  xt = {
    key: 0,
    class: "map"
  },
  bt = {
    class: "title-wrapper"
  },
  kt = ["innerHTML"],
  $t = ["innerHTML"],
  wt = {
    class: "map-thumb"
  },
  jt = {
    class: "event__thumb"
  },
  Ft = ["src"],
  At = {
    class: "event__content"
  },
  Lt = {
    class: "event__location t2-xb"
  },
  Tt = {
    class: "event__title t2-xb"
  },
  Dt = {
    class: "event__date t2-xb"
  },
  Ct = ["innerHTML"],
  Et = {
    key: 1,
    class: "mobile-countries-list"
  },
  Mt = E({
    __name: "index",
    props: {
      data: {},
      showFilter: {
        type: Boolean
      }
    },
    setup(s) {
      var L;
      const _ = s,
        {
          isMobile: b
        } = O(),
        i = (L = Y("commonData").value) == null ? void 0 : L.titles.map,
        u = X(() => {
          var v;
          const e = {
            projects: [],
            countries: [],
            years: []
          };
          if (!((v = _.data) != null && v.length)) return e;
          const p = new Set,
            x = new Set;
          return _.data.forEach(c => {
            e.countries.push({
              value: c.title,
              title: c.title
            }), c.events.forEach(w => {
              p.add(`${new Date(w.date).getFullYear()}`), w.projects.forEach(j => x.add(j))
            })
          }), Array.from(p).forEach(c => {
            e.years.push({
              value: c,
              title: c
            })
          }), Array.from(x).forEach(c => {
            e.projects.push({
              value: c,
              title: c
            })
          }), e
        }),
        r = q({
          project: "",
          country: "",
          year: ""
        });

      function n(e) {
        return !r.year && !r.project ? e.events : e.events.filter(p => {
          let x = !0,
            v = !0;
          return r.year && (x = r.year === `${new Date(p.date).getFullYear()}`), r.project && (v = p.projects.includes(r.project)), x && v
        })
      }
      async function y(e) {
        Object.assign(r, e), await Z(), g()
      }
      const m = A(),
        a = A();

      function k() {
        var p;
        const e = (p = m.value) == null ? void 0 : p.querySelectorAll(".country");
        !a.value || !(e != null && e.length) || I.from(e, {
          scrollTrigger: {
            trigger: a.value,
            start: "top center"
          },
          opacity: 0,
          y: -100,
          duration: .8,
          stagger: .15,
          clearProps: "transform,opacity",
          ease: "default-ease",
          onComplete: () => {
            I.set(e, {
              transition: "opacity 0.8s var(--default-ease), transform 0.8s var(--default-ease)"
            })
          }
        })
      }

      function g() {
        var p;
        if (b.value) return;
        const e = (p = m.value) == null ? void 0 : p.querySelectorAll(".country");
        e != null && e.length && e.forEach(x => {
          const v = [...x.querySelectorAll(".event")];
          if (v != null && v.length) {
            const c = Math.max(...v.map(w => w.getBoundingClientRect().width));
            x.style.setProperty("--event-width", `${c}px`)
          }
        })
      }
      return R(() => {
        k(), g()
      }), (e, p) => {
        const x = at,
          v = ht;
        return o(i) ? (l(), f("section", xt, [t("div", bt, [t("h2", {
          class: "map-title h1 anim-title",
          innerHTML: o(i).title
        }, null, 8, kt), t("div", {
          class: "map-description h4 anim-title",
          innerHTML: o(i).description
        }, null, 8, $t)]), t("div", wt, [t("div", {
          ref_key: "mapPhotoWrapper",
          ref: a,
          class: "map-photo"
        }, [p[1] || (p[1] = t("img", {
          src: gt,
          alt: "Map"
        }, null, -1)), t("ul", {
          ref_key: "pointsListEl",
          ref: m,
          class: "points"
        }, [(l(!0), f(T, null, D(s.data, (c, w) => (l(), f("li", {
          key: w,
          class: S(["country", {
            hidden: o(r).country && o(r).country !== c.title
          }]),
          style: B({
            "--top-offset": `${c.coords.vertical}%`,
            "--left-offset": `${c.coords.horizontal}%`
          })
        }, [(l(!0), f(T, null, D(n(c), (j, H) => (l(), f("div", {
          key: H,
          class: "event",
          style: B({
            "--top-multiplier": `${H-1}`
          })
        }, [t("div", jt, [t("img", {
          class: "inner-img",
          src: j.photo.medium,
          alt: "image"
        }, null, 8, Ft)]), t("div", At, [t("h3", Lt, h(c.title), 1), t("div", null, [t("h4", Tt, h(j.title), 1), t("p", Dt, h(new Date(j.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })), 1)])])], 4))), 128)), p[0] || (p[0] = t("div", {
          class: "mock-event"
        }, null, -1))], 6))), 128))], 512)], 512), s.showFilter ? (l(), F(x, {
          key: 0,
          "filters-data": o(u),
          onApply: y
        }, null, 8, ["filters-data"])) : $("", !0), t("div", {
          class: "map-text t2-xb",
          innerHTML: o(i).subtitle
        }, null, 8, Ct), o(b) ? (l(), f("div", Et, [M(v, {
          data: s.data || []
        }, null, 8, ["data"])])) : $("", !0)])])) : $("", !0)
      }
    }
  });
const Ht = C(Mt, [
  ["__scopeId", "data-v-e4661ffd"]
]);
export {
  Ht as _, et as a
};