/* https://hilight.design/_nuxt/Bty_ZAzj.js */
import {
  u as It,
  A as Bt,
  _ as qt
} from "./DX7rj7S8.js";
import {
  a as Y
} from "./B42LVb-8.js";
import {
  d as R,
  u as nt,
  N as yt,
  b as it,
  c as n,
  e as t,
  f,
  k as p,
  t as h,
  o as a,
  l as O,
  _ as xt,
  q as $t,
  a as rt,
  m as S,
  n as D,
  P as V,
  p as Q,
  A as dt,
  C as ct,
  B as ut,
  r as W,
  h as P,
  w as st,
  j as q,
  F as M,
  y as E,
  T as bt,
  z as _t,
  aA as et,
  v as X,
  S as J,
  s as Pt,
  x as ot,
  g as Mt,
  E as Ot,
  L as Rt,
  a6 as Dt,
  M as Nt,
  O as Et,
  H as Lt,
  R as Ht,
  U as zt,
  Q as Wt,
  aB as Ut
} from "#entry";
import {
  _ as Vt
} from "./V1AwDJuM.js";
import {
  _ as kt
} from "./lKvBwyz6.js";
import {
  s as jt
} from "./Fjg1XfjS.js";
import {
  u as Ft
} from "./BNv4j3uM.js";
import {
  _ as Gt
} from "./B8LeOgIb.js";
import {
  s as Tt
} from "./BzLCLO6P.js";
import {
  _ as Xt
} from "./hfYGQhmZ.js";
import {
  _ as Yt
} from "./CJixzrIX.js";
import {
  _ as Jt
} from "./CgegnB1j.js";
import {
  u as Qt,
  _ as Kt
} from "./BjmPVgMU.js";
import {
  u as Zt
} from "./4MnaQWY0.js";
import "./Wd33nOGN.js";
const te = {
    class: "hero"
  },
  ee = {
    class: "content"
  },
  ae = {
    class: "photo"
  },
  oe = {
    class: "text"
  },
  se = {
    class: "title h1-light"
  },
  ne = {
    class: "text-foot"
  },
  le = {
    class: "l2 location"
  },
  ce = {
    class: "l2 area"
  },
  ie = {
    class: "h1-light number"
  },
  re = R({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(e) {
      const i = e,
        {
          isDesktop: _
        } = nt(),
        m = O(() => !_.value && i.data.heroMedia_mobile?.original ? i.data.heroMedia_mobile : i.data.photo),
        r = yt(),
        {
          slug: l
        } = r.params;
      It(async o => {
        const u = document.querySelector(`.project-page-${l} section.hero`);
        if (!u) return;
        const x = u.querySelectorAll(".title, .number"),
          j = u.querySelectorAll(".location, .area"),
          A = await $t(x),
          T = await rt(j);
        o.add(A.in.play(), "<"), o.add(T.in.play(), "<")
      }), it(() => {
        c()
      });
      const c = () => {
        const o = document.querySelector(`.project-page-${l} section.hero`);
        if (!o) return;
        const u = o.querySelector(".photo");
        S.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: o,
            start: "top top",
            end: "bottom top",
            scrub: !0
          }
        }).to(u, {
          yPercent: 20
        })
      };
      return (o, u) => {
        const x = Y,
          j = xt;
        return a(), n("section", te, [t("div", ee, [t("div", ae, [f(x, {
          media: p(m),
          fetchpriority: "high",
          alt: p(m).alt || e.data.title,
          inner: ""
        }, null, 8, ["media", "alt"])]), f(j, {
          class: "hero-gradient"
        }), t("div", oe, [t("h1", se, h(e.data.title), 1), t("div", ne, [t("p", le, h(e.data.location), 1), t("p", ce, h(e.data.area), 1), t("p", ie, "— '" + h(e.data.year), 1)])])])])
      }
    }
  }),
  de = Object.assign(D(re, [
    ["__scopeId", "data-v-ababa22f"]
  ]), {
    __name: "PageProjectHero"
  }),
  ue = ["aria-label"],
  _e = {
    class: "container-wrap",
    "data-lenis-prevent": ""
  },
  me = {
    class: "container"
  },
  pe = {
    class: "subtitle l2"
  },
  he = {
    class: "title h2-light"
  },
  ve = {
    key: 0,
    class: "block"
  },
  ge = ["innerHTML"],
  fe = R({
    __name: "Popup",
    props: {
      data: {}
    },
    emits: ["close"],
    setup(e, {
      emit: i
    }) {
      const _ = e,
        m = O(() => jt(_.data.reachText)),
        r = O(() => l(_.data.leadText));

      function l(T) {
        return T ? T.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;|&#x0*a0;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#0*39;|&apos;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim() : ""
      }
      const c = V("next-project-activate"),
        o = W(null);
      let u = !1;
      const x = i;
      Q(async () => {
        await dt(), ct(!0), j()
      }), ut(() => ct(!1));

      function j() {
        const T = o.value?.querySelector(".container-wrap"),
          g = o.value?.querySelector(".background"),
          s = o.value?.querySelector(".close-btn");
        S.to([g, s], {
          opacity: 1,
          duration: .4
        }), S.to(T, {
          y: 0,
          opacity: 1,
          duration: .6
        })
      }

      function A() {
        if (u) return;
        u = !0;
        const T = o.value?.querySelector(".container-wrap"),
          g = o.value?.querySelector(".background"),
          s = o.value?.querySelector(".close-btn");
        S.to([g, s], {
          opacity: 0,
          duration: .4
        }), S.to(T, {
          yPercent: 100,
          duration: .6,
          onComplete() {
            x("close"), c.value.isPaused = !1
          }
        })
      }
      return Ft(A), (T, g) => {
        const s = Vt,
          $ = kt;
        return e.data.reachText ? (a(), n("div", {
          key: 0,
          ref_key: "popupRef",
          ref: o,
          class: "popup"
        }, [t("div", {
          class: "background",
          onClick: g[0] || (g[0] = C => A())
        }), t("button", {
          class: "close-btn",
          "aria-label": T.$t("close"),
          onClick: g[1] || (g[1] = C => A())
        }, [f($, {
          white: ""
        }, {
          default: st(() => [f(s)]),
          _: 1
        })], 8, ue), t("div", _e, [t("div", me, [t("p", pe, h(e.data.title), 1), t("h2", he, h(p(r)), 1), e.data.reachText ? (a(), n("div", ve, [t("div", {
          class: "content-block",
          innerHTML: p(m)
        }, null, 8, ge)])) : P("", !0)])])], 512)) : P("", !0)
      }
    }
  }),
  wt = Object.assign(D(fe, [
    ["__scopeId", "data-v-385bd03b"]
  ]), {
    __name: "PageProjectPopup"
  }),
  ye = {
    class: "info"
  },
  xe = {
    key: 0,
    class: "head"
  },
  $e = ["innerHTML"],
  be = {
    class: "foot"
  },
  Pe = {
    class: "left"
  },
  ke = {
    key: 0,
    class: "l2",
    "data-text-anim": ""
  },
  je = {
    class: "right"
  },
  Te = {
    key: 0,
    class: "item"
  },
  we = {
    class: "item-title p2",
    "data-text-anim": ""
  },
  Se = {
    class: "item-text p2"
  },
  Ce = {
    key: 1,
    class: "item"
  },
  Ae = {
    class: "item-title p2",
    "data-text-anim": ""
  },
  Ie = {
    class: "item-text p2"
  },
  Be = {
    key: 2,
    class: "item"
  },
  qe = {
    class: "item-title p2",
    "data-text-anim": ""
  },
  Me = {
    class: "item-text p2"
  },
  Oe = R({
    __name: "Info",
    props: {
      data: {}
    },
    setup(e) {
      const i = W(!1),
        {
          isDesktop: _
        } = nt(),
        m = r => {
          const l = jt(r);
          return _.value ? l : l.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim()
        };
      return (r, l) => {
        const c = _t,
          o = wt;
        return a(), n("section", ye, [e.data.leadText ? (a(), n("div", xe, [t("h2", {
          class: "h2-light title",
          "data-text-anim": "",
          innerHTML: m(e.data.leadText)
        }, null, 8, $e), e.data.reachText ? (a(), n("button", {
          key: 0,
          class: "btn",
          "data-element-anim": "",
          onClick: l[0] || (l[0] = u => i.value = !0)
        }, [f(c, {
          text: r.$t("read_more"),
          border: ""
        }, null, 8, ["text"])])) : P("", !0)])) : P("", !0), t("div", be, [l[3] || (l[3] = t("div", {
          class: "line"
        }, null, -1)), t("div", Pe, [l[2] || (l[2] = t("p", {
          class: "l2",
          "data-text-anim": ""
        }, "hilight®", -1)), r.$t("building_identities_through_space") ? (a(), n("p", ke, h(r.$t("building_identities_through_space")), 1)) : P("", !0)]), t("div", je, [e.data.industry.length ? (a(), n("div", Te, [t("p", we, h(r.$t("industry")), 1), t("div", Se, [(a(!0), n(M, null, E(e.data.industry, (u, x) => (a(), n("p", {
          key: x,
          "data-text-anim": ""
        }, h(u), 1))), 128))])])) : P("", !0), e.data.categories.length ? (a(), n("div", Ce, [t("p", Ae, h(r.$t("type")), 1), t("div", Ie, [(a(!0), n(M, null, E(e.data.categories, (u, x) => (a(), n("p", {
          key: x,
          "data-text-anim": ""
        }, h(u), 1))), 128))])])) : P("", !0), e.data.services.length ? (a(), n("div", Be, [t("p", qe, h(r.$t("services")), 1), t("div", Me, [(a(!0), n(M, null, E(e.data.services, (u, x) => (a(), n("p", {
          key: x,
          "data-text-anim": ""
        }, h(u), 1))), 128))])])) : P("", !0)])]), p(i) ? (a(), q(bt, {
          key: 1,
          to: "body"
        }, [f(o, {
          data: e.data,
          onClose: l[1] || (l[1] = u => i.value = !1)
        }, null, 8, ["data"])])) : P("", !0)])
      }
    }
  }),
  Re = Object.assign(D(Oe, [
    ["__scopeId", "data-v-4e48cdff"]
  ]), {
    __name: "PageProjectInfo"
  }),
  De = R({
    __name: "ThreePhotos",
    props: {
      data: {}
    },
    setup(e) {
      const i = et("project-image-alt", O(() => ""));
      return (_, m) => {
        const r = Y;
        return a(), n("section", {
          class: X(["three-photos", {
            horizontal: e.data.horizontal
          }])
        }, [(a(!0), n(M, null, E(e.data.photos, (l, c) => (a(), n("div", {
          key: c,
          class: "photo"
        }, [f(r, {
          media: l,
          alt: l.alt || p(i)
        }, null, 8, ["media", "alt"])]))), 128))], 2)
      }
    }
  }),
  Ne = Object.assign(D(De, [
    ["__scopeId", "data-v-aa9e1387"]
  ]), {
    __name: "PageProjectThreePhotos"
  }),
  Ee = {
    class: "gallery"
  },
  Le = R({
    __name: "Gallery",
    props: {
      data: {}
    },
    setup(e) {
      const i = et("project-image-alt", O(() => ""));
      return (_, m) => {
        const r = Y;
        return a(), n("section", Ee, [(a(!0), n(M, null, E(e.data.photos, (l, c) => (a(), n("div", {
          key: c,
          class: "photo"
        }, [f(r, {
          media: l,
          alt: l.alt || p(i)
        }, null, 8, ["media", "alt"])]))), 128))])
      }
    }
  }),
  He = Object.assign(D(Le, [
    ["__scopeId", "data-v-2bc9cc3e"]
  ]), {
    __name: "PageProjectGallery"
  }),
  ze = {
    class: "big-photo"
  },
  We = {
    class: "photo"
  },
  Ue = R({
    __name: "BigPhoto",
    props: {
      data: {}
    },
    setup(e) {
      const i = et("project-image-alt", O(() => ""));
      return (_, m) => {
        const r = Y;
        return a(), n("section", ze, [t("div", We, [f(r, {
          media: e.data.photo,
          alt: e.data.photo.alt || p(i)
        }, null, 8, ["media", "alt"])])])
      }
    }
  }),
  Ve = Object.assign(D(Ue, [
    ["__scopeId", "data-v-e35be8c7"]
  ]), {
    __name: "PageProjectBigPhoto"
  }),
  Fe = {
    class: "text-block"
  },
  Ge = {
    class: "head"
  },
  Xe = {
    class: "name l2",
    "data-text-anim": ""
  },
  Ye = {
    class: "content"
  },
  Je = {
    class: "title h2-light",
    "data-text-anim": ""
  },
  Qe = R({
    __name: "TextBlock",
    props: {
      data: {}
    },
    setup(e) {
      const i = V("next-project-activate"),
        _ = W(!1),
        m = () => {
          i.value.isPaused = !0, _.value = !0
        };
      return (r, l) => {
        const c = _t,
          o = wt;
        return a(), n("section", Fe, [t("div", Ge, [t("p", Xe, h(e.data.title), 1)]), t("div", Ye, [t("h2", Je, h(e.data.leadText), 1), e.data.reachText ? (a(), n("button", {
          key: 0,
          class: "btn",
          "data-element-anim": "",
          onClick: m
        }, [f(c, {
          text: r.$t("read_more"),
          border: ""
        }, null, 8, ["text"])])) : P("", !0)]), p(_) ? (a(), q(bt, {
          key: 0,
          to: "body"
        }, [f(o, {
          data: e.data,
          onClose: l[0] || (l[0] = u => _.value = !1)
        }, null, 8, ["data"])])) : P("", !0)])
      }
    }
  }),
  Ke = Object.assign(D(Qe, [
    ["__scopeId", "data-v-48b0d400"]
  ]), {
    __name: "PageProjectTextBlock"
  }),
  Ze = {
    class: "left"
  },
  ta = {
    class: "subtitle l2"
  },
  ea = {
    class: "title h1-light"
  },
  aa = {
    class: "descr p2"
  },
  oa = {
    class: "right"
  },
  sa = {
    class: "photo"
  },
  na = R({
    __name: "TextWithPhoto",
    props: {
      data: {}
    },
    setup(e) {
      const i = et("project-image-alt", O(() => ""));
      return (_, m) => {
        const r = Y;
        return a(), n("section", {
          class: X(["text-with-photo", {
            right: e.data.rightText,
            "photo-is-icon": e.data.photoIsIcon
          }])
        }, [t("div", Ze, [m[0] || (m[0] = t("div", {
          class: "line"
        }, null, -1)), t("p", ta, h(e.data.subtitle), 1), t("h2", ea, h(e.data.title), 1), t("p", aa, h(e.data.description), 1)]), t("div", oa, [t("div", sa, [f(r, {
          media: e.data.media,
          alt: e.data.media.alt || p(i)
        }, null, 8, ["media", "alt"])])])], 2)
      }
    }
  }),
  la = Object.assign(D(na, [
    ["__scopeId", "data-v-a1e41e44"]
  ]), {
    __name: "PageProjectTextWithPhoto"
  }),
  ca = {
    class: "head"
  },
  ia = {
    class: "name l2",
    "data-text-anim": ""
  },
  ra = {
    class: "title-wrap"
  },
  da = {
    class: "h2-light title",
    "data-text-anim": ""
  },
  ua = {
    class: "content"
  },
  _a = {
    class: "left"
  },
  ma = {
    key: 1
  },
  pa = {
    class: "descr"
  },
  ha = {
    class: "details-content"
  },
  va = {
    class: "right"
  },
  ga = {
    class: "descr-mob"
  },
  fa = {
    class: "details-content"
  },
  ya = R({
    __name: "Tabs",
    props: {
      data: {}
    },
    setup(e) {
      const i = e,
        _ = et("project-image-alt", O(() => "")),
        m = W(null),
        {
          isDesktop: r
        } = nt(),
        l = V("show-all-block"),
        c = W(-1);
      let o = null,
        u = null,
        x = null,
        j = null,
        A = 0;
      const T = W([]),
        g = W([]);
      let s = [],
        $ = null;
      const C = O(() => i.data.scheme.length > 1);
      Q(async () => {
        await dt(), N(), l.value && C.value ? I() : c.value = 0
      }), it(() => {
        C.value && I()
      });
      const I = () => {
          const d = m.value;
          d && (u?.kill(), u = J.create({
            trigger: d,
            start: "top bottom",
            end: "bottom top",
            invalidateOnRefresh: !0,
            onEnter: L,
            onEnterBack: L,
            onLeave: U,
            onLeaveBack: U
          }), y())
        },
        y = () => {
          x || (x = new ResizeObserver(() => {
            j && clearTimeout(j), j = setTimeout(() => {
              J.refresh()
            }, 100)
          }), x.observe(document.documentElement))
        },
        w = () => {
          j && (clearTimeout(j), j = null), x?.disconnect(), x = null, u?.kill(), u = null, $?.kill(), $ = null, U()
        },
        N = async () => {
          let d;
          r.value ? d = g.value : d = T.value, s = await Promise.all(Array.from(d).map(b => rt(b))), s[0]?.in.play()
        }, L = () => {
          o && clearInterval(o), c.value = A, o = Tt(() => {
            c.value = (c.value + 1) % i.data.scheme.length, A = c.value
          }, 5e3)
        }, U = () => {
          o && (clearInterval(o), o = null), A = c.value, c.value = -1
        }, K = () => {
          L()
        }, Z = d => {
          c.value === d && c.value !== -1 || (c.value = d, A = d, K())
        };
      Pt(() => {
        w()
      });
      const tt = (d, b) => {
        if (s.length) {
          if ($?.kill(), d < 0) {
            b >= 0 && s[b]?.in.timeScale(3).reverse();
            return
          }
          if (s.forEach((B, F) => {
              F !== b && F !== d && B.in.pause(0)
            }), b < 0) {
            const B = s[d]?.in;
            if (!B || B.totalProgress() > 0 && !B.reversed()) return;
            B.timeScale(1.5).play(0);
            return
          }
          s[b]?.in.timeScale(3).reverse(), $ = S.delayedCall(.5, () => {
            c.value === d && (s[b]?.in.pause(0), s[d]?.in.timeScale(1.5).play(0))
          })
        }
      };
      return ot(c, (d, b) => {
        d !== b && C.value && tt(d, b)
      }), (d, b) => {
        const B = Gt,
          F = Y;
        return a(), n("section", {
          ref_key: "sectionTabs",
          ref: m,
          class: "tabs"
        }, [t("div", ca, [b[0] || (b[0] = t("div", null, null, -1)), t("p", ia, h(d.$t("layouts")), 1)]), t("div", ra, [t("h2", da, [b[1] || (b[1] = t("span", {
          class: "space"
        }, null, -1)), Mt(" " + h(e.data.longTItle), 1)])]), t("div", ua, [t("div", _a, [p(C) ? (a(), q(B, {
          key: 0,
          data: e.data.scheme.map(H => H.title),
          "active-tab": p(c),
          onTabClick: Z
        }, null, 8, ["data", "active-tab"])) : (a(), n("p", ma)), t("div", pa, [t("div", ha, [(a(!0), n(M, null, E(e.data.scheme, ({
          description: H
        }, G) => (a(), n("p", {
          key: G,
          ref_for: !0,
          ref_key: "detailsDesk",
          ref: g,
          class: "details-text p2"
        }, h(H), 1))), 128))])])]), t("div", va, [(a(!0), n(M, null, E(e.data.scheme, ({
          picture: H
        }, G) => (a(), n("div", {
          key: G,
          class: X(["scheme-wrap", {
            active: p(c) === G
          }])
        }, [f(F, {
          media: H,
          alt: H.alt || p(_)
        }, null, 8, ["media", "alt"])], 2))), 128))]), t("div", ga, [t("div", fa, [(a(!0), n(M, null, E(e.data.scheme, ({
          description: H
        }, G) => (a(), n("p", {
          key: G,
          ref_for: !0,
          ref_key: "detailsMob",
          ref: T,
          class: "details-text p2"
        }, h(H), 1))), 128))])])])], 512)
      }
    }
  }),
  xa = Object.assign(D(ya, [
    ["__scopeId", "data-v-115b6fb1"]
  ]), {
    __name: "PageProjectTabs"
  }),
  $a = {
    class: "materials"
  },
  ba = {
    key: 0,
    class: "head"
  },
  Pa = {
    class: "name l2",
    "data-text-anim": ""
  },
  ka = {
    class: "material material-1"
  },
  ja = {
    class: "material-title h1-light"
  },
  Ta = {
    class: "title-row"
  },
  wa = {
    class: "title-row"
  },
  Sa = {
    class: "materials-photos-wrap"
  },
  Ca = {
    class: "materials-photos"
  },
  Aa = {
    class: "material material-2"
  },
  Ia = {
    class: "material-title h1-light",
    "aria-hidden": "true"
  },
  Ba = {
    class: "title-row"
  },
  qa = {
    class: "title-row"
  },
  Ma = {
    class: "foot"
  },
  Oa = {
    class: "descr-texts"
  },
  Ra = {
    key: 0,
    class: "nav"
  },
  Da = ["aria-label"],
  Na = ["aria-label"],
  Ea = 4e3,
  La = R({
    __name: "Slider",
    props: {
      data: {},
      hideHead: {
        type: Boolean
      },
      hideSquares: {
        type: Boolean
      }
    },
    setup(e) {
      const i = e,
        _ = W(0);
      let m = !1;
      const r = [],
        l = [];
      Q(() => {
        x()
      }), ut(() => {
        u()
      });
      let c = null;
      const o = () => {
          u(), !(i.data.items.length <= 1) && (c = Tt(() => {
            A()
          }, Ea))
        },
        u = () => {
          c && (clearInterval(c), c = null)
        },
        x = async () => {
          const g = document.querySelector("section.materials"),
            s = g.querySelectorAll(".item"),
            $ = g.querySelectorAll(".descr");
          await Promise.all(Array.from(s).map(async (C, I) => {
            const y = C.querySelectorAll(".material-title"),
              w = await $t(y);
            r.push(w);
            const N = await rt($[I]);
            l.push(N)
          })), r[0]?.in.play(), l[0]?.in.play(), _.value = 0, o()
        };

      function j(g) {
        if (m || g === _.value) return;
        m = !0;
        const s = _.value,
          $ = S.timeline({
            onComplete: () => {
              m = !1
            }
          });
        r[s] && l[s] && ($.add(r[s].out.play(), 0), $.add(l[s].out.play(), 0)), r[g] && l[g] && ($.add(r[g].in.play(), .3), $.add(l[g].in.play(), .3)), _.value = g
      }
      const A = () => {
          j((_.value + 1) % i.data.items.length), o()
        },
        T = () => {
          j((_.value - 1 + i.data.items.length) % i.data.items.length), o()
        };
      return (g, s) => {
        const $ = Xt,
          C = Ot,
          I = kt;
        return a(), n("section", $a, [e.hideHead ? P("", !0) : (a(), n("div", ba, [t("p", Pa, h(g.$t("materials")), 1)])), t("div", {
          class: X(["slider", {
            hideSquares: e.hideSquares
          }])
        }, [(a(!0), n(M, null, E(e.data.items, (y, w) => (a(), n("div", {
          key: w,
          class: X(["item", {
            active: p(_) === w
          }])
        }, [t("div", ka, [s[0] || (s[0] = t("div", {
          class: "text-square ts1"
        }, null, -1)), t("h2", ja, [t("span", Ta, h(y.name1.word1), 1), t("span", wa, h(y.name1.word2), 1)]), s[1] || (s[1] = t("div", {
          class: "text-square ts2"
        }, null, -1)), s[2] || (s[2] = t("div", {
          class: "text-square2 ts3"
        }, null, -1)), s[3] || (s[3] = t("div", {
          class: "text-square2 ts4"
        }, null, -1))]), t("div", Sa, [e.hideSquares ? P("", !0) : (a(), n(M, {
          key: 0
        }, [w === 0 ? (a(), n(M, {
          key: 0
        }, E(4, (N, L) => t("div", {
          key: L,
          class: X(["photo-square", `photo-square-${L+1}`])
        }, null, 2)), 64)) : P("", !0)], 64)), t("div", Ca, [f($, {
          class: "material-photo",
          media: y.photo,
          alt: y.photo.alt || y.name1.word1 + " " + y.name1.word2
        }, null, 8, ["media", "alt"]), f($, {
          class: "material-photo",
          media: y.photo2,
          alt: y.photo2.alt || y.name2.word1 + " " + y.name2.word2
        }, null, 8, ["media", "alt"])])]), t("div", Aa, [s[4] || (s[4] = t("div", {
          class: "text-square ts1"
        }, null, -1)), t("p", Ia, [t("span", Ba, h(y.name2.word1), 1), t("span", qa, h(y.name2.word2), 1)]), s[5] || (s[5] = t("div", {
          class: "text-square ts2"
        }, null, -1)), s[6] || (s[6] = t("div", {
          class: "text-square2 ts3"
        }, null, -1)), s[7] || (s[7] = t("div", {
          class: "text-square2 ts4"
        }, null, -1))])], 2))), 128))], 2), t("div", Ma, [t("div", Oa, [(a(!0), n(M, null, E(e.data.items, ({
          descr: y
        }, w) => (a(), n("p", {
          key: w,
          class: "descr p2"
        }, h(y), 1))), 128))]), e.data.items.length > 1 ? (a(), n("div", Ra, [t("button", {
          class: "btn-prev",
          "aria-label": g.$t("previous"),
          onClick: T
        }, [f(I, {
          border: ""
        }, {
          default: st(() => [f(C)]),
          _: 1
        })], 8, Da), t("button", {
          class: "btn-next",
          "aria-label": g.$t("next"),
          onClick: A
        }, [f(I, {
          border: ""
        }, {
          default: st(() => [f(C)]),
          _: 1
        })], 8, Na)])) : P("", !0)])])
      }
    }
  }),
  Ha = Object.assign(D(La, [
    ["__scopeId", "data-v-4802c4be"]
  ]), {
    __name: "SectionSlider"
  }),
  za = {
    class: "media-wrapper"
  },
  Wa = {
    class: "content-wrapper"
  },
  Ua = {
    "data-title-anim": "",
    class: "h1-thin"
  },
  Va = {
    class: "bottom-details"
  },
  Fa = {
    "data-text-anim": "",
    class: "p2"
  },
  Ga = ["href"],
  Xa = R({
    __name: "CTA",
    props: {
      data: {}
    },
    setup(e) {
      const i = W(null);
      let _ = null;
      it(() => {
        m()
      }), Q(() => {
        m()
      });
      const m = () => {
        const r = i.value;
        if (!r) return;
        _?.scrollTrigger?.kill(), _?.kill();
        const l = {
          t: 0
        };
        _ = S.to(l, {
          t: 1,
          ease: "none",
          scrollTrigger: {
            id: "project-cta-snap",
            trigger: r,
            start: "top bottom",
            end: "bottom bottom",
            scrub: !0,
            snap: {
              snapTo: c => (_?.scrollTrigger?.direction ?? 1) === 1 && c > 0 ? 1 : 0,
              duration: {
                min: .2,
                max: 1
              },
              delay: .05,
              ease: "power1.inOut"
            }
          }
        })
      };
      return Pt(() => {
        _?.scrollTrigger?.kill(), _?.kill(), _ = null
      }), (r, l) => {
        const c = Y,
          o = _t,
          u = Rt;
        return a(), n("section", {
          ref_key: "sectionRef",
          ref: i,
          "data-header-white": "",
          class: "cta-project"
        }, [t("div", za, [e.data.media ? (a(), q(c, {
          key: 0,
          media: e.data.media,
          alt: e.data.media.alt || e.data.title,
          class: "media-image",
          inner: ""
        }, null, 8, ["media", "alt"])) : P("", !0)]), t("div", Wa, [t("h2", Ua, h(e.data.title), 1), t("div", Va, [t("p", Fa, h(e.data.description), 1), e.data.button_link ? (a(), n("a", {
          key: 0,
          href: e.data.button_link,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "discuss-the-project",
          "data-element-anim": ""
        }, [f(o, {
          text: e.data.button_name,
          typography: "l1"
        }, null, 8, ["text"])], 8, Ga)) : (a(), q(u, {
          key: 1,
          to: "/lets-talk",
          class: "discuss-the-project",
          "data-element-anim": ""
        }, {
          default: st(() => [f(o, {
            text: e.data.button_name,
            typography: "l1"
          }, null, 8, ["text"])]),
          _: 1
        }))])])], 512)
      }
    }
  }),
  Ya = Object.assign(D(Xa, [
    ["__scopeId", "data-v-c3c08ff0"]
  ]), {
    __name: "PageProjectCTA"
  }),
  Ja = {
    class: "content"
  },
  Qa = {
    class: "photo"
  },
  Ka = {
    class: "text"
  },
  Za = {
    class: "text-foot"
  },
  to = {
    class: "l2 location"
  },
  eo = {
    class: "l2 area"
  },
  ao = {
    class: "h1-light number"
  },
  oo = 15,
  so = .4,
  vt = 1.1,
  no = 300,
  gt = .5,
  ft = "project-next-parallax",
  lo = R({
    __name: "Next",
    props: {
      data: {}
    },
    setup(e) {
      const i = e,
        _ = Dt(),
        m = W(null),
        {
          isMobile: r,
          isDesktop: l
        } = nt(),
        c = V("lenis"),
        o = V("transition-done"),
        u = V("next-project-activate"),
        x = V("transition-instant", () => !1),
        j = O(() => !l.value && i.data.heroMedia_mobile?.original ? i.data.heroMedia_mobile : i.data.heroMedia),
        {
          x: A,
          y: T,
          visible: g
        } = Qt(m, ".next");
      let s = null,
        $ = null,
        C = null,
        I = null,
        y = !1,
        w = !1,
        N = null;
      const L = () => m.value?.querySelector(".photo"),
        U = () => {
          J.getById(ft)?.kill()
        },
        K = () => {
          U();
          const v = L();
          v && S.set(v, {
            yPercent: 0
          })
        },
        Z = () => {
          const v = m.value?.querySelector(".next"),
            k = L();
          !v || !k || (U(), S.set(k, {
            yPercent: -10
          }), J.create({
            id: ft,
            trigger: v,
            start: "top bottom",
            end: "top top",
            scrub: !0,
            onUpdate: z => {
              S.set(k, {
                yPercent: -10 + 10 * z.progress
              })
            }
          }))
        },
        tt = () => {
          if (!m.value) return;
          const v = m.value.querySelector(".wrap-progress-next"),
            k = v?.querySelector(".progress");
          !v || !k || (s?.kill(), $?.kill(), S.set(v, {
            opacity: 1
          }), S.set(k, {
            scaleX: 0
          }), S.set([m.value.querySelector(".text"), v], {
            opacity: 1
          }), C = v, s = S.timeline({
            paused: !0,
            onComplete: () => {
              if (!d()) {
                B();
                return
              }
              H()
            }
          }), s.to(k, {
            scaleX: 1,
            duration: oo,
            ease: "none"
          }), $ = J.create({
            trigger: v,
            start: "bottom bottom",
            end: "bottom top",
            onEnter: b,
            onEnterBack: b,
            onLeave: B,
            onLeaveBack: B,
            onRefresh: z => {
              z.isActive && d() ? b() : B()
            }
          }))
        },
        d = () => pt() >= gt,
        b = () => {
          if (!(w || u.value?.isPaused)) {
            if (!d()) {
              B();
              return
            }
            y = !0, !s?.isActive() && s?.restart()
          }
        },
        B = () => {
          y = !1, !w && (s?.pause(), s?.progress(0))
        },
        F = () => {
          I && clearTimeout(I), I = setTimeout(async () => {
            await dt(), m.value && (w = !1, y = !1, Z(), tt(), c.value?.resize(), J.refresh())
          }, 400)
        },
        H = async () => {
          w || (w = !0, s?.pause(), await Promise.all([G(), St()]), K(), x.value = !0, At())
        }, G = async () => {
          C && await S.to([".next-wrap .next .text", ".next-wrap .next .wrap-progress-next"], {
            opacity: 0,
            duration: so,
            ease: "In"
          })
        }, mt = () => {
          const v = m.value;
          if (!v) return !1;
          const {
            top: k,
            bottom: z
          } = v.getBoundingClientRect();
          return k >= -1 && z <= window.innerHeight + 1
        }, pt = () => {
          const v = m.value;
          if (!v) return 0;
          const {
            top: k,
            bottom: z,
            height: at
          } = v.getBoundingClientRect();
          if (!at) return 0;
          const lt = Math.min(z, window.innerHeight) - Math.max(k, 0);
          return Math.max(lt, 0) / at
        }, St = async () => {
          const v = m.value,
            k = c.value;
          !v || !k || mt() || (ct(!0), k.resize(), await new Promise(z => {
            k.scrollTo(k.limit, {
              force: !0,
              duration: vt,
              easing: S.parseEase("InOut"),
              onComplete: () => z()
            })
          }))
        }, Ct = () => {
          const v = c.value;
          !v || w || u.value?.isPaused || mt() || pt() < gt || (v.resize(), v.scrollTo(v.limit, {
            duration: vt,
            easing: S.parseEase("Out")
          }))
        }, ht = () => {
          N && clearTimeout(N), N = setTimeout(Ct, no)
        }, At = () => {
          if (r.value) _.push(`/projects/${i.data.slug}`);
          else {
            if (!u.value) return;
            u.value.isActive = !1, _.push(`/projects/${i.data.slug}`)
          }
        };
      return ot(o, v => {
        v && F()
      }), ot(() => i.data.slug, () => {
        F()
      }), ot(() => u.value?.isPaused, v => {
        if (!(!s || w)) {
          if (v) {
            s.pause();
            return
          }
          y && s.resume()
        }
      }), Q(() => {
        c.value?.on("scroll", ht), F()
      }), ut(() => {
        c.value?.off("scroll", ht), N && clearTimeout(N), I && clearTimeout(I), s?.kill(), $?.kill(), U(), C = null, u.value.isActive = !1
      }), (v, k) => {
        const z = Kt,
          at = Y,
          lt = xt;
        return a(), n("div", {
          ref_key: "nextWrap",
          ref: m,
          class: X(["next-wrap", {
            activate: p(u).isActive,
            paused: p(u).isPaused
          }])
        }, [f(z, {
          x: p(A),
          y: p(T),
          visible: p(g)
        }, null, 8, ["x", "y", "visible"]), t("section", {
          class: "next",
          onClick: k[0] || (k[0] = mo => H())
        }, [t("div", Ja, [t("div", Qa, [f(at, {
          media: p(j),
          alt: p(j).alt || e.data.heroTitle,
          inner: ""
        }, null, 8, ["media", "alt"])]), f(lt, {
          class: "next-gradient"
        }), t("div", Ka, [t("div", Za, [t("p", to, h(e.data.location), 1), t("p", eo, h(e.data.area), 1), t("p", ao, "— '" + h(e.data.year), 1)])]), k[1] || (k[1] = t("div", {
          class: "wrap-progress-next"
        }, [t("p", {
          class: "h1-light title-next"
        }, "Next project"), t("div", {
          class: "progress-wrapper"
        }, [t("div", {
          class: "progress"
        })])], -1))])])], 2)
      }
    }
  }),
  co = Object.assign(D(lo, [
    ["__scopeId", "data-v-7e9f0e63"]
  ]), {
    __name: "PageProjectNext"
  }),
  io = {
    class: "project-blocks"
  },
  ro = {
    key: 1,
    class: "wrap-gradient-cta"
  },
  uo = {
    key: 2,
    class: "cta-gradient"
  },
  _o = R({
    __name: "[slug]",
    async setup(e) {
      let i, _;
      const m = yt(),
        r = O(() => String(m.params.slug || "")),
        {
          locale: l
        } = Nt(),
        {
          initUnicorn: c
        } = Et();
      V("next-project-activate", () => ({
        isActive: !1,
        isPaused: !1
      }));
      const {
        data: o
      } = ([i, _] = Lt(() => Wt(() => `project:${r.value}:${l.value}`, () => $fetch(`/api/strapi/projects/${r.value}`, {
        query: {
          locale: l.value
        }
      }), {
        server: !0,
        lazy: !1,
        watch: [l, r]
      })), i = await i, _(), i);
      if (!o.value) throw Ht({
        statusCode: 404,
        statusMessage: "Project not found"
      });
      zt(o.value.oneProject.meta), Zt(() => o.value?.oneProject.hero.title), V("show-all-block", () => !1);
      const u = O(() => o.value?.oneProject.blocks.items || []),
        x = O(() => o.value?.oneProject.hero.title || "");
      return Ut("project-image-alt", x), Q(async () => {
        setTimeout(() => {
          new Bt
        }, 250), await c()
      }), (j, A) => {
        const T = qt,
          g = de,
          s = Re,
          $ = Ne,
          C = He,
          I = Ve,
          y = Ke,
          w = la,
          N = xa,
          L = Ha,
          U = Ya,
          K = Yt,
          Z = Jt,
          tt = co;
        return p(o) ? (a(), n("main", {
          key: 0,
          class: X(["project-page", `project-page-${p(r)}`])
        }, [f(T), f(g, {
          data: p(o).oneProject.hero,
          "data-header-white": ""
        }, null, 8, ["data"]), f(s, {
          data: p(o).oneProject.info
        }, null, 8, ["data"]), t("div", io, [(a(!0), n(M, null, E(p(u), (d, b) => (a(), n("div", {
          key: `${d.__component}-${b}`,
          class: "block-slot"
        }, [d.__component === "project.three-photo" ? (a(), q($, {
          key: 0,
          data: d,
          "data-header-white": ""
        }, null, 8, ["data"])) : d.__component === "project.gallery" ? (a(), q(C, {
          key: 1,
          data: d,
          "data-header-white": ""
        }, null, 8, ["data"])) : d.__component === "project.big-photo" ? (a(), q(I, {
          key: 2,
          data: d,
          "data-header-white": ""
        }, null, 8, ["data"])) : d.__component === "project.title-block-read-more" ? (a(), q(y, {
          key: 3,
          data: d
        }, null, 8, ["data"])) : d.__component === "project.solution" ? (a(), q(w, {
          key: 4,
          data: d
        }, null, 8, ["data"])) : d.__component === "project.layouts" ? (a(), q(N, {
          key: 5,
          data: d
        }, null, 8, ["data"])) : d.__component === "project.materials" ? (a(), q(L, {
          key: 6,
          data: d
        }, null, 8, ["data"])) : P("", !0)]))), 128))]), p(o).oneProject.ctaBlock.type === "project.cta-project" && p(o).oneProject.ctaBlock.ctaInterface ? (a(), q(U, {
          key: 0,
          data: p(o).oneProject.ctaBlock.ctaInterface
        }, null, 8, ["data"])) : P("", !0), p(o).oneProject.ctaBlock.type === "project.cta-gradient" && p(o).oneProject.ctaBlock.personInterface ? (a(), n("div", ro, [f(K, {
          data: p(o).oneProject.ctaBlock.personInterface
        }, null, 8, ["data"])])) : P("", !0), p(o).oneProject.ctaText ? (a(), n("div", uo, [f(Z, {
          text: p(o).oneProject.ctaText
        }, null, 8, ["text"])])) : P("", !0), p(o).nextProject ? (a(), q(tt, {
          key: 3,
          data: p(o).nextProject,
          "data-header-white": "",
          "data-header-hide": ""
        }, null, 8, ["data"])) : P("", !0)], 2)) : P("", !0)
      }
    }
  }),
  Co = D(_o, [
    ["__scopeId", "data-v-5d68837e"]
  ]);
export {
  Co as
  default
};