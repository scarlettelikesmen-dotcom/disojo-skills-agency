/* https://alchemy.family/_nuxt/49XQLREk.js */
import {
  u as A,
  y as p,
  r as v,
  a1 as S,
  e as M,
  n as ne,
  g as f,
  h as se,
  Z as oe,
  d as x,
  V as ae,
  o as i,
  c as l,
  F as k,
  i as V,
  z as m,
  J as g,
  M as J,
  t as b,
  j as o,
  O as L,
  _ as w,
  a as e,
  p as D,
  l as E,
  H as B,
  C,
  s as ie,
  f as le,
  k as y,
  S as z
} from "./CWeo--9S.js";
import {
  _ as re
} from "./3SQQwhtx.js";

function G() {
  const {
    isMobile: n
  } = A(), t = p("burger-open", () => !1);

  function s(c = () => {}) {
    n.value && (t.value = !0, c())
  }

  function r(c = () => {}) {
    t.value = !1, c()
  }
  return {
    isBurgerOpen: t,
    open: s,
    close: r
  }
}

function ce(n = () => {}, t = !1) {
  const s = v(),
    r = p("init-page-animation");
  S(r, a => {
    a && (s.value = f.context(() => {
      n()
    }))
  }), M(async () => {
    r.value && (await document.fonts.ready, t ? (await ne(), s.value = f.context(() => {
      n()
    })) : s.value = f.context(() => {
      n()
    }))
  });
  const {
    close: c
  } = G();
  se(() => {
    c()
  }), oe(() => {
    s.value && s.value.kill()
  })
}
const _e = {
    class: "menu"
  },
  ue = {
    name: "CommonMenu"
  },
  de = x({
    ...ue,
    setup(n) {
      const {
        DEV_ENV: t
      } = ae().public, s = [{
        name: "Our Essence",
        link: "/about"
      }, {
        name: "Odyssey Events",
        link: "/events"
      }, {
        name: "Commune with Us",
        link: "/contact"
      }, {
        name: "Benefits",
        link: "/benefits"
      }], r = t ? [...s] : s;
      return (c, a) => {
        const u = L;
        return i(), l("ul", _e, [(i(!0), l(k, null, V(o(r), ({
          name: d,
          link: h
        }) => (i(), l("li", {
          key: d
        }, [m(u, {
          to: h,
          class: "link common-link"
        }, {
          default: g(() => [J(b(d), 1)]),
          _: 2
        }, 1032, ["to"])]))), 128))])
      }
    }
  }),
  me = w(de, [
    ["__scopeId", "data-v-bee1182d"]
  ]),
  I = n => (D("data-v-ab847bee"), n = n(), E(), n),
  pe = I(() => e("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M8.9998 10.4943V1.50575C8.9998 1.3034 8.76478 1.19187 8.60803 1.31983L5.58822 3.78512C5.53239 3.8307 5.5 3.89896 5.5 3.97103V8.02897C5.5 8.10104 5.53239 8.1693 5.58822 8.21488L8.60803 10.6802C8.76478 10.8081 8.9998 10.6966 8.9998 10.4943Z",
    fill: "#D9D9D9"
  }), e("path", {
    d: "M4.5 7.90286V4.09714C4.5 3.96459 4.39255 3.85714 4.26 3.85714H2.24C2.10745 3.85714 2 3.96459 2 4.09714V7.90286C2 8.03541 2.10745 8.14286 2.24 8.14286H4.26C4.39255 8.14286 4.5 8.03541 4.5 7.90286Z",
    fill: "#D9D9D9"
  })], -1)),
  fe = {
    class: "sound__wrapper"
  },
  he = {
    class: "sound__inner"
  },
  ge = {
    width: "38",
    height: "9",
    viewBox: "0 0 38 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  ve = I(() => e("path", {
    class: "eqv",
    d: "M-7.15723 4.79915L-3.94999 4.2436C-2.07493 3.9188 0.589426 3.9188 2.46448 4.2436C4.33954 4.5684 7.0039 4.5684 8.87896 4.2436C10.754 3.9188 13.4184 3.9188 15.2934 4.2436C17.1685 4.5684 19.8328 4.5684 21.7079 4.2436C23.583 3.9188 26.2473 3.9188 28.1224 4.2436C29.9975 4.5684 32.6618 4.5684 34.5369 4.2436C36.4119 3.9188 39.0762 3.9188 40.9513 4.2436L44.1586 4.79915",
    stroke: "#D4CCBB"
  }, null, -1)),
  Ce = I(() => e("svg", {
    width: "38",
    height: "9",
    viewBox: "0 0 38 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    class: "eqv",
    d: "M-7.15723 4.79915L-3.94999 4.2436C-2.07493 3.9188 0.589426 3.9188 2.46448 4.2436C4.33954 4.5684 7.0039 4.5684 8.87896 4.2436C10.754 3.9188 13.4184 3.9188 15.2934 4.2436C17.1685 4.5684 19.8328 4.5684 21.7079 4.2436C23.583 3.9188 26.2473 3.9188 28.1224 4.2436C29.9975 4.5684 32.6618 4.5684 34.5369 4.2436C36.4119 3.9188 39.0762 3.9188 40.9513 4.2436L44.1586 4.79915",
    stroke: "#D4CCBB"
  })], -1)),
  we = x({
    __name: "SoundButton",
    setup(n) {
      const t = p("audio-played");

      function s() {
        t.value = !t.value
      }
      const r = v(),
        c = v();
      return M(() => {
        r.value = f.timeline({
          paused: !0
        }).to(".eqv", {
          duration: .5,
          morphSVG: c.value
        }), t.value && r.value.play()
      }), S(t, a => {
        var u, d;
        a ? (u = r.value) == null || u.play() : (d = r.value) == null || d.reverse()
      }), (a, u) => (i(), l("button", {
        class: "sound a1",
        onClick: s
      }, [pe, e("span", fe, [e("span", he, [(i(), l("svg", ge, [e("defs", null, [e("path", {
        ref_key: "inactivePathEl",
        ref: c,
        d: "M-6 7L-2.875 4.5C-1.04802 3.03841 1.54802 3.03841 3.375 4.5V4.5C5.20198 5.96159 7.79802 5.96159 9.625 4.5V4.5C11.452 3.03841 14.048 3.03841 15.875 4.5V4.5C17.702 5.96159 20.298 5.96159 22.125 4.5V4.5C23.952 3.03841 26.548 3.03841 28.375 4.5V4.5C30.202 5.96159 32.798 5.96159 34.625 4.5V4.5C36.452 3.03841 39.048 3.03841 40.875 4.5L44 7",
        stroke: "#D4CCBB"
      }, null, 512)]), ve])), Ce])])]))
    }
  }),
  ke = w(we, [
    ["__scopeId", "data-v-ab847bee"]
  ]),
  be = {},
  Be = n => (D("data-v-160f1c0b"), n = n(), E(), n),
  xe = {
    class: "frame-button"
  },
  $e = Be(() => e("svg", {
    class: "frame-button__bg",
    width: "129",
    height: "40",
    viewBox: "0 0 129 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M0 0H129V29L118 40H0V0Z",
    fill: "#E8E8E8"
  })], -1)),
  ye = {
    class: "frame-button__content"
  },
  Se = {
    class: "frame-button__content-inner caption"
  };

function Me(n, t) {
  return i(), l("span", xe, [$e, e("span", ye, [e("span", Se, [B(n.$slots, "default", {}, void 0, !0)])])])
}
const Ve = w(be, [
    ["render", Me],
    ["__scopeId", "data-v-160f1c0b"]
  ]),
  Le = {
    class: "burger"
  },
  De = {
    class: "burger__nav"
  },
  Ee = {
    class: "burger__footer"
  },
  Ie = ["href"],
  Ne = {
    key: 1,
    class: "burger__links"
  },
  He = {
    key: 0,
    class: "caption"
  },
  Oe = x({
    __name: "BurgerMenu",
    setup(n) {
      const t = p("common-data");
      return (s, r) => {
        var a, u;
        const c = L;
        return i(), l("div", Le, [e("nav", De, [B(s.$slots, "default", {}, void 0, !0)]), e("div", Ee, [(a = o(t)) != null && a.email ? (i(), l("a", {
          key: 0,
          href: `mailto:${o(t).email}`,
          class: "burger__email common-link"
        }, b(o(t).email), 9, Ie)) : C("", !0), (u = o(t)) != null && u.socials ? (i(), l("div", Ne, [(i(!0), l(k, null, V(o(t).socials, (d, h) => (i(), l(k, {
          key: h
        }, [m(c, {
          to: d.link,
          external: !0,
          target: "_blank",
          class: "common-link"
        }, {
          default: g(() => [J(b(d.name), 1)]),
          _: 2
        }, 1032, ["to"]), h < o(t).socials.length - 1 ? (i(), l("span", He, ", ")) : C("", !0)], 64))), 128))])) : C("", !0)])])
      }
    }
  }),
  Te = w(Oe, [
    ["__scopeId", "data-v-bd7e5af1"]
  ]),
  $ = n => (D("data-v-5b43140e"), n = n(), E(), n),
  Ze = {
    class: "frame__inner"
  },
  Fe = {
    class: "frame__header"
  },
  Ue = {
    class: "frame__nav"
  },
  qe = {
    class: "frame__menu"
  },
  Pe = $(() => e("span", null, "MENU", -1)),
  je = $(() => e("span", {
    class: "frame__nav-btn-icon"
  }, [e("svg", {
    width: "19",
    height: "18",
    viewBox: "0 0 19 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M9.94721 1.01246C9.76295 0.643936 9.23705 0.643934 9.05279 1.01246L1.17082 16.7764C1.00459 17.1088 1.24634 17.5 1.61803 17.5L17.382 17.5C17.7537 17.5 17.9954 17.1088 17.8292 16.7764L9.94721 1.01246Z",
    stroke: "#E8E8E8",
    "stroke-linejoin": "round"
  })])], -1)),
  ze = [Pe, je],
  Ae = {
    class: "frame__controls"
  },
  Je = {
    class: "frame__controls-sound"
  },
  Ge = {
    key: 0,
    class: "wrap-sign-user"
  },
  Re = ["src", "alt"],
  We = $(() => e("div", {
    class: "frame__header-line frame__header-line--left"
  }, null, -1)),
  Ke = {
    class: "frame__logo-anchor"
  },
  Qe = {
    class: "frame__logo-wrapper"
  },
  Xe = $(() => e("div", {
    class: "frame__header-line frame__header-line--right"
  }, null, -1)),
  Ye = {
    class: "frame__burger-inner"
  },
  et = x({
    __name: "FrameComponent",
    props: {
      noScroll: {
        type: Boolean,
        default: !1
      }
    },
    setup(n) {
      const t = v(!1),
        {
          isBurgerOpen: s,
          open: r,
          close: c
        } = G(),
        a = p("auth-user").value,
        u = ie(() => a.user ? a.user.firstName.length <= 9 ? a.user.firstName : a.user.firstName.slice(0, 6) + "..." : ""),
        d = p("dark-frame", () => !1);
      p("lenis-not-scrolled");
      const {
        isMobile: h
      } = A(), N = p("lenis"), H = v(!1), O = v();
      ce(() => {
        R()
      }), M(() => {
        H.value = !!localStorage.getItem("already-logged")
      });

      function R() {
        if (!O.value) return;
        const _ = new le(O.value, {
          type: "chars",
          tag: "span"
        });
        return f.set(_.chars, {
          animationName: "fade-in-out",
          animationDuration: 4,
          animationDelay: Z => Z * .2,
          animationIterationCount: "infinite",
          ease: "none"
        })
      }

      function W() {
        h.value ? (t.value = !1, s.value ? T() : K()) : t.value = !t.value
      }
      S(s, _ => {
        _ ? N.value.stop() : N.value.start()
      });

      function K() {
        r(() => {
          const _ = z.getById("logo-animation");
          _ && f.to(_.animation, {
            progress: 1,
            duration: .5,
            ease: "power1.inOut"
          })
        })
      }

      function T() {
        c(() => {
          const _ = z.getById("logo-animation");
          _ && f.to(_.animation, {
            progress: _.progress,
            duration: .5,
            ease: "power1.inOut"
          })
        })
      }
      return (_, Z) => {
        const F = me,
          Q = ke,
          X = Ve,
          U = L,
          Y = re,
          ee = Te;
        return i(), l("div", {
          class: y(["frame", {
            active: o(t) || o(s),
            dark: o(d),
            "is-burger": o(s)
          }])
        }, [e("div", {
          class: y(["frame__mobile-bg", {
            visible: o(s)
          }]),
          onClick: T
        }, null, 2), e("div", Ze, [e("header", Fe, [e("nav", Ue, [e("div", qe, [B(_.$slots, "menu", {}, () => [m(F)], !0)]), e("button", {
          class: "frame__nav-btn caption",
          onClick: W
        }, ze)]), e("div", Ae, [e("div", Je, [m(Q)]), m(U, {
          to: o(a).user ? "/profile" : o(H) ? "/sign-in" : "/sign-up"
        }, {
          default: g(() => [m(X, null, {
            default: g(() => [(i(), l(k, null, V(2, te => {
              var q, P, j;
              return e("div", {
                key: te,
                class: "wrap-auth-link"
              }, [e("span", null, b(o(a).user ? `Hello, ${o(u)}` : "Join the family"), 1), (q = o(a).user) != null && q.sign ? (i(), l("div", Ge, [e("img", {
                src: (P = o(a).user) == null ? void 0 : P.sign.image,
                alt: (j = o(a).user) == null ? void 0 : j.sign.name
              }, null, 8, Re)])) : C("", !0)])
            }), 64))]),
            _: 1
          })]),
          _: 1
        }, 8, ["to"])]), We, e("div", Ke, [e("div", Qe, [m(U, {
          to: "/",
          "aria-label": "go to home page",
          class: "frame__logo"
        }, {
          default: g(() => [m(Y)]),
          _: 1
        })])]), Xe, e("div", {
          class: y(["frame__burger", {
            open: o(s)
          }])
        }, [e("div", Ye, [m(ee, null, {
          default: g(() => [B(_.$slots, "burger", {}, () => [m(F)], !0)]),
          _: 3
        })])], 2)]), C("", !0)])], 2)
      }
    }
  }),
  st = w(et, [
    ["__scopeId", "data-v-5b43140e"]
  ]);
export {
  st as _, me as a, G as b, ce as u
};