/* https://aventuradentalarts.com/_nuxt/DoQaItma.js */
import {
  d as p,
  v as _,
  o as u,
  e as f,
  i as t,
  n as h,
  f as P,
  q as l,
  m as v,
  t as m,
  j as $,
  O as b
} from "./C3LIzMiL.js";
const w = ["src"],
  k = ["src"],
  B = p({
    __name: "BeforeAfterCard",
    props: {
      images: {}
    },
    setup(g) {
      const n = _(),
        a = _(),
        e = _(!1),
        r = ({
          offsetX: s,
          target: o
        }) => {
          if (!e.value || !n.value || !a.value) return;
          const {
            width: d
          } = o.getBoundingClientRect(), i = s / d * 100;
          l.set(n.value, {
            left: `${i}%`
          }), l.set(a.value, {
            clipPath: `polygon(0% 0%, ${i}% 0%, ${i}% 100%, 0% 100%)`
          })
        },
        c = ({
          offsetX: s,
          target: o
        }) => {
          if (e.value = !0, !n.value || !a.value) return;
          const {
            width: d
          } = o.getBoundingClientRect(), i = s / d * 100;
          l.set(n.value, {
            left: `${i}%`
          }), l.set(a.value, {
            clipPath: `polygon(0% 0%, ${i}% 0%, ${i}% 100%, 0% 100%)`
          })
        };
      return (s, o) => (u(), f("div", {
        class: h(["before-after", {
          moving: P(e)
        }]),
        onPointermove: r,
        onPointerdown: c,
        onPointerup: o[0] || (o[0] = () => e.value = !1),
        onPointerleave: o[1] || (o[1] = () => e.value = !1)
      }, [t("img", {
        src: s.images.after.normal,
        role: "presentation",
        class: "inner-img"
      }, null, 8, w), t("img", {
        ref_key: "beforeRef",
        ref: a,
        src: s.images.before.normal,
        role: "presentation",
        class: "inner-img before"
      }, null, 8, k), t("div", {
        ref_key: "dividerRef",
        ref: n,
        class: "divider"
      }, null, 512)], 34))
    }
  }),
  q = v(B, [
    ["__scopeId", "data-v-7f438e6f"]
  ]),
  C = {
    class: "solution"
  },
  R = {
    class: "name h4"
  },
  y = {
    class: "bottom"
  },
  M = {
    class: "details-wrap"
  },
  S = {
    class: "mob-name h4"
  },
  D = {
    class: "description p3"
  },
  I = {
    class: "wrap-img"
  },
  N = ["src", "alt"],
  V = p({
    __name: "SolutionSm",
    props: {
      data: {}
    },
    emits: ["click-card"],
    setup(g, {
      emit: n
    }) {
      const a = n;
      return (e, r) => {
        const c = b;
        return u(), f("article", C, [t("p", R, m(e.data.title), 1), t("div", y, [t("div", M, [t("p", S, m(e.data.title), 1), t("p", D, m(e.data.preview.description), 1), t("button", {
          class: "btn-learn-more",
          onClick: r[0] || (r[0] = s => a("click-card", e.data.slug, s))
        }, [$(c, {
          text: "Learn More"
        })])]), t("div", I, [t("img", {
          src: e.data.preview.image.normal,
          alt: e.data.title,
          class: "inner-img"
        }, null, 8, N)])])])
      }
    }
  }),
  z = v(V, [
    ["__scopeId", "data-v-a3489c7e"]
  ]);
export {
  q as _, z as a
};