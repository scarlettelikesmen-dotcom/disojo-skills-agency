/* https://grape.ua/_nuxt/services.DO_NqN_U.js */
import {
  _ as Z
} from "./AnimCircles.vue.eKAmF3gL.js";
import {
  g as f,
  p as ee,
  r as se,
  e as x,
  k as te,
  m as oe,
  f as ie,
  s as ne,
  a as ae,
  h as ce,
  i as re
} from "./entry.DN75vySF.js";
import {
  j as $,
  C as S,
  M as l,
  N as _,
  U as s,
  W as r,
  L as u,
  V as le,
  J as g,
  $ as y,
  u as a,
  o as J,
  aa as _e,
  b as de
} from "./swiper-vue.BTZulNLT.js";
import {
  _ as pe
} from "./MainProps.DBdvubZp.js";
import {
  _ as me
} from "./Contact.vue.HB5MoldY.js";
import {
  s as ue,
  _ as he
} from "./setPageMeta.BIChswHP.js";
import {
  u as ge
} from "./base.Cowcg-OE.js";
import "./Main.D-Xe3oxQ.js";
const ve = {
    class: "services-first"
  },
  fe = {
    class: "text-p3 services-first__subtitle"
  },
  ye = ["innerHTML"],
  $e = ["innerHTML"],
  we = {
    class: "link-2"
  },
  xe = s("span", {
    class: "link-2"
  }, "↓", -1),
  Se = $({
    __name: "First",
    props: {
      description: {},
      title: {}
    },
    setup(d) {
      const t = d,
        c = () => {
          var i;
          f.to(window, {
            duration: 1,
            ease: "app-ease",
            scrollTo: {
              y: ".section-list",
              offsetY: ((i = document.querySelector(".header")) == null ? void 0 : i.scrollHeight) ?? 0
            }
          })
        },
        o = () => {
          f.to(window, {
            duration: .5,
            ease: "app-ease",
            scrollTo: {
              y: ".services-advantages",
              offsetY: -40
            }
          })
        };
      return S(() => {
        document.querySelectorAll(".services-first__title em").forEach(i => {
          i.addEventListener("click", o)
        })
      }), (i, e) => {
        const n = Z;
        return l(), _("section", ve, [s("h4", fe, r(i.$t("services.do")), 1), s("div", {
          class: "text-p1 services-first__text",
          innerHTML: t.description
        }, null, 8, ye), u(n, {
          class: "services-first__icon"
        }), s("div", {
          class: "title-h1t services-first__title",
          innerHTML: t.title
        }, null, 8, $e), s("button", {
          onClick: c,
          class: "text-p1 services-first__jump link-2-hover-target"
        }, [s("span", we, r(i.$t("services.jump")), 1), le(" "), xe])])
      }
    }
  }),
  Le = {
    class: "services-advantages"
  },
  Ae = ["id"],
  Te = {
    class: "text-p3 advantage__number"
  },
  ke = {
    class: "text-p1 advantage__title"
  },
  qe = {
    class: "text-p1 advantage__text"
  },
  be = {
    class: "advantage__images"
  },
  Ee = ["src", "alt"],
  He = $({
    __name: "Advantages",
    props: {
      services: {},
      pageName: {}
    },
    setup(d) {
      return (t, c) => (l(), _("section", Le, [(l(!0), _(g, null, y(t.services, (o, i) => (l(), _("div", {
        key: o.id,
        class: "advantage",
        id: o.title.toLowerCase().replaceAll(" ", "-")
      }, [s("p", Te, r(t.$t("main_page.s")) + r(i + 1), 1), s("h4", ke, r(o.title), 1), s("p", qe, r(o.description), 1), s("div", be, [(l(!0), _(g, null, y(o.projects.slice(0, 10), (e, n) => (l(), _("img", {
        key: e.name,
        src: e.photo,
        alt: `${t.pageName}, ${t.$t("photo_word")} ${("photoIndex"in t?t.photoIndex:a(ee))(1200,n)}`,
        class: "advantage__img"
      }, null, 8, Ee))), 128))])], 8, Ae))), 128))]))
    }
  }),
  Ce = {
    class: "section-list"
  },
  Me = {
    class: "section-list__wrap"
  },
  Ne = {
    class: "section-list__header"
  },
  Be = {
    class: "section-list__header-wrap"
  },
  Ie = {
    class: "progress section-list__progress"
  },
  Fe = s("div", {
    class: "progress__list"
  }, [s("div", {
    class: "progress__line"
  })], -1),
  je = {
    class: "text-p3 progress__text"
  },
  Pe = {
    class: "progress__some"
  },
  We = {
    class: "section-list__content"
  },
  De = {
    class: "text-p3 section-list__subtitle"
  },
  Ve = {
    class: "title-h1 section-list__count"
  },
  Ye = {
    class: "title-h1 section-list__title"
  },
  Ue = {
    class: "text-p1 section-list__text"
  },
  Je = $({
    __name: "List",
    props: {
      methodologies: {}
    },
    setup(d) {
      const t = d;
      let c;
      const {
        $lenis: o
      } = se(), i = () => {
        var p;
        const e = o.scroll ?? window.scrollY,
          n = document.querySelector(".section-list__wrap"),
          m = ((p = document.querySelector(".header")) == null ? void 0 : p.scrollHeight) ?? 0;
        n.style.clipPath = `inset(${e-n.offsetTop+m}px 0 ${n.offsetTop+n.scrollHeight-e-window.innerHeight+8}px round 24px)`, c = requestAnimationFrame(i)
      };
      return S(() => {
        window.innerWidth >= 1200 && i()
      }), J(() => {
        c && cancelAnimationFrame(c)
      }), (e, n) => (l(), _("section", Ce, [s("div", Me, [s("header", Ne, [s("div", Be, [s("div", Ie, [Fe, s("p", je, r(e.$t("services.methodology")), 1), s("div", Pe, [(l(!0), _(g, null, y(t.methodologies, (m, p) => (l(), _("p", {
        key: p,
        class: "text-p1 progress__description"
      }, r(m.description), 1))), 128))])])])]), s("div", We, [s("p", De, r(e.$t("services.how")), 1), (l(!0), _(g, null, y(t.methodologies, (m, p) => (l(), _("div", {
        key: p,
        class: "section-list__item"
      }, [s("span", Ve, r(p + 1), 1), s("h2", Ye, r(m.title), 1), s("p", Ue, r(m.description), 1)]))), 128))])])]))
    }
  }),
  U = () => {
    x.create({
      trigger: ".section-list",
      start: "top 250px",
      end: "bottom 500px",
      scrub: !0,
      animation: f.to(document.querySelector(".section-list .progress__line"), {
        width: "100%",
        ease: "none"
      })
    });
    const d = document.querySelectorAll(".section-list__item");
    d && window.innerWidth >= 1200 && document.querySelectorAll(".section-list__item").forEach((o, i) => {
      x.create({
        trigger: o,
        scrub: !0,
        end: "center 250px",
        animation: f.from(o.querySelector(".section-list__title"), {
          xPercent: 100,
          ease: "power1.out"
        }),
        onLeave: () => {
          o.classList.add("complete"), d.forEach(e => e.classList.remove("active")), o.classList.add("active"), document.querySelectorAll(".progress__description").forEach(e => {
            e.style.display = "none"
          }), document.querySelectorAll(".progress__description")[i].style.display = "block"
        },
        onEnterBack: () => {
          o.classList.remove("complete"), d.forEach(e => e.classList.remove("active")), o.previousElementSibling && o.previousElementSibling.classList.add("active"), document.querySelectorAll(".progress__description").forEach(e => {
            e.style.display = "none"
          }), document.querySelectorAll(".progress__description")[i].style.display = "block"
        }
      })
    });
    const t = document.querySelector(".services-first__title");
    t && te(t);
    const c = document.querySelector(".services-first__text");
    c && oe(c), ie(), ne()
  },
  ts = $({
    __name: "services",
    async setup(d) {
      var L, A, T, k, q, b, E, H, C, M;
      let t, c;
      const {
        base: o
      } = ge(), {
        locale: i
      } = ae(), {
        data: e
      } = ([t, c] = _e(() => re(`services-${i.value}`, () => $fetch("/api/services", {
        query: {
          locale: i.value
        }
      }))), t = await t, c(), t), n = ((A = (L = e.value) == null ? void 0 : L.data) == null ? void 0 : A.page) ?? null;
      if (!n) throw ce("No page data!");
      ue(n);
      const m = ((k = (T = e.value) == null ? void 0 : T.data) == null ? void 0 : k.services) ?? [],
        p = ((b = (q = e.value) == null ? void 0 : q.data) == null ? void 0 : b.testimonials) ?? [],
        h = (H = (E = e.value) == null ? void 0 : E.data) == null ? void 0 : H.layout,
        v = h == null ? void 0 : h.locations[0].location_detail,
        O = ((M = (C = e.value) == null ? void 0 : C.data) == null ? void 0 : M.news) ?? [];
      return de(() => o.isLoading, () => {
        U()
      }), S(() => {
        o.isLoading || U()
      }), J(() => {
        x.killAll()
      }), (Oe, ze) => {
        var N, B, I, F, j, P, W, D, V, Y;
        const z = Se,
          G = He,
          K = Je,
          Q = pe,
          R = me,
          X = he;
        return l(), _(g, null, [u(z, {
          description: a(n).fields.what_we_do,
          title: a(n).fields.big_title
        }, null, 8, ["description", "title"]), u(G, {
          services: a(m),
          "page-name": ((N = a(n)) == null ? void 0 : N.meta_title) ?? ""
        }, null, 8, ["services", "page-name"]), u(K, {
          methodologies: a(n).fields.methodologies.map(w => w.methodology_detail)
        }, null, 8, ["methodologies"]), u(Q, {
          testimonials: a(p),
          "page-name": ((I = (B = a(e)) == null ? void 0 : B.data) == null ? void 0 : I.page.meta_title) ?? ""
        }, null, 8, ["testimonials", "page-name"]), u(R, {
          phone: (F = a(v)) == null ? void 0 : F.phone,
          email: (j = a(v)) == null ? void 0 : j.mail,
          location: (P = a(v)) == null ? void 0 : P.address,
          city: (W = a(v)) == null ? void 0 : W.city,
          description: (D = a(h)) == null ? void 0 : D.description,
          news: a(O)
        }, null, 8, ["phone", "email", "location", "city", "description", "news"]), u(X, {
          socials: ((V = a(h)) == null ? void 0 : V.social_blocks.map(w => w.social_detail)) ?? [],
          hashtag: (Y = a(h)) == null ? void 0 : Y.hashtag
        }, null, 8, ["socials", "hashtag"])], 64)
      }
    }
  });
export {
  ts as
  default
};