/* https://hilight.design/_nuxt/eOO-uYdg.js */
import {
  a as x
} from "./B42LVb-8.js";
import {
  d as C,
  u as b,
  P as g,
  c as n,
  e,
  f as o,
  j as w,
  h as s,
  w as m,
  t as i,
  v as V,
  i as B,
  o as a,
  k as p,
  l as $,
  _ as P,
  n as D
} from "#entry";
import {
  a as M
} from "./D-TN8p00.js";
import {
  _ as N
} from "./lKvBwyz6.js";
const O = {
    class: "video-container"
  },
  j = {
    key: 1,
    class: "video-content"
  },
  I = {
    key: 0,
    class: "video-title l2"
  },
  S = {
    key: 1,
    class: "video-descr h2-light"
  },
  z = {
    class: "play-button"
  },
  E = ["aria-label"],
  F = {
    class: "play-text"
  },
  G = {
    class: "l2"
  },
  R = {
    class: "l2"
  },
  Y = C({
    __name: "Video",
    props: {
      data: {}
    },
    setup(t) {
      const c = t,
        {
          isDesktop: d
        } = b(),
        u = $(() => !d.value && c.data.videoMobile?.original ? c.data.videoMobile : c.data.video),
        v = g("video-popup-open");
      return (l, _) => {
        const h = x,
          y = B,
          r = P,
          f = M,
          k = N;
        return a(), n("section", {
          class: V(["career-video", {
            with_text: t.data.title
          }])
        }, [e("div", O, [o(y, null, {
          default: m(() => [o(h, {
            media: p(u),
            inner: p(d)
          }, null, 8, ["media", "inner"])]),
          _: 1
        }), o(r, {
          class: "video-gradient"
        }), t.data.title ? (a(), w(r, {
          key: 0,
          class: "video-gradient",
          top: ""
        })) : s("", !0), t.data.title ? (a(), n("div", j, [t.data.title ? (a(), n("p", I, i(t.data.title), 1)) : s("", !0), t.data.descr ? (a(), n("p", S, i(t.data.descr), 1)) : s("", !0)])) : s("", !0), e("div", {
          class: "play-wrap hover-container",
          onClick: _[0] || (_[0] = q => v.value = !0)
        }, [e("div", z, [e("button", {
          class: "play",
          "aria-label": l.$t("play")
        }, [o(k, {
          white: ""
        }, {
          default: m(() => [o(f)]),
          _: 1
        })], 8, E), e("div", F, [e("p", G, i(l.$t("showreel_btn")), 1), e("p", R, "©" + i(new Date().getFullYear()), 1)])])])])], 2)
      }
    }
  }),
  L = Object.assign(D(Y, [
    ["__scopeId", "data-v-c15ad3ac"]
  ]), {
    __name: "PageCareerVideo"
  });
export {
  L as _
};