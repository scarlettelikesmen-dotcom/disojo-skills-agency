/* https://archvoyage.ae/_nuxt/_slug_.CzZGPsDS.js */
import {
  _ as yt
} from "./MoreButton.BK_q1TjK.js";
import {
  d as L,
  o as D,
  n as O,
  B as dt,
  a as n,
  b as d,
  e as t,
  t as f,
  F as P,
  i as C,
  g as u,
  D as I,
  k as R,
  v as T,
  p as S,
  l as B,
  m as A,
  u as ut,
  r as E,
  w as ht,
  f as mt,
  c as xt,
  h as b,
  j as r,
  y as Et,
  C as V,
  _ as q,
  E as Pt,
  q as Ct,
  G as It,
  z as Lt,
  s as St
} from "./entry.YPAKmh3d.js";
import {
  S as vt
} from "./swiper.COee7uVM.js";
import {
  t as ft
} from "./titleAnim.CszaPWUV.js";
import {
  _ as Bt
} from "./DragCursor.DPcV-VC9.js";
import {
  _ as At
} from "./Contact.D-xzsxJa.js";
import {
  s as Mt,
  _ as bt
} from "./setPageMeta.DvPDcq0E.js";
const kt = o => (S("data-v-a014d015"), o = o(), B(), o),
  Vt = {
    class: "about container"
  },
  Dt = {
    class: "block"
  },
  Tt = {
    class: "title h6 medium"
  },
  Nt = {
    class: "text-wrapper"
  },
  zt = {
    class: "description h6"
  },
  Ot = {
    class: "two-blocks"
  },
  Rt = {
    class: "p1"
  },
  qt = {
    class: "p1"
  },
  Ht = {
    key: 0,
    class: "block"
  },
  Ft = kt(() => t("p", {
    class: "title h6 medium"
  }, "Team of Architects", -1)),
  Ut = {
    class: "team"
  },
  Wt = {
    class: "team-slider swiper"
  },
  jt = {
    class: "swiper-wrapper"
  },
  Gt = {
    class: "team-photo"
  },
  Jt = {
    class: "p1"
  },
  Kt = {
    class: "team-position p1"
  },
  Qt = {
    key: 1,
    class: "block"
  },
  Xt = kt(() => t("p", {
    class: "title h6 medium"
  }, "Consultants of Architects", -1)),
  Yt = {
    class: "consultants"
  },
  Zt = {
    class: "consultants-line"
  },
  te = {
    class: "p1"
  },
  ee = {
    class: "consultant-position p1"
  },
  se = {
    name: "ExpertiseAbout"
  },
  oe = L({
    ...se,
    props: {
      overview: {},
      team: {},
      consultants: {}
    },
    setup(o) {
      const c = o,
        _ = {
          speed: 700,
          slidesPerView: 2.35,
          spaceBetween: 8,
          breakpoints: {
            1025: {
              slidesPerView: 4,
              spaceBetween: 14
            }
          }
        };
      let a;
      D(async () => {
        var e;
        await O(), (e = c.team) != null && e.length && s()
      }), dt(() => {
        var e;
        (e = a == null ? void 0 : a.destroy) == null || e.call(a)
      });

      function s() {
        a = new vt(".team-slider", _)
      }
      return (e, g) => {
        var i, p, m, w, $, y;
        const l = R,
          k = T;
        return n(), d("section", Vt, [t("div", Dt, [t("p", Tt, f((i = e.overview) == null ? void 0 : i.titleLeft), 1), t("div", Nt, [t("p", zt, f((p = e.overview) == null ? void 0 : p.titleRight), 1), t("div", Ot, [t("p", Rt, f((m = e.overview) == null ? void 0 : m.descriptionLeft), 1), t("p", qt, f((w = e.overview) == null ? void 0 : w.descriptionRight), 1)])])]), ($ = e.team) != null && $.length ? (n(), d("div", Ht, [Ft, t("div", Ut, [t("div", Wt, [t("div", jt, [(n(!0), d(P, null, C(e.team, (v, x) => (n(), d("div", {
          key: x,
          class: "swiper-slide team-item"
        }, [t("div", Gt, [u(l, {
          photo: v.photo
        }, null, 8, ["photo"])]), t("p", Jt, f(v.name), 1), t("p", Kt, f(v.position), 1)]))), 128))])])])])) : I("", !0), (y = e.consultants) != null && y.length ? (n(), d("div", Qt, [Xt, t("div", Yt, [t("div", Zt, [u(k)]), (n(!0), d(P, null, C(e.consultants, (v, x) => (n(), d("div", {
          key: x,
          class: "consultant-item"
        }, [t("p", te, f(v.name), 1), t("p", ee, f(v.position), 1)]))), 128))])])) : I("", !0)])
      }
    }
  }),
  ne = A(oe, [
    ["__scopeId", "data-v-a014d015"]
  ]),
  wt = o => (S("data-v-6c1e17fd"), o = o(), B(), o),
  ie = {
    class: "services"
  },
  ce = {
    class: "inner container"
  },
  ae = wt(() => t("span", {
    class: "italic"
  }, "services", -1)),
  le = {
    class: "list"
  },
  re = {
    class: "service__line"
  },
  _e = {
    class: "service__title h6 medium"
  },
  pe = ["innerHTML"],
  de = {
    class: "service__photo-wrapper"
  },
  ue = wt(() => t("div", {
    class: "gradient-image-cover--bottom"
  }, null, -1)),
  he = {
    class: "service__line service__line--bottom"
  },
  me = {
    name: "ExpertiseServices"
  },
  ve = L({
    ...me,
    props: {
      services: {}
    },
    setup(o) {
      const c = ut("transitionEnd"),
        _ = E(!1),
        a = E();
      ht(c, e => {
        e && s()
      }), D(() => {
        c.value && s()
      });

      function s() {
        if (_.value) return;
        _.value = !0;
        const e = a.value;
        e && ft(e)
      }
      return (e, g) => {
        const l = T,
          k = R;
        return n(), d("section", ie, [t("div", ce, [t("p", {
          ref_key: "titleEl",
          ref: a,
          class: "title h2"
        }, [mt(" architecture "), ae], 512), t("div", le, [(n(!0), d(P, null, C(e.services, (i, p) => (n(), d("div", {
          key: p,
          class: "service"
        }, [t("div", re, [u(l)]), t("p", _e, f(i == null ? void 0 : i.title), 1), t("div", {
          class: "service__description p1",
          innerHTML: i == null ? void 0 : i.description
        }, null, 8, pe), t("div", de, [u(k, {
          photo: i == null ? void 0 : i.photo,
          "default-size": "large"
        }, null, 8, ["photo"]), ue]), t("div", he, [u(l)])]))), 128))])])])
      }
    }
  }),
  fe = A(ve, [
    ["__scopeId", "data-v-6c1e17fd"]
  ]),
  ke = o => (S("data-v-e6919c03"), o = o(), B(), o),
  we = {
    class: "projects"
  },
  $e = {
    class: "header container"
  },
  ge = ke(() => t("p", {
    class: "p1"
  }, "Related Projects", -1)),
  ye = {
    class: "header-line"
  },
  xe = {
    class: "swiper-wrapper"
  },
  Ee = {
    class: "slide-photo"
  },
  Pe = {
    class: "slide-info"
  },
  Ce = {
    class: "slide-name p1"
  },
  Ie = {
    class: "slide-location p1"
  },
  Le = {
    name: "ExpertiseProjects"
  },
  Se = L({
    ...Le,
    props: {
      projects: {}
    },
    setup(o) {
      const c = o,
        _ = E(),
        a = E(!1),
        s = {
          speed: 700,
          slidesPerView: "auto",
          preventClicks: !0,
          touchStartPreventDefault: !1
        };
      let e;
      const g = xt(() => {
        var m;
        return (m = c.projects) != null && m.length ? [...c.projects].sort((w, $) => {
          let y = 0,
            v = 0;
          return w != null && w.sort && (y = parseInt(w.sort)), $ != null && $.sort && (v = parseInt($.sort)), y - v
        }) : []
      });
      D(async () => {
        await O(), l()
      }), dt(() => {
        var p;
        (p = e == null ? void 0 : e.destroy) == null || p.call(e)
      });

      function l() {
        e = new vt(".slider-block", s)
      }

      function k() {
        _.value && _.value.classList.add("shrinked-photos")
      }

      function i() {
        _.value && _.value.classList.remove("shrinked-photos")
      }
      return (p, m) => {
        var x, M;
        const w = T,
          $ = R,
          y = q,
          v = Bt;
        return n(), d("section", we, [t("header", $e, [ge, t("div", ye, [u(w)])]), t("div", {
          ref_key: "sliderBlock",
          ref: _,
          class: Et(["slider-block swiper", {
            "no-drag": ((x = p.projects) == null ? void 0 : x.length) && p.projects.length < 4
          }])
        }, [t("div", xe, [(n(!0), d(P, null, C(r(g), (h, N) => (n(), d("div", {
          key: N,
          class: "swiper-slide"
        }, [u(y, {
          class: "slide-link",
          to: `/projects/${h==null?void 0:h.slug}`,
          draggable: "false",
          onMouseenter: m[0] || (m[0] = z => a.value = !0),
          onMouseleave: m[1] || (m[1] = z => a.value = !1)
        }, {
          default: b(() => [t("div", Ee, [u($, {
            photo: h == null ? void 0 : h.photo,
            "default-size": "medium"
          }, null, 8, ["photo"])]), t("div", Pe, [t("p", Ce, f(h == null ? void 0 : h.title), 1), t("p", Ie, f(h == null ? void 0 : h.location), 1)])]),
          _: 2
        }, 1032, ["to"])]))), 128))])], 2), (M = p.projects) != null && M.length && p.projects.length > 3 ? (n(), V(v, {
          key: 0,
          container: r(_),
          "is-on-link": r(a),
          onPressed: k,
          onUnpressed: i
        }, null, 8, ["container", "is-on-link"])) : I("", !0)])
      }
    }
  }),
  Be = A(Se, [
    ["__scopeId", "data-v-e6919c03"]
  ]),
  Ae = o => (S("data-v-1469d8b2"), o = o(), B(), o),
  Me = {
    class: "other-expertises container"
  },
  be = Ae(() => t("p", {
    class: "p1"
  }, "Other Expertises", -1)),
  Ve = L({
    __name: "OtherExpertises",
    props: {
      expertises: {}
    },
    setup(o) {
      const c = E();

      function _(s) {
        if (window.innerWidth < 1024 || !c.value) return;
        c.value.querySelectorAll(".expertises-link").forEach((g, l) => {
          l !== s && g.classList.add("unhover")
        })
      }

      function a() {
        if (window.innerWidth < 1024 || !c.value) return;
        c.value.querySelectorAll(".expertises-link").forEach(e => {
          e.classList.remove("unhover")
        })
      }
      return (s, e) => {
        const g = q;
        return n(), d("section", Me, [be, t("div", {
          ref_key: "list",
          ref: c,
          class: "expertises-list"
        }, [(n(!0), d(P, null, C(s.expertises, (l, k) => (n(), V(g, {
          key: k,
          to: `/expertise/${l==null?void 0:l.slug}`,
          class: "h5 expertises-link",
          onMouseenter: i => _(k),
          onMouseleave: a
        }, {
          default: b(() => [mt(f(l == null ? void 0 : l.title), 1)]),
          _: 2
        }, 1032, ["to", "onMouseenter"]))), 128))], 512)])
      }
    }
  }),
  De = A(Ve, [
    ["__scopeId", "data-v-1469d8b2"]
  ]),
  Te = o => (S("data-v-68739fa8"), o = o(), B(), o),
  Ne = {
    class: "expertise-page page"
  },
  ze = Te(() => t("div", {
    class: "header-gap"
  }, null, -1)),
  Oe = {
    class: "header container"
  },
  Re = {
    class: "header-line"
  },
  qe = {
    name: "ExpertisePage"
  },
  He = L({
    ...qe,
    async setup(o) {
      var m;
      let c, _;
      const {
        slug: a
      } = Pt().params, {
        data: s,
        error: e
      } = ([c, _] = Ct(() => St(`expertise-page-${a}`, () => $fetch("/api/pages/pageOneExpertise", {
        method: "post",
        body: {
          slug: a
        }
      }))), c = await c, _(), c);
      e.value && It({
        statusCode: 404,
        statusMessage: "page not found"
      }), Mt((m = s == null ? void 0 : s.value) == null ? void 0 : m.meta);
      const {
        $gsap: g
      } = Lt(), l = ut("preloaderDone"), k = E(), i = E();
      ht(l, w => {
        w && p()
      }), D(async () => {
        await O(), l.value && p()
      });

      function p() {
        k.value && ft(k.value), i.value && g.fromTo(i.value, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          yPercent: 100
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          yPercent: 0,
          clearProps: "all",
          duration: .6,
          delay: .6,
          ease: "custom"
        })
      }
      return (w, $) => {
        const y = yt,
          v = q,
          x = T,
          M = ne,
          h = fe,
          N = Be,
          z = De,
          $t = At,
          gt = bt;
        return n(), d("main", Ne, [u(gt, null, {
          default: b(() => {
            var H, F, U, W, j, G, J, K, Q, X, Y, Z, tt, et, st, ot, nt, it, ct, at, lt, rt, _t, pt;
            return [ze, t("header", Oe, [t("h1", {
              ref_key: "title",
              ref: k,
              class: "title h1"
            }, f((F = (H = r(s)) == null ? void 0 : H.main) == null ? void 0 : F.title), 513), t("div", {
              ref_key: "backLink",
              ref: i,
              class: "link-wrapper"
            }, [u(v, {
              to: "/expertise"
            }, {
              default: b(() => [u(y, {
                text: "All Expertises",
                reverse: ""
              })]),
              _: 1
            })], 512), t("div", Re, [u(x)])]), u(M, {
              overview: (U = r(s)) == null ? void 0 : U.overview,
              team: (W = r(s)) == null ? void 0 : W.team,
              consultants: (j = r(s)) == null ? void 0 : j.consultants
            }, null, 8, ["overview", "team", "consultants"]), (J = (G = r(s)) == null ? void 0 : G.addInfo) != null && J.length ? (n(), V(h, {
              key: 0,
              services: (K = r(s)) == null ? void 0 : K.addInfo
            }, null, 8, ["services"])) : I("", !0), (X = (Q = r(s)) == null ? void 0 : Q.projects) != null && X.length ? (n(), V(N, {
              key: 1,
              projects: (Y = r(s)) == null ? void 0 : Y.projects
            }, null, 8, ["projects"])) : I("", !0), u(z, {
              expertises: (Z = r(s)) == null ? void 0 : Z.otherExpertises
            }, null, 8, ["expertises"]), u($t, {
              title: (et = (tt = r(s)) == null ? void 0 : tt.contact) == null ? void 0 : et.title,
              photo: (ot = (st = r(s)) == null ? void 0 : st.contact) == null ? void 0 : ot.photo,
              "description-left-1": (it = (nt = r(s)) == null ? void 0 : nt.contact) == null ? void 0 : it.description_left_1,
              "description-left-2": (at = (ct = r(s)) == null ? void 0 : ct.contact) == null ? void 0 : at.description_left_2,
              descriptions: (rt = (lt = r(s)) == null ? void 0 : lt.contact) == null ? void 0 : rt.descriptions,
              "small-description": (pt = (_t = r(s)) == null ? void 0 : _t.contact) == null ? void 0 : pt.small_description
            }, null, 8, ["title", "photo", "description-left-1", "description-left-2", "descriptions", "small-description"])]
          }),
          _: 1
        })])
      }
    }
  }),
  Qe = A(He, [
    ["__scopeId", "data-v-68739fa8"]
  ]);
export {
  Qe as
  default
};