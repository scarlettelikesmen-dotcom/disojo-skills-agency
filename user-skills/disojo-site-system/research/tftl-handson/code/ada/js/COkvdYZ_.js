/* https://aventuradentalarts.com/_nuxt/COkvdYZ_.js */
import {
  aa as W,
  v as L,
  ab as Y,
  w as g,
  U as D,
  ac as G,
  ad as Q,
  ae as X,
  af as Z,
  ag as ee,
  d as M,
  c as N,
  o as u,
  e as h,
  i as e,
  t as v,
  f as p,
  j as c,
  K as y,
  F as T,
  r as E,
  M as O,
  s as P,
  m as C,
  u as m,
  a as te,
  J as ne,
  L as I,
  b as oe,
  a3 as se,
  C as x,
  A as ae,
  g as le,
  h as ce,
  p as A,
  n as R,
  ah as ie,
  ai as re,
  N as V,
  O as de,
  aj as _e,
  ak as pe,
  q as H,
  a0 as ue
} from "./C3LIzMiL.js";

function he(i, n = {}) {
  const o = n.head || W();
  if (o) return o.ssr ? o.push(i, n) : ve(o, i, n)
}

function ve(i, n, o = {}) {
  const s = L(!1),
    a = L({});
  Y(() => {
    a.value = s.value ? {} : X(n)
  });
  const l = i.push(a.value, o);
  return g(a, t => {
    l.patch(t)
  }), Z() && (D(() => {
    l.dispose()
  }), G(() => {
    s.value = !0
  }), Q(() => {
    s.value = !1
  })), l
}

function qe(i, n) {
  const {
    title: o,
    titleTemplate: s,
    ...a
  } = i;
  return he({
    title: o,
    titleTemplate: s,
    _flatMeta: a
  }, {
    ...n,
    transform(l) {
      const d = ee({
        ...l._flatMeta
      });
      return delete l._flatMeta, {
        ...l,
        meta: d
      }
    }
  })
}
const me = {
    class: "phone-list is-hovered"
  },
  fe = ["href"],
  ke = {
    class: "icon chevron"
  },
  we = {
    class: "phone-list-content"
  },
  ge = ["href"],
  be = M({
    __name: "PhoneList",
    setup(i) {
      const {
        locations: n
      } = N();
      return (o, s) => {
        const a = O,
          l = P;
        return u(), h("div", me, [e("a", {
          href: `tel:${p(n)[0].phone}`,
          external: "",
          target: "_blank",
          "aria-label": "Phone link",
          class: "c2 header-btn phone-list-btn",
          style: y({
            "--title": JSON.stringify(p(n)[0].title)
          })
        }, [e("span", null, v(p(n)[0].phone), 1), e("div", ke, [c(a, {
          class: "n1"
        }), c(a, {
          class: "n2"
        })])], 12, fe), e("div", we, [(u(!0), h(T, null, E(p(n).slice(1), d => (u(), h("a", {
          key: d.id,
          href: `tel:${d.phone}`,
          external: "",
          target: "_blank",
          "aria-label": "Phone link",
          class: "c2 phone-list-item",
          style: y({
            "--title": JSON.stringify(d.title)
          })
        }, [c(l, {
          "text-class": "c2",
          text: d.phone
        }, null, 8, ["text"])], 12, ge))), 128))])])
      }
    }
  }),
  Le = C(be, [
    ["__scopeId", "data-v-2fe9f3cb"]
  ]);

function xe(i, n = !1) {
  const o = m("preloaderDone"),
    s = m("navigation-state"),
    {
      lockScroll: a
    } = te();
  if (n) {
    ne(() => {
      setTimeout(() => {
        i()
      }, 1200)
    });
    return
  }
  o.value ? g(() => s.value, l => {
    l && setTimeout(() => {
      i(), I(() => {
        a(!1)
      })
    }, 600)
  }) : g(() => o.value, () => {
    setTimeout(() => {
      i(), I(() => {
        a(!1)
      })
    }, 100)
  })
}
const Me = {
    class: "left-part"
  },
  Ce = {
    class: "wrap-logo-icon"
  },
  Se = {
    class: "wrap-logo-text"
  },
  $e = {
    class: "header-controls"
  },
  ye = {
    class: "icon chevron"
  },
  Ie = {
    class: "right-part"
  },
  He = {
    class: "flex"
  },
  Be = {
    class: "icon-phone"
  },
  De = {
    class: "mob-icon"
  },
  Ne = 200,
  B = 500,
  Te = M({
    __name: "Header",
    props: {
      light: {
        type: Boolean
      },
      phoneList: {
        type: Boolean
      }
    },
    setup(i) {
      const {
        isDesktop: n
      } = oe(), o = m("mob-locations-modal"), s = m("menu-state"), a = m("services-menu"), {
        global: l
      } = N();
      let d = 0;
      const t = se({
          filled: !1,
          hide: !1
        }),
        f = m("call-modal"),
        b = () => {
          window.addEventListener("scroll", w, !1)
        },
        k = () => {
          s.value = !s.value
        },
        w = () => {
          const r = window.scrollY || document.documentElement.scrollTop;
          r > Ne && r > d && !t.hide && (t.hide = !0), r < d && t.hide && (t.hide = !1), r > B && !t.filled && (t.filled = !0), r <= B && t.filled && (t.filled = !1), d = r <= 0 ? 0 : r
        };
      return xe(b), D(() => {
        window.removeEventListener("scroll", w)
      }), (r, _) => {
        const F = ie,
          U = re,
          S = V,
          $ = O,
          j = Le,
          q = de,
          J = _e,
          z = pe;
        return u(), h("header", {
          ref: "headerEl",
          class: R(["header", {
            bg: p(t).filled,
            hide: p(t).hide,
            "with-phone-list": r.phoneList
          }])
        }, [e("div", Me, [c(S, {
          to: "/",
          class: "logo-icon",
          "aria-label": "Main page link"
        }, {
          default: x(() => [e("div", Ce, [c(F)]), e("div", Se, [c(U)])]),
          _: 1
        }), e("div", $e, [e("button", {
          class: "header-btn menu",
          onClick: k
        }, _[3] || (_[3] = [ae('<span class="c2" data-v-2d7a1b20>Menu</span><div class="icon menu" data-v-2d7a1b20><svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="inner-svg" xmlns="http://www.w3.org/2000/svg" data-v-2d7a1b20><path d="M1 3H11" stroke="#424346" stroke-width="1.5" stroke-linecap="round" class="n1" data-v-2d7a1b20></path><path d="M1 3H11" stroke="#424346" stroke-width="1.5" stroke-linecap="round" class="line n1" data-v-2d7a1b20></path><path d="M1 6H11" stroke="#424346" stroke-width="1.5" stroke-linecap="round" class="n2" data-v-2d7a1b20></path><path d="M1 6H11" stroke="#424346" stroke-width="1.5" stroke-linecap="round" class="line n2" data-v-2d7a1b20></path><path d="M1 9H11" stroke="#424346" stroke-width="1.5" stroke-linecap="round" class="n3" data-v-2d7a1b20></path><path d="M1 9H11" stroke="#424346" stroke-width="1.5" stroke-linecap="round" class="line n3" data-v-2d7a1b20></path></svg></div>', 2)])), e("button", {
          class: "header-btn service",
          onClick: _[0] || (_[0] = () => a.value = !0)
        }, [_[4] || (_[4] = e("span", {
          class: "c2"
        }, "Services", -1)), e("div", ye, [c($, {
          class: "n1"
        }), c($, {
          class: "n2"
        })])])])]), e("div", Ie, [c(S, {
          external: "",
          target: "_blank",
          to: p(l).patientFormLink,
          class: "patient-text c2"
        }, {
          default: x(() => _[5] || (_[5] = [e("span", null, "Patient form", -1), e("div", {
            class: "wrap-corner-arrow"
          }, [e("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [e("path", {
            d: "M10.4102 11.621L10.4463 6.84581C10.4502 6.31836 10.0259 5.894 9.49842 5.89798L4.72322 5.93401M10.0734 6.27146L4.48321 11.8582",
            stroke: "#eae8e8",
            "stroke-width": "1.5",
            "stroke-linecap": "round"
          })]), e("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [e("path", {
            d: "M10.4102 11.621L10.4463 6.84581C10.4502 6.31836 10.0259 5.894 9.49842 5.89798L4.72322 5.93401M10.0734 6.27146L4.48321 11.8582",
            stroke: "#eae8e8",
            "stroke-width": "1.5",
            "stroke-linecap": "round"
          })])], -1)])),
          _: 1
        }, 8, ["to"]), r.phoneList && p(n) ? (u(), le(j, {
          key: 0
        })) : ce("", !0), e("button", {
          class: "header-btn-book",
          onClick: _[1] || (_[1] = K => p(f).isActive = !0)
        }, [c(q, {
          text: "Book A Call",
          "book-btn": ""
        })]), e("div", He, [e("button", {
          class: "mob-call-modal",
          onClick: _[2] || (_[2] = K => o.value = !0)
        }, [e("div", Be, [c(J)])]), e("button", {
          class: "menu-btn-mob c1",
          onClick: A(k, ["stop"])
        }, [e("div", De, [c(z)])])])])], 2)
      }
    }
  }),
  Je = C(Te, [
    ["__scopeId", "data-v-2d7a1b20"]
  ]),
  Ee = {
    class: "main"
  },
  Oe = {
    class: "p1"
  },
  Pe = {
    class: "content-wrap"
  },
  Ae = {
    class: "content"
  },
  Re = {
    class: "c2"
  },
  Ve = ["href"],
  Fe = {
    class: "work-hours"
  },
  Ue = M({
    __name: "Location",
    props: {
      data: {},
      activeId: {}
    },
    emits: ["toggle"],
    setup(i, {
      emit: n
    }) {
      const o = i,
        s = L(),
        a = n,
        l = () => {
          a("toggle", o.data.id)
        },
        d = t => {
          s.value && (t ? H.to(s.value.querySelector(".content-wrap"), {
            duration: .45,
            ease: "default-ease",
            height: "auto"
          }) : H.to(s.value.querySelector(".content-wrap"), {
            duration: .45,
            ease: "default-ease",
            height: 0
          }))
        };
      return g(() => o.activeId, t => {
        const f = t === o.data.id;
        d(f)
      }), (t, f) => {
        const b = ue,
          k = P,
          w = V;
        return u(), h("article", {
          ref_key: "accordionRef",
          ref: s,
          class: "location-item",
          onClick: A(l, ["stop"])
        }, [e("div", Ee, [e("p", Oe, v(t.data.title), 1), e("div", {
          class: R(["icon", {
            active: t.data.id === t.activeId
          }])
        }, [c(b)], 2)]), e("div", Pe, [e("div", Ae, [e("p", Re, v(t.data.address.name), 1), e("a", {
          href: `tel:${t.data.phone}`,
          class: "p1_link phone-link"
        }, v(t.data.phone), 9, Ve), e("div", Fe, [(u(!0), h(T, null, E(t.data.workHours, r => (u(), h("p", {
          key: r.day,
          class: "c2"
        }, [e("span", null, v(r.day), 1), e("span", null, v(r.hour), 1)]))), 128))]), c(w, {
          to: t.data.address.link,
          external: "",
          target: "_blank"
        }, {
          default: x(() => [c(k, {
            text: "View on map",
            underline: "",
            "text-class": "c2"
          })]),
          _: 1
        }, 8, ["to"])])])], 512)
      }
    }
  }),
  ze = C(Ue, [
    ["__scopeId", "data-v-aeda8946"]
  ]);
export {
  Je as _, qe as a, ze as b, xe as u
};