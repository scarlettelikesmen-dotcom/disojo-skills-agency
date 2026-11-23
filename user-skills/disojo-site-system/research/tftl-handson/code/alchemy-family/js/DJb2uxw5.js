/* https://alchemy.family/_nuxt/DJb2uxw5.js */
import {
  g as _,
  S as y,
  d as x,
  y as w,
  r as S,
  o as m,
  c as p,
  a as e,
  t as u,
  j as h,
  z as n,
  J as r,
  M as o,
  F as b,
  i as C,
  C as I,
  O as F,
  _ as j,
  u as D,
  p as L,
  l as N
} from "./CWeo--9S.js";
import {
  u as T
} from "./49XQLREk.js";

function E(t, s = {}) {
  const a = t ? typeof t == "string" ? document.querySelectorAll(t) : t : null;
  return a ? _.timeline().from(a, {
    opacity: 0,
    yPercent: 20,
    duration: 1,
    ...s
  }) : _.timeline()
}

function oe(t, s = {}, a = {}) {
  const i = E(t, a);
  return y.create({
    trigger: t,
    start: "top bottom",
    animation: i,
    ...s
  })
}
const P = {
    class: "caption common-footer__copy js-anim"
  },
  O = {
    class: "common-footer__email js-anim"
  },
  V = ["href"],
  A = {
    class: "common-footer__center"
  },
  B = {
    class: "js-anim"
  },
  R = {
    class: "common-footer__logo js-anim"
  },
  M = {
    class: "js-anim"
  },
  Y = {
    class: "common-footer__socials js-anim"
  },
  q = {
    key: 0,
    class: "caption"
  },
  z = {
    class: "caption common-footer__dev js-anim"
  },
  J = {
    name: "CommonFooter"
  },
  W = x({
    ...J,
    setup(t) {
      const s = w("common-data"),
        a = S();
      return T(() => {
        y.create({
          trigger: a.value,
          start: "top bottom",
          animation: E(".js-anim", {
            y: 0,
            yPercent: 0,
            clearProps: "all",
            stagger: {
              from: "center",
              each: .05
            }
          })
        })
      }, !0), (i, f) => {
        var d, c, g;
        const l = F;
        return m(), p("footer", {
          ref_key: "footerEl",
          ref: a,
          class: "common-footer"
        }, [e("p", P, " ⓒ All Rights Reserved " + u(new Date().getFullYear()), 1), e("div", O, [e("a", {
          href: `mailto:${(d=h(s))==null?void 0:d.email}`,
          class: "common-link"
        }, u((c = h(s)) == null ? void 0 : c.email), 9, V)]), e("div", A, [e("div", B, [n(l, {
          to: "/privacy-policy",
          class: "common-link"
        }, {
          default: r(() => [o(" privacy policy ")]),
          _: 1
        })]), e("div", R, [n(l, {
          to: "/",
          "aria-label": "go to home page"
        })]), e("div", M, [n(l, {
          to: "/terms-of-use",
          class: "common-link"
        }, {
          default: r(() => [o("Terms Of use")]),
          _: 1
        })])]), e("div", Y, [(m(!0), p(b, null, C(((g = h(s)) == null ? void 0 : g.socials) ?? [], (v, k) => (m(), p(b, {
          key: k
        }, [k !== 0 ? (m(), p("span", q, ", ")) : I("", !0), n(l, {
          external: "",
          target: "_blank",
          class: "common-link",
          to: v.link
        }, {
          default: r(() => [o(u(v.name), 1)]),
          _: 2
        }, 1032, ["to"])], 64))), 128))]), e("p", z, [o(" Dev by "), n(l, {
          to: "https://thefirstthelast.agency/?utm_source=alchemy-family&utm_medium=article&utm_campaign=promo",
          external: "",
          target: "_blank",
          class: "common-link"
        }, {
          default: r(() => [o(" TFTL ")]),
          _: 1
        })])], 512)
      }
    }
  }),
  ae = j(W, [
    ["__scopeId", "data-v-a7b53d5b"]
  ]),
  $ = t => (L("data-v-a8a60056"), t = t(), N(), t),
  G = {
    class: "footer__dev caption"
  },
  H = $(() => e("br", null, null, -1)),
  K = {
    class: "caption footer__copy"
  },
  Q = $(() => e("br", null, null, -1)),
  U = {
    class: "footer__links"
  },
  X = {
    name: "CommonFooterMobile"
  },
  Z = x({
    ...X,
    emits: ["footer-visible", "footer-hidden"],
    setup(t, {
      emit: s
    }) {
      const {
        isMobile: a
      } = D(), i = S(), f = s;
      return T(() => {
        y.create({
          trigger: i.value,
          onEnter() {
            a.value ? (_.to(".frame", {
              opacity: 0,
              pointerEvents: "none",
              duration: .3,
              ease: "power1.inOut"
            }), f("footer-visible")) : _.to(".frame", {
              clearProps: "all"
            })
          },
          onLeaveBack() {
            a.value ? (_.to(".frame", {
              opacity: 1,
              pointerEvents: "",
              duration: .3,
              ease: "power1.inOut",
              clearProps: "all"
            }), f("footer-hidden")) : _.to(".frame", {
              clearProps: "all"
            })
          }
        })
      }), (l, d) => {
        const c = F;
        return m(), p("footer", {
          ref_key: "footerEl",
          ref: i,
          class: "footer"
        }, [n(c, {
          to: "/",
          "aria-label": "go to main",
          class: "footer__logo"
        }), e("p", G, [n(c, {
          to: "https://thefirstthelast.agency/?utm_source=alchemy-family&utm_medium=article&utm_campaign=promo",
          external: "",
          target: "_blank"
        }, {
          default: r(() => [o(" Dev by The First"), H, o(" The Last")]),
          _: 1
        })]), e("p", K, [o(" ⓒ All Rights"), Q, o(" Reserved " + u(new Date().getFullYear()), 1)]), e("p", U, [n(c, {
          to: "/terms-of-use",
          class: "caption"
        }, {
          default: r(() => [o("Terms Of use")]),
          _: 1
        }), n(c, {
          to: "/privacy-policy",
          class: "caption"
        }, {
          default: r(() => [o("privacy policy")]),
          _: 1
        })])], 512)
      }
    }
  }),
  se = j(Z, [
    ["__scopeId", "data-v-a8a60056"]
  ]);
export {
  ae as _, E as a, oe as b, se as c
};