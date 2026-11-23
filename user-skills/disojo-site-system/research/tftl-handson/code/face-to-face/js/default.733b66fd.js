/* https://13322566869.com/_nuxt/default.733b66fd.js */
import {
  d as b,
  r as N,
  x,
  n as d,
  U as h,
  g as v,
  o as i,
  b as C,
  i as w,
  v as g,
  N as k,
  V as E,
  W as L,
  w as S,
  c as T,
  e as y,
  h as p,
  H as B,
  L as P,
  y as V,
  l as W,
  X as $,
  Y as A
} from "./entry.3d26c39b.js";
const M = {
    class: "preloader"
  },
  j = b({
    __name: "ThePreloader",
    props: {
      phone: {}
    },
    setup(m) {
      const a = m,
        c = N();
      x(() => {
        u(), setTimeout(async () => {
          await document.fonts.load, d.scrollLenis && d.scrollLenis.scrollTo(0, {
            immediate: !0
          }), h(!0), s()
        }, 0)
      });

      function u() {
        const n = a.phone.split("");

        function l(t, _, o) {
          const e = document.createElement("span");
          e.classList.add(o), e.textContent = _, t.appendChild(e)
        }
        n.forEach((t, _) => {
          const o = document.createElement("span");
          o.classList.add("number__char"), c.value.appendChild(o);
          const e = document.createElement("span");
          if (e.classList.add("number__char-wrap"), o.appendChild(e), !isNaN(+t) && t !== " ")
            for (let r = 0; r <= +t; r++) l(e, +t - r, "number__char-txt");
          else t === " " ? l(e, t, "number__char-space") : l(e, t, "number__char-txt")
        })
      }

      function s() {
        const n = v.timeline({
          onComplete() {
            d.isPreloaderVisible = !1, h(!1)
          }
        });
        n.to(".number__char-wrap", {
          yPercent: 100,
          stagger: .1,
          duration: 1
        }), n.to(".preloader .number", {
          yPercent: 150
        }), n.to(".preloader", {
          opacity: 0
        }), n.set(".preloader", {
          display: "none"
        })
      }
      return (n, l) => (i(), C("div", M, [w("div", {
        ref_key: "phoneNumber",
        ref: c,
        class: "number"
      }, null, 512)]))
    }
  });
const D = g(j, [
    ["__scopeId", "data-v-3f1d39e6"]
  ]),
  H = {
    id: "viewport"
  },
  O = b({
    __name: "default",
    async setup(m) {
      let a, c;
      const u = k();
      x(() => {
        E(), window.innerWidth > 1024 && L()
      });
      const {
        data: s
      } = ([a, c] = S(() => W("parts", () => $fetch("/api/parts"))), a = await a, c(), a);
      if (!s.value) throw T({
        statusCode: 404,
        message: "Error. No data"
      });
      return (n, l) => {
        var e, r, f;
        const t = D,
          _ = $,
          o = A;
        return i(), C("div", H, [y(t, {
          phone: (e = p(s)) == null ? void 0 : e.contact
        }, null, 8, ["phone"]), p(u).name !== "works-slug" ? (i(), B(_, {
          key: 0,
          phone: (r = p(s)) == null ? void 0 : r.contact,
          mail: (f = p(s)) == null ? void 0 : f.mail_to
        }, null, 8, ["phone", "mail"])) : P("", !0), y(o), V(n.$slots, "default")])
      }
    }
  });
export {
  O as
  default
};