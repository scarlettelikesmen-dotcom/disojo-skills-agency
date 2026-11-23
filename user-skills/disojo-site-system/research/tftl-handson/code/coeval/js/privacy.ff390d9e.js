/* https://coevalstudio.com/_nuxt/privacy.ff390d9e.js */
import {
  H as M,
  T as w
} from "./components.f929feb2.js";
import {
  W as x,
  w as F,
  C as N,
  c as f,
  l as i,
  E as l,
  a as e,
  G as o,
  t as a,
  u as t,
  T as k,
  b as V,
  d as A,
  j as B,
  J as S,
  o as T,
  a8 as P,
  a9 as D
} from "./entry.7e3c7585.js";
import {
  _ as E
} from "./Footer.15b17ac6.js";
const U = {
    class: "page"
  },
  Y = {
    class: "page-contents move-loader main"
  },
  j = {
    class: "page-contents__aside"
  },
  G = {
    class: "page-contents__date"
  },
  J = {
    class: "page-contents__data"
  },
  R = {
    class: "page-contents__nav"
  },
  W = {
    class: "page-contents__content"
  },
  $ = e("h1", {
    class: "text-h1 page-contents__title"
  }, [o("Privacy"), e("br"), o("Policy")], -1),
  q = {
    class: "page-contents__date --tablet"
  },
  z = {
    class: "page-contents__data"
  },
  I = ["innerHTML"],
  K = ["innerHTML"],
  O = "Privacy Policy",
  st = {
    __name: "privacy",
    async setup(Q) {
      var p, u, m;
      let c, d;
      x({
        metaTitle: "Privacy & Policy"
      });
      const b = V().public.baseUrl,
        r = ([c, d] = F(() => A("privacy", () => $fetch(b + "/api/privacy-policy-and-terms-of-use?populate=deep,2"))), c = await c, d(), c),
        _ = (m = (u = (p = r == null ? void 0 : r.data) == null ? void 0 : p.value) == null ? void 0 : u.data) == null ? void 0 : m.attributes,
        s = new Date(_.updatedAt);
      return N(() => {
        B({
          el: ".page-contents__title",
          delay: .7
        })
      }), (n, Z) => {
        var g, v, y;
        const H = w,
          C = M,
          h = S,
          L = E;
        return T(), f("div", U, [i(C, null, {
          default: l(() => [i(H, null, {
            default: l(() => [o(a(O))]),
            _: 1
          })]),
          _: 1
        }), e("main", Y, [e("div", j, [e("div", G, [o(" Last updated: "), e("span", J, a(t(s).getDate()) + a(("nthDate" in n ? n.nthDate : t(P))(t(s))) + " " + a(("month" in n ? n.month : t(D))[t(s).getMonth()]) + " ’" + a(t(s).getFullYear().toString().slice(2)), 1)]), e("div", R, [i(h, {
          to: "/privacy",
          class: "tab active"
        }, {
          default: l(() => [o("Privacy Policy")]),
          _: 1
        }), i(h, {
          to: "/terms",
          class: "tab"
        }, {
          default: l(() => [o("Terms of Use")]),
          _: 1
        })])]), e("div", W, [$, e("div", q, [o(" Last updated: "), e("span", z, a(t(s).getDate()) + a(("nthDate" in n ? n.nthDate : t(P))(t(s))) + " " + a(("month" in n ? n.month : t(D))[t(s).getMonth()]) + " ’" + a(t(s).getFullYear().toString().slice(2)), 1)]), (g = t(_)) != null && g.First_description_PP ? (T(), f("div", {
          key: 0,
          class: "text-p3",
          innerHTML: (v = t(_)) == null ? void 0 : v.First_description_PP
        }, null, 8, I)) : k("", !0), e("div", {
          class: "text-p3",
          innerHTML: (y = t(_)) == null ? void 0 : y.Text_Privacy_Policy
        }, null, 8, K)])]), i(L)])
      }
    }
  };
export {
  st as
  default
};