/* https://grape.ua/_nuxt/_handle_.CxeKCtIe.js */
import {
  u as st
} from "./base.Cowcg-OE.js";
import {
  j as V,
  a as T,
  k as ne,
  C as U,
  M as t,
  N as n,
  U as e,
  u as o,
  W as v,
  _ as k,
  J as b,
  $ as M,
  P as Tt,
  a3 as re,
  R as E,
  o as Y,
  a9 as nt,
  L as C,
  Q as ie,
  ab as it,
  ac as rt,
  X as K,
  Y as x,
  q as ae,
  Z as at,
  n as ct,
  ae as Vt,
  af as qt,
  aa as Mt,
  b as It
} from "./swiper-vue.BTZulNLT.js";
import {
  i as S
} from "./isVideo.BdcvccDS.js";
import {
  b as ce,
  a as le,
  o as lt,
  _ as B,
  q as dt,
  p as de,
  d as Ot,
  n as Ft,
  r as z,
  g as X,
  t as _t,
  c as pt,
  e as ut,
  k as Wt,
  m as Ht,
  f as Nt,
  s as Bt,
  v as At,
  h as Et,
  i as Rt
} from "./entry.DN75vySF.js";
import {
  _ as Dt
} from "./EmptyWithProps.D19AbZT0.js";
import {
  s as Ut,
  _ as Zt
} from "./setPageMeta.BIChswHP.js";
const Qt = {
    class: "project-first__image"
  },
  Xt = ["src"],
  Yt = {
    key: 1,
    class: "project-first__img"
  },
  zt = ["src", "alt"],
  Gt = e("div", {
    class: "project-first__overlay"
  }, null, -1),
  Jt = {
    class: "project-first__wrap"
  },
  Kt = {
    class: "project-first__content"
  },
  xt = {
    class: "text-p2 project-first__name"
  },
  eo = {
    class: "text-p2 project-first__year"
  },
  to = {
    class: "title-h1 project-first__title project-first__clents"
  },
  oo = {
    class: "title-h2 project-first__title"
  },
  so = ["innerHTML"],
  no = {
    class: "project-first__second"
  },
  io = {
    class: "project-first__tags"
  },
  ro = {
    key: 0,
    class: "text-p1 project-first__time"
  },
  ao = V({
    __name: "First",
    props: {
      name: {},
      year: {},
      media: {},
      mediaMobile: {},
      description: {},
      photo_preview: {},
      photoPreviewMobile: {},
      short_description: {},
      services: {},
      tags: {},
      clients: {},
      client_categories: {}
    },
    setup(a) {
      const {
        name: i,
        year: _,
        media: l,
        mediaMobile: f,
        description: m,
        photo_preview: d,
        photoPreviewMobile: s,
        short_description: c,
        tags: p = [],
        clients: $ = [],
        services: u = []
      } = a, {
        base: I,
        setShowrealSrc: w
      } = st(), y = T(1600), O = T(null), P = T(0), R = () => {
        var r;
        P.value = ((r = O.value) == null ? void 0 : r.currentTime) ?? 0
      }, Z = ne(() => {
        const r = Math.floor(P.value / 60),
          j = Math.floor(P.value % 60);
        return `${r<10?`0${r}`:r}:${j<10?`0${j}`:j}`
      }), L = () => {
        l && S(l) && (w(l), I.isShowShowreal = !0)
      }, F = ne(() => y.value >= 1024 ? l : f ?? l);
      U(() => {
        y.value = window.innerWidth
      });
      const {
        showCursor: W,
        hideCursor: q
      } = ce();
      return (r, j) => (t(), n("section", Tt({
        class: "project-first"
      }, {
        [("isVideo" in r ? r.isVideo : o(S))(r.media) && o(y) >= 1200 ? "data-cursor" : "data-color"]: "#C9F7CA",
        [("isVideo" in r ? r.isVideo : o(S))(r.media) && o(y) >= 1200 ? "data-cursor-text" : "data-text"]: r.$t("video")
      }, {
        onClick: j[0] || (j[0] = re(() => o(y) >= 1200 ? L() : !1, ["prevent"])),
        onPointerenter: j[1] || (j[1] = () => {
          ("isVideo" in r ? r.isVideo : o(S))(r.media) && o(W)(r.$t("video"), "#C9F7CA") && o(y) >= 1200
        }),
        onPointerleave: j[2] || (j[2] = (...N) => o(q) && o(q)(...N))
      }), [e("div", Qt, [o(F) && ("isVideo" in r ? r.isVideo : o(S))(o(F)) ? (t(), n("video", {
        key: 0,
        ref_key: "videoElem",
        ref: O,
        class: "project-first__img",
        src: o(F),
        onTimeupdate: R,
        loop: "",
        muted: "",
        playsinline: "",
        autoplay: ""
      }, null, 40, Xt)) : (t(), n("picture", Yt, [e("img", {
        class: "project-first__img",
        src: o(F) && !("isVideo" in r ? r.isVideo : o(S))(o(F)) ? o(F) : "",
        alt: r.name
      }, null, 8, zt)])), Gt]), e("div", Jt, [e("div", Kt, [e("p", xt, v(r.client_categories.join(", ")), 1), e("p", eo, v(r.year), 1), e("p", to, v(r.clients.map(N => N.name + "®").join(", ")), 1), e("h1", oo, v(r.name), 1)]), r.description ? (t(), n("div", {
        key: 0,
        class: "text-p1 project-first__text",
        innerHTML: r.description
      }, null, 8, so)) : k("", !0)]), e("div", no, [e("div", io, [(t(!0), n(b, null, M(r.services, N => (t(), n("div", {
        key: N.id,
        class: "text-p2 tag"
      }, v(N.title), 1))), 128)), (t(!0), n(b, null, M(r.tags, N => (t(), n("div", {
        key: N.id,
        class: "text-p2 tag"
      }, v(N.name), 1))), 128))]), ("isVideo" in r ? r.isVideo : o(S))(r.media) ? (t(), n("p", ro, v(o(Z)), 1)) : k("", !0), ("isVideo" in r ? r.isVideo : o(S))(r.media) ? (t(), n("p", {
        key: 1,
        onClick: L,
        class: "text-p1 link-2 project-first__play"
      }, v(r.$t("video")), 1)) : k("", !0)])], 16))
    }
  }),
  co = {
    class: "project-info"
  },
  lo = {
    class: "T8 project-info__subtitle"
  },
  _o = {
    class: "T6 project-info__text"
  },
  po = ["innerHTML"],
  uo = V({
    __name: "Info",
    props: {
      title: {},
      description: {},
      readmore: {}
    },
    emits: ["openPopup", "setReadmore"],
    setup(a, {
      emit: i
    }) {
      const _ = a;

      function l() {
        i("setReadmore", _.readmore), i("openPopup")
      }
      const {
        t: f
      } = le(), m = {
        read_more: f("read_more")
      };
      return (d, s) => (t(), n("section", co, [e("h2", lo, v(_.title), 1), e("div", _o, [e("div", {
        innerHTML: _.description
      }, null, 8, po), _.readmore ? (t(), n("button", {
        key: 0,
        class: "T6 readmore-button link-2 link-2--alternate",
        onClick: l
      }, v(m.read_more), 1)) : k("", !0)])]))
    }
  }),
  mo = {
    class: "project-quote"
  },
  ho = {
    class: "title-h1 project-quote__quote"
  },
  fo = V({
    __name: "Quote",
    props: {
      name: {},
      position: {},
      photo: {},
      quote: {},
      pageName: {}
    },
    setup(a) {
      return (i, _) => {
        const l = lt;
        return t(), n("section", mo, [e("blockquote", ho, "“" + v(i.quote) + "”", 1), i.name || i.position || i.photo ? (t(), E(l, {
          key: 0,
          class: "project-quote__user",
          name: i.name,
          position: i.position,
          photo: i.photo,
          "page-name": i.pageName
        }, null, 8, ["name", "position", "photo", "page-name"])) : k("", !0)])
      }
    }
  }),
  vo = {
    class: "project-vimeo"
  },
  $o = ["innerHTML"],
  jo = V({
    __name: "Vimeo",
    props: {
      media: {}
    },
    setup(a) {
      return (i, _) => (t(), n("section", vo, [e("div", {
        innerHTML: i.media
      }, null, 8, $o)]))
    }
  }),
  go = B(jo, [
    ["__scopeId", "data-v-eae800e9"]
  ]),
  ko = {
    class: "project-video"
  },
  wo = ["src"],
  bo = V({
    __name: "SingleVideo",
    props: {
      media: {}
    },
    setup(a) {
      return (i, _) => (t(), n("section", ko, [e("video", {
        src: i.media,
        muted: "",
        loop: "",
        autoplay: "",
        playsinline: ""
      }, null, 8, wo)]))
    }
  }),
  yo = B(bo, [
    ["__scopeId", "data-v-9dbc33e1"]
  ]),
  Lo = {
    class: "project-photo"
  },
  Po = ["src", "alt"],
  Co = V({
    __name: "SinglePhoto",
    props: {
      media: {},
      alt: {}
    },
    setup(a) {
      return (i, _) => (t(), n("section", Lo, [e("img", {
        src: i.media,
        alt: i.alt
      }, null, 8, Po)]))
    }
  }),
  So = B(Co, [
    ["__scopeId", "data-v-cd347fc3"]
  ]),
  To = {
    class: "project-two-photos"
  },
  Vo = ["src"],
  qo = ["src", "alt"],
  Mo = V({
    __name: "TwoPhotos",
    props: {
      photos: {},
      alt: {}
    },
    setup(a) {
      return (i, _) => (t(), n("div", To, [(t(!0), n(b, null, M(i.photos.slice(0, 2), (l, f) => (t(), n(b, {
        key: f
      }, [("isVideo" in i ? i.isVideo : o(S))(l) ? (t(), n("video", {
        key: 0,
        src: l,
        loop: "",
        muted: "",
        autoplay: "",
        playsinline: ""
      }, null, 8, Vo)) : (t(), n("img", {
        key: 1,
        src: l,
        alt: i.alt
      }, null, 8, qo))], 64))), 128))]))
    }
  }),
  Io = B(Mo, [
    ["__scopeId", "data-v-42025f01"]
  ]),
  Oo = {
    class: "project-description"
  },
  Fo = {
    class: "title-h2 project-description__title"
  },
  Wo = {
    class: "project-description__content"
  },
  Ho = ["innerHTML"],
  No = V({
    __name: "Description",
    props: {
      title: {},
      description: {},
      readmore: {}
    },
    emits: ["openPopup", "setReadmore"],
    setup(a, {
      emit: i
    }) {
      const {
        title: _ = "",
        description: l = "",
        readmore: f
      } = a;

      function m() {
        i("setReadmore", f), i("openPopup")
      }
      return (d, s) => (t(), n("section", Oo, [e("h3", Fo, v(d.title), 1), e("div", Wo, [e("div", {
        class: "text-p1 project-description__text",
        innerHTML: d.description
      }, null, 8, Ho), d.readmore ? (t(), n("button", {
        key: 0,
        class: "project-description__more text-p1 link-2",
        onClick: m
      }, " Read more ")) : k("", !0)])]))
    }
  }),
  Bo = B(No, [
    ["__scopeId", "data-v-efc5fd28"]
  ]),
  Ao = {
    class: "project-idea"
  },
  Eo = {
    class: "project-idea__images swiper"
  },
  Ro = {
    class: "swiper-wrapper"
  },
  Do = ["src"],
  Uo = ["src", "alt"],
  Zo = {
    class: "project-idea__content"
  },
  Qo = {
    class: "title-h2 project-idea__title"
  },
  Xo = ["innerHTML"],
  Yo = V({
    __name: "Idea",
    props: {
      title: {},
      description: {},
      photos: {},
      readmore: {}
    },
    emits: ["openPopup", "setReadmore"],
    setup(a, {
      emit: i
    }) {
      const {
        title: _ = "",
        description: l = "",
        photos: f = [],
        readmore: m
      } = a, d = () => {
        i("setReadmore", m), i("openPopup")
      };
      let s = T();
      const c = () => {
        s.value = new nt(".project-idea__images", {
          spaceBetween: 8 / 414 * window.innerWidth,
          slidesOffsetAfter: 16 / 414 * window.innerWidth,
          slidesOffsetBefore: 16 / 414 * window.innerWidth,
          slidesPerView: "auto"
        })
      };
      return U(() => {
        window.innerWidth < 1200 && c()
      }), Y(() => {
        try {
          s.value && s.value.destroy(!0)
        } catch (p) {
          console.error("Error occured! ", p)
        }
      }), (p, $) => (t(), n("section", Ao, [e("div", Eo, [e("div", Ro, [(t(!0), n(b, null, M(p.photos, u => (t(), n(b, {
        key: u
      }, [("isVideo" in p ? p.isVideo : o(S))(u) ? (t(), n("video", {
        key: 0,
        class: "swiper-slide project-idea__img",
        src: u,
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: ""
      }, null, 8, Do)) : (t(), n("img", {
        key: 1,
        class: "swiper-slide project-idea__img",
        src: u,
        alt: p.title
      }, null, 8, Uo))], 64))), 128))])]), e("div", Zo, [e("h3", Qo, v(p.title), 1), e("div", {
        innerHTML: p.description,
        class: "text-p1 project-idea__text"
      }, null, 8, Xo), p.readmore ? (t(), n("button", {
        key: 0,
        class: "text-p1 project-idea__more link-2",
        onClick: d
      }, " Read more ")) : k("", !0)])]))
    }
  }),
  zo = {
    class: "project-last"
  },
  Go = {
    class: "project-last__content"
  },
  Jo = {
    class: "text-p3 project-last__subtitle"
  },
  Ko = ["innerHTML"],
  xo = V({
    __name: "Last",
    props: {
      title: {},
      description: {}
    },
    emits: ["openFeedbackForm"],
    setup(a, {
      emit: i
    }) {
      function _() {
        i("openFeedbackForm")
      }
      return (l, f) => {
        const m = dt;
        return t(), n("section", zo, [e("div", Go, [e("h5", Jo, v(l.title), 1), e("div", {
          class: "title-h2 project-last__text",
          innerHTML: l.description
        }, null, 8, Ko), C(m, {
          text: l.$t("project.start"),
          onClick: _,
          class: "project-last__btn"
        }, null, 8, ["text"])])])
      }
    }
  }),
  es = a => (K("data-v-738135bf"), a = a(), x(), a),
  ts = {
    class: "swiper-wrapper"
  },
  os = es(() => e("div", {
    class: "project__media-plug"
  }, null, -1)),
  ss = {
    class: "project__content"
  },
  ns = {
    class: "project__media"
  },
  is = ["src", "alt"],
  rs = ["src"],
  as = {
    class: "project__tags"
  },
  cs = {
    class: "project__tag T7"
  },
  ls = {
    class: "project__footer"
  },
  ds = {
    class: "T6 project__name"
  },
  _s = {
    class: "T6 project__client"
  },
  ps = V({
    __name: "OtherProjectsSlider",
    props: {
      projects: {},
      pageName: {}
    },
    setup(a) {
      const {
        t: i
      } = le(), {
        showCursor: _,
        hideCursor: l
      } = ce(), f = T(-1);

      function m(u) {
        _(i("btn.explore"), "#C9F7CA"), !(window.innerWidth < 1200) && (f.value = u)
      }

      function d() {
        l(), !(window.innerWidth < 1200) && (f.value = -1)
      }
      const s = T();
      let c;
      U(() => {
        window.innerWidth >= 1200 && p(), $()
      }), Y(() => {
        c && c.disconnect()
      });

      function p() {
        s.value && new nt(s.value, {
          spaceBetween: 8 / 1440 * window.innerWidth,
          slidesOffsetBefore: 24 / 1440 * window.innerWidth,
          slidesOffsetAfter: 24 / 1440 * window.innerWidth,
          slidesPerView: "auto"
        })
      }

      function $() {
        const u = document.querySelector(".project-page__other-btn"),
          I = document.querySelector(".project-navigation");
        s.value && (c = new IntersectionObserver(w => {
          w.forEach(y => {
            y.isIntersecting ? (u && u.classList.add("hidden"), I && I.classList.add("hidden")) : (u && u.classList.remove("hidden"), I && I.classList.remove("hidden"))
          })
        }, {}), c.observe(s.value))
      }
      return (u, I) => {
        const w = Ot;
        return t(), n("div", {
          ref_key: "swiperDOM",
          ref: s,
          class: "swiper projects-slider"
        }, [e("div", ts, [(t(!0), n(b, null, M(u.projects, ({
          id: y,
          slug: O,
          video: P,
          photo: R,
          name: Z,
          clients: L,
          services: F,
          tags: W,
          year: q
        }, r) => (t(), n("div", {
          key: y,
          class: "swiper-slide"
        }, [C(w, {
          class: "project",
          to: `/portfolio/${O}`,
          onPointerenter: () => m(r),
          onPointerleave: d,
          "data-cursor": "#C9F7CA",
          "data-cursor-text": u.$t("btn.explore")
        }, {
          default: ie(() => [os, e("div", ss, [e("div", ns, [e("img", {
            src: o(f) === r && P && !("isVideo" in u ? u.isVideo : o(S))(P) ? P : R,
            alt: `${u.pageName}, ${u.$t("photo_word")} ${("photoIndex"in u?u.photoIndex:o(de))(1100,r)}`
          }, null, 8, is), it(e("video", {
            src: P,
            muted: "",
            loop: "",
            autoplay: "",
            playsinline: ""
          }, null, 8, rs), [
            [rt, o(f) === r && P && ("isVideo" in u ? u.isVideo : o(S))(P)]
          ])]), e("div", as, [(t(!0), n(b, null, M(F, j => (t(), n("div", {
            key: j.id,
            class: "project__tag T7"
          }, v(j.title), 1))), 128)), (t(!0), n(b, null, M(W, j => (t(), n("div", {
            key: j.id,
            class: "project__tag T7"
          }, v(j.name), 1))), 128)), e("div", cs, v(q), 1)])]), e("footer", ls, [e("p", ds, v(Z), 1), e("p", _s, v(L.map(j => j.name + "®").join(", ")), 1)])]),
          _: 2
        }, 1032, ["to", "onPointerenter", "data-cursor-text"])]))), 128))])], 512)
      }
    }
  }),
  us = B(ps, [
    ["__scopeId", "data-v-738135bf"]
  ]),
  ms = a => (K("data-v-a02c8160"), a = a(), x(), a),
  hs = ["href", "data-cursor-text"],
  fs = ms(() => e("div", {
    class: "project__media-plug"
  }, null, -1)),
  vs = {
    class: "project__content"
  },
  $s = {
    class: "project__media"
  },
  js = ["src", "alt"],
  gs = ["src"],
  ks = {
    class: "project__tags"
  },
  ws = {
    class: "project__tag T7"
  },
  bs = {
    class: "T6 project__name"
  },
  ys = {
    class: "T6 project__client"
  },
  Ls = V({
    __name: "OtherProjectCard",
    props: {
      id: {},
      slug: {},
      video: {},
      photo: {},
      name: {},
      year: {},
      services: {},
      clients: {},
      tags: {},
      pageName: {}
    },
    setup(a) {
      const {
        showCursor: i,
        hideCursor: _
      } = ce(), l = T(!1);

      function f() {
        i("Explore", "#C9F7CA"), !(window.innerWidth < 1200) && (l.value = !0)
      }

      function m() {
        _(), !(window.innerWidth < 1200) && (l.value = !1)
      }
      const {
        $lenis: d
      } = z();

      function s(c) {
        d.start(), Ft(c)
      }
      return (c, p) => (t(), n("a", {
        class: "project",
        href: `/portfolio/${c.slug}`,
        onClick: p[0] || (p[0] = re(() => s(`/portfolio/${c.slug}`), ["prevent"])),
        onPointerenter: f,
        onPointerleave: m,
        "data-cursor": "#C9F7CA",
        "data-cursor-text": c.$t("btn.explore")
      }, [fs, e("div", vs, [e("div", $s, [e("img", {
        src: o(l) && c.video && !("isVideo" in c ? c.isVideo : o(S))(c.video) ? c.video : c.photo,
        alt: `${c.pageName}, ${c.$t("photo_word")} ${("photoIndex"in c?c.photoIndex:o(de))(1e3)}`
      }, null, 8, js), it(e("video", {
        src: c.video,
        muted: "",
        loop: "",
        autoplay: "",
        playsinline: ""
      }, null, 8, gs), [
        [rt, o(l) && c.video && ("isVideo" in c ? c.isVideo : o(S))(c.video)]
      ]), e("div", ks, [(t(!0), n(b, null, M(c.services, $ => (t(), n("div", {
        key: $.id,
        class: "project__tag T7"
      }, v($.title), 1))), 128)), (t(!0), n(b, null, M(c.tags, $ => (t(), n("div", {
        key: $.id,
        class: "project__tag T7"
      }, v($.name), 1))), 128)), e("div", ws, v(c.year), 1)])]), e("p", bs, v(c.name), 1), e("p", ys, v(c.clients.map($ => $.name + "®").join(", ")), 1)])], 40, hs))
    }
  }),
  Ps = B(Ls, [
    ["__scopeId", "data-v-a02c8160"]
  ]),
  Cs = 60,
  Ss = V({
    __name: "OtherProjects",
    props: {
      projects: {},
      pageName: {}
    },
    setup(a) {
      const i = T(),
        _ = T();
      let l, f = 0,
        m = [],
        d = 2,
        s = d,
        c = 0,
        p = 0;
      const $ = T(!1);
      U(() => {
        u(), Z()
      }), ae(() => {
        l && cancelAnimationFrame(l)
      });

      function u() {
        window.innerWidth < 1200 || (c = 8 / 1440 * window.innerWidth, l && cancelAnimationFrame(l), i.value && (f = i.value.clientWidth, [...i.value.children].forEach(L => {
          m.push(L)
        }), y()))
      }
      const I = 1e3 / Cs;
      let w = Date.now();

      function y() {
        const L = Date.now(),
          F = L - w;
        if (L - w < I) {
          l = requestAnimationFrame(y);
          return
        }
        w = L - F % I;
        const W = $.value ? .1 : 1;
        s *= .95, s = Math.max(W * d, s), p += s, p > f && (p = 0), m.forEach((q, r) => {
          p > (q.clientWidth + c) * (r + 1) ? q.style.transform = `translateX(${f-p+c}px)` : q.style.transform = `translateX(${-p}px)`
        }), l = requestAnimationFrame(y)
      }

      function O() {
        $.value = !0
      }

      function P() {
        $.value = !1
      }

      function R(L) {
        L.deltaY < 0 || (s = Math.min(s + 10, 50))
      }
      async function Z() {
        var W, q;
        const L = (W = _.value) == null ? void 0 : W.querySelector(".js-other-projects-inner");
        if (!L) return;
        const F = X.timeline().fromTo(L, {
          yPercent: 100
        }, {
          yPercent: 0,
          duration: .8
        }, 0);
        if ((q = _.value) != null && q.closest(".other-projects__on-button")) {
          const r = document.querySelector(".other-projects-btn"),
            j = document.querySelector(".project-page__other-btn-bg");
          if (!r || !j) return;
          F.fromTo(r, {
            y: 0
          }, {
            y: -(416 / 1440 * window.innerWidth),
            duration: .8
          }, 0).fromTo(j, {
            opacity: 0
          }, {
            opacity: .8,
            duration: .8
          }, 0)
        }
      }
      return (L, F) => {
        const W = Ps;
        return t(), n("div", {
          ref_key: "blockDOM",
          ref: _,
          class: "other-projects",
          onWheel: R
        }, [e("div", {
          ref_key: "parent",
          ref: i,
          class: "js-other-projects-inner other-projects__inner"
        }, [(t(!0), n(b, null, M(L.projects, ({
          id: q,
          slug: r,
          video: j,
          photo: N,
          name: ee,
          clients: te,
          services: Q,
          tags: oe,
          year: G
        }) => (t(), E(W, {
          key: q,
          id: q,
          slug: r,
          video: j,
          photo: N,
          name: ee,
          clients: te,
          services: Q,
          tags: oe,
          year: G,
          "page-name": L.pageName,
          onPointerenter: O,
          onPointerleave: P
        }, null, 8, ["id", "slug", "video", "photo", "name", "clients", "services", "tags", "year", "page-name"]))), 128))], 512)], 544)
      }
    }
  }),
  Ts = B(Ss, [
    ["__scopeId", "data-v-ca82930a"]
  ]),
  Vs = {
    class: "media-navigation"
  },
  qs = ["onClick"],
  Ms = ["src"],
  Is = ["src", "alt"],
  Os = V({
    __name: "MediaNavigation",
    props: {
      media: {},
      pageName: {}
    },
    setup(a) {
      const {
        media: i = []
      } = a, {
        $lenis: _
      } = z();

      function l(s) {
        _.scrollTo(`#block${s}`)
      }
      const f = [],
        m = T(["1000"]);

      function d() {
        i.forEach(s => {
          const c = {
            threshold: 0
          };
          let p = function(I, w) {
            I.forEach(y => {
              y.isIntersecting ? m.value = [...m.value, s.id] : m.value = m.value.filter(O => s.id !== O)
            })
          };
          var $ = new IntersectionObserver(p, c);
          const u = document.querySelector(`#block${s.id}`);
          u && ($.observe(u), f.push($))
        })
      }
      return U(() => {
        window.innerWidth < 1200 || d()
      }), Y(() => {
        f.forEach(s => {
          s.disconnect()
        })
      }), (s, c) => (t(), n("div", Vs, [(t(!0), n(b, null, M(s.media, (p, $) => (t(), n("button", {
        class: at(["media-navigation__item", {
          active: o(m).includes(p.id)
        }]),
        onClick: () => l(p.id)
      }, [("isVideo" in s ? s.isVideo : o(S))(p.src) ? (t(), n("video", {
        key: 0,
        src: p.src,
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: ""
      }, null, 8, Ms)) : (t(), n("img", {
        key: 1,
        src: p.src,
        alt: `${s.pageName}, ${s.$t("photo_word")} ${("photoIndex"in s?s.photoIndex:o(de))(900,$)}`
      }, null, 8, Is))], 10, qs))), 256))]))
    }
  }),
  Fs = B(Os, [
    ["__scopeId", "data-v-438027c3"]
  ]),
  Ws = {},
  Hs = {
    class: "credits-button T8"
  };

function Ns(a, i) {
  return t(), n("button", Hs, "Credits")
}
const Bs = B(Ws, [
    ["render", Ns],
    ["__scopeId", "data-v-11f93998"]
  ]),
  As = {
    class: "project-navigation"
  },
  Es = V({
    __name: "FixedNavigation",
    props: {
      media: {},
      pageName: {}
    },
    emits: ["openCreditsPopup"],
    setup(a, {
      emit: i
    }) {
      const _ = a;

      function l() {
        i("openCreditsPopup")
      }
      return (f, m) => {
        const d = Fs,
          s = Bs;
        return t(), n("div", As, [C(d, {
          media: _.media,
          "page-name": f.pageName
        }, null, 8, ["media", "page-name"]), C(s, {
          onClick: l
        })])
      }
    }
  }),
  Rs = B(Es, [
    ["__scopeId", "data-v-5cef5237"]
  ]),
  _e = a => (K("data-v-164a052e"), a = a(), x(), a),
  Ds = {
    class: "credits",
    "data-lenis-prevent": ""
  },
  Us = {
    class: "credits__inner"
  },
  Zs = {
    class: "credits__content"
  },
  Qs = {
    class: "credits-block__name"
  },
  Xs = {
    class: "T8"
  },
  Ys = {
    class: "credits-block__content"
  },
  zs = {
    class: "credits-block__content-inner"
  },
  Gs = {
    class: "credits-block__client H3"
  },
  Js = {
    class: "credits-block__items"
  },
  Ks = {
    class: "credits-block__position T8"
  },
  xs = {
    class: "T6 credits-block__position-name"
  },
  en = _e(() => e("path", {
    d: "M7.66898 2.00098L2.63231 2.00164L2.55164 2.01098L2.49298 2.02431L2.42364 2.04698L2.36364 2.07364L2.32164 2.09764L2.27964 2.12564L2.23698 2.15898L2.19498 2.19764L2.13231 2.27098L2.08431 2.34431L2.04898 2.42031L2.02564 2.49031L2.01498 2.53364L2.00831 2.56898L2.00164 2.66764V7.67031C2.00183 7.84023 2.0669 8.00366 2.18354 8.12722C2.30019 8.25078 2.45961 8.32513 2.62924 8.33509C2.79887 8.34505 2.9659 8.28986 3.0962 8.1808C3.2265 8.07174 3.31024 7.91704 3.33031 7.74831L3.33498 7.67031V4.27698L11.725 12.6663H8.33298C8.16958 12.6664 8.0119 12.7264 7.88986 12.835C7.76782 12.9437 7.68993 13.0934 7.67098 13.2556L7.66698 13.333C7.66685 13.4965 7.72682 13.6543 7.83548 13.7765C7.94414 13.8987 8.09391 13.9767 8.25631 13.9956L8.33364 13.9996H13.3736L13.4376 13.993L13.489 13.983L13.5403 13.9683L13.587 13.951L13.647 13.923L13.7063 13.8876L13.767 13.841L13.7456 13.859C13.7867 13.8265 13.8239 13.7894 13.8563 13.7483L13.8903 13.7016L13.917 13.659L13.9383 13.6163L13.961 13.5616L13.9776 13.5083L13.9936 13.4343L13.9983 13.3936L14.001 13.3336V8.33164C14.0008 8.16172 13.9357 7.99829 13.8191 7.87473C13.7024 7.75117 13.543 7.67682 13.3734 7.66686C13.2038 7.6569 13.0367 7.71209 12.9064 7.82115C12.7761 7.93021 12.6924 8.08491 12.6723 8.25364L12.6676 8.33164V11.7236L4.27831 3.33431H7.66898C7.83227 3.33429 7.98987 3.27434 8.11189 3.16583C8.23391 3.05733 8.31187 2.90781 8.33098 2.74564L8.33564 2.66764C8.33564 2.49083 8.2654 2.32126 8.14038 2.19624C8.01536 2.07121 7.84579 2.00098 7.66898 2.00098Z",
    fill: "white"
  }, null, -1)),
  tn = [en],
  on = _e(() => e("path", {
    d: "M9.59741 9.00063L14.3685 9C14.536 9 14.6966 9.06652 14.815 9.18493C14.9335 9.30334 15 9.46393 15 9.63139L14.9956 9.70526C14.9775 9.85884 14.9036 10.0004 14.788 10.1032C14.6725 10.206 14.5232 10.2628 14.3685 10.2628L10.42 10.4193L10.263 14.3693L10.2586 14.4432C10.2396 14.603 10.1603 14.7495 10.0368 14.8528C9.91341 14.9561 9.75519 15.0083 9.5945 14.9989C9.43382 14.9895 9.2828 14.9191 9.17231 14.802C9.06181 14.685 9.00018 14.5302 9 14.3693V9.63139L9.00631 9.53794L9.01263 9.50448L9.02273 9.46344L9.04484 9.39714L9.07831 9.32516L9.12378 9.25571L9.18314 9.18626L9.22292 9.14964L9.26334 9.11807L9.30313 9.09155L9.34291 9.06882L9.39975 9.04357L9.46542 9.0221L9.521 9.00947L9.59741 9.00063Z",
    fill: "white"
  }, null, -1)),
  sn = _e(() => e("path", {
    d: "M6.40259 6.99937L1.63151 7C1.46403 7 1.3034 6.93348 1.18497 6.81507C1.06653 6.69666 1 6.53607 1 6.36861L1.00442 6.29474C1.02252 6.14116 1.09636 5.99955 1.21195 5.89679C1.32754 5.79402 1.47683 5.73725 1.63151 5.73723L5.58001 5.58065L5.73698 1.63069L5.7414 1.55682C5.76041 1.39701 5.83973 1.2505 5.96316 1.14721C6.08659 1.04392 6.24481 0.991655 6.4055 1.00109C6.56618 1.01052 6.7172 1.08094 6.82769 1.19795C6.93819 1.31497 6.99982 1.46976 7 1.63069L7 6.36861L6.99369 6.46206L6.98737 6.49552L6.97727 6.53656L6.95516 6.60286L6.92169 6.67484L6.87622 6.74429L6.81686 6.81374L6.77708 6.85036L6.73666 6.88193L6.69687 6.90845L6.65709 6.93118L6.60025 6.95643L6.53458 6.9779L6.479 6.99053L6.40259 6.99937Z",
    fill: "white"
  }, null, -1)),
  nn = [on, sn],
  rn = ["src"],
  an = ["src"],
  cn = {
    class: "credits__close-button"
  },
  ln = V({
    __name: "CreditsPopup",
    props: {
      media: {},
      title: {},
      description: {},
      credits: {}
    },
    emits: ["closePopup"],
    setup(a, {
      emit: i
    }) {
      const _ = T(!1),
        {
          $lenis: l
        } = z();
      U(() => {
        l.stop()
      }), ae(() => {
        l.start()
      });

      function f() {
        i("closePopup")
      }
      return (m, d) => {
        const s = _t;
        return t(), n("div", Ds, [e("div", Us, [e("div", Zs, [(t(!0), n(b, null, M(m.credits, (c, p) => (t(), n("div", {
          key: p,
          class: "credits-block"
        }, [e("div", Qs, [e("p", Xs, v(c.credits_block.name_block), 1)]), e("div", Ys, [e("div", zs, [(t(!0), n(b, null, M(c.credits_block.constructor_blocks, $ => (t(), n(b, null, [e("p", Gs, v($.constructor_block.title) + "® ", 1), e("div", Js, [(t(!0), n(b, null, M($.constructor_block.position_blocks, u => (t(), n(b, null, [e("p", Ks, v(u.position_block.position), 1), e("p", xs, v(u.position_block.name), 1)], 64))), 256))])], 64))), 256))])])]))), 128))])]), e("div", {
          class: at(["credits__media", {
            active: o(_)
          }])
        }, [o(_) ? k("", !0) : (t(), n("svg", {
          key: 0,
          onClick: d[0] || (d[0] = c => _.value = !0),
          class: "credits__media-open",
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none"
        }, tn)), o(_) ? (t(), n("svg", {
          key: 1,
          onClick: d[1] || (d[1] = c => _.value = !1),
          class: "credits__media-close",
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none"
        }, nn)) : k("", !0), m.media && ("isVideo" in m ? m.isVideo : o(S))(m.media) ? (t(), n("video", {
          key: 2,
          src: m.media,
          autoplay: "",
          muted: "",
          loop: "",
          playsinline: ""
        }, null, 8, rn)) : (t(), n("img", {
          key: 3,
          src: m.media,
          alt: "Grape"
        }, null, 8, an))], 2), e("div", cn, [C(s, {
          onClick: d[2] || (d[2] = () => f())
        })])])
      }
    }
  }),
  dn = B(ln, [
    ["__scopeId", "data-v-164a052e"]
  ]),
  _n = {
    class: "modal__wrap"
  },
  pn = {
    class: "modal__subtitle grid-3"
  },
  un = {
    class: "T6"
  },
  mn = {
    class: "modal__client grid-3"
  },
  hn = {
    class: "T8"
  },
  fn = {
    class: "modal__close"
  },
  vn = {
    class: "grid-3 modal__title"
  },
  $n = {
    class: "H3"
  },
  jn = {
    class: "grid-3 modal__description"
  },
  gn = ["innerHTML"],
  kn = {
    key: 0,
    class: "grid-3 modal__text-block"
  },
  wn = {
    class: "T8 modal__text-block-title"
  },
  bn = ["innerHTML"],
  yn = {
    key: 1,
    class: "modal__photos-block"
  },
  Ln = ["src", "alt"],
  Pn = {
    key: 2,
    class: "modal__quote-block grid-3"
  },
  Cn = {
    class: "H3 modal__quote-block-text"
  },
  Sn = {
    class: "modal__quote-block-card"
  },
  Tn = {
    class: "grid-3 modal__ca-button"
  },
  Vn = V({
    __name: "Modal",
    props: {
      projectName: {},
      projectClient: {},
      title: {},
      description: {},
      blocks: {}
    },
    emits: ["closePopup"],
    setup(a, {
      emit: i
    }) {
      const _ = pt("feedback-form-popup");

      function l() {
        f(), ct(() => {
          _.value = !0
        })
      }

      function f() {
        i("closePopup")
      }
      const {
        $lenis: m
      } = z();
      return U(() => {
        m.stop()
      }), ae(() => {
        m.start()
      }), (d, s) => {
        const c = _t,
          p = Vt,
          $ = qt,
          u = lt,
          I = dt;
        return t(), n("div", {
          class: "modal",
          "data-lenis-prevent": "",
          onClick: f
        }, [e("div", _n, [e("div", {
          class: "modal__content",
          onClick: s[0] || (s[0] = re(() => {}, ["stop"]))
        }, [e("div", pn, [e("h4", un, v(d.projectName), 1)]), e("div", mn, [e("p", hn, v(d.projectClient), 1)]), e("div", fn, [C(c, {
          onClick: f
        })]), e("div", vn, [e("h3", $n, v(d.title), 1)]), e("div", jn, [e("div", {
          class: "T6",
          innerHTML: d.description
        }, null, 8, gn)]), (t(!0), n(b, null, M(d.blocks, (w, y) => (t(), n(b, null, ["text_block" in w ? (t(), n("div", kn, [e("p", wn, v(w.text_block.title), 1), e("div", {
          class: "T6 modal__text-block-description",
          innerHTML: w.text_block.description
        }, null, 8, bn)])) : k("", !0), "photos_block" in w ? (t(), n("div", yn, [C($, {
          class: "modal__slider",
          slidesPerView: 1.2,
          spaceBetween: 8,
          "slides-offset-before": 16,
          "slides-offset-after": 16,
          breakpoints: {
            1200: {
              slidesPerView: 1.6
            }
          }
        }, {
          default: ie(() => [(t(!0), n(b, null, M(w.photos_block.photos, (O, P) => (t(), E(p, {
            class: "modal__slider-slide",
            key: P
          }, {
            default: ie(() => [e("picture", null, [e("img", {
              src: O,
              alt: d.title
            }, null, 8, Ln)])]),
            _: 2
          }, 1024))), 128))]),
          _: 2
        }, 1024)])) : k("", !0), "quote_block" in w ? (t(), n("div", Pn, [e("p", Cn, " “" + v(w.quote_block.text) + "” ", 1), e("div", Sn, [C(u, {
          photo: w.quote_block.photo,
          name: w.quote_block.name,
          position: w.quote_block.position
        }, null, 8, ["photo", "name", "position"])])])) : k("", !0)], 64))), 256)), e("div", Tn, [C(I, {
          text: d.$t("modal.start"),
          onClick: l
        }, null, 8, ["text"])])])]), k("", !0)])
      }
    }
  }),
  qn = () => {
    U(() => {
      const a = document.querySelector(".header");
      a && a.classList.add("header--white")
    }), Y(() => {
      const a = document.querySelector(".header");
      a && a.classList.remove("header--white")
    })
  },
  ot = () => {
    const a = document.querySelector(".project-first__overlay");
    ut.create({
      trigger: ".project-first__img",
      start: "top top",
      end: () => `+=${window.innerHeight}`,
      scrub: !0,
      animation: X.to(".project-first__image", {
        ease: "none",
        clipPath: () => window.innerWidth < 1200 ? "inset(1.9323671498rem round 4.8309178744rem)" : "inset(0.5555555556rem round 1.6666666667rem)"
      }),
      onLeave() {
        a && X.to(a, {
          duration: .4,
          opacity: 0,
          ease: "app-ease"
        })
      },
      onEnterBack() {
        a && X.to(a, {
          duration: .4,
          opacity: 1,
          ease: "app-ease",
          clearProps: "all"
        })
      }
    });
    const i = document.querySelector(".project-first__title");
    i && Wt(i);
    const _ = document.querySelector(".project-first__text");
    _ && Ht(_), Nt(), Bt()
  },
  mt = a => (K("data-v-2ace6b40"), a = a(), x(), a),
  Mn = {
    class: "page"
  },
  In = {
    class: "project-page"
  },
  On = {
    key: 0,
    class: "page__info"
  },
  Fn = {
    key: 2,
    class: "page__vimeo"
  },
  Wn = ["id"],
  Hn = ["id"],
  Nn = {
    class: "page__last-section"
  },
  Bn = {
    class: "page__last-block"
  },
  An = {
    class: "page__other-projects-footer"
  },
  En = {
    class: "project-page__other-btn"
  },
  Rn = mt(() => e("div", {
    class: "project-page__other-btn-bg"
  }, null, -1)),
  Dn = mt(() => e("span", null, "↕", -1)),
  Un = V({
    __name: "[handle]",
    async setup(a) {
      var G, pe, ue, me;
      let i, _;
      const {
        locale: l
      } = le(), {
        base: f
      } = st(), m = At(), {
        data: d
      } = ([i, _] = Mt(async () => Rt(`project-${l.value}-${m.params.handle}`, async () => {
        var H, A, D;
        const g = await $fetch(`/api/portfolio/${m.params.handle}`, {
          query: {
            locale: l.value
          }
        });
        return {
          project: (H = g.data) == null ? void 0 : H.project,
          projects: (A = g.data) == null ? void 0 : A.projects,
          layout: (D = g.data) == null ? void 0 : D.layout
        }
      })), i = await i, _(), i), s = ((G = d.value) == null ? void 0 : G.project) ?? null;
      if (!s) throw Et({
        statusCode: 404,
        statusMessage: "Not found"
      });
      const c = ((pe = d.value) == null ? void 0 : pe.projects) ?? [],
        p = ((me = (ue = d.value) == null ? void 0 : ue.data) == null ? void 0 : me.layout) ?? null,
        $ = c.filter(g => g.id !== (s == null ? void 0 : s.id));
      Ut(s), qn(), It(() => f.isLoading, () => {
        ot()
      }), U(() => {
        f.isLoading || ot()
      }), Y(() => {
        ut.killAll()
      });
      const u = T(!1);

      function I() {
        u.value = !0
      }

      function w() {
        u.value = !1
      }
      const y = T(!1),
        O = T(null);

      function P(g) {
        O.value = g
      }

      function R() {
        y.value = !0
      }

      function Z() {
        y.value = !1
      }
      const L = pt("feedback-form-popup");

      function F() {
        L.value = !0
      }
      const W = T(),
        {
          $lenis: q
        } = z(),
        r = T(!1),
        j = T(!1);

      function N() {
        j.value || (r.value ? ee() : (q.stop(), r.value = !0, te()))
      }

      function ee() {
        var D;
        const g = document.querySelector(".other-projects-btn"),
          H = document.querySelector(".project-page__other-btn-bg"),
          A = (D = W.value) == null ? void 0 : D.querySelector(".js-other-projects-inner");
        !g || !A || !H || X.timeline({
          onComplete() {
            q.start(), j.value = !1, r.value = !1
          }
        }).to(A, {
          yPercent: 100,
          duration: .8
        }, 0).to(g, {
          y: 0,
          duration: .8
        }, 0).to(H, {
          opacity: 0,
          duration: .8,
          clearProps: "all"
        }, 0)
      }
      async function te() {
        var D, J;
        await ct();
        const g = document.querySelector(".other-projects-btn"),
          H = (D = W.value) == null ? void 0 : D.querySelector(".js-other-projects-bg"),
          A = (J = W.value) == null ? void 0 : J.querySelector(".js-other-projects-inner");
        !g || !H || !A || X.timeline().fromTo(H, {
          opacity: 0
        }, {
          opacity: .8,
          duration: .4,
          ease: "app-ease"
        }).fromTo(A, {
          yPercent: 100
        }, {
          yPercent: 0,
          duration: .4,
          ease: "app-ease"
        }, 0).fromTo(g, {
          y: 0
        }, {
          y: -(416 / 1440 * window.innerWidth),
          duration: .4,
          ease: "app-ease"
        }, 0)
      }
      const Q = [];
      Q.push({
        id: "1000",
        src: s.media
      }), s.constructor.forEach((g, H) => {
        "one_media_block" in g && Q.push({
          id: H.toString(),
          src: g.one_media_block.photo
        }), "two_media_block" in g && g.two_media_block.photos.forEach(A => {
          Q.push({
            id: H.toString(),
            src: A
          })
        })
      });
      const oe = ne(() => [...new Set((s == null ? void 0 : s.client_categories) ?? [])]);
      return (g, H) => {
        var he, fe, ve, $e, je, ge, ke, we, be, ye, Le, Pe, Ce, Se, Te, Ve, qe, Me, Ie, Oe, Fe, We, He, Ne, Be, Ae, Ee, Re, De, Ue, Ze, Qe, Xe;
        const A = ao,
          D = uo,
          J = fo,
          ht = go,
          ft = yo,
          vt = So,
          $t = Io,
          jt = Bo,
          gt = Yo,
          kt = Dt,
          wt = xo,
          bt = us,
          yt = Zt,
          Lt = Ts,
          Pt = Rs,
          Ct = dn,
          St = Vn;
        return t(), n("div", Mn, [e("div", null, [C(A, {
          id: "block1000",
          name: (he = o(s)) == null ? void 0 : he.name,
          year: (fe = o(s)) == null ? void 0 : fe.year,
          media: (ve = o(s)) == null ? void 0 : ve.media,
          "media-mobile": ($e = o(s)) == null ? void 0 : $e.media_mobile,
          description: (je = o(s)) == null ? void 0 : je.description,
          photo_preview: (ge = o(s)) == null ? void 0 : ge.photo_preview,
          "photo-preview-mobile": (ke = o(s)) == null ? void 0 : ke.photo_preview_mobile,
          short_description: typeof((we = o(s)) == null ? void 0 : we.short_description) == "string" ? (be = o(s)) == null ? void 0 : be.short_description : "",
          tags: ((ye = o(s)) == null ? void 0 : ye.tags) ?? [],
          clients: ((Le = o(s)) == null ? void 0 : Le.clients) ?? [],
          services: ((Pe = o(s)) == null ? void 0 : Pe.services) ?? [],
          client_categories: o(oe)
        }, null, 8, ["name", "year", "media", "media-mobile", "description", "photo_preview", "photo-preview-mobile", "short_description", "tags", "clients", "services", "client_categories"]), e("div", In, [(t(!0), n(b, null, M(((Ce = o(s)) == null ? void 0 : Ce.constructor) ?? [], (h, se) => {
          var Ye, ze, Ge, Je, Ke, xe, et, tt;
          return t(), n(b, null, ["text_block" in h ? (t(), n("div", On, [C(D, {
            title: h.text_block.title,
            description: h.text_block.description,
            readmore: (Ye = h.text_block.read_more[0]) == null ? void 0 : Ye.readmore,
            onOpenPopup: R,
            onSetReadmore: P
          }, null, 8, ["title", "description", "readmore"])])) : k("", !0), "quote_block" in h ? (t(), E(J, {
            key: 1,
            name: h.quote_block.quote_name,
            position: h.quote_block.quote_position,
            quote: h.quote_block.quote_text,
            photo: h.quote_block.photo,
            "page-name": ((Ge = (ze = o(d)) == null ? void 0 : ze.project) == null ? void 0 : Ge.meta_title) ?? ""
          }, null, 8, ["name", "position", "quote", "photo", "page-name"])) : k("", !0), "vimeo_iframe_block" in h ? (t(), n("div", Fn, [C(ht, {
            media: h.vimeo_iframe_block.vimeo_code
          }, null, 8, ["media"])])) : k("", !0), "one_media_block" in h && ("isVideo" in g ? g.isVideo : o(S))(h.one_media_block.photo) ? (t(), E(ft, {
            key: 3,
            id: "block" + se,
            media: h.one_media_block.photo
          }, null, 8, ["id", "media"])) : k("", !0), "one_media_block" in h && !("isVideo" in g ? g.isVideo : o(S))(h.one_media_block.photo) ? (t(), n("div", {
            key: 4,
            id: "block" + se.toString(),
            class: "page__one-photo"
          }, [C(vt, {
            media: h.one_media_block.photo,
            alt: (Je = o(s)) == null ? void 0 : Je.name
          }, null, 8, ["media", "alt"])], 8, Wn)) : k("", !0), "two_media_block" in h ? (t(), n("div", {
            key: 5,
            id: "block" + se.toString(),
            class: "page__two-photos"
          }, [C($t, {
            photos: h.two_media_block.photos,
            alt: (Ke = o(s)) == null ? void 0 : Ke.name
          }, null, 8, ["photos", "alt"])], 8, Hn)) : k("", !0), "text_block_second" in h ? (t(), E(jt, {
            key: 6,
            title: h.text_block_second.title,
            description: h.text_block_second.description,
            readmore: (xe = h.text_block_second.read_more[0]) == null ? void 0 : xe.readmore,
            onOpenPopup: R,
            onSetReadmore: P
          }, null, 8, ["title", "description", "readmore"])) : k("", !0), "text_block_third" in h ? (t(), E(gt, {
            key: 7,
            title: h.text_block_third.title,
            description: h.text_block_third.description,
            photos: h.text_block_third.photos,
            readmore: (et = h.text_block_third.read_more[0]) == null ? void 0 : et.readmore,
            onOpenPopup: R,
            onSetReadmore: P
          }, null, 8, ["title", "description", "photos", "readmore"])) : k("", !0), "slider_block" in h ? (t(), E(kt, {
            key: 8,
            alt: (tt = o(s)) == null ? void 0 : tt.name,
            photos: h.slider_block.photos,
            "photos-mobile": h.slider_block.photos_mobile ?? h.slider_block.photos
          }, null, 8, ["alt", "photos", "photos-mobile"])) : k("", !0)], 64)
        }), 256)), e("div", Nn, [e("div", Bn, [C(wt, {
          title: (Te = (Se = o(s)) == null ? void 0 : Se.final_block[0]) == null ? void 0 : Te.final_item.title,
          description: (qe = (Ve = o(s)) == null ? void 0 : Ve.final_block[0]) == null ? void 0 : qe.final_item.description,
          onOpenFeedbackForm: F
        }, null, 8, ["title", "description"])])]), e("div", An, [C(bt, {
          projects: o($),
          "page-name": ((Ie = (Me = o(d)) == null ? void 0 : Me.project) == null ? void 0 : Ie.meta_title) ?? ""
        }, null, 8, ["projects", "page-name"])]), C(yt, {
          socials: ((Oe = o(p)) == null ? void 0 : Oe.social_blocks.map(h => h.social_detail)) ?? [],
          hashtag: (Fe = o(p)) == null ? void 0 : Fe.hashtag
        }, null, 8, ["socials", "hashtag"]), e("div", {
          ref_key: "hiddenProjectsDOM",
          ref: W,
          class: "other-projects__on-button"
        }, [o(r) ? (t(), E(Lt, {
          key: 0,
          projects: o($),
          "page-name": ((He = (We = o(d)) == null ? void 0 : We.project) == null ? void 0 : He.meta_title) ?? ""
        }, null, 8, ["projects", "page-name"])) : k("", !0)], 512), e("div", En, [Rn, e("button", {
          class: "other-projects-btn",
          onClick: N
        }, [e("span", null, v(o(r) ? g.$t("project.close") : g.$t("project.other")), 1), Dn])])])]), C(Pt, {
          media: Q,
          "page-name": ((Be = (Ne = o(d)) == null ? void 0 : Ne.project) == null ? void 0 : Be.meta_title) ?? "",
          onOpenCreditsPopup: I
        }, null, 8, ["page-name"]), o(u) ? (t(), E(Ct, {
          key: 0,
          media: (Ae = o(s)) == null ? void 0 : Ae.backstage_media,
          credits: ((Re = (Ee = o(s)) == null ? void 0 : Ee.final_block[0]) == null ? void 0 : Re.final_item.credits) ?? [],
          onClosePopup: H[0] || (H[0] = () => w())
        }, null, 8, ["media", "credits"])) : k("", !0), o(y) ? (t(), E(St, {
          key: 1,
          "project-name": (De = o(s)) == null ? void 0 : De.name,
          "project-client": (Ue = o(s)) == null ? void 0 : Ue.clients.map(h => h.name + "®").join(", "),
          title: (Ze = o(O)) == null ? void 0 : Ze.name,
          description: (Qe = o(O)) == null ? void 0 : Qe.description,
          blocks: ((Xe = o(O)) == null ? void 0 : Xe.content_block) ?? [],
          onClosePopup: Z
        }, null, 8, ["project-name", "project-client", "title", "description", "blocks"])) : k("", !0)])
      }
    }
  }),
  Jn = B(Un, [
    ["__scopeId", "data-v-2ace6b40"]
  ]);
export {
  Jn as
  default
};