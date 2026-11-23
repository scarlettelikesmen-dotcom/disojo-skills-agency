/* https://hilight.design/_nuxt/Wd33nOGN.js */
import {
  _ as d
} from "./hfYGQhmZ.js";
import {
  d as m,
  c as l,
  e as t,
  f as n,
  t as a,
  w as p,
  L as h,
  o as r,
  z as u,
  ab as x,
  n as f
} from "#entry";
const v = {
    class: "sect-person"
  },
  g = {
    class: "photo"
  },
  b = {
    class: "content"
  },
  k = {
    class: "left"
  },
  B = {
    class: "name-mob l2",
    "data-text-anim": ""
  },
  C = {
    class: "position l2",
    "data-text-anim": ""
  },
  L = {
    class: "right"
  },
  N = {
    class: "name l2",
    "data-text-anim": ""
  },
  P = {
    class: "descr h3-light",
    "data-title-anim": ""
  },
  S = {
    "data-element-anim": ""
  },
  j = {
    class: "logo"
  },
  w = m({
    __name: "Person",
    props: {
      data: {}
    },
    setup(o) {
      return (e, D) => {
        const s = d,
          c = u,
          _ = h,
          i = x;
        return r(), l("div", v, [t("div", g, [n(s, {
          media: o.data.photo,
          alt: o.data.name
        }, null, 8, ["media", "alt"])]), t("div", b, [t("div", k, [t("p", B, a(o.data.name), 1), t("p", C, a(o.data.position), 1)]), t("div", L, [t("p", N, a(o.data.name), 1), t("p", P, a(o.data.text), 1), t("div", S, [n(_, {
          to: "/lets-talk",
          class: "person-btn"
        }, {
          default: p(() => [n(c, {
            text: e.$t("discuss_the_project")
          }, null, 8, ["text"])]),
          _: 1
        })])])]), t("div", j, [n(i)])])
      }
    }
  }),
  y = Object.assign(f(w, [
    ["__scopeId", "data-v-6585e238"]
  ]), {
    __name: "SectionPerson"
  });
export {
  y as _
};