/* https://aventuradentalarts.com/_nuxt/CpcOjxkA.js */
import {
  d as o,
  o as s,
  e as t,
  i as a,
  j as _,
  n as c,
  Z as r,
  m as p
} from "./C3LIzMiL.js";
const d = {
    class: "wrap-icon"
  },
  i = o({
    __name: "ChangeSlide",
    props: {
      next: {
        type: Boolean
      }
    },
    setup(l) {
      return (e, m) => {
        const n = r;
        return s(), t("div", {
          class: c(["btn-slide-change", [e.next ? "next" : "prev"]])
        }, [a("div", d, [_(n)])], 2)
      }
    }
  }),
  f = p(i, [
    ["__scopeId", "data-v-2f490315"]
  ]);
export {
  f as _
};