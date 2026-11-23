/* https://grape.ua/_nuxt/swiper-vue.BTZulNLT.js */
function vi(e, t) {
  const n = Object.create(null),
    i = e.split(",");
  for (let s = 0; s < i.length; s++) n[i[s]] = !0;
  return t ? s => !!n[s.toLowerCase()] : s => !!n[s]
}
const ie = {},
  wt = [],
  $e = () => {},
  pl = () => !1,
  hl = /^on[^a-z]/,
  Jt = e => hl.test(e),
  wi = e => e.startsWith("onUpdate:"),
  ae = Object.assign,
  yi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  gl = Object.prototype.hasOwnProperty,
  J = (e, t) => gl.call(e, t),
  W = Array.isArray,
  yt = e => Zt(e) === "[object Map]",
  Ws = e => Zt(e) === "[object Set]",
  ml = e => Zt(e) === "[object RegExp]",
  q = e => typeof e == "function",
  se = e => typeof e == "string",
  bi = e => typeof e == "symbol",
  ne = e => e !== null && typeof e == "object",
  Si = e => ne(e) && q(e.then) && q(e.catch),
  qs = Object.prototype.toString,
  Zt = e => qs.call(e),
  vl = e => Zt(e).slice(8, -1),
  Us = e => Zt(e) === "[object Object]",
  Ti = e => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Dt = vi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Pn = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
  },
  wl = /-(\w)/g,
  He = Pn(e => e.replace(wl, (t, n) => n ? n.toUpperCase() : "")),
  yl = /\B([A-Z])/g,
  ht = Pn(e => e.replace(yl, "-$1").toLowerCase()),
  Mn = Pn(e => e.charAt(0).toUpperCase() + e.slice(1)),
  $n = Pn(e => e ? `on${Mn(e)}` : ""),
  Vt = (e, t) => !Object.is(e, t),
  Rt = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  vn = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    })
  },
  bl = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  Ks = e => {
    const t = se(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let ns;
const ti = () => ns || (ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function xi(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = se(i) ? El(i) : xi(i);
      if (s)
        for (const r in s) t[r] = s[r]
    }
    return t
  } else {
    if (se(e)) return e;
    if (ne(e)) return e
  }
}
const Sl = /;(?![^(]*\))/g,
  Tl = /:([^]+)/,
  xl = /\/\*[^]*?\*\//g;

function El(e) {
  const t = {};
  return e.replace(xl, "").split(Sl).forEach(n => {
    if (n) {
      const i = n.split(Tl);
      i.length > 1 && (t[i[0].trim()] = i[1].trim())
    }
  }), t
}

function Ei(e) {
  let t = "";
  if (se(e)) t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ei(e[n]);
      i && (t += i + " ")
    } else if (ne(e))
      for (const n in e) e[n] && (t += n + " ");
  return t.trim()
}
const Cl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  _l = vi(Cl);

function Ys(e) {
  return !!e || e === ""
}
const Eu = e => se(e) ? e : e == null ? "" : W(e) || ne(e) && (e.toString === qs || !q(e.toString)) ? JSON.stringify(e, Xs, 2) : String(e),
  Xs = (e, t) => t && t.__v_isRef ? Xs(e, t.value) : yt(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [i, s]) => (n[`${i} =>`] = s, n), {})
  } : Ws(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : ne(t) && !W(t) && !Us(t) ? String(t) : t;
let Ee;
class Js {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t()
      } finally {
        Ee = n
      }
    }
  }
  on() {
    Ee = this
  }
  off() {
    Ee = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
      }
      this.parent = void 0, this._active = !1
    }
  }
}

function Cu(e) {
  return new Js(e)
}

function Pl(e, t = Ee) {
  t && t.active && t.effects.push(e)
}

function Ml() {
  return Ee
}

function _u(e) {
  Ee && Ee.cleanups.push(e)
}
const Ci = e => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t
  },
  Zs = e => (e.w & it) > 0,
  Qs = e => (e.n & it) > 0,
  Il = ({
    deps: e
  }) => {
    if (e.length)
      for (let t = 0; t < e.length; t++) e[t].w |= it
  },
  Ol = e => {
    const {
      deps: t
    } = e;
    if (t.length) {
      let n = 0;
      for (let i = 0; i < t.length; i++) {
        const s = t[i];
        Zs(s) && !Qs(s) ? s.delete(e) : t[n++] = s, s.w &= ~it, s.n &= ~it
      }
      t.length = n
    }
  },
  wn = new WeakMap;
let Bt = 0,
  it = 1;
const ni = 30;
let Be;
const ct = Symbol(""),
  ii = Symbol("");
class _i {
  constructor(t, n = null, i) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Pl(this, i)
  }
  run() {
    if (!this.active) return this.fn();
    let t = Be,
      n = et;
    for (; t;) {
      if (t === this) return;
      t = t.parent
    }
    try {
      return this.parent = Be, Be = this, et = !0, it = 1 << ++Bt, Bt <= ni ? Il(this) : is(this), this.fn()
    } finally {
      Bt <= ni && Ol(this), it = 1 << --Bt, Be = this.parent, et = n, this.parent = void 0, this.deferStop && this.stop()
    }
  }
  stop() {
    Be === this ? this.deferStop = !0 : this.active && (is(this), this.onStop && this.onStop(), this.active = !1)
  }
}

function is(e) {
  const {
    deps: t
  } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0
  }
}
let et = !0;
const er = [];

function Mt() {
  er.push(et), et = !1
}

function It() {
  const e = er.pop();
  et = e === void 0 ? !0 : e
}

function Te(e, t, n) {
  if (et && Be) {
    let i = wn.get(e);
    i || wn.set(e, i = new Map);
    let s = i.get(n);
    s || i.set(n, s = Ci()), tr(s)
  }
}

function tr(e, t) {
  let n = !1;
  Bt <= ni ? Qs(e) || (e.n |= it, n = !Zs(e)) : n = !e.has(Be), n && (e.add(Be), Be.deps.push(e))
}

function We(e, t, n, i, s, r) {
  const l = wn.get(e);
  if (!l) return;
  let a = [];
  if (t === "clear") a = [...l.values()];
  else if (n === "length" && W(e)) {
    const o = Number(i);
    l.forEach((u, f) => {
      (f === "length" || f >= o) && a.push(u)
    })
  } else switch (n !== void 0 && a.push(l.get(n)), t) {
    case "add":
      W(e) ? Ti(n) && a.push(l.get("length")) : (a.push(l.get(ct)), yt(e) && a.push(l.get(ii)));
      break;
    case "delete":
      W(e) || (a.push(l.get(ct)), yt(e) && a.push(l.get(ii)));
      break;
    case "set":
      yt(e) && a.push(l.get(ct));
      break
  }
  if (a.length === 1) a[0] && si(a[0]);
  else {
    const o = [];
    for (const u of a) u && o.push(...u);
    si(Ci(o))
  }
}

function si(e, t) {
  const n = W(e) ? e : [...e];
  for (const i of n) i.computed && ss(i);
  for (const i of n) i.computed || ss(i)
}

function ss(e, t) {
  (e !== Be || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

function Al(e, t) {
  var n;
  return (n = wn.get(e)) == null ? void 0 : n.get(t)
}
const Ll = vi("__proto__,__v_isRef,__isVue"),
  nr = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(bi)),
  Bl = Pi(),
  Fl = Pi(!1, !0),
  Nl = Pi(!0),
  rs = Dl();

function Dl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
    e[t] = function(...n) {
      const i = Z(this);
      for (let r = 0, l = this.length; r < l; r++) Te(i, "get", r + "");
      const s = i[t](...n);
      return s === -1 || s === !1 ? i[t](...n.map(Z)) : s
    }
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
    e[t] = function(...n) {
      Mt();
      const i = Z(this)[t].apply(this, n);
      return It(), i
    }
  }), e
}

function Rl(e) {
  const t = Z(this);
  return Te(t, "has", e), t.hasOwnProperty(e)
}

function Pi(e = !1, t = !1) {
  return function(i, s, r) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && r === (e ? t ? Ql : or : t ? lr : rr).get(i)) return i;
    const l = W(i);
    if (!e) {
      if (l && J(rs, s)) return Reflect.get(rs, s, r);
      if (s === "hasOwnProperty") return Rl
    }
    const a = Reflect.get(i, s, r);
    return (bi(s) ? nr.has(s) : Ll(s)) || (e || Te(i, "get", s), t) ? a : ue(a) ? l && Ti(s) ? a : a.value : ne(a) ? e ? ar(a) : Oi(a) : a
  }
}
const zl = ir(),
  $l = ir(!0);

function ir(e = !1) {
  return function(n, i, s, r) {
    let l = n[i];
    if (Et(l) && ue(l) && !ue(s)) return !1;
    if (!e && (!yn(s) && !Et(s) && (l = Z(l), s = Z(s)), !W(n) && ue(l) && !ue(s))) return l.value = s, !0;
    const a = W(n) && Ti(i) ? Number(i) < n.length : J(n, i),
      o = Reflect.set(n, i, s, r);
    return n === Z(r) && (a ? Vt(s, l) && We(n, "set", i, s) : We(n, "add", i, s)), o
  }
}

function Hl(e, t) {
  const n = J(e, t);
  e[t];
  const i = Reflect.deleteProperty(e, t);
  return i && n && We(e, "delete", t, void 0), i
}

function jl(e, t) {
  const n = Reflect.has(e, t);
  return (!bi(t) || !nr.has(t)) && Te(e, "has", t), n
}

function kl(e) {
  return Te(e, "iterate", W(e) ? "length" : ct), Reflect.ownKeys(e)
}
const sr = {
    get: Bl,
    set: zl,
    deleteProperty: Hl,
    has: jl,
    ownKeys: kl
  },
  Vl = {
    get: Nl,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    }
  },
  Gl = ae({}, sr, {
    get: Fl,
    set: $l
  }),
  Mi = e => e,
  In = e => Reflect.getPrototypeOf(e);

function sn(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = Z(e),
    r = Z(t);
  n || (t !== r && Te(s, "get", t), Te(s, "get", r));
  const {
    has: l
  } = In(s), a = i ? Mi : n ? Li : Gt;
  if (l.call(s, t)) return a(e.get(t));
  if (l.call(s, r)) return a(e.get(r));
  e !== s && e.get(t)
}

function rn(e, t = !1) {
  const n = this.__v_raw,
    i = Z(n),
    s = Z(e);
  return t || (e !== s && Te(i, "has", e), Te(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function ln(e, t = !1) {
  return e = e.__v_raw, !t && Te(Z(e), "iterate", ct), Reflect.get(e, "size", e)
}

function ls(e) {
  e = Z(e);
  const t = Z(this);
  return In(t).has.call(t, e) || (t.add(e), We(t, "add", e, e)), this
}

function os(e, t) {
  t = Z(t);
  const n = Z(this),
    {
      has: i,
      get: s
    } = In(n);
  let r = i.call(n, e);
  r || (e = Z(e), r = i.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? Vt(t, l) && We(n, "set", e, t) : We(n, "add", e, t), this
}

function as(e) {
  const t = Z(this),
    {
      has: n,
      get: i
    } = In(t);
  let s = n.call(t, e);
  s || (e = Z(e), s = n.call(t, e)), i && i.call(t, e);
  const r = t.delete(e);
  return s && We(t, "delete", e, void 0), r
}

function fs() {
  const e = Z(this),
    t = e.size !== 0,
    n = e.clear();
  return t && We(e, "clear", void 0, void 0), n
}

function on(e, t) {
  return function(i, s) {
    const r = this,
      l = r.__v_raw,
      a = Z(l),
      o = t ? Mi : e ? Li : Gt;
    return !e && Te(a, "iterate", ct), l.forEach((u, f) => i.call(s, o(u), o(f), r))
  }
}

function an(e, t, n) {
  return function(...i) {
    const s = this.__v_raw,
      r = Z(s),
      l = yt(r),
      a = e === "entries" || e === Symbol.iterator && l,
      o = e === "keys" && l,
      u = s[e](...i),
      f = n ? Mi : t ? Li : Gt;
    return !t && Te(r, "iterate", o ? ii : ct), {
      next() {
        const {
          value: c,
          done: d
        } = u.next();
        return d ? {
          value: c,
          done: d
        } : {
          value: a ? [f(c[0]), f(c[1])] : f(c),
          done: d
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function Ke(e) {
  return function(...t) {
    return e === "delete" ? !1 : this
  }
}

function Wl() {
  const e = {
      get(r) {
        return sn(this, r)
      },
      get size() {
        return ln(this)
      },
      has: rn,
      add: ls,
      set: os,
      delete: as,
      clear: fs,
      forEach: on(!1, !1)
    },
    t = {
      get(r) {
        return sn(this, r, !1, !0)
      },
      get size() {
        return ln(this)
      },
      has: rn,
      add: ls,
      set: os,
      delete: as,
      clear: fs,
      forEach: on(!1, !0)
    },
    n = {
      get(r) {
        return sn(this, r, !0)
      },
      get size() {
        return ln(this, !0)
      },
      has(r) {
        return rn.call(this, r, !0)
      },
      add: Ke("add"),
      set: Ke("set"),
      delete: Ke("delete"),
      clear: Ke("clear"),
      forEach: on(!0, !1)
    },
    i = {
      get(r) {
        return sn(this, r, !0, !0)
      },
      get size() {
        return ln(this, !0)
      },
      has(r) {
        return rn.call(this, r, !0)
      },
      add: Ke("add"),
      set: Ke("set"),
      delete: Ke("delete"),
      clear: Ke("clear"),
      forEach: on(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
    e[r] = an(r, !1, !1), n[r] = an(r, !0, !1), t[r] = an(r, !1, !0), i[r] = an(r, !0, !0)
  }), [e, n, t, i]
}
const [ql, Ul, Kl, Yl] = Wl();

function Ii(e, t) {
  const n = t ? e ? Yl : Kl : e ? Ul : ql;
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(J(n, s) && s in i ? n : i, s, r)
}
const Xl = {
    get: Ii(!1, !1)
  },
  Jl = {
    get: Ii(!1, !0)
  },
  Zl = {
    get: Ii(!0, !1)
  },
  rr = new WeakMap,
  lr = new WeakMap,
  or = new WeakMap,
  Ql = new WeakMap;

function eo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0
  }
}

function to(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : eo(vl(e))
}

function Oi(e) {
  return Et(e) ? e : Ai(e, !1, sr, Xl, rr)
}

function no(e) {
  return Ai(e, !1, Gl, Jl, lr)
}

function ar(e) {
  return Ai(e, !0, Vl, Zl, or)
}

function Ai(e, t, n, i, s) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const r = s.get(e);
  if (r) return r;
  const l = to(e);
  if (l === 0) return e;
  const a = new Proxy(e, l === 2 ? i : n);
  return s.set(e, a), a
}

function bt(e) {
  return Et(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Et(e) {
  return !!(e && e.__v_isReadonly)
}

function yn(e) {
  return !!(e && e.__v_isShallow)
}

function fr(e) {
  return bt(e) || Et(e)
}

function Z(e) {
  const t = e && e.__v_raw;
  return t ? Z(t) : e
}

function ur(e) {
  return vn(e, "__v_skip", !0), e
}
const Gt = e => ne(e) ? Oi(e) : e,
  Li = e => ne(e) ? ar(e) : e;

function Bi(e) {
  et && Be && (e = Z(e), tr(e.dep || (e.dep = Ci())))
}

function Fi(e, t) {
  e = Z(e);
  const n = e.dep;
  n && si(n)
}

function ue(e) {
  return !!(e && e.__v_isRef === !0)
}

function we(e) {
  return cr(e, !1)
}

function Pu(e) {
  return cr(e, !0)
}

function cr(e, t) {
  return ue(e) ? e : new io(e, t)
}
class io {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Z(t), this._value = n ? t : Gt(t)
  }
  get value() {
    return Bi(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || yn(t) || Et(t);
    t = n ? t : Z(t), Vt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Gt(t), Fi(this))
  }
}

function dr(e) {
  return ue(e) ? e.value : e
}

function Mu(e) {
  return q(e) ? e() : dr(e)
}
const so = {
  get: (e, t, n) => dr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return ue(s) && !ue(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i)
  }
};

function pr(e) {
  return bt(e) ? e : new Proxy(e, so)
}
class ro {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const {
      get: n,
      set: i
    } = t(() => Bi(this), () => Fi(this));
    this._get = n, this._set = i
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}

function Iu(e) {
  return new ro(e)
}

function Ou(e) {
  const t = W(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = hr(e, n);
  return t
}
class lo {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return Al(Z(this._object), this._key)
  }
}
class oo {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
  }
  get value() {
    return this._getter()
  }
}

function Au(e, t, n) {
  return ue(e) ? e : q(e) ? new oo(e) : ne(e) && arguments.length > 1 ? hr(e, t, n) : we(e)
}

function hr(e, t, n) {
  const i = e[t];
  return ue(i) ? i : new lo(e, t, n)
}
class ao {
  constructor(t, n, i, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new _i(t, () => {
      this._dirty || (this._dirty = !0, Fi(this))
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = i
  }
  get value() {
    const t = Z(this);
    return Bi(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
  }
  set value(t) {
    this._setter(t)
  }
}

function fo(e, t, n = !1) {
  let i, s;
  const r = q(e);
  return r ? (i = e, s = $e) : (i = e.get, s = e.set), new ao(i, s, r || !s, n)
}

function tt(e, t, n, i) {
  let s;
  try {
    s = i ? e(...i) : e()
  } catch (r) {
    Qt(r, t, n)
  }
  return s
}

function Ae(e, t, n, i) {
  if (q(e)) {
    const r = tt(e, t, n, i);
    return r && Si(r) && r.catch(l => {
      Qt(l, t, n)
    }), r
  }
  const s = [];
  for (let r = 0; r < e.length; r++) s.push(Ae(e[r], t, n, i));
  return s
}

function Qt(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy,
      a = n;
    for (; r;) {
      const u = r.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, a) === !1) return
      }
      r = r.parent
    }
    const o = t.appContext.config.errorHandler;
    if (o) {
      tt(o, null, 10, [e, l, a]);
      return
    }
  }
  uo(e, n, s, i)
}

function uo(e, t, n, i = !0) {
  console.error(e)
}
let Wt = !1,
  ri = !1;
const he = [];
let Re = 0;
const St = [];
let Ve = null,
  at = 0;
const gr = Promise.resolve();
let Ni = null;

function mr(e) {
  const t = Ni || gr;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function co(e) {
  let t = Re + 1,
    n = he.length;
  for (; t < n;) {
    const i = t + n >>> 1;
    qt(he[i]) < e ? t = i + 1 : n = i
  }
  return t
}

function Di(e) {
  (!he.length || !he.includes(e, Wt && e.allowRecurse ? Re + 1 : Re)) && (e.id == null ? he.push(e) : he.splice(co(e.id), 0, e), vr())
}

function vr() {
  !Wt && !ri && (ri = !0, Ni = gr.then(yr))
}

function po(e) {
  const t = he.indexOf(e);
  t > Re && he.splice(t, 1)
}

function wr(e) {
  W(e) ? St.push(...e) : (!Ve || !Ve.includes(e, e.allowRecurse ? at + 1 : at)) && St.push(e), vr()
}

function us(e, t = Wt ? Re + 1 : 0) {
  for (; t < he.length; t++) {
    const n = he[t];
    n && n.pre && (he.splice(t, 1), t--, n())
  }
}

function bn(e) {
  if (St.length) {
    const t = [...new Set(St)];
    if (St.length = 0, Ve) {
      Ve.push(...t);
      return
    }
    for (Ve = t, Ve.sort((n, i) => qt(n) - qt(i)), at = 0; at < Ve.length; at++) Ve[at]();
    Ve = null, at = 0
  }
}
const qt = e => e.id == null ? 1 / 0 : e.id,
  ho = (e, t) => {
    const n = qt(e) - qt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1
    }
    return n
  };

function yr(e) {
  ri = !1, Wt = !0, he.sort(ho);
  try {
    for (Re = 0; Re < he.length; Re++) {
      const t = he[Re];
      t && t.active !== !1 && tt(t, null, 14)
    }
  } finally {
    Re = 0, he.length = 0, bn(), Wt = !1, Ni = null, (he.length || St.length) && yr()
  }
}

function go(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ie;
  let s = n;
  const r = t.startsWith("update:"),
    l = r && t.slice(7);
  if (l && l in i) {
    const f = `${l==="modelValue"?"model":l}Modifiers`,
      {
        number: c,
        trim: d
      } = i[f] || ie;
    d && (s = n.map(m => se(m) ? m.trim() : m)), c && (s = n.map(bl))
  }
  let a, o = i[a = $n(t)] || i[a = $n(He(t))];
  !o && r && (o = i[a = $n(ht(t))]), o && Ae(o, e, 6, s);
  const u = i[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = !0, Ae(u, e, 6, s)
  }
}

function br(e, t, n = !1) {
  const i = t.emitsCache,
    s = i.get(e);
  if (s !== void 0) return s;
  const r = e.emits;
  let l = {},
    a = !1;
  if (!q(e)) {
    const o = u => {
      const f = br(u, t, !0);
      f && (a = !0, ae(l, f))
    };
    !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o)
  }
  return !r && !a ? (ne(e) && i.set(e, null), null) : (W(r) ? r.forEach(o => l[o] = null) : ae(l, r), ne(e) && i.set(e, l), l)
}

function On(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, ht(t)) || J(e, t))
}
let ce = null,
  An = null;

function Sn(e) {
  const t = ce;
  return ce = e, An = e && e.type.__scopeId || null, t
}

function Lu(e) {
  An = e
}

function Bu() {
  An = null
}

function mo(e, t = ce, n) {
  if (!t || e._n) return e;
  const i = (...s) => {
    i._d && xs(-1);
    const r = Sn(t);
    let l;
    try {
      l = e(...s)
    } finally {
      Sn(r), i._d && xs(1)
    }
    return l
  };
  return i._n = !0, i._c = !0, i._d = !0, i
}

function Hn(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: r,
    propsOptions: [l],
    slots: a,
    attrs: o,
    emit: u,
    render: f,
    renderCache: c,
    data: d,
    setupState: m,
    ctx: S,
    inheritAttrs: w
  } = e;
  let C, h;
  const g = Sn(e);
  try {
    if (n.shapeFlag & 4) {
      const v = s || i;
      C = Me(f.call(v, v, c, r, m, d, S)), h = o
    } else {
      const v = t;
      C = Me(v.length > 1 ? v(r, {
        attrs: o,
        slots: a,
        emit: u
      }) : v(r, null)), h = t.props ? o : wo(o)
    }
  } catch (v) {
    jt.length = 0, Qt(v, e, 1), C = de(ye)
  }
  let y = C;
  if (h && w !== !1) {
    const v = Object.keys(h),
      {
        shapeFlag: T
      } = y;
    v.length && T & 7 && (l && v.some(wi) && (h = yo(h, l)), y = qe(y, h))
  }
  return n.dirs && (y = qe(y), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (y.transition = n.transition), C = y, Sn(g), C
}

function vo(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (Pt(i)) {
      if (i.type !== ye || i.children === "v-if") {
        if (t) return;
        t = i
      }
    } else return
  }
  return t
}
const wo = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  yo = (e, t) => {
    const n = {};
    for (const i in e)(!wi(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n
  };

function bo(e, t, n) {
  const {
    props: i,
    children: s,
    component: r
  } = e, {
    props: l,
    children: a,
    patchFlag: o
  } = t, u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && o >= 0) {
    if (o & 1024) return !0;
    if (o & 16) return i ? cs(i, l, u) : !!l;
    if (o & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const d = f[c];
        if (l[d] !== i[d] && !On(u, d)) return !0
      }
    }
  } else return (s || a) && (!a || !a.$stable) ? !0 : i === l ? !1 : i ? l ? cs(i, l, u) : !0 : !!l;
  return !1
}

function cs(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !On(n, r)) return !0
  }
  return !1
}

function Ri({
  vnode: e,
  parent: t
}, n) {
  for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const Sr = e => e.__isSuspense,
  So = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, i, s, r, l, a, o, u) {
      e == null ? To(t, n, i, s, r, l, a, o, u) : xo(e, t, n, i, s, l, a, o, u)
    },
    hydrate: Eo,
    create: zi,
    normalize: Co
  },
  Fu = So;

function Ut(e, t) {
  const n = e.props && e.props[t];
  q(n) && n()
}

function To(e, t, n, i, s, r, l, a, o) {
  const {
    p: u,
    o: {
      createElement: f
    }
  } = o, c = f("div"), d = e.suspense = zi(e, s, i, t, c, n, r, l, a, o);
  u(null, d.pendingBranch = e.ssContent, c, null, i, d, r, l), d.deps > 0 ? (Ut(e, "onPending"), Ut(e, "onFallback"), u(null, e.ssFallback, t, n, i, null, r, l), Tt(d, e.ssFallback)) : d.resolve(!1, !0)
}

function xo(e, t, n, i, s, r, l, a, {
  p: o,
  um: u,
  o: {
    createElement: f
  }
}) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const d = t.ssContent,
    m = t.ssFallback,
    {
      activeBranch: S,
      pendingBranch: w,
      isInFallback: C,
      isHydrating: h
    } = c;
  if (w) c.pendingBranch = d, Fe(d, w) ? (o(w, d, c.hiddenContainer, null, s, c, r, l, a), c.deps <= 0 ? c.resolve() : C && (o(S, m, n, i, s, null, r, l, a), Tt(c, m))) : (c.pendingId++, h ? (c.isHydrating = !1, c.activeBranch = w) : u(w, s, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = f("div"), C ? (o(null, d, c.hiddenContainer, null, s, c, r, l, a), c.deps <= 0 ? c.resolve() : (o(S, m, n, i, s, null, r, l, a), Tt(c, m))) : S && Fe(d, S) ? (o(S, d, n, i, s, c, r, l, a), c.resolve(!0)) : (o(null, d, c.hiddenContainer, null, s, c, r, l, a), c.deps <= 0 && c.resolve()));
  else if (S && Fe(d, S)) o(S, d, n, i, s, c, r, l, a), Tt(c, d);
  else if (Ut(t, "onPending"), c.pendingBranch = d, c.pendingId++, o(null, d, c.hiddenContainer, null, s, c, r, l, a), c.deps <= 0) c.resolve();
  else {
    const {
      timeout: g,
      pendingId: y
    } = c;
    g > 0 ? setTimeout(() => {
      c.pendingId === y && c.fallback(m)
    }, g) : g === 0 && c.fallback(m)
  }
}

function zi(e, t, n, i, s, r, l, a, o, u, f = !1) {
  const {
    p: c,
    m: d,
    um: m,
    n: S,
    o: {
      parentNode: w,
      remove: C
    }
  } = u;
  let h;
  const g = _o(e);
  g && t != null && t.pendingBranch && (h = t.pendingId, t.deps++);
  const y = e.props ? Ks(e.props.timeout) : void 0,
    v = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: l,
      container: i,
      hiddenContainer: s,
      anchor: r,
      deps: 0,
      pendingId: 0,
      timeout: typeof y == "number" ? y : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: f,
      isUnmounted: !1,
      effects: [],
      resolve(T = !1, O = !1) {
        const {
          vnode: $,
          activeBranch: x,
          pendingBranch: _,
          pendingId: E,
          effects: B,
          parentComponent: M,
          container: L
        } = v;
        if (v.isHydrating) v.isHydrating = !1;
        else if (!T) {
          const K = x && _.transition && _.transition.mode === "out-in";
          K && (x.transition.afterLeave = () => {
            E === v.pendingId && d(_, L, Q, 0)
          });
          let {
            anchor: Q
          } = v;
          x && (Q = S(x), m(x, M, v, !0)), K || d(_, L, Q, 0)
        }
        Tt(v, _), v.pendingBranch = null, v.isInFallback = !1;
        let N = v.parent,
          Y = !1;
        for (; N;) {
          if (N.pendingBranch) {
            N.effects.push(...B), Y = !0;
            break
          }
          N = N.parent
        }
        Y || wr(B), v.effects = [], g && t && t.pendingBranch && h === t.pendingId && (t.deps--, t.deps === 0 && !O && t.resolve()), Ut($, "onResolve")
      },
      fallback(T) {
        if (!v.pendingBranch) return;
        const {
          vnode: O,
          activeBranch: $,
          parentComponent: x,
          container: _,
          isSVG: E
        } = v;
        Ut(O, "onFallback");
        const B = S($),
          M = () => {
            v.isInFallback && (c(null, T, _, B, x, null, E, a, o), Tt(v, T))
          },
          L = T.transition && T.transition.mode === "out-in";
        L && ($.transition.afterLeave = M), v.isInFallback = !0, m($, x, null, !0), L || M()
      },
      move(T, O, $) {
        v.activeBranch && d(v.activeBranch, T, O, $), v.container = T
      },
      next() {
        return v.activeBranch && S(v.activeBranch)
      },
      registerDep(T, O) {
        const $ = !!v.pendingBranch;
        $ && v.deps++;
        const x = T.vnode.el;
        T.asyncDep.catch(_ => {
          Qt(_, T, 0)
        }).then(_ => {
          if (T.isUnmounted || v.isUnmounted || v.pendingId !== T.suspenseId) return;
          T.asyncResolved = !0;
          const {
            vnode: E
          } = T;
          ci(T, _, !1), x && (E.el = x);
          const B = !x && T.subTree.el;
          O(T, E, w(x || T.subTree.el), x ? null : S(T.subTree), v, l, o), B && C(B), Ri(T, E.el), $ && --v.deps === 0 && v.resolve()
        })
      },
      unmount(T, O) {
        v.isUnmounted = !0, v.activeBranch && m(v.activeBranch, n, T, O), v.pendingBranch && m(v.pendingBranch, n, T, O)
      }
    };
  return v
}

function Eo(e, t, n, i, s, r, l, a, o) {
  const u = t.suspense = zi(t, i, n, e.parentNode, document.createElement("div"), null, s, r, l, a, !0),
    f = o(e, u.pendingBranch = t.ssContent, n, u, r, l);
  return u.deps === 0 && u.resolve(!1, !0), f
}

function Co(e) {
  const {
    shapeFlag: t,
    children: n
  } = e, i = t & 32;
  e.ssContent = ds(i ? n.default : n), e.ssFallback = i ? ds(n.fallback) : de(ye)
}

function ds(e) {
  let t;
  if (q(e)) {
    const n = _t && e._c;
    n && (e._d = !1, Gi()), e = e(), n && (e._d = !0, t = Oe, kr())
  }
  return W(e) && (e = vo(e)), e = Me(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function Tr(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : wr(e)
}

function Tt(e, t) {
  e.activeBranch = t;
  const {
    vnode: n,
    parentComponent: i
  } = e, s = n.el = t.el;
  i && i.subTree === n && (i.vnode.el = s, Ri(i, s))
}

function _o(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}

function Nu(e, t) {
  return $i(e, null, t)
}
const fn = {};

function zt(e, t, n) {
  return $i(e, t, n)
}

function $i(e, t, {
  immediate: n,
  deep: i,
  flush: s,
  onTrack: r,
  onTrigger: l
} = ie) {
  var a;
  const o = Ml() === ((a = fe) == null ? void 0 : a.scope) ? fe : null;
  let u, f = !1,
    c = !1;
  if (ue(e) ? (u = () => e.value, f = yn(e)) : bt(e) ? (u = () => e, i = !0) : W(e) ? (c = !0, f = e.some(v => bt(v) || yn(v)), u = () => e.map(v => {
      if (ue(v)) return v.value;
      if (bt(v)) return ut(v);
      if (q(v)) return tt(v, o, 2)
    })) : q(e) ? t ? u = () => tt(e, o, 2) : u = () => {
      if (!(o && o.isUnmounted)) return d && d(), Ae(e, o, 3, [m])
    } : u = $e, t && i) {
    const v = u;
    u = () => ut(v())
  }
  let d, m = v => {
      d = g.onStop = () => {
        tt(v, o, 4)
      }
    },
    S;
  if (Yt)
    if (m = $e, t ? n && Ae(t, o, 3, [u(), c ? [] : void 0, m]) : u(), s === "sync") {
      const v = ma();
      S = v.__watcherHandles || (v.__watcherHandles = [])
    } else return $e;
  let w = c ? new Array(e.length).fill(fn) : fn;
  const C = () => {
    if (g.active)
      if (t) {
        const v = g.run();
        (i || f || (c ? v.some((T, O) => Vt(T, w[O])) : Vt(v, w))) && (d && d(), Ae(t, o, 3, [v, w === fn ? void 0 : c && w[0] === fn ? [] : w, m]), w = v)
      } else g.run()
  };
  C.allowRecurse = !!t;
  let h;
  s === "sync" ? h = C : s === "post" ? h = () => pe(C, o && o.suspense) : (C.pre = !0, o && (C.id = o.uid), h = () => Di(C));
  const g = new _i(u, h);
  t ? n ? C() : w = g.run() : s === "post" ? pe(g.run.bind(g), o && o.suspense) : g.run();
  const y = () => {
    g.stop(), o && o.scope && yi(o.scope.effects, g)
  };
  return S && S.push(y), y
}

function Po(e, t, n) {
  const i = this.proxy,
    s = se(e) ? e.includes(".") ? xr(i, e) : () => i[e] : e.bind(i, i);
  let r;
  q(t) ? r = t : (r = t.handler, n = t);
  const l = fe;
  st(this);
  const a = $i(s, r.bind(i), n);
  return l ? st(l) : nt(), a
}

function xr(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++) i = i[n[s]];
    return i
  }
}

function ut(e, t) {
  if (!ne(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
  if (t.add(e), ue(e)) ut(e.value, t);
  else if (W(e))
    for (let n = 0; n < e.length; n++) ut(e[n], t);
  else if (Ws(e) || yt(e)) e.forEach(n => {
    ut(n, t)
  });
  else if (Us(e))
    for (const n in e) ut(e[n], t);
  return e
}

function Du(e, t) {
  const n = ce;
  if (n === null) return e;
  const i = Dn(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [l, a, o, u = ie] = t[r];
    l && (q(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && ut(a), s.push({
      dir: l,
      instance: i,
      value: a,
      oldValue: void 0,
      arg: o,
      modifiers: u
    }))
  }
  return e
}

function De(e, t, n, i) {
  const s = e.dirs,
    r = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    const a = s[l];
    r && (a.oldValue = r[l].value);
    let o = a.dir[i];
    o && (Mt(), Ae(o, n, 8, [e.el, a, e, t]), It())
  }
}

function Mo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return en(() => {
    e.isMounted = !0
  }), tn(() => {
    e.isUnmounting = !0
  }), e
}
const Pe = [Function, Array],
  Er = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Pe,
    onEnter: Pe,
    onAfterEnter: Pe,
    onEnterCancelled: Pe,
    onBeforeLeave: Pe,
    onLeave: Pe,
    onAfterLeave: Pe,
    onLeaveCancelled: Pe,
    onBeforeAppear: Pe,
    onAppear: Pe,
    onAfterAppear: Pe,
    onAppearCancelled: Pe
  },
  Io = {
    name: "BaseTransition",
    props: Er,
    setup(e, {
      slots: t
    }) {
      const n = qi(),
        i = Mo();
      let s;
      return () => {
        const r = t.default && _r(t.default(), !0);
        if (!r || !r.length) return;
        let l = r[0];
        if (r.length > 1) {
          for (const w of r)
            if (w.type !== ye) {
              l = w;
              break
            }
        }
        const a = Z(e),
          {
            mode: o
          } = a;
        if (i.isLeaving) return jn(l);
        const u = ps(l);
        if (!u) return jn(l);
        const f = li(u, a, i, n);
        Tn(u, f);
        const c = n.subTree,
          d = c && ps(c);
        let m = !1;
        const {
          getTransitionKey: S
        } = u.type;
        if (S) {
          const w = S();
          s === void 0 ? s = w : w !== s && (s = w, m = !0)
        }
        if (d && d.type !== ye && (!Fe(u, d) || m)) {
          const w = li(d, a, i, n);
          if (Tn(d, w), o === "out-in") return i.isLeaving = !0, w.afterLeave = () => {
            i.isLeaving = !1, n.update.active !== !1 && n.update()
          }, jn(l);
          o === "in-out" && u.type !== ye && (w.delayLeave = (C, h, g) => {
            const y = Cr(i, d);
            y[String(d.key)] = d, C._leaveCb = () => {
              h(), C._leaveCb = void 0, delete f.delayedLeave
            }, f.delayedLeave = g
          })
        }
        return l
      }
    }
  },
  Oo = Io;

function Cr(e, t) {
  const {
    leavingVNodes: n
  } = e;
  let i = n.get(t.type);
  return i || (i = Object.create(null), n.set(t.type, i)), i
}

function li(e, t, n, i) {
  const {
    appear: s,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: o,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: c,
    onLeave: d,
    onAfterLeave: m,
    onLeaveCancelled: S,
    onBeforeAppear: w,
    onAppear: C,
    onAfterAppear: h,
    onAppearCancelled: g
  } = t, y = String(e.key), v = Cr(n, e), T = (x, _) => {
    x && Ae(x, i, 9, _)
  }, O = (x, _) => {
    const E = _[1];
    T(x, _), W(x) ? x.every(B => B.length <= 1) && E() : x.length <= 1 && E()
  }, $ = {
    mode: r,
    persisted: l,
    beforeEnter(x) {
      let _ = a;
      if (!n.isMounted)
        if (s) _ = w || a;
        else return;
      x._leaveCb && x._leaveCb(!0);
      const E = v[y];
      E && Fe(e, E) && E.el._leaveCb && E.el._leaveCb(), T(_, [x])
    },
    enter(x) {
      let _ = o,
        E = u,
        B = f;
      if (!n.isMounted)
        if (s) _ = C || o, E = h || u, B = g || f;
        else return;
      let M = !1;
      const L = x._enterCb = N => {
        M || (M = !0, N ? T(B, [x]) : T(E, [x]), $.delayedLeave && $.delayedLeave(), x._enterCb = void 0)
      };
      _ ? O(_, [x, L]) : L()
    },
    leave(x, _) {
      const E = String(e.key);
      if (x._enterCb && x._enterCb(!0), n.isUnmounting) return _();
      T(c, [x]);
      let B = !1;
      const M = x._leaveCb = L => {
        B || (B = !0, _(), L ? T(S, [x]) : T(m, [x]), x._leaveCb = void 0, v[E] === e && delete v[E])
      };
      v[E] = e, d ? O(d, [x, M]) : M()
    },
    clone(x) {
      return li(x, t, n, i)
    }
  };
  return $
}

function jn(e) {
  if (Ln(e)) return e = qe(e), e.children = null, e
}

function ps(e) {
  return Ln(e) ? e.children ? e.children[0] : void 0 : e
}

function Tn(e, t) {
  e.shapeFlag & 6 && e.component ? Tn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function _r(e, t = !1, n) {
  let i = [],
    s = 0;
  for (let r = 0; r < e.length; r++) {
    let l = e[r];
    const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : r);
    l.type === Se ? (l.patchFlag & 128 && s++, i = i.concat(_r(l.children, t, a))) : (t || l.type !== ye) && i.push(a != null ? qe(l, {
      key: a
    }) : l)
  }
  if (s > 1)
    for (let r = 0; r < i.length; r++) i[r].patchFlag = -2;
  return i
}

function Ru(e, t) {
  return q(e) ? ae({
    name: e.name
  }, t, {
    setup: e
  }) : e
}
const dt = e => !!e.type.__asyncLoader,
  Ln = e => e.type.__isKeepAlive,
  Ao = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(e, {
      slots: t
    }) {
      const n = qi(),
        i = n.ctx;
      if (!i.renderer) return () => {
        const g = t.default && t.default();
        return g && g.length === 1 ? g[0] : g
      };
      const s = new Map,
        r = new Set;
      let l = null;
      const a = n.suspense,
        {
          renderer: {
            p: o,
            m: u,
            um: f,
            o: {
              createElement: c
            }
          }
        } = i,
        d = c("div");
      i.activate = (g, y, v, T, O) => {
        const $ = g.component;
        u(g, y, v, 0, a), o($.vnode, g, y, v, $, a, T, g.slotScopeIds, O), pe(() => {
          $.isDeactivated = !1, $.a && Rt($.a);
          const x = g.props && g.props.onVnodeMounted;
          x && be(x, $.parent, g)
        }, a)
      }, i.deactivate = g => {
        const y = g.component;
        u(g, d, null, 1, a), pe(() => {
          y.da && Rt(y.da);
          const v = g.props && g.props.onVnodeUnmounted;
          v && be(v, y.parent, g), y.isDeactivated = !0
        }, a)
      };

      function m(g) {
        kn(g), f(g, n, a, !0)
      }

      function S(g) {
        s.forEach((y, v) => {
          const T = di(y.type);
          T && (!g || !g(T)) && w(v)
        })
      }

      function w(g) {
        const y = s.get(g);
        !l || !Fe(y, l) ? m(y) : l && kn(l), s.delete(g), r.delete(g)
      }
      zt(() => [e.include, e.exclude], ([g, y]) => {
        g && S(v => Ft(g, v)), y && S(v => !Ft(y, v))
      }, {
        flush: "post",
        deep: !0
      });
      let C = null;
      const h = () => {
        C != null && s.set(C, Vn(n.subTree))
      };
      return en(h), Fn(h), tn(() => {
        s.forEach(g => {
          const {
            subTree: y,
            suspense: v
          } = n, T = Vn(y);
          if (g.type === T.type && g.key === T.key) {
            kn(T);
            const O = T.component.da;
            O && pe(O, v);
            return
          }
          m(g)
        })
      }), () => {
        if (C = null, !t.default) return null;
        const g = t.default(),
          y = g[0];
        if (g.length > 1) return l = null, g;
        if (!Pt(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128)) return l = null, y;
        let v = Vn(y);
        const T = v.type,
          O = di(dt(v) ? v.type.__asyncResolved || {} : T),
          {
            include: $,
            exclude: x,
            max: _
          } = e;
        if ($ && (!O || !Ft($, O)) || x && O && Ft(x, O)) return l = v, y;
        const E = v.key == null ? T : v.key,
          B = s.get(E);
        return v.el && (v = qe(v), y.shapeFlag & 128 && (y.ssContent = v)), C = E, B ? (v.el = B.el, v.component = B.component, v.transition && Tn(v, v.transition), v.shapeFlag |= 512, r.delete(E), r.add(E)) : (r.add(E), _ && r.size > parseInt(_, 10) && w(r.values().next().value)), v.shapeFlag |= 256, l = v, Sr(y.type) ? y : v
      }
    }
  },
  zu = Ao;

function Ft(e, t) {
  return W(e) ? e.some(n => Ft(n, t)) : se(e) ? e.split(",").includes(t) : ml(e) ? e.test(t) : !1
}

function Lo(e, t) {
  Pr(e, "a", t)
}

function Bo(e, t) {
  Pr(e, "da", t)
}

function Pr(e, t, n = fe) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s;) {
      if (s.isDeactivated) return;
      s = s.parent
    }
    return e()
  });
  if (Bn(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent;) Ln(s.parent.vnode) && Fo(i, t, n, s), s = s.parent
  }
}

function Fo(e, t, n, i) {
  const s = Bn(t, e, i, !0);
  Ir(() => {
    yi(i[t], s)
  }, n)
}

function kn(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Vn(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}

function Bn(e, t, n = fe, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      r = t.__weh || (t.__weh = (...l) => {
        if (n.isUnmounted) return;
        Mt(), st(n);
        const a = Ae(t, n, e, l);
        return nt(), It(), a
      });
    return i ? s.unshift(r) : s.push(r), r
  }
}
const Ue = e => (t, n = fe) => (!Yt || e === "sp") && Bn(e, (...i) => t(...i), n),
  No = Ue("bm"),
  en = Ue("m"),
  Mr = Ue("bu"),
  Fn = Ue("u"),
  tn = Ue("bum"),
  Ir = Ue("um"),
  Do = Ue("sp"),
  Ro = Ue("rtg"),
  zo = Ue("rtc");

function $o(e, t = fe) {
  Bn("ec", e, t)
}
const Hi = "components";

function $u(e, t) {
  return Ar(Hi, e, !0, t) || e
}
const Or = Symbol.for("v-ndc");

function Hu(e) {
  return se(e) ? Ar(Hi, e, !1) || e : e || Or
}

function Ar(e, t, n = !0, i = !1) {
  const s = ce || fe;
  if (s) {
    const r = s.type;
    if (e === Hi) {
      const a = di(r, !1);
      if (a && (a === t || a === He(t) || a === Mn(He(t)))) return r
    }
    const l = hs(s[e] || r[e], t) || hs(s.appContext[e], t);
    return !l && i ? r : l
  }
}

function hs(e, t) {
  return e && (e[t] || e[He(t)] || e[Mn(He(t))])
}

function ju(e, t, n, i) {
  let s;
  const r = n && n[i];
  if (W(e) || se(e)) {
    s = new Array(e.length);
    for (let l = 0, a = e.length; l < a; l++) s[l] = t(e[l], l, void 0, r && r[l])
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, r && r[l])
  } else if (ne(e))
    if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, r && r[a]));
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, o = l.length; a < o; a++) {
        const u = l[a];
        s[a] = t(e[u], u, a, r && r[a])
      }
    }
  else s = [];
  return n && (n[i] = s), s
}

function ku(e, t, n = {}, i, s) {
  if (ce.isCE || ce.parent && dt(ce.parent) && ce.parent.isCE) return t !== "default" && (n.name = t), de("slot", n, i && i());
  let r = e[t];
  r && r._c && (r._d = !1), Gi();
  const l = r && Lr(r(n)),
    a = Gr(Se, {
      key: n.key || l && l.key || `_${t}`
    }, l || (i ? i() : []), l && e._ === 1 ? 64 : -2);
  return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a
}

function Lr(e) {
  return e.some(t => Pt(t) ? !(t.type === ye || t.type === Se && !Lr(t.children)) : !0) ? e : null
}
const oi = e => e ? Kr(e) ? Dn(e) || e.proxy : oi(e.parent) : null,
  $t = ae(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => oi(e.parent),
    $root: e => oi(e.root),
    $emit: e => e.emit,
    $options: e => ji(e),
    $forceUpdate: e => e.f || (e.f = () => Di(e.update)),
    $nextTick: e => e.n || (e.n = mr.bind(e.proxy)),
    $watch: e => Po.bind(e)
  }),
  Gn = (e, t) => e !== ie && !e.__isScriptSetup && J(e, t),
  Ho = {
    get({
      _: e
    }, t) {
      const {
        ctx: n,
        setupState: i,
        data: s,
        props: r,
        accessCache: l,
        type: a,
        appContext: o
      } = e;
      let u;
      if (t[0] !== "$") {
        const m = l[t];
        if (m !== void 0) switch (m) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t]
        } else {
          if (Gn(i, t)) return l[t] = 1, i[t];
          if (s !== ie && J(s, t)) return l[t] = 2, s[t];
          if ((u = e.propsOptions[0]) && J(u, t)) return l[t] = 3, r[t];
          if (n !== ie && J(n, t)) return l[t] = 4, n[t];
          ai && (l[t] = 0)
        }
      }
      const f = $t[t];
      let c, d;
      if (f) return t === "$attrs" && Te(e, "get", t), f(e);
      if ((c = a.__cssModules) && (c = c[t])) return c;
      if (n !== ie && J(n, t)) return l[t] = 4, n[t];
      if (d = o.config.globalProperties, J(d, t)) return d[t]
    },
    set({
      _: e
    }, t, n) {
      const {
        data: i,
        setupState: s,
        ctx: r
      } = e;
      return Gn(s, t) ? (s[t] = n, !0) : i !== ie && J(i, t) ? (i[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: n,
        ctx: i,
        appContext: s,
        propsOptions: r
      }
    }, l) {
      let a;
      return !!n[l] || e !== ie && J(e, l) || Gn(t, l) || (a = r[0]) && J(a, l) || J(i, l) || J($t, l) || J(s.config.globalProperties, l)
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  };

function gs(e) {
  return W(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function Vu(e) {
  const t = qi();
  let n = e();
  return nt(), Si(n) && (n = n.catch(i => {
    throw st(t), i
  })), [n, () => st(t)]
}
let ai = !0;

function jo(e) {
  const t = ji(e),
    n = e.proxy,
    i = e.ctx;
  ai = !1, t.beforeCreate && ms(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: l,
    watch: a,
    provide: o,
    inject: u,
    created: f,
    beforeMount: c,
    mounted: d,
    beforeUpdate: m,
    updated: S,
    activated: w,
    deactivated: C,
    beforeDestroy: h,
    beforeUnmount: g,
    destroyed: y,
    unmounted: v,
    render: T,
    renderTracked: O,
    renderTriggered: $,
    errorCaptured: x,
    serverPrefetch: _,
    expose: E,
    inheritAttrs: B,
    components: M,
    directives: L,
    filters: N
  } = t;
  if (u && ko(u, i, null), l)
    for (const Q in l) {
      const k = l[Q];
      q(k) && (i[Q] = k.bind(n))
    }
  if (s) {
    const Q = s.call(n, n);
    ne(Q) && (e.data = Oi(Q))
  }
  if (ai = !0, r)
    for (const Q in r) {
      const k = r[Q],
        re = q(k) ? k.bind(n, n) : q(k.get) ? k.get.bind(n, n) : $e,
        le = !q(k) && q(k.set) ? k.set.bind(n) : $e,
        ge = Xr({
          get: re,
          set: le
        });
      Object.defineProperty(i, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => ge.value,
        set: me => ge.value = me
      })
    }
  if (a)
    for (const Q in a) Br(a[Q], i, n, Q);
  if (o) {
    const Q = q(o) ? o.call(n) : o;
    Reflect.ownKeys(Q).forEach(k => {
      ki(k, Q[k])
    })
  }
  f && ms(f, e, "c");

  function K(Q, k) {
    W(k) ? k.forEach(re => Q(re.bind(n))) : k && Q(k.bind(n))
  }
  if (K(No, c), K(en, d), K(Mr, m), K(Fn, S), K(Lo, w), K(Bo, C), K($o, x), K(zo, O), K(Ro, $), K(tn, g), K(Ir, v), K(Do, _), W(E))
    if (E.length) {
      const Q = e.exposed || (e.exposed = {});
      E.forEach(k => {
        Object.defineProperty(Q, k, {
          get: () => n[k],
          set: re => n[k] = re
        })
      })
    } else e.exposed || (e.exposed = {});
  T && e.render === $e && (e.render = T), B != null && (e.inheritAttrs = B), M && (e.components = M), L && (e.directives = L)
}

function ko(e, t, n = $e) {
  W(e) && (e = fi(e));
  for (const i in e) {
    const s = e[i];
    let r;
    ne(s) ? "default" in s ? r = hn(s.from || i, s.default, !0) : r = hn(s.from || i) : r = hn(s), ue(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: l => r.value = l
    }) : t[i] = r
  }
}

function ms(e, t, n) {
  Ae(W(e) ? e.map(i => i.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Br(e, t, n, i) {
  const s = i.includes(".") ? xr(n, i) : () => n[i];
  if (se(e)) {
    const r = t[e];
    q(r) && zt(s, r)
  } else if (q(e)) zt(s, e.bind(n));
  else if (ne(e))
    if (W(e)) e.forEach(r => Br(r, t, n, i));
    else {
      const r = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(r) && zt(s, r, e)
    }
}

function ji(e) {
  const t = e.type,
    {
      mixins: n,
      extends: i
    } = t,
    {
      mixins: s,
      optionsCache: r,
      config: {
        optionMergeStrategies: l
      }
    } = e.appContext,
    a = r.get(t);
  let o;
  return a ? o = a : !s.length && !n && !i ? o = t : (o = {}, s.length && s.forEach(u => xn(o, u, l, !0)), xn(o, t, l)), ne(t) && r.set(t, o), o
}

function xn(e, t, n, i = !1) {
  const {
    mixins: s,
    extends: r
  } = t;
  r && xn(e, r, n, !0), s && s.forEach(l => xn(e, l, n, !0));
  for (const l in t)
    if (!(i && l === "expose")) {
      const a = Vo[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l]
    } return e
}
const Vo = {
  data: vs,
  props: ws,
  emits: ws,
  methods: Nt,
  computed: Nt,
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  components: Nt,
  directives: Nt,
  watch: Wo,
  provide: vs,
  inject: Go
};

function vs(e, t) {
  return t ? e ? function() {
    return ae(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t)
  } : t : e
}

function Go(e, t) {
  return Nt(fi(e), fi(t))
}

function fi(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t
  }
  return e
}

function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function Nt(e, t) {
  return e ? ae(Object.create(null), e, t) : t
}

function ws(e, t) {
  return e ? W(e) && W(t) ? [...new Set([...e, ...t])] : ae(Object.create(null), gs(e), gs(t ?? {})) : t
}

function Wo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(Object.create(null), e);
  for (const i in t) n[i] = ve(e[i], t[i]);
  return n
}

function Fr() {
  return {
    app: null,
    config: {
      isNativeTag: pl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap,
    propsCache: new WeakMap,
    emitsCache: new WeakMap
  }
}
let qo = 0;

function Uo(e, t) {
  return function(i, s = null) {
    q(i) || (i = ae({}, i)), s != null && !ne(s) && (s = null);
    const r = Fr(),
      l = new Set;
    let a = !1;
    const o = r.app = {
      _uid: qo++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: va,
      get config() {
        return r.config
      },
      set config(u) {},
      use(u, ...f) {
        return l.has(u) || (u && q(u.install) ? (l.add(u), u.install(o, ...f)) : q(u) && (l.add(u), u(o, ...f))), o
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), o
      },
      component(u, f) {
        return f ? (r.components[u] = f, o) : r.components[u]
      },
      directive(u, f) {
        return f ? (r.directives[u] = f, o) : r.directives[u]
      },
      mount(u, f, c) {
        if (!a) {
          const d = de(i, s);
          return d.appContext = r, f && t ? t(d, u) : e(d, u, c), a = !0, o._container = u, u.__vue_app__ = o, Dn(d.component) || d.component.proxy
        }
      },
      unmount() {
        a && (e(null, o._container), delete o._container.__vue_app__)
      },
      provide(u, f) {
        return r.provides[u] = f, o
      },
      runWithContext(u) {
        Kt = o;
        try {
          return u()
        } finally {
          Kt = null
        }
      }
    };
    return o
  }
}
let Kt = null;

function ki(e, t) {
  if (fe) {
    let n = fe.provides;
    const i = fe.parent && fe.parent.provides;
    i === n && (n = fe.provides = Object.create(i)), n[e] = t
  }
}

function hn(e, t, n = !1) {
  const i = fe || ce;
  if (i || Kt) {
    const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Kt._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && q(t) ? t.call(i && i.proxy) : t
  }
}

function Gu() {
  return !!(fe || ce || Kt)
}

function Ko(e, t, n, i = !1) {
  const s = {},
    r = {};
  vn(r, Nn, 1), e.propsDefaults = Object.create(null), Nr(e, t, s, r);
  for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
  n ? e.props = i ? s : no(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r
}

function Yo(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: {
      patchFlag: l
    }
  } = e, a = Z(s), [o] = e.propsOptions;
  let u = !1;
  if ((i || l > 0) && !(l & 16)) {
    if (l & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let d = f[c];
        if (On(e.emitsOptions, d)) continue;
        const m = t[d];
        if (o)
          if (J(r, d)) m !== r[d] && (r[d] = m, u = !0);
          else {
            const S = He(d);
            s[S] = ui(o, a, S, m, e, !1)
          }
        else m !== r[d] && (r[d] = m, u = !0)
      }
    }
  } else {
    Nr(e, t, s, r) && (u = !0);
    let f;
    for (const c in a)(!t || !J(t, c) && ((f = ht(c)) === c || !J(t, f))) && (o ? n && (n[c] !== void 0 || n[f] !== void 0) && (s[c] = ui(o, a, c, void 0, e, !0)) : delete s[c]);
    if (r !== a)
      for (const c in r)(!t || !J(t, c)) && (delete r[c], u = !0)
  }
  u && We(e, "set", "$attrs")
}

function Nr(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let l = !1,
    a;
  if (t)
    for (let o in t) {
      if (Dt(o)) continue;
      const u = t[o];
      let f;
      s && J(s, f = He(o)) ? !r || !r.includes(f) ? n[f] = u : (a || (a = {}))[f] = u : On(e.emitsOptions, o) || (!(o in i) || u !== i[o]) && (i[o] = u, l = !0)
    }
  if (r) {
    const o = Z(n),
      u = a || ie;
    for (let f = 0; f < r.length; f++) {
      const c = r[f];
      n[c] = ui(s, o, c, u[c], e, !J(u, c))
    }
  }
  return l
}

function ui(e, t, n, i, s, r) {
  const l = e[n];
  if (l != null) {
    const a = J(l, "default");
    if (a && i === void 0) {
      const o = l.default;
      if (l.type !== Function && !l.skipFactory && q(o)) {
        const {
          propsDefaults: u
        } = s;
        n in u ? i = u[n] : (st(s), i = u[n] = o.call(null, t), nt())
      } else i = o
    }
    l[0] && (r && !a ? i = !1 : l[1] && (i === "" || i === ht(n)) && (i = !0))
  }
  return i
}

function Dr(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e);
  if (s) return s;
  const r = e.props,
    l = {},
    a = [];
  let o = !1;
  if (!q(e)) {
    const f = c => {
      o = !0;
      const [d, m] = Dr(c, t, !0);
      ae(l, d), m && a.push(...m)
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
  }
  if (!r && !o) return ne(e) && i.set(e, wt), wt;
  if (W(r))
    for (let f = 0; f < r.length; f++) {
      const c = He(r[f]);
      ys(c) && (l[c] = ie)
    } else if (r)
      for (const f in r) {
        const c = He(f);
        if (ys(c)) {
          const d = r[f],
            m = l[c] = W(d) || q(d) ? {
              type: d
            } : ae({}, d);
          if (m) {
            const S = Ts(Boolean, m.type),
              w = Ts(String, m.type);
            m[0] = S > -1, m[1] = w < 0 || S < w, (S > -1 || J(m, "default")) && a.push(c)
          }
        }
      }
  const u = [l, a];
  return ne(e) && i.set(e, u), u
}

function ys(e) {
  return e[0] !== "$"
}

function bs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : ""
}

function Ss(e, t) {
  return bs(e) === bs(t)
}

function Ts(e, t) {
  return W(t) ? t.findIndex(n => Ss(n, e)) : q(t) && Ss(t, e) ? 0 : -1
}
const Rr = e => e[0] === "_" || e === "$stable",
  Vi = e => W(e) ? e.map(Me) : [Me(e)],
  Xo = (e, t, n) => {
    if (t._n) return t;
    const i = mo((...s) => Vi(t(...s)), n);
    return i._c = !1, i
  },
  zr = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
      if (Rr(s)) continue;
      const r = e[s];
      if (q(r)) t[s] = Xo(s, r, i);
      else if (r != null) {
        const l = Vi(r);
        t[s] = () => l
      }
    }
  },
  $r = (e, t) => {
    const n = Vi(t);
    e.slots.default = () => n
  },
  Jo = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (e.slots = Z(t), vn(t, "_", n)) : zr(t, e.slots = {})
    } else e.slots = {}, t && $r(e, t);
    vn(e.slots, Nn, 1)
  },
  Zo = (e, t, n) => {
    const {
      vnode: i,
      slots: s
    } = e;
    let r = !0,
      l = ie;
    if (i.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? r = !1 : (ae(s, t), !n && a === 1 && delete s._) : (r = !t.$stable, zr(t, s)), l = t
    } else t && ($r(e, t), l = {
      default: 1
    });
    if (r)
      for (const a in s) !Rr(a) && !(a in l) && delete s[a]
  };

function En(e, t, n, i, s = !1) {
  if (W(e)) {
    e.forEach((d, m) => En(d, t && (W(t) ? t[m] : t), n, i, s));
    return
  }
  if (dt(i) && !s) return;
  const r = i.shapeFlag & 4 ? Dn(i.component) || i.component.proxy : i.el,
    l = s ? null : r,
    {
      i: a,
      r: o
    } = e,
    u = t && t.r,
    f = a.refs === ie ? a.refs = {} : a.refs,
    c = a.setupState;
  if (u != null && u !== o && (se(u) ? (f[u] = null, J(c, u) && (c[u] = null)) : ue(u) && (u.value = null)), q(o)) tt(o, a, 12, [l, f]);
  else {
    const d = se(o),
      m = ue(o);
    if (d || m) {
      const S = () => {
        if (e.f) {
          const w = d ? J(c, o) ? c[o] : f[o] : o.value;
          s ? W(w) && yi(w, r) : W(w) ? w.includes(r) || w.push(r) : d ? (f[o] = [r], J(c, o) && (c[o] = f[o])) : (o.value = [r], e.k && (f[e.k] = o.value))
        } else d ? (f[o] = l, J(c, o) && (c[o] = l)) : m && (o.value = l, e.k && (f[e.k] = l))
      };
      l ? (S.id = -1, pe(S, n)) : S()
    }
  }
}
let Ye = !1;
const un = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
  cn = e => e.nodeType === 8;

function Qo(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: i,
      createText: s,
      nextSibling: r,
      parentNode: l,
      remove: a,
      insert: o,
      createComment: u
    }
  } = e, f = (h, g) => {
    if (!g.hasChildNodes()) {
      n(null, h, g), bn(), g._vnode = h;
      return
    }
    Ye = !1, c(g.firstChild, h, null, null, null), bn(), g._vnode = h, Ye && console.error("Hydration completed but contains mismatches.")
  }, c = (h, g, y, v, T, O = !1) => {
    const $ = cn(h) && h.data === "[",
      x = () => w(h, g, y, v, T, $),
      {
        type: _,
        ref: E,
        shapeFlag: B,
        patchFlag: M
      } = g;
    let L = h.nodeType;
    g.el = h, M === -2 && (O = !1, g.dynamicChildren = null);
    let N = null;
    switch (_) {
      case Ct:
        L !== 3 ? g.children === "" ? (o(g.el = s(""), l(h), h), N = h) : N = x() : (h.data !== g.children && (Ye = !0, h.data = g.children), N = r(h));
        break;
      case ye:
        L !== 8 || $ ? N = x() : N = r(h);
        break;
      case Ht:
        if ($ && (h = r(h), L = h.nodeType), L === 1 || L === 3) {
          N = h;
          const Y = !g.children.length;
          for (let K = 0; K < g.staticCount; K++) Y && (g.children += N.nodeType === 1 ? N.outerHTML : N.data), K === g.staticCount - 1 && (g.anchor = N), N = r(N);
          return $ ? r(N) : N
        } else x();
        break;
      case Se:
        $ ? N = S(h, g, y, v, T, O) : N = x();
        break;
      default:
        if (B & 1) L !== 1 || g.type.toLowerCase() !== h.tagName.toLowerCase() ? N = x() : N = d(h, g, y, v, T, O);
        else if (B & 6) {
          g.slotScopeIds = T;
          const Y = l(h);
          if (t(g, Y, null, y, v, un(Y), O), N = $ ? C(h) : r(h), N && cn(N) && N.data === "teleport end" && (N = r(N)), dt(g)) {
            let K;
            $ ? (K = de(Se), K.anchor = N ? N.previousSibling : Y.lastChild) : K = h.nodeType === 3 ? Ur("") : de("div"), K.el = h, g.component.subTree = K
          }
        } else B & 64 ? L !== 8 ? N = x() : N = g.type.hydrate(h, g, y, v, T, O, e, m) : B & 128 && (N = g.type.hydrate(h, g, y, v, un(l(h)), T, O, e, c))
    }
    return E != null && En(E, null, v, g), N
  }, d = (h, g, y, v, T, O) => {
    O = O || !!g.dynamicChildren;
    const {
      type: $,
      props: x,
      patchFlag: _,
      shapeFlag: E,
      dirs: B
    } = g, M = $ === "input" && B || $ === "option";
    if (M || _ !== -1) {
      if (B && De(g, null, y, "created"), x)
        if (M || !O || _ & 48)
          for (const N in x)(M && N.endsWith("value") || Jt(N) && !Dt(N)) && i(h, N, null, x[N], !1, void 0, y);
        else x.onClick && i(h, "onClick", null, x.onClick, !1, void 0, y);
      let L;
      if ((L = x && x.onVnodeBeforeMount) && be(L, y, g), B && De(g, null, y, "beforeMount"), ((L = x && x.onVnodeMounted) || B) && Tr(() => {
          L && be(L, y, g), B && De(g, null, y, "mounted")
        }, v), E & 16 && !(x && (x.innerHTML || x.textContent))) {
        let N = m(h.firstChild, g, h, y, v, T, O);
        for (; N;) {
          Ye = !0;
          const Y = N;
          N = N.nextSibling, a(Y)
        }
      } else E & 8 && h.textContent !== g.children && (Ye = !0, h.textContent = g.children)
    }
    return h.nextSibling
  }, m = (h, g, y, v, T, O, $) => {
    $ = $ || !!g.dynamicChildren;
    const x = g.children,
      _ = x.length;
    for (let E = 0; E < _; E++) {
      const B = $ ? x[E] : x[E] = Me(x[E]);
      if (h) h = c(h, B, v, T, O, $);
      else {
        if (B.type === Ct && !B.children) continue;
        Ye = !0, n(null, B, y, null, v, T, un(y), O)
      }
    }
    return h
  }, S = (h, g, y, v, T, O) => {
    const {
      slotScopeIds: $
    } = g;
    $ && (T = T ? T.concat($) : $);
    const x = l(h),
      _ = m(r(h), g, x, y, v, T, O);
    return _ && cn(_) && _.data === "]" ? r(g.anchor = _) : (Ye = !0, o(g.anchor = u("]"), x, _), _)
  }, w = (h, g, y, v, T, O) => {
    if (Ye = !0, g.el = null, O) {
      const _ = C(h);
      for (;;) {
        const E = r(h);
        if (E && E !== _) a(E);
        else break
      }
    }
    const $ = r(h),
      x = l(h);
    return a(h), n(null, g, x, $, y, v, un(x), T), $
  }, C = h => {
    let g = 0;
    for (; h;)
      if (h = r(h), h && cn(h) && (h.data === "[" && g++, h.data === "]")) {
        if (g === 0) return r(h);
        g--
      } return h
  };
  return [f, c]
}
const pe = Tr;

function ea(e) {
  return Hr(e)
}

function ta(e) {
  return Hr(e, Qo)
}

function Hr(e, t) {
  const n = ti();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: l,
    createText: a,
    createComment: o,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: d,
    setScopeId: m = $e,
    insertStaticContent: S
  } = e, w = (p, b, P, A = null, I = null, R = null, H = !1, D = null, z = !!b.dynamicChildren) => {
    if (p === b) return;
    p && !Fe(p, b) && (A = nn(p), me(p, I, R, !0), p = null), b.patchFlag === -2 && (z = !1, b.dynamicChildren = null);
    const {
      type: F,
      ref: V,
      shapeFlag: j
    } = b;
    switch (F) {
      case Ct:
        C(p, b, P, A);
        break;
      case ye:
        h(p, b, P, A);
        break;
      case Ht:
        p == null && g(b, P, A, H);
        break;
      case Se:
        M(p, b, P, A, I, R, H, D, z);
        break;
      default:
        j & 1 ? T(p, b, P, A, I, R, H, D, z) : j & 6 ? L(p, b, P, A, I, R, H, D, z) : (j & 64 || j & 128) && F.process(p, b, P, A, I, R, H, D, z, gt)
    }
    V != null && I && En(V, p && p.ref, R, b || p, !b)
  }, C = (p, b, P, A) => {
    if (p == null) i(b.el = a(b.children), P, A);
    else {
      const I = b.el = p.el;
      b.children !== p.children && u(I, b.children)
    }
  }, h = (p, b, P, A) => {
    p == null ? i(b.el = o(b.children || ""), P, A) : b.el = p.el
  }, g = (p, b, P, A) => {
    [p.el, p.anchor] = S(p.children, b, P, A, p.el, p.anchor)
  }, y = ({
    el: p,
    anchor: b
  }, P, A) => {
    let I;
    for (; p && p !== b;) I = d(p), i(p, P, A), p = I;
    i(b, P, A)
  }, v = ({
    el: p,
    anchor: b
  }) => {
    let P;
    for (; p && p !== b;) P = d(p), s(p), p = P;
    s(b)
  }, T = (p, b, P, A, I, R, H, D, z) => {
    H = H || b.type === "svg", p == null ? O(b, P, A, I, R, H, D, z) : _(p, b, I, R, H, D, z)
  }, O = (p, b, P, A, I, R, H, D) => {
    let z, F;
    const {
      type: V,
      props: j,
      shapeFlag: G,
      transition: U,
      dirs: X
    } = p;
    if (z = p.el = l(p.type, R, j && j.is, j), G & 8 ? f(z, p.children) : G & 16 && x(p.children, z, null, A, I, R && V !== "foreignObject", H, D), X && De(p, null, A, "created"), $(z, p, p.scopeId, H, A), j) {
      for (const ee in j) ee !== "value" && !Dt(ee) && r(z, ee, null, j[ee], R, p.children, A, I, je);
      "value" in j && r(z, "value", null, j.value), (F = j.onVnodeBeforeMount) && be(F, A, p)
    }
    X && De(p, null, A, "beforeMount");
    const te = (!I || I && !I.pendingBranch) && U && !U.persisted;
    te && U.beforeEnter(z), i(z, b, P), ((F = j && j.onVnodeMounted) || te || X) && pe(() => {
      F && be(F, A, p), te && U.enter(z), X && De(p, null, A, "mounted")
    }, I)
  }, $ = (p, b, P, A, I) => {
    if (P && m(p, P), A)
      for (let R = 0; R < A.length; R++) m(p, A[R]);
    if (I) {
      let R = I.subTree;
      if (b === R) {
        const H = I.vnode;
        $(p, H, H.scopeId, H.slotScopeIds, I.parent)
      }
    }
  }, x = (p, b, P, A, I, R, H, D, z = 0) => {
    for (let F = z; F < p.length; F++) {
      const V = p[F] = D ? Ze(p[F]) : Me(p[F]);
      w(null, V, b, P, A, I, R, H, D)
    }
  }, _ = (p, b, P, A, I, R, H) => {
    const D = b.el = p.el;
    let {
      patchFlag: z,
      dynamicChildren: F,
      dirs: V
    } = b;
    z |= p.patchFlag & 16;
    const j = p.props || ie,
      G = b.props || ie;
    let U;
    P && rt(P, !1), (U = G.onVnodeBeforeUpdate) && be(U, P, b, p), V && De(b, p, P, "beforeUpdate"), P && rt(P, !0);
    const X = I && b.type !== "foreignObject";
    if (F ? E(p.dynamicChildren, F, D, P, A, X, R) : H || k(p, b, D, null, P, A, X, R, !1), z > 0) {
      if (z & 16) B(D, b, j, G, P, A, I);
      else if (z & 2 && j.class !== G.class && r(D, "class", null, G.class, I), z & 4 && r(D, "style", j.style, G.style, I), z & 8) {
        const te = b.dynamicProps;
        for (let ee = 0; ee < te.length; ee++) {
          const oe = te[ee],
            Le = j[oe],
            mt = G[oe];
          (mt !== Le || oe === "value") && r(D, oe, Le, mt, I, p.children, P, A, je)
        }
      }
      z & 1 && p.children !== b.children && f(D, b.children)
    } else !H && F == null && B(D, b, j, G, P, A, I);
    ((U = G.onVnodeUpdated) || V) && pe(() => {
      U && be(U, P, b, p), V && De(b, p, P, "updated")
    }, A)
  }, E = (p, b, P, A, I, R, H) => {
    for (let D = 0; D < b.length; D++) {
      const z = p[D],
        F = b[D],
        V = z.el && (z.type === Se || !Fe(z, F) || z.shapeFlag & 70) ? c(z.el) : P;
      w(z, F, V, null, A, I, R, H, !0)
    }
  }, B = (p, b, P, A, I, R, H) => {
    if (P !== A) {
      if (P !== ie)
        for (const D in P) !Dt(D) && !(D in A) && r(p, D, P[D], null, H, b.children, I, R, je);
      for (const D in A) {
        if (Dt(D)) continue;
        const z = A[D],
          F = P[D];
        z !== F && D !== "value" && r(p, D, F, z, H, b.children, I, R, je)
      }
      "value" in A && r(p, "value", P.value, A.value)
    }
  }, M = (p, b, P, A, I, R, H, D, z) => {
    const F = b.el = p ? p.el : a(""),
      V = b.anchor = p ? p.anchor : a("");
    let {
      patchFlag: j,
      dynamicChildren: G,
      slotScopeIds: U
    } = b;
    U && (D = D ? D.concat(U) : U), p == null ? (i(F, P, A), i(V, P, A), x(b.children, P, V, I, R, H, D, z)) : j > 0 && j & 64 && G && p.dynamicChildren ? (E(p.dynamicChildren, G, P, I, R, H, D), (b.key != null || I && b === I.subTree) && jr(p, b, !0)) : k(p, b, P, V, I, R, H, D, z)
  }, L = (p, b, P, A, I, R, H, D, z) => {
    b.slotScopeIds = D, p == null ? b.shapeFlag & 512 ? I.ctx.activate(b, P, A, H, z) : N(b, P, A, I, R, H, z) : Y(p, b, z)
  }, N = (p, b, P, A, I, R, H) => {
    const D = p.component = fa(p, A, I);
    if (Ln(p) && (D.ctx.renderer = gt), ua(D), D.asyncDep) {
      if (I && I.registerDep(D, K), !p.el) {
        const z = D.subTree = de(ye);
        h(null, z, b, P)
      }
      return
    }
    K(D, p, b, P, I, R, H)
  }, Y = (p, b, P) => {
    const A = b.component = p.component;
    if (bo(p, b, P))
      if (A.asyncDep && !A.asyncResolved) {
        Q(A, b, P);
        return
      } else A.next = b, po(A.update), A.update();
    else b.el = p.el, A.vnode = b
  }, K = (p, b, P, A, I, R, H) => {
    const D = () => {
        if (p.isMounted) {
          let {
            next: V,
            bu: j,
            u: G,
            parent: U,
            vnode: X
          } = p, te = V, ee;
          rt(p, !1), V ? (V.el = X.el, Q(p, V, H)) : V = X, j && Rt(j), (ee = V.props && V.props.onVnodeBeforeUpdate) && be(ee, U, V, X), rt(p, !0);
          const oe = Hn(p),
            Le = p.subTree;
          p.subTree = oe, w(Le, oe, c(Le.el), nn(Le), p, I, R), V.el = oe.el, te === null && Ri(p, oe.el), G && pe(G, I), (ee = V.props && V.props.onVnodeUpdated) && pe(() => be(ee, U, V, X), I)
        } else {
          let V;
          const {
            el: j,
            props: G
          } = b, {
            bm: U,
            m: X,
            parent: te
          } = p, ee = dt(b);
          if (rt(p, !1), U && Rt(U), !ee && (V = G && G.onVnodeBeforeMount) && be(V, te, b), rt(p, !0), j && zn) {
            const oe = () => {
              p.subTree = Hn(p), zn(j, p.subTree, p, I, null)
            };
            ee ? b.type.__asyncLoader().then(() => !p.isUnmounted && oe()) : oe()
          } else {
            const oe = p.subTree = Hn(p);
            w(null, oe, P, A, p, I, R), b.el = oe.el
          }
          if (X && pe(X, I), !ee && (V = G && G.onVnodeMounted)) {
            const oe = b;
            pe(() => be(V, te, oe), I)
          }(b.shapeFlag & 256 || te && dt(te.vnode) && te.vnode.shapeFlag & 256) && p.a && pe(p.a, I), p.isMounted = !0, b = P = A = null
        }
      },
      z = p.effect = new _i(D, () => Di(F), p.scope),
      F = p.update = () => z.run();
    F.id = p.uid, rt(p, !0), F()
  }, Q = (p, b, P) => {
    b.component = p;
    const A = p.vnode.props;
    p.vnode = b, p.next = null, Yo(p, b.props, A, P), Zo(p, b.children, P), Mt(), us(), It()
  }, k = (p, b, P, A, I, R, H, D, z = !1) => {
    const F = p && p.children,
      V = p ? p.shapeFlag : 0,
      j = b.children,
      {
        patchFlag: G,
        shapeFlag: U
      } = b;
    if (G > 0) {
      if (G & 128) {
        le(F, j, P, A, I, R, H, D, z);
        return
      } else if (G & 256) {
        re(F, j, P, A, I, R, H, D, z);
        return
      }
    }
    U & 8 ? (V & 16 && je(F, I, R), j !== F && f(P, j)) : V & 16 ? U & 16 ? le(F, j, P, A, I, R, H, D, z) : je(F, I, R, !0) : (V & 8 && f(P, ""), U & 16 && x(j, P, A, I, R, H, D, z))
  }, re = (p, b, P, A, I, R, H, D, z) => {
    p = p || wt, b = b || wt;
    const F = p.length,
      V = b.length,
      j = Math.min(F, V);
    let G;
    for (G = 0; G < j; G++) {
      const U = b[G] = z ? Ze(b[G]) : Me(b[G]);
      w(p[G], U, P, null, I, R, H, D, z)
    }
    F > V ? je(p, I, R, !0, !1, j) : x(b, P, A, I, R, H, D, z, j)
  }, le = (p, b, P, A, I, R, H, D, z) => {
    let F = 0;
    const V = b.length;
    let j = p.length - 1,
      G = V - 1;
    for (; F <= j && F <= G;) {
      const U = p[F],
        X = b[F] = z ? Ze(b[F]) : Me(b[F]);
      if (Fe(U, X)) w(U, X, P, null, I, R, H, D, z);
      else break;
      F++
    }
    for (; F <= j && F <= G;) {
      const U = p[j],
        X = b[G] = z ? Ze(b[G]) : Me(b[G]);
      if (Fe(U, X)) w(U, X, P, null, I, R, H, D, z);
      else break;
      j--, G--
    }
    if (F > j) {
      if (F <= G) {
        const U = G + 1,
          X = U < V ? b[U].el : A;
        for (; F <= G;) w(null, b[F] = z ? Ze(b[F]) : Me(b[F]), P, X, I, R, H, D, z), F++
      }
    } else if (F > G)
      for (; F <= j;) me(p[F], I, R, !0), F++;
    else {
      const U = F,
        X = F,
        te = new Map;
      for (F = X; F <= G; F++) {
        const xe = b[F] = z ? Ze(b[F]) : Me(b[F]);
        xe.key != null && te.set(xe.key, F)
      }
      let ee, oe = 0;
      const Le = G - X + 1;
      let mt = !1,
        Qi = 0;
      const Ot = new Array(Le);
      for (F = 0; F < Le; F++) Ot[F] = 0;
      for (F = U; F <= j; F++) {
        const xe = p[F];
        if (oe >= Le) {
          me(xe, I, R, !0);
          continue
        }
        let Ne;
        if (xe.key != null) Ne = te.get(xe.key);
        else
          for (ee = X; ee <= G; ee++)
            if (Ot[ee - X] === 0 && Fe(xe, b[ee])) {
              Ne = ee;
              break
            } Ne === void 0 ? me(xe, I, R, !0) : (Ot[Ne - X] = F + 1, Ne >= Qi ? Qi = Ne : mt = !0, w(xe, b[Ne], P, null, I, R, H, D, z), oe++)
      }
      const es = mt ? na(Ot) : wt;
      for (ee = es.length - 1, F = Le - 1; F >= 0; F--) {
        const xe = X + F,
          Ne = b[xe],
          ts = xe + 1 < V ? b[xe + 1].el : A;
        Ot[F] === 0 ? w(null, Ne, P, ts, I, R, H, D, z) : mt && (ee < 0 || F !== es[ee] ? ge(Ne, P, ts, 2) : ee--)
      }
    }
  }, ge = (p, b, P, A, I = null) => {
    const {
      el: R,
      type: H,
      transition: D,
      children: z,
      shapeFlag: F
    } = p;
    if (F & 6) {
      ge(p.component.subTree, b, P, A);
      return
    }
    if (F & 128) {
      p.suspense.move(b, P, A);
      return
    }
    if (F & 64) {
      H.move(p, b, P, gt);
      return
    }
    if (H === Se) {
      i(R, b, P);
      for (let j = 0; j < z.length; j++) ge(z[j], b, P, A);
      i(p.anchor, b, P);
      return
    }
    if (H === Ht) {
      y(p, b, P);
      return
    }
    if (A !== 2 && F & 1 && D)
      if (A === 0) D.beforeEnter(R), i(R, b, P), pe(() => D.enter(R), I);
      else {
        const {
          leave: j,
          delayLeave: G,
          afterLeave: U
        } = D, X = () => i(R, b, P), te = () => {
          j(R, () => {
            X(), U && U()
          })
        };
        G ? G(R, X, te) : te()
      }
    else i(R, b, P)
  }, me = (p, b, P, A = !1, I = !1) => {
    const {
      type: R,
      props: H,
      ref: D,
      children: z,
      dynamicChildren: F,
      shapeFlag: V,
      patchFlag: j,
      dirs: G
    } = p;
    if (D != null && En(D, null, P, p, !0), V & 256) {
      b.ctx.deactivate(p);
      return
    }
    const U = V & 1 && G,
      X = !dt(p);
    let te;
    if (X && (te = H && H.onVnodeBeforeUnmount) && be(te, b, p), V & 6) dl(p.component, P, A);
    else {
      if (V & 128) {
        p.suspense.unmount(P, A);
        return
      }
      U && De(p, null, b, "beforeUnmount"), V & 64 ? p.type.remove(p, b, P, I, gt, A) : F && (R !== Se || j > 0 && j & 64) ? je(F, b, P, !1, !0) : (R === Se && j & 384 || !I && V & 16) && je(z, b, P), A && Ji(p)
    }(X && (te = H && H.onVnodeUnmounted) || U) && pe(() => {
      te && be(te, b, p), U && De(p, null, b, "unmounted")
    }, P)
  }, Ji = p => {
    const {
      type: b,
      el: P,
      anchor: A,
      transition: I
    } = p;
    if (b === Se) {
      cl(P, A);
      return
    }
    if (b === Ht) {
      v(p);
      return
    }
    const R = () => {
      s(P), I && !I.persisted && I.afterLeave && I.afterLeave()
    };
    if (p.shapeFlag & 1 && I && !I.persisted) {
      const {
        leave: H,
        delayLeave: D
      } = I, z = () => H(P, R);
      D ? D(p.el, R, z) : z()
    } else R()
  }, cl = (p, b) => {
    let P;
    for (; p !== b;) P = d(p), s(p), p = P;
    s(b)
  }, dl = (p, b, P) => {
    const {
      bum: A,
      scope: I,
      update: R,
      subTree: H,
      um: D
    } = p;
    A && Rt(A), I.stop(), R && (R.active = !1, me(H, p, b, P)), D && pe(D, b), pe(() => {
      p.isUnmounted = !0
    }, b), b && b.pendingBranch && !b.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve())
  }, je = (p, b, P, A = !1, I = !1, R = 0) => {
    for (let H = R; H < p.length; H++) me(p[H], b, P, A, I)
  }, nn = p => p.shapeFlag & 6 ? nn(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : d(p.anchor || p.el), Zi = (p, b, P) => {
    p == null ? b._vnode && me(b._vnode, null, null, !0) : w(b._vnode || null, p, b, null, null, null, P), us(), bn(), b._vnode = p
  }, gt = {
    p: w,
    um: me,
    m: ge,
    r: Ji,
    mt: N,
    mc: x,
    pc: k,
    pbc: E,
    n: nn,
    o: e
  };
  let Rn, zn;
  return t && ([Rn, zn] = t(gt)), {
    render: Zi,
    hydrate: Rn,
    createApp: Uo(Zi, Rn)
  }
}

function rt({
  effect: e,
  update: t
}, n) {
  e.allowRecurse = t.allowRecurse = n
}

function jr(e, t, n = !1) {
  const i = e.children,
    s = t.children;
  if (W(i) && W(s))
    for (let r = 0; r < i.length; r++) {
      const l = i[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = Ze(s[r]), a.el = l.el), n || jr(l, a)), a.type === Ct && (a.el = l.el)
    }
}

function na(e) {
  const t = e.slice(),
    n = [0];
  let i, s, r, l, a;
  const o = e.length;
  for (i = 0; i < o; i++) {
    const u = e[i];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[i] = s, n.push(i);
        continue
      }
      for (r = 0, l = n.length - 1; r < l;) a = r + l >> 1, e[n[a]] < u ? r = a + 1 : l = a;
      u < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i)
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0;) n[r] = l, l = t[l];
  return n
}
const ia = e => e.__isTeleport,
  Se = Symbol.for("v-fgt"),
  Ct = Symbol.for("v-txt"),
  ye = Symbol.for("v-cmt"),
  Ht = Symbol.for("v-stc"),
  jt = [];
let Oe = null;

function Gi(e = !1) {
  jt.push(Oe = e ? null : [])
}

function kr() {
  jt.pop(), Oe = jt[jt.length - 1] || null
}
let _t = 1;

function xs(e) {
  _t += e
}

function Vr(e) {
  return e.dynamicChildren = _t > 0 ? Oe || wt : null, kr(), _t > 0 && Oe && Oe.push(e), e
}

function Wu(e, t, n, i, s, r) {
  return Vr(qr(e, t, n, i, s, r, !0))
}

function Gr(e, t, n, i, s) {
  return Vr(de(e, t, n, i, s, !0))
}

function Pt(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function Fe(e, t) {
  return e.type === t.type && e.key === t.key
}
const Nn = "__vInternal",
  Wr = ({
    key: e
  }) => e ?? null,
  gn = ({
    ref: e,
    ref_key: t,
    ref_for: n
  }) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || ue(e) || q(e) ? {
    i: ce,
    r: e,
    k: t,
    f: !!n
  } : e : null);

function qr(e, t = null, n = null, i = 0, s = null, r = e === Se ? 0 : 1, l = !1, a = !1) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wr(t),
    ref: t && gn(t),
    scopeId: An,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ce
  };
  return a ? (Wi(o, n), r & 128 && e.normalize(o)) : n && (o.shapeFlag |= se(n) ? 8 : 16), _t > 0 && !l && Oe && (o.patchFlag > 0 || r & 6) && o.patchFlag !== 32 && Oe.push(o), o
}
const de = sa;

function sa(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === Or) && (e = ye), Pt(e)) {
    const a = qe(e, t, !0);
    return n && Wi(a, n), _t > 0 && !r && Oe && (a.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = a : Oe.push(a)), a.patchFlag |= -2, a
  }
  if (ha(e) && (e = e.__vccOpts), t) {
    t = ra(t);
    let {
      class: a,
      style: o
    } = t;
    a && !se(a) && (t.class = Ei(a)), ne(o) && (fr(o) && !W(o) && (o = ae({}, o)), t.style = xi(o))
  }
  const l = se(e) ? 1 : Sr(e) ? 128 : ia(e) ? 64 : ne(e) ? 4 : q(e) ? 2 : 0;
  return qr(e, t, n, i, s, l, r, !0)
}

function ra(e) {
  return e ? fr(e) || Nn in e ? ae({}, e) : e : null
}

function qe(e, t, n = !1) {
  const {
    props: i,
    ref: s,
    patchFlag: r,
    children: l
  } = e, a = t ? la(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Wr(a),
    ref: t && t.ref ? n && s ? W(s) ? s.concat(gn(t)) : [s, gn(t)] : gn(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Se ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}

function Ur(e = " ", t = 0) {
  return de(Ct, null, e, t)
}

function qu(e, t) {
  const n = de(Ht, null, e);
  return n.staticCount = t, n
}

function Uu(e = "", t = !1) {
  return t ? (Gi(), Gr(ye, null, e)) : de(ye, null, e)
}

function Me(e) {
  return e == null || typeof e == "boolean" ? de(ye) : W(e) ? de(Se, null, e.slice()) : typeof e == "object" ? Ze(e) : de(Ct, null, String(e))
}

function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qe(e)
}

function Wi(e, t) {
  let n = 0;
  const {
    shapeFlag: i
  } = e;
  if (t == null) t = null;
  else if (W(t)) n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Wi(e, s()), s._c && (s._d = !0));
      return
    } else {
      n = 32;
      const s = t._;
      !s && !(Nn in t) ? t._ctx = ce : s === 3 && ce && (ce.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else q(t) ? (t = {
    default: t,
    _ctx: ce
  }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Ur(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n
}

function la(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class") t.class !== i.class && (t.class = Ei([t.class, i.class]));
      else if (s === "style") t.style = xi([t.style, i.style]);
    else if (Jt(s)) {
      const r = t[s],
        l = i[s];
      l && r !== l && !(W(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l)
    } else s !== "" && (t[s] = i[s])
  }
  return t
}

function be(e, t, n, i = null) {
  Ae(e, t, 7, [n, i])
}
const oa = Fr();
let aa = 0;

function fa(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || oa,
    r = {
      uid: aa++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Js(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Dr(i, s),
      emitsOptions: br(i, s),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: i.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return r.ctx = {
    _: r
  }, r.root = t ? t.root : r, r.emit = go.bind(null, r), e.ce && e.ce(r), r
}
let fe = null;
const qi = () => fe || ce;
let Ui, vt, Es = "__VUE_INSTANCE_SETTERS__";
(vt = ti()[Es]) || (vt = ti()[Es] = []), vt.push(e => fe = e), Ui = e => {
  vt.length > 1 ? vt.forEach(t => t(e)) : vt[0](e)
};
const st = e => {
    Ui(e), e.scope.on()
  },
  nt = () => {
    fe && fe.scope.off(), Ui(null)
  };

function Kr(e) {
  return e.vnode.shapeFlag & 4
}
let Yt = !1;

function ua(e, t = !1) {
  Yt = t;
  const {
    props: n,
    children: i
  } = e.vnode, s = Kr(e);
  Ko(e, n, s, t), Jo(e, i);
  const r = s ? ca(e, t) : void 0;
  return Yt = !1, r
}

function ca(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = ur(new Proxy(e.ctx, Ho));
  const {
    setup: i
  } = n;
  if (i) {
    const s = e.setupContext = i.length > 1 ? pa(e) : null;
    st(e), Mt();
    const r = tt(i, e, 0, [e.props, s]);
    if (It(), nt(), Si(r)) {
      if (r.then(nt, nt), t) return r.then(l => {
        ci(e, l, t)
      }).catch(l => {
        Qt(l, e, 0)
      });
      e.asyncDep = r
    } else ci(e, r, t)
  } else Yr(e, t)
}

function ci(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = pr(t)), Yr(e, n)
}
let Cs;

function Yr(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Cs && !i.render) {
      const s = i.template || ji(e).template;
      if (s) {
        const {
          isCustomElement: r,
          compilerOptions: l
        } = e.appContext.config, {
          delimiters: a,
          compilerOptions: o
        } = i, u = ae(ae({
          isCustomElement: r,
          delimiters: a
        }, l), o);
        i.render = Cs(s, u)
      }
    }
    e.render = i.render || $e
  }
  st(e), Mt(), jo(e), It(), nt()
}

function da(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
    get(t, n) {
      return Te(e, "get", "$attrs"), t[n]
    }
  }))
}

function pa(e) {
  const t = n => {
    e.exposed = n || {}
  };
  return {
    get attrs() {
      return da(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function Dn(e) {
  if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(pr(ur(e.exposed)), {
    get(t, n) {
      if (n in t) return t[n];
      if (n in $t) return $t[n](e)
    },
    has(t, n) {
      return n in t || n in $t
    }
  }))
}

function di(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || t && e.__name
}

function ha(e) {
  return q(e) && "__vccOpts" in e
}
const Xr = (e, t) => fo(e, t, Yt);

function Ie(e, t, n) {
  const i = arguments.length;
  return i === 2 ? ne(t) && !W(t) ? Pt(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Pt(n) && (n = [n]), de(e, t, n))
}
const ga = Symbol.for("v-scx"),
  ma = () => hn(ga),
  va = "3.3.4",
  wa = "http://www.w3.org/2000/svg",
  ft = typeof document < "u" ? document : null,
  _s = ft && ft.createElement("template"),
  ya = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, n, i) => {
      const s = t ? ft.createElementNS(wa, e) : ft.createElement(e, n ? {
        is: n
      } : void 0);
      return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s
    },
    createText: e => ft.createTextNode(e),
    createComment: e => ft.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => ft.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, i, s, r) {
      const l = n ? n.previousSibling : t.lastChild;
      if (s && (s === r || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)););
      else {
        _s.innerHTML = i ? `<svg>${e}</svg>` : e;
        const a = _s.content;
        if (i) {
          const o = a.firstChild;
          for (; o.firstChild;) a.appendChild(o.firstChild);
          a.removeChild(o)
        }
        t.insertBefore(a, n)
      }
      return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  };

function ba(e, t, n) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function Sa(e, t, n) {
  const i = e.style,
    s = se(n);
  if (n && !s) {
    if (t && !se(t))
      for (const r in t) n[r] == null && pi(i, r, "");
    for (const r in n) pi(i, r, n[r])
  } else {
    const r = i.display;
    s ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (i.display = r)
  }
}
const Ps = /\s*!important$/;

function pi(e, t, n) {
  if (W(n)) n.forEach(i => pi(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    const i = Ta(e, t);
    Ps.test(n) ? e.setProperty(ht(i), n.replace(Ps, ""), "important") : e[i] = n
  }
}
const Ms = ["Webkit", "Moz", "ms"],
  Wn = {};

function Ta(e, t) {
  const n = Wn[t];
  if (n) return n;
  let i = He(t);
  if (i !== "filter" && i in e) return Wn[t] = i;
  i = Mn(i);
  for (let s = 0; s < Ms.length; s++) {
    const r = Ms[s] + i;
    if (r in e) return Wn[t] = r
  }
  return t
}
const Is = "http://www.w3.org/1999/xlink";

function xa(e, t, n, i, s) {
  if (i && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Is, t.slice(6, t.length)) : e.setAttributeNS(Is, t, n);
  else {
    const r = _l(t);
    n == null || r && !Ys(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
  }
}

function Ea(e, t, n, i, s, r, l) {
  if (t === "innerHTML" || t === "textContent") {
    i && l(i, s, r), e[t] = n ?? "";
    return
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
    e._value = n;
    const u = a === "OPTION" ? e.getAttribute("value") : e.value,
      f = n ?? "";
    u !== f && (e.value = f), n == null && e.removeAttribute(t);
    return
  }
  let o = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Ys(n) : n == null && u === "string" ? (n = "", o = !0) : u === "number" && (n = 0, o = !0)
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(t)
}

function Ca(e, t, n, i) {
  e.addEventListener(t, n, i)
}

function _a(e, t, n, i) {
  e.removeEventListener(t, n, i)
}

function Pa(e, t, n, i, s = null) {
  const r = e._vei || (e._vei = {}),
    l = r[t];
  if (i && l) l.value = i;
  else {
    const [a, o] = Ma(t);
    if (i) {
      const u = r[t] = Aa(i, s);
      Ca(e, a, u, o)
    } else l && (_a(e, a, l, o), r[t] = void 0)
  }
}
const Os = /(?:Once|Passive|Capture)$/;

function Ma(e) {
  let t;
  if (Os.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Os);) e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0
  }
  return [e[2] === ":" ? e.slice(3) : ht(e.slice(2)), t]
}
let qn = 0;
const Ia = Promise.resolve(),
  Oa = () => qn || (Ia.then(() => qn = 0), qn = Date.now());

function Aa(e, t) {
  const n = i => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= n.attached) return;
    Ae(La(i, n.value), t, 5, [i])
  };
  return n.value = e, n.attached = Oa(), n
}

function La(e, t) {
  if (W(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0
    }, t.map(i => s => !s._stopped && i && i(s))
  } else return t
}
const As = /^on[a-z]/,
  Ba = (e, t, n, i, s = !1, r, l, a, o) => {
    t === "class" ? ba(e, i, s) : t === "style" ? Sa(e, n, i) : Jt(t) ? wi(t) || Pa(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fa(e, t, i, s)) ? Ea(e, t, i, r, l, a, o) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), xa(e, t, i, s))
  };

function Fa(e, t, n, i) {
  return i ? !!(t === "innerHTML" || t === "textContent" || t in e && As.test(t) && q(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || As.test(t) && se(n) ? !1 : t in e
}
const Xe = "transition",
  At = "animation",
  Jr = (e, {
    slots: t
  }) => Ie(Oo, Na(e), t);
Jr.displayName = "Transition";
const Zr = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Jr.props = ae({}, Er, Zr);
const lt = (e, t = []) => {
    W(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  Ls = e => e ? W(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Na(e) {
  const t = {};
  for (const M in e) M in Zr || (t[M] = e[M]);
  if (e.css === !1) return t;
  const {
    name: n = "v",
    type: i,
    duration: s,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: l = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: o = r,
    appearActiveClass: u = l,
    appearToClass: f = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, S = Da(s), w = S && S[0], C = S && S[1], {
    onBeforeEnter: h,
    onEnter: g,
    onEnterCancelled: y,
    onLeave: v,
    onLeaveCancelled: T,
    onBeforeAppear: O = h,
    onAppear: $ = g,
    onAppearCancelled: x = y
  } = t, _ = (M, L, N) => {
    ot(M, L ? f : a), ot(M, L ? u : l), N && N()
  }, E = (M, L) => {
    M._isLeaving = !1, ot(M, c), ot(M, m), ot(M, d), L && L()
  }, B = M => (L, N) => {
    const Y = M ? $ : g,
      K = () => _(L, M, N);
    lt(Y, [L, K]), Bs(() => {
      ot(L, M ? o : r), Je(L, M ? f : a), Ls(Y) || Fs(L, i, w, K)
    })
  };
  return ae(t, {
    onBeforeEnter(M) {
      lt(h, [M]), Je(M, r), Je(M, l)
    },
    onBeforeAppear(M) {
      lt(O, [M]), Je(M, o), Je(M, u)
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(M, L) {
      M._isLeaving = !0;
      const N = () => E(M, L);
      Je(M, c), $a(), Je(M, d), Bs(() => {
        M._isLeaving && (ot(M, c), Je(M, m), Ls(v) || Fs(M, i, C, N))
      }), lt(v, [M, N])
    },
    onEnterCancelled(M) {
      _(M, !1), lt(y, [M])
    },
    onAppearCancelled(M) {
      _(M, !0), lt(x, [M])
    },
    onLeaveCancelled(M) {
      E(M), lt(T, [M])
    }
  })
}

function Da(e) {
  if (e == null) return null;
  if (ne(e)) return [Un(e.enter), Un(e.leave)];
  {
    const t = Un(e);
    return [t, t]
  }
}

function Un(e) {
  return Ks(e)
}

function Je(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
}

function ot(e, t) {
  t.split(/\s+/).forEach(i => i && e.classList.remove(i));
  const {
    _vtc: n
  } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0))
}

function Bs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Ra = 0;

function Fs(e, t, n, i) {
  const s = e._endId = ++Ra,
    r = () => {
      s === e._endId && i()
    };
  if (n) return setTimeout(r, n);
  const {
    type: l,
    timeout: a,
    propCount: o
  } = za(e, t);
  if (!l) return i();
  const u = l + "end";
  let f = 0;
  const c = () => {
      e.removeEventListener(u, d), r()
    },
    d = m => {
      m.target === e && ++f >= o && c()
    };
  setTimeout(() => {
    f < o && c()
  }, a + 1), e.addEventListener(u, d)
}

function za(e, t) {
  const n = window.getComputedStyle(e),
    i = S => (n[S] || "").split(", "),
    s = i(`${Xe}Delay`),
    r = i(`${Xe}Duration`),
    l = Ns(s, r),
    a = i(`${At}Delay`),
    o = i(`${At}Duration`),
    u = Ns(a, o);
  let f = null,
    c = 0,
    d = 0;
  t === Xe ? l > 0 && (f = Xe, c = l, d = r.length) : t === At ? u > 0 && (f = At, c = u, d = o.length) : (c = Math.max(l, u), f = c > 0 ? l > u ? Xe : At : null, d = f ? f === Xe ? r.length : o.length : 0);
  const m = f === Xe && /\b(transform|all)(,|$)/.test(i(`${Xe}Property`).toString());
  return {
    type: f,
    timeout: c,
    propCount: d,
    hasTransform: m
  }
}

function Ns(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((n, i) => Ds(n) + Ds(e[i])))
}

function Ds(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function $a() {
  return document.body.offsetHeight
}
const Ha = ["ctrl", "shift", "alt", "meta"],
  ja = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => Ha.some(n => e[`${n}Key`] && !t.includes(n))
  },
  Ku = (e, t) => (n, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const r = ja[t[s]];
      if (r && r(n, t)) return
    }
    return e(n, ...i)
  },
  ka = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  },
  Yu = (e, t) => n => {
    if (!("key" in n)) return;
    const i = ht(n.key);
    if (t.some(s => s === i || ka[s] === i)) return e(n)
  },
  Xu = {
    beforeMount(e, {
      value: t
    }, {
      transition: n
    }) {
      e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Lt(e, t)
    },
    mounted(e, {
      value: t
    }, {
      transition: n
    }) {
      n && t && n.enter(e)
    },
    updated(e, {
      value: t,
      oldValue: n
    }, {
      transition: i
    }) {
      !t != !n && (i ? t ? (i.beforeEnter(e), Lt(e, !0), i.enter(e)) : i.leave(e, () => {
        Lt(e, !1)
      }) : Lt(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      Lt(e, t)
    }
  };

function Lt(e, t) {
  e.style.display = t ? e._vod : "none"
}
const Qr = ae({
  patchProp: Ba
}, ya);
let kt, Rs = !1;

function Va() {
  return kt || (kt = ea(Qr))
}

function Ga() {
  return kt = Rs ? kt : ta(Qr), Rs = !0, kt
}
const Ju = (...e) => {
    const t = Va().createApp(...e),
      {
        mount: n
      } = t;
    return t.mount = i => {
      const s = el(i);
      if (!s) return;
      const r = t._component;
      !q(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
      const l = n(s, !1, s instanceof SVGElement);
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
    }, t
  },
  Zu = (...e) => {
    const t = Ga().createApp(...e),
      {
        mount: n
      } = t;
    return t.mount = i => {
      const s = el(i);
      if (s) return n(s, !0, s instanceof SVGElement)
    }, t
  };

function el(e) {
  return se(e) ? document.querySelector(e) : e
}

function zs(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function Ki(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(n => {
    typeof e[n] > "u" ? e[n] = t[n] : zs(t[n]) && zs(e[n]) && Object.keys(t[n]).length > 0 && Ki(e[n], t[n])
  })
}
const tl = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return {
      initEvent() {}
    }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

function Ge() {
  const e = typeof document < "u" ? document : {};
  return Ki(e, tl), e
}
const Wa = {
  document: tl,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function() {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ""
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e)
  }
};

function _e() {
  const e = typeof window < "u" ? window : {};
  return Ki(e, Wa), e
}

function qa(e) {
  return e === void 0 && (e = ""), e.trim().split(" ").filter(t => !!t.trim())
}

function Ua(e) {
  const t = e;
  Object.keys(t).forEach(n => {
    try {
      t[n] = null
    } catch {}
    try {
      delete t[n]
    } catch {}
  })
}

function hi(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}

function Cn() {
  return Date.now()
}

function Ka(e) {
  const t = _e();
  let n;
  return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
}

function Ya(e, t) {
  t === void 0 && (t = "x");
  const n = _e();
  let i, s, r;
  const l = Ka(e);
  return n.WebKitCSSMatrix ? (s = l.transform || l.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(a => a.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix(s === "none" ? "" : s)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), t === "x" && (n.WebKitCSSMatrix ? s = r.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])), t === "y" && (n.WebKitCSSMatrix ? s = r.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])), s || 0
}

function dn(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function Xa(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function Ce() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (i != null && !Xa(i)) {
      const s = Object.keys(Object(i)).filter(r => t.indexOf(r) < 0);
      for (let r = 0, l = s.length; r < l; r += 1) {
        const a = s[r],
          o = Object.getOwnPropertyDescriptor(i, a);
        o !== void 0 && o.enumerable && (dn(e[a]) && dn(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : Ce(e[a], i[a]) : !dn(e[a]) && dn(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : Ce(e[a], i[a])) : e[a] = i[a])
      }
    }
  }
  return e
}

function pn(e, t, n) {
  e.style.setProperty(t, n)
}

function nl(e) {
  let {
    swiper: t,
    targetPosition: n,
    side: i
  } = e;
  const s = _e(),
    r = -t.translate;
  let l = null,
    a;
  const o = t.params.speed;
  t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > r ? "next" : "prev",
    f = (d, m) => u === "next" && d >= m || u === "prev" && d <= m,
    c = () => {
      a = new Date().getTime(), l === null && (l = a);
      const d = Math.max(Math.min((a - l) / o, 1), 0),
        m = .5 - Math.cos(d * Math.PI) / 2;
      let S = r + m * (n - r);
      if (f(S, n) && (S = n), t.wrapperEl.scrollTo({
          [i]: S
        }), f(S, n)) {
        t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
            [i]: S
          })
        }), s.cancelAnimationFrame(t.cssModeFrameID);
        return
      }
      t.cssModeFrameID = s.requestAnimationFrame(c)
    };
  c()
}

function Yi(e) {
  return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
}

function ze(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter(n => n.matches(t))
}

function _n(e) {
  try {
    console.warn(e);
    return
  } catch {}
}

function Xt(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...Array.isArray(t) ? t : qa(t)), n
}

function Ja(e, t) {
  const n = [];
  for (; e.previousElementSibling;) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), e = i
  }
  return n
}

function Za(e, t) {
  const n = [];
  for (; e.nextElementSibling;) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), e = i
  }
  return n
}

function Qe(e, t) {
  return _e().getComputedStyle(e, null).getPropertyValue(t)
}

function $s(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0;
      (t = t.previousSibling) !== null;) t.nodeType === 1 && (n += 1);
    return n
  }
}

function Qa(e, t) {
  const n = [];
  let i = e.parentElement;
  for (; i;) t ? i.matches(t) && n.push(i) : n.push(i), i = i.parentElement;
  return n
}

function ef(e, t) {
  function n(i) {
    i.target === e && (t.call(e, i), e.removeEventListener("transitionend", n))
  }
  t && e.addEventListener("transitionend", n)
}

function Hs(e, t, n) {
  const i = _e();
  return n ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let Kn;

function tf() {
  const e = _e(),
    t = Ge();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  }
}

function il() {
  return Kn || (Kn = tf()), Kn
}
let Yn;

function nf(e) {
  let {
    userAgent: t
  } = e === void 0 ? {} : e;
  const n = il(),
    i = _e(),
    s = i.navigator.platform,
    r = t || i.navigator.userAgent,
    l = {
      ios: !1,
      android: !1
    },
    a = i.screen.width,
    o = i.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = r.match(/(iPad).*OS\s([\d_]+)/);
  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    m = s === "Win32";
  let S = s === "MacIntel";
  const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !f && S && n.touch && w.indexOf(`${a}x${o}`) >= 0 && (f = r.match(/(Version)\/([\d.]+)/), f || (f = [0, 1, "13_0_0"]), S = !1), u && !m && (l.os = "android", l.android = !0), (f || d || c) && (l.os = "ios", l.ios = !0), l
}

function sf(e) {
  return e === void 0 && (e = {}), Yn || (Yn = nf(e)), Yn
}
let Xn;

function rf() {
  const e = _e();
  let t = !1;

  function n() {
    const i = e.navigator.userAgent.toLowerCase();
    return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
  }
  if (n()) {
    const i = String(e.navigator.userAgent);
    if (i.includes("Version/")) {
      const [s, r] = i.split("Version/")[1].split(" ")[0].split(".").map(l => Number(l));
      t = s < 16 || s === 16 && r < 2
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
  }
}

function lf() {
  return Xn || (Xn = rf()), Xn
}

function of(e) {
  let {
    swiper: t,
    on: n,
    emit: i
  } = e;
  const s = _e();
  let r = null,
    l = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"))
    },
    o = () => {
      !t || t.destroyed || !t.initialized || (r = new ResizeObserver(c => {
        l = s.requestAnimationFrame(() => {
          const {
            width: d,
            height: m
          } = t;
          let S = d,
            w = m;
          c.forEach(C => {
            let {
              contentBoxSize: h,
              contentRect: g,
              target: y
            } = C;
            y && y !== t.el || (S = g ? g.width : (h[0] || h).inlineSize, w = g ? g.height : (h[0] || h).blockSize)
          }), (S !== d || w !== m) && a()
        })
      }), r.observe(t.el))
    },
    u = () => {
      l && s.cancelAnimationFrame(l), r && r.unobserve && t.el && (r.unobserve(t.el), r = null)
    },
    f = () => {
      !t || t.destroyed || !t.initialized || i("orientationchange")
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
      o();
      return
    }
    s.addEventListener("resize", a), s.addEventListener("orientationchange", f)
  }), n("destroy", () => {
    u(), s.removeEventListener("resize", a), s.removeEventListener("orientationchange", f)
  })
}

function af(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i,
    emit: s
  } = e;
  const r = [],
    l = _e(),
    a = function(f, c) {
      c === void 0 && (c = {});
      const d = l.MutationObserver || l.WebkitMutationObserver,
        m = new d(S => {
          if (t.__preventObserver__) return;
          if (S.length === 1) {
            s("observerUpdate", S[0]);
            return
          }
          const w = function() {
            s("observerUpdate", S[0])
          };
          l.requestAnimationFrame ? l.requestAnimationFrame(w) : l.setTimeout(w, 0)
        });
      m.observe(f, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData
      }), r.push(m)
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const f = Qa(t.hostEl);
          for (let c = 0; c < f.length; c += 1) a(f[c])
        }
        a(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), a(t.wrapperEl, {
          attributes: !1
        })
      }
    },
    u = () => {
      r.forEach(f => {
        f.disconnect()
      }), r.splice(0, r.length)
    };
  n({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), i("init", o), i("destroy", u)
}
var ff = {
  on(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = n ? "unshift" : "push";
    return e.split(" ").forEach(r => {
      i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][s](t)
    }), i
  },
  once(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;

    function s() {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
      for (var r = arguments.length, l = new Array(r), a = 0; a < r; a++) l[a] = arguments[a];
      t.apply(i, l)
    }
    return s.__emitterProxy = t, i.on(e, s, n)
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
  },
  off(e, t) {
    const n = this;
    return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(i => {
      typeof t > "u" ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((s, r) => {
        (s === t || s.__emitterProxy && s.__emitterProxy === t) && n.eventsListeners[i].splice(r, 1)
      })
    }), n
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, i;
    for (var s = arguments.length, r = new Array(s), l = 0; l < s; l++) r[l] = arguments[l];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (t = r[0], n = r.slice(1, r.length), i = e) : (t = r[0].events, n = r[0].data, i = r[0].context || e), n.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach(o => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(u => {
        u.apply(i, [o, ...n])
      }), e.eventsListeners && e.eventsListeners[o] && e.eventsListeners[o].forEach(u => {
        u.apply(i, n)
      })
    }), e
  }
};

function uf() {
  const e = this;
  let t, n;
  const i = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = i.clientHeight, !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(Qe(i, "padding-left") || 0, 10) - parseInt(Qe(i, "padding-right") || 0, 10), n = n - parseInt(Qe(i, "padding-top") || 0, 10) - parseInt(Qe(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
    width: t,
    height: n,
    size: e.isHorizontal() ? t : n
  }))
}

function cf() {
  const e = this;

  function t(E, B) {
    return parseFloat(E.getPropertyValue(e.getDirectionLabel(B)) || 0)
  }
  const n = e.params,
    {
      wrapperEl: i,
      slidesEl: s,
      size: r,
      rtlTranslate: l,
      wrongRTL: a
    } = e,
    o = e.virtual && n.virtual.enabled,
    u = o ? e.virtual.slides.length : e.slides.length,
    f = ze(s, `.${e.params.slideClass}, swiper-slide`),
    c = o ? e.virtual.slides.length : f.length;
  let d = [];
  const m = [],
    S = [];
  let w = n.slidesOffsetBefore;
  typeof w == "function" && (w = n.slidesOffsetBefore.call(e));
  let C = n.slidesOffsetAfter;
  typeof C == "function" && (C = n.slidesOffsetAfter.call(e));
  const h = e.snapGrid.length,
    g = e.slidesGrid.length;
  let y = n.spaceBetween,
    v = -w,
    T = 0,
    O = 0;
  if (typeof r > "u") return;
  typeof y == "string" && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * r : typeof y == "string" && (y = parseFloat(y)), e.virtualSize = -y, f.forEach(E => {
    l ? E.style.marginLeft = "" : E.style.marginRight = "", E.style.marginBottom = "", E.style.marginTop = ""
  }), n.centeredSlides && n.cssMode && (pn(i, "--swiper-centered-offset-before", ""), pn(i, "--swiper-centered-offset-after", ""));
  const $ = n.grid && n.grid.rows > 1 && e.grid;
  $ ? e.grid.initSlides(f) : e.grid && e.grid.unsetSlides();
  let x;
  const _ = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter(E => typeof n.breakpoints[E].slidesPerView < "u").length > 0;
  for (let E = 0; E < c; E += 1) {
    x = 0;
    let B;
    if (f[E] && (B = f[E]), $ && e.grid.updateSlide(E, B, f), !(f[E] && Qe(B, "display") === "none")) {
      if (n.slidesPerView === "auto") {
        _ && (f[E].style[e.getDirectionLabel("width")] = "");
        const M = getComputedStyle(B),
          L = B.style.transform,
          N = B.style.webkitTransform;
        if (L && (B.style.transform = "none"), N && (B.style.webkitTransform = "none"), n.roundLengths) x = e.isHorizontal() ? Hs(B, "width", !0) : Hs(B, "height", !0);
        else {
          const Y = t(M, "width"),
            K = t(M, "padding-left"),
            Q = t(M, "padding-right"),
            k = t(M, "margin-left"),
            re = t(M, "margin-right"),
            le = M.getPropertyValue("box-sizing");
          if (le && le === "border-box") x = Y + k + re;
          else {
            const {
              clientWidth: ge,
              offsetWidth: me
            } = B;
            x = Y + K + Q + k + re + (me - ge)
          }
        }
        L && (B.style.transform = L), N && (B.style.webkitTransform = N), n.roundLengths && (x = Math.floor(x))
      } else x = (r - (n.slidesPerView - 1) * y) / n.slidesPerView, n.roundLengths && (x = Math.floor(x)), f[E] && (f[E].style[e.getDirectionLabel("width")] = `${x}px`);
      f[E] && (f[E].swiperSlideSize = x), S.push(x), n.centeredSlides ? (v = v + x / 2 + T / 2 + y, T === 0 && E !== 0 && (v = v - r / 2 - y), E === 0 && (v = v - r / 2 - y), Math.abs(v) < 1 / 1e3 && (v = 0), n.roundLengths && (v = Math.floor(v)), O % n.slidesPerGroup === 0 && d.push(v), m.push(v)) : (n.roundLengths && (v = Math.floor(v)), (O - Math.min(e.params.slidesPerGroupSkip, O)) % e.params.slidesPerGroup === 0 && d.push(v), m.push(v), v = v + x + y), e.virtualSize += x + y, T = x, O += 1
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, r) + C, l && a && (n.effect === "slide" || n.effect === "coverflow") && (i.style.width = `${e.virtualSize+y}px`), n.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+y}px`), $ && e.grid.updateWrapperSize(x, d), !n.centeredSlides) {
    const E = [];
    for (let B = 0; B < d.length; B += 1) {
      let M = d[B];
      n.roundLengths && (M = Math.floor(M)), d[B] <= e.virtualSize - r && E.push(M)
    }
    d = E, Math.floor(e.virtualSize - r) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - r)
  }
  if (o && n.loop) {
    const E = S[0] + y;
    if (n.slidesPerGroup > 1) {
      const B = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
        M = E * n.slidesPerGroup;
      for (let L = 0; L < B; L += 1) d.push(d[d.length - 1] + M)
    }
    for (let B = 0; B < e.virtual.slidesBefore + e.virtual.slidesAfter; B += 1) n.slidesPerGroup === 1 && d.push(d[d.length - 1] + E), m.push(m[m.length - 1] + E), e.virtualSize += E
  }
  if (d.length === 0 && (d = [0]), y !== 0) {
    const E = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    f.filter((B, M) => !n.cssMode || n.loop ? !0 : M !== f.length - 1).forEach(B => {
      B.style[E] = `${y}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let E = 0;
    S.forEach(M => {
      E += M + (y || 0)
    }), E -= y;
    const B = E - r;
    d = d.map(M => M <= 0 ? -w : M > B ? B + C : M)
  }
  if (n.centerInsufficientSlides) {
    let E = 0;
    if (S.forEach(B => {
        E += B + (y || 0)
      }), E -= y, E < r) {
      const B = (r - E) / 2;
      d.forEach((M, L) => {
        d[L] = M - B
      }), m.forEach((M, L) => {
        m[L] = M + B
      })
    }
  }
  if (Object.assign(e, {
      slides: f,
      snapGrid: d,
      slidesGrid: m,
      slidesSizesGrid: S
    }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
    pn(i, "--swiper-centered-offset-before", `${-d[0]}px`), pn(i, "--swiper-centered-offset-after", `${e.size/2-S[S.length-1]/2}px`);
    const E = -e.snapGrid[0],
      B = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map(M => M + E), e.slidesGrid = e.slidesGrid.map(M => M + B)
  }
  if (c !== u && e.emit("slidesLengthChange"), d.length !== h && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== g && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade")) {
    const E = `${n.containerModifierClass}backface-hidden`,
      B = e.el.classList.contains(E);
    c <= n.maxBackfaceHiddenSlides ? B || e.el.classList.add(E) : B && e.el.classList.remove(E)
  }
}

function df(e) {
  const t = this,
    n = [],
    i = t.virtual && t.params.virtual.enabled;
  let s = 0,
    r;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const l = a => i ? t.slides[t.getSlideIndexByData(a)] : t.slides[a];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)(t.visibleSlides || []).forEach(a => {
      n.push(a)
    });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const a = t.activeIndex + r;
        if (a > t.slides.length && !i) break;
        n.push(l(a))
      } else n.push(l(t.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const a = n[r].offsetHeight;
      s = a > s ? a : s
    }(s || s === 0) && (t.wrapperEl.style.height = `${s}px`)
}

function pf() {
  const e = this,
    t = e.slides,
    n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n - e.cssOverflowAdjustment()
}

function hf(e) {
  e === void 0 && (e = this && this.translate || 0);
  const t = this,
    n = t.params,
    {
      slides: i,
      rtlTranslate: s,
      snapGrid: r
    } = t;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  s && (l = e), i.forEach(o => {
    o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass)
  }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * t.size : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < i.length; o += 1) {
    const u = i[o];
    let f = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (f -= i[0].swiperSlideOffset);
    const c = (l + (n.centeredSlides ? t.minTranslate() : 0) - f) / (u.swiperSlideSize + a),
      d = (l - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) / (u.swiperSlideSize + a),
      m = -(l - f),
      S = m + t.slidesSizesGrid[o],
      w = m >= 0 && m <= t.size - t.slidesSizesGrid[o];
    (m >= 0 && m < t.size - 1 || S > 1 && S <= t.size || m <= 0 && S >= t.size) && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(o), i[o].classList.add(n.slideVisibleClass)), w && i[o].classList.add(n.slideFullyVisibleClass), u.progress = s ? -c : c, u.originalProgress = s ? -d : d
  }
}

function gf(e) {
  const t = this;
  if (typeof e > "u") {
    const f = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * f || 0
  }
  const n = t.params,
    i = t.maxTranslate() - t.minTranslate();
  let {
    progress: s,
    isBeginning: r,
    isEnd: l,
    progressLoop: a
  } = t;
  const o = r,
    u = l;
  if (i === 0) s = 0, r = !0, l = !0;
  else {
    s = (e - t.minTranslate()) / i;
    const f = Math.abs(e - t.minTranslate()) < 1,
      c = Math.abs(e - t.maxTranslate()) < 1;
    r = f || s <= 0, l = c || s >= 1, f && (s = 0), c && (s = 1)
  }
  if (n.loop) {
    const f = t.getSlideIndexByData(0),
      c = t.getSlideIndexByData(t.slides.length - 1),
      d = t.slidesGrid[f],
      m = t.slidesGrid[c],
      S = t.slidesGrid[t.slidesGrid.length - 1],
      w = Math.abs(e);
    w >= d ? a = (w - d) / S : a = (w + S - m) / S, a > 1 && (a -= 1)
  }
  Object.assign(t, {
    progress: s,
    progressLoop: a,
    isBeginning: r,
    isEnd: l
  }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), l && !u && t.emit("reachEnd toEdge"), (o && !r || u && !l) && t.emit("fromEdge"), t.emit("progress", s)
}

function mf() {
  const e = this,
    {
      slides: t,
      params: n,
      slidesEl: i,
      activeIndex: s
    } = e,
    r = e.virtual && n.virtual.enabled,
    l = e.grid && n.grid && n.grid.rows > 1,
    a = c => ze(i, `.${n.slideClass}${c}, swiper-slide${c}`)[0];
  t.forEach(c => {
    c.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
  });
  let o, u, f;
  if (r)
    if (n.loop) {
      let c = s - e.virtual.slidesBefore;
      c < 0 && (c = e.virtual.slides.length + c), c >= e.virtual.slides.length && (c -= e.virtual.slides.length), o = a(`[data-swiper-slide-index="${c}"]`)
    } else o = a(`[data-swiper-slide-index="${s}"]`);
  else l ? (o = t.filter(c => c.column === s)[0], f = t.filter(c => c.column === s + 1)[0], u = t.filter(c => c.column === s - 1)[0]) : o = t[s];
  o && (o.classList.add(n.slideActiveClass), l ? (f && f.classList.add(n.slideNextClass), u && u.classList.add(n.slidePrevClass)) : (f = Za(o, `.${n.slideClass}, swiper-slide`)[0], n.loop && !f && (f = t[0]), f && f.classList.add(n.slideNextClass), u = Ja(o, `.${n.slideClass}, swiper-slide`)[0], n.loop && !u === 0 && (u = t[t.length - 1]), u && u.classList.add(n.slidePrevClass))), e.emitSlidesClasses()
}
const mn = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
      i = t.closest(n());
    if (i) {
      let s = i.querySelector(`.${e.params.lazyPreloaderClass}`);
      !s && e.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        i.shadowRoot && (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), s && s.remove())
      })), s && s.remove()
    }
  },
  Jn = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading")
  },
  gi = e => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
      s = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = s,
        a = [l - t];
      a.push(...Array.from({
        length: t
      }).map((o, u) => l + i + u)), e.slides.forEach((o, u) => {
        a.includes(o.column) && Jn(e, u)
      });
      return
    }
    const r = s + i - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = s - t; l <= r + t; l += 1) {
        const a = (l % n + n) % n;
        (a < s || a > r) && Jn(e, a)
      } else
        for (let l = Math.max(s - t, 0); l <= Math.min(r + t, n - 1); l += 1) l !== s && (l > r || l < s) && Jn(e, l)
  };

function vf(e) {
  const {
    slidesGrid: t,
    params: n
  } = e, i = e.rtlTranslate ? e.translate : -e.translate;
  let s;
  for (let r = 0; r < t.length; r += 1) typeof t[r + 1] < "u" ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2 ? s = r : i >= t[r] && i < t[r + 1] && (s = r + 1) : i >= t[r] && (s = r);
  return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s
}

function wf(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    {
      snapGrid: i,
      params: s,
      activeIndex: r,
      realIndex: l,
      snapIndex: a
    } = t;
  let o = e,
    u;
  const f = m => {
    let S = m - t.virtual.slidesBefore;
    return S < 0 && (S = t.virtual.slides.length + S), S >= t.virtual.slides.length && (S -= t.virtual.slides.length), S
  };
  if (typeof o > "u" && (o = vf(t)), i.indexOf(n) >= 0) u = i.indexOf(n);
  else {
    const m = Math.min(s.slidesPerGroupSkip, o);
    u = m + Math.floor((o - m) / s.slidesPerGroup)
  }
  if (u >= i.length && (u = i.length - 1), o === r && !t.params.loop) {
    u !== a && (t.snapIndex = u, t.emit("snapIndexChange"));
    return
  }
  if (o === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = f(o);
    return
  }
  const c = t.grid && s.grid && s.grid.rows > 1;
  let d;
  if (t.virtual && s.virtual.enabled && s.loop) d = f(o);
  else if (c) {
    const m = t.slides.filter(w => w.column === o)[0];
    let S = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(S) && (S = Math.max(t.slides.indexOf(m), 0)), d = Math.floor(S / s.grid.rows)
  } else if (t.slides[o]) {
    const m = t.slides[o].getAttribute("data-swiper-slide-index");
    m ? d = parseInt(m, 10) : d = o
  } else d = o;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: u,
    previousRealIndex: l,
    realIndex: d,
    previousIndex: r,
    activeIndex: o
  }), t.initialized && gi(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (l !== d && t.emit("realIndexChange"), t.emit("slideChange"))
}

function yf(e, t) {
  const n = this,
    i = n.params;
  let s = e.closest(`.${i.slideClass}, swiper-slide`);
  !s && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(a => {
    !s && a.matches && a.matches(`.${i.slideClass}, swiper-slide`) && (s = a)
  });
  let r = !1,
    l;
  if (s) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === s) {
        r = !0, l = a;
        break
      }
  }
  if (s && r) n.clickedSlide = s, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = l;
  else {
    n.clickedSlide = void 0, n.clickedIndex = void 0;
    return
  }
  i.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
}
var bf = {
  updateSize: uf,
  updateSlides: cf,
  updateAutoHeight: df,
  updateSlidesOffset: pf,
  updateSlidesProgress: hf,
  updateProgress: gf,
  updateSlidesClasses: mf,
  updateActiveIndex: wf,
  updateClickedSlide: yf
};

function Sf(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    {
      params: n,
      rtlTranslate: i,
      translate: s,
      wrapperEl: r
    } = t;
  if (n.virtualTranslate) return i ? -s : s;
  if (n.cssMode) return s;
  let l = Ya(r, e);
  return l += t.cssOverflowAdjustment(), i && (l = -l), l || 0
}

function Tf(e, t) {
  const n = this,
    {
      rtlTranslate: i,
      params: s,
      wrapperEl: r,
      progress: l
    } = n;
  let a = 0,
    o = 0;
  const u = 0;
  n.isHorizontal() ? a = i ? -e : e : o = e, s.roundLengths && (a = Math.floor(a), o = Math.floor(o)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? a : o, s.cssMode ? r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -o : s.virtualTranslate || (n.isHorizontal() ? a -= n.cssOverflowAdjustment() : o -= n.cssOverflowAdjustment(), r.style.transform = `translate3d(${a}px, ${o}px, ${u}px)`);
  let f;
  const c = n.maxTranslate() - n.minTranslate();
  c === 0 ? f = 0 : f = (e - n.minTranslate()) / c, f !== l && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
}

function xf() {
  return -this.snapGrid[0]
}

function Ef() {
  return -this.snapGrid[this.snapGrid.length - 1]
}

function Cf(e, t, n, i, s) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), i === void 0 && (i = !0);
  const r = this,
    {
      params: l,
      wrapperEl: a
    } = r;
  if (r.animating && l.preventInteractionOnTransition) return !1;
  const o = r.minTranslate(),
    u = r.maxTranslate();
  let f;
  if (i && e > o ? f = o : i && e < u ? f = u : f = e, r.updateProgress(f), l.cssMode) {
    const c = r.isHorizontal();
    if (t === 0) a[c ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!r.support.smoothScroll) return nl({
        swiper: r,
        targetPosition: -f,
        side: c ? "left" : "top"
      }), !0;
      a.scrollTo({
        [c ? "left" : "top"]: -f,
        behavior: "smooth"
      })
    }
    return !0
  }
  return t === 0 ? (r.setTransition(0), r.setTranslate(f), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(f), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(d) {
    !r || r.destroyed || d.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
var _f = {
  getTranslate: Sf,
  setTranslate: Tf,
  minTranslate: xf,
  maxTranslate: Ef,
  translateTo: Cf
};

function Pf(e, t) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`, n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), n.emit("setTransition", e, t)
}

function sl(e) {
  let {
    swiper: t,
    runCallbacks: n,
    direction: i,
    step: s
  } = e;
  const {
    activeIndex: r,
    previousIndex: l
  } = t;
  let a = i;
  if (a || (r > l ? a = "next" : r < l ? a = "prev" : a = "reset"), t.emit(`transition${s}`), n && r !== l) {
    if (a === "reset") {
      t.emit(`slideResetTransition${s}`);
      return
    }
    t.emit(`slideChangeTransition${s}`), a === "next" ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
  }
}

function Mf(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    {
      params: i
    } = n;
  i.cssMode || (i.autoHeight && n.updateAutoHeight(), sl({
    swiper: n,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }))
}

function If(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    {
      params: i
    } = n;
  n.animating = !1, !i.cssMode && (n.setTransition(0), sl({
    swiper: n,
    runCallbacks: e,
    direction: t,
    step: "End"
  }))
}
var Of = {
  setTransition: Pf,
  transitionStart: Mf,
  transitionEnd: If
};

function Af(e, t, n, i, s) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: u,
    previousIndex: f,
    activeIndex: c,
    rtlTranslate: d,
    wrapperEl: m,
    enabled: S
  } = r;
  if (r.animating && a.preventInteractionOnTransition || !S && !i && !s) return !1;
  const w = Math.min(r.params.slidesPerGroupSkip, l);
  let C = w + Math.floor((l - w) / r.params.slidesPerGroup);
  C >= o.length && (C = o.length - 1);
  const h = -o[C];
  if (a.normalizeSlideIndex)
    for (let y = 0; y < u.length; y += 1) {
      const v = -Math.floor(h * 100),
        T = Math.floor(u[y] * 100),
        O = Math.floor(u[y + 1] * 100);
      typeof u[y + 1] < "u" ? v >= T && v < O - (O - T) / 2 ? l = y : v >= T && v < O && (l = y + 1) : v >= T && (l = y)
    }
  if (r.initialized && l !== c && (!r.allowSlideNext && (d ? h > r.translate && h > r.minTranslate() : h < r.translate && h < r.minTranslate()) || !r.allowSlidePrev && h > r.translate && h > r.maxTranslate() && (c || 0) !== l)) return !1;
  l !== (f || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(h);
  let g;
  if (l > c ? g = "next" : l < c ? g = "prev" : g = "reset", d && -h === r.translate || !d && h === r.translate) return r.updateActiveIndex(l), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), a.effect !== "slide" && r.setTranslate(h), g !== "reset" && (r.transitionStart(n, g), r.transitionEnd(n, g)), !1;
  if (a.cssMode) {
    const y = r.isHorizontal(),
      v = d ? h : -h;
    if (t === 0) {
      const T = r.virtual && r.params.virtual.enabled;
      T && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), T && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        m[y ? "scrollLeft" : "scrollTop"] = v
      })) : m[y ? "scrollLeft" : "scrollTop"] = v, T && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
      })
    } else {
      if (!r.support.smoothScroll) return nl({
        swiper: r,
        targetPosition: v,
        side: y ? "left" : "top"
      }), !0;
      m.scrollTo({
        [y ? "left" : "top"]: v,
        behavior: "smooth"
      })
    }
    return !0
  }
  return r.setTransition(t), r.setTranslate(h), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, g), t === 0 ? r.transitionEnd(n, g) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(v) {
    !r || r.destroyed || v.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, g))
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function Lf(e, t, n, i) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const s = this,
    r = s.grid && s.params.grid && s.params.grid.rows > 1;
  let l = e;
  if (s.params.loop)
    if (s.virtual && s.params.virtual.enabled) l = l + s.virtual.slidesBefore;
    else {
      let a;
      if (r) {
        const d = l * s.params.grid.rows;
        a = s.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === d)[0].column
      } else a = s.getSlideIndexByData(l);
      const o = r ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length,
        {
          centeredSlides: u
        } = s.params;
      let f = s.params.slidesPerView;
      f === "auto" ? f = s.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(s.params.slidesPerView, 10)), u && f % 2 === 0 && (f = f + 1));
      let c = o - a < f;
      if (u && (c = c || a < Math.ceil(f / 2)), c) {
        const d = u ? a < s.activeIndex ? "prev" : "next" : a - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
        s.loopFix({
          direction: d,
          slideTo: !0,
          activeSlideIndex: d === "next" ? a + 1 : a - o + 1,
          slideRealIndex: d === "next" ? s.realIndex : void 0
        })
      }
      if (r) {
        const d = l * s.params.grid.rows;
        l = s.slides.filter(m => m.getAttribute("data-swiper-slide-index") * 1 === d)[0].column
      } else l = s.getSlideIndexByData(l)
    } return requestAnimationFrame(() => {
    s.slideTo(l, t, n, i)
  }), s
}

function Bf(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    {
      enabled: s,
      params: r,
      animating: l
    } = i;
  if (!s) return i;
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
    u = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !u && r.loopPreventsSliding) return !1;
    if (i.loopFix({
        direction: "next"
      }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode) return requestAnimationFrame(() => {
      i.slideTo(i.activeIndex + o, e, t, n)
    }), !0
  }
  return r.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + o, e, t, n)
}

function Ff(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this,
    {
      params: s,
      snapGrid: r,
      slidesGrid: l,
      rtlTranslate: a,
      enabled: o,
      animating: u
    } = i;
  if (!o) return i;
  const f = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (u && !f && s.loopPreventsSliding) return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft
  }
  const c = a ? i.translate : -i.translate;

  function d(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
  }
  const m = d(c),
    S = r.map(h => d(h));
  let w = r[S.indexOf(m) - 1];
  if (typeof w > "u" && s.cssMode) {
    let h;
    r.forEach((g, y) => {
      m >= g && (h = y)
    }), typeof h < "u" && (w = r[h > 0 ? h - 1 : h])
  }
  let C = 0;
  if (typeof w < "u" && (C = l.indexOf(w), C < 0 && (C = i.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (C = C - i.slidesPerViewDynamic("previous", !0) + 1, C = Math.max(C, 0))), s.rewind && i.isBeginning) {
    const h = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(h, e, t, n)
  } else if (s.loop && i.activeIndex === 0 && s.cssMode) return requestAnimationFrame(() => {
    i.slideTo(C, e, t, n)
  }), !0;
  return i.slideTo(C, e, t, n)
}

function Nf(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const i = this;
  return i.slideTo(i.activeIndex, e, t, n)
}

function Df(e, t, n, i) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = .5);
  const s = this;
  let r = s.activeIndex;
  const l = Math.min(s.params.slidesPerGroupSkip, r),
    a = l + Math.floor((r - l) / s.params.slidesPerGroup),
    o = s.rtlTranslate ? s.translate : -s.translate;
  if (o >= s.snapGrid[a]) {
    const u = s.snapGrid[a],
      f = s.snapGrid[a + 1];
    o - u > (f - u) * i && (r += s.params.slidesPerGroup)
  } else {
    const u = s.snapGrid[a - 1],
      f = s.snapGrid[a];
    o - u <= (f - u) * i && (r -= s.params.slidesPerGroup)
  }
  return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, n)
}

function Rf() {
  const e = this,
    {
      params: t,
      slidesEl: n
    } = e,
    i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let s = e.clickedIndex,
    r;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = e.getSlideIndex(ze(n, `${l}[data-swiper-slide-index="${r}"]`)[0]), hi(() => {
      e.slideTo(s)
    })) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = e.getSlideIndex(ze(n, `${l}[data-swiper-slide-index="${r}"]`)[0]), hi(() => {
      e.slideTo(s)
    })) : e.slideTo(s)
  } else e.slideTo(s)
}
var zf = {
  slideTo: Af,
  slideToLoop: Lf,
  slideNext: Bf,
  slidePrev: Ff,
  slideReset: Nf,
  slideToClosest: Df,
  slideToClickedSlide: Rf
};

function $f(e) {
  const t = this,
    {
      params: n,
      slidesEl: i
    } = t;
  if (!n.loop || t.virtual && t.params.virtual.enabled) return;
  const s = () => {
      ze(i, `.${n.slideClass}, swiper-slide`).forEach((c, d) => {
        c.setAttribute("data-swiper-slide-index", d)
      })
    },
    r = t.grid && n.grid && n.grid.rows > 1,
    l = n.slidesPerGroup * (r ? n.grid.rows : 1),
    a = t.slides.length % l !== 0,
    o = r && t.slides.length % n.grid.rows !== 0,
    u = f => {
      for (let c = 0; c < f; c += 1) {
        const d = t.isElement ? Xt("swiper-slide", [n.slideBlankClass]) : Xt("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(d)
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const f = l - t.slides.length % l;
      u(f), t.recalcSlides(), t.updateSlides()
    } else _n("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s()
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const f = n.grid.rows - t.slides.length % n.grid.rows;
      u(f), t.recalcSlides(), t.updateSlides()
    } else _n("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s()
  } else s();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next"
  })
}

function Hf(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: r,
    byController: l,
    byMousewheel: a
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: f,
    allowSlideNext: c,
    slidesEl: d,
    params: m
  } = o, {
    centeredSlides: S
  } = m;
  if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) {
    n && (!m.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = f, o.allowSlideNext = c, o.emit("loopFix");
    return
  }
  let w = m.slidesPerView;
  w === "auto" ? w = o.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(m.slidesPerView, 10)), S && w % 2 === 0 && (w = w + 1));
  const C = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
  let h = C;
  h % C !== 0 && (h += C - h % C), h += m.loopAdditionalSlides, o.loopedSlides = h;
  const g = o.grid && m.grid && m.grid.rows > 1;
  u.length < w + h ? _n("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : g && m.grid.fill === "row" && _n("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const y = [],
    v = [];
  let T = o.activeIndex;
  typeof r > "u" ? r = o.getSlideIndex(u.filter(L => L.classList.contains(m.slideActiveClass))[0]) : T = r;
  const O = i === "next" || !i,
    $ = i === "prev" || !i;
  let x = 0,
    _ = 0;
  const E = g ? Math.ceil(u.length / m.grid.rows) : u.length,
    M = (g ? u[r].column : r) + (S && typeof s > "u" ? -w / 2 + .5 : 0);
  if (M < h) {
    x = Math.max(h - M, C);
    for (let L = 0; L < h - M; L += 1) {
      const N = L - Math.floor(L / E) * E;
      if (g) {
        const Y = E - N - 1;
        for (let K = u.length - 1; K >= 0; K -= 1) u[K].column === Y && y.push(K)
      } else y.push(E - N - 1)
    }
  } else if (M + w > E - h) {
    _ = Math.max(M - (E - h * 2), C);
    for (let L = 0; L < _; L += 1) {
      const N = L - Math.floor(L / E) * E;
      g ? u.forEach((Y, K) => {
        Y.column === N && v.push(K)
      }) : v.push(N)
    }
  }
  if (o.__preventObserver__ = !0, requestAnimationFrame(() => {
      o.__preventObserver__ = !1
    }), $ && y.forEach(L => {
      u[L].swiperLoopMoveDOM = !0, d.prepend(u[L]), u[L].swiperLoopMoveDOM = !1
    }), O && v.forEach(L => {
      u[L].swiperLoopMoveDOM = !0, d.append(u[L]), u[L].swiperLoopMoveDOM = !1
    }), o.recalcSlides(), m.slidesPerView === "auto" ? o.updateSlides() : g && (y.length > 0 && $ || v.length > 0 && O) && o.slides.forEach((L, N) => {
      o.grid.updateSlide(N, L, o.slides)
    }), m.watchSlidesProgress && o.updateSlidesOffset(), n) {
    if (y.length > 0 && $) {
      if (typeof t > "u") {
        const L = o.slidesGrid[T],
          Y = o.slidesGrid[T + x] - L;
        a ? o.setTranslate(o.translate - Y) : (o.slideTo(T + x, 0, !1, !0), s && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - Y, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - Y))
      } else if (s) {
        const L = g ? y.length / m.grid.rows : y.length;
        o.slideTo(o.activeIndex + L, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
      }
    } else if (v.length > 0 && O)
      if (typeof t > "u") {
        const L = o.slidesGrid[T],
          Y = o.slidesGrid[T - _] - L;
        a ? o.setTranslate(o.translate - Y) : (o.slideTo(T - _, 0, !1, !0), s && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - Y, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - Y))
      } else {
        const L = g ? v.length / m.grid.rows : v.length;
        o.slideTo(o.activeIndex - L, 0, !1, !0)
      }
  }
  if (o.allowSlidePrev = f, o.allowSlideNext = c, o.controller && o.controller.control && !l) {
    const L = {
      slideRealIndex: t,
      direction: i,
      setTranslate: s,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(o.controller.control) ? o.controller.control.forEach(N => {
      !N.destroyed && N.params.loop && N.loopFix({
        ...L,
        slideTo: N.params.slidesPerView === m.slidesPerView ? n : !1
      })
    }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
      ...L,
      slideTo: o.controller.control.params.slidesPerView === m.slidesPerView ? n : !1
    })
  }
  o.emit("loopFix")
}

function jf() {
  const e = this,
    {
      params: t,
      slidesEl: n
    } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach(s => {
    const r = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
    i[r] = s
  }), e.slides.forEach(s => {
    s.removeAttribute("data-swiper-slide-index")
  }), i.forEach(s => {
    n.append(s)
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
}
var kf = {
  loopCreate: $f,
  loopFix: Hf,
  loopDestroy: jf
};

function Vf(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1
  })
}

function Gf() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1
  }))
}
var Wf = {
  setGrabCursor: Vf,
  unsetGrabCursor: Gf
};

function qf(e, t) {
  t === void 0 && (t = this);

  function n(i) {
    if (!i || i === Ge() || i === _e()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const s = i.closest(e);
    return !s && !i.getRootNode ? null : s || n(i.getRootNode().host)
  }
  return n(t)
}

function js(e, t, n) {
  const i = _e(),
    {
      params: s
    } = e,
    r = s.edgeSwipeDetection,
    l = s.edgeSwipeThreshold;
  return r && (n <= l || n >= i.innerWidth - l) ? r === "prevent" ? (t.preventDefault(), !0) : !1 : !0
}

function Uf(e) {
  const t = this,
    n = Ge();
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  const s = t.touchEventsData;
  if (i.type === "pointerdown") {
    if (s.pointerId !== null && s.pointerId !== i.pointerId) return;
    s.pointerId = i.pointerId
  } else i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    js(t, i, i.targetTouches[0].pageX);
    return
  }
  const {
    params: r,
    touches: l,
    enabled: a
  } = t;
  if (!a || !r.simulateTouch && i.pointerType === "mouse" || t.animating && r.preventInteractionOnTransition) return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let o = i.target;
  if (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "",
    f = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && f && (o = f[0]);
  const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    d = !!(i.target && i.target.shadowRoot);
  if (r.noSwiping && (d ? qf(c, o) : o.closest(c))) {
    t.allowClick = !0;
    return
  }
  if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
  l.currentX = i.pageX, l.currentY = i.pageY;
  const m = l.currentX,
    S = l.currentY;
  if (!js(t, i, m)) return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), l.startX = m, l.startY = S, s.touchStartTime = Cn(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
  let w = !0;
  o.matches(s.focusableElements) && (w = !1, o.nodeName === "SELECT" && (s.isTouched = !1)), n.activeElement && n.activeElement.matches(s.focusableElements) && n.activeElement !== o && n.activeElement.blur();
  const C = w && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || C) && !o.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
}

function Kf(e) {
  const t = Ge(),
    n = this,
    i = n.touchEventsData,
    {
      params: s,
      touches: r,
      rtlTranslate: l,
      enabled: a
    } = n;
  if (!a || !s.simulateTouch && e.pointerType === "mouse") return;
  let o = e;
  if (o.originalEvent && (o = o.originalEvent), o.type === "pointermove" && (i.touchId !== null || o.pointerId !== i.pointerId)) return;
  let u;
  if (o.type === "touchmove") {
    if (u = [...o.changedTouches].filter(O => O.identifier === i.touchId)[0], !u || u.identifier !== i.touchId) return
  } else u = o;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o);
    return
  }
  const f = u.pageX,
    c = u.pageY;
  if (o.preventedByNestedSwiper) {
    r.startX = f, r.startY = c;
    return
  }
  if (!n.allowTouchMove) {
    o.target.matches(i.focusableElements) || (n.allowClick = !1), i.isTouched && (Object.assign(r, {
      startX: f,
      startY: c,
      currentX: f,
      currentY: c
    }), i.touchStartTime = Cn());
    return
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (n.isVertical()) {
      if (c < r.startY && n.translate <= n.maxTranslate() || c > r.startY && n.translate >= n.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return
      }
    } else if (f < r.startX && n.translate <= n.maxTranslate() || f > r.startX && n.translate >= n.minTranslate()) return
  }
  if (t.activeElement && o.target === t.activeElement && o.target.matches(i.focusableElements)) {
    i.isMoved = !0, n.allowClick = !1;
    return
  }
  i.allowTouchCallbacks && n.emit("touchMove", o), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = f, r.currentY = c;
  const d = r.currentX - r.startX,
    m = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(d ** 2 + m ** 2) < n.params.threshold) return;
  if (typeof i.isScrolling > "u") {
    let O;
    n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : d * d + m * m >= 25 && (O = Math.atan2(Math.abs(m), Math.abs(d)) * 180 / Math.PI, i.isScrolling = n.isHorizontal() ? O > s.touchAngle : 90 - O > s.touchAngle)
  }
  if (i.isScrolling && n.emit("touchMoveOpposite", o), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling) {
    i.isTouched = !1;
    return
  }
  if (!i.startMoving) return;
  n.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation();
  let S = n.isHorizontal() ? d : m,
    w = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  s.oneWayMovement && (S = Math.abs(S) * (l ? 1 : -1), w = Math.abs(w) * (l ? 1 : -1)), r.diff = S, S *= s.touchRatio, l && (S = -S, w = -w);
  const C = n.touchesDirection;
  n.swipeDirection = S > 0 ? "prev" : "next", n.touchesDirection = w > 0 ? "prev" : "next";
  const h = n.params.loop && !s.cssMode,
    g = n.touchesDirection === "next" && n.allowSlideNext || n.touchesDirection === "prev" && n.allowSlidePrev;
  if (!i.isMoved) {
    if (h && g && n.loopFix({
        direction: n.swipeDirection
      }), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
      const O = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      n.wrapperEl.dispatchEvent(O)
    }
    i.allowMomentumBounce = !1, s.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0), n.emit("sliderFirstMove", o)
  }
  let y;
  if (new Date().getTime(), i.isMoved && i.allowThresholdMove && C !== n.touchesDirection && h && g && Math.abs(S) >= 1) {
    Object.assign(r, {
      startX: f,
      startY: c,
      currentX: f,
      currentY: c,
      startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
    return
  }
  n.emit("sliderMove", o), i.isMoved = !0, i.currentTranslate = S + i.startTranslate;
  let v = !0,
    T = s.resistanceRatio;
  if (s.touchReleaseOnEdges && (T = 0), S > 0 ? (h && g && !y && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) && n.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > n.minTranslate() && (v = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + S) ** T))) : S < 0 && (h && g && !y && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) && n.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: n.slides.length - (s.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }), i.currentTranslate < n.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - S) ** T))), v && (o.preventedByNestedSwiper = !0), !n.allowSlideNext && n.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && n.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && !n.allowSlideNext && (i.currentTranslate = i.startTranslate), s.threshold > 0)
    if (Math.abs(S) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return
    }! s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
}

function Yf(e) {
  const t = this,
    n = t.touchEventsData;
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  let s;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (s = [...i.changedTouches].filter(T => T.identifier === n.touchId)[0], !s || s.identifier !== n.touchId) return
  } else {
    if (n.touchId !== null || i.pointerId !== n.pointerId) return;
    s = i
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return;
  n.pointerId = null, n.touchId = null;
  const {
    params: l,
    touches: a,
    rtlTranslate: o,
    slidesGrid: u,
    enabled: f
  } = t;
  if (!f || !l.simulateTouch && i.pointerType === "mouse") return;
  if (n.allowTouchCallbacks && t.emit("touchEnd", i), n.allowTouchCallbacks = !1, !n.isTouched) {
    n.isMoved && l.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, n.startMoving = !1;
    return
  }
  l.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const c = Cn(),
    d = c - n.touchStartTime;
  if (t.allowClick) {
    const T = i.path || i.composedPath && i.composedPath();
    t.updateClickedSlide(T && T[0] || i.target, T), t.emit("tap click", i), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
  }
  if (n.lastClickTime = Cn(), hi(() => {
      t.destroyed || (t.allowClick = !0)
    }), !n.isTouched || !n.isMoved || !t.swipeDirection || a.diff === 0 && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) {
    n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
    return
  }
  n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
  let m;
  if (l.followFinger ? m = o ? t.translate : -t.translate : m = -n.currentTranslate, l.cssMode) return;
  if (l.freeMode && l.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: m
    });
    return
  }
  const S = m >= -t.maxTranslate() && !t.params.loop;
  let w = 0,
    C = t.slidesSizesGrid[0];
  for (let T = 0; T < u.length; T += T < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
    const O = T < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof u[T + O] < "u" ? (S || m >= u[T] && m < u[T + O]) && (w = T, C = u[T + O] - u[T]) : (S || m >= u[T]) && (w = T, C = u[u.length - 1] - u[u.length - 2])
  }
  let h = null,
    g = null;
  l.rewind && (t.isBeginning ? g = l.virtual && l.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
  const y = (m - u[w]) / C,
    v = w < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (d > l.longSwipesMs) {
    if (!l.longSwipes) {
      t.slideTo(t.activeIndex);
      return
    }
    t.swipeDirection === "next" && (y >= l.longSwipesRatio ? t.slideTo(l.rewind && t.isEnd ? h : w + v) : t.slideTo(w)), t.swipeDirection === "prev" && (y > 1 - l.longSwipesRatio ? t.slideTo(w + v) : g !== null && y < 0 && Math.abs(y) > l.longSwipesRatio ? t.slideTo(g) : t.slideTo(w))
  } else {
    if (!l.shortSwipes) {
      t.slideTo(t.activeIndex);
      return
    }
    t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(w + v) : t.slideTo(w) : (t.swipeDirection === "next" && t.slideTo(h !== null ? h : w + v), t.swipeDirection === "prev" && t.slideTo(g !== null ? g : w))
  }
}

function ks() {
  const e = this,
    {
      params: t,
      el: n
    } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: s,
    snapGrid: r
  } = e, l = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const a = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
  }, 500)), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}

function Xf(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function Jf() {
  const e = this,
    {
      wrapperEl: t,
      rtlTranslate: n,
      enabled: i
    } = e;
  if (!i) return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let s;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? s = 0 : s = (e.translate - e.minTranslate()) / r, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}

function Zf(e) {
  const t = this;
  mn(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}

function Qf() {
  const e = this;
  e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
}
const rl = (e, t) => {
  const n = Ge(),
    {
      params: i,
      el: s,
      wrapperEl: r,
      device: l
    } = e,
    a = !!i.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  n[o]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: a
  }), s[o]("touchstart", e.onTouchStart, {
    passive: !1
  }), s[o]("pointerdown", e.onTouchStart, {
    passive: !1
  }), n[o]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: a
  }), n[o]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: a
  }), n[o]("touchend", e.onTouchEnd, {
    passive: !0
  }), n[o]("pointerup", e.onTouchEnd, {
    passive: !0
  }), n[o]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), n[o]("touchcancel", e.onTouchEnd, {
    passive: !0
  }), n[o]("pointerout", e.onTouchEnd, {
    passive: !0
  }), n[o]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), n[o]("contextmenu", e.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && s[o]("click", e.onClick, !0), i.cssMode && r[o]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ks, !0) : e[u]("observerUpdate", ks, !0), s[o]("load", e.onLoad, {
    capture: !0
  })
};

function eu() {
  const e = this,
    {
      params: t
    } = e;
  e.onTouchStart = Uf.bind(e), e.onTouchMove = Kf.bind(e), e.onTouchEnd = Yf.bind(e), e.onDocumentTouchStart = Qf.bind(e), t.cssMode && (e.onScroll = Jf.bind(e)), e.onClick = Xf.bind(e), e.onLoad = Zf.bind(e), rl(e, "on")
}

function tu() {
  rl(this, "off")
}
var nu = {
  attachEvents: eu,
  detachEvents: tu
};
const Vs = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function iu() {
  const e = this,
    {
      realIndex: t,
      initialized: n,
      params: i,
      el: s
    } = e,
    r = i.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const o = (l in r ? r[l] : void 0) || e.originalParams,
    u = Vs(e, i),
    f = Vs(e, o),
    c = i.enabled;
  u && !f ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && f && (s.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(h => {
    if (typeof o[h] > "u") return;
    const g = i[h] && i[h].enabled,
      y = o[h] && o[h].enabled;
    g && !y && e[h].disable(), !g && y && e[h].enable()
  });
  const d = o.direction && o.direction !== i.direction,
    m = i.loop && (o.slidesPerView !== i.slidesPerView || d),
    S = i.loop;
  d && n && e.changeDirection(), Ce(e.params, o);
  const w = e.params.enabled,
    C = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), c && !w ? e.disable() : !c && w && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), n && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !S && C ? (e.loopCreate(t), e.updateSlides()) : S && !C && e.loopDestroy()), e.emit("breakpoint", o)
}

function su(e, t, n) {
  if (t === void 0 && (t = "window"), !e || t === "container" && !n) return;
  let i = !1;
  const s = _e(),
    r = t === "window" ? s.innerHeight : n.clientHeight,
    l = Object.keys(e).map(a => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return {
          value: r * o,
          point: a
        }
      }
      return {
        value: a,
        point: a
      }
    });
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < l.length; a += 1) {
    const {
      point: o,
      value: u
    } = l[a];
    t === "window" ? s.matchMedia(`(min-width: ${u}px)`).matches && (i = o) : u <= n.clientWidth && (i = o)
  }
  return i || "max"
}
var ru = {
  setBreakpoint: iu,
  getBreakpoint: su
};

function lu(e, t) {
  const n = [];
  return e.forEach(i => {
    typeof i == "object" ? Object.keys(i).forEach(s => {
      i[s] && n.push(t + s)
    }) : typeof i == "string" && n.push(t + i)
  }), n
}

function ou() {
  const e = this,
    {
      classNames: t,
      params: n,
      rtl: i,
      el: s,
      device: r
    } = e,
    l = lu(["initialized", n.direction, {
      "free-mode": e.params.freeMode && n.freeMode.enabled
    }, {
      autoheight: n.autoHeight
    }, {
      rtl: i
    }, {
      grid: n.grid && n.grid.rows > 1
    }, {
      "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
    }, {
      android: r.android
    }, {
      ios: r.ios
    }, {
      "css-mode": n.cssMode
    }, {
      centered: n.cssMode && n.centeredSlides
    }, {
      "watch-progress": n.watchSlidesProgress
    }], n.containerModifierClass);
  t.push(...l), s.classList.add(...t), e.emitContainerClasses()
}

function au() {
  const e = this,
    {
      el: t,
      classNames: n
    } = e;
  t.classList.remove(...n), e.emitContainerClasses()
}
var fu = {
  addClasses: ou,
  removeClasses: au
};

function uu() {
  const e = this,
    {
      isLocked: t,
      params: n
    } = e,
    {
      slidesOffsetBefore: i
    } = n;
  if (i) {
    const s = e.slides.length - 1,
      r = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
    e.isLocked = e.size > r
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var cu = {
    checkOverflow: uu
  },
  mi = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

function du(e, t) {
  return function(i) {
    i === void 0 && (i = {});
    const s = Object.keys(i)[0],
      r = i[s];
    if (typeof r != "object" || r === null) {
      Ce(t, i);
      return
    }
    if (e[s] === !0 && (e[s] = {
        enabled: !0
      }), s === "navigation" && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), !(s in e && "enabled" in r)) {
      Ce(t, i);
      return
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0), e[s] || (e[s] = {
      enabled: !1
    }), Ce(t, i)
  }
}
const Zn = {
    eventsEmitter: ff,
    update: bf,
    translate: _f,
    transition: Of,
    slide: zf,
    loop: kf,
    grabCursor: Wf,
    events: nu,
    breakpoints: ru,
    checkOverflow: cu,
    classes: fu
  },
  Qn = {};
let Xi = class ke {
  constructor() {
    let t, n;
    for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++) s[r] = arguments[r];
    s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? n = s[0] : [t, n] = s, n || (n = {}), n = Ce({}, n), t && !n.el && (n.el = t);
    const l = Ge();
    if (n.el && typeof n.el == "string" && l.querySelectorAll(n.el).length > 1) {
      const f = [];
      return l.querySelectorAll(n.el).forEach(c => {
        const d = Ce({}, n, {
          el: c
        });
        f.push(new ke(d))
      }), f
    }
    const a = this;
    a.__swiper__ = !0, a.support = il(), a.device = sf({
      userAgent: n.userAgent
    }), a.browser = lf(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach(f => {
      f({
        params: n,
        swiper: a,
        extendParams: du(n, o),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a)
      })
    });
    const u = Ce({}, mi, o);
    return a.params = Ce({}, u, Qn, n), a.originalParams = Ce({}, a.params), a.passedParams = Ce({}, n), a.params && a.params.on && Object.keys(a.params.on).forEach(f => {
      a.on(f, a.params.on[f])
    }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
      enabled: a.params.enabled,
      el: t,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return a.params.direction === "horizontal"
      },
      isVertical() {
        return a.params.direction === "vertical"
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
      },
      allowSlideNext: a.params.allowSlideNext,
      allowSlidePrev: a.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: a.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      allowClick: !0,
      allowTouchMove: a.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), a.emit("_swiper"), a.params.init && a.init(), a
  }
  getDirectionLabel(t) {
    return this.isHorizontal() ? t : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    } [t]
  }
  getSlideIndex(t) {
    const {
      slidesEl: n,
      params: i
    } = this, s = ze(n, `.${i.slideClass}, swiper-slide`), r = $s(s[0]);
    return $s(t) - r
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.filter(n => n.getAttribute("data-swiper-slide-index") * 1 === t)[0])
  }
  recalcSlides() {
    const t = this,
      {
        slidesEl: n,
        params: i
      } = t;
    t.slides = ze(n, `.${i.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this;
    t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
  }
  disable() {
    const t = this;
    t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
  }
  setProgress(t, n) {
    const i = this;
    t = Math.min(Math.max(t, 0), 1);
    const s = i.minTranslate(),
      l = (i.maxTranslate() - s) * t + s;
    i.translateTo(l, typeof n > "u" ? 0 : n), i.updateActiveIndex(), i.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", n.join(" "))
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed ? "" : t.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(n.params.slideClass) === 0).join(" ")
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach(i => {
      const s = t.getSlideClasses(i);
      n.push({
        slideEl: i,
        classNames: s
      }), t.emit("_slideClass", i, s)
    }), t.emit("_slideClasses", n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const i = this,
      {
        params: s,
        slides: r,
        slidesGrid: l,
        slidesSizesGrid: a,
        size: o,
        activeIndex: u
      } = i;
    let f = 1;
    if (typeof s.slidesPerView == "number") return s.slidesPerView;
    if (s.centeredSlides) {
      let c = r[u] ? r[u].swiperSlideSize : 0,
        d;
      for (let m = u + 1; m < r.length; m += 1) r[m] && !d && (c += r[m].swiperSlideSize, f += 1, c > o && (d = !0));
      for (let m = u - 1; m >= 0; m -= 1) r[m] && !d && (c += r[m].swiperSlideSize, f += 1, c > o && (d = !0))
    } else if (t === "current")
      for (let c = u + 1; c < r.length; c += 1)(n ? l[c] + a[c] - l[u] < o : l[c] - l[u] < o) && (f += 1);
    else
      for (let c = u - 1; c >= 0; c -= 1) l[u] - l[c] < o && (f += 1);
    return f
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const {
      snapGrid: n,
      params: i
    } = t;
    i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
      l.complete && mn(t, l)
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

    function s() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let r;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode) s(), i.autoHeight && t.updateAutoHeight();
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
        const l = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(l.length - 1, 0, !1, !0)
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || s()
    }
    i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const i = this,
      s = i.params.direction;
    return t || (t = s === "horizontal" ? "vertical" : "horizontal"), t === s || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach(r => {
      t === "vertical" ? r.style.width = "" : r.style.height = ""
    }), i.emit("changeDirection"), n && i.update()), i
  }
  changeLanguageDirection(t) {
    const n = this;
    n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl", n.rtlTranslate = n.params.direction === "horizontal" && n.rtl, n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), n.el.dir = "ltr"), n.update())
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let i = t || n.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i) return !1;
    i.swiper = n, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
    const s = () => `.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;
    let l = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : ze(i, s())[0];
    return !l && n.params.createElements && (l = Xt("div", n.params.wrapperClass), i.append(l), ze(i, `.${n.params.slideClass}`).forEach(a => {
      l.append(a)
    })), Object.assign(n, {
      el: i,
      wrapperEl: l,
      slidesEl: n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : l,
      hostEl: n.isElement ? i.parentNode.host : i,
      mounted: !0,
      rtl: i.dir.toLowerCase() === "rtl" || Qe(i, "direction") === "rtl",
      rtlTranslate: n.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Qe(i, "direction") === "rtl"),
      wrongRTL: Qe(l, "display") === "-webkit-box"
    }), !0
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.enabled && n.setGrabCursor(), n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0), n.params.loop && n.loopCreate(), n.attachEvents();
    const s = [...n.el.querySelectorAll('[loading="lazy"]')];
    return n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(r => {
      r.complete ? mn(n, r) : r.addEventListener("load", l => {
        mn(n, l.target)
      })
    }), gi(n), n.initialized = !0, gi(n), n.emit("init"), n.emit("afterInit"), n
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const i = this,
      {
        params: s,
        el: r,
        wrapperEl: l,
        slides: a
      } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), n && (i.removeClasses(), r.removeAttribute("style"), l.removeAttribute("style"), a && a.length && a.forEach(o => {
      o.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index")
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(o => {
      i.off(o)
    }), t !== !1 && (i.el.swiper = null, Ua(i)), i.destroyed = !0), null
  }
  static extendDefaults(t) {
    Ce(Qn, t)
  }
  static get extendedDefaults() {
    return Qn
  }
  static get defaults() {
    return mi
  }
  static installModule(t) {
    ke.prototype.__modules__ || (ke.prototype.__modules__ = []);
    const n = ke.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach(n => ke.installModule(n)), ke) : (ke.installModule(t), ke)
  }
};
Object.keys(Zn).forEach(e => {
  Object.keys(Zn[e]).forEach(t => {
    Xi.prototype[t] = Zn[e][t]
  })
});
Xi.use([of, af]);

function pu(e, t, n, i) {
  return e.params.createElements && Object.keys(i).forEach(s => {
    if (!n[s] && n.auto === !0) {
      let r = ze(e.el, `.${i[s]}`)[0];
      r || (r = Xt("div", i[s]), r.className = i[s], e.el.append(r)), n[s] = r, t[s] = r
    }
  }), n
}

function Qu(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i,
    emit: s
  } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), t.navigation = {
    nextEl: null,
    prevEl: null
  };
  const r = w => (Array.isArray(w) ? w : [w]).filter(C => !!C);

  function l(w) {
    let C;
    return w && typeof w == "string" && t.isElement && (C = t.el.querySelector(w), C) ? C : (w && (typeof w == "string" && (C = [...document.querySelectorAll(w)]), t.params.uniqueNavElements && typeof w == "string" && C.length > 1 && t.el.querySelectorAll(w).length === 1 && (C = t.el.querySelector(w))), w && !C ? w : C)
  }

  function a(w, C) {
    const h = t.params.navigation;
    w = r(w), w.forEach(g => {
      g && (g.classList[C ? "add" : "remove"](...h.disabledClass.split(" ")), g.tagName === "BUTTON" && (g.disabled = C), t.params.watchOverflow && t.enabled && g.classList[t.isLocked ? "add" : "remove"](h.lockClass))
    })
  }

  function o() {
    const {
      nextEl: w,
      prevEl: C
    } = t.navigation;
    if (t.params.loop) {
      a(C, !1), a(w, !1);
      return
    }
    a(C, t.isBeginning && !t.params.rewind), a(w, t.isEnd && !t.params.rewind)
  }

  function u(w) {
    w.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), s("navigationPrev"))
  }

  function f(w) {
    w.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), s("navigationNext"))
  }

  function c() {
    const w = t.params.navigation;
    if (t.params.navigation = pu(t, t.originalParams.navigation, t.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(w.nextEl || w.prevEl)) return;
    let C = l(w.nextEl),
      h = l(w.prevEl);
    Object.assign(t.navigation, {
      nextEl: C,
      prevEl: h
    }), C = r(C), h = r(h);
    const g = (y, v) => {
      y && y.addEventListener("click", v === "next" ? f : u), !t.enabled && y && y.classList.add(...w.lockClass.split(" "))
    };
    C.forEach(y => g(y, "next")), h.forEach(y => g(y, "prev"))
  }

  function d() {
    let {
      nextEl: w,
      prevEl: C
    } = t.navigation;
    w = r(w), C = r(C);
    const h = (g, y) => {
      g.removeEventListener("click", y === "next" ? f : u), g.classList.remove(...t.params.navigation.disabledClass.split(" "))
    };
    w.forEach(g => h(g, "next")), C.forEach(g => h(g, "prev"))
  }
  i("init", () => {
    t.params.navigation.enabled === !1 ? S() : (c(), o())
  }), i("toEdge fromEdge lock unlock", () => {
    o()
  }), i("destroy", () => {
    d()
  }), i("enable disable", () => {
    let {
      nextEl: w,
      prevEl: C
    } = t.navigation;
    if (w = r(w), C = r(C), t.enabled) {
      o();
      return
    } [...w, ...C].filter(h => !!h).forEach(h => h.classList.add(t.params.navigation.lockClass))
  }), i("click", (w, C) => {
    let {
      nextEl: h,
      prevEl: g
    } = t.navigation;
    h = r(h), g = r(g);
    const y = C.target;
    if (t.params.navigation.hideOnClick && !g.includes(y) && !h.includes(y)) {
      if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === y || t.pagination.el.contains(y))) return;
      let v;
      h.length ? v = h[0].classList.contains(t.params.navigation.hiddenClass) : g.length && (v = g[0].classList.contains(t.params.navigation.hiddenClass)), s(v === !0 ? "navigationShow" : "navigationHide"), [...h, ...g].filter(T => !!T).forEach(T => T.classList.toggle(t.params.navigation.hiddenClass))
    }
  });
  const m = () => {
      t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), o()
    },
    S = () => {
      t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), d()
    };
  Object.assign(t.navigation, {
    enable: m,
    disable: S,
    update: o,
    init: c,
    destroy: d
  })
}

function ec(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i,
    emit: s,
    params: r
  } = e;
  t.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, n({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !1,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let l, a, o = r && r.autoplay ? r.autoplay.delay : 3e3,
    u = r && r.autoplay ? r.autoplay.delay : 3e3,
    f, c = new Date().getTime(),
    d, m, S, w, C, h, g;

  function y(k) {
    !t || t.destroyed || !t.wrapperEl || k.target === t.wrapperEl && (t.wrapperEl.removeEventListener("transitionend", y), !g && E())
  }
  const v = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? d = !0 : d && (u = f, d = !1);
      const k = t.autoplay.paused ? f : c + u - new Date().getTime();
      t.autoplay.timeLeft = k, s("autoplayTimeLeft", k, k / o), a = requestAnimationFrame(() => {
        v()
      })
    },
    T = () => {
      let k;
      return t.virtual && t.params.virtual.enabled ? k = t.slides.filter(le => le.classList.contains("swiper-slide-active"))[0] : k = t.slides[t.activeIndex], k ? parseInt(k.getAttribute("data-swiper-autoplay"), 10) : void 0
    },
    O = k => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(a), v();
      let re = typeof k > "u" ? t.params.autoplay.delay : k;
      o = t.params.autoplay.delay, u = t.params.autoplay.delay;
      const le = T();
      !Number.isNaN(le) && le > 0 && typeof k > "u" && (re = le, o = le, u = le), f = re;
      const ge = t.params.speed,
        me = () => {
          !t || t.destroyed || (t.params.autoplay.reverseDirection ? !t.isBeginning || t.params.loop || t.params.rewind ? (t.slidePrev(ge, !0, !0), s("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, ge, !0, !0), s("autoplay")) : !t.isEnd || t.params.loop || t.params.rewind ? (t.slideNext(ge, !0, !0), s("autoplay")) : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, ge, !0, !0), s("autoplay")), t.params.cssMode && (c = new Date().getTime(), requestAnimationFrame(() => {
            O()
          })))
        };
      return re > 0 ? (clearTimeout(l), l = setTimeout(() => {
        me()
      }, re)) : requestAnimationFrame(() => {
        me()
      }), re
    },
    $ = () => {
      c = new Date().getTime(), t.autoplay.running = !0, O(), s("autoplayStart")
    },
    x = () => {
      t.autoplay.running = !1, clearTimeout(l), cancelAnimationFrame(a), s("autoplayStop")
    },
    _ = (k, re) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(l), k || (h = !0);
      const le = () => {
        s("autoplayPause"), t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", y) : E()
      };
      if (t.autoplay.paused = !0, re) {
        C && (f = t.params.autoplay.delay), C = !1, le();
        return
      }
      f = (f || t.params.autoplay.delay) - (new Date().getTime() - c), !(t.isEnd && f < 0 && !t.params.loop) && (f < 0 && (f = 0), le())
    },
    E = () => {
      t.isEnd && f < 0 && !t.params.loop || t.destroyed || !t.autoplay.running || (c = new Date().getTime(), h ? (h = !1, O(f)) : O(), t.autoplay.paused = !1, s("autoplayResume"))
    },
    B = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const k = Ge();
      k.visibilityState === "hidden" && (h = !0, _(!0)), k.visibilityState === "visible" && E()
    },
    M = k => {
      k.pointerType === "mouse" && (h = !0, g = !0, !(t.animating || t.autoplay.paused) && _(!0))
    },
    L = k => {
      k.pointerType === "mouse" && (g = !1, t.autoplay.paused && E())
    },
    N = () => {
      t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", M), t.el.addEventListener("pointerleave", L))
    },
    Y = () => {
      t.el.removeEventListener("pointerenter", M), t.el.removeEventListener("pointerleave", L)
    },
    K = () => {
      Ge().addEventListener("visibilitychange", B)
    },
    Q = () => {
      Ge().removeEventListener("visibilitychange", B)
    };
  i("init", () => {
    t.params.autoplay.enabled && (N(), K(), $())
  }), i("destroy", () => {
    Y(), Q(), t.autoplay.running && x()
  }), i("_freeModeStaticRelease", () => {
    (S || h) && E()
  }), i("_freeModeNoMomentumRelease", () => {
    t.params.autoplay.disableOnInteraction ? x() : _(!0, !0)
  }), i("beforeTransitionStart", (k, re, le) => {
    t.destroyed || !t.autoplay.running || (le || !t.params.autoplay.disableOnInteraction ? _(!0, !0) : x())
  }), i("sliderFirstMove", () => {
    if (!(t.destroyed || !t.autoplay.running)) {
      if (t.params.autoplay.disableOnInteraction) {
        x();
        return
      }
      m = !0, S = !1, h = !1, w = setTimeout(() => {
        h = !0, S = !0, _(!0)
      }, 200)
    }
  }), i("touchEnd", () => {
    if (!(t.destroyed || !t.autoplay.running || !m)) {
      if (clearTimeout(w), clearTimeout(l), t.params.autoplay.disableOnInteraction) {
        S = !1, m = !1;
        return
      }
      S && t.params.cssMode && E(), S = !1, m = !1
    }
  }), i("slideChange", () => {
    t.destroyed || !t.autoplay.running || (C = !0)
  }), Object.assign(t.autoplay, {
    start: $,
    stop: x,
    pause: _,
    resume: E
  })
}

function hu(e) {
  const {
    effect: t,
    swiper: n,
    on: i,
    setTranslate: s,
    setTransition: r,
    overwriteParams: l,
    perspective: a,
    recreateShadows: o,
    getEffectParams: u
  } = e;
  i("beforeInit", () => {
    if (n.params.effect !== t) return;
    n.classNames.push(`${n.params.containerModifierClass}${t}`), a && a() && n.classNames.push(`${n.params.containerModifierClass}3d`);
    const c = l ? l() : {};
    Object.assign(n.params, c), Object.assign(n.originalParams, c)
  }), i("setTranslate", () => {
    n.params.effect === t && s()
  }), i("setTransition", (c, d) => {
    n.params.effect === t && r(d)
  }), i("transitionEnd", () => {
    if (n.params.effect === t && o) {
      if (!u || !u().slideShadows) return;
      n.slides.forEach(c => {
        c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d => d.remove())
      }), o()
    }
  });
  let f;
  i("virtualUpdate", () => {
    n.params.effect === t && (n.slides.length || (f = !0), requestAnimationFrame(() => {
      f && n.slides && n.slides.length && (s(), f = !1)
    }))
  })
}

function gu(e, t) {
  const n = Yi(t);
  return n !== t && (n.style.backfaceVisibility = "hidden", n.style["-webkit-backface-visibility"] = "hidden"), n
}

function mu(e) {
  let {
    swiper: t,
    duration: n,
    transformElements: i,
    allSlides: s
  } = e;
  const {
    activeIndex: r
  } = t, l = a => a.parentElement ? a.parentElement : t.slides.filter(u => u.shadowRoot && u.shadowRoot === a.parentNode)[0];
  if (t.params.virtualTranslate && n !== 0) {
    let a = !1,
      o;
    s ? o = i : o = i.filter(u => {
      const f = u.classList.contains("swiper-slide-transform") ? l(u) : u;
      return t.getSlideIndex(f) === r
    }), o.forEach(u => {
      ef(u, () => {
        if (a || !t || t.destroyed) return;
        a = !0, t.animating = !1;
        const f = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        t.wrapperEl.dispatchEvent(f)
      })
    })
  }
}

function vu(e, t, n) {
  const i = `swiper-slide-shadow${n?`-${n}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
    s = Yi(t);
  let r = s.querySelector(`.${i.split(" ").join(".")}`);
  return r || (r = Xt("div", i.split(" ")), s.append(r)), r
}

function tc(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i
  } = e;
  n({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const s = a => typeof a == "string" ? a : `${a}px`;
  hu({
    effect: "creative",
    swiper: t,
    on: i,
    setTranslate: () => {
      const {
        slides: a,
        wrapperEl: o,
        slidesSizesGrid: u
      } = t, f = t.params.creativeEffect, {
        progressMultiplier: c
      } = f, d = t.params.centeredSlides;
      if (d) {
        const m = u[0] / 2 - t.params.slidesOffsetBefore || 0;
        o.style.transform = `translateX(calc(50% - ${m}px))`
      }
      for (let m = 0; m < a.length; m += 1) {
        const S = a[m],
          w = S.progress,
          C = Math.min(Math.max(S.progress, -f.limitProgress), f.limitProgress);
        let h = C;
        d || (h = Math.min(Math.max(S.originalProgress, -f.limitProgress), f.limitProgress));
        const g = S.swiperSlideOffset,
          y = [t.params.cssMode ? -g - t.translate : -g, 0, 0],
          v = [0, 0, 0];
        let T = !1;
        t.isHorizontal() || (y[1] = y[0], y[0] = 0);
        let O = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        C < 0 ? (O = f.next, T = !0) : C > 0 && (O = f.prev, T = !0), y.forEach((L, N) => {
          y[N] = `calc(${L}px + (${s(O.translate[N])} * ${Math.abs(C*c)}))`
        }), v.forEach((L, N) => {
          let Y = O.rotate[N] * Math.abs(C * c);
          t.browser && t.browser.isSafari && Math.abs(Y) / 90 % 2 === 1 && (Y += .001), v[N] = Y
        }), S.style.zIndex = -Math.abs(Math.round(w)) + a.length;
        const $ = y.join(", "),
          x = `rotateX(${v[0]}deg) rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`,
          _ = h < 0 ? `scale(${1+(1-O.scale)*h*c})` : `scale(${1-(1-O.scale)*h*c})`,
          E = h < 0 ? 1 + (1 - O.opacity) * h * c : 1 - (1 - O.opacity) * h * c,
          B = `translate3d(${$}) ${x} ${_}`;
        if (T && O.shadow || !T) {
          let L = S.querySelector(".swiper-slide-shadow");
          if (!L && O.shadow && (L = vu("creative", S)), L) {
            const N = f.shadowPerProgress ? C * (1 / f.limitProgress) : C;
            L.style.opacity = Math.min(Math.max(Math.abs(N), 0), 1)
          }
        }
        const M = gu(f, S);
        M.style.transform = B, M.style.opacity = E, O.origin && (M.style.transformOrigin = O.origin)
      }
    },
    setTransition: a => {
      const o = t.slides.map(u => Yi(u));
      o.forEach(u => {
        u.style.transitionDuration = `${a}ms`, u.querySelectorAll(".swiper-slide-shadow").forEach(f => {
          f.style.transitionDuration = `${a}ms`
        })
      }), mu({
        swiper: t,
        duration: a,
        transformElements: o,
        allSlides: !0
      })
    },
    perspective: () => t.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !t.params.cssMode
    })
  })
}
const ll = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

function pt(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}

function xt(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter(i => n.indexOf(i) < 0).forEach(i => {
    typeof e[i] > "u" ? e[i] = t[i] : pt(t[i]) && pt(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : xt(e[i], t[i]) : e[i] = t[i]
  })
}

function ol(e) {
  return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}

function al(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
}

function fl(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u"
}

function ul(e) {
  e === void 0 && (e = "");
  const t = e.split(" ").map(i => i.trim()).filter(i => !!i),
    n = [];
  return t.forEach(i => {
    n.indexOf(i) < 0 && n.push(i)
  }), n.join(" ")
}

function wu(e) {
  return e === void 0 && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}

function yu(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: i,
    changedParams: s,
    nextEl: r,
    prevEl: l,
    scrollbarEl: a,
    paginationEl: o
  } = e;
  const u = s.filter(_ => _ !== "children" && _ !== "direction" && _ !== "wrapperClass"),
    {
      params: f,
      pagination: c,
      navigation: d,
      scrollbar: m,
      virtual: S,
      thumbs: w
    } = t;
  let C, h, g, y, v, T, O, $;
  s.includes("thumbs") && i.thumbs && i.thumbs.swiper && f.thumbs && !f.thumbs.swiper && (C = !0), s.includes("controller") && i.controller && i.controller.control && f.controller && !f.controller.control && (h = !0), s.includes("pagination") && i.pagination && (i.pagination.el || o) && (f.pagination || f.pagination === !1) && c && !c.el && (g = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || a) && (f.scrollbar || f.scrollbar === !1) && m && !m.el && (y = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || r) && (f.navigation || f.navigation === !1) && d && !d.prevEl && !d.nextEl && (v = !0);
  const x = _ => {
    t[_] && (t[_].destroy(), _ === "navigation" ? (t.isElement && (t[_].prevEl.remove(), t[_].nextEl.remove()), f[_].prevEl = void 0, f[_].nextEl = void 0, t[_].prevEl = void 0, t[_].nextEl = void 0) : (t.isElement && t[_].el.remove(), f[_].el = void 0, t[_].el = void 0))
  };
  s.includes("loop") && t.isElement && (f.loop && !i.loop ? T = !0 : !f.loop && i.loop ? O = !0 : $ = !0), u.forEach(_ => {
    if (pt(f[_]) && pt(i[_])) Object.assign(f[_], i[_]), (_ === "navigation" || _ === "pagination" || _ === "scrollbar") && "enabled" in i[_] && !i[_].enabled && x(_);
    else {
      const E = i[_];
      (E === !0 || E === !1) && (_ === "navigation" || _ === "pagination" || _ === "scrollbar") ? E === !1 && x(_): f[_] = i[_]
    }
  }), u.includes("controller") && !h && t.controller && t.controller.control && f.controller && f.controller.control && (t.controller.control = f.controller.control), s.includes("children") && n && S && f.virtual.enabled ? (S.slides = n, S.update(!0)) : s.includes("virtual") && S && f.virtual.enabled && (n && (S.slides = n), S.update(!0)), s.includes("children") && n && f.loop && ($ = !0), C && w.init() && w.update(!0), h && (t.controller.control = f.controller.control), g && (t.isElement && (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)), o && (f.pagination.el = o), c.init(), c.render(), c.update()), y && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), t.el.appendChild(a)), a && (f.scrollbar.el = a), m.init(), m.updateSize(), m.setTranslate()), v && (t.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), t.el.appendChild(r)), (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-button-prev"), l.innerHTML = t.hostEl.constructor.prevButtonSvg, l.part.add("button-prev"), t.el.appendChild(l))), r && (f.navigation.nextEl = r), l && (f.navigation.prevEl = l), d.init(), d.update()), s.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && t.changeDirection(i.direction, !1), (T || $) && t.loopDestroy(), (O || $) && t.loopCreate(), t.update()
}

function Gs(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = {
      on: {}
    },
    i = {},
    s = {};
  xt(n, mi), n._emitClasses = !0, n.init = !1;
  const r = {},
    l = ll.map(o => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return Object.keys(a).forEach(o => {
    typeof e[o] > "u" || (l.indexOf(o) >= 0 ? pt(e[o]) ? (n[o] = {}, s[o] = {}, xt(n[o], e[o]), xt(s[o], e[o])) : (n[o] = e[o], s[o] = e[o]) : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function" ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r[o] = e[o])
  }), ["navigation", "pagination", "scrollbar"].forEach(o => {
    n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o]
  }), {
    params: n,
    passedParams: s,
    rest: r,
    events: i
  }
}

function bu(e, t) {
  let {
    el: n,
    nextEl: i,
    prevEl: s,
    paginationEl: r,
    scrollbarEl: l,
    swiper: a
  } = e;
  ol(t) && i && s && (a.params.navigation.nextEl = i, a.originalParams.navigation.nextEl = i, a.params.navigation.prevEl = s, a.originalParams.navigation.prevEl = s), al(t) && r && (a.params.pagination.el = r, a.originalParams.pagination.el = r), fl(t) && l && (a.params.scrollbar.el = l, a.originalParams.scrollbar.el = l), a.init(n)
}

function Su(e, t, n, i, s) {
  const r = [];
  if (!t) return r;
  const l = o => {
    r.indexOf(o) < 0 && r.push(o)
  };
  if (n && i) {
    const o = i.map(s),
      u = n.map(s);
    o.join("") !== u.join("") && l("children"), i.length !== n.length && l("children")
  }
  return ll.filter(o => o[0] === "_").map(o => o.replace(/_/, "")).forEach(o => {
    if (o in e && o in t)
      if (pt(e[o]) && pt(t[o])) {
        const u = Object.keys(e[o]),
          f = Object.keys(t[o]);
        u.length !== f.length ? l(o) : (u.forEach(c => {
          e[o][c] !== t[o][c] && l(o)
        }), f.forEach(c => {
          e[o][c] !== t[o][c] && l(o)
        }))
      } else e[o] !== t[o] && l(o)
  }), r
}
const Tu = e => {
  !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
};

function ei(e, t, n) {
  e === void 0 && (e = {});
  const i = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": []
    },
    r = (l, a) => {
      Array.isArray(l) && l.forEach(o => {
        const u = typeof o.type == "symbol";
        a === "default" && (a = "container-end"), u && o.children ? r(o.children, a) : o.type && (o.type.name === "SwiperSlide" || o.type.name === "AsyncComponentWrapper") ? i.push(o) : s[a] && s[a].push(o)
      })
    };
  return Object.keys(e).forEach(l => {
    if (typeof e[l] != "function") return;
    const a = e[l]();
    r(a, l)
  }), n.value = t.value, t.value = i, {
    slides: i,
    slots: s
  }
}

function xu(e, t, n) {
  if (!n) return null;
  const i = f => {
      let c = f;
      return f < 0 ? c = t.length + f : c >= t.length && (c = c - t.length), c
    },
    s = e.value.isHorizontal() ? {
      [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px`
    } : {
      top: `${n.offset}px`
    },
    {
      from: r,
      to: l
    } = n,
    a = e.value.params.loop ? -t.length : 0,
    o = e.value.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let f = a; f < o; f += 1) f >= r && f <= l && u.push(t[i(f)]);
  return u.map(f => (f.props || (f.props = {}), f.props.style || (f.props.style = {}), f.props.swiperRef = e, f.props.style = s, Ie(f.type, {
    ...f.props
  }, f.children)))
}
const nc = {
    name: "Swiper",
    props: {
      tag: {
        type: String,
        default: "div"
      },
      wrapperTag: {
        type: String,
        default: "div"
      },
      modules: {
        type: Array,
        default: void 0
      },
      init: {
        type: Boolean,
        default: void 0
      },
      direction: {
        type: String,
        default: void 0
      },
      oneWayMovement: {
        type: Boolean,
        default: void 0
      },
      touchEventsTarget: {
        type: String,
        default: void 0
      },
      initialSlide: {
        type: Number,
        default: void 0
      },
      speed: {
        type: Number,
        default: void 0
      },
      cssMode: {
        type: Boolean,
        default: void 0
      },
      updateOnWindowResize: {
        type: Boolean,
        default: void 0
      },
      resizeObserver: {
        type: Boolean,
        default: void 0
      },
      nested: {
        type: Boolean,
        default: void 0
      },
      focusableElements: {
        type: String,
        default: void 0
      },
      width: {
        type: Number,
        default: void 0
      },
      height: {
        type: Number,
        default: void 0
      },
      preventInteractionOnTransition: {
        type: Boolean,
        default: void 0
      },
      userAgent: {
        type: String,
        default: void 0
      },
      url: {
        type: String,
        default: void 0
      },
      edgeSwipeDetection: {
        type: [Boolean, String],
        default: void 0
      },
      edgeSwipeThreshold: {
        type: Number,
        default: void 0
      },
      autoHeight: {
        type: Boolean,
        default: void 0
      },
      setWrapperSize: {
        type: Boolean,
        default: void 0
      },
      virtualTranslate: {
        type: Boolean,
        default: void 0
      },
      effect: {
        type: String,
        default: void 0
      },
      breakpoints: {
        type: Object,
        default: void 0
      },
      spaceBetween: {
        type: [Number, String],
        default: void 0
      },
      slidesPerView: {
        type: [Number, String],
        default: void 0
      },
      maxBackfaceHiddenSlides: {
        type: Number,
        default: void 0
      },
      slidesPerGroup: {
        type: Number,
        default: void 0
      },
      slidesPerGroupSkip: {
        type: Number,
        default: void 0
      },
      slidesPerGroupAuto: {
        type: Boolean,
        default: void 0
      },
      centeredSlides: {
        type: Boolean,
        default: void 0
      },
      centeredSlidesBounds: {
        type: Boolean,
        default: void 0
      },
      slidesOffsetBefore: {
        type: Number,
        default: void 0
      },
      slidesOffsetAfter: {
        type: Number,
        default: void 0
      },
      normalizeSlideIndex: {
        type: Boolean,
        default: void 0
      },
      centerInsufficientSlides: {
        type: Boolean,
        default: void 0
      },
      watchOverflow: {
        type: Boolean,
        default: void 0
      },
      roundLengths: {
        type: Boolean,
        default: void 0
      },
      touchRatio: {
        type: Number,
        default: void 0
      },
      touchAngle: {
        type: Number,
        default: void 0
      },
      simulateTouch: {
        type: Boolean,
        default: void 0
      },
      shortSwipes: {
        type: Boolean,
        default: void 0
      },
      longSwipes: {
        type: Boolean,
        default: void 0
      },
      longSwipesRatio: {
        type: Number,
        default: void 0
      },
      longSwipesMs: {
        type: Number,
        default: void 0
      },
      followFinger: {
        type: Boolean,
        default: void 0
      },
      allowTouchMove: {
        type: Boolean,
        default: void 0
      },
      threshold: {
        type: Number,
        default: void 0
      },
      touchMoveStopPropagation: {
        type: Boolean,
        default: void 0
      },
      touchStartPreventDefault: {
        type: Boolean,
        default: void 0
      },
      touchStartForcePreventDefault: {
        type: Boolean,
        default: void 0
      },
      touchReleaseOnEdges: {
        type: Boolean,
        default: void 0
      },
      uniqueNavElements: {
        type: Boolean,
        default: void 0
      },
      resistance: {
        type: Boolean,
        default: void 0
      },
      resistanceRatio: {
        type: Number,
        default: void 0
      },
      watchSlidesProgress: {
        type: Boolean,
        default: void 0
      },
      grabCursor: {
        type: Boolean,
        default: void 0
      },
      preventClicks: {
        type: Boolean,
        default: void 0
      },
      preventClicksPropagation: {
        type: Boolean,
        default: void 0
      },
      slideToClickedSlide: {
        type: Boolean,
        default: void 0
      },
      loop: {
        type: Boolean,
        default: void 0
      },
      loopedSlides: {
        type: Number,
        default: void 0
      },
      loopPreventsSliding: {
        type: Boolean,
        default: void 0
      },
      rewind: {
        type: Boolean,
        default: void 0
      },
      allowSlidePrev: {
        type: Boolean,
        default: void 0
      },
      allowSlideNext: {
        type: Boolean,
        default: void 0
      },
      swipeHandler: {
        type: Boolean,
        default: void 0
      },
      noSwiping: {
        type: Boolean,
        default: void 0
      },
      noSwipingClass: {
        type: String,
        default: void 0
      },
      noSwipingSelector: {
        type: String,
        default: void 0
      },
      passiveListeners: {
        type: Boolean,
        default: void 0
      },
      containerModifierClass: {
        type: String,
        default: void 0
      },
      slideClass: {
        type: String,
        default: void 0
      },
      slideActiveClass: {
        type: String,
        default: void 0
      },
      slideVisibleClass: {
        type: String,
        default: void 0
      },
      slideFullyVisibleClass: {
        type: String,
        default: void 0
      },
      slideBlankClass: {
        type: String,
        default: void 0
      },
      slideNextClass: {
        type: String,
        default: void 0
      },
      slidePrevClass: {
        type: String,
        default: void 0
      },
      wrapperClass: {
        type: String,
        default: void 0
      },
      lazyPreloaderClass: {
        type: String,
        default: void 0
      },
      lazyPreloadPrevNext: {
        type: Number,
        default: void 0
      },
      runCallbacksOnInit: {
        type: Boolean,
        default: void 0
      },
      observer: {
        type: Boolean,
        default: void 0
      },
      observeParents: {
        type: Boolean,
        default: void 0
      },
      observeSlideChildren: {
        type: Boolean,
        default: void 0
      },
      a11y: {
        type: [Boolean, Object],
        default: void 0
      },
      autoplay: {
        type: [Boolean, Object],
        default: void 0
      },
      controller: {
        type: Object,
        default: void 0
      },
      coverflowEffect: {
        type: Object,
        default: void 0
      },
      cubeEffect: {
        type: Object,
        default: void 0
      },
      fadeEffect: {
        type: Object,
        default: void 0
      },
      flipEffect: {
        type: Object,
        default: void 0
      },
      creativeEffect: {
        type: Object,
        default: void 0
      },
      cardsEffect: {
        type: Object,
        default: void 0
      },
      hashNavigation: {
        type: [Boolean, Object],
        default: void 0
      },
      history: {
        type: [Boolean, Object],
        default: void 0
      },
      keyboard: {
        type: [Boolean, Object],
        default: void 0
      },
      mousewheel: {
        type: [Boolean, Object],
        default: void 0
      },
      navigation: {
        type: [Boolean, Object],
        default: void 0
      },
      pagination: {
        type: [Boolean, Object],
        default: void 0
      },
      parallax: {
        type: [Boolean, Object],
        default: void 0
      },
      scrollbar: {
        type: [Boolean, Object],
        default: void 0
      },
      thumbs: {
        type: Object,
        default: void 0
      },
      virtual: {
        type: [Boolean, Object],
        default: void 0
      },
      zoom: {
        type: [Boolean, Object],
        default: void 0
      },
      grid: {
        type: [Object],
        default: void 0
      },
      freeMode: {
        type: [Boolean, Object],
        default: void 0
      },
      enabled: {
        type: Boolean,
        default: void 0
      }
    },
    emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "breakpointsBase", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
    setup(e, t) {
      let {
        slots: n,
        emit: i
      } = t;
      const {
        tag: s,
        wrapperTag: r
      } = e, l = we("swiper"), a = we(null), o = we(!1), u = we(!1), f = we(null), c = we(null), d = we(null), m = {
        value: []
      }, S = {
        value: []
      }, w = we(null), C = we(null), h = we(null), g = we(null), {
        params: y,
        passedParams: v
      } = Gs(e, !1);
      ei(n, m, S), d.value = v, S.value = m.value;
      const T = () => {
        ei(n, m, S), o.value = !0
      };
      y.onAny = function(x) {
        for (var _ = arguments.length, E = new Array(_ > 1 ? _ - 1 : 0), B = 1; B < _; B++) E[B - 1] = arguments[B];
        i(x, ...E)
      }, Object.assign(y.on, {
        _beforeBreakpoint: T,
        _containerClasses(x, _) {
          l.value = _
        }
      });
      const O = {
        ...y
      };
      if (delete O.wrapperClass, c.value = new Xi(O), c.value.virtual && c.value.params.virtual.enabled) {
        c.value.virtual.slides = m.value;
        const x = {
          cache: !1,
          slides: m.value,
          renderExternal: _ => {
            a.value = _
          },
          renderExternalUpdate: !1
        };
        xt(c.value.params.virtual, x), xt(c.value.originalParams.virtual, x)
      }
      Fn(() => {
        !u.value && c.value && (c.value.emitSlidesClasses(), u.value = !0);
        const {
          passedParams: x
        } = Gs(e, !1), _ = Su(x, d.value, m.value, S.value, E => E.props && E.props.key);
        d.value = x, (_.length || o.value) && c.value && !c.value.destroyed && yu({
          swiper: c.value,
          slides: m.value,
          passedParams: x,
          changedParams: _,
          nextEl: w.value,
          prevEl: C.value,
          scrollbarEl: g.value,
          paginationEl: h.value
        }), o.value = !1
      }), ki("swiper", c), zt(a, () => {
        mr(() => {
          Tu(c.value)
        })
      }), en(() => {
        f.value && (bu({
          el: f.value,
          nextEl: w.value,
          prevEl: C.value,
          paginationEl: h.value,
          scrollbarEl: g.value,
          swiper: c.value
        }, y), i("swiper", c.value))
      }), tn(() => {
        c.value && !c.value.destroyed && c.value.destroy(!0, !1)
      });

      function $(x) {
        return y.virtual ? xu(c, x, a.value) : (x.forEach((_, E) => {
          _.props || (_.props = {}), _.props.swiperRef = c, _.props.swiperSlideIndex = E
        }), x)
      }
      return () => {
        const {
          slides: x,
          slots: _
        } = ei(n, m, S);
        return Ie(s, {
          ref: f,
          class: ul(l.value)
        }, [_["container-start"], Ie(r, {
          class: wu(y.wrapperClass)
        }, [_["wrapper-start"], $(x), _["wrapper-end"]]), ol(e) && [Ie("div", {
          ref: C,
          class: "swiper-button-prev"
        }), Ie("div", {
          ref: w,
          class: "swiper-button-next"
        })], fl(e) && Ie("div", {
          ref: g,
          class: "swiper-scrollbar"
        }), al(e) && Ie("div", {
          ref: h,
          class: "swiper-pagination"
        }), _["container-end"]])
      }
    }
  },
  ic = {
    name: "SwiperSlide",
    props: {
      tag: {
        type: String,
        default: "div"
      },
      swiperRef: {
        type: Object,
        required: !1
      },
      swiperSlideIndex: {
        type: Number,
        default: void 0,
        required: !1
      },
      zoom: {
        type: Boolean,
        default: void 0,
        required: !1
      },
      lazy: {
        type: Boolean,
        default: !1,
        required: !1
      },
      virtualIndex: {
        type: [String, Number],
        default: void 0
      }
    },
    setup(e, t) {
      let {
        slots: n
      } = t, i = !1;
      const {
        swiperRef: s
      } = e, r = we(null), l = we("swiper-slide"), a = we(!1);

      function o(c, d, m) {
        d === r.value && (l.value = m)
      }
      en(() => {
        !s || !s.value || (s.value.on("_slideClass", o), i = !0)
      }), Mr(() => {
        i || !s || !s.value || (s.value.on("_slideClass", o), i = !0)
      }), Fn(() => {
        !r.value || !s || !s.value || (typeof e.swiperSlideIndex < "u" && (r.value.swiperSlideIndex = e.swiperSlideIndex), s.value.destroyed && l.value !== "swiper-slide" && (l.value = "swiper-slide"))
      }), tn(() => {
        !s || !s.value || s.value.off("_slideClass", o)
      });
      const u = Xr(() => ({
        isActive: l.value.indexOf("swiper-slide-active") >= 0,
        isVisible: l.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: l.value.indexOf("swiper-slide-prev") >= 0,
        isNext: l.value.indexOf("swiper-slide-next") >= 0
      }));
      ki("swiperSlide", u);
      const f = () => {
        a.value = !0
      };
      return () => Ie(e.tag, {
        class: ul(`${l.value}`),
        ref: r,
        "data-swiper-slide-index": typeof e.virtualIndex > "u" && s && s.value && s.value.params.loop ? e.swiperSlideIndex : e.virtualIndex,
        onLoadCapture: f
      }, e.zoom ? Ie("div", {
        class: "swiper-zoom-container",
        "data-swiper-zoom": typeof e.zoom == "number" ? e.zoom : void 0
      }, [n.default && n.default(u.value), e.lazy && !a.value && Ie("div", {
        class: "swiper-lazy-preloader"
      })]) : [n.default && n.default(u.value), e.lazy && !a.value && Ie("div", {
        class: "swiper-lazy-preloader"
      })])
    }
  };
export {
  ju as $, _u as A, Iu as B, en as C, $u as D, ur as E, bt as F, Z as G, Ou as H, Et as I, Se as J, zu as K, de as L, Gi as M, Wu as N, Jr as O, la as P, mo as Q, Gr as R, Fu as S, Ct as T, qr as U, Ur as V, Eu as W, Lu as X, Bu as Y, Ei as Z, Uu as _, we as a, Mr as a0, qu as a1, Yu as a2, Ku as a3, ku as a4, $o as a5, Hu as a6, Zu as a7, Ju as a8, Xi as a9, Vu as aa, Du as ab, Xu as ac, xi as ad, ic as ae, nc as af, Qu as ag, tc as ah, ec as ai, zt as b, Bo as c, Lo as d, Cu as e, no as f, qi as g, Gu as h, hn as i, Ru as j, Xr as k, Ie as l, No as m, mr as n, tn as o, ki as p, Ir as q, Oi as r, Pu as s, Au as t, dr as u, va as v, Nu as w, ue as x, Mu as y, Ml as z
};