/* https://pictoric.com.ua/_nuxt/index.bef27073.js */
import {
  d,
  b as n,
  c as o,
  g as t,
  F as g,
  h as y,
  t as i,
  k as u,
  _ as p,
  m as b,
  W as k,
  O as w,
  Q as C,
  P as L,
  o as H,
  j as l,
  i as m,
  v as h
} from "./entry.6cb2d70d.js";
import {
  u as M
} from "./index.7717ae4c.js";
import {
  u as T
} from "./useDefaultAnim.bde1a832.js";
const A = {
    key: 0,
    class: "hero"
  },
  I = {
    class: "title-wrapper"
  },
  P = {
    class: "hero-title h2 anim-title"
  },
  S = {
    class: "h1 title-text anim-title"
  },
  B = {
    class: "hero-updated t2-xb"
  },
  D = d({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(e) {
      return (s, c) => e.data ? (n(), o("section", A, [t("div", I, [t("h1", P, [(n(!0), o(g, null, y(e.data.title.split(" "), (r, a) => (n(), o("span", {
        key: a
      }, i(`${r} `), 1))), 128))]), t("span", S, i(e.data.description), 1)]), t("p", B, [c[0] || (c[0] = t("span", null, "Last updated: ", -1)), t("span", null, i(e.data.date), 1)])])) : u("", !0)
    }
  });
const E = p(D, [
    ["__scopeId", "data-v-e2bbafbf"]
  ]),
  N = {
    key: 0,
    class: "content"
  },
  V = ["innerHTML"],
  F = {
    class: "content-wrapper"
  },
  W = {
    class: "content-title h4"
  },
  j = ["innerHTML"],
  q = d({
    __name: "Content",
    props: {
      data: {}
    },
    setup(e) {
      return (s, c) => e.data ? (n(), o("section", N, [t("div", {
        class: "content-description t1",
        innerHTML: e.data.description
      }, null, 8, V), t("div", F, [(n(!0), o(g, null, y(e.data.content, (r, a) => (n(), o("div", {
        key: a,
        class: "content-inner"
      }, [t("h3", W, i(r.title), 1), t("div", {
        class: "content-text t1",
        innerHTML: r.description
      }, null, 8, j)]))), 128))])])) : u("", !0)
    }
  });
const O = p(q, [
    ["__scopeId", "data-v-bc3e5826"]
  ]),
  Q = {
    key: 0,
    class: "legal-page grid-container"
  },
  R = d({
    __name: "index",
    async setup(e) {
      let s, c;
      const {
        locale: r
      } = b(), {
        path: a
      } = k(), f = a.replace(/^\/uk|\/en/, "") || "/", {
        data: _
      } = ([s, c] = w(async () => C(`legal-${a}`, async () => await $fetch(`/api/legal${f}`, {
        method: "get",
        query: {
          locale: r.value
        }
      }))), s = await s, c(), s);
      if (!_.value) throw L({
        statusCode: 404,
        statusMessage: `Error fetching ${a} page data`,
        fatal: !0
      });
      M(_.value.meta), T();

      function v() {
        h.timeline().fromTo(".legal-page .hero", {
          y: 100,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: .7,
          ease: "power1.out"
        }).fromTo(".legal-page .content", {
          y: 100,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: .7,
          ease: "power1.out"
        }), h.to(".hero-updated", {
          scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            scrub: !0
          },
          y: -300
        })
      }
      return H(v), (z, G) => {
        const x = E,
          $ = O;
        return l(_) ? (n(), o("main", Q, [m(x, {
          data: l(_).hero
        }, null, 8, ["data"]), m($, {
          data: l(_).content
        }, null, 8, ["data"])])) : u("", !0)
      }
    }
  });
const X = p(R, [
  ["__scopeId", "data-v-614a7d90"]
]);
export {
  X as _
};