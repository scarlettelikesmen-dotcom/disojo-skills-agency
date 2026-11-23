/* https://hilight.design/_nuxt/BF4vdWh8.js */
import {
  d as U,
  aq as z,
  ar as N,
  c as h,
  o as v,
  v as O,
  f as _,
  F as Ie,
  y as Me,
  e as s,
  t as b,
  as as D,
  w as F,
  h as P,
  n as B,
  j as ee,
  r as q,
  D as Le,
  M as Ne,
  E as Ue,
  k as f,
  l as ie,
  z as Oe,
  x as De,
  p as Be,
  at as Ae,
  a8 as be,
  au as Re,
  a5 as Pe,
  a7 as Ge,
  a9 as He,
  A as ke,
  G as Ke,
  av as Je,
  aw as We,
  g as ue,
  H as Ze,
  R as Qe,
  U as Ye,
  a6 as Xe,
  O as ea,
  s as aa,
  aa as ta,
  Q as na,
  ax as oa,
  ay as ra,
  az as la
} from "#entry";
import {
  _ as Te
} from "./lKvBwyz6.js";
import {
  _ as sa
} from "./V1AwDJuM.js";
import {
  e as ia
} from "./Cc_RQqID.js";
import {
  u as ua
} from "./4MnaQWY0.js";
const da = ["onClick"],
  ca = {
    class: "select-label"
  },
  ma = {
    key: 0,
    class: "select-error l2"
  },
  pa = U({
    __name: "Select",
    props: z({
      options: {},
      error: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const o = N(e, "modelValue");
      return (r, c) => (v(), h("div", {
        class: O(["select", {
          error: e.error?.value
        }])
      }, [(v(!0), h(Ie, null, Me(e.options, n => (v(), h("button", {
        key: n.value,
        class: O(["select-option", {
          selected: n.value === o.value
        }]),
        type: "button",
        onClick: l => o.value = n.value
      }, [c[0] || (c[0] = s("span", {
        class: "select-radio"
      }, [s("span", {
        class: "select-radio__dot"
      })], -1)), s("span", ca, b(n.label), 1)], 10, da))), 128)), _(D, {
        name: "fade"
      }, {
        default: F(() => [e.error?.value ? (v(), h("p", ma, b(e.error.message), 1)) : P("", !0)]),
        _: 1
      })], 2))
    }
  }),
  fa = Object.assign(B(pa, [
    ["__scopeId", "data-v-99fc5520"]
  ]), {
    __name: "FormSelect"
  }),
  va = ["type", "name", "placeholder", "value", "inputmode", "autocomplete", "required", "minlength", "maxlength"],
  ga = {
    key: 0,
    class: "input-error l2"
  },
  ha = U({
    __name: "Input",
    props: z({
      data: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const o = e,
        r = N(e, "modelValue");

      function c(n) {
        const l = n.target.value;
        r.value = l, o.data.onInput?.(l)
      }
      return (n, l) => (v(), h("label", {
        class: O(["input-field", {
          error: e.data.error.value
        }])
      }, [s("input", {
        class: "input p1",
        type: e.data.type,
        name: e.data.name,
        placeholder: e.data.placeholder,
        value: r.value,
        inputmode: e.data.inputmode,
        autocomplete: e.data.autocomplete,
        required: e.data.required,
        minlength: e.data.minLength,
        maxlength: e.data.maxLength,
        onInput: c
      }, null, 40, va), _(D, {
        name: "fade"
      }, {
        default: F(() => [e.data.error.value ? (v(), h("p", ga, b(e.data.error.message), 1)) : P("", !0)]),
        _: 1
      })], 2))
    }
  }),
  qe = Object.assign(B(ha, [
    ["__scopeId", "data-v-e3ca5c1c"]
  ]), {
    __name: "FormInput"
  }),
  _a = ["name", "placeholder", "value"],
  ya = {
    key: 0,
    class: "textarea-error l2"
  },
  ba = U({
    __name: "Textarea",
    props: z({
      data: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const o = e,
        r = N(e, "modelValue");

      function c(n) {
        const l = n.target.value;
        r.value = l, o.data.onInput?.(l)
      }
      return (n, l) => (v(), h("label", {
        class: O(["textarea-field", {
          error: e.data.error.value
        }])
      }, [s("textarea", {
        class: "textarea p1",
        name: e.data.name,
        placeholder: e.data.placeholder,
        value: r.value,
        onInput: c
      }, null, 40, _a), _(D, {
        name: "fade"
      }, {
        default: F(() => [e.data.error.value ? (v(), h("p", ya, b(e.data.error.message), 1)) : P("", !0)]),
        _: 1
      })], 2))
    }
  }),
  ka = Object.assign(B(ba, [
    ["__scopeId", "data-v-1700637f"]
  ]), {
    __name: "FormTextarea"
  }),
  $a = {},
  Ca = {
    class: "icon",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function xa(e, o) {
  return v(), h("svg", Ca, [...o[0] || (o[0] = [s("path", {
    d: "M1.5 4L4.5016 1H9.9989C10.2757 1 10.5 1.22766 10.5 1.4959V10.5041C10.5 10.778 10.2775 11 10.0033 11H1.9967C1.72238 11 1.5 10.7751 1.5 10.4966V4ZM5 2V4.5H2.5V10H9.5V2H5Z",
    fill: "#201805"
  }, null, -1)])])
}
const Va = Object.assign(B($a, [
    ["render", xa]
  ]), {
    __name: "IconDoc"
  }),
  Sa = {},
  wa = {
    class: "icon",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function Ia(e, o) {
  return v(), h("svg", wa, [...o[0] || (o[0] = [s("path", {
    d: "M5.5 5.5V2.5H6.5V5.5H9.5V6.5H6.5V9.5H5.5V6.5H2.5V5.5H5.5Z",
    fill: "#201805"
  }, null, -1)])])
}
const Ma = Object.assign(B(Sa, [
    ["render", Ia]
  ]), {
    __name: "IconPlus"
  }),
  La = ["for"],
  Na = {
    class: "file-icon"
  },
  Ba = {
    class: "file-name"
  },
  Pa = {
    key: 0,
    class: "l2"
  },
  Ta = {
    key: 1,
    class: "l2 file-size"
  },
  qa = {
    key: 2,
    class: "p1 file-chosen"
  },
  Fa = ["id", "name", "accept"],
  ja = {
    key: 0,
    class: "file-error l2"
  },
  za = U({
    __name: "File",
    props: z({
      data: {},
      accept: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const o = N(e, "modelValue"),
        r = q(null);

      function c(l) {
        const g = l.target.files?.[0] ?? null;
        o.value = g
      }

      function n() {
        o.value = null, r.value && (r.value.value = "")
      }
      return (l, d) => {
        const g = Va,
          w = Ma,
          k = Le;
        return v(), h("div", {
          class: O(["file-field", {
            error: e.data.error.value,
            filled: o.value
          }])
        }, [s("label", {
          for: e.data.name,
          class: "file-button"
        }, [s("span", Na, [o.value ? (v(), ee(g, {
          key: 0
        })) : (v(), ee(w, {
          key: 1
        }))]), s("span", Ba, [o.value ? P("", !0) : (v(), h("span", Pa, b(e.data.placeholder), 1)), o.value ? P("", !0) : (v(), h("span", Ta, b(l.$t("file_size_max_10mb")), 1)), o.value ? (v(), h("span", qa, b(o.value.name), 1)) : P("", !0)]), s("input", {
          id: e.data.name,
          ref_key: "inputRef",
          ref: r,
          class: "file-input",
          type: "file",
          name: e.data.name,
          accept: e.accept,
          onChange: c
        }, null, 40, Fa)], 8, La), o.value ? (v(), h("button", {
          key: 0,
          class: "file-remove",
          type: "button",
          onClick: n
        }, [_(k, {
          text: l.$t("remove"),
          white: ""
        }, null, 8, ["text"])])) : P("", !0), _(D, {
          name: "fade"
        }, {
          default: F(() => [e.data.error.value ? (v(), h("p", ja, b(e.data.error.message), 1)) : P("", !0)]),
          _: 1
        })], 2)
      }
    }
  }),
  Ea = Object.assign(B(za, [
    ["__scopeId", "data-v-3b2a41e4"]
  ]), {
    __name: "FormFile"
  }),
  Ua = {
    class: "footer"
  },
  Oa = {
    class: "back-slot"
  },
  Da = ["disabled"],
  Aa = {
    class: "privacy"
  },
  Ra = {
    class: "privacy-title l2"
  },
  Ga = {
    class: "privacy-text p2"
  },
  Ha = U({
    __name: "Footer",
    props: {
      showBack: {
        type: Boolean
      },
      isSubmitting: {
        type: Boolean
      },
      isSubmitError: {
        type: Boolean
      }
    },
    emits: ["back", "next"],
    setup(e, {
      emit: o
    }) {
      const r = e,
        c = o,
        {
          t: n
        } = Ne(),
        l = ie(() => r.isSubmitting ? n("sending") : r.isSubmitError ? n("sending_error") : n("continue"));
      return (d, g) => {
        const w = Ue,
          k = Te,
          x = Le,
          u = Oe;
        return v(), h("div", Ua, [s("div", Oa, [_(D, {
          name: "fade"
        }, {
          default: F(() => [e.showBack ? (v(), h("button", {
            key: 0,
            class: "back hover-container",
            type: "button",
            onClick: g[0] || (g[0] = V => c("back"))
          }, [_(k, {
            border: "",
            white: ""
          }, {
            default: F(() => [_(w, {
              direction: "left"
            })]),
            _: 1
          }), _(x, {
            text: d.$t("back"),
            white: ""
          }, null, 8, ["text"])])) : P("", !0)]),
          _: 1
        })]), s("button", {
          class: "continue",
          type: "button",
          disabled: e.isSubmitting || e.isSubmitError,
          onClick: g[1] || (g[1] = V => c("next"))
        }, [(v(), ee(u, {
          key: f(l),
          text: f(l),
          white: ""
        }, null, 8, ["text"]))], 8, Da), s("div", Aa, [s("p", Ra, b(d.$t("data_privacy")), 1), s("p", Ga, b(d.$t("data_privacy_text")), 1)])])
      }
    }
  }),
  Fe = Object.assign(B(Ha, [
    ["__scopeId", "data-v-941a6488"]
  ]), {
    __name: "PageTalkFooter"
  }),
  Ka = {
    class: "step",
    "data-lenis-prevent": ""
  },
  Ja = {
    class: "pagination l2"
  },
  Wa = {
    class: "step-descr h2-light"
  },
  Za = {
    class: "fields"
  },
  Qa = {
    class: "field-block"
  },
  Ya = {
    class: "field-label p1"
  },
  Xa = {
    class: "field-block"
  },
  et = {
    class: "field-label p1"
  },
  at = {
    class: "field-block"
  },
  tt = {
    class: "field-label p1"
  },
  nt = {
    class: "location-row"
  },
  ot = U({
    __name: "StepProject",
    props: z({
      title: {},
      current: {},
      total: {},
      isSubmitting: {
        type: Boolean
      },
      isSubmitError: {
        type: Boolean
      }
    }, {
      type: {
        required: !0
      },
      typeModifiers: {},
      area: {
        required: !0
      },
      areaModifiers: {},
      country: {
        required: !0
      },
      countryModifiers: {},
      city: {
        required: !0
      },
      cityModifiers: {},
      details: {
        required: !0
      },
      detailsModifiers: {},
      file: {
        required: !0
      },
      fileModifiers: {}
    }),
    emits: z(["next"], ["update:type", "update:area", "update:country", "update:city", "update:details", "update:file"]),
    setup(e, {
      emit: o
    }) {
      const r = N(e, "type"),
        c = N(e, "area"),
        n = N(e, "country"),
        l = N(e, "city"),
        d = N(e, "details"),
        g = N(e, "file"),
        w = o;

      function k() {
        g.value.error.value = !1, g.value.error.message = ""
      }
      return (x, u) => {
        const V = fa,
          T = qe,
          E = ka,
          G = Ea,
          H = Fe;
        return v(), h("div", Ka, [s("p", Ja, b(e.current) + " / " + b(e.total), 1), u[9] || (u[9] = s("div", {
          class: "step-line"
        }, null, -1)), s("p", Wa, b(e.title), 1), s("div", Za, [s("div", Qa, [s("p", Ya, b(r.value.placeholder), 1), _(V, {
          modelValue: r.value.value,
          "onUpdate:modelValue": [u[0] || (u[0] = $ => r.value.value = $), u[1] || (u[1] = $ => r.value.error.value = !1)],
          options: r.value.options,
          error: r.value.error
        }, null, 8, ["modelValue", "options", "error"])]), s("div", Xa, [s("p", et, b(c.value.placeholder), 1), _(V, {
          modelValue: c.value.value,
          "onUpdate:modelValue": [u[2] || (u[2] = $ => c.value.value = $), u[3] || (u[3] = $ => c.value.error.value = !1)],
          options: c.value.options,
          error: c.value.error
        }, null, 8, ["modelValue", "options", "error"])]), s("div", at, [s("p", tt, b(x.$t("project_location")), 1), s("div", nt, [_(T, {
          modelValue: n.value.value,
          "onUpdate:modelValue": u[4] || (u[4] = $ => n.value.value = $),
          data: n.value
        }, null, 8, ["modelValue", "data"]), _(T, {
          modelValue: l.value.value,
          "onUpdate:modelValue": u[5] || (u[5] = $ => l.value.value = $),
          data: l.value
        }, null, 8, ["modelValue", "data"])])]), _(E, {
          modelValue: d.value.value,
          "onUpdate:modelValue": u[6] || (u[6] = $ => d.value.value = $),
          class: "field-textarea",
          data: d.value
        }, null, 8, ["modelValue", "data"]), _(G, {
          modelValue: g.value.value,
          "onUpdate:modelValue": [u[7] || (u[7] = $ => g.value.value = $), k],
          data: g.value
        }, null, 8, ["modelValue", "data"])]), _(H, {
          "is-submitting": e.isSubmitting,
          "is-submit-error": e.isSubmitError,
          onNext: u[8] || (u[8] = $ => w("next"))
        }, null, 8, ["is-submitting", "is-submit-error"])])
      }
    }
  }),
  rt = Object.assign(B(ot, [
    ["__scopeId", "data-v-f2c94d7f"]
  ]), {
    __name: "PageTalkStepProject"
  }),
  lt = {},
  st = {
    class: "icon",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  };

function it(e, o) {
  return v(), h("svg", st, [...o[0] || (o[0] = [s("path", {
    d: "M9.99889 10.9738L14.1237 6.84896L15.3022 8.02748L9.99889 13.3308L4.69564 8.02747L5.87414 6.84896L9.99889 10.9738Z",
    fill: "currentColor"
  }, null, -1)])])
}
const ut = Object.assign(B(lt, [
    ["render", it],
    ["__scopeId", "data-v-ff6c8f65"]
  ]), {
    __name: "IconChevronB"
  }),
  dt = {},
  ct = {
    class: "icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  };

function mt(e, o) {
  return v(), h("svg", ct, [...o[0] || (o[0] = [s("path", {
    d: "M12 7.33333C12 4.756 9.91066 2.66667 7.33333 2.66667C4.756 2.66667 2.66667 4.756 2.66667 7.33333C2.66667 9.91066 4.756 12 7.33333 12C9.91066 12 12 9.91066 12 7.33333ZM13.3333 7.33333C13.3333 8.74998 12.8412 10.051 12.0202 11.0775L14.4714 13.5286C14.7317 13.789 14.7317 14.211 14.4714 14.4714C14.211 14.7317 13.789 14.7317 13.5286 14.4714L11.0775 12.0202C10.051 12.8412 8.74998 13.3333 7.33333 13.3333C4.01962 13.3333 1.33333 10.647 1.33333 7.33333C1.33333 4.01962 4.01962 1.33333 7.33333 1.33333C10.647 1.33333 13.3333 4.01962 13.3333 7.33333Z",
    fill: "currentColor"
  }, null, -1)])])
}
const pt = Object.assign(B(dt, [
  ["render", mt]
]), {
  __name: "IconSearch"
});
var _e, Se;

function ft() {
  if (Se) return _e;
  Se = 1;
  for (var e = [
      ["Afghanistan (‫افغانستان‬‎)", "af", "93", "+..-..-...-...."],
      ["Åland Islands", "ax", "358", ""],
      ["Albania (Shqipëri)", "al", "355", "+...(...)...-..."],
      ["Algeria (‫الجزائر‬‎)", "dz", "213", "+...-..-...-...."],
      ["American Samoa", "as", "1684", "+.(...)...-...."],
      ["Andorra", "ad", "376", "+...-...-..."],
      ["Angola", "ao", "244", "+...(...)...-..."],
      ["Anguilla", "ai", "1264", "+.(...)...-...."],
      ["Antarctica", "aq", "672", ""],
      ["Antigua and Barbuda", "ag", "1268", "+.(...)...-...."],
      ["Argentina", "ar", "54", "+..(...)...-...."],
      ["Armenia (Հայաստան)", "am", "374", "+...-..-...-..."],
      ["Aruba", "aw", "297", "+...-...-...."],
      ["Australia", "au", "61", "+.. ... ... ..."],
      ["Austria (Österreich)", "at", "43", "+..(...)...-...."],
      ["Azerbaijan (Azərbaycan)", "az", "994", "+...-..-...-..-.."],
      ["Bahamas", "bs", "1242", "+.(...)...-...."],
      ["Bahrain (‫البحرين‬‎)", "bh", "973", "+...-....-...."],
      ["Bangladesh (বাংলাদেশ)", "bd", "880", "+...-..-...-..."],
      ["Barbados", "bb", "1246", "+.(...)...-...."],
      ["Belarus (Беларусь)", "by", "375", "+...(..)...-..-.."],
      ["Belgium (België)", "be", "32", "+.. ... .. .. .."],
      ["Belize", "bz", "501", "+...-...-...."],
      ["Benin (Bénin)", "bj", "229", "+...-..-..-...."],
      ["Bermuda", "bm", "1441", "+.(...)...-...."],
      ["Bhutan (འབྲུག)", "bt", "975", "+...-.-...-..."],
      ["Bolivia", "bo", "591", "+...-.-...-...."],
      ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387", "+...-..-...."],
      ["Botswana", "bw", "267", "+...-..-...-..."],
      ["Bouvet Island", "bv", "47", ""],
      ["Brazil (Brasil)", "br", "55", "+..-..-....-...."],
      ["British Indian Ocean Territory", "io", "246", "+...-...-...."],
      ["British Virgin Islands", "vg", "1284", "+.(...)...-...."],
      ["Brunei", "bn", "673", "+...-...-...."],
      ["Bulgaria (България)", "bg", "359", "+...(...)...-..."],
      ["Burkina Faso", "bf", "226", "+...-..-..-...."],
      ["Burundi (Uburundi)", "bi", "257", "+...-..-..-...."],
      ["Cambodia (កម្ពុជា)", "kh", "855", "+...-..-...-..."],
      ["Cameroon (Cameroun)", "cm", "237", "+...-....-...."],
      ["Canada", "ca", "1", "+. (...) ...-....", 1, ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
      ["Cape Verde (Kabu Verdi)", "cv", "238", "+...(...)..-.."],
      ["Caribbean Netherlands", "bq", "599", "+...-...-....", 1],
      ["Cayman Islands", "ky", "1345", "+.(...)...-...."],
      ["Central African Republic (République centrafricaine)", "cf", "236", "+...-..-..-...."],
      ["Chad (Tchad)", "td", "235", "+...-..-..-..-.."],
      ["Chile", "cl", "56", "+..-.-....-...."],
      ["China (中国)", "cn", "86", "+.. ..-........"],
      ["Christmas Island", "cx", "61", ""],
      ["Cocos (Keeling) Islands", "cc", "61", ""],
      ["Colombia", "co", "57", "+..(...)...-...."],
      ["Comoros (‫جزر القمر‬‎)", "km", "269", "+...-..-....."],
      ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243", "+...(...)...-..."],
      ["Congo (Republic) (Congo-Brazzaville)", "cg", "242", "+...-..-...-...."],
      ["Cook Islands", "ck", "682", "+...-..-..."],
      ["Costa Rica", "cr", "506", "+... ....-...."],
      ["Côte d’Ivoire", "ci", "225", "+...-..-...-..."],
      ["Croatia (Hrvatska)", "hr", "385", "+...-..-...-..."],
      ["Cuba", "cu", "53", "+..-.-...-...."],
      ["Curaçao", "cw", "599", "+...-...-....", 0],
      ["Cyprus (Κύπρος)", "cy", "357", "+...-..-...-..."],
      ["Czech Republic (Česká republika)", "cz", "420", "+...(...)...-..."],
      ["Denmark (Danmark)", "dk", "45", "+.. .. .. .. .."],
      ["Djibouti", "dj", "253", "+...-..-..-..-.."],
      ["Dominica", "dm", "1767", "+.(...)...-...."],
      ["Dominican Republic (República Dominicana)", "do", "1", "+.(...)...-....", 2, ["809", "829", "849"]],
      ["Ecuador", "ec", "593", "+...-.-...-...."],
      ["Egypt (‫مصر‬‎)", "eg", "20", "+..(...)...-...."],
      ["El Salvador", "sv", "503", "+... ....-...."],
      ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240", "+...-..-...-...."],
      ["Eritrea", "er", "291", "+...-.-...-..."],
      ["Estonia (Eesti)", "ee", "372", "+...-...-...."],
      ["Ethiopia", "et", "251", "+...-..-...-...."],
      ["Falkland Islands (Islas Malvinas)", "fk", "500", "+...-....."],
      ["Faroe Islands (Føroyar)", "fo", "298", "+...-...-..."],
      ["Fiji", "fj", "679", "+...-..-....."],
      ["Finland (Suomi)", "fi", "358", "+... .. .... ...."],
      ["France", "fr", "33", "+.. . .. .. .. .."],
      ["French Guiana (Guyane française)", "gf", "594", "+...-.....-...."],
      ["French Polynesia (Polynésie française)", "pf", "689", "+...-..-..-.."],
      ["French Southern and Antarctic Lands", "tf", "262", ""],
      ["Gabon", "ga", "241", "+...-.-..-..-.."],
      ["Gambia", "gm", "220", "+...(...)..-.."],
      ["Georgia (საქართველო)", "ge", "995", "+...(...)...-..."],
      ["Germany (Deutschland)", "de", "49", "+.. ... ......."],
      ["Ghana (Gaana)", "gh", "233", "+...(...)...-..."],
      ["Gibraltar", "gi", "350", "+...-...-....."],
      ["Greece (Ελλάδα)", "gr", "30", "+..(...)...-...."],
      ["Greenland (Kalaallit Nunaat)", "gl", "299", "+...-..-..-.."],
      ["Grenada", "gd", "1473", "+.(...)...-...."],
      ["Guadeloupe", "gp", "590", "", 0],
      ["Guam", "gu", "1671", "+.(...)...-...."],
      ["Guatemala", "gt", "502", "+... ....-...."],
      ["Guernsey", "gg", "44", ""],
      ["Guinea (Guinée)", "gn", "224", "+...-..-...-..."],
      ["Guinea-Bissau (Guiné Bissau)", "gw", "245", "+...-.-......"],
      ["Guyana", "gy", "592", "+...-...-...."],
      ["Haiti", "ht", "509", "+... ....-...."],
      ["Heard Island and McDonald Islands", "hm", "672", ""],
      ["Honduras", "hn", "504", "+...-....-...."],
      ["Hong Kong (香港)", "hk", "852", "+... .... ...."],
      ["Hungary (Magyarország)", "hu", "36", "+..(...)...-..."],
      ["Iceland (Ísland)", "is", "354", "+... ... ...."],
      ["India (भारत)", "in", "91", "+.. .....-....."],
      ["Indonesia", "id", "62", "+..-..-...-.."],
      ["Iran (‫ایران‬‎)", "ir", "98", "+..(...)...-...."],
      ["Iraq (‫العراق‬‎)", "iq", "964", "+...(...)...-...."],
      ["Ireland", "ie", "353", "+... .. ......."],
      ["Isle of Man", "im", "44", ""],
      ["Israel (‫ישראל‬‎)", "il", "972", "+...-.-...-...."],
      ["Italy (Italia)", "it", "39", "+.. ... ......", 0],
      ["Jamaica", "jm", "1876", "+.(...)...-...."],
      ["Japan (日本)", "jp", "81", "+.. ... .. ...."],
      ["Jersey", "je", "44", ""],
      ["Jordan (‫الأردن‬‎)", "jo", "962", "+...-.-....-...."],
      ["Kazakhstan (Казахстан)", "kz", "7", "+. ... ...-..-..", 1],
      ["Kenya", "ke", "254", "+...-...-......"],
      ["Kiribati", "ki", "686", "+...-..-..."],
      ["Kosovo", "xk", "383", ""],
      ["Kuwait (‫الكويت‬‎)", "kw", "965", "+...-....-...."],
      ["Kyrgyzstan (Кыргызстан)", "kg", "996", "+...(...)...-..."],
      ["Laos (ລາວ)", "la", "856", "+...-..-...-..."],
      ["Latvia (Latvija)", "lv", "371", "+...-..-...-..."],
      ["Lebanon (‫لبنان‬‎)", "lb", "961", "+...-.-...-..."],
      ["Lesotho", "ls", "266", "+...-.-...-...."],
      ["Liberia", "lr", "231", "+...-..-...-..."],
      ["Libya (‫ليبيا‬‎)", "ly", "218", "+...-..-...-..."],
      ["Liechtenstein", "li", "423", "+...(...)...-...."],
      ["Lithuania (Lietuva)", "lt", "370", "+...(...)..-..."],
      ["Luxembourg", "lu", "352", "+...(...)...-..."],
      ["Macau (澳門)", "mo", "853", "+...-....-...."],
      ["Macedonia (FYROM) (Македонија)", "mk", "389", "+...-..-...-..."],
      ["Madagascar (Madagasikara)", "mg", "261", "+...-..-..-....."],
      ["Malawi", "mw", "265", "+...-.-....-...."],
      ["Malaysia", "my", "60", "+.. ..-....-...."],
      ["Maldives", "mv", "960", "+...-...-...."],
      ["Mali", "ml", "223", "+...-..-..-...."],
      ["Malta", "mt", "356", "+...-....-...."],
      ["Marshall Islands", "mh", "692", "+...-...-...."],
      ["Martinique", "mq", "596", "+...(...)..-..-.."],
      ["Mauritania (‫موريتانيا‬‎)", "mr", "222", "+...-..-..-...."],
      ["Mauritius (Moris)", "mu", "230", "+...-...-...."],
      ["Mayotte", "yt", "262", ""],
      ["Mexico (México)", "mx", "52", "+..-..-..-...."],
      ["Micronesia", "fm", "691", "+...-...-...."],
      ["Moldova (Republica Moldova)", "md", "373", "+...-....-...."],
      ["Monaco", "mc", "377", "+...-..-...-..."],
      ["Mongolia (Монгол)", "mn", "976", "+...-..-..-...."],
      ["Montenegro (Crna Gora)", "me", "382", "+...-..-...-..."],
      ["Montserrat", "ms", "1664", "+.(...)...-...."],
      ["Morocco (‫المغرب‬‎)", "ma", "212", "+...-..-....-..."],
      ["Mozambique (Moçambique)", "mz", "258", "+...-..-...-..."],
      ["Myanmar (Burma) (မြန်မာ)", "mm", "95", "+..-...-..."],
      ["Namibia (Namibië)", "na", "264", "+...-..-...-...."],
      ["Nauru", "nr", "674", "+...-...-...."],
      ["Nepal (नेपाल)", "np", "977", "+...-..-...-..."],
      ["Netherlands (Nederland)", "nl", "31", "+.. .. ........"],
      ["New Caledonia (Nouvelle-Calédonie)", "nc", "687", "+...-..-...."],
      ["New Zealand", "nz", "64", "+.. ...-...-...."],
      ["Nicaragua", "ni", "505", "+...-....-...."],
      ["Niger (Nijar)", "ne", "227", "+...-..-..-...."],
      ["Nigeria", "ng", "234", "+...-..-...-.."],
      ["Niue", "nu", "683", "+...-...."],
      ["Norfolk Island", "nf", "672", "+...-...-..."],
      ["North Korea (조선 민주주의 인민 공화국)", "kp", "850", "+...-...-..."],
      ["Northern Mariana Islands", "mp", "1670", "+.(...)...-...."],
      ["Norway (Norge)", "no", "47", "+.. ... .. ..."],
      ["Oman (‫عُمان‬‎)", "om", "968", "+...-..-...-..."],
      ["Pakistan (‫پاکستان‬‎)", "pk", "92", "+.. ...-......."],
      ["Palau", "pw", "680", "+...-...-...."],
      ["Palestine (‫فلسطين‬‎)", "ps", "970", "+...-..-...-...."],
      ["Panama (Panamá)", "pa", "507", "+...-...-...."],
      ["Papua New Guinea", "pg", "675", "+...(...)..-..."],
      ["Paraguay", "py", "595", "+...(...)...-..."],
      ["Peru (Perú)", "pe", "51", "+..(...)...-..."],
      ["Philippines", "ph", "63", "+.. ... ...."],
      ["Pitcairn Islands", "pn", "64", ""],
      ["Poland (Polska)", "pl", "48", "+.. ...-...-..."],
      ["Portugal", "pt", "351", "+...-..-...-...."],
      ["Puerto Rico", "pr", "1", "+. (...) ...-....", 3, ["787", "939"]],
      ["Qatar (‫قطر‬‎)", "qa", "974", "+...-....-...."],
      ["Réunion (La Réunion)", "re", "262", "+...-.....-...."],
      ["Romania (România)", "ro", "40", "+..-..-...-...."],
      ["Russia (Россия)", "ru", "7", "+. ... ...-..-..", 0],
      ["Rwanda", "rw", "250", "+...(...)...-..."],
      ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", "", 1],
      ["Saint Helena", "sh", "290"],
      ["Saint Kitts and Nevis", "kn", "1869", "+.(...)...-...."],
      ["Saint Lucia", "lc", "1758", "+.(...)...-...."],
      ["Saint Martin (Saint-Martin (partie française))", "mf", "590", "", 2],
      ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
      ["Saint Vincent and the Grenadines", "vc", "1784", "+.(...)...-...."],
      ["Samoa", "ws", "685", "+...-..-...."],
      ["San Marino", "sm", "378", "+...-....-......"],
      ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239", "+...-..-....."],
      ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966", "+...-..-...-...."],
      ["Senegal (Sénégal)", "sn", "221", "+...-..-...-...."],
      ["Serbia (Србија)", "rs", "381", "+...-..-...-...."],
      ["Seychelles", "sc", "248", "+...-.-...-..."],
      ["Sierra Leone", "sl", "232", "+...-..-......"],
      ["Singapore", "sg", "65", "+.. ....-...."],
      ["Sint Maarten", "sx", "1721", "+.(...)...-...."],
      ["Slovakia (Slovensko)", "sk", "421", "+...(...)...-..."],
      ["Slovenia (Slovenija)", "si", "386", "+...-..-...-..."],
      ["Solomon Islands", "sb", "677", "+...-....."],
      ["Somalia (Soomaaliya)", "so", "252", "+...-.-...-..."],
      ["South Africa", "za", "27", "+..-..-...-...."],
      ["South Georgia and the South Sandwich Islands", "gs", "500", ""],
      ["South Korea (대한민국)", "kr", "82", "+..-..-...-...."],
      ["South Sudan (‫جنوب السودان‬‎)", "ss", "211", "+...-..-...-...."],
      ["Spain (España)", "es", "34", "+.. ... ... ..."],
      ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94", "+..-..-...-...."],
      ["Sudan (‫السودان‬‎)", "sd", "249", "+...-..-...-...."],
      ["Suriname", "sr", "597", "+...-...-..."],
      ["Svalbard and Jan Mayen", "sj", "47", ""],
      ["Swaziland", "sz", "268", "+...-..-..-...."],
      ["Sweden (Sverige)", "se", "46", "+.. .. ... .. .."],
      ["Switzerland (Schweiz)", "ch", "41", "+.. .. ... .. .."],
      ["Syria (‫سوريا‬‎)", "sy", "963", "+...-..-....-..."],
      ["Taiwan (台灣)", "tw", "886", "+...-....-...."],
      ["Tajikistan", "tj", "992", "+...-..-...-...."],
      ["Tanzania", "tz", "255", "+...-..-...-...."],
      ["Thailand (ไทย)", "th", "66", "+..-..-...-..."],
      ["Timor-Leste", "tl", "670", "+...-...-...."],
      ["Togo", "tg", "228", "+...-..-...-..."],
      ["Tokelau", "tk", "690", "+...-...."],
      ["Tonga", "to", "676", "+...-....."],
      ["Trinidad and Tobago", "tt", "1868", "+.(...)...-...."],
      ["Tunisia (‫تونس‬‎)", "tn", "216", "+...-..-...-..."],
      ["Turkey (Türkiye)", "tr", "90", "+.. ... ... .. .."],
      ["Turkmenistan", "tm", "993", "+...-.-...-...."],
      ["Turks and Caicos Islands", "tc", "1649", "+.(...)...-...."],
      ["Tuvalu", "tv", "688", "+...-....."],
      ["U.S. Virgin Islands", "vi", "1340", "+.(...)...-...."],
      ["Uganda", "ug", "256", "+...(...)...-..."],
      ["Ukraine (Україна)", "ua", "380", "+...(..)...-..-.."],
      ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971", "+...-.-...-...."],
      ["United Kingdom", "gb", "44", "+.. .... ......"],
      ["United States", "us", "1", "+. (...) ...-....", 0],
      ["United States Minor Outlying Islands", "um", "1", "", 2],
      ["Uruguay", "uy", "598", "+...-.-...-..-.."],
      ["Uzbekistan (Oʻzbekiston)", "uz", "998", "+...-..-...-...."],
      ["Vanuatu", "vu", "678", "+...-....."],
      ["Vatican City (Città del Vaticano)", "va", "39", "+.. .. .... ....", 1],
      ["Venezuela", "ve", "58", "+..(...)...-...."],
      ["Vietnam (Việt Nam)", "vn", "84", "+..-..-....-..."],
      ["Wallis and Futuna", "wf", "681", "+...-..-...."],
      ["Western Sahara", "eh", "212", "+...-..-...."],
      ["Yemen (‫اليمن‬‎)", "ye", "967", "+...-.-...-..."],
      ["Zambia", "zm", "260", "+...-..-...-...."],
      ["Zimbabwe", "zw", "263", "+...-.-......"]
    ], o = {}, r = {}, c = function(w, k, x) {
      k in o || (o[k] = []);
      var u = x || 0;
      o[k][u] = w
    }, n = 0; n < e.length; n++) {
    var l = e[n];
    if (e[n] = {
        name: l[0],
        iso2: l[1],
        dialCode: l[2],
        priority: l[4] || 0
      }, l[3] && (e[n].format = l[3]), l[5]) {
      e[n].hasAreaCodes = !0;
      for (var d = 0; d < l[5].length; d++) {
        var g = l[2] + l[5][d];
        c(l[1], g)
      }
    }
    r[e[n].iso2] = n, c(l[1], l[2], l[4])
  }
  return _e = {
    allCountries: e,
    iso2Lookup: r,
    allCountryCodes: o
  }, _e
}
var je = ft();

function de(e, o) {
  const r = e.replace(/\D/g, "");
  return !r || o.startsWith(r) ? "" : r.startsWith(o) ? r.slice(o.length).replace(/^0+/, "") : r.replace(/^0+/, "")
}

function vt(e, o) {
  let r = "",
    c = 0;
  for (let n = 0; n < e.length; n++) {
    const l = e[n];
    if (l === ".") {
      if (c >= o.length) break;
      r += o[c++];
      continue
    }
    const d = c < o.length,
      g = e[n + 1] === ".";
    (l === "+" && d || d && (g || c > 0)) && (r += l)
  }
  return r
}

function $e(e, o) {
  const {
    dialCode: r,
    format: c
  } = e;
  if (!c) {
    const l = de(o, r);
    return l ? `+${r}${l}` : `+${r}`
  }
  const n = de(o, r);
  return vt(c, r + n)
}

function gt(e, o) {
  const {
    format: r
  } = e;
  if (!r) return !1;
  const c = (r.match(/\./g) || []).length,
    n = $e(e, "9".repeat(c));
  return o.length === n.length
}

function ce(e) {
  const o = e.replace(/\D/g, "");
  if (!o.length) return !0;
  for (const r of je.allCountries)
    if (r.format && o.startsWith(r.dialCode)) return de(e, r.dialCode).length === 0;
  return !0
}

function ht(e) {
  const o = e.replace(/\D/g, "");
  return o ? `+${o}` : ""
}
const _t = {
    class: "field-wrap"
  },
  yt = {
    key: 0,
    class: "flags"
  },
  bt = {
    class: "flags__search"
  },
  kt = {
    class: "flags__search-icon"
  },
  $t = ["placeholder", "aria-label", "onKeydown"],
  Ct = {
    class: "flags__list",
    "data-lenis-prevent": ""
  },
  xt = ["onClick"],
  Vt = {
    class: "flags__code"
  },
  St = {
    class: "flags__name"
  },
  wt = {
    class: "input-wrap"
  },
  It = ["name", "placeholder", "value", "inputmode", "autocomplete", "required", "minlength", "maxlength"],
  Mt = {
    key: 0,
    class: "input-error l2"
  },
  Lt = "pl",
  Nt = U({
    __name: "Tel",
    props: z({
      data: {},
      country: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: z(["phoneValid", "country"], ["update:modelValue"]),
    setup(e, {
      emit: o
    }) {
      const r = e,
        c = N(e, "modelValue"),
        n = o,
        l = ["by", "ru"],
        d = ["pl", "at", "be", "bg", "hr", "cy", "cz", "dk", "ee", "fi", "fr", "de", "gr", "hu", "ie", "it", "lv", "lt", "lu", "mt", "nl", "ae", "pt", "ro", "sk", "si", "es", "se"],
        g = je.allCountries.filter(i => !l.includes(i.iso2) && i.format),
        w = q(Math.max(0, g.findIndex(i => i.iso2 === (r.country || Lt)))),
        k = q(!1),
        x = q(""),
        u = q(null),
        V = ie(() => g[w.value]),
        T = ie(() => I(c.value)),
        E = ie(() => {
          const i = x.value.trim().toLowerCase().replace(/^\+/, "");
          return [...i ? g.filter(y => H(y, i)) : g].sort((y, S) => $(y, S, i))
        });

      function G(i) {
        const p = i.indexOf(" (");
        return p === -1 ? i : i.slice(0, p)
      }

      function H(i, p) {
        const y = i.name.toLowerCase();
        return !!(i.dialCode.startsWith(p) || i.iso2.startsWith(p) || y.includes(p) || (p === "uae" || p === "оаэ") && i.iso2 === "ae" || p === "uk" && i.iso2 === "gb" || p === "usa" && i.iso2 === "us")
      }

      function $(i, p, y) {
        if (y) {
          const te = oe => oe.dialCode === y ? 0 : oe.dialCode.startsWith(y) ? 1 : 2,
            ne = te(i) - te(p);
          return ne || (i.dialCode.length !== p.dialCode.length ? i.dialCode.length - p.dialCode.length : i.name.localeCompare(p.name))
        }
        const S = d.indexOf(i.iso2),
          M = d.indexOf(p.iso2),
          L = S === -1 ? d.length : S,
          Y = M === -1 ? d.length : M;
        return L !== Y ? L - Y : i.name.localeCompare(p.name)
      }

      function I(i) {
        const p = V.value;
        if (!p || ce(i)) return "";
        const y = $e(p, i),
          S = `+${p.dialCode}`;
        return (y.startsWith(S) ? y.slice(S.length) : y).replace(/^\s+/, "")
      }

      function ae(i) {
        const p = V.value;
        if (!p) {
          n("phoneValid", !1);
          return
        }
        n("phoneValid", ce(i) || gt(p, i))
      }

      function A(i) {
        const p = V.value;
        if (!p) return "";
        const y = $e(p, i);
        return c.value = y, ae(y), r.data.onInput?.(y), y
      }

      function j() {
        k.value = !1, x.value = ""
      }

      function Q() {
        if (k.value = !k.value, !k.value) {
          x.value = "";
          return
        }
        ke(() => u.value?.focus())
      }

      function K(i) {
        const p = g.findIndex(L => L.iso2 === i);
        if (p < 0) return;
        if (w.value === p) {
          j();
          return
        }
        const y = V.value,
          S = y ? de(c.value, y.dialCode) : "";
        w.value = p, j();
        const M = V.value;
        M && (n("country", M.iso2), A(S ? M.dialCode + S : ""))
      }

      function a() {
        const i = E.value[0];
        i && K(i.iso2)
      }

      function me() {
        j()
      }

      function R(i) {
        const p = V.value;
        if (!p) return;
        const y = i.target,
          S = y.value.replace(/\D/g, ""),
          M = A(S ? p.dialCode + S : "");
        y.value = I(M)
      }
      return De(() => r.country, i => {
        if (!i || i === V.value?.iso2) return;
        const p = g.findIndex(y => y.iso2 === i);
        p < 0 || (w.value = p)
      }), Be(() => {
        const i = V.value;
        i && n("country", i.iso2), A(c.value)
      }), (i, p) => {
        const y = ut,
          S = pt,
          M = Ae("click-outside");
        return v(), h("div", {
          class: O(["input-field", {
            error: e.data.error.value
          }])
        }, [s("div", _t, [be((v(), h("div", {
          class: O(["flags-wrap", {
            active: f(k)
          }])
        }, [s("button", {
          class: "selected-code p1",
          type: "button",
          onClick: Q
        }, [s("span", null, "+" + b(f(V)?.dialCode), 1), _(y, {
          class: "selected-code__caret"
        })]), _(D, {
          name: "fade"
        }, {
          default: F(() => [f(k) ? (v(), h("div", yt, [s("div", bt, [s("span", kt, [_(S)]), be(s("input", {
            ref_key: "searchInput",
            ref: u,
            "onUpdate:modelValue": p[0] || (p[0] = L => Ge(x) ? x.value = L : null),
            class: "flags__search-input l2",
            type: "text",
            placeholder: i.$t("search"),
            "aria-label": i.$t("search"),
            onKeydown: Re(Pe(a, ["prevent"]), ["enter"])
          }, null, 40, $t), [
            [He, f(x)]
          ])]), s("div", Ct, [(v(!0), h(Ie, null, Me(f(E), L => (v(), h("button", {
            key: L.iso2,
            type: "button",
            class: O(["flags__item l2", {
              active: L.iso2 === f(V)?.iso2
            }]),
            onClick: Y => K(L.iso2)
          }, [s("span", Vt, "+" + b(L.dialCode), 1), s("span", St, b(G(L.name)), 1)], 10, xt))), 128))])])) : P("", !0)]),
          _: 1
        })], 2)), [
          [M, me]
        ]), s("div", wt, [s("input", {
          class: "input p1",
          type: "tel",
          name: e.data.name,
          placeholder: e.data.placeholder,
          value: f(T),
          inputmode: e.data.inputmode,
          autocomplete: e.data.autocomplete,
          required: e.data.required,
          minlength: e.data.minLength,
          maxlength: e.data.maxLength,
          onInput: R
        }, null, 40, It), _(D, {
          name: "fade"
        }, {
          default: F(() => [e.data.error.value ? (v(), h("p", Mt, b(e.data.error.message), 1)) : P("", !0)]),
          _: 1
        })])])], 2)
      }
    }
  }),
  Bt = Object.assign(B(Nt, [
    ["__scopeId", "data-v-c786c4a3"]
  ]), {
    __name: "FormTel"
  }),
  Pt = {
    class: "agreement-text-wrap"
  },
  Tt = {
    class: "agreement-line"
  },
  qt = {
    class: "agreement-line"
  },
  Ft = ["href"],
  jt = U({
    __name: "Agreement",
    props: z({
      data: {}
    }, {
      modelValue: {
        type: Boolean,
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const o = N(e, "modelValue"),
        {
          data: r
        } = Ke("common"),
        c = Je();
      return (n, l) => (v(), h("label", {
        class: O(["agreement", {
          error: e.data.error.value
        }])
      }, [be(s("input", {
        "onUpdate:modelValue": l[0] || (l[0] = d => o.value = d),
        class: "agreement-input",
        type: "checkbox"
      }, null, 512), [
        [We, o.value]
      ]), l[3] || (l[3] = s("span", {
        class: "agreement-checkbox"
      }, null, -1)), s("span", Pt, [s("span", Tt, b(n.$t("i_agree_to_the")), 1), s("span", qt, [ue(b(n.$t("i_agree_tail")) + " ", 1), f(r)?.policyPrivacy ? (v(), h("a", {
        key: 0,
        href: f(r).policyPrivacy,
        class: "agreement-link",
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: l[1] || (l[1] = Pe(() => {}, ["stop"]))
      }, b(f(c)), 9, Ft)) : P("", !0), l[2] || (l[2] = ue(". ", -1))])])], 2))
    }
  }),
  zt = Object.assign(B(jt, [
    ["__scopeId", "data-v-ecc38e9f"]
  ]), {
    __name: "FormAgreement"
  }),
  Et = {
    class: "step",
    "data-lenis-prevent": ""
  },
  Ut = {
    class: "step-title h1-light"
  },
  Ot = {
    class: "pagination l2"
  },
  Dt = {
    class: "step-descr h2-light"
  },
  At = {
    class: "fields"
  },
  Rt = {
    class: "fields-row"
  },
  Gt = {
    class: "fields-row"
  },
  Ht = U({
    __name: "StepPersonal",
    props: z({
      title: {},
      current: {},
      total: {},
      isSubmitting: {
        type: Boolean
      },
      isSubmitError: {
        type: Boolean
      },
      country: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {},
      agreement: {
        required: !0
      },
      agreementModifiers: {}
    }),
    emits: z(["back", "next", "phoneValid", "country"], ["update:modelValue", "update:agreement"]),
    setup(e, {
      emit: o
    }) {
      const r = N(e, "modelValue"),
        c = N(e, "agreement"),
        n = o;
      return (l, d) => {
        const g = qe,
          w = Bt,
          k = zt,
          x = Fe;
        return v(), h("div", Et, [s("h2", Ut, b(e.title), 1), s("p", Ot, b(e.current) + " / " + b(e.total), 1), d[10] || (d[10] = s("div", {
          class: "step-line"
        }, null, -1)), s("p", Dt, b(l.$t("lets_talk_personal_descr")), 1), s("div", At, [s("div", Rt, [_(g, {
          modelValue: r.value.firstName.value,
          "onUpdate:modelValue": d[0] || (d[0] = u => r.value.firstName.value = u),
          data: r.value.firstName
        }, null, 8, ["modelValue", "data"]), _(g, {
          modelValue: r.value.lastName.value,
          "onUpdate:modelValue": d[1] || (d[1] = u => r.value.lastName.value = u),
          data: r.value.lastName
        }, null, 8, ["modelValue", "data"])]), s("div", Gt, [_(g, {
          modelValue: r.value.email.value,
          "onUpdate:modelValue": d[2] || (d[2] = u => r.value.email.value = u),
          data: r.value.email
        }, null, 8, ["modelValue", "data"]), _(w, {
          modelValue: r.value.phone.value,
          "onUpdate:modelValue": d[3] || (d[3] = u => r.value.phone.value = u),
          data: r.value.phone,
          country: e.country,
          onPhoneValid: d[4] || (d[4] = u => n("phoneValid", u)),
          onCountry: d[5] || (d[5] = u => n("country", u))
        }, null, 8, ["modelValue", "data", "country"])]), _(k, {
          modelValue: c.value.value,
          "onUpdate:modelValue": [d[6] || (d[6] = u => c.value.value = u), d[7] || (d[7] = u => c.value.error.value = !1)],
          class: "agreement",
          data: c.value
        }, null, 8, ["modelValue", "data"])]), _(x, {
          "show-back": "",
          "is-submitting": e.isSubmitting,
          "is-submit-error": e.isSubmitError,
          onBack: d[8] || (d[8] = u => n("back")),
          onNext: d[9] || (d[9] = u => n("next"))
        }, null, 8, ["is-submitting", "is-submit-error"])])
      }
    }
  }),
  Kt = Object.assign(B(Ht, [
    ["__scopeId", "data-v-ff0aeccf"]
  ]), {
    __name: "PageTalkStepPersonal"
  });

function Jt(e) {
  const o = ia.test(e);
  return {
    isValid: o,
    errorMessage: o ? null : "Invalid email"
  }
}

function we(e) {
  const o = window;
  o.dataLayer = o.dataLayer || [], o.dataLayer.push(e)
}
const Wt = {
    key: 0,
    class: "lets-talk"
  },
  Zt = {
    key: "form",
    class: "container"
  },
  Qt = ["aria-label"],
  Yt = {
    key: "thanks",
    class: "container thanks"
  },
  Xt = {
    class: "thanks-text"
  },
  en = {
    class: "l2"
  },
  an = {
    class: "thanks-descr l2"
  },
  tn = ["aria-label"],
  ye = 2,
  nn = U({
    __name: "index",
    async setup(e) {
      let o, r;
      const {
        locale: c,
        t: n
      } = Ne(), {
        data: l
      } = ([o, r] = Ze(() => na(() => `lets-talk:${c.value}`, () => $fetch("/api/strapi/lets-talk", {
        query: {
          locale: c.value
        }
      }), {
        server: !0,
        lazy: !1,
        watch: [c]
      })), o = await o, r(), o);
      if (!l.value) throw Qe({
        statusCode: 404,
        statusMessage: "Lets talk not found"
      });
      Ye(l.value.meta), ua();
      const d = Xe(),
        g = () => {
          window.history.length > 1 ? d.back() : d.push("/")
        },
        {
          initUnicorn: w
        } = ea();
      Be(async () => {
        ke(w), window.addEventListener("keydown", Ce)
      }), aa(() => {
        window.removeEventListener("keydown", Ce), G()
      });
      const k = q(0),
        x = q(!1),
        u = q(!1),
        V = q(!1),
        T = q(!1);
      let E = null;

      function G() {
        E && (clearTimeout(E), E = null)
      }

      function H() {
        u.value = !1, T.value = !0, G(), E = setTimeout(() => {
          T.value = !1, E = null
        }, 5e3)
      }

      function $(t) {
        return `${t}`.padStart(2, "0")
      }

      function I() {
        return {
          value: !1,
          message: ""
        }
      }

      function ae(t) {
        return (t || []).map(m => ({
          value: m.value,
          label: m.text
        }))
      }

      function A(t) {
        return t[1]?.value ?? t[0]?.value ?? ""
      }

      function j(t, m) {
        t.onInput = async J => {
          t.error.value = !1, await m?.(J)
        }
      }
      const Q = ae(l.value.start.type.options),
        K = ae(l.value.start.area.options),
        a = ta({
          personal: {
            firstName: {
              name: "firstName",
              type: "text",
              label: n("first_name"),
              placeholder: n("first_name"),
              value: "",
              required: !0,
              minLength: 2,
              maxLength: 50,
              inputmode: "text",
              autocomplete: "given-name",
              error: I()
            },
            lastName: {
              name: "lastName",
              type: "text",
              label: n("last_name"),
              placeholder: n("your_last_name"),
              value: "",
              required: !0,
              minLength: 2,
              maxLength: 50,
              inputmode: "text",
              autocomplete: "family-name",
              error: I()
            },
            email: {
              name: "email",
              type: "email",
              label: n("your_email"),
              placeholder: n("your_email"),
              value: "",
              required: !0,
              inputmode: "email",
              autocomplete: "email",
              validation: () => {
                const {
                  isValid: t
                } = Jt(a.personal.email.value);
                return t || (a.personal.email.error.value = !0, a.personal.email.error.message = n("invalid_email_format")), t
              },
              error: I()
            },
            phone: {
              name: "phone",
              type: "tel",
              label: n("your_phone"),
              placeholder: n("your_phone"),
              value: "",
              required: !0,
              inputmode: "tel",
              autocomplete: "tel",
              error: I()
            }
          },
          agreement: {
            value: !0,
            required: !0,
            error: I()
          },
          type: {
            name: "type",
            value: A(Q),
            options: Q,
            placeholder: l.value.start.type.title || n("project_type"),
            required: !0,
            error: I()
          },
          area: {
            name: "area",
            value: A(K),
            options: K,
            placeholder: l.value.start.area.title || n("area_sqft"),
            required: !0,
            error: I()
          },
          country: {
            name: "country",
            type: "text",
            label: n("country"),
            placeholder: n("country"),
            value: "",
            required: !0,
            minLength: 2,
            maxLength: 80,
            inputmode: "text",
            autocomplete: "country-name",
            error: I()
          },
          city: {
            name: "city",
            type: "text",
            label: n("city"),
            placeholder: n("city"),
            value: "",
            required: !0,
            minLength: 2,
            maxLength: 80,
            inputmode: "text",
            autocomplete: "address-level2",
            error: I()
          },
          details: {
            name: "details",
            type: "textarea",
            label: n("your_message"),
            placeholder: n("your_message"),
            value: "",
            required: !0,
            minLength: 10,
            maxLength: 1e3,
            inputmode: "text",
            autocomplete: "off",
            error: I()
          },
          file: {
            name: "file",
            value: null,
            placeholder: n("add_file"),
            required: !1,
            error: I()
          }
        });

      function me() {
        a.personal.firstName.value = "", a.personal.lastName.value = "", a.personal.email.value = "", a.personal.phone.value = "", a.country.value = "", a.city.value = "", a.details.value = "", a.file.value = null, a.type.value = A(Q), a.area.value = A(K), a.agreement.value = !0, [a.personal.firstName, a.personal.lastName, a.personal.email, a.personal.phone, a.country, a.city, a.details, a.file, a.type, a.area, a.agreement].forEach(m => {
          m.error.value = !1, m.error.message = ""
        }), i.value = !0, p.value = "pl", k.value = 0
      }
      j(a.personal.firstName), j(a.personal.lastName), j(a.personal.phone), j(a.country), j(a.city), j(a.details), j(a.personal.email, async t => {
        await ke();
        const m = t.replace(/[&=+<>_,'-]/g, "").replace(/\.{2,}/g, ".");
        a.personal.email.value = m
      });

      function R(t) {
        const m = t.value.trim();
        return t.required && !m ? (t.error.value = !0, t.error.message = n("is_a_required_field"), !1) : m ? t.minLength && m.length < t.minLength ? (t.error.value = !0, t.error.message = `Minimum ${t.minLength} characters`, !1) : t.maxLength && m.length > t.maxLength ? (t.error.value = !0, t.error.message = `Maximum ${t.maxLength} characters`, !1) : t.validation && !t.validation() ? !1 : (t.error.value = !1, t.error.message = "", !0) : (t.error.value = !1, t.error.message = "", !0)
      }
      const i = q(!0),
        p = q("pl");

      function y(t) {
        i.value = t
      }

      function S(t) {
        p.value = t
      }

      function M(t) {
        return t.required && !t.value ? (t.error.value = !0, t.error.message = n("please_make_a_selection"), !1) : (t.error.value = !1, t.error.message = "", !0)
      }

      function L() {
        let t = !0;
        R(a.personal.firstName) || (t = !1), R(a.personal.lastName) || (t = !1), R(a.personal.email) || (t = !1);
        const m = a.personal.phone;
        return !p.value || ce(m.value) ? (m.error.value = !0, m.error.message = n("is_a_required_field"), t = !1) : i.value || (m.error.value = !0, m.error.message = n("invalid_format"), t = !1), a.agreement.required && !a.agreement.value && (a.agreement.error.value = !0, a.agreement.error.message = n("is_a_required_field"), t = !1), t
      }

      function Y() {
        const t = a.file.value;
        return t && t.size >= 10 * 1024 * 1024 ? (a.file.error.value = !0, a.file.error.message = n("pdf_must_be_smaller_than_10mb"), !1) : (a.file.error.value = !1, a.file.error.message = "", !0)
      }

      function te() {
        let t = !0;
        return M(a.type) || (t = !1), M(a.area) || (t = !1), R(a.country) || (t = !1), R(a.city) || (t = !1), R(a.details) || (t = !1), Y() || (t = !1), t
      }

      function ne() {
        k.value && (k.value -= 1)
      }
      async function oe() {
        if (!L() || u.value || T.value) return;
        u.value = !0, T.value = !1, G();
        const t = `${a.personal.firstName.value.trim()} ${a.personal.lastName.value.trim()}`,
          m = a.personal.email.value.trim(),
          J = a.personal.phone.value,
          X = ce(J) ? "" : ht(J),
          W = a.type.value.trim(),
          Z = a.area.value.trim(),
          C = a.country.value.trim(),
          fe = a.city.value.trim(),
          xe = [fe, C].filter(Boolean).join(", "),
          re = oa(),
          Ve = crypto.randomUUID(),
          ve = new FormData;
        ve.append("data", JSON.stringify({
          name: t,
          email: m,
          phone: X,
          projectType: W,
          area: Z,
          country: C,
          city: fe,
          location: xe,
          details: a.details.value.trim(),
          utm_source: re.utm_source || "",
          utm_medium: re.utm_medium || "",
          utm_campaign: re.utm_campaign || "",
          fbc: la(),
          fbp: ra(),
          event_id: Ve,
          landing_page: re.landing_page || window.location.href
        })), a.file.value && ve.append("file", a.file.value);
        const ge = new FormData;
        ge.append("data", JSON.stringify({
          name: a.personal.firstName.value.trim(),
          lastName: a.personal.lastName.value.trim(),
          email: m,
          projectType: a.type.value,
          areaSQ: a.area.value,
          projectLocation: xe,
          yourMessage: a.details.value.trim(),
          locale: c.value
        })), a.file.value && ge.append("file", a.file.value);
        const he = new FormData;
        he.append("data", JSON.stringify({
          name: t,
          email: m,
          phone: X,
          projectType: W,
          area: Z,
          country: C,
          city: fe,
          details: a.details.value.trim()
        })), a.file.value && he.append("file", a.file.value);
        try {
          const le = await Promise.allSettled([$fetch("/api/pipedrive/lead", {
            method: "POST",
            body: ve
          }), $fetch("/api/propozly/proposal-recipients", {
            method: "POST",
            body: {
              name: t,
              email: m,
              phone: X,
              phoneCode: p.value
            }
          }), $fetch("/api/lets-talk-cta", {
            method: "POST",
            body: ge
          }), $fetch("/api/form/mail", {
            method: "POST",
            body: he
          })]);
          if (le.forEach((se, ze) => {
              if (se.status === "rejected") {
                const Ee = ["pipedrive", "propozly", "strapi", "mail"][ze];
                console.error(`[lets-talk] ${Ee} submit failed:`, se.reason)
              }
            }), le.every(se => se.status === "rejected")) {
            H();
            return
          }
          we({
            event: "contact_form_submit",
            event_id: Ve,
            project_type: W,
            project_area: Z
          }), x.value = !0, u.value = !1, me()
        } catch (le) {
          console.error("[lets-talk] submit failed:", le), H()
        }
      }

      function pe() {
        if (k.value === 0) {
          if (!te()) return;
          V.value || (V.value = !0, we({
            event: "form_step_complete",
            form_step: 1
          })), k.value += 1;
          return
        }
        k.value === ye - 1 && oe()
      }

      function Ce(t) {
        if (t.key === "Escape") {
          t.preventDefault(), g();
          return
        }
        t.key === "Enter" && (x.value || u.value || T.value || t.target?.tagName !== "TEXTAREA" && (t.preventDefault(), pe()))
      }
      return (t, m) => {
        const J = rt,
          X = Kt,
          W = sa,
          Z = Te;
        return f(l) ? (v(), h("main", Wt, [m[9] || (m[9] = s("div", {
          "data-us-project": "EcLmRCke0hToa95jzvTj",
          "data-us-production": "true",
          "data-us-lazyload": "true",
          "data-us-fps": "30",
          "data-us-scale": "1",
          "data-us-dpi": "0.75",
          class: "bg"
        }, null, -1)), m[10] || (m[10] = s("div", {
          class: "bg bg-mob"
        }, null, -1)), _(D, {
          name: "fade",
          mode: "out-in"
        }, {
          default: F(() => [f(x) ? (v(), h("div", Yt, [s("div", Xt, [s("p", en, b(t.$t("thank_you")), 1), s("p", an, [ue(b(t.$t("well_review_everything")) + " ", 1), m[8] || (m[8] = s("br", {
            class: "thanks-br"
          }, null, -1)), ue(" " + b(" " + t.$t("and_get_in_touch_soon")), 1)])]), s("button", {
            class: "thanks-close",
            "aria-label": t.$t("close"),
            onClick: g
          }, [_(Z, {
            white: ""
          }, {
            default: F(() => [_(W)]),
            _: 1
          })], 8, tn)])) : (v(), h("div", Zt, [_(D, {
            name: "fade",
            mode: "out-in"
          }, {
            default: F(() => [f(k) === 0 ? (v(), ee(J, {
              key: 0,
              type: f(a).type,
              "onUpdate:type": m[0] || (m[0] = C => f(a).type = C),
              area: f(a).area,
              "onUpdate:area": m[1] || (m[1] = C => f(a).area = C),
              country: f(a).country,
              "onUpdate:country": m[2] || (m[2] = C => f(a).country = C),
              city: f(a).city,
              "onUpdate:city": m[3] || (m[3] = C => f(a).city = C),
              details: f(a).details,
              "onUpdate:details": m[4] || (m[4] = C => f(a).details = C),
              file: f(a).file,
              "onUpdate:file": m[5] || (m[5] = C => f(a).file = C),
              title: f(l).start.about.title,
              current: $(1),
              total: $(ye),
              "is-submitting": f(u),
              "is-submit-error": f(T),
              onNext: pe
            }, null, 8, ["type", "area", "country", "city", "details", "file", "title", "current", "total", "is-submitting", "is-submit-error"])) : (v(), ee(X, {
              key: 1,
              modelValue: f(a).personal,
              "onUpdate:modelValue": m[6] || (m[6] = C => f(a).personal = C),
              agreement: f(a).agreement,
              "onUpdate:agreement": m[7] || (m[7] = C => f(a).agreement = C),
              title: f(l).title,
              current: $(2),
              total: $(ye),
              "is-submitting": f(u),
              "is-submit-error": f(T),
              country: f(p),
              onBack: ne,
              onNext: pe,
              onPhoneValid: y,
              onCountry: S
            }, null, 8, ["modelValue", "agreement", "title", "current", "total", "is-submitting", "is-submit-error", "country"]))]),
            _: 1
          }), s("button", {
            class: "close-btn",
            "aria-label": t.$t("close"),
            onClick: g
          }, [_(Z, {
            white: ""
          }, {
            default: F(() => [_(W)]),
            _: 1
          })], 8, Qt)]))]),
          _: 1
        })])) : P("", !0)
      }
    }
  }),
  dn = B(nn, [
    ["__scopeId", "data-v-c3aaf7a2"]
  ]);
export {
  dn as
  default
};