/* https://grape.ua/_nuxt/default.BvWVsDI7.js */
import {
  _ as B,
  g as b,
  r as N,
  b as J,
  K,
  u as Q,
  a as Z,
  L as G,
  c as M,
  t as ee,
  e as F,
  M as te,
  N as oe,
  O as ne,
  P as se
} from "./entry.DN75vySF.js";
import {
  _ as ae
} from "./Progress.C6s1Ee2-.js";
import {
  u as O
} from "./base.Cowcg-OE.js";
import {
  a as w,
  C as W,
  M as p,
  N as h,
  L as f,
  U as x,
  W as P,
  u as _,
  X as z,
  Y as q,
  j as D,
  r as ie,
  b as L,
  q as V,
  Q as X,
  ad as A,
  _ as $,
  O as U,
  n as Y,
  k as j,
  V as R,
  aa as re,
  J as ce,
  $ as le,
  o as ue,
  p as _e,
  Z as de,
  a4 as pe,
  R as H
} from "./swiper-vue.BTZulNLT.js";
const he = u => (z("data-v-bede7cf6"), u = u(), q(), u),
  ve = {
    class: "preloader"
  },
  me = {
    class: "preloader__wrap"
  },
  fe = {
    class: "title-h1 preloader__percent"
  },
  we = he(() => x("p", {
    class: "title-h1 preloader__loading"
  }, "Loading", -1)),
  xe = {
    __name: "Preloader",
    setup(u) {
      const {
        base: e
      } = O(), {
        $lenis: o
      } = N(), i = w(0);
      return W(() => {
        o.stop(), b.timeline().to(i, {
          value: 100,
          roundProps: "value",
          duration: 2,
          ease: "0.85, 0, 0.15, 1"
        }, 0).to(".preloader .progress__line", {
          scaleX: 1,
          duration: 2,
          ease: "0.85, 0, 0.15, 1"
        }, 0).to(".preloader__wrap", {
          y: (a, t, c) => -t.offsetTop + 40,
          duration: 2,
          ease: "0.85, 0, 0.15, 1"
        }, 0).fromTo(".preloader", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 104%, 0% 100%)"
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% -4%)",
          display: "none",
          duration: 1,
          onStart: () => {
            o.start(), e.isLoading = !1
          }
        })
      }), (n, a) => {
        const t = ae;
        return p(), h("div", ve, [f(t), x("div", me, [x("p", fe, P(_(i)) + "%.", 1), we])])
      }
    }
  },
  ge = B(xe, [
    ["__scopeId", "data-v-bede7cf6"]
  ]),
  ye = "#C9F7CA",
  ke = D({
    __name: "Cursor",
    setup(u) {
      const {
        cursor: e,
        hideCursor: o
      } = J(), i = ie({
        color: ye,
        text: "",
        typingText: ""
      }), n = {
        x: 500,
        y: 500
      }, a = w("");
      let t = {
        x: 500,
        y: 500
      };
      const c = {
        x: 0,
        y: 0
      };
      let r;
      L(() => e.isShow, l => {
        l && (i.typingText = "", r && clearTimeout(r), g(e.text))
      });
      const g = l => {
          r = setTimeout(() => {
            a.value = e.text.slice(0, a.value.length + 1), g()
          }, 80)
        },
        v = w(),
        d = w();
      W(() => {
        window.addEventListener("pointermove", l => {
          const S = l.target.closest("[data-cursor]"),
            I = !!l.target.closest("[data-cursor-disabled]");
          if (t = {
              x: l.clientX,
              y: l.clientY
            }, !I && S && e.isShow) {
            const y = S.getAttribute("data-cursor-text");
            y && (e.text = y ?? "")
          }
        }), b.ticker.add(s)
      }), L(() => e.isShow, l => {
        l && Y(() => {
          a.value = ""
        })
      }), V(() => {
        b.ticker.remove(s)
      });

      function s() {
        if (!v.value) return;
        const l = {
          x: t.x - c.x,
          y: t.y - c.y
        };
        n.x = n.x + l.x * .1, n.y = n.y + l.y * .1, c.x = n.x, c.y = n.y, v.value.style.transform = `translate(${n.x}px,${n.y}px)`
      }
      return (l, S) => (p(), h("div", {
        ref_key: "cursorDOM",
        ref: v,
        class: "cursor",
        style: A({
          background: _(e).color
        })
      }, [f(U, {
        name: "scale"
      }, {
        default: X(() => [_(e).isShow ? (p(), h("div", {
          key: 0,
          ref_key: "dotDOM",
          ref: d,
          class: "cursor__dot",
          style: A({
            backgroundColor: _(e).color
          })
        }, null, 4)) : $("", !0)]),
        _: 1
      }), _(e).isShow ? (p(), h("div", {
        key: 0,
        class: "text-p2 cursor__text",
        style: A({
          color: _(e).color
        })
      }, P(_(a)), 5)) : $("", !0)], 4))
    }
  }),
  Ce = {
    key: 0,
    class: "cookies"
  },
  Se = {
    class: "cookies__text text-p3"
  },
  Te = D({
    __name: "CookiesTooltip",
    setup(u) {
      const e = K("cookies-accept", {
          maxAge: 604800
        }),
        o = j(() => !e.value);

      function i() {
        e.value = "accepted"
      }
      return Q(), (n, a) => _(o) ? (p(), h("div", Ce, [x("p", Se, [R(P(n.$t("cookie.text")) + " ", 1), $("", !0), R(". ")]), x("button", {
        class: "cookies__button text-p1 link-2",
        "aria-label": "accept cookies",
        onClick: i
      }, P(n.$t("cookie.ok")), 1)])) : $("", !0)
    }
  }),
  $e = B(Te, [
    ["__scopeId", "data-v-64162c9e"]
  ]),
  be = u => (z("data-v-0828a76c"), u = u(), q(), u),
  Le = {
    class: "waiting-screen",
    "data-cursor": "#C9F7CA",
    "data-cursor-text": "Click to return"
  },
  We = {
    class: "waiting-screen__text text-p1"
  },
  Ie = be(() => x("span", null, "Waiting for you", -1)),
  Pe = {
    class: "waiting-screen__text-dots"
  },
  De = D({
    __name: "WaitingScreen",
    async setup(u) {
      let e, o;
      const {
        locale: i
      } = Z(), {
        data: n
      } = ([e, o] = re(() => G("/api/main", {
        query: {
          locale: i.value
        }
      }, "$b75qtpiICN")), e = await e, o(), e), a = j(() => {
        var k;
        return n.value ? (((k = n.value.data) == null ? void 0 : k.clients.map(T => T.photo)) ?? []).slice(0, 20) : []
      }), t = [".", "..", "..."], c = w(t[0]), r = w();
      let g = Date.now(),
        v;
      const d = {
        x: 3,
        y: 2
      };
      let s = w(0),
        l = Date.now();
      W(() => {
        E()
      }), V(() => {
        v && cancelAnimationFrame(v)
      });

      function S() {
        if (!r.value) return;
        const k = Date.now(),
          T = k - l;
        l = k;
        const C = r.value.getBoundingClientRect(),
          m = {
            x: C.x + d.x * T * .06,
            y: C.y + d.y * T * .06
          };
        m.x < 0 && (d.x = -d.x, m.x = 0, y()), m.x + C.width > window.innerWidth && (d.x = -d.x, m.x = window.innerWidth - C.width, y()), m.y < 0 && (d.y = -d.y, m.y = 0, y()), m.y + C.height > window.innerHeight && (d.y = -d.y, m.y = window.innerHeight - C.height, y()), r.value.style.transform = `translate(${m.x}px,${m.y}px)`
      }

      function I() {
        c.value = t[(t.indexOf(c.value) + 1) % t.length]
      }

      function y() {
        r.value && (s.value = (s.value + 1) % a.value.length)
      }

      function E() {
        Date.now() - g > 500 && (I(), g = Date.now()), S(), v = requestAnimationFrame(E)
      }
      return (k, T) => (p(), h("div", Le, [x("p", We, [Ie, x("span", Pe, P(_(c)), 1)]), x("div", {
        ref_key: "logoDOM",
        ref: r,
        class: "waiting-screen__logo"
      }, [(p(!0), h(ce, null, le(_(a), (C, m) => (p(), h("div", {
        style: A({
          opacity: _(s) === m ? 1 : 0,
          backgroundImage: `url(${C})`
        })
      }, null, 4))), 256))], 512)]))
    }
  }),
  Ee = B(De, [
    ["__scopeId", "data-v-0828a76c"]
  ]),
  Ae = D({
    __name: "CanvasCreative",
    setup(u) {
      const e = w(null);
      let o = null;
      const i = {
        value: 2e3
      };
      let n = 1;
      const a = M("is-creative");
      L(a, () => {
        if (a.value) d(), b.ticker.add(v), t.x = [], t.y = [];
        else {
          if (!e.value || !o) return;
          t.x = [], t.y = [], o.clearRect(0, 0, e.value.width, e.value.height), b.ticker.remove(v)
        }
      });
      const t = {
          x: [],
          y: []
        },
        c = s => {
          a.value && s.pointerType === "mouse" && (i.value += 1, t.x.push(s.clientX), t.y.push(s.clientY), t.x.length > i.value && t.x.shift(), t.y.length > i.value && t.y.shift())
        },
        r = () => {
          if (a.value) {
            if (t.x.length > i.value)
              for (let s = 0; s < 100; s++) t.x.shift();
            if (t.y.length > i.value)
              for (let s = 0; s < 100; s++) t.y.shift();
            b.to(i, {
              value: 0,
              duration: .7
            })
          }
        },
        g = () => {
          e.value && (t.x = [], t.y = [], e.value.width = window.innerWidth, e.value.height = window.innerHeight)
        },
        v = () => {
          if (!(!e.value || !o) && (o.clearRect(0, 0, e.value.width, e.value.height), !!a.value))
            for (let s = 1; s < t.x.length; s++) o.beginPath(), o.moveTo(t.x[s - 1], t.y[s - 1]), o.lineTo(t.x[s], t.y[s]), o.strokeStyle = (document.body.classList.contains("high-theme"), "#A2A2FC"), o.lineWidth = 2, o.stroke()
        },
        d = () => {
          !e.value || window.innerWidth < 1024 || (n = window.devicePixelRatio || 1, e.value.width = window.innerWidth * n, e.value.height = window.innerHeight * n, o = e.value.getContext("2d") ?? null)
        };
      return W(() => {
        window.innerWidth < 1024 || (window.addEventListener("pointermove", c), window.addEventListener("wheel", r), window.addEventListener("resize", g), d())
      }), ue(() => {
        window.removeEventListener("pointermove", c), window.removeEventListener("wheel", r), window.removeEventListener("resize", g)
      }), (s, l) => (p(), h("canvas", {
        ref_key: "canvas",
        ref: e,
        class: "canvas"
      }, null, 512))
    }
  }),
  Me = B(Ae, [
    ["__scopeId", "data-v-ad09a33d"]
  ]),
  Fe = {
    class: "showreal"
  },
  Be = {
    key: 0,
    class: "showreal__iframe"
  },
  He = ["innerHTML"],
  Ne = ["src"],
  Oe = {
    __name: "Showreal",
    setup(u) {
      const {
        base: e
      } = O(), {
        $lenis: o
      } = N();
      W(() => {
        o && o.stop()
      });

      function i() {
        o && o.start(), e.isShowShowreal = !1
      }
      return (n, a) => {
        const t = ee;
        return p(), h("div", Fe, [_(e).isIframe ? (p(), h("div", Be, [x("div", {
          innerHTML: _(e).showrealSrc,
          class: "showreal__iframe-inner"
        }, null, 8, He)])) : (p(), h("video", {
          key: 1,
          src: _(e).showrealSrc || "/first.mp4",
          class: "showreal__video",
          controls: "",
          autoplay: ""
        }, null, 8, Ne)), f(t, {
          onClick: i,
          class: "showreal__close"
        })])
      }
    }
  },
  Ve = Oe;

function Re() {
  const u = M("is-creative"),
    e = w(!1);
  let o = null;
  const i = 60;
  V(() => {
    c(), window.removeEventListener("pointermove", n), window.removeEventListener("click", a)
  }), L(e, r => {
    window.innerWidth < 1024 || (r && u.value ? document.body.style.overflow = "hidden" : u.value && (t(), document.body.style.overflow = "", F.refresh(), F.update()))
  }), L(u, r => {
    r && window.innerWidth > 1024 ? (window.addEventListener("pointermove", n), window.addEventListener("click", a), c(), t()) : (window.removeEventListener("pointermove", n), window.removeEventListener("click", a))
  });

  function n() {
    e.value || (c(), t())
  }

  function a() {
    c(), e.value = !1
  }

  function t() {
    o = setTimeout(() => {
      e.value = !0
    }, 1 * i * 1e3)
  }

  function c() {
    o && clearTimeout(o)
  }
  return {
    isWaitingScreenVisible: e
  }
}
const Ye = D({
  __name: "default",
  setup(u) {
    const e = N(),
      {
        base: o
      } = O();
    e.hook("page:finish", () => {
      window.scrollTo(0, 0)
    });
    const i = w(!0);
    _e("high", {
      high: i,
      toggleTheme: () => {
        i.value = !i.value
      }
    });
    const a = M("is-creative", () => !1);
    L(a, r => {
      r ? window.localStorage.setItem("high-theme", "true") : window.localStorage.removeItem("high-theme"), Y().then(() => {
        F.update(), F.refresh()
      })
    }), W(() => {
      localStorage.getItem("high-theme") && (a.value = !0)
    });
    const {
      isWaitingScreenVisible: t
    } = Re(), c = M("feedback-form-popup");
    return (r, g) => {
      const v = te,
        d = ge,
        s = oe,
        l = ne,
        S = ke,
        I = se,
        y = $e,
        E = Ee,
        k = Me,
        T = Ve;
      return p(), h("div", null, [f(v, {
        class: de({
          "high-theme": _(a)
        })
      }, null, 8, ["class"]), f(d), f(s), f(l), pe(r.$slots, "default"), f(S), _(c) ? (p(), H(I, {
        key: 0
      })) : $("", !0), f(y), _(t) ? (p(), H(E, {
        key: 1
      })) : $("", !0), f(k), f(U, {
        name: "showreal"
      }, {
        default: X(() => [_(o).isShowShowreal ? (p(), H(T, {
          key: 0
        })) : $("", !0)]),
        _: 1
      })])
    }
  }
});
export {
  Ye as
  default
};