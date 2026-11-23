/* https://grape.ua/_nuxt/entry.DN75vySF.js */
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./about.CJ504dbI.js", "./AnimCircles.vue.eKAmF3gL.js", "./swiper-vue.BTZulNLT.js", "./swiper-vue.BV4Ilb-G.css", "./AnimCircles.F6uQ0IOB.css", "./Main.D-Xe3oxQ.js", "./Main.D1q4Ju2T.css", "./AwardsWithProps.vue.D6tqsxmX.js", "./AwardsWithProps.BluWXk5e.css", "./base.Cowcg-OE.js", "./EmptyWithProps.D19AbZT0.js", "./isVideo.BdcvccDS.js", "./EmptyWithProps.DDfKmTDX.css", "./setPageMeta.BIChswHP.js", "./setPageMeta.DAk88x2V.css", "./about.CQZ-xqDE.css", "./contact.Bt7mUDAx.js", "./index.BfwNHAfF.js", "./contact.CfPlnw9v.css", "./index.DTFDwvP2.js", "./Progress.C6s1Ee2-.js", "./Progress.DuoU1SZy.css", "./FlipTest.BlCQGEuk.js", "./FlipTest.BGdXjxj3.css", "./MainProps.DBdvubZp.js", "./MainProps.a1gU32ML.css", "./Contact.vue.HB5MoldY.js", "./Contact.MMSTT4o3.css", "./index.CgMqtdTw.css", "./_handle_.CxeKCtIe.js", "./_handle_.V8eRRV_A.css", "./index.Ck_ayh9d.js", "./index.BoJFL_8f.css", "./privacy-policy.B8ZergdN.js", "./privacy-policy.BrhExwCz.css", "./services.DO_NqN_U.js", "./services.D03jrNMN.css", "./team.DTr1zdYE.js", "./team.BNtm07bC.css", "./terms-of-use.DDNeoDJ5.js", "./terms-of-use.CsM1shcX.css", "./default.BvWVsDI7.js", "./default.DlLRhIGX.css", "./empty.Cn49MvXJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import {
  e as ja,
  r as Jn,
  h as mh,
  g as Ss,
  i as fr,
  t as yh,
  n as vo,
  v as i2,
  u as se,
  a as we,
  w as R0,
  b as Ir,
  o as bh,
  c as o2,
  d as O0,
  s as hs,
  f as Cc,
  j as et,
  k as Se,
  l as qt,
  p as to,
  K as s2,
  m as a2,
  q as va,
  x as At,
  y as Qi,
  z as vh,
  A as Dh,
  B as l2,
  C as Pn,
  D as c2,
  E as F0,
  F as M0,
  G as N0,
  H as u2,
  I as f2,
  J as ho,
  L as Ye,
  T as h2,
  M as ye,
  N as Ie,
  S as wh,
  O as I0,
  P as d2,
  Q as Ln,
  R as lt,
  U as ae,
  V as Vt,
  W as Ue,
  X as Ec,
  Y as kc,
  Z as po,
  _ as it,
  $ as xh,
  a0 as p2,
  a1 as $0,
  a2 as B0,
  a3 as Hu,
  a4 as _2,
  a5 as g2,
  a6 as m2,
  a7 as y2,
  a8 as b2
} from "./swiper-vue.BTZulNLT.js";
const v2 = /#/g,
  D2 = /&/g,
  w2 = /\//g,
  x2 = /=/g,
  Ch = /\+/g,
  C2 = /%5e/gi,
  E2 = /%60/gi,
  k2 = /%7c/gi,
  S2 = /%20/gi;

function T2(r) {
  return encodeURI("" + r).replace(k2, "|")
}

function Uu(r) {
  return T2(typeof r == "string" ? r : JSON.stringify(r)).replace(Ch, "%2B").replace(S2, "+").replace(v2, "%23").replace(D2, "%26").replace(E2, "`").replace(C2, "^").replace(w2, "%2F")
}

function Jc(r) {
  return Uu(r).replace(x2, "%3D")
}

function ql(r = "") {
  try {
    return decodeURIComponent("" + r)
  } catch {
    return "" + r
  }
}

function P2(r) {
  return ql(r.replace(Ch, " "))
}

function L2(r) {
  return ql(r.replace(Ch, " "))
}

function V0(r = "") {
  const e = {};
  r[0] === "?" && (r = r.slice(1));
  for (const t of r.split("&")) {
    const n = t.match(/([^=]+)=?(.*)/) || [];
    if (n.length < 2) continue;
    const i = P2(n[1]);
    if (i === "__proto__" || i === "constructor") continue;
    const o = L2(n[2] || "");
    e[i] === void 0 ? e[i] = o : Array.isArray(e[i]) ? e[i].push(o) : e[i] = [e[i], o]
  }
  return e
}

function A2(r, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(t => `${Jc(r)}=${Uu(t)}`).join("&") : `${Jc(r)}=${Uu(e)}` : Jc(r)
}

function R2(r) {
  return Object.keys(r).filter(e => r[e] !== void 0).map(e => A2(e, r[e])).filter(Boolean).join("&")
}
const O2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  F2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  M2 = /^([/\\]\s*){2,}[^/\\]/,
  N2 = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  I2 = /\/$|\/\?|\/#/,
  $2 = /^\.?\//;

function ri(r, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }), e.strict ? O2.test(r) : F2.test(r) || (e.acceptRelative ? M2.test(r) : !1)
}

function B2(r) {
  return !!r && N2.test(r)
}

function ju(r = "", e) {
  return e ? I2.test(r) : r.endsWith("/")
}

function Sc(r = "", e) {
  if (!e) return (ju(r) ? r.slice(0, -1) : r) || "/";
  if (!ju(r, !0)) return r || "/";
  let t = r,
    n = "";
  const i = r.indexOf("#");
  i >= 0 && (t = r.slice(0, i), n = r.slice(i));
  const [o, ...s] = t.split("?");
  return (o.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + n
}

function Kl(r = "", e) {
  if (!e) return r.endsWith("/") ? r : r + "/";
  if (ju(r, !0)) return r || "/";
  let t = r,
    n = "";
  const i = r.indexOf("#");
  if (i >= 0 && (t = r.slice(0, i), n = r.slice(i), !t)) return n;
  const [o, ...s] = t.split("?");
  return o + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + n
}

function V2(r = "") {
  return r.startsWith("/")
}

function Md(r = "") {
  return V2(r) ? r : "/" + r
}

function H2(r, e) {
  if (H0(e) || ri(r)) return r;
  const t = Sc(e);
  return r.startsWith(t) ? r : Do(t, r)
}

function Nd(r, e) {
  if (H0(e)) return r;
  const t = Sc(e);
  if (!r.startsWith(t)) return r;
  const n = r.slice(t.length);
  return n[0] === "/" ? n : "/" + n
}

function Eh(r, e) {
  const t = Wa(r),
    n = {
      ...V0(t.search),
      ...e
    };
  return t.search = R2(n), j2(t)
}

function H0(r) {
  return !r || r === "/"
}

function U2(r) {
  return r && r !== "/"
}

function Do(r, ...e) {
  let t = r || "";
  for (const n of e.filter(i => U2(i)))
    if (t) {
      const i = n.replace($2, "");
      t = Kl(t) + i
    } else t = n;
  return t
}

function Wu(r, e, t = {}) {
  return t.trailingSlash || (r = Kl(r), e = Kl(e)), t.leadingSlash || (r = Md(r), e = Md(e)), t.encoding || (r = ql(r), e = ql(e)), r === e
}
const U0 = Symbol.for("ufo:protocolRelative");

function Wa(r = "", e) {
  const t = r.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (t) {
    const [, d, h = ""] = t;
    return {
      protocol: d.toLowerCase(),
      pathname: h,
      href: d + h,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!ri(r, {
      acceptRelative: !0
    })) return e ? Wa(e + r) : Id(r);
  const [, n = "", i, o = ""] = r.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, s = "", a = ""] = o.match(/([^#/?]*)(.*)?/) || [], {
    pathname: l,
    search: c,
    hash: u
  } = Id(a.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: n.toLowerCase(),
    auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
    host: s,
    pathname: l,
    search: c,
    hash: u,
    [U0]: !n
  }
}

function Id(r = "") {
  const [e = "", t = "", n = ""] = (r.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: t,
    hash: n
  }
}

function j2(r) {
  const e = r.pathname || "",
    t = r.search ? (r.search.startsWith("?") ? "" : "?") + r.search : "",
    n = r.hash || "",
    i = r.auth ? r.auth + "@" : "",
    o = r.host || "";
  return (r.protocol || r[U0] ? (r.protocol || "") + "//" : "") + i + o + e + t + n
}
const W2 = () => {
    var r;
    return ((r = window == null ? void 0 : window.__NUXT__) == null ? void 0 : r.config) || {}
  },
  Ql = W2().app,
  X2 = () => Ql.baseURL,
  Y2 = () => Ql.buildAssetsDir,
  kh = (...r) => Do(j0(), Y2(), ...r),
  j0 = (...r) => {
    const e = Ql.cdnURL || Ql.baseURL;
    return r.length ? Do(e, ...r) : e
  };
globalThis.__buildAssetsURL = kh, globalThis.__publicAssetsURL = j0;
const z2 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  G2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  q2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function K2(r, e) {
  if (r === "__proto__" || r === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Q2(r);
    return
  }
  return e
}

function Q2(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)
}

function Da(r, e = {}) {
  if (typeof r != "string") return r;
  const t = r.trim();
  if (r[0] === '"' && r.endsWith('"') && !r.includes("\\")) return t.slice(1, -1);
  if (t.length <= 9) {
    const n = t.toLowerCase();
    if (n === "true") return !0;
    if (n === "false") return !1;
    if (n === "undefined") return;
    if (n === "null") return null;
    if (n === "nan") return Number.NaN;
    if (n === "infinity") return Number.POSITIVE_INFINITY;
    if (n === "-infinity") return Number.NEGATIVE_INFINITY
  }
  if (!q2.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r
  }
  try {
    if (z2.test(r) || G2.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, K2)
    }
    return JSON.parse(r)
  } catch (n) {
    if (e.strict) throw n;
    return r
  }
}
class J2 extends Error {
  constructor(e, t) {
    super(e, t), this.name = "FetchError", t != null && t.cause && !this.cause && (this.cause = t.cause)
  }
}

function Z2(r) {
  var l, c, u, d, h;
  const e = ((l = r.error) == null ? void 0 : l.message) || ((c = r.error) == null ? void 0 : c.toString()) || "",
    t = ((u = r.request) == null ? void 0 : u.method) || ((d = r.options) == null ? void 0 : d.method) || "GET",
    n = ((h = r.request) == null ? void 0 : h.url) || String(r.request) || "/",
    i = `[${t}] ${JSON.stringify(n)}`,
    o = r.response ? `${r.response.status} ${r.response.statusText}` : "<no response>",
    s = `${i}: ${o}${e?` ${e}`:""}`,
    a = new J2(s, r.error ? {
      cause: r.error
    } : void 0);
  for (const f of ["request", "options", "response"]) Object.defineProperty(a, f, {
    get() {
      return r[f]
    }
  });
  for (const [f, _] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(a, f, {
    get() {
      return r.response && r.response[_]
    }
  });
  return a
}
const eb = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function $d(r = "GET") {
  return eb.has(r.toUpperCase())
}

function tb(r) {
  if (r === void 0) return !1;
  const e = typeof r;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(r) ? !0 : r.buffer ? !1 : r.constructor && r.constructor.name === "Object" || typeof r.toJSON == "function"
}
const rb = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  nb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ib(r = "") {
  if (!r) return "json";
  const e = r.split(";").shift() || "";
  return nb.test(e) ? "json" : rb.has(e) || e.startsWith("text/") ? "text" : "blob"
}

function ob(r, e, t = globalThis.Headers) {
  const n = {
    ...e,
    ...r
  };
  if (e != null && e.params && (r != null && r.params) && (n.params = {
      ...e == null ? void 0 : e.params,
      ...r == null ? void 0 : r.params
    }), e != null && e.query && (r != null && r.query) && (n.query = {
      ...e == null ? void 0 : e.query,
      ...r == null ? void 0 : r.query
    }), e != null && e.headers && (r != null && r.headers)) {
    n.headers = new t((e == null ? void 0 : e.headers) || {});
    for (const [i, o] of new t((r == null ? void 0 : r.headers) || {})) n.headers.set(i, o)
  }
  return n
}
const sb = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  ab = new Set([101, 204, 205, 304]);

function W0(r = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: t = globalThis.Headers,
    AbortController: n = globalThis.AbortController
  } = r;
  async function i(a) {
    const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
    if (a.options.retry !== !1 && !l) {
      let u;
      typeof a.options.retry == "number" ? u = a.options.retry : u = $d(a.options.method) ? 0 : 1;
      const d = a.response && a.response.status || 500;
      if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(d) : sb.has(d))) {
        const h = a.options.retryDelay || 0;
        return h > 0 && await new Promise(f => setTimeout(f, h)), o(a.request, {
          ...a.options,
          retry: u - 1,
          timeout: a.options.timeout
        })
      }
    }
    const c = Z2(a);
    throw Error.captureStackTrace && Error.captureStackTrace(c, o), c
  }
  const o = async function(l, c = {}) {
    var h;
    const u = {
      request: l,
      options: ob(c, r.defaults, t),
      response: void 0,
      error: void 0
    };
    if (u.options.method = (h = u.options.method) == null ? void 0 : h.toUpperCase(), u.options.onRequest && await u.options.onRequest(u), typeof u.request == "string" && (u.options.baseURL && (u.request = H2(u.request, u.options.baseURL)), (u.options.query || u.options.params) && (u.request = Eh(u.request, {
        ...u.options.params,
        ...u.options.query
      }))), u.options.body && $d(u.options.method) && (tb(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body), u.options.headers = new t(u.options.headers || {}), u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"), u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo" in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex" in u.options || (u.options.duplex = "half"))), !u.options.signal && u.options.timeout) {
      const f = new n;
      setTimeout(() => f.abort(), u.options.timeout), u.options.signal = f.signal
    }
    try {
      u.response = await e(u.request, u.options)
    } catch (f) {
      return u.error = f, u.options.onRequestError && await u.options.onRequestError(u), await i(u)
    }
    if (u.response.body && !ab.has(u.response.status) && u.options.method !== "HEAD") {
      const f = (u.options.parseResponse ? "json" : u.options.responseType) || ib(u.response.headers.get("content-type") || "");
      switch (f) {
        case "json": {
          const _ = await u.response.text(),
            p = u.options.parseResponse || Da;
          u.response._data = p(_);
          break
        }
        case "stream": {
          u.response._data = u.response.body;
          break
        }
        default:
          u.response._data = await u.response[f]()
      }
    }
    return u.options.onResponse && await u.options.onResponse(u), !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u), await i(u)) : u.response
  }, s = async function(l, c) {
    return (await o(l, c))._data
  };
  return s.raw = o, s.native = (...a) => e(...a), s.create = (a = {}) => W0({
    ...r,
    defaults: {
      ...r.defaults,
      ...a
    }
  }), s
}
const Sh = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object")
  }(),
  lb = Sh.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  cb = Sh.Headers,
  ub = Sh.AbortController,
  fb = W0({
    fetch: lb,
    Headers: cb,
    AbortController: ub
  }),
  hb = fb;
globalThis.$fetch || (globalThis.$fetch = hb.create({
  baseURL: X2()
}));

function Xu(r, e = {}, t) {
  for (const n in r) {
    const i = r[n],
      o = t ? `${t}:${n}` : n;
    typeof i == "object" && i !== null ? Xu(i, e, o) : typeof i == "function" && (e[o] = i)
  }
  return e
}
const db = {
    run: r => r()
  },
  pb = () => db,
  X0 = typeof console.createTask < "u" ? console.createTask : pb;

function _b(r, e) {
  const t = e.shift(),
    n = X0(t);
  return r.reduce((i, o) => i.then(() => n.run(() => o(...e))), Promise.resolve())
}

function gb(r, e) {
  const t = e.shift(),
    n = X0(t);
  return Promise.all(r.map(i => n.run(() => i(...e))))
}

function Zc(r, e) {
  for (const t of [...r]) t(e)
}
class mb {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
  }
  hook(e, t, n = {}) {
    if (!e || typeof t != "function") return () => {};
    const i = e;
    let o;
    for (; this._deprecatedHooks[e];) o = this._deprecatedHooks[e], e = o.to;
    if (o && !n.allowDeprecated) {
      let s = o.message;
      s || (s = `${i} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(s) || (console.warn(s), this._deprecatedMessages.add(s))
    }
    if (!t.name) try {
      Object.defineProperty(t, "name", {
        get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
        configurable: !0
      })
    } catch {}
    return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
      t && (this.removeHook(e, t), t = void 0)
    }
  }
  hookOnce(e, t) {
    let n, i = (...o) => (typeof n == "function" && n(), n = void 0, i = void 0, t(...o));
    return n = this.hook(e, i), n
  }
  removeHook(e, t) {
    if (this._hooks[e]) {
      const n = this._hooks[e].indexOf(t);
      n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e]
    }
  }
  deprecateHook(e, t) {
    this._deprecatedHooks[e] = typeof t == "string" ? {
      to: t
    } : t;
    const n = this._hooks[e] || [];
    delete this._hooks[e];
    for (const i of n) this.hook(e, i)
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e);
    for (const t in e) this.deprecateHook(t, e[t])
  }
  addHooks(e) {
    const t = Xu(e),
      n = Object.keys(t).map(i => this.hook(i, t[i]));
    return () => {
      for (const i of n.splice(0, n.length)) i()
    }
  }
  removeHooks(e) {
    const t = Xu(e);
    for (const n in t) this.removeHook(n, t[n])
  }
  removeAllHooks() {
    for (const e in this._hooks) delete this._hooks[e]
  }
  callHook(e, ...t) {
    return t.unshift(e), this.callHookWith(_b, e, ...t)
  }
  callHookParallel(e, ...t) {
    return t.unshift(e), this.callHookWith(gb, e, ...t)
  }
  callHookWith(e, t, ...n) {
    const i = this._before || this._after ? {
      name: t,
      args: n,
      context: {}
    } : void 0;
    this._before && Zc(this._before, i);
    const o = e(t in this._hooks ? [...this._hooks[t]] : [], n);
    return o instanceof Promise ? o.finally(() => {
      this._after && i && Zc(this._after, i)
    }) : (this._after && i && Zc(this._after, i), o)
  }
  beforeEach(e) {
    return this._before = this._before || [], this._before.push(e), () => {
      if (this._before !== void 0) {
        const t = this._before.indexOf(e);
        t !== -1 && this._before.splice(t, 1)
      }
    }
  }
  afterEach(e) {
    return this._after = this._after || [], this._after.push(e), () => {
      if (this._after !== void 0) {
        const t = this._after.indexOf(e);
        t !== -1 && this._after.splice(t, 1)
      }
    }
  }
}

function Y0() {
  return new mb
}

function yb(r = {}) {
  let e, t = !1;
  const n = s => {
    if (e && e !== s) throw new Error("Context conflict")
  };
  let i;
  if (r.asyncContext) {
    const s = r.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    s ? i = new s : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
  }
  const o = () => {
    if (i && e === void 0) {
      const s = i.getStore();
      if (s !== void 0) return s
    }
    return e
  };
  return {
    use: () => {
      const s = o();
      if (s === void 0) throw new Error("Context is not available");
      return s
    },
    tryUse: () => o(),
    set: (s, a) => {
      a || n(s), e = s, t = !0
    },
    unset: () => {
      e = void 0, t = !1
    },
    call: (s, a) => {
      n(s), e = s;
      try {
        return i ? i.run(s, a) : a()
      } finally {
        t || (e = void 0)
      }
    },
    async callAsync(s, a) {
      e = s;
      const l = () => {
          e = s
        },
        c = () => e === s ? l : void 0;
      Yu.add(c);
      try {
        const u = i ? i.run(s, a) : a();
        return t || (e = void 0), await u
      } finally {
        Yu.delete(c)
      }
    }
  }
}

function bb(r = {}) {
  const e = {};
  return {
    get(t, n = {}) {
      return e[t] || (e[t] = yb({
        ...r,
        ...n
      })), e[t], e[t]
    }
  }
}
const Jl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
  Bd = "__unctx__",
  vb = Jl[Bd] || (Jl[Bd] = bb()),
  Db = (r, e = {}) => vb.get(r, e),
  Vd = "__unctx_async_handlers__",
  Yu = Jl[Vd] || (Jl[Vd] = new Set);

function Hn(r) {
  const e = [];
  for (const i of Yu) {
    const o = i();
    o && e.push(o)
  }
  const t = () => {
    for (const i of e) i()
  };
  let n = r();
  return n && typeof n == "object" && "catch" in n && (n = n.catch(i => {
    throw t(), i
  })), [n, t]
}
const z0 = Db("nuxt-app", {
    asyncContext: !1
  }),
  wb = "__nuxt_plugin";

function xb(r) {
  let e = 0;
  const t = {
    _scope: ja(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.10.3"
      },
      get vue() {
        return t.vueApp.version
      }
    },
    payload: Jn({
      data: {},
      state: {},
      once: new Set,
      _errors: {},
      ...window.__NUXT__ ?? {}
    }),
    static: {
      data: {}
    },
    runWithContext: i => t._scope.run(() => kb(t, i)),
    isHydrating: !0,
    deferHydration() {
      if (!t.isHydrating) return () => {};
      e++;
      let i = !1;
      return () => {
        if (!i && (i = !0, e--, e === 0)) return t.isHydrating = !1, t.callHook("app:suspense:resolve")
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...r
  };
  t.hooks = Y0(), t.hook = t.hooks.hook, t.callHook = t.hooks.callHook, t.provide = (i, o) => {
    const s = "$" + i;
    il(t, s, o), il(t.vueApp.config.globalProperties, s, o)
  }, il(t.vueApp, "$nuxt", t), il(t.vueApp.config.globalProperties, "$nuxt", t);
  {
    window.addEventListener("nuxt.preloadError", o => {
      t.callHook("app:chunkError", {
        error: o.payload
      })
    }), window.useNuxtApp = window.useNuxtApp || Ve;
    const i = t.hook("app:error", (...o) => {
      console.error("[nuxt] error caught during app initialization", ...o)
    });
    t.hook("app:mounted", i)
  }
  const n = Jn(t.payload.config);
  return t.provide("config", n), t
}
async function Cb(r, e) {
  if (e.hooks && r.hooks.addHooks(e.hooks), typeof e == "function") {
    const {
      provide: t
    } = await r.runWithContext(() => e(r)) || {};
    if (t && typeof t == "object")
      for (const n in t) r.provide(n, t[n])
  }
}
async function Eb(r, e) {
  const t = [],
    n = [],
    i = [],
    o = [];
  let s = 0;
  async function a(l) {
    var u;
    const c = ((u = l.dependsOn) == null ? void 0 : u.filter(d => e.some(h => h._name === d) && !t.includes(d))) ?? [];
    if (c.length > 0) n.push([new Set(c), l]);
    else {
      const d = Cb(r, l).then(async () => {
        l._name && (t.push(l._name), await Promise.all(n.map(async ([h, f]) => {
          h.has(l._name) && (h.delete(l._name), h.size === 0 && (s++, await a(f)))
        })))
      });
      l.parallel ? i.push(d.catch(h => o.push(h))) : await d
    }
  }
  for (const l of e) await a(l);
  if (await Promise.all(i), s)
    for (let l = 0; l < s; l++) await Promise.all(i);
  if (o.length) throw o[0]
}

function Jt(r) {
  if (typeof r == "function") return r;
  const e = r._name || r.name;
  return delete r.name, Object.assign(r.setup || (() => {}), r, {
    [wb]: !0,
    _name: e
  })
}

function kb(r, e, t) {
  const n = () => t ? e(...t) : e();
  return z0.set(r), r.vueApp.runWithContext(n)
}

function Sb() {
  var e;
  let r;
  return mh() && (r = (e = Ss()) == null ? void 0 : e.appContext.app.$nuxt), r = r || z0.tryUse(), r || null
}

function Ve() {
  const r = Sb();
  if (!r) throw new Error("[nuxt] instance unavailable");
  return r
}

function Xa(r) {
  return Ve().$config
}

function il(r, e, t) {
  Object.defineProperty(r, e, {
    get: () => t
  })
}
const ol = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;

function Tb(r, e) {
  if (typeof r != "string") throw new TypeError("argument str must be a string");
  const t = {},
    i = (e || {}).decode || Ab;
  let o = 0;
  for (; o < r.length;) {
    const s = r.indexOf("=", o);
    if (s === -1) break;
    let a = r.indexOf(";", o);
    if (a === -1) a = r.length;
    else if (a < s) {
      o = r.lastIndexOf(";", s - 1) + 1;
      continue
    }
    const l = r.slice(o, s).trim();
    if (t[l] === void 0) {
      let c = r.slice(s + 1, a).trim();
      c.codePointAt(0) === 34 && (c = c.slice(1, -1)), t[l] = Lb(c, i)
    }
    o = a + 1
  }
  return t
}

function Hd(r, e, t) {
  const n = t || {},
    i = n.encode || Rb;
  if (typeof i != "function") throw new TypeError("option encode is invalid");
  if (!ol.test(r)) throw new TypeError("argument name is invalid");
  const o = i(e);
  if (o && !ol.test(o)) throw new TypeError("argument val is invalid");
  let s = r + "=" + o;
  if (n.maxAge !== void 0 && n.maxAge !== null) {
    const a = n.maxAge - 0;
    if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a)
  }
  if (n.domain) {
    if (!ol.test(n.domain)) throw new TypeError("option domain is invalid");
    s += "; Domain=" + n.domain
  }
  if (n.path) {
    if (!ol.test(n.path)) throw new TypeError("option path is invalid");
    s += "; Path=" + n.path
  }
  if (n.expires) {
    if (!Pb(n.expires) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
    s += "; Expires=" + n.expires.toUTCString()
  }
  if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.priority) switch (typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority) {
    case "low":
      s += "; Priority=Low";
      break;
    case "medium":
      s += "; Priority=Medium";
      break;
    case "high":
      s += "; Priority=High";
      break;
    default:
      throw new TypeError("option priority is invalid")
  }
  if (n.sameSite) switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
    case !0:
      s += "; SameSite=Strict";
      break;
    case "lax":
      s += "; SameSite=Lax";
      break;
    case "strict":
      s += "; SameSite=Strict";
      break;
    case "none":
      s += "; SameSite=None";
      break;
    default:
      throw new TypeError("option sameSite is invalid")
  }
  return s
}

function Pb(r) {
  return Object.prototype.toString.call(r) === "[object Date]" || r instanceof Date
}

function Lb(r, e) {
  try {
    return e(r)
  } catch {
    return r
  }
}

function Ab(r) {
  return r.includes("%") ? decodeURIComponent(r) : r
}

function Rb(r) {
  return encodeURIComponent(r)
}
const Ud = Object.freeze({
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});

function zu(r, e) {
  e ? e = {
    ...Ud,
    ...e
  } : e = Ud;
  const t = G0(e);
  return t.dispatch(r), t.toString()
}
const Ob = Object.freeze(["prototype", "__proto__", "constructor"]);

function G0(r) {
  let e = "",
    t = new Map;
  const n = i => {
    e += i
  };
  return {
    toString() {
      return e
    },
    getContext() {
      return t
    },
    dispatch(i) {
      return r.replacer && (i = r.replacer(i)), this[i === null ? "null" : typeof i](i)
    },
    object(i) {
      if (i && typeof i.toJSON == "function") return this.object(i.toJSON());
      const o = Object.prototype.toString.call(i);
      let s = "";
      const a = o.length;
      a < 10 ? s = "unknown:[" + o + "]" : s = o.slice(8, a - 1), s = s.toLowerCase();
      let l = null;
      if ((l = t.get(i)) === void 0) t.set(i, t.size);
      else return this.dispatch("[CIRCULAR:" + l + "]");
      if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(i)) return n("buffer:"), n(i.toString("utf8"));
      if (s !== "object" && s !== "function" && s !== "asyncfunction") this[s] ? this[s](i) : r.ignoreUnknown || this.unkown(i, s);
      else {
        let c = Object.keys(i);
        r.unorderedObjects && (c = c.sort());
        let u = [];
        r.respectType !== !1 && !jd(i) && (u = Ob), r.excludeKeys && (c = c.filter(h => !r.excludeKeys(h)), u = u.filter(h => !r.excludeKeys(h))), n("object:" + (c.length + u.length) + ":");
        const d = h => {
          this.dispatch(h), n(":"), r.excludeValues || this.dispatch(i[h]), n(",")
        };
        for (const h of c) d(h);
        for (const h of u) d(h)
      }
    },
    array(i, o) {
      if (o = o === void 0 ? r.unorderedArrays !== !1 : o, n("array:" + i.length + ":"), !o || i.length <= 1) {
        for (const l of i) this.dispatch(l);
        return
      }
      const s = new Map,
        a = i.map(l => {
          const c = G0(r);
          c.dispatch(l);
          for (const [u, d] of c.getContext()) s.set(u, d);
          return c.toString()
        });
      return t = s, a.sort(), this.array(a, !1)
    },
    date(i) {
      return n("date:" + i.toJSON())
    },
    symbol(i) {
      return n("symbol:" + i.toString())
    },
    unkown(i, o) {
      if (n(o), !!i && (n(":"), i && typeof i.entries == "function")) return this.array(Array.from(i.entries()), !0)
    },
    error(i) {
      return n("error:" + i.toString())
    },
    boolean(i) {
      return n("bool:" + i)
    },
    string(i) {
      n("string:" + i.length + ":"), n(i)
    },
    function(i) {
      n("fn:"), jd(i) ? this.dispatch("[native]") : this.dispatch(i.toString()), r.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(i.name)), r.respectFunctionProperties && this.object(i)
    },
    number(i) {
      return n("number:" + i)
    },
    xml(i) {
      return n("xml:" + i.toString())
    },
    null() {
      return n("Null")
    },
    undefined() {
      return n("Undefined")
    },
    regexp(i) {
      return n("regex:" + i.toString())
    },
    uint8array(i) {
      return n("uint8array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    uint8clampedarray(i) {
      return n("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(i))
    },
    int8array(i) {
      return n("int8array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    uint16array(i) {
      return n("uint16array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    int16array(i) {
      return n("int16array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    uint32array(i) {
      return n("uint32array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    int32array(i) {
      return n("int32array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    float32array(i) {
      return n("float32array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    float64array(i) {
      return n("float64array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    arraybuffer(i) {
      return n("arraybuffer:"), this.dispatch(new Uint8Array(i))
    },
    url(i) {
      return n("url:" + i.toString())
    },
    map(i) {
      n("map:");
      const o = [...i];
      return this.array(o, r.unorderedSets !== !1)
    },
    set(i) {
      n("set:");
      const o = [...i];
      return this.array(o, r.unorderedSets !== !1)
    },
    file(i) {
      return n("file:"), this.dispatch([i.name, i.size, i.type, i.lastModfied])
    },
    blob() {
      if (r.ignoreUnknown) return n("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
    },
    domwindow() {
      return n("domwindow")
    },
    bigint(i) {
      return n("bigint:" + i.toString())
    },
    process() {
      return n("process")
    },
    timer() {
      return n("timer")
    },
    pipe() {
      return n("pipe")
    },
    tcp() {
      return n("tcp")
    },
    udp() {
      return n("udp")
    },
    tty() {
      return n("tty")
    },
    statwatcher() {
      return n("statwatcher")
    },
    securecontext() {
      return n("securecontext")
    },
    connection() {
      return n("connection")
    },
    zlib() {
      return n("zlib")
    },
    context() {
      return n("context")
    },
    nodescript() {
      return n("nodescript")
    },
    httpparser() {
      return n("httpparser")
    },
    dataview() {
      return n("dataview")
    },
    signal() {
      return n("signal")
    },
    fsevent() {
      return n("fsevent")
    },
    tlswrap() {
      return n("tlswrap")
    }
  }
}
const q0 = "[native code] }",
  Fb = q0.length;

function jd(r) {
  return typeof r != "function" ? !1 : Function.prototype.toString.call(r).slice(-Fb) === q0
}
class Ci {
  constructor(e, t) {
    e = this.words = e || [], this.sigBytes = t === void 0 ? e.length * 4 : t
  }
  toString(e) {
    return (e || Mb).stringify(this)
  }
  concat(e) {
    if (this.clamp(), this.sigBytes % 4)
      for (let t = 0; t < e.sigBytes; t++) {
        const n = e.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
        this.words[this.sigBytes + t >>> 2] |= n << 24 - (this.sigBytes + t) % 4 * 8
      } else
        for (let t = 0; t < e.sigBytes; t += 4) this.words[this.sigBytes + t >>> 2] = e.words[t >>> 2];
    return this.sigBytes += e.sigBytes, this
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4)
  }
  clone() {
    return new Ci([...this.words])
  }
}
const Mb = {
    stringify(r) {
      const e = [];
      for (let t = 0; t < r.sigBytes; t++) {
        const n = r.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
        e.push((n >>> 4).toString(16), (n & 15).toString(16))
      }
      return e.join("")
    }
  },
  Nb = {
    stringify(r) {
      const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        t = [];
      for (let n = 0; n < r.sigBytes; n += 3) {
        const i = r.words[n >>> 2] >>> 24 - n % 4 * 8 & 255,
          o = r.words[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255,
          s = r.words[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255,
          a = i << 16 | o << 8 | s;
        for (let l = 0; l < 4 && n * 8 + l * 6 < r.sigBytes * 8; l++) t.push(e.charAt(a >>> 6 * (3 - l) & 63))
      }
      return t.join("")
    }
  },
  Ib = {
    parse(r) {
      const e = r.length,
        t = [];
      for (let n = 0; n < e; n++) t[n >>> 2] |= (r.charCodeAt(n) & 255) << 24 - n % 4 * 8;
      return new Ci(t, e)
    }
  },
  $b = {
    parse(r) {
      return Ib.parse(unescape(encodeURIComponent(r)))
    }
  };
class Bb {
  constructor() {
    this._data = new Ci, this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 512 / 32
  }
  reset() {
    this._data = new Ci, this._nDataBytes = 0
  }
  _append(e) {
    typeof e == "string" && (e = $b.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
  }
  _doProcessBlock(e, t) {}
  _process(e) {
    let t, n = this._data.sigBytes / (this.blockSize * 4);
    e ? n = Math.ceil(n) : n = Math.max((n | 0) - this._minBufferSize, 0);
    const i = n * this.blockSize,
      o = Math.min(i * 4, this._data.sigBytes);
    if (i) {
      for (let s = 0; s < i; s += this.blockSize) this._doProcessBlock(this._data.words, s);
      t = this._data.words.splice(0, i), this._data.sigBytes -= o
    }
    return new Ci(t, o)
  }
}
class Vb extends Bb {
  update(e) {
    return this._append(e), this._process(), this
  }
  finalize(e) {
    e && this._append(e)
  }
}
const Wd = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
  Hb = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998],
  Bi = [];
class Ub extends Vb {
  constructor() {
    super(...arguments), this._hash = new Ci([...Wd])
  }
  reset() {
    super.reset(), this._hash = new Ci([...Wd])
  }
  _doProcessBlock(e, t) {
    const n = this._hash.words;
    let i = n[0],
      o = n[1],
      s = n[2],
      a = n[3],
      l = n[4],
      c = n[5],
      u = n[6],
      d = n[7];
    for (let h = 0; h < 64; h++) {
      if (h < 16) Bi[h] = e[t + h] | 0;
      else {
        const b = Bi[h - 15],
          v = (b << 25 | b >>> 7) ^ (b << 14 | b >>> 18) ^ b >>> 3,
          D = Bi[h - 2],
          k = (D << 15 | D >>> 17) ^ (D << 13 | D >>> 19) ^ D >>> 10;
        Bi[h] = v + Bi[h - 7] + k + Bi[h - 16]
      }
      const f = l & c ^ ~l & u,
        _ = i & o ^ i & s ^ o & s,
        p = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
        m = (l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25),
        g = d + m + f + Hb[h] + Bi[h],
        y = p + _;
      d = u, u = c, c = l, l = a + g | 0, a = s, s = o, o = i, i = g + y | 0
    }
    n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + s | 0, n[3] = n[3] + a | 0, n[4] = n[4] + l | 0, n[5] = n[5] + c | 0, n[6] = n[6] + u | 0, n[7] = n[7] + d | 0
  }
  finalize(e) {
    super.finalize(e);
    const t = this._nDataBytes * 8,
      n = this._data.sigBytes * 8;
    return this._data.words[n >>> 5] |= 128 << 24 - n % 32, this._data.words[(n + 64 >>> 9 << 4) + 14] = Math.floor(t / 4294967296), this._data.words[(n + 64 >>> 9 << 4) + 15] = t, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash
  }
}

function jb(r) {
  return new Ub().finalize(r).toString(Nb)
}

function Wb(r, e = {}) {
  const t = typeof r == "string" ? r : zu(r, e);
  return jb(t).slice(0, 10)
}

function Xb(r, e, t = {}) {
  return r === e || zu(r, t) === zu(e, t)
}

function Yb(r, e) {
  return {
    ctx: {
      table: r
    },
    matchAll: t => Q0(t, r, e)
  }
}

function K0(r) {
  const e = {};
  for (const t in r) e[t] = t === "dynamic" ? new Map(Object.entries(r[t]).map(([n, i]) => [n, K0(i)])) : new Map(Object.entries(r[t]));
  return e
}

function zb(r) {
  return Yb(K0(r))
}

function Q0(r, e, t) {
  t !== !0 && r.endsWith("/") && (r = r.slice(0, -1) || "/");
  const n = [];
  for (const [o, s] of Xd(e.wildcard))(r === o || r.startsWith(o + "/")) && n.push(s);
  for (const [o, s] of Xd(e.dynamic))
    if (r.startsWith(o + "/")) {
      const a = "/" + r.slice(o.length).split("/").splice(2).join("/");
      n.push(...Q0(a, s))
    } const i = e.static.get(r);
  return i && n.push(i), n.filter(Boolean)
}

function Xd(r) {
  return [...r.entries()].sort((e, t) => e[0].length - t[0].length)
}

function eu(r) {
  if (r === null || typeof r != "object") return !1;
  const e = Object.getPrototypeOf(r);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in r ? !1 : Symbol.toStringTag in r ? Object.prototype.toString.call(r) === "[object Module]" : !0
}

function Gu(r, e, t = ".", n) {
  if (!eu(e)) return Gu(r, {}, t, n);
  const i = Object.assign({}, e);
  for (const o in r) {
    if (o === "__proto__" || o === "constructor") continue;
    const s = r[o];
    s != null && (n && n(i, o, s, t) || (Array.isArray(s) && Array.isArray(i[o]) ? i[o] = [...s, ...i[o]] : eu(s) && eu(i[o]) ? i[o] = Gu(s, i[o], (t ? `${t}.` : "") + o.toString(), n) : i[o] = s))
  }
  return i
}

function J0(r) {
  return (...e) => e.reduce((t, n) => Gu(t, n, "", r), {})
}
const Z0 = J0(),
  Gb = J0((r, e, t) => {
    if (r[e] !== void 0 && typeof t == "function") return r[e] = t(r[e]), !0
  });

function qb(r, e) {
  try {
    return e in r
  } catch {
    return !1
  }
}
var Kb = Object.defineProperty,
  Qb = (r, e, t) => e in r ? Kb(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
  }) : r[e] = t,
  zi = (r, e, t) => (Qb(r, typeof e != "symbol" ? e + "" : e, t), t);
class qu extends Error {
  constructor(e, t = {}) {
    super(e, t), zi(this, "statusCode", 500), zi(this, "fatal", !1), zi(this, "unhandled", !1), zi(this, "statusMessage"), zi(this, "data"), zi(this, "cause"), t.cause && !this.cause && (this.cause = t.cause)
  }
  toJSON() {
    const e = {
      message: this.message,
      statusCode: Qu(this.statusCode, 500)
    };
    return this.statusMessage && (e.statusMessage = eg(this.statusMessage)), this.data !== void 0 && (e.data = this.data), e
  }
}
zi(qu, "__h3_error__", !0);

function Ku(r) {
  if (typeof r == "string") return new qu(r);
  if (Jb(r)) return r;
  const e = new qu(r.message ?? r.statusMessage ?? "", {
    cause: r.cause || r
  });
  if (qb(r, "stack")) try {
    Object.defineProperty(e, "stack", {
      get() {
        return r.stack
      }
    })
  } catch {
    try {
      e.stack = r.stack
    } catch {}
  }
  if (r.data && (e.data = r.data), r.statusCode ? e.statusCode = Qu(r.statusCode, e.statusCode) : r.status && (e.statusCode = Qu(r.status, e.statusCode)), r.statusMessage ? e.statusMessage = r.statusMessage : r.statusText && (e.statusMessage = r.statusText), e.statusMessage) {
    const t = e.statusMessage;
    eg(e.statusMessage) !== t && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
  }
  return r.fatal !== void 0 && (e.fatal = r.fatal), r.unhandled !== void 0 && (e.unhandled = r.unhandled), e
}

function Jb(r) {
  var e;
  return ((e = r == null ? void 0 : r.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const Zb = /[^\u0009\u0020-\u007E]/g;

function eg(r = "") {
  return r.replace(Zb, "")
}

function Qu(r, e = 200) {
  return !r || (typeof r == "string" && (r = Number.parseInt(r, 10)), r < 100 || r > 999) ? e : r
}
const tg = Symbol("layout-meta"),
  Ya = Symbol("route"),
  Zt = () => {
    var r;
    return (r = Ve()) == null ? void 0 : r.$router
  },
  ni = () => mh() ? fr(Ya, Ve()._route) : Ve()._route;
const ev = (r, e, t = {}) => {
    const n = Ve(),
      i = t.global || typeof r != "string",
      o = typeof r != "string" ? r : e;
    if (!o) {
      console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", r);
      return
    }
    i ? n._middleware.global.push(o) : n._middleware.named[r] = o
  },
  tv = () => {
    try {
      if (Ve()._processingMiddleware) return !0
    } catch {
      return !0
    }
    return !1
  },
  rg = (r, e) => {
    r || (r = "/");
    const t = typeof r == "string" ? r : Eh(r.path || "/", r.query || {}) + (r.hash || "");
    if (e != null && e.open) {
      {
        const {
          target: a = "_blank",
          windowFeatures: l = {}
        } = e.open, c = Object.entries(l).filter(([u, d]) => d !== void 0).map(([u, d]) => `${u.toLowerCase()}=${d}`).join(", ");
        open(t, a, c)
      }
      return Promise.resolve()
    }
    const n = (e == null ? void 0 : e.external) || ri(t, {
      acceptRelative: !0
    });
    if (n) {
      if (!(e != null && e.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const a = Wa(t).protocol;
      if (a && B2(a)) throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const i = tv();
    if (!n && i) return r;
    const o = Zt(),
      s = Ve();
    return n ? (s._scope.stop(), e != null && e.replace ? location.replace(t) : location.href = t, i ? s.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : e != null && e.replace ? o.replace(r) : o.push(r)
  },
  ng = "__nuxt_error",
  Tc = () => yh(Ve().payload, "error"),
  Yo = r => {
    const e = za(r);
    try {
      const t = Ve(),
        n = Tc();
      t.hooks.callHook("app:error", e), n.value = n.value || e
    } catch {
      throw e
    }
    return e
  },
  rv = async (r = {}) => {
    const e = Ve(),
      t = Tc();
    e.callHook("app:error:cleared", r), r.redirect && await Zt().replace(r.redirect), t.value = null
  }, nv = r => !!r && typeof r == "object" && ng in r, za = r => {
    const e = Ku(r);
    return Object.defineProperty(e, ng, {
      value: !0,
      configurable: !1,
      writable: !1
    }), e
  }, iv = "modulepreload", ov = function(r, e) {
    return r[0] === "." ? new URL(r, e).href : r
  }, Yd = {}, sv = function(e, t, n) {
    let i = Promise.resolve();
    if (t && t.length > 0) {
      const o = document.getElementsByTagName("link");
      i = Promise.all(t.map(s => {
        if (s = ov(s, n), s in Yd) return;
        Yd[s] = !0;
        const a = s.endsWith(".css"),
          l = a ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let d = o.length - 1; d >= 0; d--) {
            const h = o[d];
            if (h.href === s && (!a || h.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${s}"]${l}`)) return;
        const u = document.createElement("link");
        if (u.rel = a ? "stylesheet" : iv, a || (u.as = "script", u.crossOrigin = ""), u.href = s, document.head.appendChild(u), a) return new Promise((d, h) => {
          u.addEventListener("load", d), u.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${s}`)))
        })
      }))
    }
    return i.then(() => e()).catch(o => {
      const s = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (s.payload = o, window.dispatchEvent(s), !s.defaultPrevented) throw o
    })
  }, dt = (...r) => sv(...r).catch(e => {
    const t = new Event("nuxt.preloadError");
    throw t.payload = e, window.dispatchEvent(t), e
  }), av = -1, lv = -2, cv = -3, uv = -4, fv = -5, hv = -6;

function dv(r, e) {
  return pv(JSON.parse(r), e)
}

function pv(r, e) {
  if (typeof r == "number") return i(r, !0);
  if (!Array.isArray(r) || r.length === 0) throw new Error("Invalid input");
  const t = r,
    n = Array(t.length);

  function i(o, s = !1) {
    if (o === av) return;
    if (o === cv) return NaN;
    if (o === uv) return 1 / 0;
    if (o === fv) return -1 / 0;
    if (o === hv) return -0;
    if (s) throw new Error("Invalid input");
    if (o in n) return n[o];
    const a = t[o];
    if (!a || typeof a != "object") n[o] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == "string") {
        const l = a[0],
          c = e == null ? void 0 : e[l];
        if (c) return n[o] = c(i(a[1]));
        switch (l) {
          case "Date":
            n[o] = new Date(a[1]);
            break;
          case "Set":
            const u = new Set;
            n[o] = u;
            for (let f = 1; f < a.length; f += 1) u.add(i(a[f]));
            break;
          case "Map":
            const d = new Map;
            n[o] = d;
            for (let f = 1; f < a.length; f += 2) d.set(i(a[f]), i(a[f + 1]));
            break;
          case "RegExp":
            n[o] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            n[o] = Object(a[1]);
            break;
          case "BigInt":
            n[o] = BigInt(a[1]);
            break;
          case "null":
            const h = Object.create(null);
            n[o] = h;
            for (let f = 1; f < a.length; f += 2) h[a[f]] = i(a[f + 1]);
            break;
          default:
            throw new Error(`Unknown type ${l}`)
        }
      } else {
        const l = new Array(a.length);
        n[o] = l;
        for (let c = 0; c < a.length; c += 1) {
          const u = a[c];
          u !== lv && (l[c] = i(u))
        }
      }
    else {
      const l = {};
      n[o] = l;
      for (const c in a) {
        const u = a[c];
        l[c] = i(u)
      }
    }
    return n[o]
  }
  return i(0)
}

function _v(r) {
  return Array.isArray(r) ? r : [r]
}
const gv = ["title", "titleTemplate", "script", "style", "noscript"],
  Al = ["base", "meta", "link", "style", "script", "noscript"],
  mv = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
  yv = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
  ig = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"],
  bv = typeof window < "u";

function Th(r) {
  let e = 9;
  for (let t = 0; t < r.length;) e = Math.imul(e ^ r.charCodeAt(t++), 9 ** 9);
  return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function zd(r) {
  return r._h || Th(r._d ? r._d : `${r.tag}:${r.textContent||r.innerHTML||""}:${Object.entries(r.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)
}

function og(r, e) {
  const {
    props: t,
    tag: n
  } = r;
  if (yv.includes(n)) return n;
  if (n === "link" && t.rel === "canonical") return "canonical";
  if (t.charset) return "charset";
  const i = ["id"];
  n === "meta" && i.push("name", "property", "http-equiv");
  for (const o of i)
    if (typeof t[o] < "u") {
      const s = String(t[o]);
      return e && !e(s) ? !1 : `${n}:${o}:${s}`
    } return !1
}

function Gd(r, e) {
  return r == null ? e || null : typeof r == "function" ? r(e) : r
}

function sg(r, e) {
  const t = [],
    n = e.resolveKeyData || (o => o.key),
    i = e.resolveValueData || (o => o.value);
  for (const [o, s] of Object.entries(r)) t.push(...(Array.isArray(s) ? s : [s]).map(a => {
    const l = {
        key: o,
        value: a
      },
      c = i(l);
    return typeof c == "object" ? sg(c, e) : Array.isArray(c) ? c : {
      [typeof e.key == "function" ? e.key(l) : e.key]: n(l),
      [typeof e.value == "function" ? e.value(l) : e.value]: c
    }
  }).flat());
  return t
}

function ag(r, e) {
  return Object.entries(r).map(([t, n]) => {
    if (typeof n == "object" && (n = ag(n, e)), e.resolve) {
      const i = e.resolve({
        key: t,
        value: n
      });
      if (typeof i < "u") return i
    }
    return typeof n == "number" && (n = n.toString()), typeof n == "string" && e.wrapValue && (n = n.replace(new RegExp(e.wrapValue, "g"), `\\${e.wrapValue}`), n = `${e.wrapValue}${n}${e.wrapValue}`), `${t}${e.keyValueSeparator||""}${n}`
  }).join(e.entrySeparator || "")
}
const er = r => ({
    keyValue: r,
    metaKey: "property"
  }),
  tu = r => ({
    keyValue: r
  }),
  Ph = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve({
          key: r,
          value: e
        }) {
          return `${Un(r)}=${e}`
        }
      }
    },
    articleExpirationTime: er("article:expiration_time"),
    articleModifiedTime: er("article:modified_time"),
    articlePublishedTime: er("article:published_time"),
    bookReleaseDate: er("book:release_date"),
    charset: {
      metaKey: "charset"
    },
    contentSecurityPolicy: {
      unpack: {
        entrySeparator: "; ",
        resolve({
          key: r,
          value: e
        }) {
          return `${Un(r)} ${e}`
        }
      },
      metaKey: "http-equiv"
    },
    contentType: {
      metaKey: "http-equiv"
    },
    defaultStyle: {
      metaKey: "http-equiv"
    },
    fbAppId: er("fb:app_id"),
    msapplicationConfig: tu("msapplication-Config"),
    msapplicationTileColor: tu("msapplication-TileColor"),
    msapplicationTileImage: tu("msapplication-TileImage"),
    ogAudioSecureUrl: er("og:audio:secure_url"),
    ogAudioUrl: er("og:audio"),
    ogImageSecureUrl: er("og:image:secure_url"),
    ogImageUrl: er("og:image"),
    ogSiteName: er("og:site_name"),
    ogVideoSecureUrl: er("og:video:secure_url"),
    ogVideoUrl: er("og:video"),
    profileFirstName: er("profile:first_name"),
    profileLastName: er("profile:last_name"),
    profileUsername: er("profile:username"),
    refresh: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: ";",
        resolve({
          key: r,
          value: e
        }) {
          if (r === "seconds") return `${e}`
        }
      }
    },
    robots: {
      unpack: {
        entrySeparator: ", ",
        resolve({
          key: r,
          value: e
        }) {
          return typeof e == "boolean" ? `${Un(r)}` : `${Un(r)}:${e}`
        }
      }
    },
    xUaCompatible: {
      metaKey: "http-equiv"
    }
  },
  lg = ["og", "book", "article", "profile"];

function cg(r) {
  var t;
  const e = Un(r).split(":")[0];
  return lg.includes(e) ? "property" : ((t = Ph[r]) == null ? void 0 : t.metaKey) || "name"
}

function vv(r) {
  var e;
  return ((e = Ph[r]) == null ? void 0 : e.keyValue) || Un(r)
}

function Un(r) {
  const e = r.replace(/([A-Z])/g, "-$1").toLowerCase(),
    t = e.split("-")[0];
  return lg.includes(t) || t === "twitter" ? r.replace(/([A-Z])/g, ":$1").toLowerCase() : e
}

function Ju(r) {
  if (Array.isArray(r)) return r.map(t => Ju(t));
  if (typeof r != "object" || Array.isArray(r)) return r;
  const e = {};
  for (const [t, n] of Object.entries(r)) e[Un(t)] = Ju(n);
  return e
}

function Dv(r, e) {
  const t = Ph[e];
  return e === "refresh" ? `${r.seconds};url=${r.url}` : ag(Ju(r), {
    keyValueSeparator: "=",
    entrySeparator: ", ",
    resolve({
      value: n,
      key: i
    }) {
      if (n === null) return "";
      if (typeof n == "boolean") return `${i}`
    },
    ...t == null ? void 0 : t.unpack
  })
}
const ug = ["og:image", "og:video", "og:audio", "twitter:image"];

function fg(r) {
  const e = {};
  return Object.entries(r).forEach(([t, n]) => {
    String(n) !== "false" && t && (e[t] = n)
  }), e
}

function qd(r, e) {
  const t = fg(e),
    n = Un(r),
    i = cg(n);
  if (ug.includes(n)) {
    const o = {};
    return Object.entries(t).forEach(([s, a]) => {
      o[`${r}${s==="url"?"":`${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
    }), hg(o).sort((s, a) => {
      var l, c;
      return (((l = s[i]) == null ? void 0 : l.length) || 0) - (((c = a[i]) == null ? void 0 : c.length) || 0)
    })
  }
  return [{
    [i]: n,
    ...t
  }]
}

function hg(r) {
  const e = [],
    t = {};
  Object.entries(r).forEach(([i, o]) => {
    if (!Array.isArray(o)) {
      if (typeof o == "object" && o) {
        if (ug.includes(Un(i))) {
          e.push(...qd(i, o));
          return
        }
        t[i] = fg(o)
      } else t[i] = o;
      return
    }
    o.forEach(s => {
      e.push(...typeof s == "string" ? hg({
        [i]: s
      }) : qd(i, s))
    })
  });
  const n = sg(t, {
    key({
      key: i
    }) {
      return cg(i)
    },
    value({
      key: i
    }) {
      return i === "charset" ? "charset" : "content"
    },
    resolveKeyData({
      key: i
    }) {
      return vv(i)
    },
    resolveValueData({
      value: i,
      key: o
    }) {
      return i === null ? "_null" : typeof i == "object" ? Dv(i, o) : typeof i == "number" ? i.toString() : i
    }
  });
  return [...e, ...n].map(i => (i.content === "_null" && (i.content = null), i))
}
async function wv(r, e, t) {
  const n = {
    tag: r,
    props: await dg(typeof e == "object" && typeof e != "function" && !(e instanceof Promise) ? {
      ...e
    } : {
      [
        ["script", "noscript", "style"].includes(r) ? "innerHTML" : "textContent"
      ]: e
    }, ["templateParams", "titleTemplate"].includes(r))
  };
  return ig.forEach(i => {
    const o = typeof n.props[i] < "u" ? n.props[i] : t[i];
    typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(i) || gv.includes(n.tag)) && (n[i === "children" ? "innerHTML" : i] = o), delete n.props[i])
  }), n.props.body && (n.tagPosition = "bodyClose", delete n.props.body), n.tag === "script" && typeof n.innerHTML == "object" && (n.innerHTML = JSON.stringify(n.innerHTML), n.props.type = n.props.type || "application/json"), Array.isArray(n.props.content) ? n.props.content.map(i => ({
    ...n,
    props: {
      ...n.props,
      content: i
    }
  })) : n
}

function xv(r, e) {
  const t = r === "class" ? " " : ";";
  return typeof e == "object" && !Array.isArray(e) && (e = Object.entries(e).filter(([, n]) => n).map(([n, i]) => r === "style" ? `${n}:${i}` : n)), (Array.isArray(e) ? e.join(t) : e).split(t).filter(n => n.trim()).filter(Boolean).join(t)
}
async function dg(r, e) {
  for (const t of Object.keys(r)) {
    if (["class", "style"].includes(t)) {
      r[t] = xv(t, r[t]);
      continue
    }
    if (r[t] instanceof Promise && (r[t] = await r[t]), !e && !ig.includes(t)) {
      const n = String(r[t]),
        i = t.startsWith("data-");
      n === "true" || n === "" ? r[t] = i ? "true" : !0 : r[t] || (i && n === "false" ? r[t] = "false" : delete r[t])
    }
  }
  return r
}
const Cv = 10;
async function Ev(r) {
  const e = [];
  return Object.entries(r.resolvedInput).filter(([t, n]) => typeof n < "u" && mv.includes(t)).forEach(([t, n]) => {
    const i = _v(n);
    e.push(...i.map(o => wv(t, o, r)).flat())
  }), (await Promise.all(e)).flat().filter(Boolean).map((t, n) => (t._e = r._i, r.mode && (t._m = r.mode), t._p = (r._i << Cv) + n, t))
}
const Kd = {
    base: -10,
    title: 10
  },
  Qd = {
    critical: -80,
    high: -10,
    low: 20
  };

function Zl(r) {
  let e = 100;
  const t = r.tagPriority;
  return typeof t == "number" ? t : (r.tag === "meta" ? (r.props["http-equiv"] === "content-security-policy" && (e = -30), r.props.charset && (e = -20), r.props.name === "viewport" && (e = -15)) : r.tag === "link" && r.props.rel === "preconnect" ? e = 20 : r.tag in Kd && (e = Kd[r.tag]), typeof t == "string" && t in Qd ? e + Qd[t] : e)
}
const kv = [{
    prefix: "before:",
    offset: -1
  }, {
    prefix: "after:",
    offset: 1
  }],
  pg = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
  si = "%separator";

function Rl(r, e, t) {
  if (typeof r != "string" || !r.includes("%")) return r;

  function n(s) {
    let a;
    return ["s", "pageTitle"].includes(s) ? a = e.pageTitle : s.includes(".") ? a = s.split(".").reduce((l, c) => l && l[c] || void 0, e) : a = e[s], typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
  }
  let i = r;
  try {
    i = decodeURI(r)
  } catch {}
  return (i.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(s => {
    const a = n(s.slice(1));
    typeof a == "string" && (r = r.replace(new RegExp(`\\${s}(\\W|$)`, "g"), (l, c) => `${a}${c}`).trim())
  }), r.includes(si) && (r.endsWith(si) && (r = r.slice(0, -si.length).trim()), r.startsWith(si) && (r = r.slice(si.length).trim()), r = r.replace(new RegExp(`\\${si}\\s*\\${si}`, "g"), si), r = Rl(r, {
    separator: t
  }, t)), r
}
async function _g(r, e = {}) {
  var u;
  const t = e.document || r.resolvedOptions.document;
  if (!t) return;
  const n = {
    shouldRender: r.dirty,
    tags: []
  };
  if (await r.hooks.callHook("dom:beforeRender", n), !n.shouldRender) return;
  const i = (await r.resolveTags()).map(d => ({
    tag: d,
    id: Al.includes(d.tag) ? zd(d) : d.tag,
    shouldRender: !0
  }));
  let o = r._dom;
  if (!o) {
    o = {
      elMap: {
        htmlAttrs: t.documentElement,
        bodyAttrs: t.body
      }
    };
    for (const d of ["body", "head"]) {
      const h = (u = t[d]) == null ? void 0 : u.children,
        f = [];
      for (const _ of [...h].filter(p => Al.includes(p.tagName.toLowerCase()))) {
        const p = {
          tag: _.tagName.toLowerCase(),
          props: await dg(_.getAttributeNames().reduce((y, b) => ({
            ...y,
            [b]: _.getAttribute(b)
          }), {})),
          innerHTML: _.innerHTML
        };
        let m = 1,
          g = og(p);
        for (; g && f.find(y => y._d === g);) g = `${g}:${m++}`;
        p._d = g || void 0, f.push(p), o.elMap[_.getAttribute("data-hid") || zd(p)] = _
      }
    }
  }
  o.pendingSideEffects = {
    ...o.sideEffects || {}
  }, o.sideEffects = {};

  function s(d, h, f) {
    const _ = `${d}:${h}`;
    o.sideEffects[_] = f, delete o.pendingSideEffects[_]
  }

  function a({
    id: d,
    $el: h,
    tag: f
  }) {
    const _ = f.tag.endsWith("Attrs");
    o.elMap[d] = h, _ || (["textContent", "innerHTML"].forEach(p => {
      f[p] && f[p] !== h[p] && (h[p] = f[p])
    }), s(d, "el", () => {
      var p;
      (p = o.elMap[d]) == null || p.remove(), delete o.elMap[d]
    })), Object.entries(f.props).forEach(([p, m]) => {
      const g = `attr:${p}`;
      if (p === "class")
        for (const y of (m || "").split(" ").filter(Boolean)) _ && s(d, `${g}:${y}`, () => h.classList.remove(y)), !h.classList.contains(y) && h.classList.add(y);
      else if (p === "style")
        for (const y of (m || "").split(";").filter(Boolean)) {
          const [b, v] = y.split(":").map(D => D.trim());
          s(d, `${g}:${y}:${b}`, () => {
            h.style.removeProperty(b)
          }), h.style.setProperty(b, v)
        } else h.getAttribute(p) !== m && h.setAttribute(p, m === !0 ? "" : String(m)), _ && s(d, g, () => h.removeAttribute(p))
    })
  }
  const l = [],
    c = {
      bodyClose: void 0,
      bodyOpen: void 0,
      head: void 0
    };
  for (const d of i) {
    const {
      tag: h,
      shouldRender: f,
      id: _
    } = d;
    if (f) {
      if (h.tag === "title") {
        t.title = h.textContent;
        continue
      }
      d.$el = d.$el || o.elMap[_], d.$el ? a(d) : Al.includes(h.tag) && l.push(d)
    }
  }
  for (const d of l) {
    const h = d.tag.tagPosition || "head";
    d.$el = t.createElement(d.tag.tag), a(d), c[h] = c[h] || t.createDocumentFragment(), c[h].appendChild(d.$el)
  }
  for (const d of i) await r.hooks.callHook("dom:renderTag", d, t, s);
  c.head && t.head.appendChild(c.head), c.bodyOpen && t.body.insertBefore(c.bodyOpen, t.body.firstChild), c.bodyClose && t.body.appendChild(c.bodyClose), Object.values(o.pendingSideEffects).forEach(d => d()), r._dom = o, r.dirty = !1, await r.hooks.callHook("dom:rendered", {
    renders: i
  })
}
async function Sv(r, e = {}) {
  const t = e.delayFn || (n => setTimeout(n, 10));
  return r._domUpdatePromise = r._domUpdatePromise || new Promise(n => t(async () => {
    await _g(r, e), delete r._domUpdatePromise, n()
  }))
}

function Tv(r) {
  return e => {
    var n, i;
    const t = ((i = (n = e.resolvedOptions.document) == null ? void 0 : n.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
    return t && e.push(JSON.parse(t)), {
      mode: "client",
      hooks: {
        "entries:updated": function(o) {
          Sv(o, r)
        }
      }
    }
  }
}
const Pv = ["templateParams", "htmlAttrs", "bodyAttrs"],
  Lv = {
    hooks: {
      "tag:normalise": function({
        tag: r
      }) {
        ["hid", "vmid", "key"].forEach(n => {
          r.props[n] && (r.key = r.props[n], delete r.props[n])
        });
        const t = og(r) || (r.key ? `${r.tag}:${r.key}` : !1);
        t && (r._d = t)
      },
      "tags:resolve": function(r) {
        const e = {};
        r.tags.forEach(n => {
          const i = (n.key ? `${n.tag}:${n.key}` : n._d) || n._p,
            o = e[i];
          if (o) {
            let a = n == null ? void 0 : n.tagDuplicateStrategy;
            if (!a && Pv.includes(n.tag) && (a = "merge"), a === "merge") {
              const l = o.props;
              ["class", "style"].forEach(c => {
                l[c] && (n.props[c] ? (c === "style" && !l[c].endsWith(";") && (l[c] += ";"), n.props[c] = `${l[c]} ${n.props[c]}`) : n.props[c] = l[c])
              }), e[i].props = {
                ...l,
                ...n.props
              };
              return
            } else if (n._e === o._e) {
              o._duped = o._duped || [], n._d = `${o._d}:${o._duped.length+1}`, o._duped.push(n);
              return
            } else if (Zl(n) > Zl(o)) return
          }
          const s = Object.keys(n.props).length + (n.innerHTML ? 1 : 0) + (n.textContent ? 1 : 0);
          if (Al.includes(n.tag) && s === 0) {
            delete e[i];
            return
          }
          e[i] = n
        });
        const t = [];
        Object.values(e).forEach(n => {
          const i = n._duped;
          delete n._duped, t.push(n), i && t.push(...i)
        }), r.tags = t, r.tags = r.tags.filter(n => !(n.tag === "meta" && (n.props.name || n.props.property) && !n.props.content))
      }
    }
  },
  Av = {
    mode: "server",
    hooks: {
      "tags:resolve": function(r) {
        const e = {};
        r.tags.filter(t => ["titleTemplate", "templateParams", "title"].includes(t.tag) && t._m === "server").forEach(t => {
          e[t.tag] = t.tag.startsWith("title") ? t.textContent : t.props
        }), Object.keys(e).length && r.tags.push({
          tag: "script",
          innerHTML: JSON.stringify(e),
          props: {
            id: "unhead:payload",
            type: "application/json"
          }
        })
      }
    }
  },
  Rv = ["script", "link", "bodyAttrs"];

function Ov(r) {
  const e = {},
    t = {};
  return Object.entries(r.props).forEach(([n, i]) => {
    n.startsWith("on") && typeof i == "function" ? (pg.includes(n) && (e[n] = `this.dataset.${n} = true`), t[n] = i) : e[n] = i
  }), {
    props: e,
    eventHandlers: t
  }
}
const Fv = r => ({
    hooks: {
      "tags:resolve": function(e) {
        for (const t of e.tags)
          if (Rv.includes(t.tag)) {
            const {
              props: n,
              eventHandlers: i
            } = Ov(t);
            t.props = n, Object.keys(i).length && ((t.props.src || t.props.href) && (t.key = t.key || Th(t.props.src || t.props.href)), t._eventHandlers = i)
          }
      },
      "dom:renderTag": function(e, t, n) {
        if (!e.tag._eventHandlers) return;
        const i = e.tag.tag === "bodyAttrs" ? t.defaultView : e.$el;
        Object.entries(e.tag._eventHandlers).forEach(([o, s]) => {
          const a = `${e.tag._d||e.tag._p}:${o}`,
            l = o.slice(2).toLowerCase(),
            c = `data-h-${l}`;
          if (n(e.id, a, () => {}), e.$el.hasAttribute(c)) return;
          e.$el.setAttribute(c, "");
          let u;
          const d = h => {
            s(h), u == null || u.disconnect()
          };
          o in e.$el.dataset ? d(new Event(o.replace("on", ""))) : pg.includes(o) && typeof MutationObserver < "u" ? (u = new MutationObserver(h => {
            h.some(_ => _.attributeName === `data-${o}`) && (d(new Event(o.replace("on", ""))), u == null || u.disconnect())
          }), u.observe(e.$el, {
            attributes: !0
          })) : i.addEventListener(l, d), n(e.id, a, () => {
            u == null || u.disconnect(), i.removeEventListener(l, d), e.$el.removeAttribute(c)
          })
        })
      }
    }
  }),
  Mv = ["link", "style", "script", "noscript"],
  Nv = {
    hooks: {
      "tag:normalise": ({
        tag: r
      }) => {
        r.key && Mv.includes(r.tag) && (r.props["data-hid"] = r._h = Th(r.key))
      }
    }
  },
  Iv = {
    hooks: {
      "tags:resolve": r => {
        const e = t => {
          var n;
          return (n = r.tags.find(i => i._d === t)) == null ? void 0 : n._p
        };
        for (const {
            prefix: t,
            offset: n
          }
          of kv)
          for (const i of r.tags.filter(o => typeof o.tagPriority == "string" && o.tagPriority.startsWith(t))) {
            const o = e(i.tagPriority.replace(t, ""));
            typeof o < "u" && (i._p = o + n)
          }
        r.tags.sort((t, n) => t._p - n._p).sort((t, n) => Zl(t) - Zl(n))
      }
    }
  },
  $v = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
  },
  Bv = r => ({
    hooks: {
      "tags:resolve": e => {
        var a;
        const {
          tags: t
        } = e, n = (a = t.find(l => l.tag === "title")) == null ? void 0 : a.textContent, i = t.findIndex(l => l.tag === "templateParams"), o = i !== -1 ? t[i].props : {}, s = o.separator || "|";
        delete o.separator, o.pageTitle = Rl(o.pageTitle || n || "", o, s);
        for (const l of t.filter(c => c.processTemplateParams !== !1)) {
          const c = $v[l.tag];
          c && typeof l.props[c] == "string" ? l.props[c] = Rl(l.props[c], o, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(u => {
            typeof l[u] == "string" && (l[u] = Rl(l[u], o, s))
          })
        }
        r._templateParams = o, r._separator = s, e.tags = t.filter(l => l.tag !== "templateParams")
      }
    }
  }),
  Vv = {
    hooks: {
      "tags:resolve": r => {
        const {
          tags: e
        } = r;
        let t = e.findIndex(i => i.tag === "titleTemplate");
        const n = e.findIndex(i => i.tag === "title");
        if (n !== -1 && t !== -1) {
          const i = Gd(e[t].textContent, e[n].textContent);
          i !== null ? e[n].textContent = i || e[n].textContent : delete e[n]
        } else if (t !== -1) {
          const i = Gd(e[t].textContent);
          i !== null && (e[t].textContent = i, e[t].tag = "title", t = -1)
        }
        t !== -1 && delete e[t], r.tags = e.filter(Boolean)
      }
    }
  },
  Hv = {
    hooks: {
      "tags:afterResolve": function(r) {
        for (const e of r.tags) typeof e.innerHTML == "string" && (e.innerHTML && ["application/ld+json", "application/json"].includes(e.props.type) ? e.innerHTML = e.innerHTML.replace(/</g, "\\u003C") : e.innerHTML = e.innerHTML.replace(new RegExp(`</${e.tag}`, "g"), `<\\/${e.tag}`))
      }
    }
  };
let gg;

function Uv(r = {}) {
  const e = jv(r);
  return e.use(Tv()), gg = e
}

function Jd(r, e) {
  return !r || r === "server" && e || r === "client" && !e
}

function jv(r = {}) {
  const e = Y0();
  e.addHooks(r.hooks || {}), r.document = r.document || (bv ? document : void 0);
  const t = !r.document,
    n = () => {
      a.dirty = !0, e.callHook("entries:updated", a)
    };
  let i = 0,
    o = [];
  const s = [],
    a = {
      plugins: s,
      dirty: !1,
      resolvedOptions: r,
      hooks: e,
      headEntries() {
        return o
      },
      use(l) {
        const c = typeof l == "function" ? l(a) : l;
        (!c.key || !s.some(u => u.key === c.key)) && (s.push(c), Jd(c.mode, t) && e.addHooks(c.hooks || {}))
      },
      push(l, c) {
        c == null || delete c.head;
        const u = {
          _i: i++,
          input: l,
          ...c
        };
        return Jd(u.mode, t) && (o.push(u), n()), {
          dispose() {
            o = o.filter(d => d._i !== u._i), e.callHook("entries:updated", a), n()
          },
          patch(d) {
            o = o.map(h => (h._i === u._i && (h.input = u.input = d), h)), n()
          }
        }
      },
      async resolveTags() {
        const l = {
          tags: [],
          entries: [...o]
        };
        await e.callHook("entries:resolve", l);
        for (const c of l.entries) {
          const u = c.resolvedInput || c.input;
          if (c.resolvedInput = await (c.transform ? c.transform(u) : u), c.resolvedInput)
            for (const d of await Ev(c)) {
              const h = {
                tag: d,
                entry: c,
                resolvedOptions: a.resolvedOptions
              };
              await e.callHook("tag:normalise", h), l.tags.push(h.tag)
            }
        }
        return await e.callHook("tags:beforeResolve", l), await e.callHook("tags:resolve", l), await e.callHook("tags:afterResolve", l), l.tags
      },
      ssr: t
    };
  return [Lv, Av, Fv, Nv, Iv, Bv, Vv, Hv, ...(r == null ? void 0 : r.plugins) || []].forEach(l => a.use(l)), a.hooks.callHook("init", a), a
}

function Wv() {
  return gg
}
const Xv = i2.startsWith("3");

function Yv(r) {
  return typeof r == "function" ? r() : se(r)
}

function ec(r, e = "") {
  if (r instanceof Promise) return r;
  const t = Yv(r);
  return !r || !t ? t : Array.isArray(t) ? t.map(n => ec(n, e)) : typeof t == "object" ? Object.fromEntries(Object.entries(t).map(([n, i]) => n === "titleTemplate" || n.startsWith("on") ? [n, se(i)] : [n, ec(i, n)])) : t
}
const zv = {
    hooks: {
      "entries:resolve": function(r) {
        for (const e of r.entries) e.resolvedInput = ec(e.input)
      }
    }
  },
  mg = "usehead";

function Gv(r) {
  return {
    install(t) {
      Xv && (t.config.globalProperties.$unhead = r, t.config.globalProperties.$head = r, t.provide(mg, r))
    }
  }.install
}

function qv(r = {}) {
  r.domDelayFn = r.domDelayFn || (t => vo(() => setTimeout(() => t(), 0)));
  const e = Uv(r);
  return e.use(zv), e.install = Gv(e), e
}
const Zu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
  ef = "__unhead_injection_handler__";

function Kv(r) {
  Zu[ef] = r
}

function Qv() {
  if (ef in Zu) return Zu[ef]();
  const r = fr(mg);
  return r || Wv()
}

function yg(r, e = {}) {
  const t = e.head || Qv();
  if (t) return t.ssr ? t.push(r, e) : Jv(t, r, e)
}

function Jv(r, e, t = {}) {
  const n = we(!1),
    i = we({});
  R0(() => {
    i.value = n.value ? {} : ec(e)
  });
  const o = r.push(i.value, t);
  return Ir(i, a => {
    o.patch(a)
  }), Ss() && (bh(() => {
    o.dispose()
  }), o2(() => {
    n.value = !0
  }), O0(() => {
    n.value = !1
  })), o
}

function bn(r) {
  if (typeof r != "object") return r;
  var e, t, n = Object.prototype.toString.call(r);
  if (n === "[object Object]") {
    if (r.constructor !== Object && typeof r.constructor == "function") {
      t = new r.constructor;
      for (e in r) r.hasOwnProperty(e) && t[e] !== r[e] && (t[e] = bn(r[e]))
    } else {
      t = {};
      for (e in r) e === "__proto__" ? Object.defineProperty(t, e, {
        value: bn(r[e]),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : t[e] = bn(r[e])
    }
    return t
  }
  if (n === "[object Array]") {
    for (e = r.length, t = Array(e); e--;) t[e] = bn(r[e]);
    return t
  }
  return n === "[object Set]" ? (t = new Set, r.forEach(function(i) {
    t.add(bn(i))
  }), t) : n === "[object Map]" ? (t = new Map, r.forEach(function(i, o) {
    t.set(bn(o), bn(i))
  }), t) : n === "[object Date]" ? new Date(+r) : n === "[object RegExp]" ? (t = new RegExp(r.source, r.flags), t.lastIndex = r.lastIndex, t) : n === "[object DataView]" ? new r.constructor(bn(r.buffer)) : n === "[object ArrayBuffer]" ? r.slice(0) : n.slice(-6) === "Array]" ? new r.constructor(r) : r
}
const Zv = {
    nuxt: {
      buildId: "dcc3cf68-4531-4e68-9793-94cbe0411dff"
    }
  },
  eD = Gb(Zv);

function tD() {
  const r = Ve();
  return r._appConfig || (r._appConfig = Jn(eD)), r._appConfig
}
const rD = !1,
  tf = !1,
  nD = !1,
  iD = {
    componentName: "NuxtLink"
  },
  oD = {
    deep: !0
  },
  sD = {},
  aD = "#__nuxt";
let Ol, bg;

function lD() {
  var e;
  const r = (e = tD().nuxt) == null ? void 0 : e.buildId;
  return Ol = $fetch(kh(`builds/meta/${r}.json`)), Ol.then(t => {
    bg = zb(t.matcher)
  }), Ol
}

function Pc() {
  return Ol || lD()
}
async function vg(r) {
  return await Pc(), Z0({}, ...bg.matchAll(r).reverse())
}

function Zd(r, e = {}) {
  const t = cD(r, e),
    n = Ve(),
    i = n._payloadCache = n._payloadCache || {};
  return t in i || (i[t] = uD(r).then(o => o ? Dg(t).then(s => s || (delete i[t], null)) : (i[t] = null, null))), i[t]
}
const ep = "json";

function cD(r, e = {}) {
  const t = new URL(r, "http://localhost");
  if (t.host !== "localhost" || ri(t.pathname, {
      acceptRelative: !0
    })) throw new Error("Payload URL must not include hostname: " + r);
  const n = e.hash || (e.fresh ? Date.now() : "");
  return Do(Xa().app.baseURL, t.pathname, n ? `_payload.${n}.${ep}` : `_payload.${ep}`)
}
async function Dg(r) {
  const e = fetch(r).then(t => t.text().then(wg));
  try {
    return await e
  } catch (t) {
    console.warn("[nuxt] Cannot load payload ", r, t)
  }
  return null
}
async function uD(r = ni().path) {
  if (r = Sc(r), (await Pc()).prerendered.includes(r)) return !0;
  const t = await vg(r);
  return !!t.prerender && !t.redirect
}
let sl = null;
async function fD() {
  if (sl) return sl;
  const r = document.getElementById("__NUXT_DATA__");
  if (!r) return {};
  const e = await wg(r.textContent || ""),
    t = r.dataset.src ? await Dg(r.dataset.src) : void 0;
  return sl = {
    ...e,
    ...t,
    ...window.__NUXT__
  }, sl
}
async function wg(r) {
  return await dv(r, Ve()._payloadRevivers)
}

function hD(r, e) {
  Ve()._payloadRevivers[r] = e
}
const tp = {
    NuxtError: r => za(r),
    EmptyShallowRef: r => hs(r === "_" ? void 0 : r === "0n" ? BigInt(0) : Da(r)),
    EmptyRef: r => we(r === "_" ? void 0 : r === "0n" ? BigInt(0) : Da(r)),
    ShallowRef: r => hs(r),
    ShallowReactive: r => Cc(r),
    Ref: r => we(r),
    Reactive: r => Jn(r)
  },
  dD = Jt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(r) {
      let e, t;
      for (const n in tp) hD(n, tp[n]);
      Object.assign(r.payload, ([e, t] = Hn(() => r.runWithContext(fD)), e = await e, t(), e)), window.__NUXT__ = r.payload
    }
  }),
  pD = [],
  _D = Jt({
    name: "nuxt:head",
    enforce: "pre",
    setup(r) {
      const e = qv({
        plugins: pD
      });
      Kv(() => Ve().vueApp._context.provides.usehead), r.vueApp.use(e);
      {
        let t = !0;
        const n = async () => {
          t = !1, await _g(e)
        };
        e.hooks.hook("dom:beforeRender", i => {
          i.shouldRender = !t
        }), r.hooks.hook("page:start", () => {
          t = !0
        }), r.hooks.hook("page:finish", () => {
          r.isHydrating || n()
        }), r.hooks.hook("app:error", n), r.hooks.hook("app:suspense:resolve", n)
      }
    }
  });
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Ho = typeof document < "u";

function gD(r) {
  return r.__esModule || r[Symbol.toStringTag] === "Module"
}
const Xe = Object.assign;

function ru(r, e) {
  const t = {};
  for (const n in e) {
    const i = e[n];
    t[n] = fn(i) ? i.map(r) : r(i)
  }
  return t
}
const Ks = () => {},
  fn = Array.isArray,
  xg = /#/g,
  mD = /&/g,
  yD = /\//g,
  bD = /=/g,
  vD = /\?/g,
  Cg = /\+/g,
  DD = /%5B/g,
  wD = /%5D/g,
  Eg = /%5E/g,
  xD = /%60/g,
  kg = /%7B/g,
  CD = /%7C/g,
  Sg = /%7D/g,
  ED = /%20/g;

function Lh(r) {
  return encodeURI("" + r).replace(CD, "|").replace(DD, "[").replace(wD, "]")
}

function kD(r) {
  return Lh(r).replace(kg, "{").replace(Sg, "}").replace(Eg, "^")
}

function rf(r) {
  return Lh(r).replace(Cg, "%2B").replace(ED, "+").replace(xg, "%23").replace(mD, "%26").replace(xD, "`").replace(kg, "{").replace(Sg, "}").replace(Eg, "^")
}

function SD(r) {
  return rf(r).replace(bD, "%3D")
}

function TD(r) {
  return Lh(r).replace(xg, "%23").replace(vD, "%3F")
}

function PD(r) {
  return r == null ? "" : TD(r).replace(yD, "%2F")
}

function wa(r) {
  try {
    return decodeURIComponent("" + r)
  } catch {}
  return "" + r
}
const LD = /\/$/,
  AD = r => r.replace(LD, "");

function nu(r, e, t = "/") {
  let n, i = {},
    o = "",
    s = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (n = e.slice(0, l), o = e.slice(l + 1, a > -1 ? a : e.length), i = r(o)), a > -1 && (n = n || e.slice(0, a), s = e.slice(a, e.length)), n = MD(n ?? e, t), {
    fullPath: n + (o && "?") + o + s,
    path: n,
    query: i,
    hash: wa(s)
  }
}

function RD(r, e) {
  const t = e.query ? r(e.query) : "";
  return e.path + (t && "?") + t + (e.hash || "")
}

function rp(r, e) {
  return !e || !r.toLowerCase().startsWith(e.toLowerCase()) ? r : r.slice(e.length) || "/"
}

function OD(r, e, t) {
  const n = e.matched.length - 1,
    i = t.matched.length - 1;
  return n > -1 && n === i && ds(e.matched[n], t.matched[i]) && Tg(e.params, t.params) && r(e.query) === r(t.query) && e.hash === t.hash
}

function ds(r, e) {
  return (r.aliasOf || r) === (e.aliasOf || e)
}

function Tg(r, e) {
  if (Object.keys(r).length !== Object.keys(e).length) return !1;
  for (const t in r)
    if (!FD(r[t], e[t])) return !1;
  return !0
}

function FD(r, e) {
  return fn(r) ? np(r, e) : fn(e) ? np(e, r) : r === e
}

function np(r, e) {
  return fn(e) ? r.length === e.length && r.every((t, n) => t === e[n]) : r.length === 1 && r[0] === e
}

function MD(r, e) {
  if (r.startsWith("/")) return r;
  if (!r) return e;
  const t = e.split("/"),
    n = r.split("/"),
    i = n[n.length - 1];
  (i === ".." || i === ".") && n.push("");
  let o = t.length - 1,
    s, a;
  for (s = 0; s < n.length; s++)
    if (a = n[s], a !== ".")
      if (a === "..") o > 1 && o--;
      else break;
  return t.slice(0, o).join("/") + "/" + n.slice(s).join("/")
}
var xa;
(function(r) {
  r.pop = "pop", r.push = "push"
})(xa || (xa = {}));
var Qs;
(function(r) {
  r.back = "back", r.forward = "forward", r.unknown = ""
})(Qs || (Qs = {}));

function ND(r) {
  if (!r)
    if (Ho) {
      const e = document.querySelector("base");
      r = e && e.getAttribute("href") || "/", r = r.replace(/^\w+:\/\/[^\/]+/, "")
    } else r = "/";
  return r[0] !== "/" && r[0] !== "#" && (r = "/" + r), AD(r)
}
const ID = /^[^#]+#/;

function $D(r, e) {
  return r.replace(ID, "#") + e
}

function BD(r, e) {
  const t = document.documentElement.getBoundingClientRect(),
    n = r.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: n.left - t.left - (e.left || 0),
    top: n.top - t.top - (e.top || 0)
  }
}
const Lc = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function VD(r) {
  let e;
  if ("el" in r) {
    const t = r.el,
      n = typeof t == "string" && t.startsWith("#"),
      i = typeof t == "string" ? n ? document.getElementById(t.slice(1)) : document.querySelector(t) : t;
    if (!i) return;
    e = BD(i, r)
  } else e = r;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY)
}

function ip(r, e) {
  return (history.state ? history.state.position - e : -1) + r
}
const nf = new Map;

function HD(r, e) {
  nf.set(r, e)
}

function UD(r) {
  const e = nf.get(r);
  return nf.delete(r), e
}
let jD = () => location.protocol + "//" + location.host;

function Pg(r, e) {
  const {
    pathname: t,
    search: n,
    hash: i
  } = e, o = r.indexOf("#");
  if (o > -1) {
    let a = i.includes(r.slice(o)) ? r.slice(o).length : 1,
      l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), rp(l, "")
  }
  return rp(t, r) + n + i
}

function WD(r, e, t, n) {
  let i = [],
    o = [],
    s = null;
  const a = ({
    state: h
  }) => {
    const f = Pg(r, location),
      _ = t.value,
      p = e.value;
    let m = 0;
    if (h) {
      if (t.value = f, e.value = h, s && s === _) {
        s = null;
        return
      }
      m = p ? h.position - p.position : 0
    } else n(f);
    i.forEach(g => {
      g(t.value, _, {
        delta: m,
        type: xa.pop,
        direction: m ? m > 0 ? Qs.forward : Qs.back : Qs.unknown
      })
    })
  };

  function l() {
    s = t.value
  }

  function c(h) {
    i.push(h);
    const f = () => {
      const _ = i.indexOf(h);
      _ > -1 && i.splice(_, 1)
    };
    return o.push(f), f
  }

  function u() {
    const {
      history: h
    } = window;
    h.state && h.replaceState(Xe({}, h.state, {
      scroll: Lc()
    }), "")
  }

  function d() {
    for (const h of o) h();
    o = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u)
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: c,
    destroy: d
  }
}

function op(r, e, t, n = !1, i = !1) {
  return {
    back: r,
    current: e,
    forward: t,
    replaced: n,
    position: window.history.length,
    scroll: i ? Lc() : null
  }
}

function XD(r) {
  const {
    history: e,
    location: t
  } = window, n = {
    value: Pg(r, t)
  }, i = {
    value: e.state
  };
  i.value || o(n.value, {
    back: null,
    current: n.value,
    forward: null,
    position: e.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function o(l, c, u) {
    const d = r.indexOf("#"),
      h = d > -1 ? (t.host && document.querySelector("base") ? r : r.slice(d)) + l : jD() + r + l;
    try {
      e[u ? "replaceState" : "pushState"](c, "", h), i.value = c
    } catch (f) {
      console.error(f), t[u ? "replace" : "assign"](h)
    }
  }

  function s(l, c) {
    const u = Xe({}, e.state, op(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position
    });
    o(l, u, !0), n.value = l
  }

  function a(l, c) {
    const u = Xe({}, i.value, e.state, {
      forward: l,
      scroll: Lc()
    });
    o(u.current, u, !0);
    const d = Xe({}, op(n.value, l, null), {
      position: u.position + 1
    }, c);
    o(l, d, !1), n.value = l
  }
  return {
    location: n,
    state: i,
    push: a,
    replace: s
  }
}

function Lg(r) {
  r = ND(r);
  const e = XD(r),
    t = WD(r, e.state, e.location, e.replace);

  function n(o, s = !0) {
    s || t.pauseListeners(), history.go(o)
  }
  const i = Xe({
    location: "",
    base: r,
    go: n,
    createHref: $D.bind(null, r)
  }, e, t);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i
}

function YD(r) {
  return r = location.host ? r || location.pathname + location.search : "", r.includes("#") || (r += "#"), Lg(r)
}

function zD(r) {
  return typeof r == "string" || r && typeof r == "object"
}

function Ag(r) {
  return typeof r == "string" || typeof r == "symbol"
}
const on = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  Rg = Symbol("");
var sp;
(function(r) {
  r[r.aborted = 4] = "aborted", r[r.cancelled = 8] = "cancelled", r[r.duplicated = 16] = "duplicated"
})(sp || (sp = {}));

function ps(r, e) {
  return Xe(new Error, {
    type: r,
    [Rg]: !0
  }, e)
}

function Fn(r, e) {
  return r instanceof Error && Rg in r && (e == null || !!(r.type & e))
}
const ap = "[^/]+?",
  GD = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  qD = /[.+*?^${}()[\]/\\]/g;

function KD(r, e) {
  const t = Xe({}, GD, e),
    n = [];
  let i = t.start ? "^" : "";
  const o = [];
  for (const c of r) {
    const u = c.length ? [] : [90];
    t.strict && !c.length && (i += "/");
    for (let d = 0; d < c.length; d++) {
      const h = c[d];
      let f = 40 + (t.sensitive ? .25 : 0);
      if (h.type === 0) d || (i += "/"), i += h.value.replace(qD, "\\$&"), f += 40;
      else if (h.type === 1) {
        const {
          value: _,
          repeatable: p,
          optional: m,
          regexp: g
        } = h;
        o.push({
          name: _,
          repeatable: p,
          optional: m
        });
        const y = g || ap;
        if (y !== ap) {
          f += 10;
          try {
            new RegExp(`(${y})`)
          } catch (v) {
            throw new Error(`Invalid custom RegExp for param "${_}" (${y}): ` + v.message)
          }
        }
        let b = p ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        d || (b = m && c.length < 2 ? `(?:/${b})` : "/" + b), m && (b += "?"), i += b, f += 20, m && (f += -8), p && (f += -20), y === ".*" && (f += -50)
      }
      u.push(f)
    }
    n.push(u)
  }
  if (t.strict && t.end) {
    const c = n.length - 1;
    n[c][n[c].length - 1] += .7000000000000001
  }
  t.strict || (i += "/?"), t.end ? i += "$" : t.strict && (i += "(?:/|$)");
  const s = new RegExp(i, t.sensitive ? "" : "i");

  function a(c) {
    const u = c.match(s),
      d = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const f = u[h] || "",
        _ = o[h - 1];
      d[_.name] = f && _.repeatable ? f.split("/") : f
    }
    return d
  }

  function l(c) {
    let u = "",
      d = !1;
    for (const h of r) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const f of h)
        if (f.type === 0) u += f.value;
        else if (f.type === 1) {
        const {
          value: _,
          repeatable: p,
          optional: m
        } = f, g = _ in c ? c[_] : "";
        if (fn(g) && !p) throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
        const y = fn(g) ? g.join("/") : g;
        if (!y)
          if (m) h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
          else throw new Error(`Missing required param "${_}"`);
        u += y
      }
    }
    return u || "/"
  }
  return {
    re: s,
    score: n,
    keys: o,
    parse: a,
    stringify: l
  }
}

function QD(r, e) {
  let t = 0;
  for (; t < r.length && t < e.length;) {
    const n = e[t] - r[t];
    if (n) return n;
    t++
  }
  return r.length < e.length ? r.length === 1 && r[0] === 80 ? -1 : 1 : r.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0
}

function JD(r, e) {
  let t = 0;
  const n = r.score,
    i = e.score;
  for (; t < n.length && t < i.length;) {
    const o = QD(n[t], i[t]);
    if (o) return o;
    t++
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (lp(n)) return 1;
    if (lp(i)) return -1
  }
  return i.length - n.length
}

function lp(r) {
  const e = r[r.length - 1];
  return r.length > 0 && e[e.length - 1] < 0
}
const ZD = {
    type: 0,
    value: ""
  },
  ew = /[a-zA-Z0-9_]/;

function tw(r) {
  if (!r) return [
    []
  ];
  if (r === "/") return [
    [ZD]
  ];
  if (!r.startsWith("/")) throw new Error(`Invalid path "${r}"`);

  function e(f) {
    throw new Error(`ERR (${t})/"${c}": ${f}`)
  }
  let t = 0,
    n = t;
  const i = [];
  let o;

  function s() {
    o && i.push(o), o = []
  }
  let a = 0,
    l, c = "",
    u = "";

  function d() {
    c && (t === 0 ? o.push({
      type: 0,
      value: c
    }) : t === 1 || t === 2 || t === 3 ? (o.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), o.push({
      type: 1,
      value: c,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : e("Invalid state to consume buffer"), c = "")
  }

  function h() {
    c += l
  }
  for (; a < r.length;) {
    if (l = r[a++], l === "\\" && t !== 2) {
      n = t, t = 4;
      continue
    }
    switch (t) {
      case 0:
        l === "/" ? (c && d(), s()) : l === ":" ? (d(), t = 1) : h();
        break;
      case 4:
        h(), t = n;
        break;
      case 1:
        l === "(" ? t = 2 : ew.test(l) ? h() : (d(), t = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : t = 3 : u += l;
        break;
      case 3:
        d(), t = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
        break;
      default:
        e("Unknown state");
        break
    }
  }
  return t === 2 && e(`Unfinished custom RegExp for param "${c}"`), d(), s(), i
}

function rw(r, e, t) {
  const n = KD(tw(r.path), t),
    i = Xe(n, {
      record: r,
      parent: e,
      children: [],
      alias: []
    });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
}

function nw(r, e) {
  const t = [],
    n = new Map;
  e = fp({
    strict: !1,
    end: !0,
    sensitive: !1
  }, e);

  function i(u) {
    return n.get(u)
  }

  function o(u, d, h) {
    const f = !h,
      _ = iw(u);
    _.aliasOf = h && h.record;
    const p = fp(e, u),
      m = [_];
    if ("alias" in u) {
      const b = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const v of b) m.push(Xe({}, _, {
        components: h ? h.record.components : _.components,
        path: v,
        aliasOf: h ? h.record : _
      }))
    }
    let g, y;
    for (const b of m) {
      const {
        path: v
      } = b;
      if (d && v[0] !== "/") {
        const D = d.record.path,
          k = D[D.length - 1] === "/" ? "" : "/";
        b.path = d.record.path + (v && k + v)
      }
      if (g = rw(b, d, p), h ? h.alias.push(g) : (y = y || g, y !== g && y.alias.push(g), f && u.name && !up(g) && s(u.name)), _.children) {
        const D = _.children;
        for (let k = 0; k < D.length; k++) o(D[k], g, h && h.children[k])
      }
      h = h || g, (g.record.components && Object.keys(g.record.components).length || g.record.name || g.record.redirect) && l(g)
    }
    return y ? () => {
      s(y)
    } : Ks
  }

  function s(u) {
    if (Ag(u)) {
      const d = n.get(u);
      d && (n.delete(u), t.splice(t.indexOf(d), 1), d.children.forEach(s), d.alias.forEach(s))
    } else {
      const d = t.indexOf(u);
      d > -1 && (t.splice(d, 1), u.record.name && n.delete(u.record.name), u.children.forEach(s), u.alias.forEach(s))
    }
  }

  function a() {
    return t
  }

  function l(u) {
    let d = 0;
    for (; d < t.length && JD(u, t[d]) >= 0 && (u.record.path !== t[d].record.path || !Og(u, t[d]));) d++;
    t.splice(d, 0, u), u.record.name && !up(u) && n.set(u.record.name, u)
  }

  function c(u, d) {
    let h, f = {},
      _, p;
    if ("name" in u && u.name) {
      if (h = n.get(u.name), !h) throw ps(1, {
        location: u
      });
      p = h.record.name, f = Xe(cp(d.params, h.keys.filter(y => !y.optional).concat(h.parent ? h.parent.keys.filter(y => y.optional) : []).map(y => y.name)), u.params && cp(u.params, h.keys.map(y => y.name))), _ = h.stringify(f)
    } else if (u.path != null) _ = u.path, h = t.find(y => y.re.test(_)), h && (f = h.parse(_), p = h.record.name);
    else {
      if (h = d.name ? n.get(d.name) : t.find(y => y.re.test(d.path)), !h) throw ps(1, {
        location: u,
        currentLocation: d
      });
      p = h.record.name, f = Xe({}, d.params, u.params), _ = h.stringify(f)
    }
    const m = [];
    let g = h;
    for (; g;) m.unshift(g.record), g = g.parent;
    return {
      name: p,
      path: _,
      params: f,
      matched: m,
      meta: sw(m)
    }
  }
  return r.forEach(u => o(u)), {
    addRoute: o,
    resolve: c,
    removeRoute: s,
    getRoutes: a,
    getRecordMatcher: i
  }
}

function cp(r, e) {
  const t = {};
  for (const n of e) n in r && (t[n] = r[n]);
  return t
}

function iw(r) {
  return {
    path: r.path,
    redirect: r.redirect,
    name: r.name,
    meta: r.meta || {},
    aliasOf: void 0,
    beforeEnter: r.beforeEnter,
    props: ow(r),
    children: r.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in r ? r.components || null : r.component && {
      default: r.component
    }
  }
}

function ow(r) {
  const e = {},
    t = r.props || !1;
  if ("component" in r) e.default = t;
  else
    for (const n in r.components) e[n] = typeof t == "object" ? t[n] : t;
  return e
}

function up(r) {
  for (; r;) {
    if (r.record.aliasOf) return !0;
    r = r.parent
  }
  return !1
}

function sw(r) {
  return r.reduce((e, t) => Xe(e, t.meta), {})
}

function fp(r, e) {
  const t = {};
  for (const n in r) t[n] = n in e ? e[n] : r[n];
  return t
}

function Og(r, e) {
  return e.children.some(t => t === r || Og(r, t))
}

function aw(r) {
  const e = {};
  if (r === "" || r === "?") return e;
  const n = (r[0] === "?" ? r.slice(1) : r).split("&");
  for (let i = 0; i < n.length; ++i) {
    const o = n[i].replace(Cg, " "),
      s = o.indexOf("="),
      a = wa(s < 0 ? o : o.slice(0, s)),
      l = s < 0 ? null : wa(o.slice(s + 1));
    if (a in e) {
      let c = e[a];
      fn(c) || (c = e[a] = [c]), c.push(l)
    } else e[a] = l
  }
  return e
}

function hp(r) {
  let e = "";
  for (let t in r) {
    const n = r[t];
    if (t = SD(t), n == null) {
      n !== void 0 && (e += (e.length ? "&" : "") + t);
      continue
    }(fn(n) ? n.map(o => o && rf(o)) : [n && rf(n)]).forEach(o => {
      o !== void 0 && (e += (e.length ? "&" : "") + t, o != null && (e += "=" + o))
    })
  }
  return e
}

function lw(r) {
  const e = {};
  for (const t in r) {
    const n = r[t];
    n !== void 0 && (e[t] = fn(n) ? n.map(i => i == null ? null : "" + i) : n == null ? n : "" + n)
  }
  return e
}
const cw = Symbol(""),
  dp = Symbol(""),
  Ac = Symbol(""),
  Ah = Symbol(""),
  of = Symbol("");

function Rs() {
  let r = [];

  function e(n) {
    return r.push(n), () => {
      const i = r.indexOf(n);
      i > -1 && r.splice(i, 1)
    }
  }

  function t() {
    r = []
  }
  return {
    add: e,
    list: () => r.slice(),
    reset: t
  }
}

function pi(r, e, t, n, i, o = s => s()) {
  const s = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const c = h => {
        h === !1 ? l(ps(4, {
          from: t,
          to: e
        })) : h instanceof Error ? l(h) : zD(h) ? l(ps(2, {
          from: e,
          to: h
        })) : (s && n.enterCallbacks[i] === s && typeof h == "function" && s.push(h), a())
      },
      u = o(() => r.call(n && n.instances[i], e, t, c));
    let d = Promise.resolve(u);
    r.length < 3 && (d = d.then(c)), d.catch(h => l(h))
  })
}

function iu(r, e, t, n, i = o => o()) {
  const o = [];
  for (const s of r)
    for (const a in s.components) {
      let l = s.components[a];
      if (!(e !== "beforeRouteEnter" && !s.instances[a]))
        if (uw(l)) {
          const u = (l.__vccOpts || l)[e];
          u && o.push(pi(u, t, n, s, a, i))
        } else {
          let c = l();
          o.push(() => c.then(u => {
            if (!u) return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
            const d = gD(u) ? u.default : u;
            s.components[a] = d;
            const f = (d.__vccOpts || d)[e];
            return f && pi(f, t, n, s, a, i)()
          }))
        }
    }
  return o
}

function uw(r) {
  return typeof r == "object" || "displayName" in r || "props" in r || "__vccOpts" in r
}

function pp(r) {
  const e = fr(Ac),
    t = fr(Ah),
    n = Se(() => e.resolve(se(r.to))),
    i = Se(() => {
      const {
        matched: l
      } = n.value, {
        length: c
      } = l, u = l[c - 1], d = t.matched;
      if (!u || !d.length) return -1;
      const h = d.findIndex(ds.bind(null, u));
      if (h > -1) return h;
      const f = _p(l[c - 2]);
      return c > 1 && _p(u) === f && d[d.length - 1].path !== f ? d.findIndex(ds.bind(null, l[c - 2])) : h
    }),
    o = Se(() => i.value > -1 && pw(t.params, n.value.params)),
    s = Se(() => i.value > -1 && i.value === t.matched.length - 1 && Tg(t.params, n.value.params));

  function a(l = {}) {
    return dw(l) ? e[se(r.replace) ? "replace" : "push"](se(r.to)).catch(Ks) : Promise.resolve()
  }
  return {
    route: n,
    href: Se(() => n.value.href),
    isActive: o,
    isExactActive: s,
    navigate: a
  }
}
const fw = et({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: pp,
    setup(r, {
      slots: e
    }) {
      const t = Jn(pp(r)),
        {
          options: n
        } = fr(Ac),
        i = Se(() => ({
          [gp(r.activeClass, n.linkActiveClass, "router-link-active")]: t.isActive,
          [gp(r.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: t.isExactActive
        }));
      return () => {
        const o = e.default && e.default(t);
        return r.custom ? o : qt("a", {
          "aria-current": t.isExactActive ? r.ariaCurrentValue : null,
          href: t.href,
          onClick: t.navigate,
          class: i.value
        }, o)
      }
    }
  }),
  hw = fw;

function dw(r) {
  if (!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey) && !r.defaultPrevented && !(r.button !== void 0 && r.button !== 0)) {
    if (r.currentTarget && r.currentTarget.getAttribute) {
      const e = r.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return
    }
    return r.preventDefault && r.preventDefault(), !0
  }
}

function pw(r, e) {
  for (const t in e) {
    const n = e[t],
      i = r[t];
    if (typeof n == "string") {
      if (n !== i) return !1
    } else if (!fn(i) || i.length !== n.length || n.some((o, s) => o !== i[s])) return !1
  }
  return !0
}

function _p(r) {
  return r ? r.aliasOf ? r.aliasOf.path : r.path : ""
}
const gp = (r, e, t) => r ?? e ?? t,
  _w = et({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(r, {
      attrs: e,
      slots: t
    }) {
      const n = fr(of),
        i = Se(() => r.route || n.value),
        o = fr(dp, 0),
        s = Se(() => {
          let c = se(o);
          const {
            matched: u
          } = i.value;
          let d;
          for (;
            (d = u[c]) && !d.components;) c++;
          return c
        }),
        a = Se(() => i.value.matched[s.value]);
      to(dp, Se(() => s.value + 1)), to(cw, a), to(of, i);
      const l = we();
      return Ir(() => [l.value, a.value, r.name], ([c, u, d], [h, f, _]) => {
        u && (u.instances[d] = c, f && f !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = f.leaveGuards), u.updateGuards.size || (u.updateGuards = f.updateGuards))), c && u && (!f || !ds(u, f) || !h) && (u.enterCallbacks[d] || []).forEach(p => p(c))
      }, {
        flush: "post"
      }), () => {
        const c = i.value,
          u = r.name,
          d = a.value,
          h = d && d.components[u];
        if (!h) return mp(t.default, {
          Component: h,
          route: c
        });
        const f = d.props[u],
          _ = f ? f === !0 ? c.params : typeof f == "function" ? f(c) : f : null,
          m = qt(h, Xe({}, _, e, {
            onVnodeUnmounted: g => {
              g.component.isUnmounted && (d.instances[u] = null)
            },
            ref: l
          }));
        return mp(t.default, {
          Component: m,
          route: c
        }) || m
      }
    }
  });

function mp(r, e) {
  if (!r) return null;
  const t = r(e);
  return t.length === 1 ? t[0] : t
}
const Fg = _w;

function gw(r) {
  const e = nw(r.routes, r),
    t = r.parseQuery || aw,
    n = r.stringifyQuery || hp,
    i = r.history,
    o = Rs(),
    s = Rs(),
    a = Rs(),
    l = hs(on);
  let c = on;
  Ho && r.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = ru.bind(null, M => "" + M),
    d = ru.bind(null, PD),
    h = ru.bind(null, wa);

  function f(M, X) {
    let K, Q;
    return Ag(M) ? (K = e.getRecordMatcher(M), Q = X) : Q = M, e.addRoute(Q, K)
  }

  function _(M) {
    const X = e.getRecordMatcher(M);
    X && e.removeRoute(X)
  }

  function p() {
    return e.getRoutes().map(M => M.record)
  }

  function m(M) {
    return !!e.getRecordMatcher(M)
  }

  function g(M, X) {
    if (X = Xe({}, X || l.value), typeof M == "string") {
      const E = nu(t, M, X.path),
        F = e.resolve({
          path: E.path
        }, X),
        Z = i.createHref(E.fullPath);
      return Xe(E, F, {
        params: h(F.params),
        hash: wa(E.hash),
        redirectedFrom: void 0,
        href: Z
      })
    }
    let K;
    if (M.path != null) K = Xe({}, M, {
      path: nu(t, M.path, X.path).path
    });
    else {
      const E = Xe({}, M.params);
      for (const F in E) E[F] == null && delete E[F];
      K = Xe({}, M, {
        params: d(E)
      }), X.params = d(X.params)
    }
    const Q = e.resolve(K, X),
      ue = M.hash || "";
    Q.params = u(h(Q.params));
    const De = RD(n, Xe({}, M, {
        hash: kD(ue),
        path: Q.path
      })),
      x = i.createHref(De);
    return Xe({
      fullPath: De,
      hash: ue,
      query: n === hp ? lw(M.query) : M.query || {}
    }, Q, {
      redirectedFrom: void 0,
      href: x
    })
  }

  function y(M) {
    return typeof M == "string" ? nu(t, M, l.value.path) : Xe({}, M)
  }

  function b(M, X) {
    if (c !== M) return ps(8, {
      from: X,
      to: M
    })
  }

  function v(M) {
    return w(M)
  }

  function D(M) {
    return v(Xe(y(M), {
      replace: !0
    }))
  }

  function k(M) {
    const X = M.matched[M.matched.length - 1];
    if (X && X.redirect) {
      const {
        redirect: K
      } = X;
      let Q = typeof K == "function" ? K(M) : K;
      return typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = y(Q) : {
        path: Q
      }, Q.params = {}), Xe({
        query: M.query,
        hash: M.hash,
        params: Q.path != null ? {} : M.params
      }, Q)
    }
  }

  function w(M, X) {
    const K = c = g(M),
      Q = l.value,
      ue = M.state,
      De = M.force,
      x = M.replace === !0,
      E = k(K);
    if (E) return w(Xe(y(E), {
      state: typeof E == "object" ? Xe({}, ue, E.state) : ue,
      force: De,
      replace: x
    }), X || K);
    const F = K;
    F.redirectedFrom = X;
    let Z;
    return !De && OD(n, Q, K) && (Z = ps(16, {
      to: F,
      from: Q
    }), ee(Q, Q, !0, !1)), (Z ? Promise.resolve(Z) : C(F, Q)).catch(T => Fn(T) ? Fn(T, 2) ? T : L(T) : oe(T, F, Q)).then(T => {
      if (T) {
        if (Fn(T, 2)) return w(Xe({
          replace: x
        }, y(T.to), {
          state: typeof T.to == "object" ? Xe({}, ue, T.to.state) : ue,
          force: De
        }), X || F)
      } else T = N(F, Q, !0, x, ue);
      return R(F, Q, T), T
    })
  }

  function S(M, X) {
    const K = b(M, X);
    return K ? Promise.reject(K) : Promise.resolve()
  }

  function P(M) {
    const X = te.values().next().value;
    return X && typeof X.runWithContext == "function" ? X.runWithContext(M) : M()
  }

  function C(M, X) {
    let K;
    const [Q, ue, De] = mw(M, X);
    K = iu(Q.reverse(), "beforeRouteLeave", M, X);
    for (const E of Q) E.leaveGuards.forEach(F => {
      K.push(pi(F, M, X))
    });
    const x = S.bind(null, M, X);
    return K.push(x), ce(K).then(() => {
      K = [];
      for (const E of o.list()) K.push(pi(E, M, X));
      return K.push(x), ce(K)
    }).then(() => {
      K = iu(ue, "beforeRouteUpdate", M, X);
      for (const E of ue) E.updateGuards.forEach(F => {
        K.push(pi(F, M, X))
      });
      return K.push(x), ce(K)
    }).then(() => {
      K = [];
      for (const E of De)
        if (E.beforeEnter)
          if (fn(E.beforeEnter))
            for (const F of E.beforeEnter) K.push(pi(F, M, X));
          else K.push(pi(E.beforeEnter, M, X));
      return K.push(x), ce(K)
    }).then(() => (M.matched.forEach(E => E.enterCallbacks = {}), K = iu(De, "beforeRouteEnter", M, X, P), K.push(x), ce(K))).then(() => {
      K = [];
      for (const E of s.list()) K.push(pi(E, M, X));
      return K.push(x), ce(K)
    }).catch(E => Fn(E, 8) ? E : Promise.reject(E))
  }

  function R(M, X, K) {
    a.list().forEach(Q => P(() => Q(M, X, K)))
  }

  function N(M, X, K, Q, ue) {
    const De = b(M, X);
    if (De) return De;
    const x = X === on,
      E = Ho ? history.state : {};
    K && (Q || x ? i.replace(M.fullPath, Xe({
      scroll: x && E && E.scroll
    }, ue)) : i.push(M.fullPath, ue)), l.value = M, ee(M, X, K, x), L()
  }
  let B;

  function z() {
    B || (B = i.listen((M, X, K) => {
      if (!ne.listening) return;
      const Q = g(M),
        ue = k(Q);
      if (ue) {
        w(Xe(ue, {
          replace: !0
        }), Q).catch(Ks);
        return
      }
      c = Q;
      const De = l.value;
      Ho && HD(ip(De.fullPath, K.delta), Lc()), C(Q, De).catch(x => Fn(x, 12) ? x : Fn(x, 2) ? (w(x.to, Q).then(E => {
        Fn(E, 20) && !K.delta && K.type === xa.pop && i.go(-1, !1)
      }).catch(Ks), Promise.reject()) : (K.delta && i.go(-K.delta, !1), oe(x, Q, De))).then(x => {
        x = x || N(Q, De, !1), x && (K.delta && !Fn(x, 8) ? i.go(-K.delta, !1) : K.type === xa.pop && Fn(x, 20) && i.go(-1, !1)), R(Q, De, x)
      }).catch(Ks)
    }))
  }
  let U = Rs(),
    V = Rs(),
    Y;

  function oe(M, X, K) {
    L(M);
    const Q = V.list();
    return Q.length ? Q.forEach(ue => ue(M, X, K)) : console.error(M), Promise.reject(M)
  }

  function $() {
    return Y && l.value !== on ? Promise.resolve() : new Promise((M, X) => {
      U.add([M, X])
    })
  }

  function L(M) {
    return Y || (Y = !M, z(), U.list().forEach(([X, K]) => M ? K(M) : X()), U.reset()), M
  }

  function ee(M, X, K, Q) {
    const {
      scrollBehavior: ue
    } = r;
    if (!Ho || !ue) return Promise.resolve();
    const De = !K && UD(ip(M.fullPath, 0)) || (Q || !K) && history.state && history.state.scroll || null;
    return vo().then(() => ue(M, X, De)).then(x => x && VD(x)).catch(x => oe(x, M, X))
  }
  const ie = M => i.go(M);
  let be;
  const te = new Set,
    ne = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: _,
      hasRoute: m,
      getRoutes: p,
      resolve: g,
      options: r,
      push: v,
      replace: D,
      go: ie,
      back: () => ie(-1),
      forward: () => ie(1),
      beforeEach: o.add,
      beforeResolve: s.add,
      afterEach: a.add,
      onError: V.add,
      isReady: $,
      install(M) {
        const X = this;
        M.component("RouterLink", hw), M.component("RouterView", Fg), M.config.globalProperties.$router = X, Object.defineProperty(M.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => se(l)
        }), Ho && !be && l.value === on && (be = !0, v(i.location).catch(ue => {}));
        const K = {};
        for (const ue in on) Object.defineProperty(K, ue, {
          get: () => l.value[ue],
          enumerable: !0
        });
        M.provide(Ac, X), M.provide(Ah, Cc(K)), M.provide(of, l);
        const Q = M.unmount;
        te.add(M), M.unmount = function() {
          te.delete(M), te.size < 1 && (c = on, B && B(), B = null, l.value = on, be = !1, Y = !1), Q()
        }
      }
    };

  function ce(M) {
    return M.reduce((X, K) => X.then(() => P(K)), Promise.resolve())
  }
  return ne
}

function mw(r, e) {
  const t = [],
    n = [],
    i = [],
    o = Math.max(e.matched.length, r.matched.length);
  for (let s = 0; s < o; s++) {
    const a = e.matched[s];
    a && (r.matched.find(c => ds(c, a)) ? n.push(a) : t.push(a));
    const l = r.matched[s];
    l && (e.matched.find(c => ds(c, l)) || i.push(l))
  }
  return [t, n, i]
}

function Rh() {
  return fr(Ac)
}

function Rc() {
  return fr(Ah)
}
const yw = (r, e) => e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, t => {
    var n;
    return ((n = r.params[t.slice(1)]) == null ? void 0 : n.toString()) || ""
  }),
  sf = (r, e) => {
    const t = r.route.matched.find(i => {
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === r.Component.type
      }),
      n = e ?? (t == null ? void 0 : t.meta.key) ?? (t && yw(r.route, t));
    return typeof n == "function" ? n(r.route) : n
  },
  bw = (r, e) => ({
    default: () => r ? qt(s2, r === !0 ? {} : r, e) : e
  });

function Oh(r) {
  return Array.isArray(r) ? r : [r]
}
const Eo = null,
  ko = null,
  So = null,
  To = null,
  Po = null,
  Lo = null,
  Ao = null,
  Ro = null,
  Oo = null,
  ou = null,
  yp = [{
    name: "about___en",
    path: "/en/about",
    meta: {},
    alias: [],
    redirect: Eo == null ? void 0 : Eo.redirect,
    component: () => dt(() => import("./about.CJ504dbI.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), import.meta.url).then(r => r.default || r)
  }, {
    name: "about___uk",
    path: "/about",
    meta: {},
    alias: [],
    redirect: Eo == null ? void 0 : Eo.redirect,
    component: () => dt(() => import("./about.CJ504dbI.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), import.meta.url).then(r => r.default || r)
  }, {
    name: "contact___en",
    path: "/en/contact",
    meta: {},
    alias: [],
    redirect: ko == null ? void 0 : ko.redirect,
    component: () => dt(() => import("./contact.Bt7mUDAx.js"), __vite__mapDeps([16, 17, 2, 3, 13, 14, 9, 18]), import.meta.url).then(r => r.default || r)
  }, {
    name: "contact___uk",
    path: "/contact",
    meta: {},
    alias: [],
    redirect: ko == null ? void 0 : ko.redirect,
    component: () => dt(() => import("./contact.Bt7mUDAx.js"), __vite__mapDeps([16, 17, 2, 3, 13, 14, 9, 18]), import.meta.url).then(r => r.default || r)
  }, {
    name: "index___en",
    path: "/en",
    meta: {},
    alias: [],
    redirect: So == null ? void 0 : So.redirect,
    component: () => dt(() => import("./index.DTFDwvP2.js"), __vite__mapDeps([19, 5, 2, 3, 6, 1, 4, 7, 8, 9, 20, 21, 22, 11, 23, 24, 25, 26, 27, 13, 14, 28]), import.meta.url).then(r => r.default || r)
  }, {
    name: "index___uk",
    path: "/",
    meta: {},
    alias: [],
    redirect: So == null ? void 0 : So.redirect,
    component: () => dt(() => import("./index.DTFDwvP2.js"), __vite__mapDeps([19, 5, 2, 3, 6, 1, 4, 7, 8, 9, 20, 21, 22, 11, 23, 24, 25, 26, 27, 13, 14, 28]), import.meta.url).then(r => r.default || r)
  }, {
    name: "portfolio-handle___en",
    path: "/en/portfolio/:handle()",
    meta: {},
    alias: [],
    redirect: To == null ? void 0 : To.redirect,
    component: () => dt(() => import("./_handle_.CxeKCtIe.js"), __vite__mapDeps([29, 9, 2, 3, 11, 10, 12, 13, 14, 30]), import.meta.url).then(r => r.default || r)
  }, {
    name: "portfolio-handle___uk",
    path: "/portfolio/:handle()",
    meta: {},
    alias: [],
    redirect: To == null ? void 0 : To.redirect,
    component: () => dt(() => import("./_handle_.CxeKCtIe.js"), __vite__mapDeps([29, 9, 2, 3, 11, 10, 12, 13, 14, 30]), import.meta.url).then(r => r.default || r)
  }, {
    name: "portfolio___en",
    path: "/en/portfolio",
    meta: {},
    alias: [],
    redirect: Po == null ? void 0 : Po.redirect,
    component: () => dt(() => import("./index.Ck_ayh9d.js"), __vite__mapDeps([31, 1, 2, 3, 4, 22, 11, 23, 26, 5, 6, 27, 13, 14, 9, 32]), import.meta.url).then(r => r.default || r)
  }, {
    name: "portfolio___uk",
    path: "/portfolio",
    meta: {},
    alias: [],
    redirect: Po == null ? void 0 : Po.redirect,
    component: () => dt(() => import("./index.Ck_ayh9d.js"), __vite__mapDeps([31, 1, 2, 3, 4, 22, 11, 23, 26, 5, 6, 27, 13, 14, 9, 32]), import.meta.url).then(r => r.default || r)
  }, {
    name: "privacy-policy___en",
    path: "/en/privacy-policy",
    meta: {},
    alias: [],
    redirect: Lo == null ? void 0 : Lo.redirect,
    component: () => dt(() => import("./privacy-policy.B8ZergdN.js"), __vite__mapDeps([33, 13, 2, 3, 14, 34]), import.meta.url).then(r => r.default || r)
  }, {
    name: "privacy-policy___uk",
    path: "/privacy-policy",
    meta: {},
    alias: [],
    redirect: Lo == null ? void 0 : Lo.redirect,
    component: () => dt(() => import("./privacy-policy.B8ZergdN.js"), __vite__mapDeps([33, 13, 2, 3, 14, 34]), import.meta.url).then(r => r.default || r)
  }, {
    name: "services___en",
    path: "/en/services",
    meta: {},
    alias: [],
    redirect: Ao == null ? void 0 : Ao.redirect,
    component: () => dt(() => import("./services.DO_NqN_U.js"), __vite__mapDeps([35, 1, 2, 3, 4, 24, 25, 26, 5, 6, 27, 13, 14, 9, 36]), import.meta.url).then(r => r.default || r)
  }, {
    name: "services___uk",
    path: "/services",
    meta: {},
    alias: [],
    redirect: Ao == null ? void 0 : Ao.redirect,
    component: () => dt(() => import("./services.DO_NqN_U.js"), __vite__mapDeps([35, 1, 2, 3, 4, 24, 25, 26, 5, 6, 27, 13, 14, 9, 36]), import.meta.url).then(r => r.default || r)
  }, {
    name: "team___en",
    path: "/en/team",
    meta: {},
    alias: [],
    redirect: Ro == null ? void 0 : Ro.redirect,
    component: () => dt(() => import("./team.DTr1zdYE.js"), __vite__mapDeps([37, 1, 2, 3, 4, 17, 13, 14, 9, 38]), import.meta.url).then(r => r.default || r)
  }, {
    name: "team___uk",
    path: "/team",
    meta: {},
    alias: [],
    redirect: Ro == null ? void 0 : Ro.redirect,
    component: () => dt(() => import("./team.DTr1zdYE.js"), __vite__mapDeps([37, 1, 2, 3, 4, 17, 13, 14, 9, 38]), import.meta.url).then(r => r.default || r)
  }, {
    name: "terms-of-use___en",
    path: "/en/terms-of-use",
    meta: {},
    alias: [],
    redirect: Oo == null ? void 0 : Oo.redirect,
    component: () => dt(() => import("./terms-of-use.DDNeoDJ5.js"), __vite__mapDeps([39, 13, 2, 3, 14, 40]), import.meta.url).then(r => r.default || r)
  }, {
    name: "terms-of-use___uk",
    path: "/terms-of-use",
    meta: {},
    alias: [],
    redirect: Oo == null ? void 0 : Oo.redirect,
    component: () => dt(() => import("./terms-of-use.DDNeoDJ5.js"), __vite__mapDeps([39, 13, 2, 3, 14, 40]), import.meta.url).then(r => r.default || r)
  }, {
    name: void 0,
    path: "/sitemap.xml",
    meta: {},
    alias: [],
    redirect: ou == null ? void 0 : ou.redirect,
    component: () => dt(() => import("./component-stub.FmFgRqLi.js"), __vite__mapDeps([]), import.meta.url).then(r => r.default || r)
  }],
  Mg = (r, e, t) => (e = e === !0 ? {} : e, {
    default: () => {
      var n;
      return e ? qt(r, e, t) : (n = t.default) == null ? void 0 : n.call(t)
    }
  });

function bp(r) {
  const e = (r == null ? void 0 : r.meta.key) ?? r.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, t => {
    var n;
    return ((n = r.params[t.slice(1)]) == null ? void 0 : n.toString()) || ""
  });
  return typeof e == "function" ? e(r) : e
}

function vw(r, e) {
  return r === e || e === on ? !1 : bp(r) !== bp(e) ? !0 : !r.matched.every((n, i) => {
    var o, s;
    return n.components && n.components.default === ((s = (o = e.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
  })
}
const Dw = {
  scrollBehavior(r, e, t) {
    var c;
    const n = Ve(),
      i = ((c = Zt().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
    let o = t || void 0;
    const s = typeof r.meta.scrollToTop == "function" ? r.meta.scrollToTop(r, e) : r.meta.scrollToTop;
    if (!o && e && r && s !== !1 && vw(r, e) && (o = {
        left: 0,
        top: 0
      }), r.path === e.path) return e.hash && !r.hash ? {
      left: 0,
      top: 0
    } : r.hash ? {
      el: r.hash,
      top: vp(r.hash),
      behavior: i
    } : !1;
    const a = u => !!(u.meta.pageTransition ?? tf),
      l = a(e) && a(r) ? "page:transition:finish" : "page:finish";
    return new Promise(u => {
      n.hooks.hookOnce(l, async () => {
        await new Promise(d => setTimeout(d, 0)), r.hash && (o = {
          el: r.hash,
          top: vp(r.hash),
          behavior: i
        }), u(o)
      })
    })
  }
};

function vp(r) {
  try {
    const e = document.querySelector(r);
    if (e) return parseFloat(getComputedStyle(e).scrollMarginTop)
  } catch {}
  return 0
}
const ww = {
    hashMode: !1,
    scrollBehaviorType: "auto"
  },
  Sr = {
    ...ww,
    ...Dw
  },
  xw = async r => {
    var l;
    let e, t;
    if (!((l = r.meta) != null && l.validate)) return;
    const n = Ve(),
      i = Zt();
    if (([e, t] = Hn(() => Promise.resolve(r.meta.validate(r))), e = await e, t(), e) === !0) return;
    const s = za({
        statusCode: 404,
        statusMessage: `Page Not Found: ${r.fullPath}`,
        data: {
          path: r.fullPath
        }
      }),
      a = i.beforeResolve(c => {
        if (a(), c === r) {
          const u = i.afterEach(async () => {
            u(), await n.runWithContext(() => Yo(s)), window.history.pushState({}, "", r.fullPath)
          });
          return !1
        }
      })
  }, af = globalThis.requestIdleCallback || (r => {
    const e = Date.now(),
      t = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
      };
    return setTimeout(() => {
      r(t)
    }, 1)
  }), Cw = globalThis.cancelIdleCallback || (r => {
    clearTimeout(r)
  }), Fh = r => {
    const e = Ve();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", () => {
      af(r)
    }) : af(r)
  }, Ew = r => r === "defer" || r === !1;

function kw(...r) {
  var _;
  const e = typeof r[r.length - 1] == "string" ? r.pop() : void 0;
  typeof r[0] != "string" && r.unshift(e);
  let [t, n, i = {}] = r;
  if (typeof t != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof n != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  const o = Ve(),
    s = n,
    a = () => null,
    l = () => o.isHydrating ? o.payload.data[t] : o.static.data[t];
  i.server = i.server ?? !0, i.default = i.default ?? a, i.getCachedData = i.getCachedData ?? l, i.lazy = i.lazy ?? !1, i.immediate = i.immediate ?? !0, i.deep = i.deep ?? oD.deep, i.dedupe = i.dedupe ?? "cancel";
  const c = () => ![null, void 0].includes(i.getCachedData(t));
  if (!o._asyncData[t] || !i.immediate) {
    (_ = o.payload._errors)[t] ?? (_[t] = null);
    const p = i.deep ? we : hs;
    o._asyncData[t] = {
      data: p(i.getCachedData(t) ?? i.default()),
      pending: we(!c()),
      error: yh(o.payload._errors, t),
      status: we("idle")
    }
  }
  const u = {
    ...o._asyncData[t]
  };
  u.refresh = u.execute = (p = {}) => {
    if (o._asyncDataPromises[t]) {
      if (Ew(p.dedupe ?? i.dedupe)) return o._asyncDataPromises[t];
      o._asyncDataPromises[t].cancelled = !0
    }
    if ((p._initial || o.isHydrating && p._initial !== !1) && c()) return Promise.resolve(i.getCachedData(t));
    u.pending.value = !0, u.status.value = "pending";
    const m = new Promise((g, y) => {
      try {
        g(s(o))
      } catch (b) {
        y(b)
      }
    }).then(g => {
      if (m.cancelled) return o._asyncDataPromises[t];
      let y = g;
      i.transform && (y = i.transform(g)), i.pick && (y = Sw(y, i.pick)), o.payload.data[t] = y, u.data.value = y, u.error.value = null, u.status.value = "success"
    }).catch(g => {
      if (m.cancelled) return o._asyncDataPromises[t];
      u.error.value = za(g), u.data.value = se(i.default()), u.status.value = "error"
    }).finally(() => {
      m.cancelled || (u.pending.value = !1, delete o._asyncDataPromises[t])
    });
    return o._asyncDataPromises[t] = m, o._asyncDataPromises[t]
  };
  const d = () => u.refresh({
      _initial: !0
    }),
    h = i.server !== !1 && o.payload.serverRendered;
  {
    const p = Ss();
    if (p && !p._nuxtOnBeforeMountCbs) {
      p._nuxtOnBeforeMountCbs = [];
      const g = p._nuxtOnBeforeMountCbs;
      p && (a2(() => {
        g.forEach(y => {
          y()
        }), g.splice(0, g.length)
      }), va(() => g.splice(0, g.length)))
    }
    h && o.isHydrating && (u.error.value || c()) ? (u.pending.value = !1, u.status.value = u.error.value ? "error" : "success") : p && (o.payload.serverRendered && o.isHydrating || i.lazy) && i.immediate ? p._nuxtOnBeforeMountCbs.push(d) : i.immediate && d(), i.watch && Ir(i.watch, () => u.refresh());
    const m = o.hook("app:data:refresh", async g => {
      (!g || g.includes(t)) && await u.refresh()
    });
    p && va(m)
  }
  const f = Promise.resolve(o._asyncDataPromises[t]).then(() => u);
  return Object.assign(f, u), f
}

function Sw(r, e) {
  const t = {};
  for (const n of e) t[n] = r[n];
  return t
}
const Tw = "$s";

function An(...r) {
  const e = typeof r[r.length - 1] == "string" ? r.pop() : void 0;
  typeof r[0] != "string" && r.unshift(e);
  const [t, n] = r;
  if (!t || typeof t != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + t);
  if (n !== void 0 && typeof n != "function") throw new Error("[nuxt] [useState] init must be a function: " + n);
  const i = Tw + t,
    o = Ve(),
    s = yh(o.payload.state, i);
  if (s.value === void 0 && n) {
    const a = n();
    if (At(a)) return o.payload.state[i] = a, a;
    s.value = a
  }
  return s
}

function Pw(r, e, t) {
  const [n = {}, i] = typeof e == "string" ? [{}, e] : [e, t], o = Se(() => {
    let w = r;
    return typeof w == "function" && (w = w()), Qi(w)
  }), s = n.key || Wb([i, typeof o.value == "string" ? o.value : "", ...Lw(n)]);
  if (!s || typeof s != "string") throw new TypeError("[nuxt] [useFetch] key must be a string: " + s);
  if (!r) throw new Error("[nuxt] [useFetch] request is missing.");
  const a = s === i ? "$f" + s : s;
  if (!n.baseURL && typeof o.value == "string" && o.value[0] === "/" && o.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const {
    server: l,
    lazy: c,
    default: u,
    transform: d,
    pick: h,
    watch: f,
    immediate: _,
    getCachedData: p,
    deep: m,
    dedupe: g,
    ...y
  } = n, b = Jn({
    ...sD,
    ...y,
    cache: typeof n.cache == "boolean" ? void 0 : n.cache
  }), v = {
    server: l,
    lazy: c,
    default: u,
    transform: d,
    pick: h,
    immediate: _,
    getCachedData: p,
    deep: m,
    dedupe: g,
    watch: f === !1 ? [] : [b, o, ...f || []]
  };
  let D;
  return kw(a, () => {
    var P;
    (P = D == null ? void 0 : D.abort) == null || P.call(D), D = typeof AbortController < "u" ? new AbortController : {};
    const w = Qi(n.timeout);
    return w && setTimeout(() => D.abort(), w), (n.$fetch || globalThis.$fetch)(o.value, {
      signal: D.signal,
      ...b
    })
  }, v)
}

function Lw(r) {
  var t;
  const e = [((t = Qi(r.method)) == null ? void 0 : t.toUpperCase()) || "GET", Qi(r.baseURL)];
  for (const n of [r.params || r.query]) {
    const i = Qi(n);
    if (!i) continue;
    const o = {};
    for (const [s, a] of Object.entries(i)) o[Qi(s)] = Qi(a);
    e.push(o)
  }
  return e
}
const Aw = {
  path: "/",
  watch: !0,
  decode: r => Da(decodeURIComponent(r)),
  encode: r => encodeURIComponent(typeof r == "string" ? r : JSON.stringify(r))
};

function Ng(r, e) {
  var l;
  const t = {
      ...Aw,
      ...e
    },
    n = Dp(t) || {};
  let i;
  t.maxAge !== void 0 ? i = t.maxAge * 1e3 : t.expires && (i = t.expires.getTime() - Date.now());
  const o = i !== void 0 && i <= 0,
    s = bn(o ? void 0 : n[r] ?? ((l = t.default) == null ? void 0 : l.call(t))),
    a = i && !o ? Fw(s, i) : we(s);
  {
    const c = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${r}`),
      u = () => {
        t.readonly || Xb(a.value, n[r]) || (Ow(r, a.value, t), n[r] = bn(a.value), c == null || c.postMessage({
          value: t.encode(a.value)
        }))
      },
      d = f => {
        var p;
        const _ = f.refresh ? (p = Dp(t)) == null ? void 0 : p[r] : t.decode(f.value);
        h = !0, n[r] = a.value = _, vo(() => {
          h = !1
        })
      };
    let h = !1;
    vh() && Dh(() => {
      h = !0, u(), c == null || c.close()
    }), c && (c.onmessage = ({
      data: f
    }) => d(f)), t.watch ? Ir(a, () => {
      h || u()
    }, {
      deep: t.watch !== "shallow"
    }) : u()
  }
  return a
}

function Dp(r = {}) {
  return Tb(document.cookie, r)
}

function Rw(r, e, t = {}) {
  return e == null ? Hd(r, e, {
    ...t,
    maxAge: -1
  }) : Hd(r, e, t)
}

function Ow(r, e, t = {}) {
  document.cookie = Rw(r, e, t)
}
const wp = 2147483647;

function Fw(r, e) {
  let t, n = 0;
  return vh() && Dh(() => {
    clearTimeout(t)
  }), l2((i, o) => {
    function s() {
      clearTimeout(t);
      const a = e - n,
        l = a < wp ? a : wp;
      t = setTimeout(() => {
        if (n += l, n < e) return s();
        r = void 0, o()
      }, l)
    }
    return {
      get() {
        return i(), r
      },
      set(a) {
        s(), r = a, o()
      }
    }
  })
}
async function Ig(r, e = Zt()) {
  const {
    path: t,
    matched: n
  } = e.resolve(r);
  if (!n.length || (e._routePreloaded || (e._routePreloaded = new Set), e._routePreloaded.has(t))) return;
  const i = e._preloadPromises = e._preloadPromises || [];
  if (i.length > 4) return Promise.all(i).then(() => Ig(r, e));
  e._routePreloaded.add(t);
  const o = n.map(s => {
    var a;
    return (a = s.components) == null ? void 0 : a.default
  }).filter(s => typeof s == "function");
  for (const s of o) {
    const a = Promise.resolve(s()).catch(() => {}).finally(() => i.splice(i.indexOf(a)));
    i.push(a)
  }
  await Promise.all(i)
}

function Mw(r = {}) {
  const e = r.path || window.location.pathname;
  let t = {};
  try {
    t = Da(sessionStorage.getItem("nuxt:reload") || "{}")
  } catch {}
  if (r.force || (t == null ? void 0 : t.path) !== e || (t == null ? void 0 : t.expires) < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({
        path: e,
        expires: Date.now() + (r.ttl ?? 1e4)
      }))
    } catch {}
    if (r.persistState) try {
      sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
        state: Ve().payload.state
      }))
    } catch {}
    window.location.pathname !== e ? window.location.href = e : window.location.reload()
  }
}
const Nw = (...r) => r.find(e => e !== void 0);

function Iw(r) {
  const e = r.componentName || "NuxtLink";

  function t(n, i) {
    if (!n || r.trailingSlash !== "append" && r.trailingSlash !== "remove") return n;
    if (typeof n == "string") return xp(n, r.trailingSlash);
    const o = "path" in n && n.path !== void 0 ? n.path : i(n).path,
      s = {
        ...n,
        path: xp(o, r.trailingSlash)
      };
    return "name" in s && delete s.name, s
  }
  return et({
    name: e,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: !1
      },
      target: {
        type: String,
        default: void 0,
        required: !1
      },
      rel: {
        type: String,
        default: void 0,
        required: !1
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      activeClass: {
        type: String,
        default: void 0,
        required: !1
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: !1
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: !1
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: !1
      },
      external: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: !1
      }
    },
    setup(n, {
      slots: i
    }) {
      const o = Zt(),
        s = Xa(),
        a = Se(() => {
          const _ = n.to || n.href || "";
          return t(_, o.resolve)
        }),
        l = Se(() => typeof a.value == "string" && ri(a.value, {
          acceptRelative: !0
        })),
        c = Se(() => n.target && n.target !== "_self"),
        u = Se(() => n.external || c.value ? !0 : typeof a.value == "object" ? !1 : a.value === "" || l.value),
        d = we(!1),
        h = we(null),
        f = _ => {
          var p;
          h.value = n.custom ? (p = _ == null ? void 0 : _.$el) == null ? void 0 : p.nextElementSibling : _ == null ? void 0 : _.$el
        };
      if (n.prefetch !== !1 && n.noPrefetch !== !0 && n.target !== "_blank" && !Bw()) {
        const p = Ve();
        let m, g = null;
        Pn(() => {
          const y = $w();
          Fh(() => {
            m = af(() => {
              var b;
              (b = h == null ? void 0 : h.value) != null && b.tagName && (g = y.observe(h.value, async () => {
                g == null || g(), g = null;
                const v = typeof a.value == "string" ? a.value : o.resolve(a.value).fullPath;
                await Promise.all([p.hooks.callHook("link:prefetch", v).catch(() => {}), !u.value && Ig(a.value, o).catch(() => {})]), d.value = !0
              }))
            })
          })
        }), bh(() => {
          m && Cw(m), g == null || g(), g = null
        })
      }
      return () => {
        var g, y;
        if (!u.value) {
          const b = {
            ref: f,
            to: a.value,
            activeClass: n.activeClass || r.activeClass,
            exactActiveClass: n.exactActiveClass || r.exactActiveClass,
            replace: n.replace,
            ariaCurrentValue: n.ariaCurrentValue,
            custom: n.custom
          };
          return n.custom || (d.value && (b.class = n.prefetchedClass || r.prefetchedClass), b.rel = n.rel || void 0), qt(c2("RouterLink"), b, i.default)
        }
        const _ = typeof a.value == "object" ? ((g = o.resolve(a.value)) == null ? void 0 : g.href) ?? null : a.value && !n.external && !l.value ? t(Do(s.app.baseURL, a.value), o.resolve) : a.value || null,
          p = n.target || null,
          m = Nw(n.noRel ? "" : n.rel, r.externalRelAttribute, l.value || c.value ? "noopener noreferrer" : "") || null;
        if (n.custom) {
          if (!i.default) return null;
          const b = () => rg(_, {
            replace: n.replace,
            external: n.external
          });
          return i.default({
            href: _,
            navigate: b,
            get route() {
              if (!_) return;
              const v = Wa(_);
              return {
                path: v.pathname,
                fullPath: v.pathname,
                get query() {
                  return V0(v.search)
                },
                hash: v.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: _
              }
            },
            rel: m,
            target: p,
            isExternal: u.value,
            isActive: !1,
            isExactActive: !1
          })
        }
        return qt("a", {
          ref: h,
          href: _,
          rel: m,
          target: p
        }, (y = i.default) == null ? void 0 : y.call(i))
      }
    }
  })
}
const Ga = Iw(iD);

function xp(r, e) {
  const t = e === "append" ? Kl : Sc;
  return ri(r) && !r.startsWith("http") ? r : t(r, !0)
}

function $w() {
  const r = Ve();
  if (r._observer) return r._observer;
  let e = null;
  const t = new Map,
    n = (o, s) => (e || (e = new IntersectionObserver(a => {
      for (const l of a) {
        const c = t.get(l.target);
        (l.isIntersecting || l.intersectionRatio > 0) && c && c()
      }
    })), t.set(o, s), e.observe(o), () => {
      t.delete(o), e.unobserve(o), t.size === 0 && (e.disconnect(), e = null)
    });
  return r._observer = {
    observe: n
  }
}

function Bw() {
  const r = navigator.connection;
  return !!(r && (r.saveData || /2g/.test(r.effectiveType)))
}
const Vw = !1,
  Hw = !0;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let $g;
const qa = r => $g = r,
  Bg = Symbol();

function lf(r) {
  return r && typeof r == "object" && Object.prototype.toString.call(r) === "[object Object]" && typeof r.toJSON != "function"
}
var Js;
(function(r) {
  r.direct = "direct", r.patchObject = "patch object", r.patchFunction = "patch function"
})(Js || (Js = {}));

function Uw() {
  const r = ja(!0),
    e = r.run(() => we({}));
  let t = [],
    n = [];
  const i = F0({
    install(o) {
      qa(i), i._a = o, o.provide(Bg, i), o.config.globalProperties.$pinia = i, n.forEach(s => t.push(s)), n = []
    },
    use(o) {
      return !this._a && !Vw ? n.push(o) : t.push(o), this
    },
    _p: t,
    _a: null,
    _e: r,
    _s: new Map,
    state: e
  });
  return i
}
const Vg = () => {};

function Cp(r, e, t, n = Vg) {
  r.push(e);
  const i = () => {
    const o = r.indexOf(e);
    o > -1 && (r.splice(o, 1), n())
  };
  return !t && vh() && Dh(i), i
}

function Fo(r, ...e) {
  r.slice().forEach(t => {
    t(...e)
  })
}
const jw = r => r();

function cf(r, e) {
  r instanceof Map && e instanceof Map && e.forEach((t, n) => r.set(n, t)), r instanceof Set && e instanceof Set && e.forEach(r.add, r);
  for (const t in e) {
    if (!e.hasOwnProperty(t)) continue;
    const n = e[t],
      i = r[t];
    lf(i) && lf(n) && r.hasOwnProperty(t) && !At(n) && !M0(n) ? r[t] = cf(i, n) : r[t] = n
  }
  return r
}
const Ww = Symbol();

function Xw(r) {
  return !lf(r) || !r.hasOwnProperty(Ww)
}
const {
  assign: hi
} = Object;

function Yw(r) {
  return !!(At(r) && r.effect)
}

function zw(r, e, t, n) {
  const {
    state: i,
    actions: o,
    getters: s
  } = e, a = t.state.value[r];
  let l;

  function c() {
    a || (t.state.value[r] = i ? i() : {});
    const u = u2(t.state.value[r]);
    return hi(u, o, Object.keys(s || {}).reduce((d, h) => (d[h] = F0(Se(() => {
      qa(t);
      const f = t._s.get(r);
      return s[h].call(f, f)
    })), d), {}))
  }
  return l = Hg(r, c, e, t, n, !0), l
}

function Hg(r, e, t = {}, n, i, o) {
  let s;
  const a = hi({
      actions: {}
    }, t),
    l = {
      deep: !0
    };
  let c, u, d = [],
    h = [],
    f;
  const _ = n.state.value[r];
  !o && !_ && (n.state.value[r] = {}), we({});
  let p;

  function m(S) {
    let P;
    c = u = !1, typeof S == "function" ? (S(n.state.value[r]), P = {
      type: Js.patchFunction,
      storeId: r,
      events: f
    }) : (cf(n.state.value[r], S), P = {
      type: Js.patchObject,
      payload: S,
      storeId: r,
      events: f
    });
    const C = p = Symbol();
    vo().then(() => {
      p === C && (c = !0)
    }), u = !0, Fo(d, P, n.state.value[r])
  }
  const g = o ? function() {
    const {
      state: P
    } = t, C = P ? P() : {};
    this.$patch(R => {
      hi(R, C)
    })
  } : Vg;

  function y() {
    s.stop(), d = [], h = [], n._s.delete(r)
  }

  function b(S, P) {
    return function() {
      qa(n);
      const C = Array.from(arguments),
        R = [],
        N = [];

      function B(V) {
        R.push(V)
      }

      function z(V) {
        N.push(V)
      }
      Fo(h, {
        args: C,
        name: S,
        store: D,
        after: B,
        onError: z
      });
      let U;
      try {
        U = P.apply(this && this.$id === r ? this : D, C)
      } catch (V) {
        throw Fo(N, V), V
      }
      return U instanceof Promise ? U.then(V => (Fo(R, V), V)).catch(V => (Fo(N, V), Promise.reject(V))) : (Fo(R, U), U)
    }
  }
  const v = {
      _p: n,
      $id: r,
      $onAction: Cp.bind(null, h),
      $patch: m,
      $reset: g,
      $subscribe(S, P = {}) {
        const C = Cp(d, S, P.detached, () => R()),
          R = s.run(() => Ir(() => n.state.value[r], N => {
            (P.flush === "sync" ? u : c) && S({
              storeId: r,
              type: Js.direct,
              events: f
            }, N)
          }, hi({}, l, P)));
        return C
      },
      $dispose: y
    },
    D = Jn(v);
  n._s.set(r, D);
  const w = (n._a && n._a.runWithContext || jw)(() => n._e.run(() => (s = ja()).run(e)));
  for (const S in w) {
    const P = w[S];
    if (At(P) && !Yw(P) || M0(P)) o || (_ && Xw(P) && (At(P) ? P.value = _[S] : cf(P, _[S])), n.state.value[r][S] = P);
    else if (typeof P == "function") {
      const C = b(S, P);
      w[S] = C, a.actions[S] = P
    }
  }
  return hi(D, w), hi(N0(D), w), Object.defineProperty(D, "$state", {
    get: () => n.state.value[r],
    set: S => {
      m(P => {
        hi(P, S)
      })
    }
  }), n._p.forEach(S => {
    hi(D, s.run(() => S({
      store: D,
      app: n._a,
      pinia: n,
      options: a
    })))
  }), _ && o && t.hydrate && t.hydrate(D.$state, _), c = !0, u = !0, D
}

function Gw(r, e, t) {
  let n, i;
  const o = typeof e == "function";
  typeof r == "string" ? (n = r, i = o ? t : e) : (i = r, n = r.id);

  function s(a, l) {
    const c = mh();
    return a = a || (c ? fr(Bg, null) : null), a && qa(a), a = $g, a._s.has(n) || (o ? Hg(n, e, i, a) : zw(n, i, a)), a._s.get(n)
  }
  return s.$id = n, s
}
const qw = Gw("cursor", () => {
    const r = Jn({
      x: 0,
      y: 0,
      isShow: !1,
      text: "",
      color: "#C9F7CA"
    });
    return {
      cursor: r,
      showCursor: (n, i) => {
        r.isShow = !0, r.text = n ?? "", i ? r.color = i : document.body.classList.contains("high-theme") ? r.color = "#4162FB" : r.color = "#A2A2FC"
      },
      hideCursor: () => {
        r.isShow = !1, r.text = ""
      }
    }
  }),
  Kw = (r, e) => {
    const {
      hideCursor: t
    } = qw();
    t()
  },
  Qw = async r => {
    let e, t;
    const n = ([e, t] = Hn(() => vg(r.path)), e = await e, t(), e);
    if (n.redirect) return n.redirect
  }, Jw = [xw, Kw, Qw], Zs = {};

function Zw(r, e, t) {
  const {
    pathname: n,
    search: i,
    hash: o
  } = e, s = r.indexOf("#");
  if (s > -1) {
    const c = o.includes(r.slice(s)) ? r.slice(s).length : 1;
    let u = o.slice(c);
    return u[0] !== "/" && (u = "/" + u), Nd(u, "")
  }
  const a = Nd(n, r),
    l = !t || Wu(a, t, {
      trailingSlash: !0
    }) ? a : t;
  return l + (l.includes("?") ? "" : i) + o
}
const ex = Jt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(r) {
      var p, m;
      let e, t, n = Xa().app.baseURL;
      Sr.hashMode && !n.includes("#") && (n += "#");
      const i = ((p = Sr.history) == null ? void 0 : p.call(Sr, n)) ?? (Sr.hashMode ? YD(n) : Lg(n)),
        o = ((m = Sr.routes) == null ? void 0 : m.call(Sr, yp)) ?? yp;
      let s;
      const a = Zw(n, window.location, r.payload.path),
        l = gw({
          ...Sr,
          scrollBehavior: (g, y, b) => {
            if (y === on) {
              s = b;
              return
            }
            if (Sr.scrollBehavior) {
              if (l.options.scrollBehavior = Sr.scrollBehavior, "scrollRestoration" in window.history) {
                const v = l.beforeEach(() => {
                  v(), window.history.scrollRestoration = "manual"
                })
              }
              return Sr.scrollBehavior(g, on, s || b)
            }
          },
          history: i,
          routes: o
        });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), r.vueApp.use(l);
      const c = hs(l.currentRoute.value);
      l.afterEach((g, y) => {
        c.value = y
      }), Object.defineProperty(r.vueApp.config.globalProperties, "previousRoute", {
        get: () => c.value
      });
      const u = hs(l.resolve(a)),
        d = () => {
          u.value = l.currentRoute.value
        };
      r.hook("page:finish", d), l.afterEach((g, y) => {
        var b, v, D, k;
        ((v = (b = g.matched[0]) == null ? void 0 : b.components) == null ? void 0 : v.default) === ((k = (D = y.matched[0]) == null ? void 0 : D.components) == null ? void 0 : k.default) && d()
      });
      const h = {};
      for (const g in u.value) Object.defineProperty(h, g, {
        get: () => u.value[g]
      });
      r._route = Cc(h), r._middleware = r._middleware || {
        global: [],
        named: {}
      };
      const f = Tc();
      try {
        [e, t] = Hn(() => l.isReady()), await e, t()
      } catch (g) {
        [e, t] = Hn(() => r.runWithContext(() => Yo(g))), await e, t()
      }
      const _ = r.payload.state._layout;
      return l.beforeEach(async (g, y) => {
        var b;
        await r.callHook("page:loading:start"), g.meta = Jn(g.meta), r.isHydrating && _ && !f2(g.meta.layout) && (g.meta.layout = _), r._processingMiddleware = !0;
        {
          const v = new Set([...Jw, ...r._middleware.global]);
          for (const D of g.matched) {
            const k = D.meta.middleware;
            if (k)
              for (const w of Oh(k)) v.add(w)
          }
          for (const D of v) {
            const k = typeof D == "string" ? r._middleware.named[D] || await ((b = Zs[D]) == null ? void 0 : b.call(Zs).then(S => S.default || S)) : D;
            if (!k) throw new Error(`Unknown route middleware: '${D}'.`);
            const w = await r.runWithContext(() => k(g, y));
            if (!r.payload.serverRendered && r.isHydrating && (w === !1 || w instanceof Error)) {
              const S = w || Ku({
                statusCode: 404,
                statusMessage: `Page Not Found: ${a}`
              });
              return await r.runWithContext(() => Yo(S)), !1
            }
            if (w !== !0 && (w || w === !1)) return w
          }
        }
      }), l.onError(async () => {
        delete r._processingMiddleware, await r.callHook("page:loading:end")
      }), l.afterEach(async (g, y, b) => {
        delete r._processingMiddleware, !r.isHydrating && f.value && await r.runWithContext(rv), b && await r.callHook("page:loading:end"), g.matched.length === 0 && await r.runWithContext(() => Yo(Ku({
          statusCode: 404,
          fatal: !1,
          statusMessage: `Page not found: ${g.fullPath}`,
          data: {
            path: g.fullPath
          }
        })))
      }), r.hooks.hookOnce("app:created", async () => {
        try {
          const g = l.resolve(a);
          "name" in g && (g.name = void 0), await l.replace({
            ...g,
            force: !0
          }), l.options.scrollBehavior = Sr.scrollBehavior
        } catch (g) {
          await r.runWithContext(() => Yo(g))
        }
      }), {
        provide: {
          router: l
        }
      }
    }
  }),
  tx = Jt({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(r) {
      const e = An("site-config");
      let t = {};
      return t = e.value || window.__NUXT_SITE_CONFIG__, {
        provide: {
          nuxtSiteConfig: t
        }
      }
    }
  }),
  rx = Jt({
    name: "nuxt:payload",
    setup(r) {
      Zt().beforeResolve(async (e, t) => {
        if (e.path === t.path) return;
        const n = await Zd(e.path);
        n && Object.assign(r.static.data, n.data)
      }), Fh(() => {
        var e;
        r.hooks.hook("link:prefetch", async t => {
          Wa(t).protocol || await Zd(t)
        }), ((e = navigator.connection) == null ? void 0 : e.effectiveType) !== "slow-2g" && setTimeout(Pc, 1e3)
      })
    }
  }),
  nx = Jt(r => {
    let e;
    async function t() {
      const n = await Pc();
      e && clearTimeout(e), e = setTimeout(t, 1e3 * 60 * 60);
      const i = await $fetch(kh("builds/latest.json") + `?${Date.now()}`);
      i.id !== n.id && r.hooks.callHook("app:manifest:update", i)
    }
    Fh(() => {
      e = setTimeout(t, 1e3 * 60 * 60)
    })
  }),
  ix = Jt(r => {
    const e = Uw();
    return r.vueApp.use(e), qa(e), r.payload && r.payload.pinia && (e.state.value = r.payload.pinia), {
      provide: {
        pinia: e
      }
    }
  }),
  ox = Jt({
    name: "nuxt:global-components"
  }),
  mi = {
    default: () => dt(() => import("./default.BvWVsDI7.js"), __vite__mapDeps([41, 20, 2, 3, 21, 9, 42]), import.meta.url).then(r => r.default || r),
    empty: () => dt(() => import("./empty.Cn49MvXJ.js"), __vite__mapDeps([43, 2, 3]), import.meta.url).then(r => r.default || r)
  },
  sx = Jt({
    name: "nuxt:prefetch",
    setup(r) {
      const e = Zt();
      r.hooks.hook("app:mounted", () => {
        e.beforeEach(async t => {
          var i;
          const n = (i = t == null ? void 0 : t.meta) == null ? void 0 : i.layout;
          n && typeof mi[n] == "function" && await mi[n]()
        })
      }), r.hooks.hook("link:prefetch", t => {
        if (ri(t)) return;
        const n = e.resolve(t);
        if (!n) return;
        const i = n.meta.layout;
        let o = Oh(n.meta.middleware);
        o = o.filter(s => typeof s == "string");
        for (const s of o) typeof Zs[s] == "function" && Zs[s]();
        i && typeof mi[i] == "function" && mi[i]()
      })
    }
  });

function su(...r) {
  var e;
  (e = window.dataLayer) == null || e.push(arguments)
}

function ax({
  tags: r
}) {
  window.dataLayer = window.dataLayer || [];
  for (const e of r)
    for (const t of e.initCommands ?? []) su(...t);
  su("js", new Date);
  for (const e of r) su("config", e.id, e.config)
}

function lx(r) {
  const e = N0(r),
    t = e.tags.filter(Boolean).map(n => typeof n == "string" ? {
      id: n
    } : n);
  if (r.id) {
    const {
      id: n,
      config: i,
      initCommands: o
    } = e;
    t.unshift({
      id: n,
      config: i,
      initCommands: o
    })
  }
  return t
}
const cx = Jt({
    parallel: !0,
    setup() {
      const r = Xa().public.gtag,
        e = lx(r);
      if (!e.length || (ax({
          tags: e
        }), !r.enabled)) return;
      const t = r.loadingStrategy === "async" ? "async" : "defer";
      yg({
        script: [{
          src: Eh(r.url, {
            id: e[0].id
          }),
          [t]: !0
        }]
      })
    }
  }),
  ux = Jt(() => {});
/*!
 * shared v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const uf = typeof window < "u",
  Mi = (r, e = !1) => e ? Symbol.for(r) : Symbol(r),
  fx = (r, e, t) => hx({
    l: r,
    k: e,
    s: t
  }),
  hx = r => JSON.stringify(r).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
  Rt = r => typeof r == "number" && isFinite(r),
  dx = r => jg(r) === "[object Date]",
  tc = r => jg(r) === "[object RegExp]",
  Oc = r => Ne(r) && Object.keys(r).length === 0,
  Ot = Object.assign;
let Ep;
const Mh = () => Ep || (Ep = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function kp(r) {
  return r.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const px = Object.prototype.hasOwnProperty;

function Ca(r, e) {
  return px.call(r, e)
}
const xt = Array.isArray,
  Ze = r => typeof r == "function",
  le = r => typeof r == "string",
  ut = r => typeof r == "boolean",
  Be = r => r !== null && typeof r == "object",
  _x = r => Be(r) && Ze(r.then) && Ze(r.catch),
  Ug = Object.prototype.toString,
  jg = r => Ug.call(r),
  Ne = r => {
    if (!Be(r)) return !1;
    const e = Object.getPrototypeOf(r);
    return e === null || e.constructor === Object
  },
  gx = r => r == null ? "" : xt(r) || Ne(r) && r.toString === Ug ? JSON.stringify(r, null, 2) : String(r);

function Nh(r, e = "") {
  return r.reduce((t, n, i) => i === 0 ? t + n : t + e + n, "")
}

function Ih(r) {
  let e = r;
  return () => ++e
}

function mx(r, e) {
  typeof console < "u" && (console.warn("[intlify] " + r), e && console.warn(e.stack))
}
const al = r => !Be(r) || xt(r);

function Ei(r, e) {
  if (al(r) || al(e)) throw new Error("Invalid value");
  for (const t in r) Ca(r, t) && (al(r[t]) || al(e[t]) ? e[t] = r[t] : Ei(r[t], e[t]))
}
/*!
 * message-compiler v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
function yx(r, e, t) {
  return {
    line: r,
    column: e,
    offset: t
  }
}

function ff(r, e, t) {
  const n = {
    start: r,
    end: e
  };
  return t != null && (n.source = t), n
}
const He = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  __EXTEND_POINT__: 17
};

function Fc(r, e, t = {}) {
  const {
    domain: n,
    messages: i,
    args: o
  } = t, s = r, a = new SyntaxError(String(s));
  return a.code = r, e && (a.location = e), a.domain = n, a
}

function bx(r) {
  throw r
}
const Mn = " ",
  vx = "\r",
  nr = `
`,
  Dx = "\u2028",
  wx = "\u2029";

function xx(r) {
  const e = r;
  let t = 0,
    n = 1,
    i = 1,
    o = 0;
  const s = w => e[w] === vx && e[w + 1] === nr,
    a = w => e[w] === nr,
    l = w => e[w] === wx,
    c = w => e[w] === Dx,
    u = w => s(w) || a(w) || l(w) || c(w),
    d = () => t,
    h = () => n,
    f = () => i,
    _ = () => o,
    p = w => s(w) || l(w) || c(w) ? nr : e[w],
    m = () => p(t),
    g = () => p(t + o);

  function y() {
    return o = 0, u(t) && (n++, i = 0), s(t) && t++, t++, i++, e[t]
  }

  function b() {
    return s(t + o) && o++, o++, e[t + o]
  }

  function v() {
    t = 0, n = 1, i = 1, o = 0
  }

  function D(w = 0) {
    o = w
  }

  function k() {
    const w = t + o;
    for (; w !== t;) y();
    o = 0
  }
  return {
    index: d,
    line: h,
    column: f,
    peekOffset: _,
    charAt: p,
    currentChar: m,
    currentPeek: g,
    next: y,
    peek: b,
    reset: v,
    resetPeek: D,
    skipToPeek: k
  }
}
const ai = void 0,
  Cx = ".",
  Sp = "'",
  Ex = "tokenizer";

function kx(r, e = {}) {
  const t = e.location !== !1,
    n = xx(r),
    i = () => n.index(),
    o = () => yx(n.line(), n.column(), n.index()),
    s = o(),
    a = i(),
    l = {
      currentType: 14,
      offset: a,
      startLoc: s,
      endLoc: s,
      lastType: 14,
      lastOffset: a,
      lastStartLoc: s,
      lastEndLoc: s,
      braceNest: 0,
      inLinked: !1,
      text: ""
    },
    c = () => l,
    {
      onError: u
    } = e;

  function d(x, E, F, ...Z) {
    const T = c();
    if (E.column += F, E.offset += F, u) {
      const he = t ? ff(T.startLoc, E) : null,
        Qe = Fc(x, he, {
          domain: Ex,
          args: Z
        });
      u(Qe)
    }
  }

  function h(x, E, F) {
    x.endLoc = o(), x.currentType = E;
    const Z = {
      type: E
    };
    return t && (Z.loc = ff(x.startLoc, x.endLoc)), F != null && (Z.value = F), Z
  }
  const f = x => h(x, 14);

  function _(x, E) {
    return x.currentChar() === E ? (x.next(), E) : (d(He.EXPECTED_TOKEN, o(), 0, E), "")
  }

  function p(x) {
    let E = "";
    for (; x.currentPeek() === Mn || x.currentPeek() === nr;) E += x.currentPeek(), x.peek();
    return E
  }

  function m(x) {
    const E = p(x);
    return x.skipToPeek(), E
  }

  function g(x) {
    if (x === ai) return !1;
    const E = x.charCodeAt(0);
    return E >= 97 && E <= 122 || E >= 65 && E <= 90 || E === 95
  }

  function y(x) {
    if (x === ai) return !1;
    const E = x.charCodeAt(0);
    return E >= 48 && E <= 57
  }

  function b(x, E) {
    const {
      currentType: F
    } = E;
    if (F !== 2) return !1;
    p(x);
    const Z = g(x.currentPeek());
    return x.resetPeek(), Z
  }

  function v(x, E) {
    const {
      currentType: F
    } = E;
    if (F !== 2) return !1;
    p(x);
    const Z = x.currentPeek() === "-" ? x.peek() : x.currentPeek(),
      T = y(Z);
    return x.resetPeek(), T
  }

  function D(x, E) {
    const {
      currentType: F
    } = E;
    if (F !== 2) return !1;
    p(x);
    const Z = x.currentPeek() === Sp;
    return x.resetPeek(), Z
  }

  function k(x, E) {
    const {
      currentType: F
    } = E;
    if (F !== 8) return !1;
    p(x);
    const Z = x.currentPeek() === ".";
    return x.resetPeek(), Z
  }

  function w(x, E) {
    const {
      currentType: F
    } = E;
    if (F !== 9) return !1;
    p(x);
    const Z = g(x.currentPeek());
    return x.resetPeek(), Z
  }

  function S(x, E) {
    const {
      currentType: F
    } = E;
    if (!(F === 8 || F === 12)) return !1;
    p(x);
    const Z = x.currentPeek() === ":";
    return x.resetPeek(), Z
  }

  function P(x, E) {
    const {
      currentType: F
    } = E;
    if (F !== 10) return !1;
    const Z = () => {
        const he = x.currentPeek();
        return he === "{" ? g(x.peek()) : he === "@" || he === "%" || he === "|" || he === ":" || he === "." || he === Mn || !he ? !1 : he === nr ? (x.peek(), Z()) : g(he)
      },
      T = Z();
    return x.resetPeek(), T
  }

  function C(x) {
    p(x);
    const E = x.currentPeek() === "|";
    return x.resetPeek(), E
  }

  function R(x) {
    const E = p(x),
      F = x.currentPeek() === "%" && x.peek() === "{";
    return x.resetPeek(), {
      isModulo: F,
      hasSpace: E.length > 0
    }
  }

  function N(x, E = !0) {
    const F = (T = !1, he = "", Qe = !1) => {
        const tt = x.currentPeek();
        return tt === "{" ? he === "%" ? !1 : T : tt === "@" || !tt ? he === "%" ? !0 : T : tt === "%" ? (x.peek(), F(T, "%", !0)) : tt === "|" ? he === "%" || Qe ? !0 : !(he === Mn || he === nr) : tt === Mn ? (x.peek(), F(!0, Mn, Qe)) : tt === nr ? (x.peek(), F(!0, nr, Qe)) : !0
      },
      Z = F();
    return E && x.resetPeek(), Z
  }

  function B(x, E) {
    const F = x.currentChar();
    return F === ai ? ai : E(F) ? (x.next(), F) : null
  }

  function z(x) {
    return B(x, F => {
      const Z = F.charCodeAt(0);
      return Z >= 97 && Z <= 122 || Z >= 65 && Z <= 90 || Z >= 48 && Z <= 57 || Z === 95 || Z === 36
    })
  }

  function U(x) {
    return B(x, F => {
      const Z = F.charCodeAt(0);
      return Z >= 48 && Z <= 57
    })
  }

  function V(x) {
    return B(x, F => {
      const Z = F.charCodeAt(0);
      return Z >= 48 && Z <= 57 || Z >= 65 && Z <= 70 || Z >= 97 && Z <= 102
    })
  }

  function Y(x) {
    let E = "",
      F = "";
    for (; E = U(x);) F += E;
    return F
  }

  function oe(x) {
    m(x);
    const E = x.currentChar();
    return E !== "%" && d(He.EXPECTED_TOKEN, o(), 0, E), x.next(), "%"
  }

  function $(x) {
    let E = "";
    for (;;) {
      const F = x.currentChar();
      if (F === "{" || F === "}" || F === "@" || F === "|" || !F) break;
      if (F === "%")
        if (N(x)) E += F, x.next();
        else break;
      else if (F === Mn || F === nr)
        if (N(x)) E += F, x.next();
        else {
          if (C(x)) break;
          E += F, x.next()
        }
      else E += F, x.next()
    }
    return E
  }

  function L(x) {
    m(x);
    let E = "",
      F = "";
    for (; E = z(x);) F += E;
    return x.currentChar() === ai && d(He.UNTERMINATED_CLOSING_BRACE, o(), 0), F
  }

  function ee(x) {
    m(x);
    let E = "";
    return x.currentChar() === "-" ? (x.next(), E += `-${Y(x)}`) : E += Y(x), x.currentChar() === ai && d(He.UNTERMINATED_CLOSING_BRACE, o(), 0), E
  }

  function ie(x) {
    m(x), _(x, "'");
    let E = "",
      F = "";
    const Z = he => he !== Sp && he !== nr;
    for (; E = B(x, Z);) E === "\\" ? F += be(x) : F += E;
    const T = x.currentChar();
    return T === nr || T === ai ? (d(He.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), T === nr && (x.next(), _(x, "'")), F) : (_(x, "'"), F)
  }

  function be(x) {
    const E = x.currentChar();
    switch (E) {
      case "\\":
      case "'":
        return x.next(), `\\${E}`;
      case "u":
        return te(x, E, 4);
      case "U":
        return te(x, E, 6);
      default:
        return d(He.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, E), ""
    }
  }

  function te(x, E, F) {
    _(x, E);
    let Z = "";
    for (let T = 0; T < F; T++) {
      const he = V(x);
      if (!he) {
        d(He.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${E}${Z}${x.currentChar()}`);
        break
      }
      Z += he
    }
    return `\\${E}${Z}`
  }

  function ne(x) {
    m(x);
    let E = "",
      F = "";
    const Z = T => T !== "{" && T !== "}" && T !== Mn && T !== nr;
    for (; E = B(x, Z);) F += E;
    return F
  }

  function ce(x) {
    let E = "",
      F = "";
    for (; E = z(x);) F += E;
    return F
  }

  function M(x) {
    const E = (F = !1, Z) => {
      const T = x.currentChar();
      return T === "{" || T === "%" || T === "@" || T === "|" || T === "(" || T === ")" || !T || T === Mn ? Z : T === nr || T === Cx ? (Z += T, x.next(), E(F, Z)) : (Z += T, x.next(), E(!0, Z))
    };
    return E(!1, "")
  }

  function X(x) {
    m(x);
    const E = _(x, "|");
    return m(x), E
  }

  function K(x, E) {
    let F = null;
    switch (x.currentChar()) {
      case "{":
        return E.braceNest >= 1 && d(He.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), x.next(), F = h(E, 2, "{"), m(x), E.braceNest++, F;
      case "}":
        return E.braceNest > 0 && E.currentType === 2 && d(He.EMPTY_PLACEHOLDER, o(), 0), x.next(), F = h(E, 3, "}"), E.braceNest--, E.braceNest > 0 && m(x), E.inLinked && E.braceNest === 0 && (E.inLinked = !1), F;
      case "@":
        return E.braceNest > 0 && d(He.UNTERMINATED_CLOSING_BRACE, o(), 0), F = Q(x, E) || f(E), E.braceNest = 0, F;
      default:
        let T = !0,
          he = !0,
          Qe = !0;
        if (C(x)) return E.braceNest > 0 && d(He.UNTERMINATED_CLOSING_BRACE, o(), 0), F = h(E, 1, X(x)), E.braceNest = 0, E.inLinked = !1, F;
        if (E.braceNest > 0 && (E.currentType === 5 || E.currentType === 6 || E.currentType === 7)) return d(He.UNTERMINATED_CLOSING_BRACE, o(), 0), E.braceNest = 0, ue(x, E);
        if (T = b(x, E)) return F = h(E, 5, L(x)), m(x), F;
        if (he = v(x, E)) return F = h(E, 6, ee(x)), m(x), F;
        if (Qe = D(x, E)) return F = h(E, 7, ie(x)), m(x), F;
        if (!T && !he && !Qe) return F = h(E, 13, ne(x)), d(He.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, F.value), m(x), F;
        break
    }
    return F
  }

  function Q(x, E) {
    const {
      currentType: F
    } = E;
    let Z = null;
    const T = x.currentChar();
    switch ((F === 8 || F === 9 || F === 12 || F === 10) && (T === nr || T === Mn) && d(He.INVALID_LINKED_FORMAT, o(), 0), T) {
      case "@":
        return x.next(), Z = h(E, 8, "@"), E.inLinked = !0, Z;
      case ".":
        return m(x), x.next(), h(E, 9, ".");
      case ":":
        return m(x), x.next(), h(E, 10, ":");
      default:
        return C(x) ? (Z = h(E, 1, X(x)), E.braceNest = 0, E.inLinked = !1, Z) : k(x, E) || S(x, E) ? (m(x), Q(x, E)) : w(x, E) ? (m(x), h(E, 12, ce(x))) : P(x, E) ? (m(x), T === "{" ? K(x, E) || Z : h(E, 11, M(x))) : (F === 8 && d(He.INVALID_LINKED_FORMAT, o(), 0), E.braceNest = 0, E.inLinked = !1, ue(x, E))
    }
  }

  function ue(x, E) {
    let F = {
      type: 14
    };
    if (E.braceNest > 0) return K(x, E) || f(E);
    if (E.inLinked) return Q(x, E) || f(E);
    switch (x.currentChar()) {
      case "{":
        return K(x, E) || f(E);
      case "}":
        return d(He.UNBALANCED_CLOSING_BRACE, o(), 0), x.next(), h(E, 3, "}");
      case "@":
        return Q(x, E) || f(E);
      default:
        if (C(x)) return F = h(E, 1, X(x)), E.braceNest = 0, E.inLinked = !1, F;
        const {
          isModulo: T, hasSpace: he
        } = R(x);
        if (T) return he ? h(E, 0, $(x)) : h(E, 4, oe(x));
        if (N(x)) return h(E, 0, $(x));
        break
    }
    return F
  }

  function De() {
    const {
      currentType: x,
      offset: E,
      startLoc: F,
      endLoc: Z
    } = l;
    return l.lastType = x, l.lastOffset = E, l.lastStartLoc = F, l.lastEndLoc = Z, l.offset = i(), l.startLoc = o(), n.currentChar() === ai ? h(l, 14) : ue(n, l)
  }
  return {
    nextToken: De,
    currentOffset: i,
    currentPosition: o,
    context: c
  }
}
const Sx = "parser",
  Tx = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function Px(r, e, t) {
  switch (r) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const n = parseInt(e || t, 16);
      return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�"
    }
  }
}

function Lx(r = {}) {
  const e = r.location !== !1,
    {
      onError: t
    } = r;

  function n(g, y, b, v, ...D) {
    const k = g.currentPosition();
    if (k.offset += v, k.column += v, t) {
      const w = e ? ff(b, k) : null,
        S = Fc(y, w, {
          domain: Sx,
          args: D
        });
      t(S)
    }
  }

  function i(g, y, b) {
    const v = {
      type: g
    };
    return e && (v.start = y, v.end = y, v.loc = {
      start: b,
      end: b
    }), v
  }

  function o(g, y, b, v) {
    v && (g.type = v), e && (g.end = y, g.loc && (g.loc.end = b))
  }

  function s(g, y) {
    const b = g.context(),
      v = i(3, b.offset, b.startLoc);
    return v.value = y, o(v, g.currentOffset(), g.currentPosition()), v
  }

  function a(g, y) {
    const b = g.context(),
      {
        lastOffset: v,
        lastStartLoc: D
      } = b,
      k = i(5, v, D);
    return k.index = parseInt(y, 10), g.nextToken(), o(k, g.currentOffset(), g.currentPosition()), k
  }

  function l(g, y) {
    const b = g.context(),
      {
        lastOffset: v,
        lastStartLoc: D
      } = b,
      k = i(4, v, D);
    return k.key = y, g.nextToken(), o(k, g.currentOffset(), g.currentPosition()), k
  }

  function c(g, y) {
    const b = g.context(),
      {
        lastOffset: v,
        lastStartLoc: D
      } = b,
      k = i(9, v, D);
    return k.value = y.replace(Tx, Px), g.nextToken(), o(k, g.currentOffset(), g.currentPosition()), k
  }

  function u(g) {
    const y = g.nextToken(),
      b = g.context(),
      {
        lastOffset: v,
        lastStartLoc: D
      } = b,
      k = i(8, v, D);
    return y.type !== 12 ? (n(g, He.UNEXPECTED_EMPTY_LINKED_MODIFIER, b.lastStartLoc, 0), k.value = "", o(k, v, D), {
      nextConsumeToken: y,
      node: k
    }) : (y.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, mn(y)), k.value = y.value || "", o(k, g.currentOffset(), g.currentPosition()), {
      node: k
    })
  }

  function d(g, y) {
    const b = g.context(),
      v = i(7, b.offset, b.startLoc);
    return v.value = y, o(v, g.currentOffset(), g.currentPosition()), v
  }

  function h(g) {
    const y = g.context(),
      b = i(6, y.offset, y.startLoc);
    let v = g.nextToken();
    if (v.type === 9) {
      const D = u(g);
      b.modifier = D.node, v = D.nextConsumeToken || g.nextToken()
    }
    switch (v.type !== 10 && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(v)), v = g.nextToken(), v.type === 2 && (v = g.nextToken()), v.type) {
      case 11:
        v.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(v)), b.key = d(g, v.value || "");
        break;
      case 5:
        v.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(v)), b.key = l(g, v.value || "");
        break;
      case 6:
        v.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(v)), b.key = a(g, v.value || "");
        break;
      case 7:
        v.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(v)), b.key = c(g, v.value || "");
        break;
      default:
        n(g, He.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const D = g.context(),
          k = i(7, D.offset, D.startLoc);
        return k.value = "", o(k, D.offset, D.startLoc), b.key = k, o(b, D.offset, D.startLoc), {
          nextConsumeToken: v,
          node: b
        }
    }
    return o(b, g.currentOffset(), g.currentPosition()), {
      node: b
    }
  }

  function f(g) {
    const y = g.context(),
      b = y.currentType === 1 ? g.currentOffset() : y.offset,
      v = y.currentType === 1 ? y.endLoc : y.startLoc,
      D = i(2, b, v);
    D.items = [];
    let k = null;
    do {
      const P = k || g.nextToken();
      switch (k = null, P.type) {
        case 0:
          P.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(P)), D.items.push(s(g, P.value || ""));
          break;
        case 6:
          P.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(P)), D.items.push(a(g, P.value || ""));
          break;
        case 5:
          P.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(P)), D.items.push(l(g, P.value || ""));
          break;
        case 7:
          P.value == null && n(g, He.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, mn(P)), D.items.push(c(g, P.value || ""));
          break;
        case 8:
          const C = h(g);
          D.items.push(C.node), k = C.nextConsumeToken || null;
          break
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const w = y.currentType === 1 ? y.lastOffset : g.currentOffset(),
      S = y.currentType === 1 ? y.lastEndLoc : g.currentPosition();
    return o(D, w, S), D
  }

  function _(g, y, b, v) {
    const D = g.context();
    let k = v.items.length === 0;
    const w = i(1, y, b);
    w.cases = [], w.cases.push(v);
    do {
      const S = f(g);
      k || (k = S.items.length === 0), w.cases.push(S)
    } while (D.currentType !== 14);
    return k && n(g, He.MUST_HAVE_MESSAGES_IN_PLURAL, b, 0), o(w, g.currentOffset(), g.currentPosition()), w
  }

  function p(g) {
    const y = g.context(),
      {
        offset: b,
        startLoc: v
      } = y,
      D = f(g);
    return y.currentType === 14 ? D : _(g, b, v, D)
  }

  function m(g) {
    const y = kx(g, Ot({}, r)),
      b = y.context(),
      v = i(0, b.offset, b.startLoc);
    return e && v.loc && (v.loc.source = g), v.body = p(y), r.onCacheKey && (v.cacheKey = r.onCacheKey(g)), b.currentType !== 14 && n(y, He.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, g[b.offset] || ""), o(v, y.currentOffset(), y.currentPosition()), v
  }
  return {
    parse: m
  }
}

function mn(r) {
  if (r.type === 14) return "EOF";
  const e = (r.value || "").replace(/\r?\n/gu, "\\n");
  return e.length > 10 ? e.slice(0, 9) + "…" : e
}

function Ax(r, e = {}) {
  const t = {
    ast: r,
    helpers: new Set
  };
  return {
    context: () => t,
    helper: o => (t.helpers.add(o), o)
  }
}

function Tp(r, e) {
  for (let t = 0; t < r.length; t++) $h(r[t], e)
}

function $h(r, e) {
  switch (r.type) {
    case 1:
      Tp(r.cases, e), e.helper("plural");
      break;
    case 2:
      Tp(r.items, e);
      break;
    case 6:
      $h(r.key, e), e.helper("linked"), e.helper("type");
      break;
    case 5:
      e.helper("interpolate"), e.helper("list");
      break;
    case 4:
      e.helper("interpolate"), e.helper("named");
      break
  }
}

function Rx(r, e = {}) {
  const t = Ax(r);
  t.helper("normalize"), r.body && $h(r.body, t);
  const n = t.context();
  r.helpers = Array.from(n.helpers)
}

function Ox(r) {
  const e = r.body;
  return e.type === 2 ? Pp(e) : e.cases.forEach(t => Pp(t)), r
}

function Pp(r) {
  if (r.items.length === 1) {
    const e = r.items[0];
    (e.type === 3 || e.type === 9) && (r.static = e.value, delete e.value)
  } else {
    const e = [];
    for (let t = 0; t < r.items.length; t++) {
      const n = r.items[t];
      if (!(n.type === 3 || n.type === 9) || n.value == null) break;
      e.push(n.value)
    }
    if (e.length === r.items.length) {
      r.static = Nh(e);
      for (let t = 0; t < r.items.length; t++) {
        const n = r.items[t];
        (n.type === 3 || n.type === 9) && delete n.value
      }
    }
  }
}

function Uo(r) {
  switch (r.t = r.type, r.type) {
    case 0:
      const e = r;
      Uo(e.body), e.b = e.body, delete e.body;
      break;
    case 1:
      const t = r,
        n = t.cases;
      for (let u = 0; u < n.length; u++) Uo(n[u]);
      t.c = n, delete t.cases;
      break;
    case 2:
      const i = r,
        o = i.items;
      for (let u = 0; u < o.length; u++) Uo(o[u]);
      i.i = o, delete i.items, i.static && (i.s = i.static, delete i.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const s = r;
      s.value && (s.v = s.value, delete s.value);
      break;
    case 6:
      const a = r;
      Uo(a.key), a.k = a.key, delete a.key, a.modifier && (Uo(a.modifier), a.m = a.modifier, delete a.modifier);
      break;
    case 5:
      const l = r;
      l.i = l.index, delete l.index;
      break;
    case 4:
      const c = r;
      c.k = c.key, delete c.key;
      break
  }
  delete r.type
}

function Fx(r, e) {
  const {
    sourceMap: t,
    filename: n,
    breakLineCode: i,
    needIndent: o
  } = e, s = e.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: o,
    indentLevel: 0
  };
  s && r.loc && (a.source = r.loc.source);
  const l = () => a;

  function c(m, g) {
    a.code += m
  }

  function u(m, g = !0) {
    const y = g ? i : "";
    c(o ? y + "  ".repeat(m) : y)
  }

  function d(m = !0) {
    const g = ++a.indentLevel;
    m && u(g)
  }

  function h(m = !0) {
    const g = --a.indentLevel;
    m && u(g)
  }

  function f() {
    u(a.indentLevel)
  }
  return {
    context: l,
    push: c,
    indent: d,
    deindent: h,
    newline: f,
    helper: m => `_${m}`,
    needIndent: () => a.needIndent
  }
}

function Mx(r, e) {
  const {
    helper: t
  } = r;
  r.push(`${t("linked")}(`), _s(r, e.key), e.modifier ? (r.push(", "), _s(r, e.modifier), r.push(", _type")) : r.push(", undefined, _type"), r.push(")")
}

function Nx(r, e) {
  const {
    helper: t,
    needIndent: n
  } = r;
  r.push(`${t("normalize")}([`), r.indent(n());
  const i = e.items.length;
  for (let o = 0; o < i && (_s(r, e.items[o]), o !== i - 1); o++) r.push(", ");
  r.deindent(n()), r.push("])")
}

function Ix(r, e) {
  const {
    helper: t,
    needIndent: n
  } = r;
  if (e.cases.length > 1) {
    r.push(`${t("plural")}([`), r.indent(n());
    const i = e.cases.length;
    for (let o = 0; o < i && (_s(r, e.cases[o]), o !== i - 1); o++) r.push(", ");
    r.deindent(n()), r.push("])")
  }
}

function $x(r, e) {
  e.body ? _s(r, e.body) : r.push("null")
}

function _s(r, e) {
  const {
    helper: t
  } = r;
  switch (e.type) {
    case 0:
      $x(r, e);
      break;
    case 1:
      Ix(r, e);
      break;
    case 2:
      Nx(r, e);
      break;
    case 6:
      Mx(r, e);
      break;
    case 8:
      r.push(JSON.stringify(e.value), e);
      break;
    case 7:
      r.push(JSON.stringify(e.value), e);
      break;
    case 5:
      r.push(`${t("interpolate")}(${t("list")}(${e.index}))`, e);
      break;
    case 4:
      r.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`, e);
      break;
    case 9:
      r.push(JSON.stringify(e.value), e);
      break;
    case 3:
      r.push(JSON.stringify(e.value), e);
      break
  }
}
const Bx = (r, e = {}) => {
  const t = le(e.mode) ? e.mode : "normal",
    n = le(e.filename) ? e.filename : "message.intl",
    i = !!e.sourceMap,
    o = e.breakLineCode != null ? e.breakLineCode : t === "arrow" ? ";" : `
`,
    s = e.needIndent ? e.needIndent : t !== "arrow",
    a = r.helpers || [],
    l = Fx(r, {
      mode: t,
      filename: n,
      sourceMap: i,
      breakLineCode: o,
      needIndent: s
    });
  l.push(t === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), a.length > 0 && (l.push(`const { ${Nh(a.map(d=>`${d}: _${d}`),", ")} } = ctx`), l.newline()), l.push("return "), _s(l, r), l.deindent(s), l.push("}"), delete r.helpers;
  const {
    code: c,
    map: u
  } = l.context();
  return {
    ast: r,
    code: c,
    map: u ? u.toJSON() : void 0
  }
};

function Vx(r, e = {}) {
  const t = Ot({}, e),
    n = !!t.jit,
    i = !!t.minify,
    o = t.optimize == null ? !0 : t.optimize,
    a = Lx(t).parse(r);
  return n ? (o && Ox(a), i && Uo(a), {
    ast: a,
    code: ""
  }) : (Rx(a, t), Bx(a, t))
}
/*!
 * core-base v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
function Hx() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Mh().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Ni = [];
Ni[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
};
Ni[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
};
Ni[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
};
Ni[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
};
Ni[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
};
Ni[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
};
Ni[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const Ux = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function jx(r) {
  return Ux.test(r)
}

function Wx(r) {
  const e = r.charCodeAt(0),
    t = r.charCodeAt(r.length - 1);
  return e === t && (e === 34 || e === 39) ? r.slice(1, -1) : r
}

function Xx(r) {
  if (r == null) return "o";
  switch (r.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return r;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w"
  }
  return "i"
}

function Yx(r) {
  const e = r.trim();
  return r.charAt(0) === "0" && isNaN(parseInt(r)) ? !1 : jx(e) ? Wx(e) : "*" + e
}

function zx(r) {
  const e = [];
  let t = -1,
    n = 0,
    i = 0,
    o, s, a, l, c, u, d;
  const h = [];
  h[0] = () => {
    s === void 0 ? s = a : s += a
  }, h[1] = () => {
    s !== void 0 && (e.push(s), s = void 0)
  }, h[2] = () => {
    h[0](), i++
  }, h[3] = () => {
    if (i > 0) i--, n = 4, h[0]();
    else {
      if (i = 0, s === void 0 || (s = Yx(s), s === !1)) return !1;
      h[1]()
    }
  };

  function f() {
    const _ = r[t + 1];
    if (n === 5 && _ === "'" || n === 6 && _ === '"') return t++, a = "\\" + _, h[0](), !0
  }
  for (; n !== null;)
    if (t++, o = r[t], !(o === "\\" && f())) {
      if (l = Xx(o), d = Ni[n], c = d[l] || d.l || 8, c === 8 || (n = c[0], c[1] !== void 0 && (u = h[c[1]], u && (a = o, u() === !1)))) return;
      if (n === 7) return e
    }
}
const Lp = new Map;

function Gx(r, e) {
  return Be(r) ? r[e] : null
}

function qx(r, e) {
  if (!Be(r)) return null;
  let t = Lp.get(e);
  if (t || (t = zx(e), t && Lp.set(e, t)), !t) return null;
  const n = t.length;
  let i = r,
    o = 0;
  for (; o < n;) {
    const s = i[t[o]];
    if (s === void 0 || Ze(i)) return null;
    i = s, o++
  }
  return i
}
const Kx = r => r,
  Qx = r => "",
  Jx = "text",
  Zx = r => r.length === 0 ? "" : Nh(r),
  eC = gx;

function Ap(r, e) {
  return r = Math.abs(r), e === 2 ? r ? r > 1 ? 1 : 0 : 1 : r ? Math.min(r, 2) : 0
}

function tC(r) {
  const e = Rt(r.pluralIndex) ? r.pluralIndex : -1;
  return r.named && (Rt(r.named.count) || Rt(r.named.n)) ? Rt(r.named.count) ? r.named.count : Rt(r.named.n) ? r.named.n : e : e
}

function rC(r, e) {
  e.count || (e.count = r), e.n || (e.n = r)
}

function nC(r = {}) {
  const e = r.locale,
    t = tC(r),
    n = Be(r.pluralRules) && le(e) && Ze(r.pluralRules[e]) ? r.pluralRules[e] : Ap,
    i = Be(r.pluralRules) && le(e) && Ze(r.pluralRules[e]) ? Ap : void 0,
    o = g => g[n(t, g.length, i)],
    s = r.list || [],
    a = g => s[g],
    l = r.named || {};
  Rt(r.pluralIndex) && rC(t, l);
  const c = g => l[g];

  function u(g) {
    const y = Ze(r.messages) ? r.messages(g) : Be(r.messages) ? r.messages[g] : !1;
    return y || (r.parent ? r.parent.message(g) : Qx)
  }
  const d = g => r.modifiers ? r.modifiers[g] : Kx,
    h = Ne(r.processor) && Ze(r.processor.normalize) ? r.processor.normalize : Zx,
    f = Ne(r.processor) && Ze(r.processor.interpolate) ? r.processor.interpolate : eC,
    _ = Ne(r.processor) && le(r.processor.type) ? r.processor.type : Jx,
    m = {
      list: a,
      named: c,
      plural: o,
      linked: (g, ...y) => {
        const [b, v] = y;
        let D = "text",
          k = "";
        y.length === 1 ? Be(b) ? (k = b.modifier || k, D = b.type || D) : le(b) && (k = b || k) : y.length === 2 && (le(b) && (k = b || k), le(v) && (D = v || D));
        const w = u(g)(m),
          S = D === "vnode" && xt(w) && k ? w[0] : w;
        return k ? d(k)(S, D) : S
      },
      message: u,
      type: _,
      interpolate: f,
      normalize: h,
      values: Ot({}, s, l)
    };
  return m
}
let Ea = null;

function iC(r) {
  Ea = r
}

function oC(r, e, t) {
  Ea && Ea.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: r,
    version: e,
    meta: t
  })
}
const sC = aC("function:translate");

function aC(r) {
  return e => Ea && Ea.emit(r, e)
}
const lC = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
  },
  Wg = He.__EXTEND_POINT__,
  Vi = Ih(Wg),
  xn = {
    INVALID_ARGUMENT: Wg,
    INVALID_DATE_ARGUMENT: Vi(),
    INVALID_ISO_DATE_ARGUMENT: Vi(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Vi(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Vi(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Vi(),
    NOT_SUPPORT_LOCALE_TYPE: Vi(),
    __EXTEND_POINT__: Vi()
  };

function jn(r) {
  return Fc(r, null, void 0)
}

function Bh(r, e) {
  return e.locale != null ? Rp(e.locale) : Rp(r.locale)
}
let au;

function Rp(r) {
  if (le(r)) return r;
  if (Ze(r)) {
    if (r.resolvedOnce && au != null) return au;
    if (r.constructor.name === "Function") {
      const e = r();
      if (_x(e)) throw jn(xn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return au = e
    } else throw jn(xn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw jn(xn.NOT_SUPPORT_LOCALE_TYPE)
}

function cC(r, e, t) {
  return [...new Set([t, ...xt(e) ? e : Be(e) ? Object.keys(e) : le(e) ? [e] : [t]])]
}

function Xg(r, e, t) {
  const n = le(t) ? t : rc,
    i = r;
  i.__localeChainCache || (i.__localeChainCache = new Map);
  let o = i.__localeChainCache.get(n);
  if (!o) {
    o = [];
    let s = [t];
    for (; xt(s);) s = Op(o, s, e);
    const a = xt(e) || !Ne(e) ? e : e.default ? e.default : null;
    s = le(a) ? [a] : a, xt(s) && Op(o, s, !1), i.__localeChainCache.set(n, o)
  }
  return o
}

function Op(r, e, t) {
  let n = !0;
  for (let i = 0; i < e.length && ut(n); i++) {
    const o = e[i];
    le(o) && (n = uC(r, e[i], t))
  }
  return n
}

function uC(r, e, t) {
  let n;
  const i = e.split("-");
  do {
    const o = i.join("-");
    n = fC(r, o, t), i.splice(-1, 1)
  } while (i.length && n === !0);
  return n
}

function fC(r, e, t) {
  let n = !1;
  if (!r.includes(e) && (n = !0, e)) {
    n = e[e.length - 1] !== "!";
    const i = e.replace(/!/g, "");
    r.push(i), (xt(t) || Ne(t)) && t[i] && (n = t[i])
  }
  return n
}
const hC = "9.8.0",
  Mc = -1,
  rc = "en-US",
  Fp = "",
  Mp = r => `${r.charAt(0).toLocaleUpperCase()}${r.substr(1)}`;

function dC() {
  return {
    upper: (r, e) => e === "text" && le(r) ? r.toUpperCase() : e === "vnode" && Be(r) && "__v_isVNode" in r ? r.children.toUpperCase() : r,
    lower: (r, e) => e === "text" && le(r) ? r.toLowerCase() : e === "vnode" && Be(r) && "__v_isVNode" in r ? r.children.toLowerCase() : r,
    capitalize: (r, e) => e === "text" && le(r) ? Mp(r) : e === "vnode" && Be(r) && "__v_isVNode" in r ? Mp(r.children) : r
  }
}
let Yg;

function pC(r) {
  Yg = r
}
let zg;

function _C(r) {
  zg = r
}
let Gg;

function gC(r) {
  Gg = r
}
let qg = null;
const mC = r => {
    qg = r
  },
  yC = () => qg;
let Kg = null;
const Np = r => {
    Kg = r
  },
  bC = () => Kg;
let Ip = 0;

function vC(r = {}) {
  const e = Ze(r.onWarn) ? r.onWarn : mx,
    t = le(r.version) ? r.version : hC,
    n = le(r.locale) || Ze(r.locale) ? r.locale : rc,
    i = Ze(n) ? rc : n,
    o = xt(r.fallbackLocale) || Ne(r.fallbackLocale) || le(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i,
    s = Ne(r.messages) ? r.messages : {
      [i]: {}
    },
    a = Ne(r.datetimeFormats) ? r.datetimeFormats : {
      [i]: {}
    },
    l = Ne(r.numberFormats) ? r.numberFormats : {
      [i]: {}
    },
    c = Ot({}, r.modifiers || {}, dC()),
    u = r.pluralRules || {},
    d = Ze(r.missing) ? r.missing : null,
    h = ut(r.missingWarn) || tc(r.missingWarn) ? r.missingWarn : !0,
    f = ut(r.fallbackWarn) || tc(r.fallbackWarn) ? r.fallbackWarn : !0,
    _ = !!r.fallbackFormat,
    p = !!r.unresolving,
    m = Ze(r.postTranslation) ? r.postTranslation : null,
    g = Ne(r.processor) ? r.processor : null,
    y = ut(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
    b = !!r.escapeParameter,
    v = Ze(r.messageCompiler) ? r.messageCompiler : Yg,
    D = Ze(r.messageResolver) ? r.messageResolver : zg || Gx,
    k = Ze(r.localeFallbacker) ? r.localeFallbacker : Gg || cC,
    w = Be(r.fallbackContext) ? r.fallbackContext : void 0,
    S = r,
    P = Be(S.__datetimeFormatters) ? S.__datetimeFormatters : new Map,
    C = Be(S.__numberFormatters) ? S.__numberFormatters : new Map,
    R = Be(S.__meta) ? S.__meta : {};
  Ip++;
  const N = {
    version: t,
    cid: Ip,
    locale: n,
    fallbackLocale: o,
    messages: s,
    modifiers: c,
    pluralRules: u,
    missing: d,
    missingWarn: h,
    fallbackWarn: f,
    fallbackFormat: _,
    unresolving: p,
    postTranslation: m,
    processor: g,
    warnHtmlMessage: y,
    escapeParameter: b,
    messageCompiler: v,
    messageResolver: D,
    localeFallbacker: k,
    fallbackContext: w,
    onWarn: e,
    __meta: R
  };
  return N.datetimeFormats = a, N.numberFormats = l, N.__datetimeFormatters = P, N.__numberFormatters = C, __INTLIFY_PROD_DEVTOOLS__ && oC(N, t, R), N
}

function Vh(r, e, t, n, i) {
  const {
    missing: o,
    onWarn: s
  } = r;
  if (o !== null) {
    const a = o(r, t, e, i);
    return le(a) ? a : e
  } else return e
}

function Os(r, e, t) {
  const n = r;
  n.__localeChainCache = new Map, r.localeFallbacker(r, t, e)
}

function lu(r) {
  return t => DC(t, r)
}

function DC(r, e) {
  const t = e.b || e.body;
  if ((t.t || t.type) === 1) {
    const n = t,
      i = n.c || n.cases;
    return r.plural(i.reduce((o, s) => [...o, $p(r, s)], []))
  } else return $p(r, t)
}

function $p(r, e) {
  const t = e.s || e.static;
  if (t) return r.type === "text" ? t : r.normalize([t]);
  {
    const n = (e.i || e.items).reduce((i, o) => [...i, hf(r, o)], []);
    return r.normalize(n)
  }
}

function hf(r, e) {
  const t = e.t || e.type;
  switch (t) {
    case 3:
      const n = e;
      return n.v || n.value;
    case 9:
      const i = e;
      return i.v || i.value;
    case 4:
      const o = e;
      return r.interpolate(r.named(o.k || o.key));
    case 5:
      const s = e;
      return r.interpolate(r.list(s.i != null ? s.i : s.index));
    case 6:
      const a = e,
        l = a.m || a.modifier;
      return r.linked(hf(r, a.k || a.key), l ? hf(r, l) : void 0, r.type);
    case 7:
      const c = e;
      return c.v || c.value;
    case 8:
      const u = e;
      return u.v || u.value;
    default:
      throw new Error(`unhandled node type on format message part: ${t}`)
  }
}
const wC = r => r;
let ll = Object.create(null);
const gs = r => Be(r) && (r.t === 0 || r.type === 0) && ("b" in r || "body" in r);

function xC(r, e = {}) {
  let t = !1;
  const n = e.onError || bx;
  return e.onError = i => {
    t = !0, n(i)
  }, {
    ...Vx(r, e),
    detectError: t
  }
}

function CC(r, e) {
  if (le(r)) {
    ut(e.warnHtmlMessage) && e.warnHtmlMessage;
    const n = (e.onCacheKey || wC)(r),
      i = ll[n];
    if (i) return i;
    const {
      ast: o,
      detectError: s
    } = xC(r, {
      ...e,
      location: !1,
      jit: !0
    }), a = lu(o);
    return s ? a : ll[n] = a
  } else {
    const t = r.cacheKey;
    if (t) {
      const n = ll[t];
      return n || (ll[t] = lu(r))
    } else return lu(r)
  }
}
const Bp = () => "",
  Wr = r => Ze(r);

function Vp(r, ...e) {
  const {
    fallbackFormat: t,
    postTranslation: n,
    unresolving: i,
    messageCompiler: o,
    fallbackLocale: s,
    messages: a
  } = r, [l, c] = df(...e), u = ut(c.missingWarn) ? c.missingWarn : r.missingWarn, d = ut(c.fallbackWarn) ? c.fallbackWarn : r.fallbackWarn, h = ut(c.escapeParameter) ? c.escapeParameter : r.escapeParameter, f = !!c.resolvedMessage, _ = le(c.default) || ut(c.default) ? ut(c.default) ? o ? l : () => l : c.default : t ? o ? l : () => l : "", p = t || _ !== "", m = Bh(r, c);
  h && EC(c);
  let [g, y, b] = f ? [l, m, a[m] || {}] : Qg(r, l, m, s, d, u), v = g, D = l;
  if (!f && !(le(v) || gs(v) || Wr(v)) && p && (v = _, D = v), !f && (!(le(v) || gs(v) || Wr(v)) || !le(y))) return i ? Mc : l;
  let k = !1;
  const w = () => {
      k = !0
    },
    S = Wr(v) ? v : Jg(r, l, y, v, D, w);
  if (k) return v;
  const P = TC(r, y, b, c),
    C = nC(P),
    R = kC(r, S, C),
    N = n ? n(R, l) : R;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const B = {
      timestamp: Date.now(),
      key: le(l) ? l : Wr(v) ? v.key : "",
      locale: y || (Wr(v) ? v.locale : ""),
      format: le(v) ? v : Wr(v) ? v.source : "",
      message: N
    };
    B.meta = Ot({}, r.__meta, yC() || {}), sC(B)
  }
  return N
}

function EC(r) {
  xt(r.list) ? r.list = r.list.map(e => le(e) ? kp(e) : e) : Be(r.named) && Object.keys(r.named).forEach(e => {
    le(r.named[e]) && (r.named[e] = kp(r.named[e]))
  })
}

function Qg(r, e, t, n, i, o) {
  const {
    messages: s,
    onWarn: a,
    messageResolver: l,
    localeFallbacker: c
  } = r, u = c(r, n, t);
  let d = {},
    h, f = null;
  const _ = "translate";
  for (let p = 0; p < u.length && (h = u[p], d = s[h] || {}, (f = l(d, e)) === null && (f = d[e]), !(le(f) || gs(f) || Wr(f))); p++) {
    const m = Vh(r, e, h, o, _);
    m !== e && (f = m)
  }
  return [f, h, d]
}

function Jg(r, e, t, n, i, o) {
  const {
    messageCompiler: s,
    warnHtmlMessage: a
  } = r;
  if (Wr(n)) {
    const c = n;
    return c.locale = c.locale || t, c.key = c.key || e, c
  }
  if (s == null) {
    const c = () => n;
    return c.locale = t, c.key = e, c
  }
  const l = s(n, SC(r, t, i, n, a, o));
  return l.locale = t, l.key = e, l.source = n, l
}

function kC(r, e, t) {
  return e(t)
}

function df(...r) {
  const [e, t, n] = r, i = {};
  if (!le(e) && !Rt(e) && !Wr(e) && !gs(e)) throw jn(xn.INVALID_ARGUMENT);
  const o = Rt(e) ? String(e) : (Wr(e), e);
  return Rt(t) ? i.plural = t : le(t) ? i.default = t : Ne(t) && !Oc(t) ? i.named = t : xt(t) && (i.list = t), Rt(n) ? i.plural = n : le(n) ? i.default = n : Ne(n) && Ot(i, n), [o, i]
}

function SC(r, e, t, n, i, o) {
  return {
    locale: e,
    key: t,
    warnHtmlMessage: i,
    onError: s => {
      throw o && o(s), s
    },
    onCacheKey: s => fx(e, t, s)
  }
}

function TC(r, e, t, n) {
  const {
    modifiers: i,
    pluralRules: o,
    messageResolver: s,
    fallbackLocale: a,
    fallbackWarn: l,
    missingWarn: c,
    fallbackContext: u
  } = r, h = {
    locale: e,
    modifiers: i,
    pluralRules: o,
    messages: f => {
      let _ = s(t, f);
      if (_ == null && u) {
        const [, , p] = Qg(u, f, e, a, l, c);
        _ = s(p, f)
      }
      if (le(_) || gs(_)) {
        let p = !1;
        const g = Jg(r, f, e, _, f, () => {
          p = !0
        });
        return p ? Bp : g
      } else return Wr(_) ? _ : Bp
    }
  };
  return r.processor && (h.processor = r.processor), n.list && (h.list = n.list), n.named && (h.named = n.named), Rt(n.plural) && (h.pluralIndex = n.plural), h
}

function Hp(r, ...e) {
  const {
    datetimeFormats: t,
    unresolving: n,
    fallbackLocale: i,
    onWarn: o,
    localeFallbacker: s
  } = r, {
    __datetimeFormatters: a
  } = r, [l, c, u, d] = pf(...e), h = ut(u.missingWarn) ? u.missingWarn : r.missingWarn;
  ut(u.fallbackWarn) ? u.fallbackWarn : r.fallbackWarn;
  const f = !!u.part,
    _ = Bh(r, u),
    p = s(r, i, _);
  if (!le(l) || l === "") return new Intl.DateTimeFormat(_, d).format(c);
  let m = {},
    g, y = null;
  const b = "datetime format";
  for (let k = 0; k < p.length && (g = p[k], m = t[g] || {}, y = m[l], !Ne(y)); k++) Vh(r, l, g, h, b);
  if (!Ne(y) || !le(g)) return n ? Mc : l;
  let v = `${g}__${l}`;
  Oc(d) || (v = `${v}__${JSON.stringify(d)}`);
  let D = a.get(v);
  return D || (D = new Intl.DateTimeFormat(g, Ot({}, y, d)), a.set(v, D)), f ? D.formatToParts(c) : D.format(c)
}
const Zg = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function pf(...r) {
  const [e, t, n, i] = r, o = {};
  let s = {},
    a;
  if (le(e)) {
    const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw jn(xn.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString()
    } catch {
      throw jn(xn.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (dx(e)) {
    if (isNaN(e.getTime())) throw jn(xn.INVALID_DATE_ARGUMENT);
    a = e
  } else if (Rt(e)) a = e;
  else throw jn(xn.INVALID_ARGUMENT);
  return le(t) ? o.key = t : Ne(t) && Object.keys(t).forEach(l => {
    Zg.includes(l) ? s[l] = t[l] : o[l] = t[l]
  }), le(n) ? o.locale = n : Ne(n) && (s = n), Ne(i) && (s = i), [o.key || "", a, o, s]
}

function Up(r, e, t) {
  const n = r;
  for (const i in t) {
    const o = `${e}__${i}`;
    n.__datetimeFormatters.has(o) && n.__datetimeFormatters.delete(o)
  }
}

function jp(r, ...e) {
  const {
    numberFormats: t,
    unresolving: n,
    fallbackLocale: i,
    onWarn: o,
    localeFallbacker: s
  } = r, {
    __numberFormatters: a
  } = r, [l, c, u, d] = _f(...e), h = ut(u.missingWarn) ? u.missingWarn : r.missingWarn;
  ut(u.fallbackWarn) ? u.fallbackWarn : r.fallbackWarn;
  const f = !!u.part,
    _ = Bh(r, u),
    p = s(r, i, _);
  if (!le(l) || l === "") return new Intl.NumberFormat(_, d).format(c);
  let m = {},
    g, y = null;
  const b = "number format";
  for (let k = 0; k < p.length && (g = p[k], m = t[g] || {}, y = m[l], !Ne(y)); k++) Vh(r, l, g, h, b);
  if (!Ne(y) || !le(g)) return n ? Mc : l;
  let v = `${g}__${l}`;
  Oc(d) || (v = `${v}__${JSON.stringify(d)}`);
  let D = a.get(v);
  return D || (D = new Intl.NumberFormat(g, Ot({}, y, d)), a.set(v, D)), f ? D.formatToParts(c) : D.format(c)
}
const em = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function _f(...r) {
  const [e, t, n, i] = r, o = {};
  let s = {};
  if (!Rt(e)) throw jn(xn.INVALID_ARGUMENT);
  const a = e;
  return le(t) ? o.key = t : Ne(t) && Object.keys(t).forEach(l => {
    em.includes(l) ? s[l] = t[l] : o[l] = t[l]
  }), le(n) ? o.locale = n : Ne(n) && (s = n), Ne(i) && (s = i), [o.key || "", a, o, s]
}

function Wp(r, e, t) {
  const n = r;
  for (const i in t) {
    const o = `${e}__${i}`;
    n.__numberFormatters.has(o) && n.__numberFormatters.delete(o)
  }
}
Hx();
/*!
 * vue-i18n v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const PC = "9.8.0";

function LC() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Mh().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const tm = lC.__EXTEND_POINT__,
  li = Ih(tm);
li(), li(), li(), li(), li(), li(), li(), li();
const rm = xn.__EXTEND_POINT__,
  gr = Ih(rm),
  Jr = {
    UNEXPECTED_RETURN_TYPE: rm,
    INVALID_ARGUMENT: gr(),
    MUST_BE_CALL_SETUP_TOP: gr(),
    NOT_INSTALLED: gr(),
    NOT_AVAILABLE_IN_LEGACY_MODE: gr(),
    REQUIRED_VALUE: gr(),
    INVALID_VALUE: gr(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: gr(),
    NOT_INSTALLED_WITH_PROVIDE: gr(),
    UNEXPECTED_ERROR: gr(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: gr(),
    BRIDGE_SUPPORT_VUE_2_ONLY: gr(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: gr(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: gr(),
    __EXTEND_POINT__: gr()
  };

function hn(r, ...e) {
  return Fc(r, null, void 0)
}
const gf = Mi("__translateVNode"),
  mf = Mi("__datetimeParts"),
  yf = Mi("__numberParts"),
  AC = Mi("__setPluralRules"),
  RC = Mi("__injectWithOption"),
  bf = Mi("__dispose");

function ka(r) {
  if (!Be(r)) return r;
  for (const e in r)
    if (Ca(r, e))
      if (!e.includes(".")) Be(r[e]) && ka(r[e]);
      else {
        const t = e.split("."),
          n = t.length - 1;
        let i = r,
          o = !1;
        for (let s = 0; s < n; s++) {
          if (t[s] in i || (i[t[s]] = {}), !Be(i[t[s]])) {
            o = !0;
            break
          }
          i = i[t[s]]
        }
        o || (i[t[n]] = r[e], delete r[e]), Be(i[t[n]]) && ka(i[t[n]])
      } return r
}

function nm(r, e) {
  const {
    messages: t,
    __i18n: n,
    messageResolver: i,
    flatJson: o
  } = e, s = Ne(t) ? t : xt(n) ? {} : {
    [r]: {}
  };
  if (xt(n) && n.forEach(a => {
      if ("locale" in a && "resource" in a) {
        const {
          locale: l,
          resource: c
        } = a;
        l ? (s[l] = s[l] || {}, Ei(c, s[l])) : Ei(c, s)
      } else le(a) && Ei(JSON.parse(a), s)
    }), i == null && o)
    for (const a in s) Ca(s, a) && ka(s[a]);
  return s
}

function im(r) {
  return r.type
}

function OC(r, e, t) {
  let n = Be(e.messages) ? e.messages : {};
  "__i18nGlobal" in t && (n = nm(r.locale.value, {
    messages: n,
    __i18n: t.__i18nGlobal
  }));
  const i = Object.keys(n);
  i.length && i.forEach(o => {
    r.mergeLocaleMessage(o, n[o])
  });
  {
    if (Be(e.datetimeFormats)) {
      const o = Object.keys(e.datetimeFormats);
      o.length && o.forEach(s => {
        r.mergeDateTimeFormat(s, e.datetimeFormats[s])
      })
    }
    if (Be(e.numberFormats)) {
      const o = Object.keys(e.numberFormats);
      o.length && o.forEach(s => {
        r.mergeNumberFormat(s, e.numberFormats[s])
      })
    }
  }
}

function Xp(r) {
  return Ye(h2, null, r, 0)
}
const Yp = "__INTLIFY_META__",
  zp = () => [],
  FC = () => !1;
let Gp = 0;

function qp(r) {
  return (e, t, n, i) => r(t, n, Ss() || void 0, i)
}
const MC = () => {
  const r = Ss();
  let e = null;
  return r && (e = im(r)[Yp]) ? {
    [Yp]: e
  } : null
};

function om(r = {}, e) {
  const {
    __root: t,
    __injectWithOption: n
  } = r, i = t === void 0, o = r.flatJson;
  let s = ut(r.inheritLocale) ? r.inheritLocale : !0;
  const a = we(t && s ? t.locale.value : le(r.locale) ? r.locale : rc),
    l = we(t && s ? t.fallbackLocale.value : le(r.fallbackLocale) || xt(r.fallbackLocale) || Ne(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : a.value),
    c = we(nm(a.value, r)),
    u = we(Ne(r.datetimeFormats) ? r.datetimeFormats : {
      [a.value]: {}
    }),
    d = we(Ne(r.numberFormats) ? r.numberFormats : {
      [a.value]: {}
    });
  let h = t ? t.missingWarn : ut(r.missingWarn) || tc(r.missingWarn) ? r.missingWarn : !0,
    f = t ? t.fallbackWarn : ut(r.fallbackWarn) || tc(r.fallbackWarn) ? r.fallbackWarn : !0,
    _ = t ? t.fallbackRoot : ut(r.fallbackRoot) ? r.fallbackRoot : !0,
    p = !!r.fallbackFormat,
    m = Ze(r.missing) ? r.missing : null,
    g = Ze(r.missing) ? qp(r.missing) : null,
    y = Ze(r.postTranslation) ? r.postTranslation : null,
    b = t ? t.warnHtmlMessage : ut(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
    v = !!r.escapeParameter;
  const D = t ? t.modifiers : Ne(r.modifiers) ? r.modifiers : {};
  let k = r.pluralRules || t && t.pluralRules,
    w;
  w = (() => {
    i && Np(null);
    const j = {
      version: PC,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: D,
      pluralRules: k,
      missing: g === null ? void 0 : g,
      missingWarn: h,
      fallbackWarn: f,
      fallbackFormat: p,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: b,
      escapeParameter: v,
      messageResolver: r.messageResolver,
      messageCompiler: r.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    j.datetimeFormats = u.value, j.numberFormats = d.value, j.__datetimeFormatters = Ne(w) ? w.__datetimeFormatters : void 0, j.__numberFormatters = Ne(w) ? w.__numberFormatters : void 0;
    const G = vC(j);
    return i && Np(G), G
  })(), Os(w, a.value, l.value);

  function P() {
    return [a.value, l.value, c.value, u.value, d.value]
  }
  const C = Se({
      get: () => a.value,
      set: j => {
        a.value = j, w.locale = a.value
      }
    }),
    R = Se({
      get: () => l.value,
      set: j => {
        l.value = j, w.fallbackLocale = l.value, Os(w, a.value, j)
      }
    }),
    N = Se(() => c.value),
    B = Se(() => u.value),
    z = Se(() => d.value);

  function U() {
    return Ze(y) ? y : null
  }

  function V(j) {
    y = j, w.postTranslation = j
  }

  function Y() {
    return m
  }

  function oe(j) {
    j !== null && (g = qp(j)), m = j, w.missing = g
  }
  const $ = (j, G, me, Ee, ot, hr) => {
    P();
    let bt;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
      i || (w.fallbackContext = t ? bC() : void 0),
      bt = j(w)
    }
    finally {
      __INTLIFY_PROD_DEVTOOLS__,
      i || (w.fallbackContext = void 0)
    }
    if (me !== "translate exists" && Rt(bt) && bt === Mc || me === "translate exists" && !bt) {
      const [dr, Mt] = G();
      return t && _ ? Ee(t) : ot(dr)
    } else {
      if (hr(bt)) return bt;
      throw hn(Jr.UNEXPECTED_RETURN_TYPE)
    }
  };

  function L(...j) {
    return $(G => Reflect.apply(Vp, null, [G, ...j]), () => df(...j), "translate", G => Reflect.apply(G.t, G, [...j]), G => G, G => le(G))
  }

  function ee(...j) {
    const [G, me, Ee] = j;
    if (Ee && !Be(Ee)) throw hn(Jr.INVALID_ARGUMENT);
    return L(G, me, Ot({
      resolvedMessage: !0
    }, Ee || {}))
  }

  function ie(...j) {
    return $(G => Reflect.apply(Hp, null, [G, ...j]), () => pf(...j), "datetime format", G => Reflect.apply(G.d, G, [...j]), () => Fp, G => le(G))
  }

  function be(...j) {
    return $(G => Reflect.apply(jp, null, [G, ...j]), () => _f(...j), "number format", G => Reflect.apply(G.n, G, [...j]), () => Fp, G => le(G))
  }

  function te(j) {
    return j.map(G => le(G) || Rt(G) || ut(G) ? Xp(String(G)) : G)
  }
  const ce = {
    normalize: te,
    interpolate: j => j,
    type: "vnode"
  };

  function M(...j) {
    return $(G => {
      let me;
      const Ee = G;
      try {
        Ee.processor = ce, me = Reflect.apply(Vp, null, [Ee, ...j])
      } finally {
        Ee.processor = null
      }
      return me
    }, () => df(...j), "translate", G => G[gf](...j), G => [Xp(G)], G => xt(G))
  }

  function X(...j) {
    return $(G => Reflect.apply(jp, null, [G, ...j]), () => _f(...j), "number format", G => G[yf](...j), zp, G => le(G) || xt(G))
  }

  function K(...j) {
    return $(G => Reflect.apply(Hp, null, [G, ...j]), () => pf(...j), "datetime format", G => G[mf](...j), zp, G => le(G) || xt(G))
  }

  function Q(j) {
    k = j, w.pluralRules = k
  }

  function ue(j, G) {
    return $(() => {
      if (!j) return !1;
      const me = le(G) ? G : a.value,
        Ee = E(me),
        ot = w.messageResolver(Ee, j);
      return gs(ot) || Wr(ot) || le(ot)
    }, () => [j], "translate exists", me => Reflect.apply(me.te, me, [j, G]), FC, me => ut(me))
  }

  function De(j) {
    let G = null;
    const me = Xg(w, l.value, a.value);
    for (let Ee = 0; Ee < me.length; Ee++) {
      const ot = c.value[me[Ee]] || {},
        hr = w.messageResolver(ot, j);
      if (hr != null) {
        G = hr;
        break
      }
    }
    return G
  }

  function x(j) {
    const G = De(j);
    return G ?? (t ? t.tm(j) || {} : {})
  }

  function E(j) {
    return c.value[j] || {}
  }

  function F(j, G) {
    if (o) {
      const me = {
        [j]: G
      };
      for (const Ee in me) Ca(me, Ee) && ka(me[Ee]);
      G = me[j]
    }
    c.value[j] = G, w.messages = c.value
  }

  function Z(j, G) {
    c.value[j] = c.value[j] || {};
    const me = {
      [j]: G
    };
    for (const Ee in me) Ca(me, Ee) && ka(me[Ee]);
    G = me[j], Ei(G, c.value[j]), w.messages = c.value
  }

  function T(j) {
    return u.value[j] || {}
  }

  function he(j, G) {
    u.value[j] = G, w.datetimeFormats = u.value, Up(w, j, G)
  }

  function Qe(j, G) {
    u.value[j] = Ot(u.value[j] || {}, G), w.datetimeFormats = u.value, Up(w, j, G)
  }

  function tt(j) {
    return d.value[j] || {}
  }

  function de(j, G) {
    d.value[j] = G, w.numberFormats = d.value, Wp(w, j, G)
  }

  function Je(j, G) {
    d.value[j] = Ot(d.value[j] || {}, G), w.numberFormats = d.value, Wp(w, j, G)
  }
  Gp++, t && uf && (Ir(t.locale, j => {
    s && (a.value = j, w.locale = j, Os(w, a.value, l.value))
  }), Ir(t.fallbackLocale, j => {
    s && (l.value = j, w.fallbackLocale = j, Os(w, a.value, l.value))
  }));
  const je = {
    id: Gp,
    locale: C,
    fallbackLocale: R,
    get inheritLocale() {
      return s
    },
    set inheritLocale(j) {
      s = j, j && t && (a.value = t.locale.value, l.value = t.fallbackLocale.value, Os(w, a.value, l.value))
    },
    get availableLocales() {
      return Object.keys(c.value).sort()
    },
    messages: N,
    get modifiers() {
      return D
    },
    get pluralRules() {
      return k || {}
    },
    get isGlobal() {
      return i
    },
    get missingWarn() {
      return h
    },
    set missingWarn(j) {
      h = j, w.missingWarn = h
    },
    get fallbackWarn() {
      return f
    },
    set fallbackWarn(j) {
      f = j, w.fallbackWarn = f
    },
    get fallbackRoot() {
      return _
    },
    set fallbackRoot(j) {
      _ = j
    },
    get fallbackFormat() {
      return p
    },
    set fallbackFormat(j) {
      p = j, w.fallbackFormat = p
    },
    get warnHtmlMessage() {
      return b
    },
    set warnHtmlMessage(j) {
      b = j, w.warnHtmlMessage = j
    },
    get escapeParameter() {
      return v
    },
    set escapeParameter(j) {
      v = j, w.escapeParameter = j
    },
    t: L,
    getLocaleMessage: E,
    setLocaleMessage: F,
    mergeLocaleMessage: Z,
    getPostTranslationHandler: U,
    setPostTranslationHandler: V,
    getMissingHandler: Y,
    setMissingHandler: oe,
    [AC]: Q
  };
  return je.datetimeFormats = B, je.numberFormats = z, je.rt = ee, je.te = ue, je.tm = x, je.d = ie, je.n = be, je.getDateTimeFormat = T, je.setDateTimeFormat = he, je.mergeDateTimeFormat = Qe, je.getNumberFormat = tt, je.setNumberFormat = de, je.mergeNumberFormat = Je, je[RC] = n, je[gf] = M, je[mf] = K, je[yf] = X, je
}
const Hh = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: r => r === "parent" || r === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};

function NC({
  slots: r
}, e) {
  return e.length === 1 && e[0] === "default" ? (r.default ? r.default() : []).reduce((n, i) => [...n, ...i.type === ho ? i.children : [i]], []) : e.reduce((t, n) => {
    const i = r[n];
    return i && (t[n] = i()), t
  }, {})
}

function sm(r) {
  return ho
}
const IC = et({
    name: "i18n-t",
    props: Ot({
      keypath: {
        type: String,
        required: !0
      },
      plural: {
        type: [Number, String],
        validator: r => Rt(r) || !isNaN(r)
      }
    }, Hh),
    setup(r, e) {
      const {
        slots: t,
        attrs: n
      } = e, i = r.i18n || ii({
        useScope: r.scope,
        __useComponent: !0
      });
      return () => {
        const o = Object.keys(t).filter(d => d !== "_"),
          s = {};
        r.locale && (s.locale = r.locale), r.plural !== void 0 && (s.plural = le(r.plural) ? +r.plural : r.plural);
        const a = NC(e, o),
          l = i[gf](r.keypath, a, s),
          c = Ot({}, n),
          u = le(r.tag) || Be(r.tag) ? r.tag : sm();
        return qt(u, c, l)
      }
    }
  }),
  Kp = IC;

function $C(r) {
  return xt(r) && !le(r[0])
}

function am(r, e, t, n) {
  const {
    slots: i,
    attrs: o
  } = e;
  return () => {
    const s = {
      part: !0
    };
    let a = {};
    r.locale && (s.locale = r.locale), le(r.format) ? s.key = r.format : Be(r.format) && (le(r.format.key) && (s.key = r.format.key), a = Object.keys(r.format).reduce((h, f) => t.includes(f) ? Ot({}, h, {
      [f]: r.format[f]
    }) : h, {}));
    const l = n(r.value, s, a);
    let c = [s.key];
    xt(l) ? c = l.map((h, f) => {
      const _ = i[h.type],
        p = _ ? _({
          [h.type]: h.value,
          index: f,
          parts: l
        }) : [h.value];
      return $C(p) && (p[0].key = `${h.type}-${f}`), p
    }) : le(l) && (c = [l]);
    const u = Ot({}, o),
      d = le(r.tag) || Be(r.tag) ? r.tag : sm();
    return qt(d, u, c)
  }
}
const BC = et({
    name: "i18n-n",
    props: Ot({
      value: {
        type: Number,
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, Hh),
    setup(r, e) {
      const t = r.i18n || ii({
        useScope: "parent",
        __useComponent: !0
      });
      return am(r, e, em, (...n) => t[yf](...n))
    }
  }),
  Qp = BC,
  VC = et({
    name: "i18n-d",
    props: Ot({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, Hh),
    setup(r, e) {
      const t = r.i18n || ii({
        useScope: "parent",
        __useComponent: !0
      });
      return am(r, e, Zg, (...n) => t[mf](...n))
    }
  }),
  Jp = VC;

function HC(r, e) {
  const t = r;
  if (r.mode === "composition") return t.__getInstance(e) || r.global;
  {
    const n = t.__getInstance(e);
    return n != null ? n.__composer : r.global.__composer
  }
}

function UC(r) {
  const e = s => {
    const {
      instance: a,
      modifiers: l,
      value: c
    } = s;
    if (!a || !a.$) throw hn(Jr.UNEXPECTED_ERROR);
    const u = HC(r, a.$),
      d = Zp(c);
    return [Reflect.apply(u.t, u, [...e_(d)]), u]
  };
  return {
    created: (s, a) => {
      const [l, c] = e(a);
      uf && r.global === c && (s.__i18nWatcher = Ir(c.locale, () => {
        a.instance && a.instance.$forceUpdate()
      })), s.__composer = c, s.textContent = l
    },
    unmounted: s => {
      uf && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer)
    },
    beforeUpdate: (s, {
      value: a
    }) => {
      if (s.__composer) {
        const l = s.__composer,
          c = Zp(a);
        s.textContent = Reflect.apply(l.t, l, [...e_(c)])
      }
    },
    getSSRProps: s => {
      const [a] = e(s);
      return {
        textContent: a
      }
    }
  }
}

function Zp(r) {
  if (le(r)) return {
    path: r
  };
  if (Ne(r)) {
    if (!("path" in r)) throw hn(Jr.REQUIRED_VALUE, "path");
    return r
  } else throw hn(Jr.INVALID_VALUE)
}

function e_(r) {
  const {
    path: e,
    locale: t,
    args: n,
    choice: i,
    plural: o
  } = r, s = {}, a = n || {};
  return le(t) && (s.locale = t), Rt(i) && (s.plural = i), Rt(o) && (s.plural = o), [e, a, s]
}

function jC(r, e, ...t) {
  const n = Ne(t[0]) ? t[0] : {},
    i = !!n.useI18nComponentName;
  (ut(n.globalInstall) ? n.globalInstall : !0) && ([i ? "i18n" : Kp.name, "I18nT"].forEach(s => r.component(s, Kp)), [Qp.name, "I18nN"].forEach(s => r.component(s, Qp)), [Jp.name, "I18nD"].forEach(s => r.component(s, Jp))), r.directive("t", UC(e))
}
const WC = Mi("global-vue-i18n");

function XC(r = {}, e) {
  const t = ut(r.globalInjection) ? r.globalInjection : !0,
    n = !0,
    i = new Map,
    [o, s] = YC(r),
    a = Mi("");

  function l(d) {
    return i.get(d) || null
  }

  function c(d, h) {
    i.set(d, h)
  }

  function u(d) {
    i.delete(d)
  } {
    const d = {
      get mode() {
        return "composition"
      },
      get allowComposition() {
        return n
      },
      async install(h, ...f) {
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, d), Ne(f[0])) {
          const m = f[0];
          d.__composerExtend = m.__composerExtend, d.__vueI18nExtend = m.__vueI18nExtend
        }
        let _ = null;
        t && (_ = e3(h, d.global)), jC(h, d, ...f);
        const p = h.unmount;
        h.unmount = () => {
          _ && _(), d.dispose(), p()
        }
      },
      get global() {
        return s
      },
      dispose() {
        o.stop()
      },
      __instances: i,
      __getInstance: l,
      __setInstance: c,
      __deleteInstance: u
    };
    return d
  }
}

function ii(r = {}) {
  const e = Ss();
  if (e == null) throw hn(Jr.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__) throw hn(Jr.NOT_INSTALLED);
  const t = zC(e),
    n = qC(t),
    i = im(e),
    o = GC(r, i);
  if (o === "global") return OC(n, r, i), n;
  if (o === "parent") {
    let l = KC(t, e, r.__useComponent);
    return l == null && (l = n), l
  }
  const s = t;
  let a = s.__getInstance(e);
  if (a == null) {
    const l = Ot({}, r);
    "__i18n" in i && (l.__i18n = i.__i18n), n && (l.__root = n), a = om(l), s.__composerExtend && (a[bf] = s.__composerExtend(a)), JC(s, e, a), s.__setInstance(e, a)
  }
  return a
}

function YC(r, e, t) {
  const n = ja();
  {
    const i = n.run(() => om(r));
    if (i == null) throw hn(Jr.UNEXPECTED_ERROR);
    return [n, i]
  }
}

function zC(r) {
  {
    const e = fr(r.isCE ? WC : r.appContext.app.__VUE_I18N_SYMBOL__);
    if (!e) throw hn(r.isCE ? Jr.NOT_INSTALLED_WITH_PROVIDE : Jr.UNEXPECTED_ERROR);
    return e
  }
}

function GC(r, e) {
  return Oc(r) ? "__i18n" in e ? "local" : "global" : r.useScope ? r.useScope : "local"
}

function qC(r) {
  return r.mode === "composition" ? r.global : r.global.__composer
}

function KC(r, e, t = !1) {
  let n = null;
  const i = e.root;
  let o = QC(e, t);
  for (; o != null;) {
    const s = r;
    if (r.mode === "composition" && (n = s.__getInstance(o)), n != null || i === o) break;
    o = o.parent
  }
  return n
}

function QC(r, e = !1) {
  return r == null ? null : e && r.vnode.ctx || r.parent
}

function JC(r, e, t) {
  Pn(() => {}, e), va(() => {
    const n = t;
    r.__deleteInstance(e);
    const i = n[bf];
    i && (i(), delete n[bf])
  }, e)
}
const ZC = ["locale", "fallbackLocale", "availableLocales"],
  t_ = ["t", "rt", "d", "n", "tm", "te"];

function e3(r, e) {
  const t = Object.create(null);
  return ZC.forEach(i => {
    const o = Object.getOwnPropertyDescriptor(e, i);
    if (!o) throw hn(Jr.UNEXPECTED_ERROR);
    const s = At(o.value) ? {
      get() {
        return o.value.value
      },
      set(a) {
        o.value.value = a
      }
    } : {
      get() {
        return o.get && o.get()
      }
    };
    Object.defineProperty(t, i, s)
  }), r.config.globalProperties.$i18n = t, t_.forEach(i => {
    const o = Object.getOwnPropertyDescriptor(e, i);
    if (!o || !o.value) throw hn(Jr.UNEXPECTED_ERROR);
    Object.defineProperty(r.config.globalProperties, `$${i}`, o)
  }), () => {
    delete r.config.globalProperties.$i18n, t_.forEach(i => {
      delete r.config.globalProperties[`$${i}`]
    })
  }
}
LC();
pC(CC);
_C(qx);
gC(Xg);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const r = Mh();
  r.__INTLIFY__ = !0, iC(r.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const lm = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
  },
  t3 = "",
  r3 = lm.PREFIX_EXCEPT_DEFAULT,
  n3 = !1,
  i3 = "___",
  o3 = "default",
  s3 = "ltr",
  a3 = "",
  cm = "";
/*!
 * shared v9.4.1
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const l3 = (r, e = !1) => e ? Symbol.for(r) : Symbol(r),
  Nc = Object.assign,
  c3 = Array.isArray,
  vf = r => typeof r == "function",
  ms = r => typeof r == "string",
  u3 = r => typeof r == "symbol",
  Uh = r => r !== null && typeof r == "object",
  um = /\+/g;

function fm(r = "") {
  try {
    return decodeURIComponent("" + r)
  } catch {
    return "" + r
  }
}

function f3(r) {
  return fm(r.replace(um, " "))
}

function h3(r) {
  return fm(r.replace(um, " "))
}

function d3(r = "") {
  const e = {};
  r[0] === "?" && (r = r.slice(1));
  for (const t of r.split("&")) {
    const n = t.match(/([^=]+)=?(.*)/) || [];
    if (n.length < 2) continue;
    const i = f3(n[1]);
    if (i === "__proto__" || i === "constructor") continue;
    const o = h3(n[2] || "");
    e[i] === void 0 ? e[i] = o : Array.isArray(e[i]) ? e[i].push(o) : e[i] = [e[i], o]
  }
  return e
}
const p3 = /\/$|\/\?/;

function Df(r = "", e = !1) {
  return e ? p3.test(r) : r.endsWith("/")
}

function _3(r = "", e = !1) {
  if (!e) return (Df(r) ? r.slice(0, -1) : r) || "/";
  if (!Df(r, !0)) return r || "/";
  const [t, ...n] = r.split("?");
  return (t.slice(0, -1) || "/") + (n.length > 0 ? `?${n.join("?")}` : "")
}

function g3(r = "", e = !1) {
  if (!e) return r.endsWith("/") ? r : r + "/";
  if (Df(r, !0)) return r || "/";
  const [t, ...n] = r.split("?");
  return t + "/" + (n.length > 0 ? `?${n.join("?")}` : "")
}

function m3(r = "") {
  const [e = "", t = "", n = ""] = (r.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: t,
    hash: n
  }
}
const hm = typeof window < "u";

function dm(r, e) {
  typeof console < "u" && (console.warn("[vue-i18n-routing] " + r), e && console.warn(e.stack))
}

function y3(r) {
  r = r || [];
  const e = [];
  for (const t of r) ms(t) ? e.push({
    code: t
  }) : e.push(t);
  return e
}

function wo(r) {
  return r != null && "global" in r && "mode" in r
}

function Ts(r) {
  return r != null && !("__composer" in r) && At(r.locale)
}

function xo(r) {
  return r != null && "__composer" in r
}

function Ka(r) {
  return r != null && !("__composer" in r) && !At(r.locale)
}

function Ic(r) {
  return r != null && ("__VUE_I18N_BRIDGE__" in r || "_sync" in r)
}

function Ai(r) {
  return wo(r) ? Ts(r.global) ? r.global : r.global.__composer : xo(r) ? r.__composer : r
}

function $c(r) {
  const e = wo(r) ? r.global : r;
  return Ts(e) ? e.locale.value : (Ka(e) || xo(e) || Ic(e), e.locale)
}

function b3(r) {
  const e = wo(r) ? r.global : r;
  return Ts(e) ? e.locales.value : (Ka(e) || xo(e) || Ic(e), e.locales)
}

function v3(r) {
  const e = wo(r) ? r.global : r;
  return Ts(e) ? e.localeCodes.value : (Ka(e) || xo(e) || Ic(e), e.localeCodes)
}

function pm(r, e) {
  const t = wo(r) ? r.global : r;
  if (Ts(t)) t.locale.value = e;
  else if (Ka(t) || xo(t) || Ic(t)) t.locale = e;
  else throw new Error("TODO:")
}

function r_(r) {
  return At(r) ? r.value : r
}

function _m(r) {
  return ms(r) ? r : u3(r) ? r.toString() : "(null)"
}

function n_(r, e, {
  defaultLocale: t,
  strategy: n,
  routesNameSeparator: i,
  defaultLocaleRouteNameSuffix: o
}) {
  let s = _m(r) + (n === "no_prefix" ? "" : i + e);
  return e === t && n === "prefix_and_default" && (s += i + o), s
}

function i_(r, e) {
  return vf(r) ? r(e) : r
}

function D3(r, e) {
  const t = [];
  for (const [n, i] of e.entries()) {
    const o = r.find(s => s.iso.toLowerCase() === i.toLowerCase());
    if (o) {
      t.push({
        code: o.code,
        score: 1 - n / e.length
      });
      break
    }
  }
  for (const [n, i] of e.entries()) {
    const o = i.split("-")[0].toLowerCase(),
      s = r.find(a => a.iso.split("-")[0].toLowerCase() === o);
    if (s) {
      t.push({
        code: s.code,
        score: .999 - n / e.length
      });
      break
    }
  }
  return t
}
const w3 = D3;

function x3(r, e) {
  return r.score === e.score ? e.code.length - r.code.length : e.score - r.score
}
const C3 = x3;

function E3(r, e, {
  matcher: t = w3,
  comparer: n = C3
} = {}) {
  const i = [];
  for (const s of r) {
    const {
      code: a
    } = s, l = s.iso || a;
    i.push({
      code: a,
      iso: l
    })
  }
  const o = t(i, e);
  return o.length > 1 && o.sort(n), o.length ? o[0].code : ""
}

function Hi(r) {
  return function() {
    return Reflect.apply(r, {
      getRouteBaseName: this.getRouteBaseName,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      resolveRoute: this.resolveRoute,
      switchLocalePath: this.switchLocalePath,
      localeHead: this.localeHead,
      i18n: this.$i18n,
      route: this.$route,
      router: this.$router
    }, arguments)
  }
}

function k3(r, {
  locales: e = [],
  localeCodes: t = [],
  baseUrl: n = a3,
  hooks: i = {},
  context: o = {}
} = {}) {
  const s = ja(),
    a = r.install;
  return r.install = (l, ...c) => {
    const u = P3(c[0]) ? Nc({}, c[0]) : {
      inject: !0
    };
    u.inject == null && (u.inject = !0);
    const d = u.__composerExtend;
    if (u.__composerExtend = p => {
        const m = Ai(r);
        p.locales = Se(() => m.locales.value), p.localeCodes = Se(() => m.localeCodes.value), p.baseUrl = Se(() => m.baseUrl.value);
        let g;
        return vf(d) && (g = Reflect.apply(d, u, [p])), () => {
          g && g()
        }
      }, r.mode === "legacy") {
      const p = u.__vueI18nExtend;
      u.__vueI18nExtend = m => {
        o_(m, i.onExtendVueI18n);
        let g;
        return vf(p) && (g = Reflect.apply(p, u, [m])), () => {
          g && g()
        }
      }
    }
    c[0] = u, Reflect.apply(a, r, [l, ...c]);
    const h = Ai(r);
    s.run(() => {
      S3(h, {
        locales: e,
        localeCodes: t,
        baseUrl: n,
        hooks: i,
        context: o
      }), r.mode === "legacy" && xo(r.global) && o_(r.global, i.onExtendVueI18n)
    });
    const f = l,
      _ = r.mode === "composition" ? f.config.globalProperties.$i18n : null;
    if (_ && T3(_, h, i.onExtendExportedGlobal), u.inject && l.mixin({
        methods: {
          resolveRoute: Hi(Vc),
          localePath: Hi(Bc),
          localeRoute: Hi(jh),
          localeLocation: Hi(B3),
          switchLocalePath: Hi(Sa),
          getRouteBaseName: Hi(ys),
          localeHead: Hi(Wh)
        }
      }), f.unmount) {
      const p = f.unmount;
      f.unmount = () => {
        s.stop(), p()
      }
    }
  }, s
}

function S3(r, e) {
  const {
    locales: t,
    localeCodes: n,
    baseUrl: i,
    context: o
  } = e, s = we(t), a = we(n), l = we("");
  r.locales = Se(() => s.value), r.localeCodes = Se(() => a.value), r.baseUrl = Se(() => l.value), hm ? Ir(r.locale, () => {
    l.value = i_(i, o)
  }, {
    immediate: !0
  }) : l.value = i_(i, o), e.hooks && e.hooks.onExtendComposer && e.hooks.onExtendComposer(r)
}

function gm(r, e, t) {
  const n = [{
    locales: {
      get() {
        return r.locales.value
      }
    },
    localeCodes: {
      get() {
        return r.localeCodes.value
      }
    },
    baseUrl: {
      get() {
        return r.baseUrl.value
      }
    }
  }];
  t && n.push(t(r));
  for (const i of n)
    for (const [o, s] of Object.entries(i)) Object.defineProperty(e, o, s)
}

function T3(r, e, t) {
  gm(e, r, t)
}

function o_(r, e) {
  const t = Ai(r);
  gm(t, r, e)
}

function P3(r) {
  return Uh(r) && ("inject" in r || "__composerExtend" in r || "__vueI18nExtend" in r)
}
const wf = l3("vue-i18n-routing-gor");

function L3(r, e) {
  r[wf] ? dm("already registered global options") : r[wf] = e
}

function A3(r) {
  return r[wf] ?? {}
}

function xf(r) {
  return new RegExp(`^/(${r.join("|")})(?:/|$)`, "i")
}

function R3(r, e, t) {
  const n = `(${r.join("|")})`,
    i = `(?:${e}${t})?`,
    o = new RegExp(`${e}${n}${i}$`, "i"),
    s = xf(r);
  return l => {
    if (Uh(l)) {
      if (l.name) {
        const u = (ms(l.name) ? l.name : l.name.toString()).match(o);
        if (u && u.length > 1) return u[1]
      } else if (l.path) {
        const c = l.path.match(s);
        if (c && c.length > 1) return c[1]
      }
    } else if (ms(l)) {
      const c = l.match(s);
      if (c && c.length > 1) return c[1]
    }
    return ""
  }
}

function Qa(r, e, {
  defaultLocale: t = t3,
  defaultDirection: n = s3,
  defaultLocaleRouteNameSuffix: i = o3,
  routesNameSeparator: o = i3,
  strategy: s = r3,
  trailingSlash: a = n3,
  localeCodes: l = [],
  prefixable: c = mm,
  switchLocalePathIntercepter: u = ym,
  dynamicRouteParamsKey: d = cm
} = {}) {
  const h = A3(r);
  return {
    defaultLocale: e.defaultLocale || h.defaultLocale || t,
    defaultDirection: e.defaultDirection || h.defaultDirection || n,
    defaultLocaleRouteNameSuffix: e.defaultLocaleRouteNameSuffix || h.defaultLocaleRouteNameSuffix || i,
    routesNameSeparator: e.routesNameSeparator || h.routesNameSeparator || o,
    strategy: e.strategy || h.strategy || s,
    trailingSlash: e.trailingSlash || h.trailingSlash || a,
    localeCodes: e.localeCodes || h.localeCodes || l,
    prefixable: e.prefixable || h.prefixable || c,
    switchLocalePathIntercepter: e.switchLocalePathIntercepter || h.switchLocalePathIntercepter || u,
    dynamicRouteParamsKey: e.dynamicRouteParamsKey || h.dynamicRouteParamsKey || d
  }
}

function O3(r, e) {
  return [r.slice(0, e), r.slice(e)]
}

function F3(r) {
  const {
    fullPath: e,
    query: t,
    hash: n,
    name: i,
    path: o,
    params: s,
    meta: a,
    redirectedFrom: l,
    matched: c
  } = r;
  return {
    fullPath: e,
    params: s,
    query: t,
    hash: n,
    name: i,
    path: o,
    meta: a,
    matched: c,
    redirectedFrom: l
  }
}

function M3(r) {
  return Hw
}

function N3(r, e, t, n) {
  var i, o;
  if (t !== "prefix") return r.resolve(e);
  const [s, a] = O3(e.path, 1), l = `${s}${n}${a===""?a:`/${a}`}`, c = (o = (i = r.options) == null ? void 0 : i.routes) == null ? void 0 : o.find(d => d.path === l);
  if (c == null) return e;
  const u = Nc({}, e, c);
  return u.path = l, r.resolve(u)
}
const I3 = new Set(["prefix_and_default", "prefix_except_default"]);

function $3(r) {
  const {
    currentLocale: e,
    defaultLocale: t,
    strategy: n
  } = r;
  return !(e === t && I3.has(n)) && n !== "no_prefix"
}
const mm = $3;

function ys(r) {
  const e = this.router,
    {
      routesNameSeparator: t
    } = Qa(e, this),
    n = r != null ? At(r) ? se(r) : r : this.route;
  return n == null || !n.name ? void 0 : _m(n.name).split(t)[0]
}

function Bc(r, e) {
  var t;
  const n = Vc.call(this, r, e);
  return n == null ? "" : ((t = n.redirectedFrom) == null ? void 0 : t.fullPath) || n.fullPath
}

function jh(r, e) {
  const t = Vc.call(this, r, e);
  return t ?? void 0
}

function B3(r, e) {
  const t = Vc.call(this, r, e);
  return t ?? void 0
}

function Vc(r, e) {
  const t = this.router,
    n = this.i18n,
    i = e || $c(n),
    {
      routesNameSeparator: o,
      defaultLocale: s,
      defaultLocaleRouteNameSuffix: a,
      strategy: l,
      trailingSlash: c,
      prefixable: u
    } = Qa(t, this);
  let d;
  if (ms(r))
    if (r[0] === "/") {
      const {
        pathname: _,
        search: p,
        hash: m
      } = m3(r), g = d3(p);
      d = {
        path: _,
        query: g,
        hash: m
      }
    } else d = {
      name: r
    };
  else d = r;
  let h = Nc({}, d);
  if ((_ => "path" in _ && !!_.path && !("name" in _))(h)) {
    let _ = null;
    try {
      _ = N3(t, h, l, i)
    } catch {}
    const p = _,
      m = ys.call(this, p);
    ms(m) ? (h = {
      name: n_(m, i, {
        defaultLocale: s,
        strategy: l,
        routesNameSeparator: o,
        defaultLocaleRouteNameSuffix: a
      }),
      params: p.params,
      query: p.query,
      hash: p.hash
    }, h.state = p.state) : (u({
      currentLocale: i,
      defaultLocale: s,
      strategy: l
    }) && (h.path = `/${i}${h.path}`), h.path = c ? g3(h.path, !0) : _3(h.path, !0))
  } else !h.name && !("path" in h) && (h.name = ys.call(this, this.route)), h.name = n_(h.name, i, {
    defaultLocale: s,
    strategy: l,
    routesNameSeparator: o,
    defaultLocaleRouteNameSuffix: a
  });
  try {
    const _ = t.resolve(h);
    return (M3(_) ? _.name : _.route.name) ? _ : t.resolve(r)
  } catch (_) {
    if (typeof _ == "object" && "type" in _ && _.type === 1) return null
  }
}
const ym = r => r;

function V3(r, e) {
  const t = {};
  if (e === cm) return t;
  const n = r.meta;
  return At(n) ? n.value[e] || t : n[e] || t
}

function Sa(r) {
  const e = this.route,
    t = ys.call(this, e);
  if (!t) return "";
  const {
    switchLocalePathIntercepter: n,
    dynamicRouteParamsKey: i
  } = Qa(this.router, this), s = F3(e), a = V3(e, i)[r] || {}, l = {
    name: t,
    params: {
      ...s.params,
      ...a
    }
  }, c = Nc({}, s, l);
  let u = Bc.call(this, c, r);
  return u = n(u, r), u
}

function Wh({
  addDirAttribute: r = !1,
  addSeoAttributes: e = !1,
  identifierAttribute: t = "hid"
} = {}) {
  const n = this.router,
    i = this.i18n,
    {
      defaultDirection: o
    } = Qa(n, this),
    s = {
      htmlAttrs: {},
      link: [],
      meta: []
    };
  if (i.locales == null || i.baseUrl == null) return s;
  const a = $c(i),
    l = b3(i),
    c = y3(l).find(h => h.code === a) || {
      code: a
    },
    u = c.iso,
    d = c.dir || o;
  return r && (s.htmlAttrs.dir = d), e && a && i.locales && (u && (s.htmlAttrs.lang = u), H3.call(this, l, se(i.baseUrl), s.link, t), U3.call(this, se(i.baseUrl), s.link, s.meta, t, e), j3(c, u, s.meta, t), W3(l, u, s.meta, t)), s
}

function H3(r, e, t, n) {
  const i = this.router,
    {
      defaultLocale: o,
      strategy: s
    } = Qa(i, this);
  if (s === lm.NO_PREFIX) return;
  const a = new Map;
  for (const l of r) {
    const c = l.iso;
    if (!c) {
      dm("Locale ISO code is required to generate alternate link");
      continue
    }
    const [u, d] = c.split("-");
    u && d && (l.isCatchallLocale || !a.has(u)) && a.set(u, l), a.set(c, l)
  }
  for (const [l, c] of a.entries()) {
    const u = Sa.call(this, c.code);
    u && t.push({
      [n]: `i18n-alt-${l}`,
      rel: "alternate",
      href: Cf(u, e),
      hreflang: l
    })
  }
  if (o) {
    const l = Sa.call(this, o);
    l && t.push({
      [n]: "i18n-xd",
      rel: "alternate",
      href: Cf(l, e),
      hreflang: "x-default"
    })
  }
}

function U3(r, e, t, n, i) {
  const o = this.route,
    s = jh.call(this, {
      ...o,
      name: ys.call(this, o)
    });
  if (s) {
    let a = Cf(s.path, r);
    const l = Uh(i) && i.canonicalQueries || [];
    if (l.length) {
      const c = s.query,
        u = new URLSearchParams;
      for (const h of l)
        if (h in c) {
          const f = c[h];
          c3(f) ? f.forEach(_ => u.append(h, _ || "")) : u.append(h, f || "")
        } const d = u.toString();
      d && (a = `${a}?${d}`)
    }
    e.push({
      [n]: "i18n-can",
      rel: "canonical",
      href: a
    }), t.push({
      [n]: "i18n-og-url",
      property: "og:url",
      content: a
    })
  }
}

function j3(r, e, t, n) {
  r && e && t.push({
    [n]: "i18n-og",
    property: "og:locale",
    content: bm(e)
  })
}

function W3(r, e, t, n) {
  const i = r.filter(o => {
    const s = o.iso;
    return s && s !== e
  });
  if (i.length) {
    const o = i.map(s => ({
      [n]: `i18n-og-alt-${s.iso}`,
      property: "og:locale:alternate",
      content: bm(s.iso)
    }));
    t.push(...o)
  }
}

function bm(r) {
  return (r || "").replace(/-/g, "_")
}

function Cf(r, e) {
  return r.match(/^https?:\/\//) ? r : e + r
}

function vm(r, e) {
  const {
    router: t,
    route: n,
    i18n: i,
    defaultLocale: o,
    strategy: s,
    defaultLocaleRouteNameSuffix: a,
    trailingSlash: l,
    routesNameSeparator: c
  } = r;
  return function(...u) {
    return Reflect.apply(e, {
      router: t,
      route: n,
      i18n: i,
      defaultLocale: o,
      strategy: s,
      defaultLocaleRouteNameSuffix: a,
      trailingSlash: l,
      routesNameSeparator: c
    }, u)
  }
}

function X3({
  router: r = Rh(),
  route: e = Rc(),
  i18n: t = ii(),
  defaultLocale: n = void 0,
  defaultLocaleRouteNameSuffix: i = void 0,
  routesNameSeparator: o = void 0,
  strategy: s = void 0,
  trailingSlash: a = void 0
} = {}) {
  return vm({
    router: r,
    route: e,
    i18n: t,
    defaultLocale: n,
    defaultLocaleRouteNameSuffix: i,
    routesNameSeparator: o,
    strategy: s,
    trailingSlash: a
  }, Bc)
}

function Dm({
  router: r = Rh(),
  route: e = Rc(),
  i18n: t = ii(),
  defaultLocale: n = void 0,
  defaultLocaleRouteNameSuffix: i = void 0,
  routesNameSeparator: o = void 0,
  strategy: s = void 0,
  trailingSlash: a = void 0
} = {}) {
  return vm({
    router: r,
    route: e,
    i18n: t,
    defaultLocale: n,
    defaultLocaleRouteNameSuffix: i,
    routesNameSeparator: o,
    strategy: s,
    trailingSlash: a
  }, Sa)
}

function Y3({
  addDirAttribute: r = !1,
  addSeoAttributes: e = !1,
  identifierAttribute: t = "hid",
  strategy: n = void 0,
  defaultLocale: i = void 0,
  route: o = Rc(),
  router: s = Rh(),
  i18n: a = ii()
} = {}) {
  const l = s,
    c = we({
      htmlAttrs: {},
      link: [],
      meta: []
    });

  function u() {
    c.value = {
      htmlAttrs: {},
      link: [],
      meta: []
    }
  }

  function d(h) {
    c.value = Reflect.apply(Wh, {
      router: s,
      route: h,
      i18n: a,
      defaultLocale: i,
      strategy: n
    }, [{
      addDirAttribute: r,
      addSeoAttributes: e,
      identifierAttribute: t
    }])
  }
  if (hm) {
    const h = R0(() => {
      u(), d(r_(l.currentRoute))
    });
    va(() => h())
  } else d(r_(l.currentRoute));
  return c
}
const z3 = {
    read_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Read more"
      }
    },
    header: {
      portfolio: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Portfolio"
        }
      },
      services: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Services"
        }
      },
      about: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "About"
        }
      },
      team: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Team"
        }
      },
      contact: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Contact"
        }
      },
      menu: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Menu"
        }
      },
      mode: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Creative mode"
        }
      },
      old: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Old site"
        }
      }
    },
    btn: {
      touch: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Get in touch"
        }
      },
      more: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Learn more"
        }
      },
      explore: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Explore"
        }
      },
      scroll: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Scroll down"
        }
      }
    },
    main_page: {
      title: {
        phrase_1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Grape® — an independent"
          }
        },
        ukrainian: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: " Ukrainian"
          }
        },
        phrase_2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "brand"
          }
        },
        phrase_3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: " marketing"
          }
        },
        phrase_4: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "agency"
          }
        }
      },
      sticky: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "HR brand, SMM strategy, digital communication, brand strategy, identity, packaging design, research, naming, rebranding."
        }
      },
      s: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "S"
        }
      },
      explore: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Explore"
        }
      },
      services: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Services"
        }
      },
      clients: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Our clients"
        }
      },
      awards: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Awards & Recognitions"
        }
      },
      contact: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Contact"
        }
      },
      more: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "more"
        }
      }
    },
    portfolio: {
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Portfolio"
        }
      },
      grid: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Grid"
        }
      },
      list: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "List"
        }
      },
      heading: {
        clients: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Clients"
          }
        },
        name: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Name"
          }
        },
        services: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Services"
          }
        },
        year: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Year"
          }
        }
      },
      text: {
        one: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Featured projects in"
          }
        },
        two: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "services"
          }
        },
        three: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "and for"
          }
        },
        four: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "clients"
          }
        }
      }
    },
    services: {
      do: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What we do"
        }
      },
      jump: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Jump to methodology"
        }
      },
      how: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "How we design and develop a brand strategy, methodology from Grape"
        }
      },
      methodology: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Our Methodology"
        }
      }
    },
    contact: {
      title: {
        line_1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Let’s start"
          }
        },
        line_2: {
          dark: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "creating"
            }
          },
          light: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "together"
            }
          }
        }
      },
      request: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Join our team"
        }
      },
      join: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Request a project"
        }
      },
      map: {
        one: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "We’d love to hear"
          }
        },
        two: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "your feedback"
          }
        }
      }
    },
    about: {
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Follow us in social media"
        }
      },
      subtitle: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "About us"
        }
      },
      clients_label: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Our clients"
        }
      },
      meet: {
        one: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Meet"
          }
        },
        two: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: " our team."
          }
        },
        contact: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Contact"
          }
        }
      },
      join_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Bring your ideas to life and create cool projects with us."
        }
      }
    },
    team: {
      value: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Our value"
        }
      },
      join: {
        position: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Position"
          }
        },
        type: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Type"
          }
        },
        location: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Location"
          }
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Join our"
          }
        },
        team: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "team"
          }
        }
      },
      more_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "View more"
        }
      },
      less_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "View less"
        }
      },
      more_less_description: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "There's actually a lot more of us, do you want to take a look at them all?"
        }
      },
      title: {
        first: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Creative"
          }
        },
        second: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Collective"
          }
        }
      },
      ca_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Fill out the form on the 'Apply' button or send your CV to the post office"
        }
      },
      ca_button_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Apply now"
        }
      }
    },
    project: {
      other: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Other projects"
        }
      },
      close: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Close"
        }
      },
      start: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Start a project"
        }
      }
    },
    footer: {
      privacy: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Privacy Policy"
        }
      },
      terms: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Terms of use"
        }
      }
    },
    accordion: {
      expand: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Expand"
        }
      },
      collapse: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Collapse"
        }
      }
    },
    modal: {
      start: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Start a project"
        }
      }
    },
    form: {
      feedback1: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What’s your name?"
        }
      },
      feedback2: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What’s your company name?"
        }
      },
      feedback3: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What's your position?"
        }
      },
      feedback4: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Where you're located?"
        }
      },
      feedback5: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What challenge do you face?"
        }
      },
      feedback6: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What email we can reach you at?"
        }
      },
      feedback7: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What’s your contact number?"
        }
      },
      join1: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What’s your name?"
        }
      },
      join2: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Add your profile links on social media."
        }
      },
      join3: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Add your contact email."
        }
      },
      join4: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Add your contact number."
        }
      },
      join5: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "What position are you applying for?"
        }
      },
      join6: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Attach your CV or resume a file."
        }
      },
      join7: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "How did you hear about us?"
        }
      },
      titleFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Get in touch"
        }
      },
      titleJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Join us"
        }
      },
      textFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "We‘ll gladly discuss your brand, business goals, and tasks. After submitting the form, we will contact you within 24 hours."
        }
      },
      textJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Fill out the current vacancy form for cooperation. After submitting the application, we will contact you within 24 hours."
        }
      },
      challenges: {
        var1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Create a new brand"
          }
        },
        var2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Rebrand"
          }
        },
        var3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Order an advertising campaign"
          }
        },
        var4: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Promote the brand on social media"
          }
        },
        var5: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Other"
          }
        }
      },
      hear: {
        var1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Client recommendation"
          }
        },
        var2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Recommendation of a friend"
          }
        },
        var3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "From a search engine"
          }
        },
        var4: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "From the media"
          }
        },
        var5: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "From social networks"
          }
        }
      },
      sent: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Your message has been sent."
          }
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Thank you for contacting Grape. If you do not receive a response to your request within 24 hours, please write or call the agency's founder Yurii Hladkyi personally."
          }
        }
      },
      nameJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Yana Tarasova"
        }
      },
      profJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "HR Manager"
        }
      },
      nameFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Kseniia Sokur"
        }
      },
      profFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Director of new business"
        }
      },
      type: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Type..."
        }
      },
      file: {
        line1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Drag & drop"
          }
        },
        line2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "or"
          }
        },
        line3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "choose file"
          }
        }
      },
      have: {
        file: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "I have a file"
          }
        },
        link: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "I have a link"
          }
        }
      },
      continue: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Continue"
        }
      },
      send: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Send"
        }
      },
      press: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Press Enter"
        }
      },
      sending: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Sending..."
        }
      }
    },
    cookie: {
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "We use cookies to improve your browsing experience on our site. For more information, please read our"
        }
      },
      privacy: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Privacy Policy"
        }
      },
      ok: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Ok"
        }
      }
    },
    prev: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Previous"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Next"
      }
    },
    drag: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Drag"
      }
    },
    allProjects: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "all projects"
      }
    },
    showreal: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Play showreal"
      }
    },
    video: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Play video"
      }
    },
    join: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "join us"
      }
    },
    drop: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Drop us a line"
      }
    },
    form_popup: {
      feedback: {
        thanks: {
          text: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "Thank you for contacting Grape. If you do not receive a response to your request within 24 hours, please write or call the agency's founder Yurii Hladkyi personally."
            }
          },
          person: {
            name: {
              t: 0,
              b: {
                t: 2,
                i: [{
                  t: 3
                }],
                s: "Yurii Hladkyi"
              }
            }
          }
        }
      },
      vacancy: {
        thanks: {
          text: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "Thank you! Our HR manager will review your request and, if there is a match, will contact you soon."
            }
          },
          person: {
            name: {
              t: 0,
              b: {
                t: 2,
                i: [{
                  t: 3
                }],
                s: "Yana Tarasova"
              }
            }
          }
        }
      }
    },
    and_others: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "and others"
      }
    },
    error_page: {
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Error"
        }
      },
      description_1: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "The page was not"
        }
      },
      description_2: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "found,"
        }
      },
      link: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "take me home"
        }
      }
    },
    photo_word: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "photo"
      }
    }
  },
  G3 = {
    read_more: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Детальніше"
      }
    },
    header: {
      portfolio: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Портфоліо"
        }
      },
      services: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Сервіси"
        }
      },
      about: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Про нас"
        }
      },
      team: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Команда"
        }
      },
      contact: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Контакти"
        }
      },
      menu: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Меню"
        }
      },
      mode: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Креативний мод"
        }
      },
      old: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Старий сайт"
        }
      }
    },
    btn: {
      touch: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Написати нам"
        }
      },
      more: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Детальніше"
        }
      },
      explore: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Переглянути"
        }
      },
      scroll: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Вниз"
        }
      }
    },
    main_page: {
      title: {
        phrase_1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Grape® — незалежна"
          }
        },
        ukrainian: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: " українська"
          }
        },
        phrase_2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: " бренд"
          }
        },
        phrase_3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "-маркетингова"
          }
        },
        phrase_4: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "агенція"
          }
        }
      },
      sticky: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "HR-бренд, SMM-стратегія, диджитальна комунікація, бренд-стратегія, айдентика, дизайн паковання, дослідження, неймінг, ребрендинг."
        }
      },
      s: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "C"
        }
      },
      explore: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Переглянути"
        }
      },
      services: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Сервіси"
        }
      },
      clients: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Наші клієнти"
        }
      },
      awards: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Нагороди"
        }
      },
      contact: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Контакти"
        }
      },
      more: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "ще"
        }
      }
    },
    portfolio: {
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Портфоліо"
        }
      },
      grid: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Грід"
        }
      },
      list: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Список"
        }
      },
      heading: {
        clients: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Клієнти"
          }
        },
        name: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Назва"
          }
        },
        services: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Сервіси"
          }
        },
        year: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Рік"
          }
        }
      },
      text: {
        one: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Оберіть проєкти серед списку"
          }
        },
        two: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "сервісів"
          }
        },
        three: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "або"
          }
        },
        four: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "клієнтів"
          }
        }
      }
    },
    services: {
      do: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Що ми робимо"
        }
      },
      jump: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "До методології"
        }
      },
      how: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Як ми працюємо над бренд-стратегією"
        }
      },
      methodology: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Наша методологія"
        }
      }
    },
    contact: {
      title: {
        line_1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Давайте"
          }
        },
        line_2: {
          dark: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "творити"
            }
          },
          light: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "разом"
            }
          }
        }
      },
      request: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Вакансії"
        }
      },
      join: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Співпраця"
        }
      },
      map: {
        one: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Клієнти про нас"
          }
        },
        two: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "поганого не говорять"
          }
        }
      }
    },
    about: {
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Слідкуйте за нами у соцмережах"
        }
      },
      subtitle: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Про нас"
        }
      },
      clients_label: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Наші клієнти"
        }
      },
      meet: {
        one: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Дізнайтеся"
          }
        },
        two: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "більше про нашу команду."
          }
        },
        contact: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Контакти"
          }
        }
      },
      join_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Втілюй свої ідеї та створюй круті проєкти разом із нами."
        }
      }
    },
    team: {
      value: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Наші цінності"
        }
      },
      join: {
        position: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Посада"
          }
        },
        type: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Зайнятість"
          }
        },
        location: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Локація"
          }
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Приєднуйся до"
          }
        },
        team: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: " Grape"
          }
        }
      },
      more_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Більше"
        }
      },
      less_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Менше"
        }
      },
      more_less_description: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Тут можна переглянути всіх членів команди Grape."
        }
      },
      title: {
        first: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Креативна"
          }
        },
        second: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "команда"
          }
        }
      },
      ca_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Тисни кнопку — заповнюй анкету на сайті, або надсилай резюме на пошту"
        }
      },
      ca_button_text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Заповнити"
        }
      }
    },
    project: {
      other: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Інші проєкти"
        }
      },
      close: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Закрити"
        }
      },
      start: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Замовити проєкт"
        }
      }
    },
    footer: {
      privacy: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Політика конфіденційності"
        }
      },
      terms: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Умови використання"
        }
      }
    },
    accordion: {
      expand: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Розгорнути"
        }
      },
      collapse: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Згорнути"
        }
      }
    },
    modal: {
      start: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Замовити проєкт"
        }
      }
    },
    form: {
      feedback1: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Ім'я та прізвище"
        }
      },
      feedback2: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Назва компанії"
        }
      },
      feedback3: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Посада"
        }
      },
      feedback4: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Розташування компанії: країна, місто"
        }
      },
      feedback5: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Виклик, який стоїть перед вами"
        }
      },
      feedback6: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "E-mail для зв’язку "
        }
      },
      feedback7: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Телефон для зв’язку"
        }
      },
      join1: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Ім'я та прізвище"
        }
      },
      join2: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Лінки на соцмережі"
        }
      },
      join3: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Контактний імейл"
        }
      },
      join4: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Номер телефону"
        }
      },
      join5: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Яку посаду хочеш отримати?"
        }
      },
      join6: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Прикріпи своє CV чи портфоліо"
        }
      },
      join7: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Як ти про нас дізнався (-лася)?"
        }
      },
      titleFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "На зв’язку"
        }
      },
      titleJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Приєднуйся до нашої команди!"
        }
      },
      textFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Залюбки обговоримо ваш бренд, бізнес-цілі та завдання. Після надсилання форми зв‘яжемося з вами протягом 24 годин."
        }
      },
      textJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Заповни актуальну форму вакансії, щоб ми могли познайомитися. Після надсилання форми сконтактуємо з тобою, як тільки розглянемо всі запити."
        }
      },
      challenges: {
        var1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Створити новий бренд"
          }
        },
        var2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Провести ребрендинг"
          }
        },
        var3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Замовити рекламну кампанію"
          }
        },
        var4: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Просувати бренд в соціальних мережах"
          }
        },
        var5: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Інше"
          }
        }
      },
      hear: {
        var1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Рекомендація клієнта"
          }
        },
        var2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Рекомендація друга"
          }
        },
        var3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "З пошукової системи"
          }
        },
        var4: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Із медіа/новин"
          }
        },
        var5: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Із соцмереж"
          }
        }
      },
      sent: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Повідомлення відправлено."
          }
        },
        text: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Дякуємо, що звернулися до Grape. Якщо ви не отримали відповідь на запит протягом 24 годин, будь ласка, напишіть або зателефонуйте засновнику агенції Юрію Гладкому особисто."
          }
        }
      },
      nameJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Яна Тарасова"
        }
      },
      profJoin: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "HR Manager"
        }
      },
      nameFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Ксенія Сокур"
        }
      },
      profFeedback: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Директорка з нового бізнесу"
        }
      },
      type: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Друкувати..."
        }
      },
      file: {
        line1: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Тягни та відпусти"
          }
        },
        line2: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "або"
          }
        },
        line3: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "скинь файл"
          }
        }
      },
      have: {
        file: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Я маю файл"
          }
        },
        link: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "В мене є посилання"
          }
        }
      },
      continue: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Продовжити"
        }
      },
      send: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Надіслати"
        }
      },
      press: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Натисніть Enter"
        }
      },
      sending: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Відправляємо..."
        }
      }
    },
    cookie: {
      text: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Ми використовуємо файли cookie, щоб покращити ваш досвід перегляду на нашому сайті. Для отримання додаткової інформації прочитайте нашу"
        }
      },
      privacy: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Політику конфіденційності"
        }
      },
      ok: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Підтвердити"
        }
      }
    },
    prev: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Попередній"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Наступний"
      }
    },
    drag: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Потягнути"
      }
    },
    allProjects: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Всі проєкти"
      }
    },
    showreal: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Дивитись Шоуріл"
      }
    },
    video: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Дивитись відео"
      }
    },
    join: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "приєднуйся"
      }
    },
    drop: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Чекаємо на лист"
      }
    },
    form_popup: {
      feedback: {
        thanks: {
          text: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "Дякуємо, що звернулися до Grape. Якщо ви не отримали відповідь на запит протягом 24 годин, будь ласка, напишіть або зателефонуйте засновнику агенції Юрію Гладкому особисто."
            }
          },
          person: {
            name: {
              t: 0,
              b: {
                t: 2,
                i: [{
                  t: 3
                }],
                s: "Юрій Гладкий"
              }
            }
          }
        }
      },
      vacancy: {
        thanks: {
          text: {
            t: 0,
            b: {
              t: 2,
              i: [{
                t: 3
              }],
              s: "Дякуємо! Наш HR manager перегляне твій запит та, якщо станеться метч, сконтактує з тобою найближчим часом."
            }
          },
          person: {
            name: {
              t: 0,
              b: {
                t: 2,
                i: [{
                  t: 3
                }],
                s: "Яна Тарасова"
              }
            }
          }
        }
      }
    },
    and_others: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "та інші"
      }
    },
    error_page: {
      title: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Помилка"
        }
      },
      description_1: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Сторінку не знайдено,"
        }
      },
      description_2: {
        t: 0,
        b: {
          static: "",
          t: 2,
          i: []
        }
      },
      link: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "повернутись на головну"
        }
      }
    },
    photo_word: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "фото"
      }
    }
  },
  Mo = ["en", "uk"],
  q3 = {
    en: [{
      key: "../locales/en.json",
      load: () => Promise.resolve(z3),
      cache: !0
    }],
    uk: [{
      key: "../locales/ua.json",
      load: () => Promise.resolve(G3),
      cache: !0
    }]
  },
  K3 = [() => dt(() => import("./i18n.config.tCd5jrsr.js"), __vite__mapDeps([]), import.meta.url)],
  Yt = {
    experimental: {},
    bundle: {
      compositionOnly: !0,
      runtimeOnly: !1,
      fullInstall: !0,
      dropMessageCompiler: !1
    },
    compilation: {
      jit: !0,
      strictMessage: !0,
      escapeHtml: !1
    },
    customBlocks: {
      defaultSFCLang: "json",
      globalSFCScope: !1
    },
    vueI18n: "./i18n.config.ts",
    locales: [{
      code: "en",
      iso: "en-US",
      name: "En",
      files: ["locales/en.json"]
    }, {
      code: "uk",
      iso: "uk-UA",
      name: "Uk",
      files: ["locales/ua.json"]
    }],
    defaultLocale: "uk",
    defaultDirection: "ltr",
    routesNameSeparator: "___",
    trailingSlash: !1,
    defaultLocaleRouteNameSuffix: "default",
    strategy: "prefix_except_default",
    lazy: !1,
    langDir: "locales",
    rootRedirect: null,
    detectBrowserLanguage: {
      alwaysRedirect: !1,
      cookieCrossOrigin: !1,
      cookieDomain: null,
      cookieKey: "i18n_redirected",
      cookieSecure: !1,
      fallbackLocale: "",
      redirectOn: "root",
      useCookie: !0
    },
    differentDomains: !1,
    baseUrl: "https://grape.ua",
    dynamicRouteParams: !1,
    customRoutes: "page",
    pages: {},
    skipSettingLocaleOnNavigate: !1,
    types: "composition",
    debug: !1,
    parallelPlugin: !1,
    i18nModules: []
  },
  Rr = {
    experimental: {},
    bundle: {
      compositionOnly: !0,
      runtimeOnly: !1,
      fullInstall: !0,
      dropMessageCompiler: !1
    },
    compilation: {
      jit: !0,
      strictMessage: !0,
      escapeHtml: !1
    },
    customBlocks: {
      defaultSFCLang: "json",
      globalSFCScope: !1
    },
    vueI18n: "",
    locales: [],
    defaultLocale: "",
    defaultDirection: "ltr",
    routesNameSeparator: "___",
    trailingSlash: !1,
    defaultLocaleRouteNameSuffix: "default",
    strategy: "prefix_except_default",
    lazy: !1,
    langDir: null,
    rootRedirect: null,
    detectBrowserLanguage: {
      alwaysRedirect: !1,
      cookieCrossOrigin: !1,
      cookieDomain: null,
      cookieKey: "i18n_redirected",
      cookieSecure: !1,
      fallbackLocale: "",
      redirectOn: "root",
      useCookie: !0
    },
    differentDomains: !1,
    baseUrl: "",
    dynamicRouteParams: !1,
    customRoutes: "page",
    pages: {},
    skipSettingLocaleOnNavigate: !1,
    types: "composition",
    debug: !1,
    parallelPlugin: !1
  },
  Ef = {
    __normalizedLocales: [{
      code: "en",
      iso: "en-US",
      name: "En",
      files: [{
        path: "locales/en.json"
      }]
    }, {
      code: "uk",
      iso: "uk-UA",
      name: "Uk",
      files: [{
        path: "locales/ua.json"
      }]
    }]
  },
  wm = "@nuxtjs/i18n",
  Q3 = !1,
  J3 = !1;

function Xh(r) {
  return wm + " " + r
}

function Z3(r) {
  return r != null && ("__VUE_I18N_BRIDGE__" in r || "_sync" in r)
}

function Hc(r, e, ...t) {
  const n = wo(r) ? r.global : r,
    [i, o] = [n, n[e]];
  return Reflect.apply(o, i, [...t])
}

function eE(r, e) {
  const t = wo(r) ? r.global : r;
  return Ts(t) ? t[e].value : (Ka(t) || xo(t) || Z3(t), t[e])
}

function s_(r, e, t) {
  Object.defineProperty(r, e, {
    get: () => t
  })
}

function tE(r, e) {
  return function() {
    return Reflect.apply(e, {
      i18n: r.$i18n,
      getRouteBaseName: r.$getRouteBaseName,
      localePath: r.$localePath,
      localeRoute: r.$localeRoute,
      switchLocalePath: r.$switchLocalePath,
      localeHead: r.$localeHead,
      route: r.$router.currentRoute.value,
      router: r.$router
    }, arguments)
  }
}
const kf = new Map;
async function rE(r, {
  key: e,
  load: t
}, n) {
  let i = null;
  try {
    const o = await t().then(s => s.default || s);
    Ze(o) ? i = await o(n) : (i = o, i != null && kf.set(e, i))
  } catch (o) {
    console.error(Xh("Failed locale loading: " + o.message))
  }
  return i
}
async function nc(r, e, t) {
  const n = q3[e];
  if (n == null) {
    console.warn(Xh("Could not find messages for locale code: " + e));
    return
  }
  const i = {};
  for (const o of n) {
    let s = null;
    kf.has(o.key) && o.cache ? s = kf.get(o.key) : s = await rE(r, o, e), s != null && Ei(s, i)
  }
  t(e, i)
}

function xm(r, e) {
  let t;
  return navigator.languages && (t = E3(r.__normalizedLocales, navigator.languages)), t
}

function Yh(r, {
  useCookie: e = Rr.detectBrowserLanguage.useCookie,
  cookieKey: t = Rr.detectBrowserLanguage.cookieKey,
  localeCodes: n = []
} = {}) {
  if (!e) return;
  const o = Ng(t).value ?? void 0;
  if (o && n.includes(o)) return o
}

function nE(r, e, {
  useCookie: t = Rr.detectBrowserLanguage.useCookie,
  cookieKey: n = Rr.detectBrowserLanguage.cookieKey,
  cookieDomain: i = Rr.detectBrowserLanguage.cookieDomain,
  cookieSecure: o = Rr.detectBrowserLanguage.cookieSecure,
  cookieCrossOrigin: s = Rr.detectBrowserLanguage.cookieCrossOrigin
} = {}) {
  if (!t) return;
  const a = new Date,
    l = {
      expires: new Date(a.setDate(a.getDate() + 365)),
      path: "/",
      sameSite: s ? "none" : "lax",
      secure: s || o
    };
  i && (l.domain = i);
  const c = Ng(n, l);
  c.value = r
}
const iE = {
  locale: "",
  stat: !1,
  reason: "unknown",
  from: "unknown"
};

function oE(r, e, t, n, i, o, s = [], a = "") {
  const {
    strategy: l
  } = t, {
    ssg: c,
    callType: u,
    firstAccess: d
  } = o;
  if (!d) return {
    locale: l === "no_prefix" ? a : "",
    stat: !1,
    reason: "first_access_only"
  };
  const {
    redirectOn: h,
    alwaysRedirect: f,
    useCookie: _,
    fallbackLocale: p
  } = t.detectBrowserLanguage, m = le(r) ? r : r.path;
  if (l !== "no_prefix") {
    if (h === "root") {
      if (m !== "/") return {
        locale: "",
        stat: !1,
        reason: "not_redirect_on_root"
      }
    } else if (h === "no prefix" && !f && m.match(xf(s))) return {
      locale: "",
      stat: !1,
      reason: "not_redirect_on_no_prefix"
    }
  }
  let g = "unknown",
    y, b;
  _ && (b = y = Yh(e, {
    ...t.detectBrowserLanguage,
    localeCodes: s
  }), g = "cookie"), b || (b = xm(n), g = "navigator_or_header");
  const v = b || p;
  !b && p && (g = "fallback");
  const D = a || i.locale;
  if (v && (!_ || f || !y)) {
    if (l === "no_prefix") return {
      locale: v,
      stat: !0,
      from: g
    };
    if (u === "setup" && v !== D) return {
      locale: v,
      stat: !0,
      from: g
    };
    if (f) {
      const k = m === "/",
        w = h === "all",
        S = h === "no prefix" && !m.match(xf(s));
      if (k || w || S) return {
        locale: v,
        stat: !0,
        from: g
      }
    }
  }
  return c === "ssg_setup" && v ? {
    locale: v,
    stat: !0,
    from: g
  } : (g === "navigator_or_header" || g === "cookie") && v ? {
    locale: v,
    stat: !0,
    from: g
  } : {
    locale: "",
    stat: !1,
    reason: "not_found_match"
  }
}

function sE() {
  let r;
  return r = window.location.host, r
}

function aE(r) {
  let e = sE() || "";
  if (e) {
    const t = r.find(n => {
      if (n && n.domain) {
        let i = n.domain;
        return ri(n.domain) && (i = n.domain.replace(/(http|https):\/\//, "")), i === e
      }
      return !1
    });
    if (t) return t.code;
    e = ""
  }
  return e
}

function Cm(r, e, t) {
  var s, a;
  const n = t == null ? void 0 : t.$config.public.i18n,
    i = e.find(l => l.code === r),
    o = ((a = (s = n == null ? void 0 : n.locales) == null ? void 0 : s[r]) == null ? void 0 : a.domain) ?? (i == null ? void 0 : i.domain);
  if (o) {
    if (ri(o, {
        strict: !0
      })) return o;
    let l;
    return l = new URL(window.location.origin).protocol, l + "//" + o
  }
  console.warn(Xh("Could not find domain name for locale " + r))
}

function lE(r, e) {
  return Hc(r, "setLocaleCookie", e)
}

function cE(r, e, t) {
  return Hc(r, "mergeLocaleMessage", e, t)
}

function uE(r, e, t, n, i) {
  return Hc(r, "onBeforeLanguageSwitch", e, t, n, i)
}

function fE(r, e, t) {
  return Hc(r, "onLanguageSwitched", e, t)
}

function Em(r, e) {
  let t = [];
  if (xt(r)) t = r;
  else if (Be(r)) {
    const n = [...e, "default"];
    for (const i of n) r[i] && (t = [...t, ...r[i].filter(Boolean)])
  } else le(r) && e.every(n => n !== r) && t.push(r);
  return t
}
async function hE(r, e, t) {
  const {
    defaultLocale: n,
    initialLocale: i,
    localeCodes: o,
    fallbackLocale: s,
    lazy: a
  } = t, l = (u, d) => {
    const h = e[u] || {};
    Ei(d, h), e[u] = h
  };
  if (a && s) {
    const u = Em(s, [n, i]);
    await Promise.all(u.map(d => nc(r, d, l)))
  }
  const c = a ? [...new Set().add(n).add(i)] : o;
  return await Promise.all(c.map(u => nc(r, u, l))), e
}
async function a_(r, e, t, {
  useCookie: n = Rr.detectBrowserLanguage.useCookie,
  skipSettingLocaleOnNavigate: i = Rr.skipSettingLocaleOnNavigate,
  differentDomains: o = Rr.differentDomains,
  initial: s = !1,
  lazy: a = !1
} = {}) {
  let l = !1;
  const c = $c(t);
  if (!r) return [l, c];
  if (!s && o) return [l, c];
  if (c === r) return [l, c];
  const u = await uE(t, c, r, s, e),
    d = v3(t);
  if (u && d && d.includes(u)) {
    if (u === c) return [l, c];
    r = u
  }
  const h = eE(t, "fallbackLocale");
  if (a) {
    const f = (_, p) => cE(t, _, p);
    if (h) {
      const _ = Em(h, [r]);
      await Promise.all(_.map(p => nc(e, p, f)))
    }
    await nc(e, r, f)
  }
  return i ? [l, c] : (n && lE(t, r), pm(t, r), await fE(t, c, r), l = !0, [l, c])
}

function l_(r, e, t, n, i, o, s, a, l = []) {
  const {
    strategy: c,
    defaultLocale: u,
    differentDomains: d
  } = n, h = Ze(o) ? o() : o, {
    locale: f,
    stat: _,
    reason: p,
    from: m
  } = n.detectBrowserLanguage ? oE(r, e, n, Ef, i, s, l, h) : iE;
  if (p === "detect_ignore_on_ssg") return h;
  if ((m === "navigator_or_header" || m === "cookie" || m === "fallback") && f) return f;
  let g = f;
  return g || (d ? g = aE(a) : c !== "no_prefix" ? g = t(r) : n.detectBrowserLanguage || (g = h)), !g && n.detectBrowserLanguage && n.detectBrowserLanguage.useCookie && (g = Yh(e, {
    ...n.detectBrowserLanguage,
    localeCodes: l
  }) || ""), g || (g = u || ""), g
}

function c_({
  route: r,
  context: e,
  targetLocale: t,
  routeLocaleGetter: n,
  nuxtI18nOptions: i,
  calledWithRouting: o = !1
}) {
  const {
    strategy: s,
    differentDomains: a
  } = i;
  let l = "";
  const {
    fullPath: c
  } = r.to;
  if (!a && (o || s !== "no_prefix") && n(r.to) !== t) {
    const u = e.$switchLocalePath(t) || e.$localePath(c, t);
    le(u) && u && !Wu(u, c) && !u.startsWith("//") && (l = r.from && r.from.fullPath === u ? "" : u)
  }
  if ((a || J3) && n(r.to) !== t) {
    const d = Dm({
      i18n: Ai(e.$i18n),
      route: r.to,
      router: e.$router
    })(t);
    le(d) && d && !Wu(d, c) && !d.startsWith("//") && (l = d)
  }
  return l
}

function dE(r) {
  return Be(r) && "path" in r && "statusCode" in r
}
const pE = () => An(wm + ":redirect", () => "");

function u_(r, e) {
  return rg(r, {
    redirectCode: e
  })
}
async function f_(r, {
  status: e = 302,
  rootRedirect: t = Rr.rootRedirect,
  differentDomains: n = Rr.differentDomains,
  skipSettingLocaleOnNavigate: i = Rr.skipSettingLocaleOnNavigate,
  enableNavigate: o = !1
} = {}) {
  const {
    i18n: s,
    locale: a,
    route: l
  } = r;
  let {
    redirectPath: c
  } = r;
  if (l.path === "/" && t) return le(t) ? c = "/" + t : dE(t) && (c = "/" + t.path, e = t.statusCode), u_(c, e);
  if (!(i && (s.__pendingLocale = a, s.__pendingLocalePromise = new Promise(u => {
      s.__resolvePendingLocalePromise = u
    }), !o))) {
    if (n) {
      const u = pE();
      u.value && u.value !== c && (u.value = "", window.location.assign(c))
    } else if (c) return u_(c, e)
  }
}

function _E(r, e) {
  s_(r, "$i18n", e.global);
  for (const t of [
      ["getRouteBaseName", ys],
      ["localePath", Bc],
      ["localeRoute", jh],
      ["switchLocalePath", Sa],
      ["localeHead", Wh]
    ]) s_(r, "$" + t[0], tE(r, t[1]))
}

function gE(r) {
  return e => mm(e) && !r
}

function mE(r, e, t) {
  return (n, i) => {
    if (r) {
      const o = Cm(i, e, t);
      return o ? Do(o, n) : n
    } else return ym(n)
  }
}

function yE(r, e) {
  return t => {
    var l, c;
    if (Ze(r)) return r(t);
    const {
      differentDomains: n,
      localeCodeLoader: i,
      normalizedLocales: o
    } = e, s = Ze(i) ? i() : i;
    if (n && s) {
      const u = Cm(s, o, e.nuxt);
      if (u) return u
    }
    const a = (c = (l = t.$config) == null ? void 0 : l.public) == null ? void 0 : c.i18n;
    return a != null && a.baseUrl ? a.baseUrl : r
  }
}
const bE = Jt({
    name: "i18n:plugin",
    parallel: Q3,
    async setup(r) {
      let e, t;
      const n = Zt(),
        i = ni(),
        {
          vueApp: o
        } = r,
        s = r,
        a = {
          messages: {}
        };
      for (const C of K3) {
        const {
          default: R
        } = ([e, t] = Hn(() => C()), e = await e, t(), e), N = typeof R == "function" ? ([e, t] = Hn(() => R()), e = await e, t(), e) : R;
        Ei(N, a)
      }
      const l = Yt.detectBrowserLanguage && Yt.detectBrowserLanguage.useCookie,
        {
          __normalizedLocales: c
        } = Ef,
        {
          defaultLocale: u,
          differentDomains: d,
          skipSettingLocaleOnNavigate: h,
          lazy: f,
          routesNameSeparator: _,
          defaultLocaleRouteNameSuffix: p,
          strategy: m,
          rootRedirect: g
        } = Yt;
      Yt.baseUrl = yE(Yt.baseUrl, {
        differentDomains: d,
        nuxt: s,
        localeCodeLoader: u,
        normalizedLocales: c
      });
      const y = R3(Mo, _, p);
      a.messages = a.messages || {}, a.fallbackLocale = a.fallbackLocale ?? !1, L3(n, {
        ...Yt,
        dynamicRouteParamsKey: "nuxtI18n",
        switchLocalePathIntercepter: mE(d, c, s),
        prefixable: gE(d)
      });
      const b = C => C || a.locale || "en-US";
      let v = l_(i, r.ssrContext, y, Yt, a, b(u), {
        ssg: "normal",
        callType: "setup",
        firstAccess: !0
      }, c, Mo);
      a.messages = ([e, t] = Hn(() => hE(s, a.messages, {
        ...Yt,
        initialLocale: v,
        fallbackLocale: a.fallbackLocale,
        localeCodes: Mo
      })), e = await e, t(), e), v = b(v);
      const D = XC({
        ...a,
        locale: v
      });
      let k = !0;
      const w = C => v !== C && k;
      k3(D, {
        locales: Yt.locales,
        localeCodes: Mo,
        baseUrl: Yt.baseUrl,
        context: s,
        hooks: {
          onExtendComposer(C) {
            C.strategy = m, C.localeProperties = Se(() => c.find(R => R.code === C.locale.value) || {
              code: C.locale.value
            }), C.setLocale = async R => {
              const N = w(R),
                [B] = await a_(R, s, D, {
                  useCookie: l,
                  differentDomains: d,
                  initial: N,
                  skipSettingLocaleOnNavigate: h,
                  lazy: f
                });
              B && N && (k = !1);
              const z = c_({
                route: {
                  to: i
                },
                context: s,
                targetLocale: R,
                routeLocaleGetter: y,
                nuxtI18nOptions: Yt
              });
              await f_({
                i18n: D,
                redirectPath: z,
                locale: R,
                route: i
              }, {
                differentDomains: d,
                skipSettingLocaleOnNavigate: h,
                rootRedirect: g,
                enableNavigate: !0
              })
            }, C.differentDomains = d, C.defaultLocale = u, C.getBrowserLocale = () => xm(Ef, r.ssrContext), C.getLocaleCookie = () => Yh(r.ssrContext, {
              ...Yt.detectBrowserLanguage,
              localeCodes: Mo
            }), C.setLocaleCookie = R => nE(R, r.ssrContext, Yt.detectBrowserLanguage || void 0), C.onBeforeLanguageSwitch = (R, N, B, z) => r.callHook("i18n:beforeLocaleSwitch", {
              oldLocale: R,
              newLocale: N,
              initialSetup: B,
              context: z
            }), C.onLanguageSwitched = (R, N) => r.callHook("i18n:localeSwitched", {
              oldLocale: R,
              newLocale: N
            }), C.finalizePendingLocaleChange = async () => {
              D.__pendingLocale && (pm(D, D.__pendingLocale), D.__resolvePendingLocalePromise && await D.__resolvePendingLocalePromise(), D.__pendingLocale = void 0)
            }, C.waitForPendingLocaleChange = async () => {
              D.__pendingLocale && D.__pendingLocalePromise && await D.__pendingLocalePromise
            }
          },
          onExtendExportedGlobal(C) {
            return {
              strategy: {
                get() {
                  return C.strategy
                }
              },
              localeProperties: {
                get() {
                  return C.localeProperties.value
                }
              },
              setLocale: {
                get() {
                  return async R => Reflect.apply(C.setLocale, C, [R])
                }
              },
              differentDomains: {
                get() {
                  return C.differentDomains
                }
              },
              defaultLocale: {
                get() {
                  return C.defaultLocale
                }
              },
              getBrowserLocale: {
                get() {
                  return () => Reflect.apply(C.getBrowserLocale, C, [])
                }
              },
              getLocaleCookie: {
                get() {
                  return () => Reflect.apply(C.getLocaleCookie, C, [])
                }
              },
              setLocaleCookie: {
                get() {
                  return R => Reflect.apply(C.setLocaleCookie, C, [R])
                }
              },
              onBeforeLanguageSwitch: {
                get() {
                  return (R, N, B, z) => Reflect.apply(C.onBeforeLanguageSwitch, C, [R, N, B, z])
                }
              },
              onLanguageSwitched: {
                get() {
                  return (R, N) => Reflect.apply(C.onLanguageSwitched, C, [R, N])
                }
              },
              finalizePendingLocaleChange: {
                get() {
                  return () => Reflect.apply(C.finalizePendingLocaleChange, C, [])
                }
              },
              waitForPendingLocaleChange: {
                get() {
                  return () => Reflect.apply(C.waitForPendingLocaleChange, C, [])
                }
              }
            }
          },
          onExtendVueI18n(C) {
            return {
              strategy: {
                get() {
                  return C.strategy
                }
              },
              localeProperties: {
                get() {
                  return C.localeProperties.value
                }
              },
              setLocale: {
                get() {
                  return async R => Reflect.apply(C.setLocale, C, [R])
                }
              },
              differentDomains: {
                get() {
                  return C.differentDomains
                }
              },
              defaultLocale: {
                get() {
                  return C.defaultLocale
                }
              },
              getBrowserLocale: {
                get() {
                  return () => Reflect.apply(C.getBrowserLocale, C, [])
                }
              },
              getLocaleCookie: {
                get() {
                  return () => Reflect.apply(C.getLocaleCookie, C, [])
                }
              },
              setLocaleCookie: {
                get() {
                  return R => Reflect.apply(C.setLocaleCookie, C, [R])
                }
              },
              onBeforeLanguageSwitch: {
                get() {
                  return (R, N, B, z) => Reflect.apply(C.onBeforeLanguageSwitch, C, [R, N, B, z])
                }
              },
              onLanguageSwitched: {
                get() {
                  return (R, N) => Reflect.apply(C.onLanguageSwitched, C, [R, N])
                }
              },
              finalizePendingLocaleChange: {
                get() {
                  return () => Reflect.apply(C.finalizePendingLocaleChange, C, [])
                }
              },
              waitForPendingLocaleChange: {
                get() {
                  return () => Reflect.apply(C.waitForPendingLocaleChange, C, [])
                }
              }
            }
          }
        }
      });
      const S = {
        __composerExtend: C => {
          const R = Ai(D);
          return C.strategy = R.strategy, C.localeProperties = Se(() => R.localeProperties.value), C.setLocale = R.setLocale, C.differentDomains = R.differentDomains, C.getBrowserLocale = R.getBrowserLocale, C.getLocaleCookie = R.getLocaleCookie, C.setLocaleCookie = R.setLocaleCookie, C.onBeforeLanguageSwitch = R.onBeforeLanguageSwitch, C.onLanguageSwitched = R.onLanguageSwitched, C.finalizePendingLocaleChange = R.finalizePendingLocaleChange, C.waitForPendingLocaleChange = R.waitForPendingLocaleChange, () => {}
        }
      };
      o.use(D, S), _E(s, D);
      let P = 0;
      ev("locale-changing", async (C, R) => {
        let N, B;
        const z = l_(C, r.ssrContext, y, Yt, a, () => $c(D) || b(u), {
            ssg: "normal",
            callType: "routing",
            firstAccess: P === 0
          }, c, Mo),
          U = w(z),
          [V] = ([N, B] = Hn(() => a_(z, s, D, {
            useCookie: l,
            differentDomains: d,
            initial: U,
            skipSettingLocaleOnNavigate: h,
            lazy: f
          })), N = await N, B(), N);
        V && U && (k = !1);
        const Y = c_({
          route: {
            to: C,
            from: R
          },
          context: s,
          targetLocale: z,
          routeLocaleGetter: Yt.strategy === "no_prefix" ? () => z : y,
          nuxtI18nOptions: Yt,
          calledWithRouting: !0
        });
        return P++, f_({
          i18n: D,
          redirectPath: Y,
          locale: z,
          route: C
        }, {
          differentDomains: d,
          skipSettingLocaleOnNavigate: h,
          rootRedirect: g
        })
      }, {
        global: !0
      })
    }
  }),
  vE = Jt({
    name: "nuxt:chunk-reload",
    setup(r) {
      const e = Zt(),
        t = Xa(),
        n = new Set;
      e.beforeEach(() => {
        n.clear()
      }), r.hook("app:chunkError", ({
        error: o
      }) => {
        n.add(o)
      });

      function i(o) {
        const a = "href" in o && o.href[0] === "#" ? t.app.baseURL + o.href : Do(t.app.baseURL, o.fullPath);
        Mw({
          path: a,
          persistState: !0
        })
      }
      r.hook("app:manifest:update", () => {
        e.beforeResolve(i)
      }), e.onError((o, s) => {
        n.has(o) && i(s)
      })
    }
  }),
  DE = Jt(() => {
    window.innerWidth >= 1200 && !/(Mac)/i.test(window.navigator.userAgent) && document.documentElement.classList.add("custom-scrollbar")
  });

function In(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r
}

function km(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Nr = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  bs = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
  zh, Kt, pt, zr = 1e8,
  Ke = 1 / zr,
  Sf = Math.PI * 2,
  wE = Sf / 4,
  xE = 0,
  Sm = Math.sqrt,
  CE = Math.cos,
  EE = Math.sin,
  Ft = function(e) {
    return typeof e == "string"
  },
  gt = function(e) {
    return typeof e == "function"
  },
  Zn = function(e) {
    return typeof e == "number"
  },
  Gh = function(e) {
    return typeof e > "u"
  },
  Rn = function(e) {
    return typeof e == "object"
  },
  vr = function(e) {
    return e !== !1
  },
  qh = function() {
    return typeof window < "u"
  },
  cl = function(e) {
    return gt(e) || Ft(e)
  },
  Tm = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
  Qt = Array.isArray,
  Tf = /(?:-?\.?\d|\.)+/gi,
  Pm = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  zo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  cu = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Lm = /[+-]=-?[.\d]+/,
  Am = /[^,'"\[\]\s]+/gi,
  kE = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ct, jr, Pf, Kh, $r = {},
  ic = {},
  Rm, Om = function(e) {
    return (ic = _o(e, $r)) && xr
  },
  Qh = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
  },
  oc = function(e, t) {
    return !t && console.warn(e)
  },
  Fm = function(e, t) {
    return e && ($r[e] = t) && ic && (ic[e] = t) || $r
  },
  Ta = function() {
    return 0
  },
  SE = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
  },
  Fl = {
    suppressEvents: !0,
    kill: !1
  },
  TE = {
    suppressEvents: !0
  },
  Jh = {},
  ki = [],
  Lf = {},
  Mm, Ar = {},
  uu = {},
  h_ = 30,
  Ml = [],
  Zh = "",
  ed = function(e) {
    var t = e[0],
      n, i;
    if (Rn(t) || gt(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
      for (i = Ml.length; i-- && !Ml[i].targetTest(t););
      n = Ml[i]
    }
    for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new o1(e[i], n))) || e.splice(i, 1);
    return e
  },
  ro = function(e) {
    return e._gsap || ed(Gr(e))[0]._gsap
  },
  Nm = function(e, t, n) {
    return (n = e[t]) && gt(n) ? e[t]() : Gh(n) && e.getAttribute && e.getAttribute(t) || n
  },
  Dr = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
  },
  yt = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  Bt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  ts = function(e, t) {
    var n = t.charAt(0),
      i = parseFloat(t.substr(2));
    return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
  },
  PE = function(e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n;);
    return i < n
  },
  sc = function() {
    var e = ki.length,
      t = ki.slice(0),
      n, i;
    for (Lf = {}, ki.length = 0, n = 0; n < e; n++) i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
  },
  Im = function(e, t, n, i) {
    ki.length && !Kt && sc(), e.render(t, n, i || Kt && t < 0 && (e._initted || e._startAt)), ki.length && !Kt && sc()
  },
  $m = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Am).length < 2 ? t : Ft(e) ? e.trim() : e
  },
  Bm = function(e) {
    return e
  },
  Zr = function(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e
  },
  LE = function(e) {
    return function(t, n) {
      for (var i in n) i in t || i === "duration" && e || i === "ease" || (t[i] = n[i])
    }
  },
  _o = function(e, t) {
    for (var n in t) e[n] = t[n];
    return e
  },
  d_ = function r(e, t) {
    for (var n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = Rn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e
  },
  ac = function(e, t) {
    var n = {},
      i;
    for (i in e) i in t || (n[i] = e[i]);
    return n
  },
  ea = function(e) {
    var t = e.parent || ct,
      n = e.keyframes ? LE(Qt(e.keyframes)) : Zr;
    if (vr(e.inherit))
      for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
    return e
  },
  AE = function(e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n];);
    return n < 0
  },
  Vm = function(e, t, n, i, o) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var s = e[i],
      a;
    if (o)
      for (a = t[o]; s && s[o] > a;) s = s._prev;
    return s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t
  },
  Uc = function(e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var o = t._prev,
      s = t._next;
    o ? o._next = s : e[n] === t && (e[n] = s), s ? s._prev = o : e[i] === t && (e[i] = o), t._next = t._prev = t.parent = null
  },
  Ri = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
  },
  no = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n;) n._dirty = 1, n = n.parent;
    return e
  },
  RE = function(e) {
    for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
    return e
  },
  Af = function(e, t, n, i) {
    return e._startAt && (Kt ? e._startAt.revert(Fl) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
  },
  OE = function r(e) {
    return !e || e._ts && r(e.parent)
  },
  p_ = function(e) {
    return e._repeat ? vs(e._tTime, e = e.duration() + e._rDelay) * e : 0
  },
  vs = function(e, t) {
    var n = Math.floor(e /= t);
    return e && n === e ? n - 1 : n
  },
  lc = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
  },
  jc = function(e) {
    return e._end = Bt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Ke) || 0))
  },
  Wc = function(e, t) {
    var n = e._dp;
    return n && n.smoothChildTiming && e._ts && (e._start = Bt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), jc(e), n._dirty || no(n, e)), e
  },
  Hm = function(e, t) {
    var n;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = lc(e.rawTime(), t), (!t._dur || Ja(0, t.totalDuration(), n) - t._tTime > Ke) && t.render(n, !0)), no(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration())
        for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
      e._zTime = -Ke
    }
  },
  wn = function(e, t, n, i) {
    return t.parent && Ri(t), t._start = Bt((Zn(n) ? n : n || e !== ct ? Ur(e, n, t) : e._time) + t._delay), t._end = Bt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Vm(e, t, "_first", "_last", e._sort ? "_start" : 0), Rf(t) || (e._recent = t), i || Hm(e, t), e._ts < 0 && Wc(e, e._tTime), e
  },
  Um = function(e, t) {
    return ($r.ScrollTrigger || Qh("scrollTrigger", t)) && $r.ScrollTrigger.create(t, e)
  },
  jm = function(e, t, n, i, o) {
    if (rd(e, t, o), !e._initted) return 1;
    if (!n && e._pt && !Kt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Mm !== Or.frame) return ki.push(e), e._lazy = [o, i], 1
  },
  FE = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t))
  },
  Rf = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
  },
  ME = function(e, t, n, i) {
    var o = e.ratio,
      s = t < 0 || !t && (!e._start && FE(e) && !(!e._initted && Rf(e)) || (e._ts < 0 || e._dp._ts < 0) && !Rf(e)) ? 0 : 1,
      a = e._rDelay,
      l = 0,
      c, u, d;
    if (a && e._repeat && (l = Ja(0, e._tDur, t), u = vs(l, a), e._yoyo && u & 1 && (s = 1 - s), u !== vs(e._tTime, a) && (o = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== o || Kt || i || e._zTime === Ke || !t && e._zTime) {
      if (!e._initted && jm(e, t, i, n, l)) return;
      for (d = e._zTime, e._zTime = t || (n ? Ke : 0), n || (n = t && !d), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = l, c = e._pt; c;) c.r(s, c.d), c = c._next;
      t < 0 && Af(e, t, n, !0), e._onUpdate && !n && qr(e, "onUpdate"), l && e._repeat && !n && e.parent && qr(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Ri(e, 1), !n && !Kt && (qr(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
    } else e._zTime || (e._zTime = t)
  },
  NE = function(e, t, n) {
    var i;
    if (n > t)
      for (i = e._first; i && i._start <= n;) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next
      } else
        for (i = e._last; i && i._start >= n;) {
          if (i.data === "isPause" && i._start < t) return i;
          i = i._prev
        }
  },
  Ds = function(e, t, n, i) {
    var o = e._repeat,
      s = Bt(t) || 0,
      a = e._tTime / e._tDur;
    return a && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = o ? o < 0 ? 1e10 : Bt(s * (o + 1) + e._rDelay * o) : s, a > 0 && !i && Wc(e, e._tTime = e._tDur * a), e.parent && jc(e), n || no(e.parent, e), e
  },
  __ = function(e) {
    return e instanceof br ? no(e) : Ds(e, e._dur)
  },
  IE = {
    _start: 0,
    endTime: Ta,
    totalDuration: Ta
  },
  Ur = function r(e, t, n) {
    var i = e.labels,
      o = e._recent || IE,
      s = e.duration() >= zr ? o.endTime(!1) : e._dur,
      a, l, c;
    return Ft(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? o : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = s), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && n && (l = l / 100 * (Qt(n) ? n[0] : n).totalDuration()), a > 1 ? r(e, t.substr(0, a - 1), n) + l : s + l)) : t == null ? s : +t
  },
  ta = function(e, t, n) {
    var i = Zn(t[1]),
      o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = t[o],
      a, l;
    if (i && (s.duration = t[1]), s.parent = n, e) {
      for (a = s, l = n; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = vr(l.vars.inherit) && l.parent;
      s.immediateRender = vr(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[o - 1]
    }
    return new wt(t[0], s, t[o + 1])
  },
  Ii = function(e, t) {
    return e || e === 0 ? t(e) : t
  },
  Ja = function(e, t, n) {
    return n < e ? e : n > t ? t : n
  },
  Gt = function(e, t) {
    return !Ft(e) || !(t = kE.exec(e)) ? "" : t[1]
  },
  $E = function(e, t, n) {
    return Ii(n, function(i) {
      return Ja(e, t, i)
    })
  },
  Of = [].slice,
  Wm = function(e, t) {
    return e && Rn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Rn(e[0])) && !e.nodeType && e !== jr
  },
  BE = function(e, t, n) {
    return n === void 0 && (n = []), e.forEach(function(i) {
      var o;
      return Ft(i) && !t || Wm(i, 1) ? (o = n).push.apply(o, Gr(i)) : n.push(i)
    }) || n
  },
  Gr = function(e, t, n) {
    return pt && !t && pt.selector ? pt.selector(e) : Ft(e) && !n && (Pf || !ws()) ? Of.call((t || Kh).querySelectorAll(e), 0) : Qt(e) ? BE(e, n) : Wm(e) ? Of.call(e, 0) : e ? [e] : []
  },
  Ff = function(e) {
    return e = Gr(e)[0] || oc("Invalid scope") || {},
      function(t) {
        var n = e.current || e.nativeElement || e;
        return Gr(t, n.querySelectorAll ? n : n === e ? oc("Invalid scope") || Kh.createElement("div") : e)
      }
  },
  Xm = function(e) {
    return e.sort(function() {
      return .5 - Math.random()
    })
  },
  Ym = function(e) {
    if (gt(e)) return e;
    var t = Rn(e) ? e : {
        each: e
      },
      n = io(t.ease),
      i = t.from || 0,
      o = parseFloat(t.base) || 0,
      s = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      c = t.axis,
      u = i,
      d = i;
    return Ft(i) ? u = d = {
        center: .5,
        edges: .5,
        end: 1
      } [i] || 0 : !a && l && (u = i[0], d = i[1]),
      function(h, f, _) {
        var p = (_ || t).length,
          m = s[p],
          g, y, b, v, D, k, w, S, P;
        if (!m) {
          if (P = t.grid === "auto" ? 0 : (t.grid || [1, zr])[1], !P) {
            for (w = -zr; w < (w = _[P++].getBoundingClientRect().left) && P < p;);
            P--
          }
          for (m = s[p] = [], g = l ? Math.min(P, p) * u - .5 : i % P, y = P === zr ? 0 : l ? p * d / P - .5 : i / P | 0, w = 0, S = zr, k = 0; k < p; k++) b = k % P - g, v = y - (k / P | 0), m[k] = D = c ? Math.abs(c === "y" ? v : b) : Sm(b * b + v * v), D > w && (w = D), D < S && (S = D);
          i === "random" && Xm(m), m.max = w - S, m.min = S, m.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (P > p ? p - 1 : c ? c === "y" ? p / P : P : Math.max(P, p / P)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? o - p : o, m.u = Gt(t.amount || t.each) || 0, n = n && p < 0 ? r1(n) : n
        }
        return p = (m[h] - m.min) / m.max || 0, Bt(m.b + (n ? n(p) : p) * m.v) + m.u
      }
  },
  Mf = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(n) {
      var i = Bt(Math.round(parseFloat(n) / e) * e * t);
      return (i - i % 1) / t + (Zn(n) ? 0 : Gt(n))
    }
  },
  zm = function(e, t) {
    var n = Qt(e),
      i, o;
    return !n && Rn(e) && (i = n = e.radius || zr, e.values ? (e = Gr(e.values), (o = !Zn(e[0])) && (i *= i)) : e = Mf(e.increment)), Ii(t, n ? gt(e) ? function(s) {
      return o = e(s), Math.abs(o - s) <= i ? o : s
    } : function(s) {
      for (var a = parseFloat(o ? s.x : s), l = parseFloat(o ? s.y : 0), c = zr, u = 0, d = e.length, h, f; d--;) o ? (h = e[d].x - a, f = e[d].y - l, h = h * h + f * f) : h = Math.abs(e[d] - a), h < c && (c = h, u = d);
      return u = !i || c <= i ? e[u] : s, o || u === s || Zn(s) ? u : u + Gt(s)
    } : Mf(e))
  },
  Gm = function(e, t, n, i) {
    return Ii(Qt(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
      return Qt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * i) / i
    })
  },
  VE = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(i) {
      return t.reduce(function(o, s) {
        return s(o)
      }, i)
    }
  },
  HE = function(e, t) {
    return function(n) {
      return e(parseFloat(n)) + (t || Gt(n))
    }
  },
  UE = function(e, t, n) {
    return Km(e, t, 0, 1, n)
  },
  qm = function(e, t, n) {
    return Ii(n, function(i) {
      return e[~~t(i)]
    })
  },
  jE = function r(e, t, n) {
    var i = t - e;
    return Qt(e) ? qm(e, r(0, e.length), t) : Ii(n, function(o) {
      return (i + (o - e) % i) % i + e
    })
  },
  WE = function r(e, t, n) {
    var i = t - e,
      o = i * 2;
    return Qt(e) ? qm(e, r(0, e.length - 1), t) : Ii(n, function(s) {
      return s = (o + (s - e) % o) % o || 0, e + (s > i ? o - s : s)
    })
  },
  Pa = function(e) {
    for (var t = 0, n = "", i, o, s, a; ~(i = e.indexOf("random(", t));) s = e.indexOf(")", i), a = e.charAt(i + 7) === "[", o = e.substr(i + 7, s - i - 7).match(a ? Am : Tf), n += e.substr(t, i - t) + Gm(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5), t = s + 1;
    return n + e.substr(t, e.length - t)
  },
  Km = function(e, t, n, i, o) {
    var s = t - e,
      a = i - n;
    return Ii(o, function(l) {
      return n + ((l - e) / s * a || 0)
    })
  },
  XE = function r(e, t, n, i) {
    var o = isNaN(e + t) ? 0 : function(f) {
      return (1 - f) * e + f * t
    };
    if (!o) {
      var s = Ft(e),
        a = {},
        l, c, u, d, h;
      if (n === !0 && (i = 1) && (n = null), s) e = {
        p: e
      }, t = {
        p: t
      };
      else if (Qt(e) && !Qt(t)) {
        for (u = [], d = e.length, h = d - 2, c = 1; c < d; c++) u.push(r(e[c - 1], e[c]));
        d--, o = function(_) {
          _ *= d;
          var p = Math.min(h, ~~_);
          return u[p](_ - p)
        }, n = t
      } else i || (e = _o(Qt(e) ? [] : {}, e));
      if (!u) {
        for (l in t) td.call(a, e, l, "get", t[l]);
        o = function(_) {
          return od(_, a) || (s ? e.p : e)
        }
      }
    }
    return Ii(n, o)
  },
  g_ = function(e, t, n) {
    var i = e.labels,
      o = zr,
      s, a, l;
    for (s in i) a = i[s] - t, a < 0 == !!n && a && o > (a = Math.abs(a)) && (l = s, o = a);
    return l
  },
  qr = function(e, t, n) {
    var i = e.vars,
      o = i[t],
      s = pt,
      a = e._ctx,
      l, c, u;
    if (o) return l = i[t + "Params"], c = i.callbackScope || e, n && ki.length && sc(), a && (pt = a), u = l ? o.apply(c, l) : o.call(c), pt = s, u
  },
  Vs = function(e) {
    return Ri(e), e.scrollTrigger && e.scrollTrigger.kill(!!Kt), e.progress() < 1 && qr(e, "onInterrupt"), e
  },
  Go, Qm = [],
  Jm = function(e) {
    if (qh() && e) {
      e = !e.name && e.default || e;
      var t = e.name,
        n = gt(e),
        i = t && !n && e.init ? function() {
          this._props = []
        } : e,
        o = {
          init: Ta,
          render: od,
          add: td,
          kill: ak,
          modifier: sk,
          rawVars: 0
        },
        s = {
          targetTest: 0,
          get: 0,
          getSetter: id,
          aliases: {},
          register: 0
        };
      if (ws(), e !== i) {
        if (Ar[t]) return;
        Zr(i, Zr(ac(e, o), s)), _o(i.prototype, _o(o, ac(e, s))), Ar[i.prop = t] = i, e.targetTest && (Ml.push(i), Jh[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
      }
      Fm(t, i), e.register && e.register(xr, i, wr)
    } else e && Qm.push(e)
  },
  Ge = 255,
  Hs = {
    aqua: [0, Ge, Ge],
    lime: [0, Ge, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Ge],
    navy: [0, 0, 128],
    white: [Ge, Ge, Ge],
    olive: [128, 128, 0],
    yellow: [Ge, Ge, 0],
    orange: [Ge, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Ge, 0, 0],
    pink: [Ge, 192, 203],
    cyan: [0, Ge, Ge],
    transparent: [Ge, Ge, Ge, 0]
  },
  fu = function(e, t, n) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Ge + .5 | 0
  },
  Zm = function(e, t, n) {
    var i = e ? Zn(e) ? [e >> 16, e >> 8 & Ge, e & Ge] : 0 : Hs.black,
      o, s, a, l, c, u, d, h, f, _;
    if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Hs[e]) i = Hs[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (o = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + o + o + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Ge, i & Ge, parseInt(e.substr(7), 16) / 255];
        e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Ge, e & Ge]
      } else if (e.substr(0, 3) === "hsl") {
        if (i = _ = e.match(Tf), !t) l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, s = u <= .5 ? u * (c + 1) : u + c - u * c, o = u * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = fu(l + 1 / 3, o, s), i[1] = fu(l, o, s), i[2] = fu(l - 1 / 3, o, s);
        else if (~e.indexOf("=")) return i = e.match(Pm), n && i.length < 4 && (i[3] = 1), i
      } else i = e.match(Tf) || Hs.transparent;
      i = i.map(Number)
    }
    return t && !_ && (o = i[0] / Ge, s = i[1] / Ge, a = i[2] / Ge, d = Math.max(o, s, a), h = Math.min(o, s, a), u = (d + h) / 2, d === h ? l = c = 0 : (f = d - h, c = u > .5 ? f / (2 - d - h) : f / (d + h), l = d === o ? (s - a) / f + (s < a ? 6 : 0) : d === s ? (a - o) / f + 2 : (o - s) / f + 4, l *= 60), i[0] = ~~(l + .5), i[1] = ~~(c * 100 + .5), i[2] = ~~(u * 100 + .5)), n && i.length < 4 && (i[3] = 1), i
  },
  e1 = function(e) {
    var t = [],
      n = [],
      i = -1;
    return e.split(Si).forEach(function(o) {
      var s = o.match(zo) || [];
      t.push.apply(t, s), n.push(i += s.length + 1)
    }), t.c = n, t
  },
  m_ = function(e, t, n) {
    var i = "",
      o = (e + i).match(Si),
      s = t ? "hsla(" : "rgba(",
      a = 0,
      l, c, u, d;
    if (!o) return e;
    if (o = o.map(function(h) {
        return (h = Zm(h, t, 1)) && s + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
      }), n && (u = e1(e), l = n.c, l.join(i) !== u.c.join(i)))
      for (c = e.replace(Si, "1").split(zo), d = c.length - 1; a < d; a++) i += c[a] + (~l.indexOf(a) ? o.shift() || s + "0,0,0,0)" : (u.length ? u : o.length ? o : n).shift());
    if (!c)
      for (c = e.split(Si), d = c.length - 1; a < d; a++) i += c[a] + o[a];
    return i + c[d]
  },
  Si = function() {
    var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Hs) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi")
  }(),
  YE = /hsl[a]?\(/,
  t1 = function(e) {
    var t = e.join(" "),
      n;
    if (Si.lastIndex = 0, Si.test(t)) return n = YE.test(t), e[1] = m_(e[1], n), e[0] = m_(e[0], n, e1(e[1])), !0
  },
  La, Or = function() {
    var r = Date.now,
      e = 500,
      t = 33,
      n = r(),
      i = n,
      o = 1e3 / 240,
      s = o,
      a = [],
      l, c, u, d, h, f, _ = function p(m) {
        var g = r() - i,
          y = m === !0,
          b, v, D, k;
        if (g > e && (n += g - t), i += g, D = i - n, b = D - s, (b > 0 || y) && (k = ++d.frame, h = D - d.time * 1e3, d.time = D = D / 1e3, s += b + (b >= o ? 4 : o - b), v = 1), y || (l = c(p)), v)
          for (f = 0; f < a.length; f++) a[f](D, h, k, m)
      };
    return d = {
      time: 0,
      frame: 0,
      tick: function() {
        _(!0)
      },
      deltaRatio: function(m) {
        return h / (1e3 / (m || 60))
      },
      wake: function() {
        Rm && (!Pf && qh() && (jr = Pf = window, Kh = jr.document || {}, $r.gsap = xr, (jr.gsapVersions || (jr.gsapVersions = [])).push(xr.version), Om(ic || jr.GreenSockGlobals || !jr.gsap && jr || {}), u = jr.requestAnimationFrame, Qm.forEach(Jm)), l && d.sleep(), c = u || function(m) {
          return setTimeout(m, s - d.time * 1e3 + 1 | 0)
        }, La = 1, _(2))
      },
      sleep: function() {
        (u ? jr.cancelAnimationFrame : clearTimeout)(l), La = 0, c = Ta
      },
      lagSmoothing: function(m, g) {
        e = m || 1 / 0, t = Math.min(g || 33, e)
      },
      fps: function(m) {
        o = 1e3 / (m || 240), s = d.time * 1e3 + o
      },
      add: function(m, g, y) {
        var b = g ? function(v, D, k, w) {
          m(v, D, k, w), d.remove(b)
        } : m;
        return d.remove(m), a[y ? "unshift" : "push"](b), ws(), b
      },
      remove: function(m, g) {
        ~(g = a.indexOf(m)) && a.splice(g, 1) && f >= g && f--
      },
      _listeners: a
    }, d
  }(),
  ws = function() {
    return !La && Or.wake()
  },
  Me = {},
  zE = /^[\d.\-M][\d.\-,\s]/,
  GE = /["']/g,
  qE = function(e) {
    for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], o = 1, s = n.length, a, l, c; o < s; o++) l = n[o], a = o !== s - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[i] = isNaN(c) ? c.replace(GE, "").trim() : +c, i = l.substr(a + 1).trim();
    return t
  },
  KE = function(e) {
    var t = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n)
  },
  QE = function(e) {
    var t = (e + "").split("("),
      n = Me[t[0]];
    return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [qE(t[1])] : KE(e).split(",").map($m)) : Me._CE && zE.test(e) ? Me._CE("", e) : n
  },
  r1 = function(e) {
    return function(t) {
      return 1 - e(1 - t)
    }
  },
  n1 = function r(e, t) {
    for (var n = e._first, i; n;) n instanceof br ? r(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? r(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next
  },
  io = function(e, t) {
    return e && (gt(e) ? e : Me[e] || QE(e)) || t
  },
  Co = function(e, t, n, i) {
    n === void 0 && (n = function(l) {
      return 1 - t(1 - l)
    }), i === void 0 && (i = function(l) {
      return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
    });
    var o = {
        easeIn: t,
        easeOut: n,
        easeInOut: i
      },
      s;
    return Dr(e, function(a) {
      Me[a] = $r[a] = o, Me[s = a.toLowerCase()] = n;
      for (var l in o) Me[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Me[a + "." + l] = o[l]
    }), o
  },
  i1 = function(e) {
    return function(t) {
      return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
  },
  hu = function r(e, t, n) {
    var i = t >= 1 ? t : 1,
      o = (n || (e ? .3 : .45)) / (t < 1 ? t : 1),
      s = o / Sf * (Math.asin(1 / i) || 0),
      a = function(u) {
        return u === 1 ? 1 : i * Math.pow(2, -10 * u) * EE((u - s) * o) + 1
      },
      l = e === "out" ? a : e === "in" ? function(c) {
        return 1 - a(1 - c)
      } : i1(a);
    return o = Sf / o, l.config = function(c, u) {
      return r(e, c, u)
    }, l
  },
  du = function r(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function(s) {
        return s ? --s * s * ((t + 1) * s + t) + 1 : 0
      },
      i = e === "out" ? n : e === "in" ? function(o) {
        return 1 - n(1 - o)
      } : i1(n);
    return i.config = function(o) {
      return r(e, o)
    }, i
  };
Dr("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
  var t = e < 5 ? e + 1 : e;
  Co(r + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t)
  } : function(n) {
    return n
  }, function(n) {
    return 1 - Math.pow(1 - n, t)
  }, function(n) {
    return n < .5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2
  })
});
Me.Linear.easeNone = Me.none = Me.Linear.easeIn;
Co("Elastic", hu("in"), hu("out"), hu());
(function(r, e) {
  var t = 1 / e,
    n = 2 * t,
    i = 2.5 * t,
    o = function(a) {
      return a < t ? r * a * a : a < n ? r * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? r * (a -= 2.25 / e) * a + .9375 : r * Math.pow(a - 2.625 / e, 2) + .984375
    };
  Co("Bounce", function(s) {
    return 1 - o(1 - s)
  }, o)
})(7.5625, 2.75);
Co("Expo", function(r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0
});
Co("Circ", function(r) {
  return -(Sm(1 - r * r) - 1)
});
Co("Sine", function(r) {
  return r === 1 ? 1 : -CE(r * wE) + 1
});
Co("Back", du("in"), du("out"), du());
Me.SteppedEase = Me.steps = $r.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e,
      i = e + (t ? 0 : 1),
      o = t ? 1 : 0,
      s = 1 - Ke;
    return function(a) {
      return ((i * Ja(0, s, a) | 0) + o) * n
    }
  }
};
bs.ease = Me["quad.out"];
Dr("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return Zh += r + "," + r + "Params,"
});
var o1 = function(e, t) {
    this.id = xE++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Nm, this.set = t ? t.getSetter : id
  },
  Aa = function() {
    function r(t) {
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ds(this, +t.duration, 1, 1), this.data = t.data, pt && (this._ctx = pt, pt.data.push(this)), La || Or.wake()
    }
    var e = r.prototype;
    return e.delay = function(n) {
      return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay
    }, e.duration = function(n) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
    }, e.totalDuration = function(n) {
      return arguments.length ? (this._dirty = 0, Ds(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function(n, i) {
      if (ws(), !arguments.length) return this._tTime;
      var o = this._dp;
      if (o && o.smoothChildTiming && this._ts) {
        for (Wc(this, n), !o._dp || o.parent || Hm(o, this); o && o.parent;) o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && wn(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Ke || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Im(this, n, i)), this
    }, e.time = function(n, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + p_(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time
    }, e.totalProgress = function(n, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, e.progress = function(n, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + p_(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, e.iteration = function(n, i) {
      var o = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (n - 1) * o, i) : this._repeat ? vs(this._tTime, o) + 1 : 1
    }, e.timeScale = function(n) {
      if (!arguments.length) return this._rts === -Ke ? 0 : this._rts;
      if (this._rts === n) return this;
      var i = this.parent && this._ts ? lc(this.parent._time, this) : this._tTime;
      return this._rts = +n || 0, this._ts = this._ps || n === -Ke ? 0 : this._rts, this.totalTime(Ja(-Math.abs(this._delay), this._tDur, i), !0), jc(this), RE(this)
    }, e.paused = function(n) {
      return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ws(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Ke && (this._tTime -= Ke)))), this) : this._ps
    }, e.startTime = function(n) {
      if (arguments.length) {
        this._start = n;
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && wn(i, this, n - this._delay), this
      }
      return this._start
    }, e.endTime = function(n) {
      return this._start + (vr(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function(n) {
      var i = this.parent || this._dp;
      return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? lc(i.rawTime(n), this) : this._tTime : this._tTime
    }, e.revert = function(n) {
      n === void 0 && (n = TE);
      var i = Kt;
      return Kt = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), Kt = i, this
    }, e.globalTime = function(n) {
      for (var i = this, o = arguments.length ? n : i.rawTime(); i;) o = i._start + o / (i._ts || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(n) : o
    }, e.repeat = function(n) {
      return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, __(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function(n) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = n, __(this), i ? this.time(i) : this
      }
      return this._rDelay
    }, e.yoyo = function(n) {
      return arguments.length ? (this._yoyo = n, this) : this._yoyo
    }, e.seek = function(n, i) {
      return this.totalTime(Ur(this, n), vr(i))
    }, e.restart = function(n, i) {
      return this.play().totalTime(n ? -this._delay : 0, vr(i))
    }, e.play = function(n, i) {
      return n != null && this.seek(n, i), this.reversed(!1).paused(!1)
    }, e.reverse = function(n, i) {
      return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e.pause = function(n, i) {
      return n != null && this.seek(n, i), this.paused(!0)
    }, e.resume = function() {
      return this.paused(!1)
    }, e.reversed = function(n) {
      return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Ke : 0)), this) : this._rts < 0
    }, e.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -Ke, this
    }, e.isActive = function() {
      var n = this.parent || this._dp,
        i = this._start,
        o;
      return !!(!n || this._ts && this._initted && n.isActive() && (o = n.rawTime(!0)) >= i && o < this.endTime(!0) - Ke)
    }, e.eventCallback = function(n, i, o) {
      var s = this.vars;
      return arguments.length > 1 ? (i ? (s[n] = i, o && (s[n + "Params"] = o), n === "onUpdate" && (this._onUpdate = i)) : delete s[n], this) : s[n]
    }, e.then = function(n) {
      var i = this;
      return new Promise(function(o) {
        var s = gt(n) ? n : Bm,
          a = function() {
            var c = i.then;
            i.then = null, gt(s) && (s = s(i)) && (s.then || s === i) && (i.then = c), o(s), i.then = c
          };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
      })
    }, e.kill = function() {
      Vs(this)
    }, r
  }();
Zr(Aa.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Ke,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var br = function(r) {
  km(e, r);

  function e(n, i) {
    var o;
    return n === void 0 && (n = {}), o = r.call(this, n) || this, o.labels = {}, o.smoothChildTiming = !!n.smoothChildTiming, o.autoRemoveChildren = !!n.autoRemoveChildren, o._sort = vr(n.sortChildren), ct && wn(n.parent || ct, In(o), i), n.reversed && o.reverse(), n.paused && o.paused(!0), n.scrollTrigger && Um(In(o), n.scrollTrigger), o
  }
  var t = e.prototype;
  return t.to = function(i, o, s) {
    return ta(0, arguments, this), this
  }, t.from = function(i, o, s) {
    return ta(1, arguments, this), this
  }, t.fromTo = function(i, o, s, a) {
    return ta(2, arguments, this), this
  }, t.set = function(i, o, s) {
    return o.duration = 0, o.parent = this, ea(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new wt(i, o, Ur(this, s), 1), this
  }, t.call = function(i, o, s) {
    return wn(this, wt.delayedCall(0, i, o), s)
  }, t.staggerTo = function(i, o, s, a, l, c, u) {
    return s.duration = o, s.stagger = s.stagger || a, s.onComplete = c, s.onCompleteParams = u, s.parent = this, new wt(i, s, Ur(this, l)), this
  }, t.staggerFrom = function(i, o, s, a, l, c, u) {
    return s.runBackwards = 1, ea(s).immediateRender = vr(s.immediateRender), this.staggerTo(i, o, s, a, l, c, u)
  }, t.staggerFromTo = function(i, o, s, a, l, c, u, d) {
    return a.startAt = s, ea(a).immediateRender = vr(a.immediateRender), this.staggerTo(i, o, a, l, c, u, d)
  }, t.render = function(i, o, s) {
    var a = this._time,
      l = this._dirty ? this.totalDuration() : this._tDur,
      c = this._dur,
      u = i <= 0 ? 0 : Bt(i),
      d = this._zTime < 0 != i < 0 && (this._initted || !c),
      h, f, _, p, m, g, y, b, v, D, k, w;
    if (this !== ct && u > l && i >= 0 && (u = l), u !== this._tTime || s || d) {
      if (a !== this._time && c && (u += this._time - a, i += this._time - a), h = u, v = this._start, b = this._ts, g = !b, d && (c || (a = this._zTime), (i || !o) && (this._zTime = i)), this._repeat) {
        if (k = this._yoyo, m = c + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, o, s);
        if (h = Bt(u % m), u === l ? (p = this._repeat, h = c) : (p = ~~(u / m), p && p === u / m && (h = c, p--), h > c && (h = c)), D = vs(this._tTime, m), !a && this._tTime && D !== p && this._tTime - D * m - this._dur <= 0 && (D = p), k && p & 1 && (h = c - h, w = 1), p !== D && !this._lock) {
          var S = k && D & 1,
            P = S === (k && p & 1);
          if (p < D && (S = !S), a = S ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (w ? 0 : Bt(p * m)), o, !c)._lock = 0, this._tTime = u, !o && this.parent && qr(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1), a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (c = this._dur, l = this._tDur, P && (this._lock = 2, a = S ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !g) return this;
          n1(this, w)
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = NE(this, Bt(a), Bt(h)), y && (u -= h - (h = y._start))), this._tTime = u, this._time = h, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && h && !o && !p && (qr(this, "onStart"), this._tTime !== u)) return this;
      if (h >= a && i >= 0)
        for (f = this._first; f;) {
          if (_ = f._next, (f._act || h >= f._start) && f._ts && y !== f) {
            if (f.parent !== this) return this.render(i, o, s);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, o, s), h !== this._time || !this._ts && !g) {
              y = 0, _ && (u += this._zTime = -Ke);
              break
            }
          }
          f = _
        } else {
          f = this._last;
          for (var C = i < 0 ? i : h; f;) {
            if (_ = f._prev, (f._act || C <= f._end) && f._ts && y !== f) {
              if (f.parent !== this) return this.render(i, o, s);
              if (f.render(f._ts > 0 ? (C - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (C - f._start) * f._ts, o, s || Kt && (f._initted || f._startAt)), h !== this._time || !this._ts && !g) {
                y = 0, _ && (u += this._zTime = C ? -Ke : Ke);
                break
              }
            }
            f = _
          }
        }
      if (y && !o && (this.pause(), y.render(h >= a ? 0 : -Ke)._zTime = h >= a ? 1 : -1, this._ts)) return this._start = v, jc(this), this.render(i, o, s);
      this._onUpdate && !o && qr(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (v === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Ri(this, 1), !o && !(i < 0 && !a) && (u || a || !l) && (qr(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
    }
    return this
  }, t.add = function(i, o) {
    var s = this;
    if (Zn(o) || (o = Ur(this, o, i)), !(i instanceof Aa)) {
      if (Qt(i)) return i.forEach(function(a) {
        return s.add(a, o)
      }), this;
      if (Ft(i)) return this.addLabel(i, o);
      if (gt(i)) i = wt.delayedCall(0, i);
      else return this
    }
    return this !== i ? wn(this, i, o) : this
  }, t.getChildren = function(i, o, s, a) {
    i === void 0 && (i = !0), o === void 0 && (o = !0), s === void 0 && (s = !0), a === void 0 && (a = -zr);
    for (var l = [], c = this._first; c;) c._start >= a && (c instanceof wt ? o && l.push(c) : (s && l.push(c), i && l.push.apply(l, c.getChildren(!0, o, s)))), c = c._next;
    return l
  }, t.getById = function(i) {
    for (var o = this.getChildren(1, 1, 1), s = o.length; s--;)
      if (o[s].vars.id === i) return o[s]
  }, t.remove = function(i) {
    return Ft(i) ? this.removeLabel(i) : gt(i) ? this.killTweensOf(i) : (Uc(this, i), i === this._recent && (this._recent = this._last), no(this))
  }, t.totalTime = function(i, o) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Bt(Or.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, o), this._forcing = 0, this) : this._tTime
  }, t.addLabel = function(i, o) {
    return this.labels[i] = Ur(this, o), this
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this
  }, t.addPause = function(i, o, s) {
    var a = wt.delayedCall(0, o || Ta, s);
    return a.data = "isPause", this._hasPause = 1, wn(this, a, Ur(this, i))
  }, t.removePause = function(i) {
    var o = this._first;
    for (i = Ur(this, i); o;) o._start === i && o.data === "isPause" && Ri(o), o = o._next
  }, t.killTweensOf = function(i, o, s) {
    for (var a = this.getTweensOf(i, s), l = a.length; l--;) yi !== a[l] && a[l].kill(i, o);
    return this
  }, t.getTweensOf = function(i, o) {
    for (var s = [], a = Gr(i), l = this._first, c = Zn(o), u; l;) l instanceof wt ? PE(l._targets, a) && (c ? (!yi || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && s.push(l) : (u = l.getTweensOf(a, o)).length && s.push.apply(s, u), l = l._next;
    return s
  }, t.tweenTo = function(i, o) {
    o = o || {};
    var s = this,
      a = Ur(s, i),
      l = o,
      c = l.startAt,
      u = l.onStart,
      d = l.onStartParams,
      h = l.immediateRender,
      f, _ = wt.to(s, Zr({
        ease: o.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: a,
        overwrite: "auto",
        duration: o.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale()) || Ke,
        onStart: function() {
          if (s.pause(), !f) {
            var m = o.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale());
            _._dur !== m && Ds(_, m, 0, 1).render(_._time, !0, !0), f = 1
          }
          u && u.apply(_, d || [])
        }
      }, o));
    return h ? _.render(0) : _
  }, t.tweenFromTo = function(i, o, s) {
    return this.tweenTo(o, Zr({
      startAt: {
        time: Ur(this, i)
      }
    }, s))
  }, t.recent = function() {
    return this._recent
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), g_(this, Ur(this, i))
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), g_(this, Ur(this, i), 1)
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Ke)
  }, t.shiftChildren = function(i, o, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, l = this.labels, c; a;) a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (o)
      for (c in l) l[c] >= s && (l[c] += i);
    return no(this)
  }, t.invalidate = function(i) {
    var o = this._first;
    for (this._lock = 0; o;) o.invalidate(i), o = o._next;
    return r.prototype.invalidate.call(this, i)
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var o = this._first, s; o;) s = o._next, this.remove(o), o = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), no(this)
  }, t.totalDuration = function(i) {
    var o = 0,
      s = this,
      a = s._last,
      l = zr,
      c, u, d;
    if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (d = s.parent; a;) c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && s._sort && a._ts && !s._lock ? (s._lock = 1, wn(s, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (o -= u, (!d && !s._dp || d && d.smoothChildTiming) && (s._start += u / s._ts, s._time -= u, s._tTime -= u), s.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > o && a._ts && (o = a._end), a = c;
      Ds(s, s === ct && s._time > o ? s._time : o, 1, 1), s._dirty = 0
    }
    return s._tDur
  }, e.updateRoot = function(i) {
    if (ct._ts && (Im(ct, lc(i, ct)), Mm = Or.frame), Or.frame >= h_) {
      h_ += Nr.autoSleep || 120;
      var o = ct._first;
      if ((!o || !o._ts) && Nr.autoSleep && Or._listeners.length < 2) {
        for (; o && !o._ts;) o = o._next;
        o || Or.sleep()
      }
    }
  }, e
}(Aa);
Zr(br.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var JE = function(e, t, n, i, o, s, a) {
    var l = new wr(this._pt, e, t, 0, 1, f1, null, o),
      c = 0,
      u = 0,
      d, h, f, _, p, m, g, y;
    for (l.b = n, l.e = i, n += "", i += "", (g = ~i.indexOf("random(")) && (i = Pa(i)), s && (y = [n, i], s(y, e, t), n = y[0], i = y[1]), h = n.match(cu) || []; d = cu.exec(i);) _ = d[0], p = i.substring(c, d.index), f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1), _ !== h[u++] && (m = parseFloat(h[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || u === 1 ? p : ",",
      s: m,
      c: _.charAt(1) === "=" ? ts(m, _) - m : parseFloat(_) - m,
      m: f && f < 4 ? Math.round : 0
    }, c = cu.lastIndex);
    return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (Lm.test(i) || g) && (l.e = 0), this._pt = l, l
  },
  td = function(e, t, n, i, o, s, a, l, c, u) {
    gt(i) && (i = i(o || 0, e, s));
    var d = e[t],
      h = n !== "get" ? n : gt(d) ? c ? e[t.indexOf("set") || !gt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : d,
      f = gt(d) ? c ? nk : c1 : nd,
      _;
    if (Ft(i) && (~i.indexOf("random(") && (i = Pa(i)), i.charAt(1) === "=" && (_ = ts(h, i) + (Gt(h) || 0), (_ || _ === 0) && (i = _))), !u || h !== i || Nf) return !isNaN(h * i) && i !== "" ? (_ = new wr(this._pt, e, t, +h || 0, i - (h || 0), typeof d == "boolean" ? ok : u1, 0, f), c && (_.fp = c), a && _.modifier(a, this, e), this._pt = _) : (!d && !(t in e) && Qh(t, i), JE.call(this, e, t, h, i, f, l || Nr.stringFilter, c))
  },
  ZE = function(e, t, n, i, o) {
    if (gt(e) && (e = ra(e, o, t, n, i)), !Rn(e) || e.style && e.nodeType || Qt(e) || Tm(e)) return Ft(e) ? ra(e, o, t, n, i) : e;
    var s = {},
      a;
    for (a in e) s[a] = ra(e[a], o, t, n, i);
    return s
  },
  s1 = function(e, t, n, i, o, s) {
    var a, l, c, u;
    if (Ar[e] && (a = new Ar[e]).init(o, a.rawVars ? t[e] : ZE(t[e], i, o, s, n), n, i, s) !== !1 && (n._pt = l = new wr(n._pt, o, e, 0, 1, a.render, a, 0, a.priority), n !== Go))
      for (c = n._ptLookup[n._targets.indexOf(o)], u = a._props.length; u--;) c[a._props[u]] = l;
    return a
  },
  yi, Nf, rd = function r(e, t, n) {
    var i = e.vars,
      o = i.ease,
      s = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      c = i.onUpdate,
      u = i.onUpdateParams,
      d = i.callbackScope,
      h = i.runBackwards,
      f = i.yoyoEase,
      _ = i.keyframes,
      p = i.autoRevert,
      m = e._dur,
      g = e._startAt,
      y = e._targets,
      b = e.parent,
      v = b && b.data === "nested" ? b.vars.targets : y,
      D = e._overwrite === "auto" && !zh,
      k = e.timeline,
      w, S, P, C, R, N, B, z, U, V, Y, oe, $;
    if (k && (!_ || !o) && (o = "none"), e._ease = io(o, bs.ease), e._yEase = f ? r1(io(f === !0 ? o : f, bs.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !k && !!i.runBackwards, !k || _ && !i.stagger) {
      if (z = y[0] ? ro(y[0]).harness : 0, oe = z && i[z.prop], w = ac(i, Jh), g && (g._zTime < 0 && g.progress(1), t < 0 && h && a && !p ? g.render(-1, !0) : g.revert(h && m ? Fl : SE), g._lazy = 0), s) {
        if (Ri(e._startAt = wt.set(y, Zr({
            data: "isStart",
            overwrite: !1,
            parent: b,
            immediateRender: !0,
            lazy: !g && vr(l),
            startAt: null,
            delay: 0,
            onUpdate: c,
            onUpdateParams: u,
            callbackScope: d,
            stagger: 0
          }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Kt || !a && !p) && e._startAt.revert(Fl), a && m && t <= 0 && n <= 0) {
          t && (e._zTime = t);
          return
        }
      } else if (h && m && !g) {
        if (t && (a = !1), P = Zr({
            overwrite: !1,
            data: "isFromStart",
            lazy: a && !g && vr(l),
            immediateRender: a,
            stagger: 0,
            parent: b
          }, w), oe && (P[z.prop] = oe), Ri(e._startAt = wt.set(y, P)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Kt ? e._startAt.revert(Fl) : e._startAt.render(-1, !0)), e._zTime = t, !a) r(e._startAt, Ke, Ke);
        else if (!t) return
      }
      for (e._pt = e._ptCache = 0, l = m && vr(l) || l && !m, S = 0; S < y.length; S++) {
        if (R = y[S], B = R._gsap || ed(y)[S]._gsap, e._ptLookup[S] = V = {}, Lf[B.id] && ki.length && sc(), Y = v === y ? S : v.indexOf(R), z && (U = new z).init(R, oe || w, e, Y, v) !== !1 && (e._pt = C = new wr(e._pt, R, U.name, 0, 1, U.render, U, 0, U.priority), U._props.forEach(function(L) {
            V[L] = C
          }), U.priority && (N = 1)), !z || oe)
          for (P in w) Ar[P] && (U = s1(P, w, e, Y, R, v)) ? U.priority && (N = 1) : V[P] = C = td.call(e, R, P, "get", w[P], Y, v, 0, i.stringFilter);
        e._op && e._op[S] && e.kill(R, e._op[S]), D && e._pt && (yi = e, ct.killTweensOf(R, V, e.globalTime(t)), $ = !e.parent, yi = 0), e._pt && l && (Lf[B.id] = 1)
      }
      N && h1(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = c, e._initted = (!e._op || e._pt) && !$, _ && t <= 0 && k.render(zr, !0, !0)
  },
  ek = function(e, t, n, i, o, s, a) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[t],
      c, u, d, h;
    if (!l)
      for (l = e._ptCache[t] = [], d = e._ptLookup, h = e._targets.length; h--;) {
        if (c = d[h][t], c && c.d && c.d._pt)
          for (c = c.d._pt; c && c.p !== t && c.fp !== t;) c = c._next;
        if (!c) return Nf = 1, e.vars[t] = "+=0", rd(e, a), Nf = 0, 1;
        l.push(c)
      }
    for (h = l.length; h--;) u = l[h], c = u._pt || u, c.s = (i || i === 0) && !o ? i : c.s + (i || 0) + s * c.c, c.c = n - c.s, u.e && (u.e = yt(n) + Gt(u.e)), u.b && (u.b = c.s + Gt(u.b))
  },
  tk = function(e, t) {
    var n = e[0] ? ro(e[0]).harness : 0,
      i = n && n.aliases,
      o, s, a, l;
    if (!i) return t;
    o = _o({}, t);
    for (s in i)
      if (s in o)
        for (l = i[s].split(","), a = l.length; a--;) o[l[a]] = o[s];
    return o
  },
  rk = function(e, t, n, i) {
    var o = t.ease || i || "power1.inOut",
      s, a;
    if (Qt(t)) a = n[e] || (n[e] = []), t.forEach(function(l, c) {
      return a.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: o
      })
    });
    else
      for (s in t) a = n[s] || (n[s] = []), s === "ease" || a.push({
        t: parseFloat(e),
        v: t[s],
        e: o
      })
  },
  ra = function(e, t, n, i, o) {
    return gt(e) ? e.call(t, n, i, o) : Ft(e) && ~e.indexOf("random(") ? Pa(e) : e
  },
  a1 = Zh + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  l1 = {};
Dr(a1 + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return l1[r] = 1
});
var wt = function(r) {
  km(e, r);

  function e(n, i, o, s) {
    var a;
    typeof i == "number" && (o.duration = i, i = o, o = null), a = r.call(this, s ? i : ea(i)) || this;
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      f = l.overwrite,
      _ = l.keyframes,
      p = l.defaults,
      m = l.scrollTrigger,
      g = l.yoyoEase,
      y = i.parent || ct,
      b = (Qt(n) || Tm(n) ? Zn(n[0]) : "length" in i) ? [n] : Gr(n),
      v, D, k, w, S, P, C, R;
    if (a._targets = b.length ? ed(b) : oc("GSAP target " + n + " not found. https://greensock.com", !Nr.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || cl(c) || cl(u)) {
      if (i = a.vars, v = a.timeline = new br({
          data: "nested",
          defaults: p || {},
          targets: y && y.data === "nested" ? y.vars.targets : b
        }), v.kill(), v.parent = v._dp = In(a), v._start = 0, h || cl(c) || cl(u)) {
        if (w = b.length, C = h && Ym(h), Rn(h))
          for (S in h) ~a1.indexOf(S) && (R || (R = {}), R[S] = h[S]);
        for (D = 0; D < w; D++) k = ac(i, l1), k.stagger = 0, g && (k.yoyoEase = g), R && _o(k, R), P = b[D], k.duration = +ra(c, In(a), D, P, b), k.delay = (+ra(u, In(a), D, P, b) || 0) - a._delay, !h && w === 1 && k.delay && (a._delay = u = k.delay, a._start += u, k.delay = 0), v.to(P, k, C ? C(D, P, b) : 0), v._ease = Me.none;
        v.duration() ? c = u = 0 : a.timeline = 0
      } else if (_) {
        ea(Zr(v.vars.defaults, {
          ease: "none"
        })), v._ease = io(_.ease || i.ease || "none");
        var N = 0,
          B, z, U;
        if (Qt(_)) _.forEach(function(V) {
          return v.to(b, V, ">")
        }), v.duration();
        else {
          k = {};
          for (S in _) S === "ease" || S === "easeEach" || rk(S, _[S], k, _.easeEach);
          for (S in k)
            for (B = k[S].sort(function(V, Y) {
                return V.t - Y.t
              }), N = 0, D = 0; D < B.length; D++) z = B[D], U = {
              ease: z.e,
              duration: (z.t - (D ? B[D - 1].t : 0)) / 100 * c
            }, U[S] = z.v, v.to(b, U, N), N += U.duration;
          v.duration() < c && v.to({}, {
            duration: c - v.duration()
          })
        }
      }
      c || a.duration(c = v.duration())
    } else a.timeline = 0;
    return f === !0 && !zh && (yi = In(a), ct.killTweensOf(b), yi = 0), wn(y, In(a), o), i.reversed && a.reverse(), i.paused && a.paused(!0), (d || !c && !_ && a._start === Bt(y._time) && vr(d) && OE(In(a)) && y.data !== "nested") && (a._tTime = -Ke, a.render(Math.max(0, -u) || 0)), m && Um(In(a), m), a
  }
  var t = e.prototype;
  return t.render = function(i, o, s) {
    var a = this._time,
      l = this._tDur,
      c = this._dur,
      u = i < 0,
      d = i > l - Ke && !u ? l : i < Ke ? 0 : i,
      h, f, _, p, m, g, y, b, v;
    if (!c) ME(this, i, o, s);
    else if (d !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (h = d, b = this.timeline, this._repeat) {
        if (p = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(p * 100 + i, o, s);
        if (h = Bt(d % p), d === l ? (_ = this._repeat, h = c) : (_ = ~~(d / p), _ && _ === d / p && (h = c, _--), h > c && (h = c)), g = this._yoyo && _ & 1, g && (v = this._yEase, h = c - h), m = vs(this._tTime, p), h === a && !s && this._initted) return this._tTime = d, this;
        _ !== m && (b && this._yEase && n1(b, g), this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1, this.render(Bt(p * _), !0).invalidate()._lock = 0))
      }
      if (!this._initted) {
        if (jm(this, u ? i : h, s, o, d)) return this._tTime = 0, this;
        if (a !== this._time) return this;
        if (c !== this._dur) return this.render(i, o, s)
      }
      if (this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (v || this._ease)(h / c), this._from && (this.ratio = y = 1 - y), h && !a && !o && !_ && (qr(this, "onStart"), this._tTime !== d)) return this;
      for (f = this._pt; f;) f.r(y, f.d), f = f._next;
      b && b.render(i < 0 ? i : !h && g ? -Ke : b._dur * b._ease(h / this._dur), o, s) || this._startAt && (this._zTime = i), this._onUpdate && !o && (u && Af(this, i, o, s), qr(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !o && this.parent && qr(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (u && !this._onUpdate && Af(this, i, !0, !0), (i || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ri(this, 1), !o && !(u && !a) && (d || a || g) && (qr(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()))
    }
    return this
  }, t.targets = function() {
    return this._targets
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i)
  }, t.resetTo = function(i, o, s, a) {
    La || Or.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      c;
    return this._initted || rd(this, l), c = this._ease(l / this._dur), ek(this, i, o, s, a, c, l) ? this.resetTo(i, o, s, a) : (Wc(this, 0), this.parent || Vm(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
  }, t.kill = function(i, o) {
    if (o === void 0 && (o = "all"), !i && (!o || o === "all")) return this._lazy = this._pt = 0, this.parent ? Vs(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, o, yi && yi.vars.overwrite !== !0)._first || Vs(this), this.parent && s !== this.timeline.totalDuration() && Ds(this, this._dur * this.timeline._tDur / s, 0, 1), this
    }
    var a = this._targets,
      l = i ? Gr(i) : a,
      c = this._ptLookup,
      u = this._pt,
      d, h, f, _, p, m, g;
    if ((!o || o === "all") && AE(a, l)) return o === "all" && (this._pt = 0), Vs(this);
    for (d = this._op = this._op || [], o !== "all" && (Ft(o) && (p = {}, Dr(o, function(y) {
        return p[y] = 1
      }), o = p), o = tk(a, o)), g = a.length; g--;)
      if (~l.indexOf(a[g])) {
        h = c[g], o === "all" ? (d[g] = o, _ = h, f = {}) : (f = d[g] = d[g] || {}, _ = o);
        for (p in _) m = h && h[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && Uc(this, m, "_pt"), delete h[p]), f !== "all" && (f[p] = 1)
      } return this._initted && !this._pt && u && Vs(this), this
  }, e.to = function(i, o) {
    return new e(i, o, arguments[2])
  }, e.from = function(i, o) {
    return ta(1, arguments)
  }, e.delayedCall = function(i, o, s, a) {
    return new e(o, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: o,
      onReverseComplete: o,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    })
  }, e.fromTo = function(i, o, s) {
    return ta(2, arguments)
  }, e.set = function(i, o) {
    return o.duration = 0, o.repeatDelay || (o.repeat = 0), new e(i, o)
  }, e.killTweensOf = function(i, o, s) {
    return ct.killTweensOf(i, o, s)
  }, e
}(Aa);
Zr(wt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Dr("staggerTo,staggerFrom,staggerFromTo", function(r) {
  wt[r] = function() {
    var e = new br,
      t = Of.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t)
  }
});
var nd = function(e, t, n) {
    return e[t] = n
  },
  c1 = function(e, t, n) {
    return e[t](n)
  },
  nk = function(e, t, n, i) {
    return e[t](i.fp, n)
  },
  ik = function(e, t, n) {
    return e.setAttribute(t, n)
  },
  id = function(e, t) {
    return gt(e[t]) ? c1 : Gh(e[t]) && e.setAttribute ? ik : nd
  },
  u1 = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
  },
  ok = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
  },
  f1 = function(e, t) {
    var n = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
      i += t.c
    }
    t.set(t.t, t.p, i, t)
  },
  od = function(e, t) {
    for (var n = t._pt; n;) n.r(e, n.d), n = n._next
  },
  sk = function(e, t, n, i) {
    for (var o = this._pt, s; o;) s = o._next, o.p === i && o.modifier(e, t, n), o = s
  },
  ak = function(e) {
    for (var t = this._pt, n, i; t;) i = t._next, t.p === e && !t.op || t.op === e ? Uc(this, t, "_pt") : t.dep || (n = 1), t = i;
    return !n
  },
  lk = function(e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i)
  },
  h1 = function(e) {
    for (var t = e._pt, n, i, o, s; t;) {
      for (n = t._next, i = o; i && i.pr > t.pr;) i = i._next;
      (t._prev = i ? i._prev : s) ? t._prev._next = t: o = t, (t._next = i) ? i._prev = t : s = t, t = n
    }
    e._pt = o
  },
  wr = function() {
    function r(t, n, i, o, s, a, l, c, u) {
      this.t = n, this.s = o, this.c = s, this.p = i, this.r = a || u1, this.d = l || this, this.set = c || nd, this.pr = u || 0, this._next = t, t && (t._prev = this)
    }
    var e = r.prototype;
    return e.modifier = function(n, i, o) {
      this.mSet = this.mSet || this.set, this.set = lk, this.m = n, this.mt = o, this.tween = i
    }, r
  }();
Dr(Zh + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
  return Jh[r] = 1
});
$r.TweenMax = $r.TweenLite = wt;
$r.TimelineLite = $r.TimelineMax = br;
ct = new br({
  sortChildren: !1,
  defaults: bs,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Nr.stringFilter = t1;
var oo = [],
  Nl = {},
  ck = [],
  y_ = 0,
  uk = 0,
  pu = function(e) {
    return (Nl[e] || ck).map(function(t) {
      return t()
    })
  },
  If = function() {
    var e = Date.now(),
      t = [];
    e - y_ > 2 && (pu("matchMediaInit"), oo.forEach(function(n) {
      var i = n.queries,
        o = n.conditions,
        s, a, l, c;
      for (a in i) s = jr.matchMedia(i[a]).matches, s && (l = 1), s !== o[a] && (o[a] = s, c = 1);
      c && (n.revert(), l && t.push(n))
    }), pu("matchMediaRevert"), t.forEach(function(n) {
      return n.onMatch(n)
    }), y_ = e, pu("matchMedia"))
  },
  d1 = function() {
    function r(t, n) {
      this.selector = n && Ff(n), this.data = [], this._r = [], this.isReverted = !1, this.id = uk++, t && this.add(t)
    }
    var e = r.prototype;
    return e.add = function(n, i, o) {
      gt(n) && (o = i, i = n, n = gt);
      var s = this,
        a = function() {
          var c = pt,
            u = s.selector,
            d;
          return c && c !== s && c.data.push(s), o && (s.selector = Ff(o)), pt = s, d = i.apply(s, arguments), gt(d) && s._r.push(d), pt = c, s.selector = u, s.isReverted = !1, d
        };
      return s.last = a, n === gt ? a(s) : n ? s[n] = a : a
    }, e.ignore = function(n) {
      var i = pt;
      pt = null, n(this), pt = i
    }, e.getTweens = function() {
      var n = [];
      return this.data.forEach(function(i) {
        return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof wt && !(i.parent && i.parent.data === "nested") && n.push(i)
      }), n
    }, e.clear = function() {
      this._r.length = this.data.length = 0
    }, e.kill = function(n, i) {
      var o = this;
      if (n) {
        var s = this.getTweens();
        this.data.forEach(function(l) {
          l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(c) {
            return s.splice(s.indexOf(c), 1)
          }))
        }), s.map(function(l) {
          return {
            g: l.globalTime(0),
            t: l
          }
        }).sort(function(l, c) {
          return c.g - l.g || -1 / 0
        }).forEach(function(l) {
          return l.t.revert(n)
        }), this.data.forEach(function(l) {
          return !(l instanceof wt) && l.revert && l.revert(n)
        }), this._r.forEach(function(l) {
          return l(n, o)
        }), this.isReverted = !0
      } else this.data.forEach(function(l) {
        return l.kill && l.kill()
      });
      if (this.clear(), i)
        for (var a = oo.length; a--;) oo[a].id === this.id && oo.splice(a, 1)
    }, e.revert = function(n) {
      this.kill(n || {})
    }, r
  }(),
  fk = function() {
    function r(t) {
      this.contexts = [], this.scope = t
    }
    var e = r.prototype;
    return e.add = function(n, i, o) {
      Rn(n) || (n = {
        matches: n
      });
      var s = new d1(0, o || this.scope),
        a = s.conditions = {},
        l, c, u;
      pt && !s.selector && (s.selector = pt.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = n;
      for (c in n) c === "all" ? u = 1 : (l = jr.matchMedia(n[c]), l && (oo.indexOf(s) < 0 && oo.push(s), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(If) : l.addEventListener("change", If)));
      return u && i(s), this
    }, e.revert = function(n) {
      this.kill(n || {})
    }, e.kill = function(n) {
      this.contexts.forEach(function(i) {
        return i.kill(n, !0)
      })
    }, r
  }(),
  cc = {
    registerPlugin: function() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      t.forEach(function(i) {
        return Jm(i)
      })
    },
    timeline: function(e) {
      return new br(e)
    },
    getTweensOf: function(e, t) {
      return ct.getTweensOf(e, t)
    },
    getProperty: function(e, t, n, i) {
      Ft(e) && (e = Gr(e)[0]);
      var o = ro(e || {}).get,
        s = n ? Bm : $m;
      return n === "native" && (n = ""), e && (t ? s((Ar[t] && Ar[t].get || o)(e, t, n, i)) : function(a, l, c) {
        return s((Ar[a] && Ar[a].get || o)(e, a, l, c))
      })
    },
    quickSetter: function(e, t, n) {
      if (e = Gr(e), e.length > 1) {
        var i = e.map(function(u) {
            return xr.quickSetter(u, t, n)
          }),
          o = i.length;
        return function(u) {
          for (var d = o; d--;) i[d](u)
        }
      }
      e = e[0] || {};
      var s = Ar[t],
        a = ro(e),
        l = a.harness && (a.harness.aliases || {})[t] || t,
        c = s ? function(u) {
          var d = new s;
          Go._pt = 0, d.init(e, n ? u + n : u, Go, 0, [e]), d.render(1, d), Go._pt && od(1, Go)
        } : a.set(e, l);
      return s ? c : function(u) {
        return c(e, l, n ? u + n : u, a, 1)
      }
    },
    quickTo: function(e, t, n) {
      var i, o = xr.to(e, _o((i = {}, i[t] = "+=0.1", i.paused = !0, i), n || {})),
        s = function(l, c, u) {
          return o.resetTo(t, l, c, u)
        };
      return s.tween = o, s
    },
    isTweening: function(e) {
      return ct.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
      return e && e.ease && (e.ease = io(e.ease, bs.ease)), d_(bs, e || {})
    },
    config: function(e) {
      return d_(Nr, e || {})
    },
    registerEffect: function(e) {
      var t = e.name,
        n = e.effect,
        i = e.plugins,
        o = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function(a) {
        return a && !Ar[a] && !$r[a] && oc(t + " effect requires " + a + " plugin.")
      }), uu[t] = function(a, l, c) {
        return n(Gr(a), Zr(l || {}, o), c)
      }, s && (br.prototype[t] = function(a, l, c) {
        return this.add(uu[t](a, Rn(l) ? l : (c = l) && {}, this), c)
      })
    },
    registerEase: function(e, t) {
      Me[e] = io(t)
    },
    parseEase: function(e, t) {
      return arguments.length ? io(e, t) : Me
    },
    getById: function(e) {
      return ct.getById(e)
    },
    exportRoot: function(e, t) {
      e === void 0 && (e = {});
      var n = new br(e),
        i, o;
      for (n.smoothChildTiming = vr(e.smoothChildTiming), ct.remove(n), n._dp = 0, n._time = n._tTime = ct._time, i = ct._first; i;) o = i._next, (t || !(!i._dur && i instanceof wt && i.vars.onComplete === i._targets[0])) && wn(n, i, i._start - i._delay), i = o;
      return wn(ct, n, 0), n
    },
    context: function(e, t) {
      return e ? new d1(e, t) : pt
    },
    matchMedia: function(e) {
      return new fk(e)
    },
    matchMediaRefresh: function() {
      return oo.forEach(function(e) {
        var t = e.conditions,
          n, i;
        for (i in t) t[i] && (t[i] = !1, n = 1);
        n && e.revert()
      }) || If()
    },
    addEventListener: function(e, t) {
      var n = Nl[e] || (Nl[e] = []);
      ~n.indexOf(t) || n.push(t)
    },
    removeEventListener: function(e, t) {
      var n = Nl[e],
        i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1)
    },
    utils: {
      wrap: jE,
      wrapYoyo: WE,
      distribute: Ym,
      random: Gm,
      snap: zm,
      normalize: UE,
      getUnit: Gt,
      clamp: $E,
      splitColor: Zm,
      toArray: Gr,
      selector: Ff,
      mapRange: Km,
      pipe: VE,
      unitize: HE,
      interpolate: XE,
      shuffle: Xm
    },
    install: Om,
    effects: uu,
    ticker: Or,
    updateRoot: br.updateRoot,
    plugins: Ar,
    globalTimeline: ct,
    core: {
      PropTween: wr,
      globals: Fm,
      Tween: wt,
      Timeline: br,
      Animation: Aa,
      getCache: ro,
      _removeLinkedListItem: Uc,
      reverting: function() {
        return Kt
      },
      context: function(e) {
        return e && pt && (pt.data.push(e), e._ctx = pt), pt
      },
      suppressOverwrites: function(e) {
        return zh = e
      }
    }
  };
Dr("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return cc[r] = wt[r]
});
Or.add(br.updateRoot);
Go = cc.to({}, {
  duration: 0
});
var hk = function(e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
    return n
  },
  dk = function(e, t) {
    var n = e._targets,
      i, o, s;
    for (i in t)
      for (o = n.length; o--;) s = e._ptLookup[o][i], s && (s = s.d) && (s._pt && (s = hk(s, i)), s && s.modifier && s.modifier(t[i], e, n[o], i))
  },
  _u = function(e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function(i, o, s) {
        s._onInit = function(a) {
          var l, c;
          if (Ft(o) && (l = {}, Dr(o, function(u) {
              return l[u] = 1
            }), o = l), t) {
            l = {};
            for (c in o) l[c] = t(o[c]);
            o = l
          }
          dk(a, o)
        }
      }
    }
  },
  xr = cc.registerPlugin({
    name: "attr",
    init: function(e, t, n, i, o) {
      var s, a, l;
      this.tween = n;
      for (s in t) l = e.getAttribute(s) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[s], i, o, 0, 0, s), a.op = s, a.b = l, this._props.push(s)
    },
    render: function(e, t) {
      for (var n = t._pt; n;) Kt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
    }
  }, {
    name: "endArray",
    init: function(e, t) {
      for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
    }
  }, _u("roundProps", Mf), _u("modifiers"), _u("snap", zm)) || cc;
wt.version = br.version = xr.version = "3.12.2";
Rm = 1;
qh() && ws();
Me.Power0;
Me.Power1;
Me.Power2;
Me.Power3;
Me.Power4;
Me.Linear;
Me.Quad;
Me.Cubic;
Me.Quart;
Me.Quint;
Me.Strong;
Me.Elastic;
Me.Back;
Me.SteppedEase;
Me.Bounce;
Me.Sine;
Me.Expo;
Me.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var b_, bi, rs, sd, Zi, v_, ad, pk = function() {
    return typeof window < "u"
  },
  ei = {},
  Gi = 180 / Math.PI,
  ns = Math.PI / 180,
  No = Math.atan2,
  D_ = 1e8,
  ld = /([A-Z])/g,
  _k = /(left|right|width|margin|padding|x)/i,
  gk = /[\s,\(]\S/,
  Cn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  $f = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
  },
  mk = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
  },
  yk = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
  },
  bk = function(e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
  },
  p1 = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
  },
  _1 = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
  },
  vk = function(e, t, n) {
    return e.style[t] = n
  },
  Dk = function(e, t, n) {
    return e.style.setProperty(t, n)
  },
  wk = function(e, t, n) {
    return e._gsap[t] = n
  },
  xk = function(e, t, n) {
    return e._gsap.scaleX = e._gsap.scaleY = n
  },
  Ck = function(e, t, n, i, o) {
    var s = e._gsap;
    s.scaleX = s.scaleY = n, s.renderTransform(o, s)
  },
  Ek = function(e, t, n, i, o) {
    var s = e._gsap;
    s[t] = n, s.renderTransform(o, s)
  },
  ft = "transform",
  ln = ft + "Origin",
  kk = function r(e, t) {
    var n = this,
      i = this.target,
      o = i.style;
    if (e in ei && o) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = Cn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
        return n.tfm[s] = $n(i, s)
      }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : $n(i, e);
      else return Cn.transform.split(",").forEach(function(s) {
        return r.call(n, s, t)
      });
      if (this.props.indexOf(ft) >= 0) return;
      i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ln, t, "")), e = ft
    }(o || t) && this.props.push(e, t, o[e])
  },
  g1 = function(e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
  },
  Sk = function() {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      o, s;
    for (o = 0; o < e.length; o += 3) e[o + 1] ? t[e[o]] = e[o + 2] : e[o + 2] ? n[e[o]] = e[o + 2] : n.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(ld, "-$1").toLowerCase());
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), o = ad(), (!o || !o.isStart) && !n[ft] && (g1(n), i.uncache = 1)
    }
  },
  m1 = function(e, t) {
    var n = {
      target: e,
      props: [],
      revert: Sk,
      save: kk
    };
    return e._gsap || xr.core.getCache(e), t && t.split(",").forEach(function(i) {
      return n.save(i)
    }), n
  },
  y1, Bf = function(e, t) {
    var n = bi.createElementNS ? bi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : bi.createElement(e);
    return n.style ? n : bi.createElement(e)
  },
  Sn = function r(e, t, n) {
    var i = getComputedStyle(e);
    return i[t] || i.getPropertyValue(t.replace(ld, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && r(e, xs(t) || t, 1) || ""
  },
  w_ = "O,Moz,ms,Ms,Webkit".split(","),
  xs = function(e, t, n) {
    var i = t || Zi,
      o = i.style,
      s = 5;
    if (e in o && !n) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(w_[s] + e in o););
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? w_[s] : "") + e
  },
  Vf = function() {
    pk() && window.document && (b_ = window, bi = b_.document, rs = bi.documentElement, Zi = Bf("div") || {
      style: {}
    }, Bf("div"), ft = xs(ft), ln = ft + "Origin", Zi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", y1 = !!xs("perspective"), ad = xr.core.reverting, sd = 1)
  },
  gu = function r(e) {
    var t = Bf("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      n = this.parentNode,
      i = this.nextSibling,
      o = this.style.cssText,
      s;
    if (rs.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = r
    } catch {} else this._gsapBBox && (s = this._gsapBBox());
    return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), rs.removeChild(t), this.style.cssText = o, s
  },
  x_ = function(e, t) {
    for (var n = t.length; n--;)
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
  },
  b1 = function(e) {
    var t;
    try {
      t = e.getBBox()
    } catch {
      t = gu.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === gu || (t = gu.call(e, !0)), t && !t.width && !t.x && !t.y ? {
      x: +x_(e, ["x", "cx", "x1"]) || 0,
      y: +x_(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : t
  },
  v1 = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && b1(e))
  },
  Ra = function(e, t) {
    if (t) {
      var n = e.style;
      t in ei && t !== ln && (t = ft), n.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(t.replace(ld, "-$1").toLowerCase())) : n.removeAttribute(t)
    }
  },
  vi = function(e, t, n, i, o, s) {
    var a = new wr(e._pt, t, n, 0, 1, s ? _1 : p1);
    return e._pt = a, a.b = i, a.e = o, e._props.push(n), a
  },
  C_ = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  Tk = {
    grid: 1,
    flex: 1
  },
  Oi = function r(e, t, n, i) {
    var o = parseFloat(n) || 0,
      s = (n + "").trim().substr((o + "").length) || "px",
      a = Zi.style,
      l = _k.test(t),
      c = e.tagName.toLowerCase() === "svg",
      u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = i === "px",
      f = i === "%",
      _, p, m, g;
    return i === s || !o || C_[i] || C_[s] ? o : (s !== "px" && !h && (o = r(e, t, n, "px")), g = e.getCTM && v1(e), (f || s === "%") && (ei[t] || ~t.indexOf("adius")) ? (_ = g ? e.getBBox()[l ? "width" : "height"] : e[u], yt(f ? o / _ * d : o / 100 * _)) : (a[l ? "width" : "height"] = d + (h ? s : i), p = ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, g && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === bi || !p.appendChild) && (p = bi.body), m = p._gsap, m && f && m.width && l && m.time === Or.time && !m.uncache ? yt(o / m.width * d) : ((f || s === "%") && !Tk[Sn(p, "display")] && (a.position = Sn(e, "position")), p === e && (a.position = "static"), p.appendChild(Zi), _ = Zi[u], p.removeChild(Zi), a.position = "absolute", l && f && (m = ro(p), m.time = Or.time, m.width = p[u]), yt(h ? _ * o / d : _ && o ? d / _ * o : 0))))
  },
  $n = function(e, t, n, i) {
    var o;
    return sd || Vf(), t in Cn && t !== "transform" && (t = Cn[t], ~t.indexOf(",") && (t = t.split(",")[0])), ei[t] && t !== "transform" ? (o = Fa(e, i), o = t !== "transformOrigin" ? o[t] : o.svg ? o.origin : fc(Sn(e, ln)) + " " + o.zOrigin + "px") : (o = e.style[t], (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = uc[t] && uc[t](e, t, n) || Sn(e, t) || Nm(e, t) || (t === "opacity" ? 1 : 0))), n && !~(o + "").trim().indexOf(" ") ? Oi(e, t, o, n) + n : o
  },
  Pk = function(e, t, n, i) {
    if (!n || n === "none") {
      var o = xs(t, e, 1),
        s = o && Sn(e, o, 1);
      s && s !== n ? (t = o, n = s) : t === "borderColor" && (n = Sn(e, "borderTopColor"))
    }
    var a = new wr(this._pt, e.style, t, 0, 1, f1),
      l = 0,
      c = 0,
      u, d, h, f, _, p, m, g, y, b, v, D;
    if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (e.style[t] = i, i = Sn(e, t) || i, e.style[t] = n), u = [n, i], t1(u), n = u[0], i = u[1], h = n.match(zo) || [], D = i.match(zo) || [], D.length) {
      for (; d = zo.exec(i);) m = d[0], y = i.substring(l, d.index), _ ? _ = (_ + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1), m !== (p = h[c++] || "") && (f = parseFloat(p) || 0, v = p.substr((f + "").length), m.charAt(1) === "=" && (m = ts(f, m) + v), g = parseFloat(m), b = m.substr((g + "").length), l = zo.lastIndex - b.length, b || (b = b || Nr.units[t] || v, l === i.length && (i += b, a.e += b)), v !== b && (f = Oi(e, t, p, b) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        s: f,
        c: g - f,
        m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
      });
      a.c = l < i.length ? i.substring(l, i.length) : ""
    } else a.r = t === "display" && i === "none" ? _1 : p1;
    return Lm.test(i) && (a.e = 0), this._pt = a, a
  },
  E_ = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  Lk = function(e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = E_[n] || n, t[1] = E_[i] || i, t.join(" ")
  },
  Ak = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        o = t.u,
        s = n._gsap,
        a, l, c;
      if (o === "all" || o === !0) i.cssText = "", l = 1;
      else
        for (o = o.split(","), c = o.length; --c > -1;) a = o[c], ei[a] && (l = 1, a = a === "transformOrigin" ? ln : ft), Ra(n, a);
      l && (Ra(n, ft), s && (s.svg && n.removeAttribute("transform"), Fa(n, 1), s.uncache = 1, g1(i)))
    }
  },
  uc = {
    clearProps: function(e, t, n, i, o) {
      if (o.data !== "isFromStart") {
        var s = e._pt = new wr(e._pt, t, n, 0, 0, Ak);
        return s.u = i, s.pr = -10, s.tween = o, e._props.push(n), 1
      }
    }
  },
  Oa = [1, 0, 0, 1, 0, 0],
  D1 = {},
  w1 = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
  },
  k_ = function(e) {
    var t = Sn(e, ft);
    return w1(t) ? Oa : t.substr(7).match(Pm).map(yt)
  },
  cd = function(e, t) {
    var n = e._gsap || ro(e),
      i = e.style,
      o = k_(e),
      s, a, l, c;
    return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, o = [l.a, l.b, l.c, l.d, l.e, l.f], o.join(",") === "1,0,0,1,0,0" ? Oa : o) : (o === Oa && !e.offsetParent && e !== rs && !n.svg && (l = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (c = 1, a = e.nextElementSibling, rs.appendChild(e)), o = k_(e), l ? i.display = l : Ra(e, "display"), c && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : rs.removeChild(e))), t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
  },
  Hf = function(e, t, n, i, o, s) {
    var a = e._gsap,
      l = o || cd(e, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      d = a.xOffset || 0,
      h = a.yOffset || 0,
      f = l[0],
      _ = l[1],
      p = l[2],
      m = l[3],
      g = l[4],
      y = l[5],
      b = t.split(" "),
      v = parseFloat(b[0]) || 0,
      D = parseFloat(b[1]) || 0,
      k, w, S, P;
    n ? l !== Oa && (w = f * m - _ * p) && (S = v * (m / w) + D * (-p / w) + (p * y - m * g) / w, P = v * (-_ / w) + D * (f / w) - (f * y - _ * g) / w, v = S, D = P) : (k = b1(e), v = k.x + (~b[0].indexOf("%") ? v / 100 * k.width : v), D = k.y + (~(b[1] || b[0]).indexOf("%") ? D / 100 * k.height : D)), i || i !== !1 && a.smooth ? (g = v - c, y = D - u, a.xOffset = d + (g * f + y * p) - g, a.yOffset = h + (g * _ + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = D, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[ln] = "0px 0px", s && (vi(s, a, "xOrigin", c, v), vi(s, a, "yOrigin", u, D), vi(s, a, "xOffset", d, a.xOffset), vi(s, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", v + " " + D)
  },
  Fa = function(e, t) {
    var n = e._gsap || new o1(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      o = n.scaleX < 0,
      s = "px",
      a = "deg",
      l = getComputedStyle(e),
      c = Sn(e, ln) || "0",
      u, d, h, f, _, p, m, g, y, b, v, D, k, w, S, P, C, R, N, B, z, U, V, Y, oe, $, L, ee, ie, be, te, ne;
    return u = d = h = p = m = g = y = b = v = 0, f = _ = 1, n.svg = !!(e.getCTM && v1(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ft] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ft] !== "none" ? l[ft] : "")), i.scale = i.rotate = i.translate = "none"), w = cd(e, n.svg), n.svg && (n.uncache ? (oe = e.getBBox(), c = n.xOrigin - oe.x + "px " + (n.yOrigin - oe.y) + "px", Y = "") : Y = !t && e.getAttribute("data-svg-origin"), Hf(e, Y || c, !!Y || n.originIsAbsolute, n.smooth !== !1, w)), D = n.xOrigin || 0, k = n.yOrigin || 0, w !== Oa && (R = w[0], N = w[1], B = w[2], z = w[3], u = U = w[4], d = V = w[5], w.length === 6 ? (f = Math.sqrt(R * R + N * N), _ = Math.sqrt(z * z + B * B), p = R || N ? No(N, R) * Gi : 0, y = B || z ? No(B, z) * Gi + p : 0, y && (_ *= Math.abs(Math.cos(y * ns))), n.svg && (u -= D - (D * R + k * B), d -= k - (D * N + k * z))) : (ne = w[6], be = w[7], L = w[8], ee = w[9], ie = w[10], te = w[11], u = w[12], d = w[13], h = w[14], S = No(ne, ie), m = S * Gi, S && (P = Math.cos(-S), C = Math.sin(-S), Y = U * P + L * C, oe = V * P + ee * C, $ = ne * P + ie * C, L = U * -C + L * P, ee = V * -C + ee * P, ie = ne * -C + ie * P, te = be * -C + te * P, U = Y, V = oe, ne = $), S = No(-B, ie), g = S * Gi, S && (P = Math.cos(-S), C = Math.sin(-S), Y = R * P - L * C, oe = N * P - ee * C, $ = B * P - ie * C, te = z * C + te * P, R = Y, N = oe, B = $), S = No(N, R), p = S * Gi, S && (P = Math.cos(S), C = Math.sin(S), Y = R * P + N * C, oe = U * P + V * C, N = N * P - R * C, V = V * P - U * C, R = Y, U = oe), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, g = 180 - g), f = yt(Math.sqrt(R * R + N * N + B * B)), _ = yt(Math.sqrt(V * V + ne * ne)), S = No(U, V), y = Math.abs(S) > 2e-4 ? S * Gi : 0, v = te ? 1 / (te < 0 ? -te : te) : 0), n.svg && (Y = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !w1(Sn(e, ft)), Y && e.setAttribute("transform", Y))), Math.abs(y) > 90 && Math.abs(y) < 270 && (o ? (f *= -1, y += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = u - ((n.xPercent = u && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + s, n.y = d - ((n.yPercent = d && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + s, n.z = h + s, n.scaleX = yt(f), n.scaleY = yt(_), n.rotation = yt(p) + a, n.rotationX = yt(m) + a, n.rotationY = yt(g) + a, n.skewX = y + a, n.skewY = b + a, n.transformPerspective = v + s, (n.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[ln] = fc(c)), n.xOffset = n.yOffset = 0, n.force3D = Nr.force3D, n.renderTransform = n.svg ? Ok : y1 ? x1 : Rk, n.uncache = 0, n
  },
  fc = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
  },
  mu = function(e, t, n) {
    var i = Gt(t);
    return yt(parseFloat(t) + parseFloat(Oi(e, "x", n + "px", i))) + i
  },
  Rk = function(e, t) {
    t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, x1(e, t)
  },
  Ui = "0deg",
  Fs = "0px",
  ji = ") ",
  x1 = function(e, t) {
    var n = t || this,
      i = n.xPercent,
      o = n.yPercent,
      s = n.x,
      a = n.y,
      l = n.z,
      c = n.rotation,
      u = n.rotationY,
      d = n.rotationX,
      h = n.skewX,
      f = n.skewY,
      _ = n.scaleX,
      p = n.scaleY,
      m = n.transformPerspective,
      g = n.force3D,
      y = n.target,
      b = n.zOrigin,
      v = "",
      D = g === "auto" && e && e !== 1 || g === !0;
    if (b && (d !== Ui || u !== Ui)) {
      var k = parseFloat(u) * ns,
        w = Math.sin(k),
        S = Math.cos(k),
        P;
      k = parseFloat(d) * ns, P = Math.cos(k), s = mu(y, s, w * P * -b), a = mu(y, a, -Math.sin(k) * -b), l = mu(y, l, S * P * -b + b)
    }
    m !== Fs && (v += "perspective(" + m + ji), (i || o) && (v += "translate(" + i + "%, " + o + "%) "), (D || s !== Fs || a !== Fs || l !== Fs) && (v += l !== Fs || D ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + ji), c !== Ui && (v += "rotate(" + c + ji), u !== Ui && (v += "rotateY(" + u + ji), d !== Ui && (v += "rotateX(" + d + ji), (h !== Ui || f !== Ui) && (v += "skew(" + h + ", " + f + ji), (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + ji), y.style[ft] = v || "translate(0, 0)"
  },
  Ok = function(e, t) {
    var n = t || this,
      i = n.xPercent,
      o = n.yPercent,
      s = n.x,
      a = n.y,
      l = n.rotation,
      c = n.skewX,
      u = n.skewY,
      d = n.scaleX,
      h = n.scaleY,
      f = n.target,
      _ = n.xOrigin,
      p = n.yOrigin,
      m = n.xOffset,
      g = n.yOffset,
      y = n.forceCSS,
      b = parseFloat(s),
      v = parseFloat(a),
      D, k, w, S, P;
    l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= ns, c *= ns, D = Math.cos(l) * d, k = Math.sin(l) * d, w = Math.sin(l - c) * -h, S = Math.cos(l - c) * h, c && (u *= ns, P = Math.tan(c - u), P = Math.sqrt(1 + P * P), w *= P, S *= P, u && (P = Math.tan(u), P = Math.sqrt(1 + P * P), D *= P, k *= P)), D = yt(D), k = yt(k), w = yt(w), S = yt(S)) : (D = d, S = h, k = w = 0), (b && !~(s + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (b = Oi(f, "x", s, "px"), v = Oi(f, "y", a, "px")), (_ || p || m || g) && (b = yt(b + _ - (_ * D + p * w) + m), v = yt(v + p - (_ * k + p * S) + g)), (i || o) && (P = f.getBBox(), b = yt(b + i / 100 * P.width), v = yt(v + o / 100 * P.height)), P = "matrix(" + D + "," + k + "," + w + "," + S + "," + b + "," + v + ")", f.setAttribute("transform", P), y && (f.style[ft] = P)
  },
  Fk = function(e, t, n, i, o) {
    var s = 360,
      a = Ft(o),
      l = parseFloat(o) * (a && ~o.indexOf("rad") ? Gi : 1),
      c = l - i,
      u = i + c + "deg",
      d, h;
    return a && (d = o.split("_")[1], d === "short" && (c %= s, c !== c % (s / 2) && (c += c < 0 ? s : -s)), d === "cw" && c < 0 ? c = (c + s * D_) % s - ~~(c / s) * s : d === "ccw" && c > 0 && (c = (c - s * D_) % s - ~~(c / s) * s)), e._pt = h = new wr(e._pt, t, n, i, c, mk), h.e = u, h.u = "deg", e._props.push(n), h
  },
  S_ = function(e, t) {
    for (var n in t) e[n] = t[n];
    return e
  },
  Mk = function(e, t, n) {
    var i = S_({}, n._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      s = n.style,
      a, l, c, u, d, h, f, _;
    i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), s[ft] = t, a = Fa(n, 1), Ra(n, ft), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[ft], s[ft] = t, a = Fa(n, 1), s[ft] = c);
    for (l in ei) c = i[l], u = a[l], c !== u && o.indexOf(l) < 0 && (f = Gt(c), _ = Gt(u), d = f !== _ ? Oi(n, l, c, _) : parseFloat(c), h = parseFloat(u), e._pt = new wr(e._pt, a, l, d, h - d, $f), e._pt.u = _ || 0, e._props.push(l));
    S_(a, i)
  };
Dr("padding,margin,Width,Radius", function(r, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    o = "Left",
    s = (e < 3 ? [t, n, i, o] : [t + o, t + n, i + n, i + o]).map(function(a) {
      return e < 2 ? r + a : "border" + a + r
    });
  uc[e > 1 ? "border" + r : r] = function(a, l, c, u, d) {
    var h, f;
    if (arguments.length < 4) return h = s.map(function(_) {
      return $n(a, _, c)
    }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (u + "").split(" "), f = {}, s.forEach(function(_, p) {
      return f[_] = h[p] = h[p] || h[(p - 1) / 2 | 0]
    }), a.init(l, f, d)
  }
});
var C1 = {
  name: "css",
  register: Vf,
  targetTest: function(e) {
    return e.style && e.nodeType
  },
  init: function(e, t, n, i, o) {
    var s = this._props,
      a = e.style,
      l = n.vars.startAt,
      c, u, d, h, f, _, p, m, g, y, b, v, D, k, w, S;
    sd || Vf(), this.styles = this.styles || m1(e), S = this.styles.props, this.tween = n;
    for (p in t)
      if (p !== "autoRound" && (u = t[p], !(Ar[p] && s1(p, t, n, i, e, o)))) {
        if (f = typeof u, _ = uc[p], f === "function" && (u = u.call(n, i, e, o), f = typeof u), f === "string" && ~u.indexOf("random(") && (u = Pa(u)), _) _(this, e, p, u, n) && (w = 1);
        else if (p.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(p) + "").trim(), u += "", Si.lastIndex = 0, Si.test(c) || (m = Gt(c), g = Gt(u)), g ? m !== g && (c = Oi(e, p, c, g) + g) : m && (u += m), this.add(a, "setProperty", c, u, i, o, 0, 0, p), s.push(p), S.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (l && p in l ? (c = typeof l[p] == "function" ? l[p].call(n, i, e, o) : l[p], Ft(c) && ~c.indexOf("random(") && (c = Pa(c)), Gt(c + "") || (c += Nr.units[p] || Gt($n(e, p)) || ""), (c + "").charAt(1) === "=" && (c = $n(e, p))) : c = $n(e, p), h = parseFloat(c), y = f === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), d = parseFloat(u), p in Cn && (p === "autoAlpha" && (h === 1 && $n(e, "visibility") === "hidden" && d && (h = 0), S.push("visibility", 0, a.visibility), vi(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), p !== "scale" && p !== "transform" && (p = Cn[p], ~p.indexOf(",") && (p = p.split(",")[0]))), b = p in ei, b) {
            if (this.styles.save(p), v || (D = e._gsap, D.renderTransform && !t.parseTransform || Fa(e, t.parseTransform), k = t.smoothOrigin !== !1 && D.smooth, v = this._pt = new wr(this._pt, a, ft, 0, 1, D.renderTransform, D, 0, -1), v.dep = 1), p === "scale") this._pt = new wr(this._pt, D, "scaleY", D.scaleY, (y ? ts(D.scaleY, y + d) : d) - D.scaleY || 0, $f), this._pt.u = 0, s.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              S.push(ln, 0, a[ln]), u = Lk(u), D.svg ? Hf(e, u, 0, k, 0, this) : (g = parseFloat(u.split(" ")[2]) || 0, g !== D.zOrigin && vi(this, D, "zOrigin", D.zOrigin, g), vi(this, a, p, fc(c), fc(u)));
              continue
            } else if (p === "svgOrigin") {
              Hf(e, u, 1, k, 0, this);
              continue
            } else if (p in D1) {
              Fk(this, D, p, h, y ? ts(h, y + u) : u);
              continue
            } else if (p === "smoothOrigin") {
              vi(this, D, "smooth", D.smooth, u);
              continue
            } else if (p === "force3D") {
              D[p] = u;
              continue
            } else if (p === "transform") {
              Mk(this, u, e);
              continue
            }
          } else p in a || (p = xs(p) || p);
          if (b || (d || d === 0) && (h || h === 0) && !gk.test(u) && p in a) m = (c + "").substr((h + "").length), d || (d = 0), g = Gt(u) || (p in Nr.units ? Nr.units[p] : m), m !== g && (h = Oi(e, p, c, g)), this._pt = new wr(this._pt, b ? D : a, p, h, (y ? ts(h, y + d) : d) - h, !b && (g === "px" || p === "zIndex") && t.autoRound !== !1 ? bk : $f), this._pt.u = g || 0, m !== g && g !== "%" && (this._pt.b = c, this._pt.r = yk);
          else if (p in a) Pk.call(this, e, p, c, y ? y + u : u);
          else if (p in e) this.add(e, p, c || e[p], y ? y + u : u, i, o);
          else if (p !== "parseTransform") {
            Qh(p, u);
            continue
          }
          b || (p in a ? S.push(p, 0, a[p]) : S.push(p, 1, c || e[p])), s.push(p)
        }
      } w && h1(this)
  },
  render: function(e, t) {
    if (t.tween._time || !ad())
      for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
    else t.styles.revert()
  },
  get: $n,
  aliases: Cn,
  getSetter: function(e, t, n) {
    var i = Cn[t];
    return i && i.indexOf(",") < 0 && (t = i), t in ei && t !== ln && (e._gsap.x || $n(e, "x")) ? n && v_ === n ? t === "scale" ? xk : wk : (v_ = n || {}) && (t === "scale" ? Ck : Ek) : e.style && !Gh(e.style[t]) ? vk : ~t.indexOf("-") ? Dk : id(e, t)
  },
  core: {
    _removeProperty: Ra,
    _getMatrix: cd
  }
};
xr.utils.checkPrefix = xs;
xr.core.getStyleSaver = m1;
(function(r, e, t, n) {
  var i = Dr(r + "," + e + "," + t, function(o) {
    ei[o] = 1
  });
  Dr(e, function(o) {
    Nr.units[o] = "deg", D1[o] = 1
  }), Cn[i[13]] = r + "," + e, Dr(n, function(o) {
    var s = o.split(":");
    Cn[s[1]] = i[s[0]]
  })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Dr("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  Nr.units[r] = "px"
});
xr.registerPlugin(C1);
/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Nk = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  Ik = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
  $k = Math.PI / 180,
  ul = Math.sin,
  fl = Math.cos,
  na = Math.abs,
  Ms = Math.sqrt,
  Bk = function(e) {
    return typeof e == "number"
  },
  T_ = 1e5,
  ci = function(e) {
    return Math.round(e * T_) / T_ || 0
  };

function Vk(r, e, t, n, i, o, s) {
  for (var a = r.length, l, c, u, d, h; --a > -1;)
    for (l = r[a], c = l.length, u = 0; u < c; u += 2) d = l[u], h = l[u + 1], l[u] = d * e + h * n + o, l[u + 1] = d * t + h * i + s;
  return r._dirty = 1, r
}

function Hk(r, e, t, n, i, o, s, a, l) {
  if (!(r === a && e === l)) {
    t = na(t), n = na(n);
    var c = i % 360 * $k,
      u = fl(c),
      d = ul(c),
      h = Math.PI,
      f = h * 2,
      _ = (r - a) / 2,
      p = (e - l) / 2,
      m = u * _ + d * p,
      g = -d * _ + u * p,
      y = m * m,
      b = g * g,
      v = y / (t * t) + b / (n * n);
    v > 1 && (t = Ms(v) * t, n = Ms(v) * n);
    var D = t * t,
      k = n * n,
      w = (D * k - D * b - k * y) / (D * b + k * y);
    w < 0 && (w = 0);
    var S = (o === s ? -1 : 1) * Ms(w),
      P = S * (t * g / n),
      C = S * -(n * m / t),
      R = (r + a) / 2,
      N = (e + l) / 2,
      B = R + (u * P - d * C),
      z = N + (d * P + u * C),
      U = (m - P) / t,
      V = (g - C) / n,
      Y = (-m - P) / t,
      oe = (-g - C) / n,
      $ = U * U + V * V,
      L = (V < 0 ? -1 : 1) * Math.acos(U / Ms($)),
      ee = (U * oe - V * Y < 0 ? -1 : 1) * Math.acos((U * Y + V * oe) / Ms($ * (Y * Y + oe * oe)));
    isNaN(ee) && (ee = h), !s && ee > 0 ? ee -= f : s && ee < 0 && (ee += f), L %= f, ee %= f;
    var ie = Math.ceil(na(ee) / (f / 4)),
      be = [],
      te = ee / ie,
      ne = 4 / 3 * ul(te / 2) / (1 + fl(te / 2)),
      ce = u * t,
      M = d * t,
      X = d * -n,
      K = u * n,
      Q;
    for (Q = 0; Q < ie; Q++) i = L + Q * te, m = fl(i), g = ul(i), U = fl(i += te), V = ul(i), be.push(m - ne * g, g + ne * m, U + ne * V, V - ne * U, U, V);
    for (Q = 0; Q < be.length; Q += 2) m = be[Q], g = be[Q + 1], be[Q] = m * ce + g * X + B, be[Q + 1] = m * M + g * K + z;
    return be[Q - 2] = a, be[Q - 1] = l, be
  }
}

function Uk(r) {
  var e = (r + "").replace(Ik, function(P) {
      var C = +P;
      return C < 1e-4 && C > -1e-4 ? 0 : C
    }).match(Nk) || [],
    t = [],
    n = 0,
    i = 0,
    o = 2 / 3,
    s = e.length,
    a = 0,
    l = "ERROR: malformed path: " + r,
    c, u, d, h, f, _, p, m, g, y, b, v, D, k, w, S = function(C, R, N, B) {
      y = (N - C) / 3, b = (B - R) / 3, p.push(C + y, R + b, N - y, B - b, N, B)
    };
  if (!r || !isNaN(e[0]) || isNaN(e[1])) return console.log(l), t;
  for (c = 0; c < s; c++)
    if (D = f, isNaN(e[c]) ? (f = e[c].toUpperCase(), _ = f !== e[c]) : c--, d = +e[c + 1], h = +e[c + 2], _ && (d += n, h += i), c || (m = d, g = h), f === "M") p && (p.length < 8 ? t.length -= 1 : a += p.length), n = m = d, i = g = h, p = [d, h], t.push(p), c += 2, f = "L";
    else if (f === "C") p || (p = [0, 0]), _ || (n = i = 0), p.push(d, h, n + e[c + 3] * 1, i + e[c + 4] * 1, n += e[c + 5] * 1, i += e[c + 6] * 1), c += 6;
  else if (f === "S") y = n, b = i, (D === "C" || D === "S") && (y += n - p[p.length - 4], b += i - p[p.length - 3]), _ || (n = i = 0), p.push(y, b, d, h, n += e[c + 3] * 1, i += e[c + 4] * 1), c += 4;
  else if (f === "Q") y = n + (d - n) * o, b = i + (h - i) * o, _ || (n = i = 0), n += e[c + 3] * 1, i += e[c + 4] * 1, p.push(y, b, n + (d - n) * o, i + (h - i) * o, n, i), c += 4;
  else if (f === "T") y = n - p[p.length - 4], b = i - p[p.length - 3], p.push(n + y, i + b, d + (n + y * 1.5 - d) * o, h + (i + b * 1.5 - h) * o, n = d, i = h), c += 2;
  else if (f === "H") S(n, i, n = d, i), c += 1;
  else if (f === "V") S(n, i, n, i = d + (_ ? i - n : 0)), c += 1;
  else if (f === "L" || f === "Z") f === "Z" && (d = m, h = g, p.closed = !0), (f === "L" || na(n - d) > .5 || na(i - h) > .5) && (S(n, i, d, h), f === "L" && (c += 2)), n = d, i = h;
  else if (f === "A") {
    if (k = e[c + 4], w = e[c + 5], y = e[c + 6], b = e[c + 7], u = 7, k.length > 1 && (k.length < 3 ? (b = y, y = w, u--) : (b = w, y = k.substr(2), u -= 2), w = k.charAt(1), k = k.charAt(0)), v = Hk(n, i, +e[c + 1], +e[c + 2], +e[c + 3], +k, +w, (_ ? n : 0) + y * 1, (_ ? i : 0) + b * 1), c += u, v)
      for (u = 0; u < v.length; u++) p.push(v[u]);
    n = p[p.length - 2], i = p[p.length - 1]
  } else console.log(l);
  return c = p.length, c < 6 ? (t.pop(), c = 0) : p[0] === p[c - 2] && p[1] === p[c - 1] && (p.closed = !0), t.totalPoints = a + c, t
}

function jk(r) {
  Bk(r[0]) && (r = [r]);
  var e = "",
    t = r.length,
    n, i, o, s;
  for (i = 0; i < t; i++) {
    for (s = r[i], e += "M" + ci(s[0]) + "," + ci(s[1]) + " C", n = s.length, o = 2; o < n; o++) e += ci(s[o++]) + "," + ci(s[o++]) + " " + ci(s[o++]) + "," + ci(s[o++]) + " " + ci(s[o++]) + "," + ci(s[o]) + " ";
    s.closed && (e += "z")
  }
  return e
}
/*!
 * CustomEase 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var yr, E1, k1 = function() {
    return yr || typeof window < "u" && (yr = window.gsap) && yr.registerPlugin && yr
  },
  P_ = function() {
    yr = k1(), yr ? (yr.registerEase("_CE", Ma.create), E1 = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
  },
  Wk = 1e20,
  hl = function(e) {
    return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
  },
  Xk = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Yk = /[cLlsSaAhHvVtTqQ]/g,
  zk = function(e) {
    var t = e.length,
      n = Wk,
      i;
    for (i = 1; i < t; i += 6) + e[i] < n && (n = +e[i]);
    return n
  },
  Gk = function(e, t, n) {
    !n && n !== 0 && (n = Math.max(+e[e.length - 1], +e[1]));
    var i = +e[0] * -1,
      o = -n,
      s = e.length,
      a = 1 / (+e[s - 2] + i),
      l = -t || (Math.abs(+e[s - 1] - +e[1]) < .01 * (+e[s - 2] - +e[0]) ? zk(e) + o : +e[s - 1] + o),
      c;
    for (l ? l = 1 / l : l = -a, c = 0; c < s; c += 2) e[c] = (+e[c] + i) * a, e[c + 1] = (+e[c + 1] + o) * l
  },
  qk = function r(e, t, n, i, o, s, a, l, c, u, d) {
    var h = (e + n) / 2,
      f = (t + i) / 2,
      _ = (n + o) / 2,
      p = (i + s) / 2,
      m = (o + a) / 2,
      g = (s + l) / 2,
      y = (h + _) / 2,
      b = (f + p) / 2,
      v = (_ + m) / 2,
      D = (p + g) / 2,
      k = (y + v) / 2,
      w = (b + D) / 2,
      S = a - e,
      P = l - t,
      C = Math.abs((n - a) * P - (i - l) * S),
      R = Math.abs((o - a) * P - (s - l) * S),
      N;
    return u || (u = [{
      x: e,
      y: t
    }, {
      x: a,
      y: l
    }], d = 1), u.splice(d || u.length - 1, 0, {
      x: k,
      y: w
    }), (C + R) * (C + R) > c * (S * S + P * P) && (N = u.length, r(e, t, h, f, y, b, k, w, c, u, d), r(k, w, v, D, m, g, a, l, c, u, d + 1 + (u.length - N))), u
  },
  Ma = function() {
    function r(t, n, i) {
      E1 || P_(), this.id = t, this.setData(n, i)
    }
    var e = r.prototype;
    return e.setData = function(n, i) {
      i = i || {}, n = n || "0,0,1,1";
      var o = n.match(Xk),
        s = 1,
        a = [],
        l = [],
        c = i.precision || 1,
        u = c <= 1,
        d, h, f, _, p, m, g, y, b;
      if (this.data = n, (Yk.test(n) || ~n.indexOf("M") && n.indexOf("C") < 0) && (o = Uk(n)[0]), d = o.length, d === 4) o.unshift(0, 0), o.push(1, 1), d = 8;
      else if ((d - 2) % 6) throw "Invalid CustomEase";
      for ((+o[0] != 0 || +o[d - 2] != 1) && Gk(o, i.height, i.originY), this.segment = o, _ = 2; _ < d; _ += 6) h = {
        x: +o[_ - 2],
        y: +o[_ - 1]
      }, f = {
        x: +o[_ + 4],
        y: +o[_ + 5]
      }, a.push(h, f), qk(h.x, h.y, +o[_], +o[_ + 1], +o[_ + 2], +o[_ + 3], f.x, f.y, 1 / (c * 2e5), a, a.length - 1);
      for (d = a.length, _ = 0; _ < d; _++) g = a[_], y = a[_ - 1] || g, (g.x > y.x || y.y !== g.y && y.x === g.x || g === y) && g.x <= 1 ? (y.cx = g.x - y.x, y.cy = g.y - y.y, y.n = g, y.nx = g.x, u && _ > 1 && Math.abs(y.cy / y.cx - a[_ - 2].cy / a[_ - 2].cx) > 2 && (u = 0), y.cx < s && (y.cx ? s = y.cx : (y.cx = .001, _ === d - 1 && (y.x -= .001, s = Math.min(s, .001), u = 0)))) : (a.splice(_--, 1), d--);
      if (d = 1 / s + 1 | 0, p = 1 / d, m = 0, g = a[0], u) {
        for (_ = 0; _ < d; _++) b = _ * p, g.nx < b && (g = a[++m]), h = g.y + (b - g.x) / g.cx * g.cy, l[_] = {
          x: b,
          cx: p,
          y: h,
          cy: 0,
          nx: 9
        }, _ && (l[_ - 1].cy = h - l[_ - 1].y);
        l[d - 1].cy = a[a.length - 1].y - h
      } else {
        for (_ = 0; _ < d; _++) g.nx < _ * p && (g = a[++m]), l[_] = g;
        m < a.length - 1 && (l[_ - 1] = a[a.length - 2])
      }
      return this.ease = function(v) {
        var D = l[v * d | 0] || l[d - 1];
        return D.nx < v && (D = D.n), D.y + (v - D.x) / D.cx * D.cy
      }, this.ease.custom = this, this.id && yr && yr.registerEase(this.id, this.ease), this
    }, e.getSVGData = function(n) {
      return r.getSVGData(this, n)
    }, r.create = function(n, i, o) {
      return new r(n, i, o).ease
    }, r.register = function(n) {
      yr = n, P_()
    }, r.get = function(n) {
      return yr.parseEase(n)
    }, r.getSVGData = function(n, i) {
      i = i || {};
      var o = i.width || 100,
        s = i.height || 100,
        a = i.x || 0,
        l = (i.y || 0) + s,
        c = yr.utils.toArray(i.path)[0],
        u, d, h, f, _, p, m, g, y, b;
      if (i.invert && (s = -s, l = 0), typeof n == "string" && (n = yr.parseEase(n)), n.custom && (n = n.custom), n instanceof r) u = jk(Vk([n.segment], o, 0, 0, -s, a, l));
      else {
        for (u = [a, l], m = Math.max(5, (i.precision || 1) * 200), f = 1 / m, m += 2, g = 5 / m, y = hl(a + f * o), b = hl(l + n(f) * -s), d = (b - l) / (y - a), h = 2; h < m; h++) _ = hl(a + h * f * o), p = hl(l + n(h * f) * -s), (Math.abs((p - b) / (_ - y) - d) > g || h === m - 1) && (u.push(y, b), d = (p - b) / (_ - y)), y = _, b = p;
        u = "M" + u.join(",")
      }
      return c && c.setAttribute("d", u), u
    }, r
  }();
k1() && yr.registerPlugin(Ma);
Ma.version = "3.12.2";
/*!
 * matrix 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Wn, so, ud, is, Us, Il, hc, ia, Kr = "transform",
  Uf = Kr + "Origin",
  S1, fd = function(e) {
    var t = e.ownerDocument || e;
    for (!(Kr in e.style) && ("msTransform" in e.style) && (Kr = "msTransform", Uf = Kr + "Origin"); t.parentNode && (t = t.parentNode););
    if (so = window, hc = new ti, t) {
      Wn = t, ud = t.documentElement, is = t.body, ia = Wn.createElementNS("http://www.w3.org/2000/svg", "g"), ia.style.transform = "none";
      var n = t.createElement("div"),
        i = t.createElement("div");
      is.appendChild(n), n.appendChild(i), n.style.position = "static", n.style[Kr] = "translate3d(0,0,1px)", S1 = i.offsetParent !== n, is.removeChild(n)
    }
    return t
  },
  Kk = function(e) {
    for (var t, n; e && e !== is;) n = e._gsap, n && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
    return t
  },
  T1 = [],
  P1 = [],
  hd = function() {
    return so.pageYOffset || Wn.scrollTop || ud.scrollTop || is.scrollTop || 0
  },
  dd = function() {
    return so.pageXOffset || Wn.scrollLeft || ud.scrollLeft || is.scrollLeft || 0
  },
  pd = function(e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
  },
  Qk = function r(e) {
    if (so.getComputedStyle(e).position === "fixed") return !0;
    if (e = e.parentNode, e && e.nodeType === 1) return r(e)
  },
  yu = function r(e, t) {
    if (e.parentNode && (Wn || fd(e))) {
      var n = pd(e),
        i = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        o = n ? t ? "rect" : "g" : "div",
        s = t !== 2 ? 0 : 100,
        a = t === 3 ? 100 : 0,
        l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        c = Wn.createElementNS ? Wn.createElementNS(i.replace(/^https/, "http"), o) : Wn.createElement(o);
      return t && (n ? (Il || (Il = r(e)), c.setAttribute("width", .01), c.setAttribute("height", .01), c.setAttribute("transform", "translate(" + s + "," + a + ")"), Il.appendChild(c)) : (Us || (Us = r(e), Us.style.cssText = l), c.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px", Us.appendChild(c))), c
    }
    throw "Need document and parent."
  },
  Jk = function(e) {
    for (var t = new ti, n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
    return t
  },
  L1 = function(e) {
    var t = e.getCTM(),
      n;
    return t || (n = e.style[Kr], e.style[Kr] = "none", e.appendChild(ia), t = ia.getCTM(), e.removeChild(ia), n ? e.style[Kr] = n : e.style.removeProperty(Kr.replace(/([A-Z])/g, "-$1").toLowerCase())), t || hc.clone()
  },
  Zk = function(e, t) {
    var n = pd(e),
      i = e === n,
      o = n ? T1 : P1,
      s = e.parentNode,
      a, l, c, u, d, h;
    if (e === so) return e;
    if (o.length || o.push(yu(e, 1), yu(e, 2), yu(e, 3)), a = n ? Il : Us, n) i ? (c = L1(e), u = -c.e / c.a, d = -c.f / c.d, l = hc) : e.getBBox ? (c = e.getBBox(), l = e.transform ? e.transform.baseVal : {}, l = l.numberOfItems ? l.numberOfItems > 1 ? Jk(l) : l.getItem(0).matrix : hc, u = l.a * c.x + l.c * c.y, d = l.b * c.x + l.d * c.y) : (l = new ti, u = d = 0), t && e.tagName.toLowerCase() === "g" && (u = d = 0), (i ? n : s).appendChild(a), a.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + u) + "," + (l.f + d) + ")");
    else {
      if (u = d = 0, S1)
        for (l = e.offsetParent, c = e; c && (c = c.parentNode) && c !== l && c.parentNode;)(so.getComputedStyle(c)[Kr] + "").length > 4 && (u = c.offsetLeft, d = c.offsetTop, c = 0);
      if (h = so.getComputedStyle(e), h.position !== "absolute" && h.position !== "fixed")
        for (l = e.offsetParent; s && s !== l;) u += s.scrollLeft || 0, d += s.scrollTop || 0, s = s.parentNode;
      c = a.style, c.top = e.offsetTop - d + "px", c.left = e.offsetLeft - u + "px", c[Kr] = h[Kr], c[Uf] = h[Uf], c.position = h.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(a)
    }
    return a
  },
  bu = function(e, t, n, i, o, s, a) {
    return e.a = t, e.b = n, e.c = i, e.d = o, e.e = s, e.f = a, e
  },
  ti = function() {
    function r(t, n, i, o, s, a) {
      t === void 0 && (t = 1), n === void 0 && (n = 0), i === void 0 && (i = 0), o === void 0 && (o = 1), s === void 0 && (s = 0), a === void 0 && (a = 0), bu(this, t, n, i, o, s, a)
    }
    var e = r.prototype;
    return e.inverse = function() {
      var n = this.a,
        i = this.b,
        o = this.c,
        s = this.d,
        a = this.e,
        l = this.f,
        c = n * s - i * o || 1e-10;
      return bu(this, s / c, -i / c, -o / c, n / c, (o * l - s * a) / c, -(n * l - i * a) / c)
    }, e.multiply = function(n) {
      var i = this.a,
        o = this.b,
        s = this.c,
        a = this.d,
        l = this.e,
        c = this.f,
        u = n.a,
        d = n.c,
        h = n.b,
        f = n.d,
        _ = n.e,
        p = n.f;
      return bu(this, u * i + h * s, u * o + h * a, d * i + f * s, d * o + f * a, l + _ * i + p * s, c + _ * o + p * a)
    }, e.clone = function() {
      return new r(this.a, this.b, this.c, this.d, this.e, this.f)
    }, e.equals = function(n) {
      var i = this.a,
        o = this.b,
        s = this.c,
        a = this.d,
        l = this.e,
        c = this.f;
      return i === n.a && o === n.b && s === n.c && a === n.d && l === n.e && c === n.f
    }, e.apply = function(n, i) {
      i === void 0 && (i = {});
      var o = n.x,
        s = n.y,
        a = this.a,
        l = this.b,
        c = this.c,
        u = this.d,
        d = this.e,
        h = this.f;
      return i.x = o * a + s * c + d || 0, i.y = o * l + s * u + h || 0, i
    }, r
  }();

function Ht(r, e, t, n) {
  if (!r || !r.parentNode || (Wn || fd(r)).documentElement === r) return new ti;
  var i = Kk(r),
    o = pd(r),
    s = o ? T1 : P1,
    a = Zk(r, t),
    l = s[0].getBoundingClientRect(),
    c = s[1].getBoundingClientRect(),
    u = s[2].getBoundingClientRect(),
    d = a.parentNode,
    h = !n && Qk(r),
    f = new ti((c.left - l.left) / 100, (c.top - l.top) / 100, (u.left - l.left) / 100, (u.top - l.top) / 100, l.left + (h ? 0 : dd()), l.top + (h ? 0 : hd()));
  if (d.removeChild(a), i)
    for (l = i.length; l--;) c = i[l], c.scaleX = c.scaleY = 0, c.renderTransform(1, c);
  return e ? f.inverse() : f
}

function L_(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r
}

function eS(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e
}
var Oe, qe, Fr, cn, Xn, vu, Bn, jf, js, Di, A1, Wf, Na, _d, Ws, rn, Xs, $l, R1, Xf, dc = 0,
  O1 = function() {
    return typeof window < "u"
  },
  F1 = function() {
    return Oe || O1() && (Oe = window.gsap) && Oe.registerPlugin && Oe
  },
  _i = function(e) {
    return typeof e == "function"
  },
  oa = function(e) {
    return typeof e == "object"
  },
  sn = function(e) {
    return typeof e > "u"
  },
  Bl = function() {
    return !1
  },
  sa = "transform",
  Yf = "transformOrigin",
  ui = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  Ns = Array.isArray,
  dl = function(e, t) {
    var n = Fr.createElementNS ? Fr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Fr.createElement(e);
    return n.style ? n : Fr.createElement(e)
  },
  A_ = 180 / Math.PI,
  Wi = 1e20,
  tS = new ti,
  fi = Date.now || function() {
    return new Date().getTime()
  },
  ao = [],
  os = {},
  rS = 0,
  nS = /^(?:a|input|textarea|button|select)$/i,
  R_ = 0,
  Io = {},
  Nn = {},
  M1 = function(e, t) {
    var n = {},
      i;
    for (i in e) n[i] = t ? e[i] * t : e[i];
    return n
  },
  iS = function(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e
  },
  O_ = function r(e, t) {
    for (var n = e.length, i; n--;) t ? e[n].style.touchAction = t : e[n].style.removeProperty("touch-action"), i = e[n].children, i && i.length && r(i, t)
  },
  N1 = function() {
    return ao.forEach(function(e) {
      return e()
    })
  },
  oS = function(e) {
    ao.push(e), ao.length === 1 && Oe.ticker.add(N1)
  },
  F_ = function() {
    return !ao.length && Oe.ticker.remove(N1)
  },
  M_ = function(e) {
    for (var t = ao.length; t--;) ao[t] === e && ao.splice(t, 1);
    Oe.to(F_, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: F_,
      data: "_draggable"
    })
  },
  sS = function(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e
  },
  kt = function(e, t, n, i) {
    if (e.addEventListener) {
      var o = Na[t];
      i = i || (A1 ? {
        passive: !1
      } : null), e.addEventListener(o || t, n, i), o && t !== o && e.addEventListener(t, n, i)
    }
  },
  vt = function(e, t, n, i) {
    if (e.removeEventListener) {
      var o = Na[t];
      e.removeEventListener(o || t, n, i), o && t !== o && e.removeEventListener(t, n, i)
    }
  },
  Vr = function(e) {
    e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
  },
  aS = function(e, t) {
    for (var n = e.length; n--;)
      if (e[n].identifier === t) return !0
  },
  lS = function r(e) {
    _d = e.touches && dc < e.touches.length, vt(e.target, "touchend", r)
  },
  N_ = function(e) {
    _d = e.touches && dc < e.touches.length, kt(e.target, "touchend", lS)
  },
  ss = function(e) {
    return qe.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
  },
  as = function(e) {
    return qe.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
  },
  I_ = function r(e, t) {
    kt(e, "scroll", t), Cs(e.parentNode) || r(e.parentNode, t)
  },
  $_ = function r(e, t) {
    vt(e, "scroll", t), Cs(e.parentNode) || r(e.parentNode, t)
  },
  Cs = function(e) {
    return !e || e === cn || e.nodeType === 9 || e === Fr.body || e === qe || !e.nodeType || !e.parentNode
  },
  B_ = function(e, t) {
    var n = t === "x" ? "Width" : "Height",
      i = "scroll" + n,
      o = "client" + n;
    return Math.max(0, Cs(e) ? Math.max(cn[i], Xn[i]) - (qe["inner" + n] || cn[o] || Xn[o]) : e[i] - e[o])
  },
  Du = function r(e, t) {
    var n = B_(e, "x"),
      i = B_(e, "y");
    Cs(e) ? e = Nn : r(e.parentNode, t), e._gsMaxScrollX = n, e._gsMaxScrollY = i, t || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
  },
  wu = function(e, t, n) {
    var i = e.style;
    i && (sn(i[t]) && (t = js(t, e) || t), n == null ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = n)
  },
  Ia = function(e) {
    return qe.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
  },
  Xi = {},
  $o = function(e) {
    if (e === qe) return Xi.left = Xi.top = 0, Xi.width = Xi.right = cn.clientWidth || e.innerWidth || Xn.clientWidth || 0, Xi.height = Xi.bottom = (e.innerHeight || 0) - 20 < cn.clientHeight ? cn.clientHeight : e.innerHeight || Xn.clientHeight || 0, Xi;
    var t = e.ownerDocument || Fr,
      n = sn(e.pageX) ? !e.nodeType && !sn(e.left) && !sn(e.top) ? e : Di(e)[0].getBoundingClientRect() : {
        left: e.pageX - as(t),
        top: e.pageY - ss(t),
        right: e.pageX - as(t) + 1,
        bottom: e.pageY - ss(t) + 1
      };
    return sn(n.right) && !sn(n.width) ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : sn(n.width) && (n = {
      width: n.right - n.left,
      height: n.bottom - n.top,
      right: n.right,
      left: n.left,
      bottom: n.bottom,
      top: n.top
    }), n
  },
  mt = function(e, t, n) {
    var i = e.vars,
      o = i[n],
      s = e._listeners[t],
      a;
    return _i(o) && (a = o.apply(i.callbackScope || e, i[n + "Params"] || [e.pointerEvent])), s && e.dispatchEvent(t) === !1 && (a = !1), a
  },
  V_ = function(e, t) {
    var n = Di(e)[0],
      i, o, s;
    return !n.nodeType && n !== qe ? sn(e.left) ? (o = e.min || e.minX || e.minRotation || 0, i = e.min || e.minY || 0, {
      left: o,
      top: i,
      width: (e.max || e.maxX || e.maxRotation || 0) - o,
      height: (e.max || e.maxY || 0) - i
    }) : (s = {
      x: 0,
      y: 0
    }, {
      left: e.left - s.x,
      top: e.top - s.y,
      width: e.width,
      height: e.height
    }) : cS(n, t)
  },
  Hr = {},
  cS = function(e, t) {
    t = Di(t)[0];
    var n = e.getBBox && e.ownerSVGElement,
      i = e.ownerDocument || Fr,
      o, s, a, l, c, u, d, h, f, _, p, m, g;
    if (e === qe) a = ss(i), o = as(i), s = o + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0), l = a + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
    else {
      if (t === qe || sn(t)) return e.getBoundingClientRect();
      o = a = 0, n ? (_ = e.getBBox(), p = _.width, m = _.height) : (e.viewBox && (_ = e.viewBox.baseVal) && (o = _.x || 0, a = _.y || 0, p = _.width, m = _.height), p || (g = Ia(e), _ = g.boxSizing === "border-box", p = (parseFloat(g.width) || e.clientWidth || 0) + (_ ? 0 : parseFloat(g.borderLeftWidth) + parseFloat(g.borderRightWidth)), m = (parseFloat(g.height) || e.clientHeight || 0) + (_ ? 0 : parseFloat(g.borderTopWidth) + parseFloat(g.borderBottomWidth)))), s = p, l = m
    }
    return e === t ? {
      left: o,
      top: a,
      width: s - o,
      height: l - a
    } : (c = Ht(t, !0).multiply(Ht(e)), u = c.apply({
      x: o,
      y: a
    }), d = c.apply({
      x: s,
      y: a
    }), h = c.apply({
      x: s,
      y: l
    }), f = c.apply({
      x: o,
      y: l
    }), o = Math.min(u.x, d.x, h.x, f.x), a = Math.min(u.y, d.y, h.y, f.y), {
      left: o,
      top: a,
      width: Math.max(u.x, d.x, h.x, f.x) - o,
      height: Math.max(u.y, d.y, h.y, f.y) - a
    })
  },
  xu = function(e, t, n, i, o, s) {
    var a = {},
      l, c, u;
    if (t)
      if (o !== 1 && t instanceof Array) {
        if (a.end = l = [], u = t.length, oa(t[0]))
          for (c = 0; c < u; c++) l[c] = M1(t[c], o);
        else
          for (c = 0; c < u; c++) l[c] = t[c] * o;
        n += 1.1, i -= 1.1
      } else _i(t) ? a.end = function(d) {
        var h = t.call(e, d),
          f, _;
        if (o !== 1)
          if (oa(h)) {
            f = {};
            for (_ in h) f[_] = h[_] * o;
            h = f
          } else h *= o;
        return h
      } : a.end = t;
    return (n || n === 0) && (a.max = n), (i || i === 0) && (a.min = i), s && (a.velocity = 0), a
  },
  uS = function r(e) {
    var t;
    return !e || !e.getAttribute || e === Xn ? !1 : (t = e.getAttribute("data-clickable")) === "true" || t !== "false" && (nS.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : r(e.parentNode)
  },
  pl = function(e, t) {
    for (var n = e.length, i; n--;) i = e[n], i.ondragstart = i.onselectstart = t ? null : Bl, Oe.set(i, {
      lazy: !0,
      userSelect: t ? "text" : "none"
    })
  },
  fS = function r(e) {
    if (Ia(e).position === "fixed") return !0;
    if (e = e.parentNode, e && e.nodeType === 1) return r(e)
  },
  I1, zf, hS = function(e, t) {
    e = Oe.utils.toArray(e)[0], t = t || {};
    var n = document.createElement("div"),
      i = n.style,
      o = e.firstChild,
      s = 0,
      a = 0,
      l = e.scrollTop,
      c = e.scrollLeft,
      u = e.scrollWidth,
      d = e.scrollHeight,
      h = 0,
      f = 0,
      _ = 0,
      p, m, g, y, b, v;
    I1 && t.force3D !== !1 ? (b = "translate3d(", v = "px,0px)") : sa && (b = "translate(", v = "px)"), this.scrollTop = function(D, k) {
      if (!arguments.length) return -this.top();
      this.top(-D, k)
    }, this.scrollLeft = function(D, k) {
      if (!arguments.length) return -this.left();
      this.left(-D, k)
    }, this.left = function(D, k) {
      if (!arguments.length) return -(e.scrollLeft + a);
      var w = e.scrollLeft - c,
        S = a;
      if ((w > 2 || w < -2) && !k) {
        c = e.scrollLeft, Oe.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        }), this.left(-c), t.onKill && t.onKill();
        return
      }
      D = -D, D < 0 ? (a = D - .5 | 0, D = 0) : D > f ? (a = D - f | 0, D = f) : a = 0, (a || S) && (this._skip || (i[sa] = b + -a + "px," + -s + v), a + h >= 0 && (i.paddingRight = a + h + "px")), e.scrollLeft = D | 0, c = e.scrollLeft
    }, this.top = function(D, k) {
      if (!arguments.length) return -(e.scrollTop + s);
      var w = e.scrollTop - l,
        S = s;
      if ((w > 2 || w < -2) && !k) {
        l = e.scrollTop, Oe.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        }), this.top(-l), t.onKill && t.onKill();
        return
      }
      D = -D, D < 0 ? (s = D - .5 | 0, D = 0) : D > _ ? (s = D - _ | 0, D = _) : s = 0, (s || S) && (this._skip || (i[sa] = b + -a + "px," + -s + v)), e.scrollTop = D | 0, l = e.scrollTop
    }, this.maxScrollTop = function() {
      return _
    }, this.maxScrollLeft = function() {
      return f
    }, this.disable = function() {
      for (o = n.firstChild; o;) y = o.nextSibling, e.appendChild(o), o = y;
      e === n.parentNode && e.removeChild(n)
    }, this.enable = function() {
      if (o = e.firstChild, o !== n) {
        for (; o;) y = o.nextSibling, n.appendChild(o), o = y;
        e.appendChild(n), this.calibrate()
      }
    }, this.calibrate = function(D) {
      var k = e.clientWidth === p,
        w, S, P;
      l = e.scrollTop, c = e.scrollLeft, !(k && e.clientHeight === m && n.offsetHeight === g && u === e.scrollWidth && d === e.scrollHeight && !D) && ((s || a) && (S = this.left(), P = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), w = Ia(e), (!k || D) && (i.display = "block", i.width = "auto", i.paddingRight = "0px", h = Math.max(0, e.scrollWidth - e.clientWidth), h && (h += parseFloat(w.paddingLeft) + (zf ? parseFloat(w.paddingRight) : 0))), i.display = "inline-block", i.position = "relative", i.overflow = "visible", i.verticalAlign = "top", i.boxSizing = "content-box", i.width = "100%", i.paddingRight = h + "px", zf && (i.paddingBottom = w.paddingBottom), p = e.clientWidth, m = e.clientHeight, u = e.scrollWidth, d = e.scrollHeight, f = e.scrollWidth - p, _ = e.scrollHeight - m, g = n.offsetHeight, i.display = "block", (S || P) && (this.left(S), this.top(P)))
    }, this.content = n, this.element = e, this._skip = !1, this.enable()
  },
  Cu = function(e) {
    if (O1() && document.body) {
      var t = window && window.navigator;
      qe = window, Fr = document, cn = Fr.documentElement, Xn = Fr.body, vu = dl("div"), $l = !!window.PointerEvent, Bn = dl("div"), Bn.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Xs = Bn.style.cursor === "grab" ? "grab" : "move", Ws = t && t.userAgent.toLowerCase().indexOf("android") !== -1, Wf = "ontouchstart" in cn && "orientation" in qe || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0), zf = function() {
        var n = dl("div"),
          i = dl("div"),
          o = i.style,
          s = Xn,
          a;
        return o.display = "inline-block", o.position = "relative", n.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", n.appendChild(i), s.appendChild(n), a = i.offsetHeight + 18 > n.scrollHeight, s.removeChild(n), a
      }(), Na = function(n) {
        for (var i = n.split(","), o = ("onpointerdown" in vu ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in vu ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : n).split(","), s = {}, a = 4; --a > -1;) s[i[a]] = o[a], s[o[a]] = i[a];
        try {
          cn.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
              A1 = 1
            }
          }))
        } catch {}
        return s
      }("touchstart,touchmove,touchend,touchcancel"), kt(Fr, "touchcancel", Bl), kt(qe, "touchmove", Bl), Xn && Xn.addEventListener("touchstart", Bl), kt(Fr, "contextmenu", function() {
        for (var n in os) os[n].isPressed && os[n].endDrag()
      }), Oe = jf = F1()
    }
    Oe ? (rn = Oe.plugins.inertia, R1 = Oe.core.context || function() {}, js = Oe.utils.checkPrefix, sa = js(sa), Yf = js(Yf), Di = Oe.utils.toArray, Xf = Oe.core.getStyleSaver, I1 = !!js("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
  },
  dS = function() {
    function r(t) {
      this._listeners = {}, this.target = t || this
    }
    var e = r.prototype;
    return e.addEventListener = function(n, i) {
      var o = this._listeners[n] || (this._listeners[n] = []);
      ~o.indexOf(i) || o.push(i)
    }, e.removeEventListener = function(n, i) {
      var o = this._listeners[n],
        s = o && o.indexOf(i);
      s >= 0 && o.splice(s, 1)
    }, e.dispatchEvent = function(n) {
      var i = this,
        o;
      return (this._listeners[n] || []).forEach(function(s) {
        return s.call(i, {
          type: n,
          target: i.target
        }) === !1 && (o = !1)
      }), o
    }, r
  }(),
  Za = function(r) {
    eS(e, r);

    function e(t, n) {
      var i;
      i = r.call(this) || this, jf || Cu(1), t = Di(t)[0], i.styles = Xf && Xf(t, "transform,left,top"), rn || (rn = Oe.plugins.inertia), i.vars = n = M1(n || {}), i.target = t, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(n.dragResistance) || 0, i.edgeResistance = isNaN(n.edgeResistance) ? 1 : parseFloat(n.edgeResistance) || 0, i.lockAxis = n.lockAxis, i.autoScroll = n.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!n.allowEventDefault, Oe.getProperty(t, "x");
      var o = (n.type || "x,y").toLowerCase(),
        s = ~o.indexOf("x") || ~o.indexOf("y"),
        a = o.indexOf("rotation") !== -1,
        l = a ? "rotation" : s ? "x" : "left",
        c = s ? "y" : "top",
        u = !!(~o.indexOf("x") || ~o.indexOf("left") || o === "scroll"),
        d = !!(~o.indexOf("y") || ~o.indexOf("top") || o === "scroll"),
        h = n.minimumMovement || 2,
        f = L_(i),
        _ = Di(n.trigger || n.handle || t),
        p = {},
        m = 0,
        g = !1,
        y = n.autoScrollMarginTop || 40,
        b = n.autoScrollMarginRight || 40,
        v = n.autoScrollMarginBottom || 40,
        D = n.autoScrollMarginLeft || 40,
        k = n.clickableTest || uS,
        w = 0,
        S = t._gsap || Oe.core.getCache(t),
        P = fS(t),
        C = function(A, I) {
          return parseFloat(S.get(t, A, I))
        },
        R = t.ownerDocument || Fr,
        N, B, z, U, V, Y, oe, $, L, ee, ie, be, te, ne, ce, M, X, K, Q, ue, De, x, E, F, Z, T, he, Qe, tt, de, Je, je, j, G = function(A) {
          return Vr(A), A.stopImmediatePropagation && A.stopImmediatePropagation(), !1
        },
        me = function ge(A) {
          if (f.autoScroll && f.isDragging && (g || X)) {
            var I = t,
              O = f.autoScroll * 15,
              W, J, H, re, q, fe, ve, _e;
            for (g = !1, Nn.scrollTop = qe.pageYOffset != null ? qe.pageYOffset : R.documentElement.scrollTop != null ? R.documentElement.scrollTop : R.body.scrollTop, Nn.scrollLeft = qe.pageXOffset != null ? qe.pageXOffset : R.documentElement.scrollLeft != null ? R.documentElement.scrollLeft : R.body.scrollLeft, re = f.pointerX - Nn.scrollLeft, q = f.pointerY - Nn.scrollTop; I && !J;) J = Cs(I.parentNode), W = J ? Nn : I.parentNode, H = J ? {
              bottom: Math.max(cn.clientHeight, qe.innerHeight || 0),
              right: Math.max(cn.clientWidth, qe.innerWidth || 0),
              left: 0,
              top: 0
            } : W.getBoundingClientRect(), fe = ve = 0, d && (_e = W._gsMaxScrollY - W.scrollTop, _e < 0 ? ve = _e : q > H.bottom - v && _e ? (g = !0, ve = Math.min(_e, O * (1 - Math.max(0, H.bottom - q) / v) | 0)) : q < H.top + y && W.scrollTop && (g = !0, ve = -Math.min(W.scrollTop, O * (1 - Math.max(0, q - H.top) / y) | 0)), ve && (W.scrollTop += ve)), u && (_e = W._gsMaxScrollX - W.scrollLeft, _e < 0 ? fe = _e : re > H.right - b && _e ? (g = !0, fe = Math.min(_e, O * (1 - Math.max(0, H.right - re) / b) | 0)) : re < H.left + D && W.scrollLeft && (g = !0, fe = -Math.min(W.scrollLeft, O * (1 - Math.max(0, re - H.left) / D) | 0)), fe && (W.scrollLeft += fe)), J && (fe || ve) && (qe.scrollTo(W.scrollLeft, W.scrollTop), Er(f.pointerX + fe, f.pointerY + ve)), I = W
          }
          if (X) {
            var Ce = f.x,
              $e = f.y;
            a ? (f.deltaX = Ce - parseFloat(S.rotation), f.rotation = Ce, S.rotation = Ce + "deg", S.renderTransform(1, S)) : B ? (d && (f.deltaY = $e - B.top(), B.top($e)), u && (f.deltaX = Ce - B.left(), B.left(Ce))) : s ? (d && (f.deltaY = $e - parseFloat(S.y), S.y = $e + "px"), u && (f.deltaX = Ce - parseFloat(S.x), S.x = Ce + "px"), S.renderTransform(1, S)) : (d && (f.deltaY = $e - parseFloat(t.style.top || 0), t.style.top = $e + "px"), u && (f.deltaX = Ce - parseFloat(t.style.left || 0), t.style.left = Ce + "px")), $ && !A && !Qe && (Qe = !0, mt(f, "drag", "onDrag") === !1 && (u && (f.x -= f.deltaX), d && (f.y -= f.deltaY), ge(!0)), Qe = !1)
          }
          X = !1
        },
        Ee = function(A, I) {
          var O = f.x,
            W = f.y,
            J, H;
          t._gsap || (S = Oe.core.getCache(t)), S.uncache && Oe.getProperty(t, "x"), s ? (f.x = parseFloat(S.x), f.y = parseFloat(S.y)) : a ? f.x = f.rotation = parseFloat(S.rotation) : B ? (f.y = B.top(), f.x = B.left()) : (f.y = parseFloat(t.style.top || (H = Ia(t)) && H.top) || 0, f.x = parseFloat(t.style.left || (H || {}).left) || 0), (Q || ue || De) && !I && (f.isDragging || f.isThrowing) && (De && (Io.x = f.x, Io.y = f.y, J = De(Io), J.x !== f.x && (f.x = J.x, X = !0), J.y !== f.y && (f.y = J.y, X = !0)), Q && (J = Q(f.x), J !== f.x && (f.x = J, a && (f.rotation = J), X = !0)), ue && (J = ue(f.y), J !== f.y && (f.y = J), X = !0)), X && me(!0), A || (f.deltaX = f.x - O, f.deltaY = f.y - W, mt(f, "throwupdate", "onThrowUpdate"))
        },
        ot = function(A, I, O, W) {
          return I == null && (I = -Wi), O == null && (O = Wi), _i(A) ? function(J) {
            var H = f.isPressed ? 1 - f.edgeResistance : 1;
            return A.call(f, (J > O ? O + (J - O) * H : J < I ? I + (J - I) * H : J) * W) * W
          } : Ns(A) ? function(J) {
            for (var H = A.length, re = 0, q = Wi, fe, ve; --H > -1;) fe = A[H], ve = fe - J, ve < 0 && (ve = -ve), ve < q && fe >= I && fe <= O && (re = H, q = ve);
            return A[re]
          } : isNaN(A) ? function(J) {
            return J
          } : function() {
            return A * W
          }
        },
        hr = function(A, I, O, W, J, H, re) {
          return H = H && H < Wi ? H * H : Wi, _i(A) ? function(q) {
            var fe = f.isPressed ? 1 - f.edgeResistance : 1,
              ve = q.x,
              _e = q.y,
              Ce, $e, ze;
            return q.x = ve = ve > O ? O + (ve - O) * fe : ve < I ? I + (ve - I) * fe : ve, q.y = _e = _e > J ? J + (_e - J) * fe : _e < W ? W + (_e - W) * fe : _e, Ce = A.call(f, q), Ce !== q && (q.x = Ce.x, q.y = Ce.y), re !== 1 && (q.x *= re, q.y *= re), H < Wi && ($e = q.x - ve, ze = q.y - _e, $e * $e + ze * ze > H && (q.x = ve, q.y = _e)), q
          } : Ns(A) ? function(q) {
            for (var fe = A.length, ve = 0, _e = Wi, Ce, $e, ze, Ae; --fe > -1;) ze = A[fe], Ce = ze.x - q.x, $e = ze.y - q.y, Ae = Ce * Ce + $e * $e, Ae < _e && (ve = fe, _e = Ae);
            return _e <= H ? A[ve] : q
          } : function(q) {
            return q
          }
        },
        bt = function() {
          var A, I, O, W;
          oe = !1, B ? (B.calibrate(), f.minX = ie = -B.maxScrollLeft(), f.minY = te = -B.maxScrollTop(), f.maxX = ee = f.maxY = be = 0, oe = !0) : n.bounds && (A = V_(n.bounds, t.parentNode), a ? (f.minX = ie = A.left, f.maxX = ee = A.left + A.width, f.minY = te = f.maxY = be = 0) : !sn(n.bounds.maxX) || !sn(n.bounds.maxY) ? (A = n.bounds, f.minX = ie = A.minX, f.minY = te = A.minY, f.maxX = ee = A.maxX, f.maxY = be = A.maxY) : (I = V_(t, t.parentNode), f.minX = ie = Math.round(C(l, "px") + A.left - I.left), f.minY = te = Math.round(C(c, "px") + A.top - I.top), f.maxX = ee = Math.round(ie + (A.width - I.width)), f.maxY = be = Math.round(te + (A.height - I.height))), ie > ee && (f.minX = ee, f.maxX = ee = ie, ie = f.minX), te > be && (f.minY = be, f.maxY = be = te, te = f.minY), a && (f.minRotation = ie, f.maxRotation = ee), oe = !0), n.liveSnap && (O = n.liveSnap === !0 ? n.snap || {} : n.liveSnap, W = Ns(O) || _i(O), a ? (Q = ot(W ? O : O.rotation, ie, ee, 1), ue = null) : O.points ? De = hr(W ? O : O.points, ie, ee, te, be, O.radius, B ? -1 : 1) : (u && (Q = ot(W ? O : O.x || O.left || O.scrollLeft, ie, ee, B ? -1 : 1)), d && (ue = ot(W ? O : O.y || O.top || O.scrollTop, te, be, B ? -1 : 1))))
        },
        dr = function() {
          f.isThrowing = !1, mt(f, "throwcomplete", "onThrowComplete")
        },
        Mt = function() {
          f.isThrowing = !1
        },
        en = function(A, I) {
          var O, W, J, H;
          A && rn ? (A === !0 && (O = n.snap || n.liveSnap || {}, W = Ns(O) || _i(O), A = {
            resistance: (n.throwResistance || n.resistance || 1e3) / (a ? 10 : 1)
          }, a ? A.rotation = xu(f, W ? O : O.rotation, ee, ie, 1, I) : (u && (A[l] = xu(f, W ? O : O.points || O.x || O.left, ee, ie, B ? -1 : 1, I || f.lockedAxis === "x")), d && (A[c] = xu(f, W ? O : O.points || O.y || O.top, be, te, B ? -1 : 1, I || f.lockedAxis === "y")), (O.points || Ns(O) && oa(O[0])) && (A.linkedProps = l + "," + c, A.radius = O.radius))), f.isThrowing = !0, H = isNaN(n.overshootTolerance) ? n.edgeResistance === 1 ? 0 : 1 - f.edgeResistance + .2 : n.overshootTolerance, A.duration || (A.duration = {
            max: Math.max(n.minDuration || 0, "maxDuration" in n ? n.maxDuration : 2),
            min: isNaN(n.minDuration) ? H === 0 || oa(A) && A.resistance > 1e3 ? 0 : .5 : n.minDuration,
            overshoot: H
          }), f.tween = J = Oe.to(B || t, {
            inertia: A,
            data: "_draggable",
            onComplete: dr,
            onInterrupt: Mt,
            onUpdate: n.fastMode ? mt : Ee,
            onUpdateParams: n.fastMode ? [f, "onthrowupdate", "onThrowUpdate"] : O && O.radius ? [!1, !0] : []
          }), n.fastMode || (B && (B._skip = !0), J.render(1e9, !0, !0), Ee(!0, !0), f.endX = f.x, f.endY = f.y, a && (f.endRotation = f.x), J.play(0), Ee(!0, !0), B && (B._skip = !1))) : oe && f.applyBounds()
        },
        On = function(A) {
          var I = F,
            O;
          F = Ht(t.parentNode, !0), A && f.isPressed && !F.equals(I || new ti) && (O = I.inverse().apply({
            x: z,
            y: U
          }), F.apply(O, O), z = O.x, U = O.y), F.equals(tS) && (F = null)
        },
        tn = function() {
          var A = 1 - f.edgeResistance,
            I = P ? as(R) : 0,
            O = P ? ss(R) : 0,
            W, J, H;
          s && (S.x = C(l, "px") + "px", S.y = C(c, "px") + "px", S.renderTransform()), On(!1), Hr.x = f.pointerX - I, Hr.y = f.pointerY - O, F && F.apply(Hr, Hr), z = Hr.x, U = Hr.y, X && (Er(f.pointerX, f.pointerY), me(!0)), je = Ht(t), B ? (bt(), Y = B.top(), V = B.left()) : (Cr() ? (Ee(!0, !0), bt()) : f.applyBounds(), a ? (W = t.ownerSVGElement ? [S.xOrigin - t.getBBox().x, S.yOrigin - t.getBBox().y] : (Ia(t)[Yf] || "0 0").split(" "), M = f.rotationOrigin = Ht(t).apply({
            x: parseFloat(W[0]) || 0,
            y: parseFloat(W[1]) || 0
          }), Ee(!0, !0), J = f.pointerX - M.x - I, H = M.y - f.pointerY + O, V = f.x, Y = f.y = Math.atan2(H, J) * A_) : (Y = C(c, "px"), V = C(l, "px"))), oe && A && (V > ee ? V = ee + (V - ee) / A : V < ie && (V = ie - (ie - V) / A), a || (Y > be ? Y = be + (Y - be) / A : Y < te && (Y = te - (te - Y) / A))), f.startX = V = ui(V), f.startY = Y = ui(Y)
        },
        Cr = function() {
          return f.tween && f.tween.isActive()
        },
        dn = function() {
          Bn.parentNode && !Cr() && !f.isDragging && Bn.parentNode.removeChild(Bn)
        },
        pr = function(A, I) {
          var O;
          if (!N || f.isPressed || !A || (A.type === "mousedown" || A.type === "pointerdown") && !I && fi() - w < 30 && Na[f.pointerEvent.type]) {
            Je && A && N && Vr(A);
            return
          }
          if (Z = Cr(), j = !1, f.pointerEvent = A, Na[A.type] ? (E = ~A.type.indexOf("touch") ? A.currentTarget || A.target : R, kt(E, "touchend", st), kt(E, "touchmove", ke), kt(E, "touchcancel", st), kt(R, "touchstart", N_)) : (E = null, kt(R, "mousemove", ke)), he = null, (!$l || !E) && (kt(R, "mouseup", st), A && A.target && kt(A.target, "mouseup", st)), x = k.call(f, A.target) && n.dragClickables === !1 && !I, x) {
            kt(A.target, "change", st), mt(f, "pressInit", "onPressInit"), mt(f, "press", "onPress"), pl(_, !0), Je = !1;
            return
          }
          if (T = !E || u === d || f.vars.allowNativeTouchScrolling === !1 || f.vars.allowContextMenu && A && (A.ctrlKey || A.which > 2) ? !1 : u ? "y" : "x", Je = !T && !f.allowEventDefault, Je && (Vr(A), kt(qe, "touchforcechange", Vr)), A.changedTouches ? (A = ne = A.changedTouches[0], ce = A.identifier) : A.pointerId ? ce = A.pointerId : ne = ce = null, dc++, oS(me), U = f.pointerY = A.pageY, z = f.pointerX = A.pageX, mt(f, "pressInit", "onPressInit"), (T || f.autoScroll) && Du(t.parentNode), t.parentNode && f.autoScroll && !B && !a && t.parentNode._gsMaxScrollX && !Bn.parentNode && !t.getBBox && (Bn.style.width = t.parentNode.scrollWidth + "px", t.parentNode.appendChild(Bn)), tn(), f.tween && f.tween.kill(), f.isThrowing = !1, Oe.killTweensOf(B || t, p, !0), B && Oe.killTweensOf(t, {
              scrollTo: 1
            }, !0), f.tween = f.lockedAxis = null, (n.zIndexBoost || !a && !B && n.zIndexBoost !== !1) && (t.style.zIndex = e.zIndex++), f.isPressed = !0, $ = !!(n.onDrag || f._listeners.drag), L = !!(n.onMove || f._listeners.move), n.cursor !== !1 || n.activeCursor)
            for (O = _.length; --O > -1;) Oe.set(_[O], {
              cursor: n.activeCursor || n.cursor || (Xs === "grab" ? "grabbing" : Xs)
            });
          mt(f, "press", "onPress")
        },
        ke = function(A) {
          var I = A,
            O, W, J, H, re, q;
          if (!N || _d || !f.isPressed || !A) {
            Je && A && N && Vr(A);
            return
          }
          if (f.pointerEvent = A, O = A.changedTouches, O) {
            if (A = O[0], A !== ne && A.identifier !== ce) {
              for (H = O.length; --H > -1 && (A = O[H]).identifier !== ce && A.target !== t;);
              if (H < 0) return
            }
          } else if (A.pointerId && ce && A.pointerId !== ce) return;
          if (E && T && !he && (Hr.x = A.pageX - (P ? as(R) : 0), Hr.y = A.pageY - (P ? ss(R) : 0), F && F.apply(Hr, Hr), W = Hr.x, J = Hr.y, re = Math.abs(W - z), q = Math.abs(J - U), (re !== q && (re > h || q > h) || Ws && T === he) && (he = re > q && u ? "x" : "y", T && he !== T && kt(qe, "touchforcechange", Vr), f.vars.lockAxisOnTouchScroll !== !1 && u && d && (f.lockedAxis = he === "x" ? "y" : "x", _i(f.vars.onLockAxis) && f.vars.onLockAxis.call(f, I)), Ws && T === he))) {
            st(I);
            return
          }!f.allowEventDefault && (!T || he && T !== he) && I.cancelable !== !1 ? (Vr(I), Je = !0) : Je && (Je = !1), f.autoScroll && (g = !0), Er(A.pageX, A.pageY, L)
        },
        Er = function(A, I, O) {
          var W = 1 - f.dragResistance,
            J = 1 - f.edgeResistance,
            H = f.pointerX,
            re = f.pointerY,
            q = Y,
            fe = f.x,
            ve = f.y,
            _e = f.endX,
            Ce = f.endY,
            $e = f.endRotation,
            ze = X,
            Ae, Re, We, xe, Nt, ht;
          f.pointerX = A, f.pointerY = I, P && (A -= as(R), I -= ss(R)), a ? (xe = Math.atan2(M.y - I, A - M.x) * A_, Nt = f.y - xe, Nt > 180 ? (Y -= 360, f.y = xe) : Nt < -180 && (Y += 360, f.y = xe), f.x !== V || Math.abs(Y - xe) > h ? (f.y = xe, We = V + (Y - xe) * W) : We = V) : (F && (ht = A * F.a + I * F.c + F.e, I = A * F.b + I * F.d + F.f, A = ht), Re = I - U, Ae = A - z, Re < h && Re > -h && (Re = 0), Ae < h && Ae > -h && (Ae = 0), (f.lockAxis || f.lockedAxis) && (Ae || Re) && (ht = f.lockedAxis, ht || (f.lockedAxis = ht = u && Math.abs(Ae) > Math.abs(Re) ? "y" : d ? "x" : null, ht && _i(f.vars.onLockAxis) && f.vars.onLockAxis.call(f, f.pointerEvent)), ht === "y" ? Re = 0 : ht === "x" && (Ae = 0)), We = ui(V + Ae * W), xe = ui(Y + Re * W)), (Q || ue || De) && (f.x !== We || f.y !== xe && !a) && (De && (Io.x = We, Io.y = xe, ht = De(Io), We = ui(ht.x), xe = ui(ht.y)), Q && (We = ui(Q(We))), ue && (xe = ui(ue(xe)))), oe && (We > ee ? We = ee + Math.round((We - ee) * J) : We < ie && (We = ie + Math.round((We - ie) * J)), a || (xe > be ? xe = Math.round(be + (xe - be) * J) : xe < te && (xe = Math.round(te + (xe - te) * J)))), (f.x !== We || f.y !== xe && !a) && (a ? (f.endRotation = f.x = f.endX = We, X = !0) : (d && (f.y = f.endY = xe, X = !0), u && (f.x = f.endX = We, X = !0)), !O || mt(f, "move", "onMove") !== !1 ? !f.isDragging && f.isPressed && (f.isDragging = j = !0, mt(f, "dragstart", "onDragStart")) : (f.pointerX = H, f.pointerY = re, Y = q, f.x = fe, f.y = ve, f.endX = _e, f.endY = Ce, f.endRotation = $e, X = ze))
        },
        st = function ge(A, I) {
          if (!N || !f.isPressed || A && ce != null && !I && (A.pointerId && A.pointerId !== ce && A.target !== t || A.changedTouches && !aS(A.changedTouches, ce))) {
            Je && A && N && Vr(A);
            return
          }
          f.isPressed = !1;
          var O = A,
            W = f.isDragging,
            J = f.vars.allowContextMenu && A && (A.ctrlKey || A.which > 2),
            H = Oe.delayedCall(.001, dn),
            re, q, fe, ve, _e;
          if (E ? (vt(E, "touchend", ge), vt(E, "touchmove", ke), vt(E, "touchcancel", ge), vt(R, "touchstart", N_)) : vt(R, "mousemove", ke), vt(qe, "touchforcechange", Vr), (!$l || !E) && (vt(R, "mouseup", ge), A && A.target && vt(A.target, "mouseup", ge)), X = !1, W && (m = R_ = fi(), f.isDragging = !1), M_(me), x && !J) {
            A && (vt(A.target, "change", ge), f.pointerEvent = O), pl(_, !1), mt(f, "release", "onRelease"), mt(f, "click", "onClick"), x = !1;
            return
          }
          for (q = _.length; --q > -1;) wu(_[q], "cursor", n.cursor || (n.cursor !== !1 ? Xs : null));
          if (dc--, A) {
            if (re = A.changedTouches, re && (A = re[0], A !== ne && A.identifier !== ce)) {
              for (q = re.length; --q > -1 && (A = re[q]).identifier !== ce && A.target !== t;);
              if (q < 0 && !I) return
            }
            f.pointerEvent = O, f.pointerX = A.pageX, f.pointerY = A.pageY
          }
          return J && O ? (Vr(O), Je = !0, mt(f, "release", "onRelease")) : O && !W ? (Je = !1, Z && (n.snap || n.bounds) && en(n.inertia || n.throwProps), mt(f, "release", "onRelease"), (!Ws || O.type !== "touchmove") && O.type.indexOf("cancel") === -1 && (mt(f, "click", "onClick"), fi() - w < 300 && mt(f, "doubleclick", "onDoubleClick"), ve = O.target || t, w = fi(), _e = function() {
            w !== tt && f.enabled() && !f.isPressed && !O.defaultPrevented && (ve.click ? ve.click() : R.createEvent && (fe = R.createEvent("MouseEvents"), fe.initMouseEvent("click", !0, !0, qe, 1, f.pointerEvent.screenX, f.pointerEvent.screenY, f.pointerX, f.pointerY, !1, !1, !1, !1, 0, null), ve.dispatchEvent(fe)))
          }, !Ws && !O.defaultPrevented && Oe.delayedCall(.05, _e))) : (en(n.inertia || n.throwProps), !f.allowEventDefault && O && (n.dragClickables !== !1 || !k.call(f, O.target)) && W && (!T || he && T === he) && O.cancelable !== !1 ? (Je = !0, Vr(O)) : Je = !1, mt(f, "release", "onRelease")), Cr() && H.duration(f.tween.duration()), W && mt(f, "dragend", "onDragEnd"), !0
        },
        jt = function(A) {
          if (A && f.isDragging && !B) {
            var I = A.target || t.parentNode,
              O = I.scrollLeft - I._gsScrollX,
              W = I.scrollTop - I._gsScrollY;
            (O || W) && (F ? (z -= O * F.a + W * F.c, U -= W * F.d + O * F.b) : (z -= O, U -= W), I._gsScrollX += O, I._gsScrollY += W, Er(f.pointerX, f.pointerY))
          }
        },
        _r = function(A) {
          var I = fi(),
            O = I - w < 100,
            W = I - m < 50,
            J = O && tt === w,
            H = f.pointerEvent && f.pointerEvent.defaultPrevented,
            re = O && de === w,
            q = A.isTrusted || A.isTrusted == null && O && J;
          if ((J || W && f.vars.suppressClickOnDrag !== !1) && A.stopImmediatePropagation && A.stopImmediatePropagation(), O && !(f.pointerEvent && f.pointerEvent.defaultPrevented) && (!J || q && !re)) {
            q && J && (de = w), tt = w;
            return
          }(f.isPressed || W || O) && (!q || !A.detail || !O || H) && Vr(A), !O && !W && !j && (A && A.target && (f.pointerEvent = A), mt(f, "click", "onClick"))
        },
        pn = function(A) {
          return F ? {
            x: A.x * F.a + A.y * F.c + F.e,
            y: A.x * F.b + A.y * F.d + F.f
          } : {
            x: A.x,
            y: A.y
          }
        };
      return K = e.get(t), K && K.kill(), i.startDrag = function(ge, A) {
        var I, O, W, J;
        pr(ge || f.pointerEvent, !0), A && !f.hitTest(ge || f.pointerEvent) && (I = $o(ge || f.pointerEvent), O = $o(t), W = pn({
          x: I.left + I.width / 2,
          y: I.top + I.height / 2
        }), J = pn({
          x: O.left + O.width / 2,
          y: O.top + O.height / 2
        }), z -= W.x - J.x, U -= W.y - J.y), f.isDragging || (f.isDragging = j = !0, mt(f, "dragstart", "onDragStart"))
      }, i.drag = ke, i.endDrag = function(ge) {
        return st(ge || f.pointerEvent, !0)
      }, i.timeSinceDrag = function() {
        return f.isDragging ? 0 : (fi() - m) / 1e3
      }, i.timeSinceClick = function() {
        return (fi() - w) / 1e3
      }, i.hitTest = function(ge, A) {
        return e.hitTest(f.target, ge, A)
      }, i.getDirection = function(ge, A) {
        var I = ge === "velocity" && rn ? ge : oa(ge) && !a ? "element" : "start",
          O, W, J, H, re, q;
        return I === "element" && (re = $o(f.target), q = $o(ge)), O = I === "start" ? f.x - V : I === "velocity" ? rn.getVelocity(t, l) : re.left + re.width / 2 - (q.left + q.width / 2), a ? O < 0 ? "counter-clockwise" : "clockwise" : (A = A || 2, W = I === "start" ? f.y - Y : I === "velocity" ? rn.getVelocity(t, c) : re.top + re.height / 2 - (q.top + q.height / 2), J = Math.abs(O / W), H = J < 1 / A ? "" : O < 0 ? "left" : "right", J < A && (H !== "" && (H += "-"), H += W < 0 ? "up" : "down"), H)
      }, i.applyBounds = function(ge, A) {
        var I, O, W, J, H, re;
        if (ge && n.bounds !== ge) return n.bounds = ge, f.update(!0, A);
        if (Ee(!0), bt(), oe && !Cr()) {
          if (I = f.x, O = f.y, I > ee ? I = ee : I < ie && (I = ie), O > be ? O = be : O < te && (O = te), (f.x !== I || f.y !== O) && (W = !0, f.x = f.endX = I, a ? f.endRotation = I : f.y = f.endY = O, X = !0, me(!0), f.autoScroll && !f.isDragging))
            for (Du(t.parentNode), J = t, Nn.scrollTop = qe.pageYOffset != null ? qe.pageYOffset : R.documentElement.scrollTop != null ? R.documentElement.scrollTop : R.body.scrollTop, Nn.scrollLeft = qe.pageXOffset != null ? qe.pageXOffset : R.documentElement.scrollLeft != null ? R.documentElement.scrollLeft : R.body.scrollLeft; J && !re;) re = Cs(J.parentNode), H = re ? Nn : J.parentNode, d && H.scrollTop > H._gsMaxScrollY && (H.scrollTop = H._gsMaxScrollY), u && H.scrollLeft > H._gsMaxScrollX && (H.scrollLeft = H._gsMaxScrollX), J = H;
          f.isThrowing && (W || f.endX > ee || f.endX < ie || f.endY > be || f.endY < te) && en(n.inertia || n.throwProps, W)
        }
        return f
      }, i.update = function(ge, A, I) {
        if (A && f.isPressed) {
          var O = Ht(t),
            W = je.apply({
              x: f.x - V,
              y: f.y - Y
            }),
            J = Ht(t.parentNode, !0);
          J.apply({
            x: O.e - W.x,
            y: O.f - W.y
          }, W), f.x -= W.x - J.e, f.y -= W.y - J.f, me(!0), tn()
        }
        var H = f.x,
          re = f.y;
        return On(!A), ge ? f.applyBounds() : (X && I && me(!0), Ee(!0)), A && (Er(f.pointerX, f.pointerY), X && me(!0)), f.isPressed && !A && (u && Math.abs(H - f.x) > .01 || d && Math.abs(re - f.y) > .01 && !a) && tn(), f.autoScroll && (Du(t.parentNode, f.isDragging), g = f.isDragging, me(!0), $_(t, jt), I_(t, jt)), f
      }, i.enable = function(ge) {
        var A = {
            lazy: !0
          },
          I, O, W;
        if (n.cursor !== !1 && (A.cursor = n.cursor || Xs), Oe.utils.checkPrefix("touchCallout") && (A.touchCallout = "none"), ge !== "soft") {
          for (O_(_, u === d ? "none" : n.allowNativeTouchScrolling && t.scrollHeight === t.clientHeight == (t.scrollWidth === t.clientHeight) || n.allowEventDefault ? "manipulation" : u ? "pan-y" : "pan-x"), O = _.length; --O > -1;) W = _[O], $l || kt(W, "mousedown", pr), kt(W, "touchstart", pr), kt(W, "click", _r, !0), Oe.set(W, A), W.getBBox && W.ownerSVGElement && u !== d && Oe.set(W.ownerSVGElement, {
            touchAction: n.allowNativeTouchScrolling || n.allowEventDefault ? "manipulation" : u ? "pan-y" : "pan-x"
          }), n.allowContextMenu || kt(W, "contextmenu", G);
          pl(_, !1)
        }
        return I_(t, jt), N = !0, rn && ge !== "soft" && rn.track(B || t, s ? "x,y" : a ? "rotation" : "top,left"), t._gsDragID = I = "d" + rS++, os[I] = f, B && (B.enable(), B.element._gsDragID = I), (n.bounds || a) && tn(), n.bounds && f.applyBounds(), f
      }, i.disable = function(ge) {
        for (var A = f.isDragging, I = _.length, O; --I > -1;) wu(_[I], "cursor", null);
        if (ge !== "soft") {
          for (O_(_, null), I = _.length; --I > -1;) O = _[I], wu(O, "touchCallout", null), vt(O, "mousedown", pr), vt(O, "touchstart", pr), vt(O, "click", _r, !0), vt(O, "contextmenu", G);
          pl(_, !0), E && (vt(E, "touchcancel", st), vt(E, "touchend", st), vt(E, "touchmove", ke)), vt(R, "mouseup", st), vt(R, "mousemove", ke)
        }
        return $_(t, jt), N = !1, rn && ge !== "soft" && (rn.untrack(B || t, s ? "x,y" : a ? "rotation" : "top,left"), f.tween && f.tween.kill()), B && B.disable(), M_(me), f.isDragging = f.isPressed = x = !1, A && mt(f, "dragend", "onDragEnd"), f
      }, i.enabled = function(ge, A) {
        return arguments.length ? ge ? f.enable(A) : f.disable(A) : N
      }, i.kill = function() {
        return f.isThrowing = !1, f.tween && f.tween.kill(), f.disable(), Oe.set(_, {
          clearProps: "userSelect"
        }), delete os[t._gsDragID], f
      }, i.revert = function() {
        this.kill(), this.styles && this.styles.revert()
      }, ~o.indexOf("scroll") && (B = i.scrollProxy = new hS(t, iS({
        onKill: function() {
          f.isPressed && st(null)
        }
      }, n)), t.style.overflowY = d && !Wf ? "auto" : "hidden", t.style.overflowX = u && !Wf ? "auto" : "hidden", t = B.content), a ? p.rotation = 1 : (u && (p[l] = 1), d && (p[c] = 1)), S.force3D = "force3D" in n ? n.force3D : !0, R1(L_(i)), i.enable(), i
    }
    return e.register = function(n) {
      Oe = n, Cu()
    }, e.create = function(n, i) {
      return jf || Cu(!0), Di(n).map(function(o) {
        return new e(o, i)
      })
    }, e.get = function(n) {
      return os[(Di(n)[0] || {})._gsDragID]
    }, e.timeSinceDrag = function() {
      return (fi() - R_) / 1e3
    }, e.hitTest = function(n, i, o) {
      if (n === i) return !1;
      var s = $o(n),
        a = $o(i),
        l = s.top,
        c = s.left,
        u = s.right,
        d = s.bottom,
        h = s.width,
        f = s.height,
        _ = a.left > u || a.right < c || a.top > d || a.bottom < l,
        p, m, g;
      return _ || !o ? !_ : (g = (o + "").indexOf("%") !== -1, o = parseFloat(o) || 0, p = {
        left: Math.max(c, a.left),
        top: Math.max(l, a.top)
      }, p.width = Math.min(u, a.right) - p.left, p.height = Math.min(d, a.bottom) - p.top, p.width < 0 || p.height < 0 ? !1 : g ? (o *= .01, m = p.width * p.height, m >= h * f * o || m >= a.width * a.height * o) : p.width > o && p.height > o)
    }, e
  }(dS);
sS(Za.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
});
Za.zIndex = 1e3;
Za.version = "3.12.2";
F1() && Oe.registerPlugin(Za);
/*!
 * Flip 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var pS = 1,
  Es, ar, nt, aa, gi, Yn, Gf, H_ = function(e, t) {
    return e.actions.forEach(function(n) {
      return n.vars[t] && n.vars[t](n)
    })
  },
  qf = {},
  U_ = 180 / Math.PI,
  _S = Math.PI / 180,
  pc = {},
  j_ = {},
  Xc = {},
  gd = function(e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e
  },
  gS = gd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  Yc = gd("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
  la = function(e) {
    return Es(e)[0] || console.warn("Element not found:", e)
  },
  qo = function(e) {
    return Math.round(e * 1e4) / 1e4 || 0
  },
  Eu = function(e, t, n) {
    return e.forEach(function(i) {
      return i.classList[n](t)
    })
  },
  W_ = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
  },
  $1 = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
  },
  B1 = function(e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase()
  },
  Ko = function(e, t) {
    var n = {},
      i;
    for (i in e) t[i] || (n[i] = e[i]);
    return n
  },
  md = {},
  V1 = function(e) {
    var t = md[e] = gd(e);
    return Xc[e] = t.concat(Yc), t
  },
  mS = function(e) {
    var t = e._gsap || ar.core.getCache(e);
    return t.gmCache === ar.ticker.frame ? t.gMatrix : (t.gmCache = ar.ticker.frame, t.gMatrix = Ht(e, !0, !1, !0))
  },
  yS = function r(e, t, n) {
    n === void 0 && (n = 0);
    for (var i = e.parentNode, o = 1e3 * Math.pow(10, n) * (t ? -1 : 1), s = t ? -o * 900 : 0; e;) s += o, e = e.previousSibling;
    return i ? s + r(i, t, n + 1) : s
  },
  _c = function(e, t, n) {
    return e.forEach(function(i) {
      return i.d = yS(n ? i.element : i.t, t)
    }), e.sort(function(i, o) {
      return i.d - o.d
    }), e
  },
  $a = function(e, t) {
    for (var n = e.element.style, i = e.css = e.css || [], o = t.length, s, a; o--;) s = t[o], a = n[s] || n.getPropertyValue(s), i.push(a ? s : j_[s] || (j_[s] = B1(s)), a);
    return n
  },
  yd = function(e) {
    var t = e.css,
      n = e.element.style,
      i = 0;
    for (e.cache.uncache = 1; i < t.length; i += 2) t[i + 1] ? n[t[i]] = t[i + 1] : n.removeProperty(t[i]);
    !t[t.indexOf("transform") + 1] && n.translate && (n.removeProperty("translate"), n.removeProperty("scale"), n.removeProperty("rotate"))
  },
  X_ = function(e, t) {
    e.forEach(function(n) {
      return n.a.cache.uncache = 1
    }), t || e.finalStates.forEach(yd)
  },
  ku = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
  bd = function(e, t, n) {
    var i = e.element,
      o = e.width,
      s = e.height,
      a = e.uncache,
      l = e.getProp,
      c = i.style,
      u = 4,
      d, h, f;
    if (typeof t != "object" && (t = e), nt && n !== 1) return nt._abs.push({
      t: i,
      b: e,
      a: e,
      sd: 0
    }), nt._final.push(function() {
      return (e.cache.uncache = 1) && yd(e)
    }), i;
    for (h = l("display") === "none", (!e.isVisible || h) && (h && ($a(e, ["display"]).display = t.display), e.matrix = t.matrix, e.width = o = e.width || t.width, e.height = s = e.height || t.height), $a(e, ku), f = window.getComputedStyle(i); u--;) c[ku[u]] = f[ku[u]];
    if (c.gridArea = "1 / 1 / 1 / 1", c.transition = "none", c.position = "absolute", c.width = o + "px", c.height = s + "px", c.top || (c.top = "0px"), c.left || (c.left = "0px"), a) d = new go(i);
    else if (d = Ko(e, pc), d.position = "absolute", e.simple) {
      var _ = i.getBoundingClientRect();
      d.matrix = new ti(1, 0, 0, 1, _.left + dd(), _.top + hd())
    } else d.matrix = Ht(i, !1, !1, !0);
    return d = ls(d, e, !0), e.x = Yn(d.x, .01), e.y = Yn(d.y, .01), i
  },
  Y_ = function(e, t) {
    return t !== !0 && (t = Es(t), e = e.filter(function(n) {
      if (t.indexOf((n.sd < 0 ? n.b : n.a).element) !== -1) return !0;
      n.t._gsap.renderTransform(1), n.b.isVisible && (n.t.style.width = n.b.width + "px", n.t.style.height = n.b.height + "px")
    })), e
  },
  H1 = function(e) {
    return _c(e, !0).forEach(function(t) {
      return (t.a.isVisible || t.b.isVisible) && bd(t.sd < 0 ? t.b : t.a, t.b, 1)
    })
  },
  bS = function(e, t) {
    return t && e.idLookup[Kf(t).id] || e.elementStates[0]
  },
  Kf = function(e, t, n, i) {
    return e instanceof go ? e : e instanceof un ? bS(e, i) : new go(typeof e == "string" ? la(e) || console.warn(e + " not found") : e, t, n)
  },
  vS = function(e, t) {
    for (var n = ar.getProperty(e.element, null, "native"), i = e.props = {}, o = t.length; o--;) i[t[o]] = (n(t[o]) + "").trim();
    return i.zIndex && (i.zIndex = parseFloat(i.zIndex) || 0), e
  },
  U1 = function(e, t) {
    var n = e.style || e,
      i;
    for (i in t) n[i] = t[i]
  },
  DS = function(e) {
    var t = e.getAttribute("data-flip-id");
    return t || e.setAttribute("data-flip-id", t = "auto-" + pS++), t
  },
  j1 = function(e) {
    return e.map(function(t) {
      return t.element
    })
  },
  z_ = function(e, t, n) {
    return e && t.length && n.add(e(j1(t), n, new un(t, 0, !0)), 0)
  },
  ls = function(e, t, n, i, o, s) {
    var a = e.element,
      l = e.cache,
      c = e.parent,
      u = e.x,
      d = e.y,
      h = t.width,
      f = t.height,
      _ = t.scaleX,
      p = t.scaleY,
      m = t.rotation,
      g = t.bounds,
      y = s && Gf && Gf(a, "transform"),
      b = e,
      v = t.matrix,
      D = v.e,
      k = v.f,
      w = e.bounds.width !== g.width || e.bounds.height !== g.height || e.scaleX !== _ || e.scaleY !== p || e.rotation !== m,
      S = !w && e.simple && t.simple && !o,
      P, C, R, N, B, z, U;
    return S || !c ? (_ = p = 1, m = P = 0) : (B = mS(c), z = B.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix), m = qo(Math.atan2(z.b, z.a) * U_), P = qo(Math.atan2(z.c, z.d) * U_ + m) % 360, _ = Math.sqrt(Math.pow(z.a, 2) + Math.pow(z.b, 2)), p = Math.sqrt(Math.pow(z.c, 2) + Math.pow(z.d, 2)) * Math.cos(P * _S), o && (o = Es(o)[0], N = ar.getProperty(o), U = o.getBBox && typeof o.getBBox == "function" && o.getBBox(), b = {
      scaleX: N("scaleX"),
      scaleY: N("scaleY"),
      width: U ? U.width : Math.ceil(parseFloat(N("width", "px"))),
      height: U ? U.height : parseFloat(N("height", "px"))
    }), l.rotation = m + "deg", l.skewX = P + "deg"), n ? (_ *= h === b.width || !b.width ? 1 : h / b.width, p *= f === b.height || !b.height ? 1 : f / b.height, l.scaleX = _, l.scaleY = p) : (h = Yn(h * _ / b.scaleX, 0), f = Yn(f * p / b.scaleY, 0), a.style.width = h + "px", a.style.height = f + "px"), i && U1(a, t.props), S || !c ? (u += D - e.matrix.e, d += k - e.matrix.f) : w || c !== t.parent ? (l.renderTransform(1, l), z = Ht(o || a, !1, !1, !0), C = B.apply({
      x: z.e,
      y: z.f
    }), R = B.apply({
      x: D,
      y: k
    }), u += R.x - C.x, d += R.y - C.y) : (B.e = B.f = 0, R = B.apply({
      x: D - e.matrix.e,
      y: k - e.matrix.f
    }), u += R.x, d += R.y), u = Yn(u, .02), d = Yn(d, .02), s && !(s instanceof go) ? y && y.revert() : (l.x = u + "px", l.y = d + "px", l.renderTransform(1, l)), s && (s.x = u, s.y = d, s.rotation = m, s.skewX = P, n ? (s.scaleX = _, s.scaleY = p) : (s.width = h, s.height = f)), s || l
  },
  Su = function(e, t) {
    return e instanceof un ? e : new un(e, t)
  },
  W1 = function(e, t, n) {
    var i = e.idLookup[n],
      o = e.alt[n];
    return o.isVisible && (!(t.getElementState(o.element) || o).isVisible || !i.isVisible) ? o : i
  },
  Tu = [],
  Pu = "width,height,overflowX,overflowY".split(","),
  _l, G_ = function(e) {
    if (e !== _l) {
      var t = gi.style,
        n = gi.clientWidth === window.outerWidth,
        i = gi.clientHeight === window.outerHeight,
        o = 4;
      if (e && (n || i)) {
        for (; o--;) Tu[o] = t[Pu[o]];
        n && (t.width = gi.clientWidth + "px", t.overflowY = "hidden"), i && (t.height = gi.clientHeight + "px", t.overflowX = "hidden"), _l = e
      } else if (_l) {
        for (; o--;) Tu[o] ? t[Pu[o]] = Tu[o] : t.removeProperty(B1(Pu[o]));
        _l = e
      }
    }
  },
  Lu = function(e, t, n, i) {
    e instanceof un && t instanceof un || console.warn("Not a valid state object."), n = n || {};
    var o = n,
      s = o.clearProps,
      a = o.onEnter,
      l = o.onLeave,
      c = o.absolute,
      u = o.absoluteOnLeave,
      d = o.custom,
      h = o.delay,
      f = o.paused,
      _ = o.repeat,
      p = o.repeatDelay,
      m = o.yoyo,
      g = o.toggleClass,
      y = o.nested,
      b = o.zIndex,
      v = o.scale,
      D = o.fade,
      k = o.stagger,
      w = o.spin,
      S = o.prune,
      P = ("props" in n ? n : e).props,
      C = Ko(n, W_),
      R = ar.timeline({
        delay: h,
        paused: f,
        repeat: _,
        repeatDelay: p,
        yoyo: m,
        data: "isFlip"
      }),
      N = C,
      B = [],
      z = [],
      U = [],
      V = [],
      Y = w === !0 ? 1 : w || 0,
      oe = typeof w == "function" ? w : function() {
        return Y
      },
      $ = e.interrupted || t.interrupted,
      L = R[i !== 1 ? "to" : "from"],
      ee, ie, be, te, ne, ce, M, X, K, Q, ue, De, x, E;
    for (ie in t.idLookup) ue = t.alt[ie] ? W1(t, e, ie) : t.idLookup[ie], ne = ue.element, Q = e.idLookup[ie], e.alt[ie] && ne === Q.element && (e.alt[ie].isVisible || !ue.isVisible) && (Q = e.alt[ie]), Q ? (ce = {
      t: ne,
      b: Q,
      a: ue,
      sd: Q.element === ne ? 0 : ue.isVisible ? 1 : -1
    }, U.push(ce), ce.sd && (ce.sd < 0 && (ce.b = ue, ce.a = Q), $ && $a(ce.b, P ? Xc[P] : Yc), D && U.push(ce.swap = {
      t: Q.element,
      b: ce.b,
      a: ce.a,
      sd: -ce.sd,
      swap: ce
    })), ne._flip = Q.element._flip = nt ? nt.timeline : R) : ue.isVisible && (U.push({
      t: ne,
      b: Ko(ue, {
        isVisible: 1
      }),
      a: ue,
      sd: 0,
      entering: 1
    }), ne._flip = nt ? nt.timeline : R);
    if (P && (md[P] || V1(P)).forEach(function(T) {
        return C[T] = function(he) {
          return U[he].a.props[T]
        }
      }), U.finalStates = K = [], De = function() {
        for (_c(U), G_(!0), te = 0; te < U.length; te++) ce = U[te], x = ce.a, E = ce.b, S && !x.isDifferent(E) && !ce.entering ? U.splice(te--, 1) : (ne = ce.t, y && !(ce.sd < 0) && te && (x.matrix = Ht(ne, !1, !1, !0)), E.isVisible && x.isVisible ? (ce.sd < 0 ? (M = new go(ne, P, e.simple), ls(M, x, v, 0, 0, M), M.matrix = Ht(ne, !1, !1, !0), M.css = ce.b.css, ce.a = x = M, D && (ne.style.opacity = $ ? E.opacity : x.opacity), k && V.push(ne)) : ce.sd > 0 && D && (ne.style.opacity = $ ? x.opacity - E.opacity : "0"), ls(x, E, v, P)) : E.isVisible !== x.isVisible && (E.isVisible ? x.isVisible || (E.css = x.css, z.push(E), U.splice(te--, 1), c && y && ls(x, E, v, P)) : (x.isVisible && B.push(x), U.splice(te--, 1))), v || (ne.style.maxWidth = Math.max(x.width, E.width) + "px", ne.style.maxHeight = Math.max(x.height, E.height) + "px", ne.style.minWidth = Math.min(x.width, E.width) + "px", ne.style.minHeight = Math.min(x.height, E.height) + "px"), y && g && ne.classList.add(g)), K.push(x);
        var he;
        if (g && (he = K.map(function(de) {
            return de.element
          }), y && he.forEach(function(de) {
            return de.classList.remove(g)
          })), G_(!1), v ? (C.scaleX = function(de) {
            return U[de].a.scaleX
          }, C.scaleY = function(de) {
            return U[de].a.scaleY
          }) : (C.width = function(de) {
            return U[de].a.width + "px"
          }, C.height = function(de) {
            return U[de].a.height + "px"
          }, C.autoRound = n.autoRound || !1), C.x = function(de) {
            return U[de].a.x + "px"
          }, C.y = function(de) {
            return U[de].a.y + "px"
          }, C.rotation = function(de) {
            return U[de].a.rotation + (w ? oe(de, X[de], X) * 360 : 0)
          }, C.skewX = function(de) {
            return U[de].a.skewX
          }, X = U.map(function(de) {
            return de.t
          }), (b || b === 0) && (C.modifiers = {
            zIndex: function() {
              return b
            }
          }, C.zIndex = b, C.immediateRender = n.immediateRender !== !1), D && (C.opacity = function(de) {
            return U[de].sd < 0 ? 0 : U[de].sd > 0 ? U[de].a.opacity : "+=0"
          }), V.length) {
          k = ar.utils.distribute(k);
          var Qe = X.slice(V.length);
          C.stagger = function(de, Je) {
            return k(~V.indexOf(Je) ? X.indexOf(U[de].swap.t) : de, Je, Qe)
          }
        }
        if (gS.forEach(function(de) {
            return n[de] && R.eventCallback(de, n[de], n[de + "Params"])
          }), d && X.length) {
          N = Ko(C, W_), "scale" in d && (d.scaleX = d.scaleY = d.scale, delete d.scale);
          for (ie in d) ee = Ko(d[ie], $1), ee[ie] = C[ie], !("duration" in ee) && "duration" in C && (ee.duration = C.duration), ee.stagger = C.stagger, L.call(R, X, ee, 0), delete N[ie]
        }(X.length || z.length || B.length) && (g && R.add(function() {
          return Eu(he, g, R._zTime < 0 ? "remove" : "add")
        }, 0) && !f && Eu(he, g, "add"), X.length && L.call(R, X, N, 0)), z_(a, B, R), z_(l, z, R);
        var tt = nt && nt.timeline;
        tt && (tt.add(R, 0), nt._final.push(function() {
          return X_(U, !s)
        })), be = R.duration(), R.call(function() {
          var de = R.time() >= be;
          de && !tt && X_(U, !s), g && Eu(he, g, de ? "remove" : "add")
        })
      }, u && (c = U.filter(function(T) {
        return !T.sd && !T.a.isVisible && T.b.isVisible
      }).map(function(T) {
        return T.a.element
      })), nt) {
      var F;
      c && (F = nt._abs).push.apply(F, Y_(U, c)), nt._run.push(De)
    } else c && H1(Y_(U, c)), De();
    var Z = nt ? nt.timeline : R;
    return Z.revert = function() {
      return vd(Z, 1, 1)
    }, Z
  },
  wS = function r(e) {
    e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []), e.getChildren(!0, !1, !0).forEach(r)
  },
  vd = function(e, t, n) {
    if (e && e.progress() < 1 && (!e.paused() || n)) return t && (wS(e), t < 2 && e.progress(1), e.kill()), !0
  },
  gl = function(e) {
    for (var t = e.idLookup = {}, n = e.alt = {}, i = e.elementStates, o = i.length, s; o--;) s = i[o], t[s.id] ? n[s.id] = s : t[s.id] = s
  },
  un = function() {
    function r(t, n, i) {
      if (this.props = n && n.props, this.simple = !!(n && n.simple), i) this.targets = j1(t), this.elementStates = t, gl(this);
      else {
        this.targets = Es(t);
        var o = n && (n.kill === !1 || n.batch && !n.kill);
        nt && !o && nt._kill.push(this), this.update(o || !!nt)
      }
    }
    var e = r.prototype;
    return e.update = function(n) {
      var i = this;
      return this.elementStates = this.targets.map(function(o) {
        return new go(o, i.props, i.simple)
      }), gl(this), this.interrupt(n), this.recordInlineStyles(), this
    }, e.clear = function() {
      return this.targets.length = this.elementStates.length = 0, gl(this), this
    }, e.fit = function(n, i, o) {
      for (var s = _c(this.elementStates.slice(0), !1, !0), a = (n || this).idLookup, l = 0, c, u; l < s.length; l++) c = s[l], o && (c.matrix = Ht(c.element, !1, !1, !0)), u = a[c.id], u && ls(c, u, i, !0, 0, c), c.matrix = Ht(c.element, !1, !1, !0);
      return this
    }, e.getProperty = function(n, i) {
      var o = this.getElementState(n) || pc;
      return (i in o ? o : o.props || pc)[i]
    }, e.add = function(n) {
      for (var i = n.targets.length, o = this.idLookup, s = this.alt, a, l, c; i--;) l = n.elementStates[i], c = o[l.id], c && (l.element === c.element || s[l.id] && s[l.id].element === l.element) ? (a = this.elementStates.indexOf(l.element === c.element ? c : s[l.id]), this.targets.splice(a, 1, n.targets[i]), this.elementStates.splice(a, 1, l)) : (this.targets.push(n.targets[i]), this.elementStates.push(l));
      return n.interrupted && (this.interrupted = !0), n.simple || (this.simple = !1), gl(this), this
    }, e.compare = function(n) {
      var i = n.idLookup,
        o = this.idLookup,
        s = [],
        a = [],
        l = [],
        c = [],
        u = [],
        d = n.alt,
        h = this.alt,
        f = function(S, P, C) {
          return (S.isVisible !== P.isVisible ? S.isVisible ? l : c : S.isVisible ? a : s).push(C) && u.push(C)
        },
        _ = function(S, P, C) {
          return u.indexOf(C) < 0 && f(S, P, C)
        },
        p, m, g, y, b, v, D, k;
      for (g in i) b = d[g], v = h[g], p = b ? W1(n, this, g) : i[g], y = p.element, m = o[g], v ? (k = m.isVisible || !v.isVisible && y === m.element ? m : v, D = b && !p.isVisible && !b.isVisible && k.element === b.element ? b : p, D.isVisible && k.isVisible && D.element !== k.element ? ((D.isDifferent(k) ? a : s).push(D.element, k.element), u.push(D.element, k.element)) : f(D, k, D.element), b && D.element === b.element && (b = i[g]), _(D.element !== m.element && b ? b : D, m, m.element), _(b && b.element === v.element ? b : D, v, v.element), b && _(b, v.element === b.element ? v : m, b.element)) : (m ? m.isDifferent(p) ? f(p, m, y) : s.push(y) : l.push(y), b && _(b, m, b.element));
      for (g in o) i[g] || (c.push(o[g].element), h[g] && c.push(h[g].element));
      return {
        changed: a,
        unchanged: s,
        enter: l,
        leave: c
      }
    }, e.recordInlineStyles = function() {
      for (var n = Xc[this.props] || Yc, i = this.elementStates.length; i--;) $a(this.elementStates[i], n)
    }, e.interrupt = function(n) {
      var i = this,
        o = [];
      this.targets.forEach(function(s) {
        var a = s._flip,
          l = vd(a, n ? 0 : 1);
        n && l && o.indexOf(a) < 0 && a.add(function() {
          return i.updateVisibility()
        }), l && o.push(a)
      }), !n && o.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!o.length)
    }, e.updateVisibility = function() {
      this.elementStates.forEach(function(n) {
        var i = n.element.getBoundingClientRect();
        n.isVisible = !!(i.width || i.height || i.top || i.left), n.uncache = 1
      })
    }, e.getElementState = function(n) {
      return this.elementStates[this.targets.indexOf(la(n))]
    }, e.makeAbsolute = function() {
      return _c(this.elementStates.slice(0), !0, !0).map(bd)
    }, r
  }(),
  go = function() {
    function r(t, n, i) {
      this.element = t, this.update(n, i)
    }
    var e = r.prototype;
    return e.isDifferent = function(n) {
      var i = this.bounds,
        o = n.bounds;
      return i.top !== o.top || i.left !== o.left || i.width !== o.width || i.height !== o.height || !this.matrix.equals(n.matrix) || this.opacity !== n.opacity || this.props && n.props && JSON.stringify(this.props) !== JSON.stringify(n.props)
    }, e.update = function(n, i) {
      var o = this,
        s = o.element,
        a = ar.getProperty(s),
        l = ar.core.getCache(s),
        c = s.getBoundingClientRect(),
        u = s.getBBox && typeof s.getBBox == "function" && s.nodeName.toLowerCase() !== "svg" && s.getBBox(),
        d = i ? new ti(1, 0, 0, 1, c.left + dd(), c.top + hd()) : Ht(s, !1, !1, !0);
      o.getProp = a, o.element = s, o.id = DS(s), o.matrix = d, o.cache = l, o.bounds = c, o.isVisible = !!(c.width || c.height || c.left || c.top), o.display = a("display"), o.position = a("position"), o.parent = s.parentNode, o.x = a("x"), o.y = a("y"), o.scaleX = l.scaleX, o.scaleY = l.scaleY, o.rotation = a("rotation"), o.skewX = a("skewX"), o.opacity = a("opacity"), o.width = u ? u.width : Yn(a("width", "px"), .04), o.height = u ? u.height : Yn(a("height", "px"), .04), n && vS(o, md[n] || V1(n)), o.ctm = s.getCTM && s.nodeName.toLowerCase() === "svg" && L1(s).inverse(), o.simple = i || qo(d.a) === 1 && !qo(d.b) && !qo(d.c) && qo(d.d) === 1, o.uncache = 0
    }, r
  }(),
  xS = function() {
    function r(t, n) {
      this.vars = t, this.batch = n, this.states = [], this.timeline = n.timeline
    }
    var e = r.prototype;
    return e.getStateById = function(n) {
      for (var i = this.states.length; i--;)
        if (this.states[i].idLookup[n]) return this.states[i]
    }, e.kill = function() {
      this.batch.remove(this)
    }, r
  }(),
  CS = function() {
    function r(t) {
      this.id = t, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new un, this.timeline = ar.timeline()
    }
    var e = r.prototype;
    return e.add = function(n) {
      var i = this.actions.filter(function(o) {
        return o.vars === n
      });
      return i.length ? i[0] : (i = new xS(typeof n == "function" ? {
        animate: n
      } : n, this), this.actions.push(i), i)
    }, e.remove = function(n) {
      var i = this.actions.indexOf(n);
      return i >= 0 && this.actions.splice(i, 1), this
    }, e.getState = function(n) {
      var i = this,
        o = nt,
        s = aa;
      return nt = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(a) {
        a.vars.getState && (a.states.length = 0, aa = a, a.state = a.vars.getState(a)), n && a.states.forEach(function(l) {
          return i.state.add(l)
        })
      }), aa = s, nt = o, this.killConflicts(), this
    }, e.animate = function() {
      var n = this,
        i = nt,
        o = this.timeline,
        s = this.actions.length,
        a, l;
      for (nt = this, o.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(c) {
          c.vars.animate && c.vars.animate(c);
          var u = c.vars.onEnter,
            d = c.vars.onLeave,
            h = c.targets,
            f, _;
          h && h.length && (u || d) && (f = new un, c.states.forEach(function(p) {
            return f.add(p)
          }), _ = f.compare(zc.getState(h)), _.enter.length && u && u(_.enter), _.leave.length && d && d(_.leave))
        }), H1(this._abs), this._run.forEach(function(c) {
          return c()
        }), l = o.duration(), a = this._final.slice(0), o.add(function() {
          l <= o.time() && (a.forEach(function(c) {
            return c()
          }), H_(n, "onComplete"))
        }), nt = i; s--;) this.actions[s].vars.once && this.actions[s].kill();
      return H_(this, "onStart"), o.restart(), this
    }, e.loadState = function(n) {
      n || (n = function() {
        return 0
      });
      var i = [];
      return this.actions.forEach(function(o) {
        if (o.vars.loadState) {
          var s, a = function l(c) {
            c && (o.targets = c), s = i.indexOf(l), ~s && (i.splice(s, 1), i.length || n())
          };
          i.push(a), o.vars.loadState(a)
        }
      }), i.length || n(), this
    }, e.setState = function() {
      return this.actions.forEach(function(n) {
        return n.targets = n.vars.setState && n.vars.setState(n)
      }), this
    }, e.killConflicts = function(n) {
      return this.state.interrupt(n), this._kill.forEach(function(i) {
        return i.interrupt(n)
      }), this
    }, e.run = function(n, i) {
      var o = this;
      return this !== nt && (n || this.getState(i), this.loadState(function() {
        o._killed || (o.setState(), o.animate())
      })), this
    }, e.clear = function(n) {
      this.state.clear(), n || (this.actions.length = 0)
    }, e.getStateById = function(n) {
      for (var i = this.actions.length, o; i--;)
        if (o = this.actions[i].getStateById(n), o) return o;
      return this.state.idLookup[n] && this.state
    }, e.kill = function() {
      this._killed = 1, this.clear(), delete qf[this.id]
    }, r
  }(),
  zc = function() {
    function r() {}
    return r.getState = function(t, n) {
      var i = Su(t, n);
      return aa && aa.states.push(i), n && n.batch && r.batch(n.batch).state.add(i), i
    }, r.from = function(t, n) {
      return n = n || {}, "clearProps" in n || (n.clearProps = !0), Lu(t, Su(n.targets || t.targets, {
        props: n.props || t.props,
        simple: n.simple,
        kill: !!n.kill
      }), n, -1)
    }, r.to = function(t, n) {
      return Lu(t, Su(n.targets || t.targets, {
        props: n.props || t.props,
        simple: n.simple,
        kill: !!n.kill
      }), n, 1)
    }, r.fromTo = function(t, n, i) {
      return Lu(t, n, i)
    }, r.fit = function(t, n, i) {
      var o = i ? Ko(i, $1) : {},
        s = i || o,
        a = s.absolute,
        l = s.scale,
        c = s.getVars,
        u = s.props,
        d = s.runBackwards,
        h = s.onComplete,
        f = s.simple,
        _ = i && i.fitChild && la(i.fitChild),
        p = Kf(n, u, f, t),
        m = Kf(t, 0, f, p),
        g = u ? Xc[u] : Yc;
      return u && U1(o, p.props), d && ($a(m, g), "immediateRender" in o || (o.immediateRender = !0), o.onComplete = function() {
        yd(m), h && h.apply(this, arguments)
      }), a && bd(m, p), o = ls(m, p, l || _, u, _, o.duration || c ? o : 0), c ? o : o.duration ? ar.to(m.element, o) : null
    }, r.makeAbsolute = function(t, n) {
      return (t instanceof un ? t : new un(t, n)).makeAbsolute()
    }, r.batch = function(t) {
      return t || (t = "default"), qf[t] || (qf[t] = new CS(t))
    }, r.killFlipsOf = function(t, n) {
      (t instanceof un ? t.targets : Es(t)).forEach(function(i) {
        return i && vd(i._flip, n !== !1 ? 1 : 2)
      })
    }, r.isFlipping = function(t) {
      var n = r.getByTarget(t);
      return !!n && n.isActive()
    }, r.getByTarget = function(t) {
      return (la(t) || pc)._flip
    }, r.getElementState = function(t, n) {
      return new go(la(t), n)
    }, r.convertCoordinates = function(t, n, i) {
      var o = Ht(n, !0, !0).multiply(Ht(t));
      return i ? o.apply(i) : o
    }, r.register = function(t) {
      if (gi = typeof document < "u" && document.body, gi) {
        ar = t, fd(gi), Es = ar.utils.toArray, Gf = ar.core.getStyleSaver;
        var n = ar.utils.snap(.1);
        Yn = function(o, s) {
          return n(parseFloat(o) + s)
        }
      }
    }, r
  }();
zc.version = "3.12.2";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(zc);

function q_(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n)
  }
}

function ES(r, e, t) {
  return e && q_(r.prototype, e), t && q_(r, t), r
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ut, Qf, Mr, wi, xi, cs, X1, qi, ca, Y1, zn, nn, z1, G1 = function() {
    return Ut || typeof window < "u" && (Ut = window.gsap) && Ut.registerPlugin && Ut
  },
  q1 = 1,
  Qo = [],
  Le = [],
  Tn = [],
  ua = Date.now,
  Jf = function(e, t) {
    return t
  },
  kS = function() {
    var e = ca.core,
      t = e.bridge || {},
      n = e._scrollers,
      i = e._proxies;
    n.push.apply(n, Le), i.push.apply(i, Tn), Le = n, Tn = i, Jf = function(s, a) {
      return t[s](a)
    }
  },
  Ti = function(e, t) {
    return ~Tn.indexOf(e) && Tn[Tn.indexOf(e) + 1][t]
  },
  fa = function(e) {
    return !!~Y1.indexOf(e)
  },
  rr = function(e, t, n, i, o) {
    return e.addEventListener(t, n, {
      passive: !i,
      capture: !!o
    })
  },
  tr = function(e, t, n, i) {
    return e.removeEventListener(t, n, !!i)
  },
  ml = "scrollLeft",
  yl = "scrollTop",
  Zf = function() {
    return zn && zn.isPressed || Le.cache++
  },
  gc = function(e, t) {
    var n = function i(o) {
      if (o || o === 0) {
        q1 && (Mr.history.scrollRestoration = "manual");
        var s = zn && zn.isPressed;
        o = i.v = Math.round(o) || (zn && zn.iOS ? 1 : 0), e(o), i.cacheID = Le.cache, s && Jf("ss", o)
      } else(t || Le.cache !== i.cacheID || Jf("ref")) && (i.cacheID = Le.cache, i.v = e());
      return i.v + i.offset
    };
    return n.offset = 0, e && n
  },
  lr = {
    s: ml,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: gc(function(r) {
      return arguments.length ? Mr.scrollTo(r, Tt.sc()) : Mr.pageXOffset || wi[ml] || xi[ml] || cs[ml] || 0
    })
  },
  Tt = {
    s: yl,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: lr,
    sc: gc(function(r) {
      return arguments.length ? Mr.scrollTo(lr.sc(), r) : Mr.pageYOffset || wi[yl] || xi[yl] || cs[yl] || 0
    })
  },
  mr = function(e, t) {
    return (t && t._ctx && t._ctx.selector || Ut.utils.toArray)(e)[0] || (typeof e == "string" && Ut.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
  },
  Fi = function(e, t) {
    var n = t.s,
      i = t.sc;
    fa(e) && (e = wi.scrollingElement || xi);
    var o = Le.indexOf(e),
      s = i === Tt.sc ? 1 : 2;
    !~o && (o = Le.push(e) - 1), Le[o + s] || rr(e, "scroll", Zf);
    var a = Le[o + s],
      l = a || (Le[o + s] = gc(Ti(e, n), !0) || (fa(e) ? i : gc(function(c) {
        return arguments.length ? e[n] = c : e[n]
      })));
    return l.target = e, a || (l.smooth = Ut.getProperty(e, "scrollBehavior") === "smooth"), l
  },
  eh = function(e, t, n) {
    var i = e,
      o = e,
      s = ua(),
      a = s,
      l = t || 50,
      c = Math.max(500, l * 3),
      u = function(_, p) {
        var m = ua();
        p || m - s > l ? (o = i, i = _, a = s, s = m) : n ? i += _ : i = o + (_ - o) / (m - a) * (s - a)
      },
      d = function() {
        o = i = n ? 0 : i, a = s = 0
      },
      h = function(_) {
        var p = a,
          m = o,
          g = ua();
        return (_ || _ === 0) && _ !== i && u(_), s === a || g - a > c ? 0 : (i + (n ? m : -m)) / ((n ? g : s) - p) * 1e3
      };
    return {
      update: u,
      reset: d,
      getVelocity: h
    }
  },
  Is = function(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
  },
  K_ = function(e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n
  },
  K1 = function() {
    ca = Ut.core.globals().ScrollTrigger, ca && ca.core && kS()
  },
  Q1 = function(e) {
    return Ut = e || G1(), Ut && typeof document < "u" && document.body && (Mr = window, wi = document, xi = wi.documentElement, cs = wi.body, Y1 = [Mr, wi, xi, cs], Ut.utils.clamp, z1 = Ut.core.context || function() {}, qi = "onpointerenter" in cs ? "pointer" : "mouse", X1 = Ct.isTouch = Mr.matchMedia && Mr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Mr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, nn = Ct.eventTypes = ("ontouchstart" in xi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in xi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return q1 = 0
    }, 500), K1(), Qf = 1), Qf
  };
lr.op = Tt;
Le.cache = 0;
var Ct = function() {
  function r(t) {
    this.init(t)
  }
  var e = r.prototype;
  return e.init = function(n) {
    Qf || Q1(Ut) || console.warn("Please gsap.registerPlugin(Observer)"), ca || K1();
    var i = n.tolerance,
      o = n.dragMinimum,
      s = n.type,
      a = n.target,
      l = n.lineHeight,
      c = n.debounce,
      u = n.preventDefault,
      d = n.onStop,
      h = n.onStopDelay,
      f = n.ignore,
      _ = n.wheelSpeed,
      p = n.event,
      m = n.onDragStart,
      g = n.onDragEnd,
      y = n.onDrag,
      b = n.onPress,
      v = n.onRelease,
      D = n.onRight,
      k = n.onLeft,
      w = n.onUp,
      S = n.onDown,
      P = n.onChangeX,
      C = n.onChangeY,
      R = n.onChange,
      N = n.onToggleX,
      B = n.onToggleY,
      z = n.onHover,
      U = n.onHoverEnd,
      V = n.onMove,
      Y = n.ignoreCheck,
      oe = n.isNormalizer,
      $ = n.onGestureStart,
      L = n.onGestureEnd,
      ee = n.onWheel,
      ie = n.onEnable,
      be = n.onDisable,
      te = n.onClick,
      ne = n.scrollSpeed,
      ce = n.capture,
      M = n.allowClicks,
      X = n.lockAxis,
      K = n.onLockAxis;
    this.target = a = mr(a) || xi, this.vars = n, f && (f = Ut.utils.toArray(f)), i = i || 1e-9, o = o || 0, _ = _ || 1, ne = ne || 1, s = s || "wheel,touch,pointer", c = c !== !1, l || (l = parseFloat(Mr.getComputedStyle(cs).lineHeight) || 22);
    var Q, ue, De, x, E, F, Z, T = this,
      he = 0,
      Qe = 0,
      tt = Fi(a, lr),
      de = Fi(a, Tt),
      Je = tt(),
      je = de(),
      j = ~s.indexOf("touch") && !~s.indexOf("pointer") && nn[0] === "pointerdown",
      G = fa(a),
      me = a.ownerDocument || wi,
      Ee = [0, 0, 0],
      ot = [0, 0, 0],
      hr = 0,
      bt = function() {
        return hr = ua()
      },
      dr = function(O, W) {
        return (T.event = O) && f && ~f.indexOf(O.target) || W && j && O.pointerType !== "touch" || Y && Y(O, W)
      },
      Mt = function() {
        T._vx.reset(), T._vy.reset(), ue.pause(), d && d(T)
      },
      en = function() {
        var O = T.deltaX = K_(Ee),
          W = T.deltaY = K_(ot),
          J = Math.abs(O) >= i,
          H = Math.abs(W) >= i;
        R && (J || H) && R(T, O, W, Ee, ot), J && (D && T.deltaX > 0 && D(T), k && T.deltaX < 0 && k(T), P && P(T), N && T.deltaX < 0 != he < 0 && N(T), he = T.deltaX, Ee[0] = Ee[1] = Ee[2] = 0), H && (S && T.deltaY > 0 && S(T), w && T.deltaY < 0 && w(T), C && C(T), B && T.deltaY < 0 != Qe < 0 && B(T), Qe = T.deltaY, ot[0] = ot[1] = ot[2] = 0), (x || De) && (V && V(T), De && (y(T), De = !1), x = !1), F && !(F = !1) && K && K(T), E && (ee(T), E = !1), Q = 0
      },
      On = function(O, W, J) {
        Ee[J] += O, ot[J] += W, T._vx.update(O), T._vy.update(W), c ? Q || (Q = requestAnimationFrame(en)) : en()
      },
      tn = function(O, W) {
        X && !Z && (T.axis = Z = Math.abs(O) > Math.abs(W) ? "x" : "y", F = !0), Z !== "y" && (Ee[2] += O, T._vx.update(O, !0)), Z !== "x" && (ot[2] += W, T._vy.update(W, !0)), c ? Q || (Q = requestAnimationFrame(en)) : en()
      },
      Cr = function(O) {
        if (!dr(O, 1)) {
          O = Is(O, u);
          var W = O.clientX,
            J = O.clientY,
            H = W - T.x,
            re = J - T.y,
            q = T.isDragging;
          T.x = W, T.y = J, (q || Math.abs(T.startX - W) >= o || Math.abs(T.startY - J) >= o) && (y && (De = !0), q || (T.isDragging = !0), tn(H, re), q || m && m(T))
        }
      },
      dn = T.onPress = function(I) {
        dr(I, 1) || I && I.button || (T.axis = Z = null, ue.pause(), T.isPressed = !0, I = Is(I), he = Qe = 0, T.startX = T.x = I.clientX, T.startY = T.y = I.clientY, T._vx.reset(), T._vy.reset(), rr(oe ? a : me, nn[1], Cr, u, !0), T.deltaX = T.deltaY = 0, b && b(T))
      },
      pr = T.onRelease = function(I) {
        if (!dr(I, 1)) {
          tr(oe ? a : me, nn[1], Cr, !0);
          var O = !isNaN(T.y - T.startY),
            W = T.isDragging && (Math.abs(T.x - T.startX) > 3 || Math.abs(T.y - T.startY) > 3),
            J = Is(I);
          !W && O && (T._vx.reset(), T._vy.reset(), u && M && Ut.delayedCall(.08, function() {
            if (ua() - hr > 300 && !I.defaultPrevented) {
              if (I.target.click) I.target.click();
              else if (me.createEvent) {
                var H = me.createEvent("MouseEvents");
                H.initMouseEvent("click", !0, !0, Mr, 1, J.screenX, J.screenY, J.clientX, J.clientY, !1, !1, !1, !1, 0, null), I.target.dispatchEvent(H)
              }
            }
          })), T.isDragging = T.isGesturing = T.isPressed = !1, d && !oe && ue.restart(!0), g && W && g(T), v && v(T, W)
        }
      },
      ke = function(O) {
        return O.touches && O.touches.length > 1 && (T.isGesturing = !0) && $(O, T.isDragging)
      },
      Er = function() {
        return (T.isGesturing = !1) || L(T)
      },
      st = function(O) {
        if (!dr(O)) {
          var W = tt(),
            J = de();
          On((W - Je) * ne, (J - je) * ne, 1), Je = W, je = J, d && ue.restart(!0)
        }
      },
      jt = function(O) {
        if (!dr(O)) {
          O = Is(O, u), ee && (E = !0);
          var W = (O.deltaMode === 1 ? l : O.deltaMode === 2 ? Mr.innerHeight : 1) * _;
          On(O.deltaX * W, O.deltaY * W, 0), d && !oe && ue.restart(!0)
        }
      },
      _r = function(O) {
        if (!dr(O)) {
          var W = O.clientX,
            J = O.clientY,
            H = W - T.x,
            re = J - T.y;
          T.x = W, T.y = J, x = !0, (H || re) && tn(H, re)
        }
      },
      pn = function(O) {
        T.event = O, z(T)
      },
      ge = function(O) {
        T.event = O, U(T)
      },
      A = function(O) {
        return dr(O) || Is(O, u) && te(T)
      };
    ue = T._dc = Ut.delayedCall(h || .25, Mt).pause(), T.deltaX = T.deltaY = 0, T._vx = eh(0, 50, !0), T._vy = eh(0, 50, !0), T.scrollX = tt, T.scrollY = de, T.isDragging = T.isGesturing = T.isPressed = !1, z1(this), T.enable = function(I) {
      return T.isEnabled || (rr(G ? me : a, "scroll", Zf), s.indexOf("scroll") >= 0 && rr(G ? me : a, "scroll", st, u, ce), s.indexOf("wheel") >= 0 && rr(a, "wheel", jt, u, ce), (s.indexOf("touch") >= 0 && X1 || s.indexOf("pointer") >= 0) && (rr(a, nn[0], dn, u, ce), rr(me, nn[2], pr), rr(me, nn[3], pr), M && rr(a, "click", bt, !1, !0), te && rr(a, "click", A), $ && rr(me, "gesturestart", ke), L && rr(me, "gestureend", Er), z && rr(a, qi + "enter", pn), U && rr(a, qi + "leave", ge), V && rr(a, qi + "move", _r)), T.isEnabled = !0, I && I.type && dn(I), ie && ie(T)), T
    }, T.disable = function() {
      T.isEnabled && (Qo.filter(function(I) {
        return I !== T && fa(I.target)
      }).length || tr(G ? me : a, "scroll", Zf), T.isPressed && (T._vx.reset(), T._vy.reset(), tr(oe ? a : me, nn[1], Cr, !0)), tr(G ? me : a, "scroll", st, ce), tr(a, "wheel", jt, ce), tr(a, nn[0], dn, ce), tr(me, nn[2], pr), tr(me, nn[3], pr), tr(a, "click", bt, !0), tr(a, "click", A), tr(me, "gesturestart", ke), tr(me, "gestureend", Er), tr(a, qi + "enter", pn), tr(a, qi + "leave", ge), tr(a, qi + "move", _r), T.isEnabled = T.isPressed = T.isDragging = !1, be && be(T))
    }, T.kill = T.revert = function() {
      T.disable();
      var I = Qo.indexOf(T);
      I >= 0 && Qo.splice(I, 1), zn === T && (zn = 0)
    }, Qo.push(T), oe && fa(a) && (zn = T), T.enable(p)
  }, ES(r, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity()
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity()
    }
  }]), r
}();
Ct.version = "3.12.2";
Ct.create = function(r) {
  return new Ct(r)
};
Ct.register = Q1;
Ct.getAll = function() {
  return Qo.slice()
};
Ct.getById = function(r) {
  return Qo.filter(function(e) {
    return e.vars.id === r
  })[0]
};
G1() && Ut.registerPlugin(Ct);
/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var cr, J1, Kn, En, Pi, Z1, ey, bl, ty = function() {
    return typeof window < "u"
  },
  ry = function() {
    return cr || ty() && (cr = window.gsap) && cr.registerPlugin && cr
  },
  ny = function(e) {
    return typeof e == "string"
  },
  Q_ = function(e) {
    return typeof e == "function"
  },
  Ba = function(e, t) {
    var n = t === "x" ? "Width" : "Height",
      i = "scroll" + n,
      o = "client" + n;
    return e === Kn || e === En || e === Pi ? Math.max(En[i], Pi[i]) - (Kn["inner" + n] || En[o] || Pi[o]) : e[i] - e["offset" + n]
  },
  Va = function(e, t) {
    var n = "scroll" + (t === "x" ? "Left" : "Top");
    return e === Kn && (e.pageXOffset != null ? n = "page" + t.toUpperCase() + "Offset" : e = En[n] != null ? En : Pi),
      function() {
        return e[n]
      }
  },
  SS = function(e, t, n, i) {
    if (Q_(e) && (e = e(t, n, i)), typeof e != "object") return ny(e) && e !== "max" && e.charAt(1) !== "=" ? {
      x: e,
      y: e
    } : {
      y: e
    };
    if (e.nodeType) return {
      y: e,
      x: e
    };
    var o = {},
      s;
    for (s in e) o[s] = s !== "onAutoKill" && Q_(e[s]) ? e[s](t, n, i) : e[s];
    return o
  },
  iy = function(e, t) {
    if (e = Z1(e)[0], !e || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
    var n = e.getBoundingClientRect(),
      i = !t || t === Kn || t === Pi,
      o = i ? {
        top: En.clientTop - (Kn.pageYOffset || En.scrollTop || Pi.scrollTop || 0),
        left: En.clientLeft - (Kn.pageXOffset || En.scrollLeft || Pi.scrollLeft || 0)
      } : t.getBoundingClientRect(),
      s = {
        x: n.left - o.left,
        y: n.top - o.top
      };
    return !i && t && (s.x += Va(t, "x")(), s.y += Va(t, "y")()), s
  },
  J_ = function(e, t, n, i, o) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - o : ny(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + i - o : e === "max" ? Ba(t, n) - o : Math.min(Ba(t, n), iy(e, t)[n] - o)
  },
  Z_ = function() {
    cr = ry(), ty() && cr && typeof document < "u" && document.body && (Kn = window, Pi = document.body, En = document.documentElement, Z1 = cr.utils.toArray, cr.config({
      autoKillThreshold: 7
    }), ey = cr.config(), J1 = 1)
  },
  el = {
    version: "3.12.2",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
      cr = e, Z_()
    },
    init: function(e, t, n, i, o) {
      J1 || Z_();
      var s = this,
        a = cr.getProperty(e, "scrollSnapType");
      s.isWin = e === Kn, s.target = e, s.tween = n, t = SS(t, i, e, o), s.vars = t, s.autoKill = !!t.autoKill, s.getX = Va(e, "x"), s.getY = Va(e, "y"), s.x = s.xPrev = s.getX(), s.y = s.yPrev = s.getY(), bl || (bl = cr.core.globals().ScrollTrigger), cr.getProperty(e, "scrollBehavior") === "smooth" && cr.set(e, {
        scrollBehavior: "auto"
      }), a && a !== "none" && (s.snap = 1, s.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), t.x != null ? (s.add(s, "x", s.x, J_(t.x, e, "x", s.x, t.offsetX || 0), i, o), s._props.push("scrollTo_x")) : s.skipX = 1, t.y != null ? (s.add(s, "y", s.y, J_(t.y, e, "y", s.y, t.offsetY || 0), i, o), s._props.push("scrollTo_y")) : s.skipY = 1
    },
    render: function(e, t) {
      for (var n = t._pt, i = t.target, o = t.tween, s = t.autoKill, a = t.xPrev, l = t.yPrev, c = t.isWin, u = t.snap, d = t.snapInline, h, f, _, p, m; n;) n.r(e, n.d), n = n._next;
      h = c || !t.skipX ? t.getX() : a, f = c || !t.skipY ? t.getY() : l, _ = f - l, p = h - a, m = ey.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), s && (!t.skipX && (p > m || p < -m) && h < Ba(i, "x") && (t.skipX = 1), !t.skipY && (_ > m || _ < -m) && f < Ba(i, "y") && (t.skipY = 1), t.skipX && t.skipY && (o.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(o, t.vars.onAutoKillParams || []))), c ? Kn.scrollTo(t.skipX ? h : t.x, t.skipY ? f : t.y) : (t.skipY || (i.scrollTop = t.y), t.skipX || (i.scrollLeft = t.x)), u && (e === 1 || e === 0) && (f = i.scrollTop, h = i.scrollLeft, d ? i.style.scrollSnapType = d : i.style.removeProperty("scroll-snap-type"), i.scrollTop = f + 1, i.scrollLeft = h + 1, i.scrollTop = f, i.scrollLeft = h), t.xPrev = t.x, t.yPrev = t.y, bl && bl.update()
    },
    kill: function(e) {
      var t = e === "scrollTo";
      (t || e === "scrollTo_x") && (this.skipX = 1), (t || e === "scrollTo_y") && (this.skipY = 1)
    }
  };
el.max = Ba;
el.getOffset = iy;
el.buildGetter = Va;
ry() && cr.registerPlugin(el);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var pe, jo, Fe, at, an, rt, oy, mc, yc, Jo, Vl, vl, zt, Gc, th, ir, e0, t0, Wo, sy, Au, ay, Tr, ly, cy, uy, di, rh, Dd, us, wd, Ru, Dl = 1,
  sr = Date.now,
  Ou = sr(),
  Qr = 0,
  Ys = 0,
  r0 = function(e, t, n) {
    var i = Lr(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return n["_" + t + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
  },
  n0 = function(e, t) {
    return t && (!Lr(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
  },
  TS = function r() {
    return Ys && requestAnimationFrame(r)
  },
  i0 = function() {
    return Gc = 1
  },
  o0 = function() {
    return Gc = 0
  },
  vn = function(e) {
    return e
  },
  zs = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  fy = function() {
    return typeof window < "u"
  },
  hy = function() {
    return pe || fy() && (pe = window.gsap) && pe.registerPlugin && pe
  },
  mo = function(e) {
    return !!~oy.indexOf(e)
  },
  dy = function(e) {
    return (e === "Height" ? wd : Fe["inner" + e]) || an["client" + e] || rt["client" + e]
  },
  py = function(e) {
    return Ti(e, "getBoundingClientRect") || (mo(e) ? function() {
      return Yl.width = Fe.innerWidth, Yl.height = wd, Yl
    } : function() {
      return Vn(e)
    })
  },
  PS = function(e, t, n) {
    var i = n.d,
      o = n.d2,
      s = n.a;
    return (s = Ti(e, "getBoundingClientRect")) ? function() {
      return s()[i]
    } : function() {
      return (t ? dy(o) : e["client" + o]) || 0
    }
  },
  LS = function(e, t) {
    return !t || ~Tn.indexOf(e) ? py(e) : function() {
      return Yl
    }
  },
  Gn = function(e, t) {
    var n = t.s,
      i = t.d2,
      o = t.d,
      s = t.a;
    return Math.max(0, (n = "scroll" + i) && (s = Ti(e, n)) ? s() - py(e)()[o] : mo(e) ? (an[n] || rt[n]) - dy(i) : e[n] - e["offset" + i])
  },
  wl = function(e, t) {
    for (var n = 0; n < Wo.length; n += 3)(!t || ~t.indexOf(Wo[n + 1])) && e(Wo[n], Wo[n + 1], Wo[n + 2])
  },
  Lr = function(e) {
    return typeof e == "string"
  },
  ur = function(e) {
    return typeof e == "function"
  },
  Hl = function(e) {
    return typeof e == "number"
  },
  Ki = function(e) {
    return typeof e == "object"
  },
  $s = function(e, t, n) {
    return e && e.progress(t ? 0 : 1) && n && e.pause()
  },
  Fu = function(e, t) {
    if (e.enabled) {
      var n = t(e);
      n && n.totalTime && (e.callbackAnimation = n)
    }
  },
  Bo = Math.abs,
  _y = "left",
  gy = "top",
  xd = "right",
  Cd = "bottom",
  lo = "width",
  co = "height",
  ha = "Right",
  da = "Left",
  pa = "Top",
  _a = "Bottom",
  Dt = "padding",
  Xr = "margin",
  ks = "Width",
  Ed = "Height",
  $t = "px",
  Yr = function(e) {
    return Fe.getComputedStyle(e)
  },
  AS = function(e) {
    var t = Yr(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
  },
  s0 = function(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e
  },
  Vn = function(e, t) {
    var n = t && Yr(e)[th] !== "matrix(1, 0, 0, 1, 0, 0)" && pe.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1),
      i = e.getBoundingClientRect();
    return n && n.progress(0).kill(), i
  },
  nh = function(e, t) {
    var n = t.d2;
    return e["offset" + n] || e["client" + n] || 0
  },
  my = function(e) {
    var t = [],
      n = e.labels,
      i = e.duration(),
      o;
    for (o in n) t.push(n[o] / i);
    return t
  },
  RS = function(e) {
    return function(t) {
      return pe.utils.snap(my(e), t)
    }
  },
  kd = function(e) {
    var t = pe.utils.snap(e),
      n = Array.isArray(e) && e.slice(0).sort(function(i, o) {
        return i - o
      });
    return n ? function(i, o, s) {
      s === void 0 && (s = .001);
      var a;
      if (!o) return t(i);
      if (o > 0) {
        for (i -= s, a = 0; a < n.length; a++)
          if (n[a] >= i) return n[a];
        return n[a - 1]
      } else
        for (a = n.length, i += s; a--;)
          if (n[a] <= i) return n[a];
      return n[0]
    } : function(i, o, s) {
      s === void 0 && (s = .001);
      var a = t(i);
      return !o || Math.abs(a - i) < s || a - i < 0 == o < 0 ? a : t(o < 0 ? i - e : i + e)
    }
  },
  OS = function(e) {
    return function(t, n) {
      return kd(my(e))(t, n.direction)
    }
  },
  xl = function(e, t, n, i) {
    return n.split(",").forEach(function(o) {
      return e(t, o, i)
    })
  },
  Lt = function(e, t, n, i, o) {
    return e.addEventListener(t, n, {
      passive: !i,
      capture: !!o
    })
  },
  Pt = function(e, t, n, i) {
    return e.removeEventListener(t, n, !!i)
  },
  Cl = function(e, t, n) {
    n = n && n.wheelHandler, n && (e(t, "wheel", n), e(t, "touchmove", n))
  },
  a0 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  El = {
    toggleActions: "play",
    anticipatePin: 0
  },
  bc = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
  Ul = function(e, t) {
    if (Lr(e)) {
      var n = e.indexOf("="),
        i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      ~n && (e.indexOf("%") > n && (i *= t / 100), e = e.substr(0, n - 1)), e = i + (e in bc ? bc[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
  },
  kl = function(e, t, n, i, o, s, a, l) {
    var c = o.startColor,
      u = o.endColor,
      d = o.fontSize,
      h = o.indent,
      f = o.fontWeight,
      _ = at.createElement("div"),
      p = mo(n) || Ti(n, "pinType") === "fixed",
      m = e.indexOf("scroller") !== -1,
      g = p ? rt : n,
      y = e.indexOf("start") !== -1,
      b = y ? c : u,
      v = "border-color:" + b + ";font-size:" + d + ";color:" + b + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return v += "position:" + ((m || l) && p ? "fixed;" : "absolute;"), (m || l || !p) && (v += (i === Tt ? xd : Cd) + ":" + (s + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = y, _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), _.style.cssText = v, _.innerText = t || t === 0 ? e + "-" + t : e, g.children[0] ? g.insertBefore(_, g.children[0]) : g.appendChild(_), _._offset = _["offset" + i.op.d2], jl(_, 0, i, y), _
  },
  jl = function(e, t, n, i) {
    var o = {
        display: "block"
      },
      s = n[i ? "os2" : "p2"],
      a = n[i ? "p2" : "os2"];
    e._isFlipped = i, o[n.a + "Percent"] = i ? -100 : 0, o[n.a] = i ? "1px" : 0, o["border" + s + ks] = 1, o["border" + a + ks] = 0, o[n.p] = t + "px", pe.set(e, o)
  },
  Te = [],
  ih = {},
  Ha, l0 = function() {
    return sr() - Qr > 34 && (Ha || (Ha = requestAnimationFrame(Qn)))
  },
  Vo = function() {
    (!Tr || !Tr.isPressed || Tr.startX > rt.clientWidth) && (Le.cache++, Tr ? Ha || (Ha = requestAnimationFrame(Qn)) : Qn(), Qr || bo("scrollStart"), Qr = sr())
  },
  Mu = function() {
    uy = Fe.innerWidth, cy = Fe.innerHeight
  },
  Gs = function() {
    Le.cache++, !zt && !ay && !at.fullscreenElement && !at.webkitFullscreenElement && (!ly || uy !== Fe.innerWidth || Math.abs(Fe.innerHeight - cy) > Fe.innerHeight * .25) && mc.restart(!0)
  },
  yo = {},
  FS = [],
  yy = function r() {
    return Pt(Pe, "scrollEnd", r) || eo(!0)
  },
  bo = function(e) {
    return yo[e] && yo[e].map(function(t) {
      return t()
    }) || FS
  },
  Pr = [],
  by = function(e) {
    for (var t = 0; t < Pr.length; t += 5)(!e || Pr[t + 4] && Pr[t + 4].query === e) && (Pr[t].style.cssText = Pr[t + 1], Pr[t].getBBox && Pr[t].setAttribute("transform", Pr[t + 2] || ""), Pr[t + 3].uncache = 1)
  },
  Sd = function(e, t) {
    var n;
    for (ir = 0; ir < Te.length; ir++) n = Te[ir], n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
    t && by(t), t || bo("revert")
  },
  vy = function(e, t) {
    Le.cache++, (t || !or) && Le.forEach(function(n) {
      return ur(n) && n.cacheID++ && (n.rec = 0)
    }), Lr(e) && (Fe.history.scrollRestoration = Dd = e)
  },
  or, uo = 0,
  c0, MS = function() {
    if (c0 !== uo) {
      var e = c0 = uo;
      requestAnimationFrame(function() {
        return e === uo && eo(!0)
      })
    }
  },
  Dy = function() {
    rt.appendChild(us), wd = us.offsetHeight || Fe.innerHeight, rt.removeChild(us)
  },
  eo = function(e, t) {
    if (Qr && !e) {
      Lt(Pe, "scrollEnd", yy);
      return
    }
    Dy(), or = Pe.isRefreshing = !0, Le.forEach(function(i) {
      return ur(i) && ++i.cacheID && (i.rec = i())
    });
    var n = bo("refreshInit");
    sy && Pe.sort(), t || Sd(), Le.forEach(function(i) {
      ur(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
    }), Te.slice(0).forEach(function(i) {
      return i.refresh()
    }), Te.forEach(function(i, o) {
      if (i._subPinOffset && i.pin) {
        var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
          a = i.pin[s];
        i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - a), i.refresh()
      }
    }), Te.forEach(function(i) {
      var o = Gn(i.scroller, i._dir);
      (i.vars.end === "max" || i._endClamp && i.end > o) && i.setPositions(i.start, Math.max(i.start + 1, o), !0)
    }), n.forEach(function(i) {
      return i && i.render && i.render(-1)
    }), Le.forEach(function(i) {
      ur(i) && (i.smooth && requestAnimationFrame(function() {
        return i.target.style.scrollBehavior = "smooth"
      }), i.rec && i(i.rec))
    }), vy(Dd, 1), mc.pause(), uo++, or = 2, Qn(2), Te.forEach(function(i) {
      return ur(i.vars.onRefresh) && i.vars.onRefresh(i)
    }), or = Pe.isRefreshing = !1, bo("refresh")
  },
  oh = 0,
  Wl = 1,
  ga, Qn = function(e) {
    if (!or || e === 2) {
      Pe.isUpdating = !0, ga && ga.update(0);
      var t = Te.length,
        n = sr(),
        i = n - Ou >= 50,
        o = t && Te[0].scroll();
      if (Wl = oh > o ? -1 : 1, or || (oh = o), i && (Qr && !Gc && n - Qr > 200 && (Qr = 0, bo("scrollEnd")), Vl = Ou, Ou = n), Wl < 0) {
        for (ir = t; ir-- > 0;) Te[ir] && Te[ir].update(0, i);
        Wl = 1
      } else
        for (ir = 0; ir < t; ir++) Te[ir] && Te[ir].update(0, i);
      Pe.isUpdating = !1
    }
    Ha = 0
  },
  sh = [_y, gy, Cd, xd, Xr + _a, Xr + ha, Xr + pa, Xr + da, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  Xl = sh.concat([lo, co, "boxSizing", "max" + ks, "max" + Ed, "position", Xr, Dt, Dt + pa, Dt + ha, Dt + _a, Dt + da]),
  NS = function(e, t, n) {
    fs(n);
    var i = e._gsap;
    if (i.spacerIsNative) fs(i.spacerState);
    else if (e._gsap.swappedIn) {
      var o = t.parentNode;
      o && (o.insertBefore(e, t), o.removeChild(t))
    }
    e._gsap.swappedIn = !1
  },
  Nu = function(e, t, n, i) {
    if (!e._gsap.swappedIn) {
      for (var o = sh.length, s = t.style, a = e.style, l; o--;) l = sh[o], s[l] = n[l];
      s.position = n.position === "absolute" ? "absolute" : "relative", n.display === "inline" && (s.display = "inline-block"), a[Cd] = a[xd] = "auto", s.flexBasis = n.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[lo] = nh(e, lr) + $t, s[co] = nh(e, Tt) + $t, s[Dt] = a[Xr] = a[gy] = a[_y] = "0", fs(i), a[lo] = a["max" + ks] = n[lo], a[co] = a["max" + Ed] = n[co], a[Dt] = n[Dt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
    }
  },
  IS = /([A-Z])/g,
  fs = function(e) {
    if (e) {
      var t = e.t.style,
        n = e.length,
        i = 0,
        o, s;
      for ((e.t._gsap || pe.core.getCache(e.t)).uncache = 1; i < n; i += 2) s = e[i + 1], o = e[i], s ? t[o] = s : t[o] && t.removeProperty(o.replace(IS, "-$1").toLowerCase())
    }
  },
  Sl = function(e) {
    for (var t = Xl.length, n = e.style, i = [], o = 0; o < t; o++) i.push(Xl[o], n[Xl[o]]);
    return i.t = e, i
  },
  $S = function(e, t, n) {
    for (var i = [], o = e.length, s = n ? 8 : 0, a; s < o; s += 2) a = e[s], i.push(a, a in t ? t[a] : e[s + 1]);
    return i.t = e.t, i
  },
  Yl = {
    left: 0,
    top: 0
  },
  u0 = function(e, t, n, i, o, s, a, l, c, u, d, h, f, _) {
    ur(e) && (e = e(l)), Lr(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Ul("0" + e.substr(3), n) : 0));
    var p = f ? f.time() : 0,
      m, g, y;
    if (f && f.seek(0), isNaN(e) || (e = +e), Hl(e)) f && (e = pe.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, e)), a && jl(a, n, i, !0);
    else {
      ur(t) && (t = t(l));
      var b = (e || "0").split(" "),
        v, D, k, w;
      y = mr(t, l) || rt, v = Vn(y) || {}, (!v || !v.left && !v.top) && Yr(y).display === "none" && (w = y.style.display, y.style.display = "block", v = Vn(y), w ? y.style.display = w : y.style.removeProperty("display")), D = Ul(b[0], v[i.d]), k = Ul(b[1] || "0", n), e = v[i.p] - c[i.p] - u + D + o - k, a && jl(a, k, i, n - k < 20 || a._isStart && k > 20), n -= n - k
    }
    if (_ && (l[_] = e || -.001, e < 0 && (e = 0)), s) {
      var S = e + n,
        P = s._isStart;
      m = "scroll" + i.d2, jl(s, S, i, P && S > 20 || !P && (d ? Math.max(rt[m], an[m]) : s.parentNode[m]) <= S + 1), d && (c = Vn(a), d && (s.style[i.op.p] = c[i.op.p] - i.op.m - s._offset + $t))
    }
    return f && y && (m = Vn(y), f.seek(h), g = Vn(y), f._caScrollDist = m[i.p] - g[i.p], e = e / f._caScrollDist * h), f && f.seek(p), f ? e : Math.round(e)
  },
  BS = /(webkit|moz|length|cssText|inset)/i,
  f0 = function(e, t, n, i) {
    if (e.parentNode !== t) {
      var o = e.style,
        s, a;
      if (t === rt) {
        e._stOrig = o.cssText, a = Yr(e);
        for (s in a) !+s && !BS.test(s) && a[s] && typeof o[s] == "string" && s !== "0" && (o[s] = a[s]);
        o.top = n, o.left = i
      } else o.cssText = e._stOrig;
      pe.core.getCache(e).uncache = 1, t.appendChild(e)
    }
  },
  wy = function(e, t, n) {
    var i = t,
      o = i;
    return function(s) {
      var a = Math.round(e());
      return a !== i && a !== o && Math.abs(a - i) > 3 && Math.abs(a - o) > 3 && (s = a, n && n()), o = i, i = s, s
    }
  },
  Tl = function(e, t, n) {
    var i = {};
    i[t.p] = "+=" + n, pe.set(e, i)
  },
  h0 = function(e, t) {
    var n = Fi(e, t),
      i = "_scroll" + t.p2,
      o = function s(a, l, c, u, d) {
        var h = s.tween,
          f = l.onComplete,
          _ = {};
        c = c || n();
        var p = wy(n, c, function() {
          h.kill(), s.tween = 0
        });
        return d = u && d || 0, u = u || a - c, h && h.kill(), l[i] = a, l.modifiers = _, _[i] = function() {
          return p(c + u * h.ratio + d * h.ratio * h.ratio)
        }, l.onUpdate = function() {
          Le.cache++, Qn()
        }, l.onComplete = function() {
          s.tween = 0, f && f.call(h)
        }, h = s.tween = pe.to(e, l), h
      };
    return e[i] = n, n.wheelHandler = function() {
      return o.tween && o.tween.kill() && (o.tween = 0)
    }, Lt(e, "wheel", n.wheelHandler), Pe.isTouch && Lt(e, "touchmove", n.wheelHandler), o
  },
  Pe = function() {
    function r(t, n) {
      jo || r.register(pe) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), rh(this), this.init(t, n)
    }
    var e = r.prototype;
    return e.init = function(n, i) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ys) {
        this.update = this.refresh = this.kill = vn;
        return
      }
      n = s0(Lr(n) || Hl(n) || n.nodeType ? {
        trigger: n
      } : n, El);
      var o = n,
        s = o.onUpdate,
        a = o.toggleClass,
        l = o.id,
        c = o.onToggle,
        u = o.onRefresh,
        d = o.scrub,
        h = o.trigger,
        f = o.pin,
        _ = o.pinSpacing,
        p = o.invalidateOnRefresh,
        m = o.anticipatePin,
        g = o.onScrubComplete,
        y = o.onSnapComplete,
        b = o.once,
        v = o.snap,
        D = o.pinReparent,
        k = o.pinSpacer,
        w = o.containerAnimation,
        S = o.fastScrollEnd,
        P = o.preventOverlaps,
        C = n.horizontal || n.containerAnimation && n.horizontal !== !1 ? lr : Tt,
        R = !d && d !== 0,
        N = mr(n.scroller || Fe),
        B = pe.core.getCache(N),
        z = mo(N),
        U = ("pinType" in n ? n.pinType : Ti(N, "pinType") || z && "fixed") === "fixed",
        V = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
        Y = R && n.toggleActions.split(" "),
        oe = "markers" in n ? n.markers : El.markers,
        $ = z ? 0 : parseFloat(Yr(N)["border" + C.p2 + ks]) || 0,
        L = this,
        ee = n.onRefreshInit && function() {
          return n.onRefreshInit(L)
        },
        ie = PS(N, z, C),
        be = LS(N, z),
        te = 0,
        ne = 0,
        ce = 0,
        M = Fi(N, C),
        X, K, Q, ue, De, x, E, F, Z, T, he, Qe, tt, de, Je, je, j, G, me, Ee, ot, hr, bt, dr, Mt, en, On, tn, Cr, dn, pr, ke, Er, st, jt, _r, pn, ge, A;
      if (L._startClamp = L._endClamp = !1, L._dir = C, m *= 45, L.scroller = N, L.scroll = w ? w.time.bind(w) : M, ue = M(), L.vars = n, i = i || n.animation, "refreshPriority" in n && (sy = 1, n.refreshPriority === -9999 && (ga = L)), B.tweenScroll = B.tweenScroll || {
          top: h0(N, Tt),
          left: h0(N, lr)
        }, L.tweenTo = X = B.tweenScroll[C.p], L.scrubDuration = function(H) {
          Er = Hl(H) && H, Er ? ke ? ke.duration(H) : ke = pe.to(i, {
            ease: "expo",
            totalProgress: "+=0",
            duration: Er,
            paused: !0,
            onComplete: function() {
              return g && g(L)
            }
          }) : (ke && ke.progress(1).kill(), ke = 0)
        }, i && (i.vars.lazy = !1, i._initted && !L.isReverted || i.vars.immediateRender !== !1 && n.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), L.animation = i.pause(), i.scrollTrigger = L, L.scrubDuration(d), dn = 0, l || (l = i.vars.id)), v && ((!Ki(v) || v.push) && (v = {
          snapTo: v
        }), "scrollBehavior" in rt.style && pe.set(z ? [rt, an] : N, {
          scrollBehavior: "auto"
        }), Le.forEach(function(H) {
          return ur(H) && H.target === (z ? at.scrollingElement || an : N) && (H.smooth = !1)
        }), Q = ur(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? RS(i) : v.snapTo === "labelsDirectional" ? OS(i) : v.directional !== !1 ? function(H, re) {
          return kd(v.snapTo)(H, sr() - ne < 500 ? 0 : re.direction)
        } : pe.utils.snap(v.snapTo), st = v.duration || {
          min: .1,
          max: 2
        }, st = Ki(st) ? Jo(st.min, st.max) : Jo(st, st), jt = pe.delayedCall(v.delay || Er / 2 || .1, function() {
          var H = M(),
            re = sr() - ne < 500,
            q = X.tween;
          if ((re || Math.abs(L.getVelocity()) < 10) && !q && !Gc && te !== H) {
            var fe = (H - x) / de,
              ve = i && !R ? i.totalProgress() : fe,
              _e = re ? 0 : (ve - pr) / (sr() - Vl) * 1e3 || 0,
              Ce = pe.utils.clamp(-fe, 1 - fe, Bo(_e / 2) * _e / .185),
              $e = fe + (v.inertia === !1 ? 0 : Ce),
              ze = Jo(0, 1, Q($e, L)),
              Ae = Math.round(x + ze * de),
              Re = v,
              We = Re.onStart,
              xe = Re.onInterrupt,
              Nt = Re.onComplete;
            if (H <= E && H >= x && Ae !== H) {
              if (q && !q._initted && q.data <= Bo(Ae - H)) return;
              v.inertia === !1 && (Ce = ze - fe), X(Ae, {
                duration: st(Bo(Math.max(Bo($e - ve), Bo(ze - ve)) * .185 / _e / .05 || 0)),
                ease: v.ease || "power3",
                data: Bo(Ae - H),
                onInterrupt: function() {
                  return jt.restart(!0) && xe && xe(L)
                },
                onComplete: function() {
                  L.update(), te = M(), dn = pr = i && !R ? i.totalProgress() : L.progress, y && y(L), Nt && Nt(L)
                }
              }, H, Ce * de, Ae - H - Ce * de), We && We(L, X.tween)
            }
          } else L.isActive && te !== H && jt.restart(!0)
        }).pause()), l && (ih[l] = L), h = L.trigger = mr(h || f !== !0 && f), A = h && h._gsap && h._gsap.stRevert, A && (A = A(L)), f = f === !0 ? h : mr(f), Lr(a) && (a = {
          targets: h,
          className: a
        }), f && (_ === !1 || _ === Xr || (_ = !_ && f.parentNode && f.parentNode.style && Yr(f.parentNode).display === "flex" ? !1 : Dt), L.pin = f, K = pe.core.getCache(f), K.spacer ? Je = K.pinState : (k && (k = mr(k), k && !k.nodeType && (k = k.current || k.nativeElement), K.spacerIsNative = !!k, k && (K.spacerState = Sl(k))), K.spacer = G = k || at.createElement("div"), G.classList.add("pin-spacer"), l && G.classList.add("pin-spacer-" + l), K.pinState = Je = Sl(f)), n.force3D !== !1 && pe.set(f, {
          force3D: !0
        }), L.spacer = G = K.spacer, Cr = Yr(f), dr = Cr[_ + C.os2], Ee = pe.getProperty(f), ot = pe.quickSetter(f, C.a, $t), Nu(f, G, Cr), j = Sl(f)), oe) {
        Qe = Ki(oe) ? s0(oe, a0) : a0, T = kl("scroller-start", l, N, C, Qe, 0), he = kl("scroller-end", l, N, C, Qe, 0, T), me = T["offset" + C.op.d2];
        var I = mr(Ti(N, "content") || N);
        F = this.markerStart = kl("start", l, I, C, Qe, me, 0, w), Z = this.markerEnd = kl("end", l, I, C, Qe, me, 0, w), w && (ge = pe.quickSetter([F, Z], C.a, $t)), !U && !(Tn.length && Ti(N, "fixedMarkers") === !0) && (AS(z ? rt : N), pe.set([T, he], {
          force3D: !0
        }), en = pe.quickSetter(T, C.a, $t), tn = pe.quickSetter(he, C.a, $t))
      }
      if (w) {
        var O = w.vars.onUpdate,
          W = w.vars.onUpdateParams;
        w.eventCallback("onUpdate", function() {
          L.update(0, 0, 1), O && O.apply(w, W || [])
        })
      }
      if (L.previous = function() {
          return Te[Te.indexOf(L) - 1]
        }, L.next = function() {
          return Te[Te.indexOf(L) + 1]
        }, L.revert = function(H, re) {
          if (!re) return L.kill(!0);
          var q = H !== !1 || !L.enabled,
            fe = zt;
          q !== L.isReverted && (q && (_r = Math.max(M(), L.scroll.rec || 0), ce = L.progress, pn = i && i.progress()), F && [F, Z, T, he].forEach(function(ve) {
            return ve.style.display = q ? "none" : "block"
          }), q && (zt = L, L.update(q)), f && (!D || !L.isActive) && (q ? NS(f, G, Je) : Nu(f, G, Yr(f), Mt)), q || L.update(q), zt = fe, L.isReverted = q)
        }, L.refresh = function(H, re, q, fe) {
          if (!((zt || !L.enabled) && !re)) {
            if (f && H && Qr) {
              Lt(r, "scrollEnd", yy);
              return
            }!or && ee && ee(L), zt = L, X.tween && !q && (X.tween.kill(), X.tween = 0), ke && ke.pause(), p && i && i.revert({
              kill: !1
            }).invalidate(), L.isReverted || L.revert(!0, !0), L._subPinOffset = !1;
            var ve = ie(),
              _e = be(),
              Ce = w ? w.duration() : Gn(N, C),
              $e = de <= .01,
              ze = 0,
              Ae = fe || 0,
              Re = Ki(q) ? q.end : n.end,
              We = n.endTrigger || h,
              xe = Ki(q) ? q.start : n.start || (n.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"),
              Nt = L.pinnedContainer = n.pinnedContainer && mr(n.pinnedContainer, L),
              ht = h && Math.max(0, Te.indexOf(L)) || 0,
              kr = ht,
              It, Wt, $i, rl, Xt, Et, _n, Qc, Fd, Ps, gn, Ls, nl;
            for (oe && Ki(q) && (Ls = pe.getProperty(T, C.p), nl = pe.getProperty(he, C.p)); kr--;) Et = Te[kr], Et.end || Et.refresh(0, 1) || (zt = L), _n = Et.pin, _n && (_n === h || _n === f || _n === Nt) && !Et.isReverted && (Ps || (Ps = []), Ps.unshift(Et), Et.revert(!0, !0)), Et !== Te[kr] && (ht--, kr--);
            for (ur(xe) && (xe = xe(L)), xe = r0(xe, "start", L), x = u0(xe, h, ve, C, M(), F, T, L, _e, $, U, Ce, w, L._startClamp && "_startClamp") || (f ? -.001 : 0), ur(Re) && (Re = Re(L)), Lr(Re) && !Re.indexOf("+=") && (~Re.indexOf(" ") ? Re = (Lr(xe) ? xe.split(" ")[0] : "") + Re : (ze = Ul(Re.substr(2), ve), Re = Lr(xe) ? xe : (w ? pe.utils.mapRange(0, w.duration(), w.scrollTrigger.start, w.scrollTrigger.end, x) : x) + ze, We = h)), Re = r0(Re, "end", L), E = Math.max(x, u0(Re || (We ? "100% 0" : Ce), We, ve, C, M() + ze, Z, he, L, _e, $, U, Ce, w, L._endClamp && "_endClamp")) || -.001, ze = 0, kr = ht; kr--;) Et = Te[kr], _n = Et.pin, _n && Et.start - Et._pinPush <= x && !w && Et.end > 0 && (It = Et.end - (L._startClamp ? Math.max(0, Et.start) : Et.start), (_n === h && Et.start - Et._pinPush < x || _n === Nt) && isNaN(xe) && (ze += It * (1 - Et.progress)), _n === f && (Ae += It));
            if (x += ze, E += ze, L._startClamp && (L._startClamp += ze), L._endClamp && !or && (L._endClamp = E || -.001, E = Math.min(E, Gn(N, C))), de = E - x || (x -= .01) && .001, $e && (ce = pe.utils.clamp(0, 1, pe.utils.normalize(x, E, _r))), L._pinPush = Ae, F && ze && (It = {}, It[C.a] = "+=" + ze, Nt && (It[C.p] = "-=" + M()), pe.set([F, Z], It)), f) It = Yr(f), rl = C === Tt, $i = M(), hr = parseFloat(Ee(C.a)) + Ae, !Ce && E > 1 && (gn = (z ? at.scrollingElement || an : N).style, gn = {
              style: gn,
              value: gn["overflow" + C.a.toUpperCase()]
            }, z && Yr(rt)["overflow" + C.a.toUpperCase()] !== "scroll" && (gn.style["overflow" + C.a.toUpperCase()] = "scroll")), Nu(f, G, It), j = Sl(f), Wt = Vn(f, !0), Qc = U && Fi(N, rl ? lr : Tt)(), _ && (Mt = [_ + C.os2, de + Ae + $t], Mt.t = G, kr = _ === Dt ? nh(f, C) + de + Ae : 0, kr && Mt.push(C.d, kr + $t), fs(Mt), Nt && Te.forEach(function(As) {
              As.pin === Nt && As.vars.pinSpacing !== !1 && (As._subPinOffset = !0)
            }), U && M(_r)), U && (Xt = {
              top: Wt.top + (rl ? $i - x : Qc) + $t,
              left: Wt.left + (rl ? Qc : $i - x) + $t,
              boxSizing: "border-box",
              position: "fixed"
            }, Xt[lo] = Xt["max" + ks] = Math.ceil(Wt.width) + $t, Xt[co] = Xt["max" + Ed] = Math.ceil(Wt.height) + $t, Xt[Xr] = Xt[Xr + pa] = Xt[Xr + ha] = Xt[Xr + _a] = Xt[Xr + da] = "0", Xt[Dt] = It[Dt], Xt[Dt + pa] = It[Dt + pa], Xt[Dt + ha] = It[Dt + ha], Xt[Dt + _a] = It[Dt + _a], Xt[Dt + da] = It[Dt + da], je = $S(Je, Xt, D), or && M(0)), i ? (Fd = i._initted, Au(1), i.render(i.duration(), !0, !0), bt = Ee(C.a) - hr + de + Ae, On = Math.abs(de - bt) > 1, U && On && je.splice(je.length - 2, 2), i.render(0, !0, !0), Fd || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Au(0)) : bt = de, gn && (gn.value ? gn.style["overflow" + C.a.toUpperCase()] = gn.value : gn.style.removeProperty("overflow-" + C.a));
            else if (h && M() && !w)
              for (Wt = h.parentNode; Wt && Wt !== rt;) Wt._pinOffset && (x -= Wt._pinOffset, E -= Wt._pinOffset), Wt = Wt.parentNode;
            Ps && Ps.forEach(function(As) {
              return As.revert(!1, !0)
            }), L.start = x, L.end = E, ue = De = or ? _r : M(), !w && !or && (ue < _r && M(_r), L.scroll.rec = 0), L.revert(!1, !0), ne = sr(), jt && (te = -1, jt.restart(!0)), zt = 0, i && R && (i._initted || pn) && i.progress() !== pn && i.progress(pn || 0, !0).render(i.time(), !0, !0), ($e || ce !== L.progress || w) && (i && !R && i.totalProgress(w && x < -.001 && !ce ? pe.utils.normalize(x, E, 0) : ce, !0), L.progress = $e || (ue - x) / de === ce ? 0 : ce), f && _ && (G._pinOffset = Math.round(L.progress * bt)), ke && ke.invalidate(), isNaN(Ls) || (Ls -= pe.getProperty(T, C.p), nl -= pe.getProperty(he, C.p), Tl(T, C, Ls), Tl(F, C, Ls - (fe || 0)), Tl(he, C, nl), Tl(Z, C, nl - (fe || 0))), $e && !or && L.update(), u && !or && !tt && (tt = !0, u(L), tt = !1)
          }
        }, L.getVelocity = function() {
          return (M() - De) / (sr() - Vl) * 1e3 || 0
        }, L.endAnimation = function() {
          $s(L.callbackAnimation), i && (ke ? ke.progress(1) : i.paused() ? R || $s(i, L.direction < 0, 1) : $s(i, i.reversed()))
        }, L.labelToScroll = function(H) {
          return i && i.labels && (x || L.refresh() || x) + i.labels[H] / i.duration() * de || 0
        }, L.getTrailing = function(H) {
          var re = Te.indexOf(L),
            q = L.direction > 0 ? Te.slice(0, re).reverse() : Te.slice(re + 1);
          return (Lr(H) ? q.filter(function(fe) {
            return fe.vars.preventOverlaps === H
          }) : q).filter(function(fe) {
            return L.direction > 0 ? fe.end <= x : fe.start >= E
          })
        }, L.update = function(H, re, q) {
          if (!(w && !q && !H)) {
            var fe = or === !0 ? _r : L.scroll(),
              ve = H ? 0 : (fe - x) / de,
              _e = ve < 0 ? 0 : ve > 1 ? 1 : ve || 0,
              Ce = L.progress,
              $e, ze, Ae, Re, We, xe, Nt, ht;
            if (re && (De = ue, ue = w ? M() : fe, v && (pr = dn, dn = i && !R ? i.totalProgress() : _e)), m && !_e && f && !zt && !Dl && Qr && x < fe + (fe - De) / (sr() - Vl) * m && (_e = 1e-4), _e !== Ce && L.enabled) {
              if ($e = L.isActive = !!_e && _e < 1, ze = !!Ce && Ce < 1, xe = $e !== ze, We = xe || !!_e != !!Ce, L.direction = _e > Ce ? 1 : -1, L.progress = _e, We && !zt && (Ae = _e && !Ce ? 0 : _e === 1 ? 1 : Ce === 1 ? 2 : 3, R && (Re = !xe && Y[Ae + 1] !== "none" && Y[Ae + 1] || Y[Ae], ht = i && (Re === "complete" || Re === "reset" || Re in i))), P && (xe || ht) && (ht || d || !i) && (ur(P) ? P(L) : L.getTrailing(P).forEach(function($i) {
                  return $i.endAnimation()
                })), R || (ke && !zt && !Dl ? (ke._dp._time - ke._start !== ke._time && ke.render(ke._dp._time - ke._start), ke.resetTo ? ke.resetTo("totalProgress", _e, i._tTime / i._tDur) : (ke.vars.totalProgress = _e, ke.invalidate().restart())) : i && i.totalProgress(_e, !!(zt && (ne || H)))), f) {
                if (H && _ && (G.style[_ + C.os2] = dr), !U) ot(zs(hr + bt * _e));
                else if (We) {
                  if (Nt = !H && _e > Ce && E + 1 > fe && fe + 1 >= Gn(N, C), D)
                    if (!H && ($e || Nt)) {
                      var kr = Vn(f, !0),
                        It = fe - x;
                      f0(f, rt, kr.top + (C === Tt ? It : 0) + $t, kr.left + (C === Tt ? 0 : It) + $t)
                    } else f0(f, G);
                  fs($e || Nt ? je : j), On && _e < 1 && $e || ot(hr + (_e === 1 && !Nt ? bt : 0))
                }
              }
              v && !X.tween && !zt && !Dl && jt.restart(!0), a && (xe || b && _e && (_e < 1 || !Ru)) && yc(a.targets).forEach(function($i) {
                return $i.classList[$e || b ? "add" : "remove"](a.className)
              }), s && !R && !H && s(L), We && !zt ? (R && (ht && (Re === "complete" ? i.pause().totalProgress(1) : Re === "reset" ? i.restart(!0).pause() : Re === "restart" ? i.restart(!0) : i[Re]()), s && s(L)), (xe || !Ru) && (c && xe && Fu(L, c), V[Ae] && Fu(L, V[Ae]), b && (_e === 1 ? L.kill(!1, 1) : V[Ae] = 0), xe || (Ae = _e === 1 ? 1 : 3, V[Ae] && Fu(L, V[Ae]))), S && !$e && Math.abs(L.getVelocity()) > (Hl(S) ? S : 2500) && ($s(L.callbackAnimation), ke ? ke.progress(1) : $s(i, Re === "reverse" ? 1 : !_e, 1))) : R && s && !zt && s(L)
            }
            if (tn) {
              var Wt = w ? fe / w.duration() * (w._caScrollDist || 0) : fe;
              en(Wt + (T._isFlipped ? 1 : 0)), tn(Wt)
            }
            ge && ge(-fe / w.duration() * (w._caScrollDist || 0))
          }
        }, L.enable = function(H, re) {
          L.enabled || (L.enabled = !0, Lt(N, "resize", Gs), z || Lt(N, "scroll", Vo), ee && Lt(r, "refreshInit", ee), H !== !1 && (L.progress = ce = 0, ue = De = te = M()), re !== !1 && L.refresh())
        }, L.getTween = function(H) {
          return H && X ? X.tween : ke
        }, L.setPositions = function(H, re, q, fe) {
          if (w) {
            var ve = w.scrollTrigger,
              _e = w.duration(),
              Ce = ve.end - ve.start;
            H = ve.start + Ce * H / _e, re = ve.start + Ce * re / _e
          }
          L.refresh(!1, !1, {
            start: n0(H, q && !!L._startClamp),
            end: n0(re, q && !!L._endClamp)
          }, fe), L.update()
        }, L.adjustPinSpacing = function(H) {
          if (Mt && H) {
            var re = Mt.indexOf(C.d) + 1;
            Mt[re] = parseFloat(Mt[re]) + H + $t, Mt[1] = parseFloat(Mt[1]) + H + $t, fs(Mt)
          }
        }, L.disable = function(H, re) {
          if (L.enabled && (H !== !1 && L.revert(!0, !0), L.enabled = L.isActive = !1, re || ke && ke.pause(), _r = 0, K && (K.uncache = 1), ee && Pt(r, "refreshInit", ee), jt && (jt.pause(), X.tween && X.tween.kill() && (X.tween = 0)), !z)) {
            for (var q = Te.length; q--;)
              if (Te[q].scroller === N && Te[q] !== L) return;
            Pt(N, "resize", Gs), z || Pt(N, "scroll", Vo)
          }
        }, L.kill = function(H, re) {
          L.disable(H, re), ke && !re && ke.kill(), l && delete ih[l];
          var q = Te.indexOf(L);
          q >= 0 && Te.splice(q, 1), q === ir && Wl > 0 && ir--, q = 0, Te.forEach(function(fe) {
            return fe.scroller === L.scroller && (q = 1)
          }), q || or || (L.scroll.rec = 0), i && (i.scrollTrigger = null, H && i.revert({
            kill: !1
          }), re || i.kill()), F && [F, Z, T, he].forEach(function(fe) {
            return fe.parentNode && fe.parentNode.removeChild(fe)
          }), ga === L && (ga = 0), f && (K && (K.uncache = 1), q = 0, Te.forEach(function(fe) {
            return fe.pin === f && q++
          }), q || (K.spacer = 0)), n.onKill && n.onKill(L)
        }, Te.push(L), L.enable(!1, !1), A && A(L), i && i.add && !de) {
        var J = L.update;
        L.update = function() {
          L.update = J, x || E || L.refresh()
        }, pe.delayedCall(.01, L.update), de = .01, x = E = 0
      } else L.refresh();
      f && MS()
    }, r.register = function(n) {
      return jo || (pe = n || hy(), fy() && window.document && r.enable(), jo = Ys), jo
    }, r.defaults = function(n) {
      if (n)
        for (var i in n) El[i] = n[i];
      return El
    }, r.disable = function(n, i) {
      Ys = 0, Te.forEach(function(s) {
        return s[i ? "kill" : "disable"](n)
      }), Pt(Fe, "wheel", Vo), Pt(at, "scroll", Vo), clearInterval(vl), Pt(at, "touchcancel", vn), Pt(rt, "touchstart", vn), xl(Pt, at, "pointerdown,touchstart,mousedown", i0), xl(Pt, at, "pointerup,touchend,mouseup", o0), mc.kill(), wl(Pt);
      for (var o = 0; o < Le.length; o += 3) Cl(Pt, Le[o], Le[o + 1]), Cl(Pt, Le[o], Le[o + 2])
    }, r.enable = function() {
      if (Fe = window, at = document, an = at.documentElement, rt = at.body, pe && (yc = pe.utils.toArray, Jo = pe.utils.clamp, rh = pe.core.context || vn, Au = pe.core.suppressOverwrites || vn, Dd = Fe.history.scrollRestoration || "auto", oh = Fe.pageYOffset, pe.core.globals("ScrollTrigger", r), rt)) {
        Ys = 1, us = document.createElement("div"), us.style.height = "100vh", us.style.position = "absolute", Dy(), TS(), Ct.register(pe), r.isTouch = Ct.isTouch, di = Ct.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Lt(Fe, "wheel", Vo), oy = [Fe, at, an, rt], pe.matchMedia ? (r.matchMedia = function(l) {
          var c = pe.matchMedia(),
            u;
          for (u in l) c.add(u, l[u]);
          return c
        }, pe.addEventListener("matchMediaInit", function() {
          return Sd()
        }), pe.addEventListener("matchMediaRevert", function() {
          return by()
        }), pe.addEventListener("matchMedia", function() {
          eo(0, 1), bo("matchMedia")
        }), pe.matchMedia("(orientation: portrait)", function() {
          return Mu(), Mu
        })) : console.warn("Requires GSAP 3.11.0 or later"), Mu(), Lt(at, "scroll", Vo);
        var n = rt.style,
          i = n.borderTopStyle,
          o = pe.core.Animation.prototype,
          s, a;
        for (o.revert || Object.defineProperty(o, "revert", {
            value: function() {
              return this.time(-.01, !0)
            }
          }), n.borderTopStyle = "solid", s = Vn(rt), Tt.m = Math.round(s.top + Tt.sc()) || 0, lr.m = Math.round(s.left + lr.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), vl = setInterval(l0, 250), pe.delayedCall(.5, function() {
            return Dl = 0
          }), Lt(at, "touchcancel", vn), Lt(rt, "touchstart", vn), xl(Lt, at, "pointerdown,touchstart,mousedown", i0), xl(Lt, at, "pointerup,touchend,mouseup", o0), th = pe.utils.checkPrefix("transform"), Xl.push(th), jo = sr(), mc = pe.delayedCall(.2, eo).pause(), Wo = [at, "visibilitychange", function() {
            var l = Fe.innerWidth,
              c = Fe.innerHeight;
            at.hidden ? (e0 = l, t0 = c) : (e0 !== l || t0 !== c) && Gs()
          }, at, "DOMContentLoaded", eo, Fe, "load", eo, Fe, "resize", Gs], wl(Lt), Te.forEach(function(l) {
            return l.enable(0, 1)
          }), a = 0; a < Le.length; a += 3) Cl(Pt, Le[a], Le[a + 1]), Cl(Pt, Le[a], Le[a + 2])
      }
    }, r.config = function(n) {
      "limitCallbacks" in n && (Ru = !!n.limitCallbacks);
      var i = n.syncInterval;
      i && clearInterval(vl) || (vl = i) && setInterval(l0, i), "ignoreMobileResize" in n && (ly = r.isTouch === 1 && n.ignoreMobileResize), "autoRefreshEvents" in n && (wl(Pt) || wl(Lt, n.autoRefreshEvents || "none"), ay = (n.autoRefreshEvents + "").indexOf("resize") === -1)
    }, r.scrollerProxy = function(n, i) {
      var o = mr(n),
        s = Le.indexOf(o),
        a = mo(o);
      ~s && Le.splice(s, a ? 6 : 2), i && (a ? Tn.unshift(Fe, i, rt, i, an, i) : Tn.unshift(o, i))
    }, r.clearMatchMedia = function(n) {
      Te.forEach(function(i) {
        return i._ctx && i._ctx.query === n && i._ctx.kill(!0, !0)
      })
    }, r.isInViewport = function(n, i, o) {
      var s = (Lr(n) ? mr(n) : n).getBoundingClientRect(),
        a = s[o ? lo : co] * i || 0;
      return o ? s.right - a > 0 && s.left + a < Fe.innerWidth : s.bottom - a > 0 && s.top + a < Fe.innerHeight
    }, r.positionInViewport = function(n, i, o) {
      Lr(n) && (n = mr(n));
      var s = n.getBoundingClientRect(),
        a = s[o ? lo : co],
        l = i == null ? a / 2 : i in bc ? bc[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
      return o ? (s.left + l) / Fe.innerWidth : (s.top + l) / Fe.innerHeight
    }, r.killAll = function(n) {
      if (Te.slice(0).forEach(function(o) {
          return o.vars.id !== "ScrollSmoother" && o.kill()
        }), n !== !0) {
        var i = yo.killAll || [];
        yo = {}, i.forEach(function(o) {
          return o()
        })
      }
    }, r
  }();
Pe.version = "3.12.2";
Pe.saveStyles = function(r) {
  return r ? yc(r).forEach(function(e) {
    if (e && e.style) {
      var t = Pr.indexOf(e);
      t >= 0 && Pr.splice(t, 5), Pr.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), pe.core.getCache(e), rh())
    }
  }) : Pr
};
Pe.revert = function(r, e) {
  return Sd(!r, e)
};
Pe.create = function(r, e) {
  return new Pe(r, e)
};
Pe.refresh = function(r) {
  return r ? Gs() : (jo || Pe.register()) && eo(!0)
};
Pe.update = function(r) {
  return ++Le.cache && Qn(r === !0 ? 2 : 0)
};
Pe.clearScrollMemory = vy;
Pe.maxScroll = function(r, e) {
  return Gn(r, e ? lr : Tt)
};
Pe.getScrollFunc = function(r, e) {
  return Fi(mr(r), e ? lr : Tt)
};
Pe.getById = function(r) {
  return ih[r]
};
Pe.getAll = function() {
  return Te.filter(function(r) {
    return r.vars.id !== "ScrollSmoother"
  })
};
Pe.isScrolling = function() {
  return !!Qr
};
Pe.snapDirectional = kd;
Pe.addEventListener = function(r, e) {
  var t = yo[r] || (yo[r] = []);
  ~t.indexOf(e) || t.push(e)
};
Pe.removeEventListener = function(r, e) {
  var t = yo[r],
    n = t && t.indexOf(e);
  n >= 0 && t.splice(n, 1)
};
Pe.batch = function(r, e) {
  var t = [],
    n = {},
    i = e.interval || .016,
    o = e.batchMax || 1e9,
    s = function(c, u) {
      var d = [],
        h = [],
        f = pe.delayedCall(i, function() {
          u(d, h), d = [], h = []
        }).pause();
      return function(_) {
        d.length || f.restart(!0), d.push(_.trigger), h.push(_), o <= d.length && f.progress(1)
      }
    },
    a;
  for (a in e) n[a] = a.substr(0, 2) === "on" && ur(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
  return ur(o) && (o = o(), Lt(Pe, "refresh", function() {
    return o = e.batchMax()
  })), yc(r).forEach(function(l) {
    var c = {};
    for (a in n) c[a] = n[a];
    c.trigger = l, t.push(Pe.create(c))
  }), t
};
var d0 = function(e, t, n, i) {
    return t > i ? e(i) : t < 0 && e(0), n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1
  },
  Iu = function r(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Ct.isTouch ? " pinch-zoom" : "") : "none", e === an && r(rt, t)
  },
  Pl = {
    auto: 1,
    scroll: 1
  },
  VS = function(e) {
    var t = e.event,
      n = e.target,
      i = e.axis,
      o = (t.changedTouches ? t.changedTouches[0] : t).target,
      s = o._gsap || pe.core.getCache(o),
      a = sr(),
      l;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
      for (; o && o !== rt && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Pl[(l = Yr(o)).overflowY] || Pl[l.overflowX]));) o = o.parentNode;
      s._isScroll = o && o !== n && !mo(o) && (Pl[(l = Yr(o)).overflowY] || Pl[l.overflowX]), s._isScrollT = a
    }(s._isScroll || i === "x") && (t.stopPropagation(), t._gsapAllow = !0)
  },
  xy = function(e, t, n, i) {
    return Ct.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: i = i && VS,
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function() {
        return n && Lt(at, Ct.eventTypes[0], _0, !1, !0)
      },
      onDisable: function() {
        return Pt(at, Ct.eventTypes[0], _0, !0)
      }
    })
  },
  HS = /(input|label|select|textarea)/i,
  p0, _0 = function(e) {
    var t = HS.test(e.target.tagName);
    (t || p0) && (e._gsapAllow = !0, p0 = t)
  },
  US = function(e) {
    Ki(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var t = e,
      n = t.normalizeScrollX,
      i = t.momentum,
      o = t.allowNestedScroll,
      s = t.onRelease,
      a, l, c = mr(e.target) || an,
      u = pe.core.globals().ScrollSmoother,
      d = u && u.get(),
      h = di && (e.content && mr(e.content) || d && e.content !== !1 && !d.smooth() && d.content()),
      f = Fi(c, Tt),
      _ = Fi(c, lr),
      p = 1,
      m = (Ct.isTouch && Fe.visualViewport ? Fe.visualViewport.scale * Fe.visualViewport.width : Fe.outerWidth) / Fe.innerWidth,
      g = 0,
      y = ur(i) ? function() {
        return i(a)
      } : function() {
        return i || 2.8
      },
      b, v, D = xy(c, e.type, !0, o),
      k = function() {
        return v = !1
      },
      w = vn,
      S = vn,
      P = function() {
        l = Gn(c, Tt), S = Jo(di ? 1 : 0, l), n && (w = Jo(0, Gn(c, lr))), b = uo
      },
      C = function() {
        h._gsap.y = zs(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0
      },
      R = function() {
        if (v) {
          requestAnimationFrame(k);
          var oe = zs(a.deltaY / 2),
            $ = S(f.v - oe);
          if (h && $ !== f.v + f.offset) {
            f.offset = $ - f.v;
            var L = zs((parseFloat(h && h._gsap.y) || 0) - f.offset);
            h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + L + ", 0, 1)", h._gsap.y = L + "px", f.cacheID = Le.cache, Qn()
          }
          return !0
        }
        f.offset && C(), v = !0
      },
      N, B, z, U, V = function() {
        P(), N.isActive() && N.vars.scrollY > l && (f() > l ? N.progress(1) && f(l) : N.resetTo("scrollY", l))
      };
    return h && pe.set(h, {
      y: "+=0"
    }), e.ignoreCheck = function(Y) {
      return di && Y.type === "touchmove" && R() || p > 1.05 && Y.type !== "touchstart" || a.isGesturing || Y.touches && Y.touches.length > 1
    }, e.onPress = function() {
      v = !1;
      var Y = p;
      p = zs((Fe.visualViewport && Fe.visualViewport.scale || 1) / m), N.pause(), Y !== p && Iu(c, p > 1.01 ? !0 : n ? !1 : "x"), B = _(), z = f(), P(), b = uo
    }, e.onRelease = e.onGestureStart = function(Y, oe) {
      if (f.offset && C(), !oe) U.restart(!0);
      else {
        Le.cache++;
        var $ = y(),
          L, ee;
        n && (L = _(), ee = L + $ * .05 * -Y.velocityX / .227, $ *= d0(_, L, ee, Gn(c, lr)), N.vars.scrollX = w(ee)), L = f(), ee = L + $ * .05 * -Y.velocityY / .227, $ *= d0(f, L, ee, Gn(c, Tt)), N.vars.scrollY = S(ee), N.invalidate().duration($).play(.01), (di && N.vars.scrollY >= l || L >= l - 1) && pe.to({}, {
          onUpdate: V,
          duration: $
        })
      }
      s && s(Y)
    }, e.onWheel = function() {
      N._ts && N.pause(), sr() - g > 1e3 && (b = 0, g = sr())
    }, e.onChange = function(Y, oe, $, L, ee) {
      if (uo !== b && P(), oe && n && _(w(L[2] === oe ? B + (Y.startX - Y.x) : _() + oe - L[1])), $) {
        f.offset && C();
        var ie = ee[2] === $,
          be = ie ? z + Y.startY - Y.y : f() + $ - ee[1],
          te = S(be);
        ie && be !== te && (z += te - be), f(te)
      }($ || oe) && Qn()
    }, e.onEnable = function() {
      Iu(c, n ? !1 : "x"), Pe.addEventListener("refresh", V), Lt(Fe, "resize", V), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), D.enable()
    }, e.onDisable = function() {
      Iu(c, !0), Pt(Fe, "resize", V), Pe.removeEventListener("refresh", V), D.kill()
    }, e.lockAxis = e.lockAxis !== !1, a = new Ct(e), a.iOS = di, di && !f() && f(1), di && pe.ticker.add(vn), U = a._dc, N = pe.to(a, {
      ease: "power4",
      paused: !0,
      scrollX: n ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: wy(f, f(), function() {
          return N.pause()
        })
      },
      onUpdate: Qn,
      onComplete: U.vars.onComplete
    }), a
  };
Pe.sort = function(r) {
  return Te.sort(r || function(e, t) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
  })
};
Pe.observe = function(r) {
  return new Ct(r)
};
Pe.normalizeScroll = function(r) {
  if (typeof r > "u") return Tr;
  if (r === !0 && Tr) return Tr.enable();
  if (r === !1) return Tr && Tr.kill();
  var e = r instanceof Ct ? r : US(r);
  return Tr && Tr.target === e.target && Tr.kill(), mo(e.target) && (Tr = e), e
};
Pe.core = {
  _getVelocityProp: eh,
  _inputObserver: xy,
  _scrollers: Le,
  _proxies: Tn,
  bridge: {
    ss: function() {
      Qr || bo("scrollStart"), Qr = sr()
    },
    ref: function() {
      return zt
    }
  }
};
hy() && pe.registerPlugin(Pe);
/*!
 * strings: 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var jS = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function Cy(r) {
  var e = r.nodeType,
    t = "";
  if (e === 1 || e === 9 || e === 11) {
    if (typeof r.textContent == "string") return r.textContent;
    for (r = r.firstChild; r; r = r.nextSibling) t += Cy(r)
  } else if (e === 3 || e === 4) return r.nodeValue;
  return t
}
/*!
 * DrawSVGPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var kn, Td, vc, Ey, ky, g0, ah, Sy, Ty = function() {
    return typeof window < "u"
  },
  Py = function() {
    return kn || Ty() && (kn = window.gsap) && kn.registerPlugin && kn
  },
  WS = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  $u = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
  },
  Ji = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  qn = function(e) {
    return parseFloat(e) || 0
  },
  m0 = function(e, t) {
    var n = qn(e);
    return ~e.indexOf("%") ? n / 100 * t : n
  },
  Ll = function(e, t) {
    return qn(e.getAttribute(t))
  },
  zl = Math.sqrt,
  y0 = function(e, t, n, i, o, s) {
    return zl(Math.pow((qn(n) - qn(e)) * o, 2) + Math.pow((qn(i) - qn(t)) * s, 2))
  },
  b0 = function(e) {
    return console.warn(e)
  },
  Ly = function(e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke"
  },
  XS = 1,
  YS = function(e, t, n) {
    var i = e.indexOf(" "),
      o, s;
    return i < 0 ? (o = n !== void 0 ? n + "" : e, s = e) : (o = e.substr(0, i), s = e.substr(i + 1)), o = m0(o, t), s = m0(s, t), o > s ? [s, o] : [o, s]
  },
  Gl = function(e) {
    if (e = Td(e)[0], !e) return 0;
    var t = e.tagName.toLowerCase(),
      n = e.style,
      i = 1,
      o = 1,
      s, a, l, c, u, d, h;
    Ly(e) && (o = e.getScreenCTM(), i = zl(o.a * o.a + o.b * o.b), o = zl(o.d * o.d + o.c * o.c));
    try {
      a = e.getBBox()
    } catch {
      b0("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var f = a || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      _ = f.x,
      p = f.y,
      m = f.width,
      g = f.height;
    if ((!a || !m && !g) && $u[t] && (m = Ll(e, $u[t][0]), g = Ll(e, $u[t][1]), t !== "rect" && t !== "line" && (m *= 2, g *= 2), t === "line" && (_ = Ll(e, "x1"), p = Ll(e, "y1"), m = Math.abs(m - _), g = Math.abs(g - p))), t === "path") c = n.strokeDasharray, n.strokeDasharray = "none", s = e.getTotalLength() || 0, Ji(i) !== Ji(o) && !g0 && (g0 = 1) && b0("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), s *= (i + o) / 2, n.strokeDasharray = c;
    else if (t === "rect") s = m * 2 * i + g * 2 * o;
    else if (t === "line") s = y0(_, p, _ + m, p + g, i, o);
    else if (t === "polyline" || t === "polygon")
      for (l = e.getAttribute("points").match(WS) || [], t === "polygon" && l.push(l[0], l[1]), s = 0, u = 2; u < l.length; u += 2) s += y0(l[u - 2], l[u - 1], l[u], l[u + 1], i, o) || 0;
    else(t === "circle" || t === "ellipse") && (d = m / 2 * i, h = g / 2 * o, s = Math.PI * (3 * (d + h) - zl((3 * d + h) * (d + 3 * h))));
    return s || 0
  },
  v0 = function(e, t) {
    if (e = Td(e)[0], !e) return [0, 0];
    t || (t = Gl(e) + 1);
    var n = vc.getComputedStyle(e),
      i = n.strokeDasharray || "",
      o = qn(n.strokeDashoffset),
      s = i.indexOf(",");
    return s < 0 && (s = i.indexOf(" ")), i = s < 0 ? t : qn(i.substr(0, s)), i > t && (i = t), [-o || 0, i - o || 0]
  },
  D0 = function() {
    Ty() && (vc = window, ky = kn = Py(), Td = kn.utils.toArray, ah = kn.core.getStyleSaver, Sy = kn.core.reverting || function() {}, Ey = ((vc.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
  },
  Ay = {
    version: "3.12.2",
    name: "drawSVG",
    register: function(e) {
      kn = e, D0()
    },
    init: function(e, t, n, i, o) {
      if (!e.getBBox) return !1;
      ky || D0();
      var s = Gl(e),
        a, l, c;
      return this.styles = ah && ah(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = n, this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? (t + "").indexOf(" ") === -1 && (t = "0 " + t) : t = "0 0", a = v0(e, s), l = YS(t, s, a[0]), this._length = Ji(s), this._dash = Ji(a[1] - a[0]), this._offset = Ji(-a[0]), this._dashPT = this.add(this, "_dash", this._dash, Ji(l[1] - l[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, Ji(-l[0]), 0, 0, 0, 0, 0, 1), Ey && (c = vc.getComputedStyle(e), c.strokeLinecap !== c.strokeLinejoin && (l = qn(c.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", l, l + .01))), this._live = Ly(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this._props.push("drawSVG"), XS
    },
    render: function(e, t) {
      if (t.tween._time || !Sy()) {
        var n = t._pt,
          i = t._style,
          o, s, a, l;
        if (n) {
          for (t._live && (o = Gl(t._target), o !== t._length && (s = o / t._length, t._length = o, t._offsetPT && (t._offsetPT.s *= s, t._offsetPT.c *= s), t._dashPT ? (t._dashPT.s *= s, t._dashPT.c *= s) : t._dash *= s)); n;) n.r(e, n.d), n = n._next;
          a = t._dash || e && e !== 1 && 1e-4 || 0, o = t._length - a + .1, l = t._offset, a && l && a + Math.abs(l % t._length) > t._length - .2 && (l += l < 0 ? .1 : -.1) && (o += .1), i.strokeDashoffset = a ? l : l + .001, i.strokeDasharray = o < .2 ? "none" : a ? a + "px," + (t._nowrap ? 999999 : o) + "px" : "0px, 999999px"
        }
      } else t.styles.revert()
    },
    getLength: Gl,
    getPosition: v0
  };
Py() && kn.registerPlugin(Ay);
/*!
 * VelocityTracker: 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Dn, lh, ma, Ry, Xo, Zo, ch, Oy, Fy = function() {
    return Dn || typeof window < "u" && (Dn = window.gsap)
  },
  uh = {},
  zS = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  fh = function(e) {
    return Oy(e).id
  },
  qs = function(e) {
    return uh[fh(typeof e == "string" ? ma(e)[0] : e)]
  },
  w0 = function(e) {
    var t = Xo,
      n;
    if (e - ch >= .05)
      for (ch = e; t;) n = t.g(t.t, t.p), (n !== t.v1 || e - t.t1 > .2) && (t.v2 = t.v1, t.v1 = n, t.t2 = t.t1, t.t1 = e), t = t._next
  },
  GS = {
    deg: 360,
    rad: Math.PI * 2
  },
  Bu = function() {
    Dn = Fy(), Dn && (ma = Dn.utils.toArray, Ry = Dn.utils.getUnit, Oy = Dn.core.getCache, Zo = Dn.ticker, lh = 1)
  },
  qS = function(e, t, n, i) {
    this.t = e, this.p = t, this.g = e._gsap.get, this.rCap = GS[n || Ry(this.g(e, t))], this.v1 = this.v2 = 0, this.t1 = this.t2 = Zo.time, i && (this._next = i, i._prev = this)
  },
  tl = function() {
    function r(t, n) {
      lh || Bu(), this.target = ma(t)[0], uh[fh(this.target)] = this, this._props = {}, n && this.add(n)
    }
    r.register = function(n) {
      Dn = n, Bu()
    };
    var e = r.prototype;
    return e.get = function(n, i) {
      var o = this._props[n] || console.warn("Not tracking " + n + " velocity."),
        s, a, l;
      return s = parseFloat(i ? o.v1 : o.g(o.t, o.p)), a = s - parseFloat(o.v2), l = o.rCap, l && (a = a % l, a !== a % (l / 2) && (a = a < 0 ? a + l : a - l)), zS(a / ((i ? o.t1 : Zo.time) - o.t2))
    }, e.getAll = function() {
      var n = {},
        i = this._props,
        o;
      for (o in i) n[o] = this.get(o);
      return n
    }, e.isTracking = function(n) {
      return n in this._props
    }, e.add = function(n, i) {
      n in this._props || (Xo || (Zo.add(w0), ch = Zo.time), Xo = this._props[n] = new qS(this.target, n, i, Xo))
    }, e.remove = function(n) {
      var i = this._props[n],
        o, s;
      i && (o = i._prev, s = i._next, o && (o._next = s), s ? s._prev = o : Xo === i && (Zo.remove(w0), Xo = 0), delete this._props[n])
    }, e.kill = function(n) {
      for (var i in this._props) this.remove(i);
      n || delete uh[fh(this.target)]
    }, r.track = function(n, i, o) {
      lh || Bu();
      for (var s = [], a = ma(n), l = i.split(","), c = (o || "").split(","), u = a.length, d, h; u--;) {
        for (d = qs(a[u]) || new r(a[u]), h = l.length; h--;) d.add(l[h], c[h] || c[0]);
        s.push(d)
      }
      return s
    }, r.untrack = function(n, i) {
      var o = (i || "").split(",");
      ma(n).forEach(function(s) {
        var a = qs(s);
        a && (o.length ? o.forEach(function(l) {
          return a.remove(l)
        }) : a.kill(1))
      })
    }, r.isTracking = function(n, i) {
      var o = qs(n);
      return o && o.isTracking(i)
    }, r.getVelocity = function(n, i) {
      var o = qs(n);
      return !o || !o.isTracking(i) ? console.warn("Not tracking velocity of " + i) : o.get(i)
    }, r
  }();
tl.getByTarget = qs;
Fy() && Dn.registerPlugin(tl);
/*!
 * InertiaPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var St, My, x0, Ny, hh, ya, Iy, $y, By, Pd, Vy, ba, dh, Hy, Dc = tl.getByTarget,
  Uy = function() {
    return St || typeof window < "u" && (St = window.gsap) && St.registerPlugin && St
  },
  KS = function(e) {
    return typeof e == "string"
  },
  Ua = function(e) {
    return typeof e == "number"
  },
  Li = function(e) {
    return typeof e == "object"
  },
  ph = function(e) {
    return typeof e == "function"
  },
  QS = 1,
  jy = Array.isArray,
  JS = function(e) {
    return e
  },
  fo = 1e10,
  C0 = 1 / fo,
  Wy = .05,
  ZS = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  eT = function(e, t, n) {
    for (var i in t) !(i in e) && i !== n && (e[i] = t[i]);
    return e
  },
  tT = function r(e) {
    var t = {},
      n, i;
    for (n in e) t[n] = Li(i = e[n]) && !jy(i) ? r(i) : i;
    return t
  },
  E0 = function(e, t, n, i, o) {
    var s = t.length,
      a = 0,
      l = fo,
      c, u, d, h;
    if (Li(e)) {
      for (; s--;) {
        c = t[s], u = 0;
        for (d in e) h = c[d] - e[d], u += h * h;
        u < l && (a = s, l = u)
      }
      if ((o || fo) < fo && o < Math.sqrt(l)) return e
    } else
      for (; s--;) c = t[s], u = c - e, u < 0 && (u = -u), u < l && c >= i && c <= n && (a = s, l = u);
    return t[a]
  },
  Xy = function(e, t, n, i, o, s, a) {
    if (e.end === "auto") return e;
    var l = e.end,
      c, u;
    if (n = isNaN(n) ? fo : n, i = isNaN(i) ? -fo : i, Li(t)) {
      if (c = t.calculated ? t : (ph(l) ? l(t, a) : E0(t, l, n, i, s)) || t, !t.calculated) {
        for (u in c) t[u] = c[u];
        t.calculated = !0
      }
      c = c[o]
    } else c = ph(l) ? l(t, a) : jy(l) ? E0(t, l, n, i, s) : parseFloat(l);
    return c > n ? c = n : c < i && (c = i), {
      max: c,
      min: c,
      unitFactor: e.unitFactor
    }
  },
  wc = function(e, t, n) {
    return isNaN(e[t]) ? n : +e[t]
  },
  Ld = function(e, t) {
    return t * Wy * e / Pd
  },
  k0 = function(e, t, n) {
    return Math.abs((t - e) * Pd / n / Wy)
  },
  Yy = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
  },
  zy = function(e, t, n, i) {
    if (t.linkedProps) {
      var o = t.linkedProps.split(","),
        s = {},
        a, l, c, u, d, h;
      for (a = 0; a < o.length; a++) l = o[a], c = t[l], c && (Ua(c.velocity) ? u = c.velocity : (d = d || Dc(e), u = d && d.isTracking(l) ? d.get(l) : 0), h = Math.abs(u / wc(c, "resistance", i)), s[l] = parseFloat(n(e, l)) + Ld(u, h));
      return s
    }
  },
  rT = function(e, t, n, i, o, s) {
    if (n === void 0 && (n = 10), i === void 0 && (i = .2), o === void 0 && (o = 1), s === void 0 && (s = 0), KS(e) && (e = Ny(e)[0]), !e) return 0;
    var a = 0,
      l = fo,
      c = t.inertia || t,
      u = By(e).get,
      d = wc(c, "resistance", ya.resistance),
      h, f, _, p, m, g, y, b, v, D;
    D = zy(e, c, u, d);
    for (h in c) Yy[h] || (f = c[h], Li(f) || (b = b || Dc(e), b && b.isTracking(h) ? f = Ua(f) ? {
      velocity: f
    } : {
      velocity: b.get(h)
    } : (p = +f || 0, _ = Math.abs(p / d))), Li(f) && (Ua(f.velocity) ? p = f.velocity : (b = b || Dc(e), p = b && b.isTracking(h) ? b.get(h) : 0), _ = Vy(i, n, Math.abs(p / wc(f, "resistance", d))), m = parseFloat(u(e, h)) || 0, g = m + Ld(p, _), "end" in f && (f = Xy(f, D && h in D ? D : g, f.max, f.min, h, c.radius, p), s && (ba === t && (ba = c = tT(t)), c[h] = eT(f, c[h], "end"))), "max" in f && g > +f.max + C0 ? (v = f.unitFactor || ya.unitFactors[h] || 1, y = m > f.max && f.min !== f.max || p * v > -15 && p * v < 45 ? i + (n - i) * .1 : k0(m, f.max, p), y + o < l && (l = y + o)) : "min" in f && g < +f.min - C0 && (v = f.unitFactor || ya.unitFactors[h] || 1, y = m < f.min && f.min !== f.max || p * v > -45 && p * v < 15 ? i + (n - i) * .1 : k0(m, f.min, p), y + o < l && (l = y + o)), y > a && (a = y)), _ > a && (a = _));
    return a > l && (a = l), a > n ? n : a < i ? i : a
  },
  S0 = function() {
    St = Uy(), St && (x0 = St.parseEase, Ny = St.utils.toArray, Iy = St.utils.getUnit, By = St.core.getCache, Vy = St.utils.clamp, dh = St.core.getStyleSaver, Hy = St.core.reverting || function() {}, hh = x0("power3"), Pd = hh(.05), $y = St.core.PropTween, St.config({
      resistance: 100,
      unitFactors: {
        time: 1e3,
        totalTime: 1e3,
        progress: 1e3,
        totalProgress: 1e3
      }
    }), ya = St.config(), St.registerPlugin(tl), My = 1)
  },
  Ad = {
    version: "3.12.2",
    name: "inertia",
    register: function(e) {
      St = e, S0()
    },
    init: function(e, t, n, i, o) {
      My || S0();
      var s = Dc(e);
      if (t === "auto") {
        if (!s) {
          console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
          return
        }
        t = s.getAll()
      }
      this.styles = dh && typeof e.style == "object" && dh(e), this.target = e, this.tween = n, ba = t;
      var a = e._gsap,
        l = a.get,
        c = t.duration,
        u = Li(c),
        d = t.preventOvershoot || u && c.overshoot === 0,
        h = wc(t, "resistance", ya.resistance),
        f = Ua(c) ? c : rT(e, t, u && c.max || 10, u && c.min || .2, u && "overshoot" in c ? +c.overshoot : d ? 0 : 1, !0),
        _, p, m, g, y, b, v, D, k;
      t = ba, ba = 0, k = zy(e, t, l, h);
      for (_ in t) Yy[_] || (p = t[_], ph(p) && (p = p(i, e, o)), Ua(p) ? y = p : Li(p) && !isNaN(p.velocity) ? y = +p.velocity : s && s.isTracking(_) ? y = s.get(_) : console.warn("ERROR: No velocity was defined for " + e + " property: " + _), b = Ld(y, f), D = 0, m = l(e, _), g = Iy(m), m = parseFloat(m), Li(p) && (v = m + b, "end" in p && (p = Xy(p, k && _ in k ? k : v, p.max, p.min, _, t.radius, y)), "max" in p && +p.max < v ? d || p.preventOvershoot ? b = p.max - m : D = p.max - m - b : "min" in p && +p.min > v && (d || p.preventOvershoot ? b = p.min - m : D = p.min - m - b)), this._props.push(_), this.styles && this.styles.save(_), this._pt = new $y(this._pt, e, _, m, 0, JS, 0, a.set(e, _, this)), this._pt.u = g || 0, this._pt.c1 = b, this._pt.c2 = D);
      return n.duration(f), QS
    },
    render: function(e, t) {
      var n = t._pt;
      if (e = hh(t.tween._time / t.tween._dur), e || !Hy())
        for (; n;) n.set(n.t, n.p, ZS(n.s + n.c1 * e + n.c2 * e * e) + n.u, n.d, e), n = n._next;
      else t.styles.revert()
    }
  };
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r) {
  return Ad[r] = tl[r]
});
Uy() && St.registerPlugin(Ad);
/*!
 * SplitText: 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var es, _h, Gy, Bs, qy, qc, nT = /(?:\r|\n|\t\t)/g,
  iT = /(?:\s\s+)/g,
  Ky = function(e) {
    es = document, _h = window, Bs = Bs || e || _h.gsap || console.warn("Please gsap.registerPlugin(SplitText)"), Bs && (qc = Bs.utils.toArray, qy = Bs.core.context || function() {}, Gy = 1)
  },
  Qy = function(e) {
    return _h.getComputedStyle(e)
  },
  Rd = function(e) {
    return e.position === "absolute" || e.absolute === !0
  },
  oT = function(e, t) {
    for (var n = t.length, i; --n > -1;)
      if (i = t[n], e.substr(0, i.length) === i) return i.length
  },
  sT = " style='position:relative;display:inline-block;'",
  T0 = function(e, t) {
    e === void 0 && (e = "");
    var n = ~e.indexOf("++"),
      i = 1;
    return n && (e = e.split("++").join("")),
      function() {
        return "<" + t + sT + (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
      }
  },
  Jy = function r(e, t, n) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
      for (e = e.firstChild; e; e = e.nextSibling) r(e, t, n);
    else(i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(t).join(n))
  },
  Vu = function(e, t) {
    for (var n = t.length; --n > -1;) e.push(t[n])
  },
  P0 = function(e, t, n) {
    for (var i; e && e !== t;) {
      if (i = e._next || e.nextSibling, i) return i.textContent.charAt(0) === n;
      e = e.parentNode || e._parent
    }
  },
  aT = function r(e) {
    var t = qc(e.childNodes),
      n = t.length,
      i, o;
    for (i = 0; i < n; i++) o = t[i], o._isSplit ? r(o) : i && o.previousSibling && o.previousSibling.nodeType === 3 ? (o.previousSibling.nodeValue += o.nodeType === 3 ? o.nodeValue : o.firstChild.nodeValue, e.removeChild(o)) : o.nodeType !== 3 && (e.insertBefore(o.firstChild, o), e.removeChild(o))
  },
  yn = function(e, t) {
    return parseFloat(t[e]) || 0
  },
  lT = function(e, t, n, i, o, s, a) {
    var l = Qy(e),
      c = yn("paddingLeft", l),
      u = -999,
      d = yn("borderBottomWidth", l) + yn("borderTopWidth", l),
      h = yn("borderLeftWidth", l) + yn("borderRightWidth", l),
      f = yn("paddingTop", l) + yn("paddingBottom", l),
      _ = yn("paddingLeft", l) + yn("paddingRight", l),
      p = yn("fontSize", l) * (t.lineThreshold || .2),
      m = l.textAlign,
      g = [],
      y = [],
      b = [],
      v = t.wordDelimiter || " ",
      D = t.tag ? t.tag : t.span ? "span" : "div",
      k = t.type || t.split || "chars,words,lines",
      w = o && ~k.indexOf("lines") ? [] : null,
      S = ~k.indexOf("words"),
      P = ~k.indexOf("chars"),
      C = Rd(t),
      R = t.linesClass,
      N = ~(R || "").indexOf("++"),
      B = [],
      z = l.display === "flex",
      U = e.style.display,
      V, Y, oe, $, L, ee, ie, be, te, ne, ce, M;
    for (N && (R = R.split("++").join("")), z && (e.style.display = "block"), Y = e.getElementsByTagName("*"), oe = Y.length, L = [], V = 0; V < oe; V++) L[V] = Y[V];
    if (w || C)
      for (V = 0; V < oe; V++) $ = L[V], ee = $.parentNode === e, (ee || C || P && !S) && (M = $.offsetTop, w && ee && Math.abs(M - u) > p && ($.nodeName !== "BR" || V === 0) && (ie = [], w.push(ie), u = M), C && ($._x = $.offsetLeft, $._y = M, $._w = $.offsetWidth, $._h = $.offsetHeight), w && (($._isSplit && ee || !P && ee || S && ee || !S && $.parentNode.parentNode === e && !$.parentNode._isSplit) && (ie.push($), $._x -= c, P0($, e, v) && ($._wordEnd = !0)), $.nodeName === "BR" && ($.nextSibling && $.nextSibling.nodeName === "BR" || V === 0) && w.push([])));
    for (V = 0; V < oe; V++) {
      if ($ = L[V], ee = $.parentNode === e, $.nodeName === "BR") {
        w || C ? ($.parentNode && $.parentNode.removeChild($), L.splice(V--, 1), oe--) : S || e.appendChild($);
        continue
      }
      if (C && (te = $.style, !S && !ee && ($._x += $.parentNode._x, $._y += $.parentNode._y), te.left = $._x + "px", te.top = $._y + "px", te.position = "absolute", te.display = "block", te.width = $._w + 1 + "px", te.height = $._h + "px"), !S && P)
        if ($._isSplit)
          for ($._next = Y = $.nextSibling, $.parentNode.appendChild($); Y && Y.nodeType === 3 && Y.textContent === " ";) $._next = Y.nextSibling, $.parentNode.appendChild(Y), Y = Y.nextSibling;
        else $.parentNode._isSplit ? ($._parent = $.parentNode, !$.previousSibling && $.firstChild && ($.firstChild._isFirst = !0), $.nextSibling && $.nextSibling.textContent === " " && !$.nextSibling.nextSibling && B.push($.nextSibling), $._next = $.nextSibling && $.nextSibling._isFirst ? null : $.nextSibling, $.parentNode.removeChild($), L.splice(V--, 1), oe--) : ee || (M = !$.nextSibling && P0($.parentNode, e, v), $.parentNode._parent && $.parentNode._parent.appendChild($), M && $.parentNode.appendChild(es.createTextNode(" ")), D === "span" && ($.style.display = "inline"), g.push($));
      else $.parentNode._isSplit && !$._isSplit && $.innerHTML !== "" ? y.push($) : P && !$._isSplit && (D === "span" && ($.style.display = "inline"), g.push($))
    }
    for (V = B.length; --V > -1;) B[V].parentNode.removeChild(B[V]);
    if (w) {
      for (C && (ne = es.createElement(D), e.appendChild(ne), ce = ne.offsetWidth + "px", M = ne.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(ne)), te = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
      for (be = v === " " && (!C || !S && !P), V = 0; V < w.length; V++) {
        for (ie = w[V], ne = es.createElement(D), ne.style.cssText = "display:block;text-align:" + m + ";position:" + (C ? "absolute;" : "relative;"), R && (ne.className = R + (N ? V + 1 : "")), b.push(ne), oe = ie.length, Y = 0; Y < oe; Y++) ie[Y].nodeName !== "BR" && ($ = ie[Y], ne.appendChild($), be && $._wordEnd && ne.appendChild(es.createTextNode(" ")), C && (Y === 0 && (ne.style.top = $._y + "px", ne.style.left = c + M + "px"), $.style.top = "0px", M && ($.style.left = $._x - M + "px")));
        oe === 0 ? ne.innerHTML = "&nbsp;" : !S && !P && (aT(ne), Jy(ne, " ", " ")), C && (ne.style.width = ce, ne.style.height = $._h + "px"), e.appendChild(ne)
      }
      e.style.cssText = te
    }
    C && (a > e.clientHeight && (e.style.height = a - f + "px", e.clientHeight < a && (e.style.height = a + d + "px")), s > e.clientWidth && (e.style.width = s - _ + "px", e.clientWidth < s && (e.style.width = s + h + "px"))), z && (U ? e.style.display = U : e.style.removeProperty("display")), Vu(n, g), S && Vu(i, y), Vu(o, b)
  },
  cT = function(e, t, n, i) {
    var o = t.tag ? t.tag : t.span ? "span" : "div",
      s = t.type || t.split || "chars,words,lines",
      a = ~s.indexOf("chars"),
      l = Rd(t),
      c = t.wordDelimiter || " ",
      u = c !== " " ? "" : l ? "&#173; " : " ",
      d = "</" + o + ">",
      h = 1,
      f = t.specialChars ? typeof t.specialChars == "function" ? t.specialChars : oT : null,
      _, p, m, g, y, b, v, D, k = es.createElement("div"),
      w = e.parentNode;
    for (w.insertBefore(k, e), k.textContent = e.nodeValue, w.removeChild(e), e = k, _ = Cy(e), v = _.indexOf("<") !== -1, t.reduceWhiteSpace !== !1 && (_ = _.replace(iT, " ").replace(nT, "")), v && (_ = _.split("<").join("{{LT}}")), y = _.length, p = (_.charAt(0) === " " ? u : "") + n(), m = 0; m < y; m++)
      if (b = _.charAt(m), f && (D = f(_.substr(m), t.specialChars))) b = _.substr(m, D || 1), p += a && b !== " " ? i() + b + "</" + o + ">" : b, m += D - 1;
      else if (b === c && _.charAt(m - 1) !== c && m) {
      for (p += h ? d : "", h = 0; _.charAt(m + 1) === c;) p += u, m++;
      m === y - 1 ? p += u : _.charAt(m + 1) !== ")" && (p += u + n(), h = 1)
    } else b === "{" && _.substr(m, 6) === "{{LT}}" ? (p += a ? i() + "{{LT}}</" + o + ">" : "{{LT}}", m += 5) : b.charCodeAt(0) >= 55296 && b.charCodeAt(0) <= 56319 || _.charCodeAt(m + 1) >= 65024 && _.charCodeAt(m + 1) <= 65039 ? (g = ((_.substr(m, 12).split(jS) || [])[1] || "").length || 2, p += a && b !== " " ? i() + _.substr(m, g) + "</" + o + ">" : _.substr(m, g), m += g - 1) : p += a && b !== " " ? i() + b + "</" + o + ">" : b;
    e.outerHTML = p + (h ? d : ""), v && Jy(w, "{{LT}}", "<")
  },
  uT = function r(e, t, n, i) {
    var o = qc(e.childNodes),
      s = o.length,
      a = Rd(t),
      l, c;
    if (e.nodeType !== 3 || s > 1) {
      for (t.absolute = !1, l = 0; l < s; l++) c = o[l], c._next = c._isFirst = c._parent = c._wordEnd = null, (c.nodeType !== 3 || /\S+/.test(c.nodeValue)) && (a && c.nodeType !== 3 && Qy(c).display === "inline" && (c.style.display = "inline-block", c.style.position = "relative"), c._isSplit = !0, r(c, t, n, i));
      t.absolute = a, e._isSplit = !0;
      return
    }
    cT(e, t, n, i)
  },
  oi = function() {
    function r(t, n) {
      Gy || Ky(), this.elements = qc(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = n || {}, qy(this), this.split(n)
    }
    var e = r.prototype;
    return e.split = function(n) {
      this.isSplit && this.revert(), this.vars = n = n || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var i = this.elements.length, o = n.tag ? n.tag : n.span ? "span" : "div", s = T0(n.wordsClass, o), a = T0(n.charsClass, o), l, c, u; --i > -1;) u = this.elements[i], this._originals[i] = u.innerHTML, l = u.clientHeight, c = u.clientWidth, uT(u, n, s, a), lT(u, n, this.chars, this.words, this.lines, c, l);
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, e.revert = function() {
      var n = this._originals;
      if (!n) throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function(i, o) {
        return i.innerHTML = n[o]
      }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, r.create = function(n, i) {
      return new r(n, i)
    }, r
  }();
oi.version = "3.12.2";
oi.register = Ky;
var _t = xr.registerPlugin(C1) || xr;
_t.core.Tween;
const fT = Jt(() => {
  _t.registerPlugin(Pe, oi, zc, Ma, Ay, Ad, Za, el), Ma.create("app-ease", "0.16, 1.0, 0.32, 1.0"), _t.defaults({
    ease: "app-ease"
  })
});

function gh() {
  return gh = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n])
    }
    return r
  }, gh.apply(this, arguments)
}

function xc(r, e, t) {
  return Math.max(r, Math.min(e, t))
}
class hT {
  advance(e) {
    var t;
    if (!this.isRunning) return;
    let n = !1;
    if (this.lerp) this.value = (i = this.value, o = this.to, (1 - (s = 1 - Math.exp(-60 * this.lerp * e))) * i + s * o), Math.round(this.value) === this.to && (this.value = this.to, n = !0);
    else {
      this.currentTime += e;
      const a = xc(0, this.currentTime / this.duration, 1);
      n = a >= 1;
      const l = n ? 1 : this.easing(a);
      this.value = this.from + (this.to - this.from) * l
    }
    var i, o, s;
    (t = this.onUpdate) == null || t.call(this, this.value, n), n && this.stop()
  }
  stop() {
    this.isRunning = !1
  }
  fromTo(e, t, {
    lerp: n = .1,
    duration: i = 1,
    easing: o = l => l,
    onStart: s,
    onUpdate: a
  }) {
    this.from = this.value = e, this.to = t, this.lerp = n, this.duration = i, this.easing = o, this.currentTime = 0, this.isRunning = !0, s == null || s(), this.onUpdate = a
  }
}
class dT {
  constructor({
    wrapper: e,
    content: t,
    autoResize: n = !0
  } = {}) {
    if (this.resize = () => {
        this.onWrapperResize(), this.onContentResize()
      }, this.onWrapperResize = () => {
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
      }, this.onContentResize = () => {
        this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth
      }, this.wrapper = e, this.content = t, n) {
      const i = function(o, s) {
        let a;
        return function() {
          let l = arguments,
            c = this;
          clearTimeout(a), a = setTimeout(function() {
            o.apply(c, l)
          }, 250)
        }
      }(this.resize);
      this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(i), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(i), this.contentResizeObserver.observe(this.content)
    }
    this.resize()
  }
  destroy() {
    var e, t;
    (e = this.wrapperResizeObserver) == null || e.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect()
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    }
  }
}
class Zy {
  constructor() {
    this.events = {}
  }
  emit(e, ...t) {
    let n = this.events[e] || [];
    for (let i = 0, o = n.length; i < o; i++) n[i](...t)
  }
  on(e, t) {
    var n;
    return (n = this.events[e]) != null && n.push(t) || (this.events[e] = [t]), () => {
      var i;
      this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(o => t !== o)
    }
  }
  off(e, t) {
    var n;
    this.events[e] = (n = this.events[e]) == null ? void 0 : n.filter(i => t !== i)
  }
  destroy() {
    this.events = {}
  }
}
class pT {
  constructor(e, {
    wheelMultiplier: t = 1,
    touchMultiplier: n = 2,
    normalizeWheel: i = !1
  }) {
    this.onTouchStart = o => {
      const {
        clientX: s,
        clientY: a
      } = o.targetTouches ? o.targetTouches[0] : o;
      this.touchStart.x = s, this.touchStart.y = a, this.lastDelta = {
        x: 0,
        y: 0
      }
    }, this.onTouchMove = o => {
      const {
        clientX: s,
        clientY: a
      } = o.targetTouches ? o.targetTouches[0] : o, l = -(s - this.touchStart.x) * this.touchMultiplier, c = -(a - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = s, this.touchStart.y = a, this.lastDelta = {
        x: l,
        y: c
      }, this.emitter.emit("scroll", {
        deltaX: l,
        deltaY: c,
        event: o
      })
    }, this.onTouchEnd = o => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: o
      })
    }, this.onWheel = o => {
      let {
        deltaX: s,
        deltaY: a
      } = o;
      this.normalizeWheel && (s = xc(-100, s, 100), a = xc(-100, a, 100)), s *= this.wheelMultiplier, a *= this.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: s,
        deltaY: a,
        event: o
      })
    }, this.element = e, this.wheelMultiplier = t, this.touchMultiplier = n, this.normalizeWheel = i, this.touchStart = {
      x: null,
      y: null
    }, this.emitter = new Zy, this.element.addEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.element.addEventListener("touchstart", this.onTouchStart, {
      passive: !1
    }), this.element.addEventListener("touchmove", this.onTouchMove, {
      passive: !1
    }), this.element.addEventListener("touchend", this.onTouchEnd, {
      passive: !1
    })
  }
  on(e, t) {
    return this.emitter.on(e, t)
  }
  destroy() {
    this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
      passive: !1
    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
      passive: !1
    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
      passive: !1
    })
  }
}
class _T {
  constructor({
    wrapper: e = window,
    content: t = document.documentElement,
    wheelEventsTarget: n = e,
    eventsTarget: i = n,
    smoothWheel: o = !0,
    smoothTouch: s = !1,
    syncTouch: a = !1,
    syncTouchLerp: l = .1,
    __iosNoInertiaSyncTouchLerp: c = .4,
    touchInertiaMultiplier: u = 35,
    duration: d,
    easing: h = D => Math.min(1, 1.001 - Math.pow(2, -10 * D)),
    lerp: f = !d && .1,
    infinite: _ = !1,
    orientation: p = "vertical",
    gestureOrientation: m = "vertical",
    touchMultiplier: g = 1,
    wheelMultiplier: y = 1,
    normalizeWheel: b = !1,
    autoResize: v = !0
  } = {}) {
    this.onVirtualScroll = ({
      deltaX: D,
      deltaY: k,
      event: w
    }) => {
      if (w.ctrlKey) return;
      const S = w.type.includes("touch"),
        P = w.type.includes("wheel");
      if (this.options.gestureOrientation === "both" && D === 0 && k === 0 || this.options.gestureOrientation === "vertical" && k === 0 || this.options.gestureOrientation === "horizontal" && D === 0 || S && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && k <= 0) return;
      let C = w.composedPath();
      if (C = C.slice(0, C.indexOf(this.rootElement)), C.find(z => {
          var U;
          return (z.hasAttribute == null ? void 0 : z.hasAttribute("data-lenis-prevent")) || S && (z.hasAttribute == null ? void 0 : z.hasAttribute("data-lenis-prevent-touch")) || P && (z.hasAttribute == null ? void 0 : z.hasAttribute("data-lenis-prevent-wheel")) || ((U = z.classList) == null ? void 0 : U.contains("lenis"))
        })) return;
      if (this.isStopped || this.isLocked) return void w.preventDefault();
      if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && S || this.options.smoothWheel && P, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
      w.preventDefault();
      let R = k;
      this.options.gestureOrientation === "both" ? R = Math.abs(k) > Math.abs(D) ? k : D : this.options.gestureOrientation === "horizontal" && (R = D);
      const N = S && this.options.syncTouch,
        B = S && w.type === "touchend" && Math.abs(R) > 1;
      B && (R = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + R, gh({
        programmatic: !1
      }, N && {
        lerp: B ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
      }))
    }, this.onScroll = () => {
      if (!this.isScrolling) {
        const D = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - D), this.emit()
      }
    }, window.lenisVersion = "1.0.27", e !== document.documentElement && e !== document.body || (e = window), this.options = {
      wrapper: e,
      content: t,
      wheelEventsTarget: n,
      eventsTarget: i,
      smoothWheel: o,
      smoothTouch: s,
      syncTouch: a,
      syncTouchLerp: l,
      __iosNoInertiaSyncTouchLerp: c,
      touchInertiaMultiplier: u,
      duration: d,
      easing: h,
      lerp: f,
      infinite: _,
      gestureOrientation: m,
      orientation: p,
      touchMultiplier: g,
      wheelMultiplier: y,
      normalizeWheel: b,
      autoResize: v
    }, this.animate = new hT, this.emitter = new Zy, this.dimensions = new dT({
      wrapper: e,
      content: t,
      autoResize: v
    }), this.toggleClass("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = a || o || s, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onScroll, {
      passive: !1
    }), this.virtualScroll = new pT(i, {
      touchMultiplier: g,
      wheelMultiplier: y,
      normalizeWheel: b
    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
  }
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, {
      passive: !1
    }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", !1), this.toggleClass("lenis-smooth", !1), this.toggleClass("lenis-scrolling", !1), this.toggleClass("lenis-stopped", !1), this.toggleClass("lenis-locked", !1)
  }
  on(e, t) {
    return this.emitter.on(e, t)
  }
  off(e, t) {
    return this.emitter.off(e, t)
  }
  setScroll(e) {
    this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
  }
  resize() {
    this.dimensions.resize()
  }
  emit() {
    this.emitter.emit("scroll", this)
  }
  reset() {
    this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop()
  }
  start() {
    this.isStopped = !1, this.reset()
  }
  stop() {
    this.isStopped = !0, this.animate.stop(), this.reset()
  }
  raf(e) {
    const t = e - (this.time || e);
    this.time = e, this.animate.advance(.001 * t)
  }
  scrollTo(e, {
    offset: t = 0,
    immediate: n = !1,
    lock: i = !1,
    duration: o = this.options.duration,
    easing: s = this.options.easing,
    lerp: a = !o && this.options.lerp,
    onComplete: l = null,
    force: c = !1,
    programmatic: u = !0
  } = {}) {
    if (!this.isStopped && !this.isLocked || c) {
      if (["top", "left", "start"].includes(e)) e = 0;
      else if (["bottom", "right", "end"].includes(e)) e = this.limit;
      else {
        var d;
        let h;
        if (typeof e == "string" ? h = document.querySelector(e) : (d = e) != null && d.nodeType && (h = e), h) {
          if (this.options.wrapper !== window) {
            const _ = this.options.wrapper.getBoundingClientRect();
            t -= this.isHorizontal ? _.left : _.top
          }
          const f = h.getBoundingClientRect();
          e = (this.isHorizontal ? f.left : f.top) + this.animatedScroll
        }
      }
      if (typeof e == "number") {
        if (e += t, e = Math.round(e), this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : e = xc(0, e, this.limit), n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(l == null || l(this));
        if (!u) {
          if (e === this.targetScroll) return;
          this.targetScroll = e
        }
        this.animate.fromTo(this.animatedScroll, e, {
          duration: o,
          easing: s,
          lerp: a,
          onStart: () => {
            i && (this.isLocked = !0), this.isScrolling = !0
          },
          onUpdate: (h, f) => {
            this.isScrolling = !0, this.velocity = h - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = h, this.setScroll(this.scroll), u && (this.targetScroll = h), f || this.emit(), f && requestAnimationFrame(() => {
              this.reset(), this.emit(), l == null || l(this)
            })
          }
        })
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window ? this.options.content : this.options.wrapper
  }
  get limit() {
    return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal"
  }
  get actualScroll() {
    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
  }
  get scroll() {
    return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll;
    var e
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit
  }
  get isSmooth() {
    return this.__isSmooth
  }
  set isSmooth(e) {
    this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClass("lenis-smooth", e))
  }
  get isScrolling() {
    return this.__isScrolling
  }
  set isScrolling(e) {
    this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClass("lenis-scrolling", e))
  }
  get isStopped() {
    return this.__isStopped
  }
  set isStopped(e) {
    this.__isStopped !== e && (this.__isStopped = e, this.toggleClass("lenis-stopped", e))
  }
  get isLocked() {
    return this.__isLocked
  }
  set isLocked(e) {
    this.__isLocked !== e && (this.__isLocked = e, this.toggleClass("lenis-locked", e))
  }
  get className() {
    let e = "lenis";
    return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
  }
  toggleClass(e, t) {
    this.rootElement.classList.toggle(e, t), this.emitter.emit("className change", this)
  }
}
const gT = Jt(() => {
    const r = new _T;
    return _t.ticker.add(e => {
      r.raf(e * 1e3)
    }), _t.ticker.lagSmoothing(0), {
      provide: {
        lenis: r
      }
    }
  }),
  mT = [dD, _D, ex, tx, rx, nx, ix, ox, sx, cx, ux, bE, vE, DE, fT, gT],
  Br = (r, e) => {
    const t = r.__vccOpts || r;
    for (const [n, i] of e) t[n] = i;
    return t
  },
  yT = {},
  bT = {
    class: "grid"
  };

function vT(r, e) {
  return ye(), Ie("div", bT)
}
const DT = Br(yT, [
    ["render", vT]
  ]),
  wT = et({
    props: {
      vnode: {
        type: Object,
        required: !0
      },
      route: {
        type: Object,
        required: !0
      },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean
    },
    setup(r) {
      const e = r.renderKey,
        t = r.route,
        n = {};
      for (const i in r.route) Object.defineProperty(n, i, {
        get: () => e === r.renderKey ? r.route[i] : t[i]
      });
      return to(Ya, Cc(n)), () => qt(r.vnode, {
        ref: r.vnodeRef
      })
    }
  }),
  xT = et({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
      name: {
        type: String
      },
      transition: {
        type: [Boolean, Object],
        default: void 0
      },
      keepalive: {
        type: [Boolean, Object],
        default: void 0
      },
      route: {
        type: Object
      },
      pageKey: {
        type: [Function, String],
        default: null
      }
    },
    setup(r, {
      attrs: e,
      expose: t
    }) {
      const n = Ve(),
        i = we(),
        o = fr(Ya, null);
      let s;
      t({
        pageRef: i
      });
      const a = fr(tg, null);
      let l;
      const c = n.deferHydration();
      if (n.isHydrating) {
        const u = n.hooks.hookOnce("app:error", c);
        Zt().beforeEach(u)
      }
      return r.pageKey && Ir(() => r.pageKey, (u, d) => {
        u !== d && n.callHook("page:loading:start")
      }), () => qt(Fg, {
        name: r.name,
        route: r.route,
        ...e
      }, {
        default: u => {
          const d = ET(o, u.route, u.Component),
            h = o && o.matched.length === u.route.matched.length;
          if (!u.Component) {
            if (l && !h) return l;
            c();
            return
          }
          if (l && a && !a.isCurrent(u.route)) return l;
          if (d && o && (!a || a != null && a.isCurrent(o))) return h ? l : null;
          const f = sf(u, r.pageKey);
          !n.isHydrating && !kT(o, u.route, u.Component) && s === f && n.callHook("page:loading:end"), s = f;
          const _ = !!(r.transition ?? u.route.meta.pageTransition ?? tf),
            p = _ && CT([r.transition, u.route.meta.pageTransition, tf, {
              onAfterLeave: () => {
                n.callHook("page:transition:finish", u.Component)
              }
            }].filter(Boolean)),
            m = r.keepalive ?? u.route.meta.keepalive ?? nD;
          return l = Mg(I0, _ && p, bw(m, qt(wh, {
            suspensible: !0,
            onPending: () => n.callHook("page:start", u.Component),
            onResolve: () => {
              vo(() => n.callHook("page:finish", u.Component).then(() => n.callHook("page:loading:end")).finally(c))
            }
          }, {
            default: () => {
              const g = qt(wT, {
                key: f || void 0,
                vnode: u.Component,
                route: u.route,
                renderKey: f || void 0,
                trackRootNodes: _,
                vnodeRef: i
              });
              return m && (g.type.name = u.Component.type.name || u.Component.type.__name || "RouteProvider"), g
            }
          }))).default(), l
        }
      })
    }
  });

function CT(r) {
  const e = r.map(t => ({
    ...t,
    onAfterLeave: t.onAfterLeave ? Oh(t.onAfterLeave) : void 0
  }));
  return Z0(...e)
}

function ET(r, e, t) {
  if (!r) return !1;
  const n = e.matched.findIndex(i => {
    var o;
    return ((o = i.components) == null ? void 0 : o.default) === (t == null ? void 0 : t.type)
  });
  return !n || n === -1 ? !1 : e.matched.slice(0, n).some((i, o) => {
    var s, a, l;
    return ((s = i.components) == null ? void 0 : s.default) !== ((l = (a = r.matched[o]) == null ? void 0 : a.components) == null ? void 0 : l.default)
  }) || t && sf({
    route: e,
    Component: t
  }) !== sf({
    route: r,
    Component: t
  })
}

function kT(r, e, t) {
  return r ? e.matched.findIndex(i => {
    var o;
    return ((o = i.components) == null ? void 0 : o.default) === (t == null ? void 0 : t.type)
  }) < e.matched.length - 1 : !1
}
const ST = et({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
      name: String,
      layoutProps: Object
    },
    async setup(r, e) {
      const t = await mi[r.name]().then(n => n.default || n);
      return () => qt(t, r.layoutProps, e.slots)
    }
  }),
  TT = et({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
      name: {
        type: [String, Boolean, Object],
        default: null
      },
      fallback: {
        type: [String, Object],
        default: null
      }
    },
    setup(r, e) {
      const t = Ve(),
        n = fr(Ya),
        i = n === ni() ? Rc() : n,
        o = Se(() => {
          let l = se(r.name) ?? i.meta.layout ?? "default";
          return l && !(l in mi) && r.fallback && (l = se(r.fallback)), l
        }),
        s = we();
      e.expose({
        layoutRef: s
      });
      const a = t.deferHydration();
      if (t.isHydrating) {
        const l = t.hooks.hookOnce("app:error", a);
        Zt().beforeEach(l)
      }
      return () => {
        const l = o.value && o.value in mi,
          c = i.meta.layoutTransition ?? rD;
        return Mg(I0, l && c, {
          default: () => qt(wh, {
            suspensible: !0,
            onResolve: () => {
              vo(a)
            }
          }, {
            default: () => qt(PT, {
              layoutProps: d2(e.attrs, {
                ref: s
              }),
              key: o.value || void 0,
              name: o.value,
              shouldProvide: !r.name,
              hasTransition: !!c
            }, e.slots)
          })
        }).default()
      }
    }
  }),
  PT = et({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
      name: {
        type: [String, Boolean]
      },
      layoutProps: {
        type: Object
      },
      hasTransition: {
        type: Boolean
      },
      shouldProvide: {
        type: Boolean
      }
    },
    setup(r, e) {
      const t = r.name;
      return r.shouldProvide && to(tg, {
        isCurrent: n => t === (n.meta.layout ?? "default")
      }), () => {
        var n, i;
        return !t || typeof t == "string" && !(t in mi) ? (i = (n = e.slots).default) == null ? void 0 : i.call(n) : qt(ST, {
          key: t,
          layoutProps: r.layoutProps,
          name: t
        }, e.slots)
      }
    }
  }),
  LT = et({
    __name: "app",
    setup(r) {
      return An("feedback-form-popup", () => !1), An("join-us-form-popup", () => !1), (e, t) => {
        const n = DT,
          i = xT,
          o = TT;
        return ye(), Ie("div", null, [Ye(n), Ye(o, null, {
          default: Ln(() => [Ye(i)]),
          _: 1
        })])
      }
    }
  }),
  AT = r => {
    const e = Object.create(null);
    for (const t in r) {
      const n = r[t];
      n !== void 0 && (e[t] = n)
    }
    return e
  },
  RT = (r, e) => (t, n) => (yg(() => r({
    ...AT(t),
    ...n.attrs
  }, n)), () => {
    var i, o;
    return e ? (o = (i = n.slots).default) == null ? void 0 : o.call(i) : null
  }),
  OT = {
    accesskey: String,
    autocapitalize: String,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    class: [String, Object, Array],
    contenteditable: {
      type: Boolean,
      default: void 0
    },
    contextmenu: String,
    dir: String,
    draggable: {
      type: Boolean,
      default: void 0
    },
    enterkeyhint: String,
    exportparts: String,
    hidden: {
      type: Boolean,
      default: void 0
    },
    id: String,
    inputmode: String,
    is: String,
    itemid: String,
    itemprop: String,
    itemref: String,
    itemscope: String,
    itemtype: String,
    lang: String,
    nonce: String,
    part: String,
    slot: String,
    spellcheck: {
      type: Boolean,
      default: void 0
    },
    style: String,
    tabindex: String,
    title: String,
    translate: String
  },
  FT = et({
    name: "Body",
    inheritAttrs: !1,
    props: {
      ...OT,
      renderPriority: [String, Number]
    },
    setup: RT(r => ({
      bodyAttrs: r
    }), !0)
  });

function Kc(r) {
  const {
    route: e,
    router: t,
    i18n: n
  } = r || {};
  return X3({
    route: e || ni(),
    router: t || Zt(),
    i18n: n || Ai(Ve().$i18n)
  })
}

function MT(r) {
  const {
    route: e,
    router: t,
    i18n: n
  } = r || {};
  return Dm({
    route: e || ni(),
    router: t || Zt(),
    i18n: n || Ai(Ve().$i18n)
  })
}

function Y8(r) {
  const {
    addDirAttribute: e,
    addSeoAttributes: t,
    identifierAttribute: n,
    route: i,
    router: o,
    i18n: s
  } = r || {};
  return Y3({
    addDirAttribute: e || !1,
    addSeoAttributes: t || !1,
    identifierAttribute: n || "hid",
    route: i || ni(),
    router: o || Zt(),
    i18n: s || Ai(Ve().$i18n)
  })
}
const NT = ae("svg", {
    width: "96",
    height: "40",
    viewBox: "0 0 96 40",
    fill: "none",
    class: "logo__img",
    xmlns: "http://www.w3.org/2000/svg"
  }, [ae("path", {
    d: "M91.126 20.9257C91.189 20.9257 91.243 20.8777 91.2505 20.8147C91.279 20.5282 91.294 20.2327 91.294 19.9282C91.294 17.3407 90.226 15.2917 88.579 14.1532C87.2035 13.2022 85.747 12.6172 83.1715 12.6172C78.571 12.6172 75.0625 15.5752 75.0625 19.9282C75.0625 24.0187 77.9905 27.2092 83.1715 27.2392C87.082 27.2617 90.2425 25.5892 91.195 22.2622C91.2145 22.1947 91.162 22.1257 91.0915 22.1257H87.2575C87.2185 22.1257 87.184 22.1467 87.166 22.1812C86.584 23.2552 85.264 24.0457 83.4415 24.0502C81.5875 24.0457 80.254 23.2267 79.687 22.1257C79.504 21.7702 79.402 21.3862 79.387 20.9902C79.3855 20.9542 79.4155 20.9257 79.45 20.9257H91.126ZM79.627 18.0787C79.5895 18.0787 79.5625 18.0442 79.57 18.0082C79.6765 17.4772 80.017 17.0122 80.446 16.6432C80.5765 16.5322 80.7175 16.4287 80.8615 16.3357C81.88 15.6817 83.299 15.5452 84.4645 15.7912C84.4855 15.7957 84.5065 15.8002 84.5275 15.8047C85.516 16.0282 86.4955 16.6267 86.917 17.5552C86.977 17.6872 87.028 17.8837 87.0445 18.0127C87.049 18.0472 87.022 18.0772 86.9875 18.0772C86.311 18.0787 80.341 18.0787 79.627 18.0787Z",
    fill: "#A2A2FC"
  }), ae("path", {
    d: "M30.7814 13.4733C30.3749 13.7538 30.1259 13.9068 29.5499 14.5953C29.4734 14.6868 29.4014 14.7828 29.3369 14.8833L29.3324 14.8908C29.3324 14.8908 28.8314 15.6723 28.5434 16.1073C28.5119 16.1553 28.4354 16.1223 28.4519 16.0668C28.5119 15.8568 28.5809 15.6168 28.6619 15.3423C28.8029 14.8623 28.8749 14.3643 28.8749 13.8633V13.1643C28.8749 13.1103 28.8314 13.0653 28.7759 13.0653H24.2474C24.1934 13.0653 24.1484 13.1088 24.1484 13.1643V26.8248C24.1484 26.8893 24.2009 26.9403 24.2639 26.9403H28.7579C28.8224 26.9403 28.8734 26.8878 28.8734 26.8248V20.2293C28.9439 16.8768 31.7834 16.5288 32.7209 16.4613C34.4384 16.3383 35.6054 17.0703 36.0284 17.3898C36.1004 17.4438 36.2024 17.3928 36.2024 17.3028V13.1538C36.2024 13.0983 36.1694 13.0488 36.1169 13.0278C35.6129 12.8388 32.9819 11.9553 30.7814 13.4733Z",
    fill: "#A2A2FC"
  }), ae("path", {
    d: "M49.7256 13.1643V13.5003C49.7256 14.1168 49.8411 14.7288 50.0676 15.3018C50.1786 15.5838 50.2746 15.8373 50.3286 16.0248C50.3481 16.0953 50.2521 16.1358 50.2146 16.0743C49.8951 15.5523 49.5021 14.9523 49.5021 14.9523C49.3491 14.7348 49.1781 14.5293 48.9831 14.3478C47.8056 13.2483 46.2351 12.6318 44.4546 12.6318C40.6011 12.6318 37.4766 15.5313 37.4766 19.9608C37.4766 24.6648 40.6011 27.2898 44.4546 27.2898C46.2336 27.2898 47.8026 26.6883 48.9801 25.5993C49.1766 25.4178 49.3491 25.2123 49.5021 24.9933C49.5021 24.9933 49.8951 24.3948 50.2146 23.8713C50.2521 23.8083 50.3496 23.8503 50.3286 23.9208C50.2761 24.1083 50.1786 24.3618 50.0676 24.6438C49.8426 25.2183 49.7256 25.8288 49.7256 26.4453V26.8398C49.7256 26.8953 49.7706 26.9403 49.8261 26.9403H54.3501C54.4056 26.9403 54.4506 26.8953 54.4506 26.8398V13.1643C54.4506 13.1088 54.4056 13.0638 54.3501 13.0638H49.8261C49.7706 13.0638 49.7256 13.1088 49.7256 13.1643ZM49.7256 22.1928C49.0146 23.5143 47.6091 24.2253 45.9906 24.2253C43.6551 24.2253 41.7621 22.7448 41.7621 20.0898C41.7621 17.5908 43.6551 15.9543 45.9906 15.9543C47.6091 15.9543 49.0146 16.7418 49.7256 18.0558C50.0406 18.6378 50.2191 19.3233 50.2191 20.0898C50.2191 20.9043 50.0406 21.6078 49.7256 22.1928Z",
    fill: "#A2A2FC"
  }), ae("path", {
    d: "M66.6147 12.6572C64.8492 12.6572 63.2877 13.2632 62.1147 14.3462C61.9182 14.5277 61.7457 14.7332 61.5927 14.9507C61.5927 14.9507 61.1997 15.5492 60.8802 16.0727C60.8427 16.1342 60.7452 16.0937 60.7662 16.0247C60.8142 15.8537 60.8982 15.6302 60.9972 15.3782C61.2282 14.7842 61.3467 14.1527 61.3467 13.5152V13.1732C61.3467 13.1177 61.3017 13.0727 61.2462 13.0727H56.7177C56.6622 13.0727 56.6172 13.1177 56.6172 13.1732V32.5862C56.6172 32.6417 56.6622 32.6867 56.7177 32.6867H61.2462C61.3017 32.6867 61.3467 32.6417 61.3467 32.5862V26.4827C61.3467 25.8452 61.2282 25.2122 60.9972 24.6182C60.8997 24.3662 60.8142 24.1427 60.7662 23.9717C60.7467 23.9012 60.8427 23.8607 60.8802 23.9237C61.1997 24.4457 61.5927 25.0457 61.5927 25.0457C61.7472 25.2662 61.9212 25.4717 62.1192 25.6517C63.2937 26.7242 64.8522 27.3167 66.6162 27.3167C70.4697 27.3167 73.5942 24.6932 73.5942 19.9877C73.5927 15.5567 70.4682 12.6572 66.6147 12.6572ZM65.0772 24.2522C63.4602 24.2522 62.0562 23.5427 61.3452 22.2257C61.3422 22.2197 61.3392 22.2137 61.3362 22.2062C61.0257 21.6242 60.8502 20.9252 60.8502 20.1167C60.8502 19.3547 61.0272 18.6752 61.3362 18.0962C61.3392 18.0902 61.3422 18.0842 61.3452 18.0782C62.0562 16.7672 63.4602 15.9827 65.0772 15.9827C67.4127 15.9827 69.3057 17.6192 69.3057 20.1182C69.3057 22.7717 67.4127 24.2522 65.0772 24.2522Z",
    fill: "#A2A2FC"
  }), ae("path", {
    d: "M21.7578 13.0673H17.2338C17.1783 13.0673 17.1333 13.1123 17.1333 13.1678V13.5833C17.1333 14.1503 17.2398 14.7128 17.4468 15.2408C17.5668 15.5483 17.6748 15.8243 17.7318 16.0253C17.7513 16.0958 17.6553 16.1363 17.6178 16.0748C17.2983 15.5528 16.9053 14.9528 16.9053 14.9528C16.7523 14.7338 16.5798 14.5298 16.3848 14.3468C15.2073 13.2488 13.6383 12.6338 11.8608 12.6338C8.00732 12.6338 4.88281 15.5333 4.88281 19.9628C4.88281 24.6668 8.00732 27.2918 11.8608 27.2918C13.6368 27.2918 15.2043 26.6918 16.3803 25.6058C16.8183 25.1528 16.9683 24.7463 16.9683 24.7463C16.9683 24.7463 16.9923 24.6818 17.0028 24.6473C17.0238 24.5813 17.1168 24.5933 17.1243 24.6593C17.1243 24.6728 17.1258 25.1933 17.1258 25.4468V26.2673C17.1258 26.3783 17.1243 26.4893 17.1123 26.6003C17.0748 26.9303 16.9758 27.2498 16.8183 27.5528C16.1808 28.7738 14.7168 29.4923 12.9393 29.4923H12.9138C11.1798 29.5043 9.73532 28.7738 9.07682 27.5363C9.04682 27.4808 8.98381 27.4523 8.92231 27.4718L5.09282 28.6568C5.01632 28.6808 4.97732 28.7663 5.01182 28.8383C6.30482 31.5428 9.25532 33.1193 13.1763 33.1208H13.1793C17.7573 33.1208 20.9898 30.7868 21.7638 26.9888C21.7803 26.9018 21.7938 26.8148 21.8058 26.7293C21.8418 26.4638 21.8583 26.1968 21.8583 25.9298V13.1693C21.8583 13.1123 21.8133 13.0673 21.7578 13.0673ZM17.1333 22.1963C16.4223 23.5178 15.0168 24.2288 13.3983 24.2288C11.0628 24.2288 9.16981 22.7483 9.16981 20.0933C9.16981 17.5943 11.0628 15.9578 13.3983 15.9578C15.0168 15.9578 16.4223 16.7453 17.1333 18.0593C17.4483 18.6413 17.6268 19.3268 17.6268 20.0933C17.6268 20.9078 17.4483 21.6113 17.1333 22.1963Z",
    fill: "#A2A2FC"
  })], -1),
  IT = et({
    __name: "Logo",
    setup(r) {
      const e = Kc();
      return (t, n) => {
        const i = Ga;
        return ye(), lt(i, {
          to: se(e)("/"),
          class: "logo",
          "aria-label": "go to main page"
        }, {
          default: Ln(() => [NT]),
          _: 1
        }, 8, ["to"])
      }
    }
  }),
  $T = ["checked"],
  BT = et({
    __name: "Switch",
    setup(r) {
      const e = An("is-creative"),
        {
          toggleTheme: t
        } = fr("high");

      function n() {
        e.value = !e.value, t()
      }
      return (i, o) => (ye(), Ie("input", {
        type: "checkbox",
        checked: se(e),
        class: "switch",
        onChange: n
      }, null, 40, $T))
    }
  }),
  VT = {
    class: "text-p2 theme-switch"
  },
  HT = {
    __name: "ThemeSwitch",
    setup(r) {
      return (e, t) => {
        const n = BT;
        return ye(), Ie("label", VT, [Ye(n), Vt(" " + Ue(e.$t("header.mode")), 1)])
      }
    }
  },
  UT = HT,
  jT = r => (Ec("data-v-bb814f4e"), r = r(), kc(), r),
  WT = {
    class: "button-primary__text"
  },
  XT = jT(() => ae("span", {
    class: "button-primary__bg"
  }, [ae("span", {
    class: "button-primary__circle"
  })], -1)),
  YT = et({
    __name: "Primary",
    props: {
      text: {}
    },
    setup(r) {
      const e = we(null),
        t = () => {
          var i;
          _t.fromTo((i = e.value) == null ? void 0 : i.querySelector(".button-primary__circle"), {
            scaleX: .25,
            yPercent: -25
          }, {
            scaleX: 1,
            yPercent: 75,
            duration: 1.2
          })
        },
        n = () => {
          var i;
          _t.to((i = e.value) == null ? void 0 : i.querySelector(".button-primary__circle"), {
            scaleX: .25,
            yPercent: 175,
            duration: 1.2
          })
        };
      return Pn(() => {
        var i;
        _t.from((i = e.value) == null ? void 0 : i.querySelector(".button-primary__circle"), {
          scaleX: .25,
          yPercent: -25
        })
      }), (i, o) => (ye(), Ie("button", {
        ref_key: "elem",
        ref: e,
        onMouseenter: t,
        onMouseleave: n,
        class: "button-primary"
      }, [ae("span", WT, Ue(i.text), 1), XT], 544))
    }
  }),
  Od = Br(YT, [
    ["__scopeId", "data-v-bb814f4e"]
  ]),
  zT = {},
  GT = {
    class: "title-h1 popup-close"
  },
  qT = ae("span", null, "X", -1);

function KT(r, e) {
  return ye(), Ie("button", GT, [Vt("( "), qT, Vt(" )")])
}
const e2 = Br(zT, [
    ["render", KT]
  ]),
  QT = {
    class: "text-p2 header-lang"
  },
  JT = et({
    __name: "LangSwitch",
    setup(r) {
      const {
        locale: e
      } = ii(), t = MT();
      return (n, i) => {
        const o = Ga;
        return ye(), Ie("div", QT, [Ye(o, {
          to: se(t)("uk"),
          class: po(["header-lang__lang", {
            active: se(e) === "uk"
          }])
        }, {
          default: Ln(() => [Vt("Ua")]),
          _: 1
        }, 8, ["to", "class"]), Vt(" / "), Ye(o, {
          to: se(t)("en"),
          class: po(["header-lang__lang", {
            active: se(e) === "en"
          }])
        }, {
          default: Ln(() => [Vt("En")]),
          _: 1
        }, 8, ["to", "class"])])
      }
    }
  }),
  t2 = Br(JT, [
    ["__scopeId", "data-v-70061521"]
  ]),
  ZT = r => (Ec("data-v-47fb26dc"), r = r(), kc(), r),
  eP = {
    "data-lenis-prevent": "",
    class: "mobile-header"
  },
  tP = {
    class: "title-h1 mobile-header__nav"
  },
  rP = ZT(() => ae("span", null, ",", -1)),
  nP = {
    key: 0,
    style: {
      flexBasis: "100%"
    }
  },
  iP = {
    __name: "MobileHeader",
    props: {
      links: {
        required: !0,
        type: Array
      }
    },
    emits: ["closeMobileMenu"],
    setup(r, {
      emit: e
    }) {
      const t = An("feedback-form-popup");

      function n() {
        t.value = !t.value
      }
      const i = Kc();
      return (o, s) => {
        const a = e2,
          l = t2,
          c = Od,
          u = Ga;
        return ye(), Ie("div", eP, [it("", !0), Ye(a, {
          onClick: s[0] || (s[0] = d => e("closeMobileMenu")),
          class: "mobile-header__close"
        }), Ye(l, {
          class: "mobile-header__lang"
        }), Ye(c, {
          onClick: n,
          text: o.$t("btn.touch"),
          class: "mobile-header__feedback"
        }, null, 8, ["text"]), ae("nav", tP, [(ye(!0), Ie(ho, null, xh(r.links.slice(0, -1), (d, h) => (ye(), Ie(ho, {
          key: d.name
        }, [Ye(u, {
          onClick: s[1] || (s[1] = f => o.$emit("closeMobileMenu")),
          to: se(i)(d.path),
          class: "mobile-header__link"
        }, {
          default: Ln(() => [Vt(Ue(o.$t(`header.${d.name.toLowerCase()}`)), 1)]),
          _: 2
        }, 1032, ["to"]), rP, h === 0 ? (ye(), Ie("span", nP)) : it("", !0)], 64))), 128)), Ye(u, {
          onClick: s[2] || (s[2] = d => o.$emit("closeMobileMenu")),
          to: se(i)(r.links.at(-1).path),
          class: "mobile-header__link"
        }, {
          default: Ln(() => [Vt(Ue(o.$t(`header.${r.links.at(-1).name.toLowerCase()}`)), 1)]),
          _: 1
        }, 8, ["to"]), Vt(". ")])])
      }
    }
  },
  oP = Br(iP, [
    ["__scopeId", "data-v-47fb26dc"]
  ]),
  sP = {
    class: "header__last"
  },
  aP = et({
    __name: "CommonHeader",
    setup(r) {
      const e = [{
          name: "Portfolio",
          path: "/portfolio"
        }, {
          name: "Services",
          path: "/services"
        }, {
          name: "About",
          path: "/about"
        }, {
          name: "Team",
          path: "/team"
        }, {
          name: "Contact",
          path: "/contact"
        }],
        t = we(!1);
      Ir(t, h => {
        document.body.style.overflow = h ? "hidden" : ""
      });
      const n = () => t.value = !0,
        i = () => t.value = !1,
        o = An("feedback-form-popup");

      function s() {
        o.value = !o.value
      }
      const a = we(),
        l = we(!1),
        {
          $lenis: c
        } = Ve(),
        u = ni(),
        d = Se(() => /portfolio-handle/.test(u.name));
      return Pn(() => {
        c && c.on("scroll", h => {
          if (/portfolio-handle/.test(u.name)) {
            const f = document.querySelector(".project-first");
            f && a.value && h.animatedScroll > f.clientHeight - a.value.clientHeight ? l.value = !0 : l.value = !1
          } else h.animatedScroll && h.animatedScroll > 0 ? l.value = !0 : l.value = !1
        })
      }), (h, f) => {
        const _ = IT,
          p = UT,
          m = Od,
          g = oP;
        return ye(), Ie(ho, null, [ae("header", {
          ref_key: "headerDOM",
          ref: a,
          class: po(["header", {
            "has-bg": se(l),
            light: se(d)
          }])
        }, [Ye(_, {
          class: "header__logo"
        }), Ye(p, {
          class: "header__switch"
        }), ae("div", sP, [Ye(m, {
          text: h.$t("btn.touch"),
          onClick: s,
          class: "header__touch"
        }, null, 8, ["text"])]), ae("button", {
          onClick: n,
          class: "text-p1 link-2 header__menu"
        }, Ue(h.$t("header.menu")), 1)], 2), se(t) ? (ye(), lt(g, {
          key: 0,
          links: e,
          onCloseMobileMenu: i
        })) : it("", !0)], 64)
      }
    }
  }),
  lP = Br(aP, [
    ["__scopeId", "data-v-8367702a"]
  ]),
  cP = {
    class: "header__nav"
  },
  uP = {
    class: "header__last"
  },
  fP = {
    class: "header__last-langs"
  },
  hP = et({
    __name: "HeaderNavigation",
    setup(r) {
      const {
        t: e,
        locale: t
      } = ii(), n = Kc(), i = [{
        name: "portfolio",
        path: "/portfolio"
      }, {
        name: "services",
        path: "/services"
      }, {
        name: "about",
        path: "/about"
      }, {
        name: "team",
        path: "/team"
      }, {
        name: "contact",
        path: "/contact"
      }], o = ni(), s = Se(() => /portfolio-handle/.test(o.name));
      return p2(() => {}), Ir(t, () => {}), (a, l) => {
        const c = Ga,
          u = t2,
          d = Od;
        return ye(), Ie("div", {
          key: se(t),
          class: po(["header-navigation", {
            light: se(s)
          }])
        }, [ae("nav", cP, [(ye(), Ie(ho, null, xh(i, h => Ye(c, {
          key: h.name && se(t),
          to: se(n)(h.path),
          class: "text-p2 header__link"
        }, {
          default: Ln(() => [Vt(Ue(a.$t(`header.${h.name}`)), 1)]),
          _: 2
        }, 1032, ["to"])), 64))]), ae("div", uP, [it("", !0), ae("div", fP, [Ye(u)]), Ye(d, {
          text: a.$t("btn.touch"),
          class: "header__touch"
        }, null, 8, ["text"])])], 2)
      }
    }
  }),
  dP = Br(hP, [
    ["__scopeId", "data-v-312db81a"]
  ]),
  pP = {},
  _P = {
    width: "840",
    height: "312",
    viewBox: "0 0 840 312",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  gP = $0('<circle cx="468" cy="300" r="12" fill="white"></circle><circle cx="468" cy="276" r="12" fill="white"></circle><circle cx="420" cy="300" r="12" fill="white"></circle><circle cx="420" cy="276" r="12" fill="white"></circle><circle cx="396" cy="300" r="12" fill="white"></circle><circle cx="372" cy="300" r="12" fill="white"></circle><circle cx="348" cy="300" r="12" fill="white"></circle><circle cx="492" cy="300" r="12" fill="white"></circle><circle cx="492" cy="252" r="12" fill="white"></circle><circle cx="516" cy="276" r="12" fill="white"></circle><circle cx="444" cy="300" r="12" fill="white"></circle><circle cx="324" cy="252" r="12" fill="white"></circle><circle cx="300" cy="252" r="12" fill="white"></circle><circle cx="348" cy="228" r="12" fill="white"></circle><circle cx="564" cy="228" r="12" fill="white"></circle><circle cx="612" cy="204" r="12" fill="white"></circle><circle cx="660" cy="204" r="12" fill="white"></circle><circle cx="780" cy="180" r="12" fill="white"></circle><circle cx="780" cy="108" r="12" fill="white"></circle><circle cx="228" cy="228" r="12" fill="white"></circle><circle cx="780" cy="228" r="12" fill="white"></circle><circle cx="780" cy="156" r="12" fill="white"></circle><circle cx="156" cy="228" r="12" fill="white"></circle><circle cx="156" cy="204" r="12" fill="white"></circle><circle cx="708" cy="228" r="12" fill="white"></circle><circle cx="708" cy="204" r="12" fill="white"></circle><circle cx="372" cy="204" r="12" fill="white"></circle><circle cx="36" cy="204" r="12" fill="white"></circle><circle cx="396" cy="180" r="12" fill="white"></circle><circle cx="396" cy="156" r="12" fill="white"></circle><circle cx="60" cy="180" r="12" fill="white"></circle><circle cx="420" cy="156" r="12" fill="white"></circle><circle cx="84" cy="156" r="12" fill="white"></circle><circle cx="444" cy="132" r="12" fill="white"></circle><circle cx="108" cy="132" r="12" fill="white"></circle><circle cx="108" cy="108" r="12" fill="white"></circle><circle cx="468" cy="108" r="12" fill="white"></circle><circle cx="132" cy="108" r="12" fill="white"></circle><circle cx="228" cy="60" r="12" fill="white"></circle><circle cx="228" cy="36" r="12" fill="white"></circle><circle cx="228" cy="12" r="12" fill="white"></circle><circle cx="228" cy="300" r="12" fill="white"></circle><circle cx="228" cy="276" r="12" fill="white"></circle><circle cx="252" cy="228" r="12" fill="white"></circle><circle cx="804" cy="228" r="12" fill="white"></circle><circle cx="828" cy="228" r="12" fill="white"></circle><circle cx="780" cy="36" r="12" fill="white"></circle><circle cx="732" cy="84" r="12" fill="white"></circle><circle cx="756" cy="84" r="12" fill="white"></circle><circle cx="684" cy="84" r="12" fill="white"></circle><circle cx="684" cy="108" r="12" fill="white"></circle><circle cx="660" cy="132" r="12" fill="white"></circle><circle cx="660" cy="156" r="12" fill="white"></circle><circle cx="708" cy="108" r="12" fill="white"></circle><circle cx="684" cy="132" r="12" fill="white"></circle><circle cx="804" cy="204" r="12" fill="white"></circle><circle cx="828" cy="204" r="12" fill="white"></circle><circle cx="780" cy="12" r="12" fill="white"></circle><circle cx="732" cy="60" r="12" fill="white"></circle><circle cx="180" cy="228" r="12" fill="white"></circle><circle cx="732" cy="228" r="12" fill="white"></circle><circle cx="732" cy="204" r="12" fill="white"></circle><circle cx="108" cy="204" r="12" fill="white"></circle><circle cx="84" cy="228" r="12" fill="white"></circle><circle cx="84" cy="252" r="12" fill="white"></circle><circle cx="636" cy="252" r="12" fill="white"></circle><circle cx="636" cy="228" r="12" fill="white"></circle><circle cx="276" cy="228" r="12" fill="white"></circle><circle cx="756" cy="12" r="12" fill="white"></circle><circle cx="756" cy="300" r="12" fill="white"></circle><circle cx="36" cy="228" r="12" fill="white"></circle><circle cx="36" cy="252" r="12" fill="white"></circle><circle cx="588" cy="252" r="12" fill="white"></circle><circle cx="588" cy="228" r="12" fill="white"></circle><circle cx="636" cy="204" r="12" fill="white"></circle><circle cx="684" cy="204" r="12" fill="white"></circle><circle cx="588" cy="204" r="12" fill="white"></circle><circle cx="636" cy="180" r="12" fill="white"></circle><circle cx="492" cy="84" r="12" fill="white"></circle><circle cx="156" cy="84" r="12" fill="white"></circle><circle cx="492" cy="276" r="12" fill="white"></circle><circle cx="348" cy="276" r="12" fill="white"></circle><circle cx="396" cy="276" r="12" fill="white"></circle><circle cx="60" cy="228" r="12" fill="white"></circle><circle cx="60" cy="252" r="12" fill="white"></circle><circle cx="612" cy="252" r="12" fill="white"></circle><circle cx="612" cy="228" r="12" fill="white"></circle><circle cx="660" cy="228" r="12" fill="white"></circle><circle cx="780" cy="204" r="12" fill="white"></circle><circle cx="780" cy="132" r="12" fill="white"></circle><circle cx="756" cy="204" r="12" fill="white"></circle><circle cx="780" cy="252" r="12" fill="white"></circle><circle cx="780" cy="276" r="12" fill="white"></circle><circle cx="780" cy="300" r="12" fill="white"></circle><circle cx="636" cy="132" r="12" fill="white"></circle><circle cx="612" cy="156" r="12" fill="white"></circle><circle cx="588" cy="180" r="12" fill="white"></circle><circle cx="636" cy="156" r="12" fill="white"></circle><circle cx="660" cy="108" r="12" fill="white"></circle><circle cx="708" cy="84" r="12" fill="white"></circle><circle cx="516" cy="108" r="12" fill="white"></circle><circle cx="708" cy="60" r="12" fill="white"></circle><circle cx="516" cy="84" r="12" fill="white"></circle><circle cx="516" cy="60" r="12" fill="white"></circle><circle cx="180" cy="60" r="12" fill="white"></circle><circle cx="492" cy="36" r="12" fill="white"></circle><circle cx="468" cy="36" r="12" fill="white"></circle><circle cx="444" cy="12" r="12" fill="white"></circle><circle cx="444" cy="36" r="12" fill="white"></circle><circle cx="420" cy="12" r="12" fill="white"></circle><circle cx="396" cy="12" r="12" fill="white"></circle><circle cx="372" cy="12" r="12" fill="white"></circle><circle cx="348" cy="36" r="12" fill="white"></circle><circle cx="348" cy="12" r="12" fill="white"></circle><circle cx="516" cy="36" r="12" fill="white"></circle><circle cx="492" cy="108" r="12" fill="white"></circle><circle cx="468" cy="132" r="12" fill="white"></circle><circle cx="444" cy="156" r="12" fill="white"></circle><circle cx="420" cy="180" r="12" fill="white"></circle><circle cx="396" cy="204" r="12" fill="white"></circle><circle cx="372" cy="228" r="12" fill="white"></circle><circle cx="348" cy="252" r="12" fill="white"></circle><circle cx="324" cy="276" r="12" fill="white"></circle><circle cx="372" cy="276" r="12" fill="white"></circle><circle cx="444" cy="276" r="12" fill="white"></circle><circle cx="324" cy="60" r="12" fill="white"></circle><circle cx="348" cy="60" r="12" fill="white"></circle><circle cx="756" cy="60" r="12" fill="white"></circle><circle cx="324" cy="84" r="12" fill="white"></circle><circle cx="348" cy="84" r="12" fill="white"></circle><circle cx="492" cy="180" r="12" fill="white"></circle><circle cx="324" cy="132" r="12" fill="white"></circle><circle cx="348" cy="132" r="12" fill="white"></circle><circle cx="492" cy="228" r="12" fill="white"></circle><circle cx="324" cy="36" r="12" fill="white"></circle><circle cx="372" cy="36" r="12" fill="white"></circle><circle cx="396" cy="36" r="12" fill="white"></circle><circle cx="468" cy="12" r="12" fill="white"></circle><circle cx="420" cy="36" r="12" fill="white"></circle><circle cx="492" cy="12" r="12" fill="white"></circle><circle cx="516" cy="132" r="12" fill="white"></circle><circle cx="756" cy="132" r="12" fill="white"></circle><circle cx="324" cy="180" r="12" fill="white"></circle><circle cx="300" cy="180" r="12" fill="white"></circle><circle cx="300" cy="84" r="12" fill="white"></circle><circle cx="540" cy="204" r="12" fill="white"></circle><circle cx="540" cy="108" r="12" fill="white"></circle><circle cx="516" cy="180" r="12" fill="white"></circle><circle cx="540" cy="132" r="12" fill="white"></circle><circle cx="756" cy="180" r="12" fill="white"></circle><circle cx="228" cy="132" r="12" fill="white"></circle><circle cx="228" cy="180" r="12" fill="white"></circle><circle cx="204" cy="180" r="12" fill="white"></circle><circle cx="204" cy="84" r="12" fill="white"></circle><circle cx="324" cy="108" r="12" fill="white"></circle><circle cx="348" cy="108" r="12" fill="white"></circle><circle cx="492" cy="204" r="12" fill="white"></circle><circle cx="756" cy="108" r="12" fill="white"></circle><circle cx="324" cy="156" r="12" fill="white"></circle><circle cx="300" cy="156" r="12" fill="white"></circle><circle cx="300" cy="60" r="12" fill="white"></circle><circle cx="540" cy="180" r="12" fill="white"></circle><circle cx="540" cy="84" r="12" fill="white"></circle><circle cx="540" cy="60" r="12" fill="white"></circle><circle cx="492" cy="60" r="12" fill="white"></circle><circle cx="468" cy="84" r="12" fill="white"></circle><circle cx="444" cy="108" r="12" fill="white"></circle><circle cx="420" cy="132" r="12" fill="white"></circle><circle cx="372" cy="180" r="12" fill="white"></circle><circle cx="348" cy="204" r="12" fill="white"></circle><circle cx="516" cy="156" r="12" fill="white"></circle><circle cx="756" cy="156" r="12" fill="white"></circle><circle cx="324" cy="204" r="12" fill="white"></circle><circle cx="300" cy="204" r="12" fill="white"></circle><circle cx="300" cy="108" r="12" fill="white"></circle><circle cx="540" cy="228" r="12" fill="white"></circle><circle cx="540" cy="156" r="12" fill="white"></circle><circle cx="324" cy="228" r="12" fill="white"></circle><circle cx="300" cy="228" r="12" fill="white"></circle><circle cx="300" cy="132" r="12" fill="white"></circle><circle cx="540" cy="252" r="12" fill="white"></circle><circle cx="516" cy="228" r="12" fill="white"></circle><circle cx="516" cy="204" r="12" fill="white"></circle><circle cx="204" cy="228" r="12" fill="white"></circle><circle cx="204" cy="132" r="12" fill="white"></circle><circle cx="756" cy="228" r="12" fill="white"></circle><circle cx="132" cy="228" r="12" fill="white"></circle><circle cx="108" cy="228" r="12" fill="white"></circle><circle cx="108" cy="252" r="12" fill="white"></circle><circle cx="660" cy="252" r="12" fill="white"></circle><circle cx="12" cy="228" r="12" fill="white"></circle><circle cx="12" cy="252" r="12" fill="white"></circle><circle cx="564" cy="252" r="12" fill="white"></circle><circle cx="12" cy="204" r="12" fill="white"></circle><circle cx="60" cy="204" r="12" fill="white"></circle><circle cx="84" cy="204" r="12" fill="white"></circle><circle cx="132" cy="204" r="12" fill="white"></circle><circle cx="180" cy="204" r="12" fill="white"></circle><circle cx="180" cy="180" r="12" fill="white"></circle><circle cx="732" cy="180" r="12" fill="white"></circle><circle cx="180" cy="252" r="12" fill="white"></circle><circle cx="732" cy="252" r="12" fill="white"></circle><circle cx="252" cy="180" r="12" fill="white"></circle><circle cx="804" cy="180" r="12" fill="white"></circle><circle cx="252" cy="252" r="12" fill="white"></circle><circle cx="804" cy="252" r="12" fill="white"></circle><circle cx="204" cy="204" r="12" fill="white"></circle><circle cx="204" cy="108" r="12" fill="white"></circle><circle cx="204" cy="252" r="12" fill="white"></circle><circle cx="204" cy="276" r="12" fill="white"></circle><circle cx="204" cy="300" r="12" fill="white"></circle><circle cx="252" cy="204" r="12" fill="white"></circle><circle cx="276" cy="204" r="12" fill="white"></circle><circle cx="684" cy="228" r="12" fill="white"></circle><circle cx="756" cy="252" r="12" fill="white"></circle><circle cx="516" cy="252" r="12" fill="white"></circle><circle cx="756" cy="276" r="12" fill="white"></circle><circle cx="732" cy="36" r="12" fill="white"></circle><circle cx="780" cy="60" r="12" fill="white"></circle><circle cx="780" cy="84" r="12" fill="white"></circle><circle cx="204" cy="36" r="12" fill="white"></circle><circle cx="180" cy="36" r="12" fill="white"></circle><circle cx="180" cy="84" r="12" fill="white"></circle><circle cx="756" cy="36" r="12" fill="white"></circle><circle cx="228" cy="108" r="12" fill="white"></circle><circle cx="228" cy="156" r="12" fill="white"></circle><circle cx="204" cy="156" r="12" fill="white"></circle><circle cx="204" cy="60" r="12" fill="white"></circle><circle cx="204" cy="12" r="12" fill="white"></circle><circle cx="228" cy="84" r="12" fill="white"></circle><circle cx="156" cy="60" r="12" fill="white"></circle><circle cx="156" cy="108" r="12" fill="white"></circle><circle cx="132" cy="84" r="12" fill="white"></circle><circle cx="132" cy="132" r="12" fill="white"></circle><circle cx="84" cy="132" r="12" fill="white"></circle><circle cx="108" cy="156" r="12" fill="white"></circle><circle cx="60" cy="156" r="12" fill="white"></circle><circle cx="84" cy="180" r="12" fill="white"></circle><circle cx="36" cy="180" r="12" fill="white"></circle><circle cx="564" cy="204" r="12" fill="white"></circle><circle cx="612" cy="180" r="12" fill="white"></circle><circle cx="228" cy="204" r="12" fill="white"></circle><circle cx="228" cy="252" r="12" fill="white"></circle>', 243),
  mP = [gP];

function yP(r, e) {
  return ye(), Ie("svg", _P, mP)
}
const bP = Br(pP, [
    ["render", yP]
  ]),
  vP = {},
  DP = {
    width: "361",
    height: "399",
    viewBox: "0 0 361 399",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wP = $0('<circle cx="90" cy="30" r="10" transform="rotate(-90 90 30)" fill="white"></circle><circle cx="331" cy="269" r="10" transform="rotate(-90 331 269)" fill="white"></circle><circle cx="110" cy="30" r="10" transform="rotate(-90 110 30)" fill="white"></circle><circle cx="351" cy="269" r="10" transform="rotate(-90 351 269)" fill="white"></circle><circle cx="90" cy="90" r="10" transform="rotate(-90 90 90)" fill="white"></circle><circle cx="331" cy="329" r="10" transform="rotate(-90 331 329)" fill="white"></circle><circle cx="110" cy="90" r="10" transform="rotate(-90 110 90)" fill="white"></circle><circle cx="351" cy="329" r="10" transform="rotate(-90 351 329)" fill="white"></circle><circle cx="30" cy="90" r="10" transform="rotate(-90 30 90)" fill="white"></circle><circle cx="271" cy="329" r="10" transform="rotate(-90 271 329)" fill="white"></circle><circle cx="10" cy="90" r="10" transform="rotate(-90 10 90)" fill="white"></circle><circle cx="251" cy="329" r="10" transform="rotate(-90 251 329)" fill="white"></circle><circle cx="90" cy="50" r="10" transform="rotate(-90 90 50)" fill="white"></circle><circle cx="331" cy="289" r="10" transform="rotate(-90 331 289)" fill="white"></circle><circle cx="110" cy="50" r="10" transform="rotate(-90 110 50)" fill="white"></circle><circle cx="351" cy="289" r="10" transform="rotate(-90 351 289)" fill="white"></circle><circle cx="70" cy="50" r="10" transform="rotate(-90 70 50)" fill="white"></circle><circle cx="311" cy="289" r="10" transform="rotate(-90 311 289)" fill="white"></circle><circle cx="70" cy="30" r="10" transform="rotate(-90 70 30)" fill="white"></circle><circle cx="311" cy="269" r="10" transform="rotate(-90 311 269)" fill="white"></circle><circle cx="331" cy="249" r="10" transform="rotate(-90 331 249)" fill="white"></circle><circle cx="331" cy="389" r="10" transform="rotate(-90 331 389)" fill="white"></circle><circle cx="90" cy="150" r="10" transform="rotate(-90 90 150)" fill="white"></circle><circle cx="90" cy="10" r="10" transform="rotate(-90 90 10)" fill="white"></circle><circle cx="90" cy="110" r="10" transform="rotate(-90 90 110)" fill="white"></circle><circle cx="331" cy="349" r="10" transform="rotate(-90 331 349)" fill="white"></circle><circle cx="110" cy="110" r="10" transform="rotate(-90 110 110)" fill="white"></circle><circle cx="351" cy="349" r="10" transform="rotate(-90 351 349)" fill="white"></circle><circle cx="70" cy="110" r="10" transform="rotate(-90 70 110)" fill="white"></circle><circle cx="311" cy="349" r="10" transform="rotate(-90 311 349)" fill="white"></circle><circle cx="70" cy="130" r="10" transform="rotate(-90 70 130)" fill="white"></circle><circle cx="311" cy="369" r="10" transform="rotate(-90 311 369)" fill="white"></circle><circle cx="50" cy="110" r="10" transform="rotate(-90 50 110)" fill="white"></circle><circle cx="291" cy="349" r="10" transform="rotate(-90 291 349)" fill="white"></circle><circle cx="50" cy="130" r="10" transform="rotate(-90 50 130)" fill="white"></circle><circle cx="291" cy="369" r="10" transform="rotate(-90 291 369)" fill="white"></circle><circle cx="30" cy="110" r="10" transform="rotate(-90 30 110)" fill="white"></circle><circle cx="271" cy="349" r="10" transform="rotate(-90 271 349)" fill="white"></circle><circle cx="30" cy="130" r="10" transform="rotate(-90 30 130)" fill="white"></circle><circle cx="271" cy="369" r="10" transform="rotate(-90 271 369)" fill="white"></circle><circle cx="10" cy="110" r="10" transform="rotate(-90 10 110)" fill="white"></circle><circle cx="251" cy="349" r="10" transform="rotate(-90 251 349)" fill="white"></circle><circle cx="110" cy="110" r="10" transform="rotate(-90 110 110)" fill="white"></circle><circle cx="351" cy="349" r="10" transform="rotate(-90 351 349)" fill="white"></circle><circle cx="90" cy="70" r="10" transform="rotate(-90 90 70)" fill="white"></circle><circle cx="331" cy="309" r="10" transform="rotate(-90 331 309)" fill="white"></circle><circle cx="110" cy="70" r="10" transform="rotate(-90 110 70)" fill="white"></circle><circle cx="351" cy="309" r="10" transform="rotate(-90 351 309)" fill="white"></circle><circle cx="50" cy="70" r="10" transform="rotate(-90 50 70)" fill="white"></circle><circle cx="291" cy="309" r="10" transform="rotate(-90 291 309)" fill="white"></circle><circle cx="50" cy="50" r="10" transform="rotate(-90 50 50)" fill="white"></circle><circle cx="291" cy="289" r="10" transform="rotate(-90 291 289)" fill="white"></circle><circle cx="30" cy="70" r="10" transform="rotate(-90 30 70)" fill="white"></circle><circle cx="271" cy="309" r="10" transform="rotate(-90 271 309)" fill="white"></circle><circle cx="90" cy="130" r="10" transform="rotate(-90 90 130)" fill="white"></circle><circle cx="331" cy="369" r="10" transform="rotate(-90 331 369)" fill="white"></circle><circle cx="110" cy="130" r="10" transform="rotate(-90 110 130)" fill="white"></circle><circle cx="351" cy="369" r="10" transform="rotate(-90 351 369)" fill="white"></circle><circle cx="171" cy="171" r="10" transform="rotate(-90 171 171)" fill="white"></circle><circle cx="151" cy="171" r="10" transform="rotate(-90 151 171)" fill="white"></circle><circle cx="171" cy="151" r="10" transform="rotate(-90 171 151)" fill="white"></circle><circle cx="191" cy="171" r="10" transform="rotate(-90 191 171)" fill="white"></circle><circle cx="191" cy="151" r="10" transform="rotate(-90 191 151)" fill="white"></circle><circle cx="151" cy="231" r="10" transform="rotate(-90 151 231)" fill="white"></circle><circle cx="131" cy="231" r="10" transform="rotate(-90 131 231)" fill="white"></circle><circle cx="211" cy="231" r="10" transform="rotate(-90 211 231)" fill="white"></circle><circle cx="231" cy="231" r="10" transform="rotate(-90 231 231)" fill="white"></circle><circle cx="151" cy="191" r="10" transform="rotate(-90 151 191)" fill="white"></circle><circle cx="131" cy="191" r="10" transform="rotate(-90 131 191)" fill="white"></circle><circle cx="211" cy="191" r="10" transform="rotate(-90 211 191)" fill="white"></circle><circle cx="231" cy="191" r="10" transform="rotate(-90 231 191)" fill="white"></circle><circle cx="211" cy="171" r="10" transform="rotate(-90 211 171)" fill="white"></circle><circle cx="151" cy="251" r="10" transform="rotate(-90 151 251)" fill="white"></circle><circle cx="131" cy="251" r="10" transform="rotate(-90 131 251)" fill="white"></circle><circle cx="151" cy="271" r="10" transform="rotate(-90 151 271)" fill="white"></circle><circle cx="211" cy="251" r="10" transform="rotate(-90 211 251)" fill="white"></circle><circle cx="211" cy="271" r="10" transform="rotate(-90 211 271)" fill="white"></circle><circle cx="231" cy="251" r="10" transform="rotate(-90 231 251)" fill="white"></circle><circle cx="151" cy="211" r="10" transform="rotate(-90 151 211)" fill="white"></circle><circle cx="131" cy="211" r="10" transform="rotate(-90 131 211)" fill="white"></circle><circle cx="211" cy="211" r="10" transform="rotate(-90 211 211)" fill="white"></circle><circle cx="231" cy="211" r="10" transform="rotate(-90 231 211)" fill="white"></circle><circle cx="171" cy="271" r="10" transform="rotate(-90 171 271)" fill="white"></circle><circle cx="171" cy="291" r="10" transform="rotate(-90 171 291)" fill="white"></circle><circle cx="191" cy="271" r="10" transform="rotate(-90 191 271)" fill="white"></circle><circle cx="191" cy="291" r="10" transform="rotate(-90 191 291)" fill="white"></circle>', 86),
  xP = [wP];

function CP(r, e) {
  return ye(), Ie("svg", DP, xP)
}
const EP = Br(vP, [
    ["render", CP]
  ]),
  kP = r => (Ec("data-v-63d34719"), r = r(), kc(), r),
  SP = {
    class: "button-secondary__text"
  },
  TP = kP(() => ae("span", {
    class: "button-secondary__bg"
  }, [ae("span", {
    class: "button-secondary__circle"
  })], -1)),
  PP = et({
    __name: "Secondary",
    props: {
      text: {},
      isDisabled: {
        type: Boolean,
        default: !1
      }
    },
    setup(r) {
      const e = we(null),
        t = () => {
          var o;
          const i = (o = e.value) == null ? void 0 : o.querySelector(".button-secondary__circle");
          i && _t.fromTo(i, {
            scaleX: .25,
            yPercent: -25
          }, {
            scaleX: 1,
            yPercent: 75,
            duration: 1.2
          })
        },
        n = () => {
          var o;
          const i = (o = e.value) == null ? void 0 : o.querySelector(".button-secondary__circle");
          i && _t.to(i, {
            scaleX: .25,
            yPercent: 175,
            duration: 1.2
          })
        };
      return Pn(() => {
        var o;
        const i = (o = e.value) == null ? void 0 : o.querySelector(".button-secondary__circle");
        i && _t.from(i, {
          scaleX: .25,
          yPercent: -25
        })
      }), (i, o) => (ye(), Ie("button", {
        ref_key: "elem",
        ref: e,
        onMouseenter: t,
        onMouseleave: n,
        class: po(["button-secondary", {
          disabled: i.isDisabled
        }])
      }, [ae("span", SP, Ue(i.text), 1), TP], 34))
    }
  }),
  r2 = Br(PP, [
    ["__scopeId", "data-v-63d34719"]
  ]),
  LP = ["disabled"],
  AP = {
    class: "feedback-form__content"
  },
  RP = {
    class: "feedback-form__wrap"
  },
  OP = ["value", "onKeypress", "placeholder"],
  FP = {
    class: "feedback-form__buttons"
  },
  MP = {
    key: 0,
    class: "T7 feedback-form__enter"
  },
  NP = {
    name: "FeedbackForm"
  },
  IP = et({
    ...NP,
    props: {
      modelValue: {},
      isValid: {
        type: Boolean
      },
      hasBackButton: {
        type: Boolean,
        default: !1
      },
      last: {
        type: Boolean
      }
    },
    emits: ["nextStep", "update:modelValue", "prevStep", "submitForm"],
    setup(r, {
      emit: e
    }) {
      const t = r,
        n = we(!1),
        i = we();
      Pn(() => {
        i.value && i.value.focus()
      }), O0(() => {
        i.value && i.value.focus()
      });

      function o() {
        e("update:modelValue", t.modelValue.trim()), t.isValid && (t.last ? e("submitForm") : e("nextStep"))
      }

      function s(h) {
        window.innerWidth < 1200 || (h.preventDefault(), o())
      }

      function a(h) {
        const f = h.target;
        e("update:modelValue", f.value)
      }

      function l(h) {
        n.value = !1;
        const f = h.target;
        e("update:modelValue", f.value.trim())
      }
      const c = we();

      function u() {
        n.value = !0
      }

      function d() {
        e("prevStep")
      }
      return (h, f) => {
        const _ = r2;
        return ye(), Ie("div", {
          ref_key: "elementDOM",
          ref: c,
          class: "feedback-form"
        }, [ae("button", {
          ref: "mobileButtonDOM",
          disabled: !t.isValid,
          class: "btn-secondary feedback-form__btn feedback-form__btn--mobile",
          onClick: o
        }, " → ", 8, LP), ae("div", AP, [ae("div", RP, [ae("textarea", {
          ref_key: "textarea",
          ref: i,
          value: t.modelValue,
          onInput: a,
          onBlur: l,
          onKeypress: B0(s, ["enter"]),
          onFocus: u,
          name: "name",
          placeholder: h.$t("form.type"),
          class: "title-h1 feedback-form__name"
        }, null, 40, OP)])]), ae("div", FP, [t.hasBackButton ? (ye(), lt(_, {
          key: 0,
          text: "←",
          class: "feedback-form__btn feedback-form__arrow-btn",
          onClick: d
        })) : it("", !0), t.last ? it("", !0) : (ye(), lt(_, {
          key: 1,
          "is-disabled": !t.isValid,
          text: h.$t("form.continue"),
          class: "feedback-form__btn",
          onClick: o
        }, null, 8, ["is-disabled", "text"])), t.last ? (ye(), lt(_, {
          key: 2,
          "is-disabled": !t.isValid,
          text: h.$t("form.send"),
          class: "feedback-form__btn feedback-form__btn--last",
          onClick: o
        }, null, 8, ["is-disabled", "text"])) : it("", !0)]), se(n) && t.isValid ? (ye(), Ie("div", MP, Ue(h.$t("form.press")) + " ↩ ", 1)) : it("", !0)], 512)
      }
    }
  }),
  $P = Br(IP, [
    ["__scopeId", "data-v-3855044e"]
  ]),
  BP = {
    class: "feedback-form__content"
  },
  VP = {
    class: "feedback-form__wrap",
    "data-lenis-prevent": ""
  },
  HP = {
    class: "title-h3 feedback-form__item"
  },
  UP = ["checked", "value", "onKeypress"],
  jP = {
    class: "feedback-form__buttons"
  },
  WP = {
    key: 1,
    class: "T7 feedback-form__enter"
  },
  XP = et({
    __name: "FormList",
    props: {
      isValid: {
        type: Boolean
      },
      modelValue: {},
      listItems: {},
      hasBackButton: {
        type: Boolean,
        default: !1
      },
      last: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["nextStep", "update:modelValue", "submitForm", "prevStep"],
    setup(r, {
      emit: e
    }) {
      const t = r,
        n = we(!1);

      function i() {
        t.last ? t.isValid && (e("update:modelValue", t.modelValue), e("submitForm")) : (t.isValid && e("update:modelValue", t.modelValue), e("nextStep"))
      }
      const o = we();
      Pn(() => {
        var u;
        o.value && ((u = o.value.querySelector("input[type=radio]")) == null || u.focus())
      });

      function s(u) {
        const d = u.target;
        e("update:modelValue", d.value)
      }

      function a(u) {
        n.value = !1;
        const d = u.target;
        e("update:modelValue", d.value.trim())
      }

      function l() {
        window.innerWidth < 1200 || (n.value = !0)
      }

      function c() {
        e("prevStep")
      }
      return (u, d) => {
        const h = r2;
        return ye(), Ie("div", {
          ref_key: "form",
          ref: o,
          class: po(["feedback-form", {
            "feedback-form--last": u.last
          }])
        }, [ae("div", BP, [ae("div", VP, [ae("ul", null, [(ye(!0), Ie(ho, null, xh(u.listItems, f => (ye(), Ie("li", {
          key: f
        }, [ae("label", HP, [ae("input", {
          type: "radio",
          name: "radio",
          checked: f === u.modelValue,
          value: f,
          onChange: s,
          onBlur: a,
          onKeypress: B0(i, ["enter"]),
          onFocus: l
        }, null, 40, UP), ae("p", null, Ue(f), 1)])]))), 128))])])]), ae("div", jP, [t.hasBackButton ? (ye(), lt(h, {
          key: 0,
          text: "←",
          class: "feedback-form__btn feedback-form__arrow-btn disable-mobile",
          onClick: c
        })) : it("", !0), t.last ? it("", !0) : (ye(), lt(h, {
          key: 1,
          "is-disabled": !t.isValid,
          class: "feedback-form__btn disable-mobile",
          text: u.$t("form.continue"),
          onClick: Hu(i, ["prevent"])
        }, null, 8, ["is-disabled", "text", "onClick"])), t.last ? (ye(), lt(h, {
          key: 2,
          "is-disabled": !t.isValid,
          text: u.$t("form.send"),
          class: "feedback-form__btn feedback-form__btn--last",
          onClick: Hu(i, ["prevent"])
        }, null, 8, ["is-disabled", "text", "onClick"])) : it("", !0)]), t.last ? it("", !0) : (ye(), lt(h, {
          key: 0,
          "is-disabled": !t.isValid,
          class: "feedback-form__btn feedback-form__btn--mobile",
          text: "→",
          onClick: i
        }, null, 8, ["is-disabled"])), se(n) && t.isValid && !t.last ? (ye(), Ie("div", WP, Ue(u.$t("form.press")) + " ↩ ", 1)) : it("", !0)], 2)
      }
    }
  }),
  YP = Br(XP, [
    ["__scopeId", "data-v-0ddff71c"]
  ]);

function zP(r = 0, e = 0) {
  return r + e
}
const GP = {
    class: "user-card"
  },
  qP = {
    key: 0,
    class: "user-card__image"
  },
  KP = ae("div", {
    class: "user-card__online"
  }, null, -1),
  QP = ["src", "alt"],
  JP = {
    class: "user-card__content"
  },
  ZP = {
    class: "text-p3 user-card__name"
  },
  e8 = {
    class: "text-p3 user-card__position"
  },
  t8 = et({
    __name: "UserCard",
    props: {
      name: {},
      position: {},
      photo: {},
      pageName: {}
    },
    setup(r) {
      return (e, t) => (ye(), Ie("div", GP, [e.photo ? (ye(), Ie("div", qP, [KP, ae("img", {
        src: e.photo,
        alt: `${e.pageName??"person"}, ${e.$t("photo_word")} ${("photoIndex"in e?e.photoIndex:se(zP))(100)}`,
        class: "user-card__img"
      }, null, 8, QP)])) : it("", !0), ae("div", JP, [ae("h4", ZP, Ue(e.name), 1), ae("p", e8, Ue(e.position), 1)])]))
    }
  }),
  r8 = r => (Ec("data-v-8a0bd028"), r = r(), kc(), r),
  n8 = ["data-current-step"],
  i8 = {
    class: "feedback-popup__wrap",
    "data-lenis-prevent": ""
  },
  o8 = {
    key: 0,
    class: "feedback-popup__content"
  },
  s8 = ["onClick"],
  a8 = {
    key: 0,
    class: "mobile-steps__arrow"
  },
  l8 = {
    class: "text-p3 feedback-popup__subtitle"
  },
  c8 = {
    class: "feedback-popup__info"
  },
  u8 = {
    class: "text-p1 feedback-popup__text"
  },
  f8 = {
    class: "feedback-popup__title-wrap"
  },
  h8 = {
    class: "title-h1 feedback-popup__title"
  },
  d8 = {
    class: "popup__form"
  },
  p8 = {
    class: "title-h1 feedback-popup__step"
  },
  _8 = {
    class: "feedback-popup__step-current"
  },
  g8 = {
    key: 1,
    class: "feedback-popup__final sending"
  },
  m8 = {
    class: "title-h1 feedback-popup__final-title"
  },
  y8 = {
    key: 2,
    class: "feedback-popup__final thanks"
  },
  b8 = {
    class: "title-h1 feedback-popup__final-title"
  },
  v8 = {
    class: "text-p1 feedback-popup__final-text"
  },
  D8 = {
    class: "thanks__card card"
  },
  w8 = {
    class: "card__picture"
  },
  x8 = ["src", "alt"],
  C8 = {
    class: "card__name T8"
  },
  E8 = {
    class: "T6 card__contact-wrapper"
  },
  k8 = r8(() => ae("div", {
    class: "card__arrow"
  }, [ae("svg", {
    width: "17",
    height: "13",
    viewBox: "0 0 17 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [ae("path", {
    d: "M12.5085 12.8551V4.41761L16.7273 8.63636L12.5085 12.8551ZM0.988636 9.40341V0.454545H2.52273V9.40341H0.988636ZM1.03125 9.40341V7.86932H13.8011V9.40341H1.03125Z",
    fill: "#261723"
  })])], -1)),
  S8 = {
    class: "card__contact"
  },
  T8 = ["href"],
  P8 = ["href"],
  L8 = et({
    __name: "CommonPopup",
    props: {
      stepTitles: {},
      step: {},
      isFormSending: {
        type: Boolean
      },
      isFormSuccess: {
        type: Boolean
      },
      userCard: {},
      description: {},
      label: {},
      isLink: {},
      thanksText: {},
      thanksPersonName: {},
      thanksPersonPhoto: {},
      thanksPersonPhone: {},
      thanksPersonEmail: {}
    },
    emits: ["togglePopup", "prevStep", "changeType"],
    setup(r, {
      emit: e
    }) {
      const t = r,
        n = t.thanksPersonPhone.replaceAll(/[^0-9]/g, "");

      function i() {
        e("togglePopup")
      }
      const o = () => {
        e("prevStep")
      };

      function s(a) {
        e("changeType", a)
      }
      return (a, l) => {
        const c = t8,
          u = e2;
        return ye(), Ie("div", {
          class: "feedback-popup",
          "data-current-step": a.step
        }, [ae("div", i8, [!t.isFormSending && !t.isFormSuccess ? (ye(), Ie("div", o8, [ae("button", {
          class: "T7 mobile-steps",
          onClick: Hu(o, ["stop"])
        }, [a.step !== 1 ? (ye(), Ie("span", a8, "←")) : it("", !0), ae("span", null, Ue(a.step) + " ", 1), Vt("/ " + Ue(a.stepTitles.length), 1)], 8, s8), ae("h5", l8, Ue(t.label), 1), ae("div", c8, [ae("p", u8, Ue(t.description), 1), Ye(c, {
          class: "feedback-popup__user",
          name: t.userCard.name,
          position: t.userCard.position,
          photo: t.userCard.photo
        }, null, 8, ["name", "position", "photo"])]), Ye(u, {
          onClick: i,
          class: "feedback-popup__close"
        }), ae("div", f8, [ae("h2", h8, Ue(t.stepTitles[a.step - 1]), 1), ae("div", null, [a.step === 6 && a.isLink === "file" ? (ye(), Ie("p", {
          key: 0,
          onClick: l[0] || (l[0] = d => s("link")),
          class: "T6 feedback-popup__link link-2"
        }, Ue(a.$t("form.have.link")) + "  ", 1)) : it("", !0), a.step === 6 && a.isLink === "link" ? (ye(), Ie("p", {
          key: 1,
          onClick: l[1] || (l[1] = d => s("file")),
          class: "T6 feedback-popup__link link-2"
        }, Ue(a.$t("form.have.file")), 1)) : it("", !0)])]), ae("div", d8, [_2(a.$slots, "default", {}, void 0, !0)]), it("", !0), ae("div", p8, [ae("span", _8, Ue(a.step), 1), Vt(" / " + Ue(t.stepTitles.length), 1)])])) : it("", !0), t.isFormSending ? (ye(), Ie("div", g8, [ae("h4", m8, Ue(a.$t("form.sending")), 1), Ye(u, {
          onClick: i,
          class: "feedback-popup__close"
        })])) : it("", !0), t.isFormSuccess ? (ye(), Ie("div", y8, [ae("h4", b8, Ue(a.$t("form.sent.title")), 1), Ye(u, {
          onClick: i,
          class: "feedback-popup__close"
        }), ae("p", v8, Ue(t.thanksText), 1), ae("div", D8, [ae("picture", w8, [ae("img", {
          src: t.thanksPersonPhoto,
          alt: t.thanksPersonEmail
        }, null, 8, x8)]), ae("p", C8, Ue(t.thanksPersonName), 1), ae("div", E8, [k8, ae("div", S8, [ae("a", {
          href: "mailto:" + t.thanksPersonEmail,
          class: "link-2"
        }, Ue(t.thanksPersonEmail), 9, T8), ae("a", {
          href: "tel:+" + se(n),
          class: "link-2"
        }, Ue(t.thanksPersonPhone), 9, P8)])]), it("", !0)])])) : it("", !0)])], 8, n8)
      }
    }
  }),
  A8 = Br(L8, [
    ["__scopeId", "data-v-8a0bd028"]
  ]);

function R8() {
  const r = we(""),
    e = {
      max: 255,
      is_required: !0
    },
    t = Se(() => Yi(r.value, e.is_required, e.max)),
    n = we(""),
    i = {
      max: 255,
      is_required: !0
    },
    o = Se(() => Yi(n.value, i.is_required, i.max)),
    s = we(""),
    a = {
      max: 255,
      is_required: !0
    },
    l = Se(() => Yi(s.value, a.is_required, a.max)),
    c = we(""),
    u = {
      max: 255,
      is_required: !0
    },
    d = Se(() => Yi(c.value, u.is_required, u.max)),
    h = we(""),
    f = {
      max: 255,
      is_required: !0
    },
    _ = Se(() => Yi(h.value, f.is_required, f.max)),
    p = we(""),
    m = Se(() => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(p.value)),
    g = we(""),
    y = Se(() => /^\+?[0-9\s-]{10,14}$/.test(g.value)),
    b = we(""),
    v = {
      max: 5e3,
      is_required: !0
    },
    D = Se(() => Yi(b.value, v.is_required, v.max)),
    k = we(""),
    w = {
      max: 5e3,
      is_required: !0
    },
    S = Se(() => Yi(k.value, w.is_required, w.max)),
    P = we(!1),
    C = we(!1);
  async function R() {
    var B;
    if (N()) {
      P.value = !0;
      try {
        const {
          data: z
        } = await Pw("/api/feedback", {
          method: "POST",
          body: {
            name: r.value,
            company: n.value,
            position: s.value,
            location: c.value,
            challenge: h.value,
            email: p.value,
            phone: g.value,
            description: b.value,
            hear: k.value
          }
        }, "$wCY3IqdHz7");
        z && ((B = z.value) == null ? void 0 : B.status) === "success" && (C.value = !0)
      } catch (z) {
        console.log(z)
      }
      P.value = !1
    }
  }

  function N() {
    return t.value && o.value && l.value && d.value && _.value && m.value && y.value
  }
  return {
    name: r,
    company: n,
    position: s,
    location: c,
    challenge: h,
    email: p,
    phone: g,
    description: b,
    hear: k,
    isNameValid: t,
    isCompanyValid: o,
    isPositionValid: l,
    isLocationValid: d,
    isChallengeValid: _,
    isEmailValid: m,
    isPhoneValid: y,
    isDescriptionValid: D,
    isHearValid: S,
    isFormSending: P,
    isFormSuccess: C,
    submitForm: R
  }
}

function Yi(r = "", e = !1, t = 255) {
  const n = r.trim();
  return n.length <= t && (e ? n.length > 0 : !0)
}
const O8 = et({
    __name: "Popup",
    setup(r) {
      const {
        t: e
      } = ii(), t = An("feedback-form-popup");

      function n() {
        t.value = !t.value
      }
      const i = we(1),
        o = () => {
          i.value === 8 || (i.value += 1)
        },
        s = () => {
          i.value !== 1 && (i.value -= 1)
        },
        a = [e("form.feedback1"), e("form.feedback2"), e("form.feedback3"), e("form.feedback4"), e("form.feedback5"), e("form.feedback6"), e("form.feedback7")],
        l = [e("form.challenges.var1"), e("form.challenges.var2"), e("form.challenges.var3"), e("form.challenges.var4"), e("form.challenges.var5")],
        {
          name: c,
          company: u,
          position: d,
          location: h,
          challenge: f,
          email: _,
          phone: p,
          description: m,
          hear: g,
          isNameValid: y,
          isCompanyValid: b,
          isPositionValid: v,
          isLocationValid: D,
          isChallengeValid: k,
          isEmailValid: w,
          isPhoneValid: S,
          isDescriptionValid: P,
          isHearValid: C,
          isFormSending: R,
          isFormSuccess: N,
          submitForm: B
        } = R8(),
        {
          $lenis: z
        } = Ve();
      return Pn(() => {
        z.stop()
      }), va(() => {
        z.start()
      }), (U, V) => {
        const Y = $P,
          oe = YP,
          $ = A8;
        return ye(), lt($, {
          step: se(i),
          "step-titles": a,
          "is-form-sending": se(R),
          "is-form-success": se(N),
          "user-card": {
            name: U.$t("form.nameFeedback"),
            position: U.$t("form.profFeedback"),
            photo: "/img/woman.png"
          },
          label: U.$t("form.titleFeedback"),
          description: U.$t("form.textFeedback"),
          "thanks-person-email": "y.gladky@grape.ua",
          "thanks-person-phone": "+380 (50) 311-18-74",
          "thanks-person-photo": "/img/YuriyGladkyi.png",
          "thanks-person-name": U.$t("form_popup.feedback.thanks.person.name"),
          "thanks-text": U.$t("form_popup.feedback.thanks.text"),
          onTogglePopup: n,
          onPrevStep: s,
          onSubmitForm: se(B)
        }, {
          default: Ln(() => [se(i) === 1 ? (ye(), lt(Y, {
            key: 0,
            class: "feedback-popup__form",
            modelValue: se(c),
            "onUpdate:modelValue": V[0] || (V[0] = L => At(c) ? c.value = L : null),
            "is-valid": se(y),
            onNextStep: o
          }, null, 8, ["modelValue", "is-valid"])) : it("", !0), se(i) === 2 ? (ye(), lt(Y, {
            key: 1,
            class: "feedback-popup__form",
            modelValue: se(u),
            "onUpdate:modelValue": V[1] || (V[1] = L => At(u) ? u.value = L : null),
            "is-valid": se(b),
            "has-back-button": "",
            onNextStep: o,
            onPrevStep: s
          }, null, 8, ["modelValue", "is-valid"])) : se(i) === 3 ? (ye(), lt(Y, {
            key: 2,
            class: "feedback-popup__form",
            modelValue: se(d),
            "onUpdate:modelValue": V[2] || (V[2] = L => At(d) ? d.value = L : null),
            "is-valid": se(v),
            "has-back-button": "",
            onNextStep: o,
            onPrevStep: s
          }, null, 8, ["modelValue", "is-valid"])) : se(i) === 4 ? (ye(), lt(Y, {
            key: 3,
            class: "feedback-popup__form",
            modelValue: se(h),
            "onUpdate:modelValue": V[3] || (V[3] = L => At(h) ? h.value = L : null),
            "is-valid": se(D),
            "has-back-button": "",
            onNextStep: o,
            onPrevStep: s
          }, null, 8, ["modelValue", "is-valid"])) : se(i) === 5 ? (ye(), lt(oe, {
            key: 4,
            class: "feedback-popup__form",
            modelValue: se(f),
            "onUpdate:modelValue": V[4] || (V[4] = L => At(f) ? f.value = L : null),
            "is-valid": se(k),
            "list-items": l,
            "has-back-button": "",
            onNextStep: o,
            onPrevStep: s
          }, null, 8, ["modelValue", "is-valid"])) : se(i) === 6 ? (ye(), lt(Y, {
            key: 5,
            class: "feedback-popup__form",
            modelValue: se(_),
            "onUpdate:modelValue": V[5] || (V[5] = L => At(_) ? _.value = L : null),
            "is-valid": se(w),
            "has-back-button": "",
            onNextStep: o,
            onPrevStep: s
          }, null, 8, ["modelValue", "is-valid"])) : se(i) === 7 ? (ye(), lt(Y, {
            key: 6,
            class: "feedback-popup__form",
            modelValue: se(p),
            "onUpdate:modelValue": V[6] || (V[6] = L => At(p) ? p.value = L : null),
            "is-valid": se(S),
            "has-back-button": "",
            onPrevStep: s,
            onSubmitForm: se(B),
            last: !0
          }, null, 8, ["modelValue", "is-valid", "onSubmitForm"])) : it("", !0)]),
          _: 1
        }, 8, ["step", "is-form-sending", "is-form-success", "user-card", "label", "description", "thanks-person-name", "thanks-text", "onSubmitForm"])
      }
    }
  }),
  F8 = window.setInterval,
  n2 = "play none none reset",
  M8 = r => {
    const e = new oi(r, {
      type: "words"
    });
    Pe.create({
      trigger: r,
      toggleActions: n2,
      animation: _t.timeline().from(e.words, {
        visibility: "hidden",
        stagger: {
          each: .03,
          from: "random"
        }
      })
    })
  },
  z8 = r => {
    const e = new oi(r, {
      type: "words"
    });
    _t.timeline().from(e.words, {
      visibility: "hidden",
      stagger: {
        each: .03,
        from: "random"
      }
    })
  },
  G8 = r => {
    const e = new oi(r, {
      type: "words"
    });
    Pe.create({
      trigger: r,
      toggleActions: n2,
      animation: _t.timeline().from(e.words, {
        visibility: "hidden",
        stagger: {
          each: .03,
          from: "random"
        }
      })
    })
  },
  q8 = r => {
    const e = new oi(r, {
      type: "words"
    });
    _t.timeline().from(e.words, {
      visibility: "hidden",
      stagger: {
        each: .03,
        from: "random"
      }
    })
  },
  N8 = () => {
    window.innerWidth <= 1024 || document.querySelectorAll(".title-h1t > a, .title-h1t > span, .title-h1t > div > em").forEach(r => {
      let e = new oi(r, {
          type: "chars,words"
        }),
        t = _t.fromTo(e.chars, {
          scale: 1
        }, {
          scaleY: -1,
          transformOrigin: "center 60%",
          stagger: .04,
          duration: .4,
          paused: !0,
          onStart: () => {
            r.classList.add("hover")
          },
          onReverseComplete: () => {
            r.classList.remove("hover")
          }
        });
      r.addEventListener("mouseenter", () => {
        document.body.classList.contains("high-theme") && t.play()
      }), r.addEventListener("mouseleave", () => {
        document.body.classList.contains("high-theme") && t.reverse()
      })
    })
  },
  K8 = r => {
    if (!r) return;
    let e = new oi(r, {
        type: "chars,words"
      }),
      t = _t.fromTo(e.chars, {
        scale: 1
      }, {
        scaleY: -1,
        transformOrigin: "center 60%",
        stagger: .04,
        duration: .4,
        paused: !0,
        onStart: () => {
          r.classList.add("hover")
        },
        onReverseComplete: () => {
          r.classList.remove("hover")
        }
      });
    r.addEventListener("mouseenter", () => {
      document.body.classList.contains("high-theme") && t.play()
    }), r.addEventListener("mouseleave", () => {
      document.body.classList.contains("high-theme") && t.reverse()
    })
  },
  Q8 = () => {
    document.querySelectorAll(".btn-main, .btn-secondary").forEach(r => {
      if (r.getAttribute("data-button-split")) return;
      const e = r.textContent;
      r.textContent = "";
      const t = document.createElement("span");
      t.innerHTML = e, r.innerHTML = t.outerHTML + t.outerHTML, r.setAttribute("data-button-split", !0)
    })
  },
  I8 = {
    class: "error-page"
  },
  $8 = {
    class: "error-page__content"
  },
  B8 = {
    class: "title-h1t error-page__title"
  },
  V8 = ae("sup", null, "404", -1),
  H8 = ae("br", null, null, -1),
  U8 = ae("br", null, null, -1),
  j8 = et({
    __name: "error",
    setup(r) {
      let e;
      const t = () => {
          const l = window.innerWidth < 1200,
            c = _t.utils.toArray(`.error-page__img${l?"-mobile":""} circle`),
            u = _t.utils.toArray(`.error-page__img${l?"-mobile":""} circle:not(.hide)`),
            d = [],
            h = [];
          for (; d.length < (l ? 3 : 5);) {
            const p = Math.floor(Math.random() * c.length);
            d.includes(p) || d.push(p)
          }
          const f = d.map(p => c[p]);
          for (_t.to(f, {
              scale: 0,
              duration: .8,
              transformOrigin: "center",
              ease: "0.68, 0, 0.84, 0"
            }), f.forEach(p => p.classList.remove("hide")); h.length < (l ? 3 : 5);) {
            const p = Math.floor(Math.random() * u.length);
            h.includes(p) || h.push(p)
          }
          const _ = h.map(p => u[p]);
          _t.to(_, {
            scale: 1,
            duration: .8,
            transformOrigin: "center",
            delay: .4
          }), _.forEach(p => p.classList.add("hide"))
        },
        n = we(!0);
      to("high", {
        high: n,
        toggleTheme: () => {
          n.value = !n.value
        }
      });
      const o = An("is-creative", () => !1);
      Ir(o, l => {
        l ? window.localStorage.setItem("high-theme", "true") : window.localStorage.removeItem("high-theme")
      }), Pn(() => {
        localStorage.getItem("high-theme") && (o.value = !0)
      });
      const s = An("feedback-form-popup"),
        a = Kc();
      return Pn(() => {
        const l = document.querySelector(".error-page__title");
        l && M8(l), N8(), document.querySelectorAll(`.error-page__img${window.innerWidth<1200?"-mobile":""} circle`).forEach(u => {
          Math.random() > .85 ? (u.classList.remove("hide"), _t.set(u, {
            scale: 0,
            transformOrigin: "center"
          })) : u.classList.add("hide")
        }), e = F8(() => {
          t()
        }, 1e3)
      }), bh(() => {
        e && clearTimeout(e)
      }), (l, c) => {
        const u = FT,
          d = lP,
          h = dP,
          f = bP,
          _ = EP,
          p = Ga,
          m = O8;
        return ye(), Ie("div", I8, [Ye(u, {
          class: po({
            "high-theme": se(o)
          })
        }, null, 8, ["class"]), Ye(d), Ye(h), ae("div", $8, [Ye(f, {
          class: "error-page__img"
        }), Ye(_, {
          class: "error-page__img-mobile"
        }), ae("h1", B8, [Vt(Ue(l.$t("error_page.title")) + " ", 1), V8, H8, Vt(Ue(l.$t("error_page.description_1")), 1), U8, Vt(Ue(l.$t("error_page.description_2")) + " ", 1), Ye(p, {
          to: se(a)("/")
        }, {
          default: Ln(() => [Vt(Ue(l.$t("error_page.link")), 1)]),
          _: 1
        }, 8, ["to"]), Vt(". ")])]), se(s) ? (ye(), lt(m, {
          key: 0
        })) : it("", !0)])
      }
    }
  }),
  W8 = {
    __name: "nuxt-root",
    setup(r) {
      const e = () => null,
        t = Ve(),
        n = t.deferHydration();
      if (t.isHydrating) {
        const a = t.hooks.hookOnce("app:error", n);
        Zt().beforeEach(a)
      }
      const i = !1;
      to(Ya, ni()), t.hooks.callHookWith(a => a.map(l => l()), "vue:setup");
      const o = Tc();
      g2((a, l, c) => {
        if (t.hooks.callHook("vue:error", a, l, c).catch(u => console.error("[nuxt] Error in `vue:error` hook", u)), nv(a) && (a.fatal || a.unhandled)) return t.runWithContext(() => Yo(a)), !1
      });
      const s = !1;
      return (a, l) => (ye(), lt(wh, {
        onResolve: se(n)
      }, {
        default: Ln(() => [se(o) ? (ye(), lt(se(j8), {
          key: 0,
          error: se(o)
        }, null, 8, ["error"])) : se(s) ? (ye(), lt(se(e), {
          key: 1,
          context: se(s)
        }, null, 8, ["context"])) : se(i) ? (ye(), lt(m2(se(i)), {
          key: 2
        })) : (ye(), lt(se(LT), {
          key: 3
        }))]),
        _: 1
      }, 8, ["onResolve"]))
    }
  },
  L0 = W8;
let A0;
{
  let r;
  A0 = async function() {
    var s, a;
    if (r) return r;
    const n = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? y2(L0) : b2(L0),
      i = xb({
        vueApp: n
      });
    async function o(l) {
      await i.callHook("app:error", l), i.payload.error = i.payload.error || za(l)
    }
    n.config.errorHandler = o;
    try {
      await Eb(i, mT)
    } catch (l) {
      o(l)
    }
    try {
      await i.hooks.callHook("app:created", n), await i.hooks.callHook("app:beforeMount", n), n.mount(aD), await i.hooks.callHook("app:mounted", n), await vo()
    } catch (l) {
      o(l)
    }
    return n.config.errorHandler === o && (n.config.errorHandler = void 0), n
  }, r = A0().catch(e => {
    throw console.error("Error while mounting app:", e), e
  })
}
export {
  YP as A, A8 as B, q8 as C, Za as D, xr as E, zc as F, C1 as G, yg as H, hg as I, Y8 as J, Ng as K, Pw as L, FT as M, lP as N, dP as O, O8 as P, Gw as Q, oi as S, Br as _, ii as a, qw as b, An as c, Ga as d, Pe as e, N8 as f, _t as g, za as h, kw as i, F8 as j, M8 as k, r2 as l, G8 as m, rg as n, t8 as o, zP as p, Od as q, Ve as r, Q8 as s, e2 as t, Kc as u, ni as v, K8 as w, z8 as x, Xa as y, $P as z
};