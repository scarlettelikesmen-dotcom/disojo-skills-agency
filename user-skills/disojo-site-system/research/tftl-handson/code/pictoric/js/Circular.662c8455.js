/* https://pictoric.com.ua/_nuxt/Circular.662c8455.js */
import {
  _ as a
} from "./SansSerif.76e1e15a.js";
import {
  d as o,
  b as t,
  c as _,
  i as s,
  n as c,
  _ as r
} from "./entry.6cb2d70d.js";
const p = o({
  __name: "Circular",
  props: {
    animated: {
      type: Boolean
    }
  },
  setup(n) {
    return (i, m) => {
      const e = a;
      return t(), _("span", {
        class: c([{
          animated: n.animated
        }, "button-inner"])
      }, [s(e, {
        class: "button-icon"
      })], 2)
    }
  }
});
const u = r(p, [
  ["__scopeId", "data-v-5a25260d"]
]);
export {
  u as _
};