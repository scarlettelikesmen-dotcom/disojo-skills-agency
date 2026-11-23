/* https://aventuradentalarts.com/_nuxt/CTy60ih0.js */
import {
  u as M,
  a as Q,
  _ as Z
} from "./COkvdYZ_.js";
import {
  I as F,
  d as L,
  b as E,
  J as tt,
  o as r,
  e as d,
  j as k,
  C as D,
  i as t,
  t as f,
  F as $,
  r as T,
  f as m,
  q as g,
  D as U,
  m as B,
  c as W,
  u as R,
  s as X,
  v as N,
  K as J,
  h as j,
  L as q,
  x as V,
  g as et,
  n as H,
  k as O,
  M as st,
  N as ot,
  S as nt,
  O as it,
  P as at,
  Q as lt,
  R as rt,
  T as ct
} from "./C3LIzMiL.js";
import {
  n as dt,
  f as pt,
  S as P,
  N as ut
} from "./jnTzBd4Y.js";
import {
  A as mt
} from "./D9Cxwp1L.js";
import {
  d as Y,
  p as C,
  u as _t
} from "./AkxaoDpK.js";
import {
  f as ht,
  a as gt,
  _ as ft
} from "./BpkPho2w.js";
import {
  _ as vt
} from "./CpcOjxkA.js";
import {
  _ as bt
} from "./DFEjc4Xv.js";

function yt(S) {
  let {
    swiper: i,
    extendParams: y,
    on: _
  } = S;
  y({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
    }
  }), i.controller = {
    control: void 0
  };

  function u(a, e) {
    const s = function() {
      let l, c, b;
      return (A, I) => {
        for (c = -1, l = A.length; l - c > 1;) b = l + c >> 1, A[b] <= I ? c = b : l = b;
        return l
      }
    }();
    this.x = a, this.y = e, this.lastIndex = a.length - 1;
    let n, o;
    return this.interpolate = function(l) {
      return l ? (o = s(this.x, l), n = o - 1, (l - this.x[n]) * (this.y[o] - this.y[n]) / (this.x[o] - this.x[n]) + this.y[n]) : 0
    }, this
  }

  function w(a) {
    i.controller.spline = i.params.loop ? new u(i.slidesGrid, a.slidesGrid) : new u(i.snapGrid, a.snapGrid)
  }

  function x(a, e) {
    const s = i.controller.control;
    let n, o;
    const p = i.constructor;

    function l(c) {
      if (c.destroyed) return;
      const b = i.rtlTranslate ? -i.translate : i.translate;
      i.params.controller.by === "slide" && (w(c), o = -i.controller.spline.interpolate(-b)), (!o || i.params.controller.by === "container") && (n = (c.maxTranslate() - c.minTranslate()) / (i.maxTranslate() - i.minTranslate()), (Number.isNaN(n) || !Number.isFinite(n)) && (n = 1), o = (b - i.minTranslate()) * n + c.minTranslate()), i.params.controller.inverse && (o = c.maxTranslate() - o), c.updateProgress(o), c.setTranslate(o, i), c.updateActiveIndex(), c.updateSlidesClasses()
    }
    if (Array.isArray(s))
      for (let c = 0; c < s.length; c += 1) s[c] !== e && s[c] instanceof p && l(s[c]);
    else s instanceof p && e !== s && l(s)
  }

  function v(a, e) {
    const s = i.constructor,
      n = i.controller.control;
    let o;

    function p(l) {
      l.destroyed || (l.setTransition(a, i), a !== 0 && (l.transitionStart(), l.params.autoHeight && dt(() => {
        l.updateAutoHeight()
      }), pt(l.wrapperEl, () => {
        n && l.transitionEnd()
      })))
    }
    if (Array.isArray(n))
      for (o = 0; o < n.length; o += 1) n[o] !== e && n[o] instanceof s && p(n[o]);
    else n instanceof s && e !== n && p(n)
  }

  function h() {
    i.controller.control && i.controller.spline && (i.controller.spline = void 0, delete i.controller.spline)
  }
  _("beforeInit", () => {
    if (typeof window < "u" && (typeof i.params.controller.control == "string" || i.params.controller.control instanceof HTMLElement)) {
      const a = document.querySelector(i.params.controller.control);
      if (a && a.swiper) i.controller.control = a.swiper;
      else if (a) {
        const e = s => {
          i.controller.control = s.detail[0], i.update(), a.removeEventListener("init", e)
        };
        a.addEventListener("init", e)
      }
      return
    }
    i.controller.control = i.params.controller.control
  }), _("update", () => {
    h()
  }), _("resize", () => {
    h()
  }), _("observerUpdate", () => {
    h()
  }), _("setTranslate", (a, e, s) => {
    !i.controller.control || i.controller.control.destroyed || i.controller.setTranslate(e, s)
  }), _("setTransition", (a, e, s) => {
    !i.controller.control || i.controller.control.destroyed || i.controller.setTransition(e, s)
  }), Object.assign(i.controller, {
    setTranslate: x,
    setTransition: v
  })
}
const kt = F("/images/about/hero.webp"),
  wt = {
    class: "hero"
  },
  $t = {
    class: "top-text c2"
  },
  xt = {
    class: "swiper"
  },
  Tt = {
    class: "swiper-wrapper"
  },
  At = {
    class: "swiper-slide h1"
  },
  St = ["innerHTML"],
  Ct = ["innerHTML"],
  jt = L({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(S) {
      const i = S,
        {
          isMobile: y
        } = E(),
        _ = Y(i.data.words, 7),
        u = () => {
          y.value || g.to("section.hero .bg-img-wrap img", {
            scrollTrigger: {
              trigger: "section.hero",
              start: "top top",
              end: "top -50%",
              scrub: .4
            },
            y: 0
          })
        };
      return tt(() => {
        new P("section.hero .swiper", {
          slidesPerView: "auto",
          centeredSlides: !0,
          loop: !0,
          speed: 1500,
          spaceBetween: C(80),
          modules: [mt],
          autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
          },
          allowTouchMove: !1
        })
      }), M(u), (x, v) => {
        const h = U;
        return r(), d("section", wt, [k(h, null, {
          default: D(() => v[0] || (v[0] = [t("div", {
            class: "bg-img-wrap"
          }, [t("img", {
            src: kt,
            role: "presentation",
            class: "inner-img"
          })], -1)])),
          _: 1
        }), t("p", $t, f(x.data.topText), 1), t("div", xt, [t("div", Tt, [(r(!0), d($, null, T(m(_), a => (r(), d("p", At, f(a), 1))), 256))])]), t("div", {
          innerHTML: x.data.smallDescription,
          class: "small-description p1",
          "data-anim-text-by-lines": ""
        }, null, 8, St), t("div", {
          innerHTML: x.data.description,
          "data-fill-by-scroll": "",
          "data-fill-color": "#EAE8E8",
          class: "description h3"
        }, null, 8, Ct)])
      }
    }
  }),
  Mt = B(jt, [
    ["__scopeId", "data-v-d394c504"]
  ]),
  Lt = {
    class: "founders"
  },
  Bt = {
    class: "top-text c3"
  },
  It = {
    class: "grid-founders"
  },
  Et = ["onClick"],
  Ht = {
    class: "position c3"
  },
  Pt = {
    class: "name h4"
  },
  Dt = {
    class: "small-description c3"
  },
  Nt = ["src", "alt"],
  Ot = {
    class: "btn-read-more"
  },
  Rt = L({
    __name: "Founders",
    props: {
      data: {}
    },
    setup(S) {
      const i = S,
        {
          getTeamMembers: y
        } = W(),
        _ = R("specialist-modal"),
        u = y(i.data.list),
        w = () => {},
        x = v => {
          _.value.id = v, _.value.isActive = !0
        };
      return M(w), (v, h) => {
        const a = X;
        return r(), d("section", Lt, [t("p", Bt, f(v.data.description), 1), h[0] || (h[0] = t("h4", {
          class: "title h0"
        }, "ADA Partners", -1)), t("div", It, [(r(!0), d($, null, T(m(u), e => {
          var s;
          return r(), d("article", {
            key: e.id,
            class: "card-founder",
            "hover-link-container": "",
            onClick: n => x(e.id)
          }, [t("span", Ht, f(e.position), 1), t("p", Pt, f(e.name), 1), t("p", Dt, f(e.shortBio), 1), t("img", {
            src: (s = e == null ? void 0 : e.image) == null ? void 0 : s.normal,
            alt: e.name,
            class: "founder-card-img n1"
          }, null, 8, Nt), t("button", Ot, [k(a, {
            text: "Read More",
            underline: "",
            "text-class": "p1"
          })])], 8, Et)
        }), 128))])])
      }
    }
  }),
  Vt = B(Rt, [
    ["__scopeId", "data-v-e6ae357f"]
  ]),
  Ft = F("/images/decor/bg2.svg"),
  Wt = F("/images/about/associates-bg-mob.svg"),
  qt = {
    class: "skilled-professionals"
  },
  zt = {
    class: "top-details-wrap"
  },
  Gt = {
    class: "description h4",
    "data-anim-text-by-lines": ""
  },
  Ut = {
    class: "top-details"
  },
  Xt = ["innerHTML"],
  Jt = {
    key: 0,
    class: "associates-wrap"
  },
  Yt = {
    key: 1,
    class: "associates-mobile-slider swiper"
  },
  Kt = {
    class: "swiper-wrapper"
  },
  Qt = {
    class: "sticky"
  },
  Zt = {
    class: "wrap-job-positions"
  },
  te = {
    class: "wrap-avatars"
  },
  ee = ["src", "alt"],
  se = {
    class: "specialists-wrapper"
  },
  oe = {
    class: "specialists-scroller"
  },
  ne = {
    class: "h4"
  },
  ie = ["innerHTML"],
  ae = {
    key: 0,
    class: "mobile-list"
  },
  le = {
    class: "image-wrap"
  },
  re = ["src", "alt"],
  ce = {
    class: "details"
  },
  de = {
    class: "p2"
  },
  pe = {
    class: "c2"
  },
  ue = {
    key: 2,
    class: "slides-anim-plash"
  },
  me = ["data-slide-idx"],
  _e = L({
    __name: "SkilledProfessionals",
    props: {
      data: {},
      otherTeam: {}
    },
    setup(S) {
      const i = S;
      R("specialist-modal");
      const {
        getTeamMembers: y,
        getLocations: _
      } = W(), {
        isMobile: u
      } = E(), w = N(0), x = N(0), v = y(i.data.list), h = a(y(i.otherTeam));

      function a(s) {
        const n = ["practice manager", "director of operations", "office manager", "office co-manager", "patient care coordinator"];
        return [...s].sort((o, p) => {
          var z, G;
          const l = (z = o.position) == null ? void 0 : z.trim().toLowerCase(),
            c = (G = p.position) == null ? void 0 : G.trim().toLowerCase(),
            b = n.indexOf(l),
            A = n.indexOf(c),
            I = b === -1 ? n.length : b,
            K = A === -1 ? n.length : A;
          return I - K
        })
      }
      return M(() => {
        if (u.value) {
          new P("section.skilled-professionals .associates-mobile-slider", {
            modules: [ht],
            slidesPerView: "auto",
            spaceBetween: C(16),
            freeMode: {
              momentum: !1
            },
            loop: !1,
            slidesOffsetBefore: C(16),
            slidesOffsetAfter: C(16),
            speed: 100,
            on: {
              progress(o, p) {
                x.value = Math.ceil(p * 100) > 100 ? 100 : Math.ceil(p * 100)
              }
            }
          });
          return
        }
        const s = g.timeline();
        q(() => {
          s.set("section.skilled-professionals .specialists-scroller", {
            transform: "translate(0, 0)"
          });
          for (let o = 0; o < h.length - 1; o++) s.fromTo("section.skilled-professionals .specialists-scroller", {
            transform: `translate(0, -${9.1*o}rem)`
          }, {
            transform: `translate(0, -${9.1*(o+1)}rem)`,
            ease: "none",
            scrollTrigger: {
              trigger: `section.skilled-professionals .slides-anim-plash .slide-anim-plash[data-slide-idx="${o}"]`,
              start: "top bottom",
              end: "bottom bottom",
              scrub: .4,
              onLeave: () => {
                w.value = o + 1
              },
              onLeaveBack: () => {
                w.value = o
              }
            }
          })
        });
        const n = document.querySelector("section.skilled-professionals");
        n && V("--professionals-top", `${window.innerHeight-n.clientHeight}px`)
      }), (s, n) => {
        const o = U,
          p = gt;
        return r(), d("section", qt, [k(o, null, {
          default: D(() => n[0] || (n[0] = [t("div", {
            class: "bg-image-wrap"
          }, [t("img", {
            src: Ft,
            role: "presentation",
            class: "bg-image",
            loading: "lazy"
          })], -1), t("img", {
            src: Wt,
            class: "mobile-bg-img",
            role: "presentation"
          }, null, -1)])),
          _: 1
        }), t("div", zt, [t("p", Gt, f(s.data.description), 1), t("div", Ut, [t("div", {
          "data-fill-by-scroll": "",
          "data-fill-color": "#EAE8E8",
          class: "small-description c3",
          innerHTML: s.data.smallDescription
        }, null, 8, Xt), n[1] || (n[1] = t("p", {
          class: "slide-counter"
        }, [t("span", {
          class: "h4"
        }, " 20+ "), t("span", {
          class: "c3"
        }, " Specialists ")], -1))])]), m(u) ? (r(), d("div", Yt, [t("div", Kt, [(r(!0), d($, null, T(m(v), l => (r(), d("div", {
          key: l.id,
          class: "swiper-slide"
        }, [k(p, {
          data: l
        }, null, 8, ["data"])]))), 128))])])) : (r(), d("div", Jt, [(r(!0), d($, null, T(m(v), l => (r(), et(p, {
          key: l.id,
          data: l
        }, null, 8, ["data"]))), 128))])), t("div", {
          class: "pagination-bar",
          style: J({
            "--progress": `${m(x)}%`
          })
        }, null, 4), t("div", Qt, [t("div", Zt, [(r(!0), d($, null, T(m(h), (l, c) => (r(), d("p", {
          key: l.id,
          class: H(["h4 job-position", {
            active: m(w) === c
          }])
        }, f(l.position), 3))), 128))]), t("div", te, [(r(!0), d($, null, T(m(h), (l, c) => {
          var b;
          return r(), d("img", {
            key: l.id,
            src: (b = l.image) == null ? void 0 : b.normal,
            alt: l.name,
            class: H(["inner-img", {
              active: m(w) === c
            }])
          }, null, 10, ee)
        }), 128))]), n[2] || (n[2] = t("div", {
          class: "scroller-panel"
        }, [t("span", {
          class: "c2"
        }, "The People"), t("span", {
          class: "c2"
        }, "Behind Your Smile")], -1)), t("div", se, [t("div", oe, [(r(!0), d($, null, T(m(h), (l, c) => (r(), d("div", {
          key: l.id,
          class: H(["specialist-item", {
            active: m(w) === c
          }])
        }, [t("span", ne, f(l.name), 1), t("span", {
          class: "location c3",
          innerHTML: m(_)(l.locations)[0].title
        }, null, 8, ie)], 2))), 128))])]), m(u) ? (r(), d("div", ae, [(r(!0), d($, null, T(m(h), l => {
          var c;
          return r(), d("div", {
            key: l.id,
            class: "list-item-mob"
          }, [t("div", le, [t("img", {
            src: (c = l.image) == null ? void 0 : c.medium,
            alt: l.name,
            class: "inner-img"
          }, null, 8, re)]), t("div", ce, [t("p", de, f(l.name), 1), t("p", pe, f(l.position), 1)])])
        }), 128))])) : j("", !0)]), m(u) ? j("", !0) : (r(), d("div", ue, [(r(!0), d($, null, T(m(h).length - 1, (l, c) => (r(), d($, {
          key: c
        }, [t("div", {
          class: "slide-anim-plash",
          "data-slide-idx": c
        }, null, 8, me), n[3] || (n[3] = t("div", {
          class: "pause-anim-slide"
        }, null, -1))], 64))), 128))]))])
      }
    }
  }),
  he = B(_e, [
    ["__scopeId", "data-v-cee02134"]
  ]),
  ge = {
    class: "chronology"
  },
  fe = {
    class: "sticky"
  },
  ve = {
    key: 0,
    class: "left"
  },
  be = ["data-slide-idx"],
  ye = ["src", "alt"],
  ke = {
    key: 1,
    class: "right"
  },
  we = {
    class: "years"
  },
  $e = {
    class: "years-scroller"
  },
  xe = {
    class: "content-slides"
  },
  Te = ["data-slide-idx"],
  Ae = {
    class: "c3"
  },
  Se = {
    class: "p1"
  },
  Ce = {
    class: "bottom-text"
  },
  je = {
    class: "h4"
  },
  Me = {
    class: "wrap-arrow"
  },
  Le = {
    key: 2,
    class: "mobile-content"
  },
  Be = {
    class: "main-slider swiper"
  },
  Ie = {
    class: "swiper-wrapper"
  },
  Ee = ["src", "alt"],
  He = {
    class: "thumb-slider"
  },
  Pe = ["onClick"],
  De = {
    class: "c3"
  },
  Ne = {
    class: "text-slider swiper"
  },
  Oe = {
    class: "swiper-wrapper"
  },
  Re = {
    class: "c2"
  },
  Ve = {
    class: "p1"
  },
  Fe = {
    key: 0,
    class: "sticky-plash"
  },
  We = ["data-plash-idx"],
  qe = L({
    __name: "ChronologySlider",
    props: {
      data: {}
    },
    setup(S) {
      const i = S,
        y = N(0),
        {
          isMobile: _
        } = E(),
        u = R("lenis");
      let w = null,
        x = null;
      const v = () => {
          if (_.value) {
            const e = document.querySelector("section.chronology .thumb-slider .line-wrapper"),
              s = document.querySelector("section.chronology .thumb-slider .thumb-right-hide"),
              n = document.querySelector("section.chronology .thumb-slider .thumb-left-hide"),
              o = document.querySelector("section.chronology .thumb-slider .active-plash"),
              p = ((e == null ? void 0 : e.offsetWidth) || 0) - window.innerWidth + C(16);
            x = new P("section.chronology .text-slider.swiper", {
              slidesPerView: "auto",
              spaceBetween: 0,
              speed: 800,
              allowTouchMove: !1
            }), w = new P("section.chronology .main-slider.swiper", {
              slidesPerView: "auto",
              spaceBetween: C(16),
              slidesOffsetBefore: C(16),
              slidesOffsetAfter: C(16),
              speed: 800,
              modules: [yt],
              controller: {
                control: x || void 0
              },
              on: {
                progress: l => {
                  const c = l.progress * 100,
                    b = Math.round((i.data.list.length - 1) * l.progress);
                  if (y.value = b < 0 ? 0 : b > i.data.list.length - 1 ? i.data.list.length - 1 : b, e && s && n && o) {
                    const A = p / 100 * c;
                    e.style.transform = `translateX(-${A}px)`, s.style.transform = `translateX(${c>0?c:0}%)`, n.style.transform = `translateX(-${c<100?100-c:0}%)`
                  }
                },
                touchStart: () => {
                  e && (e.style.transition = "all 0.05s linear")
                },
                touchEnd: () => {
                  e && (e.style.transition = "all 0.5s var(--default-ease)")
                }
              }
            })
          } else {
            const e = g.timeline({
              defaults: {
                ease: "none"
              }
            });
            q(() => {
              e.set("section.chronology .years-scroller", {
                y: 0
              }), e.set("section.chronology .content-slides .highlight-line", {
                y: 0
              });
              for (let s = 0; s < i.data.list.length - 1; s++) e.fromTo("section.chronology .years-scroller", {
                transform: `translate(0, -${3*s}rem)`
              }, {
                transform: `translate(0, -${3*(s+1)}rem)`,
                scrollTrigger: {
                  trigger: `section.chronology .sticky-plash .slide-plash[data-plash-idx="${s}"]`,
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: !0,
                  onLeave: () => {
                    y.value = s + 1
                  },
                  onLeaveBack: () => {
                    y.value = s
                  }
                }
              }), e.fromTo("section.chronology .content-slides .highlight-line", {
                transform: `translate(0, -${(100/i.data.list.length+1)*s}%)`
              }, {
                transform: `translate(0, -${(100/i.data.list.length+1)*(s+1)}%)`,
                scrollTrigger: {
                  trigger: `section.chronology .sticky-plash .slide-plash[data-plash-idx="${s}"]`,
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: !0
                }
              }, "<"), e.to(`section.chronology .wrap-slide-image[data-slide-idx='${s+1}']`, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                scrollTrigger: {
                  trigger: `section.chronology .sticky-plash .slide-plash[data-plash-idx="${s}"]`,
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: !0
                }
              }, "<"), e.from(`section.chronology .wrap-slide-image[data-slide-idx='${s+1}'] img`, {
                scrollTrigger: {
                  trigger: `section.chronology .sticky-plash .slide-plash[data-plash-idx="${s}"]`,
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: !0
                },
                scale: 1.4
              }, "<")
            })
          }
        },
        h = e => {
          w && w.slideTo(e)
        },
        a = () => {
          u.value && u.value.scrollTo("section.mission", {
            duration: 1.4
          })
        };
      return M(v), (e, s) => {
        const n = st;
        return r(), d("section", ge, [t("div", fe, [m(_) ? j("", !0) : (r(), d("div", ve, [(r(!0), d($, null, T(e.data.list, (o, p) => (r(), d("div", {
          key: p,
          class: "wrap-slide-image",
          "data-slide-idx": p
        }, [t("img", {
          src: o.image.medium,
          alt: o.title,
          class: "inner-img"
        }, null, 8, ye)], 8, be))), 128))])), m(_) ? j("", !0) : (r(), d("div", ke, [t("div", we, [t("div", $e, [(r(!0), d($, null, T(e.data.list, (o, p) => (r(), d("span", {
          key: p,
          class: H(["year-point c3", {
            active: m(y) === p
          }])
        }, f(o.year), 3))), 128))])]), t("div", xe, [s[0] || (s[0] = t("div", {
          class: "highlight-line"
        }, null, -1)), (r(!0), d($, null, T(e.data.list, (o, p) => (r(), d("div", {
          key: p,
          "data-slide-idx": p,
          class: H(["text-slide", {
            active: m(y) === p
          }])
        }, [t("p", Ae, f(o.title), 1), t("p", Se, f(o.description), 1)], 10, Te))), 128))]), t("div", Ce, [t("span", je, f(e.data.expYears), 1), s[1] || (s[1] = t("span", {
          class: "small-text c3"
        }, [O(" Years of "), t("br"), t("b", null, "experience")], -1))]), t("button", {
          class: "skip-btn c3",
          onClick: a
        }, [s[2] || (s[2] = O(" Skip ")), t("div", Me, [k(n)])])])), m(_) ? (r(), d("div", Le, [t("div", Be, [t("div", Ie, [(r(!0), d($, null, T(e.data.list, o => (r(), d("div", {
          key: o.title,
          class: "swiper-slide"
        }, [t("img", {
          src: o.image.medium,
          alt: o.title,
          class: "inner-img"
        }, null, 8, Ee)]))), 128))])]), t("div", He, [t("div", {
          class: "line-wrapper",
          style: J({
            "--active-slide": m(y)
          })
        }, [s[3] || (s[3] = t("div", {
          class: "active-plash"
        }, null, -1)), (r(!0), d($, null, T(e.data.list, (o, p) => (r(), d("button", {
          key: o.year,
          class: "point",
          onClick: l => h(p)
        }, [t("p", De, f(o.year), 1)], 8, Pe))), 128))], 4), s[4] || (s[4] = t("div", {
          class: "thumb-left-hide"
        }, null, -1)), s[5] || (s[5] = t("div", {
          class: "thumb-right-hide"
        }, null, -1))]), t("div", Ne, [t("div", Oe, [(r(!0), d($, null, T(e.data.list, o => (r(), d("div", {
          key: o.title,
          class: "swiper-slide"
        }, [t("p", Re, f(o.title), 1), t("p", Ve, f(o.description), 1)]))), 128))])])])) : j("", !0)]), m(_) ? j("", !0) : (r(), d("div", Fe, [(r(!0), d($, null, T(e.data.list.slice(0, e.data.list.length - 1), (o, p) => (r(), d($, {
          key: p
        }, [t("div", {
          class: "slide-plash",
          "data-plash-idx": p
        }, null, 8, We), s[6] || (s[6] = t("div", {
          class: "slide-pause"
        }, null, -1))], 64))), 128))]))])
      }
    }
  }),
  ze = B(qe, [
    ["__scopeId", "data-v-c6229bc5"]
  ]),
  Ge = {
    class: "mission"
  },
  Ue = {
    class: "wrap-details"
  },
  Xe = {
    class: "c2"
  },
  Je = {
    class: "description p3",
    "data-anim-text-by-lines": ""
  },
  Ye = {
    class: "wrap-inst"
  },
  Ke = {
    class: "wrap-slider"
  },
  Qe = {
    class: "swiper"
  },
  Ze = {
    class: "swiper-wrapper"
  },
  ts = {
    class: "swiper-slide"
  },
  es = ["src"],
  ss = {
    key: 0,
    class: "slide-btn-prev",
    "aria-label": "btn slide previous"
  },
  os = {
    key: 1,
    class: "slide-btn-next",
    "aria-label": "btn slide next"
  },
  ns = {
    class: "wrap-inst-mob"
  },
  is = {
    class: "mobile-slider-controls"
  },
  as = {
    class: "btn-mob-slide",
    "aria-label": "button change slide prev"
  },
  ls = {
    class: "btn-mob-slide next",
    "aria-label": "button change slide next"
  },
  rs = L({
    __name: "Mission",
    props: {
      data: {}
    },
    setup(S) {
      var v;
      const i = S,
        {
          socials: y
        } = W(),
        {
          isMobile: _
        } = E(),
        u = Y(i.data.gallery, 7),
        w = (v = y.find(h => h.name.toLowerCase() === "instagram")) == null ? void 0 : v.link;
      return M(() => {
        setTimeout(() => {
          new P("section.mission .wrap-slider .swiper", {
            slidesPerView: "auto",
            spaceBetween: _ ? C(16) : C(8),
            loop: !0,
            centeredSlides: !0,
            allowTouchMove: !!_,
            speed: 650,
            modules: [ut],
            navigation: _.value ? {
              nextEl: ".mission .mobile-slider-controls .btn-mob-slide.next",
              prevEl: ".mission .mobile-slider-controls .btn-mob-slide"
            } : {
              nextEl: ".mission .slide-btn-next",
              prevEl: ".mission .slide-btn-prev"
            },
            on: {
              slideChange: h => {
                const a = document.querySelector("section.mission .mobile-slider-controls .slide-counter");
                a && (a.innerText = `${String(h.realIndex+1).padStart(2,"0")} / ${String(u.length).padStart(2,"0")}`)
              }
            }
          })
        }, 100)
      }), (h, a) => {
        const e = X,
          s = ot,
          n = vt,
          o = ft;
        return r(), d("section", Ge, [a[3] || (a[3] = t("div", {
          class: "title-wrap h2"
        }, [t("span", {
          class: "line n1"
        }, "Advanced"), t("span", {
          class: "line n2"
        }, [t("span", null, [O("Dentistry "), t("i", null, "with")]), t("span", null, [O("a "), t("i", null, "Human")])]), t("span", {
          class: "line n3"
        }, "Touch")], -1)), t("div", Ue, [t("span", Xe, f(h.data.blockName), 1), t("p", Je, f(h.data.description), 1), t("div", Ye, [a[0] || (a[0] = t("p", {
          class: "p2"
        }, "Follow us on", -1)), k(s, {
          external: "",
          target: "_blank",
          to: m(w)
        }, {
          default: D(() => [k(e, {
            text: "Instagram",
            underline: "",
            "text-class": "p2"
          })]),
          _: 1
        }, 8, ["to"])])]), t("div", Ke, [t("div", Qe, [t("div", Ze, [(r(!0), d($, null, T(m(u), p => (r(), d("div", ts, [t("img", {
          src: p.normal,
          role: "presentation",
          class: "inner-img"
        }, null, 8, es)]))), 256))])]), m(_) ? j("", !0) : (r(), d("button", ss, [k(n)])), m(_) ? j("", !0) : (r(), d("button", os, [k(n, {
          next: ""
        })]))]), t("div", ns, [a[1] || (a[1] = t("p", {
          class: "p2"
        }, "Follow us on", -1)), k(s, {
          external: "",
          target: "_blank",
          to: m(w)
        }, {
          default: D(() => [k(e, {
            text: "Instagram",
            underline: "",
            "text-class": "p2"
          })]),
          _: 1
        }, 8, ["to"])]), t("div", is, [t("button", as, [k(o)]), a[2] || (a[2] = t("p", {
          class: "c2 slide-counter"
        }, "01 / 07", -1)), t("button", ls, [k(o)])])])
      }
    }
  }),
  cs = B(rs, [
    ["__scopeId", "data-v-eff0686a"]
  ]),
  ds = {
    class: "join-our-team"
  },
  ps = {
    class: "sticky"
  },
  us = {
    class: "text left c3"
  },
  ms = {
    class: "text right c3"
  },
  _s = {
    class: "title1 h5"
  },
  hs = {
    class: "title2 h5"
  },
  gs = {
    class: "title3 h5"
  },
  fs = {
    class: "final-content"
  },
  vs = {
    class: "mobile-content"
  },
  bs = {
    class: "mob-title h5"
  },
  ys = {
    class: "wrap-details"
  },
  ks = L({
    __name: "JoinOurTeam",
    props: {
      data: {}
    },
    setup(S) {
      const {
        isMobile: i
      } = E(), y = R("call-modal"), _ = N(), u = {
        scale: {
          from: 5,
          to: .75
        },
        blur: {
          from: 80,
          to: 2.5
        },
        ringWidth: {
          from: 800,
          to: 150
        }
      }, w = (a, e, s) => {
        const n = 300 * a,
          o = n - s / 2 - e,
          p = n + s / 2 + e;
        return {
          holeRadius: o,
          holeDiameter: o * 2,
          ringRadius: p,
          ringDiameter: p * 2
        }
      }, x = (a, e, s) => {
        if (!_.value) return;
        const n = _.value,
          o = n.getContext("2d");
        n.width = window.innerWidth, n.height = window.innerHeight;
        const p = 300 * a,
          l = e + s,
          c = (p + l) * 2,
          b = document.createElement("canvas");
        b.width = c, b.height = c;
        const A = b.getContext("2d"),
          I = c / 2;
        A.filter = `blur(${e}px)`, A.beginPath(), A.lineWidth = s, A.strokeStyle = "white", A.arc(I, I, p, 0, Math.PI * 2), A.stroke(), o.clearRect(0, 0, n.width, n.height), o.save(), o.translate(n.width / 2, n.height / 2), o.drawImage(b, -c / 2, -c / 2), o.restore()
      }, v = a => {
        const [e, s, n] = a;
        return `${e}, ${s.toLocaleLowerCase()} ${n.toLocaleLowerCase()}`
      };
      return M(async () => {
        if (i.value) return;
        x(u.scale.from, u.blur.from, u.ringWidth.from);
        const {
          ringDiameter: a,
          holeDiameter: e
        } = w(u.scale.to, u.blur.to, u.ringWidth.to);
        g.set(".join-our-team .fake-circle", {
          width: `${a}px`,
          height: `${a}px`
        }), g.set(".join-our-team .fake-circle-inner", {
          width: `${e}px`,
          height: `${e}px`
        });
        const s = g.timeline({
          scrollTrigger: {
            trigger: ".join-our-team .sticky-plash",
            start: "top 40%",
            end: "top -150%",
            scrub: !0,
            onEnter: () => {
              g.set("section.join-our-team .sticky .text", {
                autoAlpha: 1
              })
            },
            onLeaveBack: () => {
              g.set("section.join-our-team .sticky .text", {
                autoAlpha: 0
              })
            }
          }
        });
        s.to("section.join-our-team .sticky .title1", {
          ease: "none",
          autoAlpha: 1,
          duration: .3
        }), s.set("section.join-our-team .sticky .title1", {
          autoAlpha: 0
        }, "<+=1.5"), s.to("section.join-our-team .sticky .title2", {
          ease: "none",
          autoAlpha: 1,
          duration: .3
        }), s.set("section.join-our-team .sticky .title2", {
          autoAlpha: 0
        }, "<+=2"), s.to("section.join-our-team .sticky .title3", {
          ease: "none",
          autoAlpha: 1,
          duration: .3
        }), s.set("section.join-our-team .sticky .title3", {
          autoAlpha: 0
        }, "<+=2"), g.to("section.join-our-team .sticky", {
          scrollTrigger: {
            trigger: ".join-our-team .sticky-plash",
            start: "top 40%",
            end: "top 30%",
            scrub: !0
          },
          ease: "none",
          background: "black"
        }), g.to("section.join-our-team .sticky", {
          scrollTrigger: {
            trigger: ".join-our-team .sticky-plash",
            start: "top -75%",
            end: "top -100%",
            scrub: !0
          },
          ease: "none",
          background: "white"
        }), g.to("section.join-our-team .sticky .fake-circle", {
          scrollTrigger: {
            trigger: ".join-our-team .sticky-plash",
            start: "top -75%",
            end: "top -100%",
            scrub: !0
          },
          ease: "none",
          background: "black"
        }), g.to(".fake-img-wrapper", {
          scrollTrigger: {
            trigger: ".join-our-team .sticky-plash",
            start: "top bottom",
            end: "top 30%",
            scrub: !0
          },
          ease: "none",
          autoAlpha: 0
        }), nt.create({
          trigger: ".join-our-team .sticky-plash",
          start: "top bottom",
          end: "bottom bottom",
          scrub: !0,
          onUpdate: o => {
            const p = o.progress,
              l = g.utils.interpolate(u.scale.from, u.scale.to, p),
              c = g.utils.interpolate(u.blur.from, u.blur.to, p),
              b = g.utils.interpolate(u.ringWidth.from, u.ringWidth.to, p);
            x(l, c, b)
          },
          onEnter: () => {
            g.set(".join-our-team canvas", {
              autoAlpha: 1
            })
          },
          onLeaveBack: () => {
            g.set(".join-our-team canvas", {
              autoAlpha: 0
            })
          },
          onEnterBack: () => {
            g.set(".join-our-team canvas", {
              autoAlpha: 1
            }), g.set([".join-our-team .fake-circle", ".join-our-team .fake-circle-inner"], {
              autoAlpha: 0
            })
          },
          onLeave: () => {
            g.set(".join-our-team .fake-circle", {
              autoAlpha: 1
            }), g.set(".join-our-team .fake-circle-inner", {
              autoAlpha: 1
            }), g.set(".join-our-team canvas", {
              autoAlpha: 0
            })
          }
        });
        const n = g.timeline({
          scrollTrigger: {
            trigger: ".join-our-team .anim-plash-rings",
            start: "top bottom",
            end: "bottom bottom",
            scrub: !0
          },
          onUpdate: () => {
            const o = n.progress();
            o > .25 && o < .75 && g.set("section.join-our-team .sticky .fake-circle-inner", {
              zIndex: 0
            }), (o < .25 || o > .75) && g.set("section.join-our-team .sticky .fake-circle-inner", {
              zIndex: 2
            })
          }
        });
        n.add("start"), n.fromTo("section.join-our-team .sticky .fake-circle-inner", {
          transform: "translate(-50%, -50%) scale(1)"
        }, {
          transform: "translate(125%, -50%) scale(0.7)",
          ease: "none"
        }), n.fromTo("section.join-our-team .sticky .fake-circle-inner", {
          transform: "translate(125%, -50%) scale(0.7)"
        }, {
          transform: "translate(-50%, -50%) scale(0.2)",
          ease: "none"
        }), n.fromTo("section.join-our-team .sticky .fake-circle-inner", {
          transform: "translate(-50%, -50%) scale(0.2)"
        }, {
          transform: "translate(-225%, -50%) scale(0.7)",
          ease: "none",
          onComplete: () => {
            g.set("section.join-our-team .sticky .fake-circle-inner", {
              zIndex: 2
            })
          }
        }), n.fromTo("section.join-our-team .sticky .fake-circle-inner", {
          transform: "translate(-225%, -50%) scale(0.7)"
        }, {
          transform: "translate(-50%, -50%) scale(1)",
          filter: "blur(0px)",
          ease: "none"
        }), n.fromTo("section.join-our-team .sticky .fake-circle", {
          transform: "translate(-50%, -50%) scale(1)"
        }, {
          transform: "translate(-50%, -50%) scale(0.479)",
          ease: "power3.in",
          duration: 2,
          filter: "blur(0px)"
        }, "start"), n.to(["section.join-our-team .sticky .fake-circle", "section.join-our-team .sticky .fake-circle-inner"], {
          autoAlpha: 0,
          duration: .05
        }), n.to("section.join-our-team .final-content", {
          autoAlpha: 1,
          duration: .05
        }), q(() => {
          g.set(".join-our-team .sticky .fake-circle-inner", {
            transform: "translate(-50%, -50%) scale(1)"
          })
        })
      }), (a, e) => {
        const s = it;
        return r(), d("section", ds, [t("div", ps, [t("canvas", {
          ref_key: "canvasRef",
          ref: _,
          class: "canvas"
        }, null, 512), t("span", us, f(a.data.titles[0]), 1), t("span", ms, f(a.data.titles[1]), 1), t("p", _s, f(a.data.texts[0]), 1), t("p", hs, f(a.data.texts[1]), 1), t("p", gs, f(a.data.texts[2]), 1), e[4] || (e[4] = t("div", {
          class: "fake-circle"
        }, null, -1)), e[5] || (e[5] = t("div", {
          class: "fake-circle-inner"
        }, null, -1)), t("div", fs, [e[2] || (e[2] = t("span", {
          class: "small-text c2"
        }, " The smile you’ve always wanted starts here. ", -1)), e[3] || (e[3] = t("p", {
          class: "final-title h2"
        }, "Schedule a Consultation", -1)), t("button", {
          class: "book-btn",
          onClick: e[0] || (e[0] = () => m(y).isActive = !0)
        }, [k(s, {
          text: "Book A Call",
          "book-btn": ""
        })])])]), e[9] || (e[9] = t("div", {
          class: "sticky-plash"
        }, null, -1)), e[10] || (e[10] = t("div", {
          class: "anim-plash-rings"
        }, null, -1)), e[11] || (e[11] = t("div", {
          class: "sticky-final-pause"
        }, null, -1)), t("div", vs, [e[8] || (e[8] = t("div", {
          class: "mob-bg"
        }, null, -1)), t("p", bs, f(v(a.data.texts)), 1), t("div", ys, [e[6] || (e[6] = t("p", {
          class: "join-title h2"
        }, "Schedule a Consultation", -1)), e[7] || (e[7] = t("p", {
          class: "sub-title c2"
        }, "The smile you’ve always wanted starts here.", -1)), t("button", {
          class: "btn-apply",
          onClick: e[1] || (e[1] = () => m(y).isActive = !0)
        }, [k(s, {
          text: "Book A Call",
          "book-btn": ""
        })])])])])
      }
    }
  }),
  ws = B(ks, [
    ["__scopeId", "data-v-fe3d47f6"]
  ]),
  $s = {
    key: 0,
    class: "page"
  },
  xs = {
    class: "fake-img-wrapper"
  },
  Ts = {
    class: "sticky-container"
  },
  As = {
    key: 0,
    class: "wrap-fake-img-sticky"
  },
  Ss = {
    class: "fake-img-sticky"
  },
  Cs = {
    class: "wrap-fake-img"
  },
  js = ["src"],
  Ms = L({
    __name: "about",
    async setup(S) {
      let i, y;
      const _ = at(),
        {
          data: u
        } = ([i, y] = lt(() => ct("/api/about-page", {
          getCachedData(v) {
            return _.payload.data[v] || _.static.data[v]
          }
        }, "$DWlCMkxhze")), i = await i, y(), i);
      if (!u.value) throw rt({
        statusCode: 404,
        statusMessage: "Error fetching about page data",
        fatal: !0
      });
      Q(u.value.meta);
      const {
        isMobile: w
      } = E();
      return M(() => {
        if (w.value) return;
        const v = C(370),
          h = document.querySelector("main.page .sticky-container"),
          a = document.querySelector(".fake-img-wrapper");
        a && V("--fake-img-sticky-wrapper", `${(a.getBoundingClientRect().height-window.innerHeight)*-1}px`), V("--fake-img-sticky-top", `${((h==null?void 0:h.getBoundingClientRect().height)||0)-window.innerHeight}px`);
        const e = Number((v / (window.innerHeight - C(64))).toFixed(2));
        g.to(".wrap-fake-img-sticky .wrap-fake-img", {
          scrollTrigger: {
            trigger: ".wrap-fake-img-sticky",
            start: "top top",
            end: "bottom bottom",
            scrub: !0,
            onEnter: () => {
              g.set("section.chronology .sticky .left", {
                autoAlpha: 0
              }), g.set(".wrap-fake-img-sticky .wrap-fake-img img", {
                autoAlpha: 1
              })
            },
            onLeaveBack: () => {
              g.set("section.chronology .sticky .left", {
                autoAlpha: 1
              }), g.set(".wrap-fake-img-sticky .wrap-fake-img img", {
                autoAlpha: 0
              })
            }
          },
          ease: "none",
          scale: e,
          y: "-2rem"
        })
      }), _t(), (v, h) => {
        const a = Z,
          e = Mt,
          s = Vt,
          n = he,
          o = ze,
          p = cs,
          l = ws,
          c = bt;
        return m(u) ? (r(), d("main", $s, [k(a, {
          class: "light",
          light: ""
        }), k(e, {
          data: m(u).hero
        }, null, 8, ["data"]), k(s, {
          data: m(u).founders
        }, null, 8, ["data"]), k(n, {
          data: m(u).associates,
          "other-team": m(u).otherTeam
        }, null, 8, ["data", "other-team"]), t("div", xs, [t("div", Ts, [k(o, {
          data: m(u).chronology
        }, null, 8, ["data"])]), k(p, {
          data: m(u).sliderBlock
        }, null, 8, ["data"]), m(w) ? j("", !0) : (r(), d("div", As, [t("div", Ss, [t("div", Cs, [t("img", {
          src: m(u).chronology.list[m(u).chronology.list.length - 1].image.normal,
          role: "presentation",
          class: "inner-img"
        }, null, 8, js)])])]))]), k(l, {
          data: m(u).animBlock
        }, null, 8, ["data"]), h[0] || (h[0] = t("div", {
          class: "white-plash"
        }, null, -1)), k(c)])) : j("", !0)
      }
    }
  }),
  Os = B(Ms, [
    ["__scopeId", "data-v-12549a9a"]
  ]);
export {
  Os as
  default
};