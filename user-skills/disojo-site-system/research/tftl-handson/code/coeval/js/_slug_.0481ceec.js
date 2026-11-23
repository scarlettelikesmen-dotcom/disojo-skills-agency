/* https://coevalstudio.com/_nuxt/_slug_.0481ceec.js */
import {
  _ as Q,
  g as k,
  aa as J,
  o as _,
  c as u,
  T as p,
  a as f,
  l as B,
  t as T,
  E as Z,
  u as m,
  b as tt,
  I as Jt,
  J as rt,
  z as Gt,
  A as Vt,
  F as ot,
  r as it,
  L as Qt,
  f as Zt,
  i as te,
  k as Xt,
  G as ee,
  M as et,
  S as ne,
  h as se,
  e as oe,
  B as ie,
  w as re,
  W as ae,
  N as E,
  C as ce,
  R as nt,
  ab as le,
  d as _e,
  H as st,
  $ as ue,
  a0 as de,
  ac as Nt,
  q as fe,
  j as Et,
  Y as pe
} from "./entry.7e3c7585.js";
import {
  _ as ge
} from "./CommonButton.058c734e.js";
import {
  _ as me
} from "./Banner.24261c76.js";
/*!
 * ScrollToPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var v, Rt, I, C, O, Kt, zt, H, Dt = function() {
    return typeof window < "u"
  },
  qt = function() {
    return v || Dt() && (v = window.gsap) && v.registerPlugin && v
  },
  Wt = function(e) {
    return typeof e == "string"
  },
  Ot = function(e) {
    return typeof e == "function"
  },
  K = function(e, t) {
    var c = t === "x" ? "Width" : "Height",
      l = "scroll" + c,
      o = "client" + c;
    return e === I || e === C || e === O ? Math.max(C[l], O[l]) - (I["inner" + c] || C[o] || O[o]) : e[l] - e["offset" + c]
  },
  z = function(e, t) {
    var c = "scroll" + (t === "x" ? "Left" : "Top");
    return e === I && (e.pageXOffset != null ? c = "page" + t.toUpperCase() + "Offset" : e = C[c] != null ? C : O),
      function() {
        return e[c]
      }
  },
  ye = function(e, t, c, l) {
    if (Ot(e) && (e = e(t, c, l)), typeof e != "object") return Wt(e) && e !== "max" && e.charAt(1) !== "=" ? {
      x: e,
      y: e
    } : {
      y: e
    };
    if (e.nodeType) return {
      y: e,
      x: e
    };
    var o = {},
      r;
    for (r in e) o[r] = r !== "onAutoKill" && Ot(e[r]) ? e[r](t, c, l) : e[r];
    return o
  },
  Ut = function(e, t) {
    if (e = Kt(e)[0], !e || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
    var c = e.getBoundingClientRect(),
      l = !t || t === I || t === O,
      o = l ? {
        top: C.clientTop - (I.pageYOffset || C.scrollTop || O.scrollTop || 0),
        left: C.clientLeft - (I.pageXOffset || C.scrollLeft || O.scrollLeft || 0)
      } : t.getBoundingClientRect(),
      r = {
        x: c.left - o.left,
        y: c.top - o.top
      };
    return !l && t && (r.x += z(t, "x")(), r.y += z(t, "y")()), r
  },
  Yt = function(e, t, c, l, o) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - o : Wt(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + l - o : e === "max" ? K(t, c) - o : Math.min(K(t, c), Ut(e, t)[c] - o)
  },
  Mt = function() {
    v = qt(), Dt() && v && typeof document < "u" && document.body && (I = window, O = document.body, C = document.documentElement, Kt = v.utils.toArray, v.config({
      autoKillThreshold: 7
    }), zt = v.config(), Rt = 1)
  },
  D = {
    version: "3.11.5",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
      v = e, Mt()
    },
    init: function(e, t, c, l, o) {
      Rt || Mt();
      var r = this,
        y = v.getProperty(e, "scrollSnapType");
      r.isWin = e === I, r.target = e, r.tween = c, t = ye(t, l, e, o), r.vars = t, r.autoKill = !!t.autoKill, r.getX = z(e, "x"), r.getY = z(e, "y"), r.x = r.xPrev = r.getX(), r.y = r.yPrev = r.getY(), H || (H = v.core.globals().ScrollTrigger), v.getProperty(e, "scrollBehavior") === "smooth" && v.set(e, {
        scrollBehavior: "auto"
      }), y && y !== "none" && (r.snap = 1, r.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), t.x != null ? (r.add(r, "x", r.x, Yt(t.x, e, "x", r.x, t.offsetX || 0), l, o), r._props.push("scrollTo_x")) : r.skipX = 1, t.y != null ? (r.add(r, "y", r.y, Yt(t.y, e, "y", r.y, t.offsetY || 0), l, o), r._props.push("scrollTo_y")) : r.skipY = 1
    },
    render: function(e, t) {
      for (var c = t._pt, l = t.target, o = t.tween, r = t.autoKill, y = t.xPrev, P = t.yPrev, x = t.isWin, n = t.snap, S = t.snapInline, g, b, j, L, w; c;) c.r(e, c.d), c = c._next;
      g = x || !t.skipX ? t.getX() : y, b = x || !t.skipY ? t.getY() : P, j = b - P, L = g - y, w = zt.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), r && (!t.skipX && (L > w || L < -w) && g < K(l, "x") && (t.skipX = 1), !t.skipY && (j > w || j < -w) && b < K(l, "y") && (t.skipY = 1), t.skipX && t.skipY && (o.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(o, t.vars.onAutoKillParams || []))), x ? I.scrollTo(t.skipX ? g : t.x, t.skipY ? b : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)), n && (e === 1 || e === 0) && (b = l.scrollTop, g = l.scrollLeft, S ? l.style.scrollSnapType = S : l.style.removeProperty("scroll-snap-type"), l.scrollTop = b + 1, l.scrollLeft = g + 1, l.scrollTop = b, l.scrollLeft = g), t.xPrev = t.x, t.yPrev = t.y, H && H.update()
    },
    kill: function(e) {
      var t = e === "scrollTo";
      (t || e === "scrollTo_x") && (this.skipX = 1), (t || e === "scrollTo_y") && (this.skipY = 1)
    }
  };
D.max = K;
D.getOffset = Ut;
D.buildGetter = z;
qt() && v.registerPlugin(D);
const xe = {
    class: "aside"
  },
  he = {
    class: "button__wrap"
  },
  be = {
    name: "ProjectAside"
  },
  ve = Object.assign(be, {
    props: {
      project: {
        type: Object,
        required: !0
      },
      isGalleryVisible: {
        type: Boolean,
        required: !0
      }
    },
    setup(s) {
      k.registerPlugin(D), J("lenis");
      const e = J("info");
      return (t, c) => {
        const l = ge;
        return _(), u("div", xe, [p("", !0), p("", !0), f("div", he, [B(l, {
          onClicked: c[6] || (c[6] = o => e.value = !0),
          label: "Info+",
          noDifference: "",
          white: "",
          class: "aside__book-button"
        })])])
      }
    }
  }),
  Pe = Q(ve, [
    ["__scopeId", "data-v-d8949251"]
  ]);
const Ft = s => (Gt("data-v-5f2f9abe"), s = s(), Vt(), s),
  $e = {
    class: "intro"
  },
  Se = {
    key: 0,
    class: "intro__title text-h3",
    "data-rotate-title": ""
  },
  Te = {
    class: "intro__details text-t3"
  },
  we = Ft(() => f("span", null, "/", -1)),
  ke = {
    key: 1,
    class: "img-outer intro__image"
  },
  Ce = {
    class: "img-inner"
  },
  Ae = Ft(() => f("span", {
    class: "text-t2 aside__back-span"
  }, "Back to All", -1)),
  Be = ["src"],
  Ie = {
    name: "ProjectIntro"
  },
  je = Object.assign(Ie, {
    props: {
      name: String,
      description: String,
      image: Object,
      brief: Object
    },
    setup(s) {
      const t = tt().public.baseUrl;
      return (c, l) => {
        var y, P, x, n, S;
        const o = Jt,
          r = rt;
        return _(), u("div", $e, [s.name ? (_(), u("h3", Se, T(s.name), 1)) : p("", !0), f("p", Te, [f("span", null, T((y = s.brief) == null ? void 0 : y.Location), 1), we, f("span", null, T((P = s.brief) == null ? void 0 : P.Size), 1)]), s.image ? (_(), u("div", ke, [f("div", Ce, [B(r, {
          to: "/works",
          class: "aside__back"
        }, {
          default: Z(() => [B(o), Ae]),
          _: 1
        }), f("img", {
          src: m(t) + ((S = (n = (x = s.image) == null ? void 0 : x.data) == null ? void 0 : n.attributes) == null ? void 0 : S.url),
          class: "img-parallax intro__inner-image"
        }, null, 8, Be)])])) : p("", !0)])
      }
    }
  }),
  Le = Q(je, [
    ["__scopeId", "data-v-5f2f9abe"]
  ]);
const Ne = {
    class: "gallery",
    id: "visualization",
    "data-section": ""
  },
  Ee = {
    class: "img-outer gallery__img"
  },
  Oe = {
    class: "img-inner"
  },
  Ye = ["src"],
  Me = {
    key: 1,
    class: "img-outer gallery__img"
  },
  Ge = {
    class: "img-inner"
  },
  Ve = ["src"],
  Xe = {
    name: "ProjectGallery"
  },
  Re = Object.assign(Xe, {
    props: {
      photos: Array
    },
    setup(s) {
      const t = tt().public.baseUrl;
      return (c, l) => (_(), u("div", Ne, [(_(!0), u(ot, null, it(s.photos, o => {
        var r, y, P, x, n, S;
        return _(), u("div", {
          class: Qt(["gallery__item", {
            double: (o == null ? void 0 : o.__component) === "info.two-photos"
          }]),
          key: o == null ? void 0 : o.id
        }, [(o == null ? void 0 : o.__component) === "info.two-photos" && ((r = o == null ? void 0 : o.add_two_photos) != null && r.data) ? (_(!0), u(ot, {
          key: 0
        }, it((y = o == null ? void 0 : o.add_two_photos) == null ? void 0 : y.data, g => {
          var b;
          return _(), u("div", Ee, [f("div", Oe, [f("img", {
            class: "img-parallax",
            src: m(t) + ((b = g == null ? void 0 : g.attributes) == null ? void 0 : b.url)
          }, null, 8, Ye)])])
        }), 256)) : o.__component === "info.add-one-photo" && ((P = o == null ? void 0 : o.photo) != null && P.data) ? (_(), u("div", Me, [f("div", Ge, [f("img", {
          class: "img-parallax",
          src: m(t) + ((S = (n = (x = o == null ? void 0 : o.photo) == null ? void 0 : x.data) == null ? void 0 : n.attributes) == null ? void 0 : S.url)
        }, null, 8, Ve)])])) : p("", !0)], 2)
      }), 128))]))
    }
  });
const Ht = s => (Gt("data-v-74364787"), s = s(), Vt(), s),
  Ke = {
    class: "next"
  },
  ze = {
    class: "next__img-wrapper"
  },
  De = ["src", "alt"],
  qe = {
    class: "group"
  },
  We = Ht(() => f("p", {
    class: "nex__label text-t3"
  }, " Next Project ", -1)),
  Ue = {
    class: "text-h3 next__title",
    "data-rotate-title": ""
  },
  Fe = Ht(() => f("div", {
    class: "decor"
  }, [f("div", {
    class: "decor-circle"
  }), f("div", {
    class: "decor-circle"
  })], -1)),
  He = {
    name: "ProjectNext"
  },
  Je = Object.assign(He, {
    props: {
      nextProject: Object
    },
    setup(s) {
      const t = tt().public.baseUrl,
        c = Zt(!1);
      return (l, o) => {
        var P, x;
        const r = me,
          y = rt;
        return _(), u("div", Ke, [B(r, {
          class: "next-banner"
        }), B(y, {
          to: `/project/${(x=(P=s.nextProject)==null?void 0:P.attributes)==null?void 0:x.Slug}`,
          class: "next__inner btn-hover",
          onMouseenter: o[0] || (o[0] = n => c.value = !0),
          onMouseleave: o[1] || (o[1] = n => c.value = !1)
        }, {
          default: Z(() => {
            var n, S, g, b, j, L, w, q, W, U, M, G;
            return [f("div", ze, [f("img", {
              class: "next__img",
              src: m(t) + ((j = (b = (g = (S = (n = s.nextProject) == null ? void 0 : n.attributes) == null ? void 0 : S.Main_Photo) == null ? void 0 : g.data) == null ? void 0 : b.attributes) == null ? void 0 : j.url),
              alt: (U = (W = (q = (w = (L = s.nextProject) == null ? void 0 : L.attributes) == null ? void 0 : w.Main_Photo) == null ? void 0 : q.data) == null ? void 0 : W.attributes) == null ? void 0 : U.alternativeText
            }, null, 8, De)]), f("div", qe, [We, f("h3", Ue, T((G = (M = s.nextProject) == null ? void 0 : M.attributes) == null ? void 0 : G.Name), 1), Fe])]
          }),
          _: 1
        }, 8, ["to"])])
      }
    }
  }),
  Qe = Q(Je, [
    ["__scopeId", "data-v-74364787"]
  ]);
const Ze = {
    class: "section-info"
  },
  tn = {
    "data-lenis-prevent": "",
    class: "section-info__wrap"
  },
  en = f("p", {
    class: "text-t3 section-info__brief"
  }, "Brief:", -1),
  nn = {
    key: 0,
    class: "text-t4 section-info__key"
  },
  sn = {
    key: 1,
    class: "text-t3 section-info__value"
  },
  on = {
    key: 2,
    class: "text-t4 section-info__key"
  },
  rn = {
    key: 3,
    class: "text-t3 section-info__value"
  },
  an = {
    key: 4,
    class: "text-t4 section-info__key"
  },
  cn = {
    key: 5,
    class: "text-t3 section-info__value"
  },
  ln = {
    key: 6,
    class: "text-t4 section-info__key"
  },
  _n = {
    key: 7,
    class: "text-t3 section-info__value"
  },
  un = ["innerHTML"],
  dn = {
    key: 9,
    class: "section-info__categories"
  },
  fn = {
    key: 10,
    class: "text-t4 section-info__key"
  },
  pn = {
    key: 11,
    class: "text-p3 section-info__value"
  },
  gn = {
    key: 12,
    class: "text-t4 section-info__key"
  },
  mn = {
    key: 13,
    class: "text-p3 section-info__value"
  },
  yn = f("p", {
    class: "text-s1 section-info__same"
  }, "Would you like the same project?", -1),
  xn = f("span", null, null, -1),
  hn = f("span", null, null, -1),
  bn = [xn, hn],
  vn = {
    name: "ProjectInfo"
  },
  Pn = Object.assign(vn, {
    props: {
      brief: Object,
      description: String,
      categories: Array,
      approach: String,
      branding: String,
      text: String
    },
    setup(s) {
      const e = J("info"),
        t = () => {
          e.value = !1
        },
        c = l => {
          l.key === "Escape" && t()
        };
      return te(() => {
        window.addEventListener("keydown", c)
      }), Xt(() => {
        window.removeEventListener("keydown", c)
      }), (l, o) => {
        const r = rt;
        return _(), u("div", Ze, [f("div", tn, [en, s.brief.Client ? (_(), u("p", nn, "Client")) : p("", !0), s.brief.Client ? (_(), u("p", sn, T(s.brief.Client), 1)) : p("", !0), s.brief.Location ? (_(), u("p", on, "Location")) : p("", !0), s.brief.Location ? (_(), u("p", rn, T(s.brief.Location), 1)) : p("", !0), s.brief.Year ? (_(), u("p", an, "Year")) : p("", !0), s.brief.Year ? (_(), u("p", cn, T(s.brief.Year), 1)) : p("", !0), s.brief.Size ? (_(), u("p", ln, "Size")) : p("", !0), s.brief.Size ? (_(), u("p", _n, T(s.brief.Size), 1)) : p("", !0), s.text ? (_(), u("div", {
          key: 8,
          class: "text-p3 section-info__text",
          innerHTML: s.description
        }, null, 8, un)) : p("", !0), s.categories.length ? (_(), u("div", dn, [(_(!0), u(ot, null, it(s.categories, y => (_(), u("p", {
          key: y.id,
          class: "text-p3 section-info__category"
        }, " [ " + T(y.attributes.Name_Category) + " ] ", 1))), 128))])) : p("", !0), s.approach ? (_(), u("p", fn, "Approach")) : p("", !0), s.approach ? (_(), u("p", pn, T(s.approach), 1)) : p("", !0), s.branding ? (_(), u("p", gn, "Branding")) : p("", !0), s.branding ? (_(), u("p", mn, T(s.branding), 1)) : p("", !0), yn, B(r, {
          class: "text-s1 section-info__book",
          to: "/contact"
        }, {
          default: Z(() => [ee("Book Now")]),
          _: 1
        })]), f("button", {
          onClick: o[0] || (o[0] = y => e.value = !1),
          class: "section-info__close"
        }, bn)])
      }
    }
  });
const $n = {
    class: "move-loader project"
  },
  Sn = {
    name: "ProjectPage"
  },
  Tn = Object.assign(Sn, {
    async setup(s) {
      var G, at, ct, lt, _t, ut, dt, ft, pt;
      let e, t;
      const c = J("info");
      k.registerPlugin(et, ne), se(), oe("filtersState");
      const o = tt().public.baseUrl,
        r = ie(),
        y = (G = r == null ? void 0 : r.params) == null ? void 0 : G.slug;
      console.log(new Date().getSeconds());
      const P = "?populate[categories][fields][0]=Name_Category&populate[Main_Photo][fields][0]=name&populate[Main_Photo][fields][1]=url&populate[Seo_Block][populate]=*&populate[services][fields][0]=Name&populate[Brief][populate]=*&populate[Constructor][populate]=*",
        {
          data: x
        } = ([e, t] = re(async () => _e(async () => {
          var Y, N, V, X, R;
          const i = await $fetch(o + "/api/one-projects?fields[0]=Slug&pagination[limit]=100&sort[0]=sort_order:asc"),
            a = i.data.findIndex(F => F.attributes.Slug === y);
          let d = i.data[a + 1] ? i.data[a + 1].id : i.data[a].id;
          ((V = (N = i == null ? void 0 : i.data) == null ? void 0 : N[((Y = i == null ? void 0 : i.data) == null ? void 0 : Y.length) - 1]) == null ? void 0 : V.id) == i.data[a].id && (d = (R = (X = i == null ? void 0 : i.data) == null ? void 0 : X[0]) == null ? void 0 : R.id), console.log("next id: ", d);
          const [$, A] = await Promise.all([$fetch(o + `/api/one-projects/${i.data[a].id}${P}`), $fetch(o + `/api/one-projects/${d}${P}`)]);
          return {
            res: i,
            nextIndex: d,
            project: $.data,
            nextProject: A.data
          }
        }, "$7UGJnrKKfF")), e = await e, t(), e),
        n = x.value.project;
      let S = x.value.nextProject;
      const g = (ct = (at = x == null ? void 0 : x.value) == null ? void 0 : at.res) == null ? void 0 : ct.data;
      ((lt = g == null ? void 0 : g[(g == null ? void 0 : g.length) - 1]) == null ? void 0 : lt.id) == ((_t = x.value.nextProject) == null ? void 0 : _t.id), (dt = (ut = n == null ? void 0 : n.attributes) == null ? void 0 : ut.Seo_Block) != null && dt.metaTitle, ae((ft = n == null ? void 0 : n.attributes) == null ? void 0 : ft.Seo_Block), console.log((pt = n == null ? void 0 : n.attributes) == null ? void 0 : pt.Seo_Block);
      async function b() {
        j(), q(), W(), window.innerWidth > 1023 && (k.to(".project .aside", {
          zIndex: 30
        }), k.to(".aside__back,.aside__book,.aside__nav", {
          autoAlpha: 1,
          duration: .4,
          ease: st
        }), L(), w()), ue({
          selector: ".img-parallax",
          saveAspectRatio: !0
        }), de(".next-banner .some")
      }

      function j() {
        const i = k.utils.toArray(".gallery .img-parallax"),
          a = document.querySelector(".intro__inner-image");
        if (!a || !(i != null && i.length)) return;
        const d = a.closest(".img-outer");
        i.forEach(h => {
          const $ = h.closest(".img-outer");
          Nt(h, $)
        }), Nt(a, d)
      }

      function L() {
        et.create({
          trigger: ".project .next",
          start: "top 30%",
          onEnter: () => {
            k.to(".aside__book, .aside__nav", {
              opacity: 0,
              pointerEvents: "none",
              duration: .4,
              ease: st
            })
          },
          onLeaveBack: () => {
            k.to(".aside__book, .aside__nav", {
              opacity: 1,
              pointerEvents: "all",
              duration: .4,
              ease: st
            })
          }
        })
      }

      function w() {
        const i = document.querySelector(".aside__nav-pointer"),
          a = document.querySelector(".aside__nav"),
          d = k.utils.toArray(".aside__item");
        !i || !a || !(d != null && d.length) || (i.style.height = `${(a.getBoundingClientRect().height-(d==null?void 0:d.length)*fe(8))/(d==null?void 0:d.length)}px`)
      }

      function q() {
        const i = document.querySelectorAll("[data-rotate-title]");
        Et({
          el: ".intro__quote > p",
          splitType: "words,chars"
        }), i.forEach(a => {
          Et({
            el: a,
            splitType: "words,chars"
          })
        })
      }
      async function W() {
        await new Promise(a => setTimeout(a, 500)), document.querySelectorAll("[data-anim-text]").forEach(a => {
          pe({
            el: a
          })
        })
      }
      E(() => {
        var a;
        const i = (a = n == null ? void 0 : n.attributes) == null ? void 0 : a.Brief;
        return !(!i || !(i != null && i.Location) && !(i != null && i.Year) && !i.Size)
      });
      const U = E(() => {
        var $, A, Y, N;
        const i = ($ = n == null ? void 0 : n.attributes) == null ? void 0 : $.Brief,
          a = (A = n == null ? void 0 : n.attributes) == null ? void 0 : A.Name,
          d = (Y = n == null ? void 0 : n.attributes) == null ? void 0 : Y.Description,
          h = (N = n == null ? void 0 : n.attributes) == null ? void 0 : N.Main_Photo;
        return !(!i && !a && !d && !(h != null && h.data))
      });
      E(() => {
        var d, h, $;
        const i = (h = (d = n == null ? void 0 : n.attributes) == null ? void 0 : d.categories) == null ? void 0 : h.data,
          a = ($ = n == null ? void 0 : n.attributes) == null ? void 0 : $.Short_Description;
        return !(!(i != null && i.length) && !a)
      });
      const M = E(() => {
        var d;
        const i = (d = n == null ? void 0 : n.attributes) == null ? void 0 : d.Constructor;
        let a = !1;
        return !(!(i != null && i.length) || (i.forEach(h => {
          var $, A;
          (($ = h == null ? void 0 : h.photo) != null && $.data || (A = h == null ? void 0 : h.add_two_photos) != null && A.data) && (a = !0)
        }), !a))
      });
      return E(() => {
        var a;
        const i = (a = n == null ? void 0 : n.attributes) == null ? void 0 : a.Add_View;
        return !!(i != null && i.length)
      }), E(() => {
        var a;
        return !!((a = n == null ? void 0 : n.attributes) == null ? void 0 : a.Project_Implementation)
      }), E(() => {
        var a;
        return !!((a = n == null ? void 0 : n.attributes) == null ? void 0 : a.Approach)
      }), E(() => {
        var a;
        return !!((a = n == null ? void 0 : n.attributes) == null ? void 0 : a.Outcome)
      }), ce(() => {
        b()
      }), Xt(() => {
        k.set(".header-nav,.header-burger", {
          opacity: 1,
          pointerEvents: "all"
        }), k.to(".project .aside", {
          zIndex: 10
        }), et.killAll()
      }), (i, a) => {
        var N, V, X, R, F, gt, mt, yt, xt, ht, bt;
        const d = Pe,
          h = Le,
          $ = Re,
          A = Qe,
          Y = Pn;
        return _(), u("main", $n, [B(d, {
          isGalleryVisible: m(M),
          project: (N = m(n)) == null ? void 0 : N.attributes
        }, null, 8, ["isGalleryVisible", "project"]), m(U) ? (_(), nt(h, {
          key: 0,
          brief: (X = (V = m(n)) == null ? void 0 : V.attributes) == null ? void 0 : X.Brief,
          name: (F = (R = m(n)) == null ? void 0 : R.attributes) == null ? void 0 : F.Name,
          description: (mt = (gt = m(n)) == null ? void 0 : gt.attributes) == null ? void 0 : mt.Description,
          image: (xt = (yt = m(n)) == null ? void 0 : yt.attributes) == null ? void 0 : xt.Main_Photo
        }, null, 8, ["brief", "name", "description", "image"])) : p("", !0), m(M) ? (_(), nt($, {
          key: 1,
          photos: (bt = (ht = m(n)) == null ? void 0 : ht.attributes) == null ? void 0 : bt.Constructor
        }, null, 8, ["photos"])) : p("", !0), B(A, {
          "next-project": m(S)
        }, null, 8, ["next-project"]), B(le, {
          name: "info"
        }, {
          default: Z(() => {
            var vt, Pt, $t, St, Tt, wt, kt, Ct, At, Bt, It, jt, Lt;
            return [m(c) ? (_(), nt(Y, {
              key: 0,
              brief: ((Pt = (vt = m(n)) == null ? void 0 : vt.attributes) == null ? void 0 : Pt.Brief) ?? {},
              description: ((St = ($t = m(n)) == null ? void 0 : $t.attributes) == null ? void 0 : St.Description) ?? "",
              categories: ((kt = (wt = (Tt = m(n)) == null ? void 0 : Tt.attributes) == null ? void 0 : wt.categories) == null ? void 0 : kt.data) ?? [],
              approach: ((At = (Ct = m(n)) == null ? void 0 : Ct.attributes) == null ? void 0 : At.Approach) ?? "",
              branding: ((It = (Bt = m(n)) == null ? void 0 : Bt.attributes) == null ? void 0 : It.Branding) ?? "",
              text: ((Lt = (jt = m(n)) == null ? void 0 : jt.attributes) == null ? void 0 : Lt.Description) ?? ""
            }, null, 8, ["brief", "description", "categories", "approach", "branding", "text"])) : p("", !0)]
          }),
          _: 1
        })])
      }
    }
  }),
  An = Q(Tn, [
    ["__scopeId", "data-v-8f30c7a9"]
  ]);
export {
  An as
  default
};