/* https://13322566869.com/_nuxt/is-video.b47a4014.js */
import {
  d as _,
  A as c,
  o as n,
  b as r,
  h as t,
  v as l
} from "./entry.3d26c39b.js";
const d = ["src", "alt", "data-lazy-src"],
  m = _({
    __name: "ImgCover",
    props: {
      src: {},
      alt: {
        default: "image"
      },
      lazy: {
        type: Boolean,
        default: !1
      }
    },
    setup(a) {
      const e = a,
        {
          src: s,
          alt: o
        } = c(e);
      return (p, v) => (n(), r("img", {
        src: e.lazy ? "" : t(s),
        alt: t(o),
        class: "img-cover",
        "data-lazy-src": e.lazy ? t(s) : ""
      }, null, 8, d))
    }
  });
const f = l(m, [
    ["__scopeId", "data-v-0d09a72b"]
  ]),
  u = ["src", "data-lazy-src"],
  i = _({
    __name: "VideoCover",
    props: {
      src: {},
      lazy: {
        type: Boolean,
        default: !1
      }
    },
    setup(a) {
      const e = a,
        {
          src: s
        } = c(e);
      return (o, p) => (n(), r("video", {
        src: e.lazy ? "" : t(s),
        loop: "",
        muted: "",
        playsinline: "",
        autoplay: "",
        class: "video-cover",
        "data-lazy-src": e.lazy ? e.src : ""
      }, null, 8, u))
    }
  });
const z = l(i, [
  ["__scopeId", "data-v-fb483aac"]
]);

function g(a = "") {
  return /(\.mpeg|\.mpg|\.avi|\.mp4|\.mov|\.flv|\.mkv|\.webm|\.wmv)\??.*$/.test(a)
}
export {
  f as _, g as a, z as b
};