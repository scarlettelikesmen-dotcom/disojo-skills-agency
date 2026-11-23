/* https://archvoyage.ae/_nuxt/index.DIka7uFJ.js */
import {
  d as V,
  q as $,
  u as L,
  r as D,
  w as j,
  o as z,
  n as W,
  b as F,
  g as i,
  h as G,
  z as H,
  s as J,
  a as K,
  e as s,
  t as O,
  j as t,
  v as Q,
  p as R,
  l as U,
  f as X,
  m as Y
} from "./entry.YPAKmh3d.js";
import {
  _ as Z
} from "./List.Xuxzn0qK.js";
import {
  _ as ee
} from "./Contact.D-xzsxJa.js";
import {
  s as te,
  _ as se
} from "./setPageMeta.DvPDcq0E.js";
import {
  t as oe
} from "./titleAnim.CszaPWUV.js";
import "./MoreButton.BK_q1TjK.js";
import "./Plus.DQtF0hp8.js";
import "./swiper.COee7uVM.js";
const I = o => (R("data-v-07eabb1c"), o = o(), U(), o),
  ae = {
    class: "expertises-page page"
  },
  ne = I(() => s("div", {
    class: "header-gap"
  }, null, -1)),
  ce = {
    class: "header container"
  },
  ie = I(() => s("p", {
    class: "caption p1"
  }, [s("span", {
    class: "caption-dot"
  }), X(" We provide a wide range of expertises ")], -1)),
  pe = {
    class: "counter p1 italic"
  },
  re = {
    class: "header-line"
  },
  le = {
    name: "ExpertisesPage"
  },
  _e = V({
    ...le,
    async setup(o) {
      var d;
      let a, r;
      const {
        data: e
      } = ([a, r] = $(() => J("expertises-page", () => $fetch("/api/pages/pageExpertise"))), a = await a, r(), a);
      te((d = e == null ? void 0 : e.value) == null ? void 0 : d.meta);
      const {
        $gsap: N
      } = H(), l = L("preloaderDone"), p = D(), n = D();
      j(l, c => {
        c && _()
      }), z(async () => {
        await W(), l.value && _()
      });

      function _() {
        if (p.value && oe(p.value, {
            delay: .2
          }), n.value) {
          const c = n.value.querySelector(".caption"),
            u = n.value.querySelector(".counter");
          N.fromTo([c, u], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            yPercent: 100
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            yPercent: 0,
            clearProps: "all",
            duration: .6,
            delay: .7,
            stagger: .2,
            ease: "custom"
          })
        }
      }
      return (c, u) => {
        const T = Q,
          q = Z,
          B = ee,
          M = se;
        return K(), F("main", ae, [i(M, null, {
          default: G(() => {
            var m, f, h, x, g, y, v, w, P, S, b, E, k, A, C;
            return [ne, s("header", ce, [s("h1", {
              ref_key: "title",
              ref: p,
              class: "h1 title"
            }, "Expertises", 512), s("div", {
              ref_key: "status",
              ref: n,
              class: "status-bar"
            }, [ie, s("p", pe, O(`(${(f=(m=t(e))==null?void 0:m.expertises)==null?void 0:f.length}) Expertises`), 1)], 512), s("div", re, [i(T)])]), i(q, {
              expertises: (h = t(e)) == null ? void 0 : h.expertises,
              "is-expertises-page": ""
            }, null, 8, ["expertises"]), i(B, {
              title: (g = (x = t(e)) == null ? void 0 : x.contact) == null ? void 0 : g.title,
              photo: (v = (y = t(e)) == null ? void 0 : y.contact) == null ? void 0 : v.photo,
              "description-left-1": (P = (w = t(e)) == null ? void 0 : w.contact) == null ? void 0 : P.description_left_1,
              "description-left-2": (b = (S = t(e)) == null ? void 0 : S.contact) == null ? void 0 : b.description_left_2,
              descriptions: (k = (E = t(e)) == null ? void 0 : E.contact) == null ? void 0 : k.descriptions,
              "small-description": (C = (A = t(e)) == null ? void 0 : A.contact) == null ? void 0 : C.small_description
            }, null, 8, ["title", "photo", "description-left-1", "description-left-2", "descriptions", "small-description"])]
          }),
          _: 1
        })])
      }
    }
  }),
  ve = Y(_e, [
    ["__scopeId", "data-v-07eabb1c"]
  ]);
export {
  ve as
  default
};