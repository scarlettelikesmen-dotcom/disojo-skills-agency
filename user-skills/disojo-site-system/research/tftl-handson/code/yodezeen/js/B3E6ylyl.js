/* https://yodezeen.com/_nuxt/B3E6ylyl.js */
import {
  _ as Fe
} from "./DFrzawa6.js";
import {
  d as w,
  u as C,
  a as e,
  o as d,
  c as q,
  e as o,
  J as _e,
  b as m,
  i as B,
  f as F,
  s as S,
  $ as $e,
  n as j,
  w as T,
  t as z,
  a0 as we,
  q as Q,
  a1 as pe,
  j as E,
  z as ie,
  F as ne,
  r as ae,
  A as fe,
  v as Ie,
  B as Z,
  ah as We,
  I as ve,
  a2 as Se,
  h as P,
  ai as Ce,
  V as Te,
  W as ue,
  m as Be,
  k as je,
  C as he,
  g as te,
  H as de,
  T as Ee,
  L as Pe,
  M as Me,
  D as Le
} from "./BfIK-IeK.js";
import {
  _ as ze
} from "./DwfT8PUP.js";
import {
  E as Oe,
  u as Y,
  F as ce,
  f as le,
  a as ge,
  c as O,
  m as y,
  b as k,
  e as be,
  g as D,
  d as De,
  h as X,
  i as Ne
} from "./fVro-VDY.js";
import {
  _ as Ve
} from "./CKei0gBl.js";
import {
  u as Re
} from "./st9w5EGv.js";
const Ue = {
    class: "button-inner"
  },
  Ae = {
    class: "icon-wrapper"
  },
  Ge = w({
    __name: "PrevStep",
    setup(t) {
      const n = C("contact-form");

      function a() {
        const r = n.value.previousSteps.pop();
        r && (n.value.step = r)
      }
      return (r, i) => {
        const s = _e,
          c = ze;
        return e(n).step !== "personal_info" && e(n).step !== "thanks" ? (d(), q("button", {
          key: 0,
          onClick: a
        }, [o(s, {
          text: "prev"
        }), m("div", Ue, [m("div", Ae, [o(c, {
          class: "inner-svg",
          direction: "left"
        })]), i[0] || (i[0] = m("span", null, " prev step", -1))])])) : B("", !0)
      }
    }
  }),
  He = F(Ge, [
    ["__scopeId", "data-v-8647a9a6"]
  ]),
  Je = ["innerHTML"],
  Ke = w({
    __name: "Title",
    props: {
      text: {}
    },
    setup(t) {
      return (n, a) => (d(), q("div", {
        class: "title",
        innerHTML: t.text
      }, null, 8, Je))
    }
  }),
  N = F(Ke, [
    ["__scopeId", "data-v-4f05a1aa"]
  ]),
  Ze = {
    key: 0
  },
  Qe = w({
    __name: "Label",
    props: {
      text: {},
      forId: {},
      required: {
        type: Boolean
      },
      active: {
        type: Boolean
      },
      forTextarea: {
        type: Boolean
      },
      forFields: {
        type: Boolean
      }
    },
    setup(t) {
      return (n, a) => (d(), S($e(t.forId ? "label" : "div"), {
        for: t.forId,
        class: j(["label", {
          active: t.active,
          "for-fields": t.forFields,
          "for-textarea": t.forTextarea
        }])
      }, {
        default: T(() => [m("span", null, z(t.text), 1), t.required ? (d(), q("span", Ze, "*")) : B("", !0)]),
        _: 1
      }, 8, ["for", "class"]))
    }
  }),
  H = F(Qe, [
    ["__scopeId", "data-v-d949859f"]
  ]),
  Xe = {
    key: 0,
    class: "error"
  },
  Ye = w({
    __name: "ErrorMessage",
    props: {
      name: {}
    },
    setup(t) {
      return (n, a) => (d(), S(e(Oe), {
        name: t.name
      }, {
        default: T(({
          message: r
        }) => [r ? (d(), q("div", Xe, z(r), 1)) : B("", !0)]),
        _: 1
      }, 8, ["name"]))
    }
  }),
  U = F(Ye, [
    ["__scopeId", "data-v-ced0bbfb"]
  ]),
  et = ["id", "type", "autocomplete", "onInput"],
  tt = w({
    __name: "Input",
    props: {
      name: {},
      type: {},
      label: {},
      required: {
        type: Boolean
      },
      isActive: {
        type: Boolean
      },
      autocomplete: {},
      country: {},
      dropDownOpen: {
        type: Boolean
      }
    },
    emits: ["inputClick"],
    setup(t, {
      emit: n
    }) {
      const a = t,
        {
          dropDownOpen: r
        } = we(a),
        i = n,
        s = E(!1);

      function c() {
        s.value = !0
      }

      function l() {
        r.value ? s.value = !0 : s.value = !1
      }
      Q(r, v => {
        v || (s.value = !1)
      });
      const {
        value: u,
        setValue: _
      } = Y(a.name);

      function f(v, p) {
        const b = v.target;
        if (a.type === "tel") {
          let h = b.value.replace(/\D/g, "");
          if (!h) {
            p.onChange("");
            return
          }
          a.country && (h = le(a.country, h, !0)), p.onChange(h)
        }
      }
      return Q(() => a.country, async v => {
        await ie(), v && u.value && _(le(v, u.value.replace(/\D/g, ""), !0))
      }), (v, p) => {
        const b = H,
          h = U;
        return d(), S(e(ce), {
          name: t.name
        }, {
          default: T(({
            field: g,
            meta: I
          }) => [m("div", {
            class: j(["field", {
              error: I.touched && !I.valid
            }])
          }, [o(b, {
            "for-id": t.name,
            text: t.label,
            required: t.required,
            active: e(s) || !!g.value || t.isActive,
            "for-fields": ""
          }, null, 8, ["for-id", "text", "required", "active"]), m("input", pe(g, {
            id: t.name,
            type: t.type,
            autocomplete: t.autocomplete || "on",
            class: "input",
            onInput: $ => f($, g),
            onFocus: c,
            onBlur: l,
            onClick: p[0] || (p[0] = $ => i("inputClick"))
          }), null, 16, et), o(h, {
            name: t.name
          }, null, 8, ["name"])], 2)]),
          _: 1
        }, 8, ["name"])
      }
    }
  }),
  ee = F(tt, [
    ["__scopeId", "data-v-7b668eaf"]
  ]),
  nt = {
    key: 0,
    class: "dropdown"
  },
  at = {
    class: "dropdown-items"
  },
  ot = ["onClick"],
  rt = w({
    __name: "SelectCountry",
    props: {
      name: {},
      label: {},
      options: {},
      required: {
        type: Boolean
      }
    },
    setup(t) {
      const n = E(null),
        a = t,
        r = E(!1),
        i = () => r.value = !r.value,
        s = () => r.value = !1;
      ge(n, s);
      const {
        value: c,
        meta: l
      } = Y(a.name, void 0, {
        initialValue: null
      });

      function u(b) {
        c.value = b, s()
      }
      const _ = ["7", "375"],
        f = a.options.map(b => {
          if (!b.format || _.includes(b.dialCode)) return [];
          const h = le(b, b.dialCode);
          return {
            ...b,
            dialCode: h,
            hasDivider: b.format?.[h.length] === "-" || !1
          }
        }).flat(),
        v = ["us", "ae", "gb", "pl", "ua", "it"],
        p = [];
      for (const b of v) {
        const h = f.findIndex(g => g.iso2 === b);
        if (h > -1) {
          const g = f.splice(h, 1)[0];
          p.push(g)
        }
      }
      return f.unshift(...p), (b, h) => {
        const g = H,
          I = U;
        return d(), q("div", {
          ref_key: "selectWrapper",
          ref: n,
          class: j(["field", {
            error: e(l).touched && !e(l).valid
          }])
        }, [o(g, {
          text: t.label,
          required: t.required,
          active: !!e(c) || e(r),
          "for-fields": ""
        }, null, 8, ["text", "required", "active"]), m("div", {
          class: j(["select", {
            open: e(r)
          }]),
          onClick: i
        }, [h[0] || (h[0] = m("svg", {
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [m("path", {
          d: "M6 10L1.66987 4L10.3301 4L6 10Z",
          fill: "#2D2A2A"
        })], -1)), m("span", null, z(e(c)), 1), e(r) ? (d(), q("ul", nt, [m("div", at, [(d(!0), q(ne, null, ae(e(f), $ => (d(), q("li", {
          key: $.dialCode,
          class: j({
            selected: e(c) === $.dialCode
          }),
          onClick: fe(x => u($.dialCode), ["stop"])
        }, [m("span", null, z($.dialCode), 1), m("span", null, z($.name), 1)], 10, ot))), 128))])])) : B("", !0)], 2), o(I, {
          name: t.name
        }, null, 8, ["name"])], 2)
      }
    }
  }),
  st = F(rt, [
    ["__scopeId", "data-v-d1e296cb"]
  ]),
  it = {
    key: 0,
    class: "btn-error"
  },
  lt = w({
    __name: "Button",
    props: {
      error: {
        type: Boolean
      },
      errorText: {}
    },
    setup(t) {
      return (n, a) => {
        const r = _e;
        return d(), q("button", {
          class: j(["button", {
            error: t.error
          }])
        }, [o(r, {
          text: "next"
        }), t.error ? (d(), q("p", it, z(t.errorText ? t.errorText : "Complete all fields to continue"), 1)) : B("", !0)], 2)
      }
    }
  }),
  V = F(lt, [
    ["__scopeId", "data-v-50a0af18"]
  ]);
async function me(t) {
  if (!t) return;
  const a = new TextEncoder().encode(t.trim().toLowerCase()),
    r = await crypto.subtle.digest("SHA-256", a);
  return Array.from(new Uint8Array(r)).map(i => i.toString(16).padStart(2, "0")).join("")
}
const ct = {
    class: "personal-info"
  },
  ut = {
    class: "anim-wrap"
  },
  dt = {
    class: "country-field"
  },
  mt = ["value"],
  _t = ["value"],
  pt = ["value"],
  ft = w({
    __name: "PersonalInfo",
    props: {
      data: {}
    },
    setup(t) {
      const n = Z(() => window.__utm?.gclid || ""),
        a = Z(() => window.__utm?.wbraid || ""),
        r = Z(() => window.__utm?.gbraid || ""),
        i = C("from-career"),
        s = C("contact-form"),
        {
          personal_info: c
        } = s.value,
        l = t,
        {
          title: u,
          fields: _
        } = l.data,
        {
          name: f,
          phone: v,
          email: p
        } = _,
        b = O({
          name: y(f.required, k().required("Is a required field").min(2, "Must be at least 2 characters").matches(/^[^\d]*$/, "Invalid format")),
          email: y(p.required, k().required("Is a required field").matches(be, "Enter a valid e-mail (e.g. test@gmail.com)")),
          country: k().required("Is a required field"),
          phone: y(v.required, k().required("Is a required field").min(7, "Phone number must be at least 7 digits").max(12, "Phone number must be at most 12 digits"))
        }),
        h = async ({
          name: x,
          email: M,
          phone: L,
          country: R
        }) => {
          s.value.previousSteps.push("personal_info");
          const W = new URLSearchParams(window.location.search),
            K = W.has("gclid") || W.has("gbraid") || W.has("wbraid") || W.has("utm_source") || W.has("utm_medium") || W.has("utm_campaign");
          let A = {
            gclid: "",
            gbraid: "",
            wbraid: "",
            utm_source: "",
            utm_medium: "",
            utm_campaign: "",
            page_url: ""
          };
          const G = sessionStorage.getItem("lead_tracking");
          if (G) try {
            A = JSON.parse(G)
          } catch (ye) {
            console.error("Failed to parse lead_tracking from sessionStorage", ye)
          }
          s.value.tracking = K ? {
            gclid: W.get("gclid") || "",
            gbraid: W.get("gbraid") || "",
            wbraid: W.get("wbraid") || "",
            utm_source: W.get("utm_source") || "",
            utm_medium: W.get("utm_medium") || "",
            utm_campaign: W.get("utm_campaign") || "",
            page_url: window.location.href
          } : A, i.value ? (s.value.step = "career", s.value.chosenForm = "career") : s.value.step = "pick_form", s.value.personal_info = {
            name: x,
            email: M,
            phone: R + " " + L
          };
          const re = We(),
            xe = await me(M),
            ke = await me(L);
          ve({
            event: "form_submit",
            form_type: "general",
            form_name: "Connect Us",
            step_count: 1,
            page_template: "connect_form",
            event_id: re,
            email: xe,
            phone: ke,
            gclid: window.__utm?.gclid,
            wbraid: window.__utm?.wbraid,
            gbraid: window.__utm?.gbraid
          }, {
            capi: !0,
            user: {
              email: M,
              phone: `${R}${L}`,
              name: x
            }
          })
        }, g = E(!1), I = Se();

      function $(x) {
        const M = I.value.$el;
        !M || M?.contains(x.target) || (g.value = !1)
      }
      return Q(g, x => x ? document.addEventListener("click", $) : document.removeEventListener("click", $)), (x, M) => {
        const L = N,
          R = ee,
          W = st,
          K = Ie,
          A = V;
        return d(), q("div", ct, [o(L, {
          text: e(u)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(b),
          "initial-values": e(c),
          class: "form",
          onSubmit: h
        }, {
          default: T(({
            errors: G
          }) => [m("div", ut, [o(R, {
            name: "name",
            type: "text",
            label: e(f).title,
            required: e(f).required
          }, null, 8, ["label", "required"]), m("div", dt, [o(W, {
            name: "country",
            label: "CODE",
            options: e(De.allCountries),
            required: ""
          }, null, 8, ["options"]), o(R, {
            name: "phone",
            type: "tel",
            label: e(v).title,
            required: ""
          }, null, 8, ["label"])]), o(R, {
            name: "email",
            type: "email",
            label: e(p).title,
            required: e(p).required
          }, null, 8, ["label", "required"])]), o(K, null, {
            default: T(() => [m("input", {
              type: "hidden",
              name: "gclid",
              value: e(n)
            }, null, 8, mt), m("input", {
              type: "hidden",
              name: "wbraid",
              value: e(a)
            }, null, 8, _t), m("input", {
              type: "hidden",
              name: "gbraid",
              value: e(r)
            }, null, 8, pt)]),
            _: 1
          }), o(A, {
            error: Object.keys(G).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema", "initial-values"])])
      }
    }
  }),
  vt = F(ft, [
    ["__scopeId", "data-v-7fd12bc3"]
  ]),
  ht = ["onClick"],
  gt = {
    class: "circle"
  },
  bt = {
    key: 0,
    class: "dot"
  },
  qt = {
    class: "text"
  },
  xt = w({
    __name: "RadioGroup",
    props: {
      name: {},
      label: {},
      options: {},
      required: {
        type: Boolean
      },
      horizontal: {
        type: Boolean
      },
      mobVertical: {
        type: Boolean
      },
      withoutErrorMessage: {
        type: Boolean
      }
    },
    emits: ["update:selected"],
    setup(t, {
      emit: n
    }) {
      const a = t,
        {
          value: r,
          meta: i
        } = Y(a.name),
        s = n,
        c = l => {
          r.value = l, s("update:selected", l)
        };
      return (l, u) => {
        const _ = H,
          f = U;
        return d(), q("div", {
          class: j(["field", {
            error: e(i).touched && !e(i).valid
          }])
        }, [t.label ? (d(), S(_, {
          key: 0,
          class: "radio-label",
          text: t.label,
          required: t.required,
          "for-fields": !1
        }, null, 8, ["text", "required"])) : B("", !0), m("div", {
          class: j(["radio-group", {
            horizontal: t.horizontal,
            "mob-vertical": t.mobVertical
          }])
        }, [(d(!0), q(ne, null, ae(t.options, v => (d(), q("div", {
          key: v.value,
          class: j(["radio", {
            selected: e(r) === v.value
          }]),
          onClick: p => c(v.value)
        }, [m("span", gt, [e(r) === v.value ? (d(), q("span", bt)) : B("", !0)]), m("span", qt, z(v.text), 1)], 10, ht))), 128))], 2), t.withoutErrorMessage ? B("", !0) : (d(), S(f, {
          key: 1,
          name: t.name
        }, null, 8, ["name"]))], 2)
      }
    }
  }),
  qe = F(xt, [
    ["__scopeId", "data-v-35c52d4c"]
  ]),
  kt = {
    class: "pick-form"
  },
  yt = w({
    __name: "PickForm",
    props: {
      data: {}
    },
    setup(t) {
      const n = t,
        {
          options: a,
          title: r
        } = n.data,
        i = C("contact-form"),
        s = {
          pickForm: i.value.chosenForm || a[0]?.value || ""
        },
        c = Z(() => r.replace("{name}", i.value.personal_info.name));
      P(() => {
        i.value.currentScreenNumber = 2
      });
      const l = O({
          pickForm: k().required("Please make a selection")
        }),
        u = f => {
          f === "project" || f === "media" || f === "development" || f === "supplier" ? i.value.totalSteps = 3 : i.value.totalSteps = 4
        },
        _ = async f => {
          i.value.chosenForm = f.pickForm, i.value.previousSteps.push("pick_form"), i.value.step = f.pickForm, console.log(f.pickForm)
        };
      return (f, v) => {
        const p = N,
          b = qe,
          h = V;
        return d(), q("div", kt, [o(p, {
          text: e(c)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(l),
          "initial-values": s,
          class: "form",
          onSubmit: _
        }, {
          default: T(({
            errors: g
          }) => [o(b, {
            name: "pickForm",
            options: e(a),
            required: "",
            "without-error-message": "",
            "onUpdate:selected": u
          }, null, 8, ["options"]), o(h, {
            error: Object.keys(g).length !== 0,
            "error-text": "Please make a selection"
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema"])])
      }
    }
  }),
  Ft = F(yt, [
    ["__scopeId", "data-v-da54db4f"]
  ]),
  $t = ["onClick"],
  wt = {
    class: "wrap"
  },
  It = {
    class: "circle"
  },
  Wt = {
    key: 0,
    class: "dot"
  },
  St = {
    class: "text"
  },
  Ct = w({
    __name: "CheckboxGroup",
    props: {
      big: {
        type: Boolean
      },
      name: {},
      label: {},
      options: {},
      required: {
        type: Boolean
      }
    },
    setup(t) {
      const n = t,
        {
          value: a,
          meta: r
        } = Y(n.name),
        i = s => {
          if (!a.value) {
            a.value = [s];
            return
          }
          a.value.includes(s) ? a.value = a.value.filter(c => c !== s) : a.value = [...a.value, s]
        };
      return (s, c) => {
        const l = H,
          u = U;
        return d(), q("div", {
          class: j(["field", {
            error: e(r).touched && !e(r).valid
          }])
        }, [t.label ? (d(), S(l, {
          key: 0,
          class: "checkbox-label",
          text: t.label,
          "for-fields": !1
        }, null, 8, ["text"])) : B("", !0), m("div", {
          class: j(["checkbox-group", {
            big: t.big
          }])
        }, [(d(!0), q(ne, null, ae(t.options, _ => (d(), q("div", {
          key: _.value,
          class: j(["checkbox", {
            checked: e(a)?.includes(_.value)
          }]),
          onClick: f => i(_.value)
        }, [m("div", wt, [m("div", It, [e(a)?.includes(_.value) ? (d(), q("span", Wt)) : B("", !0)]), m("span", St, z(_.text), 1)])], 10, $t))), 128))], 2), o(u, {
          name: t.name
        }, null, 8, ["name"])], 2)
      }
    }
  }),
  oe = F(Ct, [
    ["__scopeId", "data-v-fb4e1632"]
  ]),
  Tt = ["id"],
  Bt = w({
    __name: "Textarea",
    props: {
      name: {},
      label: {},
      required: {
        type: Boolean
      }
    },
    setup(t) {
      const n = E(!1);

      function a() {
        n.value = !0
      }

      function r() {
        n.value = !1
      }
      return (i, s) => {
        const c = H,
          l = U;
        return d(), S(e(ce), {
          name: t.name
        }, {
          default: T(({
            field: u,
            meta: _
          }) => [m("div", {
            class: j(["field", {
              error: _.touched && !_.valid
            }])
          }, [o(c, {
            "for-id": t.name,
            text: t.label,
            required: t.required,
            active: e(n) || !!u.value,
            "for-fields": ""
          }, null, 8, ["for-id", "text", "required", "active"]), m("textarea", pe(u, {
            id: t.name,
            class: "textarea",
            onFocus: a,
            onBlur: r
          }), null, 16, Tt), o(l, {
            name: t.name
          }, null, 8, ["name"])], 2)]),
          _: 1
        }, 8, ["name"])
      }
    }
  }),
  J = F(Bt, [
    ["__scopeId", "data-v-ae689bf1"]
  ]),
  jt = {
    class: "start-project"
  },
  Et = {
    class: "textarea-container"
  },
  Pt = w({
    __name: "StartProject",
    props: {
      data: {}
    },
    setup(t) {
      const n = t,
        a = C("contact-form"),
        {
          start_project: r
        } = a.value,
        i = {
          challenge: r.challenge?.length ? r.challenge : [n.data.challenge.items[0]?.value],
          area: r.area || n.data.area.items[0]?.value,
          about: r.about || ""
        },
        {
          title: s,
          challenge: c,
          area: l,
          about: u
        } = n.data;
      P(() => {
        a.value.currentScreenNumber = 3
      });
      const _ = O({
          challenge: c.required ? X().of(k()).min(1, "Please make a selection") : X().of(k()),
          area: y(l.required, k().required("Please make a selection")),
          about: y(u.required, k().required("Is a required field"))
        }),
        f = async v => {
          a.value.previousSteps.push("project"), a.value.start_project = {
            about: v.about,
            area: v.area,
            challenge: v.challenge
          }, a.value.step = "career2"
        };
      return (v, p) => {
        const b = N,
          h = oe,
          g = qe,
          I = J,
          $ = V;
        return d(), q("div", jt, [o(b, {
          text: e(s)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(_),
          "initial-values": i,
          onSubmit: f
        }, {
          default: T(({
            errors: x
          }) => [o(h, {
            name: "challenge",
            options: e(c).items,
            label: e(c).title
          }, null, 8, ["options", "label"]), o(g, {
            class: "radio-container",
            name: "area",
            options: e(l).items,
            label: e(l).title,
            horizontal: "",
            "mob-vertical": ""
          }, null, 8, ["options", "label"]), m("div", Et, [o(I, {
            name: "about",
            label: e(u).text,
            required: e(u).required
          }, null, 8, ["label", "required"])]), o($, {
            error: Object.keys(x).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema"])])
      }
    }
  }),
  Mt = F(Pt, [
    ["__scopeId", "data-v-e4b3a691"]
  ]),
  Lt = {
    key: 0,
    class: "dropdown"
  },
  zt = ["onClick"],
  Ot = w({
    __name: "Select",
    props: {
      name: {},
      label: {},
      options: {},
      required: {
        type: Boolean
      }
    },
    setup(t) {
      const n = E(null),
        a = t,
        r = E(!1),
        i = () => r.value = !r.value,
        s = () => r.value = !1;
      ge(n, s);
      const {
        value: c,
        meta: l
      } = Y(a.name), u = Z(() => a.options.find(f => f.value === c.value)?.text || "");

      function _(f) {
        c.value = f, s()
      }
      return (f, v) => {
        const p = H,
          b = U;
        return d(), q("div", {
          ref_key: "selectWrapper",
          ref: n,
          class: j(["field", {
            error: e(l).touched && !e(l).valid
          }])
        }, [o(p, {
          text: t.label,
          required: t.required,
          active: !!e(u) || e(r),
          "for-fields": ""
        }, null, 8, ["text", "required", "active"]), m("div", {
          class: j(["select", {
            open: e(r)
          }]),
          onClick: i
        }, [v[0] || (v[0] = m("svg", {
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [m("path", {
          d: "M6 10L1.66987 4L10.3301 4L6 10Z",
          fill: "#2D2A2A"
        })], -1)), m("span", null, z(e(u)), 1), e(r) ? (d(), q("ul", Lt, [(d(!0), q(ne, null, ae(t.options, h => (d(), q("li", {
          key: h.value,
          class: j({
            selected: e(c) === h.value
          }),
          onClick: fe(g => _(h.value), ["stop"])
        }, z(h.text), 11, zt))), 128))])) : B("", !0)], 2), o(b, {
          name: t.name
        }, null, 8, ["name"])], 2)
      }
    }
  }),
  Dt = F(Ot, [
    ["__scopeId", "data-v-47f0f877"]
  ]),
  Nt = {},
  Vt = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  };

function Rt(t, n) {
  return d(), q("svg", Vt, [...n[0] || (n[0] = [m("path", {
    d: "M8 1.5V4.5H11V12.5H2V1.5H8Z",
    stroke: "#F8F8F8"
  }, null, -1), m("path", {
    d: "M9 1L11.5 3.5",
    stroke: "#F8F8F8"
  }, null, -1)])])
}
const Ut = F(Nt, [
    ["render", Rt]
  ]),
  At = ["for"],
  Gt = {
    key: 0,
    class: "file-icon"
  },
  Ht = {
    class: "file-name"
  },
  Jt = ["id", "accept", "onChange"],
  Kt = ["onClick"],
  Zt = w({
    __name: "File",
    props: {
      name: {},
      placeholder: {},
      accept: {},
      required: {
        type: Boolean
      }
    },
    setup(t) {
      const n = t;

      function a(i, s) {
        const l = i.target.files;
        l && s(l[0] ?? null)
      }

      function r(i) {
        const s = document.querySelector(`input[name="${n.name}"]`);
        s && (s.value = ""), i(null)
      }
      return (i, s) => {
        const c = Ut,
          l = U;
        return d(), S(e(ce), {
          name: t.name
        }, {
          default: T(({
            value: u,
            handleChange: _,
            meta: f
          }) => [m("div", {
            class: j(["field", {
              error: f.touched && !f.valid
            }])
          }, [m("label", {
            for: t.name,
            class: "button"
          }, [u ? (d(), q("span", Gt, [o(c, {
            class: "inner-svg"
          })])) : B("", !0), m("span", Ht, [m("span", null, z(u?.name || t.placeholder), 1)]), m("input", {
            id: t.name,
            type: "file",
            class: "hidden",
            accept: t.accept,
            onChange: v => a(v, _)
          }, null, 40, Jt)], 8, At), u ? (d(), q("button", {
            key: 0,
            class: "remove",
            type: "button",
            onClick: v => r(_)
          }, [...s[0] || (s[0] = [m("svg", {
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [m("path", {
            d: "M2.5 11.5L11.5002 2.49978",
            stroke: "#F8F8F8"
          }), m("path", {
            d: "M2.5 2.5L11.5002 11.5002",
            stroke: "#F8F8F8"
          })], -1)])], 8, Kt)) : B("", !0), o(l, {
            name: t.name
          }, null, 8, ["name"])], 2)]),
          _: 1
        }, 8, ["name"])
      }
    }
  }),
  Qt = F(Zt, [
    ["__scopeId", "data-v-394c1b82"]
  ]),
  Xt = {
    class: "join-team"
  },
  Yt = {
    class: "two-cols mb"
  },
  en = {
    class: "two-cols mb"
  },
  tn = {
    class: "two-cols"
  },
  nn = {
    class: "textarea-container"
  },
  an = w({
    __name: "JoinTeam",
    props: {
      data: {}
    },
    setup(t) {
      const n = C("contact-form"),
        {
          join: a
        } = n.value,
        r = t,
        {
          title: i,
          fields: s
        } = r.data,
        {
          job: c,
          first_name: l,
          last_name: u,
          message: _,
          phone: f,
          email: v,
          instagram: p,
          telegram: b,
          behance: h,
          cv: g
        } = s;
      P(() => {
        n.value.currentScreenNumber = 3
      });
      const I = O({
          job: k().required("Is a required field"),
          first_name: y(l.required, k().required("Is a required field").min(2, "Must be at least 2 characters").matches(/^[^\d]*$/, "Invalid format")),
          last_name: y(u.required, k().required("Is a required field").min(2, "Must be at least 2 characters").matches(/^[^\d]*$/, "Invalid format")),
          message: y(_.required, k().required("Is a required field")),
          instagram: y(p.required, k().required("Is a required field")),
          telegram: y(b.required, k().required("Is a required field")),
          behance: y(h.required, k().required("Is a required field")),
          email: y(v.required, k().required("Is a required field").matches(be, "Enter a valid e-mail (e.g. test@gmail.com)")),
          phone: y(f.required, k().required("Is a required field").min(10, "Must be at least 10 characters").max(15, "Must be at most 15 characters")),
          cv: y(g.required, Ne().required("Please upload the file").test("fileSize", "PDF must be smaller than 2MB", x => x?.size != null ? x.size < 2 * 1024 * 1024 : !1))
        }),
        $ = async x => {
          n.value.previousSteps.push("career"), n.value.step = "career2", n.value.join = {
            job: x.job,
            first_name: x.first_name,
            last_name: x.last_name,
            phone: x.phone,
            email: x.email,
            instagram: x.instagram,
            telegram: x.telegram,
            behance: x.behance,
            message: x.message,
            cv: x.cv
          }
        };
      return (x, M) => {
        const L = N,
          R = Dt,
          W = ee,
          K = J,
          A = Qt,
          G = V;
        return d(), q("div", Xt, [o(L, {
          text: e(i)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(I),
          "initial-values": e(a),
          class: "form",
          onSubmit: $
        }, {
          default: T(({
            errors: re
          }) => [o(R, {
            name: "job",
            label: e(c).title,
            options: [...e(c).options, {
              text: "other",
              value: "other"
            }],
            required: ""
          }, null, 8, ["label", "options"]), m("div", Yt, [o(W, {
            name: "first_name",
            type: "text",
            label: e(l).title,
            required: e(l).required
          }, null, 8, ["label", "required"]), o(W, {
            name: "last_name",
            type: "text",
            label: e(u).title,
            required: e(u).required
          }, null, 8, ["label", "required"])]), o(W, {
            name: "phone",
            type: "tel",
            label: e(f).title,
            required: e(f).required
          }, null, 8, ["label", "required"]), m("div", en, [o(W, {
            name: "email",
            type: "email",
            label: e(v).title,
            required: e(v).required
          }, null, 8, ["label", "required"]), o(W, {
            name: "telegram",
            type: "text",
            label: e(b).title,
            required: e(b).required
          }, null, 8, ["label", "required"])]), m("div", tn, [o(W, {
            name: "instagram",
            type: "text",
            label: e(p).title,
            required: e(p).required
          }, null, 8, ["label", "required"]), o(W, {
            name: "behance",
            type: "text",
            label: e(h).title,
            required: e(h).required
          }, null, 8, ["label", "required"])]), m("div", nn, [o(K, {
            name: "message",
            label: e(_).title,
            required: e(_).required
          }, null, 8, ["label", "required"])]), o(A, {
            name: "cv",
            placeholder: e(g).title,
            required: e(g).required
          }, null, 8, ["placeholder", "required"]), o(G, {
            error: Object.keys(re).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema", "initial-values"])])
      }
    }
  }),
  on = F(an, [
    ["__scopeId", "data-v-bcf69361"]
  ]),
  rn = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let se = null;
const sn = () => window.turnstile ? Promise.resolve(window.turnstile) : (se ??= new Promise((t, n) => {
    const a = document.createElement("script");
    a.src = rn, a.async = !0, a.onload = () => window.turnstile ? t(window.turnstile) : n(new Error("Turnstile missing")), a.onerror = () => {
      se = null, a.remove(), n(new Error("Turnstile script failed to load"))
    }, document.head.appendChild(a)
  }), se),
  ln = 6e4,
  cn = w({
    __name: "Turnstile",
    props: {
      action: {}
    },
    setup(t, {
      expose: n
    }) {
      const a = t,
        {
          turnstileSiteKey: r
        } = Ce().public,
        i = E(),
        s = E(""),
        c = E(!1);
      let l, u = !1;
      return P(async () => {
        if (r) try {
          const v = await sn();
          if (u || !i.value) return;
          l = v.render(i.value, {
            sitekey: r,
            action: a.action,
            appearance: "interaction-only",
            theme: "light",
            "refresh-expired": "auto",
            callback: p => {
              s.value = p, c.value = !1
            },
            "error-callback": p => {
              console.error("Turnstile error", p), s.value = "", c.value = !0
            },
            "expired-callback": () => s.value = "",
            "timeout-callback": () => s.value = ""
          })
        } catch (v) {
          console.error(v), c.value = !0
        }
      }), Te(() => {
        u = !0, l && window.turnstile?.remove(l)
      }), n({
        getToken: () => r ? s.value ? Promise.resolve(s.value) : c.value ? Promise.reject(new Error("Turnstile failed")) : new Promise((v, p) => {
          const b = setTimeout(() => {
              h(), p(new Error("Turnstile timeout"))
            }, ln),
            h = Q([s, c], ([g, I]) => {
              !g && !I || (clearTimeout(b), h(), g ? v(g) : p(new Error("Turnstile failed")))
            })
        }) : Promise.resolve(""),
        reset: () => {
          s.value = "", c.value = !1, l && window.turnstile?.reset(l)
        }
      }), (v, p) => e(r) ? (d(), q("div", {
        key: 0,
        ref_key: "containerRef",
        ref: i,
        class: "turnstile"
      }, null, 512)) : B("", !0)
    }
  }),
  un = F(cn, [
    ["__scopeId", "data-v-65fb708f"]
  ]),
  dn = {
    class: "join2"
  },
  mn = w({
    __name: "JoinTeam2",
    props: {
      data: {}
    },
    setup(t) {
      const n = C("contact-form"),
        a = C("from-career"),
        {
          join2: r
        } = n.value,
        i = t,
        {
          title: s,
          find: c
        } = i.data,
        l = E(),
        u = E(!1),
        _ = E("");
      P(() => {
        n.value.currentScreenNumber = 4
      });
      const f = O({
          find: X().of(k()).min(1, "Please make a selection")
        }),
        v = async () => {
          const h = await l.value?.getToken().catch(() => {
              throw new Error("turnstile")
            }),
            g = new FormData;
          g.append("data", JSON.stringify(n.value)), g.append("turnstileToken", h || ""), n.value.join.cv && g.append("cv", n.value.join.cv), await $fetch("/api/form/submit", {
            method: "POST",
            body: g
          })
        }, p = h => h instanceof Error && h.message === "turnstile" ? "Please complete the verification" : h.statusCode === 403 ? "Verification failed, try again" : "Something went wrong, try again", b = async h => {
          if (!u.value) {
            u.value = !0, _.value = "", n.value.join2 = {
              find: h.find
            };
            try {
              await v()
            } catch (g) {
              console.error(g), _.value = p(g), l.value?.reset(), u.value = !1;
              return
            }
            n.value.previousSteps.push("career2"), a.value ? await ue("/connect-us/thank_you_career") : await ue(`/connect-us/thank_you_${n.value.chosenForm}`)
          }
        };
      return (h, g) => {
        const I = N,
          $ = oe,
          x = un,
          M = V;
        return d(), q("div", dn, [o(I, {
          text: e(s)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(f),
          "initial-values": e(r),
          onSubmit: b
        }, {
          default: T(({
            errors: L
          }) => [o($, {
            name: "find",
            options: e(c),
            big: ""
          }, null, 8, ["options"]), o(x, {
            ref_key: "turnstileRef",
            ref: l,
            action: "connect_us"
          }, null, 512), o(M, {
            error: Object.keys(L).length !== 0 || !!e(_),
            "error-text": e(_),
            disabled: e(u)
          }, null, 8, ["error", "error-text", "disabled"])]),
          _: 1
        }, 8, ["validation-schema", "initial-values"])])
      }
    }
  }),
  _n = F(mn, [
    ["__scopeId", "data-v-5e992d55"]
  ]),
  pn = {
    class: "media"
  },
  fn = {
    class: "textarea-container"
  },
  vn = w({
    __name: "MediaForm",
    props: {
      data: {}
    },
    setup(t) {
      const n = C("contact-form"),
        {
          media: a
        } = n.value,
        r = t,
        {
          title: i,
          fields: s
        } = r.data,
        {
          name: c,
          magazine: l,
          link: u,
          message: _
        } = s;
      P(() => {
        n.value.currentScreenNumber = 3
      });
      const f = O({
          name: y(c.require, k().required("Is a required field").min(2, "Must be at least 2 characters").matches(/^[^\d]*$/, "Invalid format")),
          magazine: y(l.require, k().required("Is a required field")),
          link: y(u.require, k().required("Is a required field")),
          message: y(_.require, k().required("Is a required field"))
        }),
        v = async p => {
          n.value.previousSteps.push("media"), n.value.media = {
            name: p.name,
            magazine: p.magazine,
            link: p.link,
            message: p.message
          }, n.value.step = "career2"
        };
      return (p, b) => {
        const h = N,
          g = ee,
          I = J,
          $ = V;
        return d(), q("div", pn, [o(h, {
          text: e(i)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(f),
          "initial-values": e(a),
          class: "form",
          onSubmit: v
        }, {
          default: T(({
            errors: x
          }) => [o(g, {
            name: "name",
            type: "text",
            label: e(c).title,
            required: e(c).require
          }, null, 8, ["label", "required"]), o(g, {
            name: "magazine",
            type: "text",
            label: e(l).title,
            required: e(l).require
          }, null, 8, ["label", "required"]), o(g, {
            name: "link",
            type: "text",
            label: e(u).title,
            required: e(u).require
          }, null, 8, ["label", "required"]), m("div", fn, [o(I, {
            name: "message",
            label: e(_).title,
            required: e(_).require
          }, null, 8, ["label", "required"])]), o($, {
            error: Object.keys(x).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema", "initial-values"])])
      }
    }
  }),
  hn = F(vn, [
    ["__scopeId", "data-v-1ae8a4e7"]
  ]),
  gn = {
    class: "book"
  },
  bn = w({
    __name: "BookForm",
    props: {
      data: {}
    },
    setup(t) {
      const n = t,
        {
          title: a,
          locations: r
        } = n.data,
        i = C("contact-form"),
        {
          book: s
        } = i.value,
        c = {
          locations: s.locations?.length ? s.locations : [n.data.locations[0].value]
        };
      P(() => {
        i.value.currentScreenNumber = 3
      });
      const l = O({
          locations: X().of(k()).min(1, "Please make a selection")
        }),
        u = async _ => {
          i.value.previousSteps.push("book"), i.value.step = "book2", i.value.book = {
            locations: _.locations
          }
        };
      return (_, f) => {
        const v = N,
          p = oe,
          b = V;
        return d(), q("div", gn, [o(v, {
          text: e(a)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(l),
          "initial-values": c,
          onSubmit: u
        }, {
          default: T(({
            errors: h
          }) => [o(p, {
            name: "locations",
            options: e(r),
            big: ""
          }, null, 8, ["options"]), o(b, {
            error: Object.keys(h).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema"])])
      }
    }
  }),
  qn = F(bn, [
    ["__scopeId", "data-v-a93c28c1"]
  ]),
  xn = {
    class: "book"
  },
  kn = {
    class: "textarea-container"
  },
  yn = w({
    __name: "BookForm2",
    props: {
      data: {}
    },
    setup(t) {
      const n = t,
        {
          title: a,
          topic: r,
          message: i
        } = n.data,
        s = C("contact-form"),
        {
          book2: c
        } = s.value,
        l = {
          ...c,
          topic: c.topic.length ? c.topic : [r[0].value]
        };
      P(() => {
        s.value.currentScreenNumber = 4
      });
      const u = O({
          topic: X().of(k()).min(1, "Please make a selection"),
          about: y(i.required, k().required("Is a required field"))
        }),
        _ = async f => {
          s.value.previousSteps.push("book2"), s.value.book2 = {
            topic: f.topic,
            message: f.message
          }, s.value.step = "career2"
        };
      return (f, v) => {
        const p = N,
          b = oe,
          h = J,
          g = V;
        return d(), q("div", xn, [o(p, {
          text: e(a)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(u),
          "initial-values": l,
          onSubmit: _
        }, {
          default: T(({
            errors: I
          }) => [o(b, {
            name: "topic",
            options: e(r),
            big: ""
          }, null, 8, ["options"]), m("div", kn, [o(h, {
            name: "message",
            label: e(i).text,
            required: e(i).required
          }, null, 8, ["label", "required"])]), o(g, {
            error: Object.keys(I).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema"])])
      }
    }
  }),
  Fn = F(yn, [
    ["__scopeId", "data-v-e597b651"]
  ]),
  $n = {
    class: "supplier"
  },
  wn = {
    class: "textarea-container"
  },
  In = w({
    __name: "SupplierForm",
    props: {
      data: {}
    },
    setup(t) {
      const n = C("contact-form"),
        {
          supplier: a
        } = n.value,
        r = t,
        {
          title: i,
          fields: s
        } = r.data,
        {
          name: c,
          magazine: l,
          link: u,
          message: _
        } = s;
      P(() => {
        n.value.currentScreenNumber = 3
      });
      const f = O({
          name: y(c.require, k().required("Is a required field").min(2, "Must be at least 2 characters").matches(/^[^\d]*$/, "Invalid format")),
          magazine: y(l.require, k().required("Is a required field")),
          link: y(u.require, k().required("Is a required field")),
          message: y(_.require, k().required("Is a required field"))
        }),
        v = async p => {
          n.value.previousSteps.push("supplier"), n.value.supplier = {
            name: p.name,
            magazine: p.magazine,
            link: p.link,
            message: p.message
          }, n.value.step = "career2"
        };
      return (p, b) => {
        const h = N,
          g = ee,
          I = J,
          $ = V;
        return d(), q("div", $n, [o(h, {
          text: e(i)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(f),
          "initial-values": e(a),
          class: "form",
          onSubmit: v
        }, {
          default: T(({
            errors: x
          }) => [o(g, {
            name: "name",
            type: "text",
            label: e(c).title,
            required: e(c).require
          }, null, 8, ["label", "required"]), o(g, {
            name: "magazine",
            type: "text",
            label: e(l).title,
            required: e(l).require
          }, null, 8, ["label", "required"]), o(g, {
            name: "link",
            type: "text",
            label: e(u).title,
            required: e(u).require
          }, null, 8, ["label", "required"]), m("div", wn, [o(I, {
            name: "message",
            label: e(_).title,
            required: e(_).require
          }, null, 8, ["label", "required"])]), o($, {
            error: Object.keys(x).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema", "initial-values"])])
      }
    }
  }),
  Wn = F(In, [
    ["__scopeId", "data-v-be26ad82"]
  ]),
  Sn = {
    class: "development"
  },
  Cn = {
    class: "textarea-container"
  },
  Tn = w({
    __name: "DevelopmentForm",
    props: {
      data: {}
    },
    setup(t) {
      const n = C("contact-form"),
        {
          development: a
        } = n.value,
        r = t,
        {
          title: i,
          fields: s
        } = r.data,
        {
          name: c,
          magazine: l,
          link: u,
          message: _
        } = s;
      P(() => {
        n.value.currentScreenNumber = 3
      });
      const f = O({
          name: y(c.require, k().required("Is a required field").min(2, "Must be at least 2 characters").matches(/^[^\d]*$/, "Invalid format")),
          magazine: y(l.require, k().required("Is a required field")),
          link: y(u.require, k().required("Is a required field")),
          message: y(_.require, k().required("Is a required field"))
        }),
        v = async p => {
          n.value.previousSteps.push("development"), n.value.development = {
            name: p.name,
            magazine: p.magazine,
            link: p.link,
            message: p.message
          }, n.value.step = "career2"
        };
      return (p, b) => {
        const h = N,
          g = ee,
          I = J,
          $ = V;
        return d(), q("div", Sn, [o(h, {
          text: e(i)
        }, null, 8, ["text"]), o(e(D), {
          "validation-schema": e(f),
          "initial-values": e(a),
          class: "form",
          onSubmit: v
        }, {
          default: T(({
            errors: x
          }) => [o(g, {
            name: "name",
            type: "text",
            label: e(c).title,
            required: e(c).require
          }, null, 8, ["label", "required"]), o(g, {
            name: "magazine",
            type: "text",
            label: e(l).title,
            required: e(l).require
          }, null, 8, ["label", "required"]), o(g, {
            name: "link",
            type: "text",
            label: e(u).title,
            required: e(u).require
          }, null, 8, ["label", "required"]), m("div", Cn, [o(I, {
            name: "message",
            label: e(_).title,
            required: e(_).require
          }, null, 8, ["label", "required"])]), o($, {
            error: Object.keys(x).length !== 0
          }, null, 8, ["error"])]),
          _: 1
        }, 8, ["validation-schema", "initial-values"])])
      }
    }
  }),
  Bn = F(Tn, [
    ["__scopeId", "data-v-4c2035f8"]
  ]),
  jn = {
    key: 0,
    class: "form-popup"
  },
  En = {
    class: "left"
  },
  Pn = {
    key: 0,
    class: "title-mob"
  },
  Mn = {
    class: "right",
    "data-lenis-prevent": ""
  },
  Ln = w({
    __name: "Popup",
    async setup(t) {
      let n, a;
      const {
        data: r
      } = ([n, a] = Be(() => Re("/api/strapi/form", "$_pTeULU3kb")), n = await n, a(), n), i = C("contact-form"), {
        isDesktop: s
      } = je();
      P(async () => {
        await ie(), he(s.value), te.to(".form-popup", {
          opacity: 1
        }), te.to(".header-inner .blur", {
          height: "100%"
        })
      });
      const c = E();
      return Q(() => i.value.step, async () => {
        await ie();
        const l = c.value?.$el || c.value;
        l && te.fromTo(l, {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: .5,
          ease: "power2.out"
        })
      }), (l, u) => {
        const _ = He,
          f = vt,
          v = Ft,
          p = Mt,
          b = on,
          h = _n,
          g = hn,
          I = qn,
          $ = Fn,
          x = Wn,
          M = Bn,
          L = Ve;
        return e(r) ? (d(), q("div", jn, [m("div", En, [o(_), u[0] || (u[0] = m("p", {
          class: "title"
        }, [de("Let’s "), m("br"), de("Connect")], -1)), e(i).step === "personal_info" ? (d(), q("p", Pn, " let’s talk ")) : B("", !0)]), m("div", Mn, [o(Ee, {
          name: "fade-slide",
          mode: "out-in"
        }, {
          default: T(() => [e(i).step === "personal_info" ? (d(), S(f, {
            key: "personal_info",
            data: e(r).personalInfo
          }, null, 8, ["data"])) : e(i).step === "pick_form" ? (d(), S(v, {
            key: "pick_form",
            data: e(r).pickForm
          }, null, 8, ["data"])) : e(i).step === "project" ? (d(), S(p, {
            key: "project",
            data: e(r).startForm
          }, null, 8, ["data"])) : e(i).step === "career" ? (d(), S(b, {
            key: "join",
            data: e(r).joinForm
          }, null, 8, ["data"])) : e(i).step === "career2" ? (d(), S(h, {
            key: "join2",
            data: e(r).joinForm2
          }, null, 8, ["data"])) : e(i).step === "media" ? (d(), S(g, {
            key: "media",
            data: e(r).mediaForm
          }, null, 8, ["data"])) : e(i).step === "book" ? (d(), S(I, {
            key: "book",
            data: e(r).bookForm
          }, null, 8, ["data"])) : e(i).step === "book2" ? (d(), S($, {
            key: "book2",
            data: e(r).bookForm2
          }, null, 8, ["data"])) : e(i).step === "supplier" ? (d(), S(x, {
            key: "supplier",
            data: e(r).supplierForm
          }, null, 8, ["data"])) : e(i).step === "development" ? (d(), S(M, {
            key: "development",
            data: e(r).developmentForm
          }, null, 8, ["data"])) : B("", !0)]),
          _: 1
        }), o(L)])])) : B("", !0)
      }
    }
  }),
  zn = F(Ln, [
    ["__scopeId", "data-v-e3f1e7b3"]
  ]),
  On = {
    class: "page connect-us-page"
  },
  Dn = {
    class: "page-container"
  },
  Nn = ["href"],
  Vn = w({
    __name: "index",
    setup(t) {
      const {
        pageData: n
      } = C("commonData").value;
      n?.meta && Pe(n.meta), P(() => {
        te.to(".connect-us-page .page-container", {
          opacity: 1
        }), he(!1), setTimeout(() => {
          ve({
            event: "form_start",
            form_name: "Connect Us",
            form_type: "general",
            page_template: "connect_form"
          })
        }, 500)
      });
      const a = C("contact-form"),
        r = C("from-career"),
        i = C("connect-us-return-to", () => "/");
      P(() => {
        s()
      }), Me(() => {
        r.value = !1
      });
      const s = () => {
        a.value.open = !1, a.value.step = "personal_info", a.value.previousSteps = [], a.value.currentScreenNumber = 2, a.value.chosenForm = "", a.value.totalSteps = 3, a.value.personal_info = {
          name: "",
          email: "",
          phone: ""
        }, a.value.start_project = {
          challenge: [],
          area: "",
          about: ""
        }, a.value.media = {
          name: "",
          magazine: "",
          link: "",
          message: ""
        }, a.value.development = {
          name: "",
          magazine: "",
          link: "",
          message: ""
        }, a.value.supplier = {
          name: "",
          magazine: "",
          link: "",
          message: ""
        }, a.value.book = {
          locations: []
        }, a.value.book2 = {
          topic: [],
          message: ""
        }, a.value.join = {
          job: "",
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          instagram: "",
          telegram: "",
          behance: "",
          message: "",
          cv: null
        }, a.value.join2 = {
          find: []
        }
      };
      return (c, l) => {
        const u = Fe,
          _ = Le,
          f = zn;
        return d(), q("div", On, [l[0] || (l[0] = m("h1", {
          class: "visually-hidden"
        }, "CONNECT US", -1)), m("div", Dn, [m("a", {
          class: "close-btn p2-button",
          href: e(i) || "/"
        }, [o(_, {
          text: "CLOSE"
        }, {
          default: T(() => [o(u, {
            class: "inner-svg"
          })]),
          _: 1
        })], 8, Nn), o(f)])])
      }
    }
  }),
  Kn = F(Vn, [
    ["__scopeId", "data-v-6ab01348"]
  ]);
export {
  Kn as
  default
};