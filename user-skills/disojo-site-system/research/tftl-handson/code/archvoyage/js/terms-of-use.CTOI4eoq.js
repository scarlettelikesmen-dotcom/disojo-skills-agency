/* https://archvoyage.ae/_nuxt/terms-of-use.CTOI4eoq.js */
import {
  _ as l
} from "./Template.D4x9fmmx.js";
import {
  s as u,
  _ as f
} from "./setPageMeta.DvPDcq0E.js";
import {
  d,
  q as g,
  b as h,
  g as c,
  h as x,
  s as P,
  a as T,
  j as r,
  e as w
} from "./entry.YPAKmh3d.js";
import "./ArrowDown.BETtDbQg.js";
import "./Plus.DQtF0hp8.js";
import "./titleAnim.CszaPWUV.js";
const y = {
    class: "terms-of-use-page page"
  },
  B = w("div", {
    class: "header-gap"
  }, null, -1),
  C = {
    name: "TermsOfUsePage"
  },
  q = d({
    ...C,
    async setup(k) {
      var a;
      let t, s;
      const {
        data: e
      } = ([t, s] = g(() => P("terms-of-use", () => $fetch("/api/pages/pageTermsOfUse"))), t = await t, s(), t);
      return u((a = e == null ? void 0 : e.value) == null ? void 0 : a.meta), (v, A) => {
        const p = l,
          i = f;
        return T(), h("main", y, [c(i, null, {
          default: x(() => {
            var o, n, _, m;
            return [B, c(p, {
              title: (n = (o = r(e)) == null ? void 0 : o.main) == null ? void 0 : n.title,
              items: (m = (_ = r(e)) == null ? void 0 : _.main) == null ? void 0 : m.items
            }, null, 8, ["title", "items"])]
          }),
          _: 1
        })])
      }
    }
  });
export {
  q as
  default
};