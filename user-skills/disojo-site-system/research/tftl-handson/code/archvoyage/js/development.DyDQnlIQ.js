/* https://archvoyage.ae/_nuxt/development.DyDQnlIQ.js */
import {
  _ as oe,
  a as ne
} from "./OurMission.C42Ax4nB.js";
import {
  d as C,
  u as F,
  r as m,
  c as R,
  w as H,
  o as A,
  n as M,
  a as P,
  b,
  e as t,
  f as z,
  t as l,
  j as o,
  m as j,
  B as se,
  g as u,
  F as O,
  i as U,
  y as B,
  C as Kt,
  D as Q,
  v as X,
  k as W,
  p as N,
  l as V,
  z as ie,
  x as Zt,
  h as te,
  _ as ae,
  q as ce,
  s as le
} from "./entry.YPAKmh3d.js";
import {
  t as q
} from "./titleAnim.CszaPWUV.js";
import {
  _ as re
} from "./DragCursor.DPcV-VC9.js";
import {
  S as pe
} from "./swiper.COee7uVM.js";
import {
  p as _e,
  _ as ue
} from "./Contact.D-xzsxJa.js";
import {
  _ as de
} from "./Expertise.loTN4QAv.js";
import {
  _ as me
} from "./ArrowDown.BETtDbQg.js";
import {
  _ as he
} from "./Button.DsjJ-bLs.js";
import {
  s as fe,
  _ as ve
} from "./setPageMeta.DvPDcq0E.js";
import "./List.Xuxzn0qK.js";
import "./MoreButton.BK_q1TjK.js";
import "./Plus.DQtF0hp8.js";
const $e = {
    class: "partnership"
  },
  ye = {
    class: "italic"
  },
  ge = {
    class: "description p1"
  },
  we = {
    name: "DevelopmentPartnership"
  },
  ke = C({
    ...we,
    props: {
      title: {},
      description: {}
    },
    setup(r) {
      const s = r,
        v = F("transitionEnd"),
        e = m(!1),
        _ = m(),
        $ = R(() => {
          if (!s.title) return {
            firstLine: "",
            secondLine: "",
            thirdLine: ""
          };
          const n = s.title.split(" "),
            a = n.splice(0, 5).join(" ") + " ",
            g = n.splice(0, 3).join(" ") + " ",
            w = n.join(" ");
          return {
            firstLine: a,
            secondLine: g,
            thirdLine: w
          }
        });
      H(v, n => {
        n && c()
      }), A(async () => {
        await M(), v.value && c()
      });

      function c() {
        if (e.value) return;
        e.value = !0;
        const n = _.value;
        n && setTimeout(() => {
          q(n, {
            duration: .5,
            stagger: .06
          })
        }, 500)
      }
      return (n, a) => (P(), b("section", $e, [t("p", {
        ref_key: "titleEl",
        ref: _,
        class: "title h3"
      }, [z(l(o($).firstLine), 1), t("span", ye, l(o($).secondLine), 1), z(l(o($).thirdLine), 1)], 512), t("p", ge, l(n.description), 1)]))
    }
  }),
  Se = j(ke, [
    ["__scopeId", "data-v-7da4171f"]
  ]),
  Ee = r => (N("data-v-220e4fcc"), r = r(), V(), r),
  Pe = {
    class: "opportunities"
  },
  be = {
    class: "header"
  },
  Te = Ee(() => t("p", {
    class: "title p1"
  }, "Investment Opportunities", -1)),
  Le = {
    class: "line"
  },
  De = {
    class: "swiper-wrapper"
  },
  xe = {
    class: "slide-inner"
  },
  Ie = {
    class: "slide-header"
  },
  Ce = {
    class: "slide-number p3"
  },
  qe = {
    class: "slide-title h6 medium"
  },
  Ae = {
    class: "slide-bottom"
  },
  Me = {
    class: "slide-photo"
  },
  je = {
    class: "slide-description p1"
  },
  Be = {
    name: "DevelopmentOpportunities"
  },
  Fe = C({
    ...Be,
    props: {
      opportunities: {}
    },
    setup(r) {
      const s = m(),
        v = {
          speed: 700,
          slidesPerView: "auto",
          centeredSlides: !0,
          preventClicks: !0,
          touchStartPreventDefault: !1,
          breakpoints: {
            1025: {
              centeredSlides: !1
            }
          }
        };
      let e;
      A(async () => {
        await M(), _()
      }), se(() => {
        var n;
        (n = e == null ? void 0 : e.destroy) == null || n.call(e)
      });

      function _() {
        e = new pe(".slider-block", v)
      }

      function $() {
        s.value && s.value.classList.add("shrinked-photos")
      }

      function c() {
        s.value && s.value.classList.remove("shrinked-photos")
      }
      return (n, a) => {
        var E, k, y;
        const g = X,
          w = W,
          i = re;
        return P(), b("section", Pe, [t("header", be, [Te, t("div", Le, [u(g)])]), t("div", {
          ref_key: "sliderBlock",
          ref: s,
          class: B(["slider-block swiper", {
            "no-drag": ((E = n.opportunities) == null ? void 0 : E.length) && ((k = n.opportunities) == null ? void 0 : k.length) < 4
          }])
        }, [t("div", De, [(P(!0), b(O, null, U(n.opportunities, (h, D) => (P(), b("div", {
          key: D,
          class: "swiper-slide"
        }, [t("div", xe, [t("div", Ie, [t("p", Ce, l(`.${"0".repeat(2-Math.max((D+1).toString().length,0))}${D+1}`), 1), t("p", qe, l(h == null ? void 0 : h.title), 1)]), t("div", Ae, [t("div", Me, [u(w, {
          photo: h == null ? void 0 : h.photo,
          "default-size": "medium"
        }, null, 8, ["photo"])]), t("p", je, l(h == null ? void 0 : h.description), 1)])])]))), 128))])], 2), (y = n.opportunities) != null && y.length && n.opportunities.length > 3 ? (P(), Kt(i, {
          key: 0,
          container: o(s),
          onPressed: $,
          onUnpressed: c
        }, null, 8, ["container"])) : Q("", !0)])
      }
    }
  }),
  He = j(Fe, [
    ["__scopeId", "data-v-220e4fcc"]
  ]),
  We = {
    class: "sustainability container"
  },
  ze = {
    class: "title-first-line"
  },
  Ne = {
    class: "line-inner"
  },
  Ve = {
    class: "title-second-line"
  },
  Oe = {
    class: "line-inner"
  },
  Ue = {
    class: "italic"
  },
  Re = {
    class: "title-description p1"
  },
  Qe = {
    class: "italic"
  },
  Xe = {
    class: "title-mobile-line"
  },
  Ye = {
    class: "title-mobile-inner"
  },
  Ge = {
    class: "title-mobile-line"
  },
  Je = {
    class: "title-mobile-inner"
  },
  Ke = {
    class: "title-mobile-line"
  },
  Ze = {
    class: "title-mobile-inner italic"
  },
  to = {
    class: "title-mobile-line title-mobile-line--fourth"
  },
  eo = {
    class: "title-mobile-inner"
  },
  oo = {
    class: "inner"
  },
  no = {
    class: "h3 title-part"
  },
  so = {
    class: "description-wrapper"
  },
  io = {
    class: "description-title p1 medium"
  },
  ao = ["innerHTML"],
  co = {
    name: "DevelopmentSustainability"
  },
  lo = C({
    ...co,
    props: {
      mainTitle: {},
      titles: {},
      description: {},
      twoDescriptions: {},
      photo: {}
    },
    setup(r) {
      const s = r,
        v = F("transitionEnd"),
        e = m(!1),
        _ = m(!1),
        $ = m(),
        c = m(),
        n = m(),
        a = m(),
        g = R(() => {
          var y;
          if (!((y = s.titles) != null && y[0])) return {
            first: "",
            second: ""
          };
          const i = s.titles[0].split(" "),
            E = i.splice(0, 2).join(" "),
            k = i.join(" ");
          return {
            first: E,
            second: k
          }
        });
      H(v, i => {
        i && w()
      }), A(async () => {
        await M(), v.value && w()
      });

      function w() {
        if (e.value) return;
        e.value = !0;
        const i = $.value;
        i && _e(i), c.value && window.innerWidth > 1024 && c.value.querySelectorAll(".line-inner").forEach((k, y) => {
          q(k, {
            delay: y * .1
          })
        }), n.value && window.innerWidth > 1024 && q(n.value, {
          delay: .4
        }), a.value && window.innerWidth < 1025 && a.value.querySelectorAll(".title-mobile-inner").forEach((k, y) => {
          q(k, {
            delay: y * .2
          })
        })
      }
      return (i, E) => {
        var y, h, D, x, d, S, L;
        const k = W;
        return P(), b("section", We, [t("p", {
          ref_key: "titleEl",
          ref: c,
          class: "h3 title"
        }, [t("span", ze, [t("span", Ne, l((y = i.titles) == null ? void 0 : y[0]), 1)]), t("span", Ve, [t("span", Oe, [t("span", Ue, l((h = i.titles) == null ? void 0 : h[1]), 1), t("span", Re, l(i.description), 1), t("span", Qe, l((D = i.titles) == null ? void 0 : D[2]), 1)])])], 512), t("p", {
          ref_key: "titleMobile",
          ref: a,
          class: "h3 title-mobile"
        }, [t("span", Xe, [t("span", Ye, l(o(g).first), 1)]), t("span", Ge, [t("span", Je, l(o(g).second) + " " + l((x = i.titles) == null ? void 0 : x[1]), 1)]), t("span", Ke, [t("span", Ze, l((d = i.titles) == null ? void 0 : d[2]), 1)]), t("span", to, [t("span", eo, l((S = i.titles) == null ? void 0 : S[3]), 1)])], 512), t("div", oo, [t("div", {
          ref_key: "photoEl",
          ref: $,
          class: "photo-wrapper"
        }, [u(k, {
          photo: i.photo
        }, null, 8, ["photo"])], 512), t("p", no, [t("span", {
          ref_key: "line_3",
          ref: n,
          class: "line-inner"
        }, l((L = i.titles) == null ? void 0 : L[3]), 513)]), t("div", so, [t("p", io, l(i.mainTitle), 1), t("div", {
          class: B(["description-inner p1", {
            open: o(_)
          }]),
          innerHTML: i.twoDescriptions
        }, null, 10, ao)])]), t("div", {
          class: B(["learn-more p1", {
            hide: o(_)
          }]),
          onClick: E[0] || (E[0] = T => _.value = !0)
        }, " Learn more ", 2)])
      }
    }
  }),
  ro = j(lo, [
    ["__scopeId", "data-v-edc29c40"]
  ]),
  Y = r => (N("data-v-222d274f"), r = r(), V(), r),
  po = {
    class: "benefits"
  },
  _o = {
    class: "line"
  },
  uo = Y(() => t("div", {
    class: "flat-image-cover"
  }, null, -1)),
  mo = ["onMouseenter"],
  ho = {
    class: "description p1"
  },
  fo = Y(() => t("div", {
    class: "hover-box"
  }, null, -1)),
  vo = {
    key: 0,
    class: "benefit-photo"
  },
  $o = Y(() => t("div", {
    class: "flat-image-cover"
  }, null, -1)),
  yo = {
    name: "DevelopmentBenefits"
  },
  go = C({
    ...yo,
    props: {
      benefits: {}
    },
    setup(r) {
      const {
        $gsap: s
      } = ie(), v = F("transitionEnd"), e = m(!1), _ = m(0), $ = m(0), c = m(-1), n = m(), a = m();
      let g, w, i;
      H(v, d => {
        d && E()
      }), A(async () => {
        await M(), v.value && E()
      });

      function E() {
        var S;
        if (e.value) return;
        e.value = !0;
        const d = (S = a.value) == null ? void 0 : S.querySelectorAll(".benefit-photo");
        !(d != null && d.length) || window.innerWidth > 1024 || s.to(d, {
          scrollTrigger: {
            trigger: a.value,
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          },
          y: window.innerHeight * .12,
          ease: "none"
        })
      }

      function k(d, S) {
        window.innerWidth < 1025 || (clearTimeout(i), clearTimeout(w), document.addEventListener("mousemove", h), g = window.requestAnimationFrame(D), x(S))
      }

      function y() {
        window.innerWidth < 1025 || (w = setTimeout(() => {
          x(-1)
        }, 100), i = setTimeout(() => {
          document.removeEventListener("mousemove", h), window.cancelAnimationFrame(g)
        }, 500))
      }

      function h(d) {
        _.value = d.clientX, $.value = d.clientY
      }

      function D() {
        n.value && (n.value.style.transform = `translate(${_.value}px, ${$.value}px)`, g = window.requestAnimationFrame(D))
      }

      function x(d) {
        if (!n.value) return;
        const S = n.value.querySelectorAll(".photo");
        if (!(S != null && S.length)) return;
        const L = .4;
        let T, f;
        c.value !== -1 && (T = S[c.value], f = T == null ? void 0 : T.querySelector(".wrapper")), c.value = d;
        const p = S[c.value],
          I = p == null ? void 0 : p.querySelector(".wrapper");
        T && s.fromTo(T, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)"
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          clearProps: "all",
          duration: L,
          ease: "custom"
        }), f && s.fromTo(f, {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          scale: 1
        }, {
          yPercent: -20,
          opacity: .5,
          rotate: -10,
          scale: 1.2,
          duration: L,
          clearProps: "all",
          ease: "custom"
        }), p && s.fromTo(p, {
          clipPath: "polygon(0% 100%, 100% 120%, 100% 100%, 0% 100%)"
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: L,
          ease: "custom"
        }), I && s.fromTo(I, {
          yPercent: -10,
          scale: 1.2
        }, {
          yPercent: 0,
          scale: 1,
          duration: L,
          ease: "custom"
        })
      }
      return (d, S) => {
        const L = X,
          T = W;
        return P(), b("section", po, [t("div", _o, [u(L)]), t("div", {
          ref_key: "photoWrapper",
          ref: n,
          class: "hover-photo-wrapper"
        }, [(P(!0), b(O, null, U(d.benefits, (f, p) => (P(), b("div", {
          key: p,
          class: "photo"
        }, [u(T, {
          photo: f == null ? void 0 : f.photo,
          "default-size": "medium"
        }, null, 8, ["photo"]), uo]))), 128))], 512), t("div", {
          ref_key: "innerEl",
          ref: a,
          class: "inner container"
        }, [(P(!0), b(O, null, U(d.benefits, (f, p) => (P(), b("div", {
          key: p,
          class: B(["benefit", {
            flex: p % 7 === 0 || p % 7 === 6
          }]),
          onMouseenter: I => k(I, p),
          onMouseleave: y
        }, [t("p", {
          class: B(["title", {
            display2: p % 7 === 0 || p % 7 === 4,
            h1: p % 7 === 6,
            h2: p % 7 !== 0 && p % 7 !== 4 && p % 7 !== 6
          }])
        }, l(f == null ? void 0 : f.title), 3), t("p", ho, l(f == null ? void 0 : f.description), 1), fo, p % 7 === 1 || p % 7 === 4 || p % 7 === 6 ? (P(), b("div", vo, [u(T, {
          photo: f == null ? void 0 : f.photo,
          "default-size": "medium"
        }, null, 8, ["photo"]), $o])) : Q("", !0)], 42, mo))), 128))], 512)])
      }
    }
  }),
  wo = j(go, [
    ["__scopeId", "data-v-222d274f"]
  ]),
  ko = r => (N("data-v-ff9fa1f9"), r = r(), V(), r),
  So = {
    class: "thought-section"
  },
  Eo = {
    class: "inner"
  },
  Po = {
    class: "first-block"
  },
  bo = ko(() => t("div", {
    class: "flat-image-cover"
  }, null, -1)),
  To = {
    class: "quote-wrapper"
  },
  Lo = {
    class: "italic"
  },
  Do = {
    class: "name p1"
  },
  xo = {
    class: "position p1"
  },
  Io = {
    class: "description-wrapper"
  },
  Co = {
    class: "arrow"
  },
  qo = {
    class: "description p1"
  },
  Ao = {
    class: "line"
  },
  Mo = {
    name: "DevelopmentThought"
  },
  jo = C({
    ...Mo,
    props: {
      quote: {},
      name: {},
      position: {},
      photo: {},
      description: {}
    },
    setup(r) {
      const s = r,
        v = F("transitionEnd"),
        e = m(!1),
        _ = m(),
        $ = m(),
        c = R(() => {
          if (!s.quote) return ["", "", ""];
          const a = s.quote.split(" "),
            g = a.splice(a.length - 4, 4).join(" "),
            w = a.splice(a.length - 3, 3).join(" ") + " ";
          return [(a.join(" ") + " ").replace("“", ""), w, g]
        });
      H(v, a => {
        a && n()
      }), A(async () => {
        await M(), v.value && n()
      });

      function n() {
        e.value || (e.value = !0, setTimeout(() => {
          _.value && q(_.value, {
            duration: .5,
            stagger: .06
          })
        }, 500), setTimeout(() => {
          $.value && Zt($.value, {
            delay: .4
          })
        }, 500))
      }
      return (a, g) => {
        var k, y, h;
        const w = W,
          i = me,
          E = X;
        return P(), b("section", So, [t("div", Eo, [t("div", Po, [t("div", {
          ref_key: "photoEl",
          ref: $,
          class: "photo"
        }, [u(w, {
          photo: a.photo
        }, null, 8, ["photo"]), bo], 512), t("div", To, [t("p", {
          ref_key: "quoteEl",
          ref: _,
          class: "quote h4"
        }, [z(l((k = o(c)) == null ? void 0 : k[0]) + " ", 1), t("span", Lo, l((y = o(c)) == null ? void 0 : y[1]), 1), z(" " + l((h = o(c)) == null ? void 0 : h[2]), 1)], 512), t("p", Do, l(a.name), 1), t("p", xo, l(a.position), 1)])]), t("div", Io, [t("div", Co, [u(i)]), t("p", qo, l(a.description), 1)])]), t("div", Ao, [u(E)])])
      }
    }
  }),
  Bo = j(jo, [
    ["__scopeId", "data-v-ff9fa1f9"]
  ]),
  ee = r => (N("data-v-e1ed167c"), r = r(), V(), r),
  Fo = {
    class: "for-sale container"
  },
  Ho = {
    class: "project"
  },
  Wo = ee(() => t("div", {
    class: "flat-image-cover"
  }, null, -1)),
  zo = ee(() => t("p", {
    class: "caption p1"
  }, "Project for Sale", -1)),
  No = ["innerHTML"],
  Vo = {
    name: "DevelopmentForSale"
  },
  Oo = C({
    ...Vo,
    props: {
      title: {},
      photo: {},
      slug: {}
    },
    setup(r) {
      const s = F("transitionEnd"),
        v = m(!1),
        e = m(),
        _ = m();
      H(s, c => {
        c && $()
      }), A(async () => {
        await M(), s.value && $()
      });

      function $() {
        v.value || (v.value = !0, setTimeout(() => {
          e.value && q(e.value)
        }, 500), setTimeout(() => {
          var c;
          _.value && ((c = Zt(_.value, {
            delay: .4
          })) == null || c.then(() => {
            var n;
            (n = _.value) == null || n.classList.add("transition")
          }))
        }, 500))
      }
      return (c, n) => {
        const a = W,
          g = he,
          w = ae;
        return P(), b("section", Fo, [t("div", Ho, [t("div", {
          ref_key: "photoEl",
          ref: _,
          class: "photo"
        }, [u(a, {
          photo: c.photo,
          "default-size": "large"
        }, null, 8, ["photo"]), Wo], 512), zo, t("div", {
          ref_key: "titleEl",
          ref: e,
          class: "title h2",
          innerHTML: c.title
        }, null, 8, No), u(w, {
          to: `/projects-sale/${c.slug}`
        }, {
          default: te(() => [u(g, {
            text: "Explore"
          })]),
          _: 1
        }, 8, ["to"])])])
      }
    }
  }),
  Uo = j(Oo, [
    ["__scopeId", "data-v-e1ed167c"]
  ]),
  Ro = {
    class: "development-page page"
  },
  Qo = t("div", {
    class: "header-gap"
  }, null, -1),
  Xo = {
    name: "DevelopmentPage"
  },
  rn = C({
    ...Xo,
    async setup(r) {
      var _;
      let s, v;
      const {
        data: e
      } = ([s, v] = ce(() => le("development-page", () => $fetch("/api/pages/development/pageDevelopment"))), s = await s, v(), s);
      return fe((_ = e == null ? void 0 : e.value) == null ? void 0 : _.meta), ($, c) => {
        const n = oe,
          a = ne,
          g = Se,
          w = He,
          i = ro,
          E = wo,
          k = de,
          y = Bo,
          h = Uo,
          D = ue,
          x = ve;
        return P(), b("main", Ro, [u(x, null, {
          default: te(() => {
            var d, S, L, T, f, p, I, G, J, K, Z, tt, et, ot, nt, st, it, at, ct, lt, rt, pt, _t, ut, dt, mt, ht, ft, vt, $t, yt, gt, wt, kt, St, Et, Pt, bt, Tt, Lt, Dt, xt, It, Ct, qt, At, Mt, jt, Bt, Ft, Ht, Wt, zt, Nt, Vt, Ot, Ut, Rt, Qt, Xt, Yt, Gt, Jt;
            return [Qo, u(n, {
              "page-name": (S = (d = o(e)) == null ? void 0 : d.main) == null ? void 0 : S.descriptionSmall,
              description: (T = (L = o(e)) == null ? void 0 : L.main) == null ? void 0 : T.descriptionRight,
              "dot-text": (p = (f = o(e)) == null ? void 0 : f.main) == null ? void 0 : p.descriptionLeft,
              titles: (G = (I = o(e)) == null ? void 0 : I.main) == null ? void 0 : G.titles
            }, null, 8, ["page-name", "description", "dot-text", "titles"]), u(a, {
              title: (K = (J = o(e)) == null ? void 0 : J.card) == null ? void 0 : K.title,
              description: (tt = (Z = o(e)) == null ? void 0 : Z.card) == null ? void 0 : tt.description,
              "big-photo": (ot = (et = o(e)) == null ? void 0 : et.main) == null ? void 0 : ot.photo,
              "card-photo": (st = (nt = o(e)) == null ? void 0 : nt.card) == null ? void 0 : st.photo,
              "alternative-card": ""
            }, null, 8, ["title", "description", "big-photo", "card-photo"]), u(g, {
              title: (at = (it = o(e)) == null ? void 0 : it.partnership) == null ? void 0 : at.title,
              description: (lt = (ct = o(e)) == null ? void 0 : ct.partnership) == null ? void 0 : lt.description
            }, null, 8, ["title", "description"]), u(w, {
              opportunities: (rt = o(e)) == null ? void 0 : rt.opportunities
            }, null, 8, ["opportunities"]), u(i, {
              "main-title": (_t = (pt = o(e)) == null ? void 0 : pt.sustainability) == null ? void 0 : _t.mainTitle,
              description: (dt = (ut = o(e)) == null ? void 0 : ut.sustainability) == null ? void 0 : dt.description,
              "two-descriptions": (ht = (mt = o(e)) == null ? void 0 : mt.sustainability) == null ? void 0 : ht.twoDescriptions,
              titles: (vt = (ft = o(e)) == null ? void 0 : ft.sustainability) == null ? void 0 : vt.titles,
              photo: (yt = ($t = o(e)) == null ? void 0 : $t.sustainability) == null ? void 0 : yt.photo
            }, null, 8, ["main-title", "description", "two-descriptions", "titles", "photo"]), u(E, {
              benefits: (gt = o(e)) == null ? void 0 : gt.benefits
            }, null, 8, ["benefits"]), u(k, {
              title: "our expertise",
              items: (kt = (wt = o(e)) == null ? void 0 : wt.expertises) == null ? void 0 : kt.items
            }, null, 8, ["items"]), u(y, {
              quote: (Et = (St = o(e)) == null ? void 0 : St.thought) == null ? void 0 : Et.quote,
              name: (bt = (Pt = o(e)) == null ? void 0 : Pt.thought) == null ? void 0 : bt.name,
              position: (Lt = (Tt = o(e)) == null ? void 0 : Tt.thought) == null ? void 0 : Lt.position,
              photo: (xt = (Dt = o(e)) == null ? void 0 : Dt.thought) == null ? void 0 : xt.photo,
              description: (Ct = (It = o(e)) == null ? void 0 : It.thought) == null ? void 0 : Ct.description
            }, null, 8, ["quote", "name", "position", "photo", "description"]), (qt = o(e)) != null && qt.projectForSale ? (P(), Kt(h, {
              key: 0,
              title: (Mt = (At = o(e)) == null ? void 0 : At.projectForSale) == null ? void 0 : Mt.title,
              photo: (Bt = (jt = o(e)) == null ? void 0 : jt.projectForSale) == null ? void 0 : Bt.photo,
              slug: (Ht = (Ft = o(e)) == null ? void 0 : Ft.projectForSale) == null ? void 0 : Ht.slug
            }, null, 8, ["title", "photo", "slug"])) : Q("", !0), u(D, {
              title: (zt = (Wt = o(e)) == null ? void 0 : Wt.contact) == null ? void 0 : zt.title,
              photo: (Vt = (Nt = o(e)) == null ? void 0 : Nt.contact) == null ? void 0 : Vt.photo,
              "description-left-1": (Ut = (Ot = o(e)) == null ? void 0 : Ot.contact) == null ? void 0 : Ut.description_left_1,
              "description-left-2": (Qt = (Rt = o(e)) == null ? void 0 : Rt.contact) == null ? void 0 : Qt.description_left_2,
              descriptions: (Yt = (Xt = o(e)) == null ? void 0 : Xt.contact) == null ? void 0 : Yt.descriptions,
              "small-description": (Jt = (Gt = o(e)) == null ? void 0 : Gt.contact) == null ? void 0 : Jt.small_description
            }, null, 8, ["title", "photo", "description-left-1", "description-left-2", "descriptions", "small-description"])]
          }),
          _: 1
        })])
      }
    }
  });
export {
  rn as
  default
};