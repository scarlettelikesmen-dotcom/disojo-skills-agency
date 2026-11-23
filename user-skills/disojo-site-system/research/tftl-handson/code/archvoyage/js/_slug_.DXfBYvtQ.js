/* https://archvoyage.ae/_nuxt/_slug_.DXfBYvtQ.js */
import {
  _ as Dt
} from "./MoreButton.BK_q1TjK.js";
import {
  d as x,
  u as R,
  r as g,
  c as Rt,
  w as C,
  o as W,
  n as I,
  x as Wt,
  a as s,
  b as d,
  e,
  j as m,
  g as f,
  h as Mt,
  t as j,
  z as Ht,
  _ as zt,
  k as O,
  p as jt,
  l as Bt,
  m as E,
  D as y,
  F as q,
  i as A,
  y as V,
  v as G,
  B as Vt,
  E as Ft,
  q as Nt,
  G as Ot,
  s as Gt,
  C as M
} from "./entry.YPAKmh3d.js";
import {
  t as U
} from "./titleAnim.CszaPWUV.js";
import {
  _ as Ut,
  a as Jt,
  b as Kt,
  d as Qt,
  e as Xt,
  f as Yt,
  g as Zt,
  c as kt
} from "./Slider.RgheHn6-.js";
import {
  p as Q,
  _ as bt
} from "./Contact.D-xzsxJa.js";
import {
  S as te
} from "./swiper.COee7uVM.js";
import {
  _ as ee
} from "./Plus.DQtF0hp8.js";
import {
  s as ne,
  _ as ie
} from "./setPageMeta.DvPDcq0E.js";
import "./Button.DsjJ-bLs.js";
import "./DragCursor.DPcV-VC9.js";
const se = v => (jt("data-v-15426353"), v = v(), Bt(), v),
  oe = {
    class: "header"
  },
  re = se(() => e("div", {
    class: "header-gap"
  }, null, -1)),
  ae = ["innerHTML"],
  pe = {
    class: "status-bar container"
  },
  ce = {
    class: "location p1"
  },
  _e = {
    class: "status p1"
  },
  de = {
    class: "hero-image"
  },
  le = {
    name: "ProjectHero"
  },
  ue = x({
    ...le,
    props: {
      title: {},
      location: {},
      status: {},
      photo: {}
    },
    setup(v) {
      const o = v,
        {
          $gsap: u
        } = Ht(),
        c = R("preloaderDone"),
        i = g(),
        n = Rt(() => {
          var a;
          return (a = o.title) == null ? void 0 : a.replace("<p>", "").replace("</p>", "")
        });
      C(c, a => {
        a && _()
      }), W(async () => {
        await I(), c.value && _()
      });

      function _() {
        const a = i.value;
        if (!a) return;
        const p = a.querySelector(".title");
        p && U(p);
        const w = a.querySelector(".hero-image");
        w && Wt(w, {
          delay: .4
        });
        const P = a.querySelector(".back-link"),
          h = a.querySelector(".location"),
          l = a.querySelector(".status");
        u.fromTo([P, h, l], {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          yPercent: 100
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          yPercent: 0,
          clearProps: "all",
          duration: .6,
          delay: .6,
          stagger: .2,
          ease: "custom"
        })
      }
      return (a, p) => {
        const w = Dt,
          P = zt,
          h = O;
        return s(), d("section", {
          ref_key: "sectionHero",
          ref: i,
          class: "hero"
        }, [e("header", oe, [re, e("h1", {
          class: "title h2",
          innerHTML: m(n)
        }, null, 8, ae), e("div", pe, [f(P, {
          class: "back-link",
          to: "/projects"
        }, {
          default: Mt(() => [f(w, {
            text: "All projects",
            reverse: ""
          })]),
          _: 1
        }), e("p", ce, j(a.location), 1), e("p", _e, j(a.status), 1)])]), e("div", de, [f(h, {
          photo: a.photo
        }, null, 8, ["photo"])])], 512)
      }
    }
  }),
  he = E(ue, [
    ["__scopeId", "data-v-15426353"]
  ]),
  me = {
    class: "left-side"
  },
  fe = {
    class: "photo-wrapper"
  },
  ve = {
    class: "description-wrapper"
  },
  ye = ["innerHTML"],
  $e = ["innerHTML"],
  ge = {
    class: "right-side"
  },
  we = {
    class: "photo-wrapper"
  },
  Te = {
    key: 0,
    class: "description-mobile"
  },
  Le = {
    class: "description-title p1 medium"
  },
  Pe = {
    class: "p1"
  },
  Me = x({
    __name: "RandomPhotoWithLeftDescription",
    props: {
      photoLeft: {},
      photoRight: {},
      title: {},
      description: {}
    },
    setup(v) {
      const o = R("transitionEnd"),
        u = g(!1),
        c = g();
      C(o, n => {
        n && i()
      }), W(async () => {
        await I(), o.value && i()
      });

      function i() {
        if (u.value) return;
        u.value = !0;
        const n = c.value;
        if (!n) return;
        const _ = n.querySelectorAll(".photo-wrapper");
        _ != null && _.length && _.forEach(a => {
          Q(a)
        })
      }
      return (n, _) => {
        const a = O;
        return s(), d("div", {
          ref_key: "sectionEl",
          ref: c,
          class: "photos-with-description container"
        }, [e("div", me, [e("div", fe, [f(a, {
          photo: n.photoLeft
        }, null, 8, ["photo"])]), e("div", ve, [e("div", {
          class: "description-title p1 medium",
          innerHTML: n.title
        }, null, 8, ye), e("div", {
          class: "p1",
          innerHTML: n.description
        }, null, 8, $e)])]), e("div", ge, [e("div", we, [f(a, {
          photo: n.photoRight
        }, null, 8, ["photo"])])]), n.title ? (s(), d("div", Te, [e("p", Le, j(n.title), 1), e("p", Pe, j(n.description), 1)])) : y("", !0)], 512)
      }
    }
  }),
  He = E(Me, [
    ["__scopeId", "data-v-bfd9738f"]
  ]),
  J = v => (jt("data-v-f3c53017"), v = v(), Bt(), v),
  je = {
    class: "photo-slides"
  },
  Be = {
    class: "description-wrapper"
  },
  Se = {
    class: "description-slide-title-wrapper"
  },
  xe = ["innerHTML"],
  Ee = ["innerHTML"],
  Ce = {
    class: "slider-controls"
  },
  Ie = J(() => e("div", {
    class: "slider-button-circle"
  }, null, -1)),
  qe = J(() => e("svg", {
    class: "slider-button-icon",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M11.3711 19.939L17.1406 14.1694L11.3711 8.3999",
    stroke: "#212121"
  })], -1)),
  Ae = [Ie, qe],
  De = J(() => e("div", {
    class: "slider-button-circle"
  }, null, -1)),
  Re = J(() => e("svg", {
    class: "slider-button-icon",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M11.3711 19.939L17.1406 14.1694L11.3711 8.3999",
    stroke: "#212121"
  })], -1)),
  We = [De, Re],
  H = .3,
  ze = x({
    __name: "PlanSlider",
    props: {
      slides: {}
    },
    setup(v) {
      const {
        $gsap: o
      } = Ht(), u = g(), c = R("transitionEnd"), i = g(!1), n = g(), _ = g(0), a = g(!1), p = g();
      C(c, r => {
        r && w()
      }), W(async () => {
        await I(), c.value && w(), setTimeout(P, 500)
      });

      function w() {
        i.value || (i.value = !0, n.value && Q(n.value))
      }

      function P() {
        if (window.innerWidth > 1024 || !p.value) return;
        const $ = [...p.value.querySelectorAll(".description-slide")].map(B => B.getBoundingClientRect().height),
          L = Math.max(...$);
        p.value.style.height = `${L}px`
      }
      async function h(r) {
        if (!p.value || !n.value) return;
        const $ = p.value.querySelectorAll(".description-slide"),
          L = n.value.querySelectorAll(".photo-slide"),
          B = L[_.value],
          S = $[_.value];
        await I(), _.value = r === "next" ? _.value + 1 : _.value - 1;
        const D = L[_.value],
          K = $[_.value];
        return {
          prev: {
            photo: B,
            infoBlock: S
          },
          current: {
            photo: D,
            infoBlock: K
          }
        }
      }
      async function l() {
        if (a.value) return;
        const r = await h("next");
        r && (N({
          prev: r.prev.photo,
          current: r.current.photo
        }), await z(r.prev), F(r.current))
      }
      async function T() {
        if (a.value) return;
        const r = await h("prev");
        r && (N({
          prev: r.prev.photo,
          current: r.current.photo
        }), await z(r.prev), F(r.current))
      }
      async function z(r) {
        const $ = window.innerWidth < 1025;
        a.value = !0;
        const L = r.infoBlock.querySelector(".description-slide-title"),
          B = r.infoBlock.querySelector(".description-slide-text");
        L && B && (o.fromTo(L, {
          yPercent: 0,
          y: 0,
          rotate: 0
        }, {
          yPercent: $ ? -180 : -150,
          y: 0,
          rotate: -5,
          duration: H,
          delay: $ ? H / 4 : H / 4 * 2,
          ease: "custom"
        }), await o.fromTo(B, {
          opacity: 1
        }, {
          opacity: 0,
          duration: H,
          delay: $ ? H / 4 * 2 : H / 4 * 3,
          ease: "custom"
        }))
      }
      async function F(r) {
        const $ = window.innerWidth < 1025,
          L = r.infoBlock.querySelector(".description-slide-title"),
          B = r.infoBlock.querySelector(".description-slide-text");
        L && B && (o.fromTo(L, {
          yPercent: $ ? 180 : 150,
          y: 0,
          rotate: 5
        }, {
          yPercent: 0,
          y: 0,
          rotate: 0,
          duration: H,
          delay: $ ? H / 4 : H / 4 * 2,
          ease: "custom"
        }), await o.fromTo(B, {
          opacity: 0
        }, {
          opacity: 1,
          duration: H,
          delay: $ ? H / 4 * 2 : H / 4 * 3,
          ease: "custom"
        }), a.value = !1)
      }

      function N(r) {
        const $ = r.prev.querySelector(".wrapper");
        r.prev && o.fromTo(r.prev, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)"
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: H * 3.1,
          ease: "custom"
        }), $ && o.fromTo($, {
          yPercent: 0,
          rotate: 0,
          scale: 1,
          opacity: 1
        }, {
          yPercent: -40,
          rotate: -8,
          scale: 1.2,
          opacity: .5,
          clearProps: "all",
          duration: H * 3.1,
          ease: "custom"
        });
        const L = r.current.querySelector(".wrapper");
        r.current && o.fromTo(r.current, {
          clipPath: "polygon(0% 100%, 100% 120%, 100% 100%, 0% 100%)"
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: H * 3.1,
          ease: "custom"
        }), L && o.fromTo(L, {
          yPercent: 30,
          scale: 1.2
        }, {
          yPercent: 0,
          scale: 1,
          duration: H * 3.1,
          ease: "custom"
        })
      }
      return (r, $) => {
        var B;
        const L = O;
        return s(), d("div", {
          ref_key: "sectionEl",
          ref: u,
          class: "photo-with-text-right container"
        }, [e("div", {
          ref_key: "photoEl",
          ref: n,
          class: "plan-photo"
        }, [e("div", je, [(s(!0), d(q, null, A(r.slides, (S, D) => (s(), d("div", {
          key: D,
          class: "photo-slide"
        }, [f(L, {
          photo: S.photo
        }, null, 8, ["photo"])]))), 128))])], 512), e("div", Be, [e("div", {
          ref_key: "descriptionSlides",
          ref: p,
          class: "description-slides"
        }, [(s(!0), d(q, null, A(r.slides, (S, D) => (s(), d("div", {
          key: D,
          class: "description-slide"
        }, [e("div", Se, [e("div", {
          class: "p1 medium description-slide-title",
          innerHTML: S == null ? void 0 : S.title
        }, null, 8, xe)]), e("div", {
          class: "p1 description-slide-text",
          innerHTML: S == null ? void 0 : S.description
        }, null, 8, Ee)]))), 128))], 512), e("div", Ce, [e("button", {
          class: V(["slider-button slider-button--prev", {
            disabled: m(_) === 0
          }]),
          onClick: T
        }, Ae, 2), e("button", {
          class: V(["slider-button slider-button--next", {
            disabled: ((B = r.slides) == null ? void 0 : B.length) && m(_) === r.slides.length - 1
          }]),
          onClick: l
        }, We, 2)])])], 512)
      }
    }
  }),
  Ve = E(ze, [
    ["__scopeId", "data-v-f3c53017"]
  ]),
  Fe = {
    class: "details-consultants container"
  },
  Ne = ["innerHTML"],
  Oe = ["innerHTML"],
  Ge = {
    class: "consultants-grid"
  },
  Ue = {
    class: "consultants-line"
  },
  Je = {
    class: "p1"
  },
  Ke = {
    class: "consultants-position p1"
  },
  Qe = x({
    __name: "DetailsConsultants",
    props: {
      title: {},
      description: {},
      consultants: {}
    },
    setup(v) {
      return (o, u) => {
        const c = G;
        return s(), d("div", Fe, [e("div", {
          class: "title h6 medium",
          innerHTML: o.title
        }, null, 8, Ne), o.description ? (s(), d("div", {
          key: 0,
          class: "description h6",
          innerHTML: o.description
        }, null, 8, Oe)) : y("", !0), e("div", Ge, [e("div", Ue, [f(c)]), (s(!0), d(q, null, A(o.consultants, (i, n) => (s(), d("div", {
          key: n,
          class: "consultants-item"
        }, [e("p", Je, j(i == null ? void 0 : i.name), 1), e("p", Ke, j(i == null ? void 0 : i.position), 1)]))), 128))])])
      }
    }
  }),
  Xe = E(Qe, [
    ["__scopeId", "data-v-705d131f"]
  ]),
  Ye = {
    class: "details-awards container"
  },
  Ze = ["innerHTML"],
  ke = ["innerHTML"],
  be = {
    class: "awards"
  },
  tn = {
    class: "awards-line"
  },
  en = {
    class: "award-year p1"
  },
  nn = {
    class: "award-name p1"
  },
  sn = {
    class: "award-location p1"
  },
  on = {
    class: "award-info-mobile p1"
  },
  rn = x({
    __name: "DetailsAwards",
    props: {
      title: {},
      description: {},
      awards: {}
    },
    setup(v) {
      return (o, u) => {
        const c = G;
        return s(), d("div", Ye, [e("div", {
          class: "title h6 medium",
          innerHTML: o.title
        }, null, 8, Ze), o.description ? (s(), d("div", {
          key: 0,
          class: "description h6",
          innerHTML: o.description
        }, null, 8, ke)) : y("", !0), e("div", be, [e("div", tn, [f(c)]), (s(!0), d(q, null, A(o.awards, (i, n) => (s(), d("div", {
          key: n,
          class: "awards-item"
        }, [e("p", en, j(i == null ? void 0 : i.year), 1), e("p", nn, j(i == null ? void 0 : i.name), 1), e("p", sn, j(i == null ? void 0 : i.competition), 1), e("p", on, j(i == null ? void 0 : i.year) + " ‒ " + j(i == null ? void 0 : i.name) + " ‒ " + j(i == null ? void 0 : i.competition), 1)]))), 128))])])
      }
    }
  }),
  an = E(rn, [
    ["__scopeId", "data-v-c1cfd57f"]
  ]),
  pn = {
    class: "benefits-block"
  },
  cn = ["innerHTML"],
  _n = {
    class: "benefits-list swiper"
  },
  dn = {
    class: "swiper-wrapper"
  },
  ln = {
    class: "item-header"
  },
  un = {
    class: "p3 item-number"
  },
  hn = ["innerHTML"],
  mn = {
    class: "item-line"
  },
  fn = ["innerHTML"],
  vn = {
    name: "ProjectBlockBenefits"
  },
  yn = x({
    ...vn,
    props: {
      title: {},
      items: {}
    },
    setup(v) {
      const o = R("transitionEnd"),
        u = g(!1),
        c = g();
      C(o, p => {
        p && a()
      });
      const i = {
        speed: 700,
        slidesPerView: "auto",
        preventClicks: !0,
        touchStartPreventDefault: !1
      };
      let n;
      W(async () => {
        await I(), _(), o.value && a()
      }), Vt(() => {
        var p;
        (p = n == null ? void 0 : n.destroy) == null || p.call(n)
      });

      function _() {
        n = new te(".benefits-list.swiper", i)
      }

      function a() {
        u.value || (u.value = !0, c.value && U(c.value))
      }
      return (p, w) => {
        const P = G;
        return s(), d("div", pn, [e("div", {
          ref_key: "titleEl",
          ref: c,
          class: "h2 title",
          innerHTML: p.title
        }, null, 8, cn), e("div", _n, [e("div", dn, [(s(!0), d(q, null, A(p.items, (h, l) => (s(), d("div", {
          key: l,
          class: "benefits-item swiper-slide"
        }, [e("div", ln, [e("p", un, j(`${"0".repeat(Math.max(2-(l+1).toString().length,0))}${l+1}`), 1), e("div", {
          class: "h6 medium item-title",
          innerHTML: h == null ? void 0 : h.title
        }, null, 8, hn), e("div", mn, [f(P)])]), e("div", {
          class: "p1 item__description",
          innerHTML: h == null ? void 0 : h.description
        }, null, 8, fn)]))), 128))])])])
      }
    }
  }),
  $n = E(yn, [
    ["__scopeId", "data-v-8ab285ad"]
  ]),
  gn = {
    class: "concept-block container"
  },
  wn = ["innerHTML"],
  Tn = ["innerHTML"],
  Ln = {
    name: "ProjectBlockConcept"
  },
  Pn = x({
    ...Ln,
    props: {
      title: {},
      description: {}
    },
    setup(v) {
      return (o, u) => (s(), d("div", gn, [e("div", {
        class: "h6 concept-title",
        innerHTML: o.title
      }, null, 8, wn), e("div", {
        class: "p1",
        innerHTML: o.description
      }, null, 8, Tn)]))
    }
  }),
  Mn = E(Pn, [
    ["__scopeId", "data-v-c44015ea"]
  ]),
  Hn = {
    class: "container"
  },
  jn = ["innerHTML"],
  Bn = {
    class: "more-info__content"
  },
  Sn = {
    class: "more-info__blocks"
  },
  xn = {
    class: "more-info__block"
  },
  En = ["innerHTML"],
  Cn = {
    class: "more-info__items"
  },
  In = {
    class: "more-info__items-line"
  },
  qn = ["onClick"],
  An = {
    class: "more-info__item-header"
  },
  Dn = {
    class: "p3"
  },
  Rn = ["innerHTML"],
  Wn = {
    class: "more-info__item-icon"
  },
  zn = {
    class: "more-info__item-content"
  },
  Vn = ["innerHTML"],
  Fn = {
    class: "more-info__item-line"
  },
  Nn = {
    class: "more-info__block"
  },
  On = ["innerHTML"],
  Gn = {
    class: "more-info__items"
  },
  Un = {
    class: "more-info__items-line"
  },
  Jn = ["onClick"],
  Kn = {
    class: "more-info__item-header"
  },
  Qn = {
    class: "p3"
  },
  Xn = ["innerHTML"],
  Yn = {
    class: "more-info__item-icon"
  },
  Zn = {
    class: "more-info__item-content"
  },
  kn = ["innerHTML"],
  bn = {
    class: "more-info__item-line"
  },
  ti = x({
    __name: "MoreInfo",
    props: {
      title: {},
      benefitsTitle1: {},
      benefitsTitle2: {},
      benefitsItems1: {},
      benefitsItems2: {}
    },
    setup(v) {
      const o = R("transitionEnd"),
        u = g(!1),
        c = g(-1),
        i = g();
      C(o, p => {
        p && n()
      }), C(c, () => {
        a()
      }), W(async () => {
        await I(), o.value && n()
      });

      function n() {
        if (u.value) return;
        u.value = !0;
        const p = i.value;
        if (!p) return;
        const w = p.querySelector(".title");
        w && U(w)
      }

      function _(p) {
        c.value = p === c.value ? -1 : p
      }

      function a() {
        if (!i.value) return;
        i.value.querySelectorAll(".more-info__item").forEach((w, P) => {
          var h;
          if (P === c.value) {
            const l = w.querySelector(".more-info__item-content"),
              T = (h = w.querySelector(".more-info__item-description")) == null ? void 0 : h.getBoundingClientRect().height;
            l && (l.style.maxHeight = `${T}px`)
          } else {
            const l = w.querySelector(".more-info__item-content");
            l && (l.style.maxHeight = "0px")
          }
        })
      }
      return (p, w) => {
        const P = G,
          h = ee;
        return s(), d("section", {
          ref_key: "sectionEl",
          ref: i,
          class: "more-info"
        }, [e("div", Hn, [e("div", {
          class: "h3 title",
          innerHTML: p.title
        }, null, 8, jn), e("div", Bn, [e("div", Sn, [e("div", xn, [e("div", {
          class: "h6 more-info__block-title",
          innerHTML: p.benefitsTitle1
        }, null, 8, En), e("div", Cn, [e("div", In, [f(P), (s(!0), d(q, null, A(p.benefitsItems1, (l, T) => (s(), d("div", {
          key: T,
          class: V(["more-info__item", {
            active: m(c) === T
          }]),
          onClick: z => _(T)
        }, [e("div", An, [e("p", Dn, j(`.${"0".repeat(Math.max(2-(T+1).toString().length,0))}${T+1}`), 1), e("div", {
          class: "p1",
          innerHTML: l == null ? void 0 : l.title
        }, null, 8, Rn), e("div", Wn, [f(h)])]), e("div", zn, [e("div", {
          class: "p1 more-info__item-description",
          innerHTML: l == null ? void 0 : l.description
        }, null, 8, Vn)]), e("div", Fn, [f(P)])], 10, qn))), 128))])])]), e("div", Nn, [e("div", {
          class: "h6 more-info__block-title",
          innerHTML: p.benefitsTitle2
        }, null, 8, On), e("div", Gn, [e("div", Un, [f(P), (s(!0), d(q, null, A(p.benefitsItems2, (l, T) => (s(), d("div", {
          key: T,
          class: V(["more-info__item", {
            active: m(c) === T + 3
          }]),
          onClick: z => _(T + 3)
        }, [e("div", Kn, [e("p", Qn, j(`.${"0".repeat(Math.max(2-(T+1).toString().length,0))}${T+1}`), 1), e("div", {
          class: "p1",
          innerHTML: l == null ? void 0 : l.title
        }, null, 8, Xn), e("div", Yn, [f(h)])]), e("div", Zn, [e("div", {
          class: "p1 more-info__item-description",
          innerHTML: l == null ? void 0 : l.description
        }, null, 8, kn)]), e("div", bn, [f(P)])], 10, Jn))), 128))])])])])])])], 512)
      }
    }
  }),
  ei = E(ti, [
    ["__scopeId", "data-v-413fd314"]
  ]),
  ni = {
    class: "horizontal-photo"
  },
  ii = x({
    __name: "HorizontalPhoto",
    props: {
      photo: {}
    },
    setup(v) {
      const o = R("transitionEnd"),
        u = g(!1),
        c = g();
      C(o, n => {
        n && i()
      }), W(async () => {
        await I(), o.value && i()
      });

      function i() {
        if (u.value) return;
        u.value = !0;
        const n = c.value;
        n && Q(n)
      }
      return (n, _) => {
        const a = O;
        return s(), d("div", ni, [e("div", {
          ref_key: "photoEl",
          ref: c,
          class: "photo-wrapper"
        }, [f(a, {
          photo: n.photo
        }, null, 8, ["photo"])], 512)])
      }
    }
  }),
  si = E(ii, [
    ["__scopeId", "data-v-4c214f2d"]
  ]),
  oi = ["innerHTML"],
  ri = {
    class: "descriptions-wrapper"
  },
  ai = {
    class: "description-wrapper"
  },
  pi = ["innerHTML"],
  ci = {
    class: "description-wrapper"
  },
  _i = ["innerHTML"],
  di = x({
    __name: "BigTitleWithDescription",
    props: {
      title: {},
      description1: {},
      description2: {}
    },
    setup(v) {
      const o = R("transitionEnd"),
        u = g(!1),
        c = g();
      C(o, n => {
        n && i()
      }), W(async () => {
        await I(), o.value && i()
      });

      function i() {
        if (u.value) return;
        u.value = !0;
        const n = c.value;
        if (!n) return;
        const _ = n.querySelector(".title");
        _ && U(_)
      }
      return (n, _) => (s(), d("div", {
        ref_key: "sectionEl",
        ref: c,
        class: "title-with-description container"
      }, [e("div", {
        class: "h3 title",
        innerHTML: n.title
      }, null, 8, oi), e("div", ri, [e("div", ai, [e("div", {
        class: "p1",
        innerHTML: n.description1
      }, null, 8, pi)]), e("div", ci, [e("div", {
        class: "p1",
        innerHTML: n.description2
      }, null, 8, _i)])])], 512))
    }
  }),
  li = E(di, [
    ["__scopeId", "data-v-7702ef6c"]
  ]),
  ui = {
    class: "page project-page"
  },
  hi = {
    name: "ProjectPage"
  },
  Mi = x({
    ...hi,
    async setup(v) {
      var a;
      let o, u;
      const i = Ft().params.slug,
        {
          data: n,
          error: _
        } = ([o, u] = Nt(() => Gt(`one-project-${i}`, () => $fetch("/api/pages/pageOneProject", {
          method: "post",
          body: {
            slug: i
          }
        }))), o = await o, u(), o);
      return _.value && Ot({
        statusCode: 404,
        statusMessage: "page not found"
      }), ne((a = n == null ? void 0 : n.value) == null ? void 0 : a.meta), (p, w) => {
        const P = he,
          h = Ut,
          l = Jt,
          T = Kt,
          z = He,
          F = Qt,
          N = Ve,
          r = Xt,
          $ = Yt,
          L = Xe,
          B = an,
          S = Zt,
          D = $n,
          K = Mn,
          St = ei,
          xt = si,
          Et = li,
          Ct = kt,
          It = bt,
          qt = ie;
        return s(), d("main", ui, [f(qt, null, {
          default: Mt(() => {
            var X, Y, Z, k, b, tt, et, nt, it, st, ot, rt, at, pt, ct, _t, dt, lt, ut, ht, mt, ft, vt, yt, $t, gt, wt, Tt, Lt;
            return [f(P, {
              title: (Y = (X = m(n)) == null ? void 0 : X.hero) == null ? void 0 : Y.title,
              location: (k = (Z = m(n)) == null ? void 0 : Z.hero) == null ? void 0 : k.location,
              status: (tt = (b = m(n)) == null ? void 0 : b.hero) == null ? void 0 : tt.status,
              photo: (nt = (et = m(n)) == null ? void 0 : et.hero) == null ? void 0 : nt.photo
            }, null, 8, ["title", "location", "status", "photo"]), f(h, {
              title: (st = (it = m(n)) == null ? void 0 : it.overview) == null ? void 0 : st.title,
              description: (rt = (ot = m(n)) == null ? void 0 : ot.overview) == null ? void 0 : rt.description,
              categories: (pt = (at = m(n)) == null ? void 0 : at.overview) == null ? void 0 : pt.projectTypes,
              "add-info": (_t = (ct = m(n)) == null ? void 0 : ct.overview) == null ? void 0 : _t.addInfo
            }, null, 8, ["title", "description", "categories", "add-info"]), (s(!0), d(q, null, A((dt = m(n)) == null ? void 0 : dt.constructorBlocks, (t, At) => {
              var Pt;
              return s(), d("section", {
                key: At,
                class: V(["constructor-block", {
                  "constructor-block--gray": (t == null ? void 0 : t.type) === "our-expertise-for-project.our-expertise-for-project" || (t == null ? void 0 : t.type) === "team-on-project.team-on-project" || (t == null ? void 0 : t.type) === "consultants-one-project.consultants-one-project" || (t == null ? void 0 : t.type) === "awards-one-project.awards-one-project"
                }])
              }, [(t == null ? void 0 : t.type) === "two-vertical-photo.two-vertical-photo" ? (s(), M(l, {
                key: 0,
                "first-photo": t == null ? void 0 : t.photoFirst,
                "second-photo": t == null ? void 0 : t.photoSecond
              }, null, 8, ["first-photo", "second-photo"])) : y("", !0), (t == null ? void 0 : t.type) === "big-text-with-description.big-text-with-description" ? (s(), M(T, {
                key: 1,
                title: t == null ? void 0 : t.title,
                "title-left": t == null ? void 0 : t.titleLeft,
                "title-right": t == null ? void 0 : t.titleRight,
                "description-left": t == null ? void 0 : t.descriptionLeft,
                "description-right": t == null ? void 0 : t.descriptionRight
              }, null, 8, ["title", "title-left", "title-right", "description-left", "description-right"])) : y("", !0), (t == null ? void 0 : t.type) === "random-photo-with-left-description.random-photo-with-left-description" ? (s(), M(z, {
                key: 2,
                "photo-left": t == null ? void 0 : t.photoLeft,
                "photo-right": t == null ? void 0 : t.photoRight,
                title: t == null ? void 0 : t.titleLeft,
                description: t == null ? void 0 : t.descriptionLeft
              }, null, 8, ["photo-left", "photo-right", "title", "description"])) : y("", !0), (t == null ? void 0 : t.type) === "photo-with-text-right.photo-with-text-right" ? (s(), M(F, {
                key: 3,
                photo: t == null ? void 0 : t.photoLeft,
                title: t == null ? void 0 : t.titleRight,
                description: t == null ? void 0 : t.descriptionRight
              }, null, 8, ["photo", "title", "description"])) : y("", !0), (t == null ? void 0 : t.type) === "plan-slider.plan-slider" ? (s(), M(N, {
                key: 4,
                slides: t == null ? void 0 : t.planSlides
              }, null, 8, ["slides"])) : y("", !0), (t == null ? void 0 : t.type) === "our-expertise-for-project.our-expertise-for-project" ? (s(), M(r, {
                key: 5,
                expertises: (Pt = m(n)) == null ? void 0 : Pt.expertises,
                title: t == null ? void 0 : t.titleLeft,
                description: t == null ? void 0 : t.descriptionRight
              }, null, 8, ["expertises", "title", "description"])) : y("", !0), (t == null ? void 0 : t.type) === "team-on-project.team-on-project" ? (s(), M($, {
                key: 6,
                title: t == null ? void 0 : t.titleLeft,
                description: t == null ? void 0 : t.descriptionRight,
                team: t == null ? void 0 : t.team
              }, null, 8, ["title", "description", "team"])) : y("", !0), (t == null ? void 0 : t.type) === "consultants-one-project.consultants-one-project" ? (s(), M(L, {
                key: 7,
                title: t == null ? void 0 : t.titleLeft,
                consultants: t == null ? void 0 : t.consultants
              }, null, 8, ["title", "consultants"])) : y("", !0), (t == null ? void 0 : t.type) === "awards-one-project.awards-one-project" ? (s(), M(B, {
                key: 8,
                title: t == null ? void 0 : t.titleLeft,
                awards: t == null ? void 0 : t.awards
              }, null, 8, ["title", "awards"])) : y("", !0), (t == null ? void 0 : t.type) === "project-details.project-details" ? (s(), M(S, {
                key: 9,
                title: t == null ? void 0 : t.title,
                description: t == null ? void 0 : t.description,
                photos: t == null ? void 0 : t.photos
              }, null, 8, ["title", "description", "photos"])) : y("", !0), (t == null ? void 0 : t.type) === "our-bennefit.our-bennefit" ? (s(), M(D, {
                key: 10,
                title: t == null ? void 0 : t.title,
                items: t == null ? void 0 : t.items
              }, null, 8, ["title", "items"])) : y("", !0), (t == null ? void 0 : t.type) === "description.description" ? (s(), M(K, {
                key: 11,
                title: t == null ? void 0 : t.title,
                description: t == null ? void 0 : t.description
              }, null, 8, ["title", "description"])) : y("", !0), (t == null ? void 0 : t.type) === "big-title-with-bennefit.big-title-with-bennefit" ? (s(), M(St, {
                key: 12,
                title: t == null ? void 0 : t.title,
                "benefits-title-1": t == null ? void 0 : t.benefitsTitle1,
                "benefits-title-2": t == null ? void 0 : t.benefitsTitle2,
                "benefits-items-1": t == null ? void 0 : t.benefitsItems1,
                "benefits-items-2": t == null ? void 0 : t.benefitsItems2
              }, null, 8, ["title", "benefits-title-1", "benefits-title-2", "benefits-items-1", "benefits-items-2"])) : y("", !0), (t == null ? void 0 : t.type) === "horizontal-photo.horizontal-photo" ? (s(), M(xt, {
                key: 13,
                photo: t == null ? void 0 : t.photo
              }, null, 8, ["photo"])) : y("", !0), (t == null ? void 0 : t.type) === "big-title-with-description.big-title-with-description" ? (s(), M(Et, {
                key: 14,
                title: t == null ? void 0 : t.title,
                "description-1": t == null ? void 0 : t.description1,
                "description-2": t == null ? void 0 : t.description2
              }, null, 8, ["title", "description-1", "description-2"])) : y("", !0), (t == null ? void 0 : t.type) === "two-photo.two-photo" ? (s(), M(Ct, {
                key: 15,
                "photo-left": t == null ? void 0 : t.photoOne,
                "photo-right": t == null ? void 0 : t.photoTwo
              }, null, 8, ["photo-left", "photo-right"])) : y("", !0)], 2)
            }), 128)), f(It, {
              title: (ut = (lt = m(n)) == null ? void 0 : lt.contact) == null ? void 0 : ut.title,
              photo: (mt = (ht = m(n)) == null ? void 0 : ht.contact) == null ? void 0 : mt.photo,
              "description-left-1": (vt = (ft = m(n)) == null ? void 0 : ft.contact) == null ? void 0 : vt.description_left_1,
              "description-left-2": ($t = (yt = m(n)) == null ? void 0 : yt.contact) == null ? void 0 : $t.description_left_2,
              descriptions: (wt = (gt = m(n)) == null ? void 0 : gt.contact) == null ? void 0 : wt.descriptions,
              "small-description": (Lt = (Tt = m(n)) == null ? void 0 : Tt.contact) == null ? void 0 : Lt.small_description
            }, null, 8, ["title", "photo", "description-left-1", "description-left-2", "descriptions", "small-description"])]
          }),
          _: 1
        })])
      }
    }
  });
export {
  Mi as
  default
};