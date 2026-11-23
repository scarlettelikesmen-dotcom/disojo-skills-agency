/* https://hilight.design/_nuxt/DEY5gowE.js */
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./DwWBZSTG.js", "./g4UUSNTr.js", "./entry.DEEv-M-z.css", "./VideoScroller.BPTAP_mc.css", "./CeRq7wW9.js", "./NNDQgaBy.js", "./F56iWJ6C.js", "./C4EjCHeh.js", "./MFXTMO1R.js"]))) => i.map(i => d[i]);
import {
  u as dt,
  A as _t,
  _ as mt
} from "./DX7rj7S8.js";
import {
  d as ie,
  W as pt,
  P as ge,
  p as be,
  r as Y,
  b as ft,
  s as ht,
  c as v,
  e as o,
  f,
  t as b,
  k as m,
  v as De,
  F as H,
  y as U,
  j as O,
  h as N,
  a5 as vt,
  l as Re,
  Y as gt,
  o as u,
  _ as je,
  w as z,
  D as Be,
  L as ce,
  ah as Oe,
  m as w,
  a as ye,
  q as yt,
  aj as wt,
  n as G,
  z as Ve,
  M as bt,
  O as kt,
  u as St,
  H as $t,
  R as Tt,
  U as Pt,
  a4 as At,
  Q as Ct
} from "#entry";
import {
  u as Fe,
  _ as He
} from "./BjmPVgMU.js";
import {
  a as xt
} from "./B42LVb-8.js";
import {
  _ as Lt
} from "./ChFLHJTk.js";
import {
  _ as Et
} from "./812V_3Eq.js";
import {
  _ as Ue
} from "./CgegnB1j.js";
import {
  _ as Mt
} from "./C6yeEfUZ.js";
import {
  u as qt
} from "./4MnaQWY0.js";
import "./lKvBwyz6.js";
import "./hfYGQhmZ.js";
import "./DwWBZSTG.js";
import "./Fjg1XfjS.js";
import "./BzLCLO6P.js";

function we(c) {
  const n = (Array.isArray(c) ? c : [c]).filter(a => a != null);
  return Promise.all(n.map(a => Promise.resolve(a)))
}

function Dt(c) {
  let n = 0,
    a = 0,
    h = !1,
    l = 0;
  async function p() {
    if (h) return;
    const r = l;
    h = !0;
    try {
      for (; r === l && a !== n;) {
        if (await we(c.hide(n)), r !== l) return;
        const k = a;
        if (await we(c.show(k)), r !== l) return;
        n = k
      }
    } finally {
      r === l && (h = !1, a !== n && p())
    }
  }
  return {
    request(r) {
      a = r, p()
    },
    hold(r, k) {
      l += 1;
      const I = l;
      return n = r, a = r, h = !0, we(k).finally(() => {
        I === l && (h = !1, a !== n && p())
      })
    },
    reset(r = 0) {
      l += 1, n = r, a = r, h = !1
    }
  }
}
const It = wt(() => Oe(() => import("./DwWBZSTG.js").then(c => c.V), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(c => c.default || c)),
  Rt = {
    class: "visually-hidden"
  },
  jt = {
    class: "sticky"
  },
  Bt = {
    class: "head"
  },
  Ot = {
    class: "head-titles"
  },
  Vt = {
    class: "name-items-wrap"
  },
  Ft = {
    class: "name-items"
  },
  Ht = {
    class: "descriptions"
  },
  Ut = {
    class: "descr-items"
  },
  Nt = {
    class: "p2 descr-item"
  },
  Wt = {
    class: "body"
  },
  Xt = {
    class: "title l2"
  },
  Yt = {
    class: "descr h3-light"
  },
  zt = {
    class: "video-wrap"
  },
  Gt = ["aria-label"],
  Qt = ["onClick"],
  Kt = {
    class: "service-tab-row"
  },
  ae = 2.5,
  Jt = 1,
  Zt = 1.75,
  es = 1,
  Ie = 200,
  ts = 80,
  ss = 8,
  os = ie({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(c) {
      const n = [0, 6.625, 19.708333333333332, 24.666666666666668, 29.625],
        a = n.length - 1,
        h = c,
        l = Y(null),
        {
          x: p,
          y: r,
          visible: k
        } = Fe(l, ".content-wrap"),
        I = pt(),
        g = ge("lenis"),
        $ = ge("navigation-is-pop", () => !1),
        P = ge("services-hero-restore", () => null);
      let A = null;
      const le = e => {
          A = e ?? null
        },
        S = Y(null),
        M = Y(0);
      let C = 0;
      const ue = Re(() => Math.max(0, M.value - 1)),
        ke = Y(!1);
      let T = null,
        R = !1,
        x = !1,
        W = 0,
        Q = 0,
        K = 0,
        j = !1,
        B = !1,
        q = 0,
        V = 0,
        J = 0,
        Z = 0,
        ee = "in",
        L, de = [],
        te = [],
        _e = [],
        F = null,
        X = [];
      const Se = e => {
          e && (P.value = e)
        },
        $e = () => $.value && P.value && h.data.items.some(e => e.slug === P.value) ? P.value : null,
        Ne = e => {
          const t = h.data.items.findIndex(s => s.slug === e);
          t < 0 || qe(t + 1)
        },
        We = e => {
          e?.out.pause(), e?.in.pause(), e?.out.getChildren(!1, !0, !1).forEach(t => {
            const s = t;
            "xPercent" in s.vars && w.set(s.targets(), {
              xPercent: 120
            }), "yPercent" in s.vars && w.set(s.targets(), {
              yPercent: 120
            })
          })
        },
        se = e => (We(e), e?.in.invalidate().restart(), e?.in),
        oe = e => {
          if (e?.in.pause(), !!e) return e.out.eventCallback("onComplete", null), e.out.timeScale(Zt), e.out.invalidate().restart(), e.out
        },
        Te = e => {
          const t = S.value;
          if (!t || e < 1) return [];
          const s = e - 1;
          return [t.querySelectorAll(".head-title")[s], t.querySelectorAll(".name-item")[s], t.querySelectorAll(".descr-slide")[s]].filter(i => !!i)
        },
        Xe = e => {
          const t = Te(e);
          t.length && w.set(t, {
            autoAlpha: 0
          })
        },
        Ye = e => {
          const t = X[e];
          if (t) return w.to(t, {
            autoAlpha: 0,
            yPercent: 100,
            duration: .25,
            ease: "In",
            overwrite: !0
          })
        },
        ze = e => {
          const t = X[e];
          if (t) return w.to(t, {
            autoAlpha: 1,
            yPercent: 0,
            duration: .8,
            delay: .95,
            ease: "Out",
            overwrite: !0
          })
        },
        Ge = e => {
          if (e === 0) {
            if (!L?.in.progress()) {
              L?.out.pause(0), L?.in.pause(0);
              return
            }
            return oe(L)
          }
          const t = [oe(de[e - 1]), oe(te[e - 1]), oe(_e[e - 1]), Ye(e - 1)];
          return Promise.all(t.filter(Boolean).map(s => Promise.resolve(s))).then(() => {
            Xe(e)
          })
        },
        Qe = e => {
          if (e === 0) return L?.in.pause(), L && L.out.progress() > 0 ? L.out.reverse() : se(L);
          const t = Te(e);
          return t.length && w.set(t, {
            autoAlpha: 1
          }), ze(e - 1), [se(de[e - 1]), se(te[e - 1]), se(_e[e - 1])]
        },
        ne = Dt({
          hide(e) {
            return [Ke(Je(e)), Ge(e)]
          },
          show(e) {
            return Pe(e !== 0), Qe(e)
          }
        }),
        Ke = (e, t) => {
          const s = e.filter(i => !!i);
          if (s.length) return w.to(s, {
            autoAlpha: 0,
            duration: .25,
            overwrite: !0
          })
        },
        Je = e => e === 0 ? [] : [F],
        Pe = e => {
          F && w.to(F, {
            scaleX: e ? 1 : 0,
            duration: .4,
            overwrite: !0
          })
        };
      dt(async e => {
        if (window.innerWidth < 1024) return;
        const t = S.value;
        if (!t) return;
        L = await ye(t.querySelectorAll(".body .title, .body .descr, .descriptions .scroll")), te = await Promise.all([...t.querySelectorAll(".name-item")].map(i => yt(i))), _e = await Promise.all([...t.querySelectorAll(".descr-item")].map(i => ye(i))), de = await Promise.all([...t.querySelectorAll(".head-title")].map(i => ye(i))), F = t.querySelector(".head-line"), X = [...t.querySelectorAll(".service-link")], X.length && w.set(X, {
          autoAlpha: 0,
          yPercent: 100
        }), F && w.set(F, {
          scaleX: 0
        }), w.set(t.querySelectorAll(".head-title, .name-item, .descr-slide"), {
          autoAlpha: 0
        }), ne.reset(0);
        const s = {
          t: 0
        };
        e.from(s, {
          t: 1,
          duration: .2
        }), e.add(() => {
          C !== 0 || $e() || ne.hold(0, L?.in.play(0))
        }, .2)
      }), be(() => {
        window.innerWidth < 1024 || (ke.value = !0, !S.value) || (g.value?.on("scroll", Me), window.addEventListener("wheel", Ee, {
          passive: !1,
          capture: !0
        }))
      }), ft(() => {
        window.innerWidth < 1024 || (async () => {
          await pe();
          const e = $e();
          if (e) {
            for (let t = 0; t < 60 && (!te.length || !A?.seek); t++) await new Promise(s => requestAnimationFrame(s));
            Ne(e), P.value = null
          }
        })()
      }), ht(() => {
        W++, x = !1, window.clearTimeout(K), A?.stop(), T?.kill(), T = null, g.value?.off("scroll", Me), window.removeEventListener("wheel", Ee, {
          capture: !0
        }), g.value?.start()
      });
      const Ze = () => {
          if (M.value < 1) return;
          const e = h.data.items[ue.value]?.slug;
          Se(e), gt(I(`/services/${e}`))
        },
        me = () => g.value?.scroll ?? 0,
        Ae = () => {
          const e = S.value,
            t = g.value;
          if (!e || !t) return;
          const s = t.scroll + e.getBoundingClientRect().top;
          t.scrollTo(s, {
            immediate: !0,
            force: !0
          })
        },
        pe = async (e = !1) => {
          const t = S.value;
          if (!t || x) return;
          const s = ++W;
          x = !0, ee = "in", j = !1, B = !1, q = 0, V = 0, J = 0, Z = 0;
          const {
            Observer: i
          } = await Oe(async () => {
            const {
              Observer: d
            } = await import("./CeRq7wW9.js");
            return {
              Observer: d
            }
          }, __vite__mapDeps([4, 1, 2, 5, 6, 7, 8]), import.meta.url);
          w.registerPlugin(i), s === W && (g.value?.stop(), e ? Ae() : g.value?.scrollTo(t.offsetTop, {
            immediate: !0,
            force: !0
          }), e && requestAnimationFrame(() => {
            s !== W || !x || Ae()
          }), T?.kill(), T = i.create({
            type: "wheel,touch",
            preventDefault: !0,
            capture: !0,
            tolerance: 20,
            onChangeY(d) {
              let y = d.deltaY;
              const E = d.event;
              if (E && (E.type.startsWith("touch") || "pointerType" in E && E.pointerType === "touch") && (y = -y), !y) return;
              const _ = y > 0 ? 1 : -1;
              V && _ !== V || (q && Math.sign(q) !== Math.sign(y) && (q = 0), q += y, !(Math.abs(q) < 10) && (q = 0, V = _, et(_)))
            },
            onStop() {
              q = 0, V = 0
            }
          }))
        }, Ce = e => {
          W++, x = !1, ee = e > 0 ? "after" : "before", j = !1, B = !1, Q = performance.now() + Ie, window.clearTimeout(K), K = window.setTimeout(() => {
            Le()
          }, Ie), T?.kill(), T = null, A?.stop(), R = !1, q = 0, V = 0, J = 0, Z = 0;
          const t = S.value?.offsetTop ?? 0;
          g.value?.start(), g.value?.scrollTo(t + e * ss, {
            immediate: !0,
            force: !0
          })
        }, xe = () => {
          x || T || (C = a, M.value = a, ne.request(a), re(n[a], {
            instant: !0
          }), pe(!0))
        }, Le = () => {
          if (x || T || ee !== "after" || !j || !B || performance.now() < Q) return;
          const e = S.value?.offsetTop ?? 0;
          me() > e + 1 || xe()
        }, Ee = e => {
          if (x && !T) {
            e.preventDefault();
            return
          }
          if (x || T || e.deltaY >= 0) return;
          const t = S.value?.offsetTop ?? 0;
          me() > t + 1 || j && (performance.now() < Q || (B = !0, e.preventDefault(), xe()))
        }, Me = ({
          scroll: e,
          direction: t
        }) => {
          if (x || T) return;
          const s = S.value?.offsetTop ?? 0;
          ee === "after" && e > s + ts && (j = !0), t === 1 ? B = !1 : t === -1 && j && (B = !0), Le()
        }, et = e => {
          e !== J && performance.now() < Z || R || (J = e, fe(C + e))
        }, qe = e => {
          if (x || T) {
            fe(e);
            return
          }
          window.clearTimeout(K), Q = 0, j = !1, B = !1, (async () => (await pe(!0), e !== C && fe(e)))()
        }, fe = e => {
          if (e === C) return;
          if (e > a) {
            if (R || C !== a) return;
            Ce(1);
            return
          }
          if (e < 0) {
            if (R || C !== 0 || me() <= 0) return;
            Ce(-1);
            return
          }
          if (R) return;
          const t = C;
          C = e, R = !0, M.value = e;
          const s = n[t],
            i = n[e],
            d = e > t ? n[e - 1] : n[e + 1],
            y = e > t ? s < d && d < i : s > d && d > i;
          let E = !1;
          const _ = () => {
              E || (E = !0, ne.request(e))
            },
            D = (ot, nt, rt) => {
              const at = Math.abs(nt - ot),
                it = Math.max(1.2, at / rt),
                ct = performance.now(),
                lt = Math.max(0, it - Jt);
              return ut => {
                he(ut), (performance.now() - ct) / 1e3 >= lt && _()
              }
            },
            ve = () => {
              _(), Z = performance.now() + 450
            };
          if (!y) {
            re(i, {
              onUpdate: D(s, i, ae),
              onDone: ve
            });
            return
          }
          const tt = Math.abs(d - s),
            st = Math.max(ae * 4, tt / es);
          re(d, {
            speed: st,
            holdBusy: !0,
            onDone: () => {
              re(i, {
                onUpdate: D(d, i, ae),
                onDone: ve
              })
            }
          })
        }, re = (e, {
          instant: t = !1,
          speed: s = ae,
          onUpdate: i,
          onDone: d,
          holdBusy: y = !1
        } = {}) => {
          if (!A?.seek) {
            R = !1;
            return
          }
          A.seek(e, {
            instant: t,
            speed: s,
            onUpdate: i ?? he,
            onComplete: () => {
              try {
                he(e), d?.()
              } finally {
                y || window.setTimeout(() => {
                  R = !1
                }, t ? 0 : 160)
              }
            }
          })
        }, he = e => {
          S.value?.querySelectorAll(".service-tab-progress")?.forEach((s, i) => {
            const d = n[i] ?? 0,
              y = n[i + 1] ?? d,
              E = y > d ? w.utils.clamp(0, 1, (e - d) / (y - d)) : 0;
            w.set(s, {
              scaleX: E
            })
          })
        };
      return (e, t) => {
        const s = He,
          i = je,
          d = Be,
          y = ce,
          E = It;
        return u(), v("section", {
          ref_key: "sectionRef",
          ref: S,
          class: "services"
        }, [o("h1", Rt, b(e.$t("services")), 1), f(s, {
          x: m(p),
          y: m(r),
          visible: m(k) && m(M) >= 1
        }, null, 8, ["x", "y", "visible"]), o("div", jt, [f(i, {
          class: "top-gradient",
          top: ""
        }), f(i, {
          class: "bot-gradient"
        }), o("div", {
          ref_key: "stickyRef",
          ref: l,
          class: De(["content-wrap", {
            clickable: m(M) >= 1
          }]),
          onClick: Ze
        }, [o("div", Bt, [o("div", Ot, [(u(!0), v(H, null, U(c.data.items, _ => (u(), v("p", {
          key: _.slug,
          class: "head-title l2"
        }, b(_.servicesSubtitle?.trim() || e.$t("we_do")), 1))), 128))]), t[1] || (t[1] = o("div", {
          class: "head-line"
        }, null, -1)), o("div", Vt, [o("div", Ft, [(u(!0), v(H, null, U(c.data.items, ({
          heroTitle: _
        }, D) => (u(), v("h2", {
          key: D,
          class: "h1-light name-item"
        }, b(_), 1))), 128))]), o("div", Ht, [o("div", Ut, [(u(!0), v(H, null, U(c.data.items, _ => (u(), v("div", {
          key: _.slug,
          class: "descr-slide"
        }, [o("p", Nt, b(_.description), 1), f(y, {
          to: `/services/${_.slug}`,
          class: "service-link",
          onClick: D => Se(_.slug)
        }, {
          default: z(() => [f(d, {
            text: e.$t("learn_more"),
            white: ""
          }, null, 8, ["text"])]),
          _: 1
        }, 8, ["to", "onClick"])]))), 128))])])])]), o("div", Wt, [o("p", Xt, b(e.$t("services")), 1), o("p", Yt, b(c.data.description), 1)]), o("div", zt, [m(ke) ? (u(), O(E, {
          key: 0,
          ref: _ => le(_),
          "sequence-path": "/sequences/services"
        }, null, 512)) : N("", !0)])], 2), o("nav", {
          class: "service-tabs",
          "aria-label": e.$t("services"),
          onClick: t[0] || (t[0] = vt(() => {}, ["stop"]))
        }, [(u(!0), v(H, null, U(c.data.items, (_, D) => (u(), v("button", {
          key: _.slug,
          type: "button",
          class: De(["service-tab l2", {
            active: m(M) === D + 1
          }]),
          onClick: ve => qe(D + 1)
        }, [t[2] || (t[2] = o("span", {
          class: "service-tab-line"
        }, [o("span", {
          class: "service-tab-progress"
        })], -1)), o("span", Kt, [o("span", null, b(String(D + 1).padStart(2, "0")), 1), o("span", null, b(_.heroTitle), 1)])], 10, Qt))), 128))], 8, Gt)])], 512)
      }
    }
  }),
  ns = Object.assign(G(os, [
    ["__scopeId", "data-v-47dd026e"]
  ]), {
    __name: "PageServicesHero"
  }),
  rs = {
    class: "services"
  },
  as = {
    class: "head"
  },
  is = {
    class: "title l2"
  },
  cs = {
    class: "descr h3-light"
  },
  ls = {
    class: "body",
    "data-header-white": ""
  },
  us = {
    class: "item-photo"
  },
  ds = {
    class: "item-content"
  },
  _s = {
    class: "item-title h1-light"
  },
  ms = {
    class: "item-descr p2"
  },
  ps = {
    class: "item-btn"
  },
  fs = ie({
    __name: "HeroMob",
    props: {
      data: {}
    },
    setup(c) {
      const n = c,
        a = Re(() => n.data.items.map(l => ({
          ...l,
          media: l.heroMediaMob?.original ? l.heroMediaMob : l.heroMedia
        })));
      return be(async () => {
        document.querySelectorAll("section.services .item").forEach(p => {
          const r = p.querySelector(".item-photo");
          w.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: p,
              start: "top bottom",
              end: "bottom top",
              scrub: !0
            }
          }).fromTo(r, {
            yPercent: -10,
            scale: 1.1
          }, {
            yPercent: 10,
            scale: 1.1
          })
        })
      }), (l, p) => {
        const r = xt,
          k = je,
          I = Be,
          g = ce;
        return u(), v("section", rs, [o("div", as, [o("h1", is, b(l.$t("services")), 1), o("p", cs, b(c.data.description), 1)]), o("div", ls, [(u(!0), v(H, null, U(m(a), ($, P) => (u(), O(g, {
          key: $.slug,
          to: `/services/${$.slug}`,
          class: "item"
        }, {
          default: z(() => [o("div", us, [f(r, {
            media: $.media,
            alt: $.heroTitle,
            fetchpriority: P === 0 ? "high" : "auto",
            inner: ""
          }, null, 8, ["media", "alt", "fetchpriority"])]), f(k, {
            class: "item-gradient"
          }), o("div", ds, [o("h2", _s, b($.heroTitle), 1), o("p", ms, b($.description), 1), o("div", ps, [f(I, {
            text: l.$t("learn_more"),
            white: "",
            arrow: ""
          }, null, 8, ["text"])])])]),
          _: 2
        }, 1032, ["to"]))), 128))])])
      }
    }
  }),
  hs = Object.assign(G(fs, [
    ["__scopeId", "data-v-4e2774cb"]
  ]), {
    __name: "PageServicesHeroMob"
  }),
  vs = {
    class: "projects"
  },
  gs = {
    class: "head"
  },
  ys = {
    class: "subtitle l2",
    "data-text-anim": ""
  },
  ws = {
    key: 0
  },
  bs = {
    class: "title h1-light",
    "data-title-anim": ""
  },
  ks = {
    class: "btn-wrap"
  },
  Ss = {
    class: "cta-sect"
  },
  $s = ie({
    __name: "Projects",
    props: {
      data: {}
    },
    setup(c) {
      const n = Y(null),
        {
          x: a,
          y: h,
          visible: l
        } = Fe(n);
      return (p, r) => {
        const k = He,
          I = Et,
          g = Ve,
          $ = ce,
          P = Ue;
        return u(), v("section", vs, [f(k, {
          x: m(a),
          y: m(h),
          visible: m(l)
        }, null, 8, ["x", "y", "visible"]), o("div", gs, [o("div", ys, [r[0] || (r[0] = o("p", null, "hilight®", -1)), p.$t("building_identities_through_space") ? (u(), v("p", ws, b(p.$t("building_identities_through_space")), 1)) : N("", !0)]), o("h2", bs, b(p.$t("featured_projects")), 1)]), o("div", {
          ref_key: "itemsRef",
          ref: n,
          class: "items grid-m"
        }, [(u(!0), v(H, null, U(c.data, A => (u(), O(I, {
          key: A.slug,
          data: A,
          view: "grid-m"
        }, null, 8, ["data"]))), 128))], 512), o("div", ks, [f($, {
          to: "/projects",
          class: "projects-btn",
          "data-element-anim": ""
        }, {
          default: z(() => [f(g, {
            text: `${p.$t("view_all_projects")}`,
            border: ""
          }, null, 8, ["text"])]),
          _: 1
        })]), o("div", Ss, [f(P)])])
      }
    }
  }),
  Ts = Object.assign(G($s, [
    ["__scopeId", "data-v-058302dd"]
  ]), {
    __name: "PageServicesProjects"
  }),
  Ps = {},
  As = {
    class: "cta-services"
  };

function Cs(c, n) {
  const a = Ue;
  return u(), v("section", As, [f(a)])
}
const xs = Object.assign(G(Ps, [
    ["render", Cs],
    ["__scopeId", "data-v-712d51a4"]
  ]), {
    __name: "PageServicesCta"
  }),
  Ls = {
    key: 0,
    class: "services-page"
  },
  Es = {
    key: 4
  },
  Ms = ie({
    __name: "index",
    async setup(c) {
      let n, a;
      const {
        locale: h
      } = bt(), {
        initUnicorn: l
      } = kt(), {
        isMobile: p
      } = St(), {
        data: r
      } = ([n, a] = $t(() => Ct(() => `services:${h.value}`, () => $fetch("/api/strapi/services", {
        query: {
          locale: h.value
        }
      }), {
        server: !0,
        lazy: !1,
        watch: [h]
      })), n = await n, a(), n);
      if (!r.value) throw Tt({
        statusCode: 404,
        statusMessage: "Services not found"
      });
      return Pt(r.value.meta), qt(), be(async () => {
        At(() => {
          new _t
        }, 0), await l()
      }), (k, I) => {
        const g = mt,
          $ = ns,
          P = hs,
          A = Ve,
          le = ce,
          S = Lt,
          M = Ts,
          C = xs,
          ue = Mt;
        return m(r) ? (u(), v("main", Ls, [f(g), m(p) ? (u(), O(P, {
          key: 1,
          data: m(r).hero
        }, null, 8, ["data"])) : (u(), O($, {
          key: 0,
          data: m(r).hero,
          "data-header-white": ""
        }, null, 8, ["data"])), m(p) ? N("", !0) : (u(), O(S, {
          key: 2,
          data: m(r).about,
          services: "",
          "second-section": ""
        }, {
          btn: z(() => [f(le, {
            to: "/lets-talk"
          }, {
            default: z(() => [f(A, {
              text: k.$t("discuss_the_project")
            }, null, 8, ["text"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["data"])), m(p) ? N("", !0) : (u(), O(M, {
          key: 3,
          data: m(r).projects,
          "data-header-white": "",
          "data-cookie-white": ""
        }, null, 8, ["data"])), m(p) ? (u(), v("div", Es, [f(C)])) : N("", !0), f(ue)])) : N("", !0)
      }
    }
  }),
  Ys = G(Ms, [
    ["__scopeId", "data-v-2c87695b"]
  ]);
export {
  Ys as
  default
};