/* https://13322566869.com/_nuxt/entry.3d26c39b.js */
function nh(t, e) {
  const n = Object.create(null),
    r = t.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return e ? i => !!n[i.toLowerCase()] : i => !!n[i]
}
const et = {},
  $s = [],
  fr = () => {},
  zy = () => !1,
  Wy = /^on[^a-z]/,
  jl = t => Wy.test(t),
  rh = t => t.startsWith("onUpdate:"),
  mt = Object.assign,
  ih = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
  },
  jy = Object.prototype.hasOwnProperty,
  $e = (t, e) => jy.call(t, e),
  be = Array.isArray,
  Hs = t => Ul(t) === "[object Map]",
  $g = t => Ul(t) === "[object Set]",
  Uy = t => Ul(t) === "[object RegExp]",
  Te = t => typeof t == "function",
  ct = t => typeof t == "string",
  sh = t => typeof t == "symbol",
  Ge = t => t !== null && typeof t == "object",
  oh = t => Ge(t) && Te(t.then) && Te(t.catch),
  Hg = Object.prototype.toString,
  Ul = t => Hg.call(t),
  Vy = t => Ul(t).slice(8, -1),
  zg = t => Ul(t) === "[object Object]",
  lh = t => ct(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Vo = nh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  ku = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
  },
  Yy = /-(\w)/g,
  kr = ku(t => t.replace(Yy, (e, n) => n ? n.toUpperCase() : "")),
  Xy = /\B([A-Z])/g,
  ho = ku(t => t.replace(Xy, "-$1").toLowerCase()),
  Fu = ku(t => t.charAt(0).toUpperCase() + t.slice(1)),
  ec = ku(t => t ? `on${Fu(t)}` : ""),
  Dl = (t, e) => !Object.is(t, e),
  Yo = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e)
  },
  Xa = (t, e, n) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      value: n
    })
  },
  Ky = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
  },
  Wg = t => {
    const e = ct(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
  };
let _d;
const Hc = () => _d || (_d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function ah(t) {
  if (be(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = ct(r) ? Jy(r) : ah(r);
      if (i)
        for (const s in i) e[s] = i[s]
    }
    return e
  } else {
    if (ct(t)) return t;
    if (Ge(t)) return t
  }
}
const qy = /;(?![^(]*\))/g,
  Gy = /:([^]+)/,
  Qy = /\/\*[^]*?\*\//g;

function Jy(t) {
  const e = {};
  return t.replace(Qy, "").split(qy).forEach(n => {
    if (n) {
      const r = n.split(Gy);
      r.length > 1 && (e[r[0].trim()] = r[1].trim())
    }
  }), e
}

function uh(t) {
  let e = "";
  if (ct(t)) e = t;
  else if (be(t))
    for (let n = 0; n < t.length; n++) {
      const r = uh(t[n]);
      r && (e += r + " ")
    } else if (Ge(t))
      for (const n in t) t[n] && (e += n + " ");
  return e.trim()
}
const Zy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  eD = nh(Zy);

function jg(t) {
  return !!t || t === ""
}
const $i = t => ct(t) ? t : t == null ? "" : be(t) || Ge(t) && (t.toString === Hg || !Te(t.toString)) ? JSON.stringify(t, Ug, 2) : String(t),
  Ug = (t, e) => e && e.__v_isRef ? Ug(t, e.value) : Hs(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, i]) => (n[`${r} =>`] = i, n), {})
  } : $g(e) ? {
    [`Set(${e.size})`]: [...e.values()]
  } : Ge(e) && !be(e) && !zg(e) ? String(e) : e;
let sr;
class tD {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = sr, !e && sr && (this.index = (sr.scopes || (sr.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(e) {
    if (this._active) {
      const n = sr;
      try {
        return sr = this, e()
      } finally {
        sr = n
      }
    }
  }
  on() {
    sr = this
  }
  off() {
    sr = this.parent
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
      }
      this.parent = void 0, this._active = !1
    }
  }
}

function nD(t, e = sr) {
  e && e.active && e.effects.push(t)
}

function rD() {
  return sr
}
const ch = t => {
    const e = new Set(t);
    return e.w = 0, e.n = 0, e
  },
  Vg = t => (t.w & Ei) > 0,
  Yg = t => (t.n & Ei) > 0,
  iD = ({
    deps: t
  }) => {
    if (t.length)
      for (let e = 0; e < t.length; e++) t[e].w |= Ei
  },
  sD = t => {
    const {
      deps: e
    } = t;
    if (e.length) {
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        const i = e[r];
        Vg(i) && !Yg(i) ? i.delete(t) : e[n++] = i, i.w &= ~Ei, i.n &= ~Ei
      }
      e.length = n
    }
  },
  Ka = new WeakMap;
let Ro = 0,
  Ei = 1;
const zc = 30;
let ar;
const Qi = Symbol(""),
  Wc = Symbol("");
class fh {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, nD(this, r)
  }
  run() {
    if (!this.active) return this.fn();
    let e = ar,
      n = mi;
    for (; e;) {
      if (e === this) return;
      e = e.parent
    }
    try {
      return this.parent = ar, ar = this, mi = !0, Ei = 1 << ++Ro, Ro <= zc ? iD(this) : md(this), this.fn()
    } finally {
      Ro <= zc && sD(this), Ei = 1 << --Ro, ar = this.parent, mi = n, this.parent = void 0, this.deferStop && this.stop()
    }
  }
  stop() {
    ar === this ? this.deferStop = !0 : this.active && (md(this), this.onStop && this.onStop(), this.active = !1)
  }
}

function md(t) {
  const {
    deps: e
  } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0
  }
}
let mi = !0;
const Xg = [];

function po() {
  Xg.push(mi), mi = !1
}

function go() {
  const t = Xg.pop();
  mi = t === void 0 ? !0 : t
}

function Dn(t, e, n) {
  if (mi && ar) {
    let r = Ka.get(t);
    r || Ka.set(t, r = new Map);
    let i = r.get(n);
    i || r.set(n, i = ch()), Kg(i)
  }
}

function Kg(t, e) {
  let n = !1;
  Ro <= zc ? Yg(t) || (t.n |= Ei, n = !Vg(t)) : n = !t.has(ar), n && (t.add(ar), ar.deps.push(t))
}

function Yr(t, e, n, r, i, s) {
  const o = Ka.get(t);
  if (!o) return;
  let l = [];
  if (e === "clear") l = [...o.values()];
  else if (n === "length" && be(t)) {
    const a = Number(r);
    o.forEach((u, f) => {
      (f === "length" || f >= a) && l.push(u)
    })
  } else switch (n !== void 0 && l.push(o.get(n)), e) {
    case "add":
      be(t) ? lh(n) && l.push(o.get("length")) : (l.push(o.get(Qi)), Hs(t) && l.push(o.get(Wc)));
      break;
    case "delete":
      be(t) || (l.push(o.get(Qi)), Hs(t) && l.push(o.get(Wc)));
      break;
    case "set":
      Hs(t) && l.push(o.get(Qi));
      break
  }
  if (l.length === 1) l[0] && jc(l[0]);
  else {
    const a = [];
    for (const u of l) u && a.push(...u);
    jc(ch(a))
  }
}

function jc(t, e) {
  const n = be(t) ? t : [...t];
  for (const r of n) r.computed && yd(r);
  for (const r of n) r.computed || yd(r)
}

function yd(t, e) {
  (t !== ar || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
}

function oD(t, e) {
  var n;
  return (n = Ka.get(t)) == null ? void 0 : n.get(e)
}
const lD = nh("__proto__,__v_isRef,__isVue"),
  qg = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(sh)),
  aD = hh(),
  uD = hh(!1, !0),
  cD = hh(!0),
  Dd = fD();

function fD() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
    t[e] = function(...n) {
      const r = He(this);
      for (let s = 0, o = this.length; s < o; s++) Dn(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(He)) : i
    }
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
    t[e] = function(...n) {
      po();
      const r = He(this)[e].apply(this, n);
      return go(), r
    }
  }), t
}

function hD(t) {
  const e = He(this);
  return Dn(e, "has", t), e.hasOwnProperty(t)
}

function hh(t = !1, e = !1) {
  return function(r, i, s) {
    if (i === "__v_isReactive") return !t;
    if (i === "__v_isReadonly") return t;
    if (i === "__v_isShallow") return e;
    if (i === "__v_raw" && s === (t ? e ? PD : e_ : e ? Zg : Jg).get(r)) return r;
    const o = be(r);
    if (!t) {
      if (o && $e(Dd, i)) return Reflect.get(Dd, i, s);
      if (i === "hasOwnProperty") return hD
    }
    const l = Reflect.get(r, i, s);
    return (sh(i) ? qg.has(i) : lD(i)) || (t || Dn(r, "get", i), e) ? l : Et(l) ? o && lh(i) ? l : l.value : Ge(l) ? t ? t_(l) : Xr(l) : l
  }
}
const dD = Gg(),
  pD = Gg(!0);

function Gg(t = !1) {
  return function(n, r, i, s) {
    let o = n[r];
    if (fs(o) && Et(o) && !Et(i)) return !1;
    if (!t && (!qa(i) && !fs(i) && (o = He(o), i = He(i)), !be(n) && Et(o) && !Et(i))) return o.value = i, !0;
    const l = be(n) && lh(r) ? Number(r) < n.length : $e(n, r),
      a = Reflect.set(n, r, i, s);
    return n === He(s) && (l ? Dl(i, o) && Yr(n, "set", r, i) : Yr(n, "add", r, i)), a
  }
}

function gD(t, e) {
  const n = $e(t, e);
  t[e];
  const r = Reflect.deleteProperty(t, e);
  return r && n && Yr(t, "delete", e, void 0), r
}

function _D(t, e) {
  const n = Reflect.has(t, e);
  return (!sh(e) || !qg.has(e)) && Dn(t, "has", e), n
}

function mD(t) {
  return Dn(t, "iterate", be(t) ? "length" : Qi), Reflect.ownKeys(t)
}
const Qg = {
    get: aD,
    set: dD,
    deleteProperty: gD,
    has: _D,
    ownKeys: mD
  },
  yD = {
    get: cD,
    set(t, e) {
      return !0
    },
    deleteProperty(t, e) {
      return !0
    }
  },
  DD = mt({}, Qg, {
    get: uD,
    set: pD
  }),
  dh = t => t,
  Au = t => Reflect.getPrototypeOf(t);

function ra(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = He(t),
    s = He(e);
  n || (e !== s && Dn(i, "get", e), Dn(i, "get", s));
  const {
    has: o
  } = Au(i), l = r ? dh : n ? _h : vl;
  if (o.call(i, e)) return l(t.get(e));
  if (o.call(i, s)) return l(t.get(s));
  t !== i && t.get(e)
}

function ia(t, e = !1) {
  const n = this.__v_raw,
    r = He(n),
    i = He(t);
  return e || (t !== i && Dn(r, "has", t), Dn(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i)
}

function sa(t, e = !1) {
  return t = t.__v_raw, !e && Dn(He(t), "iterate", Qi), Reflect.get(t, "size", t)
}

function vd(t) {
  t = He(t);
  const e = He(this);
  return Au(e).has.call(e, t) || (e.add(t), Yr(e, "add", t, t)), this
}

function bd(t, e) {
  e = He(e);
  const n = He(this),
    {
      has: r,
      get: i
    } = Au(n);
  let s = r.call(n, t);
  s || (t = He(t), s = r.call(n, t));
  const o = i.call(n, t);
  return n.set(t, e), s ? Dl(e, o) && Yr(n, "set", t, e) : Yr(n, "add", t, e), this
}

function xd(t) {
  const e = He(this),
    {
      has: n,
      get: r
    } = Au(e);
  let i = n.call(e, t);
  i || (t = He(t), i = n.call(e, t)), r && r.call(e, t);
  const s = e.delete(t);
  return i && Yr(e, "delete", t, void 0), s
}

function wd() {
  const t = He(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Yr(t, "clear", void 0, void 0), n
}

function oa(t, e) {
  return function(r, i) {
    const s = this,
      o = s.__v_raw,
      l = He(o),
      a = e ? dh : t ? _h : vl;
    return !t && Dn(l, "iterate", Qi), o.forEach((u, f) => r.call(i, a(u), a(f), s))
  }
}

function la(t, e, n) {
  return function(...r) {
    const i = this.__v_raw,
      s = He(i),
      o = Hs(s),
      l = t === "entries" || t === Symbol.iterator && o,
      a = t === "keys" && o,
      u = i[t](...r),
      f = n ? dh : e ? _h : vl;
    return !e && Dn(s, "iterate", a ? Wc : Qi), {
      next() {
        const {
          value: h,
          done: d
        } = u.next();
        return d ? {
          value: h,
          done: d
        } : {
          value: l ? [f(h[0]), f(h[1])] : f(h),
          done: d
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function Zr(t) {
  return function(...e) {
    return t === "delete" ? !1 : this
  }
}

function vD() {
  const t = {
      get(s) {
        return ra(this, s)
      },
      get size() {
        return sa(this)
      },
      has: ia,
      add: vd,
      set: bd,
      delete: xd,
      clear: wd,
      forEach: oa(!1, !1)
    },
    e = {
      get(s) {
        return ra(this, s, !1, !0)
      },
      get size() {
        return sa(this)
      },
      has: ia,
      add: vd,
      set: bd,
      delete: xd,
      clear: wd,
      forEach: oa(!1, !0)
    },
    n = {
      get(s) {
        return ra(this, s, !0)
      },
      get size() {
        return sa(this, !0)
      },
      has(s) {
        return ia.call(this, s, !0)
      },
      add: Zr("add"),
      set: Zr("set"),
      delete: Zr("delete"),
      clear: Zr("clear"),
      forEach: oa(!0, !1)
    },
    r = {
      get(s) {
        return ra(this, s, !0, !0)
      },
      get size() {
        return sa(this, !0)
      },
      has(s) {
        return ia.call(this, s, !0)
      },
      add: Zr("add"),
      set: Zr("set"),
      delete: Zr("delete"),
      clear: Zr("clear"),
      forEach: oa(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
    t[s] = la(s, !1, !1), n[s] = la(s, !0, !1), e[s] = la(s, !1, !0), r[s] = la(s, !0, !0)
  }), [t, n, e, r]
}
const [bD, xD, wD, CD] = vD();

function ph(t, e) {
  const n = e ? t ? CD : wD : t ? xD : bD;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get($e(n, i) && i in r ? n : r, i, s)
}
const ED = {
    get: ph(!1, !1)
  },
  TD = {
    get: ph(!1, !0)
  },
  SD = {
    get: ph(!0, !1)
  },
  Jg = new WeakMap,
  Zg = new WeakMap,
  e_ = new WeakMap,
  PD = new WeakMap;

function kD(t) {
  switch (t) {
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

function FD(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : kD(Vy(t))
}

function Xr(t) {
  return fs(t) ? t : gh(t, !1, Qg, ED, Jg)
}

function Vl(t) {
  return gh(t, !1, DD, TD, Zg)
}

function t_(t) {
  return gh(t, !0, yD, SD, e_)
}

function gh(t, e, n, r, i) {
  if (!Ge(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
  const s = i.get(t);
  if (s) return s;
  const o = FD(t);
  if (o === 0) return t;
  const l = new Proxy(t, o === 2 ? r : n);
  return i.set(t, l), l
}

function zs(t) {
  return fs(t) ? zs(t.__v_raw) : !!(t && t.__v_isReactive)
}

function fs(t) {
  return !!(t && t.__v_isReadonly)
}

function qa(t) {
  return !!(t && t.__v_isShallow)
}

function n_(t) {
  return zs(t) || fs(t)
}

function He(t) {
  const e = t && t.__v_raw;
  return e ? He(e) : t
}

function r_(t) {
  return Xa(t, "__v_skip", !0), t
}
const vl = t => Ge(t) ? Xr(t) : t,
  _h = t => Ge(t) ? t_(t) : t;

function i_(t) {
  mi && ar && (t = He(t), Kg(t.dep || (t.dep = ch())))
}

function s_(t, e) {
  t = He(t);
  const n = t.dep;
  n && jc(n)
}

function Et(t) {
  return !!(t && t.__v_isRef === !0)
}

function rn(t) {
  return o_(t, !1)
}

function bl(t) {
  return o_(t, !0)
}

function o_(t, e) {
  return Et(t) ? t : new AD(t, e)
}
class AD {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : He(e), this._value = n ? e : vl(e)
  }
  get value() {
    return i_(this), this._value
  }
  set value(e) {
    const n = this.__v_isShallow || qa(e) || fs(e);
    e = n ? e : He(e), Dl(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : vl(e), s_(this))
  }
}

function Be(t) {
  return Et(t) ? t.value : t
}
const RD = {
  get: (t, e, n) => Be(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return Et(i) && !Et(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r)
  }
};

function l_(t) {
  return zs(t) ? t : new Proxy(t, RD)
}

function fP(t) {
  const e = be(t) ? new Array(t.length) : {};
  for (const n in t) e[n] = a_(t, n);
  return e
}
class MD {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e
  }
  set value(e) {
    this._object[this._key] = e
  }
  get dep() {
    return oD(He(this._object), this._key)
  }
}
class OD {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0
  }
  get value() {
    return this._getter()
  }
}

function Ru(t, e, n) {
  return Et(t) ? t : Te(t) ? new OD(t) : Ge(t) && arguments.length > 1 ? a_(t, e, n) : rn(t)
}

function a_(t, e, n) {
  const r = t[e];
  return Et(r) ? r : new MD(t, e, n)
}
class LD {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new fh(e, () => {
      this._dirty || (this._dirty = !0, s_(this))
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r
  }
  get value() {
    const e = He(this);
    return i_(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value
  }
  set value(e) {
    this._setter(e)
  }
}

function ND(t, e, n = !1) {
  let r, i;
  const s = Te(t);
  return s ? (r = t, i = fr) : (r = t.get, i = t.set), new LD(r, i, s || !i, n)
}

function yi(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t()
  } catch (s) {
    Yl(s, e, n)
  }
  return i
}

function Zn(t, e, n, r) {
  if (Te(t)) {
    const s = yi(t, e, n, r);
    return s && oh(s) && s.catch(o => {
      Yl(o, e, n)
    }), s
  }
  const i = [];
  for (let s = 0; s < t.length; s++) i.push(Zn(t[s], e, n, r));
  return i
}

function Yl(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy,
      l = n;
    for (; s;) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](t, o, l) === !1) return
      }
      s = s.parent
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      yi(a, null, 10, [t, o, l]);
      return
    }
  }
  BD(t, n, i, r)
}

function BD(t, e, n, r = !0) {
  console.error(t)
}
let xl = !1,
  Uc = !1;
const zt = [];
let wr = 0;
const Ws = [];
let Mr = null,
  ji = 0;
const u_ = Promise.resolve();
let mh = null;

function ms(t) {
  const e = mh || u_;
  return t ? e.then(this ? t.bind(this) : t) : e
}

function ID(t) {
  let e = wr + 1,
    n = zt.length;
  for (; e < n;) {
    const r = e + n >>> 1;
    wl(zt[r]) < t ? e = r + 1 : n = r
  }
  return e
}

function yh(t) {
  (!zt.length || !zt.includes(t, xl && t.allowRecurse ? wr + 1 : wr)) && (t.id == null ? zt.push(t) : zt.splice(ID(t.id), 0, t), c_())
}

function c_() {
  !xl && !Uc && (Uc = !0, mh = u_.then(h_))
}

function $D(t) {
  const e = zt.indexOf(t);
  e > wr && zt.splice(e, 1)
}

function f_(t) {
  be(t) ? Ws.push(...t) : (!Mr || !Mr.includes(t, t.allowRecurse ? ji + 1 : ji)) && Ws.push(t), c_()
}

function Cd(t, e = xl ? wr + 1 : 0) {
  for (; e < zt.length; e++) {
    const n = zt[e];
    n && n.pre && (zt.splice(e, 1), e--, n())
  }
}

function Ga(t) {
  if (Ws.length) {
    const e = [...new Set(Ws)];
    if (Ws.length = 0, Mr) {
      Mr.push(...e);
      return
    }
    for (Mr = e, Mr.sort((n, r) => wl(n) - wl(r)), ji = 0; ji < Mr.length; ji++) Mr[ji]();
    Mr = null, ji = 0
  }
}
const wl = t => t.id == null ? 1 / 0 : t.id,
  HD = (t, e) => {
    const n = wl(t) - wl(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1
    }
    return n
  };

function h_(t) {
  Uc = !1, xl = !0, zt.sort(HD);
  const e = fr;
  try {
    for (wr = 0; wr < zt.length; wr++) {
      const n = zt[wr];
      n && n.active !== !1 && yi(n, null, 14)
    }
  } finally {
    wr = 0, zt.length = 0, Ga(), xl = !1, mh = null, (zt.length || Ws.length) && h_()
  }
}

function zD(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || et;
  let i = n;
  const s = e.startsWith("update:"),
    o = s && e.slice(7);
  if (o && o in r) {
    const f = `${o==="modelValue"?"model":o}Modifiers`,
      {
        number: h,
        trim: d
      } = r[f] || et;
    d && (i = n.map(c => ct(c) ? c.trim() : c)), h && (i = n.map(Ky))
  }
  let l, a = r[l = ec(e)] || r[l = ec(kr(e))];
  !a && s && (a = r[l = ec(ho(e))]), a && Zn(a, t, 6, i);
  const u = r[l + "Once"];
  if (u) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[l]) return;
    t.emitted[l] = !0, Zn(u, t, 6, i)
  }
}

function d_(t, e, n = !1) {
  const r = e.emitsCache,
    i = r.get(t);
  if (i !== void 0) return i;
  const s = t.emits;
  let o = {},
    l = !1;
  if (!Te(t)) {
    const a = u => {
      const f = d_(u, e, !0);
      f && (l = !0, mt(o, f))
    };
    !n && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a)
  }
  return !s && !l ? (Ge(t) && r.set(t, null), null) : (be(s) ? s.forEach(a => o[a] = null) : mt(o, s), Ge(t) && r.set(t, o), o)
}

function Mu(t, e) {
  return !t || !jl(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), $e(t, e[0].toLowerCase() + e.slice(1)) || $e(t, ho(e)) || $e(t, e))
}
let Pt = null,
  Ou = null;

function Qa(t) {
  const e = Pt;
  return Pt = t, Ou = t && t.type.__scopeId || null, e
}

function Lu(t) {
  Ou = t
}

function Nu() {
  Ou = null
}

function $r(t, e = Pt, n) {
  if (!e || t._n) return t;
  const r = (...i) => {
    r._d && Bd(-1);
    const s = Qa(e);
    let o;
    try {
      o = t(...i)
    } finally {
      Qa(s), r._d && Bd(1)
    }
    return o
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function tc(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: s,
    propsOptions: [o],
    slots: l,
    attrs: a,
    emit: u,
    render: f,
    renderCache: h,
    data: d,
    setupState: c,
    ctx: p,
    inheritAttrs: g
  } = t;
  let D, m;
  const _ = Qa(t);
  try {
    if (n.shapeFlag & 4) {
      const y = i || r;
      D = Vn(f.call(y, y, h, s, c, d, p)), m = a
    } else {
      const y = e;
      D = Vn(y.length > 1 ? y(s, {
        attrs: a,
        slots: l,
        emit: u
      }) : y(s, null)), m = e.props ? a : jD(a)
    }
  } catch (y) {
    qo.length = 0, Yl(y, t, 1), D = Ve(on)
  }
  let v = D;
  if (m && g !== !1) {
    const y = Object.keys(m),
      {
        shapeFlag: b
      } = v;
    y.length && b & 7 && (o && y.some(rh) && (m = UD(m, o)), v = Kr(v, m))
  }
  return n.dirs && (v = Kr(v), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (v.transition = n.transition), D = v, Qa(_), D
}

function WD(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (no(r)) {
      if (r.type !== on || r.children === "v-if") {
        if (e) return;
        e = r
      }
    } else return
  }
  return e
}
const jD = t => {
    let e;
    for (const n in t)(n === "class" || n === "style" || jl(n)) && ((e || (e = {}))[n] = t[n]);
    return e
  },
  UD = (t, e) => {
    const n = {};
    for (const r in t)(!rh(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n
  };

function VD(t, e, n) {
  const {
    props: r,
    children: i,
    component: s
  } = t, {
    props: o,
    children: l,
    patchFlag: a
  } = e, u = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Ed(r, o, u) : !!o;
    if (a & 8) {
      const f = e.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const d = f[h];
        if (o[d] !== r[d] && !Mu(u, d)) return !0
      }
    }
  } else return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ed(r, o, u) : !0 : !!o;
  return !1
}

function Ed(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Mu(n, s)) return !0
  }
  return !1
}

function Dh({
  vnode: t,
  parent: e
}, n) {
  for (; e && e.subTree === t;)(t = e.vnode).el = n, e = e.parent
}
const p_ = t => t.__isSuspense,
  YD = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, r, i, s, o, l, a, u) {
      t == null ? XD(e, n, r, i, s, o, l, a, u) : KD(t, e, n, r, i, o, l, a, u)
    },
    hydrate: qD,
    create: bh,
    normalize: GD
  },
  vh = YD;

function Cl(t, e) {
  const n = t.props && t.props[e];
  Te(n) && n()
}

function XD(t, e, n, r, i, s, o, l, a) {
  const {
    p: u,
    o: {
      createElement: f
    }
  } = a, h = f("div"), d = t.suspense = bh(t, i, r, e, h, n, s, o, l, a);
  u(null, d.pendingBranch = t.ssContent, h, null, r, d, s, o), d.deps > 0 ? (Cl(t, "onPending"), Cl(t, "onFallback"), u(null, t.ssFallback, e, n, r, null, s, o), js(d, t.ssFallback)) : d.resolve(!1, !0)
}

function KD(t, e, n, r, i, s, o, l, {
  p: a,
  um: u,
  o: {
    createElement: f
  }
}) {
  const h = e.suspense = t.suspense;
  h.vnode = e, e.el = t.el;
  const d = e.ssContent,
    c = e.ssFallback,
    {
      activeBranch: p,
      pendingBranch: g,
      isInFallback: D,
      isHydrating: m
    } = h;
  if (g) h.pendingBranch = d, ur(d, g) ? (a(g, d, h.hiddenContainer, null, i, h, s, o, l), h.deps <= 0 ? h.resolve() : D && (a(p, c, n, r, i, null, s, o, l), js(h, c))) : (h.pendingId++, m ? (h.isHydrating = !1, h.activeBranch = g) : u(g, i, h), h.deps = 0, h.effects.length = 0, h.hiddenContainer = f("div"), D ? (a(null, d, h.hiddenContainer, null, i, h, s, o, l), h.deps <= 0 ? h.resolve() : (a(p, c, n, r, i, null, s, o, l), js(h, c))) : p && ur(d, p) ? (a(p, d, n, r, i, h, s, o, l), h.resolve(!0)) : (a(null, d, h.hiddenContainer, null, i, h, s, o, l), h.deps <= 0 && h.resolve()));
  else if (p && ur(d, p)) a(p, d, n, r, i, h, s, o, l), js(h, d);
  else if (Cl(e, "onPending"), h.pendingBranch = d, h.pendingId++, a(null, d, h.hiddenContainer, null, i, h, s, o, l), h.deps <= 0) h.resolve();
  else {
    const {
      timeout: _,
      pendingId: v
    } = h;
    _ > 0 ? setTimeout(() => {
      h.pendingId === v && h.fallback(c)
    }, _) : _ === 0 && h.fallback(c)
  }
}

function bh(t, e, n, r, i, s, o, l, a, u, f = !1) {
  const {
    p: h,
    m: d,
    um: c,
    n: p,
    o: {
      parentNode: g,
      remove: D
    }
  } = u;
  let m;
  const _ = QD(t);
  _ && e != null && e.pendingBranch && (m = e.pendingId, e.deps++);
  const v = t.props ? Wg(t.props.timeout) : void 0,
    y = {
      vnode: t,
      parent: e,
      parentComponent: n,
      isSVG: o,
      container: r,
      hiddenContainer: i,
      anchor: s,
      deps: 0,
      pendingId: 0,
      timeout: typeof v == "number" ? v : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: f,
      isUnmounted: !1,
      effects: [],
      resolve(b = !1, S = !1) {
        const {
          vnode: E,
          activeBranch: C,
          pendingBranch: A,
          pendingId: M,
          effects: B,
          parentComponent: L,
          container: $
        } = y;
        if (y.isHydrating) y.isHydrating = !1;
        else if (!b) {
          const j = C && A.transition && A.transition.mode === "out-in";
          j && (C.transition.afterLeave = () => {
            M === y.pendingId && d(A, $, U, 0)
          });
          let {
            anchor: U
          } = y;
          C && (U = p(C), c(C, L, y, !0)), j || d(A, $, U, 0)
        }
        js(y, A), y.pendingBranch = null, y.isInFallback = !1;
        let z = y.parent,
          re = !1;
        for (; z;) {
          if (z.pendingBranch) {
            z.effects.push(...B), re = !0;
            break
          }
          z = z.parent
        }
        re || f_(B), y.effects = [], _ && e && e.pendingBranch && m === e.pendingId && (e.deps--, e.deps === 0 && !S && e.resolve()), Cl(E, "onResolve")
      },
      fallback(b) {
        if (!y.pendingBranch) return;
        const {
          vnode: S,
          activeBranch: E,
          parentComponent: C,
          container: A,
          isSVG: M
        } = y;
        Cl(S, "onFallback");
        const B = p(E),
          L = () => {
            y.isInFallback && (h(null, b, A, B, C, null, M, l, a), js(y, b))
          },
          $ = b.transition && b.transition.mode === "out-in";
        $ && (E.transition.afterLeave = L), y.isInFallback = !0, c(E, C, null, !0), $ || L()
      },
      move(b, S, E) {
        y.activeBranch && d(y.activeBranch, b, S, E), y.container = b
      },
      next() {
        return y.activeBranch && p(y.activeBranch)
      },
      registerDep(b, S) {
        const E = !!y.pendingBranch;
        E && y.deps++;
        const C = b.vnode.el;
        b.asyncDep.catch(A => {
          Yl(A, b, 0)
        }).then(A => {
          if (b.isUnmounted || y.isUnmounted || y.pendingId !== b.suspenseId) return;
          b.asyncResolved = !0;
          const {
            vnode: M
          } = b;
          Gc(b, A, !1), C && (M.el = C);
          const B = !C && b.subTree.el;
          S(b, M, g(C || b.subTree.el), C ? null : p(b.subTree), y, o, a), B && D(B), Dh(b, M.el), E && --y.deps === 0 && y.resolve()
        })
      },
      unmount(b, S) {
        y.isUnmounted = !0, y.activeBranch && c(y.activeBranch, n, b, S), y.pendingBranch && c(y.pendingBranch, n, b, S)
      }
    };
  return y
}

function qD(t, e, n, r, i, s, o, l, a) {
  const u = e.suspense = bh(e, r, n, t.parentNode, document.createElement("div"), null, i, s, o, l, !0),
    f = a(t, u.pendingBranch = e.ssContent, n, u, s, o);
  return u.deps === 0 && u.resolve(!1, !0), f
}

function GD(t) {
  const {
    shapeFlag: e,
    children: n
  } = t, r = e & 32;
  t.ssContent = Td(r ? n.default : n), t.ssFallback = r ? Td(n.fallback) : Ve(on)
}

function Td(t) {
  let e;
  if (Te(t)) {
    const n = to && t._c;
    n && (t._d = !1, Jt()), t = t(), n && (t._d = !0, e = Kn, $_())
  }
  return be(t) && (t = WD(t)), t = Vn(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n => n !== t)), t
}

function g_(t, e) {
  e && e.pendingBranch ? be(t) ? e.effects.push(...t) : e.effects.push(t) : f_(t)
}

function js(t, e) {
  t.activeBranch = e;
  const {
    vnode: n,
    parentComponent: r
  } = t, i = n.el = e.el;
  r && r.subTree === n && (r.vnode.el = i, Dh(r, i))
}

function QD(t) {
  var e;
  return ((e = t.props) == null ? void 0 : e.suspensible) != null && t.props.suspensible !== !1
}

function JD(t, e) {
  return xh(t, null, e)
}
const aa = {};

function Ji(t, e, n) {
  return xh(t, e, n)
}

function xh(t, e, {
  immediate: n,
  deep: r,
  flush: i,
  onTrack: s,
  onTrigger: o
} = et) {
  var l;
  const a = rD() === ((l = Ct) == null ? void 0 : l.scope) ? Ct : null;
  let u, f = !1,
    h = !1;
  if (Et(t) ? (u = () => t.value, f = qa(t)) : zs(t) ? (u = () => t, r = !0) : be(t) ? (h = !0, f = t.some(y => zs(y) || qa(y)), u = () => t.map(y => {
      if (Et(y)) return y.value;
      if (zs(y)) return Xi(y);
      if (Te(y)) return yi(y, a, 2)
    })) : Te(t) ? e ? u = () => yi(t, a, 2) : u = () => {
      if (!(a && a.isUnmounted)) return d && d(), Zn(t, a, 3, [c])
    } : u = fr, e && r) {
    const y = u;
    u = () => Xi(y())
  }
  let d, c = y => {
      d = _.onStop = () => {
        yi(y, a, 4)
      }
    },
    p;
  if (Tl)
    if (c = fr, e ? n && Zn(e, a, 3, [u(), h ? [] : void 0, c]) : u(), i === "sync") {
      const y = Uv();
      p = y.__watcherHandles || (y.__watcherHandles = [])
    } else return fr;
  let g = h ? new Array(t.length).fill(aa) : aa;
  const D = () => {
    if (_.active)
      if (e) {
        const y = _.run();
        (r || f || (h ? y.some((b, S) => Dl(b, g[S])) : Dl(y, g))) && (d && d(), Zn(e, a, 3, [y, g === aa ? void 0 : h && g[0] === aa ? [] : g, c]), g = y)
      } else _.run()
  };
  D.allowRecurse = !!e;
  let m;
  i === "sync" ? m = D : i === "post" ? m = () => Ot(D, a && a.suspense) : (D.pre = !0, a && (D.id = a.uid), m = () => yh(D));
  const _ = new fh(u, m);
  e ? n ? D() : g = _.run() : i === "post" ? Ot(_.run.bind(_), a && a.suspense) : _.run();
  const v = () => {
    _.stop(), a && a.scope && ih(a.scope.effects, _)
  };
  return p && p.push(v), v
}

function ZD(t, e, n) {
  const r = this.proxy,
    i = ct(t) ? t.includes(".") ? __(r, t) : () => r[t] : t.bind(r, r);
  let s;
  Te(e) ? s = e : (s = e.handler, n = e);
  const o = Ct;
  Ti(this);
  const l = xh(i, s.bind(r), n);
  return o ? Ti(o) : Di(), l
}

function __(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r
  }
}

function Xi(t, e) {
  if (!Ge(t) || t.__v_skip || (e = e || new Set, e.has(t))) return t;
  if (e.add(t), Et(t)) Xi(t.value, e);
  else if (be(t))
    for (let n = 0; n < t.length; n++) Xi(t[n], e);
  else if ($g(t) || Hs(t)) t.forEach(n => {
    Xi(n, e)
  });
  else if (zg(t))
    for (const n in t) Xi(t[n], e);
  return t
}

function hP(t, e) {
  const n = Pt;
  if (n === null) return t;
  const r = Hu(n) || n.proxy,
    i = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [o, l, a, u = et] = e[s];
    o && (Te(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Xi(l), i.push({
      dir: o,
      instance: r,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: u
    }))
  }
  return t
}

function vr(t, e, n, r) {
  const i = t.dirs,
    s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[r];
    a && (po(), Zn(a, n, 8, [t.el, l, t, e]), go())
  }
}

function ev() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return _o(() => {
    t.isMounted = !0
  }), mo(() => {
    t.isUnmounting = !0
  }), t
}
const Hn = [Function, Array],
  m_ = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Hn,
    onEnter: Hn,
    onAfterEnter: Hn,
    onEnterCancelled: Hn,
    onBeforeLeave: Hn,
    onLeave: Hn,
    onAfterLeave: Hn,
    onLeaveCancelled: Hn,
    onBeforeAppear: Hn,
    onAppear: Hn,
    onAfterAppear: Hn,
    onAppearCancelled: Hn
  },
  tv = {
    name: "BaseTransition",
    props: m_,
    setup(t, {
      slots: e
    }) {
      const n = ys(),
        r = ev();
      let i;
      return () => {
        const s = e.default && D_(e.default(), !0);
        if (!s || !s.length) return;
        let o = s[0];
        if (s.length > 1) {
          for (const g of s)
            if (g.type !== on) {
              o = g;
              break
            }
        }
        const l = He(t),
          {
            mode: a
          } = l;
        if (r.isLeaving) return nc(o);
        const u = Sd(o);
        if (!u) return nc(o);
        const f = Vc(u, l, r, n);
        Ja(u, f);
        const h = n.subTree,
          d = h && Sd(h);
        let c = !1;
        const {
          getTransitionKey: p
        } = u.type;
        if (p) {
          const g = p();
          i === void 0 ? i = g : g !== i && (i = g, c = !0)
        }
        if (d && d.type !== on && (!ur(u, d) || c)) {
          const g = Vc(d, l, r, n);
          if (Ja(d, g), a === "out-in") return r.isLeaving = !0, g.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update()
          }, nc(o);
          a === "in-out" && u.type !== on && (g.delayLeave = (D, m, _) => {
            const v = y_(r, d);
            v[String(d.key)] = d, D._leaveCb = () => {
              m(), D._leaveCb = void 0, delete f.delayedLeave
            }, f.delayedLeave = _
          })
        }
        return o
      }
    }
  },
  nv = tv;

function y_(t, e) {
  const {
    leavingVNodes: n
  } = t;
  let r = n.get(e.type);
  return r || (r = Object.create(null), n.set(e.type, r)), r
}

function Vc(t, e, n, r) {
  const {
    appear: i,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: a,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: d,
    onAfterLeave: c,
    onLeaveCancelled: p,
    onBeforeAppear: g,
    onAppear: D,
    onAfterAppear: m,
    onAppearCancelled: _
  } = e, v = String(t.key), y = y_(n, t), b = (C, A) => {
    C && Zn(C, r, 9, A)
  }, S = (C, A) => {
    const M = A[1];
    b(C, A), be(C) ? C.every(B => B.length <= 1) && M() : C.length <= 1 && M()
  }, E = {
    mode: s,
    persisted: o,
    beforeEnter(C) {
      let A = l;
      if (!n.isMounted)
        if (i) A = g || l;
        else return;
      C._leaveCb && C._leaveCb(!0);
      const M = y[v];
      M && ur(t, M) && M.el._leaveCb && M.el._leaveCb(), b(A, [C])
    },
    enter(C) {
      let A = a,
        M = u,
        B = f;
      if (!n.isMounted)
        if (i) A = D || a, M = m || u, B = _ || f;
        else return;
      let L = !1;
      const $ = C._enterCb = z => {
        L || (L = !0, z ? b(B, [C]) : b(M, [C]), E.delayedLeave && E.delayedLeave(), C._enterCb = void 0)
      };
      A ? S(A, [C, $]) : $()
    },
    leave(C, A) {
      const M = String(t.key);
      if (C._enterCb && C._enterCb(!0), n.isUnmounting) return A();
      b(h, [C]);
      let B = !1;
      const L = C._leaveCb = $ => {
        B || (B = !0, A(), $ ? b(p, [C]) : b(c, [C]), C._leaveCb = void 0, y[M] === t && delete y[M])
      };
      y[M] = t, d ? S(d, [C, L]) : L()
    },
    clone(C) {
      return Vc(C, e, n, r)
    }
  };
  return E
}

function nc(t) {
  if (Bu(t)) return t = Kr(t), t.children = null, t
}

function Sd(t) {
  return Bu(t) ? t.children ? t.children[0] : void 0 : t
}

function Ja(t, e) {
  t.shapeFlag & 6 && t.component ? Ja(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function D_(t, e = !1, n) {
  let r = [],
    i = 0;
  for (let s = 0; s < t.length; s++) {
    let o = t[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === dn ? (o.patchFlag & 128 && i++, r = r.concat(D_(o.children, e, l))) : (e || o.type !== on) && r.push(l != null ? Kr(o, {
      key: l
    }) : o)
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r
}

function nr(t, e) {
  return Te(t) ? (() => mt({
    name: t.name
  }, e, {
    setup: t
  }))() : t
}
const Zi = t => !!t.type.__asyncLoader,
  Bu = t => t.type.__isKeepAlive,
  rv = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number]
    },
    setup(t, {
      slots: e
    }) {
      const n = ys(),
        r = n.ctx;
      if (!r.renderer) return () => {
        const _ = e.default && e.default();
        return _ && _.length === 1 ? _[0] : _
      };
      const i = new Map,
        s = new Set;
      let o = null;
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: u,
            um: f,
            o: {
              createElement: h
            }
          }
        } = r,
        d = h("div");
      r.activate = (_, v, y, b, S) => {
        const E = _.component;
        u(_, v, y, 0, l), a(E.vnode, _, v, y, E, l, b, _.slotScopeIds, S), Ot(() => {
          E.isDeactivated = !1, E.a && Yo(E.a);
          const C = _.props && _.props.onVnodeMounted;
          C && fn(C, E.parent, _)
        }, l)
      }, r.deactivate = _ => {
        const v = _.component;
        u(_, d, null, 1, l), Ot(() => {
          v.da && Yo(v.da);
          const y = _.props && _.props.onVnodeUnmounted;
          y && fn(y, v.parent, _), v.isDeactivated = !0
        }, l)
      };

      function c(_) {
        rc(_), f(_, n, l, !0)
      }

      function p(_) {
        i.forEach((v, y) => {
          const b = Qc(v.type);
          b && (!_ || !_(b)) && g(y)
        })
      }

      function g(_) {
        const v = i.get(_);
        !o || !ur(v, o) ? c(v) : o && rc(o), i.delete(_), s.delete(_)
      }
      Ji(() => [t.include, t.exclude], ([_, v]) => {
        _ && p(y => Mo(_, y)), v && p(y => !Mo(v, y))
      }, {
        flush: "post",
        deep: !0
      });
      let D = null;
      const m = () => {
        D != null && i.set(D, ic(n.subTree))
      };
      return _o(m), C_(m), mo(() => {
        i.forEach(_ => {
          const {
            subTree: v,
            suspense: y
          } = n, b = ic(v);
          if (_.type === b.type && _.key === b.key) {
            rc(b);
            const S = b.component.da;
            S && Ot(S, y);
            return
          }
          c(_)
        })
      }), () => {
        if (D = null, !e.default) return null;
        const _ = e.default(),
          v = _[0];
        if (_.length > 1) return o = null, _;
        if (!no(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128)) return o = null, v;
        let y = ic(v);
        const b = y.type,
          S = Qc(Zi(y) ? y.type.__asyncResolved || {} : b),
          {
            include: E,
            exclude: C,
            max: A
          } = t;
        if (E && (!S || !Mo(E, S)) || C && S && Mo(C, S)) return o = y, v;
        const M = y.key == null ? b : y.key,
          B = i.get(M);
        return y.el && (y = Kr(y), v.shapeFlag & 128 && (v.ssContent = y)), D = M, B ? (y.el = B.el, y.component = B.component, y.transition && Ja(y, y.transition), y.shapeFlag |= 512, s.delete(M), s.add(M)) : (s.add(M), A && s.size > parseInt(A, 10) && g(s.values().next().value)), y.shapeFlag |= 256, o = y, p_(v.type) ? v : y
      }
    }
  },
  iv = rv;

function Mo(t, e) {
  return be(t) ? t.some(n => Mo(n, e)) : ct(t) ? t.split(",").includes(e) : Uy(t) ? t.test(e) : !1
}

function v_(t, e) {
  x_(t, "a", e)
}

function b_(t, e) {
  x_(t, "da", e)
}

function x_(t, e, n = Ct) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i;) {
      if (i.isDeactivated) return;
      i = i.parent
    }
    return t()
  });
  if (Iu(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent;) Bu(i.parent.vnode) && sv(r, e, n, i), i = i.parent
  }
}

function sv(t, e, n, r) {
  const i = Iu(e, t, r, !0);
  Za(() => {
    ih(r[e], i)
  }, n)
}

function rc(t) {
  t.shapeFlag &= -257, t.shapeFlag &= -513
}

function ic(t) {
  return t.shapeFlag & 128 ? t.ssContent : t
}

function Iu(t, e, n = Ct, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      s = e.__weh || (e.__weh = (...o) => {
        if (n.isUnmounted) return;
        po(), Ti(n);
        const l = Zn(e, n, t, o);
        return Di(), go(), l
      });
    return r ? i.unshift(s) : i.push(s), s
  }
}
const Qr = t => (e, n = Ct) => (!Tl || t === "sp") && Iu(t, (...r) => e(...r), n),
  w_ = Qr("bm"),
  _o = Qr("m"),
  ov = Qr("bu"),
  C_ = Qr("u"),
  mo = Qr("bum"),
  Za = Qr("um"),
  lv = Qr("sp"),
  av = Qr("rtg"),
  uv = Qr("rtc");

function E_(t, e = Ct) {
  Iu("ec", t, e)
}
const wh = "components";

function cv(t, e) {
  return S_(wh, t, !0, e) || t
}
const T_ = Symbol.for("v-ndc");

function fv(t) {
  return ct(t) ? S_(wh, t, !1) || t : t || T_
}

function S_(t, e, n = !0, r = !1) {
  const i = Pt || Ct;
  if (i) {
    const s = i.type;
    if (t === wh) {
      const l = Qc(s, !1);
      if (l && (l === e || l === kr(e) || l === Fu(kr(e)))) return s
    }
    const o = Pd(i[t] || s[t], e) || Pd(i.appContext[t], e);
    return !o && r ? s : o
  }
}

function Pd(t, e) {
  return t && (t[e] || t[kr(e)] || t[Fu(kr(e))])
}

function dP(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (be(t) || ct(t)) {
    i = new Array(t.length);
    for (let o = 0, l = t.length; o < l; o++) i[o] = e(t[o], o, void 0, s && s[o])
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let o = 0; o < t; o++) i[o] = e(o + 1, o, void 0, s && s[o])
  } else if (Ge(t))
    if (t[Symbol.iterator]) i = Array.from(t, (o, l) => e(o, l, void 0, s && s[l]));
    else {
      const o = Object.keys(t);
      i = new Array(o.length);
      for (let l = 0, a = o.length; l < a; l++) {
        const u = o[l];
        i[l] = e(t[u], u, l, s && s[l])
      }
    }
  else i = [];
  return n && (n[r] = i), i
}

function hv(t, e, n = {}, r, i) {
  if (Pt.isCE || Pt.parent && Zi(Pt.parent) && Pt.parent.isCE) return e !== "default" && (n.name = e), Ve("slot", n, r && r());
  let s = t[e];
  s && s._c && (s._d = !1), Jt();
  const o = s && P_(s(n)),
    l = Br(dn, {
      key: n.key || o && o.key || `_${e}`
    }, o || (r ? r() : []), o && t._ === 1 ? 64 : -2);
  return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l
}

function P_(t) {
  return t.some(e => no(e) ? !(e.type === on || e.type === dn && !P_(e.children)) : !0) ? t : null
}
const Yc = t => t ? U_(t) ? Hu(t) || t.proxy : Yc(t.parent) : null,
  Xo = mt(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => Yc(t.parent),
    $root: t => Yc(t.root),
    $emit: t => t.emit,
    $options: t => Ch(t),
    $forceUpdate: t => t.f || (t.f = () => yh(t.update)),
    $nextTick: t => t.n || (t.n = ms.bind(t.proxy)),
    $watch: t => ZD.bind(t)
  }),
  sc = (t, e) => t !== et && !t.__isScriptSetup && $e(t, e),
  dv = {
    get({
      _: t
    }, e) {
      const {
        ctx: n,
        setupState: r,
        data: i,
        props: s,
        accessCache: o,
        type: l,
        appContext: a
      } = t;
      let u;
      if (e[0] !== "$") {
        const c = o[e];
        if (c !== void 0) switch (c) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e]
        } else {
          if (sc(r, e)) return o[e] = 1, r[e];
          if (i !== et && $e(i, e)) return o[e] = 2, i[e];
          if ((u = t.propsOptions[0]) && $e(u, e)) return o[e] = 3, s[e];
          if (n !== et && $e(n, e)) return o[e] = 4, n[e];
          Xc && (o[e] = 0)
        }
      }
      const f = Xo[e];
      let h, d;
      if (f) return e === "$attrs" && Dn(t, "get", e), f(t);
      if ((h = l.__cssModules) && (h = h[e])) return h;
      if (n !== et && $e(n, e)) return o[e] = 4, n[e];
      if (d = a.config.globalProperties, $e(d, e)) return d[e]
    },
    set({
      _: t
    }, e, n) {
      const {
        data: r,
        setupState: i,
        ctx: s
      } = t;
      return sc(i, e) ? (i[e] = n, !0) : r !== et && $e(r, e) ? (r[e] = n, !0) : $e(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0)
    },
    has({
      _: {
        data: t,
        setupState: e,
        accessCache: n,
        ctx: r,
        appContext: i,
        propsOptions: s
      }
    }, o) {
      let l;
      return !!n[o] || t !== et && $e(t, o) || sc(e, o) || (l = s[0]) && $e(l, o) || $e(r, o) || $e(Xo, o) || $e(i.config.globalProperties, o)
    },
    defineProperty(t, e, n) {
      return n.get != null ? t._.accessCache[e] = 0 : $e(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
    }
  };

function kd(t) {
  return be(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
}

function pv(t) {
  const e = ys();
  let n = t();
  return Di(), oh(n) && (n = n.catch(r => {
    throw Ti(e), r
  })), [n, () => Ti(e)]
}
let Xc = !0;

function gv(t) {
  const e = Ch(t),
    n = t.proxy,
    r = t.ctx;
  Xc = !1, e.beforeCreate && Fd(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    created: f,
    beforeMount: h,
    mounted: d,
    beforeUpdate: c,
    updated: p,
    activated: g,
    deactivated: D,
    beforeDestroy: m,
    beforeUnmount: _,
    destroyed: v,
    unmounted: y,
    render: b,
    renderTracked: S,
    renderTriggered: E,
    errorCaptured: C,
    serverPrefetch: A,
    expose: M,
    inheritAttrs: B,
    components: L,
    directives: $,
    filters: z
  } = e;
  if (u && _v(u, r, null), o)
    for (const U in o) {
      const ee = o[U];
      Te(ee) && (r[U] = ee.bind(n))
    }
  if (i) {
    const U = i.call(n, n);
    Ge(U) && (t.data = Xr(U))
  }
  if (Xc = !0, s)
    for (const U in s) {
      const ee = s[U],
        W = Te(ee) ? ee.bind(n, n) : Te(ee.get) ? ee.get.bind(n, n) : fr,
        R = !Te(ee) && Te(ee.set) ? ee.set.bind(n) : fr,
        ie = Zt({
          get: W,
          set: R
        });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: ce => ie.value = ce
      })
    }
  if (l)
    for (const U in l) k_(l[U], r, n, U);
  if (a) {
    const U = Te(a) ? a.call(n) : a;
    Reflect.ownKeys(U).forEach(ee => {
      es(ee, U[ee])
    })
  }
  f && Fd(f, t, "c");

  function j(U, ee) {
    be(ee) ? ee.forEach(W => U(W.bind(n))) : ee && U(ee.bind(n))
  }
  if (j(w_, h), j(_o, d), j(ov, c), j(C_, p), j(v_, g), j(b_, D), j(E_, C), j(uv, S), j(av, E), j(mo, _), j(Za, y), j(lv, A), be(M))
    if (M.length) {
      const U = t.exposed || (t.exposed = {});
      M.forEach(ee => {
        Object.defineProperty(U, ee, {
          get: () => n[ee],
          set: W => n[ee] = W
        })
      })
    } else t.exposed || (t.exposed = {});
  b && t.render === fr && (t.render = b), B != null && (t.inheritAttrs = B), L && (t.components = L), $ && (t.directives = $)
}

function _v(t, e, n = fr) {
  be(t) && (t = Kc(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Ge(i) ? "default" in i ? s = sn(i.from || r, i.default, !0) : s = sn(i.from || r) : s = sn(i), Et(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: o => s.value = o
    }) : e[r] = s
  }
}

function Fd(t, e, n) {
  Zn(be(t) ? t.map(r => r.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function k_(t, e, n, r) {
  const i = r.includes(".") ? __(n, r) : () => n[r];
  if (ct(t)) {
    const s = e[t];
    Te(s) && Ji(i, s)
  } else if (Te(t)) Ji(i, t.bind(n));
  else if (Ge(t))
    if (be(t)) t.forEach(s => k_(s, e, n, r));
    else {
      const s = Te(t.handler) ? t.handler.bind(n) : e[t.handler];
      Te(s) && Ji(i, s, t)
    }
}

function Ch(t) {
  const e = t.type,
    {
      mixins: n,
      extends: r
    } = e,
    {
      mixins: i,
      optionsCache: s,
      config: {
        optionMergeStrategies: o
      }
    } = t.appContext,
    l = s.get(e);
  let a;
  return l ? a = l : !i.length && !n && !r ? a = e : (a = {}, i.length && i.forEach(u => eu(a, u, o, !0)), eu(a, e, o)), Ge(e) && s.set(e, a), a
}

function eu(t, e, n, r = !1) {
  const {
    mixins: i,
    extends: s
  } = e;
  s && eu(t, s, n, !0), i && i.forEach(o => eu(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const l = mv[o] || n && n[o];
      t[o] = l ? l(t[o], e[o]) : e[o]
    } return t
}
const mv = {
  data: Ad,
  props: Rd,
  emits: Rd,
  methods: Oo,
  computed: Oo,
  beforeCreate: Xt,
  created: Xt,
  beforeMount: Xt,
  mounted: Xt,
  beforeUpdate: Xt,
  updated: Xt,
  beforeDestroy: Xt,
  beforeUnmount: Xt,
  destroyed: Xt,
  unmounted: Xt,
  activated: Xt,
  deactivated: Xt,
  errorCaptured: Xt,
  serverPrefetch: Xt,
  components: Oo,
  directives: Oo,
  watch: Dv,
  provide: Ad,
  inject: yv
};

function Ad(t, e) {
  return e ? t ? function() {
    return mt(Te(t) ? t.call(this, this) : t, Te(e) ? e.call(this, this) : e)
  } : e : t
}

function yv(t, e) {
  return Oo(Kc(t), Kc(e))
}

function Kc(t) {
  if (be(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e
  }
  return t
}

function Xt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}

function Oo(t, e) {
  return t ? mt(Object.create(null), t, e) : e
}

function Rd(t, e) {
  return t ? be(t) && be(e) ? [...new Set([...t, ...e])] : mt(Object.create(null), kd(t), kd(e ?? {})) : e
}

function Dv(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = mt(Object.create(null), t);
  for (const r in e) n[r] = Xt(t[r], e[r]);
  return n
}

function F_() {
  return {
    app: null,
    config: {
      isNativeTag: zy,
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
let vv = 0;

function bv(t, e) {
  return function(r, i = null) {
    Te(r) || (r = mt({}, r)), i != null && !Ge(i) && (i = null);
    const s = F_(),
      o = new Set;
    let l = !1;
    const a = s.app = {
      _uid: vv++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Y_,
      get config() {
        return s.config
      },
      set config(u) {},
      use(u, ...f) {
        return o.has(u) || (u && Te(u.install) ? (o.add(u), u.install(a, ...f)) : Te(u) && (o.add(u), u(a, ...f))), a
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), a
      },
      component(u, f) {
        return f ? (s.components[u] = f, a) : s.components[u]
      },
      directive(u, f) {
        return f ? (s.directives[u] = f, a) : s.directives[u]
      },
      mount(u, f, h) {
        if (!l) {
          const d = Ve(r, i);
          return d.appContext = s, f && e ? e(d, u) : t(d, u, h), l = !0, a._container = u, u.__vue_app__ = a, Hu(d.component) || d.component.proxy
        }
      },
      unmount() {
        l && (t(null, a._container), delete a._container.__vue_app__)
      },
      provide(u, f) {
        return s.provides[u] = f, a
      },
      runWithContext(u) {
        El = a;
        try {
          return u()
        } finally {
          El = null
        }
      }
    };
    return a
  }
}
let El = null;

function es(t, e) {
  if (Ct) {
    let n = Ct.provides;
    const r = Ct.parent && Ct.parent.provides;
    r === n && (n = Ct.provides = Object.create(r)), n[t] = e
  }
}

function sn(t, e, n = !1) {
  const r = Ct || Pt;
  if (r || El) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : El._context.provides;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && Te(e) ? e.call(r && r.proxy) : e
  }
}

function A_() {
  return !!(Ct || Pt || El)
}

function xv(t, e, n, r = !1) {
  const i = {},
    s = {};
  Xa(s, $u, 1), t.propsDefaults = Object.create(null), R_(t, e, i, s);
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0);
  n ? t.props = r ? i : Vl(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s
}

function wv(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: {
      patchFlag: o
    }
  } = t, l = He(i), [a] = t.propsOptions;
  let u = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = t.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let d = f[h];
        if (Mu(t.emitsOptions, d)) continue;
        const c = e[d];
        if (a)
          if ($e(s, d)) c !== s[d] && (s[d] = c, u = !0);
          else {
            const p = kr(d);
            i[p] = qc(a, l, p, c, t, !1)
          }
        else c !== s[d] && (s[d] = c, u = !0)
      }
    }
  } else {
    R_(t, e, i, s) && (u = !0);
    let f;
    for (const h in l)(!e || !$e(e, h) && ((f = ho(h)) === h || !$e(e, f))) && (a ? n && (n[h] !== void 0 || n[f] !== void 0) && (i[h] = qc(a, l, h, void 0, t, !0)) : delete i[h]);
    if (s !== l)
      for (const h in s)(!e || !$e(e, h)) && (delete s[h], u = !0)
  }
  u && Yr(t, "set", "$attrs")
}

function R_(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1,
    l;
  if (e)
    for (let a in e) {
      if (Vo(a)) continue;
      const u = e[a];
      let f;
      i && $e(i, f = kr(a)) ? !s || !s.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Mu(t.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, o = !0)
    }
  if (s) {
    const a = He(n),
      u = l || et;
    for (let f = 0; f < s.length; f++) {
      const h = s[f];
      n[h] = qc(i, a, h, u[h], t, !$e(u, h))
    }
  }
  return o
}

function qc(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const l = $e(o, "default");
    if (l && r === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Te(a)) {
        const {
          propsDefaults: u
        } = i;
        n in u ? r = u[n] : (Ti(i), r = u[n] = a.call(null, e), Di())
      } else r = a
    }
    o[0] && (s && !l ? r = !1 : o[1] && (r === "" || r === ho(n)) && (r = !0))
  }
  return r
}

function M_(t, e, n = !1) {
  const r = e.propsCache,
    i = r.get(t);
  if (i) return i;
  const s = t.props,
    o = {},
    l = [];
  let a = !1;
  if (!Te(t)) {
    const f = h => {
      a = !0;
      const [d, c] = M_(h, e, !0);
      mt(o, d), c && l.push(...c)
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f)
  }
  if (!s && !a) return Ge(t) && r.set(t, $s), $s;
  if (be(s))
    for (let f = 0; f < s.length; f++) {
      const h = kr(s[f]);
      Md(h) && (o[h] = et)
    } else if (s)
      for (const f in s) {
        const h = kr(f);
        if (Md(h)) {
          const d = s[f],
            c = o[h] = be(d) || Te(d) ? {
              type: d
            } : mt({}, d);
          if (c) {
            const p = Nd(Boolean, c.type),
              g = Nd(String, c.type);
            c[0] = p > -1, c[1] = g < 0 || p < g, (p > -1 || $e(c, "default")) && l.push(h)
          }
        }
      }
  const u = [o, l];
  return Ge(t) && r.set(t, u), u
}

function Md(t) {
  return t[0] !== "$"
}

function Od(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : ""
}

function Ld(t, e) {
  return Od(t) === Od(e)
}

function Nd(t, e) {
  return be(e) ? e.findIndex(n => Ld(n, t)) : Te(e) && Ld(e, t) ? 0 : -1
}
const O_ = t => t[0] === "_" || t === "$stable",
  Eh = t => be(t) ? t.map(Vn) : [Vn(t)],
  Cv = (t, e, n) => {
    if (e._n) return e;
    const r = $r((...i) => Eh(e(...i)), n);
    return r._c = !1, r
  },
  L_ = (t, e, n) => {
    const r = t._ctx;
    for (const i in t) {
      if (O_(i)) continue;
      const s = t[i];
      if (Te(s)) e[i] = Cv(i, s, r);
      else if (s != null) {
        const o = Eh(s);
        e[i] = () => o
      }
    }
  },
  N_ = (t, e) => {
    const n = Eh(e);
    t.slots.default = () => n
  },
  Ev = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? (t.slots = He(e), Xa(e, "_", n)) : L_(e, t.slots = {})
    } else t.slots = {}, e && N_(t, e);
    Xa(t.slots, $u, 1)
  },
  Tv = (t, e, n) => {
    const {
      vnode: r,
      slots: i
    } = t;
    let s = !0,
      o = et;
    if (r.shapeFlag & 32) {
      const l = e._;
      l ? n && l === 1 ? s = !1 : (mt(i, e), !n && l === 1 && delete i._) : (s = !e.$stable, L_(e, i)), o = e
    } else e && (N_(t, e), o = {
      default: 1
    });
    if (s)
      for (const l in i) !O_(l) && !(l in o) && delete i[l]
  };

function tu(t, e, n, r, i = !1) {
  if (be(t)) {
    t.forEach((d, c) => tu(d, e && (be(e) ? e[c] : e), n, r, i));
    return
  }
  if (Zi(r) && !i) return;
  const s = r.shapeFlag & 4 ? Hu(r.component) || r.component.proxy : r.el,
    o = i ? null : s,
    {
      i: l,
      r: a
    } = t,
    u = e && e.r,
    f = l.refs === et ? l.refs = {} : l.refs,
    h = l.setupState;
  if (u != null && u !== a && (ct(u) ? (f[u] = null, $e(h, u) && (h[u] = null)) : Et(u) && (u.value = null)), Te(a)) yi(a, l, 12, [o, f]);
  else {
    const d = ct(a),
      c = Et(a);
    if (d || c) {
      const p = () => {
        if (t.f) {
          const g = d ? $e(h, a) ? h[a] : f[a] : a.value;
          i ? be(g) && ih(g, s) : be(g) ? g.includes(s) || g.push(s) : d ? (f[a] = [s], $e(h, a) && (h[a] = f[a])) : (a.value = [s], t.k && (f[t.k] = a.value))
        } else d ? (f[a] = o, $e(h, a) && (h[a] = o)) : c && (a.value = o, t.k && (f[t.k] = o))
      };
      o ? (p.id = -1, Ot(p, n)) : p()
    }
  }
}
let ei = !1;
const ua = t => /svg/.test(t.namespaceURI) && t.tagName !== "foreignObject",
  ca = t => t.nodeType === 8;

function Sv(t) {
  const {
    mt: e,
    p: n,
    o: {
      patchProp: r,
      createText: i,
      nextSibling: s,
      parentNode: o,
      remove: l,
      insert: a,
      createComment: u
    }
  } = t, f = (m, _) => {
    if (!_.hasChildNodes()) {
      n(null, m, _), Ga(), _._vnode = m;
      return
    }
    ei = !1, h(_.firstChild, m, null, null, null), Ga(), _._vnode = m, ei && console.error("Hydration completed but contains mismatches.")
  }, h = (m, _, v, y, b, S = !1) => {
    const E = ca(m) && m.data === "[",
      C = () => g(m, _, v, y, b, E),
      {
        type: A,
        ref: M,
        shapeFlag: B,
        patchFlag: L
      } = _;
    let $ = m.nodeType;
    _.el = m, L === -2 && (S = !1, _.dynamicChildren = null);
    let z = null;
    switch (A) {
      case eo:
        $ !== 3 ? _.children === "" ? (a(_.el = i(""), o(m), m), z = m) : z = C() : (m.data !== _.children && (ei = !0, m.data = _.children), z = s(m));
        break;
      case on:
        $ !== 8 || E ? z = C() : z = s(m);
        break;
      case Ko:
        if (E && (m = s(m), $ = m.nodeType), $ === 1 || $ === 3) {
          z = m;
          const re = !_.children.length;
          for (let j = 0; j < _.staticCount; j++) re && (_.children += z.nodeType === 1 ? z.outerHTML : z.data), j === _.staticCount - 1 && (_.anchor = z), z = s(z);
          return E ? s(z) : z
        } else C();
        break;
      case dn:
        E ? z = p(m, _, v, y, b, S) : z = C();
        break;
      default:
        if (B & 1) $ !== 1 || _.type.toLowerCase() !== m.tagName.toLowerCase() ? z = C() : z = d(m, _, v, y, b, S);
        else if (B & 6) {
          _.slotScopeIds = b;
          const re = o(m);
          if (e(_, re, null, v, y, ua(re), S), z = E ? D(m) : s(m), z && ca(z) && z.data === "teleport end" && (z = s(z)), Zi(_)) {
            let j;
            E ? (j = Ve(dn), j.anchor = z ? z.previousSibling : re.lastChild) : j = m.nodeType === 3 ? cr("") : Ve("div"), j.el = m, _.component.subTree = j
          }
        } else B & 64 ? $ !== 8 ? z = C() : z = _.type.hydrate(m, _, v, y, b, S, t, c) : B & 128 && (z = _.type.hydrate(m, _, v, y, ua(o(m)), b, S, t, h))
    }
    return M != null && tu(M, null, y, _), z
  }, d = (m, _, v, y, b, S) => {
    S = S || !!_.dynamicChildren;
    const {
      type: E,
      props: C,
      patchFlag: A,
      shapeFlag: M,
      dirs: B
    } = _, L = E === "input" && B || E === "option";
    if (L || A !== -1) {
      if (B && vr(_, null, v, "created"), C)
        if (L || !S || A & 48)
          for (const z in C)(L && z.endsWith("value") || jl(z) && !Vo(z)) && r(m, z, null, C[z], !1, void 0, v);
        else C.onClick && r(m, "onClick", null, C.onClick, !1, void 0, v);
      let $;
      if (($ = C && C.onVnodeBeforeMount) && fn($, v, _), B && vr(_, null, v, "beforeMount"), (($ = C && C.onVnodeMounted) || B) && g_(() => {
          $ && fn($, v, _), B && vr(_, null, v, "mounted")
        }, y), M & 16 && !(C && (C.innerHTML || C.textContent))) {
        let z = c(m.firstChild, _, m, v, y, b, S);
        for (; z;) {
          ei = !0;
          const re = z;
          z = z.nextSibling, l(re)
        }
      } else M & 8 && m.textContent !== _.children && (ei = !0, m.textContent = _.children)
    }
    return m.nextSibling
  }, c = (m, _, v, y, b, S, E) => {
    E = E || !!_.dynamicChildren;
    const C = _.children,
      A = C.length;
    for (let M = 0; M < A; M++) {
      const B = E ? C[M] : C[M] = Vn(C[M]);
      if (m) m = h(m, B, y, b, S, E);
      else {
        if (B.type === eo && !B.children) continue;
        ei = !0, n(null, B, v, null, y, b, ua(v), S)
      }
    }
    return m
  }, p = (m, _, v, y, b, S) => {
    const {
      slotScopeIds: E
    } = _;
    E && (b = b ? b.concat(E) : E);
    const C = o(m),
      A = c(s(m), _, C, v, y, b, S);
    return A && ca(A) && A.data === "]" ? s(_.anchor = A) : (ei = !0, a(_.anchor = u("]"), C, A), A)
  }, g = (m, _, v, y, b, S) => {
    if (ei = !0, _.el = null, S) {
      const A = D(m);
      for (;;) {
        const M = s(m);
        if (M && M !== A) l(M);
        else break
      }
    }
    const E = s(m),
      C = o(m);
    return l(m), n(null, _, C, E, v, y, ua(C), b), E
  }, D = m => {
    let _ = 0;
    for (; m;)
      if (m = s(m), m && ca(m) && (m.data === "[" && _++, m.data === "]")) {
        if (_ === 0) return s(m);
        _--
      } return m
  };
  return [f, h]
}
const Ot = g_;

function Pv(t) {
  return B_(t)
}

function kv(t) {
  return B_(t, Sv)
}

function B_(t, e) {
  const n = Hc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: f,
    parentNode: h,
    nextSibling: d,
    setScopeId: c = fr,
    insertStaticContent: p
  } = t, g = (x, w, P, O = null, V = null, T = null, J = !1, Q = null, te = !!w.dynamicChildren) => {
    if (x === w) return;
    x && !ur(x, w) && (O = N(x), ce(x, V, T, !0), x = null), w.patchFlag === -2 && (te = !1, w.dynamicChildren = null);
    const {
      type: X,
      ref: se,
      shapeFlag: le
    } = w;
    switch (X) {
      case eo:
        D(x, w, P, O);
        break;
      case on:
        m(x, w, P, O);
        break;
      case Ko:
        x == null && _(w, P, O, J);
        break;
      case dn:
        L(x, w, P, O, V, T, J, Q, te);
        break;
      default:
        le & 1 ? b(x, w, P, O, V, T, J, Q, te) : le & 6 ? $(x, w, P, O, V, T, J, Q, te) : (le & 64 || le & 128) && X.process(x, w, P, O, V, T, J, Q, te, G)
    }
    se != null && V && tu(se, x && x.ref, T, w || x, !w)
  }, D = (x, w, P, O) => {
    if (x == null) r(w.el = l(w.children), P, O);
    else {
      const V = w.el = x.el;
      w.children !== x.children && u(V, w.children)
    }
  }, m = (x, w, P, O) => {
    x == null ? r(w.el = a(w.children || ""), P, O) : w.el = x.el
  }, _ = (x, w, P, O) => {
    [x.el, x.anchor] = p(x.children, w, P, O, x.el, x.anchor)
  }, v = ({
    el: x,
    anchor: w
  }, P, O) => {
    let V;
    for (; x && x !== w;) V = d(x), r(x, P, O), x = V;
    r(w, P, O)
  }, y = ({
    el: x,
    anchor: w
  }) => {
    let P;
    for (; x && x !== w;) P = d(x), i(x), x = P;
    i(w)
  }, b = (x, w, P, O, V, T, J, Q, te) => {
    J = J || w.type === "svg", x == null ? S(w, P, O, V, T, J, Q, te) : A(x, w, V, T, J, Q, te)
  }, S = (x, w, P, O, V, T, J, Q) => {
    let te, X;
    const {
      type: se,
      props: le,
      shapeFlag: pe,
      transition: he,
      dirs: ae
    } = x;
    if (te = x.el = o(x.type, T, le && le.is, le), pe & 8 ? f(te, x.children) : pe & 16 && C(x.children, te, null, O, V, T && se !== "foreignObject", J, Q), ae && vr(x, null, O, "created"), E(te, x, x.scopeId, J, O), le) {
      for (const Ee in le) Ee !== "value" && !Vo(Ee) && s(te, Ee, null, le[Ee], T, x.children, O, V, xe);
      "value" in le && s(te, "value", null, le.value), (X = le.onVnodeBeforeMount) && fn(X, O, x)
    }
    ae && vr(x, null, O, "beforeMount");
    const we = (!V || V && !V.pendingBranch) && he && !he.persisted;
    we && he.beforeEnter(te), r(te, w, P), ((X = le && le.onVnodeMounted) || we || ae) && Ot(() => {
      X && fn(X, O, x), we && he.enter(te), ae && vr(x, null, O, "mounted")
    }, V)
  }, E = (x, w, P, O, V) => {
    if (P && c(x, P), O)
      for (let T = 0; T < O.length; T++) c(x, O[T]);
    if (V) {
      let T = V.subTree;
      if (w === T) {
        const J = V.vnode;
        E(x, J, J.scopeId, J.slotScopeIds, V.parent)
      }
    }
  }, C = (x, w, P, O, V, T, J, Q, te = 0) => {
    for (let X = te; X < x.length; X++) {
      const se = x[X] = Q ? ai(x[X]) : Vn(x[X]);
      g(null, se, w, P, O, V, T, J, Q)
    }
  }, A = (x, w, P, O, V, T, J) => {
    const Q = w.el = x.el;
    let {
      patchFlag: te,
      dynamicChildren: X,
      dirs: se
    } = w;
    te |= x.patchFlag & 16;
    const le = x.props || et,
      pe = w.props || et;
    let he;
    P && Ri(P, !1), (he = pe.onVnodeBeforeUpdate) && fn(he, P, w, x), se && vr(w, x, P, "beforeUpdate"), P && Ri(P, !0);
    const ae = V && w.type !== "foreignObject";
    if (X ? M(x.dynamicChildren, X, Q, P, O, ae, T) : J || ee(x, w, Q, null, P, O, ae, T, !1), te > 0) {
      if (te & 16) B(Q, w, le, pe, P, O, V);
      else if (te & 2 && le.class !== pe.class && s(Q, "class", null, pe.class, V), te & 4 && s(Q, "style", le.style, pe.style, V), te & 8) {
        const we = w.dynamicProps;
        for (let Ee = 0; Ee < we.length; Ee++) {
          const We = we[Ee],
            Qe = le[We],
            yt = pe[We];
          (yt !== Qe || We === "value") && s(Q, We, Qe, yt, V, x.children, P, O, xe)
        }
      }
      te & 1 && x.children !== w.children && f(Q, w.children)
    } else !J && X == null && B(Q, w, le, pe, P, O, V);
    ((he = pe.onVnodeUpdated) || se) && Ot(() => {
      he && fn(he, P, w, x), se && vr(w, x, P, "updated")
    }, O)
  }, M = (x, w, P, O, V, T, J) => {
    for (let Q = 0; Q < w.length; Q++) {
      const te = x[Q],
        X = w[Q],
        se = te.el && (te.type === dn || !ur(te, X) || te.shapeFlag & 70) ? h(te.el) : P;
      g(te, X, se, null, O, V, T, J, !0)
    }
  }, B = (x, w, P, O, V, T, J) => {
    if (P !== O) {
      if (P !== et)
        for (const Q in P) !Vo(Q) && !(Q in O) && s(x, Q, P[Q], null, J, w.children, V, T, xe);
      for (const Q in O) {
        if (Vo(Q)) continue;
        const te = O[Q],
          X = P[Q];
        te !== X && Q !== "value" && s(x, Q, X, te, J, w.children, V, T, xe)
      }
      "value" in O && s(x, "value", P.value, O.value)
    }
  }, L = (x, w, P, O, V, T, J, Q, te) => {
    const X = w.el = x ? x.el : l(""),
      se = w.anchor = x ? x.anchor : l("");
    let {
      patchFlag: le,
      dynamicChildren: pe,
      slotScopeIds: he
    } = w;
    he && (Q = Q ? Q.concat(he) : he), x == null ? (r(X, P, O), r(se, P, O), C(w.children, P, se, V, T, J, Q, te)) : le > 0 && le & 64 && pe && x.dynamicChildren ? (M(x.dynamicChildren, pe, P, V, T, J, Q), (w.key != null || V && w === V.subTree) && I_(x, w, !0)) : ee(x, w, P, se, V, T, J, Q, te)
  }, $ = (x, w, P, O, V, T, J, Q, te) => {
    w.slotScopeIds = Q, x == null ? w.shapeFlag & 512 ? V.ctx.activate(w, P, O, J, te) : z(w, P, O, V, T, J, te) : re(x, w, te)
  }, z = (x, w, P, O, V, T, J) => {
    const Q = x.component = Bv(x, O, V);
    if (Bu(x) && (Q.ctx.renderer = G), Iv(Q), Q.asyncDep) {
      if (V && V.registerDep(Q, j), !x.el) {
        const te = Q.subTree = Ve(on);
        m(null, te, w, P)
      }
      return
    }
    j(Q, x, w, P, V, T, J)
  }, re = (x, w, P) => {
    const O = w.component = x.component;
    if (VD(x, w, P))
      if (O.asyncDep && !O.asyncResolved) {
        U(O, w, P);
        return
      } else O.next = w, $D(O.update), O.update();
    else w.el = x.el, O.vnode = w
  }, j = (x, w, P, O, V, T, J) => {
    const Q = () => {
        if (x.isMounted) {
          let {
            next: se,
            bu: le,
            u: pe,
            parent: he,
            vnode: ae
          } = x, we = se, Ee;
          Ri(x, !1), se ? (se.el = ae.el, U(x, se, J)) : se = ae, le && Yo(le), (Ee = se.props && se.props.onVnodeBeforeUpdate) && fn(Ee, he, se, ae), Ri(x, !0);
          const We = tc(x),
            Qe = x.subTree;
          x.subTree = We, g(Qe, We, h(Qe.el), N(Qe), x, V, T), se.el = We.el, we === null && Dh(x, We.el), pe && Ot(pe, V), (Ee = se.props && se.props.onVnodeUpdated) && Ot(() => fn(Ee, he, se, ae), V)
        } else {
          let se;
          const {
            el: le,
            props: pe
          } = w, {
            bm: he,
            m: ae,
            parent: we
          } = x, Ee = Zi(w);
          if (Ri(x, !1), he && Yo(he), !Ee && (se = pe && pe.onVnodeBeforeMount) && fn(se, we, w), Ri(x, !0), le && me) {
            const We = () => {
              x.subTree = tc(x), me(le, x.subTree, x, V, null)
            };
            Ee ? w.type.__asyncLoader().then(() => !x.isUnmounted && We()) : We()
          } else {
            const We = x.subTree = tc(x);
            g(null, We, P, O, x, V, T), w.el = We.el
          }
          if (ae && Ot(ae, V), !Ee && (se = pe && pe.onVnodeMounted)) {
            const We = w;
            Ot(() => fn(se, we, We), V)
          }(w.shapeFlag & 256 || we && Zi(we.vnode) && we.vnode.shapeFlag & 256) && x.a && Ot(x.a, V), x.isMounted = !0, w = P = O = null
        }
      },
      te = x.effect = new fh(Q, () => yh(X), x.scope),
      X = x.update = () => te.run();
    X.id = x.uid, Ri(x, !0), X()
  }, U = (x, w, P) => {
    w.component = x;
    const O = x.vnode.props;
    x.vnode = w, x.next = null, wv(x, w.props, O, P), Tv(x, w.children, P), po(), Cd(), go()
  }, ee = (x, w, P, O, V, T, J, Q, te = !1) => {
    const X = x && x.children,
      se = x ? x.shapeFlag : 0,
      le = w.children,
      {
        patchFlag: pe,
        shapeFlag: he
      } = w;
    if (pe > 0) {
      if (pe & 128) {
        R(X, le, P, O, V, T, J, Q, te);
        return
      } else if (pe & 256) {
        W(X, le, P, O, V, T, J, Q, te);
        return
      }
    }
    he & 8 ? (se & 16 && xe(X, V, T), le !== X && f(P, le)) : se & 16 ? he & 16 ? R(X, le, P, O, V, T, J, Q, te) : xe(X, V, T, !0) : (se & 8 && f(P, ""), he & 16 && C(le, P, O, V, T, J, Q, te))
  }, W = (x, w, P, O, V, T, J, Q, te) => {
    x = x || $s, w = w || $s;
    const X = x.length,
      se = w.length,
      le = Math.min(X, se);
    let pe;
    for (pe = 0; pe < le; pe++) {
      const he = w[pe] = te ? ai(w[pe]) : Vn(w[pe]);
      g(x[pe], he, P, null, V, T, J, Q, te)
    }
    X > se ? xe(x, V, T, !0, !1, le) : C(w, P, O, V, T, J, Q, te, le)
  }, R = (x, w, P, O, V, T, J, Q, te) => {
    let X = 0;
    const se = w.length;
    let le = x.length - 1,
      pe = se - 1;
    for (; X <= le && X <= pe;) {
      const he = x[X],
        ae = w[X] = te ? ai(w[X]) : Vn(w[X]);
      if (ur(he, ae)) g(he, ae, P, null, V, T, J, Q, te);
      else break;
      X++
    }
    for (; X <= le && X <= pe;) {
      const he = x[le],
        ae = w[pe] = te ? ai(w[pe]) : Vn(w[pe]);
      if (ur(he, ae)) g(he, ae, P, null, V, T, J, Q, te);
      else break;
      le--, pe--
    }
    if (X > le) {
      if (X <= pe) {
        const he = pe + 1,
          ae = he < se ? w[he].el : O;
        for (; X <= pe;) g(null, w[X] = te ? ai(w[X]) : Vn(w[X]), P, ae, V, T, J, Q, te), X++
      }
    } else if (X > pe)
      for (; X <= le;) ce(x[X], V, T, !0), X++;
    else {
      const he = X,
        ae = X,
        we = new Map;
      for (X = ae; X <= pe; X++) {
        const Je = w[X] = te ? ai(w[X]) : Vn(w[X]);
        Je.key != null && we.set(Je.key, X)
      }
      let Ee, We = 0;
      const Qe = pe - ae + 1;
      let yt = !1,
        Dt = 0;
      const Ft = new Array(Qe);
      for (X = 0; X < Qe; X++) Ft[X] = 0;
      for (X = he; X <= le; X++) {
        const Je = x[X];
        if (We >= Qe) {
          ce(Je, V, T, !0);
          continue
        }
        let tt;
        if (Je.key != null) tt = we.get(Je.key);
        else
          for (Ee = ae; Ee <= pe; Ee++)
            if (Ft[Ee - ae] === 0 && ur(Je, w[Ee])) {
              tt = Ee;
              break
            } tt === void 0 ? ce(Je, V, T, !0) : (Ft[tt - ae] = X + 1, tt >= Dt ? Dt = tt : yt = !0, g(Je, w[tt], P, null, V, T, J, Q, te), We++)
      }
      const $n = yt ? Fv(Ft) : $s;
      for (Ee = $n.length - 1, X = Qe - 1; X >= 0; X--) {
        const Je = ae + X,
          tt = w[Je],
          vn = Je + 1 < se ? w[Je + 1].el : O;
        Ft[X] === 0 ? g(null, tt, P, vn, V, T, J, Q, te) : yt && (Ee < 0 || X !== $n[Ee] ? ie(tt, P, vn, 2) : Ee--)
      }
    }
  }, ie = (x, w, P, O, V = null) => {
    const {
      el: T,
      type: J,
      transition: Q,
      children: te,
      shapeFlag: X
    } = x;
    if (X & 6) {
      ie(x.component.subTree, w, P, O);
      return
    }
    if (X & 128) {
      x.suspense.move(w, P, O);
      return
    }
    if (X & 64) {
      J.move(x, w, P, G);
      return
    }
    if (J === dn) {
      r(T, w, P);
      for (let le = 0; le < te.length; le++) ie(te[le], w, P, O);
      r(x.anchor, w, P);
      return
    }
    if (J === Ko) {
      v(x, w, P);
      return
    }
    if (O !== 2 && X & 1 && Q)
      if (O === 0) Q.beforeEnter(T), r(T, w, P), Ot(() => Q.enter(T), V);
      else {
        const {
          leave: le,
          delayLeave: pe,
          afterLeave: he
        } = Q, ae = () => r(T, w, P), we = () => {
          le(T, () => {
            ae(), he && he()
          })
        };
        pe ? pe(T, ae, we) : we()
      }
    else r(T, w, P)
  }, ce = (x, w, P, O = !1, V = !1) => {
    const {
      type: T,
      props: J,
      ref: Q,
      children: te,
      dynamicChildren: X,
      shapeFlag: se,
      patchFlag: le,
      dirs: pe
    } = x;
    if (Q != null && tu(Q, null, P, x, !0), se & 256) {
      w.ctx.deactivate(x);
      return
    }
    const he = se & 1 && pe,
      ae = !Zi(x);
    let we;
    if (ae && (we = J && J.onVnodeBeforeUnmount) && fn(we, w, x), se & 6) De(x.component, P, O);
    else {
      if (se & 128) {
        x.suspense.unmount(P, O);
        return
      }
      he && vr(x, null, w, "beforeUnmount"), se & 64 ? x.type.remove(x, w, P, V, G, O) : X && (T !== dn || le > 0 && le & 64) ? xe(X, w, P, !1, !0) : (T === dn && le & 384 || !V && se & 16) && xe(te, w, P), O && ve(x)
    }(ae && (we = J && J.onVnodeUnmounted) || he) && Ot(() => {
      we && fn(we, w, x), he && vr(x, null, w, "unmounted")
    }, P)
  }, ve = x => {
    const {
      type: w,
      el: P,
      anchor: O,
      transition: V
    } = x;
    if (w === dn) {
      fe(P, O);
      return
    }
    if (w === Ko) {
      y(x);
      return
    }
    const T = () => {
      i(P), V && !V.persisted && V.afterLeave && V.afterLeave()
    };
    if (x.shapeFlag & 1 && V && !V.persisted) {
      const {
        leave: J,
        delayLeave: Q
      } = V, te = () => J(P, T);
      Q ? Q(x.el, T, te) : te()
    } else T()
  }, fe = (x, w) => {
    let P;
    for (; x !== w;) P = d(x), i(x), x = P;
    i(w)
  }, De = (x, w, P) => {
    const {
      bum: O,
      scope: V,
      update: T,
      subTree: J,
      um: Q
    } = x;
    O && Yo(O), V.stop(), T && (T.active = !1, ce(J, x, w, P)), Q && Ot(Q, w), Ot(() => {
      x.isUnmounted = !0
    }, w), w && w.pendingBranch && !w.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve())
  }, xe = (x, w, P, O = !1, V = !1, T = 0) => {
    for (let J = T; J < x.length; J++) ce(x[J], w, P, O, V)
  }, N = x => x.shapeFlag & 6 ? N(x.component.subTree) : x.shapeFlag & 128 ? x.suspense.next() : d(x.anchor || x.el), q = (x, w, P) => {
    x == null ? w._vnode && ce(w._vnode, null, null, !0) : g(w._vnode || null, x, w, null, null, null, P), Cd(), Ga(), w._vnode = x
  }, G = {
    p: g,
    um: ce,
    m: ie,
    r: ve,
    mt: z,
    mc: C,
    pc: ee,
    pbc: M,
    n: N,
    o: t
  };
  let ne, me;
  return e && ([ne, me] = e(G)), {
    render: q,
    hydrate: ne,
    createApp: bv(q, ne)
  }
}

function Ri({
  effect: t,
  update: e
}, n) {
  t.allowRecurse = e.allowRecurse = n
}

function I_(t, e, n = !1) {
  const r = t.children,
    i = e.children;
  if (be(r) && be(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = ai(i[s]), l.el = o.el), n || I_(o, l)), l.type === eo && (l.el = o.el)
    }
}

function Fv(t) {
  const e = t.slice(),
    n = [0];
  let r, i, s, o, l;
  const a = t.length;
  for (r = 0; r < a; r++) {
    const u = t[r];
    if (u !== 0) {
      if (i = n[n.length - 1], t[i] < u) {
        e[r] = i, n.push(r);
        continue
      }
      for (s = 0, o = n.length - 1; s < o;) l = s + o >> 1, t[n[l]] < u ? s = l + 1 : o = l;
      u < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r)
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0;) n[s] = o, o = e[o];
  return n
}
const Av = t => t.__isTeleport,
  dn = Symbol.for("v-fgt"),
  eo = Symbol.for("v-txt"),
  on = Symbol.for("v-cmt"),
  Ko = Symbol.for("v-stc"),
  qo = [];
let Kn = null;

function Jt(t = !1) {
  qo.push(Kn = t ? null : [])
}

function $_() {
  qo.pop(), Kn = qo[qo.length - 1] || null
}
let to = 1;

function Bd(t) {
  to += t
}

function H_(t) {
  return t.dynamicChildren = to > 0 ? Kn || $s : null, $_(), to > 0 && Kn && Kn.push(t), t
}

function Xl(t, e, n, r, i, s) {
  return H_(Oe(t, e, n, r, i, s, !0))
}

function Br(t, e, n, r, i) {
  return H_(Ve(t, e, n, r, i, !0))
}

function no(t) {
  return t ? t.__v_isVNode === !0 : !1
}

function ur(t, e) {
  return t.type === e.type && t.key === e.key
}
const $u = "__vInternal",
  z_ = ({
    key: t
  }) => t ?? null,
  Ra = ({
    ref: t,
    ref_key: e,
    ref_for: n
  }) => (typeof t == "number" && (t = "" + t), t != null ? ct(t) || Et(t) || Te(t) ? {
    i: Pt,
    r: t,
    k: e,
    f: !!n
  } : t : null);

function Oe(t, e = null, n = null, r = 0, i = null, s = t === dn ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && z_(e),
    ref: e && Ra(e),
    scopeId: Ou,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Pt
  };
  return l ? (Th(a, n), s & 128 && t.normalize(a)) : n && (a.shapeFlag |= ct(n) ? 8 : 16), to > 0 && !o && Kn && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Kn.push(a), a
}
const Ve = Rv;

function Rv(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === T_) && (t = on), no(t)) {
    const l = Kr(t, e, !0);
    return n && Th(l, n), to > 0 && !s && Kn && (l.shapeFlag & 6 ? Kn[Kn.indexOf(t)] = l : Kn.push(l)), l.patchFlag |= -2, l
  }
  if (Wv(t) && (t = t.__vccOpts), e) {
    e = Mv(e);
    let {
      class: l,
      style: a
    } = e;
    l && !ct(l) && (e.class = uh(l)), Ge(a) && (n_(a) && !be(a) && (a = mt({}, a)), e.style = ah(a))
  }
  const o = ct(t) ? 1 : p_(t) ? 128 : Av(t) ? 64 : Ge(t) ? 4 : Te(t) ? 2 : 0;
  return Oe(t, e, n, r, i, o, s, !0)
}

function Mv(t) {
  return t ? n_(t) || $u in t ? mt({}, t) : t : null
}

function Kr(t, e, n = !1) {
  const {
    props: r,
    ref: i,
    patchFlag: s,
    children: o
  } = t, l = e ? j_(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && z_(l),
    ref: e && e.ref ? n && i ? be(i) ? i.concat(Ra(e)) : [i, Ra(e)] : Ra(e) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== dn ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Kr(t.ssContent),
    ssFallback: t.ssFallback && Kr(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  }
}

function cr(t = " ", e = 0) {
  return Ve(eo, null, t, e)
}

function Ov(t, e) {
  const n = Ve(Ko, null, t);
  return n.staticCount = e, n
}

function W_(t = "", e = !1) {
  return e ? (Jt(), Br(on, null, t)) : Ve(on, null, t)
}

function Vn(t) {
  return t == null || typeof t == "boolean" ? Ve(on) : be(t) ? Ve(dn, null, t.slice()) : typeof t == "object" ? ai(t) : Ve(eo, null, String(t))
}

function ai(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Kr(t)
}

function Th(t, e) {
  let n = 0;
  const {
    shapeFlag: r
  } = t;
  if (e == null) e = null;
  else if (be(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Th(t, i()), i._c && (i._d = !0));
      return
    } else {
      n = 32;
      const i = e._;
      !i && !($u in e) ? e._ctx = Pt : i === 3 && Pt && (Pt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
    }
  else Te(e) ? (e = {
    default: e,
    _ctx: Pt
  }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [cr(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n
}

function j_(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class") e.class !== r.class && (e.class = uh([e.class, r.class]));
      else if (i === "style") e.style = ah([e.style, r.style]);
    else if (jl(i)) {
      const s = e[i],
        o = r[i];
      o && s !== o && !(be(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o)
    } else i !== "" && (e[i] = r[i])
  }
  return e
}

function fn(t, e, n, r = null) {
  Zn(t, e, 7, [n, r])
}
const Lv = F_();
let Nv = 0;

function Bv(t, e, n) {
  const r = t.type,
    i = (e ? e.appContext : t.appContext) || Lv,
    s = {
      uid: Nv++,
      vnode: t,
      type: r,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new tD(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: M_(r, i),
      emitsOptions: d_(r, i),
      emit: null,
      emitted: null,
      propsDefaults: et,
      inheritAttrs: r.inheritAttrs,
      ctx: et,
      data: et,
      props: et,
      attrs: et,
      slots: et,
      refs: et,
      setupState: et,
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
  return s.ctx = {
    _: s
  }, s.root = e ? e.root : s, s.emit = zD.bind(null, s), t.ce && t.ce(s), s
}
let Ct = null;
const ys = () => Ct || Pt;
let Sh, xs, Id = "__VUE_INSTANCE_SETTERS__";
(xs = Hc()[Id]) || (xs = Hc()[Id] = []), xs.push(t => Ct = t), Sh = t => {
  xs.length > 1 ? xs.forEach(e => e(t)) : xs[0](t)
};
const Ti = t => {
    Sh(t), t.scope.on()
  },
  Di = () => {
    Ct && Ct.scope.off(), Sh(null)
  };

function U_(t) {
  return t.vnode.shapeFlag & 4
}
let Tl = !1;

function Iv(t, e = !1) {
  Tl = e;
  const {
    props: n,
    children: r
  } = t.vnode, i = U_(t);
  xv(t, n, i, e), Ev(t, r);
  const s = i ? $v(t, e) : void 0;
  return Tl = !1, s
}

function $v(t, e) {
  const n = t.type;
  t.accessCache = Object.create(null), t.proxy = r_(new Proxy(t.ctx, dv));
  const {
    setup: r
  } = n;
  if (r) {
    const i = t.setupContext = r.length > 1 ? zv(t) : null;
    Ti(t), po();
    const s = yi(r, t, 0, [t.props, i]);
    if (go(), Di(), oh(s)) {
      if (s.then(Di, Di), e) return s.then(o => {
        Gc(t, o, e)
      }).catch(o => {
        Yl(o, t, 0)
      });
      t.asyncDep = s
    } else Gc(t, s, e)
  } else V_(t, e)
}

function Gc(t, e, n) {
  Te(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ge(e) && (t.setupState = l_(e)), V_(t, n)
}
let $d;

function V_(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && $d && !r.render) {
      const i = r.template || Ch(t).template;
      if (i) {
        const {
          isCustomElement: s,
          compilerOptions: o
        } = t.appContext.config, {
          delimiters: l,
          compilerOptions: a
        } = r, u = mt(mt({
          isCustomElement: s,
          delimiters: l
        }, o), a);
        r.render = $d(i, u)
      }
    }
    t.render = r.render || fr
  }
  Ti(t), po(), gv(t), go(), Di()
}

function Hv(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs, {
    get(e, n) {
      return Dn(t, "get", "$attrs"), e[n]
    }
  }))
}

function zv(t) {
  const e = n => {
    t.exposed = n || {}
  };
  return {
    get attrs() {
      return Hv(t)
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  }
}

function Hu(t) {
  if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(l_(r_(t.exposed)), {
    get(e, n) {
      if (n in e) return e[n];
      if (n in Xo) return Xo[n](t)
    },
    has(e, n) {
      return n in e || n in Xo
    }
  }))
}

function Qc(t, e = !0) {
  return Te(t) ? t.displayName || t.name : t.name || e && t.__name
}

function Wv(t) {
  return Te(t) && "__vccOpts" in t
}
const Zt = (t, e) => ND(t, e, Tl);

function ln(t, e, n) {
  const r = arguments.length;
  return r === 2 ? Ge(e) && !be(e) ? no(e) ? Ve(t, null, [e]) : Ve(t, e) : Ve(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && no(n) && (n = [n]), Ve(t, e, n))
}
const jv = Symbol.for("v-scx"),
  Uv = () => sn(jv),
  Y_ = "3.3.4",
  Vv = "http://www.w3.org/2000/svg",
  Ui = typeof document < "u" ? document : null,
  Hd = Ui && Ui.createElement("template"),
  Yv = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null)
    },
    remove: t => {
      const e = t.parentNode;
      e && e.removeChild(t)
    },
    createElement: (t, e, n, r) => {
      const i = e ? Ui.createElementNS(Vv, t) : Ui.createElement(t, n ? {
        is: n
      } : void 0);
      return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i
    },
    createText: t => Ui.createTextNode(t),
    createComment: t => Ui.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => Ui.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, r, i, s) {
      const o = n ? n.previousSibling : e.lastChild;
      if (i && (i === s || i.nextSibling))
        for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)););
      else {
        Hd.innerHTML = r ? `<svg>${t}</svg>` : t;
        const l = Hd.content;
        if (r) {
          const a = l.firstChild;
          for (; a.firstChild;) l.appendChild(a.firstChild);
          l.removeChild(a)
        }
        e.insertBefore(l, n)
      }
      return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
  };

function Xv(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}

function Kv(t, e, n) {
  const r = t.style,
    i = ct(n);
  if (n && !i) {
    if (e && !ct(e))
      for (const s in e) n[s] == null && Jc(r, s, "");
    for (const s in n) Jc(r, s, n[s])
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = s)
  }
}
const zd = /\s*!important$/;

function Jc(t, e, n) {
  if (be(n)) n.forEach(r => Jc(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    const r = qv(t, e);
    zd.test(n) ? t.setProperty(ho(r), n.replace(zd, ""), "important") : t[r] = n
  }
}
const Wd = ["Webkit", "Moz", "ms"],
  oc = {};

function qv(t, e) {
  const n = oc[e];
  if (n) return n;
  let r = kr(e);
  if (r !== "filter" && r in t) return oc[e] = r;
  r = Fu(r);
  for (let i = 0; i < Wd.length; i++) {
    const s = Wd[i] + r;
    if (s in t) return oc[e] = s
  }
  return e
}
const jd = "http://www.w3.org/1999/xlink";

function Gv(t, e, n, r, i) {
  if (r && e.startsWith("xlink:")) n == null ? t.removeAttributeNS(jd, e.slice(6, e.length)) : t.setAttributeNS(jd, e, n);
  else {
    const s = eD(e);
    n == null || s && !jg(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n)
  }
}

function Qv(t, e, n, r, i, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    r && o(r, i, s), t[e] = n ?? "";
    return
  }
  const l = t.tagName;
  if (e === "value" && l !== "PROGRESS" && !l.includes("-")) {
    t._value = n;
    const u = l === "OPTION" ? t.getAttribute("value") : t.value,
      f = n ?? "";
    u !== f && (t.value = f), n == null && t.removeAttribute(e);
    return
  }
  let a = !1;
  if (n === "" || n == null) {
    const u = typeof t[e];
    u === "boolean" ? n = jg(n) : n == null && u === "string" ? (n = "", a = !0) : u === "number" && (n = 0, a = !0)
  }
  try {
    t[e] = n
  } catch {}
  a && t.removeAttribute(e)
}

function Jv(t, e, n, r) {
  t.addEventListener(e, n, r)
}

function Zv(t, e, n, r) {
  t.removeEventListener(e, n, r)
}

function e1(t, e, n, r, i = null) {
  const s = t._vei || (t._vei = {}),
    o = s[e];
  if (r && o) o.value = r;
  else {
    const [l, a] = t1(e);
    if (r) {
      const u = s[e] = i1(r, i);
      Jv(t, l, u, a)
    } else o && (Zv(t, l, o, a), s[e] = void 0)
  }
}
const Ud = /(?:Once|Passive|Capture)$/;

function t1(t) {
  let e;
  if (Ud.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Ud);) t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0
  }
  return [t[2] === ":" ? t.slice(3) : ho(t.slice(2)), e]
}
let lc = 0;
const n1 = Promise.resolve(),
  r1 = () => lc || (n1.then(() => lc = 0), lc = Date.now());

function i1(t, e) {
  const n = r => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Zn(s1(r, n.value), e, 5, [r])
  };
  return n.value = t, n.attached = r1(), n
}

function s1(t, e) {
  if (be(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0
    }, e.map(r => i => !i._stopped && r && r(i))
  } else return e
}
const Vd = /^on[a-z]/,
  o1 = (t, e, n, r, i = !1, s, o, l, a) => {
    e === "class" ? Xv(t, r, i) : e === "style" ? Kv(t, n, r) : jl(e) ? rh(e) || e1(t, e, n, r, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : l1(t, e, r, i)) ? Qv(t, e, r, s, o, l, a) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Gv(t, e, r, i))
  };

function l1(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && Vd.test(e) && Te(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Vd.test(e) && ct(n) ? !1 : e in t
}
const ti = "transition",
  xo = "animation",
  zu = (t, {
    slots: e
  }) => ln(nv, a1(t), e);
zu.displayName = "Transition";
const X_ = {
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
zu.props = mt({}, m_, X_);
const Mi = (t, e = []) => {
    be(t) ? t.forEach(n => n(...e)) : t && t(...e)
  },
  Yd = t => t ? be(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function a1(t) {
  const e = {};
  for (const L in t) L in X_ || (e[L] = t[L]);
  if (t.css === !1) return e;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: u = o,
    appearToClass: f = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: c = `${n}-leave-to`
  } = t, p = u1(i), g = p && p[0], D = p && p[1], {
    onBeforeEnter: m,
    onEnter: _,
    onEnterCancelled: v,
    onLeave: y,
    onLeaveCancelled: b,
    onBeforeAppear: S = m,
    onAppear: E = _,
    onAppearCancelled: C = v
  } = e, A = (L, $, z) => {
    Oi(L, $ ? f : l), Oi(L, $ ? u : o), z && z()
  }, M = (L, $) => {
    L._isLeaving = !1, Oi(L, h), Oi(L, c), Oi(L, d), $ && $()
  }, B = L => ($, z) => {
    const re = L ? E : _,
      j = () => A($, L, z);
    Mi(re, [$, j]), Xd(() => {
      Oi($, L ? a : s), ni($, L ? f : l), Yd(re) || Kd($, r, g, j)
    })
  };
  return mt(e, {
    onBeforeEnter(L) {
      Mi(m, [L]), ni(L, s), ni(L, o)
    },
    onBeforeAppear(L) {
      Mi(S, [L]), ni(L, a), ni(L, u)
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(L, $) {
      L._isLeaving = !0;
      const z = () => M(L, $);
      ni(L, h), h1(), ni(L, d), Xd(() => {
        L._isLeaving && (Oi(L, h), ni(L, c), Yd(y) || Kd(L, r, D, z))
      }), Mi(y, [L, z])
    },
    onEnterCancelled(L) {
      A(L, !1), Mi(v, [L])
    },
    onAppearCancelled(L) {
      A(L, !0), Mi(C, [L])
    },
    onLeaveCancelled(L) {
      M(L), Mi(b, [L])
    }
  })
}

function u1(t) {
  if (t == null) return null;
  if (Ge(t)) return [ac(t.enter), ac(t.leave)];
  {
    const e = ac(t);
    return [e, e]
  }
}

function ac(t) {
  return Wg(t)
}

function ni(t, e) {
  e.split(/\s+/).forEach(n => n && t.classList.add(n)), (t._vtc || (t._vtc = new Set)).add(e)
}

function Oi(t, e) {
  e.split(/\s+/).forEach(r => r && t.classList.remove(r));
  const {
    _vtc: n
  } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0))
}

function Xd(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t)
  })
}
let c1 = 0;

function Kd(t, e, n, r) {
  const i = t._endId = ++c1,
    s = () => {
      i === t._endId && r()
    };
  if (n) return setTimeout(s, n);
  const {
    type: o,
    timeout: l,
    propCount: a
  } = f1(t, e);
  if (!o) return r();
  const u = o + "end";
  let f = 0;
  const h = () => {
      t.removeEventListener(u, d), s()
    },
    d = c => {
      c.target === t && ++f >= a && h()
    };
  setTimeout(() => {
    f < a && h()
  }, l + 1), t.addEventListener(u, d)
}

function f1(t, e) {
  const n = window.getComputedStyle(t),
    r = p => (n[p] || "").split(", "),
    i = r(`${ti}Delay`),
    s = r(`${ti}Duration`),
    o = qd(i, s),
    l = r(`${xo}Delay`),
    a = r(`${xo}Duration`),
    u = qd(l, a);
  let f = null,
    h = 0,
    d = 0;
  e === ti ? o > 0 && (f = ti, h = o, d = s.length) : e === xo ? u > 0 && (f = xo, h = u, d = a.length) : (h = Math.max(o, u), f = h > 0 ? o > u ? ti : xo : null, d = f ? f === ti ? s.length : a.length : 0);
  const c = f === ti && /\b(transform|all)(,|$)/.test(r(`${ti}Property`).toString());
  return {
    type: f,
    timeout: h,
    propCount: d,
    hasTransform: c
  }
}

function qd(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max(...e.map((n, r) => Gd(n) + Gd(t[r])))
}

function Gd(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function h1() {
  return document.body.offsetHeight
}
const d1 = ["ctrl", "shift", "alt", "meta"],
  p1 = {
    stop: t => t.stopPropagation(),
    prevent: t => t.preventDefault(),
    self: t => t.target !== t.currentTarget,
    ctrl: t => !t.ctrlKey,
    shift: t => !t.shiftKey,
    alt: t => !t.altKey,
    meta: t => !t.metaKey,
    left: t => "button" in t && t.button !== 0,
    middle: t => "button" in t && t.button !== 1,
    right: t => "button" in t && t.button !== 2,
    exact: (t, e) => d1.some(n => t[`${n}Key`] && !e.includes(n))
  },
  pP = (t, e) => (n, ...r) => {
    for (let i = 0; i < e.length; i++) {
      const s = p1[e[i]];
      if (s && s(n, e)) return
    }
    return t(n, ...r)
  },
  gP = {
    beforeMount(t, {
      value: e
    }, {
      transition: n
    }) {
      t._vod = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : wo(t, e)
    },
    mounted(t, {
      value: e
    }, {
      transition: n
    }) {
      n && e && n.enter(t)
    },
    updated(t, {
      value: e,
      oldValue: n
    }, {
      transition: r
    }) {
      !e != !n && (r ? e ? (r.beforeEnter(t), wo(t, !0), r.enter(t)) : r.leave(t, () => {
        wo(t, !1)
      }) : wo(t, e))
    },
    beforeUnmount(t, {
      value: e
    }) {
      wo(t, e)
    }
  };

function wo(t, e) {
  t.style.display = e ? t._vod : "none"
}
const K_ = mt({
  patchProp: o1
}, Yv);
let Go, Qd = !1;

function g1() {
  return Go || (Go = Pv(K_))
}

function _1() {
  return Go = Qd ? Go : kv(K_), Qd = !0, Go
}
const m1 = (...t) => {
    const e = g1().createApp(...t),
      {
        mount: n
      } = e;
    return e.mount = r => {
      const i = q_(r);
      if (!i) return;
      const s = e._component;
      !Te(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
      const o = n(i, !1, i instanceof SVGElement);
      return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
    }, e
  },
  y1 = (...t) => {
    const e = _1().createApp(...t),
      {
        mount: n
      } = e;
    return e.mount = r => {
      const i = q_(r);
      if (i) return n(i, !0, i instanceof SVGElement)
    }, e
  };

function q_(t) {
  return ct(t) ? document.querySelector(t) : t
}
const D1 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  v1 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  b1 = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;

function x1(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    w1(t);
    return
  }
  return e
}

function w1(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
}

function C1(t, e = {}) {
  if (typeof t != "string") return t;
  const n = t.trim();
  if (t[0] === '"' && t[t.length - 1] === '"') return n.slice(1, -1);
  if (n.length <= 9) {
    const r = n.toLowerCase();
    if (r === "true") return !0;
    if (r === "false") return !1;
    if (r === "undefined") return;
    if (r === "null") return null;
    if (r === "nan") return Number.NaN;
    if (r === "infinity") return Number.POSITIVE_INFINITY;
    if (r === "-infinity") return Number.NEGATIVE_INFINITY
  }
  if (!b1.test(t)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return t
  }
  try {
    if (D1.test(t) || v1.test(t)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, x1)
    }
    return JSON.parse(t)
  } catch (r) {
    if (e.strict) throw r;
    return t
  }
}
const E1 = /#/g,
  T1 = /&/g,
  S1 = /=/g,
  Ph = /\+/g,
  P1 = /%5e/gi,
  k1 = /%60/gi,
  F1 = /%7c/gi,
  A1 = /%20/gi;

function R1(t) {
  return encodeURI("" + t).replace(F1, "|")
}

function Zc(t) {
  return R1(typeof t == "string" ? t : JSON.stringify(t)).replace(Ph, "%2B").replace(A1, "+").replace(E1, "%23").replace(T1, "%26").replace(k1, "`").replace(P1, "^")
}

function uc(t) {
  return Zc(t).replace(S1, "%3D")
}

function nu(t = "") {
  try {
    return decodeURIComponent("" + t)
  } catch {
    return "" + t
  }
}

function M1(t) {
  return nu(t.replace(Ph, " "))
}

function O1(t) {
  return nu(t.replace(Ph, " "))
}

function G_(t = "") {
  const e = {};
  t[0] === "?" && (t = t.slice(1));
  for (const n of t.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const i = M1(r[1]);
    if (i === "__proto__" || i === "constructor") continue;
    const s = O1(r[2] || "");
    e[i] === void 0 ? e[i] = s : Array.isArray(e[i]) ? e[i].push(s) : e[i] = [e[i], s]
  }
  return e
}

function L1(t, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(n => `${uc(t)}=${Zc(n)}`).join("&") : `${uc(t)}=${Zc(e)}` : uc(t)
}

function N1(t) {
  return Object.keys(t).filter(e => t[e] !== void 0).map(e => L1(e, t[e])).filter(Boolean).join("&")
}
const B1 = /^\w{2,}:([/\\]{1,2})/,
  I1 = /^\w{2,}:([/\\]{2})?/,
  $1 = /^([/\\]\s*){2,}[^/\\]/;

function Kl(t, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }), e.strict ? B1.test(t) : I1.test(t) || (e.acceptRelative ? $1.test(t) : !1)
}
const H1 = /\/$|\/\?/;

function ef(t = "", e = !1) {
  return e ? H1.test(t) : t.endsWith("/")
}

function kh(t = "", e = !1) {
  if (!e) return (ef(t) ? t.slice(0, -1) : t) || "/";
  if (!ef(t, !0)) return t || "/";
  const [n, ...r] = t.split("?");
  return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}

function ru(t = "", e = !1) {
  if (!e) return t.endsWith("/") ? t : t + "/";
  if (ef(t, !0)) return t || "/";
  const [n, ...r] = t.split("?");
  return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}

function z1(t = "") {
  return t.startsWith("/")
}

function Jd(t = "") {
  return z1(t) ? t : "/" + t
}

function W1(t, e) {
  if (J_(e) || Kl(t)) return t;
  const n = kh(e);
  return t.startsWith(n) ? t : Wu(n, t)
}

function Zd(t, e) {
  if (J_(e)) return t;
  const n = kh(e);
  if (!t.startsWith(n)) return t;
  const r = t.slice(n.length);
  return r[0] === "/" ? r : "/" + r
}

function Q_(t, e) {
  const n = ju(t),
    r = {
      ...G_(n.search),
      ...e
    };
  return n.search = N1(r), Y1(n)
}

function J_(t) {
  return !t || t === "/"
}

function j1(t) {
  return t && t !== "/"
}
const U1 = /^\.?\//;

function Wu(t, ...e) {
  let n = t || "";
  for (const r of e.filter(i => j1(i)))
    if (n) {
      const i = r.replace(U1, "");
      n = ru(n) + i
    } else n = r;
  return n
}

function V1(t, e, n = {}) {
  return n.trailingSlash || (t = ru(t), e = ru(e)), n.leadingSlash || (t = Jd(t), e = Jd(e)), n.encoding || (t = nu(t), e = nu(e)), t === e
}

function ju(t = "", e) {
  if (!Kl(t, {
      acceptRelative: !0
    })) return e ? ju(e + t) : ep(t);
  const [n = "", r, i = ""] = (t.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1), [s = "", o = ""] = (i.match(/([^#/?]*)(.*)?/) || []).splice(1), {
    pathname: l,
    search: a,
    hash: u
  } = ep(o.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
    host: s,
    pathname: l,
    search: a,
    hash: u
  }
}

function ep(t = "") {
  const [e = "", n = "", r = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: n,
    hash: r
  }
}

function Y1(t) {
  const e = t.pathname + (t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : "") + t.hash;
  return t.protocol ? t.protocol + "//" + (t.auth ? t.auth + "@" : "") + t.host + e : e
}
var X1 = Object.defineProperty,
  K1 = (t, e, n) => e in t ? X1(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : t[e] = n,
  ri = (t, e, n) => (K1(t, typeof e != "symbol" ? e + "" : e, n), n);
class q1 extends Error {
  constructor() {
    super(...arguments), ri(this, "name", "FetchError"), ri(this, "request"), ri(this, "response"), ri(this, "data"), ri(this, "status"), ri(this, "statusText"), ri(this, "statusCode"), ri(this, "statusMessage")
  }
}

function G1(t, e, n) {
  let r = "";
  e && (r = e.message), t && n ? r = `${r} (${n.status} ${n.statusText} (${t.toString()}))` : t && (r = `${r} (${t.toString()})`);
  const i = new q1(r);
  return Object.defineProperty(i, "request", {
    get() {
      return t
    }
  }), Object.defineProperty(i, "response", {
    get() {
      return n
    }
  }), Object.defineProperty(i, "data", {
    get() {
      return n && n._data
    }
  }), Object.defineProperty(i, "status", {
    get() {
      return n && n.status
    }
  }), Object.defineProperty(i, "statusText", {
    get() {
      return n && n.statusText
    }
  }), Object.defineProperty(i, "statusCode", {
    get() {
      return n && n.status
    }
  }), Object.defineProperty(i, "statusMessage", {
    get() {
      return n && n.statusText
    }
  }), i
}
const Q1 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function tp(t = "GET") {
  return Q1.has(t.toUpperCase())
}

function J1(t) {
  if (t === void 0) return !1;
  const e = typeof t;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
}
const Z1 = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  eb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function tb(t = "") {
  if (!t) return "json";
  const e = t.split(";").shift() || "";
  return eb.test(e) ? "json" : Z1.has(e) || e.startsWith("text/") ? "text" : "blob"
}

function nb(t, e, n = globalThis.Headers) {
  const r = {
    ...e,
    ...t
  };
  if (e != null && e.params && (t != null && t.params) && (r.params = {
      ...e == null ? void 0 : e.params,
      ...t == null ? void 0 : t.params
    }), e != null && e.query && (t != null && t.query) && (r.query = {
      ...e == null ? void 0 : e.query,
      ...t == null ? void 0 : t.query
    }), e != null && e.headers && (t != null && t.headers)) {
    r.headers = new n((e == null ? void 0 : e.headers) || {});
    for (const [i, s] of new n((t == null ? void 0 : t.headers) || {})) r.headers.set(i, s)
  }
  return r
}
const rb = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

function Z_(t = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController
  } = t;
  async function i(l) {
    const a = l.error && l.error.name === "AbortError" && !l.options.timeout || !1;
    if (l.options.retry !== !1 && !a) {
      let f;
      typeof l.options.retry == "number" ? f = l.options.retry : f = tp(l.options.method) ? 0 : 1;
      const h = l.response && l.response.status || 500;
      if (f > 0 && rb.has(h)) {
        const d = l.options.retryDelay || 0;
        return d > 0 && await new Promise(c => setTimeout(c, d)), s(l.request, {
          ...l.options,
          retry: f - 1,
          timeout: l.options.timeout
        })
      }
    }
    const u = G1(l.request, l.error, l.response);
    throw Error.captureStackTrace && Error.captureStackTrace(u, s), u
  }
  const s = async function(a, u = {}) {
    var d;
    const f = {
      request: a,
      options: nb(u, t.defaults, n),
      response: void 0,
      error: void 0
    };
    if (f.options.method = (d = f.options.method) == null ? void 0 : d.toUpperCase(), f.options.onRequest && await f.options.onRequest(f), typeof f.request == "string" && (f.options.baseURL && (f.request = W1(f.request, f.options.baseURL)), (f.options.query || f.options.params) && (f.request = Q_(f.request, {
        ...f.options.params,
        ...f.options.query
      })), f.options.body && tp(f.options.method) && J1(f.options.body) && (f.options.body = typeof f.options.body == "string" ? f.options.body : JSON.stringify(f.options.body), f.options.headers = new n(f.options.headers || {}), f.options.headers.has("content-type") || f.options.headers.set("content-type", "application/json"), f.options.headers.has("accept") || f.options.headers.set("accept", "application/json"))), !f.options.signal && f.options.timeout) {
      const c = new r;
      setTimeout(() => c.abort(), f.options.timeout), f.options.signal = c.signal
    }
    try {
      f.response = await e(f.request, f.options)
    } catch (c) {
      return f.error = c, f.options.onRequestError && await f.options.onRequestError(f), await i(f)
    }
    const h = (f.options.parseResponse ? "json" : f.options.responseType) || tb(f.response.headers.get("content-type") || "");
    if (h === "json") {
      const c = await f.response.text(),
        p = f.options.parseResponse || C1;
      f.response._data = p(c)
    } else h === "stream" ? f.response._data = f.response.body : f.response._data = await f.response[h]();
    return f.options.onResponse && await f.options.onResponse(f), !f.options.ignoreResponseError && f.response.status >= 400 && f.response.status < 600 ? (f.options.onResponseError && await f.options.onResponseError(f), await i(f)) : f.response
  }, o = async function(a, u) {
    return (await s(a, u))._data
  };
  return o.raw = s, o.native = e, o.create = (l = {}) => Z_({
    ...t,
    defaults: {
      ...t.defaults,
      ...l
    }
  }), o
}
const Fh = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object")
  }(),
  ib = Fh.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  sb = Fh.Headers,
  ob = Fh.AbortController,
  lb = Z_({
    fetch: ib,
    Headers: sb,
    AbortController: ob
  }),
  ab = lb,
  ub = () => {
    var t;
    return ((t = window == null ? void 0 : window.__NUXT__) == null ? void 0 : t.config) || {}
  },
  iu = ub().app,
  cb = () => iu.baseURL,
  fb = () => iu.buildAssetsDir,
  hb = (...t) => Wu(e0(), fb(), ...t),
  e0 = (...t) => {
    const e = iu.cdnURL || iu.baseURL;
    return t.length ? Wu(e, ...t) : e
  };
globalThis.__buildAssetsURL = hb, globalThis.__publicAssetsURL = e0;

function tf(t, e = {}, n) {
  for (const r in t) {
    const i = t[r],
      s = n ? `${n}:${r}` : r;
    typeof i == "object" && i !== null ? tf(i, e, s) : typeof i == "function" && (e[s] = i)
  }
  return e
}
const db = {
    run: t => t()
  },
  pb = () => db,
  t0 = typeof console.createTask < "u" ? console.createTask : pb;

function gb(t, e) {
  const n = e.shift(),
    r = t0(n);
  return t.reduce((i, s) => i.then(() => r.run(() => s(...e))), Promise.resolve())
}

function _b(t, e) {
  const n = e.shift(),
    r = t0(n);
  return Promise.all(t.map(i => r.run(() => i(...e))))
}

function cc(t, e) {
  for (const n of [...t]) n(e)
}
class mb {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
  }
  hook(e, n, r = {}) {
    if (!e || typeof n != "function") return () => {};
    const i = e;
    let s;
    for (; this._deprecatedHooks[e];) s = this._deprecatedHooks[e], e = s.to;
    if (s && !r.allowDeprecated) {
      let o = s.message;
      o || (o = `${i} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o))
    }
    if (!n.name) try {
      Object.defineProperty(n, "name", {
        get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
        configurable: !0
      })
    } catch {}
    return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(n), () => {
      n && (this.removeHook(e, n), n = void 0)
    }
  }
  hookOnce(e, n) {
    let r, i = (...s) => (typeof r == "function" && r(), r = void 0, i = void 0, n(...s));
    return r = this.hook(e, i), r
  }
  removeHook(e, n) {
    if (this._hooks[e]) {
      const r = this._hooks[e].indexOf(n);
      r !== -1 && this._hooks[e].splice(r, 1), this._hooks[e].length === 0 && delete this._hooks[e]
    }
  }
  deprecateHook(e, n) {
    this._deprecatedHooks[e] = typeof n == "string" ? {
      to: n
    } : n;
    const r = this._hooks[e] || [];
    delete this._hooks[e];
    for (const i of r) this.hook(e, i)
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e);
    for (const n in e) this.deprecateHook(n, e[n])
  }
  addHooks(e) {
    const n = tf(e),
      r = Object.keys(n).map(i => this.hook(i, n[i]));
    return () => {
      for (const i of r.splice(0, r.length)) i()
    }
  }
  removeHooks(e) {
    const n = tf(e);
    for (const r in n) this.removeHook(r, n[r])
  }
  removeAllHooks() {
    for (const e in this._hooks) delete this._hooks[e]
  }
  callHook(e, ...n) {
    return n.unshift(e), this.callHookWith(gb, e, ...n)
  }
  callHookParallel(e, ...n) {
    return n.unshift(e), this.callHookWith(_b, e, ...n)
  }
  callHookWith(e, n, ...r) {
    const i = this._before || this._after ? {
      name: n,
      args: r,
      context: {}
    } : void 0;
    this._before && cc(this._before, i);
    const s = e(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise ? s.finally(() => {
      this._after && i && cc(this._after, i)
    }) : (this._after && i && cc(this._after, i), s)
  }
  beforeEach(e) {
    return this._before = this._before || [], this._before.push(e), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(e);
        n !== -1 && this._before.splice(n, 1)
      }
    }
  }
  afterEach(e) {
    return this._after = this._after || [], this._after.push(e), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(e);
        n !== -1 && this._after.splice(n, 1)
      }
    }
  }
}

function n0() {
  return new mb
}

function yb(t = {}) {
  let e, n = !1;
  const r = o => {
    if (e && e !== o) throw new Error("Context conflict")
  };
  let i;
  if (t.asyncContext) {
    const o = t.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    o ? i = new o : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
  }
  const s = () => {
    if (i && e === void 0) {
      const o = i.getStore();
      if (o !== void 0) return o
    }
    return e
  };
  return {
    use: () => {
      const o = s();
      if (o === void 0) throw new Error("Context is not available");
      return o
    },
    tryUse: () => s(),
    set: (o, l) => {
      l || r(o), e = o, n = !0
    },
    unset: () => {
      e = void 0, n = !1
    },
    call: (o, l) => {
      r(o), e = o;
      try {
        return i ? i.run(o, l) : l()
      } finally {
        n || (e = void 0)
      }
    },
    async callAsync(o, l) {
      e = o;
      const a = () => {
          e = o
        },
        u = () => e === o ? a : void 0;
      nf.add(u);
      try {
        const f = i ? i.run(o, l) : l();
        return n || (e = void 0), await f
      } finally {
        nf.delete(u)
      }
    }
  }
}

function Db(t = {}) {
  const e = {};
  return {
    get(n, r = {}) {
      return e[n] || (e[n] = yb({
        ...t,
        ...r
      })), e[n], e[n]
    }
  }
}
const su = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
  np = "__unctx__",
  vb = su[np] || (su[np] = Db()),
  bb = (t, e = {}) => vb.get(t, e),
  rp = "__unctx_async_handlers__",
  nf = su[rp] || (su[rp] = new Set);

function ou(t) {
  const e = [];
  for (const i of nf) {
    const s = i();
    s && e.push(s)
  }
  const n = () => {
    for (const i of e) i()
  };
  let r = t();
  return r && typeof r == "object" && "catch" in r && (r = r.catch(i => {
    throw n(), i
  })), [r, n]
}
const r0 = bb("nuxt-app"),
  xb = "__nuxt_plugin";

function wb(t) {
  let e = 0;
  const n = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.6.5"
      },
      get vue() {
        return n.vueApp.version
      }
    },
    payload: Xr({
      data: {},
      state: {},
      _errors: {},
      ...window.__NUXT__ ?? {}
    }),
    static: {
      data: {}
    },
    runWithContext: i => Tb(n, i),
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      e++;
      let i = !1;
      return () => {
        if (!i && (i = !0, e--, e === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...t
  };
  n.hooks = n0(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (i, s) => {
    const o = "$" + i;
    fa(n, o, s), fa(n.vueApp.config.globalProperties, o, s)
  }, fa(n.vueApp, "$nuxt", n), fa(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener("nuxt.preloadError", s => {
      n.callHook("app:chunkError", {
        error: s.payload
      })
    }), window.useNuxtApp = window.useNuxtApp || nt;
    const i = n.hook("app:error", (...s) => {
      console.error("[nuxt] error caught during app initialization", ...s)
    });
    n.hook("app:mounted", i)
  }
  const r = Xr(n.payload.config);
  return n.provide("config", r), n
}
async function Cb(t, e) {
  if (e.hooks && t.hooks.addHooks(e.hooks), typeof e == "function") {
    const {
      provide: n
    } = await t.runWithContext(() => e(t)) || {};
    if (n && typeof n == "object")
      for (const r in n) t.provide(r, n[r])
  }
}
async function Eb(t, e) {
  const n = [],
    r = [];
  for (const i of e) {
    const s = Cb(t, i);
    i.parallel ? n.push(s.catch(o => r.push(o))) : await s
  }
  if (await Promise.all(n), r.length) throw r[0]
} /*! @__NO_SIDE_EFFECTS__ */
function Ds(t) {
  return typeof t == "function" ? t : (delete t.name, Object.assign(t.setup || (() => {}), t, {
    [xb]: !0
  }))
}

function Tb(t, e, n) {
  const r = () => n ? e(...n) : e();
  return r0.set(t), t.vueApp.runWithContext(r)
} /*! @__NO_SIDE_EFFECTS__ */
function nt() {
  var e;
  let t;
  if (A_() && (t = (e = ys()) == null ? void 0 : e.appContext.app.$nuxt), t = t || r0.tryUse(), !t) throw new Error("[nuxt] instance unavailable");
  return t
} /*! @__NO_SIDE_EFFECTS__ */
function i0() {
  return nt().$config
}

function fa(t, e, n) {
  Object.defineProperty(t, e, {
    get: () => n
  })
}
const Sb = "modulepreload",
  Pb = function(t, e) {
    return t.startsWith(".") ? new URL(t, e).href : t
  },
  ip = {},
  kb = function(e, n, r) {
    if (!n || n.length === 0) return e();
    const i = document.getElementsByTagName("link");
    return Promise.all(n.map(s => {
      if (s = Pb(s, r), s in ip) return;
      ip[s] = !0;
      const o = s.endsWith(".css"),
        l = o ? '[rel="stylesheet"]' : "";
      if (!!r)
        for (let f = i.length - 1; f >= 0; f--) {
          const h = i[f];
          if (h.href === s && (!o || h.rel === "stylesheet")) return
        } else if (document.querySelector(`link[href="${s}"]${l}`)) return;
      const u = document.createElement("link");
      if (u.rel = o ? "stylesheet" : Sb, o || (u.as = "script", u.crossOrigin = ""), u.href = s, document.head.appendChild(u), o) return new Promise((f, h) => {
        u.addEventListener("load", f), u.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${s}`)))
      })
    })).then(() => e())
  },
  Vi = (...t) => kb(...t).catch(e => {
    const n = new Event("nuxt.preloadError");
    throw n.payload = e, window.dispatchEvent(n), e
  }),
  Fb = -1,
  Ab = -2,
  Rb = -3,
  Mb = -4,
  Ob = -5,
  Lb = -6;

function Nb(t, e) {
  return Bb(JSON.parse(t), e)
}

function Bb(t, e) {
  if (typeof t == "number") return i(t, !0);
  if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
  const n = t,
    r = Array(n.length);

  function i(s, o = !1) {
    if (s === Fb) return;
    if (s === Rb) return NaN;
    if (s === Mb) return 1 / 0;
    if (s === Ob) return -1 / 0;
    if (s === Lb) return -0;
    if (o) throw new Error("Invalid input");
    if (s in r) return r[s];
    const l = n[s];
    if (!l || typeof l != "object") r[s] = l;
    else if (Array.isArray(l))
      if (typeof l[0] == "string") {
        const a = l[0],
          u = e == null ? void 0 : e[a];
        if (u) return r[s] = u(i(l[1]));
        switch (a) {
          case "Date":
            r[s] = new Date(l[1]);
            break;
          case "Set":
            const f = new Set;
            r[s] = f;
            for (let c = 1; c < l.length; c += 1) f.add(i(l[c]));
            break;
          case "Map":
            const h = new Map;
            r[s] = h;
            for (let c = 1; c < l.length; c += 2) h.set(i(l[c]), i(l[c + 1]));
            break;
          case "RegExp":
            r[s] = new RegExp(l[1], l[2]);
            break;
          case "Object":
            r[s] = Object(l[1]);
            break;
          case "BigInt":
            r[s] = BigInt(l[1]);
            break;
          case "null":
            const d = Object.create(null);
            r[s] = d;
            for (let c = 1; c < l.length; c += 2) d[l[c]] = i(l[c + 1]);
            break;
          default:
            throw new Error(`Unknown type ${a}`)
        }
      } else {
        const a = new Array(l.length);
        r[s] = a;
        for (let u = 0; u < l.length; u += 1) {
          const f = l[u];
          f !== Ab && (a[u] = i(f))
        }
      }
    else {
      const a = {};
      r[s] = a;
      for (const u in l) {
        const f = l[u];
        a[u] = i(f)
      }
    }
    return r[s]
  }
  return i(0)
}

function Ib(t) {
  return Array.isArray(t) ? t : [t]
}
const $b = ["title", "script", "style", "noscript"],
  Ma = ["base", "meta", "link", "style", "script", "noscript"],
  Hb = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
  zb = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
  sp = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent"],
  Wb = typeof window < "u";

function s0(t) {
  let e = 9;
  for (let n = 0; n < t.length;) e = Math.imul(e ^ t.charCodeAt(n++), 9 ** 9);
  return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function op(t) {
  return t._h || s0(t._d ? t._d : `${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)
}

function o0(t, e) {
  const {
    props: n,
    tag: r
  } = t;
  if (zb.includes(r)) return r;
  if (r === "link" && n.rel === "canonical") return "canonical";
  if (n.charset) return "charset";
  const i = ["id"];
  r === "meta" && i.push("name", "property", "http-equiv");
  for (const s of i)
    if (typeof n[s] < "u") {
      const o = String(n[s]);
      return e && !e(o) ? !1 : `${r}:${s}:${o}`
    } return !1
}

function lp(t, e) {
  return t == null ? e || null : typeof t == "function" ? t(e) : t
}

function rf(t, e) {
  const n = [],
    r = e.resolveKeyData || (s => s.key),
    i = e.resolveValueData || (s => s.value);
  for (const [s, o] of Object.entries(t)) n.push(...(Array.isArray(o) ? o : [o]).map(l => {
    const a = {
        key: s,
        value: l
      },
      u = i(a);
    return typeof u == "object" ? rf(u, e) : Array.isArray(u) ? u : {
      [typeof e.key == "function" ? e.key(a) : e.key]: r(a),
      [typeof e.value == "function" ? e.value(a) : e.value]: u
    }
  }).flat());
  return n
}

function l0(t, e) {
  return Object.entries(t).map(([n, r]) => {
    if (typeof r == "object" && (r = l0(r, e)), e.resolve) {
      const i = e.resolve({
        key: n,
        value: r
      });
      if (i) return i
    }
    return typeof r == "number" && (r = r.toString()), typeof r == "string" && e.wrapValue && (r = r.replace(new RegExp(e.wrapValue, "g"), `\\${e.wrapValue}`), r = `${e.wrapValue}${r}${e.wrapValue}`), `${n}${e.keyValueSeparator||""}${r}`
  }).join(e.entrySeparator || "")
}
const Ah = {
    robots: {
      unpack: {
        keyValueSeparator: ":"
      }
    },
    contentSecurityPolicy: {
      unpack: {
        keyValueSeparator: " ",
        entrySeparator: "; "
      },
      metaKey: "http-equiv"
    },
    fbAppId: {
      keyValue: "fb:app_id",
      metaKey: "property"
    },
    ogSiteName: {
      keyValue: "og:site_name"
    },
    msapplicationTileImage: {
      keyValue: "msapplication-TileImage"
    },
    msapplicationTileColor: {
      keyValue: "msapplication-TileColor"
    },
    msapplicationConfig: {
      keyValue: "msapplication-Config"
    },
    charset: {
      metaKey: "charset"
    },
    contentType: {
      metaKey: "http-equiv"
    },
    defaultStyle: {
      metaKey: "http-equiv"
    },
    xUaCompatible: {
      metaKey: "http-equiv"
    },
    refresh: {
      metaKey: "http-equiv"
    }
  },
  jb = /^(og|twitter|fb)/,
  Ub = /^(og|fb)/;

function Vb(t) {
  var e;
  return Ub.test(t) ? "property" : ((e = Ah[t]) == null ? void 0 : e.metaKey) || "name"
}

function Yb(t) {
  var e;
  return ((e = Ah[t]) == null ? void 0 : e.keyValue) || lu(t)
}

function lu(t) {
  return t = t.replace(/([A-Z])/g, "-$1").toLowerCase(), jb.test(t) && (t = t.replace("secure-url", "secure_url").replace(/-/g, ":")), t
}

function sf(t) {
  if (Array.isArray(t)) return t.map(n => sf(n));
  if (typeof t != "object" || Array.isArray(t)) return t;
  const e = {};
  for (const [n, r] of Object.entries(t)) e[lu(n)] = sf(r);
  return e
}

function Xb(t, e) {
  const n = Ah[e];
  return e === "refresh" ? `${t.seconds};url=${t.url}` : l0(sf(t), {
    entrySeparator: ", ",
    keyValueSeparator: "=",
    resolve({
      value: r,
      key: i
    }) {
      if (r === null) return "";
      if (typeof r == "boolean") return `${i}`
    },
    ...n == null ? void 0 : n.unpack
  })
}
const Kb = ["og:Image", "og:Video", "og:Audio", "twitter:Image"],
  qb = ["themeColor"];

function _P(t) {
  const e = [];
  Kb.forEach(r => {
    const i = r.toLowerCase(),
      s = `${r.replace(":","")}`,
      o = t[s];
    typeof o == "object" && ((Array.isArray(o) ? o : [o]).forEach(l => {
      if (!l) return;
      const a = rf(l, {
        key: r.startsWith("og") ? "property" : "name",
        value: "content",
        resolveKeyData({
          key: u
        }) {
          return lu(`${i}${u!=="url"?`:${u}`:""}`)
        },
        resolveValueData({
          value: u
        }) {
          return typeof u == "number" ? u.toString() : u
        }
      });
      e.push(...a.sort((u, f) => u.property === i ? -1 : f.property === i ? 1 : 0))
    }), delete t[s])
  }), qb.forEach(r => {
    if (t[r] && typeof t[r] != "string") {
      const i = Array.isArray(t[r]) ? t[r] : [t[r]];
      delete t[r], i.forEach(s => {
        e.push({
          name: lu(r),
          ...s
        })
      })
    }
  });
  const n = rf(t, {
    key({
      key: r
    }) {
      return Vb(r)
    },
    value({
      key: r
    }) {
      return r === "charset" ? "charset" : "content"
    },
    resolveKeyData({
      key: r
    }) {
      return Yb(r)
    },
    resolveValueData({
      value: r,
      key: i
    }) {
      return r === null ? "_null" : typeof r == "object" ? Xb(r, i) : typeof r == "number" ? r.toString() : r
    }
  });
  return [...e, ...n].filter(r => typeof r.content > "u" || r.content !== "_null")
}
async function Gb(t, e, n) {
  const r = {
    tag: t,
    props: {}
  };
  return e instanceof Promise && (e = await e), t === "templateParams" ? (r.props = e, r) : ["title", "titleTemplate"].includes(t) ? (e && typeof e == "object" ? (r.textContent = e.textContent, e.tagPriority && (r.tagPriority = e.tagPriority)) : r.textContent = e, r) : typeof e == "string" ? ["script", "noscript", "style"].includes(t) ? (t === "script" && (/^(https?:)?\/\//.test(e) || e.startsWith("/")) ? r.props.src = e : r.innerHTML = e, r) : !1 : (e.body && (e.tagPosition = "bodyClose", delete e.body), e.children && (e.innerHTML = e.children, delete e.children), r.props = await Jb({
    ...e
  }), Object.keys(r.props).filter(i => sp.includes(i)).forEach(i => {
    (!["innerHTML", "textContent"].includes(i) || $b.includes(r.tag)) && (r[i] = r.props[i]), delete r.props[i]
  }), sp.forEach(i => {
    !r[i] && n[i] && (r[i] = n[i])
  }), ["innerHTML", "textContent"].forEach(i => {
    if (r.tag === "script" && typeof r[i] == "string" && ["application/ld+json", "application/json"].includes(r.props.type)) try {
      r[i] = JSON.parse(r[i])
    } catch {
      r[i] = ""
    }
    typeof r[i] == "object" && (r[i] = JSON.stringify(r[i]))
  }), r.props.class && (r.props.class = Qb(r.props.class)), r.props.content && Array.isArray(r.props.content) ? r.props.content.map(i => ({
    ...r,
    props: {
      ...r.props,
      content: i
    }
  })) : r)
}

function Qb(t) {
  return typeof t == "object" && !Array.isArray(t) && (t = Object.keys(t).filter(e => t[e])), (Array.isArray(t) ? t.join(" ") : t).split(" ").filter(e => e.trim()).filter(Boolean).join(" ")
}
async function Jb(t) {
  for (const e of Object.keys(t)) {
    const n = e.startsWith("data-");
    t[e] instanceof Promise && (t[e] = await t[e]), String(t[e]) === "true" ? t[e] = n ? "true" : "" : String(t[e]) === "false" && (n ? t[e] = "false" : delete t[e])
  }
  return t
}
const Zb = 10;
async function ex(t) {
  const e = [];
  return Object.entries(t.resolvedInput).filter(([n, r]) => typeof r < "u" && Hb.includes(n)).forEach(([n, r]) => {
    const i = Ib(r);
    e.push(...i.map(s => Gb(n, s, t)).flat())
  }), (await Promise.all(e)).flat().filter(Boolean).map((n, r) => (n._e = t._i, t.mode && (n._m = t.mode), n._p = (t._i << Zb) + r, n))
}
const ap = {
    base: -1,
    title: 1
  },
  up = {
    critical: -8,
    high: -1,
    low: 2
  };

function au(t) {
  let e = 10;
  const n = t.tagPriority;
  return typeof n == "number" ? n : (t.tag === "meta" ? (t.props.charset && (e = -2), t.props["http-equiv"] === "content-security-policy" && (e = 0)) : t.tag === "link" && t.props.rel === "preconnect" ? e = 2 : t.tag in ap && (e = ap[t.tag]), typeof n == "string" && n in up ? e + up[n] : e)
}
const tx = [{
  prefix: "before:",
  offset: -1
}, {
  prefix: "after:",
  offset: 1
}];

function Co(t, e) {
  if (typeof t != "string") return t;

  function n(o) {
    if (["s", "pageTitle"].includes(o)) return e.pageTitle;
    let l;
    return o.includes(".") ? l = o.split(".").reduce((a, u) => a && a[u] || void 0, e) : l = e[o], typeof l < "u" ? l || "" : !1
  }
  let r = t;
  try {
    r = decodeURI(t)
  } catch {}(r.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(o => {
    const l = n(o.slice(1));
    typeof l == "string" && (t = t.replace(new RegExp(`\\${o}(\\W|$)`, "g"), (a, u) => `${l}${u}`).trim())
  });
  const s = e.separator;
  return t.includes(s) && (t.endsWith(s) && (t = t.slice(0, -s.length).trim()), t.startsWith(s) && (t = t.slice(s.length).trim()), t = t.replace(new RegExp(`\\${s}\\s*\\${s}`, "g"), s)), t
}

function nx(t) {
  const e = {
    tag: t.tagName.toLowerCase(),
    props: t.getAttributeNames().reduce((n, r) => ({
      ...n,
      [r]: t.getAttribute(r)
    }), {}),
    innerHTML: t.innerHTML
  };
  return e._d = o0(e), e
}
async function rx(t, e = {}) {
  var f;
  const n = e.document || t.resolvedOptions.document;
  if (!n) return;
  const r = (await t.resolveTags()).map(h => ({
      tag: h,
      id: Ma.includes(h.tag) ? op(h) : h.tag,
      shouldRender: !0
    })),
    i = {
      shouldRender: !0,
      tags: r
    };
  if (await t.hooks.callHook("dom:beforeRender", i), !i.shouldRender) return;
  let s = t._dom;
  if (!s) {
    s = {
      elMap: {
        htmlAttrs: n.documentElement,
        bodyAttrs: n.body
      }
    };
    for (const h of ["body", "head"]) {
      const d = (f = n == null ? void 0 : n[h]) == null ? void 0 : f.children;
      for (const c of [...d].filter(p => Ma.includes(p.tagName.toLowerCase()))) s.elMap[c.getAttribute("data-hid") || op(nx(c))] = c
    }
  }
  s.pendingSideEffects = {
    ...s.sideEffects || {}
  }, s.sideEffects = {};

  function o(h, d, c) {
    const p = `${h}:${d}`;
    s.sideEffects[p] = c, delete s.pendingSideEffects[p]
  }

  function l({
    id: h,
    $el: d,
    tag: c
  }) {
    const p = c.tag.endsWith("Attrs");
    s.elMap[h] = d, p || (["textContent", "innerHTML"].forEach(g => {
      c[g] && c[g] !== d[g] && (d[g] = c[g])
    }), o(h, "el", () => {
      s.elMap[h].remove(), delete s.elMap[h]
    })), Object.entries(c.props).forEach(([g, D]) => {
      D = String(D);
      const m = `attr:${g}`;
      if (g === "class")
        for (const _ of (D || "").split(" ").filter(Boolean)) p && o(h, `${m}:${_}`, () => d.classList.remove(_)), !d.classList.contains(_) && d.classList.add(_);
      else d.getAttribute(g) !== D && d.setAttribute(g, D), p && o(h, m, () => d.removeAttribute(g))
    })
  }
  const a = [],
    u = {
      bodyClose: void 0,
      bodyOpen: void 0,
      head: void 0
    };
  for (const h of r) {
    const {
      tag: d,
      shouldRender: c,
      id: p
    } = h;
    if (c) {
      if (d.tag === "title") {
        n.title = d.textContent;
        continue
      }
      h.$el = h.$el || s.elMap[p], h.$el ? l(h) : Ma.includes(d.tag) && a.push(h)
    }
  }
  for (const h of a) {
    const d = h.tag.tagPosition || "head";
    h.$el = n.createElement(h.tag.tag), l(h), u[d] = u[d] || n.createDocumentFragment(), u[d].appendChild(h.$el)
  }
  for (const h of r) await t.hooks.callHook("dom:renderTag", h, n, o);
  u.head && n.head.appendChild(u.head), u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild), u.bodyClose && n.body.appendChild(u.bodyClose), Object.values(s.pendingSideEffects).forEach(h => h()), t._dom = s, await t.hooks.callHook("dom:rendered", {
    renders: r
  })
}
async function ix(t, e = {}) {
  const n = e.delayFn || (r => setTimeout(r, 10));
  return t._domUpdatePromise = t._domUpdatePromise || new Promise(r => n(async () => {
    await rx(t, e), delete t._domUpdatePromise, r()
  }))
}

function sx(t) {
  return e => {
    var r, i;
    const n = ((i = (r = e.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
    return n && e.push(JSON.parse(n)), {
      mode: "client",
      hooks: {
        "entries:updated": function(s) {
          ix(s, t)
        }
      }
    }
  }
}
const ox = ["templateParams", "htmlAttrs", "bodyAttrs"],
  lx = {
    hooks: {
      "tag:normalise": function({
        tag: t
      }) {
        ["hid", "vmid", "key"].forEach(r => {
          t.props[r] && (t.key = t.props[r], delete t.props[r])
        });
        const n = o0(t) || (t.key ? `${t.tag}:${t.key}` : !1);
        n && (t._d = n)
      },
      "tags:resolve": function(t) {
        const e = {};
        t.tags.forEach(r => {
          const i = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
            s = e[i];
          if (s) {
            let l = r == null ? void 0 : r.tagDuplicateStrategy;
            if (!l && ox.includes(r.tag) && (l = "merge"), l === "merge") {
              const a = s.props;
              ["class", "style"].forEach(u => {
                r.props[u] && a[u] && (u === "style" && !a[u].endsWith(";") && (a[u] += ";"), r.props[u] = `${a[u]} ${r.props[u]}`)
              }), e[i].props = {
                ...a,
                ...r.props
              };
              return
            } else if (r._e === s._e) {
              s._duped = s._duped || [], r._d = `${s._d}:${s._duped.length+1}`, s._duped.push(r);
              return
            } else if (au(r) > au(s)) return
          }
          const o = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
          if (Ma.includes(r.tag) && o === 0) {
            delete e[i];
            return
          }
          e[i] = r
        });
        const n = [];
        Object.values(e).forEach(r => {
          const i = r._duped;
          delete r._duped, n.push(r), i && n.push(...i)
        }), t.tags = n
      }
    }
  },
  ax = t => ({
    mode: "server",
    hooks: {
      "tags:resolve": function(e) {
        const n = {};
        e.tags.filter(r => ["titleTemplate", "templateParams"].includes(r.tag) && r._m === "server").forEach(r => {
          n[r.tag] = r.tag === "titleTemplate" ? r.textContent : r.props
        }), Object.keys(n).length && e.tags.push({
          tag: "script",
          innerHTML: JSON.stringify(n),
          props: {
            type: "text/javascript",
            id: "unhead:payload"
          }
        })
      }
    }
  }),
  cp = ["script", "link", "bodyAttrs"];

function fp(t) {
  const e = {},
    n = {};
  return Object.entries(t.props).forEach(([r, i]) => {
    r.startsWith("on") && typeof i == "function" ? n[r] = i : e[r] = i
  }), {
    props: e,
    eventHandlers: n
  }
}
const ux = {
    hooks: {
      "ssr:render": function(t) {
        t.tags = t.tags.map(e => (!cp.includes(e.tag) || !Object.entries(e.props).find(([n, r]) => n.startsWith("on") && typeof r == "function") || (e.props = fp(e).props), e))
      },
      "tags:resolve": function(t) {
        t.tags = t.tags.map(e => {
          if (!cp.includes(e.tag)) return e;
          const {
            props: n,
            eventHandlers: r
          } = fp(e);
          return Object.keys(r).length && (e.props = n, e._eventHandlers = r), e
        })
      },
      "dom:renderTag": function(t, e, n) {
        if (!t.tag._eventHandlers) return;
        const r = t.tag.tag === "bodyAttrs" ? e.defaultView : t.$el;
        Object.entries(t.tag._eventHandlers).forEach(([i, s]) => {
          const o = `${t.tag._d||t.tag._p}:${i}`,
            l = i.slice(2).toLowerCase(),
            a = `data-h-${l}`;
          if (n(t.id, o, () => {}), t.$el.hasAttribute(a)) return;
          const u = s;
          t.$el.setAttribute(a, ""), r.addEventListener(l, u), t.entry && n(t.id, o, () => {
            r.removeEventListener(l, u), t.$el.removeAttribute(a)
          })
        })
      }
    }
  },
  cx = ["link", "style", "script", "noscript"],
  fx = {
    hooks: {
      "tag:normalise": ({
        tag: t
      }) => {
        t.key && cx.includes(t.tag) && (t.props["data-hid"] = t._h = s0(t.key))
      }
    }
  },
  hx = {
    hooks: {
      "tags:resolve": t => {
        const e = n => {
          var r;
          return (r = t.tags.find(i => i._d === n)) == null ? void 0 : r._p
        };
        for (const {
            prefix: n,
            offset: r
          }
          of tx)
          for (const i of t.tags.filter(s => typeof s.tagPriority == "string" && s.tagPriority.startsWith(n))) {
            const s = e(i.tagPriority.replace(n, ""));
            typeof s < "u" && (i._p = s + r)
          }
        t.tags.sort((n, r) => n._p - r._p).sort((n, r) => au(n) - au(r))
      }
    }
  },
  dx = {
    hooks: {
      "tags:resolve": t => {
        var s;
        const {
          tags: e
        } = t, n = (s = e.find(o => o.tag === "title")) == null ? void 0 : s.textContent, r = e.findIndex(o => o.tag === "templateParams"), i = r !== -1 ? e[r].props : {};
        i.separator = i.separator || "|", i.pageTitle = Co(i.pageTitle || n || "", i);
        for (const o of e)
          if (["titleTemplate", "title"].includes(o.tag) && typeof o.textContent == "string") o.textContent = Co(o.textContent, i);
          else if (o.tag === "meta" && typeof o.props.content == "string") o.props.content = Co(o.props.content, i);
        else if (o.tag === "link" && typeof o.props.href == "string") o.props.href = Co(o.props.href, i);
        else if (o.tag === "script" && ["application/json", "application/ld+json"].includes(o.props.type) && typeof o.innerHTML == "string") try {
          o.innerHTML = JSON.stringify(JSON.parse(o.innerHTML), (l, a) => typeof a == "string" ? Co(a, i) : a)
        } catch {}
        t.tags = e.filter(o => o.tag !== "templateParams")
      }
    }
  },
  px = {
    hooks: {
      "tags:resolve": t => {
        const {
          tags: e
        } = t;
        let n = e.findIndex(i => i.tag === "titleTemplate");
        const r = e.findIndex(i => i.tag === "title");
        if (r !== -1 && n !== -1) {
          const i = lp(e[n].textContent, e[r].textContent);
          i !== null ? e[r].textContent = i || e[r].textContent : delete e[r]
        } else if (n !== -1) {
          const i = lp(e[n].textContent);
          i !== null && (e[n].textContent = i, e[n].tag = "title", n = -1)
        }
        n !== -1 && delete e[n], t.tags = e.filter(Boolean)
      }
    }
  };
let a0;

function gx(t = {}) {
  const e = _x(t);
  return e.use(sx()), a0 = e
}

function hp(t, e) {
  return !t || t === "server" && e || t === "client" && !e
}

function _x(t = {}) {
  const e = n0();
  e.addHooks(t.hooks || {}), t.document = t.document || (Wb ? document : void 0);
  const n = !t.document;
  t.plugins = [lx, ax, ux, fx, hx, dx, px, ...(t == null ? void 0 : t.plugins) || []];
  const r = () => e.callHook("entries:updated", o);
  let i = 0,
    s = [];
  const o = {
    resolvedOptions: t,
    hooks: e,
    headEntries() {
      return s
    },
    use(l) {
      const a = typeof l == "function" ? l(o) : l;
      hp(a.mode, n) && e.addHooks(a.hooks || {})
    },
    push(l, a) {
      const u = {
        _i: i++,
        input: l,
        ...a
      };
      return hp(u.mode, n) && (s.push(u), r()), {
        dispose() {
          s = s.filter(f => f._i !== u._i), e.callHook("entries:updated", o), r()
        },
        patch(f) {
          s = s.map(h => (h._i === u._i && (h.input = u.input = f), h)), r()
        }
      }
    },
    async resolveTags() {
      const l = {
        tags: [],
        entries: [...s]
      };
      await e.callHook("entries:resolve", l);
      for (const a of l.entries) {
        const u = a.resolvedInput || a.input;
        if (a.resolvedInput = await (a.transform ? a.transform(u) : u), a.resolvedInput)
          for (const f of await ex(a)) {
            const h = {
              tag: f,
              entry: a,
              resolvedOptions: o.resolvedOptions
            };
            await e.callHook("tag:normalise", h), l.tags.push(h.tag)
          }
      }
      return await e.callHook("tags:beforeResolve", l), await e.callHook("tags:resolve", l), l.tags
    },
    ssr: n
  };
  return t.plugins.forEach(l => o.use(l)), o.hooks.callHook("init", o), o
}

function mx() {
  return a0
}
const yx = Y_.startsWith("3");

function Dx(t) {
  return typeof t == "function" ? t() : Be(t)
}

function uu(t, e = "") {
  if (t instanceof Promise) return t;
  const n = Dx(t);
  return !t || !n ? n : Array.isArray(n) ? n.map(r => uu(r, e)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, i]) => r === "titleTemplate" || r.startsWith("on") ? [r, Be(i)] : [r, uu(i, r)])) : n
}
const vx = {
    hooks: {
      "entries:resolve": function(t) {
        for (const e of t.entries) e.resolvedInput = uu(e.input)
      }
    }
  },
  u0 = "usehead";

function bx(t) {
  return {
    install(n) {
      yx && (n.config.globalProperties.$unhead = t, n.config.globalProperties.$head = t, n.provide(u0, t))
    }
  }.install
}

function xx(t = {}) {
  t.domDelayFn = t.domDelayFn || (n => ms(() => n()));
  const e = gx(t);
  return e.use(vx), e.install = bx(e), e
}

function wx() {
  return ys() && sn(u0) || mx()
}

function mP(t, e = {}) {
  const n = wx();
  if (n) return n.ssr ? n.push(t, e) : Cx(n, t, e)
}

function Cx(t, e, n = {}) {
  const r = rn(!1),
    i = rn({});
  JD(() => {
    i.value = r.value ? {} : uu(e)
  });
  const s = t.push(i.value, n);
  return Ji(i, l => {
    s.patch(l)
  }), ys() && (mo(() => {
    s.dispose()
  }), b_(() => {
    r.value = !0
  }), v_(() => {
    r.value = !1
  })), s
}
const Ex = {
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }, {
      hid: "og:site_name",
      property: "og:site_name",
      content: ""
    }],
    link: [{
      rel: "icon",
      type: "image/png",
      href: "/favicon.png"
    }],
    style: [],
    script: [],
    noscript: [],
    title: "FACE TO FACE",
    htmlAttrs: {
      lang: "en"
    }
  },
  Tx = !1,
  of = !1,
  Sx = !1,
  Px = "__nuxt",
  kx = !0;
async function Fx(t) {
  try {
    return kx ? c0(await fetch(t).then(e => e.text())) : await Vi(() => import(t), [], import.meta.url).then(e => e.default || e)
  } catch (e) {
    console.warn("[nuxt] Cannot load payload ", t, e)
  }
  return null
}
let ha = null;
async function Ax() {
  if (ha) return ha;
  const t = document.getElementById("__NUXT_DATA__");
  if (!t) return {};
  const e = c0(t.textContent || ""),
    n = t.dataset.src ? await Fx(t.dataset.src) : void 0;
  return ha = {
    ...e,
    ...n,
    ...window.__NUXT__
  }, ha
}

function c0(t) {
  return Nb(t, nt()._payloadRevivers)
}

function Rx(t, e) {
  nt()._payloadRevivers[t] = e
}

function fc(t) {
  return t !== null && typeof t == "object"
}

function lf(t, e, n = ".", r) {
  if (!fc(e)) return lf(t, {}, n, r);
  const i = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor") continue;
    const o = t[s];
    o != null && (r && r(i, s, o, n) || (Array.isArray(o) && Array.isArray(i[s]) ? i[s] = [...o, ...i[s]] : fc(o) && fc(i[s]) ? i[s] = lf(o, i[s], (n ? `${n}.` : "") + s.toString(), r) : i[s] = o))
  }
  return i
}

function Mx(t) {
  return (...e) => e.reduce((n, r) => lf(n, r, "", t), {})
}
const Ox = Mx();
class af extends Error {
  constructor(e, n = {}) {
    super(e, n), this.statusCode = 500, this.fatal = !1, this.unhandled = !1, n.cause && !this.cause && (this.cause = n.cause)
  }
  toJSON() {
    const e = {
      message: this.message,
      statusCode: cf(this.statusCode, 500)
    };
    return this.statusMessage && (e.statusMessage = f0(this.statusMessage)), this.data !== void 0 && (e.data = this.data), e
  }
}
af.__h3_error__ = !0;

function uf(t) {
  if (typeof t == "string") return new af(t);
  if (Lx(t)) return t;
  const e = new af(t.message ?? t.statusMessage ?? "", {
    cause: t.cause || t
  });
  if ("stack" in t) try {
    Object.defineProperty(e, "stack", {
      get() {
        return t.stack
      }
    })
  } catch {
    try {
      e.stack = t.stack
    } catch {}
  }
  if (t.data && (e.data = t.data), t.statusCode ? e.statusCode = cf(t.statusCode, e.statusCode) : t.status && (e.statusCode = cf(t.status, e.statusCode)), t.statusMessage ? e.statusMessage = t.statusMessage : t.statusText && (e.statusMessage = t.statusText), e.statusMessage) {
    const n = e.statusMessage;
    f0(e.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
  }
  return t.fatal !== void 0 && (e.fatal = t.fatal), t.unhandled !== void 0 && (e.unhandled = t.unhandled), e
}

function Lx(t) {
  var e;
  return ((e = t == null ? void 0 : t.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const Nx = /[^\u0009\u0020-\u007E]/g;

function f0(t = "") {
  return t.replace(Nx, "")
}

function cf(t, e = 200) {
  return !t || (typeof t == "string" && (t = Number.parseInt(t, 10)), t < 100 || t > 999) ? e : t
}
const Bx = "$s";

function Ix(...t) {
  const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
  typeof t[0] != "string" && t.unshift(e);
  const [n, r] = t;
  if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
  const i = Bx + n,
    s = nt(),
    o = Ru(s.payload.state, i);
  if (o.value === void 0 && r) {
    const l = r();
    if (Et(l)) return s.payload.state[i] = l, l;
    o.value = l
  }
  return o
}
const h0 = Symbol("layout-meta"),
  ql = Symbol("route"),
  vs = () => {
    var t;
    return (t = nt()) == null ? void 0 : t.$router
  },
  Uu = () => A_() ? sn(ql, nt()._route) : nt()._route; /*! @__NO_SIDE_EFFECTS__ */
const $x = () => {
    try {
      if (nt()._processingMiddleware) return !0
    } catch {
      return !0
    }
    return !1
  },
  Hx = (t, e) => {
    t || (t = "/");
    const n = typeof t == "string" ? t : Q_(t.path || "/", t.query || {}) + (t.hash || "");
    if (e != null && e.open) {
      {
        const {
          target: l = "_blank",
          windowFeatures: a = {}
        } = e.open, u = Object.entries(a).filter(([f, h]) => h !== void 0).map(([f, h]) => `${f.toLowerCase()}=${h}`).join(", ");
        open(n, l, u)
      }
      return Promise.resolve()
    }
    const r = (e == null ? void 0 : e.external) || Kl(n, {
      acceptRelative: !0
    });
    if (r && !(e != null && e.external)) throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
    if (r && ju(n).protocol === "script:") throw new Error("Cannot navigate to an URL with script protocol.");
    const i = $x();
    if (!r && i) return t;
    const s = vs(),
      o = nt();
    return r ? (e != null && e.replace ? location.replace(n) : location.href = n, i ? o.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : e != null && e.replace ? s.replace(t) : s.push(t)
  },
  Vu = () => Ru(nt().payload, "error"),
  Rs = t => {
    const e = Yu(t);
    try {
      const n = nt(),
        r = Vu();
      n.hooks.callHook("app:error", e), r.value = r.value || e
    } catch {
      throw e
    }
    return e
  },
  zx = async (t = {}) => {
    const e = nt(),
      n = Vu();
    e.callHook("app:error:cleared", t), t.redirect && await vs().replace(t.redirect), n.value = null
  }, Wx = t => !!(t && typeof t == "object" && "__nuxt_error" in t), Yu = t => {
    const e = uf(t);
    return e.__nuxt_error = !0, e
  }, dp = {
    NuxtError: t => Yu(t),
    EmptyShallowRef: t => bl(t === "_" ? void 0 : t === "0n" ? BigInt(0) : JSON.parse(t)),
    EmptyRef: t => rn(t === "_" ? void 0 : t === "0n" ? BigInt(0) : JSON.parse(t)),
    ShallowRef: t => bl(t),
    ShallowReactive: t => Vl(t),
    Ref: t => rn(t),
    Reactive: t => Xr(t)
  }, jx = Ds({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(t) {
      let e, n;
      for (const r in dp) Rx(r, dp[r]);
      Object.assign(t.payload, ([e, n] = ou(() => t.runWithContext(Ax)), e = await e, n(), e)), window.__NUXT__ = t.payload
    }
  });
/*!
 * vue-router v4.2.4
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const Ps = typeof window < "u";

function Ux(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module"
}
const Ue = Object.assign;

function hc(t, e) {
  const n = {};
  for (const r in e) {
    const i = e[r];
    n[r] = pr(i) ? i.map(t) : t(i)
  }
  return n
}
const Qo = () => {},
  pr = Array.isArray,
  Vx = /\/$/,
  Yx = t => t.replace(Vx, "");

function dc(t, e, n = "/") {
  let r, i = {},
    s = "",
    o = "";
  const l = e.indexOf("#");
  let a = e.indexOf("?");
  return l < a && l >= 0 && (a = -1), a > -1 && (r = e.slice(0, a), s = e.slice(a + 1, l > -1 ? l : e.length), i = t(s)), l > -1 && (r = r || e.slice(0, l), o = e.slice(l, e.length)), r = Gx(r ?? e, n), {
    fullPath: r + (s && "?") + s + o,
    path: r,
    query: i,
    hash: o
  }
}

function Xx(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "")
}

function pp(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}

function Kx(t, e, n) {
  const r = e.matched.length - 1,
    i = n.matched.length - 1;
  return r > -1 && r === i && ro(e.matched[r], n.matched[i]) && d0(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}

function ro(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}

function d0(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t)
    if (!qx(t[n], e[n])) return !1;
  return !0
}

function qx(t, e) {
  return pr(t) ? gp(t, e) : pr(e) ? gp(e, t) : t === e
}

function gp(t, e) {
  return pr(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e
}

function Gx(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"),
    r = t.split("/"),
    i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let s = n.length - 1,
    o, l;
  for (o = 0; o < r.length; o++)
    if (l = r[o], l !== ".")
      if (l === "..") s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + r.slice(o - (o === r.length ? 1 : 0)).join("/")
}
var Sl;
(function(t) {
  t.pop = "pop", t.push = "push"
})(Sl || (Sl = {}));
var Jo;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = ""
})(Jo || (Jo = {}));

function Qx(t) {
  if (!t)
    if (Ps) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Yx(t)
}
const Jx = /^[^#]+#/;

function Zx(t, e) {
  return t.replace(Jx, "#") + e
}

function ew(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0)
  }
}
const Xu = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});

function tw(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      r = typeof n == "string" && n.startsWith("#"),
      i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    e = ew(i, t)
  } else e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}

function _p(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const ff = new Map;

function nw(t, e) {
  ff.set(t, e)
}

function rw(t) {
  const e = ff.get(t);
  return ff.delete(t), e
}
let iw = () => location.protocol + "//" + location.host;

function p0(t, e) {
  const {
    pathname: n,
    search: r,
    hash: i
  } = e, s = t.indexOf("#");
  if (s > -1) {
    let l = i.includes(t.slice(s)) ? t.slice(s).length : 1,
      a = i.slice(l);
    return a[0] !== "/" && (a = "/" + a), pp(a, "")
  }
  return pp(n, t) + r + i
}

function sw(t, e, n, r) {
  let i = [],
    s = [],
    o = null;
  const l = ({
    state: d
  }) => {
    const c = p0(t, location),
      p = n.value,
      g = e.value;
    let D = 0;
    if (d) {
      if (n.value = c, e.value = d, o && o === p) {
        o = null;
        return
      }
      D = g ? d.position - g.position : 0
    } else r(c);
    i.forEach(m => {
      m(n.value, p, {
        delta: D,
        type: Sl.pop,
        direction: D ? D > 0 ? Jo.forward : Jo.back : Jo.unknown
      })
    })
  };

  function a() {
    o = n.value
  }

  function u(d) {
    i.push(d);
    const c = () => {
      const p = i.indexOf(d);
      p > -1 && i.splice(p, 1)
    };
    return s.push(c), c
  }

  function f() {
    const {
      history: d
    } = window;
    d.state && d.replaceState(Ue({}, d.state, {
      scroll: Xu()
    }), "")
  }

  function h() {
    for (const d of s) d();
    s = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", f)
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", f, {
    passive: !0
  }), {
    pauseListeners: a,
    listen: u,
    destroy: h
  }
}

function mp(t, e, n, r = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? Xu() : null
  }
}

function ow(t) {
  const {
    history: e,
    location: n
  } = window, r = {
    value: p0(t, n)
  }, i = {
    value: e.state
  };
  i.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: e.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function s(a, u, f) {
    const h = t.indexOf("#"),
      d = h > -1 ? (n.host && document.querySelector("base") ? t : t.slice(h)) + a : iw() + t + a;
    try {
      e[f ? "replaceState" : "pushState"](u, "", d), i.value = u
    } catch (c) {
      console.error(c), n[f ? "replace" : "assign"](d)
    }
  }

  function o(a, u) {
    const f = Ue({}, e.state, mp(i.value.back, a, i.value.forward, !0), u, {
      position: i.value.position
    });
    s(a, f, !0), r.value = a
  }

  function l(a, u) {
    const f = Ue({}, i.value, e.state, {
      forward: a,
      scroll: Xu()
    });
    s(f.current, f, !0);
    const h = Ue({}, mp(r.value, a, null), {
      position: f.position + 1
    }, u);
    s(a, h, !1), r.value = a
  }
  return {
    location: r,
    state: i,
    push: l,
    replace: o
  }
}

function g0(t) {
  t = Qx(t);
  const e = ow(t),
    n = sw(t, e.state, e.location, e.replace);

  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s)
  }
  const i = Ue({
    location: "",
    base: t,
    go: r,
    createHref: Zx.bind(null, t)
  }, e, n);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i
}

function lw(t) {
  return t = location.host ? t || location.pathname + location.search : "", t.includes("#") || (t += "#"), g0(t)
}

function aw(t) {
  return typeof t == "string" || t && typeof t == "object"
}

function _0(t) {
  return typeof t == "string" || typeof t == "symbol"
}
const Dr = {
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
  m0 = Symbol("");
var yp;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated"
})(yp || (yp = {}));

function io(t, e) {
  return Ue(new Error, {
    type: t,
    [m0]: !0
  }, e)
}

function Ar(t, e) {
  return t instanceof Error && m0 in t && (e == null || !!(t.type & e))
}
const Dp = "[^/]+?",
  uw = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  cw = /[.+*?^${}()[\]/\\]/g;

function fw(t, e) {
  const n = Ue({}, uw, e),
    r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const u of t) {
    const f = u.length ? [] : [90];
    n.strict && !u.length && (i += "/");
    for (let h = 0; h < u.length; h++) {
      const d = u[h];
      let c = 40 + (n.sensitive ? .25 : 0);
      if (d.type === 0) h || (i += "/"), i += d.value.replace(cw, "\\$&"), c += 40;
      else if (d.type === 1) {
        const {
          value: p,
          repeatable: g,
          optional: D,
          regexp: m
        } = d;
        s.push({
          name: p,
          repeatable: g,
          optional: D
        });
        const _ = m || Dp;
        if (_ !== Dp) {
          c += 10;
          try {
            new RegExp(`(${_})`)
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + y.message)
          }
        }
        let v = g ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        h || (v = D && u.length < 2 ? `(?:/${v})` : "/" + v), D && (v += "?"), i += v, c += 20, D && (c += -8), g && (c += -20), _ === ".*" && (c += -50)
      }
      f.push(c)
    }
    r.push(f)
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += .7000000000000001
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");

  function l(u) {
    const f = u.match(o),
      h = {};
    if (!f) return null;
    for (let d = 1; d < f.length; d++) {
      const c = f[d] || "",
        p = s[d - 1];
      h[p.name] = c && p.repeatable ? c.split("/") : c
    }
    return h
  }

  function a(u) {
    let f = "",
      h = !1;
    for (const d of t) {
      (!h || !f.endsWith("/")) && (f += "/"), h = !1;
      for (const c of d)
        if (c.type === 0) f += c.value;
        else if (c.type === 1) {
        const {
          value: p,
          repeatable: g,
          optional: D
        } = c, m = p in u ? u[p] : "";
        if (pr(m) && !g) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const _ = pr(m) ? m.join("/") : m;
        if (!_)
          if (D) d.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : h = !0);
          else throw new Error(`Missing required param "${p}"`);
        f += _
      }
    }
    return f || "/"
  }
  return {
    re: o,
    score: r,
    keys: s,
    parse: l,
    stringify: a
  }
}

function hw(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length;) {
    const r = e[n] - t[n];
    if (r) return r;
    n++
  }
  return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}

function dw(t, e) {
  let n = 0;
  const r = t.score,
    i = e.score;
  for (; n < r.length && n < i.length;) {
    const s = hw(r[n], i[n]);
    if (s) return s;
    n++
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (vp(r)) return 1;
    if (vp(i)) return -1
  }
  return i.length - r.length
}

function vp(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0
}
const pw = {
    type: 0,
    value: ""
  },
  gw = /[a-zA-Z0-9_]/;

function _w(t) {
  if (!t) return [
    []
  ];
  if (t === "/") return [
    [pw]
  ];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

  function e(c) {
    throw new Error(`ERR (${n})/"${u}": ${c}`)
  }
  let n = 0,
    r = n;
  const i = [];
  let s;

  function o() {
    s && i.push(s), s = []
  }
  let l = 0,
    a, u = "",
    f = "";

  function h() {
    u && (n === 0 ? s.push({
      type: 0,
      value: u
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (a === "*" || a === "+") && e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: u,
      regexp: f,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : e("Invalid state to consume buffer"), u = "")
  }

  function d() {
    u += a
  }
  for (; l < t.length;) {
    if (a = t[l++], a === "\\" && n !== 2) {
      r = n, n = 4;
      continue
    }
    switch (n) {
      case 0:
        a === "/" ? (u && h(), o()) : a === ":" ? (h(), n = 1) : d();
        break;
      case 4:
        d(), n = r;
        break;
      case 1:
        a === "(" ? n = 2 : gw.test(a) ? d() : (h(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + a : n = 3 : f += a;
        break;
      case 3:
        h(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--, f = "";
        break;
      default:
        e("Unknown state");
        break
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${u}"`), h(), o(), i
}

function mw(t, e, n) {
  const r = fw(_w(t.path), n),
    i = Ue(r, {
      record: t,
      parent: e,
      children: [],
      alias: []
    });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
}

function yw(t, e) {
  const n = [],
    r = new Map;
  e = wp({
    strict: !1,
    end: !0,
    sensitive: !1
  }, e);

  function i(f) {
    return r.get(f)
  }

  function s(f, h, d) {
    const c = !d,
      p = Dw(f);
    p.aliasOf = d && d.record;
    const g = wp(e, f),
      D = [p];
    if ("alias" in f) {
      const v = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const y of v) D.push(Ue({}, p, {
        components: d ? d.record.components : p.components,
        path: y,
        aliasOf: d ? d.record : p
      }))
    }
    let m, _;
    for (const v of D) {
      const {
        path: y
      } = v;
      if (h && y[0] !== "/") {
        const b = h.record.path,
          S = b[b.length - 1] === "/" ? "" : "/";
        v.path = h.record.path + (y && S + y)
      }
      if (m = mw(v, h, g), d ? d.alias.push(m) : (_ = _ || m, _ !== m && _.alias.push(m), c && f.name && !xp(m) && o(f.name)), p.children) {
        const b = p.children;
        for (let S = 0; S < b.length; S++) s(b[S], m, d && d.children[S])
      }
      d = d || m, (m.record.components && Object.keys(m.record.components).length || m.record.name || m.record.redirect) && a(m)
    }
    return _ ? () => {
      o(_)
    } : Qo
  }

  function o(f) {
    if (_0(f)) {
      const h = r.get(f);
      h && (r.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o))
    } else {
      const h = n.indexOf(f);
      h > -1 && (n.splice(h, 1), f.record.name && r.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o))
    }
  }

  function l() {
    return n
  }

  function a(f) {
    let h = 0;
    for (; h < n.length && dw(f, n[h]) >= 0 && (f.record.path !== n[h].record.path || !y0(f, n[h]));) h++;
    n.splice(h, 0, f), f.record.name && !xp(f) && r.set(f.record.name, f)
  }

  function u(f, h) {
    let d, c = {},
      p, g;
    if ("name" in f && f.name) {
      if (d = r.get(f.name), !d) throw io(1, {
        location: f
      });
      g = d.record.name, c = Ue(bp(h.params, d.keys.filter(_ => !_.optional).map(_ => _.name)), f.params && bp(f.params, d.keys.map(_ => _.name))), p = d.stringify(c)
    } else if ("path" in f) p = f.path, d = n.find(_ => _.re.test(p)), d && (c = d.parse(p), g = d.record.name);
    else {
      if (d = h.name ? r.get(h.name) : n.find(_ => _.re.test(h.path)), !d) throw io(1, {
        location: f,
        currentLocation: h
      });
      g = d.record.name, c = Ue({}, h.params, f.params), p = d.stringify(c)
    }
    const D = [];
    let m = d;
    for (; m;) D.unshift(m.record), m = m.parent;
    return {
      name: g,
      path: p,
      params: c,
      matched: D,
      meta: bw(D)
    }
  }
  return t.forEach(f => s(f)), {
    addRoute: s,
    resolve: u,
    removeRoute: o,
    getRoutes: l,
    getRecordMatcher: i
  }
}

function bp(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n
}

function Dw(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: vw(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && {
      default: t.component
    }
  }
}

function vw(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else
    for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
  return e
}

function xp(t) {
  for (; t;) {
    if (t.record.aliasOf) return !0;
    t = t.parent
  }
  return !1
}

function bw(t) {
  return t.reduce((e, n) => Ue(e, n.meta), {})
}

function wp(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n
}

function y0(t, e) {
  return e.children.some(n => n === t || y0(t, n))
}
const D0 = /#/g,
  xw = /&/g,
  ww = /\//g,
  Cw = /=/g,
  Ew = /\?/g,
  v0 = /\+/g,
  Tw = /%5B/g,
  Sw = /%5D/g,
  b0 = /%5E/g,
  Pw = /%60/g,
  x0 = /%7B/g,
  kw = /%7C/g,
  w0 = /%7D/g,
  Fw = /%20/g;

function Rh(t) {
  return encodeURI("" + t).replace(kw, "|").replace(Tw, "[").replace(Sw, "]")
}

function Aw(t) {
  return Rh(t).replace(x0, "{").replace(w0, "}").replace(b0, "^")
}

function hf(t) {
  return Rh(t).replace(v0, "%2B").replace(Fw, "+").replace(D0, "%23").replace(xw, "%26").replace(Pw, "`").replace(x0, "{").replace(w0, "}").replace(b0, "^")
}

function Rw(t) {
  return hf(t).replace(Cw, "%3D")
}

function Mw(t) {
  return Rh(t).replace(D0, "%23").replace(Ew, "%3F")
}

function Ow(t) {
  return t == null ? "" : Mw(t).replace(ww, "%2F")
}

function cu(t) {
  try {
    return decodeURIComponent("" + t)
  } catch {}
  return "" + t
}

function Lw(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(v0, " "),
      o = s.indexOf("="),
      l = cu(o < 0 ? s : s.slice(0, o)),
      a = o < 0 ? null : cu(s.slice(o + 1));
    if (l in e) {
      let u = e[l];
      pr(u) || (u = e[l] = [u]), u.push(a)
    } else e[l] = a
  }
  return e
}

function Cp(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (n = Rw(n), r == null) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue
    }(pr(r) ? r.map(s => s && hf(s)) : [r && hf(r)]).forEach(s => {
      s !== void 0 && (e += (e.length ? "&" : "") + n, s != null && (e += "=" + s))
    })
  }
  return e
}

function Nw(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = pr(r) ? r.map(i => i == null ? null : "" + i) : r == null ? r : "" + r)
  }
  return e
}
const Bw = Symbol(""),
  Ep = Symbol(""),
  Mh = Symbol(""),
  Oh = Symbol(""),
  df = Symbol("");

function Eo() {
  let t = [];

  function e(r) {
    return t.push(r), () => {
      const i = t.indexOf(r);
      i > -1 && t.splice(i, 1)
    }
  }

  function n() {
    t = []
  }
  return {
    add: e,
    list: () => t.slice(),
    reset: n
  }
}

function ui(t, e, n, r, i) {
  const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((o, l) => {
    const a = h => {
        h === !1 ? l(io(4, {
          from: n,
          to: e
        })) : h instanceof Error ? l(h) : aw(h) ? l(io(2, {
          from: e,
          to: h
        })) : (s && r.enterCallbacks[i] === s && typeof h == "function" && s.push(h), o())
      },
      u = t.call(r && r.instances[i], e, n, a);
    let f = Promise.resolve(u);
    t.length < 3 && (f = f.then(a)), f.catch(h => l(h))
  })
}

function pc(t, e, n, r) {
  const i = [];
  for (const s of t)
    for (const o in s.components) {
      let l = s.components[o];
      if (!(e !== "beforeRouteEnter" && !s.instances[o]))
        if (Iw(l)) {
          const u = (l.__vccOpts || l)[e];
          u && i.push(ui(u, n, r, s, o))
        } else {
          let a = l();
          i.push(() => a.then(u => {
            if (!u) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));
            const f = Ux(u) ? u.default : u;
            s.components[o] = f;
            const d = (f.__vccOpts || f)[e];
            return d && ui(d, n, r, s, o)()
          }))
        }
    }
  return i
}

function Iw(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function Tp(t) {
  const e = sn(Mh),
    n = sn(Oh),
    r = Zt(() => e.resolve(Be(t.to))),
    i = Zt(() => {
      const {
        matched: a
      } = r.value, {
        length: u
      } = a, f = a[u - 1], h = n.matched;
      if (!f || !h.length) return -1;
      const d = h.findIndex(ro.bind(null, f));
      if (d > -1) return d;
      const c = Sp(a[u - 2]);
      return u > 1 && Sp(f) === c && h[h.length - 1].path !== c ? h.findIndex(ro.bind(null, a[u - 2])) : d
    }),
    s = Zt(() => i.value > -1 && Ww(n.params, r.value.params)),
    o = Zt(() => i.value > -1 && i.value === n.matched.length - 1 && d0(n.params, r.value.params));

  function l(a = {}) {
    return zw(a) ? e[Be(t.replace) ? "replace" : "push"](Be(t.to)).catch(Qo) : Promise.resolve()
  }
  return {
    route: r,
    href: Zt(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: l
  }
}
const $w = nr({
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
    useLink: Tp,
    setup(t, {
      slots: e
    }) {
      const n = Xr(Tp(t)),
        {
          options: r
        } = sn(Mh),
        i = Zt(() => ({
          [Pp(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [Pp(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const s = e.default && e.default(n);
        return t.custom ? s : ln("a", {
          "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: i.value
        }, s)
      }
    }
  }),
  Hw = $w;

function zw(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}

function Ww(t, e) {
  for (const n in e) {
    const r = e[n],
      i = t[n];
    if (typeof r == "string") {
      if (r !== i) return !1
    } else if (!pr(i) || i.length !== r.length || r.some((s, o) => s !== i[o])) return !1
  }
  return !0
}

function Sp(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const Pp = (t, e, n) => t ?? e ?? n,
  jw = nr({
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
    setup(t, {
      attrs: e,
      slots: n
    }) {
      const r = sn(df),
        i = Zt(() => t.route || r.value),
        s = sn(Ep, 0),
        o = Zt(() => {
          let u = Be(s);
          const {
            matched: f
          } = i.value;
          let h;
          for (;
            (h = f[u]) && !h.components;) u++;
          return u
        }),
        l = Zt(() => i.value.matched[o.value]);
      es(Ep, Zt(() => o.value + 1)), es(Bw, l), es(df, i);
      const a = rn();
      return Ji(() => [a.value, l.value, t.name], ([u, f, h], [d, c, p]) => {
        f && (f.instances[h] = u, c && c !== f && u && u === d && (f.leaveGuards.size || (f.leaveGuards = c.leaveGuards), f.updateGuards.size || (f.updateGuards = c.updateGuards))), u && f && (!c || !ro(f, c) || !d) && (f.enterCallbacks[h] || []).forEach(g => g(u))
      }, {
        flush: "post"
      }), () => {
        const u = i.value,
          f = t.name,
          h = l.value,
          d = h && h.components[f];
        if (!d) return kp(n.default, {
          Component: d,
          route: u
        });
        const c = h.props[f],
          p = c ? c === !0 ? u.params : typeof c == "function" ? c(u) : c : null,
          D = ln(d, Ue({}, p, e, {
            onVnodeUnmounted: m => {
              m.component.isUnmounted && (h.instances[f] = null)
            },
            ref: a
          }));
        return kp(n.default, {
          Component: D,
          route: u
        }) || D
      }
    }
  });

function kp(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n
}
const C0 = jw;

function Uw(t) {
  const e = yw(t.routes, t),
    n = t.parseQuery || Lw,
    r = t.stringifyQuery || Cp,
    i = t.history,
    s = Eo(),
    o = Eo(),
    l = Eo(),
    a = bl(Dr);
  let u = Dr;
  Ps && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const f = hc.bind(null, N => "" + N),
    h = hc.bind(null, Ow),
    d = hc.bind(null, cu);

  function c(N, q) {
    let G, ne;
    return _0(N) ? (G = e.getRecordMatcher(N), ne = q) : ne = N, e.addRoute(ne, G)
  }

  function p(N) {
    const q = e.getRecordMatcher(N);
    q && e.removeRoute(q)
  }

  function g() {
    return e.getRoutes().map(N => N.record)
  }

  function D(N) {
    return !!e.getRecordMatcher(N)
  }

  function m(N, q) {
    if (q = Ue({}, q || a.value), typeof N == "string") {
      const P = dc(n, N, q.path),
        O = e.resolve({
          path: P.path
        }, q),
        V = i.createHref(P.fullPath);
      return Ue(P, O, {
        params: d(O.params),
        hash: cu(P.hash),
        redirectedFrom: void 0,
        href: V
      })
    }
    let G;
    if ("path" in N) G = Ue({}, N, {
      path: dc(n, N.path, q.path).path
    });
    else {
      const P = Ue({}, N.params);
      for (const O in P) P[O] == null && delete P[O];
      G = Ue({}, N, {
        params: h(P)
      }), q.params = h(q.params)
    }
    const ne = e.resolve(G, q),
      me = N.hash || "";
    ne.params = f(d(ne.params));
    const x = Xx(r, Ue({}, N, {
        hash: Aw(me),
        path: ne.path
      })),
      w = i.createHref(x);
    return Ue({
      fullPath: x,
      hash: me,
      query: r === Cp ? Nw(N.query) : N.query || {}
    }, ne, {
      redirectedFrom: void 0,
      href: w
    })
  }

  function _(N) {
    return typeof N == "string" ? dc(n, N, a.value.path) : Ue({}, N)
  }

  function v(N, q) {
    if (u !== N) return io(8, {
      from: q,
      to: N
    })
  }

  function y(N) {
    return E(N)
  }

  function b(N) {
    return y(Ue(_(N), {
      replace: !0
    }))
  }

  function S(N) {
    const q = N.matched[N.matched.length - 1];
    if (q && q.redirect) {
      const {
        redirect: G
      } = q;
      let ne = typeof G == "function" ? G(N) : G;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = _(ne) : {
        path: ne
      }, ne.params = {}), Ue({
        query: N.query,
        hash: N.hash,
        params: "path" in ne ? {} : N.params
      }, ne)
    }
  }

  function E(N, q) {
    const G = u = m(N),
      ne = a.value,
      me = N.state,
      x = N.force,
      w = N.replace === !0,
      P = S(G);
    if (P) return E(Ue(_(P), {
      state: typeof P == "object" ? Ue({}, me, P.state) : me,
      force: x,
      replace: w
    }), q || G);
    const O = G;
    O.redirectedFrom = q;
    let V;
    return !x && Kx(r, ne, G) && (V = io(16, {
      to: O,
      from: ne
    }), ie(ne, ne, !0, !1)), (V ? Promise.resolve(V) : M(O, ne)).catch(T => Ar(T) ? Ar(T, 2) ? T : R(T) : ee(T, O, ne)).then(T => {
      if (T) {
        if (Ar(T, 2)) return E(Ue({
          replace: w
        }, _(T.to), {
          state: typeof T.to == "object" ? Ue({}, me, T.to.state) : me,
          force: x
        }), q || O)
      } else T = L(O, ne, !0, w, me);
      return B(O, ne, T), T
    })
  }

  function C(N, q) {
    const G = v(N, q);
    return G ? Promise.reject(G) : Promise.resolve()
  }

  function A(N) {
    const q = fe.values().next().value;
    return q && typeof q.runWithContext == "function" ? q.runWithContext(N) : N()
  }

  function M(N, q) {
    let G;
    const [ne, me, x] = Vw(N, q);
    G = pc(ne.reverse(), "beforeRouteLeave", N, q);
    for (const P of ne) P.leaveGuards.forEach(O => {
      G.push(ui(O, N, q))
    });
    const w = C.bind(null, N, q);
    return G.push(w), xe(G).then(() => {
      G = [];
      for (const P of s.list()) G.push(ui(P, N, q));
      return G.push(w), xe(G)
    }).then(() => {
      G = pc(me, "beforeRouteUpdate", N, q);
      for (const P of me) P.updateGuards.forEach(O => {
        G.push(ui(O, N, q))
      });
      return G.push(w), xe(G)
    }).then(() => {
      G = [];
      for (const P of x)
        if (P.beforeEnter)
          if (pr(P.beforeEnter))
            for (const O of P.beforeEnter) G.push(ui(O, N, q));
          else G.push(ui(P.beforeEnter, N, q));
      return G.push(w), xe(G)
    }).then(() => (N.matched.forEach(P => P.enterCallbacks = {}), G = pc(x, "beforeRouteEnter", N, q), G.push(w), xe(G))).then(() => {
      G = [];
      for (const P of o.list()) G.push(ui(P, N, q));
      return G.push(w), xe(G)
    }).catch(P => Ar(P, 8) ? P : Promise.reject(P))
  }

  function B(N, q, G) {
    l.list().forEach(ne => A(() => ne(N, q, G)))
  }

  function L(N, q, G, ne, me) {
    const x = v(N, q);
    if (x) return x;
    const w = q === Dr,
      P = Ps ? history.state : {};
    G && (ne || w ? i.replace(N.fullPath, Ue({
      scroll: w && P && P.scroll
    }, me)) : i.push(N.fullPath, me)), a.value = N, ie(N, q, G, w), R()
  }
  let $;

  function z() {
    $ || ($ = i.listen((N, q, G) => {
      if (!De.listening) return;
      const ne = m(N),
        me = S(ne);
      if (me) {
        E(Ue(me, {
          replace: !0
        }), ne).catch(Qo);
        return
      }
      u = ne;
      const x = a.value;
      Ps && nw(_p(x.fullPath, G.delta), Xu()), M(ne, x).catch(w => Ar(w, 12) ? w : Ar(w, 2) ? (E(w.to, ne).then(P => {
        Ar(P, 20) && !G.delta && G.type === Sl.pop && i.go(-1, !1)
      }).catch(Qo), Promise.reject()) : (G.delta && i.go(-G.delta, !1), ee(w, ne, x))).then(w => {
        w = w || L(ne, x, !1), w && (G.delta && !Ar(w, 8) ? i.go(-G.delta, !1) : G.type === Sl.pop && Ar(w, 20) && i.go(-1, !1)), B(ne, x, w)
      }).catch(Qo)
    }))
  }
  let re = Eo(),
    j = Eo(),
    U;

  function ee(N, q, G) {
    R(N);
    const ne = j.list();
    return ne.length ? ne.forEach(me => me(N, q, G)) : console.error(N), Promise.reject(N)
  }

  function W() {
    return U && a.value !== Dr ? Promise.resolve() : new Promise((N, q) => {
      re.add([N, q])
    })
  }

  function R(N) {
    return U || (U = !N, z(), re.list().forEach(([q, G]) => N ? G(N) : q()), re.reset()), N
  }

  function ie(N, q, G, ne) {
    const {
      scrollBehavior: me
    } = t;
    if (!Ps || !me) return Promise.resolve();
    const x = !G && rw(_p(N.fullPath, 0)) || (ne || !G) && history.state && history.state.scroll || null;
    return ms().then(() => me(N, q, x)).then(w => w && tw(w)).catch(w => ee(w, N, q))
  }
  const ce = N => i.go(N);
  let ve;
  const fe = new Set,
    De = {
      currentRoute: a,
      listening: !0,
      addRoute: c,
      removeRoute: p,
      hasRoute: D,
      getRoutes: g,
      resolve: m,
      options: t,
      push: y,
      replace: b,
      go: ce,
      back: () => ce(-1),
      forward: () => ce(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: j.add,
      isReady: W,
      install(N) {
        const q = this;
        N.component("RouterLink", Hw), N.component("RouterView", C0), N.config.globalProperties.$router = q, Object.defineProperty(N.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => Be(a)
        }), Ps && !ve && a.value === Dr && (ve = !0, y(i.location).catch(me => {}));
        const G = {};
        for (const me in Dr) Object.defineProperty(G, me, {
          get: () => a.value[me],
          enumerable: !0
        });
        N.provide(Mh, q), N.provide(Oh, Vl(G)), N.provide(df, a);
        const ne = N.unmount;
        fe.add(N), N.unmount = function() {
          fe.delete(N), fe.size < 1 && (u = Dr, $ && $(), $ = null, a.value = Dr, ve = !1, U = !1), ne()
        }
      }
    };

  function xe(N) {
    return N.reduce((q, G) => q.then(() => A(G)), Promise.resolve())
  }
  return De
}

function Vw(t, e) {
  const n = [],
    r = [],
    i = [],
    s = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < s; o++) {
    const l = e.matched[o];
    l && (t.matched.find(u => ro(u, l)) ? r.push(l) : n.push(l));
    const a = t.matched[o];
    a && (e.matched.find(u => ro(u, a)) || i.push(a))
  }
  return [n, r, i]
}

function Yw() {
  return sn(Oh)
}
const Nn = Xr({
    isPreloaderVisible: !0,
    isTransitionFinish: !0,
    isTransitionStart: !1,
    scrollLenis: null,
    isMenuOpen: !1
  }),
  Zo = t => {
    t ? Nn.scrollLenis.stop() : Nn.scrollLenis.start()
  };

function Or(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function E0(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
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
var Bn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  so = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
  Lh, jt, at, qn = 1e8,
  qe = 1 / qn,
  pf = Math.PI * 2,
  Xw = pf / 4,
  Kw = 0,
  T0 = Math.sqrt,
  qw = Math.cos,
  Gw = Math.sin,
  kt = function(e) {
    return typeof e == "string"
  },
  ut = function(e) {
    return typeof e == "function"
  },
  qr = function(e) {
    return typeof e == "number"
  },
  Nh = function(e) {
    return typeof e > "u"
  },
  Fr = function(e) {
    return typeof e == "object"
  },
  _n = function(e) {
    return e !== !1
  },
  Bh = function() {
    return typeof window < "u"
  },
  da = function(e) {
    return ut(e) || kt(e)
  },
  S0 = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
  Ut = Array.isArray,
  gf = /(?:-?\.?\d|\.)+/gi,
  P0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Ms = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  gc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  k0 = /[+-]=-?[.\d]+/,
  F0 = /[^,'"\[\]\s]+/gi,
  Qw = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  st, Un, _f, Ih, In = {},
  fu = {},
  A0, R0 = function(e) {
    return (fu = hs(e, In)) && Vt
  },
  $h = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
  },
  hu = function(e, n) {
    return !n && console.warn(e)
  },
  M0 = function(e, n) {
    return e && (In[e] = n) && fu && (fu[e] = n) || In
  },
  Pl = function() {
    return 0
  },
  Jw = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
  },
  Oa = {
    suppressEvents: !0,
    kill: !1
  },
  Zw = {
    suppressEvents: !0
  },
  Hh = {},
  vi = [],
  mf = {},
  O0, An = {},
  _c = {},
  Fp = 30,
  La = [],
  zh = "",
  Wh = function(e) {
    var n = e[0],
      r, i;
    if (Fr(n) || ut(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
      for (i = La.length; i-- && !La[i].targetTest(n););
      r = La[i]
    }
    for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new im(e[i], r))) || e.splice(i, 1);
    return e
  },
  ts = function(e) {
    return e._gsap || Wh(Gn(e))[0]._gsap
  },
  L0 = function(e, n, r) {
    return (r = e[n]) && ut(r) ? e[n]() : Nh(r) && e.getAttribute && e.getAttribute(n) || r
  },
  mn = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
  },
  ht = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  Lt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  Us = function(e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
  },
  eC = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r;);
    return i < r
  },
  du = function() {
    var e = vi.length,
      n = vi.slice(0),
      r, i;
    for (mf = {}, vi.length = 0, r = 0; r < e; r++) i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
  },
  N0 = function(e, n, r, i) {
    vi.length && !jt && du(), e.render(n, r, i || jt && n < 0 && (e._initted || e._startAt)), vi.length && !jt && du()
  },
  B0 = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(F0).length < 2 ? n : kt(e) ? e.trim() : e
  },
  I0 = function(e) {
    return e
  },
  tr = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  tC = function(e) {
    return function(n, r) {
      for (var i in r) i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
  },
  hs = function(e, n) {
    for (var r in n) e[r] = n[r];
    return e
  },
  Ap = function t(e, n) {
    for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Fr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
  },
  pu = function(e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r
  },
  el = function(e) {
    var n = e.parent || st,
      r = e.keyframes ? tC(Ut(e.keyframes)) : tr;
    if (_n(e.inherit))
      for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
    return e
  },
  nC = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r];);
    return r < 0
  },
  $0 = function(e, n, r, i, s) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var o = e[i],
      l;
    if (s)
      for (l = n[s]; o && o[s] > l;) o = o._prev;
    return o ? (n._next = o._next, o._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = o, n.parent = n._dp = e, n
  },
  Ku = function(e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = n._prev,
      o = n._next;
    s ? s._next = o : e[r] === n && (e[r] = o), o ? o._prev = s : e[i] === n && (e[i] = s), n._next = n._prev = n.parent = null
  },
  Si = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
  },
  ns = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r;) r._dirty = 1, r = r.parent;
    return e
  },
  rC = function(e) {
    for (var n = e.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
    return e
  },
  yf = function(e, n, r, i) {
    return e._startAt && (jt ? e._startAt.revert(Oa) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
  },
  iC = function t(e) {
    return !e || e._ts && t(e.parent)
  },
  Rp = function(e) {
    return e._repeat ? oo(e._tTime, e = e.duration() + e._rDelay) * e : 0
  },
  oo = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
  },
  gu = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
  },
  qu = function(e) {
    return e._end = Lt(e._start + (e._tDur / Math.abs(e._ts || e._rts || qe) || 0))
  },
  Gu = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = Lt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), qu(e), r._dirty || ns(r, e)), e
  },
  H0 = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = gu(e.rawTime(), n), (!n._dur || Gl(0, n.totalDuration(), r) - n._tTime > qe) && n.render(r, !0)), ns(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration())
        for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
      e._zTime = -qe
    }
  },
  Cr = function(e, n, r, i) {
    return n.parent && Si(n), n._start = Lt((qr(r) ? r : r || e !== st ? jn(e, r, n) : e._time) + n._delay), n._end = Lt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), $0(e, n, "_first", "_last", e._sort ? "_start" : 0), Df(n) || (e._recent = n), i || H0(e, n), e._ts < 0 && Gu(e, e._tTime), e
  },
  z0 = function(e, n) {
    return (In.ScrollTrigger || $h("scrollTrigger", n)) && In.ScrollTrigger.create(n, e)
  },
  W0 = function(e, n, r, i, s) {
    if (Uh(e, n, s), !e._initted) return 1;
    if (!r && e._pt && !jt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && O0 !== Rn.frame) return vi.push(e), e._lazy = [s, i], 1
  },
  sC = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
  },
  Df = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
  },
  oC = function(e, n, r, i) {
    var s = e.ratio,
      o = n < 0 || !n && (!e._start && sC(e) && !(!e._initted && Df(e)) || (e._ts < 0 || e._dp._ts < 0) && !Df(e)) ? 0 : 1,
      l = e._rDelay,
      a = 0,
      u, f, h;
    if (l && e._repeat && (a = Gl(0, e._tDur, n), f = oo(a, l), e._yoyo && f & 1 && (o = 1 - o), f !== oo(e._tTime, l) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || jt || i || e._zTime === qe || !n && e._zTime) {
      if (!e._initted && W0(e, n, i, r, a)) return;
      for (h = e._zTime, e._zTime = n || (r ? qe : 0), r || (r = n && !h), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = a, u = e._pt; u;) u.r(o, u.d), u = u._next;
      n < 0 && yf(e, n, r, !0), e._onUpdate && !r && Qn(e, "onUpdate"), a && e._repeat && !r && e.parent && Qn(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === o && (o && Si(e, 1), !r && !jt && (Qn(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
    } else e._zTime || (e._zTime = n)
  },
  lC = function(e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r;) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next
      } else
        for (i = e._last; i && i._start >= r;) {
          if (i.data === "isPause" && i._start < n) return i;
          i = i._prev
        }
  },
  lo = function(e, n, r, i) {
    var s = e._repeat,
      o = Lt(n) || 0,
      l = e._tTime / e._tDur;
    return l && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : Lt(o * (s + 1) + e._rDelay * s) : o, l > 0 && !i && Gu(e, e._tTime = e._tDur * l), e.parent && qu(e), r || ns(e.parent, e), e
  },
  Mp = function(e) {
    return e instanceof gn ? ns(e) : lo(e, e._dur)
  },
  aC = {
    _start: 0,
    endTime: Pl,
    totalDuration: Pl
  },
  jn = function t(e, n, r) {
    var i = e.labels,
      s = e._recent || aC,
      o = e.duration() >= qn ? s.endTime(!1) : e._dur,
      l, a, u;
    return kt(n) && (isNaN(n) || n in i) ? (a = n.charAt(0), u = n.substr(-1) === "%", l = n.indexOf("="), a === "<" || a === ">" ? (l >= 0 && (n = n.replace(/=/, "")), (a === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (l < 0 ? s : r).totalDuration() / 100 : 1)) : l < 0 ? (n in i || (i[n] = o), i[n]) : (a = parseFloat(n.charAt(l - 1) + n.substr(l + 1)), u && r && (a = a / 100 * (Ut(r) ? r[0] : r).totalDuration()), l > 1 ? t(e, n.substr(0, l - 1), r) + a : o + a)) : n == null ? o : +n
  },
  tl = function(e, n, r) {
    var i = qr(n[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = n[s],
      l, a;
    if (i && (o.duration = n[1]), o.parent = r, e) {
      for (l = o, a = r; a && !("immediateRender" in l);) l = a.vars.defaults || {}, a = _n(a.vars.inherit) && a.parent;
      o.immediateRender = _n(l.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1]
    }
    return new _t(n[0], o, n[s + 1])
  },
  Fi = function(e, n) {
    return e || e === 0 ? n(e) : n
  },
  Gl = function(e, n, r) {
    return r < e ? e : r > n ? n : r
  },
  Wt = function(e, n) {
    return !kt(e) || !(n = Qw.exec(e)) ? "" : n[1]
  },
  uC = function(e, n, r) {
    return Fi(r, function(i) {
      return Gl(e, n, i)
    })
  },
  vf = [].slice,
  j0 = function(e, n) {
    return e && Fr(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Fr(e[0])) && !e.nodeType && e !== Un
  },
  cC = function(e, n, r) {
    return r === void 0 && (r = []), e.forEach(function(i) {
      var s;
      return kt(i) && !n || j0(i, 1) ? (s = r).push.apply(s, Gn(i)) : r.push(i)
    }) || r
  },
  Gn = function(e, n, r) {
    return at && !n && at.selector ? at.selector(e) : kt(e) && !r && (_f || !ao()) ? vf.call((n || Ih).querySelectorAll(e), 0) : Ut(e) ? cC(e, r) : j0(e) ? vf.call(e, 0) : e ? [e] : []
  },
  bf = function(e) {
    return e = Gn(e)[0] || hu("Invalid scope") || {},
      function(n) {
        var r = e.current || e.nativeElement || e;
        return Gn(n, r.querySelectorAll ? r : r === e ? hu("Invalid scope") || Ih.createElement("div") : e)
      }
  },
  U0 = function(e) {
    return e.sort(function() {
      return .5 - Math.random()
    })
  },
  V0 = function(e) {
    if (ut(e)) return e;
    var n = Fr(e) ? e : {
        each: e
      },
      r = rs(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      l = i > 0 && i < 1,
      a = isNaN(i) || l,
      u = n.axis,
      f = i,
      h = i;
    return kt(i) ? f = h = {
        center: .5,
        edges: .5,
        end: 1
      } [i] || 0 : !l && a && (f = i[0], h = i[1]),
      function(d, c, p) {
        var g = (p || n).length,
          D = o[g],
          m, _, v, y, b, S, E, C, A;
        if (!D) {
          if (A = n.grid === "auto" ? 0 : (n.grid || [1, qn])[1], !A) {
            for (E = -qn; E < (E = p[A++].getBoundingClientRect().left) && A < g;);
            A--
          }
          for (D = o[g] = [], m = a ? Math.min(A, g) * f - .5 : i % A, _ = A === qn ? 0 : a ? g * h / A - .5 : i / A | 0, E = 0, C = qn, S = 0; S < g; S++) v = S % A - m, y = _ - (S / A | 0), D[S] = b = u ? Math.abs(u === "y" ? y : v) : T0(v * v + y * y), b > E && (E = b), b < C && (C = b);
          i === "random" && U0(D), D.max = E - C, D.min = C, D.v = g = (parseFloat(n.amount) || parseFloat(n.each) * (A > g ? g - 1 : u ? u === "y" ? g / A : A : Math.max(A, g / A)) || 0) * (i === "edges" ? -1 : 1), D.b = g < 0 ? s - g : s, D.u = Wt(n.amount || n.each) || 0, r = r && g < 0 ? tm(r) : r
        }
        return g = (D[d] - D.min) / D.max || 0, Lt(D.b + (r ? r(g) : g) * D.v) + D.u
      }
  },
  xf = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
      var i = Lt(Math.round(parseFloat(r) / e) * e * n);
      return (i - i % 1) / n + (qr(r) ? 0 : Wt(r))
    }
  },
  Y0 = function(e, n) {
    var r = Ut(e),
      i, s;
    return !r && Fr(e) && (i = r = e.radius || qn, e.values ? (e = Gn(e.values), (s = !qr(e[0])) && (i *= i)) : e = xf(e.increment)), Fi(n, r ? ut(e) ? function(o) {
      return s = e(o), Math.abs(s - o) <= i ? s : o
    } : function(o) {
      for (var l = parseFloat(s ? o.x : o), a = parseFloat(s ? o.y : 0), u = qn, f = 0, h = e.length, d, c; h--;) s ? (d = e[h].x - l, c = e[h].y - a, d = d * d + c * c) : d = Math.abs(e[h] - l), d < u && (u = d, f = h);
      return f = !i || u <= i ? e[f] : o, s || f === o || qr(o) ? f : f + Wt(o)
    } : xf(e))
  },
  X0 = function(e, n, r, i) {
    return Fi(Ut(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
      return Ut(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
  },
  fC = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return function(i) {
      return n.reduce(function(s, o) {
        return o(s)
      }, i)
    }
  },
  hC = function(e, n) {
    return function(r) {
      return e(parseFloat(r)) + (n || Wt(r))
    }
  },
  dC = function(e, n, r) {
    return q0(e, n, 0, 1, r)
  },
  K0 = function(e, n, r) {
    return Fi(r, function(i) {
      return e[~~n(i)]
    })
  },
  pC = function t(e, n, r) {
    var i = n - e;
    return Ut(e) ? K0(e, t(0, e.length), n) : Fi(r, function(s) {
      return (i + (s - e) % i) % i + e
    })
  },
  gC = function t(e, n, r) {
    var i = n - e,
      s = i * 2;
    return Ut(e) ? K0(e, t(0, e.length - 1), n) : Fi(r, function(o) {
      return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o)
    })
  },
  kl = function(e) {
    for (var n = 0, r = "", i, s, o, l; ~(i = e.indexOf("random(", n));) o = e.indexOf(")", i), l = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(l ? F0 : gf), r += e.substr(n, i - n) + X0(l ? s : +s[0], l ? 0 : +s[1], +s[2] || 1e-5), n = o + 1;
    return r + e.substr(n, e.length - n)
  },
  q0 = function(e, n, r, i, s) {
    var o = n - e,
      l = i - r;
    return Fi(s, function(a) {
      return r + ((a - e) / o * l || 0)
    })
  },
  _C = function t(e, n, r, i) {
    var s = isNaN(e + n) ? 0 : function(c) {
      return (1 - c) * e + c * n
    };
    if (!s) {
      var o = kt(e),
        l = {},
        a, u, f, h, d;
      if (r === !0 && (i = 1) && (r = null), o) e = {
        p: e
      }, n = {
        p: n
      };
      else if (Ut(e) && !Ut(n)) {
        for (f = [], h = e.length, d = h - 2, u = 1; u < h; u++) f.push(t(e[u - 1], e[u]));
        h--, s = function(p) {
          p *= h;
          var g = Math.min(d, ~~p);
          return f[g](p - g)
        }, r = n
      } else i || (e = hs(Ut(e) ? [] : {}, e));
      if (!f) {
        for (a in n) jh.call(l, e, a, "get", n[a]);
        s = function(p) {
          return Xh(p, l) || (o ? e.p : e)
        }
      }
    }
    return Fi(r, s)
  },
  Op = function(e, n, r) {
    var i = e.labels,
      s = qn,
      o, l, a;
    for (o in i) l = i[o] - n, l < 0 == !!r && l && s > (l = Math.abs(l)) && (a = o, s = l);
    return a
  },
  Qn = function(e, n, r) {
    var i = e.vars,
      s = i[n],
      o = at,
      l = e._ctx,
      a, u, f;
    if (s) return a = i[n + "Params"], u = i.callbackScope || e, r && vi.length && du(), l && (at = l), f = a ? s.apply(u, a) : s.call(u), at = o, f
  },
  Lo = function(e) {
    return Si(e), e.scrollTrigger && e.scrollTrigger.kill(!!jt), e.progress() < 1 && Qn(e, "onInterrupt"), e
  },
  Os, G0 = [],
  Q0 = function(e) {
    if (Bh() && e) {
      e = !e.name && e.default || e;
      var n = e.name,
        r = ut(e),
        i = n && !r && e.init ? function() {
          this._props = []
        } : e,
        s = {
          init: Pl,
          render: Xh,
          add: jh,
          kill: RC,
          modifier: AC,
          rawVars: 0
        },
        o = {
          targetTest: 0,
          get: 0,
          getSetter: Yh,
          aliases: {},
          register: 0
        };
      if (ao(), e !== i) {
        if (An[n]) return;
        tr(i, tr(pu(e, s), o)), hs(i.prototype, hs(s, pu(e, o))), An[i.prop = n] = i, e.targetTest && (La.push(i), Hh[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
      }
      M0(n, i), e.register && e.register(Vt, i, yn)
    } else e && G0.push(e)
  },
  Xe = 255,
  No = {
    aqua: [0, Xe, Xe],
    lime: [0, Xe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Xe],
    navy: [0, 0, 128],
    white: [Xe, Xe, Xe],
    olive: [128, 128, 0],
    yellow: [Xe, Xe, 0],
    orange: [Xe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Xe, 0, 0],
    pink: [Xe, 192, 203],
    cyan: [0, Xe, Xe],
    transparent: [Xe, Xe, Xe, 0]
  },
  mc = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * Xe + .5 | 0
  },
  J0 = function(e, n, r) {
    var i = e ? qr(e) ? [e >> 16, e >> 8 & Xe, e & Xe] : 0 : No.black,
      s, o, l, a, u, f, h, d, c, p;
    if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), No[e]) i = No[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), l = e.charAt(3), e = "#" + s + s + o + o + l + l + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Xe, i & Xe, parseInt(e.substr(7), 16) / 255];
        e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Xe, e & Xe]
      } else if (e.substr(0, 3) === "hsl") {
        if (i = p = e.match(gf), !n) a = +i[0] % 360 / 360, u = +i[1] / 100, f = +i[2] / 100, o = f <= .5 ? f * (u + 1) : f + u - f * u, s = f * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = mc(a + 1 / 3, s, o), i[1] = mc(a, s, o), i[2] = mc(a - 1 / 3, s, o);
        else if (~e.indexOf("=")) return i = e.match(P0), r && i.length < 4 && (i[3] = 1), i
      } else i = e.match(gf) || No.transparent;
      i = i.map(Number)
    }
    return n && !p && (s = i[0] / Xe, o = i[1] / Xe, l = i[2] / Xe, h = Math.max(s, o, l), d = Math.min(s, o, l), f = (h + d) / 2, h === d ? a = u = 0 : (c = h - d, u = f > .5 ? c / (2 - h - d) : c / (h + d), a = h === s ? (o - l) / c + (o < l ? 6 : 0) : h === o ? (l - s) / c + 2 : (s - o) / c + 4, a *= 60), i[0] = ~~(a + .5), i[1] = ~~(u * 100 + .5), i[2] = ~~(f * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
  },
  Z0 = function(e) {
    var n = [],
      r = [],
      i = -1;
    return e.split(bi).forEach(function(s) {
      var o = s.match(Ms) || [];
      n.push.apply(n, o), r.push(i += o.length + 1)
    }), n.c = r, n
  },
  Lp = function(e, n, r) {
    var i = "",
      s = (e + i).match(bi),
      o = n ? "hsla(" : "rgba(",
      l = 0,
      a, u, f, h;
    if (!s) return e;
    if (s = s.map(function(d) {
        return (d = J0(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
      }), r && (f = Z0(e), a = r.c, a.join(i) !== f.c.join(i)))
      for (u = e.replace(bi, "1").split(Ms), h = u.length - 1; l < h; l++) i += u[l] + (~a.indexOf(l) ? s.shift() || o + "0,0,0,0)" : (f.length ? f : s.length ? s : r).shift());
    if (!u)
      for (u = e.split(bi), h = u.length - 1; l < h; l++) i += u[l] + s[l];
    return i + u[h]
  },
  bi = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in No) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi")
  }(),
  mC = /hsl[a]?\(/,
  em = function(e) {
    var n = e.join(" "),
      r;
    if (bi.lastIndex = 0, bi.test(n)) return r = mC.test(n), e[1] = Lp(e[1], r), e[0] = Lp(e[0], r, Z0(e[1])), !0
  },
  Fl, Rn = function() {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      s = 1e3 / 240,
      o = s,
      l = [],
      a, u, f, h, d, c, p = function g(D) {
        var m = t() - i,
          _ = D === !0,
          v, y, b, S;
        if (m > e && (r += m - n), i += m, b = i - r, v = b - o, (v > 0 || _) && (S = ++h.frame, d = b - h.time * 1e3, h.time = b = b / 1e3, o += v + (v >= s ? 4 : s - v), y = 1), _ || (a = u(g)), y)
          for (c = 0; c < l.length; c++) l[c](b, d, S, D)
      };
    return h = {
      time: 0,
      frame: 0,
      tick: function() {
        p(!0)
      },
      deltaRatio: function(D) {
        return d / (1e3 / (D || 60))
      },
      wake: function() {
        A0 && (!_f && Bh() && (Un = _f = window, Ih = Un.document || {}, In.gsap = Vt, (Un.gsapVersions || (Un.gsapVersions = [])).push(Vt.version), R0(fu || Un.GreenSockGlobals || !Un.gsap && Un || {}), f = Un.requestAnimationFrame, G0.forEach(Q0)), a && h.sleep(), u = f || function(D) {
          return setTimeout(D, o - h.time * 1e3 + 1 | 0)
        }, Fl = 1, p(2))
      },
      sleep: function() {
        (f ? Un.cancelAnimationFrame : clearTimeout)(a), Fl = 0, u = Pl
      },
      lagSmoothing: function(D, m) {
        e = D || 1 / 0, n = Math.min(m || 33, e)
      },
      fps: function(D) {
        s = 1e3 / (D || 240), o = h.time * 1e3 + s
      },
      add: function(D, m, _) {
        var v = m ? function(y, b, S, E) {
          D(y, b, S, E), h.remove(v)
        } : D;
        return h.remove(D), l[_ ? "unshift" : "push"](v), ao(), v
      },
      remove: function(D, m) {
        ~(m = l.indexOf(D)) && l.splice(m, 1) && c >= m && c--
      },
      _listeners: l
    }, h
  }(),
  ao = function() {
    return !Fl && Rn.wake()
  },
  Ie = {},
  yC = /^[\d.\-M][\d.\-,\s]/,
  DC = /["']/g,
  vC = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, l, a, u; s < o; s++) a = r[s], l = s !== o - 1 ? a.lastIndexOf(",") : a.length, u = a.substr(0, l), n[i] = isNaN(u) ? u.replace(DC, "").trim() : +u, i = a.substr(l + 1).trim();
    return n
  },
  bC = function(e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
  },
  xC = function(e) {
    var n = (e + "").split("("),
      r = Ie[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [vC(n[1])] : bC(e).split(",").map(B0)) : Ie._CE && yC.test(e) ? Ie._CE("", e) : r
  },
  tm = function(e) {
    return function(n) {
      return 1 - e(1 - n)
    }
  },
  nm = function t(e, n) {
    for (var r = e._first, i; r;) r instanceof gn ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
  },
  rs = function(e, n) {
    return e && (ut(e) ? e : Ie[e] || xC(e)) || n
  },
  bs = function(e, n, r, i) {
    r === void 0 && (r = function(a) {
      return 1 - n(1 - a)
    }), i === void 0 && (i = function(a) {
      return a < .5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2
    });
    var s = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
      },
      o;
    return mn(e, function(l) {
      Ie[l] = In[l] = s, Ie[o = l.toLowerCase()] = r;
      for (var a in s) Ie[o + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = Ie[l + "." + a] = s[a]
    }), s
  },
  rm = function(e) {
    return function(n) {
      return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
  },
  yc = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
      o = s / pf * (Math.asin(1 / i) || 0),
      l = function(f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Gw((f - o) * s) + 1
      },
      a = e === "out" ? l : e === "in" ? function(u) {
        return 1 - l(1 - u)
      } : rm(l);
    return s = pf / s, a.config = function(u, f) {
      return t(e, u, f)
    }, a
  },
  Dc = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
      },
      i = e === "out" ? r : e === "in" ? function(s) {
        return 1 - r(1 - s)
      } : rm(r);
    return i.config = function(s) {
      return t(e, s)
    }, i
  };
mn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  bs(t + ",Power" + (n - 1), e ? function(r) {
    return Math.pow(r, n)
  } : function(r) {
    return r
  }, function(r) {
    return 1 - Math.pow(1 - r, n)
  }, function(r) {
    return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
  })
});
Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn;
bs("Elastic", yc("in"), yc("out"), yc());
(function(t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    s = function(l) {
      return l < n ? t * l * l : l < r ? t * Math.pow(l - 1.5 / e, 2) + .75 : l < i ? t * (l -= 2.25 / e) * l + .9375 : t * Math.pow(l - 2.625 / e, 2) + .984375
    };
  bs("Bounce", function(o) {
    return 1 - s(1 - o)
  }, s)
})(7.5625, 2.75);
bs("Expo", function(t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0
});
bs("Circ", function(t) {
  return -(T0(1 - t * t) - 1)
});
bs("Sine", function(t) {
  return t === 1 ? 1 : -qw(t * Xw) + 1
});
bs("Back", Dc("in"), Dc("out"), Dc());
Ie.SteppedEase = Ie.steps = In.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e,
      i = e + (n ? 0 : 1),
      s = n ? 1 : 0,
      o = 1 - qe;
    return function(l) {
      return ((i * Gl(0, o, l) | 0) + s) * r
    }
  }
};
so.ease = Ie["quad.out"];
mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return zh += t + "," + t + "Params,"
});
var im = function(e, n) {
    this.id = Kw++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : L0, this.set = n ? n.getSetter : Yh
  },
  Al = function() {
    function t(n) {
      this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, lo(this, +n.duration, 1, 1), this.data = n.data, at && (this._ctx = at, at.data.push(this)), Fl || Rn.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
      return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
    }, e.duration = function(r) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }, e.totalDuration = function(r) {
      return arguments.length ? (this._dirty = 0, lo(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function(r, i) {
      if (ao(), !arguments.length) return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
        for (Gu(this, r), !s._dp || s.parent || H0(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Cr(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === qe || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), N0(this, r, i)), this
    }, e.time = function(r, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Rp(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }, e.totalProgress = function(r, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, e.progress = function(r, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Rp(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, e.iteration = function(r, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? oo(this._tTime, s) + 1 : 1
    }, e.timeScale = function(r) {
      if (!arguments.length) return this._rts === -qe ? 0 : this._rts;
      if (this._rts === r) return this;
      var i = this.parent && this._ts ? gu(this.parent._time, this) : this._tTime;
      return this._rts = +r || 0, this._ts = this._ps || r === -qe ? 0 : this._rts, this.totalTime(Gl(-Math.abs(this._delay), this._tDur, i), !0), qu(this), rC(this)
    }, e.paused = function(r) {
      return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ao(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== qe && (this._tTime -= qe)))), this) : this._ps
    }, e.startTime = function(r) {
      if (arguments.length) {
        this._start = r;
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && Cr(i, this, r - this._delay), this
      }
      return this._start
    }, e.endTime = function(r) {
      return this._start + (_n(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function(r) {
      var i = this.parent || this._dp;
      return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? gu(i.rawTime(r), this) : this._tTime : this._tTime
    }, e.revert = function(r) {
      r === void 0 && (r = Zw);
      var i = jt;
      return jt = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), jt = i, this
    }, e.globalTime = function(r) {
      for (var i = this, s = arguments.length ? r : i.rawTime(); i;) s = i._start + s / (i._ts || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : s
    }, e.repeat = function(r) {
      return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Mp(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function(r) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = r, Mp(this), i ? this.time(i) : this
      }
      return this._rDelay
    }, e.yoyo = function(r) {
      return arguments.length ? (this._yoyo = r, this) : this._yoyo
    }, e.seek = function(r, i) {
      return this.totalTime(jn(this, r), _n(i))
    }, e.restart = function(r, i) {
      return this.play().totalTime(r ? -this._delay : 0, _n(i))
    }, e.play = function(r, i) {
      return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
    }, e.reverse = function(r, i) {
      return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e.pause = function(r, i) {
      return r != null && this.seek(r, i), this.paused(!0)
    }, e.resume = function() {
      return this.paused(!1)
    }, e.reversed = function(r) {
      return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -qe : 0)), this) : this._rts < 0
    }, e.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -qe, this
    }, e.isActive = function() {
      var r = this.parent || this._dp,
        i = this._start,
        s;
      return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - qe)
    }, e.eventCallback = function(r, i, s) {
      var o = this.vars;
      return arguments.length > 1 ? (i ? (o[r] = i, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r]
    }, e.then = function(r) {
      var i = this;
      return new Promise(function(s) {
        var o = ut(r) ? r : I0,
          l = function() {
            var u = i.then;
            i.then = null, ut(o) && (o = o(i)) && (o.then || o === i) && (i.then = u), s(o), i.then = u
          };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l
      })
    }, e.kill = function() {
      Lo(this)
    }, t
  }();
tr(Al.prototype, {
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
  _zTime: -qe,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var gn = function(t) {
  E0(e, t);

  function e(r, i) {
    var s;
    return r === void 0 && (r = {}), s = t.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = _n(r.sortChildren), st && Cr(r.parent || st, Or(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && z0(Or(s), r.scrollTrigger), s
  }
  var n = e.prototype;
  return n.to = function(i, s, o) {
    return tl(0, arguments, this), this
  }, n.from = function(i, s, o) {
    return tl(1, arguments, this), this
  }, n.fromTo = function(i, s, o, l) {
    return tl(2, arguments, this), this
  }, n.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, el(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new _t(i, s, jn(this, o), 1), this
  }, n.call = function(i, s, o) {
    return Cr(this, _t.delayedCall(0, i, s), o)
  }, n.staggerTo = function(i, s, o, l, a, u, f) {
    return o.duration = s, o.stagger = o.stagger || l, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new _t(i, o, jn(this, a)), this
  }, n.staggerFrom = function(i, s, o, l, a, u, f) {
    return o.runBackwards = 1, el(o).immediateRender = _n(o.immediateRender), this.staggerTo(i, s, o, l, a, u, f)
  }, n.staggerFromTo = function(i, s, o, l, a, u, f, h) {
    return l.startAt = o, el(l).immediateRender = _n(l.immediateRender), this.staggerTo(i, s, l, a, u, f, h)
  }, n.render = function(i, s, o) {
    var l = this._time,
      a = this._dirty ? this.totalDuration() : this._tDur,
      u = this._dur,
      f = i <= 0 ? 0 : Lt(i),
      h = this._zTime < 0 != i < 0 && (this._initted || !u),
      d, c, p, g, D, m, _, v, y, b, S, E;
    if (this !== st && f > a && i >= 0 && (f = a), f !== this._tTime || o || h) {
      if (l !== this._time && u && (f += this._time - l, i += this._time - l), d = f, y = this._start, v = this._ts, m = !v, h && (u || (l = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (S = this._yoyo, D = u + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(D * 100 + i, s, o);
        if (d = Lt(f % D), f === a ? (g = this._repeat, d = u) : (g = ~~(f / D), g && g === f / D && (d = u, g--), d > u && (d = u)), b = oo(this._tTime, D), !l && this._tTime && b !== g && this._tTime - b * D - this._dur <= 0 && (b = g), S && g & 1 && (d = u - d, E = 1), g !== b && !this._lock) {
          var C = S && b & 1,
            A = C === (S && g & 1);
          if (g < b && (C = !C), l = C ? 0 : f % u ? u : f, this._lock = 1, this.render(l || (E ? 0 : Lt(g * D)), s, !u)._lock = 0, this._tTime = f, !s && this.parent && Qn(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1), l && l !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (u = this._dur, a = this._tDur, A && (this._lock = 2, l = C ? u : -1e-4, this.render(l, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !m) return this;
          nm(this, E)
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (_ = lC(this, Lt(l), Lt(d)), _ && (f -= d - (d = _._start))), this._tTime = f, this._time = d, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, l = 0), !l && d && !s && !g && (Qn(this, "onStart"), this._tTime !== f)) return this;
      if (d >= l && i >= 0)
        for (c = this._first; c;) {
          if (p = c._next, (c._act || d >= c._start) && c._ts && _ !== c) {
            if (c.parent !== this) return this.render(i, s, o);
            if (c.render(c._ts > 0 ? (d - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (d - c._start) * c._ts, s, o), d !== this._time || !this._ts && !m) {
              _ = 0, p && (f += this._zTime = -qe);
              break
            }
          }
          c = p
        } else {
          c = this._last;
          for (var M = i < 0 ? i : d; c;) {
            if (p = c._prev, (c._act || M <= c._end) && c._ts && _ !== c) {
              if (c.parent !== this) return this.render(i, s, o);
              if (c.render(c._ts > 0 ? (M - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (M - c._start) * c._ts, s, o || jt && (c._initted || c._startAt)), d !== this._time || !this._ts && !m) {
                _ = 0, p && (f += this._zTime = M ? -qe : qe);
                break
              }
            }
            c = p
          }
        }
      if (_ && !s && (this.pause(), _.render(d >= l ? 0 : -qe)._zTime = d >= l ? 1 : -1, this._ts)) return this._start = y, qu(this), this.render(i, s, o);
      this._onUpdate && !s && Qn(this, "onUpdate", !0), (f === a && this._tTime >= this.totalDuration() || !f && l) && (y === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (f === a && this._ts > 0 || !f && this._ts < 0) && Si(this, 1), !s && !(i < 0 && !l) && (f || l || !a) && (Qn(this, f === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom())))
    }
    return this
  }, n.add = function(i, s) {
    var o = this;
    if (qr(s) || (s = jn(this, s, i)), !(i instanceof Al)) {
      if (Ut(i)) return i.forEach(function(l) {
        return o.add(l, s)
      }), this;
      if (kt(i)) return this.addLabel(i, s);
      if (ut(i)) i = _t.delayedCall(0, i);
      else return this
    }
    return this !== i ? Cr(this, i, s) : this
  }, n.getChildren = function(i, s, o, l) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), l === void 0 && (l = -qn);
    for (var a = [], u = this._first; u;) u._start >= l && (u instanceof _t ? s && a.push(u) : (o && a.push(u), i && a.push.apply(a, u.getChildren(!0, s, o)))), u = u._next;
    return a
  }, n.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
      if (s[o].vars.id === i) return s[o]
  }, n.remove = function(i) {
    return kt(i) ? this.removeLabel(i) : ut(i) ? this.killTweensOf(i) : (Ku(this, i), i === this._recent && (this._recent = this._last), ns(this))
  }, n.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Lt(Rn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
  }, n.addLabel = function(i, s) {
    return this.labels[i] = jn(this, s), this
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this
  }, n.addPause = function(i, s, o) {
    var l = _t.delayedCall(0, s || Pl, o);
    return l.data = "isPause", this._hasPause = 1, Cr(this, l, jn(this, i))
  }, n.removePause = function(i) {
    var s = this._first;
    for (i = jn(this, i); s;) s._start === i && s.data === "isPause" && Si(s), s = s._next
  }, n.killTweensOf = function(i, s, o) {
    for (var l = this.getTweensOf(i, o), a = l.length; a--;) fi !== l[a] && l[a].kill(i, s);
    return this
  }, n.getTweensOf = function(i, s) {
    for (var o = [], l = Gn(i), a = this._first, u = qr(s), f; a;) a instanceof _t ? eC(a._targets, l) && (u ? (!fi || a._initted && a._ts) && a.globalTime(0) <= s && a.globalTime(a.totalDuration()) > s : !s || a.isActive()) && o.push(a) : (f = a.getTweensOf(l, s)).length && o.push.apply(o, f), a = a._next;
    return o
  }, n.tweenTo = function(i, s) {
    s = s || {};
    var o = this,
      l = jn(o, i),
      a = s,
      u = a.startAt,
      f = a.onStart,
      h = a.onStartParams,
      d = a.immediateRender,
      c, p = _t.to(o, tr({
        ease: s.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: l,
        overwrite: "auto",
        duration: s.duration || Math.abs((l - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || qe,
        onStart: function() {
          if (o.pause(), !c) {
            var D = s.duration || Math.abs((l - (u && "time" in u ? u.time : o._time)) / o.timeScale());
            p._dur !== D && lo(p, D, 0, 1).render(p._time, !0, !0), c = 1
          }
          f && f.apply(p, h || [])
        }
      }, s));
    return d ? p.render(0) : p
  }, n.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, tr({
      startAt: {
        time: jn(this, i)
      }
    }, o))
  }, n.recent = function() {
    return this._recent
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Op(this, jn(this, i))
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Op(this, jn(this, i), 1)
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + qe)
  }, n.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    for (var l = this._first, a = this.labels, u; l;) l._start >= o && (l._start += i, l._end += i), l = l._next;
    if (s)
      for (u in a) a[u] >= o && (a[u] += i);
    return ns(this)
  }, n.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s;) s.invalidate(i), s = s._next;
    return t.prototype.invalidate.call(this, i)
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), ns(this)
  }, n.totalDuration = function(i) {
    var s = 0,
      o = this,
      l = o._last,
      a = qn,
      u, f, h;
    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (h = o.parent; l;) u = l._prev, l._dirty && l.totalDuration(), f = l._start, f > a && o._sort && l._ts && !o._lock ? (o._lock = 1, Cr(o, l, f - l._delay, 1)._lock = 0) : a = f, f < 0 && l._ts && (s -= f, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += f / o._ts, o._time -= f, o._tTime -= f), o.shiftChildren(-f, !1, -1 / 0), a = 0), l._end > s && l._ts && (s = l._end), l = u;
      lo(o, o === st && o._time > s ? o._time : s, 1, 1), o._dirty = 0
    }
    return o._tDur
  }, e.updateRoot = function(i) {
    if (st._ts && (N0(st, gu(i, st)), O0 = Rn.frame), Rn.frame >= Fp) {
      Fp += Bn.autoSleep || 120;
      var s = st._first;
      if ((!s || !s._ts) && Bn.autoSleep && Rn._listeners.length < 2) {
        for (; s && !s._ts;) s = s._next;
        s || Rn.sleep()
      }
    }
  }, e
}(Al);
tr(gn.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var wC = function(e, n, r, i, s, o, l) {
    var a = new yn(this._pt, e, n, 0, 1, cm, null, s),
      u = 0,
      f = 0,
      h, d, c, p, g, D, m, _;
    for (a.b = r, a.e = i, r += "", i += "", (m = ~i.indexOf("random(")) && (i = kl(i)), o && (_ = [r, i], o(_, e, n), r = _[0], i = _[1]), d = r.match(gc) || []; h = gc.exec(i);) p = h[0], g = i.substring(u, h.index), c ? c = (c + 1) % 5 : g.substr(-5) === "rgba(" && (c = 1), p !== d[f++] && (D = parseFloat(d[f - 1]) || 0, a._pt = {
      _next: a._pt,
      p: g || f === 1 ? g : ",",
      s: D,
      c: p.charAt(1) === "=" ? Us(D, p) - D : parseFloat(p) - D,
      m: c && c < 4 ? Math.round : 0
    }, u = gc.lastIndex);
    return a.c = u < i.length ? i.substring(u, i.length) : "", a.fp = l, (k0.test(i) || m) && (a.e = 0), this._pt = a, a
  },
  jh = function(e, n, r, i, s, o, l, a, u, f) {
    ut(i) && (i = i(s || 0, e, o));
    var h = e[n],
      d = r !== "get" ? r : ut(h) ? u ? e[n.indexOf("set") || !ut(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : h,
      c = ut(h) ? u ? PC : am : Vh,
      p;
    if (kt(i) && (~i.indexOf("random(") && (i = kl(i)), i.charAt(1) === "=" && (p = Us(d, i) + (Wt(d) || 0), (p || p === 0) && (i = p))), !f || d !== i || wf) return !isNaN(d * i) && i !== "" ? (p = new yn(this._pt, e, n, +d || 0, i - (d || 0), typeof h == "boolean" ? FC : um, 0, c), u && (p.fp = u), l && p.modifier(l, this, e), this._pt = p) : (!h && !(n in e) && $h(n, i), wC.call(this, e, n, d, i, c, a || Bn.stringFilter, u))
  },
  CC = function(e, n, r, i, s) {
    if (ut(e) && (e = nl(e, s, n, r, i)), !Fr(e) || e.style && e.nodeType || Ut(e) || S0(e)) return kt(e) ? nl(e, s, n, r, i) : e;
    var o = {},
      l;
    for (l in e) o[l] = nl(e[l], s, n, r, i);
    return o
  },
  sm = function(e, n, r, i, s, o) {
    var l, a, u, f;
    if (An[e] && (l = new An[e]).init(s, l.rawVars ? n[e] : CC(n[e], i, s, o, r), r, i, o) !== !1 && (r._pt = a = new yn(r._pt, s, e, 0, 1, l.render, l, 0, l.priority), r !== Os))
      for (u = r._ptLookup[r._targets.indexOf(s)], f = l._props.length; f--;) u[l._props[f]] = a;
    return l
  },
  fi, wf, Uh = function t(e, n, r) {
    var i = e.vars,
      s = i.ease,
      o = i.startAt,
      l = i.immediateRender,
      a = i.lazy,
      u = i.onUpdate,
      f = i.onUpdateParams,
      h = i.callbackScope,
      d = i.runBackwards,
      c = i.yoyoEase,
      p = i.keyframes,
      g = i.autoRevert,
      D = e._dur,
      m = e._startAt,
      _ = e._targets,
      v = e.parent,
      y = v && v.data === "nested" ? v.vars.targets : _,
      b = e._overwrite === "auto" && !Lh,
      S = e.timeline,
      E, C, A, M, B, L, $, z, re, j, U, ee, W;
    if (S && (!p || !s) && (s = "none"), e._ease = rs(s, so.ease), e._yEase = c ? tm(rs(c === !0 ? s : c, so.ease)) : 0, c && e._yoyo && !e._repeat && (c = e._yEase, e._yEase = e._ease, e._ease = c), e._from = !S && !!i.runBackwards, !S || p && !i.stagger) {
      if (z = _[0] ? ts(_[0]).harness : 0, ee = z && i[z.prop], E = pu(i, Hh), m && (m._zTime < 0 && m.progress(1), n < 0 && d && l && !g ? m.render(-1, !0) : m.revert(d && D ? Oa : Jw), m._lazy = 0), o) {
        if (Si(e._startAt = _t.set(_, tr({
            data: "isStart",
            overwrite: !1,
            parent: v,
            immediateRender: !0,
            lazy: !m && _n(a),
            startAt: null,
            delay: 0,
            onUpdate: u,
            onUpdateParams: f,
            callbackScope: h,
            stagger: 0
          }, o))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (jt || !l && !g) && e._startAt.revert(Oa), l && D && n <= 0 && r <= 0) {
          n && (e._zTime = n);
          return
        }
      } else if (d && D && !m) {
        if (n && (l = !1), A = tr({
            overwrite: !1,
            data: "isFromStart",
            lazy: l && !m && _n(a),
            immediateRender: l,
            stagger: 0,
            parent: v
          }, E), ee && (A[z.prop] = ee), Si(e._startAt = _t.set(_, A)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (jt ? e._startAt.revert(Oa) : e._startAt.render(-1, !0)), e._zTime = n, !l) t(e._startAt, qe, qe);
        else if (!n) return
      }
      for (e._pt = e._ptCache = 0, a = D && _n(a) || a && !D, C = 0; C < _.length; C++) {
        if (B = _[C], $ = B._gsap || Wh(_)[C]._gsap, e._ptLookup[C] = j = {}, mf[$.id] && vi.length && du(), U = y === _ ? C : y.indexOf(B), z && (re = new z).init(B, ee || E, e, U, y) !== !1 && (e._pt = M = new yn(e._pt, B, re.name, 0, 1, re.render, re, 0, re.priority), re._props.forEach(function(R) {
            j[R] = M
          }), re.priority && (L = 1)), !z || ee)
          for (A in E) An[A] && (re = sm(A, E, e, U, B, y)) ? re.priority && (L = 1) : j[A] = M = jh.call(e, B, A, "get", E[A], U, y, 0, i.stringFilter);
        e._op && e._op[C] && e.kill(B, e._op[C]), b && e._pt && (fi = e, st.killTweensOf(B, j, e.globalTime(n)), W = !e.parent, fi = 0), e._pt && a && (mf[$.id] = 1)
      }
      L && fm(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = u, e._initted = (!e._op || e._pt) && !W, p && n <= 0 && S.render(qn, !0, !0)
  },
  EC = function(e, n, r, i, s, o, l) {
    var a = (e._pt && e._ptCache || (e._ptCache = {}))[n],
      u, f, h, d;
    if (!a)
      for (a = e._ptCache[n] = [], h = e._ptLookup, d = e._targets.length; d--;) {
        if (u = h[d][n], u && u.d && u.d._pt)
          for (u = u.d._pt; u && u.p !== n && u.fp !== n;) u = u._next;
        if (!u) return wf = 1, e.vars[n] = "+=0", Uh(e, l), wf = 0, 1;
        a.push(u)
      }
    for (d = a.length; d--;) f = a[d], u = f._pt || f, u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c, u.c = r - u.s, f.e && (f.e = ht(r) + Wt(f.e)), f.b && (f.b = u.s + Wt(f.b))
  },
  TC = function(e, n) {
    var r = e[0] ? ts(e[0]).harness : 0,
      i = r && r.aliases,
      s, o, l, a;
    if (!i) return n;
    s = hs({}, n);
    for (o in i)
      if (o in s)
        for (a = i[o].split(","), l = a.length; l--;) s[a[l]] = s[o];
    return s
  },
  SC = function(e, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o, l;
    if (Ut(n)) l = r[e] || (r[e] = []), n.forEach(function(a, u) {
      return l.push({
        t: u / (n.length - 1) * 100,
        v: a,
        e: s
      })
    });
    else
      for (o in n) l = r[o] || (r[o] = []), o === "ease" || l.push({
        t: parseFloat(e),
        v: n[o],
        e: s
      })
  },
  nl = function(e, n, r, i, s) {
    return ut(e) ? e.call(n, r, i, s) : kt(e) && ~e.indexOf("random(") ? kl(e) : e
  },
  om = zh + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  lm = {};
mn(om + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return lm[t] = 1
});
var _t = function(t) {
  E0(e, t);

  function e(r, i, s, o) {
    var l;
    typeof i == "number" && (s.duration = i, i = s, s = null), l = t.call(this, o ? i : el(i)) || this;
    var a = l.vars,
      u = a.duration,
      f = a.delay,
      h = a.immediateRender,
      d = a.stagger,
      c = a.overwrite,
      p = a.keyframes,
      g = a.defaults,
      D = a.scrollTrigger,
      m = a.yoyoEase,
      _ = i.parent || st,
      v = (Ut(r) || S0(r) ? qr(r[0]) : "length" in i) ? [r] : Gn(r),
      y, b, S, E, C, A, M, B;
    if (l._targets = v.length ? Wh(v) : hu("GSAP target " + r + " not found. https://greensock.com", !Bn.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = c, p || d || da(u) || da(f)) {
      if (i = l.vars, y = l.timeline = new gn({
          data: "nested",
          defaults: g || {},
          targets: _ && _.data === "nested" ? _.vars.targets : v
        }), y.kill(), y.parent = y._dp = Or(l), y._start = 0, d || da(u) || da(f)) {
        if (E = v.length, M = d && V0(d), Fr(d))
          for (C in d) ~om.indexOf(C) && (B || (B = {}), B[C] = d[C]);
        for (b = 0; b < E; b++) S = pu(i, lm), S.stagger = 0, m && (S.yoyoEase = m), B && hs(S, B), A = v[b], S.duration = +nl(u, Or(l), b, A, v), S.delay = (+nl(f, Or(l), b, A, v) || 0) - l._delay, !d && E === 1 && S.delay && (l._delay = f = S.delay, l._start += f, S.delay = 0), y.to(A, S, M ? M(b, A, v) : 0), y._ease = Ie.none;
        y.duration() ? u = f = 0 : l.timeline = 0
      } else if (p) {
        el(tr(y.vars.defaults, {
          ease: "none"
        })), y._ease = rs(p.ease || i.ease || "none");
        var L = 0,
          $, z, re;
        if (Ut(p)) p.forEach(function(j) {
          return y.to(v, j, ">")
        }), y.duration();
        else {
          S = {};
          for (C in p) C === "ease" || C === "easeEach" || SC(C, p[C], S, p.easeEach);
          for (C in S)
            for ($ = S[C].sort(function(j, U) {
                return j.t - U.t
              }), L = 0, b = 0; b < $.length; b++) z = $[b], re = {
              ease: z.e,
              duration: (z.t - (b ? $[b - 1].t : 0)) / 100 * u
            }, re[C] = z.v, y.to(v, re, L), L += re.duration;
          y.duration() < u && y.to({}, {
            duration: u - y.duration()
          })
        }
      }
      u || l.duration(u = y.duration())
    } else l.timeline = 0;
    return c === !0 && !Lh && (fi = Or(l), st.killTweensOf(v), fi = 0), Cr(_, Or(l), s), i.reversed && l.reverse(), i.paused && l.paused(!0), (h || !u && !p && l._start === Lt(_._time) && _n(h) && iC(Or(l)) && _.data !== "nested") && (l._tTime = -qe, l.render(Math.max(0, -f) || 0)), D && z0(Or(l), D), l
  }
  var n = e.prototype;
  return n.render = function(i, s, o) {
    var l = this._time,
      a = this._tDur,
      u = this._dur,
      f = i < 0,
      h = i > a - qe && !f ? a : i < qe ? 0 : i,
      d, c, p, g, D, m, _, v, y;
    if (!u) oC(this, i, s, o);
    else if (h !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
      if (d = h, v = this.timeline, this._repeat) {
        if (g = u + this._rDelay, this._repeat < -1 && f) return this.totalTime(g * 100 + i, s, o);
        if (d = Lt(h % g), h === a ? (p = this._repeat, d = u) : (p = ~~(h / g), p && p === h / g && (d = u, p--), d > u && (d = u)), m = this._yoyo && p & 1, m && (y = this._yEase, d = u - d), D = oo(this._tTime, g), d === l && !o && this._initted) return this._tTime = h, this;
        p !== D && (v && this._yEase && nm(v, m), this.vars.repeatRefresh && !m && !this._lock && (this._lock = o = 1, this.render(Lt(g * p), !0).invalidate()._lock = 0))
      }
      if (!this._initted) {
        if (W0(this, f ? i : d, o, s, h)) return this._tTime = 0, this;
        if (l !== this._time) return this;
        if (u !== this._dur) return this.render(i, s, o)
      }
      if (this._tTime = h, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = _ = (y || this._ease)(d / u), this._from && (this.ratio = _ = 1 - _), d && !l && !s && !p && (Qn(this, "onStart"), this._tTime !== h)) return this;
      for (c = this._pt; c;) c.r(_, c.d), c = c._next;
      v && v.render(i < 0 ? i : !d && m ? -qe : v._dur * v._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (f && yf(this, i, s, o), Qn(this, "onUpdate")), this._repeat && p !== D && this.vars.onRepeat && !s && this.parent && Qn(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && yf(this, i, !0, !0), (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Si(this, 1), !s && !(f && !l) && (h || l || m) && (Qn(this, h === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < a && this.timeScale() > 0) && this._prom()))
    }
    return this
  }, n.targets = function() {
    return this._targets
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i)
  }, n.resetTo = function(i, s, o, l) {
    Fl || Rn.wake(), this._ts || this.play();
    var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      u;
    return this._initted || Uh(this, a), u = this._ease(a / this._dur), EC(this, i, s, o, l, u, a) ? this.resetTo(i, s, o, l) : (Gu(this, 0), this.parent || $0(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
  }, n.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Lo(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, fi && fi.vars.overwrite !== !0)._first || Lo(this), this.parent && o !== this.timeline.totalDuration() && lo(this, this._dur * this.timeline._tDur / o, 0, 1), this
    }
    var l = this._targets,
      a = i ? Gn(i) : l,
      u = this._ptLookup,
      f = this._pt,
      h, d, c, p, g, D, m;
    if ((!s || s === "all") && nC(l, a)) return s === "all" && (this._pt = 0), Lo(this);
    for (h = this._op = this._op || [], s !== "all" && (kt(s) && (g = {}, mn(s, function(_) {
        return g[_] = 1
      }), s = g), s = TC(l, s)), m = l.length; m--;)
      if (~a.indexOf(l[m])) {
        d = u[m], s === "all" ? (h[m] = s, p = d, c = {}) : (c = h[m] = h[m] || {}, p = s);
        for (g in p) D = d && d[g], D && ((!("kill" in D.d) || D.d.kill(g) === !0) && Ku(this, D, "_pt"), delete d[g]), c !== "all" && (c[g] = 1)
      } return this._initted && !this._pt && f && Lo(this), this
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2])
  }, e.from = function(i, s) {
    return tl(1, arguments)
  }, e.delayedCall = function(i, s, o, l) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: l
    })
  }, e.fromTo = function(i, s, o) {
    return tl(2, arguments)
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s)
  }, e.killTweensOf = function(i, s, o) {
    return st.killTweensOf(i, s, o)
  }, e
}(Al);
tr(_t.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
mn("staggerTo,staggerFrom,staggerFromTo", function(t) {
  _t[t] = function() {
    var e = new gn,
      n = vf.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n)
  }
});
var Vh = function(e, n, r) {
    return e[n] = r
  },
  am = function(e, n, r) {
    return e[n](r)
  },
  PC = function(e, n, r, i) {
    return e[n](i.fp, r)
  },
  kC = function(e, n, r) {
    return e.setAttribute(n, r)
  },
  Yh = function(e, n) {
    return ut(e[n]) ? am : Nh(e[n]) && e.setAttribute ? kC : Vh
  },
  um = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
  },
  FC = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
  },
  cm = function(e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (e === 1 && n.e) i = n.e;
    else {
      for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
      i += n.c
    }
    n.set(n.t, n.p, i, n)
  },
  Xh = function(e, n) {
    for (var r = n._pt; r;) r.r(e, r.d), r = r._next
  },
  AC = function(e, n, r, i) {
    for (var s = this._pt, o; s;) o = s._next, s.p === i && s.modifier(e, n, r), s = o
  },
  RC = function(e) {
    for (var n = this._pt, r, i; n;) i = n._next, n.p === e && !n.op || n.op === e ? Ku(this, n, "_pt") : n.dep || (r = 1), n = i;
    return !r
  },
  MC = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
  },
  fm = function(e) {
    for (var n = e._pt, r, i, s, o; n;) {
      for (r = n._next, i = s; i && i.pr > n.pr;) i = i._next;
      (n._prev = i ? i._prev : o) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : o = n, n = r
    }
    e._pt = s
  },
  yn = function() {
    function t(n, r, i, s, o, l, a, u, f) {
      this.t = r, this.s = s, this.c = o, this.p = i, this.r = l || um, this.d = a || this, this.set = u || Vh, this.pr = f || 0, this._next = n, n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, s) {
      this.mSet = this.mSet || this.set, this.set = MC, this.m = r, this.mt = s, this.tween = i
    }, t
  }();
mn(zh + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return Hh[t] = 1
});
In.TweenMax = In.TweenLite = _t;
In.TimelineLite = In.TimelineMax = gn;
st = new gn({
  sortChildren: !1,
  defaults: so,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Bn.stringFilter = em;
var is = [],
  Na = {},
  OC = [],
  Np = 0,
  LC = 0,
  vc = function(e) {
    return (Na[e] || OC).map(function(n) {
      return n()
    })
  },
  Cf = function() {
    var e = Date.now(),
      n = [];
    e - Np > 2 && (vc("matchMediaInit"), is.forEach(function(r) {
      var i = r.queries,
        s = r.conditions,
        o, l, a, u;
      for (l in i) o = Un.matchMedia(i[l]).matches, o && (a = 1), o !== s[l] && (s[l] = o, u = 1);
      u && (r.revert(), a && n.push(r))
    }), vc("matchMediaRevert"), n.forEach(function(r) {
      return r.onMatch(r)
    }), Np = e, vc("matchMedia"))
  },
  hm = function() {
    function t(n, r) {
      this.selector = r && bf(r), this.data = [], this._r = [], this.isReverted = !1, this.id = LC++, n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
      ut(r) && (s = i, i = r, r = ut);
      var o = this,
        l = function() {
          var u = at,
            f = o.selector,
            h;
          return u && u !== o && u.data.push(o), s && (o.selector = bf(s)), at = o, h = i.apply(o, arguments), ut(h) && o._r.push(h), at = u, o.selector = f, o.isReverted = !1, h
        };
      return o.last = l, r === ut ? l(o) : r ? o[r] = l : l
    }, e.ignore = function(r) {
      var i = at;
      at = null, r(this), at = i
    }, e.getTweens = function() {
      var r = [];
      return this.data.forEach(function(i) {
        return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof _t && !(i.parent && i.parent.data === "nested") && r.push(i)
      }), r
    }, e.clear = function() {
      this._r.length = this.data.length = 0
    }, e.kill = function(r, i) {
      var s = this;
      if (r) {
        var o = this.getTweens();
        this.data.forEach(function(a) {
          a.data === "isFlip" && (a.revert(), a.getChildren(!0, !0, !1).forEach(function(u) {
            return o.splice(o.indexOf(u), 1)
          }))
        }), o.map(function(a) {
          return {
            g: a.globalTime(0),
            t: a
          }
        }).sort(function(a, u) {
          return u.g - a.g || -1 / 0
        }).forEach(function(a) {
          return a.t.revert(r)
        }), this.data.forEach(function(a) {
          return !(a instanceof _t) && a.revert && a.revert(r)
        }), this._r.forEach(function(a) {
          return a(r, s)
        }), this.isReverted = !0
      } else this.data.forEach(function(a) {
        return a.kill && a.kill()
      });
      if (this.clear(), i)
        for (var l = is.length; l--;) is[l].id === this.id && is.splice(l, 1)
    }, e.revert = function(r) {
      this.kill(r || {})
    }, t
  }(),
  NC = function() {
    function t(n) {
      this.contexts = [], this.scope = n
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
      Fr(r) || (r = {
        matches: r
      });
      var o = new hm(0, s || this.scope),
        l = o.conditions = {},
        a, u, f;
      at && !o.selector && (o.selector = at.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
      for (u in r) u === "all" ? f = 1 : (a = Un.matchMedia(r[u]), a && (is.indexOf(o) < 0 && is.push(o), (l[u] = a.matches) && (f = 1), a.addListener ? a.addListener(Cf) : a.addEventListener("change", Cf)));
      return f && i(o), this
    }, e.revert = function(r) {
      this.kill(r || {})
    }, e.kill = function(r) {
      this.contexts.forEach(function(i) {
        return i.kill(r, !0)
      })
    }, t
  }(),
  _u = {
    registerPlugin: function() {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
      n.forEach(function(i) {
        return Q0(i)
      })
    },
    timeline: function(e) {
      return new gn(e)
    },
    getTweensOf: function(e, n) {
      return st.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
      kt(e) && (e = Gn(e)[0]);
      var s = ts(e || {}).get,
        o = r ? I0 : B0;
      return r === "native" && (r = ""), e && (n ? o((An[n] && An[n].get || s)(e, n, r, i)) : function(l, a, u) {
        return o((An[l] && An[l].get || s)(e, l, a, u))
      })
    },
    quickSetter: function(e, n, r) {
      if (e = Gn(e), e.length > 1) {
        var i = e.map(function(f) {
            return Vt.quickSetter(f, n, r)
          }),
          s = i.length;
        return function(f) {
          for (var h = s; h--;) i[h](f)
        }
      }
      e = e[0] || {};
      var o = An[n],
        l = ts(e),
        a = l.harness && (l.harness.aliases || {})[n] || n,
        u = o ? function(f) {
          var h = new o;
          Os._pt = 0, h.init(e, r ? f + r : f, Os, 0, [e]), h.render(1, h), Os._pt && Xh(1, Os)
        } : l.set(e, a);
      return o ? u : function(f) {
        return u(e, a, r ? f + r : f, l, 1)
      }
    },
    quickTo: function(e, n, r) {
      var i, s = Vt.to(e, hs((i = {}, i[n] = "+=0.1", i.paused = !0, i), r || {})),
        o = function(a, u, f) {
          return s.resetTo(n, a, u, f)
        };
      return o.tween = s, o
    },
    isTweening: function(e) {
      return st.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
      return e && e.ease && (e.ease = rs(e.ease, so.ease)), Ap(so, e || {})
    },
    config: function(e) {
      return Ap(Bn, e || {})
    },
    registerEffect: function(e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (i || "").split(",").forEach(function(l) {
        return l && !An[l] && !In[l] && hu(n + " effect requires " + l + " plugin.")
      }), _c[n] = function(l, a, u) {
        return r(Gn(l), tr(a || {}, s), u)
      }, o && (gn.prototype[n] = function(l, a, u) {
        return this.add(_c[n](l, Fr(a) ? a : (u = a) && {}, this), u)
      })
    },
    registerEase: function(e, n) {
      Ie[e] = rs(n)
    },
    parseEase: function(e, n) {
      return arguments.length ? rs(e, n) : Ie
    },
    getById: function(e) {
      return st.getById(e)
    },
    exportRoot: function(e, n) {
      e === void 0 && (e = {});
      var r = new gn(e),
        i, s;
      for (r.smoothChildTiming = _n(e.smoothChildTiming), st.remove(r), r._dp = 0, r._time = r._tTime = st._time, i = st._first; i;) s = i._next, (n || !(!i._dur && i instanceof _t && i.vars.onComplete === i._targets[0])) && Cr(r, i, i._start - i._delay), i = s;
      return Cr(st, r, 0), r
    },
    context: function(e, n) {
      return e ? new hm(e, n) : at
    },
    matchMedia: function(e) {
      return new NC(e)
    },
    matchMediaRefresh: function() {
      return is.forEach(function(e) {
        var n = e.conditions,
          r, i;
        for (i in n) n[i] && (n[i] = !1, r = 1);
        r && e.revert()
      }) || Cf()
    },
    addEventListener: function(e, n) {
      var r = Na[e] || (Na[e] = []);
      ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
      var r = Na[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1)
    },
    utils: {
      wrap: pC,
      wrapYoyo: gC,
      distribute: V0,
      random: X0,
      snap: Y0,
      normalize: dC,
      getUnit: Wt,
      clamp: uC,
      splitColor: J0,
      toArray: Gn,
      selector: bf,
      mapRange: q0,
      pipe: fC,
      unitize: hC,
      interpolate: _C,
      shuffle: U0
    },
    install: R0,
    effects: _c,
    ticker: Rn,
    updateRoot: gn.updateRoot,
    plugins: An,
    globalTimeline: st,
    core: {
      PropTween: yn,
      globals: M0,
      Tween: _t,
      Timeline: gn,
      Animation: Al,
      getCache: ts,
      _removeLinkedListItem: Ku,
      reverting: function() {
        return jt
      },
      context: function(e) {
        return e && at && (at.data.push(e), e._ctx = at), at
      },
      suppressOverwrites: function(e) {
        return Lh = e
      }
    }
  };
mn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return _u[t] = _t[t]
});
Rn.add(gn.updateRoot);
Os = _u.to({}, {
  duration: 0
});
var BC = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n;) r = r._next;
    return r
  },
  IC = function(e, n) {
    var r = e._targets,
      i, s, o;
    for (i in n)
      for (s = r.length; s--;) o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = BC(o, i)), o && o.modifier && o.modifier(n[i], e, r[s], i))
  },
  bc = function(e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function(i, s, o) {
        o._onInit = function(l) {
          var a, u;
          if (kt(s) && (a = {}, mn(s, function(f) {
              return a[f] = 1
            }), s = a), n) {
            a = {};
            for (u in s) a[u] = n(s[u]);
            s = a
          }
          IC(l, s)
        }
      }
    }
  },
  Vt = _u.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, s) {
      var o, l, a;
      this.tween = r;
      for (o in n) a = e.getAttribute(o) || "", l = this.add(e, "setAttribute", (a || 0) + "", n[o], i, s, 0, 0, o), l.op = o, l.b = a, this._props.push(o)
    },
    render: function(e, n) {
      for (var r = n._pt; r;) jt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
    }
  }, {
    name: "endArray",
    init: function(e, n) {
      for (var r = n.length; r--;) this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
  }, bc("roundProps", xf), bc("modifiers"), bc("snap", Y0)) || _u;
_t.version = gn.version = Vt.version = "3.12.2";
A0 = 1;
Bh() && ao();
Ie.Power0;
Ie.Power1;
Ie.Power2;
Ie.Power3;
Ie.Power4;
Ie.Linear;
Ie.Quad;
Ie.Cubic;
Ie.Quart;
Ie.Quint;
Ie.Strong;
Ie.Elastic;
Ie.Back;
Ie.SteppedEase;
Ie.Bounce;
Ie.Sine;
Ie.Expo;
Ie.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Bp, hi, Vs, Kh, Ki, Ip, qh, $C = function() {
    return typeof window < "u"
  },
  Gr = {},
  Hi = 180 / Math.PI,
  Ys = Math.PI / 180,
  ws = Math.atan2,
  $p = 1e8,
  Gh = /([A-Z])/g,
  HC = /(left|right|width|margin|padding|x)/i,
  zC = /[\s,\(]\S/,
  Er = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  Ef = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  WC = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  jC = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
  },
  UC = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
  },
  dm = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
  },
  pm = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
  },
  VC = function(e, n, r) {
    return e.style[n] = r
  },
  YC = function(e, n, r) {
    return e.style.setProperty(n, r)
  },
  XC = function(e, n, r) {
    return e._gsap[n] = r
  },
  KC = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
  },
  qC = function(e, n, r, i, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = r, o.renderTransform(s, o)
  },
  GC = function(e, n, r, i, s) {
    var o = e._gsap;
    o[n] = r, o.renderTransform(s, o)
  },
  ot = "transform",
  hr = ot + "Origin",
  QC = function t(e, n) {
    var r = this,
      i = this.target,
      s = i.style;
    if (e in Gr && s) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = Er[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return r.tfm[o] = Lr(i, o)
      }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Lr(i, e);
      else return Er.transform.split(",").forEach(function(o) {
        return t.call(r, o, n)
      });
      if (this.props.indexOf(ot) >= 0) return;
      i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(hr, n, "")), e = ot
    }(s || n) && this.props.push(e, n, s[e])
  },
  gm = function(e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
  },
  JC = function() {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s, o;
    for (s = 0; s < e.length; s += 3) e[s + 1] ? n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Gh, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), s = qh(), (!s || !s.isStart) && !r[ot] && (gm(r), i.uncache = 1)
    }
  },
  _m = function(e, n) {
    var r = {
      target: e,
      props: [],
      revert: JC,
      save: QC
    };
    return e._gsap || Vt.core.getCache(e), n && n.split(",").forEach(function(i) {
      return r.save(i)
    }), r
  },
  mm, Tf = function(e, n) {
    var r = hi.createElementNS ? hi.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : hi.createElement(e);
    return r.style ? r : hi.createElement(e)
  },
  Sr = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(Gh, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, uo(n) || n, 1) || ""
  },
  Hp = "O,Moz,ms,Ms,Webkit".split(","),
  uo = function(e, n, r) {
    var i = n || Ki,
      s = i.style,
      o = 5;
    if (e in s && !r) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Hp[o] + e in s););
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Hp[o] : "") + e
  },
  Sf = function() {
    $C() && window.document && (Bp = window, hi = Bp.document, Vs = hi.documentElement, Ki = Tf("div") || {
      style: {}
    }, Tf("div"), ot = uo(ot), hr = ot + "Origin", Ki.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", mm = !!uo("perspective"), qh = Vt.core.reverting, Kh = 1)
  },
  xc = function t(e) {
    var n = Tf("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      r = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      o;
    if (Vs.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
    } catch {} else this._gsapBBox && (o = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Vs.removeChild(n), this.style.cssText = s, o
  },
  zp = function(e, n) {
    for (var r = n.length; r--;)
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r])
  },
  ym = function(e) {
    var n;
    try {
      n = e.getBBox()
    } catch {
      n = xc.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === xc || (n = xc.call(e, !0)), n && !n.width && !n.x && !n.y ? {
      x: +zp(e, ["x", "cx", "x1"]) || 0,
      y: +zp(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : n
  },
  Dm = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ym(e))
  },
  Rl = function(e, n) {
    if (n) {
      var r = e.style;
      n in Gr && n !== hr && (n = ot), r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(n.replace(Gh, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
  },
  di = function(e, n, r, i, s, o) {
    var l = new yn(e._pt, n, r, 0, 1, o ? pm : dm);
    return e._pt = l, l.b = i, l.e = s, e._props.push(r), l
  },
  Wp = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  ZC = {
    grid: 1,
    flex: 1
  },
  Pi = function t(e, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      l = Ki.style,
      a = HC.test(n),
      u = e.tagName.toLowerCase() === "svg",
      f = (u ? "client" : "offset") + (a ? "Width" : "Height"),
      h = 100,
      d = i === "px",
      c = i === "%",
      p, g, D, m;
    return i === o || !s || Wp[i] || Wp[o] ? s : (o !== "px" && !d && (s = t(e, n, r, "px")), m = e.getCTM && Dm(e), (c || o === "%") && (Gr[n] || ~n.indexOf("adius")) ? (p = m ? e.getBBox()[a ? "width" : "height"] : e[f], ht(c ? s / p * h : s / 100 * p)) : (l[a ? "width" : "height"] = h + (d ? o : i), g = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, m && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === hi || !g.appendChild) && (g = hi.body), D = g._gsap, D && c && D.width && a && D.time === Rn.time && !D.uncache ? ht(s / D.width * h) : ((c || o === "%") && !ZC[Sr(g, "display")] && (l.position = Sr(e, "position")), g === e && (l.position = "static"), g.appendChild(Ki), p = Ki[f], g.removeChild(Ki), l.position = "absolute", a && c && (D = ts(g), D.time = Rn.time, D.width = g[f]), ht(d ? p * s / h : p && s ? h / p * s : 0))))
  },
  Lr = function(e, n, r, i) {
    var s;
    return Kh || Sf(), n in Er && n !== "transform" && (n = Er[n], ~n.indexOf(",") && (n = n.split(",")[0])), Gr[n] && n !== "transform" ? (s = Ol(e, i), s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : yu(Sr(e, hr)) + " " + s.zOrigin + "px") : (s = e.style[n], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = mu[n] && mu[n](e, n, r) || Sr(e, n) || L0(e, n) || (n === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Pi(e, n, s, r) + r : s
  },
  eE = function(e, n, r, i) {
    if (!r || r === "none") {
      var s = uo(n, e, 1),
        o = s && Sr(e, s, 1);
      o && o !== r ? (n = s, r = o) : n === "borderColor" && (r = Sr(e, "borderTopColor"))
    }
    var l = new yn(this._pt, e.style, n, 0, 1, cm),
      a = 0,
      u = 0,
      f, h, d, c, p, g, D, m, _, v, y, b;
    if (l.b = r, l.e = i, r += "", i += "", i === "auto" && (e.style[n] = i, i = Sr(e, n) || i, e.style[n] = r), f = [r, i], em(f), r = f[0], i = f[1], d = r.match(Ms) || [], b = i.match(Ms) || [], b.length) {
      for (; h = Ms.exec(i);) D = h[0], _ = i.substring(a, h.index), p ? p = (p + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1), D !== (g = d[u++] || "") && (c = parseFloat(g) || 0, y = g.substr((c + "").length), D.charAt(1) === "=" && (D = Us(c, D) + y), m = parseFloat(D), v = D.substr((m + "").length), a = Ms.lastIndex - v.length, v || (v = v || Bn.units[n] || y, a === i.length && (i += v, l.e += v)), y !== v && (c = Pi(e, n, g, v) || 0), l._pt = {
        _next: l._pt,
        p: _ || u === 1 ? _ : ",",
        s: c,
        c: m - c,
        m: p && p < 4 || n === "zIndex" ? Math.round : 0
      });
      l.c = a < i.length ? i.substring(a, i.length) : ""
    } else l.r = n === "display" && i === "none" ? pm : dm;
    return k0.test(i) && (l.e = 0), this._pt = l, l
  },
  jp = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  tE = function(e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = jp[r] || r, n[1] = jp[i] || i, n.join(" ")
  },
  nE = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        l, a, u;
      if (s === "all" || s === !0) i.cssText = "", a = 1;
      else
        for (s = s.split(","), u = s.length; --u > -1;) l = s[u], Gr[l] && (a = 1, l = l === "transformOrigin" ? hr : ot), Rl(r, l);
      a && (Rl(r, ot), o && (o.svg && r.removeAttribute("transform"), Ol(r, 1), o.uncache = 1, gm(i)))
    }
  },
  mu = {
    clearProps: function(e, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = e._pt = new yn(e._pt, n, r, 0, 0, nE);
        return o.u = i, o.pr = -10, o.tween = s, e._props.push(r), 1
      }
    }
  },
  Ml = [1, 0, 0, 1, 0, 0],
  vm = {},
  bm = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
  },
  Up = function(e) {
    var n = Sr(e, ot);
    return bm(n) ? Ml : n.substr(7).match(P0).map(ht)
  },
  Qh = function(e, n) {
    var r = e._gsap || ts(e),
      i = e.style,
      s = Up(e),
      o, l, a, u;
    return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, s = [a.a, a.b, a.c, a.d, a.e, a.f], s.join(",") === "1,0,0,1,0,0" ? Ml : s) : (s === Ml && !e.offsetParent && e !== Vs && !r.svg && (a = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (u = 1, l = e.nextElementSibling, Vs.appendChild(e)), s = Up(e), a ? i.display = a : Rl(e, "display"), u && (l ? o.insertBefore(e, l) : o ? o.appendChild(e) : Vs.removeChild(e))), n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
  },
  Pf = function(e, n, r, i, s, o) {
    var l = e._gsap,
      a = s || Qh(e, !0),
      u = l.xOrigin || 0,
      f = l.yOrigin || 0,
      h = l.xOffset || 0,
      d = l.yOffset || 0,
      c = a[0],
      p = a[1],
      g = a[2],
      D = a[3],
      m = a[4],
      _ = a[5],
      v = n.split(" "),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      S, E, C, A;
    r ? a !== Ml && (E = c * D - p * g) && (C = y * (D / E) + b * (-g / E) + (g * _ - D * m) / E, A = y * (-p / E) + b * (c / E) - (c * _ - p * m) / E, y = C, b = A) : (S = ym(e), y = S.x + (~v[0].indexOf("%") ? y / 100 * S.width : y), b = S.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * S.height : b)), i || i !== !1 && l.smooth ? (m = y - u, _ = b - f, l.xOffset = h + (m * c + _ * g) - m, l.yOffset = d + (m * p + _ * D) - _) : l.xOffset = l.yOffset = 0, l.xOrigin = y, l.yOrigin = b, l.smooth = !!i, l.origin = n, l.originIsAbsolute = !!r, e.style[hr] = "0px 0px", o && (di(o, l, "xOrigin", u, y), di(o, l, "yOrigin", f, b), di(o, l, "xOffset", h, l.xOffset), di(o, l, "yOffset", d, l.yOffset)), e.setAttribute("data-svg-origin", y + " " + b)
  },
  Ol = function(e, n) {
    var r = e._gsap || new im(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      s = r.scaleX < 0,
      o = "px",
      l = "deg",
      a = getComputedStyle(e),
      u = Sr(e, hr) || "0",
      f, h, d, c, p, g, D, m, _, v, y, b, S, E, C, A, M, B, L, $, z, re, j, U, ee, W, R, ie, ce, ve, fe, De;
    return f = h = d = g = D = m = _ = v = y = 0, c = p = 1, r.svg = !!(e.getCTM && Dm(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[ot] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[ot] !== "none" ? a[ot] : "")), i.scale = i.rotate = i.translate = "none"), E = Qh(e, r.svg), r.svg && (r.uncache ? (ee = e.getBBox(), u = r.xOrigin - ee.x + "px " + (r.yOrigin - ee.y) + "px", U = "") : U = !n && e.getAttribute("data-svg-origin"), Pf(e, U || u, !!U || r.originIsAbsolute, r.smooth !== !1, E)), b = r.xOrigin || 0, S = r.yOrigin || 0, E !== Ml && (B = E[0], L = E[1], $ = E[2], z = E[3], f = re = E[4], h = j = E[5], E.length === 6 ? (c = Math.sqrt(B * B + L * L), p = Math.sqrt(z * z + $ * $), g = B || L ? ws(L, B) * Hi : 0, _ = $ || z ? ws($, z) * Hi + g : 0, _ && (p *= Math.abs(Math.cos(_ * Ys))), r.svg && (f -= b - (b * B + S * $), h -= S - (b * L + S * z))) : (De = E[6], ve = E[7], R = E[8], ie = E[9], ce = E[10], fe = E[11], f = E[12], h = E[13], d = E[14], C = ws(De, ce), D = C * Hi, C && (A = Math.cos(-C), M = Math.sin(-C), U = re * A + R * M, ee = j * A + ie * M, W = De * A + ce * M, R = re * -M + R * A, ie = j * -M + ie * A, ce = De * -M + ce * A, fe = ve * -M + fe * A, re = U, j = ee, De = W), C = ws(-$, ce), m = C * Hi, C && (A = Math.cos(-C), M = Math.sin(-C), U = B * A - R * M, ee = L * A - ie * M, W = $ * A - ce * M, fe = z * M + fe * A, B = U, L = ee, $ = W), C = ws(L, B), g = C * Hi, C && (A = Math.cos(C), M = Math.sin(C), U = B * A + L * M, ee = re * A + j * M, L = L * A - B * M, j = j * A - re * M, B = U, re = ee), D && Math.abs(D) + Math.abs(g) > 359.9 && (D = g = 0, m = 180 - m), c = ht(Math.sqrt(B * B + L * L + $ * $)), p = ht(Math.sqrt(j * j + De * De)), C = ws(re, j), _ = Math.abs(C) > 2e-4 ? C * Hi : 0, y = fe ? 1 / (fe < 0 ? -fe : fe) : 0), r.svg && (U = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !bm(Sr(e, ot)), U && e.setAttribute("transform", U))), Math.abs(_) > 90 && Math.abs(_) < 270 && (s ? (c *= -1, _ += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (p *= -1, _ += _ <= 0 ? 180 : -180)), n = n || r.uncache, r.x = f - ((r.xPercent = f && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = h - ((r.yPercent = h && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = d + o, r.scaleX = ht(c), r.scaleY = ht(p), r.rotation = ht(g) + l, r.rotationX = ht(D) + l, r.rotationY = ht(m) + l, r.skewX = _ + l, r.skewY = v + l, r.transformPerspective = y + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[hr] = yu(u)), r.xOffset = r.yOffset = 0, r.force3D = Bn.force3D, r.renderTransform = r.svg ? iE : mm ? xm : rE, r.uncache = 0, r
  },
  yu = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
  },
  wc = function(e, n, r) {
    var i = Wt(n);
    return ht(parseFloat(n) + parseFloat(Pi(e, "x", r + "px", i))) + i
  },
  rE = function(e, n) {
    n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, xm(e, n)
  },
  Li = "0deg",
  To = "0px",
  Ni = ") ",
  xm = function(e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      l = r.y,
      a = r.z,
      u = r.rotation,
      f = r.rotationY,
      h = r.rotationX,
      d = r.skewX,
      c = r.skewY,
      p = r.scaleX,
      g = r.scaleY,
      D = r.transformPerspective,
      m = r.force3D,
      _ = r.target,
      v = r.zOrigin,
      y = "",
      b = m === "auto" && e && e !== 1 || m === !0;
    if (v && (h !== Li || f !== Li)) {
      var S = parseFloat(f) * Ys,
        E = Math.sin(S),
        C = Math.cos(S),
        A;
      S = parseFloat(h) * Ys, A = Math.cos(S), o = wc(_, o, E * A * -v), l = wc(_, l, -Math.sin(S) * -v), a = wc(_, a, C * A * -v + v)
    }
    D !== To && (y += "perspective(" + D + Ni), (i || s) && (y += "translate(" + i + "%, " + s + "%) "), (b || o !== To || l !== To || a !== To) && (y += a !== To || b ? "translate3d(" + o + ", " + l + ", " + a + ") " : "translate(" + o + ", " + l + Ni), u !== Li && (y += "rotate(" + u + Ni), f !== Li && (y += "rotateY(" + f + Ni), h !== Li && (y += "rotateX(" + h + Ni), (d !== Li || c !== Li) && (y += "skew(" + d + ", " + c + Ni), (p !== 1 || g !== 1) && (y += "scale(" + p + ", " + g + Ni), _.style[ot] = y || "translate(0, 0)"
  },
  iE = function(e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      l = r.y,
      a = r.rotation,
      u = r.skewX,
      f = r.skewY,
      h = r.scaleX,
      d = r.scaleY,
      c = r.target,
      p = r.xOrigin,
      g = r.yOrigin,
      D = r.xOffset,
      m = r.yOffset,
      _ = r.forceCSS,
      v = parseFloat(o),
      y = parseFloat(l),
      b, S, E, C, A;
    a = parseFloat(a), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, a += f), a || u ? (a *= Ys, u *= Ys, b = Math.cos(a) * h, S = Math.sin(a) * h, E = Math.sin(a - u) * -d, C = Math.cos(a - u) * d, u && (f *= Ys, A = Math.tan(u - f), A = Math.sqrt(1 + A * A), E *= A, C *= A, f && (A = Math.tan(f), A = Math.sqrt(1 + A * A), b *= A, S *= A)), b = ht(b), S = ht(S), E = ht(E), C = ht(C)) : (b = h, C = d, S = E = 0), (v && !~(o + "").indexOf("px") || y && !~(l + "").indexOf("px")) && (v = Pi(c, "x", o, "px"), y = Pi(c, "y", l, "px")), (p || g || D || m) && (v = ht(v + p - (p * b + g * E) + D), y = ht(y + g - (p * S + g * C) + m)), (i || s) && (A = c.getBBox(), v = ht(v + i / 100 * A.width), y = ht(y + s / 100 * A.height)), A = "matrix(" + b + "," + S + "," + E + "," + C + "," + v + "," + y + ")", c.setAttribute("transform", A), _ && (c.style[ot] = A)
  },
  sE = function(e, n, r, i, s) {
    var o = 360,
      l = kt(s),
      a = parseFloat(s) * (l && ~s.indexOf("rad") ? Hi : 1),
      u = a - i,
      f = i + u + "deg",
      h, d;
    return l && (h = s.split("_")[1], h === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), h === "cw" && u < 0 ? u = (u + o * $p) % o - ~~(u / o) * o : h === "ccw" && u > 0 && (u = (u - o * $p) % o - ~~(u / o) * o)), e._pt = d = new yn(e._pt, n, r, i, u, WC), d.e = f, d.u = "deg", e._props.push(r), d
  },
  Vp = function(e, n) {
    for (var r in n) e[r] = n[r];
    return e
  },
  oE = function(e, n, r) {
    var i = Vp({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      l, a, u, f, h, d, c, p;
    i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[ot] = n, l = Ol(r, 1), Rl(r, ot), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[ot], o[ot] = n, l = Ol(r, 1), o[ot] = u);
    for (a in Gr) u = i[a], f = l[a], u !== f && s.indexOf(a) < 0 && (c = Wt(u), p = Wt(f), h = c !== p ? Pi(r, a, u, p) : parseFloat(u), d = parseFloat(f), e._pt = new yn(e._pt, l, a, h, d - h, Ef), e._pt.u = p || 0, e._props.push(a));
    Vp(l, i)
  };
mn("padding,margin,Width,Radius", function(t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(l) {
      return e < 2 ? t + l : "border" + l + t
    });
  mu[e > 1 ? "border" + t : t] = function(l, a, u, f, h) {
    var d, c;
    if (arguments.length < 4) return d = o.map(function(p) {
      return Lr(l, p, u)
    }), c = d.join(" "), c.split(d[0]).length === 5 ? d[0] : c;
    d = (f + "").split(" "), c = {}, o.forEach(function(p, g) {
      return c[p] = d[g] = d[g] || d[(g - 1) / 2 | 0]
    }), l.init(a, c, h)
  }
});
var Jh = {
  name: "css",
  register: Sf,
  targetTest: function(e) {
    return e.style && e.nodeType
  },
  init: function(e, n, r, i, s) {
    var o = this._props,
      l = e.style,
      a = r.vars.startAt,
      u, f, h, d, c, p, g, D, m, _, v, y, b, S, E, C;
    Kh || Sf(), this.styles = this.styles || _m(e), C = this.styles.props, this.tween = r;
    for (g in n)
      if (g !== "autoRound" && (f = n[g], !(An[g] && sm(g, n, r, i, e, s)))) {
        if (c = typeof f, p = mu[g], c === "function" && (f = f.call(r, i, e, s), c = typeof f), c === "string" && ~f.indexOf("random(") && (f = kl(f)), p) p(this, e, g, f, r) && (E = 1);
        else if (g.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(g) + "").trim(), f += "", bi.lastIndex = 0, bi.test(u) || (D = Wt(u), m = Wt(f)), m ? D !== m && (u = Pi(e, g, u, m) + m) : D && (f += D), this.add(l, "setProperty", u, f, i, s, 0, 0, g), o.push(g), C.push(g, 0, l[g]);
        else if (c !== "undefined") {
          if (a && g in a ? (u = typeof a[g] == "function" ? a[g].call(r, i, e, s) : a[g], kt(u) && ~u.indexOf("random(") && (u = kl(u)), Wt(u + "") || (u += Bn.units[g] || Wt(Lr(e, g)) || ""), (u + "").charAt(1) === "=" && (u = Lr(e, g))) : u = Lr(e, g), d = parseFloat(u), _ = c === "string" && f.charAt(1) === "=" && f.substr(0, 2), _ && (f = f.substr(2)), h = parseFloat(f), g in Er && (g === "autoAlpha" && (d === 1 && Lr(e, "visibility") === "hidden" && h && (d = 0), C.push("visibility", 0, l.visibility), di(this, l, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), g !== "scale" && g !== "transform" && (g = Er[g], ~g.indexOf(",") && (g = g.split(",")[0]))), v = g in Gr, v) {
            if (this.styles.save(g), y || (b = e._gsap, b.renderTransform && !n.parseTransform || Ol(e, n.parseTransform), S = n.smoothOrigin !== !1 && b.smooth, y = this._pt = new yn(this._pt, l, ot, 0, 1, b.renderTransform, b, 0, -1), y.dep = 1), g === "scale") this._pt = new yn(this._pt, b, "scaleY", b.scaleY, (_ ? Us(b.scaleY, _ + h) : h) - b.scaleY || 0, Ef), this._pt.u = 0, o.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              C.push(hr, 0, l[hr]), f = tE(f), b.svg ? Pf(e, f, 0, S, 0, this) : (m = parseFloat(f.split(" ")[2]) || 0, m !== b.zOrigin && di(this, b, "zOrigin", b.zOrigin, m), di(this, l, g, yu(u), yu(f)));
              continue
            } else if (g === "svgOrigin") {
              Pf(e, f, 1, S, 0, this);
              continue
            } else if (g in vm) {
              sE(this, b, g, d, _ ? Us(d, _ + f) : f);
              continue
            } else if (g === "smoothOrigin") {
              di(this, b, "smooth", b.smooth, f);
              continue
            } else if (g === "force3D") {
              b[g] = f;
              continue
            } else if (g === "transform") {
              oE(this, f, e);
              continue
            }
          } else g in l || (g = uo(g) || g);
          if (v || (h || h === 0) && (d || d === 0) && !zC.test(f) && g in l) D = (u + "").substr((d + "").length), h || (h = 0), m = Wt(f) || (g in Bn.units ? Bn.units[g] : D), D !== m && (d = Pi(e, g, u, m)), this._pt = new yn(this._pt, v ? b : l, g, d, (_ ? Us(d, _ + h) : h) - d, !v && (m === "px" || g === "zIndex") && n.autoRound !== !1 ? UC : Ef), this._pt.u = m || 0, D !== m && m !== "%" && (this._pt.b = u, this._pt.r = jC);
          else if (g in l) eE.call(this, e, g, u, _ ? _ + f : f);
          else if (g in e) this.add(e, g, u || e[g], _ ? _ + f : f, i, s);
          else if (g !== "parseTransform") {
            $h(g, f);
            continue
          }
          v || (g in l ? C.push(g, 0, l[g]) : C.push(g, 1, u || e[g])), o.push(g)
        }
      } E && fm(this)
  },
  render: function(e, n) {
    if (n.tween._time || !qh())
      for (var r = n._pt; r;) r.r(e, r.d), r = r._next;
    else n.styles.revert()
  },
  get: Lr,
  aliases: Er,
  getSetter: function(e, n, r) {
    var i = Er[n];
    return i && i.indexOf(",") < 0 && (n = i), n in Gr && n !== hr && (e._gsap.x || Lr(e, "x")) ? r && Ip === r ? n === "scale" ? KC : XC : (Ip = r || {}) && (n === "scale" ? qC : GC) : e.style && !Nh(e.style[n]) ? VC : ~n.indexOf("-") ? YC : Yh(e, n)
  },
  core: {
    _removeProperty: Rl,
    _getMatrix: Qh
  }
};
Vt.utils.checkPrefix = uo;
Vt.core.getStyleSaver = _m;
(function(t, e, n, r) {
  var i = mn(t + "," + e + "," + n, function(s) {
    Gr[s] = 1
  });
  mn(e, function(s) {
    Bn.units[s] = "deg", vm[s] = 1
  }), Er[i[13]] = t + "," + e, mn(r, function(s) {
    var o = s.split(":");
    Er[o[1]] = i[o[0]]
  })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  Bn.units[t] = "px"
});
Vt.registerPlugin(Jh);
/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var lE = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  aE = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
  uE = Math.PI / 180,
  pa = Math.sin,
  ga = Math.cos,
  rl = Math.abs,
  So = Math.sqrt,
  cE = function(e) {
    return typeof e == "number"
  },
  Yp = 1e5,
  ii = function(e) {
    return Math.round(e * Yp) / Yp || 0
  };

function fE(t, e, n, r, i, s, o) {
  for (var l = t.length, a, u, f, h, d; --l > -1;)
    for (a = t[l], u = a.length, f = 0; f < u; f += 2) h = a[f], d = a[f + 1], a[f] = h * e + d * r + s, a[f + 1] = h * n + d * i + o;
  return t._dirty = 1, t
}

function hE(t, e, n, r, i, s, o, l, a) {
  if (!(t === l && e === a)) {
    n = rl(n), r = rl(r);
    var u = i % 360 * uE,
      f = ga(u),
      h = pa(u),
      d = Math.PI,
      c = d * 2,
      p = (t - l) / 2,
      g = (e - a) / 2,
      D = f * p + h * g,
      m = -h * p + f * g,
      _ = D * D,
      v = m * m,
      y = _ / (n * n) + v / (r * r);
    y > 1 && (n = So(y) * n, r = So(y) * r);
    var b = n * n,
      S = r * r,
      E = (b * S - b * v - S * _) / (b * v + S * _);
    E < 0 && (E = 0);
    var C = (s === o ? -1 : 1) * So(E),
      A = C * (n * m / r),
      M = C * -(r * D / n),
      B = (t + l) / 2,
      L = (e + a) / 2,
      $ = B + (f * A - h * M),
      z = L + (h * A + f * M),
      re = (D - A) / n,
      j = (m - M) / r,
      U = (-D - A) / n,
      ee = (-m - M) / r,
      W = re * re + j * j,
      R = (j < 0 ? -1 : 1) * Math.acos(re / So(W)),
      ie = (re * ee - j * U < 0 ? -1 : 1) * Math.acos((re * U + j * ee) / So(W * (U * U + ee * ee)));
    isNaN(ie) && (ie = d), !o && ie > 0 ? ie -= c : o && ie < 0 && (ie += c), R %= c, ie %= c;
    var ce = Math.ceil(rl(ie) / (c / 4)),
      ve = [],
      fe = ie / ce,
      De = 4 / 3 * pa(fe / 2) / (1 + ga(fe / 2)),
      xe = f * n,
      N = h * n,
      q = h * -r,
      G = f * r,
      ne;
    for (ne = 0; ne < ce; ne++) i = R + ne * fe, D = ga(i), m = pa(i), re = ga(i += fe), j = pa(i), ve.push(D - De * m, m + De * D, re + De * j, j - De * re, re, j);
    for (ne = 0; ne < ve.length; ne += 2) D = ve[ne], m = ve[ne + 1], ve[ne] = D * xe + m * q + $, ve[ne + 1] = D * N + m * G + z;
    return ve[ne - 2] = l, ve[ne - 1] = a, ve
  }
}

function dE(t) {
  var e = (t + "").replace(aE, function(A) {
      var M = +A;
      return M < 1e-4 && M > -1e-4 ? 0 : M
    }).match(lE) || [],
    n = [],
    r = 0,
    i = 0,
    s = 2 / 3,
    o = e.length,
    l = 0,
    a = "ERROR: malformed path: " + t,
    u, f, h, d, c, p, g, D, m, _, v, y, b, S, E, C = function(M, B, L, $) {
      _ = (L - M) / 3, v = ($ - B) / 3, g.push(M + _, B + v, L - _, $ - v, L, $)
    };
  if (!t || !isNaN(e[0]) || isNaN(e[1])) return console.log(a), n;
  for (u = 0; u < o; u++)
    if (b = c, isNaN(e[u]) ? (c = e[u].toUpperCase(), p = c !== e[u]) : u--, h = +e[u + 1], d = +e[u + 2], p && (h += r, d += i), u || (D = h, m = d), c === "M") g && (g.length < 8 ? n.length -= 1 : l += g.length), r = D = h, i = m = d, g = [h, d], n.push(g), u += 2, c = "L";
    else if (c === "C") g || (g = [0, 0]), p || (r = i = 0), g.push(h, d, r + e[u + 3] * 1, i + e[u + 4] * 1, r += e[u + 5] * 1, i += e[u + 6] * 1), u += 6;
  else if (c === "S") _ = r, v = i, (b === "C" || b === "S") && (_ += r - g[g.length - 4], v += i - g[g.length - 3]), p || (r = i = 0), g.push(_, v, h, d, r += e[u + 3] * 1, i += e[u + 4] * 1), u += 4;
  else if (c === "Q") _ = r + (h - r) * s, v = i + (d - i) * s, p || (r = i = 0), r += e[u + 3] * 1, i += e[u + 4] * 1, g.push(_, v, r + (h - r) * s, i + (d - i) * s, r, i), u += 4;
  else if (c === "T") _ = r - g[g.length - 4], v = i - g[g.length - 3], g.push(r + _, i + v, h + (r + _ * 1.5 - h) * s, d + (i + v * 1.5 - d) * s, r = h, i = d), u += 2;
  else if (c === "H") C(r, i, r = h, i), u += 1;
  else if (c === "V") C(r, i, r, i = h + (p ? i - r : 0)), u += 1;
  else if (c === "L" || c === "Z") c === "Z" && (h = D, d = m, g.closed = !0), (c === "L" || rl(r - h) > .5 || rl(i - d) > .5) && (C(r, i, h, d), c === "L" && (u += 2)), r = h, i = d;
  else if (c === "A") {
    if (S = e[u + 4], E = e[u + 5], _ = e[u + 6], v = e[u + 7], f = 7, S.length > 1 && (S.length < 3 ? (v = _, _ = E, f--) : (v = E, _ = S.substr(2), f -= 2), E = S.charAt(1), S = S.charAt(0)), y = hE(r, i, +e[u + 1], +e[u + 2], +e[u + 3], +S, +E, (p ? r : 0) + _ * 1, (p ? i : 0) + v * 1), u += f, y)
      for (f = 0; f < y.length; f++) g.push(y[f]);
    r = g[g.length - 2], i = g[g.length - 1]
  } else console.log(a);
  return u = g.length, u < 6 ? (n.pop(), u = 0) : g[0] === g[u - 2] && g[1] === g[u - 1] && (g.closed = !0), n.totalPoints = l + u, n
}

function pE(t) {
  cE(t[0]) && (t = [t]);
  var e = "",
    n = t.length,
    r, i, s, o;
  for (i = 0; i < n; i++) {
    for (o = t[i], e += "M" + ii(o[0]) + "," + ii(o[1]) + " C", r = o.length, s = 2; s < r; s++) e += ii(o[s++]) + "," + ii(o[s++]) + " " + ii(o[s++]) + "," + ii(o[s++]) + " " + ii(o[s++]) + "," + ii(o[s]) + " ";
    o.closed && (e += "z")
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
var pn, wm, Cm = function() {
    return pn || typeof window < "u" && (pn = window.gsap) && pn.registerPlugin && pn
  },
  Xp = function() {
    pn = Cm(), pn ? (pn.registerEase("_CE", Ll.create), wm = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
  },
  gE = 1e20,
  _a = function(e) {
    return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
  },
  _E = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  mE = /[cLlsSaAhHvVtTqQ]/g,
  yE = function(e) {
    var n = e.length,
      r = gE,
      i;
    for (i = 1; i < n; i += 6) + e[i] < r && (r = +e[i]);
    return r
  },
  DE = function(e, n, r) {
    !r && r !== 0 && (r = Math.max(+e[e.length - 1], +e[1]));
    var i = +e[0] * -1,
      s = -r,
      o = e.length,
      l = 1 / (+e[o - 2] + i),
      a = -n || (Math.abs(+e[o - 1] - +e[1]) < .01 * (+e[o - 2] - +e[0]) ? yE(e) + s : +e[o - 1] + s),
      u;
    for (a ? a = 1 / a : a = -l, u = 0; u < o; u += 2) e[u] = (+e[u] + i) * l, e[u + 1] = (+e[u + 1] + s) * a
  },
  vE = function t(e, n, r, i, s, o, l, a, u, f, h) {
    var d = (e + r) / 2,
      c = (n + i) / 2,
      p = (r + s) / 2,
      g = (i + o) / 2,
      D = (s + l) / 2,
      m = (o + a) / 2,
      _ = (d + p) / 2,
      v = (c + g) / 2,
      y = (p + D) / 2,
      b = (g + m) / 2,
      S = (_ + y) / 2,
      E = (v + b) / 2,
      C = l - e,
      A = a - n,
      M = Math.abs((r - l) * A - (i - a) * C),
      B = Math.abs((s - l) * A - (o - a) * C),
      L;
    return f || (f = [{
      x: e,
      y: n
    }, {
      x: l,
      y: a
    }], h = 1), f.splice(h || f.length - 1, 0, {
      x: S,
      y: E
    }), (M + B) * (M + B) > u * (C * C + A * A) && (L = f.length, t(e, n, d, c, _, v, S, E, u, f, h), t(S, E, y, b, D, m, l, a, u, f, h + 1 + (f.length - L))), f
  },
  Ll = function() {
    function t(n, r, i) {
      wm || Xp(), this.id = n, this.setData(r, i)
    }
    var e = t.prototype;
    return e.setData = function(r, i) {
      i = i || {}, r = r || "0,0,1,1";
      var s = r.match(_E),
        o = 1,
        l = [],
        a = [],
        u = i.precision || 1,
        f = u <= 1,
        h, d, c, p, g, D, m, _, v;
      if (this.data = r, (mE.test(r) || ~r.indexOf("M") && r.indexOf("C") < 0) && (s = dE(r)[0]), h = s.length, h === 4) s.unshift(0, 0), s.push(1, 1), h = 8;
      else if ((h - 2) % 6) throw "Invalid CustomEase";
      for ((+s[0] != 0 || +s[h - 2] != 1) && DE(s, i.height, i.originY), this.segment = s, p = 2; p < h; p += 6) d = {
        x: +s[p - 2],
        y: +s[p - 1]
      }, c = {
        x: +s[p + 4],
        y: +s[p + 5]
      }, l.push(d, c), vE(d.x, d.y, +s[p], +s[p + 1], +s[p + 2], +s[p + 3], c.x, c.y, 1 / (u * 2e5), l, l.length - 1);
      for (h = l.length, p = 0; p < h; p++) m = l[p], _ = l[p - 1] || m, (m.x > _.x || _.y !== m.y && _.x === m.x || m === _) && m.x <= 1 ? (_.cx = m.x - _.x, _.cy = m.y - _.y, _.n = m, _.nx = m.x, f && p > 1 && Math.abs(_.cy / _.cx - l[p - 2].cy / l[p - 2].cx) > 2 && (f = 0), _.cx < o && (_.cx ? o = _.cx : (_.cx = .001, p === h - 1 && (_.x -= .001, o = Math.min(o, .001), f = 0)))) : (l.splice(p--, 1), h--);
      if (h = 1 / o + 1 | 0, g = 1 / h, D = 0, m = l[0], f) {
        for (p = 0; p < h; p++) v = p * g, m.nx < v && (m = l[++D]), d = m.y + (v - m.x) / m.cx * m.cy, a[p] = {
          x: v,
          cx: g,
          y: d,
          cy: 0,
          nx: 9
        }, p && (a[p - 1].cy = d - a[p - 1].y);
        a[h - 1].cy = l[l.length - 1].y - d
      } else {
        for (p = 0; p < h; p++) m.nx < p * g && (m = l[++D]), a[p] = m;
        D < l.length - 1 && (a[p - 1] = l[l.length - 2])
      }
      return this.ease = function(y) {
        var b = a[y * h | 0] || a[h - 1];
        return b.nx < y && (b = b.n), b.y + (y - b.x) / b.cx * b.cy
      }, this.ease.custom = this, this.id && pn && pn.registerEase(this.id, this.ease), this
    }, e.getSVGData = function(r) {
      return t.getSVGData(this, r)
    }, t.create = function(r, i, s) {
      return new t(r, i, s).ease
    }, t.register = function(r) {
      pn = r, Xp()
    }, t.get = function(r) {
      return pn.parseEase(r)
    }, t.getSVGData = function(r, i) {
      i = i || {};
      var s = i.width || 100,
        o = i.height || 100,
        l = i.x || 0,
        a = (i.y || 0) + o,
        u = pn.utils.toArray(i.path)[0],
        f, h, d, c, p, g, D, m, _, v;
      if (i.invert && (o = -o, a = 0), typeof r == "string" && (r = pn.parseEase(r)), r.custom && (r = r.custom), r instanceof t) f = pE(fE([r.segment], s, 0, 0, -o, l, a));
      else {
        for (f = [l, a], D = Math.max(5, (i.precision || 1) * 200), c = 1 / D, D += 2, m = 5 / D, _ = _a(l + c * s), v = _a(a + r(c) * -o), h = (v - a) / (_ - l), d = 2; d < D; d++) p = _a(l + d * c * s), g = _a(a + r(d * c) * -o), (Math.abs((g - v) / (p - _) - h) > m || d === D - 1) && (f.push(_, v), h = (g - v) / (p - _)), _ = p, v = g;
        f = "M" + f.join(",")
      }
      return u && u.setAttribute("d", f), f
    }, t
  }();
Cm() && pn.registerPlugin(Ll);
Ll.version = "3.12.2";
/*!
 * matrix 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Hr, ss, Zh, Xs, Bo, Ba, Du, il, Jn = "transform",
  kf = Jn + "Origin",
  Em, Tm = function(e) {
    var n = e.ownerDocument || e;
    for (!(Jn in e.style) && ("msTransform" in e.style) && (Jn = "msTransform", kf = Jn + "Origin"); n.parentNode && (n = n.parentNode););
    if (ss = window, Du = new ds, n) {
      Hr = n, Zh = n.documentElement, Xs = n.body, il = Hr.createElementNS("http://www.w3.org/2000/svg", "g"), il.style.transform = "none";
      var r = n.createElement("div"),
        i = n.createElement("div");
      Xs.appendChild(r), r.appendChild(i), r.style.position = "static", r.style[Jn] = "translate3d(0,0,1px)", Em = i.offsetParent !== r, Xs.removeChild(r)
    }
    return n
  },
  bE = function(e) {
    for (var n, r; e && e !== Xs;) r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), n ? n.push(r) : n = [r]), e = e.parentNode;
    return n
  },
  Sm = [],
  Pm = [],
  xE = function() {
    return ss.pageYOffset || Hr.scrollTop || Zh.scrollTop || Xs.scrollTop || 0
  },
  wE = function() {
    return ss.pageXOffset || Hr.scrollLeft || Zh.scrollLeft || Xs.scrollLeft || 0
  },
  ed = function(e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
  },
  CE = function t(e) {
    if (ss.getComputedStyle(e).position === "fixed") return !0;
    if (e = e.parentNode, e && e.nodeType === 1) return t(e)
  },
  Cc = function t(e, n) {
    if (e.parentNode && (Hr || Tm(e))) {
      var r = ed(e),
        i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        s = r ? n ? "rect" : "g" : "div",
        o = n !== 2 ? 0 : 100,
        l = n === 3 ? 100 : 0,
        a = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        u = Hr.createElementNS ? Hr.createElementNS(i.replace(/^https/, "http"), s) : Hr.createElement(s);
      return n && (r ? (Ba || (Ba = t(e)), u.setAttribute("width", .01), u.setAttribute("height", .01), u.setAttribute("transform", "translate(" + o + "," + l + ")"), Ba.appendChild(u)) : (Bo || (Bo = t(e), Bo.style.cssText = a), u.style.cssText = a + "width:0.1px;height:0.1px;top:" + l + "px;left:" + o + "px", Bo.appendChild(u))), u
    }
    throw "Need document and parent."
  },
  EE = function(e) {
    for (var n = new ds, r = 0; r < e.numberOfItems; r++) n.multiply(e.getItem(r).matrix);
    return n
  },
  TE = function(e) {
    var n = e.getCTM(),
      r;
    return n || (r = e.style[Jn], e.style[Jn] = "none", e.appendChild(il), n = il.getCTM(), e.removeChild(il), r ? e.style[Jn] = r : e.style.removeProperty(Jn.replace(/([A-Z])/g, "-$1").toLowerCase())), n || Du.clone()
  },
  SE = function(e, n) {
    var r = ed(e),
      i = e === r,
      s = r ? Sm : Pm,
      o = e.parentNode,
      l, a, u, f, h, d;
    if (e === ss) return e;
    if (s.length || s.push(Cc(e, 1), Cc(e, 2), Cc(e, 3)), l = r ? Ba : Bo, r) i ? (u = TE(e), f = -u.e / u.a, h = -u.f / u.d, a = Du) : e.getBBox ? (u = e.getBBox(), a = e.transform ? e.transform.baseVal : {}, a = a.numberOfItems ? a.numberOfItems > 1 ? EE(a) : a.getItem(0).matrix : Du, f = a.a * u.x + a.c * u.y, h = a.b * u.x + a.d * u.y) : (a = new ds, f = h = 0), n && e.tagName.toLowerCase() === "g" && (f = h = 0), (i ? r : o).appendChild(l), l.setAttribute("transform", "matrix(" + a.a + "," + a.b + "," + a.c + "," + a.d + "," + (a.e + f) + "," + (a.f + h) + ")");
    else {
      if (f = h = 0, Em)
        for (a = e.offsetParent, u = e; u && (u = u.parentNode) && u !== a && u.parentNode;)(ss.getComputedStyle(u)[Jn] + "").length > 4 && (f = u.offsetLeft, h = u.offsetTop, u = 0);
      if (d = ss.getComputedStyle(e), d.position !== "absolute" && d.position !== "fixed")
        for (a = e.offsetParent; o && o !== a;) f += o.scrollLeft || 0, h += o.scrollTop || 0, o = o.parentNode;
      u = l.style, u.top = e.offsetTop - h + "px", u.left = e.offsetLeft - f + "px", u[Jn] = d[Jn], u[kf] = d[kf], u.position = d.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(l)
    }
    return l
  },
  Ec = function(e, n, r, i, s, o, l) {
    return e.a = n, e.b = r, e.c = i, e.d = s, e.e = o, e.f = l, e
  },
  ds = function() {
    function t(n, r, i, s, o, l) {
      n === void 0 && (n = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), s === void 0 && (s = 1), o === void 0 && (o = 0), l === void 0 && (l = 0), Ec(this, n, r, i, s, o, l)
    }
    var e = t.prototype;
    return e.inverse = function() {
      var r = this.a,
        i = this.b,
        s = this.c,
        o = this.d,
        l = this.e,
        a = this.f,
        u = r * o - i * s || 1e-10;
      return Ec(this, o / u, -i / u, -s / u, r / u, (s * a - o * l) / u, -(r * a - i * l) / u)
    }, e.multiply = function(r) {
      var i = this.a,
        s = this.b,
        o = this.c,
        l = this.d,
        a = this.e,
        u = this.f,
        f = r.a,
        h = r.c,
        d = r.b,
        c = r.d,
        p = r.e,
        g = r.f;
      return Ec(this, f * i + d * o, f * s + d * l, h * i + c * o, h * s + c * l, a + p * i + g * o, u + p * s + g * l)
    }, e.clone = function() {
      return new t(this.a, this.b, this.c, this.d, this.e, this.f)
    }, e.equals = function(r) {
      var i = this.a,
        s = this.b,
        o = this.c,
        l = this.d,
        a = this.e,
        u = this.f;
      return i === r.a && s === r.b && o === r.c && l === r.d && a === r.e && u === r.f
    }, e.apply = function(r, i) {
      i === void 0 && (i = {});
      var s = r.x,
        o = r.y,
        l = this.a,
        a = this.b,
        u = this.c,
        f = this.d,
        h = this.e,
        d = this.f;
      return i.x = s * l + o * u + h || 0, i.y = s * a + o * f + d || 0, i
    }, t
  }();

function Yi(t, e, n, r) {
  if (!t || !t.parentNode || (Hr || Tm(t)).documentElement === t) return new ds;
  var i = bE(t),
    s = ed(t),
    o = s ? Sm : Pm,
    l = SE(t, n),
    a = o[0].getBoundingClientRect(),
    u = o[1].getBoundingClientRect(),
    f = o[2].getBoundingClientRect(),
    h = l.parentNode,
    d = !r && CE(t),
    c = new ds((u.left - a.left) / 100, (u.top - a.top) / 100, (f.left - a.left) / 100, (f.top - a.top) / 100, a.left + (d ? 0 : wE()), a.top + (d ? 0 : xE()));
  if (h.removeChild(l), i)
    for (a = i.length; a--;) u = i[a], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
  return e ? c.inverse() : c
}

function Kp(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function PE(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
var Le, Ke, Mn, dr, zr, Tc, Nr, Ff, Io, pi, km, Af, Nl, td, $o, rr, Ho, Ia, Fm, Rf, vu = 0,
  Am = function() {
    return typeof window < "u"
  },
  Rm = function() {
    return Le || Am() && (Le = window.gsap) && Le.registerPlugin && Le
  },
  ci = function(e) {
    return typeof e == "function"
  },
  sl = function(e) {
    return typeof e == "object"
  },
  or = function(e) {
    return typeof e > "u"
  },
  $a = function() {
    return !1
  },
  ol = "transform",
  Mf = "transformOrigin",
  si = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  Po = Array.isArray,
  ma = function(e, n) {
    var r = Mn.createElementNS ? Mn.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Mn.createElement(e);
    return r.style ? r : Mn.createElement(e)
  },
  qp = 180 / Math.PI,
  Bi = 1e20,
  kE = new ds,
  oi = Date.now || function() {
    return new Date().getTime()
  },
  os = [],
  Ks = {},
  FE = 0,
  AE = /^(?:a|input|textarea|button|select)$/i,
  Gp = 0,
  Cs = {},
  Rr = {},
  Mm = function(e, n) {
    var r = {},
      i;
    for (i in e) r[i] = n ? e[i] * n : e[i];
    return r
  },
  RE = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  Qp = function t(e, n) {
    for (var r = e.length, i; r--;) n ? e[r].style.touchAction = n : e[r].style.removeProperty("touch-action"), i = e[r].children, i && i.length && t(i, n)
  },
  Om = function() {
    return os.forEach(function(e) {
      return e()
    })
  },
  ME = function(e) {
    os.push(e), os.length === 1 && Le.ticker.add(Om)
  },
  Jp = function() {
    return !os.length && Le.ticker.remove(Om)
  },
  Zp = function(e) {
    for (var n = os.length; n--;) os[n] === e && os.splice(n, 1);
    Le.to(Jp, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: Jp,
      data: "_draggable"
    })
  },
  OE = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  bt = function(e, n, r, i) {
    if (e.addEventListener) {
      var s = Nl[n];
      i = i || (km ? {
        passive: !1
      } : null), e.addEventListener(s || n, r, i), s && n !== s && e.addEventListener(n, r, i)
    }
  },
  pt = function(e, n, r, i) {
    if (e.removeEventListener) {
      var s = Nl[n];
      e.removeEventListener(s || n, r, i), s && n !== s && e.removeEventListener(n, r, i)
    }
  },
  zn = function(e) {
    e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
  },
  LE = function(e, n) {
    for (var r = e.length; r--;)
      if (e[r].identifier === n) return !0
  },
  NE = function t(e) {
    td = e.touches && vu < e.touches.length, pt(e.target, "touchend", t)
  },
  eg = function(e) {
    td = e.touches && vu < e.touches.length, bt(e.target, "touchend", NE)
  },
  qs = function(e) {
    return Ke.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
  },
  Gs = function(e) {
    return Ke.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
  },
  tg = function t(e, n) {
    bt(e, "scroll", n), co(e.parentNode) || t(e.parentNode, n)
  },
  ng = function t(e, n) {
    pt(e, "scroll", n), co(e.parentNode) || t(e.parentNode, n)
  },
  co = function(e) {
    return !e || e === dr || e.nodeType === 9 || e === Mn.body || e === Ke || !e.nodeType || !e.parentNode
  },
  rg = function(e, n) {
    var r = n === "x" ? "Width" : "Height",
      i = "scroll" + r,
      s = "client" + r;
    return Math.max(0, co(e) ? Math.max(dr[i], zr[i]) - (Ke["inner" + r] || dr[s] || zr[s]) : e[i] - e[s])
  },
  Sc = function t(e, n) {
    var r = rg(e, "x"),
      i = rg(e, "y");
    co(e) ? e = Rr : t(e.parentNode, n), e._gsMaxScrollX = r, e._gsMaxScrollY = i, n || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
  },
  Pc = function(e, n, r) {
    var i = e.style;
    i && (or(i[n]) && (n = Io(n, e) || n), r == null ? i.removeProperty && i.removeProperty(n.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[n] = r)
  },
  Bl = function(e) {
    return Ke.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
  },
  Ii = {},
  Es = function(e) {
    if (e === Ke) return Ii.left = Ii.top = 0, Ii.width = Ii.right = dr.clientWidth || e.innerWidth || zr.clientWidth || 0, Ii.height = Ii.bottom = (e.innerHeight || 0) - 20 < dr.clientHeight ? dr.clientHeight : e.innerHeight || zr.clientHeight || 0, Ii;
    var n = e.ownerDocument || Mn,
      r = or(e.pageX) ? !e.nodeType && !or(e.left) && !or(e.top) ? e : pi(e)[0].getBoundingClientRect() : {
        left: e.pageX - Gs(n),
        top: e.pageY - qs(n),
        right: e.pageX - Gs(n) + 1,
        bottom: e.pageY - qs(n) + 1
      };
    return or(r.right) && !or(r.width) ? (r.right = r.left + r.width, r.bottom = r.top + r.height) : or(r.width) && (r = {
      width: r.right - r.left,
      height: r.bottom - r.top,
      right: r.right,
      left: r.left,
      bottom: r.bottom,
      top: r.top
    }), r
  },
  ft = function(e, n, r) {
    var i = e.vars,
      s = i[r],
      o = e._listeners[n],
      l;
    return ci(s) && (l = s.apply(i.callbackScope || e, i[r + "Params"] || [e.pointerEvent])), o && e.dispatchEvent(n) === !1 && (l = !1), l
  },
  ig = function(e, n) {
    var r = pi(e)[0],
      i, s, o;
    return !r.nodeType && r !== Ke ? or(e.left) ? (s = e.min || e.minX || e.minRotation || 0, i = e.min || e.minY || 0, {
      left: s,
      top: i,
      width: (e.max || e.maxX || e.maxRotation || 0) - s,
      height: (e.max || e.maxY || 0) - i
    }) : (o = {
      x: 0,
      y: 0
    }, {
      left: e.left - o.x,
      top: e.top - o.y,
      width: e.width,
      height: e.height
    }) : BE(r, n)
  },
  Wn = {},
  BE = function(e, n) {
    n = pi(n)[0];
    var r = e.getBBox && e.ownerSVGElement,
      i = e.ownerDocument || Mn,
      s, o, l, a, u, f, h, d, c, p, g, D, m;
    if (e === Ke) l = qs(i), s = Gs(i), o = s + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0), a = l + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
    else {
      if (n === Ke || or(n)) return e.getBoundingClientRect();
      s = l = 0, r ? (p = e.getBBox(), g = p.width, D = p.height) : (e.viewBox && (p = e.viewBox.baseVal) && (s = p.x || 0, l = p.y || 0, g = p.width, D = p.height), g || (m = Bl(e), p = m.boxSizing === "border-box", g = (parseFloat(m.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(m.borderLeftWidth) + parseFloat(m.borderRightWidth)), D = (parseFloat(m.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(m.borderTopWidth) + parseFloat(m.borderBottomWidth)))), o = g, a = D
    }
    return e === n ? {
      left: s,
      top: l,
      width: o - s,
      height: a - l
    } : (u = Yi(n, !0).multiply(Yi(e)), f = u.apply({
      x: s,
      y: l
    }), h = u.apply({
      x: o,
      y: l
    }), d = u.apply({
      x: o,
      y: a
    }), c = u.apply({
      x: s,
      y: a
    }), s = Math.min(f.x, h.x, d.x, c.x), l = Math.min(f.y, h.y, d.y, c.y), {
      left: s,
      top: l,
      width: Math.max(f.x, h.x, d.x, c.x) - s,
      height: Math.max(f.y, h.y, d.y, c.y) - l
    })
  },
  kc = function(e, n, r, i, s, o) {
    var l = {},
      a, u, f;
    if (n)
      if (s !== 1 && n instanceof Array) {
        if (l.end = a = [], f = n.length, sl(n[0]))
          for (u = 0; u < f; u++) a[u] = Mm(n[u], s);
        else
          for (u = 0; u < f; u++) a[u] = n[u] * s;
        r += 1.1, i -= 1.1
      } else ci(n) ? l.end = function(h) {
        var d = n.call(e, h),
          c, p;
        if (s !== 1)
          if (sl(d)) {
            c = {};
            for (p in d) c[p] = d[p] * s;
            d = c
          } else d *= s;
        return d
      } : l.end = n;
    return (r || r === 0) && (l.max = r), (i || i === 0) && (l.min = i), o && (l.velocity = 0), l
  },
  IE = function t(e) {
    var n;
    return !e || !e.getAttribute || e === zr ? !1 : (n = e.getAttribute("data-clickable")) === "true" || n !== "false" && (AE.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : t(e.parentNode)
  },
  ya = function(e, n) {
    for (var r = e.length, i; r--;) i = e[r], i.ondragstart = i.onselectstart = n ? null : $a, Le.set(i, {
      lazy: !0,
      userSelect: n ? "text" : "none"
    })
  },
  $E = function t(e) {
    if (Bl(e).position === "fixed") return !0;
    if (e = e.parentNode, e && e.nodeType === 1) return t(e)
  },
  Lm, Of, HE = function(e, n) {
    e = Le.utils.toArray(e)[0], n = n || {};
    var r = document.createElement("div"),
      i = r.style,
      s = e.firstChild,
      o = 0,
      l = 0,
      a = e.scrollTop,
      u = e.scrollLeft,
      f = e.scrollWidth,
      h = e.scrollHeight,
      d = 0,
      c = 0,
      p = 0,
      g, D, m, _, v, y;
    Lm && n.force3D !== !1 ? (v = "translate3d(", y = "px,0px)") : ol && (v = "translate(", y = "px)"), this.scrollTop = function(b, S) {
      if (!arguments.length) return -this.top();
      this.top(-b, S)
    }, this.scrollLeft = function(b, S) {
      if (!arguments.length) return -this.left();
      this.left(-b, S)
    }, this.left = function(b, S) {
      if (!arguments.length) return -(e.scrollLeft + l);
      var E = e.scrollLeft - u,
        C = l;
      if ((E > 2 || E < -2) && !S) {
        u = e.scrollLeft, Le.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        }), this.left(-u), n.onKill && n.onKill();
        return
      }
      b = -b, b < 0 ? (l = b - .5 | 0, b = 0) : b > c ? (l = b - c | 0, b = c) : l = 0, (l || C) && (this._skip || (i[ol] = v + -l + "px," + -o + y), l + d >= 0 && (i.paddingRight = l + d + "px")), e.scrollLeft = b | 0, u = e.scrollLeft
    }, this.top = function(b, S) {
      if (!arguments.length) return -(e.scrollTop + o);
      var E = e.scrollTop - a,
        C = o;
      if ((E > 2 || E < -2) && !S) {
        a = e.scrollTop, Le.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        }), this.top(-a), n.onKill && n.onKill();
        return
      }
      b = -b, b < 0 ? (o = b - .5 | 0, b = 0) : b > p ? (o = b - p | 0, b = p) : o = 0, (o || C) && (this._skip || (i[ol] = v + -l + "px," + -o + y)), e.scrollTop = b | 0, a = e.scrollTop
    }, this.maxScrollTop = function() {
      return p
    }, this.maxScrollLeft = function() {
      return c
    }, this.disable = function() {
      for (s = r.firstChild; s;) _ = s.nextSibling, e.appendChild(s), s = _;
      e === r.parentNode && e.removeChild(r)
    }, this.enable = function() {
      if (s = e.firstChild, s !== r) {
        for (; s;) _ = s.nextSibling, r.appendChild(s), s = _;
        e.appendChild(r), this.calibrate()
      }
    }, this.calibrate = function(b) {
      var S = e.clientWidth === g,
        E, C, A;
      a = e.scrollTop, u = e.scrollLeft, !(S && e.clientHeight === D && r.offsetHeight === m && f === e.scrollWidth && h === e.scrollHeight && !b) && ((o || l) && (C = this.left(), A = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), E = Bl(e), (!S || b) && (i.display = "block", i.width = "auto", i.paddingRight = "0px", d = Math.max(0, e.scrollWidth - e.clientWidth), d && (d += parseFloat(E.paddingLeft) + (Of ? parseFloat(E.paddingRight) : 0))), i.display = "inline-block", i.position = "relative", i.overflow = "visible", i.verticalAlign = "top", i.boxSizing = "content-box", i.width = "100%", i.paddingRight = d + "px", Of && (i.paddingBottom = E.paddingBottom), g = e.clientWidth, D = e.clientHeight, f = e.scrollWidth, h = e.scrollHeight, c = e.scrollWidth - g, p = e.scrollHeight - D, m = r.offsetHeight, i.display = "block", (C || A) && (this.left(C), this.top(A)))
    }, this.content = r, this.element = e, this._skip = !1, this.enable()
  },
  Fc = function(e) {
    if (Am() && document.body) {
      var n = window && window.navigator;
      Ke = window, Mn = document, dr = Mn.documentElement, zr = Mn.body, Tc = ma("div"), Ia = !!window.PointerEvent, Nr = ma("div"), Nr.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Ho = Nr.style.cursor === "grab" ? "grab" : "move", $o = n && n.userAgent.toLowerCase().indexOf("android") !== -1, Af = "ontouchstart" in dr && "orientation" in Ke || n && (n.MaxTouchPoints > 0 || n.msMaxTouchPoints > 0), Of = function() {
        var r = ma("div"),
          i = ma("div"),
          s = i.style,
          o = zr,
          l;
        return s.display = "inline-block", s.position = "relative", r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", r.appendChild(i), o.appendChild(r), l = i.offsetHeight + 18 > r.scrollHeight, o.removeChild(r), l
      }(), Nl = function(r) {
        for (var i = r.split(","), s = ("onpointerdown" in Tc ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Tc ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : r).split(","), o = {}, l = 4; --l > -1;) o[i[l]] = s[l], o[s[l]] = i[l];
        try {
          dr.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
              km = 1
            }
          }))
        } catch {}
        return o
      }("touchstart,touchmove,touchend,touchcancel"), bt(Mn, "touchcancel", $a), bt(Ke, "touchmove", $a), zr && zr.addEventListener("touchstart", $a), bt(Mn, "contextmenu", function() {
        for (var r in Ks) Ks[r].isPressed && Ks[r].endDrag()
      }), Le = Ff = Rm()
    }
    Le ? (rr = Le.plugins.inertia, Fm = Le.core.context || function() {}, Io = Le.utils.checkPrefix, ol = Io(ol), Mf = Io(Mf), pi = Le.utils.toArray, Rf = Le.core.getStyleSaver, Lm = !!Io("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
  },
  zE = function() {
    function t(n) {
      this._listeners = {}, this.target = n || this
    }
    var e = t.prototype;
    return e.addEventListener = function(r, i) {
      var s = this._listeners[r] || (this._listeners[r] = []);
      ~s.indexOf(i) || s.push(i)
    }, e.removeEventListener = function(r, i) {
      var s = this._listeners[r],
        o = s && s.indexOf(i);
      o >= 0 && s.splice(o, 1)
    }, e.dispatchEvent = function(r) {
      var i = this,
        s;
      return (this._listeners[r] || []).forEach(function(o) {
        return o.call(i, {
          type: r,
          target: i.target
        }) === !1 && (s = !1)
      }), s
    }, t
  }(),
  Ql = function(t) {
    PE(e, t);

    function e(n, r) {
      var i;
      i = t.call(this) || this, Ff || Fc(1), n = pi(n)[0], i.styles = Rf && Rf(n, "transform,left,top"), rr || (rr = Le.plugins.inertia), i.vars = r = Mm(r || {}), i.target = n, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(r.dragResistance) || 0, i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, i.lockAxis = r.lockAxis, i.autoScroll = r.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!r.allowEventDefault, Le.getProperty(n, "x");
      var s = (r.type || "x,y").toLowerCase(),
        o = ~s.indexOf("x") || ~s.indexOf("y"),
        l = s.indexOf("rotation") !== -1,
        a = l ? "rotation" : o ? "x" : "left",
        u = o ? "y" : "top",
        f = !!(~s.indexOf("x") || ~s.indexOf("left") || s === "scroll"),
        h = !!(~s.indexOf("y") || ~s.indexOf("top") || s === "scroll"),
        d = r.minimumMovement || 2,
        c = Kp(i),
        p = pi(r.trigger || r.handle || n),
        g = {},
        D = 0,
        m = !1,
        _ = r.autoScrollMarginTop || 40,
        v = r.autoScrollMarginRight || 40,
        y = r.autoScrollMarginBottom || 40,
        b = r.autoScrollMarginLeft || 40,
        S = r.clickableTest || IE,
        E = 0,
        C = n._gsap || Le.core.getCache(n),
        A = $E(n),
        M = function(k, I) {
          return parseFloat(C.get(n, k, I))
        },
        B = n.ownerDocument || Mn,
        L, $, z, re, j, U, ee, W, R, ie, ce, ve, fe, De, xe, N, q, G, ne, me, x, w, P, O, V, T, J, Q, te, X, se, le, pe, he = function(k) {
          return zn(k), k.stopImmediatePropagation && k.stopImmediatePropagation(), !1
        },
        ae = function _e(k) {
          if (c.autoScroll && c.isDragging && (m || q)) {
            var I = n,
              F = c.autoScroll * 15,
              Y, Z, H, oe, K, ue, ye, ge;
            for (m = !1, Rr.scrollTop = Ke.pageYOffset != null ? Ke.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop, Rr.scrollLeft = Ke.pageXOffset != null ? Ke.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft, oe = c.pointerX - Rr.scrollLeft, K = c.pointerY - Rr.scrollTop; I && !Z;) Z = co(I.parentNode), Y = Z ? Rr : I.parentNode, H = Z ? {
              bottom: Math.max(dr.clientHeight, Ke.innerHeight || 0),
              right: Math.max(dr.clientWidth, Ke.innerWidth || 0),
              left: 0,
              top: 0
            } : Y.getBoundingClientRect(), ue = ye = 0, h && (ge = Y._gsMaxScrollY - Y.scrollTop, ge < 0 ? ye = ge : K > H.bottom - y && ge ? (m = !0, ye = Math.min(ge, F * (1 - Math.max(0, H.bottom - K) / y) | 0)) : K < H.top + _ && Y.scrollTop && (m = !0, ye = -Math.min(Y.scrollTop, F * (1 - Math.max(0, K - H.top) / _) | 0)), ye && (Y.scrollTop += ye)), f && (ge = Y._gsMaxScrollX - Y.scrollLeft, ge < 0 ? ue = ge : oe > H.right - v && ge ? (m = !0, ue = Math.min(ge, F * (1 - Math.max(0, H.right - oe) / v) | 0)) : oe < H.left + b && Y.scrollLeft && (m = !0, ue = -Math.min(Y.scrollLeft, F * (1 - Math.max(0, oe - H.left) / b) | 0)), ue && (Y.scrollLeft += ue)), Z && (ue || ye) && (Ke.scrollTo(Y.scrollLeft, Y.scrollTop), bn(c.pointerX + ue, c.pointerY + ye)), I = Y
          }
          if (q) {
            var Se = c.x,
              ze = c.y;
            l ? (c.deltaX = Se - parseFloat(C.rotation), c.rotation = Se, C.rotation = Se + "deg", C.renderTransform(1, C)) : $ ? (h && (c.deltaY = ze - $.top(), $.top(ze)), f && (c.deltaX = Se - $.left(), $.left(Se))) : o ? (h && (c.deltaY = ze - parseFloat(C.y), C.y = ze + "px"), f && (c.deltaX = Se - parseFloat(C.x), C.x = Se + "px"), C.renderTransform(1, C)) : (h && (c.deltaY = ze - parseFloat(n.style.top || 0), n.style.top = ze + "px"), f && (c.deltaX = Se - parseFloat(n.style.left || 0), n.style.left = Se + "px")), W && !k && !Q && (Q = !0, ft(c, "drag", "onDrag") === !1 && (f && (c.x -= c.deltaX), h && (c.y -= c.deltaY), _e(!0)), Q = !1)
          }
          q = !1
        },
        we = function(k, I) {
          var F = c.x,
            Y = c.y,
            Z, H;
          n._gsap || (C = Le.core.getCache(n)), C.uncache && Le.getProperty(n, "x"), o ? (c.x = parseFloat(C.x), c.y = parseFloat(C.y)) : l ? c.x = c.rotation = parseFloat(C.rotation) : $ ? (c.y = $.top(), c.x = $.left()) : (c.y = parseFloat(n.style.top || (H = Bl(n)) && H.top) || 0, c.x = parseFloat(n.style.left || (H || {}).left) || 0), (ne || me || x) && !I && (c.isDragging || c.isThrowing) && (x && (Cs.x = c.x, Cs.y = c.y, Z = x(Cs), Z.x !== c.x && (c.x = Z.x, q = !0), Z.y !== c.y && (c.y = Z.y, q = !0)), ne && (Z = ne(c.x), Z !== c.x && (c.x = Z, l && (c.rotation = Z), q = !0)), me && (Z = me(c.y), Z !== c.y && (c.y = Z), q = !0)), q && ae(!0), k || (c.deltaX = c.x - F, c.deltaY = c.y - Y, ft(c, "throwupdate", "onThrowUpdate"))
        },
        Ee = function(k, I, F, Y) {
          return I == null && (I = -Bi), F == null && (F = Bi), ci(k) ? function(Z) {
            var H = c.isPressed ? 1 - c.edgeResistance : 1;
            return k.call(c, (Z > F ? F + (Z - F) * H : Z < I ? I + (Z - I) * H : Z) * Y) * Y
          } : Po(k) ? function(Z) {
            for (var H = k.length, oe = 0, K = Bi, ue, ye; --H > -1;) ue = k[H], ye = ue - Z, ye < 0 && (ye = -ye), ye < K && ue >= I && ue <= F && (oe = H, K = ye);
            return k[oe]
          } : isNaN(k) ? function(Z) {
            return Z
          } : function() {
            return k * Y
          }
        },
        We = function(k, I, F, Y, Z, H, oe) {
          return H = H && H < Bi ? H * H : Bi, ci(k) ? function(K) {
            var ue = c.isPressed ? 1 - c.edgeResistance : 1,
              ye = K.x,
              ge = K.y,
              Se, ze, Ye;
            return K.x = ye = ye > F ? F + (ye - F) * ue : ye < I ? I + (ye - I) * ue : ye, K.y = ge = ge > Z ? Z + (ge - Z) * ue : ge < Y ? Y + (ge - Y) * ue : ge, Se = k.call(c, K), Se !== K && (K.x = Se.x, K.y = Se.y), oe !== 1 && (K.x *= oe, K.y *= oe), H < Bi && (ze = K.x - ye, Ye = K.y - ge, ze * ze + Ye * Ye > H && (K.x = ye, K.y = ge)), K
          } : Po(k) ? function(K) {
            for (var ue = k.length, ye = 0, ge = Bi, Se, ze, Ye, Re; --ue > -1;) Ye = k[ue], Se = Ye.x - K.x, ze = Ye.y - K.y, Re = Se * Se + ze * ze, Re < ge && (ye = ue, ge = Re);
            return ge <= H ? k[ye] : K
          } : function(K) {
            return K
          }
        },
        Qe = function() {
          var k, I, F, Y;
          ee = !1, $ ? ($.calibrate(), c.minX = ce = -$.maxScrollLeft(), c.minY = fe = -$.maxScrollTop(), c.maxX = ie = c.maxY = ve = 0, ee = !0) : r.bounds && (k = ig(r.bounds, n.parentNode), l ? (c.minX = ce = k.left, c.maxX = ie = k.left + k.width, c.minY = fe = c.maxY = ve = 0) : !or(r.bounds.maxX) || !or(r.bounds.maxY) ? (k = r.bounds, c.minX = ce = k.minX, c.minY = fe = k.minY, c.maxX = ie = k.maxX, c.maxY = ve = k.maxY) : (I = ig(n, n.parentNode), c.minX = ce = Math.round(M(a, "px") + k.left - I.left), c.minY = fe = Math.round(M(u, "px") + k.top - I.top), c.maxX = ie = Math.round(ce + (k.width - I.width)), c.maxY = ve = Math.round(fe + (k.height - I.height))), ce > ie && (c.minX = ie, c.maxX = ie = ce, ce = c.minX), fe > ve && (c.minY = ve, c.maxY = ve = fe, fe = c.minY), l && (c.minRotation = ce, c.maxRotation = ie), ee = !0), r.liveSnap && (F = r.liveSnap === !0 ? r.snap || {} : r.liveSnap, Y = Po(F) || ci(F), l ? (ne = Ee(Y ? F : F.rotation, ce, ie, 1), me = null) : F.points ? x = We(Y ? F : F.points, ce, ie, fe, ve, F.radius, $ ? -1 : 1) : (f && (ne = Ee(Y ? F : F.x || F.left || F.scrollLeft, ce, ie, $ ? -1 : 1)), h && (me = Ee(Y ? F : F.y || F.top || F.scrollTop, fe, ve, $ ? -1 : 1))))
        },
        yt = function() {
          c.isThrowing = !1, ft(c, "throwcomplete", "onThrowComplete")
        },
        Dt = function() {
          c.isThrowing = !1
        },
        Ft = function(k, I) {
          var F, Y, Z, H;
          k && rr ? (k === !0 && (F = r.snap || r.liveSnap || {}, Y = Po(F) || ci(F), k = {
            resistance: (r.throwResistance || r.resistance || 1e3) / (l ? 10 : 1)
          }, l ? k.rotation = kc(c, Y ? F : F.rotation, ie, ce, 1, I) : (f && (k[a] = kc(c, Y ? F : F.points || F.x || F.left, ie, ce, $ ? -1 : 1, I || c.lockedAxis === "x")), h && (k[u] = kc(c, Y ? F : F.points || F.y || F.top, ve, fe, $ ? -1 : 1, I || c.lockedAxis === "y")), (F.points || Po(F) && sl(F[0])) && (k.linkedProps = a + "," + u, k.radius = F.radius))), c.isThrowing = !0, H = isNaN(r.overshootTolerance) ? r.edgeResistance === 1 ? 0 : 1 - c.edgeResistance + .2 : r.overshootTolerance, k.duration || (k.duration = {
            max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
            min: isNaN(r.minDuration) ? H === 0 || sl(k) && k.resistance > 1e3 ? 0 : .5 : r.minDuration,
            overshoot: H
          }), c.tween = Z = Le.to($ || n, {
            inertia: k,
            data: "_draggable",
            onComplete: yt,
            onInterrupt: Dt,
            onUpdate: r.fastMode ? ft : we,
            onUpdateParams: r.fastMode ? [c, "onthrowupdate", "onThrowUpdate"] : F && F.radius ? [!1, !0] : []
          }), r.fastMode || ($ && ($._skip = !0), Z.render(1e9, !0, !0), we(!0, !0), c.endX = c.x, c.endY = c.y, l && (c.endRotation = c.x), Z.play(0), we(!0, !0), $ && ($._skip = !1))) : ee && c.applyBounds()
        },
        $n = function(k) {
          var I = O,
            F;
          O = Yi(n.parentNode, !0), k && c.isPressed && !O.equals(I || new ds) && (F = I.inverse().apply({
            x: z,
            y: re
          }), O.apply(F, F), z = F.x, re = F.y), O.equals(kE) && (O = null)
        },
        Je = function() {
          var k = 1 - c.edgeResistance,
            I = A ? Gs(B) : 0,
            F = A ? qs(B) : 0,
            Y, Z, H;
          o && (C.x = M(a, "px") + "px", C.y = M(u, "px") + "px", C.renderTransform()), $n(!1), Wn.x = c.pointerX - I, Wn.y = c.pointerY - F, O && O.apply(Wn, Wn), z = Wn.x, re = Wn.y, q && (bn(c.pointerX, c.pointerY), ae(!0)), le = Yi(n), $ ? (Qe(), U = $.top(), j = $.left()) : (tt() ? (we(!0, !0), Qe()) : c.applyBounds(), l ? (Y = n.ownerSVGElement ? [C.xOrigin - n.getBBox().x, C.yOrigin - n.getBBox().y] : (Bl(n)[Mf] || "0 0").split(" "), N = c.rotationOrigin = Yi(n).apply({
            x: parseFloat(Y[0]) || 0,
            y: parseFloat(Y[1]) || 0
          }), we(!0, !0), Z = c.pointerX - N.x - I, H = N.y - c.pointerY + F, j = c.x, U = c.y = Math.atan2(H, Z) * qp) : (U = M(u, "px"), j = M(a, "px"))), ee && k && (j > ie ? j = ie + (j - ie) / k : j < ce && (j = ce - (ce - j) / k), l || (U > ve ? U = ve + (U - ve) / k : U < fe && (U = fe - (fe - U) / k))), c.startX = j = si(j), c.startY = U = si(U)
        },
        tt = function() {
          return c.tween && c.tween.isActive()
        },
        vn = function() {
          Nr.parentNode && !tt() && !c.isDragging && Nr.parentNode.removeChild(Nr)
        },
        an = function(k, I) {
          var F;
          if (!L || c.isPressed || !k || (k.type === "mousedown" || k.type === "pointerdown") && !I && oi() - E < 30 && Nl[c.pointerEvent.type]) {
            se && k && L && zn(k);
            return
          }
          if (V = tt(), pe = !1, c.pointerEvent = k, Nl[k.type] ? (P = ~k.type.indexOf("touch") ? k.currentTarget || k.target : B, bt(P, "touchend", rt), bt(P, "touchmove", Pe), bt(P, "touchcancel", rt), bt(B, "touchstart", eg)) : (P = null, bt(B, "mousemove", Pe)), J = null, (!Ia || !P) && (bt(B, "mouseup", rt), k && k.target && bt(k.target, "mouseup", rt)), w = S.call(c, k.target) && r.dragClickables === !1 && !I, w) {
            bt(k.target, "change", rt), ft(c, "pressInit", "onPressInit"), ft(c, "press", "onPress"), ya(p, !0), se = !1;
            return
          }
          if (T = !P || f === h || c.vars.allowNativeTouchScrolling === !1 || c.vars.allowContextMenu && k && (k.ctrlKey || k.which > 2) ? !1 : f ? "y" : "x", se = !T && !c.allowEventDefault, se && (zn(k), bt(Ke, "touchforcechange", zn)), k.changedTouches ? (k = De = k.changedTouches[0], xe = k.identifier) : k.pointerId ? xe = k.pointerId : De = xe = null, vu++, ME(ae), re = c.pointerY = k.pageY, z = c.pointerX = k.pageX, ft(c, "pressInit", "onPressInit"), (T || c.autoScroll) && Sc(n.parentNode), n.parentNode && c.autoScroll && !$ && !l && n.parentNode._gsMaxScrollX && !Nr.parentNode && !n.getBBox && (Nr.style.width = n.parentNode.scrollWidth + "px", n.parentNode.appendChild(Nr)), Je(), c.tween && c.tween.kill(), c.isThrowing = !1, Le.killTweensOf($ || n, g, !0), $ && Le.killTweensOf(n, {
              scrollTo: 1
            }, !0), c.tween = c.lockedAxis = null, (r.zIndexBoost || !l && !$ && r.zIndexBoost !== !1) && (n.style.zIndex = e.zIndex++), c.isPressed = !0, W = !!(r.onDrag || c._listeners.drag), R = !!(r.onMove || c._listeners.move), r.cursor !== !1 || r.activeCursor)
            for (F = p.length; --F > -1;) Le.set(p[F], {
              cursor: r.activeCursor || r.cursor || (Ho === "grab" ? "grabbing" : Ho)
            });
          ft(c, "press", "onPress")
        },
        Pe = function(k) {
          var I = k,
            F, Y, Z, H, oe, K;
          if (!L || td || !c.isPressed || !k) {
            se && k && L && zn(k);
            return
          }
          if (c.pointerEvent = k, F = k.changedTouches, F) {
            if (k = F[0], k !== De && k.identifier !== xe) {
              for (H = F.length; --H > -1 && (k = F[H]).identifier !== xe && k.target !== n;);
              if (H < 0) return
            }
          } else if (k.pointerId && xe && k.pointerId !== xe) return;
          if (P && T && !J && (Wn.x = k.pageX - (A ? Gs(B) : 0), Wn.y = k.pageY - (A ? qs(B) : 0), O && O.apply(Wn, Wn), Y = Wn.x, Z = Wn.y, oe = Math.abs(Y - z), K = Math.abs(Z - re), (oe !== K && (oe > d || K > d) || $o && T === J) && (J = oe > K && f ? "x" : "y", T && J !== T && bt(Ke, "touchforcechange", zn), c.vars.lockAxisOnTouchScroll !== !1 && f && h && (c.lockedAxis = J === "x" ? "y" : "x", ci(c.vars.onLockAxis) && c.vars.onLockAxis.call(c, I)), $o && T === J))) {
            rt(I);
            return
          }!c.allowEventDefault && (!T || J && T !== J) && I.cancelable !== !1 ? (zn(I), se = !0) : se && (se = !1), c.autoScroll && (m = !0), bn(k.pageX, k.pageY, R)
        },
        bn = function(k, I, F) {
          var Y = 1 - c.dragResistance,
            Z = 1 - c.edgeResistance,
            H = c.pointerX,
            oe = c.pointerY,
            K = U,
            ue = c.x,
            ye = c.y,
            ge = c.endX,
            Se = c.endY,
            ze = c.endRotation,
            Ye = q,
            Re, Me, je, Ce, At, lt;
          c.pointerX = k, c.pointerY = I, A && (k -= Gs(B), I -= qs(B)), l ? (Ce = Math.atan2(N.y - I, k - N.x) * qp, At = c.y - Ce, At > 180 ? (U -= 360, c.y = Ce) : At < -180 && (U += 360, c.y = Ce), c.x !== j || Math.abs(U - Ce) > d ? (c.y = Ce, je = j + (U - Ce) * Y) : je = j) : (O && (lt = k * O.a + I * O.c + O.e, I = k * O.b + I * O.d + O.f, k = lt), Me = I - re, Re = k - z, Me < d && Me > -d && (Me = 0), Re < d && Re > -d && (Re = 0), (c.lockAxis || c.lockedAxis) && (Re || Me) && (lt = c.lockedAxis, lt || (c.lockedAxis = lt = f && Math.abs(Re) > Math.abs(Me) ? "y" : h ? "x" : null, lt && ci(c.vars.onLockAxis) && c.vars.onLockAxis.call(c, c.pointerEvent)), lt === "y" ? Me = 0 : lt === "x" && (Re = 0)), je = si(j + Re * Y), Ce = si(U + Me * Y)), (ne || me || x) && (c.x !== je || c.y !== Ce && !l) && (x && (Cs.x = je, Cs.y = Ce, lt = x(Cs), je = si(lt.x), Ce = si(lt.y)), ne && (je = si(ne(je))), me && (Ce = si(me(Ce)))), ee && (je > ie ? je = ie + Math.round((je - ie) * Z) : je < ce && (je = ce + Math.round((je - ce) * Z)), l || (Ce > ve ? Ce = Math.round(ve + (Ce - ve) * Z) : Ce < fe && (Ce = Math.round(fe + (Ce - fe) * Z)))), (c.x !== je || c.y !== Ce && !l) && (l ? (c.endRotation = c.x = c.endX = je, q = !0) : (h && (c.y = c.endY = Ce, q = !0), f && (c.x = c.endX = je, q = !0)), !F || ft(c, "move", "onMove") !== !1 ? !c.isDragging && c.isPressed && (c.isDragging = pe = !0, ft(c, "dragstart", "onDragStart")) : (c.pointerX = H, c.pointerY = oe, U = K, c.x = ue, c.y = ye, c.endX = ge, c.endY = Se, c.endRotation = ze, q = Ye))
        },
        rt = function _e(k, I) {
          if (!L || !c.isPressed || k && xe != null && !I && (k.pointerId && k.pointerId !== xe && k.target !== n || k.changedTouches && !LE(k.changedTouches, xe))) {
            se && k && L && zn(k);
            return
          }
          c.isPressed = !1;
          var F = k,
            Y = c.isDragging,
            Z = c.vars.allowContextMenu && k && (k.ctrlKey || k.which > 2),
            H = Le.delayedCall(.001, vn),
            oe, K, ue, ye, ge;
          if (P ? (pt(P, "touchend", _e), pt(P, "touchmove", Pe), pt(P, "touchcancel", _e), pt(B, "touchstart", eg)) : pt(B, "mousemove", Pe), pt(Ke, "touchforcechange", zn), (!Ia || !P) && (pt(B, "mouseup", _e), k && k.target && pt(k.target, "mouseup", _e)), q = !1, Y && (D = Gp = oi(), c.isDragging = !1), Zp(ae), w && !Z) {
            k && (pt(k.target, "change", _e), c.pointerEvent = F), ya(p, !1), ft(c, "release", "onRelease"), ft(c, "click", "onClick"), w = !1;
            return
          }
          for (K = p.length; --K > -1;) Pc(p[K], "cursor", r.cursor || (r.cursor !== !1 ? Ho : null));
          if (vu--, k) {
            if (oe = k.changedTouches, oe && (k = oe[0], k !== De && k.identifier !== xe)) {
              for (K = oe.length; --K > -1 && (k = oe[K]).identifier !== xe && k.target !== n;);
              if (K < 0 && !I) return
            }
            c.pointerEvent = F, c.pointerX = k.pageX, c.pointerY = k.pageY
          }
          return Z && F ? (zn(F), se = !0, ft(c, "release", "onRelease")) : F && !Y ? (se = !1, V && (r.snap || r.bounds) && Ft(r.inertia || r.throwProps), ft(c, "release", "onRelease"), (!$o || F.type !== "touchmove") && F.type.indexOf("cancel") === -1 && (ft(c, "click", "onClick"), oi() - E < 300 && ft(c, "doubleclick", "onDoubleClick"), ye = F.target || n, E = oi(), ge = function() {
            E !== te && c.enabled() && !c.isPressed && !F.defaultPrevented && (ye.click ? ye.click() : B.createEvent && (ue = B.createEvent("MouseEvents"), ue.initMouseEvent("click", !0, !0, Ke, 1, c.pointerEvent.screenX, c.pointerEvent.screenY, c.pointerX, c.pointerY, !1, !1, !1, !1, 0, null), ye.dispatchEvent(ue)))
          }, !$o && !F.defaultPrevented && Le.delayedCall(.05, ge))) : (Ft(r.inertia || r.throwProps), !c.allowEventDefault && F && (r.dragClickables !== !1 || !S.call(c, F.target)) && Y && (!T || J && T === J) && F.cancelable !== !1 ? (se = !0, zn(F)) : se = !1, ft(c, "release", "onRelease")), tt() && H.duration(c.tween.duration()), Y && ft(c, "dragend", "onDragEnd"), !0
        },
        Bt = function(k) {
          if (k && c.isDragging && !$) {
            var I = k.target || n.parentNode,
              F = I.scrollLeft - I._gsScrollX,
              Y = I.scrollTop - I._gsScrollY;
            (F || Y) && (O ? (z -= F * O.a + Y * O.c, re -= Y * O.d + F * O.b) : (z -= F, re -= Y), I._gsScrollX += F, I._gsScrollY += Y, bn(c.pointerX, c.pointerY))
          }
        },
        un = function(k) {
          var I = oi(),
            F = I - E < 100,
            Y = I - D < 50,
            Z = F && te === E,
            H = c.pointerEvent && c.pointerEvent.defaultPrevented,
            oe = F && X === E,
            K = k.isTrusted || k.isTrusted == null && F && Z;
          if ((Z || Y && c.vars.suppressClickOnDrag !== !1) && k.stopImmediatePropagation && k.stopImmediatePropagation(), F && !(c.pointerEvent && c.pointerEvent.defaultPrevented) && (!Z || K && !oe)) {
            K && Z && (X = E), te = E;
            return
          }(c.isPressed || Y || F) && (!K || !k.detail || !F || H) && zn(k), !F && !Y && !pe && (k && k.target && (c.pointerEvent = k), ft(c, "click", "onClick"))
        },
        gr = function(k) {
          return O ? {
            x: k.x * O.a + k.y * O.c + O.e,
            y: k.x * O.b + k.y * O.d + O.f
          } : {
            x: k.x,
            y: k.y
          }
        };
      return G = e.get(n), G && G.kill(), i.startDrag = function(_e, k) {
        var I, F, Y, Z;
        an(_e || c.pointerEvent, !0), k && !c.hitTest(_e || c.pointerEvent) && (I = Es(_e || c.pointerEvent), F = Es(n), Y = gr({
          x: I.left + I.width / 2,
          y: I.top + I.height / 2
        }), Z = gr({
          x: F.left + F.width / 2,
          y: F.top + F.height / 2
        }), z -= Y.x - Z.x, re -= Y.y - Z.y), c.isDragging || (c.isDragging = pe = !0, ft(c, "dragstart", "onDragStart"))
      }, i.drag = Pe, i.endDrag = function(_e) {
        return rt(_e || c.pointerEvent, !0)
      }, i.timeSinceDrag = function() {
        return c.isDragging ? 0 : (oi() - D) / 1e3
      }, i.timeSinceClick = function() {
        return (oi() - E) / 1e3
      }, i.hitTest = function(_e, k) {
        return e.hitTest(c.target, _e, k)
      }, i.getDirection = function(_e, k) {
        var I = _e === "velocity" && rr ? _e : sl(_e) && !l ? "element" : "start",
          F, Y, Z, H, oe, K;
        return I === "element" && (oe = Es(c.target), K = Es(_e)), F = I === "start" ? c.x - j : I === "velocity" ? rr.getVelocity(n, a) : oe.left + oe.width / 2 - (K.left + K.width / 2), l ? F < 0 ? "counter-clockwise" : "clockwise" : (k = k || 2, Y = I === "start" ? c.y - U : I === "velocity" ? rr.getVelocity(n, u) : oe.top + oe.height / 2 - (K.top + K.height / 2), Z = Math.abs(F / Y), H = Z < 1 / k ? "" : F < 0 ? "left" : "right", Z < k && (H !== "" && (H += "-"), H += Y < 0 ? "up" : "down"), H)
      }, i.applyBounds = function(_e, k) {
        var I, F, Y, Z, H, oe;
        if (_e && r.bounds !== _e) return r.bounds = _e, c.update(!0, k);
        if (we(!0), Qe(), ee && !tt()) {
          if (I = c.x, F = c.y, I > ie ? I = ie : I < ce && (I = ce), F > ve ? F = ve : F < fe && (F = fe), (c.x !== I || c.y !== F) && (Y = !0, c.x = c.endX = I, l ? c.endRotation = I : c.y = c.endY = F, q = !0, ae(!0), c.autoScroll && !c.isDragging))
            for (Sc(n.parentNode), Z = n, Rr.scrollTop = Ke.pageYOffset != null ? Ke.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop, Rr.scrollLeft = Ke.pageXOffset != null ? Ke.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft; Z && !oe;) oe = co(Z.parentNode), H = oe ? Rr : Z.parentNode, h && H.scrollTop > H._gsMaxScrollY && (H.scrollTop = H._gsMaxScrollY), f && H.scrollLeft > H._gsMaxScrollX && (H.scrollLeft = H._gsMaxScrollX), Z = H;
          c.isThrowing && (Y || c.endX > ie || c.endX < ce || c.endY > ve || c.endY < fe) && Ft(r.inertia || r.throwProps, Y)
        }
        return c
      }, i.update = function(_e, k, I) {
        if (k && c.isPressed) {
          var F = Yi(n),
            Y = le.apply({
              x: c.x - j,
              y: c.y - U
            }),
            Z = Yi(n.parentNode, !0);
          Z.apply({
            x: F.e - Y.x,
            y: F.f - Y.y
          }, Y), c.x -= Y.x - Z.e, c.y -= Y.y - Z.f, ae(!0), Je()
        }
        var H = c.x,
          oe = c.y;
        return $n(!k), _e ? c.applyBounds() : (q && I && ae(!0), we(!0)), k && (bn(c.pointerX, c.pointerY), q && ae(!0)), c.isPressed && !k && (f && Math.abs(H - c.x) > .01 || h && Math.abs(oe - c.y) > .01 && !l) && Je(), c.autoScroll && (Sc(n.parentNode, c.isDragging), m = c.isDragging, ae(!0), ng(n, Bt), tg(n, Bt)), c
      }, i.enable = function(_e) {
        var k = {
            lazy: !0
          },
          I, F, Y;
        if (r.cursor !== !1 && (k.cursor = r.cursor || Ho), Le.utils.checkPrefix("touchCallout") && (k.touchCallout = "none"), _e !== "soft") {
          for (Qp(p, f === h ? "none" : r.allowNativeTouchScrolling && n.scrollHeight === n.clientHeight == (n.scrollWidth === n.clientHeight) || r.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"), F = p.length; --F > -1;) Y = p[F], Ia || bt(Y, "mousedown", an), bt(Y, "touchstart", an), bt(Y, "click", un, !0), Le.set(Y, k), Y.getBBox && Y.ownerSVGElement && f !== h && Le.set(Y.ownerSVGElement, {
            touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"
          }), r.allowContextMenu || bt(Y, "contextmenu", he);
          ya(p, !1)
        }
        return tg(n, Bt), L = !0, rr && _e !== "soft" && rr.track($ || n, o ? "x,y" : l ? "rotation" : "top,left"), n._gsDragID = I = "d" + FE++, Ks[I] = c, $ && ($.enable(), $.element._gsDragID = I), (r.bounds || l) && Je(), r.bounds && c.applyBounds(), c
      }, i.disable = function(_e) {
        for (var k = c.isDragging, I = p.length, F; --I > -1;) Pc(p[I], "cursor", null);
        if (_e !== "soft") {
          for (Qp(p, null), I = p.length; --I > -1;) F = p[I], Pc(F, "touchCallout", null), pt(F, "mousedown", an), pt(F, "touchstart", an), pt(F, "click", un, !0), pt(F, "contextmenu", he);
          ya(p, !0), P && (pt(P, "touchcancel", rt), pt(P, "touchend", rt), pt(P, "touchmove", Pe)), pt(B, "mouseup", rt), pt(B, "mousemove", Pe)
        }
        return ng(n, Bt), L = !1, rr && _e !== "soft" && (rr.untrack($ || n, o ? "x,y" : l ? "rotation" : "top,left"), c.tween && c.tween.kill()), $ && $.disable(), Zp(ae), c.isDragging = c.isPressed = w = !1, k && ft(c, "dragend", "onDragEnd"), c
      }, i.enabled = function(_e, k) {
        return arguments.length ? _e ? c.enable(k) : c.disable(k) : L
      }, i.kill = function() {
        return c.isThrowing = !1, c.tween && c.tween.kill(), c.disable(), Le.set(p, {
          clearProps: "userSelect"
        }), delete Ks[n._gsDragID], c
      }, i.revert = function() {
        this.kill(), this.styles && this.styles.revert()
      }, ~s.indexOf("scroll") && ($ = i.scrollProxy = new HE(n, RE({
        onKill: function() {
          c.isPressed && rt(null)
        }
      }, r)), n.style.overflowY = h && !Af ? "auto" : "hidden", n.style.overflowX = f && !Af ? "auto" : "hidden", n = $.content), l ? g.rotation = 1 : (f && (g[a] = 1), h && (g[u] = 1)), C.force3D = "force3D" in r ? r.force3D : !0, Fm(Kp(i)), i.enable(), i
    }
    return e.register = function(r) {
      Le = r, Fc()
    }, e.create = function(r, i) {
      return Ff || Fc(!0), pi(r).map(function(s) {
        return new e(s, i)
      })
    }, e.get = function(r) {
      return Ks[(pi(r)[0] || {})._gsDragID]
    }, e.timeSinceDrag = function() {
      return (oi() - Gp) / 1e3
    }, e.hitTest = function(r, i, s) {
      if (r === i) return !1;
      var o = Es(r),
        l = Es(i),
        a = o.top,
        u = o.left,
        f = o.right,
        h = o.bottom,
        d = o.width,
        c = o.height,
        p = l.left > f || l.right < u || l.top > h || l.bottom < a,
        g, D, m;
      return p || !s ? !p : (m = (s + "").indexOf("%") !== -1, s = parseFloat(s) || 0, g = {
        left: Math.max(u, l.left),
        top: Math.max(a, l.top)
      }, g.width = Math.min(f, l.right) - g.left, g.height = Math.min(h, l.bottom) - g.top, g.width < 0 || g.height < 0 ? !1 : m ? (s *= .01, D = g.width * g.height, D >= d * c * s || D >= l.width * l.height * s) : g.width > s && g.height > s)
    }, e
  }(zE);
OE(Ql.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
});
Ql.zIndex = 1e3;
Ql.version = "3.12.2";
Rm() && Le.registerPlugin(Ql);

function sg(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
  }
}

function WE(t, e, n) {
  return e && sg(t.prototype, e), n && sg(t, n), t
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
var Nt, Lf, On, gi, _i, Qs, Nm, zi, ll, Bm, Wr, ir, Im, $m = function() {
    return Nt || typeof window < "u" && (Nt = window.gsap) && Nt.registerPlugin && Nt
  },
  Hm = 1,
  Ls = [],
  Ae = [],
  Pr = [],
  al = Date.now,
  Nf = function(e, n) {
    return n
  },
  jE = function() {
    var e = ll.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, Ae), i.push.apply(i, Pr), Ae = r, Pr = i, Nf = function(o, l) {
      return n[o](l)
    }
  },
  xi = function(e, n) {
    return ~Pr.indexOf(e) && Pr[Pr.indexOf(e) + 1][n]
  },
  ul = function(e) {
    return !!~Bm.indexOf(e)
  },
  Kt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
      passive: !i,
      capture: !!s
    })
  },
  Yt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
  },
  Da = "scrollLeft",
  va = "scrollTop",
  Bf = function() {
    return Wr && Wr.isPressed || Ae.cache++
  },
  bu = function(e, n) {
    var r = function i(s) {
      if (s || s === 0) {
        Hm && (On.history.scrollRestoration = "manual");
        var o = Wr && Wr.isPressed;
        s = i.v = Math.round(s) || (Wr && Wr.iOS ? 1 : 0), e(s), i.cacheID = Ae.cache, o && Nf("ss", s)
      } else(n || Ae.cache !== i.cacheID || Nf("ref")) && (i.cacheID = Ae.cache, i.v = e());
      return i.v + i.offset
    };
    return r.offset = 0, e && r
  },
  en = {
    s: Da,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: bu(function(t) {
      return arguments.length ? On.scrollTo(t, wt.sc()) : On.pageXOffset || gi[Da] || _i[Da] || Qs[Da] || 0
    })
  },
  wt = {
    s: va,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: en,
    sc: bu(function(t) {
      return arguments.length ? On.scrollTo(en.sc(), t) : On.pageYOffset || gi[va] || _i[va] || Qs[va] || 0
    })
  },
  hn = function(e, n) {
    return (n && n._ctx && n._ctx.selector || Nt.utils.toArray)(e)[0] || (typeof e == "string" && Nt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
  },
  ki = function(e, n) {
    var r = n.s,
      i = n.sc;
    ul(e) && (e = gi.scrollingElement || _i);
    var s = Ae.indexOf(e),
      o = i === wt.sc ? 1 : 2;
    !~s && (s = Ae.push(e) - 1), Ae[s + o] || Kt(e, "scroll", Bf);
    var l = Ae[s + o],
      a = l || (Ae[s + o] = bu(xi(e, r), !0) || (ul(e) ? i : bu(function(u) {
        return arguments.length ? e[r] = u : e[r]
      })));
    return a.target = e, l || (a.smooth = Nt.getProperty(e, "scrollBehavior") === "smooth"), a
  },
  If = function(e, n, r) {
    var i = e,
      s = e,
      o = al(),
      l = o,
      a = n || 50,
      u = Math.max(500, a * 3),
      f = function(p, g) {
        var D = al();
        g || D - o > a ? (s = i, i = p, l = o, o = D) : r ? i += p : i = s + (p - s) / (D - l) * (o - l)
      },
      h = function() {
        s = i = r ? 0 : i, l = o = 0
      },
      d = function(p) {
        var g = l,
          D = s,
          m = al();
        return (p || p === 0) && p !== i && f(p), o === l || m - l > u ? 0 : (i + (r ? D : -D)) / ((r ? m : o) - g) * 1e3
      };
    return {
      update: f,
      reset: h,
      getVelocity: d
    }
  },
  ko = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
  },
  og = function(e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
  },
  zm = function() {
    ll = Nt.core.globals().ScrollTrigger, ll && ll.core && jE()
  },
  Wm = function(e) {
    return Nt = e || $m(), Nt && typeof document < "u" && document.body && (On = window, gi = document, _i = gi.documentElement, Qs = gi.body, Bm = [On, gi, _i, Qs], Nt.utils.clamp, Im = Nt.core.context || function() {}, zi = "onpointerenter" in Qs ? "pointer" : "mouse", Nm = dt.isTouch = On.matchMedia && On.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in On || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, ir = dt.eventTypes = ("ontouchstart" in _i ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in _i ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return Hm = 0
    }, 500), zm(), Lf = 1), Lf
  };
en.op = wt;
Ae.cache = 0;
var dt = function() {
  function t(n) {
    this.init(n)
  }
  var e = t.prototype;
  return e.init = function(r) {
    Lf || Wm(Nt) || console.warn("Please gsap.registerPlugin(Observer)"), ll || zm();
    var i = r.tolerance,
      s = r.dragMinimum,
      o = r.type,
      l = r.target,
      a = r.lineHeight,
      u = r.debounce,
      f = r.preventDefault,
      h = r.onStop,
      d = r.onStopDelay,
      c = r.ignore,
      p = r.wheelSpeed,
      g = r.event,
      D = r.onDragStart,
      m = r.onDragEnd,
      _ = r.onDrag,
      v = r.onPress,
      y = r.onRelease,
      b = r.onRight,
      S = r.onLeft,
      E = r.onUp,
      C = r.onDown,
      A = r.onChangeX,
      M = r.onChangeY,
      B = r.onChange,
      L = r.onToggleX,
      $ = r.onToggleY,
      z = r.onHover,
      re = r.onHoverEnd,
      j = r.onMove,
      U = r.ignoreCheck,
      ee = r.isNormalizer,
      W = r.onGestureStart,
      R = r.onGestureEnd,
      ie = r.onWheel,
      ce = r.onEnable,
      ve = r.onDisable,
      fe = r.onClick,
      De = r.scrollSpeed,
      xe = r.capture,
      N = r.allowClicks,
      q = r.lockAxis,
      G = r.onLockAxis;
    this.target = l = hn(l) || _i, this.vars = r, c && (c = Nt.utils.toArray(c)), i = i || 1e-9, s = s || 0, p = p || 1, De = De || 1, o = o || "wheel,touch,pointer", u = u !== !1, a || (a = parseFloat(On.getComputedStyle(Qs).lineHeight) || 22);
    var ne, me, x, w, P, O, V, T = this,
      J = 0,
      Q = 0,
      te = ki(l, en),
      X = ki(l, wt),
      se = te(),
      le = X(),
      pe = ~o.indexOf("touch") && !~o.indexOf("pointer") && ir[0] === "pointerdown",
      he = ul(l),
      ae = l.ownerDocument || gi,
      we = [0, 0, 0],
      Ee = [0, 0, 0],
      We = 0,
      Qe = function() {
        return We = al()
      },
      yt = function(F, Y) {
        return (T.event = F) && c && ~c.indexOf(F.target) || Y && pe && F.pointerType !== "touch" || U && U(F, Y)
      },
      Dt = function() {
        T._vx.reset(), T._vy.reset(), me.pause(), h && h(T)
      },
      Ft = function() {
        var F = T.deltaX = og(we),
          Y = T.deltaY = og(Ee),
          Z = Math.abs(F) >= i,
          H = Math.abs(Y) >= i;
        B && (Z || H) && B(T, F, Y, we, Ee), Z && (b && T.deltaX > 0 && b(T), S && T.deltaX < 0 && S(T), A && A(T), L && T.deltaX < 0 != J < 0 && L(T), J = T.deltaX, we[0] = we[1] = we[2] = 0), H && (C && T.deltaY > 0 && C(T), E && T.deltaY < 0 && E(T), M && M(T), $ && T.deltaY < 0 != Q < 0 && $(T), Q = T.deltaY, Ee[0] = Ee[1] = Ee[2] = 0), (w || x) && (j && j(T), x && (_(T), x = !1), w = !1), O && !(O = !1) && G && G(T), P && (ie(T), P = !1), ne = 0
      },
      $n = function(F, Y, Z) {
        we[Z] += F, Ee[Z] += Y, T._vx.update(F), T._vy.update(Y), u ? ne || (ne = requestAnimationFrame(Ft)) : Ft()
      },
      Je = function(F, Y) {
        q && !V && (T.axis = V = Math.abs(F) > Math.abs(Y) ? "x" : "y", O = !0), V !== "y" && (we[2] += F, T._vx.update(F, !0)), V !== "x" && (Ee[2] += Y, T._vy.update(Y, !0)), u ? ne || (ne = requestAnimationFrame(Ft)) : Ft()
      },
      tt = function(F) {
        if (!yt(F, 1)) {
          F = ko(F, f);
          var Y = F.clientX,
            Z = F.clientY,
            H = Y - T.x,
            oe = Z - T.y,
            K = T.isDragging;
          T.x = Y, T.y = Z, (K || Math.abs(T.startX - Y) >= s || Math.abs(T.startY - Z) >= s) && (_ && (x = !0), K || (T.isDragging = !0), Je(H, oe), K || D && D(T))
        }
      },
      vn = T.onPress = function(I) {
        yt(I, 1) || I && I.button || (T.axis = V = null, me.pause(), T.isPressed = !0, I = ko(I), J = Q = 0, T.startX = T.x = I.clientX, T.startY = T.y = I.clientY, T._vx.reset(), T._vy.reset(), Kt(ee ? l : ae, ir[1], tt, f, !0), T.deltaX = T.deltaY = 0, v && v(T))
      },
      an = T.onRelease = function(I) {
        if (!yt(I, 1)) {
          Yt(ee ? l : ae, ir[1], tt, !0);
          var F = !isNaN(T.y - T.startY),
            Y = T.isDragging && (Math.abs(T.x - T.startX) > 3 || Math.abs(T.y - T.startY) > 3),
            Z = ko(I);
          !Y && F && (T._vx.reset(), T._vy.reset(), f && N && Nt.delayedCall(.08, function() {
            if (al() - We > 300 && !I.defaultPrevented) {
              if (I.target.click) I.target.click();
              else if (ae.createEvent) {
                var H = ae.createEvent("MouseEvents");
                H.initMouseEvent("click", !0, !0, On, 1, Z.screenX, Z.screenY, Z.clientX, Z.clientY, !1, !1, !1, !1, 0, null), I.target.dispatchEvent(H)
              }
            }
          })), T.isDragging = T.isGesturing = T.isPressed = !1, h && !ee && me.restart(!0), m && Y && m(T), y && y(T, Y)
        }
      },
      Pe = function(F) {
        return F.touches && F.touches.length > 1 && (T.isGesturing = !0) && W(F, T.isDragging)
      },
      bn = function() {
        return (T.isGesturing = !1) || R(T)
      },
      rt = function(F) {
        if (!yt(F)) {
          var Y = te(),
            Z = X();
          $n((Y - se) * De, (Z - le) * De, 1), se = Y, le = Z, h && me.restart(!0)
        }
      },
      Bt = function(F) {
        if (!yt(F)) {
          F = ko(F, f), ie && (P = !0);
          var Y = (F.deltaMode === 1 ? a : F.deltaMode === 2 ? On.innerHeight : 1) * p;
          $n(F.deltaX * Y, F.deltaY * Y, 0), h && !ee && me.restart(!0)
        }
      },
      un = function(F) {
        if (!yt(F)) {
          var Y = F.clientX,
            Z = F.clientY,
            H = Y - T.x,
            oe = Z - T.y;
          T.x = Y, T.y = Z, w = !0, (H || oe) && Je(H, oe)
        }
      },
      gr = function(F) {
        T.event = F, z(T)
      },
      _e = function(F) {
        T.event = F, re(T)
      },
      k = function(F) {
        return yt(F) || ko(F, f) && fe(T)
      };
    me = T._dc = Nt.delayedCall(d || .25, Dt).pause(), T.deltaX = T.deltaY = 0, T._vx = If(0, 50, !0), T._vy = If(0, 50, !0), T.scrollX = te, T.scrollY = X, T.isDragging = T.isGesturing = T.isPressed = !1, Im(this), T.enable = function(I) {
      return T.isEnabled || (Kt(he ? ae : l, "scroll", Bf), o.indexOf("scroll") >= 0 && Kt(he ? ae : l, "scroll", rt, f, xe), o.indexOf("wheel") >= 0 && Kt(l, "wheel", Bt, f, xe), (o.indexOf("touch") >= 0 && Nm || o.indexOf("pointer") >= 0) && (Kt(l, ir[0], vn, f, xe), Kt(ae, ir[2], an), Kt(ae, ir[3], an), N && Kt(l, "click", Qe, !1, !0), fe && Kt(l, "click", k), W && Kt(ae, "gesturestart", Pe), R && Kt(ae, "gestureend", bn), z && Kt(l, zi + "enter", gr), re && Kt(l, zi + "leave", _e), j && Kt(l, zi + "move", un)), T.isEnabled = !0, I && I.type && vn(I), ce && ce(T)), T
    }, T.disable = function() {
      T.isEnabled && (Ls.filter(function(I) {
        return I !== T && ul(I.target)
      }).length || Yt(he ? ae : l, "scroll", Bf), T.isPressed && (T._vx.reset(), T._vy.reset(), Yt(ee ? l : ae, ir[1], tt, !0)), Yt(he ? ae : l, "scroll", rt, xe), Yt(l, "wheel", Bt, xe), Yt(l, ir[0], vn, xe), Yt(ae, ir[2], an), Yt(ae, ir[3], an), Yt(l, "click", Qe, !0), Yt(l, "click", k), Yt(ae, "gesturestart", Pe), Yt(ae, "gestureend", bn), Yt(l, zi + "enter", gr), Yt(l, zi + "leave", _e), Yt(l, zi + "move", un), T.isEnabled = T.isPressed = T.isDragging = !1, ve && ve(T))
    }, T.kill = T.revert = function() {
      T.disable();
      var I = Ls.indexOf(T);
      I >= 0 && Ls.splice(I, 1), Wr === T && (Wr = 0)
    }, Ls.push(T), ee && ul(l) && (Wr = T), T.enable(g)
  }, WE(t, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity()
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity()
    }
  }]), t
}();
dt.version = "3.12.2";
dt.create = function(t) {
  return new dt(t)
};
dt.register = Wm;
dt.getAll = function() {
  return Ls.slice()
};
dt.getById = function(t) {
  return Ls.filter(function(e) {
    return e.vars.id === t
  })[0]
};
$m() && Nt.registerPlugin(dt);
/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var tn, jm, Ur, Tr, wi, Um, Vm, ba, Ym = function() {
    return typeof window < "u"
  },
  Xm = function() {
    return tn || Ym() && (tn = window.gsap) && tn.registerPlugin && tn
  },
  Km = function(e) {
    return typeof e == "string"
  },
  lg = function(e) {
    return typeof e == "function"
  },
  Il = function(e, n) {
    var r = n === "x" ? "Width" : "Height",
      i = "scroll" + r,
      s = "client" + r;
    return e === Ur || e === Tr || e === wi ? Math.max(Tr[i], wi[i]) - (Ur["inner" + r] || Tr[s] || wi[s]) : e[i] - e["offset" + r]
  },
  $l = function(e, n) {
    var r = "scroll" + (n === "x" ? "Left" : "Top");
    return e === Ur && (e.pageXOffset != null ? r = "page" + n.toUpperCase() + "Offset" : e = Tr[r] != null ? Tr : wi),
      function() {
        return e[r]
      }
  },
  UE = function(e, n, r, i) {
    if (lg(e) && (e = e(n, r, i)), typeof e != "object") return Km(e) && e !== "max" && e.charAt(1) !== "=" ? {
      x: e,
      y: e
    } : {
      y: e
    };
    if (e.nodeType) return {
      y: e,
      x: e
    };
    var s = {},
      o;
    for (o in e) s[o] = o !== "onAutoKill" && lg(e[o]) ? e[o](n, r, i) : e[o];
    return s
  },
  qm = function(e, n) {
    if (e = Um(e)[0], !e || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
    var r = e.getBoundingClientRect(),
      i = !n || n === Ur || n === wi,
      s = i ? {
        top: Tr.clientTop - (Ur.pageYOffset || Tr.scrollTop || wi.scrollTop || 0),
        left: Tr.clientLeft - (Ur.pageXOffset || Tr.scrollLeft || wi.scrollLeft || 0)
      } : n.getBoundingClientRect(),
      o = {
        x: r.left - s.left,
        y: r.top - s.top
      };
    return !i && n && (o.x += $l(n, "x")(), o.y += $l(n, "y")()), o
  },
  ag = function(e, n, r, i, s) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - s : Km(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + i - s : e === "max" ? Il(n, r) - s : Math.min(Il(n, r), qm(e, n)[r] - s)
  },
  ug = function() {
    tn = Xm(), Ym() && tn && typeof document < "u" && document.body && (Ur = window, wi = document.body, Tr = document.documentElement, Um = tn.utils.toArray, tn.config({
      autoKillThreshold: 7
    }), Vm = tn.config(), jm = 1)
  },
  Jl = {
    version: "3.12.2",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
      tn = e, ug()
    },
    init: function(e, n, r, i, s) {
      jm || ug();
      var o = this,
        l = tn.getProperty(e, "scrollSnapType");
      o.isWin = e === Ur, o.target = e, o.tween = r, n = UE(n, i, e, s), o.vars = n, o.autoKill = !!n.autoKill, o.getX = $l(e, "x"), o.getY = $l(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), ba || (ba = tn.core.globals().ScrollTrigger), tn.getProperty(e, "scrollBehavior") === "smooth" && tn.set(e, {
        scrollBehavior: "auto"
      }), l && l !== "none" && (o.snap = 1, o.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), n.x != null ? (o.add(o, "x", o.x, ag(n.x, e, "x", o.x, n.offsetX || 0), i, s), o._props.push("scrollTo_x")) : o.skipX = 1, n.y != null ? (o.add(o, "y", o.y, ag(n.y, e, "y", o.y, n.offsetY || 0), i, s), o._props.push("scrollTo_y")) : o.skipY = 1
    },
    render: function(e, n) {
      for (var r = n._pt, i = n.target, s = n.tween, o = n.autoKill, l = n.xPrev, a = n.yPrev, u = n.isWin, f = n.snap, h = n.snapInline, d, c, p, g, D; r;) r.r(e, r.d), r = r._next;
      d = u || !n.skipX ? n.getX() : l, c = u || !n.skipY ? n.getY() : a, p = c - a, g = d - l, D = Vm.autoKillThreshold, n.x < 0 && (n.x = 0), n.y < 0 && (n.y = 0), o && (!n.skipX && (g > D || g < -D) && d < Il(i, "x") && (n.skipX = 1), !n.skipY && (p > D || p < -D) && c < Il(i, "y") && (n.skipY = 1), n.skipX && n.skipY && (s.kill(), n.vars.onAutoKill && n.vars.onAutoKill.apply(s, n.vars.onAutoKillParams || []))), u ? Ur.scrollTo(n.skipX ? d : n.x, n.skipY ? c : n.y) : (n.skipY || (i.scrollTop = n.y), n.skipX || (i.scrollLeft = n.x)), f && (e === 1 || e === 0) && (c = i.scrollTop, d = i.scrollLeft, h ? i.style.scrollSnapType = h : i.style.removeProperty("scroll-snap-type"), i.scrollTop = c + 1, i.scrollLeft = d + 1, i.scrollTop = c, i.scrollLeft = d), n.xPrev = n.x, n.yPrev = n.y, ba && ba.update()
    },
    kill: function(e) {
      var n = e === "scrollTo";
      (n || e === "scrollTo_x") && (this.skipX = 1), (n || e === "scrollTo_y") && (this.skipY = 1)
    }
  };
Jl.max = Il;
Jl.getOffset = qm;
Jl.buildGetter = $l;
Xm() && tn.registerPlugin(Jl);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var de, ks, Ne, it, lr, Ze, Gm, xu, wu, Ns, Ha, xa, Ht, Qu, $f, qt, cg, fg, Fs, Qm, Ac, Jm, Pn, Zm, ey, ty, li, Hf, nd, Js, rd, Rc, wa = 1,
  Qt = Date.now,
  Mc = Qt(),
  er = 0,
  zo = 0,
  hg = function(e, n, r) {
    var i = Fn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
  },
  dg = function(e, n) {
    return n && (!Fn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
  },
  VE = function t() {
    return zo && requestAnimationFrame(t)
  },
  pg = function() {
    return Qu = 1
  },
  gg = function() {
    return Qu = 0
  },
  br = function(e) {
    return e
  },
  Wo = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  ny = function() {
    return typeof window < "u"
  },
  ry = function() {
    return de || ny() && (de = window.gsap) && de.registerPlugin && de
  },
  ps = function(e) {
    return !!~Gm.indexOf(e)
  },
  iy = function(e) {
    return (e === "Height" ? rd : Ne["inner" + e]) || lr["client" + e] || Ze["client" + e]
  },
  sy = function(e) {
    return xi(e, "getBoundingClientRect") || (ps(e) ? function() {
      return Ya.width = Ne.innerWidth, Ya.height = rd, Ya
    } : function() {
      return Ir(e)
    })
  },
  YE = function(e, n, r) {
    var i = r.d,
      s = r.d2,
      o = r.a;
    return (o = xi(e, "getBoundingClientRect")) ? function() {
      return o()[i]
    } : function() {
      return (n ? iy(s) : e["client" + s]) || 0
    }
  },
  XE = function(e, n) {
    return !n || ~Pr.indexOf(e) ? sy(e) : function() {
      return Ya
    }
  },
  jr = function(e, n) {
    var r = n.s,
      i = n.d2,
      s = n.d,
      o = n.a;
    return Math.max(0, (r = "scroll" + i) && (o = xi(e, r)) ? o() - sy(e)()[s] : ps(e) ? (lr[r] || Ze[r]) - iy(i) : e[r] - e["offset" + i])
  },
  Ca = function(e, n) {
    for (var r = 0; r < Fs.length; r += 3)(!n || ~n.indexOf(Fs[r + 1])) && e(Fs[r], Fs[r + 1], Fs[r + 2])
  },
  Fn = function(e) {
    return typeof e == "string"
  },
  nn = function(e) {
    return typeof e == "function"
  },
  za = function(e) {
    return typeof e == "number"
  },
  Wi = function(e) {
    return typeof e == "object"
  },
  Fo = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
  },
  Oc = function(e, n) {
    if (e.enabled) {
      var r = n(e);
      r && r.totalTime && (e.callbackAnimation = r)
    }
  },
  Ts = Math.abs,
  oy = "left",
  ly = "top",
  id = "right",
  sd = "bottom",
  ls = "width",
  as = "height",
  cl = "Right",
  fl = "Left",
  hl = "Top",
  dl = "Bottom",
  gt = "padding",
  Yn = "margin",
  fo = "Width",
  od = "Height",
  Mt = "px",
  Xn = function(e) {
    return Ne.getComputedStyle(e)
  },
  KE = function(e) {
    var n = Xn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
  },
  _g = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  Ir = function(e, n) {
    var r = n && Xn(e)[$f] !== "matrix(1, 0, 0, 1, 0, 0)" && de.to(e, {
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
    return r && r.progress(0).kill(), i
  },
  zf = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
  },
  ay = function(e) {
    var n = [],
      r = e.labels,
      i = e.duration(),
      s;
    for (s in r) n.push(r[s] / i);
    return n
  },
  qE = function(e) {
    return function(n) {
      return de.utils.snap(ay(e), n)
    }
  },
  ld = function(e) {
    var n = de.utils.snap(e),
      r = Array.isArray(e) && e.slice(0).sort(function(i, s) {
        return i - s
      });
    return r ? function(i, s, o) {
      o === void 0 && (o = .001);
      var l;
      if (!s) return n(i);
      if (s > 0) {
        for (i -= o, l = 0; l < r.length; l++)
          if (r[l] >= i) return r[l];
        return r[l - 1]
      } else
        for (l = r.length, i += o; l--;)
          if (r[l] <= i) return r[l];
      return r[0]
    } : function(i, s, o) {
      o === void 0 && (o = .001);
      var l = n(i);
      return !s || Math.abs(l - i) < o || l - i < 0 == s < 0 ? l : n(s < 0 ? i - e : i + e)
    }
  },
  GE = function(e) {
    return function(n, r) {
      return ld(ay(e))(n, r.direction)
    }
  },
  Ea = function(e, n, r, i) {
    return r.split(",").forEach(function(s) {
      return e(n, s, i)
    })
  },
  St = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
      passive: !i,
      capture: !!s
    })
  },
  Tt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
  },
  Ta = function(e, n, r) {
    r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r))
  },
  mg = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  Sa = {
    toggleActions: "play",
    anticipatePin: 0
  },
  Cu = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
  Wa = function(e, n) {
    if (Fn(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in Cu ? Cu[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
  },
  Pa = function(e, n, r, i, s, o, l, a) {
    var u = s.startColor,
      f = s.endColor,
      h = s.fontSize,
      d = s.indent,
      c = s.fontWeight,
      p = it.createElement("div"),
      g = ps(r) || xi(r, "pinType") === "fixed",
      D = e.indexOf("scroller") !== -1,
      m = g ? Ze : r,
      _ = e.indexOf("start") !== -1,
      v = _ ? u : f,
      y = "border-color:" + v + ";font-size:" + h + ";color:" + v + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((D || a) && g ? "fixed;" : "absolute;"), (D || a || !g) && (y += (i === wt ? id : sd) + ":" + (o + parseFloat(d)) + "px;"), l && (y += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), p._isStart = _, p.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), p.style.cssText = y, p.innerText = n || n === 0 ? e + "-" + n : e, m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p), p._offset = p["offset" + i.op.d2], ja(p, 0, i, _), p
  },
  ja = function(e, n, r, i) {
    var s = {
        display: "block"
      },
      o = r[i ? "os2" : "p2"],
      l = r[i ? "p2" : "os2"];
    e._isFlipped = i, s[r.a + "Percent"] = i ? -100 : 0, s[r.a] = i ? "1px" : 0, s["border" + o + fo] = 1, s["border" + l + fo] = 0, s[r.p] = n + "px", de.set(e, s)
  },
  Fe = [],
  Wf = {},
  Hl, yg = function() {
    return Qt() - er > 34 && (Hl || (Hl = requestAnimationFrame(Vr)))
  },
  Ss = function() {
    (!Pn || !Pn.isPressed || Pn.startX > Ze.clientWidth) && (Ae.cache++, Pn ? Hl || (Hl = requestAnimationFrame(Vr)) : Vr(), er || _s("scrollStart"), er = Qt())
  },
  Lc = function() {
    ty = Ne.innerWidth, ey = Ne.innerHeight
  },
  jo = function() {
    Ae.cache++, !Ht && !Jm && !it.fullscreenElement && !it.webkitFullscreenElement && (!Zm || ty !== Ne.innerWidth || Math.abs(Ne.innerHeight - ey) > Ne.innerHeight * .25) && xu.restart(!0)
  },
  gs = {},
  QE = [],
  uy = function t() {
    return Tt(ke, "scrollEnd", t) || qi(!0)
  },
  _s = function(e) {
    return gs[e] && gs[e].map(function(n) {
      return n()
    }) || QE
  },
  kn = [],
  cy = function(e) {
    for (var n = 0; n < kn.length; n += 5)(!e || kn[n + 4] && kn[n + 4].query === e) && (kn[n].style.cssText = kn[n + 1], kn[n].getBBox && kn[n].setAttribute("transform", kn[n + 2] || ""), kn[n + 3].uncache = 1)
  },
  ad = function(e, n) {
    var r;
    for (qt = 0; qt < Fe.length; qt++) r = Fe[qt], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    n && cy(n), n || _s("revert")
  },
  fy = function(e, n) {
    Ae.cache++, (n || !Gt) && Ae.forEach(function(r) {
      return nn(r) && r.cacheID++ && (r.rec = 0)
    }), Fn(e) && (Ne.history.scrollRestoration = nd = e)
  },
  Gt, us = 0,
  Dg, JE = function() {
    if (Dg !== us) {
      var e = Dg = us;
      requestAnimationFrame(function() {
        return e === us && qi(!0)
      })
    }
  },
  hy = function() {
    Ze.appendChild(Js), rd = Js.offsetHeight || Ne.innerHeight, Ze.removeChild(Js)
  },
  qi = function(e, n) {
    if (er && !e) {
      St(ke, "scrollEnd", uy);
      return
    }
    hy(), Gt = ke.isRefreshing = !0, Ae.forEach(function(i) {
      return nn(i) && ++i.cacheID && (i.rec = i())
    });
    var r = _s("refreshInit");
    Qm && ke.sort(), n || ad(), Ae.forEach(function(i) {
      nn(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
    }), Fe.slice(0).forEach(function(i) {
      return i.refresh()
    }), Fe.forEach(function(i, s) {
      if (i._subPinOffset && i.pin) {
        var o = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
          l = i.pin[o];
        i.revert(!0, 1), i.adjustPinSpacing(i.pin[o] - l), i.refresh()
      }
    }), Fe.forEach(function(i) {
      var s = jr(i.scroller, i._dir);
      (i.vars.end === "max" || i._endClamp && i.end > s) && i.setPositions(i.start, Math.max(i.start + 1, s), !0)
    }), r.forEach(function(i) {
      return i && i.render && i.render(-1)
    }), Ae.forEach(function(i) {
      nn(i) && (i.smooth && requestAnimationFrame(function() {
        return i.target.style.scrollBehavior = "smooth"
      }), i.rec && i(i.rec))
    }), fy(nd, 1), xu.pause(), us++, Gt = 2, Vr(2), Fe.forEach(function(i) {
      return nn(i.vars.onRefresh) && i.vars.onRefresh(i)
    }), Gt = ke.isRefreshing = !1, _s("refresh")
  },
  jf = 0,
  Ua = 1,
  pl, Vr = function(e) {
    if (!Gt || e === 2) {
      ke.isUpdating = !0, pl && pl.update(0);
      var n = Fe.length,
        r = Qt(),
        i = r - Mc >= 50,
        s = n && Fe[0].scroll();
      if (Ua = jf > s ? -1 : 1, Gt || (jf = s), i && (er && !Qu && r - er > 200 && (er = 0, _s("scrollEnd")), Ha = Mc, Mc = r), Ua < 0) {
        for (qt = n; qt-- > 0;) Fe[qt] && Fe[qt].update(0, i);
        Ua = 1
      } else
        for (qt = 0; qt < n; qt++) Fe[qt] && Fe[qt].update(0, i);
      ke.isUpdating = !1
    }
    Hl = 0
  },
  Uf = [oy, ly, sd, id, Yn + dl, Yn + cl, Yn + hl, Yn + fl, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  Va = Uf.concat([ls, as, "boxSizing", "max" + fo, "max" + od, "position", Yn, gt, gt + hl, gt + cl, gt + dl, gt + fl]),
  ZE = function(e, n, r) {
    Zs(r);
    var i = e._gsap;
    if (i.spacerIsNative) Zs(i.spacerState);
    else if (e._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(e, n), s.removeChild(n))
    }
    e._gsap.swappedIn = !1
  },
  Nc = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var s = Uf.length, o = n.style, l = e.style, a; s--;) a = Uf[s], o[a] = r[a];
      o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), l[sd] = l[id] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[ls] = zf(e, en) + Mt, o[as] = zf(e, wt) + Mt, o[gt] = l[Yn] = l[ly] = l[oy] = "0", Zs(i), l[ls] = l["max" + fo] = r[ls], l[as] = l["max" + od] = r[as], l[gt] = r[gt], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0
    }
  },
  eT = /([A-Z])/g,
  Zs = function(e) {
    if (e) {
      var n = e.t.style,
        r = e.length,
        i = 0,
        s, o;
      for ((e.t._gsap || de.core.getCache(e.t)).uncache = 1; i < r; i += 2) o = e[i + 1], s = e[i], o ? n[s] = o : n[s] && n.removeProperty(s.replace(eT, "-$1").toLowerCase())
    }
  },
  ka = function(e) {
    for (var n = Va.length, r = e.style, i = [], s = 0; s < n; s++) i.push(Va[s], r[Va[s]]);
    return i.t = e, i
  },
  tT = function(e, n, r) {
    for (var i = [], s = e.length, o = r ? 8 : 0, l; o < s; o += 2) l = e[o], i.push(l, l in n ? n[l] : e[o + 1]);
    return i.t = e.t, i
  },
  Ya = {
    left: 0,
    top: 0
  },
  vg = function(e, n, r, i, s, o, l, a, u, f, h, d, c, p) {
    nn(e) && (e = e(a)), Fn(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Wa("0" + e.substr(3), r) : 0));
    var g = c ? c.time() : 0,
      D, m, _;
    if (c && c.seek(0), isNaN(e) || (e = +e), za(e)) c && (e = de.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, d, e)), l && ja(l, r, i, !0);
    else {
      nn(n) && (n = n(a));
      var v = (e || "0").split(" "),
        y, b, S, E;
      _ = hn(n, a) || Ze, y = Ir(_) || {}, (!y || !y.left && !y.top) && Xn(_).display === "none" && (E = _.style.display, _.style.display = "block", y = Ir(_), E ? _.style.display = E : _.style.removeProperty("display")), b = Wa(v[0], y[i.d]), S = Wa(v[1] || "0", r), e = y[i.p] - u[i.p] - f + b + s - S, l && ja(l, S, i, r - S < 20 || l._isStart && S > 20), r -= r - S
    }
    if (p && (a[p] = e || -.001, e < 0 && (e = 0)), o) {
      var C = e + r,
        A = o._isStart;
      D = "scroll" + i.d2, ja(o, C, i, A && C > 20 || !A && (h ? Math.max(Ze[D], lr[D]) : o.parentNode[D]) <= C + 1), h && (u = Ir(l), h && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Mt))
    }
    return c && _ && (D = Ir(_), c.seek(d), m = Ir(_), c._caScrollDist = D[i.p] - m[i.p], e = e / c._caScrollDist * d), c && c.seek(g), c ? e : Math.round(e)
  },
  nT = /(webkit|moz|length|cssText|inset)/i,
  bg = function(e, n, r, i) {
    if (e.parentNode !== n) {
      var s = e.style,
        o, l;
      if (n === Ze) {
        e._stOrig = s.cssText, l = Xn(e);
        for (o in l) !+o && !nT.test(o) && l[o] && typeof s[o] == "string" && o !== "0" && (s[o] = l[o]);
        s.top = r, s.left = i
      } else s.cssText = e._stOrig;
      de.core.getCache(e).uncache = 1, n.appendChild(e)
    }
  },
  dy = function(e, n, r) {
    var i = n,
      s = i;
    return function(o) {
      var l = Math.round(e());
      return l !== i && l !== s && Math.abs(l - i) > 3 && Math.abs(l - s) > 3 && (o = l, r && r()), s = i, i = o, o
    }
  },
  Fa = function(e, n, r) {
    var i = {};
    i[n.p] = "+=" + r, de.set(e, i)
  },
  xg = function(e, n) {
    var r = ki(e, n),
      i = "_scroll" + n.p2,
      s = function o(l, a, u, f, h) {
        var d = o.tween,
          c = a.onComplete,
          p = {};
        u = u || r();
        var g = dy(r, u, function() {
          d.kill(), o.tween = 0
        });
        return h = f && h || 0, f = f || l - u, d && d.kill(), a[i] = l, a.modifiers = p, p[i] = function() {
          return g(u + f * d.ratio + h * d.ratio * d.ratio)
        }, a.onUpdate = function() {
          Ae.cache++, Vr()
        }, a.onComplete = function() {
          o.tween = 0, c && c.call(d)
        }, d = o.tween = de.to(e, a), d
      };
    return e[i] = r, r.wheelHandler = function() {
      return s.tween && s.tween.kill() && (s.tween = 0)
    }, St(e, "wheel", r.wheelHandler), ke.isTouch && St(e, "touchmove", r.wheelHandler), s
  },
  ke = function() {
    function t(n, r) {
      ks || t.register(de) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Hf(this), this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !zo) {
        this.update = this.refresh = this.kill = br;
        return
      }
      r = _g(Fn(r) || za(r) || r.nodeType ? {
        trigger: r
      } : r, Sa);
      var s = r,
        o = s.onUpdate,
        l = s.toggleClass,
        a = s.id,
        u = s.onToggle,
        f = s.onRefresh,
        h = s.scrub,
        d = s.trigger,
        c = s.pin,
        p = s.pinSpacing,
        g = s.invalidateOnRefresh,
        D = s.anticipatePin,
        m = s.onScrubComplete,
        _ = s.onSnapComplete,
        v = s.once,
        y = s.snap,
        b = s.pinReparent,
        S = s.pinSpacer,
        E = s.containerAnimation,
        C = s.fastScrollEnd,
        A = s.preventOverlaps,
        M = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? en : wt,
        B = !h && h !== 0,
        L = hn(r.scroller || Ne),
        $ = de.core.getCache(L),
        z = ps(L),
        re = ("pinType" in r ? r.pinType : xi(L, "pinType") || z && "fixed") === "fixed",
        j = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
        U = B && r.toggleActions.split(" "),
        ee = "markers" in r ? r.markers : Sa.markers,
        W = z ? 0 : parseFloat(Xn(L)["border" + M.p2 + fo]) || 0,
        R = this,
        ie = r.onRefreshInit && function() {
          return r.onRefreshInit(R)
        },
        ce = YE(L, z, M),
        ve = XE(L, z),
        fe = 0,
        De = 0,
        xe = 0,
        N = ki(L, M),
        q, G, ne, me, x, w, P, O, V, T, J, Q, te, X, se, le, pe, he, ae, we, Ee, We, Qe, yt, Dt, Ft, $n, Je, tt, vn, an, Pe, bn, rt, Bt, un, gr, _e, k;
      if (R._startClamp = R._endClamp = !1, R._dir = M, D *= 45, R.scroller = L, R.scroll = E ? E.time.bind(E) : N, me = N(), R.vars = r, i = i || r.animation, "refreshPriority" in r && (Qm = 1, r.refreshPriority === -9999 && (pl = R)), $.tweenScroll = $.tweenScroll || {
          top: xg(L, wt),
          left: xg(L, en)
        }, R.tweenTo = q = $.tweenScroll[M.p], R.scrubDuration = function(H) {
          bn = za(H) && H, bn ? Pe ? Pe.duration(H) : Pe = de.to(i, {
            ease: "expo",
            totalProgress: "+=0",
            duration: bn,
            paused: !0,
            onComplete: function() {
              return m && m(R)
            }
          }) : (Pe && Pe.progress(1).kill(), Pe = 0)
        }, i && (i.vars.lazy = !1, i._initted && !R.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), R.animation = i.pause(), i.scrollTrigger = R, R.scrubDuration(h), vn = 0, a || (a = i.vars.id)), y && ((!Wi(y) || y.push) && (y = {
          snapTo: y
        }), "scrollBehavior" in Ze.style && de.set(z ? [Ze, lr] : L, {
          scrollBehavior: "auto"
        }), Ae.forEach(function(H) {
          return nn(H) && H.target === (z ? it.scrollingElement || lr : L) && (H.smooth = !1)
        }), ne = nn(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? qE(i) : y.snapTo === "labelsDirectional" ? GE(i) : y.directional !== !1 ? function(H, oe) {
          return ld(y.snapTo)(H, Qt() - De < 500 ? 0 : oe.direction)
        } : de.utils.snap(y.snapTo), rt = y.duration || {
          min: .1,
          max: 2
        }, rt = Wi(rt) ? Ns(rt.min, rt.max) : Ns(rt, rt), Bt = de.delayedCall(y.delay || bn / 2 || .1, function() {
          var H = N(),
            oe = Qt() - De < 500,
            K = q.tween;
          if ((oe || Math.abs(R.getVelocity()) < 10) && !K && !Qu && fe !== H) {
            var ue = (H - w) / X,
              ye = i && !B ? i.totalProgress() : ue,
              ge = oe ? 0 : (ye - an) / (Qt() - Ha) * 1e3 || 0,
              Se = de.utils.clamp(-ue, 1 - ue, Ts(ge / 2) * ge / .185),
              ze = ue + (y.inertia === !1 ? 0 : Se),
              Ye = Ns(0, 1, ne(ze, R)),
              Re = Math.round(w + Ye * X),
              Me = y,
              je = Me.onStart,
              Ce = Me.onInterrupt,
              At = Me.onComplete;
            if (H <= P && H >= w && Re !== H) {
              if (K && !K._initted && K.data <= Ts(Re - H)) return;
              y.inertia === !1 && (Se = Ye - ue), q(Re, {
                duration: rt(Ts(Math.max(Ts(ze - ye), Ts(Ye - ye)) * .185 / ge / .05 || 0)),
                ease: y.ease || "power3",
                data: Ts(Re - H),
                onInterrupt: function() {
                  return Bt.restart(!0) && Ce && Ce(R)
                },
                onComplete: function() {
                  R.update(), fe = N(), vn = an = i && !B ? i.totalProgress() : R.progress, _ && _(R), At && At(R)
                }
              }, H, Se * X, Re - H - Se * X), je && je(R, q.tween)
            }
          } else R.isActive && fe !== H && Bt.restart(!0)
        }).pause()), a && (Wf[a] = R), d = R.trigger = hn(d || c !== !0 && c), k = d && d._gsap && d._gsap.stRevert, k && (k = k(R)), c = c === !0 ? d : hn(c), Fn(l) && (l = {
          targets: d,
          className: l
        }), c && (p === !1 || p === Yn || (p = !p && c.parentNode && c.parentNode.style && Xn(c.parentNode).display === "flex" ? !1 : gt), R.pin = c, G = de.core.getCache(c), G.spacer ? se = G.pinState : (S && (S = hn(S), S && !S.nodeType && (S = S.current || S.nativeElement), G.spacerIsNative = !!S, S && (G.spacerState = ka(S))), G.spacer = he = S || it.createElement("div"), he.classList.add("pin-spacer"), a && he.classList.add("pin-spacer-" + a), G.pinState = se = ka(c)), r.force3D !== !1 && de.set(c, {
          force3D: !0
        }), R.spacer = he = G.spacer, tt = Xn(c), yt = tt[p + M.os2], we = de.getProperty(c), Ee = de.quickSetter(c, M.a, Mt), Nc(c, he, tt), pe = ka(c)), ee) {
        Q = Wi(ee) ? _g(ee, mg) : mg, T = Pa("scroller-start", a, L, M, Q, 0), J = Pa("scroller-end", a, L, M, Q, 0, T), ae = T["offset" + M.op.d2];
        var I = hn(xi(L, "content") || L);
        O = this.markerStart = Pa("start", a, I, M, Q, ae, 0, E), V = this.markerEnd = Pa("end", a, I, M, Q, ae, 0, E), E && (_e = de.quickSetter([O, V], M.a, Mt)), !re && !(Pr.length && xi(L, "fixedMarkers") === !0) && (KE(z ? Ze : L), de.set([T, J], {
          force3D: !0
        }), Ft = de.quickSetter(T, M.a, Mt), Je = de.quickSetter(J, M.a, Mt))
      }
      if (E) {
        var F = E.vars.onUpdate,
          Y = E.vars.onUpdateParams;
        E.eventCallback("onUpdate", function() {
          R.update(0, 0, 1), F && F.apply(E, Y || [])
        })
      }
      if (R.previous = function() {
          return Fe[Fe.indexOf(R) - 1]
        }, R.next = function() {
          return Fe[Fe.indexOf(R) + 1]
        }, R.revert = function(H, oe) {
          if (!oe) return R.kill(!0);
          var K = H !== !1 || !R.enabled,
            ue = Ht;
          K !== R.isReverted && (K && (un = Math.max(N(), R.scroll.rec || 0), xe = R.progress, gr = i && i.progress()), O && [O, V, T, J].forEach(function(ye) {
            return ye.style.display = K ? "none" : "block"
          }), K && (Ht = R, R.update(K)), c && (!b || !R.isActive) && (K ? ZE(c, he, se) : Nc(c, he, Xn(c), Dt)), K || R.update(K), Ht = ue, R.isReverted = K)
        }, R.refresh = function(H, oe, K, ue) {
          if (!((Ht || !R.enabled) && !oe)) {
            if (c && H && er) {
              St(t, "scrollEnd", uy);
              return
            }!Gt && ie && ie(R), Ht = R, q.tween && !K && (q.tween.kill(), q.tween = 0), Pe && Pe.pause(), g && i && i.revert({
              kill: !1
            }).invalidate(), R.isReverted || R.revert(!0, !0), R._subPinOffset = !1;
            var ye = ce(),
              ge = ve(),
              Se = E ? E.duration() : jr(L, M),
              ze = X <= .01,
              Ye = 0,
              Re = ue || 0,
              Me = Wi(K) ? K.end : r.end,
              je = r.endTrigger || d,
              Ce = Wi(K) ? K.start : r.start || (r.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"),
              At = R.pinnedContainer = r.pinnedContainer && hn(r.pinnedContainer, R),
              lt = d && Math.max(0, Fe.indexOf(R)) || 0,
              xn = lt,
              Rt, It, Ai, ta, $t, vt, _r, Zu, gd, Do, mr, vo, na;
            for (ee && Wi(K) && (vo = de.getProperty(T, M.p), na = de.getProperty(J, M.p)); xn--;) vt = Fe[xn], vt.end || vt.refresh(0, 1) || (Ht = R), _r = vt.pin, _r && (_r === d || _r === c || _r === At) && !vt.isReverted && (Do || (Do = []), Do.unshift(vt), vt.revert(!0, !0)), vt !== Fe[xn] && (lt--, xn--);
            for (nn(Ce) && (Ce = Ce(R)), Ce = hg(Ce, "start", R), w = vg(Ce, d, ye, M, N(), O, T, R, ge, W, re, Se, E, R._startClamp && "_startClamp") || (c ? -.001 : 0), nn(Me) && (Me = Me(R)), Fn(Me) && !Me.indexOf("+=") && (~Me.indexOf(" ") ? Me = (Fn(Ce) ? Ce.split(" ")[0] : "") + Me : (Ye = Wa(Me.substr(2), ye), Me = Fn(Ce) ? Ce : (E ? de.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, w) : w) + Ye, je = d)), Me = hg(Me, "end", R), P = Math.max(w, vg(Me || (je ? "100% 0" : Se), je, ye, M, N() + Ye, V, J, R, ge, W, re, Se, E, R._endClamp && "_endClamp")) || -.001, Ye = 0, xn = lt; xn--;) vt = Fe[xn], _r = vt.pin, _r && vt.start - vt._pinPush <= w && !E && vt.end > 0 && (Rt = vt.end - (R._startClamp ? Math.max(0, vt.start) : vt.start), (_r === d && vt.start - vt._pinPush < w || _r === At) && isNaN(Ce) && (Ye += Rt * (1 - vt.progress)), _r === c && (Re += Rt));
            if (w += Ye, P += Ye, R._startClamp && (R._startClamp += Ye), R._endClamp && !Gt && (R._endClamp = P || -.001, P = Math.min(P, jr(L, M))), X = P - w || (w -= .01) && .001, ze && (xe = de.utils.clamp(0, 1, de.utils.normalize(w, P, un))), R._pinPush = Re, O && Ye && (Rt = {}, Rt[M.a] = "+=" + Ye, At && (Rt[M.p] = "-=" + N()), de.set([O, V], Rt)), c) Rt = Xn(c), ta = M === wt, Ai = N(), We = parseFloat(we(M.a)) + Re, !Se && P > 1 && (mr = (z ? it.scrollingElement || lr : L).style, mr = {
              style: mr,
              value: mr["overflow" + M.a.toUpperCase()]
            }, z && Xn(Ze)["overflow" + M.a.toUpperCase()] !== "scroll" && (mr.style["overflow" + M.a.toUpperCase()] = "scroll")), Nc(c, he, Rt), pe = ka(c), It = Ir(c, !0), Zu = re && ki(L, ta ? en : wt)(), p && (Dt = [p + M.os2, X + Re + Mt], Dt.t = he, xn = p === gt ? zf(c, M) + X + Re : 0, xn && Dt.push(M.d, xn + Mt), Zs(Dt), At && Fe.forEach(function(bo) {
              bo.pin === At && bo.vars.pinSpacing !== !1 && (bo._subPinOffset = !0)
            }), re && N(un)), re && ($t = {
              top: It.top + (ta ? Ai - w : Zu) + Mt,
              left: It.left + (ta ? Zu : Ai - w) + Mt,
              boxSizing: "border-box",
              position: "fixed"
            }, $t[ls] = $t["max" + fo] = Math.ceil(It.width) + Mt, $t[as] = $t["max" + od] = Math.ceil(It.height) + Mt, $t[Yn] = $t[Yn + hl] = $t[Yn + cl] = $t[Yn + dl] = $t[Yn + fl] = "0", $t[gt] = Rt[gt], $t[gt + hl] = Rt[gt + hl], $t[gt + cl] = Rt[gt + cl], $t[gt + dl] = Rt[gt + dl], $t[gt + fl] = Rt[gt + fl], le = tT(se, $t, b), Gt && N(0)), i ? (gd = i._initted, Ac(1), i.render(i.duration(), !0, !0), Qe = we(M.a) - We + X + Re, $n = Math.abs(X - Qe) > 1, re && $n && le.splice(le.length - 2, 2), i.render(0, !0, !0), gd || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Ac(0)) : Qe = X, mr && (mr.value ? mr.style["overflow" + M.a.toUpperCase()] = mr.value : mr.style.removeProperty("overflow-" + M.a));
            else if (d && N() && !E)
              for (It = d.parentNode; It && It !== Ze;) It._pinOffset && (w -= It._pinOffset, P -= It._pinOffset), It = It.parentNode;
            Do && Do.forEach(function(bo) {
              return bo.revert(!1, !0)
            }), R.start = w, R.end = P, me = x = Gt ? un : N(), !E && !Gt && (me < un && N(un), R.scroll.rec = 0), R.revert(!1, !0), De = Qt(), Bt && (fe = -1, Bt.restart(!0)), Ht = 0, i && B && (i._initted || gr) && i.progress() !== gr && i.progress(gr || 0, !0).render(i.time(), !0, !0), (ze || xe !== R.progress || E) && (i && !B && i.totalProgress(E && w < -.001 && !xe ? de.utils.normalize(w, P, 0) : xe, !0), R.progress = ze || (me - w) / X === xe ? 0 : xe), c && p && (he._pinOffset = Math.round(R.progress * Qe)), Pe && Pe.invalidate(), isNaN(vo) || (vo -= de.getProperty(T, M.p), na -= de.getProperty(J, M.p), Fa(T, M, vo), Fa(O, M, vo - (ue || 0)), Fa(J, M, na), Fa(V, M, na - (ue || 0))), ze && !Gt && R.update(), f && !Gt && !te && (te = !0, f(R), te = !1)
          }
        }, R.getVelocity = function() {
          return (N() - x) / (Qt() - Ha) * 1e3 || 0
        }, R.endAnimation = function() {
          Fo(R.callbackAnimation), i && (Pe ? Pe.progress(1) : i.paused() ? B || Fo(i, R.direction < 0, 1) : Fo(i, i.reversed()))
        }, R.labelToScroll = function(H) {
          return i && i.labels && (w || R.refresh() || w) + i.labels[H] / i.duration() * X || 0
        }, R.getTrailing = function(H) {
          var oe = Fe.indexOf(R),
            K = R.direction > 0 ? Fe.slice(0, oe).reverse() : Fe.slice(oe + 1);
          return (Fn(H) ? K.filter(function(ue) {
            return ue.vars.preventOverlaps === H
          }) : K).filter(function(ue) {
            return R.direction > 0 ? ue.end <= w : ue.start >= P
          })
        }, R.update = function(H, oe, K) {
          if (!(E && !K && !H)) {
            var ue = Gt === !0 ? un : R.scroll(),
              ye = H ? 0 : (ue - w) / X,
              ge = ye < 0 ? 0 : ye > 1 ? 1 : ye || 0,
              Se = R.progress,
              ze, Ye, Re, Me, je, Ce, At, lt;
            if (oe && (x = me, me = E ? N() : ue, y && (an = vn, vn = i && !B ? i.totalProgress() : ge)), D && !ge && c && !Ht && !wa && er && w < ue + (ue - x) / (Qt() - Ha) * D && (ge = 1e-4), ge !== Se && R.enabled) {
              if (ze = R.isActive = !!ge && ge < 1, Ye = !!Se && Se < 1, Ce = ze !== Ye, je = Ce || !!ge != !!Se, R.direction = ge > Se ? 1 : -1, R.progress = ge, je && !Ht && (Re = ge && !Se ? 0 : ge === 1 ? 1 : Se === 1 ? 2 : 3, B && (Me = !Ce && U[Re + 1] !== "none" && U[Re + 1] || U[Re], lt = i && (Me === "complete" || Me === "reset" || Me in i))), A && (Ce || lt) && (lt || h || !i) && (nn(A) ? A(R) : R.getTrailing(A).forEach(function(Ai) {
                  return Ai.endAnimation()
                })), B || (Pe && !Ht && !wa ? (Pe._dp._time - Pe._start !== Pe._time && Pe.render(Pe._dp._time - Pe._start), Pe.resetTo ? Pe.resetTo("totalProgress", ge, i._tTime / i._tDur) : (Pe.vars.totalProgress = ge, Pe.invalidate().restart())) : i && i.totalProgress(ge, !!(Ht && (De || H)))), c) {
                if (H && p && (he.style[p + M.os2] = yt), !re) Ee(Wo(We + Qe * ge));
                else if (je) {
                  if (At = !H && ge > Se && P + 1 > ue && ue + 1 >= jr(L, M), b)
                    if (!H && (ze || At)) {
                      var xn = Ir(c, !0),
                        Rt = ue - w;
                      bg(c, Ze, xn.top + (M === wt ? Rt : 0) + Mt, xn.left + (M === wt ? 0 : Rt) + Mt)
                    } else bg(c, he);
                  Zs(ze || At ? le : pe), $n && ge < 1 && ze || Ee(We + (ge === 1 && !At ? Qe : 0))
                }
              }
              y && !q.tween && !Ht && !wa && Bt.restart(!0), l && (Ce || v && ge && (ge < 1 || !Rc)) && wu(l.targets).forEach(function(Ai) {
                return Ai.classList[ze || v ? "add" : "remove"](l.className)
              }), o && !B && !H && o(R), je && !Ht ? (B && (lt && (Me === "complete" ? i.pause().totalProgress(1) : Me === "reset" ? i.restart(!0).pause() : Me === "restart" ? i.restart(!0) : i[Me]()), o && o(R)), (Ce || !Rc) && (u && Ce && Oc(R, u), j[Re] && Oc(R, j[Re]), v && (ge === 1 ? R.kill(!1, 1) : j[Re] = 0), Ce || (Re = ge === 1 ? 1 : 3, j[Re] && Oc(R, j[Re]))), C && !ze && Math.abs(R.getVelocity()) > (za(C) ? C : 2500) && (Fo(R.callbackAnimation), Pe ? Pe.progress(1) : Fo(i, Me === "reverse" ? 1 : !ge, 1))) : B && o && !Ht && o(R)
            }
            if (Je) {
              var It = E ? ue / E.duration() * (E._caScrollDist || 0) : ue;
              Ft(It + (T._isFlipped ? 1 : 0)), Je(It)
            }
            _e && _e(-ue / E.duration() * (E._caScrollDist || 0))
          }
        }, R.enable = function(H, oe) {
          R.enabled || (R.enabled = !0, St(L, "resize", jo), z || St(L, "scroll", Ss), ie && St(t, "refreshInit", ie), H !== !1 && (R.progress = xe = 0, me = x = fe = N()), oe !== !1 && R.refresh())
        }, R.getTween = function(H) {
          return H && q ? q.tween : Pe
        }, R.setPositions = function(H, oe, K, ue) {
          if (E) {
            var ye = E.scrollTrigger,
              ge = E.duration(),
              Se = ye.end - ye.start;
            H = ye.start + Se * H / ge, oe = ye.start + Se * oe / ge
          }
          R.refresh(!1, !1, {
            start: dg(H, K && !!R._startClamp),
            end: dg(oe, K && !!R._endClamp)
          }, ue), R.update()
        }, R.adjustPinSpacing = function(H) {
          if (Dt && H) {
            var oe = Dt.indexOf(M.d) + 1;
            Dt[oe] = parseFloat(Dt[oe]) + H + Mt, Dt[1] = parseFloat(Dt[1]) + H + Mt, Zs(Dt)
          }
        }, R.disable = function(H, oe) {
          if (R.enabled && (H !== !1 && R.revert(!0, !0), R.enabled = R.isActive = !1, oe || Pe && Pe.pause(), un = 0, G && (G.uncache = 1), ie && Tt(t, "refreshInit", ie), Bt && (Bt.pause(), q.tween && q.tween.kill() && (q.tween = 0)), !z)) {
            for (var K = Fe.length; K--;)
              if (Fe[K].scroller === L && Fe[K] !== R) return;
            Tt(L, "resize", jo), z || Tt(L, "scroll", Ss)
          }
        }, R.kill = function(H, oe) {
          R.disable(H, oe), Pe && !oe && Pe.kill(), a && delete Wf[a];
          var K = Fe.indexOf(R);
          K >= 0 && Fe.splice(K, 1), K === qt && Ua > 0 && qt--, K = 0, Fe.forEach(function(ue) {
            return ue.scroller === R.scroller && (K = 1)
          }), K || Gt || (R.scroll.rec = 0), i && (i.scrollTrigger = null, H && i.revert({
            kill: !1
          }), oe || i.kill()), O && [O, V, T, J].forEach(function(ue) {
            return ue.parentNode && ue.parentNode.removeChild(ue)
          }), pl === R && (pl = 0), c && (G && (G.uncache = 1), K = 0, Fe.forEach(function(ue) {
            return ue.pin === c && K++
          }), K || (G.spacer = 0)), r.onKill && r.onKill(R)
        }, Fe.push(R), R.enable(!1, !1), k && k(R), i && i.add && !X) {
        var Z = R.update;
        R.update = function() {
          R.update = Z, w || P || R.refresh()
        }, de.delayedCall(.01, R.update), X = .01, w = P = 0
      } else R.refresh();
      c && JE()
    }, t.register = function(r) {
      return ks || (de = r || ry(), ny() && window.document && t.enable(), ks = zo), ks
    }, t.defaults = function(r) {
      if (r)
        for (var i in r) Sa[i] = r[i];
      return Sa
    }, t.disable = function(r, i) {
      zo = 0, Fe.forEach(function(o) {
        return o[i ? "kill" : "disable"](r)
      }), Tt(Ne, "wheel", Ss), Tt(it, "scroll", Ss), clearInterval(xa), Tt(it, "touchcancel", br), Tt(Ze, "touchstart", br), Ea(Tt, it, "pointerdown,touchstart,mousedown", pg), Ea(Tt, it, "pointerup,touchend,mouseup", gg), xu.kill(), Ca(Tt);
      for (var s = 0; s < Ae.length; s += 3) Ta(Tt, Ae[s], Ae[s + 1]), Ta(Tt, Ae[s], Ae[s + 2])
    }, t.enable = function() {
      if (Ne = window, it = document, lr = it.documentElement, Ze = it.body, de && (wu = de.utils.toArray, Ns = de.utils.clamp, Hf = de.core.context || br, Ac = de.core.suppressOverwrites || br, nd = Ne.history.scrollRestoration || "auto", jf = Ne.pageYOffset, de.core.globals("ScrollTrigger", t), Ze)) {
        zo = 1, Js = document.createElement("div"), Js.style.height = "100vh", Js.style.position = "absolute", hy(), VE(), dt.register(de), t.isTouch = dt.isTouch, li = dt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), St(Ne, "wheel", Ss), Gm = [Ne, it, lr, Ze], de.matchMedia ? (t.matchMedia = function(a) {
          var u = de.matchMedia(),
            f;
          for (f in a) u.add(f, a[f]);
          return u
        }, de.addEventListener("matchMediaInit", function() {
          return ad()
        }), de.addEventListener("matchMediaRevert", function() {
          return cy()
        }), de.addEventListener("matchMedia", function() {
          qi(0, 1), _s("matchMedia")
        }), de.matchMedia("(orientation: portrait)", function() {
          return Lc(), Lc
        })) : console.warn("Requires GSAP 3.11.0 or later"), Lc(), St(it, "scroll", Ss);
        var r = Ze.style,
          i = r.borderTopStyle,
          s = de.core.Animation.prototype,
          o, l;
        for (s.revert || Object.defineProperty(s, "revert", {
            value: function() {
              return this.time(-.01, !0)
            }
          }), r.borderTopStyle = "solid", o = Ir(Ze), wt.m = Math.round(o.top + wt.sc()) || 0, en.m = Math.round(o.left + en.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), xa = setInterval(yg, 250), de.delayedCall(.5, function() {
            return wa = 0
          }), St(it, "touchcancel", br), St(Ze, "touchstart", br), Ea(St, it, "pointerdown,touchstart,mousedown", pg), Ea(St, it, "pointerup,touchend,mouseup", gg), $f = de.utils.checkPrefix("transform"), Va.push($f), ks = Qt(), xu = de.delayedCall(.2, qi).pause(), Fs = [it, "visibilitychange", function() {
            var a = Ne.innerWidth,
              u = Ne.innerHeight;
            it.hidden ? (cg = a, fg = u) : (cg !== a || fg !== u) && jo()
          }, it, "DOMContentLoaded", qi, Ne, "load", qi, Ne, "resize", jo], Ca(St), Fe.forEach(function(a) {
            return a.enable(0, 1)
          }), l = 0; l < Ae.length; l += 3) Ta(Tt, Ae[l], Ae[l + 1]), Ta(Tt, Ae[l], Ae[l + 2])
      }
    }, t.config = function(r) {
      "limitCallbacks" in r && (Rc = !!r.limitCallbacks);
      var i = r.syncInterval;
      i && clearInterval(xa) || (xa = i) && setInterval(yg, i), "ignoreMobileResize" in r && (Zm = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (Ca(Tt) || Ca(St, r.autoRefreshEvents || "none"), Jm = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }, t.scrollerProxy = function(r, i) {
      var s = hn(r),
        o = Ae.indexOf(s),
        l = ps(s);
      ~o && Ae.splice(o, l ? 6 : 2), i && (l ? Pr.unshift(Ne, i, Ze, i, lr, i) : Pr.unshift(s, i))
    }, t.clearMatchMedia = function(r) {
      Fe.forEach(function(i) {
        return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
      })
    }, t.isInViewport = function(r, i, s) {
      var o = (Fn(r) ? hn(r) : r).getBoundingClientRect(),
        l = o[s ? ls : as] * i || 0;
      return s ? o.right - l > 0 && o.left + l < Ne.innerWidth : o.bottom - l > 0 && o.top + l < Ne.innerHeight
    }, t.positionInViewport = function(r, i, s) {
      Fn(r) && (r = hn(r));
      var o = r.getBoundingClientRect(),
        l = o[s ? ls : as],
        a = i == null ? l / 2 : i in Cu ? Cu[i] * l : ~i.indexOf("%") ? parseFloat(i) * l / 100 : parseFloat(i) || 0;
      return s ? (o.left + a) / Ne.innerWidth : (o.top + a) / Ne.innerHeight
    }, t.killAll = function(r) {
      if (Fe.slice(0).forEach(function(s) {
          return s.vars.id !== "ScrollSmoother" && s.kill()
        }), r !== !0) {
        var i = gs.killAll || [];
        gs = {}, i.forEach(function(s) {
          return s()
        })
      }
    }, t
  }();
ke.version = "3.12.2";
ke.saveStyles = function(t) {
  return t ? wu(t).forEach(function(e) {
    if (e && e.style) {
      var n = kn.indexOf(e);
      n >= 0 && kn.splice(n, 5), kn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), de.core.getCache(e), Hf())
    }
  }) : kn
};
ke.revert = function(t, e) {
  return ad(!t, e)
};
ke.create = function(t, e) {
  return new ke(t, e)
};
ke.refresh = function(t) {
  return t ? jo() : (ks || ke.register()) && qi(!0)
};
ke.update = function(t) {
  return ++Ae.cache && Vr(t === !0 ? 2 : 0)
};
ke.clearScrollMemory = fy;
ke.maxScroll = function(t, e) {
  return jr(t, e ? en : wt)
};
ke.getScrollFunc = function(t, e) {
  return ki(hn(t), e ? en : wt)
};
ke.getById = function(t) {
  return Wf[t]
};
ke.getAll = function() {
  return Fe.filter(function(t) {
    return t.vars.id !== "ScrollSmoother"
  })
};
ke.isScrolling = function() {
  return !!er
};
ke.snapDirectional = ld;
ke.addEventListener = function(t, e) {
  var n = gs[t] || (gs[t] = []);
  ~n.indexOf(e) || n.push(e)
};
ke.removeEventListener = function(t, e) {
  var n = gs[t],
    r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1)
};
ke.batch = function(t, e) {
  var n = [],
    r = {},
    i = e.interval || .016,
    s = e.batchMax || 1e9,
    o = function(u, f) {
      var h = [],
        d = [],
        c = de.delayedCall(i, function() {
          f(h, d), h = [], d = []
        }).pause();
      return function(p) {
        h.length || c.restart(!0), h.push(p.trigger), d.push(p), s <= h.length && c.progress(1)
      }
    },
    l;
  for (l in e) r[l] = l.substr(0, 2) === "on" && nn(e[l]) && l !== "onRefreshInit" ? o(l, e[l]) : e[l];
  return nn(s) && (s = s(), St(ke, "refresh", function() {
    return s = e.batchMax()
  })), wu(t).forEach(function(a) {
    var u = {};
    for (l in r) u[l] = r[l];
    u.trigger = a, n.push(ke.create(u))
  }), n
};
var wg = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
  },
  Bc = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (dt.isTouch ? " pinch-zoom" : "") : "none", e === lr && t(Ze, n)
  },
  Aa = {
    auto: 1,
    scroll: 1
  },
  rT = function(e) {
    var n = e.event,
      r = e.target,
      i = e.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || de.core.getCache(s),
      l = Qt(),
      a;
    if (!o._isScrollT || l - o._isScrollT > 2e3) {
      for (; s && s !== Ze && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(Aa[(a = Xn(s)).overflowY] || Aa[a.overflowX]));) s = s.parentNode;
      o._isScroll = s && s !== r && !ps(s) && (Aa[(a = Xn(s)).overflowY] || Aa[a.overflowX]), o._isScrollT = l
    }(o._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0)
  },
  py = function(e, n, r, i) {
    return dt.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: i = i && rT,
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function() {
        return r && St(it, dt.eventTypes[0], Eg, !1, !0)
      },
      onDisable: function() {
        return Tt(it, dt.eventTypes[0], Eg, !0)
      }
    })
  },
  iT = /(input|label|select|textarea)/i,
  Cg, Eg = function(e) {
    var n = iT.test(e.target.tagName);
    (n || Cg) && (e._gsapAllow = !0, Cg = n)
  },
  sT = function(e) {
    Wi(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      l, a, u = hn(e.target) || lr,
      f = de.core.globals().ScrollSmoother,
      h = f && f.get(),
      d = li && (e.content && hn(e.content) || h && e.content !== !1 && !h.smooth() && h.content()),
      c = ki(u, wt),
      p = ki(u, en),
      g = 1,
      D = (dt.isTouch && Ne.visualViewport ? Ne.visualViewport.scale * Ne.visualViewport.width : Ne.outerWidth) / Ne.innerWidth,
      m = 0,
      _ = nn(i) ? function() {
        return i(l)
      } : function() {
        return i || 2.8
      },
      v, y, b = py(u, e.type, !0, s),
      S = function() {
        return y = !1
      },
      E = br,
      C = br,
      A = function() {
        a = jr(u, wt), C = Ns(li ? 1 : 0, a), r && (E = Ns(0, jr(u, en))), v = us
      },
      M = function() {
        d._gsap.y = Wo(parseFloat(d._gsap.y) + c.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0
      },
      B = function() {
        if (y) {
          requestAnimationFrame(S);
          var ee = Wo(l.deltaY / 2),
            W = C(c.v - ee);
          if (d && W !== c.v + c.offset) {
            c.offset = W - c.v;
            var R = Wo((parseFloat(d && d._gsap.y) || 0) - c.offset);
            d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + R + ", 0, 1)", d._gsap.y = R + "px", c.cacheID = Ae.cache, Vr()
          }
          return !0
        }
        c.offset && M(), y = !0
      },
      L, $, z, re, j = function() {
        A(), L.isActive() && L.vars.scrollY > a && (c() > a ? L.progress(1) && c(a) : L.resetTo("scrollY", a))
      };
    return d && de.set(d, {
      y: "+=0"
    }), e.ignoreCheck = function(U) {
      return li && U.type === "touchmove" && B() || g > 1.05 && U.type !== "touchstart" || l.isGesturing || U.touches && U.touches.length > 1
    }, e.onPress = function() {
      y = !1;
      var U = g;
      g = Wo((Ne.visualViewport && Ne.visualViewport.scale || 1) / D), L.pause(), U !== g && Bc(u, g > 1.01 ? !0 : r ? !1 : "x"), $ = p(), z = c(), A(), v = us
    }, e.onRelease = e.onGestureStart = function(U, ee) {
      if (c.offset && M(), !ee) re.restart(!0);
      else {
        Ae.cache++;
        var W = _(),
          R, ie;
        r && (R = p(), ie = R + W * .05 * -U.velocityX / .227, W *= wg(p, R, ie, jr(u, en)), L.vars.scrollX = E(ie)), R = c(), ie = R + W * .05 * -U.velocityY / .227, W *= wg(c, R, ie, jr(u, wt)), L.vars.scrollY = C(ie), L.invalidate().duration(W).play(.01), (li && L.vars.scrollY >= a || R >= a - 1) && de.to({}, {
          onUpdate: j,
          duration: W
        })
      }
      o && o(U)
    }, e.onWheel = function() {
      L._ts && L.pause(), Qt() - m > 1e3 && (v = 0, m = Qt())
    }, e.onChange = function(U, ee, W, R, ie) {
      if (us !== v && A(), ee && r && p(E(R[2] === ee ? $ + (U.startX - U.x) : p() + ee - R[1])), W) {
        c.offset && M();
        var ce = ie[2] === W,
          ve = ce ? z + U.startY - U.y : c() + W - ie[1],
          fe = C(ve);
        ce && ve !== fe && (z += fe - ve), c(fe)
      }(W || ee) && Vr()
    }, e.onEnable = function() {
      Bc(u, r ? !1 : "x"), ke.addEventListener("refresh", j), St(Ne, "resize", j), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = p.smooth = !1), b.enable()
    }, e.onDisable = function() {
      Bc(u, !0), Tt(Ne, "resize", j), ke.removeEventListener("refresh", j), b.kill()
    }, e.lockAxis = e.lockAxis !== !1, l = new dt(e), l.iOS = li, li && !c() && c(1), li && de.ticker.add(br), re = l._dc, L = de.to(l, {
      ease: "power4",
      paused: !0,
      scrollX: r ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: dy(c, c(), function() {
          return L.pause()
        })
      },
      onUpdate: Vr,
      onComplete: re.vars.onComplete
    }), l
  };
ke.sort = function(t) {
  return Fe.sort(t || function(e, n) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
  })
};
ke.observe = function(t) {
  return new dt(t)
};
ke.normalizeScroll = function(t) {
  if (typeof t > "u") return Pn;
  if (t === !0 && Pn) return Pn.enable();
  if (t === !1) return Pn && Pn.kill();
  var e = t instanceof dt ? t : sT(t);
  return Pn && Pn.target === e.target && Pn.kill(), ps(e.target) && (Pn = e), e
};
ke.core = {
  _getVelocityProp: If,
  _inputObserver: py,
  _scrollers: Ae,
  _proxies: Pr,
  bridge: {
    ss: function() {
      er || _s("scrollStart"), er = Qt()
    },
    ref: function() {
      return Ht
    }
  }
};
ry() && de.registerPlugin(ke);
/*!
 * strings: 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var oT = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function gy(t) {
  var e = t.nodeType,
    n = "";
  if (e === 1 || e === 9 || e === 11) {
    if (typeof t.textContent == "string") return t.textContent;
    for (t = t.firstChild; t; t = t.nextSibling) n += gy(t)
  } else if (e === 3 || e === 4) return t.nodeValue;
  return n
}
/*!
 * VelocityTracker: 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var xr, Vf, gl, _y, As, Bs, Yf, my, yy = function() {
    return xr || typeof window < "u" && (xr = window.gsap)
  },
  Xf = {},
  lT = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  Kf = function(e) {
    return my(e).id
  },
  Uo = function(e) {
    return Xf[Kf(typeof e == "string" ? gl(e)[0] : e)]
  },
  Tg = function(e) {
    var n = As,
      r;
    if (e - Yf >= .05)
      for (Yf = e; n;) r = n.g(n.t, n.p), (r !== n.v1 || e - n.t1 > .2) && (n.v2 = n.v1, n.v1 = r, n.t2 = n.t1, n.t1 = e), n = n._next
  },
  aT = {
    deg: 360,
    rad: Math.PI * 2
  },
  Ic = function() {
    xr = yy(), xr && (gl = xr.utils.toArray, _y = xr.utils.getUnit, my = xr.core.getCache, Bs = xr.ticker, Vf = 1)
  },
  uT = function(e, n, r, i) {
    this.t = e, this.p = n, this.g = e._gsap.get, this.rCap = aT[r || _y(this.g(e, n))], this.v1 = this.v2 = 0, this.t1 = this.t2 = Bs.time, i && (this._next = i, i._prev = this)
  },
  Zl = function() {
    function t(n, r) {
      Vf || Ic(), this.target = gl(n)[0], Xf[Kf(this.target)] = this, this._props = {}, r && this.add(r)
    }
    t.register = function(r) {
      xr = r, Ic()
    };
    var e = t.prototype;
    return e.get = function(r, i) {
      var s = this._props[r] || console.warn("Not tracking " + r + " velocity."),
        o, l, a;
      return o = parseFloat(i ? s.v1 : s.g(s.t, s.p)), l = o - parseFloat(s.v2), a = s.rCap, a && (l = l % a, l !== l % (a / 2) && (l = l < 0 ? l + a : l - a)), lT(l / ((i ? s.t1 : Bs.time) - s.t2))
    }, e.getAll = function() {
      var r = {},
        i = this._props,
        s;
      for (s in i) r[s] = this.get(s);
      return r
    }, e.isTracking = function(r) {
      return r in this._props
    }, e.add = function(r, i) {
      r in this._props || (As || (Bs.add(Tg), Yf = Bs.time), As = this._props[r] = new uT(this.target, r, i, As))
    }, e.remove = function(r) {
      var i = this._props[r],
        s, o;
      i && (s = i._prev, o = i._next, s && (s._next = o), o ? o._prev = s : As === i && (Bs.remove(Tg), As = 0), delete this._props[r])
    }, e.kill = function(r) {
      for (var i in this._props) this.remove(i);
      r || delete Xf[Kf(this.target)]
    }, t.track = function(r, i, s) {
      Vf || Ic();
      for (var o = [], l = gl(r), a = i.split(","), u = (s || "").split(","), f = l.length, h, d; f--;) {
        for (h = Uo(l[f]) || new t(l[f]), d = a.length; d--;) h.add(a[d], u[d] || u[0]);
        o.push(h)
      }
      return o
    }, t.untrack = function(r, i) {
      var s = (i || "").split(",");
      gl(r).forEach(function(o) {
        var l = Uo(o);
        l && (s.length ? s.forEach(function(a) {
          return l.remove(a)
        }) : l.kill(1))
      })
    }, t.isTracking = function(r, i) {
      var s = Uo(r);
      return s && s.isTracking(i)
    }, t.getVelocity = function(r, i) {
      var s = Uo(r);
      return !s || !s.isTracking(i) ? console.warn("Not tracking velocity of " + i) : s.get(i)
    }, t
  }();
Zl.getByTarget = Uo;
yy() && xr.registerPlugin(Zl);
/*!
 * InertiaPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var xt, Dy, Sg, vy, qf, _l, by, xy, wy, ud, Cy, ml, Gf, Ey, Eu = Zl.getByTarget,
  Ty = function() {
    return xt || typeof window < "u" && (xt = window.gsap) && xt.registerPlugin && xt
  },
  cT = function(e) {
    return typeof e == "string"
  },
  zl = function(e) {
    return typeof e == "number"
  },
  Ci = function(e) {
    return typeof e == "object"
  },
  Qf = function(e) {
    return typeof e == "function"
  },
  fT = 1,
  Sy = Array.isArray,
  hT = function(e) {
    return e
  },
  cs = 1e10,
  Pg = 1 / cs,
  Py = .05,
  dT = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  pT = function(e, n, r) {
    for (var i in n) !(i in e) && i !== r && (e[i] = n[i]);
    return e
  },
  gT = function t(e) {
    var n = {},
      r, i;
    for (r in e) n[r] = Ci(i = e[r]) && !Sy(i) ? t(i) : i;
    return n
  },
  kg = function(e, n, r, i, s) {
    var o = n.length,
      l = 0,
      a = cs,
      u, f, h, d;
    if (Ci(e)) {
      for (; o--;) {
        u = n[o], f = 0;
        for (h in e) d = u[h] - e[h], f += d * d;
        f < a && (l = o, a = f)
      }
      if ((s || cs) < cs && s < Math.sqrt(a)) return e
    } else
      for (; o--;) u = n[o], f = u - e, f < 0 && (f = -f), f < a && u >= i && u <= r && (l = o, a = f);
    return n[l]
  },
  ky = function(e, n, r, i, s, o, l) {
    if (e.end === "auto") return e;
    var a = e.end,
      u, f;
    if (r = isNaN(r) ? cs : r, i = isNaN(i) ? -cs : i, Ci(n)) {
      if (u = n.calculated ? n : (Qf(a) ? a(n, l) : kg(n, a, r, i, o)) || n, !n.calculated) {
        for (f in u) n[f] = u[f];
        n.calculated = !0
      }
      u = u[s]
    } else u = Qf(a) ? a(n, l) : Sy(a) ? kg(n, a, r, i, o) : parseFloat(a);
    return u > r ? u = r : u < i && (u = i), {
      max: u,
      min: u,
      unitFactor: e.unitFactor
    }
  },
  Tu = function(e, n, r) {
    return isNaN(e[n]) ? r : +e[n]
  },
  cd = function(e, n) {
    return n * Py * e / ud
  },
  Fg = function(e, n, r) {
    return Math.abs((n - e) * ud / r / Py)
  },
  Fy = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
  },
  Ay = function(e, n, r, i) {
    if (n.linkedProps) {
      var s = n.linkedProps.split(","),
        o = {},
        l, a, u, f, h, d;
      for (l = 0; l < s.length; l++) a = s[l], u = n[a], u && (zl(u.velocity) ? f = u.velocity : (h = h || Eu(e), f = h && h.isTracking(a) ? h.get(a) : 0), d = Math.abs(f / Tu(u, "resistance", i)), o[a] = parseFloat(r(e, a)) + cd(f, d));
      return o
    }
  },
  _T = function(e, n, r, i, s, o) {
    if (r === void 0 && (r = 10), i === void 0 && (i = .2), s === void 0 && (s = 1), o === void 0 && (o = 0), cT(e) && (e = vy(e)[0]), !e) return 0;
    var l = 0,
      a = cs,
      u = n.inertia || n,
      f = wy(e).get,
      h = Tu(u, "resistance", _l.resistance),
      d, c, p, g, D, m, _, v, y, b;
    b = Ay(e, u, f, h);
    for (d in u) Fy[d] || (c = u[d], Ci(c) || (v = v || Eu(e), v && v.isTracking(d) ? c = zl(c) ? {
      velocity: c
    } : {
      velocity: v.get(d)
    } : (g = +c || 0, p = Math.abs(g / h))), Ci(c) && (zl(c.velocity) ? g = c.velocity : (v = v || Eu(e), g = v && v.isTracking(d) ? v.get(d) : 0), p = Cy(i, r, Math.abs(g / Tu(c, "resistance", h))), D = parseFloat(f(e, d)) || 0, m = D + cd(g, p), "end" in c && (c = ky(c, b && d in b ? b : m, c.max, c.min, d, u.radius, g), o && (ml === n && (ml = u = gT(n)), u[d] = pT(c, u[d], "end"))), "max" in c && m > +c.max + Pg ? (y = c.unitFactor || _l.unitFactors[d] || 1, _ = D > c.max && c.min !== c.max || g * y > -15 && g * y < 45 ? i + (r - i) * .1 : Fg(D, c.max, g), _ + s < a && (a = _ + s)) : "min" in c && m < +c.min - Pg && (y = c.unitFactor || _l.unitFactors[d] || 1, _ = D < c.min && c.min !== c.max || g * y > -45 && g * y < 15 ? i + (r - i) * .1 : Fg(D, c.min, g), _ + s < a && (a = _ + s)), _ > l && (l = _)), p > l && (l = p));
    return l > a && (l = a), l > r ? r : l < i ? i : l
  },
  Ag = function() {
    xt = Ty(), xt && (Sg = xt.parseEase, vy = xt.utils.toArray, by = xt.utils.getUnit, wy = xt.core.getCache, Cy = xt.utils.clamp, Gf = xt.core.getStyleSaver, Ey = xt.core.reverting || function() {}, qf = Sg("power3"), ud = qf(.05), xy = xt.core.PropTween, xt.config({
      resistance: 100,
      unitFactors: {
        time: 1e3,
        totalTime: 1e3,
        progress: 1e3,
        totalProgress: 1e3
      }
    }), _l = xt.config(), xt.registerPlugin(Zl), Dy = 1)
  },
  fd = {
    version: "3.12.2",
    name: "inertia",
    register: function(e) {
      xt = e, Ag()
    },
    init: function(e, n, r, i, s) {
      Dy || Ag();
      var o = Eu(e);
      if (n === "auto") {
        if (!o) {
          console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
          return
        }
        n = o.getAll()
      }
      this.styles = Gf && typeof e.style == "object" && Gf(e), this.target = e, this.tween = r, ml = n;
      var l = e._gsap,
        a = l.get,
        u = n.duration,
        f = Ci(u),
        h = n.preventOvershoot || f && u.overshoot === 0,
        d = Tu(n, "resistance", _l.resistance),
        c = zl(u) ? u : _T(e, n, f && u.max || 10, f && u.min || .2, f && "overshoot" in u ? +u.overshoot : h ? 0 : 1, !0),
        p, g, D, m, _, v, y, b, S;
      n = ml, ml = 0, S = Ay(e, n, a, d);
      for (p in n) Fy[p] || (g = n[p], Qf(g) && (g = g(i, e, s)), zl(g) ? _ = g : Ci(g) && !isNaN(g.velocity) ? _ = +g.velocity : o && o.isTracking(p) ? _ = o.get(p) : console.warn("ERROR: No velocity was defined for " + e + " property: " + p), v = cd(_, c), b = 0, D = a(e, p), m = by(D), D = parseFloat(D), Ci(g) && (y = D + v, "end" in g && (g = ky(g, S && p in S ? S : y, g.max, g.min, p, n.radius, _)), "max" in g && +g.max < y ? h || g.preventOvershoot ? v = g.max - D : b = g.max - D - v : "min" in g && +g.min > y && (h || g.preventOvershoot ? v = g.min - D : b = g.min - D - v)), this._props.push(p), this.styles && this.styles.save(p), this._pt = new xy(this._pt, e, p, D, 0, hT, 0, l.set(e, p, this)), this._pt.u = m || 0, this._pt.c1 = v, this._pt.c2 = b);
      return r.duration(c), fT
    },
    render: function(e, n) {
      var r = n._pt;
      if (e = qf(n.tween._time / n.tween._dur), e || !Ey())
        for (; r;) r.set(r.t, r.p, dT(r.s + r.c1 * e + r.c2 * e * e) + r.u, r.d, e), r = r._next;
      else n.styles.revert()
    }
  };
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t) {
  return fd[t] = Zl[t]
});
Ty() && xt.registerPlugin(fd);
/*!
 * SplitText: 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Is, Jf, Ry, Ao, My, Ju, mT = /(?:\r|\n|\t\t)/g,
  yT = /(?:\s\s+)/g,
  Oy = function(e) {
    Is = document, Jf = window, Ao = Ao || e || Jf.gsap || console.warn("Please gsap.registerPlugin(SplitText)"), Ao && (Ju = Ao.utils.toArray, My = Ao.core.context || function() {}, Ry = 1)
  },
  Ly = function(e) {
    return Jf.getComputedStyle(e)
  },
  hd = function(e) {
    return e.position === "absolute" || e.absolute === !0
  },
  DT = function(e, n) {
    for (var r = n.length, i; --r > -1;)
      if (i = n[r], e.substr(0, i.length) === i) return i.length
  },
  vT = " style='position:relative;display:inline-block;'",
  Rg = function(e, n) {
    e === void 0 && (e = "");
    var r = ~e.indexOf("++"),
      i = 1;
    return r && (e = e.split("++").join("")),
      function() {
        return "<" + n + vT + (e ? " class='" + e + (r ? i++ : "") + "'>" : ">")
      }
  },
  Ny = function t(e, n, r) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
      for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
    else(i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(n).join(r))
  },
  $c = function(e, n) {
    for (var r = n.length; --r > -1;) e.push(n[r])
  },
  Mg = function(e, n, r) {
    for (var i; e && e !== n;) {
      if (i = e._next || e.nextSibling, i) return i.textContent.charAt(0) === r;
      e = e.parentNode || e._parent
    }
  },
  bT = function t(e) {
    var n = Ju(e.childNodes),
      r = n.length,
      i, s;
    for (i = 0; i < r; i++) s = n[i], s._isSplit ? t(s) : i && s.previousSibling && s.previousSibling.nodeType === 3 ? (s.previousSibling.nodeValue += s.nodeType === 3 ? s.nodeValue : s.firstChild.nodeValue, e.removeChild(s)) : s.nodeType !== 3 && (e.insertBefore(s.firstChild, s), e.removeChild(s))
  },
  yr = function(e, n) {
    return parseFloat(n[e]) || 0
  },
  xT = function(e, n, r, i, s, o, l) {
    var a = Ly(e),
      u = yr("paddingLeft", a),
      f = -999,
      h = yr("borderBottomWidth", a) + yr("borderTopWidth", a),
      d = yr("borderLeftWidth", a) + yr("borderRightWidth", a),
      c = yr("paddingTop", a) + yr("paddingBottom", a),
      p = yr("paddingLeft", a) + yr("paddingRight", a),
      g = yr("fontSize", a) * (n.lineThreshold || .2),
      D = a.textAlign,
      m = [],
      _ = [],
      v = [],
      y = n.wordDelimiter || " ",
      b = n.tag ? n.tag : n.span ? "span" : "div",
      S = n.type || n.split || "chars,words,lines",
      E = s && ~S.indexOf("lines") ? [] : null,
      C = ~S.indexOf("words"),
      A = ~S.indexOf("chars"),
      M = hd(n),
      B = n.linesClass,
      L = ~(B || "").indexOf("++"),
      $ = [],
      z = a.display === "flex",
      re = e.style.display,
      j, U, ee, W, R, ie, ce, ve, fe, De, xe, N;
    for (L && (B = B.split("++").join("")), z && (e.style.display = "block"), U = e.getElementsByTagName("*"), ee = U.length, R = [], j = 0; j < ee; j++) R[j] = U[j];
    if (E || M)
      for (j = 0; j < ee; j++) W = R[j], ie = W.parentNode === e, (ie || M || A && !C) && (N = W.offsetTop, E && ie && Math.abs(N - f) > g && (W.nodeName !== "BR" || j === 0) && (ce = [], E.push(ce), f = N), M && (W._x = W.offsetLeft, W._y = N, W._w = W.offsetWidth, W._h = W.offsetHeight), E && ((W._isSplit && ie || !A && ie || C && ie || !C && W.parentNode.parentNode === e && !W.parentNode._isSplit) && (ce.push(W), W._x -= u, Mg(W, e, y) && (W._wordEnd = !0)), W.nodeName === "BR" && (W.nextSibling && W.nextSibling.nodeName === "BR" || j === 0) && E.push([])));
    for (j = 0; j < ee; j++) {
      if (W = R[j], ie = W.parentNode === e, W.nodeName === "BR") {
        E || M ? (W.parentNode && W.parentNode.removeChild(W), R.splice(j--, 1), ee--) : C || e.appendChild(W);
        continue
      }
      if (M && (fe = W.style, !C && !ie && (W._x += W.parentNode._x, W._y += W.parentNode._y), fe.left = W._x + "px", fe.top = W._y + "px", fe.position = "absolute", fe.display = "block", fe.width = W._w + 1 + "px", fe.height = W._h + "px"), !C && A)
        if (W._isSplit)
          for (W._next = U = W.nextSibling, W.parentNode.appendChild(W); U && U.nodeType === 3 && U.textContent === " ";) W._next = U.nextSibling, W.parentNode.appendChild(U), U = U.nextSibling;
        else W.parentNode._isSplit ? (W._parent = W.parentNode, !W.previousSibling && W.firstChild && (W.firstChild._isFirst = !0), W.nextSibling && W.nextSibling.textContent === " " && !W.nextSibling.nextSibling && $.push(W.nextSibling), W._next = W.nextSibling && W.nextSibling._isFirst ? null : W.nextSibling, W.parentNode.removeChild(W), R.splice(j--, 1), ee--) : ie || (N = !W.nextSibling && Mg(W.parentNode, e, y), W.parentNode._parent && W.parentNode._parent.appendChild(W), N && W.parentNode.appendChild(Is.createTextNode(" ")), b === "span" && (W.style.display = "inline"), m.push(W));
      else W.parentNode._isSplit && !W._isSplit && W.innerHTML !== "" ? _.push(W) : A && !W._isSplit && (b === "span" && (W.style.display = "inline"), m.push(W))
    }
    for (j = $.length; --j > -1;) $[j].parentNode.removeChild($[j]);
    if (E) {
      for (M && (De = Is.createElement(b), e.appendChild(De), xe = De.offsetWidth + "px", N = De.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(De)), fe = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
      for (ve = y === " " && (!M || !C && !A), j = 0; j < E.length; j++) {
        for (ce = E[j], De = Is.createElement(b), De.style.cssText = "display:block;text-align:" + D + ";position:" + (M ? "absolute;" : "relative;"), B && (De.className = B + (L ? j + 1 : "")), v.push(De), ee = ce.length, U = 0; U < ee; U++) ce[U].nodeName !== "BR" && (W = ce[U], De.appendChild(W), ve && W._wordEnd && De.appendChild(Is.createTextNode(" ")), M && (U === 0 && (De.style.top = W._y + "px", De.style.left = u + N + "px"), W.style.top = "0px", N && (W.style.left = W._x - N + "px")));
        ee === 0 ? De.innerHTML = "&nbsp;" : !C && !A && (bT(De), Ny(De, String.fromCharCode(160), " ")), M && (De.style.width = xe, De.style.height = W._h + "px"), e.appendChild(De)
      }
      e.style.cssText = fe
    }
    M && (l > e.clientHeight && (e.style.height = l - c + "px", e.clientHeight < l && (e.style.height = l + h + "px")), o > e.clientWidth && (e.style.width = o - p + "px", e.clientWidth < o && (e.style.width = o + d + "px"))), z && (re ? e.style.display = re : e.style.removeProperty("display")), $c(r, m), C && $c(i, _), $c(s, v)
  },
  wT = function(e, n, r, i) {
    var s = n.tag ? n.tag : n.span ? "span" : "div",
      o = n.type || n.split || "chars,words,lines",
      l = ~o.indexOf("chars"),
      a = hd(n),
      u = n.wordDelimiter || " ",
      f = u !== " " ? "" : a ? "&#173; " : " ",
      h = "</" + s + ">",
      d = 1,
      c = n.specialChars ? typeof n.specialChars == "function" ? n.specialChars : DT : null,
      p, g, D, m, _, v, y, b, S = Is.createElement("div"),
      E = e.parentNode;
    for (E.insertBefore(S, e), S.textContent = e.nodeValue, E.removeChild(e), e = S, p = gy(e), y = p.indexOf("<") !== -1, n.reduceWhiteSpace !== !1 && (p = p.replace(yT, " ").replace(mT, "")), y && (p = p.split("<").join("{{LT}}")), _ = p.length, g = (p.charAt(0) === " " ? f : "") + r(), D = 0; D < _; D++)
      if (v = p.charAt(D), c && (b = c(p.substr(D), n.specialChars))) v = p.substr(D, b || 1), g += l && v !== " " ? i() + v + "</" + s + ">" : v, D += b - 1;
      else if (v === u && p.charAt(D - 1) !== u && D) {
      for (g += d ? h : "", d = 0; p.charAt(D + 1) === u;) g += f, D++;
      D === _ - 1 ? g += f : p.charAt(D + 1) !== ")" && (g += f + r(), d = 1)
    } else v === "{" && p.substr(D, 6) === "{{LT}}" ? (g += l ? i() + "{{LT}}</" + s + ">" : "{{LT}}", D += 5) : v.charCodeAt(0) >= 55296 && v.charCodeAt(0) <= 56319 || p.charCodeAt(D + 1) >= 65024 && p.charCodeAt(D + 1) <= 65039 ? (m = ((p.substr(D, 12).split(oT) || [])[1] || "").length || 2, g += l && v !== " " ? i() + p.substr(D, m) + "</" + s + ">" : p.substr(D, m), D += m - 1) : g += l && v !== " " ? i() + v + "</" + s + ">" : v;
    e.outerHTML = g + (d ? h : ""), y && Ny(E, "{{LT}}", "<")
  },
  CT = function t(e, n, r, i) {
    var s = Ju(e.childNodes),
      o = s.length,
      l = hd(n),
      a, u;
    if (e.nodeType !== 3 || o > 1) {
      for (n.absolute = !1, a = 0; a < o; a++) u = s[a], u._next = u._isFirst = u._parent = u._wordEnd = null, (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) && (l && u.nodeType !== 3 && Ly(u).display === "inline" && (u.style.display = "inline-block", u.style.position = "relative"), u._isSplit = !0, t(u, n, r, i));
      n.absolute = l, e._isSplit = !0;
      return
    }
    wT(e, n, r, i)
  },
  dd = function() {
    function t(n, r) {
      Ry || Oy(), this.elements = Ju(n), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = r || {}, My(this), this.split(r)
    }
    var e = t.prototype;
    return e.split = function(r) {
      this.isSplit && this.revert(), this.vars = r = r || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var i = this.elements.length, s = r.tag ? r.tag : r.span ? "span" : "div", o = Rg(r.wordsClass, s), l = Rg(r.charsClass, s), a, u, f; --i > -1;) f = this.elements[i], this._originals[i] = f.innerHTML, a = f.clientHeight, u = f.clientWidth, CT(f, r, o, l), xT(f, r, this.chars, this.words, this.lines, u, a);
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, e.revert = function() {
      var r = this._originals;
      if (!r) throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function(i, s) {
        return i.innerHTML = r[s]
      }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, t.create = function(r, i) {
      return new t(r, i)
    }, t
  }();
dd.version = "3.12.2";
dd.register = Oy;
var Ln = Vt.registerPlugin(Jh) || Vt;
Ln.core.Tween;
const Su = t => {
  if (t != null && t.isRouteChange) {
    Nn.isMenuOpen && Og();
    return
  }
  Nn.isMenuOpen ? Og() : ET()
};

function ET() {
  Zo(!0), Ln.set(".header-fix__plus", {
    pointerEvents: "none"
  });
  const t = Ln.timeline({
    onComplete() {
      Ln.set(".header-fix__plus", {
        clearProps: "pointer-events"
      })
    }
  });
  t.set(".menu, .menu__bg", {
    display: "block"
  }), window.innerWidth <= 1024 ? (t.to(".header-fix__phone", {
    autoAlpha: 0,
    duration: .2
  }), t.to(".menu__bg", {
    opacity: 1
  }, "<"), t.from(".menu", {
    yPercent: -110
  }, "<")) : (t.to(".menu__bg", {
    opacity: 1
  }), t.from(".menu", {
    height: 0,
    width: 0
  }, "<")), t.to(".header-fix__plus", {
    rotate: 45
  }, 0), Nn.isMenuOpen = !0
}

function Og() {
  Ln.set(".header-fix__plus", {
    pointerEvents: "none"
  });
  const t = Ln.timeline({
    onComplete() {
      Zo(!1), Ln.set(".header-fix__plus", {
        clearProps: "pointer-events"
      }), window.innerWidth <= 1024 ? Ln.set(".menu", {
        clearProps: "transform"
      }) : Ln.set(".menu", {
        clearProps: "width,height"
      })
    }
  });
  window.innerWidth <= 1024 ? (t.to(".header-fix__phone", {
    autoAlpha: 1
  }), t.to(".menu", {
    yPercent: -110
  }, "<")) : t.to(".menu", {
    height: 0,
    width: 0
  }), t.to(".menu__bg", {
    opacity: 0
  }, "<"), t.set(".menu, .menu__bg", {
    display: "none"
  }), t.to(".header-fix__plus", {
    rotate: 0
  }, 0), Nn.isMenuOpen = !1
}
const ea = () => ({
    css: !1,
    mode: "in-out",
    onLeave: (t, e) => {
      Su({
        isRouteChange: !0
      }), Nn.isTransitionFinish = !1, Nn.isTransitionStart = !0, Zo(!0), Ln.set("body", {
        pointerEvents: "none"
      }), Ln.timeline({
        onComplete() {
          ke.getAll().filter(n => {
            n.trigger && n.trigger.closest(".page-leave-to") && n.kill()
          }), e()
        }
      }).set(t, {
        position: "relative",
        zIndex: 2
      }).fromTo(t, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      }, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: 1,
        clearProps: "all"
      })
    },
    onEnter: (t, e) => {
      Nn.isTransitionStart = !1, Ln.timeline({
        onComplete() {
          Nn.isTransitionFinish = !0, Zo(!1), e()
        }
      }).set(t, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%"
      }).from(t, {
        opacity: .5,
        duration: 1,
        clearProps: "all"
      })
    },
    onAfterEnter: () => {
      Zo(!1), Ln.set("body", {
        clearProps: "pointer-events"
      })
    }
  }),
  wn = {
    pageTransition: ea()
  },
  Cn = {
    pageTransition: ea()
  },
  En = {
    pageTransition: ea()
  },
  Tn = {
    pageTransition: ea()
  },
  Sn = {
    pageTransition: ea()
  },
  Lg = [{
    name: (wn == null ? void 0 : wn.name) ?? "awards",
    path: (wn == null ? void 0 : wn.path) ?? "/awards",
    meta: wn || {},
    alias: (wn == null ? void 0 : wn.alias) || [],
    redirect: (wn == null ? void 0 : wn.redirect) || void 0,
    component: () => Vi(() => import("./index.91bd04e9.js"), ["./index.91bd04e9.js", "./Footer.a6c709f3.js", "./Footer.64bc959f.css", "./setHeaderMeta.d0135f55.js", "./delay.7101e9ce.js", "./index.31a510a2.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (Cn == null ? void 0 : Cn.name) ?? "index",
    path: (Cn == null ? void 0 : Cn.path) ?? "/",
    meta: Cn || {},
    alias: (Cn == null ? void 0 : Cn.alias) || [],
    redirect: (Cn == null ? void 0 : Cn.redirect) || void 0,
    component: () => Vi(() => import("./index.7f0e4327.js"), ["./index.7f0e4327.js", "./is-video.b47a4014.js", "./is-video.21d84e67.css", "./EaseSlider.3a1163ee.js", "./EaseSlider.83f0b976.css", "./Link.d8229fef.js", "./Link.f1627594.css", "./Footer.a6c709f3.js", "./Footer.64bc959f.css", "./setHeaderMeta.d0135f55.js", "./delay.7101e9ce.js", "./index.8f99003c.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (En == null ? void 0 : En.name) ?? "schedule",
    path: (En == null ? void 0 : En.path) ?? "/schedule",
    meta: En || {},
    alias: (En == null ? void 0 : En.alias) || [],
    redirect: (En == null ? void 0 : En.redirect) || void 0,
    component: () => Vi(() => import("./schedule.c2ed7af8.js"), ["./schedule.c2ed7af8.js", "./EaseSlider.3a1163ee.js", "./EaseSlider.83f0b976.css", "./Footer.a6c709f3.js", "./Footer.64bc959f.css", "./delay.7101e9ce.js", "./schedule.db685cdd.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (Tn == null ? void 0 : Tn.name) ?? "works-slug",
    path: (Tn == null ? void 0 : Tn.path) ?? "/works/:slug()",
    meta: Tn || {},
    alias: (Tn == null ? void 0 : Tn.alias) || [],
    redirect: (Tn == null ? void 0 : Tn.redirect) || void 0,
    component: () => Vi(() => import("./_slug_.a6b589b2.js"), ["./_slug_.a6b589b2.js", "./is-video.b47a4014.js", "./is-video.21d84e67.css", "./Link.d8229fef.js", "./Link.f1627594.css", "./setHeaderMeta.d0135f55.js", "./delay.7101e9ce.js", "./setPhotoFormat.dfb16e11.js", "./_slug_.d6fa6064.css"], import.meta.url).then(t => t.default || t)
  }, {
    name: (Sn == null ? void 0 : Sn.name) ?? "works",
    path: (Sn == null ? void 0 : Sn.path) ?? "/works",
    meta: Sn || {},
    alias: (Sn == null ? void 0 : Sn.alias) || [],
    redirect: (Sn == null ? void 0 : Sn.redirect) || void 0,
    component: () => Vi(() => import("./index.670c3bad.js"), ["./index.670c3bad.js", "./is-video.b47a4014.js", "./is-video.21d84e67.css", "./Footer.a6c709f3.js", "./Footer.64bc959f.css", "./setHeaderMeta.d0135f55.js", "./delay.7101e9ce.js", "./setPhotoFormat.dfb16e11.js", "./index.9e76b4ed.css"], import.meta.url).then(t => t.default || t)
  }];

function TT(t, e, n) {
  return {
    x: 0,
    y: 0
  }
}
const ST = {
  scrollBehavior(t, e, n) {
    const r = nt();
    let i = n || void 0;
    if (!i && e && t && t.meta.scrollToTop !== !1 && PT(e, t) && (i = {
        left: 0,
        top: 0
      }), t.path === e.path) {
      if (e.hash && !t.hash) return {
        left: 0,
        top: 0
      };
      if (t.hash) return {
        el: t.hash,
        top: Ng(t.hash)
      }
    }
    const s = l => !!(l.meta.pageTransition ?? of),
      o = s(e) && s(t) ? "page:transition:finish" : "page:finish";
    return new Promise(l => {
      r.hooks.hookOnce(o, async () => {
        await ms(), t.hash && (i = {
          el: t.hash,
          top: Ng(t.hash)
        }), l(i)
      })
    })
  }
};

function Ng(t) {
  try {
    const e = document.querySelector(t);
    if (e) return parseFloat(getComputedStyle(e).scrollMarginTop)
  } catch {}
  return 0
}

function PT(t, e) {
  const n = e.matched.every((r, i) => {
    var s, o, l;
    return ((s = r.components) == null ? void 0 : s.default) === ((l = (o = t.matched[i]) == null ? void 0 : o.components) == null ? void 0 : l.default)
  });
  return !!(!n || n && JSON.stringify(t.params) !== JSON.stringify(e.params))
}
const kT = {},
  cn = {
    ...kT,
    ...ST,
    ...TT
  },
  FT = async t => {
    var a;
    let e, n;
    if (!((a = t.meta) != null && a.validate)) return;
    const r = nt(),
      i = vs();
    if (([e, n] = ou(() => Promise.resolve(t.meta.validate(t))), e = await e, n(), e) === !0) return;
    const o = Yu({
        statusCode: 404,
        statusMessage: `Page Not Found: ${t.fullPath}`
      }),
      l = i.beforeResolve(u => {
        if (l(), u === t) {
          const f = i.afterEach(async () => {
            f(), await r.runWithContext(() => Rs(o)), window.history.pushState({}, "", t.fullPath)
          });
          return !1
        }
      })
  }, Zf = globalThis.requestIdleCallback || (t => {
    const e = Date.now(),
      n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
      };
    return setTimeout(() => {
      t(n)
    }, 1)
  }), AT = globalThis.cancelIdleCallback || (t => {
    clearTimeout(t)
  }), RT = t => {
    const e = nt();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", () => {
      Zf(t)
    }) : Zf(t)
  }, MT = () => null;

function OT(...t) {
  const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
  typeof t[0] != "string" && t.unshift(e);
  let [n, r, i = {}] = t;
  if (typeof n != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
  if (typeof r != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  i.server = i.server ?? !0, i.default = i.default ?? MT, i.lazy = i.lazy ?? !1, i.immediate = i.immediate ?? !0;
  const s = nt(),
    o = () => s.isHydrating ? s.payload.data[n] : s.static.data[n],
    l = () => o() !== void 0;
  s._asyncData[n] || (s._asyncData[n] = {
    data: rn(o() ?? i.default()),
    pending: rn(!l()),
    error: Ru(s.payload._errors, n),
    status: rn("idle")
  });
  const a = {
    ...s._asyncData[n]
  };
  a.refresh = a.execute = (d = {}) => {
    if (s._asyncDataPromises[n]) {
      if (d.dedupe === !1) return s._asyncDataPromises[n];
      s._asyncDataPromises[n].cancelled = !0
    }
    if ((d._initial || s.isHydrating && d._initial !== !1) && l()) return o();
    a.pending.value = !0, a.status.value = "pending";
    const c = new Promise((p, g) => {
      try {
        p(r(s))
      } catch (D) {
        g(D)
      }
    }).then(p => {
      if (c.cancelled) return s._asyncDataPromises[n];
      let g = p;
      i.transform && (g = i.transform(p)), i.pick && (g = LT(g, i.pick)), a.data.value = g, a.error.value = null, a.status.value = "success"
    }).catch(p => {
      if (c.cancelled) return s._asyncDataPromises[n];
      a.error.value = p, a.data.value = Be(i.default()), a.status.value = "error"
    }).finally(() => {
      c.cancelled || (a.pending.value = !1, s.payload.data[n] = a.data.value, a.error.value && (s.payload._errors[n] = Yu(a.error.value)), delete s._asyncDataPromises[n])
    });
    return s._asyncDataPromises[n] = c, s._asyncDataPromises[n]
  };
  const u = () => a.refresh({
      _initial: !0
    }),
    f = i.server !== !1 && s.payload.serverRendered;
  {
    const d = ys();
    if (d && !d._nuxtOnBeforeMountCbs) {
      d._nuxtOnBeforeMountCbs = [];
      const p = d._nuxtOnBeforeMountCbs;
      d && (w_(() => {
        p.forEach(g => {
          g()
        }), p.splice(0, p.length)
      }), Za(() => p.splice(0, p.length)))
    }
    f && s.isHydrating && l() ? (a.pending.value = !1, a.status.value = a.error.value ? "error" : "success") : d && (s.payload.serverRendered && s.isHydrating || i.lazy) && i.immediate ? d._nuxtOnBeforeMountCbs.push(u) : i.immediate && u(), i.watch && Ji(i.watch, () => a.refresh());
    const c = s.hook("app:data:refresh", p => {
      if (!p || p.includes(n)) return a.refresh()
    });
    d && Za(c)
  }
  const h = Promise.resolve(s._asyncDataPromises[n]).then(() => a);
  return Object.assign(h, a), h
}

function yP(t) {
  const e = nt();
  return t in e.payload.data || (e.payload.data[t] = null), {
    data: Ru(e.payload.data, t)
  }
}

function LT(t, e) {
  const n = {};
  for (const r of e) n[r] = t[r];
  return n
}
async function By(t, e = vs()) {
  const {
    path: n,
    matched: r
  } = e.resolve(t);
  if (!r.length || (e._routePreloaded || (e._routePreloaded = new Set), e._routePreloaded.has(n))) return;
  const i = e._preloadPromises = e._preloadPromises || [];
  if (i.length > 4) return Promise.all(i).then(() => By(t, e));
  e._routePreloaded.add(n);
  const s = r.map(o => {
    var l;
    return (l = o.components) == null ? void 0 : l.default
  }).filter(o => typeof o == "function");
  for (const o of s) {
    const l = Promise.resolve(o()).catch(() => {}).finally(() => i.splice(i.indexOf(l)));
    i.push(l)
  }
  await Promise.all(i)
}

function NT(t = {}) {
  const e = t.path || window.location.pathname;
  let n = {};
  try {
    n = JSON.parse(sessionStorage.getItem("nuxt:reload") || "{}")
  } catch {}
  if (t.force || (n == null ? void 0 : n.path) !== e || (n == null ? void 0 : n.expires) < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({
        path: e,
        expires: Date.now() + (t.ttl ?? 1e4)
      }))
    } catch {}
    if (t.persistState) try {
      sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
        state: nt().payload.state
      }))
    } catch {}
    window.location.pathname !== e ? window.location.href = e : window.location.reload()
  }
}
const BT = (...t) => t.find(e => e !== void 0),
  IT = "noopener noreferrer"; /*! @__NO_SIDE_EFFECTS__ */
function $T(t) {
  const e = t.componentName || "NuxtLink",
    n = (r, i) => {
      if (!r || t.trailingSlash !== "append" && t.trailingSlash !== "remove") return r;
      const s = t.trailingSlash === "append" ? ru : kh;
      if (typeof r == "string") return s(r, !0);
      const o = "path" in r ? r.path : i(r).path;
      return {
        ...r,
        name: void 0,
        path: s(o, !0)
      }
    };
  return nr({
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
    setup(r, {
      slots: i
    }) {
      const s = vs(),
        o = Zt(() => {
          const h = r.to || r.href || "";
          return n(h, s.resolve)
        }),
        l = Zt(() => r.external || r.target && r.target !== "_self" ? !0 : typeof o.value == "object" ? !1 : o.value === "" || Kl(o.value, {
          acceptRelative: !0
        })),
        a = rn(!1),
        u = rn(null),
        f = h => {
          var d;
          u.value = r.custom ? (d = h == null ? void 0 : h.$el) == null ? void 0 : d.nextElementSibling : h == null ? void 0 : h.$el
        };
      if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !zT()) {
        const d = nt();
        let c, p = null;
        _o(() => {
          const g = HT();
          RT(() => {
            c = Zf(() => {
              var D;
              (D = u == null ? void 0 : u.value) != null && D.tagName && (p = g.observe(u.value, async () => {
                p == null || p(), p = null;
                const m = typeof o.value == "string" ? o.value : s.resolve(o.value).fullPath;
                await Promise.all([d.hooks.callHook("link:prefetch", m).catch(() => {}), !l.value && By(o.value, s).catch(() => {})]), a.value = !0
              }))
            })
          })
        }), mo(() => {
          c && AT(c), p == null || p(), p = null
        })
      }
      return () => {
        var g, D;
        if (!l.value) {
          const m = {
            ref: f,
            to: o.value,
            activeClass: r.activeClass || t.activeClass,
            exactActiveClass: r.exactActiveClass || t.exactActiveClass,
            replace: r.replace,
            ariaCurrentValue: r.ariaCurrentValue,
            custom: r.custom
          };
          return r.custom || (a.value && (m.class = r.prefetchedClass || t.prefetchedClass), m.rel = r.rel), ln(cv("RouterLink"), m, i.default)
        }
        const h = typeof o.value == "object" ? ((g = s.resolve(o.value)) == null ? void 0 : g.href) ?? null : o.value || null,
          d = r.target || null,
          c = r.noRel ? null : BT(r.rel, t.externalRelAttribute, h ? IT : "") || null,
          p = () => Hx(h, {
            replace: r.replace
          });
        return r.custom ? i.default ? i.default({
          href: h,
          navigate: p,
          get route() {
            if (!h) return;
            const m = ju(h);
            return {
              path: m.pathname,
              fullPath: m.pathname,
              get query() {
                return G_(m.search)
              },
              hash: m.hash,
              params: {},
              name: void 0,
              matched: [],
              redirectedFrom: void 0,
              meta: {},
              href: h
            }
          },
          rel: c,
          target: d,
          isExternal: l.value,
          isActive: !1,
          isExactActive: !1
        }) : null : ln("a", {
          ref: u,
          href: h,
          rel: c,
          target: d
        }, (D = i.default) == null ? void 0 : D.call(i))
      }
    }
  })
}
const pd = $T({
  componentName: "NuxtLink"
});

function HT() {
  const t = nt();
  if (t._observer) return t._observer;
  let e = null;
  const n = new Map,
    r = (s, o) => (e || (e = new IntersectionObserver(l => {
      for (const a of l) {
        const u = n.get(a.target);
        (a.isIntersecting || a.intersectionRatio > 0) && u && u()
      }
    })), n.set(s, o), e.observe(s), () => {
      n.delete(s), e.unobserve(s), n.size === 0 && (e.disconnect(), e = null)
    });
  return t._observer = {
    observe: r
  }
}

function zT() {
  const t = navigator.connection;
  return !!(t && (t.saveData || /2g/.test(t.effectiveType)))
}
const WT = t => {},
  jT = [FT, WT],
  yl = {};

function UT(t, e, n) {
  const {
    pathname: r,
    search: i,
    hash: s
  } = e, o = t.indexOf("#");
  if (o > -1) {
    const u = s.includes(t.slice(o)) ? t.slice(o).length : 1;
    let f = s.slice(u);
    return f[0] !== "/" && (f = "/" + f), Zd(f, "")
  }
  const l = Zd(r, t),
    a = !n || V1(l, n, {
      trailingSlash: !0
    }) ? l : n;
  return a + (a.includes("?") ? "" : i) + s
}
const VT = Ds({
    name: "nuxt:router",
    enforce: "pre",
    async setup(t) {
      var g, D;
      let e, n, r = i0().app.baseURL;
      cn.hashMode && !r.includes("#") && (r += "#");
      const i = ((g = cn.history) == null ? void 0 : g.call(cn, r)) ?? (cn.hashMode ? lw(r) : g0(r)),
        s = ((D = cn.routes) == null ? void 0 : D.call(cn, Lg)) ?? Lg;
      let o;
      const l = UT(r, window.location, t.payload.path),
        a = Uw({
          ...cn,
          scrollBehavior: (m, _, v) => {
            var y;
            if (_ === Dr) {
              o = v;
              return
            }
            return a.options.scrollBehavior = cn.scrollBehavior, (y = cn.scrollBehavior) == null ? void 0 : y.call(cn, m, Dr, o || v)
          },
          history: i,
          routes: s
        });
      t.vueApp.use(a);
      const u = bl(a.currentRoute.value);
      a.afterEach((m, _) => {
        u.value = _
      }), Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
        get: () => u.value
      });
      const f = bl(a.resolve(l)),
        h = () => {
          f.value = a.currentRoute.value
        };
      t.hook("page:finish", h), a.afterEach((m, _) => {
        var v, y, b, S;
        ((y = (v = m.matched[0]) == null ? void 0 : v.components) == null ? void 0 : y.default) === ((S = (b = _.matched[0]) == null ? void 0 : b.components) == null ? void 0 : S.default) && h()
      });
      const d = {};
      for (const m in f.value) Object.defineProperty(d, m, {
        get: () => f.value[m]
      });
      t._route = Vl(d), t._middleware = t._middleware || {
        global: [],
        named: {}
      };
      const c = Vu();
      try {
        [e, n] = ou(() => a.isReady()), await e, n()
      } catch (m) {
        [e, n] = ou(() => t.runWithContext(() => Rs(m))), await e, n()
      }
      const p = Ix("_layout");
      return a.beforeEach(async (m, _) => {
        var v;
        m.meta = Xr(m.meta), t.isHydrating && p.value && !fs(m.meta.layout) && (m.meta.layout = p.value), t._processingMiddleware = !0;
        {
          const y = new Set([...jT, ...t._middleware.global]);
          for (const b of m.matched) {
            const S = b.meta.middleware;
            if (S)
              if (Array.isArray(S))
                for (const E of S) y.add(E);
              else y.add(S)
          }
          for (const b of y) {
            const S = typeof b == "string" ? t._middleware.named[b] || await ((v = yl[b]) == null ? void 0 : v.call(yl).then(C => C.default || C)) : b;
            if (!S) throw new Error(`Unknown route middleware: '${b}'.`);
            const E = await t.runWithContext(() => S(m, _));
            if (!t.payload.serverRendered && t.isHydrating && (E === !1 || E instanceof Error)) {
              const C = E || uf({
                statusCode: 404,
                statusMessage: `Page Not Found: ${l}`
              });
              return await t.runWithContext(() => Rs(C)), !1
            }
            if (E || E === !1) return E
          }
        }
      }), a.onError(() => {
        delete t._processingMiddleware
      }), a.afterEach(async (m, _, v) => {
        delete t._processingMiddleware, !t.isHydrating && c.value && await t.runWithContext(zx), m.matched.length === 0 && await t.runWithContext(() => Rs(uf({
          statusCode: 404,
          fatal: !1,
          statusMessage: `Page not found: ${m.fullPath}`
        })))
      }), t.hooks.hookOnce("app:created", async () => {
        try {
          await a.replace({
            ...a.resolve(l),
            name: void 0,
            force: !0
          }), a.options.scrollBehavior = cn.scrollBehavior
        } catch (m) {
          await t.runWithContext(() => Rs(m))
        }
      }), {
        provide: {
          router: a
        }
      }
    }
  }),
  YT = Ds({
    name: "nuxt:global-components"
  }),
  XT = Ds({
    name: "nuxt:head",
    setup(t) {
      const n = xx();
      n.push(Ex), t.vueApp.use(n);
      {
        let r = !0;
        const i = () => {
          r = !1, n.hooks.callHook("entries:updated", n)
        };
        n.hooks.hook("dom:beforeRender", s => {
          s.shouldRender = !r
        }), t.hooks.hook("page:start", () => {
          r = !0
        }), t.hooks.hook("page:finish", i), t.hooks.hook("app:suspense:resolve", i)
      }
    }
  }),
  Gi = {
    default: () => Vi(() => import("./default.733b66fd.js"), ["./default.733b66fd.js", "./default.c9b748d5.css"], import.meta.url).then(t => t.default || t)
  },
  KT = Ds({
    name: "nuxt:prefetch",
    setup(t) {
      const e = vs();
      t.hooks.hook("app:mounted", () => {
        e.beforeEach(async n => {
          var i;
          const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
          r && typeof Gi[r] == "function" && await Gi[r]()
        })
      }), t.hooks.hook("link:prefetch", n => {
        var o, l, a, u;
        if (Kl(n)) return;
        const r = e.resolve(n);
        if (!r) return;
        const i = (o = r == null ? void 0 : r.meta) == null ? void 0 : o.layout;
        let s = Array.isArray((l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware) ? (a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware : [(u = r == null ? void 0 : r.meta) == null ? void 0 : u.middleware];
        s = s.filter(f => typeof f == "string");
        for (const f of s) typeof yl[f] == "function" && yl[f]();
        i && typeof Gi[i] == "function" && Gi[i]()
      })
    }
  }),
  qT = Ds({
    name: "nuxt:chunk-reload",
    setup(t) {
      const e = vs(),
        n = i0(),
        r = new Set;
      e.beforeEach(() => {
        r.clear()
      }), t.hook("app:chunkError", ({
        error: i
      }) => {
        r.add(i)
      }), e.onError((i, s) => {
        if (r.has(i)) {
          const l = "href" in s && s.href.startsWith("#") ? n.app.baseURL + s.href : Wu(n.app.baseURL, s.fullPath);
          NT({
            path: l,
            persistState: !0
          })
        }
      })
    }
  });
var Wl = Vt.registerPlugin(Jh) || Vt;
Wl.core.Tween;
const GT = Ds(async () => {
    Wl.registerPlugin(ke, dd, Ql, Jl, Ll, fd, dt), Ll.create("my-ease", "0.32, 0, 0.12, 1"), ke.config({
      ignoreMobileResize: !0,
      autoRefreshEvents: !1
    }), window.innerWidth > 1024 && window.addEventListener("resize", () => {
      ke.refresh()
    }), Wl.defaults({
      ease: "my-ease"
    })
  }),
  QT = [jx, VT, YT, XT, KT, qT, GT],
  JT = (t, e) => e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
    var r;
    return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
  }),
  eh = (t, e) => {
    const n = t.route.matched.find(i => {
        var s;
        return ((s = i.components) == null ? void 0 : s.default) === t.Component.type
      }),
      r = e ?? (n == null ? void 0 : n.meta.key) ?? (n && JT(t.route, n));
    return typeof r == "function" ? r(t.route) : r
  },
  ZT = (t, e) => ({
    default: () => t ? ln(iv, t === !0 ? {} : t, e) : e
  }),
  eS = nr({
    name: "RouteProvider",
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
    setup(t) {
      const e = t.renderKey,
        n = t.route,
        r = {};
      for (const i in t.route) Object.defineProperty(r, i, {
        get: () => e === t.renderKey ? t.route[i] : n[i]
      });
      return es(ql, Vl(r)), () => ln(t.vnode, {
        ref: t.vnodeRef
      })
    }
  }),
  Iy = (t, e, n) => (e = e === !0 ? {} : e, {
    default: () => {
      var r;
      return e ? ln(t, e, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
  }),
  tS = nr({
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
    setup(t, {
      attrs: e,
      expose: n
    }) {
      const r = nt(),
        i = rn(),
        s = sn(ql, null);
      n({
        pageRef: i
      });
      const o = sn(h0, null);
      let l;
      const a = r.deferHydration();
      return () => ln(C0, {
        name: t.name,
        route: t.route,
        ...e
      }, {
        default: u => {
          const f = iS(s, u.route, u.Component),
            h = s && s.matched.length === u.route.matched.length;
          if (!u.Component) return l && !h ? l : void 0;
          if (l && o && !o.isCurrent(u.route)) return l;
          if (f && s && (!o || o != null && o.isCurrent(s))) return h ? l : null;
          const d = eh(u, t.pageKey),
            c = !!(t.transition ?? u.route.meta.pageTransition ?? of),
            p = c && rS([t.transition, u.route.meta.pageTransition, of, {
              onAfterLeave: () => {
                r.callHook("page:transition:finish", u.Component)
              }
            }].filter(Boolean));
          return l = Iy(zu, c && p, ZT(t.keepalive ?? u.route.meta.keepalive ?? Sx, ln(vh, {
            suspensible: !0,
            onPending: () => r.callHook("page:start", u.Component),
            onResolve: () => {
              ms(() => r.callHook("page:finish", u.Component).finally(a))
            }
          }, {
            default: () => ln(eS, {
              key: d,
              vnode: u.Component,
              route: u.route,
              renderKey: d,
              trackRootNodes: c,
              vnodeRef: i
            })
          }))).default(), l
        }
      })
    }
  });

function nS(t) {
  return Array.isArray(t) ? t : t ? [t] : []
}

function rS(t) {
  const e = t.map(n => ({
    ...n,
    onAfterLeave: nS(n.onAfterLeave)
  }));
  return Ox(...e)
}

function iS(t, e, n) {
  if (!t) return !1;
  const r = e.matched.findIndex(i => {
    var s;
    return ((s = i.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
  });
  return !r || r === -1 ? !1 : e.matched.slice(0, r).some((i, s) => {
    var o, l, a;
    return ((o = i.components) == null ? void 0 : o.default) !== ((a = (l = t.matched[s]) == null ? void 0 : l.components) == null ? void 0 : a.default)
  }) || n && eh({
    route: e,
    Component: n
  }) !== eh({
    route: t,
    Component: n
  })
}
const sS = nr({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
      name: String,
      layoutProps: Object
    },
    async setup(t, e) {
      const n = await Gi[t.name]().then(r => r.default || r);
      return () => ln(n, t.layoutProps, e.slots)
    }
  }),
  oS = nr({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
      name: {
        type: [String, Boolean, Object],
        default: null
      }
    },
    setup(t, e) {
      const n = nt(),
        r = sn(ql),
        i = r === Uu() ? Yw() : r,
        s = Zt(() => Be(t.name) ?? i.meta.layout ?? "default"),
        o = rn();
      e.expose({
        layoutRef: o
      });
      const l = n.deferHydration();
      return () => {
        const a = s.value && s.value in Gi,
          u = i.meta.layoutTransition ?? Tx;
        return Iy(zu, a && u, {
          default: () => ln(vh, {
            suspensible: !0,
            onResolve: () => {
              ms(l)
            }
          }, {
            default: () => ln(lS, {
              layoutProps: j_(e.attrs, {
                ref: o
              }),
              key: s.value,
              name: s.value,
              shouldProvide: !t.name,
              hasTransition: !!u
            }, e.slots)
          })
        }).default()
      }
    }
  }),
  lS = nr({
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
    setup(t, e) {
      const n = t.name;
      return t.shouldProvide && es(h0, {
        isCurrent: r => n === (r.meta.layout ?? "default")
      }), () => {
        var r, i;
        return !n || typeof n == "string" && !(n in Gi) ? (i = (r = e.slots).default) == null ? void 0 : i.call(r) : ln(sS, {
          key: n,
          layoutProps: t.layoutProps,
          name: n
        }, e.slots)
      }
    }
  }),
  yo = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, i] of e) n[r] = i;
    return n
  },
  aS = {};

function uS(t, e) {
  const n = tS,
    r = oS;
  return Jt(), Br(r, null, {
    default: $r(() => [Ve(n)]),
    _: 1
  })
}
const cS = yo(aS, [
    ["render", uS]
  ]),
  fS = t => (Lu("data-v-906ae9f7"), t = t(), Nu(), t),
  hS = {
    class: "header-fix"
  },
  dS = {
    class: "header-fix__head _container"
  },
  pS = {
    class: "header-fix__phone"
  },
  gS = fS(() => Oe("div", {
    class: "header-fix__plus-button hover-fadein"
  }, [Oe("svg", {
    class: "header-fix__plus-icon",
    viewBox: "0 0 41 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [Oe("rect", {
    x: "20",
    width: "1",
    height: "41",
    fill: "#ffffff"
  }), Oe("rect", {
    y: "20",
    width: "41",
    height: "1",
    fill: "#ffffff"
  })])], -1)),
  _S = [gS],
  mS = nr({
    __name: "HeaderFix",
    props: {
      phone: {}
    },
    setup(t) {
      return (e, n) => {
        const r = pd;
        return Jt(), Xl("header", hS, [Oe("div", dS, [Oe("div", pS, [Ve(r, {
          to: "/",
          class: "header-fix__phone-number hover-fadein"
        }, {
          default: $r(() => [cr($i(e.phone), 1)]),
          _: 1
        })]), hv(e.$slots, "default", {}, void 0, !0), Oe("div", {
          class: "header-fix__plus",
          onClick: n[0] || (n[0] = () => ("toggleMenu" in e ? e.toggleMenu : Be(Su))())
        }, _S)])])
      }
    }
  });
const yS = yo(mS, [
    ["__scopeId", "data-v-906ae9f7"]
  ]),
  DS = t => (Lu("data-v-52940132"), t = t(), Nu(), t),
  vS = {
    class: "header"
  },
  bS = {
    class: "header-head _container"
  },
  xS = {
    class: "header__spec"
  },
  wS = {
    class: "header__spec1"
  },
  CS = {
    class: "header__spec2"
  },
  ES = {
    class: "header__city"
  },
  TS = {
    class: "header__city-name"
  },
  SS = {
    class: "header__city-time"
  },
  PS = DS(() => Oe("span", {
    class: "blink"
  }, ":", -1)),
  kS = nr({
    __name: "Header",
    props: {
      header_title1: {},
      header_title2: {},
      city: {},
      city_abbr: {},
      timezone: {}
    },
    setup(t) {
      const e = t,
        n = rn("00:00 AM"),
        r = rn(null);
      _o(() => {
        r.value = setInterval(() => {
          i()
        }, 1e3)
      }), mo(() => {
        r.value && clearInterval(r.value)
      });

      function i() {
        const o = new Date;
        n.value = new Date(o.getTime() + o.getTimezoneOffset() * 60 * 1e3 + e.timezone * 60 * 60 * 1e3).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
      const s = Zt(() => {
        const o = n.value.split(" ")[1],
          l = n.value.split(" ")[0];
        return {
          hours: l.split(":")[0],
          minutes: l.split(":")[1],
          dayTime: o
        }
      });
      return (o, l) => (Jt(), Xl("div", vS, [Oe("div", bS, [Oe("div", xS, [Oe("div", wS, $i(o.header_title1), 1), Oe("div", CS, $i(o.header_title2), 1)]), Oe("div", ES, [Oe("div", TS, [cr(" Currently in "), Oe("span", null, $i(e.city), 1)]), Oe("div", SS, [W_("", !0), Oe("span", null, [cr($i(Be(s).hours), 1), PS, cr($i(Be(s).minutes) + " " + $i(Be(s).dayTime), 1)])])])])]))
    }
  });
const FS = yo(kS, [
    ["__scopeId", "data-v-52940132"]
  ]),
  $y = t => (Lu("data-v-04323763"), t = t(), Nu(), t),
  AS = {
    class: "menu"
  },
  RS = {
    class: "menu__wrap"
  },
  MS = Ov('<div class="menu__circles" data-v-04323763><div class="menu__circle" data-v-04323763><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-04323763><circle cx="11.5" cy="11.5" r="11.5" fill="#261723" data-v-04323763></circle></svg></div><div class="menu__circle" data-v-04323763><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-04323763><circle cx="11.5" cy="11.5" r="11.5" fill="#261723" data-v-04323763></circle></svg></div></div>', 1),
  OS = {
    class: "menu__links"
  },
  LS = {
    class: "menu__foot"
  },
  NS = ["href"],
  BS = $y(() => Oe("a", {
    href: "https://wa.me/13322566869",
    target: "_blank",
    class: "menu__foot-link hover-fadein h5-Grotesk"
  }, " WhatsApp ", -1)),
  IS = $y(() => Oe("a", {
    href: "https://www.instagram.com/maksstepenko/",
    target: "_blank",
    class: "menu__foot-link hover-fadein h5-Grotesk"
  }, " Instagram ", -1)),
  $S = nr({
    __name: "Menu",
    props: {
      phone: {},
      mail: {}
    },
    setup(t) {
      return Uu(), (e, n) => {
        const r = pd;
        return Jt(), Xl("div", AS, [Oe("div", RS, [MS, Oe("div", OS, [Ve(r, {
          class: "menu__link hover-fadein",
          to: "/"
        }, {
          default: $r(() => [cr(" Main ")]),
          _: 1
        }), Ve(r, {
          class: "menu__link hover-fadein",
          to: "/works"
        }, {
          default: $r(() => [cr(" Works ")]),
          _: 1
        }), Ve(r, {
          class: "menu__link hover-fadein",
          to: "/awards"
        }, {
          default: $r(() => [cr(" Awards & Recognitions ")]),
          _: 1
        }), Ve(r, {
          class: "menu__link hover-fadein disabled",
          to: "/"
        }, {
          default: $r(() => [cr(" The Process ")]),
          _: 1
        })]), Oe("div", LS, [Oe("a", {
          href: "tel:" + e.phone,
          class: "menu__foot-link hover-fadein h5-Grotesk"
        }, " +1 332 256 68 69 (Maks) ", 8, NS), BS, IS])])])
      }
    }
  });
const HS = yo($S, [
  ["__scopeId", "data-v-04323763"]
]);
const zS = {};

function WS(t, e) {
  return Jt(), Xl("div", {
    class: "menu__bg",
    onClick: e[0] || (e[0] = (...n) => ("toggleMenu" in t ? t.toggleMenu : Be(Su)) && ("toggleMenu" in t ? t.toggleMenu : Be(Su))(...n))
  })
}
const jS = yo(zS, [
  ["render", WS],
  ["__scopeId", "data-v-e7b7d3c0"]
]);

function th() {
  return th = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
  }, th.apply(this, arguments)
}

function Pu(t, e, n) {
  return Math.max(t, Math.min(e, n))
}
class US {
  advance(e) {
    var n;
    if (!this.isRunning) return;
    let r = !1;
    if (this.lerp) this.value = (i = this.value, s = this.to, (1 - (o = 1 - Math.exp(-60 * this.lerp * e))) * i + o * s), Math.round(this.value) === this.to && (this.value = this.to, r = !0);
    else {
      this.currentTime += e;
      const l = Pu(0, this.currentTime / this.duration, 1);
      r = l >= 1;
      const a = r ? 1 : this.easing(l);
      this.value = this.from + (this.to - this.from) * a
    }
    var i, s, o;
    (n = this.onUpdate) == null || n.call(this, this.value, {
      completed: r
    }), r && this.stop()
  }
  stop() {
    this.isRunning = !1
  }
  fromTo(e, n, {
    lerp: r = .1,
    duration: i = 1,
    easing: s = l => l,
    onUpdate: o
  }) {
    this.from = this.value = e, this.to = n, this.lerp = r, this.duration = i, this.easing = s, this.currentTime = 0, this.isRunning = !0, this.onUpdate = o
  }
}
class VS {
  constructor({
    wrapper: e,
    content: n,
    autoResize: r = !0
  } = {}) {
    if (this.resize = () => {
        this.onWrapperResize(), this.onContentResize()
      }, this.onWrapperResize = () => {
        this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
      }, this.onContentResize = () => {
        this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth
      }, this.wrapper = e, this.content = n, r) {
      const i = function(s, o) {
        let l;
        return function() {
          let a = arguments,
            u = this;
          clearTimeout(l), l = setTimeout(function() {
            s.apply(u, a)
          }, 250)
        }
      }(this.resize);
      this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(i), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(i), this.contentResizeObserver.observe(this.content)
    }
    this.resize()
  }
  destroy() {
    var e, n;
    (e = this.wrapperResizeObserver) == null || e.disconnect(), (n = this.contentResizeObserver) == null || n.disconnect()
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    }
  }
}
class Hy {
  constructor() {
    this.events = {}
  }
  emit(e, ...n) {
    let r = this.events[e] || [];
    for (let i = 0, s = r.length; i < s; i++) r[i](...n)
  }
  on(e, n) {
    var r;
    return (r = this.events[e]) != null && r.push(n) || (this.events[e] = [n]), () => {
      var i;
      this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(s => n !== s)
    }
  }
  destroy() {
    this.events = {}
  }
}
class YS {
  constructor(e, {
    wheelMultiplier: n = 1,
    touchMultiplier: r = 2,
    normalizeWheel: i = !1
  }) {
    this.onTouchStart = s => {
      const {
        clientX: o,
        clientY: l
      } = s.targetTouches ? s.targetTouches[0] : s;
      this.touchStart.x = o, this.touchStart.y = l, this.lastDelta = {
        x: 0,
        y: 0
      }
    }, this.onTouchMove = s => {
      const {
        clientX: o,
        clientY: l
      } = s.targetTouches ? s.targetTouches[0] : s, a = -(o - this.touchStart.x) * this.touchMultiplier, u = -(l - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = o, this.touchStart.y = l, this.lastDelta = {
        x: a,
        y: u
      }, this.emitter.emit("scroll", {
        type: "touch",
        deltaX: a,
        deltaY: u,
        event: s
      })
    }, this.onTouchEnd = s => {
      this.emitter.emit("scroll", {
        type: "touch",
        inertia: !0,
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: s
      })
    }, this.onWheel = s => {
      let {
        deltaX: o,
        deltaY: l
      } = s;
      this.normalizeWheel && (o = Pu(-100, o, 100), l = Pu(-100, l, 100)), o *= this.wheelMultiplier, l *= this.wheelMultiplier, this.emitter.emit("scroll", {
        type: "wheel",
        deltaX: o,
        deltaY: l,
        event: s
      })
    }, this.element = e, this.wheelMultiplier = n, this.touchMultiplier = r, this.normalizeWheel = i, this.touchStart = {
      x: null,
      y: null
    }, this.emitter = new Hy, this.element.addEventListener("wheel", this.onWheel, {
      passive: !1
    }), this.element.addEventListener("touchstart", this.onTouchStart, {
      passive: !1
    }), this.element.addEventListener("touchmove", this.onTouchMove, {
      passive: !1
    }), this.element.addEventListener("touchend", this.onTouchEnd, {
      passive: !1
    })
  }
  on(e, n) {
    return this.emitter.on(e, n)
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
class XS {
  constructor({
    wrapper: e = window,
    content: n = document.documentElement,
    wheelEventsTarget: r = e,
    smoothWheel: i = !0,
    smoothTouch: s = !1,
    syncTouch: o = !1,
    syncTouchLerp: l = .1,
    __iosNoInertiaSyncTouchLerp: a = .4,
    touchInertiaMultiplier: u = 35,
    duration: f,
    easing: h = y => Math.min(1, 1.001 - Math.pow(2, -10 * y)),
    lerp: d = f && .1,
    infinite: c = !1,
    orientation: p = "vertical",
    gestureOrientation: g = "vertical",
    touchMultiplier: D = 1,
    wheelMultiplier: m = 1,
    normalizeWheel: _ = !1,
    autoResize: v = !0
  } = {}) {
    this.onVirtualScroll = ({
      type: y,
      inertia: b,
      deltaX: S,
      deltaY: E,
      event: C
    }) => {
      if (C.ctrlKey) return;
      const A = y === "touch",
        M = y === "wheel";
      if (this.options.gestureOrientation === "vertical" && E === 0 || this.options.gestureOrientation === "horizontal" && S === 0 || A && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && E <= 0 || C.composedPath().find(z => (z == null || z.hasAttribute == null ? void 0 : z.hasAttribute("data-lenis-prevent")) || A && (z == null || z.hasAttribute == null ? void 0 : z.hasAttribute("data-lenis-prevent-touch")) || M && (z == null || z.hasAttribute == null ? void 0 : z.hasAttribute("data-lenis-prevent-wheel")))) return;
      if (this.isStopped || this.isLocked) return void C.preventDefault();
      if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && A || this.options.smoothWheel && M, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
      C.preventDefault();
      let B = E;
      this.options.gestureOrientation === "both" ? B = Math.abs(E) > Math.abs(S) ? E : S : this.options.gestureOrientation === "horizontal" && (B = S);
      const L = A && this.options.syncTouch,
        $ = A && b && Math.abs(B) > 1;
      $ && (B = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + B, th({
        programmatic: !1
      }, L && {
        lerp: $ ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
      }))
    }, this.onScroll = () => {
      if (!this.isScrolling) {
        const y = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - y), this.emit()
      }
    }, window.lenisVersion = "1.0.19", e !== document.documentElement && e !== document.body || (e = window), this.options = {
      wrapper: e,
      content: n,
      wheelEventsTarget: r,
      smoothWheel: i,
      smoothTouch: s,
      syncTouch: o,
      syncTouchLerp: l,
      __iosNoInertiaSyncTouchLerp: a,
      touchInertiaMultiplier: u,
      duration: f,
      easing: h,
      lerp: d,
      infinite: c,
      gestureOrientation: g,
      orientation: p,
      touchMultiplier: D,
      wheelMultiplier: m,
      normalizeWheel: _,
      autoResize: v
    }, this.dimensions = new VS({
      wrapper: e,
      content: n,
      autoResize: v
    }), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = !1, this.isSmooth = i || s, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new US, this.emitter = new Hy, this.options.wrapper.addEventListener("scroll", this.onScroll, {
      passive: !1
    }), this.virtualScroll = new YS(r, {
      touchMultiplier: D,
      wheelMultiplier: m,
      normalizeWheel: _
    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
  }
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, {
      passive: !1
    }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.rootElement.classList.remove("lenis"), this.rootElement.classList.remove("lenis-smooth"), this.rootElement.classList.remove("lenis-scrolling"), this.rootElement.classList.remove("lenis-stopped")
  }
  on(e, n) {
    return this.emitter.on(e, n)
  }
  off(e, n) {
    var r;
    this.emitter.events[e] = (r = this.emitter.events[e]) == null ? void 0 : r.filter(i => n !== i)
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
    const n = e - (this.time || e);
    this.time = e, this.animate.advance(.001 * n)
  }
  scrollTo(e, {
    offset: n = 0,
    immediate: r = !1,
    lock: i = !1,
    duration: s = this.options.duration,
    easing: o = this.options.easing,
    lerp: l = !s && this.options.lerp,
    onComplete: a = null,
    force: u = !1,
    programmatic: f = !0
  } = {}) {
    if (!this.isStopped || u) {
      if (["top", "left", "start"].includes(e)) e = 0;
      else if (["bottom", "right", "end"].includes(e)) e = this.limit;
      else {
        var h;
        let d;
        if (typeof e == "string" ? d = document.querySelector(e) : (h = e) != null && h.nodeType && (d = e), d) {
          if (this.options.wrapper !== window) {
            const p = this.options.wrapper.getBoundingClientRect();
            n -= this.isHorizontal ? p.left : p.top
          }
          const c = d.getBoundingClientRect();
          e = (this.isHorizontal ? c.left : c.top) + this.animatedScroll
        }
      }
      if (typeof e == "number") {
        if (e += n, e = Math.round(e), this.options.infinite ? f && (this.targetScroll = this.animatedScroll = this.scroll) : e = Pu(0, e, this.limit), r) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.emit(), void(a == null || a());
        if (!f) {
          if (e === this.targetScroll) return;
          this.targetScroll = e
        }
        this.animate.fromTo(this.animatedScroll, e, {
          duration: s,
          easing: o,
          lerp: l,
          onUpdate: (d, {
            completed: c
          }) => {
            i && (this.isLocked = !0), this.isScrolling = !0, this.velocity = d - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = d, this.setScroll(this.scroll), f && (this.targetScroll = d), c && (i && (this.isLocked = !1), requestAnimationFrame(() => {
              this.isScrolling = !1
            }), this.velocity = 0, a == null || a()), this.emit()
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
    this.__isSmooth !== e && (this.rootElement.classList.toggle("lenis-smooth", e), this.__isSmooth = e)
  }
  get isScrolling() {
    return this.__isScrolling
  }
  set isScrolling(e) {
    this.__isScrolling !== e && (this.rootElement.classList.toggle("lenis-scrolling", e), this.__isScrolling = e)
  }
  get isStopped() {
    return this.__isStopped
  }
  set isStopped(e) {
    this.__isStopped !== e && (this.rootElement.classList.toggle("lenis-stopped", e), this.__isStopped = e)
  }
}
const KS = () => {
  Nn.scrollLenis = new XS({
    duration: 1.2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: !0
  }), Nn.scrollLenis.on("scroll", ke.update), Wl.ticker.add(t => {
    Nn.scrollLenis.raf(t * 1e3)
  }), Wl.ticker.lagSmoothing(0)
};

function qS(t) {
  t = document.querySelectorAll(t)[0] || window, (t === document.body || t === document.documentElement) && (t = window);
  let e = 0,
    n, r, i = !0,
    s = t === window,
    o = s ? document.scrollingElement : t,
    l = window.navigator.userAgent + "",
    a = s ? () => o.scrollHeight - window.innerHeight : () => o.scrollHeight - o.clientHeight,
    u = (p, g) => t.addEventListener(p, g, {
      passive: !1
    }),
    f = () => {
      o.style.overflowY = "auto", r = !1
    },
    h = () => {
      r = !0, o.style.overflowY = "hidden", !i && o.scrollTop < 1 ? o.scrollTop = 1 : o.scrollTop = a() - 1, setTimeout(f, 1)
    },
    d = p => {
      let g = p.changedTouches ? p.changedTouches[0] : p,
        D = g.pageY <= n;
      (!D && o.scrollTop <= 1 || D && o.scrollTop >= a() - 1) && p.type === "touchmove" ? p.preventDefault() : n = g.pageY
    },
    c = p => {
      if (!r) {
        let g = o.scrollTop;
        i = g > e, (!i && g < 1 || i && g >= a() - 1) && (p.preventDefault(), h()), e = g
      }
    };
  "ontouchend" in document && l.match(/Version\/[\d\.]+.*Safari/) && (u("scroll", c), u("touchstart", d), u("touchmove", d)), o.style.overscrollBehavior = "none"
}
const Jr = t => (Lu("data-v-2b22b952"), t = t(), Nu(), t),
  GS = {
    class: "page"
  },
  QS = {
    class: "page__content"
  },
  JS = Jr(() => Oe("div", {
    class: "text-big mobile-hidden"
  }, "+", -1)),
  ZS = Jr(() => Oe("div", {
    class: "text-big mobile-footer"
  }, "404", -1)),
  eP = Jr(() => Oe("div", {
    class: "text-big text-fade"
  }, "page", -1)),
  tP = Jr(() => Oe("div", null, null, -1)),
  nP = Jr(() => Oe("div", null, null, -1)),
  rP = Jr(() => Oe("div", {
    class: "text-big text-fade"
  }, "not", -1)),
  iP = Jr(() => Oe("div", null, null, -1)),
  sP = {
    class: "description-link"
  },
  oP = Jr(() => Oe("p", {
    class: "description"
  }, "Seems like we couldn’t find that page, here’s your way back to the homepage.", -1)),
  lP = Jr(() => Oe("div", {
    class: "text-big text-fade"
  }, "found", -1)),
  aP = nr({
    __name: "error",
    async setup(t) {
      let e, n;
      const {
        data: r
      } = ([e, n] = pv(() => OT("parts", () => $fetch("/api/parts"))), e = await e, n(), e), i = Uu();
      return _o(() => {
        KS(), window.innerWidth > 1024 && qS()
      }), (s, o) => {
        var d, c, p, g, D, m, _, v;
        const l = yS,
          a = FS,
          u = HS,
          f = jS,
          h = pd;
        return Jt(), Xl("div", GS, [Ve(l, {
          class: "page__header-fixed",
          phone: (d = Be(r)) == null ? void 0 : d.contact
        }, null, 8, ["phone"]), Ve(a, {
          class: "page__header",
          header_title1: (c = Be(r)) == null ? void 0 : c.header_title1,
          header_title2: (p = Be(r)) == null ? void 0 : p.header_title2,
          city: ((g = Be(r)) == null ? void 0 : g.header_time_name_city) ?? "",
          city_abbr: ((D = Be(r)) == null ? void 0 : D.city_abbr) ?? "",
          timezone: ((m = Be(r)) == null ? void 0 : m.timezone) ?? 0
        }, null, 8, ["header_title1", "header_title2", "city", "city_abbr", "timezone"]), Be(i).name !== "works-slug" ? (Jt(), Br(u, {
          key: 0,
          phone: (_ = Be(r)) == null ? void 0 : _.contact,
          mail: (v = Be(r)) == null ? void 0 : v.mail_to
        }, null, 8, ["phone", "mail"])) : W_("", !0), Ve(f), Oe("div", QS, [JS, ZS, eP, tP, nP, rP, iP, Oe("div", sP, [oP, Ve(h, {
          to: "/",
          class: "link hover-fadein"
        }, {
          default: $r(() => [cr("Back to Homepage")]),
          _: 1
        })]), lP])])
      }
    }
  });
const uP = yo(aP, [
    ["__scopeId", "data-v-2b22b952"]
  ]),
  cP = {
    __name: "nuxt-root",
    setup(t) {
      const e = () => null,
        n = nt(),
        r = n.deferHydration(),
        i = !1;
      es(ql, Uu()), n.hooks.callHookWith(l => l.map(a => a()), "vue:setup");
      const s = Vu();
      E_((l, a, u) => {
        if (n.hooks.callHook("vue:error", l, a, u).catch(f => console.error("[nuxt] Error in `vue:error` hook", f)), Wx(l) && (l.fatal || l.unhandled)) return n.runWithContext(() => Rs(l)), !1
      });
      const {
        islandContext: o
      } = !1;
      return (l, a) => (Jt(), Br(vh, {
        onResolve: Be(r)
      }, {
        default: $r(() => [Be(s) ? (Jt(), Br(Be(uP), {
          key: 0,
          error: Be(s)
        }, null, 8, ["error"])) : Be(o) ? (Jt(), Br(Be(e), {
          key: 1,
          context: Be(o)
        }, null, 8, ["context"])) : Be(i) ? (Jt(), Br(fv(Be(i)), {
          key: 2
        })) : (Jt(), Br(Be(cS), {
          key: 3
        }))]),
        _: 1
      }, 8, ["onResolve"]))
    }
  },
  Bg = cP;
globalThis.$fetch || (globalThis.$fetch = ab.create({
  baseURL: cb()
}));
let Ig;
{
  let t;
  Ig = async function() {
    var s, o;
    if (t) return t;
    const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((o = document.getElementById("__NUXT_DATA__")) == null ? void 0 : o.dataset.ssr) === "true") ? y1(Bg) : m1(Bg),
      i = wb({
        vueApp: r
      });
    try {
      await Eb(i, QT)
    } catch (l) {
      await i.callHook("app:error", l), i.payload.error = i.payload.error || l
    }
    try {
      await i.hooks.callHook("app:created", r), await i.hooks.callHook("app:beforeMount", r), r.mount("#" + Px), await i.hooks.callHook("app:mounted", r), await ms()
    } catch (l) {
      await i.callHook("app:error", l), i.payload.error = i.payload.error || l
    }
    return r
  }, t = Ig().catch(e => {
    console.error("Error while mounting app:", e)
  })
}
export {
  fP as A, uh as B, mo as C, hP as D, gP as E, dn as F, Zt as G, Br as H, Wl as I, dd as J, Za as K, W_ as L, pd as M, Uu as N, ah as O, JD as P, mP as Q, uu as R, ke as S, _P as T, Zo as U, KS as V, qS as W, HS as X, jS as Y, yS as _, Ji as a, Xl as b, Yu as c, nr as d, Ve as e, $r as f, Ln as g, Be as h, Oe as i, dP as j, pP as k, OT as l, Nu as m, Nn as n, Jt as o, Lu as p, ms as q, rn as r, FS as s, $i as t, yP as u, yo as v, pv as w, _o as x, hv as y, cr as z
};