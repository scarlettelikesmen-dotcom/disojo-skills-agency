/* https://alchemy.family/_nuxt/CEm_Dyhx.js */
import {
  _ as l,
  a as f
} from "./Cc-8MFxJ.js";
import {
  _ as v
} from "./49XQLREk.js";
import {
  d as y,
  q as x,
  w as C,
  s as h,
  v as P,
  c as w,
  z as o,
  j as r,
  A,
  o as g,
  _ as N
} from "./CWeo--9S.js";
import {
  u as S
} from "./CGFW9tiQ.js";
import "./DJb2uxw5.js";
import "./B8g4Zq01.js";
import "./3SQQwhtx.js";
const k = {
    class: "page"
  },
  q = y({
    __name: "privacy-policy",
    async setup(B) {
      var n;
      let a, s;
      const c = x(),
        {
          data: i
        } = ([a, s] = C(() => A("/api/privacy-policy", {
          getCachedData(e) {
            return c.payload.data[e] || c.static.data[e]
          }
        }, "$5fLqcSY9wl")), a = await a, s(), a),
        t = h(() => {
          var e;
          return ((e = i.value) == null ? void 0 : e.data) ?? null
        });
      return t.value || P("No data"), S((n = t == null ? void 0 : t.value) == null ? void 0 : n.seo_block), (e, E) => {
        var p, _;
        const m = f,
          u = l,
          d = v;
        return g(), w("div", k, [o(m), o(u, {
          "updated-at": ((p = r(t)) == null ? void 0 : p.updated_at) ?? "",
          title: "<p><i>Privacy</i> Policy</p>",
          items: ((_ = r(t)) == null ? void 0 : _.items) ?? []
        }, null, 8, ["updated-at", "items"]), o(d)])
      }
    }
  }),
  L = N(q, [
    ["__scopeId", "data-v-c23123f1"]
  ]);
export {
  L as
  default
};