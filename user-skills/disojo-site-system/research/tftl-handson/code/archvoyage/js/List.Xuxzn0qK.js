/* https://archvoyage.ae/_nuxt/List.Xuxzn0qK.js */
import {
  _ as N
} from "./MoreButton.BK_q1TjK.js";
import {
  m as q,
  a as u,
  b as m,
  e as t,
  d as U,
  r as E,
  c as D,
  w as O,
  o as R,
  n as B,
  B as G,
  F as L,
  i as C,
  t as v,
  g as _,
  h as k,
  y as w,
  j as M,
  z as J,
  _ as K,
  k as Q,
  v as X,
  p as Y,
  l as Z
} from "./entry.YPAKmh3d.js";
import {
  _ as j
} from "./Plus.DQtF0hp8.js";
import {
  S as ee
} from "./swiper.COee7uVM.js";
const te = {
    name: "IconsLink"
  },
  se = {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  oe = t("circle", {
    cx: "14",
    cy: "14",
    r: "14",
    fill: "#F5F5F5"
  }, null, -1),
  ne = t("path", {
    d: "M11.3691 19.939L17.1387 14.1694L11.3691 8.3999",
    stroke: "#212121"
  }, null, -1),
  ie = [oe, ne];

function ce(d, h, y, $, f, p) {
  return u(), m("svg", se, ie)
}
const re = q(te, [
    ["render", ce]
  ]),
  le = d => (Y("data-v-d7857785"), d = d(), Z(), d),
  ae = ["onClick"],
  _e = {
    class: "item-title h6 medium"
  },
  de = {
    class: "item-info"
  },
  pe = {
    class: "item-description p1"
  },
  ue = {
    class: "item-link"
  },
  me = {
    class: "item-content container"
  },
  he = {
    class: "item-content-inner"
  },
  fe = {
    class: "item-info-mobile"
  },
  ge = {
    class: "item-description p1"
  },
  ve = {
    class: "item-link"
  },
  we = {
    class: "swiper-wrapper"
  },
  ye = {
    class: "slide-image-wrapper"
  },
  xe = {
    class: "slide-cover"
  },
  ke = le(() => t("div", {
    class: "gradient-image-cover--bottom cover"
  }, null, -1)),
  $e = {
    class: "slide-caption"
  },
  Pe = {
    class: "slide-name h6"
  },
  Se = {
    class: "slide-link-icon"
  },
  Ie = {
    class: "item-line"
  },
  Ee = {
    name: "ExpertisesList"
  },
  Be = U({
    ...Ee,
    props: {
      expertises: {},
      isExpertisesPage: {
        type: Boolean
      }
    },
    setup(d) {
      const h = d,
        {
          $gsap: y,
          $ScrollTrigger: $
        } = J(),
        f = E(),
        p = E(h.isExpertisesPage ? 0 : -1),
        A = {
          speed: 700,
          slidesPerView: 1,
          spaceBetween: 14,
          breakpoints: {
            1025: {
              slidesPerView: 1.5
            }
          }
        };
      let P = [];
      const V = D(() => {
        var e;
        return (e = h.expertises) != null && e.length ? [...h.expertises].sort((s, o) => {
          let l = 0,
            c = 0;
          return s != null && s.sort && (l = parseInt(s.sort)), o != null && o.sort && (c = parseInt(o.sort)), l - c
        }) : []
      });
      O(p, () => {
        T()
      }), R(async () => {
        await B(), F()
      }), G(() => {
        P.forEach(n => {
          var e;
          (e = n == null ? void 0 : n.destroy) == null || e.call(n)
        })
      });

      function F() {
        const n = new ee(".expertise-slider", A);
        P.push(n)
      }

      function H(n, e) {
        var l, c, a, g;
        const s = (l = n.target) == null ? void 0 : l.closest(".item-link-inner"),
          o = (g = (a = (c = h.expertises) == null ? void 0 : c[e]) == null ? void 0 : a.projects) == null ? void 0 : g.length;
        s || !o && window.innerWidth > 1024 || (p.value = p.value === e ? -1 : e)
      }
      async function T() {
        if (!f.value) return;
        f.value.querySelectorAll(".item-content").forEach((e, s) => {
          if (s === p.value) {
            const o = e.querySelector(".item-content-inner"),
              l = o == null ? void 0 : o.getBoundingClientRect().height;
            e.style.maxHeight = `${l}px`;
            const c = e.querySelectorAll(".slide-image-wrapper"),
              a = e.querySelectorAll(".slide-image-wrapper .wrapper");
            c != null && c.length && (a != null && a.length) && window.innerWidth > 1024 && (y.fromTo(c, {
              clipPath: "polygon(0% 100%, 100% 130%, 100% 100%, 0% 100%)"
            }, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: .6,
              stagger: .2,
              clearProps: "all",
              ease: "custom"
            }), y.fromTo(a, {
              yPercent: 30,
              scale: 1.1,
              rotate: 5
            }, {
              yPercent: 0,
              scale: 1,
              rotate: 0,
              duration: .6,
              stagger: .2,
              clearProps: "all",
              ease: "custom"
            }))
          } else e.style.maxHeight = "0px"
        }), await B(), $.refresh()
      }

      function W(n) {
        if (window.innerWidth < 1024) return;
        const e = n.target.closest(".swiper-wrapper"),
          s = e == null ? void 0 : e.querySelectorAll(".slide-inner");
        s == null || s.forEach(o => {
          o !== n.target && (o.style.opacity = "0.5")
        })
      }

      function b(n) {
        if (window.innerWidth < 1024) return;
        const e = n.target.closest(".swiper-wrapper"),
          s = e == null ? void 0 : e.querySelectorAll(".slide-inner");
        s == null || s.forEach(o => {
          o.style.removeProperty("opacity")
        })
      }
      return (n, e) => {
        const s = N,
          o = K,
          l = j,
          c = Q,
          a = re,
          g = X;
        return u(), m("div", {
          ref_key: "expertisesListEl",
          ref: f,
          class: w(["expertise-list", {
            "expertise-list--expertises-page": n.isExpertisesPage
          }])
        }, [(u(!0), m(L, null, C(M(V), (i, x) => {
          var S, I;
          return u(), m("div", {
            key: x,
            class: "expertise-item item"
          }, [t("div", {
            class: w(["item-inner", {
              active: M(p) === x
            }])
          }, [t("div", {
            class: "item-header container",
            onClick: r => H(r, x)
          }, [t("p", _e, v(i.name), 1), t("div", de, [t("p", pe, v(i.description), 1), t("div", ue, [_(o, {
            class: "item-link-inner",
            to: `/expertise/${i.slug}`
          }, {
            default: k(() => [_(s, {
              text: "More info"
            })]),
            _: 2
          }, 1032, ["to"])])]), t("button", {
            class: w(["item-button", {
              disable: !((S = i == null ? void 0 : i.projects) != null && S.length)
            }]),
            "aria-label": "open expertise card"
          }, [_(l)], 2)], 8, ae), t("div", me, [t("div", he, [t("div", fe, [t("p", ge, v(i.description), 1), t("div", ve, [_(o, {
            to: `/expertise/${i.slug}`
          }, {
            default: k(() => [_(s, {
              text: "More info"
            })]),
            _: 2
          }, 1032, ["to"])])]), t("div", {
            class: w(["expertise-slider swiper", {
              "no-projects": !((I = i == null ? void 0 : i.projects) != null && I.length)
            }])
          }, [t("div", we, [(u(!0), m(L, null, C(i == null ? void 0 : i.projects, (r, z) => (u(), m("div", {
            key: z,
            class: "swiper-slide"
          }, [_(o, {
            class: "slide-inner",
            to: `/projects/${r==null?void 0:r.slug}`,
            onMouseenter: W,
            onMouseleave: b
          }, {
            default: k(() => [t("div", ye, [_(c, {
              photo: r == null ? void 0 : r.photo,
              "default-size": "large"
            }, null, 8, ["photo"])]), t("div", xe, [ke, t("div", $e, [t("p", Pe, v(r == null ? void 0 : r.title), 1), t("div", Se, [_(a)])])])]),
            _: 2
          }, 1032, ["to"])]))), 128))])], 2)])])], 2), t("div", Ie, [_(g)])])
        }), 128))], 2)
      }
    }
  }),
  Ae = q(Be, [
    ["__scopeId", "data-v-d7857785"]
  ]);
export {
  Ae as _
};