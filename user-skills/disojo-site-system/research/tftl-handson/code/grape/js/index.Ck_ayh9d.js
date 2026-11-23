/* https://grape.ua/_nuxt/index.Ck_ayh9d.js */
import {
  _ as ue
} from "./AnimCircles.vue.eKAmF3gL.js";
import {
  w as _e,
  e as M,
  g as q,
  t as de,
  _ as se,
  u as pe,
  d as fe,
  a as oe,
  x as me,
  m as ee,
  k as ve,
  f as he,
  s as ge,
  h as ye,
  i as xe
} from "./entry.DN75vySF.js";
import {
  j as N,
  a as g,
  b as H,
  n as W,
  M as p,
  N as h,
  U as t,
  J as I,
  $ as T,
  ad as Fe,
  W as v,
  _ as B,
  L as j,
  Q as ne,
  u as s,
  Z as O,
  O as $e,
  C as A,
  q as Ce,
  R as E,
  X as ke,
  Y as be,
  k as P,
  V,
  aa as we,
  o as De
} from "./swiper-vue.BTZulNLT.js";
import {
  _ as Se
} from "./FlipTest.BlCQGEuk.js";
import {
  _ as je
} from "./Contact.vue.HB5MoldY.js";
import {
  s as Ie,
  _ as Le
} from "./setPageMeta.BIChswHP.js";
import {
  u as Me
} from "./base.Cowcg-OE.js";
import "./isVideo.BdcvccDS.js";
import "./Main.D-Xe3oxQ.js";
const Pe = {
    class: "filter"
  },
  Te = {
    key: 0,
    class: "filter__button-count T7"
  },
  Oe = {
    key: 0,
    class: "filter__popup"
  },
  Be = ["onClick"],
  Ne = {
    class: "filter__item-button-name"
  },
  He = {
    class: "filter__item-coma H1"
  },
  Ae = N({
    __name: "FilterButton",
    props: {
      currentFilterName: {},
      count: {},
      filters: {},
      availableFiltersIds: {},
      isDot: {
        type: Boolean
      }
    },
    emits: ["setFilter"],
    setup(_, {
      emit: u
    }) {
      const a = g(!1);

      function y() {
        a.value = !0
      }

      function x() {
        q.to, a.value = !1
      }

      function c(l) {
        u("setFilter", l), x()
      }
      const f = g(),
        m = g(),
        r = g(),
        F = g();

      function D(l) {
        if (!r.value || !f.value || !m.value) return;
        const d = l < 1200 ? 16 / 414 * l : 24 / 1440 * l;
        f.value.style.width = `${l-2*d}px`;
        const i = r.value.getBoundingClientRect();
        m.value.style.width = `${i.left-d}px`, f.value.style.left = `-${i.left-d}px`
      }
      let $ = null;
      H(a, async l => {
        var d;
        if (l) {
          const i = window.innerWidth;
          await W(), (d = f.value) == null || d.querySelectorAll(".filter__item-button-name").forEach(e => {
            _e(e)
          }), D(i), k()
        }
      });

      function k() {
        $ && $.kill(), $ = M.create({
          trigger: f.value,
          end: "bottom top",
          onLeave() {
            x()
          }
        })
      }

      function b(l, d) {
        f.value && r.value && F.value && q.timeline({
          onComplete() {
            d()
          }
        }).from(F.value, {
          duration: .8,
          opacity: 0,
          ease: "app-ease"
        }).from([r.value, ...f.value.children], {
          duration: .05,
          opacity: 0,
          stagger: {
            each: .03,
            from: "random"
          }
        }, .4)
      }

      function w(l, d) {
        q.to(l, {
          opacity: 0,
          duration: .8,
          ease: "app-ease",
          onComplete() {
            d()
          }
        })
      }
      return (l, d) => {
        const i = de;
        return p(), h("div", Pe, [t("button", {
          class: "filter__button",
          onClick: y
        }, [(p(!0), h(I, null, T(l.filters, e => (p(), h("span", {
          class: "title-h1t",
          style: Fe([e.name.toLowerCase() !== l.currentFilterName.toLowerCase() ? "display: none" : ""])
        }, [t("span", null, v(e.name.toLocaleLowerCase()) + v(l.isDot ? "." : ""), 1)], 4))), 256)), l.count !== null ? (p(), h("span", Te, "↕ " + v(l.count), 1)) : B("", !0)]), j($e, {
          css: !1,
          onEnter: b,
          onLeave: w
        }, {
          default: ne(() => [s(a) ? (p(), h("div", Oe, [t("div", {
            ref_key: "overlayDOM",
            ref: F,
            class: "filter__overlay",
            onClick: x
          }, null, 512), t("div", {
            ref_key: "closeButtonDOM",
            ref: r,
            class: "filter__close-button"
          }, [j(i, {
            onClick: x
          })], 512), t("div", {
            ref_key: "itemsContainerDOM",
            ref: f,
            class: "filter__items"
          }, [t("div", {
            ref_key: "leftSpaceDOM",
            ref: m,
            class: "filter__items-space"
          }, null, 512), (p(!0), h(I, null, T(l.filters, (e, o) => (p(), h("div", {
            class: O(["filter__item", {
              disabled: !l.availableFiltersIds.includes(e.id)
            }]),
            key: e.name
          }, [t("button", {
            class: "filter__item-button title-h1t",
            onClick: () => c(e.id)
          }, [t("span", Ne, v(e.name), 1)], 8, Be), t("span", He, v(o === l.filters.length - 1 ? "." : ", "), 1)], 2))), 128))], 512)])) : B("", !0)]),
          _: 1
        })])
      }
    }
  }),
  qe = se(Ae, [
    ["__scopeId", "data-v-62edffca"]
  ]);

function Ve() {
  const _ = g(0),
    u = g(0);
  A(() => {
    window.addEventListener("pointermove", a)
  }), Ce(() => {
    window.removeEventListener("pointermove", a)
  });

  function a(y) {
    _.value = y.clientX, u.value = y.clientY
  }
  return {
    x: _,
    y: u
  }
}
const ie = _ => (ke("data-v-b31e9aa7"), _ = _(), be(), _),
  Ee = {
    class: "projects-list__header"
  },
  We = {
    class: "text-p3 projects-list__column-1"
  },
  Re = {
    class: "text-p3 projects-list__column-2"
  },
  Ue = {
    class: "text-p3 projects-list__column-3"
  },
  Xe = {
    class: "text-p3 projects-list__column-4"
  },
  Ye = {
    class: "projects-list__column-1",
    "data-hover": "hover-1"
  },
  ze = {
    class: "text-p1 link-2"
  },
  Je = {
    class: "projects-list__column-2",
    "data-hover": "hover-2"
  },
  Qe = {
    class: "text-p1 link-2"
  },
  Ze = {
    class: "projects-list__tags projects-list__column-3"
  },
  Ge = {
    class: "projects-list__tags-inner"
  },
  Ke = {
    class: "list__tag-item"
  },
  et = {
    class: "list__tag-item no-hover"
  },
  tt = {
    key: 0,
    class: "text-p2 list__tag"
  },
  st = ie(() => t("div", {
    class: "list__tag-item no-hover"
  }, "...", -1)),
  ot = [st],
  nt = {
    class: "projects-list__column-4",
    "data-hover": "hover-4"
  },
  it = {
    class: "text-p1 link-2"
  },
  lt = ie(() => t("p", {
    class: "text-p1 link-2 projects-list__column-5"
  }, "→", -1)),
  at = {
    class: "media__inner"
  },
  rt = ["src"],
  ct = ["src"],
  ut = N({
    __name: "List",
    props: {
      projects: {
        default: () => []
      }
    },
    setup(_) {
      const u = _,
        a = g("");

      function y(i) {
        const e = i.target,
          o = e.tagName === "P" ? e.parentNode : e,
          n = o == null ? void 0 : o.dataset.hover;
        n && (a.value = n);
        const S = e.closest(".projects-list__item");
        if (S) {
          const C = S.dataset.image ?? "";
          c.value = C
        }
      }

      function x(i) {
        a.value = ""
      }
      const c = g(u.projects[0].photo),
        {
          x: f,
          y: m
        } = Ve(),
        r = g(),
        F = g(!1),
        D = g(null);
      A(() => {
        k()
      });
      let $ = {
        x: 0,
        y: 0
      };

      function k() {
        if (r.value) {
          if (F.value) {
            const i = r.value.getBoundingClientRect(),
              o = {
                x: l(window.innerWidth, window.innerWidth - i.width, f.value) - $.x,
                y: m.value - $.y
              },
              n = {
                x: $.x + o.x * .1,
                y: $.y + o.y * .1
              };
            $ = n, r.value.style.transform = `translate(${n.x}px,${n.y}px)`
          }
          D.value = requestAnimationFrame(k)
        }
      }

      function b() {
        F.value = !0
      }

      function w() {
        F.value = !1
      }

      function l(i, e, o) {
        return e * o / i
      }
      const d = pe();
      return (i, e) => {
        const o = fe;
        return p(), h(I, null, [t("div", {
          class: O(["projects-list", s(a)]),
          onPointerover: y,
          onPointerout: x
        }, [t("div", Ee, [t("div", We, v(i.$t("portfolio.heading.clients")), 1), t("div", Re, v(i.$t("portfolio.heading.name")), 1), t("div", Ue, v(i.$t("portfolio.heading.services")), 1), t("div", Xe, v(i.$t("portfolio.heading.year")), 1)]), t("div", {
          onPointerenter: b,
          onPointerleave: w
        }, [(p(!0), h(I, null, T(u.projects, (n, S) => (p(), E(o, {
          key: n.id,
          to: s(d)(`/portfolio/${n.slug}`),
          class: "projects-list__item",
          "data-image": n.photo
        }, {
          default: ne(() => [t("div", Ye, [t("p", ze, v(n.clients.map(C => C.name + "®").join(", ")), 1)]), t("div", Je, [t("p", Qe, v(n.name), 1)]), t("div", Ze, [t("div", Ge, [(p(!0), h(I, null, T(n.services.length > 3 ? n.services.slice(0, 3) : n.services, C => (p(), h("div", {
            key: C.id,
            class: "text-p2 list__tag"
          }, [t("div", Ke, v(C.title), 1)]))), 128)), (p(!0), h(I, null, T(n.services.length >= 3 ? [] : n.tags.slice(0, 3 - n.services.length), C => (p(), h("div", {
            key: C.id,
            class: "text-p2 list__tag"
          }, [t("div", et, v(C.name), 1)]))), 128)), n.services.length + n.tags.length > 3 ? (p(), h("div", tt, ot)) : B("", !0)])]), t("div", nt, [t("p", it, v(n.year), 1)]), lt]),
          _: 2
        }, 1032, ["to", "data-image"]))), 128))], 32)], 34), t("div", {
          ref_key: "mediaDOM",
          ref: r,
          class: O(["media", {
            visible: s(F)
          }])
        }, [t("div", at, [t("img", {
          src: s(c),
          alt: "current project image"
        }, null, 8, rt), t("video", {
          src: s(c),
          muted: "",
          autoplay: "",
          playsinline: "",
          loop: ""
        }, null, 8, ct)])], 2)], 64)
      }
    }
  }),
  _t = se(ut, [
    ["__scopeId", "data-v-b31e9aa7"]
  ]);

function dt(_ = [], u = [], a = []) {
  const {
    t: y
  } = oe(), x = {
    id: null,
    name: y("portfolio.text.two"),
    count: u.length
  }, c = g(null), f = P(() => {
    const e = u.find(o => o.id === c.value);
    return e ? {
      id: e.id,
      name: e.name
    } : x
  }), m = {
    id: null,
    name: y("portfolio.text.four"),
    count: a.length
  }, r = g(null), F = P(() => {
    const e = a.find(o => o.id === r.value);
    return e ? {
      id: e.id,
      name: e.name
    } : m
  });

  function D(e) {
    c.value = e
  }

  function $(e) {
    r.value = e
  }
  const k = P(() => _.filter(e => (r.value === null || e.clients_id.includes(r.value)) && (c.value === null || e.services_id.includes(c.value))));
  H(k, () => {
    W().then(() => {
      M.update(), M.refresh()
    })
  });
  const b = [x, ...u.map(e => {
      const o = _.filter(n => n.services_id.includes(e.id));
      return {
        id: e.id,
        name: e.name.toLocaleLowerCase(),
        count: o.length
      }
    }).filter(e => e.count !== 0)],
    w = [m, ...a.map(e => {
      const o = _.filter(n => n.clients_id.includes(e.id));
      return {
        id: e.id,
        name: e.name.toLocaleLowerCase(),
        count: o.length
      }
    }).filter(e => e.count !== 0)],
    l = P(() => {
      const e = _.filter(o => r.value === null || o.clients_id.includes(r.value));
      return [null, ...b.filter(o => e.filter(n => o.id !== null && n.services_id.includes(o.id)).length > 0).map(o => o.id)]
    }),
    d = P(() => {
      const e = _.filter(o => c.value === null || o.services_id.includes(c.value));
      return [null, ...w.filter(o => e.filter(n => o.id !== null && n.clients_id.includes(o.id)).length > 0).map(o => o.id)]
    });

  function i() {
    c.value = null, r.value = null
  }
  return {
    defaultServiceFilter: x,
    currentServicesFilterID: c,
    currentServicesFilter: f,
    defaultClientsFilter: m,
    currentClientsFilterID: r,
    currentClientsFilter: F,
    filteredProjects: k,
    servicesFilters: b,
    clientsFilters: w,
    availableServicesIDs: l,
    availableClientsIDs: d,
    resetFilters: i,
    setServicesFilterID: D,
    setClientsFilterID: $
  }
}
const pt = {
    class: "portfolio-first"
  },
  ft = {
    class: "text-p3 portfolio-first__subtitle"
  },
  mt = {
    class: "portfolio-first__center"
  },
  vt = ["innerHTML"],
  ht = {
    class: "text-p1 portfolio-first__tabs"
  },
  gt = {
    class: "portfolio-projects"
  },
  yt = {
    class: "portfolio-projects__title-wrapper"
  },
  xt = {
    class: "page__projects"
  },
  Ft = N({
    __name: "First",
    props: {
      description: {
        default: ""
      },
      projects: {},
      services: {},
      clients: {},
      pageName: {}
    },
    setup(_) {
      const u = _,
        a = g("grid");
      H(a, async () => {
        await W(), M.update(), M.refresh()
      });
      const {
        currentServicesFilterID: y,
        currentServicesFilter: x,
        currentClientsFilterID: c,
        currentClientsFilter: f,
        filteredProjects: m,
        servicesFilters: r,
        clientsFilters: F,
        availableServicesIDs: D,
        availableClientsIDs: $,
        resetFilters: k,
        setServicesFilterID: b,
        setClientsFilterID: w
      } = dt(u.projects, u.services, u.clients), l = g();
      A(() => {
        d()
      });

      function d() {
        l.value && me(l.value)
      }
      return (i, e) => {
        const o = ue,
          n = qe,
          S = Se,
          C = _t;
        return p(), h(I, null, [t("section", pt, [t("h2", ft, v(i.$t("portfolio.title")), 1), t("div", mt, [t("div", {
          class: "text-p1 portfolio-first__text",
          innerHTML: u.description
        }, null, 8, vt), t("div", ht, [t("p", {
          onClick: e[0] || (e[0] = L => a.value = "grid"),
          class: O(["portfolio-first__tab", {
            active: s(a) === "grid"
          }])
        }, v(i.$t("portfolio.grid")), 3), V(" / "), t("p", {
          onClick: e[1] || (e[1] = L => a.value = "list"),
          class: O(["portfolio-first__tab", {
            active: s(a) === "list"
          }])
        }, v(i.$t("portfolio.list")), 3)])]), j(o, {
          class: "portfolio-first__icon"
        })]), t("section", gt, [t("div", yt, [t("h1", {
          ref_key: "titleDOM",
          ref: l,
          class: "H1 portfolio-projects__title"
        }, [V(v(i.$t("portfolio.text.one")) + " ", 1), j(n, {
          "current-filter-name": s(y) ? s(x).name : i.$t("portfolio.text.two"),
          count: s(r).length,
          filters: s(r),
          "available-filters-ids": s(D),
          "is-dot": !1,
          onSetFilter: s(b)
        }, null, 8, ["current-filter-name", "count", "filters", "available-filters-ids", "onSetFilter"]), V(" " + v(i.$t("portfolio.text.three")) + " ", 1), j(n, {
          "current-filter-name": s(c) ? s(f).name : i.$t("portfolio.text.four"),
          count: s(F).length,
          filters: s(F),
          "available-filters-ids": s($),
          isDot: !0,
          onSetFilter: s(w)
        }, null, 8, ["current-filter-name", "count", "filters", "available-filters-ids", "onSetFilter"])], 512), s(c) || s(y) ? (p(), h("button", {
          key: 0,
          class: "portfolio-projects__reset link-2 T6",
          onClick: e[2] || (e[2] = (...L) => s(k) && s(k)(...L))
        }, " ↺ Reset ")) : B("", !0)]), t("div", xt, [s(a) === "grid" ? (p(), E(S, {
          key: 0,
          projects: s(m),
          "page-name": i.pageName
        }, null, 8, ["projects", "page-name"])) : (p(), E(C, {
          key: 1,
          projects: s(m)
        }, null, 8, ["projects"]))])])], 64)
      }
    }
  }),
  te = () => {
    const _ = document.querySelectorAll(".portfolio-first__text");
    _ && ee(_);
    const u = document.querySelector(".contacts__title");
    u && ve(u);
    const a = document.querySelectorAll(".contacts__text");
    u && ee(a), he(), ge()
  },
  $t = {
    class: "portfolio-page"
  },
  Tt = N({
    __name: "index",
    async setup(_) {
      var b, w, l, d, i, e, o, n, S, C, L, R;
      let u, a;
      const {
        base: y
      } = Me(), {
        locale: x
      } = oe(), {
        data: c
      } = ([u, a] = we(() => xe(`portfolio-${x.value}`, () => $fetch("/api/portfolio", {
        query: {
          locale: x.value
        }
      }))), u = await u, a(), u), f = ((w = (b = c.value) == null ? void 0 : b.data) == null ? void 0 : w.page) ?? null, m = (d = (l = c.value) == null ? void 0 : l.data) == null ? void 0 : d.layout, r = m == null ? void 0 : m.locations[0].location_detail, F = ((e = (i = c.value) == null ? void 0 : i.data) == null ? void 0 : e.services) ?? [], D = ((n = (o = c.value) == null ? void 0 : o.data) == null ? void 0 : n.clients) ?? [], $ = ((C = (S = c.value) == null ? void 0 : S.data) == null ? void 0 : C.news) ?? [];
      if (!f) throw ye("No page data!");
      Ie(f);
      const k = ((R = (L = c == null ? void 0 : c.value) == null ? void 0 : L.data) == null ? void 0 : R.projects) ?? [];
      return H(() => y.isLoading, () => {
        te()
      }), A(() => {
        y.isLoading || te()
      }), De(() => {
        M.killAll()
      }), (Ct, kt) => {
        var U, X, Y, z, J, Q, Z, G, K;
        const le = Ft,
          ae = je,
          re = Le;
        return p(), h("div", $t, [j(le, {
          description: (U = s(f)) == null ? void 0 : U.fields.description,
          projects: s(k),
          services: s(F),
          clients: s(D),
          "page-name": ((X = s(f)) == null ? void 0 : X.meta_title) ?? ""
        }, null, 8, ["description", "projects", "services", "clients", "page-name"]), j(ae, {
          phone: (Y = s(r)) == null ? void 0 : Y.phone,
          email: (z = s(r)) == null ? void 0 : z.mail,
          location: (J = s(r)) == null ? void 0 : J.address,
          city: (Q = s(r)) == null ? void 0 : Q.city,
          description: (Z = s(m)) == null ? void 0 : Z.description,
          news: s($)
        }, null, 8, ["phone", "email", "location", "city", "description", "news"]), j(re, {
          socials: ((G = s(m)) == null ? void 0 : G.social_blocks.map(ce => ce.social_detail)) ?? [],
          hashtag: (K = s(m)) == null ? void 0 : K.hashtag
        }, null, 8, ["socials", "hashtag"])])
      }
    }
  });
export {
  Tt as
  default
};