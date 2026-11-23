/* https://hilight.design/_nuxt/Dotpgq1I.js */
import {
  u as ct,
  A as lt,
  _ as rt
} from "./DX7rj7S8.js";
import {
  d as I,
  u as L,
  a as Y,
  b as H,
  c as p,
  o as l,
  e as t,
  f as _,
  _ as z,
  t as v,
  g as U,
  h as C,
  F as V,
  i as Q,
  w as R,
  j,
  k as a,
  l as x,
  m as k,
  n as A,
  p as D,
  r as T,
  q as _t,
  s as ut,
  v as E,
  x as W,
  y as q,
  z as dt,
  A as F,
  S as mt,
  B as pt,
  C as B,
  D as N,
  E as ht,
  T as vt,
  G as Z,
  H as J,
  I as O,
  J as gt,
  K as ft,
  L as bt,
  M as $t,
  N as yt,
  O as wt,
  P as xt,
  Q as kt,
  R as Ct,
  U as Pt
} from "#entry";
import {
  _ as At
} from "./DWXer2Ri.js";
import {
  _ as Tt
} from "./DwWBZSTG.js";
import {
  _ as It
} from "./B42LVb-8.js";
import {
  _ as St,
  a as Vt,
  v as jt
} from "./DXxv28aS.js";
import {
  _ as Lt
} from "./eOO-uYdg.js";
import {
  _ as G
} from "./hfYGQhmZ.js";
import {
  u as Mt
} from "./BNv4j3uM.js";
import {
  u as Ot,
  _ as qt,
  a as Bt
} from "./C2pv1RTM.js";
import {
  C as Ht,
  _ as Ut
} from "./C6yeEfUZ.js";
import {
  _ as zt
} from "./CgegnB1j.js";
import {
  _ as Rt
} from "./D-TN8p00.js";
import {
  u as Dt
} from "./4MnaQWY0.js";
import "./Fjg1XfjS.js";
import "./V1AwDJuM.js";
import "./lKvBwyz6.js";
import "./BzLCLO6P.js";
const Et = {
    class: "hero"
  },
  Ft = {
    class: "sticky"
  },
  Nt = {
    class: "body"
  },
  Gt = {
    class: "descr h3-light"
  },
  Yt = {
    class: "foot"
  },
  Qt = {
    class: "scroll l2"
  },
  Wt = {
    class: "video-wrap"
  },
  Zt = I({
    __name: "Hero",
    props: {
      data: {}
    },
    setup(s) {
      const c = s,
        {
          isDesktop: r
        } = L(),
        g = {
          original: "/videos/about-optimized_v2.mp4",
          thumbnail: "/videos/about-optimized_v2.mp4",
          small: "/videos/about-optimized_v2.mp4",
          medium: "/videos/about-optimized_v2.mp4",
          large: "/videos/about-optimized_v2.mp4",
          extra: "/videos/about-optimized_v2.mp4",
          alt: ""
        },
        f = x(() => c.data.video_mobile?.original ? c.data.video_mobile : g);
      ct(async i => {
        const o = document.querySelector(".about-page section.hero");
        if (!o) return;
        const m = o.querySelectorAll(".body .descr, .foot .scroll"),
          u = o.querySelector(".common-line"),
          n = await Y(m);
        i.add(n.in.play()), i.from(u, {
          scaleY: 0,
          duration: .8
        }, "<")
      }), H(() => {
        d()
      });
      const d = () => {
        const i = document.querySelector("section.hero");
        if (!i) return;
        const o = i.querySelector(".video-wrap");
        k.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: i,
            start: "bottom bottom",
            end: "bottom top",
            scrub: !0
          }
        }).to(o, {
          yPercent: 20
        })
      };
      return (i, o) => {
        const m = z,
          u = At,
          n = Tt,
          h = It,
          b = Q;
        return l(), p("section", Et, [t("div", Ft, [_(m, {
          class: "top-gradient",
          top: ""
        }), _(m, {
          class: "bot-gradient"
        }), t("div", Nt, [t("h1", Gt, v(s.data.title), 1)]), t("div", Yt, [_(u, {
          section: "section.hero"
        }), t("p", Qt, [U(v(i.$t("scroll")) + " ", 1), i.$t("to_explore") ? (l(), p(V, {
          key: 0
        }, [o[0] || (o[0] = t("br", null, null, -1)), U(" " + v(i.$t("to_explore")), 1)], 64)) : C("", !0)])]), t("div", Wt, [_(b, null, {
          default: R(() => [a(r) ? (l(), j(n, {
            key: 0,
            "sequence-path": "/sequences/about_v2",
            section: "section.hero"
          })) : (l(), j(h, {
            key: 1,
            inner: "",
            immediate: "",
            video: a(f)
          }, null, 8, ["video"]))]),
          _: 1
        })])])])
      }
    }
  }),
  Jt = Object.assign(A(Zt, [
    ["__scopeId", "data-v-2b67481f"]
  ]), {
    __name: "PageAboutHero"
  }),
  Kt = {
    class: "photo"
  },
  Xt = {
    class: "person-name"
  },
  te = {
    class: "name h3-light"
  },
  ee = {
    key: 0,
    class: "name-given"
  },
  oe = {
    class: "name-family"
  },
  se = {
    key: 0,
    class: "position p2"
  },
  ne = I({
    __name: "card",
    props: {
      photo: {},
      photo2: {},
      name: {},
      position: {},
      showPosition: {
        type: Boolean
      }
    },
    setup(s) {
      const c = s,
        r = x(() => c.name.trim().split(/\s+/).filter(Boolean)),
        g = x(() => r.value.length > 1 ? r.value.slice(0, -1).join(" ") : ""),
        f = x(() => r.value.length > 1 ? r.value[r.value.length - 1] : c.name.trim()),
        d = T(null);
      let i = null,
        o = null;
      const {
        isMobile: m
      } = L(), u = T(!1);
      D(async () => {
        if (!d.value) return;
        const w = d.value.querySelector(".position");
        k.fromTo(d.value, {
          scale: 0,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "Out"
        }), i = await _t(d.value, {
          hyphenate: !1
        }), w && (o = await Y(w))
      }), ut(() => {
        i?.in.kill(), i = null, o?.in.kill(), o = null
      });
      const n = () => {
          u.value = !0, i?.in.timeScale(1.2).play(), o?.in.timeScale(1.2).play()
        },
        h = () => {
          u.value = !1, i?.in.timeScale(1.4).reverse(), o?.in.timeScale(1.4).reverse()
        },
        b = () => {
          m.value || n()
        },
        e = () => {
          m.value || h()
        },
        y = () => {
          m.value && (u.value ? h() : n())
        };
      return (w, S) => {
        const $ = G,
          P = z;
        return l(), p("div", {
          ref_key: "root",
          ref: d,
          class: E(["item item-person", {
            "is-hovered": a(u)
          }]),
          onMouseenter: b,
          onMouseleave: e,
          onClick: y
        }, [t("div", Kt, [_($, {
          class: "photo-1",
          media: s.photo.original ? s.photo : s.photo2,
          alt: s.name,
          inner: ""
        }, null, 8, ["media", "alt"]), _($, {
          class: "photo-2",
          media: s.photo2.original ? s.photo2 : s.photo,
          alt: s.name,
          inner: ""
        }, null, 8, ["media", "alt"])]), _(P, {
          class: "person-gradient"
        }), t("div", Xt, [t("p", te, [a(g) ? (l(), p("span", ee, v(a(g)), 1)) : C("", !0), t("span", oe, v(a(f)), 1)]), s.showPosition ? (l(), p("p", se, v(s.position), 1)) : C("", !0)])], 34)
      }
    }
  }),
  ae = Object.assign(A(ne, [
    ["__scopeId", "data-v-7a6f5953"]
  ]), {
    __name: "PageAboutTeamCard"
  }),
  ie = {
    class: "team"
  },
  ce = {
    class: "title-wrap"
  },
  le = {
    class: "main-title h2-light",
    "data-title-anim": ""
  },
  re = {
    class: "grid"
  },
  _e = {
    class: "item item-total"
  },
  ue = {
    class: "total-wrap"
  },
  de = {
    class: "total-number a1"
  },
  me = {
    class: "h2-light"
  },
  pe = {
    key: 0,
    class: "view-all"
  },
  he = I({
    __name: "index",
    props: {
      data: {}
    },
    setup(s) {
      const c = s,
        {
          isDesktop: r
        } = L(),
        g = T(!1),
        f = x(() => c.data.items.reduce((h, b) => h + b.items.length, 0)),
        d = x(() => r.value ? 5 : 2),
        i = x(() => r.value ? 1 : 3),
        o = x(() => d.value - 1),
        m = x(() => d.value * i.value),
        u = x(() => {
          if (g.value) return 0;
          let h = 0;
          for (const b of n.value) h += b.items.length;
          return f.value - h
        }),
        n = x(() => {
          if (g.value) return c.data.items;
          if (r.value) return c.data.items.slice(0, 2).map(e => ({
            ...e,
            items: e.items.slice(0, o.value)
          }));
          let h = m.value;
          const b = [];
          for (const e of c.data.items) {
            const y = e.position?.trim() ? 1 : 0;
            if (h <= y) break;
            const w = Math.min(e.items.length, h - y);
            if (w < 1) break;
            b.push({
              ...e,
              items: e.items.slice(0, w)
            }), h -= y + w
          }
          return b
        });
      return W(() => g.value, async h => {
        h && (await F(), mt.refresh())
      }), (h, b) => {
        const e = ae,
          y = dt;
        return l(), p("section", ie, [t("div", ce, [t("h2", le, v(s.data.title), 1)]), t("div", re, [t("div", _e, [t("div", ue, [t("p", de, v(a(f)), 1), b[1] || (b[1] = t("span", {
          class: "total-plus"
        }, "+", -1))])]), (l(!0), p(V, null, q(a(n), ({
          position: w,
          items: S
        }, $) => (l(), p(V, {
          key: $
        }, [w ? (l(), p("div", {
          key: 0,
          class: E(["item item-position", {
            "is-first": $ === 0
          }])
        }, [t("h3", me, v(w), 1)], 2)) : C("", !0), (l(!0), p(V, null, q(S, (P, M) => (l(), j(e, {
          key: `${$}-${M}`,
          photo: P.photo,
          photo2: P.photo2,
          name: P.name,
          position: P.position ?? null,
          "show-position": $ === 0
        }, null, 8, ["photo", "photo2", "name", "position", "show-position"]))), 128))], 64))), 128))]), !a(g) && a(u) > 0 ? (l(), p("div", pe, [t("button", {
          type: "button",
          class: "view-all-btn",
          onClick: b[0] || (b[0] = w => g.value = !0)
        }, [_(y, {
          border: "",
          text: h.$t("view_all")
        }, null, 8, ["text"])])])) : C("", !0)])
      }
    }
  }),
  ve = Object.assign(A(he, [
    ["__scopeId", "data-v-8fdce922"]
  ]), {
    __name: "PageAboutTeam"
  }),
  ge = {
    class: "big-text"
  },
  fe = {
    class: "text h2-light",
    "data-text-anim": ""
  },
  be = I({
    __name: "BigText",
    props: {
      data: {}
    },
    setup(s) {
      return (c, r) => (l(), p("section", ge, [t("p", fe, v(s.data.text), 1)]))
    }
  }),
  $e = Object.assign(A(be, [
    ["__scopeId", "data-v-e4746dce"]
  ]), {
    __name: "PageAboutBigText"
  }),
  ye = {},
  we = {
    class: "icon",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function xe(s, c) {
  return l(), p("svg", we, [...c[0] || (c[0] = [t("circle", {
    class: "ring ring-1",
    cx: "24",
    cy: "24",
    r: "15.625",
    stroke: "white",
    "stroke-width": "0.75"
  }, null, -1), t("circle", {
    class: "ring ring-2",
    cx: "24",
    cy: "24",
    r: "19.625",
    stroke: "white",
    "stroke-width": "0.75"
  }, null, -1), t("circle", {
    class: "ring ring-3",
    cx: "24",
    cy: "24",
    r: "23.625",
    stroke: "white",
    "stroke-width": "0.75"
  }, null, -1), t("circle", {
    class: "small-circle",
    cx: "24",
    cy: "24",
    r: "3",
    fill: "white"
  }, null, -1)])])
}
const ke = Object.assign(A(ye, [
    ["render", xe],
    ["__scopeId", "data-v-e1307721"]
  ]), {
    __name: "IconValueCircle"
  }),
  Ce = {},
  Pe = {
    class: "icon",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Ae(s, c) {
  return l(), p("svg", Pe, [...c[0] || (c[0] = [t("path", {
    d: "M7.33333 7.33333V3.33333H8.66667V7.33333H12.6667V8.66667H8.66667V12.6667H7.33333V8.66667H3.33333V7.33333H7.33333Z",
    fill: "white"
  }, null, -1)])])
}
const Te = Object.assign(A(Ce, [
    ["render", Ae]
  ]), {
    __name: "IconPlusLight"
  }),
  Ie = {
    class: "container"
  },
  Se = {
    class: "head"
  },
  Ve = {
    class: "popup-title l2"
  },
  je = {
    class: "popup-descr p2"
  },
  Le = I({
    __name: "ValuesPopup",
    setup(s, {
      expose: c
    }) {
      const r = T(null),
        g = T({
          title: "",
          descr: ""
        }),
        f = T(!1),
        d = T(!1),
        i = () => {
          const u = r.value;
          return {
            background: u?.querySelector(".background"),
            container: u?.querySelector(".container")
          }
        };
      D(() => {
        const {
          background: u,
          container: n
        } = i();
        !u || !n || (k.set(u, {
          opacity: 0
        }), k.set(n, {
          y: "100%"
        }))
      });
      const o = async u => {
        if (f.value || d.value) return;
        g.value = u, f.value = !0, B(!0), await F();
        const {
          background: n,
          container: h
        } = i();
        !n || !h || (k.killTweensOf([n, h]), k.to(n, {
          opacity: 1,
          duration: .4
        }), k.to(h, {
          y: 0,
          duration: .6
        }))
      }, m = () => {
        if (!f.value || d.value) return;
        d.value = !0;
        const {
          background: u,
          container: n
        } = i();
        if (!u || !n) {
          f.value = !1, d.value = !1, B(!1);
          return
        }
        k.killTweensOf([u, n]), k.to(u, {
          opacity: 0,
          duration: .4
        }), k.to(n, {
          y: "100%",
          duration: .6,
          onComplete() {
            f.value = !1, d.value = !1, B(!1)
          }
        })
      };
      return pt(() => {
        f.value && B(!1)
      }), Mt(m), c({
        open: o,
        close: m
      }), (u, n) => {
        const h = N;
        return l(), p("div", {
          ref_key: "popupRef",
          ref: r,
          class: E(["popup", {
            "is-open": a(f)
          }])
        }, [t("div", {
          class: "background",
          onClick: m
        }), t("div", Ie, [t("div", Se, [t("p", Ve, v(a(g).title), 1), t("button", {
          type: "button",
          onClick: m
        }, [_(h, {
          text: u.$t("close")
        }, null, 8, ["text"])])]), t("p", je, v(a(g).descr), 1)])], 2)
      }
    }
  }),
  Me = Object.assign(A(Le, [
    ["__scopeId", "data-v-5a798645"]
  ]), {
    __name: "PageAboutValuesPopup"
  }),
  Oe = {
    class: "values"
  },
  qe = {
    class: "values-container"
  },
  Be = {
    class: "values-wrap"
  },
  He = {
    class: "values-box"
  },
  Ue = {
    class: "values-photo"
  },
  ze = {
    class: "items"
  },
  Re = ["onClick"],
  De = {
    class: "item-circle"
  },
  Ee = {
    class: "item-title-wrap"
  },
  Fe = {
    class: "item-plus item-plus-start"
  },
  Ne = {
    class: "item-title l2"
  },
  Ge = {
    class: "item-plus item-plus-end"
  },
  Ye = {
    key: 0,
    class: "item-content"
  },
  Qe = {
    class: "item-descr p2"
  },
  We = {
    class: "title h3-light"
  },
  Ze = {
    key: 0,
    class: "title-1",
    "data-text-anim": ""
  },
  Je = {
    key: 1,
    class: "title-2",
    "data-text-anim": ""
  },
  Ke = {
    class: "text-tip"
  },
  Xe = I({
    __name: "Values",
    props: {
      data: {}
    },
    setup(s) {
      const c = s,
        {
          isMobile: r
        } = L(),
        g = T(null),
        f = i => {
          if (!r.value) return;
          const o = c.data.items[i];
          o !== void 0 && g.value?.open({
            title: o.title,
            descr: o.descr
          })
        };
      H(async () => {
        await new Promise(i => setTimeout(i, 2e3)), d()
      });
      const d = () => {
        const i = document.querySelector("section.values");
        if (!i) return;
        const o = r.value ? i.querySelector(".values-photo .common-picture") : i.querySelector(".values-photo");
        if (!o) return;
        k.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: i,
            start: "top bottom",
            end: "bottom top",
            scrub: !0
          }
        }).fromTo(o, {
          yPercent: -10
        }, {
          yPercent: r.value ? 5 : 10
        })
      };
      return (i, o) => {
        const m = G,
          u = z,
          n = ke,
          h = Te,
          b = Q,
          e = ht,
          y = Me;
        return l(), p("section", Oe, [t("div", qe, [t("div", Be, [t("div", He, [t("div", Ue, [_(m, {
          media: s.data.bg
        }, null, 8, ["media"])]), _(u, {
          class: "value-gradient",
          top: ""
        }), t("div", ze, [(l(!0), p(V, null, q(s.data.items, ({
          title: w,
          descr: S
        }, $) => (l(), p("div", {
          key: $,
          class: "item-col"
        }, [t("div", {
          class: "item",
          "data-element-anim": "",
          onClick: P => f($)
        }, [t("div", De, [_(n)]), o[1] || (o[1] = t("div", {
          class: "item-line"
        }, null, -1)), t("div", Ee, [t("span", Fe, [_(h)]), t("p", Ne, v(w), 1), t("span", Ge, [_(h)]), o[0] || (o[0] = t("svg", {
          class: "item-arrow",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [t("path", {
          d: "M7.99944 8.77935L11.2993 5.47949L12.2421 6.42231L7.99943 10.6649L3.75684 6.42231L4.69964 5.47949L7.99944 8.77935Z",
          fill: "white"
        })], -1))]), _(b, null, {
          default: R(() => [a(r) ? C("", !0) : (l(), p("div", Ye, [t("p", Qe, v(S), 1)]))]),
          _: 2
        }, 1024)], 8, Re)]))), 128))])]), t("h2", We, [s.data.title1 ? (l(), p("div", Ze, v(s.data.title1), 1)) : C("", !0), s.data.title2 ? (l(), p("div", Je, v(s.data.title2), 1)) : C("", !0)])])]), t("div", Ke, [_(e, {
          class: "left-arrow"
        }), o[2] || (o[2] = t("p", {
          class: "l2"
        }, "drag to explore", -1)), _(e, {
          class: "right-arrow"
        })]), a(r) ? (l(), j(vt, {
          key: 0,
          to: "body"
        }, [_(y, {
          ref_key: "popupRef",
          ref: g
        }, null, 512)])) : C("", !0)])
      }
    }
  }),
  to = Object.assign(A(Xe, [
    ["__scopeId", "data-v-f7f038a4"]
  ]), {
    __name: "PageAboutValues"
  }),
  eo = {
    class: "items"
  },
  oo = {
    class: "info"
  },
  so = {
    class: "info-title p2",
    "data-text-anim": ""
  },
  no = {
    class: "info-descr p2",
    "data-text-anim": ""
  },
  ao = {
    class: "number"
  },
  io = {
    class: "number-text",
    "data-title-anim": ""
  },
  co = {
    key: 0,
    class: "number-unit",
    "data-title-anim": ""
  },
  lo = I({
    __name: "Factoids",
    props: {
      data: {}
    },
    setup(s) {
      const {
        isDesktop: c
      } = L();
      H(() => {
        c.value && g()
      });
      const r = T(),
        g = async () => {
          const f = r.value,
            d = r.value.querySelectorAll(".item");
          k.timeline({
            defaults: {
              ease: "none"
            },
            scrollTrigger: {
              trigger: f,
              start: "top bottom",
              end: "bottom top",
              scrub: !0
            }
          }).from(d, {
            y: o => o ? o * 5 + "rem" : "0"
          })
        };
      return (f, d) => (l(), p("section", {
        ref_key: "sectionRef",
        ref: r,
        class: "factoids"
      }, [t("div", eo, [(l(!0), p(V, null, q(s.data.items, ({
        number: i,
        title: o,
        descr: m
      }, u) => (l(), p("div", {
        key: u,
        class: "item"
      }, [t("div", oo, [t("p", so, v(o), 1), t("p", no, v(m), 1)]), t("div", ao, [d[1] || (d[1] = t("div", {
        class: "number-plus",
        "data-title-anim": ""
      }, "+", -1)), t("div", io, v(i), 1), u < 2 ? (l(), p("div", co, [...d[0] || (d[0] = [U(" m", -1), t("sup", null, "2", -1)])])) : C("", !0)])]))), 128))])], 512))
    }
  }),
  ro = Object.assign(A(lo, [
    ["__scopeId", "data-v-93946dd9"]
  ]), {
    __name: "PageAboutFactoids"
  }),
  _o = {
    class: "instagram"
  },
  uo = {
    class: "head"
  },
  mo = {
    class: "title h2-light",
    "data-text-anim": ""
  },
  po = {
    class: "inst"
  },
  ho = {
    class: "inst-title l2",
    "data-text-anim": ""
  },
  vo = ["href"],
  go = {
    class: "code-wrap",
    "data-element-anim": ""
  },
  fo = {
    class: "descr p2",
    "data-text-anim": ""
  },
  bo = I({
    __name: "Instagram",
    props: {
      data: {}
    },
    async setup(s) {
      let c, r;
      const {
        data: g
      } = Z("common"), {
        data: f
      } = ([c, r] = J(() => Ot("/api/instagram", "$fgl_aYOnGH")), c = await c, r(), c);
      return (d, i) => {
        const o = N,
          m = qt,
          u = Bt;
        return l(), p("section", _o, [t("div", uo, [t("h2", mo, v(s.data.text), 1), t("div", po, [t("p", ho, v(d.$t("more_in_our_instagram")), 1), t("a", {
          class: "inst-link",
          href: a(g)?.instagramLink,
          target: "_blank",
          rel: "noopener noreferrer",
          "data-text-anim": ""
        }, [_(o, {
          text: "@hilight.design"
        })], 8, vo)]), t("div", go, [_(m)])]), _(u, {
          data: a(f) || []
        }, null, 8, ["data"]), t("p", fo, v(s.data.descr), 1)])
      }
    }
  }),
  $o = Object.assign(A(bo, [
    ["__scopeId", "data-v-5396dd4f"]
  ]), {
    __name: "PageAboutInstagram"
  }),
  yo = {
    class: "awards"
  },
  wo = {
    class: "bg-mob"
  },
  xo = ["src"],
  ko = {
    class: "bg-wrap"
  },
  Co = ["srcset"],
  Po = ["srcset"],
  Ao = ["src"],
  To = ["src"],
  Io = {
    class: "content"
  },
  So = {
    class: "head"
  },
  Vo = {
    class: "title a1",
    "data-title-anim": ""
  },
  jo = {
    class: "year a1",
    "data-title-anim": ""
  },
  Lo = {
    class: "body"
  },
  Mo = {
    class: "body-head"
  },
  Oo = {
    class: "l2",
    "data-text-anim": ""
  },
  qo = {
    class: "l2",
    "data-text-anim": ""
  },
  Bo = {
    class: "body-head-year l2",
    "data-text-anim": ""
  },
  Ho = {
    class: "item-name l2",
    "data-text-anim": ""
  },
  Uo = {
    class: "item-project l2",
    "data-text-anim": ""
  },
  zo = {
    class: "item-year l2",
    "data-text-anim": ""
  },
  Ro = {
    class: "item-photo"
  },
  Do = ["onMouseenter"],
  Eo = I({
    __name: "Awards",
    props: {
      data: {}
    },
    setup(s) {
      const c = s,
        r = T(!1),
        g = bt,
        f = x(() => r.value ? c.data.items : c.data.items.slice(0, 12)),
        d = e => !!e?.trim(),
        i = e => d(e.innerProject) ? e.innerProject.trim() : e.project.name || " ",
        o = e => !d(e.innerProject) && !!e.project.slug,
        m = T(null),
        u = () => {
          m.value?.onLeave()
        },
        n = e => {
          m.value?.onMove(e)
        },
        h = (e, y) => {
          m.value?.onEnter(y), m.value?.setActive(e)
        },
        b = x(() => c.data.items.map(e => e.project.photo));
      return (e, y) => {
        const w = G,
          S = N;
        return l(), p("section", yo, [t("div", wo, [t("img", {
          draggable: "false",
          src: ("publicUrl" in e ? e.publicUrl : a(O))("/images/award-mob-bg.png"),
          alt: "",
          width: "440",
          height: "830",
          decoding: "async",
          loading: "lazy"
        }, null, 8, xo)]), t("div", ko, [t("picture", null, [t("source", {
          srcset: ("publicUrl" in e ? e.publicUrl : a(O))("/images/bg4.avif"),
          type: "image/avif"
        }, null, 8, Co), t("source", {
          srcset: ("publicUrl" in e ? e.publicUrl : a(O))("/images/bg4.webp"),
          type: "image/webp"
        }, null, 8, Po), t("img", {
          class: "bg",
          draggable: "false",
          src: ("publicUrl" in e ? e.publicUrl : a(O))("/images/bg4.webp"),
          alt: "",
          width: "2619",
          height: "1479",
          decoding: "async"
        }, null, 8, Ao)]), t("img", {
          class: "lines",
          draggable: "false",
          src: ("publicUrl" in e ? e.publicUrl : a(O))("/images/lines.png"),
          alt: "",
          width: "2160",
          height: "1296",
          decoding: "async",
          loading: "lazy"
        }, null, 8, To)]), t("div", Io, [t("div", So, [t("h2", Vo, v(e.$t("awards")), 1), t("p", jo, v(s.data.year), 1)]), t("div", Lo, [t("div", Mo, [t("p", Oo, v(e.$t("award")), 1), t("p", qo, v(e.$t("project")), 1), t("p", Bo, v(e.$t("year")), 1)]), t("div", {
          class: "items",
          onMousemove: n
        }, [(l(!0), p(V, null, q(a(f), ($, P) => (l(), j(ft(o($) ? a(g) : "div"), gt({
          key: P,
          class: "item"
        }, {
          ref_for: !0
        }, o($) ? {
          to: `/projects/${$.project.slug}`
        } : {}), {
          default: R(() => [t("span", Ho, v($.name), 1), t("span", Uo, v(i($)), 1), t("span", zo, v($.year), 1), t("div", Ro, [_(w, {
            media: $.photo,
            alt: $.name
          }, null, 8, ["media", "alt"])]), t("div", {
            class: "item-area",
            onMouseenter: M => h(P, M),
            onMouseleave: u
          }, null, 40, Do)]),
          _: 2
        }, 1040))), 128)), _(Ht, {
          ref_key: "fixedMediaRef",
          ref: m,
          "media-list": a(b)
        }, null, 8, ["media-list"])], 32), s.data.items.length > 12 && !a(r) ? (l(), p("button", {
          key: 0,
          class: "load-more",
          onClick: y[0] || (y[0] = $ => r.value = !0)
        }, [_(S, {
          white: "",
          text: e.$t("load_more")
        }, null, 8, ["text"])])) : C("", !0)])])])
      }
    }
  }),
  Fo = Object.assign(A(Eo, [
    ["__scopeId", "data-v-56b1076a"]
  ]), {
    __name: "PageAboutAwards"
  }),
  No = {},
  Go = {
    class: "cta-about"
  };

function Yo(s, c) {
  const r = zt;
  return l(), p("section", Go, [_(r)])
}
const Qo = Object.assign(A(No, [
    ["render", Yo],
    ["__scopeId", "data-v-5a9e8190"]
  ]), {
    __name: "PageAboutCta"
  }),
  Wo = {
    key: 0,
    class: "about-page"
  },
  ps = I({
    __name: "about",
    async setup(s) {
      let c, r;
      const {
        locale: g
      } = $t(), f = yt(), {
        initUnicorn: d
      } = wt(), {
        isDesktop: i
      } = L(), {
        data: o
      } = Z("common"), m = xt("video-popup-open", () => !1), u = x(() => jt(o.value?.showreel || "")), {
        data: n
      } = ([c, r] = J(() => kt(() => `about:${g.value}`, () => $fetch("/api/strapi/about", {
        query: {
          locale: g.value
        }
      }), {
        server: !0,
        lazy: !1,
        watch: [g]
      })), c = await c, r(), c);
      if (!n.value) throw Ct({
        statusCode: 404,
        statusMessage: "About not found"
      });
      Pt(n.value.meta), Dt();
      const h = x(() => i.value ? n.value?.video.video?.original || "" : n.value?.video.videoMobile?.original || n.value?.video.video?.original || ""),
        b = e => {
          const y = e ? document.querySelector(e) : null;
          k.to(window, {
            scrollTo: y ? {
              y,
              offsetY: 0
            } : 0,
            duration: 1.5
          })
        };
      return H(async () => {
        f.hash && (await F(), b(f.hash))
      }), W(() => f.hash, e => b(e)), D(async () => {
        setTimeout(() => {
          new lt
        }, 250), await d()
      }), (e, y) => {
        const w = rt,
          S = Jt,
          $ = St,
          P = Lt,
          M = ve,
          K = $e,
          X = to,
          tt = ro,
          et = $o,
          ot = Fo,
          st = Qo,
          nt = Vt,
          at = Rt,
          it = Ut;
        return a(n) ? (l(), p("main", Wo, [_(w), _(S, {
          data: a(n).hero,
          "data-header-white": ""
        }, null, 8, ["data"]), _($, {
          id: "aboutInfo",
          data: a(n).info
        }, null, 8, ["data"]), _(P, {
          data: a(n).video,
          "data-header-white": ""
        }, null, 8, ["data"]), _(M, {
          id: "aboutTeam",
          data: a(n).team
        }, null, 8, ["data"]), _(K, {
          data: a(n).bigText
        }, null, 8, ["data"]), _(X, {
          id: "aboutValues",
          data: a(n).values,
          "data-header-white": ""
        }, null, 8, ["data"]), _(tt, {
          data: a(n).factoids
        }, null, 8, ["data"]), _(et, {
          data: a(n).instagram
        }, null, 8, ["data"]), _(ot, {
          data: a(n).awards,
          "data-header-white": ""
        }, null, 8, ["data"]), _(st, {
          "data-header-white": ""
        }), a(m) && a(u) ? (l(), j(nt, {
          key: 0,
          src: a(u)
        }, null, 8, ["src"])) : a(m) ? (l(), j(at, {
          key: 1,
          data: a(h)
        }, null, 8, ["data"])) : C("", !0), _(it)])) : C("", !0)
      }
    }
  });
export {
  ps as
  default
};