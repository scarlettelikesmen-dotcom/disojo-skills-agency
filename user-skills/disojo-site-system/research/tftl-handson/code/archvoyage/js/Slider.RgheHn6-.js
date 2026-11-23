/* https://archvoyage.ae/_nuxt/Slider.RgheHn6-.js */
import {
  _ as J
} from "./Button.DsjJ-bLs.js";
import {
  d as w,
  a as s,
  b as i,
  e,
  F as y,
  i as T,
  y as H,
  t as S,
  D as M,
  g as u,
  h as j,
  _ as x,
  v as B,
  m as C,
  u as I,
  r as f,
  w as g,
  o as E,
  n as P,
  k as q,
  j as R,
  B as N,
  C as K
} from "./entry.YPAKmh3d.js";
import {
  p as D
} from "./Contact.D-xzsxJa.js";
import {
  _ as F
} from "./Plus.DQtF0hp8.js";
import {
  t as U
} from "./titleAnim.CszaPWUV.js";
import {
  S as z
} from "./swiper.COee7uVM.js";
import {
  _ as Q
} from "./MoreButton.BK_q1TjK.js";
import {
  _ as X
} from "./DragCursor.DPcV-VC9.js";
const Y = {
    class: "overview"
  },
  Z = {
    class: "grid container"
  },
  ee = ["innerHTML"],
  te = {
    class: "info"
  },
  ne = {
    class: "tags"
  },
  oe = ["innerHTML"],
  se = {
    key: 0,
    class: "price"
  },
  ie = {
    key: 0,
    class: "p price-title p1"
  },
  ce = {
    class: "price-inner"
  },
  re = ["innerHTML"],
  ae = {
    class: "price-line"
  },
  le = {
    class: "credits"
  },
  _e = ["innerHTML"],
  de = ["innerHTML"],
  pe = {
    name: "ProjectOverview"
  },
  ue = w({
    ...pe,
    props: {
      forSale: {
        type: Boolean
      },
      title: {},
      description: {},
      categories: {},
      addInfo: {},
      price: {}
    },
    setup(k) {
      return (r, p) => {
        const a = J,
          l = x,
          t = B;
        return s(), i("section", Y, [e("div", Z, [e("div", {
          class: "title h6 medium",
          innerHTML: r.title
        }, null, 8, ee), e("div", te, [e("div", ne, [(s(!0), i(y, null, T(r.categories, (c, d) => (s(), i("p", {
          key: d,
          class: H(["tag", {
            p1: r.forSale,
            p2: !r.forSale
          }])
        }, S(c), 3))), 128))]), e("div", {
          class: "description h6",
          innerHTML: r.description
        }, null, 8, oe), r.forSale ? (s(), i("div", se, [r.price ? (s(), i("div", ie, "Price")) : M("", !0), e("div", ce, [e("div", {
          class: "price-value h4",
          innerHTML: r.price
        }, null, 8, re), u(l, {
          to: "/contact"
        }, {
          default: j(() => [u(a, {
            text: "Contact Us"
          })]),
          _: 1
        }), e("div", ae, [u(t)])])])) : M("", !0), e("div", le, [(s(!0), i(y, null, T(r.addInfo, (c, d) => (s(), i("div", {
          key: d,
          class: "credits-im"
        }, [e("div", {
          class: "credit-name p1",
          innerHTML: c.title
        }, null, 8, _e), e("div", {
          class: "credit-value p1",
          innerHTML: c.description
        }, null, 8, de)]))), 128))])])])])
      }
    }
  }),
  Dt = C(ue, [
    ["__scopeId", "data-v-a5e7c4ad"]
  ]),
  he = {
    class: "photo"
  },
  fe = {
    class: "photo"
  },
  ve = w({
    __name: "TwoVerticalPhotos",
    props: {
      firstPhoto: {},
      secondPhoto: {}
    },
    setup(k) {
      const r = I("transitionEnd"),
        p = f(!1),
        a = f();
      g(r, t => {
        t && l()
      }), E(async () => {
        await P(), r.value && l()
      });

      function l() {
        if (p.value) return;
        p.value = !0;
        const t = a.value;
        if (!t) return;
        const c = t.querySelectorAll(".photo");
        c != null && c.length && c.forEach(d => {
          D(d)
        })
      }
      return (t, c) => {
        const d = q;
        return s(), i("div", {
          ref_key: "twoPhotos",
          ref: a,
          class: "two-photos container"
        }, [e("div", he, [u(d, {
          photo: t.firstPhoto
        }, null, 8, ["photo"])]), e("div", fe, [u(d, {
          photo: t.secondPhoto
        }, null, 8, ["photo"])])], 512)
      }
    }
  }),
  Ft = C(ve, [
    ["__scopeId", "data-v-43b9e827"]
  ]),
  me = ["innerHTML"],
  $e = {
    class: "descriptions"
  },
  Le = {
    class: "description-wrapper"
  },
  ye = ["innerHTML"],
  He = ["innerHTML"],
  ke = {
    class: "description-wrapper"
  },
  Te = ["innerHTML"],
  Me = ["innerHTML"],
  ge = {
    key: 0,
    class: "features"
  },
  we = ["onClick"],
  Ce = {
    class: "feature-header"
  },
  Se = ["innerHTML"],
  Ee = {
    class: "feature-header-icon"
  },
  Pe = {
    class: "feature-content"
  },
  Be = ["innerHTML"],
  Ie = {
    class: "feature-line"
  },
  qe = w({
    __name: "BigTextWithDescription",
    props: {
      title: {},
      titleLeft: {},
      titleRight: {},
      descriptionLeft: {},
      descriptionRight: {},
      features: {}
    },
    setup(k) {
      const r = I("transitionEnd"),
        p = f(!1),
        a = f(),
        l = f(-1);
      g(r, o => {
        o && t()
      }), g(l, () => {
        d()
      }), E(async () => {
        await P(), r.value && t()
      });

      function t() {
        if (p.value) return;
        p.value = !0;
        const o = a.value;
        if (!o) return;
        const n = o.querySelector(".title");
        n && U(n)
      }

      function c(o) {
        l.value = o === l.value ? -1 : o
      }

      function d() {
        if (!a.value) return;
        a.value.querySelectorAll(".feature").forEach((n, v) => {
          var _;
          if (v === l.value) {
            const h = n.querySelector(".feature-content"),
              $ = (_ = n.querySelector(".feature-description")) == null ? void 0 : _.getBoundingClientRect().height;
            h && (h.style.maxHeight = `${$}px`)
          } else {
            const h = n.querySelector(".feature-content");
            h && (h.style.maxHeight = "0px")
          }
        })
      }
      return (o, n) => {
        const v = F,
          _ = B;
        return s(), i("div", {
          ref_key: "sectionEl",
          ref: a,
          class: "text-with-description container"
        }, [e("div", {
          class: "title h2",
          innerHTML: o.title
        }, null, 8, me), e("div", $e, [e("div", Le, [e("div", {
          class: "description-title p1 medium",
          innerHTML: o.titleLeft
        }, null, 8, ye), e("div", {
          class: "p1",
          innerHTML: o.descriptionLeft
        }, null, 8, He)]), e("div", ke, [e("div", {
          class: "description-title p1 medium",
          innerHTML: o.titleRight
        }, null, 8, Te), e("div", {
          class: "p1",
          innerHTML: o.descriptionRight
        }, null, 8, Me), o.features ? (s(), i("div", ge, [(s(!0), i(y, null, T(o.features, (h, $) => (s(), i("div", {
          key: $,
          class: H(["feature", {
            active: R(l) === $
          }]),
          onClick: L => c($)
        }, [e("div", Ce, [e("div", {
          class: "p1",
          innerHTML: h.title
        }, null, 8, Se), e("div", Ee, [u(v)])]), e("div", Pe, [e("div", {
          class: "feature-description p1",
          innerHTML: h.description
        }, null, 8, Be)]), e("div", Ie, [u(_)])], 10, we))), 128))])) : M("", !0)])])], 512)
      }
    }
  }),
  Vt = C(qe, [
    ["__scopeId", "data-v-55cce940"]
  ]),
  Ae = {
    class: "photo-wrapper"
  },
  Re = {
    class: "photo-wrapper"
  },
  De = w({
    __name: "TwoPhotos",
    props: {
      photoLeft: {},
      photoRight: {},
      forSale: {
        type: Boolean
      }
    },
    setup(k) {
      const r = I("transitionEnd"),
        p = f(!1),
        a = f();
      g(r, t => {
        t && l()
      }), E(async () => {
        await P(), r.value && l()
      });

      function l() {
        if (p.value) return;
        p.value = !0;
        const t = a.value;
        if (!t) return;
        const c = t.querySelectorAll(".photo-wrapper");
        c.length && c.forEach(d => {
          D(d)
        })
      }
      return (t, c) => {
        const d = q;
        return s(), i("div", {
          ref_key: "sectionEl",
          ref: a,
          class: H(["two-photos container", {
            "for-sale": t.forSale
          }])
        }, [e("div", Ae, [u(d, {
          photo: t.photoLeft
        }, null, 8, ["photo"])]), e("div", Re, [u(d, {
          photo: t.photoRight
        }, null, 8, ["photo"])])], 2)
      }
    }
  }),
  bt = C(De, [
    ["__scopeId", "data-v-bde147e5"]
  ]),
  Fe = {
    class: "plan-block__description-wrapper"
  },
  Ve = ["innerHTML"],
  be = {
    key: 1,
    class: "for-sale-features"
  },
  je = ["onClick"],
  xe = ["innerHTML"],
  Ne = {
    class: "feature-button",
    "aria-label": "open feature"
  },
  Ue = {
    class: "feature-content"
  },
  ze = ["innerHTML"],
  We = {
    class: "feature-line"
  },
  Oe = ["innerHTML"],
  Ge = {
    key: 3,
    class: "add-info"
  },
  Je = ["innerHTML"],
  Ke = ["innerHTML"],
  Qe = w({
    __name: "PhotoWithTextRight",
    props: {
      photo: {},
      features: {},
      title: {},
      description: {},
      addInfo: {},
      forSale: {
        type: Boolean
      }
    },
    setup(k) {
      const r = f(),
        p = I("transitionEnd"),
        a = f(!1),
        l = f(),
        t = f(-1);
      g(t, () => {
        o()
      }), g(p, n => {
        n && c()
      }), E(async () => {
        await P(), p.value && c()
      });

      function c() {
        a.value || (a.value = !0, l.value && D(l.value))
      }

      function d(n) {
        t.value = n === t.value ? -1 : n
      }

      function o() {
        const n = r.value,
          v = t;
        if (!n) return;
        n.querySelectorAll(".feature").forEach((h, $) => {
          var L;
          if ($ === v.value) {
            const m = h.querySelector(".feature-content"),
              A = (L = h.querySelector(".feature-description")) == null ? void 0 : L.getBoundingClientRect().height;
            m && (m.style.maxHeight = `${A}px`)
          } else {
            const m = h.querySelector(".feature-content");
            m && (m.style.maxHeight = "0px")
          }
        })
      }
      return (n, v) => {
        const _ = q,
          h = F,
          $ = B;
        return s(), i("div", {
          ref_key: "sectionEl",
          ref: r,
          class: H(["photo-with-text-right container", {
            "for-sale": n.forSale
          }])
        }, [e("div", {
          ref_key: "photoEl",
          ref: l,
          class: "plan-photo"
        }, [u(_, {
          photo: n.photo
        }, null, 8, ["photo"])], 512), e("div", Fe, [n.features ? M("", !0) : (s(), i("div", {
          key: 0,
          class: "description-title p1 medium",
          innerHTML: n.title
        }, null, 8, Ve)), n.features ? (s(), i("div", be, [(s(!0), i(y, null, T(n.features, (L, m) => (s(), i("div", {
          key: m,
          class: H(["feature", {
            open: R(t) === m
          }])
        }, [e("div", {
          class: "feature-header",
          onClick: A => d(m)
        }, [e("div", {
          class: "p1",
          innerHTML: L.title
        }, null, 8, xe), e("button", Ne, [u(h)])], 8, je), e("div", Ue, [e("div", {
          class: "feature-description p1",
          innerHTML: L.description
        }, null, 8, ze)]), e("div", We, [u($)])], 2))), 128))])) : (s(), i("div", {
          key: 2,
          class: "p1",
          innerHTML: n.description
        }, null, 8, Oe)), n.addInfo ? (s(), i("div", Ge, [(s(!0), i(y, null, T(n.addInfo, (L, m) => (s(), i("div", {
          key: m,
          class: "add-info-item"
        }, [e("div", {
          class: "p1",
          innerHTML: L.title
        }, null, 8, Je), e("div", {
          class: "add-info-item__description p1",
          innerHTML: L.description
        }, null, 8, Ke)]))), 128))])) : M("", !0)])], 2)
      }
    }
  }),
  jt = C(Qe, [
    ["__scopeId", "data-v-4f44c42e"]
  ]),
  Xe = ["innerHTML"],
  Ye = ["innerHTML"],
  Ze = {
    ref: "expertisesBlock",
    class: "expertises"
  },
  et = {
    class: "expertises-line"
  },
  tt = ["onClick"],
  nt = {
    class: "expertise-number p3"
  },
  ot = {
    class: "expertise-name p1"
  },
  st = {
    class: "expertise-button",
    "aria-label": "open expertise"
  },
  it = {
    class: "expertise-content"
  },
  ct = {
    class: "expertise-inner"
  },
  rt = {
    class: "expertise-description p1"
  },
  at = {
    class: "expertise-line"
  },
  lt = w({
    __name: "DetailsExpertises",
    props: {
      expertises: {},
      title: {},
      description: {},
      forSale: {
        type: Boolean
      }
    },
    setup(k) {
      const r = f(),
        p = f(-1);
      g(p, () => {
        l()
      });

      function a(t) {
        p.value = p.value === t ? -1 : t
      }

      function l() {
        if (!r.value) return;
        r.value.querySelectorAll(".expertise-content").forEach((c, d) => {
          if (d === p.value) {
            const o = c.querySelector(".expertise-inner"),
              n = o == null ? void 0 : o.getBoundingClientRect().height;
            c.style.maxHeight = `${n}px`
          } else c.style.maxHeight = "0px"
        })
      }
      return (t, c) => {
        const d = B,
          o = F;
        return s(), i("div", {
          ref_key: "sectionEl",
          ref: r,
          class: H(["details-expertises container", {
            "for-sale": t.forSale
          }])
        }, [e("div", {
          class: "title h6 medium",
          innerHTML: t.title
        }, null, 8, Xe), t.description ? (s(), i("div", {
          key: 0,
          class: "description h6",
          innerHTML: t.description
        }, null, 8, Ye)) : M("", !0), e("div", Ze, [e("div", et, [u(d)]), (s(!0), i(y, null, T(t.expertises, (n, v) => (s(), i("div", {
          key: v,
          class: H(["expertise-item", {
            active: R(p) === v
          }])
        }, [e("div", {
          class: "expertise-header",
          onClick: _ => a(v)
        }, [e("p", nt, S(`.${"0".repeat(v+1<10?1:0)}${v+1}`), 1), e("p", ot, S(n == null ? void 0 : n.title), 1), e("button", st, [u(o)])], 8, tt), e("div", it, [e("div", ct, [e("p", rt, S(n == null ? void 0 : n.description), 1)])]), e("div", at, [u(d)])], 2))), 128))], 512)], 2)
      }
    }
  }),
  xt = C(lt, [
    ["__scopeId", "data-v-3bfe29f2"]
  ]),
  _t = ["innerHTML"],
  dt = ["innerHTML"],
  pt = {
    class: "team"
  },
  ut = {
    class: "team-slider swiper"
  },
  ht = {
    class: "swiper-wrapper"
  },
  ft = {
    class: "team-photo"
  },
  vt = {
    class: "p1"
  },
  mt = {
    class: "team-position p1"
  },
  $t = w({
    __name: "DetailsTeam",
    props: {
      title: {},
      description: {},
      team: {},
      forSale: {
        type: Boolean
      }
    },
    setup(k) {
      const r = k,
        p = {
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
      E(async () => {
        await P(), l()
      }), N(() => {
        var t;
        a && ((t = a == null ? void 0 : a.destroy) == null || t.call(a))
      });

      function l() {
        r.team && (a = new z(".team-slider", p))
      }
      return (t, c) => {
        const d = q;
        return s(), i("div", {
          class: H(["details-team container", {
            "for-sale": t.forSale
          }])
        }, [e("div", {
          class: "title h6 medium",
          innerHTML: t.title
        }, null, 8, _t), t.description ? (s(), i("div", {
          key: 0,
          class: "description h6",
          innerHTML: t.description
        }, null, 8, dt)) : M("", !0), e("div", pt, [e("div", ut, [e("div", ht, [(s(!0), i(y, null, T(t.team, (o, n) => (s(), i("div", {
          key: n,
          class: "swiper-slide team-item"
        }, [e("div", ft, [u(d, {
          photo: o == null ? void 0 : o.photo
        }, null, 8, ["photo"])]), e("p", vt, S(o == null ? void 0 : o.name), 1), e("p", mt, S(o == null ? void 0 : o.position), 1)]))), 128))])])])], 2)
      }
    }
  }),
  Nt = C($t, [
    ["__scopeId", "data-v-56462068"]
  ]),
  Lt = {
    class: "header container"
  },
  yt = ["innerHTML"],
  Ht = {
    class: "header-line"
  },
  kt = ["innerHTML"],
  Tt = ["innerHTML"],
  Mt = {
    class: "swiper-wrapper"
  },
  gt = {
    class: "slide-photo"
  },
  wt = {
    name: "ProjectSlider"
  },
  Ct = w({
    ...wt,
    props: {
      forSale: {
        type: Boolean
      },
      title: {},
      description: {},
      photos: {}
    },
    setup(k) {
      const r = I("transitionEnd"),
        p = f(!1),
        a = f(),
        l = f(),
        t = {
          speed: 700,
          slidesPerView: "auto",
          preventClicks: !0,
          touchStartPreventDefault: !1
        };
      let c;
      g(r, _ => {
        _ && v()
      }), E(async () => {
        await P(), d(), r.value && v()
      }), N(() => {
        var _;
        (_ = c == null ? void 0 : c.destroy) == null || _.call(c)
      });

      function d() {
        c = new z(".slider-block", t)
      }

      function o() {
        l.value && l.value.classList.add("shrinked-photos")
      }

      function n() {
        l.value && l.value.classList.remove("shrinked-photos")
      }

      function v() {
        if (p.value) return;
        p.value = !0;
        const _ = a.value;
        if (!_) return;
        const h = _.querySelector(".title");
        h && setTimeout(() => {
          U(h)
        }, 500)
      }
      return (_, h) => {
        var V, b;
        const $ = Q,
          L = x,
          m = B,
          A = q,
          W = X;
        return s(), i("section", {
          ref_key: "sliderSection",
          ref: a,
          class: H(["slider", {
            "for-sale": _.forSale
          }])
        }, [e("header", Lt, [_.forSale ? (s(), i(y, {
          key: 0
        }, [u(L, {
          to: "/development"
        }, {
          default: j(() => [u($, {
            text: "Development",
            reverse: ""
          })]),
          _: 1
        }), e("div", {
          class: "p1",
          innerHTML: _.title
        }, null, 8, yt), e("div", Ht, [u(m)])], 64)) : (s(), i(y, {
          key: 1
        }, [e("div", {
          class: "title h2",
          innerHTML: _.title
        }, null, 8, kt), e("div", {
          class: "description p1",
          innerHTML: _.description || ""
        }, null, 8, Tt)], 64))]), e("div", {
          ref_key: "sliderBlock",
          ref: l,
          class: H(["slider-block swiper", {
            "no-drag": ((V = _.photos) == null ? void 0 : V.length) && _.photos.length < 4
          }])
        }, [e("div", Mt, [(s(!0), i(y, null, T(_.photos, (O, G) => (s(), i("div", {
          key: G,
          class: "swiper-slide"
        }, [e("div", gt, [u(A, {
          photo: O,
          "defaule-size": "large"
        }, null, 8, ["photo"])])]))), 128))])], 2), (b = _.photos) != null && b.length && _.photos.length > 3 ? (s(), K(W, {
          key: 0,
          container: R(l),
          onPressed: o,
          onUnpressed: n
        }, null, 8, ["container"])) : M("", !0)], 2)
      }
    }
  }),
  Ut = C(Ct, [
    ["__scopeId", "data-v-f24a3b7f"]
  ]);
export {
  Dt as _, Ft as a, Vt as b, bt as c, jt as d, xt as e, Nt as f, Ut as g
};