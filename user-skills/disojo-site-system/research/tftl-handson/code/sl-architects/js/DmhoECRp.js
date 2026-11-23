/* https://ab-sl.ru/_nuxt/DmhoECRp.js */
import {
  _ as v
} from "./CtZNtPPQ.js";
import {
  _ as g
} from "./K2R7Lw84.js";
import {
  _ as k
} from "./DXpihNzX.js";
import {
  _ as w
} from "./Ce7eQ4le.js";
import {
  d as u,
  c as d,
  a as s,
  t as c,
  x,
  b as l,
  F as $,
  r as C,
  o as i,
  A as y,
  m as b,
  _ as f,
  g as B,
  w as S,
  e as r,
  i as F
} from "./DROVP5M4.js";
import {
  _ as M
} from "./BScAP6FH.js";
import {
  s as N
} from "./DFRH1ql4.js";
const V = {
    class: "main"
  },
  A = {
    class: "container inner"
  },
  D = {
    class: "link-wrapper col-18"
  },
  I = ["href"],
  P = {
    class: "p1"
  },
  E = {
    class: "link-wrapper col-18"
  },
  G = {
    class: "p1"
  },
  L = ["href"],
  T = {
    class: "socials-wrapper col-18"
  },
  U = {
    class: "form-block"
  },
  W = {
    class: "p1 form-description"
  },
  j = {
    class: "form-inner"
  },
  q = {
    class: "addresses-wrapper"
  },
  z = {
    class: "planet-wrapper"
  },
  H = ["href"],
  J = {
    name: "ContactMain"
  },
  K = u({
    ...J,
    props: {
      phone: {},
      email: {},
      addresses: {},
      description: {}
    },
    setup(t) {
      return (e, a) => {
        const p = v,
          o = g,
          m = k,
          h = w;
        return i(), d("section", V, [a[1] || (a[1] = s("div", {
          class: "header-gap col-18"
        }, null, -1)), s("div", A, [s("div", D, [s("a", {
          href: `tel:${t.phone}`,
          target: "_blank",
          rel: "nofollow",
          class: "h1"
        }, c(t.phone), 9, I), s("p", P, [x(c(e.$t("phone")) + " ", 1), a[0] || (a[0] = s("span", {
          class: "secondary-sup"
        }, "[whatsapp]", -1))])]), s("div", E, [s("p", G, c(e.$t("email")), 1), s("a", {
          href: `mailto:${t.email}`,
          target: "_blank",
          rel: "nofollow",
          class: "h1"
        }, c(t.email), 9, L)]), s("div", T, [l(p, {
          "alternative-view": ""
        })]), s("div", U, [s("p", W, c(t.description), 1), s("div", j, [l(o)])]), s("div", q, [s("div", z, [l(m, {
          light: "",
          "rotate-to-point": "",
          points: t.addresses?.map(n => ({
            link: n?.link,
            ...n.location
          }))
        }, null, 8, ["points"])]), (i(!0), d($, null, C(t.addresses, (n, _) => (i(), d("a", {
          key: _,
          href: n?.link,
          target: "_blank",
          rel: "nofollow",
          class: "address-item"
        }, [n.address ? (i(), y(h, {
          key: 0,
          texts: [e.$t("address"), n?.address],
          sup: `[${String(_+1).padStart(2,"0")}]`
        }, null, 8, ["texts", "sup"])) : b("", !0)], 8, H))), 128))])])])
      }
    }
  }),
  O = f(K, [
    ["__scopeId", "data-v-7f5857c2"]
  ]),
  Q = {
    class: "page contact-page"
  },
  R = {
    name: "ContactPage"
  },
  X = u({
    ...R,
    async setup(t) {
      let e, a;
      const p = B().locale.value,
        {
          data: o
        } = ([e, a] = S(() => F("contact", () => $fetch("/api/pages/pageContact", {
          method: "post",
          body: {
            locale: p
          }
        }))), e = await e, a(), e);
      return N(o?.value?.meta), (m, h) => {
        const n = O,
          _ = M;
        return i(), d("div", null, [s("main", Q, [l(n, {
          phone: r(o)?.phone,
          email: r(o)?.email,
          socials: r(o)?.socials,
          addresses: r(o)?.addresses,
          description: r(o)?.description
        }, null, 8, ["phone", "email", "socials", "addresses", "description"])]), l(_)])
      }
    }
  }),
  as = f(X, [
    ["__scopeId", "data-v-2a55714c"]
  ]);
export {
  as as
  default
};