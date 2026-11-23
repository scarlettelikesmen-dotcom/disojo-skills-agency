/* https://ab-sl.ru/_nuxt/_Vlq0acu.js */
import {
  _ as E
} from "./BepOh2iV.js";
import {
  d as A,
  u as z,
  j as _t,
  c as i,
  a as t,
  b as v,
  o,
  f as b,
  _ as C,
  k as K,
  l as tt,
  t as n,
  F as x,
  r as B,
  m as k,
  g as et,
  p as dt,
  e as d,
  q as Q,
  n as X,
  s as O,
  h as st,
  v as ot,
  x as F,
  y as pt,
  w as mt,
  z as ht,
  A as Z,
  i as vt
} from "./DROVP5M4.js";
import {
  u as S,
  s as ft
} from "./DFRH1ql4.js";
import {
  _ as gt
} from "./Ba_lGT52.js";
import {
  t as nt
} from "./BrC1mN93.js";
import {
  _ as $t
} from "./CtZNtPPQ.js";
import {
  p as q,
  _ as bt
} from "./DCyA0qmY.js";
import {
  _ as kt
} from "./DvGqYPiL.js";
import {
  a as yt
} from "./CEJKH9bI.js";
import "./Ckjxvtsy.js";
const xt = {
    name: "AboutHero"
  },
  At = A({
    ...xt,
    props: {
      data: {}
    },
    setup(e) {
      const {
        $gsap: a
      } = z(), _ = _t(), c = b(), r = b();
      S(() => {
        l()
      });

      function l() {
        if (!r.value || !c.value) return;
        _.hash && (a.set(".hero", {
          autoAlpha: 0
        }), setTimeout(() => {
          a.set(".hero", {
            clearProps: "all"
          })
        }, 300));
        const s = document.querySelector(".about-section")?.getBoundingClientRect().top,
          u = s ? s + window.pageYOffset : 0;
        a.from(r.value, {
          scrollTrigger: {
            trigger: c.value,
            start: "top top",
            end: `${u} top`,
            scrub: !0
          },
          autoAlpha: 1,
          ease: "none"
        })
      }
      return (s, u) => {
        const p = E;
        return o(), i("section", {
          ref_key: "section",
          ref: c,
          class: "hero"
        }, [t("div", {
          ref_key: "photoWrapper",
          ref: r,
          class: "photo-wrapper"
        }, [v(p, {
          "no-lazy-load": "",
          photo: e.data.photo
        }, null, 8, ["photo"]), u[0] || (u[0] = t("div", {
          class: "overlay-flat"
        }, null, -1)), u[1] || (u[1] = t("div", {
          class: "overlay-gradient"
        }, null, -1))], 512)], 512)
      }
    }
  }),
  wt = C(At, [
    ["__scopeId", "data-v-bb6c1d12"]
  ]);

function Tt(e) {
  e.forEach(a => {
    K.set(a, {
      scale: 1.3,
      width: "100%",
      height: "100%"
    }), K.fromTo(a, {
      yPercent: -15
    }, {
      scrollTrigger: {
        trigger: a,
        start: "top bottom",
        end: "bottom top",
        scrub: !0
      },
      yPercent: 15,
      ease: "linear"
    })
  })
}
const Bt = {
    key: 0,
    class: "about about-section relative z-1"
  },
  Ct = {
    class: "top-line col-18"
  },
  Pt = {
    class: "l1"
  },
  St = {
    class: "l1"
  },
  It = {
    class: "ticker-wrapper"
  },
  Et = {
    key: 0,
    class: "expertise container"
  },
  zt = {
    class: "p1 expertise-title"
  },
  Lt = {
    class: "p1 expertise-description"
  },
  Mt = {
    class: "l1 item__title"
  },
  Dt = {
    class: "l1 item__description"
  },
  Ot = {
    name: "AboutAbout"
  },
  Rt = A({
    ...Ot,
    props: {
      data: {}
    },
    setup(e) {
      const a = tt("headerTheme"),
        {
          $gsap: _
        } = z(),
        c = b(),
        r = b();
      S(() => {
        const u = document.querySelectorAll(".photo-thumb");
        Tt(u), l()
      });

      function l() {
        !r.value || !c.value || (r.value.style.visibility = "visible", nt(r.value), _.to(c.value, {
          scrollTrigger: {
            trigger: c.value,
            start: 0,
            end: "center center",
            scrub: !0,
            onLeave: () => a.value = "dark",
            onEnterBack: () => a.value = "light"
          },
          color: "#9e9d9c",
          ease: "none"
        }))
      }

      function s(u) {
        const p = u.toString();
        return "0".repeat(Math.max(2 - p.length, 0)) + p
      }
      return (u, p) => {
        const f = gt;
        return e.data ? (o(), i("section", Bt, [t("div", {
          ref_key: "header",
          ref: c,
          class: "header container"
        }, [t("div", Ct, [t("p", Pt, n(e.data.title), 1), t("p", St, n(u.$t("scroll_down")), 1)]), t("p", {
          ref_key: "titleEl",
          ref: r,
          class: "h3 col-18 title"
        }, n(e.data.description), 513)], 512), t("div", It, [v(f, {
          photos: e.data.expertise?.photos
        }, null, 8, ["photos"])]), e.data.expertise ? (o(), i("div", Et, [t("p", zt, n(e.data.expertise.title), 1), t("p", Lt, n(e.data.expertise.description), 1), (o(!0), i(x, null, B(e.data.expertise.expertises, (g, w) => (o(), i("div", {
          key: w,
          class: "expertise-item"
        }, [t("p", Mt, n(`${s(w+1)}. ${g?.title}`), 1), t("p", Dt, n(g.description), 1)]))), 128))])) : k("", !0)])) : k("", !0)
      }
    }
  }),
  Nt = C(Rt, [
    ["__scopeId", "data-v-d5c27ca2"]
  ]),
  Wt = {
    class: "benefits relative z-1"
  },
  Ht = {
    class: "benefits-list container"
  },
  Ft = {
    class: "benefits-list__header"
  },
  qt = {
    class: "l1 uppercase benefits-list__title"
  },
  Vt = {
    class: "l1 benefits-list__number"
  },
  jt = {
    class: "p1 benefits-list__text"
  },
  Gt = {
    name: "AboutBenefits"
  },
  Ut = A({
    ...Gt,
    props: {
      benefits: {}
    },
    setup(e) {
      return (a, _) => (o(), i("section", Wt, [t("ul", Ht, [(o(!0), i(x, null, B(e.benefits, (c, r) => (o(), i("li", {
        key: r,
        class: "benefits-list__item"
      }, [t("div", Ft, [t("h3", qt, n(c.title), 1)]), t("span", Vt, n((r + 1).toString().padStart(2, "0")) + ". ", 1), t("p", jt, n(c.description), 1)]))), 128))])]))
    }
  }),
  Yt = C(Ut, [
    ["__scopeId", "data-v-04bf8947"]
  ]),
  Jt = {
    key: 0,
    class: "founder container"
  },
  Kt = {
    class: "photo"
  },
  Qt = {
    id: "founder-photo",
    class: "photo-wrapper"
  },
  Xt = {
    class: "info"
  },
  Zt = {
    class: "h1 first-name"
  },
  te = {
    class: "h1 last-name"
  },
  ee = {
    class: "position-wrapper"
  },
  se = {
    class: "l1 position"
  },
  oe = {
    class: "description-wrapper"
  },
  ne = {
    class: "p1 description"
  },
  ae = {
    key: 0,
    class: "socials"
  },
  ie = {
    name: "AboutFounder"
  },
  ce = A({
    ...ie,
    props: {
      data: {}
    },
    setup(e) {
      return S(() => {
        const a = document.getElementById("founder-photo");
        a && q({
          node: a,
          strength: 20
        })
      }), (a, _) => {
        const c = E,
          r = $t;
        return e.data ? (o(), i("section", Jt, [t("div", Kt, [t("div", Qt, [v(c, {
          size: "large",
          photo: e.data.photo
        }, null, 8, ["photo"])])]), t("div", Xt, [t("p", Zt, n(e.data.first_name), 1), t("p", te, n(e.data.last_name), 1), t("div", ee, [_[0] || (_[0] = t("p", {
          class: "l1 position-title"
        }, "p.", -1)), t("p", se, n(e.data.position), 1)]), t("div", oe, [t("p", ne, n(e.data.description), 1), e.data.socials ? (o(), i("div", ae, [v(r, {
          "external-data": e.data.socials
        }, null, 8, ["external-data"])])) : k("", !0)])])])) : k("", !0)
      }
    }
  }),
  le = C(ce, [
    ["__scopeId", "data-v-71dda564"]
  ]),
  re = {
    class: "team-container container"
  },
  ue = {
    class: "team-title h1"
  },
  _e = {
    class: "p1 team-department"
  },
  de = {
    class: "team-department__item"
  },
  pe = {
    class: "team-department__dropdown"
  },
  me = ["onMouseenter"],
  he = {
    class: "h3 normal members__title"
  },
  ve = {
    class: "l1 uppercase members__position"
  },
  fe = {
    class: "images-wrapper"
  },
  ge = {
    class: "images"
  },
  $e = {
    class: "images__thumb"
  },
  be = {
    class: "d-block"
  },
  ke = {
    class: "underline"
  },
  ye = {
    name: "AboutTeam"
  },
  xe = A({
    ...ye,
    props: {
      team: {}
    },
    setup(e) {
      const a = e,
        {
          $gsap: _,
          $ScrollTrigger: c
        } = z(),
        {
          t: r
        } = et(),
        {
          isDesktop: l
        } = dt(),
        s = tt("headerTheme"),
        u = 16,
        p = b(0),
        f = b(-1),
        g = b(u),
        w = b(),
        y = b(),
        $ = b(),
        T = b();
      S(() => {
        ct(), U(), Y()
      });
      const M = O(() => {
          if (!a.team) return [r("all")];
          const m = a.team.reduce((h, P) => h.concat(P.departments || []), []);
          return [r("all"), ...new Set(m)]
        }),
        L = O(() => {
          const m = a.team ?? [];
          return p.value === 0 ? m : m.filter(h => {
            if (h.departments) return h.departments.includes(M.value[p.value])
          })
        }),
        R = O(() => L.value.slice().sort((m, h) => m.order === null && h.order === null ? 0 : m.order === null ? 1 : h.order === null ? -1 : m.order - h.order)),
        V = O(() => R.value.slice(0, g.value));
      async function at() {
        if (!$.value || !y.value) return;
        const m = y.value.getBoundingClientRect().height;
        _.set($.value, {
          height: m
        }), await _.to($.value, {
          autoAlpha: 0,
          duration: .2,
          ease: "custom"
        }), g.value > u ? g.value = u : g.value = L.value.length, f.value = 0, await Q();
        const h = y.value.getBoundingClientRect().height;
        await _.to($.value, {
          height: h,
          autoAlpha: 1,
          duration: .4,
          clearProps: "all",
          ease: "custom"
        }), !l.value && J()
      }
      async function it(m) {
        if (!$.value || !y.value) return;
        const h = y.value.getBoundingClientRect().height;
        _.set($.value, {
          height: h
        }), await _.to($.value, {
          autoAlpha: 0,
          duration: .2,
          ease: "custom"
        }), p.value = m, g.value = u, await Q();
        const P = y.value.getBoundingClientRect().height;
        await _.to($.value, {
          height: P,
          autoAlpha: 1,
          duration: .4,
          clearProps: "all",
          ease: "custom"
        }), !l.value && J()
      }

      function ct() {
        w.value && c.create({
          trigger: w.value,
          start: "top top",
          onEnter: () => s.value = "light",
          onLeaveBack: () => s.value = "dark"
        })
      }

      function N() {
        T.value && T.value.classList.add("show")
      }

      function W() {
        T.value && T.value.classList.remove("show")
      }

      function lt() {
        l.value && N()
      }

      function rt() {
        l.value && W()
      }

      function ut(m) {
        l.value && (f.value = m)
      }
      let j = [],
        G;

      function U() {
        document.querySelectorAll(".members__item").forEach((h, P) => {
          j.push(c.create({
            trigger: h,
            start: "top 70%",
            end: "bottom 70%",
            scrub: !0,
            onToggle: ({
              isActive: H
            }) => {
              H && !l.value && (f.value = P)
            }
          }))
        })
      }

      function Y() {
        T.value && $.value && !l.value && (G = c.create({
          trigger: $.value,
          start: "top 70%",
          end: "bottom 70%",
          scrub: !0,
          onEnter: () => l.value ? "" : N(),
          onEnterBack: () => l.value ? "" : N(),
          onLeaveBack: () => l.value ? "" : W(),
          onLeave: () => l.value ? "" : W()
        }))
      }

      function J() {
        j.forEach(m => m.kill()), G.kill(), U(), Y()
      }
      return (m, h) => {
        const P = kt,
          H = E;
        return o(), i("section", {
          id: "team",
          ref_key: "section",
          ref: w,
          class: "team"
        }, [t("div", re, [t("h2", ue, n(m.$t("team")), 1), t("div", _e, [t("span", de, n(m.$t("department")), 1), t("div", pe, [v(P, {
          options: d(M),
          onOptionChange: it
        }, null, 8, ["options"])])]), t("div", {
          ref_key: "membersWrapper",
          ref: $,
          class: "members-wrapper"
        }, [t("ul", {
          ref_key: "membersList",
          ref: y,
          class: "members",
          onMouseenter: lt,
          onMouseleave: rt
        }, [(o(!0), i(x, null, B(d(V), (D, I) => (o(), i("li", {
          key: I,
          class: "members__item",
          onMouseenter: ls => ut(I)
        }, [t("div", {
          class: X(["members__content", {
            "is-active": d(f) === I
          }])
        }, [t("h3", he, n(D.name), 1), t("p", ve, [h[0] || (h[0] = t("span", {
          class: "members__span"
        }, "p.", -1)), t("span", null, n(D.position), 1)])], 2)], 40, me))), 128))], 544)], 512), t("div", fe, [t("div", {
          ref_key: "imagesBg",
          ref: T,
          class: "images-bg"
        }, [h[1] || (h[1] = t("div", {
          class: "images-mask"
        }, null, -1)), t("ul", ge, [(o(!0), i(x, null, B(d(V), (D, I) => (o(), i("li", {
          key: I,
          class: X(["images__item", {
            "is-active": d(f) === I
          }])
        }, [t("div", $e, [v(H, {
          size: "large",
          photo: D.photo
        }, null, 8, ["photo"])])], 2))), 128))])], 512)]), d(L).length > u ? (o(), i("button", {
          key: 0,
          class: "p1 text-start team-button",
          onClick: at
        }, [t("span", be, n(d(g) === u ? "Load" : "Show"), 1), t("span", ke, n(d(g) === u ? "More" : "Less") + " people", 1)])) : k("", !0)])], 512)
      }
    }
  }),
  Ae = C(xe, [
    ["__scopeId", "data-v-723712d8"]
  ]),
  we = {
    id: "cta-bg",
    class: "background"
  },
  Te = {
    class: "cta-button"
  },
  Be = {
    class: "l1 uppercase underline cta-button__text"
  },
  Ce = {
    name: "AboutCTA"
  },
  Pe = A({
    ...Ce,
    props: {
      title: {},
      photo: {}
    },
    setup(e) {
      const {
        $ScrollTrigger: a
      } = z(), _ = st(), c = b(), r = b();
      S(() => {
        l();
        const s = document.getElementById("cta-bg");
        s && q({
          node: s,
          strength: 35
        })
      });

      function l() {
        c.value && a.create({
          trigger: r.value,
          start: "top top",
          once: !0,
          onEnter: () => {
            c.value && (c.value.style.opacity = "1", nt(c.value))
          }
        })
      }
      return (s, u) => {
        const p = E,
          f = ot,
          g = bt;
        return o(), i("section", {
          ref_key: "section",
          ref: r,
          class: "cta container"
        }, [t("div", we, [v(p, {
          photo: e.photo
        }, null, 8, ["photo"])]), t("div", Te, [t("p", Be, n(s.$t("about.see_vacancies")), 1)]), v(f, {
          to: d(_)("/career"),
          class: "cta-link"
        }, null, 8, ["to"]), t("h2", {
          ref_key: "titleEl",
          ref: c,
          class: "h2 normal cta-title"
        }, n(e.title), 513), v(g, {
          container: d(r),
          "cursor-text": s.$t("about.see_vacancies")
        }, null, 8, ["container", "cursor-text"])], 512)
      }
    }
  }),
  Se = C(Pe, [
    ["__scopeId", "data-v-13cc5551"]
  ]),
  Ie = {
    key: 0,
    class: "achievements container relative"
  },
  Ee = {
    class: "achievements-list"
  },
  ze = {
    class: "achievements-list__title relative z-1"
  },
  Le = {
    class: "h1"
  },
  Me = {
    class: "h1"
  },
  De = {
    class: "l1 uppercase achievements-list__description"
  },
  Oe = {
    class: "images-wrapper absolute z-1"
  },
  Re = {
    class: "images-list"
  },
  Ne = {
    key: 1,
    class: "socials container"
  },
  We = {
    class: "l1 relative z-1 socials__title"
  },
  He = {
    class: "p1 relative z-1 socials__description"
  },
  Fe = ["href"],
  qe = {
    name: "AboutAchievements"
  },
  Ve = A({
    ...qe,
    props: {
      data: {}
    },
    setup(e) {
      const {
        $gsap: a,
        $ScrollTrigger: _
      } = z();
      S(() => {
        c(), r()
      });

      function c() {
        a.from(".images-list", {
          scrollTrigger: {
            trigger: ".images-list",
            start: "-25% bottom",
            end: "bottom top",
            scrub: !0,
            invalidateOnRefresh: !0
          },
          yPercent: -25,
          ease: "none"
        })
      }

      function r() {
        const l = a.timeline({});
        document.querySelectorAll(".images-list__item").forEach(s => {
          l.to(s, {
            visibility: "visible",
            duration: 1
          })
        }), _.create({
          animation: l,
          trigger: ".images-list",
          start: "center bottom",
          end: "-25% top",
          invalidateOnRefresh: !0,
          scrub: !0
        })
      }
      return (l, s) => {
        const u = E;
        return o(), i(x, null, [e.data ? (o(), i("section", Ie, [t("ul", Ee, [(o(!0), i(x, null, B(e.data.stats, (p, f) => (o(), i("li", {
          key: f,
          class: "achievements-list__item"
        }, [t("h3", ze, [t("span", Le, [F(n(p.number), 1), s[0] || (s[0] = t("span", {
          class: "primary-sup"
        }, "+", -1))]), t("span", Me, n(p.title), 1)]), t("p", De, n(p.description), 1)]))), 128))]), t("div", Oe, [t("ul", Re, [(o(!0), i(x, null, B(e.data.photos, (p, f) => (o(), i("li", {
          key: f,
          class: "images-list__item"
        }, [v(u, {
          photo: p,
          size: "large"
        }, null, 8, ["photo"])]))), 128))])])])) : k("", !0), e.data ? (o(), i("section", Ne, [t("p", We, n(e.data.title), 1), t("p", He, n(e.data.description), 1), (o(!0), i(x, null, B(e.data.socials, (p, f) => (o(), i("div", {
          key: f,
          class: "relative z-1 link-wrapper"
        }, [t("a", {
          href: p?.link,
          target: "_blank",
          rel: "nofollow",
          class: "h1 link"
        }, [s[1] || (s[1] = F(" [", -1)), t("span", null, n(p.title), 1), s[2] || (s[2] = F("] ", -1))], 8, Fe)]))), 128))])) : k("", !0)], 64)
      }
    }
  }),
  je = C(Ve, [
    ["__scopeId", "data-v-047a9ef0"]
  ]),
  Ge = {
    key: 0,
    id: "awards",
    class: "awards"
  },
  Ue = {
    class: "inner relative z-1 container"
  },
  Ye = {
    class: "h2 title"
  },
  Je = {
    key: 0,
    class: "list col-18"
  },
  Ke = {
    class: "l1--link z-1 name"
  },
  Qe = {
    class: "l1--link z-1 project"
  },
  Xe = {
    class: "l1--link z-1 location"
  },
  Ze = {
    class: "l1--link z-1 year"
  },
  ts = {
    class: "p1 description"
  },
  es = {
    class: "background-wrapper"
  },
  ss = {
    id: "awards-photo",
    class: "photo"
  },
  os = {
    name: "AboutAwards"
  },
  ns = A({
    ...os,
    props: {
      data: {}
    },
    setup(e) {
      return S(() => {
        const a = document.getElementById("awards-photo");
        a && q({
          node: a,
          strength: 35
        })
      }), (a, _) => {
        const c = ot,
          r = E;
        return e.data ? (o(), i("section", Ge, [t("div", Ue, [t("p", Ye, n(e.data.title), 1), _[0] || (_[0] = t("p", {
          class: "h2 years"
        }, "17-24", -1)), e.data.awards ? (o(), i("ul", Je, [(o(!0), i(x, null, B(e.data.awards, (l, s) => (o(), i("li", {
          key: s,
          class: "item"
        }, [v(c, {
          to: "/" + l?.link,
          class: "item-link container"
        }, {
          default: pt(() => [t("p", Ke, n(l.name), 1), t("p", Qe, n(l.project), 1), t("p", Xe, n(l.location), 1), t("p", Ze, n(l.year), 1)]),
          _: 2
        }, 1032, ["to"])]))), 128))])) : k("", !0), t("p", ts, n(e.data.description), 1)]), t("div", es, [t("div", ss, [v(r, {
          photo: e.data.photo
        }, null, 8, ["photo"])])])])) : k("", !0)
      }
    }
  }),
  as = C(ns, [
    ["__scopeId", "data-v-d54a7aa7"]
  ]),
  is = {
    key: 0,
    class: "page about-page"
  },
  cs = {
    name: "AboutPage"
  },
  $s = A({
    ...cs,
    async setup(e) {
      let a, _;
      const c = et().locale.value,
        {
          $ScrollTrigger: r
        } = z(),
        l = st(),
        {
          data: s
        } = ([a, _] = mt(() => vt("about-us", () => $fetch("/api/pages/pageAbout", {
          method: "post",
          body: {
            locale: c
          }
        }))), a = await a, _(), a);
      return ft(s?.value?.meta), ht(() => r.killAll()), (u, p) => {
        const f = wt,
          g = Nt,
          w = Yt,
          y = le,
          $ = Ae,
          T = Se,
          M = je,
          L = as,
          R = yt;
        return o(), i("div", null, [d(s) ? (o(), i("main", is, [v(f, {
          data: d(s).hero
        }, null, 8, ["data"]), v(g, {
          data: d(s).about,
          "dark-header": ""
        }, null, 8, ["data"]), v(w, {
          benefits: d(s)?.benefits
        }, null, 8, ["benefits"]), d(s).founder ? (o(), Z(y, {
          key: 0,
          data: d(s).founder
        }, null, 8, ["data"])) : k("", !0), v($, {
          team: d(s)?.team
        }, null, 8, ["team"]), v(T, {
          title: d(s)?.cta?.title,
          photo: d(s)?.cta?.photo
        }, null, 8, ["title", "photo"]), v(M, {
          data: d(s)?.achievements
        }, null, 8, ["data"]), d(s).awards ? (o(), Z(L, {
          key: 1,
          data: d(s).awards
        }, null, 8, ["data"])) : k("", !0)])) : k("", !0), v(R, {
          "link-text": u.$t("see_open_positions"),
          link: d(l)("/career")
        }, null, 8, ["link-text", "link"])])
      }
    }
  });
export {
  $s as
  default
};