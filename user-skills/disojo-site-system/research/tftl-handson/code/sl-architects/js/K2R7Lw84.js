/* https://ab-sl.ru/_nuxt/K2R7Lw84.js */
import {
  _ as q,
  o as g,
  c as y,
  a as n,
  d as k,
  p as B,
  n as M,
  t as v,
  e as t,
  b as F,
  m as I,
  f as x,
  s as C,
  G as j,
  x as T,
  g as O,
  A as G,
  I as H,
  q as D
} from "./DROVP5M4.js";
const P = {
    name: "IconTriangle"
  },
  R = {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Z(s, h, p, _, w, l) {
  return g(), y("svg", R, [...h[0] || (h[0] = [n("path", {
    d: "M1.41421 3.41421C0.154281 2.15428 1.04662 -5.6621e-07 2.82843 -4.88325e-07L12 -8.74228e-08C13.1046 -3.91405e-08 14 0.895431 14 2L14 11.1716C14 12.9534 11.8457 13.8457 10.5858 12.5858L1.41421 3.41421Z",
    fill: "#CE4A40"
  }, null, -1)])])
}
const N = q(P, [
    ["render", Z],
    ["__scopeId", "data-v-01afbe54"]
  ]),
  J = ["type", "name", "value", "placeholder"],
  K = {
    class: "l1 input-number"
  },
  Q = {
    key: 0,
    class: "error-wrapper"
  },
  W = {
    class: "error-icon"
  },
  X = {
    class: "error-message"
  },
  Y = {
    name: "FormInput"
  },
  ee = k({
    ...Y,
    props: {
      modelValue: {},
      type: {},
      name: {},
      placeholder: {},
      required: {
        type: Boolean
      },
      error: {
        type: Boolean
      },
      number: {},
      errorMessage: {}
    },
    emits: ["update:modelValue"],
    setup(s, {
      emit: h
    }) {
      const p = s,
        _ = h,
        {
          isDesktop: w
        } = B(),
        l = x(),
        i = C(() => {
          const m = p.number.toString(),
            e = "0".repeat(Math.max(0, 2 - m.length));
          return e + (e ? "." : "") + m
        });

      function $() {
        l.value && _("update:modelValue", l.value.value)
      }
      return (m, e) => {
        const b = N;
        return g(), y("div", {
          class: M(["input-wrapper", {
            error: s.error
          }])
        }, [n("input", {
          ref_key: "input",
          ref: l,
          class: "h3 input",
          type: s.type,
          name: s.name,
          value: s.modelValue,
          placeholder: `${s.placeholder}${s.required?"*":""}`,
          onInput: $
        }, null, 40, J), e[0] || (e[0] = n("div", {
          class: "input-line"
        }, null, -1)), n("p", K, v(t(i)), 1), s.error && t(w) ? (g(), y("div", Q, [n("div", W, [F(b, {
          class: "inner-svg"
        })]), n("p", X, v(s.errorMessage), 1)])) : I("", !0)], 2)
      }
    }
  }),
  re = q(ee, [
    ["__scopeId", "data-v-b2788d98"]
  ]),
  te = ["accept"],
  se = {
    key: 0,
    class: "p1 underline upload-file"
  },
  ae = {
    class: "underline"
  },
  oe = {
    class: "l1 input-number"
  },
  ne = {
    key: 2,
    class: "error-wrapper"
  },
  le = {
    class: "error-icon"
  },
  ue = {
    class: "error-message"
  },
  ie = {
    name: "FormInputFile"
  },
  me = k({
    ...ie,
    props: {
      modelValue: {},
      number: {},
      error: {
        type: Boolean
      },
      errorMessage: {
        default: "Something is wrong"
      },
      allowedFiles: {
        default: "*"
      }
    },
    emits: ["update:modelValue"],
    setup(s, {
      emit: h
    }) {
      const p = s,
        _ = h,
        {
          isDesktop: w
        } = B(),
        l = x(),
        i = x(null);
      j(() => p.modelValue, c => {
        c || (i.value = null)
      });

      function $() {
        l.value && l.value.files && (i.value = l.value?.files[0], _("update:modelValue", i.value))
      }

      function m() {
        i.value = null, _("update:modelValue", i.value)
      }

      function e(c) {
        c.target?.classList?.contains("loaded-file") && c.preventDefault()
      }
      const b = C(() => {
        const c = p.number.toString(),
          f = "0".repeat(Math.max(0, 2 - c.length));
        return f + (f ? "." : "") + c
      });
      return (c, f) => {
        const S = N;
        return g(), y("div", {
          class: M(["input-wrapper", {
            error: s.error
          }])
        }, [n("label", {
          class: M(["h3", {
            "file-chosen": t(i)
          }]),
          for: "resume",
          onClick: e
        }, [n("span", null, v(t(i) ? t(i)?.name : c.$t("form.resume")), 1)], 2), n("input", {
          id: "resume",
          ref_key: "input",
          ref: l,
          class: "input",
          "aria-label": "resume",
          type: "file",
          accept: s.allowedFiles,
          onInput: $
        }, null, 40, te), f[2] || (f[2] = n("div", {
          class: "input-line"
        }, null, -1)), t(i) ? I("", !0) : (g(), y("p", se, [n("span", null, v(c.$t("form.upload")), 1), f[0] || (f[0] = T(" " + v(" ") + " ", -1)), n("span", ae, v(c.$t("form.file")), 1)])), n("p", oe, v(t(b)), 1), t(i) ? (g(), y("button", {
          key: 1,
          class: "p1",
          type: "button",
          onClick: m
        }, [...f[1] || (f[1] = [T(" [ ", -1), n("span", {
          class: "underline"
        }, "x", -1), T(" ] ", -1)])])) : I("", !0), s.error && t(w) ? (g(), y("div", ne, [n("div", le, [F(S, {
          class: "inner-svg"
        })]), n("p", ue, v(s.errorMessage), 1)])) : I("", !0)], 2)
      }
    }
  }),
  de = q(me, [
    ["__scopeId", "data-v-3f5e49b5"]
  ]),
  ce = ["name", "value", "placeholder"],
  pe = {
    class: "l1 textarea-number"
  },
  fe = {
    key: 0,
    class: "error-wrapper"
  },
  ve = {
    class: "error-icon"
  },
  ge = {
    class: "error-message"
  },
  he = {
    name: "FormTextarea"
  },
  _e = k({
    ...he,
    props: {
      modelValue: {},
      name: {},
      placeholder: {},
      number: {},
      required: {
        type: Boolean
      },
      error: {
        type: Boolean
      },
      errorMessage: {}
    },
    emits: ["update:modelValue"],
    setup(s, {
      emit: h
    }) {
      const p = s,
        _ = h,
        {
          isDesktop: w
        } = B(),
        l = x(),
        i = C(() => {
          const m = p.number.toString(),
            e = "0".repeat(Math.max(0, 2 - m.length));
          return e + (e ? "." : "") + m
        });

      function $() {
        l.value && (_("update:modelValue", l.value.value), l.value.style.height = "0", l.value.style.height = `${l.value.scrollHeight}px`)
      }
      return (m, e) => {
        const b = N;
        return g(), y("div", {
          class: M(["textarea-wrapper", {
            error: s.error
          }])
        }, [n("textarea", {
          ref_key: "textarea",
          ref: l,
          rows: "1",
          class: "h3 textarea",
          name: s.name,
          value: s.modelValue,
          placeholder: `${s.placeholder}${s.required?"*":""}`,
          onInput: $
        }, null, 40, ce), e[0] || (e[0] = n("div", {
          class: "textarea-line"
        }, null, -1)), n("p", pe, v(t(i)), 1), s.error && t(w) ? (g(), y("div", fe, [n("div", ve, [F(b, {
          class: "inner-svg"
        })]), n("p", ge, v(s.errorMessage), 1)])) : I("", !0)], 2)
      }
    }
  }),
  $e = q(_e, [
    ["__scopeId", "data-v-e9f1fd1a"]
  ]);

function ye(s) {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(s)
}
const be = {
    class: "form-wrapper"
  },
  Ve = {
    class: "submit-wrapper"
  },
  we = {
    name: "CommonForm"
  },
  xe = k({
    ...we,
    props: {
      withFileInput: {
        type: Boolean
      },
      isVacancy: {
        type: Boolean
      }
    },
    emits: ["formSubmit"],
    setup(s, {
      emit: h
    }) {
      const p = [".pdf", ".docx", ".doc", ".txt", ".ppt", ".pptx", ".xlsx", ".xls"],
        _ = s,
        w = h,
        {
          t: l
        } = O(),
        i = x(!1),
        $ = x(!1),
        m = x(l("form.submit")),
        e = x({
          name: {
            value: "",
            rules: {
              min: 2,
              required: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          email: {
            value: "",
            rules: {
              required: !0,
              email: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          phone: {
            value: "",
            rules: {
              required: !0,
              min: 6,
              phone: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          resume: {
            value: null,
            rules: {
              fileType: p
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          message: {
            value: "",
            rules: {
              min: 5,
              required: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          }
        });
      async function b() {
        if (c()) {
          const r = new FormData,
            d = e.value;
          for (let u in d) {
            const o = d[u].value;
            if (o && u !== "resume") {
              const A = L(o);
              r.append(`${u}`, A)
            }
          }
          _.withFileInput && d.resume.value && r.append("resume", d.resume.value), _.isVacancy && r.append("isVacancy", "true"), i.value = !0, m.value = l("form.sending");
          try {
            await $fetch("/api/sendmail", {
              method: "post",
              body: r
            }), m.value = l("form.success"), $.value = !0
          } catch {
            m.value = l("form.error"), $.value = !0
          } finally {
            z(), setTimeout(() => w("formSubmit"), 1200)
          }
        }
      }

      function c() {
        let a = !0;
        const r = e.value;
        for (let d in r) {
          const u = d,
            V = r[u].rules,
            o = r[u].value;
          V.min && o?.length && o?.length < V.min && (a = !1, r[u].error = !0, r[u].errorMessage = `At least ${V.min} symbols required`), V.email && o && !ye(o) && (a = !1, r[u].error = !0, r[u].errorMessage = "Email is invalid"), V.required && (!o || !o?.length) && (a = !1, r[u].error = !0, r[u].errorMessage = "Field is required"), V.fileType && o && f(o) && !S(o) && (a = !1, r[u].error = !0, r[u].errorMessage = `Only ${p.join(", ")} files allowed`)
        }
        return a
      }

      function f(a) {
        return a instanceof File
      }

      function S(a) {
        if (!a) return !1;
        let r = !0;
        const d = a.name.split("."),
          u = "." + d[d.length - 1];
        return p.includes(u) || (r = !1), r
      }
      async function E(a) {
        e.value.phone.error = !1, await D();
        const r = a.replace("+", "").replace(/[^\d]/gi, "");
        e.value.phone.value = `${r.length?"+":""}` + r
      }
      async function U(a) {
        e.value.email.error = !1, await D();
        const r = a.replace(/[&=+<>_,\'-]/g, "").replace(/\.{2,}/g, ".");
        e.value.email.value = r
      }

      function z() {
        const a = e.value;
        for (let r in a) {
          const d = r;
          a[d].value = ""
        }
        setTimeout(() => {
          i.value = !1, $.value = !1, m.value = "Submit"
        }, 2e3)
      }

      function L(a) {
        return a ? a.replace(/<script>.*<\/script>/, "").trim().replace(/(<([^>]+)>)/gi, "") : ""
      }
      return (a, r) => {
        const d = re,
          u = de,
          V = $e;
        return g(), y("div", be, [n("form", {
          class: M(["form", {
            sending: t(i)
          }])
        }, [F(d, {
          modelValue: t(e).name.value,
          "onUpdate:modelValue": [r[0] || (r[0] = o => t(e).name.value = o), r[1] || (r[1] = o => t(e).name.error = !1)],
          required: t(e).name.rules.required,
          type: "text",
          name: "name",
          placeholder: a.$t("form.name"),
          number: 1,
          error: t(e).name.error,
          "error-message": t(e).name.errorMessage
        }, null, 8, ["modelValue", "required", "placeholder", "error", "error-message"]), F(d, {
          modelValue: t(e).email.value,
          "onUpdate:modelValue": [r[2] || (r[2] = o => t(e).email.value = o), U],
          required: t(e).email.rules.required,
          type: "email",
          name: "email",
          placeholder: a.$t("email"),
          number: 2,
          error: t(e).email.error,
          "error-message": t(e).email.errorMessage
        }, null, 8, ["modelValue", "required", "placeholder", "error", "error-message"]), F(d, {
          modelValue: t(e).phone.value,
          "onUpdate:modelValue": [r[3] || (r[3] = o => t(e).phone.value = o), E],
          required: t(e).phone.rules.required,
          type: "tel",
          name: "phone",
          placeholder: a.$t("phone"),
          number: 3,
          error: t(e).phone.error,
          "error-message": t(e).phone.errorMessage
        }, null, 8, ["modelValue", "required", "placeholder", "error", "error-message"]), s.withFileInput ? (g(), G(u, {
          key: 0,
          modelValue: t(e).resume.value,
          "onUpdate:modelValue": [r[4] || (r[4] = o => t(e).resume.value = o), r[5] || (r[5] = o => t(e).resume.error = !1)],
          name: "file",
          number: 4,
          error: t(e).resume.error,
          "error-message": t(e).resume.errorMessage
        }, null, 8, ["modelValue", "error", "error-message"])) : I("", !0), F(V, {
          modelValue: t(e).message.value,
          "onUpdate:modelValue": [r[6] || (r[6] = o => t(e).message.value = o), r[7] || (r[7] = o => t(e).message.error = !1)],
          "allowed-files": p.join(", "),
          name: "message",
          required: t(e).message.rules.required,
          placeholder: a.$t("form.message"),
          number: s.withFileInput ? 5 : 4,
          error: t(e).message.error,
          "error-message": t(e).message.errorMessage
        }, null, 8, ["modelValue", "allowed-files", "required", "placeholder", "number", "error", "error-message"]), n("div", Ve, [n("button", {
          class: M(["l1 submit", {
            sent: t($)
          }]),
          type: "submit",
          onClick: H(b, ["prevent"])
        }, v(t(m)), 3)])], 2)])
      }
    }
  }),
  Ie = q(xe, [
    ["__scopeId", "data-v-4988516a"]
  ]);
export {
  Ie as _
};