/* https://ab-sl.ru/_nuxt/BScAP6FH.js */
import {
  d,
  h,
  g as f,
  o as l,
  c as _,
  a as e,
  x as a,
  t as s,
  e as n,
  F as k,
  r as y,
  b as g,
  v as x,
  y as v,
  s as F,
  _ as b
} from "./DROVP5M4.js";
const L = {
    class: "small-footer container"
  },
  w = {
    class: "l1 copyright"
  },
  N = {
    class: "copyright__item"
  },
  B = {
    class: "links"
  },
  S = {
    class: "l1 developer"
  },
  T = d({
    __name: "FooterSmall",
    setup(V) {
      const o = h(),
        {
          t
        } = f(),
        i = F(() => new Date().getFullYear()),
        p = [{
          name: "FAQ",
          link: o("/faq")
        }, {
          name: t("menu.privacy_policy"),
          link: o("/privacy-policy")
        }, {
          name: t("menu.terms_of_use"),
          link: o("/terms-of-use")
        }];
      return (A, r) => {
        const m = x;
        return l(), _("footer", L, [e("p", w, [a(" ©" + s(n(i)) + " SL Architects. ", 1), e("span", N, s(n(t)("preloader.reserved") + "."), 1)]), e("div", B, [(l(), _(k, null, y(p, (c, u) => g(m, {
          key: u,
          class: "l1--link",
          to: c.link
        }, {
          default: v(() => [a(s(c.name), 1)]),
          _: 2
        }, 1032, ["to"])), 64))]), e("p", S, [a(s(n(t)("website_by")) + " ", 1), r[0] || (r[0] = e("a", {
          href: "https://thefirstthelast.agency/?utm_source=theothersideoftruth&utm_medium=article&utm_campaign=promo",
          target: "_blank",
          rel: "noreferrer noopener nofollow",
          class: "l1--link developer__link"
        }, "The First The Last", -1))])])
      }
    }
  }),
  D = b(T, [
    ["__scopeId", "data-v-ce3b543f"]
  ]);
export {
  D as _
};