/* https://hilight.design/_nuxt/DwWBZSTG.js */
import {
  p as D,
  x as W,
  s as j,
  ae as J,
  d as K,
  al as E,
  am as L,
  b as Q,
  c as X,
  o as $,
  e as ee,
  r as O,
  an as te,
  ao as ne,
  ap as ae,
  S as R,
  aa as re,
  m as le,
  n as oe
} from "#entry";

function se(M, S, r = "100% 0px") {
  let l = !1,
    o = null;
  const e = () => {
      l || (l = !0, o?.disconnect(), o = null, S())
    },
    g = v => {
      o?.disconnect(), o = null, !(!v || l) && (o = new IntersectionObserver(([p]) => {
        p?.isIntersecting && e()
      }, {
        rootMargin: r,
        threshold: 0
      }), o.observe(v))
    };
  D(() => {
    W(() => J(M), g, {
      immediate: !0
    })
  }), j(() => {
    l = !0, o?.disconnect(), o = null
  })
}
const ie = K({
    __name: "VideoScroller",
    props: {
      sequencePath: {},
      section: {},
      autoPlayAfterScroll: {
        type: Boolean
      },
      scrollDuration: {},
      lazy: {
        type: Boolean
      }
    },
    setup(M, {
      expose: S
    }) {
      const r = M,
        l = O(null),
        o = O(null);
      let e = null,
        g = null,
        v = null,
        p = null,
        y = null,
        u = null,
        _ = !0,
        V = !0,
        f = 25,
        m = 0,
        x = 0,
        k = 0,
        q = () => {};
      const H = new Promise(t => {
          q = t
        }),
        c = re({
          value: 0
        });
      E() && !r.lazy && L(r.sequencePath);
      const N = t => {
          if (t.fps) return t.fps;
          const n = t.frames.at(-1);
          return n?.t ? t.totalFrames / (n.t / 1e6) : 25
        },
        z = () => {
          const t = l.value;
          if (!t) return null;
          const n = Math.min(window.devicePixelRatio || 1, r.sequencePath.includes("/sketch") ? 2 : 1.5);
          let a = Math.max(1, t.clientWidth * n),
            s = Math.max(1, t.clientHeight * n);
          if (x > 0 && k > 0) {
            const d = Math.min(1, x / a, k / s);
            a *= d, s *= d
          }
          return {
            width: Math.max(1, Math.round(a)),
            height: Math.max(1, Math.round(s))
          }
        },
        B = async () => {
          try {
            if (!l.value || !o.value || !E()) return;
            const t = await te();
            if (!t) return;
            const n = z();
            if (!n) return;
            e = new ne(ae(r.sequencePath, t), {
              canvas: o.value,
              width: n.width,
              height: n.height
            });
            const a = e;
            try {
              await a.loading
            } catch {
              return
            }
            if (!e || e !== a) return;
            x = e.manifest?.width ?? 0, k = e.manifest?.height ?? 0;
            const s = z();
            s && e.resize(s.width, s.height), e.setFrame(0), await e.whenFrame(0);
            const d = 150;
            let h = null;
            const w = () => {
                h && clearTimeout(h), h = setTimeout(() => {
                  const i = z();
                  !i || !e || e.resize(i.width, i.height)
                }, d)
              },
              I = new ResizeObserver(w);
            I.observe(l.value), window.addEventListener("resize", w), g = () => {
              h && clearTimeout(h), I.disconnect(), window.removeEventListener("resize", w)
            };
            const C = e.manifest;
            if (!C || (m = Math.max(0, C.totalFrames - 1), f = N(C), !r.section)) return;
            const A = document.querySelector(r.section);
            if (!A) return;
            const Y = r.autoPlayAfterScroll && r.scrollDuration ? Math.min(m, Math.round(r.scrollDuration * f)) : m,
              F = () => {
                _ || !e || (V ? (e.enabled = !0, u?.resume()) : (u?.pause(), e.enabled = !1))
              },
              Z = (i, T) => {
                P(m, Math.max(0, (m - i) / f), {
                  from: i,
                  onComplete: T
                }), F()
              },
              G = () => {
                P(m, m / f, {
                  from: 0,
                  repeat: -1
                }), F()
              };
            if (p = R.create({
                trigger: A,
                start: "top top",
                end: "bottom bottom",
                scrub: !0,
                onUpdate: i => {
                  _ && (c.value = Math.round(i.progress * Y))
                },
                onLeave: () => {
                  r.autoPlayAfterScroll && (_ = !1, Z(c.value, G))
                },
                onEnterBack: () => {
                  !r.autoPlayAfterScroll || !_ || (u?.kill(), u = null)
                }
              }), y = R.create({
                trigger: A,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                  e && (e.enabled = !0)
                },
                onEnterBack: () => {
                  e && (e.enabled = !0)
                },
                onLeave: () => {
                  e && (e.enabled = !1)
                },
                onLeaveBack: () => {
                  e && (e.enabled = !1)
                }
              }), e && (e.enabled = !!y.isActive), r.autoPlayAfterScroll && l.value) {
              const i = new IntersectionObserver(([T]) => {
                V = !!T?.isIntersecting, F()
              });
              i.observe(l.value), v = () => i.disconnect()
            }
            R.refresh()
          } finally {
            q()
          }
        }, U = () => {
          u?.kill(), u = null
        }, P = (t, n, a) => {
          U();
          const s = a?.from ?? c.value,
            d = {
              value: s
            };
          if (!n) {
            c.value = t, a?.onUpdate?.(), a?.onComplete?.();
            return
          }
          u = le.fromTo(d, {
            value: s
          }, {
            value: t,
            duration: n,
            ease: "none",
            ...a?.repeat ? {
              repeat: a.repeat
            } : {},
            onUpdate: () => {
              c.value = Math.round(d.value), a?.onUpdate?.()
            },
            onComplete: () => {
              c.value = Math.round(t), a?.onUpdate?.(), a?.onComplete?.()
            }
          })
        };
      S({
        seek: async (t, n) => {
          if (await H, !e) {
            n?.onComplete?.();
            return
          }
          const a = Math.min(Math.max(0, t), m / f),
            s = Math.round(a * f),
            d = n?.speed ?? 1,
            h = n?.instant ? 0 : Math.max(1.2, Math.abs(c.value / f - a) / d),
            w = () => n?.onUpdate?.(c.value / f);
          P(s, h, {
            onUpdate: w,
            onComplete: () => {
              w(), n?.onComplete?.()
            }
          })
        },
        stop: U
      }), r.lazy ? se(l, () => {
        E() && L(r.sequencePath), B()
      }) : D(() => {
        B()
      }), Q(() => {
        p?.refresh()
      });
      let b = 0;
      return W(() => c.value, () => {
        e && (b || (b = requestAnimationFrame(() => {
          b = 0, e?.setFrame(c.value)
        })))
      }), j(() => {
        b && (cancelAnimationFrame(b), b = 0), g?.(), g = null, u?.kill(), u = null, v?.(), v = null, p?.kill(), p = null, y?.kill(), y = null, e?.destroy(), e = null
      }), (t, n) => ($(), X("div", {
        ref_key: "wrapperRef",
        ref: l,
        class: "video-scroller"
      }, [ee("canvas", {
        ref_key: "canvasRef",
        ref: o,
        class: "canvas"
      }, null, 512)], 512))
    }
  }),
  ce = Object.assign(oe(ie, [
    ["__scopeId", "data-v-01d4dfcd"]
  ]), {
    __name: "CommonVideoScroller"
  }),
  fe = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ce
  }, Symbol.toStringTag, {
    value: "Module"
  }));
export {
  fe as V, ce as _, se as u
};