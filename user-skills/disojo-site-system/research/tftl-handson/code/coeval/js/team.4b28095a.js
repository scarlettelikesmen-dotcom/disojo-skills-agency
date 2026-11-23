/* https://coevalstudio.com/_nuxt/team.4b28095a.js */
import {
  H as Et,
  T as Bt
} from "./components.f929feb2.js";
import {
  _ as Wt,
  a as Ft
} from "./TeamBlock.22391266.js";
import {
  _ as Dt
} from "./Popup.cd0a9f4e.js";
import {
  _ as Nt
} from "./Text.19fa6ef9.js";
import {
  _ as Ut
} from "./File.9d927dc4.js";
import {
  _ as zt
} from "./CommonButton.058c734e.js";
import {
  _ as S,
  e as it,
  f as $,
  o as b,
  c as y,
  a as t,
  t as T,
  u as l,
  P as Rt,
  l as u,
  a1 as st,
  b as nt,
  z as E,
  A as B,
  ad as Qt,
  a4 as Gt,
  G as lt,
  g as P,
  M as Y,
  C as ct,
  K as j,
  k as Jt,
  F as X,
  r as Z,
  L as C,
  H as M,
  I as Kt,
  O as Yt,
  V as xt,
  S as bt,
  aa as Xt,
  w as yt,
  W as Zt,
  E as ot,
  d as $t,
  $ as te,
  ag as ee,
  a5 as wt,
  a6 as Tt,
  ah as Pt,
  j as at,
  Y as se
} from "./entry.7e3c7585.js";
import {
  _ as oe,
  a as ne,
  b as ae
} from "./Contact.ad842028.js";
import {
  _ as ie
} from "./top-right-arrow.4a567dcc.js";
import {
  _ as le
} from "./DragSlider.55706fac.js";
import {
  _ as ce
} from "./Footer.15b17ac6.js";
import "./client-only.eecabb16.js";
const W = s => (E("data-v-52a33813"), s = s(), B(), s),
  _e = {
    class: "vacancies-popup"
  },
  re = W(() => t("img", {
    draggable: "false",
    class: "modal__close-icon",
    src: Qt,
    alt: "close",
    role: "presentation"
  }, null, -1)),
  de = [re],
  ue = {
    class: "popup__left"
  },
  pe = {
    class: "popup__name text-h3 popup-invert"
  },
  me = {
    class: "popup__details"
  },
  ve = {
    class: "popup__detail"
  },
  he = W(() => t("div", {
    class: "popup__detail-label text-t3"
  }, "Location", -1)),
  fe = {
    class: "popup__detail-heading text-h3 popup-invert"
  },
  ge = {
    class: "popup__detail"
  },
  xe = W(() => t("div", {
    class: "popup__detail-label text-t3"
  }, "Salary per year is", -1)),
  be = {
    class: "popup__detail-heading text-h3 popup-invert"
  },
  ye = {
    class: "popup__right popup-info"
  },
  $e = ["innerHTML"],
  we = W(() => t("p", {
    class: "popup-info__label text-t4"
  }, "Requirements", -1)),
  Te = ["innerHTML"],
  Pe = W(() => t("div", {
    class: "popup-info__label text-t4"
  }, "Mail resumes to", -1)),
  ke = ["innerHTML"],
  Ce = W(() => t("p", {
    class: "popup-info__label text-t4"
  }, "Apply now", -1)),
  Ve = ["onSubmit"],
  Ie = {
    __name: "TeamVacancyPopup",
    emits: ["close-popup"],
    setup(s, {
      emit: o
    }) {
      const n = it("vacancyPopupInfo"),
        m = nt().public.baseUrl,
        a = $(null),
        c = $(null),
        _ = $(null),
        h = $({
          blob: null,
          name: null,
          size: null
        }),
        r = $(!1),
        w = $(!1),
        k = $(!1);

      function e() {
        a.value = "", c.value = "", _.value = "", h.value = {
          blob: null,
          name: null,
          size: null
        }, r.value = !1, w.value = !1, k.value = !1;
        const f = document.querySelector(".contact-form__file .input-file__input");
        f && (f.value = null)
      }

      function A() {
        const {
          isNameValid: f,
          isEmailValid: d,
          isMessageValid: g
        } = i();
        return f && d && g
      }

      function i() {
        const f = a.value,
          d = Gt.emailPattern.test(c.value),
          g = _.value;
        return {
          isNameValid: f,
          isEmailValid: d,
          isMessageValid: g
        }
      }
      async function O() {
        var d;
        if (A()) r.value = !1, w.value = !1, k.value = !1;
        else {
          const {
            isNameValid: g,
            isEmailValid: x,
            isMessageValid: v
          } = i();
          g ? r.value = !1 : r.value = !0, x ? w.value = !1 : w.value = !0, v ? k.value = !1 : k.value = !0;
          return
        }
        const f = new FormData;
        f.append("data", JSON.stringify({
          Name: a.value,
          Mail: c.value,
          Message: _.value,
          Vacancy: n.value.id
        })), f.append("files.File_attach", (d = h.value) == null ? void 0 : d.blob), await $fetch(m + "/api/vacancy-forms", {
          method: "POST",
          body: f
        }).then(g => {
          o("close-popup"), e()
        }).catch(g => {
          console.log(g)
        })
      }
      return (f, d) => {
        var V, tt, et, F, D, N, U, z, R, Q, G, J;
        const g = Nt,
          x = Ut,
          v = zt;
        return b(), y("div", _e, [t("button", {
          class: "modal__close",
          onClick: d[0] || (d[0] = I => f.$emit("close-popup"))
        }, de), t("div", ue, [t("div", pe, T((tt = (V = l(n)) == null ? void 0 : V.attributes) == null ? void 0 : tt.Name), 1), t("div", me, [t("div", ve, [he, t("div", fe, T((F = (et = l(n)) == null ? void 0 : et.attributes) == null ? void 0 : F.Location), 1)]), t("div", ge, [xe, t("div", be, " $" + T((N = (D = l(n)) == null ? void 0 : D.attributes) == null ? void 0 : N.Salary), 1)])])]), t("div", ye, [t("div", {
          class: "popup-info__description text-p3",
          innerHTML: (z = (U = l(n)) == null ? void 0 : U.attributes) == null ? void 0 : z.Description
        }, null, 8, $e), we, t("div", {
          class: "popup-info__text text-t3",
          innerHTML: (Q = (R = l(n)) == null ? void 0 : R.attributes) == null ? void 0 : Q.Requirements
        }, null, 8, Te), Pe, t("div", {
          class: "popup-info__text popup-info__mail text-t3",
          innerHTML: (J = (G = l(n)) == null ? void 0 : G.attributes) == null ? void 0 : J.Mail_resumes_to
        }, null, 8, ke), Ce, t("form", {
          onSubmit: Rt(O, ["prevent"]),
          class: "popup__form form"
        }, [u(g, {
          modelValue: l(a),
          "onUpdate:modelValue": d[1] || (d[1] = I => st(a) ? a.value = I : null),
          placeholder: "Type your name*",
          showCaption: !0,
          class: "index-contact-form__input",
          "is-invalid": l(r)
        }, null, 8, ["modelValue", "is-invalid"]), u(g, {
          modelValue: l(c),
          "onUpdate:modelValue": d[2] || (d[2] = I => st(c) ? c.value = I : null),
          placeholder: "Type your email address*",
          showCaption: !0,
          class: "index-contact-form__input",
          "is-invalid": l(w)
        }, null, 8, ["modelValue", "is-invalid"]), u(x, {
          ref: "fileRef",
          modelValue: l(h),
          "onUpdate:modelValue": d[3] || (d[3] = I => st(h) ? h.value = I : null),
          class: "contact-form__file"
        }, null, 8, ["modelValue"]), u(g, {
          modelValue: l(_),
          "onUpdate:modelValue": d[4] || (d[4] = I => st(_) ? _.value = I : null),
          placeholder: "Type your message*",
          showCaption: !0,
          class: "index-contact-form__input",
          "is-invalid": l(k)
        }, null, 8, ["modelValue", "is-invalid"]), u(v, {
          onClicked: O,
          label: "Send",
          class: "form__button"
        })], 40, Ve)])])
      }
    }
  },
  qe = S(Ie, [
    ["__scopeId", "data-v-52a33813"]
  ]);
const Le = {
    class: "team-first"
  },
  Me = {
    class: "intro section"
  },
  Se = {
    class: "intro__heading intro__heading_1 text-h1"
  },
  Ae = {
    class: "intro__heading-title intro__heading-title_1",
    "data-anim-title": ""
  },
  He = {
    class: "intro__heading-title intro__heading-title_2 intro__centered",
    "data-anim-title": ""
  },
  je = {
    class: "intro__footer"
  },
  Oe = {
    class: "intro__coin --desktop"
  },
  Ee = {
    class: "intro__row"
  },
  Be = {
    class: "intro__heading-title intro__heading-title_3 text-h1"
  },
  We = ["innerHTML"],
  Fe = {
    class: "intro__heading-title intro__heading-title_4 text-h1"
  },
  De = {
    class: "intro__coin --tablet"
  },
  Ne = {
    class: "intro__heading-title intro__heading-title_5 intro__centered text-h1"
  },
  Ue = ["innerHTML"],
  ze = {
    class: "image"
  },
  Re = {
    class: "image__wrapper"
  },
  Qe = {
    class: "img-outer"
  },
  Ge = {
    class: "img-inner"
  },
  Je = ["src", "alt"],
  Ke = ["innerHTML"],
  Ye = {
    name: "TeamIntro"
  },
  Xe = Object.assign(Ye, {
    props: {
      titles: {
        type: Array,
        required: !0
      },
      description: {
        type: String,
        required: !0
      },
      intro: {
        type: Object,
        required: !0
      }
    },
    setup(s) {
      return (o, n) => {
        var m, a, c, _, h;
        const p = oe;
        return b(), y("div", Le, [t("div", Me, [t("div", Se, [t("span", Ae, T(s.titles[0]), 1), t("span", He, T(s.titles[1]), 1)]), t("div", je, [t("div", Oe, [u(p)]), t("div", Ee, [t("h1", Be, T(s.titles[2]), 1), t("div", {
          class: "capitalized text-p3 intro__text --desktop intro__centered",
          innerHTML: s.description
        }, null, 8, We), t("div", Fe, [lt(T(s.titles[3]) + " ", 1), t("div", De, [u(p)])])]), t("span", Ne, T(s.titles[4]), 1)])]), t("div", {
          class: "capitalized text-p3 intro__text --tablet intro__centered",
          innerHTML: s.description
        }, null, 8, Ue), t("div", ze, [t("div", Re, [t("div", Qe, [t("div", Ge, [t("img", {
          class: "image__img",
          src: (a = (m = s.intro) == null ? void 0 : m.photo) == null ? void 0 : a.url,
          alt: (_ = (c = s.intro) == null ? void 0 : c.photo) == null ? void 0 : _.alt
        }, null, 8, Je)])])]), t("div", {
          class: "image__caption text-s1",
          "data-anim-text": "",
          innerHTML: (h = s.intro) == null ? void 0 : h.caption
        }, null, 8, Ke)])])
      }
    }
  }),
  Ze = S(Xe, [
    ["__scopeId", "data-v-f5fa3152"]
  ]);
const ts = s => (E("data-v-06af9c9e"), s = s(), B(), s),
  es = {
    class: "team-slider section"
  },
  ss = {
    class: "team-slider__inner"
  },
  os = ["innerHTML"],
  ns = {
    class: "team-slider__control"
  },
  as = {
    class: "team-slider__progress"
  },
  is = {
    class: "team-slider__icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  ls = ts(() => t("circle", {
    class: "circle-inner",
    opacity: "0.1",
    cx: "8",
    cy: "8",
    r: "7.4",
    stroke: "#1E1E1E",
    "stroke-width": "1.2"
  }, null, -1)),
  cs = {
    class: "team-slider__progress-count text-t3"
  },
  _s = {
    class: "team-slider__progress-span"
  },
  rs = {
    class: "team-slider__invisible-count"
  },
  ds = {
    class: "team-slider__actions"
  },
  us = {
    name: "TeamSlider"
  },
  ps = Object.assign(us, {
    props: {
      quotes: {
        type: Array,
        required: !0
      }
    },
    setup(s) {
      const o = s;
      P.registerPlugin(Y);
      const n = $(1),
        p = $(null),
        m = $(null),
        a = $(null);
      let c = performance.now();
      const _ = $(1),
        h = $(!1),
        r = $(null);

      function w() {
        h.value || (h.value = !0, c = performance.now(), _.value = -1, A())
      }

      function k() {
        h.value || (h.value = !0, c = performance.now(), _.value = 1, A())
      }

      function e() {
        _.value === 1 ? n.value >= (o == null ? void 0 : o.quotes.length) ? n.value = 1 : n.value += 1 : n.value === 1 ? n.value = o == null ? void 0 : o.quotes.length : n.value -= 1
      }

      function A() {
        const f = new Promise(x => {
            P.to(".active.team-slider__quote .title-word__inner", {
              yPercent: -120,
              duration: .4,
              ease: M,
              stagger: .02,
              onComplete: () => {
                P.set(".team-slider__quote .title-word__inner", {
                  yPercent: -120
                }), x()
              }
            })
          }),
          d = new Promise(x => {
            P.to(".team-slider__author.active .split-line__inner", {
              yPercent: -120,
              duration: .4,
              ease: M,
              onComplete: () => {
                P.set(".team-slider__author .split-line__inner", {
                  yPercent: -120
                }), x()
              }
            })
          }),
          g = new Promise(x => {
            P.to(".team-slider__progress-span", {
              yPercent: -120,
              duration: .4,
              ease: M,
              onComplete: x
            })
          });
        Promise.all([f, d, g]).then(async () => {
          var v, V;
          e(), await j();
          const x = (V = (v = document.querySelector(".team-slider__quote.active")) == null ? void 0 : v.dataset) == null ? void 0 : V.height;
          P.to(m.value, {
            height: +x + 25,
            duration: .6,
            ease: M,
            onComplete: () => {
              Y.refresh()
            }
          }), P.fromTo(".active.team-slider__quote .title-word__inner", {
            yPercent: 120
          }, {
            yPercent: 0,
            duration: .4,
            ease: M,
            stagger: .02
          }), P.fromTo(".team-slider__author.active .split-line__inner", {
            yPercent: 120
          }, {
            yPercent: 0,
            duration: .4,
            ease: M
          }), P.fromTo(".team-slider__progress-span", {
            yPercent: 120
          }, {
            yPercent: 0,
            duration: .4,
            ease: M
          }), setTimeout(() => {
            h.value = !1
          }, 200)
        })
      }

      function i(f) {
        if (!a.value) return;
        const d = +(f - c) / 1e3;
        d >= 7 ? _.value === 1 ? k() : w() : a.value.style["stroke-dashoffset"] = -(d * 7 + 46) + "px", r.value = requestAnimationFrame(i)
      }
      async function O() {
        var d, g;
        await new Promise(x => setTimeout(x, 500)), p.value.forEach(x => {
          x.setAttribute("data-height", x.getBoundingClientRect().height)
        });
        const f = (g = (d = document.querySelector(".team-slider__quote.active")) == null ? void 0 : d.dataset) == null ? void 0 : g.height;
        m.value.style.height = +f + 24 + "px", await j(), Y.refresh()
      }
      return ct(async () => {
        await j(), O(), i()
      }), Jt(() => {
        cancelAnimationFrame(r.value)
      }), (f, d) => {
        const g = Kt,
          x = ne;
        return b(), y("div", es, [t("div", ss, [t("div", {
          class: "team-slider__inner-text",
          ref_key: "textContainer",
          ref: m
        }, [(b(!0), y(X, null, Z(s.quotes, (v, V) => (b(), y("div", {
          key: v.id,
          class: C(["team-slider__quote text-h3", {
            active: V + 1 === l(n)
          }]),
          ref_for: !0,
          ref_key: "slideText",
          ref: p,
          innerHTML: v == null ? void 0 : v.Quote
        }, null, 10, os))), 128))], 512), t("div", ns, [t("div", as, [(b(), y("svg", is, [ls, t("circle", {
          ref_key: "outerCircle",
          ref: a,
          class: "circle-outer",
          opacity: "1",
          cx: "8",
          cy: "8",
          r: "7.4",
          stroke: "#1E1E1E",
          "stroke-width": "1.2"
        }, null, 512)])), t("p", cs, [t("span", _s, T(l(n)), 1), t("span", rs, T(s.quotes.length), 1), lt(" / " + T(s.quotes.length), 1)])]), (b(!0), y(X, null, Z(s.quotes, (v, V) => (b(), y("div", {
          key: v.id,
          class: C(["team-slider__author text-t3", {
            active: V + 1 === l(n),
            hidden: !(v != null && v.Autor)
          }]),
          "data-anim-text": ""
        }, " — " + T(v == null ? void 0 : v.Autor), 3))), 128)), t("div", ds, [t("button", {
          class: "btn-prev",
          onClick: w
        }, [u(g)]), t("button", {
          class: "btn-next",
          onClick: k
        }, [u(x)])])])])])
      }
    }
  }),
  ms = S(ps, [
    ["__scopeId", "data-v-06af9c9e"]
  ]);
const kt = s => (E("data-v-d39ecaec"), s = s(), B(), s),
  vs = {
    class: "leaders section"
  },
  hs = kt(() => t("h2", {
    class: "leaders__title --desktop text-h3",
    "data-rotate-title": ""
  }, " Our Leaders ", -1)),
  fs = {
    class: "leaders__list"
  },
  gs = kt(() => t("h2", {
    class: "leaders__title --tablet text-h3",
    "data-rotate-title": ""
  }, " Our Leaders ", -1)),
  xs = ["onClick"],
  bs = {
    class: "leaders__item-img img-outer"
  },
  ys = {
    class: "img-inner"
  },
  $s = ["src"],
  ws = {
    class: "leaders__name text-h5",
    "data-rotate-title": ""
  },
  Ts = {
    class: "leaders__position text-t3",
    "data-anim-text": ""
  },
  Ps = {
    name: "TeamLeaders"
  },
  ks = Object.assign(Ps, {
    props: {
      members: {
        type: Array,
        required: !0
      }
    },
    emits: ["openPopup"],
    setup(s, {
      emit: o
    }) {
      var c;
      const n = s,
        m = nt().public.baseUrl,
        a = (c = n.members) == null ? void 0 : c.filter(_ => _ == null ? void 0 : _.To_Leader_Block);
      return (_, h) => (b(), y("section", vs, [hs, t("div", fs, [gs, (b(!0), y(X, null, Z(l(a), r => {
        var w, k, e;
        return b(), y("button", {
          onClick: A => _.$emit("openPopup", r),
          class: "leaders__item",
          key: r.id
        }, [t("div", bs, [t("div", ys, [t("img", {
          class: "leaders__item-image",
          src: l(m) + ((e = (k = (w = r == null ? void 0 : r.Photo) == null ? void 0 : w.data) == null ? void 0 : k.attributes) == null ? void 0 : e.url),
          alt: "leader"
        }, null, 8, $s)])]), t("div", ws, T(r == null ? void 0 : r.Name), 1), t("div", Ts, T(r == null ? void 0 : r.Position), 1)], 8, xs)
      }), 128))])]))
    }
  }),
  Cs = S(ks, [
    ["__scopeId", "data-v-d39ecaec"]
  ]);
const Vs = s => (E("data-v-2120f962"), s = s(), B(), s),
  Is = {
    class: "team"
  },
  qs = Vs(() => t("h2", {
    class: "team__title text-h3",
    "data-rotate-title": ""
  }, "Our Team", -1)),
  Ls = {
    name: "TeamTeam"
  },
  Ms = Object.assign(Ls, {
    props: {
      members: {
        type: Array,
        required: !0
      }
    },
    emits: ["openPopup"],
    setup(s, {
      emit: o
    }) {
      return (n, p) => {
        const m = Wt;
        return b(), y("section", Is, [qs, u(m, {
          team: s.members,
          onOpenPopup: p[0] || (p[0] = a => n.$emit("openPopup", a))
        }, null, 8, ["team"])])
      }
    }
  }),
  Ss = S(Ms, [
    ["__scopeId", "data-v-2120f962"]
  ]);
const _t = s => (E("data-v-3442bfcc"), s = s(), B(), s),
  As = {
    class: "vacancies"
  },
  Hs = _t(() => t("h2", {
    class: "vacancies__title text-h1"
  }, "Career Opportunities", -1)),
  js = {
    class: "vacancies__list"
  },
  Os = _t(() => t("div", {
    class: "vacancies__heading"
  }, [t("div", {
    class: "vacancies__slot slot slot-1 text-t4"
  }, "Position"), t("div", {
    class: "vacancies__slot slot slot-2 text-t4"
  }, "Location"), t("div", {
    class: "vacancies__slot slot slot-3 text-t4"
  })], -1)),
  Es = {
    class: "vacancies__ul"
  },
  Bs = ["onClick"],
  Ws = {
    class: "vacancies__position slot slot-1 text-h6"
  },
  Fs = {
    class: "vacancies__location slot slot-2 text-t3"
  },
  Ds = _t(() => t("div", {
    class: "vacancies__salary slot slot-3 text-t3"
  }, [t("div", {
    class: "vacancies__arrow-wrap"
  }, [t("img", {
    src: ie,
    class: "vacancies__arrow"
  })])], -1)),
  Ns = {
    __name: "TeamVacancies",
    props: {
      vacancies: Array
    },
    setup(s) {
      return (o, n) => (b(), y("section", As, [Hs, t("div", js, [Os, t("div", Es, [(b(!0), y(X, null, Z(s.vacancies, p => {
        var m, a;
        return b(), y("li", {
          onClick: c => o.$emit("open-popup", p),
          class: "vacancies__item",
          key: p.id
        }, [t("div", Ws, T((m = p == null ? void 0 : p.attributes) == null ? void 0 : m.Name), 1), t("div", Fs, T((a = p == null ? void 0 : p.attributes) == null ? void 0 : a.Location), 1), Ds], 8, Bs)
      }), 128))])])]))
    }
  },
  Us = S(Ns, [
    ["__scopeId", "data-v-3442bfcc"]
  ]);
const zs = s => (E("data-v-6b0da5fe"), s = s(), B(), s),
  Rs = {
    class: "team-backstage backstage"
  },
  Qs = zs(() => t("h2", {
    class: "backstage__title text-h3",
    "data-rotate-title": ""
  }, "Backstage", -1)),
  Gs = {
    name: "TeamBackstage"
  },
  Js = Object.assign(Gs, {
    props: {
      data: {
        type: Array,
        required: !0
      }
    },
    setup(s) {
      var a, c;
      const o = s,
        n = nt(),
        p = (a = n == null ? void 0 : n.public) == null ? void 0 : a.baseUrl,
        m = (c = o.data) == null ? void 0 : c.map(_ => {
          var h, r, w;
          return {
            id: _.id,
            image: p + ((w = (r = (h = _ == null ? void 0 : _.Photo) == null ? void 0 : h.data[0]) == null ? void 0 : r.attributes) == null ? void 0 : w.url),
            caption: _ == null ? void 0 : _.Text
          }
        });
      return (_, h) => {
        const r = le;
        return b(), y("section", Rs, [Qs, u(r, {
          "no-hover": "",
          "container-selector": ".team-backstage.backstage",
          projects: l(m)
        }, null, 8, ["projects"])])
      }
    }
  }),
  Ks = S(Js, [
    ["__scopeId", "data-v-6b0da5fe"]
  ]);
const Ys = {
    class: "list section"
  },
  Xs = {
    class: "list__tabs tabs"
  },
  Zs = {
    class: "list-inner"
  },
  to = ["data-idx"],
  eo = {
    name: "TeamList"
  },
  so = Object.assign(eo, {
    setup(s) {
      const o = $(1);
      Yt(() => o.value, () => {
        o.value === 2 ? xt.to(".list-li, .list-ul", {
          marginLeft: 0,
          duration: .8,
          ease: M
        }) : xt.to(".list-li, .list-ul", {
          marginLeft: "auto",
          duration: .8,
          ease: M
        })
      });
      const n = $([{
          id: 1,
          idx: 1,
          name: "Travel to learn relentlessly",
          dont: "Impossible deadlines",
          img: "/img/works/item-1.jpg"
        }, {
          id: 2,
          idx: 2,
          name: "Value relationships",
          dont: "Work really really late",
          img: "/img/works/item-2.jpg"
        }, {
          id: 3,
          idx: 3,
          name: "Love Food",
          dont: "Sacrifice quality for profit",
          img: "/img/works/item-1.jpg"
        }, {
          id: 4,
          idx: 4,
          dont: "Resist street tacos",
          name: "Design for the concept, not for us!",
          img: "/img/works/item-2.jpg"
        }, {
          id: 5,
          idx: 5,
          name: "Hustle",
          dont: "Follow trends",
          img: "/img/works/item-1.jpg"
        }, {
          id: 6,
          idx: 6,
          dont: "Fax",
          name: "Exceed expectations",
          img: "/img/works/item-2.jpg"
        }, {
          id: 7,
          idx: 7,
          dont: "Work for free",
          name: "Value relationships",
          img: "/img/works/item-1.jpg"
        }, {
          id: 8,
          idx: 8,
          dont: "Egos",
          name: "World-class design",
          img: "/img/works/item-2.jpg"
        }]),
        p = $([...n.value, ...n.value, ...n.value, ...n.value]);
      return ct(() => {
        window.innerWidth <= 1023 && (p.value = n.value)
      }), (m, a) => (b(), y("div", Ys, [t("div", Xs, [t("div", {
        class: C(["tabs__left", {
          active: l(o) === 1
        }])
      }, [t("button", {
        class: C(["tabs__tab text-t2 tab", {
          active: l(o) === 1
        }]),
        onClick: a[0] || (a[0] = c => o.value = 1)
      }, " What we do ", 2), t("button", {
        class: C(["tabs__tab text-t2 tab", {
          active: l(o) === 2
        }]),
        onClick: a[1] || (a[1] = c => o.value = 2)
      }, " What we don't ", 2)], 2), t("div", {
        class: C(["tabs__right", {
          active: l(o) === 2
        }])
      }, [t("button", {
        class: C(["tabs__tab text-t2 tab", {
          active: l(o) === 1
        }]),
        onClick: a[2] || (a[2] = c => o.value = 1)
      }, " What we do ", 2), t("button", {
        class: C(["tabs__tab text-t2 tab", {
          active: l(o) === 2
        }]),
        onClick: a[3] || (a[3] = c => o.value = 2)
      }, " What we don't ", 2)], 2)]), t("div", Zs, [t("div", {
        class: C(["list-ul", [l(o) === 2 ? "left" : "right"]])
      }, [(b(!0), y(X, null, Z(l(p), (c, _) => (b(), y("div", {
        class: C(["list-li", {
          shifted: l(o) === 2
        }]),
        key: c.id
      }, [t("div", {
        class: C(["hover-link", {
          shifted: l(o) === 2
        }])
      }, [t("p", {
        class: C(["text-h3 list-text", {
          crossed: l(o) === 2
        }]),
        "data-idx": `(${c.idx})`
      }, T(l(o) === 1 ? c.name : c.dont), 11, to)], 2)], 2))), 128))], 2)])]))
    }
  }),
  oo = S(so, [
    ["__scopeId", "data-v-10b27fcb"]
  ]);
const no = {
    class: "page"
  },
  ao = {
    class: "team-page move-loader main"
  },
  io = {
    __name: "team",
    async setup(s) {
      var F, D, N, U, z, R, Q, G, J, I, rt, dt, ut, pt, mt, vt, ht, ft;
      let o, n;
      P.registerPlugin(Y, bt);
      const m = nt().public.baseUrl,
        a = $(!1),
        c = $(!1),
        _ = it("personPopupInfo", () => ({})),
        h = it("vacancyPopupInfo", () => {});
      Xt("lenis");
      const r = ([o, n] = yt(() => $t("team", () => $fetch(m + "/api/team?populate=deep,4"))), o = await o, n(), o),
        w = ([o, n] = yt(() => $t("projects", () => $fetch(m + "/api/one-projects?populate=deep,2&pagination[page]=1&pagination[pageSize]=100"))), o = await o, n(), o),
        k = (D = (F = w == null ? void 0 : w.data) == null ? void 0 : F.value) == null ? void 0 : D.data,
        e = (z = (U = (N = r == null ? void 0 : r.data) == null ? void 0 : N.value) == null ? void 0 : U.data) == null ? void 0 : z.attributes,
        A = (R = e == null ? void 0 : e.Seo_Block) == null ? void 0 : R.metaTitle;
      Zt(e == null ? void 0 : e.Seo_Block);
      const i = {
        titles: [e == null ? void 0 : e.Title1, e == null ? void 0 : e.Title2, e == null ? void 0 : e.Title3, e == null ? void 0 : e.Title4, e == null ? void 0 : e.Title5],
        shortDescription: e == null ? void 0 : e.Short_Description,
        intro: {
          photo: {
            url: m + ((I = (J = (G = (Q = e == null ? void 0 : e.Photo_with_text) == null ? void 0 : Q.Photo) == null ? void 0 : G.data) == null ? void 0 : J.attributes) == null ? void 0 : I.url),
            alt: (pt = (ut = (dt = (rt = e == null ? void 0 : e.Photo_with_text) == null ? void 0 : rt.Photo) == null ? void 0 : dt.data) == null ? void 0 : ut.attributes) == null ? void 0 : pt.alternativeText
          },
          caption: (mt = e == null ? void 0 : e.Photo_with_text) == null ? void 0 : mt.Text
        },
        quotes: e == null ? void 0 : e.Add_Quote,
        members: e == null ? void 0 : e.Add_Member,
        backstage: e == null ? void 0 : e.Add_Backstage,
        dos: e == null ? void 0 : e.Add_What_We_Do,
        donts: e == null ? void 0 : e.Add_What_We_Dont,
        seo: {
          title: (vt = e == null ? void 0 : e.Seo_Block) == null ? void 0 : vt.metaTitle,
          description: (ht = e == null ? void 0 : e.Seo_Block) == null ? void 0 : ht.metaDescription
        },
        vacancies: (ft = e == null ? void 0 : e.vacancies) == null ? void 0 : ft.data
      };

      function O() {
        var K, L;
        if (((L = (K = document == null ? void 0 : document.body) == null ? void 0 : K.getBoundingClientRect()) == null ? void 0 : L.width) <= 1023) return;
        Y.refresh();
        const H = P.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: ".team-first",
            start: "bottom bottom",
            end: "+=300%",
            scrub: !0,
            pin: !0
          }
        });
        H.set(".team-first > .image > .image__wrapper", {
          left: "50%",
          xPercent: -50
        }).to(".team-first > .image > .image__wrapper", {
          top: "50vh",
          yPercent: -50
        }).to(".team-first > .image > .image__wrapper", {
          width: "calc(100% - 64px)",
          height: "calc(100vh - 64px)",
          ease: Pt
        }), H.from(".team-first > .image .image__img", {
          scale: 1.5,
          ease: Pt
        }, "<")
      }
      async function f() {
        const q = P.utils.toArray("[data-rotate-title]"),
          H = P.utils.toArray("[data-anim-text]");
        at({
          el: ".intro__heading-title",
          delay: .5
        }), at({
          el: ".team-slider__quote",
          splitType: "words"
        }), q.forEach(L => {
          at({
            el: L
          })
        }), H.forEach(L => se({
          el: L
        })), await j(), P.utils.toArray(".team-slider__quote .title-word").forEach(L => {
          new bt(L, {
            type: "word",
            wordsClass: "title-word__inner"
          })
        })
      }

      function d() {
        window.innerWidth <= 1023 || P.fromTo(".list-li", {
          y: "-350vh"
        }, {
          y: "0vh",
          ease: "none",
          scrollTrigger: {
            trigger: ".list.section",
            start: "top bottom",
            end: "bottom top",
            scrub: .5
          }
        })
      }

      function g() {
        if (window.innerWidth > 1023) return;
        const q = document.querySelector(".list.section"),
          H = q.querySelector(".list-inner");
        q.style.height = `${H.scrollHeight}px`
      }

      function x() {
        O(), g(), f(), te({
          selector: ".img-parallax"
        }), ee({
          el: ".intro__text",
          delay: 1
        }), d()
      }
      async function v(q) {
        _.value = q, await j(), document.body.style.overflow = "hidden", a.value = !0, wt({
          wrapper: ".popup",
          modal: ".modal"
        })
      }
      async function V(q) {
        h.value = q, await j(), document.body.style.overflow = "hidden", c.value = !0, wt({
          wrapper: ".vacancy-popup.popup",
          modal: ".vacancy-popup .modal",
          from: "bottom"
        })
      }

      function tt() {
        Tt({
          wrapper: ".popup",
          modal: ".modal",
          onComplete: () => {
            document.body.style.overflow = "", a.value = !1
          }
        })
      }

      function et() {
        Tt({
          wrapper: ".popup.vacancy-popup",
          modal: ".vacancy-popup .modal",
          to: "bottom",
          onComplete: () => {
            document.body.style.overflow = "", c.value = !1
          }
        })
      }
      return ct(async () => {
        await j(), x()
      }), (q, H) => {
        const K = Bt,
          L = Et,
          Ct = Ft,
          gt = Dt,
          Vt = qe,
          It = Ze,
          qt = ms,
          Lt = Cs,
          Mt = Ss,
          St = Us,
          At = Ks,
          Ht = oo,
          jt = ae,
          Ot = ce;
        return b(), y("div", no, [u(L, null, {
          default: ot(() => [u(K, null, {
            default: ot(() => [lt(T(l(A)), 1)]),
            _: 1
          })]),
          _: 1
        }), u(gt, {
          isOpen: l(a)
        }, {
          default: ot(() => [u(Ct, {
            onClosePopup: tt
          })]),
          _: 1
        }, 8, ["isOpen"]), u(gt, {
          class: "vacancy-popup",
          position: "right-bottom",
          "is-open": l(c)
        }, {
          default: ot(() => [u(Vt, {
            onClosePopup: et
          })]),
          _: 1
        }, 8, ["is-open"]), t("main", ao, [u(It, {
          intro: i == null ? void 0 : i.intro,
          description: i == null ? void 0 : i.shortDescription,
          titles: i == null ? void 0 : i.titles
        }, null, 8, ["intro", "description", "titles"]), u(qt, {
          quotes: i == null ? void 0 : i.quotes
        }, null, 8, ["quotes"]), u(Lt, {
          members: i == null ? void 0 : i.members,
          onOpenPopup: v
        }, null, 8, ["members"]), u(Mt, {
          members: i == null ? void 0 : i.members,
          class: "team-page__team",
          onOpenPopup: v
        }, null, 8, ["members"]), u(St, {
          onOpenPopup: V,
          vacancies: i == null ? void 0 : i.vacancies
        }, null, 8, ["vacancies"]), u(At, {
          data: i == null ? void 0 : i.backstage
        }, null, 8, ["data"]), u(Ht, {
          dos: i == null ? void 0 : i.dos,
          donts: i == null ? void 0 : i.donts
        }, null, 8, ["dos", "donts"])]), u(jt, {
          projects: l(k)
        }, null, 8, ["projects"]), u(Ot)])
      }
    }
  },
  bo = S(io, [
    ["__scopeId", "data-v-f9fa041e"]
  ]);
export {
  bo as
  default
};