/* https://hilight.design/_nuxt/812V_3Eq.js */
import {
  a as Z
} from "./B42LVb-8.js";
import {
  u as q,
  p as A,
  s as N,
  r as M,
  l as O,
  ae as ee,
  d as te,
  N as ne,
  P as B,
  x as V,
  q as oe,
  a as ae,
  c as ie,
  o as se,
  f as j,
  w as re,
  e as i,
  k as C,
  _ as ce,
  t as d,
  L as le,
  v as de,
  C as E,
  m as g,
  Y as ue,
  a0 as he,
  n as me
} from "#entry";
const S = M(null);
let _ = 0;
const R = t => document.elementFromPoint(t.clientX, t.clientY)?.closest("[data-project-card]")?.dataset.projectCard ?? null,
  $ = t => {
    const o = t.touches[0];
    o && (S.value = R(o))
  },
  K = t => {
    const o = t.touches[0];
    if (!o) return;
    const s = R(o);
    s && (S.value = s)
  },
  ve = () => {
    window.addEventListener("touchstart", $, {
      passive: !0
    }), window.addEventListener("touchmove", K, {
      passive: !0
    })
  },
  fe = () => {
    window.removeEventListener("touchstart", $), window.removeEventListener("touchmove", K)
  };

function pe(t) {
  const {
    isMobile: o
  } = q(), s = O(() => S.value === ee(t));
  return A(() => {
    o.value && (_++, _ === 1 && ve())
  }), N(() => {
    o.value && (_ = Math.max(0, _ - 1), _ === 0 && (fe(), S.value = null))
  }), {
    isActive: s
  }
}
const ge = ["data-project-card"],
  _e = {
    class: "item-photo"
  },
  we = {
    class: "item-content"
  },
  xe = {
    class: "item-title-wrap"
  },
  ye = {
    class: "item-title h3-light"
  },
  Ce = {
    class: "item-title-scroll h3-light",
    "aria-hidden": "true"
  },
  Se = {
    class: "item-right"
  },
  Te = {
    class: "item-info-wrap"
  },
  be = {
    class: "item-info"
  },
  Le = {
    class: "info-text l2"
  },
  je = {
    class: "info-text l2"
  },
  Ee = {
    class: "info-text l2"
  },
  Me = {
    class: "item-info-scroll",
    "aria-hidden": "true"
  },
  ke = {
    class: "info-text-scroll l2"
  },
  Pe = {
    class: "info-text-scroll l2"
  },
  He = {
    class: "info-text-scroll l2"
  },
  Ie = te({
    __name: "Card",
    props: {
      data: {},
      view: {},
      priority: {
        type: Boolean
      }
    },
    setup(t) {
      const o = t,
        s = M();
      let m = null,
        v = null;
      const {
        isMobile: u
      } = q(), W = ne(), w = M(!1), f = B("project-card-expand", () => !1), D = B("transition-instant", () => !1);
      let r = null,
        T = !1;
      const k = O(() => u.value && o.data.heroMedia_mobile?.original ? o.data.heroMedia_mobile : o.data.heroMedia),
        {
          isActive: z
        } = pe(() => o.data.slug);
      A(() => {
        I()
      }), N(() => {
        m?.in.kill(), v?.in.kill(), m = null, v = null, !(T || !r) && (g.killTweensOf([r, ...r.children]), r.remove(), r = null, f.value && (f.value = !1, E(!1)))
      });
      const F = () => String(W.name).split("___")[0] === "projects",
        Y = e => {
          if (e instanceof HTMLImageElement) {
            const a = document.createElement("img");
            return a.src = e.currentSrc || e.src, a.alt = "", a.draggable = !1, a
          }
          if (e.readyState >= 2 && e.videoWidth) {
            const a = document.createElement("canvas");
            return a.width = e.videoWidth, a.height = e.videoHeight, a.getContext("2d")?.drawImage(e, 0, 0, a.width, a.height), a
          }
          const n = document.createElement("video");
          n.muted = !0, n.playsInline = !0, n.preload = "auto", n.src = he(e.currentSrc || e.src);
          const c = e.currentTime;
          return n.addEventListener("loadeddata", () => {
            try {
              n.currentTime = c
            } catch {}
          }, {
            once: !0
          }), n
        },
        G = async e => {
          if (!F() || u.value || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
          if (f.value) {
            e.preventDefault(), e.stopPropagation();
            return
          }
          const n = s.value?.querySelector(".item-photo"),
            c = n?.querySelector("img, video"),
            a = e.currentTarget?.getAttribute("href"),
            p = n?.getBoundingClientRect();
          if (!n || !c || !a || !p || p.width < 2 || p.height < 2) return;
          e.preventDefault(), e.stopPropagation(), f.value = !0, E(!0);
          const x = n.getBoundingClientRect(),
            h = document.createElement("div");
          r = h, h.className = "project-expand", h.style.cssText = `position:fixed;top:${x.top}px;left:${x.left}px;width:${x.width}px;height:${x.height}px;overflow:hidden;z-index:2500;pointer-events:none;`;
          const l = Y(c);
          l.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;";
          const L = document.createElement("div");
          if (L.style.cssText = "position:absolute;inset:0;opacity:0;background:linear-gradient(0deg,var(--c-black-40) 0%,rgba(0,0,0,0) 100%);", h.append(l, L), l instanceof HTMLImageElement && !l.complete && await new Promise(y => {
              l.addEventListener("load", () => y(), {
                once: !0
              }), l.addEventListener("error", () => y(), {
                once: !0
              })
            }), !!r && (document.body.append(h), n.style.visibility = "hidden", g.set(l, {
              scale: s.value?.classList.contains("is-hovered") ? 1.05 : 1
            }), await new Promise(y => {
              g.to(l, {
                scale: 1,
                duration: .9,
                ease: "InOut"
              }), g.to(L, {
                opacity: 1,
                duration: .9,
                ease: "InOut"
              }), g.to(h, {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                duration: .9,
                ease: "InOut",
                onComplete: y
              })
            }), !!r)) {
            D.value = !0, T = !0;
            try {
              await ue(a)
            } catch {
              T = !1, n.style.visibility = "", h.remove(), r = null, f.value = !1, E(!1)
            }
          }
        }, b = () => o.view !== "grid-l", P = () => {
          b() && (w.value = !0, m?.in.timeScale(1.3).play(), v?.in.timeScale(1.3).play())
        }, H = () => {
          b() && (w.value = !1, m?.in.timeScale(1.5).reverse(), v?.in.timeScale(1.5).reverse())
        }, U = () => {
          u.value || P()
        }, X = () => {
          u.value || H()
        };
      V(z, e => {
        !u.value || !b() || (e ? P() : H())
      });
      const J = () => !u.value && o.view !== "grid-s",
        Q = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
        I = async () => {
          if (!s.value || !Q()) return;
          const e = s.value.querySelector(".item-title"),
            n = [...s.value.querySelectorAll(".info-text")].filter(c => c.textContent?.trim());
          !m && !u.value && e?.textContent?.trim() && (m = await oe(e)), !v && J() && n.length && (v = await ae(n))
        };
      return V(() => o.view, () => {
        I()
      }), (e, n) => {
        const c = Z,
          a = ce,
          p = le;
        return se(), ie("div", {
          ref_key: "itemRef",
          ref: s,
          class: de(["item", {
            "is-hovered": C(w)
          }]),
          "data-project-card": t.data.slug,
          onMouseenter: U,
          onMouseleave: X
        }, [j(p, {
          to: "/projects/" + t.data.slug,
          class: "item-link",
          onClickCapture: G
        }, {
          default: re(() => [i("div", _e, [j(c, {
            media: C(k),
            alt: C(k).alt || t.data.heroTitle,
            fetchpriority: t.priority ? "high" : "auto",
            active: C(w),
            hover: "",
            "mob-preview": "",
            inner: ""
          }, null, 8, ["media", "alt", "fetchpriority", "active"])]), j(a, {
            class: "item-gradient"
          }), i("div", we, [n[0] || (n[0] = i("div", {
            class: "item-line"
          }, null, -1)), i("div", xe, [i("h2", ye, d(t.data.heroTitle), 1), i("p", Ce, d(t.data.heroTitle), 1)]), i("div", Se, [i("div", Te, [i("div", be, [i("p", Le, d(t.data.categories.join(", ")), 1), i("p", je, d(t.data.location), 1), i("p", Ee, d(t.data.area), 1)]), i("div", Me, [i("p", ke, d(t.data.categories.join(", ")), 1), i("p", Pe, d(t.data.location), 1), i("p", He, d(t.data.area), 1)])])])])]),
          _: 1
        }, 8, ["to"])], 42, ge)
      }
    }
  }),
  qe = Object.assign(me(Ie, [
    ["__scopeId", "data-v-eb2c7807"]
  ]), {
    __name: "PageProjectsCard"
  });
export {
  qe as _
};