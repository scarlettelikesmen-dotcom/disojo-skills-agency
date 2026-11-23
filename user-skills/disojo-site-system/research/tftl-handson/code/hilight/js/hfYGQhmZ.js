/* https://hilight.design/_nuxt/hfYGQhmZ.js */
import {
  I as m,
  p as U,
  s as H,
  d as O,
  u as P,
  c as y,
  h as M,
  k as n,
  l as a,
  o as x,
  e as V,
  v as B,
  aG as _,
  r as $,
  n as j
} from "#entry";

function N(i) {
  const e = new Map;
  for (const t of i) {
    const o = m(t.url);
    if (!o || t.width <= 0) continue;
    const l = e.get(o);
    (!l || t.width > l) && e.set(o, t.width)
  }
  return e.size < 2 ? "" : [...e.entries()].sort((t, o) => t[1] - o[1]).map(([t, o]) => `${t} ${o}w`).join(", ")
}

function S(i) {
  const e = i.widths;
  return e ? N([{
    url: i.thumbnail,
    width: e.thumbnail
  }, {
    url: i.small,
    width: e.small
  }, {
    url: i.medium,
    width: e.medium
  }, {
    url: i.large,
    width: e.large
  }, {
    url: i.extra,
    width: e.extra
  }, {
    url: i.original,
    width: e.original
  }]) : ""
}
const r = [];
let h = null,
  f = 0;

function E() {
  const i = window.innerWidth;
  i !== f && (f = i, h && clearTimeout(h), h = setTimeout(() => r.forEach(e => e()), 200))
}

function A(i, e = {}) {
  U(() => {
    r.length === 0 && (f = window.innerWidth, window.addEventListener("resize", E)), r.push(i), e.immediate && i()
  }), H(() => {
    const t = r.indexOf(i);
    t !== -1 && r.splice(t, 1), r.length === 0 && window.removeEventListener("resize", E)
  })
}
const D = ["srcset", "sizes"],
  F = ["src", "srcset", "sizes", "width", "height", "alt", "role", "loading", "fetchpriority"],
  G = 1.5,
  Z = O({
    __name: "Picture",
    props: {
      media: {
        default: void 0
      },
      mobileMedia: {
        default: void 0
      },
      alt: {
        default: void 0
      },
      inner: {
        type: Boolean,
        default: !1
      },
      fetchpriority: {
        default: "auto"
      },
      sizes: {
        default: void 0
      },
      eager: {
        type: Boolean,
        default: !1
      }
    },
    setup(i) {
      const e = i,
        t = _(),
        o = $("100vw"),
        {
          isMobile: l
        } = P(),
        k = a(() => !!e.media?.original),
        g = a(() => !!e.mobileMedia?.original),
        R = a(() => !!e.sizes),
        w = a(() => e.sizes || o.value),
        W = a(() => e.fetchpriority === "high"),
        p = a(() => e.alt?.trim() || e.media?.alt?.trim() || ""),
        C = a(() => !p.value),
        I = a(() => e.media ? S(e.media) : ""),
        T = a(() => e.mobileMedia ? S(e.mobileMedia) : "");

      function u() {
        if (R.value) return;
        const s = t.value,
          d = s?.clientWidth || s?.parentElement?.clientWidth || 0,
          c = s?.clientHeight || s?.parentElement?.clientHeight || 0;
        if (!d && !c) return;
        const v = g.value && l.value ? e.mobileMedia : e.media,
          b = v?.width || 0,
          z = v?.height || 0,
          L = b && z && c ? Math.max(d, c * b / z) : d || c;
        o.value = `${Math.round(L*G)}px`
      }
      return U(u), A(u), (s, d) => n(k) ? (x(), y("picture", {
        key: 0,
        class: B(["common-picture", {
          inner: i.inner
        }])
      }, [n(g) ? (x(), y("source", {
        key: 0,
        media: "(max-width: 1023px)",
        srcset: n(T) || ("publicUrl" in s ? s.publicUrl : n(m))(i.mobileMedia?.original),
        sizes: n(w)
      }, null, 8, D)) : M("", !0), V("img", {
        ref_key: "imageRef",
        ref: t,
        src: ("publicUrl" in s ? s.publicUrl : n(m))(i.media?.original),
        srcset: n(I) || void 0,
        sizes: n(w),
        width: i.media?.width || void 0,
        height: i.media?.height || void 0,
        alt: n(p),
        role: n(C) ? "presentation" : void 0,
        loading: i.eager || n(W) ? "eager" : "lazy",
        fetchpriority: i.fetchpriority,
        draggable: "false",
        class: B({
          "inner-img": i.inner
        }),
        onLoad: u
      }, null, 42, F)], 2)) : M("", !0)
    }
  }),
  J = Object.assign(j(Z, [
    ["__scopeId", "data-v-ccf1dbff"]
  ]), {
    __name: "CommonPicture"
  });
export {
  J as _
};