/* https://hilight.design/_nuxt/CgegnB1j.js */
import {
  d as y,
  p as j,
  r as k,
  s as C,
  c,
  o as l,
  e as s,
  t as p,
  g as b,
  k as r,
  l as f,
  n as $,
  u as B,
  O as E,
  b as N,
  x as S,
  h as v,
  f as _,
  w,
  L,
  i as O,
  I as x,
  z as q,
  aC as z,
  A as F
} from "#entry";
import {
  s as A
} from "./BzLCLO6P.js";
const P = {
    class: "time"
  },
  K = {
    class: "h3-light"
  },
  M = {
    class: "h1-light"
  },
  Q = y({
    __name: "Time",
    setup(d) {
      const n = k(new Date);
      let u = null;
      const h = new Intl.DateTimeFormat("pl-PL", {
          timeZone: "Europe/Warsaw",
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1
        }),
        m = f(() => {
          const [e, o] = h.format(n.value).split(":");
          return {
            hours: e,
            minutes: o
          }
        }),
        a = f(() => m.value.hours),
        i = f(() => m.value.minutes);
      return j(() => {
        u = A(() => {
          n.value = new Date
        }, 1e3)
      }), C(() => {
        u && clearInterval(u)
      }), (e, o) => (l(), c("div", P, [s("p", K, p(e.$t("cet")), 1), s("p", M, [b(p(r(a)), 1), o[0] || (o[0] = s("span", {
        class: "colon"
      }, ":", -1)), b(p(r(i)), 1)])]))
    }
  }),
  R = Object.assign($(Q, [
    ["__scopeId", "data-v-8c1b90bd"]
  ]), {
    __name: "CommonTime"
  }),
  W = {
    class: "cta-block"
  },
  Z = {
    class: "cta-bg"
  },
  G = ["src"],
  H = ["src"],
  J = {
    class: "content"
  },
  X = {
    key: 0,
    class: "title2 h1-light"
  },
  Y = {
    class: "foot"
  },
  tt = {
    class: "left"
  },
  et = {
    class: "right"
  },
  nt = y({
    __name: "Cta",
    props: {
      text: {}
    },
    setup(d) {
      const {
        isDesktop: n
      } = B(), {
        initUnicornEl: u,
        destroyScene: h,
        bindSceneInView: m
      } = E(), a = k();
      let i = null,
        e = null;
      const o = () => {
          i?.(), i = null, h(a.value)
        },
        g = async () => {
          if (!(!n.value || !a.value)) return e || (e = (async () => {
            const t = a.value;
            t && (await u(t), !(!t.isConnected || !n.value) && (i?.(), i = m(t)))
          })().finally(() => {
            e = null
          }), e)
        };
      return N(() => {
        g()
      }), S(n, async t => {
        if (!t) {
          o();
          return
        }
        await F(), g()
      }), C(() => {
        o()
      }), (t, st) => {
        const U = q,
          I = L,
          T = z,
          D = R,
          V = O;
        return l(), c("div", W, [s("div", Z, [r(n) ? (l(), c("div", {
          key: 0,
          ref_key: "unicornEl",
          ref: a,
          "data-us-project": "oxPKR8nQtw6qi6UtqjFC",
          "data-us-production": "true",
          "data-us-fps": "30",
          "data-us-scale": "1",
          "data-us-dpi": "0.75",
          "data-us-defer": "",
          class: "unicorn-bg"
        }, null, 512)) : (l(), c("img", {
          key: 1,
          class: "inner-media",
          draggable: "false",
          src: ("publicUrl" in t ? t.publicUrl : r(x))("/images/cta-bg-mob.webp"),
          alt: "",
          width: "440",
          height: "960",
          decoding: "async",
          loading: "lazy"
        }, null, 8, G)), r(n) ? (l(), c("img", {
          key: 2,
          class: "lines-img inner-media",
          draggable: "false",
          src: ("publicUrl" in t ? t.publicUrl : r(x))("/images/lines.png"),
          alt: "",
          width: "2160",
          height: "1296",
          decoding: "async",
          loading: "lazy"
        }, null, 8, H)) : v("", !0)]), s("div", J, [d.text || t.$t("cta_text") ? (l(), c("h2", X, p(d.text ? d.text : t.$t("cta_text")), 1)) : v("", !0), _(I, {
          to: "/lets-talk",
          class: "btn"
        }, {
          default: w(() => [_(U, {
            text: t.$t("discuss_the_project"),
            white: ""
          }, null, 8, ["text"])]),
          _: 1
        })]), s("div", Y, [s("div", tt, [_(T, {
          "with-photo": "",
          white: ""
        })]), s("div", et, [_(V, null, {
          default: w(() => [_(D)]),
          _: 1
        })])])])
      }
    }
  }),
  it = Object.assign($(nt, [
    ["__scopeId", "data-v-2bb47929"]
  ]), {
    __name: "SectionCta"
  });
export {
  it as _
};