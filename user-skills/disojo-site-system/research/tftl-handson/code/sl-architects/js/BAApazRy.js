/* https://ab-sl.ru/_nuxt/BAApazRy.js */
import {
  d as _,
  g as u,
  c as o,
  a as t,
  t as e,
  m,
  F as h,
  r as g,
  o as i,
  _ as v
} from "./DROVP5M4.js";
const f = {
    class: "legal container"
  },
  L = {
    class: "info-wrapper"
  },
  w = {
    class: "l1 caption"
  },
  y = {
    class: "date-wrapper"
  },
  U = {
    class: "l1"
  },
  k = {
    class: "l1"
  },
  D = {
    class: "content-wrapper"
  },
  H = {
    class: "h2 title"
  },
  M = {
    class: "date-wrapper"
  },
  T = {
    class: "l1"
  },
  B = {
    class: "l1"
  },
  S = {
    class: "content"
  },
  $ = ["innerHTML"],
  C = {
    class: "p1 item-title"
  },
  F = ["innerHTML"],
  I = {
    name: "LegalPage"
  },
  N = _({
    ...I,
    props: {
      title: {},
      date: {},
      description: {},
      items: {},
      lastUpdate: {}
    },
    setup(n) {
      const l = n,
        r = u().locale.value,
        c = () => {
          if (!l?.lastUpdate) return;
          const a = new Date(l?.lastUpdate),
            s = {
              year: "numeric",
              month: "long",
              day: "numeric"
            };
          return a.toLocaleDateString(r === "en" ? "en-US" : "ru-RU", s)
        };
      return (a, s) => (i(), o("section", f, [s[1] || (s[1] = t("div", {
        class: "header-gap col-18"
      }, null, -1)), t("div", L, [t("p", w, e(a.$t("legal.legal")), 1), t("div", y, [t("p", U, e(a.$t("last_updated")), 1), t("p", k, e(c()), 1)])]), t("div", D, [s[0] || (s[0] = t("div", {
        class: "header-gap col-18"
      }, null, -1)), t("h1", H, e(n.title), 1), t("div", M, [t("p", T, e(a.$t("last_updated")), 1), t("p", B, e(c()), 1)]), t("div", S, [n.description ? (i(), o("div", {
        key: 0,
        class: "p1 description",
        innerHTML: n.description
      }, null, 8, $)) : m("", !0), (i(!0), o(h, null, g(n.items, (d, p) => (i(), o("div", {
        key: p,
        class: "item"
      }, [t("p", C, e(d.title), 1), t("div", {
        class: "p1 item-description",
        innerHTML: d.description
      }, null, 8, F)]))), 128))])])]))
    }
  }),
  x = v(N, [
    ["__scopeId", "data-v-8c5324e4"]
  ]);
export {
  x as _
};