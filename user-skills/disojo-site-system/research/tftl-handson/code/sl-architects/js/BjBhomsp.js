/* https://ab-sl.ru/_nuxt/BjBhomsp.js */
import {
  _ as m
} from "./BAApazRy.js";
import {
  a as r
} from "./CEJKH9bI.js";
import {
  d as p,
  g as d,
  h as u,
  w as f,
  c as g,
  a as h,
  b as o,
  e as t,
  i as x,
  o as k,
  _ as v
} from "./DROVP5M4.js";
import {
  s as P
} from "./DFRH1ql4.js";
const w = {
    class: "page terms-page"
  },
  y = {
    name: "PageTermsOfUse"
  },
  B = p({
    ...y,
    async setup(C) {
      let a, s;
      const n = d().locale.value,
        c = u(),
        {
          data: e
        } = ([a, s] = f(() => x("faq", () => $fetch("/api/pages/pageTermsOfUse", {
          method: "post",
          body: {
            locale: n
          }
        }))), a = await a, s(), a);
      return P(e?.value?.meta), (_, O) => {
        const i = m,
          l = r;
        return k(), g("div", null, [h("main", w, [o(i, {
          title: t(e)?.main?.title,
          date: t(e)?.main?.date,
          description: t(e)?.main?.description,
          items: t(e)?.main?.content,
          "last-update": t(e)?.main?.last_update
        }, null, 8, ["title", "date", "description", "items", "last-update"])]), o(l, {
          "link-text": _.$t("faq.view_our_contact"),
          link: t(c)("/contact")
        }, null, 8, ["link-text", "link"])])
      }
    }
  }),
  I = v(B, [
    ["__scopeId", "data-v-1c7dfed5"]
  ]);
export {
  I as
  default
};