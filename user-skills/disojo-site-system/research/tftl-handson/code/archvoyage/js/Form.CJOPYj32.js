/* https://archvoyage.ae/_nuxt/Form.CJOPYj32.js */
import {
  d as N,
  r as _,
  a as h,
  b as T,
  e as a,
  M as E,
  Q as L,
  g as S,
  y as $,
  j as o,
  t as M,
  v as x,
  m as P,
  p as z,
  l as O,
  w as A,
  R as D,
  F as H,
  i as Q,
  C as I,
  D as C,
  z as R
} from "./entry.YPAKmh3d.js";
import {
  _ as G
} from "./Button.DsjJ-bLs.js";
import {
  v as J
} from "./setPageMeta.DvPDcq0E.js";
const K = {
    class: "input-wrapper"
  },
  W = {
    class: "top-line"
  },
  X = ["name", "aria-label", "type", "value"],
  Y = {
    class: "bottom-line"
  },
  Z = {
    class: "error-wrapper"
  },
  ee = {
    class: "error-message p3"
  },
  re = {
    name: "FormInput"
  },
  oe = N({
    ...re,
    props: {
      modelValue: {},
      error: {
        type: Boolean
      },
      errorMessage: {},
      placeholder: {},
      name: {},
      type: {},
      noTopLine: {
        type: Boolean
      }
    },
    emits: ["update:modelValue"],
    setup(w, {
      emit: y
    }) {
      const V = y,
        d = _(),
        r = _(!1);

      function n() {
        d.value && V("update:modelValue", d.value.value)
      }
      return (l, m) => {
        const g = x;
        return h(), T("div", {
          class: $(["wrapper", {
            error: l.error
          }])
        }, [a("div", K, [E(a("div", W, [S(g)], 512), [
          [L, !l.noTopLine]
        ]), a("span", {
          class: $(["placeholder p1", {
            focused: o(r) || l.modelValue
          }])
        }, M(l.placeholder), 3), a("input", {
          ref_key: "input",
          ref: d,
          name: l.name,
          "aria-label": l.name,
          class: "input p1",
          type: l.type,
          value: l.modelValue,
          onInput: n,
          onFocus: m[0] || (m[0] = b => r.value = !0),
          onBlur: m[1] || (m[1] = b => r.value = !1)
        }, null, 40, X), a("div", Y, [S(g)])]), a("div", Z, [a("p", ee, M(l.errorMessage), 1)])], 2)
      }
    }
  }),
  se = P(oe, [
    ["__scopeId", "data-v-4010bfee"]
  ]),
  ae = w => (z("data-v-9feb9e73"), w = w(), O(), w),
  le = {
    class: "textarea-wrapper"
  },
  te = {
    class: "top-line"
  },
  ne = ae(() => a("span", {
    class: "placeholder-title"
  }, "Message", -1)),
  ie = {
    class: "placeholder-message"
  },
  ue = ["aria-label", "name", "value"],
  pe = {
    class: "bottom-line"
  },
  de = {
    class: "error-wrapper"
  },
  me = {
    class: "error-message p3"
  },
  fe = {
    name: "FormTextarea"
  },
  ce = N({
    ...fe,
    props: {
      modelValue: {},
      error: {
        type: Boolean
      },
      errorMessage: {},
      placeholder: {},
      name: {},
      noTopLine: {
        type: Boolean
      }
    },
    emits: ["update:modelValue"],
    setup(w, {
      emit: y
    }) {
      const V = y,
        d = _(),
        r = _(!1);

      function n() {
        d.value && (V("update:modelValue", d.value.value), d.value.style.height = "0", d.value.style.height = `${d.value.scrollHeight}px`)
      }
      return (l, m) => {
        const g = x;
        return h(), T("div", {
          class: $(["wrapper", {
            error: l.error
          }])
        }, [a("div", le, [E(a("div", te, [S(g)], 512), [
          [L, !l.noTopLine]
        ]), a("p", {
          class: $(["placeholder p1", {
            focused: o(r) || l.modelValue
          }])
        }, [ne, a("span", ie, M(l.placeholder), 1)], 2), a("textarea", {
          ref_key: "textarea",
          ref: d,
          class: "textarea p1",
          "aria-label": l.name,
          rows: "1",
          name: l.name,
          value: l.modelValue,
          onInput: n,
          onFocus: m[0] || (m[0] = b => r.value = !0),
          onBlur: m[1] || (m[1] = b => r.value = !1)
        }, null, 40, ue), a("div", pe, [S(g)])]), a("div", de, [a("p", me, M(l.errorMessage), 1)])], 2)
      }
    }
  }),
  ve = P(ce, [
    ["__scopeId", "data-v-9feb9e73"]
  ]),
  ge = {
    class: "input-wrapper"
  },
  _e = {
    class: "top-line"
  },
  he = ["onClick"],
  ye = ["accept"],
  Ve = {
    class: "bottom-line"
  },
  $e = {
    class: "error-wrapper"
  },
  we = {
    class: "error-message p3"
  },
  Fe = {
    name: "FormInputFile"
  },
  be = N({
    ...Fe,
    props: {
      modelValue: {},
      error: {
        type: Boolean
      },
      errorMessage: {
        default: "Something is wrong"
      },
      allowedFiles: {
        default: "*"
      },
      noTopLine: {
        type: Boolean
      }
    },
    emits: ["update:modelValue"],
    setup(w, {
      emit: y
    }) {
      const V = w,
        d = y,
        r = _(),
        n = _([]),
        l = _(!1);
      A(() => V.modelValue, u => {
        u || (n.value = [])
      });

      function m() {
        r.value && r.value.files && ([...r.value.files].forEach(u => {
          n.value.push(u)
        }), d("update:modelValue", n.value))
      }

      function g(u) {
        var v;
        l.value = !1, (v = u.dataTransfer) != null && v.files && ([...u.dataTransfer.files].forEach(F => {
          n.value.push(F)
        }), d("update:modelValue", n.value))
      }

      function b(u) {
        n.value.splice(u, 1), d("update:modelValue", n.value)
      }

      function q(u) {
        var v, F;
        (F = (v = u.target) == null ? void 0 : v.classList) != null && F.contains("loaded-file") && u.preventDefault()
      }
      return (u, v) => {
        const F = x;
        return h(), T("div", {
          class: $(["wrapper", {
            error: u.error
          }])
        }, [a("div", ge, [E(a("div", _e, [S(F)], 512), [
          [L, !u.noTopLine]
        ]), a("div", {
          class: $(["active-background", {
            show: o(n).length || o(l)
          }])
        }, null, 2), a("label", {
          for: "file-input",
          onClick: q,
          onDrop: D(g, ["prevent"]),
          onDragover: v[0] || (v[0] = D(() => {}, ["prevent"])),
          onDragenter: v[1] || (v[1] = D(k => l.value = !0, ["prevent"])),
          onDragleave: v[2] || (v[2] = D(k => l.value = !1, ["prevent"]))
        }, [a("span", {
          class: $(["title p1", {
            focused: o(n).length
          }])
        }, "Attach Files", 2), E(a("p", {
          class: $(["description p1", {
            hide: o(l)
          }])
        }, " Drag & drop or browse your CV ", 2), [
          [L, !o(n).length]
        ]), (h(!0), T(H, null, Q(o(n), (k, B) => (h(), T("p", {
          key: B,
          class: "loaded-file p1",
          onClick: U => b(B)
        }, M(k.name), 9, he))), 128))], 32), a("input", {
          id: "file-input",
          ref_key: "input",
          ref: r,
          class: "input",
          "aria-label": "file",
          type: "file",
          multiple: "",
          accept: u.allowedFiles,
          onInput: m
        }, null, 40, ye), a("div", Ve, [S(F, {
          dashed: ""
        })])]), a("div", $e, [a("p", we, M(u.errorMessage), 1)])], 2)
      }
    }
  }),
  Se = P(be, [
    ["__scopeId", "data-v-4f275b8a"]
  ]),
  Me = {
    class: "form-wrapper"
  },
  Te = {
    class: "form-status-wrapper"
  },
  ke = {
    name: "CommonForm"
  },
  Ie = N({
    ...ke,
    props: {
      fields: {},
      buttonDefaultText: {
        default: "Apply"
      },
      messagePlaceholder: {
        default: ""
      },
      saveToStrapi: {
        type: Boolean
      }
    },
    setup(w) {
      const y = w,
        V = [".pdf", ".docx", ".doc", ".txt", ".ppt", ".pptx", ".xlsx", ".xls"],
        {
          $gsap: d
        } = R(),
        r = _({
          email: {
            value: "",
            rules: {
              required: !0,
              email: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          name: {
            value: "",
            rules: {
              required: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          phone: {
            value: "",
            rules: {
              required: !0,
              min: 5,
              phone: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          message: {
            value: "",
            rules: {
              required: !0
            },
            error: !1,
            errorMessage: "Something is wrong"
          },
          files: {
            value: null,
            rules: {
              fileType: V
            },
            error: !1,
            errorMessage: "Something is wrong"
          }
        }),
        n = _(!1),
        l = _(""),
        m = _(""),
        g = _();
      A(m, s => {
        s && B()
      });
      async function b() {
        if (q()) {
          const e = new FormData,
            c = r.value;
          for (let p in c) {
            if (!y.fields.includes(p)) continue;
            const f = c[p].value;
            if (f && p !== "files") {
              const j = k(f);
              e.append(`${p}`, j)
            }
          }
          y.fields.includes("files") && c.files.value && c.files.value.forEach(p => {
            e.append("file", p)
          }), y.saveToStrapi && e.append("saveToStrapi", "true"), n.value = !0, l.value = "Sending...";
          const i = await $fetch("/api/sendmail", {
            method: "post",
            body: e
          });
          m.value = i, F()
        }
      }

      function q() {
        let s = !0;
        const e = r.value;
        for (let c in e) {
          if (!y.fields.includes(c)) continue;
          const i = c,
            p = e[i].rules,
            t = e[i].value;
          p.min && (t != null && t.length) && (t == null ? void 0 : t.length) < p.min && (s = !1, e[i].error = !0, e[i].errorMessage = `At least ${p.min} symbols required`), p.email && t && !J(t) && (s = !1, e[i].error = !0, e[i].errorMessage = "Email is invalid"), p.phone && !u(t) && (s = !1, e[i].error = !0, e[i].errorMessage = "Phone is invalid"), p.fileType && (t != null && t.length) && !v(t) && (s = !1, e[i].error = !0, e[i].errorMessage = `Only ${V.join(", ")} files allowed`), p.required && (!t || !(t != null && t.length)) && (s = !1, e[i].error = !0, e[i].errorMessage = "Field is required")
        }
        return s
      }

      function u(s) {
        return s ? /^\+{0,1}[0-9]*$/.test(s) : !1
      }

      function v(s) {
        if (!s) return !1;
        let e = !0;
        return typeof s != "string" && s.forEach(c => {
          const i = c.name.split("."),
            p = "." + i[i.length - 1];
          V.includes(p) || (e = !1)
        }), e
      }

      function F() {
        const s = r.value;
        for (let e in s) {
          const c = e;
          e === "files" ? s[c].value = null : s[c].value = ""
        }
        setTimeout(() => {
          n.value = !1, l.value = "", U()
        }, 2e3)
      }

      function k(s) {
        return s ? s.replace(/<script>.*<\/script>/, "").trim().replace(/(<([^>]+)>)/gi, "") : ""
      }

      function B() {
        g.value && d.to(g.value, {
          y: 0,
          yPercent: 0,
          rotate: 0,
          duration: .4,
          ease: "custom"
        })
      }
      async function U() {
        g.value && (await d.to(g.value, {
          y: 0,
          yPercent: -110,
          rotate: -5,
          duration: .4,
          clearProps: "all",
          ease: "custom"
        }), m.value = "")
      }
      return (s, e) => {
        const c = se,
          i = ve,
          p = Se,
          t = G;
        return h(), T("div", Me, [a("form", {
          class: $(["form", {
            sending: o(n)
          }])
        }, [s.fields.includes("name") ? (h(), I(c, {
          key: 0,
          modelValue: o(r).name.value,
          "onUpdate:modelValue": [e[0] || (e[0] = f => o(r).name.value = f), e[1] || (e[1] = f => o(r).name.error = !1)],
          placeholder: "Name",
          name: "name",
          type: "text",
          error: o(r).name.error,
          "error-message": o(r).name.errorMessage
        }, null, 8, ["modelValue", "error", "error-message"])) : C("", !0), s.fields.includes("email") ? (h(), I(c, {
          key: 1,
          modelValue: o(r).email.value,
          "onUpdate:modelValue": [e[2] || (e[2] = f => o(r).email.value = f), e[3] || (e[3] = f => o(r).email.error = !1)],
          "no-top-line": "",
          placeholder: "Email",
          name: "email",
          type: "email",
          error: o(r).email.error,
          "error-message": o(r).email.errorMessage
        }, null, 8, ["modelValue", "error", "error-message"])) : C("", !0), s.fields.includes("phone") ? (h(), I(c, {
          key: 2,
          modelValue: o(r).phone.value,
          "onUpdate:modelValue": [e[4] || (e[4] = f => o(r).phone.value = f), e[5] || (e[5] = f => o(r).phone.error = !1)],
          "no-top-line": "",
          placeholder: "Phone Number",
          name: "phone",
          type: "tel",
          error: o(r).phone.error,
          "error-message": o(r).phone.errorMessage
        }, null, 8, ["modelValue", "error", "error-message"])) : C("", !0), s.fields.includes("message") ? (h(), I(i, {
          key: 3,
          modelValue: o(r).message.value,
          "onUpdate:modelValue": [e[6] || (e[6] = f => o(r).message.value = f), e[7] || (e[7] = f => o(r).message.error = !1)],
          "no-top-line": "",
          placeholder: s.messagePlaceholder,
          name: "message",
          error: o(r).message.error,
          "error-message": o(r).message.errorMessage
        }, null, 8, ["modelValue", "placeholder", "error", "error-message"])) : C("", !0), s.fields.includes("files") ? (h(), I(p, {
          key: 4,
          modelValue: o(r).files.value,
          "onUpdate:modelValue": [e[8] || (e[8] = f => o(r).files.value = f), e[9] || (e[9] = f => o(r).files.error = !1)],
          "no-top-line": "",
          "allowed-files": V.join(", "),
          error: o(r).files.error,
          "error-message": o(r).files.errorMessage
        }, null, 8, ["modelValue", "allowed-files", "error", "error-message"])) : C("", !0), a("button", {
          class: "form-submit",
          type: "submit",
          "aria-label": "form submit",
          onClick: D(b, ["prevent"])
        }, [S(t, {
          text: o(l) || s.buttonDefaultText
        }, null, 8, ["text"])])], 2), a("div", Te, [a("p", {
          ref_key: "formStatusEl",
          ref: g,
          class: $(["form-status p1", {
            error: o(m) === "Error!"
          }])
        }, M(o(m) === "Error!" ? "Sending failed" : "Success!"), 3)])])
      }
    }
  }),
  Ee = P(Ie, [
    ["__scopeId", "data-v-ac972656"]
  ]);
export {
  Ee as _
};