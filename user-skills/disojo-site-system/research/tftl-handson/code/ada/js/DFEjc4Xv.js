/* https://aventuradentalarts.com/_nuxt/DFEjc4Xv.js */
import {
  d as R,
  c as W,
  u as z,
  b as G,
  v as S,
  a3 as J,
  o as r,
  e as i,
  j as s,
  C as c,
  i as e,
  k as K,
  f as n,
  h as T,
  g as A,
  p as Q,
  F as _,
  r as v,
  t as f,
  L as X,
  S as Z,
  Y as ee,
  q as te,
  D as oe,
  a1 as ae,
  O as ne,
  a4 as se,
  a5 as le,
  a6 as re,
  a0 as ie,
  a7 as ce,
  s as ue,
  N as me,
  a8 as L,
  m as de
} from "./C3LIzMiL.js";
import {
  u as pe,
  b as _e
} from "./COkvdYZ_.js";
const ve = {
    class: "footer"
  },
  fe = {
    class: "content-part top"
  },
  ge = {
    class: "left"
  },
  he = {
    class: "right"
  },
  ye = {
    type: "submit",
    class: "btn-submit",
    "aria-label": "Submit form"
  },
  be = {
    class: "content-part mt72"
  },
  xe = {
    class: "left"
  },
  ke = {
    class: "nav"
  },
  Se = {
    class: "nav"
  },
  Ce = {
    class: "right"
  },
  Ve = {
    class: "list-locations"
  },
  Te = {
    class: "c3"
  },
  Ae = ["href"],
  Le = {
    class: "days"
  },
  De = {
    class: "content-part bottom"
  },
  Pe = {
    class: "left"
  },
  we = {
    class: "c3 copyright-wrap"
  },
  Fe = {
    class: "copyright"
  },
  Be = {
    class: "right"
  },
  $e = {
    class: "links"
  },
  Ne = {
    class: "wrap-dev"
  },
  Ue = R({
    __name: "Footer",
    setup(Ie) {
      const {
        services: D,
        locations: d,
        legal: b
      } = W(), P = z("call-modal"), {
        isMobile: g
      } = G(), h = S(-1), C = S(), w = [{
        name: "Home",
        link: "/"
      }, {
        name: "About us",
        link: "/about"
      }, {
        name: "Technology",
        link: "/technology"
      }, {
        name: "Contact",
        link: "/contact"
      }], F = D.map(l => ({
        name: l.hero.title,
        link: `/service/${l.slug}`
      })), o = J({
        name: {
          value: "",
          placeholder: "Name",
          error: {
            status: !1,
            message: "Please enter your name"
          }
        },
        phone: {
          value: "",
          placeholder: "Phone number",
          error: {
            status: !1,
            message: "Please enter your phone number"
          }
        },
        location: {
          title: "",
          emailTo: ""
        },
        message: {
          value: "",
          placeholder: "Message"
        }
      }), x = S(!1), B = l => {
        h.value = h.value === l ? -1 : l
      }, $ = () => {
        var l;
        (l = C.value) == null || l.goToAndPlay(0)
      }, N = async l => {
        X(() => {
          const t = l.replace("+", "").replace(/[^\d]/gi, "").slice(0, 10);
          o.phone.value = t
        })
      }, U = () => (o.name.error.status = !L(o.name.value, {
        min: 2
      }), o.phone.error.status = !L(o.phone.value, {
        min: 9
      }), !o.name.error.status && !o.phone.error.status), I = () => {
        o.name.value = "", o.phone.value = "", o.message.value = "", o.name.error.status = !1, o.phone.error.status = !1
      }, M = async () => {
        !U() || x.value || (x.value = !0, await $fetch("/api/form/footer", {
          method: "POST",
          body: {
            name: o.name.value,
            phone: o.phone.value,
            location: o.location,
            message: o.message.value
          }
        }), x.value = !1, I())
      };
      return pe(() => {
        var l, t, y;
        Z.create({
          trigger: "footer.footer",
          start: "top bottom",
          once: !0,
          onEnter: () => {
            const p = document.querySelector("footer.footer .tftl-logo");
            p && (C.value = ee.loadAnimation({
              container: p,
              renderer: "svg",
              loop: !1,
              autoplay: !1,
              path: "/tftl-logo.json"
            }))
          }
        }), te.to("footer #bg-circle", {
          scrollTrigger: {
            trigger: "footer.footer",
            start: "top 85%",
            end: "top -10%",
            scrub: .4
          },
          scale: 2.7,
          ease: "none"
        }), g.value && (h.value = ((l = d[0]) == null ? void 0 : l.id) || -1), o.location = {
          title: ((t = d[0]) == null ? void 0 : t.title) || "",
          emailTo: ((y = d[0]) == null ? void 0 : y.emailTo) || ""
        }
      }), (l, t) => {
        const y = oe,
          p = ae,
          O = ne,
          E = se,
          V = le,
          Y = re,
          j = ie,
          q = ce,
          m = ue,
          u = me,
          H = _e;
        return r(), i("footer", ve, [s(y, null, {
          default: c(() => t[5] || (t[5] = [e("div", {
            id: "bg-circle",
            class: "bg"
          }, null, -1), e("div", {
            class: "wrap-logo"
          }, [e("div", {
            class: "logo"
          })], -1)])),
          _: 1
        }), e("div", fe, [e("div", ge, [s(p)]), e("div", he, [t[6] || (t[6] = e("p", {
          class: "form-title h4"
        }, [K(" Ready to Transform Your Smile? "), e("i", null, "Book a call.")], -1)), n(g) ? (r(), i("button", {
          key: 0,
          class: "mob-btn-book",
          onClick: t[0] || (t[0] = a => n(P).isActive = !0)
        }, [s(O, {
          text: "Book a Call"
        })])) : T("", !0), n(g) ? T("", !0) : (r(), A(E, {
          key: "footer-locations",
          modelValue: n(o).location,
          "onUpdate:modelValue": t[1] || (t[1] = a => n(o).location = a)
        }, null, 8, ["modelValue"])), e("form", {
          class: "form",
          onSubmit: Q(M, ["prevent", "stop"])
        }, [s(V, {
          modelValue: n(o).name.value,
          "onUpdate:modelValue": t[2] || (t[2] = a => n(o).name.value = a),
          type: "name",
          placeholder: n(o).name.placeholder,
          error: n(o).name.error
        }, null, 8, ["modelValue", "placeholder", "error"]), s(V, {
          modelValue: n(o).phone.value,
          "onUpdate:modelValue": [t[3] || (t[3] = a => n(o).phone.value = a), N],
          type: "phone",
          placeholder: n(o).phone.placeholder,
          error: n(o).phone.error
        }, null, 8, ["modelValue", "placeholder", "error"]), s(Y, {
          modelValue: n(o).message.value,
          "onUpdate:modelValue": t[4] || (t[4] = a => n(o).message.value = a),
          placeholder: n(o).message.placeholder
        }, null, 8, ["modelValue", "placeholder"]), e("button", ye, [s(q, null, {
          default: c(() => [s(j)]),
          _: 1
        })])], 32)])]), e("div", be, [e("div", xe, [e("div", null, [t[7] || (t[7] = e("span", {
          class: "name c2"
        }, "Services", -1)), e("nav", ke, [e("ul", null, [(r(!0), i(_, null, v(n(F), a => (r(), i("li", {
          key: a.name
        }, [s(u, {
          to: a.link
        }, {
          default: c(() => [s(m, {
            text: a.name
          }, null, 8, ["text"])]),
          _: 2
        }, 1032, ["to"])]))), 128))])])]), e("div", null, [t[8] || (t[8] = e("span", {
          class: "name c2"
        }, "Our Clinic", -1)), e("nav", Se, [e("ul", null, [(r(), i(_, null, v(w, a => e("li", {
          key: a.name
        }, [s(u, {
          to: a.link
        }, {
          default: c(() => [s(m, {
            text: a.name
          }, null, 8, ["text"])]),
          _: 2
        }, 1032, ["to"])])), 64))])])])]), e("div", Ce, [t[9] || (t[9] = e("span", {
          class: "name c2"
        }, "Locations", -1)), e("div", Ve, [n(g) ? (r(!0), i(_, {
          key: 1
        }, v(n(d).slice(0, 3), a => (r(), A(H, {
          key: a.id,
          data: a,
          "active-id": n(h),
          onToggle: B
        }, null, 8, ["data", "active-id"]))), 128)) : (r(!0), i(_, {
          key: 0
        }, v(n(d).slice(0, 3), a => (r(), i("article", {
          key: a.id,
          class: "location"
        }, [s(u, {
          to: a.address.link,
          external: "",
          target: "_blank",
          "hover-link-container": ""
        }, {
          default: c(() => [s(m, {
            text: a.title,
            underline: "",
            "text-class": "p1",
            class: "name-location"
          }, null, 8, ["text"]), e("p", Te, f(a.address.name), 1)]),
          _: 2
        }, 1032, ["to"]), e("a", {
          href: `tel:${a.phone}`,
          class: "p2"
        }, f(a.phone), 9, Ae), e("div", null, [(r(!0), i(_, null, v(a.workHours, k => (r(), i("p", {
          key: k.day,
          class: "work-hour c3"
        }, [e("span", Le, f(k.day), 1), e("span", null, f(k.hour), 1)]))), 128))])]))), 128))])]), s(p, {
          class: "socials-mob"
        })]), e("div", De, [e("div", Pe, [e("p", we, [e("span", Fe, " Copyright © " + f(new Date().getFullYear()), 1), t[10] || (t[10] = e("br", null, null, -1)), t[11] || (t[11] = e("span", null, "Aventura Dental Arts", -1))])]), e("div", Be, [e("div", $e, [s(u, {
          to: n(b).privacyPolicyUrl,
          external: "",
          target: "_blank"
        }, {
          default: c(() => [s(m, {
            text: "Privacy Policy",
            "text-class": "c3"
          })]),
          _: 1
        }, 8, ["to"]), t[12] || (t[12] = e("span", {
          class: "c3 comma"
        }, ",  ", -1)), s(u, {
          to: n(b).accessibilityStatementUrl,
          external: "",
          target: "_blank"
        }, {
          default: c(() => [s(m, {
            text: "Accessibility Statement",
            "text-class": "c3"
          })]),
          _: 1
        }, 8, ["to"]), t[13] || (t[13] = e("span", {
          class: "c3 comma"
        }, ",  ", -1)), s(u, {
          to: n(b).termsConditionsUrl,
          external: "",
          target: "_blank"
        }, {
          default: c(() => [s(m, {
            text: "Terms & Conditions",
            "text-class": "c3"
          })]),
          _: 1
        }, 8, ["to"])]), e("div", Ne, [t[15] || (t[15] = e("span", {
          class: "c3"
        }, "Developed by", -1)), s(u, {
          external: "",
          to: "https://thefirstthelast.agency/?utm_source=aveturadentalarts&utm_medium=article&utm_campaign=promo",
          target: "_blank",
          class: "tftl-link",
          "aria-label": "TFTL link",
          onMouseenter: $
        }, {
          default: c(() => t[14] || (t[14] = [e("span", {
            class: "tftl-name"
          }, null, -1), e("span", {
            class: "tftl-logo"
          }, null, -1)])),
          _: 1
        })])])])])
      }
    }
  }),
  Ye = de(Ue, [
    ["__scopeId", "data-v-e8c10733"]
  ]);
export {
  Ye as _
};