/* https://nabilissa.com/_nuxt/Ct55yWcp.js */
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./BuhJADiR.js", "./index.C6rKv_Un.css"]))) => i.map(i => d[i]);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
  }

  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s)
  }
})();

function Tu(t) {
  const e = Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return n => n in e
}
const Fe = {},
  ys = [],
  ur = () => {},
  lg = () => !1,
  pl = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  Su = t => t.startsWith("onUpdate:"),
  _t = Object.assign,
  Eu = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
  },
  Ty = Object.prototype.hasOwnProperty,
  De = (t, e) => Ty.call(t, e),
  le = Array.isArray,
  vs = t => Ys(t) === "[object Map]",
  ag = t => Ys(t) === "[object Set]",
  Ph = t => Ys(t) === "[object Date]",
  Sy = t => Ys(t) === "[object RegExp]",
  ce = t => typeof t == "function",
  Ke = t => typeof t == "string",
  dr = t => typeof t == "symbol",
  Me = t => t !== null && typeof t == "object",
  cg = t => (Me(t) || ce(t)) && ce(t.then) && ce(t.catch),
  fg = Object.prototype.toString,
  Ys = t => fg.call(t),
  Ey = t => Ys(t).slice(8, -1),
  ug = t => Ys(t) === "[object Object]",
  Ya = t => Ke(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Mi = Tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Xa = t => {
    const e = Object.create(null);
    return (n => e[n] || (e[n] = t(n)))
  },
  Cy = /-\w/g,
  Ln = Xa(t => t.replace(Cy, e => e.slice(1).toUpperCase())),
  ky = /\B([A-Z])/g,
  qi = Xa(t => t.replace(ky, "-$1").toLowerCase()),
  Ka = Xa(t => t.charAt(0).toUpperCase() + t.slice(1)),
  mc = Xa(t => t ? `on${Ka(t)}` : ""),
  ei = (t, e) => !Object.is(t, e),
  xo = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e)
  },
  hg = (t, e, n, r = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n
    })
  },
  Py = t => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e
  },
  dg = t => {
    const e = Ke(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
  };
let Rh;
const qa = () => Rh || (Rh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Cu(t) {
  if (le(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = Ke(r) ? My(r) : Cu(r);
      if (i)
        for (const s in i) e[s] = i[s]
    }
    return e
  } else if (Ke(t) || Me(t)) return t
}
const Ry = /;(?![^(]*\))/g,
  Ay = /:([^]+)/,
  Oy = /\/\*[^]*?\*\//g;

function My(t) {
  const e = {};
  return t.replace(Oy, "").split(Ry).forEach(n => {
    if (n) {
      const r = n.split(Ay);
      r.length > 1 && (e[r[0].trim()] = r[1].trim())
    }
  }), e
}

function Ja(t) {
  let e = "";
  if (Ke(t)) e = t;
  else if (le(t))
    for (let n = 0; n < t.length; n++) {
      const r = Ja(t[n]);
      r && (e += r + " ")
    } else if (Me(t))
      for (const n in t) t[n] && (e += n + " ");
  return e.trim()
}
const Ny = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  $y = Tu(Ny);

function pg(t) {
  return !!t || t === ""
}

function Dy(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++) n = ku(t[r], e[r]);
  return n
}

function ku(t, e) {
  if (t === e) return !0;
  let n = Ph(t),
    r = Ph(e);
  if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
  if (n = dr(t), r = dr(e), n || r) return t === e;
  if (n = le(t), r = le(e), n || r) return n && r ? Dy(t, e) : !1;
  if (n = Me(t), r = Me(e), n || r) {
    if (!n || !r) return !1;
    const i = Object.keys(t).length,
      s = Object.keys(e).length;
    if (i !== s) return !1;
    for (const o in t) {
      const l = t.hasOwnProperty(o),
        a = e.hasOwnProperty(o);
      if (l && !a || !l && a || !ku(t[o], e[o])) return !1
    }
  }
  return String(t) === String(e)
}
const gg = t => !!(t && t.__v_isRef === !0),
  lf = t => Ke(t) ? t : t == null ? "" : le(t) || Me(t) && (t.toString === fg || !ce(t.toString)) ? gg(t) ? lf(t.value) : JSON.stringify(t, _g, 2) : String(t),
  _g = (t, e) => gg(e) ? _g(t, e.value) : vs(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, i], s) => (n[yc(r, s) + " =>"] = i, n), {})
  } : ag(e) ? {
    [`Set(${e.size})`]: [...e.values()].map(n => yc(n))
  } : dr(e) ? yc(e) : Me(e) && !le(e) && !ug(e) ? String(e) : e,
  yc = (t, e = "") => {
    var n;
    return dr(t) ? `Symbol(${(n=t.description)!=null?n:e})` : t
  };
let qt;
class mg {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = qt, !e && qt && (this.index = (qt.scopes || (qt.scopes = [])).push(this) - 1)
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
      const n = qt;
      try {
        return qt = this, e()
      } finally {
        qt = n
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = qt, qt = this)
  }
  off() {
    this._on > 0 && --this._on === 0 && (qt = this.prevScope, this.prevScope = void 0)
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

function Ly(t) {
  return new mg(t)
}

function yg() {
  return qt
}
let Ue;
const vc = new WeakSet;
class vg {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qt && qt.active && qt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, vc.has(this) && (vc.delete(this), this.trigger()))
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wg(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Ah(this), xg(this);
    const e = Ue,
      n = Gn;
    Ue = this, Gn = !0;
    try {
      return this.fn()
    } finally {
      Tg(this), Ue = e, Gn = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) Au(e);
      this.deps = this.depsTail = void 0, Ah(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? vc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    af(this) && this.run()
  }
  get dirty() {
    return af(this)
  }
}
let bg = 0,
  To, So;

function wg(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = So, So = t;
    return
  }
  t.next = To, To = t
}

function Pu() {
  bg++
}

function Ru() {
  if (--bg > 0) return;
  if (So) {
    let e = So;
    for (So = void 0; e;) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n
    }
  }
  let t;
  for (; To;) {
    let e = To;
    for (To = void 0; e;) {
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

function xg(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e
}

function Tg(t) {
  let e, n = t.depsTail,
    r = n;
  for (; r;) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Au(r), Iy(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i
  }
  t.deps = e, t.depsTail = n
}

function af(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Sg(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty
}

function Sg(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Vo) || (t.globalVersion = Vo, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !af(t)))) return;
  t.flags |= 2;
  const e = t.dep,
    n = Ue,
    r = Gn;
  Ue = t, Gn = !0;
  try {
    xg(t);
    const i = t.fn(t._value);
    (e.version === 0 || ei(i, t._value)) && (t.flags |= 128, t._value = i, e.version++)
  } catch (i) {
    throw e.version++, i
  } finally {
    Ue = n, Gn = r, Tg(t), t.flags &= -3
  }
}

function Au(t, e = !1) {
  const {
    dep: n,
    prevSub: r,
    nextSub: i
  } = t;
  if (r && (r.nextSub = i, t.prevSub = void 0), i && (i.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) Au(s, !0)
  }!e && !--n.sc && n.map && n.map.delete(n.key)
}

function Iy(t) {
  const {
    prevDep: e,
    nextDep: n
  } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0)
}
let Gn = !0;
const Eg = [];

function Lr() {
  Eg.push(Gn), Gn = !1
}

function Ir() {
  const t = Eg.pop();
  Gn = t === void 0 ? !0 : t
}

function Ah(t) {
  const {
    cleanup: e
  } = t;
  if (t.cleanup = void 0, e) {
    const n = Ue;
    Ue = void 0;
    try {
      e()
    } finally {
      Ue = n
    }
  }
}
let Vo = 0;
class Hy {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class Ou {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
  }
  track(e) {
    if (!Ue || !Gn || Ue === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ue) n = this.activeLink = new Hy(Ue, this), Ue.deps ? (n.prevDep = Ue.depsTail, Ue.depsTail.nextDep = n, Ue.depsTail = n) : Ue.deps = Ue.depsTail = n, Cg(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ue.depsTail, n.nextDep = void 0, Ue.depsTail.nextDep = n, Ue.depsTail = n, Ue.deps === n && (Ue.deps = r)
    }
    return n
  }
  trigger(e) {
    this.version++, Vo++, this.notify(e)
  }
  notify(e) {
    Pu();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Ru()
    }
  }
}

function Cg(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep) Cg(r)
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t
  }
}
const _a = new WeakMap,
  Ni = Symbol(""),
  cf = Symbol(""),
  Go = Symbol("");

function Mt(t, e, n) {
  if (Gn && Ue) {
    let r = _a.get(t);
    r || _a.set(t, r = new Map);
    let i = r.get(n);
    i || (r.set(n, i = new Ou), i.map = r, i.key = n), i.track()
  }
}

function Cr(t, e, n, r, i, s) {
  const o = _a.get(t);
  if (!o) {
    Vo++;
    return
  }
  const l = a => {
    a && a.trigger()
  };
  if (Pu(), e === "clear") o.forEach(l);
  else {
    const a = le(t),
      f = a && Ya(n);
    if (a && n === "length") {
      const c = Number(r);
      o.forEach((u, d) => {
        (d === "length" || d === Go || !dr(d) && d >= c) && l(u)
      })
    } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(Go)), e) {
      case "add":
        a ? f && l(o.get("length")) : (l(o.get(Ni)), vs(t) && l(o.get(cf)));
        break;
      case "delete":
        a || (l(o.get(Ni)), vs(t) && l(o.get(cf)));
        break;
      case "set":
        vs(t) && l(o.get(Ni));
        break
    }
  }
  Ru()
}

function Fy(t, e) {
  const n = _a.get(t);
  return n && n.get(e)
}

function es(t) {
  const e = Pe(t);
  return e === t ? e : (Mt(e, "iterate", Go), bn(t) ? e : e.map(Yn))
}

function Qa(t) {
  return Mt(t = Pe(t), "iterate", Go), t
}

function Gr(t, e) {
  return pr(t) ? Ms(ti(t) ? Yn(e) : e) : Yn(e)
}
const By = {
  __proto__: null,
  [Symbol.iterator]() {
    return bc(this, Symbol.iterator, t => Gr(this, t))
  },
  concat(...t) {
    return es(this).concat(...t.map(e => le(e) ? es(e) : e))
  },
  entries() {
    return bc(this, "entries", t => (t[1] = Gr(this, t[1]), t))
  },
  every(t, e) {
    return vr(this, "every", t, e, void 0, arguments)
  },
  filter(t, e) {
    return vr(this, "filter", t, e, n => n.map(r => Gr(this, r)), arguments)
  },
  find(t, e) {
    return vr(this, "find", t, e, n => Gr(this, n), arguments)
  },
  findIndex(t, e) {
    return vr(this, "findIndex", t, e, void 0, arguments)
  },
  findLast(t, e) {
    return vr(this, "findLast", t, e, n => Gr(this, n), arguments)
  },
  findLastIndex(t, e) {
    return vr(this, "findLastIndex", t, e, void 0, arguments)
  },
  forEach(t, e) {
    return vr(this, "forEach", t, e, void 0, arguments)
  },
  includes(...t) {
    return wc(this, "includes", t)
  },
  indexOf(...t) {
    return wc(this, "indexOf", t)
  },
  join(t) {
    return es(this).join(t)
  },
  lastIndexOf(...t) {
    return wc(this, "lastIndexOf", t)
  },
  map(t, e) {
    return vr(this, "map", t, e, void 0, arguments)
  },
  pop() {
    return eo(this, "pop")
  },
  push(...t) {
    return eo(this, "push", t)
  },
  reduce(t, ...e) {
    return Oh(this, "reduce", t, e)
  },
  reduceRight(t, ...e) {
    return Oh(this, "reduceRight", t, e)
  },
  shift() {
    return eo(this, "shift")
  },
  some(t, e) {
    return vr(this, "some", t, e, void 0, arguments)
  },
  splice(...t) {
    return eo(this, "splice", t)
  },
  toReversed() {
    return es(this).toReversed()
  },
  toSorted(t) {
    return es(this).toSorted(t)
  },
  toSpliced(...t) {
    return es(this).toSpliced(...t)
  },
  unshift(...t) {
    return eo(this, "unshift", t)
  },
  values() {
    return bc(this, "values", t => Gr(this, t))
  }
};

function bc(t, e, n) {
  const r = Qa(t),
    i = r[e]();
  return r !== t && !bn(t) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s
  }), i
}
const Uy = Array.prototype;

function vr(t, e, n, r, i, s) {
  const o = Qa(t),
    l = o !== t && !bn(t),
    a = o[e];
  if (a !== Uy[e]) {
    const u = a.apply(t, s);
    return l ? Yn(u) : u
  }
  let f = n;
  o !== t && (l ? f = function(u, d) {
    return n.call(this, Gr(t, u), d, t)
  } : n.length > 2 && (f = function(u, d) {
    return n.call(this, u, d, t)
  }));
  const c = a.call(o, f, r);
  return l && i ? i(c) : c
}

function Oh(t, e, n, r) {
  const i = Qa(t);
  let s = n;
  return i !== t && (bn(t) ? n.length > 3 && (s = function(o, l, a) {
    return n.call(this, o, l, a, t)
  }) : s = function(o, l, a) {
    return n.call(this, o, Gr(t, l), a, t)
  }), i[e](s, ...r)
}

function wc(t, e, n) {
  const r = Pe(t);
  Mt(r, "iterate", Go);
  const i = r[e](...n);
  return (i === -1 || i === !1) && Za(n[0]) ? (n[0] = Pe(n[0]), r[e](...n)) : i
}

function eo(t, e, n = []) {
  Lr(), Pu();
  const r = Pe(t)[e].apply(t, n);
  return Ru(), Ir(), r
}
const jy = Tu("__proto__,__v_isRef,__isVue"),
  kg = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(dr));

function Wy(t) {
  dr(t) || (t = String(t));
  const e = Pe(this);
  return Mt(e, "has", t), e.hasOwnProperty(t)
}
class Pg {
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
    if (n === "__v_raw") return r === (i ? s ? Zy : Mg : s ? Og : Ag).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const o = le(e);
    if (!i) {
      let a;
      if (o && (a = By[n])) return a;
      if (n === "hasOwnProperty") return Wy
    }
    const l = Reflect.get(e, n, lt(e) ? e : r);
    if ((dr(n) ? kg.has(n) : jy(n)) || (i || Mt(e, "get", n), s)) return l;
    if (lt(l)) {
      const a = o && Ya(n) ? l : l.value;
      return i && Me(a) ? uf(a) : a
    }
    return Me(l) ? i ? uf(l) : ui(l) : l
  }
}
class Rg extends Pg {
  constructor(e = !1) {
    super(!1, e)
  }
  set(e, n, r, i) {
    let s = e[n];
    const o = le(e) && Ya(n);
    if (!this._isShallow) {
      const f = pr(s);
      if (!bn(r) && !pr(r) && (s = Pe(s), r = Pe(r)), !o && lt(s) && !lt(r)) return f || (s.value = r), !0
    }
    const l = o ? Number(n) < e.length : De(e, n),
      a = Reflect.set(e, n, r, lt(e) ? e : i);
    return e === Pe(i) && (l ? ei(r, s) && Cr(e, "set", n, r) : Cr(e, "add", n, r)), a
  }
  deleteProperty(e, n) {
    const r = De(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && r && Cr(e, "delete", n, void 0), i
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!dr(n) || !kg.has(n)) && Mt(e, "has", n), r
  }
  ownKeys(e) {
    return Mt(e, "iterate", le(e) ? "length" : Ni), Reflect.ownKeys(e)
  }
}
class zy extends Pg {
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
const Vy = new Rg,
  Gy = new zy,
  Yy = new Rg(!0);
const ff = t => t,
  Sl = t => Reflect.getPrototypeOf(t);

function Xy(t, e, n) {
  return function(...r) {
    const i = this.__v_raw,
      s = Pe(i),
      o = vs(s),
      l = t === "entries" || t === Symbol.iterator && o,
      a = t === "keys" && o,
      f = i[t](...r),
      c = n ? ff : e ? Ms : Yn;
    return !e && Mt(s, "iterate", a ? cf : Ni), _t(Object.create(f), {
      next() {
        const {
          value: u,
          done: d
        } = f.next();
        return d ? {
          value: u,
          done: d
        } : {
          value: l ? [c(u[0]), c(u[1])] : c(u),
          done: d
        }
      }
    })
  }
}

function El(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this
  }
}

function Ky(t, e) {
  const n = {
    get(i) {
      const s = this.__v_raw,
        o = Pe(s),
        l = Pe(i);
      t || (ei(i, l) && Mt(o, "get", i), Mt(o, "get", l));
      const {
        has: a
      } = Sl(o), f = e ? ff : t ? Ms : Yn;
      if (a.call(o, i)) return f(s.get(i));
      if (a.call(o, l)) return f(s.get(l));
      s !== o && s.get(i)
    },
    get size() {
      const i = this.__v_raw;
      return !t && Mt(Pe(i), "iterate", Ni), i.size
    },
    has(i) {
      const s = this.__v_raw,
        o = Pe(s),
        l = Pe(i);
      return t || (ei(i, l) && Mt(o, "has", i), Mt(o, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l)
    },
    forEach(i, s) {
      const o = this,
        l = o.__v_raw,
        a = Pe(l),
        f = e ? ff : t ? Ms : Yn;
      return !t && Mt(a, "iterate", Ni), l.forEach((c, u) => i.call(s, f(c), f(u), o))
    }
  };
  return _t(n, t ? {
    add: El("add"),
    set: El("set"),
    delete: El("delete"),
    clear: El("clear")
  } : {
    add(i) {
      !e && !bn(i) && !pr(i) && (i = Pe(i));
      const s = Pe(this);
      return Sl(s).has.call(s, i) || (s.add(i), Cr(s, "add", i, i)), this
    },
    set(i, s) {
      !e && !bn(s) && !pr(s) && (s = Pe(s));
      const o = Pe(this),
        {
          has: l,
          get: a
        } = Sl(o);
      let f = l.call(o, i);
      f || (i = Pe(i), f = l.call(o, i));
      const c = a.call(o, i);
      return o.set(i, s), f ? ei(s, c) && Cr(o, "set", i, s) : Cr(o, "add", i, s), this
    },
    delete(i) {
      const s = Pe(this),
        {
          has: o,
          get: l
        } = Sl(s);
      let a = o.call(s, i);
      a || (i = Pe(i), a = o.call(s, i)), l && l.call(s, i);
      const f = s.delete(i);
      return a && Cr(s, "delete", i, void 0), f
    },
    clear() {
      const i = Pe(this),
        s = i.size !== 0,
        o = i.clear();
      return s && Cr(i, "clear", void 0, void 0), o
    }
  }), ["keys", "values", "entries", Symbol.iterator].forEach(i => {
    n[i] = Xy(i, t, e)
  }), n
}

function Mu(t, e) {
  const n = Ky(t, e);
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(De(n, i) && i in r ? n : r, i, s)
}
const qy = {
    get: Mu(!1, !1)
  },
  Jy = {
    get: Mu(!1, !0)
  },
  Qy = {
    get: Mu(!0, !1)
  };
const Ag = new WeakMap,
  Og = new WeakMap,
  Mg = new WeakMap,
  Zy = new WeakMap;

function ev(t) {
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

function tv(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ev(Ey(t))
}

function ui(t) {
  return pr(t) ? t : Nu(t, !1, Vy, qy, Ag)
}

function Ar(t) {
  return Nu(t, !1, Yy, Jy, Og)
}

function uf(t) {
  return Nu(t, !0, Gy, Qy, Mg)
}

function Nu(t, e, n, r, i) {
  if (!Me(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
  const s = tv(t);
  if (s === 0) return t;
  const o = i.get(t);
  if (o) return o;
  const l = new Proxy(t, s === 2 ? r : n);
  return i.set(t, l), l
}

function ti(t) {
  return pr(t) ? ti(t.__v_raw) : !!(t && t.__v_isReactive)
}

function pr(t) {
  return !!(t && t.__v_isReadonly)
}

function bn(t) {
  return !!(t && t.__v_isShallow)
}

function Za(t) {
  return t ? !!t.__v_raw : !1
}

function Pe(t) {
  const e = t && t.__v_raw;
  return e ? Pe(e) : t
}

function nv(t) {
  return !De(t, "__v_skip") && Object.isExtensible(t) && hg(t, "__v_skip", !0), t
}
const Yn = t => Me(t) ? ui(t) : t,
  Ms = t => Me(t) ? uf(t) : t;

function lt(t) {
  return t ? t.__v_isRef === !0 : !1
}

function Ns(t) {
  return Ng(t, !1)
}

function $s(t) {
  return Ng(t, !0)
}

function Ng(t, e) {
  return lt(t) ? t : new rv(t, e)
}
class rv {
  constructor(e, n) {
    this.dep = new Ou, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : Pe(e), this._value = n ? e : Yn(e), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(e) {
    const n = this._rawValue,
      r = this.__v_isShallow || bn(e) || pr(e);
    e = r ? e : Pe(e), ei(e, n) && (this._rawValue = e, this._value = r ? e : Yn(e), this.dep.trigger())
  }
}

function dt(t) {
  return lt(t) ? t.value : t
}

function Ik(t) {
  return ce(t) ? t() : dt(t)
}
const iv = {
  get: (t, e, n) => e === "__v_raw" ? t : dt(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return lt(i) && !lt(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r)
  }
};

function $g(t) {
  return ti(t) ? t : new Proxy(t, iv)
}
class sv {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._raw = Pe(e);
    let i = !0,
      s = e;
    if (!le(e) || !Ya(String(n)))
      do i = !Za(s) || bn(s); while (i && (s = s.__v_raw));
    this._shallow = i
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = dt(e)), this._value = e === void 0 ? this._defaultValue : e
  }
  set value(e) {
    if (this._shallow && lt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (lt(n)) {
        n.value = e;
        return
      }
    }
    this._object[this._key] = e
  }
  get dep() {
    return Fy(this._raw, this._key)
  }
}
class ov {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
  }
  get value() {
    return this._value = this._getter()
  }
}

function Dg(t, e, n) {
  return lt(t) ? t : ce(t) ? new ov(t) : Me(t) && arguments.length > 1 ? lv(t, e, n) : Ns(t)
}

function lv(t, e, n) {
  return new sv(t, e, n)
}
class av {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Ou(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && Ue !== this) return wg(this, !0), !0
  }
  get value() {
    const e = this.dep.track();
    return Sg(this), e && (e.version = this.dep.version), this._value
  }
  set value(e) {
    this.setter && this.setter(e)
  }
}

function cv(t, e, n = !1) {
  let r, i;
  return ce(t) ? r = t : (r = t.get, i = t.set), new av(r, i, n)
}
const Cl = {},
  ma = new WeakMap;
let Ti;

function fv(t, e = !1, n = Ti) {
  if (n) {
    let r = ma.get(n);
    r || ma.set(n, r = []), r.push(t)
  }
}

function uv(t, e, n = Fe) {
  const {
    immediate: r,
    deep: i,
    once: s,
    scheduler: o,
    augmentJob: l,
    call: a
  } = n, f = m => i ? m : bn(m) || i === !1 || i === 0 ? kr(m, 1) : kr(m);
  let c, u, d, h, p = !1,
    g = !1;
  if (lt(t) ? (u = () => t.value, p = bn(t)) : ti(t) ? (u = () => f(t), p = !0) : le(t) ? (g = !0, p = t.some(m => ti(m) || bn(m)), u = () => t.map(m => {
      if (lt(m)) return m.value;
      if (ti(m)) return f(m);
      if (ce(m)) return a ? a(m, 2) : m()
    })) : ce(t) ? e ? u = a ? () => a(t, 2) : t : u = () => {
      if (d) {
        Lr();
        try {
          d()
        } finally {
          Ir()
        }
      }
      const m = Ti;
      Ti = c;
      try {
        return a ? a(t, 3, [h]) : t(h)
      } finally {
        Ti = m
      }
    } : u = ur, e && i) {
    const m = u,
      w = i === !0 ? 1 / 0 : i;
    u = () => kr(m(), w)
  }
  const y = yg(),
    b = () => {
      c.stop(), y && y.active && Eu(y.effects, c)
    };
  if (s && e) {
    const m = e;
    e = (...w) => {
      m(...w), b()
    }
  }
  let v = g ? new Array(t.length).fill(Cl) : Cl;
  const _ = m => {
    if (!(!(c.flags & 1) || !c.dirty && !m))
      if (e) {
        const w = c.run();
        if (i || p || (g ? w.some((T, E) => ei(T, v[E])) : ei(w, v))) {
          d && d();
          const T = Ti;
          Ti = c;
          try {
            const E = [w, v === Cl ? void 0 : g && v[0] === Cl ? [] : v, h];
            v = w, a ? a(e, 3, E) : e(...E)
          } finally {
            Ti = T
          }
        }
      } else c.run()
  };
  return l && l(_), c = new vg(u), c.scheduler = o ? () => o(_, !1) : _, h = m => fv(m, !1, c), d = c.onStop = () => {
    const m = ma.get(c);
    if (m) {
      if (a) a(m, 4);
      else
        for (const w of m) w();
      ma.delete(c)
    }
  }, e ? r ? _(!0) : v = c.run() : o ? o(_.bind(null, !0), !0) : c.run(), b.pause = c.pause.bind(c), b.resume = c.resume.bind(c), b.stop = b, b
}

function kr(t, e = 1 / 0, n) {
  if (e <= 0 || !Me(t) || t.__v_skip || (n = n || new Map, (n.get(t) || 0) >= e)) return t;
  if (n.set(t, e), e--, lt(t)) kr(t.value, e, n);
  else if (le(t))
    for (let r = 0; r < t.length; r++) kr(t[r], e, n);
  else if (ag(t) || vs(t)) t.forEach(r => {
    kr(r, e, n)
  });
  else if (ug(t)) {
    for (const r in t) kr(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, r) && kr(t[r], e, n)
  }
  return t
}

function gl(t, e, n, r) {
  try {
    return r ? t(...r) : t()
  } catch (i) {
    _l(i, e, n)
  }
}

function Xn(t, e, n, r) {
  if (ce(t)) {
    const i = gl(t, e, n, r);
    return i && cg(i) && i.catch(s => {
      _l(s, e, n)
    }), i
  }
  if (le(t)) {
    const i = [];
    for (let s = 0; s < t.length; s++) i.push(Xn(t[s], e, n, r));
    return i
  }
}

function _l(t, e, n, r = !0) {
  const i = e ? e.vnode : null,
    {
      errorHandler: s,
      throwUnhandledErrorInProduction: o
    } = e && e.appContext.config || Fe;
  if (e) {
    let l = e.parent;
    const a = e.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l;) {
      const c = l.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](t, a, f) === !1) return
      }
      l = l.parent
    }
    if (s) {
      Lr(), gl(s, null, 10, [t, a, f]), Ir();
      return
    }
  }
  hv(t, n, i, r, o)
}

function hv(t, e, n, r = !0, i = !1) {
  if (i) throw t;
  console.error(t)
}
const Yt = [];
let er = -1;
const bs = [];
let Yr = null,
  ls = 0;
const Lg = Promise.resolve();
let ya = null;

function Yo(t) {
  const e = ya || Lg;
  return t ? e.then(this ? t.bind(this) : t) : e
}

function dv(t) {
  let e = er + 1,
    n = Yt.length;
  for (; e < n;) {
    const r = e + n >>> 1,
      i = Yt[r],
      s = Xo(i);
    s < t || s === t && i.flags & 2 ? e = r + 1 : n = r
  }
  return e
}

function $u(t) {
  if (!(t.flags & 1)) {
    const e = Xo(t),
      n = Yt[Yt.length - 1];
    !n || !(t.flags & 2) && e >= Xo(n) ? Yt.push(t) : Yt.splice(dv(e), 0, t), t.flags |= 1, Ig()
  }
}

function Ig() {
  ya || (ya = Lg.then(Hg))
}

function hf(t) {
  le(t) ? bs.push(...t) : Yr && t.id === -1 ? Yr.splice(ls + 1, 0, t) : t.flags & 1 || (bs.push(t), t.flags |= 1), Ig()
}

function Mh(t, e, n = er + 1) {
  for (; n < Yt.length; n++) {
    const r = Yt[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid) continue;
      Yt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
    }
  }
}

function va(t) {
  if (bs.length) {
    const e = [...new Set(bs)].sort((n, r) => Xo(n) - Xo(r));
    if (bs.length = 0, Yr) {
      Yr.push(...e);
      return
    }
    for (Yr = e, ls = 0; ls < Yr.length; ls++) {
      const n = Yr[ls];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
    }
    Yr = null, ls = 0
  }
}
const Xo = t => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;

function Hg(t) {
  try {
    for (er = 0; er < Yt.length; er++) {
      const e = Yt[er];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), gl(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2))
    }
  } finally {
    for (; er < Yt.length; er++) {
      const e = Yt[er];
      e && (e.flags &= -2)
    }
    er = -1, Yt.length = 0, va(), ya = null, (Yt.length || bs.length) && Hg()
  }
}
let _n = null,
  Fg = null;

function ba(t) {
  const e = _n;
  return _n = t, Fg = t && t.type.__scopeId || null, e
}

function Du(t, e = _n, n) {
  if (!e || t._n) return t;
  const r = (...i) => {
    r._d && Ea(-1);
    const s = ba(e);
    let o;
    try {
      o = t(...i)
    } finally {
      ba(s), r._d && Ea(1)
    }
    return o
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function Hk(t, e) {
  if (_n === null) return t;
  const n = ic(_n),
    r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, o, l, a = Fe] = e[i];
    s && (ce(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && kr(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }))
  }
  return t
}

function tr(t, e, n, r) {
  const i = t.dirs,
    s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[r];
    a && (Lr(), Xn(a, n, 8, [t.el, l, t, e]), Ir())
  }
}

function $i(t, e) {
  if (Nt) {
    let n = Nt.provides;
    const r = Nt.parent && Nt.parent.provides;
    r === n && (n = Nt.provides = Object.create(r)), n[t] = e
  }
}

function $n(t, e, n = !1) {
  const r = Xs();
  if (r || Di) {
    let i = Di ? Di._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && ce(e) ? e.call(r && r.proxy) : e
  }
}

function Bg() {
  return !!(Xs() || Di)
}
const pv = Symbol.for("v-scx"),
  gv = () => $n(pv);

function Fk(t, e) {
  return Lu(t, null, e)
}

function ws(t, e, n) {
  return Lu(t, e, n)
}

function Lu(t, e, n = Fe) {
  const {
    immediate: r,
    deep: i,
    flush: s,
    once: o
  } = n, l = _t({}, n), a = e && r || !e && s !== "post";
  let f;
  if (qo) {
    if (s === "sync") {
      const h = gv();
      f = h.__watcherHandles || (h.__watcherHandles = [])
    } else if (!a) {
      const h = () => {};
      return h.stop = ur, h.resume = ur, h.pause = ur, h
    }
  }
  const c = Nt;
  l.call = (h, p, g) => Xn(h, c, p, g);
  let u = !1;
  s === "post" ? l.scheduler = h => {
    ht(h, c && c.suspense)
  } : s !== "sync" && (u = !0, l.scheduler = (h, p) => {
    p ? h() : $u(h)
  }), l.augmentJob = h => {
    e && (h.flags |= 4), u && (h.flags |= 2, c && (h.id = c.uid, h.i = c))
  };
  const d = uv(t, e, l);
  return qo && (f ? f.push(d) : a && d()), d
}

function _v(t, e, n) {
  const r = this.proxy,
    i = Ke(t) ? t.includes(".") ? Ug(r, t) : () => r[t] : t.bind(r, r);
  let s;
  ce(e) ? s = e : (s = e.handler, n = e);
  const o = vl(this),
    l = Lu(i, s.bind(r), n);
  return o(), l
}

function Ug(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r
  }
}
const mv = Symbol("_vte"),
  jg = t => t.__isTeleport,
  nr = Symbol("_leaveCb"),
  to = Symbol("_enterCb");

function yv() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return ml(() => {
    t.isMounted = !0
  }), yl(() => {
    t.isUnmounting = !0
  }), t
}
const En = [Function, Array],
  Wg = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: En,
    onEnter: En,
    onAfterEnter: En,
    onEnterCancelled: En,
    onBeforeLeave: En,
    onLeave: En,
    onAfterLeave: En,
    onLeaveCancelled: En,
    onBeforeAppear: En,
    onAppear: En,
    onAfterAppear: En,
    onAppearCancelled: En
  },
  zg = t => {
    const e = t.subTree;
    return e.component ? zg(e.component) : e
  },
  vv = {
    name: "BaseTransition",
    props: Wg,
    setup(t, {
      slots: e
    }) {
      const n = Xs(),
        r = yv();
      return () => {
        const i = e.default && Yg(e.default(), !0);
        if (!i || !i.length) return;
        const s = Vg(i),
          o = Pe(t),
          {
            mode: l
          } = o;
        if (r.isLeaving) return xc(s);
        const a = Nh(s);
        if (!a) return xc(s);
        let f = df(a, o, r, n, u => f = u);
        a.type !== gt && Ds(a, f);
        let c = n.subTree && Nh(n.subTree);
        if (c && c.type !== gt && !Wn(c, a) && zg(n).type !== gt) {
          let u = df(c, o, r, n);
          if (Ds(c, u), l === "out-in" && a.type !== gt) return r.isLeaving = !0, u.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, c = void 0
          }, xc(s);
          l === "in-out" && a.type !== gt ? u.delayLeave = (d, h, p) => {
            const g = Gg(r, c);
            g[String(c.key)] = c, d[nr] = () => {
              h(), d[nr] = void 0, delete f.delayedLeave, c = void 0
            }, f.delayedLeave = () => {
              p(), delete f.delayedLeave, c = void 0
            }
          } : c = void 0
        } else c && (c = void 0);
        return s
      }
    }
  };

function Vg(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const n of t)
      if (n.type !== gt) {
        e = n;
        break
      }
  }
  return e
}
const bv = vv;

function Gg(t, e) {
  const {
    leavingVNodes: n
  } = t;
  let r = n.get(e.type);
  return r || (r = Object.create(null), n.set(e.type, r)), r
}

function df(t, e, n, r, i) {
  const {
    appear: s,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: h,
    onAfterLeave: p,
    onLeaveCancelled: g,
    onBeforeAppear: y,
    onAppear: b,
    onAfterAppear: v,
    onAppearCancelled: _
  } = e, m = String(t.key), w = Gg(n, t), T = (C, P) => {
    C && Xn(C, r, 9, P)
  }, E = (C, P) => {
    const D = P[1];
    T(C, P), le(C) ? C.every(A => A.length <= 1) && D() : C.length <= 1 && D()
  }, R = {
    mode: o,
    persisted: l,
    beforeEnter(C) {
      let P = a;
      if (!n.isMounted)
        if (s) P = y || a;
        else return;
      C[nr] && C[nr](!0);
      const D = w[m];
      D && Wn(t, D) && D.el[nr] && D.el[nr](), T(P, [C])
    },
    enter(C) {
      if (w[m] === t) return;
      let P = f,
        D = c,
        A = u;
      if (!n.isMounted)
        if (s) P = b || f, D = v || c, A = _ || u;
        else return;
      let $ = !1;
      C[to] = G => {
        $ || ($ = !0, G ? T(A, [C]) : T(D, [C]), R.delayedLeave && R.delayedLeave(), C[to] = void 0)
      };
      const z = C[to].bind(null, !1);
      P ? E(P, [C, z]) : z()
    },
    leave(C, P) {
      const D = String(t.key);
      if (C[to] && C[to](!0), n.isUnmounting) return P();
      T(d, [C]);
      let A = !1;
      C[nr] = z => {
        A || (A = !0, P(), z ? T(g, [C]) : T(p, [C]), C[nr] = void 0, w[D] === t && delete w[D])
      };
      const $ = C[nr].bind(null, !1);
      w[D] = t, h ? E(h, [C, $]) : $()
    },
    clone(C) {
      const P = df(C, e, n, r, i);
      return i && i(P), P
    }
  };
  return R
}

function xc(t) {
  if (ec(t)) return t = gr(t), t.children = null, t
}

function Nh(t) {
  if (!ec(t)) return jg(t.type) && t.children ? Vg(t.children) : t;
  if (t.component) return t.component.subTree;
  const {
    shapeFlag: e,
    children: n
  } = t;
  if (n) {
    if (e & 16) return n[0];
    if (e & 32 && ce(n.default)) return n.default()
  }
}

function Ds(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Ds(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function Yg(t, e = !1, n) {
  let r = [],
    i = 0;
  for (let s = 0; s < t.length; s++) {
    let o = t[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === fn ? (o.patchFlag & 128 && i++, r = r.concat(Yg(o.children, e, l))) : (e || o.type !== gt) && r.push(l != null ? gr(o, {
      key: l
    }) : o)
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r
}

function hi(t, e) {
  return ce(t) ? _t({
    name: t.name
  }, e, {
    setup: t
  }) : t
}

function Xg(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0]
}

function $h(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable)
}
const wa = new WeakMap;

function xs(t, e, n, r, i = !1) {
  if (le(t)) {
    t.forEach((g, y) => xs(g, e && (le(e) ? e[y] : e), n, r, i));
    return
  }
  if (ni(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && xs(t, e, n, r.component.subTree);
    return
  }
  const s = r.shapeFlag & 4 ? ic(r.component) : r.el,
    o = i ? null : s,
    {
      i: l,
      r: a
    } = t,
    f = e && e.r,
    c = l.refs === Fe ? l.refs = {} : l.refs,
    u = l.setupState,
    d = Pe(u),
    h = u === Fe ? lg : g => $h(c, g) ? !1 : De(d, g),
    p = (g, y) => !(y && $h(c, y));
  if (f != null && f !== a) {
    if (Dh(e), Ke(f)) c[f] = null, h(f) && (u[f] = null);
    else if (lt(f)) {
      const g = e;
      p(f, g.k) && (f.value = null), g.k && (c[g.k] = null)
    }
  }
  if (ce(a)) gl(a, l, 12, [o, c]);
  else {
    const g = Ke(a),
      y = lt(a);
    if (g || y) {
      const b = () => {
        if (t.f) {
          const v = g ? h(a) ? u[a] : c[a] : p() || !t.k ? a.value : c[t.k];
          if (i) le(v) && Eu(v, s);
          else if (le(v)) v.includes(s) || v.push(s);
          else if (g) c[a] = [s], h(a) && (u[a] = c[a]);
          else {
            const _ = [s];
            p(a, t.k) && (a.value = _), t.k && (c[t.k] = _)
          }
        } else g ? (c[a] = o, h(a) && (u[a] = o)) : y && (p(a, t.k) && (a.value = o), t.k && (c[t.k] = o))
      };
      if (o) {
        const v = () => {
          b(), wa.delete(t)
        };
        v.id = -1, wa.set(t, v), ht(v, n)
      } else Dh(t), b()
    }
  }
}

function Dh(t) {
  const e = wa.get(t);
  e && (e.flags |= 8, wa.delete(t))
}
let Lh = !1;
const ts = () => {
    Lh || (console.error("Hydration completed but contains mismatches."), Lh = !0)
  },
  wv = t => t.namespaceURI.includes("svg") && t.tagName !== "foreignObject",
  xv = t => t.namespaceURI.includes("MathML"),
  kl = t => {
    if (t.nodeType === 1) {
      if (wv(t)) return "svg";
      if (xv(t)) return "mathml"
    }
  },
  Pl = t => t.nodeType === 8;

function Tv(t) {
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
      createComment: f
    }
  } = t, c = (_, m) => {
    if (!m.hasChildNodes()) {
      n(null, _, m), va(), m._vnode = _;
      return
    }
    u(m.firstChild, _, null, null, null), va(), m._vnode = _
  }, u = (_, m, w, T, E, R = !1) => {
    R = R || !!m.dynamicChildren;
    const C = Pl(_) && _.data === "[",
      P = () => g(_, m, w, T, E, C),
      {
        type: D,
        ref: A,
        shapeFlag: $,
        patchFlag: z
      } = m;
    let G = _.nodeType;
    m.el = _, z === -2 && (R = !1, m.dynamicChildren = null);
    let L = null;
    switch (D) {
      case Li:
        G !== 3 ? m.children === "" ? (a(m.el = i(""), o(_), _), L = _) : L = P() : (_.data !== m.children && (ts(), _.data = m.children), L = s(_));
        break;
      case gt:
        v(_) ? (L = s(_), b(m.el = _.content.firstChild, _, w)) : G !== 8 || C ? L = P() : L = s(_);
        break;
      case Co:
        if (C && (_ = s(_), G = _.nodeType), G === 1 || G === 3) {
          L = _;
          const B = !m.children.length;
          for (let F = 0; F < m.staticCount; F++) B && (m.children += L.nodeType === 1 ? L.outerHTML : L.data), F === m.staticCount - 1 && (m.anchor = L), L = s(L);
          return C ? s(L) : L
        } else P();
        break;
      case fn:
        C ? L = p(_, m, w, T, E, R) : L = P();
        break;
      default:
        if ($ & 1)(G !== 1 || m.type.toLowerCase() !== _.tagName.toLowerCase()) && !v(_) ? L = P() : L = d(_, m, w, T, E, R);
        else if ($ & 6) {
          m.slotScopeIds = E;
          const B = o(_);
          if (C ? L = y(_) : Pl(_) && _.data === "teleport start" ? L = y(_, _.data, "teleport end") : L = s(_), e(m, B, null, w, T, kl(B), R), ni(m) && !m.type.__asyncResolved) {
            let F;
            C ? (F = Ze(fn), F.anchor = L ? L.previousSibling : B.lastChild) : F = _.nodeType === 3 ? S_("") : Ze("div"), F.el = _, m.component.subTree = F
          }
        } else $ & 64 ? G !== 8 ? L = P() : L = m.type.hydrate(_, m, w, T, E, R, t, h) : $ & 128 && (L = m.type.hydrate(_, m, w, T, kl(o(_)), E, R, t, u))
    }
    return A != null && xs(A, null, T, m), L
  }, d = (_, m, w, T, E, R) => {
    R = R || !!m.dynamicChildren;
    const {
      type: C,
      props: P,
      patchFlag: D,
      shapeFlag: A,
      dirs: $,
      transition: z
    } = m, G = C === "input" || C === "option";
    if (G || D !== -1) {
      $ && tr(m, null, w, "created");
      let L = !1;
      if (v(_)) {
        L = p_(null, z) && w && w.vnode.props && w.vnode.props.appear;
        const F = _.content.firstChild;
        if (L) {
          const Z = F.getAttribute("class");
          Z && (F.$cls = Z), z.beforeEnter(F)
        }
        b(F, _, w), m.el = _ = F
      }
      if (A & 16 && !(P && (P.innerHTML || P.textContent))) {
        let F = h(_.firstChild, m, _, w, T, E, R);
        for (; F;) {
          Rl(_, 1) || ts();
          const Z = F;
          F = F.nextSibling, l(Z)
        }
      } else if (A & 8) {
        let F = m.children;
        F[0] === `
` && (_.tagName === "PRE" || _.tagName === "TEXTAREA") && (F = F.slice(1));
        const {
          textContent: Z
        } = _;
        Z !== F && Z !== F.replace(/\r\n|\r/g, `
`) && (Rl(_, 0) || ts(), _.textContent = m.children)
      }
      if (P) {
        if (G || !R || D & 48) {
          const F = _.tagName.includes("-");
          for (const Z in P)(G && (Z.endsWith("value") || Z === "indeterminate") || pl(Z) && !Mi(Z) || Z[0] === "." || F && !Mi(Z)) && r(_, Z, null, P[Z], void 0, w)
        } else if (P.onClick) r(_, "onClick", null, P.onClick, void 0, w);
        else if (D & 4 && ti(P.style))
          for (const F in P.style) P.style[F]
      }
      let B;
      (B = P && P.onVnodeBeforeMount) && Jt(B, w, m), $ && tr(m, null, w, "beforeMount"), ((B = P && P.onVnodeMounted) || $ || L) && b_(() => {
        B && Jt(B, w, m), L && z.enter(_), $ && tr(m, null, w, "mounted")
      }, T)
    }
    return _.nextSibling
  }, h = (_, m, w, T, E, R, C) => {
    C = C || !!m.dynamicChildren;
    const P = m.children,
      D = P.length;
    for (let A = 0; A < D; A++) {
      const $ = C ? P[A] : P[A] = hn(P[A]),
        z = $.type === Li;
      _ ? (z && !C && A + 1 < D && hn(P[A + 1]).type === Li && (a(i(_.data.slice($.children.length)), w, s(_)), _.data = $.children), _ = u(_, $, T, E, R, C)) : z && !$.children ? a($.el = i(""), w) : (Rl(w, 1) || ts(), n(null, $, w, null, T, E, kl(w), R))
    }
    return _
  }, p = (_, m, w, T, E, R) => {
    const {
      slotScopeIds: C
    } = m;
    C && (E = E ? E.concat(C) : C);
    const P = o(_),
      D = h(s(_), m, P, w, T, E, R);
    return D && Pl(D) && D.data === "]" ? s(m.anchor = D) : (ts(), a(m.anchor = f("]"), P, D), D)
  }, g = (_, m, w, T, E, R) => {
    if (Rl(_.parentElement, 1) || ts(), m.el = null, R) {
      const D = y(_);
      for (;;) {
        const A = s(_);
        if (A && A !== D) l(A);
        else break
      }
    }
    const C = s(_),
      P = o(_);
    return l(_), n(null, m, P, C, w, T, kl(P), E), w && (w.vnode.el = m.el, rc(w, m.el)), C
  }, y = (_, m = "[", w = "]") => {
    let T = 0;
    for (; _;)
      if (_ = s(_), _ && Pl(_) && (_.data === m && T++, _.data === w)) {
        if (T === 0) return s(_);
        T--
      } return _
  }, b = (_, m, w) => {
    const T = m.parentNode;
    T && T.replaceChild(_, m);
    let E = w;
    for (; E;) E.vnode.el === m && (E.vnode.el = E.subTree.el = _), E = E.parent
  }, v = _ => _.nodeType === 1 && _.tagName === "TEMPLATE";
  return [c, u]
}
const Ih = "data-allow-mismatch",
  Sv = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };

function Rl(t, e) {
  if (e === 0 || e === 1)
    for (; t && !t.hasAttribute(Ih);) t = t.parentElement;
  const n = t && t.getAttribute(Ih);
  if (n == null) return !1;
  if (n === "") return !0;
  {
    const r = n.split(",");
    return e === 0 && r.includes("children") ? !0 : r.includes(Sv[e])
  }
}
qa().requestIdleCallback;
qa().cancelIdleCallback;
const ni = t => !!t.type.__asyncLoader,
  ec = t => t.type.__isKeepAlive,
  Ev = {
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
      const n = Xs(),
        r = n.ctx;
      if (!r.renderer) return () => {
        const v = e.default && e.default();
        return v && v.length === 1 ? v[0] : v
      };
      const i = new Map,
        s = new Set;
      let o = null;
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: f,
            um: c,
            o: {
              createElement: u
            }
          }
        } = r,
        d = u("div");
      r.activate = (v, _, m, w, T) => {
        const E = v.component;
        f(v, _, m, 0, l), a(E.vnode, v, _, m, E, l, w, v.slotScopeIds, T), ht(() => {
          E.isDeactivated = !1, E.a && xo(E.a);
          const R = v.props && v.props.onVnodeMounted;
          R && Jt(R, E.parent, v)
        }, l)
      }, r.deactivate = v => {
        const _ = v.component;
        Ta(_.m), Ta(_.a), f(v, d, null, 1, l), ht(() => {
          _.da && xo(_.da);
          const m = v.props && v.props.onVnodeUnmounted;
          m && Jt(m, _.parent, v), _.isDeactivated = !0
        }, l)
      };

      function h(v) {
        Tc(v), c(v, n, l, !0)
      }

      function p(v) {
        i.forEach((_, m) => {
          const w = wf(ni(_) ? _.type.__asyncResolved || {} : _.type);
          w && !v(w) && g(m)
        })
      }

      function g(v) {
        const _ = i.get(v);
        _ && (!o || !Wn(_, o)) ? h(_) : o && Tc(o), i.delete(v), s.delete(v)
      }
      ws(() => [t.include, t.exclude], ([v, _]) => {
        v && p(m => fo(v, m)), _ && p(m => !fo(_, m))
      }, {
        flush: "post",
        deep: !0
      });
      let y = null;
      const b = () => {
        y != null && (Sa(n.subTree.type) ? ht(() => {
          i.set(y, Al(n.subTree))
        }, n.subTree.suspense) : i.set(y, Al(n.subTree)))
      };
      return ml(b), qg(b), yl(() => {
        i.forEach(v => {
          const {
            subTree: _,
            suspense: m
          } = n, w = Al(_);
          if (v.type === w.type && v.key === w.key) {
            Tc(w);
            const T = w.component.da;
            T && ht(T, m);
            return
          }
          h(v)
        })
      }), () => {
        if (y = null, !e.default) return o = null;
        const v = e.default(),
          _ = v[0];
        if (v.length > 1) return o = null, v;
        if (!Is(_) || !(_.shapeFlag & 4) && !(_.shapeFlag & 128)) return o = null, _;
        let m = Al(_);
        if (m.type === gt) return o = null, m;
        const w = m.type,
          T = wf(ni(m) ? m.type.__asyncResolved || {} : w),
          {
            include: E,
            exclude: R,
            max: C
          } = t;
        if (E && (!T || !fo(E, T)) || R && T && fo(R, T)) return m.shapeFlag &= -257, o = m, _;
        const P = m.key == null ? w : m.key,
          D = i.get(P);
        return m.el && (m = gr(m), _.shapeFlag & 128 && (_.ssContent = m)), y = P, D ? (m.el = D.el, m.component = D.component, m.transition && Ds(m, m.transition), m.shapeFlag |= 512, s.delete(P), s.add(P)) : (s.add(P), C && s.size > parseInt(C, 10) && g(s.values().next().value)), m.shapeFlag |= 256, o = m, Sa(_.type) ? _ : m
      }
    }
  },
  Cv = Ev;

function fo(t, e) {
  return le(t) ? t.some(n => fo(n, e)) : Ke(t) ? t.split(",").includes(e) : Sy(t) ? (t.lastIndex = 0, t.test(e)) : !1
}

function kv(t, e) {
  Kg(t, "a", e)
}

function Pv(t, e) {
  Kg(t, "da", e)
}

function Kg(t, e, n = Nt) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i;) {
      if (i.isDeactivated) return;
      i = i.parent
    }
    return t()
  });
  if (tc(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent;) ec(i.parent.vnode) && Rv(r, e, n, i), i = i.parent
  }
}

function Rv(t, e, n, r) {
  const i = tc(e, t, r, !0);
  Jg(() => {
    Eu(r[e], i)
  }, n)
}

function Tc(t) {
  t.shapeFlag &= -257, t.shapeFlag &= -513
}

function Al(t) {
  return t.shapeFlag & 128 ? t.ssContent : t
}

function tc(t, e, n = Nt, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []),
      s = e.__weh || (e.__weh = (...o) => {
        Lr();
        const l = vl(n),
          a = Xn(e, n, t, o);
        return l(), Ir(), a
      });
    return r ? i.unshift(s) : i.push(s), s
  }
}
const Br = t => (e, n = Nt) => {
    (!qo || t === "sp") && tc(t, (...r) => e(...r), n)
  },
  Av = Br("bm"),
  ml = Br("m"),
  Ov = Br("bu"),
  qg = Br("u"),
  yl = Br("bum"),
  Jg = Br("um"),
  Mv = Br("sp"),
  Nv = Br("rtg"),
  $v = Br("rtc");

function Qg(t, e = Nt) {
  tc("ec", t, e)
}
const Iu = "components",
  Dv = "directives";

function Bk(t, e) {
  return Hu(Iu, t, !0, e) || t
}
const Zg = Symbol.for("v-ndc");

function Lv(t) {
  return Ke(t) ? Hu(Iu, t, !1) || t : t || Zg
}

function Uk(t) {
  return Hu(Dv, t)
}

function Hu(t, e, n = !0, r = !1) {
  const i = _n || Nt;
  if (i) {
    const s = i.type;
    if (t === Iu) {
      const l = wf(s, !1);
      if (l && (l === e || l === Ln(e) || l === Ka(Ln(e)))) return s
    }
    const o = Hh(i[t] || s[t], e) || Hh(i.appContext[t], e);
    return !o && r ? s : o
  }
}

function Hh(t, e) {
  return t && (t[e] || t[Ln(e)] || t[Ka(Ln(e))])
}

function jk(t, e, n, r) {
  let i;
  const s = n,
    o = le(t);
  if (o || Ke(t)) {
    const l = o && ti(t);
    let a = !1,
      f = !1;
    l && (a = !bn(t), f = pr(t), t = Qa(t)), i = new Array(t.length);
    for (let c = 0, u = t.length; c < u; c++) i[c] = e(a ? f ? Ms(Yn(t[c])) : Yn(t[c]) : t[c], c, void 0, s)
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let l = 0; l < t; l++) i[l] = e(l + 1, l, void 0, s)
  } else if (Me(t))
    if (t[Symbol.iterator]) i = Array.from(t, (l, a) => e(l, a, void 0, s));
    else {
      const l = Object.keys(t);
      i = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const c = l[a];
        i[a] = e(t[c], c, a, s)
      }
    }
  else i = [];
  return i
}
const pf = t => t ? E_(t) ? ic(t) : pf(t.parent) : null,
  Eo = _t(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => pf(t.parent),
    $root: t => pf(t.root),
    $host: t => t.ce,
    $emit: t => t.emit,
    $options: t => t_(t),
    $forceUpdate: t => t.f || (t.f = () => {
      $u(t.update)
    }),
    $nextTick: t => t.n || (t.n = Yo.bind(t.proxy)),
    $watch: t => _v.bind(t)
  }),
  Sc = (t, e) => t !== Fe && !t.__isScriptSetup && De(t, e),
  Iv = {
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
        type: l,
        appContext: a
      } = t;
      if (e[0] !== "$") {
        const d = o[e];
        if (d !== void 0) switch (d) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e]
        } else {
          if (Sc(r, e)) return o[e] = 1, r[e];
          if (i !== Fe && De(i, e)) return o[e] = 2, i[e];
          if (De(s, e)) return o[e] = 3, s[e];
          if (n !== Fe && De(n, e)) return o[e] = 4, n[e];
          gf && (o[e] = 0)
        }
      }
      const f = Eo[e];
      let c, u;
      if (f) return e === "$attrs" && Mt(t.attrs, "get", ""), f(t);
      if ((c = l.__cssModules) && (c = c[e])) return c;
      if (n !== Fe && De(n, e)) return o[e] = 4, n[e];
      if (u = a.config.globalProperties, De(u, e)) return u[e]
    },
    set({
      _: t
    }, e, n) {
      const {
        data: r,
        setupState: i,
        ctx: s
      } = t;
      return Sc(i, e) ? (i[e] = n, !0) : r !== Fe && De(r, e) ? (r[e] = n, !0) : De(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0)
    },
    has({
      _: {
        data: t,
        setupState: e,
        accessCache: n,
        ctx: r,
        appContext: i,
        props: s,
        type: o
      }
    }, l) {
      let a;
      return !!(n[l] || t !== Fe && l[0] !== "$" && De(t, l) || Sc(e, l) || De(s, l) || De(r, l) || De(Eo, l) || De(i.config.globalProperties, l) || (a = o.__cssModules) && a[l])
    },
    defineProperty(t, e, n) {
      return n.get != null ? t._.accessCache[e] = 0 : De(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
    }
  };

function Fh(t) {
  return le(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
}
let gf = !0;

function Hv(t) {
  const e = t_(t),
    n = t.proxy,
    r = t.ctx;
  gf = !1, e.beforeCreate && Bh(e.beforeCreate, t, "bc");
  const {
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: a,
    inject: f,
    created: c,
    beforeMount: u,
    mounted: d,
    beforeUpdate: h,
    updated: p,
    activated: g,
    deactivated: y,
    beforeDestroy: b,
    beforeUnmount: v,
    destroyed: _,
    unmounted: m,
    render: w,
    renderTracked: T,
    renderTriggered: E,
    errorCaptured: R,
    serverPrefetch: C,
    expose: P,
    inheritAttrs: D,
    components: A,
    directives: $,
    filters: z
  } = e;
  if (f && Fv(f, r, null), o)
    for (const B in o) {
      const F = o[B];
      ce(F) && (r[B] = F.bind(n))
    }
  if (i) {
    const B = i.call(n, n);
    Me(B) && (t.data = ui(B))
  }
  if (gf = !0, s)
    for (const B in s) {
      const F = s[B],
        Z = ce(F) ? F.bind(n, n) : ce(F.get) ? F.get.bind(n, n) : ur,
        O = !ce(F) && ce(F.set) ? F.set.bind(n) : ur,
        re = zn({
          get: Z,
          set: O
        });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => re.value,
        set: fe => re.value = fe
      })
    }
  if (l)
    for (const B in l) e_(l[B], r, n, B);
  if (a) {
    const B = ce(a) ? a.call(n) : a;
    Reflect.ownKeys(B).forEach(F => {
      $i(F, B[F])
    })
  }
  c && Bh(c, t, "c");

  function L(B, F) {
    le(F) ? F.forEach(Z => B(Z.bind(n))) : F && B(F.bind(n))
  }
  if (L(Av, u), L(ml, d), L(Ov, h), L(qg, p), L(kv, g), L(Pv, y), L(Qg, R), L($v, T), L(Nv, E), L(yl, v), L(Jg, m), L(Mv, C), le(P))
    if (P.length) {
      const B = t.exposed || (t.exposed = {});
      P.forEach(F => {
        Object.defineProperty(B, F, {
          get: () => n[F],
          set: Z => n[F] = Z,
          enumerable: !0
        })
      })
    } else t.exposed || (t.exposed = {});
  w && t.render === ur && (t.render = w), D != null && (t.inheritAttrs = D), A && (t.components = A), $ && (t.directives = $), C && Xg(t)
}

function Fv(t, e, n = ur) {
  le(t) && (t = _f(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Me(i) ? "default" in i ? s = $n(i.from || r, i.default, !0) : s = $n(i.from || r) : s = $n(i), lt(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: o => s.value = o
    }) : e[r] = s
  }
}

function Bh(t, e, n) {
  Xn(le(t) ? t.map(r => r.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function e_(t, e, n, r) {
  let i = r.includes(".") ? Ug(n, r) : () => n[r];
  if (Ke(t)) {
    const s = e[t];
    ce(s) && ws(i, s)
  } else if (ce(t)) ws(i, t.bind(n));
  else if (Me(t))
    if (le(t)) t.forEach(s => e_(s, e, n, r));
    else {
      const s = ce(t.handler) ? t.handler.bind(n) : e[t.handler];
      ce(s) && ws(i, s, t)
    }
}

function t_(t) {
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
  return l ? a = l : !i.length && !n && !r ? a = e : (a = {}, i.length && i.forEach(f => xa(a, f, o, !0)), xa(a, e, o)), Me(e) && s.set(e, a), a
}

function xa(t, e, n, r = !1) {
  const {
    mixins: i,
    extends: s
  } = e;
  s && xa(t, s, n, !0), i && i.forEach(o => xa(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const l = Bv[o] || n && n[o];
      t[o] = l ? l(t[o], e[o]) : e[o]
    } return t
}
const Bv = {
  data: Uh,
  props: jh,
  emits: jh,
  methods: uo,
  computed: uo,
  beforeCreate: Ut,
  created: Ut,
  beforeMount: Ut,
  mounted: Ut,
  beforeUpdate: Ut,
  updated: Ut,
  beforeDestroy: Ut,
  beforeUnmount: Ut,
  destroyed: Ut,
  unmounted: Ut,
  activated: Ut,
  deactivated: Ut,
  errorCaptured: Ut,
  serverPrefetch: Ut,
  components: uo,
  directives: uo,
  watch: jv,
  provide: Uh,
  inject: Uv
};

function Uh(t, e) {
  return e ? t ? function() {
    return _t(ce(t) ? t.call(this, this) : t, ce(e) ? e.call(this, this) : e)
  } : e : t
}

function Uv(t, e) {
  return uo(_f(t), _f(e))
}

function _f(t) {
  if (le(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e
  }
  return t
}

function Ut(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}

function uo(t, e) {
  return t ? _t(Object.create(null), t, e) : e
}

function jh(t, e) {
  return t ? le(t) && le(e) ? [...new Set([...t, ...e])] : _t(Object.create(null), Fh(t), Fh(e ?? {})) : e
}

function jv(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = _t(Object.create(null), t);
  for (const r in e) n[r] = Ut(t[r], e[r]);
  return n
}

function n_() {
  return {
    app: null,
    config: {
      isNativeTag: lg,
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
let Wv = 0;

function zv(t, e) {
  return function(r, i = null) {
    ce(r) || (r = _t({}, r)), i != null && !Me(i) && (i = null);
    const s = n_(),
      o = new WeakSet,
      l = [];
    let a = !1;
    const f = s.app = {
      _uid: Wv++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: S1,
      get config() {
        return s.config
      },
      set config(c) {},
      use(c, ...u) {
        return o.has(c) || (c && ce(c.install) ? (o.add(c), c.install(f, ...u)) : ce(c) && (o.add(c), c(f, ...u))), f
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), f
      },
      component(c, u) {
        return u ? (s.components[c] = u, f) : s.components[c]
      },
      directive(c, u) {
        return u ? (s.directives[c] = u, f) : s.directives[c]
      },
      mount(c, u, d) {
        if (!a) {
          const h = f._ceVNode || Ze(r, i);
          return h.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && e ? e(h, c) : t(h, c, d), a = !0, f._container = c, c.__vue_app__ = f, ic(h.component)
        }
      },
      onUnmount(c) {
        l.push(c)
      },
      unmount() {
        a && (Xn(l, f._instance, 16), t(null, f._container), delete f._container.__vue_app__)
      },
      provide(c, u) {
        return s.provides[c] = u, f
      },
      runWithContext(c) {
        const u = Di;
        Di = f;
        try {
          return c()
        } finally {
          Di = u
        }
      }
    };
    return f
  }
}
let Di = null;
const Vv = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Ln(e)}Modifiers`] || t[`${qi(e)}Modifiers`];

function Gv(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Fe;
  let i = n;
  const s = e.startsWith("update:"),
    o = s && Vv(r, e.slice(7));
  o && (o.trim && (i = n.map(c => Ke(c) ? c.trim() : c)), o.number && (i = n.map(Py)));
  let l, a = r[l = mc(e)] || r[l = mc(Ln(e))];
  !a && s && (a = r[l = mc(qi(e))]), a && Xn(a, t, 6, i);
  const f = r[l + "Once"];
  if (f) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[l]) return;
    t.emitted[l] = !0, Xn(f, t, 6, i)
  }
}
const Yv = new WeakMap;

function r_(t, e, n = !1) {
  const r = n ? Yv : e.emitsCache,
    i = r.get(t);
  if (i !== void 0) return i;
  const s = t.emits;
  let o = {},
    l = !1;
  if (!ce(t)) {
    const a = f => {
      const c = r_(f, e, !0);
      c && (l = !0, _t(o, c))
    };
    !n && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a)
  }
  return !s && !l ? (Me(t) && r.set(t, null), null) : (le(s) ? s.forEach(a => o[a] = null) : _t(o, s), Me(t) && r.set(t, o), o)
}

function nc(t, e) {
  return !t || !pl(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), De(t, e[0].toLowerCase() + e.slice(1)) || De(t, qi(e)) || De(t, e))
}

function Ec(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: a,
    render: f,
    renderCache: c,
    props: u,
    data: d,
    setupState: h,
    ctx: p,
    inheritAttrs: g
  } = t, y = ba(t);
  let b, v;
  try {
    if (n.shapeFlag & 4) {
      const m = i || r,
        w = m;
      b = hn(f.call(w, m, c, u, h, d, p)), v = l
    } else {
      const m = e;
      b = hn(m.length > 1 ? m(u, {
        attrs: l,
        slots: o,
        emit: a
      }) : m(u, null)), v = e.props ? l : Kv(l)
    }
  } catch (m) {
    ko.length = 0, _l(m, t, 1), b = Ze(gt)
  }
  let _ = b;
  if (v && g !== !1) {
    const m = Object.keys(v),
      {
        shapeFlag: w
      } = _;
    m.length && w & 7 && (s && m.some(Su) && (v = qv(v, s)), _ = gr(_, v, !1, !0))
  }
  return n.dirs && (_ = gr(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && Ds(_, n.transition), b = _, ba(y), b
}

function Xv(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (Is(i)) {
      if (i.type !== gt || i.children === "v-if") {
        if (n) return;
        n = i
      }
    } else return
  }
  return n
}
const Kv = t => {
    let e;
    for (const n in t)(n === "class" || n === "style" || pl(n)) && ((e || (e = {}))[n] = t[n]);
    return e
  },
  qv = (t, e) => {
    const n = {};
    for (const r in t)(!Su(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n
  };

function Jv(t, e, n) {
  const {
    props: r,
    children: i,
    component: s
  } = t, {
    props: o,
    children: l,
    patchFlag: a
  } = e, f = s.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Wh(r, o, f) : !!o;
    if (a & 8) {
      const c = e.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const d = c[u];
        if (i_(o, r, d) && !nc(f, d)) return !0
      }
    }
  } else return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Wh(r, o, f) : !0 : !!o;
  return !1
}

function Wh(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (i_(e, t, s) && !nc(n, s)) return !0
  }
  return !1
}

function i_(t, e, n) {
  const r = t[n],
    i = e[n];
  return n === "style" && Me(r) && Me(i) ? !ku(r, i) : r !== i
}

function rc({
  vnode: t,
  parent: e
}, n) {
  for (; e;) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)(t = e.vnode).el = n, e = e.parent;
    else break
  }
}
const s_ = {},
  o_ = () => Object.create(s_),
  l_ = t => Object.getPrototypeOf(t) === s_;

function Qv(t, e, n, r = !1) {
  const i = {},
    s = o_();
  t.propsDefaults = Object.create(null), a_(t, e, i, s);
  for (const o in t.propsOptions[0]) o in i || (i[o] = void 0);
  n ? t.props = r ? i : Ar(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s
}

function Zv(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: {
      patchFlag: o
    }
  } = t, l = Pe(i), [a] = t.propsOptions;
  let f = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = t.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let d = c[u];
        if (nc(t.emitsOptions, d)) continue;
        const h = e[d];
        if (a)
          if (De(s, d)) h !== s[d] && (s[d] = h, f = !0);
          else {
            const p = Ln(d);
            i[p] = mf(a, l, p, h, t, !1)
          }
        else h !== s[d] && (s[d] = h, f = !0)
      }
    }
  } else {
    a_(t, e, i, s) && (f = !0);
    let c;
    for (const u in l)(!e || !De(e, u) && ((c = qi(u)) === u || !De(e, c))) && (a ? n && (n[u] !== void 0 || n[c] !== void 0) && (i[u] = mf(a, l, u, void 0, t, !0)) : delete i[u]);
    if (s !== l)
      for (const u in s)(!e || !De(e, u)) && (delete s[u], f = !0)
  }
  f && Cr(t.attrs, "set", "")
}

function a_(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1,
    l;
  if (e)
    for (let a in e) {
      if (Mi(a)) continue;
      const f = e[a];
      let c;
      i && De(i, c = Ln(a)) ? !s || !s.includes(c) ? n[c] = f : (l || (l = {}))[c] = f : nc(t.emitsOptions, a) || (!(a in r) || f !== r[a]) && (r[a] = f, o = !0)
    }
  if (s) {
    const a = Pe(n),
      f = l || Fe;
    for (let c = 0; c < s.length; c++) {
      const u = s[c];
      n[u] = mf(i, a, u, f[u], t, !De(f, u))
    }
  }
  return o
}

function mf(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const l = De(o, "default");
    if (l && r === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ce(a)) {
        const {
          propsDefaults: f
        } = i;
        if (n in f) r = f[n];
        else {
          const c = vl(i);
          r = f[n] = a.call(null, e), c()
        }
      } else r = a;
      i.ce && i.ce._setProp(n, r)
    }
    o[0] && (s && !l ? r = !1 : o[1] && (r === "" || r === qi(n)) && (r = !0))
  }
  return r
}
const e1 = new WeakMap;

function c_(t, e, n = !1) {
  const r = n ? e1 : e.propsCache,
    i = r.get(t);
  if (i) return i;
  const s = t.props,
    o = {},
    l = [];
  let a = !1;
  if (!ce(t)) {
    const c = u => {
      a = !0;
      const [d, h] = c_(u, e, !0);
      _t(o, d), h && l.push(...h)
    };
    !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c)
  }
  if (!s && !a) return Me(t) && r.set(t, ys), ys;
  if (le(s))
    for (let c = 0; c < s.length; c++) {
      const u = Ln(s[c]);
      zh(u) && (o[u] = Fe)
    } else if (s)
      for (const c in s) {
        const u = Ln(c);
        if (zh(u)) {
          const d = s[c],
            h = o[u] = le(d) || ce(d) ? {
              type: d
            } : _t({}, d),
            p = h.type;
          let g = !1,
            y = !0;
          if (le(p))
            for (let b = 0; b < p.length; ++b) {
              const v = p[b],
                _ = ce(v) && v.name;
              if (_ === "Boolean") {
                g = !0;
                break
              } else _ === "String" && (y = !1)
            } else g = ce(p) && p.name === "Boolean";
          h[0] = g, h[1] = y, (g || De(h, "default")) && l.push(u)
        }
      }
  const f = [o, l];
  return Me(t) && r.set(t, f), f
}

function zh(t) {
  return t[0] !== "$" && !Mi(t)
}
const Fu = t => t === "_" || t === "_ctx" || t === "$stable",
  Bu = t => le(t) ? t.map(hn) : [hn(t)],
  t1 = (t, e, n) => {
    if (e._n) return e;
    const r = Du((...i) => Bu(e(...i)), n);
    return r._c = !1, r
  },
  f_ = (t, e, n) => {
    const r = t._ctx;
    for (const i in t) {
      if (Fu(i)) continue;
      const s = t[i];
      if (ce(s)) e[i] = t1(i, s, r);
      else if (s != null) {
        const o = Bu(s);
        e[i] = () => o
      }
    }
  },
  u_ = (t, e) => {
    const n = Bu(e);
    t.slots.default = () => n
  },
  h_ = (t, e, n) => {
    for (const r in e)(n || !Fu(r)) && (t[r] = e[r])
  },
  n1 = (t, e, n) => {
    const r = t.slots = o_();
    if (t.vnode.shapeFlag & 32) {
      const i = e._;
      i ? (h_(r, e, n), n && hg(r, "_", i, !0)) : f_(e, r)
    } else e && u_(t, e)
  },
  r1 = (t, e, n) => {
    const {
      vnode: r,
      slots: i
    } = t;
    let s = !0,
      o = Fe;
    if (r.shapeFlag & 32) {
      const l = e._;
      l ? n && l === 1 ? s = !1 : h_(i, e, n) : (s = !e.$stable, f_(e, i)), o = e
    } else e && (u_(t, e), o = {
      default: 1
    });
    if (s)
      for (const l in i) !Fu(l) && o[l] == null && delete i[l]
  },
  ht = b_;

function i1(t) {
  return d_(t)
}

function s1(t) {
  return d_(t, Tv)
}

function d_(t, e) {
  const n = qa();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: c,
    parentNode: u,
    nextSibling: d,
    setScopeId: h = ur,
    insertStaticContent: p
  } = t, g = (x, k, M, I = null, S = null, H = null, Y = void 0, V = null, j = !!k.dynamicChildren) => {
    if (x === k) return;
    x && !Wn(x, k) && (I = N(x), fe(x, S, H, !0), x = null), k.patchFlag === -2 && (j = !1, k.dynamicChildren = null);
    const {
      type: U,
      ref: te,
      shapeFlag: q
    } = k;
    switch (U) {
      case Li:
        y(x, k, M, I);
        break;
      case gt:
        b(x, k, M, I);
        break;
      case Co:
        x == null && v(k, M, I, Y);
        break;
      case fn:
        A(x, k, M, I, S, H, Y, V, j);
        break;
      default:
        q & 1 ? w(x, k, M, I, S, H, Y, V, j) : q & 6 ? $(x, k, M, I, S, H, Y, V, j) : (q & 64 || q & 128) && U.process(x, k, M, I, S, H, Y, V, j, K)
    }
    te != null && S ? xs(te, x && x.ref, H, k || x, !k) : te == null && x && x.ref != null && xs(x.ref, null, H, x, !0)
  }, y = (x, k, M, I) => {
    if (x == null) r(k.el = l(k.children), M, I);
    else {
      const S = k.el = x.el;
      k.children !== x.children && f(S, k.children)
    }
  }, b = (x, k, M, I) => {
    x == null ? r(k.el = a(k.children || ""), M, I) : k.el = x.el
  }, v = (x, k, M, I) => {
    [x.el, x.anchor] = p(x.children, k, M, I, x.el, x.anchor)
  }, _ = ({
    el: x,
    anchor: k
  }, M, I) => {
    let S;
    for (; x && x !== k;) S = d(x), r(x, M, I), x = S;
    r(k, M, I)
  }, m = ({
    el: x,
    anchor: k
  }) => {
    let M;
    for (; x && x !== k;) M = d(x), i(x), x = M;
    i(k)
  }, w = (x, k, M, I, S, H, Y, V, j) => {
    if (k.type === "svg" ? Y = "svg" : k.type === "math" && (Y = "mathml"), x == null) T(k, M, I, S, H, Y, V, j);
    else {
      const U = x.el && x.el._isVueCE ? x.el : null;
      try {
        U && U._beginPatch(), C(x, k, S, H, Y, V, j)
      } finally {
        U && U._endPatch()
      }
    }
  }, T = (x, k, M, I, S, H, Y, V) => {
    let j, U;
    const {
      props: te,
      shapeFlag: q,
      transition: J,
      dirs: ie
    } = x;
    if (j = x.el = o(x.type, H, te && te.is, te), q & 8 ? c(j, x.children) : q & 16 && R(x.children, j, null, I, S, Cc(x, H), Y, V), ie && tr(x, null, I, "created"), E(j, x, x.scopeId, Y, I), te) {
      for (const ve in te) ve !== "value" && !Mi(ve) && s(j, ve, null, te[ve], H, I);
      "value" in te && s(j, "value", null, te.value, H), (U = te.onVnodeBeforeMount) && Jt(U, I, x)
    }
    ie && tr(x, null, I, "beforeMount");
    const ne = p_(S, J);
    ne && J.beforeEnter(j), r(j, k, M), ((U = te && te.onVnodeMounted) || ne || ie) && ht(() => {
      U && Jt(U, I, x), ne && J.enter(j), ie && tr(x, null, I, "mounted")
    }, S)
  }, E = (x, k, M, I, S) => {
    if (M && h(x, M), I)
      for (let H = 0; H < I.length; H++) h(x, I[H]);
    if (S) {
      let H = S.subTree;
      if (k === H || Sa(H.type) && (H.ssContent === k || H.ssFallback === k)) {
        const Y = S.vnode;
        E(x, Y, Y.scopeId, Y.slotScopeIds, S.parent)
      }
    }
  }, R = (x, k, M, I, S, H, Y, V, j = 0) => {
    for (let U = j; U < x.length; U++) {
      const te = x[U] = V ? Sr(x[U]) : hn(x[U]);
      g(null, te, k, M, I, S, H, Y, V)
    }
  }, C = (x, k, M, I, S, H, Y) => {
    const V = k.el = x.el;
    let {
      patchFlag: j,
      dynamicChildren: U,
      dirs: te
    } = k;
    j |= x.patchFlag & 16;
    const q = x.props || Fe,
      J = k.props || Fe;
    let ie;
    if (M && mi(M, !1), (ie = J.onVnodeBeforeUpdate) && Jt(ie, M, k, x), te && tr(k, x, M, "beforeUpdate"), M && mi(M, !0), (q.innerHTML && J.innerHTML == null || q.textContent && J.textContent == null) && c(V, ""), U ? P(x.dynamicChildren, U, V, M, I, Cc(k, S), H) : Y || F(x, k, V, null, M, I, Cc(k, S), H, !1), j > 0) {
      if (j & 16) D(V, q, J, M, S);
      else if (j & 2 && q.class !== J.class && s(V, "class", null, J.class, S), j & 4 && s(V, "style", q.style, J.style, S), j & 8) {
        const ne = k.dynamicProps;
        for (let ve = 0; ve < ne.length; ve++) {
          const de = ne[ve],
            je = q[de],
            qe = J[de];
          (qe !== je || de === "value") && s(V, de, je, qe, S, M)
        }
      }
      j & 1 && x.children !== k.children && c(V, k.children)
    } else !Y && U == null && D(V, q, J, M, S);
    ((ie = J.onVnodeUpdated) || te) && ht(() => {
      ie && Jt(ie, M, k, x), te && tr(k, x, M, "updated")
    }, I)
  }, P = (x, k, M, I, S, H, Y) => {
    for (let V = 0; V < k.length; V++) {
      const j = x[V],
        U = k[V],
        te = j.el && (j.type === fn || !Wn(j, U) || j.shapeFlag & 198) ? u(j.el) : M;
      g(j, U, te, null, I, S, H, Y, !0)
    }
  }, D = (x, k, M, I, S) => {
    if (k !== M) {
      if (k !== Fe)
        for (const H in k) !Mi(H) && !(H in M) && s(x, H, k[H], null, S, I);
      for (const H in M) {
        if (Mi(H)) continue;
        const Y = M[H],
          V = k[H];
        Y !== V && H !== "value" && s(x, H, V, Y, S, I)
      }
      "value" in M && s(x, "value", k.value, M.value, S)
    }
  }, A = (x, k, M, I, S, H, Y, V, j) => {
    const U = k.el = x ? x.el : l(""),
      te = k.anchor = x ? x.anchor : l("");
    let {
      patchFlag: q,
      dynamicChildren: J,
      slotScopeIds: ie
    } = k;
    ie && (V = V ? V.concat(ie) : ie), x == null ? (r(U, M, I), r(te, M, I), R(k.children || [], M, te, S, H, Y, V, j)) : q > 0 && q & 64 && J && x.dynamicChildren && x.dynamicChildren.length === J.length ? (P(x.dynamicChildren, J, M, S, H, Y, V), (k.key != null || S && k === S.subTree) && g_(x, k, !0)) : F(x, k, M, te, S, H, Y, V, j)
  }, $ = (x, k, M, I, S, H, Y, V, j) => {
    k.slotScopeIds = V, x == null ? k.shapeFlag & 512 ? S.ctx.activate(k, M, I, Y, j) : z(k, M, I, S, H, Y, j) : G(x, k, j)
  }, z = (x, k, M, I, S, H, Y) => {
    const V = x.component = y1(x, I, S);
    if (ec(x) && (V.ctx.renderer = K), v1(V, !1, Y), V.asyncDep) {
      if (S && S.registerDep(V, L, Y), !x.el) {
        const j = V.subTree = Ze(gt);
        b(null, j, k, M), x.placeholder = j.el
      }
    } else L(V, x, k, M, S, H, Y)
  }, G = (x, k, M) => {
    const I = k.component = x.component;
    if (Jv(x, k, M))
      if (I.asyncDep && !I.asyncResolved) {
        B(I, k, M);
        return
      } else I.next = k, I.update();
    else k.el = x.el, I.vnode = k
  }, L = (x, k, M, I, S, H, Y) => {
    const V = () => {
      if (x.isMounted) {
        let {
          next: q,
          bu: J,
          u: ie,
          parent: ne,
          vnode: ve
        } = x;
        {
          const mt = __(x);
          if (mt) {
            q && (q.el = ve.el, B(x, q, Y)), mt.asyncDep.then(() => {
              ht(() => {
                x.isUnmounted || U()
              }, S)
            });
            return
          }
        }
        let de = q,
          je;
        mi(x, !1), q ? (q.el = ve.el, B(x, q, Y)) : q = ve, J && xo(J), (je = q.props && q.props.onVnodeBeforeUpdate) && Jt(je, ne, q, ve), mi(x, !0);
        const qe = Ec(x),
          ke = x.subTree;
        x.subTree = qe, g(ke, qe, u(ke.el), N(ke), x, S, H), q.el = qe.el, de === null && rc(x, qe.el), ie && ht(ie, S), (je = q.props && q.props.onVnodeUpdated) && ht(() => Jt(je, ne, q, ve), S)
      } else {
        let q;
        const {
          el: J,
          props: ie
        } = k, {
          bm: ne,
          m: ve,
          parent: de,
          root: je,
          type: qe
        } = x, ke = ni(k);
        if (mi(x, !1), ne && xo(ne), !ke && (q = ie && ie.onVnodeBeforeMount) && Jt(q, de, k), mi(x, !0), J && _e) {
          const mt = () => {
            x.subTree = Ec(x), _e(J, x.subTree, x, S, null)
          };
          ke && qe.__asyncHydrate ? qe.__asyncHydrate(J, x, mt) : mt()
        } else {
          je.ce && je.ce._hasShadowRoot() && je.ce._injectChildStyle(qe);
          const mt = x.subTree = Ec(x);
          g(null, mt, M, I, x, S, H), k.el = mt.el
        }
        if (ve && ht(ve, S), !ke && (q = ie && ie.onVnodeMounted)) {
          const mt = k;
          ht(() => Jt(q, de, mt), S)
        }(k.shapeFlag & 256 || de && ni(de.vnode) && de.vnode.shapeFlag & 256) && x.a && ht(x.a, S), x.isMounted = !0, k = M = I = null
      }
    };
    x.scope.on();
    const j = x.effect = new vg(V);
    x.scope.off();
    const U = x.update = j.run.bind(j),
      te = x.job = j.runIfDirty.bind(j);
    te.i = x, te.id = x.uid, j.scheduler = () => $u(te), mi(x, !0), U()
  }, B = (x, k, M) => {
    k.component = x;
    const I = x.vnode.props;
    x.vnode = k, x.next = null, Zv(x, k.props, I, M), r1(x, k.children, M), Lr(), Mh(x), Ir()
  }, F = (x, k, M, I, S, H, Y, V, j = !1) => {
    const U = x && x.children,
      te = x ? x.shapeFlag : 0,
      q = k.children,
      {
        patchFlag: J,
        shapeFlag: ie
      } = k;
    if (J > 0) {
      if (J & 128) {
        O(U, q, M, I, S, H, Y, V, j);
        return
      } else if (J & 256) {
        Z(U, q, M, I, S, H, Y, V, j);
        return
      }
    }
    ie & 8 ? (te & 16 && Re(U, S, H), q !== U && c(M, q)) : te & 16 ? ie & 16 ? O(U, q, M, I, S, H, Y, V, j) : Re(U, S, H, !0) : (te & 8 && c(M, ""), ie & 16 && R(q, M, I, S, H, Y, V, j))
  }, Z = (x, k, M, I, S, H, Y, V, j) => {
    x = x || ys, k = k || ys;
    const U = x.length,
      te = k.length,
      q = Math.min(U, te);
    let J;
    for (J = 0; J < q; J++) {
      const ie = k[J] = j ? Sr(k[J]) : hn(k[J]);
      g(x[J], ie, M, null, S, H, Y, V, j)
    }
    U > te ? Re(x, S, H, !0, !1, q) : R(k, M, I, S, H, Y, V, j, q)
  }, O = (x, k, M, I, S, H, Y, V, j) => {
    let U = 0;
    const te = k.length;
    let q = x.length - 1,
      J = te - 1;
    for (; U <= q && U <= J;) {
      const ie = x[U],
        ne = k[U] = j ? Sr(k[U]) : hn(k[U]);
      if (Wn(ie, ne)) g(ie, ne, M, null, S, H, Y, V, j);
      else break;
      U++
    }
    for (; U <= q && U <= J;) {
      const ie = x[q],
        ne = k[J] = j ? Sr(k[J]) : hn(k[J]);
      if (Wn(ie, ne)) g(ie, ne, M, null, S, H, Y, V, j);
      else break;
      q--, J--
    }
    if (U > q) {
      if (U <= J) {
        const ie = J + 1,
          ne = ie < te ? k[ie].el : I;
        for (; U <= J;) g(null, k[U] = j ? Sr(k[U]) : hn(k[U]), M, ne, S, H, Y, V, j), U++
      }
    } else if (U > J)
      for (; U <= q;) fe(x[U], S, H, !0), U++;
    else {
      const ie = U,
        ne = U,
        ve = new Map;
      for (U = ne; U <= J; U++) {
        const it = k[U] = j ? Sr(k[U]) : hn(k[U]);
        it.key != null && ve.set(it.key, U)
      }
      let de, je = 0;
      const qe = J - ne + 1;
      let ke = !1,
        mt = 0;
      const Ft = new Array(qe);
      for (U = 0; U < qe; U++) Ft[U] = 0;
      for (U = ie; U <= q; U++) {
        const it = x[U];
        if (je >= qe) {
          fe(it, S, H, !0);
          continue
        }
        let at;
        if (it.key != null) at = ve.get(it.key);
        else
          for (de = ne; de <= J; de++)
            if (Ft[de - ne] === 0 && Wn(it, k[de])) {
              at = de;
              break
            } at === void 0 ? fe(it, S, H, !0) : (Ft[at - ne] = U + 1, at >= mt ? mt = at : ke = !0, g(it, k[at], M, null, S, H, Y, V, j), je++)
      }
      const mr = ke ? o1(Ft) : ys;
      for (de = mr.length - 1, U = qe - 1; U >= 0; U--) {
        const it = ne + U,
          at = k[it],
          qn = k[it + 1],
          me = it + 1 < te ? qn.el || m_(qn) : I;
        Ft[U] === 0 ? g(null, at, M, me, S, H, Y, V, j) : ke && (de < 0 || U !== mr[de] ? re(at, M, me, 2) : de--)
      }
    }
  }, re = (x, k, M, I, S = null) => {
    const {
      el: H,
      type: Y,
      transition: V,
      children: j,
      shapeFlag: U
    } = x;
    if (U & 6) {
      re(x.component.subTree, k, M, I);
      return
    }
    if (U & 128) {
      x.suspense.move(k, M, I);
      return
    }
    if (U & 64) {
      Y.move(x, k, M, K);
      return
    }
    if (Y === fn) {
      r(H, k, M);
      for (let q = 0; q < j.length; q++) re(j[q], k, M, I);
      r(x.anchor, k, M);
      return
    }
    if (Y === Co) {
      _(x, k, M);
      return
    }
    if (I !== 2 && U & 1 && V)
      if (I === 0) V.beforeEnter(H), r(H, k, M), ht(() => V.enter(H), S);
      else {
        const {
          leave: q,
          delayLeave: J,
          afterLeave: ie
        } = V, ne = () => {
          x.ctx.isUnmounted ? i(H) : r(H, k, M)
        }, ve = () => {
          H._isLeaving && H[nr](!0), q(H, () => {
            ne(), ie && ie()
          })
        };
        J ? J(H, ne, ve) : ve()
      }
    else r(H, k, M)
  }, fe = (x, k, M, I = !1, S = !1) => {
    const {
      type: H,
      props: Y,
      ref: V,
      children: j,
      dynamicChildren: U,
      shapeFlag: te,
      patchFlag: q,
      dirs: J,
      cacheIndex: ie
    } = x;
    if (q === -2 && (S = !1), V != null && (Lr(), xs(V, null, M, x, !0), Ir()), ie != null && (k.renderCache[ie] = void 0), te & 256) {
      k.ctx.deactivate(x);
      return
    }
    const ne = te & 1 && J,
      ve = !ni(x);
    let de;
    if (ve && (de = Y && Y.onVnodeBeforeUnmount) && Jt(de, k, x), te & 6) Ce(x.component, M, I);
    else {
      if (te & 128) {
        x.suspense.unmount(M, I);
        return
      }
      ne && tr(x, null, k, "beforeUnmount"), te & 64 ? x.type.remove(x, k, M, K, I) : U && !U.hasOnce && (H !== fn || q > 0 && q & 64) ? Re(U, k, M, !1, !0) : (H === fn && q & 384 || !S && te & 16) && Re(j, k, M), I && Te(x)
    }(ve && (de = Y && Y.onVnodeUnmounted) || ne) && ht(() => {
      de && Jt(de, k, x), ne && tr(x, null, k, "unmounted")
    }, M)
  }, Te = x => {
    const {
      type: k,
      el: M,
      anchor: I,
      transition: S
    } = x;
    if (k === fn) {
      ge(M, I);
      return
    }
    if (k === Co) {
      m(x);
      return
    }
    const H = () => {
      i(M), S && !S.persisted && S.afterLeave && S.afterLeave()
    };
    if (x.shapeFlag & 1 && S && !S.persisted) {
      const {
        leave: Y,
        delayLeave: V
      } = S, j = () => Y(M, H);
      V ? V(x.el, H, j) : j()
    } else H()
  }, ge = (x, k) => {
    let M;
    for (; x !== k;) M = d(x), i(x), x = M;
    i(k)
  }, Ce = (x, k, M) => {
    const {
      bum: I,
      scope: S,
      job: H,
      subTree: Y,
      um: V,
      m: j,
      a: U
    } = x;
    Ta(j), Ta(U), I && xo(I), S.stop(), H && (H.flags |= 8, fe(Y, x, k, M)), V && ht(V, k), ht(() => {
      x.isUnmounted = !0
    }, k)
  }, Re = (x, k, M, I = !1, S = !1, H = 0) => {
    for (let Y = H; Y < x.length; Y++) fe(x[Y], k, M, I, S)
  }, N = x => {
    if (x.shapeFlag & 6) return N(x.component.subTree);
    if (x.shapeFlag & 128) return x.suspense.next();
    const k = d(x.anchor || x.el),
      M = k && k[mv];
    return M ? d(M) : k
  };
  let X = !1;
  const W = (x, k, M) => {
      let I;
      x == null ? k._vnode && (fe(k._vnode, null, null, !0), I = k._vnode.component) : g(k._vnode || null, x, k, null, null, null, M), k._vnode = x, X || (X = !0, Mh(I), va(), X = !1)
    },
    K = {
      p: g,
      um: fe,
      m: re,
      r: Te,
      mt: z,
      mc: R,
      pc: F,
      pbc: P,
      n: N,
      o: t
    };
  let se, _e;
  return e && ([se, _e] = e(K)), {
    render: W,
    hydrate: se,
    createApp: zv(W, se)
  }
}

function Cc({
  type: t,
  props: e
}, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
}

function mi({
  effect: t,
  job: e
}, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5)
}

function p_(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted
}

function g_(t, e, n = !1) {
  const r = t.children,
    i = e.children;
  if (le(r) && le(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = Sr(i[s]), l.el = o.el), !n && l.patchFlag !== -2 && g_(o, l)), l.type === Li && (l.patchFlag === -1 && (l = i[s] = Sr(l)), l.el = o.el), l.type === gt && !l.el && (l.el = o.el)
    }
}

function o1(t) {
  const e = t.slice(),
    n = [0];
  let r, i, s, o, l;
  const a = t.length;
  for (r = 0; r < a; r++) {
    const f = t[r];
    if (f !== 0) {
      if (i = n[n.length - 1], t[i] < f) {
        e[r] = i, n.push(r);
        continue
      }
      for (s = 0, o = n.length - 1; s < o;) l = s + o >> 1, t[n[l]] < f ? s = l + 1 : o = l;
      f < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r)
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0;) n[s] = o, o = e[o];
  return n
}

function __(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : __(e)
}

function Ta(t) {
  if (t)
    for (let e = 0; e < t.length; e++) t[e].flags |= 8
}

function m_(t) {
  if (t.placeholder) return t.placeholder;
  const e = t.component;
  return e ? m_(e.subTree) : null
}
const Sa = t => t.__isSuspense;
let yf = 0;
const l1 = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, r, i, s, o, l, a, f) {
      if (t == null) a1(e, n, r, i, s, o, l, a, f);
      else {
        if (s && s.deps > 0 && !t.suspense.isInFallback) {
          e.suspense = t.suspense, e.suspense.vnode = e, e.el = t.el;
          return
        }
        c1(t, e, n, r, i, o, l, a, f)
      }
    },
    hydrate: f1,
    normalize: u1
  },
  y_ = l1;

function Ko(t, e) {
  const n = t.props && t.props[e];
  ce(n) && n()
}

function a1(t, e, n, r, i, s, o, l, a) {
  const {
    p: f,
    o: {
      createElement: c
    }
  } = a, u = c("div"), d = t.suspense = v_(t, i, r, e, u, n, s, o, l, a);
  f(null, d.pendingBranch = t.ssContent, u, null, r, d, s, o), d.deps > 0 ? (Ko(t, "onPending"), Ko(t, "onFallback"), f(null, t.ssFallback, e, n, r, null, s, o), Ts(d, t.ssFallback)) : d.resolve(!1, !0)
}

function c1(t, e, n, r, i, s, o, l, {
  p: a,
  um: f,
  o: {
    createElement: c
  }
}) {
  const u = e.suspense = t.suspense;
  u.vnode = e, e.el = t.el;
  const d = e.ssContent,
    h = e.ssFallback,
    {
      activeBranch: p,
      pendingBranch: g,
      isInFallback: y,
      isHydrating: b
    } = u;
  if (g) u.pendingBranch = d, Wn(g, d) ? (a(g, d, u.hiddenContainer, null, i, u, s, o, l), u.deps <= 0 ? u.resolve() : y && (b || (a(p, h, n, r, i, null, s, o, l), Ts(u, h)))) : (u.pendingId = yf++, b ? (u.isHydrating = !1, u.activeBranch = g) : f(g, i, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = c("div"), y ? (a(null, d, u.hiddenContainer, null, i, u, s, o, l), u.deps <= 0 ? u.resolve() : (a(p, h, n, r, i, null, s, o, l), Ts(u, h))) : p && Wn(p, d) ? (a(p, d, n, r, i, u, s, o, l), u.resolve(!0)) : (a(null, d, u.hiddenContainer, null, i, u, s, o, l), u.deps <= 0 && u.resolve()));
  else if (p && Wn(p, d)) a(p, d, n, r, i, u, s, o, l), Ts(u, d);
  else if (Ko(e, "onPending"), u.pendingBranch = d, d.shapeFlag & 512 ? u.pendingId = d.component.suspenseId : u.pendingId = yf++, a(null, d, u.hiddenContainer, null, i, u, s, o, l), u.deps <= 0) u.resolve();
  else {
    const {
      timeout: v,
      pendingId: _
    } = u;
    v > 0 ? setTimeout(() => {
      u.pendingId === _ && u.fallback(h)
    }, v) : v === 0 && u.fallback(h)
  }
}

function v_(t, e, n, r, i, s, o, l, a, f, c = !1) {
  const {
    p: u,
    m: d,
    um: h,
    n: p,
    o: {
      parentNode: g,
      remove: y
    }
  } = f;
  let b;
  const v = h1(t);
  v && e && e.pendingBranch && (b = e.pendingId, e.deps++);
  const _ = t.props ? dg(t.props.timeout) : void 0,
    m = s,
    w = {
      vnode: t,
      parent: e,
      parentComponent: n,
      namespace: o,
      container: r,
      hiddenContainer: i,
      deps: 0,
      pendingId: yf++,
      timeout: typeof _ == "number" ? _ : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: !1,
      effects: [],
      resolve(T = !1, E = !1) {
        const {
          vnode: R,
          activeBranch: C,
          pendingBranch: P,
          pendingId: D,
          effects: A,
          parentComponent: $,
          container: z,
          isInFallback: G
        } = w;
        let L = !1;
        w.isHydrating ? w.isHydrating = !1 : T || (L = C && P.transition && P.transition.mode === "out-in", L && (C.transition.afterLeave = () => {
          D === w.pendingId && (d(P, z, s === m ? p(C) : s, 0), hf(A), G && R.ssFallback && (R.ssFallback.el = null))
        }), C && (g(C.el) === z && (s = p(C)), h(C, $, w, !0), !L && G && R.ssFallback && ht(() => R.ssFallback.el = null, w)), L || d(P, z, s, 0)), Ts(w, P), w.pendingBranch = null, w.isInFallback = !1;
        let B = w.parent,
          F = !1;
        for (; B;) {
          if (B.pendingBranch) {
            B.effects.push(...A), F = !0;
            break
          }
          B = B.parent
        }!F && !L && hf(A), w.effects = [], v && e && e.pendingBranch && b === e.pendingId && (e.deps--, e.deps === 0 && !E && e.resolve()), Ko(R, "onResolve")
      },
      fallback(T) {
        if (!w.pendingBranch) return;
        const {
          vnode: E,
          activeBranch: R,
          parentComponent: C,
          container: P,
          namespace: D
        } = w;
        Ko(E, "onFallback");
        const A = p(R),
          $ = () => {
            w.isInFallback && (u(null, T, P, A, C, null, D, l, a), Ts(w, T))
          },
          z = T.transition && T.transition.mode === "out-in";
        z && (R.transition.afterLeave = $), w.isInFallback = !0, h(R, C, null, !0), z || $()
      },
      move(T, E, R) {
        w.activeBranch && d(w.activeBranch, T, E, R), w.container = T
      },
      next() {
        return w.activeBranch && p(w.activeBranch)
      },
      registerDep(T, E, R) {
        const C = !!w.pendingBranch;
        C && w.deps++;
        const P = T.vnode.el;
        T.asyncDep.catch(D => {
          _l(D, T, 0)
        }).then(D => {
          if (T.isUnmounted || w.isUnmounted || w.pendingId !== T.suspenseId) return;
          T.asyncResolved = !0;
          const {
            vnode: A
          } = T;
          bf(T, D), P && (A.el = P);
          const $ = !P && T.subTree.el;
          E(T, A, g(P || T.subTree.el), P ? null : p(T.subTree), w, o, R), $ && (A.placeholder = null, y($)), rc(T, A.el), C && --w.deps === 0 && w.resolve()
        })
      },
      unmount(T, E) {
        w.isUnmounted = !0, w.activeBranch && h(w.activeBranch, n, T, E), w.pendingBranch && h(w.pendingBranch, n, T, E)
      }
    };
  return w
}

function f1(t, e, n, r, i, s, o, l, a) {
  const f = e.suspense = v_(e, r, n, t.parentNode, document.createElement("div"), null, i, s, o, l, !0),
    c = a(t, f.pendingBranch = e.ssContent, n, f, s, o);
  return f.deps === 0 && f.resolve(!1, !0), c
}

function u1(t) {
  const {
    shapeFlag: e,
    children: n
  } = t, r = e & 32;
  t.ssContent = Vh(r ? n.default : n), t.ssFallback = r ? Vh(n.fallback) : Ze(gt)
}

function Vh(t) {
  let e;
  if (ce(t)) {
    const n = Ls && t._c;
    n && (t._d = !1, un()), t = t(), n && (t._d = !0, e = en, w_())
  }
  return le(t) && (t = Xv(t)), t = hn(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n => n !== t)), t
}

function b_(t, e) {
  e && e.pendingBranch ? le(t) ? e.effects.push(...t) : e.effects.push(t) : hf(t)
}

function Ts(t, e) {
  t.activeBranch = e;
  const {
    vnode: n,
    parentComponent: r
  } = t;
  let i = e.el;
  for (; !i && e.component;) e = e.component.subTree, i = e.el;
  n.el = i, r && r.subTree === n && (r.vnode.el = i, rc(r, i))
}

function h1(t) {
  const e = t.props && t.props.suspensible;
  return e != null && e !== !1
}
const fn = Symbol.for("v-fgt"),
  Li = Symbol.for("v-txt"),
  gt = Symbol.for("v-cmt"),
  Co = Symbol.for("v-stc"),
  ko = [];
let en = null;

function un(t = !1) {
  ko.push(en = t ? null : [])
}

function w_() {
  ko.pop(), en = ko[ko.length - 1] || null
}
let Ls = 1;

function Ea(t, e = !1) {
  Ls += t, t < 0 && en && e && (en.hasOnce = !0)
}

function x_(t) {
  return t.dynamicChildren = Ls > 0 ? en || ys : null, w_(), Ls > 0 && en && en.push(t), t
}

function Ji(t, e, n, r, i, s) {
  return x_(sr(t, e, n, r, i, s, !0))
}

function as(t, e, n, r, i) {
  return x_(Ze(t, e, n, r, i, !0))
}

function Is(t) {
  return t ? t.__v_isVNode === !0 : !1
}

function Wn(t, e) {
  return t.type === e.type && t.key === e.key
}
const T_ = ({
    key: t
  }) => t ?? null,
  ea = ({
    ref: t,
    ref_key: e,
    ref_for: n
  }) => (typeof t == "number" && (t = "" + t), t != null ? Ke(t) || lt(t) || ce(t) ? {
    i: _n,
    r: t,
    k: e,
    f: !!n
  } : t : null);

function sr(t, e = null, n = null, r = 0, i = null, s = t === fn ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && T_(e),
    ref: e && ea(e),
    scopeId: Fg,
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
    ctx: _n
  };
  return l ? (Uu(a, n), s & 128 && t.normalize(a)) : n && (a.shapeFlag |= Ke(n) ? 8 : 16), Ls > 0 && !o && en && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && en.push(a), a
}
const Ze = d1;

function d1(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === Zg) && (t = gt), Is(t)) {
    const l = gr(t, e, !0);
    return n && Uu(l, n), Ls > 0 && !s && en && (l.shapeFlag & 6 ? en[en.indexOf(t)] = l : en.push(l)), l.patchFlag = -2, l
  }
  if (T1(t) && (t = t.__vccOpts), e) {
    e = p1(e);
    let {
      class: l,
      style: a
    } = e;
    l && !Ke(l) && (e.class = Ja(l)), Me(a) && (Za(a) && !le(a) && (a = _t({}, a)), e.style = Cu(a))
  }
  const o = Ke(t) ? 1 : Sa(t) ? 128 : jg(t) ? 64 : Me(t) ? 4 : ce(t) ? 2 : 0;
  return sr(t, e, n, r, i, o, s, !0)
}

function p1(t) {
  return t ? Za(t) || l_(t) ? _t({}, t) : t : null
}

function gr(t, e, n = !1, r = !1) {
  const {
    props: i,
    ref: s,
    patchFlag: o,
    children: l,
    transition: a
  } = t, f = e ? g1(i || {}, e) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: f,
    key: f && T_(f),
    ref: e && e.ref ? n && s ? le(s) ? s.concat(ea(e)) : [s, ea(e)] : ea(e) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: l,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== fn ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: a,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && gr(t.ssContent),
    ssFallback: t.ssFallback && gr(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return a && r && Ds(c, a.clone(c)), c
}

function S_(t = " ", e = 0) {
  return Ze(Li, null, t, e)
}

function Wk(t, e) {
  const n = Ze(Co, null, t);
  return n.staticCount = e, n
}

function zk(t = "", e = !1) {
  return e ? (un(), as(gt, null, t)) : Ze(gt, null, t)
}

function hn(t) {
  return t == null || typeof t == "boolean" ? Ze(gt) : le(t) ? Ze(fn, null, t.slice()) : Is(t) ? Sr(t) : Ze(Li, null, String(t))
}

function Sr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : gr(t)
}

function Uu(t, e) {
  let n = 0;
  const {
    shapeFlag: r
  } = t;
  if (e == null) e = null;
  else if (le(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Uu(t, i()), i._c && (i._d = !0));
      return
    } else {
      n = 32;
      const i = e._;
      !i && !l_(e) ? e._ctx = _n : i === 3 && _n && (_n.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
    }
  else ce(e) ? (e = {
    default: e,
    _ctx: _n
  }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [S_(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n
}

function g1(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class") e.class !== r.class && (e.class = Ja([e.class, r.class]));
      else if (i === "style") e.style = Cu([e.style, r.style]);
    else if (pl(i)) {
      const s = e[i],
        o = r[i];
      o && s !== o && !(le(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o)
    } else i !== "" && (e[i] = r[i])
  }
  return e
}

function Jt(t, e, n, r = null) {
  Xn(t, e, 7, [n, r])
}
const _1 = n_();
let m1 = 0;

function y1(t, e, n) {
  const r = t.type,
    i = (e ? e.appContext : t.appContext) || _1,
    s = {
      uid: m1++,
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
      scope: new mg(!0),
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
      propsOptions: c_(r, i),
      emitsOptions: r_(r, i),
      emit: null,
      emitted: null,
      propsDefaults: Fe,
      inheritAttrs: r.inheritAttrs,
      ctx: Fe,
      data: Fe,
      props: Fe,
      attrs: Fe,
      slots: Fe,
      refs: Fe,
      setupState: Fe,
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
  }, s.root = e ? e.root : s, s.emit = Gv.bind(null, s), t.ce && t.ce(s), s
}
let Nt = null;
const Xs = () => Nt || _n;
let Ca, vf;
{
  const t = qa(),
    e = (n, r) => {
      let i;
      return (i = t[n]) || (i = t[n] = []), i.push(r), s => {
        i.length > 1 ? i.forEach(o => o(s)) : i[0](s)
      }
    };
  Ca = e("__VUE_INSTANCE_SETTERS__", n => Nt = n), vf = e("__VUE_SSR_SETTERS__", n => qo = n)
}
const vl = t => {
    const e = Nt;
    return Ca(t), t.scope.on(), () => {
      t.scope.off(), Ca(e)
    }
  },
  Gh = () => {
    Nt && Nt.scope.off(), Ca(null)
  };

function E_(t) {
  return t.vnode.shapeFlag & 4
}
let qo = !1;

function v1(t, e = !1, n = !1) {
  e && vf(e);
  const {
    props: r,
    children: i
  } = t.vnode, s = E_(t);
  Qv(t, r, s, e), n1(t, i, n || e);
  const o = s ? b1(t, e) : void 0;
  return e && vf(!1), o
}

function b1(t, e) {
  const n = t.type;
  t.accessCache = Object.create(null), t.proxy = new Proxy(t.ctx, Iv);
  const {
    setup: r
  } = n;
  if (r) {
    Lr();
    const i = t.setupContext = r.length > 1 ? x1(t) : null,
      s = vl(t),
      o = gl(r, t, 0, [t.props, i]),
      l = cg(o);
    if (Ir(), s(), (l || t.sp) && !ni(t) && Xg(t), l) {
      if (o.then(Gh, Gh), e) return o.then(a => {
        bf(t, a)
      }).catch(a => {
        _l(a, t, 0)
      });
      t.asyncDep = o
    } else bf(t, o)
  } else C_(t)
}

function bf(t, e, n) {
  ce(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Me(e) && (t.setupState = $g(e)), C_(t)
}

function C_(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || ur);
  {
    const i = vl(t);
    Lr();
    try {
      Hv(t)
    } finally {
      Ir(), i()
    }
  }
}
const w1 = {
  get(t, e) {
    return Mt(t, "get", ""), t[e]
  }
};

function x1(t) {
  const e = n => {
    t.exposed = n || {}
  };
  return {
    attrs: new Proxy(t.attrs, w1),
    slots: t.slots,
    emit: t.emit,
    expose: e
  }
}

function ic(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy($g(nv(t.exposed)), {
    get(e, n) {
      if (n in e) return e[n];
      if (n in Eo) return Eo[n](t)
    },
    has(e, n) {
      return n in e || n in Eo
    }
  })) : t.proxy
}

function wf(t, e = !0) {
  return ce(t) ? t.displayName || t.name : t.name || e && t.__name
}

function T1(t) {
  return ce(t) && "__vccOpts" in t
}
const zn = (t, e) => cv(t, e, qo);

function mn(t, e, n) {
  try {
    Ea(-1);
    const r = arguments.length;
    return r === 2 ? Me(e) && !le(e) ? Is(e) ? Ze(t, null, [e]) : Ze(t, e) : Ze(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Is(n) && (n = [n]), Ze(t, e, n))
  } finally {
    Ea(1)
  }
}
const S1 = "3.5.29";
let xf;
const Yh = typeof window < "u" && window.trustedTypes;
if (Yh) try {
  xf = Yh.createPolicy("vue", {
    createHTML: t => t
  })
} catch {}
const k_ = xf ? t => xf.createHTML(t) : t => t,
  E1 = "http://www.w3.org/2000/svg",
  C1 = "http://www.w3.org/1998/Math/MathML",
  xr = typeof document < "u" ? document : null,
  Xh = xr && xr.createElement("template"),
  k1 = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null)
    },
    remove: t => {
      const e = t.parentNode;
      e && e.removeChild(t)
    },
    createElement: (t, e, n, r) => {
      const i = e === "svg" ? xr.createElementNS(E1, t) : e === "mathml" ? xr.createElementNS(C1, t) : n ? xr.createElement(t, {
        is: n
      }) : xr.createElement(t);
      return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i
    },
    createText: t => xr.createTextNode(t),
    createComment: t => xr.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: t => t.parentNode,
    nextSibling: t => t.nextSibling,
    querySelector: t => xr.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, r, i, s) {
      const o = n ? n.previousSibling : e.lastChild;
      if (i && (i === s || i.nextSibling))
        for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)););
      else {
        Xh.innerHTML = k_(r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t);
        const l = Xh.content;
        if (r === "svg" || r === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild;) l.appendChild(a.firstChild);
          l.removeChild(a)
        }
        e.insertBefore(l, n)
      }
      return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
  },
  jr = "transition",
  no = "animation",
  Jo = Symbol("_vtc"),
  P_ = {
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
  P1 = _t({}, Wg, P_),
  R1 = t => (t.displayName = "Transition", t.props = P1, t),
  A1 = R1((t, {
    slots: e
  }) => mn(bv, O1(t), e)),
  yi = (t, e = []) => {
    le(t) ? t.forEach(n => n(...e)) : t && t(...e)
  },
  Kh = t => t ? le(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function O1(t) {
  const e = {};
  for (const A in t) A in P_ || (e[A] = t[A]);
  if (t.css === !1) return e;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: f = o,
    appearToClass: c = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = t, p = M1(i), g = p && p[0], y = p && p[1], {
    onBeforeEnter: b,
    onEnter: v,
    onEnterCancelled: _,
    onLeave: m,
    onLeaveCancelled: w,
    onBeforeAppear: T = b,
    onAppear: E = v,
    onAppearCancelled: R = _
  } = e, C = (A, $, z, G) => {
    A._enterCancelled = G, vi(A, $ ? c : l), vi(A, $ ? f : o), z && z()
  }, P = (A, $) => {
    A._isLeaving = !1, vi(A, u), vi(A, h), vi(A, d), $ && $()
  }, D = A => ($, z) => {
    const G = A ? E : v,
      L = () => C($, A, z);
    yi(G, [$, L]), qh(() => {
      vi($, A ? a : s), br($, A ? c : l), Kh(G) || Jh($, r, g, L)
    })
  };
  return _t(e, {
    onBeforeEnter(A) {
      yi(b, [A]), br(A, s), br(A, o)
    },
    onBeforeAppear(A) {
      yi(T, [A]), br(A, a), br(A, f)
    },
    onEnter: D(!1),
    onAppear: D(!0),
    onLeave(A, $) {
      A._isLeaving = !0;
      const z = () => P(A, $);
      br(A, u), A._enterCancelled ? (br(A, d), ed(A)) : (ed(A), br(A, d)), qh(() => {
        A._isLeaving && (vi(A, u), br(A, h), Kh(m) || Jh(A, r, y, z))
      }), yi(m, [A, z])
    },
    onEnterCancelled(A) {
      C(A, !1, void 0, !0), yi(_, [A])
    },
    onAppearCancelled(A) {
      C(A, !0, void 0, !0), yi(R, [A])
    },
    onLeaveCancelled(A) {
      P(A), yi(w, [A])
    }
  })
}

function M1(t) {
  if (t == null) return null;
  if (Me(t)) return [kc(t.enter), kc(t.leave)];
  {
    const e = kc(t);
    return [e, e]
  }
}

function kc(t) {
  return dg(t)
}

function br(t, e) {
  e.split(/\s+/).forEach(n => n && t.classList.add(n)), (t[Jo] || (t[Jo] = new Set)).add(e)
}

function vi(t, e) {
  e.split(/\s+/).forEach(r => r && t.classList.remove(r));
  const n = t[Jo];
  n && (n.delete(e), n.size || (t[Jo] = void 0))
}

function qh(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t)
  })
}
let N1 = 0;

function Jh(t, e, n, r) {
  const i = t._endId = ++N1,
    s = () => {
      i === t._endId && r()
    };
  if (n != null) return setTimeout(s, n);
  const {
    type: o,
    timeout: l,
    propCount: a
  } = $1(t, e);
  if (!o) return r();
  const f = o + "end";
  let c = 0;
  const u = () => {
      t.removeEventListener(f, d), s()
    },
    d = h => {
      h.target === t && ++c >= a && u()
    };
  setTimeout(() => {
    c < a && u()
  }, l + 1), t.addEventListener(f, d)
}

function $1(t, e) {
  const n = window.getComputedStyle(t),
    r = p => (n[p] || "").split(", "),
    i = r(`${jr}Delay`),
    s = r(`${jr}Duration`),
    o = Qh(i, s),
    l = r(`${no}Delay`),
    a = r(`${no}Duration`),
    f = Qh(l, a);
  let c = null,
    u = 0,
    d = 0;
  e === jr ? o > 0 && (c = jr, u = o, d = s.length) : e === no ? f > 0 && (c = no, u = f, d = a.length) : (u = Math.max(o, f), c = u > 0 ? o > f ? jr : no : null, d = c ? c === jr ? s.length : a.length : 0);
  const h = c === jr && /\b(?:transform|all)(?:,|$)/.test(r(`${jr}Property`).toString());
  return {
    type: c,
    timeout: u,
    propCount: d,
    hasTransform: h
  }
}

function Qh(t, e) {
  for (; t.length < e.length;) t = t.concat(t);
  return Math.max(...e.map((n, r) => Zh(n) + Zh(t[r])))
}

function Zh(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function ed(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight
}

function D1(t, e, n) {
  const r = t[Jo];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
const td = Symbol("_vod"),
  L1 = Symbol("_vsh"),
  I1 = Symbol(""),
  H1 = /(?:^|;)\s*display\s*:/;

function F1(t, e, n) {
  const r = t.style,
    i = Ke(n);
  let s = !1;
  if (n && !i) {
    if (e)
      if (Ke(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && ta(r, l, "")
        } else
          for (const o in e) n[o] == null && ta(r, o, "");
    for (const o in n) o === "display" && (s = !0), ta(r, o, n[o])
  } else if (i) {
    if (e !== n) {
      const o = r[I1];
      o && (n += ";" + o), r.cssText = n, s = H1.test(n)
    }
  } else e && t.removeAttribute("style");
  td in t && (t[td] = s ? r.display : "", t[L1] && (r.display = "none"))
}
const nd = /\s*!important$/;

function ta(t, e, n) {
  if (le(n)) n.forEach(r => ta(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    const r = B1(t, e);
    nd.test(n) ? t.setProperty(qi(r), n.replace(nd, ""), "important") : t[r] = n
  }
}
const rd = ["Webkit", "Moz", "ms"],
  Pc = {};

function B1(t, e) {
  const n = Pc[e];
  if (n) return n;
  let r = Ln(e);
  if (r !== "filter" && r in t) return Pc[e] = r;
  r = Ka(r);
  for (let i = 0; i < rd.length; i++) {
    const s = rd[i] + r;
    if (s in t) return Pc[e] = s
  }
  return e
}
const id = "http://www.w3.org/1999/xlink";

function sd(t, e, n, r, i, s = $y(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(id, e.slice(6, e.length)) : t.setAttributeNS(id, e, n) : n == null || s && !pg(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : dr(n) ? String(n) : n)
}

function od(t, e, n, r, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? k_(n) : n);
    return
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const l = s === "OPTION" ? t.getAttribute("value") || "" : t.value,
      a = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
    (l !== a || !("_value" in t)) && (t.value = a), n == null && t.removeAttribute(e), t._value = n;
    return
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof t[e];
    l === "boolean" ? n = pg(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0)
  }
  try {
    t[e] = n
  } catch {}
  o && t.removeAttribute(i || e)
}

function U1(t, e, n, r) {
  t.addEventListener(e, n, r)
}

function j1(t, e, n, r) {
  t.removeEventListener(e, n, r)
}
const ld = Symbol("_vei");

function W1(t, e, n, r, i = null) {
  const s = t[ld] || (t[ld] = {}),
    o = s[e];
  if (r && o) o.value = r;
  else {
    const [l, a] = z1(e);
    if (r) {
      const f = s[e] = Y1(r, i);
      U1(t, l, f, a)
    } else o && (j1(t, l, o, a), s[e] = void 0)
  }
}
const ad = /(?:Once|Passive|Capture)$/;

function z1(t) {
  let e;
  if (ad.test(t)) {
    e = {};
    let r;
    for (; r = t.match(ad);) t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0
  }
  return [t[2] === ":" ? t.slice(3) : qi(t.slice(2)), e]
}
let Rc = 0;
const V1 = Promise.resolve(),
  G1 = () => Rc || (V1.then(() => Rc = 0), Rc = Date.now());

function Y1(t, e) {
  const n = r => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Xn(X1(r, n.value), e, 5, [r])
  };
  return n.value = t, n.attached = G1(), n
}

function X1(t, e) {
  if (le(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0
    }, e.map(r => i => !i._stopped && r && r(i))
  } else return e
}
const cd = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
  K1 = (t, e, n, r, i, s) => {
    const o = i === "svg";
    e === "class" ? D1(t, r, o) : e === "style" ? F1(t, n, r) : pl(e) ? Su(e) || W1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : q1(t, e, r, o)) ? (od(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && sd(t, e, r, o, s, e !== "value")) : t._isVueCE && (/[A-Z]/.test(e) || !Ke(r)) ? od(t, Ln(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), sd(t, e, r, o))
  };

function q1(t, e, n, r) {
  if (r) return !!(e === "innerHTML" || e === "textContent" || e in t && cd(e) && ce(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
  }
  return cd(e) && Ke(n) ? !1 : e in t
}
const J1 = ["ctrl", "shift", "alt", "meta"],
  Q1 = {
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
    exact: (t, e) => J1.some(n => t[`${n}Key`] && !e.includes(n))
  },
  Vk = (t, e) => {
    if (!t) return t;
    const n = t._withMods || (t._withMods = {}),
      r = e.join(".");
    return n[r] || (n[r] = ((i, ...s) => {
      for (let o = 0; o < e.length; o++) {
        const l = Q1[e[o]];
        if (l && l(i, e)) return
      }
      return t(i, ...s)
    }))
  },
  R_ = _t({
    patchProp: K1
  }, k1);
let Po, fd = !1;

function Z1() {
  return Po || (Po = i1(R_))
}

function eb() {
  return Po = fd ? Po : s1(R_), fd = !0, Po
}
const tb = ((...t) => {
    const e = Z1().createApp(...t),
      {
        mount: n
      } = e;
    return e.mount = r => {
      const i = O_(r);
      if (!i) return;
      const s = e._component;
      !ce(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
      const o = n(i, !1, A_(i));
      return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
    }, e
  }),
  nb = ((...t) => {
    const e = eb().createApp(...t),
      {
        mount: n
      } = e;
    return e.mount = r => {
      const i = O_(r);
      if (i) return n(i, !0, A_(i))
    }, e
  });

function A_(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
}

function O_(t) {
  return Ke(t) ? document.querySelector(t) : t
}
const rb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  ib = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  sb = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function ob(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    lb(t);
    return
  }
  return e
}

function lb(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
}

function ka(t, e = {}) {
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
  if (!sb.test(t)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return t
  }
  try {
    if (rb.test(t) || ib.test(t)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, ob)
    }
    return JSON.parse(t)
  } catch (r) {
    if (e.strict) throw r;
    return t
  }
}
const M_ = /#/g,
  N_ = /&/g,
  ab = /\//g,
  cb = /=/g,
  fb = /\?/g,
  sc = /\+/g,
  ub = /%5e/gi,
  hb = /%60/gi,
  db = /%7c/gi,
  pb = /%20/gi,
  gb = /%2f/gi,
  _b = /%252f/gi;

function $_(t) {
  return encodeURI("" + t).replace(db, "|")
}

function Tf(t) {
  return $_(typeof t == "string" ? t : JSON.stringify(t)).replace(sc, "%2B").replace(pb, "+").replace(M_, "%23").replace(N_, "%26").replace(hb, "`").replace(ub, "^").replace(ab, "%2F")
}

function Ac(t) {
  return Tf(t).replace(cb, "%3D")
}

function mb(t) {
  return $_(t).replace(M_, "%23").replace(fb, "%3F").replace(_b, "%2F").replace(N_, "%26").replace(sc, "%2B")
}

function Qo(t = "") {
  try {
    return decodeURIComponent("" + t)
  } catch {
    return "" + t
  }
}

function yb(t) {
  return Qo(t.replace(gb, "%252F"))
}

function vb(t) {
  return Qo(t.replace(sc, " "))
}

function bb(t) {
  return Qo(t.replace(sc, " "))
}

function D_(t = "") {
  const e = Object.create(null);
  t[0] === "?" && (t = t.slice(1));
  for (const n of t.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const i = vb(r[1]);
    if (i === "__proto__" || i === "constructor") continue;
    const s = bb(r[2] || "");
    e[i] === void 0 ? e[i] = s : Array.isArray(e[i]) ? e[i].push(s) : e[i] = [e[i], s]
  }
  return e
}

function wb(t, e) {
  return (typeof e == "number" || typeof e == "boolean") && (e = String(e)), e ? Array.isArray(e) ? e.map(n => `${Ac(t)}=${Tf(n)}`).join("&") : `${Ac(t)}=${Tf(e)}` : Ac(t)
}

function xb(t) {
  return Object.keys(t).filter(e => t[e] !== void 0).map(e => wb(e, t[e])).filter(Boolean).join("&")
}
const Tb = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  Sb = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  Eb = /^([/\\]\s*){2,}[^/\\]/,
  Cb = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  kb = /\/$|\/\?|\/#/,
  Pb = /^\.?\//;

function Ks(t, e = {}) {
  return typeof e == "boolean" && (e = {
    acceptRelative: e
  }), e.strict ? Tb.test(t) : Sb.test(t) || (e.acceptRelative ? Eb.test(t) : !1)
}

function Rb(t) {
  return !!t && Cb.test(t)
}

function Sf(t = "", e) {
  return e ? kb.test(t) : t.endsWith("/")
}

function Pa(t = "", e) {
  if (!e) return (Sf(t) ? t.slice(0, -1) : t) || "/";
  if (!Sf(t, !0)) return t || "/";
  let n = t,
    r = "";
  const i = t.indexOf("#");
  i !== -1 && (n = t.slice(0, i), r = t.slice(i));
  const [s, ...o] = n.split("?");
  return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function Ab(t = "", e) {
  if (!e) return t.endsWith("/") ? t : t + "/";
  if (Sf(t, !0)) return t || "/";
  let n = t,
    r = "";
  const i = t.indexOf("#");
  if (i !== -1 && (n = t.slice(0, i), r = t.slice(i), !n)) return r;
  const [s, ...o] = n.split("?");
  return s + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function Ob(t, e) {
  if (I_(e) || Ks(t)) return t;
  const n = Pa(e);
  if (t.startsWith(n)) {
    const r = t[n.length];
    if (!r || r === "/" || r === "?") return t
  }
  return H_(n, t)
}

function ud(t, e) {
  if (I_(e)) return t;
  const n = Pa(e);
  if (!t.startsWith(n)) return t;
  const r = t[n.length];
  if (r && r !== "/" && r !== "?") return t;
  const i = t.slice(n.length);
  return i[0] === "/" ? i : "/" + i
}

function L_(t, e) {
  const n = ju(t),
    r = {
      ...D_(n.search),
      ...e
    };
  return n.search = xb(r), $b(n)
}

function I_(t) {
  return !t || t === "/"
}

function Mb(t) {
  return t && t !== "/"
}

function H_(t, ...e) {
  let n = t || "";
  for (const r of e.filter(i => Mb(i)))
    if (n) {
      const i = r.replace(Pb, "");
      n = Ab(n) + i
    } else n = r;
  return n
}

function F_(...t) {
  const e = /\/(?!\/)/,
    n = t.filter(Boolean),
    r = [];
  let i = 0;
  for (const o of n)
    if (!(!o || o === "/")) {
      for (const [l, a] of o.split(e).entries())
        if (!(!a || a === ".")) {
          if (a === "..") {
            if (r.length === 1 && Ks(r[0])) continue;
            r.pop(), i--;
            continue
          }
          if (l === 1 && r[r.length - 1]?.endsWith(":/")) {
            r[r.length - 1] += "/" + a;
            continue
          }
          r.push(a), i++
        }
    } let s = r.join("/");
  return i >= 0 ? n[0]?.startsWith("/") && !s.startsWith("/") ? s = "/" + s : n[0]?.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * i) + s, n[n.length - 1]?.endsWith("/") && !s.endsWith("/") && (s += "/"), s
}

function Nb(t, e) {
  return Qo(Pa(t)) === Qo(Pa(e))
}
const B_ = Symbol.for("ufo:protocolRelative");

function ju(t = "", e) {
  const n = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, u, d = ""] = n;
    return {
      protocol: u.toLowerCase(),
      pathname: d,
      href: u + d,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!Ks(t, {
      acceptRelative: !0
    })) return hd(t);
  const [, r = "", i, s = ""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, o = "", l = ""] = s.match(/([^#/?]*)(.*)?/) || [];
  r === "file:" && (l = l.replace(/\/(?=[A-Za-z]:)/, ""));
  const {
    pathname: a,
    search: f,
    hash: c
  } = hd(l);
  return {
    protocol: r.toLowerCase(),
    auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
    host: o,
    pathname: a,
    search: f,
    hash: c,
    [B_]: !r
  }
}

function hd(t = "") {
  const [e = "", n = "", r = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: e,
    search: n,
    hash: r
  }
}

function $b(t) {
  const e = t.pathname || "",
    n = t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : "",
    r = t.hash || "",
    i = t.auth ? t.auth + "@" : "",
    s = t.host || "";
  return (t.protocol || t[B_] ? (t.protocol || "") + "//" : "") + i + s + e + n + r
}
class Db extends Error {
  constructor(e, n) {
    super(e, n), this.name = "FetchError", n?.cause && !this.cause && (this.cause = n.cause)
  }
}

function Lb(t) {
  const e = t.error?.message || t.error?.toString() || "",
    n = t.request?.method || t.options?.method || "GET",
    r = t.request?.url || String(t.request) || "/",
    i = `[${n}] ${JSON.stringify(r)}`,
    s = t.response ? `${t.response.status} ${t.response.statusText}` : "<no response>",
    o = `${i}: ${s}${e?` ${e}`:""}`,
    l = new Db(o, t.error ? {
      cause: t.error
    } : void 0);
  for (const a of ["request", "options", "response"]) Object.defineProperty(l, a, {
    get() {
      return t[a]
    }
  });
  for (const [a, f] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(l, a, {
    get() {
      return t.response && t.response[f]
    }
  });
  return l
}
const Ib = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function dd(t = "GET") {
  return Ib.has(t.toUpperCase())
}

function Hb(t) {
  if (t === void 0) return !1;
  const e = typeof t;
  return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.buffer || t instanceof FormData || t instanceof URLSearchParams ? !1 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
}
const Fb = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  Bb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function Ub(t = "") {
  if (!t) return "json";
  const e = t.split(";").shift() || "";
  return Bb.test(e) ? "json" : e === "text/event-stream" ? "stream" : Fb.has(e) || e.startsWith("text/") ? "text" : "blob"
}

function jb(t, e, n, r) {
  const i = Wb(e?.headers ?? t?.headers, n?.headers, r);
  let s;
  return (n?.query || n?.params || e?.params || e?.query) && (s = {
    ...n?.params,
    ...n?.query,
    ...e?.params,
    ...e?.query
  }), {
    ...n,
    ...e,
    query: s,
    params: s,
    headers: i
  }
}

function Wb(t, e, n) {
  if (!e) return new n(t);
  const r = new n(e);
  if (t)
    for (const [i, s] of Symbol.iterator in t || Array.isArray(t) ? t : new n(t)) r.set(i, s);
  return r
}
async function Ol(t, e) {
  if (e)
    if (Array.isArray(e))
      for (const n of e) await n(t);
    else await e(t)
}
const zb = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  Vb = new Set([101, 204, 205, 304]);

function U_(t = {}) {
  const {
    fetch: e = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController
  } = t;
  async function i(l) {
    const a = l.error && l.error.name === "AbortError" && !l.options.timeout || !1;
    if (l.options.retry !== !1 && !a) {
      let c;
      typeof l.options.retry == "number" ? c = l.options.retry : c = dd(l.options.method) ? 0 : 1;
      const u = l.response && l.response.status || 500;
      if (c > 0 && (Array.isArray(l.options.retryStatusCodes) ? l.options.retryStatusCodes.includes(u) : zb.has(u))) {
        const d = typeof l.options.retryDelay == "function" ? l.options.retryDelay(l) : l.options.retryDelay || 0;
        return d > 0 && await new Promise(h => setTimeout(h, d)), s(l.request, {
          ...l.options,
          retry: c - 1
        })
      }
    }
    const f = Lb(l);
    throw Error.captureStackTrace && Error.captureStackTrace(f, s), f
  }
  const s = async function(a, f = {}) {
    const c = {
      request: a,
      options: jb(a, f, t.defaults, n),
      response: void 0,
      error: void 0
    };
    if (c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && (await Ol(c, c.options.onRequest), c.options.headers instanceof n || (c.options.headers = new n(c.options.headers || {}))), typeof c.request == "string" && (c.options.baseURL && (c.request = Ob(c.request, c.options.baseURL)), c.options.query && (c.request = L_(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && dd(c.options.method))
      if (Hb(c.options.body)) {
        const h = c.options.headers.get("content-type");
        typeof c.options.body != "string" && (c.options.body = h === "application/x-www-form-urlencoded" ? new URLSearchParams(c.options.body).toString() : JSON.stringify(c.options.body)), h || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")
      } else("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half"));
    let u;
    if (!c.options.signal && c.options.timeout) {
      const h = new r;
      u = setTimeout(() => {
        const p = new Error("[TimeoutError]: The operation was aborted due to timeout");
        p.name = "TimeoutError", p.code = 23, h.abort(p)
      }, c.options.timeout), c.options.signal = h.signal
    }
    try {
      c.response = await e(c.request, c.options)
    } catch (h) {
      return c.error = h, c.options.onRequestError && await Ol(c, c.options.onRequestError), await i(c)
    } finally {
      u && clearTimeout(u)
    }
    if ((c.response.body || c.response._bodyInit) && !Vb.has(c.response.status) && c.options.method !== "HEAD") {
      const h = (c.options.parseResponse ? "json" : c.options.responseType) || Ub(c.response.headers.get("content-type") || "");
      switch (h) {
        case "json": {
          const p = await c.response.text(),
            g = c.options.parseResponse || ka;
          c.response._data = g(p);
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
    return c.options.onResponse && await Ol(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await Ol(c, c.options.onResponseError), await i(c)) : c.response
  }, o = async function(a, f) {
    return (await s(a, f))._data
  };
  return o.raw = s, o.native = (...l) => e(...l), o.create = (l = {}, a = {}) => U_({
    ...t,
    ...a,
    defaults: {
      ...t.defaults,
      ...a.defaults,
      ...l
    }
  }), o
}
const Ra = (function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object")
  })(),
  Gb = Ra.fetch ? (...t) => Ra.fetch(...t) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
  Yb = Ra.Headers,
  Xb = Ra.AbortController,
  Kb = U_({
    fetch: Gb,
    Headers: Yb,
    AbortController: Xb
  }),
  qb = Kb,
  Jb = () => window?.__NUXT__?.config || {},
  Wu = () => Jb().app,
  Qb = () => Wu().baseURL,
  Zb = () => Wu().buildAssetsDir,
  zu = (...t) => F_(j_(), Zb(), ...t),
  j_ = (...t) => {
    const e = Wu(),
      n = e.cdnURL || e.baseURL;
    return t.length ? F_(n, ...t) : n
  };
globalThis.__buildAssetsURL = zu, globalThis.__publicAssetsURL = j_;
globalThis.$fetch || (globalThis.$fetch = qb.create({
  baseURL: Qb()
}));
"global" in globalThis || (globalThis.global = globalThis);

function Ef(t, e = {}, n) {
  for (const r in t) {
    const i = t[r],
      s = n ? `${n}:${r}` : r;
    typeof i == "object" && i !== null ? Ef(i, e, s) : typeof i == "function" && (e[s] = i)
  }
  return e
}
const ew = {
    run: t => t()
  },
  tw = () => ew,
  W_ = typeof console.createTask < "u" ? console.createTask : tw;

function nw(t, e) {
  const n = e.shift(),
    r = W_(n);
  return t.reduce((i, s) => i.then(() => r.run(() => s(...e))), Promise.resolve())
}

function rw(t, e) {
  const n = e.shift(),
    r = W_(n);
  return Promise.all(t.map(i => r.run(() => i(...e))))
}

function Oc(t, e) {
  for (const n of [...t]) n(e)
}
let iw = class {
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
    const n = Ef(e),
      r = Object.keys(n).map(i => this.hook(i, n[i]));
    return () => {
      for (const i of r.splice(0, r.length)) i()
    }
  }
  removeHooks(e) {
    const n = Ef(e);
    for (const r in n) this.removeHook(r, n[r])
  }
  removeAllHooks() {
    for (const e in this._hooks) delete this._hooks[e]
  }
  callHook(e, ...n) {
    return n.unshift(e), this.callHookWith(nw, e, ...n)
  }
  callHookParallel(e, ...n) {
    return n.unshift(e), this.callHookWith(rw, e, ...n)
  }
  callHookWith(e, n, ...r) {
    const i = this._before || this._after ? {
      name: n,
      args: r,
      context: {}
    } : void 0;
    this._before && Oc(this._before, i);
    const s = e(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise ? s.finally(() => {
      this._after && i && Oc(this._after, i)
    }) : (this._after && i && Oc(this._after, i), s)
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
};

function sw() {
  return new iw
}

function ow(t = {}) {
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
        f = () => e === o ? a : void 0;
      Cf.add(f);
      try {
        const c = i ? i.run(o, l) : l();
        return n || (e = void 0), await c
      } finally {
        Cf.delete(f)
      }
    }
  }
}

function lw(t = {}) {
  const e = {};
  return {
    get(n, r = {}) {
      return e[n] || (e[n] = ow({
        ...t,
        ...r
      })), e[n]
    }
  }
}
const Aa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
  pd = "__unctx__",
  aw = Aa[pd] || (Aa[pd] = lw()),
  cw = (t, e = {}) => aw.get(t, e),
  gd = "__unctx_async_handlers__",
  Cf = Aa[gd] || (Aa[gd] = new Set);

function Ro(t) {
  const e = [];
  for (const i of Cf) {
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
const _d = !1,
  fw = !1,
  Yk = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: {
      visibility: !0
    }
  },
  uw = null,
  hw = "#__nuxt",
  z_ = "nuxt-app",
  md = 36e5,
  dw = "vite:preloadError";

function V_(t = z_) {
  return cw(t, {
    asyncContext: !1
  })
}
const pw = "__nuxt_plugin";

function gw(t) {
  let e = 0;
  const n = {
    _id: t.id || z_ || "nuxt-app",
    _scope: Ly(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.1"
      },
      get vue() {
        return n.vueApp.version
      }
    },
    payload: Ar({
      ...t.ssrContext?.payload || {},
      data: Ar({}),
      state: ui({}),
      once: new Set,
      _errors: Ar({})
    }),
    static: {
      data: {}
    },
    runWithContext(i) {
      return n._scope.active && !yg() ? n._scope.run(() => yd(n, i)) : yd(n, i)
    },
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
    _asyncData: Ar({}),
    _payloadRevivers: {},
    ...t
  };
  {
    const i = window.__NUXT__;
    if (i)
      for (const s in i) switch (s) {
        case "data":
        case "state":
        case "_errors":
          Object.assign(n.payload[s], i[s]);
          break;
        default:
          n.payload[s] = i[s]
      }
  }
  n.hooks = sw(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (i, s) => {
    const o = "$" + i;
    Ml(n, o, s), Ml(n.vueApp.config.globalProperties, o, s)
  }, Ml(n.vueApp, "$nuxt", n), Ml(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener(dw, s => {
      n.callHook("app:chunkError", {
        error: s.payload
      }), s.payload.message.includes("Unable to preload CSS") && s.preventDefault()
    }), window.useNuxtApp ||= wt;
    const i = n.hook("app:error", (...s) => {
      console.error("[nuxt] error caught during app initialization", ...s)
    });
    n.hook("app:mounted", i)
  }
  const r = n.payload.config;
  return n.provide("config", r), n
}

function _w(t, e) {
  e.hooks && t.hooks.addHooks(e.hooks)
}
async function mw(t, e) {
  if (typeof e == "function") {
    const {
      provide: n
    } = await t.runWithContext(() => e(t)) || {};
    if (n && typeof n == "object")
      for (const r in n) t.provide(r, n[r])
  }
}
async function yw(t, e) {
  const n = new Set,
    r = [],
    i = [];
  let s, o = 0;
  async function l(a) {
    const f = a.dependsOn?.filter(c => e.some(u => u._name === c) && !n.has(c)) ?? [];
    if (f.length > 0) r.push([new Set(f), a]);
    else {
      const c = mw(t, a).then(async () => {
        a._name && (n.add(a._name), await Promise.all(r.map(async ([u, d]) => {
          u.has(a._name) && (u.delete(a._name), u.size === 0 && (o++, await l(d)))
        })))
      }).catch(u => {
        if (!a.parallel && !t.payload.error) throw u;
        s ||= u
      });
      a.parallel ? i.push(c) : await c
    }
  }
  for (const a of e) _w(t, a);
  for (const a of e) await l(a);
  if (await Promise.all(i), o)
    for (let a = 0; a < o; a++) await Promise.all(i);
  if (s) throw t.payload.error || s
}

function Sn(t) {
  if (typeof t == "function") return t;
  const e = t._name || t.name;
  return delete t.name, Object.assign(t.setup || (() => {}), t, {
    [pw]: !0,
    _name: e
  })
}

function yd(t, e, n) {
  const r = () => e();
  return V_(t._id).set(t), t.vueApp.runWithContext(r)
}

function vw(t) {
  let e;
  return Bg() && (e = Xs()?.appContext.app.$nuxt), e ||= V_(t).tryUse(), e || null
}

function wt(t) {
  const e = vw(t);
  if (!e) throw new Error("[nuxt] instance unavailable");
  return e
}

function oc(t) {
  return wt().$config
}

function Ml(t, e, n) {
  Object.defineProperty(t, e, {
    get: () => n
  })
}

function Mc(t) {
  if (t === null || typeof t != "object") return !1;
  const e = Object.getPrototypeOf(t);
  return e !== null && e !== Object.prototype && Object.getPrototypeOf(e) !== null || Symbol.iterator in t ? !1 : Symbol.toStringTag in t ? Object.prototype.toString.call(t) === "[object Module]" : !0
}

function kf(t, e, n = ".", r) {
  if (!Mc(e)) return kf(t, {}, n, r);
  const i = Object.assign({}, e);
  for (const s in t) {
    if (s === "__proto__" || s === "constructor") continue;
    const o = t[s];
    o != null && (r && r(i, s, o, n) || (Array.isArray(o) && Array.isArray(i[s]) ? i[s] = [...o, ...i[s]] : Mc(o) && Mc(i[s]) ? i[s] = kf(o, i[s], (n ? `${n}.` : "") + s.toString(), r) : i[s] = o))
  }
  return i
}

function bw(t) {
  return (...e) => e.reduce((n, r) => kf(n, r, "", t), {})
}
const G_ = bw();

function ww(t, e) {
  try {
    return e in t
  } catch {
    return !1
  }
}
class vd extends Error {
  static __h3_error__ = !0;
  statusCode = 500;
  fatal = !1;
  unhandled = !1;
  statusMessage;
  data;
  cause;
  constructor(e, n = {}) {
    super(e, n), n.cause && !this.cause && (this.cause = n.cause)
  }
  toJSON() {
    const e = {
      message: this.message,
      statusCode: Pf(this.statusCode, 500)
    };
    return this.statusMessage && (e.statusMessage = Y_(this.statusMessage)), this.data !== void 0 && (e.data = this.data), e
  }
}

function xw(t) {
  if (typeof t == "string") return new vd(t);
  if (Tw(t)) return t;
  const e = new vd(t.message ?? t.statusMessage ?? "", {
    cause: t.cause || t
  });
  if (ww(t, "stack")) try {
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
    Y_(e.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
  }
  return t.fatal !== void 0 && (e.fatal = t.fatal), t.unhandled !== void 0 && (e.unhandled = t.unhandled), e
}

function Tw(t) {
  return t?.constructor?.__h3_error__ === !0
}
const Sw = /[^\u0009\u0020-\u007E]/g;

function Y_(t = "") {
  return t.replace(Sw, "")
}

function Pf(t, e = 200) {
  return !t || (typeof t == "string" && (t = Number.parseInt(t, 10)), t < 100 || t > 999) ? e : t
}
const Ew = Symbol("layout-meta"),
  lc = Symbol("route");
import.meta.url.replace(/\/app\/.*$/, "/");
const In = () => wt()?.$router,
  Cw = () => Bg() ? $n(lc, wt()._route) : wt()._route;
const kw = () => {
    try {
      if (wt()._processingMiddleware) return !0
    } catch {
      return !1
    }
    return !1
  },
  Xk = (t, e) => {
    t ||= "/";
    const n = typeof t == "string" ? t : "path" in t ? Pw(t) : In().resolve(t).href;
    if (e?.open) {
      const {
        target: f = "_blank",
        windowFeatures: c = {}
      } = e.open, u = [];
      for (const [d, h] of Object.entries(c)) h !== void 0 && u.push(`${d.toLowerCase()}=${h}`);
      return open(n, f, u.join(", ")), Promise.resolve()
    }
    const r = Ks(n, {
        acceptRelative: !0
      }),
      i = e?.external || r;
    if (i) {
      if (!e?.external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const {
        protocol: f
      } = new URL(n, window.location.href);
      if (f && Rb(f)) throw new Error(`Cannot navigate to a URL with '${f}' protocol.`)
    }
    const s = kw();
    if (!i && s) {
      if (e?.replace) {
        if (typeof t == "string") {
          const {
            pathname: f,
            search: c,
            hash: u
          } = ju(t);
          return {
            path: f,
            ...c && {
              query: D_(c)
            },
            ...u && {
              hash: u
            },
            replace: !0
          }
        }
        return {
          ...t,
          replace: !0
        }
      }
      return t
    }
    const o = In(),
      l = wt();
    if (i) return l._scope.stop(), e?.replace ? location.replace(n) : location.href = n, s ? l.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve();
    const a = typeof t == "string" ? Rw(t) : t;
    return e?.replace ? o.replace(a) : o.push(a)
  };

function Pw(t) {
  return L_(t.path || "", t.query || {}) + (t.hash || "")
}

function Rw(t) {
  const e = ju(t);
  return mb(yb(e.pathname)) + e.search + e.hash
}
const X_ = "__nuxt_error",
  ac = () => Dg(wt().payload, "error"),
  Si = t => {
    const e = Ii(t);
    try {
      const n = ac();
      wt().hooks.callHook("app:error", e), n.value ||= e
    } catch {
      throw e
    }
    return e
  },
  Aw = async (t = {}) => {
    const e = wt(),
      n = ac();
    e.callHook("app:error:cleared", t), t.redirect && await In().replace(t.redirect), n.value = uw
  }, K_ = t => !!t && typeof t == "object" && X_ in t, Ii = t => {
    typeof t != "string" && t.statusText && (t.message ??= t.statusText);
    const e = xw(t);
    return Object.defineProperty(e, X_, {
      value: !0,
      configurable: !1,
      writable: !1
    }), Object.defineProperty(e, "status", {
      get: () => e.statusCode,
      configurable: !0
    }), Object.defineProperty(e, "statusText", {
      get: () => e.statusMessage,
      configurable: !0
    }), e
  };

function Ow(t) {
  const e = Nw(t),
    n = new ArrayBuffer(e.length),
    r = new DataView(n);
  for (let i = 0; i < n.byteLength; i++) r.setUint8(i, e.charCodeAt(i));
  return n
}
const Mw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function Nw(t) {
  t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
  let e = "",
    n = 0,
    r = 0;
  for (let i = 0; i < t.length; i++) n <<= 6, n |= Mw.indexOf(t[i]), r += 6, r === 24 && (e += String.fromCharCode((n & 16711680) >> 16), e += String.fromCharCode((n & 65280) >> 8), e += String.fromCharCode(n & 255), n = r = 0);
  return r === 12 ? (n >>= 4, e += String.fromCharCode(n)) : r === 18 && (n >>= 2, e += String.fromCharCode((n & 65280) >> 8), e += String.fromCharCode(n & 255)), e
}
const $w = -1,
  Dw = -2,
  Lw = -3,
  Iw = -4,
  Hw = -5,
  Fw = -6,
  Bw = -7;

function Uw(t, e) {
  return jw(JSON.parse(t), e)
}

function jw(t, e) {
  if (typeof t == "number") return s(t, !0);
  if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
  const n = t,
    r = Array(n.length);
  let i = null;

  function s(o, l = !1) {
    if (o === $w) return;
    if (o === Lw) return NaN;
    if (o === Iw) return 1 / 0;
    if (o === Hw) return -1 / 0;
    if (o === Fw) return -0;
    if (l || typeof o != "number") throw new Error("Invalid input");
    if (o in r) return r[o];
    const a = n[o];
    if (!a || typeof a != "object") r[o] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == "string") {
        const f = a[0],
          c = e && Object.hasOwn(e, f) ? e[f] : void 0;
        if (c) {
          let u = a[1];
          if (typeof u != "number" && (u = n.push(a[1]) - 1), i ??= new Set, i.has(u)) throw new Error("Invalid circular reference");
          return i.add(u), r[o] = c(s(u)), i.delete(u), r[o]
        }
        switch (f) {
          case "Date":
            r[o] = new Date(a[1]);
            break;
          case "Set":
            const u = new Set;
            r[o] = u;
            for (let p = 1; p < a.length; p += 1) u.add(s(a[p]));
            break;
          case "Map":
            const d = new Map;
            r[o] = d;
            for (let p = 1; p < a.length; p += 2) d.set(s(a[p]), s(a[p + 1]));
            break;
          case "RegExp":
            r[o] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            r[o] = Object(a[1]);
            break;
          case "BigInt":
            r[o] = BigInt(a[1]);
            break;
          case "null":
            const h = Object.create(null);
            r[o] = h;
            for (let p = 1; p < a.length; p += 2) h[a[p]] = s(a[p + 1]);
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
            if (n[a[1]][0] !== "ArrayBuffer") throw new Error("Invalid data");
            const p = globalThis[f],
              g = s(a[1]),
              y = new p(g);
            r[o] = a[2] !== void 0 ? y.subarray(a[2], a[3]) : y;
            break
          }
          case "ArrayBuffer": {
            const p = a[1];
            if (typeof p != "string") throw new Error("Invalid ArrayBuffer encoding");
            const g = Ow(p);
            r[o] = g;
            break
          }
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime": {
            const p = f.slice(9);
            r[o] = Temporal[p].from(a[1]);
            break
          }
          case "URL": {
            const p = new URL(a[1]);
            r[o] = p;
            break
          }
          case "URLSearchParams": {
            const p = new URLSearchParams(a[1]);
            r[o] = p;
            break
          }
          default:
            throw new Error(`Unknown type ${f}`)
        }
      } else if (a[0] === Bw) {
      const f = a[1],
        c = new Array(f);
      r[o] = c;
      for (let u = 2; u < a.length; u += 2) {
        const d = a[u];
        c[d] = s(a[u + 1])
      }
    } else {
      const f = new Array(a.length);
      r[o] = f;
      for (let c = 0; c < a.length; c += 1) {
        const u = a[c];
        u !== Dw && (f[c] = s(u))
      }
    } else {
      const f = {};
      r[o] = f;
      for (const c of Object.keys(a)) {
        if (c === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
        const u = a[c];
        f[c] = s(u)
      }
    }
    return r[o]
  }
  return s(0)
}
const Ww = new Set(["link", "style", "script", "noscript"]),
  zw = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
  bd = new Set(["base", "meta", "link", "style", "script", "noscript"]),
  Vw = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
  Gw = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
  Yw = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]),
  Xw = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
  Kw = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);

function Rf(t, e = {}, n) {
  for (const r in t) {
    const i = t[r],
      s = n ? `${n}:${r}` : r;
    typeof i == "object" && i !== null ? Rf(i, e, s) : typeof i == "function" && (e[s] = i)
  }
  return e
}
const q_ = (() => {
  if (console.createTask) return console.createTask;
  const t = {
    run: e => e()
  };
  return () => t
})();

function J_(t, e, n, r) {
  for (let i = n; i < t.length; i += 1) try {
    const s = r ? r.run(() => t[i](...e)) : t[i](...e);
    if (s instanceof Promise) return s.then(() => J_(t, e, i + 1, r))
  } catch (s) {
    return Promise.reject(s)
  }
}

function qw(t, e, n) {
  if (t.length > 0) return J_(t, e, 0, q_(n))
}

function Jw(t, e, n) {
  if (t.length > 0) {
    const r = q_(n);
    return Promise.all(t.map(i => r.run(() => i(...e))))
  }
}

function Nc(t, e) {
  for (const n of [...t]) n(e)
}
var Qw = class {
  _hooks;
  _before;
  _after;
  _deprecatedHooks;
  _deprecatedMessages;
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
  }
  hook(t, e, n = {}) {
    if (!t || typeof e != "function") return () => {};
    const r = t;
    let i;
    for (; this._deprecatedHooks[t];) i = this._deprecatedHooks[t], t = i.to;
    if (i && !n.allowDeprecated) {
      let s = i.message;
      s || (s = `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(s) || (console.warn(s), this._deprecatedMessages.add(s))
    }
    if (!e.name) try {
      Object.defineProperty(e, "name", {
        get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
        configurable: !0
      })
    } catch {}
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(e), () => {
      e && (this.removeHook(t, e), e = void 0)
    }
  }
  hookOnce(t, e) {
    let n, r = (...i) => (typeof n == "function" && n(), n = void 0, r = void 0, e(...i));
    return n = this.hook(t, r), n
  }
  removeHook(t, e) {
    const n = this._hooks[t];
    if (n) {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1), n.length === 0 && (this._hooks[t] = void 0)
    }
  }
  deprecateHook(t, e) {
    this._deprecatedHooks[t] = typeof e == "string" ? {
      to: e
    } : e;
    const n = this._hooks[t] || [];
    this._hooks[t] = void 0;
    for (const r of n) this.hook(t, r)
  }
  deprecateHooks(t) {
    for (const e in t) this.deprecateHook(e, t[e])
  }
  addHooks(t) {
    const e = Rf(t),
      n = Object.keys(e).map(r => this.hook(r, e[r]));
    return () => {
      for (const r of n) r();
      n.length = 0
    }
  }
  removeHooks(t) {
    const e = Rf(t);
    for (const n in e) this.removeHook(n, e[n])
  }
  removeAllHooks() {
    this._hooks = {}
  }
  callHook(t, ...e) {
    return this.callHookWith(qw, t, e)
  }
  callHookParallel(t, ...e) {
    return this.callHookWith(Jw, t, e)
  }
  callHookWith(t, e, n) {
    const r = this._before || this._after ? {
      name: e,
      args: n,
      context: {}
    } : void 0;
    this._before && Nc(this._before, r);
    const i = t(this._hooks[e] ? [...this._hooks[e]] : [], n, e);
    return i instanceof Promise ? i.finally(() => {
      this._after && r && Nc(this._after, r)
    }) : (this._after && r && Nc(this._after, r), i)
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const e = this._before.indexOf(t);
        e !== -1 && this._before.splice(e, 1)
      }
    }
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const e = this._after.indexOf(t);
        e !== -1 && this._after.splice(e, 1)
      }
    }
  }
};

function Zw() {
  return new Qw
}
const ex = ["name", "property", "http-equiv"],
  tx = new Set(["viewport", "description", "keywords", "robots"]);

function Q_(t) {
  const e = t.split(":");
  return e.length ? Kw.has(e[1]) : !1
}

function Af(t) {
  const {
    props: e,
    tag: n
  } = t;
  if (Gw.has(n)) return n;
  if (n === "link" && e.rel === "canonical") return "canonical";
  if (n === "link" && e.rel === "alternate") {
    const r = e.hreflang || e.type;
    if (r) return `alternate:${r}`
  }
  if (e.charset) return "charset";
  if (t.tag === "meta") {
    for (const r of ex)
      if (e[r] !== void 0) {
        const i = e[r],
          s = i && typeof i == "string" && i.includes(":"),
          o = i && tx.has(i),
          a = !(s || o) && t.key ? `:key:${t.key}` : "";
        return `${n}:${i}${a}`
      }
  }
  if (t.key) return `${n}:key:${t.key}`;
  if (e.id) return `${n}:id:${e.id}`;
  if (n === "link" && e.rel === "alternate") return `alternate:${e.href||""}`;
  if (zw.has(n)) {
    const r = t.textContent || t.innerHTML;
    if (r) return `${n}:content:${r}`
  }
}

function Z_(t) {
  const e = t._h || t._d;
  if (e) return e;
  const n = t.textContent || t.innerHTML;
  return n || `${t.tag}:${Object.entries(t.props).map(([r,i])=>`${r}:${String(i)}`).join(",")}`
}

function Of(t, e, n) {
  typeof t === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (t = t());
  const i = e ? e(n, t) : t;
  if (Array.isArray(i)) return i.map(s => Of(s, e));
  if (i?.constructor === Object) {
    const s = {};
    for (const o of Object.keys(i)) s[o] = Of(i[o], e, o);
    return s
  }
  return i
}

function nx(t, e) {
  const n = t === "style" ? new Map : new Set;

  function r(i) {
    if (i == null || i === void 0) return;
    const s = String(i).trim();
    if (s)
      if (t === "style") {
        const [o, ...l] = s.split(":").map(a => a ? a.trim() : "");
        o && l.length && n.set(o, l.join(":"))
      } else s.split(" ").filter(Boolean).forEach(o => n.add(o))
  }
  return typeof e == "string" ? t === "style" ? e.split(";").forEach(r) : r(e) : Array.isArray(e) ? e.forEach(i => r(i)) : e && typeof e == "object" && Object.entries(e).forEach(([i, s]) => {
    s && s !== "false" && (t === "style" ? n.set(String(i).trim(), String(s)) : r(i))
  }), n
}

function em(t, e) {
  return t.props = t.props || {}, e ? t.tag === "templateParams" ? (t.props = e, t) : (Object.entries(e).forEach(([n, r]) => {
    if (r === null) {
      t.props[n] = null;
      return
    }
    if (n === "class" || n === "style") {
      t.props[n] = nx(n, r);
      return
    }
    if (Yw.has(n)) {
      if (["textContent", "innerHTML"].includes(n) && typeof r == "object") {
        let l = e.type;
        if (e.type || (l = "application/json"), !l?.endsWith("json") && l !== "speculationrules") return;
        e.type = l, t.props.type = l, t[n] = JSON.stringify(r)
      } else t[n] = r;
      return
    }
    const i = String(r),
      s = n.startsWith("data-"),
      o = t.tag === "meta" && n === "content";
    i === "true" || i === "" ? t.props[n] = s || o ? i : !0 : !r && s && i === "false" ? t.props[n] = "false" : r !== void 0 && (t.props[n] = r)
  }), t) : t
}

function rx(t, e) {
  const n = typeof e == "object" && typeof e != "function" ? e : {
      [t === "script" || t === "noscript" || t === "style" ? "innerHTML" : "textContent"]: e
    },
    r = em({
      tag: t,
      props: {}
    }, n);
  return r.key && Ww.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map(i => ({
    ...r,
    props: {
      ...r.props,
      content: i
    }
  })) : r
}

function ix(t, e) {
  if (!t) return [];
  typeof t == "function" && (t = t());
  const n = (i, s) => {
    for (let o = 0; o < e.length; o++) s = e[o](i, s);
    return s
  };
  t = n(void 0, t);
  const r = [];
  return t = Of(t, n), Object.entries(t || {}).forEach(([i, s]) => {
    if (s !== void 0)
      for (const o of Array.isArray(s) ? s : [s]) r.push(rx(i, o))
  }), r.flat()
}
const Mf = (t, e) => t._w === e._w ? t._p - e._p : t._w - e._w,
  wd = {
    base: -10,
    title: 10
  },
  sx = {
    critical: -8,
    high: -1,
    low: 2
  },
  xd = {
    meta: {
      "content-security-policy": -30,
      charset: -20,
      viewport: -15
    },
    link: {
      preconnect: 20,
      stylesheet: 60,
      preload: 70,
      modulepreload: 70,
      prefetch: 90,
      "dns-prefetch": 90,
      prerender: 90
    },
    script: {
      async: 30,
      defer: 80,
      sync: 50
    },
    style: {
      imported: 40,
      sync: 60
    }
  },
  ox = /@import/,
  ro = t => t === "" || t === !0;

function lx(t, e) {
  if (typeof e.tagPriority == "number") return e.tagPriority;
  let n = 100;
  const r = sx[e.tagPriority] || 0,
    i = t.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : xd;
  if (e.tag in wd) n = wd[e.tag];
  else if (e.tag === "meta") {
    const s = e.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : e.props.charset ? "charset" : e.props.name === "viewport" ? "viewport" : null;
    s && (n = xd.meta[s])
  } else if (e.tag === "link" && e.props.rel) n = i.link[e.props.rel];
  else if (e.tag === "script") {
    const s = String(e.props.type);
    ro(e.props.async) ? n = i.script.async : e.props.src && !ro(e.props.defer) && !ro(e.props.async) && s !== "module" && !s.endsWith("json") || e.innerHTML && !s.endsWith("json") ? n = i.script.sync : (ro(e.props.defer) && e.props.src && !ro(e.props.async) || s === "module") && (n = i.script.defer)
  } else e.tag === "style" && (n = e.innerHTML && ox.test(e.innerHTML) ? i.style.imported : i.style.sync);
  return (n || 100) + r
}

function Td(t, e) {
  const n = typeof e == "function" ? e(t) : e,
    r = n.key || String(t.plugins.size + 1);
  t.plugins.get(r) || (t.plugins.set(r, n), t.hooks.addHooks(n.hooks || {}))
}

function ax(t = {}) {
  const e = Zw();
  e.addHooks(t.hooks || {});
  const n = !t.document,
    r = new Map,
    i = new Map,
    s = new Set,
    o = {
      _entryCount: 1,
      plugins: i,
      dirty: !1,
      resolvedOptions: t,
      hooks: e,
      ssr: n,
      entries: r,
      headEntries() {
        return [...r.values()]
      },
      use: l => Td(o, l),
      push(l, a) {
        const f = {
          ...a || {}
        };
        delete f.head;
        const c = f._index ?? o._entryCount++,
          u = {
            _i: c,
            input: l,
            options: f
          },
          d = {
            _poll(h = !1) {
              o.dirty = !0, !h && s.add(c), e.callHook("entries:updated", o)
            },
            dispose() {
              r.delete(c) && o.invalidate()
            },
            patch(h) {
              (!f.mode || f.mode === "server" && n || f.mode === "client" && !n) && (u.input = h, r.set(c, u), d._poll())
            }
          };
        return d.patch(l), d
      },
      async resolveTags() {
        const l = {
          tagMap: new Map,
          tags: [],
          entries: [...o.entries.values()]
        };
        for (await e.callHook("entries:resolve", l); s.size;) {
          const d = s.values().next().value;
          s.delete(d);
          const h = r.get(d);
          if (h) {
            const p = {
              tags: ix(h.input, t.propResolvers || []).map(g => Object.assign(g, h.options)),
              entry: h
            };
            await e.callHook("entries:normalize", p), h._tags = p.tags.map((g, y) => (g._w = lx(o, g), g._p = (h._i << 10) + y, g._d = Af(g), g._d || (g._h = Z_(g)), g))
          }
        }
        let a = !1;
        l.entries.flatMap(d => (d._tags || []).map(h => ({
          ...h,
          props: {
            ...h.props
          }
        }))).sort(Mf).reduce((d, h) => {
          const p = h._d || h._h;
          if (!d.has(p)) return d.set(p, h);
          const g = d.get(p);
          if ((h?.tagDuplicateStrategy || (Xw.has(h.tag) ? "merge" : null) || (h.key && h.key === g.key ? "merge" : null)) === "merge") {
            const b = {
              ...g.props
            };
            Object.entries(h.props).forEach(([v, _]) => b[v] = v === "style" ? new Map([...g.props.style || new Map, ..._]) : v === "class" ? new Set([...g.props.class || new Set, ..._]) : _), d.set(p, {
              ...h,
              props: b
            })
          } else h._p >> 10 === g._p >> 10 && h.tag === "meta" && Q_(p) ? (d.set(p, Object.assign([...Array.isArray(g) ? g : [g], h], h)), a = !0) : (h._w === g._w ? h._p > g._p : h?._w < g?._w) && d.set(p, h);
          return d
        }, l.tagMap);
        const f = l.tagMap.get("title"),
          c = l.tagMap.get("titleTemplate");
        if (o._title = f?.textContent, c) {
          const d = c?.textContent;
          if (o._titleTemplate = d, d) {
            let h = typeof d == "function" ? d(f?.textContent) : d;
            typeof h == "string" && !o.plugins.has("template-params") && (h = h.replace("%s", f?.textContent || "")), f ? h === null ? l.tagMap.delete("title") : l.tagMap.set("title", {
              ...f,
              textContent: h
            }) : (c.tag = "title", c.textContent = h)
          }
        }
        l.tags = Array.from(l.tagMap.values()), a && (l.tags = l.tags.flat().sort(Mf)), await e.callHook("tags:beforeResolve", l), await e.callHook("tags:resolve", l), await e.callHook("tags:afterResolve", l);
        const u = [];
        for (const d of l.tags) {
          const {
            innerHTML: h,
            tag: p,
            props: g
          } = d;
          if (Vw.has(p) && !(Object.keys(g).length === 0 && !d.innerHTML && !d.textContent) && !(p === "meta" && !g.content && !g["http-equiv"] && !g.charset)) {
            if (p === "script" && h) {
              if (String(g.type).endsWith("json")) {
                const y = typeof h == "string" ? h : JSON.stringify(h);
                d.innerHTML = y.replace(/</g, "\\u003C")
              } else typeof h == "string" && (d.innerHTML = h.replace(new RegExp(`</${p}`, "g"), `<\\/${p}`));
              d._d = Af(d)
            }
            u.push(d)
          }
        }
        return u
      },
      invalidate() {
        for (const l of r.values()) s.add(l._i);
        o.dirty = !0, e.callHook("entries:updated", o)
      }
    };
  return (t?.plugins || []).forEach(l => Td(o, l)), o.hooks.callHook("init", o), t.init?.forEach(l => l && o.push(l)), o
}
const $c = "%separator";

function cx(t, e, n = !1) {
  let r;
  if (e === "s" || e === "pageTitle") r = t.pageTitle;
  else if (e.includes(".")) {
    const i = e.indexOf(".");
    r = t[e.substring(0, i)]?.[e.substring(i + 1)]
  } else r = t[e];
  if (r !== void 0) return n ? (r || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r || ""
}

function Nl(t, e, n, r = !1) {
  if (typeof t != "string" || !t.includes("%")) return t;
  let i = t;
  try {
    i = decodeURI(t)
  } catch {}
  const s = i.match(/%\w+(?:\.\w+)?/g);
  if (!s) return t;
  const o = t.includes($c);
  return t = t.replace(/%\w+(?:\.\w+)?/g, l => {
    if (l === $c || !s.includes(l)) return l;
    const a = cx(e, l.slice(1), r);
    return a !== void 0 ? a : l
  }).trim(), o && (t = t.split($c).map(l => l.trim()).filter(l => l !== "").join(n ? ` ${n} ` : " ")), t
}
const Sd = t => t.includes(":key") ? t : t.split(":").join(":key:"),
  fx = {
    key: "aliasSorting",
    hooks: {
      "tags:resolve": t => {
        let e = !1;
        for (const n of t.tags) {
          const r = n.tagPriority;
          if (!r) continue;
          const i = String(r);
          if (i.startsWith("before:")) {
            const s = Sd(i.slice(7)),
              o = t.tagMap.get(s);
            o && (typeof o.tagPriority == "number" && (n.tagPriority = o.tagPriority), n._p = o._p - 1, e = !0)
          } else if (i.startsWith("after:")) {
            const s = Sd(i.slice(6)),
              o = t.tagMap.get(s);
            o && (typeof o.tagPriority == "number" && (n.tagPriority = o.tagPriority), n._p = o._p + 1, e = !0)
          }
        }
        e && (t.tags = t.tags.sort(Mf))
      }
    }
  },
  ux = {
    key: "deprecations",
    hooks: {
      "entries:normalize": ({
        tags: t
      }) => {
        for (const e of t) e.props.children && (e.innerHTML = e.props.children, delete e.props.children), e.props.hid && (e.key = e.props.hid, delete e.props.hid), e.props.vmid && (e.key = e.props.vmid, delete e.props.vmid), e.props.body && (e.tagPosition = "bodyClose", delete e.props.body)
      }
    }
  };
async function Nf(t) {
  if (typeof t === "function") return t;
  if (t instanceof Promise) return await t;
  if (Array.isArray(t)) return await Promise.all(t.map(n => Nf(n)));
  if (t?.constructor === Object) {
    const n = {};
    for (const r of Object.keys(t)) n[r] = await Nf(t[r]);
    return n
  }
  return t
}
const hx = {
    key: "promises",
    hooks: {
      "entries:resolve": async t => {
        const e = [];
        for (const n in t.entries) t.entries[n]._promisesProcessed || e.push(Nf(t.entries[n].input).then(r => {
          t.entries[n].input = r, t.entries[n]._promisesProcessed = !0
        }));
        await Promise.all(e)
      }
    }
  },
  dx = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
  },
  px = ["innerHTML", "textContent"],
  gx = t => ({
    key: "template-params",
    hooks: {
      "entries:normalize": e => {
        const n = e.tags.filter(r => r.tag === "templateParams" && r.mode === "server")?.[0]?.props || {};
        Object.keys(n).length && (t._ssrPayload = {
          templateParams: {
            ...t._ssrPayload?.templateParams || {},
            ...n
          }
        })
      },
      "tags:resolve": ({
        tagMap: e,
        tags: n
      }) => {
        const r = e.get("templateParams")?.props || {},
          i = r.separator || "|";
        delete r.separator, r.pageTitle = Nl(r.pageTitle || t._title || "", r, i);
        for (const s of n) {
          if (s.processTemplateParams === !1) continue;
          const o = dx[s.tag];
          if (o && typeof s.props[o] == "string") s.props[o] = Nl(s.props[o], r, i);
          else if (s.processTemplateParams || s.tag === "titleTemplate" || s.tag === "title")
            for (const l of px) typeof s[l] == "string" && (s[l] = Nl(s[l], r, i, s.tag === "script" && s.props.type.endsWith("json")))
        }
        t._templateParams = r, t._separator = i
      },
      "tags:afterResolve": ({
        tagMap: e
      }) => {
        const n = e.get("title");
        n?.textContent && n.processTemplateParams !== !1 && (n.textContent = Nl(n.textContent, t._templateParams, t._separator))
      }
    }
  }),
  _x = "usehead";

function mx(t) {
  return {
    install(n) {
      n.config.globalProperties.$unhead = t, n.config.globalProperties.$head = t, n.provide(_x, t)
    }
  }.install
}
const yx = (t, e) => [],
  vx = t => G_({}, ...yx().map(e => e.data).reverse()),
  bx = vx;
let na;

function wx() {
  return na = $fetch(zu(`builds/meta/${oc().app.buildId}.json`), {
    responseType: "json"
  }), na.catch(t => {
    console.error("[nuxt] Error fetching app manifest.", t)
  }), na
}

function tm() {
  return na || wx()
}

function nm(t) {
  const e = typeof t == "string" ? t : t.path;
  try {
    return bx(e)
  } catch (n) {
    return console.error("[nuxt] Error matching route rules.", n), {}
  }
}
async function Ed(t, e = {}) {
  return null
}
async function xx(t) {
  return null
}
let bi = null;
async function Tx() {
  if (bi) return bi;
  const t = document.getElementById("__NUXT_DATA__");
  if (!t) return {};
  const e = await Sx(t.textContent || ""),
    n = t.dataset.src ? await xx(t.dataset.src) : void 0;
  return bi = {
    ...e,
    ...n,
    ...window.__NUXT__
  }, bi.config?.public && (bi.config.public = ui(bi.config.public)), bi
}
async function Sx(t) {
  return await Uw(t, wt()._payloadRevivers)
}

function Ex(t, e) {
  wt()._payloadRevivers[t] = e
}
const Cx = [
    ["NuxtError", t => Ii(t)],
    ["EmptyShallowRef", t => $s(t === "_" ? void 0 : t === "0n" ? BigInt(0) : ka(t))],
    ["EmptyRef", t => Ns(t === "_" ? void 0 : t === "0n" ? BigInt(0) : ka(t))],
    ["ShallowRef", t => $s(t)],
    ["ShallowReactive", t => Ar(t)],
    ["Ref", t => Ns(t)],
    ["Reactive", t => ui(t)]
  ],
  kx = Sn({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(t) {
      let e, n;
      for (const [r, i] of Cx) Ex(r, i);
      Object.assign(t.payload, ([e, n] = Ro(() => t.runWithContext(Tx)), e = await e, n(), e)), window.__NUXT__ = t.payload
    }
  });
async function Vu(t, e = {}) {
  const n = e.document || t.resolvedOptions.document;
  if (!n || !t.dirty) return;
  const r = {
    shouldRender: !0,
    tags: []
  };
  if (await t.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return t._domUpdatePromise || (t._domUpdatePromise = new Promise(async i => {
    const s = new Map,
      o = new Promise(h => {
        t.resolveTags().then(p => {
          h(p.map(g => {
            const y = s.get(g._d) || 0,
              b = {
                tag: g,
                id: (y ? `${g._d}:${y}` : g._d) || g._h,
                shouldRender: !0
              };
            return g._d && Q_(g._d) && s.set(g._d, y + 1), b
          }))
        })
      });
    let l = t._dom;
    if (!l) {
      l = {
        title: n.title,
        elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
      };
      for (const h of ["body", "head"]) {
        const p = n[h]?.children;
        for (const g of p) {
          const y = g.tagName.toLowerCase();
          if (!bd.has(y)) continue;
          const b = em({
            tag: y,
            props: {}
          }, {
            innerHTML: g.innerHTML,
            ...g.getAttributeNames().reduce((v, _) => (v[_] = g.getAttribute(_), v), {}) || {}
          });
          if (b.key = g.getAttribute("data-hid") || void 0, b._d = Af(b) || Z_(b), l.elMap.has(b._d)) {
            let v = 1,
              _ = b._d;
            for (; l.elMap.has(_);) _ = `${b._d}:${v++}`;
            l.elMap.set(_, g)
          } else l.elMap.set(b._d, g)
        }
      }
    }
    l.pendingSideEffects = {
      ...l.sideEffects
    }, l.sideEffects = {};

    function a(h, p, g) {
      const y = `${h}:${p}`;
      l.sideEffects[y] = g, delete l.pendingSideEffects[y]
    }

    function f({
      id: h,
      $el: p,
      tag: g
    }) {
      const y = g.tag.endsWith("Attrs");
      l.elMap.set(h, p), y || (g.textContent && g.textContent !== p.textContent && (p.textContent = g.textContent), g.innerHTML && g.innerHTML !== p.innerHTML && (p.innerHTML = g.innerHTML), a(h, "el", () => {
        p?.remove(), l.elMap.delete(h)
      }));
      for (const b in g.props) {
        if (!Object.prototype.hasOwnProperty.call(g.props, b)) continue;
        const v = g.props[b];
        if (b.startsWith("on") && typeof v == "function") {
          const m = p?.dataset;
          if (m && m[`${b}fired`]) {
            const w = b.slice(0, -5);
            v.call(p, new Event(w.substring(2)))
          }
          p.getAttribute(`data-${b}`) !== "" && ((g.tag === "bodyAttrs" ? n.defaultView : p).addEventListener(b.substring(2), v.bind(p)), p.setAttribute(`data-${b}`, ""));
          continue
        }
        const _ = `attr:${b}`;
        if (b === "class") {
          if (!v) continue;
          for (const m of v) y && a(h, `${_}:${m}`, () => p.classList.remove(m)), !p.classList.contains(m) && p.classList.add(m)
        } else if (b === "style") {
          if (!v) continue;
          for (const [m, w] of v) a(h, `${_}:${m}`, () => {
            p.style.removeProperty(m)
          }), p.style.setProperty(m, w)
        } else v !== !1 && v !== null && (p.getAttribute(b) !== v && p.setAttribute(b, v === !0 ? "" : String(v)), y && a(h, _, () => p.removeAttribute(b)))
      }
    }
    const c = [],
      u = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      },
      d = await o;
    for (const h of d) {
      const {
        tag: p,
        shouldRender: g,
        id: y
      } = h;
      if (g) {
        if (p.tag === "title") {
          n.title = p.textContent, a("title", "", () => n.title = l.title);
          continue
        }
        h.$el = h.$el || l.elMap.get(y), h.$el ? f(h) : bd.has(p.tag) && c.push(h)
      }
    }
    for (const h of c) {
      const p = h.tag.tagPosition || "head";
      h.$el = n.createElement(h.tag.tag), f(h), u[p] = u[p] || n.createDocumentFragment(), u[p].appendChild(h.$el)
    }
    for (const h of d) await t.hooks.callHook("dom:renderTag", h, n, a);
    u.head && n.head.appendChild(u.head), u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild), u.bodyClose && n.body.appendChild(u.bodyClose);
    for (const h in l.pendingSideEffects) l.pendingSideEffects[h]();
    t._dom = l, await t.hooks.callHook("dom:rendered", {
      renders: d
    }), i()
  }).finally(() => {
    t._domUpdatePromise = void 0, t.dirty = !1
  })), t._domUpdatePromise
}

function Px(t = {}) {
  const e = t.domOptions?.render || Vu;
  t.document = t.document || (typeof window < "u" ? document : void 0);
  const n = t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || !1;
  return ax({
    ...t,
    plugins: [...t.plugins || [], {
      key: "client",
      hooks: {
        "entries:updated": e
      }
    }],
    init: [n ? JSON.parse(n) : !1, ...t.init || []]
  })
}

function Rx(t, e) {
  let n = 0;
  return () => {
    const r = ++n;
    e(() => {
      n === r && t()
    })
  }
}

function Ax(t = {}) {
  const e = Px({
    domOptions: {
      render: Rx(() => Vu(e), n => setTimeout(n, 0))
    },
    ...t
  });
  return e.install = mx(e), e
}
const Ox = {
    disableDefaults: !0,
    disableCapoSorting: !1,
    plugins: [ux, hx, gx, fx]
  },
  Mx = Sn({
    name: "nuxt:head",
    enforce: "pre",
    setup(t) {
      const e = Ax(Ox);
      t.vueApp.use(e);
      {
        let n = !0;
        const r = async () => {
          n = !1, await Vu(e)
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
const cs = typeof document < "u";

function rm(t) {
  return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function Nx(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module" || t.default && rm(t.default)
}
const Ne = Object.assign;

function Dc(t, e) {
  const n = {};
  for (const r in e) {
    const i = e[r];
    n[r] = Kn(i) ? i.map(t) : t(i)
  }
  return n
}
const Ao = () => {},
  Kn = Array.isArray;

function Cd(t, e) {
  const n = {};
  for (const r in t) n[r] = r in e ? e[r] : t[r];
  return n
}
const im = /#/g,
  $x = /&/g,
  Dx = /\//g,
  Lx = /=/g,
  Ix = /\?/g,
  sm = /\+/g,
  Hx = /%5B/g,
  Fx = /%5D/g,
  om = /%5E/g,
  Bx = /%60/g,
  lm = /%7B/g,
  Ux = /%7C/g,
  am = /%7D/g,
  jx = /%20/g;

function Gu(t) {
  return t == null ? "" : encodeURI("" + t).replace(Ux, "|").replace(Hx, "[").replace(Fx, "]")
}

function Wx(t) {
  return Gu(t).replace(lm, "{").replace(am, "}").replace(om, "^")
}

function $f(t) {
  return Gu(t).replace(sm, "%2B").replace(jx, "+").replace(im, "%23").replace($x, "%26").replace(Bx, "`").replace(lm, "{").replace(am, "}").replace(om, "^")
}

function zx(t) {
  return $f(t).replace(Lx, "%3D")
}

function Vx(t) {
  return Gu(t).replace(im, "%23").replace(Ix, "%3F")
}

function Gx(t) {
  return Vx(t).replace(Dx, "%2F")
}

function Zo(t) {
  if (t == null) return null;
  try {
    return decodeURIComponent("" + t)
  } catch {}
  return "" + t
}
const Yx = /\/$/,
  Xx = t => t.replace(Yx, "");

function Lc(t, e, n = "/") {
  let r, i = {},
    s = "",
    o = "";
  const l = e.indexOf("#");
  let a = e.indexOf("?");
  return a = l >= 0 && a > l ? -1 : a, a >= 0 && (r = e.slice(0, a), s = e.slice(a, l > 0 ? l : e.length), i = t(s.slice(1))), l >= 0 && (r = r || e.slice(0, l), o = e.slice(l, e.length)), r = Qx(r ?? e, n), {
    fullPath: r + s + o,
    path: r,
    query: i,
    hash: Zo(o)
  }
}

function Kx(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "")
}

function kd(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}

function qx(t, e, n) {
  const r = e.matched.length - 1,
    i = n.matched.length - 1;
  return r > -1 && r === i && Hs(e.matched[r], n.matched[i]) && cm(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}

function Hs(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}

function cm(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (var n in t)
    if (!Jx(t[n], e[n])) return !1;
  return !0
}

function Jx(t, e) {
  return Kn(t) ? Pd(t, e) : Kn(e) ? Pd(e, t) : t?.valueOf() === e?.valueOf()
}

function Pd(t, e) {
  return Kn(e) ? t.length === e.length && t.every((n, r) => n === e[r]) : t.length === 1 && t[0] === e
}

function Qx(t, e) {
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
  return n.slice(0, s).join("/") + "/" + r.slice(o).join("/")
}
const kn = {
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
let Df = (function(t) {
    return t.pop = "pop", t.push = "push", t
  })({}),
  Ic = (function(t) {
    return t.back = "back", t.forward = "forward", t.unknown = "", t
  })({});

function Zx(t) {
  if (!t)
    if (cs) {
      const e = document.querySelector("base");
      t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Xx(t)
}
const eT = /^[^#]+#/;

function tT(t, e) {
  return t.replace(eT, "#") + e
}

function nT(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    r = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: r.left - n.left - (e.left || 0),
    top: r.top - n.top - (e.top || 0)
  }
}
const cc = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function rT(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      r = typeof n == "string" && n.startsWith("#"),
      i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    e = nT(i, t)
  } else e = t;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.scrollX, e.top != null ? e.top : window.scrollY)
}

function Rd(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const Lf = new Map;

function iT(t, e) {
  Lf.set(t, e)
}

function sT(t) {
  const e = Lf.get(t);
  return Lf.delete(t), e
}

function oT(t) {
  return typeof t == "string" || t && typeof t == "object"
}

function fm(t) {
  return typeof t == "string" || typeof t == "symbol"
}
let Qe = (function(t) {
  return t[t.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", t[t.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", t[t.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", t[t.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", t[t.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", t
})({});
const um = Symbol("");
Qe.MATCHER_NOT_FOUND + "", Qe.NAVIGATION_GUARD_REDIRECT + "", Qe.NAVIGATION_ABORTED + "", Qe.NAVIGATION_CANCELLED + "", Qe.NAVIGATION_DUPLICATED + "";

function Fs(t, e) {
  return Ne(new Error, {
    type: t,
    [um]: !0
  }, e)
}

function wr(t, e) {
  return t instanceof Error && um in t && (e == null || !!(t.type & e))
}
const lT = ["params", "query", "hash"];

function aT(t) {
  if (typeof t == "string") return t;
  if (t.path != null) return t.path;
  const e = {};
  for (const n of lT) n in t && (e[n] = t[n]);
  return JSON.stringify(e, null, 2)
}

function cT(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const n = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let r = 0; r < n.length; ++r) {
    const i = n[r].replace(sm, " "),
      s = i.indexOf("="),
      o = Zo(s < 0 ? i : i.slice(0, s)),
      l = s < 0 ? null : Zo(i.slice(s + 1));
    if (o in e) {
      let a = e[o];
      Kn(a) || (a = e[o] = [a]), a.push(l)
    } else e[o] = l
  }
  return e
}

function Ad(t) {
  let e = "";
  for (let n in t) {
    const r = t[n];
    if (n = zx(n), r == null) {
      r !== void 0 && (e += (e.length ? "&" : "") + n);
      continue
    }(Kn(r) ? r.map(i => i && $f(i)) : [r && $f(r)]).forEach(i => {
      i !== void 0 && (e += (e.length ? "&" : "") + n, i != null && (e += "=" + i))
    })
  }
  return e
}

function fT(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = Kn(r) ? r.map(i => i == null ? null : "" + i) : r == null ? r : "" + r)
  }
  return e
}
const uT = Symbol(""),
  Od = Symbol(""),
  Yu = Symbol(""),
  hm = Symbol(""),
  If = Symbol("");

function io() {
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

function Xr(t, e, n, r, i, s = o => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((l, a) => {
    const f = d => {
        d === !1 ? a(Fs(Qe.NAVIGATION_ABORTED, {
          from: n,
          to: e
        })) : d instanceof Error ? a(d) : oT(d) ? a(Fs(Qe.NAVIGATION_GUARD_REDIRECT, {
          from: e,
          to: d
        })) : (o && r.enterCallbacks[i] === o && typeof d == "function" && o.push(d), l())
      },
      c = s(() => t.call(r && r.instances[i], e, n, f));
    let u = Promise.resolve(c);
    t.length < 3 && (u = u.then(f)), u.catch(d => a(d))
  })
}

function Hc(t, e, n, r, i = s => s()) {
  const s = [];
  for (const o of t)
    for (const l in o.components) {
      let a = o.components[l];
      if (!(e !== "beforeRouteEnter" && !o.instances[l]))
        if (rm(a)) {
          const f = (a.__vccOpts || a)[e];
          f && s.push(Xr(f, n, r, o, l, i))
        } else {
          let f = a();
          s.push(() => f.then(c => {
            if (!c) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);
            const u = Nx(c) ? c.default : c;
            o.mods[l] = c, o.components[l] = u;
            const d = (u.__vccOpts || u)[e];
            return d && Xr(d, n, r, o, l, i)()
          }))
        }
    }
  return s
}

function hT(t, e) {
  const n = [],
    r = [],
    i = [],
    s = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < s; o++) {
    const l = e.matched[o];
    l && (t.matched.find(f => Hs(f, l)) ? r.push(l) : n.push(l));
    const a = t.matched[o];
    a && (e.matched.find(f => Hs(f, a)) || i.push(a))
  }
  return [n, r, i]
}
let dT = () => location.protocol + "//" + location.host;

function dm(t, e) {
  const {
    pathname: n,
    search: r,
    hash: i
  } = e, s = t.indexOf("#");
  if (s > -1) {
    let o = i.includes(t.slice(s)) ? t.slice(s).length : 1,
      l = i.slice(o);
    return l[0] !== "/" && (l = "/" + l), kd(l, "")
  }
  return kd(n, t) + r + i
}

function pT(t, e, n, r) {
  let i = [],
    s = [],
    o = null;
  const l = ({
    state: d
  }) => {
    const h = dm(t, location),
      p = n.value,
      g = e.value;
    let y = 0;
    if (d) {
      if (n.value = h, e.value = d, o && o === p) {
        o = null;
        return
      }
      y = g ? d.position - g.position : 0
    } else r(h);
    i.forEach(b => {
      b(n.value, p, {
        delta: y,
        type: Df.pop,
        direction: y ? y > 0 ? Ic.forward : Ic.back : Ic.unknown
      })
    })
  };

  function a() {
    o = n.value
  }

  function f(d) {
    i.push(d);
    const h = () => {
      const p = i.indexOf(d);
      p > -1 && i.splice(p, 1)
    };
    return s.push(h), h
  }

  function c() {
    if (document.visibilityState === "hidden") {
      const {
        history: d
      } = window;
      if (!d.state) return;
      d.replaceState(Ne({}, d.state, {
        scroll: cc()
      }), "")
    }
  }

  function u() {
    for (const d of s) d();
    s = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", c), document.removeEventListener("visibilitychange", c)
  }
  return window.addEventListener("popstate", l), window.addEventListener("pagehide", c), document.addEventListener("visibilitychange", c), {
    pauseListeners: a,
    listen: f,
    destroy: u
  }
}

function Md(t, e, n, r = !1, i = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? cc() : null
  }
}

function gT(t) {
  const {
    history: e,
    location: n
  } = window, r = {
    value: dm(t, n)
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

  function s(a, f, c) {
    const u = t.indexOf("#"),
      d = u > -1 ? (n.host && document.querySelector("base") ? t : t.slice(u)) + a : dT() + t + a;
    try {
      e[c ? "replaceState" : "pushState"](f, "", d), i.value = f
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](d)
    }
  }

  function o(a, f) {
    s(a, Ne({}, e.state, Md(i.value.back, a, i.value.forward, !0), f, {
      position: i.value.position
    }), !0), r.value = a
  }

  function l(a, f) {
    const c = Ne({}, i.value, e.state, {
      forward: a,
      scroll: cc()
    });
    s(c.current, c, !0), s(a, Ne({}, Md(r.value, a, null), {
      position: c.position + 1
    }, f), !1), r.value = a
  }
  return {
    location: r,
    state: i,
    push: l,
    replace: o
  }
}

function pm(t) {
  t = Zx(t);
  const e = gT(t),
    n = pT(t, e.state, e.location, e.replace);

  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s)
  }
  const i = Ne({
    location: "",
    base: t,
    go: r,
    createHref: tT.bind(null, t)
  }, e, n);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => e.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => e.state.value
  }), i
}

function _T(t) {
  return t = location.host ? t || location.pathname + location.search : "", t.includes("#") || (t += "#"), pm(t)
}
let Ri = (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.Group = 2] = "Group", t
})({});
var ft = (function(t) {
  return t[t.Static = 0] = "Static", t[t.Param = 1] = "Param", t[t.ParamRegExp = 2] = "ParamRegExp", t[t.ParamRegExpEnd = 3] = "ParamRegExpEnd", t[t.EscapeNext = 4] = "EscapeNext", t
})(ft || {});
const mT = {
    type: Ri.Static,
    value: ""
  },
  yT = /[a-zA-Z0-9_]/;

function vT(t) {
  if (!t) return [
    []
  ];
  if (t === "/") return [
    [mT]
  ];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

  function e(h) {
    throw new Error(`ERR (${n})/"${f}": ${h}`)
  }
  let n = ft.Static,
    r = n;
  const i = [];
  let s;

  function o() {
    s && i.push(s), s = []
  }
  let l = 0,
    a, f = "",
    c = "";

  function u() {
    f && (n === ft.Static ? s.push({
      type: Ri.Static,
      value: f
    }) : n === ft.Param || n === ft.ParamRegExp || n === ft.ParamRegExpEnd ? (s.length > 1 && (a === "*" || a === "+") && e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: Ri.Param,
      value: f,
      regexp: c,
      repeatable: a === "*" || a === "+",
      optional: a === "*" || a === "?"
    })) : e("Invalid state to consume buffer"), f = "")
  }

  function d() {
    f += a
  }
  for (; l < t.length;) {
    if (a = t[l++], a === "\\" && n !== ft.ParamRegExp) {
      r = n, n = ft.EscapeNext;
      continue
    }
    switch (n) {
      case ft.Static:
        a === "/" ? (f && u(), o()) : a === ":" ? (u(), n = ft.Param) : d();
        break;
      case ft.EscapeNext:
        d(), n = r;
        break;
      case ft.Param:
        a === "(" ? n = ft.ParamRegExp : yT.test(a) ? d() : (u(), n = ft.Static, a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case ft.ParamRegExp:
        a === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + a : n = ft.ParamRegExpEnd : c += a;
        break;
      case ft.ParamRegExpEnd:
        u(), n = ft.Static, a !== "*" && a !== "?" && a !== "+" && l--, c = "";
        break;
      default:
        e("Unknown state");
        break
    }
  }
  return n === ft.ParamRegExp && e(`Unfinished custom RegExp for param "${f}"`), u(), o(), i
}
const Nd = "[^/]+?",
  bT = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  };
var Wt = (function(t) {
  return t[t._multiplier = 10] = "_multiplier", t[t.Root = 90] = "Root", t[t.Segment = 40] = "Segment", t[t.SubSegment = 30] = "SubSegment", t[t.Static = 40] = "Static", t[t.Dynamic = 20] = "Dynamic", t[t.BonusCustomRegExp = 10] = "BonusCustomRegExp", t[t.BonusWildcard = -50] = "BonusWildcard", t[t.BonusRepeatable = -20] = "BonusRepeatable", t[t.BonusOptional = -8] = "BonusOptional", t[t.BonusStrict = .7000000000000001] = "BonusStrict", t[t.BonusCaseSensitive = .25] = "BonusCaseSensitive", t
})(Wt || {});
const wT = /[.+*?^${}()[\]/\\]/g;

function xT(t, e) {
  const n = Ne({}, bT, e),
    r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const f of t) {
    const c = f.length ? [] : [Wt.Root];
    n.strict && !f.length && (i += "/");
    for (let u = 0; u < f.length; u++) {
      const d = f[u];
      let h = Wt.Segment + (n.sensitive ? Wt.BonusCaseSensitive : 0);
      if (d.type === Ri.Static) u || (i += "/"), i += d.value.replace(wT, "\\$&"), h += Wt.Static;
      else if (d.type === Ri.Param) {
        const {
          value: p,
          repeatable: g,
          optional: y,
          regexp: b
        } = d;
        s.push({
          name: p,
          repeatable: g,
          optional: y
        });
        const v = b || Nd;
        if (v !== Nd) {
          h += Wt.BonusCustomRegExp;
          try {
            `${v}`
          } catch (m) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + m.message)
          }
        }
        let _ = g ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        u || (_ = y && f.length < 2 ? `(?:/${_})` : "/" + _), y && (_ += "?"), i += _, h += Wt.Dynamic, y && (h += Wt.BonusOptional), g && (h += Wt.BonusRepeatable), v === ".*" && (h += Wt.BonusWildcard)
      }
      c.push(h)
    }
    r.push(c)
  }
  if (n.strict && n.end) {
    const f = r.length - 1;
    r[f][r[f].length - 1] += Wt.BonusStrict
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");

  function l(f) {
    const c = f.match(o),
      u = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const h = c[d] || "",
        p = s[d - 1];
      u[p.name] = h && p.repeatable ? h.split("/") : h
    }
    return u
  }

  function a(f) {
    let c = "",
      u = !1;
    for (const d of t) {
      (!u || !c.endsWith("/")) && (c += "/"), u = !1;
      for (const h of d)
        if (h.type === Ri.Static) c += h.value;
        else if (h.type === Ri.Param) {
        const {
          value: p,
          repeatable: g,
          optional: y
        } = h, b = p in f ? f[p] : "";
        if (Kn(b) && !g) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
        const v = Kn(b) ? b.join("/") : b;
        if (!v)
          if (y) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : u = !0);
          else throw new Error(`Missing required param "${p}"`);
        c += v
      }
    }
    return c || "/"
  }
  return {
    re: o,
    score: r,
    keys: s,
    parse: l,
    stringify: a
  }
}

function TT(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length;) {
    const r = e[n] - t[n];
    if (r) return r;
    n++
  }
  return t.length < e.length ? t.length === 1 && t[0] === Wt.Static + Wt.Segment ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === Wt.Static + Wt.Segment ? 1 : -1 : 0
}

function gm(t, e) {
  let n = 0;
  const r = t.score,
    i = e.score;
  for (; n < r.length && n < i.length;) {
    const s = TT(r[n], i[n]);
    if (s) return s;
    n++
  }
  if (Math.abs(i.length - r.length) === 1) {
    if ($d(r)) return 1;
    if ($d(i)) return -1
  }
  return i.length - r.length
}

function $d(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0
}
const ST = {
  strict: !1,
  end: !0,
  sensitive: !1
};

function ET(t, e, n) {
  const r = xT(vT(t.path), n),
    i = Ne(r, {
      record: t,
      parent: e,
      children: [],
      alias: []
    });
  return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i), i
}

function CT(t, e) {
  const n = [],
    r = new Map;
  e = Cd(ST, e);

  function i(u) {
    return r.get(u)
  }

  function s(u, d, h) {
    const p = !h,
      g = Ld(u);
    g.aliasOf = h && h.record;
    const y = Cd(e, u),
      b = [g];
    if ("alias" in u) {
      const m = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const w of m) b.push(Ld(Ne({}, g, {
        components: h ? h.record.components : g.components,
        path: w,
        aliasOf: h ? h.record : g
      })))
    }
    let v, _;
    for (const m of b) {
      const {
        path: w
      } = m;
      if (d && w[0] !== "/") {
        const T = d.record.path,
          E = T[T.length - 1] === "/" ? "" : "/";
        m.path = d.record.path + (w && E + w)
      }
      if (v = ET(m, d, y), h ? h.alias.push(v) : (_ = _ || v, _ !== v && _.alias.push(v), p && u.name && !Id(v) && o(u.name)), _m(v) && a(v), g.children) {
        const T = g.children;
        for (let E = 0; E < T.length; E++) s(T[E], v, h && h.children[E])
      }
      h = h || v
    }
    return _ ? () => {
      o(_)
    } : Ao
  }

  function o(u) {
    if (fm(u)) {
      const d = r.get(u);
      d && (r.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o))
    } else {
      const d = n.indexOf(u);
      d > -1 && (n.splice(d, 1), u.record.name && r.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o))
    }
  }

  function l() {
    return n
  }

  function a(u) {
    const d = RT(u, n);
    n.splice(d, 0, u), u.record.name && !Id(u) && r.set(u.record.name, u)
  }

  function f(u, d) {
    let h, p = {},
      g, y;
    if ("name" in u && u.name) {
      if (h = r.get(u.name), !h) throw Fs(Qe.MATCHER_NOT_FOUND, {
        location: u
      });
      y = h.record.name, p = Ne(Dd(d.params, h.keys.filter(_ => !_.optional).concat(h.parent ? h.parent.keys.filter(_ => _.optional) : []).map(_ => _.name)), u.params && Dd(u.params, h.keys.map(_ => _.name))), g = h.stringify(p)
    } else if (u.path != null) g = u.path, h = n.find(_ => _.re.test(g)), h && (p = h.parse(g), y = h.record.name);
    else {
      if (h = d.name ? r.get(d.name) : n.find(_ => _.re.test(d.path)), !h) throw Fs(Qe.MATCHER_NOT_FOUND, {
        location: u,
        currentLocation: d
      });
      y = h.record.name, p = Ne({}, d.params, u.params), g = h.stringify(p)
    }
    const b = [];
    let v = h;
    for (; v;) b.unshift(v.record), v = v.parent;
    return {
      name: y,
      path: g,
      params: p,
      matched: b,
      meta: PT(b)
    }
  }
  t.forEach(u => s(u));

  function c() {
    n.length = 0, r.clear()
  }
  return {
    addRoute: s,
    resolve: f,
    removeRoute: o,
    clearRoutes: c,
    getRoutes: l,
    getRecordMatcher: i
  }
}

function Dd(t, e) {
  const n = {};
  for (const r of e) r in t && (n[r] = t[r]);
  return n
}

function Ld(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: kT(t),
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

function kT(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else
    for (const r in t.components) e[r] = typeof n == "object" ? n[r] : n;
  return e
}

function Id(t) {
  for (; t;) {
    if (t.record.aliasOf) return !0;
    t = t.parent
  }
  return !1
}

function PT(t) {
  return t.reduce((e, n) => Ne(e, n.meta), {})
}

function RT(t, e) {
  let n = 0,
    r = e.length;
  for (; n !== r;) {
    const s = n + r >> 1;
    gm(t, e[s]) < 0 ? r = s : n = s + 1
  }
  const i = AT(t);
  return i && (r = e.lastIndexOf(i, r - 1)), r
}

function AT(t) {
  let e = t;
  for (; e = e.parent;)
    if (_m(e) && gm(t, e) === 0) return e
}

function _m({
  record: t
}) {
  return !!(t.name || t.components && Object.keys(t.components).length || t.redirect)
}

function Hd(t) {
  const e = $n(Yu),
    n = $n(hm),
    r = zn(() => {
      const a = dt(t.to);
      return e.resolve(a)
    }),
    i = zn(() => {
      const {
        matched: a
      } = r.value, {
        length: f
      } = a, c = a[f - 1], u = n.matched;
      if (!c || !u.length) return -1;
      const d = u.findIndex(Hs.bind(null, c));
      if (d > -1) return d;
      const h = Fd(a[f - 2]);
      return f > 1 && Fd(c) === h && u[u.length - 1].path !== h ? u.findIndex(Hs.bind(null, a[f - 2])) : d
    }),
    s = zn(() => i.value > -1 && DT(n.params, r.value.params)),
    o = zn(() => i.value > -1 && i.value === n.matched.length - 1 && cm(n.params, r.value.params));

  function l(a = {}) {
    if ($T(a)) {
      const f = e[dt(t.replace) ? "replace" : "push"](dt(t.to)).catch(Ao);
      return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f
    }
    return Promise.resolve()
  }
  return {
    route: r,
    href: zn(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: l
  }
}

function OT(t) {
  return t.length === 1 ? t[0] : t
}
const MT = hi({
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
      },
      viewTransition: Boolean
    },
    useLink: Hd,
    setup(t, {
      slots: e
    }) {
      const n = ui(Hd(t)),
        {
          options: r
        } = $n(Yu),
        i = zn(() => ({
          [Bd(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [Bd(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const s = e.default && OT(e.default(n));
        return t.custom ? s : mn("a", {
          "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: i.value
        }, s)
      }
    }
  }),
  NT = MT;

function $T(t) {
  if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}

function DT(t, e) {
  for (const n in e) {
    const r = e[n],
      i = t[n];
    if (typeof r == "string") {
      if (r !== i) return !1
    } else if (!Kn(i) || i.length !== r.length || r.some((s, o) => s.valueOf() !== i[o].valueOf())) return !1
  }
  return !0
}

function Fd(t) {
  return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const Bd = (t, e, n) => t ?? e ?? n,
  LT = hi({
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
      const r = $n(If),
        i = zn(() => t.route || r.value),
        s = $n(Od, 0),
        o = zn(() => {
          let f = dt(s);
          const {
            matched: c
          } = i.value;
          let u;
          for (;
            (u = c[f]) && !u.components;) f++;
          return f
        }),
        l = zn(() => i.value.matched[o.value]);
      $i(Od, zn(() => o.value + 1)), $i(uT, l), $i(If, i);
      const a = Ns();
      return ws(() => [a.value, l.value, t.name], ([f, c, u], [d, h, p]) => {
        c && (c.instances[u] = f, h && h !== c && f && f === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), f && c && (!h || !Hs(c, h) || !d) && (c.enterCallbacks[u] || []).forEach(g => g(f))
      }, {
        flush: "post"
      }), () => {
        const f = i.value,
          c = t.name,
          u = l.value,
          d = u && u.components[c];
        if (!d) return Ud(n.default, {
          Component: d,
          route: f
        });
        const h = u.props[c],
          p = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null,
          y = mn(d, Ne({}, p, e, {
            onVnodeUnmounted: b => {
              b.component.isUnmounted && (u.instances[c] = null)
            },
            ref: a
          }));
        return Ud(n.default, {
          Component: y,
          route: f
        }) || y
      }
    }
  });

function Ud(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n
}
const mm = LT;

function IT(t) {
  const e = CT(t.routes, t),
    n = t.parseQuery || cT,
    r = t.stringifyQuery || Ad,
    i = t.history,
    s = io(),
    o = io(),
    l = io(),
    a = $s(kn);
  let f = kn;
  cs && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Dc.bind(null, N => "" + N),
    u = Dc.bind(null, Gx),
    d = Dc.bind(null, Zo);

  function h(N, X) {
    let W, K;
    return fm(N) ? (W = e.getRecordMatcher(N), K = X) : K = N, e.addRoute(K, W)
  }

  function p(N) {
    const X = e.getRecordMatcher(N);
    X && e.removeRoute(X)
  }

  function g() {
    return e.getRoutes().map(N => N.record)
  }

  function y(N) {
    return !!e.getRecordMatcher(N)
  }

  function b(N, X) {
    if (X = Ne({}, X || a.value), typeof N == "string") {
      const k = Lc(n, N, X.path),
        M = e.resolve({
          path: k.path
        }, X),
        I = i.createHref(k.fullPath);
      return Ne(k, M, {
        params: d(M.params),
        hash: Zo(k.hash),
        redirectedFrom: void 0,
        href: I
      })
    }
    let W;
    if (N.path != null) W = Ne({}, N, {
      path: Lc(n, N.path, X.path).path
    });
    else {
      const k = Ne({}, N.params);
      for (const M in k) k[M] == null && delete k[M];
      W = Ne({}, N, {
        params: u(k)
      }), X.params = u(X.params)
    }
    const K = e.resolve(W, X),
      se = N.hash || "";
    K.params = c(d(K.params));
    const _e = Kx(r, Ne({}, N, {
        hash: Wx(se),
        path: K.path
      })),
      x = i.createHref(_e);
    return Ne({
      fullPath: _e,
      hash: se,
      query: r === Ad ? fT(N.query) : N.query || {}
    }, K, {
      redirectedFrom: void 0,
      href: x
    })
  }

  function v(N) {
    return typeof N == "string" ? Lc(n, N, a.value.path) : Ne({}, N)
  }

  function _(N, X) {
    if (f !== N) return Fs(Qe.NAVIGATION_CANCELLED, {
      from: X,
      to: N
    })
  }

  function m(N) {
    return E(N)
  }

  function w(N) {
    return m(Ne(v(N), {
      replace: !0
    }))
  }

  function T(N, X) {
    const W = N.matched[N.matched.length - 1];
    if (W && W.redirect) {
      const {
        redirect: K
      } = W;
      let se = typeof K == "function" ? K(N, X) : K;
      return typeof se == "string" && (se = se.includes("?") || se.includes("#") ? se = v(se) : {
        path: se
      }, se.params = {}), Ne({
        query: N.query,
        hash: N.hash,
        params: se.path != null ? {} : N.params
      }, se)
    }
  }

  function E(N, X) {
    const W = f = b(N),
      K = a.value,
      se = N.state,
      _e = N.force,
      x = N.replace === !0,
      k = T(W, K);
    if (k) return E(Ne(v(k), {
      state: typeof k == "object" ? Ne({}, se, k.state) : se,
      force: _e,
      replace: x
    }), X || W);
    const M = W;
    M.redirectedFrom = X;
    let I;
    return !_e && qx(r, K, W) && (I = Fs(Qe.NAVIGATION_DUPLICATED, {
      to: M,
      from: K
    }), re(K, K, !0, !1)), (I ? Promise.resolve(I) : P(M, K)).catch(S => wr(S) ? wr(S, Qe.NAVIGATION_GUARD_REDIRECT) ? S : O(S) : F(S, M, K)).then(S => {
      if (S) {
        if (wr(S, Qe.NAVIGATION_GUARD_REDIRECT)) return E(Ne({
          replace: x
        }, v(S.to), {
          state: typeof S.to == "object" ? Ne({}, se, S.to.state) : se,
          force: _e
        }), X || M)
      } else S = A(M, K, !0, x, se);
      return D(M, K, S), S
    })
  }

  function R(N, X) {
    const W = _(N, X);
    return W ? Promise.reject(W) : Promise.resolve()
  }

  function C(N) {
    const X = ge.values().next().value;
    return X && typeof X.runWithContext == "function" ? X.runWithContext(N) : N()
  }

  function P(N, X) {
    let W;
    const [K, se, _e] = hT(N, X);
    W = Hc(K.reverse(), "beforeRouteLeave", N, X);
    for (const k of K) k.leaveGuards.forEach(M => {
      W.push(Xr(M, N, X))
    });
    const x = R.bind(null, N, X);
    return W.push(x), Re(W).then(() => {
      W = [];
      for (const k of s.list()) W.push(Xr(k, N, X));
      return W.push(x), Re(W)
    }).then(() => {
      W = Hc(se, "beforeRouteUpdate", N, X);
      for (const k of se) k.updateGuards.forEach(M => {
        W.push(Xr(M, N, X))
      });
      return W.push(x), Re(W)
    }).then(() => {
      W = [];
      for (const k of _e)
        if (k.beforeEnter)
          if (Kn(k.beforeEnter))
            for (const M of k.beforeEnter) W.push(Xr(M, N, X));
          else W.push(Xr(k.beforeEnter, N, X));
      return W.push(x), Re(W)
    }).then(() => (N.matched.forEach(k => k.enterCallbacks = {}), W = Hc(_e, "beforeRouteEnter", N, X, C), W.push(x), Re(W))).then(() => {
      W = [];
      for (const k of o.list()) W.push(Xr(k, N, X));
      return W.push(x), Re(W)
    }).catch(k => wr(k, Qe.NAVIGATION_CANCELLED) ? k : Promise.reject(k))
  }

  function D(N, X, W) {
    l.list().forEach(K => C(() => K(N, X, W)))
  }

  function A(N, X, W, K, se) {
    const _e = _(N, X);
    if (_e) return _e;
    const x = X === kn,
      k = cs ? history.state : {};
    W && (K || x ? i.replace(N.fullPath, Ne({
      scroll: x && k && k.scroll
    }, se)) : i.push(N.fullPath, se)), a.value = N, re(N, X, W, x), O()
  }
  let $;

  function z() {
    $ || ($ = i.listen((N, X, W) => {
      if (!Ce.listening) return;
      const K = b(N),
        se = T(K, Ce.currentRoute.value);
      if (se) {
        E(Ne(se, {
          replace: !0,
          force: !0
        }), K).catch(Ao);
        return
      }
      f = K;
      const _e = a.value;
      cs && iT(Rd(_e.fullPath, W.delta), cc()), P(K, _e).catch(x => wr(x, Qe.NAVIGATION_ABORTED | Qe.NAVIGATION_CANCELLED) ? x : wr(x, Qe.NAVIGATION_GUARD_REDIRECT) ? (E(Ne(v(x.to), {
        force: !0
      }), K).then(k => {
        wr(k, Qe.NAVIGATION_ABORTED | Qe.NAVIGATION_DUPLICATED) && !W.delta && W.type === Df.pop && i.go(-1, !1)
      }).catch(Ao), Promise.reject()) : (W.delta && i.go(-W.delta, !1), F(x, K, _e))).then(x => {
        x = x || A(K, _e, !1), x && (W.delta && !wr(x, Qe.NAVIGATION_CANCELLED) ? i.go(-W.delta, !1) : W.type === Df.pop && wr(x, Qe.NAVIGATION_ABORTED | Qe.NAVIGATION_DUPLICATED) && i.go(-1, !1)), D(K, _e, x)
      }).catch(Ao)
    }))
  }
  let G = io(),
    L = io(),
    B;

  function F(N, X, W) {
    O(N);
    const K = L.list();
    return K.length ? K.forEach(se => se(N, X, W)) : console.error(N), Promise.reject(N)
  }

  function Z() {
    return B && a.value !== kn ? Promise.resolve() : new Promise((N, X) => {
      G.add([N, X])
    })
  }

  function O(N) {
    return B || (B = !N, z(), G.list().forEach(([X, W]) => N ? W(N) : X()), G.reset()), N
  }

  function re(N, X, W, K) {
    const {
      scrollBehavior: se
    } = t;
    if (!cs || !se) return Promise.resolve();
    const _e = !W && sT(Rd(N.fullPath, 0)) || (K || !W) && history.state && history.state.scroll || null;
    return Yo().then(() => se(N, X, _e)).then(x => x && rT(x)).catch(x => F(x, N, X))
  }
  const fe = N => i.go(N);
  let Te;
  const ge = new Set,
    Ce = {
      currentRoute: a,
      listening: !0,
      addRoute: h,
      removeRoute: p,
      clearRoutes: e.clearRoutes,
      hasRoute: y,
      getRoutes: g,
      resolve: b,
      options: t,
      push: m,
      replace: w,
      go: fe,
      back: () => fe(-1),
      forward: () => fe(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: L.add,
      isReady: Z,
      install(N) {
        N.component("RouterLink", NT), N.component("RouterView", mm), N.config.globalProperties.$router = Ce, Object.defineProperty(N.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => dt(a)
        }), cs && !Te && a.value === kn && (Te = !0, m(i.location).catch(K => {}));
        const X = {};
        for (const K in kn) Object.defineProperty(X, K, {
          get: () => a.value[K],
          enumerable: !0
        });
        N.provide(Yu, Ce), N.provide(hm, Ar(X)), N.provide(If, a);
        const W = N.unmount;
        ge.add(N), N.unmount = function() {
          ge.delete(N), ge.size < 1 && (f = kn, $ && $(), $ = null, a.value = kn, Te = !1, B = !1), W()
        }
      }
    };

  function Re(N) {
    return N.reduce((X, W) => X.then(() => C(W)), Promise.resolve())
  }
  return Ce
}
const HT = /(:\w+)\([^)]+\)/g,
  FT = /(:\w+)[?+*]/g,
  BT = /:\w+/g,
  UT = (t, e) => e.path.replace(HT, "$1").replace(FT, "$1").replace(BT, n => t.params[n.slice(1)]?.toString() || ""),
  Hf = (t, e) => {
    const n = t.route.matched.find(i => i.components?.default === t.Component.type),
      r = e ?? n?.meta.key ?? (n && UT(t.route, n));
    return typeof r == "function" ? r(t.route) : r
  },
  jT = (t, e) => ({
    default: () => t ? mn(Cv, t === !0 ? {} : t, e) : e
  });

function Xu(t) {
  return Array.isArray(t) ? t : [t]
}
const WT = "modulepreload",
  zT = function(t, e) {
    return new URL(t, e).href
  },
  jd = {},
  VT = function(e, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      let f = function(c) {
        return Promise.all(c.map(u => Promise.resolve(u).then(d => ({
          status: "fulfilled",
          value: d
        }), d => ({
          status: "rejected",
          reason: d
        }))))
      };
      const o = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        a = l?.nonce || l?.getAttribute("nonce");
      i = f(n.map(c => {
        if (c = zT(c, r), c in jd) return;
        jd[c] = !0;
        const u = c.endsWith(".css"),
          d = u ? '[rel="stylesheet"]' : "";
        if (r)
          for (let p = o.length - 1; p >= 0; p--) {
            const g = o[p];
            if (g.href === c && (!u || g.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${c}"]${d}`)) return;
        const h = document.createElement("link");
        if (h.rel = u ? "stylesheet" : WT, u || (h.as = "script"), h.crossOrigin = "", h.href = c, a && h.setAttribute("nonce", a), document.head.appendChild(h), u) return new Promise((p, g) => {
          h.addEventListener("load", p), h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${c}`)))
        })
      }))
    }

    function s(o) {
      const l = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (l.payload = o, window.dispatchEvent(l), !l.defaultPrevented) throw o
    }
    return i.then(o => {
      for (const l of o || []) l.status === "rejected" && s(l.reason);
      return e().catch(s)
    })
  },
  Fc = [{
    name: "index",
    path: "/",
    component: () => VT(() => import("./BuhJADiR.js"), __vite__mapDeps([0, 1]), import.meta.url)
  }],
  GT = (t, e) => ({
    default: () => t ? mn(A1, t === !0 ? {} : t, e) : e.default?.()
  }),
  YT = /(:\w+)\([^)]+\)/g,
  XT = /(:\w+)[?+*]/g,
  KT = /:\w+/g;

function Wd(t) {
  const e = t?.meta.key ?? t.path.replace(YT, "$1").replace(XT, "$1").replace(KT, n => t.params[n.slice(1)]?.toString() || "");
  return typeof e == "function" ? e(t) : e
}

function qT(t, e) {
  return t === e || e === kn ? !1 : Wd(t) !== Wd(e) ? !0 : !t.matched.every((r, i) => r.components && r.components.default === e.matched[i]?.components?.default)
}
const JT = {
  scrollBehavior(t, e, n) {
    const r = wt(),
      i = In().options?.scrollBehaviorType ?? "auto";
    if (t.path.replace(/\/$/, "") === e.path.replace(/\/$/, "")) return e.hash && !t.hash ? {
      left: 0,
      top: 0
    } : t.hash ? {
      el: t.hash,
      top: ym(t.hash),
      behavior: i
    } : !1;
    if ((typeof t.meta.scrollToTop == "function" ? t.meta.scrollToTop(t, e) : t.meta.scrollToTop) === !1) return !1;
    const o = r._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise(l => {
      if (e === kn) {
        l(zd(t, e, n, i));
        return
      }
      r.hooks.hookOnce(o, () => {
        requestAnimationFrame(() => l(zd(t, e, n, i)))
      })
    })
  }
};

function ym(t) {
  try {
    const e = document.querySelector(t);
    if (e) return (Number.parseFloat(getComputedStyle(e).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
  } catch {}
  return 0
}

function zd(t, e, n, r) {
  if (n) return n;
  const i = qT(t, e);
  return t.hash ? {
    el: t.hash,
    top: ym(t.hash),
    behavior: i ? r : "instant"
  } : {
    left: 0,
    top: 0
  }
}
const vm = {
    scrollBehavior() {
      return {
        top: 0
      }
    }
  },
  QT = {
    hashMode: !1,
    scrollBehaviorType: "auto"
  },
  Vd = vm.hashMode ?? !1,
  Wr = {
    ...QT,
    ...JT,
    ...vm
  },
  ZT = async (t, e) => {
    let n, r;
    if (!t.meta?.validate) return;
    const i = ([n, r] = Ro(() => Promise.resolve(t.meta.validate(t))), n = await n, r(), n);
    if (i === !0) return;
    const s = Ii({
      fatal: !0,
      status: i && (i.status || i.statusCode) || 404,
      statusText: i && (i.statusText || i.statusMessage) || `Page Not Found: ${t.fullPath}`,
      data: {
        path: t.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", e.fullPath), s
  }, eS = t => {
    const e = nm({
      path: t.path
    });
    if (e.redirect) {
      const n = e.redirect.includes("#") ? e.redirect : e.redirect + t.hash;
      return Ks(n, {
        acceptRelative: !0
      }) ? (window.location.href = n, !1) : n
    }
  }, tS = [ZT, eS], Ff = {};

function nS(t, e, n) {
  const {
    pathname: r,
    search: i,
    hash: s
  } = e, o = t.indexOf("#");
  if (o > -1) {
    const f = s.includes(t.slice(o)) ? t.slice(o).length : 1;
    let c = s.slice(f);
    return c[0] !== "/" && (c = "/" + c), ud(c, "")
  }
  const l = ud(r, t),
    a = !n || Nb(l, n) ? l : n;
  return a + (a.includes("?") ? "" : i) + s
}
const rS = Sn({
    name: "nuxt:router",
    enforce: "pre",
    async setup(t) {
      let e, n, r = oc().app.baseURL;
      Vd && !r.includes("#") && (r += "#");
      const i = Wr.history?.(r) ?? (Vd ? _T(r) : pm(r)),
        s = Wr.routes ? ([e, n] = Ro(() => Wr.routes(Fc)), e = await e, n(), e ?? Fc) : Fc;
      let o;
      const l = IT({
        ...Wr,
        scrollBehavior: (y, b, v) => {
          if (b === kn) {
            o = v;
            return
          }
          if (Wr.scrollBehavior) {
            if (l.options.scrollBehavior = Wr.scrollBehavior, "scrollRestoration" in window.history) {
              const _ = l.beforeEach(() => {
                _(), window.history.scrollRestoration = "manual"
              })
            }
            return Wr.scrollBehavior(y, kn, o || v)
          }
        },
        history: i,
        routes: s
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), t.vueApp.use(l);
      const a = $s(l.currentRoute.value);
      l.afterEach((y, b) => {
        a.value = b
      }), Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
        get: () => a.value
      });
      const f = nS(r, window.location, t.payload.path),
        c = $s(l.currentRoute.value),
        u = () => {
          c.value = l.currentRoute.value
        };
      l.afterEach((y, b) => {
        y.matched.at(-1)?.components?.default === b.matched.at(-1)?.components?.default && u()
      });
      const d = {
        sync: u
      };
      for (const y in c.value) Object.defineProperty(d, y, {
        get: () => c.value[y],
        enumerable: !0
      });
      t._route = Ar(d), t._middleware ||= {
        global: [],
        named: {}
      };
      const h = ac();
      l.afterEach(async (y, b, v) => {
        delete t._processingMiddleware, !t.isHydrating && h.value && await t.runWithContext(Aw), v && await t.callHook("page:loading:end")
      });
      try {
        [e, n] = Ro(() => l.isReady()), await e, n()
      } catch (y) {
        [e, n] = Ro(() => t.runWithContext(() => Si(y))), await e, n()
      }
      const p = f !== l.currentRoute.value.fullPath ? l.resolve(f) : l.currentRoute.value;
      u();
      const g = t.payload.state._layout;
      return l.beforeEach(async (y, b) => {
        await t.callHook("page:loading:start"), y.meta = ui(y.meta), t.isHydrating && g && !pr(y.meta.layout) && (y.meta.layout = g), t._processingMiddleware = !0;
        {
          const v = new Set([...tS, ...t._middleware.global]);
          for (const m of y.matched) {
            const w = m.meta.middleware;
            if (w)
              for (const T of Xu(w)) v.add(T)
          }
          const _ = nm({
            path: y.path
          });
          if (_.appMiddleware)
            for (const m in _.appMiddleware) _.appMiddleware[m] ? v.add(m) : v.delete(m);
          for (const m of v) {
            const w = typeof m == "string" ? t._middleware.named[m] || await Ff[m]?.().then(T => T.default || T) : m;
            if (!w) throw new Error(`Unknown route middleware: '${m}'.`);
            try {
              const T = await t.runWithContext(() => w(y, b));
              if (!t.payload.serverRendered && t.isHydrating && (T === !1 || T instanceof Error)) {
                const E = T || Ii({
                  status: 404,
                  statusText: `Page Not Found: ${f}`
                });
                return await t.runWithContext(() => Si(E)), !1
              }
              if (T === !0) continue;
              if (T === !1) return T;
              if (T) return K_(T) && T.fatal && await t.runWithContext(() => Si(T)), T
            } catch (T) {
              const E = Ii(T);
              return E.fatal && await t.runWithContext(() => Si(E)), E
            }
          }
        }
      }), l.onError(async () => {
        delete t._processingMiddleware, await t.callHook("page:loading:end")
      }), l.afterEach(y => {
        if (y.matched.length === 0 && !h.value) return t.runWithContext(() => Si(Ii({
          status: 404,
          fatal: !1,
          statusText: `Page not found: ${y.fullPath}`,
          data: {
            path: y.fullPath
          }
        })))
      }), t.hooks.hookOnce("app:created", async () => {
        try {
          "name" in p && (p.name = void 0), await l.replace({
            ...p,
            force: !0
          }), l.options.scrollBehavior = Wr.scrollBehavior
        } catch (y) {
          await t.runWithContext(() => Si(y))
        }
      }), {
        provide: {
          router: l
        }
      }
    }
  }),
  Gd = globalThis.requestIdleCallback || (t => {
    const e = Date.now(),
      n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - e))
      };
    return setTimeout(() => {
      t(n)
    }, 1)
  }),
  Kk = globalThis.cancelIdleCallback || (t => {
    clearTimeout(t)
  }),
  Ku = t => {
    const e = wt();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", () => {
      Gd(() => t())
    }) : Gd(() => t())
  },
  iS = Sn({
    name: "nuxt:payload",
    setup(t) {
      const e = new Set;
      In().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const i = await Ed(n.path);
        if (i) {
          for (const s of e) delete t.static.data[s];
          for (const s in i.data) s in t.static.data || e.add(s), t.static.data[s] = i.data[s]
        }
      }), Ku(() => {
        t.hooks.hook("link:prefetch", async n => {
          const {
            hostname: r
          } = new URL(n, window.location.href);
          r === window.location.hostname && await Ed().catch(() => {
            console.warn("[nuxt] Error preloading payload for", n)
          })
        }), navigator.connection?.effectiveType !== "slow-2g" && setTimeout(tm, 1e3)
      })
    }
  }),
  sS = Sn(() => {
    const t = In();
    Ku(() => {
      t.beforeResolve(async () => {
        await new Promise(e => {
          setTimeout(e, 100), requestAnimationFrame(() => {
            setTimeout(e, 0)
          })
        })
      })
    })
  }),
  oS = Sn(t => {
    let e;
    async function n() {
      let r;
      try {
        r = await tm()
      } catch (i) {
        const s = i;
        if (!("status" in s && (s.status === 404 || s.status === 403))) throw s
      }
      e && clearTimeout(e), e = setTimeout(n, md);
      try {
        const i = await $fetch(zu("builds/latest.json") + `?${Date.now()}`);
        i.id !== r?.id && (t.hooks.callHook("app:manifest:update", i), e && clearTimeout(e))
      } catch {}
    }
    Ku(() => {
      e = setTimeout(n, md)
    })
  });

function lS(t = {}) {
  const e = t.path || window.location.pathname;
  let n = {};
  try {
    n = ka(sessionStorage.getItem("nuxt:reload") || "{}")
  } catch {}
  if (t.force || n?.path !== e || n?.expires < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({
        path: e,
        expires: Date.now() + (t.ttl ?? 1e4)
      }))
    } catch {}
    if (t.persistState) try {
      sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
        state: wt().payload.state
      }))
    } catch {}
    window.location.pathname !== e ? window.location.href = e : window.location.reload()
  }
}
const aS = Sn({
    name: "nuxt:chunk-reload",
    setup(t) {
      const e = In(),
        n = oc(),
        r = new Set;
      e.beforeEach(() => {
        r.clear()
      }), t.hook("app:chunkError", ({
        error: s
      }) => {
        r.add(s)
      });

      function i(s) {
        const o = H_(n.app.baseURL, s.fullPath);
        lS({
          path: o,
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
  cS = Sn({
    name: "nuxt:global-components"
  }),
  $l = {};

function fS(t) {
  if (t?.__asyncLoader && !t.__asyncResolved) return t.__asyncLoader()
}
async function uS(t, e = In()) {
  const {
    path: n,
    matched: r
  } = e.resolve(t);
  if (!r.length || (e._routePreloaded ||= new Set, e._routePreloaded.has(n))) return;
  const i = e._preloadPromises ||= [];
  if (i.length > 4) return Promise.all(i).then(() => uS(t, e));
  e._routePreloaded.add(n);
  for (const s of r) {
    const o = s.components?.default;
    if (typeof o != "function") continue;
    const l = Promise.resolve(o()).catch(() => {}).finally(() => i.splice(i.indexOf(l)));
    i.push(l)
  }
  await Promise.all(i)
}
const hS = Sn({
    name: "nuxt:prefetch",
    setup(t) {
      const e = In();
      t.hooks.hook("app:mounted", () => {
        e.beforeEach(async n => {
          const r = n?.meta?.layout;
          r && typeof $l[r] == "function" && await $l[r]()
        })
      }), t.hooks.hook("link:prefetch", n => {
        if (Ks(n)) return;
        const r = e.resolve(n);
        if (!r) return;
        const i = r.meta.layout;
        let s = Xu(r.meta.middleware);
        s = s.filter(o => typeof o == "string");
        for (const o of s) typeof Ff[o] == "function" && Ff[o]();
        typeof i == "string" && i in $l && fS($l[i])
      })
    }
  }),
  dS = {
    beforeMount(t, e) {
      t.clickOutsideEvent = function(n) {
        t === n.target || t.contains(n.target) || e.value(n)
      }, document.addEventListener("click", t.clickOutsideEvent)
    },
    beforeUnmount(t) {
      document.removeEventListener("click", t.clickOutsideEvent)
    }
  },
  pS = Sn(t => {
    t.vueApp.directive("click-outside", dS)
  });

function Tr(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function bm(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
var wn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  Bs = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
  qu, Ct, ze, On = 1e8,
  He = 1 / On,
  Bf = Math.PI * 2,
  gS = Bf / 4,
  _S = 0,
  wm = Math.sqrt,
  mS = Math.cos,
  yS = Math.sin,
  xt = function(e) {
    return typeof e == "string"
  },
  et = function(e) {
    return typeof e == "function"
  },
  Hr = function(e) {
    return typeof e == "number"
  },
  Ju = function(e) {
    return typeof e > "u"
  },
  _r = function(e) {
    return typeof e == "object"
  },
  tn = function(e) {
    return e !== !1
  },
  Qu = function() {
    return typeof window < "u"
  },
  Dl = function(e) {
    return et(e) || xt(e)
  },
  xm = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
  It = Array.isArray,
  vS = /random\([^)]+\)/g,
  bS = /,\s*/g,
  Yd = /(?:-?\.?\d|\.)+/gi,
  Tm = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ds = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Bc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Sm = /[+-]=-?[.\d]+/,
  wS = /[^,'"\[\]\s]+/gi,
  xS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ye, rr, Uf, Zu, xn = {},
  Oa = {},
  Em, Cm = function(e) {
    return (Oa = Us(e, xn)) && Ht
  },
  eh = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
  },
  el = function(e, n) {
    return !n && console.warn(e)
  },
  km = function(e, n) {
    return e && (xn[e] = n) && Oa && (Oa[e] = n) || xn
  },
  tl = function() {
    return 0
  },
  TS = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
  },
  ra = {
    suppressEvents: !0,
    kill: !1
  },
  SS = {
    suppressEvents: !0
  },
  th = {},
  ri = [],
  jf = {},
  Pm, cn = {},
  Uc = {},
  Xd = 30,
  ia = [],
  nh = "",
  rh = function(e) {
    var n = e[0],
      r, i;
    if (_r(n) || et(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
      for (i = ia.length; i-- && !ia[i].targetTest(n););
      r = ia[i]
    }
    for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Qm(e[i], r))) || e.splice(i, 1);
    return e
  },
  Hi = function(e) {
    return e._gsap || rh(Mn(e))[0]._gsap
  },
  Rm = function(e, n, r) {
    return (r = e[n]) && et(r) ? e[n]() : Ju(r) && e.getAttribute && e.getAttribute(n) || r
  },
  nn = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
  },
  nt = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  Ge = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
  },
  Ss = function(e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
  },
  ES = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r;);
    return i < r
  },
  Ma = function() {
    var e = ri.length,
      n = ri.slice(0),
      r, i;
    for (jf = {}, ri.length = 0, r = 0; r < e; r++) i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
  },
  ih = function(e) {
    return !!(e._initted || e._startAt || e.add)
  },
  Am = function(e, n, r, i) {
    ri.length && !Ct && Ma(), e.render(n, r, !!(Ct && n < 0 && ih(e))), ri.length && !Ct && Ma()
  },
  Om = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(wS).length < 2 ? n : xt(e) ? e.trim() : e
  },
  Mm = function(e) {
    return e
  },
  Tn = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  CS = function(e) {
    return function(n, r) {
      for (var i in r) i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
  },
  Us = function(e, n) {
    for (var r in n) e[r] = n[r];
    return e
  },
  Kd = function t(e, n) {
    for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = _r(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
  },
  Na = function(e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r
  },
  Oo = function(e) {
    var n = e.parent || Ye,
      r = e.keyframes ? CS(It(e.keyframes)) : Tn;
    if (tn(e.inherit))
      for (; n;) r(e, n.vars.defaults), n = n.parent || n._dp;
    return e
  },
  kS = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r];);
    return r < 0
  },
  Nm = function(e, n, r, i, s) {
    var o = e[i],
      l;
    if (s)
      for (l = n[s]; o && o[s] > l;) o = o._prev;
    return o ? (n._next = o._next, o._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = o, n.parent = n._dp = e, n
  },
  fc = function(e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = n._prev,
      o = n._next;
    s ? s._next = o : e[r] === n && (e[r] = o), o ? o._prev = s : e[i] === n && (e[i] = s), n._next = n._prev = n.parent = null
  },
  li = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
  },
  Fi = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r;) r._dirty = 1, r = r.parent;
    return e
  },
  PS = function(e) {
    for (var n = e.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
    return e
  },
  Wf = function(e, n, r, i) {
    return e._startAt && (Ct ? e._startAt.revert(ra) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
  },
  RS = function t(e) {
    return !e || e._ts && t(e.parent)
  },
  qd = function(e) {
    return e._repeat ? js(e._tTime, e = e.duration() + e._rDelay) * e : 0
  },
  js = function(e, n) {
    var r = Math.floor(e = Ge(e / n));
    return e && r === e ? r - 1 : r
  },
  $a = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
  },
  uc = function(e) {
    return e._end = Ge(e._start + (e._tDur / Math.abs(e._ts || e._rts || He) || 0))
  },
  hc = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = Ge(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), uc(e), r._dirty || Fi(r, e)), e
  },
  $m = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = $a(e.rawTime(), n), (!n._dur || bl(0, n.totalDuration(), r) - n._tTime > He) && n.render(r, !0)), Fi(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
      if (e._dur < e.duration())
        for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
      e._zTime = -He
    }
  },
  or = function(e, n, r, i) {
    return n.parent && li(n), n._start = Ge((Hr(r) ? r : r || e !== Ye ? Cn(e, r, n) : e._time) + n._delay), n._end = Ge(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), Nm(e, n, "_first", "_last", e._sort ? "_start" : 0), zf(n) || (e._recent = n), i || $m(e, n), e._ts < 0 && hc(e, e._tTime), e
  },
  Dm = function(e, n) {
    return (xn.ScrollTrigger || eh("scrollTrigger", n)) && xn.ScrollTrigger.create(n, e)
  },
  Lm = function(e, n, r, i, s) {
    if (oh(e, n, s), !e._initted) return 1;
    if (!r && e._pt && !Ct && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Pm !== pn.frame) return ri.push(e), e._lazy = [s, i], 1
  },
  AS = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
  },
  zf = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
  },
  OS = function(e, n, r, i) {
    var s = e.ratio,
      o = n < 0 || !n && (!e._start && AS(e) && !(!e._initted && zf(e)) || (e._ts < 0 || e._dp._ts < 0) && !zf(e)) ? 0 : 1,
      l = e._rDelay,
      a = 0,
      f, c, u;
    if (l && e._repeat && (a = bl(0, e._tDur, n), c = js(a, l), e._yoyo && c & 1 && (o = 1 - o), c !== js(e._tTime, l) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || Ct || i || e._zTime === He || !n && e._zTime) {
      if (!e._initted && Lm(e, n, i, r, a)) return;
      for (u = e._zTime, e._zTime = n || (r ? He : 0), r || (r = n && !u), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = a, f = e._pt; f;) f.r(o, f.d), f = f._next;
      n < 0 && Wf(e, n, r, !0), e._onUpdate && !r && yn(e, "onUpdate"), a && e._repeat && !r && e.parent && yn(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === o && (o && li(e, 1), !r && !Ct && (yn(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
    } else e._zTime || (e._zTime = n)
  },
  MS = function(e, n, r) {
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
  Ws = function(e, n, r, i) {
    var s = e._repeat,
      o = Ge(n) || 0,
      l = e._tTime / e._tDur;
    return l && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : Ge(o * (s + 1) + e._rDelay * s) : o, l > 0 && !i && hc(e, e._tTime = e._tDur * l), e.parent && uc(e), r || Fi(e.parent, e), e
  },
  Jd = function(e) {
    return e instanceof Xt ? Fi(e) : Ws(e, e._dur)
  },
  NS = {
    _start: 0,
    endTime: tl,
    totalDuration: tl
  },
  Cn = function t(e, n, r) {
    var i = e.labels,
      s = e._recent || NS,
      o = e.duration() >= On ? s.endTime(!1) : e._dur,
      l, a, f;
    return xt(n) && (isNaN(n) || n in i) ? (a = n.charAt(0), f = n.substr(-1) === "%", l = n.indexOf("="), a === "<" || a === ">" ? (l >= 0 && (n = n.replace(/=/, "")), (a === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (f ? (l < 0 ? s : r).totalDuration() / 100 : 1)) : l < 0 ? (n in i || (i[n] = o), i[n]) : (a = parseFloat(n.charAt(l - 1) + n.substr(l + 1)), f && r && (a = a / 100 * (It(r) ? r[0] : r).totalDuration()), l > 1 ? t(e, n.substr(0, l - 1), r) + a : o + a)) : n == null ? o : +n
  },
  Mo = function(e, n, r) {
    var i = Hr(n[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = n[s],
      l, a;
    if (i && (o.duration = n[1]), o.parent = r, e) {
      for (l = o, a = r; a && !("immediateRender" in l);) l = a.vars.defaults || {}, a = tn(a.vars.inherit) && a.parent;
      o.immediateRender = tn(l.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1]
    }
    return new ot(n[0], o, n[s + 1])
  },
  di = function(e, n) {
    return e || e === 0 ? n(e) : n
  },
  bl = function(e, n, r) {
    return r < e ? e : r > n ? n : r
  },
  $t = function(e, n) {
    return !xt(e) || !(n = xS.exec(e)) ? "" : n[1]
  },
  $S = function(e, n, r) {
    return di(r, function(i) {
      return bl(e, n, i)
    })
  },
  Vf = [].slice,
  Im = function(e, n) {
    return e && _r(e) && "length" in e && (!n && !e.length || e.length - 1 in e && _r(e[0])) && !e.nodeType && e !== rr
  },
  DS = function(e, n, r) {
    return r === void 0 && (r = []), e.forEach(function(i) {
      var s;
      return xt(i) && !n || Im(i, 1) ? (s = r).push.apply(s, Mn(i)) : r.push(i)
    }) || r
  },
  Mn = function(e, n, r) {
    return ze && !n && ze.selector ? ze.selector(e) : xt(e) && !r && (Uf || !zs()) ? Vf.call((n || Zu).querySelectorAll(e), 0) : It(e) ? DS(e, r) : Im(e) ? Vf.call(e, 0) : e ? [e] : []
  },
  Gf = function(e) {
    return e = Mn(e)[0] || el("Invalid scope") || {},
      function(n) {
        var r = e.current || e.nativeElement || e;
        return Mn(n, r.querySelectorAll ? r : r === e ? el("Invalid scope") || Zu.createElement("div") : e)
      }
  },
  Hm = function(e) {
    return e.sort(function() {
      return .5 - Math.random()
    })
  },
  Fm = function(e) {
    if (et(e)) return e;
    var n = _r(e) ? e : {
        each: e
      },
      r = Bi(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      l = i > 0 && i < 1,
      a = isNaN(i) || l,
      f = n.axis,
      c = i,
      u = i;
    return xt(i) ? c = u = {
        center: .5,
        edges: .5,
        end: 1
      } [i] || 0 : !l && a && (c = i[0], u = i[1]),
      function(d, h, p) {
        var g = (p || n).length,
          y = o[g],
          b, v, _, m, w, T, E, R, C;
        if (!y) {
          if (C = n.grid === "auto" ? 0 : (n.grid || [1, On])[1], !C) {
            for (E = -On; E < (E = p[C++].getBoundingClientRect().left) && C < g;);
            C < g && C--
          }
          for (y = o[g] = [], b = a ? Math.min(C, g) * c - .5 : i % C, v = C === On ? 0 : a ? g * u / C - .5 : i / C | 0, E = 0, R = On, T = 0; T < g; T++) _ = T % C - b, m = v - (T / C | 0), y[T] = w = f ? Math.abs(f === "y" ? m : _) : wm(_ * _ + m * m), w > E && (E = w), w < R && (R = w);
          i === "random" && Hm(y), y.max = E - R, y.min = R, y.v = g = (parseFloat(n.amount) || parseFloat(n.each) * (C > g ? g - 1 : f ? f === "y" ? g / C : C : Math.max(C, g / C)) || 0) * (i === "edges" ? -1 : 1), y.b = g < 0 ? s - g : s, y.u = $t(n.amount || n.each) || 0, r = r && g < 0 ? Km(r) : r
        }
        return g = (y[d] - y.min) / y.max || 0, Ge(y.b + (r ? r(g) : g) * y.v) + y.u
      }
  },
  Yf = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
      var i = Ge(Math.round(parseFloat(r) / e) * e * n);
      return (i - i % 1) / n + (Hr(r) ? 0 : $t(r))
    }
  },
  Bm = function(e, n) {
    var r = It(e),
      i, s;
    return !r && _r(e) && (i = r = e.radius || On, e.values ? (e = Mn(e.values), (s = !Hr(e[0])) && (i *= i)) : e = Yf(e.increment)), di(n, r ? et(e) ? function(o) {
      return s = e(o), Math.abs(s - o) <= i ? s : o
    } : function(o) {
      for (var l = parseFloat(s ? o.x : o), a = parseFloat(s ? o.y : 0), f = On, c = 0, u = e.length, d, h; u--;) s ? (d = e[u].x - l, h = e[u].y - a, d = d * d + h * h) : d = Math.abs(e[u] - l), d < f && (f = d, c = u);
      return c = !i || f <= i ? e[c] : o, s || c === o || Hr(o) ? c : c + $t(o)
    } : Yf(e))
  },
  Um = function(e, n, r, i) {
    return di(It(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
      return It(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
  },
  LS = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return function(i) {
      return n.reduce(function(s, o) {
        return o(s)
      }, i)
    }
  },
  IS = function(e, n) {
    return function(r) {
      return e(parseFloat(r)) + (n || $t(r))
    }
  },
  HS = function(e, n, r) {
    return Wm(e, n, 0, 1, r)
  },
  jm = function(e, n, r) {
    return di(r, function(i) {
      return e[~~n(i)]
    })
  },
  FS = function t(e, n, r) {
    var i = n - e;
    return It(e) ? jm(e, t(0, e.length), n) : di(r, function(s) {
      return (i + (s - e) % i) % i + e
    })
  },
  BS = function t(e, n, r) {
    var i = n - e,
      s = i * 2;
    return It(e) ? jm(e, t(0, e.length - 1), n) : di(r, function(o) {
      return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o)
    })
  },
  nl = function(e) {
    return e.replace(vS, function(n) {
      var r = n.indexOf("[") + 1,
        i = n.substring(r || 7, r ? n.indexOf("]") : n.length - 1).split(bS);
      return Um(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)
    })
  },
  Wm = function(e, n, r, i, s) {
    var o = n - e,
      l = i - r;
    return di(s, function(a) {
      return r + ((a - e) / o * l || 0)
    })
  },
  US = function t(e, n, r, i) {
    var s = isNaN(e + n) ? 0 : function(h) {
      return (1 - h) * e + h * n
    };
    if (!s) {
      var o = xt(e),
        l = {},
        a, f, c, u, d;
      if (r === !0 && (i = 1) && (r = null), o) e = {
        p: e
      }, n = {
        p: n
      };
      else if (It(e) && !It(n)) {
        for (c = [], u = e.length, d = u - 2, f = 1; f < u; f++) c.push(t(e[f - 1], e[f]));
        u--, s = function(p) {
          p *= u;
          var g = Math.min(d, ~~p);
          return c[g](p - g)
        }, r = n
      } else i || (e = Us(It(e) ? [] : {}, e));
      if (!c) {
        for (a in n) sh.call(l, e, a, "get", n[a]);
        s = function(p) {
          return ch(p, l) || (o ? e.p : e)
        }
      }
    }
    return di(r, s)
  },
  Qd = function(e, n, r) {
    var i = e.labels,
      s = On,
      o, l, a;
    for (o in i) l = i[o] - n, l < 0 == !!r && l && s > (l = Math.abs(l)) && (a = o, s = l);
    return a
  },
  yn = function(e, n, r) {
    var i = e.vars,
      s = i[n],
      o = ze,
      l = e._ctx,
      a, f, c;
    if (s) return a = i[n + "Params"], f = i.callbackScope || e, r && ri.length && Ma(), l && (ze = l), c = a ? s.apply(f, a) : s.call(f), ze = o, c
  },
  ho = function(e) {
    return li(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ct), e.progress() < 1 && yn(e, "onInterrupt"), e
  },
  ps, zm = [],
  Vm = function(e) {
    if (e)
      if (e = !e.name && e.default || e, Qu() || e.headless) {
        var n = e.name,
          r = et(e),
          i = n && !r && e.init ? function() {
            this._props = []
          } : e,
          s = {
            init: tl,
            render: ch,
            add: sh,
            kill: rE,
            modifier: nE,
            rawVars: 0
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: ah,
            aliases: {},
            register: 0
          };
        if (zs(), e !== i) {
          if (cn[n]) return;
          Tn(i, Tn(Na(e, s), o)), Us(i.prototype, Us(s, Na(e, o))), cn[i.prop = n] = i, e.targetTest && (ia.push(i), th[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
        }
        km(n, i), e.register && e.register(Ht, i, rn)
      } else zm.push(e)
  },
  Ie = 255,
  po = {
    aqua: [0, Ie, Ie],
    lime: [0, Ie, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Ie],
    navy: [0, 0, 128],
    white: [Ie, Ie, Ie],
    olive: [128, 128, 0],
    yellow: [Ie, Ie, 0],
    orange: [Ie, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Ie, 0, 0],
    pink: [Ie, 192, 203],
    cyan: [0, Ie, Ie],
    transparent: [Ie, Ie, Ie, 0]
  },
  jc = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * Ie + .5 | 0
  },
  Gm = function(e, n, r) {
    var i = e ? Hr(e) ? [e >> 16, e >> 8 & Ie, e & Ie] : 0 : po.black,
      s, o, l, a, f, c, u, d, h, p;
    if (!i) {
      if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), po[e]) i = po[e];
      else if (e.charAt(0) === "#") {
        if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), l = e.charAt(3), e = "#" + s + s + o + o + l + l + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Ie, i & Ie, parseInt(e.substr(7), 16) / 255];
        e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Ie, e & Ie]
      } else if (e.substr(0, 3) === "hsl") {
        if (i = p = e.match(Yd), !n) a = +i[0] % 360 / 360, f = +i[1] / 100, c = +i[2] / 100, o = c <= .5 ? c * (f + 1) : c + f - c * f, s = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = jc(a + 1 / 3, s, o), i[1] = jc(a, s, o), i[2] = jc(a - 1 / 3, s, o);
        else if (~e.indexOf("=")) return i = e.match(Tm), r && i.length < 4 && (i[3] = 1), i
      } else i = e.match(Yd) || po.transparent;
      i = i.map(Number)
    }
    return n && !p && (s = i[0] / Ie, o = i[1] / Ie, l = i[2] / Ie, u = Math.max(s, o, l), d = Math.min(s, o, l), c = (u + d) / 2, u === d ? a = f = 0 : (h = u - d, f = c > .5 ? h / (2 - u - d) : h / (u + d), a = u === s ? (o - l) / h + (o < l ? 6 : 0) : u === o ? (l - s) / h + 2 : (s - o) / h + 4, a *= 60), i[0] = ~~(a + .5), i[1] = ~~(f * 100 + .5), i[2] = ~~(c * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
  },
  Ym = function(e) {
    var n = [],
      r = [],
      i = -1;
    return e.split(ii).forEach(function(s) {
      var o = s.match(ds) || [];
      n.push.apply(n, o), r.push(i += o.length + 1)
    }), n.c = r, n
  },
  Zd = function(e, n, r) {
    var i = "",
      s = (e + i).match(ii),
      o = n ? "hsla(" : "rgba(",
      l = 0,
      a, f, c, u;
    if (!s) return e;
    if (s = s.map(function(d) {
        return (d = Gm(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
      }), r && (c = Ym(e), a = r.c, a.join(i) !== c.c.join(i)))
      for (f = e.replace(ii, "1").split(ds), u = f.length - 1; l < u; l++) i += f[l] + (~a.indexOf(l) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
    if (!f)
      for (f = e.split(ii), u = f.length - 1; l < u; l++) i += f[l] + s[l];
    return i + f[u]
  },
  ii = (function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in po) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi")
  })(),
  jS = /hsl[a]?\(/,
  Xm = function(e) {
    var n = e.join(" "),
      r;
    if (ii.lastIndex = 0, ii.test(n)) return r = jS.test(n), e[1] = Zd(e[1], r), e[0] = Zd(e[0], r, Ym(e[1])), !0
  },
  rl, pn = (function() {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      s = 1e3 / 240,
      o = s,
      l = [],
      a, f, c, u, d, h, p = function g(y) {
        var b = t() - i,
          v = y === !0,
          _, m, w, T;
        if ((b > e || b < 0) && (r += b - n), i += b, w = i - r, _ = w - o, (_ > 0 || v) && (T = ++u.frame, d = w - u.time * 1e3, u.time = w = w / 1e3, o += _ + (_ >= s ? 4 : s - _), m = 1), v || (a = f(g)), m)
          for (h = 0; h < l.length; h++) l[h](w, d, T, y)
      };
    return u = {
      time: 0,
      frame: 0,
      tick: function() {
        p(!0)
      },
      deltaRatio: function(y) {
        return d / (1e3 / (y || 60))
      },
      wake: function() {
        Em && (!Uf && Qu() && (rr = Uf = window, Zu = rr.document || {}, xn.gsap = Ht, (rr.gsapVersions || (rr.gsapVersions = [])).push(Ht.version), Cm(Oa || rr.GreenSockGlobals || !rr.gsap && rr || {}), zm.forEach(Vm)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, a && u.sleep(), f = c || function(y) {
          return setTimeout(y, o - u.time * 1e3 + 1 | 0)
        }, rl = 1, p(2))
      },
      sleep: function() {
        (c ? cancelAnimationFrame : clearTimeout)(a), rl = 0, f = tl
      },
      lagSmoothing: function(y, b) {
        e = y || 1 / 0, n = Math.min(b || 33, e)
      },
      fps: function(y) {
        s = 1e3 / (y || 240), o = u.time * 1e3 + s
      },
      add: function(y, b, v) {
        var _ = b ? function(m, w, T, E) {
          y(m, w, T, E), u.remove(_)
        } : y;
        return u.remove(y), l[v ? "unshift" : "push"](_), zs(), _
      },
      remove: function(y, b) {
        ~(b = l.indexOf(y)) && l.splice(b, 1) && h >= b && h--
      },
      _listeners: l
    }, u
  })(),
  zs = function() {
    return !rl && pn.wake()
  },
  Ee = {},
  WS = /^[\d.\-M][\d.\-,\s]/,
  zS = /["']/g,
  VS = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, l, a, f; s < o; s++) a = r[s], l = s !== o - 1 ? a.lastIndexOf(",") : a.length, f = a.substr(0, l), n[i] = isNaN(f) ? f.replace(zS, "").trim() : +f, i = a.substr(l + 1).trim();
    return n
  },
  GS = function(e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
  },
  YS = function(e) {
    var n = (e + "").split("("),
      r = Ee[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [VS(n[1])] : GS(e).split(",").map(Om)) : Ee._CE && WS.test(e) ? Ee._CE("", e) : r
  },
  Km = function(e) {
    return function(n) {
      return 1 - e(1 - n)
    }
  },
  qm = function t(e, n) {
    for (var r = e._first, i; r;) r instanceof Xt ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
  },
  Bi = function(e, n) {
    return e && (et(e) ? e : Ee[e] || YS(e)) || n
  },
  Qi = function(e, n, r, i) {
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
    return nn(e, function(l) {
      Ee[l] = xn[l] = s, Ee[o = l.toLowerCase()] = r;
      for (var a in s) Ee[o + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = Ee[l + "." + a] = s[a]
    }), s
  },
  Jm = function(e) {
    return function(n) {
      return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
  },
  Wc = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
      o = s / Bf * (Math.asin(1 / i) || 0),
      l = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * yS((c - o) * s) + 1
      },
      a = e === "out" ? l : e === "in" ? function(f) {
        return 1 - l(1 - f)
      } : Jm(l);
    return s = Bf / s, a.config = function(f, c) {
      return t(e, f, c)
    }, a
  },
  zc = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
      },
      i = e === "out" ? r : e === "in" ? function(s) {
        return 1 - r(1 - s)
      } : Jm(r);
    return i.config = function(s) {
      return t(e, s)
    }, i
  };
nn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  Qi(t + ",Power" + (n - 1), e ? function(r) {
    return Math.pow(r, n)
  } : function(r) {
    return r
  }, function(r) {
    return 1 - Math.pow(1 - r, n)
  }, function(r) {
    return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
  })
});
Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn;
Qi("Elastic", Wc("in"), Wc("out"), Wc());
(function(t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    s = function(l) {
      return l < n ? t * l * l : l < r ? t * Math.pow(l - 1.5 / e, 2) + .75 : l < i ? t * (l -= 2.25 / e) * l + .9375 : t * Math.pow(l - 2.625 / e, 2) + .984375
    };
  Qi("Bounce", function(o) {
    return 1 - s(1 - o)
  }, s)
})(7.5625, 2.75);
Qi("Expo", function(t) {
  return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
});
Qi("Circ", function(t) {
  return -(wm(1 - t * t) - 1)
});
Qi("Sine", function(t) {
  return t === 1 ? 1 : -mS(t * gS) + 1
});
Qi("Back", zc("in"), zc("out"), zc());
Ee.SteppedEase = Ee.steps = xn.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e,
      i = e + (n ? 0 : 1),
      s = n ? 1 : 0,
      o = 1 - He;
    return function(l) {
      return ((i * bl(0, o, l) | 0) + s) * r
    }
  }
};
Bs.ease = Ee["quad.out"];
nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return nh += t + "," + t + "Params,"
});
var Qm = function(e, n) {
    this.id = _S++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : Rm, this.set = n ? n.getSetter : ah
  },
  il = (function() {
    function t(n) {
      this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, Ws(this, +n.duration, 1, 1), this.data = n.data, ze && (this._ctx = ze, ze.data.push(this)), rl || pn.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
      return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
    }, e.duration = function(r) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }, e.totalDuration = function(r) {
      return arguments.length ? (this._dirty = 0, Ws(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, e.totalTime = function(r, i) {
      if (zs(), !arguments.length) return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
        for (hc(this, r), !s._dp || s.parent || $m(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && or(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === He || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Am(this, r, i)), this
    }, e.time = function(r, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + qd(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }, e.totalProgress = function(r, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }, e.progress = function(r, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + qd(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }, e.iteration = function(r, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? js(this._tTime, s) + 1 : 1
    }, e.timeScale = function(r, i) {
      if (!arguments.length) return this._rts === -He ? 0 : this._rts;
      if (this._rts === r) return this;
      var s = this.parent && this._ts ? $a(this.parent._time, this) : this._tTime;
      return this._rts = +r || 0, this._ts = this._ps || r === -He ? 0 : this._rts, this.totalTime(bl(-Math.abs(this._delay), this.totalDuration(), s), i !== !1), uc(this), PS(this)
    }, e.paused = function(r) {
      return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== He && (this._tTime -= He)))), this) : this._ps
    }, e.startTime = function(r) {
      if (arguments.length) {
        this._start = Ge(r);
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && or(i, this, this._start - this._delay), this
      }
      return this._start
    }, e.endTime = function(r) {
      return this._start + (tn(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, e.rawTime = function(r) {
      var i = this.parent || this._dp;
      return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $a(i.rawTime(r), this) : this._tTime : this._tTime
    }, e.revert = function(r) {
      r === void 0 && (r = SS);
      var i = Ct;
      return Ct = r, ih(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Ct = i, this
    }, e.globalTime = function(r) {
      for (var i = this, s = arguments.length ? r : i.rawTime(); i;) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.globalTime(r) : s
    }, e.repeat = function(r) {
      return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Jd(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, e.repeatDelay = function(r) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = r, Jd(this), i ? this.time(i) : this
      }
      return this._rDelay
    }, e.yoyo = function(r) {
      return arguments.length ? (this._yoyo = r, this) : this._yoyo
    }, e.seek = function(r, i) {
      return this.totalTime(Cn(this, r), tn(i))
    }, e.restart = function(r, i) {
      return this.play().totalTime(r ? -this._delay : 0, tn(i)), this._dur || (this._zTime = -He), this
    }, e.play = function(r, i) {
      return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
    }, e.reverse = function(r, i) {
      return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, e.pause = function(r, i) {
      return r != null && this.seek(r, i), this.paused(!0)
    }, e.resume = function() {
      return this.paused(!1)
    }, e.reversed = function(r) {
      return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -He : 0)), this) : this._rts < 0
    }, e.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -He, this
    }, e.isActive = function() {
      var r = this.parent || this._dp,
        i = this._start,
        s;
      return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - He)
    }, e.eventCallback = function(r, i, s) {
      var o = this.vars;
      return arguments.length > 1 ? (i ? (o[r] = i, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r]
    }, e.then = function(r) {
      var i = this,
        s = i._prom;
      return new Promise(function(o) {
        var l = et(r) ? r : Mm,
          a = function() {
            var c = i.then;
            i.then = null, s && s(), et(l) && (l = l(i)) && (l.then || l === i) && (i.then = c), o(l), i.then = c
          };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
      })
    }, e.kill = function() {
      ho(this)
    }, t
  })();
Tn(il.prototype, {
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
  _zTime: -He,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Xt = (function(t) {
  bm(e, t);

  function e(r, i) {
    var s;
    return r === void 0 && (r = {}), s = t.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = tn(r.sortChildren), Ye && or(r.parent || Ye, Tr(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Dm(Tr(s), r.scrollTrigger), s
  }
  var n = e.prototype;
  return n.to = function(i, s, o) {
    return Mo(0, arguments, this), this
  }, n.from = function(i, s, o) {
    return Mo(1, arguments, this), this
  }, n.fromTo = function(i, s, o, l) {
    return Mo(2, arguments, this), this
  }, n.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, Oo(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new ot(i, s, Cn(this, o), 1), this
  }, n.call = function(i, s, o) {
    return or(this, ot.delayedCall(0, i, s), o)
  }, n.staggerTo = function(i, s, o, l, a, f, c) {
    return o.duration = s, o.stagger = o.stagger || l, o.onComplete = f, o.onCompleteParams = c, o.parent = this, new ot(i, o, Cn(this, a)), this
  }, n.staggerFrom = function(i, s, o, l, a, f, c) {
    return o.runBackwards = 1, Oo(o).immediateRender = tn(o.immediateRender), this.staggerTo(i, s, o, l, a, f, c)
  }, n.staggerFromTo = function(i, s, o, l, a, f, c, u) {
    return l.startAt = o, Oo(l).immediateRender = tn(l.immediateRender), this.staggerTo(i, s, l, a, f, c, u)
  }, n.render = function(i, s, o) {
    var l = this._time,
      a = this._dirty ? this.totalDuration() : this._tDur,
      f = this._dur,
      c = i <= 0 ? 0 : Ge(i),
      u = this._zTime < 0 != i < 0 && (this._initted || !f),
      d, h, p, g, y, b, v, _, m, w, T, E;
    if (this !== Ye && c > a && i >= 0 && (c = a), c !== this._tTime || o || u) {
      if (l !== this._time && f && (c += this._time - l, i += this._time - l), d = c, m = this._start, _ = this._ts, b = !_, u && (f || (l = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, y = f + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(y * 100 + i, s, o);
        if (d = Ge(c % y), c === a ? (g = this._repeat, d = f) : (w = Ge(c / y), g = ~~w, g && g === w && (d = f, g--), d > f && (d = f)), w = js(this._tTime, y), !l && this._tTime && w !== g && this._tTime - w * y - this._dur <= 0 && (w = g), T && g & 1 && (d = f - d, E = 1), g !== w && !this._lock) {
          var R = T && w & 1,
            C = R === (T && g & 1);
          if (g < w && (R = !R), l = R ? 0 : c % f ? f : c, this._lock = 1, this.render(l || (E ? 0 : Ge(g * y)), s, !f)._lock = 0, this._tTime = c, !s && this.parent && yn(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1, w = g), l && l !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (f = this._dur, a = this._tDur, C && (this._lock = 2, l = R ? f : -1e-4, this.render(l, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !b) return this;
          qm(this, E)
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = MS(this, Ge(l), Ge(d)), v && (c -= d - (d = v._start))), this._tTime = c, this._time = d, this._act = !_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, l = 0), !l && c && f && !s && !w && (yn(this, "onStart"), this._tTime !== c)) return this;
      if (d >= l && i >= 0)
        for (h = this._first; h;) {
          if (p = h._next, (h._act || d >= h._start) && h._ts && v !== h) {
            if (h.parent !== this) return this.render(i, s, o);
            if (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, s, o), d !== this._time || !this._ts && !b) {
              v = 0, p && (c += this._zTime = -He);
              break
            }
          }
          h = p
        } else {
          h = this._last;
          for (var P = i < 0 ? i : d; h;) {
            if (p = h._prev, (h._act || P <= h._end) && h._ts && v !== h) {
              if (h.parent !== this) return this.render(i, s, o);
              if (h.render(h._ts > 0 ? (P - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (P - h._start) * h._ts, s, o || Ct && ih(h)), d !== this._time || !this._ts && !b) {
                v = 0, p && (c += this._zTime = P ? -He : He);
                break
              }
            }
            h = p
          }
        }
      if (v && !s && (this.pause(), v.render(d >= l ? 0 : -He)._zTime = d >= l ? 1 : -1, this._ts)) return this._start = m, uc(this), this.render(i, s, o);
      this._onUpdate && !s && yn(this, "onUpdate", !0), (c === a && this._tTime >= this.totalDuration() || !c && l) && (m === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !f) && (c === a && this._ts > 0 || !c && this._ts < 0) && li(this, 1), !s && !(i < 0 && !l) && (c || l || !a) && (yn(this, c === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < a && this.timeScale() > 0) && this._prom())))
    }
    return this
  }, n.add = function(i, s) {
    var o = this;
    if (Hr(s) || (s = Cn(this, s, i)), !(i instanceof il)) {
      if (It(i)) return i.forEach(function(l) {
        return o.add(l, s)
      }), this;
      if (xt(i)) return this.addLabel(i, s);
      if (et(i)) i = ot.delayedCall(0, i);
      else return this
    }
    return this !== i ? or(this, i, s) : this
  }, n.getChildren = function(i, s, o, l) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), l === void 0 && (l = -On);
    for (var a = [], f = this._first; f;) f._start >= l && (f instanceof ot ? s && a.push(f) : (o && a.push(f), i && a.push.apply(a, f.getChildren(!0, s, o)))), f = f._next;
    return a
  }, n.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
      if (s[o].vars.id === i) return s[o]
  }, n.remove = function(i) {
    return xt(i) ? this.removeLabel(i) : et(i) ? this.killTweensOf(i) : (i.parent === this && fc(this, i), i === this._recent && (this._recent = this._last), Fi(this))
  }, n.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ge(pn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
  }, n.addLabel = function(i, s) {
    return this.labels[i] = Cn(this, s), this
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this
  }, n.addPause = function(i, s, o) {
    var l = ot.delayedCall(0, s || tl, o);
    return l.data = "isPause", this._hasPause = 1, or(this, l, Cn(this, i))
  }, n.removePause = function(i) {
    var s = this._first;
    for (i = Cn(this, i); s;) s._start === i && s.data === "isPause" && li(s), s = s._next
  }, n.killTweensOf = function(i, s, o) {
    for (var l = this.getTweensOf(i, o), a = l.length; a--;) Kr !== l[a] && l[a].kill(i, s);
    return this
  }, n.getTweensOf = function(i, s) {
    for (var o = [], l = Mn(i), a = this._first, f = Hr(s), c; a;) a instanceof ot ? ES(a._targets, l) && (f ? (!Kr || a._initted && a._ts) && a.globalTime(0) <= s && a.globalTime(a.totalDuration()) > s : !s || a.isActive()) && o.push(a) : (c = a.getTweensOf(l, s)).length && o.push.apply(o, c), a = a._next;
    return o
  }, n.tweenTo = function(i, s) {
    s = s || {};
    var o = this,
      l = Cn(o, i),
      a = s,
      f = a.startAt,
      c = a.onStart,
      u = a.onStartParams,
      d = a.immediateRender,
      h, p = ot.to(o, Tn({
        ease: s.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: l,
        overwrite: "auto",
        duration: s.duration || Math.abs((l - (f && "time" in f ? f.time : o._time)) / o.timeScale()) || He,
        onStart: function() {
          if (o.pause(), !h) {
            var y = s.duration || Math.abs((l - (f && "time" in f ? f.time : o._time)) / o.timeScale());
            p._dur !== y && Ws(p, y, 0, 1).render(p._time, !0, !0), h = 1
          }
          c && c.apply(p, u || [])
        }
      }, s));
    return d ? p.render(0) : p
  }, n.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, Tn({
      startAt: {
        time: Cn(this, i)
      }
    }, o))
  }, n.recent = function() {
    return this._recent
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Qd(this, Cn(this, i))
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Qd(this, Cn(this, i), 1)
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + He)
  }, n.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    var l = this._first,
      a = this.labels,
      f;
    for (i = Ge(i); l;) l._start >= o && (l._start += i, l._end += i), l = l._next;
    if (s)
      for (f in a) a[f] >= o && (a[f] += i);
    return Fi(this)
  }, n.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s;) s.invalidate(i), s = s._next;
    return t.prototype.invalidate.call(this, i)
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Fi(this)
  }, n.totalDuration = function(i) {
    var s = 0,
      o = this,
      l = o._last,
      a = On,
      f, c, u;
    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (u = o.parent; l;) f = l._prev, l._dirty && l.totalDuration(), c = l._start, c > a && o._sort && l._ts && !o._lock ? (o._lock = 1, or(o, l, c - l._delay, 1)._lock = 0) : a = c, c < 0 && l._ts && (s -= c, (!u && !o._dp || u && u.smoothChildTiming) && (o._start += Ge(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), a = 0), l._end > s && l._ts && (s = l._end), l = f;
      Ws(o, o === Ye && o._time > s ? o._time : s, 1, 1), o._dirty = 0
    }
    return o._tDur
  }, e.updateRoot = function(i) {
    if (Ye._ts && (Am(Ye, $a(i, Ye)), Pm = pn.frame), pn.frame >= Xd) {
      Xd += wn.autoSleep || 120;
      var s = Ye._first;
      if ((!s || !s._ts) && wn.autoSleep && pn._listeners.length < 2) {
        for (; s && !s._ts;) s = s._next;
        s || pn.sleep()
      }
    }
  }, e
})(il);
Tn(Xt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var XS = function(e, n, r, i, s, o, l) {
    var a = new rn(this._pt, e, n, 0, 1, i0, null, s),
      f = 0,
      c = 0,
      u, d, h, p, g, y, b, v;
    for (a.b = r, a.e = i, r += "", i += "", (b = ~i.indexOf("random(")) && (i = nl(i)), o && (v = [r, i], o(v, e, n), r = v[0], i = v[1]), d = r.match(Bc) || []; u = Bc.exec(i);) p = u[0], g = i.substring(f, u.index), h ? h = (h + 1) % 5 : g.substr(-5) === "rgba(" && (h = 1), p !== d[c++] && (y = parseFloat(d[c - 1]) || 0, a._pt = {
      _next: a._pt,
      p: g || c === 1 ? g : ",",
      s: y,
      c: p.charAt(1) === "=" ? Ss(y, p) - y : parseFloat(p) - y,
      m: h && h < 4 ? Math.round : 0
    }, f = Bc.lastIndex);
    return a.c = f < i.length ? i.substring(f, i.length) : "", a.fp = l, (Sm.test(i) || b) && (a.e = 0), this._pt = a, a
  },
  sh = function(e, n, r, i, s, o, l, a, f, c) {
    et(i) && (i = i(s || 0, e, o));
    var u = e[n],
      d = r !== "get" ? r : et(u) ? f ? e[n.indexOf("set") || !et(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](f) : e[n]() : u,
      h = et(u) ? f ? ZS : n0 : lh,
      p;
    if (xt(i) && (~i.indexOf("random(") && (i = nl(i)), i.charAt(1) === "=" && (p = Ss(d, i) + ($t(d) || 0), (p || p === 0) && (i = p))), !c || d !== i || Xf) return !isNaN(d * i) && i !== "" ? (p = new rn(this._pt, e, n, +d || 0, i - (d || 0), typeof u == "boolean" ? tE : r0, 0, h), f && (p.fp = f), l && p.modifier(l, this, e), this._pt = p) : (!u && !(n in e) && eh(n, i), XS.call(this, e, n, d, i, h, a || wn.stringFilter, f))
  },
  KS = function(e, n, r, i, s) {
    if (et(e) && (e = No(e, s, n, r, i)), !_r(e) || e.style && e.nodeType || It(e) || xm(e)) return xt(e) ? No(e, s, n, r, i) : e;
    var o = {},
      l;
    for (l in e) o[l] = No(e[l], s, n, r, i);
    return o
  },
  Zm = function(e, n, r, i, s, o) {
    var l, a, f, c;
    if (cn[e] && (l = new cn[e]).init(s, l.rawVars ? n[e] : KS(n[e], i, s, o, r), r, i, o) !== !1 && (r._pt = a = new rn(r._pt, s, e, 0, 1, l.render, l, 0, l.priority), r !== ps))
      for (f = r._ptLookup[r._targets.indexOf(s)], c = l._props.length; c--;) f[l._props[c]] = a;
    return l
  },
  Kr, Xf, oh = function t(e, n, r) {
    var i = e.vars,
      s = i.ease,
      o = i.startAt,
      l = i.immediateRender,
      a = i.lazy,
      f = i.onUpdate,
      c = i.runBackwards,
      u = i.yoyoEase,
      d = i.keyframes,
      h = i.autoRevert,
      p = e._dur,
      g = e._startAt,
      y = e._targets,
      b = e.parent,
      v = b && b.data === "nested" ? b.vars.targets : y,
      _ = e._overwrite === "auto" && !qu,
      m = e.timeline,
      w, T, E, R, C, P, D, A, $, z, G, L, B;
    if (m && (!d || !s) && (s = "none"), e._ease = Bi(s, Bs.ease), e._yEase = u ? Km(Bi(u === !0 ? s : u, Bs.ease)) : 0, u && e._yoyo && !e._repeat && (u = e._yEase, e._yEase = e._ease, e._ease = u), e._from = !m && !!i.runBackwards, !m || d && !i.stagger) {
      if (A = y[0] ? Hi(y[0]).harness : 0, L = A && i[A.prop], w = Na(i, th), g && (g._zTime < 0 && g.progress(1), n < 0 && c && l && !h ? g.render(-1, !0) : g.revert(c && p ? ra : TS), g._lazy = 0), o) {
        if (li(e._startAt = ot.set(y, Tn({
            data: "isStart",
            overwrite: !1,
            parent: b,
            immediateRender: !0,
            lazy: !g && tn(a),
            startAt: null,
            delay: 0,
            onUpdate: f && function() {
              return yn(e, "onUpdate")
            },
            stagger: 0
          }, o))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Ct || !l && !h) && e._startAt.revert(ra), l && p && n <= 0 && r <= 0) {
          n && (e._zTime = n);
          return
        }
      } else if (c && p && !g) {
        if (n && (l = !1), E = Tn({
            overwrite: !1,
            data: "isFromStart",
            lazy: l && !g && tn(a),
            immediateRender: l,
            stagger: 0,
            parent: b
          }, w), L && (E[A.prop] = L), li(e._startAt = ot.set(y, E)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Ct ? e._startAt.revert(ra) : e._startAt.render(-1, !0)), e._zTime = n, !l) t(e._startAt, He, He);
        else if (!n) return
      }
      for (e._pt = e._ptCache = 0, a = p && tn(a) || a && !p, T = 0; T < y.length; T++) {
        if (C = y[T], D = C._gsap || rh(y)[T]._gsap, e._ptLookup[T] = z = {}, jf[D.id] && ri.length && Ma(), G = v === y ? T : v.indexOf(C), A && ($ = new A).init(C, L || w, e, G, v) !== !1 && (e._pt = R = new rn(e._pt, C, $.name, 0, 1, $.render, $, 0, $.priority), $._props.forEach(function(F) {
            z[F] = R
          }), $.priority && (P = 1)), !A || L)
          for (E in w) cn[E] && ($ = Zm(E, w, e, G, C, v)) ? $.priority && (P = 1) : z[E] = R = sh.call(e, C, E, "get", w[E], G, v, 0, i.stringFilter);
        e._op && e._op[T] && e.kill(C, e._op[T]), _ && e._pt && (Kr = e, Ye.killTweensOf(C, z, e.globalTime(n)), B = !e.parent, Kr = 0), e._pt && a && (jf[D.id] = 1)
      }
      P && s0(e), e._onInit && e._onInit(e)
    }
    e._onUpdate = f, e._initted = (!e._op || e._pt) && !B, d && n <= 0 && m.render(On, !0, !0)
  },
  qS = function(e, n, r, i, s, o, l, a) {
    var f = (e._pt && e._ptCache || (e._ptCache = {}))[n],
      c, u, d, h;
    if (!f)
      for (f = e._ptCache[n] = [], d = e._ptLookup, h = e._targets.length; h--;) {
        if (c = d[h][n], c && c.d && c.d._pt)
          for (c = c.d._pt; c && c.p !== n && c.fp !== n;) c = c._next;
        if (!c) return Xf = 1, e.vars[n] = "+=0", oh(e, l), Xf = 0, a ? el(n + " not eligible for reset") : 1;
        f.push(c)
      }
    for (h = f.length; h--;) u = f[h], c = u._pt || u, c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c, c.c = r - c.s, u.e && (u.e = nt(r) + $t(u.e)), u.b && (u.b = c.s + $t(u.b))
  },
  JS = function(e, n) {
    var r = e[0] ? Hi(e[0]).harness : 0,
      i = r && r.aliases,
      s, o, l, a;
    if (!i) return n;
    s = Us({}, n);
    for (o in i)
      if (o in s)
        for (a = i[o].split(","), l = a.length; l--;) s[a[l]] = s[o];
    return s
  },
  QS = function(e, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o, l;
    if (It(n)) l = r[e] || (r[e] = []), n.forEach(function(a, f) {
      return l.push({
        t: f / (n.length - 1) * 100,
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
  No = function(e, n, r, i, s) {
    return et(e) ? e.call(n, r, i, s) : xt(e) && ~e.indexOf("random(") ? nl(e) : e
  },
  e0 = nh + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  t0 = {};
nn(e0 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return t0[t] = 1
});
var ot = (function(t) {
  bm(e, t);

  function e(r, i, s, o) {
    var l;
    typeof i == "number" && (s.duration = i, i = s, s = null), l = t.call(this, o ? i : Oo(i)) || this;
    var a = l.vars,
      f = a.duration,
      c = a.delay,
      u = a.immediateRender,
      d = a.stagger,
      h = a.overwrite,
      p = a.keyframes,
      g = a.defaults,
      y = a.scrollTrigger,
      b = a.yoyoEase,
      v = i.parent || Ye,
      _ = (It(r) || xm(r) ? Hr(r[0]) : "length" in i) ? [r] : Mn(r),
      m, w, T, E, R, C, P, D;
    if (l._targets = _.length ? rh(_) : el("GSAP target " + r + " not found. https://gsap.com", !wn.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = h, p || d || Dl(f) || Dl(c)) {
      if (i = l.vars, m = l.timeline = new Xt({
          data: "nested",
          defaults: g || {},
          targets: v && v.data === "nested" ? v.vars.targets : _
        }), m.kill(), m.parent = m._dp = Tr(l), m._start = 0, d || Dl(f) || Dl(c)) {
        if (E = _.length, P = d && Fm(d), _r(d))
          for (R in d) ~e0.indexOf(R) && (D || (D = {}), D[R] = d[R]);
        for (w = 0; w < E; w++) T = Na(i, t0), T.stagger = 0, b && (T.yoyoEase = b), D && Us(T, D), C = _[w], T.duration = +No(f, Tr(l), w, C, _), T.delay = (+No(c, Tr(l), w, C, _) || 0) - l._delay, !d && E === 1 && T.delay && (l._delay = c = T.delay, l._start += c, T.delay = 0), m.to(C, T, P ? P(w, C, _) : 0), m._ease = Ee.none;
        m.duration() ? f = c = 0 : l.timeline = 0
      } else if (p) {
        Oo(Tn(m.vars.defaults, {
          ease: "none"
        })), m._ease = Bi(p.ease || i.ease || "none");
        var A = 0,
          $, z, G;
        if (It(p)) p.forEach(function(L) {
          return m.to(_, L, ">")
        }), m.duration();
        else {
          T = {};
          for (R in p) R === "ease" || R === "easeEach" || QS(R, p[R], T, p.easeEach);
          for (R in T)
            for ($ = T[R].sort(function(L, B) {
                return L.t - B.t
              }), A = 0, w = 0; w < $.length; w++) z = $[w], G = {
              ease: z.e,
              duration: (z.t - (w ? $[w - 1].t : 0)) / 100 * f
            }, G[R] = z.v, m.to(_, G, A), A += G.duration;
          m.duration() < f && m.to({}, {
            duration: f - m.duration()
          })
        }
      }
      f || l.duration(f = m.duration())
    } else l.timeline = 0;
    return h === !0 && !qu && (Kr = Tr(l), Ye.killTweensOf(_), Kr = 0), or(v, Tr(l), s), i.reversed && l.reverse(), i.paused && l.paused(!0), (u || !f && !p && l._start === Ge(v._time) && tn(u) && RS(Tr(l)) && v.data !== "nested") && (l._tTime = -He, l.render(Math.max(0, -c) || 0)), y && Dm(Tr(l), y), l
  }
  var n = e.prototype;
  return n.render = function(i, s, o) {
    var l = this._time,
      a = this._tDur,
      f = this._dur,
      c = i < 0,
      u = i > a - He && !c ? a : i < He ? 0 : i,
      d, h, p, g, y, b, v, _, m;
    if (!f) OS(this, i, s, o);
    else if (u !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (d = u, _ = this.timeline, this._repeat) {
        if (g = f + this._rDelay, this._repeat < -1 && c) return this.totalTime(g * 100 + i, s, o);
        if (d = Ge(u % g), u === a ? (p = this._repeat, d = f) : (y = Ge(u / g), p = ~~y, p && p === y ? (d = f, p--) : d > f && (d = f)), b = this._yoyo && p & 1, b && (m = this._yEase, d = f - d), y = js(this._tTime, g), d === l && !o && this._initted && p === y) return this._tTime = u, this;
        p !== y && (_ && this._yEase && qm(_, b), this.vars.repeatRefresh && !b && !this._lock && d !== g && this._initted && (this._lock = o = 1, this.render(Ge(g * p), !0).invalidate()._lock = 0))
      }
      if (!this._initted) {
        if (Lm(this, c ? i : d, o, s, u)) return this._tTime = 0, this;
        if (l !== this._time && !(o && this.vars.repeatRefresh && p !== y)) return this;
        if (f !== this._dur) return this.render(i, s, o)
      }
      if (this._tTime = u, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (m || this._ease)(d / f), this._from && (this.ratio = v = 1 - v), !l && u && !s && !y && (yn(this, "onStart"), this._tTime !== u)) return this;
      for (h = this._pt; h;) h.r(v, h.d), h = h._next;
      _ && _.render(i < 0 ? i : _._dur * _._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (c && Wf(this, i, s, o), yn(this, "onUpdate")), this._repeat && p !== y && this.vars.onRepeat && !s && this.parent && yn(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && Wf(this, i, !0, !0), (i || !f) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && li(this, 1), !s && !(c && !l) && (u || l || b) && (yn(this, u === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < a && this.timeScale() > 0) && this._prom()))
    }
    return this
  }, n.targets = function() {
    return this._targets
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i)
  }, n.resetTo = function(i, s, o, l, a) {
    rl || pn.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      c;
    return this._initted || oh(this, f), c = this._ease(f / this._dur), qS(this, i, s, o, l, c, f, a) ? this.resetTo(i, s, o, l, 1) : (hc(this, 0), this.parent || Nm(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
  }, n.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? ho(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ct), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, Kr && Kr.vars.overwrite !== !0)._first || ho(this), this.parent && o !== this.timeline.totalDuration() && Ws(this, this._dur * this.timeline._tDur / o, 0, 1), this
    }
    var l = this._targets,
      a = i ? Mn(i) : l,
      f = this._ptLookup,
      c = this._pt,
      u, d, h, p, g, y, b;
    if ((!s || s === "all") && kS(l, a)) return s === "all" && (this._pt = 0), ho(this);
    for (u = this._op = this._op || [], s !== "all" && (xt(s) && (g = {}, nn(s, function(v) {
        return g[v] = 1
      }), s = g), s = JS(l, s)), b = l.length; b--;)
      if (~a.indexOf(l[b])) {
        d = f[b], s === "all" ? (u[b] = s, p = d, h = {}) : (h = u[b] = u[b] || {}, p = s);
        for (g in p) y = d && d[g], y && ((!("kill" in y.d) || y.d.kill(g) === !0) && fc(this, y, "_pt"), delete d[g]), h !== "all" && (h[g] = 1)
      } return this._initted && !this._pt && c && ho(this), this
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2])
  }, e.from = function(i, s) {
    return Mo(1, arguments)
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
    return Mo(2, arguments)
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s)
  }, e.killTweensOf = function(i, s, o) {
    return Ye.killTweensOf(i, s, o)
  }, e
})(il);
Tn(ot.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
nn("staggerTo,staggerFrom,staggerFromTo", function(t) {
  ot[t] = function() {
    var e = new Xt,
      n = Vf.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n)
  }
});
var lh = function(e, n, r) {
    return e[n] = r
  },
  n0 = function(e, n, r) {
    return e[n](r)
  },
  ZS = function(e, n, r, i) {
    return e[n](i.fp, r)
  },
  eE = function(e, n, r) {
    return e.setAttribute(n, r)
  },
  ah = function(e, n) {
    return et(e[n]) ? n0 : Ju(e[n]) && e.setAttribute ? eE : lh
  },
  r0 = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
  },
  tE = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
  },
  i0 = function(e, n) {
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
  ch = function(e, n) {
    for (var r = n._pt; r;) r.r(e, r.d), r = r._next
  },
  nE = function(e, n, r, i) {
    for (var s = this._pt, o; s;) o = s._next, s.p === i && s.modifier(e, n, r), s = o
  },
  rE = function(e) {
    for (var n = this._pt, r, i; n;) i = n._next, n.p === e && !n.op || n.op === e ? fc(this, n, "_pt") : n.dep || (r = 1), n = i;
    return !r
  },
  iE = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
  },
  s0 = function(e) {
    for (var n = e._pt, r, i, s, o; n;) {
      for (r = n._next, i = s; i && i.pr > n.pr;) i = i._next;
      (n._prev = i ? i._prev : o) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : o = n, n = r
    }
    e._pt = s
  },
  rn = (function() {
    function t(n, r, i, s, o, l, a, f, c) {
      this.t = r, this.s = s, this.c = o, this.p = i, this.r = l || r0, this.d = a || this, this.set = f || lh, this.pr = c || 0, this._next = n, n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, s) {
      this.mSet = this.mSet || this.set, this.set = iE, this.m = r, this.mt = s, this.tween = i
    }, t
  })();
nn(nh + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return th[t] = 1
});
xn.TweenMax = xn.TweenLite = ot;
xn.TimelineLite = xn.TimelineMax = Xt;
Ye = new Xt({
  sortChildren: !1,
  defaults: Bs,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
wn.stringFilter = Xm;
var Ui = [],
  sa = {},
  sE = [],
  ep = 0,
  oE = 0,
  Vc = function(e) {
    return (sa[e] || sE).map(function(n) {
      return n()
    })
  },
  Kf = function() {
    var e = Date.now(),
      n = [];
    e - ep > 2 && (Vc("matchMediaInit"), Ui.forEach(function(r) {
      var i = r.queries,
        s = r.conditions,
        o, l, a, f;
      for (l in i) o = rr.matchMedia(i[l]).matches, o && (a = 1), o !== s[l] && (s[l] = o, f = 1);
      f && (r.revert(), a && n.push(r))
    }), Vc("matchMediaRevert"), n.forEach(function(r) {
      return r.onMatch(r, function(i) {
        return r.add(null, i)
      })
    }), ep = e, Vc("matchMedia"))
  },
  o0 = (function() {
    function t(n, r) {
      this.selector = r && Gf(r), this.data = [], this._r = [], this.isReverted = !1, this.id = oE++, n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
      et(r) && (s = i, i = r, r = et);
      var o = this,
        l = function() {
          var f = ze,
            c = o.selector,
            u;
          return f && f !== o && f.data.push(o), s && (o.selector = Gf(s)), ze = o, u = i.apply(o, arguments), et(u) && o._r.push(u), ze = f, o.selector = c, o.isReverted = !1, u
        };
      return o.last = l, r === et ? l(o, function(a) {
        return o.add(null, a)
      }) : r ? o[r] = l : l
    }, e.ignore = function(r) {
      var i = ze;
      ze = null, r(this), ze = i
    }, e.getTweens = function() {
      var r = [];
      return this.data.forEach(function(i) {
        return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof ot && !(i.parent && i.parent.data === "nested") && r.push(i)
      }), r
    }, e.clear = function() {
      this._r.length = this.data.length = 0
    }, e.kill = function(r, i) {
      var s = this;
      if (r ? (function() {
          for (var l = s.getTweens(), a = s.data.length, f; a--;) f = s.data[a], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(c) {
            return l.splice(l.indexOf(c), 1)
          }));
          for (l.map(function(c) {
              return {
                g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                t: c
              }
            }).sort(function(c, u) {
              return u.g - c.g || -1 / 0
            }).forEach(function(c) {
              return c.t.revert(r)
            }), a = s.data.length; a--;) f = s.data[a], f instanceof Xt ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof ot) && f.revert && f.revert(r);
          s._r.forEach(function(c) {
            return c(r, s)
          }), s.isReverted = !0
        })() : this.data.forEach(function(l) {
          return l.kill && l.kill()
        }), this.clear(), i)
        for (var o = Ui.length; o--;) Ui[o].id === this.id && Ui.splice(o, 1)
    }, e.revert = function(r) {
      this.kill(r || {})
    }, t
  })(),
  lE = (function() {
    function t(n) {
      this.contexts = [], this.scope = n, ze && ze.data.push(this)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
      _r(r) || (r = {
        matches: r
      });
      var o = new o0(0, s || this.scope),
        l = o.conditions = {},
        a, f, c;
      ze && !o.selector && (o.selector = ze.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
      for (f in r) f === "all" ? c = 1 : (a = rr.matchMedia(r[f]), a && (Ui.indexOf(o) < 0 && Ui.push(o), (l[f] = a.matches) && (c = 1), a.addListener ? a.addListener(Kf) : a.addEventListener("change", Kf)));
      return c && i(o, function(u) {
        return o.add(null, u)
      }), this
    }, e.revert = function(r) {
      this.kill(r || {})
    }, e.kill = function(r) {
      this.contexts.forEach(function(i) {
        return i.kill(r, !0)
      })
    }, t
  })(),
  Da = {
    registerPlugin: function() {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
      n.forEach(function(i) {
        return Vm(i)
      })
    },
    timeline: function(e) {
      return new Xt(e)
    },
    getTweensOf: function(e, n) {
      return Ye.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
      xt(e) && (e = Mn(e)[0]);
      var s = Hi(e || {}).get,
        o = r ? Mm : Om;
      return r === "native" && (r = ""), e && (n ? o((cn[n] && cn[n].get || s)(e, n, r, i)) : function(l, a, f) {
        return o((cn[l] && cn[l].get || s)(e, l, a, f))
      })
    },
    quickSetter: function(e, n, r) {
      if (e = Mn(e), e.length > 1) {
        var i = e.map(function(c) {
            return Ht.quickSetter(c, n, r)
          }),
          s = i.length;
        return function(c) {
          for (var u = s; u--;) i[u](c)
        }
      }
      e = e[0] || {};
      var o = cn[n],
        l = Hi(e),
        a = l.harness && (l.harness.aliases || {})[n] || n,
        f = o ? function(c) {
          var u = new o;
          ps._pt = 0, u.init(e, r ? c + r : c, ps, 0, [e]), u.render(1, u), ps._pt && ch(1, ps)
        } : l.set(e, a);
      return o ? f : function(c) {
        return f(e, a, r ? c + r : c, l, 1)
      }
    },
    quickTo: function(e, n, r) {
      var i, s = Ht.to(e, Tn((i = {}, i[n] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})),
        o = function(a, f, c) {
          return s.resetTo(n, a, f, c)
        };
      return o.tween = s, o
    },
    isTweening: function(e) {
      return Ye.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
      return e && e.ease && (e.ease = Bi(e.ease, Bs.ease)), Kd(Bs, e || {})
    },
    config: function(e) {
      return Kd(wn, e || {})
    },
    registerEffect: function(e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (i || "").split(",").forEach(function(l) {
        return l && !cn[l] && !xn[l] && el(n + " effect requires " + l + " plugin.")
      }), Uc[n] = function(l, a, f) {
        return r(Mn(l), Tn(a || {}, s), f)
      }, o && (Xt.prototype[n] = function(l, a, f) {
        return this.add(Uc[n](l, _r(a) ? a : (f = a) && {}, this), f)
      })
    },
    registerEase: function(e, n) {
      Ee[e] = Bi(n)
    },
    parseEase: function(e, n) {
      return arguments.length ? Bi(e, n) : Ee
    },
    getById: function(e) {
      return Ye.getById(e)
    },
    exportRoot: function(e, n) {
      e === void 0 && (e = {});
      var r = new Xt(e),
        i, s;
      for (r.smoothChildTiming = tn(e.smoothChildTiming), Ye.remove(r), r._dp = 0, r._time = r._tTime = Ye._time, i = Ye._first; i;) s = i._next, (n || !(!i._dur && i instanceof ot && i.vars.onComplete === i._targets[0])) && or(r, i, i._start - i._delay), i = s;
      return or(Ye, r, 0), r
    },
    context: function(e, n) {
      return e ? new o0(e, n) : ze
    },
    matchMedia: function(e) {
      return new lE(e)
    },
    matchMediaRefresh: function() {
      return Ui.forEach(function(e) {
        var n = e.conditions,
          r, i;
        for (i in n) n[i] && (n[i] = !1, r = 1);
        r && e.revert()
      }) || Kf()
    },
    addEventListener: function(e, n) {
      var r = sa[e] || (sa[e] = []);
      ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
      var r = sa[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1)
    },
    utils: {
      wrap: FS,
      wrapYoyo: BS,
      distribute: Fm,
      random: Um,
      snap: Bm,
      normalize: HS,
      getUnit: $t,
      clamp: $S,
      splitColor: Gm,
      toArray: Mn,
      selector: Gf,
      mapRange: Wm,
      pipe: LS,
      unitize: IS,
      interpolate: US,
      shuffle: Hm
    },
    install: Cm,
    effects: Uc,
    ticker: pn,
    updateRoot: Xt.updateRoot,
    plugins: cn,
    globalTimeline: Ye,
    core: {
      PropTween: rn,
      globals: km,
      Tween: ot,
      Timeline: Xt,
      Animation: il,
      getCache: Hi,
      _removeLinkedListItem: fc,
      reverting: function() {
        return Ct
      },
      context: function(e) {
        return e && ze && (ze.data.push(e), e._ctx = ze), ze
      },
      suppressOverwrites: function(e) {
        return qu = e
      }
    }
  };
nn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return Da[t] = ot[t]
});
pn.add(Xt.updateRoot);
ps = Da.to({}, {
  duration: 0
});
var aE = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n;) r = r._next;
    return r
  },
  cE = function(e, n) {
    var r = e._targets,
      i, s, o;
    for (i in n)
      for (s = r.length; s--;) o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = aE(o, i)), o && o.modifier && o.modifier(n[i], e, r[s], i))
  },
  Gc = function(e, n) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function(i, s, o) {
        o._onInit = function(l) {
          var a, f;
          if (xt(s) && (a = {}, nn(s, function(c) {
              return a[c] = 1
            }), s = a), n) {
            a = {};
            for (f in s) a[f] = n(s[f]);
            s = a
          }
          cE(l, s)
        }
      }
    }
  },
  Ht = Da.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, s) {
      var o, l, a;
      this.tween = r;
      for (o in n) a = e.getAttribute(o) || "", l = this.add(e, "setAttribute", (a || 0) + "", n[o], i, s, 0, 0, o), l.op = o, l.b = a, this._props.push(o)
    },
    render: function(e, n) {
      for (var r = n._pt; r;) Ct ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
    }
  }, {
    name: "endArray",
    headless: 1,
    init: function(e, n) {
      for (var r = n.length; r--;) this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
  }, Gc("roundProps", Yf), Gc("modifiers"), Gc("snap", Bm)) || Da;
ot.version = Xt.version = Ht.version = "3.14.2";
Em = 1;
Qu() && zs();
Ee.Power0;
Ee.Power1;
Ee.Power2;
Ee.Power3;
Ee.Power4;
Ee.Linear;
Ee.Quad;
Ee.Cubic;
Ee.Quart;
Ee.Quint;
Ee.Strong;
Ee.Elastic;
Ee.Back;
Ee.SteppedEase;
Ee.Bounce;
Ee.Sine;
Ee.Expo;
Ee.Circ;
var tp, qr, Es, fh, Ai, np, uh, fE = function() {
    return typeof window < "u"
  },
  Fr = {},
  Ei = 180 / Math.PI,
  Cs = Math.PI / 180,
  ns = Math.atan2,
  rp = 1e8,
  hh = /([A-Z])/g,
  uE = /(left|right|width|margin|padding|x)/i,
  hE = /[\s,\(]\S/,
  lr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  qf = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  dE = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
  },
  pE = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
  },
  gE = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
  },
  _E = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
  },
  l0 = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
  },
  a0 = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
  },
  mE = function(e, n, r) {
    return e.style[n] = r
  },
  yE = function(e, n, r) {
    return e.style.setProperty(n, r)
  },
  vE = function(e, n, r) {
    return e._gsap[n] = r
  },
  bE = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
  },
  wE = function(e, n, r, i, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = r, o.renderTransform(s, o)
  },
  xE = function(e, n, r, i, s) {
    var o = e._gsap;
    o[n] = r, o.renderTransform(s, o)
  },
  Xe = "transform",
  sn = Xe + "Origin",
  TE = function t(e, n) {
    var r = this,
      i = this.target,
      s = i.style,
      o = i._gsap;
    if (e in Fr && s) {
      if (this.tfm = this.tfm || {}, e !== "transform") e = lr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(l) {
        return r.tfm[l] = Er(i, l)
      }) : this.tfm[e] = o.x ? o[e] : Er(i, e), e === sn && (this.tfm.zOrigin = o.zOrigin);
      else return lr.transform.split(",").forEach(function(l) {
        return t.call(r, l, n)
      });
      if (this.props.indexOf(Xe) >= 0) return;
      o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(sn, n, "")), e = Xe
    }(s || n) && this.props.push(e, n, s[e])
  },
  c0 = function(e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
  },
  SE = function() {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s, o;
    for (s = 0; s < e.length; s += 3) e[s + 1] ? e[s + 1] === 2 ? n[e[s]](e[s + 2]) : n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(hh, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), s = uh(), (!s || !s.isStart) && !r[Xe] && (c0(r), i.zOrigin && r[sn] && (r[sn] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
    }
  },
  f0 = function(e, n) {
    var r = {
      target: e,
      props: [],
      revert: SE,
      save: TE
    };
    return e._gsap || Ht.core.getCache(e), n && e.style && e.nodeType && n.split(",").forEach(function(i) {
      return r.save(i)
    }), r
  },
  u0, Jf = function(e, n) {
    var r = qr.createElementNS ? qr.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : qr.createElement(e);
    return r && r.style ? r : qr.createElement(e)
  },
  vn = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(hh, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Vs(n) || n, 1) || ""
  },
  ip = "O,Moz,ms,Ms,Webkit".split(","),
  Vs = function(e, n, r) {
    var i = n || Ai,
      s = i.style,
      o = 5;
    if (e in s && !r) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ip[o] + e in s););
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ip[o] : "") + e
  },
  Qf = function() {
    fE() && window.document && (tp = window, qr = tp.document, Es = qr.documentElement, Ai = Jf("div") || {
      style: {}
    }, Jf("div"), Xe = Vs(Xe), sn = Xe + "Origin", Ai.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", u0 = !!Vs("perspective"), uh = Ht.core.reverting, fh = 1)
  },
  sp = function(e) {
    var n = e.ownerSVGElement,
      r = Jf("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = e.cloneNode(!0),
      s;
    i.style.display = "block", r.appendChild(i), Es.appendChild(r);
    try {
      s = i.getBBox()
    } catch {}
    return r.removeChild(i), Es.removeChild(r), s
  },
  op = function(e, n) {
    for (var r = n.length; r--;)
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r])
  },
  h0 = function(e) {
    var n, r;
    try {
      n = e.getBBox()
    } catch {
      n = sp(e), r = 1
    }
    return n && (n.width || n.height) || r || (n = sp(e)), n && !n.width && !n.x && !n.y ? {
      x: +op(e, ["x", "cx", "x1"]) || 0,
      y: +op(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : n
  },
  d0 = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && h0(e))
  },
  ai = function(e, n) {
    if (n) {
      var r = e.style,
        i;
      n in Fr && n !== sn && (n = Xe), r.removeProperty ? (i = n.substr(0, 2), (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(i === "--" ? n : n.replace(hh, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
  },
  Jr = function(e, n, r, i, s, o) {
    var l = new rn(e._pt, n, r, 0, 1, o ? a0 : l0);
    return e._pt = l, l.b = i, l.e = s, e._props.push(r), l
  },
  lp = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  EE = {
    grid: 1,
    flex: 1
  },
  ci = function t(e, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      l = Ai.style,
      a = uE.test(n),
      f = e.tagName.toLowerCase() === "svg",
      c = (f ? "client" : "offset") + (a ? "Width" : "Height"),
      u = 100,
      d = i === "px",
      h = i === "%",
      p, g, y, b;
    if (i === o || !s || lp[i] || lp[o]) return s;
    if (o !== "px" && !d && (s = t(e, n, r, "px")), b = e.getCTM && d0(e), (h || o === "%") && (Fr[n] || ~n.indexOf("adius"))) return p = b ? e.getBBox()[a ? "width" : "height"] : e[c], nt(h ? s / p * u : s / 100 * p);
    if (l[a ? "width" : "height"] = u + (d ? o : i), g = i !== "rem" && ~n.indexOf("adius") || i === "em" && e.appendChild && !f ? e : e.parentNode, b && (g = (e.ownerSVGElement || {}).parentNode), (!g || g === qr || !g.appendChild) && (g = qr.body), y = g._gsap, y && h && y.width && a && y.time === pn.time && !y.uncache) return nt(s / y.width * u);
    if (h && (n === "height" || n === "width")) {
      var v = e.style[n];
      e.style[n] = u + i, p = e[c], v ? e.style[n] = v : ai(e, n)
    } else(h || o === "%") && !EE[vn(g, "display")] && (l.position = vn(e, "position")), g === e && (l.position = "static"), g.appendChild(Ai), p = Ai[c], g.removeChild(Ai), l.position = "absolute";
    return a && h && (y = Hi(g), y.time = pn.time, y.width = g[c]), nt(d ? p * s / u : p && s ? u / p * s : 0)
  },
  Er = function(e, n, r, i) {
    var s;
    return fh || Qf(), n in lr && n !== "transform" && (n = lr[n], ~n.indexOf(",") && (n = n.split(",")[0])), Fr[n] && n !== "transform" ? (s = ol(e, i), s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : Ia(vn(e, sn)) + " " + s.zOrigin + "px") : (s = e.style[n], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = La[n] && La[n](e, n, r) || vn(e, n) || Rm(e, n) || (n === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? ci(e, n, s, r) + r : s
  },
  CE = function(e, n, r, i) {
    if (!r || r === "none") {
      var s = Vs(n, e, 1),
        o = s && vn(e, s, 1);
      o && o !== r ? (n = s, r = o) : n === "borderColor" && (r = vn(e, "borderTopColor"))
    }
    var l = new rn(this._pt, e.style, n, 0, 1, i0),
      a = 0,
      f = 0,
      c, u, d, h, p, g, y, b, v, _, m, w;
    if (l.b = r, l.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = vn(e, i.substring(4, i.indexOf(")")))), i === "auto" && (g = e.style[n], e.style[n] = i, i = vn(e, n) || i, g ? e.style[n] = g : ai(e, n)), c = [r, i], Xm(c), r = c[0], i = c[1], d = r.match(ds) || [], w = i.match(ds) || [], w.length) {
      for (; u = ds.exec(i);) y = u[0], v = i.substring(a, u.index), p ? p = (p + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1), y !== (g = d[f++] || "") && (h = parseFloat(g) || 0, m = g.substr((h + "").length), y.charAt(1) === "=" && (y = Ss(h, y) + m), b = parseFloat(y), _ = y.substr((b + "").length), a = ds.lastIndex - _.length, _ || (_ = _ || wn.units[n] || m, a === i.length && (i += _, l.e += _)), m !== _ && (h = ci(e, n, g, _) || 0), l._pt = {
        _next: l._pt,
        p: v || f === 1 ? v : ",",
        s: h,
        c: b - h,
        m: p && p < 4 || n === "zIndex" ? Math.round : 0
      });
      l.c = a < i.length ? i.substring(a, i.length) : ""
    } else l.r = n === "display" && i === "none" ? a0 : l0;
    return Sm.test(i) && (l.e = 0), this._pt = l, l
  },
  ap = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  kE = function(e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = ap[r] || r, n[1] = ap[i] || i, n.join(" ")
  },
  PE = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        l, a, f;
      if (s === "all" || s === !0) i.cssText = "", a = 1;
      else
        for (s = s.split(","), f = s.length; --f > -1;) l = s[f], Fr[l] && (a = 1, l = l === "transformOrigin" ? sn : Xe), ai(r, l);
      a && (ai(r, Xe), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", ol(r, 1), o.uncache = 1, c0(i)))
    }
  },
  La = {
    clearProps: function(e, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = e._pt = new rn(e._pt, n, r, 0, 0, PE);
        return o.u = i, o.pr = -10, o.tween = s, e._props.push(r), 1
      }
    }
  },
  sl = [1, 0, 0, 1, 0, 0],
  p0 = {},
  g0 = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
  },
  cp = function(e) {
    var n = vn(e, Xe);
    return g0(n) ? sl : n.substr(7).match(Tm).map(nt)
  },
  dh = function(e, n) {
    var r = e._gsap || Hi(e),
      i = e.style,
      s = cp(e),
      o, l, a, f;
    return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, s = [a.a, a.b, a.c, a.d, a.e, a.f], s.join(",") === "1,0,0,1,0,0" ? sl : s) : (s === sl && !e.offsetParent && e !== Es && !r.svg && (a = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (f = 1, l = e.nextElementSibling, Es.appendChild(e)), s = cp(e), a ? i.display = a : ai(e, "display"), f && (l ? o.insertBefore(e, l) : o ? o.appendChild(e) : Es.removeChild(e))), n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
  },
  Zf = function(e, n, r, i, s, o) {
    var l = e._gsap,
      a = s || dh(e, !0),
      f = l.xOrigin || 0,
      c = l.yOrigin || 0,
      u = l.xOffset || 0,
      d = l.yOffset || 0,
      h = a[0],
      p = a[1],
      g = a[2],
      y = a[3],
      b = a[4],
      v = a[5],
      _ = n.split(" "),
      m = parseFloat(_[0]) || 0,
      w = parseFloat(_[1]) || 0,
      T, E, R, C;
    r ? a !== sl && (E = h * y - p * g) && (R = m * (y / E) + w * (-g / E) + (g * v - y * b) / E, C = m * (-p / E) + w * (h / E) - (h * v - p * b) / E, m = R, w = C) : (T = h0(e), m = T.x + (~_[0].indexOf("%") ? m / 100 * T.width : m), w = T.y + (~(_[1] || _[0]).indexOf("%") ? w / 100 * T.height : w)), i || i !== !1 && l.smooth ? (b = m - f, v = w - c, l.xOffset = u + (b * h + v * g) - b, l.yOffset = d + (b * p + v * y) - v) : l.xOffset = l.yOffset = 0, l.xOrigin = m, l.yOrigin = w, l.smooth = !!i, l.origin = n, l.originIsAbsolute = !!r, e.style[sn] = "0px 0px", o && (Jr(o, l, "xOrigin", f, m), Jr(o, l, "yOrigin", c, w), Jr(o, l, "xOffset", u, l.xOffset), Jr(o, l, "yOffset", d, l.yOffset)), e.setAttribute("data-svg-origin", m + " " + w)
  },
  ol = function(e, n) {
    var r = e._gsap || new Qm(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      s = r.scaleX < 0,
      o = "px",
      l = "deg",
      a = getComputedStyle(e),
      f = vn(e, sn) || "0",
      c, u, d, h, p, g, y, b, v, _, m, w, T, E, R, C, P, D, A, $, z, G, L, B, F, Z, O, re, fe, Te, ge, Ce;
    return c = u = d = g = y = b = v = _ = m = 0, h = p = 1, r.svg = !!(e.getCTM && d0(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[Xe] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[Xe] !== "none" ? a[Xe] : "")), i.scale = i.rotate = i.translate = "none"), E = dh(e, r.svg), r.svg && (r.uncache ? (F = e.getBBox(), f = r.xOrigin - F.x + "px " + (r.yOrigin - F.y) + "px", B = "") : B = !n && e.getAttribute("data-svg-origin"), Zf(e, B || f, !!B || r.originIsAbsolute, r.smooth !== !1, E)), w = r.xOrigin || 0, T = r.yOrigin || 0, E !== sl && (D = E[0], A = E[1], $ = E[2], z = E[3], c = G = E[4], u = L = E[5], E.length === 6 ? (h = Math.sqrt(D * D + A * A), p = Math.sqrt(z * z + $ * $), g = D || A ? ns(A, D) * Ei : 0, v = $ || z ? ns($, z) * Ei + g : 0, v && (p *= Math.abs(Math.cos(v * Cs))), r.svg && (c -= w - (w * D + T * $), u -= T - (w * A + T * z))) : (Ce = E[6], Te = E[7], O = E[8], re = E[9], fe = E[10], ge = E[11], c = E[12], u = E[13], d = E[14], R = ns(Ce, fe), y = R * Ei, R && (C = Math.cos(-R), P = Math.sin(-R), B = G * C + O * P, F = L * C + re * P, Z = Ce * C + fe * P, O = G * -P + O * C, re = L * -P + re * C, fe = Ce * -P + fe * C, ge = Te * -P + ge * C, G = B, L = F, Ce = Z), R = ns(-$, fe), b = R * Ei, R && (C = Math.cos(-R), P = Math.sin(-R), B = D * C - O * P, F = A * C - re * P, Z = $ * C - fe * P, ge = z * P + ge * C, D = B, A = F, $ = Z), R = ns(A, D), g = R * Ei, R && (C = Math.cos(R), P = Math.sin(R), B = D * C + A * P, F = G * C + L * P, A = A * C - D * P, L = L * C - G * P, D = B, G = F), y && Math.abs(y) + Math.abs(g) > 359.9 && (y = g = 0, b = 180 - b), h = nt(Math.sqrt(D * D + A * A + $ * $)), p = nt(Math.sqrt(L * L + Ce * Ce)), R = ns(G, L), v = Math.abs(R) > 2e-4 ? R * Ei : 0, m = ge ? 1 / (ge < 0 ? -ge : ge) : 0), r.svg && (B = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !g0(vn(e, Xe)), B && e.setAttribute("transform", B))), Math.abs(v) > 90 && Math.abs(v) < 270 && (s ? (h *= -1, v += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (p *= -1, v += v <= 0 ? 180 : -180)), n = n || r.uncache, r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = u - ((r.yPercent = u && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = d + o, r.scaleX = nt(h), r.scaleY = nt(p), r.rotation = nt(g) + l, r.rotationX = nt(y) + l, r.rotationY = nt(b) + l, r.skewX = v + l, r.skewY = _ + l, r.transformPerspective = m + o, (r.zOrigin = parseFloat(f.split(" ")[2]) || !n && r.zOrigin || 0) && (i[sn] = Ia(f)), r.xOffset = r.yOffset = 0, r.force3D = wn.force3D, r.renderTransform = r.svg ? AE : u0 ? _0 : RE, r.uncache = 0, r
  },
  Ia = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
  },
  Yc = function(e, n, r) {
    var i = $t(n);
    return nt(parseFloat(n) + parseFloat(ci(e, "x", r + "px", i))) + i
  },
  RE = function(e, n) {
    n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, _0(e, n)
  },
  wi = "0deg",
  so = "0px",
  xi = ") ",
  _0 = function(e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      l = r.y,
      a = r.z,
      f = r.rotation,
      c = r.rotationY,
      u = r.rotationX,
      d = r.skewX,
      h = r.skewY,
      p = r.scaleX,
      g = r.scaleY,
      y = r.transformPerspective,
      b = r.force3D,
      v = r.target,
      _ = r.zOrigin,
      m = "",
      w = b === "auto" && e && e !== 1 || b === !0;
    if (_ && (u !== wi || c !== wi)) {
      var T = parseFloat(c) * Cs,
        E = Math.sin(T),
        R = Math.cos(T),
        C;
      T = parseFloat(u) * Cs, C = Math.cos(T), o = Yc(v, o, E * C * -_), l = Yc(v, l, -Math.sin(T) * -_), a = Yc(v, a, R * C * -_ + _)
    }
    y !== so && (m += "perspective(" + y + xi), (i || s) && (m += "translate(" + i + "%, " + s + "%) "), (w || o !== so || l !== so || a !== so) && (m += a !== so || w ? "translate3d(" + o + ", " + l + ", " + a + ") " : "translate(" + o + ", " + l + xi), f !== wi && (m += "rotate(" + f + xi), c !== wi && (m += "rotateY(" + c + xi), u !== wi && (m += "rotateX(" + u + xi), (d !== wi || h !== wi) && (m += "skew(" + d + ", " + h + xi), (p !== 1 || g !== 1) && (m += "scale(" + p + ", " + g + xi), v.style[Xe] = m || "translate(0, 0)"
  },
  AE = function(e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      l = r.y,
      a = r.rotation,
      f = r.skewX,
      c = r.skewY,
      u = r.scaleX,
      d = r.scaleY,
      h = r.target,
      p = r.xOrigin,
      g = r.yOrigin,
      y = r.xOffset,
      b = r.yOffset,
      v = r.forceCSS,
      _ = parseFloat(o),
      m = parseFloat(l),
      w, T, E, R, C;
    a = parseFloat(a), f = parseFloat(f), c = parseFloat(c), c && (c = parseFloat(c), f += c, a += c), a || f ? (a *= Cs, f *= Cs, w = Math.cos(a) * u, T = Math.sin(a) * u, E = Math.sin(a - f) * -d, R = Math.cos(a - f) * d, f && (c *= Cs, C = Math.tan(f - c), C = Math.sqrt(1 + C * C), E *= C, R *= C, c && (C = Math.tan(c), C = Math.sqrt(1 + C * C), w *= C, T *= C)), w = nt(w), T = nt(T), E = nt(E), R = nt(R)) : (w = u, R = d, T = E = 0), (_ && !~(o + "").indexOf("px") || m && !~(l + "").indexOf("px")) && (_ = ci(h, "x", o, "px"), m = ci(h, "y", l, "px")), (p || g || y || b) && (_ = nt(_ + p - (p * w + g * E) + y), m = nt(m + g - (p * T + g * R) + b)), (i || s) && (C = h.getBBox(), _ = nt(_ + i / 100 * C.width), m = nt(m + s / 100 * C.height)), C = "matrix(" + w + "," + T + "," + E + "," + R + "," + _ + "," + m + ")", h.setAttribute("transform", C), v && (h.style[Xe] = C)
  },
  OE = function(e, n, r, i, s) {
    var o = 360,
      l = xt(s),
      a = parseFloat(s) * (l && ~s.indexOf("rad") ? Ei : 1),
      f = a - i,
      c = i + f + "deg",
      u, d;
    return l && (u = s.split("_")[1], u === "short" && (f %= o, f !== f % (o / 2) && (f += f < 0 ? o : -o)), u === "cw" && f < 0 ? f = (f + o * rp) % o - ~~(f / o) * o : u === "ccw" && f > 0 && (f = (f - o * rp) % o - ~~(f / o) * o)), e._pt = d = new rn(e._pt, n, r, i, f, dE), d.e = c, d.u = "deg", e._props.push(r), d
  },
  fp = function(e, n) {
    for (var r in n) e[r] = n[r];
    return e
  },
  ME = function(e, n, r) {
    var i = fp({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      l, a, f, c, u, d, h, p;
    i.svg ? (f = r.getAttribute("transform"), r.setAttribute("transform", ""), o[Xe] = n, l = ol(r, 1), ai(r, Xe), r.setAttribute("transform", f)) : (f = getComputedStyle(r)[Xe], o[Xe] = n, l = ol(r, 1), o[Xe] = f);
    for (a in Fr) f = i[a], c = l[a], f !== c && s.indexOf(a) < 0 && (h = $t(f), p = $t(c), u = h !== p ? ci(r, a, f, p) : parseFloat(f), d = parseFloat(c), e._pt = new rn(e._pt, l, a, u, d - u, qf), e._pt.u = p || 0, e._props.push(a));
    fp(l, i)
  };
nn("padding,margin,Width,Radius", function(t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(l) {
      return e < 2 ? t + l : "border" + l + t
    });
  La[e > 1 ? "border" + t : t] = function(l, a, f, c, u) {
    var d, h;
    if (arguments.length < 4) return d = o.map(function(p) {
      return Er(l, p, f)
    }), h = d.join(" "), h.split(d[0]).length === 5 ? d[0] : h;
    d = (c + "").split(" "), h = {}, o.forEach(function(p, g) {
      return h[p] = d[g] = d[g] || d[(g - 1) / 2 | 0]
    }), l.init(a, h, u)
  }
});
var ph = {
  name: "css",
  register: Qf,
  targetTest: function(e) {
    return e.style && e.nodeType
  },
  init: function(e, n, r, i, s) {
    var o = this._props,
      l = e.style,
      a = r.vars.startAt,
      f, c, u, d, h, p, g, y, b, v, _, m, w, T, E, R, C;
    fh || Qf(), this.styles = this.styles || f0(e), R = this.styles.props, this.tween = r;
    for (g in n)
      if (g !== "autoRound" && (c = n[g], !(cn[g] && Zm(g, n, r, i, e, s)))) {
        if (h = typeof c, p = La[g], h === "function" && (c = c.call(r, i, e, s), h = typeof c), h === "string" && ~c.indexOf("random(") && (c = nl(c)), p) p(this, e, g, c, r) && (E = 1);
        else if (g.substr(0, 2) === "--") f = (getComputedStyle(e).getPropertyValue(g) + "").trim(), c += "", ii.lastIndex = 0, ii.test(f) || (y = $t(f), b = $t(c), b ? y !== b && (f = ci(e, g, f, b) + b) : y && (c += y)), this.add(l, "setProperty", f, c, i, s, 0, 0, g), o.push(g), R.push(g, 0, l[g]);
        else if (h !== "undefined") {
          if (a && g in a ? (f = typeof a[g] == "function" ? a[g].call(r, i, e, s) : a[g], xt(f) && ~f.indexOf("random(") && (f = nl(f)), $t(f + "") || f === "auto" || (f += wn.units[g] || $t(Er(e, g)) || ""), (f + "").charAt(1) === "=" && (f = Er(e, g))) : f = Er(e, g), d = parseFloat(f), v = h === "string" && c.charAt(1) === "=" && c.substr(0, 2), v && (c = c.substr(2)), u = parseFloat(c), g in lr && (g === "autoAlpha" && (d === 1 && Er(e, "visibility") === "hidden" && u && (d = 0), R.push("visibility", 0, l.visibility), Jr(this, l, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), g !== "scale" && g !== "transform" && (g = lr[g], ~g.indexOf(",") && (g = g.split(",")[0]))), _ = g in Fr, _) {
            if (this.styles.save(g), C = c, h === "string" && c.substring(0, 6) === "var(--") {
              if (c = vn(e, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var P = e.style.perspective;
                e.style.perspective = c, c = vn(e, "perspective"), P ? e.style.perspective = P : ai(e, "perspective")
              }
              u = parseFloat(c)
            }
            if (m || (w = e._gsap, w.renderTransform && !n.parseTransform || ol(e, n.parseTransform), T = n.smoothOrigin !== !1 && w.smooth, m = this._pt = new rn(this._pt, l, Xe, 0, 1, w.renderTransform, w, 0, -1), m.dep = 1), g === "scale") this._pt = new rn(this._pt, w, "scaleY", w.scaleY, (v ? Ss(w.scaleY, v + u) : u) - w.scaleY || 0, qf), this._pt.u = 0, o.push("scaleY", g), g += "X";
            else if (g === "transformOrigin") {
              R.push(sn, 0, l[sn]), c = kE(c), w.svg ? Zf(e, c, 0, T, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== w.zOrigin && Jr(this, w, "zOrigin", w.zOrigin, b), Jr(this, l, g, Ia(f), Ia(c)));
              continue
            } else if (g === "svgOrigin") {
              Zf(e, c, 1, T, 0, this);
              continue
            } else if (g in p0) {
              OE(this, w, g, d, v ? Ss(d, v + c) : c);
              continue
            } else if (g === "smoothOrigin") {
              Jr(this, w, "smooth", w.smooth, c);
              continue
            } else if (g === "force3D") {
              w[g] = c;
              continue
            } else if (g === "transform") {
              ME(this, c, e);
              continue
            }
          } else g in l || (g = Vs(g) || g);
          if (_ || (u || u === 0) && (d || d === 0) && !hE.test(c) && g in l) y = (f + "").substr((d + "").length), u || (u = 0), b = $t(c) || (g in wn.units ? wn.units[g] : y), y !== b && (d = ci(e, g, f, b)), this._pt = new rn(this._pt, _ ? w : l, g, d, (v ? Ss(d, v + u) : u) - d, !_ && (b === "px" || g === "zIndex") && n.autoRound !== !1 ? _E : qf), this._pt.u = b || 0, _ && C !== c ? (this._pt.b = f, this._pt.e = C, this._pt.r = gE) : y !== b && b !== "%" && (this._pt.b = f, this._pt.r = pE);
          else if (g in l) CE.call(this, e, g, f, v ? v + c : c);
          else if (g in e) this.add(e, g, f || e[g], v ? v + c : c, i, s);
          else if (g !== "parseTransform") {
            eh(g, c);
            continue
          }
          _ || (g in l ? R.push(g, 0, l[g]) : typeof e[g] == "function" ? R.push(g, 2, e[g]()) : R.push(g, 1, f || e[g])), o.push(g)
        }
      } E && s0(this)
  },
  render: function(e, n) {
    if (n.tween._time || !uh())
      for (var r = n._pt; r;) r.r(e, r.d), r = r._next;
    else n.styles.revert()
  },
  get: Er,
  aliases: lr,
  getSetter: function(e, n, r) {
    var i = lr[n];
    return i && i.indexOf(",") < 0 && (n = i), n in Fr && n !== sn && (e._gsap.x || Er(e, "x")) ? r && np === r ? n === "scale" ? bE : vE : (np = r || {}) && (n === "scale" ? wE : xE) : e.style && !Ju(e.style[n]) ? mE : ~n.indexOf("-") ? yE : ah(e, n)
  },
  core: {
    _removeProperty: ai,
    _getMatrix: dh
  }
};
Ht.utils.checkPrefix = Vs;
Ht.core.getStyleSaver = f0;
(function(t, e, n, r) {
  var i = nn(t + "," + e + "," + n, function(s) {
    Fr[s] = 1
  });
  nn(e, function(s) {
    wn.units[s] = "deg", p0[s] = 1
  }), lr[i[13]] = t + "," + e, nn(r, function(s) {
    var o = s.split(":");
    lr[o[1]] = i[o[0]]
  })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  wn.units[t] = "px"
});
Ht.registerPlugin(ph);
var eu = Ht.registerPlugin(ph) || Ht;
eu.core.Tween;
var NE = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  $E = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  DE = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
  LE = /(^[#\.][a-z]|[a-y][a-z])/i,
  IE = Math.PI / 180,
  HE = 180 / Math.PI,
  Ll = Math.sin,
  Il = Math.cos,
  Nn = Math.abs,
  Pr = Math.sqrt,
  FE = Math.atan2,
  tu = 1e8,
  up = function(e) {
    return typeof e == "string"
  },
  m0 = function(e) {
    return typeof e == "number"
  },
  BE = function(e) {
    return typeof e > "u"
  },
  UE = {},
  jE = {},
  Ha = 1e5,
  y0 = function(e) {
    return Math.round((e + tu) % 1 * Ha) / Ha || (e < 0 ? 0 : 1)
  },
  Oe = function(e) {
    return Math.round(e * Ha) / Ha || 0
  },
  hp = function(e) {
    return Math.round(e * 1e10) / 1e10 || 0
  },
  dp = function(e) {
    return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001
  },
  pp = function(e, n, r, i) {
    var s = e[n],
      o = i === 1 ? 6 : nu(s, r, i);
    if ((o || !i) && o + r + 2 < s.length) return e.splice(n, 0, s.slice(0, r + o + 2)), s.splice(0, r + o), 1
  },
  v0 = function(e, n, r) {
    var i = e.length,
      s = ~~(r * i);
    if (e[s] > n) {
      for (; --s && e[s] > n;);
      s < 0 && (s = 0)
    } else
      for (; e[++s] < n && s < i;);
    return s < i ? s : i - 1
  },
  WE = function(e, n) {
    var r = e.length;
    for (e.reverse(); r--;) e[r].reversed || GE(e[r])
  },
  gp = function(e, n) {
    return n.totalLength = e.totalLength, e.samples ? (n.samples = e.samples.slice(0), n.lookup = e.lookup.slice(0), n.minLength = e.minLength, n.resolution = e.resolution) : e.totalPoints && (n.totalPoints = e.totalPoints), n
  },
  zE = function(e, n) {
    var r = e.length,
      i = e[r - 1] || [],
      s = i.length;
    r && n[0] === i[s - 2] && n[1] === i[s - 1] && (n = i.concat(n.slice(2)), r--), e[r] = n
  };

function oa(t) {
  t = up(t) && LE.test(t) && document.querySelector(t) || t;
  var e = t.getAttribute ? t : 0,
    n;
  return e && (t = t.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), n = e._gsPath[t], n && !n._dirty ? n : e._gsPath[t] = ll(t)) : t ? up(t) ? ll(t) : m0(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
}

function VE(t) {
  for (var e = [], n = 0; n < t.length; n++) e[n] = gp(t[n], t[n].slice(0));
  return gp(t, e)
}

function GE(t) {
  var e = 0,
    n;
  for (t.reverse(); e < t.length; e += 2) n = t[e], t[e] = t[e + 1], t[e + 1] = n;
  t.reversed = !t.reversed
}
var YE = function(e, n) {
    var r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      i = [].slice.call(e.attributes),
      s = i.length,
      o;
    for (n = "," + n + ","; --s > -1;) o = i[s].nodeName.toLowerCase(), n.indexOf("," + o + ",") < 0 && r.setAttributeNS(null, o, i[s].nodeValue);
    return r
  },
  XE = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  },
  KE = function(e, n) {
    for (var r = n ? n.split(",") : [], i = {}, s = r.length; --s > -1;) i[r[s]] = +e.getAttribute(r[s]) || 0;
    return i
  };

function qE(t, e) {
  var n = t.tagName.toLowerCase(),
    r = .552284749831,
    i, s, o, l, a, f, c, u, d, h, p, g, y, b, v, _, m, w, T, E, R, C;
  return n === "path" || !t.getBBox ? t : (f = YE(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), C = KE(t, XE[n]), n === "rect" ? (l = C.rx, a = C.ry || l, s = C.x, o = C.y, h = C.width - l * 2, p = C.height - a * 2, l || a ? (g = s + l * (1 - r), y = s + l, b = y + h, v = b + l * r, _ = b + l, m = o + a * (1 - r), w = o + a, T = w + p, E = T + a * r, R = T + a, i = "M" + _ + "," + w + " V" + T + " C" + [_, E, v, R, b, R, b - (b - y) / 3, R, y + (b - y) / 3, R, y, R, g, R, s, E, s, T, s, T - (T - w) / 3, s, w + (T - w) / 3, s, w, s, m, g, o, y, o, y + (b - y) / 3, o, b - (b - y) / 3, o, b, o, v, o, _, m, _, w].join(",") + "z") : i = "M" + (s + h) + "," + o + " v" + p + " h" + -h + " v" + -p + " h" + h + "z") : n === "circle" || n === "ellipse" ? (n === "circle" ? (l = a = C.r, u = l * r) : (l = C.rx, a = C.ry, u = a * r), s = C.cx, o = C.cy, c = l * r, i = "M" + (s + l) + "," + o + " C" + [s + l, o + u, s + c, o + a, s, o + a, s - c, o + a, s - l, o + u, s - l, o, s - l, o - u, s - c, o - a, s, o - a, s + c, o - a, s + l, o - u, s + l, o].join(",") + "z") : n === "line" ? i = "M" + C.x1 + "," + C.y1 + " L" + C.x2 + "," + C.y2 : (n === "polyline" || n === "polygon") && (d = (t.getAttribute("points") + "").match($E) || [], s = d.shift(), o = d.shift(), i = "M" + s + "," + o + " L" + d.join(","), n === "polygon" && (i += "," + s + "," + o + "z")), f.setAttribute("d", gh(f._gsRawPath = ll(i))), e && t.parentNode && (t.parentNode.insertBefore(f, t), t.parentNode.removeChild(t)), f)
}

function b0(t, e, n) {
  var r = t[e],
    i = t[e + 2],
    s = t[e + 4],
    o;
  return r += (i - r) * n, i += (s - i) * n, r += (i - r) * n, o = i + (s + (t[e + 6] - s) * n - i) * n - r, r = t[e + 1], i = t[e + 3], s = t[e + 5], r += (i - r) * n, i += (s - i) * n, r += (i - r) * n, Oe(FE(i + (s + (t[e + 7] - s) * n - i) * n - r, o) * HE)
}

function w0(t, e, n) {
  n = BE(n) ? 1 : hp(n) || 0, e = hp(e) || 0;
  var r = Math.max(0, ~~(Nn(n - e) - 1e-8)),
    i = VE(t);
  if (e > n && (e = 1 - e, n = 1 - n, WE(i), i.totalLength = 0), e < 0 || n < 0) {
    var s = Math.abs(~~Math.min(e, n)) + 1;
    e += s, n += s
  }
  i.totalLength || ji(i);
  var o = n > 1,
    l = _p(i, e, UE, !0),
    a = _p(i, n, jE),
    f = a.segment,
    c = l.segment,
    u = a.segIndex,
    d = l.segIndex,
    h = a.i,
    p = l.i,
    g = d === u,
    y = h === p && g,
    b, v, _, m, w, T, E, R;
  if (o || r) {
    for (b = u < d || g && h < p || y && a.t < l.t, pp(i, d, p, l.t) && (d++, b || (u++, y ? (a.t = (a.t - l.t) / (1 - l.t), h = 0) : g && (h -= p))), Math.abs(1 - (n - e)) < 1e-5 ? u = d - 1 : !a.t && u ? u-- : pp(i, u, h, a.t) && b && d++, l.t === 1 && (d = (d + 1) % i.length), w = [], T = i.length, E = 1 + T * r, R = d, E += (T - d + u) % T, m = 0; m < E; m++) zE(w, i[R++ % T]);
    i = w
  } else if (_ = a.t === 1 ? 6 : nu(f, h, a.t), e !== n)
    for (v = nu(c, p, y ? l.t / a.t : l.t), g && (_ += v), f.splice(h + _ + 2), (v || p) && c.splice(0, p + v), m = i.length; m--;)(m < d || m > u) && i.splice(m, 1);
  else f.angle = b0(f, h + _, 0), h += _, l = f[h], a = f[h + 1], f.length = f.totalLength = 0, f.totalPoints = i.totalPoints = 8, f.push(l, a, l, a, l, a, l, a);
  return i.totalLength = 0, i
}

function JE(t, e, n) {
  e = e || 0, t.samples || (t.samples = [], t.lookup = []);
  var r = ~~t.resolution || 12,
    i = 1 / r,
    s = t.length,
    o = t[e],
    l = t[e + 1],
    a = e ? e / 6 * r : 0,
    f = t.samples,
    c = t.lookup,
    u = (e ? t.minLength : tu) || tu,
    d = f[a + n * r - 1],
    h = e ? f[a - 1] : 0,
    p, g, y, b, v, _, m, w, T, E, R, C, P, D, A, $, z;
  for (f.length = c.length = 0, g = e + 2; g < s; g += 6) {
    if (y = t[g + 4] - o, b = t[g + 2] - o, v = t[g] - o, w = t[g + 5] - l, T = t[g + 3] - l, E = t[g + 1] - l, _ = m = R = C = 0, Nn(y) < .01 && Nn(w) < .01 && Nn(v) + Nn(E) < .01) t.length > 8 && (t.splice(g, 6), g -= 6, s -= 6);
    else
      for (p = 1; p <= r; p++) D = i * p, P = 1 - D, _ = m - (m = (D * D * y + 3 * P * (D * b + P * v)) * D), R = C - (C = (D * D * w + 3 * P * (D * T + P * E)) * D), $ = Pr(R * R + _ * _), $ < u && (u = $), h += $, f[a++] = h;
    o += y, l += w
  }
  if (d)
    for (d -= h; a < f.length; a++) f[a] += d;
  if (f.length && u) {
    if (t.totalLength = z = f[f.length - 1] || 0, t.minLength = u, z / u < 9999)
      for ($ = A = 0, p = 0; p < z; p += u) c[$++] = f[A] < p ? ++A : A
  } else t.totalLength = f[0] = 0;
  return e ? h - f[e / 2 - 1] : h
}

function ji(t, e) {
  var n, r, i;
  for (i = n = r = 0; i < t.length; i++) t[i].resolution = ~~e || 12, n += JE(t[i]), r += t[i].length;
  return t.totalPoints = r, t.totalLength = n, t
}

function nu(t, e, n) {
  if (n <= 0 || n >= 1) return 0;
  var r = t[e],
    i = t[e + 1],
    s = t[e + 2],
    o = t[e + 3],
    l = t[e + 4],
    a = t[e + 5],
    f = t[e + 6],
    c = t[e + 7],
    u = r + (s - r) * n,
    d = s + (l - s) * n,
    h = i + (o - i) * n,
    p = o + (a - o) * n,
    g = u + (d - u) * n,
    y = h + (p - h) * n,
    b = l + (f - l) * n,
    v = a + (c - a) * n;
  return d += (b - d) * n, p += (v - p) * n, t.splice(e + 2, 4, Oe(u), Oe(h), Oe(g), Oe(y), Oe(g + (d - g) * n), Oe(y + (p - y) * n), Oe(d), Oe(p), Oe(b), Oe(v)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
}

function _p(t, e, n, r) {
  n = n || {}, t.totalLength || ji(t), (e < 0 || e > 1) && (e = y0(e));
  var i = 0,
    s = t[0],
    o, l, a, f, c, u, d;
  if (!e) d = u = i = 0, s = t[0];
  else if (e === 1) d = 1, i = t.length - 1, s = t[i], u = s.length - 8;
  else {
    if (t.length > 1) {
      for (a = t.totalLength * e, c = u = 0;
        (c += t[u++].totalLength) < a;) i = u;
      s = t[i], f = c - s.totalLength, e = (a - f) / (c - f) || 0
    }
    o = s.samples, l = s.resolution, a = s.totalLength * e, u = s.lookup.length ? s.lookup[~~(a / s.minLength)] || 0 : v0(o, a, e), f = u ? o[u - 1] : 0, c = o[u], c < a && (f = c, c = o[++u]), d = 1 / l * ((a - f) / (c - f) + u % l), u = ~~(u / l) * 6, r && d === 1 && (u + 6 < s.length ? (u += 6, d = 0) : i + 1 < t.length && (u = d = 0, s = t[++i]))
  }
  return n.t = d, n.i = u, n.path = t, n.segment = s, n.segIndex = i, n
}

function mp(t, e, n, r) {
  var i = t[0],
    s = r || {},
    o, l, a, f, c, u, d, h, p;
  if ((e < 0 || e > 1) && (e = y0(e)), i.lookup || ji(t), t.length > 1) {
    for (a = t.totalLength * e, c = u = 0;
      (c += t[u++].totalLength) < a;) i = t[u];
    f = c - i.totalLength, e = (a - f) / (c - f) || 0
  }
  return o = i.samples, l = i.resolution, a = i.totalLength * e, u = i.lookup.length ? i.lookup[e < 1 ? ~~(a / i.minLength) : i.lookup.length - 1] || 0 : v0(o, a, e), f = u ? o[u - 1] : 0, c = o[u], c < a && (f = c, c = o[++u]), d = 1 / l * ((a - f) / (c - f) + u % l) || 0, p = 1 - d, u = ~~(u / l) * 6, h = i[u], s.x = Oe((d * d * (i[u + 6] - h) + 3 * p * (d * (i[u + 4] - h) + p * (i[u + 2] - h))) * d + h), s.y = Oe((d * d * (i[u + 7] - (h = i[u + 1])) + 3 * p * (d * (i[u + 5] - h) + p * (i[u + 3] - h))) * d + h), n && (s.angle = i.totalLength ? b0(i, u, d >= 1 ? 1 - 1e-9 : d || 1e-9) : i.angle || 0), s
}

function gs(t, e, n, r, i, s, o) {
  for (var l = t.length, a, f, c, u, d; --l > -1;)
    for (a = t[l], f = a.length, c = 0; c < f; c += 2) u = a[c], d = a[c + 1], a[c] = u * e + d * r + s, a[c + 1] = u * n + d * i + o;
  return t._dirty = 1, t
}

function QE(t, e, n, r, i, s, o, l, a) {
  if (!(t === l && e === a)) {
    n = Nn(n), r = Nn(r);
    var f = i % 360 * IE,
      c = Il(f),
      u = Ll(f),
      d = Math.PI,
      h = d * 2,
      p = (t - l) / 2,
      g = (e - a) / 2,
      y = c * p + u * g,
      b = -u * p + c * g,
      v = y * y,
      _ = b * b,
      m = v / (n * n) + _ / (r * r);
    m > 1 && (n = Pr(m) * n, r = Pr(m) * r);
    var w = n * n,
      T = r * r,
      E = (w * T - w * _ - T * v) / (w * _ + T * v);
    E < 0 && (E = 0);
    var R = (s === o ? -1 : 1) * Pr(E),
      C = R * (n * b / r),
      P = R * -(r * y / n),
      D = (t + l) / 2,
      A = (e + a) / 2,
      $ = D + (c * C - u * P),
      z = A + (u * C + c * P),
      G = (y - C) / n,
      L = (b - P) / r,
      B = (-y - C) / n,
      F = (-b - P) / r,
      Z = G * G + L * L,
      O = (L < 0 ? -1 : 1) * Math.acos(G / Pr(Z)),
      re = (G * F - L * B < 0 ? -1 : 1) * Math.acos((G * B + L * F) / Pr(Z * (B * B + F * F)));
    isNaN(re) && (re = d), !o && re > 0 ? re -= h : o && re < 0 && (re += h), O %= h, re %= h;
    var fe = Math.ceil(Nn(re) / (h / 4)),
      Te = [],
      ge = re / fe,
      Ce = 4 / 3 * Ll(ge / 2) / (1 + Il(ge / 2)),
      Re = c * n,
      N = u * n,
      X = u * -r,
      W = c * r,
      K;
    for (K = 0; K < fe; K++) i = O + K * ge, y = Il(i), b = Ll(i), G = Il(i += ge), L = Ll(i), Te.push(y - Ce * b, b + Ce * y, G + Ce * L, L - Ce * G, G, L);
    for (K = 0; K < Te.length; K += 2) y = Te[K], b = Te[K + 1], Te[K] = y * Re + b * X + $, Te[K + 1] = y * N + b * W + z;
    return Te[K - 2] = l, Te[K - 1] = a, Te
  }
}

function ll(t) {
  var e = (t + "").replace(DE, function(C) {
      var P = +C;
      return P < 1e-4 && P > -1e-4 ? 0 : P
    }).match(NE) || [],
    n = [],
    r = 0,
    i = 0,
    s = 2 / 3,
    o = e.length,
    l = 0,
    a = "ERROR: malformed path: " + t,
    f, c, u, d, h, p, g, y, b, v, _, m, w, T, E, R = function(P, D, A, $) {
      v = (A - P) / 3, _ = ($ - D) / 3, g.push(P + v, D + _, A - v, $ - _, A, $)
    };
  if (!t || !isNaN(e[0]) || isNaN(e[1])) return console.log(a), n;
  for (f = 0; f < o; f++)
    if (w = h, isNaN(e[f]) ? (h = e[f].toUpperCase(), p = h !== e[f]) : f--, u = +e[f + 1], d = +e[f + 2], p && (u += r, d += i), f || (y = u, b = d), h === "M") g && (g.length < 8 ? n.length -= 1 : l += g.length, dp(g)), r = y = u, i = b = d, g = [u, d], n.push(g), f += 2, h = "L";
    else if (h === "C") g || (g = [0, 0]), p || (r = i = 0), g.push(u, d, r + e[f + 3] * 1, i + e[f + 4] * 1, r += e[f + 5] * 1, i += e[f + 6] * 1), f += 6;
  else if (h === "S") v = r, _ = i, (w === "C" || w === "S") && (v += r - g[g.length - 4], _ += i - g[g.length - 3]), p || (r = i = 0), g.push(v, _, u, d, r += e[f + 3] * 1, i += e[f + 4] * 1), f += 4;
  else if (h === "Q") v = r + (u - r) * s, _ = i + (d - i) * s, p || (r = i = 0), r += e[f + 3] * 1, i += e[f + 4] * 1, g.push(v, _, r + (u - r) * s, i + (d - i) * s, r, i), f += 4;
  else if (h === "T") v = r - g[g.length - 4], _ = i - g[g.length - 3], g.push(r + v, i + _, u + (r + v * 1.5 - u) * s, d + (i + _ * 1.5 - d) * s, r = u, i = d), f += 2;
  else if (h === "H") R(r, i, r = u, i), f += 1;
  else if (h === "V") R(r, i, r, i = u + (p ? i - r : 0)), f += 1;
  else if (h === "L" || h === "Z") h === "Z" && (u = y, d = b, g.closed = !0), (h === "L" || Nn(r - u) > .5 || Nn(i - d) > .5) && (R(r, i, u, d), h === "L" && (f += 2)), r = u, i = d;
  else if (h === "A") {
    if (T = e[f + 4], E = e[f + 5], v = e[f + 6], _ = e[f + 7], c = 7, T.length > 1 && (T.length < 3 ? (_ = v, v = E, c--) : (_ = E, v = T.substr(2), c -= 2), E = T.charAt(1), T = T.charAt(0)), m = QE(r, i, +e[f + 1], +e[f + 2], +e[f + 3], +T, +E, (p ? r : 0) + v * 1, (p ? i : 0) + _ * 1), f += c, m)
      for (c = 0; c < m.length; c++) g.push(m[c]);
    r = g[g.length - 2], i = g[g.length - 1]
  } else console.log(a);
  return f = g.length, f < 6 ? (n.pop(), f = 0) : dp(g), n.totalPoints = l + f, n
}

function ZE(t, e) {
  e === void 0 && (e = 1);
  for (var n = t[0], r = 0, i = [n, r], s = 2; s < t.length; s += 2) i.push(n, r, t[s], r = (t[s] - n) * e / 2, n = t[s], -r);
  return i
}

function ru(t, e) {
  Nn(t[0] - t[2]) < 1e-4 && Nn(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
  var n = t.length - 2,
    r = +t[0],
    i = +t[1],
    s = +t[2],
    o = +t[3],
    l = [r, i, r, i],
    a = s - r,
    f = o - i,
    c = t.nonSmooth || [],
    u = Math.abs(t[n] - r) < .001 && Math.abs(t[n + 1] - i) < .001,
    d, h, p, g, y, b, v, _, m, w, T, E, R, C, P;
  if (!n) return [r, i, r, i, r, i, r, i];
  for (u && (t.push(s, o), s = r, o = i, r = t[n - 2], i = t[n - 1], t.unshift(r, i), n += 4, c = [0, 0].concat(c)), e = e || e === 0 ? +e : 1, p = 2; p < n; p += 2)
    if (d = r, h = i, r = s, i = o, s = +t[p + 2], o = +t[p + 3], !(r === s && i === o)) {
      if (g = a, y = f, a = s - r, f = o - i, c[p]) {
        l.push(r - (r - d) / 4, i - (i - h) / 4, r, i, r + (s - r) / 4, i + (o - i) / 4);
        continue
      }
      b = Pr(g * g + y * y), v = Pr(a * a + f * f), _ = Pr(Math.pow(a / v + g / b, 2) + Math.pow(f / v + y / b, 2)), m = (b + v) * e * .25 / _, w = r - (r - d) * (b ? m / b : 0), T = r + (s - r) * (v ? m / v : 0), E = r - (w + ((T - w) * (b * 3 / (b + v) + .5) / 4 || 0)), R = i - (i - h) * (b ? m / b : 0), C = i + (o - i) * (v ? m / v : 0), P = i - (R + ((C - R) * (b * 3 / (b + v) + .5) / 4 || 0)), l.push(Oe(w + E), Oe(R + P), Oe(r), Oe(i), Oe(T + E), Oe(C + P))
    } return r !== s || i !== o || l.length < 4 ? l.push(Oe(s), Oe(o), Oe(s), Oe(o)) : l.length -= 2, l.length === 2 ? l.push(r, i, r, i, r, i) : u && (l.splice(0, 6), l.length -= 6), l.closed = u, l
}

function gh(t) {
  m0(t[0]) && (t = [t]);
  var e = "",
    n = t.length,
    r, i, s, o;
  for (i = 0; i < n; i++) {
    for (o = t[i], e += "M" + Oe(o[0]) + "," + Oe(o[1]) + " C", r = o.length, s = 2; s < r; s++) e += Oe(o[s++]) + "," + Oe(o[s++]) + " " + Oe(o[s++]) + "," + Oe(o[s++]) + " " + Oe(o[s++]) + "," + Oe(o[s]) + " ";
    o.closed && (e += "z")
  }
  return e
}
var Zt, x0, T0 = function() {
    return Zt || typeof window < "u" && (Zt = window.gsap) && Zt.registerPlugin && Zt
  },
  yp = function() {
    Zt = T0(), Zt ? (Zt.registerEase("_CE", wl.create), x0 = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
  },
  eC = 1e20,
  Hl = function(e) {
    return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
  },
  tC = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  nC = /[cLlsSaAhHvVtTqQ]/g,
  rC = function(e) {
    var n = e.length,
      r = eC,
      i;
    for (i = 1; i < n; i += 6) + e[i] < r && (r = +e[i]);
    return r
  },
  iC = function(e, n, r) {
    !r && r !== 0 && (r = Math.max(+e[e.length - 1], +e[1]));
    var i = +e[0] * -1,
      s = -r,
      o = e.length,
      l = 1 / (+e[o - 2] + i),
      a = -n || (Math.abs(+e[o - 1] - +e[1]) < .01 * (+e[o - 2] - +e[0]) ? rC(e) + s : +e[o - 1] + s),
      f;
    for (a ? a = 1 / a : a = -l, f = 0; f < o; f += 2) e[f] = (+e[f] + i) * l, e[f + 1] = (+e[f + 1] + s) * a
  },
  sC = function t(e, n, r, i, s, o, l, a, f, c, u) {
    var d = (e + r) / 2,
      h = (n + i) / 2,
      p = (r + s) / 2,
      g = (i + o) / 2,
      y = (s + l) / 2,
      b = (o + a) / 2,
      v = (d + p) / 2,
      _ = (h + g) / 2,
      m = (p + y) / 2,
      w = (g + b) / 2,
      T = (v + m) / 2,
      E = (_ + w) / 2,
      R = l - e,
      C = a - n,
      P = Math.abs((r - l) * C - (i - a) * R),
      D = Math.abs((s - l) * C - (o - a) * R),
      A;
    return c || (c = [{
      x: e,
      y: n
    }, {
      x: l,
      y: a
    }], u = 1), c.splice(u || c.length - 1, 0, {
      x: T,
      y: E
    }), (P + D) * (P + D) > f * (R * R + C * C) && (A = c.length, t(e, n, d, h, v, _, T, E, f, c, u), t(T, E, m, w, y, b, l, a, f, c, u + 1 + (c.length - A))), c
  },
  wl = (function() {
    function t(n, r, i) {
      x0 || yp(), this.id = n, this.setData(r, i)
    }
    var e = t.prototype;
    return e.setData = function(r, i) {
      i = i || {}, r = r || "0,0,1,1";
      var s = r.match(tC),
        o = 1,
        l = [],
        a = [],
        f = i.precision || 1,
        c = f <= 1,
        u, d, h, p, g, y, b, v, _;
      if (this.data = r, (nC.test(r) || ~r.indexOf("M") && r.indexOf("C") < 0) && (s = ll(r)[0]), u = s.length, u === 4) s.unshift(0, 0), s.push(1, 1), u = 8;
      else if ((u - 2) % 6) throw "Invalid CustomEase";
      for ((+s[0] != 0 || +s[u - 2] != 1) && iC(s, i.height, i.originY), this.segment = s, p = 2; p < u; p += 6) d = {
        x: +s[p - 2],
        y: +s[p - 1]
      }, h = {
        x: +s[p + 4],
        y: +s[p + 5]
      }, l.push(d, h), sC(d.x, d.y, +s[p], +s[p + 1], +s[p + 2], +s[p + 3], h.x, h.y, 1 / (f * 2e5), l, l.length - 1);
      for (u = l.length, p = 0; p < u; p++) b = l[p], v = l[p - 1] || b, (b.x > v.x || v.y !== b.y && v.x === b.x || b === v) && b.x <= 1 ? (v.cx = b.x - v.x, v.cy = b.y - v.y, v.n = b, v.nx = b.x, c && p > 1 && Math.abs(v.cy / v.cx - l[p - 2].cy / l[p - 2].cx) > 2 && (c = 0), v.cx < o && (v.cx ? o = v.cx : (v.cx = .001, p === u - 1 && (v.x -= .001, o = Math.min(o, .001), c = 0)))) : (l.splice(p--, 1), u--);
      if (u = 1 / o + 1 | 0, g = 1 / u, y = 0, b = l[0], c) {
        for (p = 0; p < u; p++) _ = p * g, b.nx < _ && (b = l[++y]), d = b.y + (_ - b.x) / b.cx * b.cy, a[p] = {
          x: _,
          cx: g,
          y: d,
          cy: 0,
          nx: 9
        }, p && (a[p - 1].cy = d - a[p - 1].y);
        y = l[l.length - 1], a[u - 1].cy = y.y - d, a[u - 1].cx = y.x - a[a.length - 1].x
      } else {
        for (p = 0; p < u; p++) b.nx < p * g && (b = l[++y]), a[p] = b;
        y < l.length - 1 && (a[p - 1] = l[l.length - 2])
      }
      return this.ease = function(m) {
        var w = a[m * u | 0] || a[u - 1];
        return w.nx < m && (w = w.n), w.y + (m - w.x) / w.cx * w.cy
      }, this.ease.custom = this, this.id && Zt && Zt.registerEase(this.id, this.ease), this
    }, e.getSVGData = function(r) {
      return t.getSVGData(this, r)
    }, t.create = function(r, i, s) {
      return new t(r, i, s).ease
    }, t.register = function(r) {
      Zt = r, yp()
    }, t.get = function(r) {
      return Zt.parseEase(r)
    }, t.getSVGData = function(r, i) {
      i = i || {};
      var s = i.width || 100,
        o = i.height || 100,
        l = i.x || 0,
        a = (i.y || 0) + o,
        f = Zt.utils.toArray(i.path)[0],
        c, u, d, h, p, g, y, b, v, _;
      if (i.invert && (o = -o, a = 0), typeof r == "string" && (r = Zt.parseEase(r)), r.custom && (r = r.custom), r instanceof t) c = gh(gs([r.segment.slice(0)], s, 0, 0, -o, l, a));
      else {
        for (c = [l, a], y = Math.max(5, (i.precision || 1) * 200), h = 1 / y, y += 2, b = 5 / y, v = Hl(l + h * s), _ = Hl(a + r(h) * -o), u = (_ - a) / (v - l), d = 2; d < y; d++) p = Hl(l + d * h * s), g = Hl(a + r(d * h) * -o), (Math.abs((g - _) / (p - v) - u) > b || d === y - 1) && (c.push(v, _), u = (g - _) / (p - v)), v = p, _ = g;
        c = "M" + c.join(",")
      }
      return f && f.setAttribute("d", c), c
    }, t
  })();
wl.version = "3.14.2";
wl.headless = !0;
T0() && Zt.registerPlugin(wl);
var Or, Wi, _h, dc, go, la, Fa, $o, Vn = "transform",
  iu = Vn + "Origin",
  S0, E0 = function(e) {
    var n = e.ownerDocument || e;
    for (!(Vn in e.style) && ("msTransform" in e.style) && (Vn = "msTransform", iu = Vn + "Origin"); n.parentNode && (n = n.parentNode););
    if (Wi = window, Fa = new al, n) {
      Or = n, _h = n.documentElement, dc = n.body, $o = Or.createElementNS("http://www.w3.org/2000/svg", "g"), $o.style.transform = "none";
      var r = n.createElement("div"),
        i = n.createElement("div"),
        s = n && (n.body || n.firstElementChild);
      s && s.appendChild && (s.appendChild(r), r.appendChild(i), r.style.position = "static", r.style.transform = "translate3d(0,0,1px)", S0 = i.offsetParent !== r, s.removeChild(r))
    }
    return n
  },
  oC = function(e) {
    for (var n, r; e && e !== dc;) r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), n ? n.push(r) : n = [r]), e = e.parentNode;
    return n
  },
  C0 = [],
  k0 = [],
  lC = function() {
    return Wi.pageYOffset || Or.scrollTop || _h.scrollTop || dc.scrollTop || 0
  },
  aC = function() {
    return Wi.pageXOffset || Or.scrollLeft || _h.scrollLeft || dc.scrollLeft || 0
  },
  mh = function(e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
  },
  cC = function t(e) {
    if (Wi.getComputedStyle(e).position === "fixed") return !0;
    if (e = e.parentNode, e && e.nodeType === 1) return t(e)
  },
  Xc = function t(e, n) {
    if (e.parentNode && (Or || E0(e))) {
      var r = mh(e),
        i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
        s = r ? n ? "rect" : "g" : "div",
        o = n !== 2 ? 0 : 100,
        l = n === 3 ? 100 : 0,
        a = {
          position: "absolute",
          display: "block",
          pointerEvents: "none",
          margin: "0",
          padding: "0"
        },
        f = Or.createElementNS ? Or.createElementNS(i.replace(/^https/, "http"), s) : Or.createElement(s);
      return n && (r ? (la || (la = t(e)), f.setAttribute("width", .01), f.setAttribute("height", .01), f.setAttribute("transform", "translate(" + o + "," + l + ")"), f.setAttribute("fill", "transparent"), la.appendChild(f)) : (go || (go = t(e), Object.assign(go.style, a)), Object.assign(f.style, a, {
        width: "0.1px",
        height: "0.1px",
        top: l + "px",
        left: o + "px"
      }), go.appendChild(f))), f
    }
    throw "Need document and parent."
  },
  fC = function(e) {
    for (var n = new al, r = 0; r < e.numberOfItems; r++) n.multiply(e.getItem(r).matrix);
    return n
  },
  uC = function(e) {
    var n = e.getCTM(),
      r;
    return n || (r = e.style[Vn], e.style[Vn] = "none", e.appendChild($o), n = $o.getCTM(), e.removeChild($o), r ? e.style[Vn] = r : e.style.removeProperty(Vn.replace(/([A-Z])/g, "-$1").toLowerCase())), n || Fa.clone()
  },
  hC = function(e, n) {
    var r = mh(e),
      i = e === r,
      s = r ? C0 : k0,
      o = e.parentNode,
      l = o && !r && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o,
      a, f, c, u, d, h;
    if (e === Wi) return e;
    if (s.length || s.push(Xc(e, 1), Xc(e, 2), Xc(e, 3)), a = r ? la : go, r) i ? (c = uC(e), u = -c.e / c.a, d = -c.f / c.d, f = Fa) : e.getBBox ? (c = e.getBBox(), f = e.transform ? e.transform.baseVal : {}, f = f.numberOfItems ? f.numberOfItems > 1 ? fC(f) : f.getItem(0).matrix : Fa, u = f.a * c.x + f.c * c.y, d = f.b * c.x + f.d * c.y) : (f = new al, u = d = 0), n && e.tagName.toLowerCase() === "g" && (u = d = 0), (i || !e.getBoundingClientRect().width ? r : o).appendChild(a), a.setAttribute("transform", "matrix(" + f.a + "," + f.b + "," + f.c + "," + f.d + "," + (f.e + u) + "," + (f.f + d) + ")");
    else {
      if (u = d = 0, S0)
        for (f = e.offsetParent, c = e; c && (c = c.parentNode) && c !== f && c.parentNode;)(Wi.getComputedStyle(c)[Vn] + "").length > 4 && (u = c.offsetLeft, d = c.offsetTop, c = 0);
      if (h = Wi.getComputedStyle(e), h.position !== "absolute" && h.position !== "fixed")
        for (f = e.offsetParent; o && o !== f;) u += o.scrollLeft || 0, d += o.scrollTop || 0, o = o.parentNode;
      c = a.style, c.top = e.offsetTop - d + "px", c.left = e.offsetLeft - u + "px", c[Vn] = h[Vn], c[iu] = h[iu], c.position = h.position === "fixed" ? "fixed" : "absolute", l.appendChild(a)
    }
    return a
  },
  Kc = function(e, n, r, i, s, o, l) {
    return e.a = n, e.b = r, e.c = i, e.d = s, e.e = o, e.f = l, e
  },
  al = (function() {
    function t(n, r, i, s, o, l) {
      n === void 0 && (n = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), s === void 0 && (s = 1), o === void 0 && (o = 0), l === void 0 && (l = 0), Kc(this, n, r, i, s, o, l)
    }
    var e = t.prototype;
    return e.inverse = function() {
      var r = this.a,
        i = this.b,
        s = this.c,
        o = this.d,
        l = this.e,
        a = this.f,
        f = r * o - i * s || 1e-10;
      return Kc(this, o / f, -i / f, -s / f, r / f, (s * a - o * l) / f, -(r * a - i * l) / f)
    }, e.multiply = function(r) {
      var i = this.a,
        s = this.b,
        o = this.c,
        l = this.d,
        a = this.e,
        f = this.f,
        c = r.a,
        u = r.c,
        d = r.b,
        h = r.d,
        p = r.e,
        g = r.f;
      return Kc(this, c * i + d * o, c * s + d * l, u * i + h * o, u * s + h * l, a + p * i + g * o, f + p * s + g * l)
    }, e.clone = function() {
      return new t(this.a, this.b, this.c, this.d, this.e, this.f)
    }, e.equals = function(r) {
      var i = this.a,
        s = this.b,
        o = this.c,
        l = this.d,
        a = this.e,
        f = this.f;
      return i === r.a && s === r.b && o === r.c && l === r.d && a === r.e && f === r.f
    }, e.apply = function(r, i) {
      i === void 0 && (i = {});
      var s = r.x,
        o = r.y,
        l = this.a,
        a = this.b,
        f = this.c,
        c = this.d,
        u = this.e,
        d = this.f;
      return i.x = s * l + o * f + u || 0, i.y = s * a + o * c + d || 0, i
    }, t
  })();

function ks(t, e, n, r) {
  if (!t || !t.parentNode || (Or || E0(t)).documentElement === t) return new al;
  var i = oC(t),
    s = mh(t),
    o = s ? C0 : k0,
    l = hC(t, n),
    a = o[0].getBoundingClientRect(),
    f = o[1].getBoundingClientRect(),
    c = o[2].getBoundingClientRect(),
    u = l.parentNode,
    d = !r && cC(t),
    h = new al((f.left - a.left) / 100, (f.top - a.top) / 100, (c.left - a.left) / 100, (c.top - a.top) / 100, a.left + (d ? 0 : aC()), a.top + (d ? 0 : lC()));
  if (u.removeChild(l), i)
    for (a = i.length; a--;) f = i[a], f.scaleX = f.scaleY = 0, f.renderTransform(1, f);
  return e ? h.inverse() : h
}
var dC = "x,translateX,left,marginLeft,xPercent".split(","),
  pC = "y,translateY,top,marginTop,yPercent".split(","),
  gC = Math.PI / 180,
  Pn, P0, fs, su, qc, vp, _C = function() {
    return Pn || typeof window < "u" && (Pn = window.gsap) && Pn.registerPlugin && Pn
  },
  oo = function(e, n, r, i) {
    for (var s = n.length, o = i === 2 ? 0 : i, l = 0; l < s; l++) e[o] = parseFloat(n[l][r]), i === 2 && (e[o + 1] = 0), o += 2;
    return e
  },
  _s = function(e, n, r) {
    return parseFloat(e._gsap.get(e, n, r || "px")) || 0
  },
  R0 = function(e) {
    var n = e[0],
      r = e[1],
      i;
    for (i = 2; i < e.length; i += 2) n = e[i] += n, r = e[i + 1] += r
  },
  bp = function(e, n, r, i, s, o, l, a, f) {
    if (l.type === "cubic") n = [n];
    else {
      l.fromCurrent !== !1 && n.unshift(_s(r, i, a), s ? _s(r, s, f) : 0), l.relative && R0(n);
      var c = s ? ru : ZE;
      n = [c(n, l.curviness)]
    }
    return n = o(A0(n, r, l)), Ba(e, r, i, n, "x", a), s && Ba(e, r, s, n, "y", f), ji(n, l.resolution || (l.curviness === 0 ? 20 : 12))
  },
  mC = function(e) {
    return e
  },
  yC = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
  wp = function(e, n, r) {
    var i = ks(e),
      s = 0,
      o = 0,
      l;
    return (e.tagName + "").toLowerCase() === "svg" ? (l = e.viewBox.baseVal, l.width || (l = {
      width: +e.getAttribute("width"),
      height: +e.getAttribute("height")
    })) : l = n && e.getBBox && e.getBBox(), n && n !== "auto" && (s = n.push ? n[0] * (l ? l.width : e.offsetWidth || 0) : n.x, o = n.push ? n[1] * (l ? l.height : e.offsetHeight || 0) : n.y), r.apply(s || o ? i.apply({
      x: s,
      y: o
    }) : {
      x: i.e,
      y: i.f
    })
  },
  ou = function(e, n, r, i) {
    var s = ks(e.parentNode, !0, !0),
      o = s.clone().multiply(ks(n)),
      l = wp(e, r, s),
      a = wp(n, i, s),
      f = a.x,
      c = a.y,
      u;
    return o.e = o.f = 0, i === "auto" && n.getTotalLength && n.tagName.toLowerCase() === "path" && (u = n.getAttribute("d").match(yC) || [], u = o.apply({
      x: +u[0],
      y: +u[1]
    }), f += u.x, c += u.y), u && (u = o.apply(n.getBBox()), f -= u.x, c -= u.y), o.e = f - l.x, o.f = c - l.y, o
  },
  A0 = function(e, n, r) {
    var i = r.align,
      s = r.matrix,
      o = r.offsetX,
      l = r.offsetY,
      a = r.alignOrigin,
      f = e[0][0],
      c = e[0][1],
      u = _s(n, "x"),
      d = _s(n, "y"),
      h, p, g;
    return !e || !e.length ? oa("M0,0L0,0") : (i && (i === "self" || (h = su(i)[0] || n) === n ? gs(e, 1, 0, 0, 1, u - f, d - c) : (a && a[2] !== !1 ? Pn.set(n, {
      transformOrigin: a[0] * 100 + "% " + a[1] * 100 + "%"
    }) : a = [_s(n, "xPercent") / -100, _s(n, "yPercent") / -100], p = ou(n, h, a, "auto"), g = p.apply({
      x: f,
      y: c
    }), gs(e, p.a, p.b, p.c, p.d, u + p.e - (g.x - p.e), d + p.f - (g.y - p.f)))), s ? gs(e, s.a, s.b, s.c, s.d, s.e, s.f) : (o || l) && gs(e, 1, 0, 0, 1, o || 0, l || 0), e)
  },
  Ba = function(e, n, r, i, s, o) {
    var l = n._gsap,
      a = l.harness,
      f = a && a.aliases && a.aliases[r],
      c = f && f.indexOf(",") < 0 ? f : r,
      u = e._pt = new P0(e._pt, n, c, 0, 0, mC, 0, l.set(n, c, e));
    u.u = fs(l.get(n, c, o)) || 0, u.path = i, u.pp = s, e._props.push(c)
  },
  vC = function(e, n) {
    return function(r) {
      return e || n !== 1 ? w0(r, e, n) : r
    }
  },
  O0 = {
    version: "3.14.2",
    name: "motionPath",
    register: function(e, n, r) {
      Pn = e, fs = Pn.utils.getUnit, su = Pn.utils.toArray, qc = Pn.core.getStyleSaver, vp = Pn.core.reverting || function() {}, P0 = r
    },
    init: function(e, n, r) {
      if (!Pn) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
      (!(typeof n == "object" && !n.style) || !n.path) && (n = {
        path: n
      });
      var i = [],
        s = n,
        o = s.path,
        l = s.autoRotate,
        a = s.unitX,
        f = s.unitY,
        c = s.x,
        u = s.y,
        d = o[0],
        h = vC(n.start, "end" in n ? n.end : 1),
        p, g;
      if (this.rawPaths = i, this.target = e, this.tween = r, this.styles = qc && qc(e, "transform"), (this.rotate = l || l === 0) && (this.rOffset = parseFloat(l) || 0, this.radians = !!n.useRadians, this.rProp = n.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = fs(e._gsap.get(e, this.rProp)) || 0), Array.isArray(o) && !("closed" in o) && typeof d != "number") {
        for (g in d) !c && ~dC.indexOf(g) ? c = g : !u && ~pC.indexOf(g) && (u = g);
        c && u ? i.push(bp(this, oo(oo([], o, c, 0), o, u, 1), e, c, u, h, n, a || fs(o[0][c]), f || fs(o[0][u]))) : c = u = 0;
        for (g in d) g !== c && g !== u && i.push(bp(this, oo([], o, g, 2), e, g, 0, h, n, fs(o[0][g])))
      } else p = h(A0(oa(n.path), e, n)), ji(p, n.resolution), i.push(p), Ba(this, e, n.x || "x", p, "x", n.unitX || "px"), Ba(this, e, n.y || "y", p, "y", n.unitY || "px");
      r.vars.immediateRender && this.render(r.progress(), this)
    },
    render: function(e, n) {
      var r = n.rawPaths,
        i = r.length,
        s = n._pt;
      if (n.tween._time || !vp()) {
        for (e > 1 ? e = 1 : e < 0 && (e = 0); i--;) mp(r[i], e, !i && n.rotate, r[i]);
        for (; s;) s.set(s.t, s.p, s.path[s.pp] + s.u, s.d, e), s = s._next;
        n.rotate && n.rSet(n.target, n.rProp, r[0].angle * (n.radians ? gC : 1) + n.rOffset + n.ru, n, e)
      } else n.styles.revert()
    },
    getLength: function(e) {
      return ji(oa(e)).totalLength
    },
    sliceRawPath: w0,
    getRawPath: oa,
    pointsToSegment: ru,
    stringToRawPath: ll,
    rawPathToString: gh,
    transformRawPath: gs,
    getGlobalMatrix: ks,
    getPositionOnPath: mp,
    cacheRawPathMeasurements: ji,
    convertToPath: function(e, n) {
      return su(e).map(function(r) {
        return qE(r, n !== !1)
      })
    },
    convertCoordinates: function(e, n, r) {
      var i = ks(n, !0, !0).multiply(ks(e));
      return r ? i.apply(r) : i
    },
    getAlignMatrix: ou,
    getRelativePosition: function(e, n, r, i) {
      var s = ou(e, n, r, i);
      return {
        x: s.e,
        y: s.f
      }
    },
    arrayToRawPath: function(e, n) {
      n = n || {};
      var r = oo(oo([], e, n.x || "x", 0), e, n.y || "y", 1);
      return n.relative && R0(r), [n.type === "cubic" ? r : ru(r, n.curviness)]
    }
  };
_C() && Pn.registerPlugin(O0);

function bC(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
  }
}

function wC(t, e, n) {
  return e && bC(t.prototype, e), t
}
var Et, aa, gn, Qr, Zr, Ps, M0, Ci, Do, N0, Mr, jn, $0, D0 = function() {
    return Et || typeof window < "u" && (Et = window.gsap) && Et.registerPlugin && Et
  },
  L0 = 1,
  ms = [],
  we = [],
  hr = [],
  Lo = Date.now,
  lu = function(e, n) {
    return n
  },
  xC = function() {
    var e = Do.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, we), i.push.apply(i, hr), we = r, hr = i, lu = function(o, l) {
      return n[o](l)
    }
  },
  si = function(e, n) {
    return ~hr.indexOf(e) && hr[hr.indexOf(e) + 1][n]
  },
  Io = function(e) {
    return !!~N0.indexOf(e)
  },
  jt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
      passive: i !== !1,
      capture: !!s
    })
  },
  Bt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
  },
  Fl = "scrollLeft",
  Bl = "scrollTop",
  au = function() {
    return Mr && Mr.isPressed || we.cache++
  },
  Ua = function(e, n) {
    var r = function i(s) {
      if (s || s === 0) {
        L0 && (gn.history.scrollRestoration = "manual");
        var o = Mr && Mr.isPressed;
        s = i.v = Math.round(s) || (Mr && Mr.iOS ? 1 : 0), e(s), i.cacheID = we.cache, o && lu("ss", s)
      } else(n || we.cache !== i.cacheID || lu("ref")) && (i.cacheID = we.cache, i.v = e());
      return i.v + i.offset
    };
    return r.offset = 0, e && r
  },
  Kt = {
    s: Fl,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Ua(function(t) {
      return arguments.length ? gn.scrollTo(t, pt.sc()) : gn.pageXOffset || Qr[Fl] || Zr[Fl] || Ps[Fl] || 0
    })
  },
  pt = {
    s: Bl,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Kt,
    sc: Ua(function(t) {
      return arguments.length ? gn.scrollTo(Kt.sc(), t) : gn.pageYOffset || Qr[Bl] || Zr[Bl] || Ps[Bl] || 0
    })
  },
  Qt = function(e, n) {
    return (n && n._ctx && n._ctx.selector || Et.utils.toArray)(e)[0] || (typeof e == "string" && Et.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
  },
  TC = function(e, n) {
    for (var r = n.length; r--;)
      if (n[r] === e || n[r].contains(e)) return !0;
    return !1
  },
  fi = function(e, n) {
    var r = n.s,
      i = n.sc;
    Io(e) && (e = Qr.scrollingElement || Zr);
    var s = we.indexOf(e),
      o = i === pt.sc ? 1 : 2;
    !~s && (s = we.push(e) - 1), we[s + o] || jt(e, "scroll", au);
    var l = we[s + o],
      a = l || (we[s + o] = Ua(si(e, r), !0) || (Io(e) ? i : Ua(function(f) {
        return arguments.length ? e[r] = f : e[r]
      })));
    return a.target = e, l || (a.smooth = Et.getProperty(e, "scrollBehavior") === "smooth"), a
  },
  cu = function(e, n, r) {
    var i = e,
      s = e,
      o = Lo(),
      l = o,
      a = n || 50,
      f = Math.max(500, a * 3),
      c = function(p, g) {
        var y = Lo();
        g || y - o > a ? (s = i, i = p, l = o, o = y) : r ? i += p : i = s + (p - s) / (y - l) * (o - l)
      },
      u = function() {
        s = i = r ? 0 : i, l = o = 0
      },
      d = function(p) {
        var g = l,
          y = s,
          b = Lo();
        return (p || p === 0) && p !== i && c(p), o === l || b - l > f ? 0 : (i + (r ? y : -y)) / ((r ? b : o) - g) * 1e3
      };
    return {
      update: c,
      reset: u,
      getVelocity: d
    }
  },
  lo = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
  },
  xp = function(e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
  },
  I0 = function() {
    Do = Et.core.globals().ScrollTrigger, Do && Do.core && xC()
  },
  H0 = function(e) {
    return Et = e || D0(), !aa && Et && typeof document < "u" && document.body && (gn = window, Qr = document, Zr = Qr.documentElement, Ps = Qr.body, N0 = [gn, Qr, Zr, Ps], Et.utils.clamp, $0 = Et.core.context || function() {}, Ci = "onpointerenter" in Ps ? "pointer" : "mouse", M0 = rt.isTouch = gn.matchMedia && gn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in gn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, jn = rt.eventTypes = ("ontouchstart" in Zr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Zr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return L0 = 0
    }, 500), I0(), aa = 1), aa
  };
Kt.op = pt;
we.cache = 0;
var rt = (function() {
  function t(n) {
    this.init(n)
  }
  var e = t.prototype;
  return e.init = function(r) {
    aa || H0(Et) || console.warn("Please gsap.registerPlugin(Observer)"), Do || I0();
    var i = r.tolerance,
      s = r.dragMinimum,
      o = r.type,
      l = r.target,
      a = r.lineHeight,
      f = r.debounce,
      c = r.preventDefault,
      u = r.onStop,
      d = r.onStopDelay,
      h = r.ignore,
      p = r.wheelSpeed,
      g = r.event,
      y = r.onDragStart,
      b = r.onDragEnd,
      v = r.onDrag,
      _ = r.onPress,
      m = r.onRelease,
      w = r.onRight,
      T = r.onLeft,
      E = r.onUp,
      R = r.onDown,
      C = r.onChangeX,
      P = r.onChangeY,
      D = r.onChange,
      A = r.onToggleX,
      $ = r.onToggleY,
      z = r.onHover,
      G = r.onHoverEnd,
      L = r.onMove,
      B = r.ignoreCheck,
      F = r.isNormalizer,
      Z = r.onGestureStart,
      O = r.onGestureEnd,
      re = r.onWheel,
      fe = r.onEnable,
      Te = r.onDisable,
      ge = r.onClick,
      Ce = r.scrollSpeed,
      Re = r.capture,
      N = r.allowClicks,
      X = r.lockAxis,
      W = r.onLockAxis;
    this.target = l = Qt(l) || Zr, this.vars = r, h && (h = Et.utils.toArray(h)), i = i || 1e-9, s = s || 0, p = p || 1, Ce = Ce || 1, o = o || "wheel,touch,pointer", f = f !== !1, a || (a = parseFloat(gn.getComputedStyle(Ps).lineHeight) || 22);
    var K, se, _e, x, k, M, I, S = this,
      H = 0,
      Y = 0,
      V = r.passive || !c && r.passive !== !1,
      j = fi(l, Kt),
      U = fi(l, pt),
      te = j(),
      q = U(),
      J = ~o.indexOf("touch") && !~o.indexOf("pointer") && jn[0] === "pointerdown",
      ie = Io(l),
      ne = l.ownerDocument || Qr,
      ve = [0, 0, 0],
      de = [0, 0, 0],
      je = 0,
      qe = function() {
        return je = Lo()
      },
      ke = function(ae, Ae) {
        return (S.event = ae) && h && TC(ae.target, h) || Ae && J && ae.pointerType !== "touch" || B && B(ae, Ae)
      },
      mt = function() {
        S._vx.reset(), S._vy.reset(), se.pause(), u && u(S)
      },
      Ft = function() {
        var ae = S.deltaX = xp(ve),
          Ae = S.deltaY = xp(de),
          Q = Math.abs(ae) >= i,
          ue = Math.abs(Ae) >= i;
        D && (Q || ue) && D(S, ae, Ae, ve, de), Q && (w && S.deltaX > 0 && w(S), T && S.deltaX < 0 && T(S), C && C(S), A && S.deltaX < 0 != H < 0 && A(S), H = S.deltaX, ve[0] = ve[1] = ve[2] = 0), ue && (R && S.deltaY > 0 && R(S), E && S.deltaY < 0 && E(S), P && P(S), $ && S.deltaY < 0 != Y < 0 && $(S), Y = S.deltaY, de[0] = de[1] = de[2] = 0), (x || _e) && (L && L(S), _e && (y && _e === 1 && y(S), v && v(S), _e = 0), x = !1), M && !(M = !1) && W && W(S), k && (re(S), k = !1), K = 0
      },
      mr = function(ae, Ae, Q) {
        ve[Q] += ae, de[Q] += Ae, S._vx.update(ae), S._vy.update(Ae), f ? K || (K = requestAnimationFrame(Ft)) : Ft()
      },
      it = function(ae, Ae) {
        X && !I && (S.axis = I = Math.abs(ae) > Math.abs(Ae) ? "x" : "y", M = !0), I !== "y" && (ve[2] += ae, S._vx.update(ae, !0)), I !== "x" && (de[2] += Ae, S._vy.update(Ae, !0)), f ? K || (K = requestAnimationFrame(Ft)) : Ft()
      },
      at = function(ae) {
        if (!ke(ae, 1)) {
          ae = lo(ae, c);
          var Ae = ae.clientX,
            Q = ae.clientY,
            ue = Ae - S.x,
            oe = Q - S.y,
            he = S.isDragging;
          S.x = Ae, S.y = Q, (he || (ue || oe) && (Math.abs(S.startX - Ae) >= s || Math.abs(S.startY - Q) >= s)) && (_e || (_e = he ? 2 : 1), he || (S.isDragging = !0), it(ue, oe))
        }
      },
      qn = S.onPress = function(pe) {
        ke(pe, 1) || pe && pe.button || (S.axis = I = null, se.pause(), S.isPressed = !0, pe = lo(pe), H = Y = 0, S.startX = S.x = pe.clientX, S.startY = S.y = pe.clientY, S._vx.reset(), S._vy.reset(), jt(F ? l : ne, jn[1], at, V, !0), S.deltaX = S.deltaY = 0, _ && _(S))
      },
      me = S.onRelease = function(pe) {
        if (!ke(pe, 1)) {
          Bt(F ? l : ne, jn[1], at, !0);
          var ae = !isNaN(S.y - S.startY),
            Ae = S.isDragging,
            Q = Ae && (Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3),
            ue = lo(pe);
          !Q && ae && (S._vx.reset(), S._vy.reset(), c && N && Et.delayedCall(.08, function() {
            if (Lo() - je > 300 && !pe.defaultPrevented) {
              if (pe.target.click) pe.target.click();
              else if (ne.createEvent) {
                var oe = ne.createEvent("MouseEvents");
                oe.initMouseEvent("click", !0, !0, gn, 1, ue.screenX, ue.screenY, ue.clientX, ue.clientY, !1, !1, !1, !1, 0, null), pe.target.dispatchEvent(oe)
              }
            }
          })), S.isDragging = S.isGesturing = S.isPressed = !1, u && Ae && !F && se.restart(!0), _e && Ft(), b && Ae && b(S), m && m(S, Q)
        }
      },
      pi = function(ae) {
        return ae.touches && ae.touches.length > 1 && (S.isGesturing = !0) && Z(ae, S.isDragging)
      },
      Hn = function() {
        return (S.isGesturing = !1) || O(S)
      },
      Fn = function(ae) {
        if (!ke(ae)) {
          var Ae = j(),
            Q = U();
          mr((Ae - te) * Ce, (Q - q) * Ce, 1), te = Ae, q = Q, u && se.restart(!0)
        }
      },
      Bn = function(ae) {
        if (!ke(ae)) {
          ae = lo(ae, c), re && (k = !0);
          var Ae = (ae.deltaMode === 1 ? a : ae.deltaMode === 2 ? gn.innerHeight : 1) * p;
          mr(ae.deltaX * Ae, ae.deltaY * Ae, 0), u && !F && se.restart(!0)
        }
      },
      gi = function(ae) {
        if (!ke(ae)) {
          var Ae = ae.clientX,
            Q = ae.clientY,
            ue = Ae - S.x,
            oe = Q - S.y;
          S.x = Ae, S.y = Q, x = !0, u && se.restart(!0), (ue || oe) && it(ue, oe)
        }
      },
      Zi = function(ae) {
        S.event = ae, z(S)
      },
      yr = function(ae) {
        S.event = ae, G(S)
      },
      Js = function(ae) {
        return ke(ae) || lo(ae, c) && ge(S)
      };
    se = S._dc = Et.delayedCall(d || .25, mt).pause(), S.deltaX = S.deltaY = 0, S._vx = cu(0, 50, !0), S._vy = cu(0, 50, !0), S.scrollX = j, S.scrollY = U, S.isDragging = S.isGesturing = S.isPressed = !1, $0(this), S.enable = function(pe) {
      return S.isEnabled || (jt(ie ? ne : l, "scroll", au), o.indexOf("scroll") >= 0 && jt(ie ? ne : l, "scroll", Fn, V, Re), o.indexOf("wheel") >= 0 && jt(l, "wheel", Bn, V, Re), (o.indexOf("touch") >= 0 && M0 || o.indexOf("pointer") >= 0) && (jt(l, jn[0], qn, V, Re), jt(ne, jn[2], me), jt(ne, jn[3], me), N && jt(l, "click", qe, !0, !0), ge && jt(l, "click", Js), Z && jt(ne, "gesturestart", pi), O && jt(ne, "gestureend", Hn), z && jt(l, Ci + "enter", Zi), G && jt(l, Ci + "leave", yr), L && jt(l, Ci + "move", gi)), S.isEnabled = !0, S.isDragging = S.isGesturing = S.isPressed = x = _e = !1, S._vx.reset(), S._vy.reset(), te = j(), q = U(), pe && pe.type && qn(pe), fe && fe(S)), S
    }, S.disable = function() {
      S.isEnabled && (ms.filter(function(pe) {
        return pe !== S && Io(pe.target)
      }).length || Bt(ie ? ne : l, "scroll", au), S.isPressed && (S._vx.reset(), S._vy.reset(), Bt(F ? l : ne, jn[1], at, !0)), Bt(ie ? ne : l, "scroll", Fn, Re), Bt(l, "wheel", Bn, Re), Bt(l, jn[0], qn, Re), Bt(ne, jn[2], me), Bt(ne, jn[3], me), Bt(l, "click", qe, !0), Bt(l, "click", Js), Bt(ne, "gesturestart", pi), Bt(ne, "gestureend", Hn), Bt(l, Ci + "enter", Zi), Bt(l, Ci + "leave", yr), Bt(l, Ci + "move", gi), S.isEnabled = S.isPressed = S.isDragging = !1, Te && Te(S))
    }, S.kill = S.revert = function() {
      S.disable();
      var pe = ms.indexOf(S);
      pe >= 0 && ms.splice(pe, 1), Mr === S && (Mr = 0)
    }, ms.push(S), F && Io(l) && (Mr = S), S.enable(g)
  }, wC(t, [{
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
})();
rt.version = "3.14.2";
rt.create = function(t) {
  return new rt(t)
};
rt.register = H0;
rt.getAll = function() {
  return ms.slice()
};
rt.getById = function(t) {
  return ms.filter(function(e) {
    return e.vars.id === t
  })[0]
};
D0() && Et.registerPlugin(rt);
var Dt, F0, $r, ar, oi, B0, Rs, Ul, U0 = function() {
    return typeof window < "u"
  },
  j0 = function() {
    return Dt || U0() && (Dt = window.gsap) && Dt.registerPlugin && Dt
  },
  W0 = function(e) {
    return typeof e == "string"
  },
  Tp = function(e) {
    return typeof e == "function"
  },
  cl = function(e, n) {
    var r = n === "x" ? "Width" : "Height",
      i = "scroll" + r,
      s = "client" + r;
    return e === $r || e === ar || e === oi ? Math.max(ar[i], oi[i]) - ($r["inner" + r] || ar[s] || oi[s]) : e[i] - e["offset" + r]
  },
  fl = function(e, n) {
    var r = "scroll" + (n === "x" ? "Left" : "Top");
    return e === $r && (e.pageXOffset != null ? r = "page" + n.toUpperCase() + "Offset" : e = ar[r] != null ? ar : oi),
      function() {
        return e[r]
      }
  },
  SC = function(e, n, r, i) {
    if (Tp(e) && (e = e(n, r, i)), typeof e != "object") return W0(e) && e !== "max" && e.charAt(1) !== "=" ? {
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
    for (o in e) s[o] = o !== "onAutoKill" && Tp(e[o]) ? e[o](n, r, i) : e[o];
    return s
  },
  z0 = function(e, n) {
    if (e = B0(e)[0], !e || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
    var r = e.getBoundingClientRect(),
      i = !n || n === $r || n === oi,
      s = i ? {
        top: ar.clientTop - ($r.pageYOffset || ar.scrollTop || oi.scrollTop || 0),
        left: ar.clientLeft - ($r.pageXOffset || ar.scrollLeft || oi.scrollLeft || 0)
      } : n.getBoundingClientRect(),
      o = {
        x: r.left - s.left,
        y: r.top - s.top
      };
    return !i && n && (o.x += fl(n, "x")(), o.y += fl(n, "y")()), o
  },
  Sp = function(e, n, r, i, s) {
    return !isNaN(e) && typeof e != "object" ? parseFloat(e) - s : W0(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + i - s : e === "max" ? cl(n, r) - s : Math.min(cl(n, r), z0(e, n)[r] - s)
  },
  fu = function() {
    Dt = j0(), U0() && Dt && typeof document < "u" && document.body && ($r = window, oi = document.body, ar = document.documentElement, B0 = Dt.utils.toArray, Dt.config({
      autoKillThreshold: 7
    }), Rs = Dt.config(), F0 = 1)
  },
  qs = {
    version: "3.14.2",
    name: "scrollTo",
    rawVars: 1,
    register: function(e) {
      Dt = e, fu()
    },
    init: function(e, n, r, i, s) {
      F0 || fu();
      var o = this,
        l = Dt.getProperty(e, "scrollSnapType");
      o.isWin = e === $r, o.target = e, o.tween = r, n = SC(n, i, e, s), o.vars = n, o.autoKill = !!("autoKill" in n ? n : Rs).autoKill, o.getX = fl(e, "x"), o.getY = fl(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), Ul || (Ul = Dt.core.globals().ScrollTrigger), Dt.getProperty(e, "scrollBehavior") === "smooth" && Dt.set(e, {
        scrollBehavior: "auto"
      }), l && l !== "none" && (o.snap = 1, o.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), n.x != null ? (o.add(o, "x", o.x, Sp(n.x, e, "x", o.x, n.offsetX || 0), i, s), o._props.push("scrollTo_x")) : o.skipX = 1, n.y != null ? (o.add(o, "y", o.y, Sp(n.y, e, "y", o.y, n.offsetY || 0), i, s), o._props.push("scrollTo_y")) : o.skipY = 1
    },
    render: function(e, n) {
      for (var r = n._pt, i = n.target, s = n.tween, o = n.autoKill, l = n.xPrev, a = n.yPrev, f = n.isWin, c = n.snap, u = n.snapInline, d, h, p, g, y; r;) r.r(e, r.d), r = r._next;
      d = f || !n.skipX ? n.getX() : l, h = f || !n.skipY ? n.getY() : a, p = h - a, g = d - l, y = Rs.autoKillThreshold, n.x < 0 && (n.x = 0), n.y < 0 && (n.y = 0), o && (!n.skipX && (g > y || g < -y) && d < cl(i, "x") && (n.skipX = 1), !n.skipY && (p > y || p < -y) && h < cl(i, "y") && (n.skipY = 1), n.skipX && n.skipY && (s.kill(), n.vars.onAutoKill && n.vars.onAutoKill.apply(s, n.vars.onAutoKillParams || []))), f ? $r.scrollTo(n.skipX ? d : n.x, n.skipY ? h : n.y) : (n.skipY || (i.scrollTop = n.y), n.skipX || (i.scrollLeft = n.x)), c && (e === 1 || e === 0) && (h = i.scrollTop, d = i.scrollLeft, u ? i.style.scrollSnapType = u : i.style.removeProperty("scroll-snap-type"), i.scrollTop = h + 1, i.scrollLeft = d + 1, i.scrollTop = h, i.scrollLeft = d), n.xPrev = n.x, n.yPrev = n.y, Ul && Ul.update()
    },
    kill: function(e) {
      var n = e === "scrollTo",
        r = this._props.indexOf(e);
      return (n || e === "scrollTo_x") && (this.skipX = 1), (n || e === "scrollTo_y") && (this.skipY = 1), r > -1 && this._props.splice(r, 1), !this._props.length
    }
  };
qs.max = cl;
qs.getOffset = z0;
qs.buildGetter = fl;
qs.config = function(t) {
  Rs || fu() || (Rs = Dt.config());
  for (var e in t) Rs[e] = t[e]
};
j0() && Dt.registerPlugin(qs);
var ee, us, be, Be, dn, $e, yh, ja, ul, Ho, _o, jl, At, pc, uu, Vt, Ep, Cp, hs, V0, Jc, G0, zt, hu, Y0, X0, Vr, du, vh, As, bh, Fo, pu, Qc, Wl = 1,
  Ot = Date.now,
  Zc = Ot(),
  Dn = 0,
  mo = 0,
  kp = function(e, n, r) {
    var i = an(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
  },
  Pp = function(e, n) {
    return n && (!an(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
  },
  EC = function t() {
    return mo && requestAnimationFrame(t)
  },
  Rp = function() {
    return pc = 1
  },
  Ap = function() {
    return pc = 0
  },
  ir = function(e) {
    return e
  },
  yo = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
  },
  K0 = function() {
    return typeof window < "u"
  },
  q0 = function() {
    return ee || K0() && (ee = window.gsap) && ee.registerPlugin && ee
  },
  Yi = function(e) {
    return !!~yh.indexOf(e)
  },
  J0 = function(e) {
    return (e === "Height" ? bh : be["inner" + e]) || dn["client" + e] || $e["client" + e]
  },
  Q0 = function(e) {
    return si(e, "getBoundingClientRect") || (Yi(e) ? function() {
      return da.width = be.innerWidth, da.height = bh, da
    } : function() {
      return Rr(e)
    })
  },
  CC = function(e, n, r) {
    var i = r.d,
      s = r.d2,
      o = r.a;
    return (o = si(e, "getBoundingClientRect")) ? function() {
      return o()[i]
    } : function() {
      return (n ? J0(s) : e["client" + s]) || 0
    }
  },
  kC = function(e, n) {
    return !n || ~hr.indexOf(e) ? Q0(e) : function() {
      return da
    }
  },
  cr = function(e, n) {
    var r = n.s,
      i = n.d2,
      s = n.d,
      o = n.a;
    return Math.max(0, (r = "scroll" + i) && (o = si(e, r)) ? o() - Q0(e)()[s] : Yi(e) ? (dn[r] || $e[r]) - J0(i) : e[r] - e["offset" + i])
  },
  zl = function(e, n) {
    for (var r = 0; r < hs.length; r += 3)(!n || ~n.indexOf(hs[r + 1])) && e(hs[r], hs[r + 1], hs[r + 2])
  },
  an = function(e) {
    return typeof e == "string"
  },
  Lt = function(e) {
    return typeof e == "function"
  },
  vo = function(e) {
    return typeof e == "number"
  },
  ki = function(e) {
    return typeof e == "object"
  },
  ao = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
  },
  ef = function(e, n) {
    if (e.enabled) {
      var r = e._ctx ? e._ctx.add(function() {
        return n(e)
      }) : n(e);
      r && r.totalTime && (e.callbackAnimation = r)
    }
  },
  rs = Math.abs,
  Z0 = "left",
  ey = "top",
  wh = "right",
  xh = "bottom",
  zi = "width",
  Vi = "height",
  Bo = "Right",
  Uo = "Left",
  jo = "Top",
  Wo = "Bottom",
  st = "padding",
  Rn = "margin",
  Gs = "Width",
  Th = "Height",
  ut = "px",
  An = function(e) {
    return be.getComputedStyle(e)
  },
  PC = function(e) {
    var n = An(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
  },
  Op = function(e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e
  },
  Rr = function(e, n) {
    var r = n && An(e)[uu] !== "matrix(1, 0, 0, 1, 0, 0)" && ee.to(e, {
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
  Wa = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
  },
  ty = function(e) {
    var n = [],
      r = e.labels,
      i = e.duration(),
      s;
    for (s in r) n.push(r[s] / i);
    return n
  },
  RC = function(e) {
    return function(n) {
      return ee.utils.snap(ty(e), n)
    }
  },
  Sh = function(e) {
    var n = ee.utils.snap(e),
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
  AC = function(e) {
    return function(n, r) {
      return Sh(ty(e))(n, r.direction)
    }
  },
  Vl = function(e, n, r, i) {
    return r.split(",").forEach(function(s) {
      return e(n, s, i)
    })
  },
  bt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
      passive: !i,
      capture: !!s
    })
  },
  vt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
  },
  Gl = function(e, n, r) {
    r = r && r.wheelHandler, r && (e(n, "wheel", r), e(n, "touchmove", r))
  },
  Mp = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  Yl = {
    toggleActions: "play",
    anticipatePin: 0
  },
  za = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
  ca = function(e, n) {
    if (an(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), e = e.substr(0, r - 1)), e = i + (e in za ? za[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
  },
  Xl = function(e, n, r, i, s, o, l, a) {
    var f = s.startColor,
      c = s.endColor,
      u = s.fontSize,
      d = s.indent,
      h = s.fontWeight,
      p = Be.createElement("div"),
      g = Yi(r) || si(r, "pinType") === "fixed",
      y = e.indexOf("scroller") !== -1,
      b = g ? $e : r,
      v = e.indexOf("start") !== -1,
      _ = v ? f : c,
      m = "border-color:" + _ + ";font-size:" + u + ";color:" + _ + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return m += "position:" + ((y || a) && g ? "fixed;" : "absolute;"), (y || a || !g) && (m += (i === pt ? wh : xh) + ":" + (o + parseFloat(d)) + "px;"), l && (m += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), p.style.cssText = m, p.innerText = n || n === 0 ? e + "-" + n : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + i.op.d2], fa(p, 0, i, v), p
  },
  fa = function(e, n, r, i) {
    var s = {
        display: "block"
      },
      o = r[i ? "os2" : "p2"],
      l = r[i ? "p2" : "os2"];
    e._isFlipped = i, s[r.a + "Percent"] = i ? -100 : 0, s[r.a] = i ? "1px" : 0, s["border" + o + Gs] = 1, s["border" + l + Gs] = 0, s[r.p] = n + "px", ee.set(e, s)
  },
  ye = [],
  gu = {},
  hl, Np = function() {
    return Ot() - Dn > 34 && (hl || (hl = requestAnimationFrame(Dr)))
  },
  is = function() {
    (!zt || !zt.isPressed || zt.startX > $e.clientWidth) && (we.cache++, zt ? hl || (hl = requestAnimationFrame(Dr)) : Dr(), Dn || Ki("scrollStart"), Dn = Ot())
  },
  tf = function() {
    X0 = be.innerWidth, Y0 = be.innerHeight
  },
  bo = function(e) {
    we.cache++, (e === !0 || !At && !G0 && !Be.fullscreenElement && !Be.webkitFullscreenElement && (!hu || X0 !== be.innerWidth || Math.abs(be.innerHeight - Y0) > be.innerHeight * .25)) && ja.restart(!0)
  },
  Xi = {},
  OC = [],
  ny = function t() {
    return vt(xe, "scrollEnd", t) || Oi(!0)
  },
  Ki = function(e) {
    return Xi[e] && Xi[e].map(function(n) {
      return n()
    }) || OC
  },
  ln = [],
  ry = function(e) {
    for (var n = 0; n < ln.length; n += 5)(!e || ln[n + 4] && ln[n + 4].query === e) && (ln[n].style.cssText = ln[n + 1], ln[n].getBBox && ln[n].setAttribute("transform", ln[n + 2] || ""), ln[n + 3].uncache = 1)
  },
  iy = function() {
    return we.forEach(function(e) {
      return Lt(e) && ++e.cacheID && (e.rec = e())
    })
  },
  Eh = function(e, n) {
    var r;
    for (Vt = 0; Vt < ye.length; Vt++) r = ye[Vt], r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    Fo = !0, n && ry(n), n || Ki("revert")
  },
  sy = function(e, n) {
    we.cache++, (n || !Gt) && we.forEach(function(r) {
      return Lt(r) && r.cacheID++ && (r.rec = 0)
    }), an(e) && (be.history.scrollRestoration = vh = e)
  },
  Gt, Gi = 0,
  $p, MC = function() {
    if ($p !== Gi) {
      var e = $p = Gi;
      requestAnimationFrame(function() {
        return e === Gi && Oi(!0)
      })
    }
  },
  oy = function() {
    $e.appendChild(As), bh = !zt && As.offsetHeight || be.innerHeight, $e.removeChild(As)
  },
  Dp = function(e) {
    return ul(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
      return n.style.display = e ? "none" : "block"
    })
  },
  Oi = function(e, n) {
    if (dn = Be.documentElement, $e = Be.body, yh = [be, Be, dn, $e], Dn && !e && !Fo) {
      bt(xe, "scrollEnd", ny);
      return
    }
    oy(), Gt = xe.isRefreshing = !0, Fo || iy();
    var r = Ki("refreshInit");
    V0 && xe.sort(), n || Eh(), we.forEach(function(i) {
      Lt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
    }), ye.slice(0).forEach(function(i) {
      return i.refresh()
    }), Fo = !1, ye.forEach(function(i) {
      if (i._subPinOffset && i.pin) {
        var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
          o = i.pin[s];
        i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh()
      }
    }), pu = 1, Dp(!0), ye.forEach(function(i) {
      var s = cr(i.scroller, i._dir),
        o = i.vars.end === "max" || i._endClamp && i.end > s,
        l = i._startClamp && i.start >= s;
      (o || l) && i.setPositions(l ? s - 1 : i.start, o ? Math.max(l ? s : i.start + 1, s) : i.end, !0)
    }), Dp(!1), pu = 0, r.forEach(function(i) {
      return i && i.render && i.render(-1)
    }), we.forEach(function(i) {
      Lt(i) && (i.smooth && requestAnimationFrame(function() {
        return i.target.style.scrollBehavior = "smooth"
      }), i.rec && i(i.rec))
    }), sy(vh, 1), ja.pause(), Gi++, Gt = 2, Dr(2), ye.forEach(function(i) {
      return Lt(i.vars.onRefresh) && i.vars.onRefresh(i)
    }), Gt = xe.isRefreshing = !1, Ki("refresh")
  },
  _u = 0,
  ua = 1,
  zo, Dr = function(e) {
    if (e === 2 || !Gt && !Fo) {
      xe.isUpdating = !0, zo && zo.update(0);
      var n = ye.length,
        r = Ot(),
        i = r - Zc >= 50,
        s = n && ye[0].scroll();
      if (ua = _u > s ? -1 : 1, Gt || (_u = s), i && (Dn && !pc && r - Dn > 200 && (Dn = 0, Ki("scrollEnd")), _o = Zc, Zc = r), ua < 0) {
        for (Vt = n; Vt-- > 0;) ye[Vt] && ye[Vt].update(0, i);
        ua = 1
      } else
        for (Vt = 0; Vt < n; Vt++) ye[Vt] && ye[Vt].update(0, i);
      xe.isUpdating = !1
    }
    hl = 0
  },
  mu = [Z0, ey, xh, wh, Rn + Wo, Rn + Bo, Rn + jo, Rn + Uo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  ha = mu.concat([zi, Vi, "boxSizing", "max" + Gs, "max" + Th, "position", Rn, st, st + jo, st + Bo, st + Wo, st + Uo]),
  NC = function(e, n, r) {
    Os(r);
    var i = e._gsap;
    if (i.spacerIsNative) Os(i.spacerState);
    else if (e._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(e, n), s.removeChild(n))
    }
    e._gsap.swappedIn = !1
  },
  nf = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var s = mu.length, o = n.style, l = e.style, a; s--;) a = mu[s], o[a] = r[a];
      o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), l[xh] = l[wh] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[zi] = Wa(e, Kt) + ut, o[Vi] = Wa(e, pt) + ut, o[st] = l[Rn] = l[ey] = l[Z0] = "0", Os(i), l[zi] = l["max" + Gs] = r[zi], l[Vi] = l["max" + Th] = r[Vi], l[st] = r[st], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0
    }
  },
  $C = /([A-Z])/g,
  Os = function(e) {
    if (e) {
      var n = e.t.style,
        r = e.length,
        i = 0,
        s, o;
      for ((e.t._gsap || ee.core.getCache(e.t)).uncache = 1; i < r; i += 2) o = e[i + 1], s = e[i], o ? n[s] = o : n[s] && n.removeProperty(s.replace($C, "-$1").toLowerCase())
    }
  },
  Kl = function(e) {
    for (var n = ha.length, r = e.style, i = [], s = 0; s < n; s++) i.push(ha[s], r[ha[s]]);
    return i.t = e, i
  },
  DC = function(e, n, r) {
    for (var i = [], s = e.length, o = r ? 8 : 0, l; o < s; o += 2) l = e[o], i.push(l, l in n ? n[l] : e[o + 1]);
    return i.t = e.t, i
  },
  da = {
    left: 0,
    top: 0
  },
  Lp = function(e, n, r, i, s, o, l, a, f, c, u, d, h, p) {
    Lt(e) && (e = e(a)), an(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? ca("0" + e.substr(3), r) : 0));
    var g = h ? h.time() : 0,
      y, b, v;
    if (h && h.seek(0), isNaN(e) || (e = +e), vo(e)) h && (e = ee.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, d, e)), l && fa(l, r, i, !0);
    else {
      Lt(n) && (n = n(a));
      var _ = (e || "0").split(" "),
        m, w, T, E;
      v = Qt(n, a) || $e, m = Rr(v) || {}, (!m || !m.left && !m.top) && An(v).display === "none" && (E = v.style.display, v.style.display = "block", m = Rr(v), E ? v.style.display = E : v.style.removeProperty("display")), w = ca(_[0], m[i.d]), T = ca(_[1] || "0", r), e = m[i.p] - f[i.p] - c + w + s - T, l && fa(l, T, i, r - T < 20 || l._isStart && T > 20), r -= r - T
    }
    if (p && (a[p] = e || -.001, e < 0 && (e = 0)), o) {
      var R = e + r,
        C = o._isStart;
      y = "scroll" + i.d2, fa(o, R, i, C && R > 20 || !C && (u ? Math.max($e[y], dn[y]) : o.parentNode[y]) <= R + 1), u && (f = Rr(l), u && (o.style[i.op.p] = f[i.op.p] - i.op.m - o._offset + ut))
    }
    return h && v && (y = Rr(v), h.seek(d), b = Rr(v), h._caScrollDist = y[i.p] - b[i.p], e = e / h._caScrollDist * d), h && h.seek(g), h ? e : Math.round(e)
  },
  LC = /(webkit|moz|length|cssText|inset)/i,
  Ip = function(e, n, r, i) {
    if (e.parentNode !== n) {
      var s = e.style,
        o, l;
      if (n === $e) {
        e._stOrig = s.cssText, l = An(e);
        for (o in l) !+o && !LC.test(o) && l[o] && typeof s[o] == "string" && o !== "0" && (s[o] = l[o]);
        s.top = r, s.left = i
      } else s.cssText = e._stOrig;
      ee.core.getCache(e).uncache = 1, n.appendChild(e)
    }
  },
  ly = function(e, n, r) {
    var i = n,
      s = i;
    return function(o) {
      var l = Math.round(e());
      return l !== i && l !== s && Math.abs(l - i) > 3 && Math.abs(l - s) > 3 && (o = l, r && r()), s = i, i = Math.round(o), i
    }
  },
  ql = function(e, n, r) {
    var i = {};
    i[n.p] = "+=" + r, ee.set(e, i)
  },
  Hp = function(e, n) {
    var r = fi(e, n),
      i = "_scroll" + n.p2,
      s = function o(l, a, f, c, u) {
        var d = o.tween,
          h = a.onComplete,
          p = {};
        f = f || r();
        var g = ly(r, f, function() {
          d.kill(), o.tween = 0
        });
        return u = c && u || 0, c = c || l - f, d && d.kill(), a[i] = l, a.inherit = !1, a.modifiers = p, p[i] = function() {
          return g(f + c * d.ratio + u * d.ratio * d.ratio)
        }, a.onUpdate = function() {
          we.cache++, o.tween && Dr()
        }, a.onComplete = function() {
          o.tween = 0, h && h.call(d)
        }, d = o.tween = ee.to(e, a), d
      };
    return e[i] = r, r.wheelHandler = function() {
      return s.tween && s.tween.kill() && (s.tween = 0)
    }, bt(e, "wheel", r.wheelHandler), xe.isTouch && bt(e, "touchmove", r.wheelHandler), s
  },
  xe = (function() {
    function t(n, r) {
      us || t.register(ee) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), du(this), this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !mo) {
        this.update = this.refresh = this.kill = ir;
        return
      }
      r = Op(an(r) || vo(r) || r.nodeType ? {
        trigger: r
      } : r, Yl);
      var s = r,
        o = s.onUpdate,
        l = s.toggleClass,
        a = s.id,
        f = s.onToggle,
        c = s.onRefresh,
        u = s.scrub,
        d = s.trigger,
        h = s.pin,
        p = s.pinSpacing,
        g = s.invalidateOnRefresh,
        y = s.anticipatePin,
        b = s.onScrubComplete,
        v = s.onSnapComplete,
        _ = s.once,
        m = s.snap,
        w = s.pinReparent,
        T = s.pinSpacer,
        E = s.containerAnimation,
        R = s.fastScrollEnd,
        C = s.preventOverlaps,
        P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Kt : pt,
        D = !u && u !== 0,
        A = Qt(r.scroller || be),
        $ = ee.core.getCache(A),
        z = Yi(A),
        G = ("pinType" in r ? r.pinType : si(A, "pinType") || z && "fixed") === "fixed",
        L = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
        B = D && r.toggleActions.split(" "),
        F = "markers" in r ? r.markers : Yl.markers,
        Z = z ? 0 : parseFloat(An(A)["border" + P.p2 + Gs]) || 0,
        O = this,
        re = r.onRefreshInit && function() {
          return r.onRefreshInit(O)
        },
        fe = CC(A, z, P),
        Te = kC(A, z),
        ge = 0,
        Ce = 0,
        Re = 0,
        N = fi(A, P),
        X, W, K, se, _e, x, k, M, I, S, H, Y, V, j, U, te, q, J, ie, ne, ve, de, je, qe, ke, mt, Ft, mr, it, at, qn, me, pi, Hn, Fn, Bn, gi, Zi, yr;
      if (O._startClamp = O._endClamp = !1, O._dir = P, y *= 45, O.scroller = A, O.scroll = E ? E.time.bind(E) : N, se = N(), O.vars = r, i = i || r.animation, "refreshPriority" in r && (V0 = 1, r.refreshPriority === -9999 && (zo = O)), $.tweenScroll = $.tweenScroll || {
          top: Hp(A, pt),
          left: Hp(A, Kt)
        }, O.tweenTo = X = $.tweenScroll[P.p], O.scrubDuration = function(Q) {
          pi = vo(Q) && Q, pi ? me ? me.duration(Q) : me = ee.to(i, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: !1,
            duration: pi,
            paused: !0,
            onComplete: function() {
              return b && b(O)
            }
          }) : (me && me.progress(1).kill(), me = 0)
        }, i && (i.vars.lazy = !1, i._initted && !O.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), O.animation = i.pause(), i.scrollTrigger = O, O.scrubDuration(u), at = 0, a || (a = i.vars.id)), m && ((!ki(m) || m.push) && (m = {
          snapTo: m
        }), "scrollBehavior" in $e.style && ee.set(z ? [$e, dn] : A, {
          scrollBehavior: "auto"
        }), we.forEach(function(Q) {
          return Lt(Q) && Q.target === (z ? Be.scrollingElement || dn : A) && (Q.smooth = !1)
        }), K = Lt(m.snapTo) ? m.snapTo : m.snapTo === "labels" ? RC(i) : m.snapTo === "labelsDirectional" ? AC(i) : m.directional !== !1 ? function(Q, ue) {
          return Sh(m.snapTo)(Q, Ot() - Ce < 500 ? 0 : ue.direction)
        } : ee.utils.snap(m.snapTo), Hn = m.duration || {
          min: .1,
          max: 2
        }, Hn = ki(Hn) ? Ho(Hn.min, Hn.max) : Ho(Hn, Hn), Fn = ee.delayedCall(m.delay || pi / 2 || .1, function() {
          var Q = N(),
            ue = Ot() - Ce < 500,
            oe = X.tween;
          if ((ue || Math.abs(O.getVelocity()) < 10) && !oe && !pc && ge !== Q) {
            var he = (Q - x) / j,
              yt = i && !D ? i.totalProgress() : he,
              Se = ue ? 0 : (yt - qn) / (Ot() - _o) * 1e3 || 0,
              tt = ee.utils.clamp(-he, 1 - he, rs(Se / 2) * Se / .185),
              kt = he + (m.inertia === !1 ? 0 : tt),
              Je, We, Le = m,
              Un = Le.onStart,
              Ve = Le.onInterrupt,
              on = Le.onComplete;
            if (Je = K(kt, O), vo(Je) || (Je = kt), We = Math.max(0, Math.round(x + Je * j)), Q <= k && Q >= x && We !== Q) {
              if (oe && !oe._initted && oe.data <= rs(We - Q)) return;
              m.inertia === !1 && (tt = Je - he), X(We, {
                duration: Hn(rs(Math.max(rs(kt - yt), rs(Je - yt)) * .185 / Se / .05 || 0)),
                ease: m.ease || "power3",
                data: rs(We - Q),
                onInterrupt: function() {
                  return Fn.restart(!0) && Ve && Ve(O)
                },
                onComplete: function() {
                  O.update(), ge = N(), i && !D && (me ? me.resetTo("totalProgress", Je, i._tTime / i._tDur) : i.progress(Je)), at = qn = i && !D ? i.totalProgress() : O.progress, v && v(O), on && on(O)
                }
              }, Q, tt * j, We - Q - tt * j), Un && Un(O, X.tween)
            }
          } else O.isActive && ge !== Q && Fn.restart(!0)
        }).pause()), a && (gu[a] = O), d = O.trigger = Qt(d || h !== !0 && h), yr = d && d._gsap && d._gsap.stRevert, yr && (yr = yr(O)), h = h === !0 ? d : Qt(h), an(l) && (l = {
          targets: d,
          className: l
        }), h && (p === !1 || p === Rn || (p = !p && h.parentNode && h.parentNode.style && An(h.parentNode).display === "flex" ? !1 : st), O.pin = h, W = ee.core.getCache(h), W.spacer ? U = W.pinState : (T && (T = Qt(T), T && !T.nodeType && (T = T.current || T.nativeElement), W.spacerIsNative = !!T, T && (W.spacerState = Kl(T))), W.spacer = J = T || Be.createElement("div"), J.classList.add("pin-spacer"), a && J.classList.add("pin-spacer-" + a), W.pinState = U = Kl(h)), r.force3D !== !1 && ee.set(h, {
          force3D: !0
        }), O.spacer = J = W.spacer, it = An(h), qe = it[p + P.os2], ne = ee.getProperty(h), ve = ee.quickSetter(h, P.a, ut), nf(h, J, it), q = Kl(h)), F) {
        Y = ki(F) ? Op(F, Mp) : Mp, S = Xl("scroller-start", a, A, P, Y, 0), H = Xl("scroller-end", a, A, P, Y, 0, S), ie = S["offset" + P.op.d2];
        var Js = Qt(si(A, "content") || A);
        M = this.markerStart = Xl("start", a, Js, P, Y, ie, 0, E), I = this.markerEnd = Xl("end", a, Js, P, Y, ie, 0, E), E && (Zi = ee.quickSetter([M, I], P.a, ut)), !G && !(hr.length && si(A, "fixedMarkers") === !0) && (PC(z ? $e : A), ee.set([S, H], {
          force3D: !0
        }), mt = ee.quickSetter(S, P.a, ut), mr = ee.quickSetter(H, P.a, ut))
      }
      if (E) {
        var pe = E.vars.onUpdate,
          ae = E.vars.onUpdateParams;
        E.eventCallback("onUpdate", function() {
          O.update(0, 0, 1), pe && pe.apply(E, ae || [])
        })
      }
      if (O.previous = function() {
          return ye[ye.indexOf(O) - 1]
        }, O.next = function() {
          return ye[ye.indexOf(O) + 1]
        }, O.revert = function(Q, ue) {
          if (!ue) return O.kill(!0);
          var oe = Q !== !1 || !O.enabled,
            he = At;
          oe !== O.isReverted && (oe && (Bn = Math.max(N(), O.scroll.rec || 0), Re = O.progress, gi = i && i.progress()), M && [M, I, S, H].forEach(function(yt) {
            return yt.style.display = oe ? "none" : "block"
          }), oe && (At = O, O.update(oe)), h && (!w || !O.isActive) && (oe ? NC(h, J, U) : nf(h, J, An(h), ke)), oe || O.update(oe), At = he, O.isReverted = oe)
        }, O.refresh = function(Q, ue, oe, he) {
          if (!((At || !O.enabled) && !ue)) {
            if (h && Q && Dn) {
              bt(t, "scrollEnd", ny);
              return
            }!Gt && re && re(O), At = O, X.tween && !oe && (X.tween.kill(), X.tween = 0), me && me.pause(), g && i && (i.revert({
              kill: !1
            }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(Ur) {
              return Ur.vars.immediateRender && Ur.render(0, !0, !0)
            }) : i.vars.immediateRender && i.render(0, !0, !0)), O.isReverted || O.revert(!0, !0), O._subPinOffset = !1;
            var yt = fe(),
              Se = Te(),
              tt = E ? E.duration() : cr(A, P),
              kt = j <= .01 || !j,
              Je = 0,
              We = he || 0,
              Le = ki(oe) ? oe.end : r.end,
              Un = r.endTrigger || d,
              Ve = ki(oe) ? oe.start : r.start || (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
              on = O.pinnedContainer = r.pinnedContainer && Qt(r.pinnedContainer, O),
              Jn = d && Math.max(0, ye.indexOf(O)) || 0,
              Tt = Jn,
              St, Pt, _i, xl, Rt, ct, Qn, _c, kh, Qs, Zn, Zs, Tl;
            for (F && ki(oe) && (Zs = ee.getProperty(S, P.p), Tl = ee.getProperty(H, P.p)); Tt-- > 0;) ct = ye[Tt], ct.end || ct.refresh(0, 1) || (At = O), Qn = ct.pin, Qn && (Qn === d || Qn === h || Qn === on) && !ct.isReverted && (Qs || (Qs = []), Qs.unshift(ct), ct.revert(!0, !0)), ct !== ye[Tt] && (Jn--, Tt--);
            for (Lt(Ve) && (Ve = Ve(O)), Ve = kp(Ve, "start", O), x = Lp(Ve, d, yt, P, N(), M, S, O, Se, Z, G, tt, E, O._startClamp && "_startClamp") || (h ? -.001 : 0), Lt(Le) && (Le = Le(O)), an(Le) && !Le.indexOf("+=") && (~Le.indexOf(" ") ? Le = (an(Ve) ? Ve.split(" ")[0] : "") + Le : (Je = ca(Le.substr(2), yt), Le = an(Ve) ? Ve : (E ? ee.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, x) : x) + Je, Un = d)), Le = kp(Le, "end", O), k = Math.max(x, Lp(Le || (Un ? "100% 0" : tt), Un, yt, P, N() + Je, I, H, O, Se, Z, G, tt, E, O._endClamp && "_endClamp")) || -.001, Je = 0, Tt = Jn; Tt--;) ct = ye[Tt] || {}, Qn = ct.pin, Qn && ct.start - ct._pinPush <= x && !E && ct.end > 0 && (St = ct.end - (O._startClamp ? Math.max(0, ct.start) : ct.start), (Qn === d && ct.start - ct._pinPush < x || Qn === on) && isNaN(Ve) && (Je += St * (1 - ct.progress)), Qn === h && (We += St));
            if (x += Je, k += Je, O._startClamp && (O._startClamp += Je), O._endClamp && !Gt && (O._endClamp = k || -.001, k = Math.min(k, cr(A, P))), j = k - x || (x -= .01) && .001, kt && (Re = ee.utils.clamp(0, 1, ee.utils.normalize(x, k, Bn))), O._pinPush = We, M && Je && (St = {}, St[P.a] = "+=" + Je, on && (St[P.p] = "-=" + N()), ee.set([M, I], St)), h && !(pu && O.end >= cr(A, P))) St = An(h), xl = P === pt, _i = N(), de = parseFloat(ne(P.a)) + We, !tt && k > 1 && (Zn = (z ? Be.scrollingElement || dn : A).style, Zn = {
              style: Zn,
              value: Zn["overflow" + P.a.toUpperCase()]
            }, z && An($e)["overflow" + P.a.toUpperCase()] !== "scroll" && (Zn.style["overflow" + P.a.toUpperCase()] = "scroll")), nf(h, J, St), q = Kl(h), Pt = Rr(h, !0), _c = G && fi(A, xl ? Kt : pt)(), p ? (ke = [p + P.os2, j + We + ut], ke.t = J, Tt = p === st ? Wa(h, P) + j + We : 0, Tt && (ke.push(P.d, Tt + ut), J.style.flexBasis !== "auto" && (J.style.flexBasis = Tt + ut)), Os(ke), on && ye.forEach(function(Ur) {
              Ur.pin === on && Ur.vars.pinSpacing !== !1 && (Ur._subPinOffset = !0)
            }), G && N(Bn)) : (Tt = Wa(h, P), Tt && J.style.flexBasis !== "auto" && (J.style.flexBasis = Tt + ut)), G && (Rt = {
              top: Pt.top + (xl ? _i - x : _c) + ut,
              left: Pt.left + (xl ? _c : _i - x) + ut,
              boxSizing: "border-box",
              position: "fixed"
            }, Rt[zi] = Rt["max" + Gs] = Math.ceil(Pt.width) + ut, Rt[Vi] = Rt["max" + Th] = Math.ceil(Pt.height) + ut, Rt[Rn] = Rt[Rn + jo] = Rt[Rn + Bo] = Rt[Rn + Wo] = Rt[Rn + Uo] = "0", Rt[st] = St[st], Rt[st + jo] = St[st + jo], Rt[st + Bo] = St[st + Bo], Rt[st + Wo] = St[st + Wo], Rt[st + Uo] = St[st + Uo], te = DC(U, Rt, w), Gt && N(0)), i ? (kh = i._initted, Jc(1), i.render(i.duration(), !0, !0), je = ne(P.a) - de + j + We, Ft = Math.abs(j - je) > 1, G && Ft && te.splice(te.length - 2, 2), i.render(0, !0, !0), kh || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Jc(0)) : je = j, Zn && (Zn.value ? Zn.style["overflow" + P.a.toUpperCase()] = Zn.value : Zn.style.removeProperty("overflow-" + P.a));
            else if (d && N() && !E)
              for (Pt = d.parentNode; Pt && Pt !== $e;) Pt._pinOffset && (x -= Pt._pinOffset, k -= Pt._pinOffset), Pt = Pt.parentNode;
            Qs && Qs.forEach(function(Ur) {
              return Ur.revert(!1, !0)
            }), O.start = x, O.end = k, se = _e = Gt ? Bn : N(), !E && !Gt && (se < Bn && N(Bn), O.scroll.rec = 0), O.revert(!1, !0), Ce = Ot(), Fn && (ge = -1, Fn.restart(!0)), At = 0, i && D && (i._initted || gi) && i.progress() !== gi && i.progress(gi || 0, !0).render(i.time(), !0, !0), (kt || Re !== O.progress || E || g || i && !i._initted) && (i && !D && (i._initted || Re || i.vars.immediateRender !== !1) && i.totalProgress(E && x < -.001 && !Re ? ee.utils.normalize(x, k, 0) : Re, !0), O.progress = kt || (se - x) / j === Re ? 0 : Re), h && p && (J._pinOffset = Math.round(O.progress * je)), me && me.invalidate(), isNaN(Zs) || (Zs -= ee.getProperty(S, P.p), Tl -= ee.getProperty(H, P.p), ql(S, P, Zs), ql(M, P, Zs - (he || 0)), ql(H, P, Tl), ql(I, P, Tl - (he || 0))), kt && !Gt && O.update(), c && !Gt && !V && (V = !0, c(O), V = !1)
          }
        }, O.getVelocity = function() {
          return (N() - _e) / (Ot() - _o) * 1e3 || 0
        }, O.endAnimation = function() {
          ao(O.callbackAnimation), i && (me ? me.progress(1) : i.paused() ? D || ao(i, O.direction < 0, 1) : ao(i, i.reversed()))
        }, O.labelToScroll = function(Q) {
          return i && i.labels && (x || O.refresh() || x) + i.labels[Q] / i.duration() * j || 0
        }, O.getTrailing = function(Q) {
          var ue = ye.indexOf(O),
            oe = O.direction > 0 ? ye.slice(0, ue).reverse() : ye.slice(ue + 1);
          return (an(Q) ? oe.filter(function(he) {
            return he.vars.preventOverlaps === Q
          }) : oe).filter(function(he) {
            return O.direction > 0 ? he.end <= x : he.start >= k
          })
        }, O.update = function(Q, ue, oe) {
          if (!(E && !oe && !Q)) {
            var he = Gt === !0 ? Bn : O.scroll(),
              yt = Q ? 0 : (he - x) / j,
              Se = yt < 0 ? 0 : yt > 1 ? 1 : yt || 0,
              tt = O.progress,
              kt, Je, We, Le, Un, Ve, on, Jn;
            if (ue && (_e = se, se = E ? N() : he, m && (qn = at, at = i && !D ? i.totalProgress() : Se)), y && h && !At && !Wl && Dn && (!Se && x < he + (he - _e) / (Ot() - _o) * y ? Se = 1e-4 : Se === 1 && k > he + (he - _e) / (Ot() - _o) * y && (Se = .9999)), Se !== tt && O.enabled) {
              if (kt = O.isActive = !!Se && Se < 1, Je = !!tt && tt < 1, Ve = kt !== Je, Un = Ve || !!Se != !!tt, O.direction = Se > tt ? 1 : -1, O.progress = Se, Un && !At && (We = Se && !tt ? 0 : Se === 1 ? 1 : tt === 1 ? 2 : 3, D && (Le = !Ve && B[We + 1] !== "none" && B[We + 1] || B[We], Jn = i && (Le === "complete" || Le === "reset" || Le in i))), C && (Ve || Jn) && (Jn || u || !i) && (Lt(C) ? C(O) : O.getTrailing(C).forEach(function(_i) {
                  return _i.endAnimation()
                })), D || (me && !At && !Wl ? (me._dp._time - me._start !== me._time && me.render(me._dp._time - me._start), me.resetTo ? me.resetTo("totalProgress", Se, i._tTime / i._tDur) : (me.vars.totalProgress = Se, me.invalidate().restart())) : i && i.totalProgress(Se, !!(At && (Ce || Q)))), h) {
                if (Q && p && (J.style[p + P.os2] = qe), !G) ve(yo(de + je * Se));
                else if (Un) {
                  if (on = !Q && Se > tt && k + 1 > he && he + 1 >= cr(A, P), w)
                    if (!Q && (kt || on)) {
                      var Tt = Rr(h, !0),
                        St = he - x;
                      Ip(h, $e, Tt.top + (P === pt ? St : 0) + ut, Tt.left + (P === pt ? 0 : St) + ut)
                    } else Ip(h, J);
                  Os(kt || on ? te : q), Ft && Se < 1 && kt || ve(de + (Se === 1 && !on ? je : 0))
                }
              }
              m && !X.tween && !At && !Wl && Fn.restart(!0), l && (Ve || _ && Se && (Se < 1 || !Qc)) && ul(l.targets).forEach(function(_i) {
                return _i.classList[kt || _ ? "add" : "remove"](l.className)
              }), o && !D && !Q && o(O), Un && !At ? (D && (Jn && (Le === "complete" ? i.pause().totalProgress(1) : Le === "reset" ? i.restart(!0).pause() : Le === "restart" ? i.restart(!0) : i[Le]()), o && o(O)), (Ve || !Qc) && (f && Ve && ef(O, f), L[We] && ef(O, L[We]), _ && (Se === 1 ? O.kill(!1, 1) : L[We] = 0), Ve || (We = Se === 1 ? 1 : 3, L[We] && ef(O, L[We]))), R && !kt && Math.abs(O.getVelocity()) > (vo(R) ? R : 2500) && (ao(O.callbackAnimation), me ? me.progress(1) : ao(i, Le === "reverse" ? 1 : !Se, 1))) : D && o && !At && o(O)
            }
            if (mr) {
              var Pt = E ? he / E.duration() * (E._caScrollDist || 0) : he;
              mt(Pt + (S._isFlipped ? 1 : 0)), mr(Pt)
            }
            Zi && Zi(-he / E.duration() * (E._caScrollDist || 0))
          }
        }, O.enable = function(Q, ue) {
          O.enabled || (O.enabled = !0, bt(A, "resize", bo), z || bt(A, "scroll", is), re && bt(t, "refreshInit", re), Q !== !1 && (O.progress = Re = 0, se = _e = ge = N()), ue !== !1 && O.refresh())
        }, O.getTween = function(Q) {
          return Q && X ? X.tween : me
        }, O.setPositions = function(Q, ue, oe, he) {
          if (E) {
            var yt = E.scrollTrigger,
              Se = E.duration(),
              tt = yt.end - yt.start;
            Q = yt.start + tt * Q / Se, ue = yt.start + tt * ue / Se
          }
          O.refresh(!1, !1, {
            start: Pp(Q, oe && !!O._startClamp),
            end: Pp(ue, oe && !!O._endClamp)
          }, he), O.update()
        }, O.adjustPinSpacing = function(Q) {
          if (ke && Q) {
            var ue = ke.indexOf(P.d) + 1;
            ke[ue] = parseFloat(ke[ue]) + Q + ut, ke[1] = parseFloat(ke[1]) + Q + ut, Os(ke)
          }
        }, O.disable = function(Q, ue) {
          if (Q !== !1 && O.revert(!0, !0), O.enabled && (O.enabled = O.isActive = !1, ue || me && me.pause(), Bn = 0, W && (W.uncache = 1), re && vt(t, "refreshInit", re), Fn && (Fn.pause(), X.tween && X.tween.kill() && (X.tween = 0)), !z)) {
            for (var oe = ye.length; oe--;)
              if (ye[oe].scroller === A && ye[oe] !== O) return;
            vt(A, "resize", bo), z || vt(A, "scroll", is)
          }
        }, O.kill = function(Q, ue) {
          O.disable(Q, ue), me && !ue && me.kill(), a && delete gu[a];
          var oe = ye.indexOf(O);
          oe >= 0 && ye.splice(oe, 1), oe === Vt && ua > 0 && Vt--, oe = 0, ye.forEach(function(he) {
            return he.scroller === O.scroller && (oe = 1)
          }), oe || Gt || (O.scroll.rec = 0), i && (i.scrollTrigger = null, Q && i.revert({
            kill: !1
          }), ue || i.kill()), M && [M, I, S, H].forEach(function(he) {
            return he.parentNode && he.parentNode.removeChild(he)
          }), zo === O && (zo = 0), h && (W && (W.uncache = 1), oe = 0, ye.forEach(function(he) {
            return he.pin === h && oe++
          }), oe || (W.spacer = 0)), r.onKill && r.onKill(O)
        }, ye.push(O), O.enable(!1, !1), yr && yr(O), i && i.add && !j) {
        var Ae = O.update;
        O.update = function() {
          O.update = Ae, we.cache++, x || k || O.refresh()
        }, ee.delayedCall(.01, O.update), j = .01, x = k = 0
      } else O.refresh();
      h && MC()
    }, t.register = function(r) {
      return us || (ee = r || q0(), K0() && window.document && t.enable(), us = mo), us
    }, t.defaults = function(r) {
      if (r)
        for (var i in r) Yl[i] = r[i];
      return Yl
    }, t.disable = function(r, i) {
      mo = 0, ye.forEach(function(o) {
        return o[i ? "kill" : "disable"](r)
      }), vt(be, "wheel", is), vt(Be, "scroll", is), clearInterval(jl), vt(Be, "touchcancel", ir), vt($e, "touchstart", ir), Vl(vt, Be, "pointerdown,touchstart,mousedown", Rp), Vl(vt, Be, "pointerup,touchend,mouseup", Ap), ja.kill(), zl(vt);
      for (var s = 0; s < we.length; s += 3) Gl(vt, we[s], we[s + 1]), Gl(vt, we[s], we[s + 2])
    }, t.enable = function() {
      if (be = window, Be = document, dn = Be.documentElement, $e = Be.body, ee && (ul = ee.utils.toArray, Ho = ee.utils.clamp, du = ee.core.context || ir, Jc = ee.core.suppressOverwrites || ir, vh = be.history.scrollRestoration || "auto", _u = be.pageYOffset || 0, ee.core.globals("ScrollTrigger", t), $e)) {
        mo = 1, As = document.createElement("div"), As.style.height = "100vh", As.style.position = "absolute", oy(), EC(), rt.register(ee), t.isTouch = rt.isTouch, Vr = rt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), hu = rt.isTouch === 1, bt(be, "wheel", is), yh = [be, Be, dn, $e], ee.matchMedia ? (t.matchMedia = function(f) {
          var c = ee.matchMedia(),
            u;
          for (u in f) c.add(u, f[u]);
          return c
        }, ee.addEventListener("matchMediaInit", function() {
          iy(), Eh()
        }), ee.addEventListener("matchMediaRevert", function() {
          return ry()
        }), ee.addEventListener("matchMedia", function() {
          Oi(0, 1), Ki("matchMedia")
        }), ee.matchMedia().add("(orientation: portrait)", function() {
          return tf(), tf
        })) : console.warn("Requires GSAP 3.11.0 or later"), tf(), bt(Be, "scroll", is);
        var r = $e.hasAttribute("style"),
          i = $e.style,
          s = i.borderTopStyle,
          o = ee.core.Animation.prototype,
          l, a;
        for (o.revert || Object.defineProperty(o, "revert", {
            value: function() {
              return this.time(-.01, !0)
            }
          }), i.borderTopStyle = "solid", l = Rr($e), pt.m = Math.round(l.top + pt.sc()) || 0, Kt.m = Math.round(l.left + Kt.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), r || ($e.setAttribute("style", ""), $e.removeAttribute("style")), jl = setInterval(Np, 250), ee.delayedCall(.5, function() {
            return Wl = 0
          }), bt(Be, "touchcancel", ir), bt($e, "touchstart", ir), Vl(bt, Be, "pointerdown,touchstart,mousedown", Rp), Vl(bt, Be, "pointerup,touchend,mouseup", Ap), uu = ee.utils.checkPrefix("transform"), ha.push(uu), us = Ot(), ja = ee.delayedCall(.2, Oi).pause(), hs = [Be, "visibilitychange", function() {
            var f = be.innerWidth,
              c = be.innerHeight;
            Be.hidden ? (Ep = f, Cp = c) : (Ep !== f || Cp !== c) && bo()
          }, Be, "DOMContentLoaded", Oi, be, "load", Oi, be, "resize", bo], zl(bt), ye.forEach(function(f) {
            return f.enable(0, 1)
          }), a = 0; a < we.length; a += 3) Gl(vt, we[a], we[a + 1]), Gl(vt, we[a], we[a + 2])
      }
    }, t.config = function(r) {
      "limitCallbacks" in r && (Qc = !!r.limitCallbacks);
      var i = r.syncInterval;
      i && clearInterval(jl) || (jl = i) && setInterval(Np, i), "ignoreMobileResize" in r && (hu = t.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (zl(vt) || zl(bt, r.autoRefreshEvents || "none"), G0 = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }, t.scrollerProxy = function(r, i) {
      var s = Qt(r),
        o = we.indexOf(s),
        l = Yi(s);
      ~o && we.splice(o, l ? 6 : 2), i && (l ? hr.unshift(be, i, $e, i, dn, i) : hr.unshift(s, i))
    }, t.clearMatchMedia = function(r) {
      ye.forEach(function(i) {
        return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
      })
    }, t.isInViewport = function(r, i, s) {
      var o = (an(r) ? Qt(r) : r).getBoundingClientRect(),
        l = o[s ? zi : Vi] * i || 0;
      return s ? o.right - l > 0 && o.left + l < be.innerWidth : o.bottom - l > 0 && o.top + l < be.innerHeight
    }, t.positionInViewport = function(r, i, s) {
      an(r) && (r = Qt(r));
      var o = r.getBoundingClientRect(),
        l = o[s ? zi : Vi],
        a = i == null ? l / 2 : i in za ? za[i] * l : ~i.indexOf("%") ? parseFloat(i) * l / 100 : parseFloat(i) || 0;
      return s ? (o.left + a) / be.innerWidth : (o.top + a) / be.innerHeight
    }, t.killAll = function(r) {
      if (ye.slice(0).forEach(function(s) {
          return s.vars.id !== "ScrollSmoother" && s.kill()
        }), r !== !0) {
        var i = Xi.killAll || [];
        Xi = {}, i.forEach(function(s) {
          return s()
        })
      }
    }, t
  })();
xe.version = "3.14.2";
xe.saveStyles = function(t) {
  return t ? ul(t).forEach(function(e) {
    if (e && e.style) {
      var n = ln.indexOf(e);
      n >= 0 && ln.splice(n, 5), ln.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ee.core.getCache(e), du())
    }
  }) : ln
};
xe.revert = function(t, e) {
  return Eh(!t, e)
};
xe.create = function(t, e) {
  return new xe(t, e)
};
xe.refresh = function(t) {
  return t ? bo(!0) : (us || xe.register()) && Oi(!0)
};
xe.update = function(t) {
  return ++we.cache && Dr(t === !0 ? 2 : 0)
};
xe.clearScrollMemory = sy;
xe.maxScroll = function(t, e) {
  return cr(t, e ? Kt : pt)
};
xe.getScrollFunc = function(t, e) {
  return fi(Qt(t), e ? Kt : pt)
};
xe.getById = function(t) {
  return gu[t]
};
xe.getAll = function() {
  return ye.filter(function(t) {
    return t.vars.id !== "ScrollSmoother"
  })
};
xe.isScrolling = function() {
  return !!Dn
};
xe.snapDirectional = Sh;
xe.addEventListener = function(t, e) {
  var n = Xi[t] || (Xi[t] = []);
  ~n.indexOf(e) || n.push(e)
};
xe.removeEventListener = function(t, e) {
  var n = Xi[t],
    r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1)
};
xe.batch = function(t, e) {
  var n = [],
    r = {},
    i = e.interval || .016,
    s = e.batchMax || 1e9,
    o = function(f, c) {
      var u = [],
        d = [],
        h = ee.delayedCall(i, function() {
          c(u, d), u = [], d = []
        }).pause();
      return function(p) {
        u.length || h.restart(!0), u.push(p.trigger), d.push(p), s <= u.length && h.progress(1)
      }
    },
    l;
  for (l in e) r[l] = l.substr(0, 2) === "on" && Lt(e[l]) && l !== "onRefreshInit" ? o(l, e[l]) : e[l];
  return Lt(s) && (s = s(), bt(xe, "refresh", function() {
    return s = e.batchMax()
  })), ul(t).forEach(function(a) {
    var f = {};
    for (l in r) f[l] = r[l];
    f.trigger = a, n.push(xe.create(f))
  }), n
};
var Fp = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
  },
  rf = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (rt.isTouch ? " pinch-zoom" : "") : "none", e === dn && t($e, n)
  },
  Jl = {
    auto: 1,
    scroll: 1
  },
  IC = function(e) {
    var n = e.event,
      r = e.target,
      i = e.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || ee.core.getCache(s),
      l = Ot(),
      a;
    if (!o._isScrollT || l - o._isScrollT > 2e3) {
      for (; s && s !== $e && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(Jl[(a = An(s)).overflowY] || Jl[a.overflowX]));) s = s.parentNode;
      o._isScroll = s && s !== r && !Yi(s) && (Jl[(a = An(s)).overflowY] || Jl[a.overflowX]), o._isScrollT = l
    }(o._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0)
  },
  ay = function(e, n, r, i) {
    return rt.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: i = i && IC,
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function() {
        return r && bt(Be, rt.eventTypes[0], Up, !1, !0)
      },
      onDisable: function() {
        return vt(Be, rt.eventTypes[0], Up, !0)
      }
    })
  },
  HC = /(input|label|select|textarea)/i,
  Bp, Up = function(e) {
    var n = HC.test(e.target.tagName);
    (n || Bp) && (e._gsapAllow = !0, Bp = n)
  },
  FC = function(e) {
    ki(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      l, a, f = Qt(e.target) || dn,
      c = ee.core.globals().ScrollSmoother,
      u = c && c.get(),
      d = Vr && (e.content && Qt(e.content) || u && e.content !== !1 && !u.smooth() && u.content()),
      h = fi(f, pt),
      p = fi(f, Kt),
      g = 1,
      y = (rt.isTouch && be.visualViewport ? be.visualViewport.scale * be.visualViewport.width : be.outerWidth) / be.innerWidth,
      b = 0,
      v = Lt(i) ? function() {
        return i(l)
      } : function() {
        return i || 2.8
      },
      _, m, w = ay(f, e.type, !0, s),
      T = function() {
        return m = !1
      },
      E = ir,
      R = ir,
      C = function() {
        a = cr(f, pt), R = Ho(Vr ? 1 : 0, a), r && (E = Ho(0, cr(f, Kt))), _ = Gi
      },
      P = function() {
        d._gsap.y = yo(parseFloat(d._gsap.y) + h.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", h.offset = h.cacheID = 0
      },
      D = function() {
        if (m) {
          requestAnimationFrame(T);
          var F = yo(l.deltaY / 2),
            Z = R(h.v - F);
          if (d && Z !== h.v + h.offset) {
            h.offset = Z - h.v;
            var O = yo((parseFloat(d && d._gsap.y) || 0) - h.offset);
            d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + O + ", 0, 1)", d._gsap.y = O + "px", h.cacheID = we.cache, Dr()
          }
          return !0
        }
        h.offset && P(), m = !0
      },
      A, $, z, G, L = function() {
        C(), A.isActive() && A.vars.scrollY > a && (h() > a ? A.progress(1) && h(a) : A.resetTo("scrollY", a))
      };
    return d && ee.set(d, {
      y: "+=0"
    }), e.ignoreCheck = function(B) {
      return Vr && B.type === "touchmove" && D() || g > 1.05 && B.type !== "touchstart" || l.isGesturing || B.touches && B.touches.length > 1
    }, e.onPress = function() {
      m = !1;
      var B = g;
      g = yo((be.visualViewport && be.visualViewport.scale || 1) / y), A.pause(), B !== g && rf(f, g > 1.01 ? !0 : r ? !1 : "x"), $ = p(), z = h(), C(), _ = Gi
    }, e.onRelease = e.onGestureStart = function(B, F) {
      if (h.offset && P(), !F) G.restart(!0);
      else {
        we.cache++;
        var Z = v(),
          O, re;
        r && (O = p(), re = O + Z * .05 * -B.velocityX / .227, Z *= Fp(p, O, re, cr(f, Kt)), A.vars.scrollX = E(re)), O = h(), re = O + Z * .05 * -B.velocityY / .227, Z *= Fp(h, O, re, cr(f, pt)), A.vars.scrollY = R(re), A.invalidate().duration(Z).play(.01), (Vr && A.vars.scrollY >= a || O >= a - 1) && ee.to({}, {
          onUpdate: L,
          duration: Z
        })
      }
      o && o(B)
    }, e.onWheel = function() {
      A._ts && A.pause(), Ot() - b > 1e3 && (_ = 0, b = Ot())
    }, e.onChange = function(B, F, Z, O, re) {
      if (Gi !== _ && C(), F && r && p(E(O[2] === F ? $ + (B.startX - B.x) : p() + F - O[1])), Z) {
        h.offset && P();
        var fe = re[2] === Z,
          Te = fe ? z + B.startY - B.y : h() + Z - re[1],
          ge = R(Te);
        fe && Te !== ge && (z += ge - Te), h(ge)
      }(Z || F) && Dr()
    }, e.onEnable = function() {
      rf(f, r ? !1 : "x"), xe.addEventListener("refresh", L), bt(be, "resize", L), h.smooth && (h.target.style.scrollBehavior = "auto", h.smooth = p.smooth = !1), w.enable()
    }, e.onDisable = function() {
      rf(f, !0), vt(be, "resize", L), xe.removeEventListener("refresh", L), w.kill()
    }, e.lockAxis = e.lockAxis !== !1, l = new rt(e), l.iOS = Vr, Vr && !h() && h(1), Vr && ee.ticker.add(ir), G = l._dc, A = ee.to(l, {
      ease: "power4",
      paused: !0,
      inherit: !1,
      scrollX: r ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: ly(h, h(), function() {
          return A.pause()
        })
      },
      onUpdate: Dr,
      onComplete: G.vars.onComplete
    }), l
  };
xe.sort = function(t) {
  if (Lt(t)) return ye.sort(t);
  var e = be.pageYOffset || 0;
  return xe.getAll().forEach(function(n) {
    return n._sortY = n.trigger ? e + n.trigger.getBoundingClientRect().top : n.start + be.innerHeight
  }), ye.sort(t || function(n, r) {
    return (n.vars.refreshPriority || 0) * -1e6 + (n.vars.containerAnimation ? 1e6 : n._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6)
  })
};
xe.observe = function(t) {
  return new rt(t)
};
xe.normalizeScroll = function(t) {
  if (typeof t > "u") return zt;
  if (t === !0 && zt) return zt.enable();
  if (t === !1) {
    zt && zt.kill(), zt = t;
    return
  }
  var e = t instanceof rt ? t : FC(t);
  return zt && zt.target === e.target && zt.kill(), Yi(e.target) && (zt = e), e
};
xe.core = {
  _getVelocityProp: cu,
  _inputObserver: ay,
  _scrollers: we,
  _proxies: hr,
  bridge: {
    ss: function() {
      Dn || Ki("scrollStart"), Dn = Ot()
    },
    ref: function() {
      return At
    }
  }
};
q0() && ee.registerPlugin(xe);
var fr, Ch, Va, cy, fy, jp, yu, uy, hy = function() {
    return typeof window < "u"
  },
  dy = function() {
    return fr || hy() && (fr = window.gsap) && fr.registerPlugin && fr
  },
  BC = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  sf = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
  },
  Pi = function(e) {
    return Math.round(e * 1e4) / 1e4
  },
  Nr = function(e) {
    return parseFloat(e) || 0
  },
  Wp = function(e, n) {
    var r = Nr(e);
    return ~e.indexOf("%") ? r / 100 * n : r
  },
  Ql = function(e, n) {
    return Nr(e.getAttribute(n))
  },
  pa = Math.sqrt,
  zp = function(e, n, r, i, s, o) {
    return pa(Math.pow((Nr(r) - Nr(e)) * s, 2) + Math.pow((Nr(i) - Nr(n)) * o, 2))
  },
  Vp = function(e) {
    return console.warn(e)
  },
  py = function(e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke"
  },
  UC = 1,
  jC = function(e, n, r) {
    var i = e.indexOf(" "),
      s, o;
    return i < 0 ? (s = r !== void 0 ? r + "" : e, o = e) : (s = e.substr(0, i), o = e.substr(i + 1)), s = Wp(s, n), o = Wp(o, n), s > o ? [o, s] : [s, o]
  },
  ga = function(e) {
    if (e = Ch(e)[0], !e) return 0;
    var n = e.tagName.toLowerCase(),
      r = e.style,
      i = 1,
      s = 1,
      o, l, a, f, c, u, d;
    py(e) && (s = e.getScreenCTM(), i = pa(s.a * s.a + s.b * s.b), s = pa(s.d * s.d + s.c * s.c));
    try {
      l = e.getBBox()
    } catch {
      Vp("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var h = l || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      p = h.x,
      g = h.y,
      y = h.width,
      b = h.height;
    if ((!l || !y && !b) && sf[n] && (y = Ql(e, sf[n][0]), b = Ql(e, sf[n][1]), n !== "rect" && n !== "line" && (y *= 2, b *= 2), n === "line" && (p = Ql(e, "x1"), g = Ql(e, "y1"), y = Math.abs(y - p), b = Math.abs(b - g))), n === "path") f = r.strokeDasharray, r.strokeDasharray = "none", o = e.getTotalLength() || 0, Pi(i) !== Pi(s) && !jp && (jp = 1) && Vp("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), o *= (i + s) / 2, r.strokeDasharray = f;
    else if (n === "rect") o = y * 2 * i + b * 2 * s;
    else if (n === "line") o = zp(p, g, p + y, g + b, i, s);
    else if (n === "polyline" || n === "polygon")
      for (a = e.getAttribute("points").match(BC) || [], n === "polygon" && a.push(a[0], a[1]), o = 0, c = 2; c < a.length; c += 2) o += zp(a[c - 2], a[c - 1], a[c], a[c + 1], i, s) || 0;
    else(n === "circle" || n === "ellipse") && (u = y / 2 * i, d = b / 2 * s, o = Math.PI * (3 * (u + d) - pa((3 * u + d) * (u + 3 * d))));
    return o || 0
  },
  Gp = function(e, n) {
    if (e = Ch(e)[0], !e) return [0, 0];
    n || (n = ga(e) + 1);
    var r = Va.getComputedStyle(e),
      i = r.strokeDasharray || "",
      s = Nr(r.strokeDashoffset),
      o = i.indexOf(",");
    return o < 0 && (o = i.indexOf(" ")), i = o < 0 ? n : Nr(i.substr(0, o)), i > n && (i = n), [-s || 0, i - s || 0]
  },
  Yp = function() {
    hy() && (Va = window, fy = fr = dy(), Ch = fr.utils.toArray, yu = fr.core.getStyleSaver, uy = fr.core.reverting || function() {}, cy = ((Va.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
  },
  gy = {
    version: "3.14.2",
    name: "drawSVG",
    register: function(e) {
      fr = e, Yp()
    },
    init: function(e, n, r, i, s) {
      if (!e.getBBox) return !1;
      fy || Yp();
      var o = ga(e),
        l, a, f;
      return this.styles = yu && yu(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = r, this._style = e.style, this._target = e, n + "" == "true" ? n = "0 100%" : n ? (n + "").indexOf(" ") === -1 && (n = "0 " + n) : n = "0 0", l = Gp(e, o), a = jC(n, o, l[0]), this._length = Pi(o), this._dash = Pi(l[1] - l[0]), this._offset = Pi(-l[0]), this._dashPT = this.add(this, "_dash", this._dash, Pi(a[1] - a[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, Pi(-a[0]), 0, 0, 0, 0, 0, 1), cy && (f = Va.getComputedStyle(e), f.strokeLinecap !== f.strokeLinejoin && (a = Nr(f.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", a, a + .01))), this._live = py(e) || ~(n + "").indexOf("live"), this._nowrap = ~(n + "").indexOf("nowrap"), this._props.push("drawSVG"), UC
    },
    render: function(e, n) {
      if (n.tween._time || !uy()) {
        var r = n._pt,
          i = n._style,
          s, o, l, a;
        if (r) {
          for (n._live && (s = ga(n._target), s !== n._length && (o = s / n._length, n._length = s, n._offsetPT && (n._offsetPT.s *= o, n._offsetPT.c *= o), n._dashPT ? (n._dashPT.s *= o, n._dashPT.c *= o) : n._dash *= o)); r;) r.r(e, r.d), r = r._next;
          l = n._dash || e && e !== 1 && 1e-4 || 0, s = n._length - l + .1, a = n._offset, l && a && l + Math.abs(a % n._length) > n._length - .05 && (a += a < 0 ? .005 : -.005) && (s += .005), i.strokeDashoffset = l ? a : a + .001, i.strokeDasharray = s < .1 ? "none" : l ? l + "px," + (n._nowrap ? 999999 : s) + "px" : "0px, 999999px"
        }
      } else n.styles.revert()
    },
    getLength: ga,
    getPosition: Gp
  };
dy() && fr.registerPlugin(gy);
let co, ss, Xp = typeof Symbol == "function" ? Symbol() : "_split",
  vu, WC = () => vu || vy.register(window.gsap),
  Kp = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter : 0,
  dl = t => typeof t == "string" ? dl(document.querySelectorAll(t)) : "length" in t ? Array.from(t).reduce((e, n) => (typeof n == "string" ? e.push(...dl(n)) : e.push(n), e), []) : [t],
  qp = t => dl(t).filter(e => e instanceof HTMLElement),
  bu = [],
  of = function() {},
  zC = {
    add: t => t()
  },
  VC = /\s+/g,
  Jp = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"),
  Ga = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  },
  GC = (t, e) => {
    for (; ++e < t.length && t[e] === Ga;);
    return t[e] || Ga
  },
  Qp = ({
    element: t,
    html: e,
    ariaL: n,
    ariaH: r
  }) => {
    t.innerHTML = e, n ? t.setAttribute("aria-label", n) : t.removeAttribute("aria-label"), r ? t.setAttribute("aria-hidden", r) : t.removeAttribute("aria-hidden")
  },
  Zp = (t, e) => {
    if (e) {
      let n = new Set(t.join("").match(e) || bu),
        r = t.length,
        i, s, o, l;
      if (n.size)
        for (; --r > -1;) {
          s = t[r];
          for (o of n)
            if (o.startsWith(s) && o.length > s.length) {
              for (i = 0, l = s; o.startsWith(l += t[r + ++i]) && l.length < o.length;);
              if (i && l.length === o.length) {
                t[r] = o, t.splice(r + 1, i);
                break
              }
            }
        }
    }
    return t
  },
  eg = t => window.getComputedStyle(t).display === "inline" && (t.style.display = "inline-block"),
  os = (t, e, n) => e.insertBefore(typeof t == "string" ? document.createTextNode(t) : t, n),
  wu = (t, e, n) => {
    let r = e[t + "sClass"] || "",
      {
        tag: i = "div",
        aria: s = "auto",
        propIndex: o = !1
      } = e,
      l = t === "line" ? "block" : "inline-block",
      a = r.indexOf("++") > -1,
      f = c => {
        let u = document.createElement(i),
          d = n.length + 1;
        return r && (u.className = r + (a ? " " + r + d : "")), o && u.style.setProperty("--" + t, d + ""), s !== "none" && u.setAttribute("aria-hidden", "true"), i !== "span" && (u.style.position = "relative", u.style.display = l), u.textContent = c, n.push(u), u
      };
    return a && (r = r.replace("++", "")), f.collection = n, f
  },
  YC = (t, e, n, r) => {
    let i = wu("line", n, r),
      s = window.getComputedStyle(t).textAlign || "left";
    return (o, l) => {
      let a = i("");
      for (a.style.textAlign = s, t.insertBefore(a, e[o]); o < l; o++) a.appendChild(e[o]);
      a.normalize()
    }
  },
  _y = (t, e, n, r, i, s, o, l, a, f) => {
    var c;
    let u = Array.from(t.childNodes),
      d = 0,
      {
        wordDelimiter: h,
        reduceWhiteSpace: p = !0,
        prepareText: g
      } = e,
      y = t.getBoundingClientRect(),
      b = y,
      v = !p && window.getComputedStyle(t).whiteSpace.substring(0, 3) === "pre",
      _ = 0,
      m = n.collection,
      w, T, E, R, C, P, D, A, $, z, G, L, B, F, Z, O, re, fe;
    for (typeof h == "object" ? (E = h.delimiter || h, T = h.replaceWith || "") : T = h === "" ? "" : h || " ", w = T !== " "; d < u.length; d++)
      if (R = u[d], R.nodeType === 3) {
        for (Z = R.textContent || "", p ? Z = Z.replace(VC, " ") : v && (Z = Z.replace(/\n/g, T + `
`)), g && (Z = g(Z, t)), R.textContent = Z, C = T || E ? Z.split(E || T) : Z.match(l) || bu, re = C[C.length - 1], A = w ? re.slice(-1) === " " : !re, re || C.pop(), b = y, D = w ? C[0].charAt(0) === " " : !C[0], D && os(" ", t, R), C[0] || C.shift(), Zp(C, a), s && f || (R.textContent = ""), $ = 1; $ <= C.length; $++)
          if (O = C[$ - 1], !p && v && O.charAt(0) === `
` && ((c = R.previousSibling) == null || c.remove(), os(document.createElement("br"), t, R), O = O.slice(1)), !p && O === "") os(T, t, R);
          else if (O === " ") t.insertBefore(document.createTextNode(" "), R);
        else {
          if (w && O.charAt(0) === " " && os(" ", t, R), _ && $ === 1 && !D && m.indexOf(_.parentNode) > -1 ? (P = m[m.length - 1], P.appendChild(document.createTextNode(r ? "" : O))) : (P = n(r ? "" : O), os(P, t, R), _ && $ === 1 && !D && P.insertBefore(_, P.firstChild)), r)
            for (G = Kp ? Zp([...Kp.segment(O)].map(Te => Te.segment), a) : O.match(l) || bu, fe = 0; fe < G.length; fe++) P.appendChild(G[fe] === " " ? document.createTextNode(" ") : r(G[fe]));
          if (s && f) {
            if (Z = R.textContent = Z.substring(O.length + 1, Z.length), z = P.getBoundingClientRect(), z.top > b.top && z.left <= b.left) {
              for (L = t.cloneNode(), B = t.childNodes[0]; B && B !== P;) F = B, B = B.nextSibling, L.appendChild(F);
              t.parentNode.insertBefore(L, t), i && eg(L)
            }
            b = z
          }($ < C.length || A) && os($ >= C.length ? " " : w && O.slice(-1) === " " ? " " + T : T, t, R)
        }
        t.removeChild(R), _ = 0
      } else R.nodeType === 1 && (o && o.indexOf(R) > -1 ? (m.indexOf(R.previousSibling) > -1 && m[m.length - 1].appendChild(R), _ = R) : (_y(R, e, n, r, i, s, o, l, a, !0), _ = 0), i && eg(R))
  };
const my = class yy {
  constructor(e, n) {
    this.isSplit = !1, WC(), this.elements = qp(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = n, this.elements.forEach(o => {
      var l;
      n.overwrite !== !1 && ((l = o[Xp]) == null || l._data.orig.filter(({
        element: a
      }) => a === o).forEach(Qp)), o[Xp] = this
    }), this._split = () => this.isSplit && this.split(this.vars);
    let r = [],
      i, s = () => {
        let o = r.length,
          l;
        for (; o--;) {
          l = r[o];
          let a = l.element.offsetWidth;
          if (a !== l.width) {
            l.width = a, this._split();
            return
          }
        }
      };
    this._data = {
      orig: r,
      obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
        clearTimeout(i), i = setTimeout(s, 200)
      })
    }, of(this), this.split(n)
  }
  split(e) {
    return (this._ctx || zC).add(() => {
      this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
      let {
        type: n = "chars,words,lines",
        aria: r = "auto",
        deepSlice: i = !0,
        smartWrap: s,
        onSplit: o,
        autoSplit: l = !1,
        specialChars: a,
        mask: f
      } = this.vars, c = n.indexOf("lines") > -1, u = n.indexOf("chars") > -1, d = n.indexOf("words") > -1, h = u && !d && !c, p = a && ("push" in a ? new RegExp("(?:" + a.join("|") + ")", "gu") : a), g = p ? new RegExp(p.source + "|" + Jp.source, "gu") : Jp, y = !!e.ignore && qp(e.ignore), {
        orig: b,
        animTime: v,
        obs: _
      } = this._data, m;
      (u || d || c) && (this.elements.forEach((w, T) => {
        b[T] = {
          element: w,
          html: w.innerHTML,
          ariaL: w.getAttribute("aria-label"),
          ariaH: w.getAttribute("aria-hidden")
        }, r === "auto" ? w.setAttribute("aria-label", (w.textContent || "").trim()) : r === "hidden" && w.setAttribute("aria-hidden", "true");
        let E = [],
          R = [],
          C = [],
          P = u ? wu("char", e, E) : null,
          D = wu("word", e, R),
          A, $, z, G;
        if (_y(w, e, D, P, h, i && (c || h), y, g, p, !1), c) {
          let L = dl(w.childNodes),
            B = YC(w, L, e, C),
            F, Z = [],
            O = 0,
            re = L.map(ge => ge.nodeType === 1 ? ge.getBoundingClientRect() : Ga),
            fe = Ga,
            Te;
          for (A = 0; A < L.length; A++) F = L[A], F.nodeType === 1 && (F.nodeName === "BR" ? ((!A || L[A - 1].nodeName !== "BR") && (Z.push(F), B(O, A + 1)), O = A + 1, fe = GC(re, A)) : (Te = re[A], A && Te.top > fe.top && Te.left < fe.left + fe.width - 1 && (B(O, A), O = A), fe = Te));
          O < A && B(O, A), Z.forEach(ge => {
            var Ce;
            return (Ce = ge.parentNode) == null ? void 0 : Ce.removeChild(ge)
          })
        }
        if (!d) {
          for (A = 0; A < R.length; A++)
            if ($ = R[A], u || !$.nextSibling || $.nextSibling.nodeType !== 3)
              if (s && !c) {
                for (z = document.createElement("span"), z.style.whiteSpace = "nowrap"; $.firstChild;) z.appendChild($.firstChild);
                $.replaceWith(z)
              } else $.replaceWith(...$.childNodes);
          else G = $.nextSibling, G && G.nodeType === 3 && (G.textContent = ($.textContent || "") + (G.textContent || ""), $.remove());
          R.length = 0, w.normalize()
        }
        this.lines.push(...C), this.words.push(...R), this.chars.push(...E)
      }), f && this[f] && this.masks.push(...this[f].map(w => {
        let T = w.cloneNode();
        return w.replaceWith(T), T.appendChild(w), w.className && (T.className = w.className.trim() + "-mask"), T.style.overflow = "clip", T
      }))), this.isSplit = !0, ss && c && (l ? ss.addEventListener("loadingdone", this._split) : ss.status === "loading" && console.warn("SplitText called before fonts loaded")), (m = o && o(this)) && m.totalTime && (this._data.anim = v ? m.totalTime(v) : m), c && l && this.elements.forEach((w, T) => {
        b[T].width = w.offsetWidth, _ && _.observe(w)
      })
    }), this
  }
  kill() {
    let {
      obs: e
    } = this._data;
    e && e.disconnect(), ss?.removeEventListener("loadingdone", this._split)
  }
  revert() {
    var e, n;
    if (this.isSplit) {
      let {
        orig: r,
        anim: i
      } = this._data;
      this.kill(), r.forEach(Qp), this.chars.length = this.words.length = this.lines.length = r.length = this.masks.length = 0, this.isSplit = !1, i && (this._data.animTime = i.totalTime(), i.revert()), (n = (e = this.vars).onRevert) == null || n.call(e, this)
    }
    return this
  }
  static create(e, n) {
    return new yy(e, n)
  }
  static register(e) {
    co = co || e || window.gsap, co && (dl = co.utils.toArray, of = co.core.context || of), !vu && window.innerWidth > 0 && (ss = document.fonts, vu = !0)
  }
};
my.version = "3.14.2";
let vy = my;
var xu = Ht.registerPlugin(ph) || Ht;
xu.core.Tween;
const XC = Sn(() => {
  eu.registerPlugin(xe, qs, wl, gy, vy, O0), eu.defaults({
    ease: "0.83, 0, 0.17, 1",
    duration: .6
  })
});
var tg = "1.3.18";

function by(t, e, n) {
  return Math.max(t, Math.min(e, n))
}

function KC(t, e, n) {
  return (1 - n) * t + n * e
}

function qC(t, e, n, r) {
  return KC(t, e, 1 - Math.exp(-n * r))
}

function JC(t, e) {
  return (t % e + e) % e
}
var QC = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(t) {
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += t;
      const n = by(0, this.currentTime / this.duration, 1);
      e = n >= 1;
      const r = e ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * r
    } else this.lerp ? (this.value = qC(this.value, this.to, this.lerp * 60, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0)) : (this.value = this.to, e = !0);
    e && this.stop(), this.onUpdate?.(this.value, e)
  }
  stop() {
    this.isRunning = !1
  }
  fromTo(t, e, {
    lerp: n,
    duration: r,
    easing: i,
    onStart: s,
    onUpdate: o
  }) {
    this.from = this.value = t, this.to = e, this.lerp = n, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, s?.(), this.onUpdate = o
  }
};

function ZC(t, e) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => {
      n = void 0, t.apply(this, r)
    }, e)
  }
}
var ek = class {
    constructor(t, e, {
      autoResize: n = !0,
      debounce: r = 250
    } = {}) {
      this.wrapper = t, this.content = e, n && (this.debouncedResize = ZC(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize)
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize()
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
    };
    onContentResize = () => {
      this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height
      }
    }
  },
  wy = class {
    events = {};
    emit(t, ...e) {
      const n = this.events[t] || [];
      for (let r = 0, i = n.length; r < i; r++) n[r]?.(...e)
    }
    on(t, e) {
      return this.events[t] ? this.events[t].push(e) : this.events[t] = [e], () => {
        this.events[t] = this.events[t]?.filter(n => e !== n)
      }
    }
    off(t, e) {
      this.events[t] = this.events[t]?.filter(n => e !== n)
    }
    destroy() {
      this.events = {}
    }
  },
  tk = 100 / 6,
  zr = {
    passive: !1
  };

function ng(t, e) {
  return t === 1 ? tk : t === 2 ? e : 1
}
var nk = class {
    constructor(t, e = {
      wheelMultiplier: 1,
      touchMultiplier: 1
    }) {
      this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, zr), this.element.addEventListener("touchstart", this.onTouchStart, zr), this.element.addEventListener("touchmove", this.onTouchMove, zr), this.element.addEventListener("touchend", this.onTouchEnd, zr)
    }
    touchStart = {
      x: 0,
      y: 0
    };
    lastDelta = {
      x: 0,
      y: 0
    };
    window = {
      width: 0,
      height: 0
    };
    emitter = new wy;
    on(t, e) {
      return this.emitter.on(t, e)
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, zr), this.element.removeEventListener("touchstart", this.onTouchStart, zr), this.element.removeEventListener("touchmove", this.onTouchMove, zr), this.element.removeEventListener("touchend", this.onTouchEnd, zr)
    }
    onTouchStart = t => {
      const {
        clientX: e,
        clientY: n
      } = t.targetTouches ? t.targetTouches[0] : t;
      this.touchStart.x = e, this.touchStart.y = n, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: t
      })
    };
    onTouchMove = t => {
      const {
        clientX: e,
        clientY: n
      } = t.targetTouches ? t.targetTouches[0] : t, r = -(e - this.touchStart.x) * this.options.touchMultiplier, i = -(n - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = e, this.touchStart.y = n, this.lastDelta = {
        x: r,
        y: i
      }, this.emitter.emit("scroll", {
        deltaX: r,
        deltaY: i,
        event: t
      })
    };
    onTouchEnd = t => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: t
      })
    };
    onWheel = t => {
      let {
        deltaX: e,
        deltaY: n,
        deltaMode: r
      } = t;
      const i = ng(r, this.window.width),
        s = ng(r, this.window.height);
      e *= i, n *= s, e *= this.options.wheelMultiplier, n *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: e,
        deltaY: n,
        event: t
      })
    };
    onWindowResize = () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  rg = t => Math.min(1, 1.001 - 2 ** (-10 * t)),
  rk = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    _rafId = null;
    isTouching;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new QC;
    emitter = new wy;
    dimensions;
    virtualScroll;
    constructor({
      wrapper: t = window,
      content: e = document.documentElement,
      eventsTarget: n = t,
      smoothWheel: r = !0,
      syncTouch: i = !1,
      syncTouchLerp: s = .075,
      touchInertiaExponent: o = 1.7,
      duration: l,
      easing: a,
      lerp: f = .1,
      infinite: c = !1,
      orientation: u = "vertical",
      gestureOrientation: d = u === "horizontal" ? "both" : "vertical",
      touchMultiplier: h = 1,
      wheelMultiplier: p = 1,
      autoResize: g = !0,
      prevent: y,
      virtualScroll: b,
      overscroll: v = !0,
      autoRaf: _ = !1,
      anchors: m = !1,
      autoToggle: w = !1,
      allowNestedScroll: T = !1,
      __experimental__naiveDimensions: E = !1,
      naiveDimensions: R = E,
      stopInertiaOnNavigate: C = !1
    } = {}) {
      window.lenisVersion = tg, window.lenis || (window.lenis = {}), window.lenis.version = tg, u === "horizontal" && (window.lenis.horizontal = !0), (!t || t === document.documentElement) && (t = window), typeof l == "number" && typeof a != "function" ? a = rg : typeof a == "function" && typeof l != "number" && (l = 1), this.options = {
        wrapper: t,
        content: e,
        eventsTarget: n,
        smoothWheel: r,
        syncTouch: i,
        syncTouchLerp: s,
        touchInertiaExponent: o,
        duration: l,
        easing: a,
        lerp: f,
        infinite: c,
        gestureOrientation: d,
        orientation: u,
        touchMultiplier: h,
        wheelMultiplier: p,
        autoResize: g,
        prevent: y,
        virtualScroll: b,
        overscroll: v,
        autoRaf: _,
        anchors: m,
        autoToggle: w,
        allowNestedScroll: T,
        naiveDimensions: R,
        stopInertiaOnNavigate: C
      }, this.dimensions = new ek(t, e, {
        autoResize: g
      }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: !0
      }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new nk(n, {
        touchMultiplier: h,
        wheelMultiplier: p
      }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: !0
      }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId)
    }
    on(t, e) {
      return this.emitter.on(t, e)
    }
    off(t, e) {
      return this.emitter.off(t, e)
    }
    onScrollEnd = t => {
      t instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && t.stopPropagation()
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: {
          lenisScrollEnd: !0
        }
      }))
    };
    get overflow() {
      const t = this.isHorizontal ? "overflow-x" : "overflow-y";
      return getComputedStyle(this.rootElement)[t]
    }
    checkOverflow() {
      ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart()
    }
    onTransitionEnd = t => {
      t.propertyName.includes("overflow") && this.checkOverflow()
    };
    setScroll(t) {
      this.isHorizontal ? this.options.wrapper.scrollTo({
        left: t,
        behavior: "instant"
      }) : this.options.wrapper.scrollTo({
        top: t,
        behavior: "instant"
      })
    }
    onClick = t => {
      const n = t.composedPath().filter(r => r instanceof HTMLAnchorElement && r.getAttribute("href"));
      if (this.options.anchors) {
        const r = n.find(i => i.getAttribute("href")?.includes("#"));
        if (r) {
          const i = r.getAttribute("href");
          if (i) {
            const s = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0,
              o = `#${i.split("#")[1]}`;
            this.scrollTo(o, s)
          }
        }
      }
      this.options.stopInertiaOnNavigate && n.find(i => i.host === window.location.host) && this.reset()
    };
    onPointerDown = t => {
      t.button === 1 && this.reset()
    };
    onVirtualScroll = t => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(t) === !1) return;
      const {
        deltaX: e,
        deltaY: n,
        event: r
      } = t;
      if (this.emitter.emit("virtual-scroll", {
          deltaX: e,
          deltaY: n,
          event: r
        }), r.ctrlKey || r.lenisStopPropagation) return;
      const i = r.type.includes("touch"),
        s = r.type.includes("wheel");
      this.isTouching = r.type === "touchstart" || r.type === "touchmove";
      const o = e === 0 && n === 0;
      if (this.options.syncTouch && i && r.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return
      }
      const a = this.options.gestureOrientation === "vertical" && n === 0 || this.options.gestureOrientation === "horizontal" && e === 0;
      if (o || a) return;
      let f = r.composedPath();
      f = f.slice(0, f.indexOf(this.rootElement));
      const c = this.options.prevent,
        u = Math.abs(e) >= Math.abs(n) ? "horizontal" : "vertical";
      if (f.find(b => b instanceof HTMLElement && (typeof c == "function" && c?.(b) || b.hasAttribute?.("data-lenis-prevent") || u === "vertical" && b.hasAttribute?.("data-lenis-prevent-vertical") || u === "horizontal" && b.hasAttribute?.("data-lenis-prevent-horizontal") || i && b.hasAttribute?.("data-lenis-prevent-touch") || s && b.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(b, {
          deltaX: e,
          deltaY: n
        })))) return;
      if (this.isStopped || this.isLocked) {
        r.cancelable && r.preventDefault();
        return
      }
      if (!(this.options.syncTouch && i || this.options.smoothWheel && s)) {
        this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
        return
      }
      let h = n;
      this.options.gestureOrientation === "both" ? h = Math.abs(n) > Math.abs(e) ? n : e : this.options.gestureOrientation === "horizontal" && (h = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && n > 0 || this.animatedScroll === this.limit && n < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
      const p = i && this.options.syncTouch,
        y = i && r.type === "touchend";
      y && (h = Math.sign(this.velocity) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + h, {
        programmatic: !1,
        ...p ? {
          lerp: y ? this.options.syncTouchLerp : 1
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      })
    };
    resize() {
      this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
    }
    emit() {
      this.emitter.emit("scroll", this)
    }
    onNativeScroll = () => {
      if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = !1;
        return
      }
      if (this.isScrolling === !1 || this.isScrolling === "native") {
        const t = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
        }, 400))
      }
    };
    reset() {
      this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
    }
    start() {
      if (this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.removeProperty("overflow");
          return
        }
        this.internalStart()
      }
    }
    internalStart() {
      this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
    }
    stop() {
      if (!this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.setProperty("overflow", "clip");
          return
        }
        this.internalStop()
      }
    }
    internalStop() {
      this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
    }
    raf = t => {
      const e = t - (this.time || t);
      this.time = t, this.animate.advance(e * .001), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
    };
    scrollTo(t, {
      offset: e = 0,
      immediate: n = !1,
      lock: r = !1,
      programmatic: i = !0,
      lerp: s = i ? this.options.lerp : void 0,
      duration: o = i ? this.options.duration : void 0,
      easing: l = i ? this.options.easing : void 0,
      onStart: a,
      onComplete: f,
      force: c = !1,
      userData: u
    } = {}) {
      if ((this.isStopped || this.isLocked) && !c) return;
      let d = t,
        h = e;
      if (typeof d == "string" && ["top", "left", "start", "#"].includes(d)) d = 0;
      else if (typeof d == "string" && ["bottom", "right", "end"].includes(d)) d = this.limit;
      else {
        let p = null;
        if (typeof d == "string" ? (p = document.querySelector(d), p || (d === "#top" ? d = 0 : console.warn("Lenis: Target not found", d))) : d instanceof HTMLElement && d?.nodeType && (p = d), p) {
          if (this.options.wrapper !== window) {
            const y = this.rootElement.getBoundingClientRect();
            h -= this.isHorizontal ? y.left : y.top
          }
          const g = p.getBoundingClientRect();
          d = (this.isHorizontal ? g.left : g.top) + this.animatedScroll
        }
      }
      if (typeof d == "number") {
        if (d += h, d = Math.round(d), this.options.infinite) {
          if (i) {
            this.targetScroll = this.animatedScroll = this.scroll;
            const p = d - this.animatedScroll;
            p > this.limit / 2 ? d -= this.limit : p < -this.limit / 2 && (d += this.limit)
          }
        } else d = by(0, d, this.limit);
        if (d === this.targetScroll) {
          a?.(this), f?.(this);
          return
        }
        if (this.userData = u ?? {}, n) {
          this.animatedScroll = this.targetScroll = d, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), f?.(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent()
          });
          return
        }
        i || (this.targetScroll = d), typeof o == "number" && typeof l != "function" ? l = rg : typeof l == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, d, {
          duration: o,
          easing: l,
          lerp: s,
          onStart: () => {
            r && (this.isLocked = !0), this.isScrolling = "smooth", a?.(this)
          },
          onUpdate: (p, g) => {
            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = p - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = p, this.setScroll(this.scroll), i && (this.targetScroll = p), g || this.emit(), g && (this.reset(), this.emit(), f?.(this), this.userData = {}, requestAnimationFrame(() => {
              this.dispatchScrollendEvent()
            }), this.preventNextNativeScrollEvent())
          }
        })
      }
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1
      })
    }
    hasNestedScroll(t, {
      deltaX: e,
      deltaY: n
    }) {
      const r = Date.now();
      t._lenis || (t._lenis = {});
      const i = t._lenis;
      let s, o, l, a, f, c, u, d, h, p;
      if (r - (i.time ?? 0) > 2e3) {
        i.time = Date.now();
        const E = window.getComputedStyle(t);
        if (i.computedStyle = E, s = ["auto", "overlay", "scroll"].includes(E.overflowX), o = ["auto", "overlay", "scroll"].includes(E.overflowY), f = ["auto"].includes(E.overscrollBehaviorX), c = ["auto"].includes(E.overscrollBehaviorY), i.hasOverflowX = s, i.hasOverflowY = o, !(s || o)) return !1;
        u = t.scrollWidth, d = t.scrollHeight, h = t.clientWidth, p = t.clientHeight, l = u > h, a = d > p, i.isScrollableX = l, i.isScrollableY = a, i.scrollWidth = u, i.scrollHeight = d, i.clientWidth = h, i.clientHeight = p, i.hasOverscrollBehaviorX = f, i.hasOverscrollBehaviorY = c
      } else l = i.isScrollableX, a = i.isScrollableY, s = i.hasOverflowX, o = i.hasOverflowY, u = i.scrollWidth, d = i.scrollHeight, h = i.clientWidth, p = i.clientHeight, f = i.hasOverscrollBehaviorX, c = i.hasOverscrollBehaviorY;
      if (!(s && l || o && a)) return !1;
      const g = Math.abs(e) >= Math.abs(n) ? "horizontal" : "vertical";
      let y, b, v, _, m, w;
      if (g === "horizontal") y = Math.round(t.scrollLeft), b = u - h, v = e, _ = s, m = l, w = f;
      else if (g === "vertical") y = Math.round(t.scrollTop), b = d - p, v = n, _ = o, m = a, w = c;
      else return !1;
      return !w && (y >= b || y <= 0) ? !0 : (v > 0 ? y < b : y > 0) && _ && m
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
      return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal"
    }
    get actualScroll() {
      const t = this.options.wrapper;
      return this.isHorizontal ? t.scrollX ?? t.scrollLeft : t.scrollY ?? t.scrollTop
    }
    get scroll() {
      return this.options.infinite ? JC(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
      return this._isScrolling
    }
    set isScrolling(t) {
      this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
    }
    get isStopped() {
      return this._isStopped
    }
    set isStopped(t) {
      this._isStopped !== t && (this._isStopped = t, this.updateClassName())
    }
    get isLocked() {
      return this._isLocked
    }
    set isLocked(t) {
      this._isLocked !== t && (this._isLocked = t, this.updateClassName())
    }
    get isSmooth() {
      return this.isScrolling === "smooth"
    }
    get className() {
      let t = "lenis";
      return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isScrolling === "smooth" && (t += " lenis-smooth"), t
    }
    updateClassName() {
      this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
  };
const ik = "$s";

function wo(...t) {
  const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
  typeof t[0] != "string" && t.unshift(e);
  const [n, r] = t;
  if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
  const i = ik + n,
    s = wt(),
    o = Dg(s.payload.state, i);
  if (o.value === void 0 && r) {
    const l = r();
    if (lt(l)) return s.payload.state[i] = l, l;
    o.value = l
  }
  return o
}
const sk = Sn(() => {
    "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0);
    const t = wo("lenis", () => new rk({
      duration: 1.2,
      orientation: "vertical",
      smoothWheel: !0
    }));
    t.value.on("scroll", xe.update), xu.ticker.add(e => {
      t.value.raf(e * 1e3)
    }), xu.ticker.lagSmoothing(0), t.value.scrollTo(0, {
      immediate: !0
    }), t.value.stop()
  }),
  ok = Sn(() => {
    const {
      dev_mode: t
    } = oc().public;
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
  lk = [kx, Mx, rS, iS, sS, oS, aS, cS, hS, pS, XC, sk, ok],
  Zl = 14,
  ak = 1280,
  ck = hi({
    __name: "Cursor",
    setup(t) {
      const e = Ns(null);
      let n = null,
        r = 0,
        i = 0,
        s = 0,
        o = !1;
      const l = Array.from({
          length: Zl
        }, () => ({
          x: 0,
          y: 0
        })),
        a = () => {
          e.value && (e.value.width = innerWidth, e.value.height = innerHeight)
        },
        f = () => {
          if (!(!n || !e.value)) {
            if (n.clearRect(0, 0, e.value.width, e.value.height), o) {
              l.unshift({
                x: i,
                y: s
              }), l.length = Zl, n.lineCap = "round";
              for (let u = 1; u < l.length - 1; u++) {
                const d = l[u],
                  h = l[u - 1],
                  p = l[u + 1];
                n.lineWidth = 4 - u / Zl * 4, n.strokeStyle = `rgba(148, 104, 84, ${1-u/Zl})`, n.beginPath(), n.moveTo(h.x, h.y), n.quadraticCurveTo(d.x + .25 * (h.x - p.x), d.y + .25 * (h.y - p.y), d.x, d.y), n.stroke()
              }
            }
            r = requestAnimationFrame(f)
          }
        },
        c = u => {
          if (i = u.clientX, s = u.clientY, !o) {
            for (let d = 0; d < l.length; d++) l[d] = {
              x: i,
              y: s
            };
            o = !0
          }
        };
      return ml(() => {
        innerWidth < ak || !e.value || (n = e.value.getContext("2d"), a(), addEventListener("mousemove", c), addEventListener("resize", a), r = requestAnimationFrame(f))
      }), yl(() => {
        removeEventListener("mousemove", c), removeEventListener("resize", a), cancelAnimationFrame(r)
      }), (u, d) => (un(), Ji("canvas", {
        ref_key: "el",
        ref: e,
        class: "cursor-canvas"
      }, null, 512))
    }
  }),
  gc = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, i] of e) n[r] = i;
    return n
  },
  fk = gc(ck, [
    ["__scopeId", "data-v-117ff042"]
  ]),
  uk = Symbol.for("nuxt:client-only"),
  hk = hi({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(t, {
      slots: e,
      attrs: n
    }) {
      const r = $s(!1);
      ml(() => {
        r.value = !0
      });
      const i = Xs();
      return i && (i._nuxtClientOnly = !0), $i(uk, !0), () => {
        if (r.value) {
          const a = e.default?.();
          return a && a.length === 1 ? [gr(a[0], n)] : a
        }
        const s = e.fallback || e.placeholder;
        if (s) return mn(s);
        const o = t.fallback || t.placeholder || "",
          l = t.fallbackTag || t.placeholderTag || "span";
        return Ji(l, n, o)
      }
    }
  }),
  xy = (t = "RouteProvider") => hi({
    name: t,
    props: {
      route: {
        type: Object,
        required: !0
      },
      vnode: Object,
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean
    },
    setup(e) {
      const n = e.renderKey,
        r = e.route,
        i = {};
      for (const s in e.route) Object.defineProperty(i, s, {
        get: () => n === e.renderKey ? e.route[s] : r[s],
        enumerable: !0
      });
      return $i(lc, Ar(i)), () => e.vnode ? mn(e.vnode, {
        ref: e.vnodeRef
      }) : e.vnode
    }
  }),
  dk = xy(),
  ig = new WeakMap,
  pk = hi({
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
      const i = wt(),
        s = Ns(),
        o = $n(lc, null);
      let l;
      r({
        pageRef: s
      });
      const a = $n(Ew, null);
      let f;
      const c = i.deferHydration();
      let u = !1,
        d = 0;
      if (i.isHydrating) {
        const p = i.hooks.hookOnce("app:error", c);
        In().beforeEach(p)
      }
      t.pageKey && ws(() => t.pageKey, (p, g) => {
        p !== g && i.callHook("page:loading:start")
      });
      let h = !1;
      {
        const p = In().beforeResolve(() => {
          h = !1
        });
        yl(() => {
          p(), c()
        })
      }
      return () => mn(mm, {
        name: t.name,
        route: t.route,
        ...e
      }, {
        default: p => {
          const g = _k(o, p.route, p.Component),
            y = o && o.matched.length === p.route.matched.length;
          if (!p.Component) {
            if (f && !y) return f;
            c();
            return
          }
          if (f && a && !a.isCurrent(p.route)) return f;
          if (g && o && (!a || a?.isCurrent(o))) return y || f ? f : null;
          const b = Hf(p, t.pageKey),
            v = mk(o, p.route, p.Component);
          !i.isHydrating && l === b && !v && Yo(() => {
            h || (h = !0, i.callHook("page:loading:end"))
          }), u && l !== b && d++, l = b;
          const _ = !!(t.transition ?? p.route.meta.pageTransition ?? _d),
            m = _ && gk([t.transition, p.route.meta.pageTransition, _d, {
              onAfterLeave() {
                delete i._runningTransition, i.callHook("page:transition:finish", p.Component)
              }
            }]),
            w = t.keepalive ?? p.route.meta.keepalive ?? fw;
          return f = GT(_ && m, jT(w, mn(y_, {
            key: d,
            suspensible: !0,
            onPending: () => {
              u = !0, _ && (i._runningTransition = !0), i.callHook("page:start", p.Component)
            },
            onResolve: async () => {
              u = !1;
              try {
                await Yo(), i._route.sync?.(), await i.callHook("page:finish", p.Component), delete i._runningTransition, !h && !v && (h = !0, await i.callHook("page:loading:end"))
              } finally {
                c()
              }
            }
          }, {
            default: () => {
              const T = {
                key: b || void 0,
                vnode: n.default ? yk(n.default, p) : p.Component,
                route: p.route,
                renderKey: b || void 0,
                trackRootNodes: _,
                vnodeRef: s
              };
              if (!w) return mn(dk, T);
              const E = p.Component.type,
                R = E;
              let C = ig.get(R);
              return C || (C = xy(E.name || E.__name), ig.set(R, C)), mn(C, T)
            }
          }))).default(), f
        }
      })
    }
  });

function gk(t) {
  const e = [];
  for (const n of t) n && e.push({
    ...n,
    onAfterLeave: n.onAfterLeave ? Xu(n.onAfterLeave) : void 0
  });
  return G_(...e)
}

function _k(t, e, n) {
  if (!t) return !1;
  const r = e.matched.findIndex(i => i.components?.default === n?.type);
  return !r || r === -1 ? !1 : e.matched.slice(0, r).some((i, s) => i.components?.default !== t.matched[s]?.components?.default) || n && Hf({
    route: e,
    Component: n
  }) !== Hf({
    route: t,
    Component: n
  })
}

function mk(t, e, n) {
  return t ? e.matched.findIndex(i => i.components?.default === n?.type) < e.matched.length - 1 : !1
}

function yk(t, e) {
  const n = t(e);
  return n.length === 1 ? mn(n[0]) : mn(fn, void 0, n)
}
const vk = hi({
    __name: "app",
    setup(t) {
      return wo("open-menu", () => !1), wo("header-black", () => !1), wo("open-form", () => !1), wo("was-header-black", () => !1), (e, n) => {
        const r = fk,
          i = hk,
          s = pk;
        return un(), Ji("div", null, [Ze(i, null, {
          default: Du(() => [Ze(r)]),
          _: 1
        }), Ze(s)])
      }
    }
  }),
  bk = {},
  wk = {
    class: "icon",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function xk(t, e) {
  return un(), Ji("svg", wk, [...e[0] || (e[0] = [sr("path", {
    d: "M8.78109 5.33327L5.20509 1.75726L6.14789 0.814453L11.3334 5.99993L6.14789 11.1853L5.20509 10.2425L8.78109 6.6666H0.666687V5.33327H8.78109Z",
    fill: "#0B0B0B"
  }, null, -1)])])
}
const Tk = gc(bk, [
    ["render", xk]
  ]),
  Sk = {
    class: "btn l1-bold"
  },
  Ek = {
    class: "btn-decor"
  },
  Ck = {
    class: "btn-wrap"
  },
  kk = {
    class: "btn-text"
  },
  Pk = {
    class: "btn-text"
  },
  Rk = hi({
    __name: "Button",
    props: {
      text: {},
      isBlack: {
        type: Boolean
      }
    },
    setup(t) {
      return (e, n) => {
        const r = Tk;
        return un(), Ji("div", {
          class: Ja(["animation-container", {
            black: t.isBlack
          }])
        }, [sr("div", Sk, [sr("div", Ek, [Ze(r)]), sr("div", Ck, [sr("div", kk, lf(t.text), 1), sr("div", Pk, lf(t.text), 1)])])], 2)
      }
    }
  }),
  Ak = gc(Rk, [
    ["__scopeId", "data-v-9ff88b5c"]
  ]),
  Ok = {},
  Mk = {
    class: "error-page"
  },
  Nk = {
    href: "/",
    class: "error-btn"
  };

function $k(t, e) {
  const n = Ak;
  return un(), Ji("section", Mk, [e[0] || (e[0] = sr("p", {
    class: "error-title"
  }, "404", -1)), sr("a", Nk, [Ze(n, {
    text: "Go Back Home"
  })])])
}
const Dk = gc(Ok, [
    ["render", $k],
    ["__scopeId", "data-v-543a314d"]
  ]),
  Lk = {
    key: 0
  },
  sg = {
    __name: "nuxt-root",
    setup(t) {
      const e = () => null,
        n = wt(),
        r = n.deferHydration();
      if (n.isHydrating) {
        const f = n.hooks.hookOnce("app:error", r);
        In().beforeEach(f)
      }
      const i = !1;
      $i(lc, Cw()), n.hooks.callHookWith(f => f.map(c => c()), "vue:setup");
      const s = ac(),
        o = !1,
        l = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
      Qg((f, c, u) => {
        if (n.hooks.callHook("vue:error", f, c, u).catch(d => console.error("[nuxt] Error in `vue:error` hook", d)), l.test(navigator.userAgent)) return n.hooks.callHook("app:error", f), console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, f), !1;
        if (K_(f) && (f.fatal || f.unhandled)) return n.runWithContext(() => Si(f)), !1
      });
      const a = !1;
      return (f, c) => (un(), as(y_, {
        onResolve: dt(r)
      }, {
        default: Du(() => [dt(o) ? (un(), Ji("div", Lk)) : dt(s) ? (un(), as(dt(Dk), {
          key: 1,
          error: dt(s)
        }, null, 8, ["error"])) : dt(a) ? (un(), as(dt(e), {
          key: 2,
          context: dt(a)
        }, null, 8, ["context"])) : dt(i) ? (un(), as(Lv(dt(i)), {
          key: 3
        })) : (un(), as(dt(vk), {
          key: 4
        }))]),
        _: 1
      }, 8, ["onResolve"]))
    }
  };
let og;
{
  let t;
  og = async function() {
    if (t) return t;
    const r = !!(window.__NUXT__?.serverRendered ?? document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true") ? nb(sg) : tb(sg),
      i = gw({
        vueApp: r
      });
    async function s(o) {
      await i.callHook("app:error", o), i.payload.error ||= Ii(o)
    }
    r.config.errorHandler = s, i.hook("app:suspense:resolve", () => {
      r.config.errorHandler === s && (r.config.errorHandler = void 0)
    });
    try {
      await yw(i, lk)
    } catch (o) {
      s(o)
    }
    try {
      await i.hooks.callHook("app:created", r), await i.hooks.callHook("app:beforeMount", r), r.mount(hw), await i.hooks.callHook("app:mounted", r), await Yo()
    } catch (o) {
      s(o)
    }
    return r
  }, t = og().catch(e => {
    throw console.error("Error while mounting app:", e), e
  })
}
export {
  Rw as $, Ik as A, lt as B, ws as C, ui as D, uf as E, fn as F, $n as G, Fk as H, $s as I, Xs as J, $i as K, g1 as L, Uk as M, Hk as N, Vk as O, hk as P, Tk as Q, Wk as R, vy as S, In as T, wt as U, Ku as V, Gd as W, Kk as X, Bk as Y, D_ as Z, gc as _, dt as a, Pw as a0, uS as a1, Xk as a2, Vd as a3, Ks as a4, H_ as a5, Yk as a6, Ab as a7, Pa as a8, oc as a9, Jg as aa, sr as b, Ji as c, hi as d, Yo as e, Ze as f, xu as g, Ak as h, ml as i, yl as j, jk as k, xe as l, S_ as m, Ja as n, un as o, j_ as p, zk as q, Ns as r, as as s, lf as t, wo as u, Lv as v, Du as w, mn as x, Dg as y, zn as z
};