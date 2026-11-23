/* https://pictoric.com.ua/_nuxt/About.ae94038d.js */
import {
  _ as x
} from "./HanddrawnSvg.e4acccd9.js";
import {
  _ as V
} from "./Play.26f66faf.js";
import {
  d as v,
  o as y,
  D as P,
  b as a,
  c as n,
  g as r,
  F as f,
  h as g,
  A as C,
  i as k,
  j as L,
  r as _,
  _ as b,
  k as d,
  n as $,
  t as E,
  y as S,
  v as T
} from "./entry.6cb2d70d.js";
const w = ["src", "type"],
  B = {
    class: "player-icon"
  },
  N = v({
    __name: "VideoPlayer",
    props: {
      srcset: {}
    },
    setup(t) {
      const e = _(),
        s = _(!1);

      function o() {
        e.value && (s.value ? e.value.pause() : e.value.play())
      }

      function i() {
        s.value = !0
      }

      function l() {
        s.value = !1
      }
      return y(() => {
        e.value && (e.value.addEventListener("play", i), e.value.addEventListener("pause", l))
      }), P(() => {
        e.value && (e.value.removeEventListener("play", i), e.value.removeEventListener("pause", l))
      }), (m, c) => {
        const u = V;
        return a(), n("div", {
          class: "player",
          onClick: o
        }, [r("video", {
          ref_key: "videoRef",
          ref: e,
          class: "inner-img",
          loop: "",
          playsinline: ""
        }, [(a(!0), n(f, null, g(t.srcset, (p, h) => (a(), n("source", {
          key: h,
          src: `${p.src}#t=0.01`,
          type: `video/${p.type}`
        }, null, 8, w))), 128)), c[0] || (c[0] = C(" video not supported ", -1))], 512), r("span", B, [k(u, {
          "is-paused": L(s),
          class: "inner-svg"
        }, null, 8, ["is-paused"])])])
      }
    }
  });
const R = b(N, [
    ["__scopeId", "data-v-93e64835"]
  ]),
  A = {
    key: 0,
    class: "about"
  },
  H = {
    key: 0,
    class: "about-icon"
  },
  I = {
    class: "title-wrapper"
  },
  M = {
    key: 0,
    class: "about-title h1 anim-title"
  },
  D = ["src"],
  F = ["innerHTML"],
  j = v({
    __name: "About",
    props: {
      data: {}
    },
    setup(t) {
      const e = _();

      function s() {
        var i;
        const o = (i = e.value) == null ? void 0 : i.querySelector("img");
        o && T.fromTo(o, {
          yPercent: -10
        }, {
          scrollTrigger: {
            trigger: o,
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          },
          yPercent: 10,
          ease: "none"
        })
      }
      return y(s), (o, i) => {
        const l = x,
          m = R;
        return t.data ? (a(), n("section", A, [t.data.icon ? (a(), n("div", H, [k(l, {
          "svg-link": t.data.icon.original
        }, null, 8, ["svg-link"])])) : d("", !0), r("div", I, [t.data.title ? (a(), n("h1", M, [(a(!0), n(f, null, g(t.data.title.split(" "), (c, u) => (a(), n("span", {
          key: u,
          class: $({
            "about-title__first-word": u === 0
          })
        }, E(c), 3))), 128))])) : d("", !0), r("div", {
          ref_key: "mediaRef",
          ref: e,
          class: "player-wrapper"
        }, [t.data.video ? (a(), S(m, {
          key: 0,
          srcset: [t.data.video]
        }, null, 8, ["srcset"])) : t.data.image ? (a(), n("img", {
          key: 1,
          src: t.data.image.original,
          alt: "image",
          class: "inner-img"
        }, null, 8, D)) : d("", !0)], 512)]), r("div", {
          class: "about-description h4 anim-title",
          innerHTML: t.data.description
        }, null, 8, F)])) : d("", !0)
      }
    }
  });
const W = b(j, [
  ["__scopeId", "data-v-bce22fb1"]
]);
export {
  W as _
};