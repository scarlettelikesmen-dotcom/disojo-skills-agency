/* https://coevalstudio.com/_nuxt/Text.19fa6ef9.js */
import {
  _ as y,
  o as u,
  c,
  a as o,
  L as l,
  z as g,
  A as x,
  ad as S,
  f as i,
  N as V,
  u as r,
  t as w,
  T as C
} from "./entry.7e3c7585.js";
const d = t => (g("data-v-9e0a4827"), t = t(), x(), t),
  I = {
    class: "form-popup__heading"
  },
  B = d(() => o("h3", {
    class: "text-h3 form-popup__title"
  }, "Successfully Sent!", -1)),
  k = d(() => o("img", {
    src: S,
    role: "presentation",
    class: "form-popup__icon"
  }, null, -1)),
  b = [k],
  $ = d(() => o("div", {
    class: "form-popup__text text-p3"
  }, " We have received your message and will reach out to you soon! ", -1)),
  F = {
    name: "FormPopup"
  },
  P = Object.assign(F, {
    props: {
      isOpen: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["closePopup"],
    setup(t, {
      emit: e
    }) {
      return (s, a) => (u(), c("div", {
        class: l(["form-popup", {
          open: t.isOpen
        }])
      }, [o("div", I, [B, o("button", {
        class: "form-popup__button",
        onClick: a[0] || (a[0] = n => s.$emit("closePopup"))
      }, b)]), $], 2))
    }
  }),
  T = y(P, [
    ["__scopeId", "data-v-9e0a4827"]
  ]);
const N = ["value", "type"],
  q = {
    __name: "Text",
    props: {
      modelValue: {
        type: [String, null],
        required: !0
      },
      type: {
        type: String,
        default: "text"
      },
      placeholder: {
        type: String,
        required: !1
      },
      color: {
        type: String,
        default: "black"
      },
      showCaption: {
        type: Boolean,
        default: !1
      },
      isInvalid: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["update:modelValue"],
    setup(t) {
      const e = t,
        s = i(null),
        a = i(null),
        n = i(!1);

      function _() {
        e.showCaption && (n.value = !0)
      }

      function m() {
        e.showCaption && (n.value = !1)
      }
      const f = V(() => (e == null ? void 0 : e.showCaption) && (e == null ? void 0 : e.placeholder) || (e == null ? void 0 : e.placeholder) && ((e == null ? void 0 : e.modelValue) === "" || (e == null ? void 0 : e.modelValue) === null));
      return (h, p) => (u(), c("div", {
        class: l(["main-input", {
          "main-input--white": t.color === "white",
          invalid: t.isInvalid
        }])
      }, [r(f) ? (u(), c("p", {
        key: 0,
        ref_key: "caption",
        ref: s,
        class: l(["text-s1 main-input__placeholder", {
          shifted: r(n) || t.showCaption && t.modelValue,
          invalid: t.isInvalid
        }])
      }, w(t.placeholder), 3)) : C("", !0), o("input", {
        onFocus: _,
        onBlur: m,
        ref_key: "input",
        ref: a,
        class: l(["main-input__input", {
          invalid: t.isInvalid
        }]),
        value: t.modelValue,
        onInput: p[0] || (p[0] = v => h.$emit("update:modelValue", v.target.value)),
        type: t.type
      }, null, 42, N)], 2))
    }
  };
export {
  q as _, T as a
};