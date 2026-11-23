/* https://hilight.design/_nuxt/DWXer2Ri.js */
import {
  d as a,
  u as i,
  b as c,
  p as l,
  m as p,
  r as _,
  c as u,
  o as m,
  e as d,
  n as f
} from "#entry";
const g = {
    class: "common-line"
  },
  v = a({
    __name: "LineProgress",
    props: {
      section: {},
      useInMounted: {
        type: Boolean
      }
    },
    setup(n) {
      const e = n,
        s = _(),
        {
          isDesktop: o
        } = i();
      c(() => {
        o.value && t()
      }), l(() => {
        o.value && e.useInMounted && t()
      });
      const t = () => {
        p.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: e.section,
            start: "top top",
            end: "bottom bottom",
            scrub: !0
          }
        }).to(s.value, {
          scaleY: 1
        })
      };
      return (r, b) => (m(), u("div", g, [d("div", {
        ref_key: "lineProgress",
        ref: s,
        class: "line-progress"
      }, null, 512)]))
    }
  }),
  x = Object.assign(f(v, [
    ["__scopeId", "data-v-2c735fa4"]
  ]), {
    __name: "CommonLineProgress"
  });
export {
  x as _
};