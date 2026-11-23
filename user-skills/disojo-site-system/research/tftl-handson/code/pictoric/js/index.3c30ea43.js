/* https://pictoric.com.ua/_nuxt/index.3c30ea43.js */
import {
  P as g,
  S as m,
  _ as w
} from "./pagination.9e265203.js";
import {
  d as f,
  m as v,
  v as h,
  o as x,
  a as y,
  b as i,
  c as r,
  n as S,
  g as a,
  k as d,
  a0 as B,
  y as b,
  j as k,
  _ as C
} from "./entry.6cb2d70d.js";
const P = {
    class: "slider"
  },
  $ = ["id"],
  E = ["id"],
  I = {
    class: "swiper-wrapper"
  },
  T = f({
    __name: "index",
    props: {
      id: {},
      paginationPosition: {
        default: "top"
      },
      cursorShown: {
        type: Boolean
      },
      hidePagination: {
        type: Boolean
      }
    },
    setup(o) {
      const s = o,
        {
          t: c
        } = v();
      let n;
      const l = {
        modules: [g],
        touchEventsTarget: "container",
        slidesPerView: "auto",
        grabCursor: !0,
        pagination: {
          type: "progressbar",
          el: `#${s.id}-pagination`
        },
        breakpoints: {
          1024: {}
        },
        on: {
          init: () => {
            u()
          }
        }
      };

      function p() {
        n = new m(`#${s.id}-swiper`, l)
      }

      function u() {
        const t = document.getElementById(`${s.id}-swiper`),
          e = t == null ? void 0 : t.querySelectorAll(".swiper-slide");
        !t || !(e != null && e.length) || h.fromTo(e, {
          x: "100vw"
        }, {
          scrollTrigger: {
            trigger: e[0],
            start: "top bottom"
          },
          x: "0",
          duration: 1.2,
          ease: "smooth-ease",
          stagger: .02
        })
      }
      return x(p), y(() => n == null ? void 0 : n.destroy()), (t, e) => {
        const _ = w;
        return i(), r("section", P, [o.hidePagination ? d("", !0) : (i(), r("div", {
          key: 0,
          id: `${o.id}-pagination`,
          class: S([o.paginationPosition, "pagination-wrapper"])
        }, [...e[0] || (e[0] = [a("div", {
          class: "swiper-pagination"
        }, null, -1)])], 10, $)), a("div", {
          id: `${o.id}-swiper`,
          class: "swiper"
        }, [a("div", I, [B(t.$slots, "slides", {}, void 0, !0)]), o.cursorShown ? (i(), b(_, {
          key: 0,
          text: k(c)("cursors.dragAndDrop")
        }, null, 8, ["text"])) : d("", !0)], 8, E)])
      }
    }
  });
const N = C(T, [
  ["__scopeId", "data-v-d658b820"]
]);
export {
  N as _
};