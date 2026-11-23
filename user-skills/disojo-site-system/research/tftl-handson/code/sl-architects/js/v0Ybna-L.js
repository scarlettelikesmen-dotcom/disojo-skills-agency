/* https://ab-sl.ru/_nuxt/v0Ybna-L.js */
import {
  _ as f,
  o as d,
  c as p,
  a as t,
  d as g,
  u as b,
  p as x,
  t as e,
  x as l,
  e as _,
  m as u,
  b as L,
  f as m
} from "./DROVP5M4.js";
import {
  _ as k
} from "./DXpihNzX.js";
import {
  u as y
} from "./DFRH1ql4.js";
const C = {},
  N = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function V(o, a) {
  return d(), p("svg", N, [...a[0] || (a[0] = [t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16.9995 12V20H18.9995V10H6.91369L11.7066 5.20711L10.2924 3.79289L3.08527 11L10.2924 18.2071L11.7066 16.7929L6.91369 12H16.9995Z",
    fill: "#9E9D9C"
  }, null, -1)])])
}
const K = f(C, [
    ["render", V],
    ["__scopeId", "data-v-29dd17f1"]
  ]),
  $ = {
    key: 0,
    class: "worldwide"
  },
  D = {
    class: "inner container"
  },
  B = {
    class: "p1 description"
  },
  z = {
    class: "h1 z-2 title"
  },
  E = {
    key: 0,
    class: "z-2 location-wrapper"
  },
  H = {
    class: "lat-wrapper"
  },
  M = {
    class: "p1"
  },
  T = {
    class: "p1"
  },
  j = {
    class: "lon-wrapper"
  },
  A = {
    class: "p1"
  },
  I = {
    class: "p1"
  },
  S = {
    class: "planet-wrapper"
  },
  W = {
    class: "projects-number z-2"
  },
  F = {
    class: "h1"
  },
  G = {
    class: "p1 caption"
  },
  P = {
    name: "MainWorldWide"
  },
  U = g({
    ...P,
    props: {
      data: {}
    },
    setup(o) {
      const {
        $gsap: a
      } = b(), {
        isDesktop: w
      } = x(), r = m(0), c = m(0);

      function v(i) {
        [r, c].forEach(n => {
          a.to(n, {
            value: i.value[n === r ? "lat" : "lon"],
            duration: .3,
            onUpdate: () => {
              n.value && (n.value = Number(n.value.toFixed(5)))
            }
          })
        })
      }

      function h() {
        a.to(".worldwide .planet-wrapper", {
          scrollTrigger: {
            trigger: ".worldwide .planet-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          },
          y: w.value ? 160 : 80,
          ease: "none"
        })
      }
      return y(() => {
        h()
      }), (i, s) => {
        const n = k;
        return o.data ? (d(), p("section", $, [t("div", D, [s[4] || (s[4] = t("p", {
          class: "l1 number"
        }, "00  3", -1)), t("p", B, e(o.data.main_description), 1), t("p", z, [s[0] || (s[0] = l(" SL", -1)), s[1] || (s[1] = t("span", {
          class: "secondary-sup title__item"
        }, "®", -1)), s[2] || (s[2] = t("br", null, null, -1)), l(e(i.$t("worldwide")), 1)]), o.data.points && o.data.points.length !== 0 ? (d(), p("div", E, [t("div", H, [t("p", M, e(i.$t("lat")), 1), t("p", T, e(_(r)), 1)]), t("div", j, [t("p", A, e(i.$t("lon")), 1), t("p", I, e(_(c)), 1)])])) : u("", !0), t("div", S, [L(n, {
          points: o.data.points,
          "change-coords": "",
          "rotate-to-point": "",
          onChangeCoords: v
        }, null, 8, ["points"])]), t("div", W, [t("p", F, [l(e(o.data.number_of_projects), 1), s[3] || (s[3] = t("span", {
          class: "primary-sup"
        }, "+", -1))]), t("p", G, e(o.data.second_description), 1)])])])) : u("", !0)
      }
    }
  }),
  O = f(U, [
    ["__scopeId", "data-v-8f4a115b"]
  ]);
export {
  K as _, O as a
};