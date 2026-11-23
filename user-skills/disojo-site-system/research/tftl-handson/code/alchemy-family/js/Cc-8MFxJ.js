/* https://alchemy.family/_nuxt/Cc-8MFxJ.js */
import {
  S as g,
  g as l,
  _ as v,
  o as a,
  c as i,
  b as y,
  d as S,
  s as b,
  a as o,
  t as L,
  j as T,
  F as r,
  i as F,
  z as m,
  p as M,
  l as I
} from "./CWeo--9S.js";
import {
  a as u,
  b as $,
  _ as x,
  c as A
} from "./DJb2uxw5.js";
import {
  a as H
} from "./B8g4Zq01.js";
import {
  u as C
} from "./49XQLREk.js";

function D(t, n = {}) {
  const s = t ? typeof t == "string" ? document.querySelectorAll(t) : t : null;
  return s ? l.timeline().from(s, {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 1,
    ...n
  }) : l.timeline()
}

function k(t, n = {}, s = {}) {
  const e = D(t, s);
  return g.create({
    trigger: t,
    start: "top bottom",
    animation: e,
    ...n
  })
}
const E = {},
  q = {
    class: "service-clouds"
  },
  B = y('<div class="service-clouds__cloud cloud-1" data-v-f226c450><div class="anim-left-right anim-delay-6" data-v-f226c450><div class="cloud anim-top-bottom anim-delay-1" data-v-f226c450></div></div></div><div class="service-clouds__cloud cloud-2" data-v-f226c450><div class="anim-left-right anim-delay-3" data-v-f226c450><div class="cloud anim-top-bottom anim-delay-6" data-v-f226c450></div></div></div><div class="service-clouds__cloud cloud-3" data-v-f226c450><div class="anim-left-right anim-delay-1" data-v-f226c450><div class="cloud anim-top-bottom anim-delay-2" data-v-f226c450></div></div></div>', 3),
  N = [B];

function V(t, n) {
  return a(), i("div", q, N)
}
const st = v(E, [
    ["render", V],
    ["__scopeId", "data-v-f226c450"]
  ]),
  w = t => (M("data-v-f4685e3e"), t = t(), I(), t),
  j = {
    class: "content"
  },
  z = {
    class: "content__header"
  },
  O = {
    class: "caption content__subtitle"
  },
  P = ["innerHTML"],
  W = {
    class: "content__items"
  },
  X = w(() => o("div", {
    class: "item__line"
  }, null, -1)),
  Y = {
    class: "item__left"
  },
  G = ["innerHTML"],
  J = {
    class: "item__right"
  },
  K = ["innerHTML"],
  Q = {
    class: "content__footer"
  },
  R = {
    class: "desktop"
  },
  U = {
    class: "mobile"
  },
  Z = S({
    __name: "Content",
    props: {
      updatedAt: {},
      title: {},
      items: {}
    },
    setup(t) {
      const n = t,
        s = b(() => {
          const e = new Date(n.updatedAt),
            _ = e.getDate(),
            c = H[e.getMonth()],
            d = e.getFullYear();
          return `${c} ${_}, ${d}`
        });
      return C(() => {
        u(".content__subtitle"), u(".content__title"), document.querySelectorAll(".item__line").forEach(e => {
          k(e)
        }), document.querySelectorAll(".item").forEach(e => {
          $(e)
        })
      }), (e, _) => {
        const c = x,
          d = A;
        return a(), i(r, null, [o("div", j, [o("header", z, [o("p", O, L("Effective Date: " + T(s)), 1), o("div", {
          class: "h2 content__title",
          innerHTML: e.title
        }, null, 8, P)]), o("div", W, [(a(!0), i(r, null, F(e.items, ({
          title: p,
          content: f
        }, h) => (a(), i("div", {
          key: h,
          class: "content__item item"
        }, [X, o("div", Y, [o("div", {
          class: "P1 item__title",
          innerHTML: p
        }, null, 8, G)]), o("div", J, [o("div", {
          class: "item__content p2",
          innerHTML: f
        }, null, 8, K)])]))), 128))])]), o("footer", Q, [o("div", R, [m(c)]), o("div", U, [m(d)])])], 64)
      }
    }
  }),
  at = v(Z, [
    ["__scopeId", "data-v-f4685e3e"]
  ]);
export {
  at as _, st as a
};