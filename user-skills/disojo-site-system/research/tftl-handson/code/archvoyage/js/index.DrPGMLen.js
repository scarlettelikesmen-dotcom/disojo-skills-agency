/* https://archvoyage.ae/_nuxt/index.DrPGMLen.js */
import {
  d as _e,
  r as l,
  c as z,
  w as S,
  B as Ce,
  a as _,
  b as k,
  e,
  t as O,
  j as s,
  g as E,
  F as he,
  i as ve,
  y as j,
  v as we,
  p as me,
  l as ge,
  m as ye,
  L as $e,
  u as de,
  n as A,
  o as xe,
  x as ke,
  C as ue,
  h as fe,
  D as ee,
  z as Pe,
  k as Ie,
  _ as Fe,
  f as Se,
  q as be,
  E as Le,
  s as Ae,
  M as Te,
  N as Me,
  O as Ee
} from "./entry.YPAKmh3d.js";
import {
  p as je,
  _ as Be
} from "./Contact.D-xzsxJa.js";
import {
  s as qe,
  _ as De
} from "./setPageMeta.DvPDcq0E.js";
import {
  t as Ve
} from "./titleAnim.CszaPWUV.js";
const He = v => (me("data-v-c47858cd"), v = v(), ge(), v),
  Oe = {
    class: "title p1"
  },
  Re = He(() => e("div", {
    class: "icon"
  }, [e("svg", {
    class: "plus",
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M0 5H9",
    stroke: "#F5F5F5"
  }), e("path", {
    class: "vert-line",
    d: "M4.5 0.5L4.5 9.5",
    stroke: "#F5F5F5"
  })])], -1)),
  Ne = {
    class: "line"
  },
  Ge = ["onClick"],
  Xe = {
    name: "CommonDropdown"
  },
  ze = _e({
    ...Xe,
    props: {
      items: {},
      defaultItemId: {},
      updatedItemId: {},
      firstIdInList: {}
    },
    emits: ["select"],
    setup(v, {
      emit: B
    }) {
      const w = v,
        c = B,
        p = l(),
        x = l(),
        q = l(),
        b = l(),
        m = l(!1),
        f = z(() => {
          const r = Object.keys(w.items);
          if (w.firstIdInList) {
            const $ = r.indexOf(w.firstIdInList);
            r.splice($, 1), r.unshift(w.firstIdInList)
          }
          return r
        }),
        u = z(() => {
          const r = b.value || w.defaultItemId || +f.value[0];
          return {
            id: r,
            name: w.items[r]
          }
        });
      S(b, () => {
        c("select", b.value)
      }), S(m, r => {
        C(), r ? document.addEventListener("click", g) : document.removeEventListener("click", g)
      }), S(() => w.updatedItemId, r => {
        b.value = r
      }), Ce(() => {
        document.removeEventListener("click", g)
      });

      function g(r) {
        r.target !== p.value && !p.value.contains(r.target) && (m.value = !1)
      }

      function C() {
        if (!x.value || !q.value) return;
        const r = q.value.getBoundingClientRect().height;
        m.value ? x.value.style.maxHeight = `${r}px` : x.value.style.maxHeight = "0px"
      }
      return (r, $) => {
        const P = we;
        return _(), k("div", {
          ref_key: "dropdown",
          ref: p,
          class: j(["dropdown", {
            opened: s(m)
          }])
        }, [e("div", {
          class: "header",
          onClick: $[0] || ($[0] = y => m.value = !s(m))
        }, [e("p", Oe, O(s(u).name), 1), Re, e("div", Ne, [E(P)])]), e("div", {
          ref_key: "listWrapper",
          ref: x,
          class: "list-wrapper"
        }, [e("ul", {
          ref_key: "listInner",
          ref: q,
          class: "list"
        }, [(_(!0), k(he, null, ve(s(f), y => (_(), k("li", {
          key: y,
          class: j(["list-item", {
            selected: s(u).id === +y
          }])
        }, [e("button", {
          class: "list-button p1",
          onClick: L => b.value = +y
        }, O(r.items[y]), 9, Ge)], 2))), 128))], 512)], 512)], 2)
      }
    }
  }),
  Ue = ye(ze, [
    ["__scopeId", "data-v-c47858cd"]
  ]),
  pe = v => (me("data-v-09adaab8"), v = v(), ge(), v),
  We = {
    class: "grid-wrapper"
  },
  Ze = {
    class: "photo-wrapper"
  },
  Ye = {
    class: "photo-inner"
  },
  Ke = pe(() => e("p", {
    class: "card-button__text h5"
  }, [Se(" Load more "), e("span", {
    class: "card-button__text-line"
  })], -1)),
  Qe = {
    class: "photo-wrapper"
  },
  Je = {
    class: "photo-inner"
  },
  et = {
    class: "info"
  },
  tt = {
    class: "name p1"
  },
  st = {
    class: "location p1"
  },
  ot = pe(() => e("p", {
    class: "no-projects__title h4"
  }, "sorry, (0) related projects found", -1)),
  nt = pe(() => e("p", {
    class: "no-projects__caption p1"
  }, " Stay tuned, more projects are coming soon ", -1)),
  at = pe(() => e("div", {
    class: "flat-image-cover"
  }, null, -1)),
  it = {
    class: "photo-wrapper"
  },
  lt = {
    class: "photo-inner"
  },
  rt = {
    class: "info"
  },
  ct = {
    class: "name p1"
  },
  ut = {
    class: "location p1"
  },
  dt = {
    name: "ProjectsGrid"
  },
  pt = _e({
    ...dt,
    props: {
      projects: {},
      category: {},
      expertise: {},
      search: {},
      viewType: {}
    },
    emits: ["filtered", "searchAnimationStart", "searchAnimationEnd"],
    setup(v, {
      emit: B
    }) {
      const {
        $ScrollTrigger: w,
        $gsap: c
      } = Pe(), p = v, x = B, q = $e().public.forSaleProjectTypeId, b = de("lenis"), m = de("preloaderDone"), f = l(), u = l(), g = l(), C = l(), r = l(!1), $ = l(-1), P = l(-1);
      let y = [];
      const L = l(!1),
        U = l(0),
        W = l(0),
        D = l("");
      let te;
      const I = z(() => {
          let o = p.projects;
          return $.value !== -1 && (o = o.filter(t => {
            var i;
            return (i = t == null ? void 0 : t.projectTypes) == null ? void 0 : i.includes($.value)
          })), P.value !== -1 && (o = o.filter(t => {
            var i;
            return (i = t == null ? void 0 : t.expertises) == null ? void 0 : i.includes(P.value)
          })), D.value && (o = o.filter(t => {
            var i, h;
            return ((i = t == null ? void 0 : t.title) == null ? void 0 : i.toLowerCase().includes(D.value)) || ((h = t == null ? void 0 : t.location) == null ? void 0 : h.toLowerCase().includes(D.value))
          })), o.sort((t, i) => {
            let h = 0,
              F = 0;
            return t != null && t.sort && (h = parseInt(t.sort)), i != null && i.sort && (F = parseInt(i.sort)), h - F
          })
        }),
        d = z(() => {
          var o;
          return (o = I.value) == null ? void 0 : o.slice(0, 6)
        }),
        a = z(() => {
          var o, t;
          return (t = I.value) == null ? void 0 : t.slice(6, (o = I.value) == null ? void 0 : o.length)
        }),
        V = z(() => {
          var o, t;
          return ((o = I.value) == null ? void 0 : o.length) > ((t = d.value) == null ? void 0 : t.length)
        }),
        N = {
          view: se,
          filter: oe,
          search: ne
        };
      S(m, o => {
        o && setTimeout(() => {
          T(), M()
        }, 300)
      }), S(I, async () => {
        await A(), x("filtered", I.value.length)
      }), S(() => p.viewType, async () => {
        await A(), G("view")
      }), S(() => p.category, async () => {
        await A(), G("filter")
      }), S(() => p.expertise, async () => {
        await A(), G("filter")
      }), S(() => p.search, () => {
        clearTimeout(te), te = setTimeout(() => {
          G("search")
        }, 500)
      }), xe(() => {
        x("filtered", I.value.length), m.value && (T(), M())
      });

      function T() {
        if (!f.value) return;
        const o = p.viewType === 2 ? 3 : 2,
          t = [...f.value.querySelectorAll(".photo-wrapper")].slice(0, o);
        t != null && t.length && t.forEach(i => {
          const h = i.querySelector(".photo-inner");
          h && (h.style.transition = "none", ke(i))
        })
      }

      function M() {
        if (!f.value || !u.value) return;
        const o = f.value.querySelectorAll(".photo-wrapper"),
          t = u.value.querySelectorAll(".photo-wrapper"),
          i = [...o, ...t];
        i != null && i.length && i.forEach(h => {
          const F = h.querySelector(".photo-inner");
          if (F) {
            const n = je(F);
            n && y.push(n)
          }
        })
      }
      async function G(o) {
        f.value && (o === "search" && x("searchAnimationStart"), await c.to(f.value, {
          opacity: 0,
          duration: .4,
          ease: "custom"
        }), Z(), window.innerWidth < 1025 && b.value.scrollTo(0), N[o](), await A(), T(), M(), await c.to(f.value, {
          opacity: 1,
          duration: .4,
          delay: .1,
          clearProps: "all",
          ease: "custom"
        }), o === "search" && x("searchAnimationEnd"), w.refresh())
      }
      async function se() {
        var o;
        if (r.value = p.viewType === 2, await A(), u.value && L.value) {
          const t = (o = u.value.querySelector(".grid")) == null ? void 0 : o.getBoundingClientRect().height;
          u.value.style.maxHeight = `${t}px`
        }
      }

      function oe() {
        $.value !== p.category && ($.value = p.category), P.value !== p.expertise && (P.value = p.expertise), Y()
      }

      function ne() {
        D.value = p.search, Y()
      }

      function Z() {
        y.forEach(o => {
          o == null || o.kill()
        }), y = []
      }

      function ae(o) {
        const t = o.target.querySelector(".card-button__text-line");
        c.to(t, {
          scaleX: 0,
          transformOrigin: "right center",
          duration: .4,
          ease: "custom"
        })
      }

      function ie(o) {
        const t = o.target.querySelector(".card-button__text-line");
        c.to(t, {
          scaleX: 1,
          transformOrigin: "left center",
          clearProps: "all",
          duration: .4,
          ease: "custom"
        })
      }
      async function le() {
        var t;
        if (!u.value) return;
        Z(), L.value = !0;
        const o = (t = u.value.querySelector(".grid")) == null ? void 0 : t.getBoundingClientRect().height;
        u.value.style.maxHeight = `${o}px`, await A(), T(), M()
      }

      function Y() {
        u.value && (L.value = !1, u.value.style.transition = "none", u.value.style.maxHeight = "0px", u.value.removeAttribute("style"))
      }

      function re() {
        document.addEventListener("mousemove", K), X = requestAnimationFrame(Q)
      }

      function ce() {
        document.removeEventListener("mousemove", K), window.cancelAnimationFrame(X)
      }

      function K(o) {
        if (!g.value || !C.value) return;
        const t = g.value.getBoundingClientRect(),
          i = C.value.getBoundingClientRect(),
          h = parseFloat(getComputedStyle(C.value).top);
        U.value = o.clientX - t.left - i.width / 2, W.value = o.clientY - t.top - h - i.height / 2
      }
      let X;

      function Q() {
        C.value && (C.value.style.transform = `translate(${U.value}px, ${W.value}px)`, X = requestAnimationFrame(Q))
      }
      return (o, t) => {
        var F;
        const i = Ie,
          h = Fe;
        return _(), k("div", We, [e("div", {
          ref_key: "gridEl",
          ref: f,
          class: j(["grid", {
            small: s(r)
          }])
        }, [(_(!0), k(he, null, ve(s(d), (n, H) => {
          var J;
          return _(), k("div", {
            key: H,
            class: j(["card", {
              "card--load-more": !s(L) && s(V) && H === s(d).length - 1,
              "shift-to-left": H === 2 && s(d).length < 4
            }])
          }, [!s(L) && s(V) && H === s(d).length - 1 ? (_(), k("button", {
            key: 0,
            class: "card-link",
            onMouseenter: ae,
            onMouseleave: ie,
            onClick: le
          }, [e("div", Ze, [e("div", Ye, [E(i, {
            photo: n.photo
          }, null, 8, ["photo"])])]), Ke], 32)) : (_(), ue(h, {
            key: 1,
            to: `/${(J=n==null?void 0:n.projectTypes)!=null&&J.includes(s(q))?"projects-sale":"projects"}/${n==null?void 0:n.slug}`,
            class: "card-link"
          }, {
            default: fe(() => [e("div", Qe, [e("div", Je, [E(i, {
              photo: n.photo
            }, null, 8, ["photo"])])]), e("div", et, [e("p", tt, O(n.title), 1), e("p", st, O(n.location), 1)])]),
            _: 2
          }, 1032, ["to"]))], 2)
        }), 128)), (F = s(I)) != null && F.length ? ee("", !0) : (_(), k("div", {
          key: 0,
          ref_key: "noProjectsBlock",
          ref: g,
          class: "no-projects",
          onMouseenter: re,
          onMouseleave: ce
        }, [ot, nt, e("div", {
          ref_key: "noProjectsPhoto",
          ref: C,
          class: "no-projects__photo"
        }, [E(i, {
          photo: {
            original: "/img/main/no-projects.jpg"
          },
          "no-lazy-load": ""
        }, null, 8, ["photo"]), at], 512)], 544))], 2), e("div", {
          ref_key: "gridHidden",
          ref: u,
          class: "grid-hidden"
        }, [e("div", {
          class: j(["grid", {
            small: s(r)
          }])
        }, [(_(!0), k(he, null, ve(s(a), (n, H) => {
          var J;
          return _(), k("div", {
            key: H,
            class: j(["card", {
              "shift-to-left": (s(a).length - 3) % 4 === 0 && H === s(a).length - 1
            }])
          }, [E(h, {
            to: `/${(J=n==null?void 0:n.projectTypes)!=null&&J.includes(s(q))?"projects-sale":"projects"}/${n==null?void 0:n.slug}`,
            class: "card-link"
          }, {
            default: fe(() => [e("div", it, [e("div", lt, [E(i, {
              photo: n.photo
            }, null, 8, ["photo"])])]), e("div", rt, [e("p", ct, O(n.title), 1), e("p", ut, O(n.location), 1)])]),
            _: 2
          }, 1032, ["to"])], 2)
        }), 128))], 2)], 512)])
      }
    }
  }),
  ht = ye(pt, [
    ["__scopeId", "data-v-09adaab8"]
  ]),
  R = v => (me("data-v-17445da8"), v = v(), ge(), v),
  vt = {
    class: "header container"
  },
  ft = R(() => e("div", {
    class: "header-gap"
  }, null, -1)),
  _t = R(() => e("h1", {
    class: "title h1"
  }, "Projects", -1)),
  mt = {
    class: "counter p1 italic"
  },
  gt = {
    class: "header-line"
  },
  yt = {
    class: "content container"
  },
  wt = {
    class: "aside-wrapper"
  },
  xt = {
    class: "aside-inner"
  },
  Ct = {
    class: "view-select"
  },
  $t = R(() => e("svg", {
    width: "26",
    height: "16",
    viewBox: "0 0 26 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("rect", {
    width: "26",
    height: "15.8261",
    fill: "#F5F5F5"
  })], -1)),
  kt = [$t],
  Pt = R(() => e("svg", {
    width: "26",
    height: "22",
    viewBox: "0 0 26 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("rect", {
    y: "0.347656",
    width: "12.5517",
    height: "10.211",
    fill: "#F5F5F5"
  }), e("rect", {
    y: "11.6147",
    width: "12.5517",
    height: "10.211",
    fill: "#F5F5F5"
  }), e("rect", {
    x: "13.4492",
    y: "0.347656",
    width: "12.5517",
    height: "10.211",
    fill: "#F5F5F5"
  }), e("rect", {
    x: "13.4492",
    y: "11.6147",
    width: "12.5517",
    height: "10.211",
    fill: "#F5F5F5"
  })], -1)),
  It = [Pt],
  Ft = {
    class: "search-input-wrapper"
  },
  St = R(() => e("svg", {
    class: "search-icon",
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [e("path", {
    d: "M4.47639 1.05383C5.15332 1.05383 5.81504 1.25456 6.37788 1.63064C6.94072 2.00671 7.3794 2.54125 7.63845 3.16664C7.89749 3.79204 7.96527 4.4802 7.83321 5.14412C7.70115 5.80804 7.37518 6.41788 6.89652 6.89654C6.41787 7.3752 5.80802 7.70116 5.14411 7.83322C4.48019 7.96529 3.79202 7.89751 3.16663 7.63846C2.54123 7.37941 2.0067 6.94073 1.63062 6.37789C1.25454 5.81505 1.05381 5.15333 1.05381 4.47641C1.05381 3.56868 1.4144 2.69814 2.05626 2.05628C2.69812 1.41442 3.56867 1.05383 4.47639 1.05383ZM4.47639 0.000724183C3.44339 0.00116947 2.4423 0.358722 1.64275 1.0128C0.843194 1.66688 0.294349 2.57726 0.0892034 3.58969C-0.115942 4.60212 0.0352288 5.65434 0.517102 6.56807C0.998975 7.4818 1.78192 8.20084 2.73327 8.60337C3.82743 9.06568 5.06042 9.07439 6.16101 8.62761C7.26159 8.18082 8.13962 7.31512 8.60192 6.22097C9.06423 5.12681 9.07294 3.89382 8.62616 2.79323C8.17937 1.69264 7.31367 0.814622 6.21952 0.352317C5.66808 0.118838 5.07522 -0.000989679 4.47639 6.15632e-06V0.000724183Z",
    fill: "#f5f5f5"
  }), e("path", {
    d: "M7.99907 7.17329L7.25391 7.91846L11.5086 12.1731L12.2538 11.428L7.99907 7.17329Z",
    fill: "#f5f5f5"
  })], -1)),
  bt = {
    key: 0
  },
  Lt = ["disabled"],
  At = R(() => e("div", {
    class: "mobile-line"
  }, null, -1)),
  Tt = {
    class: "dropdown-wrapper"
  },
  Mt = R(() => e("div", {
    class: "clear-filters-line"
  }, null, -1)),
  Et = {
    name: "ProjectsPage"
  },
  jt = _e({
    ...Et,
    async setup(v) {
      let B, w;
      const {
        data: c
      } = ([B, w] = be(() => Ae("projects-page", () => $fetch("/api/pages/pageProjects"))), B = await B, w(), B);
      qe({
        title: "Projects",
        description: "Our projects",
        keywords: "archvoyage, projects"
      });
      const p = Le(),
        x = de("preloaderDone"),
        q = de("projectsCategory"),
        b = l(),
        m = l(),
        f = l(!1),
        u = l(""),
        g = l(1),
        C = l(-1),
        r = l(-1),
        $ = l(0),
        P = l(),
        y = l(),
        L = l(!1);
      S(x, d => {
        d && W()
      }), S(q, d => {
        if (d) {
          const a = d === "all" ? "projects" : `projects?category=${d}`;
          history.pushState({}, "", a), setTimeout(() => {
            U()
          }, 100)
        }
      }), xe(async () => {
        await A(), x.value && W(), setTimeout(() => {
          U()
        }, 100)
      });

      function U() {
        var V;
        const d = p.query.category;
        if (!d || !((V = c == null ? void 0 : c.value) != null && V.allCategories)) return;
        const a = Object.keys(c.value.allCategories).find(N => {
          var T, M;
          return ((M = (T = c.value) == null ? void 0 : T.allCategories) == null ? void 0 : M[N].replace(/\s/g, "-").toLowerCase()) === d
        });
        P.value = a ? +a : -1
      }

      function W() {
        const d = b.value;
        if (!d) return;
        const a = d.querySelector(".title");
        a && Ve(a)
      }

      function D(d, a) {
        return a[-1] = d, a
      }
      async function te() {
        m.value && (L.value = !1, await A(), m.value.focus())
      }
      async function I() {
        P.value = NaN, y.value = NaN, await A(), u.value = "", C.value = -1, r.value = -1, P.value = -1, y.value = -1
      }
      return (d, a) => {
        const V = we,
          N = Ue,
          T = ht,
          M = Be,
          G = De;
        return _(), k("main", {
          ref_key: "projectsPage",
          ref: b,
          class: "page projects-page"
        }, [E(G, null, {
          default: fe(() => {
            var se, oe, ne, Z, ae, ie, le, Y, re, ce, K, X, Q, o, t, i, h, F;
            return [e("header", vt, [ft, _t, e("p", mt, O(`(${s($)}) Projects`), 1), e("div", gt, [E(V)])]), e("div", yt, [e("aside", wt, [e("div", xt, [e("div", Ct, [e("button", {
              class: j(["view-button view-default", {
                active: s(g) === 1
              }]),
              "aria-label": "select larger projects grid",
              onClick: a[0] || (a[0] = n => g.value = 1)
            }, kt, 2), e("button", {
              class: j(["view-button view-small", {
                active: s(g) === 2
              }]),
              "aria-label": "select smaller projects grid",
              onClick: a[1] || (a[1] = n => g.value = 2)
            }, It, 2)]), e("div", Ft, [e("span", {
              class: j(["placeholder p1", {
                focused: s(u) || s(f)
              }])
            }, [St, !s(f) && !s(u) ? (_(), k("span", bt, "Search Project")) : ee("", !0)], 2), Te(e("input", {
              ref_key: "searchInput",
              ref: m,
              "onUpdate:modelValue": a[2] || (a[2] = n => Ee(u) ? u.value = n : null),
              class: "input p1",
              type: "text",
              "aria-label": "Search",
              disabled: s(L),
              onFocus: a[3] || (a[3] = n => f.value = !0),
              onBlur: a[4] || (a[4] = n => f.value = !1)
            }, null, 40, Lt), [
              [Me, s(u)]
            ]), e("div", {
              class: "clear-filters-mobile"
            }, [e("button", {
              class: "p1 clear-filters",
              "aria-label": "clear filters",
              onClick: I
            }, " Clear filters ")])]), At, (se = s(c)) != null && se.allCategories ? (_(), ue(N, {
              key: 0,
              items: D("All Projects Types", (oe = s(c)) == null ? void 0 : oe.allCategories),
              "default-item-id": -1,
              "updated-item-id": s(P),
              "first-id-in-list": "-1",
              onSelect: a[5] || (a[5] = n => C.value = n)
            }, null, 8, ["items", "updated-item-id"])) : ee("", !0), e("div", Tt, [(ne = s(c)) != null && ne.allExpertises ? (_(), ue(N, {
              key: 0,
              items: D("All Expertises", (Z = s(c)) == null ? void 0 : Z.allExpertises),
              "default-item-id": -1,
              "updated-item-id": s(y),
              "first-id-in-list": "-1",
              onSelect: a[6] || (a[6] = n => r.value = n)
            }, null, 8, ["items", "updated-item-id"])) : ee("", !0)]), e("div", {
              class: "clear-filters-wrapper"
            }, [e("button", {
              class: "p2 clear-filters",
              "aria-label": "clear filters",
              onClick: I
            }, " Clear filters "), Mt])])]), (ae = s(c)) != null && ae.projects ? (_(), ue(T, {
              key: 0,
              projects: (ie = s(c)) == null ? void 0 : ie.projects,
              category: s(C),
              expertise: s(r),
              search: s(u),
              "view-type": s(g),
              onFiltered: a[7] || (a[7] = n => $.value = n),
              onSearchAnimationStart: a[8] || (a[8] = n => L.value = !0),
              onSearchAnimationEnd: te
            }, null, 8, ["projects", "category", "expertise", "search", "view-type"])) : ee("", !0)]), E(M, {
              title: (Y = (le = s(c)) == null ? void 0 : le.contact) == null ? void 0 : Y.title,
              photo: (ce = (re = s(c)) == null ? void 0 : re.contact) == null ? void 0 : ce.photo,
              "description-left-1": (X = (K = s(c)) == null ? void 0 : K.contact) == null ? void 0 : X.description_left_1,
              "description-left-2": (o = (Q = s(c)) == null ? void 0 : Q.contact) == null ? void 0 : o.description_left_2,
              descriptions: (i = (t = s(c)) == null ? void 0 : t.contact) == null ? void 0 : i.descriptions,
              "small-description": (F = (h = s(c)) == null ? void 0 : h.contact) == null ? void 0 : F.small_description
            }, null, 8, ["title", "photo", "description-left-1", "description-left-2", "descriptions", "small-description"])]
          }),
          _: 1
        })], 512)
      }
    }
  }),
  Ht = ye(jt, [
    ["__scopeId", "data-v-17445da8"]
  ]);
export {
  Ht as
  default
};