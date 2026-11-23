/* https://ab-sl.ru/_nuxt/DFRH1ql4.js */
import {
  l as i,
  G as r,
  K as o,
  M as c
} from "./DROVP5M4.js";

function l(t) {
  const e = i("transitionEnd"),
    a = i("preloaderDone");
  r([a, e], n => {
    !n[0] || !n[1] || t()
  })
}
const d = t => {
  const e = o().public.siteUrl;
  c({
    title: t?.title,
    meta: [{
      name: "title",
      content: t?.title
    }, {
      name: "description",
      content: t?.description
    }, {
      name: "keywords",
      content: t?.keywords
    }, {
      name: "og:title",
      content: t?.title
    }, {
      name: "og:description",
      content: t?.description
    }, {
      name: "twitter:title",
      content: t?.title
    }, {
      name: "twitter:description",
      content: t?.description
    }, {
      name: "og:image",
      content: `${t?.photo?.original||e+"opengraph.jpg"}`
    }]
  })
};
export {
  d as s, l as u
};