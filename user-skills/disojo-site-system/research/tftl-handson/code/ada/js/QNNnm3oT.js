/* https://aventuradentalarts.com/_nuxt/QNNnm3oT.js */
import {
  u as B,
  a as tt,
  _ as et
} from "./COkvdYZ_.js";
import {
  I as H,
  d as I,
  b as O,
  c as q,
  U as Q,
  o as e,
  e as s,
  i as t,
  f as n,
  F as $,
  r as T,
  h as A,
  A as R,
  k as S,
  n as L,
  K as Y,
  q as i,
  x as z,
  g as j,
  C as D,
  t as k,
  N as U,
  m as P,
  j as f,
  D as N,
  V as st,
  O as K,
  v as F,
  y as ot,
  S as G,
  L as X,
  W as nt,
  X as at,
  p as it,
  s as rt,
  u as lt,
  J as Z,
  Y as ct,
  P as dt,
  Q as pt,
  R as ut,
  T as mt
} from "./C3LIzMiL.js";
import {
  p as W,
  i as gt,
  u as _t
} from "./AkxaoDpK.js";
import {
  _ as ht
} from "./CpcOjxkA.js";
import {
  S as vt,
  N as ft
} from "./jnTzBd4Y.js";
import {
  A as bt
} from "./D9Cxwp1L.js";
import {
  _ as yt
} from "./Dl9tJ_2x.js";
import {
  _ as xt
} from "./IKh7Ux27.js";
import {
  _ as wt
} from "./DFEjc4Xv.js";

function $t(E, v) {
  let c;
  return (...h) => new Promise((_, u) => {
    clearTimeout(c), c = setTimeout(() => {
      try {
        const m = E(...h);
        _(m)
      } catch (m) {
        m instanceof Error && u(m), u(new Error(`An error has occurred:${m}`))
      }
    }, v)
  })
}
const kt = H("/images/main/hero-poster.png"),
  Tt = {
    class: "hero"
  },
  Ct = {
    class: "sticky"
  },
  St = {
    key: 0,
    class: "left"
  },
  At = {
    key: 0,
    class: "based-in"
  },
  Et = ["innerHTML"],
  Dt = {
    key: 1,
    class: "description h5 opacity-anim anim-title-3"
  },
  Pt = {
    key: 0,
    class: "video-preview"
  },
  Mt = ["src"],
  Bt = {
    key: 0,
    class: "sticky-plash"
  },
  It = {
    key: 1,
    class: "sticky-plash-mobile"
  },
  Ot = {
    class: "mob-bg"
  },
  Lt = ["src"],
  Ft = ["src"],
  Ht = I({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(E) {
      const {
        isMobile: v
      } = O(), {
        locations: c
      } = q();
      let h;
      const d = () => {
          const g = i.matchMedia();
          g.add("(max-width: 1023px)", () => {
            i.to("section.hero .mobile-overlay", {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash-mobile",
                start: `top ${W(458)}`,
                end: "top center",
                scrub: .4
              },
              ease: "none",
              autoAlpha: 1
            }), i.to("section.hero .mob-line-text", {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash-mobile",
                start: "top center",
                end: "bottom 75%",
                scrub: .4
              },
              ease: "none",
              transform: "translate(calc(-100% + 94vw), -50%)"
            })
          }), g.add("(min-width: 1024px)", () => {
            i.timeline({
              scrollTrigger: {
                trigger: "section.our-goal",
                start: "top bottom",
                end: "top 99.9%",
                toggleActions: "restart none none reverse"
              }
            }).fromTo("section.hero .bottom-tips p", {
              opacity: 0,
              yPercent: 100
            }, {
              opacity: 1,
              yPercent: 0,
              stagger: .15,
              duration: .3
            }), i.set("section.hero .right-title", {
              opacity: 1
            }), h = i.to("section.hero .sticky .right", {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash",
                start: "top bottom",
                end: "bottom bottom",
                scrub: !0
              },
              ease: "none",
              transform: "translate3d(0%, 0%, 10px)",
              backgroundPositionX: "0"
            }), i.to("section.hero .blur-overlay", {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash",
                start: "top bottom",
                end: "top center",
                scrub: !0
              },
              ease: "none",
              autoAlpha: 1
            }), i.to("section.hero .opacity-anim", {
              autoAlpha: 0,
              scrollTrigger: {
                trigger: "section.hero .sticky-plash",
                start: "top bottom",
                end: "top 85%",
                scrub: !0
              }
            }), i.to("section.hero .wrap-titles.static", {
              xPercent: -50,
              scrollTrigger: {
                trigger: "section.hero .sticky-plash",
                start: "top bottom",
                end: "bottom bottom",
                scrub: !0
              },
              ease: "none"
            }), i.to("section.hero .wrap-titles.black", {
              xPercent: -50,
              scrollTrigger: {
                trigger: "section.hero .sticky-plash",
                start: "top bottom",
                end: "bottom bottom",
                scrub: !0
              },
              ease: "none"
            }), i.to("section.hero .sticky .right .right-title", {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash",
                start: "top bottom",
                end: "bottom 90%",
                scrub: !0
              },
              ease: "none",
              transform: "translate(0%, -50%)"
            }), i.to("section.hero", {
              scrollTrigger: {
                trigger: "section.hero .sticky-plash",
                start: "top 85%",
                end: "top top",
                scrub: !0
              },
              ease: "none",
              keyframes: {
                "0%": {
                  "--start-gradient": "0%",
                  "--stop-gradient": "0%"
                },
                "50%": {
                  "--start-gradient": "0%",
                  "--stop-gradient": "100%"
                },
                "100%": {
                  "--start-gradient": "100%",
                  "--stop-gradient": "100%"
                }
              }
            }), i.to("section.hero .sticky .right", {
              scrollTrigger: {
                trigger: "section.our-goal",
                start: "top bottom",
                end: "top top",
                scrub: .4
              },
              y: "-15%",
              ease: "none"
            });
            const a = document.querySelector("section.hero");
            if (a) {
              const {
                height: o
              } = a.getBoundingClientRect();
              z("--hero-sticky-top", window.innerHeight - o + "px")
            }
            window.addEventListener("resize", m)
          })
        },
        u = $t(() => {
          h = i.to("section.hero .sticky .right", {
            scrollTrigger: {
              trigger: "section.hero .sticky-plash",
              start: "top bottom",
              end: "bottom bottom",
              scrub: !0
            },
            ease: "none",
            transform: "translate3d(0%, 0%, 10px)",
            backgroundPositionX: "0"
          })
        }, 200),
        m = () => {
          h == null || h.kill(), i.set("section.hero .sticky .right", {
            clearProps: "all"
          }), u()
        };
      return B(() => {
        i.fromTo("section.hero .anim-line1", {
          opacity: 0,
          yPercent: 50
        }, {
          opacity: 1,
          yPercent: 0,
          duration: .6
        }), i.fromTo("section.hero .anim-line2", {
          opacity: 0,
          yPercent: 50
        }, {
          opacity: 1,
          yPercent: 0,
          duration: .6,
          delay: .2
        })
      }), B(d, !0), Q(() => {
        window.removeEventListener("resize", m)
      }), (g, r) => {
        const a = U;
        return e(), s("section", Tt, [t("div", Ct, [n(v) ? A("", !0) : (e(), s("div", St, [r[1] || (r[1] = t("div", {
          class: "blur-overlay"
        }, null, -1)), n(v) ? A("", !0) : (e(), s("div", At, [r[0] || (r[0] = t("p", {
          class: "based-in-title c3"
        }, "Based in:", -1)), (e(!0), s($, null, T(n(c), o => (e(), j(a, {
          key: o.id,
          class: "location-item p2",
          to: o.address.link,
          target: "_blank"
        }, {
          default: D(() => [S(k(o.title), 1)]),
          _: 2
        }, 1032, ["to"]))), 128))]))])), r[4] || (r[4] = R('<div class="wrap-titles h2 static opacity-anim" data-v-a7dfda5f><p class="anim-line1" data-v-a7dfda5f>Premium</p><p class="with-gap anim-line2" data-v-a7dfda5f><span data-v-a7dfda5f>Esthetic</span><span data-v-a7dfda5f><i data-v-a7dfda5f>Dentistry</i></span></p></div><div class="wrap-titles h2 black opacity-anim" data-v-a7dfda5f><p class="anim-line1" data-v-a7dfda5f>Premium</p><p class="with-gap anim-line2" data-v-a7dfda5f><span data-v-a7dfda5f>Esthetic</span><span data-v-a7dfda5f><i data-v-a7dfda5f>Dentistry</i></span></p></div>', 2)), t("p", {
          innerHTML: g.data.description,
          class: "video-description p2"
        }, null, 8, Et), n(v) ? A("", !0) : (e(), s("p", Dt, r[2] || (r[2] = [S(" Designing smiles that are "), t("br", null, null, -1), t("span", {
          class: "h5_italic"
        }, "as healthy as they are beautiful", -1)]))), n(v) ? A("", !0) : (e(), s("div", {
          key: 2,
          class: L(["right", {
            "is-video": typeof g.data.media == "string"
          }]),
          style: Y({
            backgroundImage: `url(${typeof g.data.media=="string"?"":g.data.media.normal})`
          })
        }, [typeof g.data.media == "string" ? (e(), s("div", Pt, [t("video", {
          src: g.data.media,
          playsinline: "",
          autoplay: "",
          muted: "",
          loop: "",
          class: "video-el",
          poster: kt
        }, null, 8, Mt)])) : A("", !0), r[3] || (r[3] = R('<h1 class="right-title h2" data-v-a7dfda5f><p data-v-a7dfda5f>Your smile, effortlessly enhanced</p></h1><div class="bottom-tips" data-v-a7dfda5f><p class="p2" data-v-a7dfda5f>Implant Restoration</p><p class="p2" data-v-a7dfda5f>Advanced Esthetic</p><p class="p2" data-v-a7dfda5f>Restorative Dentistry</p></div>', 2))], 6)), r[5] || (r[5] = R('<div class="mob-content" data-v-a7dfda5f><h1 class="h2 title-mob" data-v-a7dfda5f> Premium <br data-v-a7dfda5f> Esthetic <br data-v-a7dfda5f><i data-v-a7dfda5f>Dentistry</i></h1><p class="text h5" data-v-a7dfda5f> Designing smiles that are <br data-v-a7dfda5f><span class="h5_italic" data-v-a7dfda5f>as healthy as they are beautiful</span></p></div><div class="mobile-overlay" data-v-a7dfda5f></div>', 2))]), n(v) ? (e(), s("div", It, [t("div", Ot, [typeof g.data.media == "string" ? (e(), s("video", {
          key: 0,
          src: g.data.media,
          playsinline: "",
          autoplay: "",
          muted: "",
          loop: "",
          class: "inner-img"
        }, null, 8, Lt)) : (e(), s("img", {
          key: 1,
          src: g.data.media.medium,
          role: "presentation",
          class: "inner-img"
        }, null, 8, Ft))]), r[6] || (r[6] = t("div", {
          class: "bottom-texts"
        }, [t("p", {
          class: "c0"
        }, "Implant Restoration"), t("p", {
          class: "c0"
        }, "Restorative Dentistry"), t("p", {
          class: "c0"
        }, "Advanced Esthetic")], -1))])) : (e(), s("div", Bt)), r[7] || (r[7] = t("div", {
          class: "mobile-under-content"
        }, [t("div", {
          class: "mobile-sticky"
        }, [t("p", {
          class: "h2 mob-line-text"
        }, "Your smile, effortlessly enhanced")])], -1))])
      }
    }
  }),
  Rt = P(Ht, [
    ["__scopeId", "data-v-a7dfda5f"]
  ]),
  Nt = {
    class: "our-goal"
  },
  qt = {
    class: "right"
  },
  Vt = {
    class: "about-team"
  },
  Gt = {
    "data-anim-text-by-lines": "",
    class: "description p3"
  },
  zt = {
    class: "wrap-avatars"
  },
  Ut = ["src", "alt"],
  Wt = {
    class: "avatar-empty"
  },
  Yt = {
    class: "icon-plus"
  },
  jt = {
    key: 0,
    "data-fill-by-scroll": "",
    "data-fill-color": "#424346",
    class: "right-title h3"
  },
  Kt = {
    key: 1,
    class: "right-title h3"
  },
  Xt = I({
    __name: "OurGoal",
    props: {
      data: {}
    },
    setup(E) {
      const {
        isMobile: v
      } = O(), {
        teams: c,
        getTeamMemberByType: h
      } = q(), d = {
        teamAvatars: ["/images/common/avatar1.webp", "/images/common/avatar2.webp", "/images/common/avatar3.webp"]
      };
      return B(() => {
        const u = document.querySelector("section.our-goal");
        u && z("--our-goal-top", `${window.innerHeight-u.offsetHeight}px`), i.to("section.our-goal .overlay-goal", {
          scrollTrigger: {
            trigger: "section.services",
            start: "top bottom",
            end: "top center",
            scrub: !0
          },
          autoAlpha: 1,
          ease: "power1.out"
        }), i.to(["section.our-goal .wrap-avatars .avatar", "section.our-goal .wrap-avatars .avatar-empty"], {
          opacity: 1,
          stagger: .1,
          duration: .5,
          ease: "ease-ouq-quint",
          scrollTrigger: {
            trigger: "section.our-goal .wrap-avatars",
            start: "top 90%",
            once: !0
          }
        })
      }), (u, m) => {
        const C = N,
          g = st,
          r = K,
          a = U;
        return e(), s("section", Nt, [m[2] || (m[2] = t("div", {
          class: "left"
        }, [t("h2", {
          class: "h3"
        }, "Our goal is")], -1)), t("div", qt, [t("div", Vt, [t("p", Gt, k(u.data.description), 1), t("div", zt, [f(C, null, {
          default: D(() => [(e(!0), s($, null, T(n(h)("founder").slice(0, 3), (o, x) => {
            var p;
            return e(), s("article", {
              style: Y({
                transform: `translateX(${(d.teamAvatars.length-x)*32}px)`
              }),
              class: "avatar"
            }, [t("img", {
              src: (p = o.image) == null ? void 0 : p.medium,
              alt: o.name,
              class: "inner-img"
            }, null, 8, Ut)], 4)
          }), 256))]),
          _: 1
        }), t("article", Wt, [t("div", Yt, [f(g)]), m[0] || (m[0] = t("span", {
          class: "h5"
        }, "20", -1))])])]), n(v) ? (e(), s("p", Kt, k("Our goal is " + u.data.title), 1)) : (e(), s("p", jt, k(u.data.title), 1)), f(a, {
          to: "/about",
          class: "btn-about"
        }, {
          default: D(() => [f(r, {
            text: "About Us"
          })]),
          _: 1
        })]), f(C, null, {
          default: D(() => m[1] || (m[1] = [t("div", {
            class: "overlay-goal"
          }, null, -1)])),
          _: 1
        })])
      }
    }
  }),
  Jt = P(Xt, [
    ["__scopeId", "data-v-13f6d3d4"]
  ]),
  Qt = {
    class: "services"
  },
  Zt = {
    key: 0,
    class: "sticky"
  },
  te = {
    id: "fake-sticky-wrap",
    class: "sticky-wrap"
  },
  ee = {
    class: "sticky-image"
  },
  se = {
    class: "fake-service-image"
  },
  oe = ["src"],
  ne = {
    class: "left"
  },
  ae = ["data-slide-idx"],
  ie = ["src"],
  re = {
    class: "right"
  },
  le = {
    class: "slider-place"
  },
  ce = {
    class: "wrap-slides"
  },
  de = ["data-slide-idx"],
  pe = ["src", "alt"],
  ue = {
    class: "wrap-procedures"
  },
  me = ["data-slide-idx"],
  ge = ["onClick"],
  _e = {
    class: "procedure-name c2"
  },
  he = ["data-slide-idx"],
  ve = {
    class: "title-slides-wrap"
  },
  fe = ["innerHTML", "data-slide-idx"],
  be = {
    class: "slides-nav parallax-el"
  },
  ye = {
    key: 1,
    class: "slides-plash"
  },
  xe = {
    key: 2,
    class: "wrap-mobile-content"
  },
  we = {
    class: "mob-services"
  },
  $e = {
    class: "service-card"
  },
  ke = {
    class: "service-image-wrap"
  },
  Te = ["src", "alt"],
  Ce = ["innerHTML"],
  Se = {
    class: "service-desc p3"
  },
  Ae = I({
    __name: "ServicesSlider",
    setup(E) {
      const v = F(0),
        {
          open: c
        } = ot(),
        {
          isMobile: h
        } = O(),
        {
          services: d,
          getSolutionsFromService: _,
          getServiceById: u
        } = q(),
        m = () => {
          if (h.value) return;
          const r = document.querySelectorAll(".services .left .slide-wrap[data-slide-idx]");
          i.to([".services .left", ".services .right", ".services .parallax-el"], {
            scrollTrigger: {
              trigger: "section.services .slides-plash",
              start: "bottom bottom",
              end: "bottom top",
              scrub: !0
            },
            y: "20vh",
            ease: "none",
            willChange: "transform"
          }), i.to(".services .title-slides-wrap", {
            scrollTrigger: {
              trigger: "section.services .slides-plash",
              start: "bottom bottom",
              end: "bottom 25%",
              scrub: !0
            },
            ease: "none",
            opacity: 0
          }), r.forEach((a, o) => {
            o && (G.create({
              trigger: `.services .slides-plash .slide-part.n${o}`,
              start: "center bottom",
              end: "center bottom",
              scrub: .4,
              onEnter: () => C(o),
              onEnterBack: () => C(o - 1)
            }), i.to(a, {
              scrollTrigger: {
                trigger: `.services .slides-plash .slide-part.n${o}`,
                start: "top bottom",
                end: "bottom bottom",
                scrub: .4
              },
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "none",
              willChange: "clip-path"
            }), i.from(a.querySelector("img"), {
              scrollTrigger: {
                trigger: `.services .slides-plash .slide-part.n${o}`,
                start: "top bottom",
                end: "bottom bottom",
                scrub: .4
              },
              scale: 1.4,
              willChange: "transform",
              ease: "none"
            }))
          }), X(() => {
            const a = document.querySelector("section.our-goal");
            z("--goal-section-height", a.offsetHeight * -1 + "px"), i.to(".fake-service-image", {
              scrollTrigger: {
                trigger: "section.our-goal",
                endTrigger: "section.services",
                start: "top top",
                end: "top top",
                scrub: !0,
                onLeave: () => {
                  i.set("#fake-sticky-wrap", {
                    autoAlpha: 0
                  }), i.set("section.services .left", {
                    autoAlpha: 1
                  })
                },
                onEnterBack: () => {
                  i.set("#fake-sticky-wrap", {
                    autoAlpha: 1
                  }), i.set("section.services .left", {
                    autoAlpha: 0
                  })
                }
              },
              ease: "none",
              left: 0,
              top: 0,
              width: "50vw",
              height: "100vh",
              willChange: "width, height, left, top"
            })
          })
        },
        C = r => {
          h.value || (i.killTweensOf(".services .wrap-procedures .procedures-slide"), i.killTweensOf(".services .description-slide"), i.killTweensOf(".services .title-slide"), i.killTweensOf(".services .right .slide"), i.set([".services .title-slide"], {
            autoAlpha: 0,
            y: 40
          }), i.set([".services .wrap-procedures .procedures-slide", ".services .description-slide", ".services .right .slide"], {
            autoAlpha: 0
          }), i.to([`.services .wrap-procedures .procedures-slide[data-slide-idx='${r}']`, `.services .description-slide[data-slide-idx='${r}']`, `.services .title-slide[data-slide-idx='${r}']`, `.services .right .slide[data-slide-idx='${r}']`], {
            autoAlpha: 1,
            duration: 1,
            y: 0
          }), v.value = r)
        },
        g = (r, a, o) => {
          var x;
          if (o.ctrlKey) {
            const p = (x = u(r)) == null ? void 0 : x.slug;
            window.open(window.location.origin + `/${p}/${a}`, "_blank");
            return
          }
          c(r, a)
        };
      return B(m), (r, a) => {
        const o = nt,
          x = N,
          p = K,
          w = U;
        return e(), s("section", Qt, [n(h) ? A("", !0) : (e(), s("div", Zt, [f(x, null, {
          default: D(() => {
            var l, y, b;
            return [f(o), t("div", te, [t("div", ee, [t("div", se, [t("img", {
              src: (b = (y = (l = n(d)[0]) == null ? void 0 : l.preview) == null ? void 0 : y.image) == null ? void 0 : b.normal,
              role: "presentation",
              class: "inner-img",
              loading: "lazy"
            }, null, 8, oe)])])])]
          }),
          _: 1
        }), t("div", ne, [(e(!0), s($, null, T(n(d), (l, y) => {
          var b, M;
          return e(), s("div", {
            "data-slide-idx": y,
            class: "slide-wrap"
          }, [t("img", {
            src: (M = (b = l == null ? void 0 : l.preview) == null ? void 0 : b.image) == null ? void 0 : M.normal,
            role: "presentation",
            loading: "lazy",
            class: "inner-img"
          }, null, 8, ie)], 8, ae)
        }), 256))]), t("div", re, [a[1] || (a[1] = t("span", {
          class: "solutions c2"
        }, "Our Solutions:", -1)), t("div", le, [t("div", ce, [(e(!0), s($, null, T(n(d), (l, y) => {
          var b, M, V;
          return e(), s("div", {
            "data-slide-idx": y,
            class: "slide"
          }, [t("img", {
            src: (M = (b = n(_)(l.id)[0]) == null ? void 0 : b.preview) == null ? void 0 : M.image.medium,
            alt: (V = n(_)(l.id)[0]) == null ? void 0 : V.preview.description,
            class: "inner-img",
            loading: "lazy"
          }, null, 8, pe)], 8, de)
        }), 256))]), t("div", ue, [(e(!0), s($, null, T(n(d), (l, y) => (e(), s("div", {
          "data-slide-idx": y,
          class: "procedures-slide"
        }, [(e(!0), s($, null, T(n(_)(l.id), b => (e(), s("button", {
          class: "procedure",
          onClick: M => g(l.id, b.slug, M)
        }, [t("span", _e, k(b.title), 1), a[0] || (a[0] = t("div", {
          class: "arrow"
        }, [t("div", {
          class: "arrow-main"
        }), t("div", {
          class: "arrow-hover"
        })], -1))], 8, ge))), 256))], 8, me))), 256))])]), (e(!0), s($, null, T(n(d), (l, y) => {
          var b;
          return e(), s("p", {
            class: L(["description-slide p1", [`n${y+1}`]]),
            "data-slide-idx": y
          }, k((b = l == null ? void 0 : l.preview) == null ? void 0 : b.description), 11, he)
        }), 256))]), t("div", ve, [(e(!0), s($, null, T(n(d), (l, y) => {
          var b;
          return e(), s("p", {
            innerHTML: (b = l == null ? void 0 : l.preview) == null ? void 0 : b.title,
            class: L(["title-slide h2", [`n${y}`]]),
            "data-slide-idx": y
          }, null, 10, fe)
        }), 256))]), t("aside", be, [a[2] || (a[2] = t("span", {
          class: "c2 block-name"
        }, "Services:", -1)), (e(!0), s($, null, T(n(d), (l, y) => {
          var b;
          return e(), s("span", {
            class: L(["slide-btn c2", {
              active: y === n(v)
            }])
          }, k((b = l == null ? void 0 : l.preview) == null ? void 0 : b.name), 3)
        }), 256))]), f(w, {
          to: `/service/${n(d)[n(v)].slug}`,
          class: "learn-more parallax-el"
        }, {
          default: D(() => [f(p, {
            text: "Learn More"
          })]),
          _: 1
        }, 8, ["to"])])), n(h) ? A("", !0) : (e(), s("div", ye, [(e(!0), s($, null, T(n(d).slice(1), (l, y) => (e(), s("div", {
          class: L(["slide-part", [`n${y+1}`]])
        }, null, 2))), 256)), a[3] || (a[3] = t("div", {
          class: "pause-slides"
        }, null, -1))])), n(h) ? (e(), s("div", xe, [a[4] || (a[4] = t("div", {
          class: "h1"
        }, " Our Services ", -1)), t("div", we, [(e(!0), s($, null, T(n(d), l => (e(), s("article", $e, [t("div", ke, [t("img", {
          src: l.preview.image.medium,
          alt: l.preview.name,
          class: "inner-img"
        }, null, 8, Te), t("div", {
          innerHTML: l.preview.title,
          class: "mob-service-name h2"
        }, null, 8, Ce)]), t("p", Se, k(l.preview.description), 1), f(w, {
          to: `/service/${l.slug}`
        }, {
          default: D(() => [f(p, {
            text: "Learn More"
          })]),
          _: 2
        }, 1032, ["to"])]))), 256))])])) : A("", !0)])
      }
    }
  }),
  Ee = P(Ae, [
    ["__scopeId", "data-v-57d857ff"]
  ]),
  De = {
    class: "banner"
  },
  Pe = {
    class: "content"
  },
  Me = {
    class: "bg"
  },
  Be = ["src"],
  Ie = I({
    __name: "Banner",
    props: {
      image: {}
    },
    setup(E) {
      const {
        isMobile: v
      } = O();
      return B(() => {
        i.to("section.banner .bg", {
          scrollTrigger: {
            trigger: "section.banner",
            start: "top bottom",
            end: v.value ? "bottom bottom" : "top top",
            scrub: .4
          },
          ease: "none",
          y: 0
        }), i.to("section.banner .bg img", {
          scrollTrigger: {
            trigger: "section.banner",
            start: "top bottom",
            end: "bottom top",
            scrub: .4
          },
          ease: "none",
          scale: 1.1
        })
      }), (h, d) => {
        const _ = N;
        return e(), s("section", De, [t("div", Pe, [f(_, null, {
          default: D(() => [t("div", Me, [t("img", {
            src: h.image.normal,
            role: "presentation",
            loading: "lazy",
            class: "inner-img"
          }, null, 8, Be)])]),
          _: 1
        }), d[0] || (d[0] = R('<div class="bottom-grid" data-v-92b3434a><p class="c0" data-v-92b3434a>Modern Dentistry:</p><p class="c0" data-v-92b3434a>Faster</p><p class="c0" data-v-92b3434a>Smarter</p><p class="c0" data-v-92b3434a>Pain-Free</p></div>', 1))])])
      }
    }
  }),
  Oe = P(Ie, [
    ["__scopeId", "data-v-92b3434a"]
  ]),
  Le = {
    class: "technology"
  },
  Fe = {
    key: 0,
    class: "sticky-title h2"
  },
  He = {
    key: 1,
    class: "title h2"
  },
  Re = {
    key: 2,
    class: "sticky"
  },
  Ne = {
    class: "counter"
  },
  qe = {
    class: "h4"
  },
  Ve = {
    class: "c2"
  },
  Ge = {
    class: "images-slider"
  },
  ze = ["src"],
  Ue = {
    class: "slide-list"
  },
  We = {
    class: "list-scroller"
  },
  Ye = {
    class: "h4 opacity"
  },
  je = {
    key: 3,
    class: "sticky-plash"
  },
  Ke = ["data-slide-idx"],
  Xe = {
    class: "mob-content"
  },
  Je = {
    class: "swiper"
  },
  Qe = {
    class: "swiper-wrapper"
  },
  Ze = {
    class: "swiper-slide"
  },
  ts = ["src", "alt"],
  es = {
    class: "wrap-names"
  },
  ss = {
    class: "slider-controls"
  },
  os = {
    class: "btn-change-prev",
    "aria-label": "button change slide prev"
  },
  ns = {
    class: "btn-change-next",
    "aria-label": "button change slide next"
  },
  as = I({
    __name: "Technology",
    props: {
      data: {}
    },
    setup(E) {
      const v = E,
        c = F(0),
        {
          getTechnologies: h,
          getTechnologyById: d
        } = q(),
        {
          open: _
        } = at(),
        {
          isMobile: u
        } = O(),
        m = h(v.data),
        C = F(null),
        g = () => {
          const a = i.matchMedia();
          a.add("(max-width: 1023px)", () => {
            C.value = new vt("section.technology .swiper", {
              centeredSlides: !0,
              slidesPerView: "auto",
              spaceBetween: W(16),
              loop: !0,
              modules: [ft, bt],
              navigation: {
                nextEl: "section.technology .mob-content .btn-change-next",
                prevEl: "section.technology .mob-content .btn-change-prev"
              },
              autoplay: {
                delay: 5e3,
                disableOnInteraction: !1
              },
              on: {
                slideChange: () => {
                  if (!C.value) return;
                  c.value = C.value.realIndex;
                  const o = document.querySelector("section.technology .mob-content .slider-counter");
                  o.innerHTML = `${String(c.value+1).padStart(2,"0")} / ${String(m.length).padStart(2,"0")}`
                }
              }
            })
          }), a.add("(min-width: 1024px)", () => {
            const o = i.timeline({
              scrollTrigger: {
                trigger: "section.technology",
                start: "top bottom",
                end: "top 15%",
                scrub: !0
              },
              ease: "none"
            });
            i.to("section.banner .content", {
              scrollTrigger: {
                trigger: "section.technology",
                start: "top bottom",
                end: "top top",
                scrub: !0
              },
              y: "15%",
              ease: "none",
              willChange: "transform"
            }), o.to("section.technology .sticky-title", {
              transform: "translate(-50%, -100%)",
              duration: .5,
              ease: "none"
            }), o.to("section.technology .sticky-title", {
              transform: "translate(-50%, 0%)",
              duration: .5,
              ease: "none"
            }), o.to("section.technology .sticky-title .dark", {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: .5,
              ease: "none"
            }, "<"), o.to("section.technology .sticky-title", {
              transform: "translate(-50%, 3.5rem)",
              duration: .3,
              ease: "none"
            });
            const x = .056,
              p = document.querySelector("section.technology .list-scroller");
            p && i.to(p, {
              scrollTrigger: {
                trigger: "section.technology .sticky-plash",
                start: "top bottom",
                end: "bottom bottom",
                scrub: !0,
                onUpdate: ({
                  progress: w
                }) => {
                  const l = Math.floor((m.length - 1) * (Number(w.toFixed(2)) + x));
                  l !== c.value && (c.value = l)
                }
              },
              ease: "none",
              y: () => (p.getBoundingClientRect().height - p.getBoundingClientRect().height / m.length) * -1
            })
          })
        },
        r = (a, o) => {
          var x;
          if (o.ctrlKey) {
            const p = (x = d(a)) == null ? void 0 : x.slug;
            window.open(window.location.origin + `/technology/${p}`, "_blank");
            return
          }
          _(a)
        };
      return B(g), (a, o) => {
        const x = rt,
          p = ht;
        return e(), s("section", Le, [n(u) ? A("", !0) : (e(), s("div", Fe, o[2] || (o[2] = [t("p", null, "Technology-Driven", -1), t("p", {
          class: "dark"
        }, "Technology-Driven", -1)]))), n(u) ? A("", !0) : (e(), s("h3", He, o[3] || (o[3] = [t("span", {
          class: "title-line"
        }, [S(" Dentistry "), t("span", null, [t("i", null, "for"), S(" Exceptional")])], -1), t("span", {
          class: "title-line"
        }, "Results", -1)]))), n(u) ? A("", !0) : (e(), s("div", Re, [t("div", Ne, [t("p", qe, k(String(n(c) + 1).padStart(2, "0")) + "    ", 1), t("p", Ve, "/ " + k(String(n(m).length).padStart(2, "0")), 1)]), t("div", Ge, [(e(!0), s($, null, T(n(m), (w, l) => (e(), s("img", {
          src: w.previewImage.normal,
          role: "presentation",
          class: L(["inner-img slide-img", {
            active: l === n(c)
          }])
        }, null, 10, ze))), 256))]), o[4] || (o[4] = t("span", {
          class: "small-title c2"
        }, "Technology", -1)), t("div", Ue, [t("div", We, [(e(!0), s($, null, T(n(m), (w, l) => (e(), s("div", {
          class: L(["list-item", {
            active: l === n(c)
          }])
        }, [t("span", Ye, k(w.name), 1), t("button", {
          class: "list-item-link opacity",
          onClick: o[0] || (o[0] = it(y => r(n(m)[n(c)].id, y), ["stop"]))
        }, [f(x, {
          text: "Learn More",
          "text-class": "c2",
          underline: ""
        })])], 2))), 256))])])])), n(u) ? A("", !0) : (e(), s("div", je, [(e(!0), s($, null, T(n(m), (w, l) => (e(), s("div", {
          "data-slide-idx": l,
          class: "technology-plash"
        }, null, 8, Ke))), 256))])), o[6] || (o[6] = t("p", {
          class: "mobile-title h2"
        }, [S(" Technology - "), t("br"), S(" Driven Dentistry "), t("br"), t("i", null, "for"), S(" Exceptional "), t("br"), S(" Results ")], -1)), t("div", Xe, [t("div", Je, [t("div", Qe, [(e(!0), s($, null, T(n(m), w => (e(), s("div", Ze, [t("img", {
          src: w.previewImage.medium,
          alt: w.previewDescription,
          class: "inner-img"
        }, null, 8, ts)]))), 256))])]), t("div", es, [(e(!0), s($, null, T(n(m), (w, l) => (e(), s("p", {
          class: L(["slide-name h4", {
            active: l === n(c)
          }])
        }, k(w.name), 3))), 256))]), t("button", {
          class: "btn-learn-more c2",
          onClick: o[1] || (o[1] = w => r(n(m)[n(c)].id, w))
        }, " Learn more "), t("div", ss, [t("button", os, [f(p)]), o[5] || (o[5] = t("p", {
          class: "slider-counter c2"
        }, "01 / 07", -1)), t("button", ns, [f(p, {
          next: ""
        })])])])])
      }
    }
  }),
  is = P(as, [
    ["__scopeId", "data-v-1b812170"]
  ]),
  rs = H("/images/decor/experts-bg.svg"),
  ls = H("/images/main/experts-mob.webp"),
  cs = H("/images/main/experts.png"),
  ds = ls,
  ps = {
    class: "experts"
  },
  us = {
    class: "title h1"
  },
  ms = {
    key: 0
  },
  gs = {
    class: "about-teammates"
  },
  _s = {
    "data-anim-text-by-lines": ""
  },
  hs = {
    class: "p1"
  },
  vs = {
    class: "job-title c3"
  },
  fs = {
    "data-anim-text-by-lines": "",
    class: "teammate-desc c3"
  },
  bs = {
    class: "meet-teammates-wrap"
  },
  ys = ["innerHTML"],
  xs = {
    class: "main-description h4"
  },
  ws = {
    key: 0
  },
  $s = {
    class: "print-texts"
  },
  ks = {
    class: "fake-text"
  },
  Ts = {
    class: "inner-text"
  },
  Cs = ["data-slide-idx"],
  Ss = ["data-slide-idx"],
  As = I({
    __name: "TeamOfExperts",
    props: {
      data: {}
    },
    setup(E) {
      const v = E,
        {
          isMobile: c
        } = O(),
        h = [{
          name: "Dr. Joel Gale",
          jobTitle: "Senior partner",
          description: "Expert in esthetic and implant dentistry, known for precision, empathy, and artistry. Creates natural, camera-ready smiles through advanced veneers, implants, and full-mouth rehabilitations."
        }, {
          name: "Dr. Nuria Otero",
          jobTitle: "Partner",
          description: "Prosthodontist with 20+ years of experience in complex restorations and smile transformations. Combines technical mastery with esthetic vision in full-mouth reconstructions and veneers."
        }, {
          name: "Dr. Larry Grillo",
          jobTitle: "Senior partner",
          description: "Renowned expert in advanced restorative and cosmetic dentistry. Merges innovation and artistry to craft functional, long-lasting, and naturally beautiful smiles."
        }];
      return B(() => {
        c.value || (i.to("section.experts .experts-img", {
          transform: "translate(-5.375rem, 0)",
          ease: "none",
          scrollTrigger: {
            trigger: "section.experts",
            start: "top bottom",
            end: "bottom top",
            scrub: .4
          }
        }), i.to("section.experts .experts-overlay", {
          transform: "translate(0, 0)",
          ease: "none",
          scrollTrigger: {
            trigger: "section.experts",
            start: "top bottom",
            end: "bottom top",
            scrub: .4
          }
        }));
        const _ = i.timeline({
          repeat: -1
        });
        v.data.dedicatedTexts.forEach((u, m) => {
          _.to(`section.experts .inner-text .char[data-slide-idx="${m}"]`, {
            stagger: .05,
            duration: .01,
            display: "inline-block",
            ease: "none"
          }, "+=0.25"), _.to(`section.experts .inner-text .char[data-slide-idx="${m}"]`, {
            stagger: .05,
            duration: .01,
            reversed: !0,
            display: "none",
            ease: "none"
          }, "+=1.5")
        })
      }), (_, u) => {
        const m = N,
          C = K,
          g = U;
        return e(), s("section", ps, [f(m, null, {
          default: D(() => u[0] || (u[0] = [t("div", {
            class: "experts-bg-wrap"
          }, [t("img", {
            src: rs,
            role: "presentation",
            loading: "lazy",
            class: "experts-bg"
          })], -1), t("picture", null, [t("source", {
            srcset: ds,
            media: "(max-width: 1024px)"
          }), t("img", {
            src: cs,
            class: "experts-img",
            loading: "lazy",
            alt: "experts image"
          })], -1), t("div", {
            class: "experts-overlay"
          }, null, -1)])),
          _: 1
        }), t("h4", us, [u[1] || (u[1] = S(" Team ")), n(c) ? (e(), s("br", ms)) : A("", !0), u[2] || (u[2] = S(" of Experts "))]), t("div", gs, [(e(), s($, null, T(h, r => t("div", {
          key: r.name,
          class: "teammate"
        }, [t("div", _s, [t("p", hs, k(r.name), 1), t("p", vs, k(r.jobTitle), 1)]), t("p", fs, k(r.description), 1)])), 64))]), t("div", bs, [t("p", {
          "data-anim-text-by-lines": "",
          class: "p1 small-description",
          innerHTML: _.data.description
        }, null, 8, ys), t("div", xs, [t("p", null, [u[3] || (u[3] = S(" Our team is ")), n(c) ? (e(), s("br", ws)) : A("", !0), u[4] || (u[4] = S(" dedicated to providing ")), t("span", $s, [t("span", ks, k(_.data.dedicatedTexts.reduce((r, a) => a.length > r.length ? a : r, "")), 1), t("span", Ts, [(e(!0), s($, null, T(_.data.dedicatedTexts, (r, a) => (e(), s($, {
          key: a
        }, [(e(!0), s($, null, T([...r], o => (e(), s($, {
          key: o
        }, [o === " " ? (e(), s("span", {
          key: 0,
          class: "char",
          "data-slide-idx": a
        }, "   ", 8, Cs)) : (e(), s("span", {
          key: 1,
          class: "char",
          "data-slide-idx": a
        }, k(o), 9, Ss))], 64))), 128))], 64))), 128))])])]), f(g, {
          to: "/about",
          class: "btn-meet-team"
        }, {
          default: D(() => [f(C, {
            text: "Meet The Team"
          })]),
          _: 1
        })])])])
      }
    }
  }),
  Es = P(As, [
    ["__scopeId", "data-v-b96b2b97"]
  ]),
  Ds = {},
  Ps = {
    width: "803",
    height: "803",
    viewBox: "0 0 803 803",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Ms(E, v) {
  return e(), s("svg", Ps, v[0] || (v[0] = [R('<circle cx="401.5" cy="401.5" r="401" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)" stroke="url(#paint0_linear_1350_8060)"></circle><defs><linearGradient id="paint0_linear_1350_8060" x1="401.5" y1="0" x2="401.5" y2="803" gradientUnits="userSpaceOnUse"><stop stop-color="#E1DFDA"></stop><stop offset="0.1875" stop-color="#E1DFDA" stop-opacity="0.3"></stop><stop offset="0.350962" stop-color="#E1DFDA" stop-opacity="0"></stop><stop offset="0.610577" stop-color="#E1DFDA" stop-opacity="0"></stop><stop offset="0.778846" stop-color="#E1DFDA" stop-opacity="0.3"></stop><stop offset="1" stop-color="#E1DFDA"></stop></linearGradient></defs>', 2)]))
}
const Bs = P(Ds, [
    ["render", Ms]
  ]),
  Is = {
    class: "why-choose"
  },
  Os = {
    class: "sticky"
  },
  Ls = {
    id: "anim-left-circle",
    class: "left-circle"
  },
  Fs = {
    id: "anim-right-circle",
    class: "right-circle"
  },
  Hs = {
    key: 0,
    class: "mobile-wrap"
  },
  Rs = {
    class: "balls"
  },
  Ns = {
    class: "ball-content"
  },
  qs = {
    class: "h3"
  },
  Vs = {
    class: "c3"
  },
  J = 60,
  Gs = I({
    __name: "WhyChoose",
    setup(E) {
      const v = F(!1);
      let c = null;
      const h = lt("lenis"),
        {
          isMobile: d
        } = O(),
        _ = F(!1),
        u = [{
          title: "35",
          text: "Years of service",
          bgColor: "#DAD5D3",
          textColor: "#5C5C5C"
        }, {
          title: "15K",
          text: "veneers placed",
          bgColor: "#5C5E6F",
          textColor: "#BFBFC0"
        }, {
          title: "27k",
          text: "crowns placed",
          bgColor: "#DAD5D3",
          textColor: "#5C5C5C"
        }, {
          title: "2k",
          text: "hours of continued education",
          bgColor: "#949AA9",
          textColor: "#343842"
        }, {
          title: "20K+",
          text: "satisfied patients ",
          bgColor: "#fff",
          textColor: "#6A6A6C"
        }, {
          title: "3",
          text: "locations",
          bgColor: "#474958",
          textColor: "#B2B3BA"
        }],
        m = () => {
          const C = i.matchMedia();
          C.add("(max-width: 1023px)", () => {}), C.add("(min-width: 1024px)", () => {
            const g = document.querySelector("section.why-choose .circle-balls-container2");
            g && (g.innerHTML = "", G.create({
              trigger: "section.why-choose",
              start: "top bottom",
              end: "bottom top",
              once: !0,
              onEnter: () => {
                c = ct.loadAnimation({
                  container: g,
                  renderer: "svg",
                  loop: !1,
                  autoplay: !1,
                  path: "/lottie/balls.json",
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid meet"
                  }
                })
              }
            })), i.fromTo("section.why-choose .circle-balls-container2", {
              opacity: 0
            }, {
              opacity: 1,
              scrollTrigger: {
                trigger: "section.why-choose",
                start: "80% bottom",
                end: "bottom bottom",
                scrub: .4,
                onLeaveBack: () => {
                  c == null || c.goToAndStop(0), _.value = !1
                }
              }
            });
            const r = window.innerHeight,
              a = i.timeline({
                scrollTrigger: {
                  trigger: "section.why-choose .sticky-plash",
                  endTrigger: "section.why-choose",
                  start: "top 150%",
                  end: "bottom bottom",
                  scrub: .4,
                  onUpdate: ({
                    progress: p
                  }) => {
                    p >= .75 && !_.value && (_.value = !0, c == null || c.setDirection(1), c == null || c.setSpeed(1.5), c == null || c.play())
                  }
                }
              }),
              o = (W(1440) - r) / 2;
            a.to("section.why-choose #anim-left-circle", {
              duration: .3,
              transform: `translate(calc(-50% + ${o}px), -50%)`,
              ease: "none"
            }), a.to("section.why-choose #anim-right-circle", {
              duration: .3,
              transform: `translate(calc(50% - ${o}px), -50%)`,
              ease: "none"
            }, "<"), a.to("section.why-choose #anim-left-circle", {
              duration: .3,
              transform: `translate(calc(-50% + ${o}px), -50%) rotate(90deg)`,
              ease: "none"
            }), a.to("section.why-choose #anim-right-circle", {
              duration: .3,
              transform: `translate(calc(50% - ${o}px), -50%) rotate(90deg)`,
              ease: "none"
            }, "<"), a.to("section.why-choose #anim-left-circle", {
              duration: .2,
              transform: `translate(calc(-50% + ${o}px), calc(-50% + ${J}px)) rotate(90deg)`,
              ease: "none"
            }), a.to("section.why-choose #anim-right-circle", {
              duration: .2,
              transform: `translate(calc(50% - ${o}px), calc(-50% - ${J}px)) rotate(90deg)`,
              ease: "none"
            }, "<"), a.to("section.why-choose #anim-left-circle", {
              transform: `translate(calc(-50% + ${o}px), calc(-50% + 100vh - 1rem)) rotate(90deg) scale(1.8)`,
              ease: "none"
            }), a.to("section.why-choose #anim-right-circle", {
              transform: `translate(calc(50% - ${o}px), calc(-50% - 50vh)) rotate(90deg)`,
              ease: "none",
              opacity: 0,
              duration: .2
            }, "<");
            const x = i.parseEase("cubic-bezier(0.9, 0, 0.14, 0.9)");
            G.create({
              trigger: "section.why-choose .sticky-plash",
              endTrigger: "section.testimonials",
              start: "top bottom",
              end: "top 101%",
              onEnter: () => {
                v.value = !0
              },
              onLeave: () => {
                v.value = !1
              },
              onEnterBack: () => {
                v.value = !0
              },
              onLeaveBack: () => {
                v.value = !1
              }
            }), h.value.on("scroll", () => {
              v.value && !h.value.isScrolling && X(() => {
                h.value.scrollTo(document.querySelector("section.testimonials"), {
                  duration: 2,
                  easing: x,
                  offset: window.innerHeight * -1
                })
              })
            })
          })
        };
      return Q(() => {
        d.value || (c == null || c.destroy(), c = null)
      }), Z(() => {
        setTimeout(() => {
          m()
        }, 500)
      }), (C, g) => {
        const r = Bs,
          a = N;
        return e(), s("section", Is, [t("div", Os, [f(a, null, {
          default: D(() => [t("div", Ls, [f(r), g[0] || (g[0] = t("div", {
            class: "circle-balls-container2"
          }, null, -1))]), t("div", Fs, [f(r)])]),
          _: 1
        }), g[4] || (g[4] = t("div", {
          class: "wrap-title h2"
        }, [t("span", {
          class: "first-line"
        }, [t("span", null, [S("We are "), t("i", null, "here")]), t("span", {
          class: "small-tip c2"
        }, [S("Why "), t("br"), S("choose us?")]), t("span", null, [S("to "), t("i", null, "Enhance")])]), t("span", {
          class: "second-line"
        }, "Your Smile")], -1)), n(d) ? (e(), s("div", Hs, [g[1] || (g[1] = t("div", {
          class: "decor-semi-circle"
        }, null, -1)), g[2] || (g[2] = t("span", {
          class: "sub-title c2"
        }, "Why choose us?", -1)), g[3] || (g[3] = t("p", {
          class: "mob-title h2"
        }, [S(" We are "), t("br"), t("i", null, "here"), S(" to Enhance "), t("br"), S(" Your Smile ")], -1)), t("div", Rs, [(e(), s($, null, T(u, o => t("div", {
          class: "ball",
          style: Y({
            "--bg-color": `${o.bgColor}`,
            "--text-color": `${o.textColor}`
          })
        }, [t("div", Ns, [t("p", qs, k(o.title), 1), t("p", Vs, k(o.text), 1)])], 4)), 64))])])) : A("", !0)]), g[5] || (g[5] = t("div", {
          class: "sticky-plash"
        }, null, -1))])
      }
    }
  }),
  zs = P(Gs, [
    ["__scopeId", "data-v-26809711"]
  ]),
  Us = {
    class: "testimonials"
  },
  Ws = {
    class: "wrap-content content-part",
    "data-cursor-place": ""
  },
  Ys = {
    class: "mob-slider-controls"
  },
  js = {
    class: "counter c2"
  },
  Ks = {
    class: "left"
  },
  Xs = {
    class: "slide-names"
  },
  Js = ["data-slide-idx", "onClick"],
  Qs = {
    class: "text"
  },
  Zs = {
    class: "right"
  },
  to = ["data-slide-idx"],
  eo = ["data-slide-idx"],
  so = 5,
  oo = I({
    __name: "Testimonials",
    props: {
      data: {}
    },
    setup(E) {
      const v = E,
        {
          getTestimonials: c
        } = q(),
        h = c(v.data),
        {
          isMobile: d
        } = O(),
        _ = F(0),
        u = F(),
        m = F(!1),
        C = () => {
          if (i.set(".btn-slide-name .path-loader", {
              drawSVG: 0
            }), i.set(".slide-text[data-slide-idx='0']", {
              autoAlpha: 1
            }), i.set(".author-names[data-slide-idx='0']", {
              autoAlpha: 1
            }), g(), d.value) {
            const p = [...document.querySelectorAll("section.testimonials .right .slide-text")].map(w => w.clientHeight).sort((w, l) => l - w)[0];
            setTimeout(() => {
              z("--testimonial-wrap-height", `${W(p+2)}px`)
            }, 500)
          }
        },
        g = () => {
          u.value && u.value.kill();
          const x = i.timeline({
            onComplete: () => {
              a()
            }
          });
          x.to(`.btn-slide-name[data-slide-idx='${_.value}'] .path-loader`, {
            drawSVG: "100%",
            duration: so,
            ease: "none"
          }), u.value = x
        },
        r = x => {
          var p;
          m.value || x === _.value || ((p = u.value) == null || p.kill(), m.value = !0, a(x))
        },
        a = x => {
          const p = i.timeline({});
          p.set(`.btn-slide-name[data-slide-idx='${_.value}'] .path-loader`, {
            drawSVG: 0
          }), p.to(`.slide-text[data-slide-idx='${_.value}']`, {
            autoAlpha: 0,
            yPercent: 50,
            duration: .4,
            ease: "power1.inOut",
            onComplete: () => {
              _.value = x ?? (_.value + 1) % h.length, X(() => {
                const w = document.querySelector(`.slide-text[data-slide-idx='${_.value}']`);
                d.value && i.to(".testimonials .right", {
                  height: w == null ? void 0 : w.clientHeight
                }), p.fromTo(`.slide-text[data-slide-idx='${_.value}']`, {
                  yPercent: 50,
                  autoAlpha: 0
                }, {
                  autoAlpha: 1,
                  yPercent: 0,
                  duration: .4,
                  delay: .1,
                  ease: "power1.inOut",
                  onComplete: () => {
                    g(), m.value = !1
                  }
                }), p.fromTo(`.author-names[data-slide-idx='${_.value}']`, {
                  yPercent: 50,
                  autoAlpha: 0
                }, {
                  autoAlpha: 1,
                  yPercent: 0,
                  duration: .4,
                  ease: "power1.inOut"
                }, "<")
              })
            }
          }), p.to(`.author-names[data-slide-idx='${_.value}']`, {
            autoAlpha: 0,
            yPercent: 50,
            duration: .4,
            ease: "power1.inOut"
          }, "<")
        },
        o = x => {
          const p = (_.value + x + h.length) % h.length;
          r(p)
        };
      return B(C), (x, p) => {
        const w = yt,
          l = xt;
        return e(), s("section", Us, [t("div", Ws, [t("div", Ys, [t("button", {
          class: "btn-slide",
          "aria-label": "button change slide prev",
          onClick: p[0] || (p[0] = y => o(-1))
        }, [f(w)]), t("p", js, k(String(n(_) + 1).padStart(2, "0")) + " / " + k(String(n(h).length).padStart(2, "0")), 1), t("button", {
          class: "btn-slide next",
          "aria-label": "button change slide next",
          onClick: p[1] || (p[1] = y => o(1))
        }, [f(w)])]), t("div", Ks, [p[3] || (p[3] = t("span", {
          class: "c2"
        }, "Testimonials", -1)), t("ul", Xs, [(e(!0), s($, null, T(n(h), (y, b) => (e(), s("li", {
          key: b,
          "data-hide-cursor": ""
        }, [t("button", {
          class: L(["btn-slide-name c3", {
            active: n(_) === b
          }]),
          "data-slide-idx": b,
          onClick: M => r(b)
        }, [p[2] || (p[2] = R('<div class="wrap-loader" data-v-1af28ac2><svg width="10" height="10" viewBox="0 0 10 10" fill="none" class="inner-svg" xmlns="http://www.w3.org/2000/svg" data-v-1af28ac2><g clip-path="url(#clip0_1040_8418)" data-v-1af28ac2><circle cx="5" cy="5" r="4.0625" stroke="#EAE8E8" stroke-opacity="0.15" stroke-width="1.875" data-v-1af28ac2></circle><circle cx="5" cy="5" r="4.0625" stroke="#EAE8E8" stroke-width="1.875" class="path-loader" data-v-1af28ac2></circle></g><defs data-v-1af28ac2><clipPath id="clip0_1040_8418" data-v-1af28ac2><rect width="10" height="10" fill="white" data-v-1af28ac2></rect></clipPath></defs></svg></div>', 1)), t("span", Qs, k(y.solution.title), 1)], 10, Js)]))), 128))])]), t("div", Zs, [(e(!0), s($, null, T(n(h), (y, b) => (e(), s("p", {
          key: b,
          "data-slide-idx": b,
          class: "slide-text p1"
        }, " “ " + k(y.text) + " ” ", 9, to))), 128)), (e(!0), s($, null, T(n(h), (y, b) => (e(), s("p", {
          key: b,
          "data-slide-idx": b,
          class: "author-names c3"
        }, [t("span", null, k(y.patientName), 1)], 8, eo))), 128))]), p[4] || (p[4] = t("div", {
          class: "mob-top-part"
        }, [t("p", {
          class: "c2"
        }, "Testimonials:")], -1)), n(d) ? A("", !0) : (e(), j(l, {
          key: 0,
          onChangeSlide: o
        }))])])
      }
    }
  }),
  no = P(oo, [
    ["__scopeId", "data-v-1af28ac2"]
  ]),
  ao = H("/images/decor/pre-footer-bg.webp"),
  io = H("/images/main/pre-bg-mob.webp"),
  ro = H("/images/main/pre-footer-mob.webp"),
  lo = H("/images/decor/pre-footer.webp"),
  co = ro,
  po = {
    class: "pre-footer"
  },
  uo = {
    key: 0,
    src: ao,
    role: "presentation",
    class: "pre-footer-bg"
  },
  mo = {
    key: 1,
    width: "1440",
    height: "1407",
    viewBox: "0 0 1440 1407",
    fill: "none",
    class: "pre-footer-bg",
    xmlns: "http://www.w3.org/2000/svg"
  },
  go = I({
    __name: "PreFooter",
    setup(E) {
      const {
        isMobile: v
      } = O();
      return B(() => {
        v.value || i.to("section.pre-footer", {
          yPercent: 15,
          scrollTrigger: {
            trigger: "footer.footer",
            start: "top bottom",
            end: "top -10%",
            scrub: .4
          },
          ease: "power1.inOut"
        })
      }), (h, d) => {
        const _ = N;
        return e(), s("section", po, [f(_, null, {
          default: D(() => [("isIOS" in h ? h.isIOS : n(gt))() ? (e(), s("img", uo)) : (e(), s("svg", mo, d[0] || (d[0] = [t("g", {
            "clip-path": "url(#clip0_1385_579411)"
          }, [t("g", {
            filter: "url(#filter0_f_1385_5794)"
          }, [t("path", {
            class: "anim-pre-footer-path",
            d: "M885.79 412.379C1037.22 431.003 1276.84 384.301 1345.83 464.592C1434 567.208 1616.24 625.425 1783.6 606.579C1811.88 603.395 1838.12 595.31 1863 583.934V1844H-489V871.333C-401.829 840.38 -335.621 764.651 -262.437 704.234C-244.615 702.365 -225.614 698.937 -205.806 694.445C-160.84 700.821 -112.813 701.484 -69.6816 693.176C-19.4702 683.504 3.68576 653.73 36.8115 630.527C200.005 670.482 348.862 793.959 512.808 732.492C559.655 714.928 596.036 687.521 624.529 653.965C642.15 648.526 659.491 642.263 676.405 635.17C773.352 594.517 824.907 497.506 885.79 412.379Z",
            fill: "#D9D9D9"
          })])], -1), t("defs", null, [t("filter", {
            id: "filter0_f_1385_5794",
            x: "-646.5",
            y: "254.879",
            width: "2667",
            height: "1746.62",
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
            stdDeviation: "78.75",
            result: "effect1_foregroundBlur_1385_5794"
          })]), t("clipPath", {
            id: "clip0_1385_579411"
          }, [t("rect", {
            width: "1440",
            height: "1407",
            fill: "white"
          })])], -1)]))), d[1] || (d[1] = t("img", {
            src: io,
            role: "presentation",
            class: "bg-mob"
          }, null, -1)), d[2] || (d[2] = t("picture", null, [t("source", {
            srcset: co,
            media: "(max-width: 1024px)"
          }), t("img", {
            src: lo,
            role: "presentation",
            class: "pre-footer-img"
          })], -1))]),
          _: 1
        }), d[3] || (d[3] = t("p", {
          class: "wrap-title h2"
        }, [t("span", {
          class: "title-line"
        }, "Bringing"), t("span", {
          class: "title-line"
        }, [t("span", null, [S("Your "), t("i", null, "Perfect")]), t("span", {
          class: "small-tip c2"
        }, "Premium esthetic dentistry"), t("span", null, [S(" Smile "), t("i", null, "to Life")])])], -1))])
      }
    }
  }),
  _o = P(go, [
    ["__scopeId", "data-v-f67942fa"]
  ]),
  ho = {
    key: 0,
    class: "page"
  },
  vo = {
    class: "wrap-anim-bg fake-choose-marker"
  },
  fo = {
    key: 0,
    class: "fake-choose"
  },
  bo = I({
    __name: "index",
    async setup(E) {
      let v, c;
      const h = dt(),
        {
          data: d
        } = ([v, c] = pt(() => mt("/api/main-page", {
          getCachedData(C) {
            return h.payload.data[C] || h.static.data[C]
          }
        }, "$pqtWcjQkdb")), v = await v, c(), v);
      if (!d.value) throw ut({
        statusCode: 404,
        statusMessage: "Error fetching main page data",
        fatal: !0
      });
      const {
        isMobile: _
      } = O(), u = F(!0);
      return tt(d.value.meta), B(() => {
        G.create({
          once: !0,
          trigger: ".fake-choose-marker",
          start: "top 150%",
          onEnter: () => {
            u.value = !1
          }
        })
      }), _t(), Z(() => {
        _.value && (u.value = !1)
      }), (C, g) => {
        const r = et,
          a = Rt,
          o = Jt,
          x = Ee,
          p = Oe,
          w = is,
          l = Es,
          y = zs,
          b = no,
          M = _o,
          V = wt;
        return n(d) ? (e(), s("main", ho, [f(r, {
          "phone-list": ""
        }), f(a, {
          data: n(d).hero
        }, null, 8, ["data"]), f(o, {
          data: n(d).goal
        }, null, 8, ["data"]), f(x), f(p, {
          image: n(d).technologyImage
        }, null, 8, ["image"]), f(w, {
          data: n(d).technologies
        }, null, 8, ["data"]), f(l, {
          data: n(d).experts
        }, null, 8, ["data"]), t("div", vo, [n(u) ? (e(), s("div", fo)) : (e(), j(y, {
          key: 1
        })), f(b, {
          data: n(d).testimonials
        }, null, 8, ["data"])]), f(M), f(V)])) : A("", !0)
      }
    }
  }),
  Eo = P(bo, [
    ["__scopeId", "data-v-c08852c2"]
  ]);
export {
  Eo as
  default
};