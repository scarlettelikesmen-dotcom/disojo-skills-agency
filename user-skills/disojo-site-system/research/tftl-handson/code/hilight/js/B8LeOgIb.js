/* https://hilight.design/_nuxt/B8LeOgIb.js */
import {
  d as r,
  c as a,
  o as n,
  F as d,
  y as _,
  v as p,
  e as t,
  t as o,
  n as u
} from "#entry";
const v = {
    class: "items"
  },
  b = ["onClick"],
  k = {
    class: "item-count l2",
    "data-text-anim": ""
  },
  C = {
    class: "item-name l2",
    "data-text-anim": ""
  },
  x = r({
    __name: "Tabs",
    props: {
      activeTab: {},
      data: {}
    },
    emits: ["tabClick"],
    setup(i, {
      emit: c
    }) {
      const m = c;
      return (g, s) => (n(), a("div", v, [(n(!0), a(d, null, _(i.data, (l, e) => (n(), a("div", {
        key: e,
        class: p(["item", {
          active: i.activeTab === e
        }]),
        onClick: f => m("tabClick", e)
      }, [t("p", k, o(String(e + 1).padStart(2, "0")), 1), t("p", C, o(l), 1), s[0] || (s[0] = t("span", {
        class: "item-square"
      }, null, -1)), s[1] || (s[1] = t("div", {
        class: "item-line"
      }, [t("div", {
        class: "item-progress"
      })], -1))], 10, b))), 128))]))
    }
  }),
  y = Object.assign(u(x, [
    ["__scopeId", "data-v-8d575385"]
  ]), {
    __name: "CommonTabs"
  });
export {
  y as _
};