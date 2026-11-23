/* https://ab-sl.ru/_nuxt/BaAJSHai.js */
import {
  _ as te
} from "./BepOh2iV.js";
import {
  d as V,
  u as G,
  h as X,
  p as ue,
  z as Z,
  c as k,
  a as t,
  F as N,
  r as W,
  t as v,
  e as s,
  A as q,
  y as O,
  m as P,
  b as x,
  x as K,
  B as ee,
  q as z,
  v as U,
  o as d,
  n as Y,
  f as T,
  _ as F,
  l as fe,
  C as _e,
  s as ce,
  D as ge,
  S as we,
  g as ye,
  w as ke,
  i as $e
} from "./DROVP5M4.js";
import {
  _ as xe,
  a as be
} from "./v0Ybna-L.js";
import {
  _ as Te,
  a as Se
} from "./CEJKH9bI.js";
import {
  s as he
} from "./DXpihNzX.js";
import {
  u as J,
  s as Me
} from "./DFRH1ql4.js";
import {
  t as de
} from "./BrC1mN93.js";
import {
  _ as Ce
} from "./Cj45ZiUy.js";
import {
  _ as se
} from "./Ce7eQ4le.js";
import {
  _ as pe,
  p as Pe
} from "./DCyA0qmY.js";
import {
  n as le,
  e as re,
  S as me
} from "./Ckjxvtsy.js";
import {
  _ as Ee
} from "./CtZNtPPQ.js";

function Ae(o) {
  let {
    swiper: e,
    extendParams: g,
    emit: M,
    once: C
  } = o;
  g({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: .02
    }
  });

  function m() {
    if (e.params.cssMode) return;
    const c = e.getTranslate();
    e.setTranslate(c), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
      currentPos: e.rtl ? e.translate : -e.translate
    })
  }

  function f() {
    if (e.params.cssMode) return;
    const {
      touchEventsData: c,
      touches: b
    } = e;
    c.velocities.length === 0 && c.velocities.push({
      position: b[e.isHorizontal() ? "startX" : "startY"],
      time: c.touchStartTime
    }), c.velocities.push({
      position: b[e.isHorizontal() ? "currentX" : "currentY"],
      time: le()
    })
  }

  function a(c) {
    let {
      currentPos: b
    } = c;
    if (e.params.cssMode) return;
    const {
      params: n,
      wrapperEl: l,
      rtlTranslate: u,
      snapGrid: h,
      touchEventsData: $
    } = e, y = le() - $.touchStartTime;
    if (b < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return
    }
    if (b > -e.maxTranslate()) {
      e.slides.length < h.length ? e.slideTo(h.length - 1) : e.slideTo(e.slides.length - 1);
      return
    }
    if (n.freeMode.momentum) {
      if ($.velocities.length > 1) {
        const r = $.velocities.pop(),
          p = $.velocities.pop(),
          D = r.position - p.position,
          R = r.time - p.time;
        e.velocity = D / R, e.velocity /= 2, Math.abs(e.velocity) < n.freeMode.minimumVelocity && (e.velocity = 0), (R > 150 || le() - r.time > 300) && (e.velocity = 0)
      } else e.velocity = 0;
      e.velocity *= n.freeMode.momentumVelocityRatio, $.velocities.length = 0;
      let w = 1e3 * n.freeMode.momentumRatio;
      const S = e.velocity * w;
      let i = e.translate + S;
      u && (i = -i);
      let A = !1,
        L;
      const H = Math.abs(e.velocity) * 20 * n.freeMode.momentumBounceRatio;
      let B;
      if (i < e.maxTranslate()) n.freeMode.momentumBounce ? (i + e.maxTranslate() < -H && (i = e.maxTranslate() - H), L = e.maxTranslate(), A = !0, $.allowMomentumBounce = !0) : i = e.maxTranslate(), n.loop && n.centeredSlides && (B = !0);
      else if (i > e.minTranslate()) n.freeMode.momentumBounce ? (i - e.minTranslate() > H && (i = e.minTranslate() + H), L = e.minTranslate(), A = !0, $.allowMomentumBounce = !0) : i = e.minTranslate(), n.loop && n.centeredSlides && (B = !0);
      else if (n.freeMode.sticky) {
        let r;
        for (let p = 0; p < h.length; p += 1)
          if (h[p] > -i) {
            r = p;
            break
          } Math.abs(h[r] - i) < Math.abs(h[r - 1] - i) || e.swipeDirection === "next" ? i = h[r] : i = h[r - 1], i = -i
      }
      if (B && C("transitionEnd", () => {
          e.loopFix()
        }), e.velocity !== 0) {
        if (u ? w = Math.abs((-i - e.translate) / e.velocity) : w = Math.abs((i - e.translate) / e.velocity), n.freeMode.sticky) {
          const r = Math.abs((u ? -i : i) - e.translate),
            p = e.slidesSizesGrid[e.activeIndex];
          r < p ? w = n.speed : r < 2 * p ? w = n.speed * 1.5 : w = n.speed * 2.5
        }
      } else if (n.freeMode.sticky) {
        e.slideToClosest();
        return
      }
      n.freeMode.momentumBounce && A ? (e.updateProgress(L), e.setTransition(w), e.setTranslate(i), e.transitionStart(!0, e.swipeDirection), e.animating = !0, re(l, () => {
        !e || e.destroyed || !$.allowMomentumBounce || (M("momentumBounce"), e.setTransition(n.speed), setTimeout(() => {
          e.setTranslate(L), re(l, () => {
            !e || e.destroyed || e.transitionEnd()
          })
        }, 0))
      })) : e.velocity ? (M("_freeModeNoMomentumRelease"), e.updateProgress(i), e.setTransition(w), e.setTranslate(i), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, re(l, () => {
        !e || e.destroyed || e.transitionEnd()
      }))) : e.updateProgress(i), e.updateActiveIndex(), e.updateSlidesClasses()
    } else if (n.freeMode.sticky) {
      e.slideToClosest();
      return
    } else n.freeMode && M("_freeModeNoMomentumRelease");
    (!n.freeMode.momentum || y >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
  }
  Object.assign(e, {
    freeMode: {
      onTouchStart: m,
      onTouchMove: f,
      onTouchEnd: a
    }
  })
}

function ve(o) {
  return typeof o == "string"
}
const Be = {
    key: 0,
    class: "slider-wrapper"
  },
  De = ["src", "preload"],
  Le = {
    key: 1,
    class: "slider-wrapper"
  },
  je = ["src", "preload"],
  He = {
    key: 0,
    class: "controls-inner"
  },
  Re = {
    class: "slide-info"
  },
  ze = {
    class: "p1 slide-location content-wrapper"
  },
  Ne = {
    class: "current-content"
  },
  Ve = {
    class: "secondary-sup current-content"
  },
  qe = {
    class: "next-wrapper"
  },
  We = {
    class: "next-content"
  },
  Oe = {
    class: "secondary-sup next-content"
  },
  Ye = {
    class: "slide-name content-wrapper"
  },
  Fe = {
    class: "next-wrapper"
  },
  Ie = {
    class: "next-content"
  },
  Ue = {
    class: "p1 slide-area content-wrapper"
  },
  Ge = {
    class: "current-content"
  },
  Xe = {
    class: "next-wrapper"
  },
  Ze = {
    class: "next-content"
  },
  Je = {
    class: "slider-navigation"
  },
  Ke = {
    class: "slider-buttons"
  },
  Qe = ["disabled"],
  et = ["disabled"],
  tt = {
    class: "p1 slide-numbers"
  },
  st = {
    class: "numbers-wrapper"
  },
  ot = {
    class: "slide-number"
  },
  nt = {
    class: "number current-content"
  },
  at = {
    class: "number next-wrapper next-content"
  },
  it = {
    name: "MainHero"
  },
  lt = V({
    ...it,
    props: {
      slides: {},
      aboutTitleHeight: {},
      aboutTitleTopOffset: {}
    },
    setup(o) {
      const e = o,
        {
          $gsap: g,
          $SplitText: M
        } = G(),
        C = X(),
        m = ue(),
        f = T(),
        a = T(),
        c = T(),
        b = T(0),
        n = T(0),
        l = T(1),
        u = T(0),
        h = T(1),
        $ = T(!1);
      let _;

      function y() {
        _ && clearInterval(_), _ = he(w, 1e4)
      }
      async function w(r) {
        r && y(), e.slides && (i("pause"), await z(), A("next"), await g.fromTo(b, {
          value: 0
        }, {
          value: 1,
          duration: 1.2,
          ease: "custom",
          onComplete: () => {
            b.value = 0
          }
        }), n.value = n.value === e?.slides?.length - 1 ? 0 : n.value + 1, l.value = l.value === e?.slides?.length - 1 ? 0 : l.value + 1, await z(), i("play"))
      }
      async function S() {
        y(), e.slides && (i("pause"), await z(), A("prev"), n.value = n.value === 0 ? e?.slides.length - 1 : n.value - 1, l.value = l.value === 0 ? e?.slides.length - 1 : l.value - 1, await z(), i("play"), await g.fromTo(b, {
          value: 1
        }, {
          value: 0,
          duration: 1.2,
          ease: "custom"
        }))
      }

      function i(r) {
        const p = a.value?.querySelectorAll(".slide");
        if (!p?.length) return;
        const D = p[n.value]?.querySelector("video");
        D && (r === "pause" && D.pause(), r === "play" && D.play())
      }
      async function A(r) {
        if (!e.slides) return;
        $.value = !0, r === "prev" ? h.value = u.value === 0 ? e.slides.length - 1 : u.value - 1 : h.value = u.value === e.slides.length - 1 ? 0 : u.value + 1;
        const p = new M(".current-content", {
          type: "words,chars",
          tag: "span",
          charsClass: "split-char"
        });
        g.set(p.words, {
          perspective: 1e3
        });
        const D = g.timeline({}),
          R = .6,
          Q = R / p.words.length;
        p.words.forEach((oe, ne) => {
          const ae = oe.querySelectorAll(".split-char"),
            ie = g.timeline().fromTo([...ae], {
              willChange: "transform",
              opacity: 1,
              rotationY: 0
            }, {
              duration: Q,
              ease: "expo",
              opacity: 0,
              rotationY: 90,
              stagger: {
                each: .04,
                from: "end"
              }
            });
          D.add(ie, `previous+=${ne*Q}`)
        }), await D, g.set(".next-wrapper", {
          opacity: 1
        });
        const I = new M(".next-content", {
          type: "words,chars",
          tag: "span",
          charsClass: "split-char"
        });
        g.set(I.words, {
          perspective: 1e3
        });
        const E = g.timeline({}),
          j = R / I.words.length;
        I.words.forEach((oe, ne) => {
          const ae = oe.querySelectorAll(".split-char"),
            ie = g.timeline().fromTo([...ae], {
              willChange: "transform",
              opacity: 0,
              rotationY: 90
            }, {
              duration: j,
              ease: "expo",
              opacity: 1,
              rotationY: 0,
              stagger: {
                each: .04,
                from: "end"
              }
            });
          E.add(ie, `previous+=${ne*j}`)
        }), await E, p.revert(), I.revert(), r === "prev" ? u.value = u.value === 0 ? e.slides.length - 1 : u.value - 1 : u.value = u.value === e.slides.length - 1 ? 0 : u.value + 1, g.set(".next-wrapper", {
          clearProps: "all"
        }), $.value = !1
      }

      function L() {
        !a.value || !f.value || g.to(a.value, {
          scrollTrigger: {
            trigger: f.value,
            start: 0,
            end: "bottom 60%",
            scrub: !0,
            onLeave: () => {
              i("pause"), _ && clearInterval(_)
            },
            onEnterBack: () => {
              i("play"), _ = he(w, 1e4)
            }
          },
          autoAlpha: 0
        })
      }

      function H() {
        if (!c.value) return;
        const r = parseInt(getComputedStyle(document.querySelector(".about-section")).paddingTop);
        g.to(c.value, {
          scrollTrigger: {
            start: 0,
            end: r,
            scrub: !0
          },
          "--color": "#9e9e9e",
          ease: "none"
        })
      }

      function B(r) {
        const p = r.toString();
        return "0".repeat(Math.max(2 - p.length, 0)) + p
      }
      return J(async () => {
        i("play"), H(), y(), await z(), L()
      }), Z(() => {
        clearInterval(_)
      }), (r, p) => {
        const D = te,
          R = U,
          Q = xe,
          I = Te;
        return d(), k("section", {
          ref_key: "section",
          ref: f,
          class: "hero",
          style: ee(`--progress: ${s(b)}`)
        }, [t("div", {
          ref_key: "sliderEl",
          ref: a,
          class: "slider"
        }, [(d(!0), k(N, null, W(o.slides, (E, j) => (d(), k("div", {
          key: j,
          class: Y(["slide", {
            current: s(n) === j,
            next: s(l) === j
          }])
        }, [s(m) ? (d(), k("div", Be, [s(ve)(E.media) ? (d(), k("video", {
          key: 0,
          src: `${E.media}#t=0.01`,
          preload: s(l) === j || j === 0 ? "metadata" : "none",
          loop: "",
          playsinline: "",
          muted: ""
        }, null, 8, De)) : P("", !0), typeof E.media != "string" && E.media ? (d(), q(D, {
          key: 1,
          "no-lazy-load": "",
          photo: E.media
        }, null, 8, ["photo"])) : P("", !0)])) : P("", !0), s(m) ? P("", !0) : (d(), k("div", Le, [s(ve)(E.mediaMob) ? (d(), k("video", {
          key: 0,
          src: `${E.mediaMob}#t=0.01`,
          preload: s(l) === j || j === 0 ? "metadata" : "none",
          loop: "",
          playsinline: "",
          muted: ""
        }, null, 8, je)) : P("", !0), typeof E.mediaMob != "string" && E.mediaMob ? (d(), q(D, {
          key: 1,
          "no-lazy-load": "",
          photo: E?.mediaMob
        }, null, 8, ["photo"])) : P("", !0)]))], 2))), 128)), p[1] || (p[1] = t("div", {
          class: "overlay-flat"
        }, null, -1)), p[2] || (p[2] = t("div", {
          class: "overlay-gradient"
        }, null, -1)), p[3] || (p[3] = t("div", {
          class: "overlay-gradient"
        }, null, -1))], 512), t("div", {
          ref_key: "controlsEl",
          ref: c,
          class: "controls container",
          style: ee(`--about-title-height: ${o.aboutTitleHeight}; --about-title-offset: ${o.aboutTitleTopOffset}`)
        }, [o.slides ? (d(), k("div", He, [t("div", Re, [t("div", ze, [t("p", null, [t("span", Ne, v(o.slides[s(u)]?.location), 1), t("span", Ve, " [" + v(o.slides[s(u)]?.year) + "] ", 1)]), t("p", qe, [t("span", We, v(o.slides[s(h)]?.location), 1), t("span", Oe, " [" + v(o.slides[s(h)]?.year) + "] ", 1)])]), t("div", Ye, [t("p", null, [e.slides ? (d(), q(R, {
          key: 0,
          to: s(C)("projects") + "/" + e.slides[s(u)].slug,
          class: "slide-title p1"
        }, {
          default: O(() => [t("span", {
            class: Y(["current-content", {
              hidden: s($)
            }])
          }, v(o.slides[s(u)]?.name?.trim()), 3), p[4] || (p[4] = t("span", {
            class: "p1 current-content"
          }, ",", -1))]),
          _: 1
        }, 8, ["to"])) : P("", !0)]), t("p", Fe, [e.slides ? (d(), q(R, {
          key: 0,
          to: s(C)("projects") + "/" + e.slides[s(h)].slug,
          class: "slide-title p1"
        }, {
          default: O(() => [t("span", Ie, v(o.slides[s(h)]?.name?.trim()), 1), p[5] || (p[5] = t("span", {
            class: "p1 next-content"
          }, ",", -1))]),
          _: 1
        }, 8, ["to"])) : P("", !0)])]), t("div", Ue, [t("p", null, [t("span", Ge, v(o.slides[s(u)]?.area) + " " + v(r.$t("m")), 1), p[6] || (p[6] = t("span", {
          class: "primary-sup current-content"
        }, "2", -1))]), t("p", Xe, [t("span", Ze, v(o.slides[s(h)]?.area) + " " + v(r.$t("m")), 1), p[7] || (p[7] = t("span", {
          class: "primary-sup next-content"
        }, "2", -1))])])]), t("div", Je, [t("div", Ke, [t("button", {
          disabled: s($),
          class: "slider-button",
          onClick: S
        }, [x(Q)], 8, Qe), t("button", {
          disabled: s($),
          class: "slider-button slider-button--next",
          onClick: p[0] || (p[0] = E => w(!0))
        }, [x(I)], 8, et)]), t("div", tt, [t("div", st, [t("p", ot, [p[8] || (p[8] = K(" 00 ", -1)), t("span", nt, v(B(s(u) + 1)), 1), t("span", at, v(B(s(h) + 1)), 1)])]), K(" / " + v(B(o.slides.length)), 1)])])])) : P("", !0)], 4)], 4)
      }
    }
  }),
  rt = F(lt, [
    ["__scopeId", "data-v-bf87cdd7"]
  ]),
  ct = {
    class: "content col-18"
  },
  ut = {
    class: "title-wrapper"
  },
  dt = {
    class: "h1 title"
  },
  pt = {
    class: "title-line"
  },
  mt = {
    class: "l1 title-caption"
  },
  ht = {
    class: "photo-inner photo-inner--first"
  },
  vt = {
    class: "photo-inner photo-inner--hidden"
  },
  ft = {
    class: "h2 photo-title"
  },
  _t = {
    name: "MainAbout"
  },
  gt = V({
    ..._t,
    props: {
      data: {}
    },
    emits: ["setProps"],
    setup(o, {
      emit: e
    }) {
      const g = e,
        {
          $gsap: M,
          $ScrollTrigger: C
        } = G(),
        m = fe("headerTheme", () => "light"),
        f = T(),
        a = T(),
        c = T();
      let b;
      _e(() => {
        $(), window.addEventListener("resize", $)
      }), J(() => {
        h(), n(), l()
      }), Z(() => window.removeEventListener("resize", $));

      function n() {
        !f.value || !a.value || !c.value || (M.to(f.value, {
          scrollTrigger: {
            trigger: a.value,
            start: 0,
            end: "top top",
            scrub: !0,
            onLeave: () => m.value = "dark",
            onEnterBack: () => m.value = "light"
          },
          color: "#9e9e9e",
          ease: "none"
        }), M.to(c.value, {
          scrollTrigger: {
            trigger: a.value,
            start: "top 20%",
            end: "+=500",
            scrub: !0
          },
          y: 0,
          yPercent: 0,
          ease: "none"
        }))
      }

      function l() {
        if (!c.value || !a.value || !f.value) return;
        const _ = c.value.querySelectorAll(".photo-inner"),
          y = c.value;
        if (!_.length) return;
        const w = parseInt(getComputedStyle(f.value).paddingTop) - window.innerHeight * .2 + 500,
          S = f.value.getBoundingClientRect().height - window.innerHeight;
        M.matchMedia().add({
          isDesktop: "(min-width: 1025px)",
          isMobile: "(max-width: 1024px)"
        }, A => {
          const L = A.conditions?.isDesktop;
          M.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: a.value,
              start: w,
              end: S,
              scrub: !0
            }
          }).fromTo(y, {
            "clip-path": L ? "polygon(39.72% 23.08%, 60.28% 23.08%, 60.28% 76.92%, 39.72% 76.92%)" : "polygon(28.27% 34.85%, 71.73% 34.85%, 71.73% 65.15%, 28.27% 65.15%)"
          }, {
            ease: "sine",
            "clip-path": "polygon(50% 10%, 50% 40%, 50% 60%, 50% 90%)"
          }, 0).to(_[0], {
            scale: 1.2,
            ease: "sine"
          }, 0).add(() => {
            _[0].classList.toggle("photo-inner--hidden"), _[1].classList.toggle("photo-inner--hidden")
          }, ">").to(y, {
            ease: "sine.in",
            startAt: {
              "clip-path": "polygon(50% 40%, 50% 10%, 50% 90%, 50% 60%)"
            },
            "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          }, "<").from(_[1], {
            ease: "sine.in",
            scale: 1.2
          }, "<").then(() => {
            u()
          })
        })
      }

      function u() {
        M.to(".about-section .photo-title", {
          scrollTrigger: {
            trigger: ".about-section",
            start: "98% bottom",
            toggleActions: "play none none reverse",
            onEnter: () => {
              b && b.restart(), m.value = "light"
            },
            onLeaveBack: () => {
              b && b.reverse(), m.value = "dark"
            }
          },
          autoAlpha: 1,
          duration: .4
        }), C.create({
          trigger: ".projects",
          start: "top bottom",
          end: "top top",
          onEnter: () => {
            a.value && a.value.classList.add("fixed")
          },
          onLeave: () => {
            a.value && a.value.classList.remove("fixed")
          },
          onEnterBack: () => {
            a.value && a.value.classList.add("fixed")
          },
          onLeaveBack: () => {
            a.value && a.value.classList.remove("fixed")
          }
        })
      }

      function h() {
        const _ = document.querySelector(".about-section .photo-title");
        _ && (b = de(_, {
          paused: !0,
          withoutScrollTrigger: !0
        }))
      }

      function $() {
        if (!f.value) return;
        const _ = f.value.querySelector(".title-wrapper");
        if (!_) return;
        const y = `${_.clientHeight/2}px`;
        f.value.style.setProperty("--title-height", y);
        const w = `${_.offsetTop-_.parentElement.offsetTop}px`;
        g("setProps", {
          aboutTitleHeight: y,
          aboutTitleTopOffset: w
        })
      }
      return (_, y) => {
        const w = te;
        return o.data ? (d(), k("section", {
          key: 0,
          ref_key: "section",
          ref: f,
          class: "about-section"
        }, [t("div", {
          ref_key: "inner",
          ref: a,
          class: "about-inner container"
        }, [t("div", ct, [t("div", ut, [t("p", dt, [K(v(_.$t("crafting")) + " ", 1), t("span", pt, [t("span", null, v(_.$t("iconic")), 1), t("span", null, v(_.$t("spaces")), 1)])]), t("p", mt, v(_.$t("scroll_down")), 1)]), t("div", {
          ref_key: "photoEl",
          ref: c,
          class: "photo"
        }, [t("div", ht, [x(w, {
          "no-lazy-load": "",
          photo: o.data.front_view
        }, null, 8, ["photo"])]), t("div", vt, [x(w, {
          "no-lazy-load": "",
          photo: o.data.back_view
        }, null, 8, ["photo"]), y[0] || (y[0] = t("div", {
          class: "overlay-flat"
        }, null, -1)), y[1] || (y[1] = t("div", {
          class: "overlay-gradient"
        }, null, -1))]), t("p", ft, v(o.data.title), 1)], 512)])], 512)], 512)) : P("", !0)
      }
    }
  }),
  wt = F(gt, [
    ["__scopeId", "data-v-2e5727da"]
  ]),
  yt = {
    class: "text"
  },
  kt = {
    name: "CommonTab"
  },
  $t = V({
    ...kt,
    props: {
      text: {},
      active: {
        type: Boolean
      }
    },
    setup(o) {
      return (e, g) => (d(), k("button", {
        class: Y(["l1--link tab", {
          "tab--active": o.active
        }])
      }, [g[0] || (g[0] = t("svg", {
        class: "left-side",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none"
      }, [t("path", {
        d: "M42.6668 0C36.2076 0 30.3819 3.88381 27.8976 9.84616L16.1027 38.1538C13.6184 44.1162 7.79271 48 1.3335 48H48V0H42.6668Z",
        fill: "#525151"
      })], -1)), t("span", yt, v(o.text), 1), g[1] || (g[1] = t("svg", {
        class: "right-side",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none"
      }, [t("path", {
        d: "M0 48H46.6668C40.2076 48 34.3819 44.1162 31.8976 38.1538L20.1027 9.84615C17.6184 3.8838 11.7927 0 5.33351 0H0V48Z",
        fill: "#525151"
      })], -1))], 2))
    }
  }),
  xt = F($t, [
    ["__scopeId", "data-v-9d5caf2a"]
  ]),
  bt = {
    class: "projects"
  },
  Tt = {
    class: "wrapper"
  },
  St = {
    class: "swiper-wrapper"
  },
  Mt = {
    name: "MainProjects"
  },
  Ct = V({
    ...Mt,
    props: {
      projects: {},
      tabs: {}
    },
    setup(o) {
      const e = o,
        {
          $gsap: g
        } = G(),
        M = X(),
        {
          isDesktop: C
        } = ue(),
        m = T(),
        f = T(),
        a = T(0),
        c = T(e.tabs && e.tabs[0] && e.tabs[0].id),
        b = ce(() => e?.projects?.filter(w => c.value && w?.category.id === c.value)),
        n = {
          slidesPerView: "auto",
          speed: 700,
          preventClicks: !0,
          touchStartPreventDefault: !1,
          grabCursor: !0,
          freeMode: {
            enabled: !0
          },
          modules: [Ae],
          touchEventsTarget: "container"
        };
      let l;

      function u() {
        m.value && (l = new me(m.value, n))
      }

      function h() {
        C.value && !l && u(), !C.value && l && l && l.destroy()
      }
      async function $(y, w) {
        if (!f.value || !m.value) return;
        const S = m.value.getBoundingClientRect().height;
        g.set(f.value, {
          height: S
        }), await g.to(f.value, {
          autoAlpha: 0,
          duration: .2,
          ease: "custom"
        }), a.value = y, c.value = w, await z();
        const i = m.value.getBoundingClientRect().height;
        await g.to(f.value, {
          height: i,
          autoAlpha: 1,
          duration: .4,
          delay: .4,
          clearProps: "all",
          ease: "custom"
        })
      }

      function _() {
        const y = document.querySelector("section.projects");
        if (!y) return;
        const w = y.querySelector(".background-wrapper");
        if (!w) return;
        const S = y.getBoundingClientRect().top;
        w.style.setProperty("--offset", `-${String(S)}px`), w.style.setProperty("--height", `${String(document.body.scrollHeight)}px`)
      }
      return J(() => {
        _(), window.addEventListener("resize", h), C.value && u()
      }), Z(() => {
        l && l.destroy(), window.removeEventListener("resize", h)
      }), (y, w) => {
        const S = xt,
          i = Ce,
          A = se,
          L = U,
          H = pe;
        return d(), k("section", bt, [t("div", {
          class: Y(["tabs", {
            "tabs--first-active": s(a) === 0,
            "tabs--last-active": o.tabs && s(a) === o.tabs.length - 1
          }]),
          style: ee({
            "--max-zindex": o.tabs && o.tabs.length + 1
          })
        }, [(d(!0), k(N, null, W(o.tabs, (B, r) => (d(), q(S, {
          key: r,
          text: B.title,
          active: r === s(a),
          class: Y(["tab", {
            "tab--active": r === s(a),
            "tab--light": s(a) !== 0 && (r < s(a) && (s(a) - r) % 2 !== 0 || r > s(a) && (s(a) - r) % 2 === 0) || s(a) === 0 && r > s(a) && (r - s(a)) % 2 !== 0,
            "tab--lighter": s(a) !== 0 && (r < s(a) && (s(a) - r) % 2 === 0 || r > s(a) && (s(a) - r) % 2 !== 0) || s(a) === 0 && r > s(a) && (r - s(a)) % 2 === 0
          }]),
          style: ee({
            "--tab-zindex": o.tabs && o.tabs.length - r
          }),
          onClick: p => B.id && r !== s(a) && $(r, B.id)
        }, null, 8, ["text", "active", "style", "class", "onClick"]))), 128))], 6), t("div", Tt, [t("div", {
          ref_key: "sliderWrapper",
          ref: f
        }, [t("div", {
          ref_key: "sliderEl",
          ref: m,
          class: "slider swiper"
        }, [t("div", St, [(d(!0), k(N, null, W(s(C) ? s(b) : s(b)?.slice(0, 3), (B, r) => (d(), k("div", {
          key: r,
          class: "swiper-slide"
        }, [x(i, {
          project: B,
          "auto-height-mob": "",
          draggable: ""
        }, null, 8, ["project"])]))), 128))])], 512)], 512), x(L, {
          to: s(M)("/projects"),
          class: "projects-link"
        }, {
          default: O(() => [x(A, {
            texts: [y.$t("view"), y.$t("projects.all_projects")]
          }, null, 8, ["texts"])]),
          _: 1
        }, 8, ["to"]), w[0] || (w[0] = t("div", {
          class: "background-wrapper"
        }, null, -1))]), x(H, {
          container: s(m),
          "cursor-text": y.$t("drag"),
          "with-arrows": ""
        }, null, 8, ["container", "cursor-text"])])
      }
    }
  }),
  Pt = F(Ct, [
    ["__scopeId", "data-v-286333ab"]
  ]),
  Et = {
    class: "team-section"
  },
  At = {
    class: "bg-wrapper"
  },
  Bt = {
    class: "team-wrapper",
    "dark-header": ""
  },
  Dt = {
    class: "team-inner container"
  },
  Lt = {
    class: "photo-wrapper"
  },
  jt = {
    class: "photo"
  },
  Ht = {
    class: "logo-wrapper"
  },
  Rt = {
    class: "h1 col-18 title-first"
  },
  zt = {
    class: "h1 col-18"
  },
  Nt = {
    class: "h3 copyright"
  },
  Vt = {
    class: "h1 title-last"
  },
  qt = {
    key: 0,
    class: "slider-block"
  },
  Wt = {
    class: "slider-block-header"
  },
  Ot = {
    class: "l1 slider-block-title"
  },
  Yt = {
    class: "slider-wrapper"
  },
  Ft = {
    class: "swiper-wrapper"
  },
  It = {
    class: "team-slide-photo"
  },
  Ut = {
    class: "l1 team-slide-name"
  },
  Gt = {
    class: "l1 team-slide-position"
  },
  Xt = {
    class: "l1 last-slide-link"
  },
  Zt = {
    class: "h3 last-slide-text"
  },
  Jt = {
    name: "MainTeam"
  },
  Kt = V({
    ...Jt,
    props: {
      data: {}
    },
    setup(o) {
      const e = o,
        g = X(),
        M = T(),
        C = ce(() => new Date().getFullYear().toString().slice(-2)),
        m = T(),
        f = {
          speed: 700,
          slidesPerView: "auto",
          preventClicks: !0,
          touchStartPreventDefault: !1,
          grabCursor: !0,
          touchEventsTarget: "container"
        };
      let a;
      const c = ce(() => e.data.team?.slice().sort((n, l) => n.order === null && l.order === null ? 0 : n.order === null ? 1 : l.order === null ? -1 : n.order - l.order));

      function b() {
        m.value && (a = new me(m.value, f))
      }
      return J(() => {
        b();
        const n = document.querySelector(".team-section .photo");
        n && Pe({
          node: n,
          strength: 35
        })
      }), Z(() => a && a.destroy()), (n, l) => {
        const u = te,
          h = se,
          $ = U,
          _ = ge,
          y = U,
          w = pe;
        return d(), k("section", Et, [t("div", At, [x(u, {
          photo: o.data.photo_full
        }, null, 8, ["photo"])]), t("div", Bt, [l[1] || (l[1] = t("div", {
          class: "background-wrapper"
        }, null, -1)), t("div", Dt, [t("div", Lt, [t("div", jt, [x(u, {
          size: "medium",
          photo: o.data.photo
        }, null, 8, ["photo"])])]), l[0] || (l[0] = t("p", {
          class: "l1 section-number"
        }, "00 5", -1)), x($, {
          to: s(g)("/about"),
          class: "team-link"
        }, {
          default: O(() => [x(h, {
            texts: [n.$t("more"), n.$t("about_us")]
          }, null, 8, ["texts"])]),
          _: 1
        }, 8, ["to"]), t("div", Ht, [x(_)]), t("p", Rt, v(o.data.title_1), 1), t("p", zt, v(o.data.title_2), 1), t("p", Nt, "©." + v(s(C)), 1), t("p", Vt, v(o.data.title_3), 1)]), o.data.team && o.data.team.length > 0 ? (d(), k("div", qt, [t("div", Wt, [t("p", Ot, v(n.$t("team")), 1), x(y, {
          to: {
            path: s(g)("/about"),
            hash: "#team"
          },
          class: "l1--link slider-block-link"
        }, {
          default: O(() => [K(v(n.$t("view_all")), 1)]),
          _: 1
        }, 8, ["to"])]), t("div", Yt, [t("div", {
          ref_key: "sliderEl",
          ref: m,
          class: "team-slider swiper"
        }, [t("div", Ft, [(d(!0), k(N, null, W(s(c)?.slice(0, 8), (S, i) => (d(), k("div", {
          key: i,
          class: "swiper-slide"
        }, [t("div", It, [x(u, {
          size: "medium",
          photo: S?.photo,
          draggable: ""
        }, null, 8, ["photo"])]), t("p", Ut, v(S.name), 1), t("p", Gt, v(S?.departments?.join(", ")), 1)]))), 128)), o.data.team.length > 7 ? (d(), k("div", {
          key: 0,
          ref_key: "lastSlide",
          ref: M,
          class: "swiper-slide last-slide"
        }, [t("span", Xt, v(n.$t("view_all")), 1), x($, {
          to: {
            path: s(g)("/about"),
            hash: "#team"
          },
          class: "link"
        }, null, 8, ["to"]), t("p", Zt, v(n.$t("other_employees")), 1)], 512)) : P("", !0)])], 512)]), o.data.team.length > 4 ? (d(), q(w, {
          key: 0,
          container: s(m),
          "hide-cursor-triggers": [s(M)],
          "cursor-text": n.$t("drag"),
          "with-arrows": ""
        }, null, 8, ["container", "hide-cursor-triggers", "cursor-text"])) : P("", !0)])) : P("", !0)])])
      }
    }
  }),
  Qt = F(Kt, [
    ["__scopeId", "data-v-68d12e9c"]
  ]);

function es(o) {
  o && new we(o, {
    type: "words",
    tag: "span",
    wordsClass: "word",
    reduceWhiteSpace: !1
  })
}
const ts = {
    key: 0,
    class: "awards-section"
  },
  ss = {
    class: "awards-container container"
  },
  os = {
    class: "p1 description"
  },
  ns = {
    class: "photos-wrapper"
  },
  as = {
    key: 0,
    class: "awards-photos"
  },
  is = {
    key: 0,
    class: "awards-list"
  },
  ls = ["onMouseenter"],
  rs = {
    class: "l1--link award-name"
  },
  cs = {
    class: "l1--link"
  },
  us = {
    key: 1,
    class: "awards-slider-wrapper col-18"
  },
  ds = {
    class: "l1 slider-controls"
  },
  ps = {
    class: "awards-slider-inner"
  },
  ms = {
    class: "swiper-wrapper"
  },
  hs = {
    class: "slide-content"
  },
  vs = {
    class: "l1--link"
  },
  fs = {
    class: "l1--link"
  },
  _s = {
    name: "MainAwards"
  },
  gs = V({
    ..._s,
    props: {
      data: {}
    },
    setup(o) {
      const {
        $gsap: e,
        $ScrollTrigger: g
      } = G(), M = X(), C = T(0), m = T(), f = T(), a = {
        speed: 500,
        slidesPerView: 1.15,
        preventClicks: !0,
        spaceBetween: 4,
        touchStartPreventDefault: !1,
        centeredSlides: !0,
        on: {
          slideChange: h => {
            C.value = h.activeIndex
          }
        }
      };
      let c;
      J(async () => {
        await z(), n(), b(), l(), m.value && es(m.value)
      }), Z(() => {
        c && c?.destroy?.()
      });

      function b() {
        f.value && (c = new me(f.value, a))
      }

      function n() {
        g.create({
          trigger: ".awards-section",
          start: "top top",
          once: !0,
          onEnter: () => {
            m.value && (m.value?.classList.remove("hidden"), de(m.value))
          }
        })
      }

      function l() {
        e.fromTo(".awards-section .photos-wrapper", {
          y: 50
        }, {
          scrollTrigger: {
            trigger: ".awards-section",
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          },
          y: -50,
          ease: "none"
        })
      }

      function u(h) {
        if (!h) return "01";
        const $ = h.toString();
        return "0".repeat(Math.max(0, 2 - $.length)) + $
      }
      return (h, $) => {
        const _ = te,
          y = se,
          w = U;
        return o.data ? (d(), k("section", ts, [t("div", ss, [$[0] || ($[0] = t("p", {
          class: "l1 section-number"
        }, "00  6", -1)), t("p", os, v(o.data.description), 1), t("p", {
          ref_key: "title",
          ref: m,
          class: "h2 title hidden"
        }, "SL® A & R 17–24", 512), t("div", ns, [o.data.awards ? (d(), k("div", as, [(d(!0), k(N, null, W(o.data.awards, (S, i) => (d(), k("div", {
          key: i,
          class: Y(["awards-photo", {
            "awards-photo--active": s(C) === i
          }])
        }, [x(_, {
          photo: S?.photo
        }, null, 8, ["photo"])], 2))), 128))])) : P("", !0)]), o.data.awards ? (d(), k("div", is, [(d(!0), k(N, null, W(o.data.awards, (S, i) => (d(), k("div", {
          key: i,
          class: Y(["award-item", {
            "award-item--active": s(C) === i
          }]),
          onMouseenter: A => C.value = i
        }, [t("p", rs, v(S.name), 1), t("p", cs, v(S.project), 1)], 42, ls))), 128))])) : P("", !0), o.data.awards ? (d(), k("div", us, [t("p", ds, v(`${u(s(C)+1)}   –   ${u(o.data.awards.length)}`), 1), t("div", ps, [t("div", {
          ref_key: "sliderEl",
          ref: f,
          class: "slider swiper"
        }, [t("div", ms, [(d(!0), k(N, null, W(o.data.awards, (S, i) => (d(), k("div", {
          key: i,
          class: "swiper-slide"
        }, [t("div", hs, [t("p", vs, v(S.name), 1), t("p", fs, v(S.project), 1)])]))), 128))])], 512)])])) : P("", !0), x(w, {
          to: {
            path: s(M)("/about"),
            hash: "#awards"
          },
          class: "awards-link"
        }, {
          default: O(() => [x(y, {
            texts: [h.$t("view"), h.$t("awards.all_awards")]
          }, null, 8, ["texts"])]),
          _: 1
        }, 8, ["to"])])])) : P("", !0)
      }
    }
  }),
  ws = F(gs, [
    ["__scopeId", "data-v-fe2a27f2"]
  ]),
  ys = {
    class: "contact-background"
  },
  ks = ["src"],
  $s = {
    class: "title-wrapper col-18"
  },
  xs = ["href"],
  bs = ["href"],
  Ts = {
    name: "MainContact"
  },
  Ss = V({
    ...Ts,
    props: {
      data: {}
    },
    setup(o) {
      const {
        $gsap: e,
        $ScrollTrigger: g
      } = G(), M = X(), {
        isDesktop: C
      } = ue(), m = T(), f = T(), a = T();
      J(async () => {
        await z(), b(), C.value ? c() : n()
      });

      function c() {
        m.value && e.to(".contact-background", {
          scrollTrigger: {
            trigger: m.value,
            start: "top bottom",
            end: "top top",
            scrub: !0
          },
          yPercent: 0,
          y: 0,
          ease: "none"
        })
      }

      function b() {
        m.value && g.create({
          trigger: m.value,
          start: C.value ? "top top" : "-25% top",
          onEnter: function(l) {
            if (!f.value) return;
            const u = f.value.querySelectorAll("p");
            f.value?.classList.remove("hidden"), u.forEach(h => {
              de(h)
            }), l.kill()
          }
        })
      }

      function n() {
        if (!f.value) return;
        const l = f.value.getBoundingClientRect().height;
        m.value?.style.setProperty("--title-height", `${l}`)
      }
      return (l, u) => {
        const h = U,
          $ = se,
          _ = Ee,
          y = pe;
        return d(), k(N, null, [o.data ? (d(), k("section", {
          key: 0,
          ref_key: "sectionRef",
          ref: m,
          class: "contact-section container"
        }, [x(h, {
          to: s(M)("/contact"),
          class: "section-link"
        }, null, 8, ["to"]), t("div", ys, [o.data.photo ? (d(), k("img", {
          key: 0,
          src: o.data.photo?.original,
          alt: "contact"
        }, null, 8, ks)) : P("", !0), u[0] || (u[0] = t("div", {
          class: "overlay-flat"
        }, null, -1)), u[1] || (u[1] = t("div", {
          class: "overlay-gradient"
        }, null, -1)), u[2] || (u[2] = t("div", {
          class: "overlay-gradient--bottom"
        }, null, -1))]), t("div", $s, [t("div", {
          ref_key: "titleEl",
          ref: f,
          class: "h2 title hidden"
        }, [t("p", null, v(o.data.title_first_row), 1), t("p", null, v(o.data.title_second_row), 1)], 512)]), x(h, {
          to: s(M)("/contact"),
          class: "l1--link mobile-link"
        }, {
          default: O(() => [K(v(l.$t("main.lets_talk")), 1)]),
          _: 1
        }, 8, ["to"]), t("div", {
          ref_key: "linksContainer",
          ref: a,
          class: "links container"
        }, [o.data.phone ? (d(), k("a", {
          key: 0,
          href: `tel:${o.data.phone}`,
          target: "_blank",
          rel: "nofollow",
          class: "p1--link link phone-link"
        }, [x($, {
          texts: [l.$t("phone"), o.data.phone],
          sup: "[whatsapp]"
        }, null, 8, ["texts"])], 8, xs)) : P("", !0), x(_), o.data.email ? (d(), k("a", {
          key: 1,
          href: `mailto:${o.data.email}`,
          target: "_blank",
          rel: "nofollow",
          class: "p1--link link email-link"
        }, [x($, {
          texts: [l.$t("email"), o.data.email]
        }, null, 8, ["texts"])], 8, bs)) : P("", !0)], 512)], 512)) : P("", !0), s(a) ? (d(), q(y, {
          key: 1,
          "hide-cursor-triggers": [s(a)],
          container: s(m),
          "cursor-text": l.$t("main.lets_talk")
        }, null, 8, ["hide-cursor-triggers", "container", "cursor-text"])) : P("", !0)], 64)
      }
    }
  }),
  Ms = F(Ss, [
    ["__scopeId", "data-v-a07cbb27"]
  ]),
  Cs = {
    key: 0
  },
  Ps = {
    class: "page main-page"
  },
  Es = {
    name: "MainPage"
  },
  Os = V({
    ...Es,
    async setup(o) {
      let e, g;
      const M = ye().locale.value,
        C = X(),
        {
          $ScrollTrigger: m
        } = G();
      fe("isLogoGrow", () => !0);
      const f = T(""),
        a = T(""),
        {
          data: c
        } = ([e, g] = ke(() => $e("main-page", () => $fetch("/api/pages/main", {
          method: "post",
          body: {
            locale: M
          }
        }))), e = await e, g(), e);
      Me(c?.value?.meta);

      function b({
        aboutTitleHeight: n,
        aboutTitleTopOffset: l
      }) {
        f.value = n, a.value = l
      }
      return Z(() => m.killAll()), (n, l) => {
        const u = rt,
          h = wt,
          $ = Pt,
          _ = be,
          y = Qt,
          w = ws,
          S = Ms,
          i = Se;
        return s(c) ? (d(), k("div", Cs, [t("main", Ps, [x(u, {
          slides: s(c).hero_slides,
          "about-title-height": s(f),
          "about-title-top-offset": s(a)
        }, null, 8, ["slides", "about-title-height", "about-title-top-offset"]), x(h, {
          data: s(c).about,
          onSetProps: l[0] || (l[0] = A => b(A))
        }, null, 8, ["data"]), x($, {
          projects: s(c).projects,
          tabs: s(c).types
        }, null, 8, ["projects", "tabs"]), x(_, {
          data: s(c).worldwide
        }, null, 8, ["data"]), x(y, {
          data: s(c).team
        }, null, 8, ["data"]), x(w, {
          data: s(c).awards
        }, null, 8, ["data"]), x(S, {
          data: s(c).contacts
        }, null, 8, ["data"])]), x(i, {
          "link-text": s(c).get_in_touch,
          link: s(C)("/contact")
        }, null, 8, ["link-text", "link"])])) : P("", !0)
      }
    }
  });
export {
  Os as
  default
};