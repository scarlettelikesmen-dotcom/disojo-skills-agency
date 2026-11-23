/* https://coevalstudio.com/_nuxt/TeamBlock.22391266.js */
import {
  _ as E,
  e as D,
  N as F,
  o as b,
  c as C,
  a as t,
  t as S,
  u as n,
  F as H,
  r as M,
  b as U,
  z as Y,
  A as R,
  ad as O,
  f as k,
  k as J,
  L as G,
  ae as K,
  a2 as A,
  ai as I,
  l as Q,
  U as X,
  aj as W,
  q
} from "./entry.7e3c7585.js";
import {
  _ as Z
} from "./CommonButton.058c734e.js";
const j = _ => (Y("data-v-688512ac"), _ = _(), R(), _),
  tt = {
    class: "team-popup popup"
  },
  et = j(() => t("img", {
    draggable: "false",
    class: "modal__close-icon",
    src: O,
    alt: "close",
    role: "presentation"
  }, null, -1)),
  at = [et],
  st = {
    class: "popup__heading"
  },
  ot = {
    class: "popup__name text-h3"
  },
  it = {
    class: "popup__position text-t3"
  },
  nt = {
    class: "popup__content"
  },
  _t = {
    class: "img-outer popup__profile-picture"
  },
  ct = {
    class: "img-inner"
  },
  lt = ["src", "alt"],
  rt = {
    class: "popup__info"
  },
  dt = {
    class: "popup__info-title text-t4"
  },
  mt = ["innerHTML"],
  ut = {
    name: "TeamPersonPopup"
  },
  pt = Object.assign(ut, {
    emits: ["close-popup"],
    setup(_, {
      emit: N
    }) {
      const $ = U().public.baseUrl,
        i = D("personPopupInfo");
      return F(() => {
        var u, m;
        return (m = (u = i == null ? void 0 : i.value) == null ? void 0 : u.wich_projects) == null ? void 0 : m.data.map((o, T) => {
          var p, v, f, h, g;
          return {
            id: o.id,
            caption: (p = o == null ? void 0 : o.attributes) == null ? void 0 : p.Name,
            image: $ + ((h = (f = (v = o == null ? void 0 : o.attributes) == null ? void 0 : v.Main_Photo) == null ? void 0 : f.data) == null ? void 0 : h.attributes.url),
            link: `/project/${(g=o==null?void 0:o.attributes)==null?void 0:g.Slug}`
          }
        })
      }), (u, m) => {
        var o, T, p, v, f, h, g, e;
        return b(), C("div", tt, [t("button", {
          class: "modal__close",
          onClick: m[0] || (m[0] = a => u.$emit("close-popup"))
        }, at), t("div", st, [t("div", ot, S((o = n(i)) == null ? void 0 : o.Name), 1), t("p", it, S((T = n(i)) == null ? void 0 : T.Position), 1)]), t("div", nt, [t("div", _t, [t("div", ct, [t("img", {
          src: n($) + ((h = (f = (v = (p = n(i)) == null ? void 0 : p.Photo) == null ? void 0 : v.data) == null ? void 0 : f.attributes) == null ? void 0 : h.url),
          alt: (g = n(i)) == null ? void 0 : g.Name,
          class: "img-parallax"
        }, null, 8, lt)])]), t("div", rt, [(b(!0), C(H, null, M((e = n(i)) == null ? void 0 : e.Add_info, a => (b(), C("div", {
          class: "popup__info-block",
          key: a.id
        }, [t("div", dt, S(a == null ? void 0 : a.Title), 1), t("div", {
          class: "popup__info-text text-p3",
          innerHTML: a == null ? void 0 : a.Description
        }, null, 8, mt)]))), 128))])])])
      }
    }
  }),
  Ht = E(pt, [
    ["__scopeId", "data-v-688512ac"]
  ]),
  vt = "" + globalThis.__publicAssetsURL("img/no-img.png");
const ft = _ => (Y("data-v-674ca24e"), _ = _(), R(), _),
  ht = {
    class: "team__inner"
  },
  gt = X('<div class="team__grid-border" data-v-674ca24e><div class="team__border" data-v-674ca24e></div><div class="team__border" data-v-674ca24e></div><div class="team__border" data-v-674ca24e></div><div class="team__border" data-v-674ca24e></div></div>', 1),
  xt = {
    class: "team__grid section"
  },
  yt = ["onClick", "onMouseenter", "onMouseleave", "idx"],
  $t = {
    class: "team__item-inner"
  },
  bt = {
    class: "team__item-img img-outer"
  },
  Ct = {
    class: "img-inner"
  },
  St = ["src", "alt"],
  Tt = {
    class: "text-t3 team__name",
    "data-anim-text": ""
  },
  Bt = {
    class: "text-t3 team__position",
    "data-anim-text": ""
  },
  Lt = {
    class: "team__item-inner"
  },
  Pt = {
    class: "team__item-img"
  },
  kt = ft(() => t("img", {
    src: vt,
    class: "team__item-bg"
  }, null, -1)),
  Nt = {
    class: "text-s1 team__item-copied"
  },
  wt = ["href", "data-value"],
  At = {
    name: "TeamBlock"
  },
  It = Object.assign(At, {
    props: {
      team: Array,
      onlyLeaders: {
        type: Boolean,
        default: !1
      },
      shiftLast: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["openPopup"],
    setup(_, {
      emit: N
    }) {
      const B = _,
        $ = D("mainInfo"),
        i = k(!1),
        u = k(null),
        m = k(null),
        o = B.team.filter(e => B.onlyLeaders ? !!e.To_Leader_Block : !e.To_Leader_Block),
        p = U().public.baseUrl;

      function v(e) {
        N("openPopup", e)
      }
      async function f() {
        const e = document.createElement("textarea");
        e.value = m.value.dataset.value, e.setAttribute("readonly", ""), e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), i.value = !0, u.value = setTimeout(() => {
          i.value = !1
        }, 2500)
      }

      function h(e, a) {
        if (window.innerWidth <= 1023) return;
        const x = e.target,
          s = [...document.querySelectorAll(".team__item")];
        let c = W(s, 4, a).slice(1);
        const r = x.querySelector(".team__item-img"),
          d = x.querySelector(".team__name"),
          y = x.querySelector(".team__position");
        let l = 1.59;
        const w = 1.25;
        let L = q(172);
        window.innerWidth <= 1023 && (L = q(327, 7.68), c = W(s, 2, a).slice(1), l = 1.29);
        const V = L * w,
          P = L * l * w - V;
        c.forEach(z => {
          z.style.transform = `translateY(${P}px)`
        }), r.classList.add("expanded"), d.style.transform = `translateY(${P}px)`, y.style.transform = `translateY(${P}px)`
      }

      function g(e) {
        const a = e.target,
          x = [...document.querySelectorAll(".team__item")],
          s = a.querySelector(".team__item-img"),
          c = a.querySelector(".team__name"),
          r = a.querySelector(".team__position");
        x.forEach(d => {
          d.style.transform = "translateY(0px)"
        }), s.classList.remove("expanded"), c.style.transform = "translateY(0px)", r.style.transform = "translateY(0px)"
      }
      return J(() => {
        clearTimeout(u.value)
      }), (e, a) => {
        const x = Z;
        return b(), C("div", ht, [gt, t("div", xt, [(b(!0), C(H, null, M(n(o), (s, c) => {
          var r, d, y;
          return b(), C("button", {
            onClick: l => v(s),
            class: "team__item",
            onMouseenter: l => h(l, c),
            onMouseleave: l => g(l),
            key: s.id,
            idx: c
          }, [t("div", $t, [t("div", bt, [t("div", Ct, [t("img", {
            src: n(p) + ((y = (d = (r = s == null ? void 0 : s.Photo) == null ? void 0 : r.data) == null ? void 0 : d.attributes) == null ? void 0 : y.url),
            alt: s.Name
          }, null, 8, St)])]), t("div", Tt, S(s.Name), 1), t("div", Bt, S(s.Position), 1)])], 40, yt)
        }), 128)), t("div", {
          class: G(["team__item team__item_last", {
            shift: _.shiftLast
          }])
        }, [t("div", Lt, [K(e.$slots, "default", {}, () => {
          var s, c, r, d, y, l;
          return [t("div", Pt, [kt, A(t("p", Nt, " Email copied! ", 512), [
            [I, n(i)]
          ]), A(Q(x, {
            label: "Join Us?",
            onClicked: f,
            class: "team__item-join"
          }, null, 512), [
            [I, !n(i)]
          ])]), t("a", {
            ref_key: "email",
            ref: m,
            href: `mailto:${(c=(s=n($))==null?void 0:s.Add_Contact_Block[2])==null?void 0:c.Contact_Detail2}`,
            class: "text-t3 team__email",
            "data-anim-text": "",
            "data-value": (d = (r = n($)) == null ? void 0 : r.Add_Contact_Block[2]) == null ? void 0 : d.Contact_Detail2
          }, S((l = (y = n($)) == null ? void 0 : y.Add_Contact_Block[2]) == null ? void 0 : l.Contact_Detail2), 9, wt)]
        }, !0)])], 2)])])
      }
    }
  }),
  Mt = E(It, [
    ["__scopeId", "data-v-674ca24e"]
  ]);
export {
  Mt as _, Ht as a
};