/* https://hilight.design/_nuxt/ChFLHJTk.js */
import {
  _ as z
} from "./DwWBZSTG.js";
import {
  _ as O
} from "./B42LVb-8.js";
import {
  u as H,
  x as D,
  d as N,
  b as $,
  s as j,
  c as h,
  e as l,
  h as P,
  t as I,
  ak as R,
  f as B,
  w as C,
  i as U,
  o as s,
  j as f,
  k,
  S as W,
  r as F,
  A as G,
  m as E,
  a as J,
  V as K,
  n as Q
} from "#entry";
import {
  s as X
} from "./Fjg1XfjS.js";

function Y(n) {
  const {
    isMobile: c
  } = H();
  D(c, () => {
    n()
  })
}
const Z = {
    class: "sticky"
  },
  ee = {
    key: 0,
    class: "subtitle l2"
  },
  te = {
    class: "texts"
  },
  ne = ["innerHTML"],
  oe = ["innerHTML"],
  se = {
    class: "btn"
  },
  ae = {
    class: "photos"
  },
  ie = {
    key: 0,
    class: "first-sketch"
  },
  le = {
    key: 1,
    class: "second-sketch"
  },
  ce = N({
    __name: "About2",
    props: {
      data: {},
      triggerTop: {
        type: Boolean
      },
      secondSection: {
        type: Boolean
      },
      services: {
        type: Boolean
      },
      section: {}
    },
    setup(n) {
      const c = n,
        {
          isDesktop: y
        } = H(),
        u = e => {
          const o = X(e);
          return y.value ? o : o.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim()
        },
        T = e => ({
          original: e,
          thumbnail: e,
          small: e,
          medium: e,
          large: e,
          extra: e,
          alt: ""
        }),
        L = T("/videos/sketch1-optimized.mp4"),
        q = T("/videos/sketch2-optimized.mp4"),
        S = F();
      let m = null,
        g = [],
        p = 0,
        V = !1;
      const w = () => {
          m?.scrollTrigger?.kill(), m?.kill(), m = null, g.forEach(e => e()), g = []
        },
        A = async () => {
          const e = ++p;
          if (w(), await G(), e !== p) return;
          const o = S.value;
          if (!o) return;
          const a = o.querySelectorAll(".text"),
            i = o.querySelector(".btn");
          if (!a.length) return;
          const _ = [u(c.data.text1), u(c.data.text2)];
          a.forEach((t, x) => {
            t.innerHTML = _[x] || ""
          }), i && E.set(i, {
            clearProps: "all"
          });
          const r = await Promise.all(Array.from(a).map(t => J(t)));
          if (e !== p) {
            r.forEach(t => t.revert());
            return
          }
          const M = c.triggerTop ? "top top" : "top center",
            v = await K(i, {
              delay: .1
            });
          if (e !== p) {
            r.forEach(t => t.revert()), v.in.kill(), v.out.kill();
            return
          }
          const d = E.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: o,
              start: M,
              end: "bottom bottom",
              scrub: !0,
              snap: {
                snapTo: "labelsDirectional",
                duration: {
                  min: .2,
                  max: .5
                },
                delay: .05,
                ease: "power1.inOut"
              }
            }
          });
          r.forEach(({
            in: t,
            out: x
          }, b) => {
            d.add(t.play(), b === 0 ? 0 : "<0.4"), d.addLabel(`text-${b}`), b !== r.length - 1 && d.add(x.play(), ">")
          }), d.add(v.in.play(), 0), m = d, g = r.map(t => t.revert)
        };
      return $(() => {
        V = !0, A()
      }), Y(() => {
        V && A().then(() => W.refresh())
      }), j(w), (e, o) => {
        const a = z,
          i = O,
          _ = U;
        return s(), h("div", {
          ref_key: "sectionText",
          ref: S,
          class: "about"
        }, [l("div", Z, [n.services ? (s(), h("p", ee, I(e.$t("full_scope")), 1)) : P("", !0), l("div", te, [l("div", {
          class: "text h2-light",
          innerHTML: u(n.data.text1)
        }, null, 8, ne), l("div", {
          class: "text h2-light",
          innerHTML: u(n.data.text2)
        }, null, 8, oe)]), l("div", se, [R(e.$slots, "btn", {}, void 0)]), l("div", ae, [n.secondSection ? (s(), h("div", le, [B(_, null, {
          default: C(() => [k(y) ? (s(), f(a, {
            key: 0,
            "sequence-path": "/sequences/sketch2",
            section: n.section || ".about",
            lazy: ""
          }, null, 8, ["section"])) : (s(), f(i, {
            key: 1,
            inner: "",
            video: k(q)
          }, null, 8, ["video"]))]),
          _: 1
        })])) : (s(), h("div", ie, [B(_, null, {
          default: C(() => [k(y) ? (s(), f(a, {
            key: 0,
            "sequence-path": "/sequences/sketch1",
            section: n.section || ".about",
            lazy: ""
          }, null, 8, ["section"])) : (s(), f(i, {
            key: 1,
            inner: "",
            video: k(L)
          }, null, 8, ["video"]))]),
          _: 1
        })]))])])], 512)
      }
    }
  }),
  pe = Object.assign(Q(ce, [
    ["__scopeId", "data-v-b200ae27"]
  ]), {
    __name: "SectionAbout2"
  });
export {
  pe as _, Y as u
};