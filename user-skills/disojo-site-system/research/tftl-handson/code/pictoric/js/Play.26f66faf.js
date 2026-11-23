/* https://pictoric.com.ua/_nuxt/Play.26f66faf.js */
import {
  d as l,
  b as t,
  c as o,
  g as i,
  k as n,
  _ as d
} from "./entry.6cb2d70d.js";
const a = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 23 23",
    fill: "none"
  },
  _ = ["href"],
  r = {
    key: 1,
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M10.2887 7.86841H9.07812V15.1316H10.2887V7.86841ZM13.9202 7.86841H12.7097V15.1316H13.9202V7.86841Z"
  },
  c = {
    key: 2,
    d: "M16 11.5L9.25 15.3971L9.25 7.60289L16 11.5Z",
    fill: "#411F15"
  },
  h = l({
    __name: "Play",
    props: {
      isPaused: {
        type: Boolean
      },
      image: {}
    },
    setup(s) {
      return (p, e) => (t(), o("svg", a, [e[0] || (e[0] = i("defs", null, [i("clipPath", {
        id: "clip"
      }, [i("rect", {
        width: "23",
        height: "23",
        rx: "11.5"
      })])], -1)), s.image ? (t(), o("image", {
        key: 0,
        href: s.image,
        x: "0",
        y: "0",
        width: "23",
        height: "23",
        "clip-path": "url(#clip)"
      }, null, 8, _)) : n("", !0), e[1] || (e[1] = i("rect", {
        width: "23",
        height: "23",
        rx: "11.5",
        fill: "white"
      }, null, -1)), s.isPaused ? (t(), o("path", r)) : (t(), o("path", c))]))
    }
  });
const m = d(h, [
  ["__scopeId", "data-v-d2053291"]
]);
export {
  m as _
};