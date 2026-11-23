/* https://archvoyage.ae/_nuxt/privacy-policy.Dm_TYgmD.js */
import {
  _ as l
} from "./Template.D4x9fmmx.js";
import {
  s as u,
  _ as f
} from "./setPageMeta.DvPDcq0E.js";
import {
  d as y,
  q as d,
  b as g,
  g as i,
  h,
  s as P,
  a as v,
  j as p,
  e as x
} from "./entry.YPAKmh3d.js";
import "./ArrowDown.BETtDbQg.js";
import "./Plus.DQtF0hp8.js";
import "./titleAnim.CszaPWUV.js";
const w = {
    class: "privacy-policy-page page"
  },
  B = x("div", {
    class: "header-gap"
  }, null, -1),
  C = {
    name: "PrivacyPolicyPage"
  },
  E = y({
    ...C,
    async setup(k) {
      var o;
      let t, a;
      const {
        data: e
      } = ([t, a] = d(() => P("privacy-policy", () => $fetch("/api/pages/pagePrivacyPolicy"))), t = await t, a(), t);
      return u((o = e == null ? void 0 : e.value) == null ? void 0 : o.meta), (A, N) => {
        const m = l,
          r = f;
        return v(), g("main", w, [i(r, null, {
          default: h(() => {
            var s, n, c, _;
            return [B, i(m, {
              title: (n = (s = p(e)) == null ? void 0 : s.main) == null ? void 0 : n.title,
              items: (_ = (c = p(e)) == null ? void 0 : c.main) == null ? void 0 : _.items
            }, null, 8, ["title", "items"])]
          }),
          _: 1
        })])
      }
    }
  });
export {
  E as
  default
};