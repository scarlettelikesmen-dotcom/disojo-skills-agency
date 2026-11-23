/* https://ab-sl.ru/_nuxt/Cj45ZiUy.js */
import {
  _ as p
} from "./BepOh2iV.js";
import {
  d as u,
  h as m,
  o as g,
  A as h,
  y as _,
  a as t,
  b,
  x as s,
  t as a,
  e as f,
  v as j,
  _ as y
} from "./DROVP5M4.js";
const v = {
    class: "project-photo"
  },
  x = {
    class: "project-info"
  },
  B = {
    class: "p1"
  },
  L = {
    class: "secondary-sup"
  },
  k = {
    class: "project-info-inner"
  },
  z = {
    class: "p1 project-name-wrapper"
  },
  V = {
    class: "underline project-name"
  },
  C = {
    class: "area p1"
  },
  H = {
    name: "ProjectCard"
  },
  N = u({
    ...H,
    props: {
      project: {},
      noLazyLoad: {
        type: Boolean
      },
      draggable: {
        type: Boolean
      },
      autoHeight: {
        type: Boolean
      },
      autoHeightMob: {
        type: Boolean
      },
      defaultVisible: {
        type: Boolean
      }
    },
    emits: ["imageLoaded"],
    setup(e, {
      emit: n
    }) {
      const i = m(),
        c = n;
      return (l, o) => {
        const d = p,
          r = j;
        return g(), h(r, {
          class: "project-link",
          to: f(i)("projects") + "/" + e.project?.slug,
          draggable: "false"
        }, {
          default: _(() => [t("div", v, [b(d, {
            photo: e.project?.preview,
            "no-lazy-load": e.noLazyLoad,
            size: "large",
            draggable: e.draggable,
            "auto-height": e.autoHeight,
            "auto-height-mob": e.autoHeightMob,
            "default-visible": e.defaultVisible,
            onImageLoaded: o[0] || (o[0] = P => c("imageLoaded"))
          }, null, 8, ["photo", "no-lazy-load", "draggable", "auto-height", "auto-height-mob", "default-visible"])]), t("div", x, [t("p", B, [s(a(e.project?.location) + " ", 1), t("span", L, "[" + a(e.project?.year) + "]", 1)]), t("div", k, [t("p", z, [t("span", V, a(e.project?.title?.trim()), 1), o[1] || (o[1] = s(", ", -1))]), t("p", C, [s(a(e.project?.area) + " " + a(l.$t("m")), 1), o[2] || (o[2] = t("span", {
            class: "primary-sup"
          }, "2", -1))])])])]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  I = y(N, [
    ["__scopeId", "data-v-9c1ab0d8"]
  ]);
export {
  I as _
};