/* https://grape.ua/_nuxt/team.DTr1zdYE.js */
import {
  _ as $e
} from "./AnimCircles.vue.eKAmF3gL.js";
import {
  _ as E,
  D as Ve,
  g as _e,
  c as O,
  p as pe,
  q as ge,
  r as de,
  t as xe,
  b as Ce,
  l as Pe,
  y as Fe,
  a as ke,
  z as we,
  A as Te,
  B as qe,
  x as Le,
  C as je,
  e as me,
  f as Ie,
  s as Be,
  h as Ne,
  i as Ae
} from "./entry.DN75vySF.js";
import {
  r as Ue,
  C as se,
  M as r,
  N as g,
  U as e,
  J as A,
  $ as W,
  W as l,
  X as be,
  Y as ye,
  j as q,
  L as x,
  u as t,
  ad as He,
  a as S,
  b as ue,
  Z as Me,
  V as oe,
  _ as G,
  k as T,
  R as F,
  Q as re,
  ae as De,
  af as Je,
  a3 as ce,
  q as ze,
  x as z,
  aa as We,
  o as Ee
} from "./swiper-vue.BTZulNLT.js";
import {
  g as le
} from "./index.BfwNHAfF.js";
import {
  s as Oe,
  _ as Re
} from "./setPageMeta.BIChswHP.js";
import {
  u as Xe
} from "./base.Cowcg-OE.js";
const Se = d => (be("data-v-6c77a474"), d = d(), ye(), d),
  Ze = {
    class: "game"
  },
  Ge = {
    class: "game__wrap"
  },
  Qe = Se(() => e("p", {
    class: "text-p3 game__text"
  }, "Built for people who love:", -1)),
  Ye = Se(() => e("p", {
    class: "title-h1 game__text"
  }, "growing", -1)),
  Ke = {
    class: "text-p1 game__number"
  },
  ve = 4,
  et = {
    __name: "Game",
    setup(d) {
      Ue({
        x: 0,
        y: 0,
        isActive: !1
      });
      const n = {
        x: 0
      };
      return se(() => {
        document.querySelectorAll(".game__item").forEach(s => {
          Ve.create(s, {
            type: "x",
            cursor: !1,
            activeCursor: !1,
            onDragStart: o => {
              n.x = o.clientX
            },
            onDrag: o => {
              _e.to(s, {
                duration: .15,
                rotate: n.x > o.clientX ? -15 : 15
              })
            },
            onDragEnd: o => {
              _e.to(s, {
                x: n.x > o.clientX ? -1e3 : 1e3
              })
            }
          })
        })
      }), (s, o) => (r(), g("div", Ze, [e("div", Ge, [(r(), g(A, null, W(ve, i => e("div", {
        key: i,
        class: "game__item"
      }, [Qe, Ye, e("p", Ke, l(i) + " / " + l(ve), 1)])), 64))])]))
    }
  },
  tt = E(et, [
    ["__scopeId", "data-v-6c77a474"]
  ]),
  st = {
    class: "card-photo"
  },
  ot = ["src", "alt"],
  at = q({
    __name: "CardPhoto",
    props: {
      img: {},
      alt: {}
    },
    setup(d) {
      return (n, s) => (r(), g("div", st, [e("img", {
        src: n.img,
        class: "card-photo__img",
        alt: n.alt
      }, null, 8, ot)]))
    }
  }),
  nt = {
    class: "team-first"
  },
  it = {
    class: "team-first__content"
  },
  ct = {
    style: {
      display: "none"
    }
  },
  lt = {
    class: "title-h0 team-first__title"
  },
  rt = {
    class: "team-first__center"
  },
  _t = {
    class: "text-p1 team-first__text"
  },
  pt = {
    class: "title-h0 team-first__title"
  },
  mt = {
    class: "text-p3 team-first__jump"
  },
  ut = {
    class: "team-first__photos",
    style: {
      opacity: 0
    }
  },
  dt = {
    class: "team-first__photo"
  },
  ht = q({
    __name: "First",
    props: {
      description: {},
      photos: {},
      creativePhotos: {},
      pageName: {}
    },
    setup(d) {
      const n = O("is-creative"),
        {
          $lenis: s
        } = de();

      function o() {
        s.scrollTo("#team-vacancy-section")
      }
      return (i, $) => {
        const _ = $e,
          b = ge,
          f = tt,
          u = at;
        return r(), g("section", nt, [e("div", it, [e("h1", ct, l(i.$t("team.title.first")) + " " + l(i.$t("team.title.second")), 1), e("p", lt, l(i.$t("team.title.first")), 1), x(_, {
          class: "team-first__icon team-first__icon-1"
        }), e("div", rt, [e("p", _t, l(i.description), 1), x(b, {
          onClick: o,
          text: i.$t("btn.explore"),
          class: "team-first__btn"
        }, null, 8, ["text"])]), x(_, {
          class: "team-first__icon team-first__icon-2"
        }), e("p", pt, l(i.$t("team.title.second")), 1), e("p", mt, l(i.$t("btn.scroll")) + " ↓", 1), x(f, {
          class: "team-first__game"
        }), e("div", ut, [(r(!0), g(A, null, W(i.photos.length, c => (r(), g("div", dt, [x(u, {
          img: t(n) ? i.creativePhotos[(c - 1) % i.photos.length] : i.photos[(c - 1) % i.photos.length],
          alt: `${i.pageName}, ${i.$t("photo_word")} ${("photoIndex"in i?i.photoIndex:t(pe))(1500,c)}`
        }, null, 8, ["img", "alt"])]))), 256))])]), e("div", {
          style: He({
            height: `${(i.photos.length-1)*60}vh`
          })
        }, null, 4)])
      }
    }
  }),
  vt = E(ht, [
    ["__scopeId", "data-v-4e659564"]
  ]),
  ft = {
    class: "team-value"
  },
  $t = {
    class: "text-p3 team-value__subtitle"
  },
  gt = ["innerHTML"],
  kt = {
    name: "TeamValue"
  },
  bt = q({
    ...kt,
    props: {
      description: {}
    },
    setup(d) {
      return (n, s) => (r(), g("div", ft, [e("h4", $t, l(n.$t("team.value")), 1), e("div", {
        class: "text-p1 team-value__text",
        innerHTML: n.description
      }, null, 8, gt)]))
    }
  }),
  yt = E(bt, [
    ["__scopeId", "data-v-18ce4811"]
  ]),
  St = {
    class: "team-vacancy",
    id: "team-vacancy-section"
  },
  Vt = {
    class: "title-h1t team-vacancy__title"
  },
  xt = {
    class: "team-vacancy__info"
  },
  Ct = {
    class: "text-p3 team-join__info-title"
  },
  Pt = e("a", {
    href: "mailto:hr@grape.ua",
    class: "text-p1 link-2 team-join__info-link"
  }, "hr@grape.ua", -1),
  Ft = {
    class: "vacancies"
  },
  wt = {
    class: "vacancies__header"
  },
  Tt = {
    class: "text-p3 vacancies__head"
  },
  qt = {
    class: "text-p3 vacancies__head"
  },
  Lt = {
    class: "text-p3 vacancies__head"
  },
  jt = {
    class: "vacancies__body"
  },
  It = ["onClick"],
  Bt = {
    class: "vacancies__position"
  },
  Nt = {
    class: "text-p1 link-2"
  },
  At = {
    class: "vacancies__type"
  },
  Ut = {
    class: "text-p1 link-2"
  },
  Ht = {
    class: "vacancies__location"
  },
  Mt = {
    class: "text-p1 link-2"
  },
  Dt = e("div", {
    class: "vacancies__arrow"
  }, [e("p", {
    class: "text-p1 link-2"
  }, [e("span", null, "↓")])], -1),
  Jt = {
    class: "vacancies__content",
    "data-lenis-prevent": ""
  },
  zt = {
    class: "vacancies__wrap"
  },
  Wt = {
    class: "title-h1 vacancies__title"
  },
  Et = {
    class: "vacancies__info"
  },
  Ot = {
    class: "vacancies__wrap-description"
  },
  Rt = {
    class: "vacancies__wrap-title text-p3"
  },
  Xt = {
    class: "vacancies__wrap-text"
  },
  Zt = ["innerHTML"],
  Gt = {
    key: 0,
    class: "vacancies__wrap-ca"
  },
  Qt = e("a", {
    href: "mailto:hr@grape.ua"
  }, "hr@grape.ua", -1),
  Yt = q({
    __name: "Vacancy",
    props: {
      vacancies: {},
      title: {}
    },
    emits: ["selectVacancy"],
    setup(d, {
      emit: n
    }) {
      const s = d,
        o = S(null);
      S("");
      const i = c => {
          var p, a, h, m, v, y, k, L, j;
          c.target.classList.contains("vacancies__position") && ((p = document.querySelector(".vacancies")) == null || p.classList.add("vacancies--position"), (a = document.querySelector(".vacancies")) == null || a.classList.remove("vacancies--type"), (h = document.querySelector(".vacancies")) == null || h.classList.remove("vacancies--location")), c.target.classList.contains("vacancies__type") && ((m = document.querySelector(".vacancies")) == null || m.classList.remove("vacancies--position"), (v = document.querySelector(".vacancies")) == null || v.classList.add("vacancies--type"), (y = document.querySelector(".vacancies")) == null || y.classList.remove("vacancies--location")), c.target.classList.contains("vacancies__location") && ((k = document.querySelector(".vacancies")) == null || k.classList.remove("vacancies--position"), (L = document.querySelector(".vacancies")) == null || L.classList.remove("vacancies--type"), (j = document.querySelector(".vacancies")) == null || j.classList.add("vacancies--location"))
        },
        $ = () => {
          var c, p, a;
          (c = document.querySelector(".vacancies")) == null || c.classList.remove("vacancies--position"), (p = document.querySelector(".vacancies")) == null || p.classList.remove("vacancies--type"), (a = document.querySelector(".vacancies")) == null || a.classList.remove("vacancies--location")
        },
        _ = c => {
          o.value === c ? o.value = null : o.value = c
        };
      ue(o, (c, p) => {
        window.innerWidth >= 1200 ? (p !== null && le.to(`.vacancies__item:nth-child(${p+1}) .vacancies__content`, {
          height: 0
        }), c !== null && le.to(`.vacancies__item:nth-child(${c+1}) .vacancies__content`, {
          height: "auto"
        })) : (p !== null && le.fromTo(`.vacancies__item:nth-child(${p+1}) .vacancies__content`, {
          opacity: 1
        }, {
          opacity: 0
        }), c !== null && le.fromTo(`.vacancies__item:nth-child(${c+1}) .vacancies__content`, {
          opacity: 0
        }, {
          opacity: 1
        }))
      });
      const {
        $lenis: b
      } = de();
      ue(o, c => {
        window.innerWidth >= 1200 || (c === null ? b.start() : b.stop())
      });
      const f = O("join-us-form-popup");

      function u(c) {
        n("selectVacancy", c), f.value = !0
      }
      return (c, p) => {
        const a = xe,
          h = ge;
        return r(), g("section", St, [e("h2", Vt, l(s.title), 1), e("div", xt, [e("p", Ct, l(c.$t("drop")), 1), Pt]), e("div", Ft, [e("div", wt, [e("h5", Tt, l(c.$t("team.join.position")), 1), e("h5", qt, l(c.$t("team.join.type")), 1), e("h5", Lt, l(c.$t("team.join.location")), 1)]), e("div", jt, [(r(!0), g(A, null, W(s.vacancies, (m, v) => (r(), g("div", {
          key: m.position,
          class: Me(["vacancies__item", {
            active: t(o) === v
          }]),
          onMousemove: i,
          onMouseleave: $
        }, [e("div", {
          onClick: y => _(v),
          class: "vacancies__top"
        }, [e("div", Bt, [e("h4", Nt, l(m.position), 1)]), e("div", At, [e("p", Ut, l(m.type), 1)]), e("div", Ht, [e("p", Mt, l(m.location), 1)]), Dt], 8, It), e("div", Jt, [e("div", zt, [e("h5", Wt, l(m.position), 1), x(a, {
          onClick: p[0] || (p[0] = y => o.value = null),
          class: "vacancies__close"
        }), e("div", Et, [e("h5", null, l(m.location), 1), e("h5", null, l(m.position), 1)]), e("p", Ot, l(m.description), 1), (r(!0), g(A, null, W(m.blocks, (y, k) => (r(), g(A, null, [e("div", Rt, l(y.block.title), 1), e("div", Xt, [e("div", {
          innerHTML: y.block.description
        }, null, 8, Zt), k === m.blocks.length - 1 ? (r(), g("p", Gt, [oe(l(c.$t("team.ca_text")) + ": ", 1), Qt])) : G("", !0)])], 64))), 256)), x(h, {
          onClick: () => u(m.position),
          text: c.$t("team.ca_button_text"),
          class: "vacancies__wrap-ca-button"
        }, null, 8, ["onClick", "text"])])])], 34))), 128))])]), e("button", {
          class: "title-h1t team-vacancy__link",
          onClick: p[1] || (p[1] = () => u(""))
        }, [e("span", null, l(c.$t("join")), 1)])])
      }
    }
  }),
  Kt = {
    class: "team-image"
  },
  es = ["src", "alt"],
  ts = q({
    __name: "Image",
    props: {
      photo: {},
      alt: {}
    },
    setup(d) {
      const n = d;
      return (s, o) => (r(), g("section", Kt, [e("img", {
        src: n.photo ?? "",
        class: "team-image__img",
        alt: s.alt
      }, null, 8, es)]))
    }
  }),
  ss = {
    class: "person-card"
  },
  os = {
    class: "person-card__image"
  },
  as = ["src", "alt"],
  ns = {
    class: "person-card__socials"
  },
  is = ["href"],
  cs = {
    class: "link-2 link-2--light T6"
  },
  ls = {
    class: "person-card__content"
  },
  rs = {
    class: "text-p1 person-card__name"
  },
  _s = {
    class: "text-p1 person-card__position"
  },
  ps = q({
    __name: "PersonCard",
    props: {
      name: {},
      position: {},
      photo: {},
      alt: {},
      creativePhoto: {},
      socials: {}
    },
    setup(d) {
      const n = O("is-creative"),
        s = {
          Instagram: "In",
          LinkedIn: "Li",
          Facebook: "Fb",
          Vimeo: "Vi",
          Behance: "Be"
        };
      return (o, i) => (r(), g("div", ss, [e("div", os, [e("img", {
        class: "person-card__img",
        src: t(n) ? o.creativePhoto : o.photo,
        alt: o.alt
      }, null, 8, as), e("ul", ns, [(r(!0), g(A, null, W(o.socials, ($, _) => (r(), g("li", null, [e("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: $.social_link
      }, [e("span", cs, l(s[$.social_name]), 1)], 8, is)]))), 256))])]), e("div", ls, [e("h3", rs, l(o.name), 1), e("p", _s, l(o.position), 1)])]))
    }
  }),
  ms = E(ps, [
    ["__scopeId", "data-v-dacdfeba"]
  ]),
  us = {
    class: "person-card"
  },
  ds = {
    class: "person-card__image"
  },
  hs = ["src", "alt"],
  vs = {
    class: "text-p3 person-card__name"
  },
  fs = {
    class: "text-p3 person-card__position"
  },
  $s = q({
    __name: "PersonCardSmall",
    props: {
      name: {},
      position: {},
      photo: {},
      alt: {},
      creativePhoto: {},
      socials: {}
    },
    setup(d) {
      const n = O("is-creative");
      return (s, o) => (r(), g("div", us, [e("div", ds, [e("img", {
        class: "person-card__img",
        src: t(n) ? s.creativePhoto : s.photo,
        alt: s.alt
      }, null, 8, hs)]), e("h3", vs, l(s.name), 1), e("p", fs, l(s.position), 1)]))
    }
  }),
  gs = E($s, [
    ["__scopeId", "data-v-191891cc"]
  ]),
  ks = {
    class: "team-persons"
  },
  bs = ["innerHTML"];
const ys = e("div", null, null, -1),
  Ss = {
    class: "H1 H1-link team-persons-last__count"
  },
  Vs = {
    class: "text-p3 team-persons-last__bottom"
  },
  xs = {
    key: 1,
    class: "team-persons__list"
  },
  Cs = {
    class: "T6"
  },
  Ps = {
    class: "link-2 link-2--light"
  },
  Fs = e("span", {
    class: "link-2 link-2--light"
  }, "↑", -1),
  ws = q({
    __name: "Persons",
    props: {
      title: {},
      team: {},
      pageName: {}
    },
    setup(d) {
      const {
        title: n = "",
        team: s = []
      } = d, {
        showCursor: o,
        hideCursor: i
      } = Ce(), $ = S(!0), _ = S(4), b = T(() => s.slice(0, _.value));
      return se(() => {
        window.innerWidth < 1200 && (_.value = 1)
      }), (f, u) => {
        const c = $e,
          p = ms,
          a = De,
          h = Je,
          m = gs;
        return r(), g("section", ks, [x(c, {
          class: "team-persons__icon"
        }), e("h1", {
          class: "title-h1t team-persons__title",
          innerHTML: f.title
        }, null, 8, bs), t($) ? (r(), F(h, {
          key: 0,
          spaceBetween: 8,
          breakpoints: {
            1200: {
              spaceBetween: 8,
              slidesPerView: 3.5
            }
          },
          grabCursor: !1,
          class: "team-persons__swiper"
        }, {
          default: re(() => [(r(!0), g(A, null, W(t(b), (v, y) => (r(), F(a, {
            key: y,
            "data-cursor": "#C9F7CA",
            "data-cursor-text": f.$t("drag"),
            onPointerenter: u[0] || (u[0] = k => t(o)(f.$t("drag"), "#C9F7CA")),
            onPointerleave: t(i)
          }, {
            default: re(() => [x(p, {
              name: v.name,
              position: v.position,
              photo: v.photo,
              "creative-photo": v.creative_photo,
              socials: v.social_block.map(k => k.team_member),
              alt: `${f.pageName}, ${f.$t("photo_word")} ${("photoIndex"in f?f.photoIndex:t(pe))(1600,y)}`
            }, null, 8, ["name", "position", "photo", "creative-photo", "socials", "alt"])]),
            _: 2
          }, 1032, ["data-cursor-text", "onPointerleave"]))), 128)), x(a, {
            tag: "button",
            onClick: u[1] || (u[1] = v => $.value = !1),
            class: "team-persons-last H1-link-hover-target"
          }, {
            default: re(() => [G("", !0), ys, e("h4", Ss, l(f.$t("team.more_text")), 1), e("p", Vs, l(f.$t("team.more_less_description")), 1)]),
            _: 1
          })]),
          _: 1
        })) : (r(), g("div", xs, [(r(!0), g(A, null, W(f.team, (v, y) => (r(), F(m, {
          key: y,
          name: v.name,
          photo: v.photo,
          "creative-photo": v.creative_photo,
          position: v.position,
          socials: v.social_block.map(k => k.team_member),
          alt: `${f.pageName}, ${f.$t("photo_word")} ${("photoIndex"in f?f.photoIndex:t(pe))(1700,y)}`
        }, null, 8, ["name", "photo", "creative-photo", "position", "socials", "alt"]))), 128)), e("button", {
          onClick: u[2] || (u[2] = v => $.value = !0),
          class: "team-persons-less link-2-hover-target"
        }, [e("span", Cs, [e("span", Ps, l(f.$t("team.less_text")), 1), Fs])])]))])
      }
    }
  }),
  Ts = {
    class: "team-join"
  },
  qs = {
    class: "text-p3 team-join__subtitle"
  },
  Ls = {
    class: "text-p1 team-join__text"
  },
  js = {
    class: "title-h1t team-join__title"
  },
  Is = {
    class: "team-join__info"
  },
  Bs = {
    class: "text-p3 team-join__info-title"
  },
  Ns = e("a", {
    href: "mailto:hr@grape.ua",
    class: "text-p1 link-2 team-join__info-link"
  }, "hr@grape.ua", -1),
  As = q({
    __name: "Join",
    props: {
      text: {}
    },
    emits: ["selectVacancy"],
    setup(d, {
      emit: n
    }) {
      const s = O("join-us-form-popup");

      function o() {
        n("selectVacancy", ""), s.value = !0
      }
      return (i, $) => (r(), g("section", Ts, [e("h4", qs, l(i.$t("about.meet.contact")), 1), e("div", Ls, l(i.$t("about.join_text")), 1), e("h1", js, [oe(l(i.$t("team.join.text")) + " ", 1), e("button", {
        class: "title-h1t",
        onClick: o
      }, [e("span", null, l(i.$t("team.join.team")), 1)]), oe("! ")]), e("div", Is, [e("p", Bs, l(i.$t("drop")), 1), Ns])]))
    }
  }),
  he = d => (be("data-v-26faca22"), d = d(), ye(), d),
  Us = ["onDrop"],
  Hs = {
    class: "feedback-form__inner"
  },
  Ms = {
    key: 0,
    class: "feedback-form__content"
  },
  Ds = {
    class: "feedback-form__wrap"
  },
  Js = {
    class: "title-h1 feedback-form__text"
  },
  zs = he(() => e("br", null, null, -1)),
  Ws = ["onClick"],
  Es = {
    key: 1,
    class: "feedback-form__selected"
  },
  Os = {
    class: "feedback-form__filename"
  },
  Rs = {
    class: "title-h1"
  },
  Xs = {
    class: "feedback-form__file-size text-p2"
  },
  Zs = ["onClick"],
  Gs = he(() => e("span", {
    class: "T6 link-2 link-2--light"
  }, "↺", -1)),
  Qs = he(() => e("span", {
    class: "T6 link-2 link-2--light"
  }, "Replace", -1)),
  Ys = [Gs, Qs],
  Ks = {
    class: "feedback-form__buttons"
  },
  eo = ["disabled"],
  to = {
    name: "FeedbackForm"
  },
  so = q({
    ...to,
    props: {
      isValid: {
        type: Boolean
      },
      hasBackButton: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["nextStep", "prevStep", "setFile", "clearFile"],
    setup(d, {
      emit: n
    }) {
      const s = d,
        o = S(null),
        i = T(() => {
          if (!o.value) return "";
          const a = o.value.size;
          return a < 1e3 ? `${a}B` : a < 1e6 ? `${(a/1e3).toFixed(1)}kB` : `${(a/1e6).toFixed(1)}MB`
        }),
        $ = S();

      function _() {
        s.isValid && o.value && (n("setFile", o.value), n("nextStep"))
      }

      function b() {
        $.value && $.value.click()
      }

      function f(a) {
        const h = a.target;
        h.files && h.files.length > 0 && (o.value = h.files[0], n("setFile", o.value))
      }

      function u(a) {
        const h = a.dataTransfer;
        h.items && h.items.length > 0 ? (o.value = h.items[0].getAsFile(), n("setFile", o.value)) : h.files.length > 0 && (o.value = h.files[0], n("setFile", o.value))
      }
      const c = T(() => {
        if (!o.value) return "";
        const a = o.value.name.split("."),
          h = a.pop(),
          m = a.join("");
        return m.length < 13 ? m + "." + h : m.slice(0, 10) + "..." + m[m.length - 1] + "." + h
      });

      function p() {
        n("prevStep")
      }
      return (a, h) => {
        const m = Pe;
        return r(), g("div", {
          class: "feedback-form",
          onDrop: ce(u, ["prevent"]),
          onDragover: h[0] || (h[0] = ce(() => {}, ["prevent"]))
        }, [e("div", Hs, [t(o) ? (r(), g("div", Es, [e("div", Os, [e("p", Rs, l(t(c)), 1), e("p", Xs, l(t(i)), 1)]), e("button", {
          class: "feedback-form__file-replace link-2-hover-target",
          onClick: ce(b, ["prevent"])
        }, Ys, 8, Zs)])) : (r(), g("div", Ms, [e("div", Ds, [e("div", Js, [e("span", null, [oe(l(a.$t("form.file.line1")), 1), zs, oe(" " + l(a.$t("form.file.line2") + " "), 1)]), e("button", {
          class: "title-h1t",
          onClick: ce(b, ["prevent"])
        }, [e("span", null, l(a.$t("form.file.line3")), 1)], 8, Ws)])])])), e("div", Ks, [s.hasBackButton ? (r(), F(m, {
          key: 0,
          text: "←",
          class: "feedback-form__arrow-btn",
          onClick: p
        })) : G("", !0), x(m, {
          "is-disabled": !t(o),
          class: "feedback-form__btn",
          text: a.$t("form.continue"),
          onClick: _
        }, null, 8, ["is-disabled", "text"])]), e("button", {
          disabled: !s.isValid,
          class: "btn-secondary feedback-form__btn feedback-form__btn--mobile",
          onClick: _
        }, " → ", 8, eo)]), e("input", {
          ref_key: "input",
          ref: $,
          name: "resume",
          class: "title-h1 feedback-form__name",
          type: "file",
          accept: ".pdf,.docx,.doc,.txt",
          hidden: "",
          onChange: f
        }, null, 544)], 40, Us)
      }
    }
  }),
  oo = E(so, [
    ["__scopeId", "data-v-26faca22"]
  ]);

function ao(d = {}) {
  const n = S(""),
    s = {
      max: 255,
      is_required: !0
    },
    o = T(() => te(n.value, s.is_required, s.max)),
    i = S(""),
    $ = {
      max: 255,
      is_required: !0
    },
    _ = T(() => te(i.value, $.is_required, $.max)),
    b = S(""),
    f = {
      max: 255,
      is_required: !0
    },
    u = T(() => te(b.value, f.is_required, f.max)),
    c = S(d.selectedVacancy ?? ""),
    p = {
      max: 255,
      is_required: !0
    },
    a = T(() => te(c.value, p.is_required, p.max)),
    h = S(""),
    m = T(() => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(h.value)),
    v = S(""),
    y = T(() => /^\+?[0-9\s-]{10,14}$/.test(v.value)),
    k = S(null),
    L = {
      max: 50 * 1024 * 1024,
      mimes: ["pdf", "docx", "doc", "txt"],
      is_required: !0
    },
    j = T(() => !!(k.value && k.value.size <= L.max && L.mimes.includes(k.value.name.split(".").pop() ?? "")));

  function U(V) {
    k.value = V
  }

  function Q() {
    k.value = null
  }
  const I = S(""),
    H = {
      max: 255,
      is_required: !0
    },
    B = T(() => te(I.value, H.is_required, H.max)),
    M = S(!1),
    D = S(!1),
    R = Fe().public.API_URL;
  async function X() {
    if (Z()) {
      M.value = !0;
      try {
        const V = new FormData;
        V.append("name", n.value), V.append("social", i.value), V.append("position", c.value), V.append("email", h.value), V.append("phone", v.value), b.value && V.append("link", b.value), k.value && V.append("resume", k.value), V.append("hear", I.value);
        const J = await $fetch(R + "/job", {
          method: "POST",
          body: V
        });
        J && J.status === "success" && (D.value = !0)
      } catch (V) {
        console.log(V)
      }
      M.value = !1
    }
  }

  function Z() {
    return o.value && _.value && a.value && m.value && y.value && (j.value || u.value) && B.value
  }
  return {
    name: n,
    social: i,
    position: c,
    link: b,
    email: h,
    phone: v,
    resume: k,
    hear: I,
    isNameValid: o,
    isSocialValid: _,
    isPositionValid: a,
    isLinkValid: u,
    isEmailValid: m,
    isPhoneValid: y,
    isResumeValid: j,
    isHearValid: B,
    isFormSending: M,
    isFormSuccess: D,
    setFile: U,
    clearFile: Q,
    submitForm: X
  }
}

function te(d = "", n = !1, s = 255) {
  const o = d.trim();
  return o.length <= s && (n ? o.length > 0 : !0)
}
const no = q({
    __name: "JoinUsPopup",
    props: {
      vacancies: {},
      selectedVacancy: {}
    },
    setup(d) {
      const n = d,
        {
          t: s
        } = ke();
      se(() => {});
      const o = [s("form.join1"), s("form.join2"), s("form.join3"), s("form.join4"), s("form.join5"), s("form.join6"), s("form.join7")],
        i = [s("form.hear.var1"), s("form.hear.var2"), s("form.hear.var3"), s("form.hear.var4"), s("form.hear.var5")],
        $ = T(() => n.vacancies.map(w => w.position)),
        _ = O("join-us-form-popup");

      function b() {
        _.value = !_
      }
      const f = w => {
          c.value = w
        },
        u = S(1),
        c = S("file"),
        p = () => {
          u.value === o.length || (u.value += 1)
        },
        a = () => {
          u.value !== 1 && (u.value -= 1)
        },
        {
          name: h,
          social: m,
          position: v,
          email: y,
          link: k,
          phone: L,
          resume: j,
          hear: U,
          isNameValid: Q,
          isSocialValid: I,
          isPositionValid: H,
          isEmailValid: B,
          isLinkValid: M,
          isPhoneValid: D,
          isResumeValid: R,
          isHearValid: X,
          isFormSending: Z,
          isFormSuccess: V,
          setFile: J,
          clearFile: ae,
          submitForm: Y
        } = ao({
          selectedVacancy: n.selectedVacancy
        }),
        {
          $lenis: K
        } = de();
      return se(() => {
        K.stop()
      }), ze(() => {
        K.start()
      }), (w, C) => {
        const N = we,
          ee = Te,
          ne = oo,
          ie = qe;
        return r(), F(ie, {
          step: t(u),
          "step-titles": o,
          "is-form-sending": t(Z),
          "is-form-success": t(V),
          "user-card": {
            name: w.$t("form.nameJoin"),
            position: w.$t("form.profJoin"),
            photo: "/img/avatar.jpg"
          },
          label: w.$t("form.titleJoin"),
          description: w.$t("form.textJoin"),
          isLink: t(c),
          "thanks-person-email": "hr@grape.ua",
          "thanks-person-phone": "+38 (093) 853-67-54",
          "thanks-person-photo": "/img/avatar.jpg",
          "thanks-person-name": w.$t("form_popup.vacancy.thanks.person.name"),
          "thanks-text": w.$t("form_popup.vacancy.thanks.text"),
          onTogglePopup: b,
          onPrevStep: a,
          onSubmitForm: t(Y),
          onChangeType: f
        }, {
          default: re(() => [t(u) === 1 ? (r(), F(N, {
            key: 0,
            class: "feedback-popup__form",
            modelValue: t(h),
            "onUpdate:modelValue": C[0] || (C[0] = P => z(h) ? h.value = P : null),
            "is-valid": t(Q),
            onNextStep: p,
            onPrevStep: a
          }, null, 8, ["modelValue", "is-valid"])) : t(u) === 2 ? (r(), F(N, {
            key: 1,
            class: "feedback-popup__form",
            modelValue: t(m),
            "onUpdate:modelValue": C[1] || (C[1] = P => z(m) ? m.value = P : null),
            "is-valid": t(I),
            "has-back-button": "",
            onNextStep: p,
            onPrevStep: a
          }, null, 8, ["modelValue", "is-valid"])) : t(u) === 3 ? (r(), F(N, {
            key: 2,
            class: "feedback-popup__form",
            modelValue: t(y),
            "onUpdate:modelValue": C[2] || (C[2] = P => z(y) ? y.value = P : null),
            "is-valid": t(B),
            "has-back-button": "",
            onNextStep: p,
            onPrevStep: a
          }, null, 8, ["modelValue", "is-valid"])) : t(u) === 4 ? (r(), F(N, {
            key: 3,
            class: "feedback-popup__form",
            modelValue: t(L),
            "onUpdate:modelValue": C[3] || (C[3] = P => z(L) ? L.value = P : null),
            "is-valid": t(D),
            "has-back-button": "",
            onNextStep: p,
            onPrevStep: a
          }, null, 8, ["modelValue", "is-valid"])) : t(u) === 5 ? (r(), F(ee, {
            key: 4,
            class: "feedback-popup__form",
            modelValue: t(v),
            "onUpdate:modelValue": C[4] || (C[4] = P => z(v) ? v.value = P : null),
            "is-valid": t(H),
            "list-items": t($),
            "has-back-button": "",
            onNextStep: p,
            onPrevStep: a
          }, null, 8, ["modelValue", "is-valid", "list-items"])) : t(u) === 6 && t(c) === "file" ? (r(), F(ne, {
            key: 5,
            class: "feedback-popup__form",
            "is-valid": t(R),
            "has-back-button": "",
            onNextStep: p,
            onPrevStep: a,
            onSetFile: t(J),
            onClearFile: t(ae)
          }, null, 8, ["is-valid", "onSetFile", "onClearFile"])) : t(u) === 6 && t(c) === "link" ? (r(), F(N, {
            key: 6,
            class: "feedback-popup__form",
            modelValue: t(k),
            "onUpdate:modelValue": C[5] || (C[5] = P => z(k) ? k.value = P : null),
            "is-valid": t(B),
            "has-back-button": "",
            onNextStep: p,
            onPrevStep: a
          }, null, 8, ["modelValue", "is-valid"])) : t(u) === 7 ? (r(), F(ee, {
            key: 7,
            class: "feedback-popup__form",
            modelValue: t(U),
            "onUpdate:modelValue": C[6] || (C[6] = P => z(U) ? U.value = P : null),
            "is-valid": t(X),
            "list-items": i,
            "has-back-button": "",
            onNextStep: p,
            onPrevStep: a,
            onSubmitForm: t(Y),
            last: !0
          }, null, 8, ["modelValue", "is-valid", "onSubmitForm"])) : G("", !0)]),
          _: 1
        }, 8, ["step", "is-form-sending", "is-form-success", "user-card", "label", "description", "isLink", "thanks-person-name", "thanks-text", "onSubmitForm"])
      }
    }
  }),
  fe = () => {
    const d = document.querySelectorAll(".team-first__title");
    d && Le(d);
    const n = document.querySelector(".team-first__text");
    n && je(n);
    const s = document.querySelector(".team-first"),
      o = document.querySelector(".team-value"),
      i = s == null ? void 0 : s.querySelectorAll(".team-first__photo");
    if (i) {
      me.create({
        trigger: s,
        start: "top top",
        endTrigger: o ?? s,
        end: "top bottom",
        scrub: .4,
        animation: _e.timeline().from(window.innerWidth < 1200 ? [...i].slice(0, 10) : i, {
          y: 1.1 * window.innerHeight,
          rotate: -30 + Math.random() * 60,
          duration: .3,
          ease: "0.22, 1, 0.36, 1",
          stagger: .1,
          willChange: "transform"
        })
      });
      const b = s == null ? void 0 : s.querySelector(".team-first__photos");
      b && (b.style.opacity = "")
    }
    const $ = document.querySelector(".team-image"),
      _ = document.querySelector(".team-image__img");
    $ && _ && window.innerWidth >= 1200 && me.create({
      trigger: $,
      scrub: .05,
      animation: _e.fromTo(_, {
        yPercent: -14
      }, {
        yPercent: 0,
        ease: "none"
      })
    }), Ie(), Be()
  },
  io = {
    class: "team-page"
  },
  co = q({
    __name: "team",
    async setup(d) {
      var p;
      let n, s;
      const {
        base: o
      } = Xe(), {
        locale: i
      } = ke(), {
        data: $
      } = ([n, s] = We(() => Ae(`team-${i.value}`, () => $fetch("/api/team", {
        query: {
          locale: i.value
        }
      }))), n = await n, s(), n), _ = (p = $.value) == null ? void 0 : p.data;
      if (!_) throw Ne("No team page data!");
      Oe(_ == null ? void 0 : _.page);
      const b = _.layout;
      ue(() => o.isLoading, () => {
        fe()
      }), se(() => {
        o.isLoading || fe()
      }), Ee(() => {
        me.killAll()
      });
      const f = O("join-us-form-popup"),
        u = S("");

      function c(a) {
        u.value = a
      }
      return (a, h) => {
        var I, H, B, M, D, R, X, Z, V, J, ae, Y, K, w, C, N, ee, ne, ie;
        const m = vt,
          v = yt,
          y = Yt,
          k = ts,
          L = ws,
          j = As,
          U = Re,
          Q = no;
        return r(), g("div", io, [x(m, {
          description: (I = t(_)) == null ? void 0 : I.page.fields.description,
          photos: (H = t(_)) == null ? void 0 : H.page.fields.team_photos_1,
          "creative-photos": (B = t(_)) == null ? void 0 : B.page.fields.team_photos_2,
          "page-name": ((D = (M = t($)) == null ? void 0 : M.data) == null ? void 0 : D.page.meta_title) ?? ""
        }, null, 8, ["description", "photos", "creative-photos", "page-name"]), G("", !0), x(v, {
          description: (R = t(_)) == null ? void 0 : R.page.fields.our_value
        }, null, 8, ["description"]), x(y, {
          title: (X = t(_)) == null ? void 0 : X.page.fields.title_for_job,
          vacancies: ((Z = t(_)) == null ? void 0 : Z.vacancies) ?? [],
          onSelectVacancy: c
        }, null, 8, ["title", "vacancies"]), x(k, {
          photo: (V = t(_)) == null ? void 0 : V.page.fields.middle_photo,
          alt: `${((ae=(J=t($))==null?void 0:J.data)==null?void 0:ae.page.meta_title)??""}, ${a.$t("photo_word")} ${("photoIndex"in a?a.photoIndex:t(pe))(2e3)}`
        }, null, 8, ["photo", "alt"]), x(L, {
          title: (Y = t(_)) == null ? void 0 : Y.page.fields.team_title,
          team: (K = t(_)) == null ? void 0 : K.page.fields.team_block.map(P => P.team_member),
          "page-name": ((C = (w = t($)) == null ? void 0 : w.data) == null ? void 0 : C.page.meta_title) ?? ""
        }, null, 8, ["title", "team", "page-name"]), x(j, {
          text: (N = t(b)) == null ? void 0 : N.description,
          onSelectVacancy: c
        }, null, 8, ["text"]), x(U, {
          socials: ((ee = t(b)) == null ? void 0 : ee.social_blocks.map(P => P.social_detail)) ?? [],
          hashtag: (ne = t(b)) == null ? void 0 : ne.hashtag
        }, null, 8, ["socials", "hashtag"]), t(f) ? (r(), F(Q, {
          key: 1,
          vacancies: ((ie = t(_)) == null ? void 0 : ie.vacancies) ?? [],
          "selected-vacancy": t(u)
        }, null, 8, ["vacancies", "selected-vacancy"])) : G("", !0)])
      }
    }
  }),
  ho = E(co, [
    ["__scopeId", "data-v-2617e687"]
  ]);
export {
  ho as
  default
};