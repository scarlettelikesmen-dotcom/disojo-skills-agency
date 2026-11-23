/* https://coevalstudio.com/_nuxt/about.05485ba7.js */
import {
  H as Ee,
  T as qe
} from "./components.f929feb2.js";
import {
  _ as Le,
  a as Pe,
  b as ze
} from "./Contact.ad842028.js";
import {
  _ as F,
  o as r,
  c,
  a as t,
  l as k,
  t as d,
  F as O,
  z as W,
  A as G,
  g as x,
  S as rt,
  f as P,
  B as Ne,
  C as _t,
  D as Be,
  r as B,
  u as H,
  E as U,
  G as j,
  b as gt,
  H as N,
  I as Se,
  J as ft,
  K as Q,
  L as ct,
  M as vt,
  h as He,
  N as Ve,
  O as je,
  P as J,
  Q as Fe,
  R as dt,
  T as Re,
  U as Ye,
  i as Ue,
  k as We,
  V as it,
  w as ut,
  W as Ge,
  e as Je,
  d as pt,
  X as Qe,
  j as ke,
  Y as ht,
  Z as Xe,
  $ as Ke,
  a0 as Te
} from "./entry.7e3c7585.js";
import {
  S as Ie,
  E as Ce
} from "./effect-creative.2b3e219c.js";
import {
  _ as Ze
} from "./top-right-arrow.a0578799.js";
import {
  _ as Ae
} from "./top-right-arrow.4a567dcc.js";
import {
  _ as De
} from "./Footer.15b17ac6.js";
import "./client-only.eecabb16.js";
import "./Text.19fa6ef9.js";
const mt = n => (W("data-v-24c997a0"), n = n(), G(), n),
  ts = {
    class: "intro section"
  },
  es = {
    class: "intro__3d"
  },
  ss = {
    class: "intro__top difference"
  },
  ns = mt(() => t("div", {
    class: "intro__top-label text-p3"
  }, "Vol. 1", -1)),
  as = {
    class: "intro__top-inner"
  },
  os = {
    class: "intro__heading intro__heading_1 text-h1"
  },
  ls = {
    class: "intro__heading intro__heading_2 text-h1"
  },
  is = {
    class: "intro__bottom difference"
  },
  rs = mt(() => t("div", {
    class: "intro__bottom-label text-s1"
  }, "Scroll to discover", -1)),
  cs = {
    class: "intro__heading intro__heading_3 text-h1"
  },
  _s = {
    class: "intro__heading-break"
  },
  ds = {
    class: "intro__heading intro__heading_4 text-h1"
  },
  us = {
    class: "intro__heading--mobile"
  },
  ps = {
    class: "intro__last section difference"
  },
  hs = {
    class: "intro__heading intro__heading_5 text-h1"
  },
  vs = {
    class: "intro__heading--desktop"
  },
  gs = mt(() => t("div", {
    class: "intro__last-label text-p3"
  }, "Vol. 2", -1)),
  fs = {
    name: "AboutIntro"
  },
  ms = Object.assign(fs, {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    setup(n) {
      return (i, b) => {
        const g = Le;
        return r(), c(O, null, [t("div", ts, [t("div", es, [k(g)]), t("div", ss, [ns, t("div", as, [t("div", os, [t("span", null, d(n.titles[0]), 1), t("span", null, d(n.titles[1]), 1)]), t("div", ls, d(n.titles[2]), 1)])]), t("div", is, [rs, t("div", cs, [t("span", null, d(n.titles[3]), 1), t("span", null, d(n.titles[4]), 1), t("span", _s, d(n.titles[4]), 1)]), t("div", ds, [t("span", null, d(n.titles[5]), 1), t("span", us, d(n.titles[6]), 1)])])]), t("div", ps, [t("div", hs, [t("span", vs, d(n.titles[6]), 1), t("span", null, d(n.titles[7]), 1)]), gs])], 64)
      }
    }
  }),
  xs = F(ms, [
    ["__scopeId", "data-v-24c997a0"]
  ]);
const xt = n => (W("data-v-e08a731d"), n = n(), G(), n),
  ys = {
    class: "about-team"
  },
  bs = {
    class: "about-team__inner section"
  },
  ws = {
    class: "about-team__row"
  },
  $s = {
    class: "about-team__slider team-slider"
  },
  ks = {
    class: "swiper slider-team"
  },
  Ts = {
    class: "swiper-wrapper"
  },
  Ps = {
    class: "team-slider__img-wrapper img-outer"
  },
  Ss = {
    class: "img-inner"
  },
  Is = ["src"],
  Cs = {
    class: "team-slider__control"
  },
  As = {
    class: "team-slider__svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  Ms = xt(() => t("circle", {
    class: "circle-inner",
    opacity: "0.1",
    cx: "8",
    cy: "8",
    r: "7.4",
    stroke: "#1E1E1E",
    "stroke-width": "1.2"
  }, null, -1)),
  Os = {
    class: "team-slider__counter text-t3"
  },
  Es = {
    class: "team-slider__actions"
  },
  qs = {
    class: "about-team__info team-info"
  },
  Ls = ["innerHTML"],
  zs = {
    class: "team-info__expertise"
  },
  Ns = xt(() => t("p", {
    class: "team-info__expertise-label text-t4"
  }, "Expertise", -1)),
  Bs = {
    class: "team-info__expertise-list"
  },
  Hs = ["innerHTML"],
  Vs = xt(() => t("div", {
    class: "diagonal-line"
  }, null, -1)),
  js = {
    name: "AboutTeam"
  },
  Fs = Object.assign(js, {
    props: {
      services: {
        type: Array,
        default: () => []
      },
      info: {
        type: Object,
        default: () => ({})
      }
    },
    setup(n) {
      x.registerPlugin(rt);
      const i = P(null),
        b = P(1),
        g = P(1);
      let h = performance.now();
      const f = P(null);
      Ne();
      const y = P(null);
      gt().public.baseUrl;

      function $() {
        const e = document.querySelector(".slider-team");
        e && (i.value = new Ie(e, {
          effect: "creative",
          allowTouchMove: !1,
          modules: [Ce],
          speed: 1e3,
          parallax: !1,
          loop: !0,
          controller: {
            inverse: !0
          },
          creativeEffect: {
            prev: {
              translate: ["0%", "0%", 0]
            },
            next: {
              translate: ["0%", "0%", 0]
            }
          }
        }), i.value.on("slideNextTransitionStart", s), i.value.on("slidePrevTransitionStart", S), i.value.on("slideChange", V))
      }

      function V(e) {
        b.value = e.realIndex + 1
      }

      function s() {
        h = performance.now();
        const e = document.querySelector(".team-slider .swiper-slide-active");
        if (!e) return;
        const l = e == null ? void 0 : e.previousElementSibling,
          a = e.querySelector(".img-parallax"),
          p = l.querySelector(".img-parallax");
        e.style.zIndex = "90", l.style.zIndex = "50", x.fromTo(p, {
          x: "0%"
        }, {
          x: "-10%",
          duration: .8,
          delay: 0,
          ease: N
        }), x.fromTo(a, {
          x: "10%",
          scale: 1.1,
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
        }, {
          x: "0%",
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .8,
          ease: N
        })
      }

      function S() {
        h = performance.now();
        const e = document.querySelector(".team-slider .swiper-slide-active");
        if (!e) return;
        const l = e == null ? void 0 : e.nextElementSibling,
          a = e.querySelector(".img-parallax"),
          p = l.querySelector(".img-parallax");
        e.style.zIndex = "90", l.style.zIndex = "50", x.fromTo(p, {
          x: "0%"
        }, {
          x: "10%",
          duration: .8,
          delay: 0,
          ease: N
        }), x.fromTo(a, {
          x: "-10%",
          scale: 1.1,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        }, {
          x: "0%",
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .8,
          ease: N
        })
      }

      function _() {
        g.value = -1, i.value.slidePrev()
      }

      function u() {
        g.value = 1, i.value.slideNext()
      }

      function I(e) {
        if (!y.value) return;
        const l = +(e - h) / 1e3;
        l >= 7 ? g.value === 1 ? u() : _() : y.value.style["stroke-dashoffset"] = -(l * 7 + 46) + "px", f.value = requestAnimationFrame(I)
      }
      return _t(() => {
        document.querySelector(".slider-team") && ($(), h = performance.now(), f.value = requestAnimationFrame(I))
      }), Be(() => {
        var e, l;
        (e = i == null ? void 0 : i.value) != null && e.destroy && ((l = i == null ? void 0 : i.value) == null || l.destroy()), cancelAnimationFrame(f.value)
      }), (e, l) => {
        var q, m, v, A;
        const a = Se,
          p = Pe,
          w = ft;
        return r(), c("div", ys, [t("div", bs, [t("div", ws, [t("div", $s, [t("div", ks, [t("div", Ts, [(r(!0), c(O, null, B((q = n.info) == null ? void 0 : q.gallery, C => (r(), c("div", {
          class: "swiper-slide",
          key: C.id
        }, [t("div", Ps, [t("div", Ss, [t("img", {
          src: C.image,
          alt: "team 1",
          class: "team-slider__img img-parallax"
        }, null, 8, Is)])])]))), 128))])]), t("div", Cs, [(r(), c("svg", As, [Ms, t("circle", {
          ref_key: "outerCircle",
          ref: y,
          class: "circle-outer",
          opacity: "1",
          cx: "8",
          cy: "8",
          r: "7.4",
          stroke: "#1E1E1E",
          "stroke-width": "1.2"
        }, null, 512)])), t("div", Os, d(H(b)) + " / " + d((m = n.info) == null ? void 0 : m.gallery.length), 1), t("div", Es, [t("button", {
          onClick: _,
          class: "btn-prev"
        }, [k(a)]), t("button", {
          onClick: u,
          class: "btn-next"
        }, [k(p)])])])]), t("div", qs, [(r(), c("div", {
          class: "team-info__text capitalized capitalized-split difference text-p3",
          key: e.$route.fullPath,
          innerHTML: (v = n.info) == null ? void 0 : v.description
        }, null, 8, Ls)), t("div", zs, [Ns, t("ul", Bs, [(r(!0), c(O, null, B(n.services, C => {
          var R;
          return r(), c("li", {
            class: "team-info__expertise-item",
            key: C == null ? void 0 : C.id
          }, [k(w, {
            to: `/service/${(R=C==null?void 0:C.attributes)==null?void 0:R.Slug}`,
            class: "link team-info__expertise-link text-s1"
          }, {
            default: U(() => {
              var Y;
              return [j(d((Y = C == null ? void 0 : C.attributes) == null ? void 0 : Y.Name), 1)]
            }),
            _: 2
          }, 1032, ["to"])])
        }), 128))])])])]), t("div", {
          "data-rotate-title": "",
          class: "about-team__text text-h3",
          innerHTML: (A = n.info) == null ? void 0 : A.title
        }, null, 8, Hs)]), Vs])
      }
    }
  }),
  Rs = F(Fs, [
    ["__scopeId", "data-v-e08a731d"]
  ]);
const X = n => (W("data-v-cf95d791"), n = n(), G(), n),
  Ys = {
    class: "about-talk section"
  },
  Us = X(() => t("p", {
    "data-anim-text": "",
    class: "about-talk__sign text-p3"
  }, "Vol. 3", -1)),
  Ws = {
    class: "about-talk__inner"
  },
  Gs = {
    class: "about-talk__wrapper"
  },
  Js = X(() => t("p", {
    "data-anim-text": "",
    class: "about-talk__mark text-p3"
  }, "Our mission", -1)),
  Qs = ["innerHTML"],
  Xs = X(() => t("span", {
    class: "spaced"
  }, "Let's", -1)),
  Ks = X(() => t("span", {
    class: "spaced"
  }, "talk ", -1)),
  Zs = X(() => t("span", null, "↘", -1)),
  Ds = {
    name: "AboutTalk"
  },
  tn = Object.assign(Ds, {
    props: {
      description: {
        type: String,
        required: !0
      }
    },
    setup(n) {
      return (i, b) => {
        const g = ft;
        return r(), c("div", Ys, [Us, t("div", Ws, [t("div", Gs, [Js, t("div", {
          "data-anim-text": "",
          class: "about-talk__text text-p3",
          innerHTML: n.description
        }, null, 8, Qs)]), k(g, {
          to: "/contact",
          class: "about-talk__heading rotatable text-h1"
        }, {
          default: U(() => [Xs, j(), Ks, Zs]),
          _: 1
        })])])
      }
    }
  }),
  en = F(tn, [
    ["__scopeId", "data-v-cf95d791"]
  ]);
const sn = {
    class: "video"
  },
  nn = {
    class: "img-outer video__bg"
  },
  an = {
    class: "img-inner"
  },
  on = ["src", "alt"],
  ln = {
    ref: "marquee",
    class: "video__marquee text-a1"
  },
  rn = {
    class: "video__img-wrapper img-outer"
  },
  cn = {
    class: "img-inner"
  },
  _n = ["src", "alt"],
  dn = {
    "data-anim-text": "",
    class: "video__caption text-s1"
  },
  un = {
    name: "AboutVideo"
  },
  pn = Object.assign(un, {
    props: {
      data: {
        type: Object,
        required: !0
      }
    },
    setup(n) {
      return (i, b) => {
        var g, h, f, y, T, $, V, s, S, _;
        return r(), c("div", sn, [t("div", nn, [t("div", an, [t("img", {
          src: (h = (g = n.data) == null ? void 0 : g.image1) == null ? void 0 : h.url,
          alt: (y = (f = n.data) == null ? void 0 : f.image1) == null ? void 0 : y.alt,
          class: "img-parallax video__bg-img"
        }, null, 8, on)])]), t("div", ln, [t("span", null, d((T = n.data) == null ? void 0 : T.text), 1)], 512), t("div", rn, [t("div", cn, [t("img", {
          src: (V = ($ = n.data) == null ? void 0 : $.image2) == null ? void 0 : V.url,
          alt: (S = (s = n.data) == null ? void 0 : s.image2) == null ? void 0 : S.alt,
          class: "video__img img-parallax"
        }, null, 8, _n)])]), t("p", dn, d((_ = n.data) == null ? void 0 : _.text), 1)])
      }
    }
  }),
  hn = F(pn, [
    ["__scopeId", "data-v-65599e47"]
  ]);
const Me = n => (W("data-v-ba5bfc11"), n = n(), G(), n),
  vn = {
    class: "story"
  },
  gn = Me(() => t("div", {
    class: "story__header"
  }, [t("p", {
    "data-anim-text": "",
    class: "story__volume text-t3"
  }, "Vol. 5"), t("div", {
    "data-anim-text": "",
    class: "story__label text-t3"
  }, "Our Story")], -1)),
  fn = {
    class: "story__main"
  },
  mn = ["innerHTML"],
  xn = {
    class: "story__img-wrapper img-outer"
  },
  yn = {
    class: "img-inner"
  },
  bn = ["src", "alt"],
  wn = {
    class: "story__footer"
  },
  $n = Me(() => t("div", {
    class: "story__copyright text-t3"
  }, [t("span", {
    class: "text-medium"
  }, "© Coeval"), t("br"), j("’2012 – 2023 ")], -1)),
  kn = ["innerHTML"],
  Tn = {
    name: "AboutStory"
  },
  Pn = Object.assign(Tn, {
    props: {
      data: {
        type: Object,
        required: !0
      }
    },
    setup(n) {
      return (i, b) => {
        var g, h, f, y, T, $;
        return r(), c("div", vn, [gn, t("div", fn, [t("div", {
          "data-rotate-title": "",
          class: "story__title text-h2",
          innerHTML: (g = n.data) == null ? void 0 : g.title
        }, null, 8, mn), t("div", xn, [t("div", yn, [t("img", {
          class: "story__img img-parallax",
          src: (f = (h = n.data) == null ? void 0 : h.image) == null ? void 0 : f.url,
          alt: (T = (y = n.data) == null ? void 0 : y.image) == null ? void 0 : T.alt
        }, null, 8, bn)])])]), t("div", wn, [$n, t("div", {
          class: "story__paragraph text-t1",
          innerHTML: ($ = n.data) == null ? void 0 : $.description
        }, null, 8, kn)])])
      }
    }
  }),
  Sn = F(Pn, [
    ["__scopeId", "data-v-ba5bfc11"]
  ]);
const Oe = n => (W("data-v-2038cef3"), n = n(), G(), n),
  In = {
    class: "about-slider"
  },
  Cn = Oe(() => t("div", {
    class: "about-slider__heading"
  }, [t("p", {
    class: "text-t3 about-slider__vol"
  }, "Vol. 6")], -1)),
  An = {
    class: "about-slider__main"
  },
  Mn = {
    class: "swiper-wrapper"
  },
  On = {
    class: "about-slider__background-wrapper img-outer"
  },
  En = {
    class: "img-inner"
  },
  qn = ["src", "alt"],
  Ln = {
    class: "about-slider__slider slider"
  },
  zn = {
    class: "slider-inner"
  },
  Nn = {
    class: "slider-left"
  },
  Bn = {
    "data-rotate-title": "",
    class: "slider-left__num text-a1"
  },
  Hn = {
    class: "slider-left__count text-t3"
  },
  Vn = {
    class: "slider-left__count-hidden"
  },
  jn = {
    class: "slider-left__count-current"
  },
  Fn = {
    class: "slider-right"
  },
  Rn = Oe(() => t("div", {
    class: "slider-right__label text-t3"
  }, "Process", -1)),
  Yn = {
    class: "slider-right__actions"
  },
  Un = {
    name: "AboutSlider"
  },
  Wn = Object.assign(Un, {
    props: {
      data: {
        type: Object,
        required: !0
      }
    },
    setup(n) {
      x.registerPlugin(rt);
      const i = P(null),
        b = P(1),
        g = P(1);

      function h() {
        i.value = new Ie(".about-slider__main", {
          effect: "creative",
          allowTouchMove: !1,
          modules: [Ce],
          speed: 1e3,
          loop: !0,
          parallax: !1,
          controller: {
            inverse: !0
          },
          creativeEffect: {
            prev: {
              translate: ["0%", "0%", 0]
            },
            next: {
              translate: ["0%", "0%", 0]
            }
          }
        }), i.value.on("slideNextTransitionStart", y), i.value.on("slidePrevTransitionStart", T), i.value.on("slideChange", f)
      }

      function f(_) {
        b.value = _.realIndex + 1
      }

      function y() {
        const _ = document.querySelector(".about-slider__main .swiper-slide-active"),
          u = _ == null ? void 0 : _.previousElementSibling;
        _.querySelector(".img-parallax"), u.querySelector(".img-parallax"), _.style.zIndex = "90", u.style.zIndex = "50"
      }

      function T() {
        const _ = document.querySelector(".about-slider__main .swiper-slide-active"),
          u = _ == null ? void 0 : _.nextElementSibling;
        _.querySelector(".img-parallax"), u.querySelector(".img-parallax"), _.style.zIndex = "90", u.style.zIndex = "50"
      }

      function $() {
        const _ = new Promise(l => {
            x.to(".slider-left__num span", {
              yPercent: -100,
              duration: .4,
              ease: N,
              onComplete: l
            })
          }),
          u = new Promise(l => {
            x.to(".slider-right__description.active .split-line__inner", {
              yPercent: -100,
              stagger: .05,
              ease: N,
              onComplete: () => {
                x.to(".slider-right__description .split-line__inner", {
                  yPercent: -100,
                  duration: 0
                }), l()
              }
            })
          }),
          I = new Promise(l => {
            x.to(".slider-left__count-current > span", {
              yPercent: -100,
              duration: .4,
              ease: N,
              onComplete: l
            })
          }),
          e = new Promise(l => {
            const a = x.utils.toArray(".slider-left__title.active .title-line");
            a.forEach((p, w) => {
              const q = p.querySelectorAll(".title-word");
              x.to(q, {
                yPercent: -125,
                duration: .4,
                delay: w * .1,
                ease: N,
                onComplete: () => {
                  w + 1 === a.length && (x.set(".slider-left__title .title-word", {
                    yPercent: -125
                  }), l())
                }
              })
            })
          });
        Promise.all([_, u, I, e]).then(async () => {
          g.value = i.value.realIndex + 1, x.fromTo(".slider-left__num span", {
            yPercent: 100
          }, {
            yPercent: 0,
            duration: .4,
            ease: N
          }), await Q(), x.set(".slider-right__description.active .split-line", {
            opacity: 1
          }), x.fromTo(".slider-right__description.active .split-line__inner", {
            yPercent: 100
          }, {
            yPercent: 0,
            stagger: .05,
            duration: .4,
            ease: N
          }), x.fromTo(".slider-left__count-current > span", {
            yPercent: 100
          }, {
            yPercent: 0,
            duration: .4,
            ease: N
          }), x.utils.toArray(".slider-left__title.active .title-line").forEach((a, p) => {
            const w = a.querySelectorAll(".title-word");
            x.fromTo(w, {
              yPercent: 120
            }, {
              delay: p * .1,
              yPercent: 0,
              duration: .4,
              ease: N
            })
          })
        })
      }

      function V() {
        i.value.animating || (i.value.slidePrev(), $())
      }

      function s() {
        i.value.animating || (i.value.slideNext(), $())
      }

      function S() {
        new rt(".slider-left__title", {
          type: "lines",
          linesClass: "title-line"
        }).lines.forEach(u => {
          new rt(u, {
            type: "lines",
            linesClass: "title-word"
          })
        })
      }
      return _t(async () => {
        S(), await Q(), h()
      }), (_, u) => {
        var l, a, p, w, q, m;
        const I = Se,
          e = Pe;
        return r(), c("div", In, [Cn, t("div", An, [t("div", Mn, [(r(!0), c(O, null, B((l = n.data) == null ? void 0 : l.slides, v => {
          var A, C, R, Y;
          return r(), c("div", {
            class: "swiper-slide",
            key: v.id
          }, [t("div", On, [t("div", En, [t("img", {
            class: "about-slider__background img-parallax",
            src: (C = (A = n.data) == null ? void 0 : A.photo) == null ? void 0 : C.url,
            alt: (Y = (R = n.data) == null ? void 0 : R.photo) == null ? void 0 : Y.alt
          }, null, 8, qn)])])])
        }), 128))]), t("div", Ln, [t("div", zn, [t("div", Nn, [t("div", Bn, [t("span", null, d(H(g)), 1)]), t("div", Hn, [t("span", Vn, d((a = n.data) == null ? void 0 : a.slides.length), 1), t("span", jn, [t("span", null, d(H(g)), 1)]), j("  / " + d((p = n.data) == null ? void 0 : p.slides.length), 1)])]), t("div", Fn, [Rn, (r(!0), c(O, null, B((w = n.data) == null ? void 0 : w.slides, (v, A) => (r(), c("div", {
          class: ct(["slider-left__title --tablet text-h3", {
            active: H(g) === A + 1
          }]),
          key: v.id
        }, d(v.title), 3))), 128)), (r(!0), c(O, null, B((q = n.data) == null ? void 0 : q.slides, (v, A) => (r(), c("div", {
          "data-anim-text": "",
          class: ct(["slider-right__description text-p3", {
            active: A + 1 === H(g)
          }]),
          key: v.id
        }, d(v.description), 3))), 128)), t("div", Yn, [t("button", {
          class: "btn-prev",
          onClick: V
        }, [k(I)]), t("button", {
          class: "btn-next",
          onClick: s
        }, [k(e)])])])]), (r(!0), c(O, null, B((m = n.data) == null ? void 0 : m.slides, (v, A) => (r(), c("div", {
          class: ct(["slider-left__title --desktop text-h3", {
            active: H(g) === A + 1
          }]),
          key: v.id
        }, d(v.title), 3))), 128))])])])
      }
    }
  }),
  Gn = F(Wn, [
    ["__scopeId", "data-v-2038cef3"]
  ]);
const K = n => (W("data-v-2d32968d"), n = n(), G(), n),
  Jn = {
    class: "table-wrap --desktop"
  },
  Qn = {
    class: "table-label"
  },
  Xn = ["src", "alt"],
  Kn = {
    class: "table"
  },
  Zn = K(() => t("thead", null, [t("tr", {
    class: "table__heading"
  }, [t("th", {
    class: "text-t4 table__heading-cell table__heading-name"
  }, "Name"), t("th", {
    class: "text-t4 table__heading-cell table__heading-project"
  }, " Project "), t("th", {
    class: "text-t4 table__heading-cell table__heading-year"
  }, "Year")])], -1)),
  Dn = ["onClick"],
  ta = {
    class: "table__cell"
  },
  ea = ["data-rotate-title"],
  sa = {
    class: "table__cell"
  },
  na = {
    class: "text-t3 table__project"
  },
  aa = ["onClick"],
  oa = ["src", "alt"],
  la = {
    class: "table__icon-wrap"
  },
  ia = ["src"],
  ra = {
    class: "table__cell"
  },
  ca = {
    class: "table__cell-year text-t3"
  },
  _a = K(() => t("div", {
    class: "table__cell-arrow-wrap"
  }, [t("img", {
    class: "table__cell-arrow",
    src: Ze,
    alt: "arrow",
    role: "presentation"
  })], -1)),
  da = {
    class: "table-list --tablet"
  },
  ua = ["onClick"],
  pa = {
    key: 0,
    class: "item__top"
  },
  ha = {
    class: "text-h6 item__title"
  },
  va = K(() => t("img", {
    class: "item__icon",
    src: Ae,
    role: "presentation"
  }, null, -1)),
  ga = {
    class: "text-h6 item__title"
  },
  fa = K(() => t("img", {
    class: "item__icon",
    src: Ae,
    role: "presentation"
  }, null, -1)),
  ma = {
    class: "item__bottom-caption"
  },
  xa = K(() => t("span", {
    class: "item__splitter"
  }, "/", -1)),
  ya = {
    name: "CommonTable"
  },
  ba = Object.assign(ya, {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    setup(n) {
      const i = n;
      x.registerPlugin(vt);
      const b = P(null),
        g = P(null),
        h = P(12),
        f = P(12),
        T = gt().public.baseUrl,
        $ = He();

      function V(_) {
        g.value.href = T + _, g.value.click()
      }

      function s(_) {
        var u, I, e, l, a;
        (u = _ == null ? void 0 : _.pdf) != null && u.data ? V((l = (e = (I = _ == null ? void 0 : _.pdf) == null ? void 0 : I.data) == null ? void 0 : e.attributes) == null ? void 0 : l.url) : $.push({
          path: `/project/${(a=_==null?void 0:_.projects[0])==null?void 0:a.slug}`
        })
      }
      const S = Ve(() => i.data.slice(0, h.value));
      return je(() => S.value, async () => {
        await Q(), await Q(), vt.refresh()
      }), (_, u) => {
        const I = ft;
        return r(), c(O, null, [t("div", Jn, [t("a", {
          ref_key: "hiddenLink",
          ref: g,
          href: "",
          target: "_blank",
          class: "hidden-link"
        }, null, 512), t("div", Qn, [(r(!0), c(O, null, B(n.data, e => (r(), c("img", {
          key: e.id,
          src: e.logo.url,
          alt: e.logo.alt,
          class: "table-label__img",
          ref_for: !0,
          ref_key: "logo",
          ref: b,
          role: "presentation"
        }, null, 8, Xn))), 128))]), t("table", Kn, [Zn, t("tbody", null, [(r(!0), c(O, null, B(H(S), (e, l) => {
          var a, p, w, q;
          return r(), c("tr", {
            class: ct(["table__row", {
              "external-link": !((a = e == null ? void 0 : e.projects) != null && a.length)
            }]),
            onClick: m => s(e),
            key: e.id
          }, [t("td", ta, [t("div", {
            "data-rotate-title": JSON.stringify({
              scrub: !1
            }),
            class: "text-h6 table__cell-name"
          }, d(e.title), 9, ea)]), t("td", sa, [t("div", na, [e.projects.length ? (r(), c("div", {
            key: 0,
            class: "table__project-icons",
            onClick: u[0] || (u[0] = J(() => {}, ["stop", "prevent"]))
          }, [(r(!0), c(O, null, B(e.projects, (m, v) => (r(), c("div", {
            class: "table__icon-wrap hoverable",
            onClick: A => _.$router.push({
              path: `/project/${m==null?void 0:m.slug}`
            }),
            key: m.id
          }, [t("img", {
            class: "table-icon",
            src: m == null ? void 0 : m.url,
            alt: m == null ? void 0 : m.alt,
            style: Fe(`z-index: ${v};`)
          }, null, 12, oa)], 8, aa))), 128))])) : (r(), c("div", {
            key: 1,
            class: "table__project-icons",
            onClick: u[1] || (u[1] = J(() => {}, ["stop", "prevent"]))
          }, [t("div", la, [t("img", {
            class: "table-icon",
            src: e == null ? void 0 : e.photo
          }, null, 8, ia)])])), t("div", {
            class: "table__cell-project",
            onClick: u[2] || (u[2] = J(() => {}, ["stop", "prevent"]))
          }, [e != null && e.projects.length ? (r(!0), c(O, {
            key: 1
          }, B(e.projects, (m, v) => (r(), dt(I, {
            to: `/project/${m==null?void 0:m.slug}`,
            key: m.id
          }, {
            default: U(() => [j(d(m.caption) + " " + d(v + 1 === e.projects.length ? "" : ", "), 1)]),
            _: 2
          }, 1032, ["to"]))), 128)) : (r(), c(O, {
            key: 0
          }, [j(d(e.name), 1)], 64))])])]), t("td", ra, [t("div", ca, [t("span", null, "’" + d((p = e == null ? void 0 : e.projects) != null && p.length ? (q = (w = e == null ? void 0 : e.projects[0]) == null ? void 0 : w.date) == null ? void 0 : q.getFullYear() : e == null ? void 0 : e.year), 1), _a])])], 10, Dn)
        }), 128))])]), n.data.length > H(S).length ? (r(), c("button", {
          key: 0,
          onClick: u[3] || (u[3] = e => h.value += H(f)),
          class: "table-wrap__button text-s1"
        }, " load more ")) : Re("", !0)]), t("ul", da, [(r(!0), c(O, null, B(n.data, e => {
          var l, a, p, w, q, m;
          return r(), c("li", {
            onClick: v => s(e),
            class: "table-list__item item",
            key: e.id
          }, [(l = e == null ? void 0 : e.projects) != null && l.length ? (r(), dt(I, {
            key: 1,
            onClick: u[4] || (u[4] = J(() => {}, ["stop", "prevent"])),
            to: `/project/${(a=e==null?void 0:e.projects[0])==null?void 0:a.slug}`,
            class: "item__top"
          }, {
            default: U(() => {
              var v;
              return [t("h3", ga, d(e.title) + " " + d((v = e == null ? void 0 : e.projects[0]) == null ? void 0 : v.slug), 1), fa]
            }),
            _: 2
          }, 1032, ["to"])) : (r(), c("div", pa, [t("h3", ha, d(e.title), 1), va])), t("div", {
            class: "item__bottom text-t3",
            onClick: u[5] || (u[5] = J(() => {}, ["stop", "prevent"]))
          }, [t("div", ma, [(p = e == null ? void 0 : e.projects) != null && p.length ? (r(!0), c(O, {
            key: 1
          }, B(e.projects, (v, A) => (r(), dt(I, {
            to: `/project/${v==null?void 0:v.slug}`,
            key: v.id
          }, {
            default: U(() => [j(d(v.caption) + " " + d(A + 1 === e.projects.length ? "" : ", "), 1)]),
            _: 2
          }, 1032, ["to"]))), 128)) : (r(), c(O, {
            key: 0
          }, [j(d(e == null ? void 0 : e.name), 1)], 64))]), xa, j(" ’" + d((w = e == null ? void 0 : e.projects) != null && w.length ? (m = (q = e == null ? void 0 : e.projects[0]) == null ? void 0 : q.date) == null ? void 0 : m.getFullYear() : e == null ? void 0 : e.year), 1)])], 8, ua)
        }), 128))])], 64)
      }
    }
  }),
  wa = F(ba, [
    ["__scopeId", "data-v-2d32968d"]
  ]);
const $a = {
    class: "awards section"
  },
  ka = Ye('<div class="awards__label text-t3" data-v-2650e646>Vol. 7</div><div data-rotate-title class="awards__title text-h1" data-v-2650e646><p data-v-2650e646><span class="awards__title-word awards__title-word_1" data-v-2650e646>Awards</span><span class="awards__title-ampersand" data-v-2650e646>&amp;</span></p><p class="awards__title-word awards__title-word_2" data-v-2650e646>Recognitions</p><p class="awards__title-word awards__title-word_mobile" data-v-2650e646>Recognitions</p></div>', 2),
  Ta = {
    class: "awards__table"
  },
  Pa = {
    name: "AboutAwards"
  },
  Sa = Object.assign(Pa, {
    props: {
      data: Array,
      default: () => []
    },
    setup(n) {
      return (i, b) => {
        const g = wa;
        return r(), c("div", $a, [ka, t("div", Ta, [k(g, {
          data: n.data
        }, null, 8, ["data"])])])
      }
    }
  }),
  Ia = F(Sa, [
    ["__scopeId", "data-v-2650e646"]
  ]);
const Ca = ["src"],
  Aa = {
    class: "downtime__marquee marquee text-a1"
  },
  Ma = ["innerHTML"],
  Oa = ["innerHTML"],
  Ea = {
    name: "AboutDowntime"
  },
  qa = Object.assign(Ea, {
    props: {
      caption: String,
      images: Array
    },
    setup(n) {
      const i = P(null),
        b = P(null),
        g = P(null),
        h = P(null),
        f = P({
          x: 0,
          y: 0
        }),
        y = P({
          x: 0,
          y: 0
        }),
        T = P({
          x: 0,
          y: 0
        }),
        $ = {
          lerp: (l, a, p) => (1 - p) * l + p * a,
          distance: (l, a, p, w) => Math.hypot(p - l, w - a)
        };
      class V {
        constructor(a) {
          this.DOM = {
            el: a
          }, this.defaultStyle = {
            x: 0,
            y: 0,
            opacity: 0
          }, this.getRect(), this.initEvents()
        }
        initEvents() {
          window.addEventListener("resize", () => this.resize())
        }
        resize() {
          it.set(this.DOM.el, this.defaultStyle), this.getRect()
        }
        getRect() {
          this.rect = this.DOM.el.getBoundingClientRect()
        }
        isActive() {
          return it.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0
        }
      }
      class s {
        constructor() {
          this.DOM = {
            content: b.value
          }, this.images = [], [...this.DOM.content.querySelectorAll("img")].forEach(a => this.images.push(new V(a))), this.imagesTotal = this.images.length, this.imgPosition = 0, this.zIndexVal = 1, this.threshold = 50, requestAnimationFrame(() => this.render())
        }
        render() {
          let a = u();
          T.value.x = $.lerp(T.value.x || f.value.x, f.value.x, .1), T.value.y = $.lerp(T.value.y || f.value.y, f.value.y, .1), a > this.threshold && (this.showNextImage(), ++this.zIndexVal, this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0, y.value = f.value);
          let p = !0;
          for (let w of this.images)
            if (w.isActive()) {
              p = !1;
              break
            } p && this.zIndexVal !== 1 && (this.zIndexVal = 1), requestAnimationFrame(() => this.render())
        }
        showNextImage() {
          const a = this.images[this.imgPosition];
          it.killTweensOf(a.DOM.el), it.timeline().set(a.DOM.el, {
            startAt: {
              opacity: 0
            },
            opacity: 1,
            zIndex: this.zIndexVal,
            x: T.value.x - a.rect.width / 2,
            y: T.value.y - a.rect.height / 2
          }, 0).to(a.DOM.el, {
            duration: 1.6,
            ease: "Expo.easeOut",
            x: f.value.x - a.rect.width / 2,
            y: f.value.y - a.rect.height / 2
          }, 0).to(a.DOM.el, {
            duration: 1,
            ease: "Power1.easeOut",
            opacity: 0
          }, .4).to(a.DOM.el, {
            duration: 1,
            ease: "Quint.easeInOut",
            y: `+=${h.value.height+a.rect.height/2}`
          }, .4)
        }
      }

      function S() {
        h.value = {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }

      function _(l) {
        let a = 0,
          p = 0;
        return a = l.clientX, p = l.clientY, {
          x: a,
          y: p
        }
      }

      function u() {
        return $.distance(f.value.x, f.value.y, y.value.x, y.value.y)
      }

      function I(l) {
        f.value = _(l)
      }

      function e() {
        g.value = document.body, S(), window.addEventListener("resize", S), i.value.addEventListener("mousemove", I), window.innerWidth > 1023 && new s
      }
      return _t(() => {
        e()
      }), Ue(() => {
        e()
      }), We(() => {
        var l;
        window.removeEventListener("resize", S), (l = i == null ? void 0 : i.value) == null || l.removeEventListener("mousemove", I)
      }), (l, a) => (r(), c("div", {
        class: "downtime",
        ref_key: "downtime",
        ref: i
      }, [t("div", {
        class: "content",
        ref_key: "content",
        ref: b
      }, [(r(!0), c(O, null, B(n.images, p => (r(), c("img", {
        class: "content__img",
        src: p,
        alt: "Some image"
      }, null, 8, Ca))), 256))], 512), t("h2", Aa, [t("span", {
        innerHTML: n.caption
      }, null, 8, Ma)]), t("div", {
        "data-anim-text": "",
        class: "downtime__caption text-s1",
        innerHTML: n.caption
      }, null, 8, Oa)], 512))
    }
  }),
  La = F(qa, [
    ["__scopeId", "data-v-962e5673"]
  ]);
const za = {
    class: "page"
  },
  Na = {
    class: "about move-loader main"
  },
  Ba = {
    name: "AboutPage"
  },
  Ha = Object.assign(Ba, {
    async setup(n) {
      var v, A, C, R, Y, yt, bt, wt, $t, kt, Tt, Pt, St, It, Ct, At, Mt, Ot, Et, qt, Lt, zt, Nt, Bt, Ht, Vt, jt, Ft, Rt, Yt, Ut, Wt, Gt, Jt, Qt, Xt, Kt, Zt, Dt, te, ee, se, ne, ae, oe, le, ie, re, ce, _e, de, ue, pe, he, ve, ge, fe, me;
      let i, b;
      x.registerPlugin(vt);
      const h = gt().public.baseUrl,
        f = ([i, b] = ut(() => pt("projects", () => $fetch(h + "/api/one-projects?populate=deep,2&pagination[page]=1&pagination[pageSize]=100"))), i = await i, b(), i),
        y = ([i, b] = ut(() => pt("about", () => $fetch(h + "/api/about?populate=deep,4"))), i = await i, b(), i);
      Ge((A = (v = y.data.value.data) == null ? void 0 : v.attributes) == null ? void 0 : A.Seo_Block);
      const T = (Y = (R = (C = y.data.value.data) == null ? void 0 : C.attributes) == null ? void 0 : R.Seo_Block) == null ? void 0 : Y.metaTitle,
        $ = ([i, b] = ut(() => pt("team", () => $fetch(h + "/api/team?populate=deep,3"))), i = await i, b(), i),
        V = (bt = (yt = f == null ? void 0 : f.data) == null ? void 0 : yt.value) == null ? void 0 : bt.data,
        s = (kt = ($t = (wt = y == null ? void 0 : y.data) == null ? void 0 : wt.value) == null ? void 0 : $t.data) == null ? void 0 : kt.attributes,
        S = (It = (St = (Pt = (Tt = $ == null ? void 0 : $.data) == null ? void 0 : Tt.value) == null ? void 0 : Pt.data) == null ? void 0 : St.attributes) == null ? void 0 : It.Add_Backstage;
      S == null || S.map(o => {
        var M, E, L;
        return h + ((L = (E = (M = o == null ? void 0 : o.Photo) == null ? void 0 : M.data[0]) == null ? void 0 : E.attributes) == null ? void 0 : L.url)
      });
      const _ = (At = (Ct = s == null ? void 0 : s.Photo_Gallery) == null ? void 0 : Ct.data) == null ? void 0 : At.map(o => {
          var M, E;
          return {
            id: o.id,
            image: h + ((M = o == null ? void 0 : o.attributes) == null ? void 0 : M.url),
            caption: (E = o == null ? void 0 : o.attributes) == null ? void 0 : E.caption
          }
        }),
        u = (Ot = (Mt = s == null ? void 0 : s.Process_Block) == null ? void 0 : Mt.Add_Process) == null ? void 0 : Ot.map(o => ({
          id: 1,
          title: o == null ? void 0 : o.Name,
          description: o == null ? void 0 : o.Description
        })),
        I = (Et = s == null ? void 0 : s.Add_Award) == null ? void 0 : Et.map(o => {
          var M, E, L, Z, D, tt, et, st, nt, at;
          return {
            id: o == null ? void 0 : o.id,
            title: o == null ? void 0 : o.Name,
            link: o == null ? void 0 : o.Link,
            logo: {
              url: h + ((L = (E = (M = o == null ? void 0 : o.Logo) == null ? void 0 : M.data) == null ? void 0 : E.attributes) == null ? void 0 : L.url),
              alt: (tt = (D = (Z = o == null ? void 0 : o.Logo) == null ? void 0 : Z.data) == null ? void 0 : D.attributes) == null ? void 0 : tt.alternativeText
            },
            name: o == null ? void 0 : o.project_name,
            year: o == null ? void 0 : o.Year,
            photo: h + ((nt = (st = (et = o == null ? void 0 : o.Photo) == null ? void 0 : et.data) == null ? void 0 : st.attributes) == null ? void 0 : nt.url),
            projects: (at = o == null ? void 0 : o.one_projects) == null ? void 0 : at.data.map(z => {
              var ot, lt, xe, ye, be, we, $e;
              return {
                date: new Date((ot = z == null ? void 0 : z.attributes) == null ? void 0 : ot.createdAt),
                caption: (lt = z == null ? void 0 : z.attributes) == null ? void 0 : lt.Name,
                url: h + ((we = (be = (ye = (xe = z == null ? void 0 : z.attributes) == null ? void 0 : xe.Main_Photo) == null ? void 0 : ye.data) == null ? void 0 : be.attributes) == null ? void 0 : we.url),
                alt: "",
                slug: ($e = z == null ? void 0 : z.attributes) == null ? void 0 : $e.Slug
              }
            }),
            pdf: o == null ? void 0 : o.link_to_pdf
          }
        }),
        e = (qt = s == null ? void 0 : s.photos_for_a_taking_a_break) == null ? void 0 : qt.data.map(o => {
          var M;
          return h + ((M = o == null ? void 0 : o.attributes) == null ? void 0 : M.url)
        }),
        l = ((zt = (Lt = s == null ? void 0 : s.Break_Photos) == null ? void 0 : Lt.Two_Photo) == null ? void 0 : zt.data) || [],
        a = {
          titles: [s.Title1, s.Title2, s.Title3, s.Title4, s.Title5, s.Title6, s.Title7, s.Title8],
          team: {
            description: s == null ? void 0 : s.Description,
            title: s == null ? void 0 : s.Big_Text,
            gallery: _
          },
          mission: s == null ? void 0 : s.Our_mission,
          video: {
            text: (Nt = s == null ? void 0 : s.Break_Photos) == null ? void 0 : Nt.Text,
            image1: {
              url: h + ((Ht = (Bt = l[0]) == null ? void 0 : Bt.attributes) == null ? void 0 : Ht.url),
              alt: (jt = (Vt = l[0]) == null ? void 0 : Vt.attributes) == null ? void 0 : jt.alternativeText,
              caption: (Rt = (Ft = l[0]) == null ? void 0 : Ft.attributes) == null ? void 0 : Rt.caption
            },
            image2: {
              url: h + ((Ut = (Yt = l[1]) == null ? void 0 : Yt.attributes) == null ? void 0 : Ut.url),
              alt: (Gt = (Wt = l[1]) == null ? void 0 : Wt.attributes) == null ? void 0 : Gt.alternativeText,
              caption: (Qt = (Jt = l[1]) == null ? void 0 : Jt.attributes) == null ? void 0 : Qt.caption
            }
          },
          story: {
            title: (Xt = s == null ? void 0 : s.Our_Story) == null ? void 0 : Xt.Title,
            description: (Kt = s == null ? void 0 : s.Our_Story) == null ? void 0 : Kt.Description,
            image: {
              url: h + ((ee = (te = (Dt = (Zt = s == null ? void 0 : s.Our_Story) == null ? void 0 : Zt.Photo) == null ? void 0 : Dt.data) == null ? void 0 : te.attributes) == null ? void 0 : ee.url),
              alt: (ae = (ne = (se = s == null ? void 0 : s.Our_Story) == null ? void 0 : se.Photo) == null ? void 0 : ne.attributes) == null ? void 0 : ae.alternativeText
            }
          },
          process: {
            photo: {
              url: h + ((re = (ie = (le = (oe = s == null ? void 0 : s.Process_Block) == null ? void 0 : oe.Main_Photo) == null ? void 0 : le.data) == null ? void 0 : ie.attributes) == null ? void 0 : re.url),
              alt: (ue = (de = (_e = (ce = s == null ? void 0 : s.Process_Block) == null ? void 0 : ce.Main_Photo) == null ? void 0 : _e.data) == null ? void 0 : de.attributes) == null ? void 0 : ue.alternativeText,
              caption: (ge = (ve = (he = (pe = s == null ? void 0 : s.Process_Block) == null ? void 0 : pe.Main_Photo) == null ? void 0 : he.data) == null ? void 0 : ve.attributes) == null ? void 0 : ge.caption
            },
            slides: u
          },
          awards: I,
          downtimeCaption: s == null ? void 0 : s.Text_For_Slider,
          seo: {
            title: (fe = s == null ? void 0 : s.Seo_Block) == null ? void 0 : fe.metaTitle,
            description: (me = s == null ? void 0 : s.Seo_Block) == null ? void 0 : me.metaDescription
          },
          breakPhotos: e
        },
        p = Je("services");

      function w() {
        x.fromTo(".about-talk__heading .btn-char", {
          scaleY: 0
        }, {
          ease: N,
          scaleY: 1,
          stagger: {
            amount: .8
          },
          scrollTrigger: ".about-talk__heading"
        })
      }

      function q() {
        const o = document.querySelector(".about-team");
        let M = "+=570%",
          E = ".about-team",
          L = o.offsetTop / 2;
        window.innerWidth <= 1023 && (M = "bottom bottom", E = ".about-team__inner", L = 180), x.to(".intro__3d", {
          y: L,
          scrollTrigger: {
            trigger: ".about > .intro",
            start: "top top",
            endTrigger: E,
            end: M,
            scrub: !0,
            ease: "none"
          }
        })
      }
      async function m() {
        await document.fonts.ready;
        const o = x.utils.toArray("[data-rotate-title]"),
          M = x.utils.toArray("[data-anim-text]");
        Qe({
          selector: ".about-talk__heading"
        }), q(), ke({
          el: ".intro__heading",
          delay: .8
        }), ht({
          el: ".team-info__text p span"
        }), ht({
          el: ".story__paragraph p span"
        }), Xe(".team-info__text"), Ke({
          selector: ".img-parallax"
        }), o.forEach(L => ke({
          el: L
        })), M.forEach(L => ht({
          el: L
        })), Te(".video__marquee"), Te(".downtime__marquee"), w(), await Q();
        const E = document.querySelector(".about-team__info .split-line");
        E && (E.style.width = "110%")
      }
      return _t(() => {
        m()
      }), (o, M) => {
        const E = qe,
          L = Ee,
          Z = xs,
          D = Rs,
          tt = en,
          et = hn,
          st = Sn,
          nt = Gn,
          at = Ia,
          z = La,
          ot = ze,
          lt = De;
        return r(), c("div", za, [k(L, null, {
          default: U(() => [k(E, null, {
            default: U(() => [j(d(H(T)), 1)]),
            _: 1
          })]),
          _: 1
        }), t("main", Na, [k(Z, {
          titles: a == null ? void 0 : a.titles
        }, null, 8, ["titles"]), k(D, {
          info: a == null ? void 0 : a.team,
          services: H(p)
        }, null, 8, ["info", "services"]), k(tt, {
          description: a == null ? void 0 : a.mission
        }, null, 8, ["description"]), k(et, {
          data: a == null ? void 0 : a.video
        }, null, 8, ["data"]), k(st, {
          data: a == null ? void 0 : a.story
        }, null, 8, ["data"]), k(nt, {
          data: a == null ? void 0 : a.process
        }, null, 8, ["data"]), k(at, {
          data: a == null ? void 0 : a.awards
        }, null, 8, ["data"]), k(z, {
          images: H(e),
          caption: a == null ? void 0 : a.downtimeCaption
        }, null, 8, ["images", "caption"])]), k(ot, {
          projects: H(V)
        }, null, 8, ["projects"]), k(lt)])
      }
    }
  }),
  Qa = F(Ha, [
    ["__scopeId", "data-v-2b125ccf"]
  ]);
export {
  Qa as
  default
};