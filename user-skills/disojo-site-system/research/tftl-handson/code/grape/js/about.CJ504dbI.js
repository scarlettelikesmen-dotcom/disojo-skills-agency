/* https://grape.ua/_nuxt/about.CJ504dbI.js */
import {
  _ as ht
} from "./AnimCircles.vue.eKAmF3gL.js";
import {
  _ as vt,
  a as gt,
  b as $t,
  c as yt
} from "./Main.D-Xe3oxQ.js";
import {
  _ as xt,
  a as kt
} from "./AwardsWithProps.vue.D6tqsxmX.js";
import {
  u as ft
} from "./base.Cowcg-OE.js";
import {
  u as wt,
  a as tt,
  p as R,
  b as et,
  c as Ct,
  g as x,
  _ as bt,
  S as ot,
  d as St,
  e as O,
  f as At,
  s as It,
  h as Mt,
  i as Pt
} from "./entry.DN75vySF.js";
import {
  j as z,
  M as a,
  N as d,
  U as e,
  W as _,
  L as C,
  J as T,
  $ as L,
  R as Y,
  _ as X,
  u as t,
  V as j,
  a as E,
  C as U,
  o as st,
  Z as nt,
  a9 as Tt,
  k as Nt,
  b as G,
  n as Bt,
  X as Wt,
  Y as Lt,
  Q as qt,
  aa as Vt
} from "./swiper-vue.BTZulNLT.js";
import {
  _ as Et
} from "./EmptyWithProps.D19AbZT0.js";
import {
  s as zt,
  _ as Dt
} from "./setPageMeta.BIChswHP.js";
import "./isVideo.BdcvccDS.js";
const Ft = {
    class: "about-first"
  },
  Ot = {
    class: "text-p3 about-first__subtitle"
  },
  Xt = {
    class: "text-p3 about-first__scroll"
  },
  Ht = {
    class: "about-first__content"
  },
  Rt = {
    class: "title-h0 about-first__title"
  },
  jt = e("br", null, null, -1),
  Gt = {
    class: "about-first__news"
  },
  Ut = {
    class: "about-first__left"
  },
  Jt = {
    class: "text-p3 about-first__info"
  },
  Qt = {
    class: "text-p1 about-first__text"
  },
  Yt = {
    class: "about-first__right"
  },
  Zt = {
    class: "text-p3 about-first__description"
  },
  Kt = {
    class: "text-p1 about-first__socials"
  },
  te = ["href"],
  ee = z({
    __name: "First",
    props: {
      title: {},
      description: {},
      hashtag: {},
      socials: {},
      showreal: {},
      showrealIframe: {},
      news: {},
      pageName: {}
    },
    setup($) {
      const o = $,
        {
          base: g,
          setShowrealSrc: b,
          setIsIframe: r
        } = ft();

      function p() {
        o.showrealIframe ? (r(!0), b(o.showrealIframe)) : b(o.showreal), g.isShowShowreal = !0
      }
      wt();
      const {
        t: l
      } = tt(), n = {
        title: {
          phrase_1: l("main_page.title.phrase_1"),
          phrase_2: l("main_page.title.phrase_2"),
          phrase_3: l("main_page.title.phrase_3"),
          phrase_4: l("main_page.title.phrase_4"),
          ukrainian: l("main_page.title.ukrainian")
        }
      };
      return (i, w) => {
        const u = ht,
          I = vt,
          m = gt,
          k = $t,
          y = xt;
        return a(), d("section", Ft, [e("h3", Ot, _(i.$t("about.subtitle")), 1), C(u, {
          class: "about-first__icon"
        }), e("p", Xt, _(i.$t("btn.scroll")) + " ↓", 1), e("div", Ht, [e("h1", Rt, [(a(!0), d(T, null, L(o.title, s => (a(), d(T, null, [e("span", null, _(s), 1), jt], 64))), 256))]), (a(!0), d(T, null, L(o.news, s => {
          var v, c, M, P, N, S, q, D, B;
          return a(), d("div", Gt, [s.type === "project" ? (a(), Y(I, {
            key: 0,
            text: (v = s.news_block) == null ? void 0 : v.news_description,
            title: (c = s.news_block) == null ? void 0 : c.news_title,
            image: (M = s.news_block) == null ? void 0 : M.news_background,
            link: (P = s.news_block) == null ? void 0 : P.link
          }, null, 8, ["text", "title", "image", "link"])) : X("", !0), s.type === "vacancy" ? (a(), Y(m, {
            key: 1,
            class: "alternate",
            text: (N = s.news_block) == null ? void 0 : N.news_description,
            title: (S = s.news_block) == null ? void 0 : S.news_title
          }, null, 8, ["text", "title"])) : X("", !0), s.type === "award" ? (a(), Y(k, {
            key: 2,
            text: (q = s.news_block) == null ? void 0 : q.news_description,
            title: (D = s.news_block) == null ? void 0 : D.news_title,
            image: (B = s.news_block) == null ? void 0 : B.news_background
          }, null, 8, ["text", "title", "image"])) : X("", !0)])
        }), 256))]), C(y, {
          onClick: p,
          class: "about-first__video",
          alt: `${i.pageName}, ${i.$t("photo_word")} ${("photoIndex"in i?i.photoIndex:t(R))(200)}`
        }, null, 8, ["alt"]), e("div", Ut, [e("p", Jt, _(n.title.phrase_1) + " " + _(n.title.ukrainian) + " " + _(n.title.phrase_2) + _(n.title.phrase_3) + " " + _(n.title.phrase_4) + ". ", 1), e("p", Qt, _(o.description), 1)]), e("div", Yt, [e("p", Zt, _(i.$t("about.text")), 1), e("ul", Kt, [(a(!0), d(T, null, L(o.socials, s => (a(), d("li", null, [e("a", {
          href: s.social_link,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "link-2"
        }, _(s.social_name), 9, te)]))), 256))])])])
      }
    }
  }),
  oe = "" + globalThis.__publicAssetsURL("img/icon/quote.svg"),
  se = {
    class: "about-believe"
  },
  ne = ["innerHTML"],
  ie = {
    key: 0,
    class: "about-believe__quote"
  },
  ae = {
    class: "text-p3 about-believe__phrase"
  },
  re = {
    class: "text-p3 about-believe__author"
  },
  le = ["alt"],
  ce = {
    class: "about-believe__info"
  },
  _e = ["innerHTML"],
  ue = z({
    __name: "Believe",
    props: {
      title: {},
      author: {},
      quote: {},
      description: {}
    },
    setup($) {
      return (o, g) => (a(), d("div", se, [e("div", {
        class: "title-h1t about-believe__title",
        innerHTML: o.title
      }, null, 8, ne), o.quote && o.author ? (a(), d("div", ie, [e("p", ae, _(o.quote), 1), e("p", re, [e("img", {
        src: oe,
        alt: o.author
      }, null, 8, le), j(" " + _(o.author), 1)])])) : X("", !0), e("div", ce, [e("div", {
        class: "text-p1 about-believe__text",
        innerHTML: o.description
      }, null, 8, _e)])]))
    }
  }),
  de = ["data-cursor-text"],
  pe = ["src", "alt"],
  Z = 1,
  me = 60,
  he = z({
    __name: "Slider2",
    props: {
      photos: {},
      photosCreative: {},
      pageName: {}
    },
    setup($) {
      const o = $,
        {
          showCursor: g,
          hideCursor: b
        } = et(),
        r = Ct("is-creative");
      let p = E(!1);
      const l = E(),
        n = E();
      let i = 0,
        w = Z,
        u = 0,
        I = [],
        m = 0,
        k = 0,
        y = 0,
        s = 0;

      function v(h) {
        p.value && (y = h.clientX)
      }

      function c(h) {
        p.value = !0, y = k = h.clientX
      }

      function M(h) {
        p.value = !1, y = h.clientX
      }
      async function P() {
        var A, f;
        const h = document.querySelectorAll(".about-slider__img");
        try {
          await Promise.all([...h].map(W => new Promise(F => {
            W.complete && F(null), W.onload = F, W.onerror = F
          })))
        } catch (W) {
          console.log(W);
          return
        }
        i = ((A = n.value) == null ? void 0 : A.clientWidth) ?? 0, s = 8 / 1440 * window.innerWidth, I = [...((f = l.value) == null ? void 0 : f.querySelectorAll(".about-slider__slide")) ?? []]
      }
      const N = 1e3 / me;
      let S = Date.now();

      function q() {
        if (window.innerWidth < 1200) return;
        const h = Date.now(),
          A = h - S;
        h - S < N || (S = h - A % N, m = k - y, k = y, m *= .9, w += m * .1, w *= .95, w = w > 0 ? Math.max(Z, w) : Math.min(-Z, w), u += w, u >= i && (u = 0), u <= -i && (u = 0), I.forEach((f, W) => {
          u >= 0 ? u >= f.offsetLeft + f.clientWidth ? f.style.transform = `translateX(${(i-u+s)%i}px)` : f.style.transform = `translateX(${-u}px)` : Math.abs(u) >= i - f.offsetLeft - f.clientWidth ? f.style.transform = `translateX(${(-i-u-s)%i}px)` : f.style.transform = `translateX(${-u}px)`
        }))
      }

      function D(h) {
        p.value = !1
      }
      let B;

      function J() {
        B = new Tt(".about-slider", {
          spaceBetween: 8 / 414 * window.innerWidth,
          slidesOffsetAfter: 16 / 414 * window.innerWidth,
          slidesOffsetBefore: 16 / 414 * window.innerWidth,
          slidesPerView: "auto"
        })
      }
      U(async () => {
        window.innerWidth < 1200 ? J() : (await P(), Q(), document.addEventListener("mouseleave", D)), window.addEventListener("focus", P)
      }), st(() => {
        x.ticker.remove(q), document.removeEventListener("mouseleave", D), B && B.destroy(!0), H && H.disconnect(), window.removeEventListener("focus", P)
      });
      let H;

      function Q() {
        const h = new IntersectionObserver(A => {
          A.forEach(f => {
            f.isIntersecting ? x.ticker.add(q) : x.ticker.remove(q)
          })
        }, {
          threshold: 0
        });
        l.value && h.observe(l.value)
      }
      return (h, A) => (a(), d("section", {
        ref_key: "section",
        ref: l,
        class: "about-slider swiper"
      }, [e("div", {
        ref_key: "wrapper",
        ref: n,
        class: nt(["about-slider__wrapper swiper-wrapper", {
          active: t(p)
        }]),
        "data-cursor": "#C9F7CA",
        "data-cursor-text": h.$t("drag"),
        onPointerenter: A[0] || (A[0] = f => t(g)(h.$t("drag"), "#C9F7CA")),
        onPointerleave: A[1] || (A[1] = (...f) => t(b) && t(b)(...f)),
        onPointerdown: c,
        onPointermove: v,
        onPointerup: M
      }, [(a(!0), d(T, null, L(o.photos.length, f => (a(), d("div", {
        key: f,
        class: "about-slider__slide swiper-slide"
      }, [e("img", {
        class: "about-slider__img",
        src: t(r) ? o.photosCreative[f - 1] : o.photos[f - 1],
        alt: `${h.pageName}, ${h.$t("photo_word")} ${("photoIndex"in h?h.photoIndex:t(R))(300,f)}`
      }, null, 8, pe)]))), 128))], 42, de)], 512))
    }
  }),
  fe = bt(he, [
    ["__scopeId", "data-v-b275d87c"]
  ]),
  we = $ => (Wt("data-v-f55b625f"), $ = $(), Lt(), $),
  be = {
    class: "clients",
    id: "clients"
  },
  ve = {
    class: "text-p3 clients__subtitle"
  },
  ge = {
    class: "text-p1 clients__text"
  },
  $e = {
    class: "clients__categories"
  },
  ye = ["onClick"],
  xe = {
    key: 0,
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  },
  ke = we(() => e("circle", {
    cx: "8",
    cy: "8",
    r: "5",
    stroke: "white",
    "stroke-width": "1.33333",
    "stroke-linecap": "round"
  }, null, -1)),
  Ce = [ke],
  Se = {
    class: "text-p1 link-2"
  },
  Ae = {
    class: "text-p1"
  },
  Ie = {
    class: "clients__content"
  },
  Me = ["data-cursor-text"],
  Pe = {
    class: "clients__list"
  },
  K = 1e4,
  Te = z({
    __name: "Clients",
    props: {
      description: {},
      clients_categories: {}
    },
    setup($) {
      const o = $,
        {
          showCursor: g,
          hideCursor: b
        } = et(),
        r = E(o.clients_categories[0].id),
        p = Nt(() => o.clients_categories.find(m => m.id === r.value));
      let l = E(!1),
        n = 0;
      const i = () => {
        const m = Date.now();
        m - n >= K && (u(), n = m)
      };

      function w() {
        n = Date.now()
      }
      const u = () => {
        const m = o.clients_categories.indexOf(p.value);
        r.value = o.clients_categories[(m + 1) % o.clients_categories.length].id
      };
      G(r, async (m, k) => {
        l.value = !0;
        const y = o.clients_categories.indexOf(p.value);
        w(), x.set(".clients__item", {
          display: v => y === v ? "-webkit-box" : "none"
        });

        function s() {
          const v = document.querySelector(`.clients__item:nth-child(${y+1})`);
          if (!v) return;
          v.style.fontSize = "", v.style["-webkit-line-clamp"] = "";
          const c = v.cloneNode(!0),
            M = v.getBoundingClientRect();
          c.style.position = "fixed", c.style.width = M.width + "px", c.style.left = "0", c.style.top = "0", c.style.zIndex = "100", c.style["-webkit-line-clamp"] = "unset", c.style.opacity = "0", c.style.visibility = "hidden", c.style.pointerEvents = "none", document.body.appendChild(c);
          let P = c.getBoundingClientRect(),
            S = +getComputedStyle(c).fontSize.split("px")[0];
          for (; P.height > M.height;) S -= 4, c.style.fontSize = S + "px", P = c.getBoundingClientRect();
          v.style.fontSize = S + "px", v.style["-webkit-line-clamp"] = "unset", c.remove()
        }
        s(), await Bt(), x.fromTo(".clients__category svg circle", {
          drawSVG: 0
        }, {
          duration: K / 1e3,
          drawSVG: "0% 100%",
          ease: "none"
        }), x.fromTo(`.clients__item:nth-child(${y+1}) > *`, {
          opacity: 0
        }, {
          duration: .05,
          opacity: 1,
          delay: .1,
          stagger: {
            each: .03,
            from: "random"
          },
          onComplete: () => {
            l.value = !1
          }
        })
      }), U(() => {
        x.ticker.add(i), x.fromTo(".clients__category svg circle", {
          drawSVG: 0
        }, {
          duration: K / 1e3,
          drawSVG: "0% 100%",
          ease: "none"
        }), new ot(".clients__item", {
          type: "words"
        })
      }), st(() => {
        x.ticker.remove(i)
      });

      function I(m) {
        r.value = m
      }
      return (m, k) => {
        const y = ht;
        return a(), d("section", be, [e("h4", ve, _(m.$t("about.clients_label")), 1), e("p", ge, _(o.description), 1), e("div", $e, [(a(!0), d(T, null, L(o.clients_categories, (s, v) => (a(), d("button", {
          key: v,
          onClick: c => t(l) ? !1 : I(s.id),
          class: nt(["clients__category", {
            active: t(r) === s.id
          }])
        }, [t(r) === s.id ? (a(), d("svg", xe, Ce)) : X("", !0), e("span", Se, _(s.name), 1), e("sup", Ae, _(s.clients.length), 1)], 10, ye))), 128))]), e("div", Ie, [e("div", {
          class: "clients__next",
          "data-cursor": "#C9F7CA",
          "data-cursor-text": m.$t("next"),
          onClick: u,
          onPointerenter: k[0] || (k[0] = s => t(g)(m.$t("next"))),
          onPointerleave: k[1] || (k[1] = (...s) => t(b) && t(b)(...s))
        }, null, 40, Me), e("div", Pe, [(a(!0), d(T, null, L(m.clients_categories, (s, v) => (a(), d("div", {
          key: s.id,
          class: "title-h1 clients__item"
        }, [(a(!0), d(T, null, L(s.clients, (c, M) => (a(), d(T, {
          key: c.id
        }, [e("span", null, _(c.name), 1), j(_(M + 1 === s.clients.length ? "." : ", "), 1)], 64))), 128))]))), 128))])]), C(y, {
          class: "clients__icon"
        })])
      }
    }
  }),
  Ne = bt(Te, [
    ["__scopeId", "data-v-f55b625f"]
  ]),
  Be = ["data-cursor-text"],
  We = {
    class: "accordion active"
  },
  Le = {
    class: "title-h0 accordion__value"
  },
  qe = {
    class: "text-p1 accordion__number"
  },
  Ve = {
    class: "text-p3 accordion__title"
  },
  Ee = {
    class: "text-p1 accordion__text"
  },
  ze = z({
    __name: "Accordion",
    props: {
      benefits: {}
    },
    setup($) {
      const o = $,
        g = E(!0);
      let b = !1;
      const {
        showCursor: r,
        hideCursor: p
      } = et(), {
        t: l
      } = tt(), n = () => {
        r(g.value ? l("accordion.expand") : l("accordion.collapse"))
      };
      return G(g, () => {
        n()
      }), G(g, () => {
        window.innerWidth <= 1200 || b || (g.value ? x.to(".accordion__item:not(:first-child)", {
          height: i => i === 0 ? "5.55rem" : i === 1 ? "4.44rem" : "3.33rem",
          marginTop: "0.6944444444rem",
          onStart() {
            b = !0
          },
          onComplete() {
            b = !1
          }
        }) : x.timeline({
          onStart() {
            b = !0
          },
          onComplete() {
            b = !1
          }
        }).to(".accordion__item:not(:first-child)", {
          height: "auto",
          marginTop: "3.3333333333rem"
        }).fromTo(".accordion__item:not(:first-child) .accordion__title > div, .accordion__item:not(:first-child) .accordion__number > div, .accordion__item:not(:first-child) .accordion__text > div", {
          opacity: 0
        }, {
          duration: .05,
          opacity: 1,
          delay: .3,
          stagger: {
            each: .005,
            from: "random"
          }
        }, 0))
      }), U(() => {
        document.querySelectorAll(".accordion__number, .accordion__title, .accordion__text").forEach(i => {
          new ot(i, {
            type: "words"
          })
        })
      }), (i, w) => (a(), d("section", {
        class: "about-accordion",
        "data-cursor": "#A2A2FC",
        "data-cursor-text": t(g) ? i.$t("accordion.expand") : i.$t("accordion.collapse"),
        onClick: w[0] || (w[0] = u => g.value = !t(g)),
        onPointerenter: n,
        onPointerleave: w[1] || (w[1] = (...u) => t(p) && t(p)(...u))
      }, [e("div", We, [(a(!0), d(T, null, L(o.benefits, (u, I) => (a(), d("div", {
        key: I,
        class: "accordion__item"
      }, [e("p", Le, _(u.benefit_number), 1), e("p", qe, "(0" + _(I + 1) + ".)", 1), e("h3", Ve, _(u.benefit_title), 1), e("p", Ee, _(u.benefit_description), 1)]))), 128))])], 40, Be))
    }
  }),
  De = {
    class: "about-meet"
  },
  Fe = {
    class: "text-p3 about-meet__subtitle"
  },
  Oe = {
    class: "about-meet__news"
  },
  Xe = {
    class: "text-p1 about-meet__text"
  },
  He = {
    class: "title-h1t about-meet__title"
  },
  Re = {
    class: "about-meet__frame"
  },
  je = ["src", "alt"],
  Ge = {
    class: "about-meet__frame"
  },
  Ue = ["src", "alt"],
  Je = z({
    __name: "Meet",
    props: {
      description: {},
      photos: {},
      news: {},
      pageName: {}
    },
    setup($) {
      const o = $,
        g = wt(),
        b = E(!1);
      return (r, p) => {
        const l = yt,
          n = St;
        return a(), d("section", De, [e("h4", Fe, _(r.$t("about.meet.contact")), 1), e("div", Oe, [C(l, {
          news: o.news,
          "has-email": !0
        }, null, 8, ["news"])]), e("p", Xe, _(o.description), 1), e("h2", He, [C(n, {
          to: t(g)("/team"),
          onMouseenter: p[0] || (p[0] = i => b.value = !0),
          onMouseleave: p[1] || (p[1] = i => b.value = !1)
        }, {
          default: qt(() => [j(_(r.$t("about.meet.one")), 1)]),
          _: 1
        }, 8, ["to"]), j(" " + _(r.$t("about.meet.two")), 1)]), e("div", {
          class: nt(["about-meet__photos", {
            active: t(b)
          }])
        }, [e("div", Re, [e("img", {
          src: o.photos[0],
          alt: `${r.pageName}, ${r.$t("photo_word")} ${("photoIndex"in r?r.photoIndex:t(R))(2100)}`,
          class: "about-meet__photo"
        }, null, 8, je)]), e("div", Ge, [e("img", {
          src: o.photos[1],
          alt: `${r.pageName}, ${r.$t("photo_word")} ${("photoIndex"in r?r.photoIndex:t(R))(2200)}`,
          class: "about-meet__photo"
        }, null, 8, Ue)])], 2)])
      }
    }
  }),
  mt = () => {
    window.innerWidth >= 1200 && document.querySelectorAll(".about-first__news").forEach(o => {
      O.create({
        trigger: o,
        start: () => "top bottom",
        end: "bottom top",
        scrub: .5,
        animation: x.to(o, {
          y: -80 / 1440 * window.innerWidth,
          ease: "linear"
        })
      })
    }), new ot(".about-first__title", {
      type: "words"
    }), x.from(".about-first__title > div", {
      duration: .05,
      opacity: 0,
      delay: .3,
      stagger: {
        each: .025,
        from: "random"
      }
    }), O.create({
      trigger: ".about-first__project",
      scrub: .2,
      animation: x.to(".about-first__project", {
        y: -80,
        ease: "none"
      })
    }), O.create({
      trigger: ".about-first__vacancy",
      scrub: .2,
      animation: x.to(".about-first__vacancy", {
        y: -80,
        ease: "none"
      })
    }), O.create({
      trigger: ".about-first__award",
      scrub: .2,
      animation: x.to(".about-first__award", {
        y: -80,
        ease: "none"
      })
    }), At(), It()
  },
  Qe = {
    class: "about-page"
  },
  ao = z({
    __name: "about",
    async setup($) {
      var m, k, y, s, v, c, M, P, N, S;
      let o, g;
      const {
        base: b
      } = ft(), {
        locale: r
      } = tt(), {
        data: p
      } = ([o, g] = Vt(() => Pt(`about-${r.value}`, () => $fetch("/api/about", {
        query: {
          locale: r.value
        }
      }))), o = await o, g(), o), l = ((k = (m = p.value) == null ? void 0 : m.data) == null ? void 0 : k.page) ?? null;
      if (!l) throw Mt("No page data!");
      const n = l.fields,
        i = ((s = (y = p.value) == null ? void 0 : y.data) == null ? void 0 : s.awards) ?? [],
        w = (c = (v = p.value) == null ? void 0 : v.data) == null ? void 0 : c.layout,
        u = ((P = (M = p.value) == null ? void 0 : M.data) == null ? void 0 : P.client_categories) ?? [],
        I = ((S = (N = p.value) == null ? void 0 : N.data) == null ? void 0 : S.news) ?? [];
      return zt(l), G(() => b.isLoading, () => {
        mt()
      }), U(() => {
        b.isLoading || mt()
      }), st(() => {
        O.killAll()
      }), (q, D) => {
        var it, at, rt, lt, ct, _t, ut, dt, pt;
        const B = ee,
          J = ue,
          H = fe,
          Q = Ne,
          h = ze,
          A = Et,
          f = kt,
          W = Je,
          F = Dt;
        return a(), d("div", Qe, [C(B, {
          title: [t(n).title_1, t(n).title_2, t(n).title_3, t(n).title_4, t(n).title_5, t(n).title_6],
          description: t(n).description,
          socials: ((it = t(w)) == null ? void 0 : it.social_blocks.map(V => V.social_detail)) ?? [],
          hashtag: (at = t(w)) == null ? void 0 : at.hashtag,
          showreal: (rt = t(w)) == null ? void 0 : rt.showreel_video,
          "showreal-iframe": ((lt = t(w)) == null ? void 0 : lt.showreel_iframe) ?? null,
          news: t(I),
          "page-name": ((ct = t(l)) == null ? void 0 : ct.meta_title) ?? ""
        }, null, 8, ["title", "description", "socials", "hashtag", "showreal", "showreal-iframe", "news", "page-name"]), C(J, {
          title: t(n).big_title,
          author: t(n).quote_name,
          quote: t(n).quote_text,
          description: t(n).middle_description
        }, null, 8, ["title", "author", "quote", "description"]), C(H, {
          photos: t(n).team_photos,
          "photos-creative": t(n).team_photos_2,
          "page-name": ((_t = t(l)) == null ? void 0 : _t.meta_title) ?? ""
        }, null, 8, ["photos", "photos-creative", "page-name"]), C(Q, {
          description: t(n).our_clients_description,
          clients_categories: t(u)
        }, null, 8, ["description", "clients_categories"]), C(h, {
          benefits: t(n).benefits_block.map(V => V.benefit)
        }, null, 8, ["benefits"]), C(A, {
          photos: t(n).award_photos,
          "photos-mobile": t(n).award_photos,
          "page-name": ((ut = t(l)) == null ? void 0 : ut.meta_title) ?? ""
        }, null, 8, ["photos", "photos-mobile", "page-name"]), C(f, {
          description: t(n).description_for_awards,
          awards: t(i)
        }, null, 8, ["description", "awards"]), C(W, {
          photos: t(n).two_photos_for_footer,
          description: t(n).description_for_footer,
          news: t(I).filter(V => V.type === "vacancy"),
          "page-name": t(l).meta_title ?? ""
        }, null, 8, ["photos", "description", "news", "page-name"]), C(F, {
          socials: ((dt = t(w)) == null ? void 0 : dt.social_blocks.map(V => V.social_detail)) ?? [],
          hashtag: (pt = t(w)) == null ? void 0 : pt.hashtag
        }, null, 8, ["socials", "hashtag"])])
      }
    }
  });
export {
  ao as
  default
};