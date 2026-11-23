/* https://ab-sl.ru/_nuxt/C-jX9Mju.js */
import {
  _ as p
} from "./BAApazRy.js";
import {
  a as r
} from "./CEJKH9bI.js";
import {
  d as m,
  g as d,
  h as u,
  w as f,
  c as y,
  a as v,
  b as n,
  e as a,
  i as P,
  o as g,
  _ as h
} from "./DROVP5M4.js";
import {
  s as x
} from "./DFRH1ql4.js";
const k = {
    class: "page privacy-page"
  },
  w = {
    name: "PagePrivacyPolicy"
  },
  b = m({
    ...w,
    async setup(B) {
      let e, o;
      const s = d().locale.value,
        c = u(),
        {
          data: t
        } = ([e, o] = f(() => P("privacy-policy", () => $fetch("/api/pages/pagePrivacyPolicy", {
          method: "post",
          body: {
            locale: s
          }
        }))), e = await e, o(), e);
      return x(t?.value?.meta), (i, C) => {
        const l = p,
          _ = r;
        return g(), y("div", null, [v("main", k, [n(l, {
          title: a(t)?.main?.title,
          date: a(t)?.main?.date,
          description: a(t)?.main?.description,
          items: a(t)?.main?.content,
          "last-update": a(t)?.main?.last_update
        }, null, 8, ["title", "date", "description", "items", "last-update"])]), n(_, {
          "link-text": i.$t("faq.view_our_contact"),
          link: a(c)("/contact")
        }, null, 8, ["link-text", "link"])])
      }
    }
  }),
  V = h(b, [
    ["__scopeId", "data-v-e74fabd5"]
  ]);
export {
  V as
  default
};