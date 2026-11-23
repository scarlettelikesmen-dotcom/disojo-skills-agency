/* https://ab-sl.ru/_nuxt/BepOh2iV.js */
import {
  d as H,
  u as q,
  l as m,
  G as I,
  C,
  z as E,
  c as M,
  a as l,
  e as p,
  n as P,
  s as h,
  o as A,
  q as v,
  f as T,
  _ as U
} from "./DROVP5M4.js";
import {
  u as V
} from "./DFRH1ql4.js";
const $ = ["srcset"],
  D = ["src", "alt", "draggable"],
  N = H({
    __name: "PictureBlock",
    props: {
      photo: {},
      size: {},
      noLazyLoad: {
        type: Boolean
      },
      draggable: {
        type: Boolean
      },
      autoHeight: {
        type: Boolean
      },
      autoHeightMob: {
        type: Boolean
      },
      defaultVisible: {
        type: Boolean
      }
    },
    emits: ["imageLoaded"],
    setup(n, {
      emit: y
    }) {
      const t = n,
        b = y,
        {
          $ScrollTrigger: x
        } = q(),
        z = m("transitionEnd"),
        L = m("preloaderDone"),
        a = T();
      let i;
      const c = ["original", "large", "medium", "small", "thumbnail"],
        s = h(() => t.photo && String(S(t.size || "original")) || ""),
        u = h(() => String(t.photo?.large || t.photo?.original || ""));

      function S(e) {
        const o = c.indexOf(e);
        for (let r = o; r >= 0; r--) {
          const f = c[r];
          if (t.photo?.[f]) return t.photo[f]
        }
        return ""
      }
      async function B() {
        if (await v(), !a.value) return;
        const e = a.value.querySelector(".default-image"),
          o = a.value.querySelector("source");
        !e || !o || (i = x.create({
          trigger: a.value,
          start: "top-=1000px bottom",
          onEnter: r => {
            e.src = s.value, o.srcset = u.value, r.kill(), i = null
          }
        }))
      }

      function k() {
        const e = a.value?.querySelector(".default-image");
        e && (e.complete && d(), e.onload = () => d())
      }

      function d() {
        a.value && (a.value.classList.remove("hidden"), b("imageLoaded"))
      }

      function _() {
        if (!a.value || !t.photo) return;
        const e = a.value.clientWidth * t.photo.ratio;
        t.autoHeight && a.value.style.setProperty("--height", `${e}px`), t.autoHeightMob && a.value.style.setProperty("--height-mob", `${e}px`)
      }

      function w() {
        const e = a.value?.querySelector(".default-image"),
          o = a.value?.querySelector("source");
        !e || !o || (e.src = s.value, o.srcset = u.value)
      }

      function g() {
        k(), t.noLazyLoad || B(), !(!t.autoHeight && !t.autoHeightMob) && _()
      }
      return I(() => t.photo, async () => {
        await v(), w()
      }), C(() => {
        !z.value || !L.value || g()
      }), V(() => {
        g()
      }), E(() => {
        i && i.kill()
      }), (e, o) => (A(), M("div", {
        ref_key: "wrapperRef",
        ref: a,
        class: P(["wrapper", {
          hidden: !n.defaultVisible
        }])
      }, [l("picture", null, [l("source", {
        srcset: n.noLazyLoad ? p(u) : "",
        media: "(max-width: 767px)"
      }, null, 8, $), l("img", {
        class: "default-image",
        src: n.noLazyLoad ? p(s) : "",
        alt: n.photo?.alt || "Picture",
        draggable: !n.draggable
      }, null, 8, D)]), o[0] || (o[0] = l("div", {
        class: "background"
      }, null, -1))], 2))
    }
  }),
  O = U(N, [
    ["__scopeId", "data-v-fb2e9ba9"]
  ]);
export {
  O as _
};