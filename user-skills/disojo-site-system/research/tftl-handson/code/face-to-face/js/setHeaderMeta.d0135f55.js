/* https://13322566869.com/_nuxt/setHeaderMeta.d0135f55.js */
import {
  r as n,
  P as c,
  Q as g,
  R as l,
  T as p
} from "./entry.3d26c39b.js";

function d(e, i) {
  const t = n({});
  return c(() => {
    const o = l(e),
      {
        title: r,
        titleTemplate: s,
        ...a
      } = o;
    t.value = {
      title: r,
      titleTemplate: s,
      meta: p(a)
    }
  }), g(t, i)
}
const u = e => {
  e && d({
    title: e.title,
    ogTitle: e.title,
    description: e.description,
    ogDescription: e.description,
    ogImage: e.og_image,
    twitterImage: e.og_image,
    twitterTitle: e.title,
    twitterDescription: e.description,
    twitterCard: e.og_image,
    ogSiteName: "Face to face"
  })
};
export {
  u as s
};