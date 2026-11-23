/* https://archvoyage.ae/_nuxt/MoreButton.BK_q1TjK.js */
import {
  d as a,
  a as n,
  b as p,
  e,
  f as c,
  t as o,
  y as r,
  p as d,
  l,
  m as _
} from "./entry.YPAKmh3d.js";
const i = s => (d("data-v-5124647b"), s = s(), l(), s),
  h = {
    class: "text p1"
  },
  m = {
    class: "hover-text p1"
  },
  v = i(() => e("span", {
    class: "icon"
  }, [e("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("circle", {
    cx: "5",
    cy: "5",
    r: "5",
    fill: "#F5F5F5"
  }), e("path", {
    d: "M4.06055 7.12109L6.12109 5.06055L4.06055 3",
    stroke: "#212121"
  })])], -1)),
  x = {
    name: "CommonMoreButton"
  },
  f = a({
    ...x,
    props: {
      text: {},
      disabled: {
        type: Boolean
      },
      reverse: {
        type: Boolean
      }
    },
    setup(s) {
      return (t, u) => (n(), p("div", {
        class: r(["button", {
          disabled: t.disabled,
          reverse: t.reverse
        }])
      }, [e("span", h, [c(o(t.text) + " ", 1), e("span", m, o(t.text), 1)]), v], 2))
    }
  }),
  w = _(f, [
    ["__scopeId", "data-v-5124647b"]
  ]);
export {
  w as _
};