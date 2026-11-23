/* https://alchemy.family/_nuxt/-6YC6hfl.js */
import {
  d as p,
  o as n,
  c as t,
  H as B,
  k as y,
  y as v,
  u as C,
  F as M,
  i as S,
  B as c,
  J as _,
  M as f,
  t as m,
  S as T,
  O as L,
  _ as $
} from "./CWeo--9S.js";
import {
  b
} from "./49XQLREk.js";
const E = ["href", "target"],
  w = p({
    __name: "Link",
    props: {
      href: {},
      isEmail: {
        type: Boolean,
        default: !1
      },
      isPhone: {
        type: Boolean,
        default: !1
      },
      external: {
        type: Boolean,
        default: !1
      },
      underline: {
        type: Boolean,
        default: !0
      }
    },
    setup(d) {
      return (e, i) => (n(), t("a", {
        href: (e.isEmail ? "mailto:" : e.isPhone ? "tel:" : "") + e.href,
        target: e.external ? "_blank" : "_self",
        class: y(["common-link link", {
          underline: e.underline
        }])
      }, [B(e.$slots, "default")], 10, E))
    }
  }),
  x = {
    class: "menu"
  },
  F = p({
    __name: "HeaderMenu",
    props: {
      menu: {}
    },
    setup(d) {
      const e = v("lenis"),
        {
          close: i
        } = b(),
        {
          isMobile: k
        } = C();

      function g(s) {
        k.value ? i(() => {
          var a;
          const o = T.getById("logo-animation");
          (a = o == null ? void 0 : o.animation) == null || a.progress(1), o == null || o.scroll(500), e.value.start(), e.value.scrollTo(s, {
            offset: -100
          })
        }) : e.value.scrollTo(s, {
          offset: -200
        })
      }
      return (s, o) => {
        const a = w,
          h = L;
        return n(), t("ul", x, [(n(!0), t(M, null, S(s.menu, ({
          text: l,
          anchor: u,
          link: r
        }) => (n(), t("li", {
          key: l
        }, [r ? (n(), c(h, {
          key: 1,
          to: r,
          class: "common-link link"
        }, {
          default: _(() => [f(m(l), 1)]),
          _: 2
        }, 1032, ["to"])) : (n(), c(a, {
          key: 0,
          href: r ?? u,
          class: "link",
          onClick: H => g(u)
        }, {
          default: _(() => [f(m(l), 1)]),
          _: 2
        }, 1032, ["href", "onClick"]))]))), 128))])
      }
    }
  }),
  P = $(F, [
    ["__scopeId", "data-v-fa22e911"]
  ]);
export {
  P as _
};