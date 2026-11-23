/* https://alchemy.family/_nuxt/CGFW9tiQ.js */
import {
  x as u,
  V as l
} from "./CWeo--9S.js";

function _(t) {
  if (!t) return;
  const g = l(),
    r = new URL(g.public.strapi.url).origin,
    s = g.public.siteUrl,
    e = t.Meta_title,
    n = t.Meta_description,
    p = t.OG_title,
    i = t.OG_description,
    o = r + (t.OG_image.data.attributes.url ?? ""),
    a = r + (t.OG_video.data.attributes.url ?? "");
  u({
    title: e,
    description: n,
    ogTitle: p,
    ogDescription: i,
    ogVideo: a,
    ogVideoType: "video/mp4",
    ogImage: o,
    ogImageType: () => {
      const c = o.split(".").pop();
      return {
        png: "image/png",
        jpeg: "image/jpeg",
        gif: "image/gif",
        get webp() {
          return this.jpeg
        },
        get jpg() {
          return this.jpeg
        }
      } [c] ?? "image/jpeg"
    },
    ogImageAlt: i,
    ogUrl: s,
    ogSiteName: e,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterSite: e,
    twitterImage: o,
    twitterImageAlt: i
  })
}
export {
  _ as u
};