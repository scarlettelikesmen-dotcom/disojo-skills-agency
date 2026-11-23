/* https://alchemy.family/_nuxt/DKttZOKe.js */
import {
  _ as l,
  a as f
} from "./Cc-8MFxJ.js";
import {
  _ as v
} from "./49XQLREk.js";
import {
  d as x,
  q as C,
  w as h,
  s as A,
  v as b,
  c as g,
  z as o,
  j as p,
  A as w,
  o as B,
  _ as N
} from "./CWeo--9S.js";
import {
  u as U
} from "./CGFW9tiQ.js";
import "./DJb2uxw5.js";
import "./B8g4Zq01.js";
import "./3SQQwhtx.js";
const k = {
    class: "page"
  },
  y = x({
    __name: "terms-of-use",
    async setup(E) {
      var r;
      let a, s;
      const n = C(),
        {
          data: m
        } = ([a, s] = h(() => w("/api/terms-of-use", {
          getCachedData(e) {
            return n.payload.data[e] || n.static.data[e]
          }
        }, "$tUA92roBbv")), a = await a, s(), a),
        t = A(() => {
          var e;
          return ((e = m.value) == null ? void 0 : e.data) ?? null
        });
      return t.value || b("No data"), U((r = t == null ? void 0 : t.value) == null ? void 0 : r.seo_block), (e, F) => {
        var _, c;
        const u = f,
          d = l,
          i = v;
        return B(), g("div", k, [o(u), o(d, {
          "updated-at": ((_ = p(t)) == null ? void 0 : _.updated_at) ?? "",
          title: "<p><i>Terms</i> of Use</p>",
          items: ((c = p(t)) == null ? void 0 : c.items) ?? []
        }, null, 8, ["updated-at", "items"]), o(i)])
      }
    }
  }),
  I = N(y, [
    ["__scopeId", "data-v-c0bd9307"]
  ]);
export {
  I as
  default
};