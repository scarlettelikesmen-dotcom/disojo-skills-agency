/* https://alchemy.family/_nuxt/w6Ljczyg.js */
import {
  d as T,
  V as K,
  o as q,
  c as R,
  a as l,
  z as s,
  J as H,
  M as y,
  j as r,
  E as L,
  n as C,
  O as Z,
  P,
  p as $,
  l as A,
  _ as S,
  y as z,
  L as O,
  $ as B,
  b as j,
  r as I,
  e as G,
  W as D,
  h as Q,
  k as ee,
  U as re,
  s as oe,
  B as F,
  C as te,
  T as ae,
  a3 as le
} from "./CWeo--9S.js";
import {
  _ as W
} from "./DOIemC8V.js";
import {
  v as se
} from "./CusVeKZl.js";
import {
  a as ie,
  _ as ne,
  b as ue,
  v as de
} from "./DIxLLLSG.js";
import {
  v as c
} from "./D6bKDpQI.js";
import {
  _ as pe
} from "./DOOeSOxg.js";
import {
  a as me
} from "./B7Lms0Y0.js";
import {
  _ as ce
} from "./D-FJ29ul.js";
import "./B1FdqAuq.js";
import "./3SQQwhtx.js";
const X = p => ($("data-v-ff67d553"), p = p(), A(), p),
  fe = {
    class: "form-wrap"
  },
  ve = X(() => l("p", {
    class: "title h4"
  }, [y(" Become Part "), l("br"), y(" of the Family ")], -1)),
  ge = {
    class: "bottom-tip bottom"
  },
  he = X(() => l("p", {
    class: "text a1"
  }, "Already have an account? ", -1)),
  ye = {
    type: "submit",
    class: "btn-submit"
  },
  we = T({
    __name: "FirstStep",
    props: {
      formData: {},
      isProcessing: {
        type: Boolean
      }
    },
    emits: ["changeStep", "processing"],
    setup(p, {
      emit: f
    }) {
      const {
        LOCATION_API_KEY: v
      } = K().public, m = p, {
        formData: e
      } = m, g = f;

      function V(u) {
        return e.email.error.status = !se(u.email.value), e.telegram.error.status = !u.telegram.value.trim(), e.firstName.error.status = !u.firstName.value.trim(), Object.entries(e).filter(d => {
          var h, t;
          return ((t = (h = d[1]) == null ? void 0 : h.error) == null ? void 0 : t.status) || !1
        }).length === 0
      }
      async function k() {
        if (!V(e)) return;
        g("processing", !0);
        const i = {
          name: e.firstName.value,
          email: e.email.value,
          telegram: e.telegram.value,
          city: "",
          country: "",
          country_flag: "",
          ip: ""
        };
        try {
          const d = await $fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${v}`);
          i.city = d.city, i.country = d.country_name, i.country_flag = d.country_flag, i.ip = d.ip
        } catch (d) {
          console.log("Error with getting location data", d)
        }
        try {
          const d = await $fetch("/api/sign-up/first-step", {
            method: "POST",
            body: JSON.stringify(i)
          });
          if (!d.status) {
            e.email.error.status = !0, e.email.error.networkError = !0;
            return
          }
          e.userId = (d == null ? void 0 : d.userId) || null, g("changeStep")
        } catch (d) {
          console.log("Error with first step registration", d)
        } finally {
          g("processing", !1)
        }
      }

      function N(u) {
        C(() => {
          e.telegram.value = `${u.trim().length===0?"@":"@"+u.trim().replaceAll(/[^a-zA-Z0-9/_]/g,"")}`
        })
      }

      function b(u) {
        e.telegram.value = `${u.trim().length===0?"@":u.trim()}`
      }

      function E(u) {
        e.telegram.value = `${u.trim()==="@"?"":u.trim()}`
      }

      function w(u) {
        e[u].error.status = !1, e[u].error.networkError = !1
      }
      return (u, i) => {
        const d = Z,
          h = W,
          t = P;
        return q(), R("section", fe, [ve, l("div", ge, [he, s(d, {
          to: "/sign-in",
          class: "common-link reverse"
        }, {
          default: H(() => [y(" Log in ")]),
          _: 1
        })]), l("form", {
          class: "form",
          onSubmit: L(k, ["stop", "prevent"])
        }, [s(h, {
          modelValue: r(e).firstName.value,
          "onUpdate:modelValue": i[0] || (i[0] = o => r(e).firstName.value = o),
          placeholder: r(e).firstName.placeholder,
          error: r(e).firstName.error,
          onResetError: i[1] || (i[1] = o => w("firstName")),
          class: "wrap-input"
        }, null, 8, ["modelValue", "placeholder", "error"]), s(h, {
          modelValue: r(e).email.value,
          "onUpdate:modelValue": i[2] || (i[2] = o => r(e).email.value = o),
          placeholder: r(e).email.placeholder,
          error: r(e).email.error,
          onResetError: i[3] || (i[3] = o => w("email")),
          class: "wrap-input"
        }, null, 8, ["modelValue", "placeholder", "error"]), s(h, {
          modelValue: r(e).telegram.value,
          "onUpdate:modelValue": [i[4] || (i[4] = o => r(e).telegram.value = o), N],
          placeholder: r(e).telegram.placeholder,
          error: r(e).telegram.error,
          class: "wrap-input mb-0",
          onResetError: i[5] || (i[5] = o => w("telegram")),
          onFocusHandler: b,
          onBlurHandler: E
        }, null, 8, ["modelValue", "placeholder", "error"]), l("button", ye, [s(t, {
          text: "next"
        })])], 32)])
      }
    }
  }),
  _e = S(we, [
    ["__scopeId", "data-v-ff67d553"]
  ]),
  M = p => ($("data-v-5414259f"), p = p(), A(), p),
  qe = {
    class: "form-wrap",
    "data-lenis-prevent": ""
  },
  be = {
    class: "fixed-width-wrap"
  },
  Ve = M(() => l("p", {
    class: "title h4"
  }, "Membership Application", -1)),
  ke = {
    class: "wrap-input double_2"
  },
  Ee = {
    class: "wrap-input double_2"
  },
  xe = {
    class: "wrap-input double_2"
  },
  Te = {
    class: "wrap-input"
  },
  Re = {
    class: "tooltip-wrap"
  },
  Se = {
    class: "wrap-input"
  },
  Ne = {
    class: "tooltip-wrap"
  },
  Ce = {
    class: "wrap-input double_2"
  },
  Ie = {
    class: "permissions"
  },
  $e = M(() => l("div", {
    class: "permission-title a1 text"
  }, "Optional Permissions", -1)),
  Ae = {
    class: "checkbox-wrap"
  },
  ze = j('<div class="wrap-icon__checkbox" data-v-5414259f><div class="wrap-icon__checkbox-inner" data-v-5414259f><svg width="14" height="15" viewBox="0 0 14 15" fill="none" class="inner-svg" xmlns="http://www.w3.org/2000/svg" data-v-5414259f><path opacity="1" d="M1.97412 6.53526L6.04465 10.6058L12.1504 4.5" stroke="#262626" stroke-linecap="round" data-v-5414259f></path></svg></div></div><p class="permission-detail a1 text" data-v-5414259f> I grant permission to The Alchemy Family to use my photograph/video, and likeness for marketing and informational purposes </p>', 2),
  Me = {
    class: "checkbox-wrap"
  },
  Ue = j('<div class="wrap-icon__checkbox" data-v-5414259f><div class="wrap-icon__checkbox-inner" data-v-5414259f><svg width="14" height="15" viewBox="0 0 14 15" fill="none" class="inner-svg" xmlns="http://www.w3.org/2000/svg" data-v-5414259f><path opacity="1" d="M1.97412 6.53526L6.04465 10.6058L12.1504 4.5" stroke="#262626" stroke-linecap="round" data-v-5414259f></path></svg></div></div><p class="permission-detail a1 text" data-v-5414259f> I grant permission The Alchemy Family to share my name in marketing material circulated to Invitees and elsewhere </p>', 2),
  Oe = M(() => l("p", {
    class: "permission-details a1 text"
  }, [y(" Membership is not available to the general public. "), l("br"), l("br"), y(" Prospective attendees, including founders and C-level executives from Crypto Fund Management firms, Prop Trading firms, HFT firms, Capital Allocators, Family Offices, and Asset Managers, must apply for a seat by providing details about their professional experience. Each application undergoes a thorough evaluation by the Alchemy Family board committee, which carefully selects participants based on criteria like their business credentials, industry standing, and alignment with current event attendees. ")], -1)),
  Be = {
    type: "submit",
    class: "btn-submit"
  },
  Fe = T({
    __name: "SecondStep",
    props: {
      formData: {}
    },
    emits: ["changeStep", "processing"],
    setup(p, {
      emit: f
    }) {
      const v = p,
        m = z("toast-register"),
        {
          formData: e
        } = v,
        g = f;

      function V(t) {
        e.personal.error.status = !de(e.personal.value), e.lastName.error.status = !c(t.lastName.value, {
          min: 1,
          max: 40
        }), e.telegram.error.status = !c(t.telegram.value, {
          min: 1,
          max: 100
        }), e.firstName.error.status = !c(t.firstName.value, {
          min: 1,
          max: 40
        }), e.companyName.error.status = !c(t.companyName.value, {
          min: 1,
          max: 100
        }), e.jobTitle.error.status = !c(t.jobTitle.value, {
          min: 1,
          max: 100
        }), e.phone.error.status = !c(t.phone.value, {
          min: 10,
          max: 15
        }), e["shoulder-size"].error.status = !c(t["shoulder-size"].value, {
          min: 1
        }), e["foot-size"].error.status = !c(t["foot-size"].value, {
          min: 1
        }), e.category.error.status = !t.category.value.length, e.emergencyContact.error.status = !c(t.emergencyContact.value, {
          min: 3,
          max: 100
        }), e.wishToAttend.error.status = !c(t.wishToAttend.value, {
          min: 1,
          max: 1 / 0
        }), e.contributeEvent.error.status = !c(t.contributeEvent.value, {
          min: 1,
          max: 1 / 0
        }), e.areasOfInterests.error.status = !c(t.areasOfInterests.value, {
          min: 1,
          max: 1 / 0
        }), e.allergies.error.status = !c(t.allergies.value, {
          min: 1,
          max: 1 / 0
        });
        const o = Object.entries(e).filter(n => {
          var x, _;
          return ((_ = (x = n[1]) == null ? void 0 : x.error) == null ? void 0 : _.status) || !1
        }).length === 0;
        return o ? m.value = !1 : (m.value = !0, setTimeout(() => {
          m.value = !1
        }, 7e3)), o
      }

      function k(t) {
        C(() => {
          const o = t.replace("+", "").replace(/[^\d]/gi, "");
          e.phone.value = `${o.length?"+":""}` + o
        })
      }

      function N(t) {
        if (t === e["shoulder-size"].value) {
          e["shoulder-size"].value = "";
          return
        }
        e["shoulder-size"].value = t
      }

      function b(t) {
        if (t === e["foot-size"].value) {
          e["foot-size"].value = "";
          return
        }
        e["foot-size"].value = t
      }

      function E(t) {
        e.category.value = e.category.value.filter(o => o !== t)
      }

      function w(t) {
        if (e.category.value.includes(t)) {
          e.category.value = e.category.value.filter(o => o !== t);
          return
        } else e.category.value.push(t)
      }

      function u(t) {
        C(() => {
          e.telegram.value = `${t.trim().length===0?"@":"@"+t.trim().replaceAll(/[^a-zA-Z0-9/_]/g,"")}`
        })
      }

      function i(t) {
        e.telegram.value = `${t.trim().length===0?"@":t.trim()}`
      }

      function d(t) {
        e.telegram.value = `${t.trim()==="@"?"":t.trim()}`
      }
      async function h() {
        if (V(e)) {
          g("processing", !0);
          try {
            const o = {
                data: {
                  email: e.email.value,
                  firstName: e.firstName.value,
                  lastName: e.lastName.value,
                  companyName: e.companyName.value,
                  jobTitle: e.jobTitle.value,
                  phone: e.phone.value,
                  Telegram: e.telegram.value,
                  permissionMedia: e.permissionMedia,
                  permissionShare: e.permissionShare,
                  category: e.category.value.map(_ => ({
                    Name: _
                  })),
                  website: e.personal.value,
                  shirtSize: e["shoulder-size"].value,
                  shoeSize: e["foot-size"].value,
                  linkedin: e.linkedin.value,
                  emergencyContact: e.emergencyContact.value,
                  wishToAttend: e.wishToAttend.value,
                  contributeEvent: e.contributeEvent.value,
                  areasOfInterests: e.areasOfInterests.value,
                  favoriteBook: e.favoriteBook.value,
                  favoriteMovie: e.favoriteMovie.value,
                  sports: e.sports.value,
                  allergies: e.allergies.value,
                  howHear: e.howHear.value,
                  readyForApprove: !0,
                  referralCode: e.referralCode.value,
                  createdDate: new Date().toISOString()
                }
              },
              n = localStorage.getItem("already-logged");
            await $fetch(`/api/sign-up/second-step/${e.userId}`, {
              method: "PUT",
              body: JSON.stringify(o)
            }) && (n || localStorage.setItem("already-logged", "1"), g("changeStep"))
          } catch {
            console.log("Error with adding form user")
          } finally {
            setTimeout(() => {
              g("processing", !1)
            }, 250)
          }
        }
      }
      return (t, o) => {
        const n = W,
          x = ie,
          _ = ne,
          U = ue,
          J = P;
        return q(), R("section", qe, [l("div", be, [Ve, l("form", {
          class: "form",
          onSubmit: L(h, ["stop", "prevent"])
        }, [l("div", ke, [s(n, {
          modelValue: r(e).firstName.value,
          "onUpdate:modelValue": o[0] || (o[0] = a => r(e).firstName.value = a),
          placeholder: r(e).firstName.placeholder,
          error: r(e).firstName.error,
          required: r(e).firstName.required,
          onResetError: o[1] || (o[1] = () => r(e).firstName.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).lastName.value,
          "onUpdate:modelValue": o[2] || (o[2] = a => r(e).lastName.value = a),
          placeholder: r(e).lastName.placeholder,
          error: r(e).lastName.error,
          required: r(e).lastName.required,
          onResetError: o[3] || (o[3] = () => r(e).lastName.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"])]), l("div", Ee, [s(n, {
          modelValue: r(e).email.value,
          "onUpdate:modelValue": o[4] || (o[4] = a => r(e).email.value = a),
          placeholder: "Email",
          error: {
            status: !1,
            message: ""
          },
          disabled: "",
          required: !0
        }, null, 8, ["modelValue"]), s(n, {
          modelValue: r(e).telegram.value,
          "onUpdate:modelValue": [o[5] || (o[5] = a => r(e).telegram.value = a), u],
          placeholder: r(e).telegram.placeholder,
          error: r(e).telegram.error,
          required: r(e).telegram.required,
          onResetError: o[6] || (o[6] = () => r(e).telegram.error.status = !1),
          onFocusHandler: i,
          onBlurHandler: d
        }, null, 8, ["modelValue", "placeholder", "error", "required"])]), l("div", xe, [s(n, {
          modelValue: r(e).companyName.value,
          "onUpdate:modelValue": o[7] || (o[7] = a => r(e).companyName.value = a),
          placeholder: r(e).companyName.placeholder,
          error: r(e).companyName.error,
          required: r(e).companyName.required,
          onResetError: o[8] || (o[8] = () => r(e).companyName.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).jobTitle.value,
          "onUpdate:modelValue": o[9] || (o[9] = a => r(e).jobTitle.value = a),
          placeholder: r(e).jobTitle.placeholder,
          error: r(e).jobTitle.error,
          required: r(e).jobTitle.required,
          onResetError: o[10] || (o[10] = () => r(e).jobTitle.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"])]), s(n, {
          modelValue: r(e).personal.value,
          "onUpdate:modelValue": o[11] || (o[11] = a => r(e).personal.value = a),
          placeholder: r(e).personal.placeholder,
          error: r(e).personal.error,
          required: r(e).personal.required,
          class: "wrap-input",
          onResetError: o[12] || (o[12] = () => r(e).personal.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).linkedin.value,
          "onUpdate:modelValue": o[13] || (o[13] = a => r(e).linkedin.value = a),
          placeholder: r(e).linkedin.placeholder,
          error: r(e).linkedin.error,
          required: r(e).linkedin.required,
          class: "wrap-input",
          onResetError: o[14] || (o[14] = () => r(e).linkedin.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).emergencyContact.value,
          "onUpdate:modelValue": o[15] || (o[15] = a => r(e).emergencyContact.value = a),
          placeholder: r(e).emergencyContact.placeholder,
          error: r(e).emergencyContact.error,
          required: r(e).emergencyContact.required,
          class: "wrap-input",
          onResetError: o[16] || (o[16] = () => r(e).emergencyContact.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(x, {
          options: r(e).category.options,
          value: r(e).category.value,
          placeholder: r(e).category.placeholder,
          required: r(e).category.required,
          error: r(e).category.error,
          class: "wrap-input",
          "max-reveal": "",
          onResetError: o[17] || (o[17] = () => r(e).category.error.status = !1),
          onSelect: w,
          onRemoveItem: E
        }, null, 8, ["options", "value", "placeholder", "required", "error"]), s(n, {
          modelValue: r(e).phone.value,
          "onUpdate:modelValue": [o[18] || (o[18] = a => r(e).phone.value = a), k],
          placeholder: r(e).phone.placeholder,
          error: r(e).phone.error,
          required: r(e).phone.required,
          onResetError: o[19] || (o[19] = () => r(e).phone.error.status = !1),
          class: "wrap-input"
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), l("div", Te, [s(n, {
          modelValue: r(e).wishToAttend.value,
          "onUpdate:modelValue": o[20] || (o[20] = a => r(e).wishToAttend.value = a),
          placeholder: r(e).wishToAttend.placeholder,
          error: r(e).wishToAttend.error,
          required: r(e).wishToAttend.required,
          onResetError: o[21] || (o[21] = () => r(e).wishToAttend.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), l("div", Re, [s(_, {
          text: r(e).wishToAttend.tooltip || ""
        }, null, 8, ["text"])])]), l("div", Se, [s(n, {
          modelValue: r(e).contributeEvent.value,
          "onUpdate:modelValue": o[22] || (o[22] = a => r(e).contributeEvent.value = a),
          placeholder: r(e).contributeEvent.placeholder,
          error: r(e).contributeEvent.error,
          required: r(e).contributeEvent.required,
          onResetError: o[23] || (o[23] = () => r(e).contributeEvent.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), l("div", Ne, [s(_, {
          text: r(e).contributeEvent.tooltip || ""
        }, null, 8, ["text"])])]), s(n, {
          modelValue: r(e).areasOfInterests.value,
          "onUpdate:modelValue": o[24] || (o[24] = a => r(e).areasOfInterests.value = a),
          placeholder: r(e).areasOfInterests.placeholder,
          error: r(e).areasOfInterests.error,
          required: r(e).areasOfInterests.required,
          class: "wrap-input",
          onResetError: o[25] || (o[25] = () => r(e).areasOfInterests.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).favoriteBook.value,
          "onUpdate:modelValue": o[26] || (o[26] = a => r(e).favoriteBook.value = a),
          placeholder: r(e).favoriteBook.placeholder,
          error: r(e).favoriteBook.error,
          required: r(e).favoriteBook.required,
          class: "wrap-input",
          onResetError: o[27] || (o[27] = () => r(e).favoriteBook.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).favoriteMovie.value,
          "onUpdate:modelValue": o[28] || (o[28] = a => r(e).favoriteMovie.value = a),
          placeholder: r(e).favoriteMovie.placeholder,
          error: r(e).favoriteMovie.error,
          required: r(e).favoriteMovie.required,
          class: "wrap-input",
          onResetError: o[29] || (o[29] = () => r(e).favoriteMovie.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).sports.value,
          "onUpdate:modelValue": o[30] || (o[30] = a => r(e).sports.value = a),
          placeholder: r(e).sports.placeholder,
          error: r(e).sports.error,
          required: r(e).sports.required,
          class: "wrap-input",
          onResetError: o[31] || (o[31] = () => r(e).sports.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).allergies.value,
          "onUpdate:modelValue": o[32] || (o[32] = a => r(e).allergies.value = a),
          placeholder: r(e).allergies.placeholder,
          error: r(e).allergies.error,
          required: r(e).allergies.required,
          class: "wrap-input",
          onResetError: o[33] || (o[33] = () => r(e).allergies.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), l("div", Ce, [s(U, {
          options: r(e)["shoulder-size"].options,
          value: r(e)["shoulder-size"].value,
          placeholder: r(e)["shoulder-size"].placeholder,
          required: r(e)["shoulder-size"].required,
          error: r(e)["shoulder-size"].error,
          onResetError: o[34] || (o[34] = () => r(e)["shoulder-size"].error.status = !1),
          onSelect: N
        }, null, 8, ["options", "value", "placeholder", "required", "error"]), s(U, {
          options: r(e)["foot-size"].options,
          value: r(e)["foot-size"].value,
          placeholder: r(e)["foot-size"].placeholder,
          required: r(e)["foot-size"].required,
          error: r(e)["foot-size"].error,
          onResetError: o[35] || (o[35] = () => r(e)["foot-size"].error.status = !1),
          onSelect: b
        }, null, 8, ["options", "value", "placeholder", "required", "error"])]), s(n, {
          modelValue: r(e).howHear.value,
          "onUpdate:modelValue": o[36] || (o[36] = a => r(e).howHear.value = a),
          placeholder: r(e).howHear.placeholder,
          error: r(e).howHear.error,
          required: r(e).howHear.required,
          class: "wrap-input",
          onResetError: o[37] || (o[37] = () => r(e).howHear.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), s(n, {
          modelValue: r(e).referralCode.value,
          "onUpdate:modelValue": o[38] || (o[38] = a => r(e).referralCode.value = a),
          placeholder: r(e).referralCode.placeholder,
          error: r(e).referralCode.error,
          required: r(e).referralCode.required,
          class: "wrap-input",
          onResetError: o[39] || (o[39] = () => r(e).referralCode.error.status = !1)
        }, null, 8, ["modelValue", "placeholder", "error", "required"]), l("div", Ie, [$e, l("div", Ae, [O(l("input", {
          type: "checkbox",
          class: "input-checkbox",
          "onUpdate:modelValue": o[40] || (o[40] = a => r(e).permissionMedia = a)
        }, null, 512), [
          [B, r(e).permissionMedia]
        ]), ze]), l("div", Me, [O(l("input", {
          type: "checkbox",
          class: "input-checkbox",
          "onUpdate:modelValue": o[41] || (o[41] = a => r(e).permissionShare = a)
        }, null, 512), [
          [B, r(e).permissionShare]
        ]), Ue]), Oe]), l("button", Be, [s(J, {
          text: "next"
        })])], 32)])])
      }
    }
  }),
  He = S(Fe, [
    ["__scopeId", "data-v-5414259f"]
  ]),
  Y = p => ($("data-v-b30950aa"), p = p(), A(), p),
  Le = {
    class: "thanks"
  },
  Pe = Y(() => l("p", {
    class: "h4 thanks__text"
  }, [y(" Gratitude be upon thee for thy "), l("i", null, "request.")], -1)),
  je = Y(() => l("p", {
    class: "h4 thanks__text"
  }, [y("Verily, we shall "), l("i", null, "soon"), y(" hold converse.")], -1)),
  De = [Pe, je],
  We = T({
    __name: "Thanks",
    setup(p) {
      const f = I(null);
      return G(() => {
        f.value = setTimeout(async () => {
          await D("/")
        }, 5e3)
      }), Q(() => {
        f.value && clearTimeout(f.value)
      }), (v, m) => (q(), R("div", Le, De))
    }
  }),
  Xe = S(We, [
    ["__scopeId", "data-v-b30950aa"]
  ]),
  Ye = ["innerHTML"],
  Je = T({
    __name: "ToastMessage",
    props: {
      isActive: {
        type: Boolean
      },
      message: {}
    },
    setup(p) {
      const f = z("toast-register");
      return (v, m) => {
        const e = me;
        return q(), R("div", {
          class: ee(["toast", {
            active: v.isActive
          }])
        }, [l("p", {
          innerHTML: v.message,
          class: "text"
        }, null, 8, Ye), l("button", {
          class: "btn-close",
          onClick: m[0] || (m[0] = () => f.value = !1)
        }, [s(e)])], 2)
      }
    }
  }),
  Ke = S(Je, [
    ["__scopeId", "data-v-3e28273a"]
  ]),
  Ze = {
    class: "sign-up"
  },
  Ge = {
    class: "content"
  },
  Qe = {
    class: "wrap-components"
  },
  er = "Please review your form and correct the highlighted errors before proceeding.",
  rr = T({
    __name: "sign-up",
    setup(p) {
      const f = z("toast-register", () => !1),
        v = I(1),
        m = I(!1),
        e = re({
          userId: null,
          email: {
            value: "",
            placeholder: "Email",
            error: {
              status: !1,
              networkError: !1,
              get message() {
                return e.email.error.networkError ? "Email already exists" : e.email.value.length ? "email isn't valid" : "Required field"
              }
            }
          },
          firstName: {
            value: "",
            placeholder: "First name",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          lastName: {
            value: "",
            placeholder: "Last name",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          telegram: {
            value: "",
            placeholder: "Telegram",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          personal: {
            value: "",
            placeholder: "Website",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              get message() {
                return e.personal.value.length ? "Invalid url address" : "Required field"
              }
            }
          },
          companyName: {
            value: "",
            placeholder: "Company / Organization",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          jobTitle: {
            value: "",
            placeholder: "Title / Position",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          phone: {
            value: "",
            placeholder: "Phone number",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          "shoulder-size": {
            value: "",
            options: ["XS", "S", "M", "L", "XL", "XXL"],
            placeholder: "Shirt size",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          "foot-size": {
            value: "",
            options: ["4/35", "4,5/36", "6/37", "7,5/38", "6/39", "6.5/39.5", "7/40", "7.5/40.5", "8/41", "8.5/41.5", "9/42", "9.5/42.5", "10/43", "10.5/43.5", "11/44", "11.5/44.5", "12/45", "13/46", "14/47", "Other"],
            placeholder: "Shoe size (us/en)",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          category: {
            value: [],
            options: ["HFT Firm", "Proprietary Trading Firm", "Family Office", "Hedge Fund", "Asset Manager", "Capital Allocator"],
            placeholder: "You Are (multiple choice)",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          password: {
            value: "",
            placeholder: "Your password",
            type: "password",
            error: {
              status: !1,
              networkError: !1,
              get message() {
                return e.password.error.status ? "Incorrect password" : "Required field"
              }
            }
          },
          linkedin: {
            value: "",
            placeholder: "Linkedin profile",
            required: !1,
            error: {
              status: !1,
              message: "Required field"
            }
          },
          emergencyContact: {
            value: "",
            placeholder: "Emergency contact",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          wishToAttend: {
            value: "",
            placeholder: "Why do you wish to join the club?",
            required: !0,
            tooltip: "Share your motivations for joining, such as networking, gaining knowledge, or exploring new opportunities.",
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          contributeEvent: {
            value: "",
            placeholder: "What can you contribute to the club?",
            required: !0,
            tooltip: "The Club's strength lies in its members. If you have particular expertise, consider leading a roundtable discussion or moderating a panel on a topic you're passionate about. Your contributions shape the Alchemy experience!",
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          areasOfInterests: {
            value: "",
            placeholder: "Areas of interests beyond crypto",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          favoriteBook: {
            value: "",
            placeholder: "favorite book",
            required: !1,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          favoriteMovie: {
            value: "",
            placeholder: "favorite movie",
            required: !1,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          sports: {
            value: "",
            placeholder: "Regularly Practiced Sports / Activities",
            required: !1,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          allergies: {
            value: "",
            placeholder: "Dietary Restrictions / Allergies",
            required: !0,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          howHear: {
            value: "",
            placeholder: "How did you hear about Alchemy?",
            required: !1,
            error: {
              status: !1,
              networkError: !1,
              message: "Required field"
            }
          },
          symbol: {
            value: 0,
            placeholder: "Chose symbol",
            required: !1,
            error: {
              status: !1,
              message: "Required field"
            }
          },
          permissionMedia: !0,
          permissionShare: !0,
          referralCode: {
            value: "",
            placeholder: "Referral code (if any)",
            required: !1,
            error: {
              status: !1,
              message: "Required field"
            }
          }
        }),
        g = oe(() => {
          switch (v.value) {
            case 1:
              return _e;
            case 2:
              return He;
            case 3:
              return Xe
          }
        });

      function V() {
        v.value++, setTimeout(() => {
          m.value = !1
        }, 300)
      }
      async function k() {
        m.value = !1, D("/upcoming-event")
      }
      return (N, b) => {
        const E = pe,
          w = Ke,
          u = ce;
        return q(), R("main", Ze, [s(E), s(w, {
          message: er,
          "is-active": r(f)
        }, null, 8, ["is-active"]), l("div", Ge, [l("div", Qe, [r(m) ? (q(), F(u, {
          key: 0
        })) : te("", !0), s(ae, {
          name: "fade",
          mode: "out-in"
        }, {
          default: H(() => [(q(), F(le(r(g)), {
            "form-data": r(e),
            "is-processing": r(m),
            onChangeStep: V,
            onProcessing: b[0] || (b[0] = i => m.value = i),
            onLogin: k
          }, null, 40, ["form-data", "is-processing"]))]),
          _: 1
        })])])])
      }
    }
  }),
  mr = S(rr, [
    ["__scopeId", "data-v-162cdd7d"]
  ]);
export {
  mr as
  default
};