/* https://grape.ua/_nuxt/Contact.vue.HB5MoldY.js */
import {
  c as h
} from "./Main.D-Xe3oxQ.js";
import {
  _ as m
} from "./AnimCircles.vue.eKAmF3gL.js";
import {
  c as f,
  a as u
} from "./entry.DN75vySF.js";
import {
  j as g,
  M as v,
  N as k,
  U as t,
  W as s,
  L as l,
  V as c
} from "./swiper-vue.BTZulNLT.js";
const w = {
    class: "contacts"
  },
  V = {
    class: "contacts__wrap"
  },
  M = {
    class: "text-p3 contacts__subtitle"
  },
  H = ["innerHTML"],
  L = {
    class: "title-h1t contacts__title"
  },
  b = t("br", null, null, -1),
  y = {
    class: "contacts__list"
  },
  T = {
    class: "contact"
  },
  x = {
    class: "text-p3 contact__city"
  },
  N = ["href"],
  B = ["href"],
  C = ["innerHTML"],
  $ = t("svg", {
    class: "contact__enter",
    width: "17",
    height: "13",
    viewBox: "0 0 17 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [t("path", {
    d: "M12.5085 12.8551V4.41761L16.7273 8.63636L12.5085 12.8551ZM0.988636 9.40341V0.454545H2.52273V9.40341H0.988636ZM1.03125 9.40341V7.86932H13.8011V9.40341H1.03125Z",
    fill: "#261723"
  })], -1),
  E = g({
    __name: "Contact",
    props: {
      phone: {},
      email: {},
      location: {},
      city: {},
      description: {},
      news: {}
    },
    setup(F) {
      const i = f("feedback-form-popup");

      function _() {
        i.value = !i.value
      }
      const {
        t: n
      } = u(), o = {
        title: {
          line_1: n("contact.title.line_1"),
          line_2: {
            dark: n("contact.title.line_2.dark"),
            light: n("contact.title.line_2.light")
          }
        }
      };
      return (e, Z) => {
        var a;
        const r = h,
          p = m;
        return v(), k("section", w, [t("div", V, [t("h4", M, s(e.$t("main_page.contact")), 1), l(r, {
          class: "contacts__notifications",
          news: ((a = e.news) == null ? void 0 : a.filter(d => d.type === "vacancy")) ?? [],
          "has-email": !0
        }, null, 8, ["news"]), t("div", {
          class: "text-p1 contacts__text",
          innerHTML: e.description
        }, null, 8, H), t("div", L, [c(s(o.title.line_1), 1), b, t("div", null, [c(s(o.title.line_2.dark) + " ", 1), t("span", {
          onClick: _
        }, s(o.title.line_2.light), 1), c(". ")])]), t("div", y, [t("div", T, [t("h5", x, s(e.city), 1), t("a", {
          href: `mailto:${e.email}`,
          class: "text-p1 link-2 contact__email"
        }, s(e.email), 9, N), t("a", {
          href: `tel:${e.phone.replace(/\s/g,"")}`,
          class: "text-p1 link-2 contact__phone"
        }, s(e.phone), 9, B), t("p", {
          class: "text-p3 contact__address",
          innerHTML: e.location
        }, null, 8, C), $])]), l(p, {
          class: "contacts__icon"
        })])])
      }
    }
  });
export {
  E as _
};