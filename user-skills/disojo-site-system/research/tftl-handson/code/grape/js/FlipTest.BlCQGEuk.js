/* https://grape.ua/_nuxt/FlipTest.BlCQGEuk.js */
import {
  u as N,
  b as I,
  d as V,
  _ as S,
  c as F,
  p as L,
  F as j,
  e as C
} from "./entry.DN75vySF.js";
import {
  i as P
} from "./isVideo.BdcvccDS.js";
import {
  j as B,
  a as p,
  M as i,
  R as $,
  Q as w,
  U as s,
  N as n,
  J as f,
  $ as x,
  W as _,
  _ as D,
  u as d,
  X as K,
  Y as ee,
  b as M,
  Z as O
} from "./swiper-vue.BTZulNLT.js";
const E = ["src"],
  T = ["src", "alt"],
  q = {
    class: "project__tag-item"
  },
  A = {
    class: "project__tag-item"
  },
  z = {
    class: "text-p2 project__tag"
  },
  J = {
    class: "project__tag-item"
  },
  Q = {
    class: "project__content"
  },
  R = {
    class: "text-p1 project__title"
  },
  U = {
    class: "text-p1 project__text"
  };
const W = B({
    __name: "ProjectCard",
    props: {
      id: {},
      slug: {},
      name: {},
      year: {},
      photo: {},
      video: {},
      services: {},
      clients: {},
      tags: {},
      alt: {}
    },
    setup(v) {
      const e = v,
        o = p(null),
        u = p(null),
        m = p(null);
      p(null);
      const c = () => {
          if (o.value && e.video && P(e.video)) {
            o.value.classList.add("active");
            const a = o.value.querySelector(".project__video");
            a && a.play()
          }
        },
        l = () => {
          if (o.value) {
            o.value.classList.remove("active");
            const a = o.value.querySelector(".project__video");
            a && a.pause()
          }
        },
        g = N(),
        {
          showCursor: t,
          hideCursor: h
        } = I();
      return (a, y) => {
        const b = V;
        return i(), $(b, {
          to: d(g)(`/portfolio/${e.slug}`),
          class: "project",
          "data-cursor": "#C9F7CA",
          "data-cursor-text": a.$t("btn.explore"),
          onPointerenter: y[0] || (y[0] = r => d(t)(a.$t("btn.explore"), "#C9F7CA")),
          onPointerleave: d(h)
        }, {
          default: w(() => [s("div", {
            ref_key: "elem",
            ref: o,
            class: "project__image",
            onMousemove: c,
            onMouseleave: l
          }, [s("video", {
            class: "project__video",
            src: e.video,
            loop: "",
            muted: "",
            playsinline: ""
          }, null, 8, E), s("img", {
            class: "project__img",
            src: e.photo,
            alt: e.alt
          }, null, 8, T), s("div", {
            ref_key: "elemTags",
            ref: u,
            class: "project__tags"
          }, [(i(!0), n(f, null, x(e.services, (r, k) => (i(), n("div", {
            key: r.id,
            class: "text-p2 project__tag"
          }, [s("div", q, _(r.title), 1)]))), 128)), (i(!0), n(f, null, x(e.tags, (r, k) => (i(), n("div", {
            key: r.id,
            class: "text-p2 project__tag no-hover"
          }, [s("div", A, _(r.name), 1)]))), 128)), s("div", z, [s("div", J, _(a.year), 1)])], 512)], 544), s("div", Q, [s("h3", R, _(e.name), 1), s("p", U, _(e.clients.map(r => r.name + "®").join(", ")), 1)]), D("", !0)]),
          _: 1
        }, 8, ["to", "data-cursor-text", "onPointerleave"])
      }
    }
  }),
  X = S(W, [
    ["__scopeId", "data-v-2e8a417a"]
  ]),
  Y = B({
    __name: "FlipTest",
    props: {
      projects: {},
      pageName: {}
    },
    setup(v) {
      const e = v,
        o = p(),
        u = () => {
          var l;
          const c = j.getState(".flip__item");
          (l = o.value) == null || l.classList.toggle("active"), j.from(c, {
            duration: .4,
            stagger: .02,
            ease: "app-ease",
            scale: !1,
            onComplete() {
              C.update(), C.refresh()
            }
          })
        },
        m = F("is-creative");
      return M(m, () => {
        u()
      }), (c, l) => {
        const g = X;
        return i(), n("div", {
          ref_key: "containerDOM",
          ref: o,
          class: O(["flip", {
            active: d(m)
          }])
        }, [(i(!0), n(f, null, x(e.projects, (t, h) => (i(), $(g, {
          id: t.id,
          slug: t.slug,
          name: t.name,
          year: t.year,
          photo: t.photo,
          video: t.video,
          services: t.services,
          clients: t.clients,
          tags: t.tags,
          alt: `${e.pageName}, ${c.$t("photo_word")} ${("photoIndex"in c?c.photoIndex:d(L))(1,h)}`,
          class: "flip__item"
        }, null, 8, ["id", "slug", "name", "year", "photo", "video", "services", "clients", "tags", "alt"]))), 256))], 2)
      }
    }
  }),
  te = S(Y, [
    ["__scopeId", "data-v-8bcba7eb"]
  ]);
export {
  te as _
};