/* https://coevalstudio.com/_nuxt/terms.b2408b3c.js */
import {
  H as w,
  T as L
} from "./components.f929feb2.js";
import {
  w as M,
  W as k,
  C as B,
  c as N,
  l as _,
  E as l,
  a as e,
  G as o,
  t as s,
  u as t,
  b as S,
  d as U,
  j as x,
  J as A,
  o as F,
  a8 as T,
  a9 as v
} from "./entry.7e3c7585.js";
import {
  _ as P
} from "./Footer.15b17ac6.js";
const V = {
    class: "page"
  },
  E = {
    class: "page-contents move-loader main"
  },
  Y = {
    class: "page-contents__aside"
  },
  j = {
    class: "page-contents__date"
  },
  G = {
    class: "page-contents__data"
  },
  J = {
    class: "page-contents__nav"
  },
  R = {
    class: "page-contents__content"
  },
  W = e("h1", {
    class: "text-h1 page-contents__title"
  }, [o("Terms"), e("br"), o("of Use")], -1),
  $ = {
    class: "page-contents__date --tablet"
  },
  q = {
    class: "page-contents__data"
  },
  z = ["innerHTML"],
  tt = {
    __name: "terms",
    async setup(I) {
      var p, m, u, h;
      let c, r;
      const y = S().public.baseUrl,
        d = ([c, r] = M(() => U("privacy", () => $fetch(y + "/api/privacy-policy-and-terms-of-use?populate=deep,2"))), c = await c, r(), c),
        i = (u = (m = (p = d == null ? void 0 : d.data) == null ? void 0 : p.value) == null ? void 0 : m.data) == null ? void 0 : u.attributes,
        D = ((h = i == null ? void 0 : i.Seo_Block) == null ? void 0 : h.metaTitle) || "Terms & Conditions",
        a = new Date(i.updatedAt);
      return k({
        metaTitle: "Terms & Conditions"
      }), B(() => {
        x({
          el: ".page-contents__title",
          delay: .7
        })
      }), (n, O) => {
        var f;
        const b = L,
          C = w,
          g = A,
          H = P;
        return F(), N("div", V, [_(C, null, {
          default: l(() => [_(b, null, {
            default: l(() => [o(s(t(D)), 1)]),
            _: 1
          })]),
          _: 1
        }), e("main", E, [e("div", Y, [e("div", j, [o(" Last updated: "), e("span", G, s(t(a).getDate()) + s(("nthDate" in n ? n.nthDate : t(T))(t(a))) + " " + s(("month" in n ? n.month : t(v))[t(a).getMonth()]) + " ’" + s(t(a).getFullYear().toString().slice(2)), 1)]), e("div", J, [_(g, {
          to: "/privacy",
          class: "tab"
        }, {
          default: l(() => [o("Privacy Policy")]),
          _: 1
        }), _(g, {
          to: "/terms",
          class: "tab active"
        }, {
          default: l(() => [o("Terms of Use")]),
          _: 1
        })])]), e("div", R, [W, e("div", $, [o(" Last updated: "), e("span", q, s(t(a).getDate()) + s(("nthDate" in n ? n.nthDate : t(T))(t(a))) + " " + s(("month" in n ? n.month : t(v))[t(a).getMonth()]) + " ’" + s(t(a).getFullYear().toString().slice(2)), 1)]), e("div", {
          class: "text-p3",
          innerHTML: (f = t(i)) == null ? void 0 : f.Text_Terms_of_Use
        }, null, 8, z)])]), _(H)])
      }
    }
  };
export {
  tt as
  default
};