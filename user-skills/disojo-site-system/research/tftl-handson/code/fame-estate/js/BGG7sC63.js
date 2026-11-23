/* https://fame-estate.com/_nuxt/BGG7sC63.js */
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./C3DBThoh.js", "./Cnghhg3X.js", "./D_ypvc1i.js", "./index.CUu1FVHU.css", "./TGpkc6jb.js", "./error-404.C3V-3Mc4.css", "./CXEzZafD.js", "./error-500.dGVH929u.css"]))) => i.map(i => d[i]);
var Vb = Object.defineProperty;
var jb = (t, e, n) => e in t ? Vb(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n;
var It = (t, e, n) => jb(t, typeof e != "symbol" ? e + "" : e, n);
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Ch(t) {
  const e = Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return n => n in e
}
const Me = {},
  Ws = [],
  kr = () => {},
  Wb = () => !1,
  Va = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  wh = t => t.startsWith("onUpdate:"),
  ht = Object.assign,
  Th = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
  },
  Kb = Object.prototype.hasOwnProperty,
  Ie = (t, e) => Kb.call(t, e),
  oe = Array.isArray,
  Ks = t => wo(t) === "[object Map]",
  Co = t => wo(t) === "[object Set]",
  Id = t => wo(t) === "[object Date]",
  Yb = t => wo(t) === "[object RegExp]",
  he = t => typeof t == "function",
  Xe = t => typeof t == "string",
  Lr = t => typeof t == "symbol",
  je = t => t !== null && typeof t == "object",
  Sh = t => (je(t) || he(t)) && he(t.then) && he(t.catch),
  Y_ = Object.prototype.toString,
  wo = t => Y_.call(t),
  zb = t => wo(t).slice(8, -1),
  z_ = t => wo(t) === "[object Object]",
  xh = t => Xe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Ys = Ch(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Pu = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
  },
  Gb = /-(\w)/g,
  Fn = Pu(t => t.replace(Gb, (e, n) => n ? n.toUpperCase() : "")),
  Xb = /\B([A-Z])/g,
  Li = Pu(t => t.replace(Xb, "-$1").toLowerCase()),
  Ru = Pu(t => t.charAt(0).toUpperCase() + t.slice(1)),
  hc = Pu(t => t ? `on${Ru(t)}` : ""),
  dn = (t, e) => !Object.is(t, e),
  zs = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e)
  },
  G_ = (t, e, n, r = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n
    })
  },
  Yl = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
  },
  X_ = t => {
    const e = Xe(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
  };
let Bd;
const Lu = () => Bd || (Bd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ou(t) {
  if (oe(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = Xe(r) ? Zb(r) : Ou(r);
      if (i)
        for (const s in i) e[s] = i[s]
    }
    return e
  } else if (Xe(t) || je(t)) return t
}
const qb = /;(?![^(]*\))/g,
  Jb = /:([^]+)/,
  Qb = /\/\*[^]*?\*\//g;

function Zb(t) {
  const e = {};
  return t.replace(Qb, "").split(qb).forEach(n => {
    if (n) {
      const r = n.split(Jb);
      r.length > 1 && (e[r[0].trim()] = r[1].trim())
    }
  }), e
}

function Fu(t) {
  let e = "";
  if (Xe(t)) e = t;
  else if (oe(t))
    for (let n = 0; n < t.length; n++) {
      const r = Fu(t[n]);
      r && (e += r + " ")
    } else if (je(t))
      for (const n in t) t[n] && (e += n + " ");
  return e.trim()
}

function ev(t) {
  if (!t) return null;
  let {
    class: e,
    style: n
  } = t;
  return e && !Xe(e) && (t.class = Fu(e)), n && (t.style = Ou(n)), t
}
const tv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  nv = Ch(tv);

function q_(t) {
  return !!t || t === ""
}

function rv(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++) n = gs(t[r], e[r]);
  return n
}

function gs(t, e) {
  if (t === e) return !0;
  let n = Id(t),
    r = Id(e);
  if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Lr(t), r = Lr(e), n || r) return t === e;
  if (n = oe(t), r = oe(e), n || r) return n && r ? rv(t, e) : !1;
  if (n = je(t), r = je(e), n || r) {
    if (!n || !r) return !1;
    const i = Object.keys(t).length,
      s = Object.keys(e).length;
    if (i !== s) return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o),
        l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !gs(t[o], e[o])) return !1
    }
  }
  return String(t) === String(e)
}

function kh(t, e) {
  return t.findIndex(n => gs(n, e))
}
const J_ = t => !!(t && t.__v_isRef === !0),
  iv = t => Xe(t) ? t : t == null ? "" : oe(t) || je(t) && (t.toString === Y_ || !he(t.toString)) ? J_(t) ? iv(t.value) : JSON.stringify(t, Q_, 2) : String(t),
  Q_ = (t, e) => J_(e) ? Q_(t, e.value) : Ks(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, i], s) => (n[dc(r, s) + " =>"] = i, n), {})
  } : Co(e) ? {
    [`Set(${e.size})`]: [...e.values()].map(n => dc(n))
  } : Lr(e) ? dc(e) : je(e) && !oe(e) && !z_(e) ? String(e) : e,
  dc = (t, e = "") => {
    var n;
    return Lr(t) ? `Symbol(${(n=t.description)!=null?n:e})` : t
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Qt;
class Z_ {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Qt, !e && Qt && (this.index = (Qt.scopes || (Qt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume()
    }
  }
  run(e) {
    if (this._active) {
      const n = Qt;
      try {
        return Qt = this, e()
      } finally {
        Qt = n
      }
    }
  }
  on() {
    Qt = this
  }
  off() {
    Qt = this.parent
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
      }
      this.parent = void 0
    }
  }
}

function Ah(t) {
  return new Z_(t)
}

function Mu() {
  return Qt
}

function tf(t, e = !1) {
  Qt && Qt.cleanups.push(t)
}
let Ye;
const pc = new WeakSet;
class em {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qt && Qt.active && Qt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pc.has(this) && (pc.delete(this), this.trigger()))
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || nm(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Hd(this), rm(this);
    const e = Ye,
      n = lr;
    Ye = this, lr = !0;
    try {
      return this.fn()
    } finally {
      im(this), Ye = e, lr = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) Lh(e);
      this.deps = this.depsTail = void 0, Hd(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? pc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    nf(this) && this.run()
  }
  get dirty() {
    return nf(this)
  }
}
let tm = 0,
  Xo, qo;

function nm(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = qo, qo = t;
    return
  }
  t.next = Xo, Xo = t
}

function Ph() {
  tm++
}

function Rh() {
  if (--tm > 0) return;
  if (qo) {
    let e = qo;
    for (qo = void 0; e;) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n
    }
  }
  let t;
  for (; Xo;) {
    let e = Xo;
    for (Xo = void 0; e;) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1) try {
        e.trigger()
      } catch (r) {
        t || (t = r)
      }
      e = n
    }
  }
  if (t) throw t
}

function rm(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e
}

function im(t) {
  let e, n = t.depsTail,
    r = n;
  for (; r;) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Lh(r), sv(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i
  }
  t.deps = e, t.depsTail = n
}

function nf(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (sm(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty
}

function sm(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Da)) return;
  t.globalVersion = Da;
  const e = t.dep;
  if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !nf(t)) {
    t.flags &= -3;
    return
  }
  const n = Ye,
    r = lr;
  Ye = t, lr = !0;
  try {
    rm(t);
    const i = t.fn(t._value);
    (e.version === 0 || dn(i, t._value)) && (t._value = i, e.version++)
  } catch (i) {
    throw e.version++, i
  } finally {
    Ye = n, lr = r, im(t), t.flags &= -3
  }
}

function Lh(t, e = !1) {
  const {
    dep: n,
    prevSub: r,
    nextSub: i
  } = t;
  if (r && (r.nextSub = i, t.prevSub = void 0), i && (i.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) Lh(s, !0)
  }!e && !--n.sc && n.map && n.map.delete(n.key)
}

function sv(t) {
  const {
    prevDep: e,
    nextDep: n
  } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0)
}
let lr = !0;
const om = [];

function Oi() {
  om.push(lr), lr = !1
}

function Fi() {
  const t = om.pop();
  lr = t === void 0 ? !0 : t
}

function Hd(t) {
  const {
    cleanup: e
  } = t;
  if (t.cleanup = void 0, e) {
    const n = Ye;
    Ye = void 0;
    try {
      e()
    } finally {
      Ye = n
    }
  }
}
let Da = 0;
class ov {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class Nu {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
  }
  track(e) {
    if (!Ye || !lr || Ye === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ye) n = this.activeLink = new ov(Ye, this), Ye.deps ? (n.prevDep = Ye.depsTail, Ye.depsTail.nextDep = n, Ye.depsTail = n) : Ye.deps = Ye.depsTail = n, am(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ye.depsTail, n.nextDep = void 0, Ye.depsTail.nextDep = n, Ye.depsTail = n, Ye.deps === n && (Ye.deps = r)
    }
    return n
  }
  trigger(e) {
    this.version++, Da++, this.notify(e)
  }
  notify(e) {
    Ph();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Rh()
    }
  }
}

function am(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep) am(r)
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t
  }
}
const zl = new WeakMap,
  rs = Symbol(""),
  rf = Symbol(""),
  ba = Symbol("");

function Ut(t, e, n) {
  if (lr && Ye) {
    let r = zl.get(t);
    r || zl.set(t, r = new Map);
    let i = r.get(n);
    i || (r.set(n, i = new Nu), i.map = r, i.key = n), i.track()
  }
}

function Wr(t, e, n, r, i, s) {
  const o = zl.get(t);
  if (!o) {
    Da++;
    return
  }
  const a = l => {
    l && l.trigger()
  };
  if (Ph(), e === "clear") o.forEach(a);
  else {
    const l = oe(t),
      u = l && xh(n);
    if (l && n === "length") {
      const c = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === ba || !Lr(d) && d >= c) && a(f)
      })
    } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), u && a(o.get(ba)), e) {
      case "add":
        l ? u && a(o.get("length")) : (a(o.get(rs)), Ks(t) && a(o.get(rf)));
        break;
      case "delete":
        l || (a(o.get(rs)), Ks(t) && a(o.get(rf)));
        break;
      case "set":
        Ks(t) && a(o.get(rs));
        break
    }
  }
  Rh()
}

function av(t, e) {
  const n = zl.get(t);
  return n && n.get(e)
}

function Ts(t) {
  const e = Oe(t);
  return e === t ? e : (Ut(e, "iterate", ba), Kn(t) ? e : e.map(Vt))
}

function $u(t) {
  return Ut(t = Oe(t), "iterate", ba), t
}
const lv = {
  __proto__: null,
  [Symbol.iterator]() {
    return gc(this, Symbol.iterator, Vt)
  },
  concat(...t) {
    return Ts(this).concat(...t.map(e => oe(e) ? Ts(e) : e))
  },
  entries() {
    return gc(this, "entries", t => (t[1] = Vt(t[1]), t))
  },
  every(t, e) {
    return $r(this, "every", t, e, void 0, arguments)
  },
  filter(t, e) {
    return $r(this, "filter", t, e, n => n.map(Vt), arguments)
  },
  find(t, e) {
    return $r(this, "find", t, e, Vt, arguments)
  },
  findIndex(t, e) {
    return $r(this, "findIndex", t, e, void 0, arguments)
  },
  findLast(t, e) {
    return $r(this, "findLast", t, e, Vt, arguments)
  },
  findLastIndex(t, e) {
    return $r(this, "findLastIndex", t, e, void 0, arguments)
  },
  forEach(t, e) {
    return $r(this, "forEach", t, e, void 0, arguments)
  },
  includes(...t) {
    return _c(this, "includes", t)
  },
  indexOf(...t) {
    return _c(this, "indexOf", t)
  },
  join(t) {
    return Ts(this).join(t)
  },
  lastIndexOf(...t) {
    return _c(this, "lastIndexOf", t)
  },
  map(t, e) {
    return $r(this, "map", t, e, void 0, arguments)
  },
  pop() {
    return Ro(this, "pop")
  },
  push(...t) {
    return Ro(this, "push", t)
  },
  reduce(t, ...e) {
    return Ud(this, "reduce", t, e)
  },
  reduceRight(t, ...e) {
    return Ud(this, "reduceRight", t, e)
  },
  shift() {
    return Ro(this, "shift")
  },
  some(t, e) {
    return $r(this, "some", t, e, void 0, arguments)
  },
  splice(...t) {
    return Ro(this, "splice", t)
  },
  toReversed() {
    return Ts(this).toReversed()
  },
  toSorted(t) {
    return Ts(this).toSorted(t)
  },
  toSpliced(...t) {
    return Ts(this).toSpliced(...t)
  },
  unshift(...t) {
    return Ro(this, "unshift", t)
  },
  values() {
    return gc(this, "values", Vt)
  }
};

function gc(t, e, n) {
  const r = $u(t),
    i = r[e]();
  return r !== t && !Kn(t) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.value && (s.value = n(s.value)), s
  }), i
}
const uv = Array.prototype;

function $r(t, e, n, r, i, s) {
  const o = $u(t),
    a = o !== t && !Kn(t),
    l = o[e];
  if (l !== uv[e]) {
    const f = l.apply(t, s);
    return a ? Vt(f) : f
  }
  let u = n;
  o !== t && (a ? u = function(f, d) {
    return n.call(this, Vt(f), d, t)
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, t)
  }));
  const c = l.call(o, u, r);
  return a && i ? i(c) : c
}

function Ud(t, e, n, r) {
  const i = $u(t);
  let s = n;
  return i !== t && (Kn(t) ? n.length > 3 && (s = function(o, a, l) {
    return n.call(this, o, a, l, t)
  }) : s = function(o, a, l) {
    return n.call(this, o, Vt(a), l, t)
  }), i[e](s, ...r)
}

function _c(t, e, n) {
  const r = Oe(t);
  Ut(r, "iterate", ba);
  const i = r[e](...n);
  return (i === -1 || i === !1) && Mh(n[0]) ? (n[0] = Oe(n[0]), r[e](...n)) : i
}

function Ro(t, e, n = []) {
  Oi(), Ph();
  const r = Oe(t)[e].apply(t, n);
  return Rh(), Fi(), r
}
const cv = Ch("__proto__,__v_isRef,__isVue"),
  lm = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(Lr));

function fv(t) {
  Lr(t) || (t = String(t));
  const e = Oe(this);
  return Ut(e, "has", t), e.hasOwnProperty(t)
}
class um {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n
  }
  get(e, n, r) {
    if (n === "__v_skip") return e.__v_skip;
    const i = this._isReadonly,
      s = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw") return r === (i ? s ? vv : dm : s ? hm : fm).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const o = oe(e);
    if (!i) {
      let l;
      if (o && (l = lv[n])) return l;
      if (n === "hasOwnProperty") return fv
    }
    const a = Reflect.get(e, n, at(e) ? e : r);
    return (Lr(n) ? lm.has(n) : cv(n)) || (i || Ut(e, "get", n), s) ? a : at(a) ? o && xh(n) ? a : a.value : je(a) ? i ? pm(a) : Mi(a) : a
  }
}
class cm extends um {
  constructor(e = !1) {
    super(!1, e)
  }
  set(e, n, r, i) {
    let s = e[n];
    if (!this._isShallow) {
      const l = xi(s);
      if (!Kn(r) && !xi(r) && (s = Oe(s), r = Oe(r)), !oe(e) && at(s) && !at(r)) return l ? !1 : (s.value = r, !0)
    }
    const o = oe(e) && xh(n) ? Number(n) < e.length : Ie(e, n),
      a = Reflect.set(e, n, r, at(e) ? e : i);
    return e === Oe(i) && (o ? dn(r, s) && Wr(e, "set", n, r) : Wr(e, "add", n, r)), a
  }
  deleteProperty(e, n) {
    const r = Ie(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && r && Wr(e, "delete", n, void 0), i
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Lr(n) || !lm.has(n)) && Ut(e, "has", n), r
  }
  ownKeys(e) {
    return Ut(e, "iterate", oe(e) ? "length" : rs), Reflect.ownKeys(e)
  }
}
class hv extends um {
  constructor(e = !1) {
    super(!0, e)
  }
  set(e, n) {
    return !0
  }
  deleteProperty(e, n) {
    return !0
  }
}
const dv = new cm,
  pv = new hv,
  gv = new cm(!0);
const sf = t => t,
  qa = t => Reflect.getPrototypeOf(t);

function _v(t, e, n) {
  return function(...r) {
    const i = this.__v_raw,
      s = Oe(i),
      o = Ks(s),
      a = t === "entries" || t === Symbol.iterator && o,
      l = t === "keys" && o,
      u = i[t](...r),
      c = n ? sf : e ? of : Vt;
    return !e && Ut(s, "iterate", l ? rf : rs), {
      next() {
        const {
          value: f,
          done: d
        } = u.next();
        return d ? {
          value: f,
          done: d
        } : {
          value: a ? [c(f[0]), c(f[1])] : c(f),
          done: d
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
  }
}

function Ja(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this
  }
}

function mv(t, e) {
  const n = {
    get(i) {
      const s = this.__v_raw,
        o = Oe(s),
        a = Oe(i);
      t || (dn(i, a) && Ut(o, "get", i), Ut(o, "get", a));
      const {
        has: l
      } = qa(o), u = e ? sf : t ? of : Vt;
      if (l.call(o, i)) return u(s.get(i));
      if (l.call(o, a)) return u(s.get(a));
      s !== o && s.get(i)
    },
    get size() {
      const i = this.__v_raw;
      return !t && Ut(Oe(i), "iterate", rs), Reflect.get(i, "size", i)
    },
    has(i) {
      const s = this.__v_raw,
        o = Oe(s),
        a = Oe(i);
      return t || (dn(i, a) && Ut(o, "has", i), Ut(o, "has", a)), i === a ? s.has(i) : s.has(i) || s.has(a)
    },
    forEach(i, s) {
      const o = this,
        a = o.__v_raw,
        l = Oe(a),
        u = e ? sf : t ? of : Vt;
      return !t && Ut(l, "iterate", rs), a.forEach((c, f) => i.call(s, u(c), u(f), o))
    }
  };
  return ht(n, t ? {
    add: Ja("add"),
    set: Ja("set"),
    delete: Ja("delete"),
    clear: Ja("clear")
  } : {
    add(i) {
      !e && !Kn(i) && !xi(i) && (i = Oe(i));
      const s = Oe(this);
      return qa(s).has.call(s, i) || (s.add(i), Wr(s, "add", i, i)), this
    },
    set(i, s) {
      !e && !Kn(s) && !xi(s) && (s = Oe(s));
      const o = Oe(this),
        {
          has: a,
          get: l
        } = qa(o);
      let u = a.call(o, i);
      u || (i = Oe(i), u = a.call(o, i));
      const c = l.call(o, i);
      return o.set(i, s), u ? dn(s, c) && Wr(o, "set", i, s) : Wr(o, "add", i, s), this
    },
    delete(i) {
      const s = Oe(this),
        {
          has: o,
          get: a
        } = qa(s);
      let l = o.call(s, i);
      l || (i = Oe(i), l = o.call(s, i)), a && a.call(s, i);
      const u = s.delete(i);
      return l && Wr(s, "delete", i, void 0), u
    },
    clear() {
      const i = Oe(this),
        s = i.size !== 0,
        o = i.clear();
      return s && Wr(i, "clear", void 0, void 0), o
    }
  }), ["keys", "values", "entries", Symbol.iterator].forEach(i => {
    n[i] = _v(i, t, e)
  }), n
}

function Oh(t, e) {
  const n = mv(t, e);
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(Ie(n, i) && i in r ? n : r, i, s)
}
const yv = {
    get: Oh(!1, !1)
  },
  Dv = {
    get: Oh(!1, !0)
  },
  bv = {
    get: Oh(!0, !1)
  };
const fm = new WeakMap,
  hm = new WeakMap,
  dm = new WeakMap,
  vv = new WeakMap;

function Ev(t) {
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

function Cv(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ev(zb(t))
}

function Mi(t) {
  return xi(t) ? t : Fh(t, !1, dv, yv, fm)
}

function Gr(t) {
  return Fh(t, !1, gv, Dv, hm)
}

function pm(t) {
  return Fh(t, !0, pv, bv, dm)
}

function Fh(t, e, n, r, i) {
  if (!je(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
  const s = i.get(t);
  if (s) return s;
  const o = Cv(t);
  if (o === 0) return t;
  const a = new Proxy(t, o === 2 ? r : n);
  return i.set(t, a), a
}

function is(t) {
  return xi(t) ? is(t.__v_raw) : !!(t && t.__v_isReactive)
}

function xi(t) {
  return !!(t && t.__v_isReadonly)
}

function Kn(t) {
  return !!(t && t.__v_isShallow)
}

function Mh(t) {
  return t ? !!t.__v_raw : !1
}

function Oe(t) {
  const e = t && t.__v_raw;
  return e ? Oe(e) : t
}

function wv(t) {
  return !Ie(t, "__v_skip") && Object.isExtensible(t) && G_(t, "__v_skip", !0), t
}
const Vt = t => je(t) ? Mi(t) : t,
  of = t => je(t) ? pm(t) : t;

function at(t) {
  return t ? t.__v_isRef === !0 : !1
}

function _n(t) {
  return gm(t, !1)
}

function io(t) {
  return gm(t, !0)
}

function gm(t, e) {
  return at(t) ? t : new Tv(t, e)
}
class Tv {
  constructor(e, n) {
    this.dep = new Nu, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : Oe(e), this._value = n ? e : Vt(e), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(e) {
    const n = this._rawValue,
      r = this.__v_isShallow || Kn(e) || xi(e);
    e = r ? e : Oe(e), dn(e, n) && (this._rawValue = e, this._value = r ? e : Vt(e), this.dep.trigger())
  }
}

function Pe(t) {
  return at(t) ? t.value : t
}
const Sv = {
  get: (t, e, n) => e === "__v_raw" ? t : Pe(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return at(i) && !at(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r)
  }
};

function _m(t) {
  return is(t) ? t : new Proxy(t, Sv)
}
class xv {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Nu,
      {
        get: r,
        set: i
      } = e(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = i
  }
  get value() {
    return this._value = this._get()
  }
  set value(e) {
    this._set(e)
  }
}

function mm(t) {
  return new xv(t)
}
class kv {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0
  }
  get value() {
    const e = this._object[this._key];
    return this._value = e === void 0 ? this._defaultValue : e
  }
  set value(e) {
    this._object[this._key] = e
  }
  get dep() {
    return av(Oe(this._object), this._key)
  }
}
class Av {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
  }
  get value() {
    return this._value = this._getter()
  }
}

function ym(t, e, n) {
  return at(t) ? t : he(t) ? new Av(t) : je(t) && arguments.length > 1 ? Pv(t, e, n) : _n(t)
}

function Pv(t, e, n) {
  const r = t[e];
  return at(r) ? r : new kv(t, e, n)
}
class Rv {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Nu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Da - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Ye !== this) return nm(this, !0), !0
  }
  get value() {
    const e = this.dep.track();
    return sm(this), e && (e.version = this.dep.version), this._value
  }
  set value(e) {
    this.setter && this.setter(e)
  }
}

function Lv(t, e, n = !1) {
  let r, i;
  return he(t) ? r = t : (r = t.get, i = t.set), new Rv(r, i, n)
}
const Qa = {},
  Gl = new WeakMap;
let Ji;

function Ov(t, e = !1, n = Ji) {
  if (n) {
    let r = Gl.get(n);
    r || Gl.set(n, r = []), r.push(t)
  }
}

function Fv(t, e, n = Me) {
  const {
    immediate: r,
    deep: i,
    once: s,
    scheduler: o,
    augmentJob: a,
    call: l
  } = n, u = m => i ? m : Kn(m) || i === !1 || i === 0 ? Kr(m, 1) : Kr(m);
  let c, f, d, h, g = !1,
    p = !1;
  if (at(t) ? (f = () => t.value, g = Kn(t)) : is(t) ? (f = () => u(t), g = !0) : oe(t) ? (p = !0, g = t.some(m => is(m) || Kn(m)), f = () => t.map(m => {
      if (at(m)) return m.value;
      if (is(m)) return u(m);
      if (he(m)) return l ? l(m, 2) : m()
    })) : he(t) ? e ? f = l ? () => l(t, 2) : t : f = () => {
      if (d) {
        Oi();
        try {
          d()
        } finally {
          Fi()
        }
      }
      const m = Ji;
      Ji = c;
      try {
        return l ? l(t, 3, [h]) : t(h)
      } finally {
        Ji = m
      }
    } : f = kr, e && i) {
    const m = f,
      v = i === !0 ? 1 / 0 : i;
    f = () => Kr(m(), v)
  }
  const b = Mu(),
    y = () => {
      c.stop(), b && b.active && Th(b.effects, c)
    };
  if (s && e) {
    const m = e;
    e = (...v) => {
      m(...v), y()
    }
  }
  let D = p ? new Array(t.length).fill(Qa) : Qa;
  const _ = m => {
    if (!(!(c.flags & 1) || !c.dirty && !m))
      if (e) {
        const v = c.run();
        if (i || g || (p ? v.some((C, E) => dn(C, D[E])) : dn(v, D))) {
          d && d();
          const C = Ji;
          Ji = c;
          try {
            const E = [v, D === Qa ? void 0 : p && D[0] === Qa ? [] : D, h];
            l ? l(e, 3, E) : e(...E), D = v
          } finally {
            Ji = C
          }
        }
      } else c.run()
  };
  return a && a(_), c = new em(f), c.scheduler = o ? () => o(_, !1) : _, h = m => Ov(m, !1, c), d = c.onStop = () => {
    const m = Gl.get(c);
    if (m) {
      if (l) l(m, 4);
      else
        for (const v of m) v();
      Gl.delete(c)
    }
  }, e ? r ? _(!0) : D = c.run() : o ? o(_.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y
}

function Kr(t, e = 1 / 0, n) {
  if (e <= 0 || !je(t) || t.__v_skip || (n = n || new Set, n.has(t))) return t;
  if (n.add(t), e--, at(t)) Kr(t.value, e, n);
  else if (oe(t))
    for (let r = 0; r < t.length; r++) Kr(t[r], e, n);
  else if (Co(t) || Ks(t)) t.forEach(r => {
    Kr(r, e, n)
  });
  else if (z_(t)) {
    for (const r in t) Kr(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, r) && Kr(t[r], e, n)
  }
  return t
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function ja(t, e, n, r) {
  try {
    return r ? t(...r) : t()
  } catch (i) {
    To(i, e, n)
  }
}

function ur(t, e, n, r) {
  if (he(t)) {
    const i = ja(t, e, n, r);
    return i && Sh(i) && i.catch(s => {
      To(s, e, n)
    }), i
  }
  if (oe(t)) {
    const i = [];
    for (let s = 0; s < t.length; s++) i.push(ur(t[s], e, n, r));
    return i
  }
}

function To(t, e, n, r = !0) {
  const i = e ? e.vnode : null,
    {
      errorHandler: s,
      throwUnhandledErrorInProduction: o
    } = e && e.appContext.config || Me;
  if (e) {
    let a = e.parent;
    const l = e.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a;) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](t, l, u) === !1) return
      }
      a = a.parent
    }
    if (s) {
      Oi(), ja(s, null, 10, [t, l, u]), Fi();
      return
    }
  }
  Mv(t, n, i, r, o)
}

function Mv(t, e, n, r = !0, i = !1) {
  if (i) throw t;
  console.error(t)
}
const tn = [];
let Dr = -1;
const Gs = [];
let ci = null,
  Ls = 0;
const Dm = Promise.resolve();
let Xl = null;

function Es(t) {
  const e = Xl || Dm;
  return t ? e.then(this ? t.bind(this) : t) : e
}

function Nv(t) {
  let e = Dr + 1,
    n = tn.length;
  for (; e < n;) {
    const r = e + n >>> 1,
      i = tn[r],
      s = va(i);
    s < t || s === t && i.flags & 2 ? e = r + 1 : n = r
  }
  return e
}

function Nh(t) {
  if (!(t.flags & 1)) {
    const e = va(t),
      n = tn[tn.length - 1];
    !n || !(t.flags & 2) && e >= va(n) ? tn.push(t) : tn.splice(Nv(e), 0, t), t.flags |= 1, bm()
  }
}

function bm() {
  Xl || (Xl = Dm.then(vm))
}

function af(t) {
  oe(t) ? Gs.push(...t) : ci && t.id === -1 ? ci.splice(Ls + 1, 0, t) : t.flags & 1 || (Gs.push(t), t.flags |= 1), bm()
}

function Vd(t, e, n = Dr + 1) {
  for (; n < tn.length; n++) {
    const r = tn[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid) continue;
      tn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
    }
  }
}

function ql(t) {
  if (Gs.length) {
    const e = [...new Set(Gs)].sort((n, r) => va(n) - va(r));
    if (Gs.length = 0, ci) {
      ci.push(...e);
      return
    }
    for (ci = e, Ls = 0; Ls < ci.length; Ls++) {
      const n = ci[Ls];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
    }
    ci = null, Ls = 0
  }
}
const va = t => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;

function vm(t) {
  try {
    for (Dr = 0; Dr < tn.length; Dr++) {
      const e = tn[Dr];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), ja(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2))
    }
  } finally {
    for (; Dr < tn.length; Dr++) {
      const e = tn[Dr];
      e && (e.flags &= -2)
    }
    Dr = -1, tn.length = 0, ql(), Xl = null, (tn.length || Gs.length) && vm()
  }
}
let ln = null,
  Em = null;

function Jl(t) {
  const e = ln;
  return ln = t, Em = t && t.type.__scopeId || null, e
}

function Cm(t, e = ln, n) {
  if (!e || t._n) return t;
  const r = (...i) => {
    r._d && rp(-1);
    const s = Jl(e);
    let o;
    try {
      o = t(...i)
    } finally {
      Jl(s), r._d && rp(1)
    }
    return o
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function gL(t, e) {
  if (ln === null) return t;
  const n = ju(ln),
    r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, o, a, l = Me] = e[i];
    s && (he(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Kr(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }))
  }
  return t
}

function br(t, e, n, r) {
  const i = t.dirs,
    s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[r];
    l && (Oi(), ur(l, n, 8, [t.el, a, t, e]), Fi())
  }
}
const wm = Symbol("_vte"),
  Tm = t => t.__isTeleport,
  Jo = t => t && (t.disabled || t.disabled === ""),
  jd = t => t && (t.defer || t.defer === ""),
  Wd = t => typeof SVGElement < "u" && t instanceof SVGElement,
  Kd = t => typeof MathMLElement == "function" && t instanceof MathMLElement,
  lf = (t, e) => {
    const n = t && t.to;
    return Xe(n) ? e ? e(n) : null : n
  },
  Sm = {
    name: "Teleport",
    __isTeleport: !0,
    process(t, e, n, r, i, s, o, a, l, u) {
      const {
        mc: c,
        pc: f,
        pbc: d,
        o: {
          insert: h,
          querySelector: g,
          createText: p,
          createComment: b
        }
      } = u, y = Jo(e.props);
      let {
        shapeFlag: D,
        children: _,
        dynamicChildren: m
      } = e;
      if (t == null) {
        const v = e.el = p(""),
          C = e.anchor = p("");
        h(v, n, r), h(C, n, r);
        const E = (A, P) => {
            D & 16 && (i && i.isCE && (i.ce._teleportTarget = A), c(_, A, P, i, s, o, a, l))
          },
          R = () => {
            const A = e.target = lf(e.props, g),
              P = xm(A, e, p, h);
            A && (o !== "svg" && Wd(A) ? o = "svg" : o !== "mathml" && Kd(A) && (o = "mathml"), y || (E(A, P), Rl(e, !1)))
          };
        y && (E(n, C), Rl(e, !0)), jd(e.props) ? Et(() => {
          R(), e.el.__isMounted = !0
        }, s) : R()
      } else {
        if (jd(e.props) && !t.el.__isMounted) {
          Et(() => {
            Sm.process(t, e, n, r, i, s, o, a, l, u), delete t.el.__isMounted
          }, s);
          return
        }
        e.el = t.el, e.targetStart = t.targetStart;
        const v = e.anchor = t.anchor,
          C = e.target = t.target,
          E = e.targetAnchor = t.targetAnchor,
          R = Jo(t.props),
          A = R ? n : C,
          P = R ? v : E;
        if (o === "svg" || Wd(C) ? o = "svg" : (o === "mathml" || Kd(C)) && (o = "mathml"), m ? (d(t.dynamicChildren, m, A, i, s, o, a), Vh(t, e, !0)) : l || f(t, e, A, P, i, s, o, a, !1), y) R ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Za(e, n, v, u, 1);
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const V = e.target = lf(e.props, g);
          V && Za(e, V, null, u, 0)
        } else R && Za(e, C, E, u, 1);
        Rl(e, y)
      }
    },
    remove(t, e, n, {
      um: r,
      o: {
        remove: i
      }
    }, s) {
      const {
        shapeFlag: o,
        children: a,
        anchor: l,
        targetStart: u,
        targetAnchor: c,
        target: f,
        props: d
      } = t;
      if (f && (i(u), i(c)), s && i(l), o & 16) {
        const h = s || !Jo(d);
        for (let g = 0; g < a.length; g++) {
          const p = a[g];
          r(p, e, n, h, !!p.dynamicChildren)
        }
      }
    },
    move: Za,
    hydrate: $v
  };

function Za(t, e, n, {
  o: {
    insert: r
  },
  m: i
}, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const {
    el: o,
    anchor: a,
    shapeFlag: l,
    children: u,
    props: c
  } = t, f = s === 2;
  if (f && r(o, e, n), (!f || Jo(c)) && l & 16)
    for (let d = 0; d < u.length; d++) i(u[d], e, n, 2);
  f && r(a, e, n)
}

function $v(t, e, n, r, i, s, {
  o: {
    nextSibling: o,
    parentNode: a,
    querySelector: l,
    insert: u,
    createText: c
  }
}, f) {
  const d = e.target = lf(e.props, l);
  if (d) {
    const h = Jo(e.props),
      g = d._lpa || d.firstChild;
    if (e.shapeFlag & 16)
      if (h) e.anchor = f(o(t), e, a(t), n, r, i, s), e.targetStart = g, e.targetAnchor = g && o(g);
      else {
        e.anchor = o(t);
        let p = g;
        for (; p;) {
          if (p && p.nodeType === 8) {
            if (p.data === "teleport start anchor") e.targetStart = p;
            else if (p.data === "teleport anchor") {
              e.targetAnchor = p, d._lpa = e.targetAnchor && o(e.targetAnchor);
              break
            }
          }
          p = o(p)
        }
        e.targetAnchor || xm(d, e, c, u), f(g && o(g), e, d, n, r, i, s)
      } Rl(e, h)
  }
  return e.anchor && o(e.anchor)
}
const _L = Sm;

function Rl(t, e) {
  const n = t.ctx;
  if (n && n.ut) {
    let r, i;
    for (e ? (r = t.el, i = t.anchor) : (r = t.targetStart, i = t.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut()
  }
}

function xm(t, e, n, r) {
  const i = e.targetStart = n(""),
    s = e.targetAnchor = n("");
  return i[wm] = s, t && (r(i, t), r(s, t)), s
}
const fi = Symbol("_leaveCb"),
  el = Symbol("_enterCb");

function Iv() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return Bu(() => {
    t.isMounted = !0
  }), Ih(() => {
    t.isUnmounting = !0
  }), t
}
const $n = [Function, Array],
  km = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: $n,
    onEnter: $n,
    onAfterEnter: $n,
    onEnterCancelled: $n,
    onBeforeLeave: $n,
    onLeave: $n,
    onAfterLeave: $n,
    onLeaveCancelled: $n,
    onBeforeAppear: $n,
    onAppear: $n,
    onAfterAppear: $n,
    onAppearCancelled: $n
  },
  Am = t => {
    const e = t.subTree;
    return e.component ? Am(e.component) : e
  },
  Bv = {
    name: "BaseTransition",
    props: km,
    setup(t, {
      slots: e
    }) {
      const n = Ni(),
        r = Iv();
      return () => {
        const i = e.default && Lm(e.default(), !0);
        if (!i || !i.length) return;
        const s = Pm(i),
          o = Oe(t),
          {
            mode: a
          } = o;
        if (r.isLeaving) return mc(s);
        const l = Yd(s);
        if (!l) return mc(s);
        let u = uf(l, o, r, n, f => u = f);
        l.type !== Pt && so(l, u);
        let c = n.subTree && Yd(n.subTree);
        if (c && c.type !== Pt && !sr(l, c) && Am(n).type !== Pt) {
          let f = uf(c, o, r, n);
          if (so(c, f), a === "out-in" && l.type !== Pt) return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0
          }, mc(s);
          a === "in-out" && l.type !== Pt ? f.delayLeave = (d, h, g) => {
            const p = Rm(r, c);
            p[String(c.key)] = c, d[fi] = () => {
              h(), d[fi] = void 0, delete u.delayedLeave, c = void 0
            }, u.delayedLeave = () => {
              g(), delete u.delayedLeave, c = void 0
            }
          } : c = void 0
        } else c && (c = void 0);
        return s
      }
    }
  };

function Pm(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const n of t)
      if (n.type !== Pt) {
        e = n;
        break
      }
  }
  return e
}
const Hv = Bv;

function Rm(t, e) {
  const {
    leavingVNodes: n
  } = t;
  let r = n.get(e.type);
  return r || (r = Object.create(null), n.set(e.type, r)), r
}

function uf(t, e, n, r, i) {
  const {
    appear: s,
    mode: o,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: d,
    onLeave: h,
    onAfterLeave: g,
    onLeaveCancelled: p,
    onBeforeAppear: b,
    onAppear: y,
    onAfterAppear: D,
    onAppearCancelled: _
  } = e, m = String(t.key), v = Rm(n, t), C = (A, P) => {
    A && ur(A, r, 9, P)
  }, E = (A, P) => {
    const V = P[1];
    C(A, P), oe(A) ? A.every(O => O.length <= 1) && V() : A.length <= 1 && V()
  }, R = {
    mode: o,
    persisted: a,
    beforeEnter(A) {
      let P = l;
      if (!n.isMounted)
        if (s) P = b || l;
        else return;
      A[fi] && A[fi](!0);
      const V = v[m];
      V && sr(t, V) && V.el[fi] && V.el[fi](), C(P, [A])
    },
    enter(A) {
      let P = u,
        V = c,
        O = f;
      if (!n.isMounted)
        if (s) P = y || u, V = D || c, O = _ || f;
        else return;
      let Y = !1;
      const q = A[el] = Q => {
        Y || (Y = !0, Q ? C(O, [A]) : C(V, [A]), R.delayedLeave && R.delayedLeave(), A[el] = void 0)
      };
      P ? E(P, [A, q]) : q()
    },
    leave(A, P) {
      const V = String(t.key);
      if (A[el] && A[el](!0), n.isUnmounting) return P();
      C(d, [A]);
      let O = !1;
      const Y = A[fi] = q => {
        O || (O = !0, P(), q ? C(p, [A]) : C(g, [A]), A[fi] = void 0, v[V] === t && delete v[V])
      };
      v[V] = t, h ? E(h, [A, Y]) : Y()
    },
    clone(A) {
      const P = uf(A, e, n, r, i);
      return i && i(P), P
    }
  };
  return R
}

function mc(t) {
  if (Wa(t)) return t = ti(t), t.children = null, t
}

function Yd(t) {
  if (!Wa(t)) return Tm(t.type) && t.children ? Pm(t.children) : t;
  const {
    shapeFlag: e,
    children: n
  } = t;
  if (n) {
    if (e & 16) return n[0];
    if (e & 32 && he(n.default)) return n.default()
  }
}

function so(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, so(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function Lm(t, e = !1, n) {
  let r = [],
    i = 0;
  for (let s = 0; s < t.length; s++) {
    let o = t[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === nn ? (o.patchFlag & 128 && i++, r = r.concat(Lm(o.children, e, a))) : (e || o.type !== Pt) && r.push(a != null ? ti(o, {
      key: a
    }) : o)
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r
} /*! #__NO_SIDE_EFFECTS__ */
function ii(t, e) {
  return he(t) ? ht({
    name: t.name
  }, e, {
    setup: t
  }) : t
}

function $h(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0]
}

function Ea(t, e, n, r, i = !1) {
  if (oe(t)) {
    t.forEach((g, p) => Ea(g, e && (oe(e) ? e[p] : e), n, r, i));
    return
  }
  if (ss(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ea(t, e, n, r.component.subTree);
    return
  }
  const s = r.shapeFlag & 4 ? ju(r.component) : r.el,
    o = i ? null : s,
    {
      i: a,
      r: l
    } = t,
    u = e && e.r,
    c = a.refs === Me ? a.refs = {} : a.refs,
    f = a.setupState,
    d = Oe(f),
    h = f === Me ? () => !1 : g => Ie(d, g);
  if (u != null && u !== l && (Xe(u) ? (c[u] = null, h(u) && (f[u] = null)) : at(u) && (u.value = null)), he(l)) ja(l, a, 12, [o, c]);
  else {
    const g = Xe(l),
      p = at(l);
    if (g || p) {
      const b = () => {
        if (t.f) {
          const y = g ? h(l) ? f[l] : c[l] : l.value;
          i ? oe(y) && Th(y, s) : oe(y) ? y.includes(s) || y.push(s) : g ? (c[l] = [s], h(l) && (f[l] = c[l])) : (l.value = [s], t.k && (c[t.k] = l.value))
        } else g ? (c[l] = o, h(l) && (f[l] = o)) : p && (l.value = o, t.k && (c[t.k] = o))
      };
      o ? (b.id = -1, Et(b, n)) : b()
    }
  }
}
let zd = !1;
const Ss = () => {
    zd || (console.error("Hydration completed but contains mismatches."), zd = !0)
  },
  Uv = t => t.namespaceURI.includes("svg") && t.tagName !== "foreignObject",
  Vv = t => t.namespaceURI.includes("MathML"),
  tl = t => {
    if (t.nodeType === 1) {
      if (Uv(t)) return "svg";
      if (Vv(t)) return "mathml"
    }
  },
  $s = t => t.nodeType === 8;

function jv(t) {
  const {
    mt: e,
    p: n,
    o: {
      patchProp: r,
      createText: i,
      nextSibling: s,
      parentNode: o,
      remove: a,
      insert: l,
      createComment: u
    }
  } = t, c = (_, m) => {
    if (!m.hasChildNodes()) {
      n(null, _, m), ql(), m._vnode = _;
      return
    }
    f(m.firstChild, _, null, null, null), ql(), m._vnode = _
  }, f = (_, m, v, C, E, R = !1) => {
    R = R || !!m.dynamicChildren;
    const A = $s(_) && _.data === "[",
      P = () => p(_, m, v, C, E, A),
      {
        type: V,
        ref: O,
        shapeFlag: Y,
        patchFlag: q
      } = m;
    let Q = _.nodeType;
    m.el = _, q === -2 && (R = !1, m.dynamicChildren = null);
    let U = null;
    switch (V) {
      case Ei:
        Q !== 3 ? m.children === "" ? (l(m.el = i(""), o(_), _), U = _) : U = P() : (_.data !== m.children && (Ss(), _.data = m.children), U = s(_));
        break;
      case Pt:
        D(_) ? (U = s(_), y(m.el = _.content.firstChild, _, v)) : Q !== 8 || A ? U = P() : U = s(_);
        break;
      case Zo:
        if (A && (_ = s(_), Q = _.nodeType), Q === 1 || Q === 3) {
          U = _;
          const W = !m.children.length;
          for (let z = 0; z < m.staticCount; z++) W && (m.children += U.nodeType === 1 ? U.outerHTML : U.data), z === m.staticCount - 1 && (m.anchor = U), U = s(U);
          return A ? s(U) : U
        } else P();
        break;
      case nn:
        A ? U = g(_, m, v, C, E, R) : U = P();
        break;
      default:
        if (Y & 1)(Q !== 1 || m.type.toLowerCase() !== _.tagName.toLowerCase()) && !D(_) ? U = P() : U = d(_, m, v, C, E, R);
        else if (Y & 6) {
          m.slotScopeIds = E;
          const W = o(_);
          if (A ? U = b(_) : $s(_) && _.data === "teleport start" ? U = b(_, _.data, "teleport end") : U = s(_), e(m, W, null, v, C, tl(W), R), ss(m) && !m.type.__asyncResolved) {
            let z;
            A ? (z = st(nn), z.anchor = U ? U.previousSibling : W.lastChild) : z = _.nodeType === 3 ? f0("") : st("div"), z.el = _, m.component.subTree = z
          }
        } else Y & 64 ? Q !== 8 ? U = P() : U = m.type.hydrate(_, m, v, C, E, R, t, h) : Y & 128 && (U = m.type.hydrate(_, m, v, C, tl(o(_)), E, R, t, f))
    }
    return O != null && Ea(O, null, C, m), U
  }, d = (_, m, v, C, E, R) => {
    R = R || !!m.dynamicChildren;
    const {
      type: A,
      props: P,
      patchFlag: V,
      shapeFlag: O,
      dirs: Y,
      transition: q
    } = m, Q = A === "input" || A === "option";
    if (Q || V !== -1) {
      Y && br(m, null, v, "created");
      let U = !1;
      if (D(_)) {
        U = Qm(null, q) && v && v.vnode.props && v.vnode.props.appear;
        const z = _.content.firstChild;
        U && q.beforeEnter(z), y(z, _, v), m.el = _ = z
      }
      if (O & 16 && !(P && (P.innerHTML || P.textContent))) {
        let z = h(_.firstChild, m, _, v, C, E, R);
        for (; z;) {
          nl(_, 1) || Ss();
          const H = z;
          z = z.nextSibling, a(H)
        }
      } else if (O & 8) {
        let z = m.children;
        z[0] === `
` && (_.tagName === "PRE" || _.tagName === "TEXTAREA") && (z = z.slice(1)), _.textContent !== z && (nl(_, 0) || Ss(), _.textContent = m.children)
      }
      if (P) {
        if (Q || !R || V & 48) {
          const z = _.tagName.includes("-");
          for (const H in P)(Q && (H.endsWith("value") || H === "indeterminate") || Va(H) && !Ys(H) || H[0] === "." || z) && r(_, H, null, P[H], void 0, v)
        } else if (P.onClick) r(_, "onClick", null, P.onClick, void 0, v);
        else if (V & 4 && is(P.style))
          for (const z in P.style) P.style[z]
      }
      let W;
      (W = P && P.onVnodeBeforeMount) && fn(W, v, m), Y && br(m, null, v, "beforeMount"), ((W = P && P.onVnodeMounted) || Y || U) && s0(() => {
        W && fn(W, v, m), U && q.enter(_), Y && br(m, null, v, "mounted")
      }, C)
    }
    return _.nextSibling
  }, h = (_, m, v, C, E, R, A) => {
    A = A || !!m.dynamicChildren;
    const P = m.children,
      V = P.length;
    for (let O = 0; O < V; O++) {
      const Y = A ? P[O] : P[O] = An(P[O]),
        q = Y.type === Ei;
      _ ? (q && !A && O + 1 < V && An(P[O + 1]).type === Ei && (l(i(_.data.slice(Y.children.length)), v, s(_)), _.data = Y.children), _ = f(_, Y, C, E, R, A)) : q && !Y.children ? l(Y.el = i(""), v) : (nl(v, 1) || Ss(), n(null, Y, v, null, C, E, tl(v), R))
    }
    return _
  }, g = (_, m, v, C, E, R) => {
    const {
      slotScopeIds: A
    } = m;
    A && (E = E ? E.concat(A) : A);
    const P = o(_),
      V = h(s(_), m, P, v, C, E, R);
    return V && $s(V) && V.data === "]" ? s(m.anchor = V) : (Ss(), l(m.anchor = u("]"), P, V), V)
  }, p = (_, m, v, C, E, R) => {
    if (nl(_.parentElement, 1) || Ss(), m.el = null, R) {
      const V = b(_);
      for (;;) {
        const O = s(_);
        if (O && O !== V) a(O);
        else break
      }
    }
    const A = s(_),
      P = o(_);
    return a(_), n(null, m, P, A, v, C, tl(P), E), v && (v.vnode.el = m.el, Vu(v, m.el)), A
  }, b = (_, m = "[", v = "]") => {
    let C = 0;
    for (; _;)
      if (_ = s(_), _ && $s(_) && (_.data === m && C++, _.data === v)) {
        if (C === 0) return s(_);
        C--
      } return _
  }, y = (_, m, v) => {
    const C = m.parentNode;
    C && C.replaceChild(_, m);
    let E = v;
    for (; E;) E.vnode.el === m && (E.vnode.el = E.subTree.el = _), E = E.parent
  }, D = _ => _.nodeType === 1 && _.tagName === "TEMPLATE";
  return [c, f]
}
const Gd = "data-allow-mismatch",
  Wv = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };

function nl(t, e) {
  if (e === 0 || e === 1)
    for (; t && !t.hasAttribute(Gd);) t = t.parentElement;
  const n = t && t.getAttribute(Gd);
  if (n == null) return !1;
  if (n === "") return !0;
  {
    const r = n.split(",");
    return e === 0 && r.includes("children") ? !0 : n.split(",").includes(Wv[e])
  }
}
Lu().requestIdleCallback;
Lu().cancelIdleCallback;

function Kv(t, e) {
  if ($s(t) && t.data === "[") {
    let n = 1,
      r = t.nextSibling;
    for (; r;) {
      if (r.nodeType === 1) {
        if (e(r) === !1) break
      } else if ($s(r))
        if (r.data === "]") {
          if (--n === 0) break
        } else r.data === "[" && n++;
      r = r.nextSibling
    }
  } else e(t)
}
const ss = t => !!t.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function Xd(t) {
  he(t) && (t = {
    loader: t
  });
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: r,
    delay: i = 200,
    hydrate: s,
    timeout: o,
    suspensible: a = !0,
    onError: l
  } = t;
  let u = null,
    c, f = 0;
  const d = () => (f++, u = null, h()),
    h = () => {
      let g;
      return u || (g = u = e().catch(p => {
        if (p = p instanceof Error ? p : new Error(String(p)), l) return new Promise((b, y) => {
          l(p, () => b(d()), () => y(p), f + 1)
        });
        throw p
      }).then(p => g !== u && u ? u : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), c = p, p)))
    };
  return ii({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(g, p, b) {
      const y = s ? () => {
        const D = s(b, _ => Kv(g, _));
        D && (p.bum || (p.bum = [])).push(D)
      } : b;
      c ? y() : h().then(() => !p.isUnmounted && y())
    },
    get __asyncResolved() {
      return c
    },
    setup() {
      const g = wt;
      if ($h(g), c) return () => yc(c, g);
      const p = _ => {
        u = null, To(_, g, 13, !r)
      };
      if (a && g.suspense || lo) return h().then(_ => () => yc(_, g)).catch(_ => (p(_), () => r ? st(r, {
        error: _
      }) : null));
      const b = _n(!1),
        y = _n(),
        D = _n(!!i);
      return i && setTimeout(() => {
        D.value = !1
      }, i), o != null && setTimeout(() => {
        if (!b.value && !y.value) {
          const _ = new Error(`Async component timed out after ${o}ms.`);
          p(_), y.value = _
        }
      }, o), h().then(() => {
        b.value = !0, g.parent && Wa(g.parent.vnode) && g.parent.update()
      }).catch(_ => {
        p(_), y.value = _
      }), () => {
        if (b.value && c) return yc(c, g);
        if (y.value && r) return st(r, {
          error: y.value
        });
        if (n && !D.value) return st(n)
      }
    }
  })
}

function yc(t, e) {
  const {
    ref: n,
    props: r,
    children: i,
    ce: s
  } = e.vnode, o = st(t, r, i);
  return o.ref = n, o.ce = s, delete e.vnode.ce, o
}
const Wa = t => t.type.__isKeepAlive,
  Yv = {
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
      const n = Ni(),
        r = n.ctx;
      if (!r.renderer) return () => {
        const D = e.default && e.default();
        return D && D.length === 1 ? D[0] : D
      };
      const i = new Map,
        s = new Set;
      let o = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: u,
            um: c,
            o: {
              createElement: f
            }
          }
        } = r,
        d = f("div");
      r.activate = (D, _, m, v, C) => {
        const E = D.component;
        u(D, _, m, 0, a), l(E.vnode, D, _, m, E, a, v, D.slotScopeIds, C), Et(() => {
          E.isDeactivated = !1, E.a && zs(E.a);
          const R = D.props && D.props.onVnodeMounted;
          R && fn(R, E.parent, D)
        }, a)
      }, r.deactivate = D => {
        const _ = D.component;
        eu(_.m), eu(_.a), u(D, d, null, 1, a), Et(() => {
          _.da && zs(_.da);
          const m = D.props && D.props.onVnodeUnmounted;
          m && fn(m, _.parent, D), _.isDeactivated = !0
        }, a)
      };

      function h(D) {
        Dc(D), c(D, n, a, !0)
      }

      function g(D) {
        i.forEach((_, m) => {
          const v = yf(_.type);
          v && !D(v) && p(m)
        })
      }

      function p(D) {
        const _ = i.get(D);
        _ && (!o || !sr(_, o)) ? h(_) : o && Dc(o), i.delete(D), s.delete(D)
      }
      Yn(() => [t.include, t.exclude], ([D, _]) => {
        D && g(m => Ho(D, m)), _ && g(m => !Ho(_, m))
      }, {
        flush: "post",
        deep: !0
      });
      let b = null;
      const y = () => {
        b != null && (tu(n.subTree.type) ? Et(() => {
          i.set(b, rl(n.subTree))
        }, n.subTree.suspense) : i.set(b, rl(n.subTree)))
      };
      return Bu(y), Fm(y), Ih(() => {
        i.forEach(D => {
          const {
            subTree: _,
            suspense: m
          } = n, v = rl(_);
          if (D.type === v.type && D.key === v.key) {
            Dc(v);
            const C = v.component.da;
            C && Et(C, m);
            return
          }
          h(D)
        })
      }), () => {
        if (b = null, !e.default) return o = null;
        const D = e.default(),
          _ = D[0];
        if (D.length > 1) return o = null, D;
        if (!ao(_) || !(_.shapeFlag & 4) && !(_.shapeFlag & 128)) return o = null, _;
        let m = rl(_);
        if (m.type === Pt) return o = null, m;
        const v = m.type,
          C = yf(ss(m) ? m.type.__asyncResolved || {} : v),
          {
            include: E,
            exclude: R,
            max: A
          } = t;
        if (E && (!C || !Ho(E, C)) || R && C && Ho(R, C)) return m.shapeFlag &= -257, o = m, _;
        const P = m.key == null ? v : m.key,
          V = i.get(P);
        return m.el && (m = ti(m), _.shapeFlag & 128 && (_.ssContent = m)), b = P, V ? (m.el = V.el, m.component = V.component, m.transition && so(m, m.transition), m.shapeFlag |= 512, s.delete(P), s.add(P)) : (s.add(P), A && s.size > parseInt(A, 10) && p(s.values().next().value)), m.shapeFlag |= 256, o = m, tu(_.type) ? _ : m
      }
    }
  },
  zv = Yv;

function Ho(t, e) {
  return oe(t) ? t.some(n => Ho(n, e)) : Xe(t) ? t.split(",").includes(e) : Yb(t) ? (t.lastIndex = 0, t.test(e)) : !1
}

function Gv(t, e) {
  Om(t, "a", e)
}

function Xv(t, e) {
  Om(t, "da", e)
}

function Om(t, e, n = wt) {
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
    for (; i && i.parent;) Wa(i.parent.vnode) && qv(r, e, n, i), i = i.parent
  }
}

function qv(t, e, n, r) {
  const i = Iu(e, t, r, !0);
  Bh(() => {
    Th(r[e], i)
  }, n)
}

function Dc(t) {
  t.shapeFlag &= -257, t.shapeFlag &= -513
}

function rl(t) {
  return t.shapeFlag & 128 ? t.ssContent : t
}

function Iu(t, e, n = wt, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      s = e.__weh || (e.__weh = (...o) => {
        Oi();
        const a = _s(n),
          l = ur(e, n, t, o);
        return a(), Fi(), l
      });
    return r ? i.unshift(s) : i.push(s), s
  }
}
const si = t => (e, n = wt) => {
    (!lo || t === "sp") && Iu(t, (...r) => e(...r), n)
  },
  Jv = si("bm"),
  Bu = si("m"),
  Qv = si("bu"),
  Fm = si("u"),
  Ih = si("bum"),
  Bh = si("um"),
  Zv = si("sp"),
  e1 = si("rtg"),
  t1 = si("rtc");

function Mm(t, e = wt) {
  Iu("ec", t, e)
}
const Nm = "components";

function mL(t, e) {
  return Im(Nm, t, !0, e) || t
}
const $m = Symbol.for("v-ndc");

function n1(t) {
  return Xe(t) ? Im(Nm, t, !1) || t : t || $m
}

function Im(t, e, n = !0, r = !1) {
  const i = ln || wt;
  if (i) {
    const s = i.type;
    {
      const a = yf(s, !1);
      if (a && (a === e || a === Fn(e) || a === Ru(Fn(e)))) return s
    }
    const o = qd(i[t] || s[t], e) || qd(i.appContext[t], e);
    return !o && r ? s : o
  }
}

function qd(t, e) {
  return t && (t[e] || t[Fn(e)] || t[Ru(Fn(e))])
}

function yL(t, e, n, r) {
  let i;
  const s = n,
    o = oe(t);
  if (o || Xe(t)) {
    const a = o && is(t);
    let l = !1;
    a && (l = !Kn(t), t = $u(t)), i = new Array(t.length);
    for (let u = 0, c = t.length; u < c; u++) i[u] = e(l ? Vt(t[u]) : t[u], u, void 0, s)
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let a = 0; a < t; a++) i[a] = e(a + 1, a, void 0, s)
  } else if (je(t))
    if (t[Symbol.iterator]) i = Array.from(t, (a, l) => e(a, l, void 0, s));
    else {
      const a = Object.keys(t);
      i = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        i[l] = e(t[c], c, l, s)
      }
    }
  else i = [];
  return i
}
const cf = t => t ? h0(t) ? ju(t) : cf(t.parent) : null,
  Qo = ht(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => cf(t.parent),
    $root: t => cf(t.root),
    $host: t => t.ce,
    $emit: t => t.emit,
    $options: t => Hh(t),
    $forceUpdate: t => t.f || (t.f = () => {
      Nh(t.update)
    }),
    $nextTick: t => t.n || (t.n = Es.bind(t.proxy)),
    $watch: t => C1.bind(t)
  }),
  bc = (t, e) => t !== Me && !t.__isScriptSetup && Ie(t, e),
  r1 = {
    get({
      _: t
    }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: i,
        props: s,
        accessCache: o,
        type: a,
        appContext: l
      } = t;
      let u;
      if (e[0] !== "$") {
        const h = o[e];
        if (h !== void 0) switch (h) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e]
        } else {
          if (bc(r, e)) return o[e] = 1, r[e];
          if (i !== Me && Ie(i, e)) return o[e] = 2, i[e];
          if ((u = t.propsOptions[0]) && Ie(u, e)) return o[e] = 3, s[e];
          if (n !== Me && Ie(n, e)) return o[e] = 4, n[e];
          ff && (o[e] = 0)
        }
      }
      const c = Qo[e];
      let f, d;
      if (c) return e === "$attrs" && Ut(t.attrs, "get", ""), c(t);
      if ((f = a.__cssModules) && (f = f[e])) return f;
      if (n !== Me && Ie(n, e)) return o[e] = 4, n[e];
      if (d = l.config.globalProperties, Ie(d, e)) return d[e]
    },
    set({
      _: t
    }, e, n) {
      const {
        data: r,
        setupState: i,
        ctx: s
      } = t;
      return bc(i, e) ? (i[e] = n, !0) : r !== Me && Ie(r, e) ? (r[e] = n, !0) : Ie(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0)
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
      let a;
      return !!n[o] || t !== Me && Ie(t, o) || bc(e, o) || (a = s[0]) && Ie(a, o) || Ie(r, o) || Ie(Qo, o) || Ie(i.config.globalProperties, o)
    },
    defineProperty(t, e, n) {
      return n.get != null ? t._.accessCache[e] = 0 : Ie(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
    }
  };

function Ql(t) {
  return oe(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
}

function DL(t, e) {
  return !t || !e ? t || e : oe(t) && oe(e) ? t.concat(e) : ht({}, Ql(t), Ql(e))
}

function bL(t) {
  const e = Ni();
  let n = t();
  return _f(), Sh(n) && (n = n.catch(r => {
    throw _s(e), r
  })), [n, () => _s(e)]
}
let ff = !0;

function i1(t) {
  const e = Hh(t),
    n = t.proxy,
    r = t.ctx;
  ff = !1, e.beforeCreate && Jd(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: g,
    activated: p,
    deactivated: b,
    beforeDestroy: y,
    beforeUnmount: D,
    destroyed: _,
    unmounted: m,
    render: v,
    renderTracked: C,
    renderTriggered: E,
    errorCaptured: R,
    serverPrefetch: A,
    expose: P,
    inheritAttrs: V,
    components: O,
    directives: Y,
    filters: q
  } = e;
  if (u && s1(u, r, null), o)
    for (const W in o) {
      const z = o[W];
      he(z) && (r[W] = z.bind(n))
    }
  if (i) {
    const W = i.call(n, n);
    je(W) && (t.data = Mi(W))
  }
  if (ff = !0, s)
    for (const W in s) {
      const z = s[W],
        H = he(z) ? z.bind(n, n) : he(z.get) ? z.get.bind(n, n) : kr,
        F = !he(z) && he(z.set) ? z.set.bind(n) : kr,
        se = _t({
          get: H,
          set: F
        });
      Object.defineProperty(r, W, {
        enumerable: !0,
        configurable: !0,
        get: () => se.value,
        set: ge => se.value = ge
      })
    }
  if (a)
    for (const W in a) Bm(a[W], r, n, W);
  if (l) {
    const W = he(l) ? l.call(n) : l;
    Reflect.ownKeys(W).forEach(z => {
      Xs(z, W[z])
    })
  }
  c && Jd(c, t, "c");

  function U(W, z) {
    oe(z) ? z.forEach(H => W(H.bind(n))) : z && W(z.bind(n))
  }
  if (U(Jv, f), U(Bu, d), U(Qv, h), U(Fm, g), U(Gv, p), U(Xv, b), U(Mm, R), U(t1, C), U(e1, E), U(Ih, D), U(Bh, m), U(Zv, A), oe(P))
    if (P.length) {
      const W = t.exposed || (t.exposed = {});
      P.forEach(z => {
        Object.defineProperty(W, z, {
          get: () => n[z],
          set: H => n[z] = H
        })
      })
    } else t.exposed || (t.exposed = {});
  v && t.render === kr && (t.render = v), V != null && (t.inheritAttrs = V), O && (t.components = O), Y && (t.directives = Y), A && $h(t)
}

function s1(t, e, n = kr) {
  oe(t) && (t = hf(t));
  for (const r in t) {
    const i = t[r];
    let s;
    je(i) ? "default" in i ? s = mn(i.from || r, i.default, !0) : s = mn(i.from || r) : s = mn(i), at(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: o => s.value = o
    }) : e[r] = s
  }
}

function Jd(t, e, n) {
  ur(oe(t) ? t.map(r => r.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function Bm(t, e, n, r) {
  let i = r.includes(".") ? e0(n, r) : () => n[r];
  if (Xe(t)) {
    const s = e[t];
    he(s) && Yn(i, s)
  } else if (he(t)) Yn(i, t.bind(n));
  else if (je(t))
    if (oe(t)) t.forEach(s => Bm(s, e, n, r));
    else {
      const s = he(t.handler) ? t.handler.bind(n) : e[t.handler];
      he(s) && Yn(i, s, t)
    }
}

function Hh(t) {
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
    a = s.get(e);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = e : (l = {}, i.length && i.forEach(u => Zl(l, u, o, !0)), Zl(l, e, o)), je(e) && s.set(e, l), l
}

function Zl(t, e, n, r = !1) {
  const {
    mixins: i,
    extends: s
  } = e;
  s && Zl(t, s, n, !0), i && i.forEach(o => Zl(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const a = o1[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o]
    } return t
}
const o1 = {
  data: Qd,
  props: Zd,
  emits: Zd,
  methods: Uo,
  computed: Uo,
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  components: Uo,
  directives: Uo,
  watch: l1,
  provide: Qd,
  inject: a1
};

function Qd(t, e) {
  return e ? t ? function() {
    return ht(he(t) ? t.call(this, this) : t, he(e) ? e.call(this, this) : e)
  } : e : t
}

function a1(t, e) {
  return Uo(hf(t), hf(e))
}

function hf(t) {
  if (oe(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e
  }
  return t
}

function Gt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}

function Uo(t, e) {
  return t ? ht(Object.create(null), t, e) : e
}

function Zd(t, e) {
  return t ? oe(t) && oe(e) ? [...new Set([...t, ...e])] : ht(Object.create(null), Ql(t), Ql(e ?? {})) : e
}

function l1(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = ht(Object.create(null), t);
  for (const r in e) n[r] = Gt(t[r], e[r]);
  return n
}

function Hm() {
  return {
    app: null,
    config: {
      isNativeTag: Wb,
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
let u1 = 0;

function c1(t, e) {
  return function(r, i = null) {
    he(r) || (r = ht({}, r)), i != null && !je(i) && (i = null);
    const s = Hm(),
      o = new WeakSet,
      a = [];
    let l = !1;
    const u = s.app = {
      _uid: u1++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: p0,
      get config() {
        return s.config
      },
      set config(c) {},
      use(c, ...f) {
        return o.has(c) || (c && he(c.install) ? (o.add(c), c.install(u, ...f)) : he(c) && (o.add(c), c(u, ...f))), u
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u
      },
      component(c, f) {
        return f ? (s.components[c] = f, u) : s.components[c]
      },
      directive(c, f) {
        return f ? (s.directives[c] = f, u) : s.directives[c]
      },
      mount(c, f, d) {
        if (!l) {
          const h = u._ceVNode || st(r, i);
          return h.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), f && e ? e(h, c) : t(h, c, d), l = !0, u._container = c, c.__vue_app__ = u, ju(h.component)
        }
      },
      onUnmount(c) {
        a.push(c)
      },
      unmount() {
        l && (ur(a, u._instance, 16), t(null, u._container), delete u._container.__vue_app__)
      },
      provide(c, f) {
        return s.provides[c] = f, u
      },
      runWithContext(c) {
        const f = os;
        os = u;
        try {
          return c()
        } finally {
          os = f
        }
      }
    };
    return u
  }
}
let os = null;

function Xs(t, e) {
  if (wt) {
    let n = wt.provides;
    const r = wt.parent && wt.parent.provides;
    r === n && (n = wt.provides = Object.create(r)), n[t] = e
  }
}

function mn(t, e, n = !1) {
  const r = wt || ln;
  if (r || os) {
    const i = os ? os._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && he(e) ? e.call(r && r.proxy) : e
  }
}

function Um() {
  return !!(wt || ln || os)
}
const Vm = {},
  jm = () => Object.create(Vm),
  Wm = t => Object.getPrototypeOf(t) === Vm;

function f1(t, e, n, r = !1) {
  const i = {},
    s = jm();
  t.propsDefaults = Object.create(null), Km(t, e, i, s);
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0);
  n ? t.props = r ? i : Gr(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s
}

function h1(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: {
      patchFlag: o
    }
  } = t, a = Oe(i), [l] = t.propsOptions;
  let u = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = t.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (Uu(t.emitsOptions, d)) continue;
        const h = e[d];
        if (l)
          if (Ie(s, d)) h !== s[d] && (s[d] = h, u = !0);
          else {
            const g = Fn(d);
            i[g] = df(l, a, g, h, t, !1)
          }
        else h !== s[d] && (s[d] = h, u = !0)
      }
    }
  } else {
    Km(t, e, i, s) && (u = !0);
    let c;
    for (const f in a)(!e || !Ie(e, f) && ((c = Li(f)) === f || !Ie(e, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = df(l, a, f, void 0, t, !0)) : delete i[f]);
    if (s !== a)
      for (const f in s)(!e || !Ie(e, f)) && (delete s[f], u = !0)
  }
  u && Wr(t.attrs, "set", "")
}

function Km(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let l in e) {
      if (Ys(l)) continue;
      const u = e[l];
      let c;
      i && Ie(i, c = Fn(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Uu(t.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, o = !0)
    }
  if (s) {
    const l = Oe(n),
      u = a || Me;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = df(i, l, f, u[f], t, !Ie(u, f))
    }
  }
  return o
}

function df(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const a = Ie(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && he(l)) {
        const {
          propsDefaults: u
        } = i;
        if (n in u) r = u[n];
        else {
          const c = _s(i);
          r = u[n] = l.call(null, e), c()
        }
      } else r = l;
      i.ce && i.ce._setProp(n, r)
    }
    o[0] && (s && !a ? r = !1 : o[1] && (r === "" || r === Li(n)) && (r = !0))
  }
  return r
}
const d1 = new WeakMap;

function Ym(t, e, n = !1) {
  const r = n ? d1 : e.propsCache,
    i = r.get(t);
  if (i) return i;
  const s = t.props,
    o = {},
    a = [];
  let l = !1;
  if (!he(t)) {
    const c = f => {
      l = !0;
      const [d, h] = Ym(f, e, !0);
      ht(o, d), h && a.push(...h)
    };
    !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c)
  }
  if (!s && !l) return je(t) && r.set(t, Ws), Ws;
  if (oe(s))
    for (let c = 0; c < s.length; c++) {
      const f = Fn(s[c]);
      ep(f) && (o[f] = Me)
    } else if (s)
      for (const c in s) {
        const f = Fn(c);
        if (ep(f)) {
          const d = s[c],
            h = o[f] = oe(d) || he(d) ? {
              type: d
            } : ht({}, d),
            g = h.type;
          let p = !1,
            b = !0;
          if (oe(g))
            for (let y = 0; y < g.length; ++y) {
              const D = g[y],
                _ = he(D) && D.name;
              if (_ === "Boolean") {
                p = !0;
                break
              } else _ === "String" && (b = !1)
            } else p = he(g) && g.name === "Boolean";
          h[0] = p, h[1] = b, (p || Ie(h, "default")) && a.push(f)
        }
      }
  const u = [o, a];
  return je(t) && r.set(t, u), u
}

function ep(t) {
  return t[0] !== "$" && !Ys(t)
}
const zm = t => t[0] === "_" || t === "$stable",
  Uh = t => oe(t) ? t.map(An) : [An(t)],
  p1 = (t, e, n) => {
    if (e._n) return e;
    const r = Cm((...i) => Uh(e(...i)), n);
    return r._c = !1, r
  },
  Gm = (t, e, n) => {
    const r = t._ctx;
    for (const i in t) {
      if (zm(i)) continue;
      const s = t[i];
      if (he(s)) e[i] = p1(i, s, r);
      else if (s != null) {
        const o = Uh(s);
        e[i] = () => o
      }
    }
  },
  Xm = (t, e) => {
    const n = Uh(e);
    t.slots.default = () => n
  },
  qm = (t, e, n) => {
    for (const r in e)(n || r !== "_") && (t[r] = e[r])
  },
  g1 = (t, e, n) => {
    const r = t.slots = jm();
    if (t.vnode.shapeFlag & 32) {
      const i = e._;
      i ? (qm(r, e, n), n && G_(r, "_", i, !0)) : Gm(e, r)
    } else e && Xm(t, e)
  },
  _1 = (t, e, n) => {
    const {
      vnode: r,
      slots: i
    } = t;
    let s = !0,
      o = Me;
    if (r.shapeFlag & 32) {
      const a = e._;
      a ? n && a === 1 ? s = !1 : qm(i, e, n) : (s = !e.$stable, Gm(e, i)), o = e
    } else e && (Xm(t, e), o = {
      default: 1
    });
    if (s)
      for (const a in i) !zm(a) && o[a] == null && delete i[a]
  },
  Et = s0;

function m1(t) {
  return Jm(t)
}

function y1(t) {
  return Jm(t, jv)
}

function Jm(t, e) {
  const n = Lu();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = kr,
    insertStaticContent: g
  } = t, p = (T, x, N, K = null, k = null, w = null, S = void 0, M = null, I = !!x.dynamicChildren) => {
    if (T === x) return;
    T && !sr(T, x) && (K = B(T), ge(T, k, w, !0), T = null), x.patchFlag === -2 && (I = !1, x.dynamicChildren = null);
    const {
      type: j,
      ref: G,
      shapeFlag: L
    } = x;
    switch (j) {
      case Ei:
        b(T, x, N, K);
        break;
      case Pt:
        y(T, x, N, K);
        break;
      case Zo:
        T == null && D(x, N, K, S);
        break;
      case nn:
        O(T, x, N, K, k, w, S, M, I);
        break;
      default:
        L & 1 ? v(T, x, N, K, k, w, S, M, I) : L & 6 ? Y(T, x, N, K, k, w, S, M, I) : (L & 64 || L & 128) && j.process(T, x, N, K, k, w, S, M, I, Z)
    }
    G != null && k && Ea(G, T && T.ref, w, x || T, !x)
  }, b = (T, x, N, K) => {
    if (T == null) r(x.el = a(x.children), N, K);
    else {
      const k = x.el = T.el;
      x.children !== T.children && u(k, x.children)
    }
  }, y = (T, x, N, K) => {
    T == null ? r(x.el = l(x.children || ""), N, K) : x.el = T.el
  }, D = (T, x, N, K) => {
    [T.el, T.anchor] = g(T.children, x, N, K, T.el, T.anchor)
  }, _ = ({
    el: T,
    anchor: x
  }, N, K) => {
    let k;
    for (; T && T !== x;) k = d(T), r(T, N, K), T = k;
    r(x, N, K)
  }, m = ({
    el: T,
    anchor: x
  }) => {
    let N;
    for (; T && T !== x;) N = d(T), i(T), T = N;
    i(x)
  }, v = (T, x, N, K, k, w, S, M, I) => {
    x.type === "svg" ? S = "svg" : x.type === "math" && (S = "mathml"), T == null ? C(x, N, K, k, w, S, M, I) : A(T, x, k, w, S, M, I)
  }, C = (T, x, N, K, k, w, S, M) => {
    let I, j;
    const {
      props: G,
      shapeFlag: L,
      transition: $,
      dirs: ee
    } = T;
    if (I = T.el = o(T.type, w, G && G.is, G), L & 8 ? c(I, T.children) : L & 16 && R(T.children, I, null, K, k, vc(T, w), S, M), ee && br(T, null, K, "created"), E(I, T, T.scopeId, S, K), G) {
      for (const pe in G) pe !== "value" && !Ys(pe) && s(I, pe, null, G[pe], w, K);
      "value" in G && s(I, "value", null, G.value, w), (j = G.onVnodeBeforeMount) && fn(j, K, T)
    }
    ee && br(T, null, K, "beforeMount");
    const te = Qm(k, $);
    te && $.beforeEnter(I), r(I, x, N), ((j = G && G.onVnodeMounted) || te || ee) && Et(() => {
      j && fn(j, K, T), te && $.enter(I), ee && br(T, null, K, "mounted")
    }, k)
  }, E = (T, x, N, K, k) => {
    if (N && h(T, N), K)
      for (let w = 0; w < K.length; w++) h(T, K[w]);
    if (k) {
      let w = k.subTree;
      if (x === w || tu(w.type) && (w.ssContent === x || w.ssFallback === x)) {
        const S = k.vnode;
        E(T, S, S.scopeId, S.slotScopeIds, k.parent)
      }
    }
  }, R = (T, x, N, K, k, w, S, M, I = 0) => {
    for (let j = I; j < T.length; j++) {
      const G = T[j] = M ? hi(T[j]) : An(T[j]);
      p(null, G, x, N, K, k, w, S, M)
    }
  }, A = (T, x, N, K, k, w, S) => {
    const M = x.el = T.el;
    let {
      patchFlag: I,
      dynamicChildren: j,
      dirs: G
    } = x;
    I |= T.patchFlag & 16;
    const L = T.props || Me,
      $ = x.props || Me;
    let ee;
    if (N && Ki(N, !1), (ee = $.onVnodeBeforeUpdate) && fn(ee, N, x, T), G && br(x, T, N, "beforeUpdate"), N && Ki(N, !0), (L.innerHTML && $.innerHTML == null || L.textContent && $.textContent == null) && c(M, ""), j ? P(T.dynamicChildren, j, M, N, K, vc(x, k), w) : S || z(T, x, M, null, N, K, vc(x, k), w, !1), I > 0) {
      if (I & 16) V(M, L, $, N, k);
      else if (I & 2 && L.class !== $.class && s(M, "class", null, $.class, k), I & 4 && s(M, "style", L.style, $.style, k), I & 8) {
        const te = x.dynamicProps;
        for (let pe = 0; pe < te.length; pe++) {
          const de = te[pe],
            Ne = L[de],
            qe = $[de];
          (qe !== Ne || de === "value") && s(M, de, Ne, qe, k, N)
        }
      }
      I & 1 && T.children !== x.children && c(M, x.children)
    } else !S && j == null && V(M, L, $, N, k);
    ((ee = $.onVnodeUpdated) || G) && Et(() => {
      ee && fn(ee, N, x, T), G && br(x, T, N, "updated")
    }, K)
  }, P = (T, x, N, K, k, w, S) => {
    for (let M = 0; M < x.length; M++) {
      const I = T[M],
        j = x[M],
        G = I.el && (I.type === nn || !sr(I, j) || I.shapeFlag & 70) ? f(I.el) : N;
      p(I, j, G, null, K, k, w, S, !0)
    }
  }, V = (T, x, N, K, k) => {
    if (x !== N) {
      if (x !== Me)
        for (const w in x) !Ys(w) && !(w in N) && s(T, w, x[w], null, k, K);
      for (const w in N) {
        if (Ys(w)) continue;
        const S = N[w],
          M = x[w];
        S !== M && w !== "value" && s(T, w, M, S, k, K)
      }
      "value" in N && s(T, "value", x.value, N.value, k)
    }
  }, O = (T, x, N, K, k, w, S, M, I) => {
    const j = x.el = T ? T.el : a(""),
      G = x.anchor = T ? T.anchor : a("");
    let {
      patchFlag: L,
      dynamicChildren: $,
      slotScopeIds: ee
    } = x;
    ee && (M = M ? M.concat(ee) : ee), T == null ? (r(j, N, K), r(G, N, K), R(x.children || [], N, G, k, w, S, M, I)) : L > 0 && L & 64 && $ && T.dynamicChildren ? (P(T.dynamicChildren, $, N, k, w, S, M), (x.key != null || k && x === k.subTree) && Vh(T, x, !0)) : z(T, x, N, G, k, w, S, M, I)
  }, Y = (T, x, N, K, k, w, S, M, I) => {
    x.slotScopeIds = M, T == null ? x.shapeFlag & 512 ? k.ctx.activate(x, N, K, S, I) : q(x, N, K, k, w, S, I) : Q(T, x, I)
  }, q = (T, x, N, K, k, w, S) => {
    const M = T.component = H1(T, K, k);
    if (Wa(T) && (M.ctx.renderer = Z), U1(M, !1, S), M.asyncDep) {
      if (k && k.registerDep(M, U, S), !T.el) {
        const I = M.subTree = st(Pt);
        y(null, I, x, N)
      }
    } else U(M, T, x, N, k, w, S)
  }, Q = (T, x, N) => {
    const K = x.component = T.component;
    if (k1(T, x, N))
      if (K.asyncDep && !K.asyncResolved) {
        W(K, x, N);
        return
      } else K.next = x, K.update();
    else x.el = T.el, K.vnode = x
  }, U = (T, x, N, K, k, w, S) => {
    const M = () => {
      if (T.isMounted) {
        let {
          next: L,
          bu: $,
          u: ee,
          parent: te,
          vnode: pe
        } = T;
        {
          const Tt = Zm(T);
          if (Tt) {
            L && (L.el = pe.el, W(T, L, S)), Tt.asyncDep.then(() => {
              T.isUnmounted || M()
            });
            return
          }
        }
        let de = L,
          Ne;
        Ki(T, !1), L ? (L.el = pe.el, W(T, L, S)) : L = pe, $ && zs($), (Ne = L.props && L.props.onVnodeBeforeUpdate) && fn(Ne, te, L, pe), Ki(T, !0);
        const qe = Ec(T),
          Le = T.subTree;
        T.subTree = qe, p(Le, qe, f(Le.el), B(Le), T, k, w), L.el = qe.el, de === null && Vu(T, qe.el), ee && Et(ee, k), (Ne = L.props && L.props.onVnodeUpdated) && Et(() => fn(Ne, te, L, pe), k)
      } else {
        let L;
        const {
          el: $,
          props: ee
        } = x, {
          bm: te,
          m: pe,
          parent: de,
          root: Ne,
          type: qe
        } = T, Le = ss(x);
        if (Ki(T, !1), te && zs(te), !Le && (L = ee && ee.onVnodeBeforeMount) && fn(L, de, x), Ki(T, !0), $ && De) {
          const Tt = () => {
            T.subTree = Ec(T), De($, T.subTree, T, k, null)
          };
          Le && qe.__asyncHydrate ? qe.__asyncHydrate($, T, Tt) : Tt()
        } else {
          Ne.ce && Ne.ce._injectChildStyle(qe);
          const Tt = T.subTree = Ec(T);
          p(null, Tt, N, K, T, k, w), x.el = Tt.el
        }
        if (pe && Et(pe, k), !Le && (L = ee && ee.onVnodeMounted)) {
          const Tt = x;
          Et(() => fn(L, de, Tt), k)
        }(x.shapeFlag & 256 || de && ss(de.vnode) && de.vnode.shapeFlag & 256) && T.a && Et(T.a, k), T.isMounted = !0, x = N = K = null
      }
    };
    T.scope.on();
    const I = T.effect = new em(M);
    T.scope.off();
    const j = T.update = I.run.bind(I),
      G = T.job = I.runIfDirty.bind(I);
    G.i = T, G.id = T.uid, I.scheduler = () => Nh(G), Ki(T, !0), j()
  }, W = (T, x, N) => {
    x.component = T;
    const K = T.vnode.props;
    T.vnode = x, T.next = null, h1(T, x.props, K, N), _1(T, x.children, N), Oi(), Vd(T), Fi()
  }, z = (T, x, N, K, k, w, S, M, I = !1) => {
    const j = T && T.children,
      G = T ? T.shapeFlag : 0,
      L = x.children,
      {
        patchFlag: $,
        shapeFlag: ee
      } = x;
    if ($ > 0) {
      if ($ & 128) {
        F(j, L, N, K, k, w, S, M, I);
        return
      } else if ($ & 256) {
        H(j, L, N, K, k, w, S, M, I);
        return
      }
    }
    ee & 8 ? (G & 16 && ve(j, k, w), L !== j && c(N, L)) : G & 16 ? ee & 16 ? F(j, L, N, K, k, w, S, M, I) : ve(j, k, w, !0) : (G & 8 && c(N, ""), ee & 16 && R(L, N, K, k, w, S, M, I))
  }, H = (T, x, N, K, k, w, S, M, I) => {
    T = T || Ws, x = x || Ws;
    const j = T.length,
      G = x.length,
      L = Math.min(j, G);
    let $;
    for ($ = 0; $ < L; $++) {
      const ee = x[$] = I ? hi(x[$]) : An(x[$]);
      p(T[$], ee, N, null, k, w, S, M, I)
    }
    j > G ? ve(T, k, w, !0, !1, L) : R(x, N, K, k, w, S, M, I, L)
  }, F = (T, x, N, K, k, w, S, M, I) => {
    let j = 0;
    const G = x.length;
    let L = T.length - 1,
      $ = G - 1;
    for (; j <= L && j <= $;) {
      const ee = T[j],
        te = x[j] = I ? hi(x[j]) : An(x[j]);
      if (sr(ee, te)) p(ee, te, N, null, k, w, S, M, I);
      else break;
      j++
    }
    for (; j <= L && j <= $;) {
      const ee = T[L],
        te = x[$] = I ? hi(x[$]) : An(x[$]);
      if (sr(ee, te)) p(ee, te, N, null, k, w, S, M, I);
      else break;
      L--, $--
    }
    if (j > L) {
      if (j <= $) {
        const ee = $ + 1,
          te = ee < G ? x[ee].el : K;
        for (; j <= $;) p(null, x[j] = I ? hi(x[j]) : An(x[j]), N, te, k, w, S, M, I), j++
      }
    } else if (j > $)
      for (; j <= L;) ge(T[j], k, w, !0), j++;
    else {
      const ee = j,
        te = j,
        pe = new Map;
      for (j = te; j <= $; j++) {
        const dt = x[j] = I ? hi(x[j]) : An(x[j]);
        dt.key != null && pe.set(dt.key, j)
      }
      let de, Ne = 0;
      const qe = $ - te + 1;
      let Le = !1,
        Tt = 0;
      const cn = new Array(qe);
      for (j = 0; j < qe; j++) cn[j] = 0;
      for (j = ee; j <= L; j++) {
        const dt = T[j];
        if (Ne >= qe) {
          ge(dt, k, w, !0);
          continue
        }
        let Dt;
        if (dt.key != null) Dt = pe.get(dt.key);
        else
          for (de = te; de <= $; de++)
            if (cn[de - te] === 0 && sr(dt, x[de])) {
              Dt = de;
              break
            } Dt === void 0 ? ge(dt, k, w, !0) : (cn[Dt - te] = j + 1, Dt >= Tt ? Tt = Dt : Le = !0, p(dt, x[Dt], N, null, k, w, S, M, I), Ne++)
      }
      const Mr = Le ? D1(cn) : Ws;
      for (de = Mr.length - 1, j = qe - 1; j >= 0; j--) {
        const dt = te + j,
          Dt = x[dt],
          hr = dt + 1 < G ? x[dt + 1].el : K;
        cn[j] === 0 ? p(null, Dt, N, hr, k, w, S, M, I) : Le && (de < 0 || j !== Mr[de] ? se(Dt, N, hr, 2) : de--)
      }
    }
  }, se = (T, x, N, K, k = null) => {
    const {
      el: w,
      type: S,
      transition: M,
      children: I,
      shapeFlag: j
    } = T;
    if (j & 6) {
      se(T.component.subTree, x, N, K);
      return
    }
    if (j & 128) {
      T.suspense.move(x, N, K);
      return
    }
    if (j & 64) {
      S.move(T, x, N, Z);
      return
    }
    if (S === nn) {
      r(w, x, N);
      for (let L = 0; L < I.length; L++) se(I[L], x, N, K);
      r(T.anchor, x, N);
      return
    }
    if (S === Zo) {
      _(T, x, N);
      return
    }
    if (K !== 2 && j & 1 && M)
      if (K === 0) M.beforeEnter(w), r(w, x, N), Et(() => M.enter(w), k);
      else {
        const {
          leave: L,
          delayLeave: $,
          afterLeave: ee
        } = M, te = () => r(w, x, N), pe = () => {
          L(w, () => {
            te(), ee && ee()
          })
        };
        $ ? $(w, te, pe) : pe()
      }
    else r(w, x, N)
  }, ge = (T, x, N, K = !1, k = !1) => {
    const {
      type: w,
      props: S,
      ref: M,
      children: I,
      dynamicChildren: j,
      shapeFlag: G,
      patchFlag: L,
      dirs: $,
      cacheIndex: ee
    } = T;
    if (L === -2 && (k = !1), M != null && Ea(M, null, N, T, !0), ee != null && (x.renderCache[ee] = void 0), G & 256) {
      x.ctx.deactivate(T);
      return
    }
    const te = G & 1 && $,
      pe = !ss(T);
    let de;
    if (pe && (de = S && S.onVnodeBeforeUnmount) && fn(de, x, T), G & 6) le(T.component, N, K);
    else {
      if (G & 128) {
        T.suspense.unmount(N, K);
        return
      }
      te && br(T, null, x, "beforeUnmount"), G & 64 ? T.type.remove(T, x, N, Z, K) : j && !j.hasOnce && (w !== nn || L > 0 && L & 64) ? ve(j, x, N, !1, !0) : (w === nn && L & 384 || !k && G & 16) && ve(I, x, N), K && Te(T)
    }(pe && (de = S && S.onVnodeUnmounted) || te) && Et(() => {
      de && fn(de, x, T), te && br(T, null, x, "unmounted")
    }, N)
  }, Te = T => {
    const {
      type: x,
      el: N,
      anchor: K,
      transition: k
    } = T;
    if (x === nn) {
      fe(N, K);
      return
    }
    if (x === Zo) {
      m(T);
      return
    }
    const w = () => {
      i(N), k && !k.persisted && k.afterLeave && k.afterLeave()
    };
    if (T.shapeFlag & 1 && k && !k.persisted) {
      const {
        leave: S,
        delayLeave: M
      } = k, I = () => S(N, w);
      M ? M(T.el, w, I) : I()
    } else w()
  }, fe = (T, x) => {
    let N;
    for (; T !== x;) N = d(T), i(T), T = N;
    i(x)
  }, le = (T, x, N) => {
    const {
      bum: K,
      scope: k,
      job: w,
      subTree: S,
      um: M,
      m: I,
      a: j
    } = T;
    eu(I), eu(j), K && zs(K), k.stop(), w && (w.flags |= 8, ge(S, T, x, N)), M && Et(M, x), Et(() => {
      T.isUnmounted = !0
    }, x), x && x.pendingBranch && !x.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve())
  }, ve = (T, x, N, K = !1, k = !1, w = 0) => {
    for (let S = w; S < T.length; S++) ge(T[S], x, N, K, k)
  }, B = T => {
    if (T.shapeFlag & 6) return B(T.component.subTree);
    if (T.shapeFlag & 128) return T.suspense.next();
    const x = d(T.anchor || T.el),
      N = x && x[wm];
    return N ? d(N) : x
  };
  let J = !1;
  const X = (T, x, N) => {
      T == null ? x._vnode && ge(x._vnode, null, null, !0) : p(x._vnode || null, T, x, null, null, null, N), x._vnode = T, J || (J = !0, Vd(), ql(), J = !1)
    },
    Z = {
      p,
      um: ge,
      m: se,
      r: Te,
      mt: q,
      mc: R,
      pc: z,
      pbc: P,
      n: B,
      o: t
    };
  let ue, De;
  return e && ([ue, De] = e(Z)), {
    render: X,
    hydrate: ue,
    createApp: c1(X, ue)
  }
}

function vc({
  type: t,
  props: e
}, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
}

function Ki({
  effect: t,
  job: e
}, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5)
}

function Qm(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted
}

function Vh(t, e, n = !1) {
  const r = t.children,
    i = e.children;
  if (oe(r) && oe(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = hi(i[s]), a.el = o.el), !n && a.patchFlag !== -2 && Vh(o, a)), a.type === Ei && (a.el = o.el)
    }
}

function D1(t) {
  const e = t.slice(),
    n = [0];
  let r, i, s, o, a;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const u = t[r];
    if (u !== 0) {
      if (i = n[n.length - 1], t[i] < u) {
        e[r] = i, n.push(r);
        continue
      }
      for (s = 0, o = n.length - 1; s < o;) a = s + o >> 1, t[n[a]] < u ? s = a + 1 : o = a;
      u < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r)
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0;) n[s] = o, o = e[o];
  return n
}

function Zm(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Zm(e)
}

function eu(t) {
  if (t)
    for (let e = 0; e < t.length; e++) t[e].flags |= 8
}
const b1 = Symbol.for("v-scx"),
  v1 = () => mn(b1);

function vL(t, e) {
  return Hu(t, null, e)
}

function E1(t, e) {
  return Hu(t, null, {
    flush: "sync"
  })
}

function Yn(t, e, n) {
  return Hu(t, e, n)
}

function Hu(t, e, n = Me) {
  const {
    immediate: r,
    deep: i,
    flush: s,
    once: o
  } = n, a = ht({}, n), l = e && r || !e && s !== "post";
  let u;
  if (lo) {
    if (s === "sync") {
      const h = v1();
      u = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!l) {
      const h = () => {};
      return h.stop = kr, h.resume = kr, h.pause = kr, h
    }
  }
  const c = wt;
  a.call = (h, g, p) => ur(h, c, g, p);
  let f = !1;
  s === "post" ? a.scheduler = h => {
    Et(h, c && c.suspense)
  } : s !== "sync" && (f = !0, a.scheduler = (h, g) => {
    g ? h() : Nh(h)
  }), a.augmentJob = h => {
    e && (h.flags |= 4), f && (h.flags |= 2, c && (h.id = c.uid, h.i = c))
  };
  const d = Fv(t, e, a);
  return lo && (u ? u.push(d) : l && d()), d
}

function C1(t, e, n) {
  const r = this.proxy,
    i = Xe(t) ? t.includes(".") ? e0(r, t) : () => r[t] : t.bind(r, r);
  let s;
  he(e) ? s = e : (s = e.handler, n = e);
  const o = _s(this),
    a = Hu(i, s.bind(r), n);
  return o(), a
}

function e0(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r
  }
}

function EL(t, e, n = Me) {
  const r = Ni(),
    i = Fn(e),
    s = Li(e),
    o = t0(t, i),
    a = mm((l, u) => {
      let c, f = Me,
        d;
      return E1(() => {
        const h = t[i];
        dn(c, h) && (c = h, u())
      }), {
        get() {
          return l(), n.get ? n.get(c) : c
        },
        set(h) {
          const g = n.set ? n.set(h) : h;
          if (!dn(g, c) && !(f !== Me && dn(h, f))) return;
          const p = r.vnode.props;
          p && (e in p || i in p || s in p) && (`onUpdate:${e}` in p || `onUpdate:${i}` in p || `onUpdate:${s}` in p) || (c = h, u()), r.emit(`update:${e}`, g), dn(h, g) && dn(h, f) && !dn(g, d) && u(), f = h, d = g
        }
      }
    });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? {
          value: l++ ? o || Me : a,
          done: !1
        } : {
          done: !0
        }
      }
    }
  }, a
}
const t0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Fn(e)}Modifiers`] || t[`${Li(e)}Modifiers`];

function w1(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Me;
  let i = n;
  const s = e.startsWith("update:"),
    o = s && t0(r, e.slice(7));
  o && (o.trim && (i = n.map(c => Xe(c) ? c.trim() : c)), o.number && (i = n.map(Yl)));
  let a, l = r[a = hc(e)] || r[a = hc(Fn(e))];
  !l && s && (l = r[a = hc(Li(e))]), l && ur(l, t, 6, i);
  const u = r[a + "Once"];
  if (u) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    t.emitted[a] = !0, ur(u, t, 6, i)
  }
}

function n0(t, e, n = !1) {
  const r = e.emitsCache,
    i = r.get(t);
  if (i !== void 0) return i;
  const s = t.emits;
  let o = {},
    a = !1;
  if (!he(t)) {
    const l = u => {
      const c = n0(u, e, !0);
      c && (a = !0, ht(o, c))
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l)
  }
  return !s && !a ? (je(t) && r.set(t, null), null) : (oe(s) ? s.forEach(l => o[l] = null) : ht(o, s), je(t) && r.set(t, o), o)
}

function Uu(t, e) {
  return !t || !Va(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Ie(t, e[0].toLowerCase() + e.slice(1)) || Ie(t, Li(e)) || Ie(t, e))
}

function Ec(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: a,
    emit: l,
    render: u,
    renderCache: c,
    props: f,
    data: d,
    setupState: h,
    ctx: g,
    inheritAttrs: p
  } = t, b = Jl(t);
  let y, D;
  try {
    if (n.shapeFlag & 4) {
      const m = i || r,
        v = m;
      y = An(u.call(v, m, c, f, h, d, g)), D = a
    } else {
      const m = e;
      y = An(m.length > 1 ? m(f, {
        attrs: a,
        slots: o,
        emit: l
      }) : m(f, null)), D = e.props ? a : S1(a)
    }
  } catch (m) {
    ea.length = 0, To(m, t, 1), y = st(Pt)
  }
  let _ = y;
  if (D && p !== !1) {
    const m = Object.keys(D),
      {
        shapeFlag: v
      } = _;
    m.length && v & 7 && (s && m.some(wh) && (D = x1(D, s)), _ = ti(_, D, !1, !0))
  }
  return n.dirs && (_ = ti(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && so(_, n.transition), y = _, Jl(b), y
}

function T1(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (ao(i)) {
      if (i.type !== Pt || i.children === "v-if") {
        if (n) return;
        n = i
      }
    } else return
  }
  return n
}
const S1 = t => {
    let e;
    for (const n in t)(n === "class" || n === "style" || Va(n)) && ((e || (e = {}))[n] = t[n]);
    return e
  },
  x1 = (t, e) => {
    const n = {};
    for (const r in t)(!wh(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n
  };

function k1(t, e, n) {
  const {
    props: r,
    children: i,
    component: s
  } = t, {
    props: o,
    children: a,
    patchFlag: l
  } = e, u = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? tp(r, o, u) : !!o;
    if (l & 8) {
      const c = e.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (o[d] !== r[d] && !Uu(u, d)) return !0
      }
    }
  } else return (i || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? tp(r, o, u) : !0 : !!o;
  return !1
}

function tp(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Uu(n, s)) return !0
  }
  return !1
}

function Vu({
  vnode: t,
  parent: e
}, n) {
  for (; e;) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)(t = e.vnode).el = n, e = e.parent;
    else break
  }
}
const tu = t => t.__isSuspense;
let pf = 0;
const A1 = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, r, i, s, o, a, l, u) {
      if (t == null) P1(e, n, r, i, s, o, a, l, u);
      else {
        if (s && s.deps > 0 && !t.suspense.isInFallback) {
          e.suspense = t.suspense, e.suspense.vnode = e, e.el = t.el;
          return
        }
        R1(t, e, n, r, i, o, a, l, u)
      }
    },
    hydrate: L1,
    normalize: O1
  },
  r0 = A1;

function Ca(t, e) {
  const n = t.props && t.props[e];
  he(n) && n()
}

function P1(t, e, n, r, i, s, o, a, l) {
  const {
    p: u,
    o: {
      createElement: c
    }
  } = l, f = c("div"), d = t.suspense = i0(t, i, r, e, f, n, s, o, a, l);
  u(null, d.pendingBranch = t.ssContent, f, null, r, d, s, o), d.deps > 0 ? (Ca(t, "onPending"), Ca(t, "onFallback"), u(null, t.ssFallback, e, n, r, null, s, o), qs(d, t.ssFallback)) : d.resolve(!1, !0)
}

function R1(t, e, n, r, i, s, o, a, {
  p: l,
  um: u,
  o: {
    createElement: c
  }
}) {
  const f = e.suspense = t.suspense;
  f.vnode = e, e.el = t.el;
  const d = e.ssContent,
    h = e.ssFallback,
    {
      activeBranch: g,
      pendingBranch: p,
      isInFallback: b,
      isHydrating: y
    } = f;
  if (p) f.pendingBranch = d, sr(d, p) ? (l(p, d, f.hiddenContainer, null, i, f, s, o, a), f.deps <= 0 ? f.resolve() : b && (y || (l(g, h, n, r, i, null, s, o, a), qs(f, h)))) : (f.pendingId = pf++, y ? (f.isHydrating = !1, f.activeBranch = p) : u(p, i, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), b ? (l(null, d, f.hiddenContainer, null, i, f, s, o, a), f.deps <= 0 ? f.resolve() : (l(g, h, n, r, i, null, s, o, a), qs(f, h))) : g && sr(d, g) ? (l(g, d, n, r, i, f, s, o, a), f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, s, o, a), f.deps <= 0 && f.resolve()));
  else if (g && sr(d, g)) l(g, d, n, r, i, f, s, o, a), qs(f, d);
  else if (Ca(e, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = pf++, l(null, d, f.hiddenContainer, null, i, f, s, o, a), f.deps <= 0) f.resolve();
  else {
    const {
      timeout: D,
      pendingId: _
    } = f;
    D > 0 ? setTimeout(() => {
      f.pendingId === _ && f.fallback(h)
    }, D) : D === 0 && f.fallback(h)
  }
}

function i0(t, e, n, r, i, s, o, a, l, u, c = !1) {
  const {
    p: f,
    m: d,
    um: h,
    n: g,
    o: {
      parentNode: p,
      remove: b
    }
  } = u;
  let y;
  const D = F1(t);
  D && e && e.pendingBranch && (y = e.pendingId, e.deps++);
  const _ = t.props ? X_(t.props.timeout) : void 0,
    m = s,
    v = {
      vnode: t,
      parent: e,
      parentComponent: n,
      namespace: o,
      container: r,
      hiddenContainer: i,
      deps: 0,
      pendingId: pf++,
      timeout: typeof _ == "number" ? _ : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(C = !1, E = !1) {
        const {
          vnode: R,
          activeBranch: A,
          pendingBranch: P,
          pendingId: V,
          effects: O,
          parentComponent: Y,
          container: q
        } = v;
        let Q = !1;
        v.isHydrating ? v.isHydrating = !1 : C || (Q = A && P.transition && P.transition.mode === "out-in", Q && (A.transition.afterLeave = () => {
          V === v.pendingId && (d(P, q, s === m ? g(A) : s, 0), af(O))
        }), A && (p(A.el) === q && (s = g(A)), h(A, Y, v, !0)), Q || d(P, q, s, 0)), qs(v, P), v.pendingBranch = null, v.isInFallback = !1;
        let U = v.parent,
          W = !1;
        for (; U;) {
          if (U.pendingBranch) {
            U.effects.push(...O), W = !0;
            break
          }
          U = U.parent
        }!W && !Q && af(O), v.effects = [], D && e && e.pendingBranch && y === e.pendingId && (e.deps--, e.deps === 0 && !E && e.resolve()), Ca(R, "onResolve")
      },
      fallback(C) {
        if (!v.pendingBranch) return;
        const {
          vnode: E,
          activeBranch: R,
          parentComponent: A,
          container: P,
          namespace: V
        } = v;
        Ca(E, "onFallback");
        const O = g(R),
          Y = () => {
            v.isInFallback && (f(null, C, P, O, A, null, V, a, l), qs(v, C))
          },
          q = C.transition && C.transition.mode === "out-in";
        q && (R.transition.afterLeave = Y), v.isInFallback = !0, h(R, A, null, !0), q || Y()
      },
      move(C, E, R) {
        v.activeBranch && d(v.activeBranch, C, E, R), v.container = C
      },
      next() {
        return v.activeBranch && g(v.activeBranch)
      },
      registerDep(C, E, R) {
        const A = !!v.pendingBranch;
        A && v.deps++;
        const P = C.vnode.el;
        C.asyncDep.catch(V => {
          To(V, C, 0)
        }).then(V => {
          if (C.isUnmounted || v.isUnmounted || v.pendingId !== C.suspenseId) return;
          C.asyncResolved = !0;
          const {
            vnode: O
          } = C;
          mf(C, V, !1), P && (O.el = P);
          const Y = !P && C.subTree.el;
          E(C, O, p(P || C.subTree.el), P ? null : g(C.subTree), v, o, R), Y && b(Y), Vu(C, O.el), A && --v.deps === 0 && v.resolve()
        })
      },
      unmount(C, E) {
        v.isUnmounted = !0, v.activeBranch && h(v.activeBranch, n, C, E), v.pendingBranch && h(v.pendingBranch, n, C, E)
      }
    };
  return v
}

function L1(t, e, n, r, i, s, o, a, l) {
  const u = e.suspense = i0(e, r, n, t.parentNode, document.createElement("div"), null, i, s, o, a, !0),
    c = l(t, u.pendingBranch = e.ssContent, n, u, s, o);
  return u.deps === 0 && u.resolve(!1, !0), c
}

function O1(t) {
  const {
    shapeFlag: e,
    children: n
  } = t, r = e & 32;
  t.ssContent = np(r ? n.default : n), t.ssFallback = r ? np(n.fallback) : st(Pt)
}

function np(t) {
  let e;
  if (he(t)) {
    const n = oo && t._c;
    n && (t._d = !1, Cr()), t = t(), n && (t._d = !0, e = gn, o0())
  }
  return oe(t) && (t = T1(t)), t = An(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n => n !== t)), t
}

function s0(t, e) {
  e && e.pendingBranch ? oe(t) ? e.effects.push(...t) : e.effects.push(t) : af(t)
}

function qs(t, e) {
  t.activeBranch = e;
  const {
    vnode: n,
    parentComponent: r
  } = t;
  let i = e.el;
  for (; !i && e.component;) e = e.component.subTree, i = e.el;
  n.el = i, r && r.subTree === n && (r.vnode.el = i, Vu(r, i))
}

function F1(t) {
  const e = t.props && t.props.suspensible;
  return e != null && e !== !1
}
const nn = Symbol.for("v-fgt"),
  Ei = Symbol.for("v-txt"),
  Pt = Symbol.for("v-cmt"),
  Zo = Symbol.for("v-stc"),
  ea = [];
let gn = null;

function Cr(t = !1) {
  ea.push(gn = t ? null : [])
}

function o0() {
  ea.pop(), gn = ea[ea.length - 1] || null
}
let oo = 1;

function rp(t, e = !1) {
  oo += t, t < 0 && gn && e && (gn.hasOnce = !0)
}

function a0(t) {
  return t.dynamicChildren = oo > 0 ? gn || Ws : null, o0(), oo > 0 && gn && gn.push(t), t
}

function M1(t, e, n, r, i, s) {
  return a0(u0(t, e, n, r, i, s, !0))
}

function gi(t, e, n, r, i) {
  return a0(st(t, e, n, r, i, !0))
}

function ao(t) {
  return t ? t.__v_isVNode === !0 : !1
}

function sr(t, e) {
  return t.type === e.type && t.key === e.key
}
const l0 = ({
    key: t
  }) => t ?? null,
  Ll = ({
    ref: t,
    ref_key: e,
    ref_for: n
  }) => (typeof t == "number" && (t = "" + t), t != null ? Xe(t) || at(t) || he(t) ? {
    i: ln,
    r: t,
    k: e,
    f: !!n
  } : t : null);

function u0(t, e = null, n = null, r = 0, i = null, s = t === nn ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && l0(e),
    ref: e && Ll(e),
    scopeId: Em,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ln
  };
  return a ? (jh(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Xe(n) ? 8 : 16), oo > 0 && !o && gn && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && gn.push(l), l
}
const st = N1;

function N1(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === $m) && (t = Pt), ao(t)) {
    const a = ti(t, e, !0);
    return n && jh(a, n), oo > 0 && !s && gn && (a.shapeFlag & 6 ? gn[gn.indexOf(t)] = a : gn.push(a)), a.patchFlag = -2, a
  }
  if (K1(t) && (t = t.__vccOpts), e) {
    e = c0(e);
    let {
      class: a,
      style: l
    } = e;
    a && !Xe(a) && (e.class = Fu(a)), je(l) && (Mh(l) && !oe(l) && (l = ht({}, l)), e.style = Ou(l))
  }
  const o = Xe(t) ? 1 : tu(t) ? 128 : Tm(t) ? 64 : je(t) ? 4 : he(t) ? 2 : 0;
  return u0(t, e, n, r, i, o, s, !0)
}

function c0(t) {
  return t ? Mh(t) || Wm(t) ? ht({}, t) : t : null
}

function ti(t, e, n = !1, r = !1) {
  const {
    props: i,
    ref: s,
    patchFlag: o,
    children: a,
    transition: l
  } = t, u = e ? $1(i || {}, e) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && l0(u),
    ref: e && e.ref ? n && s ? oe(s) ? s.concat(Ll(e)) : [s, Ll(e)] : Ll(e) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: a,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== nn ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && ti(t.ssContent),
    ssFallback: t.ssFallback && ti(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && r && so(c, l.clone(c)), c
}

function f0(t = " ", e = 0) {
  return st(Ei, null, t, e)
}

function CL(t, e) {
  const n = st(Zo, null, t);
  return n.staticCount = e, n
}

function wL(t = "", e = !1) {
  return e ? (Cr(), gi(Pt, null, t)) : st(Pt, null, t)
}

function An(t) {
  return t == null || typeof t == "boolean" ? st(Pt) : oe(t) ? st(nn, null, t.slice()) : ao(t) ? hi(t) : st(Ei, null, String(t))
}

function hi(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : ti(t)
}

function jh(t, e) {
  let n = 0;
  const {
    shapeFlag: r
  } = t;
  if (e == null) e = null;
  else if (oe(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), jh(t, i()), i._c && (i._d = !0));
      return
    } else {
      n = 32;
      const i = e._;
      !i && !Wm(e) ? e._ctx = ln : i === 3 && ln && (ln.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
    }
  else he(e) ? (e = {
    default: e,
    _ctx: ln
  }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [f0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n
}

function $1(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class") e.class !== r.class && (e.class = Fu([e.class, r.class]));
      else if (i === "style") e.style = Ou([e.style, r.style]);
    else if (Va(i)) {
      const s = e[i],
        o = r[i];
      o && s !== o && !(oe(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o)
    } else i !== "" && (e[i] = r[i])
  }
  return e
}

function fn(t, e, n, r = null) {
  ur(t, e, 7, [n, r])
}
const I1 = Hm();
let B1 = 0;

function H1(t, e, n) {
  const r = t.type,
    i = (e ? e.appContext : t.appContext) || I1,
    s = {
      uid: B1++,
      vnode: t,
      type: r,
      parent: e,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Z_(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(i.provides),
      ids: e ? e.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ym(r, i),
      emitsOptions: n0(r, i),
      emit: null,
      emitted: null,
      propsDefaults: Me,
      inheritAttrs: r.inheritAttrs,
      ctx: Me,
      data: Me,
      props: Me,
      attrs: Me,
      slots: Me,
      refs: Me,
      setupState: Me,
      setupContext: null,
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
  }, s.root = e ? e.root : s, s.emit = w1.bind(null, s), t.ce && t.ce(s), s
}
let wt = null;
const Ni = () => wt || ln;
let nu, gf;
{
  const t = Lu(),
    e = (n, r) => {
      let i;
      return (i = t[n]) || (i = t[n] = []), i.push(r), s => {
        i.length > 1 ? i.forEach(o => o(s)) : i[0](s)
      }
    };
  nu = e("__VUE_INSTANCE_SETTERS__", n => wt = n), gf = e("__VUE_SSR_SETTERS__", n => lo = n)
}
const _s = t => {
    const e = wt;
    return nu(t), t.scope.on(), () => {
      t.scope.off(), nu(e)
    }
  },
  _f = () => {
    wt && wt.scope.off(), nu(null)
  };

function h0(t) {
  return t.vnode.shapeFlag & 4
}
let lo = !1;

function U1(t, e = !1, n = !1) {
  e && gf(e);
  const {
    props: r,
    children: i
  } = t.vnode, s = h0(t);
  f1(t, r, s, e), g1(t, i, n);
  const o = s ? V1(t, e) : void 0;
  return e && gf(!1), o
}

function V1(t, e) {
  const n = t.type;
  t.accessCache = Object.create(null), t.proxy = new Proxy(t.ctx, r1);
  const {
    setup: r
  } = n;
  if (r) {
    Oi();
    const i = t.setupContext = r.length > 1 ? W1(t) : null,
      s = _s(t),
      o = ja(r, t, 0, [t.props, i]),
      a = Sh(o);
    if (Fi(), s(), (a || t.sp) && !ss(t) && $h(t), a) {
      if (o.then(_f, _f), e) return o.then(l => {
        mf(t, l, e)
      }).catch(l => {
        To(l, t, 0)
      });
      t.asyncDep = o
    } else mf(t, o, e)
  } else d0(t, e)
}

function mf(t, e, n) {
  he(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : je(e) && (t.setupState = _m(e)), d0(t, n)
}
let ip;

function d0(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && ip && !r.render) {
      const i = r.template || Hh(t).template;
      if (i) {
        const {
          isCustomElement: s,
          compilerOptions: o
        } = t.appContext.config, {
          delimiters: a,
          compilerOptions: l
        } = r, u = ht(ht({
          isCustomElement: s,
          delimiters: a
        }, o), l);
        r.render = ip(i, u)
      }
    }
    t.render = r.render || kr
  } {
    const i = _s(t);
    Oi();
    try {
      i1(t)
    } finally {
      Fi(), i()
    }
  }
}
const j1 = {
  get(t, e) {
    return Ut(t, "get", ""), t[e]
  }
};

function W1(t) {
  const e = n => {
    t.exposed = n || {}
  };
  return {
    attrs: new Proxy(t.attrs, j1),
    slots: t.slots,
    emit: t.emit,
    expose: e
  }
}

function ju(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(_m(wv(t.exposed)), {
    get(e, n) {
      if (n in e) return e[n];
      if (n in Qo) return Qo[n](t)
    },
    has(e, n) {
      return n in e || n in Qo
    }
  })) : t.proxy
}

function yf(t, e = !0) {
  return he(t) ? t.displayName || t.name : t.name || e && t.__name
}

function K1(t) {
  return he(t) && "__vccOpts" in t
}
const _t = (t, e) => Lv(t, e, lo);

function Vn(t, e, n) {
  const r = arguments.length;
  return r === 2 ? je(e) && !oe(e) ? ao(e) ? st(t, null, [e]) : st(t, e) : st(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ao(n) && (n = [n]), st(t, e, n))
}
const p0 = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Df;
const sp = typeof window < "u" && window.trustedTypes;
if (sp) try {
  Df = sp.createPolicy("vue", {
    createHTML: t => t
  })
} catch {}
const g0 = Df ? t => Df.createHTML(t) : t => t,
  Y1 = "http://www.w3.org/2000/svg",
  z1 = "http://www.w3.org/1998/Math/MathML",
  Ur = typeof document < "u" ? document : null,
  op = Ur && Ur.createElement("template"),
  G1 = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null)
    },
    remove: t => {
      const e = t.parentNode;
      e && e.removeChild(t)
    },
    createElement: (t, e, n, r) => {
      const i = e === "svg" ? Ur.createElementNS(Y1, t) : e === "mathml" ? Ur.createElementNS(z1, t) : n ? Ur.createElement(t, {
        is: n
      }) : Ur.createElement(t);
      return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i
    },
    createText: t => Ur.createTextNode(t),
    createComment: t => Ur.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => Ur.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, r, i, s) {
      const o = n ? n.previousSibling : e.lastChild;
      if (i && (i === s || i.nextSibling))
        for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)););
      else {
        op.innerHTML = g0(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
        const a = op.content;
        if (r === "svg" || r === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild;) a.appendChild(l.firstChild);
          a.removeChild(l)
        }
        e.insertBefore(a, n)
      }
      return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
  },
  oi = "transition",
  Lo = "animation",
  wa = Symbol("_vtc"),
  _0 = {
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
  },
  X1 = ht({}, km, _0),
  q1 = t => (t.displayName = "Transition", t.props = X1, t),
  J1 = q1((t, {
    slots: e
  }) => Vn(Hv, Q1(t), e)),
  Yi = (t, e = []) => {
    oe(t) ? t.forEach(n => n(...e)) : t && t(...e)
  },
  ap = t => t ? oe(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function Q1(t) {
  const e = {};
  for (const O in t) O in _0 || (e[O] = t[O]);
  if (t.css === !1) return e;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: u = o,
    appearToClass: c = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = t, g = Z1(i), p = g && g[0], b = g && g[1], {
    onBeforeEnter: y,
    onEnter: D,
    onEnterCancelled: _,
    onLeave: m,
    onLeaveCancelled: v,
    onBeforeAppear: C = y,
    onAppear: E = D,
    onAppearCancelled: R = _
  } = e, A = (O, Y, q, Q) => {
    O._enterCancelled = Q, zi(O, Y ? c : a), zi(O, Y ? u : o), q && q()
  }, P = (O, Y) => {
    O._isLeaving = !1, zi(O, f), zi(O, h), zi(O, d), Y && Y()
  }, V = O => (Y, q) => {
    const Q = O ? E : D,
      U = () => A(Y, O, q);
    Yi(Q, [Y, U]), lp(() => {
      zi(Y, O ? l : s), Ir(Y, O ? c : a), ap(Q) || up(Y, r, p, U)
    })
  };
  return ht(e, {
    onBeforeEnter(O) {
      Yi(y, [O]), Ir(O, s), Ir(O, o)
    },
    onBeforeAppear(O) {
      Yi(C, [O]), Ir(O, l), Ir(O, u)
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(O, Y) {
      O._isLeaving = !0;
      const q = () => P(O, Y);
      Ir(O, f), O._enterCancelled ? (Ir(O, d), hp()) : (hp(), Ir(O, d)), lp(() => {
        O._isLeaving && (zi(O, f), Ir(O, h), ap(m) || up(O, r, b, q))
      }), Yi(m, [O, q])
    },
    onEnterCancelled(O) {
      A(O, !1, void 0, !0), Yi(_, [O])
    },
    onAppearCancelled(O) {
      A(O, !0, void 0, !0), Yi(R, [O])
    },
    onLeaveCancelled(O) {
      P(O), Yi(v, [O])
    }
  })
}

function Z1(t) {
  if (t == null) return null;
  if (je(t)) return [Cc(t.enter), Cc(t.leave)];
  {
    const e = Cc(t);
    return [e, e]
  }
}

function Cc(t) {
  return X_(t)
}

function Ir(t, e) {
  e.split(/\s+/).forEach(n => n && t.classList.add(n)), (t[wa] || (t[wa] = new Set)).add(e)
}

function zi(t, e) {
  e.split(/\s+/).forEach(r => r && t.classList.remove(r));
  const n = t[wa];
  n && (n.delete(e), n.size || (t[wa] = void 0))
}

function lp(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t)
  })
}
let eE = 0;

function up(t, e, n, r) {
  const i = t._endId = ++eE,
    s = () => {
      i === t._endId && r()
    };
  if (n != null) return setTimeout(s, n);
  const {
    type: o,
    timeout: a,
    propCount: l
  } = tE(t, e);
  if (!o) return r();
  const u = o + "end";
  let c = 0;
  const f = () => {
      t.removeEventListener(u, d), s()
    },
    d = h => {
      h.target === t && ++c >= l && f()
    };
  setTimeout(() => {
    c < l && f()
  }, a + 1), t.addEventListener(u, d)
}

function tE(t, e) {
  const n = window.getComputedStyle(t),
    r = g => (n[g] || "").split(", "),
    i = r(`${oi}Delay`),
    s = r(`${oi}Duration`),
    o = cp(i, s),
    a = r(`${Lo}Delay`),
    l = r(`${Lo}Duration`),
    u = cp(a, l);
  let c = null,
    f = 0,
    d = 0;
  e === oi ? o > 0 && (c = oi, f = o, d = s.length) : e === Lo ? u > 0 && (c = Lo, f = u, d = l.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? oi : Lo : null, d = c ? c === oi ? s.length : l.length : 0);
  const h = c === oi && /\b(transform|all)(,|$)/.test(r(`${oi}Property`).toString());
  return {
    type: c,
    timeout: f,
    propCount: d,
    hasTransform: h
  }
}

function cp(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max(...e.map((n, r) => fp(n) + fp(t[r])))
}

function fp(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function hp() {
  return document.body.offsetHeight
}

function nE(t, e, n) {
  const r = t[wa];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
const dp = Symbol("_vod"),
  rE = Symbol("_vsh"),
  iE = Symbol(""),
  sE = /(^|;)\s*display\s*:/;

function oE(t, e, n) {
  const r = t.style,
    i = Xe(n);
  let s = !1;
  if (n && !i) {
    if (e)
      if (Xe(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Ol(r, a, "")
        } else
          for (const o in e) n[o] == null && Ol(r, o, "");
    for (const o in n) o === "display" && (s = !0), Ol(r, o, n[o])
  } else if (i) {
    if (e !== n) {
      const o = r[iE];
      o && (n += ";" + o), r.cssText = n, s = sE.test(n)
    }
  } else e && t.removeAttribute("style");
  dp in t && (t[dp] = s ? r.display : "", t[rE] && (r.display = "none"))
}
const pp = /\s*!important$/;

function Ol(t, e, n) {
  if (oe(n)) n.forEach(r => Ol(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    const r = aE(t, e);
    pp.test(n) ? t.setProperty(Li(r), n.replace(pp, ""), "important") : t[r] = n
  }
}
const gp = ["Webkit", "Moz", "ms"],
  wc = {};

function aE(t, e) {
  const n = wc[e];
  if (n) return n;
  let r = Fn(e);
  if (r !== "filter" && r in t) return wc[e] = r;
  r = Ru(r);
  for (let i = 0; i < gp.length; i++) {
    const s = gp[i] + r;
    if (s in t) return wc[e] = s
  }
  return e
}
const _p = "http://www.w3.org/1999/xlink";

function mp(t, e, n, r, i, s = nv(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(_p, e.slice(6, e.length)) : t.setAttributeNS(_p, e, n) : n == null || s && !q_(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : Lr(n) ? String(n) : n)
}

function yp(t, e, n, r, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? g0(n) : n);
    return
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const a = s === "OPTION" ? t.getAttribute("value") || "" : t.value,
      l = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
    (a !== l || !("_value" in t)) && (t.value = l), n == null && t.removeAttribute(e), t._value = n;
    return
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof t[e];
    a === "boolean" ? n = q_(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0)
  }
  try {
    t[e] = n
  } catch {}
  o && t.removeAttribute(i || e)
}

function Yr(t, e, n, r) {
  t.addEventListener(e, n, r)
}

function lE(t, e, n, r) {
  t.removeEventListener(e, n, r)
}
const Dp = Symbol("_vei");

function uE(t, e, n, r, i = null) {
  const s = t[Dp] || (t[Dp] = {}),
    o = s[e];
  if (r && o) o.value = r;
  else {
    const [a, l] = cE(e);
    if (r) {
      const u = s[e] = dE(r, i);
      Yr(t, a, u, l)
    } else o && (lE(t, a, o, l), s[e] = void 0)
  }
}
const bp = /(?:Once|Passive|Capture)$/;

function cE(t) {
  let e;
  if (bp.test(t)) {
    e = {};
    let r;
    for (; r = t.match(bp);) t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0
  }
  return [t[2] === ":" ? t.slice(3) : Li(t.slice(2)), e]
}
let Tc = 0;
const fE = Promise.resolve(),
  hE = () => Tc || (fE.then(() => Tc = 0), Tc = Date.now());

function dE(t, e) {
  const n = r => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    ur(pE(r, n.value), e, 5, [r])
  };
  return n.value = t, n.attached = hE(), n
}

function pE(t, e) {
  if (oe(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0
    }, e.map(r => i => !i._stopped && r && r(i))
  } else return e
}
const vp = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
  gE = (t, e, n, r, i, s) => {
    const o = i === "svg";
    e === "class" ? nE(t, r, o) : e === "style" ? oE(t, n, r) : Va(e) ? wh(e) || uE(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : _E(t, e, r, o)) ? (yp(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && mp(t, e, r, o, s, e !== "value")) : t._isVueCE && (/[A-Z]/.test(e) || !Xe(r)) ? yp(t, Fn(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), mp(t, e, r, o))
  };

function _E(t, e, n, r) {
  if (r) return !!(e === "innerHTML" || e === "textContent" || e in t && vp(e) && he(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
  }
  return vp(e) && Xe(n) ? !1 : e in t
}
const ki = t => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return oe(e) ? n => zs(e, n) : e
};

function mE(t) {
  t.target.composing = !0
}

function Ep(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}
const zn = Symbol("_assign"),
  Cp = {
    created(t, {
      modifiers: {
        lazy: e,
        trim: n,
        number: r
      }
    }, i) {
      t[zn] = ki(i);
      const s = r || i.props && i.props.type === "number";
      Yr(t, e ? "change" : "input", o => {
        if (o.target.composing) return;
        let a = t.value;
        n && (a = a.trim()), s && (a = Yl(a)), t[zn](a)
      }), n && Yr(t, "change", () => {
        t.value = t.value.trim()
      }), e || (Yr(t, "compositionstart", mE), Yr(t, "compositionend", Ep), Yr(t, "change", Ep))
    },
    mounted(t, {
      value: e
    }) {
      t.value = e ?? ""
    },
    beforeUpdate(t, {
      value: e,
      oldValue: n,
      modifiers: {
        lazy: r,
        trim: i,
        number: s
      }
    }, o) {
      if (t[zn] = ki(o), t.composing) return;
      const a = (s || t.type === "number") && !/^0\d/.test(t.value) ? Yl(t.value) : t.value,
        l = e ?? "";
      a !== l && (document.activeElement === t && t.type !== "range" && (r && e === n || i && t.value.trim() === l) || (t.value = l))
    }
  },
  yE = {
    deep: !0,
    created(t, e, n) {
      t[zn] = ki(n), Yr(t, "change", () => {
        const r = t._modelValue,
          i = uo(t),
          s = t.checked,
          o = t[zn];
        if (oe(r)) {
          const a = kh(r, i),
            l = a !== -1;
          if (s && !l) o(r.concat(i));
          else if (!s && l) {
            const u = [...r];
            u.splice(a, 1), o(u)
          }
        } else if (Co(r)) {
          const a = new Set(r);
          s ? a.add(i) : a.delete(i), o(a)
        } else o(m0(t, s))
      })
    },
    mounted: wp,
    beforeUpdate(t, e, n) {
      t[zn] = ki(n), wp(t, e, n)
    }
  };

function wp(t, {
  value: e,
  oldValue: n
}, r) {
  t._modelValue = e;
  let i;
  if (oe(e)) i = kh(e, r.props.value) > -1;
  else if (Co(e)) i = e.has(r.props.value);
  else {
    if (e === n) return;
    i = gs(e, m0(t, !0))
  }
  t.checked !== i && (t.checked = i)
}
const DE = {
    created(t, {
      value: e
    }, n) {
      t.checked = gs(e, n.props.value), t[zn] = ki(n), Yr(t, "change", () => {
        t[zn](uo(t))
      })
    },
    beforeUpdate(t, {
      value: e,
      oldValue: n
    }, r) {
      t[zn] = ki(r), e !== n && (t.checked = gs(e, r.props.value))
    }
  },
  bE = {
    deep: !0,
    created(t, {
      value: e,
      modifiers: {
        number: n
      }
    }, r) {
      const i = Co(e);
      Yr(t, "change", () => {
        const s = Array.prototype.filter.call(t.options, o => o.selected).map(o => n ? Yl(uo(o)) : uo(o));
        t[zn](t.multiple ? i ? new Set(s) : s : s[0]), t._assigning = !0, Es(() => {
          t._assigning = !1
        })
      }), t[zn] = ki(r)
    },
    mounted(t, {
      value: e
    }) {
      Tp(t, e)
    },
    beforeUpdate(t, e, n) {
      t[zn] = ki(n)
    },
    updated(t, {
      value: e
    }) {
      t._assigning || Tp(t, e)
    }
  };

function Tp(t, e) {
  const n = t.multiple,
    r = oe(e);
  if (!(n && !r && !Co(e))) {
    for (let i = 0, s = t.options.length; i < s; i++) {
      const o = t.options[i],
        a = uo(o);
      if (n)
        if (r) {
          const l = typeof a;
          l === "string" || l === "number" ? o.selected = e.some(u => String(u) === String(a)) : o.selected = kh(e, a) > -1
        } else o.selected = e.has(a);
      else if (gs(uo(o), e)) {
        t.selectedIndex !== i && (t.selectedIndex = i);
        return
      }
    }!n && t.selectedIndex !== -1 && (t.selectedIndex = -1)
  }
}

function uo(t) {
  return "_value" in t ? t._value : t.value
}

function m0(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e
}
const TL = {
  created(t, e, n) {
    il(t, e, n, null, "created")
  },
  mounted(t, e, n) {
    il(t, e, n, null, "mounted")
  },
  beforeUpdate(t, e, n, r) {
    il(t, e, n, r, "beforeUpdate")
  },
  updated(t, e, n, r) {
    il(t, e, n, r, "updated")
  }
};

function vE(t, e) {
  switch (t) {
    case "SELECT":
      return bE;
    case "TEXTAREA":
      return Cp;
    default:
      switch (e) {
        case "checkbox":
          return yE;
        case "radio":
          return DE;
        default:
          return Cp
      }
  }
}

function il(t, e, n, r, i) {
  const o = vE(t.tagName, n.props && n.props.type)[i];
  o && o(t, e, n, r)
}
const EE = ["ctrl", "shift", "alt", "meta"],
  CE = {
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
    exact: (t, e) => EE.some(n => t[`${n}Key`] && !e.includes(n))
  },
  SL = (t, e) => {
    const n = t._withMods || (t._withMods = {}),
      r = e.join(".");
    return n[r] || (n[r] = (i, ...s) => {
      for (let o = 0; o < e.length; o++) {
        const a = CE[e[o]];
        if (a && a(i, e)) return
      }
      return t(i, ...s)
    })
  },
  y0 = ht({
    patchProp: gE
  }, G1);
let ta, Sp = !1;

function wE() {
  return ta || (ta = m1(y0))
}

function TE() {
  return ta = Sp ? ta : y1(y0), Sp = !0, ta
}
const SE = (...t) => {
    const e = wE().createApp(...t),
      {
        mount: n
      } = e;
    return e.mount = r => {
      const i = b0(r);
      if (!i) return;
      const s = e._component;
      !he(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
      const o = n(i, !1, D0(i));
      return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
    }, e
  },
  xE = (...t) => {
    const e = TE().createApp(...t),
      {
        mount: n
      } = e;
    return e.mount = r => {
      const i = b0(r);
      if (i) return n(i, !0, D0(i))
    }, e
  };

function D0(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
}

function b0(t) {
  return Xe(t) ? document.querySelector(t) : t
}
const kE = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  AE = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  PE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function RE(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    LE(t);
    return
  }
  return e
}

function LE(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
}

function Ta(t, e = {}) {
  if (typeof t != "string") return t;
  if (t[0] === '"' && t[t.length - 1] === '"' && t.indexOf("\\") === -1) return t.slice(1, -1);
  const n = t.trim();
  if (n.length <= 9) switch (n.toLowerCase()) {
    case "true":
      return !0;
    case "false":
      return !1;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY
  }
  if (!PE.test(t)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return t
  }
  try {
    if (kE.test(t) || AE.test(t)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, RE)
    }
    return JSON.parse(t)
  } catch (r) {
    if (e.strict) throw r;
    return t
  }
}
const OE = /#/g,
  FE = /&/g,
  ME = /\//g,
  NE = /=/g,
  Wh = /\+/g,
  $E = /%5e/gi,
  IE = /%60/gi,
  BE = /%7c/gi,
  HE = /%20/gi;

function UE(t) {
  return encodeURI("" + t).replace(BE, "|")
}

function bf(t) {
  return UE(typeof t == "string" ? t : JSON.stringify(t)).replace(Wh, "%2B").replace(HE, "+").replace(OE, "%23").replace(FE, "%26").replace(IE, "`").replace($E, "^").replace(ME, "%2F")
}

function Sc(t) {
  return bf(t).replace(NE, "%3D")
}

function ru(t = "") {
  try {
    return decodeURIComponent("" + t)
  } catch {
    return "" + t
  }
}

function VE(t) {
  return ru(t.replace(Wh, " "))
}

function jE(t) {
  return ru(t.replace(Wh, " "))
}

function v0(t = "") {
  const e = Object.create(null);
  t[0] === "?" && (t = t.slice(1));
  for (const n of t.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const i = VE(r[1]);
    if (i === "__proto__" || i === "constructor") continue;
    const s = jE(r[2] || "");
    e[i] === void 0 ? e[i] = s : Array.isArray(e[i]) ? e[i].push(s) : e[i] = [e[i], s]
  }
  return e
}

function WE(t, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(n => `${Sc(t)}=${bf(n)}`).join("&") : `${Sc(t)}=${bf(e)}` : Sc(t)
}

function KE(t) {
  return Object.keys(t).filter(e => t[e] !== void 0).map(e => WE(e, t[e])).filter(Boolean).join("&")
}
const YE = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  zE = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  GE = /^([/\\]\s*){2,}[^/\\]/,
  XE = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  qE = /\/$|\/\?|\/#/,
  JE = /^\.?\//;

function Fr(t, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }), e.strict ? YE.test(t) : zE.test(t) || (e.acceptRelative ? GE.test(t) : !1)
}

function QE(t) {
  return !!t && XE.test(t)
}

function vf(t = "", e) {
  return e ? qE.test(t) : t.endsWith("/")
}

function Wu(t = "", e) {
  if (!e) return (vf(t) ? t.slice(0, -1) : t) || "/";
  if (!vf(t, !0)) return t || "/";
  let n = t,
    r = "";
  const i = t.indexOf("#");
  i !== -1 && (n = t.slice(0, i), r = t.slice(i));
  const [s, ...o] = n.split("?");
  return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function iu(t = "", e) {
  if (!e) return t.endsWith("/") ? t : t + "/";
  if (vf(t, !0)) return t || "/";
  let n = t,
    r = "";
  const i = t.indexOf("#");
  if (i !== -1 && (n = t.slice(0, i), r = t.slice(i), !n)) return r;
  const [s, ...o] = n.split("?");
  return s + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function ZE(t = "") {
  return t.startsWith("/")
}

function xp(t = "") {
  return ZE(t) ? t : "/" + t
}

function eC(t, e) {
  if (C0(e) || Fr(t)) return t;
  const n = Wu(e);
  return t.startsWith(n) ? t : So(n, t)
}

function kp(t, e) {
  if (C0(e)) return t;
  const n = Wu(e);
  if (!t.startsWith(n)) return t;
  const r = t.slice(n.length);
  return r[0] === "/" ? r : "/" + r
}

function E0(t, e) {
  const n = nC(t),
    r = {
      ...v0(n.search),
      ...e
    };
  return n.search = KE(r), rC(n)
}

function C0(t) {
  return !t || t === "/"
}

function tC(t) {
  return t && t !== "/"
}

function So(t, ...e) {
  let n = t || "";
  for (const r of e.filter(i => tC(i)))
    if (n) {
      const i = r.replace(JE, "");
      n = iu(n) + i
    } else n = r;
  return n
}

function w0(...t) {
  var o, a, l, u;
  const e = /\/(?!\/)/,
    n = t.filter(Boolean),
    r = [];
  let i = 0;
  for (const c of n)
    if (!(!c || c === "/")) {
      for (const [f, d] of c.split(e).entries())
        if (!(!d || d === ".")) {
          if (d === "..") {
            if (r.length === 1 && Fr(r[0])) continue;
            r.pop(), i--;
            continue
          }
          if (f === 1 && ((o = r[r.length - 1]) != null && o.endsWith(":/"))) {
            r[r.length - 1] += "/" + d;
            continue
          }
          r.push(d), i++
        }
    } let s = r.join("/");
  return i >= 0 ? (a = n[0]) != null && a.startsWith("/") && !s.startsWith("/") ? s = "/" + s : (l = n[0]) != null && l.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * i) + s, (u = n[n.length - 1]) != null && u.endsWith("/") && !s.endsWith("/") && (s += "/"), s
}

function Ef(t, e, n = {}) {
  return n.trailingSlash || (t = iu(t), e = iu(e)), n.leadingSlash || (t = xp(t), e = xp(e)), n.encoding || (t = ru(t), e = ru(e)), t === e
}
const T0 = Symbol.for("ufo:protocolRelative");

function nC(t = "", e) {
  const n = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, d = ""] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: d,
      href: f + d,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!Fr(t, {
      acceptRelative: !0
    })) return Cf(t);
  const [, r = "", i, s = ""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, o = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
  r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
  const {
    pathname: l,
    search: u,
    hash: c
  } = Cf(a);
  return {
    protocol: r.toLowerCase(),
    auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
    host: o,
    pathname: l,
    search: u,
    hash: c,
    [T0]: !r
  }
}

function Cf(t = "") {
  const [e = "", n = "", r = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: n,
    hash: r
  }
}

function rC(t) {
  const e = t.pathname || "",
    n = t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : "",
    r = t.hash || "",
    i = t.auth ? t.auth + "@" : "",
    s = t.host || "";
  return (t.protocol || t[T0] ? (t.protocol || "") + "//" : "") + i + s + e + n + r
}
class iC extends Error {
  constructor(e, n) {
    super(e, n), this.name = "FetchError", n != null && n.cause && !this.cause && (this.cause = n.cause)
  }
}

function sC(t) {
  var l, u, c, f, d;
  const e = ((l = t.error) == null ? void 0 : l.message) || ((u = t.error) == null ? void 0 : u.toString()) || "",
    n = ((c = t.request) == null ? void 0 : c.method) || ((f = t.options) == null ? void 0 : f.method) || "GET",
    r = ((d = t.request) == null ? void 0 : d.url) || String(t.request) || "/",
    i = `[${n}] ${JSON.stringify(r)}`,
    s = t.response ? `${t.response.status} ${t.response.statusText}` : "<no response>",
    o = `${i}: ${s}${e?` ${e}`:""}`,
    a = new iC(o, t.error ? {
      cause: t.error
    } : void 0);
  for (const h of ["request", "options", "response"]) Object.defineProperty(a, h, {
    get() {
      return t[h]
    }
  });
  for (const [h, g] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(a, h, {
    get() {
      return t.response && t.response[g]
    }
  });
  return a
}
const oC = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Ap(t = "GET") {
  return oC.has(t.toUpperCase())
}

function aC(t) {
  if (t === void 0) return !1;
  const e = typeof t;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.buffer ? !1 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
}
const lC = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  uC = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function cC(t = "") {
  if (!t) return "json";
  const e = t.split(";").shift() || "";
  return uC.test(e) ? "json" : lC.has(e) || e.startsWith("text/") ? "text" : "blob"
}

function fC(t, e, n, r) {
  const i = hC((e == null ? void 0 : e.headers) ?? (t == null ? void 0 : t.headers), n == null ? void 0 : n.headers, r);
  let s;
  return (n != null && n.query || n != null && n.params || e != null && e.params || e != null && e.query) && (s = {
    ...n == null ? void 0 : n.params,
    ...n == null ? void 0 : n.query,
    ...e == null ? void 0 : e.params,
    ...e == null ? void 0 : e.query
  }), {
    ...n,
    ...e,
    query: s,
    params: s,
    headers: i
  }
}

function hC(t, e, n) {
  if (!e) return new n(t);
  const r = new n(e);
  if (t)
    for (const [i, s] of Symbol.iterator in t || Array.isArray(t) ? t : new n(t)) r.set(i, s);
  return r
}
async function sl(t, e) {
  if (e)
    if (Array.isArray(e))
      for (const n of e) await n(t);
    else await e(t)
}
const dC = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  pC = new Set([101, 204, 205, 304]);

function S0(t = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController
  } = t;
  async function i(a) {
    const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
    if (a.options.retry !== !1 && !l) {
      let c;
      typeof a.options.retry == "number" ? c = a.options.retry : c = Ap(a.options.method) ? 0 : 1;
      const f = a.response && a.response.status || 500;
      if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : dC.has(f))) {
        const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
        return d > 0 && await new Promise(h => setTimeout(h, d)), s(a.request, {
          ...a.options,
          retry: c - 1
        })
      }
    }
    const u = sC(a);
    throw Error.captureStackTrace && Error.captureStackTrace(u, s), u
  }
  const s = async function(l, u = {}) {
    const c = {
      request: l,
      options: fC(l, u, t.defaults, n),
      response: void 0,
      error: void 0
    };
    c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await sl(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = eC(c.request, c.options.baseURL)), c.options.query && (c.request = E0(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && Ap(c.options.method) && (aC(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
    let f;
    if (!c.options.signal && c.options.timeout) {
      const h = new r;
      f = setTimeout(() => {
        const g = new Error("[TimeoutError]: The operation was aborted due to timeout");
        g.name = "TimeoutError", g.code = 23, h.abort(g)
      }, c.options.timeout), c.options.signal = h.signal
    }
    try {
      c.response = await e(c.request, c.options)
    } catch (h) {
      return c.error = h, c.options.onRequestError && await sl(c, c.options.onRequestError), await i(c)
    } finally {
      f && clearTimeout(f)
    }
    if ((c.response.body || c.response._bodyInit) && !pC.has(c.response.status) && c.options.method !== "HEAD") {
      const h = (c.options.parseResponse ? "json" : c.options.responseType) || cC(c.response.headers.get("content-type") || "");
      switch (h) {
        case "json": {
          const g = await c.response.text(),
            p = c.options.parseResponse || Ta;
          c.response._data = p(g);
          break
        }
        case "stream": {
          c.response._data = c.response.body || c.response._bodyInit;
          break
        }
        default:
          c.response._data = await c.response[h]()
      }
    }
    return c.options.onResponse && await sl(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await sl(c, c.options.onResponseError), await i(c)) : c.response
  }, o = async function(l, u) {
    return (await s(l, u))._data
  };
  return o.raw = s, o.native = (...a) => e(...a), o.create = (a = {}, l = {}) => S0({
    ...t,
    ...l,
    defaults: {
      ...t.defaults,
      ...l.defaults,
      ...a
    }
  }), o
}
const su = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object")
  }(),
  gC = su.fetch ? (...t) => su.fetch(...t) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
  _C = su.Headers,
  mC = su.AbortController,
  yC = S0({
    fetch: gC,
    Headers: _C,
    AbortController: mC
  }),
  DC = yC,
  bC = () => {
    var t;
    return ((t = window == null ? void 0 : window.__NUXT__) == null ? void 0 : t.config) || {}
  },
  ou = bC().app,
  vC = () => ou.baseURL,
  EC = () => ou.buildAssetsDir,
  Kh = (...t) => w0(x0(), EC(), ...t),
  x0 = (...t) => {
    const e = ou.cdnURL || ou.baseURL;
    return t.length ? w0(e, ...t) : e
  };
globalThis.__buildAssetsURL = Kh, globalThis.__publicAssetsURL = x0;
globalThis.$fetch || (globalThis.$fetch = DC.create({
  baseURL: vC()
}));

function wf(t, e = {}, n) {
  for (const r in t) {
    const i = t[r],
      s = n ? `${n}:${r}` : r;
    typeof i == "object" && i !== null ? wf(i, e, s) : typeof i == "function" && (e[s] = i)
  }
  return e
}
const CC = {
    run: t => t()
  },
  wC = () => CC,
  k0 = typeof console.createTask < "u" ? console.createTask : wC;

function TC(t, e) {
  const n = e.shift(),
    r = k0(n);
  return t.reduce((i, s) => i.then(() => r.run(() => s(...e))), Promise.resolve())
}

function SC(t, e) {
  const n = e.shift(),
    r = k0(n);
  return Promise.all(t.map(i => r.run(() => i(...e))))
}

function xc(t, e) {
  for (const n of [...t]) n(e)
}
class xC {
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
    const n = wf(e),
      r = Object.keys(n).map(i => this.hook(i, n[i]));
    return () => {
      for (const i of r.splice(0, r.length)) i()
    }
  }
  removeHooks(e) {
    const n = wf(e);
    for (const r in n) this.removeHook(r, n[r])
  }
  removeAllHooks() {
    for (const e in this._hooks) delete this._hooks[e]
  }
  callHook(e, ...n) {
    return n.unshift(e), this.callHookWith(TC, e, ...n)
  }
  callHookParallel(e, ...n) {
    return n.unshift(e), this.callHookWith(SC, e, ...n)
  }
  callHookWith(e, n, ...r) {
    const i = this._before || this._after ? {
      name: n,
      args: r,
      context: {}
    } : void 0;
    this._before && xc(this._before, i);
    const s = e(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise ? s.finally(() => {
      this._after && i && xc(this._after, i)
    }) : (this._after && i && xc(this._after, i), s)
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

function A0() {
  return new xC
}

function kC(t = {}) {
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
    if (i) {
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
    set: (o, a) => {
      a || r(o), e = o, n = !0
    },
    unset: () => {
      e = void 0, n = !1
    },
    call: (o, a) => {
      r(o), e = o;
      try {
        return i ? i.run(o, a) : a()
      } finally {
        n || (e = void 0)
      }
    },
    async callAsync(o, a) {
      e = o;
      const l = () => {
          e = o
        },
        u = () => e === o ? l : void 0;
      Tf.add(u);
      try {
        const c = i ? i.run(o, a) : a();
        return n || (e = void 0), await c
      } finally {
        Tf.delete(u)
      }
    }
  }
}

function AC(t = {}) {
  const e = {};
  return {
    get(n, r = {}) {
      return e[n] || (e[n] = kC({
        ...t,
        ...r
      })), e[n]
    }
  }
}
const au = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
  Pp = "__unctx__",
  PC = au[Pp] || (au[Pp] = AC()),
  RC = (t, e = {}) => PC.get(t, e),
  Rp = "__unctx_async_handlers__",
  Tf = au[Rp] || (au[Rp] = new Set);

function or(t) {
  const e = [];
  for (const i of Tf) {
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
const Sf = !1,
  LC = !1,
  xL = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: {
      visibility: !0
    }
  },
  kL = {
    value: null,
    errorValue: null,
    deep: !0
  },
  OC = null,
  FC = "#__nuxt",
  P0 = "nuxt-app",
  Lp = 36e5,
  MC = "vite:preloadError";

function R0(t = P0) {
  return RC(t, {
    asyncContext: !1
  })
}
const NC = "__nuxt_plugin";

function $C(t) {
  var i;
  let e = 0;
  const n = {
    _id: t.id || P0 || "nuxt-app",
    _scope: Ah(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.15.0"
      },
      get vue() {
        return n.vueApp.version
      }
    },
    payload: Gr({
      ...((i = t.ssrContext) == null ? void 0 : i.payload) || {},
      data: Gr({}),
      state: Mi({}),
      once: new Set,
      _errors: Gr({})
    }),
    static: {
      data: {}
    },
    runWithContext(s) {
      return n._scope.active && !Mu() ? n._scope.run(() => Op(n, s)) : Op(n, s)
    },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      e++;
      let s = !1;
      return () => {
        if (!s && (s = !0, e--, e === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
      }
    },
    _asyncDataPromises: {},
    _asyncData: Gr({}),
    _payloadRevivers: {},
    ...t
  };
  {
    const s = window.__NUXT__;
    if (s)
      for (const o in s) switch (o) {
        case "data":
        case "state":
        case "_errors":
          Object.assign(n.payload[o], s[o]);
          break;
        default:
          n.payload[o] = s[o]
      }
  }
  n.hooks = A0(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (s, o) => {
    const a = "$" + s;
    ol(n, a, o), ol(n.vueApp.config.globalProperties, a, o)
  }, ol(n.vueApp, "$nuxt", n), ol(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener(MC, o => {
      n.callHook("app:chunkError", {
        error: o.payload
      }), (n.isHydrating || o.payload.message.includes("Unable to preload CSS")) && o.preventDefault()
    }), window.useNuxtApp = window.useNuxtApp || Ue;
    const s = n.hook("app:error", (...o) => {
      console.error("[nuxt] error caught during app initialization", ...o)
    });
    n.hook("app:mounted", s)
  }
  const r = n.payload.config;
  return n.provide("config", r), n
}

function IC(t, e) {
  e.hooks && t.hooks.addHooks(e.hooks)
}
async function BC(t, e) {
  if (typeof e == "function") {
    const {
      provide: n
    } = await t.runWithContext(() => e(t)) || {};
    if (n && typeof n == "object")
      for (const r in n) t.provide(r, n[r])
  }
}
async function HC(t, e) {
  const n = [],
    r = [],
    i = [],
    s = [];
  let o = 0;
  async function a(l) {
    var c;
    const u = ((c = l.dependsOn) == null ? void 0 : c.filter(f => e.some(d => d._name === f) && !n.includes(f))) ?? [];
    if (u.length > 0) r.push([new Set(u), l]);
    else {
      const f = BC(t, l).then(async () => {
        l._name && (n.push(l._name), await Promise.all(r.map(async ([d, h]) => {
          d.has(l._name) && (d.delete(l._name), d.size === 0 && (o++, await a(h)))
        })))
      });
      l.parallel ? i.push(f.catch(d => s.push(d))) : await f
    }
  }
  for (const l of e) IC(t, l);
  for (const l of e) await a(l);
  if (await Promise.all(i), o)
    for (let l = 0; l < o; l++) await Promise.all(i);
  if (s.length) throw s[0]
}

function un(t) {
  if (typeof t == "function") return t;
  const e = t._name || t.name;
  return delete t.name, Object.assign(t.setup || (() => {}), t, {
    [NC]: !0,
    _name: e
  })
}

function Op(t, e, n) {
  const r = () => e();
  return R0(t._id).set(t), t.vueApp.runWithContext(r)
}

function UC(t) {
  var n;
  let e;
  return Um() && (e = (n = Ni()) == null ? void 0 : n.appContext.app.$nuxt), e = e || R0(t).tryUse(), e || null
}

function Ue(t) {
  const e = UC(t);
  if (!e) throw new Error("[nuxt] instance unavailable");
  return e
}

function Cn(t) {
  return Ue().$config
}

function ol(t, e, n) {
  Object.defineProperty(t, e, {
    get: () => n
  })
}

function VC(t, e) {
  if (typeof t != "string") throw new TypeError("argument str must be a string");
  const n = {},
    r = e || {},
    i = r.decode || jC;
  let s = 0;
  for (; s < t.length;) {
    const o = t.indexOf("=", s);
    if (o === -1) break;
    let a = t.indexOf(";", s);
    if (a === -1) a = t.length;
    else if (a < o) {
      s = t.lastIndexOf(";", o - 1) + 1;
      continue
    }
    const l = t.slice(s, o).trim();
    if (r != null && r.filter && !(r != null && r.filter(l))) {
      s = a + 1;
      continue
    }
    if (n[l] === void 0) {
      let u = t.slice(o + 1, a).trim();
      u.codePointAt(0) === 34 && (u = u.slice(1, -1)), n[l] = WC(u, i)
    }
    s = a + 1
  }
  return n
}

function jC(t) {
  return t.includes("%") ? decodeURIComponent(t) : t
}

function WC(t, e) {
  try {
    return e(t)
  } catch {
    return t
  }
}
const al = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;

function Fp(t, e, n) {
  const r = n || {},
    i = r.encode || encodeURIComponent;
  if (typeof i != "function") throw new TypeError("option encode is invalid");
  if (!al.test(t)) throw new TypeError("argument name is invalid");
  const s = i(e);
  if (s && !al.test(s)) throw new TypeError("argument val is invalid");
  let o = t + "=" + s;
  if (r.maxAge !== void 0 && r.maxAge !== null) {
    const a = r.maxAge - 0;
    if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a)
  }
  if (r.domain) {
    if (!al.test(r.domain)) throw new TypeError("option domain is invalid");
    o += "; Domain=" + r.domain
  }
  if (r.path) {
    if (!al.test(r.path)) throw new TypeError("option path is invalid");
    o += "; Path=" + r.path
  }
  if (r.expires) {
    if (!KC(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
    o += "; Expires=" + r.expires.toUTCString()
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.priority) switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
    case "low": {
      o += "; Priority=Low";
      break
    }
    case "medium": {
      o += "; Priority=Medium";
      break
    }
    case "high": {
      o += "; Priority=High";
      break
    }
    default:
      throw new TypeError("option priority is invalid")
  }
  if (r.sameSite) switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
    case !0: {
      o += "; SameSite=Strict";
      break
    }
    case "lax": {
      o += "; SameSite=Lax";
      break
    }
    case "strict": {
      o += "; SameSite=Strict";
      break
    }
    case "none": {
      o += "; SameSite=None";
      break
    }
    default:
      throw new TypeError("option sameSite is invalid")
  }
  return r.partitioned && (o += "; Partitioned"), o
}

function KC(t) {
  return Object.prototype.toString.call(t) === "[object Date]" || t instanceof Date
}

function YC(t, e) {
  return {
    ctx: {
      table: t
    },
    matchAll: n => O0(n, t)
  }
}

function L0(t) {
  const e = {};
  for (const n in t) e[n] = n === "dynamic" ? new Map(Object.entries(t[n]).map(([r, i]) => [r, L0(i)])) : new Map(Object.entries(t[n]));
  return e
}

function zC(t) {
  return YC(L0(t))
}

function O0(t, e, n) {
  t.endsWith("/") && (t = t.slice(0, -1) || "/");
  const r = [];
  for (const [s, o] of Mp(e.wildcard))(t === s || t.startsWith(s + "/")) && r.push(o);
  for (const [s, o] of Mp(e.dynamic))
    if (t.startsWith(s + "/")) {
      const a = "/" + t.slice(s.length).split("/").splice(2).join("/");
      r.push(...O0(a, o))
    } const i = e.static.get(t);
  return i && r.push(i), r.filter(Boolean)
}

function Mp(t) {
  return [...t.entries()].sort((e, n) => e[0].length - n[0].length)
}

function kc(t) {
  if (t === null || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0
}

function xf(t, e, n = ".", r) {
  if (!kc(e)) return xf(t, {}, n, r);
  const i = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor") continue;
    const o = t[s];
    o != null && (r && r(i, s, o, n) || (Array.isArray(o) && Array.isArray(i[s]) ? i[s] = [...o, ...i[s]] : kc(o) && kc(i[s]) ? i[s] = xf(o, i[s], (n ? `${n}.` : "") + s.toString(), r) : i[s] = o))
  }
  return i
}

function GC(t) {
  return (...e) => e.reduce((n, r) => xf(n, r, "", t), {})
}
const F0 = GC();

function XC(t, e) {
  try {
    return e in t
  } catch {
    return !1
  }
}
class kf extends Error {
  constructor(n, r = {}) {
    super(n, r);
    It(this, "statusCode", 500);
    It(this, "fatal", !1);
    It(this, "unhandled", !1);
    It(this, "statusMessage");
    It(this, "data");
    It(this, "cause");
    r.cause && !this.cause && (this.cause = r.cause)
  }
  toJSON() {
    const n = {
      message: this.message,
      statusCode: Pf(this.statusCode, 500)
    };
    return this.statusMessage && (n.statusMessage = M0(this.statusMessage)), this.data !== void 0 && (n.data = this.data), n
  }
}
It(kf, "__h3_error__", !0);

function Af(t) {
  if (typeof t == "string") return new kf(t);
  if (qC(t)) return t;
  const e = new kf(t.message ?? t.statusMessage ?? "", {
    cause: t.cause || t
  });
  if (XC(t, "stack")) try {
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
  if (t.data && (e.data = t.data), t.statusCode ? e.statusCode = Pf(t.statusCode, e.statusCode) : t.status && (e.statusCode = Pf(t.status, e.statusCode)), t.statusMessage ? e.statusMessage = t.statusMessage : t.statusText && (e.statusMessage = t.statusText), e.statusMessage) {
    const n = e.statusMessage;
    M0(e.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
  }
  return t.fatal !== void 0 && (e.fatal = t.fatal), t.unhandled !== void 0 && (e.unhandled = t.unhandled), e
}

function qC(t) {
  var e;
  return ((e = t == null ? void 0 : t.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const JC = /[^\u0009\u0020-\u007E]/g;

function M0(t = "") {
  return t.replace(JC, "")
}

function Pf(t, e = 200) {
  return !t || (typeof t == "string" && (t = Number.parseInt(t, 10)), t < 100 || t > 999) ? e : t
}
const QC = Symbol("layout-meta"),
  Ku = Symbol("route"),
  Mn = () => {
    var t;
    return (t = Ue()) == null ? void 0 : t.$router
  },
  lu = () => Um() ? mn(Ku, Ue()._route) : Ue()._route;
const ZC = (t, e, n = {}) => {
    const r = Ue(),
      i = n.global || typeof t != "string",
      s = e;
    if (!s) {
      console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", t);
      return
    }
    i ? r._middleware.global.push(s) : r._middleware.named[t] = s
  },
  ew = () => {
    try {
      if (Ue()._processingMiddleware) return !0
    } catch {
      return !1
    }
    return !1
  },
  tw = (t, e) => {
    t || (t = "/");
    const n = typeof t == "string" ? t : "path" in t ? nw(t) : Mn().resolve(t).href;
    if (e != null && e.open) {
      const {
        target: l = "_blank",
        windowFeatures: u = {}
      } = e.open, c = Object.entries(u).filter(([f, d]) => d !== void 0).map(([f, d]) => `${f.toLowerCase()}=${d}`).join(", ");
      return open(n, l, c), Promise.resolve()
    }
    const r = Fr(n, {
        acceptRelative: !0
      }),
      i = (e == null ? void 0 : e.external) || r;
    if (i) {
      if (!(e != null && e.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const {
        protocol: l
      } = new URL(n, window.location.href);
      if (l && QE(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
    }
    const s = ew();
    if (!i && s) return e != null && e.replace ? typeof t == "string" ? {
      path: t,
      replace: !0
    } : {
      ...t,
      replace: !0
    } : t;
    const o = Mn(),
      a = Ue();
    return i ? (a._scope.stop(), e != null && e.replace ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : e != null && e.replace ? o.replace(t) : o.push(t)
  };

function nw(t) {
  return E0(t.path || "", t.query || {}) + (t.hash || "")
}
const N0 = "__nuxt_error",
  Yu = () => ym(Ue().payload, "error"),
  Is = t => {
    const e = zu(t);
    try {
      const n = Ue(),
        r = Yu();
      n.hooks.callHook("app:error", e), r.value = r.value || e
    } catch {
      throw e
    }
    return e
  },
  rw = async (t = {}) => {
    const e = Ue(),
      n = Yu();
    e.callHook("app:error:cleared", t), t.redirect && await Mn().replace(t.redirect), n.value = OC
  }, iw = t => !!t && typeof t == "object" && N0 in t, zu = t => {
    const e = Af(t);
    return Object.defineProperty(e, N0, {
      value: !0,
      configurable: !1,
      writable: !1
    }), e
  };

function Np(t) {
  const e = ow(t),
    n = new ArrayBuffer(e.length),
    r = new DataView(n);
  for (let i = 0; i < n.byteLength; i++) r.setUint8(i, e.charCodeAt(i));
  return n
}
const sw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function ow(t) {
  t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
  let e = "",
    n = 0,
    r = 0;
  for (let i = 0; i < t.length; i++) n <<= 6, n |= sw.indexOf(t[i]), r += 6, r === 24 && (e += String.fromCharCode((n & 16711680) >> 16), e += String.fromCharCode((n & 65280) >> 8), e += String.fromCharCode(n & 255), n = r = 0);
  return r === 12 ? (n >>= 4, e += String.fromCharCode(n)) : r === 18 && (n >>= 2, e += String.fromCharCode((n & 65280) >> 8), e += String.fromCharCode(n & 255)), e
}
const aw = -1,
  lw = -2,
  uw = -3,
  cw = -4,
  fw = -5,
  hw = -6;

function dw(t, e) {
  return pw(JSON.parse(t), e)
}

function pw(t, e) {
  if (typeof t == "number") return i(t, !0);
  if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
  const n = t,
    r = Array(n.length);

  function i(s, o = !1) {
    if (s === aw) return;
    if (s === uw) return NaN;
    if (s === cw) return 1 / 0;
    if (s === fw) return -1 / 0;
    if (s === hw) return -0;
    if (o) throw new Error("Invalid input");
    if (s in r) return r[s];
    const a = n[s];
    if (!a || typeof a != "object") r[s] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == "string") {
        const l = a[0],
          u = e == null ? void 0 : e[l];
        if (u) return r[s] = u(i(a[1]));
        switch (l) {
          case "Date":
            r[s] = new Date(a[1]);
            break;
          case "Set":
            const c = new Set;
            r[s] = c;
            for (let h = 1; h < a.length; h += 1) c.add(i(a[h]));
            break;
          case "Map":
            const f = new Map;
            r[s] = f;
            for (let h = 1; h < a.length; h += 2) f.set(i(a[h]), i(a[h + 1]));
            break;
          case "RegExp":
            r[s] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            r[s] = Object(a[1]);
            break;
          case "BigInt":
            r[s] = BigInt(a[1]);
            break;
          case "null":
            const d = Object.create(null);
            r[s] = d;
            for (let h = 1; h < a.length; h += 2) d[a[h]] = i(a[h + 1]);
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const h = globalThis[l],
              g = a[1],
              p = Np(g),
              b = new h(p);
            r[s] = b;
            break
          }
          case "ArrayBuffer": {
            const h = a[1],
              g = Np(h);
            r[s] = g;
            break
          }
          default:
            throw new Error(`Unknown type ${l}`)
        }
      } else {
        const l = new Array(a.length);
        r[s] = l;
        for (let u = 0; u < a.length; u += 1) {
          const c = a[u];
          c !== lw && (l[u] = i(c))
        }
      }
    else {
      const l = {};
      r[s] = l;
      for (const u in a) {
        const c = a[u];
        l[u] = i(c)
      }
    }
    return r[s]
  }
  return i(0)
}
const gw = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
  Fl = new Set(["base", "meta", "link", "style", "script", "noscript"]),
  _w = new Set(["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
  mw = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
  $0 = new Set(["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]),
  yw = typeof window < "u";

function uu(t) {
  let e = 9;
  for (let n = 0; n < t.length;) e = Math.imul(e ^ t.charCodeAt(n++), 9 ** 9);
  return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function Rf(t) {
  if (t._h) return t._h;
  if (t._d) return uu(t._d);
  let e = `${t.tag}:${t.textContent||t.innerHTML||""}:`;
  for (const n in t.props) e += `${n}:${String(t.props[n])},`;
  return uu(e)
}

function I0(t, e) {
  const n = [],
    r = e.resolveKeyData || (s => s.key),
    i = e.resolveValueData || (s => s.value);
  for (const [s, o] of Object.entries(t)) n.push(...(Array.isArray(o) ? o : [o]).map(a => {
    const l = {
        key: s,
        value: a
      },
      u = i(l);
    return typeof u == "object" ? I0(u, e) : Array.isArray(u) ? u : {
      [typeof e.key == "function" ? e.key(l) : e.key]: r(l),
      [typeof e.value == "function" ? e.value(l) : e.value]: u
    }
  }).flat());
  return n
}

function B0(t, e) {
  return Object.entries(t).map(([n, r]) => {
    if (typeof r == "object" && (r = B0(r, e)), e.resolve) {
      const i = e.resolve({
        key: n,
        value: r
      });
      if (typeof i < "u") return i
    }
    return typeof r == "number" && (r = r.toString()), typeof r == "string" && e.wrapValue && (r = r.replace(new RegExp(e.wrapValue, "g"), `\\${e.wrapValue}`), r = `${e.wrapValue}${r}${e.wrapValue}`), `${n}${e.keyValueSeparator||""}${r}`
  }).join(e.entrySeparator || "")
}
const Yt = t => ({
    keyValue: t,
    metaKey: "property"
  }),
  Ac = t => ({
    keyValue: t
  }),
  Yh = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve({
          key: t,
          value: e
        }) {
          return `${Xr(t)}=${e}`
        }
      }
    },
    articleExpirationTime: Yt("article:expiration_time"),
    articleModifiedTime: Yt("article:modified_time"),
    articlePublishedTime: Yt("article:published_time"),
    bookReleaseDate: Yt("book:release_date"),
    charset: {
      metaKey: "charset"
    },
    contentSecurityPolicy: {
      unpack: {
        entrySeparator: "; ",
        resolve({
          key: t,
          value: e
        }) {
          return `${Xr(t)} ${e}`
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
    fbAppId: Yt("fb:app_id"),
    msapplicationConfig: Ac("msapplication-Config"),
    msapplicationTileColor: Ac("msapplication-TileColor"),
    msapplicationTileImage: Ac("msapplication-TileImage"),
    ogAudioSecureUrl: Yt("og:audio:secure_url"),
    ogAudioUrl: Yt("og:audio"),
    ogImageSecureUrl: Yt("og:image:secure_url"),
    ogImageUrl: Yt("og:image"),
    ogSiteName: Yt("og:site_name"),
    ogVideoSecureUrl: Yt("og:video:secure_url"),
    ogVideoUrl: Yt("og:video"),
    profileFirstName: Yt("profile:first_name"),
    profileLastName: Yt("profile:last_name"),
    profileUsername: Yt("profile:username"),
    refresh: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: ";",
        resolve({
          key: t,
          value: e
        }) {
          if (t === "seconds") return `${e}`
        }
      }
    },
    robots: {
      unpack: {
        entrySeparator: ", ",
        resolve({
          key: t,
          value: e
        }) {
          return typeof e == "boolean" ? `${Xr(t)}` : `${Xr(t)}:${e}`
        }
      }
    },
    xUaCompatible: {
      metaKey: "http-equiv"
    }
  },
  H0 = new Set(["og", "book", "article", "profile"]);

function U0(t) {
  var r;
  const e = Xr(t),
    n = e.indexOf(":");
  return H0.has(e.substring(0, n)) ? "property" : ((r = Yh[t]) == null ? void 0 : r.metaKey) || "name"
}

function Dw(t) {
  var e;
  return ((e = Yh[t]) == null ? void 0 : e.keyValue) || Xr(t)
}

function Xr(t) {
  const e = t.replace(/([A-Z])/g, "-$1").toLowerCase(),
    n = e.indexOf("-"),
    r = e.substring(0, n);
  return r === "twitter" || H0.has(r) ? t.replace(/([A-Z])/g, ":$1").toLowerCase() : e
}

function Lf(t) {
  if (Array.isArray(t)) return t.map(n => Lf(n));
  if (typeof t != "object" || Array.isArray(t)) return t;
  const e = {};
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[Xr(n)] = Lf(t[n]));
  return e
}

function bw(t, e) {
  const n = Yh[e];
  return e === "refresh" ? `${t.seconds};url=${t.url}` : B0(Lf(t), {
    keyValueSeparator: "=",
    entrySeparator: ", ",
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
const V0 = new Set(["og:image", "og:video", "og:audio", "twitter:image"]);

function j0(t) {
  const e = {};
  for (const n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
    const r = t[n];
    String(r) !== "false" && n && (e[n] = r)
  }
  return e
}

function $p(t, e) {
  const n = j0(e),
    r = Xr(t),
    i = U0(r);
  if (V0.has(r)) {
    const s = {};
    for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && (s[`${t}${o==="url"?"":`${o[0].toUpperCase()}${o.slice(1)}`}`] = n[o]);
    return W0(s).sort((o, a) => {
      var l, u;
      return (((l = o[i]) == null ? void 0 : l.length) || 0) - (((u = a[i]) == null ? void 0 : u.length) || 0)
    })
  }
  return [{
    [i]: r,
    ...n
  }]
}

function W0(t) {
  const e = [],
    n = {};
  for (const i in t) {
    if (!Object.prototype.hasOwnProperty.call(t, i)) continue;
    const s = t[i];
    if (!Array.isArray(s)) {
      if (typeof s == "object" && s) {
        if (V0.has(Xr(i))) {
          e.push(...$p(i, s));
          continue
        }
        n[i] = j0(s)
      } else n[i] = s;
      continue
    }
    for (const o of s) e.push(...typeof o == "string" ? W0({
      [i]: o
    }) : $p(i, o))
  }
  const r = I0(n, {
    key({
      key: i
    }) {
      return U0(i)
    },
    value({
      key: i
    }) {
      return i === "charset" ? "charset" : "content"
    },
    resolveKeyData({
      key: i
    }) {
      return Dw(i)
    },
    resolveValueData({
      value: i,
      key: s
    }) {
      return i === null ? "_null" : typeof i == "object" ? bw(i, s) : typeof i == "number" ? i.toString() : i
    }
  });
  return [...e, ...r].map(i => (i.content === "_null" && (i.content = null), i))
}

function vw(t, e) {
  return t instanceof Promise ? t.then(e) : e(t)
}

function Of(t, e, n, r) {
  const i = r || Y0(typeof e == "object" && typeof e != "function" && !(e instanceof Promise) ? {
    ...e
  } : {
    [t === "script" || t === "noscript" || t === "style" ? "innerHTML" : "textContent"]: e
  }, t === "templateParams" || t === "titleTemplate");
  if (i instanceof Promise) return i.then(o => Of(t, e, n, o));
  const s = {
    tag: t,
    props: i
  };
  for (const o of $0) {
    const a = s.props[o] !== void 0 ? s.props[o] : n[o];
    a !== void 0 && ((!(o === "innerHTML" || o === "textContent" || o === "children") || gw.has(s.tag)) && (s[o === "children" ? "innerHTML" : o] = a), delete s.props[o])
  }
  return s.props.body && (s.tagPosition = "bodyClose", delete s.props.body), s.tag === "script" && typeof s.innerHTML == "object" && (s.innerHTML = JSON.stringify(s.innerHTML), s.props.type = s.props.type || "application/json"), Array.isArray(s.props.content) ? s.props.content.map(o => ({
    ...s,
    props: {
      ...s.props,
      content: o
    }
  })) : s
}

function Ew(t, e) {
  var r;
  const n = t === "class" ? " " : ";";
  return e && typeof e == "object" && !Array.isArray(e) && (e = Object.entries(e).filter(([, i]) => i).map(([i, s]) => t === "style" ? `${i}:${s}` : i)), (r = String(Array.isArray(e) ? e.join(n) : e)) == null ? void 0 : r.split(n).filter(i => !!i.trim()).join(n)
}

function K0(t, e, n, r) {
  for (let i = r; i < n.length; i += 1) {
    const s = n[i];
    if (s === "class" || s === "style") {
      t[s] = Ew(s, t[s]);
      continue
    }
    if (t[s] instanceof Promise) return t[s].then(o => (t[s] = o, K0(t, e, n, i)));
    if (!e && !$0.has(s)) {
      const o = String(t[s]),
        a = s.startsWith("data-");
      o === "true" || o === "" ? t[s] = a ? "true" : !0 : t[s] || (a && o === "false" ? t[s] = "false" : delete t[s])
    }
  }
}

function Y0(t, e = !1) {
  const n = K0(t, e, Object.keys(t), 0);
  return n instanceof Promise ? n.then(() => t) : t
}
const Cw = 10;

function z0(t, e, n) {
  for (let r = n; r < e.length; r += 1) {
    const i = e[r];
    if (i instanceof Promise) return i.then(s => (e[r] = s, z0(t, e, r)));
    Array.isArray(i) ? t.push(...i) : t.push(i)
  }
}

function ww(t) {
  const e = [],
    n = t.resolvedInput;
  for (const i in n) {
    if (!Object.prototype.hasOwnProperty.call(n, i)) continue;
    const s = n[i];
    if (!(s === void 0 || !_w.has(i))) {
      if (Array.isArray(s)) {
        for (const o of s) e.push(Of(i, o, t));
        continue
      }
      e.push(Of(i, s, t))
    }
  }
  if (e.length === 0) return [];
  const r = [];
  return vw(z0(r, e, 0), () => r.map((i, s) => (i._e = t._i, t.mode && (i._m = t.mode), i._p = (t._i << Cw) + s, i)))
}
const Ip = new Set(["onload", "onerror", "onabort", "onprogress", "onloadstart"]),
  Bp = {
    base: -10,
    title: 10
  },
  Hp = {
    critical: -80,
    high: -10,
    low: 20
  };

function cu(t) {
  const e = t.tagPriority;
  if (typeof e == "number") return e;
  let n = 100;
  return t.tag === "meta" ? t.props["http-equiv"] === "content-security-policy" ? n = -30 : t.props.charset ? n = -20 : t.props.name === "viewport" && (n = -15) : t.tag === "link" && t.props.rel === "preconnect" ? n = 20 : t.tag in Bp && (n = Bp[t.tag]), e && e in Hp ? n + Hp[e] : n
}
const Tw = [{
    prefix: "before:",
    offset: -1
  }, {
    prefix: "after:",
    offset: 1
  }],
  Sw = ["name", "property", "http-equiv"];

function G0(t) {
  const {
    props: e,
    tag: n
  } = t;
  if (mw.has(n)) return n;
  if (n === "link" && e.rel === "canonical") return "canonical";
  if (e.charset) return "charset";
  if (e.id) return `${n}:id:${e.id}`;
  for (const r of Sw)
    if (e[r] !== void 0) return `${n}:${r}:${e[r]}`;
  return !1
}
const di = "%separator";

function xw(t, e, n = !1) {
  var i;
  let r;
  if (e === "s" || e === "pageTitle") r = t.pageTitle;
  else if (e.includes(".")) {
    const s = e.indexOf(".");
    r = (i = t[e.substring(0, s)]) == null ? void 0 : i[e.substring(s + 1)]
  } else r = t[e];
  if (r !== void 0) return n ? (r || "").replace(/"/g, '\\"') : r || ""
}
const kw = new RegExp(`${di}(?:\\s*${di})*`, "g");

function ll(t, e, n, r = !1) {
  if (typeof t != "string" || !t.includes("%")) return t;
  let i = t;
  try {
    i = decodeURI(t)
  } catch {}
  const s = i.match(/%\w+(?:\.\w+)?/g);
  if (!s) return t;
  const o = t.includes(di);
  return t = t.replace(/%\w+(?:\.\w+)?/g, a => {
    if (a === di || !s.includes(a)) return a;
    const l = xw(e, a.slice(1), r);
    return l !== void 0 ? l : a
  }).trim(), o && (t.endsWith(di) && (t = t.slice(0, -di.length)), t.startsWith(di) && (t = t.slice(di.length)), t = t.replace(kw, n).trim()), t
}

function Up(t, e) {
  return t == null ? e || null : typeof t == "function" ? t(e) : t
}
async function X0(t, e = {}) {
  const n = e.document || t.resolvedOptions.document;
  if (!n || !t.dirty) return;
  const r = {
    shouldRender: !0,
    tags: []
  };
  if (await t.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return t._domUpdatePromise || (t._domUpdatePromise = new Promise(async i => {
    var f;
    const s = (await t.resolveTags()).map(d => ({
      tag: d,
      id: Fl.has(d.tag) ? Rf(d) : d.tag,
      shouldRender: !0
    }));
    let o = t._dom;
    if (!o) {
      o = {
        elMap: {
          htmlAttrs: n.documentElement,
          bodyAttrs: n.body
        }
      };
      const d = new Set;
      for (const h of ["body", "head"]) {
        const g = (f = n[h]) == null ? void 0 : f.children;
        for (const p of g) {
          const b = p.tagName.toLowerCase();
          if (!Fl.has(b)) continue;
          const y = {
              tag: b,
              props: await Y0(p.getAttributeNames().reduce((v, C) => ({
                ...v,
                [C]: p.getAttribute(C)
              }), {})),
              innerHTML: p.innerHTML
            },
            D = G0(y);
          let _ = D,
            m = 1;
          for (; _ && d.has(_);) _ = `${D}:${m++}`;
          _ && (y._d = _, d.add(_)), o.elMap[p.getAttribute("data-hid") || Rf(y)] = p
        }
      }
    }
    o.pendingSideEffects = {
      ...o.sideEffects
    }, o.sideEffects = {};

    function a(d, h, g) {
      const p = `${d}:${h}`;
      o.sideEffects[p] = g, delete o.pendingSideEffects[p]
    }

    function l({
      id: d,
      $el: h,
      tag: g
    }) {
      const p = g.tag.endsWith("Attrs");
      if (o.elMap[d] = h, p || (g.textContent && g.textContent !== h.textContent && (h.textContent = g.textContent), g.innerHTML && g.innerHTML !== h.innerHTML && (h.innerHTML = g.innerHTML), a(d, "el", () => {
          var b;
          (b = o.elMap[d]) == null || b.remove(), delete o.elMap[d]
        })), g._eventHandlers)
        for (const b in g._eventHandlers) Object.prototype.hasOwnProperty.call(g._eventHandlers, b) && h.getAttribute(`data-${b}`) !== "" && ((g.tag === "bodyAttrs" ? n.defaultView : h).addEventListener(b.substring(2), g._eventHandlers[b].bind(h)), h.setAttribute(`data-${b}`, ""));
      for (const b in g.props) {
        if (!Object.prototype.hasOwnProperty.call(g.props, b)) continue;
        const y = g.props[b],
          D = `attr:${b}`;
        if (b === "class") {
          if (!y) continue;
          for (const _ of y.split(" ")) p && a(d, `${D}:${_}`, () => h.classList.remove(_)), !h.classList.contains(_) && h.classList.add(_)
        } else if (b === "style") {
          if (!y) continue;
          for (const _ of y.split(";")) {
            const m = _.indexOf(":"),
              v = _.substring(0, m).trim(),
              C = _.substring(m + 1).trim();
            a(d, `${D}:${v}`, () => {
              h.style.removeProperty(v)
            }), h.style.setProperty(v, C)
          }
        } else h.getAttribute(b) !== y && h.setAttribute(b, y === !0 ? "" : String(y)), p && a(d, D, () => h.removeAttribute(b))
      }
    }
    const u = [],
      c = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      };
    for (const d of s) {
      const {
        tag: h,
        shouldRender: g,
        id: p
      } = d;
      if (g) {
        if (h.tag === "title") {
          n.title = h.textContent;
          continue
        }
        d.$el = d.$el || o.elMap[p], d.$el ? l(d) : Fl.has(h.tag) && u.push(d)
      }
    }
    for (const d of u) {
      const h = d.tag.tagPosition || "head";
      d.$el = n.createElement(d.tag.tag), l(d), c[h] = c[h] || n.createDocumentFragment(), c[h].appendChild(d.$el)
    }
    for (const d of s) await t.hooks.callHook("dom:renderTag", d, n, a);
    c.head && n.head.appendChild(c.head), c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild), c.bodyClose && n.body.appendChild(c.bodyClose);
    for (const d in o.pendingSideEffects) o.pendingSideEffects[d]();
    t._dom = o, await t.hooks.callHook("dom:rendered", {
      renders: s
    }), i()
  }).finally(() => {
    t._domUpdatePromise = void 0, t.dirty = !1
  })), t._domUpdatePromise
}

function Aw(t, e = {}) {
  const n = e.delayFn || (r => setTimeout(r, 10));
  return t._domDebouncedUpdatePromise = t._domDebouncedUpdatePromise || new Promise(r => n(() => X0(t, e).then(() => {
    delete t._domDebouncedUpdatePromise, r()
  })))
}

function Pw(t) {
  return e => {
    var r, i;
    const n = ((i = (r = e.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
    return n && e.push(JSON.parse(n)), {
      mode: "client",
      hooks: {
        "entries:updated": s => {
          Aw(s, t)
        }
      }
    }
  }
}
const Rw = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
  Lw = {
    hooks: {
      "tag:normalise": ({
        tag: t
      }) => {
        t.props.hid && (t.key = t.props.hid, delete t.props.hid), t.props.vmid && (t.key = t.props.vmid, delete t.props.vmid), t.props.key && (t.key = t.props.key, delete t.props.key);
        const e = G0(t);
        e && !e.startsWith("meta:og:") && !e.startsWith("meta:twitter:") && delete t.key;
        const n = e || (t.key ? `${t.tag}:${t.key}` : !1);
        n && (t._d = n)
      },
      "tags:resolve": t => {
        const e = Object.create(null);
        for (const r of t.tags) {
          const i = (r.key ? `${r.tag}:${r.key}` : r._d) || Rf(r),
            s = e[i];
          if (s) {
            let a = r == null ? void 0 : r.tagDuplicateStrategy;
            if (!a && Rw.has(r.tag) && (a = "merge"), a === "merge") {
              const l = s.props;
              l.style && r.props.style && (l.style[l.style.length - 1] !== ";" && (l.style += ";"), r.props.style = `${l.style} ${r.props.style}`), l.class && r.props.class ? r.props.class = `${l.class} ${r.props.class}` : l.class && (r.props.class = l.class), e[i].props = {
                ...l,
                ...r.props
              };
              continue
            } else if (r._e === s._e) {
              s._duped = s._duped || [], r._d = `${s._d}:${s._duped.length+1}`, s._duped.push(r);
              continue
            } else if (cu(r) > cu(s)) continue
          }
          if (!(r.innerHTML || r.textContent || Object.keys(r.props).length !== 0) && Fl.has(r.tag)) {
            delete e[i];
            continue
          }
          e[i] = r
        }
        const n = [];
        for (const r in e) {
          const i = e[r],
            s = i._duped;
          n.push(i), s && (delete i._duped, n.push(...s))
        }
        t.tags = n, t.tags = t.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
      }
    }
  },
  Ow = new Set(["script", "link", "bodyAttrs"]),
  Fw = t => ({
    hooks: {
      "tags:resolve": e => {
        for (const n of e.tags) {
          if (!Ow.has(n.tag)) continue;
          const r = n.props;
          for (const i in r) {
            if (i[0] !== "o" || i[1] !== "n" || !Object.prototype.hasOwnProperty.call(r, i)) continue;
            const s = r[i];
            typeof s == "function" && (t.ssr && Ip.has(i) ? r[i] = `this.dataset.${i}fired = true` : delete r[i], n._eventHandlers = n._eventHandlers || {}, n._eventHandlers[i] = s)
          }
          t.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || uu(n.props.src || n.props.href))
        }
      },
      "dom:renderTag": ({
        $el: e,
        tag: n
      }) => {
        var i, s;
        const r = e == null ? void 0 : e.dataset;
        if (r)
          for (const o in r) {
            if (!o.endsWith("fired")) continue;
            const a = o.slice(0, -5);
            Ip.has(a) && ((s = (i = n._eventHandlers) == null ? void 0 : i[a]) == null || s.call(e, new Event(a.substring(2))))
          }
      }
    }
  }),
  Mw = new Set(["link", "style", "script", "noscript"]),
  Nw = {
    hooks: {
      "tag:normalise": ({
        tag: t
      }) => {
        t.key && Mw.has(t.tag) && (t.props["data-hid"] = t._h = uu(t.key))
      }
    }
  },
  $w = {
    mode: "server",
    hooks: {
      "tags:beforeResolve": t => {
        const e = {};
        let n = !1;
        for (const r of t.tags) r._m !== "server" || r.tag !== "titleTemplate" && r.tag !== "templateParams" && r.tag !== "title" || (e[r.tag] = r.tag === "title" || r.tag === "titleTemplate" ? r.textContent : r.props, n = !0);
        n && t.tags.push({
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
  Iw = {
    hooks: {
      "tags:resolve": t => {
        var e;
        for (const n of t.tags)
          if (typeof n.tagPriority == "string")
            for (const {
                prefix: r,
                offset: i
              }
              of Tw) {
              if (!n.tagPriority.startsWith(r)) continue;
              const s = n.tagPriority.substring(r.length),
                o = (e = t.tags.find(a => a._d === s)) == null ? void 0 : e._p;
              if (o !== void 0) {
                n._p = o + i;
                break
              }
            }
        t.tags.sort((n, r) => {
          const i = cu(n),
            s = cu(r);
          return i < s ? -1 : i > s ? 1 : n._p - r._p
        })
      }
    }
  },
  Bw = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
  },
  Hw = ["innerHTML", "textContent"],
  Uw = t => ({
    hooks: {
      "tags:resolve": e => {
        var o;
        const {
          tags: n
        } = e;
        let r;
        for (let a = 0; a < n.length; a += 1) n[a].tag === "templateParams" && (r = e.tags.splice(a, 1)[0].props, a -= 1);
        const i = r || {},
          s = i.separator || "|";
        delete i.separator, i.pageTitle = ll(i.pageTitle || ((o = n.find(a => a.tag === "title")) == null ? void 0 : o.textContent) || "", i, s);
        for (const a of n) {
          if (a.processTemplateParams === !1) continue;
          const l = Bw[a.tag];
          if (l && typeof a.props[l] == "string") a.props[l] = ll(a.props[l], i, s);
          else if (a.processTemplateParams || a.tag === "titleTemplate" || a.tag === "title")
            for (const u of Hw) typeof a[u] == "string" && (a[u] = ll(a[u], i, s, a.tag === "script" && a.props.type.endsWith("json")))
        }
        t._templateParams = i, t._separator = s
      },
      "tags:afterResolve": ({
        tags: e
      }) => {
        let n;
        for (let r = 0; r < e.length; r += 1) {
          const i = e[r];
          i.tag === "title" && i.processTemplateParams !== !1 && (n = i)
        }
        n != null && n.textContent && (n.textContent = ll(n.textContent, t._templateParams, t._separator))
      }
    }
  }),
  Vw = {
    hooks: {
      "tags:resolve": t => {
        const {
          tags: e
        } = t;
        let n, r;
        for (let i = 0; i < e.length; i += 1) {
          const s = e[i];
          s.tag === "title" ? n = s : s.tag === "titleTemplate" && (r = s)
        }
        if (r && n) {
          const i = Up(r.textContent, n.textContent);
          i !== null ? n.textContent = i || n.textContent : t.tags.splice(t.tags.indexOf(n), 1)
        } else if (r) {
          const i = Up(r.textContent);
          i !== null && (r.textContent = i, r.tag = "title", r = void 0)
        }
        r && t.tags.splice(t.tags.indexOf(r), 1)
      }
    }
  },
  jw = {
    hooks: {
      "tags:afterResolve": t => {
        for (const e of t.tags) typeof e.innerHTML == "string" && (e.innerHTML && (e.props.type === "application/ld+json" || e.props.type === "application/json") ? e.innerHTML = e.innerHTML.replace(/</g, "\\u003C") : e.innerHTML = e.innerHTML.replace(new RegExp(`</${e.tag}`, "g"), `<\\/${e.tag}`))
      }
    }
  };
let q0;

function Ww(t = {}) {
  const e = Kw(t);
  return e.use(Pw()), q0 = e
}

function Vp(t, e) {
  return !t || t === "server" && e || t === "client" && !e
}

function Kw(t = {}) {
  const e = A0();
  e.addHooks(t.hooks || {}), t.document = t.document || (yw ? document : void 0);
  const n = !t.document,
    r = () => {
      a.dirty = !0, e.callHook("entries:updated", a)
    };
  let i = 0,
    s = [];
  const o = [],
    a = {
      plugins: o,
      dirty: !1,
      resolvedOptions: t,
      hooks: e,
      headEntries() {
        return s
      },
      use(l) {
        const u = typeof l == "function" ? l(a) : l;
        (!u.key || !o.some(c => c.key === u.key)) && (o.push(u), Vp(u.mode, n) && e.addHooks(u.hooks || {}))
      },
      push(l, u) {
        u == null || delete u.head;
        const c = {
          _i: i++,
          input: l,
          ...u
        };
        return Vp(c.mode, n) && (s.push(c), r()), {
          dispose() {
            s = s.filter(f => f._i !== c._i), r()
          },
          patch(f) {
            for (const d of s) d._i === c._i && (d.input = c.input = f);
            r()
          }
        }
      },
      async resolveTags() {
        const l = {
          tags: [],
          entries: [...s]
        };
        await e.callHook("entries:resolve", l);
        for (const u of l.entries) {
          const c = u.resolvedInput || u.input;
          if (u.resolvedInput = await (u.transform ? u.transform(c) : c), u.resolvedInput)
            for (const f of await ww(u)) {
              const d = {
                tag: f,
                entry: u,
                resolvedOptions: a.resolvedOptions
              };
              await e.callHook("tag:normalise", d), l.tags.push(d.tag)
            }
        }
        return await e.callHook("tags:beforeResolve", l), await e.callHook("tags:resolve", l), await e.callHook("tags:afterResolve", l), l.tags
      },
      ssr: n
    };
  return [Lw, $w, Fw, Nw, Iw, Uw, Vw, jw, ...(t == null ? void 0 : t.plugins) || []].forEach(l => a.use(l)), a.hooks.callHook("init", a), a
}

function Yw() {
  return q0
}
const zw = p0[0] === "3";

function Gw(t) {
  return typeof t == "function" ? t() : Pe(t)
}

function Ff(t) {
  if (t instanceof Promise || t instanceof Date || t instanceof RegExp) return t;
  const e = Gw(t);
  if (!t || !e) return e;
  if (Array.isArray(e)) return e.map(n => Ff(n));
  if (typeof e == "object") {
    const n = {};
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        if (r === "titleTemplate" || r[0] === "o" && r[1] === "n") {
          n[r] = Pe(e[r]);
          continue
        }
        n[r] = Ff(e[r])
      } return n
  }
  return e
}
const Xw = {
    hooks: {
      "entries:resolve": t => {
        for (const e of t.entries) e.resolvedInput = Ff(e.input)
      }
    }
  },
  J0 = "usehead";

function qw(t) {
  return {
    install(n) {
      zw && (n.config.globalProperties.$unhead = t, n.config.globalProperties.$head = t, n.provide(J0, t))
    }
  }.install
}

function Jw(t = {}) {
  t.domDelayFn = t.domDelayFn || (n => Es(() => setTimeout(() => n(), 0)));
  const e = Ww(t);
  return e.use(Xw), e.install = qw(e), e
}
const Mf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
  Nf = "__unhead_injection_handler__";

function Qw(t) {
  Mf[Nf] = t
}

function AL() {
  return Nf in Mf ? Mf[Nf]() : mn(J0) || Yw()
}
const Zw = "modulepreload",
  eT = function(t, e) {
    return new URL(t, e).href
  },
  jp = {},
  fu = function(e, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const o = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      i = Promise.allSettled(n.map(u => {
        if (u = eT(u, r), u in jp) return;
        jp[u] = !0;
        const c = u.endsWith(".css"),
          f = c ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let g = o.length - 1; g >= 0; g--) {
            const p = o[g];
            if (p.href === u && (!c || p.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${u}"]${f}`)) return;
        const h = document.createElement("link");
        if (h.rel = c ? "stylesheet" : Zw, c || (h.as = "script"), h.crossOrigin = "", h.href = u, l && h.setAttribute("nonce", l), document.head.appendChild(h), c) return new Promise((g, p) => {
          h.addEventListener("load", g), h.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${u}`)))
        })
      }))
    }

    function s(o) {
      const a = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (a.payload = o, window.dispatchEvent(a), !a.defaultPrevented) throw o
    }
    return i.then(o => {
      for (const a of o || []) a.status === "rejected" && s(a.reason);
      return e().catch(s)
    })
  };
let Ml, Nl;

function tT() {
  return Ml = $fetch(Kh(`builds/meta/${Cn().app.buildId}.json`), {
    responseType: "json"
  }), Ml.then(t => {
    Nl = zC(t.matcher)
  }).catch(t => {
    console.error("[nuxt] Error fetching app manifest.", t)
  }), Ml
}

function Gu() {
  return Ml || tT()
}
async function zh(t) {
  const e = typeof t == "string" ? t : t.path;
  if (await Gu(), !Nl) return console.error("[nuxt] Error creating app manifest matcher.", Nl), {};
  try {
    return F0({}, ...Nl.matchAll(e).reverse())
  } catch (n) {
    return console.error("[nuxt] Error matching route rules.", n), {}
  }
}
async function Wp(t, e = {}) {
  const n = await rT(t, e),
    r = Ue(),
    i = r._payloadCache = r._payloadCache || {};
  return n in i ? i[n] || null : (i[n] = Z0(t).then(s => s ? Q0(n).then(o => o || (delete i[n], null)) : (i[n] = null, null)), i[n])
}
const nT = "_payload.json";
async function rT(t, e = {}) {
  const n = new URL(t, "http://localhost");
  if (n.host !== "localhost" || Fr(n.pathname, {
      acceptRelative: !0
    })) throw new Error("Payload URL must not include hostname: " + t);
  const r = Cn(),
    i = e.hash || (e.fresh ? Date.now() : r.app.buildId),
    s = r.app.cdnURL,
    o = s && await Z0(t) ? s : r.app.baseURL;
  return So(o, n.pathname, nT + (i ? `?${i}` : ""))
}
async function Q0(t) {
  const e = fetch(t).then(n => n.text().then(ey));
  try {
    return await e
  } catch (n) {
    console.warn("[nuxt] Cannot load payload ", t, n)
  }
  return null
}
async function Z0(t = lu().path) {
  const e = Ue();
  return t = Wu(t), (await Gu()).prerendered.includes(t) ? !0 : e.runWithContext(async () => {
    const r = await zh({
      path: t
    });
    return !!r.prerender && !r.redirect
  })
}
let Gi = null;
async function iT() {
  var r;
  if (Gi) return Gi;
  const t = document.getElementById("__NUXT_DATA__");
  if (!t) return {};
  const e = await ey(t.textContent || ""),
    n = t.dataset.src ? await Q0(t.dataset.src) : void 0;
  return Gi = {
    ...e,
    ...n,
    ...window.__NUXT__
  }, (r = Gi.config) != null && r.public && (Gi.config.public = Mi(Gi.config.public)), Gi
}
async function ey(t) {
  return await dw(t, Ue()._payloadRevivers)
}

function sT(t, e) {
  Ue()._payloadRevivers[t] = e
}
const oT = [
    ["NuxtError", t => zu(t)],
    ["EmptyShallowRef", t => io(t === "_" ? void 0 : t === "0n" ? BigInt(0) : Ta(t))],
    ["EmptyRef", t => _n(t === "_" ? void 0 : t === "0n" ? BigInt(0) : Ta(t))],
    ["ShallowRef", t => io(t)],
    ["ShallowReactive", t => Gr(t)],
    ["Ref", t => _n(t)],
    ["Reactive", t => Mi(t)]
  ],
  aT = un({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(t) {
      let e, n;
      for (const [r, i] of oT) sT(r, i);
      Object.assign(t.payload, ([e, n] = or(() => t.runWithContext(iT)), e = await e, n(), e)), window.__NUXT__ = t.payload
    }
  }),
  lT = [],
  uT = un({
    name: "nuxt:head",
    enforce: "pre",
    setup(t) {
      const e = Jw({
        plugins: lT
      });
      Qw(() => Ue().vueApp._context.provides.usehead), t.vueApp.use(e);
      {
        let n = !0;
        const r = async () => {
          n = !1, await X0(e)
        };
        e.hooks.hook("dom:beforeRender", i => {
          i.shouldRender = !n
        }), t.hooks.hook("page:start", () => {
          n = !0
        }), t.hooks.hook("page:finish", () => {
          t.isHydrating || r()
        }), t.hooks.hook("app:error", r), t.hooks.hook("app:suspense:resolve", r)
      }
    }
  });
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const Os = typeof document < "u";

function ty(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function cT(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && ty(t.default)
}
const $e = Object.assign;

function Pc(t, e) {
  const n = {};
  for (const r in e) {
    const i = e[r];
    n[r] = cr(i) ? i.map(t) : t(i)
  }
  return n
}
const na = () => {},
  cr = Array.isArray,
  ny = /#/g,
  fT = /&/g,
  hT = /\//g,
  dT = /=/g,
  pT = /\?/g,
  ry = /\+/g,
  gT = /%5B/g,
  _T = /%5D/g,
  iy = /%5E/g,
  mT = /%60/g,
  sy = /%7B/g,
  yT = /%7C/g,
  oy = /%7D/g,
  DT = /%20/g;

function Gh(t) {
  return encodeURI("" + t).replace(yT, "|").replace(gT, "[").replace(_T, "]")
}

function bT(t) {
  return Gh(t).replace(sy, "{").replace(oy, "}").replace(iy, "^")
}

function $f(t) {
  return Gh(t).replace(ry, "%2B").replace(DT, "+").replace(ny, "%23").replace(fT, "%26").replace(mT, "`").replace(sy, "{").replace(oy, "}").replace(iy, "^")
}

function vT(t) {
  return $f(t).replace(dT, "%3D")
}

function ET(t) {
  return Gh(t).replace(ny, "%23").replace(pT, "%3F")
}

function CT(t) {
  return t == null ? "" : ET(t).replace(hT, "%2F")
}

function Sa(t) {
  try {
    return decodeURIComponent("" + t)
  } catch {}
  return "" + t
}
const wT = /\/$/,
  TT = t => t.replace(wT, "");

function Rc(t, e, n = "/") {
  let r, i = {},
    s = "",
    o = "";
  const a = e.indexOf("#");
  let l = e.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (r = e.slice(0, l), s = e.slice(l + 1, a > -1 ? a : e.length), i = t(s)), a > -1 && (r = r || e.slice(0, a), o = e.slice(a, e.length)), r = AT(r ?? e, n), {
    fullPath: r + (s && "?") + s + o,
    path: r,
    query: i,
    hash: Sa(o)
  }
}

function ST(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "")
}

function Kp(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}

function xT(t, e, n) {
  const r = e.matched.length - 1,
    i = n.matched.length - 1;
  return r > -1 && r === i && co(e.matched[r], n.matched[i]) && ay(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}

function co(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}

function ay(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t)
    if (!kT(t[n], e[n])) return !1;
  return !0
}

function kT(t, e) {
  return cr(t) ? Yp(t, e) : cr(e) ? Yp(e, t) : t === e
}

function Yp(t, e) {
  return cr(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e
}

function AT(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"),
    r = t.split("/"),
    i = r[r.length - 1];
  (i === ".." || i === ".") && r.push("");
  let s = n.length - 1,
    o, a;
  for (o = 0; o < r.length; o++)
    if (a = r[o], a !== ".")
      if (a === "..") s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + r.slice(o).join("/")
}
const nr = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var xa;
(function(t) {
  t.pop = "pop", t.push = "push"
})(xa || (xa = {}));
var ra;
(function(t) {
  t.back = "back", t.forward = "forward", t.unknown = ""
})(ra || (ra = {}));

function PT(t) {
  if (!t)
    if (Os) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), TT(t)
}
const RT = /^[^#]+#/;

function LT(t, e) {
  return t.replace(RT, "#") + e
}

function OT(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0)
  }
}
const Xu = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function FT(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      r = typeof n == "string" && n.startsWith("#"),
      i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    e = OT(i, t)
  } else e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY)
}

function zp(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const If = new Map;

function MT(t, e) {
  If.set(t, e)
}

function NT(t) {
  const e = If.get(t);
  return If.delete(t), e
}
let $T = () => location.protocol + "//" + location.host;

function ly(t, e) {
  const {
    pathname: n,
    search: r,
    hash: i
  } = e, s = t.indexOf("#");
  if (s > -1) {
    let a = i.includes(t.slice(s)) ? t.slice(s).length : 1,
      l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), Kp(l, "")
  }
  return Kp(n, t) + r + i
}

function IT(t, e, n, r) {
  let i = [],
    s = [],
    o = null;
  const a = ({
    state: d
  }) => {
    const h = ly(t, location),
      g = n.value,
      p = e.value;
    let b = 0;
    if (d) {
      if (n.value = h, e.value = d, o && o === g) {
        o = null;
        return
      }
      b = p ? d.position - p.position : 0
    } else r(h);
    i.forEach(y => {
      y(n.value, g, {
        delta: b,
        type: xa.pop,
        direction: b ? b > 0 ? ra.forward : ra.back : ra.unknown
      })
    })
  };

  function l() {
    o = n.value
  }

  function u(d) {
    i.push(d);
    const h = () => {
      const g = i.indexOf(d);
      g > -1 && i.splice(g, 1)
    };
    return s.push(h), h
  }

  function c() {
    const {
      history: d
    } = window;
    d.state && d.replaceState($e({}, d.state, {
      scroll: Xu()
    }), "")
  }

  function f() {
    for (const d of s) d();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c)
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: u,
    destroy: f
  }
}

function Gp(t, e, n, r = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? Xu() : null
  }
}

function BT(t) {
  const {
    history: e,
    location: n
  } = window, r = {
    value: ly(t, n)
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

  function s(l, u, c) {
    const f = t.indexOf("#"),
      d = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + l : $T() + t + l;
    try {
      e[c ? "replaceState" : "pushState"](u, "", d), i.value = u
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](d)
    }
  }

  function o(l, u) {
    const c = $e({}, e.state, Gp(i.value.back, l, i.value.forward, !0), u, {
      position: i.value.position
    });
    s(l, c, !0), r.value = l
  }

  function a(l, u) {
    const c = $e({}, i.value, e.state, {
      forward: l,
      scroll: Xu()
    });
    s(c.current, c, !0);
    const f = $e({}, Gp(r.value, l, null), {
      position: c.position + 1
    }, u);
    s(l, f, !1), r.value = l
  }
  return {
    location: r,
    state: i,
    push: a,
    replace: o
  }
}

function HT(t) {
  t = PT(t);
  const e = BT(t),
    n = IT(t, e.state, e.location, e.replace);

  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s)
  }
  const i = $e({
    location: "",
    base: t,
    go: r,
    createHref: LT.bind(null, t)
  }, e, n);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i
}

function UT(t) {
  return typeof t == "string" || t && typeof t == "object"
}

function uy(t) {
  return typeof t == "string" || typeof t == "symbol"
}
const cy = Symbol("");
var Xp;
(function(t) {
  t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated"
})(Xp || (Xp = {}));

function fo(t, e) {
  return $e(new Error, {
    type: t,
    [cy]: !0
  }, e)
}

function Br(t, e) {
  return t instanceof Error && cy in t && (e == null || !!(t.type & e))
}
const qp = "[^/]+?",
  VT = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  jT = /[.+*?^${}()[\]/\\]/g;

function WT(t, e) {
  const n = $e({}, VT, e),
    r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const u of t) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (i += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let h = 40 + (n.sensitive ? .25 : 0);
      if (d.type === 0) f || (i += "/"), i += d.value.replace(jT, "\\$&"), h += 40;
      else if (d.type === 1) {
        const {
          value: g,
          repeatable: p,
          optional: b,
          regexp: y
        } = d;
        s.push({
          name: g,
          repeatable: p,
          optional: b
        });
        const D = y || qp;
        if (D !== qp) {
          h += 10;
          try {
            new RegExp(`(${D})`)
          } catch (m) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${D}): ` + m.message)
          }
        }
        let _ = p ? `((?:${D})(?:/(?:${D}))*)` : `(${D})`;
        f || (_ = b && u.length < 2 ? `(?:/${_})` : "/" + _), b && (_ += "?"), i += _, h += 20, b && (h += -8), p && (h += -20), D === ".*" && (h += -50)
      }
      c.push(h)
    }
    r.push(c)
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += .7000000000000001
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");

  function a(u) {
    const c = u.match(o),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const h = c[d] || "",
        g = s[d - 1];
      f[g.name] = h && g.repeatable ? h.split("/") : h
    }
    return f
  }

  function l(u) {
    let c = "",
      f = !1;
    for (const d of t) {
      (!f || !c.endsWith("/")) && (c += "/"), f = !1;
      for (const h of d)
        if (h.type === 0) c += h.value;
        else if (h.type === 1) {
        const {
          value: g,
          repeatable: p,
          optional: b
        } = h, y = g in u ? u[g] : "";
        if (cr(y) && !p) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const D = cr(y) ? y.join("/") : y;
        if (!D)
          if (b) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
          else throw new Error(`Missing required param "${g}"`);
        c += D
      }
    }
    return c || "/"
  }
  return {
    re: o,
    score: r,
    keys: s,
    parse: a,
    stringify: l
  }
}

function KT(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length;) {
    const r = e[n] - t[n];
    if (r) return r;
    n++
  }
  return t.length < e.length ? t.length === 1 && t[0] === 80 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 80 ? 1 : -1 : 0
}

function fy(t, e) {
  let n = 0;
  const r = t.score,
    i = e.score;
  for (; n < r.length && n < i.length;) {
    const s = KT(r[n], i[n]);
    if (s) return s;
    n++
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (Jp(r)) return 1;
    if (Jp(i)) return -1
  }
  return i.length - r.length
}

function Jp(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0
}
const YT = {
    type: 0,
    value: ""
  },
  zT = /[a-zA-Z0-9_]/;

function GT(t) {
  if (!t) return [
    []
  ];
  if (t === "/") return [
    [YT]
  ];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

  function e(h) {
    throw new Error(`ERR (${n})/"${u}": ${h}`)
  }
  let n = 0,
    r = n;
  const i = [];
  let s;

  function o() {
    s && i.push(s), s = []
  }
  let a = 0,
    l, u = "",
    c = "";

  function f() {
    u && (n === 0 ? s.push({
      type: 0,
      value: u
    }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: u,
      regexp: c,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : e("Invalid state to consume buffer"), u = "")
  }

  function d() {
    u += l
  }
  for (; a < t.length;) {
    if (l = t[a++], l === "\\" && n !== 2) {
      r = n, n = 4;
      continue
    }
    switch (n) {
      case 0:
        l === "/" ? (u && f(), o()) : l === ":" ? (f(), n = 1) : d();
        break;
      case 4:
        d(), n = r;
        break;
      case 1:
        l === "(" ? n = 2 : zT.test(l) ? d() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
        break;
      case 3:
        f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
        break;
      default:
        e("Unknown state");
        break
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${u}"`), f(), o(), i
}

function XT(t, e, n) {
  const r = WT(GT(t.path), n),
    i = $e(r, {
      record: t,
      parent: e,
      children: [],
      alias: []
    });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
}

function qT(t, e) {
  const n = [],
    r = new Map;
  e = tg({
    strict: !1,
    end: !0,
    sensitive: !1
  }, e);

  function i(f) {
    return r.get(f)
  }

  function s(f, d, h) {
    const g = !h,
      p = Zp(f);
    p.aliasOf = h && h.record;
    const b = tg(e, f),
      y = [p];
    if ("alias" in f) {
      const m = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const v of m) y.push(Zp($e({}, p, {
        components: h ? h.record.components : p.components,
        path: v,
        aliasOf: h ? h.record : p
      })))
    }
    let D, _;
    for (const m of y) {
      const {
        path: v
      } = m;
      if (d && v[0] !== "/") {
        const C = d.record.path,
          E = C[C.length - 1] === "/" ? "" : "/";
        m.path = d.record.path + (v && E + v)
      }
      if (D = XT(m, d, b), h ? h.alias.push(D) : (_ = _ || D, _ !== D && _.alias.push(D), g && f.name && !eg(D) && o(f.name)), hy(D) && l(D), p.children) {
        const C = p.children;
        for (let E = 0; E < C.length; E++) s(C[E], D, h && h.children[E])
      }
      h = h || D
    }
    return _ ? () => {
      o(_)
    } : na
  }

  function o(f) {
    if (uy(f)) {
      const d = r.get(f);
      d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
    } else {
      const d = n.indexOf(f);
      d > -1 && (n.splice(d, 1), f.record.name && r.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o))
    }
  }

  function a() {
    return n
  }

  function l(f) {
    const d = ZT(f, n);
    n.splice(d, 0, f), f.record.name && !eg(f) && r.set(f.record.name, f)
  }

  function u(f, d) {
    let h, g = {},
      p, b;
    if ("name" in f && f.name) {
      if (h = r.get(f.name), !h) throw fo(1, {
        location: f
      });
      b = h.record.name, g = $e(Qp(d.params, h.keys.filter(_ => !_.optional).concat(h.parent ? h.parent.keys.filter(_ => _.optional) : []).map(_ => _.name)), f.params && Qp(f.params, h.keys.map(_ => _.name))), p = h.stringify(g)
    } else if (f.path != null) p = f.path, h = n.find(_ => _.re.test(p)), h && (g = h.parse(p), b = h.record.name);
    else {
      if (h = d.name ? r.get(d.name) : n.find(_ => _.re.test(d.path)), !h) throw fo(1, {
        location: f,
        currentLocation: d
      });
      b = h.record.name, g = $e({}, d.params, f.params), p = h.stringify(g)
    }
    const y = [];
    let D = h;
    for (; D;) y.unshift(D.record), D = D.parent;
    return {
      name: b,
      path: p,
      params: g,
      matched: y,
      meta: QT(y)
    }
  }
  t.forEach(f => s(f));

  function c() {
    n.length = 0, r.clear()
  }
  return {
    addRoute: s,
    resolve: u,
    removeRoute: o,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: i
  }
}

function Qp(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n
}

function Zp(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: JT(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in t ? t.components || null : t.component && {
      default: t.component
    }
  };
  return Object.defineProperty(e, "mods", {
    value: {}
  }), e
}

function JT(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else
    for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
  return e
}

function eg(t) {
  for (; t;) {
    if (t.record.aliasOf) return !0;
    t = t.parent
  }
  return !1
}

function QT(t) {
  return t.reduce((e, n) => $e(e, n.meta), {})
}

function tg(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n
}

function ZT(t, e) {
  let n = 0,
    r = e.length;
  for (; n !== r;) {
    const s = n + r >> 1;
    fy(t, e[s]) < 0 ? r = s : n = s + 1
  }
  const i = eS(t);
  return i && (r = e.lastIndexOf(i, r - 1)), r
}

function eS(t) {
  let e = t;
  for (; e = e.parent;)
    if (hy(e) && fy(t, e) === 0) return e
}

function hy({
  record: t
}) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect)
}

function tS(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const r = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let i = 0; i < r.length; ++i) {
    const s = r[i].replace(ry, " "),
      o = s.indexOf("="),
      a = Sa(o < 0 ? s : s.slice(0, o)),
      l = o < 0 ? null : Sa(s.slice(o + 1));
    if (a in e) {
      let u = e[a];
      cr(u) || (u = e[a] = [u]), u.push(l)
    } else e[a] = l
  }
  return e
}

function ng(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (n = vT(n), r == null) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue
    }(cr(r) ? r.map(s => s && $f(s)) : [r && $f(r)]).forEach(s => {
      s !== void 0 && (e += (e.length ? "&" : "") + n, s != null && (e += "=" + s))
    })
  }
  return e
}

function nS(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = cr(r) ? r.map(i => i == null ? null : "" + i) : r == null ? r : "" + r)
  }
  return e
}
const rS = Symbol(""),
  rg = Symbol(""),
  Xh = Symbol(""),
  dy = Symbol(""),
  Bf = Symbol("");

function Oo() {
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

function pi(t, e, n, r, i, s = o => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const u = d => {
        d === !1 ? l(fo(4, {
          from: n,
          to: e
        })) : d instanceof Error ? l(d) : UT(d) ? l(fo(2, {
          from: e,
          to: d
        })) : (o && r.enterCallbacks[i] === o && typeof d == "function" && o.push(d), a())
      },
      c = s(() => t.call(r && r.instances[i], e, n, u));
    let f = Promise.resolve(c);
    t.length < 3 && (f = f.then(u)), f.catch(d => l(d))
  })
}

function Lc(t, e, n, r, i = s => s()) {
  const s = [];
  for (const o of t)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(e !== "beforeRouteEnter" && !o.instances[a]))
        if (ty(l)) {
          const c = (l.__vccOpts || l)[e];
          c && s.push(pi(c, n, r, o, a, i))
        } else {
          let u = l();
          s.push(() => u.then(c => {
            if (!c) throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
            const f = cT(c) ? c.default : c;
            o.mods[a] = c, o.components[a] = f;
            const h = (f.__vccOpts || f)[e];
            return h && pi(h, n, r, o, a, i)()
          }))
        }
    }
  return s
}

function ig(t) {
  const e = mn(Xh),
    n = mn(dy),
    r = _t(() => {
      const l = Pe(t.to);
      return e.resolve(l)
    }),
    i = _t(() => {
      const {
        matched: l
      } = r.value, {
        length: u
      } = l, c = l[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(co.bind(null, c));
      if (d > -1) return d;
      const h = sg(l[u - 2]);
      return u > 1 && sg(c) === h && f[f.length - 1].path !== h ? f.findIndex(co.bind(null, l[u - 2])) : d
    }),
    s = _t(() => i.value > -1 && lS(n.params, r.value.params)),
    o = _t(() => i.value > -1 && i.value === n.matched.length - 1 && ay(n.params, r.value.params));

  function a(l = {}) {
    if (aS(l)) {
      const u = e[Pe(t.replace) ? "replace" : "push"](Pe(t.to)).catch(na);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u
    }
    return Promise.resolve()
  }
  return {
    route: r,
    href: _t(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a
  }
}

function iS(t) {
  return t.length === 1 ? t[0] : t
}
const sS = ii({
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
    useLink: ig,
    setup(t, {
      slots: e
    }) {
      const n = Mi(ig(t)),
        {
          options: r
        } = mn(Xh),
        i = _t(() => ({
          [og(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [og(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const s = e.default && iS(e.default(n));
        return t.custom ? s : Vn("a", {
          "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: i.value
        }, s)
      }
    }
  }),
  oS = sS;

function aS(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}

function lS(t, e) {
  for (const n in e) {
    const r = e[n],
      i = t[n];
    if (typeof r == "string") {
      if (r !== i) return !1
    } else if (!cr(i) || i.length !== r.length || r.some((s, o) => s !== i[o])) return !1
  }
  return !0
}

function sg(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const og = (t, e, n) => t ?? e ?? n,
  uS = ii({
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
      const r = mn(Bf),
        i = _t(() => t.route || r.value),
        s = mn(rg, 0),
        o = _t(() => {
          let u = Pe(s);
          const {
            matched: c
          } = i.value;
          let f;
          for (;
            (f = c[u]) && !f.components;) u++;
          return u
        }),
        a = _t(() => i.value.matched[o.value]);
      Xs(rg, _t(() => o.value + 1)), Xs(rS, a), Xs(Bf, i);
      const l = _n();
      return Yn(() => [l.value, a.value, t.name], ([u, c, f], [d, h, g]) => {
        c && (c.instances[f] = u, h && h !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), u && c && (!h || !co(c, h) || !d) && (c.enterCallbacks[f] || []).forEach(p => p(u))
      }, {
        flush: "post"
      }), () => {
        const u = i.value,
          c = t.name,
          f = a.value,
          d = f && f.components[c];
        if (!d) return ag(n.default, {
          Component: d,
          route: u
        });
        const h = f.props[c],
          g = h ? h === !0 ? u.params : typeof h == "function" ? h(u) : h : null,
          b = Vn(d, $e({}, g, e, {
            onVnodeUnmounted: y => {
              y.component.isUnmounted && (f.instances[c] = null)
            },
            ref: l
          }));
        return ag(n.default, {
          Component: b,
          route: u
        }) || b
      }
    }
  });

function ag(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n
}
const py = uS;

function cS(t) {
  const e = qT(t.routes, t),
    n = t.parseQuery || tS,
    r = t.stringifyQuery || ng,
    i = t.history,
    s = Oo(),
    o = Oo(),
    a = Oo(),
    l = io(nr);
  let u = nr;
  Os && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Pc.bind(null, B => "" + B),
    f = Pc.bind(null, CT),
    d = Pc.bind(null, Sa);

  function h(B, J) {
    let X, Z;
    return uy(B) ? (X = e.getRecordMatcher(B), Z = J) : Z = B, e.addRoute(Z, X)
  }

  function g(B) {
    const J = e.getRecordMatcher(B);
    J && e.removeRoute(J)
  }

  function p() {
    return e.getRoutes().map(B => B.record)
  }

  function b(B) {
    return !!e.getRecordMatcher(B)
  }

  function y(B, J) {
    if (J = $e({}, J || l.value), typeof B == "string") {
      const x = Rc(n, B, J.path),
        N = e.resolve({
          path: x.path
        }, J),
        K = i.createHref(x.fullPath);
      return $e(x, N, {
        params: d(N.params),
        hash: Sa(x.hash),
        redirectedFrom: void 0,
        href: K
      })
    }
    let X;
    if (B.path != null) X = $e({}, B, {
      path: Rc(n, B.path, J.path).path
    });
    else {
      const x = $e({}, B.params);
      for (const N in x) x[N] == null && delete x[N];
      X = $e({}, B, {
        params: f(x)
      }), J.params = f(J.params)
    }
    const Z = e.resolve(X, J),
      ue = B.hash || "";
    Z.params = c(d(Z.params));
    const De = ST(r, $e({}, B, {
        hash: bT(ue),
        path: Z.path
      })),
      T = i.createHref(De);
    return $e({
      fullPath: De,
      hash: ue,
      query: r === ng ? nS(B.query) : B.query || {}
    }, Z, {
      redirectedFrom: void 0,
      href: T
    })
  }

  function D(B) {
    return typeof B == "string" ? Rc(n, B, l.value.path) : $e({}, B)
  }

  function _(B, J) {
    if (u !== B) return fo(8, {
      from: J,
      to: B
    })
  }

  function m(B) {
    return E(B)
  }

  function v(B) {
    return m($e(D(B), {
      replace: !0
    }))
  }

  function C(B) {
    const J = B.matched[B.matched.length - 1];
    if (J && J.redirect) {
      const {
        redirect: X
      } = J;
      let Z = typeof X == "function" ? X(B) : X;
      return typeof Z == "string" && (Z = Z.includes("?") || Z.includes("#") ? Z = D(Z) : {
        path: Z
      }, Z.params = {}), $e({
        query: B.query,
        hash: B.hash,
        params: Z.path != null ? {} : B.params
      }, Z)
    }
  }

  function E(B, J) {
    const X = u = y(B),
      Z = l.value,
      ue = B.state,
      De = B.force,
      T = B.replace === !0,
      x = C(X);
    if (x) return E($e(D(x), {
      state: typeof x == "object" ? $e({}, ue, x.state) : ue,
      force: De,
      replace: T
    }), J || X);
    const N = X;
    N.redirectedFrom = J;
    let K;
    return !De && xT(r, Z, X) && (K = fo(16, {
      to: N,
      from: Z
    }), se(Z, Z, !0, !1)), (K ? Promise.resolve(K) : P(N, Z)).catch(k => Br(k) ? Br(k, 2) ? k : F(k) : z(k, N, Z)).then(k => {
      if (k) {
        if (Br(k, 2)) return E($e({
          replace: T
        }, D(k.to), {
          state: typeof k.to == "object" ? $e({}, ue, k.to.state) : ue,
          force: De
        }), J || N)
      } else k = O(N, Z, !0, T, ue);
      return V(N, Z, k), k
    })
  }

  function R(B, J) {
    const X = _(B, J);
    return X ? Promise.reject(X) : Promise.resolve()
  }

  function A(B) {
    const J = fe.values().next().value;
    return J && typeof J.runWithContext == "function" ? J.runWithContext(B) : B()
  }

  function P(B, J) {
    let X;
    const [Z, ue, De] = fS(B, J);
    X = Lc(Z.reverse(), "beforeRouteLeave", B, J);
    for (const x of Z) x.leaveGuards.forEach(N => {
      X.push(pi(N, B, J))
    });
    const T = R.bind(null, B, J);
    return X.push(T), ve(X).then(() => {
      X = [];
      for (const x of s.list()) X.push(pi(x, B, J));
      return X.push(T), ve(X)
    }).then(() => {
      X = Lc(ue, "beforeRouteUpdate", B, J);
      for (const x of ue) x.updateGuards.forEach(N => {
        X.push(pi(N, B, J))
      });
      return X.push(T), ve(X)
    }).then(() => {
      X = [];
      for (const x of De)
        if (x.beforeEnter)
          if (cr(x.beforeEnter))
            for (const N of x.beforeEnter) X.push(pi(N, B, J));
          else X.push(pi(x.beforeEnter, B, J));
      return X.push(T), ve(X)
    }).then(() => (B.matched.forEach(x => x.enterCallbacks = {}), X = Lc(De, "beforeRouteEnter", B, J, A), X.push(T), ve(X))).then(() => {
      X = [];
      for (const x of o.list()) X.push(pi(x, B, J));
      return X.push(T), ve(X)
    }).catch(x => Br(x, 8) ? x : Promise.reject(x))
  }

  function V(B, J, X) {
    a.list().forEach(Z => A(() => Z(B, J, X)))
  }

  function O(B, J, X, Z, ue) {
    const De = _(B, J);
    if (De) return De;
    const T = J === nr,
      x = Os ? history.state : {};
    X && (Z || T ? i.replace(B.fullPath, $e({
      scroll: T && x && x.scroll
    }, ue)) : i.push(B.fullPath, ue)), l.value = B, se(B, J, X, T), F()
  }
  let Y;

  function q() {
    Y || (Y = i.listen((B, J, X) => {
      if (!le.listening) return;
      const Z = y(B),
        ue = C(Z);
      if (ue) {
        E($e(ue, {
          replace: !0,
          force: !0
        }), Z).catch(na);
        return
      }
      u = Z;
      const De = l.value;
      Os && MT(zp(De.fullPath, X.delta), Xu()), P(Z, De).catch(T => Br(T, 12) ? T : Br(T, 2) ? (E($e(D(T.to), {
        force: !0
      }), Z).then(x => {
        Br(x, 20) && !X.delta && X.type === xa.pop && i.go(-1, !1)
      }).catch(na), Promise.reject()) : (X.delta && i.go(-X.delta, !1), z(T, Z, De))).then(T => {
        T = T || O(Z, De, !1), T && (X.delta && !Br(T, 8) ? i.go(-X.delta, !1) : X.type === xa.pop && Br(T, 20) && i.go(-1, !1)), V(Z, De, T)
      }).catch(na)
    }))
  }
  let Q = Oo(),
    U = Oo(),
    W;

  function z(B, J, X) {
    F(B);
    const Z = U.list();
    return Z.length ? Z.forEach(ue => ue(B, J, X)) : console.error(B), Promise.reject(B)
  }

  function H() {
    return W && l.value !== nr ? Promise.resolve() : new Promise((B, J) => {
      Q.add([B, J])
    })
  }

  function F(B) {
    return W || (W = !B, q(), Q.list().forEach(([J, X]) => B ? X(B) : J()), Q.reset()), B
  }

  function se(B, J, X, Z) {
    const {
      scrollBehavior: ue
    } = t;
    if (!Os || !ue) return Promise.resolve();
    const De = !X && NT(zp(B.fullPath, 0)) || (Z || !X) && history.state && history.state.scroll || null;
    return Es().then(() => ue(B, J, De)).then(T => T && FT(T)).catch(T => z(T, B, J))
  }
  const ge = B => i.go(B);
  let Te;
  const fe = new Set,
    le = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: g,
      clearRoutes: e.clearRoutes,
      hasRoute: b,
      getRoutes: p,
      resolve: y,
      options: t,
      push: m,
      replace: v,
      go: ge,
      back: () => ge(-1),
      forward: () => ge(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: U.add,
      isReady: H,
      install(B) {
        const J = this;
        B.component("RouterLink", oS), B.component("RouterView", py), B.config.globalProperties.$router = J, Object.defineProperty(B.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => Pe(l)
        }), Os && !Te && l.value === nr && (Te = !0, m(i.location).catch(ue => {}));
        const X = {};
        for (const ue in nr) Object.defineProperty(X, ue, {
          get: () => l.value[ue],
          enumerable: !0
        });
        B.provide(Xh, J), B.provide(dy, Gr(X)), B.provide(Bf, l);
        const Z = B.unmount;
        fe.add(B), B.unmount = function() {
          fe.delete(B), fe.size < 1 && (u = nr, Y && Y(), Y = null, l.value = nr, Te = !1, W = !1), Z()
        }
      }
    };

  function ve(B) {
    return B.reduce((J, X) => J.then(() => A(X)), Promise.resolve())
  }
  return le
}

function fS(t, e) {
  const n = [],
    r = [],
    i = [],
    s = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < s; o++) {
    const a = e.matched[o];
    a && (t.matched.find(u => co(u, a)) ? r.push(a) : n.push(a));
    const l = t.matched[o];
    l && (e.matched.find(u => co(u, l)) || i.push(l))
  }
  return [n, r, i]
}
const hS = /(:\w+)\([^)]+\)/g,
  dS = /(:\w+)[?+*]/g,
  pS = /:\w+/g,
  gS = (t, e) => e.path.replace(hS, "$1").replace(dS, "$1").replace(pS, n => {
    var r;
    return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
  }),
  Hf = (t, e) => {
    const n = t.route.matched.find(i => {
        var s;
        return ((s = i.components) == null ? void 0 : s.default) === t.Component.type
      }),
      r = e ?? (n == null ? void 0 : n.meta.key) ?? (n && gS(t.route, n));
    return typeof r == "function" ? r(t.route) : r
  },
  _S = (t, e) => ({
    default: () => t ? Vn(zv, t === !0 ? {} : t, e) : e
  });

function qh(t) {
  return Array.isArray(t) ? t : [t]
}
const Oc = [{
    name: "index___en",
    path: "/",
    component: () => fu(() => import("./C3DBThoh.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url)
  }, {
    name: "index___ru",
    path: "/ru",
    component: () => fu(() => import("./C3DBThoh.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url)
  }],
  mS = (t, e, n) => (e = e === !0 ? {} : e, {
    default: () => {
      var r;
      return e ? Vn(t, e, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
  }),
  yS = /(:\w+)\([^)]+\)/g,
  DS = /(:\w+)[?+*]/g,
  bS = /:\w+/g;

function lg(t) {
  const e = (t == null ? void 0 : t.meta.key) ?? t.path.replace(yS, "$1").replace(DS, "$1").replace(bS, n => {
    var r;
    return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
  });
  return typeof e == "function" ? e(t) : e
}

function vS(t, e) {
  return t === e || e === nr ? !1 : lg(t) !== lg(e) ? !0 : !t.matched.every((r, i) => {
    var s, o;
    return r.components && r.components.default === ((o = (s = e.matched[i]) == null ? void 0 : s.components) == null ? void 0 : o.default)
  })
}
const ES = {
  scrollBehavior(t, e, n) {
    var u;
    const r = Ue(),
      i = ((u = Mn().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
    let s = n || void 0;
    const o = typeof t.meta.scrollToTop == "function" ? t.meta.scrollToTop(t, e) : t.meta.scrollToTop;
    if (!s && e && t && o !== !1 && vS(t, e) && (s = {
        left: 0,
        top: 0
      }), t.path === e.path) return e.hash && !t.hash ? {
      left: 0,
      top: 0
    } : t.hash ? {
      el: t.hash,
      top: ug(t.hash),
      behavior: i
    } : !1;
    const a = c => !!(c.meta.pageTransition ?? Sf),
      l = a(e) && a(t) ? "page:transition:finish" : "page:finish";
    return new Promise(c => {
      r.hooks.hookOnce(l, async () => {
        await new Promise(f => setTimeout(f, 0)), t.hash && (s = {
          el: t.hash,
          top: ug(t.hash),
          behavior: i
        }), c(s)
      })
    })
  }
};

function ug(t) {
  try {
    const e = document.querySelector(t);
    if (e) return (Number.parseFloat(getComputedStyle(e).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
  } catch {}
  return 0
}
const CS = {
    hashMode: !1,
    scrollBehaviorType: "auto"
  },
  _r = {
    ...CS,
    ...ES
  },
  wS = async t => {
    var l;
    let e, n;
    if (!((l = t.meta) != null && l.validate)) return;
    const r = Ue(),
      i = Mn(),
      s = ([e, n] = or(() => Promise.resolve(t.meta.validate(t))), e = await e, n(), e);
    if (s === !0) return;
    const o = zu({
        statusCode: s && s.statusCode || 404,
        statusMessage: s && s.statusMessage || `Page Not Found: ${t.fullPath}`,
        data: {
          path: t.fullPath
        }
      }),
      a = i.beforeResolve(u => {
        if (a(), u === t) {
          const c = i.afterEach(async () => {
            c(), await r.runWithContext(() => Is(o)), window == null || window.history.pushState({}, "", t.fullPath)
          });
          return !1
        }
      })
  }, TS = async t => {
    let e, n;
    const r = ([e, n] = or(() => zh({
      path: t.path
    })), e = await e, n(), e);
    if (r.redirect) return Fr(r.redirect, {
      acceptRelative: !0
    }) ? (window.location.href = r.redirect, !1) : r.redirect
  }, SS = [wS, TS], ia = {};

function xS(t, e, n) {
  const {
    pathname: r,
    search: i,
    hash: s
  } = e, o = t.indexOf("#");
  if (o > -1) {
    const u = s.includes(t.slice(o)) ? t.slice(o).length : 1;
    let c = s.slice(u);
    return c[0] !== "/" && (c = "/" + c), kp(c, "")
  }
  const a = kp(r, t),
    l = !n || Ef(a, n, {
      trailingSlash: !0
    }) ? a : n;
  return l + (l.includes("?") ? "" : i) + s
}
const kS = un({
    name: "nuxt:router",
    enforce: "pre",
    async setup(t) {
      var b;
      let e, n, r = Cn().app.baseURL;
      const i = ((b = _r.history) == null ? void 0 : b.call(_r, r)) ?? HT(r),
        s = _r.routes ? ([e, n] = or(() => _r.routes(Oc)), e = await e, n(), e ?? Oc) : Oc;
      let o;
      const a = cS({
        ..._r,
        scrollBehavior: (y, D, _) => {
          if (D === nr) {
            o = _;
            return
          }
          if (_r.scrollBehavior) {
            if (a.options.scrollBehavior = _r.scrollBehavior, "scrollRestoration" in window.history) {
              const m = a.beforeEach(() => {
                m(), window.history.scrollRestoration = "manual"
              })
            }
            return _r.scrollBehavior(y, nr, o || _)
          }
        },
        history: i,
        routes: s
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), t.vueApp.use(a);
      const l = io(a.currentRoute.value);
      a.afterEach((y, D) => {
        l.value = D
      }), Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const u = xS(r, window.location, t.payload.path),
        c = io(a.currentRoute.value),
        f = () => {
          c.value = a.currentRoute.value
        };
      t.hook("page:finish", f), a.afterEach((y, D) => {
        var _, m, v, C;
        ((m = (_ = y.matched[0]) == null ? void 0 : _.components) == null ? void 0 : m.default) === ((C = (v = D.matched[0]) == null ? void 0 : v.components) == null ? void 0 : C.default) && f()
      });
      const d = {};
      for (const y in c.value) Object.defineProperty(d, y, {
        get: () => c.value[y],
        enumerable: !0
      });
      t._route = Gr(d), t._middleware = t._middleware || {
        global: [],
        named: {}
      };
      const h = Yu();
      a.afterEach(async (y, D, _) => {
        delete t._processingMiddleware, !t.isHydrating && h.value && await t.runWithContext(rw), _ && await t.callHook("page:loading:end")
      });
      try {
        [e, n] = or(() => a.isReady()), await e, n()
      } catch (y) {
        [e, n] = or(() => t.runWithContext(() => Is(y))), await e, n()
      }
      const g = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
      f();
      const p = t.payload.state._layout;
      return a.beforeEach(async (y, D) => {
        var _;
        await t.callHook("page:loading:start"), y.meta = Mi(y.meta), t.isHydrating && p && !xi(y.meta.layout) && (y.meta.layout = p), t._processingMiddleware = !0;
        {
          const m = new Set([...SS, ...t._middleware.global]);
          for (const v of y.matched) {
            const C = v.meta.middleware;
            if (C)
              for (const E of qh(C)) m.add(E)
          } {
            const v = await t.runWithContext(() => zh({
              path: y.path
            }));
            if (v.appMiddleware)
              for (const C in v.appMiddleware) v.appMiddleware[C] ? m.add(C) : m.delete(C)
          }
          for (const v of m) {
            const C = typeof v == "string" ? t._middleware.named[v] || await ((_ = ia[v]) == null ? void 0 : _.call(ia).then(R => R.default || R)) : v;
            if (!C) throw new Error(`Unknown route middleware: '${v}'.`);
            const E = await t.runWithContext(() => C(y, D));
            if (!t.payload.serverRendered && t.isHydrating && (E === !1 || E instanceof Error)) {
              const R = E || Af({
                statusCode: 404,
                statusMessage: `Page Not Found: ${u}`
              });
              return await t.runWithContext(() => Is(R)), !1
            }
            if (E !== !0 && (E || E === !1)) return E
          }
        }
      }), a.onError(async () => {
        delete t._processingMiddleware, await t.callHook("page:loading:end")
      }), a.afterEach(async (y, D) => {
        y.matched.length === 0 && await t.runWithContext(() => Is(Af({
          statusCode: 404,
          fatal: !1,
          statusMessage: `Page not found: ${y.fullPath}`,
          data: {
            path: y.fullPath
          }
        })))
      }), t.hooks.hookOnce("app:created", async () => {
        try {
          "name" in g && (g.name = void 0), await a.replace({
            ...g,
            force: !0
          }), a.options.scrollBehavior = _r.scrollBehavior
        } catch (y) {
          await t.runWithContext(() => Is(y))
        }
      }), {
        provide: {
          router: a
        }
      }
    }
  }),
  cg = globalThis.requestIdleCallback || (t => {
    const e = Date.now(),
      n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
      };
    return setTimeout(() => {
      t(n)
    }, 1)
  }),
  PL = globalThis.cancelIdleCallback || (t => {
    clearTimeout(t)
  }),
  Jh = t => {
    const e = Ue();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", () => {
      cg(() => t())
    }) : cg(() => t())
  },
  AS = un({
    name: "nuxt:payload",
    setup(t) {
      Mn().beforeResolve(async (e, n) => {
        if (e.path === n.path) return;
        const r = await Wp(e.path);
        r && Object.assign(t.static.data, r.data)
      }), Jh(() => {
        var e;
        t.hooks.hook("link:prefetch", async n => {
          const {
            hostname: r
          } = new URL(n, window.location.href);
          r === window.location.hostname && await Wp(n)
        }), ((e = navigator.connection) == null ? void 0 : e.effectiveType) !== "slow-2g" && setTimeout(Gu, 1e3)
      })
    }
  }),
  PS = un(() => {
    const t = Mn();
    Jh(() => {
      t.beforeResolve(async () => {
        await new Promise(e => {
          setTimeout(e, 100), requestAnimationFrame(() => {
            setTimeout(e, 0)
          })
        })
      })
    })
  }),
  RS = un(t => {
    let e;
    async function n() {
      const r = await Gu();
      e && clearTimeout(e), e = setTimeout(n, Lp);
      try {
        const i = await $fetch(Kh("builds/latest.json") + `?${Date.now()}`);
        i.id !== r.id && t.hooks.callHook("app:manifest:update", i)
      } catch {}
    }
    Jh(() => {
      e = setTimeout(n, Lp)
    })
  });

function LS(t = {}) {
  const e = t.path || window.location.pathname;
  let n = {};
  try {
    n = Ta(sessionStorage.getItem("nuxt:reload") || "{}")
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
        state: Ue().payload.state
      }))
    } catch {}
    window.location.pathname !== e ? window.location.href = e : window.location.reload()
  }
}
const OS = un({
    name: "nuxt:chunk-reload",
    setup(t) {
      const e = Mn(),
        n = Cn(),
        r = new Set;
      e.beforeEach(() => {
        r.clear()
      }), t.hook("app:chunkError", ({
        error: s
      }) => {
        r.add(s)
      });

      function i(s) {
        const a = "href" in s && s.href[0] === "#" ? n.app.baseURL + s.href : So(n.app.baseURL, s.fullPath);
        LS({
          path: a,
          persistState: !0
        })
      }
      t.hook("app:manifest:update", () => {
        e.beforeResolve(i)
      }), e.onError((s, o) => {
        r.has(s) && i(o)
      })
    }
  }),
  FS = un({
    name: "nuxt:global-components"
  }),
  ul = {},
  MS = un({
    name: "nuxt:prefetch",
    setup(t) {
      const e = Mn();
      t.hooks.hook("app:mounted", () => {
        e.beforeEach(async n => {
          var i;
          const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
          r && typeof ul[r] == "function" && await ul[r]()
        })
      }), t.hooks.hook("link:prefetch", n => {
        if (Fr(n)) return;
        const r = e.resolve(n);
        if (!r) return;
        const i = r.meta.layout;
        let s = qh(r.meta.middleware);
        s = s.filter(o => typeof o == "string");
        for (const o of s) typeof ia[o] == "function" && ia[o]();
        i && typeof ul[i] == "function" && ul[i]()
      })
    }
  });
/*!
 * shared v10.0.7
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const hu = typeof window < "u",
  $i = (t, e = !1) => e ? Symbol.for(t) : Symbol(t),
  NS = (t, e, n) => $S({
    l: t,
    k: e,
    s: n
  }),
  $S = t => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
  mt = t => typeof t == "number" && isFinite(t),
  IS = t => Zh(t) === "[object Date]",
  du = t => Zh(t) === "[object RegExp]",
  qu = t => Re(t) && Object.keys(t).length === 0,
  yt = Object.assign,
  BS = Object.create,
  Ve = (t = null) => BS(t);
let fg;
const Qh = () => fg || (fg = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ve());

function hg(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const HS = Object.prototype.hasOwnProperty;

function ar(t, e) {
  return HS.call(t, e)
}
const ct = Array.isArray,
  He = t => typeof t == "function",
  re = t => typeof t == "string",
  nt = t => typeof t == "boolean",
  US = t => typeof t == "symbol",
  ke = t => t !== null && typeof t == "object",
  VS = t => ke(t) && He(t.then) && He(t.catch),
  gy = Object.prototype.toString,
  Zh = t => gy.call(t),
  Re = t => Zh(t) === "[object Object]",
  jS = t => t == null ? "" : ct(t) || Re(t) && t.toString === gy ? JSON.stringify(t, null, 2) : String(t);

function ed(t, e = "") {
  return t.reduce((n, r, i) => i === 0 ? n + r : n + e + r, "")
}

function WS(t, e) {
  typeof console < "u" && (console.warn("[intlify] " + t), e && console.warn(e.stack))
}
const cl = t => !ke(t) || ct(t);

function as(t, e) {
  if (cl(t) || cl(e)) throw new Error("Invalid value");
  const n = [{
    src: t,
    des: e
  }];
  for (; n.length;) {
    const {
      src: r,
      des: i
    } = n.pop();
    Object.keys(r).forEach(s => {
      s !== "__proto__" && (ke(r[s]) && !ke(i[s]) && (i[s] = Array.isArray(r[s]) ? [] : Ve()), cl(i[s]) || cl(r[s]) ? i[s] = r[s] : n.push({
        src: r[s],
        des: i[s]
      }))
    })
  }
}
const KS = {
    percent: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "percent"
      }
    },
    loading: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "loaded experience"
      }
    },
    "in-search": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "looking for"
      }
    },
    "new-emotions": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "new emotions?"
      }
    },
    navigation: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "navigation"
      }
    },
    discuss: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "let's discuss"
      }
    },
    introduction: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "introduction"
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
    cases: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "cases"
      }
    },
    services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "services"
      }
    },
    partnership: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "partnership"
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
    },
    contact: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "contact"
      }
    },
    "full-cycle-title": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Full-cycle real estate services"
      }
    },
    buy: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "buy"
      }
    },
    sell: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "sell"
      }
    },
    rent: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "rent"
      }
    },
    invest: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "invest"
      }
    },
    relocate: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "relocate"
      }
    },
    "our-services": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Our Services"
      }
    },
    "investment-funds": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Cooperation investment funds"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "next"
      }
    },
    prev: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "prev"
      }
    },
    "contact-title": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Ready to Find Your dream heaven?"
      }
    },
    "contact-subtitle": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Our manager will contact you as soon as possible."
      }
    },
    input: {
      name: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Name"
          }
        },
        placeholder: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "type your name..."
          }
        }
      },
      phone: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Phone number"
          }
        },
        placeholder: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "type your phone number..."
          }
        }
      },
      message: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Message"
          }
        },
        placeholder: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "type your message..."
          }
        }
      }
    },
    "form-desc": {
      first: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "By sending your request, you're agreeing to our "
        }
      },
      middle: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "privacy policy"
        }
      },
      second: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: ". We promise to keep your personal information safe and secure."
        }
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
    "show-on-map": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Show on map"
      }
    },
    social: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Social"
      }
    },
    legal: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Legal"
      }
    },
    "all-rights": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "All rights reserved."
      }
    },
    "privacy-policy": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Privacy Policy"
      }
    },
    "terms-of-use": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "terms & conditions"
      }
    },
    notif: {
      first: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Your request has been received and is being processed with the utmost priority."
        }
      },
      second: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "We will contact you shortly to proceed further."
        }
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
    }
  },
  YS = {
    percent: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "процентов"
      }
    },
    loading: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "загрузка"
      }
    },
    "in-search": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "в поисках"
      }
    },
    "new-emotions": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "новых эмоций?"
      }
    },
    navigation: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "навигация"
      }
    },
    discuss: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "связаться"
      }
    },
    introduction: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "вступление"
      }
    },
    about: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "О нас"
      }
    },
    cases: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "кейсы"
      }
    },
    services: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "сервисы"
      }
    },
    partnership: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "партнерство"
      }
    },
    team: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "команда"
      }
    },
    contact: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "контакты"
      }
    },
    "full-cycle-title": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Полный цикл услуг в сфере недвижимости"
      }
    },
    buy: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "покупка"
      }
    },
    sell: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "продажа"
      }
    },
    rent: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "аренда"
      }
    },
    invest: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "инвестиции"
      }
    },
    relocate: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "релокейт"
      }
    },
    "our-services": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Наши услуги"
      }
    },
    "investment-funds": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Фонды инвестиционного сотрудничества"
      }
    },
    next: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "след"
      }
    },
    prev: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "пред"
      }
    },
    "contact-title": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Готовы найти свой рай мечты?"
      }
    },
    "contact-subtitle": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Наш менеджер свяжется с вами как можно скорее."
      }
    },
    input: {
      name: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Имя"
          }
        },
        placeholder: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "введите ваше имя..."
          }
        }
      },
      phone: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Номер телефона"
          }
        },
        placeholder: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "введите ваш номер телефона..."
          }
        }
      },
      message: {
        title: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "Сообщение"
          }
        },
        placeholder: {
          t: 0,
          b: {
            t: 2,
            i: [{
              t: 3
            }],
            s: "введите ваше сообщение..."
          }
        }
      }
    },
    "form-desc": {
      first: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Отправляя свой запрос, вы соглашаетесь с нашей "
        }
      },
      middle: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "политикой конфиденциальности"
        }
      },
      second: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: ". Мы обещаем хранить вашу личную информацию в безопасности."
        }
      }
    },
    send: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Отправить"
      }
    },
    "show-on-map": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Показать на карте"
      }
    },
    social: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Соцсети"
      }
    },
    legal: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Юр. информация"
      }
    },
    "all-rights": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "все права защищены."
      }
    },
    "privacy-policy": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Политика конфиденциальности"
      }
    },
    "terms-of-use": {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Условия и положения"
      }
    },
    notif: {
      first: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Ваш запрос получен и обрабатывается с наивысшим приоритетом."
        }
      },
      second: {
        t: 0,
        b: {
          t: 2,
          i: [{
            t: 3
          }],
          s: "Мы свяжемся с вами в ближайшее время для дальнейших действий."
        }
      }
    },
    close: {
      t: 0,
      b: {
        t: 2,
        i: [{
          t: 3
        }],
        s: "Закрыть"
      }
    }
  },
  ho = ["en", "ru"],
  pu = {
    en: [{
      key: "../i18n/locales/en.json",
      load: () => Promise.resolve(KS),
      cache: !0
    }],
    ru: [{
      key: "../i18n/locales/ru.json",
      load: () => Promise.resolve(YS),
      cache: !0
    }]
  },
  zS = [],
  Ju = [{
    code: "en",
    files: [{
      path: "/var/www/projects/fame/i18n/locales/en.json"
    }]
  }, {
    code: "ru",
    files: [{
      path: "/var/www/projects/fame/i18n/locales/ru.json"
    }]
  }],
  _y = "@nuxtjs/i18n",
  GS = !1,
  XS = "nuxtI18nInternal",
  qS = "i18n_redirected",
  dg = "nuxt-i18n-slp",
  JS = typeof window < "u";

function QS(t) {
  t = t || [];
  const e = [];
  for (const n of t) re(n) ? e.push({
    code: n
  }) : e.push(n);
  return e
}

function Qu(t) {
  return re(t) ? t : US(t) ? t.toString() : "(null)"
}

function pg(t, e, {
  defaultLocale: n,
  strategy: r,
  routesNameSeparator: i,
  defaultLocaleRouteNameSuffix: s,
  differentDomains: o
}) {
  const a = r !== "no_prefix" || o;
  let l = Qu(t) + (a ? i + e : "");
  return e === n && r === "prefix_and_default" && (l += i + s), l
}

function gg(t, e) {
  return He(t) ? t(e) : t
}

function ZS(t, e) {
  const n = [];
  for (const [r, i] of e.entries()) {
    const s = t.find(o => o.language.toLowerCase() === i.toLowerCase());
    if (s) {
      n.push({
        code: s.code,
        score: 1 - r / e.length
      });
      break
    }
  }
  for (const [r, i] of e.entries()) {
    const s = i.split("-")[0].toLowerCase(),
      o = t.find(a => a.language.split("-")[0].toLowerCase() === s);
    if (o) {
      n.push({
        code: o.code,
        score: .999 - r / e.length
      });
      break
    }
  }
  return n
}
const ex = ZS;

function tx(t, e) {
  return t.score === e.score ? e.code.length - t.code.length : e.score - t.score
}
const nx = tx;

function rx(t, e, {
  matcher: n = ex,
  comparer: r = nx
} = {}) {
  const i = [];
  for (const o of t) {
    const {
      code: a
    } = o, l = o.language || a;
    i.push({
      code: a,
      language: l
    })
  }
  const s = n(i, e);
  return s.length > 1 && s.sort(r), s.length ? s[0].code : ""
}

function td(t) {
  return new RegExp(`^/(${t.join("|")})(?:/|$)`, "i")
}
const sa = new Map;
async function ix(t, e) {
  const n = {
    messages: {}
  };
  for (const r of t) {
    const {
      default: i
    } = await r(), s = He(i) ? await e.runWithContext(async () => await i()) : i;
    as(s, n)
  }
  return n
}

function my(t, e) {
  let n = [];
  if (ct(t)) n = t;
  else if (ke(t)) {
    const r = [...e, "default"];
    for (const i of r) t[i] && (n = [...n, ...t[i].filter(Boolean)])
  } else re(t) && e.every(r => r !== t) && n.push(t);
  return n
}
async function sx(t, e, n) {
  const {
    defaultLocale: r,
    initialLocale: i,
    localeCodes: s,
    fallbackLocale: o,
    lazy: a
  } = n;
  if (a && o) {
    const u = my(o, [r, i]);
    await Promise.all(u.map(c => _g(c, e, t)))
  }
  const l = a ? [...new Set().add(r).add(i)] : s;
  return await Promise.all(l.map(u => _g(u, e, t))), t
}
async function ox(t, {
  key: e,
  load: n
}) {
  let r = null;
  try {
    const i = await n().then(s => "default" in s ? s.default : s);
    He(i) ? r = await i(t) : (r = i, r != null && sa && sa.set(e, r))
  } catch (i) {
    console.error("Failed locale loading: " + i.message)
  }
  return r
}
async function gu(t, e, n) {
  const r = e[t];
  if (r == null) {
    console.warn("Could not find messages for locale code: " + t);
    return
  }
  const i = {};
  for (const s of r) {
    let o = null;
    sa && sa.has(s.key) && s.cache ? o = sa.get(s.key) : o = await ox(t, s), o != null && as(o, i)
  }
  n(t, i)
}
async function _g(t, e, n) {
  await gu(t, e, (i, s) => {
    const o = n[i] || {};
    as(s, o), n[i] = o
  })
}

function ax(t) {
  return t != null && "global" in t && "mode" in t
}

function lx(t) {
  return t != null && !("__composer" in t) && "locale" in t && at(t.locale)
}

function yy(t) {
  return t != null && "__composer" in t
}

function Ii(t) {
  return ax(t) ? t.global : t
}

function Bs(t) {
  const e = Ii(t);
  return lx(e) ? e : yy(e) ? e.__composer : e
}

function ux(t, e) {
  return Pe(t[e])
}

function Zu(t, e) {
  return ux(Ii(t), e)
}

function Dy(t, e) {
  const n = Ii(t);
  at(n.locale) ? n.locale.value = e : n.locale = e
}

function ec(t) {
  return Zu(t, "locale")
}

function cx(t) {
  return Zu(t, "locales")
}

function fx(t) {
  return Zu(t, "localeCodes")
}

function hx(t, e) {
  return Ii(t).setLocaleCookie(e)
}

function by(t, e, n) {
  return Ii(t).mergeLocaleMessage(e, n)
}
async function dx(t, e, n, r, i) {
  return Ii(t).onBeforeLanguageSwitch(e, n, r, i)
}

function px(t, e, n) {
  return Ii(t).onLanguageSwitched(e, n)
}

function gx(t, e) {
  return [t.slice(0, e), t.slice(e)]
}

function _x(t) {
  const {
    fullPath: e,
    query: n,
    hash: r,
    name: i,
    path: s,
    params: o,
    meta: a,
    redirectedFrom: l,
    matched: u
  } = t;
  return {
    fullPath: e,
    params: o,
    query: n,
    hash: r,
    name: i,
    path: s,
    meta: a,
    matched: u,
    redirectedFrom: l
  }
}

function mx({
  router: t
}, e, n, r) {
  var u, c;
  if (n !== "prefix") return t.resolve(e);
  const [i, s] = gx(e.path, 1), o = `${i}${r}${s===""?s:`/${s}`}`, a = (c = (u = t.options) == null ? void 0 : u.routes) == null ? void 0 : c.find(f => f.path === o);
  if (a == null) return e;
  const l = yt({}, e, a);
  return l.path = o, t.resolve(l)
}
const yx = new Set(["prefix_and_default", "prefix_except_default"]);

function Dx(t) {
  const {
    currentLocale: e,
    defaultLocale: n,
    strategy: r
  } = t;
  return !(e === n && yx.has(r)) && r !== "no_prefix"
}
const bx = Dx;

function po(t, e) {
  const {
    routesNameSeparator: n
  } = t.runtimeConfig.public.i18n, r = Pe(e);
  return r == null || !r.name ? void 0 : Qu(r.name).split(n)[0]
}

function tc(t, e, n) {
  var i;
  if (typeof e == "string" && Fr(e, {
      acceptRelative: !0
    })) return e;
  const r = nc(t, e, n);
  return r == null ? "" : ((i = r.redirectedFrom) == null ? void 0 : i.fullPath) || r.fullPath
}

function nd(t, e, n) {
  return nc(t, e, n) ?? void 0
}

function vx(t, e, n) {
  return nc(t, e, n) ?? void 0
}

function nc(t, e, n) {
  const {
    router: r,
    i18n: i
  } = t, s = n || ec(i), {
    defaultLocale: o,
    strategy: a,
    trailingSlash: l
  } = t.runtimeConfig.public.i18n, u = Ox(t.runtimeConfig);
  let c;
  if (re(e))
    if (e[0] === "/") {
      const {
        pathname: h,
        search: g,
        hash: p
      } = Cf(e), b = v0(g);
      c = {
        path: h,
        query: b,
        hash: p
      }
    } else c = {
      name: e
    };
  else c = e;
  let f = yt({}, c);
  if ((h => "path" in h && !!h.path && !("name" in h))(f)) {
    const h = mx(t, f, a, s),
      g = po(t, h);
    re(g) ? (f = {
      name: pg(g, s, t.runtimeConfig.public.i18n),
      params: h.params,
      query: h.query,
      hash: h.hash
    }, f.state = h.state) : (u({
      currentLocale: s,
      defaultLocale: o,
      strategy: a
    }) && (f.path = `/${s}${f.path}`), f.path = l ? iu(f.path, !0) : Wu(f.path, !0))
  } else !f.name && !("path" in f) && (f.name = po(t, r.currentRoute.value)), f.name = pg(f.name, s, t.runtimeConfig.public.i18n);
  try {
    const h = r.resolve(f);
    return h.name ? h : r.resolve(e)
  } catch (h) {
    if (typeof h == "object" && "type" in h && h.type === 1) return null
  }
}

function Ex(t, e) {
  var r;
  if (t.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR) return Pe(t.metaState.value);
  const n = e.meta || {};
  return ((r = Pe(n)) == null ? void 0 : r[XS]) || {}
}

function go(t, e, n) {
  const r = n ?? t.router.currentRoute.value,
    i = po(t, r);
  if (!i) return "";
  const s = Fx(t.runtimeConfig),
    o = _x(r),
    a = Ex(t, r)[e],
    l = {
      ...o,
      name: i,
      params: {
        ...o.params,
        ...a
      }
    },
    u = tc(t, l, e);
  return s(u, e)
}

function vy(t, {
  dir: e = !0,
  lang: n = !0,
  seo: r = !0,
  key: i = "hid"
}) {
  const {
    defaultDirection: s
  } = Cn().public.i18n, o = Bs(t.i18n), a = {
    htmlAttrs: {},
    link: [],
    meta: []
  }, l = Pe(o.baseUrl);
  if (l || console.warn("I18n `baseUrl` is required to generate valid SEO tag links."), Pe(o.locales) == null || l == null) return a;
  const u = ec(t.i18n),
    c = cx(t.i18n),
    f = QS(c).find(g => g.code === u) || {
      code: u
    },
    d = f.language,
    h = f.dir || s;
  return e && (a.htmlAttrs.dir = h), n && d && (a.htmlAttrs.lang = d), r && u && Pe(o.locales) && (a.link.push(...Cx(t, Pe(c), i), ...wx(t, i, r)), a.meta.push(...Tx(t, i, r), ...Sx(f, d, i), ...xx(Pe(c), d, i))), a
}

function rd() {
  const t = Ue(),
    e = Bs(t.$i18n);
  return So(Pe(e.baseUrl), t.$config.app.baseURL)
}

function Cx(t, e, n) {
  const r = rd(),
    {
      defaultLocale: i,
      strategy: s
    } = Cn().public.i18n,
    o = [];
  if (s === "no_prefix") return o;
  const a = new Map;
  for (const l of e) {
    const u = l.language;
    if (!u) {
      console.warn("Locale `language` ISO code is required to generate alternate link");
      continue
    }
    const [c, f] = u.split("-");
    c && f && (l.isCatchallLocale || !a.has(c)) && a.set(c, l), a.set(u, l)
  }
  for (const [l, u] of a.entries()) {
    const c = go(t, u.code);
    c && o.push({
      [n]: `i18n-alt-${l}`,
      rel: "alternate",
      href: Uf(c, r),
      hreflang: l
    })
  }
  if (i) {
    const l = go(t, i);
    l && o.push({
      [n]: "i18n-xd",
      rel: "alternate",
      href: Uf(l, r),
      hreflang: "x-default"
    })
  }
  return o
}

function Ey(t, e, n) {
  const r = t.router.currentRoute.value,
    i = nd(t, {
      ...r,
      path: void 0,
      name: po(t, r)
    });
  if (!i) return "";
  let s = Uf(i.path, e);
  const o = ke(n) && n.canonicalQueries || [],
    a = i.query,
    l = new URLSearchParams;
  for (const c of o)
    if (c in a) {
      const f = a[c];
      ct(f) ? f.forEach(d => l.append(c, d || "")) : l.append(c, f || "")
    } const u = l.toString();
  return u && (s = `${s}?${u}`), s
}

function wx(t, e, n) {
  const r = rd(),
    i = Ey(t, r, n);
  return i ? [{
    [e]: "i18n-can",
    rel: "canonical",
    href: i
  }] : []
}

function Tx(t, e, n) {
  const r = rd(),
    i = Ey(t, r, n);
  return i ? [{
    [e]: "i18n-og-url",
    property: "og:url",
    content: i
  }] : []
}

function Sx(t, e, n) {
  return !t || !e ? [] : [{
    [n]: "i18n-og",
    property: "og:locale",
    content: Cy(e)
  }]
}

function xx(t, e, n) {
  return t.filter(i => i.language && i.language !== e).map(i => ({
    [n]: `i18n-og-alt-${i.language}`,
    property: "og:locale:alternate",
    content: Cy(i.language)
  }))
}

function Cy(t) {
  return (t || "").replace(/-/g, "_")
}

function Uf(t, e) {
  return t.match(/^https?:\/\//) ? t : So(e, t)
}
const kx = `(${ho.join("|")})`,
  mg = td(ho);

function wy() {
  const {
    routesNameSeparator: t,
    defaultLocaleRouteNameSuffix: e
  } = Cn().public.i18n, n = `(?:${t}${e})?`, r = new RegExp(`${t}${kx}${n}$`, "i");
  return s => {
    let o = null;
    return typeof s == "string" ? (o = s.match(mg), (o == null ? void 0 : o[1]) ?? "") : (s.name ? o = Qu(s.name).match(r) : s.path && (o = s.path.match(mg)), (o == null ? void 0 : o[1]) ?? "")
  }
}
const Ax = "$s";

function Js(...t) {
  const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
  typeof t[0] != "string" && t.unshift(e);
  const [n, r] = t;
  if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
  const i = Ax + n,
    s = Ue(),
    o = ym(s.payload.state, i);
  if (o.value === void 0 && r) {
    const a = r();
    if (at(a)) return s.payload.state[i] = a, a;
    o.value = a
  }
  return o
}

function id(t) {
  return {
    i18n: t ?? Ue().$i18n,
    router: Mn(),
    runtimeConfig: Cn(),
    metaState: Js("nuxt-i18n-meta", () => ({}))
  }
}
async function yg(t, e, n, r = !1) {
  const {
    differentDomains: i,
    skipSettingLocaleOnNavigate: s,
    lazy: o
  } = n, a = Ka(n), l = Ue(), u = ec(e), c = fx(e);

  function f(h = u) {
    a === !1 || !a.useCookie || s || hx(e, h)
  }
  if (!t || !r && i || u === t) return f(), !1;
  const d = await dx(e, u, t, r, l);
  if (d && c.includes(d)) {
    if (u === d) return f(), !1;
    t = d
  }
  if (o) {
    const h = Zu(e, "fallbackLocale"),
      g = by.bind(null, e);
    if (h) {
      const p = my(h, [t]);
      await Promise.all(p.map(b => gu(b, pu, g)))
    }
    await gu(t, pu, g)
  }
  return s ? !1 : (f(t), Dy(e, t), await px(e, u, t), !0)
}

function Dg(t, e, n, r, i) {
  const {
    strategy: s,
    defaultLocale: o,
    differentDomains: a,
    multiDomainLocales: l
  } = i, {
    localeCookie: u
  } = r, c = Ka(i), f = He(n) ? n() : n, d = zx(t, r, f);
  if (d.reason === Ay.SSG_IGNORE) return f;
  if (d.locale && d.from != null) return d.locale;
  let h = "";
  a || l ? h || (h = Gx(Ju, s, t)) : s !== "no_prefix" && (h || (h = e));
  const g = c && c.useCookie && u;
  return h || (h = g || f || o || ""), h
}

function bg({
  route: t,
  locale: e,
  routeLocale: n,
  strategy: r
}, i = !1) {
  if (n === e || r === "no_prefix") return "";
  const s = id();
  let o = go(s, e, t.to);
  return i && !o && (o = tc(s, t.to.fullPath, e)), Ef(o, t.to.fullPath) || t.from && Ef(o, t.from.fullPath) ? "" : o
}

function Px(t) {
  return ke(t) && "path" in t && "statusCode" in t
}
const Rx = () => Js(_y + ":redirect", () => "");

function xs(t, e) {
  return tw(t, {
    redirectCode: e
  })
}
async function vg(t, {
  status: e = 302,
  enableNavigate: n = !1
} = {}) {
  const {
    nuxtApp: r,
    i18n: i,
    locale: s,
    route: o
  } = t, {
    rootRedirect: a,
    differentDomains: l,
    multiDomainLocales: u,
    skipSettingLocaleOnNavigate: c,
    locales: f,
    strategy: d
  } = r.$config.public.i18n;
  let {
    redirectPath: h
  } = t;
  if (o.path === "/" && a) return re(a) ? h = "/" + a : Px(a) && (h = "/" + a.path, e = a.statusCode), h = r.$localePath(h, s), xs(h, e);
  if (!(c && (i.__pendingLocale = s, i.__pendingLocalePromise = new Promise(g => {
      i.__resolvePendingLocalePromise = g
    }), !n))) {
    if (u && d === "prefix_except_default") {
      const g = rc(),
        p = f.find(y => {
          var D;
          return typeof y != "string" ? (D = y.defaultForDomains) == null ? void 0 : D.find(_ => _ === g) : !1
        }),
        b = typeof p != "string" ? p == null ? void 0 : p.code : void 0;
      if (o.path.startsWith(`/${b}`)) return xs(o.path.replace(`/${b}`, ""), e);
      if (!o.path.startsWith(`/${s}`) && s !== b) {
        const D = wy()(o.path);
        return xs(D !== "" ? `/${s+o.path.replace(`/${D}`,"")}` : `/${s+(o.path==="/"?"":o.path)}`, e)
      } else if (h && o.path !== h) return xs(h, e);
      return
    }
    if (l) {
      const g = Rx();
      g.value && g.value !== h && (g.value = "", window.location.assign(h))
    } else if (h) return xs(h, e)
  }
}

function Lx(t, e) {
  ks(t, "$i18n", Ii(e)), ks(t, "$getRouteBaseName", xn(po)), ks(t, "$localePath", xn(tc)), ks(t, "$localeRoute", xn(nd)), ks(t, "$switchLocalePath", xn(go)), ks(t, "$localeHead", xn(vy))
}

function Ox(t = Cn()) {
  return e => bx(e) && !t.public.i18n.differentDomains
}

function Fx(t = Cn()) {
  return (e, n) => {
    if (!t.public.i18n.differentDomains) return e;
    const r = Py(n);
    return r && So(r, e) || e
  }
}

function Mx() {
  return () => {
    const t = Ue(),
      {
        baseUrl: e,
        defaultLocale: n,
        differentDomains: r
      } = t.$config.public.i18n;
    if (He(e)) return e(t);
    const i = He(n) ? n() : n;
    if (r && i) {
      const s = Py(i);
      if (s) return s
    }
    return e
  }
}
const Eg = Object.freeze({
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

function Cg(t, e) {
  e ? e = {
    ...Eg,
    ...e
  } : e = Eg;
  const n = Ty(e);
  return n.dispatch(t), n.toString()
}
const Nx = Object.freeze(["prototype", "__proto__", "constructor"]);

function Ty(t) {
  let e = "",
    n = new Map;
  const r = i => {
    e += i
  };
  return {
    toString() {
      return e
    },
    getContext() {
      return n
    },
    dispatch(i) {
      return t.replacer && (i = t.replacer(i)), this[i === null ? "null" : typeof i](i)
    },
    object(i) {
      if (i && typeof i.toJSON == "function") return this.object(i.toJSON());
      const s = Object.prototype.toString.call(i);
      let o = "";
      const a = s.length;
      a < 10 ? o = "unknown:[" + s + "]" : o = s.slice(8, a - 1), o = o.toLowerCase();
      let l = null;
      if ((l = n.get(i)) === void 0) n.set(i, n.size);
      else return this.dispatch("[CIRCULAR:" + l + "]");
      if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(i)) return r("buffer:"), r(i.toString("utf8"));
      if (o !== "object" && o !== "function" && o !== "asyncfunction") this[o] ? this[o](i) : t.ignoreUnknown || this.unkown(i, o);
      else {
        let u = Object.keys(i);
        t.unorderedObjects && (u = u.sort());
        let c = [];
        t.respectType !== !1 && !wg(i) && (c = Nx), t.excludeKeys && (u = u.filter(d => !t.excludeKeys(d)), c = c.filter(d => !t.excludeKeys(d))), r("object:" + (u.length + c.length) + ":");
        const f = d => {
          this.dispatch(d), r(":"), t.excludeValues || this.dispatch(i[d]), r(",")
        };
        for (const d of u) f(d);
        for (const d of c) f(d)
      }
    },
    array(i, s) {
      if (s = s === void 0 ? t.unorderedArrays !== !1 : s, r("array:" + i.length + ":"), !s || i.length <= 1) {
        for (const l of i) this.dispatch(l);
        return
      }
      const o = new Map,
        a = i.map(l => {
          const u = Ty(t);
          u.dispatch(l);
          for (const [c, f] of u.getContext()) o.set(c, f);
          return u.toString()
        });
      return n = o, a.sort(), this.array(a, !1)
    },
    date(i) {
      return r("date:" + i.toJSON())
    },
    symbol(i) {
      return r("symbol:" + i.toString())
    },
    unkown(i, s) {
      if (r(s), !!i && (r(":"), i && typeof i.entries == "function")) return this.array(Array.from(i.entries()), !0)
    },
    error(i) {
      return r("error:" + i.toString())
    },
    boolean(i) {
      return r("bool:" + i)
    },
    string(i) {
      r("string:" + i.length + ":"), r(i)
    },
    function(i) {
      r("fn:"), wg(i) ? this.dispatch("[native]") : this.dispatch(i.toString()), t.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(i.name)), t.respectFunctionProperties && this.object(i)
    },
    number(i) {
      return r("number:" + i)
    },
    xml(i) {
      return r("xml:" + i.toString())
    },
    null() {
      return r("Null")
    },
    undefined() {
      return r("Undefined")
    },
    regexp(i) {
      return r("regex:" + i.toString())
    },
    uint8array(i) {
      return r("uint8array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    uint8clampedarray(i) {
      return r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(i))
    },
    int8array(i) {
      return r("int8array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    uint16array(i) {
      return r("uint16array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    int16array(i) {
      return r("int16array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    uint32array(i) {
      return r("uint32array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    int32array(i) {
      return r("int32array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    float32array(i) {
      return r("float32array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    float64array(i) {
      return r("float64array:"), this.dispatch(Array.prototype.slice.call(i))
    },
    arraybuffer(i) {
      return r("arraybuffer:"), this.dispatch(new Uint8Array(i))
    },
    url(i) {
      return r("url:" + i.toString())
    },
    map(i) {
      r("map:");
      const s = [...i];
      return this.array(s, t.unorderedSets !== !1)
    },
    set(i) {
      r("set:");
      const s = [...i];
      return this.array(s, t.unorderedSets !== !1)
    },
    file(i) {
      return r("file:"), this.dispatch([i.name, i.size, i.type, i.lastModfied])
    },
    blob() {
      if (t.ignoreUnknown) return r("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
    },
    domwindow() {
      return r("domwindow")
    },
    bigint(i) {
      return r("bigint:" + i.toString())
    },
    process() {
      return r("process")
    },
    timer() {
      return r("timer")
    },
    pipe() {
      return r("pipe")
    },
    tcp() {
      return r("tcp")
    },
    udp() {
      return r("udp")
    },
    tty() {
      return r("tty")
    },
    statwatcher() {
      return r("statwatcher")
    },
    securecontext() {
      return r("securecontext")
    },
    connection() {
      return r("connection")
    },
    zlib() {
      return r("zlib")
    },
    context() {
      return r("context")
    },
    nodescript() {
      return r("nodescript")
    },
    httpparser() {
      return r("httpparser")
    },
    dataview() {
      return r("dataview")
    },
    signal() {
      return r("signal")
    },
    fsevent() {
      return r("fsevent")
    },
    tlswrap() {
      return r("tlswrap")
    }
  }
}
const Sy = "[native code] }",
  $x = Sy.length;

function wg(t) {
  return typeof t != "function" ? !1 : Function.prototype.toString.call(t).slice(-$x) === Sy
}

function Ix(t, e, n = {}) {
  return t === e || Cg(t, n) === Cg(e, n)
}

function rr(t) {
  if (typeof t != "object") return t;
  var e, n, r = Object.prototype.toString.call(t);
  if (r === "[object Object]") {
    if (t.constructor !== Object && typeof t.constructor == "function") {
      n = new t.constructor;
      for (e in t) t.hasOwnProperty(e) && n[e] !== t[e] && (n[e] = rr(t[e]))
    } else {
      n = {};
      for (e in t) e === "__proto__" ? Object.defineProperty(n, e, {
        value: rr(t[e]),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[e] = rr(t[e])
    }
    return n
  }
  if (r === "[object Array]") {
    for (e = t.length, n = Array(e); e--;) n[e] = rr(t[e]);
    return n
  }
  return r === "[object Set]" ? (n = new Set, t.forEach(function(i) {
    n.add(rr(i))
  }), n) : r === "[object Map]" ? (n = new Map, t.forEach(function(i, s) {
    n.set(rr(s), rr(i))
  }), n) : r === "[object Date]" ? new Date(+t) : r === "[object RegExp]" ? (n = new RegExp(t.source, t.flags), n.lastIndex = t.lastIndex, n) : r === "[object DataView]" ? new t.constructor(rr(t.buffer)) : r === "[object ArrayBuffer]" ? t.slice(0) : r.slice(-6) === "Array]" ? new t.constructor(t) : t
}
const Bx = {
    path: "/",
    watch: !0,
    decode: t => Ta(decodeURIComponent(t)),
    encode: t => encodeURIComponent(typeof t == "string" ? t : JSON.stringify(t))
  },
  fl = window.cookieStore;

function Hx(t, e) {
  var l;
  const n = {
    ...Bx,
    ...e
  };
  n.filter ?? (n.filter = u => u === t);
  const r = Tg(n) || {};
  let i;
  n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
  const s = i !== void 0 && i <= 0,
    o = rr(s ? void 0 : r[t] ?? ((l = n.default) == null ? void 0 : l.call(n))),
    a = i && !s ? jx(o, i, n.watch && n.watch !== "shallow") : _n(o);
  {
    let u = null;
    try {
      !fl && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${t}`))
    } catch {}
    const c = () => {
        n.readonly || Ix(a.value, r[t]) || (Vx(t, a.value, n), r[t] = rr(a.value), u == null || u.postMessage({
          value: n.encode(a.value)
        }))
      },
      f = g => {
        var b;
        const p = g.refresh ? (b = Tg(n)) == null ? void 0 : b[t] : n.decode(g.value);
        d = !0, a.value = p, r[t] = rr(p), Es(() => {
          d = !1
        })
      };
    let d = !1;
    const h = !!Mu();
    if (h && tf(() => {
        d = !0, c(), u == null || u.close()
      }), fl) {
      const g = p => {
        const b = p.changed.find(D => D.name === t),
          y = p.deleted.find(D => D.name === t);
        b && f({
          value: b.value
        }), y && f({
          value: null
        })
      };
      fl.addEventListener("change", g), h && tf(() => fl.removeEventListener("change", g))
    } else u && (u.onmessage = ({
      data: g
    }) => f(g));
    n.watch ? Yn(a, () => {
      d || c()
    }, {
      deep: n.watch !== "shallow"
    }) : c()
  }
  return a
}

function Tg(t = {}) {
  return VC(document.cookie, t)
}

function Ux(t, e, n = {}) {
  return e == null ? Fp(t, e, {
    ...n,
    maxAge: -1
  }) : Fp(t, e, n)
}

function Vx(t, e, n = {}) {
  document.cookie = Ux(t, e, n)
}
const Sg = 2147483647;

function jx(t, e, n) {
  let r, i, s = 0;
  const o = n ? _n(t) : {
    value: t
  };
  return Mu() && tf(() => {
    i == null || i(), clearTimeout(r)
  }), mm((a, l) => {
    n && (i = Yn(o, l));

    function u() {
      s = 0, clearTimeout(r);
      const c = e - s,
        f = c < Sg ? c : Sg;
      r = setTimeout(() => {
        if (s += f, s < e) return u();
        o.value = void 0, l()
      }, f)
    }
    return {
      get() {
        return a(), o.value
      },
      set(c) {
        u(), o.value = c, l()
      }
    }
  })
}

function xy(t) {
  return _y + " " + t
}

function ks(t, e, n) {
  Object.defineProperty(t, e, {
    get: () => n
  })
}

function xn(t, e = id()) {
  return (...n) => t(e, ...n)
}

function ky() {
  let t;
  return navigator.languages && (t = rx(Ju, navigator.languages)), t
}

function Wx() {
  const t = Ka(),
    e = t && t.cookieKey || qS,
    n = new Date,
    r = {
      expires: new Date(n.setDate(n.getDate() + 365)),
      path: "/",
      sameSite: t && t.cookieCrossOrigin ? "none" : "lax",
      secure: t && t.cookieCrossOrigin || t && t.cookieSecure
    };
  return t && t.cookieDomain && (r.domain = t.cookieDomain), Hx(e, r)
}

function Fc(t, e, n) {
  if (e === !1 || !e.useCookie) return;
  const r = t.value ?? void 0;
  if (r != null) {
    if (ho.includes(r)) return r;
    if (n) return t.value = n, n;
    t.value = void 0
  }
}

function Kx(t, e, n) {
  n === !1 || !n.useCookie || (t.value = e)
}
var Ay = (t => (t.NOT_FOUND = "not_found_match", t.FIRST_ACCESS = "first_access_only", t.NO_REDIRECT_ROOT = "not_redirect_on_root", t.NO_REDIRECT_NO_PREFIX = "not_redirect_on_no_prefix", t.SSG_IGNORE = "detect_ignore_on_ssg", t))(Ay || {});
const Yx = {
  locale: ""
};

function zx(t, e, n = "") {
  const r = Ka();
  if (!r) return Yx;
  const {
    strategy: i
  } = Cn().public.i18n, {
    ssg: s,
    callType: o,
    firstAccess: a,
    localeCookie: l
  } = e;
  if (!a) return {
    locale: i === "no_prefix" ? n : "",
    reason: "first_access_only"
  };
  const {
    redirectOn: u,
    alwaysRedirect: c,
    useCookie: f,
    fallbackLocale: d
  } = r, h = re(t) ? t : t.path;
  if (i !== "no_prefix") {
    if (u === "root" && h !== "/") return {
      locale: "",
      reason: "not_redirect_on_root"
    };
    if (u === "no prefix" && !c && h.match(td(ho))) return {
      locale: "",
      reason: "not_redirect_on_no_prefix"
    }
  }
  let g;
  const p = f && l || void 0;
  f && (g = "cookie");
  const b = ky();
  p || (g = "navigator_or_header");
  const y = p || b,
    D = y || d || "";
  return !y && d && (g = "fallback"), {
    locale: D,
    from: g
  }
}

function rc() {
  let t;
  return t = window.location.host, t
}

function Gx(t, e, n) {
  let r = rc() || "";
  const i = ke(n) ? n.path : re(n) ? n : "";
  if (r) {
    let s;
    const o = t.filter(a => {
      if (a && a.domain) {
        let l = a.domain;
        return Fr(a.domain) && (l = a.domain.replace(/(http|https):\/\//, "")), l === r
      } else if (Array.isArray(a == null ? void 0 : a.domains)) return a.domains.includes(r);
      return !1
    });
    if (o.length === 1) s = o[0];
    else if (o.length > 1)
      if (e === "no_prefix") console.warn(xy("Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!")), s = o[0];
      else {
        if (n && i && i !== "") {
          const a = i.match(td(o.map(l => l.code)));
          a && a.length > 1 && (s = o.find(l => l.code === a[1]))
        }
        s || (s = o.find(a => Array.isArray(a.defaultForDomains) ? a.defaultForDomains.includes(r) : a.domainDefault))
      } if (s) return s.code;
    r = ""
  }
  return r
}

function Py(t) {
  var o, a, l;
  const e = Cn();
  Ue();
  const n = rc(),
    r = e.public.i18n,
    i = Ju.find(u => u.code === t),
    s = ((a = (o = r == null ? void 0 : r.domainLocales) == null ? void 0 : o[t]) == null ? void 0 : a.domain) || (i == null ? void 0 : i.domain) || ((l = i == null ? void 0 : i.domains) == null ? void 0 : l.find(u => u === n));
  if (s) {
    if (Fr(s, {
        strict: !0
      })) return s;
    let u;
    return u = new URL(window.location.origin).protocol, u + "//" + s
  }
  console.warn(xy("Could not find domain name for locale " + t))
}
const Ka = (t = Cn().public.i18n) => (t == null ? void 0 : t.detectBrowserLanguage) === !1 ? !1 : t == null ? void 0 : t.detectBrowserLanguage;

function Xx(t, e) {
  const {
    multiDomainLocales: n,
    strategy: r,
    routesNameSeparator: i,
    defaultLocaleRouteNameSuffix: s
  } = t.$config.public.i18n;
  if (!n || !(r === "prefix_except_default" || r === "prefix_and_default")) return;
  const o = Mn(),
    a = [i, s].join("");
  for (const l of o.getRoutes()) {
    const u = Qu(l.name);
    if (!u.includes(a)) continue;
    if (u.split(i)[1] === e) {
      l.name = u.replace(a, "");
      continue
    }
    o.removeRoute(l.name)
  }
}

function qx(t) {
  const {
    locales: e,
    defaultLocale: n,
    multiDomainLocales: r
  } = t.$config.public.i18n;
  let i = n || "";
  if (!r) return i;
  const s = rc();
  if (e.some(a => typeof a != "string" && Array.isArray(a.defaultForDomains))) {
    const a = e.find(l => typeof l == "string" || !Array.isArray(l.defaultForDomains) ? !1 : l.defaultForDomains.includes(s ?? ""));
    i = (a == null ? void 0 : a.code) ?? ""
  }
  return i
}
/*!
 * message-compiler v10.0.7
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Jx(t, e, n) {
  return {
    line: t,
    column: e,
    offset: n
  }
}

function Vf(t, e, n) {
  return {
    start: t,
    end: e
  }
}
const Be = {
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
    UNHANDLED_MINIFIER_NODE_TYPE: 16
  },
  Qx = 17;

function ic(t, e, n = {}) {
  const {
    domain: r,
    messages: i,
    args: s
  } = n, o = t, a = new SyntaxError(String(o));
  return a.code = t, e && (a.location = e), a.domain = r, a
}

function Zx(t) {
  throw t
}
const Hr = " ",
  ek = "\r",
  qt = `
`,
  tk = "\u2028",
  nk = "\u2029";

function rk(t) {
  const e = t;
  let n = 0,
    r = 1,
    i = 1,
    s = 0;
  const o = E => e[E] === ek && e[E + 1] === qt,
    a = E => e[E] === qt,
    l = E => e[E] === nk,
    u = E => e[E] === tk,
    c = E => o(E) || a(E) || l(E) || u(E),
    f = () => n,
    d = () => r,
    h = () => i,
    g = () => s,
    p = E => o(E) || l(E) || u(E) ? qt : e[E],
    b = () => p(n),
    y = () => p(n + s);

  function D() {
    return s = 0, c(n) && (r++, i = 0), o(n) && n++, n++, i++, e[n]
  }

  function _() {
    return o(n + s) && s++, s++, e[n + s]
  }

  function m() {
    n = 0, r = 1, i = 1, s = 0
  }

  function v(E = 0) {
    s = E
  }

  function C() {
    const E = n + s;
    for (; E !== n;) D();
    s = 0
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: g,
    charAt: p,
    currentChar: b,
    currentPeek: y,
    next: D,
    peek: _,
    reset: m,
    resetPeek: v,
    skipToPeek: C
  }
}
const ai = void 0,
  ik = ".",
  xg = "'",
  sk = "tokenizer";

function ok(t, e = {}) {
  const n = e.location !== !1,
    r = rk(t),
    i = () => r.index(),
    s = () => Jx(r.line(), r.column(), r.index()),
    o = s(),
    a = i(),
    l = {
      currentType: 13,
      offset: a,
      startLoc: o,
      endLoc: o,
      lastType: 13,
      lastOffset: a,
      lastStartLoc: o,
      lastEndLoc: o,
      braceNest: 0,
      inLinked: !1,
      text: ""
    },
    u = () => l,
    {
      onError: c
    } = e;

  function f(w, S, M, ...I) {
    const j = u();
    if (S.column += M, S.offset += M, c) {
      const G = n ? Vf(j.startLoc, S) : null,
        L = ic(w, G, {
          domain: sk,
          args: I
        });
      c(L)
    }
  }

  function d(w, S, M) {
    w.endLoc = s(), w.currentType = S;
    const I = {
      type: S
    };
    return n && (I.loc = Vf(w.startLoc, w.endLoc)), M != null && (I.value = M), I
  }
  const h = w => d(w, 13);

  function g(w, S) {
    return w.currentChar() === S ? (w.next(), S) : (f(Be.EXPECTED_TOKEN, s(), 0, S), "")
  }

  function p(w) {
    let S = "";
    for (; w.currentPeek() === Hr || w.currentPeek() === qt;) S += w.currentPeek(), w.peek();
    return S
  }

  function b(w) {
    const S = p(w);
    return w.skipToPeek(), S
  }

  function y(w) {
    if (w === ai) return !1;
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || S >= 65 && S <= 90 || S === 95
  }

  function D(w) {
    if (w === ai) return !1;
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57
  }

  function _(w, S) {
    const {
      currentType: M
    } = S;
    if (M !== 2) return !1;
    p(w);
    const I = y(w.currentPeek());
    return w.resetPeek(), I
  }

  function m(w, S) {
    const {
      currentType: M
    } = S;
    if (M !== 2) return !1;
    p(w);
    const I = w.currentPeek() === "-" ? w.peek() : w.currentPeek(),
      j = D(I);
    return w.resetPeek(), j
  }

  function v(w, S) {
    const {
      currentType: M
    } = S;
    if (M !== 2) return !1;
    p(w);
    const I = w.currentPeek() === xg;
    return w.resetPeek(), I
  }

  function C(w, S) {
    const {
      currentType: M
    } = S;
    if (M !== 7) return !1;
    p(w);
    const I = w.currentPeek() === ".";
    return w.resetPeek(), I
  }

  function E(w, S) {
    const {
      currentType: M
    } = S;
    if (M !== 8) return !1;
    p(w);
    const I = y(w.currentPeek());
    return w.resetPeek(), I
  }

  function R(w, S) {
    const {
      currentType: M
    } = S;
    if (!(M === 7 || M === 11)) return !1;
    p(w);
    const I = w.currentPeek() === ":";
    return w.resetPeek(), I
  }

  function A(w, S) {
    const {
      currentType: M
    } = S;
    if (M !== 9) return !1;
    const I = () => {
        const G = w.currentPeek();
        return G === "{" ? y(w.peek()) : G === "@" || G === "|" || G === ":" || G === "." || G === Hr || !G ? !1 : G === qt ? (w.peek(), I()) : V(w, !1)
      },
      j = I();
    return w.resetPeek(), j
  }

  function P(w) {
    p(w);
    const S = w.currentPeek() === "|";
    return w.resetPeek(), S
  }

  function V(w, S = !0) {
    const M = (j = !1, G = "") => {
        const L = w.currentPeek();
        return L === "{" || L === "@" || !L ? j : L === "|" ? !(G === Hr || G === qt) : L === Hr ? (w.peek(), M(!0, Hr)) : L === qt ? (w.peek(), M(!0, qt)) : !0
      },
      I = M();
    return S && w.resetPeek(), I
  }

  function O(w, S) {
    const M = w.currentChar();
    return M === ai ? ai : S(M) ? (w.next(), M) : null
  }

  function Y(w) {
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || S >= 65 && S <= 90 || S >= 48 && S <= 57 || S === 95 || S === 36
  }

  function q(w) {
    return O(w, Y)
  }

  function Q(w) {
    const S = w.charCodeAt(0);
    return S >= 97 && S <= 122 || S >= 65 && S <= 90 || S >= 48 && S <= 57 || S === 95 || S === 36 || S === 45
  }

  function U(w) {
    return O(w, Q)
  }

  function W(w) {
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57
  }

  function z(w) {
    return O(w, W)
  }

  function H(w) {
    const S = w.charCodeAt(0);
    return S >= 48 && S <= 57 || S >= 65 && S <= 70 || S >= 97 && S <= 102
  }

  function F(w) {
    return O(w, H)
  }

  function se(w) {
    let S = "",
      M = "";
    for (; S = z(w);) M += S;
    return M
  }

  function ge(w) {
    let S = "";
    for (;;) {
      const M = w.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M) break;
      if (M === Hr || M === qt)
        if (V(w)) S += M, w.next();
        else {
          if (P(w)) break;
          S += M, w.next()
        }
      else S += M, w.next()
    }
    return S
  }

  function Te(w) {
    b(w);
    let S = "",
      M = "";
    for (; S = U(w);) M += S;
    return w.currentChar() === ai && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), M
  }

  function fe(w) {
    b(w);
    let S = "";
    return w.currentChar() === "-" ? (w.next(), S += `-${se(w)}`) : S += se(w), w.currentChar() === ai && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), S
  }

  function le(w) {
    return w !== xg && w !== qt
  }

  function ve(w) {
    b(w), g(w, "'");
    let S = "",
      M = "";
    for (; S = O(w, le);) S === "\\" ? M += B(w) : M += S;
    const I = w.currentChar();
    return I === qt || I === ai ? (f(Be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), I === qt && (w.next(), g(w, "'")), M) : (g(w, "'"), M)
  }

  function B(w) {
    const S = w.currentChar();
    switch (S) {
      case "\\":
      case "'":
        return w.next(), `\\${S}`;
      case "u":
        return J(w, S, 4);
      case "U":
        return J(w, S, 6);
      default:
        return f(Be.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, S), ""
    }
  }

  function J(w, S, M) {
    g(w, S);
    let I = "";
    for (let j = 0; j < M; j++) {
      const G = F(w);
      if (!G) {
        f(Be.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${S}${I}${w.currentChar()}`);
        break
      }
      I += G
    }
    return `\\${S}${I}`
  }

  function X(w) {
    return w !== "{" && w !== "}" && w !== Hr && w !== qt
  }

  function Z(w) {
    b(w);
    let S = "",
      M = "";
    for (; S = O(w, X);) M += S;
    return M
  }

  function ue(w) {
    let S = "",
      M = "";
    for (; S = q(w);) M += S;
    return M
  }

  function De(w) {
    const S = M => {
      const I = w.currentChar();
      return I === "{" || I === "@" || I === "|" || I === "(" || I === ")" || !I || I === Hr ? M : (M += I, w.next(), S(M))
    };
    return S("")
  }

  function T(w) {
    b(w);
    const S = g(w, "|");
    return b(w), S
  }

  function x(w, S) {
    let M = null;
    switch (w.currentChar()) {
      case "{":
        return S.braceNest >= 1 && f(Be.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), w.next(), M = d(S, 2, "{"), b(w), S.braceNest++, M;
      case "}":
        return S.braceNest > 0 && S.currentType === 2 && f(Be.EMPTY_PLACEHOLDER, s(), 0), w.next(), M = d(S, 3, "}"), S.braceNest--, S.braceNest > 0 && b(w), S.inLinked && S.braceNest === 0 && (S.inLinked = !1), M;
      case "@":
        return S.braceNest > 0 && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), M = N(w, S) || h(S), S.braceNest = 0, M;
      default: {
        let j = !0,
          G = !0,
          L = !0;
        if (P(w)) return S.braceNest > 0 && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), M = d(S, 1, T(w)), S.braceNest = 0, S.inLinked = !1, M;
        if (S.braceNest > 0 && (S.currentType === 4 || S.currentType === 5 || S.currentType === 6)) return f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), S.braceNest = 0, K(w, S);
        if (j = _(w, S)) return M = d(S, 4, Te(w)), b(w), M;
        if (G = m(w, S)) return M = d(S, 5, fe(w)), b(w), M;
        if (L = v(w, S)) return M = d(S, 6, ve(w)), b(w), M;
        if (!j && !G && !L) return M = d(S, 12, Z(w)), f(Be.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M.value), b(w), M;
        break
      }
    }
    return M
  }

  function N(w, S) {
    const {
      currentType: M
    } = S;
    let I = null;
    const j = w.currentChar();
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (j === qt || j === Hr) && f(Be.INVALID_LINKED_FORMAT, s(), 0), j) {
      case "@":
        return w.next(), I = d(S, 7, "@"), S.inLinked = !0, I;
      case ".":
        return b(w), w.next(), d(S, 8, ".");
      case ":":
        return b(w), w.next(), d(S, 9, ":");
      default:
        return P(w) ? (I = d(S, 1, T(w)), S.braceNest = 0, S.inLinked = !1, I) : C(w, S) || R(w, S) ? (b(w), N(w, S)) : E(w, S) ? (b(w), d(S, 11, ue(w))) : A(w, S) ? (b(w), j === "{" ? x(w, S) || I : d(S, 10, De(w))) : (M === 7 && f(Be.INVALID_LINKED_FORMAT, s(), 0), S.braceNest = 0, S.inLinked = !1, K(w, S))
    }
  }

  function K(w, S) {
    let M = {
      type: 13
    };
    if (S.braceNest > 0) return x(w, S) || h(S);
    if (S.inLinked) return N(w, S) || h(S);
    switch (w.currentChar()) {
      case "{":
        return x(w, S) || h(S);
      case "}":
        return f(Be.UNBALANCED_CLOSING_BRACE, s(), 0), w.next(), d(S, 3, "}");
      case "@":
        return N(w, S) || h(S);
      default: {
        if (P(w)) return M = d(S, 1, T(w)), S.braceNest = 0, S.inLinked = !1, M;
        if (V(w)) return d(S, 0, ge(w));
        break
      }
    }
    return M
  }

  function k() {
    const {
      currentType: w,
      offset: S,
      startLoc: M,
      endLoc: I
    } = l;
    return l.lastType = w, l.lastOffset = S, l.lastStartLoc = M, l.lastEndLoc = I, l.offset = i(), l.startLoc = s(), r.currentChar() === ai ? d(l, 13) : K(r, l)
  }
  return {
    nextToken: k,
    currentOffset: i,
    currentPosition: s,
    context: u
  }
}
const ak = "parser",
  lk = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function uk(t, e, n) {
  switch (t) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(e || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
    }
  }
}

function ck(t = {}) {
  const e = t.location !== !1,
    {
      onError: n
    } = t;

  function r(y, D, _, m, ...v) {
    const C = y.currentPosition();
    if (C.offset += m, C.column += m, n) {
      const E = e ? Vf(_, C) : null,
        R = ic(D, E, {
          domain: ak,
          args: v
        });
      n(R)
    }
  }

  function i(y, D, _) {
    const m = {
      type: y
    };
    return e && (m.start = D, m.end = D, m.loc = {
      start: _,
      end: _
    }), m
  }

  function s(y, D, _, m) {
    e && (y.end = D, y.loc && (y.loc.end = _))
  }

  function o(y, D) {
    const _ = y.context(),
      m = i(3, _.offset, _.startLoc);
    return m.value = D, s(m, y.currentOffset(), y.currentPosition()), m
  }

  function a(y, D) {
    const _ = y.context(),
      {
        lastOffset: m,
        lastStartLoc: v
      } = _,
      C = i(5, m, v);
    return C.index = parseInt(D, 10), y.nextToken(), s(C, y.currentOffset(), y.currentPosition()), C
  }

  function l(y, D) {
    const _ = y.context(),
      {
        lastOffset: m,
        lastStartLoc: v
      } = _,
      C = i(4, m, v);
    return C.key = D, y.nextToken(), s(C, y.currentOffset(), y.currentPosition()), C
  }

  function u(y, D) {
    const _ = y.context(),
      {
        lastOffset: m,
        lastStartLoc: v
      } = _,
      C = i(9, m, v);
    return C.value = D.replace(lk, uk), y.nextToken(), s(C, y.currentOffset(), y.currentPosition()), C
  }

  function c(y) {
    const D = y.nextToken(),
      _ = y.context(),
      {
        lastOffset: m,
        lastStartLoc: v
      } = _,
      C = i(8, m, v);
    return D.type !== 11 ? (r(y, Be.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), C.value = "", s(C, m, v), {
      nextConsumeToken: D,
      node: C
    }) : (D.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, mr(D)), C.value = D.value || "", s(C, y.currentOffset(), y.currentPosition()), {
      node: C
    })
  }

  function f(y, D) {
    const _ = y.context(),
      m = i(7, _.offset, _.startLoc);
    return m.value = D, s(m, y.currentOffset(), y.currentPosition()), m
  }

  function d(y) {
    const D = y.context(),
      _ = i(6, D.offset, D.startLoc);
    let m = y.nextToken();
    if (m.type === 8) {
      const v = c(y);
      _.modifier = v.node, m = v.nextConsumeToken || y.nextToken()
    }
    switch (m.type !== 9 && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(m)), m = y.nextToken(), m.type === 2 && (m = y.nextToken()), m.type) {
      case 10:
        m.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(m)), _.key = f(y, m.value || "");
        break;
      case 4:
        m.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(m)), _.key = l(y, m.value || "");
        break;
      case 5:
        m.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(m)), _.key = a(y, m.value || "");
        break;
      case 6:
        m.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(m)), _.key = u(y, m.value || "");
        break;
      default: {
        r(y, Be.UNEXPECTED_EMPTY_LINKED_KEY, D.lastStartLoc, 0);
        const v = y.context(),
          C = i(7, v.offset, v.startLoc);
        return C.value = "", s(C, v.offset, v.startLoc), _.key = C, s(_, v.offset, v.startLoc), {
          nextConsumeToken: m,
          node: _
        }
      }
    }
    return s(_, y.currentOffset(), y.currentPosition()), {
      node: _
    }
  }

  function h(y) {
    const D = y.context(),
      _ = D.currentType === 1 ? y.currentOffset() : D.offset,
      m = D.currentType === 1 ? D.endLoc : D.startLoc,
      v = i(2, _, m);
    v.items = [];
    let C = null;
    do {
      const A = C || y.nextToken();
      switch (C = null, A.type) {
        case 0:
          A.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(A)), v.items.push(o(y, A.value || ""));
          break;
        case 5:
          A.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(A)), v.items.push(a(y, A.value || ""));
          break;
        case 4:
          A.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(A)), v.items.push(l(y, A.value || ""));
          break;
        case 6:
          A.value == null && r(y, Be.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, mr(A)), v.items.push(u(y, A.value || ""));
          break;
        case 7: {
          const P = d(y);
          v.items.push(P.node), C = P.nextConsumeToken || null;
          break
        }
      }
    } while (D.currentType !== 13 && D.currentType !== 1);
    const E = D.currentType === 1 ? D.lastOffset : y.currentOffset(),
      R = D.currentType === 1 ? D.lastEndLoc : y.currentPosition();
    return s(v, E, R), v
  }

  function g(y, D, _, m) {
    const v = y.context();
    let C = m.items.length === 0;
    const E = i(1, D, _);
    E.cases = [], E.cases.push(m);
    do {
      const R = h(y);
      C || (C = R.items.length === 0), E.cases.push(R)
    } while (v.currentType !== 13);
    return C && r(y, Be.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), s(E, y.currentOffset(), y.currentPosition()), E
  }

  function p(y) {
    const D = y.context(),
      {
        offset: _,
        startLoc: m
      } = D,
      v = h(y);
    return D.currentType === 13 ? v : g(y, _, m, v)
  }

  function b(y) {
    const D = ok(y, yt({}, t)),
      _ = D.context(),
      m = i(0, _.offset, _.startLoc);
    return e && m.loc && (m.loc.source = y), m.body = p(D), t.onCacheKey && (m.cacheKey = t.onCacheKey(y)), _.currentType !== 13 && r(D, Be.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, y[_.offset] || ""), s(m, D.currentOffset(), D.currentPosition()), m
  }
  return {
    parse: b
  }
}

function mr(t) {
  if (t.type === 13) return "EOF";
  const e = (t.value || "").replace(/\r?\n/gu, "\\n");
  return e.length > 10 ? e.slice(0, 9) + "…" : e
}

function fk(t, e = {}) {
  const n = {
    ast: t,
    helpers: new Set
  };
  return {
    context: () => n,
    helper: s => (n.helpers.add(s), s)
  }
}

function kg(t, e) {
  for (let n = 0; n < t.length; n++) sd(t[n], e)
}

function sd(t, e) {
  switch (t.type) {
    case 1:
      kg(t.cases, e), e.helper("plural");
      break;
    case 2:
      kg(t.items, e);
      break;
    case 6: {
      sd(t.key, e), e.helper("linked"), e.helper("type");
      break
    }
    case 5:
      e.helper("interpolate"), e.helper("list");
      break;
    case 4:
      e.helper("interpolate"), e.helper("named");
      break
  }
}

function hk(t, e = {}) {
  const n = fk(t);
  n.helper("normalize"), t.body && sd(t.body, n);
  const r = n.context();
  t.helpers = Array.from(r.helpers)
}

function dk(t) {
  const e = t.body;
  return e.type === 2 ? Ag(e) : e.cases.forEach(n => Ag(n)), t
}

function Ag(t) {
  if (t.items.length === 1) {
    const e = t.items[0];
    (e.type === 3 || e.type === 9) && (t.static = e.value, delete e.value)
  } else {
    const e = [];
    for (let n = 0; n < t.items.length; n++) {
      const r = t.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      e.push(r.value)
    }
    if (e.length === t.items.length) {
      t.static = ed(e);
      for (let n = 0; n < t.items.length; n++) {
        const r = t.items[n];
        (r.type === 3 || r.type === 9) && delete r.value
      }
    }
  }
}

function Fs(t) {
  switch (t.t = t.type, t.type) {
    case 0: {
      const e = t;
      Fs(e.body), e.b = e.body, delete e.body;
      break
    }
    case 1: {
      const e = t,
        n = e.cases;
      for (let r = 0; r < n.length; r++) Fs(n[r]);
      e.c = n, delete e.cases;
      break
    }
    case 2: {
      const e = t,
        n = e.items;
      for (let r = 0; r < n.length; r++) Fs(n[r]);
      e.i = n, delete e.items, e.static && (e.s = e.static, delete e.static);
      break
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const e = t;
      e.value && (e.v = e.value, delete e.value);
      break
    }
    case 6: {
      const e = t;
      Fs(e.key), e.k = e.key, delete e.key, e.modifier && (Fs(e.modifier), e.m = e.modifier, delete e.modifier);
      break
    }
    case 5: {
      const e = t;
      e.i = e.index, delete e.index;
      break
    }
    case 4: {
      const e = t;
      e.k = e.key, delete e.key;
      break
    }
  }
  delete t.type
}

function pk(t, e) {
  const {
    sourceMap: n,
    filename: r,
    breakLineCode: i,
    needIndent: s
  } = e, o = e.location !== !1, a = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: s,
    indentLevel: 0
  };
  o && t.loc && (a.source = t.loc.source);
  const l = () => a;

  function u(b, y) {
    a.code += b
  }

  function c(b, y = !0) {
    const D = y ? i : "";
    u(s ? D + "  ".repeat(b) : D)
  }

  function f(b = !0) {
    const y = ++a.indentLevel;
    b && c(y)
  }

  function d(b = !0) {
    const y = --a.indentLevel;
    b && c(y)
  }

  function h() {
    c(a.indentLevel)
  }
  return {
    context: l,
    push: u,
    indent: f,
    deindent: d,
    newline: h,
    helper: b => `_${b}`,
    needIndent: () => a.needIndent
  }
}

function gk(t, e) {
  const {
    helper: n
  } = t;
  t.push(`${n("linked")}(`), _o(t, e.key), e.modifier ? (t.push(", "), _o(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")")
}

function _k(t, e) {
  const {
    helper: n,
    needIndent: r
  } = t;
  t.push(`${n("normalize")}([`), t.indent(r());
  const i = e.items.length;
  for (let s = 0; s < i && (_o(t, e.items[s]), s !== i - 1); s++) t.push(", ");
  t.deindent(r()), t.push("])")
}

function mk(t, e) {
  const {
    helper: n,
    needIndent: r
  } = t;
  if (e.cases.length > 1) {
    t.push(`${n("plural")}([`), t.indent(r());
    const i = e.cases.length;
    for (let s = 0; s < i && (_o(t, e.cases[s]), s !== i - 1); s++) t.push(", ");
    t.deindent(r()), t.push("])")
  }
}

function yk(t, e) {
  e.body ? _o(t, e.body) : t.push("null")
}

function _o(t, e) {
  const {
    helper: n
  } = t;
  switch (e.type) {
    case 0:
      yk(t, e);
      break;
    case 1:
      mk(t, e);
      break;
    case 2:
      _k(t, e);
      break;
    case 6:
      gk(t, e);
      break;
    case 8:
      t.push(JSON.stringify(e.value), e);
      break;
    case 7:
      t.push(JSON.stringify(e.value), e);
      break;
    case 5:
      t.push(`${n("interpolate")}(${n("list")}(${e.index}))`, e);
      break;
    case 4:
      t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`, e);
      break;
    case 9:
      t.push(JSON.stringify(e.value), e);
      break;
    case 3:
      t.push(JSON.stringify(e.value), e);
      break
  }
}
const Dk = (t, e = {}) => {
  const n = re(e.mode) ? e.mode : "normal",
    r = re(e.filename) ? e.filename : "message.intl",
    i = !!e.sourceMap,
    s = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : `
`,
    o = e.needIndent ? e.needIndent : n !== "arrow",
    a = t.helpers || [],
    l = pk(t, {
      mode: n,
      filename: r,
      sourceMap: i,
      breakLineCode: s,
      needIndent: o
    });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${ed(a.map(f=>`${f}: _${f}`),", ")} } = ctx`), l.newline()), l.push("return "), _o(l, t), l.deindent(o), l.push("}"), delete t.helpers;
  const {
    code: u,
    map: c
  } = l.context();
  return {
    ast: t,
    code: u,
    map: c ? c.toJSON() : void 0
  }
};

function bk(t, e = {}) {
  const n = yt({}, e),
    r = !!n.jit,
    i = !!n.minify,
    s = n.optimize == null ? !0 : n.optimize,
    a = ck(n).parse(t);
  return r ? (s && dk(a), i && Fs(a), {
    ast: a,
    code: ""
  }) : (hk(a, n), Dk(a, n))
}
/*!
 * core-base v10.0.7
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function vk() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Qh().__INTLIFY_PROD_DEVTOOLS__ = !1)
}

function Ar(t) {
  return ke(t) && od(t) === 0 && (ar(t, "b") || ar(t, "body"))
}
const Ry = ["b", "body"];

function Ek(t) {
  return Bi(t, Ry)
}
const Ly = ["c", "cases"];

function Ck(t) {
  return Bi(t, Ly, [])
}
const Oy = ["s", "static"];

function wk(t) {
  return Bi(t, Oy)
}
const Fy = ["i", "items"];

function Tk(t) {
  return Bi(t, Fy, [])
}
const My = ["t", "type"];

function od(t) {
  return Bi(t, My)
}
const Ny = ["v", "value"];

function hl(t, e) {
  const n = Bi(t, Ny);
  if (n != null) return n;
  throw ka(e)
}
const $y = ["m", "modifier"];

function Sk(t) {
  return Bi(t, $y)
}
const Iy = ["k", "key"];

function xk(t) {
  const e = Bi(t, Iy);
  if (e) return e;
  throw ka(6)
}

function Bi(t, e, n) {
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (ar(t, i) && t[i] != null) return t[i]
  }
  return n
}
const By = [...Ry, ...Ly, ...Oy, ...Fy, ...Iy, ...$y, ...Ny, ...My];

function ka(t) {
  return new Error(`unhandled node type: ${t}`)
}

function Mc(t) {
  return n => kk(n, t)
}

function kk(t, e) {
  const n = Ek(e);
  if (n == null) throw ka(0);
  if (od(n) === 1) {
    const s = Ck(n);
    return t.plural(s.reduce((o, a) => [...o, Pg(t, a)], []))
  } else return Pg(t, n)
}

function Pg(t, e) {
  const n = wk(e);
  if (n != null) return t.type === "text" ? n : t.normalize([n]);
  {
    const r = Tk(e).reduce((i, s) => [...i, jf(t, s)], []);
    return t.normalize(r)
  }
}

function jf(t, e) {
  const n = od(e);
  switch (n) {
    case 3:
      return hl(e, n);
    case 9:
      return hl(e, n);
    case 4: {
      const r = e;
      if (ar(r, "k") && r.k) return t.interpolate(t.named(r.k));
      if (ar(r, "key") && r.key) return t.interpolate(t.named(r.key));
      throw ka(n)
    }
    case 5: {
      const r = e;
      if (ar(r, "i") && mt(r.i)) return t.interpolate(t.list(r.i));
      if (ar(r, "index") && mt(r.index)) return t.interpolate(t.list(r.index));
      throw ka(n)
    }
    case 6: {
      const r = e,
        i = Sk(r),
        s = xk(r);
      return t.linked(jf(t, s), i ? jf(t, i) : void 0, t.type)
    }
    case 7:
      return hl(e, n);
    case 8:
      return hl(e, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`)
  }
}
const Ak = t => t;
let dl = Ve();

function Pk(t, e = {}) {
  let n = !1;
  const r = e.onError || Zx;
  return e.onError = i => {
    n = !0, r(i)
  }, {
    ...bk(t, e),
    detectError: n
  }
}

function Rk(t, e) {
  if (re(t)) {
    nt(e.warnHtmlMessage) && e.warnHtmlMessage;
    const r = (e.onCacheKey || Ak)(t),
      i = dl[r];
    if (i) return i;
    const {
      ast: s,
      detectError: o
    } = Pk(t, {
      ...e,
      location: !1,
      jit: !0
    }), a = Mc(s);
    return o ? a : dl[r] = a
  } else {
    const n = t.cacheKey;
    if (n) {
      const r = dl[n];
      return r || (dl[n] = Mc(t))
    } else return Mc(t)
  }
}
let Aa = null;

function Lk(t) {
  Aa = t
}

function Ok(t, e, n) {
  Aa && Aa.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: t,
    version: e,
    meta: n
  })
}
const Fk = Mk("function:translate");

function Mk(t) {
  return e => Aa && Aa.emit(t, e)
}
const qr = {
    INVALID_ARGUMENT: Qx,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_NON_STRING_MESSAGE: 20,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23
  },
  Nk = 24;

function Jr(t) {
  return ic(t, null, void 0)
}

function ad(t, e) {
  return e.locale != null ? Rg(e.locale) : Rg(t.locale)
}
let Nc;

function Rg(t) {
  if (re(t)) return t;
  if (He(t)) {
    if (t.resolvedOnce && Nc != null) return Nc;
    if (t.constructor.name === "Function") {
      const e = t();
      if (VS(e)) throw Jr(qr.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Nc = e
    } else throw Jr(qr.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw Jr(qr.NOT_SUPPORT_LOCALE_TYPE)
}

function $k(t, e, n) {
  return [...new Set([n, ...ct(e) ? e : ke(e) ? Object.keys(e) : re(e) ? [e] : [n]])]
}

function Hy(t, e, n) {
  const r = re(n) ? n : _u,
    i = t;
  i.__localeChainCache || (i.__localeChainCache = new Map);
  let s = i.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let o = [n];
    for (; ct(o);) o = Lg(s, o, e);
    const a = ct(e) || !Re(e) ? e : e.default ? e.default : null;
    o = re(a) ? [a] : a, ct(o) && Lg(s, o, !1), i.__localeChainCache.set(r, s)
  }
  return s
}

function Lg(t, e, n) {
  let r = !0;
  for (let i = 0; i < e.length && nt(r); i++) {
    const s = e[i];
    re(s) && (r = Ik(t, e[i], n))
  }
  return r
}

function Ik(t, e, n) {
  let r;
  const i = e.split("-");
  do {
    const s = i.join("-");
    r = Bk(t, s, n), i.splice(-1, 1)
  } while (i.length && r === !0);
  return r
}

function Bk(t, e, n) {
  let r = !1;
  if (!t.includes(e) && (r = !0, e)) {
    r = e[e.length - 1] !== "!";
    const i = e.replace(/!/g, "");
    t.push(i), (ct(n) || Re(n)) && n[i] && (r = n[i])
  }
  return r
}
const Hi = [];
Hi[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
};
Hi[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
};
Hi[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
};
Hi[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
};
Hi[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
};
Hi[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
};
Hi[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const Hk = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function Uk(t) {
  return Hk.test(t)
}

function Vk(t) {
  const e = t.charCodeAt(0),
    n = t.charCodeAt(t.length - 1);
  return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t
}

function jk(t) {
  if (t == null) return "o";
  switch (t.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return t;
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

function Wk(t) {
  const e = t.trim();
  return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : Uk(e) ? Vk(e) : "*" + e
}

function Kk(t) {
  const e = [];
  let n = -1,
    r = 0,
    i = 0,
    s, o, a, l, u, c, f;
  const d = [];
  d[0] = () => {
    o === void 0 ? o = a : o += a
  }, d[1] = () => {
    o !== void 0 && (e.push(o), o = void 0)
  }, d[2] = () => {
    d[0](), i++
  }, d[3] = () => {
    if (i > 0) i--, r = 4, d[0]();
    else {
      if (i = 0, o === void 0 || (o = Wk(o), o === !1)) return !1;
      d[1]()
    }
  };

  function h() {
    const g = t[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"') return n++, a = "\\" + g, d[0](), !0
  }
  for (; r !== null;)
    if (n++, s = t[n], !(s === "\\" && h())) {
      if (l = jk(s), f = Hi[r], u = f[l] || f.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = d[u[1]], c && (a = s, c() === !1)))) return;
      if (r === 7) return e
    }
}
const Og = new Map;

function Yk(t, e) {
  return ke(t) ? t[e] : null
}

function zk(t, e) {
  if (!ke(t)) return null;
  let n = Og.get(e);
  if (n || (n = Kk(e), n && Og.set(e, n)), !n) return null;
  const r = n.length;
  let i = t,
    s = 0;
  for (; s < r;) {
    const o = n[s];
    if (By.includes(o) && Ar(i)) return null;
    const a = i[o];
    if (a === void 0 || He(i)) return null;
    i = a, s++
  }
  return i
}
const Gk = "10.0.7",
  sc = -1,
  _u = "en-US",
  Fg = "",
  Mg = t => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;

function Xk() {
  return {
    upper: (t, e) => e === "text" && re(t) ? t.toUpperCase() : e === "vnode" && ke(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
    lower: (t, e) => e === "text" && re(t) ? t.toLowerCase() : e === "vnode" && ke(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
    capitalize: (t, e) => e === "text" && re(t) ? Mg(t) : e === "vnode" && ke(t) && "__v_isVNode" in t ? Mg(t.children) : t
  }
}
let Uy;

function qk(t) {
  Uy = t
}
let Vy;

function Jk(t) {
  Vy = t
}
let jy;

function Qk(t) {
  jy = t
}
let Wy = null;
const Zk = t => {
    Wy = t
  },
  eA = () => Wy;
let Ky = null;
const Ng = t => {
    Ky = t
  },
  tA = () => Ky;
let $g = 0;

function nA(t = {}) {
  const e = He(t.onWarn) ? t.onWarn : WS,
    n = re(t.version) ? t.version : Gk,
    r = re(t.locale) || He(t.locale) ? t.locale : _u,
    i = He(r) ? _u : r,
    s = ct(t.fallbackLocale) || Re(t.fallbackLocale) || re(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : i,
    o = Re(t.messages) ? t.messages : $c(i),
    a = Re(t.datetimeFormats) ? t.datetimeFormats : $c(i),
    l = Re(t.numberFormats) ? t.numberFormats : $c(i),
    u = yt(Ve(), t.modifiers, Xk()),
    c = t.pluralRules || Ve(),
    f = He(t.missing) ? t.missing : null,
    d = nt(t.missingWarn) || du(t.missingWarn) ? t.missingWarn : !0,
    h = nt(t.fallbackWarn) || du(t.fallbackWarn) ? t.fallbackWarn : !0,
    g = !!t.fallbackFormat,
    p = !!t.unresolving,
    b = He(t.postTranslation) ? t.postTranslation : null,
    y = Re(t.processor) ? t.processor : null,
    D = nt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0,
    _ = !!t.escapeParameter,
    m = He(t.messageCompiler) ? t.messageCompiler : Uy,
    v = He(t.messageResolver) ? t.messageResolver : Vy || Yk,
    C = He(t.localeFallbacker) ? t.localeFallbacker : jy || $k,
    E = ke(t.fallbackContext) ? t.fallbackContext : void 0,
    R = t,
    A = ke(R.__datetimeFormatters) ? R.__datetimeFormatters : new Map,
    P = ke(R.__numberFormatters) ? R.__numberFormatters : new Map,
    V = ke(R.__meta) ? R.__meta : {};
  $g++;
  const O = {
    version: n,
    cid: $g,
    locale: r,
    fallbackLocale: s,
    messages: o,
    modifiers: u,
    pluralRules: c,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: g,
    unresolving: p,
    postTranslation: b,
    processor: y,
    warnHtmlMessage: D,
    escapeParameter: _,
    messageCompiler: m,
    messageResolver: v,
    localeFallbacker: C,
    fallbackContext: E,
    onWarn: e,
    __meta: V
  };
  return O.datetimeFormats = a, O.numberFormats = l, O.__datetimeFormatters = A, O.__numberFormatters = P, __INTLIFY_PROD_DEVTOOLS__ && Ok(O, n, V), O
}
const $c = t => ({
  [t]: Ve()
});

function ld(t, e, n, r, i) {
  const {
    missing: s,
    onWarn: o
  } = t;
  if (s !== null) {
    const a = s(t, n, e, i);
    return re(a) ? a : e
  } else return e
}

function Fo(t, e, n) {
  const r = t;
  r.__localeChainCache = new Map, t.localeFallbacker(t, n, e)
}

function rA(t, e) {
  return t === e ? !1 : t.split("-")[0] === e.split("-")[0]
}

function iA(t, e) {
  const n = e.indexOf(t);
  if (n === -1) return !1;
  for (let r = n + 1; r < e.length; r++)
    if (rA(t, e[r])) return !0;
  return !1
}

function Ig(t, ...e) {
  const {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: s,
    localeFallbacker: o
  } = t, {
    __datetimeFormatters: a
  } = t, [l, u, c, f] = Wf(...e), d = nt(c.missingWarn) ? c.missingWarn : t.missingWarn;
  nt(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn;
  const h = !!c.part,
    g = ad(t, c),
    p = o(t, i, g);
  if (!re(l) || l === "") return new Intl.DateTimeFormat(g, f).format(u);
  let b = {},
    y, D = null;
  const _ = "datetime format";
  for (let C = 0; C < p.length && (y = p[C], b = n[y] || {}, D = b[l], !Re(D)); C++) ld(t, l, y, d, _);
  if (!Re(D) || !re(y)) return r ? sc : l;
  let m = `${y}__${l}`;
  qu(f) || (m = `${m}__${JSON.stringify(f)}`);
  let v = a.get(m);
  return v || (v = new Intl.DateTimeFormat(y, yt({}, D, f)), a.set(m, v)), h ? v.formatToParts(u) : v.format(u)
}
const Yy = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Wf(...t) {
  const [e, n, r, i] = t, s = Ve();
  let o = Ve(),
    a;
  if (re(e)) {
    const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw Jr(qr.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(u);
    try {
      a.toISOString()
    } catch {
      throw Jr(qr.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (IS(e)) {
    if (isNaN(e.getTime())) throw Jr(qr.INVALID_DATE_ARGUMENT);
    a = e
  } else if (mt(e)) a = e;
  else throw Jr(qr.INVALID_ARGUMENT);
  return re(n) ? s.key = n : Re(n) && Object.keys(n).forEach(l => {
    Yy.includes(l) ? o[l] = n[l] : s[l] = n[l]
  }), re(r) ? s.locale = r : Re(r) && (o = r), Re(i) && (o = i), [s.key || "", a, s, o]
}

function Bg(t, e, n) {
  const r = t;
  for (const i in n) {
    const s = `${e}__${i}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s)
  }
}

function Hg(t, ...e) {
  const {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: s,
    localeFallbacker: o
  } = t, {
    __numberFormatters: a
  } = t, [l, u, c, f] = Kf(...e), d = nt(c.missingWarn) ? c.missingWarn : t.missingWarn;
  nt(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn;
  const h = !!c.part,
    g = ad(t, c),
    p = o(t, i, g);
  if (!re(l) || l === "") return new Intl.NumberFormat(g, f).format(u);
  let b = {},
    y, D = null;
  const _ = "number format";
  for (let C = 0; C < p.length && (y = p[C], b = n[y] || {}, D = b[l], !Re(D)); C++) ld(t, l, y, d, _);
  if (!Re(D) || !re(y)) return r ? sc : l;
  let m = `${y}__${l}`;
  qu(f) || (m = `${m}__${JSON.stringify(f)}`);
  let v = a.get(m);
  return v || (v = new Intl.NumberFormat(y, yt({}, D, f)), a.set(m, v)), h ? v.formatToParts(u) : v.format(u)
}
const zy = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Kf(...t) {
  const [e, n, r, i] = t, s = Ve();
  let o = Ve();
  if (!mt(e)) throw Jr(qr.INVALID_ARGUMENT);
  const a = e;
  return re(n) ? s.key = n : Re(n) && Object.keys(n).forEach(l => {
    zy.includes(l) ? o[l] = n[l] : s[l] = n[l]
  }), re(r) ? s.locale = r : Re(r) && (o = r), Re(i) && (o = i), [s.key || "", a, s, o]
}

function Ug(t, e, n) {
  const r = t;
  for (const i in n) {
    const s = `${e}__${i}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s)
  }
}
const sA = t => t,
  oA = t => "",
  aA = "text",
  lA = t => t.length === 0 ? "" : ed(t),
  uA = jS;

function Vg(t, e) {
  return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0
}

function cA(t) {
  const e = mt(t.pluralIndex) ? t.pluralIndex : -1;
  return t.named && (mt(t.named.count) || mt(t.named.n)) ? mt(t.named.count) ? t.named.count : mt(t.named.n) ? t.named.n : e : e
}

function fA(t, e) {
  e.count || (e.count = t), e.n || (e.n = t)
}

function hA(t = {}) {
  const e = t.locale,
    n = cA(t),
    r = ke(t.pluralRules) && re(e) && He(t.pluralRules[e]) ? t.pluralRules[e] : Vg,
    i = ke(t.pluralRules) && re(e) && He(t.pluralRules[e]) ? Vg : void 0,
    s = y => y[r(n, y.length, i)],
    o = t.list || [],
    a = y => o[y],
    l = t.named || Ve();
  mt(t.pluralIndex) && fA(n, l);
  const u = y => l[y];

  function c(y, D) {
    const _ = He(t.messages) ? t.messages(y, !!D) : ke(t.messages) ? t.messages[y] : !1;
    return _ || (t.parent ? t.parent.message(y) : oA)
  }
  const f = y => t.modifiers ? t.modifiers[y] : sA,
    d = Re(t.processor) && He(t.processor.normalize) ? t.processor.normalize : lA,
    h = Re(t.processor) && He(t.processor.interpolate) ? t.processor.interpolate : uA,
    g = Re(t.processor) && re(t.processor.type) ? t.processor.type : aA,
    b = {
      list: a,
      named: u,
      plural: s,
      linked: (y, ...D) => {
        const [_, m] = D;
        let v = "text",
          C = "";
        D.length === 1 ? ke(_) ? (C = _.modifier || C, v = _.type || v) : re(_) && (C = _ || C) : D.length === 2 && (re(_) && (C = _ || C), re(m) && (v = m || v));
        const E = c(y, !0)(b),
          R = v === "vnode" && ct(E) && C ? E[0] : E;
        return C ? f(C)(R, v) : R
      },
      message: c,
      type: g,
      interpolate: h,
      normalize: d,
      values: yt(Ve(), o, l)
    };
  return b
}
const jg = () => "",
  Bn = t => He(t);

function Wg(t, ...e) {
  const {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: i,
    messageCompiler: s,
    fallbackLocale: o,
    messages: a
  } = t, [l, u] = Yf(...e), c = nt(u.missingWarn) ? u.missingWarn : t.missingWarn, f = nt(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn, d = nt(u.escapeParameter) ? u.escapeParameter : t.escapeParameter, h = !!u.resolvedMessage, g = re(u.default) || nt(u.default) ? nt(u.default) ? s ? l : () => l : u.default : n ? s ? l : () => l : null, p = n || g != null && (re(g) || He(g)), b = ad(t, u);
  d && dA(u);
  let [y, D, _] = h ? [l, b, a[b] || Ve()] : Gy(t, l, b, o, f, c), m = y, v = l;
  if (!h && !(re(m) || Ar(m) || Bn(m)) && p && (m = g, v = m), !h && (!(re(m) || Ar(m) || Bn(m)) || !re(D))) return i ? sc : l;
  let C = !1;
  const E = () => {
      C = !0
    },
    R = Bn(m) ? m : Xy(t, l, D, m, v, E);
  if (C) return m;
  const A = _A(t, D, _, u),
    P = hA(A),
    V = pA(t, R, P),
    O = r ? r(V, l) : V;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const Y = {
      timestamp: Date.now(),
      key: re(l) ? l : Bn(m) ? m.key : "",
      locale: D || (Bn(m) ? m.locale : ""),
      format: re(m) ? m : Bn(m) ? m.source : "",
      message: O
    };
    Y.meta = yt({}, t.__meta, eA() || {}), Fk(Y)
  }
  return O
}

function dA(t) {
  ct(t.list) ? t.list = t.list.map(e => re(e) ? hg(e) : e) : ke(t.named) && Object.keys(t.named).forEach(e => {
    re(t.named[e]) && (t.named[e] = hg(t.named[e]))
  })
}

function Gy(t, e, n, r, i, s) {
  const {
    messages: o,
    onWarn: a,
    messageResolver: l,
    localeFallbacker: u
  } = t, c = u(t, r, n);
  let f = Ve(),
    d, h = null;
  const g = "translate";
  for (let p = 0; p < c.length && (d = c[p], f = o[d] || Ve(), (h = l(f, e)) === null && (h = f[e]), !(re(h) || Ar(h) || Bn(h))); p++)
    if (!iA(d, c)) {
      const b = ld(t, e, d, s, g);
      b !== e && (h = b)
    } return [h, d, f]
}

function Xy(t, e, n, r, i, s) {
  const {
    messageCompiler: o,
    warnHtmlMessage: a
  } = t;
  if (Bn(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || e, u
  }
  if (o == null) {
    const u = () => r;
    return u.locale = n, u.key = e, u
  }
  const l = o(r, gA(t, n, i, r, a, s));
  return l.locale = n, l.key = e, l.source = r, l
}

function pA(t, e, n) {
  return e(n)
}

function Yf(...t) {
  const [e, n, r] = t, i = Ve();
  if (!re(e) && !mt(e) && !Bn(e) && !Ar(e)) throw Jr(qr.INVALID_ARGUMENT);
  const s = mt(e) ? String(e) : (Bn(e), e);
  return mt(n) ? i.plural = n : re(n) ? i.default = n : Re(n) && !qu(n) ? i.named = n : ct(n) && (i.list = n), mt(r) ? i.plural = r : re(r) ? i.default = r : Re(r) && yt(i, r), [s, i]
}

function gA(t, e, n, r, i, s) {
  return {
    locale: e,
    key: n,
    warnHtmlMessage: i,
    onError: o => {
      throw s && s(o), o
    },
    onCacheKey: o => NS(e, n, o)
  }
}

function _A(t, e, n, r) {
  const {
    modifiers: i,
    pluralRules: s,
    messageResolver: o,
    fallbackLocale: a,
    fallbackWarn: l,
    missingWarn: u,
    fallbackContext: c
  } = t, d = {
    locale: e,
    modifiers: i,
    pluralRules: s,
    messages: (h, g) => {
      let p = o(n, h);
      if (p == null && (c || g)) {
        const [, , b] = Gy(c || t, h, e, a, l, u);
        p = o(b, h)
      }
      if (re(p) || Ar(p)) {
        let b = !1;
        const D = Xy(t, h, e, p, h, () => {
          b = !0
        });
        return b ? jg : D
      } else return Bn(p) ? p : jg
    }
  };
  return t.processor && (d.processor = t.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), mt(r.plural) && (d.pluralIndex = r.plural), d
}
vk();
/*!
 * vue-i18n v10.0.7
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const mA = "10.0.7";

function yA() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Qh().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Xn = {
  UNEXPECTED_RETURN_TYPE: Nk,
  INVALID_ARGUMENT: 25,
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  UNEXPECTED_ERROR: 32,
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};

function fr(t, ...e) {
  return ic(t, null, void 0)
}
const zf = $i("__translateVNode"),
  Gf = $i("__datetimeParts"),
  Xf = $i("__numberParts"),
  DA = $i("__setPluralRules"),
  bA = $i("__injectWithOption"),
  qf = $i("__dispose");

function Pa(t) {
  if (!ke(t) || Ar(t)) return t;
  for (const e in t)
    if (ar(t, e))
      if (!e.includes(".")) ke(t[e]) && Pa(t[e]);
      else {
        const n = e.split("."),
          r = n.length - 1;
        let i = t,
          s = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__") throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in i || (i[n[o]] = Ve()), !ke(i[n[o]])) {
            s = !0;
            break
          }
          i = i[n[o]]
        }
        if (s || (Ar(i) ? By.includes(n[r]) || delete t[e] : (i[n[r]] = t[e], delete t[e])), !Ar(i)) {
          const o = i[n[r]];
          ke(o) && Pa(o)
        }
      } return t
}

function qy(t, e) {
  const {
    messages: n,
    __i18n: r,
    messageResolver: i,
    flatJson: s
  } = e, o = Re(n) ? n : ct(r) ? Ve() : {
    [t]: Ve()
  };
  if (ct(r) && r.forEach(a => {
      if ("locale" in a && "resource" in a) {
        const {
          locale: l,
          resource: u
        } = a;
        l ? (o[l] = o[l] || Ve(), as(u, o[l])) : as(u, o)
      } else re(a) && as(JSON.parse(a), o)
    }), i == null && s)
    for (const a in o) ar(o, a) && Pa(o[a]);
  return o
}

function Jy(t) {
  return t.type
}

function vA(t, e, n) {
  let r = ke(e.messages) ? e.messages : Ve();
  "__i18nGlobal" in n && (r = qy(t.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const i = Object.keys(r);
  i.length && i.forEach(s => {
    t.mergeLocaleMessage(s, r[s])
  });
  {
    if (ke(e.datetimeFormats)) {
      const s = Object.keys(e.datetimeFormats);
      s.length && s.forEach(o => {
        t.mergeDateTimeFormat(o, e.datetimeFormats[o])
      })
    }
    if (ke(e.numberFormats)) {
      const s = Object.keys(e.numberFormats);
      s.length && s.forEach(o => {
        t.mergeNumberFormat(o, e.numberFormats[o])
      })
    }
  }
}

function Kg(t) {
  return st(Ei, null, t, 0)
}
const Yg = "__INTLIFY_META__",
  zg = () => [],
  EA = () => !1;
let Gg = 0;

function Xg(t) {
  return (e, n, r, i) => t(n, r, Ni() || void 0, i)
}
const CA = () => {
  const t = Ni();
  let e = null;
  return t && (e = Jy(t)[Yg]) ? {
    [Yg]: e
  } : null
};

function Qy(t = {}) {
  const {
    __root: e,
    __injectWithOption: n
  } = t, r = e === void 0, i = t.flatJson, s = hu ? _n : io;
  let o = nt(t.inheritLocale) ? t.inheritLocale : !0;
  const a = s(e && o ? e.locale.value : re(t.locale) ? t.locale : _u),
    l = s(e && o ? e.fallbackLocale.value : re(t.fallbackLocale) || ct(t.fallbackLocale) || Re(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : a.value),
    u = s(qy(a.value, t)),
    c = s(Re(t.datetimeFormats) ? t.datetimeFormats : {
      [a.value]: {}
    }),
    f = s(Re(t.numberFormats) ? t.numberFormats : {
      [a.value]: {}
    });
  let d = e ? e.missingWarn : nt(t.missingWarn) || du(t.missingWarn) ? t.missingWarn : !0,
    h = e ? e.fallbackWarn : nt(t.fallbackWarn) || du(t.fallbackWarn) ? t.fallbackWarn : !0,
    g = e ? e.fallbackRoot : nt(t.fallbackRoot) ? t.fallbackRoot : !0,
    p = !!t.fallbackFormat,
    b = He(t.missing) ? t.missing : null,
    y = He(t.missing) ? Xg(t.missing) : null,
    D = He(t.postTranslation) ? t.postTranslation : null,
    _ = e ? e.warnHtmlMessage : nt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0,
    m = !!t.escapeParameter;
  const v = e ? e.modifiers : Re(t.modifiers) ? t.modifiers : {};
  let C = t.pluralRules || e && e.pluralRules,
    E;
  E = (() => {
    r && Ng(null);
    const L = {
      version: mA,
      locale: a.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: v,
      pluralRules: C,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: p,
      unresolving: !0,
      postTranslation: D === null ? void 0 : D,
      warnHtmlMessage: _,
      escapeParameter: m,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    L.datetimeFormats = c.value, L.numberFormats = f.value, L.__datetimeFormatters = Re(E) ? E.__datetimeFormatters : void 0, L.__numberFormatters = Re(E) ? E.__numberFormatters : void 0;
    const $ = nA(L);
    return r && Ng($), $
  })(), Fo(E, a.value, l.value);

  function A() {
    return [a.value, l.value, u.value, c.value, f.value]
  }
  const P = _t({
      get: () => a.value,
      set: L => {
        a.value = L, E.locale = a.value
      }
    }),
    V = _t({
      get: () => l.value,
      set: L => {
        l.value = L, E.fallbackLocale = l.value, Fo(E, a.value, L)
      }
    }),
    O = _t(() => u.value),
    Y = _t(() => c.value),
    q = _t(() => f.value);

  function Q() {
    return He(D) ? D : null
  }

  function U(L) {
    D = L, E.postTranslation = L
  }

  function W() {
    return b
  }

  function z(L) {
    L !== null && (y = Xg(L)), b = L, E.missing = y
  }
  const H = (L, $, ee, te, pe, de) => {
    A();
    let Ne;
    try {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (E.fallbackContext = e ? tA() : void 0),
      Ne = L(E)
    }
    finally {
      __INTLIFY_PROD_DEVTOOLS__,
      r || (E.fallbackContext = void 0)
    }
    if (ee !== "translate exists" && mt(Ne) && Ne === sc || ee === "translate exists" && !Ne) {
      const [qe, Le] = $();
      return e && g ? te(e) : pe(qe)
    } else {
      if (de(Ne)) return Ne;
      throw fr(Xn.UNEXPECTED_RETURN_TYPE)
    }
  };

  function F(...L) {
    return H($ => Reflect.apply(Wg, null, [$, ...L]), () => Yf(...L), "translate", $ => Reflect.apply($.t, $, [...L]), $ => $, $ => re($))
  }

  function se(...L) {
    const [$, ee, te] = L;
    if (te && !ke(te)) throw fr(Xn.INVALID_ARGUMENT);
    return F($, ee, yt({
      resolvedMessage: !0
    }, te || {}))
  }

  function ge(...L) {
    return H($ => Reflect.apply(Ig, null, [$, ...L]), () => Wf(...L), "datetime format", $ => Reflect.apply($.d, $, [...L]), () => Fg, $ => re($))
  }

  function Te(...L) {
    return H($ => Reflect.apply(Hg, null, [$, ...L]), () => Kf(...L), "number format", $ => Reflect.apply($.n, $, [...L]), () => Fg, $ => re($))
  }

  function fe(L) {
    return L.map($ => re($) || mt($) || nt($) ? Kg(String($)) : $)
  }
  const ve = {
    normalize: fe,
    interpolate: L => L,
    type: "vnode"
  };

  function B(...L) {
    return H($ => {
      let ee;
      const te = $;
      try {
        te.processor = ve, ee = Reflect.apply(Wg, null, [te, ...L])
      } finally {
        te.processor = null
      }
      return ee
    }, () => Yf(...L), "translate", $ => $[zf](...L), $ => [Kg($)], $ => ct($))
  }

  function J(...L) {
    return H($ => Reflect.apply(Hg, null, [$, ...L]), () => Kf(...L), "number format", $ => $[Xf](...L), zg, $ => re($) || ct($))
  }

  function X(...L) {
    return H($ => Reflect.apply(Ig, null, [$, ...L]), () => Wf(...L), "datetime format", $ => $[Gf](...L), zg, $ => re($) || ct($))
  }

  function Z(L) {
    C = L, E.pluralRules = C
  }

  function ue(L, $) {
    return H(() => {
      if (!L) return !1;
      const ee = re($) ? $ : a.value,
        te = x(ee),
        pe = E.messageResolver(te, L);
      return Ar(pe) || Bn(pe) || re(pe)
    }, () => [L], "translate exists", ee => Reflect.apply(ee.te, ee, [L, $]), EA, ee => nt(ee))
  }

  function De(L) {
    let $ = null;
    const ee = Hy(E, l.value, a.value);
    for (let te = 0; te < ee.length; te++) {
      const pe = u.value[ee[te]] || {},
        de = E.messageResolver(pe, L);
      if (de != null) {
        $ = de;
        break
      }
    }
    return $
  }

  function T(L) {
    const $ = De(L);
    return $ ?? (e ? e.tm(L) || {} : {})
  }

  function x(L) {
    return u.value[L] || {}
  }

  function N(L, $) {
    if (i) {
      const ee = {
        [L]: $
      };
      for (const te in ee) ar(ee, te) && Pa(ee[te]);
      $ = ee[L]
    }
    u.value[L] = $, E.messages = u.value
  }

  function K(L, $) {
    u.value[L] = u.value[L] || {};
    const ee = {
      [L]: $
    };
    if (i)
      for (const te in ee) ar(ee, te) && Pa(ee[te]);
    $ = ee[L], as($, u.value[L]), E.messages = u.value
  }

  function k(L) {
    return c.value[L] || {}
  }

  function w(L, $) {
    c.value[L] = $, E.datetimeFormats = c.value, Bg(E, L, $)
  }

  function S(L, $) {
    c.value[L] = yt(c.value[L] || {}, $), E.datetimeFormats = c.value, Bg(E, L, $)
  }

  function M(L) {
    return f.value[L] || {}
  }

  function I(L, $) {
    f.value[L] = $, E.numberFormats = f.value, Ug(E, L, $)
  }

  function j(L, $) {
    f.value[L] = yt(f.value[L] || {}, $), E.numberFormats = f.value, Ug(E, L, $)
  }
  Gg++, e && hu && (Yn(e.locale, L => {
    o && (a.value = L, E.locale = L, Fo(E, a.value, l.value))
  }), Yn(e.fallbackLocale, L => {
    o && (l.value = L, E.fallbackLocale = L, Fo(E, a.value, l.value))
  }));
  const G = {
    id: Gg,
    locale: P,
    fallbackLocale: V,
    get inheritLocale() {
      return o
    },
    set inheritLocale(L) {
      o = L, L && e && (a.value = e.locale.value, l.value = e.fallbackLocale.value, Fo(E, a.value, l.value))
    },
    get availableLocales() {
      return Object.keys(u.value).sort()
    },
    messages: O,
    get modifiers() {
      return v
    },
    get pluralRules() {
      return C || {}
    },
    get isGlobal() {
      return r
    },
    get missingWarn() {
      return d
    },
    set missingWarn(L) {
      d = L, E.missingWarn = d
    },
    get fallbackWarn() {
      return h
    },
    set fallbackWarn(L) {
      h = L, E.fallbackWarn = h
    },
    get fallbackRoot() {
      return g
    },
    set fallbackRoot(L) {
      g = L
    },
    get fallbackFormat() {
      return p
    },
    set fallbackFormat(L) {
      p = L, E.fallbackFormat = p
    },
    get warnHtmlMessage() {
      return _
    },
    set warnHtmlMessage(L) {
      _ = L, E.warnHtmlMessage = L
    },
    get escapeParameter() {
      return m
    },
    set escapeParameter(L) {
      m = L, E.escapeParameter = L
    },
    t: F,
    getLocaleMessage: x,
    setLocaleMessage: N,
    mergeLocaleMessage: K,
    getPostTranslationHandler: Q,
    setPostTranslationHandler: U,
    getMissingHandler: W,
    setMissingHandler: z,
    [DA]: Z
  };
  return G.datetimeFormats = Y, G.numberFormats = q, G.rt = se, G.te = ue, G.tm = T, G.d = ge, G.n = Te, G.getDateTimeFormat = k, G.setDateTimeFormat = w, G.mergeDateTimeFormat = S, G.getNumberFormat = M, G.setNumberFormat = I, G.mergeNumberFormat = j, G[bA] = n, G[zf] = B, G[Gf] = X, G[Xf] = J, G
}
const ud = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: t => t === "parent" || t === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};

function wA({
  slots: t
}, e) {
  return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((r, i) => [...r, ...i.type === nn ? i.children : [i]], []) : e.reduce((n, r) => {
    const i = t[r];
    return i && (n[r] = i()), n
  }, Ve())
}

function Zy() {
  return nn
}
const TA = ii({
    name: "i18n-t",
    props: yt({
      keypath: {
        type: String,
        required: !0
      },
      plural: {
        type: [Number, String],
        validator: t => mt(t) || !isNaN(t)
      }
    }, ud),
    setup(t, e) {
      const {
        slots: n,
        attrs: r
      } = e, i = t.i18n || cd({
        useScope: t.scope,
        __useComponent: !0
      });
      return () => {
        const s = Object.keys(n).filter(f => f !== "_"),
          o = Ve();
        t.locale && (o.locale = t.locale), t.plural !== void 0 && (o.plural = re(t.plural) ? +t.plural : t.plural);
        const a = wA(e, s),
          l = i[zf](t.keypath, a, o),
          u = yt(Ve(), r),
          c = re(t.tag) || ke(t.tag) ? t.tag : Zy();
        return Vn(c, u, l)
      }
    }
  }),
  qg = TA;

function SA(t) {
  return ct(t) && !re(t[0])
}

function eD(t, e, n, r) {
  const {
    slots: i,
    attrs: s
  } = e;
  return () => {
    const o = {
      part: !0
    };
    let a = Ve();
    t.locale && (o.locale = t.locale), re(t.format) ? o.key = t.format : ke(t.format) && (re(t.format.key) && (o.key = t.format.key), a = Object.keys(t.format).reduce((d, h) => n.includes(h) ? yt(Ve(), d, {
      [h]: t.format[h]
    }) : d, Ve()));
    const l = r(t.value, o, a);
    let u = [o.key];
    ct(l) ? u = l.map((d, h) => {
      const g = i[d.type],
        p = g ? g({
          [d.type]: d.value,
          index: h,
          parts: l
        }) : [d.value];
      return SA(p) && (p[0].key = `${d.type}-${h}`), p
    }) : re(l) && (u = [l]);
    const c = yt(Ve(), s),
      f = re(t.tag) || ke(t.tag) ? t.tag : Zy();
    return Vn(f, c, u)
  }
}
const xA = ii({
    name: "i18n-n",
    props: yt({
      value: {
        type: Number,
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, ud),
    setup(t, e) {
      const n = t.i18n || cd({
        useScope: t.scope,
        __useComponent: !0
      });
      return eD(t, e, zy, (...r) => n[Xf](...r))
    }
  }),
  Jg = xA,
  kA = ii({
    name: "i18n-d",
    props: yt({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, ud),
    setup(t, e) {
      const n = t.i18n || cd({
        useScope: t.scope,
        __useComponent: !0
      });
      return eD(t, e, Yy, (...r) => n[Gf](...r))
    }
  }),
  Qg = kA;

function AA(t, e) {
  const n = t;
  if (t.mode === "composition") return n.__getInstance(e) || t.global;
  {
    const r = n.__getInstance(e);
    return r != null ? r.__composer : t.global.__composer
  }
}

function PA(t) {
  const e = o => {
    const {
      instance: a,
      value: l
    } = o;
    if (!a || !a.$) throw fr(Xn.UNEXPECTED_ERROR);
    const u = AA(t, a.$),
      c = Zg(l);
    return [Reflect.apply(u.t, u, [...e_(c)]), u]
  };
  return {
    created: (o, a) => {
      const [l, u] = e(a);
      hu && t.global === u && (o.__i18nWatcher = Yn(u.locale, () => {
        a.instance && a.instance.$forceUpdate()
      })), o.__composer = u, o.textContent = l
    },
    unmounted: o => {
      hu && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer)
    },
    beforeUpdate: (o, {
      value: a
    }) => {
      if (o.__composer) {
        const l = o.__composer,
          u = Zg(a);
        o.textContent = Reflect.apply(l.t, l, [...e_(u)])
      }
    },
    getSSRProps: o => {
      const [a] = e(o);
      return {
        textContent: a
      }
    }
  }
}

function Zg(t) {
  if (re(t)) return {
    path: t
  };
  if (Re(t)) {
    if (!("path" in t)) throw fr(Xn.REQUIRED_VALUE, "path");
    return t
  } else throw fr(Xn.INVALID_VALUE)
}

function e_(t) {
  const {
    path: e,
    locale: n,
    args: r,
    choice: i,
    plural: s
  } = t, o = {}, a = r || {};
  return re(n) && (o.locale = n), mt(i) && (o.plural = i), mt(s) && (o.plural = s), [e, a, o]
}

function RA(t, e, ...n) {
  const r = Re(n[0]) ? n[0] : {};
  (nt(r.globalInstall) ? r.globalInstall : !0) && ([qg.name, "I18nT"].forEach(s => t.component(s, qg)), [Jg.name, "I18nN"].forEach(s => t.component(s, Jg)), [Qg.name, "I18nD"].forEach(s => t.component(s, Qg))), t.directive("t", PA(e))
}
const LA = $i("global-vue-i18n");

function OA(t = {}, e) {
  const n = nt(t.globalInjection) ? t.globalInjection : !0,
    r = new Map,
    [i, s] = FA(t),
    o = $i("");

  function a(f) {
    return r.get(f) || null
  }

  function l(f, d) {
    r.set(f, d)
  }

  function u(f) {
    r.delete(f)
  }
  const c = {
    get mode() {
      return "composition"
    },
    async install(f, ...d) {
      if (f.__VUE_I18N_SYMBOL__ = o, f.provide(f.__VUE_I18N_SYMBOL__, c), Re(d[0])) {
        const p = d[0];
        c.__composerExtend = p.__composerExtend, c.__vueI18nExtend = p.__vueI18nExtend
      }
      let h = null;
      n && (h = VA(f, c.global)), RA(f, c, ...d);
      const g = f.unmount;
      f.unmount = () => {
        h && h(), c.dispose(), g()
      }
    },
    get global() {
      return s
    },
    dispose() {
      i.stop()
    },
    __instances: r,
    __getInstance: a,
    __setInstance: l,
    __deleteInstance: u
  };
  return c
}

function cd(t = {}) {
  const e = Ni();
  if (e == null) throw fr(Xn.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__) throw fr(Xn.NOT_INSTALLED);
  const n = MA(e),
    r = $A(n),
    i = Jy(e),
    s = NA(t, i);
  if (s === "global") return vA(r, t, i), r;
  if (s === "parent") {
    let l = IA(n, e, t.__useComponent);
    return l == null && (l = r), l
  }
  const o = n;
  let a = o.__getInstance(e);
  if (a == null) {
    const l = yt({}, t);
    "__i18n" in i && (l.__i18n = i.__i18n), r && (l.__root = r), a = Qy(l), o.__composerExtend && (a[qf] = o.__composerExtend(a)), HA(o, e, a), o.__setInstance(e, a)
  }
  return a
}

function FA(t, e, n) {
  const r = Ah(),
    i = r.run(() => Qy(t));
  if (i == null) throw fr(Xn.UNEXPECTED_ERROR);
  return [r, i]
}

function MA(t) {
  const e = mn(t.isCE ? LA : t.appContext.app.__VUE_I18N_SYMBOL__);
  if (!e) throw fr(t.isCE ? Xn.NOT_INSTALLED_WITH_PROVIDE : Xn.UNEXPECTED_ERROR);
  return e
}

function NA(t, e) {
  return qu(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local"
}

function $A(t) {
  return t.mode === "composition" ? t.global : t.global.__composer
}

function IA(t, e, n = !1) {
  let r = null;
  const i = e.root;
  let s = BA(e, n);
  for (; s != null;) {
    const o = t;
    if (t.mode === "composition" && (r = o.__getInstance(s)), r != null || i === s) break;
    s = s.parent
  }
  return r
}

function BA(t, e = !1) {
  return t == null ? null : e && t.vnode.ctx || t.parent
}

function HA(t, e, n) {
  Bu(() => {}, e), Bh(() => {
    const r = n;
    t.__deleteInstance(e);
    const i = r[qf];
    i && (i(), delete r[qf])
  }, e)
}
const UA = ["locale", "fallbackLocale", "availableLocales"],
  t_ = ["t", "rt", "d", "n", "tm", "te"];

function VA(t, e) {
  const n = Object.create(null);
  return UA.forEach(i => {
    const s = Object.getOwnPropertyDescriptor(e, i);
    if (!s) throw fr(Xn.UNEXPECTED_ERROR);
    const o = at(s.value) ? {
      get() {
        return s.value.value
      },
      set(a) {
        s.value.value = a
      }
    } : {
      get() {
        return s.get && s.get()
      }
    };
    Object.defineProperty(n, i, o)
  }), t.config.globalProperties.$i18n = n, t_.forEach(i => {
    const s = Object.getOwnPropertyDescriptor(e, i);
    if (!s || !s.value) throw fr(Xn.UNEXPECTED_ERROR);
    Object.defineProperty(t.config.globalProperties, `$${i}`, s)
  }), () => {
    delete t.config.globalProperties.$i18n, t_.forEach(i => {
      delete t.config.globalProperties[`$${i}`]
    })
  }
}
yA();
qk(Rk);
Jk(zk);
Qk(Hy);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const t = Qh();
  t.__INTLIFY__ = !0, Lk(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}

function jA() {
  return xn(go)
}
const WA = un({
  name: "i18n:plugin:switch-locale-path-ssr",
  dependsOn: ["i18n:plugin"],
  setup(t) {
    if (t.$config.public.i18n.experimental.switchLocalePathLinkSSR !== !0) return;
    const e = jA(),
      n = new RegExp([`<!--${dg}-\\[(\\w+)\\]-->`, ".+?", `<!--/${dg}-->`].join(""), "g");
    t.hook("app:rendered", r => {
      var i;
      ((i = r.renderResult) == null ? void 0 : i.html) != null && (r.renderResult.html = r.renderResult.html.replaceAll(n, (s, o) => s.replace(/href="([^"]+)"/, `href="${encodeURI(e(o??""))}"`)))
    })
  }
});

function KA(t, {
  extendComposer: e,
  extendComposerInstance: n
}) {
  const r = Ah(),
    i = t.install.bind(t);
  return t.install = (s, ...o) => {
    const a = Object.assign({}, o[0]);
    a.inject ?? (a.inject = !0), a.__composerExtend = u => (n(u, Bs(t)), () => {}), t.mode === "legacy" && (a.__vueI18nExtend = u => (n(u, Bs(u)), () => {})), Reflect.apply(i, t, [s, a]);
    const l = Bs(t);
    if (r.run(() => {
        e(l), t.mode === "legacy" && yy(t.global) && n(t.global, Bs(t.global))
      }), t.mode === "composition" && s.config.globalProperties.$i18n != null && n(s.config.globalProperties.$i18n, l), a.inject) {
      const u = id(t);
      s.mixin({
        methods: {
          $getRouteBaseName: xn(po, u),
          $resolveRoute: xn(nc, u),
          $localePath: xn(tc, u),
          $localeRoute: xn(nd, u),
          $localeLocation: xn(vx, u),
          $switchLocalePath: xn(go, u),
          $localeHead: xn(vy, u)
        }
      })
    }
    if (s.unmount) {
      const u = s.unmount.bind(s);
      s.unmount = () => {
        r.stop(), u()
      }
    }
  }, r
}
const YA = un({
    name: "i18n:plugin",
    parallel: GS,
    async setup(t) {
      let e, n;
      const r = lu(),
        {
          vueApp: i
        } = t,
        s = t,
        o = qx(s);
      Xx(s, o);
      const a = {
        ...s.$config.public.i18n,
        defaultLocale: o
      };
      a.baseUrl = Mx();
      const l = Ka(),
        u = ([e, n] = or(() => ix(zS, Ue())), e = await e, n(), e);
      u.messages = u.messages || {}, u.fallbackLocale = u.fallbackLocale ?? !1;
      const c = wy(),
        f = D => D || u.locale || "en-US",
        d = Wx();
      let h = Dg(r, c(r), f(a.defaultLocale), {
        ssg: "normal",
        callType: "setup",
        firstAccess: !0,
        localeCookie: Fc(d, l, a.defaultLocale)
      }, a);
      u.messages = ([e, n] = or(() => sx(u.messages, pu, {
        localeCodes: ho,
        initialLocale: h,
        lazy: a.lazy,
        defaultLocale: a.defaultLocale,
        fallbackLocale: u.fallbackLocale
      })), e = await e, n(), e), h = f(h);
      const g = OA({
        ...u,
        locale: h
      });
      let p = !0;
      const b = D => h !== D && p;
      KA(g, {
        extendComposer(D) {
          const _ = lu(),
            m = _n(a.locales),
            v = _n(ho),
            C = _n("");
          D.locales = _t(() => m.value), D.localeCodes = _t(() => v.value), D.baseUrl = _t(() => C.value), JS ? Yn(D.locale, () => {
            C.value = gg(a.baseUrl, s)
          }, {
            immediate: !0
          }) : C.value = gg(a.baseUrl, s), D.strategy = a.strategy, D.localeProperties = _t(() => Ju.find(E => E.code === D.locale.value) || {
            code: D.locale.value
          }), D.setLocale = async E => {
            const R = b(E);
            await yg(E, g, a, R) && R && (p = !1);
            const P = await s.runWithContext(() => bg({
              route: {
                to: _
              },
              locale: E,
              routeLocale: c(_),
              strategy: a.strategy
            }));
            await s.runWithContext(async () => await vg({
              nuxtApp: s,
              i18n: g,
              redirectPath: P,
              locale: E,
              route: _
            }, {
              enableNavigate: !0
            }))
          }, D.loadLocaleMessages = async E => {
            const R = by.bind(null, g);
            await gu(E, pu, R)
          }, D.differentDomains = a.differentDomains, D.defaultLocale = a.defaultLocale, D.getBrowserLocale = () => ky(), D.getLocaleCookie = () => Fc(d, l, a.defaultLocale), D.setLocaleCookie = E => Kx(d, E, l), D.onBeforeLanguageSwitch = (E, R, A, P) => t.callHook("i18n:beforeLocaleSwitch", {
            oldLocale: E,
            newLocale: R,
            initialSetup: A,
            context: P
          }), D.onLanguageSwitched = (E, R) => t.callHook("i18n:localeSwitched", {
            oldLocale: E,
            newLocale: R
          }), D.finalizePendingLocaleChange = async () => {
            g.__pendingLocale && (Dy(g, g.__pendingLocale), g.__resolvePendingLocalePromise && await g.__resolvePendingLocalePromise(), g.__pendingLocale = void 0)
          }, D.waitForPendingLocaleChange = async () => {
            g.__pendingLocale && g.__pendingLocalePromise && await g.__pendingLocalePromise
          }
        },
        extendComposerInstance(D, _) {
          const m = {
            locales: {
              get: () => _.locales.value
            },
            localeCodes: {
              get: () => _.localeCodes.value
            },
            baseUrl: {
              get: () => _.baseUrl.value
            },
            strategy: {
              get: () => _.strategy
            },
            localeProperties: {
              get: () => _.localeProperties.value
            },
            setLocale: {
              get: () => async v => Reflect.apply(_.setLocale, _, [v])
            },
            loadLocaleMessages: {
              get: () => async v => Reflect.apply(_.loadLocaleMessages, _, [v])
            },
            differentDomains: {
              get: () => _.differentDomains
            },
            defaultLocale: {
              get: () => _.defaultLocale
            },
            getBrowserLocale: {
              get: () => () => Reflect.apply(_.getBrowserLocale, _, [])
            },
            getLocaleCookie: {
              get: () => () => Reflect.apply(_.getLocaleCookie, _, [])
            },
            setLocaleCookie: {
              get: () => v => Reflect.apply(_.setLocaleCookie, _, [v])
            },
            onBeforeLanguageSwitch: {
              get: () => (v, C, E, R) => Reflect.apply(_.onBeforeLanguageSwitch, _, [v, C, E, R])
            },
            onLanguageSwitched: {
              get: () => (v, C) => Reflect.apply(_.onLanguageSwitched, _, [v, C])
            },
            finalizePendingLocaleChange: {
              get: () => () => Reflect.apply(_.finalizePendingLocaleChange, _, [])
            },
            waitForPendingLocaleChange: {
              get: () => () => Reflect.apply(_.waitForPendingLocaleChange, _, [])
            }
          };
          for (const [v, C] of Object.entries(m)) Object.defineProperty(D, v, C)
        }
      }), i.use(g), Lx(s, g);
      let y = 0;
      ZC("locale-changing", async (D, _) => {
        let m, v;
        const C = c(D),
          E = Dg(D, C, () => ec(g) || f(a.defaultLocale), {
            ssg: "normal",
            callType: "routing",
            firstAccess: y === 0,
            localeCookie: Fc(d, l, a.defaultLocale)
          }, a),
          R = b(E);
        ([m, v] = or(() => yg(E, g, a, R)), m = await m, v(), m) && R && (p = !1);
        const P = ([m, v] = or(() => s.runWithContext(() => bg({
          route: {
            to: D,
            from: _
          },
          locale: E,
          routeLocale: C,
          strategy: a.strategy
        }, !0))), m = await m, v(), m);
        return y++, [m, v] = or(() => s.runWithContext(async () => vg({
          nuxtApp: s,
          i18n: g,
          redirectPath: P,
          locale: E,
          route: D
        }))), m = await m, v(), m
      }, {
        global: !0
      })
    }
  }),
  zA = {
    beforeMount(t, e) {
      t.clickOutsideEvent = function(n) {
        t === n.target || t.contains(n.target) || e.value(n)
      }, document.addEventListener("click", t.clickOutsideEvent)
    },
    beforeUnmount(t) {
      document.removeEventListener("click", t.clickOutsideEvent)
    }
  },
  GA = un(t => {
    t.vueApp.directive("click-outside", zA)
  });

function Vr(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function tD(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var On = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  mo = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
  fd, Wt, Qe, jn = 1e8,
  ze = 1 / jn,
  Jf = Math.PI * 2,
  XA = Jf / 4,
  qA = 0,
  nD = Math.sqrt,
  JA = Math.cos,
  QA = Math.sin,
  Rt = function(e) {
    return typeof e == "string"
  },
  ot = function(e) {
    return typeof e == "function"
  },
  ni = function(e) {
    return typeof e == "number"
  },
  hd = function(e) {
    return typeof e > "u"
  },
  Or = function(e) {
    return typeof e == "object"
  },
  yn = function(e) {
    return e !== !1
  },
  dd = function() {
    return typeof window < "u"
  },
  pl = function(e) {
    return ot(e) || Rt(e)
  },
  rD = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
  Kt = Array.isArray,
  Qf = /(?:-?\.?\d|\.)+/gi,
  iD = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Hs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ic = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  sD = /[+-]=-?[.\d]+/,
  oD = /[^,'"\[\]\s]+/gi,
  ZA = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  tt, vr, Zf, pd, Nn = {},
  mu = {},
  aD, lD = function(e) {
    return (mu = ms(e, Nn)) && En
  },
  gd = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
  },
  Ra = function(e, n) {
    return !n && console.warn(e)
  },
  uD = function(e, n) {
    return e && (Nn[e] = n) && mu && (mu[e] = n) || Nn
  },
  La = function() {
    return 0
  },
  eP = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
  },
  $l = {
    suppressEvents: !0,
    kill: !1
  },
  tP = {
    suppressEvents: !0
  },
  _d = {},
  Ci = [],
  eh = {},
  cD, kn = {},
  Bc = {},
  n_ = 30,
  Il = [],
  md = "",
  yd = function(e) {
    var n = e[0],
      r, i;
    if (Or(n) || ot(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
      for (i = Il.length; i-- && !Il[i].targetTest(n););
      r = Il[i]
    }
    for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new FD(e[i], r))) || e.splice(i, 1);
    return e
  },
  ls = function(e) {
    return e._gsap || yd(Wn(e))[0]._gsap
  },
  fD = function(e, n, r) {
    return (r = e[n]) && ot(r) ? e[n]() : hd(r) && e.getAttribute && e.getAttribute(n) || r
  },
  Dn = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
  },
  ut = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  At = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  Qs = function(e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
  },
  nP = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r;);
    return i < r
  },
  yu = function() {
    var e = Ci.length,
      n = Ci.slice(0),
      r, i;
    for (eh = {}, Ci.length = 0, r = 0; r < e; r++) i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
  },
  hD = function(e, n, r, i) {
    Ci.length && !Wt && yu(), e.render(n, r, Wt && n < 0 && (e._initted || e._startAt)), Ci.length && !Wt && yu()
  },
  dD = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(oD).length < 2 ? n : Rt(e) ? e.trim() : e
  },
  pD = function(e) {
    return e
  },
  qn = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  rP = function(e) {
    return function(n, r) {
      for (var i in r) i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
  },
  ms = function(e, n) {
    for (var r in n) e[r] = n[r];
    return e
  },
  r_ = function t(e, n) {
    for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Or(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
  },
  Du = function(e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r
  },
  oa = function(e) {
    var n = e.parent || tt,
      r = e.keyframes ? rP(Kt(e.keyframes)) : qn;
    if (yn(e.inherit))
      for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
    return e
  },
  iP = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r];);
    return r < 0
  },
  gD = function(e, n, r, i, s) {
    var o = e[i],
      a;
    if (s)
      for (a = n[s]; o && o[s] > a;) o = o._prev;
    return o ? (n._next = o._next, o._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = o, n.parent = n._dp = e, n
  },
  oc = function(e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = n._prev,
      o = n._next;
    s ? s._next = o : e[r] === n && (e[r] = o), o ? o._prev = s : e[i] === n && (e[i] = s), n._next = n._prev = n.parent = null
  },
  Ai = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
  },
  us = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r;) r._dirty = 1, r = r.parent;
    return e
  },
  sP = function(e) {
    for (var n = e.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
    return e
  },
  th = function(e, n, r, i) {
    return e._startAt && (Wt ? e._startAt.revert($l) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
  },
  oP = function t(e) {
    return !e || e._ts && t(e.parent)
  },
  i_ = function(e) {
    return e._repeat ? yo(e._tTime, e = e.duration() + e._rDelay) * e : 0
  },
  yo = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
  },
  bu = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
  },
  ac = function(e) {
    return e._end = At(e._start + (e._tDur / Math.abs(e._ts || e._rts || ze) || 0))
  },
  lc = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = At(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), ac(e), r._dirty || us(r, e)), e
  },
  _D = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = bu(e.rawTime(), n), (!n._dur || Ya(0, n.totalDuration(), r) - n._tTime > ze) && n.render(r, !0)), us(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration())
        for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
      e._zTime = -ze
    }
  },
  wr = function(e, n, r, i) {
    return n.parent && Ai(n), n._start = At((ni(r) ? r : r || e !== tt ? In(e, r, n) : e._time) + n._delay), n._end = At(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), gD(e, n, "_first", "_last", e._sort ? "_start" : 0), nh(n) || (e._recent = n), i || _D(e, n), e._ts < 0 && lc(e, e._tTime), e
  },
  mD = function(e, n) {
    return (Nn.ScrollTrigger || gd("scrollTrigger", n)) && Nn.ScrollTrigger.create(n, e)
  },
  yD = function(e, n, r, i, s) {
    if (bd(e, n, s), !e._initted) return 1;
    if (!r && e._pt && !Wt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && cD !== Pn.frame) return Ci.push(e), e._lazy = [s, i], 1
  },
  aP = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
  },
  nh = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
  },
  lP = function(e, n, r, i) {
    var s = e.ratio,
      o = n < 0 || !n && (!e._start && aP(e) && !(!e._initted && nh(e)) || (e._ts < 0 || e._dp._ts < 0) && !nh(e)) ? 0 : 1,
      a = e._rDelay,
      l = 0,
      u, c, f;
    if (a && e._repeat && (l = Ya(0, e._tDur, n), c = yo(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== yo(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || Wt || i || e._zTime === ze || !n && e._zTime) {
      if (!e._initted && yD(e, n, i, r, l)) return;
      for (f = e._zTime, e._zTime = n || (r ? ze : 0), r || (r = n && !f), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u;) u.r(o, u.d), u = u._next;
      n < 0 && th(e, n, r, !0), e._onUpdate && !r && Ln(e, "onUpdate"), l && e._repeat && !r && e.parent && Ln(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === o && (o && Ai(e, 1), !r && !Wt && (Ln(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
    } else e._zTime || (e._zTime = n)
  },
  uP = function(e, n, r) {
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
  Do = function(e, n, r, i) {
    var s = e._repeat,
      o = At(n) || 0,
      a = e._tTime / e._tDur;
    return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : At(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && lc(e, e._tTime = e._tDur * a), e.parent && ac(e), r || us(e.parent, e), e
  },
  s_ = function(e) {
    return e instanceof rn ? us(e) : Do(e, e._dur)
  },
  cP = {
    _start: 0,
    endTime: La,
    totalDuration: La
  },
  In = function t(e, n, r) {
    var i = e.labels,
      s = e._recent || cP,
      o = e.duration() >= jn ? s.endTime(!1) : e._dur,
      a, l, u;
    return Rt(n) && (isNaN(n) || n in i) ? (l = n.charAt(0), u = n.substr(-1) === "%", a = n.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = o), i[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)), u && r && (l = l / 100 * (Kt(r) ? r[0] : r).totalDuration()), a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l)) : n == null ? o : +n
  },
  aa = function(e, n, r) {
    var i = ni(n[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = n[s],
      a, l;
    if (i && (o.duration = n[1]), o.parent = r, e) {
      for (a = o, l = r; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = yn(l.vars.inherit) && l.parent;
      o.immediateRender = yn(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1]
    }
    return new gt(n[0], o, n[s + 1])
  },
  Ui = function(e, n) {
    return e || e === 0 ? n(e) : n
  },
  Ya = function(e, n, r) {
    return r < e ? e : r > n ? n : r
  },
  jt = function(e, n) {
    return !Rt(e) || !(n = ZA.exec(e)) ? "" : n[1]
  },
  fP = function(e, n, r) {
    return Ui(r, function(i) {
      return Ya(e, n, i)
    })
  },
  rh = [].slice,
  DD = function(e, n) {
    return e && Or(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Or(e[0])) && !e.nodeType && e !== vr
  },
  hP = function(e, n, r) {
    return r === void 0 && (r = []), e.forEach(function(i) {
      var s;
      return Rt(i) && !n || DD(i, 1) ? (s = r).push.apply(s, Wn(i)) : r.push(i)
    }) || r
  },
  Wn = function(e, n, r) {
    return Qe && !n && Qe.selector ? Qe.selector(e) : Rt(e) && !r && (Zf || !bo()) ? rh.call((n || pd).querySelectorAll(e), 0) : Kt(e) ? hP(e, r) : DD(e) ? rh.call(e, 0) : e ? [e] : []
  },
  ih = function(e) {
    return e = Wn(e)[0] || Ra("Invalid scope") || {},
      function(n) {
        var r = e.current || e.nativeElement || e;
        return Wn(n, r.querySelectorAll ? r : r === e ? Ra("Invalid scope") || pd.createElement("div") : e)
      }
  },
  bD = function(e) {
    return e.sort(function() {
      return .5 - Math.random()
    })
  },
  vD = function(e) {
    if (ot(e)) return e;
    var n = Or(e) ? e : {
        each: e
      },
      r = cs(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      u = n.axis,
      c = i,
      f = i;
    return Rt(i) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
      } [i] || 0 : !a && l && (c = i[0], f = i[1]),
      function(d, h, g) {
        var p = (g || n).length,
          b = o[p],
          y, D, _, m, v, C, E, R, A;
        if (!b) {
          if (A = n.grid === "auto" ? 0 : (n.grid || [1, jn])[1], !A) {
            for (E = -jn; E < (E = g[A++].getBoundingClientRect().left) && A < p;);
            A < p && A--
          }
          for (b = o[p] = [], y = l ? Math.min(A, p) * c - .5 : i % A, D = A === jn ? 0 : l ? p * f / A - .5 : i / A | 0, E = 0, R = jn, C = 0; C < p; C++) _ = C % A - y, m = D - (C / A | 0), b[C] = v = u ? Math.abs(u === "y" ? m : _) : nD(_ * _ + m * m), v > E && (E = v), v < R && (R = v);
          i === "random" && bD(b), b.max = E - R, b.min = R, b.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (A > p ? p - 1 : u ? u === "y" ? p / A : A : Math.max(A, p / A)) || 0) * (i === "edges" ? -1 : 1), b.b = p < 0 ? s - p : s, b.u = jt(n.amount || n.each) || 0, r = r && p < 0 ? RD(r) : r
        }
        return p = (b[d] - b.min) / b.max || 0, At(b.b + (r ? r(p) : p) * b.v) + b.u
      }
  },
  sh = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
      var i = At(Math.round(parseFloat(r) / e) * e * n);
      return (i - i % 1) / n + (ni(r) ? 0 : jt(r))
    }
  },
  ED = function(e, n) {
    var r = Kt(e),
      i, s;
    return !r && Or(e) && (i = r = e.radius || jn, e.values ? (e = Wn(e.values), (s = !ni(e[0])) && (i *= i)) : e = sh(e.increment)), Ui(n, r ? ot(e) ? function(o) {
      return s = e(o), Math.abs(s - o) <= i ? s : o
    } : function(o) {
      for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), u = jn, c = 0, f = e.length, d, h; f--;) s ? (d = e[f].x - a, h = e[f].y - l, d = d * d + h * h) : d = Math.abs(e[f] - a), d < u && (u = d, c = f);
      return c = !i || u <= i ? e[c] : o, s || c === o || ni(o) ? c : c + jt(o)
    } : sh(e))
  },
  CD = function(e, n, r, i) {
    return Ui(Kt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
      return Kt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
  },
  dP = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return function(i) {
      return n.reduce(function(s, o) {
        return o(s)
      }, i)
    }
  },
  pP = function(e, n) {
    return function(r) {
      return e(parseFloat(r)) + (n || jt(r))
    }
  },
  gP = function(e, n, r) {
    return TD(e, n, 0, 1, r)
  },
  wD = function(e, n, r) {
    return Ui(r, function(i) {
      return e[~~n(i)]
    })
  },
  _P = function t(e, n, r) {
    var i = n - e;
    return Kt(e) ? wD(e, t(0, e.length), n) : Ui(r, function(s) {
      return (i + (s - e) % i) % i + e
    })
  },
  mP = function t(e, n, r) {
    var i = n - e,
      s = i * 2;
    return Kt(e) ? wD(e, t(0, e.length - 1), n) : Ui(r, function(o) {
      return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o)
    })
  },
  Oa = function(e) {
    for (var n = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", n));) o = e.indexOf(")", i), a = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(a ? oD : Qf), r += e.substr(n, i - n) + CD(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), n = o + 1;
    return r + e.substr(n, e.length - n)
  },
  TD = function(e, n, r, i, s) {
    var o = n - e,
      a = i - r;
    return Ui(s, function(l) {
      return r + ((l - e) / o * a || 0)
    })
  },
  yP = function t(e, n, r, i) {
    var s = isNaN(e + n) ? 0 : function(h) {
      return (1 - h) * e + h * n
    };
    if (!s) {
      var o = Rt(e),
        a = {},
        l, u, c, f, d;
      if (r === !0 && (i = 1) && (r = null), o) e = {
        p: e
      }, n = {
        p: n
      };
      else if (Kt(e) && !Kt(n)) {
        for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++) c.push(t(e[u - 1], e[u]));
        f--, s = function(g) {
          g *= f;
          var p = Math.min(d, ~~g);
          return c[p](g - p)
        }, r = n
      } else i || (e = ms(Kt(e) ? [] : {}, e));
      if (!c) {
        for (l in n) Dd.call(a, e, l, "get", n[l]);
        s = function(g) {
          return Cd(g, a) || (o ? e.p : e)
        }
      }
    }
    return Ui(r, s)
  },
  o_ = function(e, n, r) {
    var i = e.labels,
      s = jn,
      o, a, l;
    for (o in i) a = i[o] - n, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
    return l
  },
  Ln = function(e, n, r) {
    var i = e.vars,
      s = i[n],
      o = Qe,
      a = e._ctx,
      l, u, c;
    if (s) return l = i[n + "Params"], u = i.callbackScope || e, r && Ci.length && yu(), a && (Qe = a), c = l ? s.apply(u, l) : s.call(u), Qe = o, c
  },
  Vo = function(e) {
    return Ai(e), e.scrollTrigger && e.scrollTrigger.kill(!!Wt), e.progress() < 1 && Ln(e, "onInterrupt"), e
  },
  Us, SD = [],
  xD = function(e) {
    if (e)
      if (e = !e.name && e.default || e, dd() || e.headless) {
        var n = e.name,
          r = ot(e),
          i = n && !r && e.init ? function() {
            this._props = []
          } : e,
          s = {
            init: La,
            render: Cd,
            add: Dd,
            kill: FP,
            modifier: OP,
            rawVars: 0
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Ed,
            aliases: {},
            register: 0
          };
        if (bo(), e !== i) {
          if (kn[n]) return;
          qn(i, qn(Du(e, s), o)), ms(i.prototype, ms(s, Du(e, o))), kn[i.prop = n] = i, e.targetTest && (Il.push(i), _d[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
        }
        uD(n, i), e.register && e.register(En, i, bn)
      } else SD.push(e)
  },
  Ke = 255,
  jo = {
    aqua: [0, Ke, Ke],
    lime: [0, Ke, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Ke],
    navy: [0, 0, 128],
    white: [Ke, Ke, Ke],
    olive: [128, 128, 0],
    yellow: [Ke, Ke, 0],
    orange: [Ke, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Ke, 0, 0],
    pink: [Ke, 192, 203],
    cyan: [0, Ke, Ke],
    transparent: [Ke, Ke, Ke, 0]
  },
  Hc = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * Ke + .5 | 0
  },
  kD = function(e, n, r) {
    var i = e ? ni(e) ? [e >> 16, e >> 8 & Ke, e & Ke] : 0 : jo.black,
      s, o, a, l, u, c, f, d, h, g;
    if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), jo[e]) i = jo[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Ke, i & Ke, parseInt(e.substr(7), 16) / 255];
        e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Ke, e & Ke]
      } else if (e.substr(0, 3) === "hsl") {
        if (i = g = e.match(Qf), !n) l = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, o = c <= .5 ? c * (u + 1) : c + u - c * u, s = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Hc(l + 1 / 3, s, o), i[1] = Hc(l, s, o), i[2] = Hc(l - 1 / 3, s, o);
        else if (~e.indexOf("=")) return i = e.match(iD), r && i.length < 4 && (i[3] = 1), i
      } else i = e.match(Qf) || jo.transparent;
      i = i.map(Number)
    }
    return n && !g && (s = i[0] / Ke, o = i[1] / Ke, a = i[2] / Ke, f = Math.max(s, o, a), d = Math.min(s, o, a), c = (f + d) / 2, f === d ? l = u = 0 : (h = f - d, u = c > .5 ? h / (2 - f - d) : h / (f + d), l = f === s ? (o - a) / h + (o < a ? 6 : 0) : f === o ? (a - s) / h + 2 : (s - o) / h + 4, l *= 60), i[0] = ~~(l + .5), i[1] = ~~(u * 100 + .5), i[2] = ~~(c * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
  },
  AD = function(e) {
    var n = [],
      r = [],
      i = -1;
    return e.split(wi).forEach(function(s) {
      var o = s.match(Hs) || [];
      n.push.apply(n, o), r.push(i += o.length + 1)
    }), n.c = r, n
  },
  a_ = function(e, n, r) {
    var i = "",
      s = (e + i).match(wi),
      o = n ? "hsla(" : "rgba(",
      a = 0,
      l, u, c, f;
    if (!s) return e;
    if (s = s.map(function(d) {
        return (d = kD(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
      }), r && (c = AD(e), l = r.c, l.join(i) !== c.c.join(i)))
      for (u = e.replace(wi, "1").split(Hs), f = u.length - 1; a < f; a++) i += u[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
    if (!u)
      for (u = e.split(wi), f = u.length - 1; a < f; a++) i += u[a] + s[a];
    return i + u[f]
  },
  wi = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in jo) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi")
  }(),
  DP = /hsl[a]?\(/,
  PD = function(e) {
    var n = e.join(" "),
      r;
    if (wi.lastIndex = 0, wi.test(n)) return r = DP.test(n), e[1] = a_(e[1], r), e[0] = a_(e[0], r, AD(e[1])), !0
  },
  Fa, Pn = function() {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      l, u, c, f, d, h, g = function p(b) {
        var y = t() - i,
          D = b === !0,
          _, m, v, C;
        if ((y > e || y < 0) && (r += y - n), i += y, v = i - r, _ = v - o, (_ > 0 || D) && (C = ++f.frame, d = v - f.time * 1e3, f.time = v = v / 1e3, o += _ + (_ >= s ? 4 : s - _), m = 1), D || (l = u(p)), m)
          for (h = 0; h < a.length; h++) a[h](v, d, C, b)
      };
    return f = {
      time: 0,
      frame: 0,
      tick: function() {
        g(!0)
      },
      deltaRatio: function(b) {
        return d / (1e3 / (b || 60))
      },
      wake: function() {
        aD && (!Zf && dd() && (vr = Zf = window, pd = vr.document || {}, Nn.gsap = En, (vr.gsapVersions || (vr.gsapVersions = [])).push(En.version), lD(mu || vr.GreenSockGlobals || !vr.gsap && vr || {}), SD.forEach(xD)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && f.sleep(), u = c || function(b) {
          return setTimeout(b, o - f.time * 1e3 + 1 | 0)
        }, Fa = 1, g(2))
      },
      sleep: function() {
        (c ? cancelAnimationFrame : clearTimeout)(l), Fa = 0, u = La
      },
      lagSmoothing: function(b, y) {
        e = b || 1 / 0, n = Math.min(y || 33, e)
      },
      fps: function(b) {
        s = 1e3 / (b || 240), o = f.time * 1e3 + s
      },
      add: function(b, y, D) {
        var _ = y ? function(m, v, C, E) {
          b(m, v, C, E), f.remove(_)
        } : b;
        return f.remove(b), a[D ? "unshift" : "push"](_), bo(), _
      },
      remove: function(b, y) {
        ~(y = a.indexOf(b)) && a.splice(y, 1) && h >= y && h--
      },
      _listeners: a
    }, f
  }(),
  bo = function() {
    return !Fa && Pn.wake()
  },
  Ae = {},
  bP = /^[\d.\-M][\d.\-,\s]/,
  vP = /["']/g,
  EP = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, l, u; s < o; s++) l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), n[i] = isNaN(u) ? u.replace(vP, "").trim() : +u, i = l.substr(a + 1).trim();
    return n
  },
  CP = function(e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
  },
  wP = function(e) {
    var n = (e + "").split("("),
      r = Ae[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [EP(n[1])] : CP(e).split(",").map(dD)) : Ae._CE && bP.test(e) ? Ae._CE("", e) : r
  },
  RD = function(e) {
    return function(n) {
      return 1 - e(1 - n)
    }
  },
  LD = function t(e, n) {
    for (var r = e._first, i; r;) r instanceof rn ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
  },
  cs = function(e, n) {
    return e && (ot(e) ? e : Ae[e] || wP(e)) || n
  },
  Cs = function(e, n, r, i) {
    r === void 0 && (r = function(l) {
      return 1 - n(1 - l)
    }), i === void 0 && (i = function(l) {
      return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
    });
    var s = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
      },
      o;
    return Dn(e, function(a) {
      Ae[a] = Nn[a] = s, Ae[o = a.toLowerCase()] = r;
      for (var l in s) Ae[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ae[a + "." + l] = s[l]
    }), s
  },
  OD = function(e) {
    return function(n) {
      return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
  },
  Uc = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
      o = s / Jf * (Math.asin(1 / i) || 0),
      a = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * QA((c - o) * s) + 1
      },
      l = e === "out" ? a : e === "in" ? function(u) {
        return 1 - a(1 - u)
      } : OD(a);
    return s = Jf / s, l.config = function(u, c) {
      return t(e, u, c)
    }, l
  },
  Vc = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
      },
      i = e === "out" ? r : e === "in" ? function(s) {
        return 1 - r(1 - s)
      } : OD(r);
    return i.config = function(s) {
      return t(e, s)
    }, i
  };
Dn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  Cs(t + ",Power" + (n - 1), e ? function(r) {
    return Math.pow(r, n)
  } : function(r) {
    return r
  }, function(r) {
    return 1 - Math.pow(1 - r, n)
  }, function(r) {
    return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
  })
});
Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn;
Cs("Elastic", Uc("in"), Uc("out"), Uc());
(function(t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    s = function(a) {
      return a < n ? t * a * a : a < r ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
    };
  Cs("Bounce", function(o) {
    return 1 - s(1 - o)
  }, s)
})(7.5625, 2.75);
Cs("Expo", function(t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0
});
Cs("Circ", function(t) {
  return -(nD(1 - t * t) - 1)
});
Cs("Sine", function(t) {
  return t === 1 ? 1 : -JA(t * XA) + 1
});
Cs("Back", Vc("in"), Vc("out"), Vc());
Ae.SteppedEase = Ae.steps = Nn.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e,
      i = e + (n ? 0 : 1),
      s = n ? 1 : 0,
      o = 1 - ze;
    return function(a) {
      return ((i * Ya(0, o, a) | 0) + s) * r
    }
  }
};
mo.ease = Ae["quad.out"];
Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return md += t + "," + t + "Params,"
});
var FD = function(e, n) {
    this.id = qA++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : fD, this.set = n ? n.getSetter : Ed
  },
  Ma = function() {
    function t(n) {
      this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Do(this, +n.duration, 1, 1), this.data = n.data, Qe && (this._ctx = Qe, Qe.data.push(this)), Fa || Pn.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
      return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
    }, e.duration = function(r) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }, e.totalDuration = function(r) {
      return arguments.length ? (this._dirty = 0, Do(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function(r, i) {
      if (bo(), !arguments.length) return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
        for (lc(this, r), !s._dp || s.parent || _D(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && wr(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ze || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), hD(this, r, i)), this
    }, e.time = function(r, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + i_(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }, e.totalProgress = function(r, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }, e.progress = function(r, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + i_(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }, e.iteration = function(r, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? yo(this._tTime, s) + 1 : 1
    }, e.timeScale = function(r, i) {
      if (!arguments.length) return this._rts === -ze ? 0 : this._rts;
      if (this._rts === r) return this;
      var s = this.parent && this._ts ? bu(this.parent._time, this) : this._tTime;
      return this._rts = +r || 0, this._ts = this._ps || r === -ze ? 0 : this._rts, this.totalTime(Ya(-Math.abs(this._delay), this._tDur, s), i !== !1), ac(this), sP(this)
    }, e.paused = function(r) {
      return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (bo(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ze && (this._tTime -= ze)))), this) : this._ps
    }, e.startTime = function(r) {
      if (arguments.length) {
        this._start = r;
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && wr(i, this, r - this._delay), this
      }
      return this._start
    }, e.endTime = function(r) {
      return this._start + (yn(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function(r) {
      var i = this.parent || this._dp;
      return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? bu(i.rawTime(r), this) : this._tTime : this._tTime
    }, e.revert = function(r) {
      r === void 0 && (r = tP);
      var i = Wt;
      return Wt = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Wt = i, this
    }, e.globalTime = function(r) {
      for (var i = this, s = arguments.length ? r : i.rawTime(); i;) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.globalTime(r) : s
    }, e.repeat = function(r) {
      return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, s_(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function(r) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = r, s_(this), i ? this.time(i) : this
      }
      return this._rDelay
    }, e.yoyo = function(r) {
      return arguments.length ? (this._yoyo = r, this) : this._yoyo
    }, e.seek = function(r, i) {
      return this.totalTime(In(this, r), yn(i))
    }, e.restart = function(r, i) {
      return this.play().totalTime(r ? -this._delay : 0, yn(i))
    }, e.play = function(r, i) {
      return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
    }, e.reverse = function(r, i) {
      return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e.pause = function(r, i) {
      return r != null && this.seek(r, i), this.paused(!0)
    }, e.resume = function() {
      return this.paused(!1)
    }, e.reversed = function(r) {
      return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ze : 0)), this) : this._rts < 0
    }, e.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -ze, this
    }, e.isActive = function() {
      var r = this.parent || this._dp,
        i = this._start,
        s;
      return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - ze)
    }, e.eventCallback = function(r, i, s) {
      var o = this.vars;
      return arguments.length > 1 ? (i ? (o[r] = i, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r]
    }, e.then = function(r) {
      var i = this;
      return new Promise(function(s) {
        var o = ot(r) ? r : pD,
          a = function() {
            var u = i.then;
            i.then = null, ot(o) && (o = o(i)) && (o.then || o === i) && (i.then = u), s(o), i.then = u
          };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
      })
    }, e.kill = function() {
      Vo(this)
    }, t
  }();
qn(Ma.prototype, {
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
  _zTime: -ze,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var rn = function(t) {
  tD(e, t);

  function e(r, i) {
    var s;
    return r === void 0 && (r = {}), s = t.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = yn(r.sortChildren), tt && wr(r.parent || tt, Vr(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && mD(Vr(s), r.scrollTrigger), s
  }
  var n = e.prototype;
  return n.to = function(i, s, o) {
    return aa(0, arguments, this), this
  }, n.from = function(i, s, o) {
    return aa(1, arguments, this), this
  }, n.fromTo = function(i, s, o, a) {
    return aa(2, arguments, this), this
  }, n.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, oa(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new gt(i, s, In(this, o), 1), this
  }, n.call = function(i, s, o) {
    return wr(this, gt.delayedCall(0, i, s), o)
  }, n.staggerTo = function(i, s, o, a, l, u, c) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new gt(i, o, In(this, l)), this
  }, n.staggerFrom = function(i, s, o, a, l, u, c) {
    return o.runBackwards = 1, oa(o).immediateRender = yn(o.immediateRender), this.staggerTo(i, s, o, a, l, u, c)
  }, n.staggerFromTo = function(i, s, o, a, l, u, c, f) {
    return a.startAt = o, oa(a).immediateRender = yn(a.immediateRender), this.staggerTo(i, s, a, l, u, c, f)
  }, n.render = function(i, s, o) {
    var a = this._time,
      l = this._dirty ? this.totalDuration() : this._tDur,
      u = this._dur,
      c = i <= 0 ? 0 : At(i),
      f = this._zTime < 0 != i < 0 && (this._initted || !u),
      d, h, g, p, b, y, D, _, m, v, C, E;
    if (this !== tt && c > l && i >= 0 && (c = l), c !== this._tTime || o || f) {
      if (a !== this._time && u && (c += this._time - a, i += this._time - a), d = c, m = this._start, _ = this._ts, y = !_, f && (u || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (C = this._yoyo, b = u + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(b * 100 + i, s, o);
        if (d = At(c % b), c === l ? (p = this._repeat, d = u) : (p = ~~(c / b), p && p === c / b && (d = u, p--), d > u && (d = u)), v = yo(this._tTime, b), !a && this._tTime && v !== p && this._tTime - v * b - this._dur <= 0 && (v = p), C && p & 1 && (d = u - d, E = 1), p !== v && !this._lock) {
          var R = C && v & 1,
            A = R === (C && p & 1);
          if (p < v && (R = !R), a = R ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (E ? 0 : At(p * b)), s, !u)._lock = 0, this._tTime = c, !s && this.parent && Ln(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (u = this._dur, l = this._tDur, A && (this._lock = 2, a = R ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
          LD(this, E)
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (D = uP(this, At(a), At(d)), D && (c -= d - (d = D._start))), this._tTime = c, this._time = d, this._act = !_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && d && !s && !p && (Ln(this, "onStart"), this._tTime !== c)) return this;
      if (d >= a && i >= 0)
        for (h = this._first; h;) {
          if (g = h._next, (h._act || d >= h._start) && h._ts && D !== h) {
            if (h.parent !== this) return this.render(i, s, o);
            if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, s, o), d !== this._time || !this._ts && !y) {
              D = 0, g && (c += this._zTime = -ze);
              break
            }
          }
          h = g
        } else {
          h = this._last;
          for (var P = i < 0 ? i : d; h;) {
            if (g = h._prev, (h._act || P <= h._end) && h._ts && D !== h) {
              if (h.parent !== this) return this.render(i, s, o);
              if (h.render(h._ts > 0 ? (P - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (P - h._start) * h._ts, s, o || Wt && (h._initted || h._startAt)), d !== this._time || !this._ts && !y) {
                D = 0, g && (c += this._zTime = P ? -ze : ze);
                break
              }
            }
            h = g
          }
        }
      if (D && !s && (this.pause(), D.render(d >= a ? 0 : -ze)._zTime = d >= a ? 1 : -1, this._ts)) return this._start = m, ac(this), this.render(i, s, o);
      this._onUpdate && !s && Ln(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (m === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ai(this, 1), !s && !(i < 0 && !a) && (c || a || !l) && (Ln(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
    }
    return this
  }, n.add = function(i, s) {
    var o = this;
    if (ni(s) || (s = In(this, s, i)), !(i instanceof Ma)) {
      if (Kt(i)) return i.forEach(function(a) {
        return o.add(a, s)
      }), this;
      if (Rt(i)) return this.addLabel(i, s);
      if (ot(i)) i = gt.delayedCall(0, i);
      else return this
    }
    return this !== i ? wr(this, i, s) : this
  }, n.getChildren = function(i, s, o, a) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -jn);
    for (var l = [], u = this._first; u;) u._start >= a && (u instanceof gt ? s && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, s, o)))), u = u._next;
    return l
  }, n.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
      if (s[o].vars.id === i) return s[o]
  }, n.remove = function(i) {
    return Rt(i) ? this.removeLabel(i) : ot(i) ? this.killTweensOf(i) : (oc(this, i), i === this._recent && (this._recent = this._last), us(this))
  }, n.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = At(Pn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
  }, n.addLabel = function(i, s) {
    return this.labels[i] = In(this, s), this
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this
  }, n.addPause = function(i, s, o) {
    var a = gt.delayedCall(0, s || La, o);
    return a.data = "isPause", this._hasPause = 1, wr(this, a, In(this, i))
  }, n.removePause = function(i) {
    var s = this._first;
    for (i = In(this, i); s;) s._start === i && s.data === "isPause" && Ai(s), s = s._next
  }, n.killTweensOf = function(i, s, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--;) mi !== a[l] && a[l].kill(i, s);
    return this
  }, n.getTweensOf = function(i, s) {
    for (var o = [], a = Wn(i), l = this._first, u = ni(s), c; l;) l instanceof gt ? nP(l._targets, a) && (u ? (!mi || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c), l = l._next;
    return o
  }, n.tweenTo = function(i, s) {
    s = s || {};
    var o = this,
      a = In(o, i),
      l = s,
      u = l.startAt,
      c = l.onStart,
      f = l.onStartParams,
      d = l.immediateRender,
      h, g = gt.to(o, qn({
        ease: s.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: a,
        overwrite: "auto",
        duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || ze,
        onStart: function() {
          if (o.pause(), !h) {
            var b = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
            g._dur !== b && Do(g, b, 0, 1).render(g._time, !0, !0), h = 1
          }
          c && c.apply(g, f || [])
        }
      }, s));
    return d ? g.render(0) : g
  }, n.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, qn({
      startAt: {
        time: In(this, i)
      }
    }, o))
  }, n.recent = function() {
    return this._recent
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), o_(this, In(this, i))
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), o_(this, In(this, i), 1)
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ze)
  }, n.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a;) a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (s)
      for (u in l) l[u] >= o && (l[u] += i);
    return us(this)
  }, n.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s;) s.invalidate(i), s = s._next;
    return t.prototype.invalidate.call(this, i)
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), us(this)
  }, n.totalDuration = function(i) {
    var s = 0,
      o = this,
      a = o._last,
      l = jn,
      u, c, f;
    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (f = o.parent; a;) u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, wr(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (s -= c, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = u;
      Do(o, o === tt && o._time > s ? o._time : s, 1, 1), o._dirty = 0
    }
    return o._tDur
  }, e.updateRoot = function(i) {
    if (tt._ts && (hD(tt, bu(i, tt)), cD = Pn.frame), Pn.frame >= n_) {
      n_ += On.autoSleep || 120;
      var s = tt._first;
      if ((!s || !s._ts) && On.autoSleep && Pn._listeners.length < 2) {
        for (; s && !s._ts;) s = s._next;
        s || Pn.sleep()
      }
    }
  }, e
}(Ma);
qn(rn.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var TP = function(e, n, r, i, s, o, a) {
    var l = new bn(this._pt, e, n, 0, 1, HD, null, s),
      u = 0,
      c = 0,
      f, d, h, g, p, b, y, D;
    for (l.b = r, l.e = i, r += "", i += "", (y = ~i.indexOf("random(")) && (i = Oa(i)), o && (D = [r, i], o(D, e, n), r = D[0], i = D[1]), d = r.match(Ic) || []; f = Ic.exec(i);) g = f[0], p = i.substring(u, f.index), h ? h = (h + 1) % 5 : p.substr(-5) === "rgba(" && (h = 1), g !== d[c++] && (b = parseFloat(d[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || c === 1 ? p : ",",
      s: b,
      c: g.charAt(1) === "=" ? Qs(b, g) - b : parseFloat(g) - b,
      m: h && h < 4 ? Math.round : 0
    }, u = Ic.lastIndex);
    return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (sD.test(i) || y) && (l.e = 0), this._pt = l, l
  },
  Dd = function(e, n, r, i, s, o, a, l, u, c) {
    ot(i) && (i = i(s || 0, e, o));
    var f = e[n],
      d = r !== "get" ? r : ot(f) ? u ? e[n.indexOf("set") || !ot(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f,
      h = ot(f) ? u ? PP : ID : vd,
      g;
    if (Rt(i) && (~i.indexOf("random(") && (i = Oa(i)), i.charAt(1) === "=" && (g = Qs(d, i) + (jt(d) || 0), (g || g === 0) && (i = g))), !c || d !== i || oh) return !isNaN(d * i) && i !== "" ? (g = new bn(this._pt, e, n, +d || 0, i - (d || 0), typeof f == "boolean" ? LP : BD, 0, h), u && (g.fp = u), a && g.modifier(a, this, e), this._pt = g) : (!f && !(n in e) && gd(n, i), TP.call(this, e, n, d, i, h, l || On.stringFilter, u))
  },
  SP = function(e, n, r, i, s) {
    if (ot(e) && (e = la(e, s, n, r, i)), !Or(e) || e.style && e.nodeType || Kt(e) || rD(e)) return Rt(e) ? la(e, s, n, r, i) : e;
    var o = {},
      a;
    for (a in e) o[a] = la(e[a], s, n, r, i);
    return o
  },
  MD = function(e, n, r, i, s, o) {
    var a, l, u, c;
    if (kn[e] && (a = new kn[e]).init(s, a.rawVars ? n[e] : SP(n[e], i, s, o, r), r, i, o) !== !1 && (r._pt = l = new bn(r._pt, s, e, 0, 1, a.render, a, 0, a.priority), r !== Us))
      for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--;) u[a._props[c]] = l;
    return a
  },
  mi, oh, bd = function t(e, n, r) {
    var i = e.vars,
      s = i.ease,
      o = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      c = i.runBackwards,
      f = i.yoyoEase,
      d = i.keyframes,
      h = i.autoRevert,
      g = e._dur,
      p = e._startAt,
      b = e._targets,
      y = e.parent,
      D = y && y.data === "nested" ? y.vars.targets : b,
      _ = e._overwrite === "auto" && !fd,
      m = e.timeline,
      v, C, E, R, A, P, V, O, Y, q, Q, U, W;
    if (m && (!d || !s) && (s = "none"), e._ease = cs(s, mo.ease), e._yEase = f ? RD(cs(f === !0 ? s : f, mo.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !m && !!i.runBackwards, !m || d && !i.stagger) {
      if (O = b[0] ? ls(b[0]).harness : 0, U = O && i[O.prop], v = Du(i, _d), p && (p._zTime < 0 && p.progress(1), n < 0 && c && a && !h ? p.render(-1, !0) : p.revert(c && g ? $l : eP), p._lazy = 0), o) {
        if (Ai(e._startAt = gt.set(b, qn({
            data: "isStart",
            overwrite: !1,
            parent: y,
            immediateRender: !0,
            lazy: !p && yn(l),
            startAt: null,
            delay: 0,
            onUpdate: u && function() {
              return Ln(e, "onUpdate")
            },
            stagger: 0
          }, o))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Wt || !a && !h) && e._startAt.revert($l), a && g && n <= 0 && r <= 0) {
          n && (e._zTime = n);
          return
        }
      } else if (c && g && !p) {
        if (n && (a = !1), E = qn({
            overwrite: !1,
            data: "isFromStart",
            lazy: a && !p && yn(l),
            immediateRender: a,
            stagger: 0,
            parent: y
          }, v), U && (E[O.prop] = U), Ai(e._startAt = gt.set(b, E)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Wt ? e._startAt.revert($l) : e._startAt.render(-1, !0)), e._zTime = n, !a) t(e._startAt, ze, ze);
        else if (!n) return
      }
      for (e._pt = e._ptCache = 0, l = g && yn(l) || l && !g, C = 0; C < b.length; C++) {
        if (A = b[C], V = A._gsap || yd(b)[C]._gsap, e._ptLookup[C] = q = {}, eh[V.id] && Ci.length && yu(), Q = D === b ? C : D.indexOf(A), O && (Y = new O).init(A, U || v, e, Q, D) !== !1 && (e._pt = R = new bn(e._pt, A, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(z) {
            q[z] = R
          }), Y.priority && (P = 1)), !O || U)
          for (E in v) kn[E] && (Y = MD(E, v, e, Q, A, D)) ? Y.priority && (P = 1) : q[E] = R = Dd.call(e, A, E, "get", v[E], Q, D, 0, i.stringFilter);
        e._op && e._op[C] && e.kill(A, e._op[C]), _ && e._pt && (mi = e, tt.killTweensOf(A, q, e.globalTime(n)), W = !e.parent, mi = 0), e._pt && l && (eh[V.id] = 1)
      }
      P && UD(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = u, e._initted = (!e._op || e._pt) && !W, d && n <= 0 && m.render(jn, !0, !0)
  },
  xP = function(e, n, r, i, s, o, a, l) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[n],
      c, f, d, h;
    if (!u)
      for (u = e._ptCache[n] = [], d = e._ptLookup, h = e._targets.length; h--;) {
        if (c = d[h][n], c && c.d && c.d._pt)
          for (c = c.d._pt; c && c.p !== n && c.fp !== n;) c = c._next;
        if (!c) return oh = 1, e.vars[n] = "+=0", bd(e, a), oh = 0, l ? Ra(n + " not eligible for reset") : 1;
        u.push(c)
      }
    for (h = u.length; h--;) f = u[h], c = f._pt || f, c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c, c.c = r - c.s, f.e && (f.e = ut(r) + jt(f.e)), f.b && (f.b = c.s + jt(f.b))
  },
  kP = function(e, n) {
    var r = e[0] ? ls(e[0]).harness : 0,
      i = r && r.aliases,
      s, o, a, l;
    if (!i) return n;
    s = ms({}, n);
    for (o in i)
      if (o in s)
        for (l = i[o].split(","), a = l.length; a--;) s[l[a]] = s[o];
    return s
  },
  AP = function(e, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o, a;
    if (Kt(n)) a = r[e] || (r[e] = []), n.forEach(function(l, u) {
      return a.push({
        t: u / (n.length - 1) * 100,
        v: l,
        e: s
      })
    });
    else
      for (o in n) a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: n[o],
        e: s
      })
  },
  la = function(e, n, r, i, s) {
    return ot(e) ? e.call(n, r, i, s) : Rt(e) && ~e.indexOf("random(") ? Oa(e) : e
  },
  ND = md + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  $D = {};
Dn(ND + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return $D[t] = 1
});
var gt = function(t) {
  tD(e, t);

  function e(r, i, s, o) {
    var a;
    typeof i == "number" && (s.duration = i, i = s, s = null), a = t.call(this, o ? i : oa(i)) || this;
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      f = l.immediateRender,
      d = l.stagger,
      h = l.overwrite,
      g = l.keyframes,
      p = l.defaults,
      b = l.scrollTrigger,
      y = l.yoyoEase,
      D = i.parent || tt,
      _ = (Kt(r) || rD(r) ? ni(r[0]) : "length" in i) ? [r] : Wn(r),
      m, v, C, E, R, A, P, V;
    if (a._targets = _.length ? yd(_) : Ra("GSAP target " + r + " not found. https://gsap.com", !On.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = h, g || d || pl(u) || pl(c)) {
      if (i = a.vars, m = a.timeline = new rn({
          data: "nested",
          defaults: p || {},
          targets: D && D.data === "nested" ? D.vars.targets : _
        }), m.kill(), m.parent = m._dp = Vr(a), m._start = 0, d || pl(u) || pl(c)) {
        if (E = _.length, P = d && vD(d), Or(d))
          for (R in d) ~ND.indexOf(R) && (V || (V = {}), V[R] = d[R]);
        for (v = 0; v < E; v++) C = Du(i, $D), C.stagger = 0, y && (C.yoyoEase = y), V && ms(C, V), A = _[v], C.duration = +la(u, Vr(a), v, A, _), C.delay = (+la(c, Vr(a), v, A, _) || 0) - a._delay, !d && E === 1 && C.delay && (a._delay = c = C.delay, a._start += c, C.delay = 0), m.to(A, C, P ? P(v, A, _) : 0), m._ease = Ae.none;
        m.duration() ? u = c = 0 : a.timeline = 0
      } else if (g) {
        oa(qn(m.vars.defaults, {
          ease: "none"
        })), m._ease = cs(g.ease || i.ease || "none");
        var O = 0,
          Y, q, Q;
        if (Kt(g)) g.forEach(function(U) {
          return m.to(_, U, ">")
        }), m.duration();
        else {
          C = {};
          for (R in g) R === "ease" || R === "easeEach" || AP(R, g[R], C, g.easeEach);
          for (R in C)
            for (Y = C[R].sort(function(U, W) {
                return U.t - W.t
              }), O = 0, v = 0; v < Y.length; v++) q = Y[v], Q = {
              ease: q.e,
              duration: (q.t - (v ? Y[v - 1].t : 0)) / 100 * u
            }, Q[R] = q.v, m.to(_, Q, O), O += Q.duration;
          m.duration() < u && m.to({}, {
            duration: u - m.duration()
          })
        }
      }
      u || a.duration(u = m.duration())
    } else a.timeline = 0;
    return h === !0 && !fd && (mi = Vr(a), tt.killTweensOf(_), mi = 0), wr(D, Vr(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (f || !u && !g && a._start === At(D._time) && yn(f) && oP(Vr(a)) && D.data !== "nested") && (a._tTime = -ze, a.render(Math.max(0, -c) || 0)), b && mD(Vr(a), b), a
  }
  var n = e.prototype;
  return n.render = function(i, s, o) {
    var a = this._time,
      l = this._tDur,
      u = this._dur,
      c = i < 0,
      f = i > l - ze && !c ? l : i < ze ? 0 : i,
      d, h, g, p, b, y, D, _, m;
    if (!u) lP(this, i, s, o);
    else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
      if (d = f, _ = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && c) return this.totalTime(p * 100 + i, s, o);
        if (d = At(f % p), f === l ? (g = this._repeat, d = u) : (g = ~~(f / p), g && g === At(f / p) && (d = u, g--), d > u && (d = u)), y = this._yoyo && g & 1, y && (m = this._yEase, d = u - d), b = yo(this._tTime, p), d === a && !o && this._initted && g === b) return this._tTime = f, this;
        g !== b && (_ && this._yEase && LD(_, y), this.vars.repeatRefresh && !y && !this._lock && this._time !== p && this._initted && (this._lock = o = 1, this.render(At(p * g), !0).invalidate()._lock = 0))
      }
      if (!this._initted) {
        if (yD(this, c ? i : d, o, s, f)) return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && g !== b)) return this;
        if (u !== this._dur) return this.render(i, s, o)
      }
      if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = D = (m || this._ease)(d / u), this._from && (this.ratio = D = 1 - D), d && !a && !s && !g && (Ln(this, "onStart"), this._tTime !== f)) return this;
      for (h = this._pt; h;) h.r(D, h.d), h = h._next;
      _ && _.render(i < 0 ? i : _._dur * _._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (c && th(this, i, s, o), Ln(this, "onUpdate")), this._repeat && g !== b && this.vars.onRepeat && !s && this.parent && Ln(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && th(this, i, !0, !0), (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ai(this, 1), !s && !(c && !a) && (f || a || y) && (Ln(this, f === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
    }
    return this
  }, n.targets = function() {
    return this._targets
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i)
  }, n.resetTo = function(i, s, o, a, l) {
    Fa || Pn.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      c;
    return this._initted || bd(this, u), c = this._ease(u / this._dur), xP(this, i, s, o, a, c, u, l) ? this.resetTo(i, s, o, a, 1) : (lc(this, 0), this.parent || gD(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
  }, n.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Vo(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, mi && mi.vars.overwrite !== !0)._first || Vo(this), this.parent && o !== this.timeline.totalDuration() && Do(this, this._dur * this.timeline._tDur / o, 0, 1), this
    }
    var a = this._targets,
      l = i ? Wn(i) : a,
      u = this._ptLookup,
      c = this._pt,
      f, d, h, g, p, b, y;
    if ((!s || s === "all") && iP(a, l)) return s === "all" && (this._pt = 0), Vo(this);
    for (f = this._op = this._op || [], s !== "all" && (Rt(s) && (p = {}, Dn(s, function(D) {
        return p[D] = 1
      }), s = p), s = kP(a, s)), y = a.length; y--;)
      if (~l.indexOf(a[y])) {
        d = u[y], s === "all" ? (f[y] = s, g = d, h = {}) : (h = f[y] = f[y] || {}, g = s);
        for (p in g) b = d && d[p], b && ((!("kill" in b.d) || b.d.kill(p) === !0) && oc(this, b, "_pt"), delete d[p]), h !== "all" && (h[p] = 1)
      } return this._initted && !this._pt && c && Vo(this), this
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2])
  }, e.from = function(i, s) {
    return aa(1, arguments)
  }, e.delayedCall = function(i, s, o, a) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    })
  }, e.fromTo = function(i, s, o) {
    return aa(2, arguments)
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s)
  }, e.killTweensOf = function(i, s, o) {
    return tt.killTweensOf(i, s, o)
  }, e
}(Ma);
qn(gt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Dn("staggerTo,staggerFrom,staggerFromTo", function(t) {
  gt[t] = function() {
    var e = new rn,
      n = rh.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n)
  }
});
var vd = function(e, n, r) {
    return e[n] = r
  },
  ID = function(e, n, r) {
    return e[n](r)
  },
  PP = function(e, n, r, i) {
    return e[n](i.fp, r)
  },
  RP = function(e, n, r) {
    return e.setAttribute(n, r)
  },
  Ed = function(e, n) {
    return ot(e[n]) ? ID : hd(e[n]) && e.setAttribute ? RP : vd
  },
  BD = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
  },
  LP = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
  },
  HD = function(e, n) {
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
  Cd = function(e, n) {
    for (var r = n._pt; r;) r.r(e, r.d), r = r._next
  },
  OP = function(e, n, r, i) {
    for (var s = this._pt, o; s;) o = s._next, s.p === i && s.modifier(e, n, r), s = o
  },
  FP = function(e) {
    for (var n = this._pt, r, i; n;) i = n._next, n.p === e && !n.op || n.op === e ? oc(this, n, "_pt") : n.dep || (r = 1), n = i;
    return !r
  },
  MP = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
  },
  UD = function(e) {
    for (var n = e._pt, r, i, s, o; n;) {
      for (r = n._next, i = s; i && i.pr > n.pr;) i = i._next;
      (n._prev = i ? i._prev : o) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : o = n, n = r
    }
    e._pt = s
  },
  bn = function() {
    function t(n, r, i, s, o, a, l, u, c) {
      this.t = r, this.s = s, this.c = o, this.p = i, this.r = a || BD, this.d = l || this, this.set = u || vd, this.pr = c || 0, this._next = n, n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, s) {
      this.mSet = this.mSet || this.set, this.set = MP, this.m = r, this.mt = s, this.tween = i
    }, t
  }();
Dn(md + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return _d[t] = 1
});
Nn.TweenMax = Nn.TweenLite = gt;
Nn.TimelineLite = Nn.TimelineMax = rn;
tt = new rn({
  sortChildren: !1,
  defaults: mo,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
On.stringFilter = PD;
var fs = [],
  Bl = {},
  NP = [],
  l_ = 0,
  $P = 0,
  jc = function(e) {
    return (Bl[e] || NP).map(function(n) {
      return n()
    })
  },
  ah = function() {
    var e = Date.now(),
      n = [];
    e - l_ > 2 && (jc("matchMediaInit"), fs.forEach(function(r) {
      var i = r.queries,
        s = r.conditions,
        o, a, l, u;
      for (a in i) o = vr.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, u = 1);
      u && (r.revert(), l && n.push(r))
    }), jc("matchMediaRevert"), n.forEach(function(r) {
      return r.onMatch(r, function(i) {
        return r.add(null, i)
      })
    }), l_ = e, jc("matchMedia"))
  },
  VD = function() {
    function t(n, r) {
      this.selector = r && ih(r), this.data = [], this._r = [], this.isReverted = !1, this.id = $P++, n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
      ot(r) && (s = i, i = r, r = ot);
      var o = this,
        a = function() {
          var u = Qe,
            c = o.selector,
            f;
          return u && u !== o && u.data.push(o), s && (o.selector = ih(s)), Qe = o, f = i.apply(o, arguments), ot(f) && o._r.push(f), Qe = u, o.selector = c, o.isReverted = !1, f
        };
      return o.last = a, r === ot ? a(o, function(l) {
        return o.add(null, l)
      }) : r ? o[r] = a : a
    }, e.ignore = function(r) {
      var i = Qe;
      Qe = null, r(this), Qe = i
    }, e.getTweens = function() {
      var r = [];
      return this.data.forEach(function(i) {
        return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof gt && !(i.parent && i.parent.data === "nested") && r.push(i)
      }), r
    }, e.clear = function() {
      this._r.length = this.data.length = 0
    }, e.kill = function(r, i) {
      var s = this;
      if (r ? function() {
          for (var a = s.getTweens(), l = s.data.length, u; l--;) u = s.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
            return a.splice(a.indexOf(c), 1)
          }));
          for (a.map(function(c) {
              return {
                g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                t: c
              }
            }).sort(function(c, f) {
              return f.g - c.g || -1 / 0
            }).forEach(function(c) {
              return c.t.revert(r)
            }), l = s.data.length; l--;) u = s.data[l], u instanceof rn ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof gt) && u.revert && u.revert(r);
          s._r.forEach(function(c) {
            return c(r, s)
          }), s.isReverted = !0
        }() : this.data.forEach(function(a) {
          return a.kill && a.kill()
        }), this.clear(), i)
        for (var o = fs.length; o--;) fs[o].id === this.id && fs.splice(o, 1)
    }, e.revert = function(r) {
      this.kill(r || {})
    }, t
  }(),
  IP = function() {
    function t(n) {
      this.contexts = [], this.scope = n, Qe && Qe.data.push(this)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
      Or(r) || (r = {
        matches: r
      });
      var o = new VD(0, s || this.scope),
        a = o.conditions = {},
        l, u, c;
      Qe && !o.selector && (o.selector = Qe.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
      for (u in r) u === "all" ? c = 1 : (l = vr.matchMedia(r[u]), l && (fs.indexOf(o) < 0 && fs.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(ah) : l.addEventListener("change", ah)));
      return c && i(o, function(f) {
        return o.add(null, f)
      }), this
    }, e.revert = function(r) {
      this.kill(r || {})
    }, e.kill = function(r) {
      this.contexts.forEach(function(i) {
        return i.kill(r, !0)
      })
    }, t
  }(),
  vu = {
    registerPlugin: function() {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
      n.forEach(function(i) {
        return xD(i)
      })
    },
    timeline: function(e) {
      return new rn(e)
    },
    getTweensOf: function(e, n) {
      return tt.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
      Rt(e) && (e = Wn(e)[0]);
      var s = ls(e || {}).get,
        o = r ? pD : dD;
      return r === "native" && (r = ""), e && (n ? o((kn[n] && kn[n].get || s)(e, n, r, i)) : function(a, l, u) {
        return o((kn[a] && kn[a].get || s)(e, a, l, u))
      })
    },
    quickSetter: function(e, n, r) {
      if (e = Wn(e), e.length > 1) {
        var i = e.map(function(c) {
            return En.quickSetter(c, n, r)
          }),
          s = i.length;
        return function(c) {
          for (var f = s; f--;) i[f](c)
        }
      }
      e = e[0] || {};
      var o = kn[n],
        a = ls(e),
        l = a.harness && (a.harness.aliases || {})[n] || n,
        u = o ? function(c) {
          var f = new o;
          Us._pt = 0, f.init(e, r ? c + r : c, Us, 0, [e]), f.render(1, f), Us._pt && Cd(1, Us)
        } : a.set(e, l);
      return o ? u : function(c) {
        return u(e, l, r ? c + r : c, a, 1)
      }
    },
    quickTo: function(e, n, r) {
      var i, s = En.to(e, ms((i = {}, i[n] = "+=0.1", i.paused = !0, i), r || {})),
        o = function(l, u, c) {
          return s.resetTo(n, l, u, c)
        };
      return o.tween = s, o
    },
    isTweening: function(e) {
      return tt.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
      return e && e.ease && (e.ease = cs(e.ease, mo.ease)), r_(mo, e || {})
    },
    config: function(e) {
      return r_(On, e || {})
    },
    registerEffect: function(e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (i || "").split(",").forEach(function(a) {
        return a && !kn[a] && !Nn[a] && Ra(n + " effect requires " + a + " plugin.")
      }), Bc[n] = function(a, l, u) {
        return r(Wn(a), qn(l || {}, s), u)
      }, o && (rn.prototype[n] = function(a, l, u) {
        return this.add(Bc[n](a, Or(l) ? l : (u = l) && {}, this), u)
      })
    },
    registerEase: function(e, n) {
      Ae[e] = cs(n)
    },
    parseEase: function(e, n) {
      return arguments.length ? cs(e, n) : Ae
    },
    getById: function(e) {
      return tt.getById(e)
    },
    exportRoot: function(e, n) {
      e === void 0 && (e = {});
      var r = new rn(e),
        i, s;
      for (r.smoothChildTiming = yn(e.smoothChildTiming), tt.remove(r), r._dp = 0, r._time = r._tTime = tt._time, i = tt._first; i;) s = i._next, (n || !(!i._dur && i instanceof gt && i.vars.onComplete === i._targets[0])) && wr(r, i, i._start - i._delay), i = s;
      return wr(tt, r, 0), r
    },
    context: function(e, n) {
      return e ? new VD(e, n) : Qe
    },
    matchMedia: function(e) {
      return new IP(e)
    },
    matchMediaRefresh: function() {
      return fs.forEach(function(e) {
        var n = e.conditions,
          r, i;
        for (i in n) n[i] && (n[i] = !1, r = 1);
        r && e.revert()
      }) || ah()
    },
    addEventListener: function(e, n) {
      var r = Bl[e] || (Bl[e] = []);
      ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
      var r = Bl[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1)
    },
    utils: {
      wrap: _P,
      wrapYoyo: mP,
      distribute: vD,
      random: CD,
      snap: ED,
      normalize: gP,
      getUnit: jt,
      clamp: fP,
      splitColor: kD,
      toArray: Wn,
      selector: ih,
      mapRange: TD,
      pipe: dP,
      unitize: pP,
      interpolate: yP,
      shuffle: bD
    },
    install: lD,
    effects: Bc,
    ticker: Pn,
    updateRoot: rn.updateRoot,
    plugins: kn,
    globalTimeline: tt,
    core: {
      PropTween: bn,
      globals: uD,
      Tween: gt,
      Timeline: rn,
      Animation: Ma,
      getCache: ls,
      _removeLinkedListItem: oc,
      reverting: function() {
        return Wt
      },
      context: function(e) {
        return e && Qe && (Qe.data.push(e), e._ctx = Qe), Qe
      },
      suppressOverwrites: function(e) {
        return fd = e
      }
    }
  };
Dn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return vu[t] = gt[t]
});
Pn.add(rn.updateRoot);
Us = vu.to({}, {
  duration: 0
});
var BP = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n;) r = r._next;
    return r
  },
  HP = function(e, n) {
    var r = e._targets,
      i, s, o;
    for (i in n)
      for (s = r.length; s--;) o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = BP(o, i)), o && o.modifier && o.modifier(n[i], e, r[s], i))
  },
  Wc = function(e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function(i, s, o) {
        o._onInit = function(a) {
          var l, u;
          if (Rt(s) && (l = {}, Dn(s, function(c) {
              return l[c] = 1
            }), s = l), n) {
            l = {};
            for (u in s) l[u] = n(s[u]);
            s = l
          }
          HP(a, s)
        }
      }
    }
  },
  En = vu.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, s) {
      var o, a, l;
      this.tween = r;
      for (o in n) l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", n[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
    },
    render: function(e, n) {
      for (var r = n._pt; r;) Wt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
    }
  }, {
    name: "endArray",
    init: function(e, n) {
      for (var r = n.length; r--;) this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
  }, Wc("roundProps", sh), Wc("modifiers"), Wc("snap", ED)) || vu;
gt.version = rn.version = En.version = "3.12.5";
aD = 1;
dd() && bo();
Ae.Power0;
Ae.Power1;
Ae.Power2;
Ae.Power3;
Ae.Power4;
Ae.Linear;
Ae.Quad;
Ae.Cubic;
Ae.Quart;
Ae.Quint;
Ae.Strong;
Ae.Elastic;
Ae.Back;
Ae.SteppedEase;
Ae.Bounce;
Ae.Sine;
Ae.Expo;
Ae.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var u_, yi, Zs, wd, ts, c_, Td, UP = function() {
    return typeof window < "u"
  },
  ri = {},
  Qi = 180 / Math.PI,
  eo = Math.PI / 180,
  As = Math.atan2,
  f_ = 1e8,
  Sd = /([A-Z])/g,
  VP = /(left|right|width|margin|padding|x)/i,
  jP = /[\s,\(]\S/,
  Tr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  lh = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  WP = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  KP = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
  },
  YP = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
  },
  jD = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
  },
  WD = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
  },
  zP = function(e, n, r) {
    return e.style[n] = r
  },
  GP = function(e, n, r) {
    return e.style.setProperty(n, r)
  },
  XP = function(e, n, r) {
    return e._gsap[n] = r
  },
  qP = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
  },
  JP = function(e, n, r, i, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = r, o.renderTransform(s, o)
  },
  QP = function(e, n, r, i, s) {
    var o = e._gsap;
    o[n] = r, o.renderTransform(s, o)
  },
  rt = "transform",
  vn = rt + "Origin",
  ZP = function t(e, n) {
    var r = this,
      i = this.target,
      s = i.style,
      o = i._gsap;
    if (e in ri && s) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = Tr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = jr(i, a)
      }) : this.tfm[e] = o.x ? o[e] : jr(i, e), e === vn && (this.tfm.zOrigin = o.zOrigin);
      else return Tr.transform.split(",").forEach(function(a) {
        return t.call(r, a, n)
      });
      if (this.props.indexOf(rt) >= 0) return;
      o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(vn, n, "")), e = rt
    }(s || n) && this.props.push(e, n, s[e])
  },
  KD = function(e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
  },
  eR = function() {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s, o;
    for (s = 0; s < e.length; s += 3) e[s + 1] ? n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Sd, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), s = Td(), (!s || !s.isStart) && !r[rt] && (KD(r), i.zOrigin && r[vn] && (r[vn] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
    }
  },
  YD = function(e, n) {
    var r = {
      target: e,
      props: [],
      revert: eR,
      save: ZP
    };
    return e._gsap || En.core.getCache(e), n && n.split(",").forEach(function(i) {
      return r.save(i)
    }), r
  },
  zD, uh = function(e, n) {
    var r = yi.createElementNS ? yi.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : yi.createElement(e);
    return r && r.style ? r : yi.createElement(e)
  },
  Pr = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(Sd, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, vo(n) || n, 1) || ""
  },
  h_ = "O,Moz,ms,Ms,Webkit".split(","),
  vo = function(e, n, r) {
    var i = n || ts,
      s = i.style,
      o = 5;
    if (e in s && !r) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(h_[o] + e in s););
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? h_[o] : "") + e
  },
  ch = function() {
    UP() && window.document && (u_ = window, yi = u_.document, Zs = yi.documentElement, ts = uh("div") || {
      style: {}
    }, uh("div"), rt = vo(rt), vn = rt + "Origin", ts.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zD = !!vo("perspective"), Td = En.core.reverting, wd = 1)
  },
  Kc = function t(e) {
    var n = uh("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      r = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      o;
    if (Zs.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
    } catch {} else this._gsapBBox && (o = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Zs.removeChild(n), this.style.cssText = s, o
  },
  d_ = function(e, n) {
    for (var r = n.length; r--;)
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r])
  },
  GD = function(e) {
    var n;
    try {
      n = e.getBBox()
    } catch {
      n = Kc.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === Kc || (n = Kc.call(e, !0)), n && !n.width && !n.x && !n.y ? {
      x: +d_(e, ["x", "cx", "x1"]) || 0,
      y: +d_(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : n
  },
  XD = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && GD(e))
  },
  ys = function(e, n) {
    if (n) {
      var r = e.style,
        i;
      n in ri && n !== vn && (n = rt), r.removeProperty ? (i = n.substr(0, 2), (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(i === "--" ? n : n.replace(Sd, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
  },
  Di = function(e, n, r, i, s, o) {
    var a = new bn(e._pt, n, r, 0, 1, o ? WD : jD);
    return e._pt = a, a.b = i, a.e = s, e._props.push(r), a
  },
  p_ = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  tR = {
    grid: 1,
    flex: 1
  },
  Pi = function t(e, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = ts.style,
      l = VP.test(n),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      f = 100,
      d = i === "px",
      h = i === "%",
      g, p, b, y;
    if (i === o || !s || p_[i] || p_[o]) return s;
    if (o !== "px" && !d && (s = t(e, n, r, "px")), y = e.getCTM && XD(e), (h || o === "%") && (ri[n] || ~n.indexOf("adius"))) return g = y ? e.getBBox()[l ? "width" : "height"] : e[c], ut(h ? s / g * f : s / 100 * g);
    if (a[l ? "width" : "height"] = f + (d ? o : i), p = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, y && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === yi || !p.appendChild) && (p = yi.body), b = p._gsap, b && h && b.width && l && b.time === Pn.time && !b.uncache) return ut(s / b.width * f);
    if (h && (n === "height" || n === "width")) {
      var D = e.style[n];
      e.style[n] = f + i, g = e[c], D ? e.style[n] = D : ys(e, n)
    } else(h || o === "%") && !tR[Pr(p, "display")] && (a.position = Pr(e, "position")), p === e && (a.position = "static"), p.appendChild(ts), g = ts[c], p.removeChild(ts), a.position = "absolute";
    return l && h && (b = ls(p), b.time = Pn.time, b.width = p[c]), ut(d ? g * s / f : g && s ? f / g * s : 0)
  },
  jr = function(e, n, r, i) {
    var s;
    return wd || ch(), n in Tr && n !== "transform" && (n = Tr[n], ~n.indexOf(",") && (n = n.split(",")[0])), ri[n] && n !== "transform" ? (s = $a(e, i), s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : Cu(Pr(e, vn)) + " " + s.zOrigin + "px") : (s = e.style[n], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Eu[n] && Eu[n](e, n, r) || Pr(e, n) || fD(e, n) || (n === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Pi(e, n, s, r) + r : s
  },
  nR = function(e, n, r, i) {
    if (!r || r === "none") {
      var s = vo(n, e, 1),
        o = s && Pr(e, s, 1);
      o && o !== r ? (n = s, r = o) : n === "borderColor" && (r = Pr(e, "borderTopColor"))
    }
    var a = new bn(this._pt, e.style, n, 0, 1, HD),
      l = 0,
      u = 0,
      c, f, d, h, g, p, b, y, D, _, m, v;
    if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (p = e.style[n], e.style[n] = i, i = Pr(e, n) || i, p ? e.style[n] = p : ys(e, n)), c = [r, i], PD(c), r = c[0], i = c[1], d = r.match(Hs) || [], v = i.match(Hs) || [], v.length) {
      for (; f = Hs.exec(i);) b = f[0], D = i.substring(l, f.index), g ? g = (g + 1) % 5 : (D.substr(-5) === "rgba(" || D.substr(-5) === "hsla(") && (g = 1), b !== (p = d[u++] || "") && (h = parseFloat(p) || 0, m = p.substr((h + "").length), b.charAt(1) === "=" && (b = Qs(h, b) + m), y = parseFloat(b), _ = b.substr((y + "").length), l = Hs.lastIndex - _.length, _ || (_ = _ || On.units[n] || m, l === i.length && (i += _, a.e += _)), m !== _ && (h = Pi(e, n, p, _) || 0), a._pt = {
        _next: a._pt,
        p: D || u === 1 ? D : ",",
        s: h,
        c: y - h,
        m: g && g < 4 || n === "zIndex" ? Math.round : 0
      });
      a.c = l < i.length ? i.substring(l, i.length) : ""
    } else a.r = n === "display" && i === "none" ? WD : jD;
    return sD.test(i) && (a.e = 0), this._pt = a, a
  },
  g_ = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  rR = function(e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = g_[r] || r, n[1] = g_[i] || i, n.join(" ")
  },
  iR = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        a, l, u;
      if (s === "all" || s === !0) i.cssText = "", l = 1;
      else
        for (s = s.split(","), u = s.length; --u > -1;) a = s[u], ri[a] && (l = 1, a = a === "transformOrigin" ? vn : rt), ys(r, a);
      l && (ys(r, rt), o && (o.svg && r.removeAttribute("transform"), $a(r, 1), o.uncache = 1, KD(i)))
    }
  },
  Eu = {
    clearProps: function(e, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = e._pt = new bn(e._pt, n, r, 0, 0, iR);
        return o.u = i, o.pr = -10, o.tween = s, e._props.push(r), 1
      }
    }
  },
  Na = [1, 0, 0, 1, 0, 0],
  qD = {},
  JD = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
  },
  __ = function(e) {
    var n = Pr(e, rt);
    return JD(n) ? Na : n.substr(7).match(iD).map(ut)
  },
  xd = function(e, n) {
    var r = e._gsap || ls(e),
      i = e.style,
      s = __(e),
      o, a, l, u;
    return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Na : s) : (s === Na && !e.offsetParent && e !== Zs && !r.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (u = 1, a = e.nextElementSibling, Zs.appendChild(e)), s = __(e), l ? i.display = l : ys(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Zs.removeChild(e))), n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
  },
  fh = function(e, n, r, i, s, o) {
    var a = e._gsap,
      l = s || xd(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      f = a.xOffset || 0,
      d = a.yOffset || 0,
      h = l[0],
      g = l[1],
      p = l[2],
      b = l[3],
      y = l[4],
      D = l[5],
      _ = n.split(" "),
      m = parseFloat(_[0]) || 0,
      v = parseFloat(_[1]) || 0,
      C, E, R, A;
    r ? l !== Na && (E = h * b - g * p) && (R = m * (b / E) + v * (-p / E) + (p * D - b * y) / E, A = m * (-g / E) + v * (h / E) - (h * D - g * y) / E, m = R, v = A) : (C = GD(e), m = C.x + (~_[0].indexOf("%") ? m / 100 * C.width : m), v = C.y + (~(_[1] || _[0]).indexOf("%") ? v / 100 * C.height : v)), i || i !== !1 && a.smooth ? (y = m - u, D = v - c, a.xOffset = f + (y * h + D * p) - y, a.yOffset = d + (y * g + D * b) - D) : a.xOffset = a.yOffset = 0, a.xOrigin = m, a.yOrigin = v, a.smooth = !!i, a.origin = n, a.originIsAbsolute = !!r, e.style[vn] = "0px 0px", o && (Di(o, a, "xOrigin", u, m), Di(o, a, "yOrigin", c, v), Di(o, a, "xOffset", f, a.xOffset), Di(o, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", m + " " + v)
  },
  $a = function(e, n) {
    var r = e._gsap || new FD(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = Pr(e, vn) || "0",
      c, f, d, h, g, p, b, y, D, _, m, v, C, E, R, A, P, V, O, Y, q, Q, U, W, z, H, F, se, ge, Te, fe, le;
    return c = f = d = p = b = y = D = _ = m = 0, h = g = 1, r.svg = !!(e.getCTM && XD(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[rt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[rt] !== "none" ? l[rt] : "")), i.scale = i.rotate = i.translate = "none"), E = xd(e, r.svg), r.svg && (r.uncache ? (z = e.getBBox(), u = r.xOrigin - z.x + "px " + (r.yOrigin - z.y) + "px", W = "") : W = !n && e.getAttribute("data-svg-origin"), fh(e, W || u, !!W || r.originIsAbsolute, r.smooth !== !1, E)), v = r.xOrigin || 0, C = r.yOrigin || 0, E !== Na && (V = E[0], O = E[1], Y = E[2], q = E[3], c = Q = E[4], f = U = E[5], E.length === 6 ? (h = Math.sqrt(V * V + O * O), g = Math.sqrt(q * q + Y * Y), p = V || O ? As(O, V) * Qi : 0, D = Y || q ? As(Y, q) * Qi + p : 0, D && (g *= Math.abs(Math.cos(D * eo))), r.svg && (c -= v - (v * V + C * Y), f -= C - (v * O + C * q))) : (le = E[6], Te = E[7], F = E[8], se = E[9], ge = E[10], fe = E[11], c = E[12], f = E[13], d = E[14], R = As(le, ge), b = R * Qi, R && (A = Math.cos(-R), P = Math.sin(-R), W = Q * A + F * P, z = U * A + se * P, H = le * A + ge * P, F = Q * -P + F * A, se = U * -P + se * A, ge = le * -P + ge * A, fe = Te * -P + fe * A, Q = W, U = z, le = H), R = As(-Y, ge), y = R * Qi, R && (A = Math.cos(-R), P = Math.sin(-R), W = V * A - F * P, z = O * A - se * P, H = Y * A - ge * P, fe = q * P + fe * A, V = W, O = z, Y = H), R = As(O, V), p = R * Qi, R && (A = Math.cos(R), P = Math.sin(R), W = V * A + O * P, z = Q * A + U * P, O = O * A - V * P, U = U * A - Q * P, V = W, Q = z), b && Math.abs(b) + Math.abs(p) > 359.9 && (b = p = 0, y = 180 - y), h = ut(Math.sqrt(V * V + O * O + Y * Y)), g = ut(Math.sqrt(U * U + le * le)), R = As(Q, U), D = Math.abs(R) > 2e-4 ? R * Qi : 0, m = fe ? 1 / (fe < 0 ? -fe : fe) : 0), r.svg && (W = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !JD(Pr(e, rt)), W && e.setAttribute("transform", W))), Math.abs(D) > 90 && Math.abs(D) < 270 && (s ? (h *= -1, D += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, D += D <= 0 ? 180 : -180)), n = n || r.uncache, r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = d + o, r.scaleX = ut(h), r.scaleY = ut(g), r.rotation = ut(p) + a, r.rotationX = ut(b) + a, r.rotationY = ut(y) + a, r.skewX = D + a, r.skewY = _ + a, r.transformPerspective = m + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) && (i[vn] = Cu(u)), r.xOffset = r.yOffset = 0, r.force3D = On.force3D, r.renderTransform = r.svg ? oR : zD ? QD : sR, r.uncache = 0, r
  },
  Cu = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
  },
  Yc = function(e, n, r) {
    var i = jt(n);
    return ut(parseFloat(n) + parseFloat(Pi(e, "x", r + "px", i))) + i
  },
  sR = function(e, n) {
    n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, QD(e, n)
  },
  Xi = "0deg",
  Mo = "0px",
  qi = ") ",
  QD = function(e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.z,
      u = r.rotation,
      c = r.rotationY,
      f = r.rotationX,
      d = r.skewX,
      h = r.skewY,
      g = r.scaleX,
      p = r.scaleY,
      b = r.transformPerspective,
      y = r.force3D,
      D = r.target,
      _ = r.zOrigin,
      m = "",
      v = y === "auto" && e && e !== 1 || y === !0;
    if (_ && (f !== Xi || c !== Xi)) {
      var C = parseFloat(c) * eo,
        E = Math.sin(C),
        R = Math.cos(C),
        A;
      C = parseFloat(f) * eo, A = Math.cos(C), o = Yc(D, o, E * A * -_), a = Yc(D, a, -Math.sin(C) * -_), l = Yc(D, l, R * A * -_ + _)
    }
    b !== Mo && (m += "perspective(" + b + qi), (i || s) && (m += "translate(" + i + "%, " + s + "%) "), (v || o !== Mo || a !== Mo || l !== Mo) && (m += l !== Mo || v ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + qi), u !== Xi && (m += "rotate(" + u + qi), c !== Xi && (m += "rotateY(" + c + qi), f !== Xi && (m += "rotateX(" + f + qi), (d !== Xi || h !== Xi) && (m += "skew(" + d + ", " + h + qi), (g !== 1 || p !== 1) && (m += "scale(" + g + ", " + p + qi), D.style[rt] = m || "translate(0, 0)"
  },
  oR = function(e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.rotation,
      u = r.skewX,
      c = r.skewY,
      f = r.scaleX,
      d = r.scaleY,
      h = r.target,
      g = r.xOrigin,
      p = r.yOrigin,
      b = r.xOffset,
      y = r.yOffset,
      D = r.forceCSS,
      _ = parseFloat(o),
      m = parseFloat(a),
      v, C, E, R, A;
    l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= eo, u *= eo, v = Math.cos(l) * f, C = Math.sin(l) * f, E = Math.sin(l - u) * -d, R = Math.cos(l - u) * d, u && (c *= eo, A = Math.tan(u - c), A = Math.sqrt(1 + A * A), E *= A, R *= A, c && (A = Math.tan(c), A = Math.sqrt(1 + A * A), v *= A, C *= A)), v = ut(v), C = ut(C), E = ut(E), R = ut(R)) : (v = f, R = d, C = E = 0), (_ && !~(o + "").indexOf("px") || m && !~(a + "").indexOf("px")) && (_ = Pi(h, "x", o, "px"), m = Pi(h, "y", a, "px")), (g || p || b || y) && (_ = ut(_ + g - (g * v + p * E) + b), m = ut(m + p - (g * C + p * R) + y)), (i || s) && (A = h.getBBox(), _ = ut(_ + i / 100 * A.width), m = ut(m + s / 100 * A.height)), A = "matrix(" + v + "," + C + "," + E + "," + R + "," + _ + "," + m + ")", h.setAttribute("transform", A), D && (h.style[rt] = A)
  },
  aR = function(e, n, r, i, s) {
    var o = 360,
      a = Rt(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? Qi : 1),
      u = l - i,
      c = i + u + "deg",
      f, d;
    return a && (f = s.split("_")[1], f === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), f === "cw" && u < 0 ? u = (u + o * f_) % o - ~~(u / o) * o : f === "ccw" && u > 0 && (u = (u - o * f_) % o - ~~(u / o) * o)), e._pt = d = new bn(e._pt, n, r, i, u, WP), d.e = c, d.u = "deg", e._props.push(r), d
  },
  m_ = function(e, n) {
    for (var r in n) e[r] = n[r];
    return e
  },
  lR = function(e, n, r) {
    var i = m_({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a, l, u, c, f, d, h, g;
    i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[rt] = n, a = $a(r, 1), ys(r, rt), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[rt], o[rt] = n, a = $a(r, 1), o[rt] = u);
    for (l in ri) u = i[l], c = a[l], u !== c && s.indexOf(l) < 0 && (h = jt(u), g = jt(c), f = h !== g ? Pi(r, l, u, g) : parseFloat(u), d = parseFloat(c), e._pt = new bn(e._pt, a, l, f, d - f, lh), e._pt.u = g || 0, e._props.push(l));
    m_(a, i)
  };
Dn("padding,margin,Width,Radius", function(t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(a) {
      return e < 2 ? t + a : "border" + a + t
    });
  Eu[e > 1 ? "border" + t : t] = function(a, l, u, c, f) {
    var d, h;
    if (arguments.length < 4) return d = o.map(function(g) {
      return jr(a, g, u)
    }), h = d.join(" "), h.split(d[0]).length === 5 ? d[0] : h;
    d = (c + "").split(" "), h = {}, o.forEach(function(g, p) {
      return h[g] = d[p] = d[p] || d[(p - 1) / 2 | 0]
    }), a.init(l, h, f)
  }
});
var ZD = {
  name: "css",
  register: ch,
  targetTest: function(e) {
    return e.style && e.nodeType
  },
  init: function(e, n, r, i, s) {
    var o = this._props,
      a = e.style,
      l = r.vars.startAt,
      u, c, f, d, h, g, p, b, y, D, _, m, v, C, E, R;
    wd || ch(), this.styles = this.styles || YD(e), R = this.styles.props, this.tween = r;
    for (p in n)
      if (p !== "autoRound" && (c = n[p], !(kn[p] && MD(p, n, r, i, e, s)))) {
        if (h = typeof c, g = Eu[p], h === "function" && (c = c.call(r, i, e, s), h = typeof c), h === "string" && ~c.indexOf("random(") && (c = Oa(c)), g) g(this, e, p, c, r) && (E = 1);
        else if (p.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(p) + "").trim(), c += "", wi.lastIndex = 0, wi.test(u) || (b = jt(u), y = jt(c)), y ? b !== y && (u = Pi(e, p, u, y) + y) : b && (c += b), this.add(a, "setProperty", u, c, i, s, 0, 0, p), o.push(p), R.push(p, 0, a[p]);
        else if (h !== "undefined") {
          if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, i, e, s) : l[p], Rt(u) && ~u.indexOf("random(") && (u = Oa(u)), jt(u + "") || u === "auto" || (u += On.units[p] || jt(jr(e, p)) || ""), (u + "").charAt(1) === "=" && (u = jr(e, p))) : u = jr(e, p), d = parseFloat(u), D = h === "string" && c.charAt(1) === "=" && c.substr(0, 2), D && (c = c.substr(2)), f = parseFloat(c), p in Tr && (p === "autoAlpha" && (d === 1 && jr(e, "visibility") === "hidden" && f && (d = 0), R.push("visibility", 0, a.visibility), Di(this, a, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), p !== "scale" && p !== "transform" && (p = Tr[p], ~p.indexOf(",") && (p = p.split(",")[0]))), _ = p in ri, _) {
            if (this.styles.save(p), m || (v = e._gsap, v.renderTransform && !n.parseTransform || $a(e, n.parseTransform), C = n.smoothOrigin !== !1 && v.smooth, m = this._pt = new bn(this._pt, a, rt, 0, 1, v.renderTransform, v, 0, -1), m.dep = 1), p === "scale") this._pt = new bn(this._pt, v, "scaleY", v.scaleY, (D ? Qs(v.scaleY, D + f) : f) - v.scaleY || 0, lh), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              R.push(vn, 0, a[vn]), c = rR(c), v.svg ? fh(e, c, 0, C, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0, y !== v.zOrigin && Di(this, v, "zOrigin", v.zOrigin, y), Di(this, a, p, Cu(u), Cu(c)));
              continue
            } else if (p === "svgOrigin") {
              fh(e, c, 1, C, 0, this);
              continue
            } else if (p in qD) {
              aR(this, v, p, d, D ? Qs(d, D + c) : c);
              continue
            } else if (p === "smoothOrigin") {
              Di(this, v, "smooth", v.smooth, c);
              continue
            } else if (p === "force3D") {
              v[p] = c;
              continue
            } else if (p === "transform") {
              lR(this, c, e);
              continue
            }
          } else p in a || (p = vo(p) || p);
          if (_ || (f || f === 0) && (d || d === 0) && !jP.test(c) && p in a) b = (u + "").substr((d + "").length), f || (f = 0), y = jt(c) || (p in On.units ? On.units[p] : b), b !== y && (d = Pi(e, p, u, y)), this._pt = new bn(this._pt, _ ? v : a, p, d, (D ? Qs(d, D + f) : f) - d, !_ && (y === "px" || p === "zIndex") && n.autoRound !== !1 ? YP : lh), this._pt.u = y || 0, b !== y && y !== "%" && (this._pt.b = u, this._pt.r = KP);
          else if (p in a) nR.call(this, e, p, u, D ? D + c : c);
          else if (p in e) this.add(e, p, u || e[p], D ? D + c : c, i, s);
          else if (p !== "parseTransform") {
            gd(p, c);
            continue
          }
          _ || (p in a ? R.push(p, 0, a[p]) : R.push(p, 1, u || e[p])), o.push(p)
        }
      } E && UD(this)
  },
  render: function(e, n) {
    if (n.tween._time || !Td())
      for (var r = n._pt; r;) r.r(e, r.d), r = r._next;
    else n.styles.revert()
  },
  get: jr,
  aliases: Tr,
  getSetter: function(e, n, r) {
    var i = Tr[n];
    return i && i.indexOf(",") < 0 && (n = i), n in ri && n !== vn && (e._gsap.x || jr(e, "x")) ? r && c_ === r ? n === "scale" ? qP : XP : (c_ = r || {}) && (n === "scale" ? JP : QP) : e.style && !hd(e.style[n]) ? zP : ~n.indexOf("-") ? GP : Ed(e, n)
  },
  core: {
    _removeProperty: ys,
    _getMatrix: xd
  }
};
En.utils.checkPrefix = vo;
En.core.getStyleSaver = YD;
(function(t, e, n, r) {
  var i = Dn(t + "," + e + "," + n, function(s) {
    ri[s] = 1
  });
  Dn(e, function(s) {
    On.units[s] = "deg", qD[s] = 1
  }), Tr[i[13]] = t + "," + e, Dn(r, function(s) {
    var o = s.split(":");
    Tr[o[1]] = i[o[0]]
  })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  On.units[t] = "px"
});
En.registerPlugin(ZD);
var wu = En.registerPlugin(ZD) || En;
wu.core.Tween;
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var uR = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  cR = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
  fR = Math.PI / 180,
  gl = Math.sin,
  _l = Math.cos,
  ua = Math.abs,
  No = Math.sqrt,
  hR = function(e) {
    return typeof e == "number"
  },
  y_ = 1e5,
  li = function(e) {
    return Math.round(e * y_) / y_ || 0
  };

function dR(t, e, n, r, i, s, o) {
  for (var a = t.length, l, u, c, f, d; --a > -1;)
    for (l = t[a], u = l.length, c = 0; c < u; c += 2) f = l[c], d = l[c + 1], l[c] = f * e + d * r + s, l[c + 1] = f * n + d * i + o;
  return t._dirty = 1, t
}

function pR(t, e, n, r, i, s, o, a, l) {
  if (!(t === a && e === l)) {
    n = ua(n), r = ua(r);
    var u = i % 360 * fR,
      c = _l(u),
      f = gl(u),
      d = Math.PI,
      h = d * 2,
      g = (t - a) / 2,
      p = (e - l) / 2,
      b = c * g + f * p,
      y = -f * g + c * p,
      D = b * b,
      _ = y * y,
      m = D / (n * n) + _ / (r * r);
    m > 1 && (n = No(m) * n, r = No(m) * r);
    var v = n * n,
      C = r * r,
      E = (v * C - v * _ - C * D) / (v * _ + C * D);
    E < 0 && (E = 0);
    var R = (s === o ? -1 : 1) * No(E),
      A = R * (n * y / r),
      P = R * -(r * b / n),
      V = (t + a) / 2,
      O = (e + l) / 2,
      Y = V + (c * A - f * P),
      q = O + (f * A + c * P),
      Q = (b - A) / n,
      U = (y - P) / r,
      W = (-b - A) / n,
      z = (-y - P) / r,
      H = Q * Q + U * U,
      F = (U < 0 ? -1 : 1) * Math.acos(Q / No(H)),
      se = (Q * z - U * W < 0 ? -1 : 1) * Math.acos((Q * W + U * z) / No(H * (W * W + z * z)));
    isNaN(se) && (se = d), !o && se > 0 ? se -= h : o && se < 0 && (se += h), F %= h, se %= h;
    var ge = Math.ceil(ua(se) / (h / 4)),
      Te = [],
      fe = se / ge,
      le = 4 / 3 * gl(fe / 2) / (1 + _l(fe / 2)),
      ve = c * n,
      B = f * n,
      J = f * -r,
      X = c * r,
      Z;
    for (Z = 0; Z < ge; Z++) i = F + Z * fe, b = _l(i), y = gl(i), Q = _l(i += fe), U = gl(i), Te.push(b - le * y, y + le * b, Q + le * U, U - le * Q, Q, U);
    for (Z = 0; Z < Te.length; Z += 2) b = Te[Z], y = Te[Z + 1], Te[Z] = b * ve + y * J + Y, Te[Z + 1] = b * B + y * X + q;
    return Te[Z - 2] = a, Te[Z - 1] = l, Te
  }
}

function gR(t) {
  var e = (t + "").replace(cR, function(A) {
      var P = +A;
      return P < 1e-4 && P > -1e-4 ? 0 : P
    }).match(uR) || [],
    n = [],
    r = 0,
    i = 0,
    s = 2 / 3,
    o = e.length,
    a = 0,
    l = "ERROR: malformed path: " + t,
    u, c, f, d, h, g, p, b, y, D, _, m, v, C, E, R = function(P, V, O, Y) {
      D = (O - P) / 3, _ = (Y - V) / 3, p.push(P + D, V + _, O - D, Y - _, O, Y)
    };
  if (!t || !isNaN(e[0]) || isNaN(e[1])) return console.log(l), n;
  for (u = 0; u < o; u++)
    if (v = h, isNaN(e[u]) ? (h = e[u].toUpperCase(), g = h !== e[u]) : u--, f = +e[u + 1], d = +e[u + 2], g && (f += r, d += i), u || (b = f, y = d), h === "M") p && (p.length < 8 ? n.length -= 1 : a += p.length), r = b = f, i = y = d, p = [f, d], n.push(p), u += 2, h = "L";
    else if (h === "C") p || (p = [0, 0]), g || (r = i = 0), p.push(f, d, r + e[u + 3] * 1, i + e[u + 4] * 1, r += e[u + 5] * 1, i += e[u + 6] * 1), u += 6;
  else if (h === "S") D = r, _ = i, (v === "C" || v === "S") && (D += r - p[p.length - 4], _ += i - p[p.length - 3]), g || (r = i = 0), p.push(D, _, f, d, r += e[u + 3] * 1, i += e[u + 4] * 1), u += 4;
  else if (h === "Q") D = r + (f - r) * s, _ = i + (d - i) * s, g || (r = i = 0), r += e[u + 3] * 1, i += e[u + 4] * 1, p.push(D, _, r + (f - r) * s, i + (d - i) * s, r, i), u += 4;
  else if (h === "T") D = r - p[p.length - 4], _ = i - p[p.length - 3], p.push(r + D, i + _, f + (r + D * 1.5 - f) * s, d + (i + _ * 1.5 - d) * s, r = f, i = d), u += 2;
  else if (h === "H") R(r, i, r = f, i), u += 1;
  else if (h === "V") R(r, i, r, i = f + (g ? i - r : 0)), u += 1;
  else if (h === "L" || h === "Z") h === "Z" && (f = b, d = y, p.closed = !0), (h === "L" || ua(r - f) > .5 || ua(i - d) > .5) && (R(r, i, f, d), h === "L" && (u += 2)), r = f, i = d;
  else if (h === "A") {
    if (C = e[u + 4], E = e[u + 5], D = e[u + 6], _ = e[u + 7], c = 7, C.length > 1 && (C.length < 3 ? (_ = D, D = E, c--) : (_ = E, D = C.substr(2), c -= 2), E = C.charAt(1), C = C.charAt(0)), m = pR(r, i, +e[u + 1], +e[u + 2], +e[u + 3], +C, +E, (g ? r : 0) + D * 1, (g ? i : 0) + _ * 1), u += c, m)
      for (c = 0; c < m.length; c++) p.push(m[c]);
    r = p[p.length - 2], i = p[p.length - 1]
  } else console.log(l);
  return u = p.length, u < 6 ? (n.pop(), u = 0) : p[0] === p[u - 2] && p[1] === p[u - 1] && (p.closed = !0), n.totalPoints = a + u, n
}

function _R(t) {
  hR(t[0]) && (t = [t]);
  var e = "",
    n = t.length,
    r, i, s, o;
  for (i = 0; i < n; i++) {
    for (o = t[i], e += "M" + li(o[0]) + "," + li(o[1]) + " C", r = o.length, s = 2; s < r; s++) e += li(o[s++]) + "," + li(o[s++]) + " " + li(o[s++]) + "," + li(o[s++]) + " " + li(o[s++]) + "," + li(o[s]) + " ";
    o.closed && (e += "z")
  }
  return e
}
/*!
 * CustomEase 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var pn, eb, tb = function() {
    return pn || typeof window < "u" && (pn = window.gsap) && pn.registerPlugin && pn
  },
  D_ = function() {
    pn = tb(), pn ? (pn.registerEase("_CE", _i.create), eb = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
  },
  mR = 1e20,
  ml = function(e) {
    return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
  },
  yR = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  DR = /[cLlsSaAhHvVtTqQ]/g,
  bR = function(e) {
    var n = e.length,
      r = mR,
      i;
    for (i = 1; i < n; i += 6) + e[i] < r && (r = +e[i]);
    return r
  },
  vR = function(e, n, r) {
    !r && r !== 0 && (r = Math.max(+e[e.length - 1], +e[1]));
    var i = +e[0] * -1,
      s = -r,
      o = e.length,
      a = 1 / (+e[o - 2] + i),
      l = -n || (Math.abs(+e[o - 1] - +e[1]) < .01 * (+e[o - 2] - +e[0]) ? bR(e) + s : +e[o - 1] + s),
      u;
    for (l ? l = 1 / l : l = -a, u = 0; u < o; u += 2) e[u] = (+e[u] + i) * a, e[u + 1] = (+e[u + 1] + s) * l
  },
  ER = function t(e, n, r, i, s, o, a, l, u, c, f) {
    var d = (e + r) / 2,
      h = (n + i) / 2,
      g = (r + s) / 2,
      p = (i + o) / 2,
      b = (s + a) / 2,
      y = (o + l) / 2,
      D = (d + g) / 2,
      _ = (h + p) / 2,
      m = (g + b) / 2,
      v = (p + y) / 2,
      C = (D + m) / 2,
      E = (_ + v) / 2,
      R = a - e,
      A = l - n,
      P = Math.abs((r - a) * A - (i - l) * R),
      V = Math.abs((s - a) * A - (o - l) * R),
      O;
    return c || (c = [{
      x: e,
      y: n
    }, {
      x: a,
      y: l
    }], f = 1), c.splice(f || c.length - 1, 0, {
      x: C,
      y: E
    }), (P + V) * (P + V) > u * (R * R + A * A) && (O = c.length, t(e, n, d, h, D, _, C, E, u, c, f), t(C, E, m, v, b, y, a, l, u, c, f + 1 + (c.length - O))), c
  },
  _i = function() {
    function t(n, r, i) {
      eb || D_(), this.id = n, this.setData(r, i)
    }
    var e = t.prototype;
    return e.setData = function(r, i) {
      i = i || {}, r = r || "0,0,1,1";
      var s = r.match(yR),
        o = 1,
        a = [],
        l = [],
        u = i.precision || 1,
        c = u <= 1,
        f, d, h, g, p, b, y, D, _;
      if (this.data = r, (DR.test(r) || ~r.indexOf("M") && r.indexOf("C") < 0) && (s = gR(r)[0]), f = s.length, f === 4) s.unshift(0, 0), s.push(1, 1), f = 8;
      else if ((f - 2) % 6) throw "Invalid CustomEase";
      for ((+s[0] != 0 || +s[f - 2] != 1) && vR(s, i.height, i.originY), this.segment = s, g = 2; g < f; g += 6) d = {
        x: +s[g - 2],
        y: +s[g - 1]
      }, h = {
        x: +s[g + 4],
        y: +s[g + 5]
      }, a.push(d, h), ER(d.x, d.y, +s[g], +s[g + 1], +s[g + 2], +s[g + 3], h.x, h.y, 1 / (u * 2e5), a, a.length - 1);
      for (f = a.length, g = 0; g < f; g++) y = a[g], D = a[g - 1] || y, (y.x > D.x || D.y !== y.y && D.x === y.x || y === D) && y.x <= 1 ? (D.cx = y.x - D.x, D.cy = y.y - D.y, D.n = y, D.nx = y.x, c && g > 1 && Math.abs(D.cy / D.cx - a[g - 2].cy / a[g - 2].cx) > 2 && (c = 0), D.cx < o && (D.cx ? o = D.cx : (D.cx = .001, g === f - 1 && (D.x -= .001, o = Math.min(o, .001), c = 0)))) : (a.splice(g--, 1), f--);
      if (f = 1 / o + 1 | 0, p = 1 / f, b = 0, y = a[0], c) {
        for (g = 0; g < f; g++) _ = g * p, y.nx < _ && (y = a[++b]), d = y.y + (_ - y.x) / y.cx * y.cy, l[g] = {
          x: _,
          cx: p,
          y: d,
          cy: 0,
          nx: 9
        }, g && (l[g - 1].cy = d - l[g - 1].y);
        l[f - 1].cy = a[a.length - 1].y - d
      } else {
        for (g = 0; g < f; g++) y.nx < g * p && (y = a[++b]), l[g] = y;
        b < a.length - 1 && (l[g - 1] = a[a.length - 2])
      }
      return this.ease = function(m) {
        var v = l[m * f | 0] || l[f - 1];
        return v.nx < m && (v = v.n), v.y + (m - v.x) / v.cx * v.cy
      }, this.ease.custom = this, this.id && pn && pn.registerEase(this.id, this.ease), this
    }, e.getSVGData = function(r) {
      return t.getSVGData(this, r)
    }, t.create = function(r, i, s) {
      return new t(r, i, s).ease
    }, t.register = function(r) {
      pn = r, D_()
    }, t.get = function(r) {
      return pn.parseEase(r)
    }, t.getSVGData = function(r, i) {
      i = i || {};
      var s = i.width || 100,
        o = i.height || 100,
        a = i.x || 0,
        l = (i.y || 0) + o,
        u = pn.utils.toArray(i.path)[0],
        c, f, d, h, g, p, b, y, D, _;
      if (i.invert && (o = -o, l = 0), typeof r == "string" && (r = pn.parseEase(r)), r.custom && (r = r.custom), r instanceof t) c = _R(dR([r.segment], s, 0, 0, -o, a, l));
      else {
        for (c = [a, l], b = Math.max(5, (i.precision || 1) * 200), h = 1 / b, b += 2, y = 5 / b, D = ml(a + h * s), _ = ml(l + r(h) * -o), f = (_ - l) / (D - a), d = 2; d < b; d++) g = ml(a + d * h * s), p = ml(l + r(d * h) * -o), (Math.abs((p - _) / (g - D) - f) > y || d === b - 1) && (c.push(D, _), f = (p - _) / (g - D)), D = g, _ = p;
        c = "M" + c.join(",")
      }
      return u && u.setAttribute("d", c), c
    }, t
  }();
tb() && pn.registerPlugin(_i);
_i.version = "3.12.5";

function CR(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
  }
}

function wR(t, e, n) {
  return CR(t.prototype, e), t
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ft, Hl, Rn, bi, vi, to, nb, Zi, ca, rb, Qr, tr, ib, sb = function() {
    return Ft || typeof window < "u" && (Ft = window.gsap) && Ft.registerPlugin && Ft
  },
  ob = 1,
  Vs = [],
  Ce = [],
  Rr = [],
  fa = Date.now,
  hh = function(e, n) {
    return n
  },
  TR = function() {
    var e = ca.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, Ce), i.push.apply(i, Rr), Ce = r, Rr = i, hh = function(o, a) {
      return n[o](a)
    }
  },
  Ti = function(e, n) {
    return ~Rr.indexOf(e) && Rr[Rr.indexOf(e) + 1][n]
  },
  ha = function(e) {
    return !!~rb.indexOf(e)
  },
  Xt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
      passive: i !== !1,
      capture: !!s
    })
  },
  zt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
  },
  yl = "scrollLeft",
  Dl = "scrollTop",
  dh = function() {
    return Qr && Qr.isPressed || Ce.cache++
  },
  Tu = function(e, n) {
    var r = function i(s) {
      if (s || s === 0) {
        ob && (Rn.history.scrollRestoration = "manual");
        var o = Qr && Qr.isPressed;
        s = i.v = Math.round(s) || (Qr && Qr.iOS ? 1 : 0), e(s), i.cacheID = Ce.cache, o && hh("ss", s)
      } else(n || Ce.cache !== i.cacheID || hh("ref")) && (i.cacheID = Ce.cache, i.v = e());
      return i.v + i.offset
    };
    return r.offset = 0, e && r
  },
  sn = {
    s: yl,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Tu(function(t) {
      return arguments.length ? Rn.scrollTo(t, Ct.sc()) : Rn.pageXOffset || bi[yl] || vi[yl] || to[yl] || 0
    })
  },
  Ct = {
    s: Dl,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: sn,
    sc: Tu(function(t) {
      return arguments.length ? Rn.scrollTo(sn.sc(), t) : Rn.pageYOffset || bi[Dl] || vi[Dl] || to[Dl] || 0
    })
  },
  hn = function(e, n) {
    return (n && n._ctx && n._ctx.selector || Ft.utils.toArray)(e)[0] || (typeof e == "string" && Ft.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
  },
  Ri = function(e, n) {
    var r = n.s,
      i = n.sc;
    ha(e) && (e = bi.scrollingElement || vi);
    var s = Ce.indexOf(e),
      o = i === Ct.sc ? 1 : 2;
    !~s && (s = Ce.push(e) - 1), Ce[s + o] || Xt(e, "scroll", dh);
    var a = Ce[s + o],
      l = a || (Ce[s + o] = Tu(Ti(e, r), !0) || (ha(e) ? i : Tu(function(u) {
        return arguments.length ? e[r] = u : e[r]
      })));
    return l.target = e, a || (l.smooth = Ft.getProperty(e, "scrollBehavior") === "smooth"), l
  },
  ph = function(e, n, r) {
    var i = e,
      s = e,
      o = fa(),
      a = o,
      l = n || 50,
      u = Math.max(500, l * 3),
      c = function(g, p) {
        var b = fa();
        p || b - o > l ? (s = i, i = g, a = o, o = b) : r ? i += g : i = s + (g - s) / (b - a) * (o - a)
      },
      f = function() {
        s = i = r ? 0 : i, a = o = 0
      },
      d = function(g) {
        var p = a,
          b = s,
          y = fa();
        return (g || g === 0) && g !== i && c(g), o === a || y - a > u ? 0 : (i + (r ? b : -b)) / ((r ? y : o) - p) * 1e3
      };
    return {
      update: c,
      reset: f,
      getVelocity: d
    }
  },
  $o = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
  },
  b_ = function(e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
  },
  ab = function() {
    ca = Ft.core.globals().ScrollTrigger, ca && ca.core && TR()
  },
  lb = function(e) {
    return Ft = e || sb(), !Hl && Ft && typeof document < "u" && document.body && (Rn = window, bi = document, vi = bi.documentElement, to = bi.body, rb = [Rn, bi, vi, to], Ft.utils.clamp, ib = Ft.core.context || function() {}, Zi = "onpointerenter" in to ? "pointer" : "mouse", nb = ft.isTouch = Rn.matchMedia && Rn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Rn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, tr = ft.eventTypes = ("ontouchstart" in vi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in vi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return ob = 0
    }, 500), ab(), Hl = 1), Hl
  };
sn.op = Ct;
Ce.cache = 0;
var ft = function() {
  function t(n) {
    this.init(n)
  }
  var e = t.prototype;
  return e.init = function(r) {
    Hl || lb(Ft) || console.warn("Please gsap.registerPlugin(Observer)"), ca || ab();
    var i = r.tolerance,
      s = r.dragMinimum,
      o = r.type,
      a = r.target,
      l = r.lineHeight,
      u = r.debounce,
      c = r.preventDefault,
      f = r.onStop,
      d = r.onStopDelay,
      h = r.ignore,
      g = r.wheelSpeed,
      p = r.event,
      b = r.onDragStart,
      y = r.onDragEnd,
      D = r.onDrag,
      _ = r.onPress,
      m = r.onRelease,
      v = r.onRight,
      C = r.onLeft,
      E = r.onUp,
      R = r.onDown,
      A = r.onChangeX,
      P = r.onChangeY,
      V = r.onChange,
      O = r.onToggleX,
      Y = r.onToggleY,
      q = r.onHover,
      Q = r.onHoverEnd,
      U = r.onMove,
      W = r.ignoreCheck,
      z = r.isNormalizer,
      H = r.onGestureStart,
      F = r.onGestureEnd,
      se = r.onWheel,
      ge = r.onEnable,
      Te = r.onDisable,
      fe = r.onClick,
      le = r.scrollSpeed,
      ve = r.capture,
      B = r.allowClicks,
      J = r.lockAxis,
      X = r.onLockAxis;
    this.target = a = hn(a) || vi, this.vars = r, h && (h = Ft.utils.toArray(h)), i = i || 1e-9, s = s || 0, g = g || 1, le = le || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Rn.getComputedStyle(to).lineHeight) || 22);
    var Z, ue, De, T, x, N, K, k = this,
      w = 0,
      S = 0,
      M = r.passive || !c,
      I = Ri(a, sn),
      j = Ri(a, Ct),
      G = I(),
      L = j(),
      $ = ~o.indexOf("touch") && !~o.indexOf("pointer") && tr[0] === "pointerdown",
      ee = ha(a),
      te = a.ownerDocument || bi,
      pe = [0, 0, 0],
      de = [0, 0, 0],
      Ne = 0,
      qe = function() {
        return Ne = fa()
      },
      Le = function(ce, Fe) {
        return (k.event = ce) && h && ~h.indexOf(ce.target) || Fe && $ && ce.pointerType !== "touch" || W && W(ce, Fe)
      },
      Tt = function() {
        k._vx.reset(), k._vy.reset(), ue.pause(), f && f(k)
      },
      cn = function() {
        var ce = k.deltaX = b_(pe),
          Fe = k.deltaY = b_(de),
          ne = Math.abs(ce) >= i,
          ye = Math.abs(Fe) >= i;
        V && (ne || ye) && V(k, ce, Fe, pe, de), ne && (v && k.deltaX > 0 && v(k), C && k.deltaX < 0 && C(k), A && A(k), O && k.deltaX < 0 != w < 0 && O(k), w = k.deltaX, pe[0] = pe[1] = pe[2] = 0), ye && (R && k.deltaY > 0 && R(k), E && k.deltaY < 0 && E(k), P && P(k), Y && k.deltaY < 0 != S < 0 && Y(k), S = k.deltaY, de[0] = de[1] = de[2] = 0), (T || De) && (U && U(k), De && (D(k), De = !1), T = !1), N && !(N = !1) && X && X(k), x && (se(k), x = !1), Z = 0
      },
      Mr = function(ce, Fe, ne) {
        pe[ne] += ce, de[ne] += Fe, k._vx.update(ce), k._vy.update(Fe), u ? Z || (Z = requestAnimationFrame(cn)) : cn()
      },
      dt = function(ce, Fe) {
        J && !K && (k.axis = K = Math.abs(ce) > Math.abs(Fe) ? "x" : "y", N = !0), K !== "y" && (pe[2] += ce, k._vx.update(ce, !0)), K !== "x" && (de[2] += Fe, k._vy.update(Fe, !0)), u ? Z || (Z = requestAnimationFrame(cn)) : cn()
      },
      Dt = function(ce) {
        if (!Le(ce, 1)) {
          ce = $o(ce, c);
          var Fe = ce.clientX,
            ne = ce.clientY,
            ye = Fe - k.x,
            ae = ne - k.y,
            _e = k.isDragging;
          k.x = Fe, k.y = ne, (_e || Math.abs(k.startX - Fe) >= s || Math.abs(k.startY - ne) >= s) && (D && (De = !0), _e || (k.isDragging = !0), dt(ye, ae), _e || b && b(k))
        }
      },
      hr = k.onPress = function(me) {
        Le(me, 1) || me && me.button || (k.axis = K = null, ue.pause(), k.isPressed = !0, me = $o(me), w = S = 0, k.startX = k.x = me.clientX, k.startY = k.y = me.clientY, k._vx.reset(), k._vy.reset(), Xt(z ? a : te, tr[1], Dt, M, !0), k.deltaX = k.deltaY = 0, _ && _(k))
      },
      Ee = k.onRelease = function(me) {
        if (!Le(me, 1)) {
          zt(z ? a : te, tr[1], Dt, !0);
          var ce = !isNaN(k.y - k.startY),
            Fe = k.isDragging,
            ne = Fe && (Math.abs(k.x - k.startX) > 3 || Math.abs(k.y - k.startY) > 3),
            ye = $o(me);
          !ne && ce && (k._vx.reset(), k._vy.reset(), c && B && Ft.delayedCall(.08, function() {
            if (fa() - Ne > 300 && !me.defaultPrevented) {
              if (me.target.click) me.target.click();
              else if (te.createEvent) {
                var ae = te.createEvent("MouseEvents");
                ae.initMouseEvent("click", !0, !0, Rn, 1, ye.screenX, ye.screenY, ye.clientX, ye.clientY, !1, !1, !1, !1, 0, null), me.target.dispatchEvent(ae)
              }
            }
          })), k.isDragging = k.isGesturing = k.isPressed = !1, f && Fe && !z && ue.restart(!0), y && Fe && y(k), m && m(k, ne)
        }
      },
      Vi = function(ce) {
        return ce.touches && ce.touches.length > 1 && (k.isGesturing = !0) && H(ce, k.isDragging)
      },
      Jn = function() {
        return (k.isGesturing = !1) || F(k)
      },
      Qn = function(ce) {
        if (!Le(ce)) {
          var Fe = I(),
            ne = j();
          Mr((Fe - G) * le, (ne - L) * le, 1), G = Fe, L = ne, f && ue.restart(!0)
        }
      },
      Zn = function(ce) {
        if (!Le(ce)) {
          ce = $o(ce, c), se && (x = !0);
          var Fe = (ce.deltaMode === 1 ? l : ce.deltaMode === 2 ? Rn.innerHeight : 1) * g;
          Mr(ce.deltaX * Fe, ce.deltaY * Fe, 0), f && !z && ue.restart(!0)
        }
      },
      ji = function(ce) {
        if (!Le(ce)) {
          var Fe = ce.clientX,
            ne = ce.clientY,
            ye = Fe - k.x,
            ae = ne - k.y;
          k.x = Fe, k.y = ne, T = !0, f && ue.restart(!0), (ye || ae) && dt(ye, ae)
        }
      },
      ws = function(ce) {
        k.event = ce, q(k)
      },
      Nr = function(ce) {
        k.event = ce, Q(k)
      },
      xo = function(ce) {
        return Le(ce) || $o(ce, c) && fe(k)
      };
    ue = k._dc = Ft.delayedCall(d || .25, Tt).pause(), k.deltaX = k.deltaY = 0, k._vx = ph(0, 50, !0), k._vy = ph(0, 50, !0), k.scrollX = I, k.scrollY = j, k.isDragging = k.isGesturing = k.isPressed = !1, ib(this), k.enable = function(me) {
      return k.isEnabled || (Xt(ee ? te : a, "scroll", dh), o.indexOf("scroll") >= 0 && Xt(ee ? te : a, "scroll", Qn, M, ve), o.indexOf("wheel") >= 0 && Xt(a, "wheel", Zn, M, ve), (o.indexOf("touch") >= 0 && nb || o.indexOf("pointer") >= 0) && (Xt(a, tr[0], hr, M, ve), Xt(te, tr[2], Ee), Xt(te, tr[3], Ee), B && Xt(a, "click", qe, !0, !0), fe && Xt(a, "click", xo), H && Xt(te, "gesturestart", Vi), F && Xt(te, "gestureend", Jn), q && Xt(a, Zi + "enter", ws), Q && Xt(a, Zi + "leave", Nr), U && Xt(a, Zi + "move", ji)), k.isEnabled = !0, me && me.type && hr(me), ge && ge(k)), k
    }, k.disable = function() {
      k.isEnabled && (Vs.filter(function(me) {
        return me !== k && ha(me.target)
      }).length || zt(ee ? te : a, "scroll", dh), k.isPressed && (k._vx.reset(), k._vy.reset(), zt(z ? a : te, tr[1], Dt, !0)), zt(ee ? te : a, "scroll", Qn, ve), zt(a, "wheel", Zn, ve), zt(a, tr[0], hr, ve), zt(te, tr[2], Ee), zt(te, tr[3], Ee), zt(a, "click", qe, !0), zt(a, "click", xo), zt(te, "gesturestart", Vi), zt(te, "gestureend", Jn), zt(a, Zi + "enter", ws), zt(a, Zi + "leave", Nr), zt(a, Zi + "move", ji), k.isEnabled = k.isPressed = k.isDragging = !1, Te && Te(k))
    }, k.kill = k.revert = function() {
      k.disable();
      var me = Vs.indexOf(k);
      me >= 0 && Vs.splice(me, 1), Qr === k && (Qr = 0)
    }, Vs.push(k), z && ha(a) && (Qr = k), k.enable(p)
  }, wR(t, [{
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
ft.version = "3.12.5";
ft.create = function(t) {
  return new ft(t)
};
ft.register = lb;
ft.getAll = function() {
  return Vs.slice()
};
ft.getById = function(t) {
  return Vs.filter(function(e) {
    return e.vars.id === t
  })[0]
};
sb() && Ft.registerPlugin(ft);
/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var on, ub, Zr, Sr, Si, cb, fb, bl, hb = function() {
    return typeof window < "u"
  },
  db = function() {
    return on || hb() && (on = window.gsap) && on.registerPlugin && on
  },
  pb = function(e) {
    return typeof e == "string"
  },
  v_ = function(e) {
    return typeof e == "function"
  },
  Ia = function(e, n) {
    var r = n === "x" ? "Width" : "Height",
      i = "scroll" + r,
      s = "client" + r;
    return e === Zr || e === Sr || e === Si ? Math.max(Sr[i], Si[i]) - (Zr["inner" + r] || Sr[s] || Si[s]) : e[i] - e["offset" + r]
  },
  Ba = function(e, n) {
    var r = "scroll" + (n === "x" ? "Left" : "Top");
    return e === Zr && (e.pageXOffset != null ? r = "page" + n.toUpperCase() + "Offset" : e = Sr[r] != null ? Sr : Si),
      function() {
        return e[r]
      }
  },
  SR = function(e, n, r, i) {
    if (v_(e) && (e = e(n, r, i)), typeof e != "object") return pb(e) && e !== "max" && e.charAt(1) !== "=" ? {
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
    for (o in e) s[o] = o !== "onAutoKill" && v_(e[o]) ? e[o](n, r, i) : e[o];
    return s
  },
  gb = function(e, n) {
    if (e = cb(e)[0], !e || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
    var r = e.getBoundingClientRect(),
      i = !n || n === Zr || n === Si,
      s = i ? {
        top: Sr.clientTop - (Zr.pageYOffset || Sr.scrollTop || Si.scrollTop || 0),
        left: Sr.clientLeft - (Zr.pageXOffset || Sr.scrollLeft || Si.scrollLeft || 0)
      } : n.getBoundingClientRect(),
      o = {
        x: r.left - s.left,
        y: r.top - s.top
      };
    return !i && n && (o.x += Ba(n, "x")(), o.y += Ba(n, "y")()), o
  },
  E_ = function(e, n, r, i, s) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - s : pb(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + i - s : e === "max" ? Ia(n, r) - s : Math.min(Ia(n, r), gb(e, n)[r] - s)
  },
  C_ = function() {
    on = db(), hb() && on && typeof document < "u" && document.body && (Zr = window, Si = document.body, Sr = document.documentElement, cb = on.utils.toArray, on.config({
      autoKillThreshold: 7
    }), fb = on.config(), ub = 1)
  },
  za = {
    version: "3.12.5",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
      on = e, C_()
    },
    init: function(e, n, r, i, s) {
      ub || C_();
      var o = this,
        a = on.getProperty(e, "scrollSnapType");
      o.isWin = e === Zr, o.target = e, o.tween = r, n = SR(n, i, e, s), o.vars = n, o.autoKill = !!n.autoKill, o.getX = Ba(e, "x"), o.getY = Ba(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), bl || (bl = on.core.globals().ScrollTrigger), on.getProperty(e, "scrollBehavior") === "smooth" && on.set(e, {
        scrollBehavior: "auto"
      }), a && a !== "none" && (o.snap = 1, o.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), n.x != null ? (o.add(o, "x", o.x, E_(n.x, e, "x", o.x, n.offsetX || 0), i, s), o._props.push("scrollTo_x")) : o.skipX = 1, n.y != null ? (o.add(o, "y", o.y, E_(n.y, e, "y", o.y, n.offsetY || 0), i, s), o._props.push("scrollTo_y")) : o.skipY = 1
    },
    render: function(e, n) {
      for (var r = n._pt, i = n.target, s = n.tween, o = n.autoKill, a = n.xPrev, l = n.yPrev, u = n.isWin, c = n.snap, f = n.snapInline, d, h, g, p, b; r;) r.r(e, r.d), r = r._next;
      d = u || !n.skipX ? n.getX() : a, h = u || !n.skipY ? n.getY() : l, g = h - l, p = d - a, b = fb.autoKillThreshold, n.x < 0 && (n.x = 0), n.y < 0 && (n.y = 0), o && (!n.skipX && (p > b || p < -b) && d < Ia(i, "x") && (n.skipX = 1), !n.skipY && (g > b || g < -b) && h < Ia(i, "y") && (n.skipY = 1), n.skipX && n.skipY && (s.kill(), n.vars.onAutoKill && n.vars.onAutoKill.apply(s, n.vars.onAutoKillParams || []))), u ? Zr.scrollTo(n.skipX ? d : n.x, n.skipY ? h : n.y) : (n.skipY || (i.scrollTop = n.y), n.skipX || (i.scrollLeft = n.x)), c && (e === 1 || e === 0) && (h = i.scrollTop, d = i.scrollLeft, f ? i.style.scrollSnapType = f : i.style.removeProperty("scroll-snap-type"), i.scrollTop = h + 1, i.scrollLeft = d + 1, i.scrollTop = h, i.scrollLeft = d), n.xPrev = n.x, n.yPrev = n.y, bl && bl.update()
    },
    kill: function(e) {
      var n = e === "scrollTo",
        r = this._props.indexOf(e);
      return (n || e === "scrollTo_x") && (this.skipX = 1), (n || e === "scrollTo_y") && (this.skipY = 1), r > -1 && this._props.splice(r, 1), !this._props.length
    }
  };
za.max = Ia;
za.getOffset = gb;
za.buildGetter = Ba;
db() && on.registerPlugin(za);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ie, Ms, xe, et, ir, Ge, _b, Su, Ha, da, Wo, vl, Bt, uc, gh, Zt, w_, T_, Ns, mb, zc, yb, Jt, _h, Db, bb, ui, mh, kd, no, Ad, xu, yh, Gc, El = 1,
  Ht = Date.now,
  Xc = Ht(),
  Gn = 0,
  Ko = 0,
  S_ = function(e, n, r) {
    var i = Sn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
  },
  x_ = function(e, n) {
    return n && (!Sn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
  },
  xR = function t() {
    return Ko && requestAnimationFrame(t)
  },
  k_ = function() {
    return uc = 1
  },
  A_ = function() {
    return uc = 0
  },
  Er = function(e) {
    return e
  },
  Yo = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  vb = function() {
    return typeof window < "u"
  },
  Eb = function() {
    return ie || vb() && (ie = window.gsap) && ie.registerPlugin && ie
  },
  Ds = function(e) {
    return !!~_b.indexOf(e)
  },
  Cb = function(e) {
    return (e === "Height" ? Ad : xe["inner" + e]) || ir["client" + e] || Ge["client" + e]
  },
  wb = function(e) {
    return Ti(e, "getBoundingClientRect") || (Ds(e) ? function() {
      return Kl.width = xe.innerWidth, Kl.height = Ad, Kl
    } : function() {
      return zr(e)
    })
  },
  kR = function(e, n, r) {
    var i = r.d,
      s = r.d2,
      o = r.a;
    return (o = Ti(e, "getBoundingClientRect")) ? function() {
      return o()[i]
    } : function() {
      return (n ? Cb(s) : e["client" + s]) || 0
    }
  },
  AR = function(e, n) {
    return !n || ~Rr.indexOf(e) ? wb(e) : function() {
      return Kl
    }
  },
  xr = function(e, n) {
    var r = n.s,
      i = n.d2,
      s = n.d,
      o = n.a;
    return Math.max(0, (r = "scroll" + i) && (o = Ti(e, r)) ? o() - wb(e)()[s] : Ds(e) ? (ir[r] || Ge[r]) - Cb(i) : e[r] - e["offset" + i])
  },
  Cl = function(e, n) {
    for (var r = 0; r < Ns.length; r += 3)(!n || ~n.indexOf(Ns[r + 1])) && e(Ns[r], Ns[r + 1], Ns[r + 2])
  },
  Sn = function(e) {
    return typeof e == "string"
  },
  an = function(e) {
    return typeof e == "function"
  },
  zo = function(e) {
    return typeof e == "number"
  },
  es = function(e) {
    return typeof e == "object"
  },
  Io = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
  },
  qc = function(e, n) {
    if (e.enabled) {
      var r = e._ctx ? e._ctx.add(function() {
        return n(e)
      }) : n(e);
      r && r.totalTime && (e.callbackAnimation = r)
    }
  },
  Ps = Math.abs,
  Tb = "left",
  Sb = "top",
  Pd = "right",
  Rd = "bottom",
  hs = "width",
  ds = "height",
  pa = "Right",
  ga = "Left",
  _a = "Top",
  ma = "Bottom",
  pt = "padding",
  Hn = "margin",
  Eo = "Width",
  Ld = "Height",
  vt = "px",
  Un = function(e) {
    return xe.getComputedStyle(e)
  },
  PR = function(e) {
    var n = Un(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
  },
  P_ = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  zr = function(e, n) {
    var r = n && Un(e)[gh] !== "matrix(1, 0, 0, 1, 0, 0)" && ie.to(e, {
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
  ku = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
  },
  xb = function(e) {
    var n = [],
      r = e.labels,
      i = e.duration(),
      s;
    for (s in r) n.push(r[s] / i);
    return n
  },
  RR = function(e) {
    return function(n) {
      return ie.utils.snap(xb(e), n)
    }
  },
  Od = function(e) {
    var n = ie.utils.snap(e),
      r = Array.isArray(e) && e.slice(0).sort(function(i, s) {
        return i - s
      });
    return r ? function(i, s, o) {
      o === void 0 && (o = .001);
      var a;
      if (!s) return n(i);
      if (s > 0) {
        for (i -= o, a = 0; a < r.length; a++)
          if (r[a] >= i) return r[a];
        return r[a - 1]
      } else
        for (a = r.length, i += o; a--;)
          if (r[a] <= i) return r[a];
      return r[0]
    } : function(i, s, o) {
      o === void 0 && (o = .001);
      var a = n(i);
      return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : n(s < 0 ? i - e : i + e)
    }
  },
  LR = function(e) {
    return function(n, r) {
      return Od(xb(e))(n, r.direction)
    }
  },
  wl = function(e, n, r, i) {
    return r.split(",").forEach(function(s) {
      return e(n, s, i)
    })
  },
  kt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
      passive: !i,
      capture: !!s
    })
  },
  xt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
  },
  Tl = function(e, n, r) {
    r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r))
  },
  R_ = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  Sl = {
    toggleActions: "play",
    anticipatePin: 0
  },
  Au = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
  Ul = function(e, n) {
    if (Sn(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in Au ? Au[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
  },
  xl = function(e, n, r, i, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      f = s.fontSize,
      d = s.indent,
      h = s.fontWeight,
      g = et.createElement("div"),
      p = Ds(r) || Ti(r, "pinType") === "fixed",
      b = e.indexOf("scroller") !== -1,
      y = p ? Ge : r,
      D = e.indexOf("start") !== -1,
      _ = D ? u : c,
      m = "border-color:" + _ + ";font-size:" + f + ";color:" + _ + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return m += "position:" + ((b || l) && p ? "fixed;" : "absolute;"), (b || l || !p) && (m += (i === Ct ? Pd : Rd) + ":" + (o + parseFloat(d)) + "px;"), a && (m += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), g._isStart = D, g.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), g.style.cssText = m, g.innerText = n || n === 0 ? e + "-" + n : e, y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g), g._offset = g["offset" + i.op.d2], Vl(g, 0, i, D), g
  },
  Vl = function(e, n, r, i) {
    var s = {
        display: "block"
      },
      o = r[i ? "os2" : "p2"],
      a = r[i ? "p2" : "os2"];
    e._isFlipped = i, s[r.a + "Percent"] = i ? -100 : 0, s[r.a] = i ? "1px" : 0, s["border" + o + Eo] = 1, s["border" + a + Eo] = 0, s[r.p] = n + "px", ie.set(e, s)
  },
  be = [],
  Dh = {},
  Ua, L_ = function() {
    return Ht() - Gn > 34 && (Ua || (Ua = requestAnimationFrame(ei)))
  },
  Rs = function() {
    (!Jt || !Jt.isPressed || Jt.startX > Ge.clientWidth) && (Ce.cache++, Jt ? Ua || (Ua = requestAnimationFrame(ei)) : ei(), Gn || vs("scrollStart"), Gn = Ht())
  },
  Jc = function() {
    bb = xe.innerWidth, Db = xe.innerHeight
  },
  Go = function() {
    Ce.cache++, !Bt && !yb && !et.fullscreenElement && !et.webkitFullscreenElement && (!_h || bb !== xe.innerWidth || Math.abs(xe.innerHeight - Db) > xe.innerHeight * .25) && Su.restart(!0)
  },
  bs = {},
  OR = [],
  kb = function t() {
    return xt(we, "scrollEnd", t) || ns(!0)
  },
  vs = function(e) {
    return bs[e] && bs[e].map(function(n) {
      return n()
    }) || OR
  },
  Tn = [],
  Ab = function(e) {
    for (var n = 0; n < Tn.length; n += 5)(!e || Tn[n + 4] && Tn[n + 4].query === e) && (Tn[n].style.cssText = Tn[n + 1], Tn[n].getBBox && Tn[n].setAttribute("transform", Tn[n + 2] || ""), Tn[n + 3].uncache = 1)
  },
  Fd = function(e, n) {
    var r;
    for (Zt = 0; Zt < be.length; Zt++) r = be[Zt], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    xu = !0, n && Ab(n), n || vs("revert")
  },
  Pb = function(e, n) {
    Ce.cache++, (n || !en) && Ce.forEach(function(r) {
      return an(r) && r.cacheID++ && (r.rec = 0)
    }), Sn(e) && (xe.history.scrollRestoration = kd = e)
  },
  en, ps = 0,
  O_, FR = function() {
    if (O_ !== ps) {
      var e = O_ = ps;
      requestAnimationFrame(function() {
        return e === ps && ns(!0)
      })
    }
  },
  Rb = function() {
    Ge.appendChild(no), Ad = !Jt && no.offsetHeight || xe.innerHeight, Ge.removeChild(no)
  },
  F_ = function(e) {
    return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
      return n.style.display = e ? "none" : "block"
    })
  },
  ns = function(e, n) {
    if (Gn && !e && !xu) {
      kt(we, "scrollEnd", kb);
      return
    }
    Rb(), en = we.isRefreshing = !0, Ce.forEach(function(i) {
      return an(i) && ++i.cacheID && (i.rec = i())
    });
    var r = vs("refreshInit");
    mb && we.sort(), n || Fd(), Ce.forEach(function(i) {
      an(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
    }), be.slice(0).forEach(function(i) {
      return i.refresh()
    }), xu = !1, be.forEach(function(i) {
      if (i._subPinOffset && i.pin) {
        var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
          o = i.pin[s];
        i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh()
      }
    }), yh = 1, F_(!0), be.forEach(function(i) {
      var s = xr(i.scroller, i._dir),
        o = i.vars.end === "max" || i._endClamp && i.end > s,
        a = i._startClamp && i.start >= s;
      (o || a) && i.setPositions(a ? s - 1 : i.start, o ? Math.max(a ? s : i.start + 1, s) : i.end, !0)
    }), F_(!1), yh = 0, r.forEach(function(i) {
      return i && i.render && i.render(-1)
    }), Ce.forEach(function(i) {
      an(i) && (i.smooth && requestAnimationFrame(function() {
        return i.target.style.scrollBehavior = "smooth"
      }), i.rec && i(i.rec))
    }), Pb(kd, 1), Su.pause(), ps++, en = 2, ei(2), be.forEach(function(i) {
      return an(i.vars.onRefresh) && i.vars.onRefresh(i)
    }), en = we.isRefreshing = !1, vs("refresh")
  },
  bh = 0,
  jl = 1,
  ya, ei = function(e) {
    if (e === 2 || !en && !xu) {
      we.isUpdating = !0, ya && ya.update(0);
      var n = be.length,
        r = Ht(),
        i = r - Xc >= 50,
        s = n && be[0].scroll();
      if (jl = bh > s ? -1 : 1, en || (bh = s), i && (Gn && !uc && r - Gn > 200 && (Gn = 0, vs("scrollEnd")), Wo = Xc, Xc = r), jl < 0) {
        for (Zt = n; Zt-- > 0;) be[Zt] && be[Zt].update(0, i);
        jl = 1
      } else
        for (Zt = 0; Zt < n; Zt++) be[Zt] && be[Zt].update(0, i);
      we.isUpdating = !1
    }
    Ua = 0
  },
  vh = [Tb, Sb, Rd, Pd, Hn + ma, Hn + pa, Hn + _a, Hn + ga, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  Wl = vh.concat([hs, ds, "boxSizing", "max" + Eo, "max" + Ld, "position", Hn, pt, pt + _a, pt + pa, pt + ma, pt + ga]),
  MR = function(e, n, r) {
    ro(r);
    var i = e._gsap;
    if (i.spacerIsNative) ro(i.spacerState);
    else if (e._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(e, n), s.removeChild(n))
    }
    e._gsap.swappedIn = !1
  },
  Qc = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var s = vh.length, o = n.style, a = e.style, l; s--;) l = vh[s], o[l] = r[l];
      o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), a[Rd] = a[Pd] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[hs] = ku(e, sn) + vt, o[ds] = ku(e, Ct) + vt, o[pt] = a[Hn] = a[Sb] = a[Tb] = "0", ro(i), a[hs] = a["max" + Eo] = r[hs], a[ds] = a["max" + Ld] = r[ds], a[pt] = r[pt], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0
    }
  },
  NR = /([A-Z])/g,
  ro = function(e) {
    if (e) {
      var n = e.t.style,
        r = e.length,
        i = 0,
        s, o;
      for ((e.t._gsap || ie.core.getCache(e.t)).uncache = 1; i < r; i += 2) o = e[i + 1], s = e[i], o ? n[s] = o : n[s] && n.removeProperty(s.replace(NR, "-$1").toLowerCase())
    }
  },
  kl = function(e) {
    for (var n = Wl.length, r = e.style, i = [], s = 0; s < n; s++) i.push(Wl[s], r[Wl[s]]);
    return i.t = e, i
  },
  $R = function(e, n, r) {
    for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2) a = e[o], i.push(a, a in n ? n[a] : e[o + 1]);
    return i.t = e.t, i
  },
  Kl = {
    left: 0,
    top: 0
  },
  M_ = function(e, n, r, i, s, o, a, l, u, c, f, d, h, g) {
    an(e) && (e = e(l)), Sn(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? Ul("0" + e.substr(3), r) : 0));
    var p = h ? h.time() : 0,
      b, y, D;
    if (h && h.seek(0), isNaN(e) || (e = +e), zo(e)) h && (e = ie.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, d, e)), a && Vl(a, r, i, !0);
    else {
      an(n) && (n = n(l));
      var _ = (e || "0").split(" "),
        m, v, C, E;
      D = hn(n, l) || Ge, m = zr(D) || {}, (!m || !m.left && !m.top) && Un(D).display === "none" && (E = D.style.display, D.style.display = "block", m = zr(D), E ? D.style.display = E : D.style.removeProperty("display")), v = Ul(_[0], m[i.d]), C = Ul(_[1] || "0", r), e = m[i.p] - u[i.p] - c + v + s - C, a && Vl(a, C, i, r - C < 20 || a._isStart && C > 20), r -= r - C
    }
    if (g && (l[g] = e || -.001, e < 0 && (e = 0)), o) {
      var R = e + r,
        A = o._isStart;
      b = "scroll" + i.d2, Vl(o, R, i, A && R > 20 || !A && (f ? Math.max(Ge[b], ir[b]) : o.parentNode[b]) <= R + 1), f && (u = zr(a), f && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + vt))
    }
    return h && D && (b = zr(D), h.seek(d), y = zr(D), h._caScrollDist = b[i.p] - y[i.p], e = e / h._caScrollDist * d), h && h.seek(p), h ? e : Math.round(e)
  },
  IR = /(webkit|moz|length|cssText|inset)/i,
  N_ = function(e, n, r, i) {
    if (e.parentNode !== n) {
      var s = e.style,
        o, a;
      if (n === Ge) {
        e._stOrig = s.cssText, a = Un(e);
        for (o in a) !+o && !IR.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
        s.top = r, s.left = i
      } else s.cssText = e._stOrig;
      ie.core.getCache(e).uncache = 1, n.appendChild(e)
    }
  },
  Lb = function(e, n, r) {
    var i = n,
      s = i;
    return function(o) {
      var a = Math.round(e());
      return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && (o = a, r && r()), s = i, i = o, o
    }
  },
  Al = function(e, n, r) {
    var i = {};
    i[n.p] = "+=" + r, ie.set(e, i)
  },
  $_ = function(e, n) {
    var r = Ri(e, n),
      i = "_scroll" + n.p2,
      s = function o(a, l, u, c, f) {
        var d = o.tween,
          h = l.onComplete,
          g = {};
        u = u || r();
        var p = Lb(r, u, function() {
          d.kill(), o.tween = 0
        });
        return f = c && f || 0, c = c || a - u, d && d.kill(), l[i] = a, l.inherit = !1, l.modifiers = g, g[i] = function() {
          return p(u + c * d.ratio + f * d.ratio * d.ratio)
        }, l.onUpdate = function() {
          Ce.cache++, o.tween && ei()
        }, l.onComplete = function() {
          o.tween = 0, h && h.call(d)
        }, d = o.tween = ie.to(e, l), d
      };
    return e[i] = r, r.wheelHandler = function() {
      return s.tween && s.tween.kill() && (s.tween = 0)
    }, kt(e, "wheel", r.wheelHandler), we.isTouch && kt(e, "touchmove", r.wheelHandler), s
  },
  we = function() {
    function t(n, r) {
      Ms || t.register(ie) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), mh(this), this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ko) {
        this.update = this.refresh = this.kill = Er;
        return
      }
      r = P_(Sn(r) || zo(r) || r.nodeType ? {
        trigger: r
      } : r, Sl);
      var s = r,
        o = s.onUpdate,
        a = s.toggleClass,
        l = s.id,
        u = s.onToggle,
        c = s.onRefresh,
        f = s.scrub,
        d = s.trigger,
        h = s.pin,
        g = s.pinSpacing,
        p = s.invalidateOnRefresh,
        b = s.anticipatePin,
        y = s.onScrubComplete,
        D = s.onSnapComplete,
        _ = s.once,
        m = s.snap,
        v = s.pinReparent,
        C = s.pinSpacer,
        E = s.containerAnimation,
        R = s.fastScrollEnd,
        A = s.preventOverlaps,
        P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? sn : Ct,
        V = !f && f !== 0,
        O = hn(r.scroller || xe),
        Y = ie.core.getCache(O),
        q = Ds(O),
        Q = ("pinType" in r ? r.pinType : Ti(O, "pinType") || q && "fixed") === "fixed",
        U = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
        W = V && r.toggleActions.split(" "),
        z = "markers" in r ? r.markers : Sl.markers,
        H = q ? 0 : parseFloat(Un(O)["border" + P.p2 + Eo]) || 0,
        F = this,
        se = r.onRefreshInit && function() {
          return r.onRefreshInit(F)
        },
        ge = kR(O, q, P),
        Te = AR(O, q),
        fe = 0,
        le = 0,
        ve = 0,
        B = Ri(O, P),
        J, X, Z, ue, De, T, x, N, K, k, w, S, M, I, j, G, L, $, ee, te, pe, de, Ne, qe, Le, Tt, cn, Mr, dt, Dt, hr, Ee, Vi, Jn, Qn, Zn, ji, ws, Nr;
      if (F._startClamp = F._endClamp = !1, F._dir = P, b *= 45, F.scroller = O, F.scroll = E ? E.time.bind(E) : B, ue = B(), F.vars = r, i = i || r.animation, "refreshPriority" in r && (mb = 1, r.refreshPriority === -9999 && (ya = F)), Y.tweenScroll = Y.tweenScroll || {
          top: $_(O, Ct),
          left: $_(O, sn)
        }, F.tweenTo = J = Y.tweenScroll[P.p], F.scrubDuration = function(ne) {
          Vi = zo(ne) && ne, Vi ? Ee ? Ee.duration(ne) : Ee = ie.to(i, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: !1,
            duration: Vi,
            paused: !0,
            onComplete: function() {
              return y && y(F)
            }
          }) : (Ee && Ee.progress(1).kill(), Ee = 0)
        }, i && (i.vars.lazy = !1, i._initted && !F.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), F.animation = i.pause(), i.scrollTrigger = F, F.scrubDuration(f), Dt = 0, l || (l = i.vars.id)), m && ((!es(m) || m.push) && (m = {
          snapTo: m
        }), "scrollBehavior" in Ge.style && ie.set(q ? [Ge, ir] : O, {
          scrollBehavior: "auto"
        }), Ce.forEach(function(ne) {
          return an(ne) && ne.target === (q ? et.scrollingElement || ir : O) && (ne.smooth = !1)
        }), Z = an(m.snapTo) ? m.snapTo : m.snapTo === "labels" ? RR(i) : m.snapTo === "labelsDirectional" ? LR(i) : m.directional !== !1 ? function(ne, ye) {
          return Od(m.snapTo)(ne, Ht() - le < 500 ? 0 : ye.direction)
        } : ie.utils.snap(m.snapTo), Jn = m.duration || {
          min: .1,
          max: 2
        }, Jn = es(Jn) ? da(Jn.min, Jn.max) : da(Jn, Jn), Qn = ie.delayedCall(m.delay || Vi / 2 || .1, function() {
          var ne = B(),
            ye = Ht() - le < 500,
            ae = J.tween;
          if ((ye || Math.abs(F.getVelocity()) < 10) && !ae && !uc && fe !== ne) {
            var _e = (ne - T) / I,
              St = i && !V ? i.totalProgress() : _e,
              Se = ye ? 0 : (St - hr) / (Ht() - Wo) * 1e3 || 0,
              lt = ie.utils.clamp(-_e, 1 - _e, Ps(Se / 2) * Se / .185),
              Mt = _e + (m.inertia === !1 ? 0 : lt),
              it, Je, We = m,
              er = We.onStart,
              Ze = We.onInterrupt,
              wn = We.onComplete;
            if (it = Z(Mt, F), zo(it) || (it = Mt), Je = Math.round(T + it * I), ne <= x && ne >= T && Je !== ne) {
              if (ae && !ae._initted && ae.data <= Ps(Je - ne)) return;
              m.inertia === !1 && (lt = it - _e), J(Je, {
                duration: Jn(Ps(Math.max(Ps(Mt - St), Ps(it - St)) * .185 / Se / .05 || 0)),
                ease: m.ease || "power3",
                data: Ps(Je - ne),
                onInterrupt: function() {
                  return Qn.restart(!0) && Ze && Ze(F)
                },
                onComplete: function() {
                  F.update(), fe = B(), i && (Ee ? Ee.resetTo("totalProgress", it, i._tTime / i._tDur) : i.progress(it)), Dt = hr = i && !V ? i.totalProgress() : F.progress, D && D(F), wn && wn(F)
                }
              }, ne, lt * I, Je - ne - lt * I), er && er(F, J.tween)
            }
          } else F.isActive && fe !== ne && Qn.restart(!0)
        }).pause()), l && (Dh[l] = F), d = F.trigger = hn(d || h !== !0 && h), Nr = d && d._gsap && d._gsap.stRevert, Nr && (Nr = Nr(F)), h = h === !0 ? d : hn(h), Sn(a) && (a = {
          targets: d,
          className: a
        }), h && (g === !1 || g === Hn || (g = !g && h.parentNode && h.parentNode.style && Un(h.parentNode).display === "flex" ? !1 : pt), F.pin = h, X = ie.core.getCache(h), X.spacer ? j = X.pinState : (C && (C = hn(C), C && !C.nodeType && (C = C.current || C.nativeElement), X.spacerIsNative = !!C, C && (X.spacerState = kl(C))), X.spacer = $ = C || et.createElement("div"), $.classList.add("pin-spacer"), l && $.classList.add("pin-spacer-" + l), X.pinState = j = kl(h)), r.force3D !== !1 && ie.set(h, {
          force3D: !0
        }), F.spacer = $ = X.spacer, dt = Un(h), qe = dt[g + P.os2], te = ie.getProperty(h), pe = ie.quickSetter(h, P.a, vt), Qc(h, $, dt), L = kl(h)), z) {
        S = es(z) ? P_(z, R_) : R_, k = xl("scroller-start", l, O, P, S, 0), w = xl("scroller-end", l, O, P, S, 0, k), ee = k["offset" + P.op.d2];
        var xo = hn(Ti(O, "content") || O);
        N = this.markerStart = xl("start", l, xo, P, S, ee, 0, E), K = this.markerEnd = xl("end", l, xo, P, S, ee, 0, E), E && (ws = ie.quickSetter([N, K], P.a, vt)), !Q && !(Rr.length && Ti(O, "fixedMarkers") === !0) && (PR(q ? Ge : O), ie.set([k, w], {
          force3D: !0
        }), Tt = ie.quickSetter(k, P.a, vt), Mr = ie.quickSetter(w, P.a, vt))
      }
      if (E) {
        var me = E.vars.onUpdate,
          ce = E.vars.onUpdateParams;
        E.eventCallback("onUpdate", function() {
          F.update(0, 0, 1), me && me.apply(E, ce || [])
        })
      }
      if (F.previous = function() {
          return be[be.indexOf(F) - 1]
        }, F.next = function() {
          return be[be.indexOf(F) + 1]
        }, F.revert = function(ne, ye) {
          if (!ye) return F.kill(!0);
          var ae = ne !== !1 || !F.enabled,
            _e = Bt;
          ae !== F.isReverted && (ae && (Zn = Math.max(B(), F.scroll.rec || 0), ve = F.progress, ji = i && i.progress()), N && [N, K, k, w].forEach(function(St) {
            return St.style.display = ae ? "none" : "block"
          }), ae && (Bt = F, F.update(ae)), h && (!v || !F.isActive) && (ae ? MR(h, $, j) : Qc(h, $, Un(h), Le)), ae || F.update(ae), Bt = _e, F.isReverted = ae)
        }, F.refresh = function(ne, ye, ae, _e) {
          if (!((Bt || !F.enabled) && !ye)) {
            if (h && ne && Gn) {
              kt(t, "scrollEnd", kb);
              return
            }!en && se && se(F), Bt = F, J.tween && !ae && (J.tween.kill(), J.tween = 0), Ee && Ee.pause(), p && i && i.revert({
              kill: !1
            }).invalidate(), F.isReverted || F.revert(!0, !0), F._subPinOffset = !1;
            var St = ge(),
              Se = Te(),
              lt = E ? E.duration() : xr(O, P),
              Mt = I <= .01,
              it = 0,
              Je = _e || 0,
              We = es(ae) ? ae.end : r.end,
              er = r.endTrigger || d,
              Ze = es(ae) ? ae.start : r.start || (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
              wn = F.pinnedContainer = r.pinnedContainer && hn(r.pinnedContainer, F),
              dr = d && Math.max(0, be.indexOf(F)) || 0,
              Lt = dr,
              Ot, Nt, Wi, Ga, $t, bt, pr, fc, $d, ko, gr, Ao, Xa;
            for (z && es(ae) && (Ao = ie.getProperty(k, P.p), Xa = ie.getProperty(w, P.p)); Lt--;) bt = be[Lt], bt.end || bt.refresh(0, 1) || (Bt = F), pr = bt.pin, pr && (pr === d || pr === h || pr === wn) && !bt.isReverted && (ko || (ko = []), ko.unshift(bt), bt.revert(!0, !0)), bt !== be[Lt] && (dr--, Lt--);
            for (an(Ze) && (Ze = Ze(F)), Ze = S_(Ze, "start", F), T = M_(Ze, d, St, P, B(), N, k, F, Se, H, Q, lt, E, F._startClamp && "_startClamp") || (h ? -.001 : 0), an(We) && (We = We(F)), Sn(We) && !We.indexOf("+=") && (~We.indexOf(" ") ? We = (Sn(Ze) ? Ze.split(" ")[0] : "") + We : (it = Ul(We.substr(2), St), We = Sn(Ze) ? Ze : (E ? ie.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, T) : T) + it, er = d)), We = S_(We, "end", F), x = Math.max(T, M_(We || (er ? "100% 0" : lt), er, St, P, B() + it, K, w, F, Se, H, Q, lt, E, F._endClamp && "_endClamp")) || -.001, it = 0, Lt = dr; Lt--;) bt = be[Lt], pr = bt.pin, pr && bt.start - bt._pinPush <= T && !E && bt.end > 0 && (Ot = bt.end - (F._startClamp ? Math.max(0, bt.start) : bt.start), (pr === d && bt.start - bt._pinPush < T || pr === wn) && isNaN(Ze) && (it += Ot * (1 - bt.progress)), pr === h && (Je += Ot));
            if (T += it, x += it, F._startClamp && (F._startClamp += it), F._endClamp && !en && (F._endClamp = x || -.001, x = Math.min(x, xr(O, P))), I = x - T || (T -= .01) && .001, Mt && (ve = ie.utils.clamp(0, 1, ie.utils.normalize(T, x, Zn))), F._pinPush = Je, N && it && (Ot = {}, Ot[P.a] = "+=" + it, wn && (Ot[P.p] = "-=" + B()), ie.set([N, K], Ot)), h && !(yh && F.end >= xr(O, P))) Ot = Un(h), Ga = P === Ct, Wi = B(), de = parseFloat(te(P.a)) + Je, !lt && x > 1 && (gr = (q ? et.scrollingElement || ir : O).style, gr = {
              style: gr,
              value: gr["overflow" + P.a.toUpperCase()]
            }, q && Un(Ge)["overflow" + P.a.toUpperCase()] !== "scroll" && (gr.style["overflow" + P.a.toUpperCase()] = "scroll")), Qc(h, $, Ot), L = kl(h), Nt = zr(h, !0), fc = Q && Ri(O, Ga ? sn : Ct)(), g ? (Le = [g + P.os2, I + Je + vt], Le.t = $, Lt = g === pt ? ku(h, P) + I + Je : 0, Lt && (Le.push(P.d, Lt + vt), $.style.flexBasis !== "auto" && ($.style.flexBasis = Lt + vt)), ro(Le), wn && be.forEach(function(Po) {
              Po.pin === wn && Po.vars.pinSpacing !== !1 && (Po._subPinOffset = !0)
            }), Q && B(Zn)) : (Lt = ku(h, P), Lt && $.style.flexBasis !== "auto" && ($.style.flexBasis = Lt + vt)), Q && ($t = {
              top: Nt.top + (Ga ? Wi - T : fc) + vt,
              left: Nt.left + (Ga ? fc : Wi - T) + vt,
              boxSizing: "border-box",
              position: "fixed"
            }, $t[hs] = $t["max" + Eo] = Math.ceil(Nt.width) + vt, $t[ds] = $t["max" + Ld] = Math.ceil(Nt.height) + vt, $t[Hn] = $t[Hn + _a] = $t[Hn + pa] = $t[Hn + ma] = $t[Hn + ga] = "0", $t[pt] = Ot[pt], $t[pt + _a] = Ot[pt + _a], $t[pt + pa] = Ot[pt + pa], $t[pt + ma] = Ot[pt + ma], $t[pt + ga] = Ot[pt + ga], G = $R(j, $t, v), en && B(0)), i ? ($d = i._initted, zc(1), i.render(i.duration(), !0, !0), Ne = te(P.a) - de + I + Je, cn = Math.abs(I - Ne) > 1, Q && cn && G.splice(G.length - 2, 2), i.render(0, !0, !0), $d || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), zc(0)) : Ne = I, gr && (gr.value ? gr.style["overflow" + P.a.toUpperCase()] = gr.value : gr.style.removeProperty("overflow-" + P.a));
            else if (d && B() && !E)
              for (Nt = d.parentNode; Nt && Nt !== Ge;) Nt._pinOffset && (T -= Nt._pinOffset, x -= Nt._pinOffset), Nt = Nt.parentNode;
            ko && ko.forEach(function(Po) {
              return Po.revert(!1, !0)
            }), F.start = T, F.end = x, ue = De = en ? Zn : B(), !E && !en && (ue < Zn && B(Zn), F.scroll.rec = 0), F.revert(!1, !0), le = Ht(), Qn && (fe = -1, Qn.restart(!0)), Bt = 0, i && V && (i._initted || ji) && i.progress() !== ji && i.progress(ji || 0, !0).render(i.time(), !0, !0), (Mt || ve !== F.progress || E || p) && (i && !V && i.totalProgress(E && T < -.001 && !ve ? ie.utils.normalize(T, x, 0) : ve, !0), F.progress = Mt || (ue - T) / I === ve ? 0 : ve), h && g && ($._pinOffset = Math.round(F.progress * Ne)), Ee && Ee.invalidate(), isNaN(Ao) || (Ao -= ie.getProperty(k, P.p), Xa -= ie.getProperty(w, P.p), Al(k, P, Ao), Al(N, P, Ao - (_e || 0)), Al(w, P, Xa), Al(K, P, Xa - (_e || 0))), Mt && !en && F.update(), c && !en && !M && (M = !0, c(F), M = !1)
          }
        }, F.getVelocity = function() {
          return (B() - De) / (Ht() - Wo) * 1e3 || 0
        }, F.endAnimation = function() {
          Io(F.callbackAnimation), i && (Ee ? Ee.progress(1) : i.paused() ? V || Io(i, F.direction < 0, 1) : Io(i, i.reversed()))
        }, F.labelToScroll = function(ne) {
          return i && i.labels && (T || F.refresh() || T) + i.labels[ne] / i.duration() * I || 0
        }, F.getTrailing = function(ne) {
          var ye = be.indexOf(F),
            ae = F.direction > 0 ? be.slice(0, ye).reverse() : be.slice(ye + 1);
          return (Sn(ne) ? ae.filter(function(_e) {
            return _e.vars.preventOverlaps === ne
          }) : ae).filter(function(_e) {
            return F.direction > 0 ? _e.end <= T : _e.start >= x
          })
        }, F.update = function(ne, ye, ae) {
          if (!(E && !ae && !ne)) {
            var _e = en === !0 ? Zn : F.scroll(),
              St = ne ? 0 : (_e - T) / I,
              Se = St < 0 ? 0 : St > 1 ? 1 : St || 0,
              lt = F.progress,
              Mt, it, Je, We, er, Ze, wn, dr;
            if (ye && (De = ue, ue = E ? B() : _e, m && (hr = Dt, Dt = i && !V ? i.totalProgress() : Se)), b && h && !Bt && !El && Gn && (!Se && T < _e + (_e - De) / (Ht() - Wo) * b ? Se = 1e-4 : Se === 1 && x > _e + (_e - De) / (Ht() - Wo) * b && (Se = .9999)), Se !== lt && F.enabled) {
              if (Mt = F.isActive = !!Se && Se < 1, it = !!lt && lt < 1, Ze = Mt !== it, er = Ze || !!Se != !!lt, F.direction = Se > lt ? 1 : -1, F.progress = Se, er && !Bt && (Je = Se && !lt ? 0 : Se === 1 ? 1 : lt === 1 ? 2 : 3, V && (We = !Ze && W[Je + 1] !== "none" && W[Je + 1] || W[Je], dr = i && (We === "complete" || We === "reset" || We in i))), A && (Ze || dr) && (dr || f || !i) && (an(A) ? A(F) : F.getTrailing(A).forEach(function(Wi) {
                  return Wi.endAnimation()
                })), V || (Ee && !Bt && !El ? (Ee._dp._time - Ee._start !== Ee._time && Ee.render(Ee._dp._time - Ee._start), Ee.resetTo ? Ee.resetTo("totalProgress", Se, i._tTime / i._tDur) : (Ee.vars.totalProgress = Se, Ee.invalidate().restart())) : i && i.totalProgress(Se, !!(Bt && (le || ne)))), h) {
                if (ne && g && ($.style[g + P.os2] = qe), !Q) pe(Yo(de + Ne * Se));
                else if (er) {
                  if (wn = !ne && Se > lt && x + 1 > _e && _e + 1 >= xr(O, P), v)
                    if (!ne && (Mt || wn)) {
                      var Lt = zr(h, !0),
                        Ot = _e - T;
                      N_(h, Ge, Lt.top + (P === Ct ? Ot : 0) + vt, Lt.left + (P === Ct ? 0 : Ot) + vt)
                    } else N_(h, $);
                  ro(Mt || wn ? G : L), cn && Se < 1 && Mt || pe(de + (Se === 1 && !wn ? Ne : 0))
                }
              }
              m && !J.tween && !Bt && !El && Qn.restart(!0), a && (Ze || _ && Se && (Se < 1 || !Gc)) && Ha(a.targets).forEach(function(Wi) {
                return Wi.classList[Mt || _ ? "add" : "remove"](a.className)
              }), o && !V && !ne && o(F), er && !Bt ? (V && (dr && (We === "complete" ? i.pause().totalProgress(1) : We === "reset" ? i.restart(!0).pause() : We === "restart" ? i.restart(!0) : i[We]()), o && o(F)), (Ze || !Gc) && (u && Ze && qc(F, u), U[Je] && qc(F, U[Je]), _ && (Se === 1 ? F.kill(!1, 1) : U[Je] = 0), Ze || (Je = Se === 1 ? 1 : 3, U[Je] && qc(F, U[Je]))), R && !Mt && Math.abs(F.getVelocity()) > (zo(R) ? R : 2500) && (Io(F.callbackAnimation), Ee ? Ee.progress(1) : Io(i, We === "reverse" ? 1 : !Se, 1))) : V && o && !Bt && o(F)
            }
            if (Mr) {
              var Nt = E ? _e / E.duration() * (E._caScrollDist || 0) : _e;
              Tt(Nt + (k._isFlipped ? 1 : 0)), Mr(Nt)
            }
            ws && ws(-_e / E.duration() * (E._caScrollDist || 0))
          }
        }, F.enable = function(ne, ye) {
          F.enabled || (F.enabled = !0, kt(O, "resize", Go), q || kt(O, "scroll", Rs), se && kt(t, "refreshInit", se), ne !== !1 && (F.progress = ve = 0, ue = De = fe = B()), ye !== !1 && F.refresh())
        }, F.getTween = function(ne) {
          return ne && J ? J.tween : Ee
        }, F.setPositions = function(ne, ye, ae, _e) {
          if (E) {
            var St = E.scrollTrigger,
              Se = E.duration(),
              lt = St.end - St.start;
            ne = St.start + lt * ne / Se, ye = St.start + lt * ye / Se
          }
          F.refresh(!1, !1, {
            start: x_(ne, ae && !!F._startClamp),
            end: x_(ye, ae && !!F._endClamp)
          }, _e), F.update()
        }, F.adjustPinSpacing = function(ne) {
          if (Le && ne) {
            var ye = Le.indexOf(P.d) + 1;
            Le[ye] = parseFloat(Le[ye]) + ne + vt, Le[1] = parseFloat(Le[1]) + ne + vt, ro(Le)
          }
        }, F.disable = function(ne, ye) {
          if (F.enabled && (ne !== !1 && F.revert(!0, !0), F.enabled = F.isActive = !1, ye || Ee && Ee.pause(), Zn = 0, X && (X.uncache = 1), se && xt(t, "refreshInit", se), Qn && (Qn.pause(), J.tween && J.tween.kill() && (J.tween = 0)), !q)) {
            for (var ae = be.length; ae--;)
              if (be[ae].scroller === O && be[ae] !== F) return;
            xt(O, "resize", Go), q || xt(O, "scroll", Rs)
          }
        }, F.kill = function(ne, ye) {
          F.disable(ne, ye), Ee && !ye && Ee.kill(), l && delete Dh[l];
          var ae = be.indexOf(F);
          ae >= 0 && be.splice(ae, 1), ae === Zt && jl > 0 && Zt--, ae = 0, be.forEach(function(_e) {
            return _e.scroller === F.scroller && (ae = 1)
          }), ae || en || (F.scroll.rec = 0), i && (i.scrollTrigger = null, ne && i.revert({
            kill: !1
          }), ye || i.kill()), N && [N, K, k, w].forEach(function(_e) {
            return _e.parentNode && _e.parentNode.removeChild(_e)
          }), ya === F && (ya = 0), h && (X && (X.uncache = 1), ae = 0, be.forEach(function(_e) {
            return _e.pin === h && ae++
          }), ae || (X.spacer = 0)), r.onKill && r.onKill(F)
        }, be.push(F), F.enable(!1, !1), Nr && Nr(F), i && i.add && !I) {
        var Fe = F.update;
        F.update = function() {
          F.update = Fe, T || x || F.refresh()
        }, ie.delayedCall(.01, F.update), I = .01, T = x = 0
      } else F.refresh();
      h && FR()
    }, t.register = function(r) {
      return Ms || (ie = r || Eb(), vb() && window.document && t.enable(), Ms = Ko), Ms
    }, t.defaults = function(r) {
      if (r)
        for (var i in r) Sl[i] = r[i];
      return Sl
    }, t.disable = function(r, i) {
      Ko = 0, be.forEach(function(o) {
        return o[i ? "kill" : "disable"](r)
      }), xt(xe, "wheel", Rs), xt(et, "scroll", Rs), clearInterval(vl), xt(et, "touchcancel", Er), xt(Ge, "touchstart", Er), wl(xt, et, "pointerdown,touchstart,mousedown", k_), wl(xt, et, "pointerup,touchend,mouseup", A_), Su.kill(), Cl(xt);
      for (var s = 0; s < Ce.length; s += 3) Tl(xt, Ce[s], Ce[s + 1]), Tl(xt, Ce[s], Ce[s + 2])
    }, t.enable = function() {
      if (xe = window, et = document, ir = et.documentElement, Ge = et.body, ie && (Ha = ie.utils.toArray, da = ie.utils.clamp, mh = ie.core.context || Er, zc = ie.core.suppressOverwrites || Er, kd = xe.history.scrollRestoration || "auto", bh = xe.pageYOffset, ie.core.globals("ScrollTrigger", t), Ge)) {
        Ko = 1, no = document.createElement("div"), no.style.height = "100vh", no.style.position = "absolute", Rb(), xR(), ft.register(ie), t.isTouch = ft.isTouch, ui = ft.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), _h = ft.isTouch === 1, kt(xe, "wheel", Rs), _b = [xe, et, ir, Ge], ie.matchMedia ? (t.matchMedia = function(l) {
          var u = ie.matchMedia(),
            c;
          for (c in l) u.add(c, l[c]);
          return u
        }, ie.addEventListener("matchMediaInit", function() {
          return Fd()
        }), ie.addEventListener("matchMediaRevert", function() {
          return Ab()
        }), ie.addEventListener("matchMedia", function() {
          ns(0, 1), vs("matchMedia")
        }), ie.matchMedia("(orientation: portrait)", function() {
          return Jc(), Jc
        })) : console.warn("Requires GSAP 3.11.0 or later"), Jc(), kt(et, "scroll", Rs);
        var r = Ge.style,
          i = r.borderTopStyle,
          s = ie.core.Animation.prototype,
          o, a;
        for (s.revert || Object.defineProperty(s, "revert", {
            value: function() {
              return this.time(-.01, !0)
            }
          }), r.borderTopStyle = "solid", o = zr(Ge), Ct.m = Math.round(o.top + Ct.sc()) || 0, sn.m = Math.round(o.left + sn.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), vl = setInterval(L_, 250), ie.delayedCall(.5, function() {
            return El = 0
          }), kt(et, "touchcancel", Er), kt(Ge, "touchstart", Er), wl(kt, et, "pointerdown,touchstart,mousedown", k_), wl(kt, et, "pointerup,touchend,mouseup", A_), gh = ie.utils.checkPrefix("transform"), Wl.push(gh), Ms = Ht(), Su = ie.delayedCall(.2, ns).pause(), Ns = [et, "visibilitychange", function() {
            var l = xe.innerWidth,
              u = xe.innerHeight;
            et.hidden ? (w_ = l, T_ = u) : (w_ !== l || T_ !== u) && Go()
          }, et, "DOMContentLoaded", ns, xe, "load", ns, xe, "resize", Go], Cl(kt), be.forEach(function(l) {
            return l.enable(0, 1)
          }), a = 0; a < Ce.length; a += 3) Tl(xt, Ce[a], Ce[a + 1]), Tl(xt, Ce[a], Ce[a + 2])
      }
    }, t.config = function(r) {
      "limitCallbacks" in r && (Gc = !!r.limitCallbacks);
      var i = r.syncInterval;
      i && clearInterval(vl) || (vl = i) && setInterval(L_, i), "ignoreMobileResize" in r && (_h = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (Cl(xt) || Cl(kt, r.autoRefreshEvents || "none"), yb = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }, t.scrollerProxy = function(r, i) {
      var s = hn(r),
        o = Ce.indexOf(s),
        a = Ds(s);
      ~o && Ce.splice(o, a ? 6 : 2), i && (a ? Rr.unshift(xe, i, Ge, i, ir, i) : Rr.unshift(s, i))
    }, t.clearMatchMedia = function(r) {
      be.forEach(function(i) {
        return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
      })
    }, t.isInViewport = function(r, i, s) {
      var o = (Sn(r) ? hn(r) : r).getBoundingClientRect(),
        a = o[s ? hs : ds] * i || 0;
      return s ? o.right - a > 0 && o.left + a < xe.innerWidth : o.bottom - a > 0 && o.top + a < xe.innerHeight
    }, t.positionInViewport = function(r, i, s) {
      Sn(r) && (r = hn(r));
      var o = r.getBoundingClientRect(),
        a = o[s ? hs : ds],
        l = i == null ? a / 2 : i in Au ? Au[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
      return s ? (o.left + l) / xe.innerWidth : (o.top + l) / xe.innerHeight
    }, t.killAll = function(r) {
      if (be.slice(0).forEach(function(s) {
          return s.vars.id !== "ScrollSmoother" && s.kill()
        }), r !== !0) {
        var i = bs.killAll || [];
        bs = {}, i.forEach(function(s) {
          return s()
        })
      }
    }, t
  }();
we.version = "3.12.5";
we.saveStyles = function(t) {
  return t ? Ha(t).forEach(function(e) {
    if (e && e.style) {
      var n = Tn.indexOf(e);
      n >= 0 && Tn.splice(n, 5), Tn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ie.core.getCache(e), mh())
    }
  }) : Tn
};
we.revert = function(t, e) {
  return Fd(!t, e)
};
we.create = function(t, e) {
  return new we(t, e)
};
we.refresh = function(t) {
  return t ? Go() : (Ms || we.register()) && ns(!0)
};
we.update = function(t) {
  return ++Ce.cache && ei(t === !0 ? 2 : 0)
};
we.clearScrollMemory = Pb;
we.maxScroll = function(t, e) {
  return xr(t, e ? sn : Ct)
};
we.getScrollFunc = function(t, e) {
  return Ri(hn(t), e ? sn : Ct)
};
we.getById = function(t) {
  return Dh[t]
};
we.getAll = function() {
  return be.filter(function(t) {
    return t.vars.id !== "ScrollSmoother"
  })
};
we.isScrolling = function() {
  return !!Gn
};
we.snapDirectional = Od;
we.addEventListener = function(t, e) {
  var n = bs[t] || (bs[t] = []);
  ~n.indexOf(e) || n.push(e)
};
we.removeEventListener = function(t, e) {
  var n = bs[t],
    r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1)
};
we.batch = function(t, e) {
  var n = [],
    r = {},
    i = e.interval || .016,
    s = e.batchMax || 1e9,
    o = function(u, c) {
      var f = [],
        d = [],
        h = ie.delayedCall(i, function() {
          c(f, d), f = [], d = []
        }).pause();
      return function(g) {
        f.length || h.restart(!0), f.push(g.trigger), d.push(g), s <= f.length && h.progress(1)
      }
    },
    a;
  for (a in e) r[a] = a.substr(0, 2) === "on" && an(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
  return an(s) && (s = s(), kt(we, "refresh", function() {
    return s = e.batchMax()
  })), Ha(t).forEach(function(l) {
    var u = {};
    for (a in r) u[a] = r[a];
    u.trigger = l, n.push(we.create(u))
  }), n
};
var I_ = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
  },
  Zc = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (ft.isTouch ? " pinch-zoom" : "") : "none", e === ir && t(Ge, n)
  },
  Pl = {
    auto: 1,
    scroll: 1
  },
  BR = function(e) {
    var n = e.event,
      r = e.target,
      i = e.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || ie.core.getCache(s),
      a = Ht(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (; s && s !== Ge && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(Pl[(l = Un(s)).overflowY] || Pl[l.overflowX]));) s = s.parentNode;
      o._isScroll = s && s !== r && !Ds(s) && (Pl[(l = Un(s)).overflowY] || Pl[l.overflowX]), o._isScrollT = a
    }(o._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0)
  },
  Ob = function(e, n, r, i) {
    return ft.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: i = i && BR,
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function() {
        return r && kt(et, ft.eventTypes[0], H_, !1, !0)
      },
      onDisable: function() {
        return xt(et, ft.eventTypes[0], H_, !0)
      }
    })
  },
  HR = /(input|label|select|textarea)/i,
  B_, H_ = function(e) {
    var n = HR.test(e.target.tagName);
    (n || B_) && (e._gsapAllow = !0, B_ = n)
  },
  UR = function(e) {
    es(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      a, l, u = hn(e.target) || ir,
      c = ie.core.globals().ScrollSmoother,
      f = c && c.get(),
      d = ui && (e.content && hn(e.content) || f && e.content !== !1 && !f.smooth() && f.content()),
      h = Ri(u, Ct),
      g = Ri(u, sn),
      p = 1,
      b = (ft.isTouch && xe.visualViewport ? xe.visualViewport.scale * xe.visualViewport.width : xe.outerWidth) / xe.innerWidth,
      y = 0,
      D = an(i) ? function() {
        return i(a)
      } : function() {
        return i || 2.8
      },
      _, m, v = Ob(u, e.type, !0, s),
      C = function() {
        return m = !1
      },
      E = Er,
      R = Er,
      A = function() {
        l = xr(u, Ct), R = da(ui ? 1 : 0, l), r && (E = da(0, xr(u, sn))), _ = ps
      },
      P = function() {
        d._gsap.y = Yo(parseFloat(d._gsap.y) + h.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
      },
      V = function() {
        if (m) {
          requestAnimationFrame(C);
          var z = Yo(a.deltaY / 2),
            H = R(h.v - z);
          if (d && H !== h.v + h.offset) {
            h.offset = H - h.v;
            var F = Yo((parseFloat(d && d._gsap.y) || 0) - h.offset);
            d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + F + ", 0, 1)", d._gsap.y = F + "px", h.cacheID = Ce.cache, ei()
          }
          return !0
        }
        h.offset && P(), m = !0
      },
      O, Y, q, Q, U = function() {
        A(), O.isActive() && O.vars.scrollY > l && (h() > l ? O.progress(1) && h(l) : O.resetTo("scrollY", l))
      };
    return d && ie.set(d, {
      y: "+=0"
    }), e.ignoreCheck = function(W) {
      return ui && W.type === "touchmove" && V() || p > 1.05 && W.type !== "touchstart" || a.isGesturing || W.touches && W.touches.length > 1
    }, e.onPress = function() {
      m = !1;
      var W = p;
      p = Yo((xe.visualViewport && xe.visualViewport.scale || 1) / b), O.pause(), W !== p && Zc(u, p > 1.01 ? !0 : r ? !1 : "x"), Y = g(), q = h(), A(), _ = ps
    }, e.onRelease = e.onGestureStart = function(W, z) {
      if (h.offset && P(), !z) Q.restart(!0);
      else {
        Ce.cache++;
        var H = D(),
          F, se;
        r && (F = g(), se = F + H * .05 * -W.velocityX / .227, H *= I_(g, F, se, xr(u, sn)), O.vars.scrollX = E(se)), F = h(), se = F + H * .05 * -W.velocityY / .227, H *= I_(h, F, se, xr(u, Ct)), O.vars.scrollY = R(se), O.invalidate().duration(H).play(.01), (ui && O.vars.scrollY >= l || F >= l - 1) && ie.to({}, {
          onUpdate: U,
          duration: H
        })
      }
      o && o(W)
    }, e.onWheel = function() {
      O._ts && O.pause(), Ht() - y > 1e3 && (_ = 0, y = Ht())
    }, e.onChange = function(W, z, H, F, se) {
      if (ps !== _ && A(), z && r && g(E(F[2] === z ? Y + (W.startX - W.x) : g() + z - F[1])), H) {
        h.offset && P();
        var ge = se[2] === H,
          Te = ge ? q + W.startY - W.y : h() + H - se[1],
          fe = R(Te);
        ge && Te !== fe && (q += fe - Te), h(fe)
      }(H || z) && ei()
    }, e.onEnable = function() {
      Zc(u, r ? !1 : "x"), we.addEventListener("refresh", U), kt(xe, "resize", U), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = g.smooth = !1), v.enable()
    }, e.onDisable = function() {
      Zc(u, !0), xt(xe, "resize", U), we.removeEventListener("refresh", U), v.kill()
    }, e.lockAxis = e.lockAxis !== !1, a = new ft(e), a.iOS = ui, ui && !h() && h(1), ui && ie.ticker.add(Er), Q = a._dc, O = ie.to(a, {
      ease: "power4",
      paused: !0,
      inherit: !1,
      scrollX: r ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: Lb(h, h(), function() {
          return O.pause()
        })
      },
      onUpdate: ei,
      onComplete: Q.vars.onComplete
    }), a
  };
we.sort = function(t) {
  return be.sort(t || function(e, n) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
  })
};
we.observe = function(t) {
  return new ft(t)
};
we.normalizeScroll = function(t) {
  if (typeof t > "u") return Jt;
  if (t === !0 && Jt) return Jt.enable();
  if (t === !1) {
    Jt && Jt.kill(), Jt = t;
    return
  }
  var e = t instanceof ft ? t : UR(t);
  return Jt && Jt.target === e.target && Jt.kill(), Ds(e.target) && (Jt = e), e
};
we.core = {
  _getVelocityProp: ph,
  _inputObserver: Ob,
  _scrollers: Ce,
  _proxies: Rr,
  bridge: {
    ss: function() {
      Gn || vs("scrollStart"), Gn = Ht()
    },
    ref: function() {
      return Bt
    }
  }
};
Eb() && ie.registerPlugin(we);
/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var VR = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function Fb(t) {
  var e = t.nodeType,
    n = "";
  if (e === 1 || e === 9 || e === 11) {
    if (typeof t.textContent == "string") return t.textContent;
    for (t = t.firstChild; t; t = t.nextSibling) n += Fb(t)
  } else if (e === 3 || e === 4) return t.nodeValue;
  return n
}
/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var js, Eh, Mb, Bo, Nb, cc, jR = /(?:\r|\n|\t\t)/g,
  WR = /(?:\s\s+)/g,
  KR = " ",
  $b = function(e) {
    js = document, Eh = window, Bo = Bo || e || Eh.gsap || console.warn("Please gsap.registerPlugin(SplitText)"), Bo && (cc = Bo.utils.toArray, Nb = Bo.core.context || function() {}, Mb = 1)
  },
  Ib = function(e) {
    return Eh.getComputedStyle(e)
  },
  Md = function(e) {
    return e.position === "absolute" || e.absolute === !0
  },
  YR = function(e, n) {
    for (var r = n.length, i; --r > -1;)
      if (i = n[r], e.substr(0, i.length) === i) return i.length
  },
  zR = " style='position:relative;display:inline-block;'",
  U_ = function(e, n) {
    e === void 0 && (e = "");
    var r = ~e.indexOf("++"),
      i = 1;
    return r && (e = e.split("++").join("")),
      function() {
        return "<" + n + zR + (e ? " class='" + e + (r ? i++ : "") + "'>" : ">")
      }
  },
  Bb = function t(e, n, r) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
      for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
    else(i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(n).join(r))
  },
  ef = function(e, n) {
    for (var r = n.length; --r > -1;) e.push(n[r])
  },
  V_ = function(e, n, r) {
    for (var i; e && e !== n;) {
      if (i = e._next || e.nextSibling, i) return i.textContent.charAt(0) === r;
      e = e.parentNode || e._parent
    }
  },
  GR = function t(e) {
    var n = cc(e.childNodes),
      r = n.length,
      i, s;
    for (i = 0; i < r; i++) s = n[i], s._isSplit ? t(s) : i && s.previousSibling && s.previousSibling.nodeType === 3 ? (s.previousSibling.nodeValue += s.nodeType === 3 ? s.nodeValue : s.firstChild.nodeValue, e.removeChild(s)) : s.nodeType !== 3 && (e.insertBefore(s.firstChild, s), e.removeChild(s))
  },
  yr = function(e, n) {
    return parseFloat(n[e]) || 0
  },
  XR = function(e, n, r, i, s, o, a) {
    var l = Ib(e),
      u = yr("paddingLeft", l),
      c = -999,
      f = yr("borderBottomWidth", l) + yr("borderTopWidth", l),
      d = yr("borderLeftWidth", l) + yr("borderRightWidth", l),
      h = yr("paddingTop", l) + yr("paddingBottom", l),
      g = yr("paddingLeft", l) + yr("paddingRight", l),
      p = yr("fontSize", l) * (n.lineThreshold || .2),
      b = l.textAlign,
      y = [],
      D = [],
      _ = [],
      m = n.wordDelimiter || " ",
      v = n.tag ? n.tag : n.span ? "span" : "div",
      C = n.type || n.split || "chars,words,lines",
      E = s && ~C.indexOf("lines") ? [] : null,
      R = ~C.indexOf("words"),
      A = ~C.indexOf("chars"),
      P = Md(n),
      V = n.linesClass,
      O = ~(V || "").indexOf("++"),
      Y = [],
      q = l.display === "flex",
      Q = e.style.display,
      U, W, z, H, F, se, ge, Te, fe, le, ve, B;
    for (O && (V = V.split("++").join("")), q && (e.style.display = "block"), W = e.getElementsByTagName("*"), z = W.length, F = [], U = 0; U < z; U++) F[U] = W[U];
    if (E || P)
      for (U = 0; U < z; U++) H = F[U], se = H.parentNode === e, (se || P || A && !R) && (B = H.offsetTop, E && se && Math.abs(B - c) > p && (H.nodeName !== "BR" || U === 0) && (ge = [], E.push(ge), c = B), P && (H._x = H.offsetLeft, H._y = B, H._w = H.offsetWidth, H._h = H.offsetHeight), E && ((H._isSplit && se || !A && se || R && se || !R && H.parentNode.parentNode === e && !H.parentNode._isSplit) && (ge.push(H), H._x -= u, V_(H, e, m) && (H._wordEnd = !0)), H.nodeName === "BR" && (H.nextSibling && H.nextSibling.nodeName === "BR" || U === 0) && E.push([])));
    for (U = 0; U < z; U++) {
      if (H = F[U], se = H.parentNode === e, H.nodeName === "BR") {
        E || P ? (H.parentNode && H.parentNode.removeChild(H), F.splice(U--, 1), z--) : R || e.appendChild(H);
        continue
      }
      if (P && (fe = H.style, !R && !se && (H._x += H.parentNode._x, H._y += H.parentNode._y), fe.left = H._x + "px", fe.top = H._y + "px", fe.position = "absolute", fe.display = "block", fe.width = H._w + 1 + "px", fe.height = H._h + "px"), !R && A)
        if (H._isSplit)
          for (H._next = W = H.nextSibling, H.parentNode.appendChild(H); W && W.nodeType === 3 && W.textContent === " ";) H._next = W.nextSibling, H.parentNode.appendChild(W), W = W.nextSibling;
        else H.parentNode._isSplit ? (H._parent = H.parentNode, !H.previousSibling && H.firstChild && (H.firstChild._isFirst = !0), H.nextSibling && H.nextSibling.textContent === " " && !H.nextSibling.nextSibling && Y.push(H.nextSibling), H._next = H.nextSibling && H.nextSibling._isFirst ? null : H.nextSibling, H.parentNode.removeChild(H), F.splice(U--, 1), z--) : se || (B = !H.nextSibling && V_(H.parentNode, e, m), H.parentNode._parent && H.parentNode._parent.appendChild(H), B && H.parentNode.appendChild(js.createTextNode(" ")), v === "span" && (H.style.display = "inline"), y.push(H));
      else H.parentNode._isSplit && !H._isSplit && H.innerHTML !== "" ? D.push(H) : A && !H._isSplit && (v === "span" && (H.style.display = "inline"), y.push(H))
    }
    for (U = Y.length; --U > -1;) Y[U].parentNode.removeChild(Y[U]);
    if (E) {
      for (P && (le = js.createElement(v), e.appendChild(le), ve = le.offsetWidth + "px", B = le.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(le)), fe = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
      for (Te = m === " " && (!P || !R && !A), U = 0; U < E.length; U++) {
        for (ge = E[U], le = js.createElement(v), le.style.cssText = "display:block;text-align:" + b + ";position:" + (P ? "absolute;" : "relative;"), V && (le.className = V + (O ? U + 1 : "")), _.push(le), z = ge.length, W = 0; W < z; W++) ge[W].nodeName !== "BR" && (H = ge[W], le.appendChild(H), Te && H._wordEnd && le.appendChild(js.createTextNode(" ")), P && (W === 0 && (le.style.top = H._y + "px", le.style.left = u + B + "px"), H.style.top = "0px", B && (H.style.left = H._x - B + "px")));
        z === 0 ? le.innerHTML = "&nbsp;" : !R && !A && (GR(le), Bb(le, " ", " ")), P && (le.style.width = ve, le.style.height = H._h + "px"), e.appendChild(le)
      }
      e.style.cssText = fe
    }
    P && (a > e.clientHeight && (e.style.height = a - h + "px", e.clientHeight < a && (e.style.height = a + f + "px")), o > e.clientWidth && (e.style.width = o - g + "px", e.clientWidth < o && (e.style.width = o + d + "px"))), q && (Q ? e.style.display = Q : e.style.removeProperty("display")), ef(r, y), R && ef(i, D), ef(s, _)
  },
  qR = function(e, n, r, i) {
    var s = n.tag ? n.tag : n.span ? "span" : "div",
      o = n.type || n.split || "chars,words,lines",
      a = ~o.indexOf("chars"),
      l = Md(n),
      u = n.wordDelimiter || " ",
      c = function(P) {
        return P === u || P === KR && u === " "
      },
      f = u !== " " ? "" : l ? "&#173; " : " ",
      d = "</" + s + ">",
      h = 1,
      g = n.specialChars ? typeof n.specialChars == "function" ? n.specialChars : YR : null,
      p, b, y, D, _, m, v, C, E = js.createElement("div"),
      R = e.parentNode;
    for (R.insertBefore(E, e), E.textContent = e.nodeValue, R.removeChild(e), e = E, p = Fb(e), v = p.indexOf("<") !== -1, n.reduceWhiteSpace !== !1 && (p = p.replace(WR, " ").replace(jR, "")), v && (p = p.split("<").join("{{LT}}")), _ = p.length, b = (p.charAt(0) === " " ? f : "") + r(), y = 0; y < _; y++)
      if (m = p.charAt(y), g && (C = g(p.substr(y), n.specialChars))) m = p.substr(y, C || 1), b += a && m !== " " ? i() + m + "</" + s + ">" : m, y += C - 1;
      else if (c(m) && !c(p.charAt(y - 1)) && y) {
      for (b += h ? d : "", h = 0; c(p.charAt(y + 1));) b += f, y++;
      y === _ - 1 ? b += f : p.charAt(y + 1) !== ")" && (b += f + r(), h = 1)
    } else m === "{" && p.substr(y, 6) === "{{LT}}" ? (b += a ? i() + "{{LT}}</" + s + ">" : "{{LT}}", y += 5) : m.charCodeAt(0) >= 55296 && m.charCodeAt(0) <= 56319 || p.charCodeAt(y + 1) >= 65024 && p.charCodeAt(y + 1) <= 65039 ? (D = ((p.substr(y, 12).split(VR) || [])[1] || "").length || 2, b += a && m !== " " ? i() + p.substr(y, D) + "</" + s + ">" : p.substr(y, D), y += D - 1) : b += a && m !== " " ? i() + m + "</" + s + ">" : m;
    e.outerHTML = b + (h ? d : ""), v && Bb(R, "{{LT}}", "<")
  },
  JR = function t(e, n, r, i) {
    var s = cc(e.childNodes),
      o = s.length,
      a = Md(n),
      l, u;
    if (e.nodeType !== 3 || o > 1) {
      for (n.absolute = !1, l = 0; l < o; l++) u = s[l], u._next = u._isFirst = u._parent = u._wordEnd = null, (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) && (a && u.nodeType !== 3 && Ib(u).display === "inline" && (u.style.display = "inline-block", u.style.position = "relative"), u._isSplit = !0, t(u, n, r, i));
      n.absolute = a, e._isSplit = !0;
      return
    }
    qR(e, n, r, i)
  },
  Nd = function() {
    function t(n, r) {
      Mb || $b(), this.elements = cc(n), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = r || {}, Nb(this), this.split(r)
    }
    var e = t.prototype;
    return e.split = function(r) {
      this.isSplit && this.revert(), this.vars = r = r || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var i = this.elements.length, s = r.tag ? r.tag : r.span ? "span" : "div", o = U_(r.wordsClass, s), a = U_(r.charsClass, s), l, u, c; --i > -1;) c = this.elements[i], this._originals[i] = {
        html: c.innerHTML,
        style: c.getAttribute("style")
      }, l = c.clientHeight, u = c.clientWidth, JR(c, r, o, a), XR(c, r, this.chars, this.words, this.lines, u, l);
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, e.revert = function() {
      var r = this._originals;
      if (!r) throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function(i, s) {
        i.innerHTML = r[s].html, i.setAttribute("style", r[s].style)
      }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, t.create = function(r, i) {
      return new t(r, i)
    }, t
  }();
Nd.version = "3.12.5";
Nd.register = $b;
const QR = un(() => {
  wu.registerPlugin(we, za, _i, Nd), _i.create("default-ease", "0.24, 1, 0.36, 1"), _i.create("in-out-quint", "0.83, 0, 0.17, 1"), _i.create("out-quint", "0.22, 1, 0.36, 1"), _i.create("out-expo", "0.16, 1, 0.3, 1")
});

function Hb(t, e, n) {
  return Math.max(t, Math.min(e, n))
}
class ZR {
  advance(e) {
    var a;
    if (!this.isRunning) return;
    let n = !1;
    if (this.lerp) this.value = (r = this.value, i = this.to, s = 60 * this.lerp, o = e, function(l, u, c) {
      return (1 - c) * l + c * u
    }(r, i, 1 - Math.exp(-s * o))), Math.round(this.value) === this.to && (this.value = this.to, n = !0);
    else {
      this.currentTime += e;
      const l = Hb(0, this.currentTime / this.duration, 1);
      n = l >= 1;
      const u = n ? 1 : this.easing(l);
      this.value = this.from + (this.to - this.from) * u
    }
    var r, i, s, o;
    (a = this.onUpdate) == null || a.call(this, this.value, n), n && this.stop()
  }
  stop() {
    this.isRunning = !1
  }
  fromTo(e, n, {
    lerp: r = .1,
    duration: i = 1,
    easing: s = l => l,
    onStart: o,
    onUpdate: a
  }) {
    this.from = this.value = e, this.to = n, this.lerp = r, this.duration = i, this.easing = s, this.currentTime = 0, this.isRunning = !0, o == null || o(), this.onUpdate = a
  }
}
class eL {
  constructor({
    wrapper: e,
    content: n,
    autoResize: r = !0,
    debounce: i = 250
  } = {}) {
    It(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize()
    });
    It(this, "onWrapperResize", () => {
      this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
    });
    It(this, "onContentResize", () => {
      this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
    });
    this.wrapper = e, this.content = n, r && (this.debouncedResize = function(s, o) {
      let a;
      return function() {
        let l = arguments,
          u = this;
        clearTimeout(a), a = setTimeout(function() {
          s.apply(u, l)
        }, o)
      }
    }(this.resize, i), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
  }
  destroy() {
    var e, n;
    (e = this.wrapperResizeObserver) == null || e.disconnect(), (n = this.contentResizeObserver) == null || n.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    }
  }
}
class Ub {
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
  off(e, n) {
    var r;
    this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter(i => n !== i)
  }
  destroy() {
    this.events = {}
  }
}
const j_ = 100 / 6;
class tL {
  constructor(e, {
    wheelMultiplier: n = 1,
    touchMultiplier: r = 1
  }) {
    It(this, "onTouchStart", e => {
      const {
        clientX: n,
        clientY: r
      } = e.targetTouches ? e.targetTouches[0] : e;
      this.touchStart.x = n, this.touchStart.y = r, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: e
      })
    });
    It(this, "onTouchMove", e => {
      const {
        clientX: n,
        clientY: r
      } = e.targetTouches ? e.targetTouches[0] : e, i = -(n - this.touchStart.x) * this.touchMultiplier, s = -(r - this.touchStart.y) * this.touchMultiplier;
      this.touchStart.x = n, this.touchStart.y = r, this.lastDelta = {
        x: i,
        y: s
      }, this.emitter.emit("scroll", {
        deltaX: i,
        deltaY: s,
        event: e
      })
    });
    It(this, "onTouchEnd", e => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: e
      })
    });
    It(this, "onWheel", e => {
      let {
        deltaX: n,
        deltaY: r,
        deltaMode: i
      } = e;
      n *= i === 1 ? j_ : i === 2 ? this.windowWidth : 1, r *= i === 1 ? j_ : i === 2 ? this.windowHeight : 1, n *= this.wheelMultiplier, r *= this.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: n,
        deltaY: r,
        event: e
      })
    });
    It(this, "onWindowResize", () => {
      this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
    });
    this.element = e, this.wheelMultiplier = n, this.touchMultiplier = r, this.touchStart = {
      x: null,
      y: null
    }, this.emitter = new Ub, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
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
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
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
class nL {
  constructor({
    wrapper: e = window,
    content: n = document.documentElement,
    wheelEventsTarget: r = e,
    eventsTarget: i = r,
    smoothWheel: s = !0,
    syncTouch: o = !1,
    syncTouchLerp: a = .075,
    touchInertiaMultiplier: l = 35,
    duration: u,
    easing: c = _ => Math.min(1, 1.001 - Math.pow(2, -10 * _)),
    lerp: f = !u && .1,
    infinite: d = !1,
    orientation: h = "vertical",
    gestureOrientation: g = "vertical",
    touchMultiplier: p = 1,
    wheelMultiplier: b = 1,
    autoResize: y = !0,
    __experimental__naiveDimensions: D = !1
  } = {}) {
    this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
      deltaX: _,
      deltaY: m,
      event: v
    }) => {
      if (v.ctrlKey) return;
      const C = v.type.includes("touch"),
        E = v.type.includes("wheel");
      if (this.options.syncTouch && C && v.type === "touchstart" && !this.isStopped && !this.isLocked) return void this.reset();
      const R = _ === 0 && m === 0,
        A = this.options.gestureOrientation === "vertical" && m === 0 || this.options.gestureOrientation === "horizontal" && _ === 0;
      if (R || A) return;
      let P = v.composedPath();
      if (P = P.slice(0, P.indexOf(this.rootElement)), P.find(q => {
          var Q, U, W, z, H;
          return ((Q = q.hasAttribute) === null || Q === void 0 ? void 0 : Q.call(q, "data-lenis-prevent")) || C && ((U = q.hasAttribute) === null || U === void 0 ? void 0 : U.call(q, "data-lenis-prevent-touch")) || E && ((W = q.hasAttribute) === null || W === void 0 ? void 0 : W.call(q, "data-lenis-prevent-wheel")) || ((z = q.classList) === null || z === void 0 ? void 0 : z.contains("lenis")) && !(!((H = q.classList) === null || H === void 0) && H.contains("lenis-stopped"))
        })) return;
      if (this.isStopped || this.isLocked) return void v.preventDefault();
      if (this.isSmooth = this.options.syncTouch && C || this.options.smoothWheel && E, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
      v.preventDefault();
      let V = m;
      this.options.gestureOrientation === "both" ? V = Math.abs(m) > Math.abs(_) ? m : _ : this.options.gestureOrientation === "horizontal" && (V = _);
      const O = C && this.options.syncTouch,
        Y = C && v.type === "touchend" && Math.abs(V) > 5;
      Y && (V = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + V, Object.assign({
        programmatic: !1
      }, O ? {
        lerp: Y ? this.options.syncTouchLerp : 1
      } : {
        lerp: this.options.lerp,
        duration: this.options.duration,
        easing: this.options.easing
      }))
    }, this.onNativeScroll = () => {
      if (!this.__preventNextScrollEvent && !this.isScrolling) {
        const _ = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - _), this.emit()
      }
    }, window.lenisVersion = "1.0.42", e !== document.documentElement && e !== document.body || (e = window), this.options = {
      wrapper: e,
      content: n,
      wheelEventsTarget: r,
      eventsTarget: i,
      smoothWheel: s,
      syncTouch: o,
      syncTouchLerp: a,
      touchInertiaMultiplier: l,
      duration: u,
      easing: c,
      lerp: f,
      infinite: d,
      gestureOrientation: g,
      orientation: h,
      touchMultiplier: p,
      wheelMultiplier: b,
      autoResize: y,
      __experimental__naiveDimensions: D
    }, this.animate = new ZR, this.emitter = new Ub, this.dimensions = new eL({
      wrapper: e,
      content: n,
      autoResize: y
    }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = o || s, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new tL(i, {
      touchMultiplier: p,
      wheelMultiplier: b
    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
  }
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
  }
  on(e, n) {
    return this.emitter.on(e, n)
  }
  off(e, n) {
    return this.emitter.off(e, n)
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
    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
  }
  start() {
    this.isStopped && (this.isStopped = !1, this.reset())
  }
  stop() {
    this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
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
    lerp: a = !s && this.options.lerp,
    onComplete: l,
    force: u = !1,
    programmatic: c = !0
  } = {}) {
    if (!this.isStopped && !this.isLocked || u) {
      if (["top", "left", "start"].includes(e)) e = 0;
      else if (["bottom", "right", "end"].includes(e)) e = this.limit;
      else {
        let f;
        if (typeof e == "string" ? f = document.querySelector(e) : e != null && e.nodeType && (f = e), f) {
          if (this.options.wrapper !== window) {
            const h = this.options.wrapper.getBoundingClientRect();
            n -= this.isHorizontal ? h.left : h.top
          }
          const d = f.getBoundingClientRect();
          e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll
        }
      }
      if (typeof e == "number") {
        if (e += n, e = Math.round(e), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = Hb(0, e, this.limit), r) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(l == null || l(this));
        if (!c) {
          if (e === this.targetScroll) return;
          this.targetScroll = e
        }
        this.animate.fromTo(this.animatedScroll, e, {
          duration: s,
          easing: o,
          lerp: a,
          onStart: () => {
            i && (this.isLocked = !0), this.isScrolling = !0
          },
          onUpdate: (f, d) => {
            this.isScrolling = !0, this.velocity = f - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = f, this.setScroll(this.scroll), c && (this.targetScroll = f), d || this.emit(), d && (this.reset(), this.emit(), l == null || l(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
              delete this.__preventNextScrollEvent
            }))
          }
        })
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper
  }
  get limit() {
    return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal"
  }
  get actualScroll() {
    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
  }
  get scroll() {
    return this.options.infinite ? (e = this.animatedScroll, n = this.limit, (e % n + n) % n) : this.animatedScroll;
    var e, n
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit
  }
  get isSmooth() {
    return this.__isSmooth
  }
  set isSmooth(e) {
    this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClassName("lenis-smooth", e))
  }
  get isScrolling() {
    return this.__isScrolling
  }
  set isScrolling(e) {
    this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClassName("lenis-scrolling", e))
  }
  get isStopped() {
    return this.__isStopped
  }
  set isStopped(e) {
    this.__isStopped !== e && (this.__isStopped = e, this.toggleClassName("lenis-stopped", e))
  }
  get isLocked() {
    return this.__isLocked
  }
  set isLocked(e) {
    this.__isLocked !== e && (this.__isLocked = e, this.toggleClassName("lenis-locked", e))
  }
  get className() {
    let e = "lenis";
    return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
  }
  toggleClassName(e, n) {
    this.rootElement.classList.toggle(e, n), this.emitter.emit("className change", this)
  }
}
const rL = un(() => {
    Js("lenis", () => {
      const t = new nL({
        duration: 1.2,
        orientation: "vertical",
        smoothWheel: !0
      });
      t.scrollSpeed = 0;
      let e = 0,
        n = performance.now();
      return wu.ticker.add(r => {
        const i = r * 1e3,
          s = i - n,
          o = t.scroll,
          a = o - e;
        t.scrollSpeed = Math.abs(a / s) * 1e3, e = o, n = i, t.raf(i)
      }), wu.ticker.lagSmoothing(0), t.on("scroll", we.update), t
    })
  }),
  iL = un(() => {
    const {
      dev_mode: t
    } = Cn().public;
    t || console.log(`%c

                                   .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                      .$$$$$$$+////////////////////////////////////////+$$$$$$$.
                $$$$$$€///////////////////////////////////////////////++++++++++$$$$$$.
           .$$$$$+////////////////                                  +/+++++++++++++++$$$$$$
        .$$$$$++++//////+                                                    .+++++++€€€$$$$$$
      .$$$$$€€++++/                                                                ++€€€€$$$$$$.
      $$$$$$€€+$                                                                      .€€$€$$$$$
      $$$$$$€                                                                            $$$$$$$
      $$$$$$$                       $$$$$$$$$            $$$$$$$$$                       $$$$$$€
      $$$$$$$$$$                    /////////            /////////                    $$$$$$$++€
       $$$€€$$$$$$$$.               /////////            /////////               .$$$$$$$€++++€
        $$$€€€€€€$$$$$$$$$$.        /////////            /////////        .$$$$$$$$$+/////++++
          .€€€€€€€€++++++$$$$$$$$$$$/////////            /////////$$$$$$$$$$$/////////////+.
              $€€€€++++++++++++//////////////            //////////////////////////////$
                   €++++++++++++/////////////            /////////////////////////
                            ++++/////////////            /////////////////
                                    /////////            /////////
                                    /////////            /////////
                                    /////////            /////////
  
                                     With ❤ by THE FIRST THE LAST
                                      / thefirstthelast.agency /
  
      `, "font-size:10px;color: rgb(255, 117, 194);")
  }),
  sL = [aT, uT, kS, AS, PS, RS, OS, FS, MS, WA, YA, GA, QR, rL, iL],
  oL = ii({
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
        get: () => e === t.renderKey ? t.route[i] : n[i],
        enumerable: !0
      });
      return Xs(Ku, Gr(r)), () => Vn(t.vnode, {
        ref: t.vnodeRef
      })
    }
  }),
  aL = ii({
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
      slots: n,
      expose: r
    }) {
      const i = Ue(),
        s = _n(),
        o = mn(Ku, null);
      let a;
      r({
        pageRef: s
      });
      const l = mn(QC, null);
      let u;
      const c = i.deferHydration();
      if (i.isHydrating) {
        const f = i.hooks.hookOnce("app:error", c);
        Mn().beforeEach(f)
      }
      return t.pageKey && Yn(() => t.pageKey, (f, d) => {
        f !== d && i.callHook("page:loading:start")
      }), () => Vn(py, {
        name: t.name,
        route: t.route,
        ...e
      }, {
        default: f => {
          const d = uL(o, f.route, f.Component),
            h = o && o.matched.length === f.route.matched.length;
          if (!f.Component) {
            if (u && !h) return u;
            c();
            return
          }
          if (u && l && !l.isCurrent(f.route)) return u;
          if (d && o && (!l || l != null && l.isCurrent(o))) return h ? u : null;
          const g = Hf(f, t.pageKey);
          !i.isHydrating && !cL(o, f.route, f.Component) && a === g && i.callHook("page:loading:end"), a = g;
          const p = !!(t.transition ?? f.route.meta.pageTransition ?? Sf),
            b = p && lL([t.transition, f.route.meta.pageTransition, Sf, {
              onAfterLeave: () => {
                i.callHook("page:transition:finish", f.Component)
              }
            }].filter(Boolean)),
            y = t.keepalive ?? f.route.meta.keepalive ?? LC;
          return u = mS(J1, p && b, _S(y, Vn(r0, {
            suspensible: !0,
            onPending: () => i.callHook("page:start", f.Component),
            onResolve: () => {
              Es(() => i.callHook("page:finish", f.Component).then(() => i.callHook("page:loading:end")).finally(c))
            }
          }, {
            default: () => {
              const D = Vn(oL, {
                key: g || void 0,
                vnode: n.default ? Vn(nn, void 0, n.default(f)) : f.Component,
                route: f.route,
                renderKey: g || void 0,
                trackRootNodes: p,
                vnodeRef: s
              });
              return y && (D.type.name = f.Component.type.name || f.Component.type.__name || "RouteProvider"), D
            }
          }))).default(), u
        }
      })
    }
  });

function lL(t) {
  const e = t.map(n => ({
    ...n,
    onAfterLeave: n.onAfterLeave ? qh(n.onAfterLeave) : void 0
  }));
  return F0(...e)
}

function uL(t, e, n) {
  if (!t) return !1;
  const r = e.matched.findIndex(i => {
    var s;
    return ((s = i.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
  });
  return !r || r === -1 ? !1 : e.matched.slice(0, r).some((i, s) => {
    var o, a, l;
    return ((o = i.components) == null ? void 0 : o.default) !== ((l = (a = t.matched[s]) == null ? void 0 : a.components) == null ? void 0 : l.default)
  }) || n && Hf({
    route: e,
    Component: n
  }) !== Hf({
    route: t,
    Component: n
  })
}

function cL(t, e, n) {
  return t ? e.matched.findIndex(i => {
    var s;
    return ((s = i.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
  }) < e.matched.length - 1 : !1
}
const fL = ii({
    __name: "app",
    setup(t) {
      return Js("preloaderDone", () => !1), Js("activeNavMenu", () => !1), Js("activeSlideIdxTeamSlider", () => 0), (e, n) => {
        const r = aL;
        return Cr(), gi(r, {
          transition: {
            name: "change-page",
            mode: "out-in"
          }
        })
      }
    }
  }),
  hL = {
    __name: "nuxt-error-page",
    props: {
      error: Object
    },
    setup(t) {
      const n = t.error;
      n.stack && n.stack.split(`
`).splice(1).map(f => ({
        text: f.replace("webpack:/", "").replace(".vue", ".js").trim(),
        internal: f.includes("node_modules") && !f.includes(".cache") || f.includes("internal") || f.includes("new Promise")
      })).map(f => `<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);
      const r = Number(n.statusCode || 500),
        i = r === 404,
        s = n.statusMessage ?? (i ? "Page Not Found" : "Internal Server Error"),
        o = n.message || n.toString(),
        a = void 0,
        c = i ? Xd(() => fu(() => import("./TGpkc6jb.js"), __vite__mapDeps([4, 2, 1, 5]), import.meta.url)) : Xd(() => fu(() => import("./CXEzZafD.js"), __vite__mapDeps([6, 1, 7]), import.meta.url));
      return (f, d) => (Cr(), gi(Pe(c), ev(c0({
        statusCode: Pe(r),
        statusMessage: Pe(s),
        description: Pe(o),
        stack: Pe(a)
      })), null, 16))
    }
  },
  dL = {
    key: 0
  },
  W_ = {
    __name: "nuxt-root",
    setup(t) {
      const e = () => null,
        n = Ue(),
        r = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", r);
        Mn().beforeEach(l)
      }
      const i = !1;
      Xs(Ku, lu()), n.hooks.callHookWith(l => l.map(u => u()), "vue:setup");
      const s = Yu(),
        o = !1;
      Mm((l, u, c) => {
        if (n.hooks.callHook("vue:error", l, u, c).catch(f => console.error("[nuxt] Error in `vue:error` hook", f)), iw(l) && (l.fatal || l.unhandled)) return n.runWithContext(() => Is(l)), !1
      });
      const a = !1;
      return (l, u) => (Cr(), gi(r0, {
        onResolve: Pe(r)
      }, {
        default: Cm(() => [Pe(o) ? (Cr(), M1("div", dL)) : Pe(s) ? (Cr(), gi(Pe(hL), {
          key: 1,
          error: Pe(s)
        }, null, 8, ["error"])) : Pe(a) ? (Cr(), gi(Pe(e), {
          key: 2,
          context: Pe(a)
        }, null, 8, ["context"])) : Pe(i) ? (Cr(), gi(n1(Pe(i)), {
          key: 3
        })) : (Cr(), gi(Pe(fL), {
          key: 4
        }))]),
        _: 1
      }, 8, ["onResolve"]))
    }
  };
let K_;
{
  let t;
  K_ = async function() {
    var o, a;
    if (t) return t;
    const r = !!(((o = window.__NUXT__) == null ? void 0 : o.serverRendered) ?? ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? xE(W_) : SE(W_),
      i = $C({
        vueApp: r
      });
    async function s(l) {
      await i.callHook("app:error", l), i.payload.error = i.payload.error || zu(l)
    }
    r.config.errorHandler = s, i.hook("app:suspense:resolve", () => {
      r.config.errorHandler === s && (r.config.errorHandler = void 0)
    });
    try {
      await HC(i, sL)
    } catch (l) {
      s(l)
    }
    try {
      await i.hooks.callHook("app:created", r), await i.hooks.callHook("app:beforeMount", r), r.mount(FC), await i.hooks.callHook("app:mounted", r), await Es()
    } catch (l) {
      s(l)
    }
    return r
  }, t = K_().catch(e => {
    throw console.error("Error while mounting app:", e), e
  })
}
export {
  Jh as $, wL as A, gi as B, ZD as C, Ou as D, yL as E, nn as F, _t as G, DL as H, EL as I, gL as J, TL as K, x0 as L, Ue as M, kL as N, io as O, ym as P, Jv as Q, Bh as R, Nd as S, _L as T, tf as U, zu as V, Ni as W, Mu as X, lu as Y, bL as Z, Mn as _, u0 as a, cg as a0, PL as a1, Vn as a2, mL as a3, v0 as a4, xL as a5, Fr as a6, nw as a7, So as a8, tw as a9, iu as aa, Wu as ab, AL as ac, vL as ad, Xv as ae, Gv as af, Ff as ag, st as b, M1 as c, f0 as d, wu as e, Bu as f, En as g, Ih as h, ii as i, Cn as j, Js as k, Mi as l, Pe as m, CL as n, Cr as o, we as p, Es as q, _n as r, Yn as s, iv as t, W0 as u, cd as v, Cm as w, SL as x, Fu as y, Xs as z
};