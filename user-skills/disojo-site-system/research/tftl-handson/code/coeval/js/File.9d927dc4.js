/* https://coevalstudio.com/_nuxt/File.9d927dc4.js */
import {
  f,
  o as s,
  c as i,
  F as r,
  a as e,
  t as _,
  P as m,
  ad as h
} from "./entry.7e3c7585.js";
const b = {
    class: "input-file"
  },
  x = e("p", {
    class: "text-s1 input-file__text"
  }, "drag & drop or", -1),
  g = e("p", {
    class: "text-s1 input-file__link"
  }, "choose file", -1),
  k = {
    key: 1,
    class: "input-file__info"
  },
  F = {
    class: "text-s1 input-file__title"
  },
  V = {
    class: "text-s1 input-file__size"
  },
  y = ["onClick"],
  v = e("img", {
    class: "input-file__delete-icon",
    src: h,
    role: "presentation"
  }, null, -1),
  z = [v],
  B = {
    name: "InputFile"
  },
  M = Object.assign(B, {
    props: ["modelValue"],
    emits: ["update:modelValue"],
    setup(l, {
      emit: n
    }) {
      const o = f(null);

      function c(a) {
        const t = a.target.files[0],
          d = t.size,
          p = t.name;
        n("update:modelValue", {
          blob: t,
          size: d,
          name: p
        })
      }

      function u() {
        o.value.value = null, n("update:modelValue", {
          blob: null,
          name: null,
          size: null
        })
      }
      return (a, t) => (s(), i("label", b, [l.modelValue.blob ? (s(), i("div", k, [e("p", F, _(l.modelValue.name), 1), e("p", V, _((l.modelValue.size / 1e6).toFixed(1)) + "MB ", 1), e("button", {
        class: "input-file__delete",
        onClick: m(u, ["prevent"])
      }, z, 8, y)])) : (s(), i(r, {
        key: 0
      }, [x, g], 64)), e("input", {
        ref_key: "fileRef",
        ref: o,
        onChange: c,
        class: "input-file__input",
        type: "file"
      }, null, 544)]))
    }
  });
export {
  M as _
};