/* https://pictoric.com.ua/_nuxt/index.a90ee2f6.js */
import {
  _ as x
} from "./Circular.662c8455.js";
import {
  d as g,
  m as k,
  b as c,
  c as _,
  Z as w,
  am as M,
  j as a,
  g as o,
  n as b,
  i as y,
  E as f,
  t as p,
  k as v,
  an as S,
  G as T,
  r as C,
  _ as h,
  f as V,
  u as $,
  o as F,
  a as R,
  q as A,
  s as B,
  v as E,
  V as U
} from "./entry.6cb2d70d.js";

function I(u) {
  const n = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(u);
  return {
    isValid: n,
    errorMessage: n ? null : "Invalid email"
  }
}
const D = ["placeholder"],
  L = {
    key: 0,
    class: "form-notice error t2-xb"
  },
  N = g({
    __name: "Form",
    setup(u) {
      const {
        t: n
      } = k(), e = T({
        value: "",
        errorMessage: "",
        inactive: !1
      }), r = C(!1);
      async function i() {
        const {
          isValid: s,
          errorMessage: t
        } = I(e.value);
        if (e.errorMessage = t || "", s) {
          r.value = !0, e.inactive = !0;
          try {
            await $fetch("/api/form/subscribe", {
              method: "post",
              body: {
                email: e.value
              }
            }), e.value = "Thank you!"
          } catch {
            e.value = "Error!"
          } finally {
            r.value = !1, d()
          }
        }
      }

      function d() {
        setTimeout(() => {
          e.value = "", e.errorMessage = "", e.inactive = !1
        }, 2e3)
      }
      return (s, t) => {
        const l = x;
        return c(), _("form", {
          class: b(["form", {
            sending: a(r)
          }]),
          onSubmit: t[1] || (t[1] = f(() => {}, ["prevent"])),
          onKeydown: t[2] || (t[2] = S(f(() => {}, ["prevent"]), ["enter"]))
        }, [w(o("input", {
          id: "email",
          "onUpdate:modelValue": t[0] || (t[0] = m => a(e).value = m),
          type: "email",
          name: "email",
          autocomplete: "email",
          class: b(["form-input t2-xb", {
            inactive: a(e).inactive
          }]),
          placeholder: a(n)("footerForm.yourEmail")
        }, null, 10, D), [
          [M, a(e).value]
        ]), o("button", {
          class: "form-button",
          onClick: f(i, ["prevent"])
        }, [y(l, {
          animated: ""
        })]), a(e).errorMessage ? (c(), _("h3", L, p(a(e).errorMessage), 1)) : v("", !0)], 34)
      }
    }
  });
const q = h(N, [
    ["__scopeId", "data-v-52d2210d"]
  ]),
  z = "" + globalThis.__publicAssetsURL("images/footer/footer-back1.webp"),
  K = "" + globalThis.__publicAssetsURL("images/footer/footer-back2.webp"),
  j = "" + globalThis.__publicAssetsURL("images/footer/footer-front.webp"),
  G = {
    class: "cta-wrapper"
  },
  W = {
    key: 0,
    class: "cta-caption uppercase"
  },
  Z = {
    class: "t2-xb"
  },
  H = {
    class: "t2-bl"
  },
  J = {
    key: 1,
    class: "a1 cta-description anim-title"
  },
  O = g({
    __name: "index",
    props: {
      bg: {}
    },
    setup(u) {
      const {
        footerText: n
      } = V("commonData").value, {
        isMobile: e
      } = $(), r = B();
      let i;

      function d() {
        var l;
        const s = (l = r.value) == null ? void 0 : l.querySelectorAll(".layer");
        if (!r.value || !(s != null && s.length)) return;
        const t = E.timeline();
        t.to(s[0], {
          y: e.value ? 66 : 250,
          ease: "none"
        }, 0).fromTo(s[2], {
          y: 100
        }, {
          y: e.value ? 40 : -150,
          ease: "none"
        }, 0), i = U.create({
          trigger: r.value,
          start: "top bottom",
          end: "bottom top",
          scrub: !0,
          animation: t
        })
      }
      return F(d), R(() => {
        var s;
        (s = i == null ? void 0 : i.kill) == null || s.call(i)
      }), (s, t) => {
        var m;
        const l = q;
        return c(), _("section", {
          ref_key: "sectionRef",
          ref: r,
          class: "cta",
          style: A(`--bg: url(${(m=u.bg)==null?void 0:m.original})`)
        }, [t[0] || (t[0] = o("div", {
          class: "background"
        }, [o("div", {
          class: "layer"
        }, [o("img", {
          src: z,
          role: "presentation"
        })]), o("div", {
          class: "layer"
        }, [o("img", {
          src: K,
          role: "presentation"
        })]), o("div", {
          class: "layer"
        }, [o("img", {
          src: j,
          role: "presentation"
        })])], -1)), o("div", G, [a(n) ? (c(), _("div", W, [o("span", Z, p(a(n).title), 1), o("span", H, p(a(n).caption), 1)])) : v("", !0), a(n) ? (c(), _("p", J, p(a(n).description), 1)) : v("", !0), y(l)])], 4)
      }
    }
  });
const X = h(O, [
  ["__scopeId", "data-v-fc196927"]
]);
export {
  X as _, I as v
};