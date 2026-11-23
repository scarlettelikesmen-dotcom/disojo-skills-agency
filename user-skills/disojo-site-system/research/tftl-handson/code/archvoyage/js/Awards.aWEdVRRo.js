/* https://archvoyage.ae/_nuxt/Awards.aWEdVRRo.js */
import {
  d as E,
  u as B,
  r as l,
  w as V,
  o as F,
  n as C,
  a,
  b as u,
  e,
  C as se,
  D as b,
  t as d,
  g as A,
  h as ie,
  k as K,
  _ as le,
  m as H,
  y as q,
  j as P,
  p as Q,
  l as U,
  c as ce,
  F as I,
  i as L,
  z as ae,
  f as re
} from "./entry.YPAKmh3d.js";
import {
  _ as ee
} from "./Button.DsjJ-bLs.js";
import {
  t as D
} from "./titleAnim.CszaPWUV.js";
import {
  p as ue
} from "./Contact.D-xzsxJa.js";
import {
  _ as de
} from "./ArrowDown.BETtDbQg.js";
const pe = {
    class: "development-inner"
  },
  _e = ["innerHTML"],
  fe = {
    class: "content"
  },
  me = {
    class: "image-wrapper"
  },
  he = {
    class: "info-grid container"
  },
  ve = {
    class: "info-block"
  },
  ye = {
    class: "info-title p1 medium"
  },
  ge = {
    class: "info-description p1"
  },
  $e = {
    class: "info-block"
  },
  ke = {
    class: "info-title p1 medium"
  },
  we = {
    class: "info-description p1"
  },
  Se = {
    name: "MainDevelopment"
  },
  Pe = E({
    ...Se,
    props: {
      title: {},
      titleLeft: {},
      titleRight: {},
      descriptionLeft: {},
      descriptionRight: {},
      photo: {}
    },
    setup(p) {
      const m = B("transitionEnd"),
        _ = l(!1),
        k = l();
      V(m, o => {
        o && h()
      }), F(async () => {
        await C(), m.value && h()
      });

      function h() {
        if (_.value) return;
        _.value = !0;
        const o = k.value;
        if (!o) return;
        const y = o.querySelector(".title");
        y && D(y);
        const v = o.querySelector(".image-wrapper");
        v && ue(v)
      }
      return (o, y) => {
        const v = K,
          $ = ee,
          n = le;
        return a(), u("section", {
          ref_key: "developSection",
          ref: k,
          class: "development"
        }, [e("div", pe, [e("div", {
          class: "title display3 container",
          innerHTML: o.title
        }, null, 8, _e), e("div", fe, [e("div", me, [o.photo ? (a(), se(v, {
          key: 0,
          photo: o.photo
        }, null, 8, ["photo"])) : b("", !0)]), e("div", he, [e("div", ve, [e("p", ye, d(o.titleLeft), 1), e("p", ge, d(o.descriptionLeft), 1)]), e("div", $e, [e("p", ke, d(o.titleRight), 1), e("p", we, d(o.descriptionRight), 1), A(n, {
          to: "/development",
          class: "link"
        }, {
          default: ie(() => [A($, {
            class: "info-button",
            text: "Development"
          })]),
          _: 1
        })])])])])], 512)
      }
    }
  }),
  Ue = H(Pe, [
    ["__scopeId", "data-v-e0bb8b58"]
  ]),
  te = p => (Q("data-v-e676f0c5"), p = p(), U(), p),
  Ae = {
    key: 0,
    class: "header"
  },
  Ce = {
    class: "description p1"
  },
  be = {
    class: "arrow"
  },
  xe = {
    class: "video-block"
  },
  Me = ["src"],
  Te = te(() => e("div", {
    class: "flat-image-cover cover"
  }, null, -1)),
  qe = {
    class: "video-title-wrapper"
  },
  Ie = te(() => e("span", {
    class: "play"
  }, [e("svg", {
    width: "53",
    height: "53",
    viewBox: "0 0 53 53",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M26.5 53C41.1355 53 53 41.1355 53 26.5C53 11.8645 41.1355 0 26.5 0C11.8645 0 0 11.8645 0 26.5C0 41.1355 11.8645 53 26.5 53ZM34 26.5L23 20V33L34 26.5Z",
    fill: "#F5F5F5"
  })])], -1)),
  Le = {
    class: "title-wrap"
  },
  Ee = {
    name: "MainShowreel"
  },
  Be = E({
    ...Ee,
    props: {
      title: {},
      description: {},
      isOnlyVideo: {
        type: Boolean
      },
      video: {}
    },
    setup(p) {
      const m = B("transitionEnd"),
        _ = l(!1),
        k = l(),
        h = l(!1),
        o = l();
      V(m, n => {
        n && y()
      }), F(async () => {
        await C(), m.value && y()
      });

      function y() {
        if (_.value) return;
        _.value = !0;
        const n = k.value;
        if (!n) return;
        const w = n.querySelector(".video-title");
        w && D(w)
      }

      function v() {
        o.value && (o.value.play(), h.value = !0)
      }

      function $() {
        o.value && (o.value.pause(), h.value = !1)
      }
      return (n, w) => {
        const S = de;
        return a(), u("section", {
          ref_key: "showreelSection",
          ref: k,
          class: q(["showreel", {
            container: !n.isOnlyVideo
          }])
        }, [n.isOnlyVideo ? b("", !0) : (a(), u("div", Ae, [e("p", Ce, d(n.description), 1), e("div", be, [A(S)])])), e("div", xe, [e("div", {
          class: q(["video-preview", {
            playing: P(h)
          }]),
          onClick: $
        }, [n.video ? (a(), u("video", {
          key: 0,
          ref_key: "videoEl",
          ref: o,
          class: "video",
          src: `${n.video}#t=0.1`,
          playsinline: "",
          loop: ""
        }, null, 8, Me)) : b("", !0), Te], 2), e("div", qe, [e("button", {
          class: q(["video-title h2 common-hover", {
            hide: P(h)
          }]),
          "aria-label": "play video",
          onClick: v
        }, [Ie, e("p", Le, d(n.title), 1)], 2)])])], 2)
      }
    }
  }),
  et = H(Be, [
    ["__scopeId", "data-v-e676f0c5"]
  ]),
  oe = p => (Q("data-v-ab9e7535"), p = p(), U(), p),
  Ve = oe(() => e("p", {
    class: "title h1"
  }, [re(" Our "), e("span", {
    class: "italic"
  }, " awards")], -1)),
  Fe = {
    class: "lists-wrapper"
  },
  He = ["onMouseenter"],
  De = {
    class: "name h5"
  },
  Ne = {
    class: "credits p1"
  },
  Re = {
    class: "hidden-list"
  },
  We = ["onMouseenter"],
  Oe = {
    class: "name h5"
  },
  ze = {
    class: "credits p1"
  },
  Ze = oe(() => e("div", {
    class: "flat-image-cover"
  }, null, -1)),
  je = {
    name: "MainAwards"
  },
  Xe = E({
    ...je,
    props: {
      awards: {}
    },
    setup(p) {
      const m = p,
        {
          $gsap: _,
          $ScrollTrigger: k
        } = ae(),
        h = B("transitionEnd"),
        o = l(!1),
        y = l(),
        v = l(),
        $ = l(!1),
        n = l(),
        w = l(),
        S = l(-1),
        N = l(0),
        R = l(0);
      let W, O, x, M = !0;
      const T = ce(() => {
        var c;
        if (!((c = m.awards) != null && c.length)) return {
          default: [],
          hidden: []
        };
        const s = m.awards.slice(0, 3),
          i = m.awards.slice(3, m.awards.length);
        return {
          default: s,
          hidden: i
        }
      });
      V(h, s => {
        s && z()
      }), F(async () => {
        await C(), h.value && z()
      });

      function z() {
        if (o.value) return;
        o.value = !0;
        const s = y.value;
        if (!s) return;
        const i = s.querySelector(".title");
        i && D(i), w.value && w.value.querySelectorAll(".item").forEach(f => {
          const t = f.querySelector(".name"),
            r = f.querySelector(".credits");
          _.fromTo([t, r], {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            yPercent: 100
          }, {
            scrollTrigger: {
              trigger: f,
              start: "top bottom"
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            yPercent: 0,
            clearProps: "all",
            duration: .6,
            stagger: .2,
            ease: "custom"
          })
        })
      }

      function Z(s) {
        window.innerWidth < 1025 || (clearTimeout(W), clearTimeout(O), G(s), M && (M = !1, document.addEventListener("mousemove", X), x = requestAnimationFrame(Y)))
      }

      function j() {
        window.innerWidth < 1025 || (O = setTimeout(() => {
          G(-1)
        }, 100), W = setTimeout(() => {
          document.removeEventListener("mousemove", X), window.cancelAnimationFrame(x), M = !0
        }, 700))
      }

      function X(s) {
        N.value = s.clientX, R.value = s.clientY
      }

      function Y() {
        !n.value || window.innerWidth < 1025 || (n.value.style.transform = `translate(${N.value}px, ${R.value}px)`, x = requestAnimationFrame(Y))
      }
      async function G(s) {
        if (!n.value || s === S.value) return;
        const i = .6,
          c = "custom",
          f = n.value.querySelectorAll(".cursor-photo");
        if (f != null && f.length) {
          const t = f[S.value],
            r = t == null ? void 0 : t.querySelector(".wrapper");
          S.value = s, await C();
          const g = f[S.value],
            J = g == null ? void 0 : g.querySelector(".wrapper");
          t && _.fromTo(t, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 130%, 0% 100%)"
          }, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: i,
            clearProps: "all",
            ease: c
          }), r && _.to(r, {
            yPercent: -50,
            rotate: -5,
            opacity: .5,
            scale: 1.2,
            duration: i,
            clearProps: "all",
            ease: c
          }), g && _.to(g, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: i,
            ease: c
          }), J && _.fromTo(J, {
            yPercent: 30,
            scale: 1.2
          }, {
            yPercent: 0,
            scale: 1,
            duration: i,
            clearProps: "all",
            ease: c
          })
        }
      }

      function ne() {
        var c;
        if (!v.value) return;
        const s = v.value,
          i = (c = s.querySelector(".hidden-list")) == null ? void 0 : c.getBoundingClientRect().height;
        s.style.maxHeight = $.value ? "0px" : `${i}px`, $.value = !$.value, setTimeout(() => {
          k.refresh()
        }, 400)
      }
      return (s, i) => {
        const c = ee,
          f = K;
        return a(), u("section", {
          ref_key: "awardsSection",
          ref: y,
          class: "awards container"
        }, [Ve, e("div", Fe, [e("ul", {
          ref_key: "defaultAwardslist",
          ref: w,
          class: "default-list"
        }, [(a(!0), u(I, null, L(P(T).default, (t, r) => (a(), u("li", {
          key: r,
          class: "item",
          onMouseenter: g => Z(r),
          onMouseleave: i[0] || (i[0] = g => j())
        }, [e("p", De, d(t == null ? void 0 : t.name), 1), e("p", Ne, d(t == null ? void 0 : t.year) + " — " + d(t == null ? void 0 : t.competition), 1)], 40, He))), 128))], 512), e("div", {
          ref_key: "hiddenListWrapper",
          ref: v,
          class: "hidden-list-wrapper"
        }, [e("ul", Re, [(a(!0), u(I, null, L(P(T).hidden, (t, r) => (a(), u("li", {
          key: r,
          class: "item",
          onMouseenter: g => Z(r + 3),
          onMouseleave: i[1] || (i[1] = g => j())
        }, [e("p", Oe, d(t == null ? void 0 : t.name), 1), e("p", ze, d(t == null ? void 0 : t.year) + " — " + d(t == null ? void 0 : t.competition), 1)], 40, We))), 128))])], 512)]), P(T).hidden.length ? (a(), u("button", {
          key: 0,
          "aria-label": "show more",
          onClick: ne
        }, [A(c, {
          text: P($) ? "Show less" : "Show full list"
        }, null, 8, ["text"])])) : b("", !0), e("div", {
          ref_key: "photosCursor",
          ref: n,
          class: "photos-cursor"
        }, [(a(!0), u(I, null, L(s.awards, (t, r) => (a(), u("div", {
          key: r,
          class: "cursor-photo"
        }, [A(f, {
          photo: t == null ? void 0 : t.photo,
          "default-size": "small"
        }, null, 8, ["photo"]), Ze]))), 128))], 512)], 512)
      }
    }
  }),
  tt = H(Xe, [
    ["__scopeId", "data-v-ab9e7535"]
  ]);
export {
  Ue as _, et as a, tt as b
};