/* https://ab-sl.ru/_nuxt/Ba_lGT52.js */
import {
  _ as G
} from "./BepOh2iV.js";
import {
  g as I,
  S as H
} from "./Ckjxvtsy.js";
import {
  d as J,
  p as N,
  z as K,
  o as y,
  c as E,
  a as S,
  F as P,
  r as V,
  e as Q,
  t as W,
  m as q,
  f as Z,
  s as $,
  A as ee,
  b as te,
  _ as ae
} from "./DROVP5M4.js";
import {
  u as ne
} from "./DFRH1ql4.js";

function se(f) {
  let {
    swiper: e,
    extendParams: b,
    on: l,
    emit: o,
    params: s
  } = f;
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, b({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let d, v, g = s && s.autoplay ? s.autoplay.delay : 3e3,
    h = s && s.autoplay ? s.autoplay.delay : 3e3,
    a, c = new Date().getTime,
    u, n, i, A, k, m;

  function M(t) {
    !e || e.destroyed || !e.wrapperEl || t.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", M), w())
  }
  const O = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? u = !0 : u && (h = a, u = !1);
      const t = e.autoplay.paused ? a : c + h - new Date().getTime();
      e.autoplay.timeLeft = t, o("autoplayTimeLeft", t, t / g), v = requestAnimationFrame(() => {
        O()
      })
    },
    R = () => {
      let t;
      return e.virtual && e.params.virtual.enabled ? t = e.slides.filter(r => r.classList.contains("swiper-slide-active"))[0] : t = e.slides[e.activeIndex], t ? parseInt(t.getAttribute("data-swiper-autoplay"), 10) : void 0
    },
    D = t => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(v), O();
      let p = typeof t > "u" ? e.params.autoplay.delay : t;
      g = e.params.autoplay.delay, h = e.params.autoplay.delay;
      const r = R();
      !Number.isNaN(r) && r > 0 && typeof t > "u" && (p = r, g = r, h = r), a = p;
      const _ = e.params.speed,
        F = () => {
          !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(_, !0, !0), o("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, _, !0, !0), o("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(_, !0, !0), o("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, _, !0, !0), o("autoplay")), e.params.cssMode && (c = new Date().getTime(), requestAnimationFrame(() => {
            D()
          })))
        };
      return p > 0 ? (clearTimeout(d), d = setTimeout(() => {
        F()
      }, p)) : requestAnimationFrame(() => {
        F()
      }), p
    },
    B = () => {
      e.autoplay.running = !0, D(), o("autoplayStart")
    },
    L = () => {
      e.autoplay.running = !1, clearTimeout(d), cancelAnimationFrame(v), o("autoplayStop")
    },
    T = (t, p) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(d), t || (m = !0);
      const r = () => {
        o("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", M) : w()
      };
      if (e.autoplay.paused = !0, p) {
        k && (a = e.params.autoplay.delay), k = !1, r();
        return
      }
      a = (a || e.params.autoplay.delay) - (new Date().getTime() - c), !(e.isEnd && a < 0 && !e.params.loop) && (a < 0 && (a = 0), r())
    },
    w = () => {
      e.isEnd && a < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (c = new Date().getTime(), m ? (m = !1, D(a)) : D(), e.autoplay.paused = !1, o("autoplayResume"))
    },
    x = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const t = I();
      t.visibilityState === "hidden" && (m = !0, T(!0)), t.visibilityState === "visible" && w()
    },
    z = t => {
      t.pointerType === "mouse" && (m = !0, !(e.animating || e.autoplay.paused) && T(!0))
    },
    C = t => {
      t.pointerType === "mouse" && e.autoplay.paused && w()
    },
    j = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", z), e.el.addEventListener("pointerleave", C))
    },
    U = () => {
      e.el.removeEventListener("pointerenter", z), e.el.removeEventListener("pointerleave", C)
    },
    X = () => {
      I().addEventListener("visibilitychange", x)
    },
    Y = () => {
      I().removeEventListener("visibilitychange", x)
    };
  l("init", () => {
    e.params.autoplay.enabled && (j(), X(), c = new Date().getTime(), B())
  }), l("destroy", () => {
    U(), Y(), e.autoplay.running && L()
  }), l("beforeTransitionStart", (t, p, r) => {
    e.destroyed || !e.autoplay.running || (r || !e.params.autoplay.disableOnInteraction ? T(!0, !0) : L())
  }), l("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        L();
        return
      }
      n = !0, i = !1, m = !1, A = setTimeout(() => {
        m = !0, i = !0, T(!0)
      }, 200)
    }
  }), l("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !n)) {
      if (clearTimeout(A), clearTimeout(d), e.params.autoplay.disableOnInteraction) {
        i = !1, n = !1;
        return
      }
      i && e.params.cssMode && w(), i = !1, n = !1
    }
  }), l("slideChange", () => {
    e.destroyed || !e.autoplay.running || (k = !0)
  }), Object.assign(e.autoplay, {
    start: B,
    stop: L,
    pause: T,
    resume: w
  })
}
const re = {
    class: "swiper-wrapper"
  },
  oe = {
    class: "photos-wrapper"
  },
  ie = {
    class: "photos container"
  },
  le = {
    key: 0,
    class: "description l1 medium"
  },
  ue = {
    name: "ImagesTicker"
  },
  pe = J({
    ...ue,
    props: {
      photos: {},
      description: {}
    },
    setup(f) {
      const e = f,
        {
          isDesktop: b
        } = N(),
        l = Z(),
        o = {
          speed: 800,
          slidesPerView: "auto",
          allowTouchMove: !1,
          loop: !0,
          modules: [se],
          autoplay: {
            delay: 1200
          }
        };
      let s = null;
      ne(() => {
        window.addEventListener("resize", g, {
          passive: !0
        }), b.value && d()
      }), K(() => {
        window.removeEventListener("resize", g), v()
      });

      function d() {
        !l.value || s || (s = new H(l.value, o))
      }

      function v() {
        s && (s.destroy(), s = null)
      }

      function g() {
        N().isDesktop.value ? d() : v()
      }
      const h = $(() => {
        if (!e.photos) return [];
        const a = 13,
          c = [2, 5, 7, 8, 12, 14, 17, 18, 20];
        let u = e.photos.slice();
        for (; u.length < a;) u.push(...e.photos);
        const n = u.slice(0, a);
        return c.forEach(i => {
          n.splice(i, 0, "empty")
        }), n
      });
      return (a, c) => {
        const u = G;
        return y(), E(P, null, [S("div", {
          ref_key: "swiperEl",
          ref: l,
          class: "swiper ticker-swiper col-18"
        }, [S("ul", re, [(y(!0), E(P, null, V(Q(h), (n, i) => (y(), E("li", {
          key: i,
          class: "swiper-slide"
        }, [n !== "empty" && typeof n != "string" ? (y(), ee(u, {
          key: 0,
          "no-lazy-load": "",
          size: "small",
          photo: n
        }, null, 8, ["photo"])) : q("", !0)]))), 128))])], 512), S("div", oe, [S("ul", ie, [(y(!0), E(P, null, V(f.photos, (n, i) => (y(), E("li", {
          key: i,
          class: "photos-item"
        }, [te(u, {
          "no-lazy-load": "",
          size: "medium",
          photo: n
        }, null, 8, ["photo"])]))), 128))]), f.description ? (y(), E("p", le, W(f.description), 1)) : q("", !0)])], 64)
      }
    }
  }),
  fe = ae(pe, [
    ["__scopeId", "data-v-4255d7bb"]
  ]);
export {
  fe as _
};