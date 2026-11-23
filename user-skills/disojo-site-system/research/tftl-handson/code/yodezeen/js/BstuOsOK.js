/* https://yodezeen.com/_nuxt/BstuOsOK.js */
import Gt from "./B3QCgyoj.js";
import {
  d as H,
  g as i,
  O as $t,
  u as C,
  k as tt,
  h as et,
  o as _,
  c as m,
  b as t,
  a as c,
  i as it,
  t as A,
  G as Tt,
  e as y,
  J as Y,
  T as Dt,
  w as J,
  j as D,
  B as yt,
  P as jt,
  Q,
  C as Pt,
  f as j,
  _ as xt,
  R as Ct,
  F as q,
  r as O,
  x as Lt,
  U as Rt,
  q as gt,
  z as dt,
  V as qt,
  n as rt,
  W as Ot,
  S as P,
  X as Mt,
  L as Ht,
  p as Nt,
  N as Bt
} from "./BfIK-IeK.js";
import {
  c as Ut,
  B as Vt,
  a as K
} from "./2P3L_xuV.js";
import {
  u as Wt,
  _ as zt
} from "./DlccbGQi.js";
import {
  _ as Yt
} from "./eBXNMS6Q.js";
import Zt from "./5FC--5Lm.js";
import {
  a as Ft
} from "./BO-H7PM5.js";
import {
  u as Xt
} from "./D2s2jlu9.js";

function Kt(k) {
  const e = window.innerWidth >= 1024 ? 1440 : 375;
  return k / e * window.innerWidth
}
const Qt = {
    class: "preloader"
  },
  Jt = {
    class: "preloader-wrap"
  },
  te = {
    class: "hero-thumb"
  },
  ee = ["poster"],
  oe = ["src"],
  ae = ["src"],
  se = {
    class: "preloader-content"
  },
  ne = {
    class: "text p1"
  },
  ie = {
    key: 0,
    class: "click-to-play__text p1"
  },
  re = H({
    __name: "PreloaderNew",
    setup(k) {
      i.registerPlugin($t);
      const e = C("commonData"),
        o = D(),
        r = D(),
        s = C("preloader-done"),
        a = D(!1),
        {
          preloaderVideo: p,
          preloaderVideoMob: l,
          preloaderPoster: v,
          preloaderPosterMob: u
        } = e.value.pageData,
        {
          isMobile: d
        } = tt(),
        h = yt(() => d.value ? u?.original || v?.original || void 0 : v?.original || void 0);
      $t.create("ease-in-out", "0.22, 1, 0.36, 1");
      let b, g = !1,
        M = !1,
        N = !1;

      function B() {
        N || (N = !0, window.dispatchEvent(new Event("yodezeen:analytics")))
      }

      function I() {
        if (g || a.value || !o.value) return;
        g = !0;
        const E = o.value.duration - 5;
        o.value.ontimeupdate = () => {
          o.value?.currentTime >= E && (o.value.ontimeupdate = null, R())
        }, requestAnimationFrame(() => {
          setTimeout(() => L(), 0)
        })
      }
      async function L() {
        if (!o.value) return;
        const w = Number((o.value.duration / 4).toFixed(0)),
          E = document.querySelector(".preloader .logo"),
          S = document.querySelector(".preloader .text"),
          Et = document.querySelector(".header-inner .logo");
        try {
          await o.value.play(), W.value = !1, o.value.addEventListener("loadedmetadata", () => {
            const z = o.value.duration - 5;
            o.value.ontimeupdate = () => {
              o.value.currentTime >= z && (o.value.ontimeupdate = null, R())
            }
          }), b = i.timeline().add(() => {
            if (!S) return;
            const F = Ut(S, !0, .5).add(() => {
              F.reverse()
            }, "+=1");
            i.timeline().fromTo(".preloader .logo-wrap path", {
              willChange: "transform",
              opacity: 0,
              rotationY: 90
            }, {
              duration: .6,
              ease: "expo",
              opacity: 1,
              rotationY: 0,
              stagger: {
                each: .04,
                from: "start"
              }
            }).add(() => {
              i.to(".preloader .logo-wrap", {
                duration: 1.2,
                scale: .36,
                top: Kt(8),
                delay: .8,
                ease: "ease-in-out",
                transform: "translate(-50%, 0%)",
                onComplete() {
                  jt().name === "index" && Et && (ct(), i.to(S, {
                    autoAlpha: 0,
                    duration: .2
                  }), i.to(".preloader .logo-wrap", {
                    autoAlpha: 0,
                    duration: 1
                  }))
                }
              })
            }, "<4.2")
          }, `<${w/4}`).add(() => {}, `<${w/4+.2}`)
        } catch {
          W.value = !0, ot.value = !0
        }
      }

      function R() {
        i.timeline().to(".hero-content", {
          autoAlpha: 1,
          duration: 1,
          ease: "ease-in-out"
        }).to(".preloader .preloader-content", {
          autoAlpha: 0
        }, "<").add(() => {
          Q.isPreloaderAnimationEnd = !0, s.value = !0, Pt(!1), B()
        })
      }

      function G() {
        if (!o.value || a.value) return;
        g = !0, a.value = !0, W.value = !1, b && b.kill();
        const w = o.value.duration;
        w > 5 && (o.value.currentTime = w - 5), ct(), R()
      }

      function ct() {
        i.to(".after-preloader:not(.after-preloader-slow)", {
          autoAlpha: 1,
          duration: .6,
          ease: "second-ease",
          stagger: .05
        }), i.to(".after-preloader-slow", {
          autoAlpha: 1,
          duration: .6,
          ease: "second-ease",
          stagger: {
            each: .06,
            from: "center"
          }
        })
      }
      const W = D(!1),
        ot = D(!1),
        lt = C("last-route");

      function Z() {
        if (M || lt.value) return;
        M = !0;
        const w = o.value;
        if (w) {
          if (w.preload = "auto", w.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            I();
            return
          }
          w.addEventListener("loadeddata", I, {
            once: !0
          }), w.load()
        }
      }

      function wt() {
        if (lt.value) {
          G();
          return
        }
        const w = () => {
          const E = () => setTimeout(Z, 400),
            S = r.value;
          if (S && !S.complete) {
            S.addEventListener("load", E, {
              once: !0
            }), S.addEventListener("error", E, {
              once: !0
            }), setTimeout(E, 2500);
            return
          }
          E()
        };
        if (document.readyState === "complete") {
          w();
          return
        }
        window.addEventListener("load", w, {
          once: !0
        })
      }
      return et(() => {
        if (!o.value) return;
        wt();
        const E = () => {
          const S = o.value;
          !S || !S.duration || (S.currentTime = S.duration - .05)
        };
        document.addEventListener("visibilitychange", () => {
          document.visibilityState === "visible" && E()
        })
      }), (w, E) => {
        const S = Y;
        return _(), m("div", Qt, [t("div", Jt, [t("div", te, [t("video", {
          ref_key: "videoRef",
          ref: o,
          preload: "none",
          muted: "",
          playsinline: "",
          class: "inner-img preloader-video",
          poster: c(h)
        }, [c(l)?.original ? (_(), m("source", {
          key: 0,
          src: c(l).original,
          type: "video/mp4",
          media: "(max-width: 1023px)"
        }, null, 8, oe)) : it("", !0), c(p)?.original ? (_(), m("source", {
          key: 1,
          src: c(p).original,
          type: "video/mp4"
        }, null, 8, ae)) : it("", !0)], 8, ee)]), t("div", se, [t("p", ne, A(c(e).pageData.preloaderTitle), 1), E[1] || (E[1] = Tt('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" class="logo-wrap" viewBox="0 0 1248.29 245.15" data-v-c7447ede><path d="M55.21,241.35v-86.15L2,3.8h44.66l31.36,98.19L109.37,3.8h44.67l-53.22,151.4v86.15h-45.61Z" data-v-c7447ede></path><path d="M166.67,162.8v-80.45C166.67,27.24,194.86,0,241.11,0s74.43,27.24,74.43,82.35v80.45c0,55.42-28.19,82.34-74.43,82.34s-74.43-26.92-74.43-82.34ZM269.61,163.74v-82.34c0-31.05-10.76-41.18-28.5-41.18s-28.51,10.13-28.51,41.18v82.34c0,31.05,10.45,41.18,28.51,41.18s28.5-10.13,28.5-41.18Z" data-v-c7447ede></path><path d="M494.03,83.61v77.92c0,53.21-28.19,79.82-74.43,79.82h-71.27V3.8h71.27c46.24,0,74.43,26.61,74.43,79.82ZM448.1,162.17v-79.19c0-29.13-10.76-38.64-28.5-38.64h-25.35v156.47h25.35c17.73,0,28.5-9.51,28.5-38.64Z" data-v-c7447ede></path><path d="M638.53,241.35h-113.71V3.8h113.71v40.54h-68.1v55.11h61.77v40.54h-61.77v60.81h68.1v40.54Z" data-v-c7447ede></path><path d="M741.63,44.34h-78.55V3.8h121.94v50.05l-80.14,146.96h83.31v40.54h-126.69v-50.05l80.13-146.96Z" data-v-c7447ede></path><path d="M925.62,241.35h-113.71V3.8h113.71v40.54h-68.1v55.11h61.77v40.54h-61.77v60.81h68.1v40.54Z" data-v-c7447ede></path><path d="M1069.37,241.35h-113.71V3.8h113.71v40.54h-68.1v55.11h61.77v40.54h-61.77v60.81h68.1v40.54Z" data-v-c7447ede></path><path d="M1209.02,206.83V3.8h39.27v237.55h-70.31l-39.28-205.88v205.88h-39.27V3.8h70.32l39.27,203.03Z" data-v-c7447ede></path></svg><p class="logo" data-v-c7447ede>yodezeen</p>', 2)), t("button", {
          class: "skip-button p2",
          onClick: G
        }, [y(S, {
          text: "skip"
        })]), y(Dt, {
          name: "fade"
        }, {
          default: J(() => [c(W) ? (_(), m("div", {
            key: 0,
            class: "click-to-play inset",
            onClick: E[0] || (E[0] = () => c(ot) && L())
          }, [y(Dt, {
            name: "fade"
          }, {
            default: J(() => [c(ot) ? (_(), m("p", ie, " tap to play ")) : it("", !0)]),
            _: 1
          })])) : it("", !0)]),
          _: 1
        })])])])
      }
    }
  }),
  de = j(re, [
    ["__scopeId", "data-v-c7447ede"]
  ]),
  ce = {
    class: "main-hero"
  },
  le = {
    class: "hero-wrapper inset"
  },
  pe = {
    class: "hero-content"
  },
  ue = {
    class: "projects after-preloader"
  },
  _e = {
    class: "hero-projects__item p3"
  },
  me = {
    class: "hero-projects__item p3"
  },
  ve = H({
    __name: "HeroNew",
    setup(k) {
      const {
        hero: e
      } = C("commonData").value.pageData;
      return (o, r) => {
        const s = de,
          a = Y,
          p = xt;
        return _(), m("section", ce, [t("div", le, [y(s)]), t("div", pe, [t("p", ue, [t("span", _e, A(c(e)?.name), 1), t("span", me, A(c(e)?.location), 1)]), y(p, {
          to: c(e)?.path,
          class: "hero-button p2-button",
          type: "button"
        }, {
          default: J(() => [y(a, {
            text: "view project"
          })]),
          _: 1
        }, 8, ["to"])])])
      }
    }
  }),
  fe = j(ve, [
    ["__scopeId", "data-v-bd37d66e"]
  ]),
  he = {
    class: "about-sticky"
  },
  ye = {
    class: "content-wrapper"
  },
  ge = ["innerHTML"],
  xe = {
    class: "helpers"
  },
  we = H({
    __name: "About",
    setup(k) {
      const {
        about: e
      } = C("commonData").value.pageData;
      return (o, r) => (_(), m("div", {
        class: "main-about",
        style: Ct({
          height: `${100*c(e).titles.length}lvh`
        })
      }, [t("div", he, [t("h2", ye, [(_(!0), m(q, null, O(c(e).titles, (s, a) => (_(), m("div", {
        key: a,
        class: "about-content h3-400"
      }, [t("div", {
        class: "about-content__text h2",
        innerHTML: s
      }, null, 8, ge)]))), 128))])]), t("div", xe, [(_(), m(q, null, O(2, s => t("div", {
        key: s,
        class: "helpers__item"
      })), 64))])], 4))
    }
  }),
  Ee = j(we, [
    ["__scopeId", "data-v-d896f325"]
  ]),
  Ae = {
    class: "main-info"
  },
  ke = {
    class: "main-info__sticky"
  },
  be = {
    class: "main-info__content"
  },
  Se = {
    class: "main-info__photo"
  },
  $e = {
    class: "main-info__text"
  },
  De = ["innerHTML"],
  Me = {
    class: "main-info__descr2"
  },
  Te = ["innerHTML"],
  Pe = H({
    __name: "InfoNew",
    setup(k) {
      const {
        info: e
      } = C("commonData").value.pageData;
      return (o, r) => {
        const s = Lt,
          a = Y,
          p = xt;
        return _(), m("div", Ae, [t("div", ke, [t("div", be, [t("div", Se, [y(s, {
          data: c(e).image,
          class: "main-info__img",
          inner: "",
          alt: `Main ${c(e).descriptions[1]}`
        }, null, 8, ["data", "alt"])]), t("div", $e, [t("div", {
          class: "main-info__descr h4-400 anim-text",
          innerHTML: c(e).descriptions[0]
        }, null, 8, De), t("div", Me, [t("div", {
          class: "main-info__descr2-text anim-text",
          innerHTML: c(e).descriptions[1]
        }, null, 8, Te), y(p, {
          to: "/about",
          class: "main-info__descr2-button p2-button",
          type: "button"
        }, {
          default: J(() => [y(a, {
            text: "read more"
          })]),
          _: 1
        })])])])])])
      }
    }
  }),
  Ce = j(Pe, [
    ["__scopeId", "data-v-35c42426"]
  ]),
  Ue = {
    class: "new-sect"
  },
  Ie = {
    class: "new-sect__svg",
    "aria-hidden": "true"
  },
  Ge = ["id"],
  je = {
    class: "new-sect__pos"
  },
  Le = {
    class: "new-sect__text",
    x: "0",
    y: "0",
    "text-anchor": "middle",
    "dominant-baseline": "central",
    fill: "#fff",
    stroke: "#fff",
    "stroke-width": "0",
    "stroke-linejoin": "round",
    "stroke-linecap": "round",
    "paint-order": "stroke fill"
  },
  Re = ["mask"],
  qe = ["mask"],
  Oe = H({
    __name: "ProjectNameMask",
    props: {
      text: {}
    },
    setup(k, {
      expose: e
    }) {
      const o = Rt(),
        r = yt(() => `url(#${o})`),
        s = D(null),
        a = D(null);

      function p(u) {
        a.value?.setAttribute("href", u)
      }

      function l() {
        return s.value
      }

      function v() {
        return a.value
      }
      return e({
        setImage: p,
        getWordEl: l,
        getImageEl: v
      }), (u, d) => (_(), m("div", Ue, [(_(), m("svg", Ie, [t("defs", null, [t("mask", {
        id: c(o),
        maskUnits: "userSpaceOnUse",
        maskContentUnits: "userSpaceOnUse",
        x: "-400000",
        y: "-400000",
        width: "800000",
        height: "800000"
      }, [t("g", je, [t("g", {
        ref_key: "wordEl",
        ref: s,
        class: "new-sect__word"
      }, [t("text", Le, A(k.text), 1)], 512)])], 8, Ge)]), t("rect", {
        width: "100%",
        height: "100%",
        fill: "#fff",
        mask: c(r)
      }, null, 8, Re), t("image", {
        ref_key: "imageEl",
        ref: a,
        class: "new-img",
        width: "100%",
        height: "100%",
        preserveAspectRatio: "xMidYMid slice",
        mask: c(r)
      }, null, 8, qe)]))]))
    }
  }),
  He = j(Oe, [
    ["__scopeId", "data-v-c9f831e0"]
  ]),
  Ne = {
    class: "main-projects"
  },
  Be = {
    class: "sticky-wrapper inset"
  },
  Ve = {
    class: "sticky-container"
  },
  We = {
    ref: "canvasWrapperRef",
    class: "canvas-wrapper inset"
  },
  ze = {
    class: "projects"
  },
  Ye = {
    class: "projects__title h2"
  },
  Ze = H({
    __name: "Projects3",
    setup(k) {
      const e = C("from-main-to-project"),
        o = D(null),
        r = () => {
          const n = o.value,
            f = s[0]?.image?.large || s[0]?.image?.original;
          n && f && n.setImage(f), e.value = !0, Ot(`/projects/${a(s[0].categories)}/${a(s[0].services)}/${s[0].slug}`);
          const x = i.timeline();
          x.to(".project-cover", {
            opacity: 1,
            duration: 1,
            ease: "power4.in"
          });
          const $ = n?.getWordEl();
          if ($) {
            x.to($, {
              scaleX: 2e3 / 18.375 * 3,
              scaleY: 1e3 / 3.5 * 3,
              svgOrigin: "0 0",
              duration: 1.5,
              ease: "power4.in"
            }, "<");
            const U = $.querySelector("text");
            U && x.to(U, {
              attr: {
                "stroke-width": 8
              },
              duration: 1.5,
              ease: "power4.in"
            }, "<")
          }
          const T = n?.getImageEl();
          T && x.to(T, {
            opacity: 1,
            ease: "power4.in"
          }, "<")
        },
        {
          projects: s
        } = C("commonData").value.pageData,
        a = n => (Array.isArray(n) ? n.join("&") : n).toLowerCase().replace(/\s+/g, "-"),
        p = D(),
        l = D(),
        v = D(null),
        u = D(null);
      let d = null,
        h = null;
      const b = D(0),
        g = D(-1),
        M = yt(() => (s[g.value] ?? s[0])?.name?.trim().toUpperCase() ?? ""),
        N = [],
        B = new Map;
      let I = 912,
        L = 1,
        R = "new";
      const {
        isDesktop: G
      } = tt(), ct = yt(() => /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      I = G.value ? 569 : 568, L = 1, R = G.value ? "desk3" : "mob2";
      const W = {
        width: 1920,
        height: 1080
      };

      function ot(n) {
        return new Promise(f => {
          const x = new Image;
          x.decoding = "sync", x.loading = "eager", x.fetchPriority = "low", x.onload = () => {
            f(x)
          }, x.src = n
        })
      }
      async function lt() {
        I = G.value ? 569 : 568, R = G.value ? "desk3" : "mob2";
        const n = [];
        if (G.value)
          for (let f = 1; f <= I * L; f += L) n.push(`https://cdn.yodezeen.com/sequence/${R}/frame_${Number(f).toString().padStart(4,"0")}.jpg`);
        else
          for (let f = 1; f <= I * L; f += L) n.push(`https://cdn.yodezeen.com/sequence/${R}/${Number(f).toString().padStart(4,"0")}.jpg`);
        at = new Worker("/workers/image-worker.js"), at.postMessage(n), at.addEventListener("message", async function({
          data: f
        }) {
          for (const x of f) {
            const $ = await ot(x.url);
            N.push({
              id: x.id,
              img: $
            }), B.set(x.id, $)
          }
        }, !1)
      }
      let Z = G.value ? 140 : 0;

      function wt(n) {
        const f = v.value,
          x = u.value;
        if (!x || !f) return;
        const $ = f.width,
          T = f.height,
          U = h || x,
          ut = d ? d.width : $,
          _t = d ? d.height : T;
        U.fillStyle = "#000", U.fillRect(0, 0, ut, _t);
        const mt = Math.round(n.naturalWidth || W.width),
          X = Math.round(n.naturalHeight || W.height);
        let V = Math.round(Z) - 1,
          vt = Math.round(X - Z * 2) + 2;
        V < 0 && (V = 0), V + vt > X && (vt = X - V);
        const At = mt / vt,
          It = $ / T;
        let st = $,
          nt = T,
          ft = 0,
          ht = 0;
        It > At ? (nt = $ / At, ht = (T - nt) / 2) : (st = T * At, ft = ($ - st) / 2), st = Math.round(st) + 2, nt = Math.round(nt) + 2, ft = Math.round(ft) - 1, ht = Math.round(ht) - 1, U.drawImage(n, 0, V, mt, vt, ft, ht, st, nt), d && x.drawImage(d, 0, 0)
      }

      function w() {
        i.fromTo(b, {
          value: 0
        }, {
          value: I - 1,
          roundProps: "value",
          ease: "none",
          scrollTrigger: {
            trigger: ".main-projects",
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          }
        })
      }

      function E() {
        const n = v.value;
        if (!n) return;
        const f = window.devicePixelRatio || 1,
          $ = n.parentElement?.getBoundingClientRect(),
          T = Math.round($?.width || window.innerWidth),
          U = Math.round($?.height || window.innerHeight),
          ut = Math.round(T * f),
          _t = Math.round(U * f);
        n.width = ut + ut % 2, n.height = _t + _t % 2, n.style.width = `${T}px`, n.style.height = `${U}px`;
        const mt = {
          alpha: !1,
          desynchronized: !ct.value
        };
        if (u.value = n.getContext("2d", mt), u.value) {
          const V = G.value;
          u.value.imageSmoothingEnabled = V, u.value.imageSmoothingQuality = V ? "high" : "low"
        }
        G.value ? (d = null, h = null) : (d || (d = document.createElement("canvas")), d.width = n.width, d.height = n.height, h = d.getContext("2d", {
          alpha: !1
        }), h && (h.imageSmoothingEnabled = u.value?.imageSmoothingEnabled ?? !1, h.imageSmoothingQuality = u.value?.imageSmoothingQuality ?? "low"));
        const X = B.get(b.value);
        X && kt(X)
      }
      const S = () => {
        P.create({
          trigger: ".main-projects",
          start: "top top",
          end: "bottom bottom",
          onEnter() {
            i.to(".main-projects .projects, .main-projects .new-sect", {
              autoAlpha: 1,
              duration: .25
            })
          },
          onLeave() {
            i.to(".main-projects .projects, .main-projects .new-sect", {
              autoAlpha: 0,
              duration: .25
            })
          },
          onEnterBack() {
            i.to(".main-projects .projects, .main-projects .new-sect", {
              autoAlpha: 1,
              duration: .25
            })
          },
          onLeaveBack() {
            i.to(".main-projects .projects, .main-projects .new-sect", {
              autoAlpha: 0,
              duration: .25
            })
          }
        })
      };
      async function Et() {
        E(), await lt(), w()
      }

      function F(n) {
        n.code === "KeyH" && (Z = Z ? 0 : 140)
      }
      let z = null,
        pt = null;

      function kt(n) {
        pt = n, z == null && (z = requestAnimationFrame(() => {
          z = null, pt && (wt(pt), pt = null)
        }))
      }
      gt(() => b.value, n => {
        n > 1 && n <= 360 ? g.value = 0 : n > 360 && n <= 593 ? g.value = 1 : n > 593 && n <= I ? g.value = 2 : g.value = -1;
        const f = B.get(n);
        f && kt(f)
      });
      let at = null,
        bt = !1;
      const St = () => {
        bt || (bt = !0, Et(), S(), window.addEventListener("resize", E))
      };
      return et(async () => {
        if (await dt(), document.addEventListener("keydown", F), Q.isPreloaderAnimationEnd) St();
        else {
          const n = gt(() => Q.isPreloaderAnimationEnd, f => {
            f && (n(), St())
          })
        }
      }), qt(() => {
        window.removeEventListener("resize", E), document.removeEventListener("keydown", F), at?.terminate(), at = null, z != null && cancelAnimationFrame(z)
      }), (n, f) => {
        const x = Y,
          $ = He;
        return _(), m("section", Ne, [t("div", Be, [t("div", Ve, [f[0] || (f[0] = t("picture", null, [t("source", {
          media: "(max-width: 1023px)",
          srcset: "https://cdn.yodezeen.com/sequence/mob2/0001.jpg"
        }), t("img", {
          src: "https://cdn.yodezeen.com/sequence/desk3/frame_0001.jpg",
          class: "inner-img project-img",
          alt: "",
          fetchpriority: "low",
          decoding: "async"
        })], -1)), t("div", We, [t("canvas", {
          id: "canvas",
          ref_key: "canvasRef",
          ref: v,
          class: "projects-canvas"
        }, null, 512)], 512), f[1] || (f[1] = t("div", {
          class: "project-cover"
        }, null, -1)), t("ul", ze, [(_(!0), m(q, null, O(c(s), (T, U) => (_(), m("li", {
          key: U,
          class: rt(["projects__item", {
            active: c(g) === U
          }])
        }, [t("p", {
          ref_for: !0,
          ref_key: "detailsRef",
          ref: p,
          class: "projects__details p2"
        }, A(T.location), 513), t("h2", Ye, A(T.name), 1), t("div", {
          ref_for: !0,
          ref_key: "linksRef",
          ref: l,
          class: "projects__link"
        }, [t("button", {
          onClick: r
        }, [y(x, {
          text: "view project"
        })])], 512)], 2))), 128))]), y($, {
          ref_key: "nameMaskRef",
          ref: o,
          text: c(M)
        }, null, 8, ["text"])])])])
      }
    }
  }),
  Fe = j(Ze, [
    ["__scopeId", "data-v-74e74a1a"]
  ]),
  Xe = {
    class: "other"
  },
  Ke = {
    class: "sticky"
  },
  Qe = {
    class: "title h1"
  },
  Je = {
    class: "word-1"
  },
  to = {
    class: "word-2"
  },
  eo = {
    class: "items"
  },
  oo = {
    class: "item-name"
  },
  ao = H({
    __name: "Services2",
    setup(k) {
      const {
        pageData: e
      } = C("commonData").value;
      et(async () => {
        await dt(), setTimeout(() => {
          r()
        }, 500)
      });
      const {
        isMobile: o
      } = tt(), r = () => {
        const s = document.querySelectorAll("section.other .item");
        i.fromTo("section.other .title .word-1, section.other .title .word-2", {
          yPercent: 150,
          rotate: 2
        }, {
          ease: "power4.inOut",
          yPercent: 0,
          rotate: 0,
          stagger: .1,
          duration: 1,
          scrollTrigger: {
            trigger: "section.other .title",
            start: "top bottom"
          }
        });
        const a = i.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: "section.other",
            start: "top top",
            end: "bottom bottom",
            scrub: o.value ? !0 : 1
          }
        });
        a.to("section.other .title", {
          opacity: .1
        }), a.to("section.other .title .word-1", {
          x: o.value ? "-13rem" : "-27rem"
        }, "<"), a.to("section.other .title .word-2", {
          x: o.value ? "13rem" : "27rem"
        }, "<"), a.from("section.other .items", {
          yPercent: 100
        }, "<"), a.from(s, {
          yPercent: p => 100 * p * p
        }, "<"), a.from(".other .view-all-btn", {
          opacity: 0,
          duration: .1
        })
      };
      return (s, a) => {
        const p = Y,
          l = xt;
        return _(), m("section", Xe, [t("div", Ke, [t("div", Qe, [t("div", Je, A(c(e).services.title[0]), 1), t("div", to, A(c(e).services.title[1]), 1)]), t("div", eo, [(_(!0), m(q, null, O(c(e).services.data, (v, u) => (_(), m("div", {
          key: u,
          class: "item"
        }, [t("div", oo, A(v), 1)]))), 128)), y(l, {
          to: "/projects",
          class: "view-all-btn"
        }, {
          default: J(() => [y(p, {
            text: "VIEW ALL PROJECTS"
          })]),
          _: 1
        })])])])
      }
    }
  }),
  so = j(ao, [
    ["__scopeId", "data-v-c3f31a37"]
  ]),
  no = {};

function io(k, e) {
  return _(), m("div", null, [...e[0] || (e[0] = [Tt('<svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" class="desk inner-svg" data-v-d4684da5><line opacity="0.03" x1="24.25" y1="-1.09278e-08" x2="24.25" y2="800" stroke="url(#paint0_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.05" x1="140.25" y1="-1.09278e-08" x2="140.25" y2="800" stroke="url(#paint1_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="256.25" y1="-1.09278e-08" x2="256.25" y2="800" stroke="url(#paint2_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="372.25" y1="-1.09278e-08" x2="372.25" y2="800" stroke="url(#paint3_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="488.25" y1="-1.09278e-08" x2="488.25" y2="800" stroke="url(#paint4_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="604.25" y1="-1.09278e-08" x2="604.25" y2="800" stroke="url(#paint5_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="720.25" y1="-1.09278e-08" x2="720.25" y2="800" stroke="url(#paint6_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="836.25" y1="-1.09278e-08" x2="836.25" y2="800" stroke="url(#paint7_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="952.25" y1="-1.09278e-08" x2="952.25" y2="800" stroke="url(#paint8_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="1068.25" y1="-1.09278e-08" x2="1068.25" y2="800" stroke="url(#paint9_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="1184.25" y1="-1.09278e-08" x2="1184.25" y2="800" stroke="url(#paint10_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.05" x1="1300.25" y1="-1.09278e-08" x2="1300.25" y2="800" stroke="url(#paint11_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.03" x1="1416.25" y1="-1.09278e-08" x2="1416.25" y2="800" stroke="url(#paint12_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" y1="51.75" x2="1440" y2="51.75" stroke="url(#paint13_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" y1="167.75" x2="1440" y2="167.75" stroke="url(#paint14_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" y1="283.75" x2="1440" y2="283.75" stroke="url(#paint15_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" y1="399.75" x2="1440" y2="399.75" stroke="url(#paint16_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" y1="515.75" x2="1440" y2="515.75" stroke="url(#paint17_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" y1="631.75" x2="1440" y2="631.75" stroke="url(#paint18_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" y1="747.75" x2="1440" y2="747.75" stroke="url(#paint19_linear_3286_10477)" stroke-width="0.5" data-v-d4684da5></line><defs data-v-d4684da5><linearGradient id="paint0_linear_3286_10477" x1="23.5" y1="2.18557e-08" x2="23.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint1_linear_3286_10477" x1="139.5" y1="2.18557e-08" x2="139.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint2_linear_3286_10477" x1="255.5" y1="2.18557e-08" x2="255.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint3_linear_3286_10477" x1="371.5" y1="2.18557e-08" x2="371.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint4_linear_3286_10477" x1="487.5" y1="2.18557e-08" x2="487.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint5_linear_3286_10477" x1="603.5" y1="2.18557e-08" x2="603.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint6_linear_3286_10477" x1="719.5" y1="2.18557e-08" x2="719.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint7_linear_3286_10477" x1="835.5" y1="2.18557e-08" x2="835.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint8_linear_3286_10477" x1="951.5" y1="2.18557e-08" x2="951.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint9_linear_3286_10477" x1="1067.5" y1="2.18557e-08" x2="1067.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint10_linear_3286_10477" x1="1183.5" y1="2.18557e-08" x2="1183.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint11_linear_3286_10477" x1="1299.5" y1="2.18557e-08" x2="1299.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint12_linear_3286_10477" x1="1415.5" y1="2.18557e-08" x2="1415.5" y2="800" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint13_linear_3286_10477" x1="0" y1="52.5" x2="1440" y2="52.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint14_linear_3286_10477" x1="0" y1="168.5" x2="1440" y2="168.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint15_linear_3286_10477" x1="0" y1="284.5" x2="1440" y2="284.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint16_linear_3286_10477" x1="0" y1="400.5" x2="1440" y2="400.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint17_linear_3286_10477" x1="0" y1="516.5" x2="1440" y2="516.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint18_linear_3286_10477" x1="0" y1="632.5" x2="1440" y2="632.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint19_linear_3286_10477" x1="0" y1="748.5" x2="1440" y2="748.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient></defs></svg><svg width="375" height="632" viewBox="0 0 375 632" fill="none" xmlns="http://www.w3.org/2000/svg" class="mob inner-svg" data-v-d4684da5><g clip-path="url(#clip0_24_565)" data-v-d4684da5><line opacity="0.1" x1="71.25" y1="-1.09278e-08" x2="71.25" y2="610" stroke="url(#paint0_linear_24_565)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="187.25" y1="-1.09278e-08" x2="187.25" y2="610" stroke="url(#paint1_linear_24_565)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="303.25" y1="-1.09278e-08" x2="303.25" y2="610" stroke="url(#paint2_linear_24_565)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="-533" y1="179.75" x2="907" y2="179.75" stroke="url(#paint3_linear_24_565)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="-533" y1="295.75" x2="907" y2="295.75" stroke="url(#paint4_linear_24_565)" stroke-width="0.5" data-v-d4684da5></line><line opacity="0.1" x1="-533" y1="411.75" x2="907" y2="411.75" stroke="url(#paint5_linear_24_565)" stroke-width="0.5" data-v-d4684da5></line></g><defs data-v-d4684da5><linearGradient id="paint0_linear_24_565" x1="70.5" y1="2.18557e-08" x2="70.5" y2="610" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint1_linear_24_565" x1="186.5" y1="2.18557e-08" x2="186.5" y2="610" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint2_linear_24_565" x1="302.5" y1="2.18557e-08" x2="302.5" y2="610" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint3_linear_24_565" x1="-533" y1="180.5" x2="907" y2="180.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint4_linear_24_565" x1="-533" y1="296.5" x2="907" y2="296.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><linearGradient id="paint5_linear_24_565" x1="-533" y1="412.5" x2="907" y2="412.5" gradientUnits="userSpaceOnUse" data-v-d4684da5><stop stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop><stop offset="0.210209" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="0.789815" stop-color="#2D2A2A" data-v-d4684da5></stop><stop offset="1" stop-color="#E0E0E0" stop-opacity="0" data-v-d4684da5></stop></linearGradient><clipPath id="clip0_24_565" data-v-d4684da5><rect width="375" height="632" fill="white" data-v-d4684da5></rect></clipPath></defs></svg>', 2)])])
}
const ro = j(no, [
    ["render", io],
    ["__scopeId", "data-v-d4684da5"]
  ]),
  co = {
    class: "map"
  },
  lo = {
    class: "wrap-svg sticky"
  },
  po = {
    class: "text-line-wrap"
  },
  uo = {
    class: "regions-wrapper"
  },
  _o = ["onClick"],
  mo = {
    class: "map-box"
  },
  vo = {
    class: "map-container"
  },
  fo = {
    class: "map-cities"
  },
  ho = {
    class: "map-degrees"
  },
  yo = H({
    __name: "Map4",
    props: {
      concept5: {
        type: Boolean,
        default: !1
      }
    },
    setup(k) {
      const {
        map: e
      } = C("commonData").value.pageData, o = D(0), r = ["America", "Europe", "Africa", "Asia"], s = ["180°", "120°", "60°", "0°", "60°", "120°", "180°"], {
        cities: a
      } = Wt(), {
        isMobile: p
      } = tt(), l = i.matchMedia();

      function v() {
        l.add("(min-width: 1024px)", () => {
          i.fromTo(".map-city", {
            opacity: 0
          }, {
            scrollTrigger: {
              trigger: "section.map .plash",
              start: "top 135%",
              end: "bottom bottom",
              scrub: !0
            },
            opacity: 1,
            stagger: .2,
            clearProps: "opacity"
          });
          const u = i.timeline({
            scrollTrigger: {
              trigger: "section.map .plash-text",
              start: "top bottom",
              end: "bottom bottom",
              scrub: !0
            }
          });
          u.to(".text-line-wrap .text.n1", {
            x: "-100%",
            ease: "none",
            duration: 1
          }), u.to(".text-line-wrap .text.n1", {
            opacity: .1,
            ease: "none",
            delay: .3,
            duration: .4
          }, "<"), u.to(".text-line-wrap .text.n2", {
            x: "-100%",
            ease: "none",
            delay: .24,
            duration: .8
          }, "<-=0.35"), u.to(".text-line-wrap .text.n2", {
            opacity: .1,
            ease: "none",
            delay: .3,
            duration: .4
          }, "<"), u.to(".text-line-wrap .text.n3", {
            x: "-100%",
            ease: "none",
            delay: .25,
            duration: .65
          }, "<-=0.3"), u.to(".text-line-wrap .text.n3", {
            opacity: .1,
            ease: "none",
            delay: .15,
            duration: .35
          }, "<"), P.create({
            trigger: "section.map .plash",
            start: "top bottom",
            end: "bottom bottom",
            scrub: !0,
            onEnter() {
              document.querySelector(".view-projects")?.classList.add("active")
            },
            onLeaveBack() {
              document.querySelector(".view-projects")?.classList.remove("active")
            }
          })
        })
      }
      return et(async () => {
        await dt(), !p.value && setTimeout(v, 500)
      }), (u, d) => {
        const h = Y,
          b = xt;
        return _(), m("section", co, [t("div", lo, [y(b, {
          to: "/projects",
          class: "view-projects"
        }, {
          default: J(() => [y(h, {
            text: "view all projects"
          })]),
          _: 1
        }), t("div", po, [(_(!0), m(q, null, O(c(e).texts, (g, M) => (_(), m("p", {
          key: M,
          class: rt([`text h2 n${M+1}`, {
            pt: k.concept5
          }])
        }, A(g), 3))), 128))]), t("div", uo, [t("div", {
          class: "regions-inner",
          style: Ct(`--active-region-id: ${c(o)}; --regions-count: ${r.length}`)
        }, [(_(), m(q, null, O(2, g => t("div", {
          key: g,
          class: "regions"
        }, [(_(), m(q, null, O(r, (M, N) => t("button", {
          key: N,
          type: "button",
          class: "regions__button",
          onClick: B => o.value = N
        }, A(M), 9, _o)), 64))])), 64))], 4)]), t("div", mo, [t("div", vo, [y(c(ro), {
          class: "lines-svg"
        }), t("div", fo, [(_(!0), m(q, null, O(c(a), (g, M) => (_(), m("div", {
          key: M,
          class: rt(["map-city", {
            visible: g.region === r[c(o)]
          }])
        }, A(g.name), 3))), 128))]), t("div", ho, [(_(), m(q, null, O(s, (g, M) => t("div", {
          key: M,
          class: "map-degree"
        }, A(g), 1)), 64))])])])]), d[0] || (d[0] = t("div", {
          class: "plash-text"
        }, null, -1)), d[1] || (d[1] = t("div", {
          class: "plash"
        }, null, -1))])
      }
    }
  }),
  go = j(yo, [
    ["__scopeId", "data-v-ef0e870a"]
  ]),
  xo = {
    class: "book-section__inner"
  },
  wo = {
    class: "book-text1 h1"
  },
  Eo = {
    class: "main-info__text"
  },
  Ao = {
    class: "list"
  },
  ko = {
    class: "list__item-title"
  },
  bo = {
    class: "list__item-number"
  },
  So = {
    class: "main-info__descr2-button p2-button",
    type: "button"
  },
  $o = {
    class: "book-text h1 align-right"
  },
  Do = {
    class: "book"
  },
  Mo = ["src"],
  To = H({
    __name: "BookSection",
    props: {
      concept5: {
        type: Boolean,
        default: !1
      }
    },
    setup(k) {
      const {
        book: e
      } = C("commonData").value.pageData, o = [{
        title: "THE PHILOSOPHY",
        number: "9"
      }, {
        title: "GRAND UNDERTAKINGS",
        number: "15"
      }, {
        title: "ARCHITECTURAL RESIDENCES",
        number: "101"
      }, {
        title: "COMMERCIAL SPACES",
        number: "241"
      }, {
        title: "EXPANSIVE INTERIORS",
        number: "289"
      }, {
        title: "INSIGHTS BEHIND THE WORK",
        number: "337"
      }], {
        isMobile: r
      } = tt();
      return et(async () => {
        await dt(), setTimeout(() => {
          r.value ? i.from(".book", {
            rotation: 10,
            xPercent: 50,
            scrollTrigger: {
              trigger: ".book-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }) : i.from(".book", {
            rotation: 2,
            xPercent: 100,
            scrollTrigger: {
              trigger: ".book-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          })
        }, 500)
      }), (s, a) => {
        const p = Y;
        return _(), m("section", {
          class: rt(["section book-section", {
            concept5: k.concept5
          }])
        }, [t("div", xo, [t("h2", wo, A(c(e).title[0]), 1), t("div", Eo, [t("div", {
          class: rt(["main-info__descr h4-400 anim-text", {
            big: k.concept5
          }])
        }, A(c(e).description), 3), t("ul", Ao, [(_(), m(q, null, O(o, (l, v) => t("li", {
          key: v,
          class: "list__item"
        }, [t("div", ko, A(l.title), 1), t("div", bo, A(l.number), 1)])), 64))]), t("button", So, [y(p, {
          text: "Coming soon"
        })])]), t("h2", $o, A(c(e).title[1]), 1), t("div", Do, [t("img", {
          src: c(e).image.original,
          alt: "book",
          class: "book__img"
        }, null, 8, Mo)])])], 2)
      }
    }
  }),
  Po = j(To, [
    ["__scopeId", "data-v-3ce2b1d5"]
  ]);
class Co extends Vt {
  constructor(e) {
    super(e), this.commonAnim(), this.animateHero(), this.animateAbout(), this.animateInfo(), this.animateServices(), this.animateAwards(), this.animateContact()
  }
  async animateHero() {
    const e = this.parent?.querySelector(".main-hero");
    if (!e) return;
    await K(), P.create({
      trigger: e,
      scrub: !0,
      start: "bottom bottom",
      end: "bottom top",
      animation: i.to(".hero-wrapper", {
        y: window.innerHeight / 2.5 + "px",
        ease: "none"
      })
    });
    const o = e.querySelector(".hero-thumb");
    o && (i.set(o, {
      scale: 1.01
    }), o.addEventListener("mousemove", r => {
      const {
        clientX: s,
        clientY: a
      } = r, {
        innerWidth: p,
        innerHeight: l
      } = window, v = s / p, d = `${-1+a/l*2}deg`, h = `${-1+v*2}deg`;
      i.to(o, {
        transform: `rotateX(${d}) rotateY(${h}) translateZ(-15vw) scale(1.01)`,
        duration: 1.2
      })
    }))
  }
  async animateAbout() {
    const e = document.querySelector(".main-about");
    if (!e) return;
    await K();
    const o = e.querySelector(".content-wrapper"),
      r = e.querySelectorAll(".helpers__item"),
      s = e.querySelectorAll(".about-content"),
      a = i.timeline({
        scrollTrigger: {
          trigger: r[0],
          endTrigger: r[1],
          start: "50% bottom",
          end: "70% top",
          scrub: !0
        }
      });
    s.forEach(p => {
      const l = new Mt(p, {
        type: "words,chars",
        tag: "span",
        charsClass: "split-char"
      });
      i.set(l.words, {
        perspective: 1e3
      });
      const v = i.timeline();
      l.words.forEach(u => {
        const d = u.querySelectorAll(".split-char"),
          h = i.timeline().fromTo([...d], {
            willChange: "transform",
            opacity: 0,
            rotationY: 90
          }, {
            duration: .72,
            ease: "expo",
            opacity: 1,
            rotationY: 0,
            stagger: {
              each: .04,
              from: "end"
            }
          }).to([...d], {
            delay: 2.4,
            ease: "expo",
            duration: .72,
            opacity: 0,
            rotationY: 90,
            stagger: {
              each: .04,
              from: "end"
            }
          });
        v.add(h, `previous+=${Math.random()*.5}`)
      }), a.add(v)
    }), P.create({
      trigger: r[1],
      start: "bottom bottom",
      end: "50% top",
      scrub: !0,
      animation: i.to(o, {
        ease: "none",
        yPercent: 25
      })
    }), P.create({
      trigger: r[0],
      start: "50% bottom",
      end: "bottom bottom",
      scrub: !0,
      animation: i.from(o, {
        yPercent: -25,
        ease: "none"
      })
    })
  }
  async animateInfo() {
    const {
      isMobile: e
    } = tt();
    if (e.value) return;
    const o = document.querySelector(".main-info");
    if (!o) return;
    await K();
    const r = o.querySelector(".main-info__photo"),
      s = o.querySelector(".main-info__img"),
      a = o.querySelector(".main-info__text"),
      p = o.querySelector(".main-info__descr2"),
      l = i.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: o,
          start: "top center",
          end: "bottom bottom",
          scrub: !0
        }
      });
    l.from(r, {
      flex: "0 0 0%"
    }), l.from(s, {
      scale: 1.2
    }, 0), l.fromTo(a, {
      yPercent: 100
    }, {
      yPercent: 0
    }, 0), l.to(p, {
      x: 0,
      duration: .4
    }, "<"), P.create({
      trigger: o,
      start: "bottom bottom",
      end: "bottom top",
      scrub: !0,
      animation: i.to(s, {
        yPercent: 40,
        ease: "none"
      })
    })
  }
  async animateServices() {
    const e = this.parent?.querySelector(".main-services");
    if (!e) return;
    await K();
    const o = e.querySelectorAll(".services-wrapper"),
      r = e.querySelector(".services-title"),
      s = e.querySelectorAll(".services-title__item");
    P.create({
      trigger: o[0],
      start: "50% bottom",
      animation: i.timeline().add(() => {
        r && Ut(r)
      })
    }), P.create({
      trigger: o[0],
      start: "top top",
      end: "bottom top",
      scrub: !0,
      animation: i.timeline().to(s[0], {
        opacity: .1,
        x: s[0].getBoundingClientRect().left * -1
      }).to(s[1], {
        opacity: .1,
        x: window.innerWidth - s[1].getBoundingClientRect().right
      }, 0)
    });
    const a = l => {
      let v = null;
      v || (v = new Mt(l, {
        type: "lines"
      }));
      const u = v.lines;
      let d = null;
      const h = i.timeline({
        paused: !0
      });
      return i.set(u, {
        overflow: "hidden",
        paddingBottom: "0.4rem",
        marginBottom: "-0.4rem"
      }), u.forEach(b => {
        b.innerHTML = `<div class="line-text-">${b.textContent}</div>`
      }), d = l.querySelectorAll(".line-text-"), i.set(d, {
        y: "110%"
      }), h.to(d, {
        y: 0,
        duration: 1.2,
        ease: "expo",
        stagger: {
          each: .05,
          ease: "expo"
        }
      }), () => h.play()
    };
    e.querySelectorAll(".main-services__item-text").forEach(l => {
      const v = a(l);
      P.create({
        trigger: l,
        start: "top 90%",
        once: !0,
        onEnter: () => {
          v()
        }
      })
    }), e._animation && e._animation()
  }
  async animateAwards() {
    const e = document.querySelector(".main-awards");
    if (!e) return;
    await K();
    const o = e.querySelector(".main-awards__items"),
      r = e.querySelectorAll(".main-awards__item");
    P.create({
      trigger: o,
      animation: i.from(r, {
        stagger: .05,
        opacity: 0,
        y: 90,
        onComplete: () => {
          i.set(r, {
            clearProps: "all"
          })
        }
      })
    })
  }
  async animateContact() {
    const e = document.querySelector(".main-contact");
    if (!e) return;
    const o = e.querySelectorAll(".main-contact__item-timezone"),
      r = (a, p) => {
        const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()/[]{}";
        let v = p;
        for (let u = 0; u < a; u++) v = l.charAt(Math.floor(Math.random() * l.length));
        return v
      },
      s = a => {
        const p = [],
          d = a.textContent || "";
        i.set(a, {
          width: a.getBoundingClientRect().width + 10
        }), a.textContent = d.replace(/./g, " ");
        for (let h = 0; h < d.length; h++) {
          if (d[h] === " ") continue;
          const b = Math.random() * (.8 - .5) + .5;
          p.push(i.to({}, {
            duration: b,
            delay: Math.random(),
            onUpdate: function() {
              a && (a.textContent = String(a.textContent).substring(0, h) + r(5, d[h]) + String(a.textContent).substring(h + 1))
            },
            onComplete: function() {
              a && (a.textContent = String(a.textContent).substring(0, h) + d[h] + String(a.textContent).substring(h + 1))
            },
            ease: "expo"
          }))
        }
      };
    o.forEach(a => {
      P.create({
        trigger: a,
        start: "top 80%",
        once: !0,
        onEnter: () => {
          s(a)
        }
      })
    })
  }
  async commonAnim() {
    await K();
    const e = document.querySelectorAll(".anim-text");
    e.length !== 0 && e.forEach(o => {
      const {
        trigger: r
      } = o.dataset;
      P.create({
        trigger: o,
        start: `${r||"bottom"} bottom`,
        animation: Ft(o, {
          duration: .5,
          delay: .1,
          stagger: .05
        })
      })
    })
  }
}
const Uo = {
    class: "page-concept-3"
  },
  Io = {
    class: "header"
  },
  Go = {
    class: "page test-page"
  },
  jo = {
    class: "main-contact-wrap"
  },
  Lo = {
    class: "footer-wrapper"
  },
  Ro = {
    key: 0,
    class: "overlay inset"
  },
  qo = H({
    __name: "index",
    setup(k) {
      Xt();
      const {
        pageData: e
      } = C("commonData").value;
      e && Ht(e.meta), Nt({
        meta: [{
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        }],
        link: [...e?.preloaderPoster ? [{
          rel: "preload",
          as: "image",
          href: e.preloaderPoster.original,
          media: "(min-width: 1024px)",
          fetchpriority: "high"
        }] : [], ...e?.preloaderPosterMob ? [{
          rel: "preload",
          as: "image",
          href: e.preloaderPosterMob.original,
          media: "(max-width: 1023px)",
          fetchpriority: "high"
        }] : []]
      });
      const o = D(-1),
        r = C("transition-inner-done");
      let s = !1;
      gt(r, async p => {
        !p || !Q.isPreloaderAnimationEnd || (await dt(), a())
      }), gt(() => Q.isPreloaderAnimationEnd, p => {
        p && (Pt(!1), r.value && a(), P.refresh())
      }), et(() => {
        r.value && Q.isPreloaderAnimationEnd && a(), i.to(".test-page", {
          opacity: 1
        })
      });
      const a = () => {
        s || (s = !0, localStorage.setItem("visited", "true"), new Co(".test-page"))
      };
      return (p, l) => {
        const v = Gt,
          u = Bt,
          d = fe,
          h = Ee,
          b = Ce,
          g = Fe,
          M = so,
          N = go,
          B = zt,
          I = Po,
          L = Yt,
          R = Zt;
        return _(), m("div", Uo, [y(v), l[0] || (l[0] = t("h1", {
          class: "visually-hidden"
        }, "YODEZEEN MAIN PAGE", -1)), t("header", Io, [y(u, {
          "show-immediate": !1,
          class: "menu-wrapper after-preloader"
        })]), t("main", Go, [y(d), y(h, {
          "dark-header": ""
        }), y(b, {
          "dark-header": ""
        }), y(g, {
          "dark-header": ""
        }), y(M, {
          "dark-header": ""
        }), y(N, {
          concept5: "",
          "dark-header": ""
        }), y(B, {
          "dark-header": ""
        }), y(I, {
          concept5: "",
          "dark-header": ""
        }), t("div", jo, [y(L, {
          "main-page": "",
          "dark-header": ""
        })]), t("div", Lo, [y(R)])]), c(o) !== -1 ? (_(), m("div", Ro)) : it("", !0)])
      }
    }
  }),
  Zo = j(qo, [
    ["__scopeId", "data-v-b48661f3"]
  ]);
export {
  Zo as
  default
};