/* https://ab-sl.ru/_nuxt/BWj1Uplg.js */
import {
  _ as k
} from "./Ce7eQ4le.js";
import {
  _ as y,
  a as $
} from "./CEJKH9bI.js";
import {
  d as q,
  u as b,
  o as d,
  c as p,
  F as v,
  a as t,
  t as a,
  b as h,
  r as w,
  n as A,
  e as c,
  f as g,
  _ as x,
  g as F,
  h as C,
  w as P,
  i as B
} from "./DROVP5M4.js";
import {
  s as I
} from "./DFRH1ql4.js";
const S = {
    class: "header container"
  },
  N = {
    class: "h1 title1"
  },
  D = {
    class: "email-link",
    href: "mailto:info@ab-sl.com",
    target: "_blank",
    rel: "nofollow"
  },
  H = {
    class: "h1 title2"
  },
  L = {
    class: "l1 description"
  },
  Q = {
    class: "h1 title3"
  },
  R = ["onClick"],
  V = {
    class: "item-header"
  },
  z = {
    class: "h3 item-number"
  },
  E = {
    class: "h3 item-title"
  },
  M = {
    class: "item-icon-wrapper"
  },
  U = {
    class: "item-icon"
  },
  W = {
    class: "item-content"
  },
  j = {
    class: "item-inner"
  },
  G = {
    class: "p1 item-description"
  },
  J = {
    name: "FaqPage"
  },
  K = q({
    ...J,
    props: {
      title1: {},
      title2: {},
      title3: {},
      description: {},
      questions: {}
    },
    setup(l) {
      const {
        $gsap: i
      } = b(), r = g(), n = g(-1);

      function f(s) {
        if (!r.value) return;
        const e = r.value.querySelectorAll(".item"),
          m = e[n.value];
        if (m) {
          const o = m.querySelector(".item-content");
          i.to(o, {
            maxHeight: 0,
            duration: .4,
            ease: "custom"
          })
        }
        if (n.value !== s) {
          n.value = s;
          const o = e[n.value],
            _ = o.querySelector(".item-content"),
            u = o.querySelector(".item-inner");
          i.to(_, {
            maxHeight: u?.getBoundingClientRect().height,
            duration: .4,
            ease: "custom"
          })
        } else n.value = -1
      }
      return (s, e) => {
        const m = k,
          o = y;
        return d(), p(v, null, [t("section", S, [e[0] || (e[0] = t("div", {
          class: "header-gap col-18"
        }, null, -1)), t("p", N, a(l.title1), 1), e[1] || (e[1] = t("p", {
          class: "l1 caption"
        }, "FAQ", -1)), t("a", D, [h(m, {
          texts: [s.$t("need_help"), "info@ab-sl.com"],
          sup: "[?]"
        }, null, 8, ["texts"])]), t("p", H, a(l.title2), 1), t("p", L, a(l.description), 1), t("p", Q, a(l.title3), 1)]), t("section", {
          ref_key: "list",
          ref: r,
          class: "list-section container"
        }, [(d(!0), p(v, null, w(l.questions, (_, u) => (d(), p("div", {
          key: u,
          class: A(["item col-18", {
            active: c(n) === u
          }]),
          onClick: Z => f(u)
        }, [e[3] || (e[3] = t("div", {
          class: "item-line"
        }, null, -1)), t("div", V, [t("p", z, a(u + 1) + ".", 1), t("p", E, a(_.question), 1), t("div", M, [t("div", U, [h(o)])])]), t("div", W, [t("div", j, [e[2] || (e[2] = t("p", {
          class: "l1 item-description-title"
        }, "A.", -1)), t("p", G, a(_.answer), 1)])])], 10, R))), 128))], 512)], 64)
      }
    }
  }),
  O = x(K, [
    ["__scopeId", "data-v-6082c8ab"]
  ]),
  T = {
    class: "page faq-page"
  },
  X = {
    name: "PageFaq"
  },
  Y = q({
    ...X,
    async setup(l) {
      let i, r;
      const n = F().locale.value,
        f = C(),
        {
          data: s
        } = ([i, r] = P(() => B("faq", () => $fetch("/api/pages/pageFAQ", {
          method: "post",
          body: {
            locale: n
          }
        }))), i = await i, r(), i);
      return I(s?.value?.meta), (e, m) => {
        const o = O,
          _ = $;
        return d(), p("div", null, [t("main", T, [h(o, {
          title1: c(s)?.main?.title_1,
          title2: c(s)?.main?.title_2,
          title3: c(s)?.main?.title_3,
          description: c(s)?.main?.description,
          questions: c(s)?.questions
        }, null, 8, ["title1", "title2", "title3", "description", "questions"])]), h(_, {
          "link-text": e.$t("faq.view_our_contact"),
          link: c(f)("/contact")
        }, null, 8, ["link-text", "link"])])
      }
    }
  }),
  ot = x(Y, [
    ["__scopeId", "data-v-fad93b53"]
  ]);
export {
  ot as
  default
};