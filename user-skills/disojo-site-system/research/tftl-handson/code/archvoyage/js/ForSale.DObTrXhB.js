/* https://archvoyage.ae/_nuxt/ForSale.DObTrXhB.js */
import {
  d as O,
  u as W,
  r as c,
  w as $,
  c as R,
  o as G,
  n as J,
  a as I,
  b as K,
  e as t,
  g as k,
  j as Q,
  C as X,
  h as Y,
  D as Z,
  t as y,
  z as ee,
  k as te,
  _ as oe,
  v as ne,
  p as se,
  l as ae,
  m as le
} from "./entry.YPAKmh3d.js";
import {
  _ as ce
} from "./Button.DsjJ-bLs.js";
import {
  t as re
} from "./titleAnim.CszaPWUV.js";
const d = r => (se("data-v-bc5da7bd"), r = r(), ae(), r),
  ie = {
    class: "inner"
  },
  ue = d(() => t("div", {
    class: "flat-image-cover"
  }, null, -1)),
  de = {
    class: "top-part container"
  },
  pe = d(() => t("div", {
    class: "header-gap"
  }, null, -1)),
  _e = ["innerHTML"],
  fe = {
    class: "credits-item p1"
  },
  me = d(() => t("span", {
    class: "circle"
  }, null, -1)),
  he = ["innerHTML"],
  ve = ["innerHTML"],
  ke = {
    class: "credits-last-item"
  },
  ye = ["innerHTML"],
  ge = ["innerHTML"],
  be = {
    class: "line"
  },
  xe = {
    class: "bottom-part"
  },
  Te = ["href"],
  Se = d(() => t("span", {
    class: "call-us-link-background"
  }, null, -1)),
  Le = {
    class: "call-us-default-text italic"
  },
  we = {
    class: "call-us-default-text"
  },
  Pe = {
    class: "call-us-default-text"
  },
  Ee = d(() => t("span", {
    class: "call-us-hide-text"
  }, "(W)", -1)),
  Ue = O({
    __name: "ForSale",
    props: {
      projectPage: {
        type: Boolean
      },
      photo: {},
      descriptions: {},
      title: {},
      callUs: {},
      buttonText: {},
      buttonLink: {}
    },
    setup(r) {
      const D = r,
        {
          $gsap: i,
          $ScrollTrigger: g
        } = ee(),
        b = W("preloaderDone"),
        x = W("transitionEnd"),
        T = c(!1),
        f = c(),
        m = c(),
        S = c(),
        n = c(),
        L = c();
      let h = !1;
      $(x, e => {
        e && P()
      }), $(b, e => {
        e && w()
      });
      const j = R(() => {
        var e;
        return (e = D.title) == null ? void 0 : e.replace("&nbsp;", " ")
      });
      G(async () => {
        await J(), x.value && P(), b.value && w()
      });

      function w() {
        var s;
        if (f.value && re(f.value, {
            delay: .2
          }), m.value) {
          const a = m.value.querySelectorAll("p");
          i.fromTo(a, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            yPercent: 100
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            yPercent: 0,
            clearProps: "all",
            duration: .6,
            delay: .7,
            stagger: .1,
            ease: "custom"
          })
        }
        const e = (s = S.value) == null ? void 0 : s.querySelector(".wrapper");
        e && i.from(e, {
          scale: 1.1,
          duration: .8,
          delay: .2,
          ease: "custom"
        })
      }

      function P() {
        if (T.value) return;
        T.value = !0;
        const e = L.value,
          s = n.value,
          a = window.innerHeight - 24;
        g.create({
          trigger: s,
          start: `bottom ${a}`,
          onEnter() {
            i.set(s, {
              position: "fixed",
              bottom: 24
            })
          },
          onLeaveBack() {
            s.removeAttribute("style")
          }
        }), g.create({
          trigger: e,
          start: "bottom 85%",
          onEnter() {
            p()
          },
          onLeaveBack() {
            v()
          }
        })
      }

      function v() {
        if (setTimeout(() => {
            h = !0
          }, 50), !n.value) return;
        const e = n.value.querySelector(".call-us-link"),
          s = n.value.querySelector(".call-us-link-background"),
          a = n.value.querySelectorAll(".call-us-default-text"),
          u = n.value.querySelector(".call-us-hide-text"),
          o = i.timeline();
        o.to(e, {
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          x: 0,
          y: 0,
          duration: .3,
          clearProps: "all",
          ease: "custom"
        }).to(s, {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          duration: .3,
          clearProps: "all",
          ease: "custom"
        }, 0).to(u, {
          opacity: 0,
          duration: .2,
          clearProps: "all",
          ease: "custom"
        }, 0).to(a, {
          opacity: 1,
          duration: .1,
          clearProps: "all",
          ease: "custom"
        }, .2).then(() => {
          var l;
          (l = o == null ? void 0 : o.destroy) == null || l.call(o)
        })
      }

      function p() {
        if (document.removeEventListener("scroll", p), setTimeout(() => {
            h = !1
          }, 50), !n.value) return;
        const e = n.value.querySelector(".call-us-link"),
          s = n.value.querySelector(".call-us-link-background"),
          a = n.value.querySelectorAll(".call-us-default-text"),
          u = n.value.querySelector(".call-us-hide-text"),
          o = i.timeline();
        o.to(e, {
          scale: .25,
          duration: .3,
          ease: "custom"
        }).to(e, {
          xPercent: window.innerWidth > 1024 ? 38 : 0,
          yPercent: 38,
          duration: .3,
          ease: "custom"
        }).to(s, {
          backgroundColor: "#f5f5f5",
          duration: .6,
          ease: "custom"
        }, 0).to(a, {
          opacity: 0,
          duration: .2,
          ease: "custom"
        }, 0).to(u, {
          opacity: 1,
          duration: .2,
          ease: "custom"
        }, .3).then(() => {
          var l;
          (l = o == null ? void 0 : o.destroy) == null || l.call(o)
        })
      }

      function N(e) {
        h || e.preventDefault()
      }

      function V() {
        window.innerWidth < 1025 || v()
      }

      function z() {
        window.innerWidth < 1025 || p()
      }

      function F() {
        window.innerWidth > 1024 || (v(), document.addEventListener("scroll", p))
      }

      function _(e) {
        return e ? e.replace(/(<([^>]+)>)/gi, "") : ""
      }
      return (e, s) => {
        var E, U, C, M, B, H, q, A;
        const a = te,
          u = ce,
          o = oe,
          l = ne;
        return I(), K("section", {
          ref_key: "forSale",
          ref: L,
          class: "for-sale"
        }, [t("div", ie, [t("div", {
          ref_key: "photoWrapper",
          ref: S,
          class: "background"
        }, [k(a, {
          photo: e.photo
        }, null, 8, ["photo"]), ue], 512), t("div", de, [pe, t("div", {
          ref_key: "titleEl",
          ref: f,
          class: "title h2",
          innerHTML: Q(j)
        }, null, 8, _e), e.projectPage ? Z("", !0) : (I(), X(o, {
          key: 0,
          to: `/projects-sale/${e.buttonLink}`
        }, {
          default: Y(() => [k(u, {
            class: "link",
            text: e.buttonText || ""
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"])), t("div", {
          ref_key: "creditsEl",
          ref: m,
          class: "credits container"
        }, [t("div", fe, [me, t("div", {
          class: "p1",
          innerHTML: (E = e.descriptions) == null ? void 0 : E[0]
        }, null, 8, he)]), t("div", {
          class: "p1",
          innerHTML: (U = e.descriptions) == null ? void 0 : U[1]
        }, null, 8, ve), t("div", ke, [t("div", {
          class: "p1",
          innerHTML: (C = e.descriptions) == null ? void 0 : C[2]
        }, null, 8, ye), t("div", {
          class: "p1",
          innerHTML: (M = e.descriptions) == null ? void 0 : M[3]
        }, null, 8, ge)])], 512), t("div", be, [k(l)])]), t("div", xe, [t("div", {
          ref_key: "callUsEl",
          ref: n,
          class: "call-us",
          onMouseenter: V,
          onMouseleave: z,
          onClick: F
        }, [t("a", {
          href: `tel:${_((B=e.callUs)==null?void 0:B.phone)}`,
          class: "call-us-link p1",
          onClick: N
        }, [Se, t("span", Le, y(_((H = e.callUs) == null ? void 0 : H.title)), 1), t("span", we, y(_((q = e.callUs) == null ? void 0 : q.phone)), 1), t("span", Pe, y(_((A = e.callUs) == null ? void 0 : A.message)), 1), Ee], 8, Te)], 544)])])], 512)
      }
    }
  }),
  He = le(Ue, [
    ["__scopeId", "data-v-bc5da7bd"]
  ]);
export {
  He as _
};