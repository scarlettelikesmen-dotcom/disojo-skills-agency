/* https://grape.ua/_nuxt/contact.Bt7mUDAx.js */
import {
  b as z,
  j as G,
  c as Z,
  p as U,
  _ as R,
  g as X,
  k as Y,
  f as tt,
  s as et,
  a as ot,
  h as st,
  e as at,
  i as nt
} from "./entry.DN75vySF.js";
import {
  g as N
} from "./index.BfwNHAfF.js";
import {
  j as I,
  a as B,
  b as J,
  C as K,
  o as O,
  M as m,
  N as h,
  U as t,
  J as y,
  $ as S,
  u as o,
  Z as it,
  W as l,
  V as E,
  L as C,
  aa as ct
} from "./swiper-vue.BTZulNLT.js";
import {
  s as lt,
  _ as rt
} from "./setPageMeta.BIChswHP.js";
import {
  u as _t
} from "./base.Cowcg-OE.js";
const dt = {
    class: "contact-first"
  },
  pt = ["innerHTML"],
  ut = {
    class: "contact-first__slider"
  },
  mt = {
    class: "contact-first__images"
  },
  ht = ["src", "alt"],
  ft = ["data-cursor-text"],
  gt = ["data-cursor-text"],
  vt = {
    class: "contact__dots"
  },
  $t = {
    class: "text-p3 contact-first__place"
  },
  wt = {
    class: "contact-first__info"
  },
  Ct = ["href"],
  yt = ["href"],
  kt = {
    class: "text-p1 contact-first__count"
  },
  qt = ["innerHTML"],
  bt = {
    class: "contact-first__some"
  },
  St = {
    class: "text-p3"
  },
  It = ["href"],
  Tt = {
    class: "contact-first__some"
  },
  Ht = {
    class: "text-p3"
  },
  Ft = ["href"],
  Mt = I({
    __name: "First",
    props: {
      title_1: {},
      title_2: {},
      request_us_email: {},
      join_team_email: {},
      photos: {},
      city: {},
      email: {},
      phone: {},
      address: {},
      pageName: {}
    },
    setup(_) {
      const r = _,
        {
          showCursor: d,
          hideCursor: p
        } = z(),
        f = B(null),
        a = B(0);
      let s = !1,
        g, c;
      const v = () => {
          if (f.value) {
            const e = new Date,
              n = new Date(e.toLocaleString("en-US", {
                timeZone: "Europe/Kiev"
              })),
              i = n.getHours(),
              u = n.getMinutes();
            f.value.innerText = `${i<10?`0${i}`:i}:${u<10?`0${u}`:u}`
          }
        },
        $ = () => {
          s || (a.value === 0 ? a.value = r.photos.length - 1 : a.value -= 1)
        },
        w = () => {
          s || (a.value + 1 === r.photos.length ? a.value = 0 : a.value += 1)
        };
      J(a, (e, n) => {
        clearTimeout(c), c = setTimeout(w, 5e3), N.timeline({
          onStart: () => {
            s = !0
          },
          onComplete: () => {
            s = !1
          }
        }).set(`.contact-first__img:nth-child(${n+1})`, {
          display: "none"
        }).set(`.contact-first__img:nth-child(${e+1})`, {
          display: "block"
        }).fromTo(`.contact-first__img:nth-child(${e+1})`, {
          opacity: 0,
          scale: 1.08,
          zIndex: 2
        }, {
          opacity: 1,
          scale: 1,
          zIndex: 2
        }).fromTo(`.contact-first__img:nth-child(${n+1})`, {
          opacity: 1,
          scale: 1,
          zIndex: 2
        }, {
          opacity: 0,
          scale: 1.08,
          zIndex: 2
        }, 0)
      }), K(() => {
        b(), N.set(".contact-first__img:not(:first-child)", {
          opacity: 0
        }), window.innerWidth < 1200 && (document.querySelector(".contact-first__slider").style.height = window.innerHeight - document.querySelector(".contact-first__slider").offsetTop - parseInt(window.getComputedStyle(document.querySelector(".contact-first__slider")).getPropertyValue("padding-top")) / 2 + "px"), v(), g = G(v, 1e3), c = setTimeout(w, 5e3)
      }), O(() => {
        clearInterval(g), clearInterval(c)
      });
      const k = Z("feedback-form-popup");

      function q() {
        k.value = !k.value
      }

      function b() {
        const e = document.querySelector(".contact-first__title"),
          n = e == null ? void 0 : e.querySelector("em");
        n && n.addEventListener("click", q)
      }
      return (e, n) => (m(), h("section", dt, [t("h1", {
        class: "title-h1t contact-first__title",
        innerHTML: e.title_2
      }, null, 8, pt), t("div", ut, [t("div", mt, [(m(!0), h(y, null, S(e.photos, (i, u) => (m(), h("img", {
        key: i,
        src: i,
        class: "contact-first__img",
        alt: `${e.pageName}, ${e.$t("photo_word")} ${("photoIndex"in e?e.photoIndex:o(U))(400,u)}`
      }, null, 8, ht))), 128))]), t("div", {
        class: "contact-first__prev",
        "data-cursor": "#C9F7CA",
        "data-cursor-text": e.$t("prev"),
        onClick: $,
        onPointerenter: n[0] || (n[0] = i => o(d)(e.$t("prev"), "#C9F7CA")),
        onPointerleave: n[1] || (n[1] = (...i) => o(p) && o(p)(...i))
      }, null, 40, ft), t("div", {
        class: "contact-first__next",
        "data-cursor": "#C9F7CA",
        "data-cursor-text": e.$t("next"),
        onClick: w,
        onPointerenter: n[2] || (n[2] = i => o(d)(e.$t("next"), "#C9F7CA")),
        onPointerleave: n[3] || (n[3] = (...i) => o(p) && o(p)(...i))
      }, null, 40, gt), t("div", vt, [(m(!0), h(y, null, S(e.photos, (i, u) => (m(), h("div", {
        key: i,
        class: it(["contact__dot", {
          active: u === o(a)
        }])
      }, null, 2))), 128))]), t("p", $t, l(e.city), 1), t("div", wt, [t("a", {
        class: "text-p1 link-2 link-2--light",
        href: `mailto:${e.email}`
      }, l(e.email), 9, Ct), t("a", {
        class: "text-p1 link-2 link-2--light",
        href: `tel:${e.phone.replace(/[\s-]/g,"")}`
      }, l(e.phone), 9, yt)]), t("p", kt, l(o(a) + 1) + " / " + l(e.photos.length), 1), t("p", {
        class: "text-p3 contact-first__address",
        innerHTML: e.address
      }, null, 8, qt), t("p", {
        ref_key: "timeElem",
        ref: f,
        class: "title-h0 contact-first__time"
      }, "00:00", 512)]), t("div", bt, [t("h4", St, l(e.$t("contact.request")), 1), t("a", {
        class: "text-p1 link-2",
        href: `mailto:${e.join_team_email}`
      }, l(e.join_team_email), 9, It)]), t("div", Tt, [t("h4", Ht, l(e.$t("contact.join")), 1), t("a", {
        class: "text-p1 link-2",
        href: `mailto:${e.request_us_email}`
      }, l(e.request_us_email), 9, Ft)])]))
    }
  }),
  xt = {},
  Pt = {
    width: "16",
    height: "24",
    viewBox: "0 0 16 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  Vt = t("g", {
    "clip-path": "url(#clip0_2225_33436)"
  }, [t("path", {
    d: "M0.868969 15.656C2.94097 15.04 3.83697 13.976 3.78097 11.064H0.868969V4.96H6.97297V11.064C6.97297 14.704 5.34897 17.56 0.868969 18.68V15.656ZM9.77297 18.68V15.656C11.845 15.04 12.741 13.976 12.685 11.064H9.77297V4.96H15.877V11.064C15.877 14.704 14.253 17.56 9.77297 18.68Z",
    fill: "#261723"
  })], -1),
  At = t("defs", null, [t("clipPath", {
    id: "clip0_2225_33436"
  }, [t("rect", {
    width: "16",
    height: "24",
    fill: "white"
  })])], -1),
  Lt = [Vt, At];

function jt(_, r) {
  return m(), h("svg", Pt, Lt)
}
const Wt = R(xt, [
    ["render", jt]
  ]),
  Nt = {
    class: "contact-map"
  },
  Bt = ["data-cursor-text"],
  Et = {
    class: "H1 contact-map__title"
  },
  Dt = t("br", null, null, -1),
  zt = {
    class: "H1-link"
  },
  Zt = {
    class: "contact-map__qoutes"
  },
  Ut = {
    class: "contact-map__qoutes-wrap"
  },
  Jt = {
    class: "text-p1 contact-map-quote__text"
  },
  Kt = {
    class: "text-p3 contact-map-quote__author"
  },
  Ot = t("svg", {
    class: "contact-map-quote__icon",
    width: "11",
    height: "24",
    viewBox: "0 0 11 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [t("path", {
    d: "M0 0V24H9.69988C10.2372 24 10.4242 23.2098 9.9618 22.9361C5.31455 20.1865 1.89065 15.7969 0.578333 10.604C0 8.31551 0 5.54368 0 0Z",
    fill: "white"
  })], -1),
  Qt = {
    class: "contact-map-quote__avatar"
  },
  Gt = ["src", "alt"],
  Rt = t("div", {
    class: "contact-map-quote__avatar-online"
  }, null, -1),
  Xt = {
    class: "btn-secondary contact-map__btn"
  },
  Yt = I({
    __name: "Map",
    props: {
      reviews: {},
      pageName: {}
    },
    setup(_) {
      const {
        showCursor: r,
        hideCursor: d
      } = z(), p = Z("feedback-form-popup");

      function f() {
        p.value = !p.value
      }
      return (a, s) => {
        const g = Wt;
        return m(), h("section", Nt, [t("div", {
          class: "contact-map__wrap H1-link-hover-target",
          "data-cursor": "#C9F7CA",
          "data-cursor-text": a.$t("btn.touch"),
          onClick: f,
          onPointerenter: s[0] || (s[0] = c => o(r)(a.$t("btn.touch"), "#C9F7CA")),
          onPointerleave: s[1] || (s[1] = (...c) => o(d) && o(d)(...c))
        }, [t("h2", Et, [E(l(a.$t("contact.map.one")), 1), Dt, t("span", zt, l(a.$t("contact.map.two")), 1), E("... ")]), t("div", Zt, [t("div", Ut, [(m(!0), h(y, null, S([...a.reviews, ...a.reviews], (c, v) => (m(), h("div", {
          key: v,
          class: "contact-map-quote"
        }, [C(g, {
          class: "contact-map-quote__quote"
        }), t("p", Jt, l(c.testimonial.testimonial_quote), 1), t("p", Kt, l(c.testimonial.author), 1), Ot, t("div", Qt, [t("img", {
          src: c.testimonial.testimonial_photo,
          alt: `${a.pageName}, ${a.$t("photo_word")} ${("photoIndex"in a?a.photoIndex:o(U))(500)}`
        }, null, 8, Gt), Rt])]))), 128))])]), t("button", Xt, l(a.$t("btn.touch")), 1)], 40, Bt)])
      }
    }
  }),
  D = () => {
    const _ = document.querySelector(".contact-map__qoutes-wrap");
    if (_) {
      parseInt(window.getComputedStyle(_).paddingLeft);
      const d = parseInt(window.getComputedStyle(document.querySelector(".contact-map-quote:last-child")).marginTop);
      X.to(_, {
        duration: window.innerWidth < 1200 ? _.scrollWidth / 50 : _.scrollHeight / 50,
        ease: "none",
        [window.innerWidth < 1200 ? "x" : "y"]: window.innerWidth < 1200 ? -(_.scrollWidth / 2) : -(_.scrollHeight / 2 + d / 2),
        repeat: -1,
        repeatDelay: 0
      })
    }
    const r = document.querySelector(".contact-first__title");
    r && Y(r), tt(), et()
  },
  ne = I({
    __name: "contact",
    async setup(_) {
      var c, v, $;
      let r, d;
      const {
        base: p
      } = _t(), {
        locale: f
      } = ot(), {
        data: a
      } = ([r, d] = ct(() => nt(`contact-${f.value}`, () => $fetch("/api/contact", {
        query: {
          locale: f.value
        }
      }))), r = await r, d(), r), s = ((c = a.value) == null ? void 0 : c.data) ?? null;
      if (!s) throw st("No page data!");
      lt(s == null ? void 0 : s.page);
      const g = ($ = (v = a.value) == null ? void 0 : v.data) == null ? void 0 : $.layout;
      return J(() => p.isLoading, () => {
        D()
      }), K(() => {
        p.isLoading || D()
      }), O(() => {
        at.killAll()
      }), (w, k) => {
        var n, i, u, T, H, F, M, x, P, V, A, L, j, W;
        const q = Mt,
          b = Yt,
          e = rt;
        return m(), h(y, null, [C(q, {
          title_1: (n = o(s)) == null ? void 0 : n.page.fields.title_1,
          title_2: (i = o(s)) == null ? void 0 : i.page.fields.title_2,
          request_us_email: (u = o(s)) == null ? void 0 : u.page.fields.request_us_email,
          join_team_email: (T = o(s)) == null ? void 0 : T.page.fields.join_team_email,
          photos: (H = o(s)) == null ? void 0 : H.page.fields.photo_block[0].location.location_photos,
          city: (F = o(s)) == null ? void 0 : F.page.fields.photo_block[0].location.city,
          email: (M = o(s)) == null ? void 0 : M.page.fields.photo_block[0].location.location_email,
          phone: (x = o(s)) == null ? void 0 : x.page.fields.photo_block[0].location.location_phone,
          address: (P = o(s)) == null ? void 0 : P.page.fields.photo_block[0].location.location_address,
          "page-name": (V = o(s)) == null ? void 0 : V.page.meta_title
        }, null, 8, ["title_1", "title_2", "request_us_email", "join_team_email", "photos", "city", "email", "phone", "address", "page-name"]), C(b, {
          reviews: (A = o(s)) == null ? void 0 : A.page.fields.testimonials_block,
          "page-name": (L = o(s)) == null ? void 0 : L.page.meta_title
        }, null, 8, ["reviews", "page-name"]), C(e, {
          socials: ((j = o(g)) == null ? void 0 : j.social_blocks.map(Q => Q.social_detail)) ?? [],
          hashtag: (W = o(g)) == null ? void 0 : W.hashtag
        }, null, 8, ["socials", "hashtag"])], 64)
      }
    }
  });
export {
  ne as
  default
};