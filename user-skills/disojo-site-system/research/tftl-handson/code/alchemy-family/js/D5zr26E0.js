/* https://alchemy.family/_nuxt/D5zr26E0.js */
import {
  a as F
} from "./B7Lms0Y0.js";
import {
  d as f,
  r as L,
  a1 as D,
  o as i,
  c as l,
  a as t,
  t as p,
  k as b,
  g as U,
  p as w,
  l as y,
  _ as v,
  y as I,
  z as C,
  E as k,
  j as g,
  F as H,
  i as B,
  B as A,
  C as x,
  u as O,
  m as N,
  n as K,
  s as Q,
  e as R,
  J as X,
  S as q,
  O as Z,
  P as tt,
  G as st,
  h as et,
  H as ot,
  a6 as nt
} from "./CWeo--9S.js";
import {
  S as G
} from "./BsTfMyAe.js";
import {
  N as at
} from "./BKG8DJAG.js";
import {
  _ as it
} from "./B1FdqAuq.js";
import {
  g as V,
  _ as ct
} from "./D3rN1Plm.js";
import {
  u as lt
} from "./49XQLREk.js";
import {
  b as rt,
  a as dt
} from "./DJb2uxw5.js";
import {
  P as _t
} from "./CtlLC_md.js";
const pt = s => (w("data-v-56f6790e"), s = s(), y(), s),
  ut = {
    class: "top"
  },
  mt = {
    class: "p2"
  },
  ht = pt(() => t("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  }, [t("rect", {
    x: "14.5",
    y: "8",
    width: "1",
    height: "13",
    transform: "rotate(90 14.5 8)",
    fill: "#E8E8E8"
  }), t("rect", {
    x: "7.5",
    y: "2",
    width: "1",
    height: "13",
    fill: "#E8E8E8",
    class: "minus"
  })], -1)),
  vt = [ht],
  gt = {
    class: "description-wrap"
  },
  ft = ["innerHTML"],
  $t = {
    key: 1,
    class: "description p2"
  },
  bt = f({
    __name: "Default",
    props: {
      isOpen: {
        type: Boolean
      },
      innerHtmlDescription: {
        type: Boolean
      },
      data: {}
    },
    setup(s) {
      const o = s,
        n = L(null);

      function a(e) {
        n.value && U.to(n.value.querySelector(".description-wrap"), {
          height: e ? "auto" : 0,
          duration: .3,
          ease: "power2.inOut",
          willChange: "height"
        })
      }
      return D(() => o.isOpen, e => a(e)), (e, u) => (i(), l("div", {
        ref_key: "accordionRef",
        ref: n,
        class: "accordion"
      }, [t("div", ut, [t("p", mt, p(e.data.title), 1), t("div", {
        class: b(["icon", {
          unfolded: e.isOpen
        }])
      }, vt, 2)]), t("div", gt, [e.innerHtmlDescription ? (i(), l("div", {
        key: 0,
        class: b(["description p2", {
          full: e.innerHtmlDescription
        }]),
        innerHTML: e.data.description
      }, null, 10, ft)) : (i(), l("div", $t, p(e.data.description), 1))])], 512))
    }
  }),
  wt = v(bt, [
    ["__scopeId", "data-v-56f6790e"]
  ]);

function yt() {
  const s = I("scroll-locked", () => !1),
    o = I("lenis");

  function n(a) {
    s.value = a, document.body.style.overflow = a ? "hidden" : "", document.body.style.touchAction = a ? "none" : "", a ? o.value.stop() : o.value.start()
  }
  return {
    lockScroll: n,
    isLocked: s
  }
}
const Y = s => (w("data-v-6fdf9211"), s = s(), y(), s),
  kt = {
    key: 0,
    class: "modal-content",
    "data-lenis-prevent": ""
  },
  St = Y(() => t("span", {
    class: "text"
  }, "close", -1)),
  Mt = {
    class: "cross-icon"
  },
  Ct = {
    class: "image-wrap"
  },
  Tt = ["src", "alt"],
  It = {
    "data-lenis-prevent": "",
    class: "content"
  },
  Lt = {
    class: "h4"
  },
  Et = {
    class: "title"
  },
  Ht = Y(() => t("br", null, null, -1)),
  Bt = {
    class: "list-info"
  },
  At = f({
    __name: "ProgramModal",
    props: {
      isActive: {
        type: Boolean
      },
      program: {}
    },
    setup(s) {
      const o = s,
        {
          lockScroll: n
        } = yt(),
        a = I("program-modal"),
        e = L(-1);

      function u(c) {
        if (c === e.value) {
          e.value = -1;
          return
        }
        e.value = c
      }
      return D(() => o.isActive, c => {
        n(!!c)
      }), (c, m) => {
        const S = F,
          _ = wt;
        return i(), l("div", {
          class: b(["modal", {
            active: c.isActive
          }])
        }, [c.program ? (i(), l("div", kt, [t("button", {
          class: "btn-close",
          onClick: m[0] || (m[0] = k(d => g(a).isActive = !1, ["stop"]))
        }, [St, t("div", Mt, [C(S, {
          class: "inner-svg"
        })])]), t("div", Ct, [t("img", {
          src: c.program.image.normal,
          alt: c.program.name,
          class: "inner-img"
        }, null, 8, Tt)]), t("div", It, [t("p", Lt, [t("span", Et, p(c.program.title), 1), Ht, t("span", null, p(c.program.name), 1)]), t("div", Bt, [(i(!0), l(H, null, B(c.program.accordions, (d, r) => (i(), A(_, {
          key: d.title + r,
          data: d,
          isOpen: g(e) === r,
          class: "wrap-accordion",
          onClick: k($ => u(r), ["stop"])
        }, null, 8, ["data", "isOpen", "onClick"]))), 128))])])])) : x("", !0)], 2)
      }
    }
  }),
  Ye = v(At, [
    ["__scopeId", "data-v-6fdf9211"]
  ]),
  Pt = {},
  xt = {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  Dt = t("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "17.5",
    transform: "rotate(-180 17.5 17.5)",
    fill: "#E8E8E8"
  }, null, -1),
  Ot = t("path", {
    d: "M15.9121 9.95117C15.7238 12.3988 14.1046 17.2941 9.13403 17.2941",
    stroke: "#262626",
    "stroke-linecap": "round"
  }, null, -1),
  Nt = t("path", {
    d: "M15.9121 24.6367C15.7238 22.1891 14.1046 17.2938 9.13403 17.2938",
    stroke: "#262626",
    "stroke-linecap": "round"
  }, null, -1),
  Rt = t("path", {
    d: "M9.69778 17.2949L26.0781 17.2949",
    stroke: "#262626",
    "stroke-linecap": "round"
  }, null, -1),
  zt = [Dt, Ot, Nt, Rt];

function Vt(s, o) {
  return i(), l("svg", xt, zt)
}
const Ft = v(Pt, [
    ["render", Vt]
  ]),
  Ut = s => (w("data-v-71810291"), s = s(), y(), s),
  qt = {
    class: "modal-content"
  },
  Gt = Ut(() => t("span", null, "close", -1)),
  Yt = {
    class: "wrap-icon"
  },
  jt = {
    class: "swiper-wrapper"
  },
  Jt = ["src"],
  Wt = {
    class: "btn-prev"
  },
  Kt = {
    class: "btn-next"
  },
  Qt = {
    class: "content-right"
  },
  Xt = {
    class: "title h4"
  },
  Zt = ["innerHTML"],
  ts = f({
    __name: "PersonModal",
    props: {
      isActive: {
        type: Boolean
      },
      data: {}
    },
    emits: ["close-modal"],
    setup(s, {
      emit: o
    }) {
      const n = o,
        a = s,
        e = L(null),
        {
          isMobile: u
        } = O(),
        c = L(0);

      function m() {
        e.value = new G(".person-details .slider-person.swiper", {
          slidesPerView: 1,
          spaceBetween: 0,
          modules: [at],
          navigation: {
            nextEl: ".person-details .btn-next",
            prevEl: ".person-details .btn-prev"
          },
          grabCursor: !0
        }), K(() => {
          if (u.value) {
            const _ = document.querySelector(".person-details .content-right p.title");
            c.value = _.getBoundingClientRect().top + _.getBoundingClientRect().height + 32
          }
        })
      }

      function S() {
        n("close-modal")
      }
      return D(() => a.isActive, _ => {
        var d;
        _ ? m() : (d = e.value) == null || d.destroy()
      }), (_, d) => {
        var E, T, M;
        const r = F,
          $ = Ft;
        return i(), l("div", {
          class: b(["modal person-details", {
            active: _.isActive
          }]),
          "data-lenis-prevent": ""
        }, [t("div", qt, [t("button", {
          class: "btn-close",
          onClick: k(S, ["stop"])
        }, [Gt, t("div", Yt, [C(r)])]), t("div", {
          class: "slider-person swiper",
          style: N({
            "--slider-mob-top": g(c)
          })
        }, [t("div", jt, [(i(!0), l(H, null, B((E = _.data) == null ? void 0 : E.slides, P => (i(), l("div", {
          key: P.id,
          class: "swiper-slide"
        }, [t("img", {
          src: P.normal,
          alt: "slide image",
          class: "inner-img"
        }, null, 8, Jt)]))), 128))]), t("button", Wt, [C($, {
          class: "inner-svg"
        })]), t("button", Kt, [C($, {
          class: "inner-svg"
        })])], 4), t("div", Qt, [t("p", Xt, p((T = _.data) == null ? void 0 : T.title), 1), t("div", {
          class: "description p2",
          innerHTML: (M = _.data) == null ? void 0 : M.description
        }, null, 8, Zt)])])], 2)
      }
    }
  }),
  je = v(ts, [
    ["__scopeId", "data-v-71810291"]
  ]),
  h = s => (w("data-v-8ef2fde9"), s = s(), y(), s),
  ss = {
    class: "hero"
  },
  es = ["src"],
  os = h(() => t("div", {
    class: "overlay"
  }, null, -1)),
  ns = {
    class: "first-screen"
  },
  as = {
    class: "arrow-icon"
  },
  is = h(() => t("p", {
    class: "text"
  }, "all events", -1)),
  cs = {
    class: "nav"
  },
  ls = h(() => t("span", {
    class: "active-point"
  }, ">", -1)),
  rs = h(() => t("span", null, "event details", -1)),
  ds = [ls, rs],
  _s = h(() => t("span", {
    class: "active-point"
  }, ">", -1)),
  ps = h(() => t("span", null, "stages", -1)),
  us = [_s, ps],
  ms = h(() => t("span", {
    class: "active-point"
  }, ">", -1)),
  hs = h(() => t("span", null, "ODYSSEY AGENDA", -1)),
  vs = [ms, hs],
  gs = h(() => t("span", {
    class: "active-point"
  }, ">", -1)),
  fs = h(() => t("span", null, "Synergy", -1)),
  $s = [gs, fs],
  bs = {
    class: "days-left"
  },
  ws = {
    class: "text"
  },
  ys = {
    class: "wrap-icon"
  },
  ks = {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    class: "inner-svg",
    xmlns: "http://www.w3.org/2000/svg"
  },
  Ss = h(() => t("circle", {
    opacity: "0.2",
    cx: "6",
    cy: "6",
    r: "5",
    stroke: "#E8E8E8"
  }, null, -1)),
  Ms = ["stroke-dasharray"],
  Cs = ["innerHTML"],
  Ts = ["disabled"],
  Is = ["innerHTML"],
  Ls = h(() => t("div", {
    class: "bg__cloud cloud--left anim-left-right"
  }, [t("div", {
    class: "cloud anim-top-bottom anim-delay-8"
  })], -1)),
  Es = h(() => t("div", {
    class: "bg__cloud-left cloud--left anim-left-right anim-delay-2"
  }, [t("div", {
    class: "cloud anim-top-bottom anim-delay-8"
  })], -1)),
  Hs = f({
    __name: "Hero",
    props: {
      data: {},
      noContributeButton: {
        type: Boolean,
        default: !1
      }
    },
    setup(s) {
      const o = I("event-already-bought"),
        n = I("state-modals"),
        a = s,
        e = L(0),
        u = I("lenis"),
        c = Q(() => {
          const d = V(a.data.startDate),
            r = Math.floor((new Date(a.data.startDate).getTime() - new Date(a.data.createdDate).getTime()) / (1e3 * 60 * 60 * 24));
          return (100 - d / r * 100) / 100 * 31.41592653589793
        });

      function m() {
        o.value || (n.value.tariff = !0)
      }

      function S() {
        document.querySelectorAll(".section-anchor").forEach(r => {
          const $ = r.getAttribute("data-anchor-id");
          q.create({
            trigger: r,
            start: "top center",
            end: "bottom center",
            onEnter() {
              e.value = Number($)
            },
            onLeaveBack() {
              e.value = Number($) - 1
            }
          })
        })
      }

      function _(d) {
        u.value.scrollTo(`.section-anchor[data-anchor-id="${d}"]`, {
          duration: 1.4
        })
      }
      return R(() => {
        S()
      }), (d, r) => {
        const $ = it,
          E = Z,
          T = tt;
        return i(), l("section", ss, [t("img", {
          src: d.data.image.normal,
          alt: "event background",
          class: "inner-img"
        }, null, 8, es), os, t("div", ns, [a.noContributeButton ? x("", !0) : (i(), A(E, {
          key: 0,
          to: "/events",
          class: "back-all-events"
        }, {
          default: X(() => [t("div", as, [C($)]), is]),
          _: 1
        })), t("nav", cs, [t("button", {
          class: b(["nav-item text", {
            active: g(e) === 1
          }]),
          onClick: r[0] || (r[0] = k(M => _(1), ["stop"]))
        }, ds, 2), t("button", {
          class: b(["nav-item text", {
            active: g(e) === 2
          }]),
          onClick: r[1] || (r[1] = k(M => _(2), ["stop"]))
        }, us, 2), t("button", {
          class: b(["nav-item text", {
            active: g(e) === 3
          }]),
          onClick: r[2] || (r[2] = k(M => _(3), ["stop"]))
        }, vs, 2), t("button", {
          class: b(["nav-item text", {
            active: g(e) === 4
          }]),
          onClick: r[3] || (r[3] = k(M => _(4), ["stop"]))
        }, $s, 2)]), t("div", bs, [t("p", ws, p(g(V)(d.data.startDate)) + " days left", 1), t("div", ys, [(i(), l("svg", ks, [Ss, t("circle", {
          class: "circle-progress",
          opacity: "1",
          cx: "6",
          cy: "6",
          r: "5",
          stroke: "#E8E8E8",
          "stroke-dasharray": `${g(c)} 31.41592653589793`
        }, null, 8, Ms)]))])]), t("div", {
          class: "title h4",
          innerHTML: d.data.title
        }, null, 8, Cs), a.noContributeButton ? x("", !0) : (i(), l("button", {
          key: 1,
          class: "btn-pay",
          disabled: g(o),
          onClick: k(m, ["stop"])
        }, [C(T, {
          text: g(o) ? "Contribution Made" : "Contribute"
        }, null, 8, ["text"])], 8, Ts))]), t("div", {
          class: "description P1",
          innerHTML: d.data.description
        }, null, 8, Is), Ls, Es])
      }
    }
  }),
  Je = v(Hs, [
    ["__scopeId", "data-v-8ef2fde9"]
  ]),
  z = s => (w("data-v-2e51f18e"), s = s(), y(), s),
  Bs = {
    class: "about"
  },
  As = {
    class: "about-content"
  },
  Ps = ["innerHTML"],
  xs = {
    class: "bottom"
  },
  Ds = {
    class: "event-icon"
  },
  Os = ["innerHTML"],
  Ns = z(() => t("div", {
    class: "sign-wrap"
  }, null, -1)),
  Rs = z(() => t("div", {
    class: "bg__cloud cloud--left anim-left-right"
  }, [t("div", {
    class: "cloud anim-top-bottom anim-delay-8"
  })], -1)),
  zs = z(() => t("div", {
    class: "bg__cloud-left cloud--left anim-left-right anim-delay-2"
  }, [t("div", {
    class: "cloud anim-top-bottom anim-delay-8"
  })], -1)),
  Vs = f({
    __name: "About",
    props: {
      data: {}
    },
    setup(s) {
      return (o, n) => {
        const a = ct;
        return i(), l("section", Bs, [t("div", As, [t("h2", {
          class: "title h4",
          innerHTML: o.data.title
        }, null, 8, Ps), t("div", xs, [t("div", Ds, [C(a)]), t("div", {
          class: "description P1",
          innerHTML: o.data.description
        }, null, 8, Os)]), Ns]), Rs, zs])
      }
    }
  }),
  We = v(Vs, [
    ["__scopeId", "data-v-2e51f18e"]
  ]),
  Fs = st("/images/decor/card-decor@2x.webp"),
  Us = s => (w("data-v-740df936"), s = s(), y(), s),
  qs = {
    class: "card"
  },
  Gs = {
    class: "card__body"
  },
  Ys = {
    class: "card__content"
  },
  js = {
    class: "card__title p1"
  },
  Js = ["innerHTML"],
  Ws = ["innerHTML"],
  Ks = Us(() => t("img", {
    src: Fs,
    class: "card__decor",
    role: "presentation"
  }, null, -1)),
  Qs = f({
    __name: "StageCard",
    props: {
      data: {},
      idx: {}
    },
    setup(s) {
      const o = ["/images/decor/card-picture-lion@2x.webp", "/images/decor/card-picture-bird@2x.webp", "/images/decor/card-picture-dragon@2x.webp", "/images/decor/card-picture-pelican@2x.webp"];
      return (n, a) => (i(), l("div", qs, [t("div", Gs, [t("div", Ys, [t("div", null, [t("p", js, "00" + p(n.idx + 1) + ".", 1), t("p", {
        class: "card__title p1",
        innerHTML: n.data.name
      }, null, 8, Js)]), t("p", {
        class: "card__description p2",
        innerHTML: n.data.description
      }, null, 8, Ws)])]), Ks, t("div", {
        class: "cards__picture",
        style: N({
          backgroundImage: `url(${o[n.idx]})`
        })
      }, null, 4)]))
    }
  }),
  Xs = v(Qs, [
    ["__scopeId", "data-v-740df936"]
  ]),
  j = s => (w("data-v-dd9398db"), s = s(), y(), s),
  Zs = {
    class: "stage"
  },
  te = {
    class: "sticky"
  },
  se = ["innerHTML"],
  ee = {
    class: "sub-title grid-fold"
  },
  oe = j(() => t("div", {
    class: "bg__cloud cloud--left"
  }, [t("div", {
    class: "cloud anim-top-bottom anim-delay-8"
  })], -1)),
  ne = j(() => t("div", {
    class: "bg__cloud-right cloud--left"
  }, [t("div", {
    class: "cloud anim-top-bottom anim-delay-3"
  })], -1)),
  ae = f({
    __name: "Stage",
    props: {
      data: {}
    },
    setup(s) {
      const {
        isMobile: o
      } = O();

      function n() {
        U.from("section.stage .stage-card", {
          scrollTrigger: {
            trigger: "section.stage .plash",
            start: "top bottom",
            end: "bottom bottom",
            scrub: !0
          },
          y: "55vh",
          rotate: 0,
          stagger: .4,
          ease: "none"
        })
      }
      return R(() => {
        o.value || n()
      }), (a, e) => {
        const u = Xs;
        return i(), l("section", Zs, [t("div", te, [t("div", {
          innerHTML: a.data.title,
          class: "title h2 grid-fold"
        }, null, 8, se), (i(!0), l(H, null, B(a.data.list, (c, m) => (i(), A(u, {
          key: c.id,
          data: c,
          class: b(["stage-card grid-fold", [`n${m+1}`]]),
          idx: m
        }, null, 8, ["data", "idx", "class"]))), 128)), t("p", ee, p(a.data.description), 1)]), t("div", {
          class: "plash",
          style: N({
            height: `${50*a.data.list.length}vh`
          })
        }, null, 4), oe, ne])
      }
    }
  }),
  Ke = v(ae, [
    ["__scopeId", "data-v-dd9398db"]
  ]),
  J = s => (w("data-v-a1b574cc"), s = s(), y(), s),
  ie = J(() => t("div", {
    class: "border-decor"
  }, null, -1)),
  ce = {
    class: "bg-image"
  },
  le = ["src"],
  re = {
    class: "vertical-block"
  },
  de = {
    class: "h4"
  },
  _e = {
    class: "h4"
  },
  pe = {
    class: "mob-day h4"
  },
  ue = {
    class: "mob-name h4"
  },
  me = J(() => t("div", {
    class: "btn-details common-link reverse"
  }, "view details", -1)),
  he = f({
    __name: "ProgramPreview",
    props: {
      data: {}
    },
    setup(s) {
      const o = s,
        n = I("program-modal");

      function a() {
        n.value.program = o.data, n.value.isActive = !0
      }
      return (e, u) => (i(), l("article", {
        class: "program-preview common-link-group",
        onClick: a
      }, [ie, t("div", ce, [t("img", {
        src: e.data.image.normal,
        alt: "bg program image",
        class: "inner-img"
      }, null, 8, le)]), t("div", re, [t("p", de, p(e.data.title), 1), t("p", _e, p(e.data.name), 1)]), t("p", pe, p(e.data.title), 1), t("p", ue, p(e.data.name), 1), me]))
    }
  }),
  ve = v(he, [
    ["__scopeId", "data-v-a1b574cc"]
  ]),
  ge = {
    class: "event-program"
  },
  fe = ["innerHTML"],
  $e = {
    class: "wrap-programs"
  },
  be = {
    class: "list"
  },
  we = f({
    __name: "Program",
    props: {
      data: {},
      title: {}
    },
    setup(s) {
      return (o, n) => {
        const a = ve;
        return i(), l("section", ge, [t("div", {
          innerHTML: o.title,
          class: "title h3"
        }, null, 8, fe), t("div", $e, [t("div", be, [(i(!0), l(H, null, B(o.data, e => (i(), l("div", {
          key: e.id,
          class: "grid-item"
        }, [C(a, {
          data: e
        }, null, 8, ["data"])]))), 128))])])])
      }
    }
  }),
  Qe = v(we, [
    ["__scopeId", "data-v-0b9e4a38"]
  ]),
  W = s => (w("data-v-5b40d465"), s = s(), y(), s),
  ye = {
    class: "person swiper-slide"
  },
  ke = {
    class: "person__picture"
  },
  Se = ["alt", "src"],
  Me = ["src"],
  Ce = {
    class: "p2 person__name"
  },
  Te = {
    class: "a1 person__position"
  },
  Ie = W(() => t("div", {
    class: "person__bat person__bat--1"
  }, [t("div", {
    class: "bat"
  })], -1)),
  Le = W(() => t("div", {
    class: "person__bat person__bat--2"
  }, [t("div", {
    class: "bat"
  })], -1)),
  Ee = f({
    __name: "PersonsCard",
    props: {
      id: {},
      name: {},
      position: {},
      image: {},
      modal: {}
    },
    setup(s) {
      return (o, n) => (i(), l("div", ye, [t("picture", ke, [t("img", {
        alt: o.name,
        src: o.image.medium
      }, null, 8, Se), t("source", {
        media: "(min-width: 1024px)",
        src: o.image.normal
      }, null, 8, Me)]), t("p", Ce, p(o.name), 1), t("p", Te, p(o.position), 1), Ie, Le]))
    }
  }),
  He = v(Ee, [
    ["__scopeId", "data-v-5b40d465"]
  ]),
  Be = s => (w("data-v-d65435fa"), s = s(), y(), s),
  Ae = {
    class: "persons"
  },
  Pe = ["innerHTML"],
  xe = Be(() => t("div", {
    class: "swiper-pagination"
  }, null, -1)),
  De = f({
    __name: "Persons",
    props: {
      data: {},
      eventPage: {
        type: Boolean
      }
    },
    emits: ["open-person-modal"],
    setup(s, {
      emit: o
    }) {
      const n = s,
        a = o,
        e = L(),
        u = L(),
        {
          isMobile: c,
          pxToRem: m
        } = O();
      R(() => {
        S(), window.addEventListener("resize", _)
      }), et(() => {
        d(), window.removeEventListener("resize", _)
      });

      function S() {
        d(), !(!e.value || !c.value) && (u.value = new G(e.value, {
          slidesPerView: "auto",
          spaceBetween: m(16),
          slidesOffsetAfter: m(16),
          slidesOffsetBefore: n.data.list.length > 1 ? m(16) : 0,
          pagination: {
            el: ".swiper-pagination"
          },
          modules: [_t],
          centeredSlides: !0,
          breakpoints: {
            1024: {
              centeredSlides: !1
            }
          }
        }))
      }
      lt(() => {
        rt(".persons__title"), c.value || q.create({
          trigger: ".persons__gallery",
          once: !0,
          animation: dt(".person", {
            stagger: .1
          })
        })
      });

      function _() {
        c.value ? S() : d()
      }

      function d() {
        u.value && u.value.destroy()
      }
      return (r, $) => {
        const E = He;
        return i(), l("section", Ae, [t("div", {
          innerHTML: r.data.title,
          class: "h3 persons__title"
        }, null, 8, Pe), t("div", {
          ref_key: "sliderEl",
          ref: e,
          class: "swiper persons__gallery-wrapper"
        }, [t("div", {
          class: b(["persons__gallery swiper-wrapper", {
            "event-page": n == null ? void 0 : n.eventPage
          }])
        }, [ot(r.$slots, "default", {}, () => [(i(!0), l(H, null, B(r.data.list, (T, M) => (i(), A(E, nt({
          key: M,
          ref_for: !0
        }, T, {
          onClick: k(P => a("open-person-modal", T.id), ["stop"])
        }), null, 16, ["onClick"]))), 128))], !0)], 2)], 512), xe])
      }
    }
  }),
  Xe = v(De, [
    ["__scopeId", "data-v-d65435fa"]
  ]);
export {
  Je as _, We as a, Ke as b, Qe as c, Xe as d, Ye as e, je as f, Ft as g, wt as h, yt as u
};