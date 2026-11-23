/* https://ab-sl.ru/_nuxt/213wiFoy.js */
import {
  _ as R
} from "./BepOh2iV.js";
import {
  _ as j
} from "./Ce7eQ4le.js";
import {
  t as G
} from "./BrC1mN93.js";
import {
  d as x,
  u as L,
  p as E,
  c as u,
  a as t,
  F as C,
  r as M,
  t as a,
  b as w,
  m as g,
  f as $,
  o as s,
  _ as P,
  h as H,
  A as F,
  y as I,
  x as T,
  e as p,
  v as Y,
  C as S,
  E as N,
  z as J,
  g as K,
  w as X,
  j as Z,
  l as D,
  G as tt,
  H as et,
  i as ot,
  s as st,
  q as nt
} from "./DROVP5M4.js";
import {
  u as q,
  s as at
} from "./DFRH1ql4.js";
import {
  _ as ct
} from "./Ba_lGT52.js";
import {
  a as it
} from "./CEJKH9bI.js";
import {
  _ as lt
} from "./K2R7Lw84.js";
import "./Ckjxvtsy.js";
const rt = {
    class: "photo-thumb"
  },
  ut = {
    class: "wrapper"
  },
  dt = {
    class: "caption l1"
  },
  _t = {
    name: "CareerHero"
  },
  pt = x({
    ..._t,
    props: {
      title: {},
      photos: {},
      vacancies: {}
    },
    setup(o) {
      const {
        $gsap: _
      } = L(), d = $(), c = $(), v = $(), {
        isDesktop: e
      } = E();
      q(() => {
        i(), r()
      });

      function i() {
        c.value && (c.value.style.visibility = "visible", G(c.value))
      }

      function l() {
        _.to(window, {
          duration: .8,
          scrollTo: {
            y: ".vacancies",
            offsetY: 50
          }
        })
      }

      function r() {
        const n = document.querySelectorAll(".hero .photo-wrapper");
        let m = 0;
        n.forEach(h => {
          _.to(h, {
            yPercent: e.value ? -220 : -201,
            duration: e.value ? n.length * 3.5 : n.length * 5,
            repeat: -1,
            delay: m
          }), e.value ? m += 3 : m += 4.5
        })
      }
      return (n, m) => {
        const h = R,
          b = j;
        return s(), u("section", {
          ref_key: "section",
          ref: d,
          class: "hero"
        }, [t("div", {
          ref_key: "photosBlock",
          ref: v,
          class: "photos container"
        }, [(s(!0), u(C, null, M(o.photos, (f, k) => (s(), u("div", {
          key: k,
          class: "photo-wrapper"
        }, [t("div", rt, [w(h, {
          "no-lazy-load": "",
          size: "large",
          photo: f
        }, null, 8, ["photo"])])]))), 128))], 512), t("div", ut, [t("p", {
          ref_key: "titleEl",
          ref: c,
          class: "h2 title"
        }, a(o.title), 513), o.vacancies && o.vacancies.length ? (s(), u("button", {
          key: 0,
          class: "button",
          onClick: l
        }, [w(b, {
          texts: [n.$t("view"), n.$t("career.all_positions")]
        }, null, 8, ["texts"])])) : g("", !0), t("p", dt, a(n.$t("scroll_down")), 1)])], 512)
      }
    }
  }),
  mt = P(pt, [
    ["__scopeId", "data-v-e71ec67c"]
  ]),
  vt = {
    key: 0,
    class: "about"
  },
  ht = {
    class: "about-wrapper"
  },
  ft = {
    class: "title"
  },
  yt = {
    key: 1,
    class: "title__item h1"
  },
  $t = {
    key: 0,
    class: "title__caption l1"
  },
  kt = {
    class: "about-wrapper"
  },
  wt = {
    class: "container"
  },
  bt = {
    class: "l1 medium small-title"
  },
  gt = {
    class: "container"
  },
  Ct = {
    class: "l1 photos-description"
  },
  xt = {
    name: "CareerAbout"
  },
  Vt = x({
    ...xt,
    props: {
      data: {}
    },
    setup(o) {
      const _ = H();
      return (d, c) => {
        const v = Y,
          e = ct;
        return o.data ? (s(), u("section", vt, [t("div", ht, [c[2] || (c[2] = t("p", {
          class: "l1 section-number"
        }, "00  1", -1)), t("p", ft, [(s(!0), u(C, null, M(o.data.title, (i, l) => (s(), u(C, {
          key: l
        }, [l === 1 ? (s(), F(v, {
          key: 0,
          to: p(_)("/contact"),
          class: "title__item title__link h1"
        }, {
          default: I(() => [c[0] || (c[0] = T(" [", -1)), t("span", null, a(i), 1), c[1] || (c[1] = T("] ", -1))]),
          _: 2
        }, 1032, ["to"])) : (s(), u("span", yt, [T(a(i) + " ", 1), l === 0 ? (s(), u("span", $t, " 00  1 ")) : g("", !0)]))], 64))), 128))])]), t("div", kt, [t("div", wt, [t("p", bt, a(o.data.title_small), 1)]), w(e, {
          photos: o.data.photos,
          description: o.data.description
        }, null, 8, ["photos", "description"]), t("div", gt, [t("p", Ct, a(o.data.description), 1)])])])) : g("", !0)
      }
    }
  }),
  Pt = P(Vt, [
    ["__scopeId", "data-v-e49b686a"]
  ]),
  At = {
    id: "vacancies",
    class: "vacancies container"
  },
  Bt = {
    class: "card-header"
  },
  Ft = {
    class: "card-item title-wrapper"
  },
  Lt = {
    class: "h4 item-title"
  },
  Mt = {
    class: "h4 item-value"
  },
  Tt = {
    class: "card-item time-wrapper"
  },
  St = {
    class: "l1 item-value"
  },
  Dt = {
    class: "card-item link-item"
  },
  Et = {
    class: "link-wrapper"
  },
  Ht = {
    class: "l1 link"
  },
  It = {
    class: "card-item location-wrapper"
  },
  Nt = {
    class: "l1 item-value"
  },
  qt = ["onClick"],
  Ut = {
    name: "CareerVacancies"
  },
  zt = x({
    ...Ut,
    props: {
      vacancies: {}
    },
    emits: ["openVacancy"],
    setup(o, {
      emit: _
    }) {
      const d = _,
        c = L().$i18n.t,
        v = $(),
        e = $();

      function i(l) {
        l && d("openVacancy", l)
      }
      return (l, r) => (s(), u("section", At, [t("div", {
        ref_key: "gridWrapper",
        ref: v,
        class: "grid-wrapper"
      }, [t("div", {
        ref_key: "grid",
        ref: e,
        class: "grid"
      }, [(s(!0), u(C, null, M(o.vacancies, (n, m) => (s(), u("div", {
        key: n.id,
        class: "card"
      }, [r[2] || (r[2] = t("div", {
        class: "card-divider"
      }, null, -1)), t("div", Bt, [t("div", Ft, [t("p", Lt, a(m + 1) + ".", 1), t("p", Mt, a(n?.title), 1)]), t("div", Tt, [r[0] || (r[0] = t("p", {
        class: "l1 item-title"
      }, "t:", -1)), t("p", St, a(n?.time), 1)])]), t("div", Dt, [t("div", Et, [t("span", Ht, a(p(c)("learn_more")), 1)])]), t("div", It, [r[1] || (r[1] = t("p", {
        class: "l1 item-title"
      }, "l:", -1)), t("p", Nt, a(n?.location), 1)]), t("button", {
        class: "card-button",
        onClick: h => i(n.id)
      }, null, 8, qt)]))), 128))], 512)], 512)]))
    }
  }),
  Qt = P(zt, [
    ["__scopeId", "data-v-4594a1fb"]
  ]),
  Wt = {
    class: "wrapper-text p1"
  },
  Ot = {
    class: "feedback-form-wrapper"
  },
  Rt = {
    name: "FeedbackForm"
  },
  jt = x({
    ...Rt,
    emits: ["formClosed"],
    setup(o, {
      emit: _
    }) {
      const d = $(),
        c = _,
        {
          isDesktop: v
        } = E(),
        {
          $gsap: e
        } = L();
      async function i() {
        d.value && (await e.to(d.value, {
          duration: .5,
          yPercent: 0,
          ease: "custom"
        }), c("formClosed"))
      }
      return S(() => {
        d.value && e.to(d.value, {
          duration: .5,
          yPercent: v.value ? 100 : -100,
          ease: "custom"
        })
      }), (l, r) => {
        const n = lt;
        return s(), u(C, null, [t("div", {
          class: "overlay",
          onClick: i
        }), t("div", {
          ref_key: "wrapperEl",
          ref: d,
          class: "wrapper",
          "data-lenis-prevent": ""
        }, [t("button", {
          class: "close-button",
          onClick: i
        }, [...r[0] || (r[0] = [t("svg", {
          class: "close-icon",
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [t("path", {
          d: "M16.9999 16.9999L1 1",
          "stroke-width": "2"
        }), t("path", {
          d: "M16.9999 1.00013L1 17",
          "stroke-width": "2"
        })], -1)])]), t("p", Wt, a(l.$t("form.text")), 1), t("div", Ot, [w(n, {
          "with-file-input": "",
          "is-vacancy": "",
          onFormSubmit: i
        })])], 512)], 64)
      }
    }
  }),
  Gt = P(jt, [
    ["__scopeId", "data-v-75d70e6e"]
  ]),
  Yt = {
    class: "modal"
  },
  Jt = {
    class: "inner"
  },
  Kt = {
    class: "h2 title"
  },
  Xt = {
    class: "info"
  },
  Zt = {
    class: "info-inner"
  },
  te = {
    class: "info-item"
  },
  ee = {
    class: "l1"
  },
  oe = {
    class: "l1"
  },
  se = {
    class: "info-item"
  },
  ne = {
    class: "l1"
  },
  ae = {
    class: "l1"
  },
  ce = {
    class: "info-item info-button-wrapper"
  },
  ie = {
    class: "description-wrapper"
  },
  le = ["innerHTML"],
  re = {
    class: "p1 item-title"
  },
  ue = ["innerHTML"],
  de = {
    name: "VacancyModal"
  },
  _e = x({
    ...de,
    props: {
      vacancy: {}
    },
    emits: ["modalClosed"],
    setup(o, {
      emit: _
    }) {
      const {
        $gsap: d
      } = L(), c = _, {
        lockScroll: v
      } = N(), e = $(), i = $(), l = $(), r = $(!1);
      S(() => {
        n()
      }), J(() => {
        v(!1)
      });

      function n() {
        if (!e.value || !i.value || !l.value) return;
        v(!0), d.timeline().to(e.value, {
          opacity: .4,
          duration: .8,
          ease: "custom"
        }).to(i.value, {
          y: 0,
          yPercent: 0,
          duration: .8,
          ease: "custom"
        }, "<").to(l.value, {
          autoAlpha: 1,
          duration: .8,
          ease: "custom"
        }, "<+0.2")
      }
      async function m() {
        if (!e.value || !i.value || !l.value) return;
        const f = d.timeline();
        f.to(e.value, {
          opacity: 0,
          clearProps: "all",
          duration: .5,
          ease: "custom"
        }).to(i.value, {
          y: 0,
          yPercent: 120,
          clearProps: "all",
          duration: .5,
          ease: "custom"
        }, "<").to(l.value, {
          autoAlpha: 0,
          clearProps: "all",
          duration: .3,
          ease: "custom"
        }, "<+=0.2"), await f, c("modalClosed"), b()
      }

      function h() {
        r.value = !0
      }

      function b() {
        window.history.replaceState({}, document.title, window.location.pathname)
      }
      return (f, k) => (s(), u("div", Yt, [t("div", {
        ref_key: "cover",
        ref: e,
        class: "cover",
        onClick: m
      }, null, 512), t("div", {
        ref_key: "wrapper",
        ref: i,
        class: "wrapper",
        "data-lenis-prevent": ""
      }, [t("div", Jt, [t("div", {
        class: "close-button-wrapper"
      }, [t("button", {
        class: "close-button",
        onClick: m
      }, [...k[1] || (k[1] = [t("svg", {
        class: "close-icon",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [t("path", {
        d: "M16.9999 16.9999L1 1",
        "stroke-width": "2"
      }), t("path", {
        d: "M16.9999 1.00013L1 17",
        "stroke-width": "2"
      })], -1)])])]), t("p", Kt, a(o.vacancy.title), 1), t("div", Xt, [t("div", Zt, [t("div", te, [t("p", ee, a(f.$t("type")) + ":", 1), t("p", oe, a(o.vacancy.time), 1)]), t("div", se, [t("p", ne, a(f.$t("location")) + ":", 1), t("p", ae, a(o.vacancy.location), 1)]), t("div", ce, [t("button", {
        type: "button",
        class: "l1 info-button",
        onClick: h
      }, a(f.$t("apply_now")), 1)])])]), t("div", ie, [t("div", {
        class: "p1 description",
        innerHTML: o.vacancy.description
      }, null, 8, le), (s(!0), u(C, null, M(o.vacancy.items, (V, y) => (s(), u("div", {
        key: y,
        class: "description-item"
      }, [t("p", re, a(V.title), 1), t("div", {
        class: "p1 item-description",
        innerHTML: V.description
      }, null, 8, ue)]))), 128))])])], 512), t("div", {
        ref_key: "mobileButton",
        ref: l,
        class: "info-button-wrapper-mobile"
      }, [t("button", {
        type: "button",
        class: "l1 info-button-mobile",
        onClick: h
      }, a(f.$t("apply_now")), 1)], 512), p(r) ? (s(), F(Gt, {
        key: 0,
        position: o.vacancy.title,
        onFormClosed: k[0] || (k[0] = V => r.value = !1)
      }, null, 8, ["position"])) : g("", !0)]))
    }
  }),
  pe = P(_e, [
    ["__scopeId", "data-v-d796a687"]
  ]),
  me = {
    key: 0
  },
  ve = {
    class: "page career-page"
  },
  he = {
    name: "PageCareer"
  },
  Pe = x({
    ...he,
    async setup(o) {
      let _, d;
      const c = K().locale.value,
        v = H(),
        {
          data: e
        } = ([_, d] = X(() => ot("about-us", () => $fetch("/api/pages/pageCareer", {
          method: "post",
          body: {
            locale: c
          }
        }))), _ = await _, d(), _),
        i = Z(),
        l = D("lenis"),
        r = D("preloaderDone"),
        {
          lockScroll: n
        } = N(),
        m = $(!1),
        h = $(e.value?.vacancies && i.query.vacancy ? e.value?.vacancies.find(({
          slug: y
        }) => y === i.query.vacancy)?.id ?? -1 : -1),
        b = st(() => e.value?.vacancies?.find(({
          id: y
        }) => y === h.value));
      async function f(y) {
        h.value = y, m.value = !0, await nt(), k("vacancy", `${b.value?.slug}`)
      }

      function k(y, A) {
        const B = new URL(window.location.href);
        B.searchParams.set(y, A), window.history.pushState({}, "", B.href)
      }
      at(e?.value?.meta), tt(r, y => {
        h.value === -1 || !y || (m.value = !0)
      }), S(() => {
        h.value !== -1 && (n(!1), V())
      }), q(() => {});

      function V() {
        setTimeout(() => {
          l.value?.scrollTo("#vacancies", {
            immediate: !0
          }), n(!0)
        }, 0)
      }
      return (y, A) => {
        const B = mt,
          U = Pt,
          z = Qt,
          Q = it,
          W = pe,
          O = et;
        return p(e) ? (s(), u("div", me, [t("main", ve, [w(B, {
          title: p(e).hero?.title,
          photos: p(e).hero?.photos,
          vacancies: p(e).vacancies
        }, null, 8, ["title", "photos", "vacancies"]), w(U, {
          data: p(e).about
        }, null, 8, ["data"]), p(e).vacancies?.length ? (s(), F(z, {
          key: 0,
          vacancies: p(e).vacancies,
          onOpenVacancy: f
        }, null, 8, ["vacancies"])) : g("", !0)]), w(Q, {
          "link-text": p(e).get_in_touch,
          link: p(v)("/contact")
        }, null, 8, ["link-text", "link"]), w(O, null, {
          default: I(() => [p(m) && p(b) ? (s(), F(W, {
            key: 0,
            vacancy: p(b),
            onModalClosed: A[0] || (A[0] = fe => m.value = !1)
          }, null, 8, ["vacancy"])) : g("", !0)]),
          _: 1
        })])) : g("", !0)
      }
    }
  });
export {
  Pe as
  default
};