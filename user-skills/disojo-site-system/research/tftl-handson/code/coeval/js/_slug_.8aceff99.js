/* https://coevalstudio.com/_nuxt/_slug_.8aceff99.js */
import {
  _ as y,
  e as F,
  o as i,
  c as d,
  a as e,
  u as m,
  L as ot,
  z as C,
  A as I,
  ad as bt,
  t as S,
  g as T,
  S as L,
  f as P,
  C as H,
  F as A,
  r as O,
  R as N,
  b as M,
  l as h,
  E as B,
  G as q,
  J as nt,
  O as ht,
  H as et,
  ae as ft,
  B as vt,
  W as xt,
  D as $t,
  a0 as kt,
  Y as st
} from "./entry.7e3c7585.js";
import {
  _ as yt
} from "./Popup.cd0a9f4e.js";
import {
  v as St
} from "./v4.a960c1f4.js";
import {
  _ as wt
} from "./CommonButton.058c734e.js";
import {
  _ as Ct
} from "./DragSlider.55706fac.js";
import {
  _ as It
} from "./Banner.24261c76.js";
import {
  _ as _t
} from "./top-right-arrow.a0578799.js";
const Tt = t => (C("data-v-bd723b47"), t = t(), I(), t),
  Pt = ["src"],
  At = Tt(() => e("img", {
    role: "presentation",
    class: "image-popup__icon",
    src: bt
  }, null, -1)),
  Ot = [At],
  Bt = {
    name: "ImagePopup"
  },
  Mt = Object.assign(Bt, {
    props: {
      isOpen: {
        type: Boolean,
        required: !0
      }
    },
    setup(t) {
      const r = F("popupImage");
      return (n, u) => (i(), d("div", {
        class: ot(["image-popup", {
          open: t.isOpen
        }])
      }, [e("img", {
        class: "image-popup__inner",
        src: m(r),
        alt: "photo"
      }, null, 8, Pt), e("button", {
        class: "image-popup__close",
        onClick: u[0] || (u[0] = l => n.$emit("closePopup"))
      }, Ot)], 2))
    }
  }),
  Ft = y(Mt, [
    ["__scopeId", "data-v-bd723b47"]
  ]);
const Lt = {
    class: "img-inner"
  },
  qt = ["src"],
  Nt = {
    name: "ImgComponent"
  },
  Ht = Object.assign(Nt, {
    props: {
      img: {
        type: String,
        required: !0
      }
    },
    setup(t) {
      return (r, n) => (i(), d("div", {
        class: "img-wrapper",
        onClick: n[0] || (n[0] = u => r.$emit("openPopup", t.img))
      }, [e("div", Lt, [e("img", {
        src: t.img,
        alt: "img",
        class: "img"
      }, null, 8, qt)])]))
    }
  }),
  at = y(Ht, [
    ["__scopeId", "data-v-393197fa"]
  ]);
const jt = {
    class: "text text-h3"
  },
  Et = {
    name: "TextComponent"
  },
  Dt = Object.assign(Et, {
    props: {
      text: {
        type: String,
        required: !0
      }
    },
    setup(t) {
      return (r, n) => (i(), d("p", jt, S(t.text), 1))
    }
  }),
  it = y(Dt, [
    ["__scopeId", "data-v-5123cf49"]
  ]);
const Wt = {
    class: "intro"
  },
  Ut = {
    class: "intro__text"
  },
  Vt = ["innerHTML"],
  Qt = {
    name: "ServiceIntro",
    components: [at, it]
  },
  zt = Object.assign(Qt, {
    props: {
      blocks: Array,
      description: String
    },
    setup(t) {
      var g;
      const r = t;
      T.registerPlugin(L);
      const u = M().public.baseUrl;
      P([{
        id: 1,
        type: "text",
        content: "The significance"
      }, {
        id: 2,
        type: "img",
        content: "/img/works/item-2.jpg"
      }, {
        id: 3,
        type: "text",
        content: "of these problems"
      }, {
        id: 4,
        type: "img",
        content: "/img/works/item-2.jpg"
      }, {
        id: 5,
        type: "text",
        content: "is so obvious the strengthening and development"
      }, {
        id: 6,
        type: "img",
        content: "/img/works/item-2.jpg"
      }, {
        id: 7,
        type: "text",
        content: "of the structure requires the identification and"
      }, {
        id: 8,
        type: "img",
        content: "/img/works/item-2.jpg"
      }, {
        id: 9,
        type: "text",
        content: "refinement of new proposals"
      }]);
      const l = P([]);
      (g = r == null ? void 0 : r.blocks) == null || g.forEach(_ => {
        var b, f;
        const {
          id: p,
          Text: c,
          Photo: a
        } = _;
        c && c.split(" ").forEach(k => {
          l.value.push({
            id: St(),
            content: k,
            type: "text"
          })
        }), a != null && a.data && l.value.push({
          id: 4,
          type: "img",
          content: u + ((f = (b = a == null ? void 0 : a.data) == null ? void 0 : b.attributes) == null ? void 0 : f.url)
        })
      });

      function o() {
        s()
      }

      function s() {
        const _ = new L(".intro__text .text", {
          type: "chars"
        });
        T.fromTo(_.chars, {
          scaleY: 0
        }, {
          ease: "default",
          scaleY: 1,
          delay: .7,
          stagger: {
            amount: .8
          }
        })
      }
      return H(() => {
        o()
      }), (_, p) => (i(), d("div", Wt, [e("div", Ut, [(i(!0), d(A, null, O(m(l), c => (i(), d("div", {
        class: "intro__text-chunk",
        key: c.id
      }, [c.type === "img" ? (i(), N(at, {
        key: 0,
        onOpenPopup: p[0] || (p[0] = a => _.$emit("openPopup", a)),
        img: c.content
      }, null, 8, ["img"])) : (i(), N(it, {
        key: 1,
        text: c.content
      }, null, 8, ["text"]))]))), 128))]), e("div", {
        class: "intro__description capitalized capitalized-split text-p3",
        innerHTML: t.description
      }, null, 8, Vt)]))
    }
  }),
  Rt = y(zt, [
    ["__scopeId", "data-v-0d5a6b68"]
  ]);
const Yt = t => (C("data-v-bd8ca657"), t = t(), I(), t),
  Gt = {
    class: "book"
  },
  Jt = {
    class: "book__img-wrap --tablet"
  },
  Kt = ["src"],
  Xt = {
    class: "book__list"
  },
  Zt = Yt(() => e("div", {
    class: "book__list-heading text-t3"
  }, [e("span", {
    class: "book__list-letter",
    "data-anim-text": ""
  }, "B"), e("p", {
    class: "book__list-title",
    "data-anim-text": ""
  }, "Areas of expertise")], -1)),
  te = {
    class: "book__ul text-s1"
  },
  ee = {
    class: "book__li-num",
    "data-anim-text": ""
  },
  se = {
    class: "book__li-title",
    "data-anim-text": ""
  },
  oe = {
    class: "book__footer"
  },
  ne = {
    class: "book__img-wrap --desktop"
  },
  _e = ["src"],
  ae = {
    name: "ServiceBook"
  },
  ie = Object.assign(ae, {
    props: {
      blocks: Array,
      image: Object
    },
    setup(t) {
      const n = M().public.baseUrl;
      return (u, l) => {
        var s, g, _, p, c, a;
        const o = wt;
        return i(), d("div", Gt, [e("div", Jt, [e("img", {
          class: "book__img",
          src: m(n) + ((_ = (g = (s = t.image) == null ? void 0 : s.data[0]) == null ? void 0 : g.attributes) == null ? void 0 : _.url)
        }, null, 8, Kt)]), e("div", Xt, [Zt, e("ul", te, [(i(!0), d(A, null, O(t.blocks, (b, f) => (i(), d("li", {
          class: "book__li",
          key: b.id
        }, [e("span", ee, S(("0" + (f + 1)).slice(-2)), 1), e("p", se, S(b.Name), 1)]))), 128))])]), e("div", oe, [e("div", ne, [e("img", {
          class: "book__img",
          src: m(n) + ((a = (c = (p = t.image) == null ? void 0 : p.data[0]) == null ? void 0 : c.attributes) == null ? void 0 : a.url)
        }, null, 8, _e)]), h(o, {
          onClicked: l[0] || (l[0] = b => u.$router.push({
            path: "/contact"
          })),
          class: "book__btn",
          label: "Book Now"
        })])])
      }
    }
  }),
  ce = y(ie, [
    ["__scopeId", "data-v-bd8ca657"]
  ]);
const re = t => (C("data-v-9fd22bfc"), t = t(), I(), t),
  le = {
    class: "works"
  },
  de = {
    class: "works__heading"
  },
  ue = re(() => e("h3", {
    class: "works__title text-h3",
    "data-rotate-title": ""
  }, "Works", -1)),
  pe = {
    name: "ServiceWorks"
  },
  me = Object.assign(pe, {
    props: {
      projects: Array
    },
    setup(t) {
      const r = t,
        u = M().public.baseUrl,
        l = r == null ? void 0 : r.projects.map(o => {
          var s, g, _, p, c, a;
          return {
            id: o.id,
            link: `/project/${(s=o==null?void 0:o.attributes)==null?void 0:s.Slug}`,
            caption: (g = o == null ? void 0 : o.attributes) == null ? void 0 : g.Name,
            image: u + ((a = (c = (p = (_ = o == null ? void 0 : o.attributes) == null ? void 0 : _.Main_Photo) == null ? void 0 : p.data) == null ? void 0 : c.attributes) == null ? void 0 : a.url)
          }
        });
      return (o, s) => {
        const g = nt,
          _ = Ct;
        return i(), d("div", le, [e("div", de, [ue, h(g, {
          to: "/works",
          class: "link works__link"
        }, {
          default: B(() => [q("View all")]),
          _: 1
        })]), h(_, {
          "container-selector": ".works",
          projects: m(l)
        }, null, 8, ["projects"])])
      }
    }
  }),
  ge = y(me, [
    ["__scopeId", "data-v-9fd22bfc"]
  ]);
const be = t => (C("data-v-37f8a985"), t = t(), I(), t),
  he = {
    class: "accordion__heading"
  },
  fe = {
    class: "text-t1"
  },
  ve = be(() => e("div", {
    class: "accordion__cross"
  }, null, -1)),
  xe = {
    class: "accordion__body-inner"
  },
  $e = {
    name: "CommonAccordion"
  },
  ke = Object.assign($e, {
    props: {
      heading: {
        type: String,
        required: !0
      }
    },
    setup(t) {
      const r = P(null),
        n = P(!1);
      return ht(() => n.value, () => {
        n.value ? T.to(r.value, {
          height: "auto",
          duration: .4,
          ease: et
        }) : T.to(r.value, {
          height: 0,
          duration: .4,
          ease: et
        })
      }), H(() => {}), (u, l) => (i(), d("div", {
        class: ot(["accordion", {
          open: m(n)
        }]),
        onClick: l[0] || (l[0] = o => n.value = !m(n))
      }, [e("button", he, [e("span", fe, S(t.heading), 1), ve]), e("div", {
        ref_key: "body",
        ref: r,
        class: "accordion__body text-p3"
      }, [e("div", xe, [ft(u.$slots, "default", {}, void 0, !0)])], 512)], 2))
    }
  }),
  ye = y(ke, [
    ["__scopeId", "data-v-37f8a985"]
  ]);
const Se = t => (C("data-v-781bb2ed"), t = t(), I(), t),
  we = {
    class: "faq section"
  },
  Ce = Se(() => e("h3", {
    class: "faq__title text-h3",
    "data-rotate-title": ""
  }, "Faq", -1)),
  Ie = {
    class: "faq__list"
  },
  Te = {
    name: "ServiceFAQ"
  },
  Pe = Object.assign(Te, {
    props: {
      blocks: Array
    },
    setup(t) {
      return (r, n) => {
        const u = ye;
        return i(), d("div", we, [Ce, e("div", Ie, [(i(!0), d(A, null, O(t.blocks, l => (i(), N(u, {
          heading: l.Question,
          key: l.id
        }, {
          default: B(() => [q(S(l.Answer), 1)]),
          _: 2
        }, 1032, ["heading"]))), 128))])])
      }
    }
  }),
  Ae = y(Pe, [
    ["__scopeId", "data-v-781bb2ed"]
  ]);
const ct = t => (C("data-v-998b3735"), t = t(), I(), t),
  Oe = {
    class: "footer"
  },
  Be = ["onClick"],
  Me = {
    class: "service__top"
  },
  Fe = {
    class: "service__num text-t3"
  },
  Le = ct(() => e("div", {
    class: "service__arrow-wrap"
  }, [e("img", {
    class: "service__arrow",
    src: _t,
    role: "presentation"
  })], -1)),
  qe = {
    class: "service__right"
  },
  Ne = {
    class: "service__image-wrap"
  },
  He = ["src"],
  je = ["innerHTML"],
  Ee = ["onClick"],
  De = {
    class: "service__top"
  },
  We = {
    class: "service__left"
  },
  Ue = ["innerHTML"],
  Ve = {
    class: "service__num text-t3"
  },
  Qe = {
    class: "service__image-wrap"
  },
  ze = ["src"],
  Re = {
    class: "service__bottom"
  },
  Ye = ct(() => e("div", {
    class: "service__arrow-wrap"
  }, [e("img", {
    class: "service__arrow",
    src: _t,
    role: "presentation"
  })], -1)),
  Ge = {
    name: "ServicesFooter"
  },
  Je = Object.assign(Ge, {
    props: {
      services: Array
    },
    setup(t) {
      const n = M().public.baseUrl;
      return (u, l) => {
        const o = nt;
        return i(), d("footer", Oe, [(i(!0), d(A, null, O(t.services, (s, g) => {
          var _, p, c, a, b, f;
          return i(), d("div", {
            key: s.id,
            onClick: $ => {
              var k;
              return u.$router.push({
                path: `/service/${(k=s==null?void 0:s.attributes)==null?void 0:k.Slug}`
              })
            },
            class: "footer__service service --desktop"
          }, [e("div", Me, [e("div", Fe, "0" + S(g + 1) + ".", 1), Le, e("div", qe, [e("div", Ne, [e("img", {
            class: "service__image",
            src: m(n) + ((a = (c = (p = (_ = s == null ? void 0 : s.attributes) == null ? void 0 : _.Photo_For_Main) == null ? void 0 : p.data[0]) == null ? void 0 : c.attributes) == null ? void 0 : a.url)
          }, null, 8, He)]), e("div", {
            class: "service__text text-t3",
            innerHTML: (b = s == null ? void 0 : s.attributes) == null ? void 0 : b.Short_Description
          }, null, 8, je)])]), h(o, {
            to: `/service/${(f=s==null?void 0:s.attributes)==null?void 0:f.Slug}`,
            class: "text-h3 service__link",
            "data-rotate-title": ""
          }, {
            default: B(() => {
              var $;
              return [q(S(($ = s == null ? void 0 : s.attributes) == null ? void 0 : $.Name), 1)]
            }),
            _: 2
          }, 1032, ["to"])], 8, Be)
        }), 128)), (i(!0), d(A, null, O(t.services, (s, g) => {
          var _, p, c, a, b, f;
          return i(), d("div", {
            key: s.id,
            onClick: $ => {
              var k;
              return u.$router.push({
                path: `/service/${(k=s==null?void 0:s.attributes)==null?void 0:k.Slug}`
              })
            },
            class: "footer__service service --tablet"
          }, [e("div", De, [e("div", We, [e("div", {
            class: "service__text text-t3",
            innerHTML: (_ = s == null ? void 0 : s.attributes) == null ? void 0 : _.Short_Description
          }, null, 8, Ue), e("div", Ve, "0" + S(g + 1) + ".", 1)]), e("div", Qe, [e("img", {
            class: "service__image",
            src: m(n) + ((b = (a = (c = (p = s == null ? void 0 : s.attributes) == null ? void 0 : p.Photo_For_Main) == null ? void 0 : c.data[0]) == null ? void 0 : a.attributes) == null ? void 0 : b.url)
          }, null, 8, ze)])]), e("div", Re, [h(o, {
            to: `/service/${(f=s==null?void 0:s.attributes)==null?void 0:f.Slug}`,
            class: "text-h3",
            "data-rotate-title": ""
          }, {
            default: B(() => {
              var $;
              return [q(S(($ = s == null ? void 0 : s.attributes) == null ? void 0 : $.Name), 1)]
            }),
            _: 2
          }, 1032, ["to"]), Ye])], 8, Ee)
        }), 128))])
      }
    }
  }),
  Ke = y(Je, [
    ["__scopeId", "data-v-998b3735"]
  ]);
const Xe = {
    class: "wrap"
  },
  Ze = {
    class: "service move-loader"
  },
  ts = {
    class: "section"
  },
  es = {
    name: "ServicePage"
  },
  ss = Object.assign(es, {
    setup(t) {
      var k, j, E, D;
      T.registerPlugin(L), M().public.baseUrl;
      const n = vt(),
        u = (k = n == null ? void 0 : n.params) == null ? void 0 : k.slug,
        l = F("services"),
        o = l.value.find(v => {
          var x;
          return ((x = v == null ? void 0 : v.attributes) == null ? void 0 : x.Slug) === u
        });
      (E = (j = o == null ? void 0 : o.attributes) == null ? void 0 : j.Seo_Block) != null && E.metaTitle, xt((D = o == null ? void 0 : o.attributes) == null ? void 0 : D.Seo_Block);
      const s = l.value.filter(v => {
          var x, w;
          return ((x = v == null ? void 0 : v.attributes) == null ? void 0 : x.Slug) !== ((w = o == null ? void 0 : o.attributes) == null ? void 0 : w.Slug)
        }).slice(0, 2),
        g = F("popupImage", () => null),
        _ = P(!1),
        p = F("isLogoVisible");

      function c() {
        a(), b(), kt(".banner .some")
      }

      function a() {
        document.querySelectorAll("[data-anim-text]").forEach(x => st({
          el: x
        })), st({
          el: ".intro__description",
          linesType: "lines,words"
        })
      }

      function b() {
        new L(".btn-main", {
          type: "words,chars",
          charsClass: "btn-char",
          wordsClass: "spaced"
        }).chars.forEach((x, w) => {
          x.setAttribute("data-char", x.textContent), x.style = `--char-index: ${w}`
        })
      }

      function f(v) {
        window.innerWidth >= 1023 || (g.value = v, _.value = !0)
      }

      function $() {
        _.value = !1
      }
      return H(() => {
        c(), p.value = !1
      }), $t(() => {
        setTimeout(() => {
          p.value = !0
        }, 800)
      }), (v, x) => {
        var W, U, V, Q, z, R, Y, G, J, K, X, Z, tt;
        const w = Ft,
          rt = yt,
          lt = Rt,
          dt = ce,
          ut = ge,
          pt = Ae,
          mt = It,
          gt = Ke;
        return i(), d("div", Xe, [h(rt, {
          "is-blured": !0,
          "is-open": m(_)
        }, {
          default: B(() => [h(w, {
            "is-open": m(_),
            onClosePopup: $
          }, null, 8, ["is-open"])]),
          _: 1
        }, 8, ["is-open"]), e("div", Ze, [e("div", ts, [h(lt, {
          onOpenPopup: f,
          description: (U = (W = m(o)) == null ? void 0 : W.attributes) == null ? void 0 : U.Description_For_Main,
          blocks: (Q = (V = m(o)) == null ? void 0 : V.attributes) == null ? void 0 : Q.Description_Photo
        }, null, 8, ["description", "blocks"]), h(dt, {
          image: (R = (z = m(o)) == null ? void 0 : z.attributes) == null ? void 0 : R.Photo_For_Main,
          blocks: (G = (Y = m(o)) == null ? void 0 : Y.attributes) == null ? void 0 : G.Add_Expertise
        }, null, 8, ["image", "blocks"])]), h(ut, {
          projects: (X = (K = (J = m(o)) == null ? void 0 : J.attributes) == null ? void 0 : K.one_projects) == null ? void 0 : X.data
        }, null, 8, ["projects"]), h(pt, {
          blocks: (tt = (Z = m(o)) == null ? void 0 : Z.attributes) == null ? void 0 : tt.Add_FAQ
        }, null, 8, ["blocks"]), h(mt, {
          class: "service-banner"
        })]), h(gt, {
          services: m(s)
        }, null, 8, ["services"])])
      }
    }
  }),
  ls = y(ss, [
    ["__scopeId", "data-v-ee67ba1e"]
  ]);
export {
  ls as
  default
};