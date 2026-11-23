/* https://ab-sl.ru/_nuxt/DvGqYPiL.js */
import {
  d as h,
  u as B,
  o as p,
  c,
  a,
  x as g,
  t as x,
  e as C,
  n as H,
  F as I,
  r as O,
  f as s,
  s as $,
  _ as D
} from "./DROVP5M4.js";
const N = {
    class: "dropdown"
  },
  F = {
    class: "underline"
  },
  L = ["onClick"],
  M = {
    name: "CommonDropdown"
  },
  V = h({
    ...M,
    props: {
      options: {},
      activeOption: {}
    },
    emits: ["optionChange"],
    setup(v, {
      emit: k
    }) {
      const i = v,
        w = k,
        {
          $gsap: d
        } = B(),
        n = s(),
        l = s(),
        o = s(!1),
        f = s(0),
        r = s(!1),
        b = $(() => o.value ? "x" : i.activeOption ? i.activeOption : i.options[f.value]?.toLowerCase());
      async function m() {
        if (!(!n.value || !l.value)) {
          if (o.value) await d.set(n.value, {
            maxHeight: 0,
            clearProps: "all"
          });
          else {
            const t = l.value.getBoundingClientRect().height;
            await d.set(n.value, {
              maxHeight: t,
              overflow: "visible"
            })
          }
          o.value = !o.value
        }
      }

      function y(t) {
        f.value = t, w("optionChange", t), m()
      }
      return (t, e) => (p(), c("div", N, [a("button", {
        class: H(["button p1", {
          active: C(r)
        }]),
        onMouseenter: e[0] || (e[0] = u => r.value = !0),
        onMouseleave: e[1] || (e[1] = u => r.value = !1),
        onClick: m
      }, [e[2] || (e[2] = g(" [ ", -1)), a("span", F, x(C(b)), 1), e[3] || (e[3] = g(" ] ", -1))], 34), a("div", {
        ref_key: "listWrapper",
        ref: n,
        class: "list-wrapper"
      }, [a("div", {
        ref_key: "list",
        ref: l,
        class: "list"
      }, [(p(!0), c(I, null, O(v.options, (u, _) => (p(), c("button", {
        key: _,
        class: "p1--link list-item",
        onClick: W => y(_)
      }, x(u), 9, L))), 128))], 512)], 512)]))
    }
  }),
  A = D(V, [
    ["__scopeId", "data-v-0d3d26bc"]
  ]);
export {
  A as _
};