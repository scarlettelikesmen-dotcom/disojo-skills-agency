/* https://yodezeen.com/_nuxt/QqsZIORN.js */
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./qQ5rb7qI.js", "./DwfT8PUP.js", "./BfIK-IeK.js", "./entry.loY7g2YX.css", "./LetsTalk.CSH7BYNo.css", "./5FC--5Lm.js", "./FooterNew.DQ5In-tR.css", "./BJyfPn1c.js", "./CKei0gBl.js", "./Gradient.H0z9qMCv.css", "./ViewNew2.BqBBruL7.css", "./B3QCgyoj.js", "./Cursor.NnNdRhWm.css"]))) => i.map(i => d[i]);
import {
  d as K,
  h as Z,
  V as De,
  o as y,
  c as b,
  n as O,
  a as u,
  b as o,
  t as q,
  F as Q,
  r as W,
  A as rt,
  j as S,
  f as X,
  G as it,
  u as T,
  B as G,
  s as de,
  w as ze,
  x as lt,
  i as D,
  e as $,
  _ as ct,
  a6 as ve,
  a7 as ut,
  a1 as dt,
  a8 as vt,
  g as x,
  S as be,
  P as Ue,
  k as ft,
  a3 as mt,
  q as le,
  a9 as pt,
  z as I,
  C as je,
  N as gt,
  H as yt,
  aa as Ee,
  ab as _t,
  ac as ht,
  a2 as Me,
  I as qe,
  W as M,
  l as wt,
  ad as Ne,
  y as fe,
  L as Be,
  v as bt,
  ae as jt
} from "./BfIK-IeK.js";
import {
  B as Ct,
  a as St,
  c as Pt
} from "./2P3L_xuV.js";
import {
  a as xt
} from "./BO-H7PM5.js";
import {
  u as At
} from "./D2s2jlu9.js";
const kt = {
    class: "head"
  },
  It = {
    class: "selected-text p2"
  },
  $t = {
    class: "dropdown"
  },
  Vt = {
    ref: "listWrap",
    class: "list-wrap",
    "data-lenis-prevent": ""
  },
  Lt = {
    class: "list"
  },
  Tt = ["onClick"],
  Ot = K({
    __name: "Select",
    props: {
      modelValue: {},
      options: {},
      title: {}
    },
    emits: ["update:modelValue"],
    setup(a, {
      emit: p
    }) {
      const n = a,
        d = p,
        h = S(!1),
        l = S(null),
        j = () => {
          h.value = !h.value
        },
        g = (v, _) => String(v) === String(_),
        R = v => {
          const N = n.modelValue.some(B => g(B, v.value)) ? n.modelValue.filter(B => !g(B, v.value)) : [...n.modelValue, v.value];
          d("update:modelValue", N)
        },
        E = v => {
          const _ = v.target;
          l.value?.contains(_) || (h.value = !1)
        };
      return Z(() => {
        document.addEventListener("pointerdown", E)
      }), De(() => {
        document.removeEventListener("pointerdown", E)
      }), (v, _) => (y(), b("div", {
        ref_key: "selectRef",
        ref: l,
        class: O(["select", {
          open: u(h),
          selected: a.modelValue
        }]),
        onClick: j
      }, [o("div", kt, [o("div", It, q(a.title), 1), _[0] || (_[0] = o("svg", {
        class: "icon-arrow",
        viewBox: "0 0 9 6",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [o("path", {
        d: "M4.33203 4.37114e-07L0.00190406 6L8.66216 6L4.33203 4.37114e-07Z",
        fill: "#2D2A2A"
      })], -1))]), o("div", $t, [o("div", Vt, [o("div", Lt, [(y(!0), b(Q, null, W(a.options, ({
        value: N,
        label: B
      }) => (y(), b("button", {
        key: N,
        class: O(["option p2", {
          active: a.modelValue.some(ee => String(ee) === String(N))
        }]),
        onClick: rt(ee => R({
          value: N
        }), ["stop"])
      }, [o("span", null, q(B), 1), _[1] || (_[1] = o("div", {
        class: "checked"
      }, null, -1))], 10, Tt))), 128))])], 512)])], 2))
    }
  }),
  Rt = X(Ot, [
    ["__scopeId", "data-v-91b1ff25"]
  ]),
  Et = {},
  Mt = {
    class: "blur"
  };

function qt(a, p) {
  return y(), b("div", Mt, [...p[0] || (p[0] = [it('<div class="layer layer-1" style="--start-gradient:0%;--end-gradient:10%;" data-v-f49d2d45></div><div class="layer layer-2" style="--start-gradient:10%;--end-gradient:20%;" data-v-f49d2d45></div><div class="layer layer-3" style="--start-gradient:20%;--end-gradient:30%;" data-v-f49d2d45></div><div class="layer layer-4" style="--start-gradient:30%;--end-gradient:40%;" data-v-f49d2d45></div><div class="layer layer-5" style="--start-gradient:40%;--end-gradient:50%;" data-v-f49d2d45></div><div class="layer layer-6" style="--start-gradient:50%;--end-gradient:60%;" data-v-f49d2d45></div><div class="layer layer-7" style="--start-gradient:60%;--end-gradient:70%;" data-v-f49d2d45></div><div class="layer layer-8" style="--start-gradient:70%;--end-gradient:80%;" data-v-f49d2d45></div><div class="layer layer-9" style="--start-gradient:80%;--end-gradient:90%;" data-v-f49d2d45></div><div class="layer layer-10" style="--start-gradient:90%;--end-gradient:100%;" data-v-f49d2d45></div>', 10)])])
}
const Nt = X(Et, [
  ["render", qt],
  ["__scopeId", "data-v-f49d2d45"]
]);

function Fe(a, p) {
  a = (a || "").toLowerCase(), p = (p || "").toLowerCase();
  const n = /iphone|ipad|ipod/.test(a),
    d = /safari/.test(a),
    h = /chrome|crios|crmo|chromium|edg|edgios|edga|opr|fxios/.test(a),
    l = p.includes("apple");
  return n ? d && !/crios|fxios|edgios|opr\//.test(a) : l && d && !h
}

function Bt() {
  const a = navigator.userAgent,
    p = navigator.vendor,
    n = T("is-safari", () => Fe(a, p));
  Z(() => {
    n.value = Fe(navigator.userAgent, navigator.vendor)
  });
  const d = G(() => !n.value);
  return {
    isSafari: n,
    isNotSafari: d
  }
}
const Ft = {
    class: "project-inner"
  },
  Dt = {
    class: "project__thumb"
  },
  zt = {
    class: "project__image"
  },
  Ut = {
    class: "project__info"
  },
  Ht = {
    class: "h3 project__title"
  },
  Qt = {
    class: "p2 project__location"
  },
  Wt = K({
    __name: "Card",
    props: {
      data: {},
      activeCategory: {},
      priority: {
        type: Boolean,
        default: !1
      }
    },
    setup(a) {
      const {
        isSafari: p
      } = Bt(), n = d => (Array.isArray(d) ? d.join("&") : d).toLowerCase().replace(/\s+/g, "-");
      return (d, h) => {
        const l = lt,
          j = Nt,
          g = ct;
        return y(), de(g, {
          class: O(["project", {
            _safari: u(p)
          }]),
          to: `/projects/${n(a.data.category)}/${n(a.data.subCategory)}/${a.data.slug}`,
          "data-category": JSON.stringify(a.data.category),
          "data-sub-category": JSON.stringify(a.data.subCategory),
          "data-country": a.data.country
        }, {
          default: ze(() => [o("div", Ft, [o("div", Dt, [o("div", zt, [a.data.image[0].original ? (y(), de(l, {
            key: 0,
            data: a.data.image[0],
            priority: a.priority,
            class: O({
              hide: a.data.image[1].original && a.activeCategory === "interior design"
            }),
            alt: `Project ${a.data.category} ${a.data.title}`
          }, null, 8, ["data", "priority", "class", "alt"])) : D("", !0), a.data.image[1].original ? (y(), de(l, {
            key: 1,
            data: a.data.image[1],
            inner: "",
            class: O({
              show: a.data.image[1].original && a.activeCategory === "interior design",
              "hide-default": a.data.image[1].original && a.activeCategory !== "interior design"
            }),
            alt: `Project ${a.data.category} ${a.data.title}`
          }, null, 8, ["data", "class", "alt"])) : D("", !0)])]), o("div", Ut, [$(j), h[0] || (h[0] = o("div", {
            class: "project__info-bg"
          }, null, -1)), o("h3", Ht, q(a.data.title), 1), o("p", Qt, q(a.data.location), 1)])])]),
          _: 1
        }, 8, ["class", "to", "data-category", "data-sub-category", "data-country"])
      }
    }
  }),
  Gt = X(Wt, [
    ["__scopeId", "data-v-60e68579"]
  ]);

function Jt(a, p) {
  return (n, d) => K({
    inheritAttrs: !1,
    props: a,
    emits: ["hydrated"],
    setup(h, l) {
      const j = ve({
          loader: d
        }),
        g = ve({
          hydrate: p(h),
          loader: () => Promise.resolve(j)
        }),
        R = () => {
          l.emit("hydrated")
        };
      return () => ut(g, dt(l.attrs, {
        onVnodeMounted: R
      }), l.slots)
    }
  })
}
const He = Jt({
  hydrateOnVisible: {
    type: [Object, Boolean],
    required: !1,
    default: !0
  }
}, a => vt(a.hydrateOnVisible === !0 ? void 0 : a.hydrateOnVisible));
class Yt extends Ct {
  letsTalkTriggers = [];
  constructor(p, n = !1) {
    super(p), this.commonAnim(n)
  }
  async commonAnim(p) {
    await St();
    const n = document.querySelectorAll(".parallax-image"),
      d = document.querySelectorAll(".anim-title"),
      h = document.querySelectorAll(".anim-text");
    n && n.length !== 0 && !p && n.forEach(l => {
      const j = l.querySelector("img");
      j && (l.style.overflow = "hidden", l.style.height = `${j.clientHeight*.9}px`, x.fromTo(j, {
        y: `-${j.clientHeight*.15}`,
        ease: "none"
      }, {
        y: `${j.clientHeight*.05}`,
        ease: "none",
        scrollTrigger: {
          trigger: l,
          start: "top bottom",
          end: "bottom top",
          scrub: !0
        }
      }))
    }), (!d || d.length !== 0) && d.forEach(l => {
      Pt(l)
    }), (!h || h.length !== 0) && h.forEach(l => {
      const {
        trigger: j
      } = l.dataset;
      be.create({
        trigger: l,
        start: `${j||"bottom"} bottom`,
        animation: xt(l)
      })
    })
  }
}
const Zt = He("components/page/LetsTalk.vue", () => fe(() => import("./qQ5rb7qI.js"), __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url).then(a => a.default || a)),
  Kt = He("components/common/FooterNew.vue", () => fe(() => import("./5FC--5Lm.js"), __vite__mapDeps([5, 2, 3, 6]), import.meta.url).then(a => a.default || a)),
  Xt = ve(() => fe(() => import("./BJyfPn1c.js"), __vite__mapDeps([7, 2, 3, 8, 9, 10]), import.meta.url).then(a => a.default || a)),
  ea = {
    key: 0,
    class: "projects-all"
  },
  ta = {
    class: "normal-view"
  },
  aa = {
    class: "header"
  },
  oa = {
    class: "container"
  },
  na = {
    class: "categories-wrap"
  },
  sa = {
    class: "categories"
  },
  ra = ["onClick"],
  ia = ["onClick"],
  la = {
    key: 0,
    class: "category-slash"
  },
  ca = {
    key: 0,
    class: "subcategory-mob"
  },
  ua = {
    class: "subcategory-mob-items"
  },
  da = ["onClick"],
  va = {
    class: "select-country-mob"
  },
  fa = {
    class: "sub-categories-wrap"
  },
  ma = {
    class: "sub-categories"
  },
  pa = {
    class: "categories-buttons"
  },
  ga = ["onClick"],
  ya = {
    class: "select-country"
  },
  _a = {
    class: "inner-btns"
  },
  ha = {
    class: "toggle-wrapper"
  },
  wa = ["onClick"],
  ba = {
    class: "footer-wrapper"
  },
  ja = {
    key: 0,
    class: "inner-view"
  },
  ce = "countries",
  ue = 12,
  Ca = K({
    __name: "all",
    setup(a) {
      const {
        projectsData: p
      } = T("commonData").value, n = S(p.pageAll), d = Ue(), h = T("from-project-page", () => !1), l = T("from-project-page-transition-finish", () => !1), j = T("load-original-photo"), g = S([]), R = G(() => {
        if (!n.value?.projects) return [];
        const e = new Set(n.value.projects.map(t => t.country).filter(Boolean));
        return Array.from(e).sort((t, r) => t.localeCompare(r)).map(t => ({
          label: t,
          value: t
        }))
      });
      let E = null;
      const {
        isMobile: v
      } = ft();

      function _(e) {
        return e.toLowerCase().replace(/\s+/g, "-")
      }
      const N = e => e.map(t => String(t).trim()).filter(Boolean).join(","),
        B = e => e ? (Array.isArray(e) && (e = e[0]), String(e).split(",").map(t => t.trim()).filter(Boolean)) : [],
        ee = mt(),
        te = S(!1),
        Ce = () => {
          te.value = !0;
          const e = B(d.query[ce]);
          if (!e.length) {
            g.value = [], te.value = !1;
            return
          }
          const t = new Set(R.value.map(r => String(r.value)));
          g.value = e.filter(r => t.has(r)), te.value = !1
        };
      Z(() => {
        Ce()
      }), le(g, e => {
        if (te.value) return;
        const t = {
          ...d.query
        };
        e.length ? t[ce] = N(e) : delete t[ce], ee.replace({
          query: t
        })
      }, {
        deep: !0
      }), le(() => d.query[ce], () => {
        Ce()
      });
      const Se = S(0),
        Pe = async e => {
          if (!v.value) return;
          await I();
          const t = document.querySelectorAll(".projects-all .subcategory-mob");
          Se.value !== e && (Se.value = e, x.to(t, {
            height: 0
          }), x.to(t[e - 1], {
            height: "auto"
          }))
        }, xe = e => !n.value?.projects.some(t => {
          const r = t.category || [],
            s = t.subCategory || [],
            i = !C.value || r.includes(C.value),
            f = s.includes(e),
            F = !g.value.length || g.value.includes(t.country);
          return i && f && F
        }), me = T("projects-inner-view", () => !1);
      me.value = !1;
      const Qe = [2, 4],
        ae = S(4),
        w = S(null),
        We = S(null),
        Ge = G(() => "*"),
        J = d.params.category,
        Ae = d.params.post,
        C = S(""),
        P = S("");
      if (n.value) {
        const e = n.value.categoryItems,
          t = n.value.subcategoryItems,
          r = typeof J == "string" ? e.find(f => _(f.id) === J) : null,
          s = typeof J == "string" ? t.find(f => _(f.id) === J) : null,
          i = typeof Ae == "string" ? t.find(f => _(f.id) === Ae) : null;
        if (!r && !s && !i && J) throw pt({
          statusCode: 404,
          statusMessage: "Page Not Found",
          fatal: !0
        });
        if (r && (C.value = r.id), v.value && r) {
          const f = n.value.categoryItems.findIndex(F => F.id === r.id);
          f > 0 && (E = f)
        }
        s && (P.value = s.id), i && (P.value = i.id)
      }
      const V = S(ue),
        L = S(!1),
        z = S(!1),
        pe = Me(null);
      let U = null,
        H = 0;
      const Je = e => {
          const t = e.category || [],
            r = e.subCategory || [],
            s = !C.value || t.includes(C.value),
            i = !P.value || r.includes(P.value),
            f = !g.value.length || g.value.includes(e.country);
          return s && i && f
        },
        oe = G(() => (n.value?.projects || []).filter(Je)),
        Ye = G(() => oe.value.slice(0, V.value)),
        Y = G(() => V.value < oe.value.length),
        Ze = e => {
          const t = e === "all";
          C.value = t ? "" : e, P.value = "", qe({
            event: "filter_select",
            group: "category",
            value: t ? "all" : e
          }), t ? M("/projects") : M(`/projects/${_(e)}`)
        },
        ke = e => {
          if (qe({
              event: "filter_select",
              group: "subcategory",
              value: e === "all" ? "all" : e
            }), e === "all") {
            P.value = "", C.value ? M(`/projects/${_(C.value)}`) : M("/projects");
            return
          }
          e === P.value ? (P.value = "", C.value ? M(`/projects/${_(C.value)}`) : M("/projects")) : (P.value = e, C.value ? M(`/projects/${_(C.value)}/${_(e)}`) : M(`/projects/${_(e)}`))
        },
        Ke = async (e, t) => {
          await I(), h.value = !0;
          const r = document.querySelectorAll(".project-card"),
            s = x.timeline({
              onComplete() {
                l.value = !0
              }
            });
          s.to(r, {
            scale: .75,
            ease: "power2.inOut",
            duration: .75
          }), s.to(r, {
            y: "-300vh",
            duration: 2,
            delay: i => Math.abs(i - t) * .05,
            ease: "power4.inOut"
          }, "<50%"), s.to(".all-projects-page", {
            opacity: 0,
            duration: 1
          }, "<")
        }, m = Me(null);

      function Xe() {
        m.value && (m.value.style.removeProperty("height"), m.value.style.removeProperty("position"), m.value.querySelectorAll(".project").forEach(e => {
          e.style.removeProperty("position"), e.style.removeProperty("left"), e.style.removeProperty("top"), e.style.removeProperty("transform"), e.style.removeProperty("opacity"), e.style.removeProperty("visibility"), e.style.removeProperty("transition")
        }))
      }
      async function et(e = {}) {
        const {
          clearStyles: t = !0
        } = e;
        he(), w.value && (w.value.destroy(), w.value = null), t && Xe()
      }
      async function Ie() {
        if (!m.value) return;
        const {
          $isotope: e
        } = wt();
        if (w.value = new e(m.value, {
            itemSelector: ".project",
            layoutMode: "masonry",
            filter: Ge.value,
            masonry: {
              gutter: 16
            }
          }), !!w.value) return w.value.on("layoutComplete", async () => {
          await I(), be.refresh()
        }), !0
      }
      async function tt() {
        v.value || !m.value || (await et(), await se(m.value, 1e3), await I(), await Ie(), re(m.value), w.value?.filteredItems?.length && (x.set(w.value.filteredItems.map(e => e.element.querySelector(".project__image")), {
          y: 0,
          yPercent: 0
        }), await ne(w.value.filteredItems)), we())
      }
      async function $e() {
        if (!Y.value || L.value || !z.value || !w.value || !m.value) return;
        L.value = !0;
        const e = H,
          t = V.value;
        if (V.value = Math.min(V.value + ue, oe.value.length), await I(), e !== H) {
          L.value = !1;
          return
        }
        const s = [...m.value.querySelectorAll(".project-card")].slice(t);
        if (s.length) {
          if (await se(s, 800), e !== H) {
            L.value = !1;
            return
          }
          w.value.appended(s), re(s), await ne(s.map(i => ({
            element: i
          }))), we()
        }
        L.value = !1
      }
      async function at() {
        if (!Y.value || L.value || !z.value) return;
        L.value = !0;
        const e = H;
        if (V.value = Math.min(V.value + ue, oe.value.length), await I(), e !== H) {
          L.value = !1;
          return
        }
        L.value = !1
      }
      async function ge() {
        if (v.value || !m.value || !Y.value) return;
        let e = 0;
        for (; Y.value && e < 10 && !(m.value.getBoundingClientRect().bottom > window.innerHeight + 300);) {
          const r = V.value;
          if (await $e(), V.value === r) break;
          e += 1
        }
      }

      function Ve() {
        U?.disconnect(), !(!pe.value || typeof IntersectionObserver > "u") && (v.value ? U = new IntersectionObserver(e => {
          e.some(t => t.isIntersecting) && at()
        }, {
          root: null,
          rootMargin: "250px 0px",
          threshold: 0
        }) : U = new IntersectionObserver(e => {
          e.some(t => t.isIntersecting) && $e().then(() => ge())
        }, {
          root: null,
          rootMargin: "300px 0px",
          threshold: 0
        }), U.observe(pe.value))
      }
      let ye = !1;
      const ot = () => {
          ye = !0, me.value = !0, je(!0), x.to(".switcher-link span", {
            x: "17px"
          })
        },
        nt = () => {
          ye && (ye = !1, x.to(".projects-different", {
            x: 0,
            xPercent: 0,
            duration: 1.5,
            ease: "power4.inOut"
          }), x.to(".normal-view", {
            xPercent: -50,
            duration: 1.5,
            ease: "power4.inOut"
          }))
        },
        _e = [];
      async function ne(e) {
        v.value || !e?.length || (await Ne(0), e.forEach(({
          element: t
        }) => {
          const r = t.querySelector(".project__image");
          if (!r) return;
          x.set(r, {
            yPercent: 10,
            scale: 1.25
          });
          const {
            top: s
          } = t.getBoundingClientRect(), i = s < window.innerHeight ? 0 : "top bottom", f = x.to(r, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: t,
              start: i,
              end: "bottom top",
              scrub: !0
            }
          });
          _e.push(f)
        }))
      }

      function he() {
        _e.forEach(e => e?.kill()), _e.length = 0
      }

      function se(e, t = 1e3) {
        const r = Array.isArray(e) ? e.flatMap(i => Array.from(i.querySelectorAll("img"))) : Array.from(e.querySelectorAll("img"));
        if (!r.length) return Promise.resolve();
        const s = Promise.all(r.map(i => new Promise(f => {
          if (i.complete) return f();
          i.onload = () => f(), i.onerror = () => f()
        }))).then(() => {});
        return t <= 0 ? s : Promise.race([s, new Promise(i => setTimeout(i, t))])
      }

      function re(e) {
        if (v.value) return;
        (Array.isArray(e) ? e : [e]).flatMap(s => Array.from(s.querySelectorAll("img"))).forEach(s => {
          s.complete || s.addEventListener("load", () => {
            w.value?.layout(), we()
          }, {
            once: !0
          })
        })
      }
      async function st() {
        if (!m.value) return;
        await Ne(0);
        const e = m.value.offsetLeft,
          t = [...m.value.children],
          r = m.value.offsetTop,
          s = t.filter(i => i.offsetTop + r < window.innerHeight);
        x.timeline().fromTo(s, {
          scale: 1.1,
          x: (i, f) => v.value ? 0 : f.offsetLeft ? e * 2 : e * -2,
          y: v.value ? e * 2 : 0
        }, {
          x: 0,
          y: 0,
          scale: 1,
          duration: .8
        }).fromTo(s.map(({
          firstChild: i
        }) => i), {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          duration: .8
        }, "<")
      }
      const Le = T("transition-inner-done");
      Z(async () => {
        x.to(".all-projects-page", {
          opacity: 1
        }), E !== null && (await I(), Pe(E)), Le.value && Te()
      }), De(() => {
        j.value = !1, U?.disconnect(), U = null, z.value = !1, he(), w.value = null
      });
      const Te = () => {
        setTimeout(async () => {
          m.value && (v.value || (await se(m.value, 1e3), await I(), await Ie(), re(m.value), await I(), await ne(w.value?.filteredItems || []), await st(), x.to(".projects-all-container", {
            opacity: 1,
            duration: .25
          })), j.value = !0, je(!1), We.value = new Yt(".projects-all"), z.value = !0, Ve(), v.value || await ge())
        }, 100)
      };
      async function Oe(e = !1) {
        if (!v.value) {
          if (e) {
            await tt();
            return
          }
          he(), await I(), await se(m.value, 800), w.value?.layout(), re(m.value), w.value?.filteredItems?.length && (x.to(w.value.filteredItems.map(t => t.element.querySelector(".project__image")), {
            y: 0,
            duration: .4,
            ease: "default-ease"
          }), await ne(w.value.filteredItems))
        }
      }
      const we = () => {
        requestAnimationFrame(() => requestAnimationFrame(() => be.refresh()))
      };
      return le(Le, e => {
        e && Te()
      }), le([ae, C, P, g], async ([e, t, r, s], [i, f, F, ie]) => {
        const c = (s?.length || 0) !== (ie?.length || 0) || s.some((k, Re) => k !== ie?.[Re]),
          A = t !== f || r !== F || c;
        if (A && (H += 1, L.value = !1, V.value = ue), await I(), v.value) {
          A && z.value && (await I(), Ve());
          return
        }
        if (e !== i) {
          await Oe(!1);
          return
        }
        A && (await Oe(!0), z.value && await ge())
      }, {
        deep: !0
      }), (e, t) => {
        const r = gt,
          s = Rt,
          i = Gt,
          f = Zt,
          F = Kt,
          ie = Xt;
        return u(n) ? (y(), b("div", ea, [o("div", ta, [o("header", aa, [$(r, {
          class: "menu-wrapper _black",
          "show-immediate": ""
        })]), t[4] || (t[4] = o("h1", {
          class: "visually-hidden"
        }, "PROJECTS", -1)), o("main", oa, [o("div", na, [o("div", sa, [(y(!0), b(Q, null, W(u(n).categoryItems, (c, A) => (y(), b("div", {
          key: c.id,
          class: "category-box"
        }, [o("h2", {
          class: "category-wrap",
          onClick: k => Pe(A)
        }, [o("button", {
          class: O(["category-btn", {
            active: u(C) === c.id || u(C) === "" && c.id === "all"
          }]),
          onClick: k => Ze(c.id)
        }, [yt(q(c.label.toLowerCase()) + " ", 1), A !== 0 && A !== u(n).categoryItems.length - 1 ? (y(), b("span", la, "/")) : D("", !0)], 10, ia)], 8, ra), A !== 0 ? (y(), b("div", ca, [o("div", ua, [(y(!0), b(Q, null, W(u(n).subcategoryItems, k => (y(), b("button", {
          key: k.id,
          class: O(["p2 subcategory-mob-item", {
            active: u(P) === k.id || k.id === "all" && u(P) === "",
            inactive: xe(k.id) && k.id !== "all"
          }]),
          onClick: Re => ke(k.id)
        }, q(k.label), 11, da))), 128))])])) : D("", !0)]))), 128))]), o("div", va, [$(s, {
          modelValue: u(g),
          "onUpdate:modelValue": t[0] || (t[0] = c => Ee(g) ? g.value = c : null),
          options: u(R),
          title: "Location"
        }, null, 8, ["modelValue", "options"])])]), o("div", fa, [o("div", ma, [o("div", pa, [(y(!0), b(Q, null, W(u(n).subcategoryItems, c => (y(), b("button", {
          key: c.id,
          class: O(["p2 sub-category-btn", {
            active: u(P) === c.id || c.id === "all" && u(P) === "",
            inactive: xe(c.id) && c.id !== "all"
          }]),
          onClick: A => ke(c.id)
        }, q(c.label), 11, ga))), 128))]), o("div", ya, [$(s, {
          modelValue: u(g),
          "onUpdate:modelValue": t[1] || (t[1] = c => Ee(g) ? g.value = c : null),
          options: u(R),
          title: "Location"
        }, null, 8, ["modelValue", "options"])]), o("div", _a, [o("div", {
          class: "switcher"
        }, [t[3] || (t[3] = o("p", {
          class: "switcher-text"
        }, "IMMERSIVE", -1)), o("button", {
          type: "button",
          class: "switcher-link",
          "aria-label": "Toggle immersive view",
          onClick: ot
        }, [...t[2] || (t[2] = [o("span", null, null, -1)])])]), o("div", ha, [(y(), b(Q, null, W(Qe, c => o("button", {
          key: c,
          class: O(["p2 grid-count", {
            active: u(ae) === c
          }]),
          onClick: A => ae.value = c
        }, q(c), 11, wa)), 64))])])])]), o("div", {
          ref_key: "projectsRef",
          ref: m,
          class: "projects projects-all-container"
        }, [(y(!0), b(Q, null, W(u(Ye), (c, A) => (y(), de(i, {
          key: c.id,
          data: c,
          "active-category": u(C),
          priority: A < 2,
          class: O(["project-card", {
            "four-columns": u(ae) === 4,
            project: !u(v)
          }]),
          onClick: k => Ke(k, A + 1)
        }, null, 8, ["data", "active-category", "priority", "class", "onClick"]))), 128))], 512), _t(o("div", {
          ref_key: "sentinelRef",
          ref: pe,
          class: "projects-sentinel",
          "aria-hidden": "true"
        }, null, 512), [
          [ht, u(Y)]
        ])]), o("div", ba, [$(f, {
          "hydrate-on-visible": ""
        }), $(F, {
          "hydrate-on-visible": "",
          class: "footer-wrapper__footer"
        })])]), u(me) ? (y(), b("div", ja, [$(ie, {
          data: u(n).projects,
          onReady: nt
        }, null, 8, ["data"])])) : D("", !0)])) : D("", !0)
      }
    }
  }),
  Sa = X(Ca, [
    ["__scopeId", "data-v-23364dfc"]
  ]),
  Pa = ve(() => fe(() => import("./B3QCgyoj.js"), __vite__mapDeps([11, 2, 3, 12]), import.meta.url).then(a => a.default || a)),
  xa = {
    class: "page"
  },
  Aa = {
    key: 0,
    class: "all-projects-page"
  },
  ka = K({
    __name: "projects",
    setup(a) {
      const {
        projectsData: p
      } = T("commonData").value, n = S(p.pageAll), {
        pageData: d
      } = T("commonData").value;
      n.value && (n.value.meta.title ? Be(n.value.meta) : Be(d.meta));
      const h = Ue();
      At();
      const l = T("hide-all-project-page", () => !!h.params.slug);
      return Z(() => {
        je(!1), h.params.slug || (l.value = !1)
      }), (j, g) => {
        const R = Pa,
          E = bt,
          v = Sa,
          _ = jt;
        return y(), b("div", xa, [$(E, null, {
          default: ze(() => [$(R)]),
          _: 1
        }), u(l) ? D("", !0) : (y(), b("div", Aa, [$(v)])), $(_)])
      }
    }
  }),
  Ta = X(ka, [
    ["__scopeId", "data-v-a04298f1"]
  ]);
export {
  Ta as
  default
};