/* https://coevalstudio.com/_nuxt/services.de27c122.js */
import {
  H as z,
  T as G
} from "./components.f929feb2.js";
import {
  _ as Y,
  o as v,
  c as p,
  F as U,
  r as q,
  g as i,
  af as N,
  S as O,
  W as J,
  e as K,
  f as _,
  aa as M,
  C as Q,
  k as X,
  l as k,
  E as C,
  u as a,
  a as x,
  t as b,
  G as T,
  b as Z,
  J as ee,
  H as c,
  K as te,
  L as se,
  q as d
} from "./entry.7e3c7585.js";
import {
  v as ae
} from "./v4.a960c1f4.js";
const ne = {
    class: "pattern"
  },
  ie = ["src", "id"],
  oe = {
    name: "ServicesBackground"
  },
  re = Object.assign(oe, {
    props: {
      photos: {
        type: Array,
        default: () => []
      }
    },
    setup(j) {
      return (D, B) => (v(), p("div", ne, [(v(!0), p(U, null, q(j.photos, s => (v(), p("img", {
        class: "pattern__image",
        src: s.url,
        id: s.id
      }, null, 8, ie))), 256))]))
    }
  }),
  ce = Y(re, [
    ["__scopeId", "data-v-743b7ed2"]
  ]);
const le = {
    "data-lenis-prevent": "",
    class: "services move-loader"
  },
  ue = {
    class: "services__inner"
  },
  _e = {
    class: "services__counter text-h5"
  },
  de = {
    class: "fictive"
  },
  ve = {
    class: "real"
  },
  pe = {
    class: "services__link-wrap"
  },
  me = {
    name: "ServicesPage"
  },
  fe = Object.assign(me, {
    setup(j) {
      i.registerPlugin(N, O), J({
        metaTitle: "Services"
      });
      const B = Z().public.baseUrl,
        s = K("services"),
        L = "Services",
        y = _([]);
      s.value.forEach(e => {
        var t;
        ((t = e == null ? void 0 : e.attributes) == null ? void 0 : t.Description_Photo).forEach((n, P) => {
          var f, g, h;
          if (P <= 2) {
            const w = (h = (g = (f = n == null ? void 0 : n.Photo) == null ? void 0 : f.data) == null ? void 0 : g.attributes) == null ? void 0 : h.url;
            w && y.value.push({
              id: ae(),
              url: B + w
            })
          }
        })
      }), y.value = [{
        id: 1,
        url: "/img/works/item-1.jpg"
      }, {
        id: 2,
        url: "/img/works/item-2.jpg"
      }, {
        id: 3,
        url: "/img/works/item-3.jpg"
      }, ...y.value, {
        id: 13,
        url: "/img/works/item-1.jpg"
      }, {
        id: 14,
        url: "/img/works/item-2.jpg"
      }, {
        id: 15,
        url: "/img/works/item-3.jpg"
      }];
      const m = _(!1),
        R = _(null),
        o = M("lenis"),
        V = _(s.value[0]),
        l = _(0),
        u = _(0);

      function W() {
        if (m.value || l.value === 0) return;
        const e = document.querySelector(".services__bg");
        if (!e) return;
        const {
          top: r
        } = e.getBoundingClientRect();
        m.value = !0, l.value -= 1;
        let t = d(688);
        window.innerWidth <= 1023 && (t = d(960, 7.68)), window.innerWidth <= 767 && (t = d(588, 3.6)), i.to(".services__bg", {
          duration: 1.2,
          ease: c,
          y: () => r + t
        }), $(l.value)
      }

      function E() {
        if (m.value || l.value === s.value.length - 1) return;
        m.value = !0, l.value += 1;
        const e = document.querySelector(".services__bg");
        if (!e) return;
        const {
          top: r
        } = e.getBoundingClientRect();
        let t = d(688);
        window.innerWidth <= 1023 && (t = d(960, 7.68)), window.innerWidth <= 767 && (t = d(588, 3.6)), i.to(e, {
          duration: 1.2,
          ease: c,
          y: () => r - t
        }), $(l.value)
      }

      function $(e) {
        const r = new Promise(n => {
            i.to(".services__counter > span.fictive,.services__link", {
              yPercent: -120,
              duration: .6,
              ease: c,
              onComplete: n
            })
          }),
          t = new Promise(n => {
            i.to(".services__title-span.active .split-char", {
              scaleY: 0,
              ease: c,
              duration: .4,
              transformOrigin: "bottom",
              stagger: {
                from: "end",
                amount: .4
              },
              onComplete: () => {
                i.set(".services__title-span .split-char", {
                  scaleY: 0
                }), n()
              }
            })
          });
        Promise.all([r, t]).then(async () => {
          u.value = e, V.value = s.value[u.value], await te(), i.to(".services__title-span.active .split-char", {
            scaleY: 1,
            ease: c,
            duration: .4,
            transformOrigin: "center",
            stagger: {
              amount: .4
            }
          }), i.fromTo(".services__counter > span.fictive,.services__link", {
            yPercent: 120
          }, {
            yPercent: 0,
            duration: .6,
            ease: c,
            onComplete: () => {
              m.value = !1
            }
          })
        })
      }

      function A() {
        const e = new O(".services__title-span", {
          type: "words,chars",
          charsClass: "split-char"
        });
        i.fromTo(e.chars, {
          scaleY: 0
        }, {
          ease: c,
          duration: .4,
          scaleY: 1,
          delay: .7,
          stagger: {
            amount: .8
          }
        })
      }
      return Q(() => {
        var e;
        (e = o == null ? void 0 : o.value) != null && e.stop && o.value.stop(), A(), R.value = N.create({
          target: window,
          type: "wheel,touch",
          onUp: () => {
            window.innerWidth > 1023 ? W() : E()
          },
          onDown: () => {
            window.innerWidth > 1023 ? E() : W()
          }
        })
      }), X(() => {
        var e;
        (e = o == null ? void 0 : o.value) != null && e.start && o.value.start()
      }), (e, r) => {
        var g, h, w, H;
        const t = G,
          n = z,
          P = ce,
          f = ee;
        return v(), p("div", le, [k(n, null, {
          default: C(() => [k(t, null, {
            default: C(() => [T(b(L))]),
            _: 1
          })]),
          _: 1
        }), k(P, {
          photos: a(y),
          class: "services__bg"
        }, null, 8, ["photos"]), x("div", ue, [x("div", _e, [x("span", de, b(a(u) + 1), 1), x("span", ve, b(a(s).length), 1), T(" / " + b(a(s).length), 1)]), k(f, {
          to: `/service/${(h=(g=a(s)[a(u)])==null?void 0:g.attributes)==null?void 0:h.Slug}`,
          class: "services__title text-a2"
        }, {
          default: C(() => [(v(!0), p(U, null, q(a(s), (S, F) => {
            var I;
            return v(), p("span", {
              class: se(["services__title-span", {
                active: F === a(u)
              }]),
              key: S.id
            }, b((I = S == null ? void 0 : S.attributes) == null ? void 0 : I.Name), 3)
          }), 128))]),
          _: 1
        }, 8, ["to"]), x("div", pe, [k(f, {
          to: `/service/${(H=(w=a(s)[a(u)])==null?void 0:w.attributes)==null?void 0:H.Slug}`,
          class: "link services__link text-s1"
        }, {
          default: C(() => [T("Click to Explore ")]),
          _: 1
        }, 8, ["to"])])])])
      }
    }
  }),
  ke = Y(fe, [
    ["__scopeId", "data-v-13f92428"]
  ]);
export {
  ke as
  default
};