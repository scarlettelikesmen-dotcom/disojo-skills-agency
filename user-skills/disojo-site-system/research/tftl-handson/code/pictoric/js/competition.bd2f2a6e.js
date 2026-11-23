/* https://pictoric.com.ua/_nuxt/competition.bd2f2a6e.js */
import {
  e as he,
  f as $e,
  a as le,
  b as re,
  c as ie,
  d as we,
  _ as Ce,
  g as Me
} from "./FAQ.21219b46.js";
import {
  _ as Ve,
  f as Se,
  a as Te
} from "./Select.148f86b8.js";
import {
  _ as ue
} from "./Default.49af0b27.js";
import {
  d as Y,
  a2 as Fe,
  m as X,
  a3 as Le,
  b as a,
  c as m,
  g as e,
  i as y,
  j as t,
  _ as W,
  e as Ne,
  w as be,
  n as R,
  A as Z,
  t as g,
  q as ge,
  F as P,
  h as H,
  Z as oe,
  a4 as de,
  k as x,
  y as A,
  E as me,
  a5 as Ae,
  a6 as ee,
  z as I,
  r as G,
  B as te,
  a7 as ye,
  H as ce,
  Y as Ie,
  f as Be,
  G as _e,
  X as ae,
  o as Ee,
  a8 as qe,
  a9 as Pe,
  s as Ue,
  v as se,
  aa as Re,
  N as He,
  x as je,
  ab as Ke,
  C as ke,
  O as We,
  P as ze,
  u as Ge,
  Q as Ye,
  l as Oe,
  I as pe,
  M as Qe,
  R as Ze,
  S as Je
} from "./entry.6cb2d70d.js";
import {
  _ as Xe
} from "./Caret.8726756f.js";
import {
  _ as et
} from "./Circular.662c8455.js";
import {
  _ as xe
} from "./SansSerif.76e1e15a.js";
import {
  v as tt,
  _ as at
} from "./index.a90ee2f6.js";
import {
  a as ot,
  _ as st
} from "./Slide.a40fee9e.js";
import {
  _ as nt
} from "./index.3c30ea43.js";
import {
  _ as lt
} from "./Labels.9876e5d7.js";
import {
  u as rt
} from "./index.7717ae4c.js";
import {
  u as it
} from "./useDefaultAnim.bde1a832.js";
import "./useResize.e6421d34.js";
import "./pagination.9e265203.js";
import "./HanddrawnSvg.e4acccd9.js";
import "./index.13429eea.js";

function ne(r) {
  const h = r.value.trim();
  return r.required && !h ? {
    isValid: !1,
    errorMessage: "Field is required",
    errorKey: "fieldRequired"
  } : h && r.minLength && h.length < r.minLength ? {
    isValid: !1,
    errorMessage: `More than ${r.minLength} characters`,
    errorKey: "moreThanChars",
    errorParams: {
      count: r.minLength
    }
  } : {
    isValid: !0
  }
}
const De = 30 * 1024 * 1024,
  ut = ["application/pdf", "image/jpeg", "image/png", "image/webp"];

function fe(r) {
  return ut.includes(r.type) ? r.size > De ? {
    isValid: !1,
    errorMessage: "File size must be less than 30 MB",
    errorKey: "fileSizeMax"
  } : {
    isValid: !0
  } : {
    isValid: !1,
    errorMessage: "Only PDF and image (JPEG/PNG) files are allowed",
    errorKey: "onlyPdfAndImagesAllowed"
  }
}
const ct = {
    class: "about"
  },
  dt = {
    class: "fields-wrap"
  },
  mt = {
    class: "fields-row"
  },
  _t = {
    class: "button-wrap"
  },
  ve = 350,
  pt = Y({
    __name: "About",
    props: {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    },
    emits: Fe(["nextStep"], ["update:modelValue"]),
    setup(r, {
      emit: h
    }) {
      const {
        t: i
      } = X(), s = Le(r, "modelValue"), u = h;

      function $(D) {
        s.value[D].error.value = !1
      }

      function C() {
        let D = !0;
        for (const c in s.value) {
          const n = s.value[c],
            w = n.value.trim();
          if ("required" in n && n.required && !w) {
            n.error.value = !0, n.error.message = i("submission.errors.fieldRequired"), D = !1;
            continue
          }
          if (!w) {
            n.error.value = !1, n.error.message = "";
            continue
          }
          if ("minLength" in n && n.minLength && w.length < n.minLength) {
            n.error.value = !0, n.error.message = i("submission.errors.moreThanChars", {
              count: n.minLength
            }), D = !1;
            continue
          }
          if ("maxLength" in n && n.maxLength) {
            if (w.length > n.maxLength) {
              n.error.value = !0, n.error.message = i("submission.errors.lessThanChars", {
                count: n.maxLength
              }), D = !1;
              continue
            }
          } else if (w.length > ve) {
            n.error.value = !0, n.error.message = i("submission.errors.lessThanMaxChars", {
              max: ve
            }), D = !1;
            continue
          }
          if ("validate" in n && n.validate && !n.validate(n.value)) {
            D = !1;
            continue
          }
          n.error.value = !1
        }
        return D
      }

      function M() {
        C() && u("nextStep")
      }
      return (D, c) => {
        const n = he,
          w = Ve,
          S = $e,
          v = ue;
        return a(), m("div", ct, [e("div", dt, [e("div", mt, [y(n, {
          modelValue: s.value.firstName.value,
          "onUpdate:modelValue": [c[0] || (c[0] = p => s.value.firstName.value = p), c[1] || (c[1] = p => $("firstName"))],
          placeholder: t(i)(s.value.firstName.placeholder),
          type: s.value.firstName.type,
          name: s.value.firstName.name,
          error: s.value.firstName.error.value,
          "error-message": s.value.firstName.error.message ? s.value.firstName.error.message : "",
          autocomplete: s.value.firstName.autocomplete
        }, null, 8, ["modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete"]), y(n, {
          modelValue: s.value.lastName.value,
          "onUpdate:modelValue": [c[2] || (c[2] = p => s.value.lastName.value = p), c[3] || (c[3] = p => $("lastName"))],
          placeholder: t(i)(s.value.lastName.placeholder),
          type: s.value.lastName.type,
          name: s.value.lastName.name,
          error: s.value.lastName.error.value,
          "error-message": s.value.lastName.error.message ? s.value.lastName.error.message : "",
          autocomplete: s.value.lastName.autocomplete
        }, null, 8, ["modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete"])]), y(n, {
          modelValue: s.value.email.value,
          "onUpdate:modelValue": [c[4] || (c[4] = p => s.value.email.value = p), c[5] || (c[5] = p => {
            var U, E;
            $("email"), (E = (U = s.value.email).handleInput) == null || E.call(U, p)
          })],
          placeholder: t(i)(s.value.email.placeholder),
          type: s.value.email.type,
          name: s.value.email.name,
          error: s.value.email.error.value,
          "error-message": s.value.email.error.message ? s.value.email.error.message : "",
          autocomplete: s.value.email.autocomplete,
          inputmode: s.value.email.inputmode
        }, null, 8, ["modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete", "inputmode"]), y(w, {
          modelValue: s.value.country.value,
          "onUpdate:modelValue": [c[6] || (c[6] = p => s.value.country.value = p), c[7] || (c[7] = p => $("country"))],
          placeholder: t(i)(s.value.country.placeholder),
          options: s.value.country.options,
          error: s.value.country.error.value,
          "error-message": s.value.country.error.message ? s.value.country.error.message : ""
        }, null, 8, ["modelValue", "placeholder", "options", "error", "error-message"]), y(S, {
          modelValue: s.value.aboutMe.value,
          "onUpdate:modelValue": [c[8] || (c[8] = p => s.value.aboutMe.value = p), c[9] || (c[9] = p => $("aboutMe"))],
          placeholder: t(i)(s.value.aboutMe.placeholder),
          caption: s.value.aboutMe.caption ? t(i)(s.value.aboutMe.caption) : "",
          name: s.value.aboutMe.name,
          error: s.value.aboutMe.error.value,
          "error-message": s.value.aboutMe.error.message ? s.value.aboutMe.error.message : ""
        }, null, 8, ["modelValue", "placeholder", "caption", "name", "error", "error-message"]), y(n, {
          modelValue: s.value.experience.value,
          "onUpdate:modelValue": [c[10] || (c[10] = p => s.value.experience.value = p), c[11] || (c[11] = p => $("experience"))],
          placeholder: t(i)(s.value.experience.placeholder),
          type: s.value.experience.type,
          name: s.value.experience.name,
          error: s.value.experience.error.value,
          "error-message": s.value.experience.error.message ? s.value.experience.error.message : "",
          autocomplete: s.value.experience.autocomplete
        }, null, 8, ["modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete"])]), e("div", _t, [e("button", {
          class: "about-button",
          type: "button",
          onClick: M
        }, [y(v, {
          theme: "brown",
          text: t(i)("submission.buttons.nextStep")
        }, null, 8, ["text"])])])])
      }
    }
  });
const ft = W(pt, [
    ["__scopeId", "data-v-703da0dd"]
  ]),
  vt = {},
  ht = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function bt(r, h) {
  return a(), m("svg", ht, [...h[0] || (h[0] = [e("g", {
    "clip-path": "url(#clip0_2751_6151)"
  }, [e("path", {
    d: "M12.5002 5.83339L7.08357 11.2501C6.75205 11.5816 6.56581 12.0312 6.56581 12.5001C6.56581 12.9689 6.75205 13.4185 7.08357 13.7501C7.41509 14.0816 7.86473 14.2678 8.33357 14.2678C8.80242 14.2678 9.25205 14.0816 9.58357 13.7501L15.0002 8.33339C15.6633 7.67034 16.0358 6.77107 16.0358 5.83339C16.0358 4.8957 15.6633 3.99643 15.0002 3.33339C14.3372 2.67034 13.4379 2.29785 12.5002 2.29785C11.5626 2.29785 10.6633 2.67034 10.0002 3.33339L4.58357 8.75005C3.58901 9.74461 3.03027 11.0935 3.03027 12.5001C3.03027 13.9066 3.58901 15.2555 4.58357 16.2501C5.57814 17.2446 6.92705 17.8034 8.33357 17.8034C9.7401 17.8034 11.089 17.2446 12.0836 16.2501L17.5002 10.8334",
    stroke: "#411F15",
    "stroke-width": "2",
    "stroke-linecap": "round"
  })], -1), e("defs", null, [e("clipPath", {
    id: "clip0_2751_6151"
  }, [e("rect", {
    width: "20",
    height: "20",
    fill: "white"
  })])], -1)])])
}
const gt = W(vt, [
    ["render", bt]
  ]),
  yt = {},
  kt = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function xt(r, h) {
  return a(), m("svg", kt, [...h[0] || (h[0] = [Ne('<g clip-path="url(#clip0_2751_6144)"><path d="M11.4287 3.57227V6.42922C11.4287 6.61865 11.504 6.80032 11.6379 6.93427C11.7719 7.06821 11.9535 7.14346 12.143 7.14346H14.9999" stroke="white" stroke-width="1.71417" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.57217 11.4289H8.57932M11.4291 11.4289H11.4363M8.57217 13.5716H11.4291M13.5718 16.4286H6.42945C6.0506 16.4286 5.68726 16.2781 5.41937 16.0102C5.15148 15.7423 5.00098 15.3789 5.00098 15.0001V5.00074C5.00098 4.62189 5.15148 4.25855 5.41937 3.99066C5.68726 3.72277 6.0506 3.57227 6.42945 3.57227H11.4291L15.0003 7.14346V15.0001C15.0003 15.3789 14.8498 15.7423 14.5819 16.0102C14.314 16.2781 13.9507 16.4286 13.5718 16.4286Z" stroke="white" stroke-width="1.71417" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_2751_6144"><rect width="20" height="20" fill="white"></rect></clipPath></defs>', 2)])])
}
const Dt = W(yt, [
    ["render", xt]
  ]),
  $t = {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wt = Y({
    __name: "Loading",
    setup(r) {
      return (h, i) => (a(), m("svg", $t, [...i[0] || (i[0] = [e("path", {
        d: "M11.25 6C11.6642 6 12.0048 5.66291 11.9532 5.25193C11.8374 4.33032 11.5087 3.44457 10.9888 2.66658C10.3295 1.67988 9.39246 0.910849 8.2961 0.456723C7.19974 0.002597 5.99334 -0.116223 4.82946 0.115288C3.66557 0.3468 2.59647 0.918244 1.75736 1.75736C0.918244 2.59647 0.3468 3.66557 0.115288 4.82946C-0.116223 5.99334 0.00259702 7.19974 0.456723 8.2961C0.910849 9.39246 1.67988 10.3295 2.66658 10.9888C3.44457 11.5087 4.33032 11.8374 5.25193 11.9532C5.66291 12.0048 6 11.6642 6 11.25C6 10.8358 5.66193 10.5064 5.25346 10.4376C4.6291 10.3326 4.03103 10.0965 3.49993 9.74161C2.75991 9.24715 2.18314 8.54434 1.84254 7.72208C1.50195 6.89981 1.41283 5.99501 1.58647 5.12209C1.7601 4.24918 2.18868 3.44736 2.81802 2.81802C3.44736 2.18868 4.24918 1.7601 5.12209 1.58647C5.99501 1.41283 6.89981 1.50195 7.72208 1.84254C8.54434 2.18314 9.24715 2.75991 9.74161 3.49993C10.0965 4.03103 10.3326 4.6291 10.4376 5.25346C10.5064 5.66193 10.8358 6 11.25 6Z",
        fill: "#FFE515"
      }, null, -1)])]))
    }
  });
const Ct = W(wt, [
    ["__scopeId", "data-v-ba989820"]
  ]),
  Mt = {
    class: "works"
  },
  Vt = {
    class: "fields-wrap"
  },
  St = {
    class: "nominations-inner"
  },
  Tt = {
    class: "nominations"
  },
  Ft = ["checked", "value", "onChange"],
  Lt = {
    key: 0,
    class: "forms-wrap"
  },
  Nt = ["onClick"],
  At = {
    class: "remove-button__icon"
  },
  It = {
    class: "form-fields"
  },
  Bt = {
    key: 0,
    class: "radio-group"
  },
  Et = {
    class: "radio-title t2-xb"
  },
  qt = {
    class: "radio-options"
  },
  Pt = {
    key: 0,
    class: "radio-field"
  },
  Ut = ["onUpdate:modelValue", "name", "value"],
  Rt = {
    class: "radio-text t2-xb"
  },
  Ht = ["onClick"],
  jt = {
    class: "radio-field"
  },
  Kt = ["onUpdate:modelValue", "name", "value"],
  Wt = {
    class: "radio-text t2-xb"
  },
  zt = {
    class: "files-group"
  },
  Gt = {
    class: "file-title-wrap"
  },
  Yt = {
    class: "file-title t2-xb"
  },
  Ot = {
    key: 0,
    class: "file-name-wrap"
  },
  Qt = {
    class: "file-name t2-xb"
  },
  Zt = {
    key: 1,
    class: "file-caption t2-xb"
  },
  Jt = ["id", "max-file-size", "name", "onChange"],
  Xt = ["onClick"],
  ea = {
    class: "file-error t2-xb"
  },
  ta = {
    class: "rights-wrap"
  },
  aa = {
    class: "rights-text t2-xb"
  },
  oa = {
    key: 0,
    class: "rights-error t2-xb"
  },
  sa = {
    class: "form-buttons"
  },
  na = ["disabled"],
  la = ["disabled"],
  ra = {
    class: "sticky-wrap inset"
  },
  ia = {
    class: "sticky"
  },
  ua = ["disabled"],
  ca = Y({
    __name: "Works",
    props: {
      data: {},
      nominationsState: {},
      formsData: {},
      submitButtonState: {}
    },
    emits: ["prevStep", "submit", "update:nominationsState", "update:formsData"],
    setup(r, {
      emit: h
    }) {
      const {
        t: i
      } = X(), s = r, u = h, $ = G(!1);

      function C(_) {
        return _ ? _.startsWith("submission.") ? i(_) : _ : ""
      }
      const M = G(!1),
        D = G(!1),
        c = te({
          get: () => s.nominationsState,
          set: _ => u("update:nominationsState", _)
        }),
        n = te({
          get: () => s.formsData,
          set: _ => u("update:formsData", _)
        });

      function w(_, F) {
        F.target.checked ? c.value = [...c.value, _] : c.value = c.value.filter(b => b !== _)
      }

      function S(_) {
        const F = n.value[_];
        F && (c.value = c.value.filter(j => j !== F.nominationIndex))
      }
      const v = {
        FILE_REQUIRED: "submission.errors.fileRequired"
      };

      function p(_, F, j) {
        var d, V;
        const b = j.target,
          B = (d = b.files) == null ? void 0 : d[0];
        if (!B || !((V = n.value[_]) != null && V.formData.files)) return;
        const f = n.value[_].formData.files[F],
          l = fe(B);
        if (!l.isValid) {
          f.error.value = !0, f.error.message = l.errorKey ? i("submission.errors." + l.errorKey) : i("submission.errors.invalidFile"), f.file = null, b.value = "";
          return
        }
        f.file = B, f.error.value = !1;
        const L = n.value[_];
        L.formData.files.every(q => q.file !== null) && L.formData.files.forEach(q => {
          q.error.message === v.FILE_REQUIRED && (q.error.value = !1)
        })
      }

      function U(_, F) {
        var f;
        if (!((f = n.value[_]) != null && f.formData.files)) return;
        n.value[_].formData.files[F].file = null, n.value[_].formData.files[F].error.value = !1;
        const j = document.getElementById(`file-${_}-${F}`);
        j && (j.value = "");
        const b = n.value[_];
        b.formData.files.every(l => l.file !== null) || b.formData.files.forEach(l => {
          l.file ? l.error.message === v.FILE_REQUIRED && (l.error.value = !1) : (l.error.value = !0, l.error.message = v.FILE_REQUIRED)
        })
      }

      function E(_) {
        return "isBookIssued" in _
      }

      function O(_) {
        return "scientificInstitution" in _
      }
      be(() => n.value.map(_ => _.type === "book" && E(_.formData) ? _.formData.isBookIssued.value : null), () => {
        n.value.forEach(_ => {
          _.type === "book" && E(_.formData) && (_.formData.publicationTitles.required = _.formData.isBookIssued.value === "yes", _.formData.isBookIssued.value === "no" && (_.formData.publicationTitles.value = "", _.formData.publicationTitles.error.value = !1))
        })
      }, {
        deep: !0
      });

      function J() {
        let _ = !0;
        if (c.value.length === 0) return !1;

        function F(b) {
          const B = ["name", "year", "technique"];
          let f = !0;
          if (B.forEach(l => {
              const L = b.formData[l],
                k = ne(L);
              L.error.value = !k.isValid, k.errorKey ? L.error.message = i("submission.errors." + k.errorKey, k.errorParams || {}) : k.errorMessage && (L.error.message = k.errorMessage), k.isValid || (f = !1)
            }), b.type === "book" && E(b.formData) && b.formData.publicationTitles.required) {
            const l = ne(b.formData.publicationTitles);
            b.formData.publicationTitles.error.value = !l.isValid, l.errorKey ? b.formData.publicationTitles.error.message = i("submission.errors." + l.errorKey, l.errorParams || {}) : l.errorMessage && (b.formData.publicationTitles.error.message = l.errorMessage), l.isValid || (f = !1)
          }
          if (b.type === "student" && O(b.formData)) {
            const l = ne(b.formData.scientificInstitution);
            b.formData.scientificInstitution.error.value = !l.isValid, l.errorKey ? b.formData.scientificInstitution.error.message = i("submission.errors." + l.errorKey, l.errorParams || {}) : l.errorMessage && (b.formData.scientificInstitution.error.message = l.errorMessage), l.isValid || (f = !1)
          }
          return f
        }

        function j(b) {
          let B = !0;
          return b.formData.files.forEach((l, L) => {
            if (l.file) {
              const k = fe(l.file);
              if (l.error.value = !k.isValid, k.errorKey ? l.error.message = i("submission.errors." + k.errorKey) : k.errorMessage && (l.error.message = k.errorMessage), !k.isValid) {
                B = !1;
                return
              }
            }
          }), b.formData.files.every(l => l.file !== null) || (b.formData.files.forEach(l => {
            l.file || (l.error.value = !0, l.error.message = v.FILE_REQUIRED)
          }), B = !1), B
        }
        return n.value.forEach(b => {
          const B = F(b),
            f = j(b);
          (!B || !f) && (_ = !1)
        }), M.value || (D.value = !0, _ = !1), _
      }

      function Q() {
        J() && u("submit")
      }
      return (_, F) => {
        var q;
        const j = Xe,
          b = ye,
          B = he,
          f = gt,
          l = Dt,
          L = et,
          k = Ct,
          d = xe,
          V = ue;
        return a(), m("div", Mt, [e("form", {
          class: "works-form",
          onSubmit: me(Q, ["prevent", "stop"])
        }, [e("div", Vt, [e("button", {
          type: "button",
          class: R(["nomination-toggle t2-xb", {
            active: t($)
          }]),
          onClick: F[0] || (F[0] = o => $.value = !t($))
        }, [Z(g(t(i)("submission.works.nomination")) + " ", 1), e("span", {
          class: R(["nomination-toggle__icon", {
            active: t($)
          }])
        }, [y(j, {
          direction: "top",
          class: "inner-svg"
        })], 2)], 2), e("div", {
          class: R(["nominations-wrap", {
            active: t($)
          }]),
          style: ge(`--nominations-count: ${r.data.length}`)
        }, [e("div", St, [e("div", Tt, [(a(!0), m(P, null, H(Array(3), (o, T) => (a(), m("div", {
          key: T,
          class: "nominations-col"
        }, [(a(!0), m(P, null, H(r.data.slice(T * 4, T * 4 + 4), (N, K) => (a(), m("label", {
          key: `${T}-${K}`,
          class: "nominations__field t2-xb"
        }, [e("input", {
          checked: t(c).includes(T * 4 + K),
          type: "checkbox",
          class: "nominations__checkbox",
          value: T * 4 + K,
          onChange: z => w(T * 4 + K, z)
        }, null, 40, Ft), Z(" " + g(N.name), 1)]))), 128))]))), 128))])])], 6), (q = t(n)) != null && q.length ? (a(), m("div", Lt, [(a(!0), m(P, null, H(t(n), (o, T) => (a(), m("div", {
          key: T,
          class: "form-wrap"
        }, [e("button", {
          type: "button",
          class: "remove-button t2-xb",
          onClick: N => S(T)
        }, [Z(g(o.name) + " ", 1), e("span", At, [y(b, {
          class: "inner-svg"
        })])], 8, Nt), e("div", It, [y(B, {
          modelValue: o.formData.name.value,
          "onUpdate:modelValue": [N => o.formData.name.value = N, () => {
            o.formData.name.error.value = !1
          }],
          placeholder: t(i)(o.formData.name.placeholder),
          type: o.formData.name.type,
          name: `name-${T}`,
          error: o.formData.name.error.value,
          "error-message": C(o.formData.name.error.message),
          autocomplete: o.formData.name.autocomplete
        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete"]), y(B, {
          modelValue: o.formData.year.value,
          "onUpdate:modelValue": [N => o.formData.year.value = N, N => {
            var K, z;
            o.formData.year.error.value = !1, (z = (K = o.formData.year).handleInput) == null || z.call(K, N)
          }],
          placeholder: t(i)(o.formData.year.placeholder),
          type: o.formData.year.type,
          name: `year-${T}`,
          error: o.formData.year.error.value,
          "error-message": C(o.formData.year.error.message),
          inputmode: o.formData.year.inputmode
        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "type", "name", "error", "error-message", "inputmode"]), y(B, {
          modelValue: o.formData.technique.value,
          "onUpdate:modelValue": [N => o.formData.technique.value = N, () => {
            o.formData.technique.error.value = !1
          }],
          placeholder: t(i)(o.formData.technique.placeholder),
          type: o.formData.technique.type,
          name: `technique-${T}`,
          error: o.formData.technique.error.value,
          "error-message": C(o.formData.technique.error.message),
          autocomplete: o.formData.technique.autocomplete
        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete"]), o.type === "book" && E(o.formData) ? (a(), m("div", Bt, [e("p", Et, g(t(i)(o.formData.isBookIssued.title)), 1), e("div", qt, [(a(!0), m(P, null, H(o.formData.isBookIssued.options, (N, K) => (a(), m(P, {
          key: N.value
        }, [K ? (a(), m("div", {
          key: 1,
          class: "radio-field-wrap",
          onClick: z => o.formData.isBookIssued.value = "yes"
        }, [e("label", jt, [oe(e("input", {
          "onUpdate:modelValue": z => o.formData.isBookIssued.value = z,
          type: "radio",
          class: "radio-input",
          name: `isBookIssued-${T}`,
          value: N.value
        }, null, 8, Kt), [
          [de, o.formData.isBookIssued.value]
        ]), e("span", Wt, g(t(i)(N.label)), 1)]), y(B, {
          modelValue: o.formData.publicationTitles.value,
          "onUpdate:modelValue": [z => o.formData.publicationTitles.value = z, () => {
            E(o.formData) && (o.formData.publicationTitles.error.value = !1)
          }],
          placeholder: t(i)(o.formData.publicationTitles.placeholder),
          type: o.formData.publicationTitles.type,
          name: `publicationTitles-${T}`,
          error: o.formData.publicationTitles.error.value,
          "error-message": C(o.formData.publicationTitles.error.message),
          autocomplete: o.formData.publicationTitles.autocomplete,
          required: !0,
          class: "publications-input"
        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete"])], 8, Ht)) : (a(), m("label", Pt, [oe(e("input", {
          "onUpdate:modelValue": z => o.formData.isBookIssued.value = z,
          type: "radio",
          class: "radio-input",
          name: `isBookIssued-${T}`,
          value: N.value
        }, null, 8, Ut), [
          [de, o.formData.isBookIssued.value]
        ]), e("span", Rt, g(t(i)(N.label)), 1)]))], 64))), 128))])])) : x("", !0), o.type === "student" ? (a(), m(P, {
          key: 1
        }, [O(o.formData) ? (a(), A(B, {
          key: 0,
          modelValue: o.formData.scientificInstitution.value,
          "onUpdate:modelValue": [N => o.formData.scientificInstitution.value = N, () => {
            O(o.formData) && (o.formData.scientificInstitution.error.value = !1)
          }],
          placeholder: t(i)(o.formData.scientificInstitution.placeholder),
          type: o.formData.scientificInstitution.type,
          name: `scientificInstitution-${T}`,
          error: o.formData.scientificInstitution.error.value,
          "error-message": C(o.formData.scientificInstitution.error.message),
          autocomplete: o.formData.scientificInstitution.autocomplete
        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "type", "name", "error", "error-message", "autocomplete"])) : x("", !0)], 64)) : x("", !0), e("div", zt, [(a(!0), m(P, null, H(o.formData.files, (N, K) => (a(), m("div", {
          key: K,
          class: R(["file-field-wrap", {
            single: o.type === "default"
          }])
        }, [e("label", {
          class: R(["file-field", {
            error: N.error.value,
            "has-file": N.file
          }])
        }, [e("div", Gt, [e("p", Yt, g(N.title), 1), N.file ? x("", !0) : (a(), A(f, {
          key: 0,
          class: "file-title-icon"
        }))]), N.file ? (a(), m("div", Ot, [y(l, {
          class: "file-name-icon"
        }), e("p", Qt, g(N.file.name), 1)])) : (a(), m("p", Zt, g(t(i)("submission.works.fileCaption")), 1)), e("input", {
          id: `file-${T}-${K}`,
          type: "file",
          accept: "application/pdf,image/jpeg,image/png,image/webp",
          "max-file-size": t(De),
          class: "file-input",
          name: `file-${T}-${K}`,
          onChange: z => p(Number(T), Number(K), z)
        }, null, 40, Jt)], 2), N.file ? (a(), m("button", {
          key: 0,
          type: "button",
          class: "file-button",
          onClick: me(z => U(Number(T), Number(K)), ["prevent", "stop"])
        }, [y(b, {
          class: "file-button-icon"
        })], 8, Xt)) : x("", !0), e("div", {
          class: R(["file-error-wrap", {
            shown: N.error.value
          }])
        }, [e("div", ea, g(C(N.error.message)), 1)], 2)], 2))), 128))])])]))), 128)), e("div", ta, [e("label", {
          class: R(["rights-field", {
            error: t(D)
          }])
        }, [oe(e("input", {
          "onUpdate:modelValue": F[1] || (F[1] = o => ee(M) ? M.value = o : null),
          type: "checkbox",
          class: "rights-input",
          onChange: F[2] || (F[2] = o => D.value = !1)
        }, null, 544), [
          [Ae, t(M)]
        ]), e("p", aa, g(t(i)("submission.works.rightsText")), 1)], 2), t(D) ? (a(), m("p", oa, g(t(i)("submission.works.rightsError")), 1)) : x("", !0)])])) : x("", !0)]), e("div", sa, [e("button", {
          class: "back-button mob",
          type: "button",
          disabled: r.submitButtonState === "sending",
          onClick: F[3] || (F[3] = o => u("prevStep"))
        }, [y(L, {
          theme: "brown",
          animated: ""
        })], 8, na), e("button", {
          class: "works-button",
          type: "submit",
          disabled: t(c).length === 0 || r.submitButtonState !== "send"
        }, [y(V, {
          theme: "brown",
          text: t(i)("submission.buttons." + r.submitButtonState)
        }, {
          default: I(() => [r.submitButtonState === "sending" ? (a(), A(k, {
            key: 0
          })) : (a(), A(d, {
            key: 1
          }))]),
          _: 1
        }, 8, ["text"])], 8, la)])], 32), e("div", ra, [e("div", ia, [e("button", {
          class: "back-button desk",
          type: "button",
          disabled: r.submitButtonState === "sending",
          onClick: F[4] || (F[4] = o => u("prevStep"))
        }, [y(L, {
          theme: "brown",
          animated: ""
        })], 8, ua)])])])
      }
    }
  });
const da = W(ca, [
    ["__scopeId", "data-v-a4fda6a9"]
  ]),
  ma = {
    class: "ty-wrap"
  },
  _a = {
    class: "title-wrap"
  },
  pa = {
    class: "ty-title h1"
  },
  fa = {
    class: "ty-description h4"
  },
  va = Y({
    __name: "ThankYou",
    emits: ["goBack"],
    setup(r, {
      emit: h
    }) {
      const {
        t: i
      } = X(), s = h;
      return (u, $) => {
        const C = ce;
        return a(), m("div", ma, [e("div", _a, [e("h2", pa, g(t(i)("submission.thankYou.title")), 1), e("p", fa, g(t(i)("submission.thankYou.description")), 1)]), e("button", {
          class: "back-button",
          type: "button",
          onClick: $[0] || ($[0] = M => s("goBack"))
        }, [y(C, {
          text: t(i)("submission.buttons.goBack"),
          theme: "light"
        }, null, 8, ["text"])])])
      }
    }
  });
const ha = W(va, [
    ["__scopeId", "data-v-467d5fd7"]
  ]),
  ba = {
    key: 1,
    class: "head-wrap grid-container"
  },
  ga = {
    class: "steps",
    "data-lenis-prevent": ""
  },
  ya = Y({
    __name: "index",
    props: {
      data: {},
      activeTab: {},
      initialNominationIndex: {
        default: void 0
      }
    },
    emits: ["update:activeTab", "hideModal"],
    setup(r, {
      emit: h
    }) {
      const i = r,
        s = h,
        {
          t: u
        } = X(),
        {
          lockScroll: $
        } = Ie(),
        C = Be("commonData"),
        M = _e({
          firstName: {
            value: "",
            error: {
              value: !1,
              message: ""
            },
            placeholder: "submission.placeholders.firstName",
            type: "text",
            name: "firstName",
            required: !0,
            minLength: 3,
            autocomplete: "given-name"
          },
          lastName: {
            value: "",
            error: {
              value: !1,
              message: ""
            },
            placeholder: "submission.placeholders.lastName",
            type: "text",
            name: "lastName",
            inputmode: "text"
          },
          email: {
            value: "",
            error: {
              value: !1,
              message: ""
            },
            placeholder: "submission.placeholders.email",
            type: "email",
            name: "email",
            required: !0,
            inputmode: "email",
            autocomplete: "email",
            validate: f => {
              const {
                isValid: l
              } = tt(f);
              return l || (M.email.error.value = !0, M.email.error.message = "submission.errors.invalidEmail"), l
            },
            handleInput: async f => {
              await ae();
              const l = f.replace(/[&=+<>_,'-]/g, "").replace(/\.{2,}/g, ".");
              M.email.value = l
            }
          },
          country: {
            value: "",
            error: {
              value: !1,
              message: ""
            },
            placeholder: "submission.placeholders.country",
            name: "country",
            options: C.value.competitionCountries,
            required: !0
          },
          aboutMe: {
            value: "",
            error: {
              value: !1,
              message: ""
            },
            placeholder: "submission.placeholders.aboutMe",
            name: "about",
            caption: "submission.placeholders.aboutMeCaption",
            minLength: 10,
            maxLength: 350
          },
          experience: {
            value: "",
            error: {
              value: !1,
              message: ""
            },
            placeholder: "submission.placeholders.experience",
            type: "text",
            name: "experience",
            required: !0,
            minLength: 3
          }
        }),
        D = G(i.initialNominationIndex ? [i.initialNominationIndex] : []),
        c = _e([]);

      function n() {
        return {
          value: !1,
          message: "submission.errors.invalidData"
        }
      }

      function w(f) {
        return {
          title: f,
          file: null,
          error: n()
        }
      }

      function S(f) {
        const {
          name: l,
          type: L
        } = i.data.nominations[f], k = {
          name: {
            value: "",
            type: "text",
            placeholder: "submission.placeholders.nameProject",
            required: !0,
            minLength: 3,
            error: n()
          },
          year: {
            value: "",
            type: "text",
            placeholder: "submission.placeholders.year",
            required: !0,
            minLength: 4,
            inputmode: "numeric",
            error: n(),
            handleInput: async d => {
              await ae();
              const V = c.find(q => q.nominationIndex === f);
              V && (V.formData.year.value = d.replace(/\D/g, ""))
            }
          },
          technique: {
            value: "",
            type: "text",
            placeholder: "submission.placeholders.technique",
            required: !0,
            minLength: 3,
            error: n()
          }
        };
        return L === "book" ? {
          type: L,
          name: l,
          nominationIndex: f,
          formData: {
            ...k,
            isBookIssued: {
              value: "no",
              type: "radio",
              title: "submission.placeholders.isBookIssued",
              options: [{
                label: "submission.book.no",
                value: "no"
              }, {
                label: "submission.book.yes",
                value: "yes"
              }],
              error: n()
            },
            publicationTitles: {
              value: "",
              type: "text",
              placeholder: "submission.placeholders.publicationTitles",
              required: !1,
              minLength: 3,
              error: n()
            },
            files: Array(3).fill(null).map((d, V) => w(u("submission.placeholders.addWork", {
              n: V + 1
            })))
          }
        } : L === "student" ? {
          type: L,
          name: l,
          nominationIndex: f,
          formData: {
            ...k,
            scientificInstitution: {
              value: "",
              type: "text",
              placeholder: "submission.placeholders.scientificInstitution",
              required: !0,
              minLength: 3,
              autocomplete: "organization",
              error: n()
            },
            files: Array(3).fill(null).map((d, V) => w(u("submission.placeholders.addWork", {
              n: V + 1
            })))
          }
        } : {
          type: L,
          name: l,
          nominationIndex: f,
          formData: {
            ...k,
            files: [w(u("submission.placeholders.attachWork"))]
          }
        }
      }
      be(D, (f, l = []) => {
        const L = f.filter(d => !l.includes(d)),
          k = l.filter(d => !f.includes(d));
        L.forEach(d => {
          c.push(S(d))
        }), k.forEach(d => {
          const V = c.findIndex(q => q.nominationIndex === d);
          V !== -1 && c.splice(V, 1)
        }), c.sort((d, V) => d.nominationIndex - V.nominationIndex)
      }, {
        immediate: !0
      });
      const v = te(() => [{
          title: u("submission.steps.aboutMe")
        }, {
          title: u("submission.steps.attachWorks")
        }]),
        p = te({
          get: () => i.activeTab,
          set: f => s("update:activeTab", f)
        }),
        U = Ue();
      let E;
      async function O() {
        await ae(), U.value && ($(!0), E = se.to(U.value, {
          autoAlpha: 1,
          duration: .6,
          ease: "default-ease"
        }))
      }
      let J = !1;
      async function Q() {
        J || (J = !0, await (E == null ? void 0 : E.reverse()), $(!1), p.value !== "thank-you" && (p.value = "about"), s("hideModal"))
      }
      let _;
      async function F(f) {
        var l;
        _ = _ || ((l = U.value) == null ? void 0 : l.querySelector(".steps")), _ && (await se.to(_, {
          autoAlpha: 0,
          duration: .6,
          ease: "default-ease"
        }), p.value = f, await ae(), se.to(_, {
          autoAlpha: 1,
          duration: .6,
          ease: "default-ease"
        }))
      }
      async function j(f) {
        return new Promise((l, L) => {
          const k = new FileReader;
          k.onload = () => {
            const d = k.result;
            l(d.split(",")[1])
          }, k.onerror = L, k.readAsDataURL(f)
        })
      }
      const b = G("send");
      async function B() {
        var L, k;
        b.value = "sending";
        const f = await Promise.all(c.map(async d => {
            const V = await Promise.all(d.formData.files.filter(o => o.file).map(async o => ({
                name: o.file.name,
                type: o.file.type,
                size: o.file.size,
                data: await j(o.file)
              }))),
              q = {
                type: d.type,
                nominationIndex: d.nominationIndex,
                nominationName: d.name,
                name: d.formData.name.value,
                year: d.formData.year.value,
                technique: d.formData.technique.value,
                files: V
              };
            if (d.type === "book") {
              const o = d.formData;
              q.isBookIssued = o.isBookIssued.value, o.isBookIssued.value === "yes" && (q.publicationTitles = o.publicationTitles.value)
            }
            if (d.type === "student") {
              const o = d.formData;
              q.scientificInstitution = o.scientificInstitution.value
            }
            return q
          })),
          l = {
            nomination: ((L = i.data.nominations[D.value[0]]) == null ? void 0 : L.name) || "",
            type_nomination: ((k = i.data.nominations[D.value[0]]) == null ? void 0 : k.type) || "",
            about: {
              firstName: M.firstName.value,
              lastName: M.lastName.value,
              email: M.email.value,
              country: M.country.value,
              aboutMe: M.aboutMe.value,
              experience: M.experience.value
            },
            works: f
          };
        try {
          const d = await $fetch("/api/collections/form-competition", {
            method: "post",
            body: l
          });
          if (d && typeof d == "object" && "error" in d) {
            b.value = "error", setTimeout(() => {
              b.value = "send"
            }, 5e3), alert(u("submission.formSubmit.failed", {
              message: d.message || d.error
            }));
            return
          }
          b.value = "sent", setTimeout(() => {
            p.value = "thank-you"
          }, 1e3)
        } catch (d) {
          b.value = "error", setTimeout(() => {
            b.value = "send"
          }, 5e3);
          let V = u("submission.formSubmit.errorGeneric");
          d.status === 500 ? V = u("submission.formSubmit.error500") : d.status === 400 ? V = u("submission.formSubmit.error400") : d.message && (V = d.message), alert(V)
        }
      }
      return Ee(O), (f, l) => {
        const L = ft,
          k = da,
          d = ha,
          V = ye,
          q = Re,
          o = He;
        return a(), A(Pe, {
          to: "#__nuxt"
        }, [y(o, null, {
          default: I(() => [e("div", {
            ref_key: "modalRef",
            ref: U,
            class: "modal"
          }, [y(qe, {
            name: "fade"
          }, {
            default: I(() => [t(p) !== "thank-you" ? (a(), m("div", {
              key: 0,
              class: R(["progress-line", {
                active: t(p) !== "about"
              }])
            }, null, 2)) : x("", !0), t(p) !== "thank-you" ? (a(), m("div", ba, [e("span", {
              class: R(["head-item t2-xb", {
                active: t(p) === "about"
              }])
            }, g(t(v)[0].title), 3), e("span", {
              class: R(["head-item t2-xb", {
                active: t(p) === "works"
              }])
            }, g(t(v)[1].title), 3)])) : x("", !0)]),
            _: 1
          }), e("div", ga, [t(p) === "about" ? (a(), A(L, {
            key: 0,
            modelValue: t(M),
            "onUpdate:modelValue": l[0] || (l[0] = T => ee(M) ? M.value = T : null),
            onNextStep: l[1] || (l[1] = T => F("works"))
          }, null, 8, ["modelValue"])) : x("", !0), t(p) === "works" ? (a(), A(k, {
            key: 1,
            "nominations-state": t(D),
            "onUpdate:nominationsState": l[2] || (l[2] = T => ee(D) ? D.value = T : null),
            "forms-data": t(c),
            "onUpdate:formsData": l[3] || (l[3] = T => ee(c) ? c.value = T : null),
            data: r.data.nominations,
            "submit-button-state": t(b),
            onSubmit: B,
            onPrevStep: l[4] || (l[4] = T => F("about"))
          }, null, 8, ["nominations-state", "forms-data", "data", "submit-button-state"])) : x("", !0), t(p) === "thank-you" ? (a(), A(d, {
            key: 2,
            onGoBack: Q
          })) : x("", !0)]), e("button", {
            type: "button",
            class: "close-button",
            onClick: Q
          }, [y(q, {
            text: t(u)("submission.buttons.close"),
            theme: "light",
            reversed: ""
          }, {
            default: I(() => [y(V)]),
            _: 1
          }, 8, ["text"])])], 512)]),
          _: 1
        })])
      }
    }
  });
const ka = W(ya, [
    ["__scopeId", "data-v-88a82050"]
  ]),
  xa = {
    key: 0,
    class: "hero"
  },
  Da = {
    class: "title-wrapper h1_2"
  },
  $a = {
    class: "hero-title anim-title instant"
  },
  wa = {
    class: "title-clone anim-title instant"
  },
  Ca = {
    class: "competition-label t2-xb anim-text instant"
  },
  Ma = {
    class: "competition-value h5 anim-title instant"
  },
  Va = {
    class: "bottom-row"
  },
  Sa = {
    class: "rules"
  },
  Ta = {
    class: "rules__label t2-xb anim-text instant"
  },
  Fa = {
    class: "results"
  },
  La = {
    key: 0,
    class: "results__item t2-xb anim-text instant"
  },
  Na = {
    key: 1,
    class: "results__item t2-bl anim-text instant"
  },
  Aa = Y({
    __name: "Hero",
    props: {
      data: {}
    },
    emits: ["showModal"],
    setup(r, {
      emit: h
    }) {
      const {
        t: i,
        locale: s
      } = X(), u = je(), C = G(r.data.apply ? "submission" : "waitingResults"), M = h, D = s.value === "uk" ? "uk-UA" : "en-US", c = i("buttons.viewRules"), n = i("buttons.apply");
      return (w, S) => {
        var E;
        const v = Ke,
          p = ke,
          U = ce;
        return (E = r.data) != null && E.hero ? (a(), m("section", xa, [e("div", Da, [e("h1", $a, g(r.data.hero.title), 1), e("p", wa, g(r.data.hero.title), 1)]), e("p", Ca, g(r.data.hero.competitionsData[t(C)].label), 1), e("p", Ma, g(r.data.hero.competitionsData[t(C)].date), 1), e("div", Va, [e("p", Sa, [e("span", Ta, g(r.data.hero.rules.label), 1), y(p, {
          class: "rules__link t2-bl",
          to: t(u)(r.data.hero.rules.link)
        }, {
          default: I(() => [y(v, {
            text: t(c),
            class: "anim-text instant"
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to"])]), r.data.apply ? (a(), m("button", {
          key: 0,
          class: "hero-button",
          onClick: S[0] || (S[0] = O => M("showModal"))
        }, [y(U, {
          text: t(n)
        }, null, 8, ["text"])])) : x("", !0), e("p", Fa, [r.data.hero.competitionsData[t(C)].statusTitle ? (a(), m("span", La, g(r.data.hero.competitionsData[t(C)].statusTitle), 1)) : x("", !0), r.data.hero.competitionsData[t(C)].statusDate ? (a(), m("span", Na, g(t(Se)(r.data.hero.competitionsData[t(C)].statusDate, {
          locale: t(D)
        })), 1)) : x("", !0)])])])) : x("", !0)
      }
    }
  });
const Ia = W(Aa, [
    ["__scopeId", "data-v-207d86ee"]
  ]),
  Ba = {
    class: "media-thumb"
  },
  Ea = ["src", "alt"],
  qa = {
    class: "body-inner grid-container"
  },
  Pa = {
    class: "body-about"
  },
  Ua = {
    class: "body-about-title t1_1"
  },
  Ra = ["innerHTML"],
  Ha = {
    class: "body-evaluation"
  },
  ja = {
    class: "body-evaluation-title t1_1"
  },
  Ka = ["innerHTML"],
  Wa = ["onClick"],
  za = Y({
    __name: "Shortlist",
    props: {
      data: {}
    },
    emits: ["showModal"],
    setup(r, {
      emit: h
    }) {
      const i = h;
      return (s, u) => {
        const $ = ue,
          C = le,
          M = re,
          D = ie,
          c = we;
        return r.data ? (a(), A(c, {
          key: 0,
          data: r.data
        }, {
          default: I(() => [y(D, null, {
            default: I(() => [y(M, null, {
              default: I(() => [(a(!0), m(P, null, H(r.data.accordion, (n, w) => (a(), A(C, {
                key: w,
                "item-id": w
              }, {
                head: I(() => [Z(g(n.title), 1)]),
                "media-thumb": I(({
                  isActive: S
                }) => [e("div", {
                  class: R(["thumb-wrap", {
                    active: S
                  }])
                }, [e("div", Ba, [e("img", {
                  src: n.media.large,
                  alt: n.media.alt,
                  class: "inner-img"
                }, null, 8, Ea)])], 2)]),
                body: I(() => [e("div", qa, [e("div", Pa, [e("h5", Ua, g(n.about.title), 1), e("p", {
                  class: "body-about-description t1_1",
                  innerHTML: n.about.description
                }, null, 8, Ra)]), e("div", Ha, [e("h5", ja, g(n.evaluation.title), 1), e("p", {
                  class: "body-criterions-description t1_1",
                  innerHTML: n.evaluation.description
                }, null, 8, Ka)]), n.button.shown ? (a(), m("button", {
                  key: 0,
                  type: "button",
                  class: "body-button",
                  onClick: S => i("showModal", w)
                }, [y($, {
                  text: n.button.text
                }, null, 8, ["text"])], 8, Wa)) : x("", !0)])]),
                _: 2
              }, 1032, ["item-id"]))), 128))]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])) : x("", !0)
      }
    }
  });
const Ga = W(za, [
    ["__scopeId", "data-v-e268aa91"]
  ]),
  Ya = {
    key: 0,
    class: "jury"
  },
  Oa = {
    class: "jury-title h4 anim-text"
  },
  Qa = Y({
    __name: "Jury",
    props: {
      data: {}
    },
    setup(r) {
      return (h, i) => {
        var u;
        const s = Ce;
        return (u = r.data) != null && u.team ? (a(), m("section", Ya, [e("h2", Oa, g(r.data.title), 1), y(s, {
          data: r.data.team,
          "page-size": 6
        }, null, 8, ["data"])])) : x("", !0)
      }
    }
  });
const Za = W(Qa, [
    ["__scopeId", "data-v-a2d48717"]
  ]),
  Ja = {
    key: 0,
    class: "cta"
  },
  Xa = {
    class: "cta-wrap"
  },
  eo = {
    class: "cta-thumb"
  },
  to = ["src", "alt"],
  ao = {
    class: "title-wrapper"
  },
  oo = {
    class: "cta-title h1"
  },
  so = ["innerHTML"],
  no = Y({
    __name: "CTA",
    props: {
      data: {}
    },
    emits: ["showModal"],
    setup(r, {
      emit: h
    }) {
      const i = h;
      return (s, u) => {
        const $ = ce;
        return r.data ? (a(), m("section", Ja, [e("div", Xa, [e("div", eo, [e("img", {
          src: r.data.media.original,
          alt: r.data.media.alt,
          class: "inner-img"
        }, null, 8, to)]), e("div", ao, [e("h2", oo, g(r.data.title), 1), e("p", {
          class: "cta-description h4 anim-text",
          innerHTML: r.data.description
        }, null, 8, so)]), e("button", {
          class: "cta-button",
          type: "button",
          onClick: u[0] || (u[0] = C => i("showModal"))
        }, [y($, {
          text: r.data.buttonText
        }, null, 8, ["text"])])])])) : x("", !0)
      }
    }
  });
const lo = W(no, [
    ["__scopeId", "data-v-4d7fb0eb"]
  ]),
  ro = {},
  io = {
    width: "63",
    height: "62",
    viewBox: "0 0 63 62",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function uo(r, h) {
  return a(), m("svg", io, [...h[0] || (h[0] = [e("path", {
    d: "M0 0H63V62L31.5 49.5L0 62V0Z",
    fill: "#FFE515"
  }, null, -1)])])
}
const co = W(ro, [
    ["render", uo]
  ]),
  mo = {
    key: 0,
    class: "gallery"
  },
  _o = ["innerHTML"],
  po = {
    class: "pictures-list"
  },
  fo = ["src", "alt"],
  vo = {
    class: "body-inner grid-container"
  },
  ho = {
    class: "shortlist-wrap"
  },
  bo = {
    class: "shortlist-title h4"
  },
  go = ["onMouseenter"],
  yo = {
    class: "shortlist__thumb"
  },
  ko = ["src", "alt"],
  xo = {
    class: "shortlist__content"
  },
  Do = {
    class: "shortlist__name t1_1"
  },
  $o = {
    class: "shortlist__location t2-xb"
  },
  wo = {
    class: "winners-wrap grid-container"
  },
  Co = {
    class: "winners-title h4"
  },
  Mo = {
    class: "winners grid-container"
  },
  Vo = ["src", "alt"],
  So = {
    key: 1,
    class: "winners-place t2-xb"
  },
  To = {
    class: "winners__name t2-xb"
  },
  Fo = {
    class: "winners__description t2-xb"
  },
  Lo = Y({
    __name: "Gallery",
    props: {
      data: {}
    },
    setup(r) {
      const h = G(!1),
        i = G(0),
        s = u => {
          const $ = Number(u.width),
            C = Number(u.height);
          if (!(!$ || !C)) return {
            paddingTop: `${C/$*100}%`
          }
        };
      return (u, $) => {
        const C = lt,
          M = co,
          D = le,
          c = re,
          n = ie;
        return r.data ? (a(), m("section", mo, [e("h2", {
          class: "gallery-title h1_2",
          innerHTML: r.data.title
        }, null, 8, _o), y(n, {
          data: r.data.agenda
        }, {
          default: I(() => [y(c, null, {
            default: I(() => [(a(!0), m(P, null, H(r.data.agenda.accordion, (w, S) => (a(), A(D, {
              key: S,
              "item-id": S
            }, {
              head: I(() => [Z(g(w.title), 1)]),
              "media-thumb": I(({
                isActive: v
              }) => [e("div", {
                class: R(["pictures-wrap", {
                  active: v && t(h)
                }])
              }, [e("ul", po, [(a(!0), m(P, null, H(w.shortlist.list, (p, U) => (a(), m("li", {
                key: U,
                class: R(["pictures-list__item inset", {
                  active: t(i) === U
                }])
              }, [e("img", {
                class: "inner-img",
                src: p.media.large,
                alt: p.media.large
              }, null, 8, fo)], 2))), 128))])], 2)]),
              body: I(() => [e("div", vo, [e("div", ho, [e("h5", bo, g(w.shortlist.title), 1), e("ul", {
                class: "shortlist",
                onMouseleave: $[0] || ($[0] = v => h.value = !1)
              }, [(a(!0), m(P, null, H(w.shortlist.list, (v, p) => (a(), m("li", {
                key: p,
                class: "shortlist__item",
                onMouseenter: () => {
                  h.value = !0, i.value = p
                }
              }, [e("div", yo, [e("img", {
                class: "inner-img",
                src: v.media.large,
                alt: v.media.alt || v.name
              }, null, 8, ko)]), e("div", xo, [e("h6", Do, g(v.name), 1), e("p", $o, g(v.location), 1)])], 40, go))), 128))], 32)]), e("div", wo, [e("h5", Co, g(w.winners.title), 1), e("ul", Mo, [(a(!0), m(P, null, H(w.winners.list, (v, p) => (a(), m("li", {
                key: p,
                class: "winners__item"
              }, [e("div", {
                class: "winners__thumb",
                style: ge(s(v.media))
              }, [e("img", {
                src: v.media.large,
                alt: v.media.alt || v.name,
                class: "inner-img"
              }, null, 8, Vo), v.location ? (a(), A(C, {
                key: 0,
                labels: [{
                  text: v.location,
                  isType: !0
                }],
                class: "winners__labels"
              }, null, 8, ["labels"])) : x("", !0), v.place ? (a(), m("div", So, [y(M, {
                class: "winners-place__icon"
              }), Z(" " + g(v.place), 1)])) : x("", !0)], 4), e("h6", To, g(v.name), 1), e("p", Fo, g(v.description), 1)]))), 128))])])])]),
              _: 2
            }, 1032, ["item-id"]))), 128))]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])])) : x("", !0)
      }
    }
  });
const No = W(Lo, [
    ["__scopeId", "data-v-b0a5cb85"]
  ]),
  Ao = {
    class: "pictures-list"
  },
  Io = ["src", "alt"],
  Bo = {
    class: "body-inner grid-container"
  },
  Eo = {
    class: "content-list__title t2-xb"
  },
  qo = {
    class: "content-list__wrap"
  },
  Po = {
    class: "content-list__description t1_1"
  },
  Uo = Y({
    __name: "Archive",
    props: {
      data: {}
    },
    setup(r) {
      const h = G(!1),
        i = G(0);
      return (s, u) => {
        const $ = xe,
          C = ke,
          M = le,
          D = re,
          c = ie;
        return r.data ? (a(), A(c, {
          key: 0,
          data: r.data
        }, {
          default: I(() => [y(D, null, {
            default: I(() => [(a(!0), m(P, null, H(r.data.accordion, (n, w) => (a(), A(M, {
              key: w,
              "item-id": w
            }, {
              head: I(() => [Z(g(n.title), 1)]),
              "media-thumb": I(({
                isActive: S
              }) => [e("div", {
                class: R(["pictures-wrap", {
                  active: S && t(h)
                }])
              }, [e("ul", Ao, [(a(!0), m(P, null, H(n.list, (v, p) => (a(), m("li", {
                key: p,
                class: R(["pictures-list__item inset", {
                  active: t(i) === p && S
                }])
              }, [e("img", {
                class: "inner-img",
                src: v.media.large,
                alt: v.media.large
              }, null, 8, Io)], 2))), 128))])], 2)]),
              body: I(({
                isActive: S
              }) => [e("div", Bo, [e("ul", {
                class: "content-list",
                onMouseleave: u[0] || (u[0] = v => h.value = !1)
              }, [(a(!0), m(P, null, H(n.list, (v, p) => (a(), m("li", {
                key: p,
                class: "content-list__item"
              }, [e("h5", Eo, g(v.date), 1), e("div", qo, [e("h6", Po, g(v.description), 1), y(C, {
                external: "",
                target: "_blank",
                to: v.link,
                rel: "nofollow noreferrer",
                class: "content-list__link t2-xb",
                onMouseenter: () => {
                  h.value = !0, i.value = p
                }
              }, {
                default: I(() => [u[1] || (u[1] = e("span", {
                  class: "content-list__link-item"
                }, " View PDF ", -1)), e("span", {
                  class: R(["content-list__icon", {
                    active: t(i) === p && t(h) && S
                  }])
                }, [y($)], 2)]),
                _: 2
              }, 1032, ["to", "onMouseenter"])])]))), 128))], 32)])]),
              _: 2
            }, 1032, ["item-id"]))), 128))]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])) : x("", !0)
      }
    }
  });
const Ro = W(Uo, [
    ["__scopeId", "data-v-96cfda1f"]
  ]),
  Ho = {
    key: 0,
    class: "competition"
  },
  jo = {
    class: "sections-wrapper"
  },
  Ko = {
    class: "circles-above"
  },
  Wo = {
    class: "sections-wrapper"
  },
  zo = {
    class: "circles-below"
  },
  Go = {
    class: "sections-star"
  },
  Yo = Y({
    __name: "competition",
    async setup(r) {
      let h, i;
      const {
        locale: s
      } = X(), {
        data: u
      } = ([h, i] = We(async () => Ye("competition", async () => {
        const [w, S, v] = await Promise.all([$fetch("/api/competition", {
          method: "get",
          query: {
            locale: s.value
          }
        }), await $fetch("/api/about", {
          method: "get",
          query: {
            locale: s.value
          }
        }), await $fetch("/api/submission", {
          method: "get",
          query: {
            locale: s.value
          }
        })]);
        return {
          pageData: w,
          aboutData: S,
          submissionData: v
        }
      })), h = await h, i(), h);
      if (!u.value) throw ze({
        statusCode: 404,
        statusMessage: "Error fetching competition page data",
        fatal: !0
      });
      rt(u.value.pageData.meta), it();
      const {
        isDesktop: $
      } = Ge(), C = te(() => $.value ? Ze() : Je()), M = G(!1), D = G("about"), c = G(void 0);

      function n(w) {
        c.value = w, M.value = !0
      }
      return (w, S) => {
        var k;
        const v = ka,
          p = Ia,
          U = ot,
          E = st,
          O = nt,
          J = Te,
          Q = Qe,
          _ = Ga,
          F = Oe,
          j = Za,
          b = Me,
          B = lo,
          f = No,
          l = Ro,
          L = at;
        return (k = t(u)) != null && k.pageData ? (a(), m("main", Ho, [t(M) ? (a(), A(v, {
          key: 0,
          "active-tab": t(D),
          "onUpdate:activeTab": S[0] || (S[0] = d => ee(D) ? D.value = d : null),
          data: t(u).submissionData,
          "initial-nomination-index": t(c),
          onHideModal: S[1] || (S[1] = d => M.value = !1)
        }, null, 8, ["active-tab", "data", "initial-nomination-index"])) : x("", !0), e("div", jo, [t(u).pageData.hero ? (a(), A(p, {
          key: 0,
          data: t(u).pageData,
          onShowModal: n
        }, null, 8, ["data"])) : x("", !0), t(u).pageData.about ? (a(), A(U, {
          key: 1,
          data: t(u).pageData.about,
          "show-mobile-icon": ""
        }, null, 8, ["data"])) : x("", !0), t(u).pageData.projects ? (a(), A(O, {
          key: 2,
          id: "gallery",
          "hide-pagination": "",
          "cursor-shown": t(u).pageData.projects.length * 2 > 3
        }, {
          slides: I(() => [(a(!0), m(P, null, H(t(u).pageData.projects, (d, V) => (a(), A(E, {
            key: V,
            data: d
          }, null, 8, ["data"]))), 128))]),
          _: 1
        }, 8, ["cursor-shown"])) : x("", !0), t(u).pageData.partners ? (a(), A(J, {
          key: 3,
          data: t(u).pageData.partners
        }, null, 8, ["data"])) : x("", !0), e("div", Ko, [(a(!0), m(P, null, H(t(C), (d, V) => (a(), A(Q, pe({
          key: V
        }, {
          ref_for: !0
        }, d), null, 16))), 128))])]), t(u).pageData.shortlist ? (a(), A(_, {
          key: 1,
          data: t(u).pageData.shortlist,
          onShowModal: S[2] || (S[2] = d => n(d))
        }, null, 8, ["data"])) : x("", !0), e("div", Wo, [e("div", zo, [(a(!0), m(P, null, H(t(C), (d, V) => (a(), A(Q, pe({
          key: V
        }, {
          ref_for: !0
        }, d), null, 16))), 128))]), e("div", Go, [y(F)]), t(u).pageData.jury ? (a(), A(j, {
          key: 0,
          data: t(u).pageData.jury
        }, null, 8, ["data"])) : x("", !0), t(u).pageData.faq ? (a(), A(b, {
          key: 1,
          data: t(u).pageData.faq,
          "hide-contact-form-item": ""
        }, null, 8, ["data"])) : x("", !0), t(u).pageData.apply && t(u).pageData.cta ? (a(), A(B, {
          key: 2,
          data: t(u).pageData.cta,
          onShowModal: n
        }, null, 8, ["data"])) : x("", !0), t(u).pageData.gallery ? (a(), A(f, {
          key: 3,
          data: t(u).pageData.gallery
        }, null, 8, ["data"])) : x("", !0), t(u).pageData.archive ? (a(), A(l, {
          key: 4,
          data: t(u).pageData.archive
        }, null, 8, ["data"])) : x("", !0), y(L, {
          bg: t(u).aboutData.footerImg
        }, null, 8, ["bg"])])])) : x("", !0)
      }
    }
  });
const ms = W(Yo, [
  ["__scopeId", "data-v-ea617f3e"]
]);
export {
  ms as
  default
};