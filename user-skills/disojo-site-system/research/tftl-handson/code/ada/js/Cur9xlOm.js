/* https://aventuradentalarts.com/_nuxt/Cur9xlOm.js */
import {
  d as P,
  c as L,
  a3 as $,
  v as h,
  z as k,
  J as F,
  o as g,
  e as v,
  j as s,
  C as f,
  i as n,
  h as M,
  f as a,
  p as N,
  n as U,
  L as w,
  D as A,
  a4 as z,
  a5 as H,
  a6 as O,
  a0 as j,
  a7 as E,
  a8 as V,
  m as J
} from "./C3LIzMiL.js";
import {
  u as R
} from "./COkvdYZ_.js";
const q = {
    key: 0,
    class: "title h0"
  },
  G = {
    class: "bg"
  },
  K = ["src"],
  Q = {
    class: "content"
  },
  W = ["innerHTML"],
  X = {
    type: "submit",
    class: "btn-submit",
    "aria-label": "Button submit form"
  },
  Y = P({
    __name: "CTA",
    props: {
      light: {
        type: Boolean
      },
      contactVersion: {
        type: Boolean
      },
      text: {
        default: "Schedule your appointment with our doctors <i>today</i>!"
      },
      bgImage: {}
    },
    setup(y) {
      const p = y,
        {
          locations: _
        } = L(),
        e = $({
          name: {
            value: "",
            placeholder: "Name",
            error: {
              status: !1,
              message: "Please enter your name"
            }
          },
          phone: {
            value: "",
            placeholder: "Phone number",
            error: {
              status: !1,
              message: "Please enter your phone number"
            }
          },
          location: {
            title: "",
            emailTo: ""
          },
          message: {
            value: "",
            placeholder: "Message"
          }
        }),
        d = h(!1),
        m = k(),
        u = h({
          normal: "",
          medium: ""
        }),
        b = async t => {
          w(() => {
            const o = t.replace("+", "").replace(/[^\d]/gi, "").slice(0, 10);
            e.phone.value = o
          })
        }, I = () => (e.name.error.status = !V(e.name.value, {
          min: 2
        }), e.phone.error.status = !V(e.phone.value, {
          min: 9
        }), !e.name.error.status && !e.phone.error.status), C = () => {
          e.name.value = "", e.phone.value = "", e.message.value = "", e.name.error.status = !1, e.phone.error.status = !1
        }, x = async () => {
          !I() || d.value || (d.value = !0, await $fetch("/api/form/footer", {
            method: "POST",
            body: {
              name: e.name.value,
              phone: e.phone.value,
              location: e.location,
              message: e.message.value
            }
          }), d.value = !1, C())
        }, S = () => {
          var t, o;
          e.location = {
            title: ((t = _[0]) == null ? void 0 : t.title) || "",
            emailTo: ((o = _[0]) == null ? void 0 : o.emailTo) || ""
          }
        };
      return F(() => {
        const t = m.name === "service-solution",
          o = p.bgImage instanceof Array ? p.bgImage : [p.bgImage],
          i = localStorage.getItem(`save-${m.path}`);
        t || (u.value = o[0]), i || (localStorage.setItem(`save-${m.path}`, `${o[0].normal}`), u.value = o[0]);
        const r = o.filter(c => c.normal !== i);
        r.length && localStorage.setItem(`save-${m.path}`, `${r[0].normal}`), u.value = r.length ? r[0] : o[0]
      }), R(S), (t, o) => {
        const i = A,
          r = z,
          c = H,
          T = O,
          B = j,
          D = E;
        return g(), v("section", {
          class: U(["cta", {
            light: t.light
          }])
        }, [s(i, null, {
          default: f(() => [t.contactVersion ? (g(), v("h3", q, o[4] || (o[4] = [n("span", null, " Let’s ", -1), n("span", null, " Connect ", -1)]))) : M("", !0), n("div", G, [n("img", {
            src: a(u).normal,
            role: "presentation",
            class: "inner-img",
            loading: "lazy"
          }, null, 8, K)])]),
          _: 1
        }), n("div", Q, [n("div", {
          innerHTML: t.text,
          class: "form-title h4"
        }, null, 8, W), s(r, {
          modelValue: a(e).location,
          "onUpdate:modelValue": o[0] || (o[0] = l => a(e).location = l),
          key: "cta-locations"
        }, null, 8, ["modelValue"]), n("form", {
          class: "form",
          onSubmit: N(x, ["prevent", "stop"])
        }, [s(c, {
          modelValue: a(e).name.value,
          "onUpdate:modelValue": o[1] || (o[1] = l => a(e).name.value = l),
          error: a(e).name.error,
          type: "name",
          placeholder: "Name"
        }, null, 8, ["modelValue", "error"]), s(c, {
          modelValue: a(e).phone.value,
          "onUpdate:modelValue": [o[2] || (o[2] = l => a(e).phone.value = l), b],
          type: "phone",
          placeholder: a(e).phone.placeholder,
          error: a(e).phone.error
        }, null, 8, ["modelValue", "placeholder", "error"]), s(T, {
          modelValue: a(e).message.value,
          "onUpdate:modelValue": o[3] || (o[3] = l => a(e).message.value = l),
          placeholder: a(e).message.placeholder
        }, null, 8, ["modelValue", "placeholder"]), n("button", X, [s(D, null, {
          default: f(() => [s(B)]),
          _: 1
        })])], 32)])], 2)
      }
    }
  }),
  oe = J(Y, [
    ["__scopeId", "data-v-6896cd1e"]
  ]);
export {
  oe as
  default
};