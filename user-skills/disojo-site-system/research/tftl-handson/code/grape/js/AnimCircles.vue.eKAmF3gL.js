/* https://grape.ua/_nuxt/AnimCircles.vue.eKAmF3gL.js */
import {
  e as v,
  j as i
} from "./entry.DN75vySF.js";
import {
  j as p,
  a as _,
  C as g,
  o as k,
  M as d,
  N as m,
  U as h,
  J as L,
  $ as M,
  Z as B
} from "./swiper-vue.BTZulNLT.js";
const q = p({
  __name: "AnimCircles",
  props: {
    color: {
      default: "black",
      required: !1
    }
  },
  setup(u) {
    const f = u;
    let a;
    const l = _(null),
      n = () => {
        var o, s;
        const t = ((o = l.value) == null ? void 0 : o.querySelectorAll(".circle.hide")) ?? [],
          r = ((s = l.value) == null ? void 0 : s.querySelectorAll(".circle:not(.hide)")) ?? [],
          e = t[Math.floor(t.length * Math.random())],
          c = r[Math.floor(r.length * Math.random())];
        e && e.classList.remove("hide"), c && c.classList.add("hide")
      };
    return g(() => {
      var r;
      (((r = l.value) == null ? void 0 : r.querySelectorAll(".circle")) ?? []).forEach(e => {
        Math.random() > .41 ? e.classList.remove("hide") : e.classList.add("hide")
      }), setTimeout(() => {
        v.create({
          trigger: l.value,
          onEnter: () => {
            a = i(n, 1e3)
          },
          onEnterBack: () => {
            a = i(n, 1e3)
          },
          onLeave: () => {
            clearInterval(a)
          },
          onLeaveBack: () => {
            clearInterval(a)
          }
        })
      }, 1e3)
    }), k(() => {
      clearInterval(a)
    }), (t, r) => (d(), m("div", null, [h("div", {
      ref_key: "elem",
      ref: l,
      class: B(["anim-circles", {
        "anim-circles--white": f.color === "white"
      }])
    }, [(d(), m(L, null, M(25, e => h("div", {
      key: e,
      class: "circle"
    })), 64))], 2)]))
  }
});
export {
  q as _
};