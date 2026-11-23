/* https://hilight.design/_nuxt/BjmPVgMU.js */
import {
  d as m,
  x as i,
  c as v,
  o as p,
  f as l,
  w as d,
  E as f,
  r as u,
  m as _,
  n as x,
  p as b,
  s as h
} from "#entry";
import {
  _ as B
} from "./lKvBwyz6.js";
const C = m({
    __name: "FixedBtn",
    props: {
      x: {},
      y: {},
      visible: {
        type: Boolean
      }
    },
    setup(a) {
      const n = a,
        t = u(null);
      return i(() => n.visible, o => {
        t.value && _.to(t.value, {
          autoAlpha: o ? 1 : 0,
          scale: o ? 1 : .6,
          duration: .25,
          ease: "power2.out"
        })
      }, {
        immediate: !0
      }), i(() => [n.x, n.y], ([o, s]) => {
        !t.value || !n.visible || _.to(t.value, {
          x: o,
          y: s,
          ease: "ease",
          duration: .3
        })
      }), (o, s) => {
        const r = f,
          e = B;
        return p(), v("div", {
          ref_key: "el",
          ref: t,
          class: "fixed-btn"
        }, [l(e, {
          white: ""
        }, {
          default: d(() => [l(r)]),
          _: 1
        })], 512)
      }
    }
  }),
  E = Object.assign(x(C, [
    ["__scopeId", "data-v-f82a5b4f"]
  ]), {
    __name: "CommonFixedBtn"
  }),
  g = (a, n = ".item") => {
    const t = u(0),
      o = u(0),
      s = u(!1),
      r = e => {
        const c = e.target.closest(n);
        s.value = !!c, c && (t.value = e.clientX + 24, o.value = e.clientY)
      };
    return b(() => {
      const e = a.value;
      e && (e.addEventListener("mousemove", r), e.addEventListener("mouseleave", () => s.value = !1))
    }), h(() => {
      a.value?.removeEventListener("mousemove", r)
    }), {
      x: t,
      y: o,
      visible: s
    }
  };
export {
  E as _, g as u
};