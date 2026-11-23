/* https://archvoyage.ae/_nuxt/Contact.D-xzsxJa.js */
import {
  P as m,
  d as W,
  u as q,
  r as f,
  c as D,
  w as M,
  o as V,
  n as $,
  a as j,
  b as C,
  e as s,
  f as F,
  t as o,
  j as B,
  g,
  D as x,
  h as z,
  z as R,
  k as G,
  A as H,
  _ as J,
  p as K,
  l as O,
  m as Q
} from "./entry.YPAKmh3d.js";
import {
  t as A
} from "./titleAnim.CszaPWUV.js";

function U() {
  function e(n, r = 1, p = !1) {
    if (!n) return {
      first_word: "",
      rest: ""
    };
    const i = n.split(" ");
    let l, a;
    return p ? (a = i.splice(i.length - r, r).join(" "), l = i.join(" ") + " ") : (l = i.splice(0, r).join(" ") + " ", a = i.join(" ")), {
      first_word: l,
      rest: a
    }
  }
  return {
    titleWithItalic: e
  }
}

function X(e) {
  const n = e == null ? void 0 : e.querySelector("div");
  if (n) return m.set(e, {
    overflow: "hidden"
  }), m.set(n, {
    scale: 1.1
  }), m.fromTo(n, {
    yPercent: -4,
    scale: 1.18
  }, {
    scrollTrigger: {
      trigger: e,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    },
    yPercent: 4,
    scale: 1.1,
    ease: "none"
  })
}
const Y = e => (K("data-v-a60c284b"), e = e(), O(), e),
  Z = {
    class: "title display1"
  },
  tt = {
    class: "italic"
  },
  st = {
    class: "inner"
  },
  et = {
    key: 0,
    class: "photo-wrapper"
  },
  ot = {
    class: "caption-wrapper"
  },
  nt = Y(() => s("div", {
    class: "contact-decor"
  }, [s("svg", {
    width: "43",
    height: "39",
    viewBox: "0 0 43 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [s("path", {
    d: "M14.2647 28.7353L39.5882 22.7059L1 1",
    stroke: "#F5F5F5"
  }), s("path", {
    d: "M41.9972 22.7051L2.20312 38.3815",
    stroke: "#F5F5F5",
    "stroke-opacity": "0.3",
    "stroke-width": "0.5"
  })])], -1)),
  it = {
    class: "caption p1"
  },
  at = {
    class: "caption-opacity"
  },
  ct = {
    class: "description h3 italic"
  },
  rt = {
    class: "description-small p1"
  },
  lt = {
    name: "MainContact"
  },
  pt = W({
    ...lt,
    props: {
      descriptionLeft1: {},
      descriptionLeft2: {},
      descriptions: {},
      photo: {},
      smallDescription: {},
      title: {}
    },
    setup(e) {
      const n = e,
        {
          $gsap: r
        } = R(),
        p = q("transitionEnd"),
        i = f(!1),
        l = f(),
        a = f(),
        h = f(),
        {
          titleWithItalic: E
        } = U(),
        v = D(() => E(n.title));
      M(p, t => {
        t && y()
      }), V(async () => {
        await $(), p.value && y()
      });

      function y() {
        var _;
        if (i.value) return;
        i.value = !0;
        const t = l.value;
        if (!t) return;
        const c = t.querySelector(".title");
        c && setTimeout(() => {
          A(c)
        }, 500);
        const u = t.querySelector(".photo-wrapper");
        u && X(u), a.value && A(a.value, {
          duration: .5,
          stagger: .06
        }), (_ = h.value) != null && _.$el && r.fromTo(h.value.$el, {
          yPercent: 100,
          rotate: 5,
          clipPath: "polygon(0% 0%, 150% 0%, 150% 0%, 0% 0%)"
        }, {
          scrollTrigger: {
            trigger: a.value,
            start: "top bottom"
          },
          yPercent: 0,
          rotate: 0,
          clipPath: "polygon(0% 0%, 150% 0%, 150% 120%, 0% 120%)",
          clearProps: "all",
          duration: .5,
          delay: 1,
          ease: "custom"
        })
      }

      function d(t) {
        if (!t) return {
          first: "",
          rest: ""
        };
        const c = t.split(" ");
        return {
          first: c.slice(0, 1).join(" "),
          rest: c.slice(1, c.length).join(" ")
        }
      }
      return (t, c) => {
        var k, w, S, P, T, I, L, b;
        const u = G,
          _ = H,
          N = J;
        return j(), C("section", {
          ref_key: "contactSection",
          ref: l,
          class: "contact"
        }, [s("p", Z, [F(o(B(v).first_word), 1), s("span", tt, o(B(v).rest), 1)]), s("div", st, [t.photo ? (j(), C("div", et, [g(u, {
          photo: t.photo
        }, null, 8, ["photo"])])) : x("", !0), s("div", ot, [nt, s("p", it, [F(o(t.descriptionLeft1) + " ", 1), s("span", at, o(t.descriptionLeft2), 1)])]), s("p", ct, [s("span", {
          ref_key: "descriptionEl",
          ref: a,
          class: "description-inner"
        }, [s("span", null, o(d((k = t.descriptions) == null ? void 0 : k[0]).first), 1), s("span", null, o(d((w = t.descriptions) == null ? void 0 : w[0]).rest), 1), s("span", null, o((S = t.descriptions) == null ? void 0 : S[1]), 1), s("span", null, o((P = t.descriptions) == null ? void 0 : P[2]), 1), s("span", null, o((T = t.descriptions) == null ? void 0 : T[3]), 1), s("span", rt, o(t.smallDescription), 1), s("span", null, o(d((I = t.descriptions) == null ? void 0 : I[4]).first), 1), s("span", null, o(d((L = t.descriptions) == null ? void 0 : L[4]).rest), 1), s("span", null, o((b = t.descriptions) == null ? void 0 : b[5]), 1)], 512), g(N, {
          ref_key: "descriptionLink",
          ref: h,
          to: "/contact",
          class: "description-link h3"
        }, {
          default: z(() => [g(_, {
            text: "Send request"
          })]),
          _: 1
        }, 512)])])], 512)
      }
    }
  }),
  _t = Q(pt, [
    ["__scopeId", "data-v-a60c284b"]
  ]);
export {
  _t as _, X as p, U as u
};