/* https://13322566869.com/_nuxt/Footer.a6c709f3.js */
import {
  d as r,
  r as l,
  C as d,
  o as a,
  b as i,
  i as o,
  z as h,
  h as p,
  L as f,
  t as n,
  p as m,
  m as u,
  v
} from "./entry.3d26c39b.js";
const k = s => (m("data-v-149b04b6"), s = s(), u(), s),
  b = {
    ref: "footer",
    class: "footer s_white"
  },
  T = {
    class: "footer__wrapper _container"
  },
  g = {
    class: "footer__head"
  },
  x = {
    class: "footer__links"
  },
  C = ["href"],
  I = ["href"],
  w = {
    key: 0,
    class: "tooltip"
  },
  y = k(() => o("div", {
    class: "tooltip__inner"
  }, "I'm just kidding", -1)),
  B = [y],
  F = {
    class: "footer__phone"
  },
  S = {
    class: "footer__foot"
  },
  V = {
    class: "footer__photo"
  },
  N = ["src"],
  j = {
    class: "footer__text"
  },
  z = r({
    __name: "Footer",
    props: {
      phone: {},
      email: {},
      photo: {},
      text: {}
    },
    setup(s) {
      const _ = l(!1);
      let e;

      function c() {
        e && clearTimeout(e), _.value = !0, e = setTimeout(() => {
          _.value = !1
        }, 2e3)
      }
      return d(() => {
        e && clearTimeout(e)
      }), (t, D) => (a(), i("div", b, [o("div", T, [o("div", g, [o("div", x, [o("a", {
        class: "footer__link h4",
        href: "tel:" + t.phone
      }, " Call ", 8, C), o("a", {
        class: "footer__link h4",
        href: "mailto:" + t.email
      }, " Message ", 8, I), o("div", {
        class: "footer__link h4 footer__link-fake",
        onClick: c
      }, [h(" Fax "), p(_) ? (a(), i("div", w, B)) : f("", !0)])]), o("div", F, n(t.phone), 1)]), o("div", S, [o("div", V, [o("img", {
        src: t.photo,
        alt: "Face to face"
      }, null, 8, N)]), o("div", j, n(t.text), 1)])])], 512))
    }
  });
const L = v(z, [
  ["__scopeId", "data-v-149b04b6"]
]);
export {
  L as _
};