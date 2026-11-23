/* https://grape.ua/_nuxt/setPageMeta.BIChswHP.js */
import {
  H as k,
  I as L,
  u as w,
  d as M,
  y as T,
  v as N,
  J as I,
  a as V
} from "./entry.DN75vySF.js";
import {
  j as C,
  M as _,
  N as p,
  U as r,
  W as u,
  _ as y,
  L as D,
  Q as F,
  V as v,
  J as H,
  $ as P
} from "./swiper-vue.BTZulNLT.js";

function S(n, a) {
  const {
    title: t,
    titleTemplate: s,
    ...e
  } = n;
  return k({
    title: t,
    titleTemplate: s,
    _flatMeta: e
  }, {
    ...a,
    transform(o) {
      const l = L({
        ...o._flatMeta
      });
      return delete o._flatMeta, {
        ...o,
        meta: l
      }
    }
  })
}
const U = {
    class: "footer"
  },
  j = {
    class: "title-h0 footer__copy"
  },
  A = {
    class: "footer__center"
  },
  B = r("div", {
    class: "text-p3 footer__tftl"
  }, [v(" Made by"), r("br"), r("a", {
    class: "text-p3 footer__link",
    href: "https://thefirstthelast.agency/?utm_source=grape&utm_medium=article&utm_campaign=promo",
    target: "_blank"
  }, "The First The Last ")], -1),
  R = {
    class: "footer__links"
  },
  $ = {
    class: "footer__nav"
  },
  q = ["href"],
  O = C({
    __name: "FooterWithProps",
    props: {
      hashtag: {},
      socials: {}
    },
    setup(n) {
      const a = n;
      return w(), (t, s) => {
        const e = M;
        return _(), p("footer", U, [r("p", j, "©" + u(new Date().getFullYear()), 1), r("div", A, [B, r("div", R, [y("", !0), y("", !0)])]), r("div", $, [D(e, {
          class: "text-p1 link-2 footer__hash",
          href: "#"
        }, {
          default: F(() => [v(u(a.hashtag), 1)]),
          _: 1
        }), (_(!0), p(H, null, P(a.socials, (o, l) => (_(), p("a", {
          href: o.social_link,
          target: "_blank",
          rel: "noopener noreferrer",
          key: l,
          class: "text-p3 footer__link footer__link-soc"
        }, u(o.social_name), 9, q))), 128))])])
      }
    }
  });

function W(n) {
  if (n === null) return;
  const {
    SITE_URL: a
  } = T().public, t = N(), {
    meta_title: s = "",
    meta_description: e = "",
    meta_keyword: o = "",
    og_title: l = "",
    og_description: f = "",
    og_photo: i = ""
  } = n ?? {};
  S({
    title: typeof s != "string" ? "" : s,
    description: typeof e != "string" ? "" : e,
    ogTitle: typeof l != "string" ? "" : l,
    ogDescription: typeof f != "string" ? "" : f,
    ogImage: typeof i != "string" ? "" : i,
    ogUrl: a,
    twitterImage: typeof i != "string" ? "" : i,
    twitterTitle: typeof s != "string" ? "" : s,
    twitterDescription: typeof e != "string" ? "" : e
  });
  const h = I({
      addSeoAttributes: !0
    }),
    {
      defaultLocale: m,
      locale: g,
      availableLocales: b,
      baseUrl: x
    } = V(),
    d = m === g.value ? t.path : t.path.slice(g.value.length + 1);
  k({
    htmlAttrs: {
      lang: h.value.htmlAttrs.lang
    },
    link: [...Object.keys(t.query).length > 0 ? [{
      rel: "canonical",
      href: a + (t.path === "/" ? "" : t.path)
    }] : [], ...b.map(c => ({
      rel: "alternate",
      hreflang: c,
      href: x.value + (c === m ? d : `/${c}${d}`)
    }))],
    meta: [...h.value.meta || [{
      property: "keywords",
      content: o
    }], ...Object.keys(t.query).length > 0 ? [{
      name: "robots",
      content: "noindex, follow"
    }] : []]
  })
}
export {
  O as _, W as s
};