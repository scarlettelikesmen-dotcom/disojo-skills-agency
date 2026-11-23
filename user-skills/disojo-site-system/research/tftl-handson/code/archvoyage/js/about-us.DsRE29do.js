/* https://archvoyage.ae/_nuxt/about-us.DsRE29do.js */
import {
  _ as zt,
  a as Gt
} from "./OurMission.C42Ax4nB.js";
import {
  d as Xt,
  u as Jt,
  r as k,
  c as Kt,
  w as Qt,
  o as Zt,
  n as bt,
  a as _,
  b as d,
  e as o,
  t as f,
  f as Vt,
  g as a,
  h as Yt,
  F,
  i as I,
  j as e,
  _ as te,
  k as ee,
  p as oe,
  l as ne,
  m as ie,
  q as se,
  s as ae
} from "./entry.YPAKmh3d.js";
import {
  t as ce
} from "./titleAnim.CszaPWUV.js";
import {
  _ as le
} from "./Expertise.loTN4QAv.js";
import {
  _ as re,
  a as pe,
  b as _e
} from "./Awards.aWEdVRRo.js";
import {
  _ as de
} from "./Contact.D-xzsxJa.js";
import {
  s as ue,
  _ as me
} from "./setPageMeta.DvPDcq0E.js";
import "./List.Xuxzn0qK.js";
import "./MoreButton.BK_q1TjK.js";
import "./Plus.DQtF0hp8.js";
import "./swiper.COee7uVM.js";
import "./Button.DsjJ-bLs.js";
import "./ArrowDown.BETtDbQg.js";
const jt = h => (oe("data-v-b78b4d71"), h = h(), ne(), h),
  he = {
    class: "our-team__info"
  },
  fe = {
    class: "our-team__sub-title p1"
  },
  ve = ["innerHTML"],
  ge = {
    class: "our-team__details p1"
  },
  we = {
    class: "team-photo"
  },
  Me = {
    class: "team-text"
  },
  xe = {
    class: "name p1"
  },
  ye = {
    class: "inner-line"
  },
  ke = {
    class: "position p1"
  },
  Ae = {
    class: "inner-line"
  },
  Ce = {
    class: "team-photos-mobile"
  },
  Te = {
    class: "team-photo"
  },
  Ee = {
    class: "team-text"
  },
  Se = {
    class: "name p1"
  },
  $e = {
    class: "inner-line"
  },
  Be = {
    class: "position p1"
  },
  Le = {
    class: "inner-line"
  },
  Fe = jt(() => o("div", {
    class: "cover--top"
  }, null, -1)),
  Ie = jt(() => o("div", {
    class: "cover--bottom"
  }, null, -1)),
  Oe = Xt({
    __name: "OurTeam",
    props: {
      title: {},
      description1: {},
      description2: {},
      team: {}
    },
    setup(h) {
      const r = h,
        v = Jt("transitionEnd"),
        t = k(!1),
        g = k(),
        l = k(),
        O = k(),
        u = k();
      let A = -49.5,
        C = -48,
        w, T, M = !1;
      const B = Kt(() => {
        var c;
        if (!((c = r.team) != null && c.length)) return 0;
        const n = 150 / 375;
        return r.team.length * n < 1 ? Math.floor(1 / (r.team.length * n)) + 1 : 2
      });
      Qt(v, n => {
        n && E()
      }), Zt(async () => {
        await bt(), v.value && E()
      });

      function E() {
        var c;
        if (t.value) return;
        t.value = !0;
        const n = (c = g.value) == null ? void 0 : c.querySelectorAll("p");
        n != null && n.length && n.forEach(p => {
          ce(p)
        })
      }

      function L() {
        clearTimeout(T), !(!l.value || window.innerWidth < 1025 || M) && (M = !0, l.value.addEventListener("mousemove", x), w = requestAnimationFrame(y))
      }

      function S() {
        T = setTimeout(() => {
          !l.value || window.innerWidth < 1025 || (M = !1, l.value.removeEventListener("mousemove", x), window.cancelAnimationFrame(w), u.value && u.value.removeAttribute("style"))
        }, 300)
      }

      function x(n) {
        if (!l.value) return;
        const c = n.clientX,
          p = n.clientY,
          m = l.value.getBoundingClientRect().top,
          i = l.value.getBoundingClientRect().height;
        A = -.35 * (c / window.innerWidth * 100 - 50) - 50, C = -.35 * ((p - m) / i * 100 - 50) - 50
      }

      function y() {
        u.value && (u.value.style.transform = `translate(${A}%, ${C}%)`), w = requestAnimationFrame(y)
      }
      return (n, c) => {
        const p = te,
          m = ee;
        return _(), d("section", {
          ref_key: "wrapper",
          ref: l,
          class: "our-team",
          onMouseenter: L,
          onMouseleave: S
        }, [o("div", {
          ref_key: "inner",
          ref: O,
          class: "inner"
        }, [o("div", he, [o("p", fe, f(n.description1), 1), o("div", {
          ref_key: "titleEl",
          ref: g,
          class: "our-team__title h1",
          innerHTML: n.title
        }, null, 8, ve), o("p", ge, [Vt(f(n.description2) + " - ", 1), a(p, {
          to: "/contact",
          class: "link medium"
        }, {
          default: Yt(() => [Vt(" Contact Our Team ")]),
          _: 1
        })])]), o("div", {
          ref_key: "photosContainer",
          ref: u,
          class: "team-photos"
        }, [(_(!0), d(F, null, I(n.team, (i, s) => (_(), d("div", {
          key: s,
          class: "team-item"
        }, [o("div", we, [a(m, {
          photo: i == null ? void 0 : i.photo
        }, null, 8, ["photo"])]), o("div", Me, [o("p", xe, [o("span", ye, f(i == null ? void 0 : i.name), 1)]), o("p", ke, [o("span", Ae, f(i == null ? void 0 : i.position), 1)])])]))), 128))], 512), o("div", Ce, [(_(!0), d(F, null, I(e(B), i => (_(), d("div", {
          key: i,
          class: "team-photos-mobile__inner"
        }, [(_(!0), d(F, null, I(n.team, (s, $) => (_(), d("div", {
          key: $,
          class: "team-item"
        }, [o("div", Te, [a(m, {
          photo: s == null ? void 0 : s.photo
        }, null, 8, ["photo"])]), o("div", Ee, [o("p", Se, [o("span", $e, f(s == null ? void 0 : s.name), 1)]), o("p", Be, [o("span", Le, f(s == null ? void 0 : s.position), 1)])])]))), 128))]))), 128))])], 512), Fe, Ie], 544)
      }
    }
  }),
  Ue = ie(Oe, [
    ["__scopeId", "data-v-b78b4d71"]
  ]),
  qe = {
    class: "page about-us"
  },
  He = o("div", {
    class: "header-gap"
  }, null, -1),
  Ne = {
    name: "AboutUsPage"
  },
  Ze = Xt({
    ...Ne,
    async setup(h) {
      var g;
      let r, v;
      const {
        data: t
      } = ([r, v] = se(() => ae("about-us", () => $fetch("/api/pages/pageAboutUs"))), r = await r, v(), r);
      return ue((g = t == null ? void 0 : t.value) == null ? void 0 : g.meta), (l, O) => {
        const u = zt,
          A = Gt,
          C = Ue,
          w = le,
          T = re,
          M = pe,
          B = _e,
          E = de,
          L = me;
        return _(), d("main", qe, [a(L, null, {
          default: Yt(() => {
            var S, x, y, n, c, p, m, i, s, $, U, q, H, N, P, W, D, R, V, X, Y, j, z, G, J, K, Q, Z, b, tt, et, ot, nt, it, st, at, ct, lt, rt, pt, _t, dt, ut, mt, ht, ft, vt, gt, wt, Mt, xt, yt, kt, At, Ct, Tt, Et, St, $t, Bt, Lt, Ft, It, Ot, Ut, qt, Ht, Nt, Pt, Wt, Dt, Rt;
            return [He, a(u, {
              titles: (x = (S = e(t)) == null ? void 0 : S.main) == null ? void 0 : x.titles,
              "page-name": (n = (y = e(t)) == null ? void 0 : y.main) == null ? void 0 : n.descriptionSmall,
              description: (p = (c = e(t)) == null ? void 0 : c.main) == null ? void 0 : p.descriptionRight,
              "dot-text": (i = (m = e(t)) == null ? void 0 : m.main) == null ? void 0 : i.descriptionLeft
            }, null, 8, ["titles", "page-name", "description", "dot-text"]), a(A, {
              title: ($ = (s = e(t)) == null ? void 0 : s.card) == null ? void 0 : $.title,
              description: (q = (U = e(t)) == null ? void 0 : U.card) == null ? void 0 : q.description,
              "big-photo": (N = (H = e(t)) == null ? void 0 : H.main) == null ? void 0 : N.photo,
              "card-photo": (W = (P = e(t)) == null ? void 0 : P.card) == null ? void 0 : W.photo,
              "no-bottom-margin": ""
            }, null, 8, ["title", "description", "big-photo", "card-photo"]), a(C, {
              title: (R = (D = e(t)) == null ? void 0 : D.team) == null ? void 0 : R.title,
              description1: (X = (V = e(t)) == null ? void 0 : V.team) == null ? void 0 : X.description1,
              description2: (j = (Y = e(t)) == null ? void 0 : Y.team) == null ? void 0 : j.description2,
              team: (G = (z = e(t)) == null ? void 0 : z.team) == null ? void 0 : G.team
            }, null, 8, ["title", "description1", "description2", "team"]), a(w, {
              title: (Q = (K = (J = e(t)) == null ? void 0 : J.fromMain) == null ? void 0 : K.expertises) == null ? void 0 : Q.title,
              items: (tt = (b = (Z = e(t)) == null ? void 0 : Z.fromMain) == null ? void 0 : b.expertises) == null ? void 0 : tt.items
            }, null, 8, ["title", "items"]), a(T, {
              title: (nt = (ot = (et = e(t)) == null ? void 0 : et.fromMain) == null ? void 0 : ot.development) == null ? void 0 : nt.title,
              "title-left": (at = (st = (it = e(t)) == null ? void 0 : it.fromMain) == null ? void 0 : st.development) == null ? void 0 : at.title_left,
              "title-right": (rt = (lt = (ct = e(t)) == null ? void 0 : ct.fromMain) == null ? void 0 : lt.development) == null ? void 0 : rt.title_right,
              "description-left": (dt = (_t = (pt = e(t)) == null ? void 0 : pt.fromMain) == null ? void 0 : _t.development) == null ? void 0 : dt.description_left,
              "description-right": (ht = (mt = (ut = e(t)) == null ? void 0 : ut.fromMain) == null ? void 0 : mt.development) == null ? void 0 : ht.description_right,
              photo: (gt = (vt = (ft = e(t)) == null ? void 0 : ft.fromMain) == null ? void 0 : vt.development) == null ? void 0 : gt.photo
            }, null, 8, ["title", "title-left", "title-right", "description-left", "description-right", "photo"]), a(M, {
              title: (xt = (Mt = (wt = e(t)) == null ? void 0 : wt.fromMain) == null ? void 0 : Mt.showreel) == null ? void 0 : xt.title,
              description: (At = (kt = (yt = e(t)) == null ? void 0 : yt.fromMain) == null ? void 0 : kt.showreel) == null ? void 0 : At.description,
              video: (Et = (Tt = (Ct = e(t)) == null ? void 0 : Ct.fromMain) == null ? void 0 : Tt.showreel) == null ? void 0 : Et.video,
              "is-only-video": ""
            }, null, 8, ["title", "description", "video"]), a(B, {
              awards: (Bt = ($t = (St = e(t)) == null ? void 0 : St.fromMain) == null ? void 0 : $t.awards) == null ? void 0 : Bt.items
            }, null, 8, ["awards"]), a(E, {
              title: (Ft = (Lt = e(t)) == null ? void 0 : Lt.contact) == null ? void 0 : Ft.title,
              photo: (Ot = (It = e(t)) == null ? void 0 : It.contact) == null ? void 0 : Ot.photo,
              "description-left-1": (qt = (Ut = e(t)) == null ? void 0 : Ut.contact) == null ? void 0 : qt.description_left_1,
              "description-left-2": (Nt = (Ht = e(t)) == null ? void 0 : Ht.contact) == null ? void 0 : Nt.description_left_2,
              descriptions: (Wt = (Pt = e(t)) == null ? void 0 : Pt.contact) == null ? void 0 : Wt.descriptions,
              "small-description": (Rt = (Dt = e(t)) == null ? void 0 : Dt.contact) == null ? void 0 : Rt.small_description
            }, null, 8, ["title", "photo", "description-left-1", "description-left-2", "descriptions", "small-description"])]
          }),
          _: 1
        })])
      }
    }
  });
export {
  Ze as
  default
};