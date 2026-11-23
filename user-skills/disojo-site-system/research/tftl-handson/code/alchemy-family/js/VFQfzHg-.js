/* https://alchemy.family/_nuxt/VFQfzHg-.js */
import {
  _ as J,
  a as j,
  b as q,
  c as Q,
  d as G,
  e as K,
  f as R
} from "./D5zr26E0.js";
import {
  _ as U
} from "./B7Lms0Y0.js";
import {
  _ as W
} from "./D3rN1Plm.js";
import {
  _ as X,
  c as Y
} from "./DJb2uxw5.js";
import {
  d as S,
  o as c,
  c as b,
  a,
  m as A,
  t as Z,
  z as e,
  p as oo,
  l as to,
  _ as w,
  q as eo,
  w as ao,
  r as E,
  y as f,
  v as no,
  Q as so,
  j as t,
  J as y,
  C as $,
  b as co,
  A as lo,
  B as u
} from "./CWeo--9S.js";
import {
  _ as _o,
  a as ro
} from "./49XQLREk.js";
import {
  _ as io
} from "./-6YC6hfl.js";
import {
  u as mo
} from "./CGFW9tiQ.js";
import "./BsTfMyAe.js";
import "./BKG8DJAG.js";
import "./CtlLC_md.js";
import "./B1FdqAuq.js";
import "./3SQQwhtx.js";
const I = l => (oo("data-v-339cb46f"), l = l(), to(), l),
  uo = {
    class: "synergy-circle"
  },
  po = {
    class: "h4"
  },
  vo = {
    class: "synergy-bottom"
  },
  ho = {
    class: "event-icon"
  },
  go = ["innerHTML"],
  fo = {
    class: "wrap-footer"
  },
  yo = I(() => a("div", {
    class: "bg__cloud-footer cloud--left anim-left-right"
  }, [a("div", {
    class: "cloud anim-top-bottom anim-delay-8"
  })], -1)),
  bo = I(() => a("div", {
    class: "bg__cloud-left-footer cloud--left anim-left-right anim-delay-2"
  }, [a("div", {
    class: "cloud anim-top-bottom anim-delay-8"
  })], -1)),
  xo = S({
    __name: "FooterNoContribute",
    props: {
      data: {}
    },
    setup(l) {
      return (n, p) => {
        const d = W,
          o = X,
          _ = Y;
        return c(), b("section", {
          class: "event-footer",
          style: A({
            backgroundImage: `url(${n.data.image.normal})`
          })
        }, [a("div", {
          class: "mob-block",
          style: A({
            backgroundImage: `url(${n.data.image.normal})`
          })
        }, null, 4), a("div", uo, [a("h5", po, Z(n.data.title), 1), a("div", vo, [a("div", ho, [e(d)]), a("div", {
          innerHTML: n.data.description,
          class: "description P1"
        }, null, 8, go)])]), a("div", fo, [e(o, {
          class: "only-desktop"
        }), e(_, {
          class: "only-mobile"
        })]), yo, bo], 4)
      }
    }
  }),
  Po = w(xo, [
    ["__scopeId", "data-v-339cb46f"]
  ]),
  Mo = {
    key: 0,
    class: "event"
  },
  ko = {
    key: 0,
    class: "persons-wrap"
  },
  Co = co('<section class="decor" data-v-1b7c61c1><div class="bg__cloud cloud--left anim-left-right" data-v-1b7c61c1><div class="cloud anim-top-bottom anim-delay-8" data-v-1b7c61c1></div></div><div class="bg__cloud-left cloud--left anim-left-right anim-delay-2" data-v-1b7c61c1><div class="cloud anim-top-bottom anim-delay-8" data-v-1b7c61c1></div></div></section>', 1),
  Ao = S({
    __name: "odyssey",
    async setup(l) {
      var M;
      let n, p;
      const d = eo(),
        {
          data: o
        } = ([n, p] = ao(() => lo("/api/event/odyssey", {
          getCachedData(s) {
            return d.payload.data[s] || d.static.data[s]
          }
        }, "$oM5sJwHhA0")), n = await n, p(), n),
        _ = E(!1),
        v = E(null),
        x = [{
          text: "back to home",
          anchor: "#",
          link: "/"
        }],
        h = f("auth-user"),
        H = f("event-already-bought", () => !1),
        P = f("program-modal", () => ({
          isActive: !1,
          program: null
        }));
      if (o.value) H.value = ((M = h.value.user) == null ? void 0 : M.purchases.some(s => {
        var r;
        return s.event.id === ((r = o.value) == null ? void 0 : r.id)
      })) || !1;
      else throw no({
        statusCode: 404,
        message: "Event not found",
        fatal: !0
      });

      function N() {
        _.value = !1, v.value = null
      }

      function B(s) {
        var i, m;
        const r = ((m = (i = o.value) == null ? void 0 : i.keyPersons.list.find(g => g.id === s)) == null ? void 0 : m.modal) ?? null;
        _.value = !0, v.value = r
      }
      return so({
        meta: [{
          name: "robots",
          content: "noindex"
        }]
      }), mo(o.value.seo), (s, r) => {
        const i = K,
          m = R,
          g = U,
          F = J,
          V = j,
          D = q,
          L = Q,
          O = G,
          T = Po,
          k = ro,
          C = io,
          z = _o;
        return t(o) ? (c(), b("main", Mo, [e(g, null, {
          default: y(() => [e(i, {
            "is-active": t(P).isActive,
            program: t(P).program
          }, null, 8, ["is-active", "program"]), e(m, {
            "is-active": t(_),
            data: t(v),
            onCloseModal: N
          }, null, 8, ["is-active", "data"])]),
          _: 1
        }), e(F, {
          data: t(o).hero,
          "no-contribute-button": ""
        }, null, 8, ["data"]), e(V, {
          data: t(o).about,
          class: "section-anchor",
          "data-anchor-id": "1"
        }, null, 8, ["data"]), e(D, {
          data: t(o).stages,
          class: "section-anchor",
          "data-anchor-id": "2"
        }, null, 8, ["data"]), e(L, {
          title: t(o).programTitle,
          data: t(o).programList,
          class: "section-anchor",
          "data-anchor-id": "3"
        }, null, 8, ["title", "data"]), t(o).keyPersons.list.length ? (c(), b("div", ko, [e(O, {
          data: t(o).keyPersons,
          "event-page": "",
          onOpenPersonModal: B
        }, null, 8, ["data"])])) : $("", !0), Co, e(T, {
          data: t(o).synergy,
          class: "section-anchor",
          "data-anchor-id": "4"
        }, null, 8, ["data"]), e(z, {
          "no-scroll": ""
        }, {
          menu: y(() => [t(h).user ? (c(), u(k, {
            key: 0
          })) : (c(), u(C, {
            key: 1,
            menu: x
          }))]),
          burger: y(() => [t(h).user ? (c(), u(k, {
            key: 0
          })) : (c(), u(C, {
            key: 1,
            menu: x
          }))]),
          _: 1
        })])) : $("", !0)
      }
    }
  }),
  To = w(Ao, [
    ["__scopeId", "data-v-1b7c61c1"]
  ]);
export {
  To as
  default
};