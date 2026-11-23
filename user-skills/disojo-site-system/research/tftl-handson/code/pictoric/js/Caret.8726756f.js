/* https://pictoric.com.ua/_nuxt/Caret.8726756f.js */
import {
  d as o,
  b as n,
  c as s,
  g as a,
  n as _,
  _ as r
} from "./entry.6cb2d70d.js";
const c = o({
  __name: "Caret",
  props: {
    direction: {
      default: "bottom"
    }
  },
  setup(t) {
    return (l, e) => (n(), s("svg", {
      class: _(["caret", [t.direction]]),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 12 12",
      fill: "none"
    }, [...e[0] || (e[0] = [a("path", {
      d: "M2.46447 4.53553L6 8.07107L9.53553 4.53553",
      stroke: "#411F15",
      "stroke-linecap": "round"
    }, null, -1)])], 2))
  }
});
const d = r(c, [
  ["__scopeId", "data-v-40602d87"]
]);
export {
  d as _
};