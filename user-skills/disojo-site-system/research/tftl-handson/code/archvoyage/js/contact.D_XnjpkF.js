/* https://archvoyage.ae/_nuxt/contact.D_XnjpkF.js */
import {
  d as w,
  u as S,
  r as H,
  w as I,
  o as M,
  n as T,
  x as A,
  a as l,
  b as d,
  e as s,
  g as _,
  F as B,
  i as F,
  t as L,
  k as P,
  A as b,
  m as y,
  p as D,
  l as q,
  q as E,
  h as N,
  s as V,
  j as m
} from "./entry.YPAKmh3d.js";
import {
  v as j,
  s as O,
  _ as R
} from "./setPageMeta.DvPDcq0E.js";
import {
  t as W
} from "./titleAnim.CszaPWUV.js";
import {
  _ as z
} from "./Form.CJOPYj32.js";
import "./Button.DsjJ-bLs.js";
const G = ["innerHTML"],
  J = {
    class: "photo"
  },
  K = ["innerHTML"],
  Q = {
    class: "links"
  },
  U = {
    class: "link-title p1"
  },
  X = ["href"],
  Y = {
    name: "ContactHero"
  },
  Z = w({
    ...Y,
    props: {
      title: {},
      description: {},
      photo: {},
      emails: {}
    },
    setup(a) {
      const n = S("preloaderDone"),
        c = H();
      I(n, t => {
        t && e()
      }), M(async () => {
        await T(), n.value && e()
      });

      function e() {
        const t = c.value;
        if (!t) return;
        const i = t.querySelector(".title-wrapper");
        i && W(i);
        const r = t.querySelector(".photo");
        r && A(r, {
          delay: .4
        })
      }

      function p(t) {
        return t ? j(t) : !1
      }
      return (t, i) => {
        const r = P,
          h = b;
        return l(), d("section", {
          ref_key: "heroSection",
          ref: c,
          class: "hero container"
        }, [s("div", {
          class: "title-wrapper h1 italic",
          innerHTML: t.title
        }, null, 8, G), s("div", J, [_(r, {
          photo: t.photo
        }, null, 8, ["photo"])]), s("div", {
          class: "description-wrapper h1 italic",
          innerHTML: t.description
        }, null, 8, K), s("div", Q, [(l(!0), d(B, null, F(t.emails, (o, u) => (l(), d("div", {
          key: u,
          class: "link-item"
        }, [s("p", U, L(o == null ? void 0 : o.title), 1), s("a", {
          href: `${p(o==null?void 0:o.email)?"mailto:":"tel:"}${o==null?void 0:o.email}`,
          target: "_blank",
          class: "h6"
        }, [_(h, {
          text: o == null ? void 0 : o.email
        }, null, 8, ["text"])], 8, X)]))), 128))])], 512)
      }
    }
  }),
  tt = y(Z, [
    ["__scopeId", "data-v-240f491f"]
  ]),
  ot = {
    name: "ContactForm"
  },
  et = a => (D("data-v-e1f50352"), a = a(), q(), a),
  nt = {
    class: "form-section container"
  },
  st = et(() => s("p", {
    class: "title p1"
  }, "Or submit a message:", -1));

function at(a, n, c, e, p, t) {
  const i = z;
  return l(), d("section", nt, [st, _(i, {
    fields: ["name", "email", "phone", "message"],
    "button-default-text": "Send",
    "save-to-strapi": ""
  })])
}
const ct = y(ot, [
    ["render", at],
    ["__scopeId", "data-v-e1f50352"]
  ]),
  it = {
    class: "contact-page page"
  },
  rt = s("div", {
    class: "header-gap"
  }, null, -1),
  _t = {
    name: "ContactPage"
  },
  ht = w({
    ..._t,
    async setup(a) {
      var p;
      let n, c;
      const {
        data: e
      } = ([n, c] = E(() => V("contact", () => $fetch("/api/pages/pageContact"))), n = await n, c(), n);
      return O((p = e == null ? void 0 : e.value) == null ? void 0 : p.meta), (t, i) => {
        const r = tt,
          h = ct,
          o = R;
        return l(), d("main", it, [_(o, {
          "small-footer": ""
        }, {
          default: N(() => {
            var u, f, $, v, g, x, k, C;
            return [rt, _(r, {
              title: (f = (u = m(e)) == null ? void 0 : u.main) == null ? void 0 : f.title,
              photo: (v = ($ = m(e)) == null ? void 0 : $.main) == null ? void 0 : v.photo,
              description: (x = (g = m(e)) == null ? void 0 : g.main) == null ? void 0 : x.description,
              emails: (C = (k = m(e)) == null ? void 0 : k.main) == null ? void 0 : C.emails
            }, null, 8, ["title", "photo", "description", "emails"]), _(h)]
          }),
          _: 1
        })])
      }
    }
  });
export {
  ht as
  default
};