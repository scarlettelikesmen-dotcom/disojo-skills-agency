/* https://hilight.design/_nuxt/B42LVb-8.js */
import {
  d as M,
  x as y,
  s as L,
  r as f,
  c as P,
  o as b,
  f as C,
  w as H,
  e as w,
  k as _,
  i as R,
  v as S,
  a0 as A,
  aF as O,
  n as T,
  u as z,
  p as j,
  l as I,
  A as k,
  j as E
} from "#entry";
import {
  _ as D
} from "./hfYGQhmZ.js";
const N = ["autoplay", "preload", "src"],
  $ = M({
    __name: "Video",
    props: {
      video: {},
      poster: {},
      inner: {
        type: Boolean
      },
      hold: {
        type: Boolean
      },
      awaitLoad: {
        type: Boolean
      },
      immediate: {
        type: Boolean
      }
    },
    setup(a) {
      const n = a,
        u = f(null),
        r = f(null),
        s = f(""),
        l = f(!1);
      let i = null,
        c = null;
      const p = t => {
          const e = () => {
            n.hold || !l.value || (t.currentTime = 0, t.play())
          };
          t.readyState >= 1 ? e() : t.addEventListener("loadedmetadata", e, {
            once: !0
          })
        },
        m = t => {
          const e = t.duration;
          if (!Number.isFinite(e) || e <= 0) return !1;
          for (let o = 0; o < t.buffered.length; o++)
            if (t.buffered.start(o) <= .05 && t.buffered.end(o) >= e - .25) return !0;
          return !1
        },
        h = t => {
          c?.();
          const e = () => {
              O(), c?.()
            },
            o = () => {
              (t.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA || m(t)) && e()
            };
          t.addEventListener("progress", o), t.addEventListener("canplaythrough", o), t.addEventListener("error", e), c = () => {
            t.removeEventListener("progress", o), t.removeEventListener("canplaythrough", o), t.removeEventListener("error", e), c = null
          }, o()
        },
        v = t => {
          const e = A(n.video.original);
          return e ? (s.value !== e && (s.value = e, t.preload = "auto", t.src = e, n.awaitLoad && h(t)), !0) : !1
        },
        d = t => {
          l.value && v(t) && (n.hold || p(t))
        },
        g = t => {
          i?.disconnect(), i = null, t && (t.disablePictureInPicture = !0), t && n.immediate && !n.hold && (l.value = !0, d(t));
          const e = u.value;
          !t || !e || (n.awaitLoad && v(t), i = new IntersectionObserver(([o]) => {
            if (l.value = !!o?.isIntersecting, !l.value || n.hold) {
              t.pause();
              return
            }
            d(t)
          }, {
            rootMargin: "200px 0px",
            threshold: 0
          }), i.observe(e))
        };
      return y(r, t => g(t), {
        flush: "post"
      }), y(() => n.hold, t => {
        const e = r.value;
        if (!e || t || !l.value) {
          t && r.value?.pause();
          return
        }
        d(e)
      }), y(() => n.video.original, () => {
        s.value = "", c?.();
        const t = r.value;
        t && (n.awaitLoad && v(t), l.value && !n.hold && d(t))
      }), L(() => {
        i?.disconnect(), i = null, c?.(), r.value?.pause()
      }), (t, e) => {
        const o = R;
        return b(), P("div", {
          ref_key: "wrapRef",
          ref: u,
          class: S(["wrap-video", {
            inner: a.inner
          }])
        }, [C(o, null, {
          default: H(() => [w("video", {
            ref_key: "videoRef",
            ref: r,
            muted: "",
            loop: "",
            playsinline: "",
            autoplay: n.immediate || void 0,
            preload: n.immediate ? "auto" : "none",
            src: _(s) || void 0
          }, [...e[0] || (e[0] = [w("track", {
            kind: "captions",
            srclang: "en",
            label: "English",
            src: "/captions/silent.vtt",
            default: ""
          }, null, -1)])], 8, N)]),
          _: 1
        })], 2)
      }
    }
  }),
  F = Object.assign(T($, [
    ["__scopeId", "data-v-adcfab5b"]
  ]), {
    __name: "CommonVideo"
  });

function U(a = "") {
  return /\.(mp4|avi|mov|mpeg|webm)/.test(a.toLowerCase())
}
const W = ["src"],
  V = .01,
  G = M({
    __name: "VideoInner",
    props: {
      video: {},
      poster: {},
      mobPreview: {
        type: Boolean
      },
      active: {
        type: Boolean
      }
    },
    setup(a) {
      const n = a,
        {
          isMobile: u
        } = z(),
        r = f(null),
        s = f(null),
        l = f(!1),
        i = f(!1),
        c = I(() => l.value ? A(n.video.original, V) : "");
      let p = null,
        m = null;
      const h = () => m || (l.value = !0, m = k().then(() => {
          const e = s.value;
          e && (e.preload = "metadata")
        }), m),
        v = async () => {
          await h();
          const e = s.value;
          if (!(!e || i.value)) try {
            n.mobPreview && (e.loop = !0), i.value = !0, e.readyState >= HTMLMediaElement.HAVE_METADATA && (e.currentTime = 0), await e.play()
          } catch {
            i.value = !1
          }
        }, d = () => {
          const e = s.value;
          if (e && (i.value = !1, e.pause(), !(e.readyState < HTMLMediaElement.HAVE_METADATA) && !(Math.abs(e.currentTime - V) < .001))) try {
            e.currentTime = V
          } catch {}
        }, g = async () => {
          u.value && !n.mobPreview || n.mobPreview && u.value || await v()
        }, t = () => {
          n.mobPreview || u.value || d()
        };
      return y(() => n.video.original, async () => {
        l.value = !1, m = null, i.value = !1, await k();
        const e = s.value;
        e && (e.removeAttribute("src"), e.load())
      }), y(() => n.active, e => {
        n.mobPreview && (e ? v() : d())
      }), j(() => {
        const e = s.value,
          o = r.value;
        e && (e.disablePictureInPicture = !0), o && (p = new IntersectionObserver(([x]) => {
          const B = !!x?.isIntersecting;
          B && h(), !(!u.value || n.mobPreview) && (B ? v() : d())
        }, {
          rootMargin: "200px 0px",
          threshold: 0
        }), p.observe(o))
      }), L(() => {
        p?.disconnect(), p = null, s.value?.pause()
      }), (e, o) => (b(), P("div", {
        ref_key: "wrapRef",
        ref: r,
        class: "wrap-video",
        onMouseenter: g
      }, [w("video", {
        ref_key: "videoEl",
        ref: s,
        class: "inner-media",
        muted: "",
        playsinline: "",
        preload: "none",
        src: _(c) || void 0,
        onEnded: t
      }, [...o[0] || (o[0] = [w("track", {
        kind: "captions",
        srclang: "en",
        label: "English",
        src: "/captions/silent.vtt",
        default: ""
      }, null, -1)])], 40, W)], 544))
    }
  }),
  q = Object.assign(T(G, [
    ["__scopeId", "data-v-274f4b0e"]
  ]), {
    __name: "CommonVideoInner"
  }),
  J = M({
    __name: "Media",
    props: {
      media: {
        default: void 0
      },
      mobileMedia: {
        default: void 0
      },
      poster: {
        default: void 0
      },
      alt: {
        default: void 0
      },
      inner: {
        type: Boolean,
        default: !1
      },
      hover: {
        type: Boolean,
        default: !1
      },
      active: {
        type: Boolean,
        default: !1
      },
      mobPreview: {
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
    setup(a) {
      const n = a,
        u = I(() => {
          const r = n.media;
          return r?.original ? "isVideo" in r && typeof r.isVideo == "boolean" ? r.isVideo : U(r.original) : !1
        });
      return (r, s) => {
        const l = q,
          i = F,
          c = D;
        return _(u) && a.hover && a.media ? (b(), E(l, {
          key: 0,
          video: a.media,
          poster: a.poster,
          active: a.active,
          "mob-preview": a.mobPreview
        }, null, 8, ["video", "poster", "active", "mob-preview"])) : _(u) && a.media ? (b(), E(i, {
          key: 1,
          video: a.media,
          poster: a.poster,
          inner: a.inner
        }, null, 8, ["video", "poster", "inner"])) : (b(), E(c, {
          key: 2,
          media: a.media,
          "mobile-media": a.mobileMedia,
          alt: a.alt,
          inner: a.inner,
          fetchpriority: a.fetchpriority,
          sizes: a.sizes,
          eager: a.eager
        }, null, 8, ["media", "mobile-media", "alt", "inner", "fetchpriority", "sizes", "eager"]))
      }
    }
  }),
  X = Object.assign(J, {
    __name: "CommonMedia"
  });
export {
  F as _, X as a, U as i
};