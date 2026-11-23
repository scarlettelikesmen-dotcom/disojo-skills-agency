/* https://ab-sl.ru/_nuxt/BMQtqre2.js */
import {
  _ as A
} from "./BepOh2iV.js";
import {
  d as $,
  c as a,
  a as e,
  t as _,
  b as v,
  m as p,
  o as s,
  _ as g,
  u as M,
  p as U,
  z as R,
  F as C,
  r as V,
  e as u,
  A as k,
  x,
  f as w,
  C as J,
  q as Y,
  n as N,
  s as W,
  K as Z,
  g as X,
  h as tt,
  y as O,
  v as Q,
  j as et,
  w as ot,
  L as st,
  i as nt
} from "./DROVP5M4.js";
import {
  _ as at
} from "./DXpihNzX.js";
import {
  t as ct
} from "./BrC1mN93.js";
import {
  u as G,
  s as it
} from "./DFRH1ql4.js";
import {
  _ as rt
} from "./CtZNtPPQ.js";
import {
  _ as lt
} from "./Cj45ZiUy.js";
import {
  _ as ut
} from "./BScAP6FH.js";
const pt = {
    class: "hero container relative z-1"
  },
  _t = {
    class: "h2 title col-18"
  },
  dt = {
    key: 0,
    class: "photo-wrapper col-18"
  },
  ht = {
    class: "l1 description"
  },
  mt = {
    name: "ProjectHero"
  },
  vt = $({
    ...mt,
    props: {
      title: {},
      description: {},
      photo: {}
    },
    setup(t) {
      return (c, l) => {
        const o = A;
        return s(), a("section", pt, [l[0] || (l[0] = e("div", {
          class: "header-gap col-18"
        }, null, -1)), e("h1", _t, _(t.title), 1), t.photo ? (s(), a("div", dt, [v(o, {
          photo: t.photo,
          "no-lazy-load": "",
          "auto-height": ""
        }, null, 8, ["photo"])])) : p("", !0), e("p", ht, _(t.description), 1)])
      }
    }
  }),
  ft = g(vt, [
    ["__scopeId", "data-v-68082e2b"]
  ]),
  $t = {
    key: 0,
    class: "about relative z-1"
  },
  gt = {
    class: "about-inner container"
  },
  yt = {
    id: "about-description",
    class: "h3 description hidden col-18"
  },
  kt = {
    class: "details"
  },
  wt = {
    class: "l1 details-item__title"
  },
  xt = {
    class: "l1 details-item__value"
  },
  Pt = {
    class: "details-item"
  },
  jt = {
    class: "l1 details-item__title"
  },
  bt = ["innerHTML"],
  Tt = {
    id: "planet-wrapper",
    class: "planet-wrapper col-18"
  },
  Ct = {
    class: "h1 area"
  },
  At = {
    name: "ProjectAbout"
  },
  Lt = $({
    ...At,
    props: {
      data: {}
    },
    setup(t) {
      const c = t,
        {
          $gsap: l,
          $ScrollTrigger: o,
          $i18n: {
            t: r
          }
        } = M(),
        {
          isDesktop: d
        } = U(),
        i = [{
          title: r("status"),
          value: c?.data?.status
        }, {
          title: r("year"),
          value: c?.data?.year
        }, {
          title: r("location"),
          value: c?.data?.location?.title
        }, {
          title: r("category"),
          value: c?.data?.category
        }];
      let h;

      function P() {
        const m = document.getElementById("planet-wrapper");
        m && (h = o.create({
          trigger: m,
          start: "top bottom",
          end: `${m.clientHeight+(d.value?200:104)} top`,
          scrub: !0,
          animation: l.to(m, {
            y: d.value ? 200 : 104,
            ease: "none"
          })
        }))
      }
      return G(async () => {
        P();
        const m = document.getElementById("about-description");
        m && o.create({
          trigger: m,
          start: "center bottom",
          onEnter: f => {
            m.classList.remove("hidden"), ct(m, {
              withoutScrollTrigger: !0
            }), f.kill()
          }
        })
      }), R(() => h?.kill()), (m, f) => {
        const L = at;
        return t.data ? (s(), a("section", $t, [e("div", gt, [e("p", yt, _(t.data.description), 1), e("div", kt, [(s(), a(C, null, V(i, (j, b) => e("div", {
          key: b,
          class: "details-item"
        }, [e("p", wt, _(j.title) + ":", 1), e("p", xt, _(j.value), 1)])), 64)), e("div", Pt, [e("p", jt, _(u(r)("deliverables")) + ":", 1), e("div", {
          class: "details-item__wrapper l1",
          innerHTML: t.data.deliverables
        }, null, 8, bt)])]), e("div", Tt, [t.data.location ? (s(), k(L, {
          key: 0,
          light: "",
          "rotate-to-point": "",
          points: [t.data.location]
        }, null, 8, ["points"])) : p("", !0)]), e("p", Ct, [x(_(t.data.area) + " " + _(u(r)("m")), 1), f[0] || (f[0] = e("span", {
          class: "primary-sup"
        }, "2", -1))])])])) : p("", !0)
      }
    }
  }),
  Mt = g(Lt, [
    ["__scopeId", "data-v-270fdcc3"]
  ]),
  Vt = {
    class: "quote container"
  },
  It = {
    class: "author-wrapper"
  },
  zt = {
    key: 0,
    class: "author-photo"
  },
  Bt = {
    class: "l1 author-name"
  },
  St = {
    class: "l1 author-position"
  },
  Ht = {
    name: "ProjectQuote"
  },
  Ft = $({
    ...Ht,
    props: {
      speech: {},
      speaker: {}
    },
    setup(t) {
      const {
        $gsap: c,
        $SplitText: l
      } = M(), o = w();

      function r() {
        if (!o.value) return;
        const i = new l(o.value, {
          type: "words",
          tag: "span",
          linesClass: "word"
        }).words?.flatMap(h => new l(h, {
          type: "chars",
          tag: "span",
          charsClass: "char"
        }).chars);
        c.set(i, {
          opacity: .2
        }), c.to(i, {
          scrollTrigger: {
            trigger: o.value,
            start: "top 70%",
            end: "center 30%",
            scrub: !0
          },
          duration: .2,
          opacity: 1,
          stagger: .1
        })
      }
      return G(() => {
        r()
      }), (d, i) => {
        const h = A;
        return s(), a("section", Vt, [e("p", {
          ref_key: "description",
          ref: o,
          class: "h3 description col-18"
        }, _(t.speech), 513), e("div", It, [t.speaker?.photo ? (s(), a("div", zt, [v(h, {
          photo: t.speaker?.photo
        }, null, 8, ["photo"])])) : p("", !0), e("p", Bt, _(t.speaker?.name), 1), e("p", St, _(t.speaker?.departments), 1)])])
      }
    }
  }),
  Dt = g(Ft, [
    ["__scopeId", "data-v-76f18612"]
  ]);

function K(t) {
  if (!t || typeof t != "object") return !1;
  const {
    alt: c,
    original: l,
    large: o,
    medium: r,
    small: d,
    thumbnail: i
  } = t;
  return (typeof c == "string" || c === null) && (typeof l == "string" || l === null) && (typeof o == "string" || o === null) && (typeof r == "string" || r === null) && (typeof d == "string" || d === null) && (typeof i == "string" || i === null)
}
const Et = {
    key: 0,
    class: "photo-section relative z-1"
  },
  qt = {
    class: "photo-wrapper"
  },
  Rt = {
    key: 0,
    class: "parallax-anim"
  },
  Nt = {
    name: "ProjectViewPhoto"
  },
  Wt = $({
    ...Nt,
    props: {
      photo: {}
    },
    setup(t) {
      return (c, l) => {
        const o = A;
        return t.photo && u(K)(t.photo) ? (s(), a("section", Et, [e("div", qt, [!Array.isArray(t.photo) && typeof t.photo != "string" ? (s(), a("div", Rt, [v(o, {
          photo: t.photo,
          "auto-height": ""
        }, null, 8, ["photo"])])) : p("", !0)])])) : p("", !0)
      }
    }
  }),
  Ut = g(Wt, [
    ["__scopeId", "data-v-a9dea749"]
  ]),
  Xt = {
    class: "photo-section description relative z-1"
  },
  Ot = {
    key: 0,
    class: "photo-wrapper"
  },
  Qt = {
    key: 0,
    class: "parallax-anim"
  },
  Gt = {
    key: 1,
    class: "l1 photo-description"
  },
  Kt = {
    name: "ProjectViewPhotoWithDescription"
  },
  Jt = $({
    ...Kt,
    props: {
      photo: {},
      description: {}
    },
    setup(t) {
      return (c, l) => {
        const o = A;
        return s(), a("section", Xt, [t.photo && u(K)(t.photo) ? (s(), a("div", Ot, [!Array.isArray(t.photo) && typeof t.photo != "string" ? (s(), a("div", Qt, [v(o, {
          photo: t.photo,
          "auto-height": ""
        }, null, 8, ["photo"])])) : p("", !0)])) : p("", !0), t.description ? (s(), a("p", Gt, _(t.description), 1)) : p("", !0)])
      }
    }
  }),
  Yt = g(Jt, [
    ["__scopeId", "data-v-a612e9ae"]
  ]),
  Zt = {
    key: 0,
    class: "two-photo-section relative z-1"
  },
  te = {
    class: "parallax-anim"
  },
  ee = {
    name: "ProjectViewTwoPhotos"
  },
  oe = $({
    ...ee,
    props: {
      photos: {}
    },
    setup(t) {
      return (c, l) => {
        const o = A;
        return Array.isArray(t.photos) ? (s(), a("section", Zt, [(s(!0), a(C, null, V(t.photos, (r, d) => (s(), a("div", {
          key: d,
          class: "photo-wrapper"
        }, [e("div", te, [v(o, {
          photo: r,
          "auto-height": r.ratio >= t.photos[t.photos.length - d - 1].ratio
        }, null, 8, ["photo", "auto-height"])])]))), 128))])) : p("", !0)
      }
    }
  }),
  se = g(oe, [
    ["__scopeId", "data-v-66a66da4"]
  ]),
  ne = {
    class: "award relative z-1"
  },
  ae = {
    key: 0,
    class: "photo-wrapper"
  },
  ce = {
    class: "parallax-anim"
  },
  ie = {
    key: 1,
    class: "info"
  },
  re = {
    key: 0,
    class: "info-header"
  },
  le = {
    class: "l1 title"
  },
  ue = {
    class: "description-wrapper"
  },
  pe = ["innerHTML"],
  _e = ["innerHTML"],
  de = {
    name: "ProjectViewAward"
  },
  he = $({
    ...de,
    props: {
      photo: {},
      title: {},
      description: {}
    },
    setup(t) {
      function c(l) {
        if (!l) return;
        const o = l.toString();
        return "0".repeat(Math.max(0, 3 - o.length)) + `&ensp;${o}`
      }
      return (l, o) => {
        const r = A;
        return s(), a("section", ne, [!Array.isArray(t.photo) && typeof t.photo != "string" ? (s(), a("div", ae, [e("div", ce, [v(r, {
          photo: t.photo,
          "auto-height": ""
        }, null, 8, ["photo"])])])) : p("", !0), t.description?.length !== 0 ? (s(), a("div", ie, [t.title ? (s(), a("div", re, [e("p", le, _(t.title), 1)])) : p("", !0), e("div", ue, [(s(!0), a(C, null, V(t.description, (d, i) => (s(), a("div", {
          key: i,
          class: "description-item"
        }, [e("span", {
          class: "l1 description-number",
          innerHTML: c(i + 1)
        }, null, 8, pe), e("div", {
          class: "p1 description-text",
          innerHTML: d
        }, null, 8, _e)]))), 128))])])) : p("", !0)])
      }
    }
  }),
  me = g(he, [
    ["__scopeId", "data-v-23a73017"]
  ]),
  ve = ["src"],
  fe = {
    key: 0,
    class: "play"
  },
  $e = {
    key: 1,
    class: "pause"
  },
  ge = {
    class: "timeline-wrapper"
  },
  ye = {
    class: "p1 time"
  },
  ke = {
    class: "progress"
  },
  we = $({
    __name: "VideoPlayer",
    props: {
      video: {}
    },
    setup(t) {
      const {
        $gsap: c
      } = M(), {
        isDesktop: l
      } = U(), o = w(), r = w(), d = w();
      let i, h;
      const P = w(0),
        m = w(0),
        f = w(!1),
        L = W(() => B(m.value)),
        j = W(() => B(P.value));
      J(async () => {
        await Y(), b(), o.value && o.value.addEventListener("fullscreenchange", S)
      }), R(() => {
        o.value?.removeEventListener("fullscreenchange", S)
      });

      function b() {
        o.value && o.value.readyState > 0 ? (P.value = o.value.duration, D()) : setTimeout(() => {
          b()
        }, 500)
      }

      function I() {
        o.value && (l.value ? (f.value ? (o.value.pause(), clearTimeout(i), h.pause()) : (o.value.ended ? h.restart() : h.play(), o.value.play(), z()), f.value = !f.value) : (q(), o.value?.play()))
      }

      function z() {
        o.value && (m.value = Math.round(o.value.currentTime), o.value.ended ? I() : i = setTimeout(z, 1e3))
      }

      function D() {
        h = c.timeline({
          paused: !0
        }), !(!d.value || !o.value) && h.to(d.value, {
          scaleX: 1,
          duration: o.value.duration,
          ease: "none"
        })
      }

      function B(y) {
        const n = Math.floor(y / 60),
          T = Math.floor(y - n * 60),
          H = n.toString().length === 1 ? `0${n}` : `${n}`,
          F = T.toString().length === 1 ? `0${T}` : `${T}`;
        return `${H}:${F}`
      }

      function E(y) {
        y.stopPropagation();
        const n = y.currentTarget;
        if (!n) return;
        const H = (y.clientX - n.getBoundingClientRect().left) / n.offsetWidth;
        if (o.value) {
          const F = H * P.value;
          o.value.currentTime = F, m.value = F, h.totalDuration(o.value.duration), h.progress(H)
        }
      }

      function q() {
        o.value?.requestFullscreen ? o.value?.requestFullscreen() : o.value?.webkitRequestFullscreen ? o.value?.webkitRequestFullscreen() : o.value?.msRequestFullscreen && o.value?.msRequestFullscreen()
      }

      function S() {
        if (!document.fullscreenElement) {
          if (!o.value) return;
          o.value?.pause()
        }
      }
      return (y, n) => (s(), a("div", {
        class: N(["video-player", {
          playing: u(f)
        }])
      }, [e("video", {
        ref_key: "videoEL",
        ref: o,
        src: `${t.video}#t=0.1`
      }, null, 8, ve), n[3] || (n[3] = e("div", {
        class: "overlay-flat"
      }, null, -1)), n[4] || (n[4] = e("div", {
        class: "overlay-gradient--bottom"
      }, null, -1)), e("button", {
        class: "h1 play-button",
        onClick: I
      }, [n[1] || (n[1] = x(" [", -1)), u(f) ? p("", !0) : (s(), a("span", fe, "watch")), u(f) ? (s(), a("span", $e, [...n[0] || (n[0] = [e("span", {
        class: "pause-line"
      }, null, -1), e("span", {
        class: "pause-line"
      }, null, -1)])])) : p("", !0), n[2] || (n[2] = x("] ", -1))]), e("div", ge, [e("p", ye, _(u(L)) + " / " + _(u(j)), 1), e("div", {
        ref_key: "progressWrapper",
        ref: r,
        class: N(["progress-wrapper", {
          show: u(f)
        }]),
        onClick: E
      }, [e("div", ke, [e("div", {
        ref_key: "progressLine",
        ref: d,
        class: "progress-line"
      }, null, 512)])], 2)])], 2))
    }
  }),
  xe = g(we, [
    ["__scopeId", "data-v-8f400610"]
  ]),
  Pe = {
    key: 0,
    class: "video-block relative z-1"
  },
  je = {
    class: "video-wrapper"
  },
  be = {
    name: "ProjectViewVideo"
  },
  Te = $({
    ...be,
    props: {
      video: {}
    },
    setup(t) {
      const {
        apiUrl: c,
        mediaUrl: l
      } = Z().public, o = l || c;
      return (r, d) => {
        const i = xe;
        return t.video ? (s(), a("section", Pe, [e("div", je, [v(i, {
          video: u(o) + t.video
        }, null, 8, ["video"])])])) : p("", !0)
      }
    }
  }),
  Ce = g(Te, [
    ["__scopeId", "data-v-f30ba0ec"]
  ]),
  Ae = {
    class: "iframe"
  },
  Le = ["innerHTML"],
  Me = $({
    __name: "Iframe",
    props: {
      iframe: {}
    },
    setup(t) {
      return (c, l) => (s(), a("section", Ae, [e("div", {
        class: "wrapper",
        innerHTML: t.iframe
      }, null, 8, Le)]))
    }
  }),
  Ve = g(Me, [
    ["__scopeId", "data-v-983aec25"]
  ]),
  Ie = {
    class: "contact relative"
  },
  ze = {
    class: "container inner"
  },
  Be = {
    class: "title-wrapper"
  },
  Se = {
    class: "h1 first-line z-1"
  },
  He = {
    class: "h1 second-line z-1"
  },
  Fe = {
    class: "h1 third-line z-1 col-18"
  },
  De = {
    class: "contacts-wrapper z-2"
  },
  Ee = {
    class: "contacts-item"
  },
  qe = {
    class: "p1"
  },
  Re = ["href"],
  Ne = {
    class: "contacts-item"
  },
  We = {
    class: "p1"
  },
  Ue = ["href"],
  Xe = {
    class: "contacts-item socials"
  },
  Oe = {
    name: "ProjectContact"
  },
  Qe = $({
    ...Oe,
    props: {
      feedback: {},
      contacts: {}
    },
    setup(t) {
      const {
        t: c
      } = X(), l = tt();
      return (o, r) => {
        const d = Q,
          i = rt;
        return s(), a("section", Ie, [e("div", ze, [e("p", Be, [e("span", Se, _(t.feedback.title_1), 1), e("span", He, _(t.feedback.title_2), 1), e("span", Fe, _(t.feedback.title_3), 1), v(d, {
          to: u(l)("/contact"),
          class: "h1 fourth-line relative z-1"
        }, {
          default: O(() => [r[0] || (r[0] = x(" [", -1)), e("span", null, _(t.feedback.title_4), 1), r[1] || (r[1] = x("] ", -1))]),
          _: 1
        }, 8, ["to"])]), e("div", De, [e("div", Ee, [e("p", qe, _(u(c)("email")), 1), e("a", {
          class: "p1--link",
          href: `mailto:${t.contacts.email}`,
          target: "_blank",
          rel: "nofollow"
        }, _(t.contacts.email), 9, Re)]), e("div", Ne, [e("p", We, [x(_(u(c)("phone")) + " ", 1), r[2] || (r[2] = e("span", {
          class: "secondary-sup"
        }, "[whatsapp]", -1))]), e("a", {
          class: "p1--link",
          href: `tel:${t.contacts.phone}`,
          target: "_blank",
          rel: "nofollow"
        }, _(t.contacts.phone), 9, Ue)]), e("div", Xe, [v(i)])])])])
      }
    }
  }),
  Ge = g(Qe, [
    ["__scopeId", "data-v-4ec05426"]
  ]),
  Ke = {
    class: "more-projects"
  },
  Je = {
    class: "container inner"
  },
  Ye = {
    class: "header col-18"
  },
  Ze = {
    class: "l1"
  },
  to = {
    class: "projects-wrapper col-18"
  },
  eo = $({
    __name: "MoreProjects",
    props: {
      projects: {}
    },
    setup(t) {
      const {
        $i18n: {
          t: c
        }
      } = M();
      return (l, o) => {
        const r = Q,
          d = lt;
        return s(), a("section", Ke, [e("div", Je, [e("div", Ye, [e("p", Ze, _(u(c)("more_projects")), 1), v(r, {
          class: "l1--link",
          to: "/projects"
        }, {
          default: O(() => [x(_(u(c)("view_all_projects")), 1)]),
          _: 1
        })]), e("div", to, [(s(!0), a(C, null, V(t.projects, (i, h) => (s(), a("div", {
          key: h,
          class: "project"
        }, [v(d, {
          size: "large",
          project: i
        }, null, 8, ["project"])]))), 128))])])])
      }
    }
  }),
  oo = g(eo, [
    ["__scopeId", "data-v-bff0d468"]
  ]),
  so = {
    key: 0,
    class: "page project-page"
  },
  no = {
    class: "sections"
  },
  ao = {
    name: "ProjectPage"
  },
  co = $({
    ...ao,
    async setup(t) {
      let c, l;
      const {
        slug: o
      } = et().params, r = X().locale.value, {
        $ScrollTrigger: d
      } = M(), {
        data: i,
        error: h
      } = ([c, l] = ot(() => nt(`project-page-${o}`, () => $fetch("/api/pages/pageOneProject", {
        method: "post",
        body: {
          slug: o,
          locale: r
        }
      }))), c = await c, l(), c);
      return h.value && st({
        statusCode: 404,
        statusMessage: "page not found"
      }), it(i?.value?.meta), R(() => d.killAll()), (P, m) => {
        const f = ft,
          L = Mt,
          j = Dt,
          b = Ut,
          I = Yt,
          z = se,
          D = me,
          B = Ce,
          E = Ve,
          q = Ge,
          S = oo,
          y = ut;
        return s(), a("div", null, [u(i) ? (s(), a("main", so, [v(f, {
          title: u(i)?.hero?.title,
          description: u(i)?.hero?.description,
          photo: u(i)?.hero?.photo
        }, null, 8, ["title", "description", "photo"]), u(i).about ? (s(), k(L, {
          key: 0,
          data: u(i).about
        }, null, 8, ["data"])) : p("", !0), e("div", no, [(s(!0), a(C, null, V(u(i)?.blocks, (n, T) => (s(), a(C, {
          key: T
        }, [n.type === "direct-speech.direct-speech" ? (s(), k(j, {
          key: 0,
          speech: n?.speech,
          speaker: n?.speaker
        }, null, 8, ["speech", "speaker"])) : p("", !0), n.type === "photo-big.photo-big" ? (s(), k(b, {
          key: 1,
          photo: n.photo
        }, null, 8, ["photo"])) : p("", !0), n.type === "photo-with-description.photo-with-description" ? (s(), k(I, {
          key: 2,
          photo: n.photo,
          description: n.description
        }, null, 8, ["photo", "description"])) : p("", !0), n.type === "two-vertical-photo.two-vertical-photo" ? (s(), k(z, {
          key: 3,
          photos: n?.photo
        }, null, 8, ["photos"])) : p("", !0), n.type === "vertical-phototo-with-description.vertical-phototo-with-description" ? (s(), k(D, {
          key: 4,
          photo: n.photo,
          title: n.title,
          description: n.description_large
        }, null, 8, ["photo", "title", "description"])) : p("", !0), n.type === "video.video" ? (s(), k(B, {
          key: 5,
          video: n.photo
        }, null, 8, ["video"])) : p("", !0), n.type === "youtube-video.youtube-video" ? (s(), k(E, {
          key: 6,
          iframe: n.iframe
        }, null, 8, ["iframe"])) : p("", !0)], 64))), 128))]), v(q, {
          feedback: u(i).feedback,
          contacts: u(i).contacts
        }, null, 8, ["feedback", "contacts"]), v(S, {
          projects: u(i)?.projects
        }, null, 8, ["projects"])])) : p("", !0), v(y)])
      }
    }
  }),
  vo = g(co, [
    ["__scopeId", "data-v-0fb8e93a"]
  ]);
export {
  vo as
  default
};