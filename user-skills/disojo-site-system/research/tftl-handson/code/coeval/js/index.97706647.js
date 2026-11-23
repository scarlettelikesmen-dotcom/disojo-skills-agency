/* https://coevalstudio.com/_nuxt/index.97706647.js */
import {
  H as ye,
  T as Te
} from "./components.f929feb2.js";
import {
  _ as Se,
  a as we
} from "./TeamBlock.22391266.js";
import {
  _ as je
} from "./Popup.cd0a9f4e.js";
import {
  _ as k,
  o as d,
  R as et,
  E as B,
  a as t,
  t as r,
  G as w,
  J as at,
  z as F,
  A as D,
  c as h,
  l as p,
  N as Pe,
  f as O,
  O as Ie,
  F as H,
  r as A,
  L as nt,
  u as m,
  T as ue,
  b as lt,
  g as u,
  M as G,
  K as q,
  S as tt,
  C as me,
  H as $,
  I as ke,
  w as it,
  W as Le,
  e as le,
  d as ot,
  a5 as Ce,
  a6 as He,
  $ as ce,
  j as _e,
  Y as X,
  Z as Me,
  a7 as Ne
} from "./entry.7e3c7585.js";
import {
  _ as Ee,
  a as Ae,
  b as Oe
} from "./Contact.ad842028.js";
import {
  _ as ct
} from "./CommonButton.058c734e.js";
import {
  S as re,
  E as de
} from "./effect-creative.2b3e219c.js";
import {
  _ as Be
} from "./Footer.15b17ac6.js";
import "./client-only.eecabb16.js";
import "./Text.19fa6ef9.js";
const _t = e => (F("data-v-979b3c37"), e = e(), D(), e),
  ze = _t(() => t("div", {
    class: "project__overlay"
  }, null, -1)),
  We = ["src", "alt"],
  qe = {
    class: "project__info"
  },
  Fe = {
    class: "text-h5 project__title"
  },
  De = {
    class: "text-t3 project__description"
  },
  Ve = _t(() => t("span", {
    class: "work__info-split"
  }, "/", -1)),
  Re = _t(() => t("div", {
    class: "text-s1 project__link link"
  }, "Explore project", -1)),
  Ue = {
    name: "HomeProject"
  },
  Ge = Object.assign(Ue, {
    props: {
      project: Object
    },
    setup(e) {
      return (a, l) => {
        const c = at;
        return d(), et(c, {
          to: `/project/${e.project.slug}`,
          class: "project",
          "data-cursor-hover": "Explore Project"
        }, {
          default: B(() => {
            var o, x, s;
            return [ze, t("img", {
              class: "project__image",
              src: e.project.url,
              alt: e.project.alt
            }, null, 8, We), t("div", qe, [t("div", Fe, r(e.project.title), 1), t("div", De, [w(r((o = e.project.brief) == null ? void 0 : o.Location) + " ", 1), Ve, w(" " + r((s = (x = e.project) == null ? void 0 : x.brief) == null ? void 0 : s.Size), 1)])]), Re]
          }),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  Je = k(Ge, [
    ["__scopeId", "data-v-979b3c37"]
  ]);
const Ke = {
    class: "intro section"
  },
  Ye = {
    class: "intro__top"
  },
  Ze = {
    class: "intro__line intro__line-1 text-h1"
  },
  Qe = {
    class: "intro__line intro__line-2 text-h1 --desktop"
  },
  Xe = ["innerHTML"],
  ts = {
    class: "intro__top-split"
  },
  es = {
    class: "intro__line-first text-h1 --mobile intro__line"
  },
  ss = {
    class: "intro__top-row"
  },
  is = {
    class: "intro__line-last text-h1 --mobile intro__line"
  },
  os = ["innerHTML"],
  ns = {
    class: "intro__top"
  },
  as = {
    class: "intro__line intro__line-1 text-h1"
  },
  ls = {
    class: "intro__line intro__line-2 text-h1 --desktop"
  },
  cs = ["innerHTML"],
  _s = {
    class: "intro__top-split"
  },
  rs = {
    class: "intro__line-first text-h1 --mobile intro__line"
  },
  ds = {
    class: "intro__top-row"
  },
  us = {
    class: "intro__line-last text-h1 --mobile intro__line"
  },
  ms = ["innerHTML"],
  ps = {
    class: "intro__bottom"
  },
  hs = {
    class: "intro__bottom-left"
  },
  vs = {
    class: "intro__bottom-model mobile"
  },
  gs = {
    class: "intro__line intro__line-3 text-h1"
  },
  fs = {
    class: "intro__line intro__line-4 text-h1"
  },
  xs = {
    name: "HomeIntro"
  },
  bs = Object.assign(xs, {
    props: {
      label: String,
      titles: Array,
      project: Object
    },
    setup(e) {
      return (a, l) => {
        const c = Je,
          o = Ee;
        return d(), h("div", Ke, [p(c, {
          project: e.project
        }, null, 8, ["project"]), t("div", Ye, [t("div", Ze, r(e.titles[0]), 1), t("div", Qe, r(e.titles[1]), 1), t("div", {
          class: "intro__description text-s1 --desktop",
          innerHTML: e.label
        }, null, 8, Xe), t("div", ts, [t("div", es, r(e.titles[1]), 1), t("div", ss, [t("div", is, r(e.titles[1]), 1), t("div", {
          class: "intro__description text-s1 --mobile",
          innerHTML: e.label
        }, null, 8, os)])])]), t("div", ns, [t("div", as, r(e.titles[0]), 1), t("div", ls, r(e.titles[1]), 1), t("div", {
          class: "intro__description text-s1 --desktop",
          innerHTML: e.label
        }, null, 8, cs), t("div", _s, [t("div", rs, r(e.titles[1]), 1), t("div", ds, [t("div", us, r(e.titles[1]), 1), t("div", {
          class: "intro__description text-s1 --mobile",
          innerHTML: e.label
        }, null, 8, ms)])])]), t("div", ps, [t("div", hs, [t("div", vs, [p(o)]), t("div", gs, r(e.titles[2]), 1), t("div", fs, r(e.titles[3]), 1)])])])
      }
    }
  }),
  $s = k(bs, [
    ["__scopeId", "data-v-a33a9baf"]
  ]);
const ys = {
    name: "HomeFirst"
  },
  Ts = Object.assign(ys, {
    props: {
      label: String,
      description: String,
      titles: Array,
      project: Object
    },
    setup(e) {
      return (a, l) => {
        const c = $s;
        return d(), et(c, {
          project: e.project,
          titles: e.titles,
          label: e.label
        }, null, 8, ["project", "titles", "label"])
      }
    }
  }),
  Ss = k(Ts, [
    ["__scopeId", "data-v-5e54d2f4"]
  ]);
const ws = e => (F("data-v-0e695979"), e = e(), D(), e),
  js = {
    class: "info section"
  },
  Ps = ["innerHTML"],
  Is = {
    class: "info__grid"
  },
  ks = {
    class: "info__left"
  },
  Ls = {
    class: "info__top"
  },
  Cs = {
    class: "info__left-img img-outer"
  },
  Hs = {
    class: "img-inner"
  },
  Ms = ["src", "alt"],
  Ns = ["innerHTML"],
  Es = {
    class: "info__bottom"
  },
  As = ["innerHTML"],
  Os = {
    class: "info__right"
  },
  Bs = {
    class: "info__right-img img-outer"
  },
  zs = {
    class: "img-inner"
  },
  Ws = ["src", "alt"],
  qs = ws(() => t("p", {
    class: "text-s1 info__right-text"
  }, " We believe in the transformative power of simplicity. ", -1)),
  Fs = {
    name: "HomeInfo"
  },
  Ds = Object.assign(Fs, {
    props: {
      title: String,
      aside: Object,
      image: Object,
      text: String
    },
    setup(e) {
      return (a, l) => {
        const c = ct;
        return d(), h("div", js, [t("div", {
          class: "info__heading difference text-h3",
          innerHTML: e.title
        }, null, 8, Ps), t("div", Is, [t("div", ks, [t("div", Ls, [t("div", Cs, [t("div", Hs, [t("img", {
          class: "info__left-img-inner",
          src: e.aside.img.url,
          alt: e.aside.img.alt
        }, null, 8, Ms)])]), t("div", {
          class: "info__left-text text-s1",
          innerHTML: e.aside.text
        }, null, 8, Ns)]), t("div", Es, [t("div", {
          class: "info__description text-p3 capitalized capitalized-split",
          innerHTML: e.text
        }, null, 8, As), p(c, {
          onClicked: l[0] || (l[0] = o => a.$router.push({
            path: "/about"
          })),
          label: "Read More"
        })])]), t("div", Os, [t("div", Bs, [t("div", zs, [t("img", {
          src: e.image.url,
          alt: e.image.alt,
          class: "img-parallax info__right-img-inner"
        }, null, 8, Ws)])]), qs])])])
      }
    }
  }),
  Vs = k(Ds, [
    ["__scopeId", "data-v-0e695979"]
  ]);
const rt = e => (F("data-v-2b944dd7"), e = e(), D(), e),
  Rs = {
    class: "heading"
  },
  Us = {
    class: "heading__top"
  },
  Gs = rt(() => t("div", {
    class: "heading__word heading__word-1 text-h1"
  }, "Our", -1)),
  Js = {
    class: "heading__word heading__word-2 text-h1"
  },
  Ks = rt(() => t("div", {
    class: "heading__word heading__word-3 text-h1"
  }, "Works", -1)),
  Ys = {
    class: "heading__bottom"
  },
  Zs = rt(() => t("p", {
    class: "text-t4 heading__label"
  }, "Services", -1)),
  Qs = {
    class: "heading__list"
  },
  Xs = ["onClick"],
  ti = ["innerHTML"],
  ei = {
    name: "WorksHeading"
  },
  si = Object.assign(ei, {
    props: {
      label: String,
      services: Array,
      projects: Array,
      projectsLength: Number
    },
    emits: ["chooseService"],
    setup(e, {
      emit: a
    }) {
      const l = e,
        c = Pe(() => [{
          id: -1,
          attributes: {
            Name: "All"
          }
        }, ...l.services]),
        o = O(c.value[0].id);
      return Ie(() => o.value, () => {
        const x = c.value.find(s => s.id === o.value);
        a("chooseService", x)
      }), (x, s) => (d(), h("div", Rs, [t("div", Us, [Gs, t("div", Js, " (" + r(e.projectsLength) + ") ", 1), Ks]), t("div", Ys, [Zs, t("ul", Qs, [(d(!0), h(H, null, A(m(c), _ => (d(), h("li", {
        class: "heading__list-item",
        key: _.id
      }, [t("button", {
        onClick: T => o.value = _.id,
        class: nt(["tab text-t2", {
          active: _.id === m(o)
        }])
      }, r(_.attributes.Name), 11, Xs)]))), 128))]), t("div", {
        class: "heading__text text-p3",
        "data-anim-text": "",
        innerHTML: e.label
      }, null, 8, ti)])]))
    }
  }),
  ii = k(si, [
    ["__scopeId", "data-v-2b944dd7"]
  ]);
const oi = e => (F("data-v-7f94b0d7"), e = e(), D(), e),
  ni = {
    class: "works-list"
  },
  ai = {
    class: "list"
  },
  li = {
    class: "work__img img-outer"
  },
  ci = {
    class: "img-inner"
  },
  _i = ["src"],
  ri = {
    class: "work__info"
  },
  di = {
    class: "work__info-title text-h5",
    "data-rotate-title": ""
  },
  ui = {
    class: "work__info-address text-t3"
  },
  mi = oi(() => t("span", {
    class: "work__info-split"
  }, "/", -1)),
  pi = {
    name: "WorksList"
  },
  hi = Object.assign(pi, {
    props: {
      projects: Array,
      hideButton: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const l = lt().public.baseUrl;
      return (c, o) => {
        const x = at,
          s = ct;
        return d(), h("div", ni, [t("div", ai, [(d(!0), h(H, null, A(e.projects, _ => (d(), et(x, {
          class: "work",
          "data-cursor-hover": "Explore Project",
          to: `/project/${_.attributes.Slug}`,
          key: _.id
        }, {
          default: B(() => {
            var T, y, S, L, j, C, z, M;
            return [t("div", li, [t("div", ci, [t("img", {
              src: m(l) + ((L = (S = (y = (T = _ == null ? void 0 : _.attributes) == null ? void 0 : T.Main_Photo) == null ? void 0 : y.data) == null ? void 0 : S.attributes) == null ? void 0 : L.url),
              class: "work__img-inner img-parallax"
            }, null, 8, _i)])]), t("div", ri, [t("div", di, r(_.attributes.Name), 1), t("div", ui, [w(r((C = (j = _ == null ? void 0 : _.attributes) == null ? void 0 : j.Brief) == null ? void 0 : C.Location) + " ", 1), mi, w(" " + r((M = (z = _ == null ? void 0 : _.attributes) == null ? void 0 : z.Brief) == null ? void 0 : M.Size), 1)])])]
          }),
          _: 2
        }, 1032, ["to"]))), 128))]), e.hideButton ? ue("", !0) : (d(), et(s, {
          key: 0,
          onClicked: o[0] || (o[0] = _ => c.$router.push({
            path: "/works"
          })),
          label: "View All",
          class: "works-list__btn"
        }))])
      }
    }
  }),
  vi = k(hi, [
    ["__scopeId", "data-v-7f94b0d7"]
  ]);
const gi = {
    class: "works section"
  },
  fi = {
    name: "HomeWorks"
  },
  xi = Object.assign(fi, {
    props: {
      projects: Array,
      services: Array,
      label: String,
      projectsLength: Number
    },
    setup(e) {
      const a = e;
      u.registerPlugin(G);
      const l = O(a.projects.slice(0, 6));
      async function c(o) {
        if (o.id === -1) l.value = a.projects.slice(0, 6), await q(), G.refresh();
        else {
          let x = [];
          a.projects.forEach(async s => {
            var T, y, S, L;
            ((S = (y = (T = s == null ? void 0 : s.attributes) == null ? void 0 : T.services) == null ? void 0 : y.data) == null ? void 0 : S.map(j => {
              var C;
              return (C = j == null ? void 0 : j.attributes) == null ? void 0 : C.Name
            })).includes((L = o == null ? void 0 : o.attributes) == null ? void 0 : L.Name) && x.push(s), l.value = x, await q(), G.refresh()
          })
        }
      }
      return (o, x) => {
        const s = ii,
          _ = vi;
        return d(), h("div", gi, [p(s, {
          onChooseService: c,
          projects: e.projects,
          services: e.services,
          label: e.label,
          projectsLength: e.projectsLength
        }, null, 8, ["projects", "services", "label", "projectsLength"]), p(_, {
          projects: m(l)
        }, null, 8, ["projects"])])
      }
    }
  }),
  bi = k(xi, [
    ["__scopeId", "data-v-6e566cae"]
  ]);
const $i = e => (F("data-v-8bb08b04"), e = e(), D(), e),
  yi = {
    class: "create section"
  },
  Ti = {
    class: "create__heading"
  },
  Si = $i(() => t("div", {
    class: "create__heading-label text-t3"
  }, "Expertise", -1)),
  wi = {
    class: "create__heading-list"
  },
  ji = {
    class: "create__title"
  },
  Pi = {
    class: "create__word create__word-1 text-h1 difference"
  },
  Ii = {
    class: "create__word create__word-2 text-h1 difference"
  },
  ki = {
    class: "create__word create__word-3 text-h1 difference"
  },
  Li = {
    class: "create__bottom"
  },
  Ci = {
    class: "create__background background create-slider swiper"
  },
  Hi = {
    class: "swiper-wrapper"
  },
  Mi = {
    class: "background__img img-outer"
  },
  Ni = {
    class: "img-inner"
  },
  Ei = ["src", "alt"],
  Ai = {
    class: "create__slider slider"
  },
  Oi = {
    class: "slider__counter text-t3"
  },
  Bi = {
    class: "slider__counter-num"
  },
  zi = {
    class: "slider__toggles --mobile"
  },
  Wi = {
    class: "slider__content"
  },
  qi = {
    class: "slider__content-inner"
  },
  Fi = {
    class: "swiper slider-sm"
  },
  Di = {
    class: "swiper-wrapper"
  },
  Vi = {
    class: "slider__photo img-outer"
  },
  Ri = {
    class: "img-inner"
  },
  Ui = ["src"],
  Gi = {
    class: "slider__toggles --desktop"
  },
  Ji = {
    class: "slider__bottom"
  },
  Ki = ["innerHTML"],
  Yi = {
    name: "HomeCreate"
  },
  Zi = Object.assign(Yi, {
    props: {
      services: Array,
      titles: Array
    },
    setup(e) {
      u.registerPlugin(tt);
      const l = lt().public.baseUrl,
        c = O(null),
        o = O(null),
        x = O(1),
        s = O(1);

      function _() {
        c.value.animating || (c.value.slidePrev(), o.value.slidePrev(), y())
      }

      function T() {
        c.value.animating || (c.value.slideNext(), o.value.slideNext(), y())
      }

      function y() {
        const i = new Promise(v => {
            v(), u.to(".slider__description.active .split-line__inner", {
              yPercent: -110,
              stagger: .05,
              ease: $,
              onComplete: () => {
                u.set(".slider__description .split-line__inner", {
                  yPercent: -130
                }), v()
              }
            })
          }),
          f = new Promise(v => {
            u.to(".slider__title.active .split-line__inner", {
              yPercent: -120,
              ease: $,
              stagger: .05,
              onComplete: () => {
                u.set(".slider__title .split-line__inner", {
                  yPercent: -130
                }), v()
              }
            })
          }),
          n = new Promise(v => {
            u.to(".slider__counter-num", {
              yPercent: -120,
              ease: $,
              stagger: .05,
              onComplete: v
            })
          });
        Promise.all([i, f, n]).then(async () => {
          s.value = c.value.realIndex + 1, await q(), u.fromTo(".slider__description.active .split-line__inner", {
            yPercent: 200
          }, {
            yPercent: 0,
            stagger: .05,
            ease: $
          }), u.fromTo(".slider__title.active .split-line__inner", {
            yPercent: 120
          }, {
            yPercent: 0,
            ease: $,
            stagger: .05
          }), u.fromTo(".slider__counter-num", {
            yPercent: 120
          }, {
            yPercent: 0,
            ease: $,
            stagger: .05
          })
        })
      }

      function S() {
        c.value = new re(".create-slider", {
          effect: "creative",
          allowTouchMove: !1,
          modules: [de],
          speed: 1e3,
          loop: !0,
          parallax: !1,
          controller: {
            inverse: !0
          },
          creativeEffect: {
            prev: {
              translate: ["0%", "0%", 0]
            },
            next: {
              translate: ["0%", "0%", 0]
            }
          }
        }), o.value = new re(".slider-sm", {
          effect: "creative",
          allowTouchMove: !1,
          modules: [de],
          speed: 1e3,
          loop: !0,
          parallax: !1,
          controller: {
            inverse: !0
          },
          creativeEffect: {
            prev: {
              translate: ["0%", "0%", 0]
            },
            next: {
              translate: ["0%", "0%", 0]
            }
          }
        }), o.value.on("slideNextTransitionStart", z), o.value.on("slidePrevTransitionStart", M), c.value.on("slideNextTransitionStart", () => {
          j()
        }), c.value.on("slidePrevTransitionStart", () => {
          C()
        }), c.value.on("slideChange", L)
      }

      function L(i) {
        x.value = i.realIndex + 1
      }

      function j() {
        const i = document.querySelector(".create-slider .swiper-slide-active");
        if (!i) return;
        const f = i == null ? void 0 : i.previousElementSibling,
          n = i.querySelector(".background__img-inner"),
          v = f.querySelector(".background__img-inner");
        i.style.zIndex = "90", f.style.zIndex = "50", u.fromTo(v, {
          x: "0%"
        }, {
          x: "-10%",
          duration: .8,
          delay: 0,
          ease: $
        }), u.fromTo(n, {
          x: "10%",
          scale: 1.1,
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
        }, {
          x: "0%",
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .8,
          ease: $
        })
      }

      function C() {
        const i = document.querySelector(".create-slider .swiper-slide-active");
        if (!i) return;
        const f = i == null ? void 0 : i.nextElementSibling,
          n = i.querySelector(".background__img-inner"),
          v = f.querySelector(".background__img-inner");
        i.style.zIndex = "90", f.style.zIndex = "50", u.fromTo(v, {
          x: "0%"
        }, {
          x: "10%",
          duration: .8,
          delay: 0,
          ease: $
        }), u.fromTo(n, {
          x: "-10%",
          scale: 1.1,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        }, {
          x: "0%",
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .8,
          ease: $
        })
      }

      function z() {
        const i = document.querySelector(".slider-sm .swiper-slide-active");
        if (!i) return;
        const f = i == null ? void 0 : i.previousElementSibling,
          n = i.querySelector(".img-parallax"),
          v = f.querySelector(".img-parallax");
        i.style.zIndex = "90", f.style.zIndex = "50", u.fromTo(v, {
          x: "0%"
        }, {
          x: "-10%",
          duration: .8,
          delay: 0,
          ease: $
        }), u.fromTo(n, {
          x: "10%",
          scale: 1.1,
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
        }, {
          x: "0%",
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .8,
          ease: $
        })
      }

      function M() {
        const i = document.querySelector(".slider-sm .swiper-slide-active");
        if (!i) return;
        const f = i == null ? void 0 : i.nextElementSibling,
          n = i.querySelector(".img-parallax"),
          v = f.querySelector(".img-parallax");
        i.style.zIndex = "90", f.style.zIndex = "50", u.fromTo(v, {
          x: "0%"
        }, {
          x: "10%",
          duration: .8,
          delay: 0,
          ease: $
        }), u.fromTo(n, {
          x: "-10%",
          scale: 1.1,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        }, {
          x: "0%",
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: .8,
          ease: $
        })
      }

      function st() {
        new tt(".slider__title", {
          type: "lines",
          linesClass: "split-line"
        }).lines.forEach(f => {
          new tt(f, {
            type: "lines",
            linesClass: "split-line__inner"
          })
        })
      }
      return me(async () => {
        st(), await q(), S()
      }), (i, f) => {
        var V, K;
        const n = ke,
          v = Ae,
          J = at;
        return d(), h("div", yi, [t("div", Ti, [Si, t("ul", wi, [(d(!0), h(H, null, A(e.services, (g, b) => {
          var P, I;
          return d(), h("li", {
            class: "create__heading-item text-s1",
            key: g.id
          }, [b + 1 === ((P = e.services) == null ? void 0 : P.length) ? (d(), h(H, {
            key: 0
          }, [w("and ")], 64)) : ue("", !0), w(" " + r((I = g == null ? void 0 : g.attributes) == null ? void 0 : I.Name), 1)])
        }), 128))])]), t("div", ji, [t("div", Pi, r(e.titles[0]), 1), t("div", Ii, r(e.titles[1]), 1), t("div", ki, r(e.titles[2]), 1)]), t("div", Li, [t("div", Ci, [t("div", Hi, [(d(!0), h(H, null, A(e.services, g => {
          var b, P, I, N, Y, Z, Q, R;
          return d(), h("div", {
            class: "swiper-slide",
            key: g.id
          }, [t("div", Mi, [t("div", Ni, [t("img", {
            class: "background__img-inner",
            src: m(l) + ((N = (I = (P = (b = g.attributes) == null ? void 0 : b.Photo_For_Main) == null ? void 0 : P.data[1]) == null ? void 0 : I.attributes) == null ? void 0 : N.url),
            alt: (R = (Q = (Z = (Y = g.attributes) == null ? void 0 : Y.Photo_For_Main) == null ? void 0 : Z.data[1]) == null ? void 0 : Q.attributes) == null ? void 0 : R.alternativeText
          }, null, 8, Ei)])])])
        }), 128))])]), t("div", Ai, [t("div", Oi, [t("span", Bi, r(m(s)), 1), w(" / " + r(e.services.length), 1)]), t("div", zi, [t("button", {
          onClick: _,
          class: "btn-prev slider__toggle"
        }, [p(n)]), t("button", {
          onClick: T,
          class: "btn-next slider__toggle"
        }, [p(v)])]), t("div", Wi, [(d(!0), h(H, null, A(e.services, (g, b) => (d(), h("div", {
          class: nt(["text-h3 slider__title", {
            active: m(s) === b + 1
          }]),
          key: g.id
        }, r(g.attributes.Name), 3))), 128)), t("div", qi, [t("div", Fi, [t("div", Di, [(d(!0), h(H, null, A(e.services, g => {
          var b, P, I, N;
          return d(), h("div", {
            class: "swiper-slide",
            key: g.id
          }, [t("div", Vi, [t("div", Ri, [t("img", {
            class: "slider__photo-inner img-parallax",
            src: m(l) + ((N = (I = (P = (b = g.attributes) == null ? void 0 : b.Photo_For_Main) == null ? void 0 : P.data[0]) == null ? void 0 : I.attributes) == null ? void 0 : N.url)
          }, null, 8, Ui)])])])
        }), 128))])]), t("div", Gi, [t("button", {
          onClick: _,
          class: "btn-prev slider__toggle"
        }, [p(n)]), t("button", {
          onClick: T,
          class: "btn-next slider__toggle"
        }, [p(v)])])]), t("div", Ji, [(d(!0), h(H, null, A(e.services, (g, b) => (d(), h("div", {
          class: nt(["slider__description text-p3", {
            active: m(s) === b + 1
          }]),
          key: g.id,
          innerHTML: g.attributes.Short_Description
        }, null, 10, Ki))), 128)), p(J, {
          class: "slider__more link",
          to: `/service/${(K=(V=e.services[m(s)-1])==null?void 0:V.attributes)==null?void 0:K.Slug}`
        }, {
          default: B(() => [w("Learn More")]),
          _: 1
        }, 8, ["to"])])])])])])
      }
    }
  }),
  Qi = k(Zi, [
    ["__scopeId", "data-v-8bb08b04"]
  ]);
const Xi = e => (F("data-v-f4430746"), e = e(), D(), e),
  to = {
    class: "team"
  },
  eo = {
    class: "team__content"
  },
  so = Xi(() => t("h1", {
    class: "text-h1 team__title",
    "data-rotate-title": ""
  }, [w(" Meet our"), t("br"), w("Leaders ")], -1)),
  io = ["innerHTML"],
  oo = {
    __name: "Team",
    props: {
      description: String,
      team: Array,
      onlyLeaders: {
        type: Boolean,
        default: !1
      },
      shiftLast: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return (a, l) => {
        const c = ct,
          o = Se;
        return d(), h("section", to, [t("div", eo, [so, t("div", {
          class: "text-p3 team__text",
          "data-anim-text": "",
          innerHTML: e.description
        }, null, 8, io)]), p(o, {
          team: e.team,
          onOpenPopup: l[1] || (l[1] = x => a.$emit("openPopup", x)),
          "only-leaders": e.onlyLeaders,
          "shift-last": e.shiftLast
        }, {
          default: B(() => [p(c, {
            label: "View All",
            onClicked: l[0] || (l[0] = x => a.$router.push({
              path: "/team"
            }))
          })]),
          _: 1
        }, 8, ["team", "only-leaders", "shift-last"])])
      }
    }
  },
  no = k(oo, [
    ["__scopeId", "data-v-f4430746"]
  ]);
const ao = {
    class: "home page a"
  },
  lo = {
    class: "main home__inner move-loader"
  },
  co = {
    class: "main__first"
  },
  _o = {
    class: "main__first-titles"
  },
  ro = {
    class: "main__first-title text-h1"
  },
  uo = {
    class: "main__first-title text-h1"
  },
  mo = {
    name: "HomePage"
  },
  po = Object.assign(mo, {
    async setup(e) {
      var R, dt, ut, mt, pt, ht, vt, gt, ft, xt, bt, $t, yt, Tt, St, wt, jt, Pt, It, kt, Lt, Ct, Ht, Mt, Nt, Et, At, Ot, Bt, zt, Wt, qt, Ft, Dt, Vt, Rt, Ut, Gt, Jt, Kt, Yt, Zt, Qt, Xt, te, ee, se, ie, oe;
      let a, l;
      u.registerPlugin(G, tt);
      const o = lt().public.baseUrl,
        s = ([a, l] = it(() => ot("home", () => $fetch(o + "/api/main-page?populate=deep,3"))), a = await a, l(), a).data.value.data;
      Le(s.attributes.Seo_Block);
      const _ = ([a, l] = it(() => ot("projects", () => $fetch(o + "/api/one-projects?populate=deep,2&pagination[page]=1&pagination[pageSize]=100"))), a = await a, l(), a),
        T = (dt = (R = s == null ? void 0 : s.attributes) == null ? void 0 : R.Seo_Block) == null ? void 0 : dt.metaTitle,
        y = ([a, l] = it(() => ot("team", () => $fetch(o + "/api/team?populate=deep,4"))), a = await a, l(), a),
        S = [(ut = s == null ? void 0 : s.attributes) == null ? void 0 : ut.Title1, (mt = s == null ? void 0 : s.attributes) == null ? void 0 : mt.Title2, (pt = s == null ? void 0 : s.attributes) == null ? void 0 : pt.Title3, (ht = s == null ? void 0 : s.attributes) == null ? void 0 : ht.Title4],
        L = [(vt = s == null ? void 0 : s.attributes) == null ? void 0 : vt.Expertise_Title1, (gt = s == null ? void 0 : s.attributes) == null ? void 0 : gt.Expertise_Title2, (ft = s == null ? void 0 : s.attributes) == null ? void 0 : ft.Expertise_Title3];
      (xt = s == null ? void 0 : s.attributes) == null || xt.Main_Description;
      const j = (bt = s == null ? void 0 : s.attributes) == null ? void 0 : bt.About_Text,
        C = ($t = s == null ? void 0 : s.attributes) == null ? void 0 : $t.Meet_The_Teem_text,
        z = (yt = s == null ? void 0 : s.attributes) == null ? void 0 : yt.Middle_Title,
        M = (Tt = s == null ? void 0 : s.attributes) == null ? void 0 : Tt.Service_Description,
        st = (St = s == null ? void 0 : s.attributes) == null ? void 0 : St.Short_Description,
        i = {
          img: {
            url: o + ((kt = (It = (Pt = (jt = (wt = s == null ? void 0 : s.attributes) == null ? void 0 : wt.Small_photo_with_text) == null ? void 0 : jt.Photo) == null ? void 0 : Pt.data) == null ? void 0 : It.attributes) == null ? void 0 : kt.url),
            alt: (Nt = (Mt = (Ht = (Ct = (Lt = s == null ? void 0 : s.attributes) == null ? void 0 : Lt.Small_photo_with_text) == null ? void 0 : Ct.Photo) == null ? void 0 : Ht.data) == null ? void 0 : Mt.attributes) == null ? void 0 : Nt.alternativeText
          },
          text: (At = (Et = s == null ? void 0 : s.attributes) == null ? void 0 : Et.Small_photo_with_text) == null ? void 0 : At.Text
        },
        f = {
          url: o + ((Wt = (zt = (Bt = (Ot = s == null ? void 0 : s.attributes) == null ? void 0 : Ot.Middle_Photo) == null ? void 0 : Bt.data) == null ? void 0 : zt.attributes) == null ? void 0 : Wt.url),
          alt: (Vt = (Dt = (Ft = (qt = s == null ? void 0 : s.attributes) == null ? void 0 : qt.Middle_Photo) == null ? void 0 : Ft.data) == null ? void 0 : Dt.attributes) == null ? void 0 : Vt.alternativeText
        },
        n = (Gt = (Ut = (Rt = s == null ? void 0 : s.attributes) == null ? void 0 : Rt.one_project) == null ? void 0 : Ut.data) == null ? void 0 : Gt.attributes,
        v = {
          url: o + ((Yt = (Kt = (Jt = n == null ? void 0 : n.Main_Photo) == null ? void 0 : Jt.data) == null ? void 0 : Kt.attributes) == null ? void 0 : Yt.url),
          alt: (Xt = (Qt = (Zt = n == null ? void 0 : n.Main_Photo) == null ? void 0 : Zt.data) == null ? void 0 : Qt.attributes) == null ? void 0 : Xt.alternativeText,
          title: n == null ? void 0 : n.Name,
          description: n == null ? void 0 : n.Short_Description,
          slug: n == null ? void 0 : n.Slug,
          brief: n == null ? void 0 : n.Brief
        },
        J = le("services"),
        V = [...(ee = (te = _ == null ? void 0 : _.data) == null ? void 0 : te.value) == null ? void 0 : ee.data].reverse(),
        K = [...(se = s == null ? void 0 : s.attributes) == null ? void 0 : se.list_of_projects.data],
        g = (oe = (ie = y == null ? void 0 : y.data) == null ? void 0 : ie.value) == null ? void 0 : oe.data,
        b = O(!1),
        P = le("personPopupInfo", () => ({}));
      async function I() {
        const W = u.utils.toArray("[data-rotate-title]"),
          ne = u.utils.toArray("[data-anim-text]");
        [{
          el: ".intro__line",
          delay: .7
        }, {
          el: ".create__word"
        }, {
          el: ".heading__word"
        }, {
          el: ".info__heading",
          splitType: window.innerWidth > 1023 ? null : "words,chars"
        }].forEach(E => {
          _e({
            ...E,
            stagger: {
              amount: U => U < 2 ? U * .8 : U * .8 - 1.6
            }
          })
        }), X({
          el: ".intro__bottom-text",
          linesType: "lines,words",
          delay: .7,
          noTrigger: !0
        }), X({
          el: ".info__description p"
        }), X({
          el: ".slider__description p span",
          noTrigger: !0
        }), ne.forEach(E => {
          X({
            el: E
          })
        }), W.forEach(E => {
          _e({
            el: E
          })
        }), await q(), Me(".info__description"), Ne(".info__description p")
      }

      function N() {
        G.create({
          trigger: ".team",
          start: "10% top",
          end: "bottom bottom",
          onEnter: () => {
            u.to(".team__content", {
              opacity: .1
            })
          },
          onEnterBack: () => {
            u.to(".team__content", {
              opacity: .1
            })
          },
          onLeave: () => {
            u.to(".team__content", {
              opacity: 0
            })
          },
          onLeaveBack: () => {
            u.to(".team__content", {
              opacity: 1
            })
          }
        })
      }
      async function Y(W) {
        P.value = W, await q(), document.body.style.overflow = "hidden", b.value = !0, Ce({
          wrapper: ".popup",
          modal: ".modal"
        })
      }

      function Z() {
        He({
          wrapper: ".popup",
          modal: ".modal",
          onComplete: () => {
            document.body.style.overflow = "", b.value = !1
          }
        })
      }
      async function Q() {
        I(), ce({
          selector: ".img-parallax"
        }), N(), await new Promise(W => setTimeout(W, 500)), ce({
          selector: ".background__img-inner"
        })
      }
      return me(() => {
        Q()
      }), (W, ne) => {
        const ae = Te,
          E = ye,
          U = we,
          pe = je,
          he = Ss,
          ve = Vs,
          ge = bi,
          fe = Qi,
          xe = no,
          be = Oe,
          $e = Be;
        return d(), h("div", ao, [p(E, null, {
          default: B(() => [p(ae, null, {
            default: B(() => [w(r(m(T)), 1)]),
            _: 1
          })]),
          _: 1
        }), p(pe, {
          isOpen: m(b)
        }, {
          default: B(() => [p(U, {
            onClosePopup: Z
          })]),
          _: 1
        }, 8, ["isOpen"]), t("main", lo, [t("div", co, [t("div", _o, [t("div", ro, r(S[0]), 1), t("div", uo, r(S[1]), 1)]), p(he, {
          label: m(st),
          description: m(M),
          titles: S,
          project: v
        }, null, 8, ["label", "description"])]), p(ve, {
          title: m(z),
          aside: i,
          image: f,
          text: m(j)
        }, null, 8, ["title", "text"]), p(ge, {
          projects: K.slice(0, 6),
          projectsLength: m(V).length,
          services: m(J),
          label: m(M)
        }, null, 8, ["projects", "projectsLength", "services", "label"]), p(fe, {
          titles: L,
          services: m(J)
        }, null, 8, ["services"]), p(xe, {
          team: m(g).attributes.Add_Member,
          "only-leaders": "",
          "shift-last": "",
          description: m(C),
          class: "home-team",
          onOpenPopup: Y
        }, null, 8, ["team", "description"])]), p(be, {
          projects: m(V)
        }, null, 8, ["projects"]), p($e)])
      }
    }
  }),
  wo = k(po, [
    ["__scopeId", "data-v-10bf82ce"]
  ]);
export {
  wo as
  default
};