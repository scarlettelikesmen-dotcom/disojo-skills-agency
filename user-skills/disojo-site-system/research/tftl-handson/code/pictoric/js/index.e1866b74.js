/* https://pictoric.com.ua/_nuxt/index.e1866b74.js */
import {
  _ as Pt,
  N as Ft
} from "./Circles.vue.7e660efc.js";
import {
  d as G,
  m as et,
  x as ot,
  u as rt,
  f as _t,
  v as E,
  o as it,
  a as pt,
  b as s,
  c as p,
  g as t,
  i as b,
  z as N,
  j as n,
  y as z,
  F as U,
  h as V,
  I as It,
  k as D,
  t as L,
  A as st,
  n as Z,
  r as J,
  ag as qt,
  s as ut,
  B as Q,
  V as dt,
  M as Et,
  N as mt,
  l as ht,
  C as at,
  _ as Y,
  w as vt,
  q as ft,
  G as yt,
  a0 as Ot,
  ah as gt,
  X as lt,
  p as bt,
  H as kt,
  J as jt,
  K as Rt,
  e as Nt,
  ae as Ut,
  O as Wt,
  P as Xt,
  W as Vt,
  ai as zt,
  Q as Yt
} from "./entry.6cb2d70d.js";
import {
  _ as Lt
} from "./HanddrawnSvg.e4acccd9.js";
import {
  _ as Dt
} from "./Circular.662c8455.js";
import {
  S as Gt,
  P as Zt,
  _ as At
} from "./pagination.9e265203.js";
import {
  a as Jt,
  u as Kt
} from "./useDefaultAnim.bde1a832.js";
import {
  p as Qt
} from "./index.13429eea.js";
import {
  _ as te
} from "./Canvas.ae6b6afa.js";
import {
  _ as ee
} from "./index.a90ee2f6.js";
import {
  u as ne
} from "./index.7717ae4c.js";
import "./SansSerif.76e1e15a.js";
const oe = {
    class: "hero-wrapper"
  },
  ae = {
    key: 1
  },
  se = {
    class: "hero-inner"
  },
  ie = {
    class: "hero-content"
  },
  re = {
    class: "hero-star"
  },
  le = {
    class: "hero-title__wrapper"
  },
  ce = {
    key: 0,
    class: "hero-icon"
  },
  ue = ["innerHTML"],
  de = {
    class: "hero-description t2-xb anim-text delay bottom"
  },
  _e = {
    class: "hero-nav"
  },
  pe = G({
    __name: "Hero",
    props: {
      data: {},
      caption: {}
    },
    emits: ["defined-anim-offset"],
    setup(o, {
      emit: l
    }) {
      const P = l,
        {
          t: i
        } = et(),
        m = ot(),
        {
          isDesktop: c
        } = rt(),
        f = _t("touchDevice"),
        h = J(qt()),
        d = ut(),
        g = E.matchMedia(),
        T = J(0),
        x = Q(() => [{
          title: i("menu.aboutUs"),
          link: "/about-us"
        }, {
          title: i("menu.projects"),
          link: "/projects"
        }]);

      function u(A) {
        const M = .011111111111111112 * window.innerWidth;
        return A / 16 * M
      }

      function _() {
        f.value || g.add("(min-width: 1024px)", () => {
          if (!d.value) return;
          const A = document.getElementById("title-placeholder"),
            M = d.value.querySelector(".hero-title__wrapper"),
            I = d.value.querySelector(".hero-title"),
            B = d.value.querySelector(".hero-icon"),
            H = d.value.querySelector(".hero-description");
          if (!A || !M || !I || !H) return;
          setTimeout(() => {
            const W = A.getBoundingClientRect().top - M.getBoundingClientRect().top - window.innerHeight - M.clientHeight * .5 + u(300);
            P("defined-anim-offset", W), E.to(M, {
              scrollTrigger: O,
              y: W,
              ease: "power2.inOut",
              willChange: "transform"
            })
          }, 500);
          const O = {
            trigger: d.value,
            start: "bottom bottom",
            end: "bottom top",
            scrub: !0
          };
          B && E.to(B, {
            scrollTrigger: O,
            opacity: 1,
            ease: "power2.inOut"
          }), E.to(I, {
            scrollTrigger: O,
            scale: .5,
            ease: "power2.inOut",
            willChange: "transform"
          }), E.timeline({
            scrollTrigger: O
          }).fromTo(H, {
            opacity: 1
          }, {
            opacity: 0,
            duration: .1,
            ease: "power2.out"
          }).to(H, {
            opacity: 0,
            duration: .3
          }, ">0%")
        })
      }

      function k() {
        d.value && dt.create({
          trigger: d.value,
          start: "top top",
          end: "bottom bottom",
          onUpdate: A => T.value = A.progress - 1
        })
      }

      function S() {
        E.to(T, {
          value: -1,
          duration: 1,
          ease: "default-ease"
        })
      }
      return it(() => {
        _(), k(), S()
      }), pt(() => g == null ? void 0 : g.kill()), (A, M) => {
        const I = Pt,
          B = Et,
          H = mt,
          O = ht,
          W = Lt,
          y = at;
        return o.data ? (s(), p("section", {
          key: 0,
          ref_key: "heroRef",
          ref: d,
          class: Z(["hero", {
            touch: n(f)
          }])
        }, [t("div", oe, [b(H, null, {
          default: N(() => [n(c) ? (s(), z(I, {
            key: 0,
            "delayed-draw": "",
            progress: n(T),
            circles: n(h).desk,
            "start-pos-y": -400,
            larger: "",
            class: "hero-circles"
          }, null, 8, ["progress", "circles"])) : (s(), p("div", ae, [(s(!0), p(U, null, V(n(h).mob, (F, X) => (s(), z(B, It({
            key: X
          }, {
            ref_for: !0
          }, F), null, 16))), 128))]))]),
          _: 1
        }), t("div", se, [t("div", ie, [t("span", re, [b(O, {
          animated: ""
        })]), t("div", le, [o.caption ? (s(), p("div", ce, [b(W, {
          "svg-link": o.caption.original
        }, null, 8, ["svg-link"])])) : D("", !0), t("div", {
          class: "hero-title h2 anim-title",
          innerHTML: o.data.title
        }, null, 8, ue)]), t("p", de, L(o.data.description), 1)]), t("ul", _e, [(s(!0), p(U, null, V(n(x), (F, X) => (s(), p("li", {
          key: X,
          class: "hero-nav__item"
        }, [b(y, {
          class: "hero-nav__link t2-xb",
          to: n(m)(F.link)
        }, {
          default: N(() => [st(L(F.title), 1)]),
          _: 2
        }, 1032, ["to"])]))), 128))])])])], 2)) : D("", !0)
      }
    }
  });
const me = Y(pe, [
    ["__scopeId", "data-v-18e72dd3"]
  ]),
  he = {
    class: "tilt-wrap"
  },
  ge = {
    class: "t2-xb pagination"
  },
  ve = {
    class: "page-info"
  },
  fe = {
    class: "a1 page-title"
  },
  ye = {
    key: 0,
    class: "t2-bl page-author"
  },
  be = {
    class: "page-photo-wrapper"
  },
  ke = ["src"],
  we = G({
    __name: "BookSlider",
    props: {
      params: {},
      slides: {}
    },
    emits: ["progressChange"],
    setup(o, {
      expose: l,
      emit: P
    }) {
      const i = o,
        m = P;
      l({
        changeSlide: v,
        goToStart: C
      });
      const {
        t: c
      } = et(), f = ot(), h = Q(() => {
        var e, a, $, w;
        return {
          perspectiveInRems: ((e = i == null ? void 0 : i.params) == null ? void 0 : e.perspectiveInRems) || 100,
          fastSwipeThreshold: ((a = i == null ? void 0 : i.params) == null ? void 0 : a.fastSwipeThreshold) || 350,
          openedSlideAngle: (($ = i == null ? void 0 : i.params) == null ? void 0 : $.openedSlideAngle) || 8,
          basicDuration: ((w = i == null ? void 0 : i.params) == null ? void 0 : w.basicDuration) || .8
        }
      }), d = Q(() => i.slides.map(e => ({
        left: e.image.large || e.image.original,
        right: {
          title: e.title,
          author: e == null ? void 0 : e.author,
          slug: e.slug
        }
      }))), g = 4 / h.value.perspectiveInRems, T = J();
      let x;
      const u = J(!1),
        _ = J(!1);

      function k(e) {
        var a;
        return e === 0 ? null : ((a = d.value[e - 2]) == null ? void 0 : a.right) || null
      }

      function S(e) {
        var a;
        return e === 0 || e > d.value.length ? "" : ((a = d.value[e - 1]) == null ? void 0 : a.left) || ""
      }

      function A() {
        var e;
        x = (e = T.value) == null ? void 0 : e.querySelectorAll(".page"), y.current = 1, y.saved = y.current, tt({
          once: !0
        })
      }
      const M = {
        startPos: 0,
        currentPos: 0,
        startTime: 0
      };

      function I(e) {
        _.value || (u.value = !0, r.value = !1, M.startPos = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, M.startTime = performance.now(), document.addEventListener("mousemove", B), document.addEventListener("touchmove", B), tt())
      }

      function B(e) {
        r.value = !0, M.currentPos = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, y.current = Math.max(1, Math.min(d.value.length + .99, y.saved + (M.startPos - M.currentPos) / (window.innerWidth / 2)))
      }

      function H(e) {
        u.value = !1;
        const {
          speed: a,
          direction: $
        } = O(e);
        if (document.removeEventListener("mousemove", B), document.removeEventListener("touchmove", B), window.cancelAnimationFrame(W), y.current !== y.saved) {
          let w = !1;
          a >= h.value.fastSwipeThreshold && (w = !0, $ === "right" && (y.current = Math.floor(y.current)), $ === "left" && (y.current = Math.floor(y.current + 1))), nt({
            fastSwipe: w
          }), y.saved = y.current
        }
      }

      function O(e) {
        const a = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX,
          $ = performance.now(),
          w = Math.abs(a - M.startPos),
          R = ($ - M.startTime) / 1e3,
          q = w <= h.value.fastSwipeThreshold ? Math.round(w / R) : 0,
          K = a > M.startPos ? "right" : "left";
        return {
          speed: q,
          direction: K
        }
      }
      let W;
      const y = yt({
          current: 0,
          saved: 0
        }),
        F = Q(() => Math.floor(y.current)),
        X = Q(() => y.current - F.value);
      vt(() => y.current, e => {
        m("progressChange", e)
      });

      function tt(e) {
        if (!x) return;
        const a = {
          current: {
            el: x[F.value],
            rotation: E.utils.interpolate(h.value.openedSlideAngle, 180 - h.value.openedSlideAngle, X.value)
          },
          next: {
            el: x[F.value + 1],
            rotation: E.utils.interpolate(h.value.openedSlideAngle - 5, h.value.openedSlideAngle, X.value)
          },
          prev: {
            el: x[F.value - 1],
            rotation: 185 - h.value.openedSlideAngle - 5 * (1 - X.value)
          }
        };
        Object.keys(a).forEach($ => {
          var R, q;
          const w = a[$];
          (q = (R = w.el) == null ? void 0 : R.style) == null || q.setProperty("--rotation-offset", `${w.rotation}deg`)
        }), a.current.el.classList.contains("active") || a.current.el.classList.add("active"), a.prev.el && (a.prev.el.style.zIndex = `${d.value.length+1+F.value}`), e != null && e.fastSwipe || (a.current.el.style.zIndex = `${d.value.length+2+F.value}`), a.next.el && (a.next.el.style.zIndex = `${d.value.length+2-(F.value+2)}`, a.next.el.classList.remove("active")), e != null && e.once || (W = requestAnimationFrame(() => tt()))
      }

      function nt(e) {
        if (!T.value) return;
        _.value = !0;
        const a = e != null && e.toStart ? .3125 : 1,
          $ = e != null && e.fastSwipe ? h.value.basicDuration * a : Math.abs(Math.round(y.current + g) - (y.current + g)) * h.value.basicDuration;
        T.value.style.setProperty("--transition-duration", `${$}s`), y.current = Math.round(y.current + g), tt({
          once: !0,
          fastSwipe: e == null ? void 0 : e.fastSwipe
        }), (!(e != null && e.toStart) || e != null && e.final) && setTimeout(() => {
          var w;
          (w = T.value) == null || w.style.removeProperty("--transition-duration"), _.value = !1, r.value = !1
        }, 1e3 * $)
      }
      const r = J(!1);

      function v(e, a) {
        r.value || e === "next" && y.current === 1 && !a || (r.value = !0, e === "prev" && (y.current = Math.max(1, Math.min(d.value.length + .99, Math.floor(y.current - 1)))), e === "next" && (y.current = Math.max(1, Math.min(d.value.length + .99, Math.floor(y.current + 1)))), nt({
          fastSwipe: !0
        }), y.saved = y.current)
      }

      function C() {
        for (let e = d.value.length; e > 0; e--) j(e, d.value.length)
      }
      async function j(e, a) {
        await new Promise($ => {
          setTimeout($, (a - e) * (h.value.basicDuration * .2625 * 1e3))
        }), y.current = e, nt({
          fastSwipe: !0,
          toStart: !0,
          final: e === 1
        }), y.saved = y.current
      }
      return it(() => {
        A()
      }), vt(() => u.value, e => {
        var a, $;
        e ? (a = T.value) == null || a.classList.add("dragging") : ($ = T.value) == null || $.classList.remove("dragging")
      }), (e, a) => {
        const $ = Dt,
          w = at;
        return s(), p("div", {
          ref_key: "sliderEl",
          ref: T,
          class: "slider",
          onMousedown: I,
          onMouseup: H,
          onMouseleave: H,
          onTouchstart: I,
          onTouchend: H
        }, [t("div", he, [(s(!0), p(U, null, V(n(d).length + 2, (R, q) => {
          var K, wt, xt, $t, Ct, St, Tt;
          return s(), p("div", {
            key: q,
            class: "page",
            style: ft({
              "z-index": n(d).length + 2 - R,
              perspective: `${n(h).perspectiveInRems}rem`
            })
          }, [t("div", {
            class: "page-side page-side--front",
            onClick: a[0] || (a[0] = Ht => v("next"))
          }, [t("p", ge, L(`${(R-2).toString().padStart(2,"0")} — ${n(d).length.toString().padStart(2,"0")}`), 1), t("div", ve, [t("p", fe, L(((K = k(q)) == null ? void 0 : K.title) || ""), 1), (xt = (wt = k(q)) == null ? void 0 : wt.author) != null && xt.name ? (s(), p("p", ye, [a[2] || (a[2] = st(" by", -1)), a[3] || (a[3] = t("br", null, null, -1)), st(L(((Ct = ($t = k(q)) == null ? void 0 : $t.author) == null ? void 0 : Ct.name) || ""), 1)])) : D("", !0)]), (St = k(q)) != null && St.slug ? (s(), z(w, {
            key: 0,
            to: n(f)(((Tt = k(q)) == null ? void 0 : Tt.slug) || ""),
            class: "a1 page-link button-trigger",
            draggable: "false"
          }, {
            default: N(() => [st(L(n(c)("buttons.moreInfo")) + " ", 1), b($, {
              animated: ""
            })]),
            _: 1
          }, 8, ["to"])) : D("", !0), a[4] || (a[4] = t("div", {
            class: "page-cover"
          }, null, -1))]), t("div", {
            class: "page-side page-side--back",
            onClick: a[1] || (a[1] = Ht => v("prev"))
          }, [t("div", be, [S(q) ? (s(), p("img", {
            key: 0,
            class: "page-photo",
            src: S(q),
            draggable: "false"
          }, null, 8, ke)) : D("", !0)]), a[5] || (a[5] = t("div", {
            class: "page-cover"
          }, null, -1))])], 4)
        }), 128))])], 544)
      }
    }
  });
const xe = Y(we, [
  ["__scopeId", "data-v-14f2d73f"]
]);
const $e = ["id"],
  Ce = {
    class: "swiper-wrapper"
  },
  Se = {
    class: "swiper-footer"
  },
  Te = G({
    __name: "MobileSlider",
    props: {
      id: {},
      slides: {}
    },
    setup(o) {
      const l = o,
        {
          isMobile: P
        } = rt();
      let i;
      const m = {
        modules: [Zt, Ft],
        loop: !0,
        pagination: {
          el: ".swiper-footer .swiper-pagination",
          type: "custom",
          renderCustom: (h, d, g) => `${c(d)} — ${c(g)}`
        },
        navigation: {
          prevEl: ".swiper-footer .prev",
          nextEl: ".swiper-footer .next"
        }
      };

      function c(h) {
        return h.toString().padStart(2, "0")
      }

      function f() {
        i = new Gt(`#${l.id}-mobile-swiper`, m)
      }
      return it(() => {
        P.value && f()
      }), pt(() => i == null ? void 0 : i.destroy()), (h, d) => {
        const g = Dt;
        return s(), p("div", {
          id: `${o.id}-mobile-swiper`,
          class: "swiper"
        }, [t("div", Ce, [(s(!0), p(U, null, V(o.slides, (T, x) => (s(), p("div", {
          key: x,
          class: "swiper-slide"
        }, [Ot(h.$slots, "slide", {
          slide: T
        }, void 0, !0)]))), 128))]), t("div", Se, [b(g, {
          class: "swiper-arrow prev"
        }), d[0] || (d[0] = t("span", {
          class: "swiper-pagination t2-xb"
        }, null, -1)), b(g, {
          class: "swiper-arrow next"
        })])], 8, $e)
      }
    }
  });
const Bt = Y(Te, [
    ["__scopeId", "data-v-66389e96"]
  ]),
  Me = {
    class: "a1"
  },
  Pe = {
    class: "backpage-photo-wrapper"
  },
  Ie = ["src"],
  Ee = ["innerHTML"],
  Le = {
    class: "t2-xb"
  },
  De = {
    class: "t2-bl"
  },
  Ae = {
    class: "slider-content"
  },
  Be = {
    class: "item-image__wrapper"
  },
  He = ["src"],
  Fe = {
    class: "slider-footer"
  },
  qe = {
    class: "item-name h5"
  },
  Oe = G({
    __name: "Projects",
    props: {
      data: {},
      projects: {},
      clonedTitleAnimOffset: {},
      tabletTitle: {}
    },
    setup(o) {
      const l = o,
        {
          t: P
        } = et(),
        {
          isMobile: i
        } = rt(),
        m = ot(),
        c = _t("touchDevice"),
        f = ut(null),
        h = ut(null),
        d = J(null),
        g = J(0);
      let T = !1;

      function x() {
        const r = document.getElementById("slider-book-wrapper"),
          v = r == null ? void 0 : r.querySelectorAll(".backpage");
        v != null && v.length && v.forEach((C, j) => {
          const e = l.data ? Math.floor(l.data.photos.length / 2) : 0;
          if (j < e) {
            const a = e - j;
            C.style.setProperty("--translate-x", `${-1*(100+a*18)}%`), C.style.setProperty("--scale", `${1-a*.03}`), C.style.setProperty("--cover-opacity", `${a*.05}`)
          } else {
            const a = j - (e - 1);
            C.style.setProperty("--translate-x", `${a*18}%`), C.style.setProperty("--scale", `${1-a*.03}`), C.style.setProperty("--cover-opacity", `${a*.05}`), C.style.zIndex = l.data ? `${l.data.photos.length-j}` : "0"
          }
        })
      }
      const u = {
          value: 8,
          move: 10,
          scale: 40
        },
        _ = yt({
          xDeg: 0,
          yDeg: 0,
          halfWidth: 0,
          halfHeight: 0
        });
      let k;

      function S() {
        if (i.value || c.value) return;
        const r = document.getElementById("slider-book-wrapper");
        r && (_.halfWidth = window.innerWidth / 2, _.halfHeight = window.innerHeight / 2, r.addEventListener("mousemove", A), M())
      }

      function A(r) {
        const v = r.clientX,
          C = r.clientY;
        _.xDeg = (v - _.halfWidth) / _.halfWidth, _.yDeg = (C - _.halfHeight) / _.halfHeight
      }

      function M() {
        const r = document.getElementById("slider-book-wrapper");
        r && (r.style.transform = `translate(calc(${_.xDeg*u.move}px), calc(${_.yDeg*u.move}px)) rotateX(${_.yDeg*u.value}deg) rotateY(${_.xDeg*u.value}deg) scaleX(${Math.abs(_.xDeg)/u.scale+1})`, k = requestAnimationFrame(M))
      }

      function I() {
        const r = document.getElementById("slider-book-wrapper");
        r && (r.removeEventListener("mousemove", A), window.cancelAnimationFrame(k), r.style.removeProperty("transform"))
      }

      function B(r) {
        W(r, g.value), g.value = r
      }

      function H(r) {
        const v = .011111111111111112 * window.innerWidth;
        return r / 16 * v
      }

      function O() {
        const r = document.getElementById("title-placeholder");
        if (!r || !f.value) return;
        const C = r.getBoundingClientRect().top - f.value.getBoundingClientRect().top + H(320);
        E.set(f.value, {
          y: C,
          opacity: 0,
          willChange: "opacity"
        });
        const j = E.to(f.value, {
          opacity: 1,
          ease: "power2.inOut",
          paused: !0
        });
        dt.create({
          trigger: r,
          start: "top bottom",
          end: "top center",
          scrub: !0,
          onUpdate: e => {
            T || j.progress(e.progress)
          }
        })
      }

      function W(r, v) {
        var q;
        const C = (q = document.getElementById("slider-book-wrapper")) == null ? void 0 : q.parentElement,
          j = c.value ? ".tablet-title" : ".hero-title__wrapper",
          e = C == null ? void 0 : C.querySelector(j);
        if (!f.value || !h.value) return;
        const a = .3,
          $ = (1 + a - r) * (1 / a),
          w = r < l.projects.length + .5 ? Math.max(0, $) : Math.min(1, (r - (l.projects.length + .5)) * 2);
        r - v > .6 && r === l.projects.length + 1 && (h.value.style.setProperty("--opacity-delay", "0.5s"), setTimeout(() => {
          var K;
          (K = h.value) == null || K.style.removeProperty("--opacity-delay")
        }, 900));
        const R = r === 1 && r - v < -.6 ? 600 : 0;
        setTimeout(() => {
          f.value.style.opacity = `${Math.max(0,$)}`, h.value.style.opacity = `${w}`, e && (e.style.opacity = `${Math.max(0,$)}`)
        }, R), T = $ <= 0
      }

      function y(r) {
        d.value && (r === "open" ? d.value.changeSlide("next", !0) : d.value.goToStart())
      }

      function F(r) {
        if (!d.value) return;
        const v = r.target,
          C = r.clientX;
        v != null && v.classList.contains("slider") && (C > window.innerWidth / 2 ? d.value.changeSlide("next") : d.value.changeSlide("prev"))
      }
      let X = 0;
      async function tt() {
        var K;
        const r = document.querySelector(".hero-title__wrapper"),
          v = document.getElementById("slider-book-wrapper"),
          C = v == null ? void 0 : v.parentElement,
          j = window.innerHeight;
        if (await lt(), !r || !v || !C || i.value) return;
        const e = r.cloneNode(!0),
          a = e.lastChild,
          $ = e.firstChild,
          w = $ == null ? void 0 : $.firstChild,
          R = document.createElement("div");
        R.classList.add("hero-title__clone"), E.set(e, {
          clearProps: "all"
        }), await lt(), E.set(R, {
          position: "absolute",
          top: X,
          zIndex: 100,
          width: "100%",
          pointerEvents: "none",
          opacity: 0
        }), E.set(e, {
          opacity: 1
        }), E.set(a, {
          scale: 1
        }), E.set($, {
          opacity: 0
        }), w && E.set(w, {
          opacity: 1,
          y: 0
        }), R.appendChild(e), (K = v.parentElement) == null || K.appendChild(R), await lt();
        const q = {
          trigger: C,
          start: j,
          end: "top top",
          scrub: !0
        };
        dt.create({
          trigger: C,
          start: j * 1.1,
          end: j * 1.2,
          onEnter: () => {
            R.style.opacity = "1"
          },
          onLeaveBack: () => {
            R.style.opacity = "0"
          }
        }), E.to(R, {
          scrollTrigger: q,
          y: l.clonedTitleAnimOffset,
          ease: "power2.inOut",
          willChange: "transform"
        }), E.to(a, {
          scrollTrigger: q,
          scale: .5,
          ease: "power2.inOut",
          willChange: "transform"
        }), $ && E.to($, {
          scrollTrigger: q,
          opacity: 1,
          ease: "power2.inOut"
        })
      }

      function nt() {
        var C;
        const r = document.querySelector(".hero-title__wrapper"),
          v = (C = document.getElementById("slider-book-wrapper")) == null ? void 0 : C.parentElement;
        !r || !v || (X = r.getBoundingClientRect().top - v.getBoundingClientRect().top + window.innerHeight)
      }
      return gt(() => {
        setTimeout(() => {
          nt()
        }, 500), setTimeout(() => {
          tt()
        }, 2e3), c.value && !i.value && Jt({
          targets: ".tablet-title"
        })
      }), it(() => {
        i.value || (x(), lt(O))
      }), pt(() => {
        const r = document.getElementById("slider-book-wrapper");
        r && (r.removeEventListener("mousemove", A), window.cancelAnimationFrame(k))
      }), (r, v) => {
        const C = xe,
          j = At,
          e = mt,
          a = at,
          $ = Bt;
        return o.data ? (s(), p("section", {
          key: 0,
          class: Z(["projects", {
            touch: n(c)
          }])
        }, [v[3] || (v[3] = t("div", {
          id: "title-placeholder",
          class: "title"
        }, null, -1)), n(i) ? D("", !0) : (s(), p("section", {
          key: 0,
          id: "slider-book-wrapper",
          class: Z(["slider-book-wrapper", {
            "no-bookmark": n(g) >= 2 && n(g) < o.projects.length + 1
          }]),
          onClick: F,
          onMouseenter: S,
          onMouseleave: I
        }, [t("div", {
          ref_key: "bookmarkEl",
          ref: h,
          class: Z(["bookmark", {
            back: n(g) >= 2
          }]),
          onClick: v[0] || (v[0] = w => y(n(g) > 2 ? "back" : "open"))
        }, [t("p", Me, L(n(g) <= 2 ? "open" : "back"), 1), v[1] || (v[1] = t("div", {
          class: "bookmark-icon"
        }, null, -1))], 2), (s(!0), p(U, null, V(o.data.photos, (w, R) => (s(), p("div", {
          key: R,
          class: "backpage"
        }, [t("div", Pe, [t("img", {
          class: "backpage-photo",
          src: w.original
        }, null, 8, Ie)]), v[2] || (v[2] = t("div", {
          class: "backpage-cover"
        }, null, -1))]))), 128)), b(C, {
          ref_key: "bookSliderComponent",
          ref: d,
          slides: o.projects,
          onProgressChange: B
        }, null, 8, ["slides"]), t("div", {
          id: "#projects-tablet-title",
          class: "tablet-title h2",
          innerHTML: o.tabletTitle
        }, null, 8, Ee)], 34)), b(e, null, {
          default: N(() => [!n(i) && !n(c) ? (s(), z(j, {
            key: 0,
            text: n(P)("cursors.dragAndDrop")
          }, null, 8, ["text"])) : D("", !0)]),
          _: 1
        }), t("div", {
          ref_key: "titleElement",
          ref: f,
          class: "projects-caption"
        }, [t("span", Le, L(o.data.caption[0]), 1), t("span", De, L(o.data.caption[1]), 1)], 512), n(i) ? (s(), z($, {
          key: 1,
          id: "projects",
          slides: o.projects.map(w => ({
            img: w.image.large || w.image.original,
            title: w.title,
            author: w.author || {
              name: ""
            },
            slug: w.slug
          })),
          class: "slider"
        }, {
          slide: N(({
            slide: w
          }) => [t("div", Ae, [t("div", Be, [t("img", {
            class: "inner-img",
            src: w.img,
            alt: "image"
          }, null, 8, He)]), t("div", Fe, [t("h3", qe, L(w.title), 1), t("h3", {
            class: Z(["item-author t2-xb", {
              active: !!w.author.name
            }])
          }, " By " + L(w.author.name), 3), w.slug ? (s(), z(a, {
            key: 0,
            to: n(m)(w.slug),
            class: "item-link t2-xb"
          }, {
            default: N(() => [st(L(n(P)("buttons.moreInfo")), 1)]),
            _: 1
          }, 8, ["to"])) : D("", !0)])])]),
          _: 1
        }, 8, ["slides"])) : D("", !0)], 2)) : D("", !0)
      }
    }
  });
const je = Y(Oe, [
    ["__scopeId", "data-v-17224792"]
  ]),
  Re = {
    key: 0,
    class: "heritage"
  },
  Ne = {
    class: "title-wrapper"
  },
  Ue = ["innerHTML"],
  We = {
    class: "description-wrapper"
  },
  Xe = {
    class: "heritage-icon"
  },
  Ve = ["innerHTML"],
  ze = {
    class: "heritage-image"
  },
  Ye = {
    class: "heritage-text t1 anim-text"
  },
  Ge = G({
    __name: "Heritage",
    props: {
      data: {}
    },
    setup(o) {
      const {
        t: l
      } = et(), P = ot();

      function i() {
        const m = E.timeline({
          defaults: {
            scrollTrigger: {
              trigger: "section.heritage .heritage-image",
              start: "top bottom",
              end: "bottom top",
              scrub: .9
            }
          }
        });
        m.fromTo("section.heritage .layer-1", {
          yPercent: 10
        }, {
          keyframes: {
            0: {
              yPercent: 10,
              ease: "none"
            },
            50: {
              yPercent: 0,
              ease: "none"
            },
            100: {
              yPercent: -10,
              ease: "none"
            }
          },
          ease: "none"
        }), m.fromTo("section.heritage .layer-2", {
          yPercent: 20
        }, {
          keyframes: {
            0: {
              yPercent: 20,
              ease: "none"
            },
            50: {
              yPercent: 0,
              ease: "none"
            },
            100: {
              yPercent: -20,
              ease: "none"
            }
          },
          ease: "none"
        }, "<"), m.fromTo("section.heritage .layer-4", {
          yPercent: -5
        }, {
          keyframes: {
            0: {
              yPercent: -5,
              ease: "none"
            },
            50: {
              yPercent: 0,
              ease: "none"
            },
            100: {
              yPercent: 20,
              ease: "none"
            }
          },
          ease: "none"
        }, "<"), m.fromTo("section.heritage .layer-5", {
          yPercent: -40
        }, {
          keyframes: {
            0: {
              yPercent: -40,
              ease: "none"
            },
            50: {
              yPercent: 0,
              ease: "none"
            },
            100: {
              yPercent: 40,
              ease: "none"
            }
          },
          ease: "none"
        }, "<")
      }
      return gt(i), (m, c) => {
        var g, T;
        const f = ht,
          h = kt,
          d = at;
        return o.data ? (s(), p("section", Re, [t("div", Ne, [t("div", {
          ref: "titleRef",
          class: "heritage-title h1 anim-title",
          innerHTML: o.data.title
        }, null, 8, Ue), t("div", We, [t("div", Xe, [b(f, {
          animated: ""
        })]), t("div", {
          class: "heritage-description h4 anim-title",
          innerHTML: ("prettifyApiText" in m ? m.prettifyApiText : n(bt))((g = o.data) == null ? void 0 : g.descriptions[0])
        }, null, 8, Ve)])]), t("div", ze, [(s(), p(U, null, V(5, x => t("div", {
          key: x,
          class: Z(["layer", [`layer-${x}`]])
        }, null, 2)), 64))]), t("div", Ye, L((T = o.data) == null ? void 0 : T.descriptions[1]), 1), b(d, {
          class: "heritage-button",
          to: n(P)("/heritage")
        }, {
          default: N(() => [b(h, {
            text: n(l)("buttons.moreInfo")
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"])])) : D("", !0)
      }
    }
  });
const Ze = Y(Ge, [
    ["__scopeId", "data-v-cbb94bca"]
  ]),
  Je = {
    class: "desk",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1440 1044",
    fill: "none"
  },
  Ke = ["href"],
  Qe = {
    class: "mob",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 375 601",
    fill: "none"
  },
  tn = ["href"],
  en = G({
    __name: "First",
    props: {
      src: {}
    },
    setup(o) {
      const l = o;
      return (P, i) => (s(), p(U, null, [(s(), p("svg", Je, [i[1] || (i[1] = t("mask", {
        id: "mask0_72_2089",
        style: {
          "mask-type": "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0"
      }, [t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M50 0C22.3858 0 0 22.3858 0 50V914C0 941.614 22.3857 964 50 964H627.035C633.796 1009.27 672.843 1044 720 1044C767.157 1044 806.204 1009.27 812.965 964H1390C1417.61 964 1440 941.614 1440 914V50C1440 22.3858 1417.61 0 1390 0H50Z",
        fill: "#D9D9D9"
      })], -1)), i[2] || (i[2] = t("g", {
        mask: "url(#mask0_72_2089)"
      }, [t("rect", {
        y: "21",
        width: "1440",
        height: "1023",
        fill: "url(#pattern0_72_2089)"
      })], -1)), t("defs", null, [i[0] || (i[0] = t("pattern", {
        id: "pattern0_72_2089",
        patternContentUnits: "objectBoundingBox",
        width: "1",
        height: "1"
      }, [t("use", {
        "xlink:href": "#image0_72_2089",
        transform: "matrix(0.000694444 0 0 0.000979432 0 -0.175318)"
      })], -1)), t("image", {
        id: "image0_72_2089",
        width: "1440",
        height: "1440",
        class: "img",
        href: l == null ? void 0 : l.src
      }, null, 8, Ke)])])), (s(), p("svg", Qe, [i[4] || (i[4] = t("mask", {
        id: "mask0_993_6295",
        style: {
          "mask-type": "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0"
      }, [t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M30 0C13.4315 0 0 13.4315 0 30V520C0 536.569 13.4315 550 30 550H128.047C132.451 578.877 157.391 601 187.499 601C217.607 601 242.547 578.877 246.951 550H345C361.569 550 375 536.569 375 520V30C375 13.4315 361.569 0 345 0H30Z",
        fill: "#D9D9D9"
      })], -1)), i[5] || (i[5] = t("g", {
        mask: "url(#mask0_993_6295)"
      }, [t("rect", {
        y: "88",
        width: "375",
        height: "513",
        fill: "url(#pattern0_993_6295)"
      })], -1)), t("defs", null, [i[3] || (i[3] = t("pattern", {
        id: "pattern0_993_6295",
        patternContentUnits: "objectBoundingBox",
        width: "1",
        height: "1"
      }, [t("use", {
        "xlink:href": "#image0_993_6295",
        transform: "matrix(0.00109609 0 0 0.000802801 -0.251214 -0.0449219)"
      })], -1)), t("image", {
        id: "image0_993_6295",
        width: "1440",
        height: "1440",
        class: "img",
        href: l == null ? void 0 : l.src
      }, null, 8, tn)])]))], 64))
    }
  }),
  nn = {
    key: 0,
    class: "land"
  },
  on = {
    key: 1,
    class: "circles"
  },
  an = {
    class: "land-img__wrapper"
  },
  sn = {
    class: "land-caption"
  },
  rn = {
    class: "t2-xb"
  },
  ln = {
    class: "t2-xb"
  },
  cn = {
    class: "land-icon"
  },
  un = G({
    __name: "Land",
    props: {
      data: {}
    },
    setup(o) {
      const {
        isDesktop: l
      } = rt(), P = yt({
        value: 20
      }), i = J(20), m = J(Rt()), c = ut();

      function f() {
        l.value && (i.value = Qt(20), E.fromTo(P, {
          value: 40
        }, {
          value: -20,
          roundProps: "value",
          scrollTrigger: {
            trigger: "section.land .canvas-wrapper",
            start: "top bottom",
            end: "bottom bottom",
            scrub: !0
          },
          ease: "none"
        }), E.fromTo("section.land .canvas-wrapper", {
          y: 40
        }, {
          y: -20,
          scrollTrigger: {
            trigger: "section.land .canvas-wrapper",
            start: "top bottom",
            end: "bottom bottom",
            scrub: !0
          },
          ease: "none"
        }))
      }
      return gt(f), (h, d) => {
        var k, S, A, M, I, B, H, O, W, y, F, X, tt, nt, r, v, C, j;
        const g = Pt,
          T = Et,
          x = mt,
          u = en,
          _ = ht;
        return o.data ? (s(), p("section", nn, [b(x, null, {
          default: N(() => [n(l) ? (s(), z(g, {
            key: 0,
            ref_key: "circlesRef",
            ref: c,
            circles: n(m).desk
          }, null, 8, ["circles"])) : (s(), p("div", on, [(s(!0), p(U, null, V(n(m).mob, (e, a) => (s(), z(T, It({
            key: a
          }, {
            ref_for: !0
          }, e), null, 16))), 128))]))]),
          _: 1
        }), t("div", {
          class: "title-wrapper",
          style: ft(`
        --first-x: ${((A=(S=(k=n(c))==null?void 0:k.maskCircles)==null?void 0:S[0])==null?void 0:A.x)||0}px;
        --first-y: ${((B=(I=(M=n(c))==null?void 0:M.maskCircles)==null?void 0:I[0])==null?void 0:B.y)+n(P).value+n(i)||0}px;
        --first-d: ${((W=(O=(H=n(c))==null?void 0:H.maskCircles)==null?void 0:O[0])==null?void 0:W.d)||0}px;
        --second-x: ${((X=(F=(y=n(c))==null?void 0:y.maskCircles)==null?void 0:F[4])==null?void 0:X.x)||0}px;
        --second-y: ${((r=(nt=(tt=n(c))==null?void 0:tt.maskCircles)==null?void 0:nt[4])==null?void 0:r.y)+n(P).value+n(i)||0}px;
        --second-d: ${((j=(C=(v=n(c))==null?void 0:v.maskCircles)==null?void 0:C[4])==null?void 0:j.d)||0}px;
      `)
        }, [(s(), p(U, null, V(2, e => b(jt(e === 1 ? "h2" : "div"), {
          key: e,
          class: Z([{
            inset: e === 1
          }, "land-title h1_1"])
        }, {
          default: N(() => [st(L(o.data.title), 1)]),
          _: 1
        }, 8, ["class"])), 64))], 4), t("div", an, [b(u, {
          src: o.data.photo.original
        }, null, 8, ["src"])]), t("p", sn, [t("span", rn, L(o.data.caption[0]), 1), t("span", ln, L(o.data.caption[1]), 1)]), t("div", cn, [b(_, {
          animated: ""
        })])])) : D("", !0)
      }
    }
  });
const dn = Y(un, [
  ["__scopeId", "data-v-99611ab0"]
]);
const _n = {},
  pn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "4",
    height: "4",
    viewBox: "0 0 4 4",
    fill: "none"
  };

function mn(o, l) {
  return s(), p("svg", pn, [...l[0] || (l[0] = [t("circle", {
    cx: "2",
    cy: "2",
    r: "2",
    fill: "#411F15"
  }, null, -1)])])
}
const hn = Y(_n, [
  ["render", mn],
  ["__scopeId", "data-v-1d6f8cbc"]
]);
const gn = {},
  vn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none"
  };

function fn(o, l) {
  return s(), p("svg", vn, [...l[0] || (l[0] = [Nt('<path d="M11 3L11 1" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M11 21L11 19" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M19 11L21 11" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M1 11L3 11" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M17.9281 7L19.6602 6" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M2.34021 16L4.07227 15" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M15 4.07189L16 2.33984" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M6 19.6603L7 17.9282" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M7 4.07189L6 2.33984" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M16 19.6603L15 17.9282" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M4.07189 7L2.33984 6" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><path d="M19.6598 16L17.9277 15" stroke="#FFE515" stroke-linecap="round" data-v-950cb8e1></path><circle cx="11" cy="11" r="6.5" stroke="#FFE515" data-v-950cb8e1></circle>', 13)])])
}
const yn = Y(gn, [
    ["render", fn],
    ["__scopeId", "data-v-950cb8e1"]
  ]),
  bn = {
    class: "illustrations-wrapper"
  },
  kn = ["src"],
  wn = G({
    __name: "Illustrations",
    setup(o) {
      const l = [8, 6, 6, 10, 6, 3, 3, 5];
      return (P, i) => (s(), p("div", bn, [(s(), p(U, null, V(8, m => t("div", {
        key: m,
        class: "illustrations inset"
      }, [(s(!0), p(U, null, V(l[m - 1], c => (s(), p("div", {
        key: c,
        class: "illustrations__item"
      }, [t("img", {
        src: `/images/main/about/illustrations/${m}/${c}.webp`,
        alt: "illustration",
        class: "illustrations_image"
      }, null, 8, kn)]))), 128))])), 64))]))
    }
  });
const xn = Y(wn, [
    ["__scopeId", "data-v-224c547d"]
  ]),
  $n = {
    class: "title-wrapper"
  },
  Cn = {
    class: "about-title h1 anim-title default-parallax"
  },
  Sn = {
    class: "description-wrapper"
  },
  Tn = {
    key: 0,
    class: "title-icon"
  },
  Mn = ["innerHTML"],
  Pn = {
    id: "about-thumb",
    class: "about-thumb"
  },
  In = ["src"],
  En = {
    class: "creativity-title t2-xb"
  },
  Ln = ["data-idx"],
  Dn = {
    class: "creativity-icon"
  },
  An = {
    class: "about-text t1 anim-text"
  },
  Mt = 1500,
  ct = 8,
  Bn = G({
    __name: "index",
    props: {
      data: {}
    },
    setup(o) {
      const l = ot(),
        {
          isDesktop: P
        } = rt(),
        {
          t: i
        } = et(),
        m = _t("touchDevice");
      let c;
      const f = J(-1);

      function h({
        target: x
      }) {
        clearInterval(c);
        const u = x;
        if (!u.classList.contains("dots-list__item")) return;
        const _ = Number(u.getAttribute("data-idx"));
        _ !== f.value && (f.value = _, setTimeout(() => {
          g()
        }, Mt))
      }

      function d(x) {
        const u = [...document.querySelectorAll(".illustrations .illustrations__item.active")],
          _ = [];
        for (let k = 0; k <= x; k++) {
          const S = [...document.querySelectorAll(`.illustrations:nth-child(${k+1}) .illustrations__item`)];
          S.forEach(A => {
            A.classList.add("active")
          }), _.push(...S)
        }
        if (_.length > u.length) {
          const k = _.filter(S => !u.includes(S));
          E.to(k, {
            ease: "bounce.out",
            scale: 1,
            duration: 1.2,
            stagger: .025
          })
        } else {
          const k = u.filter(S => !_.includes(S));
          k.forEach(S => S.classList.remove("active")), E.to(k, {
            ease: "bounce.out",
            scale: 0,
            duration: 1.2,
            stagger: .025
          })
        }
      }

      function g(x) {
        clearInterval(c), x && (f.value = (f.value + 1) % ct), c = setInterval(() => {
          f.value = (f.value + 1) % ct
        }, Mt)
      }

      function T() {
        dt.create({
          trigger: "#creativity-wrapper",
          start: "top bottom",
          end: "bottom bottom",
          onEnter: () => {
            g(!0)
          },
          once: !0
        })
      }
      return gt(T), vt(f, d), (x, u) => {
        const _ = Lt,
          k = hn,
          S = yn,
          A = At,
          M = xn,
          I = mt,
          B = kt,
          H = at;
        return o.data ? (s(), p("section", {
          key: 0,
          class: Z(["about", {
            touch: n(m)
          }])
        }, [t("div", $n, [t("h2", Cn, L(o.data.title), 1), t("div", Sn, [o.data.icon ? (s(), p("div", Tn, [b(_, {
          "svg-link": o.data.icon.original
        }, null, 8, ["svg-link"])])) : D("", !0), t("div", {
          class: "about-description h4 anim-title",
          innerHTML: o.data.descriptions[0]
        }, null, 8, Mn)])]), t("div", Pn, [t("img", {
          class: "about-image",
          src: o.data.photo.original,
          alt: "image"
        }, null, 8, In), t("div", {
          id: "creativity-wrapper",
          class: "creativity-wrapper",
          onMousemove: h
        }, [t("div", En, L(n(i)("main.creativity")), 1), t("div", {
          class: "dots-list",
          style: ft(`--active-point: ${n(f)===-1?0:n(f)}; --illustrations-count: ${ct};`)
        }, [(s(), p(U, null, V(ct, O => t("div", {
          key: O,
          "data-idx": O - 1,
          class: Z(["dots-list__item", {
            active: O - 1 <= n(f)
          }])
        }, [b(k, {
          class: "inner-svg"
        })], 10, Ln)), 64)), t("div", Dn, [b(S, {
          class: "inner-svg"
        })])], 4)], 32), b(A, {
          text: n(i)("cursors.creativityScale"),
          "flip-text": "",
          baseline: "auto",
          "trigger-selector": "#about-thumb"
        }, null, 8, ["text"]), b(I, null, {
          default: N(() => [n(P) ? (s(), z(M, {
            key: 0
          })) : D("", !0)]),
          _: 1
        })]), t("p", An, L(o.data.descriptions[1]), 1), b(H, {
          class: "about-btn",
          to: n(l)("/about-us")
        }, {
          default: N(() => [b(B, {
            text: n(i)("buttons.aboutUs")
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"])], 2)) : D("", !0)
      }
    }
  });
const Hn = Y(Bn, [
    ["__scopeId", "data-v-b4275937"]
  ]),
  Fn = {
    class: "card"
  },
  qn = {
    class: "card-thumb"
  },
  On = ["src"],
  jn = {
    class: "card-author"
  },
  Rn = G({
    __name: "Card",
    props: {
      data: {}
    },
    setup(o) {
      const {
        t: l
      } = et(), P = ot();
      return (i, m) => {
        const c = at;
        return s(), p("div", Fn, [t("div", qn, [t("img", {
          class: "inner-img",
          src: o.data.image,
          alt: "image"
        }, null, 8, On)]), o.data.author.slug && o.data.author.name ? (s(), z(c, {
          key: 0,
          to: n(P)(o.data.author.slug),
          class: "card-title t2-xb"
        }, {
          default: N(() => [t("span", null, L(n(l)("author")) + ":", 1), t("span", jn, L(o.data.author.name), 1)]),
          _: 1
        }, 8, ["to"])) : D("", !0)])
      }
    }
  });
const Nn = Y(Rn, [
    ["__scopeId", "data-v-5d417656"]
  ]),
  Un = {
    class: "sticky-wrapper"
  },
  Wn = {
    key: 0,
    class: "boutique-thumb"
  },
  Xn = ["innerHTML"],
  Vn = {
    class: "cards-wrapper"
  },
  zn = {
    class: "cards"
  },
  Yn = {
    class: "item-image__wrapper"
  },
  Gn = ["src"],
  Zn = G({
    __name: "index",
    props: {
      data: {}
    },
    setup(o) {
      const l = o,
        {
          t: P
        } = et(),
        i = ot(),
        m = [],
        c = Q(() => {
          var u, _;
          return (_ = (u = l.data) == null ? void 0 : u.illustrations) != null && _.length ? l.data.illustrations.slice(0, 5).map(k => ({
            author: k.author,
            img: k.image.original
          })) : []
        }),
        f = Q(() => {
          switch (c.value.length) {
            case 5:
              return c.value[2];
            case 3:
              return c.value[1];
            case 1:
              return c.value[0]
          }
          return null
        }),
        h = Q(() => {
          switch (c.value.length) {
            case 5:
              return c.value.filter((u, _) => _ !== 2);
            case 3:
              return c.value.filter((u, _) => _ !== 1);
            case 1:
              return []
          }
          return c.value
        }),
        d = Q(() => c.value.length % 2 === 0),
        g = Q(() => document.querySelector("section.boutique .cards"));

      function T() {
        const u = document.querySelector(".boutique-thumb"),
          _ = u == null ? void 0 : u.querySelector(".card-thumb");
        if (!u || !_ || !g.value || !f.value) return;
        const k = E.from(_, {
          scrollTrigger: {
            trigger: u,
            endTrigger: g.value,
            start: "top-=50% center",
            end: "center center",
            scrub: !0,
            onUpdate: ({
              progress: S
            }) => S > .9 ? u.classList.add("active") : u.classList.remove("active")
          },
          rotateY: 200
        });
        m.push(k)
      }

      function x() {
        var k;
        const u = (k = g.value) == null ? void 0 : k.querySelectorAll(".cards__item");
        if (!g.value || !u) return;
        const _ = E.from(u, {
          xPercent: S => S ? 100 : -100,
          scrollTrigger: {
            trigger: g.value,
            start: "top bottom",
            end: "center center",
            scrub: !0
          }
        });
        m.push(_)
      }
      return it(() => {
        T(), x()
      }), pt(() => m.forEach(u => u == null ? void 0 : u.kill())), (u, _) => {
        const k = Nn,
          S = at,
          A = Bt,
          M = kt;
        return o.data && n(c).length ? (s(), p("section", {
          key: 0,
          class: Z(["boutique", {
            even: n(d),
            silgle: n(c).length === 1
          }])
        }, [t("div", Un, [n(f) ? (s(), p("div", Wn, [b(k, {
          data: {
            image: n(f).img,
            author: n(f).author
          }
        }, null, 8, ["data"])])) : D("", !0), b(S, {
          to: "https://shop.pictoric.com.ua",
          class: "boutique-caption",
          external: "",
          target: "_blank",
          rel: "noopener noreferrer nofollow"
        }, {
          default: N(() => [(s(!0), p(U, null, V(o.data.caption, (I, B) => (s(), p("span", {
            key: B,
            class: Z(B ? "t2-bl" : "t2-xb")
          }, L(I), 3))), 128))]),
          _: 1
        }), t("div", {
          class: "boutique-title h2 anim-title",
          innerHTML: ("prettifyApiText" in u ? u.prettifyApiText : n(bt))(o.data.title)
        }, null, 8, Xn), t("div", Vn, [t("div", zn, [n(h).length ? (s(), p(U, {
          key: 0
        }, V(2, I => t("div", {
          key: I,
          class: "cards__item"
        }, [(s(!0), p(U, null, V(I === 1 ? n(h).slice(0, n(h).length / 2) : n(h).slice(n(h).length / 2), (B, H) => (s(), z(k, {
          key: H,
          class: "cards__card",
          data: {
            image: B.img,
            author: B.author
          }
        }, null, 8, ["data"]))), 128))])), 64)) : D("", !0)])])]), n(c) ? (s(), z(A, {
          key: 0,
          id: "boutique",
          slides: n(c),
          class: "slider"
        }, {
          slide: N(({
            slide: I
          }) => [t("div", Yn, [t("img", {
            class: "inner-img",
            src: I.img,
            alt: "image"
          }, null, 8, Gn)]), I.author.slug && I.author.name ? (s(), z(S, {
            key: 0,
            to: n(i)(I.author.slug),
            class: "item-title t2-xb"
          }, {
            default: N(() => [_[0] || (_[0] = st(" Author: ", -1)), t("span", null, L(I.author.name), 1)]),
            _: 2
          }, 1032, ["to"])) : D("", !0)]),
          _: 1
        }, 8, ["slides"])) : D("", !0), b(S, {
          class: "boutique-link",
          to: "https://shop.pictoric.com.ua",
          external: "",
          target: "_blank",
          rel: "noopener noreferrer nofollow"
        }, {
          default: N(() => [b(M, {
            text: n(P)("buttons.boutique")
          }, null, 8, ["text"])]),
          _: 1
        })], 2)) : D("", !0)
      }
    }
  });
const Jn = Y(Zn, [
    ["__scopeId", "data-v-7469c59a"]
  ]),
  Kn = {
    key: 0,
    class: "competition"
  },
  Qn = {
    class: "competition-title h1 anim-title default-parallax"
  },
  to = ["innerHTML"],
  eo = {
    class: "circle-wrapper"
  },
  no = {
    class: "circle-text inset"
  },
  oo = ["innerHTML"],
  ao = {
    class: "competition-text t2-xb anim-text"
  },
  so = G({
    __name: "Competition",
    props: {
      data: {}
    },
    setup(o) {
      const l = ot(),
        {
          t: P
        } = et();
      return (i, m) => {
        const c = at,
          f = ht,
          h = Ut;
        return o.data ? (s(), p("section", Kn, [t("h2", Qn, L(o.data.title), 1), b(c, {
          to: n(l)("/competition"),
          class: "competition-caption"
        }, {
          default: N(() => [(s(!0), p(U, null, V(o.data.caption, (d, g) => (s(), p("span", {
            key: g,
            class: Z(g ? "t2-bl" : "t2-xb")
          }, L(d), 3))), 128))]),
          _: 1
        }, 8, ["to"]), t("div", {
          class: "h4 anim-title",
          innerHTML: o.data.descriptions[0]
        }, null, 8, to), b(c, {
          class: "competition-link",
          to: n(l)("/competition")
        }, {
          default: N(() => [t("span", eo, [b(f, {
            icon: "wink",
            class: "circle-icon"
          }), t("span", no, [b(h, {
            text: n(P)("main.competitionCircle"),
            radius: 80
          }, null, 8, ["text"])])])]),
          _: 1
        }, 8, ["to"]), t("div", {
          class: "competition-heading h4 anim-title",
          innerHTML: o.data.descriptions[1]
        }, null, 8, oo), t("p", ao, L(o.data.descriptions[2]), 1)])) : D("", !0)
      }
    }
  });
const io = Y(so, [
    ["__scopeId", "data-v-d5ffce59"]
  ]),
  ro = {
    key: 0,
    class: "main"
  },
  lo = ["innerHTML"],
  co = {
    class: "sections-wrapper"
  },
  uo = {
    class: "sections-inner"
  },
  _o = G({
    __name: "index",
    async setup(o) {
      var T;
      let l, P;
      const {
        value: i
      } = et().locale, {
        data: m
      } = ([l, P] = Wt(async () => Yt("main", async () => {
        const [x, u] = await Promise.all([$fetch("/api/main", {
          method: "get",
          query: {
            locale: i
          }
        }), $fetch("/api/collections/projects", {
          method: "get",
          query: {
            locale: i,
            cardData: !0,
            category: "art"
          }
        })]);
        return {
          pageData: x,
          projects: u
        }
      })), l = await l, P(), l);
      if (!((T = m.value) != null && T.pageData)) throw Xt({
        statusCode: 404,
        statusMessage: "Error fetching main page data",
        fatal: !0
      });
      ne(m.value.pageData.meta), Kt();
      const c = _t("touchDevice"),
        f = Vt(),
        h = zt();

      function d() {
        const x = document.querySelector(".cta .cta-wrapper");
        x && x.scrollIntoView({
          behavior: "auto",
          block: "center"
        }), h.replace({
          path: f.path,
          query: f.query
        })
      }
      const g = J(0);
      return it(() => {
        f.hash === "#cta" && d()
      }), (x, u) => {
        var W, y, F;
        const _ = me,
          k = je,
          S = Ze,
          A = dn,
          M = Hn,
          I = te,
          B = Jn,
          H = io,
          O = ee;
        return (W = n(m)) != null && W.pageData ? (s(), p("main", ro, [b(_, {
          data: n(m).pageData.hero,
          caption: (y = n(m).pageData.projects) == null ? void 0 : y.icon,
          onDefinedAnimOffset: u[0] || (u[0] = X => g.value = X)
        }, null, 8, ["data", "caption"]), b(k, {
          data: n(m).pageData.projects,
          projects: n(m).projects,
          "cloned-title-anim-offset": n(g),
          "tablet-title": ((F = n(m).pageData.hero) == null ? void 0 : F.title) || ""
        }, null, 8, ["data", "projects", "cloned-title-anim-offset", "tablet-title"]), b(S, {
          data: n(m).pageData.heritage
        }, null, 8, ["data"]), b(A, {
          data: n(m).pageData.land
        }, null, 8, ["data"]), b(M, {
          data: n(m).pageData.about
        }, null, 8, ["data"]), n(m).pageData.boutique ? (s(), p("div", {
          key: 0,
          class: "boutique-description a1 anim-title",
          innerHTML: ("prettifyApiText" in x ? x.prettifyApiText : n(bt))(n(m).pageData.boutique.description)
        }, null, 8, lo)) : D("", !0), t("div", co, [t("div", uo, [n(c) ? D("", !0) : (s(), z(I, {
          key: 0,
          "fill-color": "#ffed45"
        })), b(B, {
          data: n(m).pageData.boutique
        }, null, 8, ["data"]), b(H, {
          data: n(m).pageData.competition
        }, null, 8, ["data"])])]), b(O, {
          bg: n(m).pageData.footerImg
        }, null, 8, ["bg"])])) : D("", !0)
      }
    }
  });
const $o = Y(_o, [
  ["__scopeId", "data-v-0c5fbcf6"]
]);
export {
  $o as
  default
};