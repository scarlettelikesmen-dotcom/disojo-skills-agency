/* https://coevalstudio.com/_nuxt/Contact.ad842028.js */
import {
  _ as L
} from "./client-only.eecabb16.js";
import {
  _ as O,
  f as w,
  C as U,
  k as H,
  o as v,
  R as J,
  E as V,
  a as o,
  c as I,
  e as q,
  N as G,
  a4 as Z,
  l as x,
  u as r,
  G as y,
  t as l,
  P as z,
  a1 as K,
  b as Q,
  J as W
} from "./entry.7e3c7585.js";
import {
  a as X,
  _ as Y
} from "./Text.19fa6ef9.js";
const oo = {
    name: "CommonModel"
  },
  to = Object.assign(oo, {
    setup(_) {
      const t = w(null),
        a = w(0),
        m = w(null);
      let i = performance.now();

      function c() {
        var n;
        (n = t == null ? void 0 : t.value) != null && n.orientation && (t.value.orientation = `0deg 0deg ${a==null?void 0:a.value}deg`)
      }

      function F(n) {
        var d, s;
        if (!t.value) return;
        const e = (s = (d = t.value) == null ? void 0 : d.model) == null ? void 0 : s.materials[0];
        e != null && e.pbrMetallicRoughness && e.pbrMetallicRoughness.setBaseColorFactor("#111426")
      }

      function u(n) {
        const e = +(n - i) / 1e3;
        a.value = 45 * e, c(), F(), m.value = requestAnimationFrame(u)
      }
      return U(() => {
        i = performance.now(), u()
      }), H(() => {
        cancelAnimationFrame(m.value)
      }), (n, e) => {
        const d = L;
        return v(), J(d, null, {
          default: V(() => [o("model-viewer", {
            ref_key: "modelViewer",
            ref: t,
            src: "/models/coeval_logo.glb",
            poster: "/models/preloader.png",
            class: "intro__model"
          }, null, 512)]),
          _: 1
        })
      }
    }
  }),
  Mo = O(to, [
    ["__scopeId", "data-v-07f3ec9a"]
  ]),
  no = {},
  eo = {
    width: "32",
    height: "14",
    viewBox: "0 0 32 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  ao = o("path", {
    d: "M31.2033 6.70526C29.5718 6.66842 26.3828 5.45263 24.0466 3.79474C22.4151 2.68947 21.2285 1.43684 21.1914 0.257894C21.1543 0.0736828 21.0801 0 20.9318 0C20.7835 0 20.6722 0.0736828 20.6352 0.221052C20.5981 0.405263 20.5981 0.589473 20.5981 0.736842C20.5981 2.24737 21.7476 3.61053 23.305 4.64211C24.64 5.52632 26.3457 6.22632 27.9773 6.66842C22.6376 6.5579 18.9665 6.48421 15.9629 6.44737C12.2177 6.37368 9.51077 6.3 5.91388 6.22632C4.65311 6.18947 3.31818 6.15263 1.76077 6.11579C1.5012 6.11579 1.31579 6.22632 1.46411 6.3C1.61244 6.37368 1.61244 6.52105 1.38995 6.77895C1.20455 6.96316 0.982057 7.14737 0.722488 7.22105C0.574163 7.25789 0.5 7.29474 0.5 7.36842C0.5 7.51579 0.611244 7.62632 0.796651 7.62632C2.98445 7.55263 4.54187 7.51579 5.83971 7.51579C9.06579 7.44211 10.4749 7.44211 15.9629 7.40526C18.744 7.36842 22.5263 7.33158 28.0885 7.29474C26.0861 7.81053 23.8983 8.76842 22.4522 9.98421C21.3397 10.9053 20.5981 12.0105 20.5981 13.2263C20.5981 13.4105 20.5981 13.5947 20.6352 13.7789C20.6722 13.9263 20.7835 14 20.9318 14C21.0801 14 21.1543 13.8895 21.1914 13.7421C21.2285 12.7842 22.0072 11.7895 23.1567 10.8316C25.5299 8.87895 29.3493 7.33158 31.2033 7.29474C31.3517 7.29474 31.5 7.14737 31.5 7C31.5 6.85263 31.3517 6.70526 31.2033 6.70526Z",
    fill: "#1E1E1E"
  }, null, -1),
  co = [ao];

function uo(_, t) {
  return v(), I("svg", eo, co)
}
const To = O(no, [
  ["render", uo]
]);
const io = {
    class: "contact"
  },
  so = {
    class: "index-contact"
  },
  ro = {
    "data-rotate-title": "",
    class: "text-h1 index-contact__title"
  },
  lo = o("br", null, null, -1),
  wo = ["onSubmit"],
  _o = ["disabled"],
  fo = {
    class: "index-contact__footer"
  },
  ho = o("div", {
    class: "index-contact__overlay"
  }, null, -1),
  yo = o("p", {
    class: "text-s1 index-contact-projects__text"
  }, "Projects", -1),
  mo = {
    class: "text-h6 index-contact-projects__count"
  },
  Fo = {
    class: "img-outer index-contact-projects__img-wrapper"
  },
  po = {
    class: "img-inner"
  },
  xo = ["src"],
  vo = ["innerHTML"],
  Co = {
    "data-rotate-title": "",
    class: "text-h1 index-contact__last"
  },
  bo = o("br", null, null, -1),
  go = o("div", {
    class: "text-s1 index-contact__banner"
  }, [o("div", {
    class: "some"
  }, [o("span", null, " Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / Find out what we can do for you / ")])], -1),
  jo = {
    __name: "Contact",
    props: {
      projects: {
        type: Array,
        default: () => []
      }
    },
    setup(_) {
      var s, C, b, g, S, k, B, M, T, j;
      const t = w(null),
        a = w(!1),
        i = Q().public.baseUrl,
        c = q("mainInfo"),
        F = (C = (s = c.value) == null ? void 0 : s.Subscribe_Block) == null ? void 0 : C.Small_Text,
        u = [(g = (b = c.value) == null ? void 0 : b.Subscribe_Block) == null ? void 0 : g.Title1, (k = (S = c.value) == null ? void 0 : S.Subscribe_Block) == null ? void 0 : k.Title2, (M = (B = c.value) == null ? void 0 : B.Subscribe_Block) == null ? void 0 : M.Title3, (j = (T = c.value) == null ? void 0 : T.Subscribe_Block) == null ? void 0 : j.Title4],
        n = G(() => Z.emailPattern.test(t.value));

      function e() {
        if (!n.value) return;
        const p = new FormData;
        p.append("data", JSON.stringify({
          Email: t.value
        })), $fetch(i + "/api/form-from-footers", {
          method: "POST",
          body: p
        }).then(f => {
          t.value = "", a.value = !0
        }).catch(f => {})
      }

      function d() {
        a.value = !1
      }
      return (p, f) => {
        const R = X,
          A = Y,
          D = W;
        return v(), I("div", io, [x(R, {
          "is-open": r(a),
          onClosePopup: d
        }, null, 8, ["is-open"]), o("section", so, [o("h2", ro, [y(l(u[0]), 1), lo, y(l(u[1]), 1)]), o("form", {
          onSubmit: z(e, ["prevent"]),
          class: "index-contact-form index-contact__form",
          novalidate: ""
        }, [x(A, {
          placeholder: "Email Address",
          modelValue: r(t),
          "onUpdate:modelValue": f[0] || (f[0] = h => K(t) ? t.value = h : null),
          showCaption: !0,
          class: "index-contact-form__input",
          color: "white"
        }, null, 8, ["modelValue"]), o("button", {
          class: "btn-main btn-main--white index-contact-form__btn",
          disabled: !r(n),
          type: "submit"
        }, " Send ", 8, _o)], 40, wo), o("div", fo, [x(D, {
          to: "/works",
          class: "index-contact-projects"
        }, {
          default: V(() => {
            var h, P, $, E, N;
            return [ho, yo, o("p", mo, " (" + l(_.projects.length) + ") ", 1), o("div", Fo, [o("div", po, [o("img", {
              src: r(i) + ((N = (E = ($ = (P = (h = _.projects[0]) == null ? void 0 : h.attributes) == null ? void 0 : P.Main_Photo) == null ? void 0 : $.data) == null ? void 0 : E.attributes) == null ? void 0 : N.url),
              class: "img-parallax index-contact-projects__img"
            }, null, 8, xo)])])]
          }),
          _: 1
        }), o("div", {
          "data-anim-text": "",
          class: "index-contact__text text-p3",
          innerHTML: r(F)
        }, null, 8, vo), o("h3", Co, [y(l(u[2]), 1), bo, y(l(u[3]), 1)])])]), go])
      }
    }
  };
export {
  Mo as _, To as a, jo as b
};