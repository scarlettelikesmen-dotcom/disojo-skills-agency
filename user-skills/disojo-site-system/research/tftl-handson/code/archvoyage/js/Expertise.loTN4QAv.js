/* https://archvoyage.ae/_nuxt/Expertise.loTN4QAv.js */
import {
  d as E,
  u as S,
  c as k,
  r as l,
  w,
  o as y,
  n as I,
  a as T,
  b as B,
  e,
  f as N,
  t as p,
  j as m,
  g as d,
  v as V,
  m as g
} from "./entry.YPAKmh3d.js";
import {
  _ as A
} from "./List.Xuxzn0qK.js";
import {
  u as C
} from "./Contact.D-xzsxJa.js";
import {
  t as L
} from "./titleAnim.CszaPWUV.js";
const M = {
    class: "header container"
  },
  W = {
    class: "title h2"
  },
  b = {
    class: "italic"
  },
  j = {
    class: "header-line"
  },
  q = {
    name: "MainExpertise"
  },
  D = E({
    ...q,
    props: {
      title: {},
      items: {}
    },
    setup(u) {
      const f = u,
        n = S("transitionEnd"),
        {
          titleWithItalic: x
        } = C(),
        o = k(() => x(f.title)),
        i = l(!1),
        a = l();
      w(n, t => {
        t && c()
      }), y(async () => {
        await I(), n.value && c()
      });

      function c() {
        if (i.value) return;
        i.value = !0;
        const t = a.value;
        if (!t) return;
        const s = t.querySelector(".title");
        s && L(s)
      }
      return (t, s) => {
        var r, _;
        const h = V,
          v = A;
        return T(), B("section", {
          ref_key: "expertiseSection",
          ref: a,
          class: "expertise"
        }, [e("div", M, [e("p", W, [N(p((r = m(o)) == null ? void 0 : r.first_word) + " ", 1), e("span", b, p((_ = m(o)) == null ? void 0 : _.rest), 1)]), e("div", j, [d(h)])]), d(v, {
          expertises: t.items
        }, null, 8, ["expertises"])], 512)
      }
    }
  }),
  J = g(D, [
    ["__scopeId", "data-v-da70c03c"]
  ]);
export {
  J as _
};