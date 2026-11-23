/* https://aventuradentalarts.com/_nuxt/mCIKZtRe.js */
import {
  d as B,
  b as T,
  o as s,
  e as n,
  i as t,
  t as l,
  k as x,
  j as k,
  n as G,
  g as M,
  h as F,
  q as A,
  s as D,
  m as P,
  f as p,
  F as y,
  r as C,
  L as V,
  S as R,
  I as U,
  c as O,
  y as q,
  z,
  C as H,
  D as K
} from "./C3LIzMiL.js";
import {
  _ as j,
  a as W
} from "./DoQaItma.js";
import {
  u as I
} from "./COkvdYZ_.js";
import {
  S as E,
  N as X
} from "./jnTzBd4Y.js";
import {
  d as L,
  p as S
} from "./AkxaoDpK.js";
import {
  _ as Z
} from "./Dl9tJ_2x.js";
const J = {
    "esthetic-dentistry": "Esthetic Dentistry",
    "beyond-the-smile": "Beyond The Smile",
    "preventive-care": "Preventive Care",
    "restorative-dentistry": "Restorative Dentistry"
  },
  Q = {
    class: "wrap"
  },
  Y = {
    class: "hero"
  },
  tt = {
    class: "bg"
  },
  et = ["src", "alt"],
  st = {
    class: "points"
  },
  nt = {
    class: "point",
    "hover-link-container": ""
  },
  ot = {
    class: "h4"
  },
  it = {
    class: "c0"
  },
  at = {
    class: "point",
    "hover-link-container": ""
  },
  rt = {
    class: "h4"
  },
  lt = {
    class: "second-block"
  },
  ct = {
    class: "small-title h4"
  },
  dt = {
    class: "details"
  },
  _t = {
    class: "before-after"
  },
  pt = ["innerHTML"],
  ut = B({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(w) {
      const {
        isMobile: u
      } = T();
      return I(() => {
        if (u.value) return;
        const e = A.timeline({
          scrollTrigger: {
            trigger: ".wrap .second-block",
            start: "top bottom",
            end: "top center",
            scrub: .4
          }
        });
        e.to("section.hero .light-overlay", {
          autoAlpha: 1
        }), e.to("section.hero .title i", {
          xPercent: -50
        }, "<"), e.to("section.hero .title span", {
          xPercent: 50
        }, "<")
      }), (e, i) => {
        const d = D,
          o = j;
        return s(), n("div", Q, [t("section", Y, [t("div", tt, [t("img", {
          src: e.data.hero.image.normal,
          alt: e.data.hero.title,
          class: "inner-img"
        }, null, 8, et)]), i[2] || (i[2] = t("div", {
          class: "light-overlay"
        }, null, -1)), t("div", st, [t("div", nt, [t("span", ot, l(e.data.serviceSolutions.solutions.length), 1), t("span", it, [i[0] || (i[0] = x(" Expert ")), i[1] || (i[1] = t("br", null, null, -1)), k(d, {
          text: "Solutions",
          underline: "",
          "text-class": "c0"
        })])]), t("div", at, [t("span", rt, l(e.data.hero.patientNumbers), 1), k(d, {
          text: "Patients",
          underline: "",
          "text-class": "c0"
        })])]), t("h1", {
          class: G(["title", [e.data.slug]])
        }, [t("i", null, l(e.data.hero.title.split(" ")[0]), 1), t("span", null, l(e.data.hero.title.split(" ").slice(1).join(" ")), 1)], 2)]), t("div", lt, [t("h2", ct, l(e.data.title), 1), t("div", dt, [t("div", _t, [e.data.beforeAfter ? (s(), M(o, {
          key: 0,
          images: e.data.beforeAfter.images
        }, null, 8, ["images"])) : F("", !0)]), t("div", {
          innerHTML: e.data.hero.description,
          class: "details-text p3",
          "data-anim-text-by-lines": ""
        }, null, 8, pt)])])])
      }
    }
  }),
  ne = P(ut, [
    ["__scopeId", "data-v-013b3e96"]
  ]),
  mt = {
    class: "key-indicators"
  },
  ht = {
    class: "title h2"
  },
  gt = {
    class: "line n2"
  },
  ft = {
    key: 0,
    class: "mobile-list"
  },
  vt = {
    class: "list-item"
  },
  bt = {
    class: "c3"
  },
  yt = {
    class: "p2"
  },
  wt = {
    key: 1,
    class: "ticker"
  },
  $t = {
    class: "swiper"
  },
  kt = {
    class: "swiper-wrapper"
  },
  Ct = {
    class: "swiper-slide"
  },
  xt = {
    class: "p1"
  },
  St = .5,
  At = B({
    __name: "KeyIndicators",
    props: {
      data: {},
      serviceName: {}
    },
    setup(w) {
      const u = w,
        {
          isMobile: f
        } = T(),
        e = L(u.data, 15);
      let i, d, o = 0,
        $ = 0,
        v = 0;

      function _() {
        o -= St, o <= $ && (o = v), i.setTranslate(o), d = requestAnimationFrame(_)
      }
      return I(() => {
        f.value || (i = new E("section.key-indicators .swiper", {
          slidesPerView: "auto",
          centeredSlides: !0,
          spaceBetween: S(32),
          loop: !1,
          speed: 0,
          watchSlidesProgress: !0,
          allowTouchMove: !1,
          initialSlide: 2,
          on: {
            progress(m) {
              m.slides.forEach(h => {
                const r = h.progress,
                  g = Math.abs(r),
                  a = 1 - Math.min(g, 2) * .25;
                let b = 0;
                const N = r > 0 ? 1 : -1;
                g > 1 && (b = N === 1 ? A.utils.interpolate(100, 150, g - 1) : A.utils.interpolate(0, 50, g - 1) * -1), r > 0 && r <= 1 && (b = 100), h.style.transformOrigin = N === 1 ? `${b}% bottom` : `${b}% bottom`, h.style.transform = `translate3d(0, 0, 10px) scale(${a})`
              })
            }
          }
        }), V(() => {
          $ = (S(398) * e.length + S(32) * e.length - i.translate) * -1, v = i.translate, R.create({
            trigger: "section.key-indicators .ticker",
            start: "top bottom",
            end: "bottom top",
            onEnter: () => {
              _()
            },
            onLeave: () => {
              cancelAnimationFrame(d)
            },
            onEnterBack: () => {
              _()
            },
            onLeaveBack: () => {
              cancelAnimationFrame(d)
            }
          })
        }))
      }), (m, h) => (s(), n("section", mt, [t("h2", ht, [h[0] || (h[0] = t("span", {
        class: "line n1"
      }, [t("span", null, [x("Key "), t("span", null, "indicators")]), t("i", null, "to consider")], -1)), t("span", gt, l(("servicesName" in m ? m.servicesName : p(J))[m.serviceName]), 1)]), p(f) ? (s(), n("div", ft, [(s(!0), n(y, null, C(m.data, (r, g) => (s(), n("div", vt, [t("p", bt, l(String(g + 1).padStart(2, "0")), 1), t("p", yt, l(r), 1)]))), 256))])) : (s(), n("div", wt, [t("div", $t, [t("div", kt, [(s(!0), n(y, null, C(p(e), r => (s(), n("div", Ct, [t("span", xt, l(r), 1)]))), 256))])])]))]))
    }
  }),
  oe = P(At, [
    ["__scopeId", "data-v-1058276e"]
  ]),
  Bt = U("/images/services/solution-bg.webp"),
  Tt = {
    class: "solutions"
  },
  Pt = {
    class: "first"
  },
  It = {
    class: "second"
  },
  Nt = {
    class: "swiper"
  },
  Mt = {
    class: "swiper-wrapper"
  },
  Ft = ["onClick"],
  Dt = {
    class: "solution",
    "hover-link-container": ""
  },
  Et = {
    class: "h4"
  },
  Lt = {
    class: "solution-bottom"
  },
  Gt = {
    class: "solution-img"
  },
  Vt = ["src", "alt"],
  Rt = {
    class: "solution-desc p3"
  },
  Ut = {
    key: 0,
    class: "swiper-controls"
  },
  Ot = {
    class: "btn-slide"
  },
  qt = {
    class: "btn-slide next"
  },
  zt = B({
    __name: "Solutions",
    props: {
      serviceId: {}
    },
    setup(w) {
      const u = w,
        {
          getSolutionsFromService: f
        } = O(),
        {
          open: e
        } = q(),
        {
          isMobile: i
        } = T(),
        d = z(),
        o = f(u.serviceId),
        $ = () => {
          i.value || o.length > 4 && new E("section.solutions .swiper", {
            slidesPerView: "auto",
            spaceBetween: S(24),
            allowTouchMove: !1,
            modules: [X],
            navigation: {
              nextEl: "section.solutions .btn-slide.next",
              prevEl: "section.solutions .btn-slide:not(.next)"
            }
          })
        },
        v = (_, c) => {
          if (c && c.ctrlKey) {
            window.open(window.location.origin + `/${d.params.service}/${_}`, "_blank");
            return
          }
          e(u.serviceId, _)
        };
      return I($), (_, c) => {
        const m = K,
          h = D,
          r = Z,
          g = W;
        return s(), n("section", Tt, [t("div", Pt, [c[1] || (c[1] = t("p", {
          class: "description p3",
          "data-anim-text-by-lines": ""
        }, " We combine advanced techniques with artistic precision to offer treatments that restore balance, brightness, and beauty to your smile. ", -1)), k(m, null, {
          default: H(() => c[0] || (c[0] = [t("div", {
            class: "bg"
          }, [t("img", {
            src: Bt,
            role: "presentation",
            class: "inner-img"
          }), t("svg", {
            width: "1440",
            height: "862",
            viewBox: "0 0 1440 862",
            fill: "none",
            class: "inner-svg",
            xmlns: "http://www.w3.org/2000/svg"
          }, [t("g", {
            "clip-path": "url(#clip0_1_20)"
          }, [t("rect", {
            width: "1440",
            height: "862"
          }), t("g", {
            id: "anim-bg",
            filter: "url(#filter0_f_1_20)"
          }, [t("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M977.324 1382.67C789.911 1368 641.506 1510.04 453.617 1497.26C272.726 1484.95 93.419 1410.91 23.373 1317.76C-49.3578 1221.04 -489.477 1248.37 -557.611 1150.61C-642.382 1028.97 -399.021 856.807 -388.969 726.095C-379.892 608.066 -71.5761 568.176 123.265 519.77C275.835 481.866 463.179 520.196 611.643 477.506C764.287 433.613 806.697 306.028 969.898 276.323C1129.64 247.247 1317.18 274.044 1458.69 323.326C1598.12 371.886 1521.18 590.035 1626.51 660.197C1733.52 731.481 2167.31 815.103 2198.81 906.463C2230.6 998.687 1887.65 967.859 1862.54 1060.98C1834.87 1163.63 1986.13 1206.59 1933.37 1306.29C1875.29 1416.04 1790.55 1569.67 1586.74 1585.95C1348.01 1605.02 1215.59 1401.32 977.324 1382.67Z",
            fill: "url(#paint0_radial_1_20)"
          })])]), t("defs", null, [t("filter", {
            id: "filter0_f_1_20",
            x: "-746.807",
            y: "93.0048",
            width: "3118.99",
            height: "1665.5",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB"
          }, [t("feFlood", {
            "flood-opacity": "0",
            result: "BackgroundImageFix"
          }), t("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }), t("feGaussianBlur", {
            stdDeviation: "85.65",
            result: "effect1_foregroundBlur_1_20"
          })]), t("radialGradient", {
            id: "paint0_radial_1_20",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(851.271 928.986) rotate(-90.3846) scale(662.943 1239.07)"
          }, [t("stop"), t("stop", {
            offset: "0.469",
            "stop-color": "#101013"
          }), t("stop", {
            offset: "1",
            "stop-color": "#474B55"
          })]), t("clipPath", {
            id: "clip0_1_20"
          }, [t("rect", {
            width: "1440",
            height: "862",
            fill: "white"
          })])])])], -1)])),
          _: 1
        }), c[2] || (c[2] = t("h4", {
          class: "h1 title"
        }, [t("span", null, "ADA"), t("span", null, "Solutions")], -1))]), t("div", It, [p(i) ? (s(!0), n(y, {
          key: 1
        }, C(p(o), a => (s(), M(g, {
          key: a.slug,
          data: a,
          onClickCard: b => v(a.slug)
        }, null, 8, ["data", "onClickCard"]))), 128)) : (s(), n(y, {
          key: 0
        }, [t("div", Nt, [t("div", Mt, [(s(!0), n(y, null, C(p(o), a => (s(), n("div", {
          key: a.slug,
          class: "swiper-slide",
          onClick: b => v(a.slug, b)
        }, [t("article", Dt, [t("p", Et, l(a.title), 1), t("div", Lt, [t("div", Gt, [t("img", {
          src: a.preview.image.medium,
          alt: a.title,
          class: "inner-img"
        }, null, 8, Vt)]), t("p", Rt, l(a.preview.description), 1), k(h, {
          class: "c2",
          text: "Learn More",
          underline: ""
        })])])], 8, Ft))), 128))])]), p(o).length > 4 ? (s(), n("div", Ut, [t("button", Ot, [k(r)]), t("button", qt, [k(r)])])) : F("", !0)], 64))])])
      }
    }
  }),
  ie = P(zt, [
    ["__scopeId", "data-v-66ee0890"]
  ]),
  Ht = {
    class: "gallery"
  },
  Kt = {
    key: 0,
    class: "title h2"
  },
  jt = {
    key: 1,
    class: "mobile-title h2"
  },
  Wt = {
    class: "wrap-ticker"
  },
  Xt = ["src"],
  Zt = B({
    __name: "Gallery",
    props: {
      data: {}
    },
    setup(w) {
      const u = w,
        {
          isMobile: f
        } = T(),
        e = L(u.data, 7);
      return I(() => {
        A.to("section.gallery", {
          scrollTrigger: {
            trigger: "footer.footer",
            start: "top bottom",
            end: "top -15%",
            scrub: .4
          },
          ease: "none",
          y: "15%"
        })
      }), (d, o) => (s(), n("section", Ht, [p(f) ? (s(), n("h5", jt, o[1] || (o[1] = [x(" Patient Transformation "), t("i", null, "Gallery", -1)]))) : (s(), n("h5", Kt, o[0] || (o[0] = [t("span", {
        class: "line n1"
      }, "Patient", -1), t("span", {
        class: "line n2"
      }, [t("span", null, "Transformation"), t("span", {
        class: "title-tip c2"
      }, [x(" The Impact of "), t("br"), x(" Expert Dentistry: ")]), t("span", null, "Gallery")], -1)]))), t("div", Wt, [(s(), n(y, null, C(2, $ => t("div", {
        key: $,
        class: "ticker-line"
      }, [(s(!0), n(y, null, C(p(e), (v, _) => (s(), n("div", {
        key: _,
        class: "wrap-image"
      }, [t("img", {
        src: v.normal,
        role: "presentation",
        loading: "lazy",
        class: "inner-img"
      }, null, 8, Xt)]))), 128))])), 64))])]))
    }
  }),
  ae = P(Zt, [
    ["__scopeId", "data-v-1f70968f"]
  ]);
export {
  ne as _, oe as a, ie as b, ae as c
};