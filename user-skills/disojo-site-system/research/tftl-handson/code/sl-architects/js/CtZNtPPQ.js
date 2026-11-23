/* https://ab-sl.ru/_nuxt/CtZNtPPQ.js */
import {
  K as w,
  d as v,
  u as h,
  w as y,
  i as g,
  C as x,
  o as t,
  c as o,
  F as f,
  r as d,
  a as m,
  e as k,
  n as R,
  f as C,
  _ as E
} from "./DROVP5M4.js";
async function b(a) {
  if (!a || !a.toLowerCase().endsWith(".svg")) return;
  const {
    apiUrl: s,
    mediaUrl: c
  } = w().public, i = c || s;
  try {
    const e = await fetch(i + a);
    if (!e.ok) throw new Error("REQUEST ERROR");
    let l = await e.text();
    return l = l.replace(/fill="[^"]*"/g, ""), l
  } catch (e) {
    console.error("REQUEST ERROR", e);
    return
  }
}
const L = ["href"],
  M = ["innerHTML"],
  T = {
    key: 1,
    class: "socials"
  },
  U = ["href", "innerHTML"],
  B = {
    name: "CommonSocials"
  },
  D = v({
    ...B,
    props: {
      alternativeView: {
        type: Boolean
      },
      externalData: {}
    },
    async setup(a) {
      let s, c;
      const i = a,
        e = C(),
        l = h().$i18n.locale.value,
        {
          data: _
        } = ([s, c] = y(() => g("contact", () => $fetch("/api/pages/pageContact", {
          method: "post",
          body: {
            locale: l
          }
        }))), s = await s, c(), s);
      return x(async () => {
        if (!_.value || !_.value.socials) return;
        const p = i.externalData ?? _.value.socials;
        e.value = await Promise.all(p.map(async r => {
          const n = await b(r.icon);
          return {
            link: r.link,
            icon: n
          }
        }))
      }), (p, r) => a.alternativeView ? (t(), o("div", {
        key: 0,
        class: R(["socials", {
          "alt-view": a.alternativeView
        }])
      }, [(t(!0), o(f, null, d(k(e), (n, u) => (t(), o("a", {
        key: u,
        rel: "nofollow",
        target: "_blank",
        href: n.link,
        class: "socials__link"
      }, [r[0] || (r[0] = m("span", {
        class: "socials__bg"
      }, null, -1)), m("span", {
        class: "socials__icon",
        innerHTML: n?.icon
      }, null, 8, M)], 8, L))), 128))], 2)) : (t(), o("div", T, [(t(!0), o(f, null, d(k(e), (n, u) => (t(), o("a", {
        key: u,
        rel: "nofollow",
        target: "_blank",
        href: n.link,
        class: "socials__link",
        innerHTML: n?.icon
      }, null, 8, U))), 128))]))
    }
  }),
  V = E(D, [
    ["__scopeId", "data-v-83d12ac6"]
  ]);
export {
  V as _
};