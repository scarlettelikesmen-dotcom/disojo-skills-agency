/* https://archvoyage.ae/_nuxt/OurMission.C42Ax4nB.js */
import {
  d as S,
  r as l,
  u as v,
  w as y,
  o as A,
  n as D,
  a as m,
  b as g,
  e as t,
  t as s,
  z as M,
  m as E,
  c as V,
  x as T,
  g as W,
  y as C,
  f as q,
  j as N,
  C as x,
  k as z
} from "./entry.YPAKmh3d.js";
import {
  t as I
} from "./titleAnim.CszaPWUV.js";
import {
  u as j
} from "./Contact.D-xzsxJa.js";
const H = {
    class: "hero container"
  },
  O = {
    class: "hero__title-line hero__title-first-line"
  },
  R = {
    class: "hero__title-first-line--second"
  },
  F = {
    class: "hero__title-line"
  },
  G = {
    class: "hero__title-line hero__title-third-line"
  },
  J = {
    class: "italic"
  },
  K = {
    class: "italic"
  },
  L = {
    class: "hero__text-with-dot p1"
  },
  Q = {
    class: "hero__sub-title p1"
  },
  U = {
    class: "p1 hero__bottom-right-txt"
  },
  X = S({
    __name: "HeroSection",
    props: {
      pageName: {},
      description: {},
      dotText: {},
      titles: {}
    },
    setup(P) {
      const {
        $gsap: f
      } = M(), c = l(), a = l(), _ = v("preloaderDone");
      y(_, o => {
        o && d()
      }), A(async () => {
        await D(), _.value && d()
      });

      function d() {
        if (c.value && I(c.value), a.value) {
          const o = a.value.querySelector(".hero__sub-title"),
            r = a.value.querySelector(".hero__bottom-right-txt"),
            i = a.value.querySelector(".hero__text-with-dot"),
            n = window.innerWidth > 1024 ? [o, i, r] : [o, r, i];
          f.fromTo(n, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            yPercent: 100
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            yPercent: 0,
            clearProps: "all",
            duration: .6,
            delay: 1,
            stagger: .2,
            ease: "custom"
          })
        }
      }
      return (o, r) => {
        var i, n, p, u, h;
        return m(), g("section", H, [t("h1", {
          ref_key: "title",
          ref: c,
          class: "hero__title h1"
        }, [t("span", O, [t("span", null, s((i = o.titles) == null ? void 0 : i[0]), 1), t("span", R, s((n = o.titles) == null ? void 0 : n[1]), 1)]), t("span", F, s((p = o.titles) == null ? void 0 : p[2]), 1), t("span", G, [t("span", J, s((u = o.titles) == null ? void 0 : u[3]), 1), t("span", K, s((h = o.titles) == null ? void 0 : h[4]), 1)])], 512), t("div", {
          ref_key: "bottomPart",
          ref: a,
          class: "hero__bottom-part"
        }, [t("div", null, [t("p", L, s(o.dotText), 1)]), t("div", null, [t("p", Q, s(o.pageName), 1), t("p", U, s(o.description), 1)])], 512)])
      }
    }
  }),
  lt = E(X, [
    ["__scopeId", "data-v-c05710b9"]
  ]),
  Y = {
    class: "our-mission"
  },
  Z = {
    class: "italic"
  },
  tt = {
    key: 0,
    class: "our-mission__card-video"
  },
  ot = ["src"],
  et = {
    class: "our-mission__card-description p1"
  },
  st = S({
    __name: "OurMission",
    props: {
      title: {},
      description: {},
      bigPhoto: {},
      cardPhoto: {},
      alternativeCard: {
        type: Boolean
      },
      noBottomMargin: {
        type: Boolean
      }
    },
    setup(P) {
      const f = P,
        {
          titleWithItalic: c
        } = j(),
        a = V(() => c(f.title)),
        _ = v("transitionEnd"),
        d = v("preloaderDone"),
        o = l(!1),
        r = l(),
        i = l(),
        n = l();
      y(_, e => {
        e && p()
      }), y(d, e => {
        e && u()
      }), A(async () => {
        await D(), _.value && p(), d.value && u()
      });

      function p() {
        o.value || (o.value = !0, i.value && I(i.value), n.value && T(n.value))
      }

      function u() {
        r.value && T(r.value, {
          delay: .2
        })
      }

      function h(e) {
        return e ? e.endsWith(".mp4") : !1
      }
      return (e, it) => {
        var k, w, B, $;
        const b = z;
        return m(), g("section", Y, [t("div", {
          ref_key: "photo",
          ref: r,
          class: "our-mission__first-block"
        }, [W(b, {
          photo: e.bigPhoto
        }, null, 8, ["photo"])], 512), t("div", {
          class: C(["our-mission__second-block", {
            "no-bottom-margin": e.noBottomMargin
          }])
        }, [t("article", {
          class: C(["our-mission__card", {
            alternative: e.alternativeCard
          }])
        }, [t("p", {
          ref_key: "titleEl",
          ref: i,
          class: "our-mission__card-title h4"
        }, [q(s((k = N(a)) == null ? void 0 : k.first_word) + " ", 1), t("span", Z, s((w = N(a)) == null ? void 0 : w.rest), 1)], 512), t("div", {
          ref_key: "smallPhoto",
          ref: n,
          class: "our-mission__card-img"
        }, [h((B = e.cardPhoto) == null ? void 0 : B.original) ? (m(), g("div", tt, [t("video", {
          src: `${($=e.cardPhoto)==null?void 0:$.original}#t=0.1`,
          playsinline: "",
          autoplay: "",
          muted: "",
          loop: ""
        }, null, 8, ot)])) : (m(), x(b, {
          key: 1,
          photo: e.cardPhoto,
          "default-size": "large"
        }, null, 8, ["photo"]))], 512), t("p", et, s(e.description), 1)], 2)], 2)])
      }
    }
  }),
  ct = E(st, [
    ["__scopeId", "data-v-0fbe50f9"]
  ]);
export {
  lt as _, ct as a
};