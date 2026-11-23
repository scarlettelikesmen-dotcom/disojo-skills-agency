/* https://pictoric.com.ua/_nuxt/Select.148f86b8.js */
import {
  d as q,
  u as W,
  f as Z,
  o as J,
  a as ee,
  b as E,
  c as D,
  g as d,
  j as b,
  n as B,
  F as Y,
  h as j,
  t as O,
  k as te,
  B as I,
  X as ae,
  _ as H,
  w as ne,
  D as se,
  i as re,
  r as R,
  s as oe
} from "./entry.6cb2d70d.js";
import {
  a as A,
  S as le
} from "./pagination.9e265203.js";
import {
  _ as ie
} from "./Caret.8726756f.js";
const ue = {
  "en-US": {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
  },
  "uk-UA": {
    0: "січ",
    1: "лют",
    2: "бер",
    3: "квіт",
    4: "трав",
    5: "черв",
    6: "лип",
    7: "серп",
    8: "вер",
    9: "жовт",
    10: "лист",
    11: "груд"
  }
};

function xe(i, e) {
  var t;
  const l = new Date(i),
    v = (e == null ? void 0 : e.withYear) ?? !0,
    n = (e == null ? void 0 : e.locale) ?? "en-US",
    s = l.getDate().toString().padStart(2, "0"),
    o = l.getMonth(),
    g = ((t = ue[n]) == null ? void 0 : t[o]) ?? l.toLocaleString(n, {
      month: "short"
    }),
    m = l.getFullYear();
  let _ = `${s} ${g}`;
  return v && (_ += `, ${m}`), _
}

function ce(i) {
  let {
    swiper: e,
    extendParams: l,
    on: v,
    emit: n,
    params: s
  } = i;
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, l({
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
  let o, g, m = s && s.autoplay ? s.autoplay.delay : 3e3,
    _ = s && s.autoplay ? s.autoplay.delay : 3e3,
    t, f = new Date().getTime,
    u, c, r, h, w, p;

  function k(a) {
    !e || e.destroyed || !e.wrapperEl || a.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", k), S())
  }
  const C = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? u = !0 : u && (_ = t, u = !1);
      const a = e.autoplay.paused ? t : f + _ - new Date().getTime();
      e.autoplay.timeLeft = a, n("autoplayTimeLeft", a, a / m), g = requestAnimationFrame(() => {
        C()
      })
    },
    z = () => {
      let a;
      return e.virtual && e.params.virtual.enabled ? a = e.slides.filter(y => y.classList.contains("swiper-slide-active"))[0] : a = e.slides[e.activeIndex], a ? parseInt(a.getAttribute("data-swiper-autoplay"), 10) : void 0
    },
    M = a => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(g), C();
      let T = typeof a > "u" ? e.params.autoplay.delay : a;
      m = e.params.autoplay.delay, _ = e.params.autoplay.delay;
      const y = z();
      !Number.isNaN(y) && y > 0 && typeof a > "u" && (T = y, m = y, _ = y), t = T;
      const x = e.params.speed,
        U = () => {
          !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(x, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, x, !0, !0), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(x, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, x, !0, !0), n("autoplay")), e.params.cssMode && (f = new Date().getTime(), requestAnimationFrame(() => {
            M()
          })))
        };
      return T > 0 ? (clearTimeout(o), o = setTimeout(() => {
        U()
      }, T)) : requestAnimationFrame(() => {
        U()
      }), T
    },
    P = () => {
      e.autoplay.running = !0, M(), n("autoplayStart")
    },
    V = () => {
      e.autoplay.running = !1, clearTimeout(o), cancelAnimationFrame(g), n("autoplayStop")
    },
    L = (a, T) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), a || (p = !0);
      const y = () => {
        n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", k) : S()
      };
      if (e.autoplay.paused = !0, T) {
        w && (t = e.params.autoplay.delay), w = !1, y();
        return
      }
      t = (t || e.params.autoplay.delay) - (new Date().getTime() - f), !(e.isEnd && t < 0 && !e.params.loop) && (t < 0 && (t = 0), y())
    },
    S = () => {
      e.isEnd && t < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = new Date().getTime(), p ? (p = !1, M(t)) : M(), e.autoplay.paused = !1, n("autoplayResume"))
    },
    F = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const a = A();
      a.visibilityState === "hidden" && (p = !0, L(!0)), a.visibilityState === "visible" && S()
    },
    $ = a => {
      a.pointerType === "mouse" && (p = !0, !(e.animating || e.autoplay.paused) && L(!0))
    },
    N = a => {
      a.pointerType === "mouse" && e.autoplay.paused && S()
    },
    G = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", $), e.el.addEventListener("pointerleave", N))
    },
    X = () => {
      e.el.removeEventListener("pointerenter", $), e.el.removeEventListener("pointerleave", N)
    },
    K = () => {
      A().addEventListener("visibilitychange", F)
    },
    Q = () => {
      A().removeEventListener("visibilitychange", F)
    };
  v("init", () => {
    e.params.autoplay.enabled && (G(), K(), f = new Date().getTime(), P())
  }), v("destroy", () => {
    X(), Q(), e.autoplay.running && V()
  }), v("beforeTransitionStart", (a, T, y) => {
    e.destroyed || !e.autoplay.running || (y || !e.params.autoplay.disableOnInteraction ? L(!0, !0) : V())
  }), v("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        V();
        return
      }
      c = !0, r = !1, p = !1, h = setTimeout(() => {
        p = !0, r = !0, L(!0)
      }, 200)
    }
  }), v("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !c)) {
      if (clearTimeout(h), clearTimeout(o), e.params.autoplay.disableOnInteraction) {
        r = !1, c = !1;
        return
      }
      r && e.params.cssMode && S(), r = !1, c = !1
    }
  }), v("slideChange", () => {
    e.destroyed || !e.autoplay.running || (w = !0)
  }), Object.assign(e.autoplay, {
    start: P,
    stop: V,
    pause: L,
    resume: S
  })
}
const pe = {
    key: 0,
    class: "partners"
  },
  de = ["innerHTML"],
  me = {
    id: "partners-swiper",
    class: "swiper"
  },
  fe = {
    class: "partners-list__thumb"
  },
  ye = ["src"],
  ve = {
    class: "partners-list__text t2-xb"
  },
  _e = q({
    __name: "Partners",
    props: {
      data: {}
    },
    setup(i) {
      var t, f;
      const e = i,
        {
          isDesktop: l
        } = W(),
        n = (f = (t = Z("commonData").value) == null ? void 0 : t.titles) == null ? void 0 : f.partnersTitle,
        s = I(() => l.value ? 5 : 2),
        o = I(() => {
          var u, c, r, h, w, p;
          return (c = (u = e.data) == null ? void 0 : u.partners) != null && c.length ? e.data.partners.length <= s.value ? (r = e.data) == null ? void 0 : r.partners : ((h = e.data) == null ? void 0 : h.partners.length) > s.value && ((w = e.data) == null ? void 0 : w.partners.length) < s.value * 2 ? [...e.data.partners, ...e.data.partners] : (p = e.data) == null ? void 0 : p.partners : []
        }),
        g = I(() => {
          var u;
          return (((u = o.value) == null ? void 0 : u.length) ?? 0) >= s.value * 2
        });
      let m;

      function _() {
        var c, r;
        if (!((r = (c = e.data) == null ? void 0 : c.partners) != null && r.length)) return;
        const u = {
          slidesPerView: s.value,
          spaceBetween: 8,
          modules: [ce],
          slidesPerGroup: l.value ? 1 : 2,
          loop: g.value,
          breakpoints: {
            1024: {
              spaceBetween: 16
            }
          },
          ...l.value ? {} : {
            autoplay: {
              delay: 2500,
              disableOnInteraction: !1
            }
          }
        };
        ae(() => {
          m = new le("#partners-swiper", u)
        })
      }
      return J(_), ee(() => m == null ? void 0 : m.destroy()), (u, c) => {
        var r, h, w;
        return (h = (r = i.data) == null ? void 0 : r.partners) != null && h.length ? (E(), D("section", pe, [d("h2", {
          class: "partners-title h4 anim-title",
          innerHTML: i.data.title || b(n)
        }, null, 8, de), d("div", me, [d("ul", {
          class: B([{
            center: (((w = b(o)) == null ? void 0 : w.length) ?? 0) < b(s)
          }, "partners-list swiper-wrapper"])
        }, [(E(!0), D(Y, null, j(b(o), (p, k) => (E(), D("li", {
          key: k,
          class: "partners-list__item swiper-slide"
        }, [d("div", fe, [d("img", {
          class: "partners-list__image",
          src: p.logo.original,
          alt: "image"
        }, null, 8, ye)]), d("p", ve, O(p.title), 1)]))), 128))], 2)])])) : te("", !0)
      }
    }
  });
const ke = H(_e, [
    ["__scopeId", "data-v-e57808b2"]
  ]),
  ge = {
    class: "select"
  },
  he = {
    class: "select-icon"
  },
  we = {
    class: "options"
  },
  Te = ["onClick"],
  Se = {
    class: "error"
  },
  be = q({
    __name: "Select",
    props: {
      modelValue: {},
      options: {},
      placeholder: {},
      error: {
        type: [String, Boolean]
      },
      errorMessage: {}
    },
    emits: ["update:modelValue"],
    setup(i, {
      emit: e
    }) {
      const l = i,
        v = e,
        n = R(!1),
        s = R(null);
      ne(() => l.modelValue, t => {
        t || (s.value = null)
      }), J(() => {
        l.modelValue && (s.value = l.options.find(t => t.value === l.modelValue) || null), document.addEventListener("click", g)
      }), se(() => {
        document.removeEventListener("click", g)
      });
      const o = oe();

      function g(t) {
        if (!o.value) return;
        const f = t.target;
        f !== o.value && !o.value.contains(f) && (n.value = !1)
      }

      function m() {
        n.value = !n.value
      }

      function _(t) {
        s.value = t, n.value = !1, v("update:modelValue", t.value)
      }
      return (t, f) => {
        var c;
        const u = ie;
        return E(), D("div", {
          ref_key: "selectRef",
          ref: o,
          class: B(["select-wrapper", {
            active: b(n)
          }])
        }, [d("div", ge, [d("div", {
          class: "select-placeholder t2-xb",
          onClick: m
        }, [d("span", null, O(((c = b(s)) == null ? void 0 : c.title) || i.placeholder), 1), d("span", he, [re(u, {
          class: "inner-svg"
        })])]), d("div", we, [(E(!0), D(Y, null, j(i.options, (r, h) => (E(), D("button", {
          key: h,
          class: "options__item t2-xb",
          type: "button",
          onClick: w => _(r)
        }, O(r.title), 9, Te))), 128))])]), d("div", {
          class: B(["t2-xb error-wrapper", {
            show: i.error
          }])
        }, [d("p", Se, O(i.errorMessage || i.error || "Error"), 1)], 2)], 2)
      }
    }
  });
const Me = H(be, [
  ["__scopeId", "data-v-801949f4"]
]);
export {
  Me as _, ke as a, xe as f
};