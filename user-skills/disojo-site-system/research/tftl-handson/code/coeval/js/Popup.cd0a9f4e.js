/* https://coevalstudio.com/_nuxt/Popup.cd0a9f4e.js */
import {
  _ as a,
  o as n,
  c as l,
  a as t,
  ae as i,
  L as o
} from "./entry.7e3c7585.js";
const d = {
    class: "modal__inner-content"
  },
  r = {
    name: "CommonPopup"
  },
  p = Object.assign(r, {
    props: {
      isOpen: {
        type: Boolean,
        required: !1,
        default: !1
      },
      position: {
        type: String,
        required: !1,
        default: "left"
      },
      noClose: {
        type: Boolean,
        required: !1,
        default: !1
      },
      isBlured: {
        type: Boolean,
        required: !1,
        default: !1
      }
    },
    emits: ["closePopup"],
    setup(e, {
      emit: u
    }) {
      return (s, c) => (n(), l("div", {
        class: o(["popup", {
          open: e.isOpen,
          blured: e.isBlured
        }]),
        "data-lenis-prevent": ""
      }, [t("div", {
        class: o(["modal", {
          open: e.isOpen,
          right: e.position === "right",
          rightBottom: e.position === "right-bottom"
        }])
      }, [t("div", d, [i(s.$slots, "default", {}, void 0, !0)])], 2)], 2))
    }
  }),
  f = a(p, [
    ["__scopeId", "data-v-b0372bfd"]
  ]);
export {
  f as _
};