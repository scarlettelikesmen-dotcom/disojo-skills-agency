/* https://grape.ua/_nuxt/base.Cowcg-OE.js */
import {
  Q as t
} from "./entry.DN75vySF.js";
import {
  a as i,
  r as f,
  b as S
} from "./swiper-vue.BTZulNLT.js";
const w = t("base", () => {
  const o = i(!1),
    e = f({
      isShowShowreal: !1,
      showrealSrc: "",
      isIframe: !1,
      isLoading: !0
    });
  S(() => e.isShowShowreal, () => {
    document.body.style.overflow = e.isShowShowreal ? "hidden" : ""
  });

  function s(r) {
    r && (e.showrealSrc = r)
  }

  function a(r = !0) {
    e.isIframe = r
  }
  return {
    isShowShowreal: o,
    base: e,
    setShowrealSrc: s,
    setIsIframe: a
  }
});
export {
  w as u
};