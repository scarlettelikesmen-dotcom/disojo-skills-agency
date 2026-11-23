/* https://13322566869.com/_nuxt/index.7f0e4327.js */
import {
  d as S,
  x as Lt,
  o as c,
  b as p,
  y as B,
  i as s,
  e as a,
  t as x,
  p as P,
  m as j,
  z as Bt,
  v as w,
  A as V,
  h as n,
  B as zt,
  f as $,
  r as Vt,
  C as Nt,
  F as C,
  j as M,
  D as Ot,
  E as Xt,
  g as T,
  G as Yt,
  H,
  I as b,
  J as Rt,
  S as Wt,
  u as Ft,
  w as Pt,
  c as Ut,
  a as jt,
  K as Gt,
  n as W,
  l as Dt,
  _ as Jt,
  s as Kt
} from "./entry.3d26c39b.js";
import {
  _ as X,
  a as Et,
  b as Zt
} from "./is-video.b47a4014.js";
import {
  _ as Qt
} from "./EaseSlider.3a1163ee.js";
import {
  _ as te
} from "./Link.d8229fef.js";
import {
  _ as ee
} from "./Footer.a6c709f3.js";
import {
  s as oe
} from "./setHeaderMeta.d0135f55.js";
import {
  B as se,
  a as F
} from "./delay.7101e9ce.js";
const N = _ => (P("data-v-53f38290"), _ = _(), j(), _),
  ne = {
    class: "hero"
  },
  ie = {
    class: "hero__bg"
  },
  _e = {
    class: "hero__content"
  },
  re = {
    class: "hero__mob-fullscreen"
  },
  ce = {
    class: "hero__title"
  },
  ae = N(() => s("div", {
    class: "hero__title-word1"
  }, " FACE ", -1)),
  le = {
    class: "hero__title-descr"
  },
  de = {
    class: "hero__title-descr1"
  },
  pe = {
    class: "hero__title-descr2"
  },
  ue = {
    class: "hero__title-descr2-title"
  },
  me = ["innerHTML"],
  he = N(() => s("div", {
    class: "hero__title-word2"
  }, "TO", -1)),
  fe = N(() => s("div", {
    class: "hero__title-word3"
  }, "FACE", -1)),
  ve = ["innerHTML"],
  ge = {
    class: "hero__video"
  },
  ye = ["data-src"],
  we = N(() => s("div", {
    class: "hero__video-content"
  }, [s("span", {
    class: "hero__video-content-dot"
  }), s("span", {
    class: "hero__video-content-text"
  }, [s("span", null, "Live"), Bt(" Red Dot 2023 ")])], -1)),
  be = S({
    __name: "Hero",
    props: {
      leftside_description: {},
      first_title: {},
      second_title1: {},
      second_title2: {},
      video: {},
      quote_text: {}
    },
    setup(_) {
      Lt(() => {
        t()
      });

      function t() {
        const e = document.querySelector(".hero__video-item"),
          i = e == null ? void 0 : e.dataset.src;
        i && setTimeout(() => {
          e.src = i, e.style.opacity = ""
        }, 0)
      }
      return (e, i) => {
        const o = X,
          d = Qt;
        return c(), p("div", ne, [B(e.$slots, "header", {}, void 0, !0), s("div", ie, [a(o, {
          src: "/hero-bg.webp",
          alt: "hero image"
        }), a(o, {
          src: "/hero-without-bg.webp",
          alt: "hero image",
          class: "hero__without-bg"
        })]), s("div", _e, [s("div", re, [s("div", ce, [ae, s("div", le, [s("div", de, x(e.first_title), 1), s("div", pe, [s("div", ue, x(e.second_title1), 1), s("div", {
          innerHTML: e.second_title2
        }, null, 8, me)])]), he, fe]), s("div", {
          innerHTML: e.leftside_description,
          class: "hero__subtitle"
        }, null, 8, ve), s("div", ge, [s("video", {
          class: "hero__video-item",
          autoplay: "",
          loop: "",
          playsinline: "",
          muted: "",
          src: "",
          "data-src": e.video,
          style: {
            opacity: 0
          }
        }, null, 8, ye), we])]), a(d, {
          slider: e.quote_text
        }, null, 8, ["slider"])])])
      }
    }
  });
const Se = w(be, [
    ["__scopeId", "data-v-53f38290"]
  ]),
  $e = _ => (P("data-v-3c6bdaba"), _ = _(), j(), _),
  xe = {
    class: "about__subtitle-text"
  },
  ke = $e(() => s("span", {
    class: "about__subtitle-icon"
  }, [s("svg", {
    class: "about__subtitle-icon-svg",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [s("path", {
    d: "M8 11.333L3 6.33301H13L8 11.333Z"
  })])], -1)),
  qe = {
    class: "about__subtitle-count"
  },
  Ie = S({
    __name: "Subtitle",
    props: {
      text: {},
      count: {},
      isWhite: {
        type: Boolean
      }
    },
    setup(_) {
      const t = _,
        {
          text: e,
          count: i
        } = V(t);
      return (o, d) => (c(), p("div", {
        class: zt(["about__subtitle", {
          _white: o.isWhite
        }])
      }, [s("span", xe, x(n(e)), 1), ke, s("div", qe, "__" + x(n(i)) + ".", 1)], 2))
    }
  });
const O = w(Ie, [
    ["__scopeId", "data-v-3c6bdaba"]
  ]),
  Ce = ["innerHTML"],
  Me = S({
    __name: "Title",
    props: {
      text: {}
    },
    setup(_) {
      return (t, e) => (c(), p("div", {
        innerHTML: t.text,
        class: "fullscreen-section__title h2"
      }, null, 8, Ce))
    }
  });
const Y = w(Me, [
    ["__scopeId", "data-v-06db0f20"]
  ]),
  Ae = {
    class: "fullscreen-section__descr js-anim-fade-in"
  },
  Te = S({
    __name: "Descr",
    props: {
      text: {}
    },
    setup(_) {
      const t = _,
        {
          text: e
        } = V(t);
      return (i, o) => (c(), p("div", Ae, x(n(e)), 1))
    }
  });
const R = w(Te, [
    ["__scopeId", "data-v-3b2b3730"]
  ]),
  We = S({
    __name: "Content",
    props: {
      isBlend: {
        type: Boolean
      }
    },
    setup(_) {
      const t = _,
        {
          isBlend: e
        } = V(t);
      return (i, o) => (c(), p("div", {
        class: zt(["fullscreen-section__content", {
          _blend: n(e)
        }])
      }, [B(i.$slots, "default", {}, void 0, !0)], 2))
    }
  });
const U = w(We, [
  ["__scopeId", "data-v-a65bd627"]
]);
const Fe = {},
  Pe = {
    class: "fullscreen-section"
  };

function je(_, t) {
  return c(), p("div", Pe, [B(_.$slots, "default", {}, void 0, !0)])
}
const D = w(Fe, [
    ["render", je],
    ["__scopeId", "data-v-c55fc4c9"]
  ]),
  De = {
    class: "identity s_white"
  },
  Ee = S({
    __name: "Indentity",
    props: {
      title: {},
      descr: {}
    },
    setup(_) {
      return (t, e) => {
        const i = O,
          o = Y,
          d = R,
          r = U,
          m = D;
        return c(), p("div", De, [a(m, null, {
          default: $(() => [a(i, {
            text: "Who I Am",
            count: "001"
          }), a(r, null, {
            default: $(() => [a(o, {
              class: "identity__content-title js-anim-fade-in",
              text: t.title
            }, null, 8, ["text"]), a(d, {
              class: "identity__content-descr",
              text: t.descr
            }, null, 8, ["text"])]),
            _: 1
          })]),
          _: 1
        })])
      }
    }
  });
const Le = w(Ee, [
    ["__scopeId", "data-v-6679172f"]
  ]),
  ze = _ => (P("data-v-8b9a792a"), _ = _(), j(), _),
  He = {
    class: "support s_white"
  },
  Be = ze(() => s("div", {
    class: "support-line"
  }, null, -1)),
  Ve = {
    class: "support__item-gif"
  },
  Ne = ["data-src"],
  Oe = {
    class: "support__items"
  },
  Xe = ["onMouseenter"],
  Ye = {
    class: "support__item-subtitle"
  },
  Re = {
    class: "support__item-title h4"
  },
  Ue = {
    class: "support__item-gif-mob"
  },
  Ge = ["data-src"],
  Je = S({
    __name: "Support",
    props: {
      items: {}
    },
    setup(_) {
      const t = ["a", "b", "c", "d"];
      let e = 0;

      function i(l) {
        if (window.innerWidth > 1024) {
          const h = document.querySelector(".support__item-gif"),
            u = document.querySelector(".support__wrapper");
          T.set(h, {
            display: "grid"
          }), h && u && (e ? T.to(h, {
            x: l.clientX,
            y: l.offsetY,
            ease: "none",
            duration: .3,
            rotate: () => `${(l.clientX/u.clientWidth*2-1)*25}deg`
          }) : (e++, T.set(h, {
            x: l.clientX,
            y: l.offsetY,
            rotate: () => `${(l.clientX/u.clientWidth*2-1)*25}deg`
          })))
        }
      }
      const o = Vt(-1);

      function d(l) {
        if (window.innerWidth > 1024) {
          o.value = l;
          const h = document.querySelector(".support__item-gif");
          h && T.to(h, {
            autoAlpha: 1,
            duration: .1
          })
        }
      }

      function r() {
        if (window.innerWidth > 1024) {
          const l = document.querySelector(".support__item-gif");
          l && (e = 0, T.to(l, {
            autoAlpha: 0,
            duration: .1
          }))
        }
      }

      function m() {
        if (window.innerWidth > 1024) {
          const l = document.querySelector(".support__item-gif");
          l && (e = 0, T.to(l, {
            autoAlpha: 0,
            duration: .1,
            clearProps: "display"
          }))
        }
      }
      let f;
      return Lt(() => {
        const l = document.querySelector(".support");
        if (!l) return;
        const h = document.querySelectorAll(".support__item-gif > img"),
          u = document.querySelectorAll(".support__item-gif-mob > img");
        f = new IntersectionObserver((v, g) => {
          v.forEach(y => {
            y.isIntersecting && (window.innerWidth > 1024 ? h.forEach(k => {
              const q = k.dataset.src;
              q && (k.src = q)
            }) : u.forEach(k => {
              const q = k.dataset.src;
              q && (k.src = q)
            }), g.unobserve(l))
          })
        }, {
          rootMargin: "0px"
        }), f.observe(l)
      }), Nt(() => {
        f && f.disconnect()
      }), (l, h) => {
        const u = O;
        return c(), p("div", He, [Be, a(u, {
          text: "I’m here for you if",
          count: "002"
        }), s("div", {
          class: "support__wrapper _container",
          onMousemove: i,
          onMouseleave: m
        }, [s("div", Ve, [(c(!0), p(C, null, M(l.items, (v, g) => Ot((c(), p("img", {
          key: g,
          src: "",
          alt: "support gif",
          "data-src": v.photo
        }, null, 8, Ne)), [
          [Xt, n(o) === g]
        ])), 128))]), s("div", Oe, [(c(!0), p(C, null, M(l.items, (v, g) => (c(), p("div", {
          class: "support__item",
          onMouseenter: () => d(g),
          onMouseleave: r
        }, [s("div", Ye, x(t[g]), 1), s("div", Re, x(v.title), 1), s("div", Ue, [s("img", {
          src: "",
          alt: "support gif",
          "data-src": v.photo
        }, null, 8, Ge)])], 40, Xe))), 256))])], 32)])
      }
    }
  });
const Ke = w(Je, [
  ["__scopeId", "data-v-8b9a792a"]
]);
const Ze = {},
  Qe = {
    class: "sticky-element"
  };

function to(_, t) {
  return c(), p("div", Qe, [B(_.$slots, "default", {}, void 0, !0)])
}
const G = w(Ze, [
    ["render", to],
    ["__scopeId", "data-v-f8a9fd8d"]
  ]),
  eo = _ => (P("data-v-ed45da9f"), _ = _(), j(), _),
  oo = {
    class: "preview"
  },
  so = eo(() => s("div", {
    class: "preview__bg"
  }, null, -1)),
  no = S({
    __name: "Preview",
    props: {
      title: {},
      descr: {}
    },
    setup(_) {
      return (t, e) => {
        const i = Y,
          o = R,
          d = U,
          r = D,
          m = G;
        return c(), p("div", oo, [a(m, {
          class: "preview-sticky"
        }, {
          default: $(() => [a(r, {
            class: "preview__wrap"
          }, {
            default: $(() => [so, a(d, {
              "is-blend": !0
            }, {
              default: $(() => [a(i, {
                class: "preview__content-title",
                text: t.title
              }, null, 8, ["text"]), a(o, {
                class: "preview__content-descr",
                text: t.descr
              }, null, 8, ["text"])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })])
      }
    }
  });
const io = w(no, [
    ["__scopeId", "data-v-ed45da9f"]
  ]),
  _o = _ => {
    const t = new Date(_),
      e = t.getDate().toString().padStart(2, "0"),
      i = (t.getMonth() + 1).toString().padStart(2, "0"),
      o = t.getFullYear();
    return `${e}.${i}.${o}`
  },
  ro = {
    class: "works"
  },
  co = {
    class: "works__body"
  },
  ao = {
    class: "works__wrapper"
  },
  lo = {
    class: "work__imgs"
  },
  po = {
    class: "work__img"
  },
  uo = {
    class: "works__slider"
  },
  mo = {
    class: "works__slider-wrapper"
  },
  ho = {
    class: "works__slider-slide"
  },
  fo = {
    class: "works__swiper-names"
  },
  vo = {
    class: "works__swiper-name"
  },
  go = {
    class: "works__content"
  },
  yo = {
    class: "works__info"
  },
  wo = {
    class: "works__info-text"
  },
  bo = {
    class: "works__info-descr"
  },
  So = {
    class: "works__info-date"
  },
  $o = {
    class: "works__info-button"
  },
  xo = {
    class: "works__info-pagination"
  },
  ko = {
    class: "works__info-pagination-dot"
  },
  qo = S({
    __name: "Works",
    props: {
      projects: {},
      projects_photo: {}
    },
    setup(_) {
      const t = _,
        e = Yt(() => {
          if (t.projects) return t.projects.sort((i, o) => i.sort_order - o.sort_order)
        });
      return (i, o) => {
        const d = Zt,
          r = X,
          m = O,
          f = te,
          l = G;
        return c(), p("div", ro, [a(l, {
          class: "works-sticky"
        }, {
          default: $(() => {
            var h;
            return [s("div", co, [s("div", ao, [s("div", lo, [(c(!0), p(C, null, M(i.projects_photo, u => (c(), p("div", po, [("isVideo" in i ? i.isVideo : n(Et))(u.photo) ? (c(), H(d, {
              key: 0,
              class: "works__photo",
              src: u.photo
            }, null, 8, ["src"])) : (c(), H(r, {
              key: 1,
              class: "works__photo",
              src: u.photo,
              alt: "work photo"
            }, null, 8, ["src"]))]))), 256))]), a(m, {
              class: "works__subtitle",
              text: "Selected works",
              count: "003",
              "is-white": !0
            }), s("div", uo, [s("div", mo, [(c(!0), p(C, null, M(n(e), u => (c(), p("div", ho, [("isVideo" in i ? i.isVideo : n(Et))(u.main_photo) ? (c(), H(d, {
              key: 0,
              src: u.main_photo
            }, null, 8, ["src"])) : (c(), H(r, {
              key: 1,
              class: "works__slider-photo",
              src: u.main_photo,
              alt: "work photo"
            }, null, 8, ["src"]))]))), 256)), s("div", fo, [(c(!0), p(C, null, M(n(e), u => (c(), p("div", vo, x(u.name), 1))), 256))]), s("div", go, [s("div", yo, [(c(!0), p(C, null, M(n(e), u => (c(), p("div", wo, [s("div", bo, [(c(!0), p(C, null, M(u.content, v => (c(), p("div", null, x(v.title), 1))), 256))]), s("div", So, x(("formatDate" in i ? i.formatDate : n(_o))(u.date)), 1), s("div", $o, [a(f, {
              "is-nuxt-link": !0,
              text: "View Project",
              link: "/works/" + u.slug
            }, null, 8, ["link"])])]))), 256)), s("div", xo, [(c(!0), p(C, null, M((h = i.projects) == null ? void 0 : h.length, u => (c(), p("div", ko))), 256))])])])])])])])]
          }),
          _: 1
        })])
      }
    }
  });
const Io = w(qo, [
    ["__scopeId", "data-v-77633f8a"]
  ]),
  Co = {
    class: "needed"
  },
  Mo = S({
    __name: "Needed",
    props: {
      title: {},
      descr: {}
    },
    setup(_) {
      return (t, e) => {
        const i = O,
          o = Y,
          d = R,
          r = U,
          m = D;
        return c(), p("div", Co, [a(m, {
          class: "needed__wrap"
        }, {
          default: $(() => [a(i, {
            text: "Who need me",
            count: "004",
            "is-white": !0
          }), a(r, null, {
            default: $(() => [a(o, {
              class: "needed__content-title js-anim-fade-in",
              text: t.title
            }, null, 8, ["text"]), a(d, {
              class: "needed__content-descr",
              text: t.descr
            }, null, 8, ["text"])]),
            _: 1
          })]),
          _: 1
        })])
      }
    }
  });
const Ao = w(Mo, [
    ["__scopeId", "data-v-5693b731"]
  ]),
  Ht = _ => (P("data-v-128a8b57"), _ = _(), j(), _),
  To = {
    class: "prioritize"
  },
  Wo = {
    class: "prioritize__wrapper"
  },
  Fo = {
    class: "prioritize__items"
  },
  Po = {
    class: "prioritize__item h3"
  },
  jo = Ht(() => s("div", {
    class: "prioritize__item_last h3"
  }, " and moooooore ", -1)),
  Do = Ht(() => s("div", {
    class: "prioritize__circles"
  }, null, -1)),
  Eo = S({
    __name: "Prioritize",
    props: {
      items: {}
    },
    setup(_) {
      const t = _,
        {
          items: e
        } = V(t);
      return (i, o) => {
        const d = D,
          r = G;
        return c(), p("div", To, [a(r, null, {
          default: $(() => [a(d, {
            class: "prioritize__section"
          }, {
            default: $(() => [s("div", Wo, [s("div", Fo, [(c(!0), p(C, null, M(n(e), m => (c(), p("div", Po, x(m.text), 1))), 256)), jo])]), Do]),
            _: 1
          })]),
          _: 1
        })])
      }
    }
  });
const Lo = w(Eo, [
    ["__scopeId", "data-v-128a8b57"]
  ]),
  zo = {
    class: "finding"
  },
  Ho = {
    class: "finding__wrapper"
  },
  Bo = ["innerHTML"],
  Vo = {
    class: "finding__circles"
  },
  No = {
    class: "finding__circle"
  },
  Oo = ["src"],
  Xo = S({
    __name: "Finding",
    props: {
      text: {}
    },
    setup(_) {
      const t = ["/circles/1.svg", "/circles/2.svg", "/circles/3.svg", "/circles/4.svg", "/circles/5.svg", "/circles/6.svg", "/circles/7.svg"];
      return (e, i) => {
        const o = D;
        return c(), p("div", zo, [a(o, null, {
          default: $(() => [s("div", Ho, [s("div", {
            innerHTML: e.text,
            class: "finding__title h2 js-anim-fade-in"
          }, null, 8, Bo), s("div", Vo, [(c(), p(C, null, M(t, d => s("div", No, [s("img", {
            src: d,
            alt: "sliced circle"
          }, null, 8, Oo)])), 64))])])]),
          _: 1
        })])
      }
    }
  });
const Yo = w(Xo, [
  ["__scopeId", "data-v-05f9aa89"]
]);
class Ro extends se {
  constructor(t) {
    super(t), this.initHeroSection(), this.initWorksSection(), this.initPreviewSection(), this.initPrioritizeSection(), this.initFindingSection(), this.fadeInElementOnScroll(), this.footerAnimation()
  }
  async initHeroSection() {
    await F();
    const t = b.timeline();
    t.to(".hero__title-word1, .hero__title-word2, .hero__title-word3", {
      opacity: 1,
      stagger: .1
    }), t.from(".hero__title-word1, .hero__title-word2, .hero__title-word3", {
      yPercent: -50,
      stagger: .1
    }, 0), t.to(".header-fix, .header", {
      y: 0
    }, "<50%"), t.to(".hero__title-descr1, .hero__title-descr2", {
      opacity: 1,
      stagger: .1
    }, "<50%"), t.from(".hero__title-descr1, .hero__title-descr2", {
      yPercent: -50,
      stagger: .1
    }, "<"), t.to(".hero__subtitle", {
      opacity: 1
    }, "<50%"), t.from(".hero__subtitle", {
      yPercent: -50
    }, "<")
  }
  async initWorksSection() {
    var k, q, E, L;
    await F();
    const t = (k = this.parent) == null ? void 0 : k.querySelector(".works"),
      e = (q = this.parent) == null ? void 0 : q.querySelector(".works__subtitle"),
      i = (E = this.parent) == null ? void 0 : E.querySelector(".works__content"),
      o = (L = this.parent) == null ? void 0 : L.querySelector(".works__wrapper"),
      d = t == null ? void 0 : t.querySelector(".works__slider"),
      r = t == null ? void 0 : t.querySelectorAll(".works__slider-slide"),
      m = t == null ? void 0 : t.querySelectorAll(".works__slider-photo"),
      f = t == null ? void 0 : t.querySelectorAll(".works__info-pagination-dot"),
      l = t == null ? void 0 : t.querySelectorAll(".works__info-text"),
      h = t == null ? void 0 : t.querySelectorAll(".works__swiper-name"),
      u = t == null ? void 0 : t.querySelectorAll(".works__swiper-names"),
      v = t == null ? void 0 : t.querySelectorAll(".works__photo"),
      g = t == null ? void 0 : t.querySelectorAll(".work__img"),
      y = b.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: t,
          scrub: !0,
          start: "top top",
          end: "bottom bottom"
        }
      });
    o && v && m && d && g && window.innerWidth > 1024 && (y.from(o, {
      scale: .5,
      transformOrigin: "center center"
    }), y.from([d, g], {
      scaleY: .95
    }, 0), y.from([d, g], {
      scaleX: .97
    }, 0), y.from([v, m[0]], {
      scale: 1.5
    }, 0)), e && i && u && y.from([e, i, u], {
      opacity: 0,
      duration: .1
    }), r == null || r.forEach((J, z) => {
      const A = z,
        I = z + 1;
      r[I] && (y.to(r[A], {
        yPercent: -100
      }), y.set(r[I], {
        transformOrigin: "bottom bottom"
      }, "<"), y.to(r[I], {
        scaleY: 1
      }, "<"), f && l && h && (y.to(f[I], {
        backgroundColor: "white",
        duration: .25,
        onStart() {
          b.to([l[I], h[I]], {
            autoAlpha: 1
          }), b.to([l[A], h[A]], {
            autoAlpha: 0
          })
        },
        onReverseComplete() {
          b.to([l[I], h[I]], {
            autoAlpha: 0
          }), b.to([l[A], h[A]], {
            autoAlpha: 1
          })
        }
      }, "<50%"), y.to(f[A], {
        backgroundColor: "rgba(255,255,255,.2)",
        duration: .25
      }, "<")))
    })
  }
  async initPreviewSection() {
    var l;
    await F();
    const t = (l = this.parent) == null ? void 0 : l.querySelector(".preview"),
      e = t == null ? void 0 : t.querySelector(".preview__bg"),
      i = t == null ? void 0 : t.querySelector(".preview__content-title"),
      o = t == null ? void 0 : t.querySelector(".preview__content-descr"),
      d = b.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: t,
          scrub: !0,
          start: "top top",
          end: "bottom bottom"
        }
      });
    i && new Rt(i, {
      type: "words"
    }).words.forEach((v, g) => {
      g && d.from(v, {
        display: "none"
      })
    }), o && e && (d.from(o, {
      display: "none"
    }), d.to(e, {
      scale: 1.1
    }));
    const r = b.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: t,
        scrub: !0,
        start: "top top",
        end: "bottom bottom"
      }
    });
    e && r.from(e, {
      width: 0
    });
    const m = document.querySelector(".works__wrapper"),
      f = b.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: t,
          scrub: !0,
          start: "bottom bottom",
          end: "bottom top"
        }
      });
    m && window.innerWidth >= 1024 && f.from(m, {
      opacity: 0,
      yPercent: -50
    })
  }
  async initPrioritizeSection() {
    var d;
    await F();
    const t = (d = this.parent) == null ? void 0 : d.querySelector(".prioritize"),
      e = t == null ? void 0 : t.querySelectorAll(".prioritize__item"),
      i = t == null ? void 0 : t.querySelector(".prioritize__item_last"),
      o = b.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: t,
          scrub: !0,
          start: "top top",
          end: "bottom bottom"
        }
      });
    e && i && (o.from(e, {
      opacity: 0,
      filter: "blur(10px)",
      stagger: {
        each: .2,
        from: "random"
      }
    }), o.from(i, {
      opacity: 0,
      filter: "blur(10px)"
    }))
  }
  async initFindingSection() {
    var d;
    await F();
    const t = (d = this.parent) == null ? void 0 : d.querySelector(".finding"),
      e = t == null ? void 0 : t.querySelectorAll(".finding__circle"),
      i = b.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: t,
          scrub: !0,
          start: "top bottom",
          end: "bottom bottom"
        }
      }),
      o = [-37, 42, 111, -45, 67, -114, 50];
    e && e.forEach((r, m) => {
      i.from(r, {
        rotate: o[m]
      }, 0)
    })
  }
  fadeInElementOnScroll() {
    if (window.innerWidth >= 1024) return;
    document.querySelectorAll(".js-anim-fade-in").forEach(e => {
      Wt.create({
        trigger: e,
        start: "top bottom",
        end: "bottom top",
        animation: b.from(e, {
          opacity: 0,
          duration: .4
        }),
        toggleActions: "play reverse play reverse"
      })
    })
  }
  footerAnimation() {
    const t = document.querySelector(".footer__photo"),
      e = t == null ? void 0 : t.querySelector("img");
    t && e && Wt.create({
      trigger: t,
      start: "top bottom",
      end: "bottom top",
      scrub: !0,
      animation: b.to(e, {
        scale: 1.15,
        ease: "linear"
      })
    })
  }
}
const Uo = {
    class: "home-page"
  },
  Go = {
    class: "fixed-image"
  },
  Jo = {
    class: "home__wrap"
  },
  Ko = {
    class: "for-infinity-scroll"
  },
  Zo = S({
    __name: "index",
    async setup(_) {
      var f;
      let t, e;
      const i = Ft("main-page"),
        {
          data: o
        } = ([t, e] = Pt(() => Dt("main-page", () => i.data.value ? Promise.resolve(i.data.value) : $fetch("/api/main"))), t = await t, e(), t),
        d = Ft("parts"),
        {
          data: r
        } = ([t, e] = Pt(() => Dt("parts", () => d.data.value ? Promise.resolve(d.data.value) : $fetch("/api/parts"))), t = await t, e(), t);
      if (!o.value || !r.value) throw Ut({
        statusCode: 404,
        message: "Error! No data",
        fatal: !0
      });
      oe((f = r == null ? void 0 : r.value) == null ? void 0 : f.meta), jt(() => W.isPreloaderVisible, l => {
        l || m()
      }), jt(() => W.isTransitionFinish, l => {
        l && m()
      });
      const m = () => {
        W.scrollLenis && window.innerWidth > 1024 && (W.scrollLenis.options.infinite = !0), new Ro(".home-page")
      };
      return Gt(() => {
        W.scrollLenis && window.innerWidth > 1024 && (W.scrollLenis.options.infinite = !1)
      }), (l, h) => {
        var K, Z, Q, tt, et, ot, st, nt, it, _t, rt, ct, at, lt, dt, pt, ut, mt, ht, ft, vt, gt, yt, wt, bt, St, $t, xt, kt, qt;
        const u = Jt,
          v = X,
          g = Kt,
          y = Se,
          k = Le,
          q = Ke,
          E = io,
          L = Io,
          J = Ao,
          z = Lo,
          A = Yo,
          I = ee;
        return c(), p("div", Uo, [a(u, {
          phone: (K = n(r)) == null ? void 0 : K.contact
        }, null, 8, ["phone"]), s("div", Go, [a(v, {
          src: "/hero-bg.webp"
        })]), s("div", Jo, [a(y, {
          leftside_description: (Z = n(o)) == null ? void 0 : Z.leftside_description,
          first_title: (Q = n(o)) == null ? void 0 : Q.first_title,
          second_title1: (tt = n(o)) == null ? void 0 : tt.second_title1,
          second_title2: (et = n(o)) == null ? void 0 : et.second_title2,
          video: (ot = n(o)) == null ? void 0 : ot.main_video,
          quote_text: (st = n(o)) == null ? void 0 : st.quote_text
        }, {
          header: $(() => {
            var It, Ct, Mt, At, Tt;
            return [a(g, {
              header_title1: (It = n(r)) == null ? void 0 : It.header_title1,
              header_title2: (Ct = n(r)) == null ? void 0 : Ct.header_title2,
              city: ((Mt = n(r)) == null ? void 0 : Mt.header_time_name_city) ?? "",
              city_abbr: ((At = n(r)) == null ? void 0 : At.city_abbr) ?? "",
              timezone: ((Tt = n(r)) == null ? void 0 : Tt.timezone) ?? 0
            }, null, 8, ["header_title1", "header_title2", "city", "city_abbr", "timezone"])]
          }),
          _: 1
        }, 8, ["leftside_description", "first_title", "second_title1", "second_title2", "video", "quote_text"]), a(k, {
          title: (nt = n(o)) == null ? void 0 : nt.second_block_big_title,
          descr: (it = n(o)) == null ? void 0 : it.second_block_small_description
        }, null, 8, ["title", "descr"]), a(q, {
          items: (_t = n(o)) == null ? void 0 : _t.im_here_for_you
        }, null, 8, ["items"]), a(E, {
          title: (rt = n(o)) == null ? void 0 : rt.run_text,
          descr: (ct = n(o)) == null ? void 0 : ct.run_text_description
        }, null, 8, ["title", "descr"]), a(L, {
          projects: (at = n(o)) == null ? void 0 : at.projects,
          projects_photo: (lt = n(o)) == null ? void 0 : lt.projects_photo
        }, null, 8, ["projects", "projects_photo"]), a(J, {
          title: (dt = n(o)) == null ? void 0 : dt.title_after_projects,
          descr: (pt = n(o)) == null ? void 0 : pt.description_after_projects
        }, null, 8, ["title", "descr"]), a(z, {
          items: (ut = n(o)) == null ? void 0 : ut.tags
        }, null, 8, ["items"]), a(A, {
          text: (mt = n(o)) == null ? void 0 : mt.final_block
        }, null, 8, ["text"]), a(I, {
          phone: (ht = n(r)) == null ? void 0 : ht.contact,
          email: (ft = n(r)) == null ? void 0 : ft.mail_to,
          photo: (vt = n(r)) == null ? void 0 : vt.last_photo,
          text: (gt = n(r)) == null ? void 0 : gt.last_description
        }, null, 8, ["phone", "email", "photo", "text"]), s("div", Ko, [a(y, {
          class: "hero-for-infinity-scroll",
          header_title1: (yt = n(r)) == null ? void 0 : yt.header_title1,
          header_title2: (wt = n(r)) == null ? void 0 : wt.header_title2,
          leftside_description: (bt = n(o)) == null ? void 0 : bt.leftside_description,
          first_title: (St = n(o)) == null ? void 0 : St.first_title,
          second_title1: ($t = n(o)) == null ? void 0 : $t.second_title1,
          second_title2: (xt = n(o)) == null ? void 0 : xt.second_title2,
          video: (kt = n(o)) == null ? void 0 : kt.main_video,
          quote_text: (qt = n(o)) == null ? void 0 : qt.quote_text
        }, null, 8, ["header_title1", "header_title2", "leftside_description", "first_title", "second_title1", "second_title2", "video", "quote_text"])])])])
      }
    }
  });
const _s = w(Zo, [
  ["__scopeId", "data-v-dd409376"]
]);
export {
  _s as
  default
};