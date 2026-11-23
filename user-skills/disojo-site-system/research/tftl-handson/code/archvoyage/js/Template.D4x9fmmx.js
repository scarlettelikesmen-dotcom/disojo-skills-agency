/* https://archvoyage.ae/_nuxt/Template.D4x9fmmx.js */
import {
  _ as w
} from "./ArrowDown.BETtDbQg.js";
import {
  d as k,
  u as C,
  r as p,
  w as v,
  o as I,
  n as E,
  a as d,
  b as m,
  e as t,
  t as g,
  g as c,
  F as H,
  i as S,
  y as b,
  j as A,
  v as B,
  m as D
} from "./entry.YPAKmh3d.js";
import {
  _ as L
} from "./Plus.DQtF0hp8.js";
import {
  t as T
} from "./titleAnim.CszaPWUV.js";
const q = {
    class: "info-page"
  },
  M = {
    class: "header container"
  },
  $ = {
    class: "arrow"
  },
  F = {
    class: "list-line"
  },
  N = ["onClick"],
  P = {
    class: "item-title h6 medium"
  },
  V = {
    class: "item-button",
    "aria-label": "show description"
  },
  j = {
    class: "item-content"
  },
  z = ["innerHTML"],
  R = {
    class: "item-line"
  },
  G = {
    name: "InfoPageTemplate"
  },
  J = k({
    ...G,
    props: {
      title: {},
      items: {}
    },
    setup(K) {
      const u = C("preloaderDone"),
        f = p(),
        l = p(),
        s = p(-1);
      v(u, e => {
        e && h()
      }), v(s, () => {
        x()
      }), I(async () => {
        await E(), u.value && h()
      });

      function h() {
        const e = f.value;
        e && T(e)
      }

      function y(e) {
        s.value = e === s.value ? -1 : e
      }

      function x() {
        if (!l.value) return;
        const e = l.value.querySelectorAll(".item");
        e != null && e.length && e.forEach((r, _) => {
          var a, n;
          const o = r.querySelector(".item-content");
          if (_ === s.value) {
            const i = (n = (a = r.querySelector(".item-description-wrapper")) == null ? void 0 : a.getBoundingClientRect()) == null ? void 0 : n.height;
            o && (o.style.maxHeight = `${i}px`)
          } else o && (o.style.maxHeight = "0px")
        })
      }
      return (e, r) => {
        const _ = w,
          o = B,
          a = L;
        return d(), m("div", q, [t("header", M, [t("h1", {
          ref_key: "titleEl",
          ref: f,
          class: "title h1"
        }, g(e.title), 513), t("div", $, [c(_)])]), t("div", {
          ref_key: "listEl",
          ref: l,
          class: "list"
        }, [t("div", F, [c(o)]), (d(!0), m(H, null, S(e.items, (n, i) => (d(), m("div", {
          key: i,
          class: b(["item container", {
            active: A(s) === i
          }])
        }, [t("div", {
          class: "item-header",
          onClick: O => y(i)
        }, [t("p", P, g(n == null ? void 0 : n.title), 1), t("button", V, [c(a)])], 8, N), t("div", j, [t("div", {
          class: "item-description-wrapper p1",
          innerHTML: n == null ? void 0 : n.description
        }, null, 8, z)]), t("div", R, [c(o)])], 2))), 128))], 512)])
      }
    }
  }),
  Y = D(J, [
    ["__scopeId", "data-v-76f63a13"]
  ]);
export {
  Y as _
};