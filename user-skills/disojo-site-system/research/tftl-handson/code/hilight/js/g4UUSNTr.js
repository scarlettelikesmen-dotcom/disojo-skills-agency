/* https://hilight.design/_nuxt/g4UUSNTr.js */
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./Dotpgq1I.js", "./DX7rj7S8.js", "./animateBase.CIMdQcWU.css", "./DWXer2Ri.js", "./LineProgress.CIkIIS3B.css", "./DwWBZSTG.js", "./VideoScroller.BPTAP_mc.css", "./B42LVb-8.js", "./hfYGQhmZ.js", "./Picture.Bc7qyD6A.css", "./Media.GvnLmOFX.css", "./DXxv28aS.js", "./Fjg1XfjS.js", "./V1AwDJuM.js", "./Close.BkO7nPBU.css", "./lKvBwyz6.js", "./Round.Z7CzyHXP.css", "./BNv4j3uM.js", "./vimeoEmbed.DV_69bPQ.css", "./eOO-uYdg.js", "./D-TN8p00.js", "./VideoPopup.Cy576jf1.css", "./Video.BuMP6e2H.css", "./C2pv1RTM.js", "./InstagramCarousel.Dq4tlV8M.css", "./C6yeEfUZ.js", "./Footer.DcBBJn0n.css", "./CgegnB1j.js", "./BzLCLO6P.js", "./Cta.Dm8h_Or6.css", "./4MnaQWY0.js", "./about.CcAlLA6-.css", "./oh4MWeJ7.js", "./ChFLHJTk.js", "./About2.uzha1oUf.css", "./BjmPVgMU.js", "./useFixedCursor.mjZ6MqAr.css", "./CqkleIqs.js", "./CJixzrIX.js", "./Wd33nOGN.js", "./Person.C5ELn9-8.css", "./Cta.nWRtQ2ch.css", "./index.Bc6MRFRQ.css", "./DvBWDu11.js", "./contact.C5gQZXBJ.css", "./DUatIWkU.js", "./BSHmQm8x.js", "./Cc_RQqID.js", "./17pA4_sX.js", "./index.DLrq-5xs.css", "./Cs2arAUn.js", "./DobHnbcs.js", "./Controls.C2qNNcoB.css", "./_slug_.B_9Mq8cy.css", "./DWtuQ7la.js", "./B8LeOgIb.js", "./Tabs.DoaawgjI.css", "./index.D91qomLk.css", "./CZbUQaTh.js", "./_slug_.DN8EQfjT.css", "./DFSjH_2t.js", "./812V_3Eq.js", "./Card.CkLabRjv.css", "./index.BaHYEhHm.css", "./DEY5gowE.js", "./index.C64GkbNM.css", "./BF4vdWh8.js", "./index.DqOZfEZB.css", "./Bty_ZAzj.js", "./_slug_.ahgL3h6S.css", "./DfGoBAVs.js", "./_slug_.DjQ_lqsk.css", "./D_E1KEPQ.js", "./thank_you__slug_.Di8bn-dX.css"]))) => i.map(i => d[i]);
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
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
/**
 * @vue/shared v3.5.44
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function xh(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return n => n in t
}
const $e = {},
  Rs = [],
  Gr = () => {},
  Ey = () => !1,
  Sl = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Tu = e => e.startsWith("onUpdate:"),
  It = Object.assign,
  Lh = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  },
  TA = Object.prototype.hasOwnProperty,
  ze = (e, t) => TA.call(e, t),
  fe = Array.isArray,
  Xi = e => Ko(e) === "[object Map]",
  No = e => Ko(e) === "[object Set]",
  eg = e => Ko(e) === "[object Date]",
  kA = e => Ko(e) === "[object RegExp]",
  _e = e => typeof e == "function",
  ot = e => typeof e == "string",
  Jn = e => typeof e == "symbol",
  qe = e => e !== null && typeof e == "object",
  Ph = e => (qe(e) || _e(e)) && _e(e.then) && _e(e.catch),
  Cy = Object.prototype.toString,
  Ko = e => Cy.call(e),
  RA = e => Ko(e).slice(8, -1),
  Ty = e => Ko(e) === "[object Object]",
  ku = e => ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Is = xh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Ru = e => {
    const t = Object.create(null);
    return (n => t[n] || (t[n] = e(n)))
  },
  xA = /-\w/g,
  hn = Ru(e => e.replace(xA, t => t.slice(1).toUpperCase())),
  LA = /\B([A-Z])/g,
  Oi = Ru(e => e.replace(LA, "-$1").toLowerCase()),
  xu = Ru(e => e.charAt(0).toUpperCase() + e.slice(1)),
  cf = Ru(e => e ? `on${xu(e)}` : ""),
  Yt = (e, t) => !Object.is(e, t),
  wo = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  ky = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n
    })
  },
  Oh = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
  },
  Ry = e => {
    const t = ot(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
  };
let tg;
const Lu = () => tg || (tg = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ih(e) {
  if (fe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        i = ot(r) ? MA(r) : Ih(r);
      if (i)
        for (const s in i) t[s] = i[s]
    }
    return t
  } else if (ot(e) || qe(e)) return e
}
const PA = /;(?![^(]*\))/g,
  OA = /:([^]+)/,
  IA = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;

function MA(e) {
  const t = {};
  return e.replace(IA, n => n.startsWith("/*") ? "" : n).split(PA).forEach(n => {
    if (n) {
      const r = n.split(OA);
      r.length > 1 && (t[r[0].trim()] = r[1].trim())
    }
  }), t
}

function Yn(e) {
  let t = "";
  if (ot(e)) t = e;
  else if (fe(e))
    for (let n = 0; n < e.length; n++) {
      const r = Yn(e[n]);
      r && (t += r + " ")
    } else if (qe(e))
      for (const n in e) e[n] && (t += n + " ");
  return t.trim()
}
const NA = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",
  DA = xh(NA);

function xy(e) {
  return !!e || e === ""
}

function FA(e, t, n) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let i = 0; r && i < e.length; i++) r = Yo(e[i], t[i], n);
  return r
}

function ng(e, t, n) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t),
    i = new Uint8Array(r.length);
  for (const s of e) {
    let o = -1;
    for (let a = 0; a < r.length; a++)
      if (!i[a] && Yo(s, r[a], n)) {
        o = a;
        break
      } if (o < 0) return !1;
    i[o] = 1
  }
  return !0
}

function BA(e, t, n) {
  let r = Xi(e),
    i = Xi(t);
  if (r || i || (r = No(e), i = No(t), r || i)) return r && i ? ng(e, t, n) : !1;
  const s = Object.keys(e).length,
    o = Object.keys(t).length;
  if (s !== o) return !1;
  for (const a in e) {
    const l = e.hasOwnProperty(a),
      c = t.hasOwnProperty(a);
    if (l && !c || !l && c || !Yo(e[a], t[a], n)) return !1
  }
  return String(e) === String(t)
}

function rg(e, t, n, r) {
  n || (n = [new Map, new Map]);
  const [i, s] = n;
  if (i.has(e) || s.has(t)) return i.get(e) === t && s.get(t) === e;
  i.set(e, t), s.set(t, e);
  const o = r(e, t, n);
  return i.delete(e), s.delete(t), o
}

function Yo(e, t, n) {
  if (e === t) return !0;
  let r = eg(e),
    i = eg(t);
  return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = Jn(e), i = Jn(t), r || i ? e === t : (r = fe(e), i = fe(t), r || i ? r && i ? rg(e, t, n, FA) : !1 : (r = qe(e), i = qe(t), r || i ? !r || !i ? !1 : rg(e, t, n, BA) : String(e) === String(t))))
}

function Ly(e, t) {
  return e.findIndex(n => Yo(n, t))
}
const Py = e => !!(e && e.__v_isRef === !0),
  Pt = e => ot(e) ? e : e == null ? "" : fe(e) || qe(e) && (e.toString === Cy || !_e(e.toString)) ? Py(e) ? Pt(e.value) : JSON.stringify(e, Oy, 2) : String(e),
  Oy = (e, t) => Py(t) ? Oy(e, t.value) : Xi(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, i], s) => (n[uf(r, s) + " =>"] = i, n), {})
  } : No(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => uf(n))
  } : Jn(t) ? uf(t) : qe(t) && !fe(t) && !Ty(t) ? String(t) : t,
  uf = (e, t = "") => {
    var n;
    return Jn(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
  };
/**
 * @vue/reactivity v3.5.44
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Bt;
class Iy {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Bt && (Bt.active ? (this.parent = Bt, this.index = (Bt.scopes || (Bt.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++) r[t].pause()
      }
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++) i[t].resume()
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++) r[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = Bt;
      try {
        return Bt = this, t()
      } finally {
        Bt = n
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Bt, Bt = this)
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Bt === this) Bt = this.prevScope;
      else {
        let t = Bt;
        for (; t;) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break
          }
          t = t.prevScope
        }
      }
      this.prevScope = void 0
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, r = i.length; n < r; n++) i[n].stop(!0);
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
      }
      this.parent = void 0
    }
  }
}

function Mh(e) {
  return new Iy(e)
}

function Js() {
  return Bt
}

function Do(e, t = !1) {
  Bt && Bt.cleanups.push(e)
}
let it;
const ff = new WeakSet;
class My {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Bt && (Bt.active ? Bt.effects.push(this) : this.flags &= -2)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ff.has(this) && (ff.delete(this), this.trigger()))
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Dy(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, ig(this), Fy(this);
    const t = it,
      n = kr;
    it = this, kr = !0;
    try {
      return this.fn()
    } finally {
      By(this), it = t, kr = n, this.flags &= -3
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Fh(t);
      this.deps = this.depsTail = void 0, ig(this), this.onStop && this.onStop(), this.flags &= -2
    }
  }
  trigger() {
    this.flags & 64 ? ff.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    ed(this) && this.run()
  }
  get dirty() {
    return ed(this)
  }
}
let Ny = 0,
  Pa, Oa;

function Dy(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Oa, Oa = e;
    return
  }
  e.next = Pa, Pa = e
}

function Nh() {
  Ny++
}

function Dh() {
  if (--Ny > 0) return;
  if (Oa) {
    let t = Oa;
    for (Oa = void 0; t;) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n
    }
  }
  let e;
  for (; Pa;) {
    let t = Pa;
    for (Pa = void 0; t;) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
        t.trigger()
      } catch (r) {
        e || (e = r)
      }
      t = n
    }
  }
  if (e) throw e
}

function Fy(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function By(e) {
  let t, n = e.depsTail,
    r = n;
  for (; r;) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Fh(r), UA(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i
  }
  e.deps = t, e.depsTail = n
}

function ed(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Uy(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty
}

function Uy(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ya) || (e.globalVersion = Ya, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ed(e)))) return;
  e.flags |= 2;
  const t = e.dep,
    n = it,
    r = kr;
  it = e, kr = !0;
  try {
    Fy(e);
    const i = e.fn(e._value);
    (t.version === 0 || Yt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++)
  } catch (i) {
    throw t.version++, i
  } finally {
    it = n, kr = r, By(e), e.flags &= -3
  }
}

function Fh(e, t = !1) {
  const {
    dep: n,
    prevSub: r,
    nextSub: i
  } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) Fh(s, !0)
  }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function UA(e) {
  const {
    prevDep: t,
    nextDep: n
  } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let kr = !0;
const Hy = [];

function Xr() {
  Hy.push(kr), kr = !1
}

function Qr() {
  const e = Hy.pop();
  kr = e === void 0 ? !0 : e
}

function ig(e) {
  const {
    cleanup: t
  } = e;
  if (e.cleanup = void 0, t) {
    const n = it;
    it = void 0;
    try {
      t()
    } finally {
      it = n
    }
  }
}
let Ya = 0;
class HA {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
  }
}
class Pu {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
  }
  track(t) {
    if (!it || !kr || it === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== it) n = this.activeLink = new HA(it, this), it.deps ? (n.prevDep = it.depsTail, it.depsTail.nextDep = n, it.depsTail = n) : it.deps = it.depsTail = n, Wy(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = it.depsTail, n.nextDep = void 0, it.depsTail.nextDep = n, it.depsTail = n, it.deps === n && (it.deps = r)
    }
    return n
  }
  trigger(t) {
    this.version++, Ya++, this.notify(t)
  }
  notify(t) {
    Nh();
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      Dh()
    }
  }
}

function Wy(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Wy(r)
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
  }
}
const Mc = new WeakMap,
  Ms = Symbol(""),
  td = Symbol(""),
  Xa = Symbol("");

function cn(e, t, n) {
  if (kr && it) {
    let r = Mc.get(e);
    r || Mc.set(e, r = new Map);
    let i = r.get(n);
    i || (r.set(n, i = new Pu), i.map = r, i.key = n), i.track()
  }
}

function hi(e, t, n, r, i, s) {
  const o = Mc.get(e);
  if (!o) {
    Ya++;
    return
  }
  const a = l => {
    l && l.trigger()
  };
  if (Nh(), t === "clear") o.forEach(a);
  else {
    const l = fe(e),
      c = l && ku(n);
    if (l && n === "length") {
      const u = Number(r);
      o.forEach((f, h) => {
        (h === "length" || h === Xa || !Jn(h) && h >= u) && a(f)
      })
    } else switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), c && a(o.get(Xa)), t) {
      case "add":
        l ? c && a(o.get("length")) : (a(o.get(Ms)), Xi(e) && a(o.get(td)));
        break;
      case "delete":
        l || (a(o.get(Ms)), Xi(e) && a(o.get(td)));
        break;
      case "set":
        Xi(e) && a(o.get(Ms));
        break
    }
  }
  Dh()
}

function WA(e, t) {
  const n = Mc.get(e);
  return n && n.get(t)
}

function ro(e) {
  const t = je(e);
  return t === e || (cn(t, "iterate", Xa), Xn(e)) ? t : Rr(e) ? wi(e) ? t.map(n => rs(dr(n))) : t.map(rs) : t.map(dr)
}

function Ou(e) {
  return cn(e = je(e), "iterate", Xa), e
}

function Wr(e, t) {
  return Rr(e) ? rs(wi(e) ? dr(t) : t) : dr(t)
}
const jA = {
  __proto__: null,
  [Symbol.iterator]() {
    return df(this, Symbol.iterator, e => Wr(this, e))
  },
  concat(...e) {
    return ro(this).concat(...e.map(t => fe(t) ? ro(t) : t))
  },
  entries() {
    return df(this, "entries", e => (e[1] = Wr(this, e[1]), e))
  },
  every(e, t) {
    return ii(this, "every", e, t, void 0, arguments)
  },
  filter(e, t) {
    return ii(this, "filter", e, t, n => n.map(r => Wr(this, r)), arguments)
  },
  find(e, t) {
    return ii(this, "find", e, t, n => Wr(this, n), arguments)
  },
  findIndex(e, t) {
    return ii(this, "findIndex", e, t, void 0, arguments)
  },
  findLast(e, t) {
    return ii(this, "findLast", e, t, n => Wr(this, n), arguments)
  },
  findLastIndex(e, t) {
    return ii(this, "findLastIndex", e, t, void 0, arguments)
  },
  forEach(e, t) {
    return ii(this, "forEach", e, t, void 0, arguments)
  },
  includes(...e) {
    return hf(this, "includes", e)
  },
  indexOf(...e) {
    return hf(this, "indexOf", e)
  },
  join(e) {
    return ro(this).join(e)
  },
  lastIndexOf(...e) {
    return hf(this, "lastIndexOf", e)
  },
  map(e, t) {
    return ii(this, "map", e, t, void 0, arguments)
  },
  pop() {
    return ia(this, "pop")
  },
  push(...e) {
    return ia(this, "push", e)
  },
  reduce(e, ...t) {
    return og(this, "reduce", e, t)
  },
  reduceRight(e, ...t) {
    return og(this, "reduceRight", e, t)
  },
  shift() {
    return ia(this, "shift")
  },
  some(e, t) {
    return ii(this, "some", e, t, void 0, arguments)
  },
  splice(...e) {
    return ia(this, "splice", e)
  },
  toReversed() {
    return ro(this).toReversed()
  },
  toSorted(e) {
    return ro(this).toSorted(e)
  },
  toSpliced(...e) {
    return ro(this).toSpliced(...e)
  },
  unshift(...e) {
    return ia(this, "unshift", e)
  },
  values() {
    return df(this, "values", e => Wr(this, e))
  }
};

function df(e, t, n) {
  const r = Ou(e),
    i = r[t],
    s = i.call(r);
  if (r !== e && !Xn(e)) {
    if (s[Symbol.toStringTag] === "Array Iterator") {
      const o = Object.create(Object.getPrototypeOf(s));
      return o.next = () => sg(s.next(), n), i !== jy[t] && Object.defineProperties(o, {
        return: {
          get() {
            const a = s.return;
            return typeof a == "function" ? a.bind(s) : a
          }
        },
        throw: {
          get() {
            const a = s.throw;
            return typeof a == "function" ? a.bind(s) : a
          }
        }
      }), o
    }
    s._next = s.next, s.next = () => sg(s._next(), n)
  }
  return s
}

function sg(e, t) {
  return e.done || (e.value = t(e.value)), e
}
const jy = Array.prototype;

function ii(e, t, n, r, i, s) {
  const o = Ou(e),
    a = o !== e && !Xn(e),
    l = o[t];
  if (l !== jy[t]) {
    const f = l.apply(e, s);
    return a ? dr(f) : f
  }
  let c = n;
  o !== e && (a ? c = function(f, h) {
    return n.call(this, Wr(e, f), h, e)
  } : n.length > 2 && (c = function(f, h) {
    return n.call(this, f, h, e)
  }));
  const u = l.call(o, c, r);
  return a && i ? i(u) : u
}

function og(e, t, n, r) {
  const i = Ou(e),
    s = i !== e && !Xn(e);
  let o = n,
    a = !1;
  i !== e && (s ? (a = r.length === 0, o = function(c, u, f) {
    return a && (a = !1, c = Wr(e, c)), n.call(this, c, Wr(e, u), f, e)
  }) : n.length > 3 && (o = function(c, u, f) {
    return n.call(this, c, u, f, e)
  }));
  const l = i[t](o, ...r);
  return a ? Wr(e, l) : l
}

function hf(e, t, n) {
  const r = je(e);
  cn(r, "iterate", Xa);
  const i = r[t](...n);
  return (i === -1 || i === !1) && Iu(n[0]) ? (n[0] = je(n[0]), r[t](...n)) : i
}

function ia(e, t, n = []) {
  Xr(), Nh();
  const r = je(e)[t].apply(e, n);
  return Dh(), Qr(), r
}
const $A = xh("__proto__,__v_isRef,__isVue"),
  $y = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Jn));

function VA(e) {
  Jn(e) || (e = String(e));
  const t = je(this);
  return cn(t, "has", e), t.hasOwnProperty(e)
}
class Vy {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly,
      s = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw") return r === (i ? s ? e1 : Ky : s ? Gy : qy).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = fe(t);
    if (!i) {
      let l;
      if (o && (l = jA[n])) return l;
      if (n === "hasOwnProperty") return VA
    }
    const a = Reflect.get(t, n, at(t) ? t : r);
    if ((Jn(n) ? $y.has(n) : $A(n)) || (i || cn(t, "get", n), s)) return a;
    if (at(a)) {
      const l = o && ku(n) ? a : a.value;
      return i && qe(l) ? rd(l) : l
    }
    return qe(a) ? i ? rd(a) : ni(a) : a
  }
}
class zy extends Vy {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = fe(t) && ku(n);
    if (!this._isShallow) {
      const c = Rr(s);
      if (!Xn(r) && !Rr(r) && (s = je(s), r = je(r)), !o && at(s) && !at(r)) return c || (s.value = r), !0
    }
    const a = o ? Number(n) < t.length : ze(t, n),
      l = Reflect.set(t, n, r, at(t) ? t : i);
    return t === je(i) && l && (a ? Yt(r, s) && hi(t, "set", n, r) : hi(t, "add", n, r)), l
  }
  deleteProperty(t, n) {
    const r = ze(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && hi(t, "delete", n, void 0), i
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Jn(n) || !$y.has(n)) && cn(t, "has", n), r
  }
  ownKeys(t) {
    return cn(t, "iterate", fe(t) ? "length" : Ms), Reflect.ownKeys(t)
  }
}
class zA extends Vy {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const qA = new zy,
  GA = new zA,
  KA = new zy(!0);
const nd = e => e,
  Il = e => Reflect.getPrototypeOf(e);

function YA(e, t, n) {
  return function(...r) {
    const i = this.__v_raw,
      s = je(i),
      o = Xi(s),
      a = e === "entries" || e === Symbol.iterator && o,
      l = e === "keys" && o,
      c = i[e](...r),
      u = n ? nd : t ? rs : dr;
    return !t && cn(s, "iterate", l ? td : Ms), It(Object.create(c), {
      next() {
        const {
          value: f,
          done: h
        } = c.next();
        return h ? {
          value: f,
          done: h
        } : {
          value: a ? [u(f[0]), u(f[1])] : u(f),
          done: h
        }
      }
    })
  }
}

function Ml(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this
  }
}

function XA(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw,
        o = je(s),
        a = je(i);
      e || (Yt(i, a) && cn(o, "get", i), cn(o, "get", a));
      const {
        has: l
      } = Il(o), c = t ? nd : e ? rs : dr;
      if (l.call(o, i)) return c(s.get(i));
      if (l.call(o, a)) return c(s.get(a));
      s !== o && s.get(i)
    },
    get size() {
      const i = this.__v_raw;
      return !e && cn(je(i), "iterate", Ms), i.size
    },
    has(i) {
      const s = this.__v_raw,
        o = je(s),
        a = je(i);
      return e || (Yt(i, a) && cn(o, "has", i), cn(o, "has", a)), i === a ? s.has(i) : s.has(i) || s.has(a)
    },
    forEach(i, s) {
      const o = this,
        a = o.__v_raw,
        l = je(a),
        c = t ? nd : e ? rs : dr;
      return !e && cn(l, "iterate", Ms), a.forEach((u, f) => i.call(s, c(u), c(f), o))
    }
  };
  return It(n, e ? {
    add: Ml("add"),
    set: Ml("set"),
    delete: Ml("delete"),
    clear: Ml("clear")
  } : {
    add(i) {
      const s = je(this),
        o = Il(s),
        a = je(i),
        l = !t && !Xn(i) && !Rr(i) ? a : i;
      return o.has.call(s, l) || Yt(i, l) && o.has.call(s, i) || Yt(a, l) && o.has.call(s, a) || (s.add(l), hi(s, "add", l, l)), this
    },
    set(i, s) {
      !t && !Xn(s) && !Rr(s) && (s = je(s));
      const o = je(this),
        {
          has: a,
          get: l
        } = Il(o);
      let c = a.call(o, i);
      c || (i = je(i), c = a.call(o, i));
      const u = l.call(o, i);
      return o.set(i, s), c ? Yt(s, u) && hi(o, "set", i, s) : hi(o, "add", i, s), this
    },
    delete(i) {
      const s = je(this),
        {
          has: o,
          get: a
        } = Il(s);
      let l = o.call(s, i);
      l || (i = je(i), l = o.call(s, i)), a && a.call(s, i);
      const c = s.delete(i);
      return l && hi(s, "delete", i, void 0), c
    },
    clear() {
      const i = je(this),
        s = i.size !== 0,
        o = i.clear();
      return s && hi(i, "clear", void 0, void 0), o
    }
  }), ["keys", "values", "entries", Symbol.iterator].forEach(i => {
    n[i] = YA(i, e, t)
  }), n
}

function Bh(e, t) {
  const n = XA(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(ze(n, i) && i in r ? n : r, i, s)
}
const QA = {
    get: Bh(!1, !1)
  },
  JA = {
    get: Bh(!1, !0)
  },
  ZA = {
    get: Bh(!0, !1)
  };
const qy = new WeakMap,
  Gy = new WeakMap,
  Ky = new WeakMap,
  e1 = new WeakMap;

function t1(e) {
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

function ni(e) {
  return Rr(e) ? e : Uh(e, !1, qA, QA, qy)
}

function mi(e) {
  return Uh(e, !1, KA, JA, Gy)
}

function rd(e) {
  return Uh(e, !0, GA, ZA, Ky)
}

function Uh(e, t, n, r, i) {
  if (!qe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
  const s = i.get(e);
  if (s) return s;
  const o = t1(RA(e));
  if (o === 0) return e;
  const a = new Proxy(e, o === 2 ? r : n);
  return i.set(e, a), a
}

function wi(e) {
  return Rr(e) ? wi(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Rr(e) {
  return !!(e && e.__v_isReadonly)
}

function Xn(e) {
  return !!(e && e.__v_isShallow)
}

function Iu(e) {
  return e ? !!e.__v_raw : !1
}

function je(e) {
  const t = e && e.__v_raw;
  return t ? je(t) : e
}

function n1(e) {
  return !ze(e, "__v_skip") && Object.isExtensible(e) && ky(e, "__v_skip", !0), e
}
const dr = e => qe(e) ? ni(e) : e,
  rs = e => qe(e) ? rd(e) : e;

function at(e) {
  return e ? e.__v_isRef === !0 : !1
}

function et(e) {
  return Yy(e, !1)
}

function Jr(e) {
  return Yy(e, !0)
}

function Yy(e, t) {
  return at(e) ? e : new r1(e, t)
}
class r1 {
  constructor(t, n) {
    this.dep = new Pu, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : je(t), this._value = n ? t : dr(t), this.__v_isShallow = n
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || Xn(t) || Rr(t);
    t = r ? t : je(t), Yt(t, n) && (this._rawValue = t, this._value = r ? t : dr(t), this.dep.trigger())
  }
}

function re(e) {
  return at(e) ? e.value : e
}

function Er(e) {
  return _e(e) ? e() : re(e)
}
const i1 = {
  get: (e, t, n) => t === "__v_raw" ? e : re(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return at(i) && !at(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r)
  }
};

function Xy(e) {
  return wi(e) ? e : new Proxy(e, i1)
}
class s1 {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Pu,
      {
        get: r,
        set: i
      } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = i
  }
  get value() {
    return this._value = this._get()
  }
  set value(t) {
    this._set(t)
  }
}

function Qy(e) {
  return new s1(e)
}
class o1 {
  constructor(t, n, r) {
    this._object = t, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._key = Jn(n) ? n : String(n), this._raw = je(t);
    let i = !0,
      s = t;
    if (!fe(t) || Jn(this._key) || !ku(this._key))
      do i = !Iu(s) || Xn(s); while (i && (s = s.__v_raw));
    this._shallow = i
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = re(t)), this._value = t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    if (this._shallow && at(this._raw[this._key])) {
      const n = this._object[this._key];
      if (at(n)) {
        n.value = t;
        return
      }
    }
    this._object[this._key] = t
  }
  get dep() {
    return WA(this._raw, this._key)
  }
}
class a1 {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
  }
  get value() {
    return this._value = this._getter()
  }
}

function Hh(e, t, n) {
  return at(e) ? e : _e(e) ? new a1(e) : qe(e) && arguments.length > 1 ? l1(e, t, n) : et(e)
}

function l1(e, t, n) {
  return new o1(e, t, n)
}
class c1 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Pu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ya - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && it !== this) return Dy(this, !0), !0
  }
  get value() {
    const t = this.dep.track();
    return Uy(this), t && (t.version = this.dep.version), this._value
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}

function u1(e, t, n = !1) {
  let r, i;
  return _e(e) ? r = e : (r = e.get, i = e.set), new c1(r, i, n)
}
const Nl = {},
  Nc = new WeakMap;
let ws;

function f1(e, t = !1, n = ws) {
  if (n) {
    let r = Nc.get(n);
    r || Nc.set(n, r = []), r.push(e)
  }
}

function d1(e, t, n = $e) {
  const {
    immediate: r,
    deep: i,
    once: s,
    scheduler: o,
    augmentJob: a,
    call: l
  } = n, c = b => i ? b : Xn(b) || i === !1 || i === 0 ? pi(b, 1) : pi(b);
  let u, f, h, d, g = !1,
    p = !1;
  if (at(e) ? (f = () => e.value, g = Xn(e)) : wi(e) ? (f = () => c(e), g = !0) : fe(e) ? (p = !0, g = e.some(b => wi(b) || Xn(b)), f = () => e.map(b => {
      if (at(b)) return b.value;
      if (wi(b)) return c(b);
      if (_e(b)) return l ? l(b, 2) : b()
    })) : _e(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (h) {
        Xr();
        try {
          h()
        } finally {
          Qr()
        }
      }
      const b = ws;
      ws = u;
      try {
        return l ? l(e, 3, [d]) : e(d)
      } finally {
        ws = b
      }
    } : f = Gr, t && i) {
    const b = f,
      w = i === !0 ? 1 / 0 : i;
    f = () => pi(b(), w)
  }
  const m = Js(),
    v = () => {
      u.stop(), m && m.active && Lh(m.effects, u)
    };
  if (s && t) {
    const b = t;
    t = (...w) => {
      try {
        return b(...w)
      } finally {
        v()
      }
    }
  }
  let y = p ? new Array(e.length).fill(Nl) : Nl;
  const _ = b => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const w = u.run();
        if (b || i || g || (p ? w.some((S, A) => Yt(S, y[A])) : Yt(w, y))) {
          const S = ws;
          Xr();
          try {
            h && h(), ws = u;
            const A = [w, y === Nl ? void 0 : p && y[0] === Nl ? [] : y, d];
            y = w, l ? l(t, 3, A) : t(...A)
          } finally {
            ws = S, Qr()
          }
        }
      } else u.run()
  };
  return a && a(_), u = new My(f), u.scheduler = o ? () => o(_, !1) : _, d = b => f1(b, !1, u), h = u.onStop = () => {
    const b = Nc.get(u);
    if (b) {
      if (l) l(b, 4);
      else
        for (const w of b) w();
      Nc.delete(u)
    }
  }, t ? r ? _(!0) : y = u.run() : o ? o(_.bind(null, !0), !0) : u.run(), v.pause = u.pause.bind(u), v.resume = u.resume.bind(u), v.stop = v, v
}

function pi(e, t = 1 / 0, n) {
  if (t <= 0 || !qe(e) || e.__v_skip || (n = n || new Map, (n.get(e) || 0) >= t)) return e;
  if (n.set(e, t), t--, at(e)) pi(e.value, t, n);
  else if (fe(e))
    for (let r = 0; r < e.length; r++) pi(e[r], t, n);
  else if (No(e) || Xi(e)) e.forEach(r => {
    pi(r, t, n)
  });
  else if (Ty(e)) {
    for (const r in e) pi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && pi(e[r], t, n)
  }
  return e
}
/**
 * @vue/runtime-core v3.5.44
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function El(e, t, n, r) {
  try {
    return r ? e(...r) : e()
  } catch (i) {
    Xo(i, t, n)
  }
}

function hr(e, t, n, r) {
  if (_e(e)) {
    const i = El(e, t, n, r);
    return i && Ph(i) && i.catch(s => {
      Xo(s, t, n)
    }), i
  }
  if (fe(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++) i.push(hr(e[s], t, n, r));
    return i
  }
}

function Xo(e, t, n, r = !0) {
  const i = t ? t.vnode : null,
    {
      errorHandler: s,
      throwUnhandledErrorInProduction: o
    } = t && t.appContext.config || $e;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a;) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1) return
      }
      a = a.parent
    }
    if (s) {
      Xr(), El(s, null, 10, [e, l, c]), Qr();
      return
    }
  }
  h1(e, n, i, r, o)
}

function h1(e, t, n, r = !0, i = !1) {
  if (i) throw e;
  console.error(e)
}
const An = [];
let wr = -1;
const jr = [];
let $i = null,
  fo = 0;
const Jy = Promise.resolve();
let Dc = null;

function ur(e) {
  const t = Dc || Jy;
  return e ? t.then(this ? e.bind(this) : e) : t
}

function p1(e) {
  let t = wr + 1,
    n = An.length;
  for (; t < n;) {
    const r = t + n >>> 1,
      i = An[r],
      s = Qa(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r
  }
  return t
}

function Wh(e) {
  if (!(e.flags & 1)) {
    const t = Qa(e),
      n = An[An.length - 1];
    !n || !(e.flags & 2) && t >= Qa(n) ? An.push(e) : An.splice(p1(t), 0, e), e.flags |= 1, Zy()
  }
}

function Zy() {
  Dc || (Dc = Jy.then(t0))
}

function Fc(e) {
  if (!fe(e)) $i && e.id === -1 ? $i.splice(fo + 1, 0, e) : e.flags & 1 || (jr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++) jr.push(e[t]);
  Zy()
}

function e0(e, t, n, r = wr + 1) {
  for (; r < An.length; r++) {
    const i = An[r];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid || t !== void 0 && !(i.id >= t)) continue;
      An.splice(r, 1), r = e ? r - 1 : wr, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2)
    }
  }
}

function Bc(e, t, n = 0) {
  if (jr.length) {
    let r = jr,
      i = 0;
    if (t) {
      r = [];
      for (let o = 0; o < jr.length; o++) {
        const a = jr[o];
        (a.i !== void 0 ? !a.i || a.i.uid < n : t.has(a)) ? jr[i++] = a: r.push(a)
      }
    }
    const s = [...new Set(r)].sort((o, a) => Qa(o) - Qa(a));
    if (jr.length = i, $i) {
      for (let o = 0; o < s.length; o++) $i.push(s[o]);
      return
    }
    for ($i = s, fo = 0; fo < $i.length; fo++) {
      const o = $i[fo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2
    }
    $i = null, fo = 0
  }
}
let pf = !1;

function g1(e, t) {
  if (pf) {
    e();
    return
  }
  const n = t === void 0 ? void 0 : new Set(jr);
  e(), pf = !0;
  try {
    e0(void 0, t), Bc(void 0, n, t)
  } finally {
    pf = !1
  }
}
const Qa = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function t0(e) {
  try {
    for (wr = 0; wr < An.length; wr++) {
      const t = An[wr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), El(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; wr < An.length; wr++) {
      const t = An[wr];
      t && (t.flags &= -2)
    }
    wr = -1, An.length = 0, Bc(), Dc = null, (An.length || jr.length) && t0()
  }
}
let Qt = null,
  n0 = null;

function Uc(e) {
  const t = Qt;
  return Qt = e, n0 = e && e.type.__scopeId || null, t
}

function Ao(e, t = Qt, n) {
  if (!t || e._n) return e;
  const r = (...i) => {
    r._d && Kc(-1);
    const s = Uc(t),
      o = Si.length;
    let a;
    try {
      a = e(...i)
    } finally {
      for (let l = Si.length; l > o; l--) Hu();
      Uc(s), r._d && Kc(1)
    }
    return a
  };
  return r._n = !0, r._c = !0, r._d = !0, r
}

function FF(e, t) {
  if (Qt === null) return e;
  const n = Wu(Qt),
    r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, a, l = $e] = t[i];
    s && (_e(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && pi(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }))
  }
  return e
}

function Br(e, t, n, r) {
  const i = e.dirs,
    s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[r];
    l && (Xr(), hr(l, n, 8, [e.el, a, e, t]), Qr())
  }
}

function Ns(e, t) {
  if (Xt) {
    let n = Xt.provides;
    const r = Xt.parent && Xt.parent.provides;
    r === n && (n = Xt.provides = Object.create(r)), n[e] = t
  }
}

function Zt(e, t, n = !1) {
  const r = Nn();
  if (r || Ds) {
    let i = Ds ? Ds._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && _e(t) ? t.call(r && r.proxy) : t
  }
}

function Mu() {
  return !!(Nn() || Ds)
}
const m1 = Symbol.for("v-scx"),
  _1 = () => Zt(m1);

function r0(e, t) {
  return Nu(e, null, t)
}

function y1(e, t) {
  return Nu(e, null, {
    flush: "sync"
  })
}

function Qe(e, t, n) {
  return Nu(e, t, n)
}

function Nu(e, t, n = $e) {
  const {
    immediate: r,
    deep: i,
    flush: s,
    once: o
  } = n, a = It({}, n), l = t && r || !t && s !== "post";
  let c;
  if (Ks) {
    if (s === "sync") {
      const d = _1();
      c = d.__watcherHandles || (d.__watcherHandles = [])
    } else if (!l) {
      const d = () => {};
      return d.stop = Gr, d.resume = Gr, d.pause = Gr, d
    }
  }
  const u = Xt;
  a.call = (d, g, p) => hr(d, u, g, p);
  let f = !1;
  s === "post" ? a.scheduler = d => {
    d.i = u, Rt(d, u && u.suspense)
  } : s !== "sync" && (f = !0, a.scheduler = (d, g) => {
    g ? d() : Wh(d)
  }), a.augmentJob = d => {
    t && (d.flags |= 4), f && (d.flags |= 2, u && (d.id = u.uid, d.i = u))
  };
  const h = d1(e, t, a);
  return Ks && (c ? c.push(h) : l && h()), h
}

function v1(e, t, n) {
  const r = this.proxy,
    i = ot(e) ? e.includes(".") ? i0(r, e) : () => r[e] : e.bind(r, r);
  let s;
  _e(t) ? s = t : (s = t.handler, n = t);
  const o = Qo(this),
    a = Nu(i, s.bind(r), n);
  return o(), a
}

function i0(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++) r = r[n[i]];
    return r
  }
}
const Wi = new WeakMap,
  s0 = Symbol("_vte"),
  Du = e => e.__isTeleport,
  Ts = e => e && (e.disabled || e.disabled === ""),
  b1 = e => e && (e.defer || e.defer === ""),
  ag = e => typeof SVGElement < "u" && e instanceof SVGElement,
  lg = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
  id = (e, t) => {
    const n = e && e.to;
    return ot(n) ? t ? t(n) : null : n
  },
  w1 = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, s, o, a, l, c) {
      const {
        mc: u,
        pc: f,
        pbc: h,
        o: {
          insert: d,
          querySelector: g,
          createText: p,
          createComment: m,
          parentNode: v
        }
      } = c, y = Ts(t.props);
      let {
        dynamicChildren: _
      } = t;
      const b = (A, L, T) => {
          A.shapeFlag & 16 && u(A.children, L, T, i, s, o, a, l)
        },
        w = (A = t) => {
          const L = Ts(A.props),
            T = A.target = id(A.props, g),
            O = sd(T, A, p, d);
          T && (o !== "svg" && ag(T) ? o = "svg" : o !== "mathml" && lg(T) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = new Set)).add(T), L || (b(A, T, O), va(A, !1)))
        },
        S = A => {
          const L = () => {
            if (Wi.get(A) === L) {
              if (Wi.delete(A), Ts(A.props)) {
                const T = v(A.el) || n;
                b(A, T, A.anchor), va(A, !0)
              }
              w(A)
            }
          };
          Wi.set(A, L), Rt(L, s)
        };
      if (e == null) {
        const A = t.el = p(""),
          L = t.anchor = p("");
        if (d(A, n, r), d(L, n, r), b1(t.props) || s && s.pendingBranch) {
          S(t);
          return
        }
        y && (b(t, n, L), va(t, !0)), w()
      } else {
        t.el = e.el;
        const A = t.anchor = e.anchor,
          L = Wi.get(e);
        if (L) {
          L.flags |= 8, Wi.delete(e), S(t);
          return
        }
        t.targetStart = e.targetStart;
        const T = t.target = e.target,
          O = t.targetAnchor = e.targetAnchor,
          B = Ts(e.props),
          P = B ? n : T,
          W = B ? A : O;
        if (o === "svg" || ag(T) ? o = "svg" : (o === "mathml" || lg(T)) && (o = "mathml"), _ ? (h(e.dynamicChildren, _, P, i, s, o, a), Jh(e, t, !0)) : l || f(e, t, P, W, i, s, o, a, !1), y) B ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Dl(t, n, A, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const G = id(t.props, g);
          G && (t.target = G, Dl(t, G, null, c, 0))
        } else B && Dl(t, T, O, c, 1);
        va(t, y)
      }
    },
    remove(e, t, n, {
      um: r,
      o: {
        remove: i
      }
    }, s) {
      const {
        shapeFlag: o,
        children: a,
        anchor: l,
        targetStart: c,
        targetAnchor: u,
        target: f,
        props: h
      } = e, d = Ts(h), g = s || !d, p = Wi.get(e);
      if (p && (p.flags |= 8, Wi.delete(e)), f && (i(c), i(u)), s && i(l), !p && (d || f) && o & 16)
        for (let m = 0; m < a.length; m++) {
          const v = a[m];
          r(v, t, n, g, !!v.dynamicChildren)
        }
    },
    move: Dl,
    hydrate: A1
  };

function Dl(e, t, n, {
  o: {
    insert: r
  },
  m: i
}, s = 2) {
  s === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
  const {
    el: o,
    anchor: a,
    shapeFlag: l,
    children: c,
    props: u
  } = e, f = s === 2;
  if (f && r(o, t, n), !Wi.has(e) && (!f || Ts(u)) && l & 16)
    for (let h = 0; h < c.length; h++) i(c[h], t, n, 2);
  f && r(a, t, n)
}

function A1(e, t, n, r, i, s, {
  o: {
    nextSibling: o,
    parentNode: a,
    querySelector: l,
    insert: c,
    createText: u
  }
}, f) {
  function h(m, v) {
    let y = v;
    for (; y;) {
      if (y && y.nodeType === 8) {
        if (y.data === "teleport start anchor") t.targetStart = y;
        else if (y.data === "teleport anchor") {
          t.targetAnchor = y, m._lpa = t.targetAnchor && o(t.targetAnchor);
          break
        }
      }
      y = o(y)
    }
  }

  function d(m, v) {
    v.anchor = f(o(m), v, a(m), n, r, i, s)
  }
  const g = t.target = id(t.props, l),
    p = Ts(t.props);
  if (g) {
    const m = g._lpa || g.firstChild;
    t.shapeFlag & 16 && (p ? (d(e, t), h(g, m), t.targetAnchor || sd(g, t, u, c, a(e) === g ? e : null)) : (t.anchor = o(e), h(g, m), t.targetAnchor || sd(g, t, u, c), f(m && o(m), t, g, n, r, i, s))), va(t, p)
  } else p && t.shapeFlag & 16 && (d(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor)
}
const S1 = w1;

function va(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut()
  }
}

function sd(e, t, n, r, i = null) {
  const s = t.targetStart = n(""),
    o = t.targetAnchor = n("");
  return s[s0] = o, e && (r(s, e, i), r(o, e, i)), o
}
const sr = Symbol("_leaveCb"),
  sa = Symbol("_enterCb");

function E1() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map
  };
  return Bn(() => {
    e.isMounted = !0
  }), Mi(() => {
    e.isUnmounting = !0
  }), e
}
const nr = [Function, Array],
  o0 = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: nr,
    onEnter: nr,
    onAfterEnter: nr,
    onEnterCancelled: nr,
    onBeforeLeave: nr,
    onLeave: nr,
    onAfterLeave: nr,
    onLeaveCancelled: nr,
    onBeforeAppear: nr,
    onAppear: nr,
    onAfterAppear: nr,
    onAppearCancelled: nr
  },
  C1 = {
    name: "BaseTransition",
    props: o0,
    setup(e, {
      slots: t
    }) {
      const n = Nn(),
        r = E1();
      return () => {
        const i = t.default && c0(t.default(), !0),
          s = i && i.length ? a0(i) : n.subTree ? En() : void 0;
        if (!s) return;
        const o = je(e),
          {
            mode: a
          } = o;
        if (r.isLeaving) return gf(s);
        const l = Hc(s);
        if (!l) return gf(s);
        let c = od(l, o, r, n, f => c = f);
        l.type !== St && qs(l, c);
        let u = n.subTree && Hc(n.subTree);
        if (u && u.type !== St && !Cr(u, l) && Ja(n.subTree)) {
          let f = od(u, o, r, n);
          if (qs(u, f), a === "out-in" && l.type !== St) return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, u = void 0
          }, gf(s);
          a === "in-out" && l.type !== St ? f.delayLeave = (h, d, g) => {
            const p = l0(r, u);
            p[String(u.key)] = u, h[sr] = () => {
              d(), h[sr] = void 0, delete c.delayedLeave, u = void 0
            }, c.delayedLeave = () => {
              g(), delete c.delayedLeave, u = void 0
            }
          } : u = void 0
        } else u && (u = void 0);
        return s
      }
    }
  };

function a0(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== St) {
        t = n;
        break
      }
  }
  return t
}
const T1 = C1;

function l0(e, t) {
  const {
    leavingVNodes: n
  } = e;
  let r = n.get(t.type);
  return r || (r = Object.create(null), n.set(t.type, r)), r
}

function od(e, t, n, r, i) {
  const {
    appear: s,
    mode: o,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: h,
    onLeave: d,
    onAfterLeave: g,
    onLeaveCancelled: p,
    onBeforeAppear: m,
    onAppear: v,
    onAfterAppear: y,
    onAppearCancelled: _
  } = t, b = String(e.key), w = l0(n, e), S = (T, O) => {
    T && hr(T, r, 9, O)
  }, A = (T, O) => {
    const B = O[1];
    S(T, O), fe(T) ? T.every(P => P.length <= 1) && B() : T.length <= 1 && B()
  }, L = {
    mode: o,
    persisted: a,
    beforeEnter(T) {
      let O = l;
      if (!n.isMounted)
        if (s) O = m || l;
        else return;
      T[sr] && T[sr](!0);
      const B = w[b];
      if (B && Cr(e, B)) {
        let P = B.el[sr];
        if (!P) {
          const W = Ja(B);
          P = W && W.el[sr]
        }
        P && P()
      }
      S(O, [T])
    },
    enter(T) {
      if (w[b] === e) return;
      let O = c,
        B = u,
        P = f;
      if (!n.isMounted)
        if (s) O = v || c, B = y || u, P = _ || f;
        else return;
      let W = !1;
      T[sa] = X => {
        W || (W = !0, X ? S(P, [T]) : S(B, [T]), L.delayedLeave && L.delayedLeave(), T[sa] = void 0)
      };
      const G = T[sa].bind(null, !1);
      O ? A(O, [T, G]) : G()
    },
    leave(T, O) {
      const B = String(e.key);
      if (T[sa] && T[sa](!0), n.isUnmounting) return O();
      S(h, [T]);
      let P = !1;
      T[sr] = G => {
        P || (P = !0, O(), G ? S(p, [T]) : S(g, [T]), T[sr] = void 0, w[B] === e && delete w[B])
      };
      const W = T[sr].bind(null, !1);
      w[B] = e, d ? A(d, [T, W]) : W()
    },
    clone(T) {
      const O = od(T, t, n, r, i);
      return i && i(O), O
    }
  };
  return L
}

function gf(e) {
  if (Cl(e)) return e = Zr(e), e.children = null, e
}

function Hc(e) {
  if (!Cl(e)) return Du(e.type) && e.children ? a0(e.children) : e;
  if (e.component) return e.component.subTree;
  const {
    shapeFlag: t,
    children: n
  } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && _e(n.default)) return n.default()
  }
}

function qs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    qs(Du(n.type) && Hc(n) || n, t)
  } else if (e.shapeFlag & 128) e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
  else if (e.transition = t, e.type === pt && fe(e.children)) {
    const n = Yh(e.children, !1);
    n && qs(n, t)
  }
}

function c0(e, t = !1, n) {
  let r = [],
    i = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === pt ? (o.patchFlag & 128 && i++, r = r.concat(c0(o.children, t, a))) : (t || o.type !== St) && r.push(a != null ? Zr(o, {
      key: a
    }) : o)
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r
}

function Ja(e) {
  if (e.component) return Ja(e.component.subTree);
  if (e.type === pt) {
    const t = fe(e.children) && Yh(e.children, !1);
    return t ? Ja(t) : void 0
  }
  if (e.type !== St) return e
}

function mt(e, t) {
  return _e(e) ? It({
    name: e.name
  }, t, {
    setup: e
  }) : e
}

function k1() {
  const e = Nn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}

function jh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function cg(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}
const Wc = new WeakMap;

function So(e, t, n, r, i = !1) {
  if (fe(e)) {
    e.forEach((p, m) => So(p, t && (fe(t) ? t[m] : t), n, r, i));
    return
  }
  if (Ai(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && So(e, t, n, r.component.subTree);
    return
  }
  const s = r.shapeFlag & 4 ? Wu(r.component) : r.el,
    o = i ? null : s,
    {
      i: a,
      r: l
    } = e,
    c = t && t.r,
    u = a.refs === $e ? a.refs = {} : a.refs,
    f = a.setupState,
    h = je(f),
    d = f === $e ? Ey : p => cg(u, p) ? !1 : ze(h, p),
    g = (p, m) => !(m && cg(u, m));
  if (c != null && c !== l) {
    if (ug(t), ot(c)) u[c] = null, d(c) && (f[c] = null);
    else if (at(c)) {
      const p = t;
      g(c, p.k) && (c.value = null), p.k && (u[p.k] = null)
    }
  }
  if (_e(l)) El(l, a, 12, [o, u]);
  else {
    const p = ot(l),
      m = at(l);
    if (p || m) {
      const v = () => {
        if (e.f) {
          const y = p ? d(l) ? f[l] : u[l] : g() || !e.k ? l.value : u[e.k];
          if (i) fe(y) && Lh(y, s);
          else if (fe(y)) y.includes(s) || y.push(s);
          else if (p) u[l] = [s], d(l) && (f[l] = u[l]);
          else {
            const _ = [s];
            g(l, e.k) && (l.value = _), e.k && (u[e.k] = _)
          }
        } else p ? (u[l] = o, d(l) && (f[l] = o)) : m && (g(l, e.k) && (l.value = o), e.k && (u[e.k] = o))
      };
      if (o) {
        const y = () => {
          v(), Wc.delete(e)
        };
        y.id = -1, Wc.set(e, y), Rt(y, n)
      } else ug(e), v()
    }
  }
}

function ug(e) {
  const t = Wc.get(e);
  t && (t.flags |= 8, Wc.delete(e))
}
let fg = !1;
const io = () => {
    fg || (console.error("Hydration completed but contains mismatches."), fg = !0)
  },
  R1 = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
  x1 = e => e.namespaceURI.includes("MathML"),
  Fl = e => {
    if (e.nodeType === 1) {
      if (R1(e)) return "svg";
      if (x1(e)) return "mathml"
    }
  },
  _o = e => e.nodeType === 8;

function L1(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: r,
      createText: i,
      nextSibling: s,
      parentNode: o,
      remove: a,
      insert: l,
      createComment: c
    }
  } = e, u = (_, b) => {
    if (!b.hasChildNodes()) {
      n(null, _, b), Bc(), b._vnode = _;
      return
    }
    f(b.firstChild, _, null, null, null), Bc(), b._vnode = _
  }, f = (_, b, w, S, A, L = !1) => {
    L = L || !!b.dynamicChildren;
    const T = _o(_) && _.data === "[",
      O = () => p(_, b, w, S, A, T),
      {
        type: B,
        ref: P,
        shapeFlag: W,
        patchFlag: G
      } = b;
    let X = _.nodeType;
    b.el = _, G === -2 && (L = !1, b.dynamicChildren = null);
    let H = null;
    switch (B) {
      case Qi:
        X !== 3 ? b.children === "" ? (l(b.el = i(""), o(_), _), H = _) : H = O() : (_.data !== b.children && (io(), _.data = b.children), H = s(_));
        break;
      case St:
        y(_) ? (H = s(_), v(b.el = _.content.firstChild, _, w)) : X !== 8 || T ? H = O() : H = s(_);
        break;
      case Co:
        if (T && (_ = s(_), X = _.nodeType), X === 1 || X === 3) {
          H = _;
          const q = !b.children.length;
          for (let K = 0; K < b.staticCount; K++) q && (b.children += H.nodeType === 1 ? H.outerHTML : H.data), K === b.staticCount - 1 && (b.anchor = H), H = s(H);
          return T ? s(H) : H
        } else O();
        break;
      case pt:
        T ? H = g(_, b, w, S, A, L) : H = O();
        break;
      default:
        if (W & 1)(X !== 1 || b.type.toLowerCase() !== _.tagName.toLowerCase()) && !y(_) ? H = O() : H = h(_, b, w, S, A, L);
        else if (W & 6) {
          b.slotScopeIds = A;
          const q = o(_);
          if (T ? H = m(_) : _o(_) && _.data === "teleport start" ? H = m(_, _.data, "teleport end") : H = s(_), t(b, q, null, w, S, Fl(q), L), (Ai(b) || b.component.asyncDep) && !b.component.subTree) {
            let K;
            T ? (K = we(Co), K.anchor = H ? H.previousSibling : q.lastChild) : K = _.nodeType === 3 ? B0("") : we(_.nodeType === 8 ? St : "div"), K.el = _, b.component.subTree = K
          }
        } else W & 64 ? X !== 8 ? H = O() : H = b.type.hydrate(_, b, w, S, A, L, e, d) : W & 128 && (H = b.type.hydrate(_, b, w, S, Fl(o(_)), A, L, e, f))
    }
    return P != null && So(P, null, S, b), H
  }, h = (_, b, w, S, A, L) => {
    L = L || !!b.dynamicChildren;
    const {
      type: T,
      dynamicProps: O,
      props: B,
      patchFlag: P,
      shapeFlag: W,
      dirs: G,
      transition: X
    } = b, H = T === "input" || T === "option", q = !!O;
    if (H || q || P !== -1) {
      G && Br(b, null, w, "created");
      let K = !1;
      if (y(_)) {
        K = P0(null, X) && w && w.vnode.props && w.vnode.props.appear;
        const I = _.content.firstChild;
        if (K) {
          const ie = I.getAttribute("class");
          ie && (I.$cls = ie), X.beforeEnter(I)
        }
        v(I, _, w), b.el = _ = I
      }
      if (W & 16 && !(B && (B.innerHTML || B.textContent))) {
        let I = d(_.firstChild, b, _, w, S, A, L);
        for (I && !yc(_, 1) && io(); I;) {
          const ie = I;
          I = I.nextSibling, a(ie)
        }
      } else if (W & 8) {
        let I = b.children;
        I[0] === `
` && (_.tagName === "PRE" || _.tagName === "TEXTAREA") && (I = I.slice(1));
        const {
          textContent: ie
        } = _;
        ie !== I && ie !== I.replace(/\r\n|\r/g, `
`) && (yc(_, 0) || io(), _.textContent = b.children)
      }
      if (B) {
        if (H || q || !L || P & 48) {
          const I = _.tagName.includes("-"),
            ie = _.namespaceURI.includes("svg") ? "svg" : _.namespaceURI.includes("MathML") ? "mathml" : void 0;
          for (const ce in B)
            if (H && (ce.endsWith("value") || ce === "indeterminate") || Sl(ce) && !Is(ce) || ce[0] === "." || I && !Is(ce) || O && O.includes(ce)) {
              if (O1(_, ce, B[ce])) continue;
              r(_, ce, null, B[ce], ie, w)
            }
        } else if (B.onClick) r(_, "onClick", null, B.onClick, void 0, w);
        else if (P & 4 && wi(B.style))
          for (const I in B.style) B.style[I]
      }
      let Z;
      (Z = B && B.onVnodeBeforeMount) && Cn(Z, w, b), G && Br(b, null, w, "beforeMount"), ((Z = B && B.onVnodeMounted) || G || K) && N0(() => {
        Z && Cn(Z, w, b), K && X.enter(_), G && Br(b, null, w, "mounted")
      }, S)
    }
    return _.nextSibling
  }, d = (_, b, w, S, A, L, T) => {
    T = T || !!b.dynamicChildren;
    const O = b.children,
      B = O.length;
    let P = !1;
    for (let W = 0; W < B; W++) {
      const G = T ? O[W] : O[W] = $n(O[W]),
        X = G.type === Qi;
      _ ? (X && !T && W + 1 < B && $n(O[W + 1]).type === Qi && (l(i(_.data.slice(G.children.length)), w, s(_)), _.data = G.children), _ = f(_, G, S, A, L, T)) : X && !G.children ? l(G.el = i(""), w) : (P || (P = !0, yc(w, 1) || io()), n(null, G, w, null, S, A, Fl(w), L))
    }
    return _
  }, g = (_, b, w, S, A, L) => {
    const {
      slotScopeIds: T
    } = b;
    T && (A = A ? A.concat(T) : T);
    const O = o(_),
      B = d(s(_), b, O, w, S, A, L);
    return B && _o(B) && B.data === "]" ? s(b.anchor = B) : (io(), l(b.anchor = c("]"), O, B), B)
  }, p = (_, b, w, S, A, L) => {
    if (M1(_, b) || io(), b.el = null, L) {
      const B = m(_);
      for (;;) {
        const P = s(_);
        if (P && P !== B) a(P);
        else break
      }
    }
    const T = s(_),
      O = o(_);
    return a(_), n(null, b, O, T, w, S, Fl(O), A), w && (w.vnode.el = b.el, Uu(w, b.el)), T
  }, m = (_, b = "[", w = "]") => {
    let S = 0;
    for (; _;)
      if (_ = s(_), _ && _o(_) && (_.data === b && S++, _.data === w)) {
        if (S === 0) return s(_);
        S--
      } return _
  }, v = (_, b, w) => {
    const S = b.parentNode;
    S && S.replaceChild(_, b);
    let A = w;
    for (; A;) A.vnode.el === b && (A.vnode.el = A.subTree.el = _), A = A.parent
  }, y = _ => _.nodeType === 1 && _.tagName === "TEMPLATE";
  return [u, f]
}
const P1 = new Set(["src", "srcset", "href", "poster"]);

function O1(e, t, n) {
  return P1.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1
}
const jc = "data-allow-mismatch",
  I1 = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };

function yc(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(jc);) e = e.parentElement;
  return $h(e && e.getAttribute(jc), t)
}

function $h(e, t) {
  if (e == null) return !1;
  if (e === "") return !0;
  {
    const n = e.split(",");
    return t === 0 && n.includes("children") ? !0 : n.includes(I1[t])
  }
}

function M1(e, t) {
  return yc(e.parentElement, 1) || N1(e) || D1(t)
}

function N1(e) {
  return e.nodeType === 1 && $h(e.getAttribute(jc), 1)
}

function D1({
  props: e
}) {
  const t = e && e[jc];
  return typeof t == "string" && $h(t, 1)
}
Lu().requestIdleCallback;
Lu().cancelIdleCallback;

function F1(e, t) {
  if (_o(e) && e.data === "[") {
    let n = 1,
      r = e.nextSibling;
    for (; r;) {
      if (r.nodeType === 1) {
        if (t(r) === !1) break
      } else if (_o(r))
        if (r.data === "]") {
          if (--n === 0) break
        } else r.data === "[" && n++;
      r = r.nextSibling
    }
  } else t(e)
}
const Ai = e => !!e.type.__asyncLoader;

function Vh(e) {
  _e(e) && (e = {
    loader: e
  });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: i = 200,
    hydrate: s,
    timeout: o,
    suspensible: a = !0,
    onError: l
  } = e;
  let c = null,
    u, f = 0;
  const h = () => (f++, c = null, d()),
    d = () => {
      let g;
      return c || (g = c = t().catch(p => {
        if (p = p instanceof Error ? p : new Error(String(p)), l) return new Promise((m, v) => {
          l(p, () => m(h()), () => v(p), f + 1)
        });
        throw p
      }).then(p => g !== c && c ? c : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), u = p, p)))
    };
  return mt({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    __asyncHydrate(g, p, m) {
      const v = g.isConnected;
      let y = !1;
      (p.bu || (p.bu = [])).push(() => y = !0);
      const _ = () => {
          y || !g.parentNode || v && !g.isConnected || m()
        },
        b = s ? () => {
          const w = s(_, S => F1(g, S));
          w && (p.bum || (p.bum = [])).push(w)
        } : _;
      u ? b() : d().then(() => !p.isUnmounted && b())
    },
    get __asyncResolved() {
      return u
    },
    setup() {
      const g = Xt;
      if (jh(g), u) return () => Bl(u, g);
      const p = w => {
        c = null, Xo(w, g, 13, !r)
      };
      if (a && g.suspense || Ks) return d().then(w => () => Bl(w, g)).catch(w => (p(w), () => r ? we(r, {
        error: w
      }) : null));
      const m = et(!1),
        v = et(),
        y = et(!!i);
      let _, b;
      return Zs(() => {
        _ != null && clearTimeout(_), b != null && clearTimeout(b)
      }), i && (b = setTimeout(() => {
        g.isUnmounted || (y.value = !1)
      }, i)), o != null && (_ = setTimeout(() => {
        if (!g.isUnmounted && !m.value && !v.value) {
          const w = new Error(`Async component timed out after ${o}ms.`);
          p(w), v.value = w
        }
      }, o)), d().then(() => {
        g.isUnmounted || (m.value = !0, g.parent && Cl(g.parent.vnode) && g.parent.update())
      }).catch(w => {
        if (g.isUnmounted) {
          c = null;
          return
        }
        p(w), v.value = w
      }), () => {
        if (m.value && u) return Bl(u, g);
        if (v.value && r) return we(r, {
          error: v.value
        });
        if (n && !y.value) return Bl(n, g)
      }
    }
  })
}

function Bl(e, t) {
  const {
    ref: n,
    props: r,
    children: i,
    ce: s
  } = t.vnode, o = we(e, r, i);
  return o.ref = n, o.ce = s, delete t.vnode.ce, o
}
const Cl = e => e.type.__isKeepAlive,
  B1 = {
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
      const n = Nn(),
        r = n.ctx;
      if (!r.renderer) return () => {
        const y = t.default && t.default();
        return y && y.length === 1 ? y[0] : y
      };
      const i = new Map,
        s = new Set;
      let o = null;
      const a = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: u,
            o: {
              createElement: f
            }
          }
        } = r,
        h = f("div");
      r.activate = (y, _, b, w, S) => {
        const A = y.component;
        c(y, _, b, 0, a), l(A.vnode, y, _, b, A, a, w, y.slotScopeIds, S), Rt(() => {
          A.isDeactivated = !1, A.a && wo(A.a);
          const L = y.props && y.props.onVnodeMounted;
          L && Cn(L, A.parent, y)
        }, a)
      }, r.deactivate = y => {
        const _ = y.component;
        qc(_.m), qc(_.a), c(y, h, null, 1, a), Rt(() => {
          _.da && wo(_.da);
          const b = y.props && y.props.onVnodeUnmounted;
          b && Cn(b, _.parent, y), _.isDeactivated = !0
        }, a)
      };

      function d(y) {
        Ul(y), u(y, n, a, !0)
      }

      function g(y) {
        i.forEach((_, b) => {
          const w = pd(Ai(_) ? _.type.__asyncResolved || {} : _.type);
          w && !y(w) && p(b)
        })
      }

      function p(y) {
        const _ = i.get(y);
        _ && (!o || !Cr(_, o)) ? d(_) : o && (Ul(o), _ && Ul(_)), i.delete(y), s.delete(y)
      }
      Qe(() => [e.include, e.exclude], ([y, _]) => {
        y && g(b => ba(y, b)), _ && g(b => !ba(_, b))
      }, {
        flush: "post",
        deep: !0
      });
      let m = null;
      const v = () => {
        m != null && (Gc(n.subTree.type) ? Rt(() => {
          const y = Hl(n.subTree);
          y.component && i.set(m, y)
        }, n.subTree.suspense) : i.set(m, Hl(n.subTree)))
      };
      return Bn(v), d0(v), Mi(() => {
        i.forEach(y => {
          const {
            subTree: _,
            suspense: b
          } = n, w = Hl(_);
          if (y.type === w.type && y.key === w.key) {
            Ul(w);
            const S = w.component.da;
            S && Rt(S, b);
            return
          }
          d(y)
        })
      }), () => {
        if (m = null, !t.default) return o = null;
        const y = t.default(),
          _ = y[0];
        if (y.length > 1) return o = null, y;
        if (!Gs(_) || !(_.shapeFlag & 4) && !(_.shapeFlag & 128)) return o = null, _;
        let b = Hl(_);
        if (b.type === St) return o = null, b;
        const w = b.type,
          S = pd(Ai(b) ? b.type.__asyncResolved || {} : w),
          {
            include: A,
            exclude: L,
            max: T
          } = e;
        if (A && (!S || !ba(A, S)) || L && S && ba(L, S)) return b.shapeFlag &= -257, o = b, _;
        const O = b.key == null ? w : b.key,
          B = i.get(O);
        return b.el && (b = Zr(b), _.shapeFlag & 128 && (_.ssContent = b)), m = O, B ? (b.el = B.el, b.component = B.component, b.transition && qs(b, b.transition), b.shapeFlag |= 512, s.delete(O), s.add(O)) : (s.add(O), T && s.size > parseInt(T, 10) && p(s.values().next().value)), b.shapeFlag |= 256, o = b, Gc(_.type) ? _ : b
      }
    }
  },
  U1 = B1;

function ba(e, t) {
  return fe(e) ? e.some(n => ba(n, t)) : ot(e) ? e.split(",").includes(t) : kA(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function zh(e, t) {
  u0(e, "a", t)
}

function qh(e, t) {
  u0(e, "da", t)
}

function u0(e, t, n = Xt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i;) {
      if (i.isDeactivated) return;
      i = i.parent
    }
    return e()
  });
  if (Fu(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent;) Cl(i.parent.vnode) && H1(r, t, n, i), i = i.parent
  }
}

function H1(e, t, n, r) {
  const i = Fu(t, e, r, !0);
  Zs(() => {
    Lh(r[t], i)
  }, n)
}

function Ul(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Hl(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}

function Fu(e, t, n = Xt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      s = t.__weh || (t.__weh = (...o) => {
        Xr();
        const a = Qo(n),
          l = hr(t, n, e, o);
        return a(), Qr(), l
      });
    return r ? i.unshift(s) : i.push(s), s
  }
}
const Ii = e => (t, n = Xt) => {
    (!Ks || e === "sp") && Fu(e, (...r) => t(...r), n)
  },
  f0 = Ii("bm"),
  Bn = Ii("m"),
  W1 = Ii("bu"),
  d0 = Ii("u"),
  Mi = Ii("bum"),
  Zs = Ii("um"),
  j1 = Ii("sp"),
  $1 = Ii("rtg"),
  V1 = Ii("rtc");

function h0(e, t = Xt) {
  Fu("ec", e, t)
}
const Gh = "components",
  z1 = "directives";

function dg(e, t) {
  return Kh(Gh, e, !0, t) || e
}
const p0 = Symbol.for("v-ndc");

function q1(e) {
  return ot(e) ? Kh(Gh, e, !1) || e : e || p0
}

function BF(e) {
  return Kh(z1, e)
}

function Kh(e, t, n = !0, r = !1) {
  const i = Qt || Xt;
  if (i) {
    const s = i.type;
    if (e === Gh) {
      const a = pd(s, !1);
      if (a && (a === t || a === hn(t) || a === xu(hn(t)))) return s
    }
    const o = hg(i[e] || s[e], t) || hg(i.appContext[e], t);
    return !o && r ? s : o
  }
}

function hg(e, t) {
  return e && (e[t] || e[hn(t)] || e[xu(hn(t))])
}

function $c(e, t, n, r) {
  let i;
  const s = n,
    o = fe(e);
  if (o || ot(e)) {
    const a = o && wi(e);
    let l = !1,
      c = !1;
    a && (l = !Xn(e), c = Rr(e), e = Ou(e)), i = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++) i[u] = t(l ? c ? rs(dr(e[u])) : dr(e[u]) : e[u], u, void 0, s)
  } else if (typeof e == "number")
    if (!Number.isInteger(e) || e < 0) i = [];
    else {
      i = new Array(e);
      for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, s)
    }
  else if (qe(e))
    if (e[Symbol.iterator]) i = Array.from(e, (a, l) => t(a, l, void 0, s));
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        i[l] = t(e[u], u, l, s)
      }
    }
  else i = [];
  return i
}

function UF(e, t, n, r, i, s) {
  if (n == null && (n = {}), Qt.ce || Qt.parent && Ai(Qt.parent) && Qt.parent.ce) {
    const c = n,
      u = Object.keys(c).length > 0;
    return t !== "default" && (c.name = t), me(), Rn(pt, null, [we("slot", c, r)], u ? -2 : 64)
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const a = Si.length;
  me();
  let l;
  try {
    const c = o && g0(o(n)),
      u = n.key || s || c && c.key;
    l = Rn(pt, {
      key: (u && !Jn(u) ? u : `_${t}`) + (!c && r ? "_fb" : "")
    }, c || (r ? r() : []), c && e._ === 1 ? 64 : -2)
  } catch (c) {
    for (let u = Si.length; u > a; u--) Hu();
    throw c
  } finally {
    o && o._c && (o._d = !0)
  }
  return l
}

function g0(e) {
  return e.some(t => Gs(t) ? !(t.type === St || t.type === pt && !g0(t.children)) : !0) ? e : null
}
const ad = e => e ? H0(e) ? Wu(e) : ad(e.parent) : null,
  Ia = It(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => ad(e.parent),
    $root: e => ad(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => _0(e),
    $forceUpdate: e => e.f || (e.f = () => {
      Wh(e.update)
    }),
    $nextTick: e => e.n || (e.n = ur.bind(e.proxy)),
    $watch: e => v1.bind(e)
  }),
  mf = (e, t) => e !== $e && !e.__isScriptSetup && ze(e, t),
  G1 = {
    get({
      _: e
    }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: i,
        props: s,
        accessCache: o,
        type: a,
        appContext: l
      } = e;
      if (t[0] !== "$") {
        const h = o[t];
        if (h !== void 0) switch (h) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t]
        } else {
          if (mf(r, t)) return o[t] = 1, r[t];
          if (i !== $e && ze(i, t)) return o[t] = 2, i[t];
          if (ze(s, t)) return o[t] = 3, s[t];
          if (n !== $e && ze(n, t)) return o[t] = 4, n[t];
          ld && (o[t] = 0)
        }
      }
      const c = Ia[t];
      let u, f;
      if (c) return t === "$attrs" && cn(e.attrs, "get", ""), c(e);
      if ((u = a.__cssModules) && (u = u[t])) return u;
      if (n !== $e && ze(n, t)) return o[t] = 4, n[t];
      if (f = l.config.globalProperties, ze(f, t)) return f[t]
    },
    set({
      _: e
    }, t, n) {
      const {
        data: r,
        setupState: i,
        ctx: s
      } = e;
      return mf(i, t) ? (i[t] = n, !0) : r !== $e && ze(r, t) ? (r[t] = n, !0) : ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0)
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: n,
        ctx: r,
        appContext: i,
        props: s,
        type: o
      }
    }, a) {
      let l;
      return !!(n[a] || e !== $e && a[0] !== "$" && ze(e, a) || mf(t, a) || ze(s, a) || ze(r, a) || ze(Ia, a) || ze(i.config.globalProperties, a) || (l = o.__cssModules) && l[a])
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
  };

function Vc(e) {
  return fe(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function HF(e, t) {
  return !e || !t ? e || t : fe(e) && fe(t) ? e.concat(t) : It({}, Vc(e), Vc(t))
}

function K1(e) {
  const t = Nn(),
    n = Ks;
  let r = e();
  el(), n && Ji(!1);
  const i = () => {
      Qo(t), n && Ji(!0)
    },
    s = () => {
      Nn() !== t && t.scope.off(), el(), n && Ji(!1)
    };
  return Ph(r) && (r = r.catch(o => {
    throw i(), Promise.resolve().then(() => Promise.resolve().then(s)), o
  })), [r, () => {
    i(), Promise.resolve().then(s)
  }]
}
let ld = !0;

function Y1(e) {
  const t = _0(e),
    n = e.proxy,
    r = e.ctx;
  ld = !1, t.beforeCreate && pg(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: g,
    activated: p,
    deactivated: m,
    beforeDestroy: v,
    beforeUnmount: y,
    destroyed: _,
    unmounted: b,
    render: w,
    renderTracked: S,
    renderTriggered: A,
    errorCaptured: L,
    serverPrefetch: T,
    expose: O,
    inheritAttrs: B,
    components: P,
    directives: W,
    filters: G
  } = t;
  if (c && X1(c, r, null), o)
    for (const q in o) {
      const K = o[q];
      _e(K) && (r[q] = K.bind(n))
    }
  if (i) {
    const q = i.call(n, n);
    qe(q) && (e.data = ni(q))
  }
  if (ld = !0, s)
    for (const q in s) {
      const K = s[q],
        Z = _e(K) ? K.bind(n, n) : _e(K.get) ? K.get.bind(n, n) : Gr,
        I = !_e(K) && _e(K.set) ? K.set.bind(n) : Gr,
        ie = be({
          get: Z,
          set: I
        });
      Object.defineProperty(r, q, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: ce => ie.value = ce
      })
    }
  if (a)
    for (const q in a) m0(a[q], r, n, q);
  if (l) {
    const q = _e(l) ? l.call(n) : l;
    Reflect.ownKeys(q).forEach(K => {
      Ns(K, q[K])
    })
  }
  u && pg(u, e, "c");

  function H(q, K) {
    fe(K) ? K.forEach(Z => q(Z.bind(n))) : K && q(K.bind(n))
  }
  if (H(f0, f), H(Bn, h), H(W1, d), H(d0, g), H(zh, p), H(qh, m), H(h0, L), H(V1, S), H($1, A), H(Mi, y), H(Zs, b), H(j1, T), fe(O))
    if (O.length) {
      const q = e.exposed || (e.exposed = {});
      O.forEach(K => {
        Object.defineProperty(q, K, {
          get: () => n[K],
          set: Z => n[K] = Z,
          enumerable: !0
        })
      })
    } else e.exposed || (e.exposed = {});
  w && e.render === Gr && (e.render = w), B != null && (e.inheritAttrs = B), P && (e.components = P), W && (e.directives = W), T && jh(e)
}

function X1(e, t, n = Gr) {
  fe(e) && (e = cd(e));
  for (const r in e) {
    const i = e[r];
    let s;
    qe(i) ? "default" in i ? s = Zt(i.from || r, i.default, !0) : s = Zt(i.from || r) : s = Zt(i), at(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: o => s.value = o
    }) : t[r] = s
  }
}

function pg(e, t, n) {
  hr(fe(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function m0(e, t, n, r) {
  let i = r.includes(".") ? i0(n, r) : () => n[r];
  if (ot(e)) {
    const s = t[e];
    _e(s) && Qe(i, s)
  } else if (_e(e)) Qe(i, e.bind(n));
  else if (qe(e))
    if (fe(e)) e.forEach(s => m0(s, t, n, r));
    else {
      const s = _e(e.handler) ? e.handler.bind(n) : t[e.handler];
      _e(s) && Qe(i, s, e)
    }
}

function _0(e) {
  const t = e.type,
    {
      mixins: n,
      extends: r
    } = t,
    {
      mixins: i,
      optionsCache: s,
      config: {
        optionMergeStrategies: o
      }
    } = e.appContext,
    a = s.get(t);
  let l;
  return a ? l = a : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(c => zc(l, c, o, !0)), zc(l, t, o)), qe(t) && s.set(t, l), l
}

function zc(e, t, n, r = !1) {
  const {
    mixins: i,
    extends: s
  } = t;
  s && zc(e, s, n, !0), i && i.forEach(o => zc(e, o, n, !0));
  for (const o in t)
    if (!(r && o === "expose")) {
      const a = Q1[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o]
    } return e
}
const Q1 = {
  data: gg,
  props: mg,
  emits: mg,
  methods: wa,
  computed: wa,
  beforeCreate: mn,
  created: mn,
  beforeMount: mn,
  mounted: mn,
  beforeUpdate: mn,
  updated: mn,
  beforeDestroy: mn,
  beforeUnmount: mn,
  destroyed: mn,
  unmounted: mn,
  activated: mn,
  deactivated: mn,
  errorCaptured: mn,
  serverPrefetch: mn,
  components: wa,
  directives: wa,
  watch: Z1,
  provide: gg,
  inject: J1
};

function gg(e, t) {
  return t ? e ? function() {
    return It(_e(e) ? e.call(this, this) : e, _e(t) ? t.call(this, this) : t)
  } : t : e
}

function J1(e, t) {
  return wa(cd(e), cd(t))
}

function cd(e) {
  if (fe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t
  }
  return e
}

function mn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}

function wa(e, t) {
  return e ? It(Object.create(null), e, t) : t
}

function mg(e, t) {
  return e ? fe(e) && fe(t) ? [...new Set([...e, ...t])] : It(Object.create(null), Vc(e), Vc(t ?? {})) : t
}

function Z1(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = It(Object.create(null), e);
  for (const r in t) n[r] = mn(e[r], t[r]);
  return n
}

function y0() {
  return {
    app: null,
    config: {
      isNativeTag: Ey,
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
let eS = 0;

function tS(e, t) {
  return function(r, i = null) {
    _e(r) || (r = It({}, r)), i != null && !qe(i) && (i = null);
    const s = y0(),
      o = new WeakSet,
      a = [];
    let l = !1;
    const c = s.app = {
      _uid: eS++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: IS,
      get config() {
        return s.config
      },
      set config(u) {},
      use(u, ...f) {
        return o.has(u) || (u && _e(u.install) ? (o.add(u), u.install(c, ...f)) : _e(u) && (o.add(u), u(c, ...f))), c
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c
      },
      component(u, f) {
        return f ? (s.components[u] = f, c) : s.components[u]
      },
      directive(u, f) {
        return f ? (s.directives[u] = f, c) : s.directives[u]
      },
      mount(u, f, h) {
        if (!l) {
          const d = c._ceVNode || we(r, i);
          return d.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(d, u) : e(d, u, h), l = !0, c._container = u, u.__vue_app__ = c, Wu(d.component)
        }
      },
      onUnmount(u) {
        a.push(u)
      },
      unmount() {
        l && (hr(a, c._instance, 16), e(null, c._container), delete c._container.__vue_app__)
      },
      provide(u, f) {
        return s.provides[u] = f, c
      },
      runWithContext(u) {
        const f = Ds;
        Ds = c;
        try {
          return u()
        } finally {
          Ds = f
        }
      }
    };
    return c
  }
}
let Ds = null;

function WF(e, t, n = $e) {
  const r = Nn(),
    i = hn(t),
    s = Oi(t),
    o = v0(e, i),
    a = Qy((l, c) => {
      let u, f = $e,
        h;
      return y1(() => {
        const d = e[i];
        Yt(u, d) && (u = d, c())
      }), {
        get() {
          return l(), n.get ? n.get(u) : u
        },
        set(d) {
          const g = n.set ? n.set(d) : d;
          if (!Yt(g, u) && !(f !== $e && Yt(d, f))) return;
          const p = r.vnode.props,
            m = !!(p && (t in p || i in p || s in p) && (`onUpdate:${t}` in p || `onUpdate:${i}` in p || `onUpdate:${s}` in p));
          m || (u = d, c()), r.emit(`update:${t}`, g), Yt(d, f) && (Yt(d, g) && !Yt(g, h) || m && f !== $e && !Yt(g, u)) && c(), f = d, h = g
        }
      }
    });
  return a[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? {
          value: l++ ? o || $e : a,
          done: !1
        } : {
          done: !0
        }
      }
    }
  }, a
}
const v0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${hn(t)}Modifiers`] || e[`${Oi(t)}Modifiers`];

function nS(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || $e;
  let i = n;
  const s = t.startsWith("update:"),
    o = s && v0(r, t.slice(7));
  o && (o.trim && (i = n.map(u => ot(u) ? u.trim() : u)), o.number && (i = i.map(Oh)));
  let a, l = r[a = cf(t)] || r[a = cf(hn(t))];
  !l && s && (l = r[a = cf(Oi(t))]), l && hr(l, e, 6, i);
  const c = r[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    e.emitted[a] = !0, hr(c, e, 6, i)
  }
}
const rS = new WeakMap;

function b0(e, t, n = !1) {
  const r = n ? rS : t.emitsCache,
    i = r.get(e);
  if (i !== void 0) return i;
  const s = e.emits;
  let o = {},
    a = !1;
  if (!_e(e)) {
    const l = c => {
      const u = b0(c, t, !0);
      u && (a = !0, It(o, u))
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
  }
  return !s && !a ? (qe(e) && r.set(e, null), null) : (fe(s) ? s.forEach(l => o[l] = null) : It(o, s), qe(e) && r.set(e, o), o)
}

function Bu(e, t) {
  return !e || !Sl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ze(e, t[0].toLowerCase() + t.slice(1)) || ze(e, Oi(t)) || ze(e, t))
}

function _f(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: h,
    setupState: d,
    ctx: g,
    inheritAttrs: p
  } = e, m = Uc(e);
  let v, y;
  try {
    if (n.shapeFlag & 4) {
      const b = i || r,
        w = b;
      v = $n(c.call(w, b, u, f, d, h, g)), y = a
    } else {
      const b = t;
      v = $n(b.length > 1 ? b(f, {
        attrs: a,
        slots: o,
        emit: l
      }) : b(f, null)), y = t.props ? a : iS(a)
    }
  } catch (b) {
    Si.length = 0, Xo(b, e, 1), v = we(St)
  }
  let _ = v;
  if (y && p !== !1) {
    const b = Object.keys(y),
      {
        shapeFlag: w
      } = _;
    b.length && w & 7 && (s && b.some(Tu) && (y = sS(y, s)), _ = Zr(_, y, !1, !0))
  }
  if (n.dirs && (_ = Zr(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const b = Du(_.type) && Hc(_) || _;
    qs(b, n.transition)
  }
  return v = _, Uc(m), v
}

function Yh(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (Gs(i)) {
      if (i.type !== St || i.children === "v-if") {
        if (n) return;
        n = i
      }
    } else return
  }
  return n
}
const iS = e => {
    let t;
    for (const n in e)(n === "class" || n === "style" || Sl(n)) && ((t || (t = {}))[n] = e[n]);
    return t
  },
  sS = (e, t) => {
    const n = {};
    for (const r in e)(!Tu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
  };

function oS(e, t, n) {
  const {
    props: r,
    children: i,
    component: s
  } = e, {
    props: o,
    children: a,
    patchFlag: l
  } = t, c = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? _g(r, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (w0(o, r, h) && !Bu(c, h)) return !0
      }
    }
  } else return (i || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? _g(r, o, c) : !0 : !!o;
  return !1
}

function _g(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (!ze(e, s) || w0(t, e, s) && !Bu(n, s)) return !0
  }
  return !1
}

function w0(e, t, n) {
  const r = e[n],
    i = t[n];
  return n === "style" && qe(r) && qe(i) ? !Yo(r, i) : r !== i
}

function Uu({
  vnode: e,
  parent: t,
  suspense: n
}, r) {
  for (; t;) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)(e = t.vnode).el = r, t = t.parent;
    else break
  }
  n && n.activeBranch === e && (n.vnode.el = r)
}
const A0 = {},
  S0 = () => Object.create(A0),
  E0 = e => Object.getPrototypeOf(e) === A0;

function aS(e, t, n, r = !1) {
  const i = {},
    s = S0();
  e.propsDefaults = Object.create(null), C0(e, t, i, s);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? e.props = r ? i : mi(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s
}

function lS(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: {
      patchFlag: o
    }
  } = e, a = je(i), [l] = e.propsOptions;
  let c = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (Bu(e.emitsOptions, h)) continue;
        const d = t[h];
        if (l)
          if (ze(s, h)) d !== s[h] && (s[h] = d, c = !0);
          else {
            const g = hn(h);
            i[g] = ud(l, a, g, d, e, !1)
          }
        else d !== s[h] && (s[h] = d, c = !0)
      }
    }
  } else {
    C0(e, t, i, s) && (c = !0);
    let u;
    for (const f in a)(!t || !ze(t, f) && ((u = Oi(f)) === f || !ze(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (i[f] = ud(l, a, f, void 0, e, !0)) : delete i[f]);
    if (s !== a)
      for (const f in s)(!t || !ze(t, f)) && (delete s[f], c = !0)
  }
  c && hi(e.attrs, "set", "")
}

function C0(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (Is(l)) continue;
      const c = t[l];
      let u;
      i && ze(i, u = hn(l)) ? !s || !s.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Bu(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, o = !0)
    }
  if (s) {
    const l = je(n),
      c = a || $e;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = ud(i, l, f, c[f], e, !ze(c, f))
    }
  }
  return o
}

function ud(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const a = ze(o, "default");
    if (a && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && _e(l)) {
        const {
          propsDefaults: c
        } = i;
        if (n in c) r = c[n];
        else {
          const u = Qo(i);
          r = c[n] = l.call(null, t), u()
        }
      } else r = l;
      i.ce && i.ce._setProp(n, r)
    }
    o[0] && (s && !a ? r = !1 : o[1] && (r === "" || r === Oi(n)) && (r = !0))
  }
  return r
}
const cS = new WeakMap;

function T0(e, t, n = !1) {
  const r = n ? cS : t.propsCache,
    i = r.get(e);
  if (i) return i;
  const s = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!_e(e)) {
    const u = f => {
      l = !0;
      const [h, d] = T0(f, t, !0);
      It(o, h), d && a.push(...d)
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
  }
  if (!s && !l) return qe(e) && r.set(e, Rs), Rs;
  if (fe(s))
    for (let u = 0; u < s.length; u++) {
      const f = hn(s[u]);
      yg(f) && (o[f] = $e)
    } else if (s)
      for (const u in s) {
        const f = hn(u);
        if (yg(f)) {
          const h = s[u],
            d = o[f] = fe(h) || _e(h) ? {
              type: h
            } : It({}, h),
            g = d.type;
          let p = !1,
            m = !0;
          if (fe(g))
            for (let v = 0; v < g.length; ++v) {
              const y = g[v],
                _ = _e(y) && y.name;
              if (_ === "Boolean") {
                p = !0;
                break
              } else _ === "String" && (m = !1)
            } else p = _e(g) && g.name === "Boolean";
          d[0] = p, d[1] = m, (p || ze(d, "default")) && a.push(f)
        }
      }
  const c = [o, a];
  return qe(e) && r.set(e, c), c
}

function yg(e) {
  return e[0] !== "$" && !Is(e)
}
const Xh = e => e === "_" || e === "_ctx" || e === "$stable",
  Qh = e => fe(e) ? e.map($n) : [$n(e)],
  uS = (e, t, n) => {
    if (t._n) return t;
    const r = Ao((...i) => Qh(t(...i)), n);
    return r._c = !1, r
  },
  k0 = (e, t, n) => {
    const r = e._ctx;
    for (const i in e) {
      if (Xh(i)) continue;
      const s = e[i];
      if (_e(s)) t[i] = uS(i, s, r);
      else if (s != null) {
        const o = Qh(s);
        t[i] = () => o
      }
    }
  },
  R0 = (e, t) => {
    const n = Qh(t);
    e.slots.default = () => n
  },
  x0 = (e, t, n) => {
    for (const r in t)(n || !Xh(r)) && (e[r] = t[r])
  },
  fS = (e, t, n) => {
    const r = e.slots = S0();
    if (e.vnode.shapeFlag & 32) {
      const i = t._;
      i ? (x0(r, t, n), n && ky(r, "_", i, !0)) : k0(t, r)
    } else t && R0(e, t)
  },
  dS = (e, t, n) => {
    const {
      vnode: r,
      slots: i
    } = e;
    let s = !0,
      o = $e;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? s = !1 : x0(i, t, n) : (s = !t.$stable, k0(t, i)), o = t
    } else t && (R0(e, t), o = {
      default: 1
    });
    if (s)
      for (const a in i) !Xh(a) && o[a] == null && delete i[a]
  },
  Rt = N0;

function hS(e) {
  return L0(e)
}

function pS(e) {
  return L0(e, L1)
}

function L0(e, t) {
  const n = Lu();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: d = Gr,
    insertStaticContent: g
  } = e, p = (C, R, M, $ = null, V = null, x = null, E = void 0, k = null, D = !!R.dynamicChildren) => {
    if (C === R) return;
    C && !Cr(C, R) && ($ = j(C), ce(C, V, x, !0), C = null), R.patchFlag === -2 && (D = !1, R.dynamicChildren = null), R.dynamicChildren && C && C.dynamicChildren && C.dynamicChildren.hasOnce && (R.dynamicChildren === Rs && (R.dynamicChildren = []), R.dynamicChildren.hasOnce = !0);
    const {
      type: F,
      ref: Q,
      shapeFlag: z
    } = R;
    switch (F) {
      case Qi:
        m(C, R, M, $);
        break;
      case St:
        v(C, R, M, $);
        break;
      case Co:
        C == null && y(R, M, $, E);
        break;
      case pt:
        P(C, R, M, $, V, x, E, k, D);
        break;
      default:
        z & 1 ? w(C, R, M, $, V, x, E, k, D) : z & 6 ? W(C, R, M, $, V, x, E, k, D) : (z & 64 || z & 128) && F.process(C, R, M, $, V, x, E, k, D, Y)
    }
    Q != null && V ? So(Q, C && C.ref, x, R || C, !R) : Q == null && C && C.ref != null && So(C.ref, null, x, C, !0)
  }, m = (C, R, M, $) => {
    if (C == null) r(R.el = a(R.children), M, $);
    else {
      const V = R.el = C.el;
      R.children !== C.children && c(V, R.children)
    }
  }, v = (C, R, M, $) => {
    C == null ? r(R.el = l(R.children || ""), M, $) : R.el = C.el
  }, y = (C, R, M, $) => {
    [C.el, C.anchor] = g(C.children, R, M, $, C.el, C.anchor)
  }, _ = ({
    el: C,
    anchor: R
  }, M, $) => {
    let V;
    for (; C && C !== R;) V = h(C), r(C, M, $), C = V;
    r(R, M, $)
  }, b = ({
    el: C,
    anchor: R
  }) => {
    let M;
    for (; C && C !== R;) M = h(C), i(C), C = M;
    i(R)
  }, w = (C, R, M, $, V, x, E, k, D) => {
    if (R.type === "svg" ? E = "svg" : R.type === "math" && (E = "mathml"), C == null) S(R, M, $, V, x, E, k, D);
    else {
      const F = C.el && C.el._isVueCE ? C.el : null;
      try {
        F && F._beginPatch(), T(C, R, V, x, E, k, D)
      } finally {
        F && F._endPatch()
      }
    }
  }, S = (C, R, M, $, V, x, E, k) => {
    let D, F;
    const {
      props: Q,
      shapeFlag: z,
      transition: N,
      dirs: U
    } = C;
    if (D = C.el = o(C.type, x, Q && Q.is, Q), z & 8 ? u(D, C.children) : z & 16 && L(C.children, D, null, $, V, yf(C, x), E, k), U && Br(C, null, $, "created"), A(D, C, C.scopeId, E, $), Q) {
      for (const se in Q) se !== "value" && !Is(se) && s(D, se, null, Q[se], x, $);
      "value" in Q && s(D, "value", null, Q.value, x), (F = Q.onVnodeBeforeMount) && Cn(F, $, C)
    }
    U && Br(C, null, $, "beforeMount");
    const oe = P0(V, N);
    oe && N.beforeEnter(D), r(D, R, M), ((F = Q && Q.onVnodeMounted) || oe || U) && Rt(() => {
      try {
        F && Cn(F, $, C), oe && N.enter(D), U && Br(C, null, $, "mounted")
      } finally {}
    }, V)
  }, A = (C, R, M, $, V) => {
    if (M && d(C, M), $)
      for (let x = 0; x < $.length; x++) d(C, $[x]);
    if (V) {
      let x = V.subTree;
      if (R === x || Gc(x.type) && (x.ssContent === R || x.ssFallback === R)) {
        const E = V.vnode;
        A(C, E, E.scopeId, E.slotScopeIds, V.parent)
      }
    }
  }, L = (C, R, M, $, V, x, E, k, D = 0) => {
    for (let F = D; F < C.length; F++) {
      const Q = C[F] = k ? fi(C[F]) : $n(C[F]);
      p(null, Q, R, M, $, V, x, E, k)
    }
  }, T = (C, R, M, $, V, x, E) => {
    const k = R.el = C.el;
    let {
      patchFlag: D,
      dynamicChildren: F,
      dirs: Q
    } = R;
    D |= C.patchFlag & 16;
    const z = C.props || $e,
      N = R.props || $e;
    let U;
    if (M && gs(M, !1), (U = N.onVnodeBeforeUpdate) && Cn(U, M, R, C), Q && Br(R, C, M, "beforeUpdate"), M && gs(M, !0), F && (!C.dynamicChildren || C.dynamicChildren.length !== F.length) && (D = 0, E = !1, F = null), (z.innerHTML && N.innerHTML == null || z.textContent && N.textContent == null) && u(k, ""), F ? O(C.dynamicChildren, F, k, M, $, yf(R, V), x) : E || K(C, R, k, null, M, $, yf(R, V), x, !1), D > 0) {
      if (D & 16) B(k, z, N, M, V);
      else if (D & 2 && z.class !== N.class && s(k, "class", null, N.class, V), D & 4 && s(k, "style", z.style, N.style, V), D & 8) {
        const oe = R.dynamicProps;
        for (let se = 0; se < oe.length; se++) {
          const ye = oe[se],
            Le = z[ye],
            Ne = N[ye];
          (Ne !== Le || ye === "value") && s(k, ye, Le, Ne, V, M)
        }
      }
      D & 1 && C.children !== R.children && u(k, R.children)
    } else !E && F == null && B(k, z, N, M, V);
    ((U = N.onVnodeUpdated) || Q) && Rt(() => {
      U && Cn(U, M, R, C), Q && Br(R, C, M, "updated")
    }, $)
  }, O = (C, R, M, $, V, x, E) => {
    for (let k = 0; k < R.length; k++) {
      const D = C[k],
        F = R[k],
        Q = D.el || fd(D),
        z = Q && (D.type === pt || !Cr(D, F) || D.shapeFlag & 198) ? f(Q) : M;
      p(D, F, z, null, $, V, x, E, !0)
    }
  }, B = (C, R, M, $, V) => {
    if (R !== M) {
      if (R !== $e)
        for (const x in R) !Is(x) && !(x in M) && s(C, x, R[x], null, V, $);
      for (const x in M) {
        if (Is(x)) continue;
        const E = M[x],
          k = R[x];
        E !== k && x !== "value" && s(C, x, k, E, V, $)
      }
      "value" in M && s(C, "value", R.value, M.value, V)
    }
  }, P = (C, R, M, $, V, x, E, k, D) => {
    const F = R.el = C ? C.el : a(""),
      Q = R.anchor = C ? C.anchor : a("");
    let {
      patchFlag: z,
      dynamicChildren: N,
      slotScopeIds: U
    } = R;
    U && (k = k ? k.concat(U) : U), C == null ? (r(F, M, $), r(Q, M, $), L(R.children || [], M, Q, V, x, E, k, D)) : z > 0 && z & 64 && N && C.dynamicChildren && C.dynamicChildren.length === N.length ? (O(C.dynamicChildren, N, M, V, x, E, k), (R.key != null || V && R === V.subTree) && Jh(C, R, !0)) : K(C, R, M, Q, V, x, E, k, D)
  }, W = (C, R, M, $, V, x, E, k, D) => {
    R.slotScopeIds = k, C == null ? R.shapeFlag & 512 ? V.ctx.activate(R, M, $, E, D) : G(R, M, $, V, x, E, D) : X(C, R, D)
  }, G = (C, R, M, $, V, x, E) => {
    const k = C.component = kS(C, $, V);
    if (Cl(C) && (k.ctx.renderer = Y), RS(k, !1, E), k.asyncDep) {
      if (V && V.registerDep(k, H, E, x), !C.el) {
        const D = k.subTree = we(St);
        v(null, D, R, M), C.placeholder = D.el
      }
    } else H(k, C, R, M, V, x, E)
  }, X = (C, R, M) => {
    const $ = R.component = C.component;
    if (oS(C, R, M))
      if ($.asyncDep && !$.asyncResolved) {
        R.el = C.el, R.placeholder = C.placeholder, q($, R, M);
        return
      } else $.next = R, $.update();
    else R.el = C.el, R.placeholder = C.placeholder, $.vnode = R
  }, H = (C, R, M, $, V, x, E) => {
    const k = () => {
      if (C.isMounted) {
        let {
          next: z,
          bu: N,
          u: U,
          parent: oe,
          vnode: se
        } = C;
        {
          const De = O0(C);
          if (De) {
            z && (z.el = se.el, q(C, z, E)), De.asyncDep.then(() => {
              Rt(() => {
                C.isUnmounted || F()
              }, V)
            });
            return
          }
        }
        let ye = z,
          Le;
        gs(C, !1), z ? (z.el = se.el, q(C, z, E)) : z = se, N && wo(N), (Le = z.props && z.props.onVnodeBeforeUpdate) && Cn(Le, oe, z, se), gs(C, !0);
        const Ne = _f(C),
          Mt = C.subTree;
        C.subTree = Ne, p(Mt, Ne, f(Mt.el), j(Mt), C, V, x), z.el = Ne.el, ye === null && Uu(C, Ne.el), U && Rt(U, V), (Le = z.props && z.props.onVnodeUpdated) && Rt(() => Cn(Le, oe, z, se), V)
      } else {
        let z;
        const {
          el: N,
          props: U
        } = R, {
          bm: oe,
          m: se,
          parent: ye,
          root: Le,
          type: Ne
        } = C, Mt = Ai(R);
        if (gs(C, !1), oe && wo(oe), !Mt && (z = U && U.onVnodeBeforeMount) && Cn(z, ye, R), gs(C, !0), N && de) {
          const De = () => {
            C.subTree = _f(C), de(N, C.subTree, C, V, null)
          };
          Mt && Ne.__asyncHydrate ? Ne.__asyncHydrate(N, C, De) : De()
        } else {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle(Ne, C.parent ? C.parent.type : void 0);
          const De = C.subTree = _f(C);
          p(null, De, M, $, C, V, x), R.el = De.el
        }
        if (se && Rt(se, V), !Mt && (z = U && U.onVnodeMounted)) {
          const De = R;
          Rt(() => Cn(z, ye, De), V)
        }(R.shapeFlag & 256 || ye && Ai(ye.vnode) && ye.vnode.shapeFlag & 256) && C.a && Rt(C.a, V), C.isMounted = !0, R = M = $ = null
      }
    };
    C.scope.on();
    const D = C.effect = new My(k);
    C.scope.off();
    const F = C.update = D.run.bind(D),
      Q = C.job = D.runIfDirty.bind(D);
    Q.i = C, Q.id = C.uid, D.scheduler = () => Wh(Q), gs(C, !0), F()
  }, q = (C, R, M) => {
    R.component = C;
    const $ = C.vnode.props;
    C.vnode = R, C.next = null, lS(C, R.props, $, M), dS(C, R.children, M), Xr(), e0(C), Qr()
  }, K = (C, R, M, $, V, x, E, k, D = !1) => {
    const F = C && C.children,
      Q = C ? C.shapeFlag : 0,
      z = R.children,
      {
        patchFlag: N,
        shapeFlag: U
      } = R;
    if (N > 0) {
      if (N & 128) {
        I(F, z, M, $, V, x, E, k, D);
        return
      } else if (N & 256) {
        Z(F, z, M, $, V, x, E, k, D);
        return
      }
    }
    U & 8 ? (Q & 16 && Me(F, V, x), z !== F && u(M, z)) : Q & 16 ? U & 16 ? I(F, z, M, $, V, x, E, k, D) : Me(F, V, x, !0) : (Q & 8 && u(M, ""), U & 16 && L(z, M, $, V, x, E, k, D))
  }, Z = (C, R, M, $, V, x, E, k, D) => {
    C = C || Rs, R = R || Rs;
    const F = C.length,
      Q = R.length,
      z = Math.min(F, Q);
    let N;
    for (N = 0; N < z; N++) {
      const U = R[N] = D ? fi(R[N]) : $n(R[N]);
      p(C[N], U, M, null, V, x, E, k, D)
    }
    F > Q ? Me(C, V, x, !0, !1, z) : L(R, M, $, V, x, E, k, D, z)
  }, I = (C, R, M, $, V, x, E, k, D) => {
    let F = 0;
    const Q = R.length;
    let z = C.length - 1,
      N = Q - 1;
    for (; F <= z && F <= N;) {
      const U = C[F],
        oe = R[F] = D ? fi(R[F]) : $n(R[F]);
      if (Cr(U, oe)) p(U, oe, M, null, V, x, E, k, D);
      else break;
      F++
    }
    for (; F <= z && F <= N;) {
      const U = C[z],
        oe = R[N] = D ? fi(R[N]) : $n(R[N]);
      if (Cr(U, oe)) p(U, oe, M, null, V, x, E, k, D);
      else break;
      z--, N--
    }
    if (F > z) {
      if (F <= N) {
        const U = N + 1,
          oe = U < Q ? R[U].el : $;
        for (; F <= N;) p(null, R[F] = D ? fi(R[F]) : $n(R[F]), M, oe, V, x, E, k, D), F++
      }
    } else if (F > N)
      for (; F <= z;) ce(C[F], V, x, !0), F++;
    else {
      const U = F,
        oe = F,
        se = new Map;
      for (F = oe; F <= N; F++) {
        const kt = R[F] = D ? fi(R[F]) : $n(R[F]);
        kt.key != null && se.set(kt.key, F)
      }
      let ye, Le = 0;
      const Ne = N - oe + 1;
      let Mt = !1,
        De = 0;
      const Pr = new Array(Ne);
      for (F = 0; F < Ne; F++) Pr[F] = 0;
      for (F = U; F <= z; F++) {
        const kt = C[F];
        if (Le >= Ne) {
          ce(kt, V, x, !0);
          continue
        }
        let qt;
        if (kt.key != null) qt = se.get(kt.key);
        else
          for (ye = oe; ye <= N; ye++)
            if (Pr[ye - oe] === 0 && Cr(kt, R[ye])) {
              qt = ye;
              break
            } qt === void 0 ? ce(kt, V, x, !0) : (Pr[qt - oe] = F + 1, qt >= De ? De = qt : Mt = !0, p(kt, R[qt], M, null, V, x, E, k, D), Le++)
      }
      const tr = Mt ? gS(Pr) : Rs;
      for (ye = tr.length - 1, F = Ne - 1; F >= 0; F--) {
        const kt = oe + F,
          qt = R[kt],
          gr = R[kt + 1],
          Or = kt + 1 < Q ? gr.el || fd(gr) : $;
        Pr[F] === 0 ? p(null, qt, M, Or, V, x, E, k, D) : Mt && (ye < 0 || F !== tr[ye] ? ie(qt, M, Or, 2) : ye--)
      }
    }
  }, ie = (C, R, M, $, V = null) => {
    const {
      el: x,
      type: E,
      transition: k,
      children: D,
      shapeFlag: F
    } = C;
    if (F & 6) {
      ie(C.component.subTree, R, M, $);
      return
    }
    if (F & 128) {
      C.suspense.move(R, M, $);
      return
    }
    if (F & 64) {
      E.move(C, R, M, Y);
      return
    }
    if (E === pt) {
      r(x, R, M);
      for (let z = 0; z < D.length; z++) ie(D[z], R, M, $);
      r(C.anchor, R, M);
      return
    }
    if (E === Co) {
      _(C, R, M);
      return
    }
    if ($ !== 2 && F & 1 && k)
      if ($ === 0) k.persisted && !x[sr] ? r(x, R, M) : (k.beforeEnter(x), r(x, R, M), Rt(() => k.enter(x), V));
      else {
        const {
          leave: z,
          delayLeave: N,
          afterLeave: U
        } = k, oe = () => {
          C.ctx.isUnmounted ? i(x) : r(x, R, M)
        }, se = () => {
          const ye = x._isLeaving || !!x[sr];
          x._isLeaving && x[sr](!0), k.persisted && !ye ? oe() : z(x, () => {
            oe(), U && U()
          })
        };
        N ? N(x, oe, se) : se()
      }
    else r(x, R, M)
  }, ce = (C, R, M, $ = !1, V = !1) => {
    const {
      type: x,
      props: E,
      ref: k,
      children: D,
      dynamicChildren: F,
      shapeFlag: Q,
      patchFlag: z,
      dirs: N,
      cacheIndex: U,
      memo: oe
    } = C;
    if ((z === -2 || F && F.hasOnce) && (V = !1), k != null && (Xr(), So(k, null, M, C, !0), Qr()), U != null && (!C.ctx || C.ctx === R) && (R.renderCache[U] = void 0), Q & 256) {
      R.ctx.deactivate(C);
      return
    }
    const se = Q & 1 && N,
      ye = !Ai(C);
    let Le;
    if (ye && (Le = E && E.onVnodeBeforeUnmount) && Cn(Le, R, C), Q & 6) xe(C.component, M, $);
    else {
      if (Q & 128) {
        C.suspense.unmount(M, $);
        return
      }
      se && Br(C, null, R, "beforeUnmount"), Q & 64 ? C.type.remove(C, R, M, Y, $) : F && !F.hasOnce && (x !== pt || z > 0 && z & 64) ? Me(F, R, M, !1, !0) : (x === pt && z & 384 || !V && Q & 16) && Me(D, R, M), $ && ve(C)
    }
    const Ne = oe != null && U == null;
    (ye && (Le = E && E.onVnodeUnmounted) || se || Ne) && Rt(() => {
      Le && Cn(Le, R, C), se && Br(C, null, R, "unmounted"), Ne && (C.el = null)
    }, M)
  }, ve = C => {
    const {
      type: R,
      el: M,
      anchor: $,
      transition: V
    } = C, x = R === pt;
    if (x && !V) {
      pe(M, $);
      return
    }
    if (R === Co) {
      b(C), V && !V.persisted && V.afterLeave && V.afterLeave();
      return
    }
    const E = x ? Ja(C) : C,
      k = () => {
        x ? f(M) && pe(M, $) : i(M), V && !V.persisted && V.afterLeave && V.afterLeave()
      };
    if (E && E.shapeFlag & 1 && V && !V.persisted) {
      const {
        leave: D,
        delayLeave: F
      } = V, Q = E.el, z = () => D(Q, k);
      F ? F(Q, k, z) : z()
    } else k()
  }, pe = (C, R) => {
    let M;
    for (; C !== R;) M = h(C), i(C), C = M;
    i(R)
  }, xe = (C, R, M) => {
    const {
      bum: $,
      scope: V,
      job: x,
      subTree: E,
      um: k,
      m: D,
      a: F
    } = C;
    qc(D), qc(F), $ && wo($), V.stop(), x ? (x.flags |= 8, ce(E, C, R, M)) : C.vnode.el && E && (E.transition = C.vnode.transition, ce(E, C, R, M)), k && Rt(k, R), Rt(() => {
      C.isUnmounted = !0
    }, R)
  }, Me = (C, R, M, $ = !1, V = !1, x = 0) => {
    for (let E = x; E < C.length; E++) ce(C[E], R, M, $, V)
  }, j = C => {
    if (C.shapeFlag & 6) return j(C.component.subTree);
    if (C.shapeFlag & 128) return C.suspense.next();
    const R = h(C.anchor || C.el),
      M = R && R[s0];
    return M ? h(M) : R
  }, J = (C, R, M) => {
    const $ = C && R._vnode ? void 0 : C && C.component ? C.component.uid : TS();
    g1(() => {
      C == null ? R._vnode && ce(R._vnode, null, null, !0) : p(R._vnode || null, C, R, null, null, null, M), R._vnode = C
    }, $)
  }, Y = {
    p,
    um: ce,
    m: ie,
    r: ve,
    mt: G,
    mc: L,
    pc: K,
    pbc: O,
    n: j,
    o: e
  };
  let ee, de;
  return t && ([ee, de] = t(Y)), {
    render: J,
    hydrate: ee,
    createApp: tS(J, ee)
  }
}

function yf({
  type: e,
  props: t
}, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function gs({
  effect: e,
  job: t
}, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function P0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Jh(e, t, n = !1) {
  const r = e.children,
    i = t.children;
  if (fe(r) && fe(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = fi(i[s]), a.el = o.el), !n && a.patchFlag !== -2 && Jh(o, a)), a.type === Qi && (a.patchFlag === -1 && (a = i[s] = fi(a)), a.el = o.el), a.type === St && !a.el && (a.el = o.el)
    }
}

function gS(e) {
  const t = e.slice(),
    n = [0];
  let r, i, s, o, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[r] = i, n.push(r);
        continue
      }
      for (s = 0, o = n.length - 1; s < o;) a = s + o >> 1, e[n[a]] < c ? s = a + 1 : o = a;
      c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r)
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0;) n[s] = o, o = t[o];
  return n
}

function O0(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : O0(t)
}

function qc(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

function fd(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? fd(t.subTree) : null
}
const Gc = e => e.__isSuspense;
let dd = 0;
const mS = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, i, s, o, a, l, c) {
      if (e == null) _S(t, n, r, i, s, o, a, l, c);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback && !s.isHydrating) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return
        }
        yS(e, t, n, r, i, o, a, l, c)
      }
    },
    hydrate: vS,
    normalize: bS
  },
  I0 = mS;

function Za(e, t) {
  const n = e.props && e.props[t];
  _e(n) && n()
}

function _S(e, t, n, r, i, s, o, a, l) {
  const {
    p: c,
    o: {
      createElement: u
    }
  } = l, f = u("div"), h = e.suspense = M0(e, i, r, t, f, n, s, o, a, l);
  c(null, h.pendingBranch = e.ssContent, f, null, r, h, s, o), h.deps > 0 ? (Za(e, "onPending"), Za(e, "onFallback"), c(null, e.ssFallback, t, n, r, null, s, o), Eo(h, e.ssFallback)) : h.resolve(!1, !0)
}

function yS(e, t, n, r, i, s, o, a, {
  p: l,
  um: c,
  o: {
    createElement: u
  }
}) {
  const f = t.suspense = e.suspense;
  f.vnode = t, t.el = e.el;
  const h = t.ssContent,
    d = t.ssFallback,
    {
      activeBranch: g,
      pendingBranch: p,
      isInFallback: m,
      isHydrating: v
    } = f;
  if (p) f.pendingBranch = h, Cr(p, h) ? (f.deps++, l(p, h, v ? n : f.hiddenContainer, null, i, f, s, o, a), f.deps--, f.deps <= 0 ? f.resolve() : m && !v && !f.isFallbackMountPending && (l(g, d, n, r, i, null, s, o, a), Eo(f, d))) : (f.pendingId = dd++, v ? (f.isHydrating = !1, f.activeBranch = p) : c(p, i, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = u("div"), m ? (l(null, h, f.hiddenContainer, null, i, f, s, o, a), f.deps <= 0 ? f.resolve() : f.isFallbackMountPending || (l(g, d, n, r, i, null, s, o, a), Eo(f, d))) : g && Cr(g, h) ? (l(g, h, n, r, i, f, s, o, a), f.resolve(!0)) : (l(null, h, f.hiddenContainer, null, i, f, s, o, a), f.deps <= 0 && f.resolve()));
  else if (g && Cr(g, h)) l(g, h, n, r, i, f, s, o, a), Eo(f, h);
  else if (Za(t, "onPending"), f.pendingBranch = h, h.shapeFlag & 512 ? f.pendingId = h.component.suspenseId : f.pendingId = dd++, l(null, h, f.hiddenContainer, null, i, f, s, o, a), f.deps <= 0) f.resolve();
  else {
    const {
      timeout: y,
      pendingId: _
    } = f;
    y > 0 ? setTimeout(() => {
      f.pendingId === _ && f.fallback(d)
    }, y) : y === 0 && f.fallback(d)
  }
}

function M0(e, t, n, r, i, s, o, a, l, c, u = !1) {
  const {
    p: f,
    m: h,
    um: d,
    n: g,
    o: {
      parentNode: p,
      remove: m
    }
  } = c;
  let v;
  const y = wS(e);
  y && t && t.pendingBranch && (v = t.pendingId, t.deps++);
  const _ = e.props ? Ry(e.props.timeout) : void 0,
    b = s,
    w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: o,
      container: r,
      hiddenContainer: i,
      deps: 0,
      pendingId: dd++,
      timeout: typeof _ == "number" ? _ : -1,
      activeBranch: null,
      isFallbackMountPending: !1,
      pendingBranch: null,
      isInFallback: !u,
      isHydrating: u,
      isUnmounted: !1,
      effects: [],
      resolve(S = !1, A = !1) {
        const {
          vnode: L,
          activeBranch: T,
          pendingBranch: O,
          pendingId: B,
          effects: P,
          parentComponent: W,
          container: G,
          isInFallback: X
        } = w;
        let H = !1;
        if (w.isHydrating) w.isHydrating = !1;
        else if (!S) {
          H = T && O.transition && O.transition.mode === "out-in";
          let Z = !1;
          H && (T.transition.afterLeave = () => {
            B === w.pendingId && (h(O, G, s === b && !Z ? g(T) : s, 0), Fc(P), X && L.ssFallback && (L.ssFallback.el = null))
          }), T && !w.isFallbackMountPending && (p(T.el) === G && (s = g(T), Z = !0), d(T, W, w, !0), !H && X && L.ssFallback && Rt(() => L.ssFallback.el = null, w)), H || h(O, G, s, 0)
        }
        w.isFallbackMountPending = !1, Eo(w, O), w.pendingBranch = null, w.isInFallback = !1;
        let q = w.parent,
          K = !1;
        for (; q;) {
          if (q.pendingBranch) {
            for (let Z = 0; Z < P.length; Z++) q.effects.push(P[Z]);
            K = !0;
            break
          }
          q = q.parent
        }!K && !H && Fc(P), w.effects = [], y && t && t.pendingBranch && v === t.pendingId && (v = void 0, t.deps--, t.deps === 0 && !A && t.resolve()), Za(L, "onResolve")
      },
      fallback(S) {
        if (!w.pendingBranch) return;
        const {
          vnode: A,
          activeBranch: L,
          parentComponent: T,
          container: O,
          namespace: B
        } = w;
        Za(A, "onFallback");
        const P = g(L),
          W = () => {
            if (w.isFallbackMountPending = !1, !w.isInFallback) return;
            const X = w.vnode.ssFallback;
            f(null, X, O, P, T, null, B, a, l), Eo(w, X)
          },
          G = S.transition && S.transition.mode === "out-in";
        G && (w.isFallbackMountPending = !0, L.transition.afterLeave = W), w.isInFallback = !0, d(L, T, null, !0), G || W()
      },
      move(S, A, L) {
        w.activeBranch && h(w.activeBranch, S, A, L), w.container = S
      },
      next() {
        return w.activeBranch && g(w.activeBranch)
      },
      registerDep(S, A, L, T) {
        const O = !!w.pendingBranch;
        O && w.deps++;
        const B = S.vnode.el;
        S.asyncDep.catch(P => {
          Xo(P, S, 0)
        }).then(P => {
          if (S.isUnmounted || w.isUnmounted || w.pendingId !== S.suspenseId) return;
          if (el(), !S.scope.active) {
            O && --w.deps === 0 && w.resolve();
            return
          }
          S.asyncResolved = !0;
          const {
            vnode: W
          } = S;
          hd(S, P), B && (W.el = B);
          const G = !B && S.subTree.el;
          A(S, W, p(B || S.subTree.el), B ? null : g(S.subTree), w, T, L), G && (W.placeholder = null, m(G)), Uu(S, W.el), O && --w.deps === 0 && w.resolve()
        })
      },
      unmount(S, A) {
        w.isUnmounted = !0, w.activeBranch && d(w.activeBranch, n, S, A), w.pendingBranch && d(w.pendingBranch, n, S, A)
      }
    };
  return w
}

function vS(e, t, n, r, i, s, o, a, l) {
  const c = t.suspense = M0(t, r, n, e.parentNode, document.createElement("div"), null, i, s, o, a, !0),
    u = l(e, c.pendingBranch = t.ssContent, n, c, s, o);
  return c.deps === 0 && c.resolve(!1, !0), u
}

function bS(e) {
  const {
    shapeFlag: t,
    children: n
  } = e, r = t & 32;
  e.ssContent = vg(r ? n.default : n), e.ssFallback = r ? vg(n.fallback) : we(St)
}

function vg(e) {
  let t;
  if (_e(e)) {
    const n = Fo && e._c;
    n && (e._d = !1, me()), e = e(), n && (e._d = !0, t = Ln, Hu())
  }
  return fe(e) && (e = Yh(e)), e = $n(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function N0(e, t) {
  t && t.pendingBranch ? fe(e) ? t.effects.push(...e) : t.effects.push(e) : Fc(e)
}

function Eo(e, t) {
  e.activeBranch = t;
  const {
    vnode: n,
    parentComponent: r
  } = e;
  let i = t.el;
  for (; !i && t.component;) t = t.component.subTree, i = t.el;
  n.el = i, r && r.subTree === n && (r.vnode.el = i, Uu(r, i))
}

function wS(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1
}
const pt = Symbol.for("v-fgt"),
  Qi = Symbol.for("v-txt"),
  St = Symbol.for("v-cmt"),
  Co = Symbol.for("v-stc"),
  Si = [];
let Ln = null;

function me(e = !1) {
  Si.push(Ln = e ? null : [])
}

function Hu() {
  Si.pop(), Ln = Si[Si.length - 1] || null
}
let Fo = 1;

function Kc(e, t = !1) {
  Fo += e, e < 0 && Ln && t && (Ln.hasOnce = !0)
}

function D0(e) {
  return e.dynamicChildren = Fo > 0 ? Ln || Rs : null, Hu(), Fo > 0 && Ln && Ln.push(e), e
}

function Be(e, t, n, r, i, s) {
  return D0(te(e, t, n, r, i, s, !0))
}

function Rn(e, t, n, r, i) {
  return D0(we(e, t, n, r, i, !0))
}

function Gs(e) {
  return e ? e.__v_isVNode === !0 : !1
}

function Cr(e, t) {
  return e.type === t.type && e.key === t.key
}
const F0 = ({
    key: e
  }) => e ?? null,
  vc = ({
    ref: e,
    ref_key: t,
    ref_for: n
  }) => (typeof e == "number" && (e = "" + e), e != null ? ot(e) || at(e) || _e(e) ? {
    i: Qt,
    r: e,
    k: t,
    f: !!n
  } : e : null);

function te(e, t = null, n = null, r = 0, i = null, s = e === pt ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && F0(t),
    ref: t && vc(t),
    scopeId: n0,
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
    ctx: Qt
  };
  return a ? (Yc(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ot(n) ? 8 : 16), Fo > 0 && !o && Ln && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Ln.push(l), l
}
const we = AS;

function AS(e, t = null, n = null, r = 0, i = null, s = !1) {
  if ((!e || e === p0) && (e = St), Gs(e)) {
    const a = Zr(e, t, !0);
    return n && Yc(a, n), Fo > 0 && !s && Ln && (a.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = a : Ln.push(a)), a.patchFlag = -2, a
  }
  if (OS(e) && (e = e.__vccOpts), t) {
    t = SS(t);
    let {
      class: a,
      style: l
    } = t;
    a && !ot(a) && (t.class = Yn(a)), qe(l) && (Iu(l) && !fe(l) && (l = It({}, l)), t.style = Ih(l))
  }
  const o = ot(e) ? 1 : Gc(e) ? 128 : Du(e) ? 64 : qe(e) ? 4 : _e(e) ? 2 : 0;
  return te(e, t, n, r, i, o, s, !0)
}

function SS(e) {
  return e ? Iu(e) || E0(e) ? It({}, e) : e : null
}

function Zr(e, t, n = !1, r = !1) {
  const {
    props: i,
    ref: s,
    patchFlag: o,
    children: a,
    transition: l
  } = e, c = t ? ES(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && F0(c),
    ref: t && t.ref ? n && s ? fe(s) ? s.concat(vc(t)) : [s, vc(t)] : vc(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== pt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Zr(e.ssContent),
    ssFallback: e.ssFallback && Zr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && r && qs(u, l.clone(u)), u
}

function B0(e = " ", t = 0) {
  return we(Qi, null, e, t)
}

function jF(e, t) {
  const n = we(Co, null, e);
  return n.staticCount = t, n
}

function En(e = "", t = !1) {
  return t ? (me(), Rn(St, null, e)) : we(St, null, e)
}

function $n(e) {
  return e == null || typeof e == "boolean" ? we(St) : fe(e) ? we(pt, null, e.slice()) : Gs(e) ? fi(e) : we(Qi, null, String(e))
}

function fi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zr(e)
}

function Yc(e, t) {
  let n = 0;
  const {
    shapeFlag: r
  } = e;
  if (t == null) t = null;
  else if (fe(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Yc(e, i()), i._c && (i._d = !0));
      return
    } else {
      n = 32;
      const i = t._;
      !i && !E0(t) ? t._ctx = Qt : i === 3 && Qt && (Qt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    }
  else if (_e(t)) {
    if (r & 65) {
      Yc(e, {
        default: t
      });
      return
    }
    t = {
      default: t,
      _ctx: Qt
    }, n = 32
  } else t = String(t), r & 64 ? (n = 16, t = [B0(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n
}

function ES(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class") t.class !== r.class && (t.class = Yn([t.class, r.class]));
      else if (i === "style") t.style = Ih([t.style, r.style]);
    else if (Sl(i)) {
      const s = t[i],
        o = r[i];
      o && s !== o && !(fe(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && !Tu(i) && (t[i] = o)
    } else i !== "" && (t[i] = r[i])
  }
  return t
}

function Cn(e, t, n, r = null) {
  hr(e, t, 7, [n, r])
}
const CS = y0();
let U0 = 0;

function TS() {
  return U0
}

function kS(e, t, n) {
  const r = e.type,
    i = (t ? t.appContext : e.appContext) || CS,
    s = {
      uid: U0++,
      vnode: e,
      type: r,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Iy(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: T0(r, i),
      emitsOptions: b0(r, i),
      emit: null,
      emitted: null,
      propsDefaults: $e,
      inheritAttrs: r.inheritAttrs,
      ctx: $e,
      data: $e,
      props: $e,
      attrs: $e,
      slots: $e,
      refs: $e,
      setupState: $e,
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
  }, s.root = t ? t.root : s, s.emit = nS.bind(null, s), e.ce && e.ce(s), s
}
let Xt = null;
const Nn = () => Xt || Qt;
let Xc, Ji;
{
  const e = Lu(),
    t = (n, r) => {
      let i;
      return (i = e[n]) || (i = e[n] = []), i.push(r), s => {
        i.length > 1 ? i.forEach(o => o(s)) : i[0](s)
      }
    };
  Xc = t("__VUE_INSTANCE_SETTERS__", n => Xt = n), Ji = t("__VUE_SSR_SETTERS__", n => Ks = n)
}
const Qo = e => {
    const t = Xt;
    return Xc(e), e.scope.on(), () => {
      e.scope.off(), Xc(t)
    }
  },
  el = () => {
    Xt && Xt.scope.off(), Xc(null)
  };

function H0(e) {
  return e.vnode.shapeFlag & 4
}
let Ks = !1;

function RS(e, t = !1, n = !1) {
  t && Ji(t);
  const {
    props: r,
    children: i
  } = e.vnode, s = H0(e);
  aS(e, r, s, t), fS(e, i, n || t);
  const o = s ? xS(e, t) : void 0;
  return t && Ji(!1), o
}

function xS(e, t) {
  const n = e.type;
  e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, G1);
  const {
    setup: r
  } = n;
  if (r) {
    Xr();
    const i = e.setupContext = r.length > 1 ? PS(e) : null,
      s = Qo(e),
      o = El(r, e, 0, [e.props, i]),
      a = Ph(o);
    if (Qr(), s(), (a || e.sp) && !Ai(e) && jh(e), a) {
      if (o.then(el, el), t) return o.then(l => {
        Ji(!0);
        try {
          hd(e, l, t)
        } finally {
          Ji(!1)
        }
      }).catch(l => {
        Xo(l, e, 0)
      });
      e.asyncDep = o
    } else hd(e, o)
  } else W0(e)
}

function hd(e, t, n) {
  _e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : qe(t) && (e.setupState = Xy(t)), W0(e)
}

function W0(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Gr);
  {
    const i = Qo(e);
    Xr();
    try {
      Y1(e)
    } finally {
      Qr(), i()
    }
  }
}
const LS = {
  get(e, t) {
    return cn(e, "get", ""), e[t]
  }
};

function PS(e) {
  const t = n => {
    e.exposed = n || {}
  };
  return {
    attrs: new Proxy(e.attrs, LS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}

function Wu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xy(n1(e.exposed)), {
    get(t, n) {
      if (n in t) return t[n];
      if (n in Ia) return Ia[n](e)
    },
    has(t, n) {
      return n in t || n in Ia
    }
  })) : e.proxy
}

function pd(e, t = !0) {
  return _e(e) ? e.displayName || e.name : e.name || t && e.__name
}

function OS(e) {
  return _e(e) && "__vccOpts" in e
}
const be = (e, t) => u1(e, t, Ks);

function Vt(e, t, n) {
  try {
    Kc(-1);
    const r = arguments.length;
    return r === 2 ? qe(t) && !fe(t) ? Gs(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Gs(n) && (n = [n]), we(e, t, n))
  } finally {
    Kc(1)
  }
}
const IS = "3.5.44";
/**
 * @vue/runtime-dom v3.5.44
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let gd;
const bg = typeof window < "u" && window.trustedTypes;
if (bg) try {
  gd = bg.createPolicy("vue", {
    createHTML: e => e
  })
} catch {}
const j0 = gd ? e => gd.createHTML(e) : e => e,
  MS = "http://www.w3.org/2000/svg",
  NS = "http://www.w3.org/1998/Math/MathML",
  ci = typeof document < "u" ? document : null,
  wg = ci && ci.createElement("template"),
  DS = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const i = t === "svg" ? ci.createElementNS(MS, e) : t === "mathml" ? ci.createElementNS(NS, e) : n ? ci.createElement(e, {
        is: n
      }) : ci.createElement(e);
      return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i
    },
    createText: e => ci.createTextNode(e),
    createComment: e => ci.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => ci.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, i, s) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === s || i.nextSibling))
        for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)););
      else {
        wg.innerHTML = j0(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = wg.content;
        if (r === "svg" || r === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild;) a.appendChild(l.firstChild);
          a.removeChild(l)
        }
        t.insertBefore(a, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  Fi = "transition",
  oa = "animation",
  tl = Symbol("_vtc"),
  $0 = {
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
  FS = It({}, o0, $0),
  BS = e => (e.displayName = "Transition", e.props = FS, e),
  US = BS((e, {
    slots: t
  }) => Vt(T1, HS(e), t)),
  ms = (e, t = []) => {
    fe(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  Ag = e => e ? fe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function HS(e) {
  const t = {};
  for (const P in e) P in $0 || (t[P] = e[P]);
  if (e.css === !1) return t;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: c = o,
    appearToClass: u = a,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = e, g = WS(i), p = g && g[0], m = g && g[1], {
    onBeforeEnter: v,
    onEnter: y,
    onEnterCancelled: _,
    onLeave: b,
    onLeaveCancelled: w,
    onBeforeAppear: S = v,
    onAppear: A = y,
    onAppearCancelled: L = _
  } = t, T = (P, W, G, X) => {
    P._enterCancelled = X, _s(P, W ? u : a), _s(P, W ? c : o), G && G()
  }, O = (P, W) => {
    P._isLeaving = !1, _s(P, f), _s(P, d), _s(P, h), W && W()
  }, B = P => (W, G) => {
    const X = P ? A : y,
      H = () => T(W, P, G);
    ms(X, [W, H]), Sg(() => {
      _s(W, P ? l : s), si(W, P ? u : a), Ag(X) || Eg(W, r, p, H)
    })
  };
  return It(t, {
    onBeforeEnter(P) {
      ms(v, [P]), si(P, s), si(P, o)
    },
    onBeforeAppear(P) {
      ms(S, [P]), si(P, l), si(P, c)
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(P, W) {
      P._isLeaving = !0;
      const G = () => O(P, W);
      si(P, f), P._enterCancelled ? (si(P, h), kg(P)) : (kg(P), si(P, h)), Sg(() => {
        P._isLeaving && (_s(P, f), si(P, d), Ag(b) || Eg(P, r, m, G))
      }), ms(b, [P, G])
    },
    onEnterCancelled(P) {
      T(P, !1, void 0, !0), ms(_, [P])
    },
    onAppearCancelled(P) {
      T(P, !0, void 0, !0), ms(L, [P])
    },
    onLeaveCancelled(P) {
      O(P), ms(w, [P])
    }
  })
}

function WS(e) {
  if (e == null) return null;
  if (qe(e)) return [vf(e.enter), vf(e.leave)];
  {
    const t = vf(e);
    return [t, t]
  }
}

function vf(e) {
  return Ry(e)
}

function si(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[tl] || (e[tl] = new Set)).add(t)
}

function _s(e, t) {
  t.split(/\s+/).forEach(r => r && e.classList.remove(r));
  const n = e[tl];
  n && (n.delete(t), n.size || (e[tl] = void 0))
}

function Sg(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let jS = 0;

function Eg(e, t, n, r) {
  const i = e._endId = ++jS,
    s = () => {
      i === e._endId && r()
    };
  if (n != null) return setTimeout(s, n);
  const {
    type: o,
    timeout: a,
    propCount: l
  } = $S(e, t);
  if (!o) return r();
  const c = o + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, h), s()
    },
    h = d => {
      d.target === e && ++u >= l && f()
    };
  setTimeout(() => {
    u < l && f()
  }, a + 1), e.addEventListener(c, h)
}

function $S(e, t) {
  const n = window.getComputedStyle(e),
    r = g => (n[g] || "").split(", "),
    i = r(`${Fi}Delay`),
    s = r(`${Fi}Duration`),
    o = Cg(i, s),
    a = r(`${oa}Delay`),
    l = r(`${oa}Duration`),
    c = Cg(a, l);
  let u = null,
    f = 0,
    h = 0;
  t === Fi ? o > 0 && (u = Fi, f = o, h = s.length) : t === oa ? c > 0 && (u = oa, f = c, h = l.length) : (f = Math.max(o, c), u = f > 0 ? o > c ? Fi : oa : null, h = u ? u === Fi ? s.length : l.length : 0);
  const d = u === Fi && /\b(?:transform|all)(?:,|$)/.test(r(`${Fi}Property`).toString());
  return {
    type: u,
    timeout: f,
    propCount: h,
    hasTransform: d
  }
}

function Cg(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((n, r) => Tg(n) + Tg(e[r])))
}

function Tg(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function kg(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight
}

function VS(e, t, n) {
  const r = e[tl];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Qc = Symbol("_vod"),
  V0 = Symbol("_vsh"),
  $F = {
    name: "show",
    beforeMount(e, {
      value: t
    }, {
      transition: n
    }) {
      e[Qc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : aa(e, t)
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
      transition: r
    }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), aa(e, !0), r.enter(e)) : r.leave(e, () => {
        aa(e, !1)
      }) : aa(e, t))
    },
    beforeUnmount(e, {
      value: t
    }) {
      aa(e, t)
    }
  };

function aa(e, t) {
  e.style.display = t ? e[Qc] : "none", e[V0] = !t
}
const zS = Symbol(""),
  qS = /(?:^|;)\s*display\s*:/;

function GS(e, t, n) {
  const r = e.style,
    i = ot(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (ot(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Aa(r, a, "")
        } else
          for (const o in t) n[o] == null && Aa(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const a = n[o];
      a != null ? YS(e, o, !ot(t) && t ? t[o] : void 0, a) || Aa(r, o, a) : Aa(r, o, "")
    }
  } else if (i) {
    if (t !== n) {
      const o = r[zS];
      o && (n += ";" + o), r.cssText = n, s = qS.test(n)
    }
  } else t && e.removeAttribute("style");
  Qc in e && ((!i || t !== n) && (e[Qc] = s ? r.display : ""), e[V0] && (r.display = "none"))
}
const Wl = /\s*!important$/;

function Aa(e, t, n) {
  if (fe(n)) n.forEach(r => Aa(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--")) Wl.test(n) ? e.setProperty(t, n.replace(Wl, ""), "important") : e.setProperty(t, n);
  else {
    const r = KS(e, t);
    Wl.test(n) ? e.setProperty(Oi(r), n.replace(Wl, ""), "important") : e[r] = n
  }
}
const Rg = ["Webkit", "Moz", "ms"],
  bf = {};

function KS(e, t) {
  const n = bf[t];
  if (n) return n;
  let r = hn(t);
  if (r !== "filter" && r in e) return bf[t] = r;
  r = xu(r);
  for (let i = 0; i < Rg.length; i++) {
    const s = Rg[i] + r;
    if (s in e) return bf[t] = s
  }
  return t
}

function YS(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ot(r) && n === r
}
const xg = "http://www.w3.org/1999/xlink";

function Lg(e, t, n, r, i, s = DA(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xg, t.slice(6, t.length)) : e.setAttributeNS(xg, t, n) : n == null || s && !xy(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Jn(n) ? String(n) : n)
}

function Pg(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? j0(n) : n);
    return
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = xy(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0)
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(i || t)
}

function ks(e, t, n, r) {
  e.addEventListener(t, n, r)
}

function XS(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
const Og = Symbol("_vei");

function QS(e, t, n, r, i = null) {
  const s = e[Og] || (e[Og] = {}),
    o = s[t];
  if (r && o) o.value = r;
  else {
    const [a, l] = eE(t);
    if (r) {
      const c = s[t] = rE(r, i);
      ks(e, a, c, l)
    } else o && (XS(e, a, o, l), s[t] = void 0)
  }
}
const JS = /(Once|Passive|Capture)$/,
  ZS = /^on:?(?:Once|Passive|Capture)$/;

function eE(e) {
  let t, n;
  for (;
    (n = e.match(JS)) && !ZS.test(e);) t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Oi(e.slice(2)), t]
}
let wf = 0;
const tE = Promise.resolve(),
  nE = () => wf || (tE.then(() => wf = 0), wf = Date.now());

function rE(e, t) {
  const n = r => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    const i = n.value;
    if (fe(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0
      };
      const o = i.slice(),
        a = [r];
      for (let l = 0; l < o.length && !r._stopped; l++) {
        const c = o[l];
        c && hr(c, t, 5, a)
      }
    } else hr(i, t, 5, [r])
  };
  return n.value = e, n.attached = nE(), n
}
const Ig = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
  iE = (e, t, n, r, i, s) => {
    const o = i === "svg";
    t === "class" ? VS(e, r, o) : t === "style" ? GS(e, n, r) : Sl(t) ? Tu(t) || QS(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : sE(e, t, r, o)) ? (Pg(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Lg(e, t, r, o, s, t !== "value")) : e._isVueCE && (oE(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !ot(r))) ? Pg(e, hn(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Lg(e, t, r, o))
  };

function sE(e, t, n, r) {
  if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ig(t) && _e(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
  }
  return Ig(t) && ot(n) ? !1 : t in e
}

function oE(e, t) {
  const n = e._def.props;
  if (!n) return !1;
  const r = hn(t);
  return Array.isArray(n) ? n.some(i => hn(i) === r) : Object.keys(n).some(i => hn(i) === r)
}
const Jc = e => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return fe(t) ? n => wo(t, n) : t
};

function aE(e) {
  e.target.composing = !0
}

function Mg(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const xs = Symbol("_assign"),
  jl = Symbol("_initialValue");

function Af(e, t, n) {
  return t && (e = e.trim()), n && (e = Oh(e)), e
}
const VF = {
    created(e, {
      modifiers: {
        lazy: t,
        trim: n,
        number: r
      }
    }, i) {
      e.parentNode && (e.type === "text" ? e[jl] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[jl] = e.defaultValue.replace(/\r\n?/g, `
`))), e[xs] = Jc(i);
      const s = r || i.props && i.props.type === "number";
      ks(e, t ? "change" : "input", o => {
        o.target.composing || e[xs](Af(e.value, n, s))
      }), (n || s) && ks(e, "change", () => {
        e.value = Af(e.value, n, s)
      }), t || (ks(e, "compositionstart", aE), ks(e, "compositionend", Mg), ks(e, "change", Mg))
    },
    mounted(e, {
      value: t,
      modifiers: {
        trim: n,
        number: r
      }
    }) {
      const i = t ?? "",
        s = e[jl];
      delete e[jl], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[xs](Af(e.value, n, r)) : e.value = i
    },
    beforeUpdate(e, {
      value: t,
      oldValue: n,
      modifiers: {
        lazy: r,
        trim: i,
        number: s
      }
    }, o) {
      if (e[xs] = Jc(o), e.composing) return;
      const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Oh(e.value) : e.value,
        l = t ?? "";
      if (a === l) return;
      const c = e.getRootNode();
      (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === l) || (e.value = l)
    }
  },
  zF = {
    deep: !0,
    created(e, t, n) {
      e[xs] = Jc(n), ks(e, "change", () => {
        const r = e._modelValue,
          i = lE(e),
          s = e.checked,
          o = e[xs];
        if (fe(r)) {
          const a = Ly(r, i),
            l = a !== -1;
          if (s && !l) o(r.concat(i));
          else if (!s && l) {
            const c = [...r];
            c.splice(a, 1), o(c)
          }
        } else if (No(r)) {
          const a = new Set(r);
          s ? a.add(i) : a.delete(i), o(a)
        } else o(z0(e, s))
      })
    },
    mounted: Ng,
    beforeUpdate(e, t, n) {
      e[xs] = Jc(n), Ng(e, t, n)
    }
  };

function Ng(e, {
  value: t,
  oldValue: n
}, r) {
  e._modelValue = t;
  let i;
  if (fe(t)) i = Ly(t, r.props.value) > -1;
  else if (No(t)) i = t.has(r.props.value);
  else {
    if (t === n) return;
    i = Yo(t, z0(e, !0))
  }
  e.checked !== i && (e.checked = i)
}

function lE(e) {
  return "_value" in e ? e._value : e.value
}

function z0(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t
}
const cE = ["ctrl", "shift", "alt", "meta"],
  uE = {
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
    exact: (e, t) => cE.some(n => e[`${n}Key`] && !t.includes(n))
  },
  fE = (e, t) => {
    if (!e) return e;
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return n[r] || (n[r] = ((i, ...s) => {
      for (let o = 0; o < t.length; o++) {
        const a = uE[t[o]];
        if (a && a(i, t)) return
      }
      return e(i, ...s)
    }))
  },
  dE = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  },
  qF = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return n[r] || (n[r] = (i => {
      if (!("key" in i)) return;
      const s = Oi(i.key);
      if (t.some(o => o === s || dE[o] === s)) return e(i)
    }))
  },
  q0 = It({
    patchProp: iE
  }, DS);
let Ma, Dg = !1;

function hE() {
  return Ma || (Ma = hS(q0))
}

function pE() {
  return Ma = Dg ? Ma : pS(q0), Dg = !0, Ma
}
const gE = ((...e) => {
    const t = hE().createApp(...e),
      {
        mount: n
      } = t;
    return t.mount = r => {
      const i = K0(r);
      if (!i) return;
      const s = t._component;
      !_e(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
      const o = n(i, !1, G0(i));
      return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
    }, t
  }),
  mE = ((...e) => {
    const t = pE().createApp(...e),
      {
        mount: n
      } = t;
    return t.mount = r => {
      const i = K0(r);
      if (i) return n(i, !0, G0(i))
    }, t
  });

function G0(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function K0(e) {
  return ot(e) ? document.querySelector(e) : e
}
const _E = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  yE = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  vE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function bE(e, t) {
  if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
    wE(e);
    return
  }
  return t
}

function wE(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function nl(e, t = {}) {
  if (typeof e != "string") return e;
  if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1) return e.slice(1, -1);
  const n = e.trim();
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
  if (!vE.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e
  }
  try {
    if (_E.test(e) || yE.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, bE)
    }
    return JSON.parse(e)
  } catch (r) {
    if (t.strict) throw r;
    return e
  }
}
const AE = /#/g,
  SE = /&/g,
  EE = /\//g,
  CE = /=/g,
  Zh = /\+/g,
  TE = /%5e/gi,
  kE = /%60/gi,
  RE = /%7c/gi,
  xE = /%20/gi;

function LE(e) {
  return encodeURI("" + e).replace(RE, "|")
}

function md(e) {
  return LE(typeof e == "string" ? e : JSON.stringify(e)).replace(Zh, "%2B").replace(xE, "+").replace(AE, "%23").replace(SE, "%26").replace(kE, "`").replace(TE, "^").replace(EE, "%2F")
}

function Sf(e) {
  return md(e).replace(CE, "%3D")
}

function Zc(e = "") {
  try {
    return decodeURIComponent("" + e)
  } catch {
    return "" + e
  }
}

function PE(e) {
  return Zc(e.replace(Zh, " "))
}

function OE(e) {
  return Zc(e.replace(Zh, " "))
}

function Y0(e = "") {
  const t = Object.create(null);
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const i = PE(r[1]);
    if (i === "__proto__" || i === "constructor") continue;
    const s = OE(r[2] || "");
    t[i] === void 0 ? t[i] = s : Array.isArray(t[i]) ? t[i].push(s) : t[i] = [t[i], s]
  }
  return t
}

function IE(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${Sf(e)}=${md(n)}`).join("&") : `${Sf(e)}=${md(t)}` : Sf(e)
}

function ME(e) {
  return Object.keys(e).filter(t => e[t] !== void 0).map(t => IE(t, e[t])).filter(Boolean).join("&")
}
const NE = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  X0 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  DE = /^([/\\]\s*){2,}[^/\\]/,
  FE = /\/$|\/\?|\/#/,
  BE = /^\.?\//;

function Ni(e, t = {}) {
  return typeof t == "boolean" && (t = {
    acceptRelative: t
  }), t.strict ? NE.test(e) : X0.test(e) || (t.acceptRelative ? DE.test(e) : !1)
}

function _d(e = "", t) {
  return t ? FE.test(e) : e.endsWith("/")
}

function Q0(e = "", t) {
  if (!t) return (_d(e) ? e.slice(0, -1) : e) || "/";
  if (!_d(e, !0)) return e || "/";
  let n = e,
    r = "";
  const i = e.indexOf("#");
  i !== -1 && (n = e.slice(0, i), r = e.slice(i));
  const [s, ...o] = n.split("?");
  return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function yd(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (_d(e, !0)) return e || "/";
  let n = e,
    r = "";
  const i = e.indexOf("#");
  if (i !== -1 && (n = e.slice(0, i), r = e.slice(i), !n)) return r;
  const [s, ...o] = n.split("?");
  return s + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function UE(e = "") {
  return e.startsWith("/")
}

function Fg(e = "") {
  return UE(e) ? e : "/" + e
}

function HE(e, t) {
  if (WE(t) || Ni(e)) return e;
  const n = Q0(t);
  if (e.startsWith(n)) {
    const r = e[n.length];
    if (!r || r === "/" || r === "?") return e
  }
  return rl(n, e)
}

function ep(e, t) {
  const n = eu(e),
    r = {
      ...Y0(n.search),
      ...t
    };
  return n.search = ME(r), qE(n)
}

function WE(e) {
  return !e || e === "/"
}

function jE(e) {
  return e && e !== "/"
}

function rl(e, ...t) {
  let n = e || "";
  for (const r of t.filter(i => jE(i)))
    if (n) {
      const i = r.replace(BE, "");
      n = yd(n) + i
    } else n = r;
  return n
}

function J0(...e) {
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    r = [];
  let i = 0;
  for (const o of n)
    if (!(!o || o === "/")) {
      for (const [a, l] of o.split(t).entries())
        if (!(!l || l === ".")) {
          if (l === "..") {
            if (r.length === 1 && Ni(r[0])) continue;
            r.pop(), i--;
            continue
          }
          if (a === 1 && r[r.length - 1]?.endsWith(":/")) {
            r[r.length - 1] += "/" + l;
            continue
          }
          r.push(l), i++
        }
    } let s = r.join("/");
  return i >= 0 ? n[0]?.startsWith("/") && !s.startsWith("/") ? s = "/" + s : n[0]?.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * i) + s, n[n.length - 1]?.endsWith("/") && !s.endsWith("/") && (s += "/"), s
}

function $E(e) {
  return VE(e, "https://")
}

function VE(e, t) {
  let n = e.match(X0);
  return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e
}

function zE(e, t, n = {}) {
  return n.trailingSlash || (e = yd(e), t = yd(t)), n.leadingSlash || (e = Fg(e), t = Fg(t)), n.encoding || (e = Zc(e), t = Zc(t)), e === t
}
const Z0 = Symbol.for("ufo:protocolRelative");

function eu(e = "", t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, h = ""] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: h,
      href: f + h,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!Ni(e, {
      acceptRelative: !0
    })) return t ? eu(t + e) : vd(e);
  const [, r = "", i, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, o = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
  r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
  const {
    pathname: l,
    search: c,
    hash: u
  } = vd(a);
  return {
    protocol: r.toLowerCase(),
    auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
    host: o,
    pathname: l,
    search: c,
    hash: u,
    [Z0]: !r
  }
}

function vd(e = "") {
  const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: t,
    search: n,
    hash: r
  }
}

function qE(e) {
  const t = e.pathname || "",
    n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
    r = e.hash || "",
    i = e.auth ? e.auth + "@" : "",
    s = e.host || "";
  return (e.protocol || e[Z0] ? (e.protocol || "") + "//" : "") + i + s + t + n + r
}
class GE extends Error {
  constructor(t, n) {
    super(t, n), this.name = "FetchError", n?.cause && !this.cause && (this.cause = n.cause)
  }
}

function KE(e) {
  const t = e.error?.message || e.error?.toString() || "",
    n = e.request?.method || e.options?.method || "GET",
    r = e.request?.url || String(e.request) || "/",
    i = `[${n}] ${JSON.stringify(r)}`,
    s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
    o = `${i}: ${s}${t?` ${t}`:""}`,
    a = new GE(o, e.error ? {
      cause: e.error
    } : void 0);
  for (const l of ["request", "options", "response"]) Object.defineProperty(a, l, {
    get() {
      return e[l]
    }
  });
  for (const [l, c] of [
      ["data", "_data"],
      ["status", "status"],
      ["statusCode", "status"],
      ["statusText", "statusText"],
      ["statusMessage", "statusText"]
    ]) Object.defineProperty(a, l, {
    get() {
      return e.response && e.response[c]
    }
  });
  return a
}
const YE = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Bg(e = "GET") {
  return YE.has(e.toUpperCase())
}

function XE(e) {
  if (e === void 0) return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer || e instanceof FormData || e instanceof URLSearchParams ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const QE = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
  JE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ZE(e = "") {
  if (!e) return "json";
  const t = e.split(";").shift() || "";
  return JE.test(t) ? "json" : t === "text/event-stream" ? "stream" : QE.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function eC(e, t, n, r) {
  const i = tC(t?.headers ?? e?.headers, n?.headers, r);
  let s;
  return (n?.query || n?.params || t?.params || t?.query) && (s = {
    ...n?.params,
    ...n?.query,
    ...t?.params,
    ...t?.query
  }), {
    ...n,
    ...t,
    query: s,
    params: s,
    headers: i
  }
}

function tC(e, t, n) {
  if (!t) return new n(e);
  const r = new n(t);
  if (e)
    for (const [i, s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(i, s);
  return r
}
async function $l(e, t) {
  if (t)
    if (Array.isArray(t))
      for (const n of t) await n(e);
    else await t(e)
}
const nC = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  rC = new Set([101, 204, 205, 304]);

function ev(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: r = globalThis.AbortController
  } = e;
  async function i(a) {
    const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
    if (a.options.retry !== !1 && !l) {
      let u;
      typeof a.options.retry == "number" ? u = a.options.retry : u = Bg(a.options.method) ? 0 : 1;
      const f = a.response && a.response.status || 500;
      if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : nC.has(f))) {
        const h = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
        return h > 0 && await new Promise(d => setTimeout(d, h)), s(a.request, {
          ...a.options,
          retry: u - 1
        })
      }
    }
    const c = KE(a);
    throw Error.captureStackTrace && Error.captureStackTrace(c, s), c
  }
  const s = async function(l, c = {}) {
    const u = {
      request: l,
      options: eC(l, c, e.defaults, n),
      response: void 0,
      error: void 0
    };
    if (u.options.method && (u.options.method = u.options.method.toUpperCase()), u.options.onRequest && (await $l(u, u.options.onRequest), u.options.headers instanceof n || (u.options.headers = new n(u.options.headers || {}))), typeof u.request == "string" && (u.options.baseURL && (u.request = HE(u.request, u.options.baseURL)), u.options.query && (u.request = ep(u.request, u.options.query), delete u.options.query), "query" in u.options && delete u.options.query, "params" in u.options && delete u.options.params), u.options.body && Bg(u.options.method))
      if (XE(u.options.body)) {
        const d = u.options.headers.get("content-type");
        typeof u.options.body != "string" && (u.options.body = d === "application/x-www-form-urlencoded" ? new URLSearchParams(u.options.body).toString() : JSON.stringify(u.options.body)), d || u.options.headers.set("content-type", "application/json"), u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")
      } else("pipeTo" in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex" in u.options || (u.options.duplex = "half"));
    let f;
    if (!u.options.signal && u.options.timeout) {
      const d = new r;
      f = setTimeout(() => {
        const g = new Error("[TimeoutError]: The operation was aborted due to timeout");
        g.name = "TimeoutError", g.code = 23, d.abort(g)
      }, u.options.timeout), u.options.signal = d.signal
    }
    try {
      u.response = await t(u.request, u.options)
    } catch (d) {
      return u.error = d, u.options.onRequestError && await $l(u, u.options.onRequestError), await i(u)
    } finally {
      f && clearTimeout(f)
    }
    if ((u.response.body || u.response._bodyInit) && !rC.has(u.response.status) && u.options.method !== "HEAD") {
      const d = (u.options.parseResponse ? "json" : u.options.responseType) || ZE(u.response.headers.get("content-type") || "");
      switch (d) {
        case "json": {
          const g = await u.response.text(),
            p = u.options.parseResponse || nl;
          u.response._data = p(g);
          break
        }
        case "stream": {
          u.response._data = u.response.body || u.response._bodyInit;
          break
        }
        default:
          u.response._data = await u.response[d]()
      }
    }
    return u.options.onResponse && await $l(u, u.options.onResponse), !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await $l(u, u.options.onResponseError), await i(u)) : u.response
  }, o = async function(l, c) {
    return (await s(l, c))._data
  };
  return o.raw = s, o.native = (...a) => t(...a), o.create = (a = {}, l = {}) => ev({
    ...e,
    ...l,
    defaults: {
      ...e.defaults,
      ...l.defaults,
      ...a
    }
  }), o
}
const tu = (function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object")
  })(),
  iC = tu.fetch ? (...e) => tu.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
  sC = tu.Headers,
  oC = tu.AbortController,
  aC = ev({
    fetch: iC,
    Headers: sC,
    AbortController: oC
  }),
  lC = aC,
  cC = () => window?.__NUXT__?.config || window?.useNuxtApp?.().payload?.config,
  tp = () => cC().app,
  uC = () => tp().baseURL,
  fC = () => tp().buildAssetsDir,
  np = (...e) => J0(tv(), fC(), ...e),
  tv = (...e) => {
    const t = tp(),
      n = t.cdnURL || t.baseURL;
    return e.length ? J0(n, ...e) : n
  };
globalThis.__buildAssetsURL = np, globalThis.__publicAssetsURL = tv;
globalThis.$fetch || (globalThis.$fetch = lC.create({
  baseURL: uC()
}));
"global" in globalThis || (globalThis.global = globalThis);

function bd(e, t = {}, n) {
  for (const r in e) {
    const i = e[r],
      s = n ? `${n}:${r}` : r;
    typeof i == "object" && i !== null ? bd(i, t, s) : typeof i == "function" && (t[s] = i)
  }
  return t
}
const dC = {
    run: e => e()
  },
  hC = () => dC,
  nv = typeof console.createTask < "u" ? console.createTask : hC;

function pC(e, t) {
  const n = t.shift(),
    r = nv(n);
  return e.reduce((i, s) => i.then(() => r.run(() => s(...t))), Promise.resolve())
}

function gC(e, t) {
  const n = t.shift(),
    r = nv(n);
  return Promise.all(e.map(i => r.run(() => i(...t))))
}

function Ef(e, t) {
  for (const n of [...e]) n(t)
}
class mC {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function") return () => {};
    const i = t;
    let s;
    for (; this._deprecatedHooks[t];) s = this._deprecatedHooks[t], t = s.to;
    if (s && !r.allowDeprecated) {
      let o = s.message;
      o || (o = `${i} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o))
    }
    if (!n.name) try {
      Object.defineProperty(n, "name", {
        get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
        configurable: !0
      })
    } catch {}
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0)
    }
  }
  hookOnce(t, n) {
    let r, i = (...s) => (typeof r == "function" && r(), r = void 0, i = void 0, n(...s));
    return r = this.hook(t, i), r
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? {
      to: n
    } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const i of r) this.hook(t, i)
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n])
  }
  addHooks(t) {
    const n = bd(t),
      r = Object.keys(n).map(i => this.hook(i, n[i]));
    return () => {
      for (const i of r.splice(0, r.length)) i()
    }
  }
  removeHooks(t) {
    const n = bd(t);
    for (const r in n) this.removeHook(r, n[r])
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t]
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(pC, t, ...n)
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(gC, t, ...n)
  }
  callHookWith(t, n, ...r) {
    const i = this._before || this._after ? {
      name: n,
      args: r,
      context: {}
    } : void 0;
    this._before && Ef(this._before, i);
    const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
    return s instanceof Promise ? s.finally(() => {
      this._after && i && Ef(this._after, i)
    }) : (this._after && i && Ef(this._after, i), s)
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1)
      }
    }
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1)
      }
    }
  }
}

function rv() {
  return new mC
}

function _C(e = {}) {
  let t, n = !1;
  const r = o => {
    if (t && t !== o) throw new Error("Context conflict")
  };
  let i;
  if (e.asyncContext) {
    const o = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    o ? i = new o : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
  }
  const s = () => {
    if (i) {
      const o = i.getStore();
      if (o !== void 0) return o
    }
    return t
  };
  return {
    use: () => {
      const o = s();
      if (o === void 0) throw new Error("Context is not available");
      return o
    },
    tryUse: () => s(),
    set: (o, a) => {
      a || r(o), t = o, n = !0
    },
    unset: () => {
      t = void 0, n = !1
    },
    call: (o, a) => {
      r(o), t = o;
      try {
        return i ? i.run(o, a) : a()
      } finally {
        n || (t = void 0)
      }
    },
    async callAsync(o, a) {
      t = o;
      const l = () => {
          t = o
        },
        c = () => t === o ? l : void 0;
      wd.add(c);
      try {
        const u = i ? i.run(o, a) : a();
        return n || (t = void 0), await u
      } finally {
        wd.delete(c)
      }
    }
  }
}

function yC(e = {}) {
  const t = {};
  return {
    get(n, r = {}) {
      return t[n] || (t[n] = _C({
        ...e,
        ...r
      })), t[n]
    }
  }
}
const nu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
  Ug = "__unctx__",
  vC = nu[Ug] || (nu[Ug] = yC()),
  bC = (e, t = {}) => vC.get(e, t),
  Hg = "__unctx_async_handlers__",
  wd = nu[Hg] || (nu[Hg] = new Set);

function Ei(e) {
  const t = [];
  for (const i of wd) {
    const s = i();
    s && t.push(s)
  }
  const n = () => {
    for (const i of t) i()
  };
  let r = e();
  return r && typeof r == "object" && "catch" in r && (r = r.catch(i => {
    throw n(), i
  })), [r, n]
}
const Wg = {
    name: "page",
    mode: "out-in"
  },
  wC = !1,
  jg = {
    id: "__nuxt-loader"
  },
  AC = {
    componentName: "NuxtLink",
    prefetch: !0,
    prefetchOn: {
      visibility: !0
    }
  },
  SC = {
    deep: !1
  },
  GF = {},
  EC = "#__nuxt",
  iv = "nuxt-app",
  $g = 36e5,
  CC = "vite:preloadError";

function sv(e = iv) {
  return bC(e, {
    asyncContext: !1
  })
}
const TC = "__nuxt_plugin";

function kC(e) {
  let t = 0;
  const n = {
    _id: e.id || iv || "nuxt-app",
    _scope: Mh(),
    provide: void 0,
    versions: {
      get nuxt() {
        return "4.1.3"
      },
      get vue() {
        return n.vueApp.version
      }
    },
    payload: mi({
      ...e.ssrContext?.payload || {},
      data: mi({}),
      state: ni({}),
      once: new Set,
      _errors: mi({})
    }),
    static: {
      data: {}
    },
    runWithContext(i) {
      return n._scope.active && !Js() ? n._scope.run(() => Vg(n, i)) : Vg(n, i)
    },
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let i = !1;
      return () => {
        if (!i && (i = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
      }
    },
    _asyncDataPromises: {},
    _asyncData: mi({}),
    _payloadRevivers: {},
    ...e
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
  n.hooks = rv(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (i, s) => {
    const o = "$" + i;
    Vl(n, o, s), Vl(n.vueApp.config.globalProperties, o, s)
  }, Vl(n.vueApp, "$nuxt", n), Vl(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener(CC, s => {
      n.callHook("app:chunkError", {
        error: s.payload
      }), s.payload.message.includes("Unable to preload CSS") && s.preventDefault()
    }), window.useNuxtApp ||= Ae;
    const i = n.hook("app:error", (...s) => {
      console.error("[nuxt] error caught during app initialization", ...s)
    });
    n.hook("app:mounted", i)
  }
  const r = n.payload.config;
  return n.provide("config", r), n
}

function RC(e, t) {
  t.hooks && e.hooks.addHooks(t.hooks)
}
async function xC(e, t) {
  if (typeof t == "function") {
    const {
      provide: n
    } = await e.runWithContext(() => t(e)) || {};
    if (n && typeof n == "object")
      for (const r in n) e.provide(r, n[r])
  }
}
async function LC(e, t) {
  const n = new Set,
    r = [],
    i = [];
  let s, o = 0;
  async function a(l) {
    const c = l.dependsOn?.filter(u => t.some(f => f._name === u) && !n.has(u)) ?? [];
    if (c.length > 0) r.push([new Set(c), l]);
    else {
      const u = xC(e, l).then(async () => {
        l._name && (n.add(l._name), await Promise.all(r.map(async ([f, h]) => {
          f.has(l._name) && (f.delete(l._name), f.size === 0 && (o++, await a(h)))
        })))
      }).catch(f => {
        if (!l.parallel && !e.payload.error) throw f;
        s ||= f
      });
      l.parallel ? i.push(u) : await u
    }
  }
  for (const l of t) RC(e, l);
  for (const l of t) await a(l);
  if (await Promise.all(i), o)
    for (let l = 0; l < o; l++) await Promise.all(i);
  if (s) throw e.payload.error || s
}

function Je(e) {
  if (typeof e == "function") return e;
  const t = e._name || e.name;
  return delete e.name, Object.assign(e.setup || (() => {}), e, {
    [TC]: !0,
    _name: t
  })
}

function Vg(e, t, n) {
  const r = () => t();
  return sv(e._id).set(e), e.vueApp.runWithContext(r)
}

function PC(e) {
  let t;
  return Mu() && (t = Nn()?.appContext.app.$nuxt), t ||= sv(e).tryUse(), t || null
}

function Ae(e) {
  const t = PC(e);
  if (!t) throw new Error("[nuxt] instance unavailable");
  return t
}

function Dn(e) {
  return Ae().$config
}

function Vl(e, t, n) {
  Object.defineProperty(e, t, {
    get: () => n
  })
}

function OC(e, t) {
  return {
    ctx: {
      table: e
    },
    matchAll: n => av(n, e)
  }
}

function ov(e) {
  const t = {};
  for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, i]) => [r, ov(i)])) : new Map(Object.entries(e[n]));
  return t
}

function IC(e) {
  return OC(ov(e))
}

function av(e, t, n) {
  e.endsWith("/") && (e = e.slice(0, -1) || "/");
  const r = [];
  for (const [s, o] of zg(t.wildcard))(e === s || e.startsWith(s + "/")) && r.push(o);
  for (const [s, o] of zg(t.dynamic))
    if (e.startsWith(s + "/")) {
      const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
      r.push(...av(a, o))
    } const i = t.static.get(e);
  return i && r.push(i), r.filter(Boolean)
}

function zg(e) {
  return [...e.entries()].sort((t, n) => t[0].length - n[0].length)
}

function Cf(e) {
  if (e === null || typeof e != "object") return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function Ad(e, t, n = ".", r) {
  if (!Cf(t)) return Ad(e, {}, n, r);
  const i = {
    ...t
  };
  for (const s of Object.keys(e)) {
    if (s === "__proto__" || s === "constructor") continue;
    const o = e[s];
    o != null && (r && r(i, s, o, n) || (Array.isArray(o) && Array.isArray(i[s]) ? i[s] = [...o, ...i[s]] : Cf(o) && Cf(i[s]) ? i[s] = Ad(o, i[s], (n ? `${n}.` : "") + s.toString(), r) : i[s] = o))
  }
  return i
}

function lv(e) {
  return (...t) => t.reduce((n, r) => Ad(n, r, "", e), {})
}
const ju = lv();

function MC(e, t) {
  try {
    return t in e
  } catch {
    return !1
  }
}
class qg extends Error {
  static __h3_error__ = !0;
  statusCode = 500;
  fatal = !1;
  unhandled = !1;
  statusMessage;
  data;
  cause;
  constructor(t, n = {}) {
    super(t, n), n.cause && !this.cause && (this.cause = n.cause)
  }
  toJSON() {
    const t = {
      message: this.message,
      statusCode: Sd(this.statusCode, 500)
    };
    return this.statusMessage && (t.statusMessage = cv(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
  }
}

function NC(e) {
  if (typeof e == "string") return new qg(e);
  if (DC(e)) return e;
  const t = new qg(e.message ?? e.statusMessage ?? "", {
    cause: e.cause || e
  });
  if (MC(e, "stack")) try {
    Object.defineProperty(t, "stack", {
      get() {
        return e.stack
      }
    })
  } catch {
    try {
      t.stack = e.stack
    } catch {}
  }
  if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Sd(e.statusCode, t.statusCode) : e.status && (t.statusCode = Sd(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
    const n = t.statusMessage;
    cv(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
  }
  return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function DC(e) {
  return e?.constructor?.__h3_error__ === !0
}
const FC = /[^\u0009\u0020-\u007E]/g;

function cv(e = "") {
  return e.replace(FC, "")
}

function Sd(e, t = 200) {
  return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const BC = /#/g,
  UC = /&/g,
  HC = /\//g,
  WC = /=/g,
  rp = /\+/g,
  jC = /%5e/gi,
  $C = /%60/gi,
  VC = /%7c/gi,
  zC = /%20/gi;

function qC(e) {
  return encodeURI("" + e).replace(VC, "|")
}

function Ed(e) {
  return qC(typeof e == "string" ? e : JSON.stringify(e)).replace(rp, "%2B").replace(zC, "+").replace(BC, "%23").replace(UC, "%26").replace($C, "`").replace(jC, "^").replace(HC, "%2F")
}

function Tf(e) {
  return Ed(e).replace(WC, "%3D")
}

function ru(e = "") {
  try {
    return decodeURIComponent("" + e)
  } catch {
    return "" + e
  }
}

function GC(e) {
  return ru(e.replace(rp, " "))
}

function KC(e) {
  return ru(e.replace(rp, " "))
}

function ip(e = "") {
  const t = Object.create(null);
  e[0] === "?" && (e = e.slice(1));
  for (const n of e.split("&")) {
    const r = n.match(/([^=]+)=?(.*)/) || [];
    if (r.length < 2) continue;
    const i = GC(r[1]);
    if (i === "__proto__" || i === "constructor") continue;
    const s = KC(r[2] || "");
    t[i] === void 0 ? t[i] = s : Array.isArray(t[i]) ? t[i].push(s) : t[i] = [t[i], s]
  }
  return t
}

function YC(e, t) {
  return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${Tf(e)}=${Ed(n)}`).join("&") : `${Tf(e)}=${Ed(t)}` : Tf(e)
}

function XC(e) {
  return Object.keys(e).filter(t => e[t] !== void 0).map(t => YC(t, e[t])).filter(Boolean).join("&")
}
const QC = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  JC = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  ZC = /^([/\\]\s*){2,}[^/\\]/,
  eT = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  tT = /\/$|\/\?|\/#/,
  nT = /^\.?\//;

function eo(e, t = {}) {
  return typeof t == "boolean" && (t = {
    acceptRelative: t
  }), t.strict ? QC.test(e) : JC.test(e) || (t.acceptRelative ? ZC.test(e) : !1)
}

function rT(e) {
  return !!e && eT.test(e)
}

function Cd(e = "", t) {
  return t ? tT.test(e) : e.endsWith("/")
}

function iu(e = "", t) {
  if (!t) return (Cd(e) ? e.slice(0, -1) : e) || "/";
  if (!Cd(e, !0)) return e || "/";
  let n = e,
    r = "";
  const i = e.indexOf("#");
  i !== -1 && (n = e.slice(0, i), r = e.slice(i));
  const [s, ...o] = n.split("?");
  return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function uv(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (Cd(e, !0)) return e || "/";
  let n = e,
    r = "";
  const i = e.indexOf("#");
  if (i !== -1 && (n = e.slice(0, i), r = e.slice(i), !n)) return r;
  const [s, ...o] = n.split("?");
  return s + "/" + (o.length > 0 ? `?${o.join("?")}` : "") + r
}

function Gg(e, t) {
  if (sT(t)) return e;
  const n = iu(t);
  if (!e.startsWith(n)) return e;
  const r = e.slice(n.length);
  return r[0] === "/" ? r : "/" + r
}

function iT(e, t) {
  const n = op(e),
    r = {
      ...ip(n.search),
      ...t
    };
  return n.search = XC(r), lT(n)
}

function sT(e) {
  return !e || e === "/"
}

function oT(e) {
  return e && e !== "/"
}

function sp(e, ...t) {
  let n = e || "";
  for (const r of t.filter(i => oT(i)))
    if (n) {
      const i = r.replace(nT, "");
      n = uv(n) + i
    } else n = r;
  return n
}

function aT(e, t) {
  return ru(iu(e)) === ru(iu(t))
}
const fv = Symbol.for("ufo:protocolRelative");

function op(e = "", t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, f, h = ""] = n;
    return {
      protocol: f.toLowerCase(),
      pathname: h,
      href: f + h,
      auth: "",
      host: "",
      search: "",
      hash: ""
    }
  }
  if (!eo(e, {
      acceptRelative: !0
    })) return t ? op(t + e) : Kg(e);
  const [, r = "", i, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, o = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
  r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
  const {
    pathname: l,
    search: c,
    hash: u
  } = Kg(a);
  return {
    protocol: r.toLowerCase(),
    auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
    host: o,
    pathname: l,
    search: c,
    hash: u,
    [fv]: !r
  }
}

function Kg(e = "") {
  const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname: t,
    search: n,
    hash: r
  }
}

function lT(e) {
  const t = e.pathname || "",
    n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
    r = e.hash || "",
    i = e.auth ? e.auth + "@" : "",
    s = e.host || "";
  return (e.protocol || e[fv] ? (e.protocol || "") + "//" : "") + i + s + t + n + r
}
const cT = Symbol("layout-meta"),
  $u = Symbol("route");
import.meta.url.replace(/\/app\/.*$/, "/");
const Tt = () => Ae()?.$router,
  Tl = () => Mu() ? Zt($u, Ae()._route) : Ae()._route;
const uT = (e, t, n = {}) => {
    const r = Ae(),
      i = n.global || typeof e != "string",
      s = t;
    if (!s) {
      console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
      return
    }
    i ? r._middleware.global.push(s) : r._middleware.named[e] = s
  },
  fT = () => {
    try {
      if (Ae()._processingMiddleware) return !0
    } catch {
      return !1
    }
    return !1
  },
  Td = (e, t) => {
    e ||= "/";
    const n = typeof e == "string" ? e : "path" in e ? kd(e) : Tt().resolve(e).href;
    if (t?.open) {
      const {
        target: l = "_blank",
        windowFeatures: c = {}
      } = t.open, u = [];
      for (const [f, h] of Object.entries(c)) h !== void 0 && u.push(`${f.toLowerCase()}=${h}`);
      return open(n, l, u.join(", ")), Promise.resolve()
    }
    const r = eo(n, {
        acceptRelative: !0
      }),
      i = t?.external || r;
    if (i) {
      if (!t?.external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const {
        protocol: l
      } = new URL(n, window.location.href);
      if (l && rT(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
    }
    const s = fT();
    if (!i && s) {
      if (t?.replace) {
        if (typeof e == "string") {
          const {
            pathname: l,
            search: c,
            hash: u
          } = op(e);
          return {
            path: l,
            ...c && {
              query: ip(c)
            },
            ...u && {
              hash: u
            },
            replace: !0
          }
        }
        return {
          ...e,
          replace: !0
        }
      }
      return e
    }
    const o = Tt(),
      a = Ae();
    return i ? (a._scope.stop(), t?.replace ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : t?.replace ? o.replace(e) : o.push(e)
  };

function kd(e) {
  return iT(e.path || "", e.query || {}) + (e.hash || "")
}
const dv = "__nuxt_error",
  Vu = () => Hh(Ae().payload, "error"),
  As = e => {
    const t = Ci(e);
    try {
      const n = Vu();
      Ae().hooks.callHook("app:error", t), n.value ||= t
    } catch {
      throw t
    }
    return t
  },
  dT = async (e = {}) => {
    const t = Ae(),
      n = Vu();
    t.callHook("app:error:cleared", e), e.redirect && await Tt().replace(e.redirect), n.value = void 0
  }, hv = e => !!e && typeof e == "object" && dv in e, Ci = e => {
    const t = NC(e);
    return Object.defineProperty(t, dv, {
      value: !0,
      configurable: !1,
      writable: !1
    }), t
  };

function hT(e) {
  const t = gT(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let i = 0; i < n.byteLength; i++) r.setUint8(i, t.charCodeAt(i));
  return n
}
const pT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function gT(e) {
  e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
  let t = "",
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++) n <<= 6, n |= pT.indexOf(e[i]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
  return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t
}
const mT = -1,
  _T = -2,
  yT = -3,
  vT = -4,
  bT = -5,
  wT = -6;

function AT(e, t) {
  return ST(JSON.parse(e), t)
}

function ST(e, t) {
  if (typeof e == "number") return i(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const n = e,
    r = Array(n.length);

  function i(s, o = !1) {
    if (s === mT) return;
    if (s === yT) return NaN;
    if (s === vT) return 1 / 0;
    if (s === bT) return -1 / 0;
    if (s === wT) return -0;
    if (o || typeof s != "number") throw new Error("Invalid input");
    if (s in r) return r[s];
    const a = n[s];
    if (!a || typeof a != "object") r[s] = a;
    else if (Array.isArray(a))
      if (typeof a[0] == "string") {
        const l = a[0],
          c = t?.[l];
        if (c) {
          let u = a[1];
          return typeof u != "number" && (u = n.push(a[1]) - 1), r[s] = c(i(u))
        }
        switch (l) {
          case "Date":
            r[s] = new Date(a[1]);
            break;
          case "Set":
            const u = new Set;
            r[s] = u;
            for (let d = 1; d < a.length; d += 1) u.add(i(a[d]));
            break;
          case "Map":
            const f = new Map;
            r[s] = f;
            for (let d = 1; d < a.length; d += 2) f.set(i(a[d]), i(a[d + 1]));
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
            const h = Object.create(null);
            r[s] = h;
            for (let d = 1; d < a.length; d += 2) h[a[d]] = i(a[d + 1]);
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
            const d = globalThis[l],
              g = new d(i(a[1]));
            r[s] = a[2] !== void 0 ? g.subarray(a[2], a[3]) : g;
            break
          }
          case "ArrayBuffer": {
            const d = a[1],
              g = hT(d);
            r[s] = g;
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
            const d = l.slice(9);
            r[s] = Temporal[d].from(a[1]);
            break
          }
          case "URL": {
            const d = new URL(a[1]);
            r[s] = d;
            break
          }
          case "URLSearchParams": {
            const d = new URLSearchParams(a[1]);
            r[s] = d;
            break
          }
          default:
            throw new Error(`Unknown type ${l}`)
        }
      } else {
        const l = new Array(a.length);
        r[s] = l;
        for (let c = 0; c < a.length; c += 1) {
          const u = a[c];
          u !== _T && (l[c] = i(u))
        }
      }
    else {
      const l = {};
      r[s] = l;
      for (const c in a) {
        if (c === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
        const u = a[c];
        l[c] = i(u)
      }
    }
    return r[s]
  }
  return i(0)
}
const ET = new Set(["link", "style", "script", "noscript"]),
  CT = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
  Yg = new Set(["base", "meta", "link", "style", "script", "noscript"]),
  TT = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
  kT = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
  RT = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]),
  xT = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
  ap = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]),
  il = {
    META: new Set(["twitter"]),
    OG: new Set(["og", "book", "article", "profile", "fb"]),
    MEDIA: new Set(["ogImage", "ogVideo", "ogAudio", "twitterImage"]),
    HTTP_EQUIV: new Set(["contentType", "defaultStyle", "xUaCompatible"])
  },
  LT = {
    articleExpirationTime: "article:expiration_time",
    articleModifiedTime: "article:modified_time",
    articlePublishedTime: "article:published_time",
    bookReleaseDate: "book:release_date",
    fbAppId: "fb:app_id",
    ogAudioSecureUrl: "og:audio:secure_url",
    ogAudioUrl: "og:audio",
    ogImageSecureUrl: "og:image:secure_url",
    ogImageUrl: "og:image",
    ogSiteName: "og:site_name",
    ogVideoSecureUrl: "og:video:secure_url",
    ogVideoUrl: "og:video",
    profileFirstName: "profile:first_name",
    profileLastName: "profile:last_name",
    profileUsername: "profile:username",
    msapplicationConfig: "msapplication-Config",
    msapplicationTileColor: "msapplication-TileColor",
    msapplicationTileImage: "msapplication-TileImage"
  },
  pv = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({
          key: e,
          value: t
        }) => `${_i(e)}=${t}`
      }
    },
    refresh: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: ";",
        resolve: ({
          key: e,
          value: t
        }) => e === "seconds" ? `${t}` : void 0
      }
    },
    robots: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({
          key: e,
          value: t
        }) => typeof t == "boolean" ? _i(e) : `${_i(e)}:${t}`
      }
    },
    contentSecurityPolicy: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: "; ",
        resolve: ({
          key: e,
          value: t
        }) => `${_i(e)} ${t}`
      }
    },
    charset: {}
  };

function _i(e) {
  const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(),
    n = t.indexOf("-");
  return n === -1 ? t : il.META.has(t.slice(0, n)) || il.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}

function gv(e) {
  return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t))
}

function Rd(e) {
  return Array.isArray(e) ? e.map(Rd) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [_i(t), Rd(n)]))
}

function mv(e, t = {}) {
  const {
    entrySeparator: n = "",
    keyValueSeparator: r = "",
    wrapValue: i,
    resolve: s
  } = t;
  return Object.entries(e).map(([o, a]) => {
    if (s) {
      const c = s({
        key: o,
        value: a
      });
      if (c !== void 0) return c
    }
    const l = typeof a == "object" ? mv(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && i ? `${i}${a.replace(new RegExp(i,"g"),`\\${i}`)}${i}` : a;
    return `${o}${r}${l}`
  }).join(n)
}

function Xg(e, t) {
  const n = gv(t),
    r = _i(e),
    i = _v(r);
  if (!ap.has(r)) return [{
    [i]: r,
    ...n
  }];
  const s = Object.fromEntries(Object.entries(n).map(([o, a]) => [`${e}${o==="url"?"":`${o[0].toUpperCase()}${o.slice(1)}`}`, a]));
  return su(s || {}).sort((o, a) => (o[i]?.length || 0) - (a[i]?.length || 0))
}

function _v(e) {
  if (pv[e]?.metaKey === "http-equiv" || il.HTTP_EQUIV.has(e)) return "http-equiv";
  const t = _i(e),
    n = t.indexOf(":");
  return n === -1 ? "name" : il.OG.has(t.slice(0, n)) ? "property" : "name"
}

function PT(e) {
  return LT[e] || _i(e)
}

function OT(e, t) {
  return t === "refresh" ? `${e.seconds};url=${e.url}` : mv(Rd(e), {
    keyValueSeparator: "=",
    entrySeparator: ", ",
    resolve: ({
      value: n,
      key: r
    }) => n === null ? "" : typeof n == "boolean" ? r : void 0,
    ...pv[t]?.unpack
  })
}

function su(e) {
  const t = [],
    n = {};
  for (const [i, s] of Object.entries(e)) {
    if (Array.isArray(s)) {
      if (i === "themeColor") {
        s.forEach(o => {
          typeof o == "object" && o !== null && t.push({
            name: "theme-color",
            ...o
          })
        });
        continue
      }
      for (const o of s)
        if (typeof o == "object" && o !== null) {
          const a = [],
            l = [];
          for (const [c, u] of Object.entries(o)) {
            const f = `${i}${c==="url"?"":`:${c}`}`,
              h = su({
                [f]: u
              });
            (c === "url" ? a : l).push(...h)
          }
          t.push(...a, ...l)
        } else t.push(...typeof o == "string" ? su({
          [i]: o
        }) : Xg(i, o));
      continue
    }
    if (typeof s == "object" && s)
      if (il.MEDIA.has(i)) {
        const o = i.startsWith("twitter") ? "twitter" : "og",
          a = i.replace(/^(og|twitter)/, "").toLowerCase(),
          l = o === "twitter" ? "name" : "property";
        s.url && t.push({
          [l]: `${o}:${a}`,
          content: s.url
        }), s.secureUrl && t.push({
          [l]: `${o}:${a}:secure_url`,
          content: s.secureUrl
        });
        for (const [c, u] of Object.entries(s)) c !== "url" && c !== "secureUrl" && t.push({
          [l]: `${o}:${a}:${c}`,
          content: u
        })
      } else ap.has(_i(i)) ? t.push(...Xg(i, s)) : n[i] = gv(s);
    else n[i] = s
  }
  const r = Object.entries(n).map(([i, s]) => {
    if (i === "charset") return {
      charset: s === null ? "_null" : s
    };
    const o = _v(i),
      a = PT(i),
      l = s === null ? "_null" : typeof s == "object" ? OT(s, i) : typeof s == "number" ? s.toString() : s;
    return o === "http-equiv" ? {
      "http-equiv": a,
      content: l
    } : {
      [o]: a,
      content: l
    }
  });
  return [...t, ...r].map(i => "content" in i && i.content === "_null" ? {
    ...i,
    content: null
  } : i)
}
const IT = {
    key: "flatMeta",
    hooks: {
      "entries:normalize": e => {
        const t = [];
        e.tags = e.tags.map(n => n.tag !== "_flatMeta" ? n : (t.push(su(n.props).map(r => ({
          ...n,
          tag: "meta",
          props: r
        }))), !1)).filter(Boolean).concat(...t)
      }
    }
  },
  MT = ["name", "property", "http-equiv"],
  NT = new Set(["viewport", "description", "keywords", "robots"]);

function yv(e) {
  const t = e.split(":");
  return t.length ? ap.has(t[1]) : !1
}

function xd(e) {
  const {
    props: t,
    tag: n
  } = e;
  if (kT.has(n)) return n;
  if (n === "link" && t.rel === "canonical") return "canonical";
  if (t.charset) return "charset";
  if (e.tag === "meta") {
    for (const r of MT)
      if (t[r] !== void 0) {
        const i = t[r],
          s = i.includes(":"),
          o = NT.has(i),
          l = !(s || o) && e.key ? `:key:${e.key}` : "";
        return `${n}:${i}${l}`
      }
  }
  if (e.key) return `${n}:key:${e.key}`;
  if (t.id) return `${n}:id:${t.id}`;
  if (CT.has(n)) {
    const r = e.textContent || e.innerHTML;
    if (r) return `${n}:content:${r}`
  }
}

function Qg(e) {
  const t = e._h || e._d;
  if (t) return t;
  const n = e.textContent || e.innerHTML;
  return n || `${e.tag}:${Object.entries(e.props).map(([r,i])=>`${r}:${String(i)}`).join(",")}`
}

function ou(e, t, n) {
  typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
  let i;
  if (t && (i = t(n, e)), Array.isArray(i)) return i.map(s => ou(s, t));
  if (i?.constructor === Object) {
    const s = {};
    for (const o of Object.keys(i)) s[o] = ou(i[o], t, o);
    return s
  }
  return i
}

function DT(e, t) {
  const n = e === "style" ? new Map : new Set;

  function r(i) {
    const s = i.trim();
    if (s)
      if (e === "style") {
        const [o, ...a] = s.split(":").map(l => l.trim());
        o && a.length && n.set(o, a.join(":"))
      } else s.split(" ").filter(Boolean).forEach(o => n.add(o))
  }
  return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach(i => r(i)) : t && typeof t == "object" && Object.entries(t).forEach(([i, s]) => {
    s && s !== "false" && (e === "style" ? n.set(i.trim(), s) : r(i))
  }), n
}

function vv(e, t) {
  return e.props = e.props || {}, t ? e.tag === "templateParams" ? (e.props = t, e) : (Object.entries(t).forEach(([n, r]) => {
    if (r === null) {
      e.props[n] = null;
      return
    }
    if (n === "class" || n === "style") {
      e.props[n] = DT(n, r);
      return
    }
    if (RT.has(n)) {
      if (["textContent", "innerHTML"].includes(n) && typeof r == "object") {
        let o = t.type;
        if (t.type || (o = "application/json"), !o?.endsWith("json") && o !== "speculationrules") return;
        t.type = o, e.props.type = o, e[n] = JSON.stringify(r)
      } else e[n] = r;
      return
    }
    const i = String(r),
      s = n.startsWith("data-");
    i === "true" || i === "" ? e.props[n] = s ? i : !0 : !r && s && i === "false" ? e.props[n] = "false" : r !== void 0 && (e.props[n] = r)
  }), e) : e
}

function FT(e, t) {
  const n = typeof t == "object" && typeof t != "function" ? t : {
      [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    },
    r = vv({
      tag: e,
      props: {}
    }, n);
  return r.key && ET.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map(i => ({
    ...r,
    props: {
      ...r.props,
      content: i
    }
  })) : r
}

function BT(e, t) {
  if (!e) return [];
  typeof e == "function" && (e = e());
  const n = (i, s) => {
    for (let o = 0; o < t.length; o++) s = t[o](i, s);
    return s
  };
  e = n(void 0, e);
  const r = [];
  return e = ou(e, n), Object.entries(e || {}).forEach(([i, s]) => {
    if (s !== void 0)
      for (const o of Array.isArray(s) ? s : [s]) r.push(FT(i, o))
  }), r.flat()
}
const Jg = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w,
  Zg = {
    base: -10,
    title: 10
  },
  UT = {
    critical: -8,
    high: -1,
    low: 2
  },
  em = {
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
  HT = /@import/,
  la = e => e === "" || e === !0;

function WT(e, t) {
  if (typeof t.tagPriority == "number") return t.tagPriority;
  let n = 100;
  const r = UT[t.tagPriority] || 0,
    i = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : em;
  if (t.tag in Zg) n = Zg[t.tag];
  else if (t.tag === "meta") {
    const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
    s && (n = em.meta[s])
  } else t.tag === "link" && t.props.rel ? n = i.link[t.props.rel] : t.tag === "script" ? la(t.props.async) ? n = i.script.async : t.props.src && !la(t.props.defer) && !la(t.props.async) && t.props.type !== "module" && !t.props.type?.endsWith("json") ? n = i.script.sync : la(t.props.defer) && t.props.src && !la(t.props.async) && (n = i.script.defer) : t.tag === "style" && (n = t.innerHTML && HT.test(t.innerHTML) ? i.style.imported : i.style.sync);
  return (n || 100) + r
}

function tm(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    r = n.key || String(e.plugins.size + 1);
  e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}))
}

function jT(e = {}) {
  const t = rv();
  t.addHooks(e.hooks || {});
  const n = !e.document,
    r = new Map,
    i = new Map,
    s = new Set,
    o = {
      _entryCount: 1,
      plugins: i,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      ssr: n,
      entries: r,
      headEntries() {
        return [...r.values()]
      },
      use: a => tm(o, a),
      push(a, l) {
        const c = {
          ...l || {}
        };
        delete c.head;
        const u = c._index ?? o._entryCount++,
          f = {
            _i: u,
            input: a,
            options: c
          },
          h = {
            _poll(d = !1) {
              o.dirty = !0, !d && s.add(u), t.callHook("entries:updated", o)
            },
            dispose() {
              r.delete(u) && o.invalidate()
            },
            patch(d) {
              (!c.mode || c.mode === "server" && n || c.mode === "client" && !n) && (f.input = d, r.set(u, f), h._poll())
            }
          };
        return h.patch(a), h
      },
      async resolveTags() {
        const a = {
          tagMap: new Map,
          tags: [],
          entries: [...o.entries.values()]
        };
        for (await t.callHook("entries:resolve", a); s.size;) {
          const h = s.values().next().value;
          s.delete(h);
          const d = r.get(h);
          if (d) {
            const g = {
              tags: BT(d.input, e.propResolvers || []).map(p => Object.assign(p, d.options)),
              entry: d
            };
            await t.callHook("entries:normalize", g), d._tags = g.tags.map((p, m) => (p._w = WT(o, p), p._p = (d._i << 10) + m, p._d = xd(p), p))
          }
        }
        let l = !1;
        a.entries.flatMap(h => (h._tags || []).map(d => ({
          ...d,
          props: {
            ...d.props
          }
        }))).sort(Jg).reduce((h, d) => {
          const g = String(d._d || d._p);
          if (!h.has(g)) return h.set(g, d);
          const p = h.get(g);
          if ((d?.tagDuplicateStrategy || (xT.has(d.tag) ? "merge" : null) || (d.key && d.key === p.key ? "merge" : null)) === "merge") {
            const v = {
              ...p.props
            };
            Object.entries(d.props).forEach(([y, _]) => v[y] = y === "style" ? new Map([...p.props.style || new Map, ..._]) : y === "class" ? new Set([...p.props.class || new Set, ..._]) : _), h.set(g, {
              ...d,
              props: v
            })
          } else d._p >> 10 === p._p >> 10 && d.tag === "meta" && yv(g) ? (h.set(g, Object.assign([...Array.isArray(p) ? p : [p], d], d)), l = !0) : (d._w === p._w ? d._p > p._p : d?._w < p?._w) && h.set(g, d);
          return h
        }, a.tagMap);
        const c = a.tagMap.get("title"),
          u = a.tagMap.get("titleTemplate");
        if (o._title = c?.textContent, u) {
          const h = u?.textContent;
          if (o._titleTemplate = h, h) {
            let d = typeof h == "function" ? h(c?.textContent) : h;
            typeof d == "string" && !o.plugins.has("template-params") && (d = d.replace("%s", c?.textContent || "")), c ? d === null ? a.tagMap.delete("title") : a.tagMap.set("title", {
              ...c,
              textContent: d
            }) : (u.tag = "title", u.textContent = d)
          }
        }
        a.tags = Array.from(a.tagMap.values()), l && (a.tags = a.tags.flat().sort(Jg)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
        const f = [];
        for (const h of a.tags) {
          const {
            innerHTML: d,
            tag: g,
            props: p
          } = h;
          if (TT.has(g) && !(Object.keys(p).length === 0 && !h.innerHTML && !h.textContent) && !(g === "meta" && !p.content && !p["http-equiv"] && !p.charset)) {
            if (g === "script" && d) {
              if (p.type?.endsWith("json")) {
                const m = typeof d == "string" ? d : JSON.stringify(d);
                h.innerHTML = m.replace(/</g, "\\u003C")
              } else typeof d == "string" && (h.innerHTML = d.replace(new RegExp(`</${g}`, "g"), `<\\/${g}`));
              h._d = xd(h)
            }
            f.push(h)
          }
        }
        return f
      },
      invalidate() {
        for (const a of r.values()) s.add(a._i);
        o.dirty = !0, t.callHook("entries:updated", o)
      }
    };
  return (e?.plugins || []).forEach(a => tm(o, a)), o.hooks.callHook("init", o), e.init?.forEach(a => a && o.push(a)), o
}
const $T = (e, t) => at(t) ? Er(t) : t,
  lp = "usehead";

function VT(e) {
  return {
    install(n) {
      n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(lp, e)
    }
  }.install
}

function bv() {
  if (Mu()) {
    const e = Zt(lp);
    if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    return e
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}

function wv(e, t = {}) {
  const n = t.head || bv();
  return n.ssr ? n.push(e || {}, t) : zT(n, e, t)
}

function zT(e, t, n = {}) {
  const r = et(!1);
  let i;
  return r0(() => {
    const o = r.value ? {} : ou(t, $T);
    i ? i.patch(o) : i = e.push(o, n)
  }), Nn() && (Mi(() => {
    i.dispose()
  }), qh(() => {
    r.value = !0
  }), zh(() => {
    r.value = !1
  })), i
}

function qT(e = {}, t = {}) {
  (t.head || bv()).use(IT);
  const {
    title: r,
    titleTemplate: i,
    ...s
  } = e;
  return wv({
    title: r,
    titleTemplate: i,
    _flatMeta: s
  }, t)
}

function Av(e) {
  const t = e || Ae();
  return t.ssrContext?.head || t.runWithContext(() => {
    if (Mu()) {
      const n = Zt(lp);
      if (!n) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
      return n
    }
  })
}

function kl(e, t = {}) {
  const n = t.head || Av(t.nuxt);
  return wv(e, {
    head: n,
    ...t
  })
}

function KF(e, t = {}) {
  const n = t.head || Av(t.nuxt);
  return qT(e, {
    head: n,
    ...t
  })
}
const GT = "modulepreload",
  KT = function(e, t) {
    return new URL(e, t).href
  },
  nm = {},
  jt = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      let c = function(u) {
        return Promise.all(u.map(f => Promise.resolve(f).then(h => ({
          status: "fulfilled",
          value: h
        }), h => ({
          status: "rejected",
          reason: h
        }))))
      };
      const o = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        l = a?.nonce || a?.getAttribute("nonce");
      i = c(n.map(u => {
        if (u = KT(u, r), u in nm) return;
        nm[u] = !0;
        const f = u.endsWith(".css"),
          h = f ? '[rel="stylesheet"]' : "";
        if (r)
          for (let g = o.length - 1; g >= 0; g--) {
            const p = o[g];
            if (p.href === u && (!f || p.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${u}"]${h}`)) return;
        const d = document.createElement("link");
        if (d.rel = f ? "stylesheet" : GT, f || (d.as = "script"), d.crossOrigin = "", d.href = u, l && d.setAttribute("nonce", l), document.head.appendChild(d), f) return new Promise((g, p) => {
          d.addEventListener("load", g), d.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${u}`)))
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
      return t().catch(s)
    })
  };
let bc, wc;

function YT() {
  return bc = $fetch(np(`builds/meta/${Dn().app.buildId}.json`), {
    responseType: "json"
  }), bc.then(e => {
    wc = IC(e.matcher)
  }).catch(e => {
    console.error("[nuxt] Error fetching app manifest.", e)
  }), bc
}

function zu() {
  return bc || YT()
}
async function cp(e) {
  const t = typeof e == "string" ? e : e.path;
  if (await zu(), !wc) return console.error("[nuxt] Error creating app manifest matcher.", wc), {};
  try {
    return ju({}, ...wc.matchAll(t).reverse())
  } catch (n) {
    return console.error("[nuxt] Error matching route rules.", n), {}
  }
}
async function rm(e, t = {}) {
  if (!await Ev(e)) return null;
  const r = await QT(e, t);
  return await Sv(r) || null
}
const XT = "_payload.json";
async function QT(e, t = {}) {
  const n = new URL(e, "http://localhost");
  if (n.host !== "localhost" || eo(n.pathname, {
      acceptRelative: !0
    })) throw new Error("Payload URL must not include hostname: " + e);
  const r = Dn(),
    i = t.hash || (t.fresh ? Date.now() : r.app.buildId),
    s = r.app.cdnURL,
    o = s && await Ev(e) ? s : r.app.baseURL;
  return sp(o, n.pathname, XT + (i ? `?${i}` : ""))
}
async function Sv(e) {
  const t = fetch(e, {
    cache: "force-cache"
  }).then(n => n.text().then(Cv));
  try {
    return await t
  } catch (n) {
    console.warn("[nuxt] Cannot load payload ", e, n)
  }
  return null
}
async function Ev(e = Tl().path) {
  const t = Ae();
  return e = e.replace(/\/$/, ""), (await zu()).prerendered.includes(e) ? !0 : t.runWithContext(async () => {
    const r = await cp({
      path: e
    });
    return !!r.prerender && !r.redirect
  })
}
let ys = null;
async function JT() {
  if (ys) return ys;
  const e = document.getElementById("__NUXT_DATA__");
  if (!e) return {};
  const t = await Cv(e.textContent || ""),
    n = e.dataset.src ? await Sv(e.dataset.src) : void 0;
  return ys = {
    ...t,
    ...n,
    ...window.__NUXT__
  }, ys.config?.public && (ys.config.public = ni(ys.config.public)), ys
}
async function Cv(e) {
  return await AT(e, Ae()._payloadRevivers)
}

function ZT(e, t) {
  Ae()._payloadRevivers[e] = t
}
const ek = [
    ["NuxtError", e => Ci(e)],
    ["EmptyShallowRef", e => Jr(e === "_" ? void 0 : e === "0n" ? BigInt(0) : nl(e))],
    ["EmptyRef", e => et(e === "_" ? void 0 : e === "0n" ? BigInt(0) : nl(e))],
    ["ShallowRef", e => Jr(e)],
    ["ShallowReactive", e => mi(e)],
    ["Ref", e => et(e)],
    ["Reactive", e => ni(e)]
  ],
  tk = Je({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, i] of ek) ZT(r, i);
      Object.assign(e.payload, ([t, n] = Ei(() => e.runWithContext(JT)), t = await t, n(), t)), delete window.__NUXT__
    }
  });
async function up(e, t = {}) {
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const r = {
    shouldRender: !0,
    tags: []
  };
  if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async i => {
    const s = new Map,
      o = new Promise(d => {
        e.resolveTags().then(g => {
          d(g.map(p => {
            const m = s.get(p._d) || 0,
              v = {
                tag: p,
                id: (m ? `${p._d}:${m}` : p._d) || Qg(p),
                shouldRender: !0
              };
            return p._d && yv(p._d) && s.set(p._d, m + 1), v
          }))
        })
      });
    let a = e._dom;
    if (!a) {
      a = {
        title: n.title,
        elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
      };
      for (const d of ["body", "head"]) {
        const g = n[d]?.children;
        for (const p of g) {
          const m = p.tagName.toLowerCase();
          if (!Yg.has(m)) continue;
          const v = vv({
            tag: m,
            props: {}
          }, {
            innerHTML: p.innerHTML,
            ...p.getAttributeNames().reduce((y, _) => (y[_] = p.getAttribute(_), y), {}) || {}
          });
          if (v.key = p.getAttribute("data-hid") || void 0, v._d = xd(v) || Qg(v), a.elMap.has(v._d)) {
            let y = 1,
              _ = v._d;
            for (; a.elMap.has(_);) _ = `${v._d}:${y++}`;
            a.elMap.set(_, p)
          } else a.elMap.set(v._d, p)
        }
      }
    }
    a.pendingSideEffects = {
      ...a.sideEffects
    }, a.sideEffects = {};

    function l(d, g, p) {
      const m = `${d}:${g}`;
      a.sideEffects[m] = p, delete a.pendingSideEffects[m]
    }

    function c({
      id: d,
      $el: g,
      tag: p
    }) {
      const m = p.tag.endsWith("Attrs");
      a.elMap.set(d, g), m || (p.textContent && p.textContent !== g.textContent && (g.textContent = p.textContent), p.innerHTML && p.innerHTML !== g.innerHTML && (g.innerHTML = p.innerHTML), l(d, "el", () => {
        g?.remove(), a.elMap.delete(d)
      }));
      for (const v in p.props) {
        if (!Object.prototype.hasOwnProperty.call(p.props, v)) continue;
        const y = p.props[v];
        if (v.startsWith("on") && typeof y == "function") {
          const b = g?.dataset;
          if (b && b[`${v}fired`]) {
            const w = v.slice(0, -5);
            y.call(g, new Event(w.substring(2)))
          }
          g.getAttribute(`data-${v}`) !== "" && ((p.tag === "bodyAttrs" ? n.defaultView : g).addEventListener(v.substring(2), y.bind(g)), g.setAttribute(`data-${v}`, ""));
          continue
        }
        const _ = `attr:${v}`;
        if (v === "class") {
          if (!y) continue;
          for (const b of y) m && l(d, `${_}:${b}`, () => g.classList.remove(b)), !g.classList.contains(b) && g.classList.add(b)
        } else if (v === "style") {
          if (!y) continue;
          for (const [b, w] of y) l(d, `${_}:${b}`, () => {
            g.style.removeProperty(b)
          }), g.style.setProperty(b, w)
        } else y !== !1 && y !== null && (g.getAttribute(v) !== y && g.setAttribute(v, y === !0 ? "" : String(y)), m && l(d, _, () => g.removeAttribute(v)))
      }
    }
    const u = [],
      f = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      },
      h = await o;
    for (const d of h) {
      const {
        tag: g,
        shouldRender: p,
        id: m
      } = d;
      if (p) {
        if (g.tag === "title") {
          n.title = g.textContent, l("title", "", () => n.title = a.title);
          continue
        }
        d.$el = d.$el || a.elMap.get(m), d.$el ? c(d) : Yg.has(g.tag) && u.push(d)
      }
    }
    for (const d of u) {
      const g = d.tag.tagPosition || "head";
      d.$el = n.createElement(d.tag.tag), c(d), f[g] = f[g] || n.createDocumentFragment(), f[g].appendChild(d.$el)
    }
    for (const d of h) await e.hooks.callHook("dom:renderTag", d, n, l);
    f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose);
    for (const d in a.pendingSideEffects) a.pendingSideEffects[d]();
    e._dom = a, await e.hooks.callHook("dom:rendered", {
      renders: h
    }), i()
  }).finally(() => {
    e._domUpdatePromise = void 0, e.dirty = !1
  })), e._domUpdatePromise
}

function nk(e = {}) {
  const t = e.domOptions?.render || up;
  e.document = e.document || (typeof window < "u" ? document : void 0);
  const n = e.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || !1;
  return jT({
    ...e,
    plugins: [...e.plugins || [], {
      key: "client",
      hooks: {
        "entries:updated": t
      }
    }],
    init: [n ? JSON.parse(n) : !1, ...e.init || []]
  })
}

function rk(e, t) {
  let n = 0;
  return () => {
    const r = ++n;
    t(() => {
      n === r && e()
    })
  }
}

function ik(e = {}) {
  const t = nk({
    domOptions: {
      render: rk(() => up(t), n => setTimeout(n, 0))
    },
    ...e
  });
  return t.install = VT(t), t
}
const sk = {
    disableDefaults: !0
  },
  ok = Je({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = ik(sk);
      e.vueApp.use(t);
      {
        let n = !0;
        const r = async () => {
          n = !1, await up(t)
        };
        t.hooks.hook("dom:beforeRender", i => {
          i.shouldRender = !n
        }), e.hooks.hook("page:start", () => {
          n = !0
        }), e.hooks.hook("page:finish", () => {
          e.isHydrating || r()
        }), e.hooks.hook("app:error", r), e.hooks.hook("app:suspense:resolve", r)
      }
    }
  });
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const ho = typeof document < "u";

function Tv(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function ak(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Tv(e.default)
}
const Ge = Object.assign;

function kf(e, t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    n[r] = xr(i) ? i.map(e) : e(i)
  }
  return n
}
const Na = () => {},
  xr = Array.isArray;

function im(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n
}
const kv = /#/g,
  lk = /&/g,
  ck = /\//g,
  uk = /=/g,
  fk = /\?/g,
  Rv = /\+/g,
  dk = /%5B/g,
  hk = /%5D/g,
  xv = /%5E/g,
  pk = /%60/g,
  Lv = /%7B/g,
  gk = /%7C/g,
  Pv = /%7D/g,
  mk = /%20/g;

function fp(e) {
  return e == null ? "" : encodeURI("" + e).replace(gk, "|").replace(dk, "[").replace(hk, "]")
}

function _k(e) {
  return fp(e).replace(Lv, "{").replace(Pv, "}").replace(xv, "^")
}

function Ld(e) {
  return fp(e).replace(Rv, "%2B").replace(mk, "+").replace(kv, "%23").replace(lk, "%26").replace(pk, "`").replace(Lv, "{").replace(Pv, "}").replace(xv, "^")
}

function yk(e) {
  return Ld(e).replace(uk, "%3D")
}

function vk(e) {
  return fp(e).replace(kv, "%23").replace(fk, "%3F")
}

function bk(e) {
  return vk(e).replace(ck, "%2F")
}

function sl(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e)
  } catch {}
  return "" + e
}
const wk = /\/$/,
  Ak = e => e.replace(wk, "");

function Rf(e, t, n = "/") {
  let r, i = {},
    s = "",
    o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return l = a >= 0 && l > a ? -1 : l, l >= 0 && (r = t.slice(0, l), s = t.slice(l, a > 0 ? a : t.length), i = e(s.slice(1))), a >= 0 && (r = r || t.slice(0, a), o = t.slice(a, t.length)), r = Tk(r ?? t, n), {
    fullPath: r + s + o,
    path: r,
    query: i,
    hash: sl(o)
  }
}

function Sk(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "")
}

function sm(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Ek(e, t, n) {
  const r = t.matched.length - 1,
    i = n.matched.length - 1;
  return r > -1 && r === i && Bo(t.matched[r], n.matched[i]) && Ov(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Bo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}

function Ov(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e)
    if (!Ck(e[n], t[n])) return !1;
  return !0
}

function Ck(e, t) {
  return xr(e) ? om(e, t) : xr(t) ? om(t, e) : e === t
}

function om(e, t) {
  return xr(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Tk(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
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
const ir = {
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
let Pd = (function(e) {
    return e.pop = "pop", e.push = "push", e
  })({}),
  xf = (function(e) {
    return e.back = "back", e.forward = "forward", e.unknown = "", e
  })({});

function kk(e) {
  if (!e)
    if (ho) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ak(e)
}
const Rk = /^[^#]+#/;

function xk(e, t) {
  return e.replace(Rk, "#") + t
}

function Lk(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  }
}
const qu = () => ({
  left: window.scrollX,
  top: window.scrollY
});

function Pk(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!i) return;
    t = Lk(i, e)
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function am(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Od = new Map;

function Ok(e, t) {
  Od.set(e, t)
}

function Ik(e) {
  const t = Od.get(e);
  return Od.delete(e), t
}

function Mk(e) {
  return typeof e == "string" || e && typeof e == "object"
}

function Iv(e) {
  return typeof e == "string" || typeof e == "symbol"
}
let yt = (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e
})({});
const Mv = Symbol("");
yt.MATCHER_NOT_FOUND + "", yt.NAVIGATION_GUARD_REDIRECT + "", yt.NAVIGATION_ABORTED + "", yt.NAVIGATION_CANCELLED + "", yt.NAVIGATION_DUPLICATED + "";

function Uo(e, t) {
  return Ge(new Error, {
    type: e,
    [Mv]: !0
  }, t)
}

function oi(e, t) {
  return e instanceof Error && Mv in e && (t == null || !!(e.type & t))
}
const Nk = ["params", "query", "hash"];

function Dk(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Nk) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2)
}

function Fk(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const i = n[r].replace(Rv, " "),
      s = i.indexOf("="),
      o = sl(s < 0 ? i : i.slice(0, s)),
      a = s < 0 ? null : sl(i.slice(s + 1));
    if (o in t) {
      let l = t[o];
      xr(l) || (l = t[o] = [l]), l.push(a)
    } else t[o] = a
  }
  return t
}

function lm(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = yk(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue
    }(xr(r) ? r.map(i => i && Ld(i)) : [r && Ld(r)]).forEach(i => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i))
    })
  }
  return t
}

function Bk(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = xr(r) ? r.map(i => i == null ? null : "" + i) : r == null ? r : "" + r)
  }
  return t
}
const Nv = Symbol(""),
  cm = Symbol(""),
  dp = Symbol(""),
  Dv = Symbol(""),
  Id = Symbol("");

function ca() {
  let e = [];

  function t(r) {
    return e.push(r), () => {
      const i = e.indexOf(r);
      i > -1 && e.splice(i, 1)
    }
  }

  function n() {
    e = []
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  }
}

function Uk(e, t, n) {
  const r = () => {
    e[t].delete(n)
  };
  Zs(r), qh(r), zh(() => {
    e[t].add(n)
  }), e[t].add(n)
}

function YF(e) {
  const t = Zt(Nv, {}).value;
  t && Uk(t, "leaveGuards", e)
}

function Vi(e, t, n, r, i, s = o => o()) {
  const o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const c = h => {
        h === !1 ? l(Uo(yt.NAVIGATION_ABORTED, {
          from: n,
          to: t
        })) : h instanceof Error ? l(h) : Mk(h) ? l(Uo(yt.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: h
        })) : (o && r.enterCallbacks[i] === o && typeof h == "function" && o.push(h), a())
      },
      u = s(() => e.call(r && r.instances[i], t, n, c));
    let f = Promise.resolve(u);
    e.length < 3 && (f = f.then(c)), f.catch(h => l(h))
  })
}

function Lf(e, t, n, r, i = s => s()) {
  const s = [];
  for (const o of e)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(t !== "beforeRouteEnter" && !o.instances[a]))
        if (Tv(l)) {
          const c = (l.__vccOpts || l)[t];
          c && s.push(Vi(c, n, r, o, a, i))
        } else {
          let c = l();
          s.push(() => c.then(u => {
            if (!u) throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
            const f = ak(u) ? u.default : u;
            o.mods[a] = u, o.components[a] = f;
            const h = (f.__vccOpts || f)[t];
            return h && Vi(h, n, r, o, a, i)()
          }))
        }
    }
  return s
}

function Hk(e, t) {
  const n = [],
    r = [],
    i = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < s; o++) {
    const a = t.matched[o];
    a && (e.matched.find(c => Bo(c, a)) ? r.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find(c => Bo(c, l)) || i.push(l))
  }
  return [n, r, i]
}
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Wk = () => location.protocol + "//" + location.host;

function Fv(e, t) {
  const {
    pathname: n,
    search: r,
    hash: i
  } = t, s = e.indexOf("#");
  if (s > -1) {
    let o = i.includes(e.slice(s)) ? e.slice(s).length : 1,
      a = i.slice(o);
    return a[0] !== "/" && (a = "/" + a), sm(a, "")
  }
  return sm(n, e) + r + i
}

function jk(e, t, n, r) {
  let i = [],
    s = [],
    o = null;
  const a = ({
    state: h
  }) => {
    const d = Fv(e, location),
      g = n.value,
      p = t.value;
    let m = 0;
    if (h) {
      if (n.value = d, t.value = h, o && o === g) {
        o = null;
        return
      }
      m = p ? h.position - p.position : 0
    } else r(d);
    i.forEach(v => {
      v(n.value, g, {
        delta: m,
        type: Pd.pop,
        direction: m ? m > 0 ? xf.forward : xf.back : xf.unknown
      })
    })
  };

  function l() {
    o = n.value
  }

  function c(h) {
    i.push(h);
    const d = () => {
      const g = i.indexOf(h);
      g > -1 && i.splice(g, 1)
    };
    return s.push(d), d
  }

  function u() {
    if (document.visibilityState === "hidden") {
      const {
        history: h
      } = window;
      if (!h.state) return;
      h.replaceState(Ge({}, h.state, {
        scroll: qu()
      }), "")
    }
  }

  function f() {
    for (const h of s) h();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u)
  }
  return window.addEventListener("popstate", a), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
    pauseListeners: l,
    listen: c,
    destroy: f
  }
}

function um(e, t, n, r = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: i ? qu() : null
  }
}

function $k(e) {
  const {
    history: t,
    location: n
  } = window, r = {
    value: Fv(e, n)
  }, i = {
    value: t.state
  };
  i.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);

  function s(l, c, u) {
    const f = e.indexOf("#"),
      h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Wk() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", h), i.value = c
    } catch (d) {
      console.error(d), n[u ? "replace" : "assign"](h)
    }
  }

  function o(l, c) {
    s(l, Ge({}, t.state, um(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position
    }), !0), r.value = l
  }

  function a(l, c) {
    const u = Ge({}, i.value, t.state, {
      forward: l,
      scroll: qu()
    });
    s(u.current, u, !0), s(l, Ge({}, um(r.value, l, null), {
      position: u.position + 1
    }, c), !1), r.value = l
  }
  return {
    location: r,
    state: i,
    push: a,
    replace: o
  }
}

function Bv(e) {
  e = kk(e);
  const t = $k(e),
    n = jk(e, t.state, t.location, t.replace);

  function r(s, o = !0) {
    o || n.pauseListeners(), history.go(s)
  }
  const i = Ge({
    location: "",
    base: e,
    go: r,
    createHref: xk.bind(null, e)
  }, t, n);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), i
}

function Vk(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Bv(e)
}
let Ls = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e
})({});
var Dt = (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e
})(Dt || {});
const zk = {
    type: Ls.Static,
    value: ""
  },
  qk = /[a-zA-Z0-9_]/;

function Gk(e) {
  if (!e) return [
    []
  ];
  if (e === "/") return [
    [zk]
  ];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

  function t(d) {
    throw new Error(`ERR (${n})/"${c}": ${d}`)
  }
  let n = Dt.Static,
    r = n;
  const i = [];
  let s;

  function o() {
    s && i.push(s), s = []
  }
  let a = 0,
    l, c = "",
    u = "";

  function f() {
    c && (n === Dt.Static ? s.push({
      type: Ls.Static,
      value: c
    }) : n === Dt.Param || n === Dt.ParamRegExp || n === Dt.ParamRegExpEnd ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: Ls.Param,
      value: c,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), c = "")
  }

  function h() {
    c += l
  }
  for (; a < e.length;) {
    if (l = e[a++], l === "\\" && n !== Dt.ParamRegExp) {
      r = n, n = Dt.EscapeNext;
      continue
    }
    switch (n) {
      case Dt.Static:
        l === "/" ? (c && f(), o()) : l === ":" ? (f(), n = Dt.Param) : h();
        break;
      case Dt.EscapeNext:
        h(), n = r;
        break;
      case Dt.Param:
        l === "(" ? n = Dt.ParamRegExp : qk.test(l) ? h() : (f(), n = Dt.Static, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case Dt.ParamRegExp:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = Dt.ParamRegExpEnd : u += l;
        break;
      case Dt.ParamRegExpEnd:
        f(), n = Dt.Static, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break
    }
  }
  return n === Dt.ParamRegExp && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), i
}
const fm = "[^/]+?",
  Kk = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  };
var yn = (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e
})(yn || {});
const Yk = /[.+*?^${}()[\]/\\]/g;

function Xk(e, t) {
  const n = Ge({}, Kk, t),
    r = [];
  let i = n.start ? "^" : "";
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [yn.Root];
    n.strict && !c.length && (i += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let d = yn.Segment + (n.sensitive ? yn.BonusCaseSensitive : 0);
      if (h.type === Ls.Static) f || (i += "/"), i += h.value.replace(Yk, "\\$&"), d += yn.Static;
      else if (h.type === Ls.Param) {
        const {
          value: g,
          repeatable: p,
          optional: m,
          regexp: v
        } = h;
        s.push({
          name: g,
          repeatable: p,
          optional: m
        });
        const y = v || fm;
        if (y !== fm) {
          d += yn.BonusCustomRegExp;
          try {
            `${y}`
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${y}): ` + b.message)
          }
        }
        let _ = p ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (_ = m && c.length < 2 ? `(?:/${_})` : "/" + _), m && (_ += "?"), i += _, d += yn.Dynamic, m && (d += yn.BonusOptional), p && (d += yn.BonusRepeatable), y === ".*" && (d += yn.BonusWildcard)
      }
      u.push(d)
    }
    r.push(u)
  }
  if (n.strict && n.end) {
    const c = r.length - 1;
    r[c][r[c].length - 1] += yn.BonusStrict
  }
  n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");

  function a(c) {
    const u = c.match(o),
      f = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const d = u[h] || "",
        g = s[h - 1];
      f[g.name] = d && g.repeatable ? d.split("/") : d
    }
    return f
  }

  function l(c) {
    let u = "",
      f = !1;
    for (const h of e) {
      (!f || !u.endsWith("/")) && (u += "/"), f = !1;
      for (const d of h)
        if (d.type === Ls.Static) u += d.value;
        else if (d.type === Ls.Param) {
        const {
          value: g,
          repeatable: p,
          optional: m
        } = d, v = g in c ? c[g] : "";
        if (xr(v) && !p) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
        const y = xr(v) ? v.join("/") : v;
        if (!y)
          if (m) h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
          else throw new Error(`Missing required param "${g}"`);
        u += y
      }
    }
    return u || "/"
  }
  return {
    re: o,
    score: r,
    keys: s,
    parse: a,
    stringify: l
  }
}

function Qk(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    const r = t[n] - e[n];
    if (r) return r;
    n++
  }
  return e.length < t.length ? e.length === 1 && e[0] === yn.Static + yn.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === yn.Static + yn.Segment ? 1 : -1 : 0
}

function Uv(e, t) {
  let n = 0;
  const r = e.score,
    i = t.score;
  for (; n < r.length && n < i.length;) {
    const s = Qk(r[n], i[n]);
    if (s) return s;
    n++
  }
  if (Math.abs(i.length - r.length) === 1) {
    if (dm(r)) return 1;
    if (dm(i)) return -1
  }
  return i.length - r.length
}

function dm(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0
}
const Jk = {
  strict: !1,
  end: !0,
  sensitive: !1
};

function Zk(e, t, n) {
  const r = Xk(Gk(e.path), n),
    i = Ge(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}

function eR(e, t) {
  const n = [],
    r = new Map;
  t = im(Jk, t);

  function i(f) {
    return r.get(f)
  }

  function s(f, h, d) {
    const g = !d,
      p = pm(f);
    p.aliasOf = d && d.record;
    const m = im(t, f),
      v = [p];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const w of b) v.push(pm(Ge({}, p, {
        components: d ? d.record.components : p.components,
        path: w,
        aliasOf: d ? d.record : p
      })))
    }
    let y, _;
    for (const b of v) {
      const {
        path: w
      } = b;
      if (h && w[0] !== "/") {
        const S = h.record.path,
          A = S[S.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (w && A + w)
      }
      if (y = Zk(b, h, m), d ? d.alias.push(y) : (_ = _ || y, _ !== y && _.alias.push(y), g && f.name && !gm(y) && o(f.name)), Hv(y) && l(y), p.children) {
        const S = p.children;
        for (let A = 0; A < S.length; A++) s(S[A], y, d && d.children[A])
      }
      d = d || y
    }
    return _ ? () => {
      o(_)
    } : Na
  }

  function o(f) {
    if (Iv(f)) {
      const h = r.get(f);
      h && (r.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o))
    } else {
      const h = n.indexOf(f);
      h > -1 && (n.splice(h, 1), f.record.name && r.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o))
    }
  }

  function a() {
    return n
  }

  function l(f) {
    const h = rR(f, n);
    n.splice(h, 0, f), f.record.name && !gm(f) && r.set(f.record.name, f)
  }

  function c(f, h) {
    let d, g = {},
      p, m;
    if ("name" in f && f.name) {
      if (d = r.get(f.name), !d) throw Uo(yt.MATCHER_NOT_FOUND, {
        location: f
      });
      m = d.record.name, g = Ge(hm(h.params, d.keys.filter(_ => !_.optional).concat(d.parent ? d.parent.keys.filter(_ => _.optional) : []).map(_ => _.name)), f.params && hm(f.params, d.keys.map(_ => _.name))), p = d.stringify(g)
    } else if (f.path != null) p = f.path, d = n.find(_ => _.re.test(p)), d && (g = d.parse(p), m = d.record.name);
    else {
      if (d = h.name ? r.get(h.name) : n.find(_ => _.re.test(h.path)), !d) throw Uo(yt.MATCHER_NOT_FOUND, {
        location: f,
        currentLocation: h
      });
      m = d.record.name, g = Ge({}, h.params, f.params), p = d.stringify(g)
    }
    const v = [];
    let y = d;
    for (; y;) v.unshift(y.record), y = y.parent;
    return {
      name: m,
      path: p,
      params: g,
      matched: v,
      meta: nR(v)
    }
  }
  e.forEach(f => s(f));

  function u() {
    n.length = 0, r.clear()
  }
  return {
    addRoute: s,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: i
  }
}

function hm(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n
}

function pm(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: tR(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set,
    updateGuards: new Set,
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && {
      default: e.component
    }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t
}

function tR(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else
    for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t
}

function gm(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent
  }
  return !1
}

function nR(e) {
  return e.reduce((t, n) => Ge(t, n.meta), {})
}

function rR(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r;) {
    const s = n + r >> 1;
    Uv(e, t[s]) < 0 ? r = s : n = s + 1
  }
  const i = iR(e);
  return i && (r = t.lastIndexOf(i, r - 1)), r
}

function iR(e) {
  let t = e;
  for (; t = t.parent;)
    if (Hv(t) && Uv(e, t) === 0) return t
}

function Hv({
  record: e
}) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function mm(e) {
  const t = Zt(dp),
    n = Zt(Dv),
    r = be(() => {
      const l = re(e.to);
      return t.resolve(l)
    }),
    i = be(() => {
      const {
        matched: l
      } = r.value, {
        length: c
      } = l, u = l[c - 1], f = n.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(Bo.bind(null, u));
      if (h > -1) return h;
      const d = _m(l[c - 2]);
      return c > 1 && _m(u) === d && f[f.length - 1].path !== d ? f.findIndex(Bo.bind(null, l[c - 2])) : h
    }),
    s = be(() => i.value > -1 && cR(n.params, r.value.params)),
    o = be(() => i.value > -1 && i.value === n.matched.length - 1 && Ov(n.params, r.value.params));

  function a(l = {}) {
    if (lR(l)) {
      const c = t[re(e.replace) ? "replace" : "push"](re(e.to)).catch(Na);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c
    }
    return Promise.resolve()
  }
  return {
    route: r,
    href: be(() => r.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a
  }
}

function sR(e) {
  return e.length === 1 ? e[0] : e
}
const oR = mt({
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
    useLink: mm,
    setup(e, {
      slots: t
    }) {
      const n = ni(mm(e)),
        {
          options: r
        } = Zt(dp),
        i = be(() => ({
          [ym(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
          [ym(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
      return () => {
        const s = t.default && sR(t.default(n));
        return e.custom ? s : Vt("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: i.value
        }, s)
      }
    }
  }),
  aR = oR;

function lR(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}

function cR(e, t) {
  for (const n in t) {
    const r = t[n],
      i = e[n];
    if (typeof r == "string") {
      if (r !== i) return !1
    } else if (!xr(i) || i.length !== r.length || r.some((s, o) => s !== i[o])) return !1
  }
  return !0
}

function _m(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const ym = (e, t, n) => e ?? t ?? n,
  uR = mt({
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
    setup(e, {
      attrs: t,
      slots: n
    }) {
      const r = Zt(Id),
        i = be(() => e.route || r.value),
        s = Zt(cm, 0),
        o = be(() => {
          let c = re(s);
          const {
            matched: u
          } = i.value;
          let f;
          for (;
            (f = u[c]) && !f.components;) c++;
          return c
        }),
        a = be(() => i.value.matched[o.value]);
      Ns(cm, be(() => o.value + 1)), Ns(Nv, a), Ns(Id, i);
      const l = et();
      return Qe(() => [l.value, a.value, e.name], ([c, u, f], [h, d, g]) => {
        u && (u.instances[f] = c, d && d !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards), u.updateGuards.size || (u.updateGuards = d.updateGuards))), c && u && (!d || !Bo(u, d) || !h) && (u.enterCallbacks[f] || []).forEach(p => p(c))
      }, {
        flush: "post"
      }), () => {
        const c = i.value,
          u = e.name,
          f = a.value,
          h = f && f.components[u];
        if (!h) return vm(n.default, {
          Component: h,
          route: c
        });
        const d = f.props[u],
          g = d ? d === !0 ? c.params : typeof d == "function" ? d(c) : d : null,
          m = Vt(h, Ge({}, g, t, {
            onVnodeUnmounted: v => {
              v.component.isUnmounted && (f.instances[u] = null)
            },
            ref: l
          }));
        return vm(n.default, {
          Component: m,
          route: c
        }) || m
      }
    }
  });

function vm(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n
}
const Wv = uR;

function fR(e) {
  const t = eR(e.routes, e),
    n = e.parseQuery || Fk,
    r = e.stringifyQuery || lm,
    i = e.history,
    s = ca(),
    o = ca(),
    a = ca(),
    l = Jr(ir);
  let c = ir;
  ho && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = kf.bind(null, j => "" + j),
    f = kf.bind(null, bk),
    h = kf.bind(null, sl);

  function d(j, J) {
    let Y, ee;
    return Iv(j) ? (Y = t.getRecordMatcher(j), ee = J) : ee = j, t.addRoute(ee, Y)
  }

  function g(j) {
    const J = t.getRecordMatcher(j);
    J && t.removeRoute(J)
  }

  function p() {
    return t.getRoutes().map(j => j.record)
  }

  function m(j) {
    return !!t.getRecordMatcher(j)
  }

  function v(j, J) {
    if (J = Ge({}, J || l.value), typeof j == "string") {
      const M = Rf(n, j, J.path),
        $ = t.resolve({
          path: M.path
        }, J),
        V = i.createHref(M.fullPath);
      return Ge(M, $, {
        params: h($.params),
        hash: sl(M.hash),
        redirectedFrom: void 0,
        href: V
      })
    }
    let Y;
    if (j.path != null) Y = Ge({}, j, {
      path: Rf(n, j.path, J.path).path
    });
    else {
      const M = Ge({}, j.params);
      for (const $ in M) M[$] == null && delete M[$];
      Y = Ge({}, j, {
        params: f(M)
      }), J.params = f(J.params)
    }
    const ee = t.resolve(Y, J),
      de = j.hash || "";
    ee.params = u(h(ee.params));
    const C = Sk(r, Ge({}, j, {
        hash: _k(de),
        path: ee.path
      })),
      R = i.createHref(C);
    return Ge({
      fullPath: C,
      hash: de,
      query: r === lm ? Bk(j.query) : j.query || {}
    }, ee, {
      redirectedFrom: void 0,
      href: R
    })
  }

  function y(j) {
    return typeof j == "string" ? Rf(n, j, l.value.path) : Ge({}, j)
  }

  function _(j, J) {
    if (c !== j) return Uo(yt.NAVIGATION_CANCELLED, {
      from: J,
      to: j
    })
  }

  function b(j) {
    return A(j)
  }

  function w(j) {
    return b(Ge(y(j), {
      replace: !0
    }))
  }

  function S(j, J) {
    const Y = j.matched[j.matched.length - 1];
    if (Y && Y.redirect) {
      const {
        redirect: ee
      } = Y;
      let de = typeof ee == "function" ? ee(j, J) : ee;
      return typeof de == "string" && (de = de.includes("?") || de.includes("#") ? de = y(de) : {
        path: de
      }, de.params = {}), Ge({
        query: j.query,
        hash: j.hash,
        params: de.path != null ? {} : j.params
      }, de)
    }
  }

  function A(j, J) {
    const Y = c = v(j),
      ee = l.value,
      de = j.state,
      C = j.force,
      R = j.replace === !0,
      M = S(Y, ee);
    if (M) return A(Ge(y(M), {
      state: typeof M == "object" ? Ge({}, de, M.state) : de,
      force: C,
      replace: R
    }), J || Y);
    const $ = Y;
    $.redirectedFrom = J;
    let V;
    return !C && Ek(r, ee, Y) && (V = Uo(yt.NAVIGATION_DUPLICATED, {
      to: $,
      from: ee
    }), ie(ee, ee, !0, !1)), (V ? Promise.resolve(V) : O($, ee)).catch(x => oi(x) ? oi(x, yt.NAVIGATION_GUARD_REDIRECT) ? x : I(x) : K(x, $, ee)).then(x => {
      if (x) {
        if (oi(x, yt.NAVIGATION_GUARD_REDIRECT)) return A(Ge({
          replace: R
        }, y(x.to), {
          state: typeof x.to == "object" ? Ge({}, de, x.to.state) : de,
          force: C
        }), J || $)
      } else x = P($, ee, !0, R, de);
      return B($, ee, x), x
    })
  }

  function L(j, J) {
    const Y = _(j, J);
    return Y ? Promise.reject(Y) : Promise.resolve()
  }

  function T(j) {
    const J = pe.values().next().value;
    return J && typeof J.runWithContext == "function" ? J.runWithContext(j) : j()
  }

  function O(j, J) {
    let Y;
    const [ee, de, C] = Hk(j, J);
    Y = Lf(ee.reverse(), "beforeRouteLeave", j, J);
    for (const M of ee) M.leaveGuards.forEach($ => {
      Y.push(Vi($, j, J))
    });
    const R = L.bind(null, j, J);
    return Y.push(R), Me(Y).then(() => {
      Y = [];
      for (const M of s.list()) Y.push(Vi(M, j, J));
      return Y.push(R), Me(Y)
    }).then(() => {
      Y = Lf(de, "beforeRouteUpdate", j, J);
      for (const M of de) M.updateGuards.forEach($ => {
        Y.push(Vi($, j, J))
      });
      return Y.push(R), Me(Y)
    }).then(() => {
      Y = [];
      for (const M of C)
        if (M.beforeEnter)
          if (xr(M.beforeEnter))
            for (const $ of M.beforeEnter) Y.push(Vi($, j, J));
          else Y.push(Vi(M.beforeEnter, j, J));
      return Y.push(R), Me(Y)
    }).then(() => (j.matched.forEach(M => M.enterCallbacks = {}), Y = Lf(C, "beforeRouteEnter", j, J, T), Y.push(R), Me(Y))).then(() => {
      Y = [];
      for (const M of o.list()) Y.push(Vi(M, j, J));
      return Y.push(R), Me(Y)
    }).catch(M => oi(M, yt.NAVIGATION_CANCELLED) ? M : Promise.reject(M))
  }

  function B(j, J, Y) {
    a.list().forEach(ee => T(() => ee(j, J, Y)))
  }

  function P(j, J, Y, ee, de) {
    const C = _(j, J);
    if (C) return C;
    const R = J === ir,
      M = ho ? history.state : {};
    Y && (ee || R ? i.replace(j.fullPath, Ge({
      scroll: R && M && M.scroll
    }, de)) : i.push(j.fullPath, de)), l.value = j, ie(j, J, Y, R), I()
  }
  let W;

  function G() {
    W || (W = i.listen((j, J, Y) => {
      if (!xe.listening) return;
      const ee = v(j),
        de = S(ee, xe.currentRoute.value);
      if (de) {
        A(Ge(de, {
          replace: !0,
          force: !0
        }), ee).catch(Na);
        return
      }
      c = ee;
      const C = l.value;
      ho && Ok(am(C.fullPath, Y.delta), qu()), O(ee, C).catch(R => oi(R, yt.NAVIGATION_ABORTED | yt.NAVIGATION_CANCELLED) ? R : oi(R, yt.NAVIGATION_GUARD_REDIRECT) ? (A(Ge(y(R.to), {
        force: !0
      }), ee).then(M => {
        oi(M, yt.NAVIGATION_ABORTED | yt.NAVIGATION_DUPLICATED) && !Y.delta && Y.type === Pd.pop && i.go(-1, !1)
      }).catch(Na), Promise.reject()) : (Y.delta && i.go(-Y.delta, !1), K(R, ee, C))).then(R => {
        R = R || P(ee, C, !1), R && (Y.delta && !oi(R, yt.NAVIGATION_CANCELLED) ? i.go(-Y.delta, !1) : Y.type === Pd.pop && oi(R, yt.NAVIGATION_ABORTED | yt.NAVIGATION_DUPLICATED) && i.go(-1, !1)), B(ee, C, R)
      }).catch(Na)
    }))
  }
  let X = ca(),
    H = ca(),
    q;

  function K(j, J, Y) {
    I(j);
    const ee = H.list();
    return ee.length ? ee.forEach(de => de(j, J, Y)) : console.error(j), Promise.reject(j)
  }

  function Z() {
    return q && l.value !== ir ? Promise.resolve() : new Promise((j, J) => {
      X.add([j, J])
    })
  }

  function I(j) {
    return q || (q = !j, G(), X.list().forEach(([J, Y]) => j ? Y(j) : J()), X.reset()), j
  }

  function ie(j, J, Y, ee) {
    const {
      scrollBehavior: de
    } = e;
    if (!ho || !de) return Promise.resolve();
    const C = !Y && Ik(am(j.fullPath, 0)) || (ee || !Y) && history.state && history.state.scroll || null;
    return ur().then(() => de(j, J, C)).then(R => R && Pk(R)).catch(R => K(R, j, J))
  }
  const ce = j => i.go(j);
  let ve;
  const pe = new Set,
    xe = {
      currentRoute: l,
      listening: !0,
      addRoute: d,
      removeRoute: g,
      clearRoutes: t.clearRoutes,
      hasRoute: m,
      getRoutes: p,
      resolve: v,
      options: e,
      push: b,
      replace: w,
      go: ce,
      back: () => ce(-1),
      forward: () => ce(1),
      beforeEach: s.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: H.add,
      isReady: Z,
      install(j) {
        j.component("RouterLink", aR), j.component("RouterView", Wv), j.config.globalProperties.$router = xe, Object.defineProperty(j.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => re(l)
        }), ho && !ve && l.value === ir && (ve = !0, b(i.location).catch(ee => {}));
        const J = {};
        for (const ee in ir) Object.defineProperty(J, ee, {
          get: () => l.value[ee],
          enumerable: !0
        });
        j.provide(dp, xe), j.provide(Dv, mi(J)), j.provide(Id, l);
        const Y = j.unmount;
        pe.add(j), j.unmount = function() {
          pe.delete(j), pe.size < 1 && (c = ir, W && W(), W = null, l.value = ir, ve = !1, q = !1), Y()
        }
      }
    };

  function Me(j) {
    return j.reduce((J, Y) => J.then(() => T(Y)), Promise.resolve())
  }
  return xe
}
const dR = /(:\w+)\([^)]+\)/g,
  hR = /(:\w+)[?+*]/g,
  pR = /:\w+/g,
  gR = (e, t) => t.path.replace(dR, "$1").replace(hR, "$1").replace(pR, n => e.params[n.slice(1)]?.toString() || ""),
  Md = (e, t) => {
    const n = e.route.matched.find(i => i.components?.default === e.Component.type),
      r = t ?? n?.meta.key ?? (n && gR(e.route, n));
    return typeof r == "function" ? r(e.route) : r
  },
  mR = (e, t) => ({
    default: () => e ? Vt(U1, e === !0 ? {} : e, t) : t
  });

function hp(e) {
  return Array.isArray(e) ? e : [e]
}
const bm = null,
  wm = {},
  Pf = [{
    name: "about___en",
    path: "/about",
    component: () => jt(() => import("./Dotpgq1I.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]), import.meta.url)
  }, {
    name: "index___en",
    path: "/",
    component: () => jt(() => import("./oh4MWeJ7.js"), __vite__mapDeps([32, 1, 2, 5, 6, 7, 8, 9, 10, 3, 4, 20, 13, 14, 15, 16, 17, 21, 33, 12, 34, 11, 18, 35, 36, 37, 25, 26, 38, 39, 40, 27, 28, 29, 41, 42]), import.meta.url)
  }, {
    name: "contact___en",
    path: "/contact",
    component: () => jt(() => import("./DvBWDu11.js"), __vite__mapDeps([43, 1, 2, 15, 16, 25, 7, 8, 9, 10, 26, 19, 20, 13, 14, 17, 21, 22, 30, 44]), import.meta.url)
  }, {
    name: "feed___en",
    path: "/feed",
    component: () => jt(() => import("./DUatIWkU.js"), __vite__mapDeps([45, 1, 2, 8, 9, 46, 15, 16, 47, 17, 48, 49]), import.meta.url)
  }, {
    name: "feed-slug___en",
    path: "/feed/:slug()",
    component: () => jt(() => import("./Cs2arAUn.js"), __vite__mapDeps([50, 1, 2, 15, 16, 8, 9, 51, 52, 28, 46, 53]), import.meta.url)
  }, {
    name: "career___en",
    path: "/career",
    component: () => jt(() => import("./DWtuQ7la.js"), __vite__mapDeps([54, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 24, 19, 20, 13, 14, 15, 16, 17, 21, 22, 55, 56, 28, 51, 52, 25, 26, 57]), import.meta.url)
  }, {
    name: "career-slug___en",
    path: "/career/:slug()",
    component: () => jt(() => import("./CZbUQaTh.js"), __vite__mapDeps([58, 1, 2, 15, 16, 59]), import.meta.url)
  }, {
    name: "projects___en",
    path: "/projects",
    component: () => jt(() => import("./DFSjH_2t.js"), __vite__mapDeps([60, 1, 2, 35, 15, 16, 36, 7, 8, 9, 10, 61, 62, 38, 39, 40, 27, 28, 29, 41, 25, 26, 48, 30, 63]), import.meta.url)
  }, {
    name: "services___en",
    path: "/services",
    component: () => jt(() => import("./DEY5gowE.js"), __vite__mapDeps([64, 1, 2, 35, 15, 16, 36, 7, 8, 9, 10, 33, 5, 6, 12, 34, 61, 62, 27, 28, 29, 25, 26, 30, 65]), import.meta.url)
  }, {
    name: "lets-talk___en",
    path: "/lets-talk",
    component: () => jt(() => import("./BF4vdWh8.js"), __vite__mapDeps([66, 15, 16, 13, 14, 47, 30, 67]), import.meta.url)
  }, {
    name: "projects-slug___en",
    path: "/projects/:slug()",
    component: () => jt(() => import("./Bty_ZAzj.js"), __vite__mapDeps([68, 1, 2, 7, 8, 9, 10, 13, 14, 15, 16, 12, 17, 55, 56, 28, 38, 39, 40, 27, 29, 41, 35, 36, 30, 69]), import.meta.url)
  }, {
    name: "services-slug___en",
    path: "/services/:slug()",
    component: () => jt(() => import("./DfGoBAVs.js"), __vite__mapDeps([70, 1, 2, 7, 8, 9, 10, 55, 56, 51, 15, 16, 52, 28, 35, 36, 61, 62, 39, 40, 25, 26, 30, 71]), import.meta.url)
  }, {
    name: "lets-talk-thank_you_slug___en",
    path: "/lets-talk/thank_you_:slug()",
    component: () => jt(() => import("./D_E1KEPQ.js"), __vite__mapDeps([72, 13, 14, 15, 16, 28, 73]), import.meta.url)
  }, {
    name: bm?.name,
    path: "/pl",
    component: wm
  }, {
    name: bm?.name,
    path: "/pl/:pathMatch(.*)",
    component: wm
  }],
  _R = (e, t) => ({
    default: () => e ? Vt(US, e === !0 ? {} : e, t) : t.default?.()
  }),
  yR = /(:\w+)\([^)]+\)/g,
  vR = /(:\w+)[?+*]/g,
  bR = /:\w+/g;

function Am(e) {
  const t = e?.meta.key ?? e.path.replace(yR, "$1").replace(vR, "$1").replace(bR, n => e.params[n.slice(1)]?.toString() || "");
  return typeof t == "function" ? t(e) : t
}

function wR(e, t) {
  return e === t || t === ir ? !1 : Am(e) !== Am(t) ? !0 : !e.matched.every((r, i) => r.components && r.components.default === t.matched[i]?.components?.default)
}
const AR = {
  scrollBehavior(e, t, n) {
    const r = Ae(),
      i = Tt().options?.scrollBehaviorType ?? "auto";
    if (e.path.replace(/\/$/, "") === t.path.replace(/\/$/, "")) return t.hash && !e.hash ? {
      left: 0,
      top: 0
    } : e.hash ? {
      el: e.hash,
      top: jv(e.hash),
      behavior: i
    } : !1;
    if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === !1) return !1;
    const o = r._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise(a => {
      if (t === ir) {
        a(Sm(e, t, n, i));
        return
      }
      r.hooks.hookOnce(o, () => {
        requestAnimationFrame(() => a(Sm(e, t, n, i)))
      })
    })
  }
};

function jv(e) {
  try {
    const t = document.querySelector(e);
    if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
  } catch {}
  return 0
}

function Sm(e, t, n, r) {
  if (n) return n;
  const i = wR(e, t);
  return e.hash ? {
    el: e.hash,
    top: jv(e.hash),
    behavior: i ? r : "instant"
  } : {
    left: 0,
    top: 0
  }
}
const $v = {
    scrollBehavior(e) {
      return e.hash ? {
        el: e.hash,
        behavior: "smooth"
      } : !1
    }
  },
  SR = {
    hashMode: !1,
    scrollBehaviorType: "auto"
  },
  Nd = $v.hashMode ?? !1,
  Bi = {
    ...SR,
    ...AR,
    ...$v
  },
  ER = async (e, t) => {
    let n, r;
    if (!e.meta?.validate) return;
    const i = ([n, r] = Ei(() => Promise.resolve(e.meta.validate(e))), n = await n, r(), n);
    if (i === !0) return;
    const s = Ci({
      fatal: !0,
      statusCode: i && i.statusCode || 404,
      statusMessage: i && i.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath), s
  }, CR = ["/feed", "/career"], TR = e => {
    if (!Dn().public.hideFeedAndCareer) return;
    const t = e.path.replace(/^\/[a-z]{2}(?=\/)/, "") || "/";
    if (CR.some(r => t === r || t.startsWith(`${r}/`))) throw Ci({
      statusCode: 404,
      statusMessage: "Page not found"
    })
  };

function ui(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function Vv(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Qn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  ol = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
  pp, en, ct, lr = 1e8,
  rt = 1 / lr,
  Dd = Math.PI * 2,
  kR = Dd / 4,
  RR = 0,
  zv = Math.sqrt,
  xR = Math.cos,
  LR = Math.sin,
  zt = function(t) {
    return typeof t == "string"
  },
  bt = function(t) {
    return typeof t == "function"
  },
  xi = function(t) {
    return typeof t == "number"
  },
  gp = function(t) {
    return typeof t > "u"
  },
  ei = function(t) {
    return typeof t == "object"
  },
  Pn = function(t) {
    return t !== !1
  },
  mp = function() {
    return typeof window < "u"
  },
  zl = function(t) {
    return bt(t) || zt(t)
  },
  qv = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
  pn = Array.isArray,
  PR = /random\([^)]+\)/g,
  OR = /,\s*/g,
  Em = /(?:-?\.?\d|\.)+/gi,
  Gv = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  yo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Of = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Kv = /[+-]=-?[.\d]+/,
  IR = /[^,'"\[\]\s]+/gi,
  MR = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  dt, Ur, Fd, _p, Zn = {},
  au = {},
  Yv, Xv = function(t) {
    return (au = Ho(t, Zn)) && Fn
  },
  yp = function(t, n) {
    return console.warn("Invalid property", t, "set to", n, "Missing plugin? gsap.registerPlugin()")
  },
  al = function(t, n) {
    return !n && console.warn(t)
  },
  Qv = function(t, n) {
    return t && (Zn[t] = n) && au && (au[t] = n) || Zn
  },
  ll = function() {
    return 0
  },
  NR = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
  },
  Ac = {
    suppressEvents: !0,
    kill: !1
  },
  DR = {
    suppressEvents: !0
  },
  vp = {},
  Zi = [],
  Bd = {},
  Jv, jn = {},
  If = {},
  Cm = 30,
  Sc = [],
  bp = "",
  wp = function(t) {
    var n = t[0],
      r, i;
    if (ei(n) || bt(n) || (t = [t]), !(r = (n._gsap || {}).harness)) {
      for (i = Sc.length; i-- && !Sc[i].targetTest(n););
      r = Sc[i]
    }
    for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new bb(t[i], r))) || t.splice(i, 1);
    return t
  },
  Fs = function(t) {
    return t._gsap || wp(cr(t))[0]._gsap
  },
  Zv = function(t, n, r) {
    return (r = t[n]) && bt(r) ? t[n]() : gp(r) && t.getAttribute && t.getAttribute(n) || r
  },
  On = function(t, n) {
    return (t = t.split(",")).forEach(n) || t
  },
  At = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
  },
  ft = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
  },
  To = function(t, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
  },
  FR = function(t, n) {
    for (var r = n.length, i = 0; t.indexOf(n[i]) < 0 && ++i < r;);
    return i < r
  },
  lu = function() {
    var t = Zi.length,
      n = Zi.slice(0),
      r, i;
    for (Bd = {}, Zi.length = 0, r = 0; r < t; r++) i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
  },
  Ap = function(t) {
    return !!(t._initted || t._startAt || t.add)
  },
  eb = function(t, n, r, i) {
    Zi.length && !en && lu(), t.render(n, r, !!(en && n < 0 && Ap(t))), Zi.length && !en && lu()
  },
  tb = function(t) {
    var n = parseFloat(t);
    return (n || n === 0) && (t + "").match(IR).length < 2 ? n : zt(t) ? t.trim() : t
  },
  nb = function(t) {
    return t
  },
  er = function(t, n) {
    for (var r in n) r in t || (t[r] = n[r]);
    return t
  },
  BR = function(t) {
    return function(n, r) {
      for (var i in r) i in n || i === "duration" && t || i === "ease" || (n[i] = r[i])
    }
  },
  Ho = function(t, n) {
    for (var r in n) t[r] = n[r];
    return t
  },
  Tm = function e(t, n) {
    for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = ei(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t
  },
  cu = function(t, n) {
    var r = {},
      i;
    for (i in t) i in n || (r[i] = t[i]);
    return r
  },
  Da = function(t) {
    var n = t.parent || dt,
      r = t.keyframes ? BR(pn(t.keyframes)) : er;
    if (Pn(t.inherit))
      for (; n;) r(t, n.vars.defaults), n = n.parent || n._dp;
    return t
  },
  UR = function(t, n) {
    for (var r = t.length, i = r === n.length; i && r-- && t[r] === n[r];);
    return r < 0
  },
  rb = function(t, n, r, i, s) {
    var o = t[i],
      a;
    if (s)
      for (a = n[s]; o && o[s] > a;) o = o._prev;
    return o ? (n._next = o._next, o._next = n) : (n._next = t[r], t[r] = n), n._next ? n._next._prev = n : t[i] = n, n._prev = o, n.parent = n._dp = t, n
  },
  Gu = function(t, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = n._prev,
      o = n._next;
    s ? s._next = o : t[r] === n && (t[r] = o), o ? o._prev = s : t[i] === n && (t[i] = s), n._next = n._prev = n.parent = null
  },
  is = function(t, n) {
    t.parent && (!n || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
  },
  Bs = function(t, n) {
    if (t && (!n || n._end > t._dur || n._start < 0))
      for (var r = t; r;) r._dirty = 1, r = r.parent;
    return t
  },
  HR = function(t) {
    for (var n = t.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
    return t
  },
  Ud = function(t, n, r, i) {
    return t._startAt && (en ? t._startAt.revert(Ac) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(n, !0, i))
  },
  WR = function e(t) {
    return !t || t._ts && e(t.parent)
  },
  km = function(t) {
    return t._repeat ? Wo(t._tTime, t = t.duration() + t._rDelay) * t : 0
  },
  Wo = function(t, n) {
    var r = Math.floor(t = ft(t / n));
    return t && r === t ? r - 1 : r
  },
  uu = function(t, n) {
    return (t - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
  },
  Ku = function(t) {
    return t._end = ft(t._start + (t._tDur / Math.abs(t._ts || t._rts || rt) || 0))
  },
  Yu = function(t, n) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = ft(r._time - (t._ts > 0 ? n / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)), Ku(t), r._dirty || Bs(r, t)), t
  },
  ib = function(t, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < t._time && (n._dur || !n.add)) && (r = uu(t.rawTime(), n), (!n._dur || Rl(0, n.totalDuration(), r) - n._tTime > rt) && n.render(r, !0)), Bs(t, n)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration())
        for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -rt
    }
  },
  $r = function(t, n, r, i) {
    return n.parent && is(n), n._start = ft((xi(r) ? r : r || t !== dt ? rr(t, r, n) : t._time) + n._delay), n._end = ft(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), rb(t, n, "_first", "_last", t._sort ? "_start" : 0), Hd(n) || (t._recent = n), i || ib(t, n), t._ts < 0 && Yu(t, t._tTime), t
  },
  sb = function(t, n) {
    return (Zn.ScrollTrigger || yp("scrollTrigger", n)) && Zn.ScrollTrigger.create(n, t)
  },
  ob = function(t, n, r, i, s) {
    if (Ep(t, n, s), !t._initted) return 1;
    if (!r && t._pt && !en && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Jv !== zn.frame) return Zi.push(t), t._lazy = [s, i], 1
  },
  jR = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
  },
  Hd = function(t) {
    var n = t.data;
    return n === "isFromStart" || n === "isStart"
  },
  $R = function(t, n, r, i) {
    var s = t.ratio,
      o = n < 0 || !n && (!t._start && jR(t) && !(!t._initted && Hd(t)) || (t._ts < 0 || t._dp._ts < 0) && !Hd(t)) ? 0 : 1,
      a = t._rDelay,
      l = 0,
      c, u, f;
    if (a && t._repeat && (l = Rl(0, t._tDur, n), u = Wo(l, a), t._yoyo && u & 1 && (o = 1 - o), u !== Wo(t._tTime, a) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || en || i || t._zTime === rt || !n && t._zTime) {
      if (!t._initted && ob(t, n, i, r, l)) return;
      for (f = t._zTime, t._zTime = n || (r ? rt : 0), r || (r = n && !f), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, c = t._pt; c;) c.r(o, c.d), c = c._next;
      n < 0 && Ud(t, n, r, !0), t._onUpdate && !r && Gn(t, "onUpdate"), l && t._repeat && !r && t.parent && Gn(t, "onRepeat"), (n >= t._tDur || n < 0) && t.ratio === o && (o && is(t, 1), !r && !en && (Gn(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
    } else t._zTime || (t._zTime = n)
  },
  VR = function(t, n, r) {
    var i;
    if (r > n)
      for (i = t._first; i && i._start <= r;) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next
      } else
        for (i = t._last; i && i._start >= r;) {
          if (i.data === "isPause" && i._start < n) return i;
          i = i._prev
        }
  },
  jo = function(t, n, r, i) {
    var s = t._repeat,
      o = ft(n) || 0,
      a = t._tTime / t._tDur;
    return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = s ? s < 0 ? 1e10 : ft(o * (s + 1) + t._rDelay * s) : o, a > 0 && !i && Yu(t, t._tTime = t._tDur * a), t.parent && Ku(t), r || Bs(t.parent, t), t
  },
  Rm = function(t) {
    return t instanceof xn ? Bs(t) : jo(t, t._dur)
  },
  zR = {
    _start: 0,
    endTime: ll,
    totalDuration: ll
  },
  rr = function e(t, n, r) {
    var i = t.labels,
      s = t._recent || zR,
      o = t.duration() >= lr ? s.endTime(!1) : t._dur,
      a, l, c;
    return zt(n) && (isNaN(n) || n in i) ? (l = n.charAt(0), c = n.substr(-1) === "%", a = n.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (c ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = o), i[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)), c && r && (l = l / 100 * (pn(r) ? r[0] : r).totalDuration()), a > 1 ? e(t, n.substr(0, a - 1), r) + l : o + l)) : n == null ? o : +n
  },
  Fa = function(t, n, r) {
    var i = xi(n[1]),
      s = (i ? 2 : 1) + (t < 2 ? 0 : 1),
      o = n[s],
      a, l;
    if (i && (o.duration = n[1]), o.parent = r, t) {
      for (a = o, l = r; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = Pn(l.vars.inherit) && l.parent;
      o.immediateRender = Pn(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1]
    }
    return new Lt(n[0], o, n[s + 1])
  },
  ls = function(t, n) {
    return t || t === 0 ? n(t) : n
  },
  Rl = function(t, n, r) {
    return r < t ? t : r > n ? n : r
  },
  un = function(t, n) {
    return !zt(t) || !(n = MR.exec(t)) ? "" : n[1]
  },
  qR = function(t, n, r) {
    return ls(r, function(i) {
      return Rl(t, n, i)
    })
  },
  Wd = [].slice,
  ab = function(t, n) {
    return t && ei(t) && "length" in t && (!n && !t.length || t.length - 1 in t && ei(t[0])) && !t.nodeType && t !== Ur
  },
  GR = function(t, n, r) {
    return r === void 0 && (r = []), t.forEach(function(i) {
      var s;
      return zt(i) && !n || ab(i, 1) ? (s = r).push.apply(s, cr(i)) : r.push(i)
    }) || r
  },
  cr = function(t, n, r) {
    return ct && !n && ct.selector ? ct.selector(t) : zt(t) && !r && (Fd || !$o()) ? Wd.call((n || _p).querySelectorAll(t), 0) : pn(t) ? GR(t, r) : ab(t) ? Wd.call(t, 0) : t ? [t] : []
  },
  jd = function(t) {
    return t = cr(t)[0] || al("Invalid scope") || {},
      function(n) {
        var r = t.current || t.nativeElement || t;
        return cr(n, r.querySelectorAll ? r : r === t ? al("Invalid scope") || _p.createElement("div") : t)
      }
  },
  lb = function(t) {
    return t.sort(function() {
      return .5 - Math.random()
    })
  },
  cb = function(t) {
    if (bt(t)) return t;
    var n = ei(t) ? t : {
        each: t
      },
      r = Us(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      c = n.axis,
      u = i,
      f = i;
    return zt(i) ? u = f = {
        center: .5,
        edges: .5,
        end: 1
      } [i] || 0 : !a && l && (u = i[0], f = i[1]),
      function(h, d, g) {
        var p = (g || n).length,
          m = o[p],
          v, y, _, b, w, S, A, L, T;
        if (!m) {
          if (T = n.grid === "auto" ? 0 : (n.grid || [1, lr])[1], !T) {
            for (A = -lr; A < (A = g[T++].getBoundingClientRect().left) && T < p;);
            T < p && T--
          }
          for (m = o[p] = [], v = l ? Math.min(T, p) * u - .5 : i % T, y = T === lr ? 0 : l ? p * f / T - .5 : i / T | 0, A = 0, L = lr, S = 0; S < p; S++) _ = S % T - v, b = y - (S / T | 0), m[S] = w = c ? Math.abs(c === "y" ? b : _) : zv(_ * _ + b * b), w > A && (A = w), w < L && (L = w);
          i === "random" && lb(m), m.max = A - L, m.min = L, m.v = p = (parseFloat(n.amount) || parseFloat(n.each) * (T > p ? p - 1 : c ? c === "y" ? p / T : T : Math.max(T, p / T)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? s - p : s, m.u = un(n.amount || n.each) || 0, r = r && p < 0 ? ox(r) : r
        }
        return p = (m[h] - m.min) / m.max || 0, ft(m.b + (r ? r(p) : p) * m.v) + m.u
      }
  },
  $d = function(t) {
    var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(r) {
      var i = ft(Math.round(parseFloat(r) / t) * t * n);
      return (i - i % 1) / n + (xi(r) ? 0 : un(r))
    }
  },
  ub = function(t, n) {
    var r = pn(t),
      i, s;
    return !r && ei(t) && (i = r = t.radius || lr, t.values ? (t = cr(t.values), (s = !xi(t[0])) && (i *= i)) : t = $d(t.increment)), ls(n, r ? bt(t) ? function(o) {
      return s = t(o), Math.abs(s - o) <= i ? s : o
    } : function(o) {
      for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = lr, u = 0, f = t.length, h, d; f--;) s ? (h = t[f].x - a, d = t[f].y - l, h = h * h + d * d) : h = Math.abs(t[f] - a), h < c && (c = h, u = f);
      return u = !i || c <= i ? t[u] : o, s || u === o || xi(o) ? u : u + un(o)
    } : $d(t))
  },
  fb = function(t, n, r, i) {
    return ls(pn(t) ? !n : r === !0 ? !!(r = 0) : !i, function() {
      return pn(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (n - t + r * .99)) / r) * r * i) / i
    })
  },
  KR = function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return function(i) {
      return n.reduce(function(s, o) {
        return o(s)
      }, i)
    }
  },
  YR = function(t, n) {
    return function(r) {
      return t(parseFloat(r)) + (n || un(r))
    }
  },
  XR = function(t, n, r) {
    return hb(t, n, 0, 1, r)
  },
  db = function(t, n, r) {
    return ls(r, function(i) {
      return t[~~n(i)]
    })
  },
  QR = function e(t, n, r) {
    var i = n - t;
    return pn(t) ? db(t, e(0, t.length), n) : ls(r, function(s) {
      return (i + (s - t) % i) % i + t
    })
  },
  JR = function e(t, n, r) {
    var i = n - t,
      s = i * 2;
    return pn(t) ? db(t, e(0, t.length - 1), n) : ls(r, function(o) {
      return o = (s + (o - t) % s) % s || 0, t + (o > i ? s - o : o)
    })
  },
  cl = function(t) {
    return t.replace(PR, function(n) {
      var r = n.indexOf("[") + 1,
        i = n.substring(r || 7, r ? n.indexOf("]") : n.length - 1).split(OR);
      return fb(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)
    })
  },
  hb = function(t, n, r, i, s) {
    var o = n - t,
      a = i - r;
    return ls(s, function(l) {
      return r + ((l - t) / o * a || 0)
    })
  },
  ZR = function e(t, n, r, i) {
    var s = isNaN(t + n) ? 0 : function(d) {
      return (1 - d) * t + d * n
    };
    if (!s) {
      var o = zt(t),
        a = {},
        l, c, u, f, h;
      if (r === !0 && (i = 1) && (r = null), o) t = {
        p: t
      }, n = {
        p: n
      };
      else if (pn(t) && !pn(n)) {
        for (u = [], f = t.length, h = f - 2, c = 1; c < f; c++) u.push(e(t[c - 1], t[c]));
        f--, s = function(g) {
          g *= f;
          var p = Math.min(h, ~~g);
          return u[p](g - p)
        }, r = n
      } else i || (t = Ho(pn(t) ? [] : {}, t));
      if (!u) {
        for (l in n) Sp.call(a, t, l, "get", n[l]);
        s = function(g) {
          return kp(g, a) || (o ? t.p : t)
        }
      }
    }
    return ls(r, s)
  },
  xm = function(t, n, r) {
    var i = t.labels,
      s = lr,
      o, a, l;
    for (o in i) a = i[o] - n, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
    return l
  },
  Gn = function(t, n, r) {
    var i = t.vars,
      s = i[n],
      o = ct,
      a = t._ctx,
      l, c, u;
    if (s) return l = i[n + "Params"], c = i.callbackScope || t, r && Zi.length && lu(), a && (ct = a), u = l ? s.apply(c, l) : s.call(c), ct = o, u
  },
  Sa = function(t) {
    return is(t), t.scrollTrigger && t.scrollTrigger.kill(!!en), t.progress() < 1 && Gn(t, "onInterrupt"), t
  },
  vo, pb = [],
  gb = function(t) {
    if (t)
      if (t = !t.name && t.default || t, mp() || t.headless) {
        var n = t.name,
          r = bt(t),
          i = n && !r && t.init ? function() {
            this._props = []
          } : t,
          s = {
            init: ll,
            render: kp,
            add: Sp,
            kill: mx,
            modifier: gx,
            rawVars: 0
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Tp,
            aliases: {},
            register: 0
          };
        if ($o(), t !== i) {
          if (jn[n]) return;
          er(i, er(cu(t, s), o)), Ho(i.prototype, Ho(s, cu(t, o))), jn[i.prop = n] = i, t.targetTest && (Sc.push(i), vp[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
        }
        Qv(n, i), t.register && t.register(Fn, i, In)
      } else pb.push(t)
  },
  nt = 255,
  Ea = {
    aqua: [0, nt, nt],
    lime: [0, nt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, nt],
    navy: [0, 0, 128],
    white: [nt, nt, nt],
    olive: [128, 128, 0],
    yellow: [nt, nt, 0],
    orange: [nt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [nt, 0, 0],
    pink: [nt, 192, 203],
    cyan: [0, nt, nt],
    transparent: [nt, nt, nt, 0]
  },
  Mf = function(t, n, r) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? n + (r - n) * t * 6 : t < .5 ? r : t * 3 < 2 ? n + (r - n) * (2 / 3 - t) * 6 : n) * nt + .5 | 0
  },
  mb = function(t, n, r) {
    var i = t ? xi(t) ? [t >> 16, t >> 8 & nt, t & nt] : 0 : Ea.black,
      s, o, a, l, c, u, f, h, d, g;
    if (!i) {
      if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ea[t]) i = Ea[t];
      else if (t.charAt(0) === "#") {
        if (t.length < 6 && (s = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + s + s + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & nt, i & nt, parseInt(t.substr(7), 16) / 255];
        t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & nt, t & nt]
      } else if (t.substr(0, 3) === "hsl") {
        if (i = g = t.match(Em), !n) l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, o = u <= .5 ? u * (c + 1) : u + c - u * c, s = u * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Mf(l + 1 / 3, s, o), i[1] = Mf(l, s, o), i[2] = Mf(l - 1 / 3, s, o);
        else if (~t.indexOf("=")) return i = t.match(Gv), r && i.length < 4 && (i[3] = 1), i
      } else i = t.match(Em) || Ea.transparent;
      i = i.map(Number)
    }
    return n && !g && (s = i[0] / nt, o = i[1] / nt, a = i[2] / nt, f = Math.max(s, o, a), h = Math.min(s, o, a), u = (f + h) / 2, f === h ? l = c = 0 : (d = f - h, c = u > .5 ? d / (2 - f - h) : d / (f + h), l = f === s ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - s) / d + 2 : (s - o) / d + 4, l *= 60), i[0] = ~~(l + .5), i[1] = ~~(c * 100 + .5), i[2] = ~~(u * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
  },
  _b = function(t) {
    var n = [],
      r = [],
      i = -1;
    return t.split(es).forEach(function(s) {
      var o = s.match(yo) || [];
      n.push.apply(n, o), r.push(i += o.length + 1)
    }), n.c = r, n
  },
  Lm = function(t, n, r) {
    var i = "",
      s = (t + i).match(es),
      o = n ? "hsla(" : "rgba(",
      a = 0,
      l, c, u, f;
    if (!s) return t;
    if (s = s.map(function(h) {
        return (h = mb(h, n, 1)) && o + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
      }), r && (u = _b(t), l = r.c, l.join(i) !== u.c.join(i)))
      for (c = t.replace(es, "1").split(yo), f = c.length - 1; a < f; a++) i += c[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : r).shift());
    if (!c)
      for (c = t.split(es), f = c.length - 1; a < f; a++) i += c[a] + s[a];
    return i + c[f]
  },
  es = (function() {
    var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in Ea) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi")
  })(),
  ex = /hsl[a]?\(/,
  yb = function(t) {
    var n = t.join(" "),
      r;
    if (es.lastIndex = 0, es.test(n)) return r = ex.test(n), t[1] = Lm(t[1], r), t[0] = Lm(t[0], r, _b(t[1])), !0
  },
  ul, zn = (function() {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      l, c, u, f, h, d, g = function p(m) {
        var v = e() - i,
          y = m === !0,
          _, b, w, S;
        if ((v > t || v < 0) && (r += v - n), i += v, w = i - r, _ = w - o, (_ > 0 || y) && (S = ++f.frame, h = w - f.time * 1e3, f.time = w = w / 1e3, o += _ + (_ >= s ? 4 : s - _), b = 1), y || (l = c(p)), b)
          for (d = 0; d < a.length; d++) a[d](w, h, S, m)
      };
    return f = {
      time: 0,
      frame: 0,
      tick: function() {
        g(!0)
      },
      deltaRatio: function(m) {
        return h / (1e3 / (m || 60))
      },
      wake: function() {
        Yv && (!Fd && mp() && (Ur = Fd = window, _p = Ur.document || {}, Zn.gsap = Fn, (Ur.gsapVersions || (Ur.gsapVersions = [])).push(Fn.version), Xv(au || Ur.GreenSockGlobals || !Ur.gsap && Ur || {}), pb.forEach(gb)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && f.sleep(), c = u || function(m) {
          return setTimeout(m, o - f.time * 1e3 + 1 | 0)
        }, ul = 1, g(2))
      },
      sleep: function() {
        (u ? cancelAnimationFrame : clearTimeout)(l), ul = 0, c = ll
      },
      lagSmoothing: function(m, v) {
        t = m || 1 / 0, n = Math.min(v || 33, t)
      },
      fps: function(m) {
        s = 1e3 / (m || 240), o = f.time * 1e3 + s
      },
      add: function(m, v, y) {
        var _ = v ? function(b, w, S, A) {
          m(b, w, S, A), f.remove(_)
        } : m;
        return f.remove(m), a[y ? "unshift" : "push"](_), $o(), _
      },
      remove: function(m, v) {
        ~(v = a.indexOf(m)) && a.splice(v, 1) && d >= v && d--
      },
      _listeners: a
    }, f
  })(),
  $o = function() {
    return !ul && zn.wake()
  },
  Ue = {},
  tx = /^[\d.\-M][\d.\-,\s]/,
  nx = /["']/g,
  rx = function(t) {
    for (var n = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, l, c; s < o; s++) l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), n[i] = isNaN(c) ? c.replace(nx, "").trim() : +c, i = l.substr(a + 1).trim();
    return n
  },
  ix = function(t) {
    var n = t.indexOf("(") + 1,
      r = t.indexOf(")"),
      i = t.indexOf("(", n);
    return t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r)
  },
  sx = function(t) {
    var n = (t + "").split("("),
      r = Ue[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [rx(n[1])] : ix(t).split(",").map(tb)) : Ue._CE && tx.test(t) ? Ue._CE("", t) : r
  },
  ox = function(t) {
    return function(n) {
      return 1 - t(1 - n)
    }
  },
  Us = function(t, n) {
    return t && (bt(t) ? t : Ue[t] || sx(t)) || n
  },
  to = function(t, n, r, i) {
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
    return On(t, function(a) {
      Ue[a] = Zn[a] = s, Ue[o = a.toLowerCase()] = r;
      for (var l in s) Ue[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ue[a + "." + l] = s[l]
    }), s
  },
  vb = function(t) {
    return function(n) {
      return n < .5 ? (1 - t(1 - n * 2)) / 2 : .5 + t((n - .5) * 2) / 2
    }
  },
  Nf = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (t ? .3 : .45)) / (n < 1 ? n : 1),
      o = s / Dd * (Math.asin(1 / i) || 0),
      a = function(u) {
        return u === 1 ? 1 : i * Math.pow(2, -10 * u) * LR((u - o) * s) + 1
      },
      l = t === "out" ? a : t === "in" ? function(c) {
        return 1 - a(1 - c)
      } : vb(a);
    return s = Dd / s, l.config = function(c, u) {
      return e(t, c, u)
    }, l
  },
  Df = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
      },
      i = t === "out" ? r : t === "in" ? function(s) {
        return 1 - r(1 - s)
      } : vb(r);
    return i.config = function(s) {
      return e(t, s)
    }, i
  };
On("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
  var n = t < 5 ? t + 1 : t;
  to(e + ",Power" + (n - 1), t ? function(r) {
    return Math.pow(r, n)
  } : function(r) {
    return r
  }, function(r) {
    return 1 - Math.pow(1 - r, n)
  }, function(r) {
    return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
  })
});
Ue.Linear.easeNone = Ue.none = Ue.Linear.easeIn;
to("Elastic", Nf("in"), Nf("out"), Nf());
(function(e, t) {
  var n = 1 / t,
    r = 2 * n,
    i = 2.5 * n,
    s = function(a) {
      return a < n ? e * a * a : a < r ? e * Math.pow(a - 1.5 / t, 2) + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * Math.pow(a - 2.625 / t, 2) + .984375
    };
  to("Bounce", function(o) {
    return 1 - s(1 - o)
  }, s)
})(7.5625, 2.75);
to("Expo", function(e) {
  return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
});
to("Circ", function(e) {
  return -(zv(1 - e * e) - 1)
});
to("Sine", function(e) {
  return e === 1 ? 1 : -xR(e * kR) + 1
});
to("Back", Df("in"), Df("out"), Df());
Ue.SteppedEase = Ue.steps = Zn.SteppedEase = {
  config: function(t, n) {
    t === void 0 && (t = 1);
    var r = 1 / t,
      i = t + (n ? 0 : 1),
      s = n ? 1 : 0,
      o = 1 - rt;
    return function(a) {
      return ((i * Rl(0, o, a) | 0) + s) * r
    }
  }
};
ol.ease = Ue["quad.out"];
On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
  return bp += e + "," + e + "Params,"
});
var bb = function(t, n) {
    this.id = RR++, t._gsap = this, this.target = t, this.harness = n, this.get = n ? n.get : Zv, this.set = n ? n.getSetter : Tp
  },
  fl = (function() {
    function e(n) {
      this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, jo(this, +n.duration, 1, 1), this.data = n.data, ct && (this._ctx = ct, ct.data.push(this)), ul || zn.wake()
    }
    var t = e.prototype;
    return t.delay = function(r) {
      return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
    }, t.duration = function(r) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }, t.totalDuration = function(r) {
      return arguments.length ? (this._dirty = 0, jo(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, t.totalTime = function(r, i) {
      if ($o(), !arguments.length) return this._tTime;
      var s = this._dp;
      if (s && s.smoothChildTiming && this._ts) {
        for (Yu(this, r), !s._dp || s.parent || ib(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && $r(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === rt || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), eb(this, r, i)), this
    }, t.time = function(r, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + km(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }, t.totalProgress = function(r, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }, t.progress = function(r, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + km(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }, t.iteration = function(r, i) {
      var s = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? Wo(this._tTime, s) + 1 : 1
    }, t.timeScale = function(r, i) {
      if (!arguments.length) return this._rts === -rt ? 0 : this._rts;
      if (this._rts === r) return this;
      var s = this.parent && this._ts ? uu(this.parent._time, this) : this._tTime;
      return this._rts = +r || 0, this._ts = this._ps || r === -rt ? 0 : this._rts, this.totalTime(Rl(-Math.abs(this._delay), this.totalDuration(), s), i !== !1), Ku(this), HR(this)
    }, t.paused = function(r) {
      return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : ($o(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== rt && (this._tTime -= rt)))), this) : this._ps
    }, t.startTime = function(r) {
      if (arguments.length) {
        this._start = ft(r);
        var i = this.parent || this._dp;
        return i && (i._sort || !this.parent) && $r(i, this, this._start - this._delay), this
      }
      return this._start
    }, t.endTime = function(r) {
      return this._start + (Pn(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, t.rawTime = function(r) {
      var i = this.parent || this._dp;
      return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? uu(i.rawTime(r), this) : this._tTime : this._tTime
    }, t.revert = function(r) {
      r === void 0 && (r = DR);
      var i = en;
      return en = r, Ap(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), en = i, this
    }, t.globalTime = function(r) {
      for (var i = this, s = arguments.length ? r : i.rawTime(); i;) s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
      return !this.parent && this._sat ? this._sat.globalTime(r) : s
    }, t.repeat = function(r) {
      return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Rm(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, t.repeatDelay = function(r) {
      if (arguments.length) {
        var i = this._time;
        return this._rDelay = r, Rm(this), i ? this.time(i) : this
      }
      return this._rDelay
    }, t.yoyo = function(r) {
      return arguments.length ? (this._yoyo = r, this) : this._yoyo
    }, t.seek = function(r, i) {
      return this.totalTime(rr(this, r), Pn(i))
    }, t.restart = function(r, i) {
      return this.play().totalTime(r ? -this._delay : 0, Pn(i)), this._dur || (this._zTime = -rt), this
    }, t.play = function(r, i) {
      return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
    }, t.reverse = function(r, i) {
      return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
    }, t.pause = function(r, i) {
      return r != null && this.seek(r, i), this.paused(!0)
    }, t.resume = function() {
      return this.paused(!1)
    }, t.reversed = function(r) {
      return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -rt : 0)), this) : this._rts < 0
    }, t.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -rt, this
    }, t.isActive = function() {
      var r = this.parent || this._dp,
        i = this._start,
        s;
      return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - rt)
    }, t.eventCallback = function(r, i, s) {
      var o = this.vars;
      return arguments.length > 1 ? (i ? (o[r] = i, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r]
    }, t.then = function(r) {
      var i = this,
        s = i._prom;
      return new Promise(function(o) {
        var a = bt(r) ? r : nb,
          l = function() {
            var u = i.then;
            i.then = null, s && s(), bt(a) && (a = a(i)) && (a.then || a === i) && (i.then = u), o(a), i.then = u
          };
        i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l
      })
    }, t.kill = function() {
      Sa(this)
    }, e
  })();
er(fl.prototype, {
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
  _zTime: -rt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var xn = (function(e) {
  Vv(t, e);

  function t(r, i) {
    var s;
    return r === void 0 && (r = {}), s = e.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = Pn(r.sortChildren), dt && $r(r.parent || dt, ui(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && sb(ui(s), r.scrollTrigger), s
  }
  var n = t.prototype;
  return n.to = function(i, s, o) {
    return Fa(0, arguments, this), this
  }, n.from = function(i, s, o) {
    return Fa(1, arguments, this), this
  }, n.fromTo = function(i, s, o, a) {
    return Fa(2, arguments, this), this
  }, n.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, Da(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Lt(i, s, rr(this, o), 1), this
  }, n.call = function(i, s, o) {
    return $r(this, Lt.delayedCall(0, i, s), o)
  }, n.staggerTo = function(i, s, o, a, l, c, u) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new Lt(i, o, rr(this, l)), this
  }, n.staggerFrom = function(i, s, o, a, l, c, u) {
    return o.runBackwards = 1, Da(o).immediateRender = Pn(o.immediateRender), this.staggerTo(i, s, o, a, l, c, u)
  }, n.staggerFromTo = function(i, s, o, a, l, c, u, f) {
    return a.startAt = o, Da(a).immediateRender = Pn(a.immediateRender), this.staggerTo(i, s, a, l, c, u, f)
  }, n.render = function(i, s, o) {
    var a = this._time,
      l = this._dirty ? this.totalDuration() : this._tDur,
      c = this._dur,
      u = i <= 0 ? 0 : ft(i),
      f = this._zTime < 0 != i < 0 && (this._initted || !c),
      h, d, g, p, m, v, y, _, b, w, S, A;
    if (this !== dt && u > l && i >= 0 && (u = l), u !== this._tTime || o || f) {
      if (a !== this._time && c && (u += this._time - a, i += this._time - a), h = u, b = this._start, _ = this._ts, v = !_, f && (c || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (S = this._yoyo, m = c + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, s, o);
        if (h = ft(u % m), u === l ? (p = this._repeat, h = c) : (w = ft(u / m), p = ~~w, p && p === w && (h = c, p--), h > c && (h = c)), w = Wo(this._tTime, m), !a && this._tTime && w !== p && this._tTime - w * m - this._dur <= 0 && (w = p), S && p & 1 && (h = c - h, A = 1), p !== w && !this._lock) {
          var L = S && w & 1,
            T = L === (S && p & 1);
          if (p < w && (L = !L), a = L ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (A ? 0 : ft(p * m)), s, !c)._lock = 0, this._tTime = u, !s && this.parent && Gn(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1, w = p), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (c = this._dur, l = this._tDur, T && (this._lock = 2, a = L ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !v) return this
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = VR(this, ft(a), ft(h)), y && (u -= h - (h = y._start))), this._tTime = u, this._time = h, this._act = !!_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && u && c && !s && !w && (Gn(this, "onStart"), this._tTime !== u)) return this;
      if (h >= a && i >= 0)
        for (d = this._first; d;) {
          if (g = d._next, (d._act || h >= d._start) && d._ts && y !== d) {
            if (d.parent !== this) return this.render(i, s, o);
            if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, s, o), h !== this._time || !this._ts && !v) {
              y = 0, g && (u += this._zTime = -rt);
              break
            }
          }
          d = g
        } else {
          d = this._last;
          for (var O = i < 0 ? i : h; d;) {
            if (g = d._prev, (d._act || O <= d._end) && d._ts && y !== d) {
              if (d.parent !== this) return this.render(i, s, o);
              if (d.render(d._ts > 0 ? (O - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (O - d._start) * d._ts, s, o || en && Ap(d)), h !== this._time || !this._ts && !v) {
                y = 0, g && (u += this._zTime = O ? -rt : rt);
                break
              }
            }
            d = g
          }
        }
      if (y && !s && (this.pause(), y.render(h >= a ? 0 : -rt)._zTime = h >= a ? 1 : -1, this._ts)) return this._start = b, Ku(this), this.render(i, s, o);
      this._onUpdate && !s && Gn(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (b === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && is(this, 1), !s && !(i < 0 && !a) && (u || a || !l) && (Gn(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
    }
    return this
  }, n.add = function(i, s) {
    var o = this;
    if (xi(s) || (s = rr(this, s, i)), !(i instanceof fl)) {
      if (pn(i)) return i.forEach(function(a) {
        return o.add(a, s)
      }), this;
      if (zt(i)) return this.addLabel(i, s);
      if (bt(i)) i = Lt.delayedCall(0, i);
      else return this
    }
    return this !== i ? $r(this, i, s) : this
  }, n.getChildren = function(i, s, o, a) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -lr);
    for (var l = [], c = this._first; c;) c._start >= a && (c instanceof Lt ? s && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, o)))), c = c._next;
    return l
  }, n.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
      if (s[o].vars.id === i) return s[o]
  }, n.remove = function(i) {
    return zt(i) ? this.removeLabel(i) : bt(i) ? this.killTweensOf(i) : (i.parent === this && Gu(this, i), i === this._recent && (this._recent = this._last), Bs(this))
  }, n.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ft(zn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), e.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
  }, n.addLabel = function(i, s) {
    return this.labels[i] = rr(this, s), this
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this
  }, n.addPause = function(i, s, o) {
    var a = Lt.delayedCall(0, s || ll, o);
    return a.data = "isPause", this._hasPause = 1, $r(this, a, rr(this, i))
  }, n.removePause = function(i) {
    var s = this._first;
    for (i = rr(this, i); s;) s._start === i && s.data === "isPause" && is(s), s = s._next
  }, n.killTweensOf = function(i, s, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--;) zi !== a[l] && a[l].kill(i, s);
    return this
  }, n.getTweensOf = function(i, s) {
    for (var o = [], a = cr(i), l = this._first, c = xi(s), u; l;) l instanceof Lt ? FR(l._targets, a) && (c ? (!zi || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u), l = l._next;
    return o
  }, n.tweenTo = function(i, s) {
    s = s || {};
    var o = this,
      a = rr(o, i),
      l = s,
      c = l.startAt,
      u = l.onStart,
      f = l.onStartParams,
      h = l.immediateRender,
      d, g = Lt.to(o, er({
        ease: s.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: a,
        overwrite: "auto",
        duration: s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || rt,
        onStart: function() {
          if (o.pause(), !d) {
            var m = s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
            g._dur !== m && jo(g, m, 0, 1).render(g._time, !0, !0), d = 1
          }
          u && u.apply(g, f || [])
        }
      }, s));
    return h ? g.render(0) : g
  }, n.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, er({
      startAt: {
        time: rr(this, i)
      }
    }, o))
  }, n.recent = function() {
    return this._recent
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), xm(this, rr(this, i))
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), xm(this, rr(this, i), 1)
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + rt)
  }, n.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    var a = this._first,
      l = this.labels,
      c;
    for (i = ft(i); a;) a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (s)
      for (c in l) l[c] >= o && (l[c] += i);
    return Bs(this)
  }, n.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s;) s.invalidate(i), s = s._next;
    return e.prototype.invalidate.call(this, i)
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Bs(this)
  }, n.totalDuration = function(i) {
    var s = 0,
      o = this,
      a = o._last,
      l = lr,
      c, u, f;
    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (f = o.parent; a;) c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, $r(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (s -= u, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += ft(u / o._ts), o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = c;
      jo(o, o === dt && o._time > s ? o._time : s, 1, 1), o._dirty = 0
    }
    return o._tDur
  }, t.updateRoot = function(i) {
    if (dt._ts && (eb(dt, uu(i, dt)), Jv = zn.frame), zn.frame >= Cm) {
      Cm += Qn.autoSleep || 120;
      var s = dt._first;
      if ((!s || !s._ts) && Qn.autoSleep && zn._listeners.length < 2) {
        for (; s && !s._ts;) s = s._next;
        s || zn.sleep()
      }
    }
  }, t
})(fl);
er(xn.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var ax = function(t, n, r, i, s, o, a) {
    var l = new In(this._pt, t, n, 0, 1, Tb, null, s),
      c = 0,
      u = 0,
      f, h, d, g, p, m, v, y;
    for (l.b = r, l.e = i, r += "", i += "", (v = ~i.indexOf("random(")) && (i = cl(i)), o && (y = [r, i], o(y, t, n), r = y[0], i = y[1]), h = r.match(Of) || []; f = Of.exec(i);) g = f[0], p = i.substring(c, f.index), d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1), g !== h[u++] && (m = parseFloat(h[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || u === 1 ? p : ",",
      s: m,
      c: g.charAt(1) === "=" ? To(m, g) - m : parseFloat(g) - m,
      m: d && d < 4 ? Math.round : 0
    }, c = Of.lastIndex);
    return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (Kv.test(i) || v) && (l.e = 0), this._pt = l, l
  },
  Sp = function(t, n, r, i, s, o, a, l, c, u) {
    bt(i) && (i = i(s || 0, t, o));
    var f = t[n],
      h = r !== "get" ? r : bt(f) ? c ? t[n.indexOf("set") || !bt(t["get" + n.substr(3)]) ? n : "get" + n.substr(3)](c) : t[n]() : f,
      d = bt(f) ? c ? dx : Eb : Cp,
      g;
    if (zt(i) && (~i.indexOf("random(") && (i = cl(i)), i.charAt(1) === "=" && (g = To(h, i) + (un(h) || 0), (g || g === 0) && (i = g))), !u || h !== i || Vd) return !isNaN(h * i) && i !== "" ? (g = new In(this._pt, t, n, +h || 0, i - (h || 0), typeof f == "boolean" ? px : Cb, 0, d), c && (g.fp = c), a && g.modifier(a, this, t), this._pt = g) : (!f && !(n in t) && yp(n, i), ax.call(this, t, n, h, i, d, l || Qn.stringFilter, c))
  },
  lx = function(t, n, r, i, s) {
    if (bt(t) && (t = Ba(t, s, n, r, i)), !ei(t) || t.style && t.nodeType || pn(t) || qv(t)) return zt(t) ? Ba(t, s, n, r, i) : t;
    var o = {},
      a;
    for (a in t) o[a] = Ba(t[a], s, n, r, i);
    return o
  },
  wb = function(t, n, r, i, s, o) {
    var a, l, c, u;
    if (jn[t] && (a = new jn[t]).init(s, a.rawVars ? n[t] : lx(n[t], i, s, o, r), r, i, o) !== !1 && (r._pt = l = new In(r._pt, s, t, 0, 1, a.render, a, 0, a.priority), r !== vo))
      for (c = r._ptLookup[r._targets.indexOf(s)], u = a._props.length; u--;) c[a._props[u]] = l;
    return a
  },
  zi, Vd, Ep = function e(t, n, r) {
    var i = t.vars,
      s = i.ease,
      o = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      c = i.onUpdate,
      u = i.runBackwards,
      f = i.yoyoEase,
      h = i.keyframes,
      d = i.autoRevert,
      g = t._dur,
      p = t._startAt,
      m = t._targets,
      v = t.parent,
      y = v && v.data === "nested" ? v.vars.targets : m,
      _ = t._overwrite === "auto" && !pp,
      b = t.timeline,
      w = i.easeReverse || f,
      S, A, L, T, O, B, P, W, G, X, H, q, K;
    if (b && (!h || !s) && (s = "none"), t._ease = Us(s, ol.ease), t._rEase = w && (Us(w) || t._ease), t._from = !b && !!i.runBackwards, t._from && (t.ratio = 1), !b || h && !i.stagger) {
      if (W = m[0] ? Fs(m[0]).harness : 0, q = W && i[W.prop], S = cu(i, vp), p && (p._zTime < 0 && p.progress(1), n < 0 && u && a && !d ? p.render(-1, !0) : p.revert(u && g ? Ac : NR), p._lazy = 0), o) {
        if (is(t._startAt = Lt.set(m, er({
            data: "isStart",
            overwrite: !1,
            parent: v,
            immediateRender: !0,
            lazy: !p && Pn(l),
            startAt: null,
            delay: 0,
            onUpdate: c && function() {
              return Gn(t, "onUpdate")
            },
            stagger: 0
          }, o))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (en || !a && !d) && t._startAt.revert(Ac), a && g && n <= 0 && r <= 0) {
          n && (t._zTime = n);
          return
        }
      } else if (u && g && !p) {
        if (n && (a = !1), L = er({
            overwrite: !1,
            data: "isFromStart",
            lazy: a && !p && Pn(l),
            immediateRender: a,
            stagger: 0,
            parent: v
          }, S), q && (L[W.prop] = q), is(t._startAt = Lt.set(m, L)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (en ? t._startAt.revert(Ac) : t._startAt.render(-1, !0)), t._zTime = n, !a) e(t._startAt, rt, rt);
        else if (!n) return
      }
      for (t._pt = t._ptCache = 0, l = g && Pn(l) || l && !g, A = 0; A < m.length; A++) {
        if (O = m[A], P = O._gsap || wp(m)[A]._gsap, t._ptLookup[A] = X = {}, Bd[P.id] && Zi.length && lu(), H = y === m ? A : y.indexOf(O), W && (G = new W).init(O, q || S, t, H, y) !== !1 && (t._pt = T = new In(t._pt, O, G.name, 0, 1, G.render, G, 0, G.priority), G._props.forEach(function(Z) {
            X[Z] = T
          }), G.priority && (B = 1)), !W || q)
          for (L in S) jn[L] && (G = wb(L, S, t, H, O, y)) ? G.priority && (B = 1) : X[L] = T = Sp.call(t, O, L, "get", S[L], H, y, 0, i.stringFilter);
        t._op && t._op[A] && t.kill(O, t._op[A]), _ && t._pt && (zi = t, dt.killTweensOf(O, X, t.globalTime(n)), K = !t.parent, zi = 0), t._pt && l && (Bd[P.id] = 1)
      }
      B && kb(t), t._onInit && t._onInit(t)
    }
    t._onUpdate = c, t._initted = (!t._op || t._pt) && !K, h && n <= 0 && b.render(lr, !0, !0)
  },
  cx = function(t, n, r, i, s, o, a, l) {
    var c = (t._pt && t._ptCache || (t._ptCache = {}))[n],
      u, f, h, d;
    if (!c)
      for (c = t._ptCache[n] = [], h = t._ptLookup, d = t._targets.length; d--;) {
        if (u = h[d][n], u && u.d && u.d._pt)
          for (u = u.d._pt; u && u.p !== n && u.fp !== n;) u = u._next;
        if (!u) return Vd = 1, t.vars[n] = "+=0", Ep(t, a), Vd = 0, l ? al(n + " not eligible for reset. Try splitting into individual properties") : 1;
        c.push(u)
      }
    for (d = c.length; d--;) f = c[d], u = f._pt || f, u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c, u.c = r - u.s, f.e && (f.e = At(r) + un(f.e)), f.b && (f.b = u.s + un(f.b))
  },
  ux = function(t, n) {
    var r = t[0] ? Fs(t[0]).harness : 0,
      i = r && r.aliases,
      s, o, a, l;
    if (!i) return n;
    s = Ho({}, n);
    for (o in i)
      if (o in s)
        for (l = i[o].split(","), a = l.length; a--;) s[l[a]] = s[o];
    return s
  },
  fx = function(t, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o, a;
    if (pn(n)) a = r[t] || (r[t] = []), n.forEach(function(l, c) {
      return a.push({
        t: c / (n.length - 1) * 100,
        v: l,
        e: s
      })
    });
    else
      for (o in n) a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: n[o],
        e: s
      })
  },
  Ba = function(t, n, r, i, s) {
    return bt(t) ? t.call(n, r, i, s) : zt(t) && ~t.indexOf("random(") ? cl(t) : t
  },
  Ab = bp + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  Sb = {};
On(Ab + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
  return Sb[e] = 1
});
var Lt = (function(e) {
  Vv(t, e);

  function t(r, i, s, o) {
    var a;
    typeof i == "number" && (s.duration = i, i = s, s = null), a = e.call(this, o ? i : Da(i)) || this;
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      f = l.immediateRender,
      h = l.stagger,
      d = l.overwrite,
      g = l.keyframes,
      p = l.defaults,
      m = l.scrollTrigger,
      v = i.parent || dt,
      y = (pn(r) || qv(r) ? xi(r[0]) : "length" in i) ? [r] : cr(r),
      _, b, w, S, A, L, T, O;
    if (a._targets = y.length ? wp(y) : al("GSAP target " + r + " not found. https://gsap.com", !Qn.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, g || h || zl(c) || zl(u)) {
      i = a.vars;
      var B = i.easeReverse || i.yoyoEase;
      if (_ = a.timeline = new xn({
          data: "nested",
          defaults: p || {},
          targets: v && v.data === "nested" ? v.vars.targets : y
        }), _.kill(), _.parent = _._dp = ui(a), _._start = 0, h || zl(c) || zl(u)) {
        if (S = y.length, T = h && cb(h), ei(h))
          for (A in h) ~Ab.indexOf(A) && (O || (O = {}), O[A] = h[A]);
        for (b = 0; b < S; b++) w = cu(i, Sb), w.stagger = 0, B && (w.easeReverse = B), O && Ho(w, O), L = y[b], w.duration = +Ba(c, ui(a), b, L, y), w.delay = (+Ba(u, ui(a), b, L, y) || 0) - a._delay, !h && S === 1 && w.delay && (a._delay = u = w.delay, a._start += u, w.delay = 0), _.to(L, w, T ? T(b, L, y) : 0), _._ease = Ue.none;
        _.duration() ? c = u = 0 : a.timeline = 0
      } else if (g) {
        Da(er(_.vars.defaults, {
          ease: "none"
        })), _._ease = Us(g.ease || i.ease || "none");
        var P = 0,
          W, G, X;
        if (pn(g)) g.forEach(function(H) {
          return _.to(y, H, ">")
        }), _.duration();
        else {
          w = {};
          for (A in g) A === "ease" || A === "easeEach" || fx(A, g[A], w, g.easeEach);
          for (A in w)
            for (W = w[A].sort(function(H, q) {
                return H.t - q.t
              }), P = 0, b = 0; b < W.length; b++) G = W[b], X = {
              ease: G.e,
              duration: (G.t - (b ? W[b - 1].t : 0)) / 100 * c
            }, X[A] = G.v, _.to(y, X, P), P += X.duration;
          _.duration() < c && _.to({}, {
            duration: c - _.duration()
          })
        }
      }
      c || a.duration(c = _.duration())
    } else a.timeline = 0;
    return d === !0 && !pp && (zi = ui(a), dt.killTweensOf(y), zi = 0), $r(v, ui(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (f || !c && !g && a._start === ft(v._time) && Pn(f) && WR(ui(a)) && v.data !== "nested") && (a._tTime = -rt, a.render(Math.max(0, -u) || 0)), m && sb(ui(a), m), a
  }
  var n = t.prototype;
  return n.render = function(i, s, o) {
    var a = this._time,
      l = this._tDur,
      c = this._dur,
      u = i < 0,
      f = i > l - rt && !u ? l : i < rt ? 0 : i,
      h, d, g, p, m, v, y, _;
    if (!c) $R(this, i, s, o);
    else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (h = f, _ = this.timeline, this._repeat) {
        if (p = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(p * 100 + i, s, o);
        if (h = ft(f % p), f === l ? (g = this._repeat, h = c) : (m = ft(f / p), g = ~~m, g && g === m ? (h = c, g--) : h > c && (h = c)), v = this._yoyo && g & 1, v && (h = c - h), m = Wo(this._tTime, p), h === a && !o && this._initted && g === m) return this._tTime = f, this;
        g !== m && this.vars.repeatRefresh && !v && !this._lock && h !== p && this._initted && (this._lock = o = 1, this.render(ft(p * g), !0).invalidate()._lock = 0)
      }
      if (!this._initted) {
        if (ob(this, u ? i : h, o, s, f)) return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && g !== m)) return this;
        if (c !== this._dur) return this.render(i, s, o)
      }
      if (this._rEase) {
        var b = h < a;
        if (b !== this._inv) {
          var w = b ? a : c - a;
          this._inv = b, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = w ? (b ? -1 : 1) / w : 0, this._invScale = b ? -this.ratio : 1 - this.ratio, this._invEase = b ? this._rEase : this._ease
        }
        this.ratio = y = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip)
      } else this.ratio = y = this._ease(h / c);
      if (this._from && (this.ratio = y = 1 - y), this._tTime = f, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && f && !s && !m && (Gn(this, "onStart"), this._tTime !== f)) return this;
      for (d = this._pt; d;) d.r(y, d.d), d = d._next;
      _ && _.render(i < 0 ? i : _._dur * _._ease(h / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (u && Ud(this, i, s, o), Gn(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !s && this.parent && Gn(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (u && !this._onUpdate && Ud(this, i, !0, !0), (i || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && is(this, 1), !s && !(u && !a) && (f || a || v) && (Gn(this, f === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom()))
    }
    return this
  }, n.targets = function() {
    return this._targets
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), e.prototype.invalidate.call(this, i)
  }, n.resetTo = function(i, s, o, a, l) {
    ul || zn.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      u;
    return this._initted || Ep(this, c), u = this._ease(c / this._dur), cx(this, i, s, o, a, u, c, l) ? this.resetTo(i, s, o, a, 1) : (Yu(this, 0), this.parent || rb(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
  }, n.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Sa(this) : this.scrollTrigger && this.scrollTrigger.kill(!!en), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, zi && zi.vars.overwrite !== !0)._first || Sa(this), this.parent && o !== this.timeline.totalDuration() && jo(this, this._dur * this.timeline._tDur / o, 0, 1), this
    }
    var a = this._targets,
      l = i ? cr(i) : a,
      c = this._ptLookup,
      u = this._pt,
      f, h, d, g, p, m, v;
    if ((!s || s === "all") && UR(a, l)) return s === "all" && (this._pt = 0), Sa(this);
    for (f = this._op = this._op || [], s !== "all" && (zt(s) && (p = {}, On(s, function(y) {
        return p[y] = 1
      }), s = p), s = ux(a, s)), v = a.length; v--;)
      if (~l.indexOf(a[v])) {
        h = c[v], s === "all" ? (f[v] = s, g = h, d = {}) : (d = f[v] = f[v] || {}, g = s);
        for (p in g) m = h && h[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && Gu(this, m, "_pt"), delete h[p]), d !== "all" && (d[p] = 1)
      } return this._initted && !this._pt && u && Sa(this), this
  }, t.to = function(i, s) {
    return new t(i, s, arguments[2])
  }, t.from = function(i, s) {
    return Fa(1, arguments)
  }, t.delayedCall = function(i, s, o, a) {
    return new t(s, 0, {
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
  }, t.fromTo = function(i, s, o) {
    return Fa(2, arguments)
  }, t.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(i, s)
  }, t.killTweensOf = function(i, s, o) {
    return dt.killTweensOf(i, s, o)
  }, t
})(fl);
er(Lt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
On("staggerTo,staggerFrom,staggerFromTo", function(e) {
  Lt[e] = function() {
    var t = new xn,
      n = Wd.call(arguments, 0);
    return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n)
  }
});
var Cp = function(t, n, r) {
    return t[n] = r
  },
  Eb = function(t, n, r) {
    return t[n](r)
  },
  dx = function(t, n, r, i) {
    return t[n](i.fp, r)
  },
  hx = function(t, n, r) {
    return t.setAttribute(n, r)
  },
  Tp = function(t, n) {
    return bt(t[n]) ? Eb : gp(t[n]) && t.setAttribute ? hx : Cp
  },
  Cb = function(t, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n)
  },
  px = function(t, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * t), n)
  },
  Tb = function(t, n) {
    var r = n._pt,
      i = "";
    if (!t && n.b) i = n.b;
    else if (t === 1 && n.e) i = n.e;
    else {
      for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
      i += n.c
    }
    n.set(n.t, n.p, i, n)
  },
  kp = function(t, n) {
    for (var r = n._pt; r;) r.r(t, r.d), r = r._next
  },
  gx = function(t, n, r, i) {
    for (var s = this._pt, o; s;) o = s._next, s.p === i && s.modifier(t, n, r), s = o
  },
  mx = function(t) {
    for (var n = this._pt, r, i; n;) i = n._next, n.p === t && !n.op || n.op === t ? Gu(this, n, "_pt") : n.dep || (r = 1), n = i;
    return !r
  },
  _x = function(t, n, r, i) {
    i.mSet(t, n, i.m.call(i.tween, r, i.mt), i)
  },
  kb = function(t) {
    for (var n = t._pt, r, i, s, o; n;) {
      for (r = n._next, i = s; i && i.pr > n.pr;) i = i._next;
      (n._prev = i ? i._prev : o) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : o = n, n = r
    }
    t._pt = s
  },
  In = (function() {
    function e(n, r, i, s, o, a, l, c, u) {
      this.t = r, this.s = s, this.c = o, this.p = i, this.r = a || Cb, this.d = l || this, this.set = c || Cp, this.pr = u || 0, this._next = n, n && (n._prev = this)
    }
    var t = e.prototype;
    return t.modifier = function(r, i, s) {
      this.mSet = this.mSet || this.set, this.set = _x, this.m = r, this.mt = s, this.tween = i
    }, e
  })();
On(bp + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
  return vp[e] = 1
});
Zn.TweenMax = Zn.TweenLite = Lt;
Zn.TimelineLite = Zn.TimelineMax = xn;
dt = new xn({
  sortChildren: !1,
  defaults: ol,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Qn.stringFilter = yb;
var Hs = [],
  Ec = {},
  yx = [],
  Pm = 0,
  vx = 0,
  Ff = function(t) {
    return (Ec[t] || yx).map(function(n) {
      return n()
    })
  },
  zd = function() {
    var t = Date.now(),
      n = [];
    t - Pm > 2 && (Ff("matchMediaInit"), Hs.forEach(function(r) {
      var i = r.queries,
        s = r.conditions,
        o, a, l, c;
      for (a in i) o = Ur.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, c = 1);
      c && (r.revert(), l && n.push(r))
    }), Ff("matchMediaRevert"), n.forEach(function(r) {
      return r.onMatch(r, function(i) {
        return r.add(null, i)
      })
    }), Pm = t, Ff("matchMedia"))
  },
  Rb = (function() {
    function e(n, r) {
      this.selector = r && jd(r), this.data = [], this._r = [], this.isReverted = !1, this.id = vx++, n && this.add(n)
    }
    var t = e.prototype;
    return t.add = function(r, i, s) {
      bt(r) && (s = i, i = r, r = bt);
      var o = this,
        a = function() {
          var c = ct,
            u = o.selector,
            f;
          return c && c !== o && c.data.push(o), s && (o.selector = jd(s)), ct = o, f = i.apply(o, arguments), bt(f) && o._r.push(f), ct = c, o.selector = u, o.isReverted = !1, f
        };
      return o.last = a, r === bt ? a(o, function(l) {
        return o.add(null, l)
      }) : r ? o[r] = a : a
    }, t.ignore = function(r) {
      var i = ct;
      ct = null, r(this), ct = i
    }, t.getTweens = function() {
      var r = [];
      return this.data.forEach(function(i) {
        return i instanceof e ? r.push.apply(r, i.getTweens()) : i instanceof Lt && !(i.parent && i.parent.data === "nested") && r.push(i)
      }), r
    }, t.clear = function() {
      this._r.length = this.data.length = 0
    }, t.kill = function(r, i) {
      var s = this;
      if (r ? (function() {
          for (var a = s.getTweens(), l = s.data.length, c; l--;) c = s.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(u) {
            return a.splice(a.indexOf(u), 1)
          }));
          for (a.map(function(u) {
              return {
                g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
                t: u
              }
            }).sort(function(u, f) {
              return f.g - u.g || -1 / 0
            }).forEach(function(u) {
              return u.t.revert(r)
            }), l = s.data.length; l--;) c = s.data[l], c instanceof xn ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof Lt) && c.revert && c.revert(r);
          s._r.forEach(function(u) {
            return u(r, s)
          }), s.isReverted = !0
        })() : this.data.forEach(function(a) {
          return a.kill && a.kill()
        }), this.clear(), i)
        for (var o = Hs.length; o--;) Hs[o].id === this.id && Hs.splice(o, 1)
    }, t.revert = function(r) {
      this.kill(r || {})
    }, e
  })(),
  bx = (function() {
    function e(n) {
      this.contexts = [], this.scope = n, ct && ct.data.push(this)
    }
    var t = e.prototype;
    return t.add = function(r, i, s) {
      ei(r) || (r = {
        matches: r
      });
      var o = new Rb(0, s || this.scope),
        a = o.conditions = {},
        l, c, u;
      ct && !o.selector && (o.selector = ct.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
      for (c in r) c === "all" ? u = 1 : (l = Ur.matchMedia(r[c]), l && (Hs.indexOf(o) < 0 && Hs.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(zd) : l.addEventListener("change", zd)));
      return u && i(o, function(f) {
        return o.add(null, f)
      }), this
    }, t.revert = function(r) {
      this.kill(r || {})
    }, t.kill = function(r) {
      this.contexts.forEach(function(i) {
        return i.kill(r, !0)
      })
    }, e
  })(),
  fu = {
    registerPlugin: function() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      n.forEach(function(i) {
        return gb(i)
      })
    },
    timeline: function(t) {
      return new xn(t)
    },
    getTweensOf: function(t, n) {
      return dt.getTweensOf(t, n)
    },
    getProperty: function(t, n, r, i) {
      zt(t) && (t = cr(t)[0]);
      var s = Fs(t || {}).get,
        o = r ? nb : tb;
      return r === "native" && (r = ""), t && (n ? o((jn[n] && jn[n].get || s)(t, n, r, i)) : function(a, l, c) {
        return o((jn[a] && jn[a].get || s)(t, a, l, c))
      })
    },
    quickSetter: function(t, n, r) {
      if (t = cr(t), t.length > 1) {
        var i = t.map(function(u) {
            return Fn.quickSetter(u, n, r)
          }),
          s = i.length;
        return function(u) {
          for (var f = s; f--;) i[f](u)
        }
      }
      t = t[0] || {};
      var o = jn[n],
        a = Fs(t),
        l = a.harness && (a.harness.aliases || {})[n] || n,
        c = o ? function(u) {
          var f = new o;
          vo._pt = 0, f.init(t, r ? u + r : u, vo, 0, [t]), f.render(1, f), vo._pt && kp(1, vo)
        } : a.set(t, l);
      return o ? c : function(u) {
        return c(t, l, r ? u + r : u, a, 1)
      }
    },
    quickTo: function(t, n, r) {
      var i, s = Fn.to(t, er((i = {}, i[n] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})),
        o = function(l, c, u) {
          return s.resetTo(n, l, c, u)
        };
      return o.tween = s, o
    },
    isTweening: function(t) {
      return dt.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
      return t && t.ease && (t.ease = Us(t.ease, ol.ease)), Tm(ol, t || {})
    },
    config: function(t) {
      return Tm(Qn, t || {})
    },
    registerEffect: function(t) {
      var n = t.name,
        r = t.effect,
        i = t.plugins,
        s = t.defaults,
        o = t.extendTimeline;
      (i || "").split(",").forEach(function(a) {
        return a && !jn[a] && !Zn[a] && al(n + " effect requires " + a + " plugin.")
      }), If[n] = function(a, l, c) {
        return r(cr(a), er(l || {}, s), c)
      }, o && (xn.prototype[n] = function(a, l, c) {
        return this.add(If[n](a, ei(l) ? l : (c = l) && {}, this), c)
      })
    },
    registerEase: function(t, n) {
      Ue[t] = Us(n)
    },
    parseEase: function(t, n) {
      return arguments.length ? Us(t, n) : Ue
    },
    getById: function(t) {
      return dt.getById(t)
    },
    exportRoot: function(t, n) {
      t === void 0 && (t = {});
      var r = new xn(t),
        i, s;
      for (r.smoothChildTiming = Pn(t.smoothChildTiming), dt.remove(r), r._dp = 0, r._time = r._tTime = dt._time, i = dt._first; i;) s = i._next, (n || !(!i._dur && i instanceof Lt && i.vars.onComplete === i._targets[0])) && $r(r, i, i._start - i._delay), i = s;
      return $r(dt, r, 0), r
    },
    context: function(t, n) {
      return t ? new Rb(t, n) : ct
    },
    matchMedia: function(t) {
      return new bx(t)
    },
    matchMediaRefresh: function() {
      return Hs.forEach(function(t) {
        var n = t.conditions,
          r, i;
        for (i in n) n[i] && (n[i] = !1, r = 1);
        r && t.revert()
      }) || zd()
    },
    addEventListener: function(t, n) {
      var r = Ec[t] || (Ec[t] = []);
      ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(t, n) {
      var r = Ec[t],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1)
    },
    utils: {
      wrap: QR,
      wrapYoyo: JR,
      distribute: cb,
      random: fb,
      snap: ub,
      normalize: XR,
      getUnit: un,
      clamp: qR,
      splitColor: mb,
      toArray: cr,
      selector: jd,
      mapRange: hb,
      pipe: KR,
      unitize: YR,
      interpolate: ZR,
      shuffle: lb
    },
    install: Xv,
    effects: If,
    ticker: zn,
    updateRoot: xn.updateRoot,
    plugins: jn,
    globalTimeline: dt,
    core: {
      PropTween: In,
      globals: Qv,
      Tween: Lt,
      Timeline: xn,
      Animation: fl,
      getCache: Fs,
      _removeLinkedListItem: Gu,
      reverting: function() {
        return en
      },
      context: function(t) {
        return t && ct && (ct.data.push(t), t._ctx = ct), ct
      },
      suppressOverwrites: function(t) {
        return pp = t
      }
    }
  };
On("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
  return fu[e] = Lt[e]
});
zn.add(xn.updateRoot);
vo = fu.to({}, {
  duration: 0
});
var wx = function(t, n) {
    for (var r = t._pt; r && r.p !== n && r.op !== n && r.fp !== n;) r = r._next;
    return r
  },
  Ax = function(t, n) {
    var r = t._targets,
      i, s, o;
    for (i in n)
      for (s = r.length; s--;) o = t._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = wx(o, i)), o && o.modifier && o.modifier(n[i], t, r[s], i))
  },
  Bf = function(t, n) {
    return {
      name: t,
      headless: 1,
      rawVars: 1,
      init: function(i, s, o) {
        o._onInit = function(a) {
          var l, c;
          if (zt(s) && (l = {}, On(s, function(u) {
              return l[u] = 1
            }), s = l), n) {
            l = {};
            for (c in s) l[c] = n(s[c]);
            s = l
          }
          Ax(a, s)
        }
      }
    }
  },
  Fn = fu.registerPlugin({
    name: "attr",
    init: function(t, n, r, i, s) {
      var o, a, l;
      this.tween = r;
      for (o in n) l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", n[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
    },
    render: function(t, n) {
      for (var r = n._pt; r;) en ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
    }
  }, {
    name: "endArray",
    headless: 1,
    init: function(t, n) {
      for (var r = n.length; r--;) this.add(t, r, t[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
  }, Bf("roundProps", $d), Bf("modifiers"), Bf("snap", ub)) || fu;
Lt.version = xn.version = Fn.version = "3.15.0";
Yv = 1;
mp() && $o();
Ue.Power0;
Ue.Power1;
Ue.Power2;
Ue.Power3;
Ue.Power4;
Ue.Linear;
Ue.Quad;
Ue.Cubic;
Ue.Quart;
Ue.Quint;
Ue.Strong;
Ue.Elastic;
Ue.Back;
Ue.SteppedEase;
Ue.Bounce;
Ue.Sine;
Ue.Expo;
Ue.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Om, qi, ko, Rp, Ps, Im, xp, Sx = function() {
    return typeof window < "u"
  },
  Li = {},
  Ss = 180 / Math.PI,
  Ro = Math.PI / 180,
  so = Math.atan2,
  Mm = 1e8,
  Lp = /([A-Z])/g,
  Ex = /(left|right|width|margin|padding|x)/i,
  Cx = /[\s,\(]\S/,
  Vr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  qd = function(t, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n)
  },
  Tx = function(t, n) {
    return n.set(n.t, n.p, t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n)
  },
  kx = function(t, n) {
    return n.set(n.t, n.p, t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b, n)
  },
  Rx = function(t, n) {
    return n.set(n.t, n.p, t === 1 ? n.e : t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b, n)
  },
  xx = function(t, n) {
    var r = n.s + n.c * t;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
  },
  xb = function(t, n) {
    return n.set(n.t, n.p, t ? n.e : n.b, n)
  },
  Lb = function(t, n) {
    return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n)
  },
  Lx = function(t, n, r) {
    return t.style[n] = r
  },
  Px = function(t, n, r) {
    return t.style.setProperty(n, r)
  },
  Ox = function(t, n, r) {
    return t._gsap[n] = r
  },
  Ix = function(t, n, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r
  },
  Mx = function(t, n, r, i, s) {
    var o = t._gsap;
    o.scaleX = o.scaleY = r, o.renderTransform(s, o)
  },
  Nx = function(t, n, r, i, s) {
    var o = t._gsap;
    o[n] = r, o.renderTransform(s, o)
  },
  gt = "transform",
  Mn = gt + "Origin",
  Dx = function e(t, n) {
    var r = this,
      i = this.target,
      s = i.style,
      o = i._gsap;
    if (t in Li && s) {
      if (this.tfm = this.tfm || {}, t !== "transform") t = Vr[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return r.tfm[a] = di(i, a)
      }) : this.tfm[t] = o.x ? o[t] : di(i, t), t === Mn && (this.tfm.zOrigin = o.zOrigin);
      else return Vr.transform.split(",").forEach(function(a) {
        return e.call(r, a, n)
      });
      if (this.props.indexOf(gt) >= 0) return;
      o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Mn, n, "")), t = gt
    }(s || n) && this.props.push(t, n, s[t])
  },
  Pb = function(t) {
    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
  },
  Fx = function() {
    var t = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s, o;
    for (s = 0; s < t.length; s += 3) t[s + 1] ? t[s + 1] === 2 ? n[t[s]](t[s + 2]) : n[t[s]] = t[s + 2] : t[s + 2] ? r[t[s]] = t[s + 2] : r.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(Lp, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), s = xp(), (!s || !s.isStart) && !r[gt] && (Pb(r), i.zOrigin && r[Mn] && (r[Mn] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1)
    }
  },
  Ob = function(t, n) {
    var r = {
      target: t,
      props: [],
      revert: Fx,
      save: Dx
    };
    return t._gsap || Fn.core.getCache(t), n && t.style && t.nodeType && n.split(",").forEach(function(i) {
      return r.save(i)
    }), r
  },
  Ib, Gd = function(t, n) {
    var r = qi.createElementNS ? qi.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : qi.createElement(t);
    return r && r.style ? r : qi.createElement(t)
  },
  Kn = function e(t, n, r) {
    var i = getComputedStyle(t);
    return i[n] || i.getPropertyValue(n.replace(Lp, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, Vo(n) || n, 1) || ""
  },
  Nm = "O,Moz,ms,Ms,Webkit".split(","),
  Vo = function(t, n, r) {
    var i = n || Ps,
      s = i.style,
      o = 5;
    if (t in s && !r) return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Nm[o] + t in s););
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Nm[o] : "") + t
  },
  Kd = function() {
    Sx() && window.document && (Om = window, qi = Om.document, ko = qi.documentElement, Ps = Gd("div") || {
      style: {}
    }, Gd("div"), gt = Vo(gt), Mn = gt + "Origin", Ps.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ib = !!Vo("perspective"), xp = Fn.core.reverting, Rp = 1)
  },
  Dm = function(t) {
    var n = t.ownerSVGElement,
      r = Gd("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = t.cloneNode(!0),
      s;
    i.style.display = "block", r.appendChild(i), ko.appendChild(r);
    try {
      s = i.getBBox()
    } catch {}
    return r.removeChild(i), ko.removeChild(r), s
  },
  Fm = function(t, n) {
    for (var r = n.length; r--;)
      if (t.hasAttribute(n[r])) return t.getAttribute(n[r])
  },
  Mb = function(t) {
    var n, r;
    try {
      n = t.getBBox()
    } catch {
      n = Dm(t), r = 1
    }
    return n && (n.width || n.height) || r || (n = Dm(t)), n && !n.width && !n.x && !n.y ? {
      x: +Fm(t, ["x", "cx", "x1"]) || 0,
      y: +Fm(t, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : n
  },
  Nb = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mb(t))
  },
  ss = function(t, n) {
    if (n) {
      var r = t.style,
        i;
      n in Li && n !== Mn && (n = gt), r.removeProperty ? (i = n.substr(0, 2), (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(i === "--" ? n : n.replace(Lp, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
  },
  Gi = function(t, n, r, i, s, o) {
    var a = new In(t._pt, n, r, 0, 1, o ? Lb : xb);
    return t._pt = a, a.b = i, a.e = s, t._props.push(r), a
  },
  Bm = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  Bx = {
    grid: 1,
    flex: 1
  },
  os = function e(t, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = Ps.style,
      l = Ex.test(n),
      c = t.tagName.toLowerCase() === "svg",
      u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      f = 100,
      h = i === "px",
      d = i === "%",
      g, p, m, v;
    if (i === o || !s || Bm[i] || Bm[o]) return s;
    if (o !== "px" && !h && (s = e(t, n, r, "px")), v = t.getCTM && Nb(t), (d || o === "%") && (Li[n] || ~n.indexOf("adius"))) return g = v ? t.getBBox()[l ? "width" : "height"] : t[u], At(d ? s / g * f : s / 100 * g);
    if (a[l ? "width" : "height"] = f + (h ? o : i), p = i !== "rem" && ~n.indexOf("adius") || i === "em" && t.appendChild && !c ? t : t.parentNode, v && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === qi || !p.appendChild) && (p = qi.body), m = p._gsap, m && d && m.width && l && m.time === zn.time && !m.uncache) return At(s / m.width * f);
    if (d && (n === "height" || n === "width")) {
      var y = t.style[n];
      t.style[n] = f + i, g = t[u], y ? t.style[n] = y : ss(t, n)
    } else(d || o === "%") && !Bx[Kn(p, "display")] && (a.position = Kn(t, "position")), p === t && (a.position = "static"), p.appendChild(Ps), g = Ps[u], p.removeChild(Ps), a.position = "absolute";
    return l && d && (m = Fs(p), m.time = zn.time, m.width = p[u]), At(h ? g * s / f : g && s ? f / g * s : 0)
  },
  di = function(t, n, r, i) {
    var s;
    return Rp || Kd(), n in Vr && n !== "transform" && (n = Vr[n], ~n.indexOf(",") && (n = n.split(",")[0])), Li[n] && n !== "transform" ? (s = hl(t, i), s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : hu(Kn(t, Mn)) + " " + s.zOrigin + "px") : (s = t.style[n], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = du[n] && du[n](t, n, r) || Kn(t, n) || Zv(t, n) || (n === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? os(t, n, s, r) + r : s
  },
  Ux = function(t, n, r, i) {
    if (!r || r === "none") {
      var s = Vo(n, t, 1),
        o = s && Kn(t, s, 1);
      o && o !== r ? (n = s, r = o) : n === "borderColor" && (r = Kn(t, "borderTopColor"))
    }
    var a = new In(this._pt, t.style, n, 0, 1, Tb),
      l = 0,
      c = 0,
      u, f, h, d, g, p, m, v, y, _, b, w;
    if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = Kn(t, i.substring(4, i.indexOf(")")))), i === "auto" && (p = t.style[n], t.style[n] = i, i = Kn(t, n) || i, p ? t.style[n] = p : ss(t, n)), u = [r, i], yb(u), r = u[0], i = u[1], h = r.match(yo) || [], w = i.match(yo) || [], w.length) {
      for (; f = yo.exec(i);) m = f[0], y = i.substring(l, f.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), m !== (p = h[c++] || "") && (d = parseFloat(p) || 0, b = p.substr((d + "").length), m.charAt(1) === "=" && (m = To(d, m) + b), v = parseFloat(m), _ = m.substr((v + "").length), l = yo.lastIndex - _.length, _ || (_ = _ || Qn.units[n] || b, l === i.length && (i += _, a.e += _)), b !== _ && (d = os(t, n, p, _) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        s: d,
        c: v - d,
        m: g && g < 4 || n === "zIndex" ? Math.round : 0
      });
      a.c = l < i.length ? i.substring(l, i.length) : ""
    } else a.r = n === "display" && i === "none" ? Lb : xb;
    return Kv.test(i) && (a.e = 0), this._pt = a, a
  },
  Um = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  Hx = function(t) {
    var n = t.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), n[0] = Um[r] || r, n[1] = Um[i] || i, n.join(" ")
  },
  Wx = function(t, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        a, l, c;
      if (s === "all" || s === !0) i.cssText = "", l = 1;
      else
        for (s = s.split(","), c = s.length; --c > -1;) a = s[c], Li[a] && (l = 1, a = a === "transformOrigin" ? Mn : gt), ss(r, a);
      l && (ss(r, gt), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", hl(r, 1), o.uncache = 1, Pb(i)))
    }
  },
  du = {
    clearProps: function(t, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = t._pt = new In(t._pt, n, r, 0, 0, Wx);
        return o.u = i, o.pr = -10, o.tween = s, t._props.push(r), 1
      }
    }
  },
  dl = [1, 0, 0, 1, 0, 0],
  Db = {},
  Fb = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
  },
  Hm = function(t) {
    var n = Kn(t, gt);
    return Fb(n) ? dl : n.substr(7).match(Gv).map(At)
  },
  Pp = function(t, n) {
    var r = t._gsap || Fs(t),
      i = t.style,
      s = Hm(t),
      o, a, l, c;
    return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? dl : s) : (s === dl && !t.offsetParent && t !== ko && !r.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (c = 1, a = t.nextElementSibling, ko.appendChild(t)), s = Hm(t), l ? i.display = l : ss(t, "display"), c && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : ko.removeChild(t))), n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
  },
  Yd = function(t, n, r, i, s, o) {
    var a = t._gsap,
      l = s || Pp(t, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      f = a.xOffset || 0,
      h = a.yOffset || 0,
      d = l[0],
      g = l[1],
      p = l[2],
      m = l[3],
      v = l[4],
      y = l[5],
      _ = n.split(" "),
      b = parseFloat(_[0]) || 0,
      w = parseFloat(_[1]) || 0,
      S, A, L, T;
    r ? l !== dl && (A = d * m - g * p) && (L = b * (m / A) + w * (-p / A) + (p * y - m * v) / A, T = b * (-g / A) + w * (d / A) - (d * y - g * v) / A, b = L, w = T) : (S = Mb(t), b = S.x + (~_[0].indexOf("%") ? b / 100 * S.width : b), w = S.y + (~(_[1] || _[0]).indexOf("%") ? w / 100 * S.height : w)), i || i !== !1 && a.smooth ? (v = b - c, y = w - u, a.xOffset = f + (v * d + y * p) - v, a.yOffset = h + (v * g + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = w, a.smooth = !!i, a.origin = n, a.originIsAbsolute = !!r, t.style[Mn] = "0px 0px", o && (Gi(o, a, "xOrigin", c, b), Gi(o, a, "yOrigin", u, w), Gi(o, a, "xOffset", f, a.xOffset), Gi(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", b + " " + w)
  },
  hl = function(t, n) {
    var r = t._gsap || new bb(t);
    if ("x" in r && !n && !r.uncache) return r;
    var i = t.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(t),
      c = Kn(t, Mn) || "0",
      u, f, h, d, g, p, m, v, y, _, b, w, S, A, L, T, O, B, P, W, G, X, H, q, K, Z, I, ie, ce, ve, pe, xe;
    return u = f = h = p = m = v = y = _ = b = 0, d = g = 1, r.svg = !!(t.getCTM && Nb(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[gt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[gt] !== "none" ? l[gt] : "")), i.scale = i.rotate = i.translate = "none"), A = Pp(t, r.svg), r.svg && (r.uncache ? (K = t.getBBox(), c = r.xOrigin - K.x + "px " + (r.yOrigin - K.y) + "px", q = "") : q = !n && t.getAttribute("data-svg-origin"), Yd(t, q || c, !!q || r.originIsAbsolute, r.smooth !== !1, A)), w = r.xOrigin || 0, S = r.yOrigin || 0, A !== dl && (B = A[0], P = A[1], W = A[2], G = A[3], u = X = A[4], f = H = A[5], A.length === 6 ? (d = Math.sqrt(B * B + P * P), g = Math.sqrt(G * G + W * W), p = B || P ? so(P, B) * Ss : 0, y = W || G ? so(W, G) * Ss + p : 0, y && (g *= Math.abs(Math.cos(y * Ro))), r.svg && (u -= w - (w * B + S * W), f -= S - (w * P + S * G))) : (xe = A[6], ve = A[7], I = A[8], ie = A[9], ce = A[10], pe = A[11], u = A[12], f = A[13], h = A[14], L = so(xe, ce), m = L * Ss, L && (T = Math.cos(-L), O = Math.sin(-L), q = X * T + I * O, K = H * T + ie * O, Z = xe * T + ce * O, I = X * -O + I * T, ie = H * -O + ie * T, ce = xe * -O + ce * T, pe = ve * -O + pe * T, X = q, H = K, xe = Z), L = so(-W, ce), v = L * Ss, L && (T = Math.cos(-L), O = Math.sin(-L), q = B * T - I * O, K = P * T - ie * O, Z = W * T - ce * O, pe = G * O + pe * T, B = q, P = K, W = Z), L = so(P, B), p = L * Ss, L && (T = Math.cos(L), O = Math.sin(L), q = B * T + P * O, K = X * T + H * O, P = P * T - B * O, H = H * T - X * O, B = q, X = K), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, v = 180 - v), d = At(Math.sqrt(B * B + P * P + W * W)), g = At(Math.sqrt(H * H + xe * xe)), L = so(X, H), y = Math.abs(L) > 2e-4 ? L * Ss : 0, b = pe ? 1 / (pe < 0 ? -pe : pe) : 0), r.svg && (q = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Fb(Kn(t, gt)), q && t.setAttribute("transform", q))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (d *= -1, y += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), n = n || r.uncache, r.x = u - ((r.xPercent = u && (!n && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = At(d), r.scaleY = At(g), r.rotation = At(p) + a, r.rotationX = At(m) + a, r.rotationY = At(v) + a, r.skewX = y + a, r.skewY = _ + a, r.transformPerspective = b + o, (r.zOrigin = parseFloat(c.split(" ")[2]) || !n && r.zOrigin || 0) && (i[Mn] = hu(c)), r.xOffset = r.yOffset = 0, r.force3D = Qn.force3D, r.renderTransform = r.svg ? $x : Ib ? Bb : jx, r.uncache = 0, r
  },
  hu = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
  },
  Uf = function(t, n, r) {
    var i = un(n);
    return At(parseFloat(n) + parseFloat(os(t, "x", r + "px", i))) + i
  },
  jx = function(t, n) {
    n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, Bb(t, n)
  },
  vs = "0deg",
  ua = "0px",
  bs = ") ",
  Bb = function(t, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.z,
      c = r.rotation,
      u = r.rotationY,
      f = r.rotationX,
      h = r.skewX,
      d = r.skewY,
      g = r.scaleX,
      p = r.scaleY,
      m = r.transformPerspective,
      v = r.force3D,
      y = r.target,
      _ = r.zOrigin,
      b = "",
      w = v === "auto" && t && t !== 1 || v === !0;
    if (_ && (f !== vs || u !== vs)) {
      var S = parseFloat(u) * Ro,
        A = Math.sin(S),
        L = Math.cos(S),
        T;
      S = parseFloat(f) * Ro, T = Math.cos(S), o = Uf(y, o, A * T * -_), a = Uf(y, a, -Math.sin(S) * -_), l = Uf(y, l, L * T * -_ + _)
    }
    m !== ua && (b += "perspective(" + m + bs), (i || s) && (b += "translate(" + i + "%, " + s + "%) "), (w || o !== ua || a !== ua || l !== ua) && (b += l !== ua || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + bs), c !== vs && (b += "rotate(" + c + bs), u !== vs && (b += "rotateY(" + u + bs), f !== vs && (b += "rotateX(" + f + bs), (h !== vs || d !== vs) && (b += "skew(" + h + ", " + d + bs), (g !== 1 || p !== 1) && (b += "scale(" + g + ", " + p + bs), y.style[gt] = b || "translate(0, 0)"
  },
  $x = function(t, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.rotation,
      c = r.skewX,
      u = r.skewY,
      f = r.scaleX,
      h = r.scaleY,
      d = r.target,
      g = r.xOrigin,
      p = r.yOrigin,
      m = r.xOffset,
      v = r.yOffset,
      y = r.forceCSS,
      _ = parseFloat(o),
      b = parseFloat(a),
      w, S, A, L, T;
    l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= Ro, c *= Ro, w = Math.cos(l) * f, S = Math.sin(l) * f, A = Math.sin(l - c) * -h, L = Math.cos(l - c) * h, c && (u *= Ro, T = Math.tan(c - u), T = Math.sqrt(1 + T * T), A *= T, L *= T, u && (T = Math.tan(u), T = Math.sqrt(1 + T * T), w *= T, S *= T)), w = At(w), S = At(S), A = At(A), L = At(L)) : (w = f, L = h, S = A = 0), (_ && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (_ = os(d, "x", o, "px"), b = os(d, "y", a, "px")), (g || p || m || v) && (_ = At(_ + g - (g * w + p * A) + m), b = At(b + p - (g * S + p * L) + v)), (i || s) && (T = d.getBBox(), _ = At(_ + i / 100 * T.width), b = At(b + s / 100 * T.height)), T = "matrix(" + w + "," + S + "," + A + "," + L + "," + _ + "," + b + ")", d.setAttribute("transform", T), y && (d.style[gt] = T)
  },
  Vx = function(t, n, r, i, s) {
    var o = 360,
      a = zt(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? Ss : 1),
      c = l - i,
      u = i + c + "deg",
      f, h;
    return a && (f = s.split("_")[1], f === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), f === "cw" && c < 0 ? c = (c + o * Mm) % o - ~~(c / o) * o : f === "ccw" && c > 0 && (c = (c - o * Mm) % o - ~~(c / o) * o)), t._pt = h = new In(t._pt, n, r, i, c, Tx), h.e = u, h.u = "deg", t._props.push(r), h
  },
  Wm = function(t, n) {
    for (var r in n) t[r] = n[r];
    return t
  },
  zx = function(t, n, r) {
    var i = Wm({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a, l, c, u, f, h, d, g;
    i.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), o[gt] = n, a = hl(r, 1), ss(r, gt), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[gt], o[gt] = n, a = hl(r, 1), o[gt] = c);
    for (l in Li) c = i[l], u = a[l], c !== u && s.indexOf(l) < 0 && (d = un(c), g = un(u), f = d !== g ? os(r, l, c, g) : parseFloat(c), h = parseFloat(u), t._pt = new In(t._pt, a, l, f, h - f, qd), t._pt.u = g || 0, t._props.push(l));
    Wm(a, i)
  };
On("padding,margin,Width,Radius", function(e, t) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (t < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(a) {
      return t < 2 ? e + a : "border" + a + e
    });
  du[t > 1 ? "border" + e : e] = function(a, l, c, u, f) {
    var h, d;
    if (arguments.length < 4) return h = o.map(function(g) {
      return di(a, g, c)
    }), d = h.join(" "), d.split(h[0]).length === 5 ? h[0] : d;
    h = (u + "").split(" "), d = {}, o.forEach(function(g, p) {
      return d[g] = h[p] = h[p] || h[(p - 1) / 2 | 0]
    }), a.init(l, d, f)
  }
});
var Ub = {
  name: "css",
  register: Kd,
  targetTest: function(t) {
    return t.style && t.nodeType
  },
  init: function(t, n, r, i, s) {
    var o = this._props,
      a = t.style,
      l = r.vars.startAt,
      c, u, f, h, d, g, p, m, v, y, _, b, w, S, A, L, T;
    Rp || Kd(), this.styles = this.styles || Ob(t), L = this.styles.props, this.tween = r;
    for (p in n)
      if (p !== "autoRound" && (u = n[p], !(jn[p] && wb(p, n, r, i, t, s)))) {
        if (d = typeof u, g = du[p], d === "function" && (u = u.call(r, i, t, s), d = typeof u), d === "string" && ~u.indexOf("random(") && (u = cl(u)), g) g(this, t, p, u, r) && (A = 1);
        else if (p.substr(0, 2) === "--") c = (getComputedStyle(t).getPropertyValue(p) + "").trim(), u += "", es.lastIndex = 0, es.test(c) || (m = un(c), v = un(u), v ? m !== v && (c = os(t, p, c, v) + v) : m && (u += m)), this.add(a, "setProperty", c, u, i, s, 0, 0, p), o.push(p), L.push(p, 0, a[p]);
        else if (d !== "undefined") {
          if (l && p in l ? (c = typeof l[p] == "function" ? l[p].call(r, i, t, s) : l[p], zt(c) && ~c.indexOf("random(") && (c = cl(c)), un(c + "") || c === "auto" || (c += Qn.units[p] || un(di(t, p)) || ""), (c + "").charAt(1) === "=" && (c = di(t, p))) : c = di(t, p), h = parseFloat(c), y = d === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), f = parseFloat(u), p in Vr && (p === "autoAlpha" && (h === 1 && di(t, "visibility") === "hidden" && f && (h = 0), L.push("visibility", 0, a.visibility), Gi(this, a, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), p !== "scale" && p !== "transform" && (p = Vr[p], ~p.indexOf(",") && (p = p.split(",")[0]))), _ = p in Li, _) {
            if (this.styles.save(p), T = u, d === "string" && u.substring(0, 6) === "var(--") {
              if (u = Kn(t, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
                var O = t.style.perspective;
                t.style.perspective = u, u = Kn(t, "perspective"), O ? t.style.perspective = O : ss(t, "perspective")
              }
              f = parseFloat(u)
            }
            if (b || (w = t._gsap, w.renderTransform && !n.parseTransform || hl(t, n.parseTransform), S = n.smoothOrigin !== !1 && w.smooth, b = this._pt = new In(this._pt, a, gt, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), p === "scale") this._pt = new In(this._pt, w, "scaleY", w.scaleY, (y ? To(w.scaleY, y + f) : f) - w.scaleY || 0, qd), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              L.push(Mn, 0, a[Mn]), u = Hx(u), w.svg ? Yd(t, u, 0, S, 0, this) : (v = parseFloat(u.split(" ")[2]) || 0, v !== w.zOrigin && Gi(this, w, "zOrigin", w.zOrigin, v), Gi(this, a, p, hu(c), hu(u)));
              continue
            } else if (p === "svgOrigin") {
              Yd(t, u, 1, S, 0, this);
              continue
            } else if (p in Db) {
              Vx(this, w, p, h, y ? To(h, y + u) : u);
              continue
            } else if (p === "smoothOrigin") {
              Gi(this, w, "smooth", w.smooth, u);
              continue
            } else if (p === "force3D") {
              w[p] = u;
              continue
            } else if (p === "transform") {
              zx(this, u, t);
              continue
            }
          } else p in a || (p = Vo(p) || p);
          if (_ || (f || f === 0) && (h || h === 0) && !Cx.test(u) && p in a) m = (c + "").substr((h + "").length), f || (f = 0), v = un(u) || (p in Qn.units ? Qn.units[p] : m), m !== v && (h = os(t, p, c, v)), this._pt = new In(this._pt, _ ? w : a, p, h, (y ? To(h, y + f) : f) - h, !_ && (v === "px" || p === "zIndex") && n.autoRound !== !1 ? xx : qd), this._pt.u = v || 0, _ && T !== u ? (this._pt.b = c, this._pt.e = T, this._pt.r = Rx) : m !== v && v !== "%" && (this._pt.b = c, this._pt.r = kx);
          else if (p in a) Ux.call(this, t, p, c, y ? y + u : u);
          else if (p in t) this.add(t, p, c || t[p], y ? y + u : u, i, s);
          else if (p !== "parseTransform") {
            yp(p, u);
            continue
          }
          _ || (p in a ? L.push(p, 0, a[p]) : typeof t[p] == "function" ? L.push(p, 2, t[p]()) : L.push(p, 1, c || t[p])), o.push(p)
        }
      } A && kb(this)
  },
  render: function(t, n) {
    if (n.tween._time || !xp())
      for (var r = n._pt; r;) r.r(t, r.d), r = r._next;
    else n.styles.revert()
  },
  get: di,
  aliases: Vr,
  getSetter: function(t, n, r) {
    var i = Vr[n];
    return i && i.indexOf(",") < 0 && (n = i), n in Li && n !== Mn && (t._gsap.x || di(t, "x")) ? r && Im === r ? n === "scale" ? Ix : Ox : (Im = r || {}) && (n === "scale" ? Mx : Nx) : t.style && !gp(t.style[n]) ? Lx : ~n.indexOf("-") ? Px : Tp(t, n)
  },
  core: {
    _removeProperty: ss,
    _getMatrix: Pp
  }
};
Fn.utils.checkPrefix = Vo;
Fn.core.getStyleSaver = Ob;
(function(e, t, n, r) {
  var i = On(e + "," + t + "," + n, function(s) {
    Li[s] = 1
  });
  On(t, function(s) {
    Qn.units[s] = "deg", Db[s] = 1
  }), Vr[i[13]] = e + "," + t, On(r, function(s) {
    var o = s.split(":");
    Vr[o[1]] = i[o[0]]
  })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
  Qn.units[e] = "px"
});
Fn.registerPlugin(Ub);
var ue = Fn.registerPlugin(Ub) || Fn;
ue.core.Tween;

function qx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}

function Gx(e, t, n) {
  return t && qx(e.prototype, t), e
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var Jt, Cc, qn, Ki, Yi, xo, Hb, Es, Lo, Wb, yi, br, jb, $b = function() {
    return Jt || typeof window < "u" && (Jt = window.gsap) && Jt.registerPlugin && Jt
  },
  Vb = 1,
  bo = [],
  Oe = [],
  Kr = [],
  Ua = Date.now,
  Xd = function(t, n) {
    return n
  },
  Kx = function() {
    var t = Lo.core,
      n = t.bridge || {},
      r = t._scrollers,
      i = t._proxies;
    r.push.apply(r, Oe), i.push.apply(i, Kr), Oe = r, Kr = i, Xd = function(o, a) {
      return n[o](a)
    }
  },
  ts = function(t, n) {
    return ~Kr.indexOf(t) && Kr[Kr.indexOf(t) + 1][n]
  },
  Ha = function(t) {
    return !!~Wb.indexOf(t)
  },
  _n = function(t, n, r, i, s) {
    return t.addEventListener(n, r, {
      passive: i !== !1,
      capture: !!s
    })
  },
  gn = function(t, n, r, i) {
    return t.removeEventListener(n, r, !!i)
  },
  ql = "scrollLeft",
  Gl = "scrollTop",
  Qd = function() {
    return yi && yi.isPressed || Oe.cache++
  },
  pu = function(t, n) {
    var r = function i(s) {
      if (s || s === 0) {
        Vb && (qn.history.scrollRestoration = "manual");
        var o = yi && yi.isPressed;
        s = i.v = Math.round(s) || (yi && yi.iOS ? 1 : 0), t(s), i.cacheID = Oe.cache, o && Xd("ss", s)
      } else(n || Oe.cache !== i.cacheID || Xd("ref")) && (i.cacheID = Oe.cache, i.v = t());
      return i.v + i.offset
    };
    return r.offset = 0, t && r
  },
  Sn = {
    s: ql,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: pu(function(e) {
      return arguments.length ? qn.scrollTo(e, Ut.sc()) : qn.pageXOffset || Ki[ql] || Yi[ql] || xo[ql] || 0
    })
  },
  Ut = {
    s: Gl,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Sn,
    sc: pu(function(e) {
      return arguments.length ? qn.scrollTo(Sn.sc(), e) : qn.pageYOffset || Ki[Gl] || Yi[Gl] || xo[Gl] || 0
    })
  },
  Tn = function(t, n) {
    return (n && n._ctx && n._ctx.selector || Jt.utils.toArray)(t)[0] || (typeof t == "string" && Jt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null)
  },
  Yx = function(t, n) {
    for (var r = n.length; r--;)
      if (n[r] === t || n[r].contains(t)) return !0;
    return !1
  },
  as = function(t, n) {
    var r = n.s,
      i = n.sc;
    Ha(t) && (t = Ki.scrollingElement || Yi);
    var s = Oe.indexOf(t),
      o = i === Ut.sc ? 1 : 2;
    !~s && (s = Oe.push(t) - 1), Oe[s + o] || _n(t, "scroll", Qd);
    var a = Oe[s + o],
      l = a || (Oe[s + o] = pu(ts(t, r), !0) || (Ha(t) ? i : pu(function(c) {
        return arguments.length ? t[r] = c : t[r]
      })));
    return l.target = t, a || (l.smooth = Jt.getProperty(t, "scrollBehavior") === "smooth"), l
  },
  Jd = function(t, n, r) {
    var i = t,
      s = t,
      o = Ua(),
      a = o,
      l = n || 50,
      c = Math.max(500, l * 3),
      u = function(g, p) {
        var m = Ua();
        p || m - o > l ? (s = i, i = g, a = o, o = m) : r ? i += g : i = s + (g - s) / (m - a) * (o - a)
      },
      f = function() {
        s = i = r ? 0 : i, a = o = 0
      },
      h = function(g) {
        var p = a,
          m = s,
          v = Ua();
        return (g || g === 0) && g !== i && u(g), o === a || v - a > c ? 0 : (i + (r ? m : -m)) / ((r ? v : o) - p) * 1e3
      };
    return {
      update: u,
      reset: f,
      getVelocity: h
    }
  },
  fa = function(t, n) {
    return n && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
  },
  jm = function(t) {
    var n = Math.max.apply(Math, t),
      r = Math.min.apply(Math, t);
    return Math.abs(n) >= Math.abs(r) ? n : r
  },
  zb = function() {
    Lo = Jt.core.globals().ScrollTrigger, Lo && Lo.core && Kx()
  },
  qb = function(t) {
    return Jt = t || $b(), !Cc && Jt && typeof document < "u" && document.body && (qn = window, Ki = document, Yi = Ki.documentElement, xo = Ki.body, Wb = [qn, Ki, Yi, xo], Jt.utils.clamp, jb = Jt.core.context || function() {}, Es = "onpointerenter" in xo ? "pointer" : "mouse", Hb = Et.isTouch = qn.matchMedia && qn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in qn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, br = Et.eventTypes = ("ontouchstart" in Yi ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Yi ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
      return Vb = 0
    }, 500), Cc = 1), Lo || zb(), Cc
  };
Sn.op = Ut;
Oe.cache = 0;
var Et = (function() {
  function e(n) {
    this.init(n)
  }
  var t = e.prototype;
  return t.init = function(r) {
    Cc || qb(Jt) || console.warn("Please gsap.registerPlugin(Observer)"), Lo || zb();
    var i = r.tolerance,
      s = r.dragMinimum,
      o = r.type,
      a = r.target,
      l = r.lineHeight,
      c = r.debounce,
      u = r.preventDefault,
      f = r.onStop,
      h = r.onStopDelay,
      d = r.ignore,
      g = r.wheelSpeed,
      p = r.event,
      m = r.onDragStart,
      v = r.onDragEnd,
      y = r.onDrag,
      _ = r.onPress,
      b = r.onRelease,
      w = r.onRight,
      S = r.onLeft,
      A = r.onUp,
      L = r.onDown,
      T = r.onChangeX,
      O = r.onChangeY,
      B = r.onChange,
      P = r.onToggleX,
      W = r.onToggleY,
      G = r.onHover,
      X = r.onHoverEnd,
      H = r.onMove,
      q = r.ignoreCheck,
      K = r.isNormalizer,
      Z = r.onGestureStart,
      I = r.onGestureEnd,
      ie = r.onWheel,
      ce = r.onEnable,
      ve = r.onDisable,
      pe = r.onClick,
      xe = r.scrollSpeed,
      Me = r.capture,
      j = r.allowClicks,
      J = r.lockAxis,
      Y = r.onLockAxis;
    this.target = a = Tn(a) || Yi, this.vars = r, d && (d = Jt.utils.toArray(d)), i = i || 1e-9, s = s || 0, g = g || 1, xe = xe || 1, o = o || "wheel,touch,pointer", c = c !== !1, l || (l = parseFloat(qn.getComputedStyle(xo).lineHeight) || 22);
    var ee, de, C, R, M, $, V, x = this,
      E = 0,
      k = 0,
      D = r.passive || !u && r.passive !== !1,
      F = as(a, Sn),
      Q = as(a, Ut),
      z = F(),
      N = Q(),
      U = ~o.indexOf("touch") && !~o.indexOf("pointer") && br[0] === "pointerdown",
      oe = Ha(a),
      se = a.ownerDocument || Ki,
      ye = [0, 0, 0],
      Le = [0, 0, 0],
      Ne = 0,
      Mt = function() {
        return Ne = Ua()
      },
      De = function(ge, Ve) {
        return (x.event = ge) && d && Yx(ge.target, d) || Ve && U && ge.pointerType !== "touch" || q && q(ge, Ve)
      },
      Pr = function() {
        x._vx.reset(), x._vy.reset(), de.pause(), f && f(x)
      },
      tr = function() {
        var ge = x.deltaX = jm(ye),
          Ve = x.deltaY = jm(Le),
          ne = Math.abs(ge) >= i,
          Ee = Math.abs(Ve) >= i;
        B && (ne || Ee) && B(x, ge, Ve, ye, Le), ne && (w && x.deltaX > 0 && w(x), S && x.deltaX < 0 && S(x), T && T(x), P && x.deltaX < 0 != E < 0 && P(x), E = x.deltaX, ye[0] = ye[1] = ye[2] = 0), Ee && (L && x.deltaY > 0 && L(x), A && x.deltaY < 0 && A(x), O && O(x), W && x.deltaY < 0 != k < 0 && W(x), k = x.deltaY, Le[0] = Le[1] = Le[2] = 0), (R || C) && (H && H(x), C && (m && C === 1 && m(x), y && y(x), C = 0), R = !1), $ && !($ = !1) && Y && Y(x), M && (ie(x), M = !1), ee = 0
      },
      kt = function(ge, Ve, ne) {
        ye[ne] += ge, Le[ne] += Ve, x._vx.update(ge), x._vy.update(Ve), c ? ee || (ee = requestAnimationFrame(tr)) : tr()
      },
      qt = function(ge, Ve) {
        J && !V && (x.axis = V = Math.abs(ge) > Math.abs(Ve) ? "x" : "y", $ = !0), V !== "y" && (ye[2] += ge, x._vx.update(ge, !0)), V !== "x" && (Le[2] += Ve, x._vy.update(Ve, !0)), c ? ee || (ee = requestAnimationFrame(tr)) : tr()
      },
      gr = function(ge) {
        if (!De(ge, 1)) {
          ge = fa(ge, u);
          var Ve = ge.clientX,
            ne = ge.clientY,
            Ee = Ve - x.x,
            he = ne - x.y,
            Ce = x.isDragging;
          x.x = Ve, x.y = ne, (Ce || (Ee || he) && (Math.abs(x.startX - Ve) >= s || Math.abs(x.startY - ne) >= s)) && (C || (C = Ce ? 2 : 1), Ce || (x.isDragging = !0), qt(Ee, he))
        }
      },
      Or = x.onPress = function(ke) {
        De(ke, 1) || ke && ke.button || (x.axis = V = null, de.pause(), x.isPressed = !0, ke = fa(ke), E = k = 0, x.startX = x.x = ke.clientX, x.startY = x.y = ke.clientY, x._vx.reset(), x._vy.reset(), _n(K ? a : se, br[1], gr, D, !0), x.deltaX = x.deltaY = 0, _ && _(x))
      },
      Ie = x.onRelease = function(ke) {
        if (!De(ke, 1)) {
          gn(K ? a : se, br[1], gr, !0);
          var ge = !isNaN(x.y - x.startY),
            Ve = x.isDragging,
            ne = Ve && (Math.abs(x.x - x.startX) > 3 || Math.abs(x.y - x.startY) > 3),
            Ee = fa(ke);
          !ne && ge && (x._vx.reset(), x._vy.reset(), u && j && Jt.delayedCall(.08, function() {
            if (Ua() - Ne > 300 && !ke.defaultPrevented) {
              if (ke.target.click) ke.target.click();
              else if (se.createEvent) {
                var he = se.createEvent("MouseEvents");
                he.initMouseEvent("click", !0, !0, qn, 1, Ee.screenX, Ee.screenY, Ee.clientX, Ee.clientY, !1, !1, !1, !1, 0, null), ke.target.dispatchEvent(he)
              }
            }
          })), x.isDragging = x.isGesturing = x.isPressed = !1, f && Ve && !K && de.restart(!0), C && tr(), v && Ve && v(x), b && b(x, ne)
        }
      },
      ds = function(ge) {
        return ge.touches && ge.touches.length > 1 && (x.isGesturing = !0) && Z(ge, x.isDragging)
      },
      mr = function() {
        return (x.isGesturing = !1) || I(x)
      },
      _r = function(ge) {
        if (!De(ge)) {
          var Ve = F(),
            ne = Q();
          kt((Ve - z) * xe, (ne - N) * xe, 1), z = Ve, N = ne, f && de.restart(!0)
        }
      },
      yr = function(ge) {
        if (!De(ge)) {
          ge = fa(ge, u), ie && (M = !0);
          var Ve = (ge.deltaMode === 1 ? l : ge.deltaMode === 2 ? qn.innerHeight : 1) * g;
          kt(ge.deltaX * Ve, ge.deltaY * Ve, 0), f && !K && de.restart(!0)
        }
      },
      hs = function(ge) {
        if (!De(ge)) {
          var Ve = ge.clientX,
            ne = ge.clientY,
            Ee = Ve - x.x,
            he = ne - x.y;
          x.x = Ve, x.y = ne, R = !0, f && de.restart(!0), (Ee || he) && qt(Ee, he)
        }
      },
      no = function(ge) {
        x.event = ge, G(x)
      },
      ri = function(ge) {
        x.event = ge, X(x)
      },
      ta = function(ge) {
        return De(ge) || fa(ge, u) && pe(x)
      };
    de = x._dc = Jt.delayedCall(h || .25, Pr).pause(), x.deltaX = x.deltaY = 0, x._vx = Jd(0, 50, !0), x._vy = Jd(0, 50, !0), x.scrollX = F, x.scrollY = Q, x.isDragging = x.isGesturing = x.isPressed = !1, jb(this), x.enable = function(ke) {
      return x.isEnabled || (_n(oe ? se : a, "scroll", Qd), o.indexOf("scroll") >= 0 && _n(oe ? se : a, "scroll", _r, D, Me), o.indexOf("wheel") >= 0 && _n(a, "wheel", yr, D, Me), (o.indexOf("touch") >= 0 && Hb || o.indexOf("pointer") >= 0) && (_n(a, br[0], Or, D, Me), _n(se, br[2], Ie), _n(se, br[3], Ie), j && _n(a, "click", Mt, !0, !0), pe && _n(a, "click", ta), Z && _n(se, "gesturestart", ds), I && _n(se, "gestureend", mr), G && _n(a, Es + "enter", no), X && _n(a, Es + "leave", ri), H && _n(a, Es + "move", hs)), x.isEnabled = !0, x.isDragging = x.isGesturing = x.isPressed = R = C = !1, x._vx.reset(), x._vy.reset(), z = F(), N = Q(), ke && ke.type && Or(ke), ce && ce(x)), x
    }, x.disable = function() {
      x.isEnabled && (bo.filter(function(ke) {
        return ke !== x && Ha(ke.target)
      }).length || gn(oe ? se : a, "scroll", Qd), x.isPressed && (x._vx.reset(), x._vy.reset(), gn(K ? a : se, br[1], gr, !0)), gn(oe ? se : a, "scroll", _r, Me), gn(a, "wheel", yr, Me), gn(a, br[0], Or, Me), gn(se, br[2], Ie), gn(se, br[3], Ie), gn(a, "click", Mt, !0), gn(a, "click", ta), gn(se, "gesturestart", ds), gn(se, "gestureend", mr), gn(a, Es + "enter", no), gn(a, Es + "leave", ri), gn(a, Es + "move", hs), x.isEnabled = x.isPressed = x.isDragging = !1, ve && ve(x))
    }, x.kill = x.revert = function() {
      x.disable();
      var ke = bo.indexOf(x);
      ke >= 0 && bo.splice(ke, 1), yi === x && (yi = 0)
    }, bo.push(x), K && Ha(a) && (yi = x), x.enable(p)
  }, Gx(e, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity()
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity()
    }
  }]), e
})();
Et.version = "3.15.0";
Et.create = function(e) {
  return new Et(e)
};
Et.register = qb;
Et.getAll = function() {
  return bo.slice()
};
Et.getById = function(e) {
  return bo.filter(function(t) {
    return t.vars.id === e
  })[0]
};
$b() && Jt.registerPlugin(Et);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var le, po, Pe, Ze, Vn, Ke, Op, gu, pl, Wa, Ca, Kl, on, Xu, Zd, bn, $m, Vm, go, Gb, Hf, Kb, vn, eh, Yb, Xb, ji, th, Ip, Po, Mp, ja, nh, Wf, Yl = 1,
  ln = Date.now,
  jf = ln(),
  fr = 0,
  Ta = 0,
  zm = function(t, n, r) {
    var i = Wn(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i, i ? t.substr(6, t.length - 7) : t
  },
  qm = function(t, n) {
    return n && (!Wn(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t
  },
  Xx = function e() {
    return Ta && requestAnimationFrame(e)
  },
  Gm = function() {
    return Xu = 1
  },
  Km = function() {
    return Xu = 0
  },
  Hr = function(t) {
    return t
  },
  ka = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
  },
  Qb = function() {
    return typeof window < "u"
  },
  Jb = function() {
    return le || Qb() && (le = window.gsap) && le.registerPlugin && le
  },
  Ys = function(t) {
    return !!~Op.indexOf(t)
  },
  Zb = function(t) {
    return (t === "Height" ? Mp : Pe["inner" + t]) || Vn["client" + t] || Ke["client" + t]
  },
  ew = function(t) {
    return ts(t, "getBoundingClientRect") || (Ys(t) ? function() {
      return Lc.width = Pe.innerWidth, Lc.height = Mp, Lc
    } : function() {
      return gi(t)
    })
  },
  Qx = function(t, n, r) {
    var i = r.d,
      s = r.d2,
      o = r.a;
    return (o = ts(t, "getBoundingClientRect")) ? function() {
      return o()[i]
    } : function() {
      return (n ? Zb(s) : t["client" + s]) || 0
    }
  },
  Jx = function(t, n) {
    return !n || ~Kr.indexOf(t) ? ew(t) : function() {
      return Lc
    }
  },
  zr = function(t, n) {
    var r = n.s,
      i = n.d2,
      s = n.d,
      o = n.a;
    return Math.max(0, (r = "scroll" + i) && (o = ts(t, r)) ? o() - ew(t)()[s] : Ys(t) ? (Vn[r] || Ke[r]) - Zb(i) : t[r] - t["offset" + i])
  },
  Xl = function(t, n) {
    for (var r = 0; r < go.length; r += 3)(!n || ~n.indexOf(go[r + 1])) && t(go[r], go[r + 1], go[r + 2])
  },
  Wn = function(t) {
    return typeof t == "string"
  },
  fn = function(t) {
    return typeof t == "function"
  },
  Ra = function(t) {
    return typeof t == "number"
  },
  Cs = function(t) {
    return typeof t == "object"
  },
  da = function(t, n, r) {
    return t && t.progress(n ? 0 : 1) && r && t.pause()
  },
  oo = function(t, n, r) {
    if (t.enabled) {
      var i = t._ctx ? t._ctx.add(function() {
        return n(t, r)
      }) : n(t, r);
      i && i.totalTime && (t.callbackAnimation = i)
    }
  },
  ao = Math.abs,
  tw = "left",
  nw = "top",
  Np = "right",
  Dp = "bottom",
  Ws = "width",
  js = "height",
  $a = "Right",
  Va = "Left",
  za = "Top",
  qa = "Bottom",
  xt = "padding",
  or = "margin",
  zo = "Width",
  Fp = "Height",
  Ft = "px",
  ar = function(t) {
    return Pe.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t)
  },
  Zx = function(t) {
    var n = ar(t).position;
    t.style.position = n === "absolute" || n === "fixed" ? n : "relative"
  },
  Ym = function(t, n) {
    for (var r in n) r in t || (t[r] = n[r]);
    return t
  },
  gi = function(t, n) {
    var r = n && ar(t)[Zd] !== "matrix(1, 0, 0, 1, 0, 0)" && le.to(t, {
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
      i = t.getBoundingClientRect ? t.getBoundingClientRect() : t.scrollingElement.getBoundingClientRect();
    return r && r.progress(0).kill(), i
  },
  mu = function(t, n) {
    var r = n.d2;
    return t["offset" + r] || t["client" + r] || 0
  },
  rw = function(t) {
    var n = [],
      r = t.labels,
      i = t.duration(),
      s;
    for (s in r) n.push(r[s] / i);
    return n
  },
  eL = function(t) {
    return function(n) {
      return le.utils.snap(rw(t), n)
    }
  },
  Bp = function(t) {
    var n = le.utils.snap(t),
      r = Array.isArray(t) && t.slice(0).sort(function(i, s) {
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
      return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : n(s < 0 ? i - t : i + t)
    }
  },
  tL = function(t) {
    return function(n, r) {
      return Bp(rw(t))(n, r.direction)
    }
  },
  Ql = function(t, n, r, i) {
    return r.split(",").forEach(function(s) {
      return t(n, s, i)
    })
  },
  $t = function(t, n, r, i, s) {
    return t.addEventListener(n, r, {
      passive: !i,
      capture: !!s
    })
  },
  Wt = function(t, n, r, i) {
    return t.removeEventListener(n, r, !!i)
  },
  Jl = function(t, n, r) {
    r = r && r.wheelHandler, r && (t(n, "wheel", r), t(n, "touchmove", r))
  },
  Xm = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
  Zl = {
    toggleActions: "play",
    anticipatePin: 0
  },
  _u = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
  Tc = function(t, n) {
    if (Wn(t)) {
      var r = t.indexOf("="),
        i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
      ~r && (t.indexOf("%") > r && (i *= n / 100), t = t.substr(0, r - 1)), t = i + (t in _u ? _u[t] * n : ~t.indexOf("%") ? parseFloat(t) * n / 100 : parseFloat(t) || 0)
    }
    return t
  },
  ec = function(t, n, r, i, s, o, a, l) {
    var c = s.startColor,
      u = s.endColor,
      f = s.fontSize,
      h = s.indent,
      d = s.fontWeight,
      g = Ze.createElement("div"),
      p = Ys(r) || ts(r, "pinType") === "fixed",
      m = t.indexOf("scroller") !== -1,
      v = p ? Ke : r.tagName === "IFRAME" ? r.contentDocument.body : r,
      y = t.indexOf("start") !== -1,
      _ = y ? c : u,
      b = "border-color:" + _ + ";font-size:" + f + ";color:" + _ + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return b += "position:" + ((m || l) && p ? "fixed;" : "absolute;"), (m || l || !p) && (b += (i === Ut ? Np : Dp) + ":" + (o + parseFloat(h)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), g._isStart = y, g.setAttribute("class", "gsap-marker-" + t + (n ? " marker-" + n : "")), g.style.cssText = b, g.innerText = n || n === 0 ? t + "-" + n : t, v.children[0] ? v.insertBefore(g, v.children[0]) : v.appendChild(g), g._offset = g["offset" + i.op.d2], kc(g, 0, i, y), g
  },
  kc = function(t, n, r, i) {
    var s = {
        display: "block"
      },
      o = r[i ? "os2" : "p2"],
      a = r[i ? "p2" : "os2"];
    t._isFlipped = i, s[r.a + "Percent"] = i ? -100 : 0, s[r.a] = i ? "1px" : 0, s["border" + o + zo] = 1, s["border" + a + zo] = 0, s[r.p] = n + "px", le.set(t, s)
  },
  Re = [],
  rh = {},
  gl, Qm = function() {
    return ln() - fr > 34 && (gl || (gl = requestAnimationFrame(Ti)))
  },
  lo = function() {
    (!vn || !vn.isPressed || vn.startX > Ke.clientWidth) && (Oe.cache++, vn ? gl || (gl = requestAnimationFrame(Ti)) : Ti(), fr || Qs("scrollStart"), fr = ln())
  },
  $f = function() {
    Xb = Pe.innerWidth, Yb = Pe.innerHeight
  },
  xa = function(t) {
    Oe.cache++, (t === !0 || !on && !Kb && !Ze.fullscreenElement && !Ze.webkitFullscreenElement && (!eh || Xb !== Pe.innerWidth || Math.abs(Pe.innerHeight - Yb) > Pe.innerHeight * .25)) && gu.restart(!0)
  },
  Xs = {},
  nL = [],
  iw = function e() {
    return Wt(Te, "scrollEnd", e) || Os(!0)
  },
  Qs = function(t) {
    return Xs[t] && Xs[t].map(function(n) {
      return n()
    }) || nL
  },
  Hn = [],
  sw = function(t) {
    for (var n = 0; n < Hn.length; n += 5)(!t || Hn[n + 4] && Hn[n + 4].query === t) && (Hn[n].style.cssText = Hn[n + 1], Hn[n].getBBox && Hn[n].setAttribute("transform", Hn[n + 2] || ""), Hn[n + 3].uncache = 1)
  },
  ow = function() {
    return Oe.forEach(function(t) {
      return fn(t) && ++t.cacheID && (t.rec = t())
    })
  },
  Up = function(t, n) {
    var r;
    for (bn = 0; bn < Re.length; bn++) r = Re[bn], r && (!n || r._ctx === n) && (t ? r.kill(1) : r.revert(!0, !0));
    ja = !0, n && sw(n), n || Qs("revert")
  },
  aw = function(t, n) {
    Oe.cache++, (n || !wn) && Oe.forEach(function(r) {
      return fn(r) && r.cacheID++ && (r.rec = 0)
    }), Wn(t) && (Pe.history.scrollRestoration = Ip = t)
  },
  wn, $s = 0,
  Jm, rL = function() {
    if (Jm !== $s) {
      var t = Jm = $s;
      requestAnimationFrame(function() {
        return t === $s && Os(!0)
      })
    }
  },
  lw = function() {
    Ke.appendChild(Po), Mp = !vn && Po.offsetHeight || Pe.innerHeight, Ke.removeChild(Po)
  },
  Zm = function(t) {
    return pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
      return n.style.display = t ? "none" : "block"
    })
  },
  Os = function(t, n) {
    if (Vn = Ze.documentElement, Ke = Ze.body, Op = [Pe, Ze, Vn, Ke], fr && !t && !ja) {
      $t(Te, "scrollEnd", iw);
      return
    }
    lw(), wn = Te.isRefreshing = !0, ja || ow();
    var r = Qs("refreshInit");
    Gb && Te.sort(), n || Up(), Oe.forEach(function(i) {
      fn(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
    }), Re.slice(0).forEach(function(i) {
      return i.refresh()
    }), ja = !1, Re.forEach(function(i) {
      if (i._subPinOffset && i.pin) {
        var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
          o = i.pin[s];
        i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh()
      }
    }), nh = 1, Zm(!0), Re.forEach(function(i) {
      var s = zr(i.scroller, i._dir),
        o = i.vars.end === "max" || i._endClamp && i.end > s,
        a = i._startClamp && i.start >= s;
      (o || a) && i.setPositions(a ? s - 1 : i.start, o ? Math.max(a ? s : i.start + 1, s) : i.end, !0)
    }), Zm(!1), nh = 0, r.forEach(function(i) {
      return i && i.render && i.render(-1)
    }), Oe.forEach(function(i) {
      fn(i) && (i.smooth && requestAnimationFrame(function() {
        return i.target.style.scrollBehavior = "smooth"
      }), i.rec && i(i.rec))
    }), aw(Ip, 1), gu.pause(), $s++, wn = 2, Ti(2), Re.forEach(function(i) {
      return fn(i.vars.onRefresh) && i.vars.onRefresh(i)
    }), wn = Te.isRefreshing = !1, Qs("refresh")
  },
  ih = 0,
  Rc = 1,
  Ga, Ti = function(t) {
    if (t === 2 || !wn && !ja) {
      Te.isUpdating = !0, Ga && Ga.update(0);
      var n = Re.length,
        r = ln(),
        i = r - jf >= 50,
        s = n && Re[0].scroll();
      if (Rc = ih > s ? -1 : 1, wn || (ih = s), i && (fr && !Xu && r - fr > 200 && (fr = 0, Qs("scrollEnd")), Ca = jf, jf = r), Rc < 0) {
        for (bn = n; bn-- > 0;) Re[bn] && Re[bn].update(0, i);
        Rc = 1
      } else
        for (bn = 0; bn < n; bn++) Re[bn] && Re[bn].update(0, i);
      Te.isUpdating = !1
    }
    gl = 0
  },
  sh = [tw, nw, Dp, Np, or + qa, or + $a, or + za, or + Va, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
  xc = sh.concat([Ws, js, "boxSizing", "max" + zo, "max" + Fp, "position", or, xt, xt + za, xt + $a, xt + qa, xt + Va]),
  iL = function(t, n, r) {
    Oo(r);
    var i = t._gsap;
    if (i.spacerIsNative) Oo(i.spacerState);
    else if (t._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(t, n), s.removeChild(n))
    }
    t._gsap.swappedIn = !1
  },
  Vf = function(t, n, r, i) {
    if (!t._gsap.swappedIn) {
      for (var s = sh.length, o = n.style, a = t.style, l; s--;) l = sh[s], o[l] = r[l];
      o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), a[Dp] = a[Np] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Ws] = mu(t, Sn) + Ft, o[js] = mu(t, Ut) + Ft, o[xt] = a[or] = a[nw] = a[tw] = "0", Oo(i), a[Ws] = a["max" + zo] = r[Ws], a[js] = a["max" + Fp] = r[js], a[xt] = r[xt], t.parentNode !== n && (t.parentNode.insertBefore(n, t), n.appendChild(t)), t._gsap.swappedIn = !0
    }
  },
  sL = /([A-Z])/g,
  Oo = function(t) {
    if (t) {
      var n = t.t.style,
        r = t.length,
        i = 0,
        s, o;
      for ((t.t._gsap || le.core.getCache(t.t)).uncache = 1; i < r; i += 2) o = t[i + 1], s = t[i], o ? n[s] = o : n[s] && n.removeProperty(s.replace(sL, "-$1").toLowerCase())
    }
  },
  tc = function(t) {
    for (var n = xc.length, r = t.style, i = [], s = 0; s < n; s++) i.push(xc[s], r[xc[s]]);
    return i.t = t, i
  },
  oL = function(t, n, r) {
    for (var i = [], s = t.length, o = r ? 8 : 0, a; o < s; o += 2) a = t[o], i.push(a, a in n ? n[a] : t[o + 1]);
    return i.t = t.t, i
  },
  Lc = {
    left: 0,
    top: 0
  },
  e_ = function(t, n, r, i, s, o, a, l, c, u, f, h, d, g) {
    fn(t) && (t = t(l)), Wn(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? Tc("0" + t.substr(3), r) : 0));
    var p = d ? d.time() : 0,
      m, v, y;
    if (d && d.seek(0), isNaN(t) || (t = +t), Ra(t)) d && (t = le.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, t)), a && kc(a, r, i, !0);
    else {
      fn(n) && (n = n(l));
      var _ = (t || "0").split(" "),
        b, w, S, A;
      y = Tn(n, l) || Ke, b = gi(y) || {}, (!b || !b.left && !b.top) && ar(y).display === "none" && (A = y.style.display, y.style.display = "block", b = gi(y), A ? y.style.display = A : y.style.removeProperty("display")), w = Tc(_[0], b[i.d]), S = Tc(_[1] || "0", r), t = b[i.p] - c[i.p] - u + w + s - S, a && kc(a, S, i, r - S < 20 || a._isStart && S > 20), r -= r - S
    }
    if (g && (l[g] = t || -.001, t < 0 && (t = 0)), o) {
      var L = t + r,
        T = o._isStart;
      m = "scroll" + i.d2, kc(o, L, i, T && L > 20 || !T && (f ? Math.max(Ke[m], Vn[m]) : o.parentNode[m]) <= L + 1), f && (c = gi(a), f && (o.style[i.op.p] = c[i.op.p] - i.op.m - o._offset + Ft))
    }
    return d && y && (m = gi(y), d.seek(h), v = gi(y), d._caScrollDist = m[i.p] - v[i.p], t = t / d._caScrollDist * h), d && d.seek(p), d ? t : Math.round(t)
  },
  aL = /(webkit|moz|length|cssText|inset)/i,
  t_ = function(t, n, r, i) {
    if (t.parentNode !== n) {
      var s = t.style,
        o, a;
      if (n === Ke) {
        t._stOrig = s.cssText, a = ar(t);
        for (o in a) !+o && !aL.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
        s.top = r, s.left = i
      } else s.cssText = t._stOrig;
      le.core.getCache(t).uncache = 1, n.appendChild(t)
    }
  },
  cw = function(t, n, r) {
    var i = n,
      s = i;
    return function(o) {
      var a = Math.round(t());
      return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && (o = a, r && r()), s = i, i = Math.round(o), i
    }
  },
  nc = function(t, n, r) {
    var i = {};
    i[n.p] = "+=" + r, le.set(t, i)
  },
  n_ = function(t, n) {
    var r = as(t, n),
      i = "_scroll" + n.p2,
      s = function o(a, l, c, u, f) {
        var h = o.tween,
          d = l.onComplete,
          g = {};
        c = c || r();
        var p = cw(r, c, function() {
          h.kill(), o.tween = 0
        });
        return f = u && f || 0, u = u || a - c, h && h.kill(), l[i] = a, l.inherit = !1, l.modifiers = g, g[i] = function() {
          return p(c + u * h.ratio + f * h.ratio * h.ratio)
        }, l.onUpdate = function() {
          Oe.cache++, o.tween && Ti()
        }, l.onComplete = function() {
          o.tween = 0, d && d.call(h)
        }, h = o.tween = le.to(t, l), h
      };
    return t[i] = r, r.wheelHandler = function() {
      return s.tween && s.tween.kill() && (s.tween = 0)
    }, $t(t, "wheel", r.wheelHandler), Te.isTouch && $t(t, "touchmove", r.wheelHandler), s
  },
  Te = (function() {
    function e(n, r) {
      po || e.register(le) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), th(this), this.init(n, r)
    }
    var t = e.prototype;
    return t.init = function(r, i) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ta) {
        this.update = this.refresh = this.kill = Hr;
        return
      }
      r = Ym(Wn(r) || Ra(r) || r.nodeType ? {
        trigger: r
      } : r, Zl);
      var s = r,
        o = s.onUpdate,
        a = s.toggleClass,
        l = s.id,
        c = s.onToggle,
        u = s.onRefresh,
        f = s.scrub,
        h = s.trigger,
        d = s.pin,
        g = s.pinSpacing,
        p = s.invalidateOnRefresh,
        m = s.anticipatePin,
        v = s.onScrubComplete,
        y = s.onSnapComplete,
        _ = s.once,
        b = s.snap,
        w = s.pinReparent,
        S = s.pinSpacer,
        A = s.containerAnimation,
        L = s.fastScrollEnd,
        T = s.preventOverlaps,
        O = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Sn : Ut,
        B = !f && f !== 0,
        P = Tn(r.scroller || Pe),
        W = le.core.getCache(P),
        G = Ys(P),
        X = ("pinType" in r ? r.pinType : ts(P, "pinType") || G && "fixed") === "fixed",
        H = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
        q = B && r.toggleActions.split(" "),
        K = "markers" in r ? r.markers : Zl.markers,
        Z = G ? 0 : parseFloat(ar(P)["border" + O.p2 + zo]) || 0,
        I = this,
        ie = r.onRefreshInit && function() {
          return r.onRefreshInit(I)
        },
        ce = Qx(P, G, O),
        ve = Jx(P, G),
        pe = 0,
        xe = 0,
        Me = 0,
        j = as(P, O),
        J, Y, ee, de, C, R, M, $, V, x, E, k, D, F, Q, z, N, U, oe, se, ye, Le, Ne, Mt, De, Pr, tr, kt, qt, gr, Or, Ie, ds, mr, _r, yr, hs, no, ri;
      if (I._startClamp = I._endClamp = !1, I._dir = O, m *= 45, I.scroller = P, I.scroll = A ? A.time.bind(A) : j, de = j(), I.vars = r, i = i || r.animation, "refreshPriority" in r && (Gb = 1, r.refreshPriority === -9999 && (Ga = I)), W.tweenScroll = W.tweenScroll || {
          top: n_(P, Ut),
          left: n_(P, Sn)
        }, I.tweenTo = J = W.tweenScroll[O.p], I.scrubDuration = function(ne) {
          ds = Ra(ne) && ne, ds ? Ie ? Ie.duration(ne) : Ie = le.to(i, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: !1,
            duration: ds,
            paused: !0,
            onComplete: function() {
              return v && v(I)
            }
          }) : (Ie && Ie.progress(1).kill(), Ie = 0)
        }, i && (i.vars.lazy = !1, i._initted && !I.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), I.animation = i.pause(), i.scrollTrigger = I, I.scrubDuration(f), gr = 0, l || (l = i.vars.id)), b && ((!Cs(b) || b.push) && (b = {
          snapTo: b
        }), "scrollBehavior" in Ke.style && le.set(G ? [Ke, Vn] : P, {
          scrollBehavior: "auto"
        }), Oe.forEach(function(ne) {
          return fn(ne) && ne.target === (G ? Ze.scrollingElement || Vn : P) && (ne.smooth = !1)
        }), ee = fn(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? eL(i) : b.snapTo === "labelsDirectional" ? tL(i) : b.directional !== !1 ? function(ne, Ee) {
          return Bp(b.snapTo)(ne, ln() - xe < 500 ? 0 : Ee.direction)
        } : le.utils.snap(b.snapTo), mr = b.duration || {
          min: .1,
          max: 2
        }, mr = Cs(mr) ? Wa(mr.min, mr.max) : Wa(mr, mr), _r = le.delayedCall(b.delay || ds / 2 || .1, function() {
          var ne = j(),
            Ee = ln() - xe < 500,
            he = J.tween;
          if ((Ee || Math.abs(I.getVelocity()) < 10) && !he && !Xu && pe !== ne) {
            var Ce = (ne - R) / F,
              Ht = i && !B ? i.totalProgress() : Ce,
              Fe = Ee ? 0 : (Ht - Or) / (ln() - Ca) * 1e3 || 0,
              wt = le.utils.clamp(-Ce, 1 - Ce, ao(Fe / 2) * Fe / .185),
              nn = Ce + (b.inertia === !1 ? 0 : wt),
              _t, lt, tt = b,
              vr = tt.onStart,
              ut = tt.onInterrupt,
              Un = tt.onComplete;
            if (_t = ee(nn, I), Ra(_t) || (_t = nn), lt = Math.max(0, Math.round(R + _t * F)), ne <= M && ne >= R && lt !== ne) {
              if (he && !he._initted && he.data <= ao(lt - ne)) return;
              b.inertia === !1 && (wt = _t - Ce), J(lt, {
                duration: mr(ao(Math.max(ao(nn - Ht), ao(_t - Ht)) * .185 / Fe / .05 || 0)),
                ease: b.ease || "power3",
                data: ao(lt - ne),
                onInterrupt: function() {
                  return _r.restart(!0) && ut && oo(I, ut)
                },
                onComplete: function() {
                  I.update(), pe = j(), i && !B && (Ie ? Ie.resetTo("totalProgress", _t, i._tTime / i._tDur) : i.progress(_t)), gr = Or = i && !B ? i.totalProgress() : I.progress, y && y(I), Un && oo(I, Un)
                }
              }, ne, wt * F, lt - ne - wt * F), vr && oo(I, vr, J.tween)
            }
          } else I.isActive && pe !== ne && _r.restart(!0)
        }).pause()), l && (rh[l] = I), h = I.trigger = Tn(h || d !== !0 && d), ri = h && h._gsap && h._gsap.stRevert, ri && (ri = ri(I)), d = d === !0 ? h : Tn(d), Wn(a) && (a = {
          targets: h,
          className: a
        }), d && (g === !1 || g === or || (g = !g && d.parentNode && d.parentNode.style && ar(d.parentNode).display === "flex" ? !1 : xt), I.pin = d, Y = le.core.getCache(d), Y.spacer ? Q = Y.pinState : (S && (S = Tn(S), S && !S.nodeType && (S = S.current || S.nativeElement), Y.spacerIsNative = !!S, S && (Y.spacerState = tc(S))), Y.spacer = U = S || Ze.createElement("div"), U.classList.add("pin-spacer"), l && U.classList.add("pin-spacer-" + l), Y.pinState = Q = tc(d)), r.force3D !== !1 && le.set(d, {
          force3D: !0
        }), I.spacer = U = Y.spacer, qt = ar(d), Mt = qt[g + O.os2], se = le.getProperty(d), ye = le.quickSetter(d, O.a, Ft), Vf(d, U, qt), N = tc(d)), K) {
        k = Cs(K) ? Ym(K, Xm) : Xm, x = ec("scroller-start", l, P, O, k, 0), E = ec("scroller-end", l, P, O, k, 0, x), oe = x["offset" + O.op.d2];
        var ta = Tn(ts(P, "content") || P);
        $ = this.markerStart = ec("start", l, ta, O, k, oe, 0, A), V = this.markerEnd = ec("end", l, ta, O, k, oe, 0, A), A && (no = le.quickSetter([$, V], O.a, Ft)), !X && !(Kr.length && ts(P, "fixedMarkers") === !0) && (Zx(G ? Ke : P), le.set([x, E], {
          force3D: !0
        }), Pr = le.quickSetter(x, O.a, Ft), kt = le.quickSetter(E, O.a, Ft))
      }
      if (A) {
        var ke = A.vars.onUpdate,
          ge = A.vars.onUpdateParams;
        A.eventCallback("onUpdate", function() {
          I.update(0, 0, 1), ke && ke.apply(A, ge || [])
        })
      }
      if (I.previous = function() {
          return Re[Re.indexOf(I) - 1]
        }, I.next = function() {
          return Re[Re.indexOf(I) + 1]
        }, I.revert = function(ne, Ee) {
          if (!Ee) return I.kill(!0);
          var he = ne !== !1 || !I.enabled,
            Ce = on;
          he !== I.isReverted && (he && (yr = Math.max(j(), I.scroll.rec || 0), Me = I.progress, hs = i && i.progress()), $ && [$, V, x, E].forEach(function(Ht) {
            return Ht.style.display = he ? "none" : "block"
          }), he && (on = I, I.update(he)), d && (!w || !I.isActive) && (he ? iL(d, U, Q) : Vf(d, U, ar(d), De)), he || I.update(he), on = Ce, I.isReverted = he)
        }, I.refresh = function(ne, Ee, he, Ce) {
          if (!((on || !I.enabled) && !Ee)) {
            if (d && ne && fr) {
              $t(e, "scrollEnd", iw);
              return
            }!wn && ie && ie(I), on = I, J.tween && !he && (J.tween.kill(), J.tween = 0), Ie && Ie.pause(), p && i && (i.revert({
              kill: !1
            }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(Di) {
              return Di.vars.immediateRender && Di.render(0, !0, !0)
            }) : i.vars.immediateRender && i.render(0, !0, !0)), I.isReverted || I.revert(!0, !0), I._subPinOffset = !1;
            var Ht = ce(),
              Fe = ve(),
              wt = A ? A.duration() : zr(P, O),
              nn = F <= .01 || !F,
              _t = 0,
              lt = Ce || 0,
              tt = Cs(he) ? he.end : r.end,
              vr = r.endTrigger || h,
              ut = Cs(he) ? he.start : r.start || (r.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"),
              Un = I.pinnedContainer = r.pinnedContainer && Tn(r.pinnedContainer, I),
              Ir = h && Math.max(0, Re.indexOf(I)) || 0,
              Gt = Ir,
              Kt, rn, ps, Pl, sn, Nt, Mr, lf, Zp, na, Nr, ra, Ol;
            for (K && Cs(he) && (ra = le.getProperty(x, O.p), Ol = le.getProperty(E, O.p)); Gt-- > 0;) Nt = Re[Gt], Nt.end || Nt.refresh(0, 1) || (on = I), Mr = Nt.pin, Mr && (Mr === h || Mr === d || Mr === Un) && !Nt.isReverted && (na || (na = []), na.unshift(Nt), Nt.revert(!0, !0)), Nt !== Re[Gt] && (Ir--, Gt--);
            for (fn(ut) && (ut = ut(I)), ut = zm(ut, "start", I), R = e_(ut, h, Ht, O, j(), $, x, I, Fe, Z, X, wt, A, I._startClamp && "_startClamp") || (d ? -.001 : 0), fn(tt) && (tt = tt(I)), Wn(tt) && !tt.indexOf("+=") && (~tt.indexOf(" ") ? tt = (Wn(ut) ? ut.split(" ")[0] : "") + tt : (_t = Tc(tt.substr(2), Ht), tt = Wn(ut) ? ut : (A ? le.utils.mapRange(0, A.duration(), A.scrollTrigger.start, A.scrollTrigger.end, R) : R) + _t, vr = h)), tt = zm(tt, "end", I), M = Math.max(R, e_(tt || (vr ? "100% 0" : wt), vr, Ht, O, j() + _t, V, E, I, Fe, Z, X, wt, A, I._endClamp && "_endClamp")) || -.001, _t = 0, Gt = Ir; Gt--;) Nt = Re[Gt] || {}, Mr = Nt.pin, Mr && Nt.start - Nt._pinPush <= R && !A && Nt.end > 0 && (Kt = Nt.end - (I._startClamp ? Math.max(0, Nt.start) : Nt.start), (Mr === h && Nt.start - Nt._pinPush < R || Mr === Un) && isNaN(ut) && (_t += Kt * (1 - Nt.progress)), Mr === d && (lt += Kt));
            if (R += _t, M += _t, I._startClamp && (I._startClamp += _t), I._endClamp && !wn && (I._endClamp = M || -.001, M = Math.min(M, zr(P, O))), F = M - R || (R -= .01) && .001, nn && (Me = le.utils.clamp(0, 1, le.utils.normalize(R, M, yr))), I._pinPush = lt, $ && _t && (Kt = {}, Kt[O.a] = "+=" + _t, Un && (Kt[O.p] = "-=" + j()), le.set([$, V], Kt)), d && !(nh && I.end >= zr(P, O))) Kt = ar(d), Pl = O === Ut, ps = j(), Le = parseFloat(se(O.a)) + lt, !wt && M > 1 && (Nr = (G ? Ze.scrollingElement || Vn : P).style, Nr = {
              style: Nr,
              value: Nr["overflow" + O.a.toUpperCase()]
            }, G && ar(Ke)["overflow" + O.a.toUpperCase()] !== "scroll" && (Nr.style["overflow" + O.a.toUpperCase()] = "scroll")), Vf(d, U, Kt), N = tc(d), rn = gi(d, !0), lf = X && as(P, Pl ? Sn : Ut)(), g ? (De = [g + O.os2, F + lt + Ft], De.t = U, Gt = g === xt ? mu(d, O) + F + lt : 0, Gt && (De.push(O.d, Gt + Ft), U.style.flexBasis !== "auto" && (U.style.flexBasis = Gt + Ft)), Oo(De), Un && Re.forEach(function(Di) {
              Di.pin === Un && Di.vars.pinSpacing !== !1 && (Di._subPinOffset = !0)
            }), X && j(yr)) : (Gt = mu(d, O), Gt && U.style.flexBasis !== "auto" && (U.style.flexBasis = Gt + Ft)), X && (sn = {
              top: rn.top + (Pl ? ps - R : lf) + Ft,
              left: rn.left + (Pl ? lf : ps - R) + Ft,
              boxSizing: "border-box",
              position: "fixed"
            }, sn[Ws] = sn["max" + zo] = Math.ceil(rn.width) + Ft, sn[js] = sn["max" + Fp] = Math.ceil(rn.height) + Ft, sn[or] = sn[or + za] = sn[or + $a] = sn[or + qa] = sn[or + Va] = "0", sn[xt] = Kt[xt], sn[xt + za] = Kt[xt + za], sn[xt + $a] = Kt[xt + $a], sn[xt + qa] = Kt[xt + qa], sn[xt + Va] = Kt[xt + Va], z = oL(Q, sn, w), wn && j(0)), i ? (Zp = i._initted, Hf(1), i.render(i.duration(), !0, !0), Ne = se(O.a) - Le + F + lt, tr = Math.abs(F - Ne) > 1, X && tr && z.splice(z.length - 2, 2), i.render(0, !0, !0), Zp || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Hf(0)) : Ne = F, Nr && (Nr.value ? Nr.style["overflow" + O.a.toUpperCase()] = Nr.value : Nr.style.removeProperty("overflow-" + O.a));
            else if (h && j() && !A)
              for (rn = h.parentNode; rn && rn !== Ke;) rn._pinOffset && (R -= rn._pinOffset, M -= rn._pinOffset), rn = rn.parentNode;
            na && na.forEach(function(Di) {
              return Di.revert(!1, !0)
            }), I.start = R, I.end = M, de = C = wn ? yr : j(), !A && !wn && (de < yr && j(yr), I.scroll.rec = 0), I.revert(!1, !0), xe = ln(), _r && (pe = -1, _r.restart(!0)), on = 0, i && B && (i._initted || hs) && i.progress() !== hs && i.progress(hs || 0, !0).render(i.time(), !0, !0), (nn || Me !== I.progress || A || p || i && !i._initted) && (i && !B && (i._initted || Me || i.vars.immediateRender !== !1) && i.totalProgress(A && R < -.001 && !Me ? le.utils.normalize(R, M, 0) : Me, !0), I.progress = nn || (de - R) / F === Me ? 0 : Me), d && g && (U._pinOffset = Math.round(I.progress * Ne)), Ie && Ie.invalidate(), isNaN(ra) || (ra -= le.getProperty(x, O.p), Ol -= le.getProperty(E, O.p), nc(x, O, ra), nc($, O, ra - (Ce || 0)), nc(E, O, Ol), nc(V, O, Ol - (Ce || 0))), nn && !wn && I.update(), u && !wn && !D && (D = !0, u(I), D = !1)
          }
        }, I.getVelocity = function() {
          return (j() - C) / (ln() - Ca) * 1e3 || 0
        }, I.endAnimation = function() {
          da(I.callbackAnimation), i && (Ie ? Ie.progress(1) : i.paused() ? B || da(i, I.direction < 0, 1) : da(i, i.reversed()))
        }, I.labelToScroll = function(ne) {
          return i && i.labels && (R || I.refresh() || R) + i.labels[ne] / i.duration() * F || 0
        }, I.getTrailing = function(ne) {
          var Ee = Re.indexOf(I),
            he = I.direction > 0 ? Re.slice(0, Ee).reverse() : Re.slice(Ee + 1);
          return (Wn(ne) ? he.filter(function(Ce) {
            return Ce.vars.preventOverlaps === ne
          }) : he).filter(function(Ce) {
            return I.direction > 0 ? Ce.end <= R : Ce.start >= M
          })
        }, I.update = function(ne, Ee, he) {
          if (!(A && !he && !ne)) {
            var Ce = wn === !0 ? yr : I.scroll(),
              Ht = ne ? 0 : (Ce - R) / F,
              Fe = Ht < 0 ? 0 : Ht > 1 ? 1 : Ht || 0,
              wt = I.progress,
              nn, _t, lt, tt, vr, ut, Un, Ir;
            if (Ee && (C = de, de = A ? j() : Ce, b && (Or = gr, gr = i && !B ? i.totalProgress() : Fe)), m && d && !on && !Yl && fr && (!Fe && R < Ce + (Ce - C) / (ln() - Ca) * m ? Fe = 1e-4 : Fe === 1 && M > Ce + (Ce - C) / (ln() - Ca) * m && (Fe = .9999)), Fe !== wt && I.enabled) {
              if (nn = I.isActive = !!Fe && Fe < 1, _t = !!wt && wt < 1, ut = nn !== _t, vr = ut || !!Fe != !!wt, I.direction = Fe > wt ? 1 : -1, I.progress = Fe, vr && !on && (lt = Fe && !wt ? 0 : Fe === 1 ? 1 : wt === 1 ? 2 : 3, B && (tt = !ut && q[lt + 1] !== "none" && q[lt + 1] || q[lt], Ir = i && (tt === "complete" || tt === "reset" || tt in i))), T && (ut || Ir) && (Ir || f || !i) && (fn(T) ? T(I) : I.getTrailing(T).forEach(function(ps) {
                  return ps.endAnimation()
                })), B || (Ie && !on && !Yl ? (Ie._dp._time - Ie._start !== Ie._time && Ie.render(Ie._dp._time - Ie._start), Ie.resetTo ? Ie.resetTo("totalProgress", Fe, i._tTime / i._tDur) : (Ie.vars.totalProgress = Fe, Ie.invalidate().restart())) : i && i.totalProgress(Fe, !!(on && (xe || ne)))), d) {
                if (ne && g && (U.style[g + O.os2] = Mt), !X) ye(ka(Le + Ne * Fe));
                else if (vr) {
                  if (Un = !ne && Fe > wt && M + 1 > Ce && Ce + 1 >= zr(P, O), w)
                    if (!ne && (nn || Un)) {
                      var Gt = gi(d, !0),
                        Kt = Ce - R;
                      t_(d, Ke, Gt.top + (O === Ut ? Kt : 0) + Ft, Gt.left + (O === Ut ? 0 : Kt) + Ft)
                    } else t_(d, U);
                  Oo(nn || Un ? z : N), tr && Fe < 1 && nn || ye(Le + (Fe === 1 && !Un ? Ne : 0))
                }
              }
              b && !J.tween && !on && !Yl && _r.restart(!0), a && (ut || _ && Fe && (Fe < 1 || !Wf)) && pl(a.targets).forEach(function(ps) {
                return ps.classList[nn || _ ? "add" : "remove"](a.className)
              }), o && !B && !ne && o(I), vr && !on ? (B && (Ir && (tt === "complete" ? i.pause().totalProgress(1) : tt === "reset" ? i.restart(!0).pause() : tt === "restart" ? i.restart(!0) : i[tt]()), o && o(I)), (ut || !Wf) && (c && ut && oo(I, c), H[lt] && oo(I, H[lt]), _ && (Fe === 1 ? I.kill(!1, 1) : H[lt] = 0), ut || (lt = Fe === 1 ? 1 : 3, H[lt] && oo(I, H[lt]))), L && !nn && Math.abs(I.getVelocity()) > (Ra(L) ? L : 2500) && (da(I.callbackAnimation), Ie ? Ie.progress(1) : da(i, tt === "reverse" ? 1 : !Fe, 1))) : B && o && !on && o(I)
            }
            if (kt) {
              var rn = A ? Ce / A.duration() * (A._caScrollDist || 0) : Ce;
              Pr(rn + (x._isFlipped ? 1 : 0)), kt(rn)
            }
            no && no(-Ce / A.duration() * (A._caScrollDist || 0))
          }
        }, I.enable = function(ne, Ee) {
          I.enabled || (I.enabled = !0, $t(P, "resize", xa), G || $t(P, "scroll", lo), ie && $t(e, "refreshInit", ie), ne !== !1 && (I.progress = Me = 0, de = C = pe = j()), Ee !== !1 && I.refresh())
        }, I.getTween = function(ne) {
          return ne && J ? J.tween : Ie
        }, I.setPositions = function(ne, Ee, he, Ce) {
          if (A) {
            var Ht = A.scrollTrigger,
              Fe = A.duration(),
              wt = Ht.end - Ht.start;
            ne = Ht.start + wt * ne / Fe, Ee = Ht.start + wt * Ee / Fe
          }
          I.refresh(!1, !1, {
            start: qm(ne, he && !!I._startClamp),
            end: qm(Ee, he && !!I._endClamp)
          }, Ce), I.update()
        }, I.adjustPinSpacing = function(ne) {
          if (De && ne) {
            var Ee = De.indexOf(O.d) + 1;
            De[Ee] = parseFloat(De[Ee]) + ne + Ft, De[1] = parseFloat(De[1]) + ne + Ft, Oo(De)
          }
        }, I.disable = function(ne, Ee) {
          if (ne !== !1 && I.revert(!0, !0), I.enabled && (I.enabled = I.isActive = !1, Ee || Ie && Ie.pause(), yr = 0, Y && (Y.uncache = 1), ie && Wt(e, "refreshInit", ie), _r && (_r.pause(), J.tween && J.tween.kill() && (J.tween = 0)), !G)) {
            for (var he = Re.length; he--;)
              if (Re[he].scroller === P && Re[he] !== I) return;
            Wt(P, "resize", xa), G || Wt(P, "scroll", lo)
          }
        }, I.kill = function(ne, Ee) {
          I.disable(ne, Ee), Ie && !Ee && Ie.kill(), l && delete rh[l];
          var he = Re.indexOf(I);
          he >= 0 && Re.splice(he, 1), he === bn && Rc > 0 && bn--, he = 0, Re.forEach(function(Ce) {
            return Ce.scroller === I.scroller && (he = 1)
          }), he || wn || (I.scroll.rec = 0), i && (i.scrollTrigger = null, ne && i.revert({
            kill: !1
          }), Ee || i.kill()), $ && [$, V, x, E].forEach(function(Ce) {
            return Ce.parentNode && Ce.parentNode.removeChild(Ce)
          }), Ga === I && (Ga = 0), d && (Y && (Y.uncache = 1), he = 0, Re.forEach(function(Ce) {
            return Ce.pin === d && he++
          }), he || (Y.spacer = 0)), r.onKill && r.onKill(I)
        }, Re.push(I), I.enable(!1, !1), ri && ri(I), i && i.add && !F) {
        var Ve = I.update;
        I.update = function() {
          I.update = Ve, Oe.cache++, R || M || I.refresh()
        }, le.delayedCall(.01, I.update), F = .01, R = M = 0
      } else I.refresh();
      d && rL()
    }, e.register = function(r) {
      return po || (le = r || Jb(), Qb() && window.document && e.enable(), po = Ta), po
    }, e.defaults = function(r) {
      if (r)
        for (var i in r) Zl[i] = r[i];
      return Zl
    }, e.disable = function(r, i) {
      Ta = 0, Re.forEach(function(o) {
        return o[i ? "kill" : "disable"](r)
      }), Wt(Pe, "wheel", lo), Wt(Ze, "scroll", lo), clearInterval(Kl), Wt(Ze, "touchcancel", Hr), Wt(Ke, "touchstart", Hr), Ql(Wt, Ze, "pointerdown,touchstart,mousedown", Gm), Ql(Wt, Ze, "pointerup,touchend,mouseup", Km), gu.kill(), Xl(Wt);
      for (var s = 0; s < Oe.length; s += 3) Jl(Wt, Oe[s], Oe[s + 1]), Jl(Wt, Oe[s], Oe[s + 2])
    }, e.enable = function() {
      if (Pe = window, Ze = document, Vn = Ze.documentElement, Ke = Ze.body, le) {
        if (pl = le.utils.toArray, Wa = le.utils.clamp, th = le.core.context || Hr, Hf = le.core.suppressOverwrites || Hr, Ip = Pe.history.scrollRestoration || "auto", ih = Pe.pageYOffset || 0, le.core.globals("ScrollTrigger", e), Ke) {
          Ta = 1, Po = document.createElement("div"), Po.style.height = "100vh", Po.style.position = "absolute", lw(), Xx(), Et.register(le), e.isTouch = Et.isTouch, ji = Et.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), eh = Et.isTouch === 1, $t(Pe, "wheel", lo), Op = [Pe, Ze, Vn, Ke], le.matchMedia ? (e.matchMedia = function(u) {
            var f = le.matchMedia(),
              h;
            for (h in u) f.add(h, u[h]);
            return f
          }, le.addEventListener("matchMediaInit", function() {
            ow(), Up()
          }), le.addEventListener("matchMediaRevert", function() {
            return sw()
          }), le.addEventListener("matchMedia", function() {
            Os(0, 1), Qs("matchMedia")
          }), le.matchMedia().add("(orientation: portrait)", function() {
            return $f(), $f
          })) : console.warn("Requires GSAP 3.11.0 or later"), $f(), $t(Ze, "scroll", lo);
          var r = Ke.hasAttribute("style"),
            i = Ke.style,
            s = i.borderTopStyle,
            o = le.core.Animation.prototype,
            a, l;
          for (o.revert || Object.defineProperty(o, "revert", {
              value: function() {
                return this.time(-.01, !0)
              }
            }), i.borderTopStyle = "solid", a = gi(Ke), Ut.m = Math.round(a.top + Ut.sc()) || 0, Sn.m = Math.round(a.left + Sn.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), r || (Ke.setAttribute("style", ""), Ke.removeAttribute("style")), Kl = setInterval(Qm, 250), le.delayedCall(.5, function() {
              return Yl = 0
            }), $t(Ze, "touchcancel", Hr), $t(Ke, "touchstart", Hr), Ql($t, Ze, "pointerdown,touchstart,mousedown", Gm), Ql($t, Ze, "pointerup,touchend,mouseup", Km), Zd = le.utils.checkPrefix("transform"), xc.push(Zd), po = ln(), gu = le.delayedCall(.2, Os).pause(), go = [Ze, "visibilitychange", function() {
              var u = Pe.innerWidth,
                f = Pe.innerHeight;
              Ze.hidden ? ($m = u, Vm = f) : ($m !== u || Vm !== f) && xa()
            }, Ze, "DOMContentLoaded", Os, Pe, "load", Os, Pe, "resize", xa], Xl($t), Re.forEach(function(u) {
              return u.enable(0, 1)
            }), l = 0; l < Oe.length; l += 3) Jl(Wt, Oe[l], Oe[l + 1]), Jl(Wt, Oe[l], Oe[l + 2])
        } else if (Ze) {
          var c = function u() {
            e.enable(), Ze.removeEventListener("DOMContentLoaded", u)
          };
          Ze.addEventListener("DOMContentLoaded", c)
        }
      }
    }, e.config = function(r) {
      "limitCallbacks" in r && (Wf = !!r.limitCallbacks);
      var i = r.syncInterval;
      i && clearInterval(Kl) || (Kl = i) && setInterval(Qm, i), "ignoreMobileResize" in r && (eh = e.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (Xl(Wt) || Xl($t, r.autoRefreshEvents || "none"), Kb = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }, e.scrollerProxy = function(r, i) {
      var s = Tn(r),
        o = Oe.indexOf(s),
        a = Ys(s);
      ~o && Oe.splice(o, a ? 6 : 2), i && (a ? Kr.unshift(Pe, i, Ke, i, Vn, i) : Kr.unshift(s, i))
    }, e.clearMatchMedia = function(r) {
      Re.forEach(function(i) {
        return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
      })
    }, e.isInViewport = function(r, i, s) {
      var o = (Wn(r) ? Tn(r) : r).getBoundingClientRect(),
        a = o[s ? Ws : js] * i || 0;
      return s ? o.right - a > 0 && o.left + a < Pe.innerWidth : o.bottom - a > 0 && o.top + a < Pe.innerHeight
    }, e.positionInViewport = function(r, i, s) {
      Wn(r) && (r = Tn(r));
      var o = r.getBoundingClientRect(),
        a = o[s ? Ws : js],
        l = i == null ? a / 2 : i in _u ? _u[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
      return s ? (o.left + l) / Pe.innerWidth : (o.top + l) / Pe.innerHeight
    }, e.killAll = function(r) {
      if (Re.slice(0).forEach(function(s) {
          return s.vars.id !== "ScrollSmoother" && s.kill()
        }), r !== !0) {
        var i = Xs.killAll || [];
        Xs = {}, i.forEach(function(s) {
          return s()
        })
      }
    }, e
  })();
Te.version = "3.15.0";
Te.saveStyles = function(e) {
  return e ? pl(e).forEach(function(t) {
    if (t && t.style) {
      var n = Hn.indexOf(t);
      n >= 0 && Hn.splice(n, 5), Hn.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), le.core.getCache(t), th())
    }
  }) : Hn
};
Te.revert = function(e, t) {
  return Up(!e, t)
};
Te.create = function(e, t) {
  return new Te(e, t)
};
Te.refresh = function(e) {
  return e ? xa(!0) : (po || Te.register()) && Os(!0)
};
Te.update = function(e) {
  return ++Oe.cache && Ti(e === !0 ? 2 : 0)
};
Te.clearScrollMemory = aw;
Te.maxScroll = function(e, t) {
  return zr(e, t ? Sn : Ut)
};
Te.getScrollFunc = function(e, t) {
  return as(Tn(e), t ? Sn : Ut)
};
Te.getById = function(e) {
  return rh[e]
};
Te.getAll = function() {
  return Re.filter(function(e) {
    return e.vars.id !== "ScrollSmoother"
  })
};
Te.isScrolling = function() {
  return !!fr
};
Te.snapDirectional = Bp;
Te.addEventListener = function(e, t) {
  var n = Xs[e] || (Xs[e] = []);
  ~n.indexOf(t) || n.push(t)
};
Te.removeEventListener = function(e, t) {
  var n = Xs[e],
    r = n && n.indexOf(t);
  r >= 0 && n.splice(r, 1)
};
Te.batch = function(e, t) {
  var n = [],
    r = {},
    i = t.interval || .016,
    s = t.batchMax || 1e9,
    o = function(c, u) {
      var f = [],
        h = [],
        d = le.delayedCall(i, function() {
          u(f, h), f = [], h = []
        }).pause();
      return function(g) {
        f.length || d.restart(!0), f.push(g.trigger), h.push(g), s <= f.length && d.progress(1)
      }
    },
    a;
  for (a in t) r[a] = a.substr(0, 2) === "on" && fn(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return fn(s) && (s = s(), $t(Te, "refresh", function() {
    return s = t.batchMax()
  })), pl(e).forEach(function(l) {
    var c = {};
    for (a in r) c[a] = r[a];
    c.trigger = l, n.push(Te.create(c))
  }), n
};
var r_ = function(t, n, r, i) {
    return n > i ? t(i) : n < 0 && t(0), r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
  },
  zf = function e(t, n) {
    n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Et.isTouch ? " pinch-zoom" : "") : "none", t === Vn && e(Ke, n)
  },
  rc = {
    auto: 1,
    scroll: 1
  },
  lL = function(t) {
    var n = t.event,
      r = t.target,
      i = t.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || le.core.getCache(s),
      a = ln(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (; s && s !== Ke && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(rc[(l = ar(s)).overflowY] || rc[l.overflowX]));) s = s.parentNode;
      o._isScroll = s && s !== r && !Ys(s) && (rc[(l = ar(s)).overflowY] || rc[l.overflowX]), o._isScrollT = a
    }(o._isScroll || i === "x") && (n.stopPropagation(), n._gsapAllow = !0)
  },
  uw = function(t, n, r, i) {
    return Et.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: i = i && lL,
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function() {
        return r && $t(Ze, Et.eventTypes[0], s_, !1, !0)
      },
      onDisable: function() {
        return Wt(Ze, Et.eventTypes[0], s_, !0)
      }
    })
  },
  cL = /(input|label|select|textarea)/i,
  i_, s_ = function(t) {
    var n = cL.test(t.target.tagName);
    (n || i_) && (t._gsapAllow = !0, i_ = n)
  },
  uL = function(t) {
    Cs(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
    var n = t,
      r = n.normalizeScrollX,
      i = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      a, l, c = Tn(t.target) || Vn,
      u = le.core.globals().ScrollSmoother,
      f = u && u.get(),
      h = ji && (t.content && Tn(t.content) || f && t.content !== !1 && !f.smooth() && f.content()),
      d = as(c, Ut),
      g = as(c, Sn),
      p = 1,
      m = (Et.isTouch && Pe.visualViewport ? Pe.visualViewport.scale * Pe.visualViewport.width : Pe.outerWidth) / Pe.innerWidth,
      v = 0,
      y = fn(i) ? function() {
        return i(a)
      } : function() {
        return i || 2.8
      },
      _, b, w = uw(c, t.type, !0, s),
      S = function() {
        return b = !1
      },
      A = Hr,
      L = Hr,
      T = function() {
        l = zr(c, Ut), L = Wa(ji ? 1 : 0, l), r && (A = Wa(0, zr(c, Sn))), _ = $s
      },
      O = function() {
        h._gsap.y = ka(parseFloat(h._gsap.y) + d.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0
      },
      B = function() {
        if (b) {
          requestAnimationFrame(S);
          var K = ka(a.deltaY / 2),
            Z = L(d.v - K);
          if (h && Z !== d.v + d.offset) {
            d.offset = Z - d.v;
            var I = ka((parseFloat(h && h._gsap.y) || 0) - d.offset);
            h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + I + ", 0, 1)", h._gsap.y = I + "px", d.cacheID = Oe.cache, Ti()
          }
          return !0
        }
        d.offset && O(), b = !0
      },
      P, W, G, X, H = function() {
        T(), P.isActive() && P.vars.scrollY > l && (d() > l ? P.progress(1) && d(l) : P.resetTo("scrollY", l))
      };
    return h && le.set(h, {
      y: "+=0"
    }), t.ignoreCheck = function(q) {
      return ji && q.type === "touchmove" && B() || p > 1.05 && q.type !== "touchstart" || a.isGesturing || q.touches && q.touches.length > 1
    }, t.onPress = function() {
      b = !1;
      var q = p;
      p = ka((Pe.visualViewport && Pe.visualViewport.scale || 1) / m), P.pause(), q !== p && zf(c, p > 1.01 ? !0 : r ? !1 : "x"), W = g(), G = d(), T(), _ = $s
    }, t.onRelease = t.onGestureStart = function(q, K) {
      if (d.offset && O(), !K) X.restart(!0);
      else {
        Oe.cache++;
        var Z = y(),
          I, ie;
        r && (I = g(), ie = I + Z * .05 * -q.velocityX / .227, Z *= r_(g, I, ie, zr(c, Sn)), P.vars.scrollX = A(ie)), I = d(), ie = I + Z * .05 * -q.velocityY / .227, Z *= r_(d, I, ie, zr(c, Ut)), P.vars.scrollY = L(ie), P.invalidate().duration(Z).play(.01), (ji && P.vars.scrollY >= l || I >= l - 1) && le.to({}, {
          onUpdate: H,
          duration: Z
        })
      }
      o && o(q)
    }, t.onWheel = function() {
      P._ts && P.pause(), ln() - v > 1e3 && (_ = 0, v = ln())
    }, t.onChange = function(q, K, Z, I, ie) {
      if ($s !== _ && T(), K && r && g(A(I[2] === K ? W + (q.startX - q.x) : g() + K - I[1])), Z) {
        d.offset && O();
        var ce = ie[2] === Z,
          ve = ce ? G + q.startY - q.y : d() + Z - ie[1],
          pe = L(ve);
        ce && ve !== pe && (G += pe - ve), d(pe)
      }(Z || K) && Ti()
    }, t.onEnable = function() {
      zf(c, r ? !1 : "x"), Te.addEventListener("refresh", H), $t(Pe, "resize", H), d.smooth && (d.target.style.scrollBehavior = "auto", d.smooth = g.smooth = !1), w.enable()
    }, t.onDisable = function() {
      zf(c, !0), Wt(Pe, "resize", H), Te.removeEventListener("refresh", H), w.kill()
    }, t.lockAxis = t.lockAxis !== !1, a = new Et(t), a.iOS = ji, ji && !d() && d(1), ji && le.ticker.add(Hr), X = a._dc, P = le.to(a, {
      ease: "power4",
      paused: !0,
      inherit: !1,
      scrollX: r ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: cw(d, d(), function() {
          return P.pause()
        })
      },
      onUpdate: Ti,
      onComplete: X.vars.onComplete
    }), a
  };
Te.sort = function(e) {
  if (fn(e)) return Re.sort(e);
  var t = Pe.pageYOffset || 0;
  return Te.getAll().forEach(function(n) {
    return n._sortY = n.trigger ? t + n.trigger.getBoundingClientRect().top : n.start + Pe.innerHeight
  }), Re.sort(e || function(n, r) {
    return (n.vars.refreshPriority || 0) * -1e6 + (n.vars.containerAnimation ? 1e6 : n._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6)
  })
};
Te.observe = function(e) {
  return new Et(e)
};
Te.normalizeScroll = function(e) {
  if (typeof e > "u") return vn;
  if (e === !0 && vn) return vn.enable();
  if (e === !1) {
    vn && vn.kill(), vn = e;
    return
  }
  var t = e instanceof Et ? e : uL(e);
  return vn && vn.target === t.target && vn.kill(), Ys(t.target) && (vn = t), t
};
Te.core = {
  _getVelocityProp: Jd,
  _inputObserver: uw,
  _scrollers: Oe,
  _proxies: Kr,
  bridge: {
    ss: function() {
      fr || Qs("scrollStart"), fr = ln()
    },
    ref: function() {
      return on
    }
  }
};
Jb() && le.registerPlugin(Te);
const Pc = "persist:",
  fL = () => {
    Te.getAll().forEach(e => {
      const t = e.vars.id;
      typeof t == "string" && t.startsWith(Pc) || e.kill()
    })
  },
  dL = 400;
let Oc = null,
  fw = 0,
  ml = !1,
  Ic = !1,
  yu = 0,
  o_ = !1;

function hL(e, t) {
  Oc = e, !(o_ || typeof window > "u") && (o_ = !0, window.addEventListener("popstate", () => {
    try {
      if (t()) return
    } catch {}
    ml = !0, oh(), window.clearTimeout(yu), yu = window.setTimeout(dw, dL)
  }, !0), window.addEventListener("scroll", () => {
    ml && oh()
  }, !0))
}

function pL(e, t) {
  if (ml) {
    oh();
    return
  }
  Ic || Math.abs(e - t) > 1 || (fw = e)
}

function dw() {
  ml = !1, clearTimeout(yu), yu = 0
}

function oh() {
  if (!ml || Ic || !Oc) return;
  const e = fw,
    t = window.scrollY,
    n = Oc.scroll;
  Math.abs(t - e) < 1 && Math.abs(n - e) < 1 || (Ic = !0, window.scrollTo(0, e), Oc.scrollTo(e, {
    immediate: !0,
    force: !0
  }), Ic = !1)
}
const gL = "$s";

function Se(...e) {
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  typeof e[0] != "string" && e.unshift(t);
  const [n, r] = e;
  if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
  if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
  const i = gL + n,
    s = Ae(),
    o = Hh(s.payload.state, i);
  if (o.value === void 0 && r) {
    const a = r();
    if (at(a)) return s.payload.state[i] = a, a;
    o.value = a
  }
  return o
}

function Vs(e = !0) {
  const t = Se("lenis");
  return e ? t.value.stop() : t.value.start()
}

function mL(e, t) {
  const n = Se("transition-done"),
    r = Se("preloader-done"),
    i = Se("header-state"),
    s = Se("navigation-locked", () => !1),
    o = Se("transition-instant", () => !1),
    a = o.value;
  o.value = !1;
  const l = 1;
  e.meta.pageTransition = {
    ...e.meta.pageTransition
  }, t.meta.pageTransition = {
    ...t.meta.pageTransition
  }, e.meta.pageTransition.mode = "out-in", t.meta.pageTransition.mode = "out-in";
  const c = (f, h) => {
      Vs(!0), n.value = !1, r.value = !0, s.value = !0;
      const d = () => {
        dw(), fL(), Se("lenis").value?.scrollTo(0, {
          immediate: !0,
          force: !0
        }), window.scrollTo(0, 0), i.value.white = !1, i.value.onlyBtnWhite = !1, i.value.instant = !1, i.value.isMenuOpen = !1, ue.set(".menu-wrap", {
          autoAlpha: 0,
          pointerEvents: "none"
        }), ue.set(".menu-wrap .menu-bg", {
          opacity: 0
        }), ue.set(".menu-wrap .menu", {
          opacity: 0
        }), h()
      };
      if (a) {
        d();
        return
      }
      ue.set(".transition-loader", {
        opacity: 1
      }), ue.timeline({
        onComplete: d
      }).to(".transition-loader .overlay", {
        x: 0,
        xPercent: 0,
        duration: l
      })
    },
    u = (f, h) => {
      const d = String(e.name).includes("index"),
        g = String(e.name).includes("services__");
      d && ue.to("section.hero", {
        opacity: 1
      });
      const p = () => {
        d ? setTimeout(() => {
          Vs(!1)
        }, 1200) : (!g || window.innerWidth < 1024) && Vs(!1), setTimeout(() => {
          n.value = !0, s.value = !1
        }, 250), h()
      };
      if (a) {
        p();
        return
      }
      const m = ue.timeline({
        onComplete: p
      });
      m.to(".transition-loader", {
        opacity: 0,
        duration: l
      }), m.set(".transition-loader .overlay", {
        xPercent: 100
      })
    };
  t.meta.pageTransition && (t.meta.pageTransition.onLeave = c), e.meta.pageTransition && (e.meta.pageTransition.onEnter = u)
}
const _L = async (e, t) => {
  mL(e, t)
}, yL = async e => {
  let t, n;
  const r = ([t, n] = Ei(() => cp({
    path: e.path
  })), t = await t, n(), t);
  if (r.redirect) return eo(r.redirect, {
    acceptRelative: !0
  }) ? (window.location.href = r.redirect, !1) : r.redirect
}, vL = [ER, TR, _L, yL], ah = {};

function bL(e, t, n) {
  const {
    pathname: r,
    search: i,
    hash: s
  } = t, o = e.indexOf("#");
  if (o > -1) {
    const c = s.includes(e.slice(o)) ? e.slice(o).length : 1;
    let u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), Gg(u, "")
  }
  const a = Gg(r, e),
    l = !n || aT(a, n) ? a : n;
  return l + (l.includes("?") ? "" : i) + s
}
const wL = Je({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      let t, n, r = Dn().app.baseURL;
      Nd && !r.includes("#") && (r += "#");
      const i = Bi.history?.(r) ?? (Nd ? Vk(r) : Bv(r)),
        s = Bi.routes ? ([t, n] = Ei(() => Bi.routes(Pf)), t = await t, n(), t ?? Pf) : Pf;
      let o;
      const a = fR({
        ...Bi,
        scrollBehavior: (m, v, y) => {
          if (v === ir) {
            o = y;
            return
          }
          if (Bi.scrollBehavior) {
            if (a.options.scrollBehavior = Bi.scrollBehavior, "scrollRestoration" in window.history) {
              const _ = a.beforeEach(() => {
                _(), window.history.scrollRestoration = "manual"
              })
            }
            return Bi.scrollBehavior(m, ir, o || y)
          }
        },
        history: i,
        routes: s
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
      const l = Jr(a.currentRoute.value);
      a.afterEach((m, v) => {
        l.value = v
      }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const c = bL(r, window.location, e.payload.path),
        u = Jr(a.currentRoute.value),
        f = () => {
          u.value = a.currentRoute.value
        };
      e.hook("page:finish", f), a.afterEach((m, v) => {
        m.matched[m.matched.length - 1]?.components?.default === v.matched[v.matched.length - 1]?.components?.default && f()
      });
      const h = {};
      for (const m in u.value) Object.defineProperty(h, m, {
        get: () => u.value[m],
        enumerable: !0
      });
      e._route = mi(h), e._middleware ||= {
        global: [],
        named: {}
      };
      const d = Vu();
      a.afterEach(async (m, v, y) => {
        delete e._processingMiddleware, !e.isHydrating && d.value && await e.runWithContext(dT), y && await e.callHook("page:loading:end")
      });
      try {
        [t, n] = Ei(() => a.isReady()), await t, n()
      } catch (m) {
        [t, n] = Ei(() => e.runWithContext(() => As(m))), await t, n()
      }
      const g = c !== a.currentRoute.value.fullPath ? a.resolve(c) : a.currentRoute.value;
      f();
      const p = e.payload.state._layout;
      return a.beforeEach(async (m, v) => {
        await e.callHook("page:loading:start"), m.meta = ni(m.meta), e.isHydrating && p && !Rr(m.meta.layout) && (m.meta.layout = p), e._processingMiddleware = !0;
        {
          const y = new Set([...vL, ...e._middleware.global]);
          for (const _ of m.matched) {
            const b = _.meta.middleware;
            if (b)
              for (const w of hp(b)) y.add(w)
          } {
            const _ = await e.runWithContext(() => cp({
              path: m.path
            }));
            if (_.appMiddleware)
              for (const b in _.appMiddleware) _.appMiddleware[b] ? y.add(b) : y.delete(b)
          }
          for (const _ of y) {
            const b = typeof _ == "string" ? e._middleware.named[_] || await ah[_]?.().then(w => w.default || w) : _;
            if (!b) throw new Error(`Unknown route middleware: '${_}'.`);
            try {
              const w = await e.runWithContext(() => b(m, v));
              if (!e.payload.serverRendered && e.isHydrating && (w === !1 || w instanceof Error)) {
                const S = w || Ci({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${c}`
                });
                return await e.runWithContext(() => As(S)), !1
              }
              if (w === !0) continue;
              if (w === !1) return w;
              if (w) return hv(w) && w.fatal && await e.runWithContext(() => As(w)), w
            } catch (w) {
              const S = Ci(w);
              return S.fatal && await e.runWithContext(() => As(S)), S
            }
          }
        }
      }), a.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end")
      }), a.afterEach(m => {
        if (m.matched.length === 0) return e.runWithContext(() => As(Ci({
          statusCode: 404,
          fatal: !1,
          statusMessage: `Page not found: ${m.fullPath}`,
          data: {
            path: m.fullPath
          }
        })))
      }), e.hooks.hookOnce("app:created", async () => {
        try {
          "name" in g && (g.name = void 0), await a.replace({
            ...g,
            force: !0
          }), a.options.scrollBehavior = Bi.scrollBehavior
        } catch (m) {
          await e.runWithContext(() => As(m))
        }
      }), {
        provide: {
          router: a
        }
      }
    }
  }),
  AL = {
    build: -1
  };

function SL(e) {
  return typeof e == "function" ? e() : e && e.__v_isRef === !0 ? e.value : e
}

function EL(e) {
  typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !Ni(String(e.url), {
    acceptRelative: !0,
    strict: !1
  }) && (e.url = $E(String(e.url)));
  const t = Object.keys(e).sort((r, i) => r.localeCompare(i)),
    n = {};
  for (const r of t) n[r] = e[r];
  return n
}

function CL(e) {
  const n = [];

  function r(s) {
    if (!s || typeof s != "object" || Object.keys(s).length === 0) return () => {};
    s._context;
    const o = {};
    for (const a in s) {
      const l = s[a];
      typeof l < "u" && l !== "" && (o[a] = l)
    }
    return Object.keys(o).some(a => !a.startsWith("_")) ? (n.push(o), () => {
      const a = n.indexOf(o);
      a !== -1 && n.splice(a, 1)
    }) : () => {}
  }

  function i(s) {
    const o = {};
    s?.debug && (o._context = {}), o._priority = {};
    for (const a in n.sort((l, c) => (l._priority || 0) - (c._priority || 0)))
      for (const l in n[a]) {
        const c = l,
          u = s?.resolveRefs ? SL(n[a][l]) : n[a][l];
        !l.startsWith("_") && typeof u < "u" && u !== "" && (o[l] = u, typeof n[a]._priority < "u" && n[a]._priority !== -1 && (o._priority[c] = n[a]._priority), s?.debug && (o._context[c] = n[a]._context?.[c] || n[a]._context || "anonymous"))
      }
    return s?.skipNormalize ? o : EL(o)
  }
  return {
    stack: n,
    push: r,
    get: i
  }
}

function a_(e) {
  return typeof e == "string" ? `'${e}'` : new TL().serialize(e)
}
const TL = (function() {
  class e {
    #e = new Map;
    compare(n, r) {
      const i = typeof n,
        s = typeof r;
      return i === "string" && s === "string" ? n.localeCompare(r) : i === "number" && s === "number" ? n - r : String.prototype.localeCompare.call(this.serialize(n, !0), this.serialize(r, !0))
    }
    serialize(n, r) {
      if (n === null) return "null";
      switch (typeof n) {
        case "string":
          return r ? n : `'${n}'`;
        case "bigint":
          return `${n}n`;
        case "object":
          return this.$object(n);
        case "function":
          return this.$function(n)
      }
      return String(n)
    }
    serializeObject(n) {
      const r = Object.prototype.toString.call(n);
      if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), n);
      const i = n.constructor,
        s = i === Object || i === void 0 ? "" : i.name;
      if (s !== "" && globalThis[s] === i) return this.serializeBuiltInType(s, n);
      if (typeof n.toJSON == "function") {
        const o = n.toJSON();
        return s + (o !== null && typeof o == "object" ? this.$object(o) : `(${this.serialize(o)})`)
      }
      return this.serializeObjectEntries(s, Object.entries(n))
    }
    serializeBuiltInType(n, r) {
      const i = this["$" + n];
      if (i) return i.call(this, r);
      if (typeof r?.entries == "function") return this.serializeObjectEntries(n, r.entries());
      throw new Error(`Cannot serialize ${n}`)
    }
    serializeObjectEntries(n, r) {
      const i = Array.from(r).sort((o, a) => this.compare(o[0], a[0]));
      let s = `${n}{`;
      for (let o = 0; o < i.length; o++) {
        const [a, l] = i[o];
        s += `${this.serialize(a,!0)}:${this.serialize(l)}`, o < i.length - 1 && (s += ",")
      }
      return s + "}"
    }
    $object(n) {
      let r = this.#e.get(n);
      return r === void 0 && (this.#e.set(n, `#${this.#e.size}`), r = this.serializeObject(n), this.#e.set(n, r)), r
    }
    $function(n) {
      const r = Function.prototype.toString.call(n);
      return r.slice(-15) === "[native code] }" ? `${n.name||""}()[native]` : `${n.name}(${n.length})${r.replace(/\s*\n\s*/g,"")}`
    }
    $Array(n) {
      let r = "[";
      for (let i = 0; i < n.length; i++) r += this.serialize(n[i]), i < n.length - 1 && (r += ",");
      return r + "]"
    }
    $Date(n) {
      try {
        return `Date(${n.toISOString()})`
      } catch {
        return "Date(null)"
      }
    }
    $ArrayBuffer(n) {
      return `ArrayBuffer[${new Uint8Array(n).join(",")}]`
    }
    $Set(n) {
      return `Set${this.$Array(Array.from(n).sort((r,i)=>this.compare(r,i)))}`
    }
    $Map(n) {
      return this.serializeObjectEntries("Map", n.entries())
    }
  }
  for (const t of ["Error", "RegExp", "URL"]) e.prototype["$" + t] = function(n) {
    return `${t}(${n})`
  };
  for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + t] = function(n) {
    return `${t}[${n.join(",")}]`
  };
  for (const t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(n) {
    return `${t}[${n.join("n,")}${n.length>0?"n":""}]`
  };
  return e
})();

function kL(e, t) {
  return e === t || a_(e) === a_(t)
}
const RL = {
  trailing: !0
};

function xL(e, t = 25, n = {}) {
  if (n = {
      ...RL,
      ...n
    }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
  let r, i, s = [],
    o, a;
  const l = (f, h) => (o = LL(e, f, h), o.finally(() => {
      if (o = null, n.trailing && a && !i) {
        const d = l(f, a);
        return a = null, d
      }
    }), o),
    c = function(...f) {
      return n.trailing && (a = f), o || new Promise(h => {
        const d = !i && n.leading;
        clearTimeout(i), i = setTimeout(() => {
          i = null;
          const g = n.leading ? r : l(this, f);
          a = null;
          for (const p of s) p(g);
          s = []
        }, t), d ? (r = l(this, f), h(r)) : s.push(h)
      })
    },
    u = f => {
      f && (clearTimeout(f), i = null)
    };
  return c.isPending = () => !!i, c.cancel = () => {
    u(i), s = [], a = null
  }, c.flush = () => {
    if (u(i), !a || o) return;
    const f = a;
    return a = null, l(this, f)
  }, c
}
async function LL(e, t, n) {
  return await e.apply(t, n)
}
const hw = Symbol.for("nuxt:client-only"),
  PL = mt({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(e, {
      slots: t,
      attrs: n
    }) {
      const r = Jr(!1);
      Bn(() => {
        r.value = !0
      });
      const i = Nn();
      return i && (i._nuxtClientOnly = !0), Ns(hw, !0), () => {
        if (r.value) {
          const l = t.default?.();
          return l && l.length === 1 ? [Zr(l[0], n)] : l
        }
        const s = t.fallback || t.placeholder;
        if (s) return Vt(s);
        const o = e.fallback || e.placeholder || "",
          a = e.fallbackTag || e.placeholderTag || "span";
        return Be(a, n, o)
      }
    }
  }),
  lh = globalThis.requestIdleCallback || (e => {
    const t = Date.now(),
      n = {
        didTimeout: !1,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
      };
    return setTimeout(() => {
      e(n)
    }, 1)
  }),
  OL = globalThis.cancelIdleCallback || (e => {
    clearTimeout(e)
  }),
  Qu = e => {
    const t = Ae();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
      lh(() => e())
    }) : lh(() => e())
  };

function IL(...e) {
  const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
  ML(e[0], e[1]) && e.unshift(t);
  let [n, r, i = {}] = e, s = !1;
  const o = be(() => Er(n));
  if (typeof o.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  if (typeof r != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  const a = Ae();
  i.server ??= !0, i.default ??= FL, i.getCachedData ??= gw, i.lazy ??= !1, i.immediate ??= !0, i.deep ??= SC.deep, i.dedupe ??= "cancel", i._functionName, a._asyncData[o.value];

  function l() {
    const g = {
      cause: "initial",
      dedupe: i.dedupe
    };
    return a._asyncData[o.value]?._init || (g.cachedData = i.getCachedData(o.value, a, {
      cause: "initial"
    }), a._asyncData[o.value] = l_(a, o.value, r, i, g.cachedData)), () => a._asyncData[o.value].execute(g)
  }
  const c = l(),
    u = a._asyncData[o.value];
  u._deps++;
  const f = i.server !== !1 && a.payload.serverRendered;
  {
    let g = function(b) {
      const w = a._asyncData[b];
      w?._deps && (w._deps--, w._deps === 0 && w?._off())
    };
    const p = Nn();
    if (p && f && i.immediate && !p.sp && (p.sp = []), p && !p._nuxtOnBeforeMountCbs) {
      p._nuxtOnBeforeMountCbs = [];
      const b = p._nuxtOnBeforeMountCbs;
      f0(() => {
        b.forEach(w => {
          w()
        }), b.splice(0, b.length)
      }), Zs(() => b.splice(0, b.length))
    }
    const m = p && (p._nuxtClientOnly || Zt(hw, !1));
    f && a.isHydrating && (u.error.value || u.data.value !== void 0) ? u.status.value = u.error.value ? "error" : "success" : p && (!m && a.payload.serverRendered && a.isHydrating || i.lazy) && i.immediate ? p._nuxtOnBeforeMountCbs.push(c) : i.immediate && u.status.value !== "success" && c();
    const v = Js(),
      y = Qe(o, (b, w) => {
        if ((b || w) && b !== w) {
          s = !0;
          const S = a._asyncData[w]?.data.value !== void 0,
            A = a._asyncDataPromises[w] !== void 0,
            L = {
              cause: "initial",
              dedupe: i.dedupe
            };
          if (!a._asyncData[b]?._init) {
            let T;
            w && S ? T = a._asyncData[w].data.value : (T = i.getCachedData(b, a, {
              cause: "initial"
            }), L.cachedData = T), a._asyncData[b] = l_(a, b, r, i, T)
          }
          a._asyncData[b]._deps++, w && g(w), (i.immediate || S || A) && a._asyncData[b].execute(L), Fc(() => {
            s = !1
          })
        }
      }, {
        flush: "sync"
      }),
      _ = i.watch ? Qe(i.watch, () => {
        s || u._execute({
          cause: "watch",
          dedupe: i.dedupe
        })
      }) : () => {};
    v && Do(() => {
      y(), _(), g(o.value)
    })
  }
  const h = {
      data: ic(() => a._asyncData[o.value]?.data),
      pending: ic(() => a._asyncData[o.value]?.pending),
      status: ic(() => a._asyncData[o.value]?.status),
      error: ic(() => a._asyncData[o.value]?.error),
      refresh: (...g) => a._asyncData[o.value]?._init ? a._asyncData[o.value].execute(...g) : l()(),
      execute: (...g) => h.refresh(...g),
      clear: () => pw(a, o.value)
    },
    d = Promise.resolve(a._asyncDataPromises[o.value]).then(() => h);
  return Object.assign(d, h), d
}

function ic(e) {
  return be({
    get() {
      return e()?.value
    },
    set(t) {
      const n = e();
      n && (n.value = t)
    }
  })
}

function ML(e, t) {
  return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function")
}

function NL(e) {
  const t = Ae();
  if (e in t.payload.data || (t.payload.data[e] = void 0), t._asyncData[e]) {
    const n = t._asyncData[e];
    n._deps++, Js() && Do(() => {
      n._deps--, n._deps === 0 && n?._off()
    })
  }
  return {
    data: be({
      get() {
        return t._asyncData[e]?.data.value ?? t.payload.data[e]
      },
      set(n) {
        t._asyncData[e] ? t._asyncData[e].data.value = n : t.payload.data[e] = n
      }
    })
  }
}

function pw(e, t) {
  t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = void 0), e._asyncData[t] && (e._asyncData[t].data.value = re(e._asyncData[t]._default()), e._asyncData[t].error.value = void 0, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = !0), e._asyncDataPromises[t] = void 0)
}

function DL(e, t) {
  const n = {};
  for (const r of t) n[r] = e[r];
  return n
}

function l_(e, t, n, r, i) {
  e.payload._errors[t] ??= void 0;
  const s = r.getCachedData !== gw,
    o = n,
    a = r.deep ? et : Jr,
    l = i !== void 0,
    c = e.hook("app:data:refresh", async f => {
      (!f || f.includes(t)) && await u.execute({
        cause: "refresh:hook"
      })
    }),
    u = {
      data: a(l ? i : r.default()),
      pending: be(() => u.status.value === "pending"),
      error: Hh(e.payload._errors, t),
      status: Jr("idle"),
      execute: (...f) => {
        const [h, d = void 0] = f, g = h && d === void 0 && typeof h == "object" ? h : {};
        if (e._asyncDataPromises[t]) {
          if ((g.dedupe ?? r.dedupe) === "defer") return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = !0
        } {
          const m = "cachedData" in g ? g.cachedData : r.getCachedData(t, e, {
            cause: g.cause ?? "refresh:manual"
          });
          if (m !== void 0) return e.payload.data[t] = u.data.value = m, u.error.value = void 0, u.status.value = "success", Promise.resolve(m)
        }
        u.status.value = "pending";
        const p = new Promise((m, v) => {
          try {
            m(o(e))
          } catch (y) {
            v(y)
          }
        }).then(async m => {
          if (p.cancelled) return e._asyncDataPromises[t];
          let v = m;
          r.transform && (v = await r.transform(m)), r.pick && (v = DL(v, r.pick)), e.payload.data[t] = v, u.data.value = v, u.error.value = void 0, u.status.value = "success"
        }).catch(m => {
          if (p.cancelled) return e._asyncDataPromises[t];
          u.error.value = Ci(m), u.data.value = re(r.default()), u.status.value = "error"
        }).finally(() => {
          p.cancelled || delete e._asyncDataPromises[t]
        });
        return e._asyncDataPromises[t] = p, e._asyncDataPromises[t]
      },
      _execute: xL((...f) => u.execute(...f), 0, {
        leading: !0
      }),
      _default: r.default,
      _deps: 0,
      _init: !0,
      _hash: void 0,
      _off: () => {
        c(), e._asyncData[t]?._init && (e._asyncData[t]._init = !1), s || ur(() => {
          e._asyncData[t]?._init || (pw(e, t), u.execute = () => Promise.resolve())
        })
      }
    };
  return u
}
const FL = () => {},
  gw = (e, t, n) => {
    if (t.isHydrating) return t.payload.data[e];
    if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook") return t.static.data[e]
  };

function BL(e, t) {
  if (typeof e != "string") throw new TypeError("argument str must be a string");
  const n = {},
    r = t || {},
    i = r.decode || UL;
  let s = 0;
  for (; s < e.length;) {
    const o = e.indexOf("=", s);
    if (o === -1) break;
    let a = e.indexOf(";", s);
    if (a === -1) a = e.length;
    else if (a < o) {
      s = e.lastIndexOf(";", o - 1) + 1;
      continue
    }
    const l = e.slice(s, o).trim();
    if (r?.filter && !r?.filter(l)) {
      s = a + 1;
      continue
    }
    if (n[l] === void 0) {
      let c = e.slice(o + 1, a).trim();
      c.codePointAt(0) === 34 && (c = c.slice(1, -1)), n[l] = HL(c, i)
    }
    s = a + 1
  }
  return n
}

function UL(e) {
  return e.includes("%") ? decodeURIComponent(e) : e
}

function HL(e, t) {
  try {
    return t(e)
  } catch {
    return e
  }
}
const sc = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;

function c_(e, t, n) {
  const r = n || {},
    i = r.encode || encodeURIComponent;
  if (typeof i != "function") throw new TypeError("option encode is invalid");
  if (!sc.test(e)) throw new TypeError("argument name is invalid");
  const s = i(t);
  if (s && !sc.test(s)) throw new TypeError("argument val is invalid");
  let o = e + "=" + s;
  if (r.maxAge !== void 0 && r.maxAge !== null) {
    const a = r.maxAge - 0;
    if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a)
  }
  if (r.domain) {
    if (!sc.test(r.domain)) throw new TypeError("option domain is invalid");
    o += "; Domain=" + r.domain
  }
  if (r.path) {
    if (!sc.test(r.path)) throw new TypeError("option path is invalid");
    o += "; Path=" + r.path
  }
  if (r.expires) {
    if (!WL(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
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

function WL(e) {
  return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}

function Ar(e) {
  if (typeof e != "object") return e;
  var t, n, r = Object.prototype.toString.call(e);
  if (r === "[object Object]") {
    if (e.constructor !== Object && typeof e.constructor == "function") {
      n = new e.constructor;
      for (t in e) e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Ar(e[t]))
    } else {
      n = {};
      for (t in e) t === "__proto__" ? Object.defineProperty(n, t, {
        value: Ar(e[t]),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : n[t] = Ar(e[t])
    }
    return n
  }
  if (r === "[object Array]") {
    for (t = e.length, n = Array(t); t--;) n[t] = Ar(e[t]);
    return n
  }
  return r === "[object Set]" ? (n = new Set, e.forEach(function(i) {
    n.add(Ar(i))
  }), n) : r === "[object Map]" ? (n = new Map, e.forEach(function(i, s) {
    n.set(Ar(s), Ar(i))
  }), n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(Ar(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const jL = {
    path: "/",
    watch: !0,
    decode: e => nl(decodeURIComponent(e)),
    encode: e => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
  },
  oc = globalThis.cookieStore;

function mw(e, t) {
  const n = {
    ...jL,
    ...t
  };
  n.filter ??= c => c === e;
  const r = u_(n) || {};
  let i;
  n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
  const s = i !== void 0 && i <= 0,
    o = s || r[e] === void 0 || r[e] === null,
    a = Ar(s ? void 0 : r[e] ?? n.default?.()),
    l = i && !s ? zL(a, i, n.watch && n.watch !== "shallow") : et(a);
  {
    let c = null;
    try {
      !oc && typeof BroadcastChannel < "u" && (c = new BroadcastChannel(`nuxt:cookies:${e}`))
    } catch {}
    const u = (g = !1) => {
        !g && (n.readonly || kL(l.value, r[e])) || (VL(e, l.value, n), r[e] = Ar(l.value), c?.postMessage({
          value: n.encode(l.value)
        }))
      },
      f = g => {
        const p = g.refresh ? u_(n)?.[e] : n.decode(g.value);
        h = !0, l.value = p, r[e] = Ar(p), ur(() => {
          h = !1
        })
      };
    let h = !1;
    const d = !!Js();
    if (d && Do(() => {
        h = !0, u(), c?.close()
      }), oc) {
      const g = p => {
        const m = p.changed.find(y => y.name === e),
          v = p.deleted.find(y => y.name === e);
        m && f({
          value: m.value
        }), v && f({
          value: null
        })
      };
      oc.addEventListener("change", g), d && Do(() => oc.removeEventListener("change", g))
    } else c && (c.onmessage = ({
      data: g
    }) => f(g));
    n.watch && Qe(l, () => {
      h || u()
    }, {
      deep: n.watch !== "shallow"
    }), o && u(o)
  }
  return l
}

function u_(e = {}) {
  return BL(document.cookie, e)
}

function $L(e, t, n = {}) {
  return t == null ? c_(e, t, {
    ...n,
    maxAge: -1
  }) : c_(e, t, n)
}

function VL(e, t, n = {}) {
  document.cookie = $L(e, t, n)
}
const f_ = 2147483647;

function zL(e, t, n) {
  let r, i, s = 0;
  const o = n ? et(e) : {
    value: e
  };
  return Js() && Do(() => {
    i?.(), clearTimeout(r)
  }), Qy((a, l) => {
    n && (i = Qe(o, l));

    function c() {
      s = 0, clearTimeout(r);
      const u = t - s,
        f = u < f_ ? u : f_;
      r = setTimeout(() => {
        if (s += f, s < t) return c();
        o.value = void 0, l()
      }, f)
    }
    return {
      get() {
        return a(), o.value
      },
      set(u) {
        c(), o.value = u, l()
      }
    }
  })
}

function qL(e) {
  if (e?.__asyncLoader && !e.__asyncResolved) return e.__asyncLoader()
}
async function _w(e, t = Tt()) {
  const {
    path: n,
    matched: r
  } = t.resolve(e);
  if (!r.length || (t._routePreloaded ||= new Set, t._routePreloaded.has(n))) return;
  const i = t._preloadPromises ||= [];
  if (i.length > 4) return Promise.all(i).then(() => _w(e, t));
  t._routePreloaded.add(n);
  for (const s of r) {
    const o = s.components?.default;
    if (typeof o != "function") continue;
    const a = Promise.resolve(o()).catch(() => {}).finally(() => i.splice(i.indexOf(a)));
    i.push(a)
  }
  await Promise.all(i)
}

function GL(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = nl(sessionStorage.getItem("nuxt:reload") || "{}")
  } catch {}
  if (e.force || n?.path !== t || n?.expires < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({
        path: t,
        expires: Date.now() + (e.ttl ?? 1e4)
      }))
    } catch {}
    if (e.persistState) try {
      sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
        state: Ae().payload.state
      }))
    } catch {}
    window.location.pathname !== t ? window.location.href = t : window.location.reload()
  }
}

function Hp(e) {
  return new URL(globalThis.location.href)
}
const KL = (...e) => e.find(t => t !== void 0);

function YL(e) {
  const t = e.componentName || "NuxtLink";

  function n(s) {
    return !Nd && typeof s == "string" && s.startsWith("#")
  }

  function r(s, o, a) {
    const l = a ?? e.trailingSlash;
    if (!s || l !== "append" && l !== "remove") return s;
    if (typeof s == "string") return ac(s, l);
    const c = "path" in s && s.path !== void 0 ? s.path : o(s).path;
    return {
      ...s,
      name: void 0,
      path: ac(c, l)
    }
  }

  function i(s) {
    const o = Tt(),
      a = Dn(),
      l = be(() => !!s.target && s.target !== "_self"),
      c = be(() => {
        const m = s.to || s.href || "";
        return typeof m == "string" && eo(m, {
          acceptRelative: !0
        })
      }),
      u = dg("RouterLink"),
      f = typeof u != "string" ? u.useLink : void 0,
      h = be(() => {
        if (s.external) return !0;
        const m = s.to || s.href || "";
        return typeof m == "object" ? !1 : m === "" || c.value
      }),
      d = be(() => {
        const m = s.to || s.href || "";
        return h.value ? m : r(m, o.resolve, s.trailingSlash)
      }),
      g = h.value ? void 0 : f?.({
        ...s,
        to: d
      }),
      p = be(() => {
        const m = s.trailingSlash ?? e.trailingSlash;
        if (!d.value || c.value || n(d.value)) return d.value;
        if (h.value) {
          const v = typeof d.value == "object" && "path" in d.value ? kd(d.value) : d.value,
            y = typeof v == "object" ? o.resolve(v).href : v;
          return ac(y, m)
        }
        return typeof d.value == "object" ? o.resolve(d.value)?.href ?? null : ac(sp(a.app.baseURL, d.value), m)
      });
    return {
      to: d,
      hasTarget: l,
      isAbsoluteUrl: c,
      isExternal: h,
      href: p,
      isActive: g?.isActive ?? be(() => d.value === o.currentRoute.value.path),
      isExactActive: g?.isExactActive ?? be(() => d.value === o.currentRoute.value.path),
      route: g?.route ?? be(() => o.resolve(d.value)),
      async navigate(m) {
        await Td(p.value, {
          replace: s.replace,
          external: h.value || l.value
        })
      }
    }
  }
  return mt({
    name: t,
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
      prefetchOn: {
        type: [String, Object],
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
      },
      trailingSlash: {
        type: String,
        default: void 0,
        required: !1
      }
    },
    useLink: i,
    setup(s, {
      slots: o
    }) {
      const a = Tt(),
        {
          to: l,
          href: c,
          navigate: u,
          isExternal: f,
          hasTarget: h,
          isAbsoluteUrl: d
        } = i(s),
        g = Jr(!1),
        p = et(null),
        m = _ => {
          p.value = s.custom ? _?.$el?.nextElementSibling : _?.$el
        };

      function v(_) {
        return !g.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === _ : s.prefetchOn?.[_] ?? e.prefetchOn?.[_]) && (s.prefetch ?? e.prefetch) !== !1 && s.noPrefetch !== !0 && s.target !== "_blank" && !JL()
      }
      async function y(_ = Ae()) {
        if (g.value) return;
        g.value = !0;
        const b = typeof l.value == "string" ? l.value : f.value ? kd(l.value) : a.resolve(l.value).fullPath,
          w = f.value ? new URL(b, window.location.href).href : b;
        await Promise.all([_.hooks.callHook("link:prefetch", w).catch(() => {}), !f.value && !h.value && _w(l.value, a).catch(() => {})])
      }
      if (v("visibility")) {
        const _ = Ae();
        let b, w = null;
        Bn(() => {
          const S = XL();
          Qu(() => {
            b = lh(() => {
              p?.value?.tagName && (w = S.observe(p.value, async () => {
                w?.(), w = null, await y(_)
              }))
            })
          })
        }), Mi(() => {
          b && OL(b), w?.(), w = null
        })
      }
      return () => {
        if (!f.value && !h.value && !n(l.value)) {
          const w = {
            ref: m,
            to: l.value,
            activeClass: s.activeClass || e.activeClass,
            exactActiveClass: s.exactActiveClass || e.exactActiveClass,
            replace: s.replace,
            ariaCurrentValue: s.ariaCurrentValue,
            custom: s.custom
          };
          return s.custom || (v("interaction") && (w.onPointerenter = y.bind(null, void 0), w.onFocus = y.bind(null, void 0)), g.value && (w.class = s.prefetchedClass || e.prefetchedClass), w.rel = s.rel || void 0), Vt(dg("RouterLink"), w, o.default)
        }
        const _ = s.target || null,
          b = KL(s.noRel ? "" : s.rel, e.externalRelAttribute, d.value || h.value ? "noopener noreferrer" : "") || null;
        return s.custom ? o.default ? o.default({
          href: c.value,
          navigate: u,
          prefetch: y,
          get route() {
            if (!c.value) return;
            const w = new URL(c.value, window.location.href);
            return {
              path: w.pathname,
              fullPath: w.pathname,
              get query() {
                return ip(w.search)
              },
              hash: w.hash,
              params: {},
              name: void 0,
              matched: [],
              redirectedFrom: void 0,
              meta: {},
              href: c.value
            }
          },
          rel: b,
          target: _,
          isExternal: f.value || h.value,
          isActive: !1,
          isExactActive: !1
        }) : null : Vt("a", {
          ref: p,
          href: c.value || null,
          rel: b,
          target: _,
          onClick: w => {
            if (!(f.value || h.value)) return w.preventDefault(), s.replace ? a.replace(c.value) : a.push(c.value)
          }
        }, o.default?.())
      }
    }
  })
}
const d_ = YL(AC);

function ac(e, t) {
  const n = t === "append" ? uv : iu;
  return eo(e) && !e.startsWith("http") ? e : n(e, !0)
}

function XL() {
  const e = Ae();
  if (e._observer) return e._observer;
  let t = null;
  const n = new Map,
    r = (s, o) => (t ||= new IntersectionObserver(a => {
      for (const l of a) {
        const c = n.get(l.target);
        (l.isIntersecting || l.intersectionRatio > 0) && c && c()
      }
    }), n.set(s, o), t.observe(s), () => {
      n.delete(s), t?.unobserve(s), n.size === 0 && (t?.disconnect(), t = null)
    });
  return e._observer = {
    observe: r
  }
}
const QL = /2g/;

function JL() {
  const e = navigator.connection;
  return !!(e && (e.saveData || QL.test(e.effectiveType)))
}
const ZL = Je({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
      const t = CL(),
        n = Se("site-config");
      {
        const r = n.value || window.__NUXT_SITE_CONFIG__ || {};
        for (const i in r) i[0] !== "_" && t.push({
          [i]: r[i],
          _priority: r._priority?.[i] || -1
        })
      }
      return {
        provide: {
          nuxtSiteConfig: t
        }
      }
    }
  }),
  eP = Je({
    name: "nuxt:payload",
    setup(e) {
      const t = new Set;
      Tt().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const i = await rm(n.path);
        if (i) {
          for (const s of t) delete e.static.data[s];
          for (const s in i.data) s in e.static.data || t.add(s), e.static.data[s] = i.data[s]
        }
      }), Qu(() => {
        e.hooks.hook("link:prefetch", async n => {
          const {
            hostname: r
          } = new URL(n, window.location.href);
          r === window.location.hostname && await rm(n).catch(() => {
            console.warn("[nuxt] Error preloading payload for", n)
          })
        }), navigator.connection?.effectiveType !== "slow-2g" && setTimeout(zu, 1e3)
      })
    }
  }),
  tP = Je(() => {
    const e = Tt();
    Qu(() => {
      e.beforeResolve(async () => {
        await new Promise(t => {
          setTimeout(t, 100), requestAnimationFrame(() => {
            setTimeout(t, 0)
          })
        })
      })
    })
  }),
  nP = Je(e => {
    let t;
    async function n() {
      let r;
      try {
        r = await zu()
      } catch (i) {
        const s = i;
        if (!("status" in s && (s.status === 404 || s.status === 403))) throw s
      }
      t && clearTimeout(t), t = setTimeout(n, $g);
      try {
        const i = await $fetch(np("builds/latest.json") + `?${Date.now()}`);
        i.id !== r?.id && (e.hooks.callHook("app:manifest:update", i), t && clearTimeout(t))
      } catch {}
    }
    Qu(() => {
      t = setTimeout(n, $g)
    })
  }),
  rP = Je({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Tt(),
        n = Dn(),
        r = new Set;
      t.beforeEach(() => {
        r.clear()
      }), e.hook("app:chunkError", ({
        error: s
      }) => {
        r.add(s)
      });

      function i(s) {
        const o = sp(n.app.baseURL, s.fullPath);
        GL({
          path: o,
          persistState: !0
        })
      }
      e.hook("app:manifest:update", () => {
        t.beforeResolve(i)
      }), t.onError((s, o) => {
        r.has(s) && i(o)
      })
    }
  }),
  iP = Je({
    name: "nuxt:global-components"
  }),
  lc = {},
  sP = Je({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Tt();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async n => {
          const r = n?.meta?.layout;
          r && typeof lc[r] == "function" && await lc[r]()
        })
      }), e.hooks.hook("link:prefetch", n => {
        if (eo(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const i = r.meta.layout;
        let s = hp(r.meta.middleware);
        s = s.filter(o => typeof o == "string");
        for (const o of s) typeof ah[o] == "function" && ah[o]();
        typeof i == "string" && i in lc && qL(lc[i])
      })
    }
  });

function h_(e) {
  return e?.defaultForDomains?.[0] || e?.domain || e?.domains?.[0]
}

function oP(e, t) {
  return h_(e) || h_(t)
}
const aP = ["i18n:plugin", "i18n:plugin:ssg-detect", "i18n:plugin:route-locale-detect"];

function lP() {
  return Ae().$nuxtSiteConfig
}

function yw(e) {
  const t = Er(e.locales).find(n => n.code === e.defaultLocale);
  return t?.language || t?.iso || e.defaultLocale
}

function cP(e, t) {
  const n = Er(e.baseUrl) || void 0;
  if (!Er(e.differentDomains)) return n;
  const i = Er(e.locales).find(o => o.code === Er(e.defaultLocale)),
    s = oP(Er(e.localeProperties), i);
  return s ? Ni(s, {
    strict: !0
  }) ? s : `${t}//${s}` : n
}

function uP(e) {
  const t = Er(e.localeProperties);
  return t.language ? t.language : yw(e)
}

function fP(e) {
  return e.te("nuxtSiteConfig.description") ? e.t("nuxtSiteConfig.description") : void 0
}

function dP(e) {
  return e.te("nuxtSiteConfig.name") ? e.t("nuxtSiteConfig.name") : void 0
}
const hP = Je({
    name: "nuxt-site-config:i18n",
    dependsOn: aP,
    setup(e) {
      const t = e.$i18n;
      if (!t) return;
      const n = lP(),
        r = Hp().protocol,
        i = Er(t.baseUrl);
      if (i) {
        const f = n.get({
            resolveRefs: !0
          }),
          h = f.url;
        if (h && !h.includes("localhost")) {
          const d = eu(i, "https://"),
            g = eu(h, "https://");
          d.host !== g.host && f.env === "production" && console.error(`[Nuxt Site Config] Your I18n baseUrl \`${d.host}\` doesn't match your site url ${g.host}. This will cause production SEO issues. Either provide a matching baseUrl or remove the site url config.`)
        }
      }
      const s = be(() => yw(t)),
        o = be(() => cP(t, r)),
        a = be(() => uP(t)),
        l = be(() => fP(t)),
        c = be(() => dP(t));
      let u;
      Qe(t.locale, () => {
        u && u(), u = n.push({
          _priority: AL.build,
          _context: "@nuxtjs/i18n",
          url: o,
          defaultLocale: s,
          currentLocale: a,
          description: l,
          name: c
        })
      }, {
        immediate: !0
      })
    }
  }),
  pP = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Cloudflare-Healthchecks|Cloudflare-Traffic-Manager|CloudFlare-Prefetch|Cloudflare-SSLDetector|https:\/\/developers\.cloudflare\.com\/security-center\/|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|OAI-SearchBot|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|l9explore|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot|facebookcatalog\/|meta-externalads\/|meta-externalagent\/|meta-externalfetcher\/|AcademicBotRTU|KeybaseBot|Lemmy|CookieHubScan|Hydrozen\.io|HTTP Banner Detection|SummalyBot|MicrosoftPreview\/|GeedoProductSearch|TikTokSpider|OnCrawl\/|sindresorhus\/got|CensysInspect\/|SBIntuitionsBot\/|sitebulb|YextBot\/|DatadogSynthetics|Google-Ads-Conversions/),
  gP = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
  mP = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
  _P = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
  yP = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function vP(e) {
  return gP.test(e) || mP.test(e.slice(0, 4))
}

function bP(e) {
  return _P.test(e) || yP.test(e.slice(0, 4))
}

function wP(e) {
  return /iPad|iPhone|iPod/.test(e)
}

function vw(e) {
  return /android/i.test(e)
}

function AP(e) {
  return /Windows/.test(e)
}

function SP(e) {
  return /Mac OS X/.test(e)
}

function EP(e) {
  return /Linux/i.test(e) && !vw(e)
}
const CP = [{
  name: "Samsung",
  regex: /SamsungBrowser/i
}, {
  name: "Edge",
  regex: /edg(?:[ea]|ios)?\//i
}, {
  name: "Firefox",
  regex: /firefox|iceweasel|fxios/i
}, {
  name: "Chrome",
  regex: /chrome|crios|crmo/i
}, {
  name: "Safari",
  regex: /safari|applewebkit/i
}];

function TP(e) {
  for (const t of CP)
    if (t.regex.test(e)) return t.name;
  return ""
}

function kP(e, t = {}) {
  let n = !1,
    r = !1,
    i = !1,
    s = !1;
  if (e === "Amazon CloudFront") t["cloudfront-is-mobile-viewer"] === "true" && (n = !0, r = !0), t["cloudfront-is-tablet-viewer"] === "true" && (n = !1, r = !0), t["cloudfront-is-desktop-viewer"] === "true" && (n = !1, r = !1), t["cloudfront-is-ios-viewer"] === "true" && (i = !0), t["cloudfront-is-android-viewer"] === "true" && (s = !0);
  else if (t && t["cf-device-type"]) switch (t["cf-device-type"]) {
    case "mobile":
      n = !0, r = !0;
      break;
    case "tablet":
      n = !1, r = !0;
      break;
    case "desktop":
      n = !1, r = !1;
      break
  } else n = vP(e), r = bP(e), i = wP(e), s = vw(e);
  const o = AP(e),
    a = SP(e),
    l = EP(e),
    c = TP(e),
    u = c === "Safari",
    f = c === "Firefox",
    h = c === "Edge",
    d = c === "Chrome",
    g = c === "Samsung",
    p = pP.test(e);
  return {
    userAgent: e,
    isMobile: n,
    isMobileOrTablet: r,
    isTablet: !n && r,
    isDesktop: !r,
    isIos: i,
    isAndroid: s,
    isWindows: o,
    isLinux: l,
    isMacOS: a,
    isApple: a || i,
    isDesktopOrTablet: !n,
    isSafari: u,
    isFirefox: f,
    isEdge: h,
    isChrome: d,
    isSamsung: g,
    isCrawler: p
  }
}
const RP = Je(() => {
  const t = Dn().public.device.defaultUserAgent;
  let n;
  {
    const r = navigator.userAgent || t;
    n = ni(kP(r))
  }
  return {
    provide: {
      device: n
    }
  }
});
/*!
 * shared v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function xP(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const vu = typeof window < "u",
  cs = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
  LP = (e, t, n) => PP({
    l: e,
    k: t,
    s: n
  }),
  PP = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
  Ot = e => typeof e == "number" && isFinite(e),
  OP = e => Zu(e) === "[object Date]",
  bu = e => Zu(e) === "[object RegExp]",
  Ju = e => He(e) && Object.keys(e).length === 0,
  Ct = Object.assign,
  IP = Object.create,
  Xe = (e = null) => IP(e);

function p_(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;")
}

function g_(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function MP(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, i, s) => `${i}="${g_(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, i, s) => `${i}='${g_(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(r => {
    e = e.replace(r, "$1javascript&#58;")
  }), e
}
const NP = Object.prototype.hasOwnProperty;

function Tr(e, t) {
  return NP.call(e, t)
}
const vt = Array.isArray,
  st = e => typeof e == "function",
  ae = e => typeof e == "string",
  ht = e => typeof e == "boolean",
  We = e => e !== null && typeof e == "object",
  DP = e => We(e) && st(e.then) && st(e.catch),
  bw = Object.prototype.toString,
  Zu = e => bw.call(e),
  He = e => Zu(e) === "[object Object]",
  FP = e => e == null ? "" : vt(e) || He(e) && e.toString === bw ? JSON.stringify(e, null, 2) : String(e);

function Wp(e, t = "") {
  return e.reduce((n, r, i) => i === 0 ? n + r : n + t + r, "")
}
const cc = e => !We(e) || vt(e);

function Io(e, t) {
  if (cc(e) || cc(t)) throw new Error("Invalid value");
  const n = [{
    src: e,
    des: t
  }];
  for (; n.length;) {
    const {
      src: r,
      des: i
    } = n.pop();
    Object.keys(r).forEach(s => {
      s !== "__proto__" && (We(r[s]) && !We(i[s]) && (i[s] = Array.isArray(r[s]) ? [] : Xe()), cc(i[s]) || cc(r[s]) ? i[s] = r[s] : n.push({
        src: r[s],
        des: i[s]
      }))
    })
  }
}

function ch(e, t = e.getCurrentLanguage(), n = e.getCurrentDirection()) {
  const r = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (e.dir && (r.htmlAttrs.dir = n), e.lang && t && (r.htmlAttrs.lang = t), e.seo) {
    const i = UP(e);
    r.link = r.link.concat(i, WP(e)), r.meta = r.meta.concat(jP(e), $P(e), VP(e, e.locales.map(s => s.language || s.code)))
  }
  return r
}

function BP(e) {
  const t = new Map;
  for (const n of e) {
    if (!n.language) {
      console.warn("Locale `language` ISO code is required to generate alternate link");
      continue
    }
    const [r, i] = n.language.split("-");
    r && i && (n.isCatchallLocale || !t.has(r)) && t.set(r, n), t.set(n.language, n)
  }
  return t
}

function UP(e) {
  if (!e.hreflangLinks) return [];
  const t = [],
    n = BP(e.locales);
  for (const [r, i] of n.entries()) {
    const s = HP(r, i, e);
    s && (t.push(s), e.defaultLocale && e.defaultLocale === i.code && t[0].hreflang !== "x-default" && t.unshift({
      [e.key]: "i18n-xd",
      rel: "alternate",
      href: s.href,
      hreflang: "x-default"
    }))
  }
  return t
}

function HP(e, t, n, r = n.strictCanonicals ? n.getRouteWithoutQuery() : void 0) {
  const i = n.getLocalizedRoute(t.code, r);
  if (!i) return;
  const s = ep(Ni(i) ? i : rl(n.baseUrl, i), n.strictCanonicals ? Aw(n) : {});
  return {
    [n.key]: `i18n-alt-${e}`,
    rel: "alternate",
    href: s,
    hreflang: e
  }
}

function ww(e, t = e.getCurrentRoute()) {
  const n = e.getLocaleRoute(Object.assign({}, t, {
    path: void 0,
    name: e.getRouteBaseName(t)
  }));
  return n ? ep(rl(e.baseUrl, n.path), Aw(e)) : ""
}

function WP(e, t = ww(e)) {
  return t ? [{
    [e.key]: "i18n-can",
    rel: "canonical",
    href: t
  }] : []
}

function Aw(e, t = e.getCurrentRoute()) {
  const r = e.getLocaleRoute(Object.assign({}, t, {
      path: void 0,
      name: e.getRouteBaseName(t)
    }))?.query ?? {},
    i = {};
  for (const s of e.canonicalQueries.filter(o => o in r)) {
    i[s] ??= [];
    for (const o of zP(r[s])) i[s].push(o || "")
  }
  return i
}

function jP(e, t = ww(e)) {
  return t ? [{
    [e.key]: "i18n-og-url",
    property: "og:url",
    content: t
  }] : []
}

function $P(e, t = e.getCurrentLanguage()) {
  return t ? [{
    [e.key]: "i18n-og",
    property: "og:locale",
    content: Sw(t)
  }] : []
}

function VP(e, t, n = e.getCurrentLanguage()) {
  return t.filter(i => i && i !== n).map(i => ({
    [e.key]: `i18n-og-alt-${i}`,
    property: "og:locale:alternate",
    content: Sw(i)
  }))
}

function Sw(e = "") {
  return e.replace(/-/g, "_")
}

function zP(e) {
  return Array.isArray(e) ? e : [e]
}

function wu(e, t, n = e.getLocale()) {
  if (ae(t) && Ni(t, {
      acceptRelative: !0
    })) return t;
  try {
    return Cw(e, t, n).fullPath
  } catch {
    return ""
  }
}

function Ew(e, t, n = e.getLocale()) {
  try {
    return Cw(e, t, n)
  } catch {
    return
  }
}

function qP(e) {
  if (!ae(e)) return Ct({}, e);
  if (e[0] === "/") {
    const {
      pathname: t,
      search: n,
      hash: r
    } = vd(e);
    return {
      path: t,
      query: Y0(n),
      hash: r
    }
  }
  return {
    name: e
  }
}

function Cw(e, t, n) {
  const r = qP(t),
    i = e.router.resolve(e.resolveLocalizedRouteObject(r, n));
  return i.name ? i : e.router.resolve(t)
}

function jp(e, t, n = e.router.currentRoute.value) {
  const r = e.getRouteBaseName(n);
  if (!r) return "";
  const i = {
      name: r,
      params: Ct({}, n.params, e.getLocalizedDynamicParams(t)),
      fullPath: n.fullPath,
      query: n.query,
      hash: n.hash,
      path: n.path,
      meta: n.meta
    },
    s = wu(e, i, t);
  return e.afterSwitchLocalePath(s, t)
}

function uh(e, t, n = e.getLocale(), r = e.getLocales(), i = e.getBaseUrl()) {
  const s = r.find(a => a.code === n) || {},
    o = typeof t.seo == "object" && t.seo?.canonicalQueries || [];
  return i || console.warn("I18n `baseUrl` is required to generate valid SEO tag links."), {
    ...t,
    key: "id",
    locales: r,
    baseUrl: i,
    canonicalQueries: o,
    hreflangLinks: e.routingOptions.hreflangLinks,
    defaultLocale: e.routingOptions.defaultLocale,
    strictCanonicals: e.routingOptions.strictCanonicals,
    getRouteBaseName: e.getRouteBaseName,
    getCurrentRoute: () => e.router.currentRoute.value,
    getCurrentLanguage: () => s.language,
    getCurrentDirection: () => s.dir || "ltr",
    getLocaleRoute: a => Ew(e, a),
    getLocalizedRoute: (a, l) => jp(e, a, l),
    getRouteWithoutQuery: () => {
      try {
        return Ct({}, e.router.resolve({
          query: {}
        }), {
          meta: e.router.currentRoute.value.meta
        })
      } catch {
        return
      }
    }
  }
}

function GP(e, {
  dir: t = !0,
  lang: n = !0,
  seo: r = !0
}) {
  return ch(uh(e, {
    dir: t,
    lang: n,
    seo: r
  }))
}

function KP(e, t) {
  const n = et(ch(uh(e, t)));
  {
    const r = Qe([() => e.router.currentRoute.value, () => e.getLocale()], () => {
      n.value = ch(uh(e, t))
    });
    Js() && Do(r)
  }
  return n
}

function YP(e = 0) {
  return t => {
    const i = (typeof t == "string" ? t : t.pathname).split("?")[0].split("/");
    return i[0] === "" && i.shift(), i.length > e && i[e] || ""
  }
}
const ef = "___",
  XP = "default",
  XF = ef + XP;

function Tw(e) {
  return typeof e == "string" ? e : e != null ? e.toString() : ""
}

function qf(e) {
  return Tw(typeof e == "object" ? e?.name : e).split(ef)[0]
}

function QP(e, t, n) {
  return e + ef + t
}
const JP = YP(0),
  kw = e => JP(e),
  ZP = e => e.split(ef).at(1) ?? "";

function eO(e) {
  return String(typeof e != "object" ? e : e?.name || e?.path || "")
}

function tO(e) {
  const t = eO(e);
  return t[0] === "/" ? kw(t) : ZP(t)
}

function nO(e) {
  return (t, n) => QP(Tw(t), n)
}

function rO(e) {
  return t => e.resolve(t)
}
const _l = ["en"],
  Au = {
    en: [{
      key: "locale_en_46json_5822dfa6",
      load: () => jt(() => import("./sguamX7y.js"), [], import.meta.url),
      cache: !0
    }]
  },
  iO = [() => jt(() => import("./CHw6FAE2.js"), [], import.meta.url)],
  xl = [{
    name: "En",
    code: "en",
    language: void 0
  }],
  Rw = new Map,
  sO = lv((e, t, n) => {
    if (t === "messages" || t === "datetimeFormats" || t === "numberFormats") return e[t] ??= Xe(null), Io(n, e[t]), !0
  });
async function oO(e) {
  const t = Ae();
  let n = {
    messages: Xe(null)
  };
  for (const r of e) {
    const i = await r().then(o => o.default),
      s = st(i) ? await t.runWithContext(() => i()) : i;
    n = sO(Xe(null), s, n)
  }
  return n.fallbackLocale ??= !1, n
}
const aO = e => Zu(e) === "[object Module]",
  lO = e => aO(e) || !1;
async function cO(e, t) {
  const n = Ae();
  try {
    const r = await n.runWithContext(t.load).then(i => lO(i) ? i.default : i);
    return st(r) ? await n.runWithContext(() => r(e)) : r
  } catch (r) {
    throw new Error(`Failed loading locale (${e}): ` + r.message)
  }
}
async function uO(e, t = []) {
  const n = Ae(),
    r = {};
  for (const i of t) {
    const s = fO(i),
      o = s || await n.runWithContext(async () => await cO(e, i));
    !s && i.cache !== !1 && Rw.set(i.key, {
      ttl: Date.now() + 86400 * 1e3,
      value: o
    }), Io(o, r)
  }
  return r
}

function fO(e) {
  if (e.cache === !1) return;
  const t = Rw.get(e.key);
  if (t != null) return t.ttl > Date.now() ? t.value : void 0
}

function $p(e) {
  return e != null && "global" in e && "mode" in e ? e.global : e
}

function uc(e) {
  const t = $p(e);
  return "__composer" in t ? t.__composer : t
}

function tf(e, t) {
  return e ? e.$config.public.i18n : Dn().public.i18n
}

function Ll(e) {
  const t = tf(e).detectBrowserLanguage,
    n = t || {};
  return {
    ...n,
    enabled: !!t,
    cookieKey: n.cookieKey || "i18n_redirected"
  }
}

function dO(e) {
  if (e) return {
    path: "/" + (ae(e) ? e : e.path).replace(/^\//, ""),
    code: !ae(e) && e.statusCode || 302
  }
}

function hO(e) {
  return Array.isArray(e) ? e : [e]
}

function pO(e, t, n) {
  const r = (s = "") => s.replace(/https?:\/\//, ""),
    i = e.filter(s => r(s.domain) === t || hO(s.domains).includes(t));
  return i.length <= 1 ? i[0]?.code : i.find(s => s.code === n)?.code || i.find(s => s.defaultForDomains?.includes(t) ?? s.domainDefault)?.code
}

function gO(e, t, n) {
  const r = xl.find(s => s.code === n),
    i = e?.[n]?.domain || r?.domain || r?.domains?.find(s => s === t.host);
  if (i) return Ni(i, {
    strict: !0
  }) ? i : t.protocol + "//" + i
}

function mO(e) {
  const t = {};
  for (const n of _l) {
    const r = _O(e, [n]),
      i = yO(n, r);
    t[n] = {
      fallbacks: r,
      cacheable: i
    }
  }
  return t
}

function _O(e, t) {
  if (e === !1) return [];
  if (vt(e)) return e;
  let n = [];
  if (ae(e)) return t.every(i => i !== e) && n.push(e), n;
  const r = [...t, "default"];
  for (const i of r) i in e && (n = [...n, ...e[i].filter(Boolean)]);
  return n
}

function m_(e) {
  return Au[e] != null && Au[e].every(t => t.cache !== !1)
}

function yO(e, t) {
  return m_(e) && t.every(n => m_(n))
}

function vO(e) {
  return xl.find(t => !!t.defaultForDomains?.includes(e))?.code
}
const zs = e => _l.includes(e || ""),
  __ = e => zs(e) ? e : void 0,
  xw = () => Se("i18n:cached-locale-configs", () => {}),
  Lw = () => Se("i18n:resolved-locale", () => "");

function bO({
  cookieCrossOrigin: e,
  cookieDomain: t,
  cookieSecure: n,
  cookieKey: r
}) {
  const i = new Date;
  return mw(r || "i18n_redirected", {
    path: "/",
    readonly: !1,
    expires: new Date(i.setDate(i.getDate() + 365)),
    sameSite: e ? "none" : "lax",
    domain: t || void 0,
    secure: e || n
  })
}

function wO(e, t, n) {
  const r = $p(t),
    i = tf(e),
    s = Ll(e),
    o = xw(),
    a = bO(s),
    l = new Set,
    c = m => o.value[m],
    u = m => gO(i.domainLocales, Hp(), m),
    f = NO(e, i.baseUrl),
    h = Lw(),
    d = async m => {
      const v = c(m)?.fallbacks ?? [];
      v.includes(m) || v.push(m);
      for (const y of v) {
        const _ = await e.runWithContext(() => uO(y, Au[y]));
        r.mergeLocaleMessage(y, _)
      }
    }, g = async m => {
      if (!(m in Au)) return;
      const v = c(m)?.cacheable ? {} : {
          "Cache-Control": "no-cache"
        },
        y = await $fetch(`/_i18n/KvLPCQiy/${m}/messages.json`, {
          headers: v
        });
      for (const _ of Object.keys(y)) r.mergeLocaleMessage(_, y[_])
    }, p = {
      vueI18n: t,
      initial: !0,
      preloaded: !1,
      config: i,
      rootRedirect: dO(i.rootRedirect),
      redirectStatusCode: i.redirectStatusCode ?? 302,
      dynamicResourcesSSG: !1,
      getDefaultLocale: () => n,
      getLocale: () => re(r.locale),
      setLocale: async m => {
        const v = p.getLocale();
        m === v || !zs(m) || (at(r.locale) ? r.locale.value = m : r.locale = m, await e.callHook("i18n:localeSwitched", {
          newLocale: m,
          oldLocale: v
        }), h.value = m)
      },
      setLocaleSuspend: async m => {
        zs(m) && (p.vueI18n.__pendingLocale = m, p.vueI18n.__pendingLocalePromise = new Promise(v => {
          p.vueI18n.__resolvePendingLocalePromise = async () => {
            p.setCookieLocale(m), await p.setLocale(m), p.vueI18n.__pendingLocale = void 0, v()
          }
        }), (e.isHydrating || !p.config.skipSettingLocaleOnNavigate) && await p.vueI18n.__resolvePendingLocalePromise?.())
      },
      getLocales: () => re(r.locales).map(m => ae(m) ? {
        code: m
      } : m),
      setCookieLocale: m => {
        s.useCookie && zs(m) && (a.value = m)
      },
      getBaseUrl: m => rl(m && u(m) || f(), e.$config.app.baseURL),
      loadMessages: async m => {
        if (!(e.isHydrating && l.has(m))) try {
          return p.dynamicResourcesSSG ? await d(m) : await g(m)
        } catch (v) {
          console.warn(`Failed to load messages for locale "${m}"`, v)
        } finally {
          l.add(m)
        }
      },
      composableCtx: void 0
    };
  return p.composableCtx = PO(p, e), p
}

function nf(e) {
  if (e._nuxtI18n == null) throw new Error("Nuxt I18n context has not been set up yet.");
  return e._nuxtI18n
}

function AO(e, t) {
  const n = [];
  for (const [r, i] of t.entries()) {
    const s = e.find(o => o.language?.toLowerCase() === i.toLowerCase());
    if (s) {
      n.push({
        code: s.code,
        score: 1 - r / t.length
      });
      break
    }
  }
  for (const [r, i] of t.entries()) {
    const s = i.split("-")[0].toLowerCase(),
      o = e.find(a => a.language?.split("-")[0].toLowerCase() === s);
    if (o) {
      n.push({
        code: o.code,
        score: .999 - r / t.length
      });
      break
    }
  }
  return n
}

function SO(e, t) {
  return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}

function EO(e, t) {
  return AO(e.map(r => ({
    code: r.code,
    language: r.language || r.code
  })), t).sort(SO).at(0)?.code ?? ""
}
const CO = (e, t) => mw(t).value || void 0,
  TO = (e, t) => tO(t),
  kO = e => EO(xl, navigator.languages),
  RO = (e, t, n) => {
    const r = new URL(window.location.href).host,
      i = xl.map(s => ({
        ...s,
        domain: n[s.code]?.domain ?? s.domain
      }));
    return pO(i, r, kw(t))
  },
  rf = (e, t, n) => {
    const r = tf(n);
    return {
      cookie: () => CO(e, t.cookieKey),
      header: () => {},
      navigator: () => kO(),
      host: i => RO(e, i, r.domainLocales),
      route: i => TO(e, i)
    }
  },
  xO = e => !!e.path && !e.name;

function Jo(e) {
  const t = e?._nuxtI18n?.composableCtx;
  if (!t) throw new Error("i18n context is not initialized. Ensure the i18n plugin is installed and the composable is used within a Vue component or setup function.");
  return t
}
const LO = Q0;

function PO(e, t = Ae()) {
  const n = Tt();
  rf(void 0, Ll(t), t);
  const r = e.getDefaultLocale(),
    i = nO();

  function s(c, u) {
    c.name = qf(c.name || n.currentRoute.value);
    const f = i(c.name, u);
    return n.hasRoute(f) && (c.name = f), c
  }
  const o = rO(n);

  function a(c, u) {
    const f = o(c, u),
      h = qf(f);
    return h ? (f.name = i(h, u), f) : (MO(u, r) && (f.path = "/" + u + f.path), f.path = LO(f.path, !0), f)
  }
  const l = {
    router: n,
    _head: void 0,
    get head() {
      return this._head ??= kl({}), this._head
    },
    metaState: {
      htmlAttrs: {},
      meta: [],
      link: []
    },
    seoSettings: {
      dir: !1,
      lang: !1,
      seo: !1
    },
    localePathPayload: OO(),
    routingOptions: {
      defaultLocale: r,
      strictCanonicals: e.config.experimental.alternateLinkCanonicalQueries ?? !0,
      hreflangLinks: !0
    },
    getLocale: e.getLocale,
    getLocales: e.getLocales,
    getBaseUrl: e.getBaseUrl,
    getRouteBaseName: qf,
    getRouteLocalizedParams: () => n.currentRoute.value.meta.nuxtI18nInternal ?? {},
    getLocalizedDynamicParams: c => l.getRouteLocalizedParams()?.[c],
    afterSwitchLocalePath: (c, u) => (l.getRouteLocalizedParams(), c),
    resolveLocalizedRouteObject: (c, u) => xO(c) ? a(c, u) : s(c, u)
  };
  return l
}

function OO(e = Ae()) {
  const t = document.querySelector(`[data-nuxt-i18n-slp="${e._id}"]`)?.textContent;
  return JSON.parse(t || "{}")
}
async function fh(e, t) {
  const n = nf(e),
    r = n.getLocale();
  if (t === r && !n.initial) return t;
  const i = {
    oldLocale: r,
    newLocale: t,
    initialSetup: n.initial,
    context: e
  };
  let s = await e.callHook("i18n:beforeLocaleSwitch", i);
  return s != null, s ??= i.newLocale, zs(s) && (t = s), await n.loadMessages(t), await n.setLocaleSuspend(t), t
}

function IO(e, t, n) {
  return !!(e.redirectOn === "root" && t !== "/" || e.redirectOn === "no prefix" && !e.alwaysRedirect && zs(n))
}

function y_(e, t) {
  const n = Ll(e),
    r = rf(void 0, n, e),
    i = nf(e),
    s = ae(t) ? t : t.path;

  function* o() {
    i.initial && n.enabled && !IO(n, s, r.route(s)) && (yield r.cookie(), yield r.header(), yield r.navigator(), yield n.fallbackLocale), yield r.route(t)
  }
  for (const a of o())
    if (a && zs(a)) return a;
  return i.getLocale() || i.getDefaultLocale() || ""
}

function Pw(e, t, n) {
  const r = nf(e),
    i = Jo(e);
  if (t.path === "/" && r.rootRedirect) return Td(wu(i, r.rootRedirect.path, n), {
    redirectCode: r.rootRedirect.code
  });
  if (r.vueI18n.__pendingLocale && Ae()._processingMiddleware || rf(void 0, Ll(e), e).route(t) === n) return;
  const o = jp(i, n, t) || wu(i, t.fullPath, n);
  if (!zE(o, t.fullPath)) return Td(o, {
    redirectCode: r.redirectStatusCode
  })
}

function MO(e, t) {
  return e !== t || !1
}

function NO(e, t, n, r) {
  return st(t) ? () => t(e) : () => t ?? ""
}
/*!
 * message-compiler v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function DO(e, t, n) {
  return {
    line: e,
    column: t,
    offset: n
  }
}

function dh(e, t, n) {
  return {
    start: e,
    end: t
  }
}
const Ye = {
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
    UNEXPECTED_LEXICAL_ANALYSIS: 14
  },
  FO = 17;

function sf(e, t, n = {}) {
  const {
    domain: r,
    messages: i,
    args: s
  } = n, o = e, a = new SyntaxError(String(o));
  return a.code = e, t && (a.location = t), a.domain = r, a
}

function BO(e) {
  throw e
}
const Dr = " ",
  UO = "\r",
  an = `
`,
  HO = "\u2028",
  WO = "\u2029";

function jO(e) {
  const t = e;
  let n = 0,
    r = 1,
    i = 1,
    s = 0;
  const o = A => t[A] === UO && t[A + 1] === an,
    a = A => t[A] === an,
    l = A => t[A] === WO,
    c = A => t[A] === HO,
    u = A => o(A) || a(A) || l(A) || c(A),
    f = () => n,
    h = () => r,
    d = () => i,
    g = () => s,
    p = A => o(A) || l(A) || c(A) ? an : t[A],
    m = () => p(n),
    v = () => p(n + s);

  function y() {
    return s = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n]
  }

  function _() {
    return o(n + s) && s++, s++, t[n + s]
  }

  function b() {
    n = 0, r = 1, i = 1, s = 0
  }

  function w(A = 0) {
    s = A
  }

  function S() {
    const A = n + s;
    for (; A !== n;) y();
    s = 0
  }
  return {
    index: f,
    line: h,
    column: d,
    peekOffset: g,
    charAt: p,
    currentChar: m,
    currentPeek: v,
    next: y,
    peek: _,
    reset: b,
    resetPeek: w,
    skipToPeek: S
  }
}
const ai = void 0,
  $O = ".",
  v_ = "'",
  VO = "tokenizer";

function zO(e, t = {}) {
  const n = t.location !== !1,
    r = jO(e),
    i = () => r.index(),
    s = () => DO(r.line(), r.column(), r.index()),
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
    c = () => l,
    {
      onError: u
    } = t;

  function f(E, k, D, ...F) {
    const Q = c();
    if (k.column += D, k.offset += D, u) {
      const z = n ? dh(Q.startLoc, k) : null,
        N = sf(E, z, {
          domain: VO,
          args: F
        });
      u(N)
    }
  }

  function h(E, k, D) {
    E.endLoc = s(), E.currentType = k;
    const F = {
      type: k
    };
    return n && (F.loc = dh(E.startLoc, E.endLoc)), D != null && (F.value = D), F
  }
  const d = E => h(E, 13);

  function g(E, k) {
    return E.currentChar() === k ? (E.next(), k) : (f(Ye.EXPECTED_TOKEN, s(), 0, k), "")
  }

  function p(E) {
    let k = "";
    for (; E.currentPeek() === Dr || E.currentPeek() === an;) k += E.currentPeek(), E.peek();
    return k
  }

  function m(E) {
    const k = p(E);
    return E.skipToPeek(), k
  }

  function v(E) {
    if (E === ai) return !1;
    const k = E.charCodeAt(0);
    return k >= 97 && k <= 122 || k >= 65 && k <= 90 || k === 95
  }

  function y(E) {
    if (E === ai) return !1;
    const k = E.charCodeAt(0);
    return k >= 48 && k <= 57
  }

  function _(E, k) {
    const {
      currentType: D
    } = k;
    if (D !== 2) return !1;
    p(E);
    const F = v(E.currentPeek());
    return E.resetPeek(), F
  }

  function b(E, k) {
    const {
      currentType: D
    } = k;
    if (D !== 2) return !1;
    p(E);
    const F = E.currentPeek() === "-" ? E.peek() : E.currentPeek(),
      Q = y(F);
    return E.resetPeek(), Q
  }

  function w(E, k) {
    const {
      currentType: D
    } = k;
    if (D !== 2) return !1;
    p(E);
    const F = E.currentPeek() === v_;
    return E.resetPeek(), F
  }

  function S(E, k) {
    const {
      currentType: D
    } = k;
    if (D !== 7) return !1;
    p(E);
    const F = E.currentPeek() === ".";
    return E.resetPeek(), F
  }

  function A(E, k) {
    const {
      currentType: D
    } = k;
    if (D !== 8) return !1;
    p(E);
    const F = v(E.currentPeek());
    return E.resetPeek(), F
  }

  function L(E, k) {
    const {
      currentType: D
    } = k;
    if (!(D === 7 || D === 11)) return !1;
    p(E);
    const F = E.currentPeek() === ":";
    return E.resetPeek(), F
  }

  function T(E, k) {
    const {
      currentType: D
    } = k;
    if (D !== 9) return !1;
    const F = () => {
        const z = E.currentPeek();
        return z === "{" ? v(E.peek()) : z === "@" || z === "|" || z === ":" || z === "." || z === Dr || !z ? !1 : z === an ? (E.peek(), F()) : B(E, !1)
      },
      Q = F();
    return E.resetPeek(), Q
  }

  function O(E) {
    p(E);
    const k = E.currentPeek() === "|";
    return E.resetPeek(), k
  }

  function B(E, k = !0) {
    const D = (Q = !1, z = "") => {
        const N = E.currentPeek();
        return N === "{" || N === "@" || !N ? Q : N === "|" ? !(z === Dr || z === an) : N === Dr ? (E.peek(), D(!0, Dr)) : N === an ? (E.peek(), D(!0, an)) : !0
      },
      F = D();
    return k && E.resetPeek(), F
  }

  function P(E, k) {
    const D = E.currentChar();
    return D === ai ? ai : k(D) ? (E.next(), D) : null
  }

  function W(E) {
    const k = E.charCodeAt(0);
    return k >= 97 && k <= 122 || k >= 65 && k <= 90 || k >= 48 && k <= 57 || k === 95 || k === 36
  }

  function G(E) {
    return P(E, W)
  }

  function X(E) {
    const k = E.charCodeAt(0);
    return k >= 97 && k <= 122 || k >= 65 && k <= 90 || k >= 48 && k <= 57 || k === 95 || k === 36 || k === 45
  }

  function H(E) {
    return P(E, X)
  }

  function q(E) {
    const k = E.charCodeAt(0);
    return k >= 48 && k <= 57
  }

  function K(E) {
    return P(E, q)
  }

  function Z(E) {
    const k = E.charCodeAt(0);
    return k >= 48 && k <= 57 || k >= 65 && k <= 70 || k >= 97 && k <= 102
  }

  function I(E) {
    return P(E, Z)
  }

  function ie(E) {
    let k = "",
      D = "";
    for (; k = K(E);) D += k;
    return D
  }

  function ce(E) {
    let k = "";
    for (;;) {
      const D = E.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D) break;
      if (D === Dr || D === an)
        if (B(E)) k += D, E.next();
        else {
          if (O(E)) break;
          k += D, E.next()
        }
      else k += D, E.next()
    }
    return k
  }

  function ve(E) {
    m(E);
    let k = "",
      D = "";
    for (; k = H(E);) D += k;
    const F = E.currentChar();
    if (F && F !== "}" && F !== ai && F !== Dr && F !== an && F !== "　") {
      const Q = ee(E);
      return f(Ye.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, D + Q), D + Q
    }
    return E.currentChar() === ai && f(Ye.UNTERMINATED_CLOSING_BRACE, s(), 0), D
  }

  function pe(E) {
    m(E);
    let k = "";
    return E.currentChar() === "-" ? (E.next(), k += `-${ie(E)}`) : k += ie(E), E.currentChar() === ai && f(Ye.UNTERMINATED_CLOSING_BRACE, s(), 0), k
  }

  function xe(E) {
    return E !== v_ && E !== an
  }

  function Me(E) {
    m(E), g(E, "'");
    let k = "",
      D = "";
    for (; k = P(E, xe);) k === "\\" ? D += j(E) : D += k;
    const F = E.currentChar();
    return F === an || F === ai ? (f(Ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), F === an && (E.next(), g(E, "'")), D) : (g(E, "'"), D)
  }

  function j(E) {
    const k = E.currentChar();
    switch (k) {
      case "\\":
      case "'":
        return E.next(), `\\${k}`;
      case "u":
        return J(E, k, 4);
      case "U":
        return J(E, k, 6);
      default:
        return f(Ye.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, k), ""
    }
  }

  function J(E, k, D) {
    g(E, k);
    let F = "";
    for (let Q = 0; Q < D; Q++) {
      const z = I(E);
      if (!z) {
        f(Ye.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${k}${F}${E.currentChar()}`);
        break
      }
      F += z
    }
    return `\\${k}${F}`
  }

  function Y(E) {
    return E !== "{" && E !== "}" && E !== Dr && E !== an
  }

  function ee(E) {
    m(E);
    let k = "",
      D = "";
    for (; k = P(E, Y);) D += k;
    return D
  }

  function de(E) {
    let k = "",
      D = "";
    for (; k = G(E);) D += k;
    return D
  }

  function C(E) {
    const k = D => {
      const F = E.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Dr ? D : (D += F, E.next(), k(D))
    };
    return k("")
  }

  function R(E) {
    m(E);
    const k = g(E, "|");
    return m(E), k
  }

  function M(E, k) {
    let D = null;
    switch (E.currentChar()) {
      case "{":
        return k.braceNest >= 1 && f(Ye.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), E.next(), D = h(k, 2, "{"), m(E), k.braceNest++, D;
      case "}":
        return k.braceNest > 0 && k.currentType === 2 && f(Ye.EMPTY_PLACEHOLDER, s(), 0), E.next(), D = h(k, 3, "}"), k.braceNest--, k.braceNest > 0 && m(E), k.inLinked && k.braceNest === 0 && (k.inLinked = !1), D;
      case "@":
        return k.braceNest > 0 && f(Ye.UNTERMINATED_CLOSING_BRACE, s(), 0), D = $(E, k) || d(k), k.braceNest = 0, D;
      default: {
        let Q = !0,
          z = !0,
          N = !0;
        if (O(E)) return k.braceNest > 0 && f(Ye.UNTERMINATED_CLOSING_BRACE, s(), 0), D = h(k, 1, R(E)), k.braceNest = 0, k.inLinked = !1, D;
        if (k.braceNest > 0 && (k.currentType === 4 || k.currentType === 5 || k.currentType === 6)) return f(Ye.UNTERMINATED_CLOSING_BRACE, s(), 0), k.braceNest = 0, V(E, k);
        if (Q = _(E, k)) return D = h(k, 4, ve(E)), m(E), D;
        if (z = b(E, k)) return D = h(k, 5, pe(E)), m(E), D;
        if (N = w(E, k)) return D = h(k, 6, Me(E)), m(E), D;
        if (!Q && !z && !N) return D = h(k, 12, ee(E)), f(Ye.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, D.value), m(E), D;
        break
      }
    }
    return D
  }

  function $(E, k) {
    const {
      currentType: D
    } = k;
    let F = null;
    const Q = E.currentChar();
    switch ((D === 7 || D === 8 || D === 11 || D === 9) && (Q === an || Q === Dr) && f(Ye.INVALID_LINKED_FORMAT, s(), 0), Q) {
      case "@":
        return E.next(), F = h(k, 7, "@"), k.inLinked = !0, F;
      case ".":
        return m(E), E.next(), h(k, 8, ".");
      case ":":
        return m(E), E.next(), h(k, 9, ":");
      default:
        return O(E) ? (F = h(k, 1, R(E)), k.braceNest = 0, k.inLinked = !1, F) : S(E, k) || L(E, k) ? (m(E), $(E, k)) : A(E, k) ? (m(E), h(k, 11, de(E))) : T(E, k) ? (m(E), Q === "{" ? M(E, k) || F : h(k, 10, C(E))) : (D === 7 && f(Ye.INVALID_LINKED_FORMAT, s(), 0), k.braceNest = 0, k.inLinked = !1, V(E, k))
    }
  }

  function V(E, k) {
    let D = {
      type: 13
    };
    if (k.braceNest > 0) return M(E, k) || d(k);
    if (k.inLinked) return $(E, k) || d(k);
    switch (E.currentChar()) {
      case "{":
        return M(E, k) || d(k);
      case "}":
        return f(Ye.UNBALANCED_CLOSING_BRACE, s(), 0), E.next(), h(k, 3, "}");
      case "@":
        return $(E, k) || d(k);
      default: {
        if (O(E)) return D = h(k, 1, R(E)), k.braceNest = 0, k.inLinked = !1, D;
        if (B(E)) return h(k, 0, ce(E));
        break
      }
    }
    return D
  }

  function x() {
    const {
      currentType: E,
      offset: k,
      startLoc: D,
      endLoc: F
    } = l;
    return l.lastType = E, l.lastOffset = k, l.lastStartLoc = D, l.lastEndLoc = F, l.offset = i(), l.startLoc = s(), r.currentChar() === ai ? h(l, 13) : V(r, l)
  }
  return {
    nextToken: x,
    currentOffset: i,
    currentPosition: s,
    context: c
  }
}
const qO = "parser",
  GO = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function KO(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
    }
  }
}

function YO(e = {}) {
  const t = e.location !== !1,
    {
      onError: n
    } = e;

  function r(v, y, _, b, ...w) {
    const S = v.currentPosition();
    if (S.offset += b, S.column += b, n) {
      const A = t ? dh(_, S) : null,
        L = sf(y, A, {
          domain: qO,
          args: w
        });
      n(L)
    }
  }

  function i(v, y, _) {
    const b = {
      type: v
    };
    return t && (b.start = y, b.end = y, b.loc = {
      start: _,
      end: _
    }), b
  }

  function s(v, y, _, b) {
    t && (v.end = y, v.loc && (v.loc.end = _))
  }

  function o(v, y) {
    const _ = v.context(),
      b = i(3, _.offset, _.startLoc);
    return b.value = y, s(b, v.currentOffset(), v.currentPosition()), b
  }

  function a(v, y) {
    const _ = v.context(),
      {
        lastOffset: b,
        lastStartLoc: w
      } = _,
      S = i(5, b, w);
    return S.index = parseInt(y, 10), v.nextToken(), s(S, v.currentOffset(), v.currentPosition()), S
  }

  function l(v, y) {
    const _ = v.context(),
      {
        lastOffset: b,
        lastStartLoc: w
      } = _,
      S = i(4, b, w);
    return S.key = y, v.nextToken(), s(S, v.currentOffset(), v.currentPosition()), S
  }

  function c(v, y) {
    const _ = v.context(),
      {
        lastOffset: b,
        lastStartLoc: w
      } = _,
      S = i(9, b, w);
    return S.value = y.replace(GO, KO), v.nextToken(), s(S, v.currentOffset(), v.currentPosition()), S
  }

  function u(v) {
    const y = v.nextToken(),
      _ = v.context(),
      {
        lastOffset: b,
        lastStartLoc: w
      } = _,
      S = i(8, b, w);
    return y.type !== 11 ? (r(v, Ye.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), S.value = "", s(S, b, w), {
      nextConsumeToken: y,
      node: S
    }) : (y.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Fr(y)), S.value = y.value || "", s(S, v.currentOffset(), v.currentPosition()), {
      node: S
    })
  }

  function f(v, y) {
    const _ = v.context(),
      b = i(7, _.offset, _.startLoc);
    return b.value = y, s(b, v.currentOffset(), v.currentPosition()), b
  }

  function h(v) {
    const y = v.context(),
      _ = i(6, y.offset, y.startLoc);
    let b = v.nextToken();
    if (b.type === 8) {
      const w = u(v);
      _.modifier = w.node, b = w.nextConsumeToken || v.nextToken()
    }
    switch (b.type !== 9 && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(b)), b = v.nextToken(), b.type === 2 && (b = v.nextToken()), b.type) {
      case 10:
        b.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(b)), _.key = f(v, b.value || "");
        break;
      case 4:
        b.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(b)), _.key = l(v, b.value || "");
        break;
      case 5:
        b.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(b)), _.key = a(v, b.value || "");
        break;
      case 6:
        b.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(b)), _.key = c(v, b.value || "");
        break;
      default: {
        r(v, Ye.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const w = v.context(),
          S = i(7, w.offset, w.startLoc);
        return S.value = "", s(S, w.offset, w.startLoc), _.key = S, s(_, w.offset, w.startLoc), {
          nextConsumeToken: b,
          node: _
        }
      }
    }
    return s(_, v.currentOffset(), v.currentPosition()), {
      node: _
    }
  }

  function d(v) {
    const y = v.context(),
      _ = y.currentType === 1 ? v.currentOffset() : y.offset,
      b = y.currentType === 1 ? y.endLoc : y.startLoc,
      w = i(2, _, b);
    w.items = [];
    let S = null;
    do {
      const T = S || v.nextToken();
      switch (S = null, T.type) {
        case 0:
          T.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(T)), w.items.push(o(v, T.value || ""));
          break;
        case 5:
          T.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(T)), w.items.push(a(v, T.value || ""));
          break;
        case 4:
          T.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(T)), w.items.push(l(v, T.value || ""));
          break;
        case 6:
          T.value == null && r(v, Ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Fr(T)), w.items.push(c(v, T.value || ""));
          break;
        case 7: {
          const O = h(v);
          w.items.push(O.node), S = O.nextConsumeToken || null;
          break
        }
      }
    } while (y.currentType !== 13 && y.currentType !== 1);
    const A = y.currentType === 1 ? y.lastOffset : v.currentOffset(),
      L = y.currentType === 1 ? y.lastEndLoc : v.currentPosition();
    return s(w, A, L), w
  }

  function g(v, y, _, b) {
    const w = v.context();
    let S = b.items.length === 0;
    const A = i(1, y, _);
    A.cases = [], A.cases.push(b);
    do {
      const L = d(v);
      S || (S = L.items.length === 0), A.cases.push(L)
    } while (w.currentType !== 13);
    return S && r(v, Ye.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), s(A, v.currentOffset(), v.currentPosition()), A
  }

  function p(v) {
    const y = v.context(),
      {
        offset: _,
        startLoc: b
      } = y,
      w = d(v);
    return y.currentType === 13 ? w : g(v, _, b, w)
  }

  function m(v) {
    const y = zO(v, Ct({}, e)),
      _ = y.context(),
      b = i(0, _.offset, _.startLoc);
    return t && b.loc && (b.loc.source = v), b.body = p(y), e.onCacheKey && (b.cacheKey = e.onCacheKey(v)), _.currentType !== 13 && r(y, Ye.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, v[_.offset] || ""), s(b, y.currentOffset(), y.currentPosition()), b
  }
  return {
    parse: m
  }
}

function Fr(e) {
  if (e.type === 13) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function XO(e, t = {}) {
  const n = {
    ast: e,
    helpers: new Set
  };
  return {
    context: () => n,
    helper: s => (n.helpers.add(s), s)
  }
}

function b_(e, t) {
  for (let n = 0; n < e.length; n++) Vp(e[n], t)
}

function Vp(e, t) {
  switch (e.type) {
    case 1:
      b_(e.cases, t), t.helper("plural");
      break;
    case 2:
      b_(e.items, t);
      break;
    case 6: {
      Vp(e.key, t), t.helper("linked"), t.helper("type");
      break
    }
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break
  }
}

function QO(e, t = {}) {
  const n = XO(e);
  n.helper("normalize"), e.body && Vp(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers)
}

function JO(e) {
  const t = e.body;
  return t.type === 2 ? w_(t) : t.cases.forEach(n => w_(n)), e
}

function w_(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value)
    }
    if (t.length === e.items.length) {
      e.static = Wp(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value
      }
    }
  }
}

function mo(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      mo(t.body), t.b = t.body, delete t.body;
      break
    }
    case 1: {
      const t = e,
        n = t.cases;
      for (let r = 0; r < n.length; r++) mo(n[r]);
      t.c = n, delete t.cases;
      break
    }
    case 2: {
      const t = e,
        n = t.items;
      for (let r = 0; r < n.length; r++) mo(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break
    }
    case 6: {
      const t = e;
      mo(t.key), t.k = t.key, delete t.key, t.modifier && (mo(t.modifier), t.m = t.modifier, delete t.modifier);
      break
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break
    }
  }
  delete e.type
}

function ZO(e, t) {
  const {
    filename: n,
    breakLineCode: r,
    needIndent: i
  } = t, s = t.location !== !1, o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: i,
    indentLevel: 0
  };
  s && e.loc && (o.source = e.loc.source);
  const a = () => o;

  function l(p, m) {
    o.code += p
  }

  function c(p, m = !0) {
    const v = m ? r : "";
    l(i ? v + "  ".repeat(p) : v)
  }

  function u(p = !0) {
    const m = ++o.indentLevel;
    p && c(m)
  }

  function f(p = !0) {
    const m = --o.indentLevel;
    p && c(m)
  }

  function h() {
    c(o.indentLevel)
  }
  return {
    context: a,
    push: l,
    indent: u,
    deindent: f,
    newline: h,
    helper: p => `_${p}`,
    needIndent: () => o.needIndent
  }
}

function eI(e, t) {
  const {
    helper: n
  } = e;
  e.push(`${n("linked")}(`), qo(e, t.key), t.modifier ? (e.push(", "), qo(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function tI(e, t) {
  const {
    helper: n,
    needIndent: r
  } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const i = t.items.length;
  for (let s = 0; s < i && (qo(e, t.items[s]), s !== i - 1); s++) e.push(", ");
  e.deindent(r()), e.push("])")
}

function nI(e, t) {
  const {
    helper: n,
    needIndent: r
  } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const i = t.cases.length;
    for (let s = 0; s < i && (qo(e, t.cases[s]), s !== i - 1); s++) e.push(", ");
    e.deindent(r()), e.push("])")
  }
}

function rI(e, t) {
  t.body ? qo(e, t.body) : e.push("null")
}

function qo(e, t) {
  const {
    helper: n
  } = e;
  switch (t.type) {
    case 0:
      rI(e, t);
      break;
    case 1:
      nI(e, t);
      break;
    case 2:
      tI(e, t);
      break;
    case 6:
      eI(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break
  }
}
const iI = (e, t = {}) => {
  const n = ae(t.mode) ? t.mode : "normal",
    r = ae(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
    s = t.needIndent ? t.needIndent : n !== "arrow",
    o = e.helpers || [],
    a = ZO(e, {
      filename: r,
      breakLineCode: i,
      needIndent: s
    });
  a.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(s), o.length > 0 && (a.push(`const { ${Wp(o.map(u=>`${u}: _${u}`),", ")} } = ctx`), a.newline()), a.push("return "), qo(a, e), a.deindent(s), a.push("}"), delete e.helpers;
  const {
    code: l,
    map: c
  } = a.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
  }
};

function sI(e, t = {}) {
  const n = Ct({}, t),
    r = !!n.jit,
    i = !!n.minify,
    s = n.optimize == null ? !0 : n.optimize,
    a = YO(n).parse(e);
  return r ? (s && JO(a), i && mo(a), {
    ast: a,
    code: ""
  }) : (QO(a, n), iI(a, n))
}
/*!
 * core-base v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
function Yr(e) {
  return We(e) && zp(e) === 0 && (Tr(e, "b") || Tr(e, "body"))
}
const Ow = ["b", "body"];

function oI(e) {
  return us(e, Ow)
}
const Iw = ["c", "cases"];

function aI(e) {
  return us(e, Iw, [])
}
const Mw = ["s", "static"];

function lI(e) {
  return us(e, Mw)
}
const Nw = ["i", "items"];

function cI(e) {
  return us(e, Nw, [])
}
const Dw = ["t", "type"];

function zp(e) {
  return us(e, Dw)
}
const Fw = ["v", "value"];

function fc(e, t) {
  const n = us(e, Fw);
  if (n != null) return n;
  throw yl(t)
}
const Bw = ["m", "modifier"];

function uI(e) {
  return us(e, Bw)
}
const Uw = ["k", "key"];

function fI(e) {
  const t = us(e, Uw);
  if (t) return t;
  throw yl(6)
}

function us(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (Tr(e, i) && e[i] != null) return e[i]
  }
  return n
}
const Hw = [...Ow, ...Iw, ...Mw, ...Nw, ...Uw, ...Bw, ...Fw, ...Dw];

function yl(e) {
  return new Error(`unhandled node type: ${e}`)
}

function Gf(e) {
  return n => dI(n, e)
}

function dI(e, t) {
  const n = oI(t);
  if (n == null) throw yl(0);
  if (zp(n) === 1) {
    const s = aI(n);
    return e.plural(s.reduce((o, a) => [...o, A_(e, a)], []))
  } else return A_(e, n)
}

function A_(e, t) {
  const n = lI(t);
  if (n != null) return e.type === "text" ? n : e.normalize([n]);
  {
    const r = cI(t).reduce((i, s) => [...i, hh(e, s)], []);
    return e.normalize(r)
  }
}

function hh(e, t) {
  const n = zp(t);
  switch (n) {
    case 3:
      return fc(t, n);
    case 9:
      return fc(t, n);
    case 4: {
      const r = t;
      if (Tr(r, "k") && r.k) return e.interpolate(e.named(r.k));
      if (Tr(r, "key") && r.key) return e.interpolate(e.named(r.key));
      throw yl(n)
    }
    case 5: {
      const r = t;
      if (Tr(r, "i") && Ot(r.i)) return e.interpolate(e.list(r.i));
      if (Tr(r, "index") && Ot(r.index)) return e.interpolate(e.list(r.index));
      throw yl(n)
    }
    case 6: {
      const r = t,
        i = uI(r),
        s = fI(r);
      return e.linked(hh(e, s), i ? hh(e, i) : void 0, e.type)
    }
    case 7:
      return fc(t, n);
    case 8:
      return fc(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`)
  }
}
const hI = e => e;
let dc = Xe();

function pI(e, t = {}) {
  let n = !1;
  const r = t.onError || BO;
  return t.onError = i => {
    n = !0, r(i)
  }, {
    ...sI(e, t),
    detectError: n
  }
}

function gI(e, t) {
  if (ae(e)) {
    ht(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || hI)(e),
      i = dc[r];
    if (i) return i;
    const {
      ast: s,
      detectError: o
    } = pI(e, {
      ...t,
      location: !1,
      jit: !0
    }), a = Gf(s);
    return o ? a : dc[r] = a
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = dc[n];
      return r || (dc[n] = Gf(e))
    } else return Gf(e)
  }
}
const vi = {
    INVALID_ARGUMENT: FO,
    INVALID_DATE_ARGUMENT: 18,
    INVALID_ISO_DATE_ARGUMENT: 19,
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
    NOT_SUPPORT_LOCALE_TYPE: 23
  },
  mI = 24;

function bi(e) {
  return sf(e, null, void 0)
}

function qp(e, t) {
  return t.locale != null ? S_(t.locale) : S_(e.locale)
}
let Kf;

function S_(e) {
  if (ae(e)) return e;
  if (st(e)) {
    if (e.resolvedOnce && Kf != null) return Kf;
    if (e.constructor.name === "Function") {
      const t = e();
      if (DP(t)) throw bi(vi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Kf = t
    } else throw bi(vi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
  } else throw bi(vi.NOT_SUPPORT_LOCALE_TYPE)
}

function _I(e, t, n) {
  return [...new Set([n, ...vt(t) ? t : We(t) ? Object.keys(t) : ae(t) ? [t] : [n]])]
}

function Ww(e, t, n) {
  const r = ae(n) ? n : Su,
    i = e;
  i.__localeChainCache || (i.__localeChainCache = new Map);
  let s = i.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let o = [n];
    for (; vt(o);) o = E_(s, o, t);
    const a = vt(t) || !He(t) ? t : t.default ? t.default : null;
    o = ae(a) ? [a] : a, vt(o) && E_(s, o, !1), i.__localeChainCache.set(r, s)
  }
  return s
}

function E_(e, t, n) {
  let r = !0;
  for (let i = 0; i < t.length && ht(r); i++) {
    const s = t[i];
    ae(s) && (r = yI(e, t[i], n))
  }
  return r
}

function yI(e, t, n) {
  let r;
  const i = t.split("-");
  do {
    const s = i.join("-");
    r = vI(e, s, n), i.splice(-1, 1)
  } while (i.length && r === !0);
  return r
}

function vI(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const i = t.replace(/!/g, "");
    e.push(i), (vt(n) || He(n)) && n[i] && (r = n[i])
  }
  return r
}
const fs = [];
fs[0] = {
  w: [0],
  i: [3, 0],
  "[": [4],
  o: [7]
};
fs[1] = {
  w: [1],
  ".": [2],
  "[": [4],
  o: [7]
};
fs[2] = {
  w: [2],
  i: [3, 0],
  0: [3, 0]
};
fs[3] = {
  i: [3, 0],
  0: [3, 0],
  w: [1, 1],
  ".": [2, 1],
  "[": [4, 1],
  o: [7, 1]
};
fs[4] = {
  "'": [5, 0],
  '"': [6, 0],
  "[": [4, 2],
  "]": [1, 3],
  o: 8,
  l: [4, 0]
};
fs[5] = {
  "'": [4, 0],
  o: 8,
  l: [5, 0]
};
fs[6] = {
  '"': [4, 0],
  o: 8,
  l: [6, 0]
};
const bI = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function wI(e) {
  return bI.test(e)
}

function AI(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function SI(e) {
  if (e == null) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
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

function EI(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : wI(t) ? AI(t) : "*" + t
}

function CI(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0,
    s, o, a, l, c, u, f;
  const h = [];
  h[0] = () => {
    o === void 0 ? o = a : o += a
  }, h[1] = () => {
    o !== void 0 && (t.push(o), o = void 0)
  }, h[2] = () => {
    h[0](), i++
  }, h[3] = () => {
    if (i > 0) i--, r = 4, h[0]();
    else {
      if (i = 0, o === void 0 || (o = EI(o), o === !1)) return !1;
      h[1]()
    }
  };

  function d() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"') return n++, a = "\\" + g, h[0](), !0
  }
  for (; r !== null;)
    if (n++, s = e[n], !(s === "\\" && d())) {
      if (l = SI(s), f = fs[r], c = f[l] || f.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = h[c[1]], u && (a = s, u() === !1)))) return;
      if (r === 7) return t
    }
}
const C_ = new Map;

function TI(e, t) {
  return We(e) ? e[t] : null
}

function kI(e, t) {
  if (!We(e)) return null;
  let n = C_.get(t);
  if (n || (n = CI(t), n && C_.set(t, n)), !n) return null;
  const r = n.length;
  let i = e,
    s = 0;
  for (; s < r;) {
    const o = n[s];
    if (Hw.includes(o) && Yr(i)) return null;
    const a = i[o];
    if (a === void 0 || st(i)) return null;
    i = a, s++
  }
  return i
}
const RI = "11.1.12",
  of = -1,
  Su = "en-US",
  T_ = "",
  k_ = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function xI() {
  return {
    upper: (e, t) => t === "text" && ae(e) ? e.toUpperCase() : t === "vnode" && We(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ae(e) ? e.toLowerCase() : t === "vnode" && We(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ae(e) ? k_(e) : t === "vnode" && We(e) && "__v_isVNode" in e ? k_(e.children) : e
  }
}
let jw;

function LI(e) {
  jw = e
}
let $w;

function PI(e) {
  $w = e
}
let Vw;

function OI(e) {
  Vw = e
}
let zw = null;
const R_ = e => {
    zw = e
  },
  II = () => zw;
let x_ = 0;

function MI(e = {}) {
  const t = st(e.onWarn) ? e.onWarn : xP,
    n = ae(e.version) ? e.version : RI,
    r = ae(e.locale) || st(e.locale) ? e.locale : Su,
    i = st(r) ? Su : r,
    s = vt(e.fallbackLocale) || He(e.fallbackLocale) || ae(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i,
    o = He(e.messages) ? e.messages : Yf(i),
    a = He(e.datetimeFormats) ? e.datetimeFormats : Yf(i),
    l = He(e.numberFormats) ? e.numberFormats : Yf(i),
    c = Ct(Xe(), e.modifiers, xI()),
    u = e.pluralRules || Xe(),
    f = st(e.missing) ? e.missing : null,
    h = ht(e.missingWarn) || bu(e.missingWarn) ? e.missingWarn : !0,
    d = ht(e.fallbackWarn) || bu(e.fallbackWarn) ? e.fallbackWarn : !0,
    g = !!e.fallbackFormat,
    p = !!e.unresolving,
    m = st(e.postTranslation) ? e.postTranslation : null,
    v = He(e.processor) ? e.processor : null,
    y = ht(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    _ = !!e.escapeParameter,
    b = st(e.messageCompiler) ? e.messageCompiler : jw,
    w = st(e.messageResolver) ? e.messageResolver : $w || TI,
    S = st(e.localeFallbacker) ? e.localeFallbacker : Vw || _I,
    A = We(e.fallbackContext) ? e.fallbackContext : void 0,
    L = e,
    T = We(L.__datetimeFormatters) ? L.__datetimeFormatters : new Map,
    O = We(L.__numberFormatters) ? L.__numberFormatters : new Map,
    B = We(L.__meta) ? L.__meta : {};
  x_++;
  const P = {
    version: n,
    cid: x_,
    locale: r,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: g,
    unresolving: p,
    postTranslation: m,
    processor: v,
    warnHtmlMessage: y,
    escapeParameter: _,
    messageCompiler: b,
    messageResolver: w,
    localeFallbacker: S,
    fallbackContext: A,
    onWarn: t,
    __meta: B
  };
  return P.datetimeFormats = a, P.numberFormats = l, P.__datetimeFormatters = T, P.__numberFormatters = O, P
}
const Yf = e => ({
  [e]: Xe()
});

function Gp(e, t, n, r, i) {
  const {
    missing: s,
    onWarn: o
  } = e;
  if (s !== null) {
    const a = s(e, n, t, i);
    return ae(a) ? a : t
  } else return t
}

function ha(e, t, n) {
  const r = e;
  r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function NI(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function DI(e, t) {
  const n = t.indexOf(e);
  if (n === -1) return !1;
  for (let r = n + 1; r < t.length; r++)
    if (NI(e, t[r])) return !0;
  return !1
}

function L_(e, ...t) {
  const {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: s,
    localeFallbacker: o
  } = e, {
    __datetimeFormatters: a
  } = e, [l, c, u, f] = ph(...t), h = ht(u.missingWarn) ? u.missingWarn : e.missingWarn;
  ht(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part,
    g = qp(e, u),
    p = o(e, i, g);
  if (!ae(l) || l === "") return new Intl.DateTimeFormat(g, f).format(c);
  let m = {},
    v, y = null;
  const _ = "datetime format";
  for (let S = 0; S < p.length && (v = p[S], m = n[v] || {}, y = m[l], !He(y)); S++) Gp(e, l, v, h, _);
  if (!He(y) || !ae(v)) return r ? of : l;
  let b = `${v}__${l}`;
  Ju(f) || (b = `${b}__${JSON.stringify(f)}`);
  let w = a.get(b);
  return w || (w = new Intl.DateTimeFormat(v, Ct({}, y, f)), a.set(b, w)), d ? w.formatToParts(c) : w.format(c)
}
const qw = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function ph(...e) {
  const [t, n, r, i] = e, s = Xe();
  let o = Xe(),
    a;
  if (ae(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l) throw bi(vi.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString()
    } catch {
      throw bi(vi.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (OP(t)) {
    if (isNaN(t.getTime())) throw bi(vi.INVALID_DATE_ARGUMENT);
    a = t
  } else if (Ot(t)) a = t;
  else throw bi(vi.INVALID_ARGUMENT);
  return ae(n) ? s.key = n : He(n) && Object.keys(n).forEach(l => {
    qw.includes(l) ? o[l] = n[l] : s[l] = n[l]
  }), ae(r) ? s.locale = r : He(r) && (o = r), He(i) && (o = i), [s.key || "", a, s, o]
}

function P_(e, t, n) {
  const r = e;
  for (const i in n) {
    const s = `${t}__${i}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s)
  }
}

function O_(e, ...t) {
  const {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: i,
    onWarn: s,
    localeFallbacker: o
  } = e, {
    __numberFormatters: a
  } = e, [l, c, u, f] = gh(...t), h = ht(u.missingWarn) ? u.missingWarn : e.missingWarn;
  ht(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part,
    g = qp(e, u),
    p = o(e, i, g);
  if (!ae(l) || l === "") return new Intl.NumberFormat(g, f).format(c);
  let m = {},
    v, y = null;
  const _ = "number format";
  for (let S = 0; S < p.length && (v = p[S], m = n[v] || {}, y = m[l], !He(y)); S++) Gp(e, l, v, h, _);
  if (!He(y) || !ae(v)) return r ? of : l;
  let b = `${v}__${l}`;
  Ju(f) || (b = `${b}__${JSON.stringify(f)}`);
  let w = a.get(b);
  return w || (w = new Intl.NumberFormat(v, Ct({}, y, f)), a.set(b, w)), d ? w.formatToParts(c) : w.format(c)
}
const Gw = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function gh(...e) {
  const [t, n, r, i] = e, s = Xe();
  let o = Xe();
  if (!Ot(t)) throw bi(vi.INVALID_ARGUMENT);
  const a = t;
  return ae(n) ? s.key = n : He(n) && Object.keys(n).forEach(l => {
    Gw.includes(l) ? o[l] = n[l] : s[l] = n[l]
  }), ae(r) ? s.locale = r : He(r) && (o = r), He(i) && (o = i), [s.key || "", a, s, o]
}

function I_(e, t, n) {
  const r = e;
  for (const i in n) {
    const s = `${t}__${i}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s)
  }
}
const FI = e => e,
  BI = e => "",
  UI = "text",
  HI = e => e.length === 0 ? "" : Wp(e),
  WI = FP;

function M_(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function jI(e) {
  const t = Ot(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ot(e.named.count) || Ot(e.named.n)) ? Ot(e.named.count) ? e.named.count : Ot(e.named.n) ? e.named.n : t : t
}

function $I(e, t) {
  t.count || (t.count = e), t.n || (t.n = e)
}

function VI(e = {}) {
  const t = e.locale,
    n = jI(e),
    r = We(e.pluralRules) && ae(t) && st(e.pluralRules[t]) ? e.pluralRules[t] : M_,
    i = We(e.pluralRules) && ae(t) && st(e.pluralRules[t]) ? M_ : void 0,
    s = v => v[r(n, v.length, i)],
    o = e.list || [],
    a = v => o[v],
    l = e.named || Xe();
  Ot(e.pluralIndex) && $I(n, l);
  const c = v => l[v];

  function u(v, y) {
    const _ = st(e.messages) ? e.messages(v, !!y) : We(e.messages) ? e.messages[v] : !1;
    return _ || (e.parent ? e.parent.message(v) : BI)
  }
  const f = v => e.modifiers ? e.modifiers[v] : FI,
    h = He(e.processor) && st(e.processor.normalize) ? e.processor.normalize : HI,
    d = He(e.processor) && st(e.processor.interpolate) ? e.processor.interpolate : WI,
    g = He(e.processor) && ae(e.processor.type) ? e.processor.type : UI,
    m = {
      list: a,
      named: c,
      plural: s,
      linked: (v, ...y) => {
        const [_, b] = y;
        let w = "text",
          S = "";
        y.length === 1 ? We(_) ? (S = _.modifier || S, w = _.type || w) : ae(_) && (S = _ || S) : y.length === 2 && (ae(_) && (S = _ || S), ae(b) && (w = b || w));
        const A = u(v, !0)(m),
          L = w === "vnode" && vt(A) && S ? A[0] : A;
        return S ? f(S)(L, w) : L
      },
      message: u,
      type: g,
      interpolate: d,
      normalize: h,
      values: Ct(Xe(), o, l)
    };
  return m
}
const N_ = () => "",
  ki = e => st(e);

function D_(e, ...t) {
  const {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: i,
    messageCompiler: s,
    fallbackLocale: o,
    messages: a
  } = e, [l, c] = mh(...t), u = ht(c.missingWarn) ? c.missingWarn : e.missingWarn, f = ht(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, h = ht(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, d = !!c.resolvedMessage, g = ae(c.default) || ht(c.default) ? ht(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : null, p = n || g != null && (ae(g) || st(g)), m = qp(e, c);
  h && zI(c);
  let [v, y, _] = d ? [l, m, a[m] || Xe()] : Kw(e, l, m, o, f, u), b = v, w = l;
  if (!d && !(ae(b) || Yr(b) || ki(b)) && p && (b = g, w = b), !d && (!(ae(b) || Yr(b) || ki(b)) || !ae(y))) return i ? of : l;
  let S = !1;
  const A = () => {
      S = !0
    },
    L = ki(b) ? b : Yw(e, l, y, b, w, A);
  if (S) return b;
  const T = KI(e, y, _, c),
    O = VI(T),
    B = qI(e, L, O);
  let P = r ? r(B, l) : B;
  return h && ae(P) && (P = MP(P)), P
}

function zI(e) {
  vt(e.list) ? e.list = e.list.map(t => ae(t) ? p_(t) : t) : We(e.named) && Object.keys(e.named).forEach(t => {
    ae(e.named[t]) && (e.named[t] = p_(e.named[t]))
  })
}

function Kw(e, t, n, r, i, s) {
  const {
    messages: o,
    onWarn: a,
    messageResolver: l,
    localeFallbacker: c
  } = e, u = c(e, r, n);
  let f = Xe(),
    h, d = null;
  const g = "translate";
  for (let p = 0; p < u.length && (h = u[p], f = o[h] || Xe(), (d = l(f, t)) === null && (d = f[t]), !(ae(d) || Yr(d) || ki(d))); p++)
    if (!DI(h, u)) {
      const m = Gp(e, t, h, s, g);
      m !== t && (d = m)
    } return [d, h, f]
}

function Yw(e, t, n, r, i, s) {
  const {
    messageCompiler: o,
    warnHtmlMessage: a
  } = e;
  if (ki(r)) {
    const c = r;
    return c.locale = c.locale || n, c.key = c.key || t, c
  }
  if (o == null) {
    const c = (() => r);
    return c.locale = n, c.key = t, c
  }
  const l = o(r, GI(e, n, i, r, a, s));
  return l.locale = n, l.key = t, l.source = r, l
}

function qI(e, t, n) {
  return t(n)
}

function mh(...e) {
  const [t, n, r] = e, i = Xe();
  if (!ae(t) && !Ot(t) && !ki(t) && !Yr(t)) throw bi(vi.INVALID_ARGUMENT);
  const s = Ot(t) ? String(t) : (ki(t), t);
  return Ot(n) ? i.plural = n : ae(n) ? i.default = n : He(n) && !Ju(n) ? i.named = n : vt(n) && (i.list = n), Ot(r) ? i.plural = r : ae(r) ? i.default = r : He(r) && Ct(i, r), [s, i]
}

function GI(e, t, n, r, i, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: i,
    onError: o => {
      throw s && s(o), o
    },
    onCacheKey: o => LP(t, n, o)
  }
}

function KI(e, t, n, r) {
  const {
    modifiers: i,
    pluralRules: s,
    messageResolver: o,
    fallbackLocale: a,
    fallbackWarn: l,
    missingWarn: c,
    fallbackContext: u
  } = e, h = {
    locale: t,
    modifiers: i,
    pluralRules: s,
    messages: (d, g) => {
      let p = o(n, d);
      if (p == null && (u || g)) {
        const [, , m] = Kw(u || e, d, t, a, l, c);
        p = o(m, d)
      }
      if (ae(p) || Yr(p)) {
        let m = !1;
        const y = Yw(e, d, t, p, d, () => {
          m = !0
        });
        return m ? N_ : y
      } else return ki(p) ? p : N_
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), Ot(r.plural) && (h.pluralIndex = r.plural), h
}
/*!
 * vue-i18n v11.1.12
 * (c) 2025 kazuya kawaguchi
 * Released under the MIT License.
 */
const YI = "11.1.12",
  pr = {
    UNEXPECTED_RETURN_TYPE: mI,
    INVALID_ARGUMENT: 25,
    MUST_BE_CALL_SETUP_TOP: 26,
    NOT_INSTALLED: 27,
    REQUIRED_VALUE: 28,
    INVALID_VALUE: 29,
    NOT_INSTALLED_WITH_PROVIDE: 31,
    UNEXPECTED_ERROR: 32
  };

function Lr(e, ...t) {
  return sf(e, null, void 0)
}
const _h = cs("__translateVNode"),
  yh = cs("__datetimeParts"),
  vh = cs("__numberParts"),
  XI = cs("__setPluralRules"),
  QI = cs("__injectWithOption"),
  bh = cs("__dispose");

function vl(e) {
  if (!We(e) || Yr(e)) return e;
  for (const t in e)
    if (Tr(e, t))
      if (!t.includes(".")) We(e[t]) && vl(e[t]);
      else {
        const n = t.split("."),
          r = n.length - 1;
        let i = e,
          s = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] === "__proto__") throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in i || (i[n[o]] = Xe()), !We(i[n[o]])) {
            s = !0;
            break
          }
          i = i[n[o]]
        }
        if (s || (Yr(i) ? Hw.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !Yr(i)) {
          const o = i[n[r]];
          We(o) && vl(o)
        }
      } return e
}

function Xw(e, t) {
  const {
    messages: n,
    __i18n: r,
    messageResolver: i,
    flatJson: s
  } = t, o = He(n) ? n : vt(r) ? Xe() : {
    [e]: Xe()
  };
  if (vt(r) && r.forEach(a => {
      if ("locale" in a && "resource" in a) {
        const {
          locale: l,
          resource: c
        } = a;
        l ? (o[l] = o[l] || Xe(), Io(c, o[l])) : Io(c, o)
      } else ae(a) && Io(JSON.parse(a), o)
    }), i == null && s)
    for (const a in o) Tr(o, a) && vl(o[a]);
  return o
}

function JI(e) {
  return e.type
}

function ZI(e, t, n) {
  let r = We(t.messages) ? t.messages : Xe();
  "__i18nGlobal" in n && (r = Xw(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const i = Object.keys(r);
  i.length && i.forEach(s => {
    e.mergeLocaleMessage(s, r[s])
  });
  {
    if (We(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach(o => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o])
      })
    }
    if (We(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach(o => {
        e.mergeNumberFormat(o, t.numberFormats[o])
      })
    }
  }
}

function F_(e) {
  return we(Qi, null, e, 0)
}
const B_ = () => [],
  eM = () => !1;
let U_ = 0;

function H_(e) {
  return ((t, n, r, i) => e(n, r, Nn() || void 0, i))
}

function Qw(e = {}) {
  const {
    __root: t,
    __injectWithOption: n
  } = e, r = t === void 0, i = e.flatJson, s = vu ? et : Jr;
  let o = ht(e.inheritLocale) ? e.inheritLocale : !0;
  const a = s(t && o ? t.locale.value : ae(e.locale) ? e.locale : Su),
    l = s(t && o ? t.fallbackLocale.value : ae(e.fallbackLocale) || vt(e.fallbackLocale) || He(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value),
    c = s(Xw(a.value, e)),
    u = s(He(e.datetimeFormats) ? e.datetimeFormats : {
      [a.value]: {}
    }),
    f = s(He(e.numberFormats) ? e.numberFormats : {
      [a.value]: {}
    });
  let h = t ? t.missingWarn : ht(e.missingWarn) || bu(e.missingWarn) ? e.missingWarn : !0,
    d = t ? t.fallbackWarn : ht(e.fallbackWarn) || bu(e.fallbackWarn) ? e.fallbackWarn : !0,
    g = t ? t.fallbackRoot : ht(e.fallbackRoot) ? e.fallbackRoot : !0,
    p = !!e.fallbackFormat,
    m = st(e.missing) ? e.missing : null,
    v = st(e.missing) ? H_(e.missing) : null,
    y = st(e.postTranslation) ? e.postTranslation : null,
    _ = t ? t.warnHtmlMessage : ht(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    b = !!e.escapeParameter;
  const w = t ? t.modifiers : He(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules,
    A;
  A = (() => {
    r && R_(null);
    const N = {
      version: YI,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: w,
      pluralRules: S,
      missing: v === null ? void 0 : v,
      missingWarn: h,
      fallbackWarn: d,
      fallbackFormat: p,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: _,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: {
        framework: "vue"
      }
    };
    N.datetimeFormats = u.value, N.numberFormats = f.value, N.__datetimeFormatters = He(A) ? A.__datetimeFormatters : void 0, N.__numberFormatters = He(A) ? A.__numberFormatters : void 0;
    const U = MI(N);
    return r && R_(U), U
  })(), ha(A, a.value, l.value);

  function T() {
    return [a.value, l.value, c.value, u.value, f.value]
  }
  const O = be({
      get: () => a.value,
      set: N => {
        A.locale = N, a.value = N
      }
    }),
    B = be({
      get: () => l.value,
      set: N => {
        A.fallbackLocale = N, l.value = N, ha(A, a.value, N)
      }
    }),
    P = be(() => c.value),
    W = be(() => u.value),
    G = be(() => f.value);

  function X() {
    return st(y) ? y : null
  }

  function H(N) {
    y = N, A.postTranslation = N
  }

  function q() {
    return m
  }

  function K(N) {
    N !== null && (v = H_(N)), m = N, A.missing = v
  }
  const Z = (N, U, oe, se, ye, Le) => {
    T();
    let Ne;
    try {
      r || (A.fallbackContext = t ? II() : void 0), Ne = N(A)
    } finally {
      r || (A.fallbackContext = void 0)
    }
    if (oe !== "translate exists" && Ot(Ne) && Ne === of || oe === "translate exists" && !Ne) {
      const [Mt, De] = U();
      return t && g ? se(t) : ye(Mt)
    } else {
      if (Le(Ne)) return Ne;
      throw Lr(pr.UNEXPECTED_RETURN_TYPE)
    }
  };

  function I(...N) {
    return Z(U => Reflect.apply(D_, null, [U, ...N]), () => mh(...N), "translate", U => Reflect.apply(U.t, U, [...N]), U => U, U => ae(U))
  }

  function ie(...N) {
    const [U, oe, se] = N;
    if (se && !We(se)) throw Lr(pr.INVALID_ARGUMENT);
    return I(U, oe, Ct({
      resolvedMessage: !0
    }, se || {}))
  }

  function ce(...N) {
    return Z(U => Reflect.apply(L_, null, [U, ...N]), () => ph(...N), "datetime format", U => Reflect.apply(U.d, U, [...N]), () => T_, U => ae(U) || vt(U))
  }

  function ve(...N) {
    return Z(U => Reflect.apply(O_, null, [U, ...N]), () => gh(...N), "number format", U => Reflect.apply(U.n, U, [...N]), () => T_, U => ae(U) || vt(U))
  }

  function pe(N) {
    return N.map(U => ae(U) || Ot(U) || ht(U) ? F_(String(U)) : U)
  }
  const Me = {
    normalize: pe,
    interpolate: N => N,
    type: "vnode"
  };

  function j(...N) {
    return Z(U => {
      let oe;
      const se = U;
      try {
        se.processor = Me, oe = Reflect.apply(D_, null, [se, ...N])
      } finally {
        se.processor = null
      }
      return oe
    }, () => mh(...N), "translate", U => U[_h](...N), U => [F_(U)], U => vt(U))
  }

  function J(...N) {
    return Z(U => Reflect.apply(O_, null, [U, ...N]), () => gh(...N), "number format", U => U[vh](...N), B_, U => ae(U) || vt(U))
  }

  function Y(...N) {
    return Z(U => Reflect.apply(L_, null, [U, ...N]), () => ph(...N), "datetime format", U => U[yh](...N), B_, U => ae(U) || vt(U))
  }

  function ee(N) {
    S = N, A.pluralRules = S
  }

  function de(N, U) {
    return Z(() => {
      if (!N) return !1;
      const oe = ae(U) ? U : a.value,
        se = M(oe),
        ye = A.messageResolver(se, N);
      return Yr(ye) || ki(ye) || ae(ye)
    }, () => [N], "translate exists", oe => Reflect.apply(oe.te, oe, [N, U]), eM, oe => ht(oe))
  }

  function C(N) {
    let U = null;
    const oe = Ww(A, l.value, a.value);
    for (let se = 0; se < oe.length; se++) {
      const ye = c.value[oe[se]] || {},
        Le = A.messageResolver(ye, N);
      if (Le != null) {
        U = Le;
        break
      }
    }
    return U
  }

  function R(N) {
    const U = C(N);
    return U ?? (t ? t.tm(N) || {} : {})
  }

  function M(N) {
    return c.value[N] || {}
  }

  function $(N, U) {
    if (i) {
      const oe = {
        [N]: U
      };
      for (const se in oe) Tr(oe, se) && vl(oe[se]);
      U = oe[N]
    }
    c.value[N] = U, A.messages = c.value
  }

  function V(N, U) {
    c.value[N] = c.value[N] || {};
    const oe = {
      [N]: U
    };
    if (i)
      for (const se in oe) Tr(oe, se) && vl(oe[se]);
    U = oe[N], Io(U, c.value[N]), A.messages = c.value
  }

  function x(N) {
    return u.value[N] || {}
  }

  function E(N, U) {
    u.value[N] = U, A.datetimeFormats = u.value, P_(A, N, U)
  }

  function k(N, U) {
    u.value[N] = Ct(u.value[N] || {}, U), A.datetimeFormats = u.value, P_(A, N, U)
  }

  function D(N) {
    return f.value[N] || {}
  }

  function F(N, U) {
    f.value[N] = U, A.numberFormats = f.value, I_(A, N, U)
  }

  function Q(N, U) {
    f.value[N] = Ct(f.value[N] || {}, U), A.numberFormats = f.value, I_(A, N, U)
  }
  U_++, t && vu && (Qe(t.locale, N => {
    o && (a.value = N, A.locale = N, ha(A, a.value, l.value))
  }), Qe(t.fallbackLocale, N => {
    o && (l.value = N, A.fallbackLocale = N, ha(A, a.value, l.value))
  }));
  const z = {
    id: U_,
    locale: O,
    fallbackLocale: B,
    get inheritLocale() {
      return o
    },
    set inheritLocale(N) {
      o = N, N && t && (a.value = t.locale.value, l.value = t.fallbackLocale.value, ha(A, a.value, l.value))
    },
    get availableLocales() {
      return Object.keys(c.value).sort()
    },
    messages: P,
    get modifiers() {
      return w
    },
    get pluralRules() {
      return S || {}
    },
    get isGlobal() {
      return r
    },
    get missingWarn() {
      return h
    },
    set missingWarn(N) {
      h = N, A.missingWarn = h
    },
    get fallbackWarn() {
      return d
    },
    set fallbackWarn(N) {
      d = N, A.fallbackWarn = d
    },
    get fallbackRoot() {
      return g
    },
    set fallbackRoot(N) {
      g = N
    },
    get fallbackFormat() {
      return p
    },
    set fallbackFormat(N) {
      p = N, A.fallbackFormat = p
    },
    get warnHtmlMessage() {
      return _
    },
    set warnHtmlMessage(N) {
      _ = N, A.warnHtmlMessage = N
    },
    get escapeParameter() {
      return b
    },
    set escapeParameter(N) {
      b = N, A.escapeParameter = N
    },
    t: I,
    getLocaleMessage: M,
    setLocaleMessage: $,
    mergeLocaleMessage: V,
    getPostTranslationHandler: X,
    setPostTranslationHandler: H,
    getMissingHandler: q,
    setMissingHandler: K,
    [XI]: ee
  };
  return z.datetimeFormats = W, z.numberFormats = G, z.rt = ie, z.te = de, z.tm = R, z.d = ce, z.n = ve, z.getDateTimeFormat = x, z.setDateTimeFormat = E, z.mergeDateTimeFormat = k, z.getNumberFormat = D, z.setNumberFormat = F, z.mergeNumberFormat = Q, z[QI] = n, z[_h] = j, z[yh] = Y, z[vh] = J, z
}
const Kp = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: e => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};

function tM({
  slots: e
}, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, i) => [...r, ...i.type === pt ? i.children : [i]], []) : t.reduce((n, r) => {
    const i = e[r];
    return i && (n[r] = i()), n
  }, Xe())
}

function Jw() {
  return pt
}
const nM = mt({
    name: "i18n-t",
    props: Ct({
      keypath: {
        type: String,
        required: !0
      },
      plural: {
        type: [Number, String],
        validator: e => Ot(e) || !isNaN(e)
      }
    }, Kp),
    setup(e, t) {
      const {
        slots: n,
        attrs: r
      } = t, i = e.i18n || Pi({
        useScope: e.scope,
        __useComponent: !0
      });
      return () => {
        const s = Object.keys(n).filter(f => f[0] !== "_"),
          o = Xe();
        e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = ae(e.plural) ? +e.plural : e.plural);
        const a = tM(t, s),
          l = i[_h](e.keypath, a, o),
          c = Ct(Xe(), r),
          u = ae(e.tag) || We(e.tag) ? e.tag : Jw();
        return Vt(u, c, l)
      }
    }
  }),
  W_ = nM;

function rM(e) {
  return vt(e) && !ae(e[0])
}

function Zw(e, t, n, r) {
  const {
    slots: i,
    attrs: s
  } = t;
  return () => {
    const o = {
      part: !0
    };
    let a = Xe();
    e.locale && (o.locale = e.locale), ae(e.format) ? o.key = e.format : We(e.format) && (ae(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((h, d) => n.includes(d) ? Ct(Xe(), h, {
      [d]: e.format[d]
    }) : h, Xe()));
    const l = r(e.value, o, a);
    let c = [o.key];
    vt(l) ? c = l.map((h, d) => {
      const g = i[h.type],
        p = g ? g({
          [h.type]: h.value,
          index: d,
          parts: l
        }) : [h.value];
      return rM(p) && (p[0].key = `${h.type}-${d}`), p
    }) : ae(l) && (c = [l]);
    const u = Ct(Xe(), s),
      f = ae(e.tag) || We(e.tag) ? e.tag : Jw();
    return Vt(f, u, c)
  }
}
const iM = mt({
    name: "i18n-n",
    props: Ct({
      value: {
        type: Number,
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, Kp),
    setup(e, t) {
      const n = e.i18n || Pi({
        useScope: e.scope,
        __useComponent: !0
      });
      return Zw(e, t, Gw, (...r) => n[vh](...r))
    }
  }),
  j_ = iM;

function sM(e, t) {
  const n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer
  }
}

function oM(e) {
  const t = o => {
    const {
      instance: a,
      value: l
    } = o;
    if (!a || !a.$) throw Lr(pr.UNEXPECTED_ERROR);
    const c = sM(e, a.$),
      u = $_(l);
    return [Reflect.apply(c.t, c, [...V_(u)]), c]
  };
  return {
    created: (o, a) => {
      const [l, c] = t(a);
      vu && e.global === c && (o.__i18nWatcher = Qe(c.locale, () => {
        a.instance && a.instance.$forceUpdate()
      })), o.__composer = c, o.textContent = l
    },
    unmounted: o => {
      vu && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer)
    },
    beforeUpdate: (o, {
      value: a
    }) => {
      if (o.__composer) {
        const l = o.__composer,
          c = $_(a);
        o.textContent = Reflect.apply(l.t, l, [...V_(c)])
      }
    },
    getSSRProps: o => {
      const [a] = t(o);
      return {
        textContent: a
      }
    }
  }
}

function $_(e) {
  if (ae(e)) return {
    path: e
  };
  if (He(e)) {
    if (!("path" in e)) throw Lr(pr.REQUIRED_VALUE, "path");
    return e
  } else throw Lr(pr.INVALID_VALUE)
}

function V_(e) {
  const {
    path: t,
    locale: n,
    args: r,
    choice: i,
    plural: s
  } = e, o = {}, a = r || {};
  return ae(n) && (o.locale = n), Ot(i) && (o.plural = i), Ot(s) && (o.plural = s), [t, a, o]
}

function aM(e, t, ...n) {
  const r = He(n[0]) ? n[0] : {};
  (ht(r.globalInstall) ? r.globalInstall : !0) && ([W_.name, "I18nT"].forEach(s => e.component(s, W_)), [j_.name, "I18nN"].forEach(s => e.component(s, j_)), [q_.name, "I18nD"].forEach(s => e.component(s, q_))), e.directive("t", oM(t))
}
const lM = cs("global-vue-i18n");

function cM(e = {}) {
  const t = ht(e.globalInjection) ? e.globalInjection : !0,
    n = new Map,
    [r, i] = uM(e),
    s = cs("");

  function o(u) {
    return n.get(u) || null
  }

  function a(u, f) {
    n.set(u, f)
  }

  function l(u) {
    n.delete(u)
  }
  const c = {
    get mode() {
      return "composition"
    },
    async install(u, ...f) {
      if (u.__VUE_I18N_SYMBOL__ = s, u.provide(u.__VUE_I18N_SYMBOL__, c), He(f[0])) {
        const g = f[0];
        c.__composerExtend = g.__composerExtend, c.__vueI18nExtend = g.__vueI18nExtend
      }
      let h = null;
      t && (h = yM(u, c.global)), aM(u, c, ...f);
      const d = u.unmount;
      u.unmount = () => {
        h && h(), c.dispose(), d()
      }
    },
    get global() {
      return i
    },
    dispose() {
      r.stop()
    },
    __instances: n,
    __getInstance: o,
    __setInstance: a,
    __deleteInstance: l
  };
  return c
}

function Pi(e = {}) {
  const t = Nn();
  if (t == null) throw Lr(pr.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Lr(pr.NOT_INSTALLED);
  const n = fM(t),
    r = hM(n),
    i = JI(t),
    s = dM(e, i);
  if (s === "global") return ZI(r, e, i), r;
  if (s === "parent") {
    let l = pM(n, t, e.__useComponent);
    return l == null && (l = r), l
  }
  const o = n;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = Ct({}, e);
    "__i18n" in i && (l.__i18n = i.__i18n), r && (l.__root = r), a = Qw(l), o.__composerExtend && (a[bh] = o.__composerExtend(a)), mM(o, t, a), o.__setInstance(t, a)
  }
  return a
}

function uM(e, t) {
  const n = Mh(),
    r = n.run(() => Qw(e));
  if (r == null) throw Lr(pr.UNEXPECTED_ERROR);
  return [n, r]
}

function fM(e) {
  const t = Zt(e.isCE ? lM : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t) throw Lr(e.isCE ? pr.NOT_INSTALLED_WITH_PROVIDE : pr.UNEXPECTED_ERROR);
  return t
}

function dM(e, t) {
  return Ju(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function hM(e) {
  return e.mode === "composition" ? e.global : e.global.__composer
}

function pM(e, t, n = !1) {
  let r = null;
  const i = t.root;
  let s = gM(t, n);
  for (; s != null;) {
    const o = e;
    if (e.mode === "composition" && (r = o.__getInstance(s)), r != null || i === s) break;
    s = s.parent
  }
  return r
}

function gM(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent
}

function mM(e, t, n) {
  Bn(() => {}, t), Zs(() => {
    const r = n;
    e.__deleteInstance(t);
    const i = r[bh];
    i && (i(), delete r[bh])
  }, t)
}
const _M = ["locale", "fallbackLocale", "availableLocales"],
  z_ = ["t", "rt", "d", "n", "tm", "te"];

function yM(e, t) {
  const n = Object.create(null);
  return _M.forEach(i => {
    const s = Object.getOwnPropertyDescriptor(t, i);
    if (!s) throw Lr(pr.UNEXPECTED_ERROR);
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
  }), e.config.globalProperties.$i18n = n, z_.forEach(i => {
    const s = Object.getOwnPropertyDescriptor(t, i);
    if (!s || !s.value) throw Lr(pr.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${i}`, s)
  }), () => {
    delete e.config.globalProperties.$i18n, z_.forEach(i => {
      delete e.config.globalProperties[`$${i}`]
    })
  }
}
const vM = mt({
    name: "i18n-d",
    props: Ct({
      value: {
        type: [Number, Date],
        required: !0
      },
      format: {
        type: [String, Object]
      }
    }, Kp),
    setup(e, t) {
      const n = e.i18n || Pi({
        useScope: e.scope,
        __useComponent: !0
      });
      return Zw(e, t, qw, (...r) => n[yh](...r))
    }
  }),
  q_ = vM;
LI(gI);
PI(kI);
OI(Ww);

function bM({
  dir: e = !0,
  lang: t = !0,
  seo: n = !0
} = {}, r = Ae()) {
  const i = Jo(r);
  i.seoSettings = {
    dir: e,
    lang: t,
    seo: n
  };
  const s = KP(i, i.seoSettings);
  return Qe(s, () => i.metaState = s.value), i.metaState = s.value, s
}

function G_(e = Ae()) {
  const t = Jo(e);
  return n => {
    if (n != null) return t.getRouteBaseName(n) || void 0
  }
}

function eA(e = Ae()) {
  const t = Jo(e);
  return (n, r) => wu(t, n, r)
}

function tA(e = Ae()) {
  const t = Jo(e);
  return (n, r) => Ew(t, n, r)
}

function Yp(e = Ae()) {
  const t = Jo(e);
  return n => jp(t, n)
}
const K_ = "nuxt-i18n-slp",
  wM = new RegExp([`<!--${K_}-\\[(\\w+)\\]-->`, ".+?", `<!--/${K_}-->`].join(""), "g"),
  AM = Je({
    name: "i18n:plugin:switch-locale-path-ssr",
    dependsOn: ["i18n:plugin"],
    setup(e) {
      const t = Ae(e._id),
        n = Yp(t);
      t.hook("app:rendered", r => {
        r.renderResult?.html != null && (r.renderResult.html = r.renderResult.html.replaceAll(wM, (i, s) => {
          const o = encodeURI(n(s ?? ""));
          return i.replace(/href="([^"]+)"/, `href="${o||"#"}" `)
        }))
      })
    }
  }),
  SM = Je({
    name: "i18n:plugin:route-locale-detect",
    dependsOn: ["i18n:plugin"],
    async setup(e) {
      let t, n;
      const r = Ae(e._id),
        i = nf(r),
        s = Lw();
      [t, n] = Ei(() => r.runWithContext(() => fh(r, i.initial && s.value || y_(r, r.$router.currentRoute.value)))), await t, n(), uT("locale-changing", async o => {
        let a, l;
        const c = ([a, l] = Ei(() => r.runWithContext(() => fh(r, y_(r, o)))), a = await a, l(), a);
        return i.initial = !1, r.runWithContext(() => Pw(r, o, c))
      }, {
        global: !0
      })
    }
  }),
  EM = Je({
    name: "i18n:plugin:preload",
    dependsOn: ["i18n:plugin"],
    async setup(e) {}
  });

function CM(e, {
  extendComposer: t,
  extendComposerInstance: n
}) {
  const r = Mh(),
    i = e.install.bind(e);
  e.install = (s, ...o) => {
    const a = Ct({}, o[0]);
    a.__composerExtend = c => (n(c, uc(e)), () => {}), e.mode === "legacy" && (a.__vueI18nExtend = c => (n(c, uc(c)), () => {})), Reflect.apply(i, e, [s, a]);
    const l = uc(e);
    if (r.run(() => {
        t(l), e.mode === "legacy" && "__composer" in e.global && n(e.global, uc(e.global))
      }), e.mode === "composition" && s.config.globalProperties.$i18n != null && n(s.config.globalProperties.$i18n, l), s.unmount) {
      const c = s.unmount.bind(s);
      s.unmount = () => {
        r.stop(), c()
      }
    }
  }
}
const TM = async e => {
  const t = await oO(iO);
  t.locale = e || t.locale || "en-US", t.defaultLocale = e, t.fallbackLocale ??= !1, t.messages ??= {};
  for (const n of _l) t.messages[n] ??= {};
  return t
}, kM = Je({
  name: "i18n:plugin",
  parallel: !1,
  async setup(e) {
    let t, n;
    Object.defineProperty(e.versions, "nuxtI18n", {
      get: () => "10.2.0"
    });
    const r = Ae(e._id),
      i = tf(r),
      s = r.ssrContext?.event?.context?.nuxtI18n?.vueI18nOptions,
      o = vO(Hp().host) || i.defaultLocale || "",
      a = s || ([t, n] = Ei(() => TM(o)), t = await t, n(), t),
      l = xw();
    l.value ??= mO(a.fallbackLocale), _l.map(h => `/_i18n/KvLPCQiy/${h}/messages.json`);
    const c = cM(a),
      u = rf(void 0, Ll(r), r),
      f = wO(r, c, a.defaultLocale);
    r._nuxtI18n = f, CM(c, {
      extendComposer(h) {
        h.locales = be(() => i.locales), h.localeCodes = be(() => _l);
        const d = et(f.getBaseUrl());
        h.baseUrl = be(() => d.value), Qe(h.locale, () => d.value = f.getBaseUrl()), h.strategy = "prefix_except_default", h.localeProperties = be(() => xl.find(g => g.code === h.locale.value) || {
          code: h.locale.value
        }), h.setLocale = async g => {
          await fh(r, g), await r.runWithContext(() => Pw(r, r.$router.currentRoute.value, g))
        }, h.loadLocaleMessages = f.loadMessages, h.differentDomains = !1, h.defaultLocale = a.defaultLocale, h.getBrowserLocale = () => __(u.navigator()), h.getLocaleCookie = () => __(u.cookie()), h.setLocaleCookie = f.setCookieLocale, h.finalizePendingLocaleChange = async () => {
          c.__pendingLocale && await c.__resolvePendingLocalePromise?.()
        }, h.waitForPendingLocaleChange = async () => {
          await c?.__pendingLocalePromise
        }
      },
      extendComposerInstance(h, d) {
        const g = [
          ["locales", () => d.locales],
          ["localeCodes", () => d.localeCodes],
          ["baseUrl", () => d.baseUrl],
          ["strategy", () => "prefix_except_default"],
          ["localeProperties", () => d.localeProperties],
          ["setLocale", () => p => Reflect.apply(d.setLocale, d, [p])],
          ["loadLocaleMessages", () => p => Reflect.apply(d.loadLocaleMessages, d, [p])],
          ["differentDomains", () => !1],
          ["defaultLocale", () => d.defaultLocale],
          ["getBrowserLocale", () => () => Reflect.apply(d.getBrowserLocale, d, [])],
          ["getLocaleCookie", () => () => Reflect.apply(d.getLocaleCookie, d, [])],
          ["setLocaleCookie", () => p => Reflect.apply(d.setLocaleCookie, d, [p])],
          ["finalizePendingLocaleChange", () => () => Reflect.apply(d.finalizePendingLocaleChange, d, [])],
          ["waitForPendingLocaleChange", () => () => Reflect.apply(d.waitForPendingLocaleChange, d, [])]
        ];
        for (const [p, m] of g) Object.defineProperty(h, p, {
          get: m
        })
      }
    }), r.vueApp.use(c), Object.defineProperty(r, "$i18n", {
      get: () => $p(c)
    }), r.provide("localeHead", h => GP(r._nuxtI18n.composableCtx, h)), r.provide("localePath", eA(r)), r.provide("localeRoute", tA(r)), r.provide("routeBaseName", G_(r)), r.provide("getRouteBaseName", G_(r)), r.provide("switchLocalePath", Yp(r))
  }
}), nA = "hl_attribution", RM = 3600 * 24 * 90;

function Xp(e) {
  const t = document.cookie.match(new RegExp(`(?:^|; )${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}=([^;]*)`));
  return t ? decodeURIComponent(t[1] || "") : ""
}

function rA() {
  const e = Xp(nA);
  if (!e) return {};
  try {
    const t = JSON.parse(e);
    return t && typeof t == "object" ? t : {}
  } catch {
    return {}
  }
}

function wh() {
  const e = new URLSearchParams(window.location.search),
    n = {
      ...rA()
    };
  let r = !1;
  for (const s of ["utm_source", "utm_medium", "utm_campaign"]) {
    const o = e.get(s)?.trim();
    o && n[s] !== o && (n[s] = o, r = !0)
  }
  if (n.landing_page || (n.landing_page = window.location.href.split("#")[0], r = !0), !r) return;
  const i = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${nA}=${encodeURIComponent(JSON.stringify(n))}; Path=/; Max-Age=${RM}; SameSite=Lax${i}`
}

function QF() {
  return wh(), rA()
}

function JF() {
  const e = Xp("_fbc");
  if (e) return e;
  const t = new URLSearchParams(window.location.search).get("fbclid");
  return t ? `fb.1.${Date.now()}.${t}` : ""
}

function ZF() {
  return Xp("_fbp")
}
const xM = Je(() => {
    const e = Tt();
    wh(), e.afterEach(() => wh())
  }),
  LM = Je(() => {}),
  PM = {
    beforeMount(e, t) {
      e.clickOutsideEvent = function(n) {
        e === n.target || e.contains(n.target) || t.value(n)
      }, document.addEventListener("click", e.clickOutsideEvent)
    },
    beforeUnmount(e) {
      document.removeEventListener("click", e.clickOutsideEvent)
    }
  },
  OM = Je(e => {
    e.vueApp.directive("click-outside", PM)
  });

function iA(e, t) {
  const n = window.gtag;
  if (!n) return;
  const r = i => i ? "granted" : "denied";
  n("consent", "update", {
    analytics_storage: r(e),
    ad_storage: r(t),
    ad_user_data: r(t),
    ad_personalization: r(t)
  })
}

function sA(e) {
  const t = window;
  return !!t.Cookiebot && !e && !t.__cookiebotUnauthorized
}

function IM(e) {
  if (!sA(e)) return;
  const t = window.Cookiebot?.consent;
  t && iA(!!t.statistics, !!t.marketing)
}
const MM = Je(() => {
  const e = Se("cookiebot-fallback", () => !1),
    t = () => IM(e.value);
  t(), window.addEventListener("CookiebotOnConsentReady", t), window.addEventListener("CookiebotOnAccept", t), window.addEventListener("CookiebotOnDecline", t);
  const n = Se("cookie-state"),
    r = () => {
      const i = n.value;
      !i?.seen || sA(e.value) || iA(!!i.agreed, !!i.agreed)
    };
  Qe(n, r, {
    deep: !0
  }), Qe(e, r)
});

function oA(e, t = 400, n = 15e3) {
  let r = !1,
    i = () => {};
  const s = () => {
      "requestIdleCallback" in window ? window.requestIdleCallback(e, {
        timeout: 2e3
      }) : e()
    },
    o = () => {
      r || (r = !0, i(), window.setTimeout(s, t))
    },
    a = Se("preloader-done");
  if (a.value) {
    o();
    return
  }
  i = Qe(a, l => {
    l && o()
  }), window.setTimeout(o, n)
}
const NM = "is not authorized to show the cookie banner",
  DM = Je(() => {
    const e = String(Dn().public.cookiebotId || "");
    if (!e) return;
    const t = Ae(),
      n = et(!1),
      r = Se("cookiebot-fallback", () => !1);
    {
      const i = document.cookie.includes("CookieConsent=");
      oA(() => {
        n.value = !0
      }, i ? 400 : 2500);
      const s = () => {
          document.querySelectorAll("#CybotCookiebotDialog, #CybotCookiebotDialogBodyUnderlay, #CookiebotWidget").forEach(c => {
            c.hidden = !0, c.style.display = "none"
          })
        },
        o = () => {
          r.value = !0, s()
        };
      window.__cookiebotUnauthorized && o(), window.addEventListener("cookiebot-unauthorized", o);
      const a = Se("cookie-state"),
        l = () => {
          document.getElementById("CybotCookiebotDialog")?.classList.toggle("is-white", !!a.value.white)
        };
      Qe(() => a.value.white, l), window.addEventListener("CookiebotOnDialogDisplay", l), window.addEventListener("CookiebotOnLoad", l)
    }
    kl(() => {
      if (!n.value) return {};
      const i = t.$i18n?.locale,
        s = String(i?.value || i || "en").toUpperCase();
      return {
        link: [{
          rel: "preconnect",
          href: "https://consent.cookiebot.com"
        }],
        script: [{
          key: "cookiebot-guard",
          tagPriority: -30,
          innerHTML: `!function(){var w=console.warn;console.warn=function(){try{var m=[].join.call(arguments," ");if(m.indexOf("${NM}")!==-1){window.__cookiebotUnauthorized=!0;window.dispatchEvent(new Event("cookiebot-unauthorized"))}}catch(e){}return w.apply(console,arguments)}}();`
        }, {
          key: "cookiebot",
          id: "Cookiebot",
          src: "https://consent.cookiebot.com/uc.js",
          tagPriority: -20,
          "data-cbid": e,
          "data-blockingmode": "manual",
          "data-culture": s,
          "data-widget-position": "bottom-right"
        }]
      }
    })
  }),
  FM = "https://cdn.hilight.design",
  BM = ["/videos/", "/images/", "/sequence/", "/sequences/", "/posters/", "/lottie/", "/favicon.png", "/favicon-sprite.png", "/apple-touch-icon.png"];

function UM(e) {
  return BM.some(t => t.endsWith("/") ? e.startsWith(t) : e === t)
}

function ti(e) {
  if (!e) return "";
  const t = e.indexOf("#"),
    n = t >= 0 ? e.slice(t) : "",
    r = t >= 0 ? e.slice(0, t) : e;
  return /^(https?:)?\/\//i.test(r) ? e : r.startsWith("/") && UM(r) ? `${FM}${r}${n}` : e
}

function HM(e, t = .01) {
  const n = ti(e);
  return !n || /#t=/.test(n) ? n : `${n}#t=${t}`
}
const Y_ = 48,
  li = 48,
  WM = 1e3 / 24,
  jM = Je(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const e = new Image;
    e.decoding = "async", e.onload = () => {
      const t = document.createElement("canvas");
      t.width = li, t.height = li;
      const n = t.getContext("2d");
      if (!n) return;
      const r = Array.from({
        length: Y_
      }, (c, u) => (n.clearRect(0, 0, li, li), n.drawImage(e, u * li, 0, li, li, 0, 0, li, li), t.toDataURL("image/png")));
      let i = document.querySelector('link[rel="icon"]');
      i || (i = document.createElement("link"), i.rel = "icon", i.type = "image/png", document.head.appendChild(i));
      let s = 0,
        o = 0;
      const a = c => {
          if (c - o >= WM) {
            o = c, s = (s + 1) % Y_;
            const u = r[s];
            u && (i.href = u)
          }
          requestAnimationFrame(a)
        },
        l = r[0];
      l && (i.href = l, requestAnimationFrame(a))
    }, e.crossOrigin = "anonymous", e.src = ti("/favicon-sprite.png")
  });
/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var dn, aA, Ri, qr, ns, lA, Mo, hc, cA = function() {
    return typeof window < "u"
  },
  uA = function() {
    return dn || cA() && (dn = window.gsap) && dn.registerPlugin && dn
  },
  fA = function(t) {
    return typeof t == "string"
  },
  X_ = function(t) {
    return typeof t == "function"
  },
  bl = function(t, n) {
    var r = n === "x" ? "Width" : "Height",
      i = "scroll" + r,
      s = "client" + r;
    return t === Ri || t === qr || t === ns ? Math.max(qr[i], ns[i]) - (Ri["inner" + r] || qr[s] || ns[s]) : t[i] - t["offset" + r]
  },
  wl = function(t, n) {
    var r = "scroll" + (n === "x" ? "Left" : "Top");
    return t === Ri && (t.pageXOffset != null ? r = "page" + n.toUpperCase() + "Offset" : t = qr[r] != null ? qr : ns),
      function() {
        return t[r]
      }
  },
  $M = function(t, n, r, i) {
    if (X_(t) && (t = t(n, r, i)), typeof t != "object") return fA(t) && t !== "max" && t.charAt(1) !== "=" ? {
      x: t,
      y: t
    } : {
      y: t
    };
    if (t.nodeType) return {
      y: t,
      x: t
    };
    var s = {},
      o;
    for (o in t) s[o] = o !== "onAutoKill" && X_(t[o]) ? t[o](n, r, i) : t[o];
    return s
  },
  dA = function(t, n) {
    if (t = lA(t)[0], !t || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
    var r = t.getBoundingClientRect(),
      i = !n || n === Ri || n === ns,
      s = i ? {
        top: qr.clientTop - (Ri.pageYOffset || qr.scrollTop || ns.scrollTop || 0),
        left: qr.clientLeft - (Ri.pageXOffset || qr.scrollLeft || ns.scrollLeft || 0)
      } : n.getBoundingClientRect(),
      o = {
        x: r.left - s.left,
        y: r.top - s.top
      };
    return !i && n && (o.x += wl(n, "x")(), o.y += wl(n, "y")()), o
  },
  Q_ = function(t, n, r, i, s) {
    return !isNaN(t) && typeof t != "object" ? parseFloat(t) - s : fA(t) && t.charAt(1) === "=" ? parseFloat(t.substr(2)) * (t.charAt(0) === "-" ? -1 : 1) + i - s : t === "max" ? bl(n, r) - s : Math.min(bl(n, r), dA(t, n)[r] - s)
  },
  Ah = function() {
    dn = uA(), cA() && dn && typeof document < "u" && document.body && (Ri = window, ns = document.body, qr = document.documentElement, lA = dn.utils.toArray, dn.config({
      autoKillThreshold: 7
    }), Mo = dn.config(), aA = 1)
  },
  Zo = {
    version: "3.15.0",
    name: "scrollTo",
    rawVars: 1,
    register: function(t) {
      dn = t, Ah()
    },
    init: function(t, n, r, i, s) {
      aA || Ah();
      var o = this,
        a = dn.getProperty(t, "scrollSnapType");
      o.isWin = t === Ri, o.target = t, o.tween = r, n = $M(n, i, t, s), o.vars = n, o.autoKill = !!("autoKill" in n ? n : Mo).autoKill, o.getX = wl(t, "x"), o.getY = wl(t, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), hc || (hc = dn.core.globals().ScrollTrigger), dn.getProperty(t, "scrollBehavior") === "smooth" && dn.set(t, {
        scrollBehavior: "auto"
      }), a && a !== "none" && (o.snap = 1, o.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), n.x != null ? (o.add(o, "x", o.x, Q_(n.x, t, "x", o.x, n.offsetX || 0), i, s), o._props.push("scrollTo_x")) : o.skipX = 1, n.y != null ? (o.add(o, "y", o.y, Q_(n.y, t, "y", o.y, n.offsetY || 0), i, s), o._props.push("scrollTo_y")) : o.skipY = 1
    },
    render: function(t, n) {
      for (var r = n._pt, i = n.target, s = n.tween, o = n.autoKill, a = n.xPrev, l = n.yPrev, c = n.isWin, u = n.snap, f = n.snapInline, h, d, g, p, m; r;) r.r(t, r.d), r = r._next;
      h = c || !n.skipX ? n.getX() : a, d = c || !n.skipY ? n.getY() : l, g = d - l, p = h - a, m = Mo.autoKillThreshold, n.x < 0 && (n.x = 0), n.y < 0 && (n.y = 0), o && (!n.skipX && (p > m || p < -m) && h < bl(i, "x") && (n.skipX = 1), !n.skipY && (g > m || g < -m) && d < bl(i, "y") && (n.skipY = 1), n.skipX && n.skipY && (s.kill(), n.vars.onAutoKill && n.vars.onAutoKill.apply(s, n.vars.onAutoKillParams || []))), c ? Ri.scrollTo(n.skipX ? h : n.x, n.skipY ? d : n.y) : (n.skipY || (i.scrollTop = n.y), n.skipX || (i.scrollLeft = n.x)), u && (t === 1 || t === 0) && (d = i.scrollTop, h = i.scrollLeft, f ? i.style.scrollSnapType = f : i.style.removeProperty("scroll-snap-type"), i.scrollTop = d + 1, i.scrollLeft = h + 1, i.scrollTop = d, i.scrollLeft = h), n.xPrev = n.x, n.yPrev = n.y, hc && hc.update()
    },
    kill: function(t) {
      var n = t === "scrollTo",
        r = this._props.indexOf(t);
      return (n || t === "scrollTo_x") && (this.skipX = 1), (n || t === "scrollTo_y") && (this.skipY = 1), r > -1 && this._props.splice(r, 1), !this._props.length
    }
  };
Zo.max = bl;
Zo.getOffset = dA;
Zo.buildGetter = wl;
Zo.config = function(e) {
  Mo || Ah() || (Mo = dn.config());
  for (var t in e) Mo[t] = e[t]
};
uA() && dn.registerPlugin(Zo);
/*!
 * paths 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var VM = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
  zM = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
  qM = Math.PI / 180,
  pc = Math.sin,
  gc = Math.cos,
  Ka = Math.abs,
  pa = Math.sqrt,
  GM = function(t) {
    return typeof t == "number"
  },
  J_ = 1e5,
  Ui = function(t) {
    return Math.round(t * J_) / J_ || 0
  },
  Z_ = function(t) {
    return t.closed = Math.abs(t[0] - t[t.length - 2]) < .001 && Math.abs(t[1] - t[t.length - 1]) < .001
  };

function KM(e, t, n, r, i, s, o) {
  for (var a = e.length, l, c, u, f, h; --a > -1;)
    for (l = e[a], c = l.length, u = 0; u < c; u += 2) f = l[u], h = l[u + 1], l[u] = f * t + h * r + s, l[u + 1] = f * n + h * i + o;
  return e._dirty = 1, e
}

function YM(e, t, n, r, i, s, o, a, l) {
  if (!(e === a && t === l)) {
    n = Ka(n), r = Ka(r);
    var c = i % 360 * qM,
      u = gc(c),
      f = pc(c),
      h = Math.PI,
      d = h * 2,
      g = (e - a) / 2,
      p = (t - l) / 2,
      m = u * g + f * p,
      v = -f * g + u * p,
      y = m * m,
      _ = v * v,
      b = y / (n * n) + _ / (r * r);
    b > 1 && (n = pa(b) * n, r = pa(b) * r);
    var w = n * n,
      S = r * r,
      A = (w * S - w * _ - S * y) / (w * _ + S * y);
    A < 0 && (A = 0);
    var L = (s === o ? -1 : 1) * pa(A),
      T = L * (n * v / r),
      O = L * -(r * m / n),
      B = (e + a) / 2,
      P = (t + l) / 2,
      W = B + (u * T - f * O),
      G = P + (f * T + u * O),
      X = (m - T) / n,
      H = (v - O) / r,
      q = (-m - T) / n,
      K = (-v - O) / r,
      Z = X * X + H * H,
      I = (H < 0 ? -1 : 1) * Math.acos(X / pa(Z)),
      ie = (X * K - H * q < 0 ? -1 : 1) * Math.acos((X * q + H * K) / pa(Z * (q * q + K * K)));
    isNaN(ie) && (ie = h), !o && ie > 0 ? ie -= d : o && ie < 0 && (ie += d), I %= d, ie %= d;
    var ce = Math.ceil(Ka(ie) / (d / 4)),
      ve = [],
      pe = ie / ce,
      xe = 4 / 3 * pc(pe / 2) / (1 + gc(pe / 2)),
      Me = u * n,
      j = f * n,
      J = f * -r,
      Y = u * r,
      ee;
    for (ee = 0; ee < ce; ee++) i = I + ee * pe, m = gc(i), v = pc(i), X = gc(i += pe), H = pc(i), ve.push(m - xe * v, v + xe * m, X + xe * H, H - xe * X, X, H);
    for (ee = 0; ee < ve.length; ee += 2) m = ve[ee], v = ve[ee + 1], ve[ee] = m * Me + v * J + W, ve[ee + 1] = m * j + v * Y + G;
    return ve[ee - 2] = a, ve[ee - 1] = l, ve
  }
}

function XM(e) {
  var t = (e + "").replace(zM, function(T) {
      var O = +T;
      return O < 1e-4 && O > -1e-4 ? 0 : O
    }).match(VM) || [],
    n = [],
    r = 0,
    i = 0,
    s = 2 / 3,
    o = t.length,
    a = 0,
    l = "ERROR: malformed path: " + e,
    c, u, f, h, d, g, p, m, v, y, _, b, w, S, A, L = function(O, B, P, W) {
      y = (P - O) / 3, _ = (W - B) / 3, p.push(O + y, B + _, P - y, W - _, P, W)
    };
  if (!e || !isNaN(t[0]) || isNaN(t[1])) return console.log(l), n;
  for (c = 0; c < o; c++)
    if (w = d, isNaN(t[c]) ? (d = t[c].toUpperCase(), g = d !== t[c]) : c--, f = +t[c + 1], h = +t[c + 2], g && (f += r, h += i), c || (m = f, v = h), d === "M") p && (p.length < 8 ? n.length -= 1 : a += p.length, Z_(p)), r = m = f, i = v = h, p = [f, h], n.push(p), c += 2, d = "L";
    else if (d === "C") p || (p = [0, 0]), g || (r = i = 0), p.push(f, h, r + t[c + 3] * 1, i + t[c + 4] * 1, r += t[c + 5] * 1, i += t[c + 6] * 1), c += 6;
  else if (d === "S") y = r, _ = i, (w === "C" || w === "S") && (y += r - p[p.length - 4], _ += i - p[p.length - 3]), g || (r = i = 0), p.push(y, _, f, h, r += t[c + 3] * 1, i += t[c + 4] * 1), c += 4;
  else if (d === "Q") y = r + (f - r) * s, _ = i + (h - i) * s, g || (r = i = 0), r += t[c + 3] * 1, i += t[c + 4] * 1, p.push(y, _, r + (f - r) * s, i + (h - i) * s, r, i), c += 4;
  else if (d === "T") y = r - p[p.length - 4], _ = i - p[p.length - 3], p.push(r + y, i + _, f + (r + y * 1.5 - f) * s, h + (i + _ * 1.5 - h) * s, r = f, i = h), c += 2;
  else if (d === "H") L(r, i, r = f, i), c += 1;
  else if (d === "V") L(r, i, r, i = f + (g ? i - r : 0)), c += 1;
  else if (d === "L" || d === "Z") d === "Z" && (f = m, h = v, p.closed = !0), (d === "L" || Ka(r - f) > .5 || Ka(i - h) > .5) && (L(r, i, f, h), d === "L" && (c += 2)), r = f, i = h;
  else if (d === "A") {
    if (S = t[c + 4], A = t[c + 5], y = t[c + 6], _ = t[c + 7], u = 7, S.length > 1 && (S.length < 3 ? (_ = y, y = A, u--) : (_ = A, y = S.substr(2), u -= 2), A = S.charAt(1), S = S.charAt(0)), b = YM(r, i, +t[c + 1], +t[c + 2], +t[c + 3], +S, +A, (g ? r : 0) + y * 1, (g ? i : 0) + _ * 1), c += u, b)
      for (u = 0; u < b.length; u++) p.push(b[u]);
    r = p[p.length - 2], i = p[p.length - 1]
  } else console.log(l);
  return c = p.length, c < 6 ? (n.pop(), c = 0) : Z_(p), n.totalPoints = a + c, n
}

function QM(e) {
  GM(e[0]) && (e = [e]);
  var t = "",
    n = e.length,
    r, i, s, o;
  for (i = 0; i < n; i++) {
    for (o = e[i], t += "M" + Ui(o[0]) + "," + Ui(o[1]) + " C", r = o.length, s = 2; s < r; s++) t += Ui(o[s++]) + "," + Ui(o[s++]) + " " + Ui(o[s++]) + "," + Ui(o[s++]) + " " + Ui(o[s++]) + "," + Ui(o[s]) + " ";
    o.closed && (t += "z")
  }
  return t
}
/*!
 * CustomEase 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var kn, hA, pA = function() {
    return kn || typeof window < "u" && (kn = window.gsap) && kn.registerPlugin && kn
  },
  ey = function() {
    kn = pA(), kn ? (kn.registerEase("_CE", Sr.create), hA = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
  },
  JM = 1e20,
  mc = function(t) {
    return ~~(t * 1e3 + (t < 0 ? -.5 : .5)) / 1e3
  },
  ZM = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  eN = /[cLlsSaAhHvVtTqQ]/g,
  tN = function(t) {
    var n = t.length,
      r = JM,
      i;
    for (i = 1; i < n; i += 6) + t[i] < r && (r = +t[i]);
    return r
  },
  nN = function(t, n, r) {
    !r && r !== 0 && (r = Math.max(+t[t.length - 1], +t[1]));
    var i = +t[0] * -1,
      s = -r,
      o = t.length,
      a = 1 / (+t[o - 2] + i),
      l = -n || (Math.abs(+t[o - 1] - +t[1]) < .01 * (+t[o - 2] - +t[0]) ? tN(t) + s : +t[o - 1] + s),
      c;
    for (l ? l = 1 / l : l = -a, c = 0; c < o; c += 2) t[c] = (+t[c] + i) * a, t[c + 1] = (+t[c + 1] + s) * l
  },
  rN = function e(t, n, r, i, s, o, a, l, c, u, f) {
    var h = (t + r) / 2,
      d = (n + i) / 2,
      g = (r + s) / 2,
      p = (i + o) / 2,
      m = (s + a) / 2,
      v = (o + l) / 2,
      y = (h + g) / 2,
      _ = (d + p) / 2,
      b = (g + m) / 2,
      w = (p + v) / 2,
      S = (y + b) / 2,
      A = (_ + w) / 2,
      L = a - t,
      T = l - n,
      O = Math.abs((r - a) * T - (i - l) * L),
      B = Math.abs((s - a) * T - (o - l) * L),
      P;
    return u || (u = [{
      x: t,
      y: n
    }, {
      x: a,
      y: l
    }], f = 1), u.splice(f || u.length - 1, 0, {
      x: S,
      y: A
    }), (O + B) * (O + B) > c * (L * L + T * T) && (P = u.length, e(t, n, h, d, y, _, S, A, c, u, f), e(S, A, b, w, m, v, a, l, c, u, f + 1 + (u.length - P))), u
  },
  Sr = (function() {
    function e(n, r, i) {
      hA || ey(), this.id = n, this.setData(r, i)
    }
    var t = e.prototype;
    return t.setData = function(r, i) {
      i = i || {}, r = r || "0,0,1,1";
      var s = r.match(ZM),
        o = 1,
        a = [],
        l = [],
        c = i.precision || 1,
        u = c <= 1,
        f, h, d, g, p, m, v, y, _;
      if (this.data = r, (eN.test(r) || ~r.indexOf("M") && r.indexOf("C") < 0) && (s = XM(r)[0]), f = s.length, f === 4) s.unshift(0, 0), s.push(1, 1), f = 8;
      else if ((f - 2) % 6) throw "Invalid CustomEase";
      for ((+s[0] != 0 || +s[f - 2] != 1) && nN(s, i.height, i.originY), this.segment = s, g = 2; g < f; g += 6) h = {
        x: +s[g - 2],
        y: +s[g - 1]
      }, d = {
        x: +s[g + 4],
        y: +s[g + 5]
      }, a.push(h, d), rN(h.x, h.y, +s[g], +s[g + 1], +s[g + 2], +s[g + 3], d.x, d.y, 1 / (c * 2e5), a, a.length - 1);
      for (f = a.length, g = 0; g < f; g++) v = a[g], y = a[g - 1] || v, (v.x > y.x || y.y !== v.y && y.x === v.x || v === y) && v.x <= 1 ? (y.cx = v.x - y.x, y.cy = v.y - y.y, y.n = v, y.nx = v.x, u && g > 1 && Math.abs(y.cy / y.cx - a[g - 2].cy / a[g - 2].cx) > 2 && (u = 0), y.cx < o && (y.cx ? o = y.cx : (y.cx = .001, g === f - 1 && (y.x -= .001, o = Math.min(o, .001), u = 0)))) : (a.splice(g--, 1), f--);
      if (f = 1 / o + 1 | 0, p = 1 / f, m = 0, v = a[0], u) {
        for (g = 0; g < f; g++) _ = g * p, v.nx < _ && (v = a[++m]), h = v.y + (_ - v.x) / v.cx * v.cy, l[g] = {
          x: _,
          cx: p,
          y: h,
          cy: 0,
          nx: 9
        }, g && (l[g - 1].cy = h - l[g - 1].y);
        m = a[a.length - 1], l[f - 1].cy = m.y - h, l[f - 1].cx = m.x - l[l.length - 1].x
      } else {
        for (g = 0; g < f; g++) v.nx < g * p && (v = a[++m]), l[g] = v;
        m < a.length - 1 && (l[g - 1] = a[a.length - 2])
      }
      return this.ease = function(b) {
        var w = l[b * f | 0] || l[f - 1];
        return w.nx < b && (w = w.n), w.y + (b - w.x) / w.cx * w.cy
      }, this.ease.custom = this, this.id && kn && kn.registerEase(this.id, this.ease), this
    }, t.getSVGData = function(r) {
      return e.getSVGData(this, r)
    }, e.create = function(r, i, s) {
      return new e(r, i, s).ease
    }, e.register = function(r) {
      kn = r, ey()
    }, e.get = function(r) {
      return kn.parseEase(r)
    }, e.getSVGData = function(r, i) {
      i = i || {};
      var s = i.width || 100,
        o = i.height || 100,
        a = i.x || 0,
        l = (i.y || 0) + o,
        c = kn.utils.toArray(i.path)[0],
        u, f, h, d, g, p, m, v, y, _;
      if (i.invert && (o = -o, l = 0), typeof r == "string" && (r = kn.parseEase(r)), r.custom && (r = r.custom), r instanceof e) u = QM(KM([r.segment.slice(0)], s, 0, 0, -o, a, l));
      else {
        for (u = [a, l], m = Math.max(5, (i.precision || 1) * 200), d = 1 / m, m += 2, v = 5 / m, y = mc(a + d * s), _ = mc(l + r(d) * -o), f = (_ - l) / (y - a), h = 2; h < m; h++) g = mc(a + h * d * s), p = mc(l + r(h * d) * -o), (Math.abs((p - _) / (g - y) - f) > v || h === m - 1) && (u.push(y, _), f = (p - _) / (g - y)), y = g, _ = p;
        u = "M" + u.join(",")
      }
      return c && c.setAttribute("d", u), u
    }, e
  })();
Sr.version = "3.15.0";
Sr.headless = !0;
pA() && kn.registerPlugin(Sr);
/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */
let ga, ma, ty = typeof Symbol == "function" ? Symbol() : "_split",
  Sh, iN = () => Sh || Go.register(window.gsap),
  ny = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter : 0,
  Al = e => e ? typeof e == "string" ? Al(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((t, n) => (typeof n == "string" ? t.push(...Al(n)) : t.push(n), t), []) : [e] : [],
  ry = e => Al(e).filter(t => t && t.nodeType === 1),
  Eh = [],
  Xf = function() {},
  sN = {
    add: e => e()
  },
  oN = /\s+/g,
  iy = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"),
  Eu = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  },
  aN = (e, t) => {
    for (; ++t < e.length && e[t] === Eu;);
    return e[t] || Eu
  },
  sy = ({
    element: e,
    html: t,
    ariaL: n,
    ariaH: r
  }) => {
    e.innerHTML = t, n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label"), r ? e.setAttribute("aria-hidden", r) : e.removeAttribute("aria-hidden")
  },
  oy = (e, t) => {
    if (t) {
      let n = new Set(e.join("").match(t) || Eh),
        r = e.length,
        i, s, o, a;
      if (n.size)
        for (; --r > -1;) {
          s = e[r];
          for (o of n)
            if (o.startsWith(s) && o.length > s.length) {
              for (i = 0, a = s; o.startsWith(a += e[r + ++i]) && a.length < o.length;);
              if (i && a.length === o.length) {
                e[r] = o, e.splice(r + 1, i);
                break
              }
            }
        }
    }
    return e
  },
  ay = e => window.getComputedStyle(e).display === "inline" && (e.style.display = "inline-block"),
  co = (e, t, n) => t.insertBefore(typeof e == "string" ? document.createTextNode(e) : e, n),
  Ch = (e, t, n) => {
    let r = t[e + "sClass"] || "",
      {
        tag: i = "div",
        aria: s = "auto",
        propIndex: o = !1
      } = t,
      a = e === "line" ? "block" : "inline-block",
      l = r.indexOf("++") > -1,
      c = u => {
        let f = document.createElement(i),
          h = n.length + 1;
        return r && (f.className = r + (l ? " " + r + h : "")), o && f.style.setProperty("--" + e, h + ""), s !== "none" && f.setAttribute("aria-hidden", "true"), i !== "span" && (f.style.position = "relative", f.style.display = a), f.textContent = u, n.push(f), f
      };
    return l && (r = r.replace("++", "")), c.collection = n, c
  },
  lN = (e, t, n, r) => {
    let i = Ch("line", n, r),
      s = window.getComputedStyle(e).textAlign || "left";
    return (o, a) => {
      let l = i("");
      for (l.style.textAlign = s, e.insertBefore(l, t[o]); o < a; o++) l.appendChild(t[o]);
      l.normalize()
    }
  },
  gA = (e, t, n, r, i, s, o, a, l, c) => {
    var u;
    let f = Array.from(e.childNodes),
      h = 0,
      {
        wordDelimiter: d,
        reduceWhiteSpace: g = !0,
        prepareText: p
      } = t,
      m = e.getBoundingClientRect(),
      v = m,
      y = !g && window.getComputedStyle(e).whiteSpace.substring(0, 3) === "pre",
      _ = 0,
      b = n.collection,
      w, S, A, L, T, O, B, P, W, G, X, H, q, K, Z, I, ie, ce;
    for (typeof d == "object" ? (A = d.delimiter || d, S = d.replaceWith || "") : S = d === "" ? "" : d || " ", w = S !== " "; h < f.length; h++)
      if (L = f[h], L.nodeType === 3) {
        for (Z = L.textContent || "", g ? Z = Z.replace(oN, " ") : y && (Z = Z.replace(/\n/g, S + `
`)), p && (Z = p(Z, e)), L.textContent = Z, T = S || A ? Z.split(A || S) : Z.match(a) || Eh, ie = T[T.length - 1], P = w ? ie.slice(-1) === " " : !ie, ie || T.pop(), v = m, B = w ? T[0].charAt(0) === " " : !T[0], B && co(" ", e, L), T[0] || T.shift(), oy(T, l), s && c || (L.textContent = ""), W = 1; W <= T.length; W++)
          if (I = T[W - 1], !g && y && I.charAt(0) === `
` && ((u = L.previousSibling) == null || u.remove(), co(document.createElement("br"), e, L), I = I.slice(1)), !g && I === "") co(S, e, L);
          else if (I === " ") e.insertBefore(document.createTextNode(" "), L);
        else {
          if (w && I.charAt(0) === " " && co(" ", e, L), _ && W === 1 && !B && b.indexOf(_.parentNode) > -1 ? (O = b[b.length - 1], O.appendChild(document.createTextNode(r ? "" : I))) : (O = n(r ? "" : I), co(O, e, L), _ && W === 1 && !B && O.insertBefore(_, O.firstChild)), r)
            for (X = ny ? oy([...ny.segment(I)].map(ve => ve.segment), l) : I.match(a) || Eh, ce = 0; ce < X.length; ce++) O.appendChild(X[ce] === " " ? document.createTextNode(" ") : r(X[ce]));
          if (s && c) {
            if (Z = L.textContent = Z.substring(I.length + 1, Z.length), G = O.getBoundingClientRect(), G.top > v.top && G.left <= v.left) {
              for (H = e.cloneNode(), q = e.childNodes[0]; q && q !== O;) K = q, q = q.nextSibling, H.appendChild(K);
              e.parentNode.insertBefore(H, e), i && ay(H)
            }
            v = G
          }(W < T.length || P) && co(W >= T.length ? " " : w && I.slice(-1) === " " ? " " + S : S, e, L)
        }
        e.removeChild(L), _ = 0
      } else L.nodeType === 1 && (o && o.indexOf(L) > -1 ? (b.indexOf(L.previousSibling) > -1 && b[b.length - 1].appendChild(L), _ = L) : (gA(L, t, n, r, i, s, o, a, l, !0), _ = 0), i && ay(L))
  };
const mA = class _A {
  constructor(t, n) {
    this.isSplit = !1, iN(), this.elements = ry(t), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = n, this.elements.forEach(o => {
      var a;
      n.overwrite !== !1 && ((a = o[ty]) == null || a._data.orig.filter(({
        element: l
      }) => l === o).forEach(sy)), o[ty] = this
    }), this._split = () => this.isSplit && this.split(this.vars);
    let r = [],
      i, s = () => {
        let o = r.length,
          a;
        for (; o--;) {
          a = r[o];
          let l = a.element.offsetWidth;
          if (l !== a.width) {
            a.width = l, this._split();
            return
          }
        }
      };
    this._data = {
      orig: r,
      obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
        clearTimeout(i), i = setTimeout(s, 200)
      })
    }, Xf(this), this.split(n)
  }
  split(t) {
    return (this._ctx || sN).add(() => {
      this.isSplit && this.revert(), this.vars = t = t || this.vars || {};
      let {
        type: n = "chars,words,lines",
        aria: r = "auto",
        deepSlice: i = !0,
        smartWrap: s,
        onSplit: o,
        autoSplit: a = !1,
        specialChars: l,
        mask: c
      } = this.vars, u = n.indexOf("lines") > -1, f = n.indexOf("chars") > -1, h = n.indexOf("words") > -1, d = f && !h && !u, g = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l), p = g ? new RegExp(g.source + "|" + iy.source, "gu") : iy, m = !!t.ignore && ry(t.ignore), {
        orig: v,
        animTime: y,
        obs: _
      } = this._data, b;
      (f || h || u) && (this.elements.forEach((w, S) => {
        v[S] = {
          element: w,
          html: w.innerHTML,
          ariaL: w.getAttribute("aria-label"),
          ariaH: w.getAttribute("aria-hidden")
        }, r === "auto" ? w.setAttribute("aria-label", (w.textContent || "").trim()) : r === "hidden" && w.setAttribute("aria-hidden", "true");
        let A = [],
          L = [],
          T = [],
          O = f ? Ch("char", t, A) : null,
          B = Ch("word", t, L),
          P, W, G, X;
        if (gA(w, t, B, O, d, i && (u || d), m, p, g, !1), u) {
          let H = Al(w.childNodes),
            q = lN(w, H, t, T),
            K, Z = [],
            I = 0,
            ie = H.map(pe => pe.nodeType === 1 ? pe.getBoundingClientRect() : Eu),
            ce = Eu,
            ve;
          for (P = 0; P < H.length; P++) K = H[P], K.nodeType === 1 && (K.nodeName === "BR" ? ((!P || H[P - 1].nodeName !== "BR") && (Z.push(K), q(I, P + 1)), I = P + 1, ce = aN(ie, P)) : (ve = ie[P], P && ve.top > ce.top && ve.left < ce.left + ce.width - 1 && (q(I, P), I = P), ce = ve));
          I < P && q(I, P), Z.forEach(pe => {
            var xe;
            return (xe = pe.parentNode) == null ? void 0 : xe.removeChild(pe)
          })
        }
        if (!h) {
          for (P = 0; P < L.length; P++)
            if (W = L[P], f || !W.nextSibling || W.nextSibling.nodeType !== 3)
              if (s && !u) {
                for (G = document.createElement("span"), G.style.whiteSpace = "nowrap"; W.firstChild;) G.appendChild(W.firstChild);
                W.replaceWith(G)
              } else W.replaceWith(...W.childNodes);
          else X = W.nextSibling, X && X.nodeType === 3 && (X.textContent = (W.textContent || "") + (X.textContent || ""), W.remove());
          L.length = 0, w.normalize()
        }
        this.lines.push(...T), this.words.push(...L), this.chars.push(...A)
      }), c && this[c] && this.masks.push(...this[c].map(w => {
        let S = w.cloneNode();
        return w.replaceWith(S), S.appendChild(w), w.className && (S.className = w.className.trim().split(" ").map(A => A + "-mask").join(" ")), S.style.overflow = "clip", S
      }))), this.isSplit = !0, ma && u && a && ma.addEventListener("loadingdone", this._split), (b = o && o(this)) && b.totalTime && (this._data.anim = y ? b.totalTime(y) : b), u && a && this.elements.forEach((w, S) => {
        v[S].width = w.offsetWidth, _ && _.observe(w)
      })
    }), this
  }
  kill() {
    let {
      obs: t
    } = this._data;
    t && t.disconnect(), ma?.removeEventListener("loadingdone", this._split)
  }
  revert() {
    var t, n;
    if (this.isSplit) {
      let {
        orig: r,
        anim: i
      } = this._data;
      this.kill(), r.forEach(sy), this.chars.length = this.words.length = this.lines.length = r.length = this.masks.length = 0, this.isSplit = !1, i && (this._data.animTime = i.totalTime(), i.revert()), (n = (t = this.vars).onRevert) == null || n.call(t, this)
    }
    return this
  }
  static create(t, n) {
    return new _A(t, n)
  }
  static register(t) {
    ga = ga || t || window.gsap, ga && (Al = ga.utils.toArray, Xf = ga.core.context || Xf), !Sh && window.innerWidth > 0 && (ma = document.fonts, Sh = !0)
  }
};
mA.version = "3.15.0";
let Go = mA;
const cN = Je(() => {
    ue.registerPlugin(Te, Zo, Sr, Go), Sr.create("InOut", "0.76,0,0.24,1"), Sr.create("Out", "0.25,1,0.5,1"), Sr.create("In", "0.5,0,0.75,0"), Sr.create("ease", "0.25,0.1,0.25,1"), Sr.create("flip", "0.22, 1, 0.36, 1"), Sr.create("preloaderEase", "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1"), ue.defaults({
      ease: "ease",
      duration: .4
    })
  }),
  uN = /^GTM-[A-Z0-9]+$/,
  fN = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});try{var saved=JSON.parse(localStorage.getItem('cookie')||'null');if(saved&&saved.seen){var granted=saved.agreed===true?'granted':'denied';gtag('consent','update',{analytics_storage:granted,ad_storage:granted,ad_user_data:granted,ad_personalization:granted});}}catch(e){}";

function dN(e) {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${e}');`
}
const hN = Je(() => {
  const e = String(Dn().public.gtmId || "");
  if (!uN.test(e)) return;
  const t = et(!1);
  oA(() => {
    t.value = !0
  }), kl(() => t.value ? {
    script: [{
      key: "consent-default",
      tagPriority: -100,
      innerHTML: fN
    }, {
      key: "gtm",
      tagPriority: -10,
      innerHTML: dN(e)
    }],
    noscript: [{
      key: "gtm-noscript",
      tagPosition: "bodyOpen",
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${e}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    }]
  } : {})
});
var pN = "1.3.14";

function yA(e, t, n) {
  return Math.max(e, Math.min(t, n))
}

function gN(e, t, n) {
  return (1 - n) * e + n * t
}

function mN(e, t, n, r) {
  return gN(e, t, 1 - Math.exp(-n * r))
}

function _N(e, t) {
  return (e % t + t) % t
}
var yN = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(e) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      const n = yA(0, this.currentTime / this.duration, 1);
      t = n >= 1;
      const r = t ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * r
    } else this.lerp ? (this.value = mN(this.value, this.to, this.lerp * 60, e), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
    t && this.stop(), this.onUpdate?.(this.value, t)
  }
  stop() {
    this.isRunning = !1
  }
  fromTo(e, t, {
    lerp: n,
    duration: r,
    easing: i,
    onStart: s,
    onUpdate: o
  }) {
    this.from = this.value = e, this.to = t, this.lerp = n, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, s?.(), this.onUpdate = o
  }
};

function vN(e, t) {
  let n;
  return function(...r) {
    let i = this;
    clearTimeout(n), n = setTimeout(() => {
      n = void 0, e.apply(i, r)
    }, t)
  }
}
var bN = class {
    constructor(e, t, {
      autoResize: n = !0,
      debounce: r = 250
    } = {}) {
      this.wrapper = e, this.content = t, n && (this.debouncedResize = vN(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
      this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
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
  vA = class {
    events = {};
    emit(e, ...t) {
      let n = this.events[e] || [];
      for (let r = 0, i = n.length; r < i; r++) n[r]?.(...t)
    }
    on(e, t) {
      return this.events[e]?.push(t) || (this.events[e] = [t]), () => {
        this.events[e] = this.events[e]?.filter(n => t !== n)
      }
    }
    off(e, t) {
      this.events[e] = this.events[e]?.filter(n => t !== n)
    }
    destroy() {
      this.events = {}
    }
  },
  ly = 100 / 6,
  Hi = {
    passive: !1
  },
  wN = class {
    constructor(e, t = {
      wheelMultiplier: 1,
      touchMultiplier: 1
    }) {
      this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, Hi), this.element.addEventListener("touchstart", this.onTouchStart, Hi), this.element.addEventListener("touchmove", this.onTouchMove, Hi), this.element.addEventListener("touchend", this.onTouchEnd, Hi)
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
    emitter = new vA;
    on(e, t) {
      return this.emitter.on(e, t)
    }
    destroy() {
      this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, Hi), this.element.removeEventListener("touchstart", this.onTouchStart, Hi), this.element.removeEventListener("touchmove", this.onTouchMove, Hi), this.element.removeEventListener("touchend", this.onTouchEnd, Hi)
    }
    onTouchStart = e => {
      const {
        clientX: t,
        clientY: n
      } = e.targetTouches ? e.targetTouches[0] : e;
      this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: e
      })
    };
    onTouchMove = e => {
      const {
        clientX: t,
        clientY: n
      } = e.targetTouches ? e.targetTouches[0] : e, r = -(t - this.touchStart.x) * this.options.touchMultiplier, i = -(n - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
        x: r,
        y: i
      }, this.emitter.emit("scroll", {
        deltaX: r,
        deltaY: i,
        event: e
      })
    };
    onTouchEnd = e => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: e
      })
    };
    onWheel = e => {
      let {
        deltaX: t,
        deltaY: n,
        deltaMode: r
      } = e;
      const i = r === 1 ? ly : r === 2 ? this.window.width : 1,
        s = r === 1 ? ly : r === 2 ? this.window.height : 1;
      t *= i, n *= s, t *= this.options.wheelMultiplier, n *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: t,
        deltaY: n,
        event: e
      })
    };
    onWindowResize = () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  },
  cy = e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
  AN = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    __rafID = null;
    isTouching;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new yN;
    emitter = new vA;
    dimensions;
    virtualScroll;
    constructor({
      wrapper: e = window,
      content: t = document.documentElement,
      eventsTarget: n = e,
      smoothWheel: r = !0,
      syncTouch: i = !1,
      syncTouchLerp: s = .075,
      touchInertiaExponent: o = 1.7,
      duration: a,
      easing: l,
      lerp: c = .1,
      infinite: u = !1,
      orientation: f = "vertical",
      gestureOrientation: h = f === "horizontal" ? "both" : "vertical",
      touchMultiplier: d = 1,
      wheelMultiplier: g = 1,
      autoResize: p = !0,
      prevent: m,
      virtualScroll: v,
      overscroll: y = !0,
      autoRaf: _ = !1,
      anchors: b = !1,
      autoToggle: w = !1,
      allowNestedScroll: S = !1,
      __experimental__naiveDimensions: A = !1
    } = {}) {
      window.lenisVersion = pN, (!e || e === document.documentElement) && (e = window), typeof a == "number" && typeof l != "function" ? l = cy : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
        wrapper: e,
        content: t,
        eventsTarget: n,
        smoothWheel: r,
        syncTouch: i,
        syncTouchLerp: s,
        touchInertiaExponent: o,
        duration: a,
        easing: l,
        lerp: c,
        infinite: u,
        gestureOrientation: h,
        orientation: f,
        touchMultiplier: d,
        wheelMultiplier: g,
        autoResize: p,
        prevent: m,
        virtualScroll: v,
        overscroll: y,
        autoRaf: _,
        anchors: b,
        autoToggle: w,
        allowNestedScroll: S,
        __experimental__naiveDimensions: A
      }, this.dimensions = new bN(e, t, {
        autoResize: p
      }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: !0
      }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new wN(n, {
        touchMultiplier: d,
        wheelMultiplier: g
      }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
        passive: !0
      }), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
    }
    destroy() {
      this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: !0
      }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
    }
    on(e, t) {
      return this.emitter.on(e, t)
    }
    off(e, t) {
      return this.emitter.off(e, t)
    }
    onScrollEnd = e => {
      e instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && e.stopPropagation()
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: {
          lenisScrollEnd: !0
        }
      }))
    };
    onTransitionEnd = e => {
      if (e.propertyName.includes("overflow")) {
        const t = this.isHorizontal ? "overflow-x" : "overflow-y",
          n = getComputedStyle(this.rootElement)[t];
        ["hidden", "clip"].includes(n) ? this.internalStop() : this.internalStart()
      }
    };
    setScroll(e) {
      this.isHorizontal ? this.options.wrapper.scrollTo({
        left: e,
        behavior: "instant"
      }) : this.options.wrapper.scrollTo({
        top: e,
        behavior: "instant"
      })
    }
    onClick = e => {
      const n = e.composedPath().find(r => r instanceof HTMLAnchorElement && r.getAttribute("href")?.includes("#"));
      if (n) {
        const r = n.getAttribute("href");
        if (r) {
          const i = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0,
            s = `#${r.split("#")[1]}`;
          this.scrollTo(s, i)
        }
      }
    };
    onPointerDown = e => {
      e.button === 1 && this.reset()
    };
    onVirtualScroll = e => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(e) === !1) return;
      const {
        deltaX: t,
        deltaY: n,
        event: r
      } = e;
      if (this.emitter.emit("virtual-scroll", {
          deltaX: t,
          deltaY: n,
          event: r
        }), r.ctrlKey || r.lenisStopPropagation) return;
      const i = r.type.includes("touch"),
        s = r.type.includes("wheel");
      this.isTouching = r.type === "touchstart" || r.type === "touchmove";
      const o = t === 0 && n === 0;
      if (this.options.syncTouch && i && r.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return
      }
      const l = this.options.gestureOrientation === "vertical" && n === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (o || l) return;
      let c = r.composedPath();
      c = c.slice(0, c.indexOf(this.rootElement));
      const u = this.options.prevent;
      if (c.find(m => m instanceof HTMLElement && (typeof u == "function" && u?.(m) || m.hasAttribute?.("data-lenis-prevent") || i && m.hasAttribute?.("data-lenis-prevent-touch") || s && m.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(m, {
          deltaX: t,
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
      this.options.gestureOrientation === "both" ? h = Math.abs(n) > Math.abs(t) ? n : t : this.options.gestureOrientation === "horizontal" && (h = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && n > 0 || this.animatedScroll === this.limit && n < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
      const d = i && this.options.syncTouch,
        p = i && r.type === "touchend";
      p && (h = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)), this.scrollTo(this.targetScroll + h, {
        programmatic: !1,
        ...d ? {
          lerp: p ? this.options.syncTouchLerp : 1
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
        const e = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
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
    raf = e => {
      const t = e - (this.time || e);
      this.time = e, this.animate.advance(t * .001), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
    };
    scrollTo(e, {
      offset: t = 0,
      immediate: n = !1,
      lock: r = !1,
      duration: i = this.options.duration,
      easing: s = this.options.easing,
      lerp: o = this.options.lerp,
      onStart: a,
      onComplete: l,
      force: c = !1,
      programmatic: u = !0,
      userData: f
    } = {}) {
      if (!((this.isStopped || this.isLocked) && !c)) {
        if (typeof e == "string" && ["top", "left", "start", "#"].includes(e)) e = 0;
        else if (typeof e == "string" && ["bottom", "right", "end"].includes(e)) e = this.limit;
        else {
          let h;
          if (typeof e == "string" ? (h = document.querySelector(e), h || (e === "#top" ? e = 0 : console.warn("Lenis: Target not found", e))) : e instanceof HTMLElement && e?.nodeType && (h = e), h) {
            if (this.options.wrapper !== window) {
              const g = this.rootElement.getBoundingClientRect();
              t -= this.isHorizontal ? g.left : g.top
            }
            const d = h.getBoundingClientRect();
            e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll
          }
        }
        if (typeof e == "number") {
          if (e += t, e = Math.round(e), this.options.infinite) {
            if (u) {
              this.targetScroll = this.animatedScroll = this.scroll;
              const h = e - this.animatedScroll;
              h > this.limit / 2 ? e = e - this.limit : h < -this.limit / 2 && (e = e + this.limit)
            }
          } else e = yA(0, e, this.limit);
          if (e === this.targetScroll) {
            a?.(this), l?.(this);
            return
          }
          if (this.userData = f ?? {}, n) {
            this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), l?.(this), this.userData = {}, requestAnimationFrame(() => {
              this.dispatchScrollendEvent()
            });
            return
          }
          u || (this.targetScroll = e), typeof i == "number" && typeof s != "function" ? s = cy : typeof s == "function" && typeof i != "number" && (i = 1), this.animate.fromTo(this.animatedScroll, e, {
            duration: i,
            easing: s,
            lerp: o,
            onStart: () => {
              r && (this.isLocked = !0), this.isScrolling = "smooth", a?.(this)
            },
            onUpdate: (h, d) => {
              this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = h - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = h, this.setScroll(this.scroll), u && (this.targetScroll = h), d || this.emit(), d && (this.reset(), this.emit(), l?.(this), this.userData = {}, requestAnimationFrame(() => {
                this.dispatchScrollendEvent()
              }), this.preventNextNativeScrollEvent())
            }
          })
        }
      }
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1
      })
    }
    checkNestedScroll(e, {
      deltaX: t,
      deltaY: n
    }) {
      const r = Date.now(),
        i = e._lenis ??= {};
      let s, o, a, l, c, u, f, h;
      const d = this.options.gestureOrientation;
      if (r - (i.time ?? 0) > 2e3) {
        i.time = Date.now();
        const w = window.getComputedStyle(e);
        i.computedStyle = w;
        const S = w.overflowX,
          A = w.overflowY;
        if (s = ["auto", "overlay", "scroll"].includes(S), o = ["auto", "overlay", "scroll"].includes(A), i.hasOverflowX = s, i.hasOverflowY = o, !s && !o || d === "vertical" && !o || d === "horizontal" && !s) return !1;
        c = e.scrollWidth, u = e.scrollHeight, f = e.clientWidth, h = e.clientHeight, a = c > f, l = u > h, i.isScrollableX = a, i.isScrollableY = l, i.scrollWidth = c, i.scrollHeight = u, i.clientWidth = f, i.clientHeight = h
      } else a = i.isScrollableX, l = i.isScrollableY, s = i.hasOverflowX, o = i.hasOverflowY, c = i.scrollWidth, u = i.scrollHeight, f = i.clientWidth, h = i.clientHeight;
      if (!s && !o || !a && !l || d === "vertical" && (!o || !l) || d === "horizontal" && (!s || !a)) return !1;
      let g;
      if (d === "horizontal") g = "x";
      else if (d === "vertical") g = "y";
      else {
        const w = t !== 0,
          S = n !== 0;
        w && s && a && (g = "x"), S && o && l && (g = "y")
      }
      if (!g) return !1;
      let p, m, v, y, _;
      if (g === "x") p = e.scrollLeft, m = c - f, v = t, y = s, _ = a;
      else if (g === "y") p = e.scrollTop, m = u - h, v = n, y = o, _ = l;
      else return !1;
      return (v > 0 ? p < m : p > 0) && y && _
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
      const e = this.options.wrapper;
      return this.isHorizontal ? e.scrollX ?? e.scrollLeft : e.scrollY ?? e.scrollTop
    }
    get scroll() {
      return this.options.infinite ? _N(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
      return this._isScrolling
    }
    set isScrolling(e) {
      this._isScrolling !== e && (this._isScrolling = e, this.updateClassName())
    }
    get isStopped() {
      return this._isStopped
    }
    set isStopped(e) {
      this._isStopped !== e && (this._isStopped = e, this.updateClassName())
    }
    get isLocked() {
      return this._isLocked
    }
    set isLocked(e) {
      this._isLocked !== e && (this._isLocked = e, this.updateClassName())
    }
    get isSmooth() {
      return this.isScrolling === "smooth"
    }
    get className() {
      let e = "lenis";
      return this.options.autoToggle && (e += " lenis-autoToggle"), this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isScrolling === "smooth" && (e += " lenis-smooth"), e
    }
    updateClassName() {
      this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
  };
const SN = Je(() => {
    history.scrollRestoration = "manual";
    const e = Se("lenis", () => new AN({
        duration: 1.2,
        orientation: "vertical",
        smoothWheel: !0,
        syncTouch: !0,
        allowNestedScroll: !0,
        touchMultiplier: 2,
        easing: n => Math.min(1, 1.001 - Math.pow(2, -10 * n))
      })),
      t = Tt();
    hL(e.value, () => {
      const n = t.currentRoute.value.fullPath.split("#")[0],
        r = t.resolve(location.pathname + location.search + location.hash).fullPath.split("#")[0];
      return n === r
    }), e.value.on("scroll", ({
      scroll: n
    }) => {
      Te.update(), window.UnicornStudio?.setScroll?.(n)
    }), Te.scrollerProxy(document.documentElement, {
      scrollTop(n) {
        return typeof n == "number" && e.value.scrollTo(n, {
          immediate: !0,
          force: !0
        }), e.value.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }
      }
    }), Te.clearScrollMemory("manual"), ue.ticker.add(n => {
      e.value.raf(n * 1e3)
    }), ue.ticker.add(() => {
      pL(e.value.scroll, window.scrollY)
    }), ue.ticker.lagSmoothing(0), e.value.stop()
  }),
  EN = Je(() => {
    const e = Se("navigation-is-pop", () => !1);
    let t = !1;
    window.addEventListener("popstate", () => {
      t = !0
    }), Tt().afterEach(() => {
      e.value = t, t = !1
    })
  }),
  CN = Je(() => {
    const e = Tt(),
      t = Se("navigation-locked", () => !1);
    e.beforeEach(() => {
      if (t.value) return !1
    })
  }),
  uy = new Set,
  fy = new Map;

function TN(e) {
  try {
    return new URL(e, location.href).pathname
  } catch {
    return e
  }
}

function dy(e) {
  const t = TN(e);
  uy.has(t) || (uy.add(t), fy.get(t)?.forEach(n => n()), fy.delete(t))
}
let hy = !1;
const py = new Set;

function eB() {
  hy || (hy = !0, py.forEach(e => e()), py.clear())
}

function kN() {
  let e, t;
  return {
    promise: new Promise((r, i) => {
      e = r, t = i
    }),
    resolve: e,
    reject: t
  }
}
const RN = "activeframe-v1",
  xN = 2,
  gy = 2e3;
async function LN() {
  try {
    return "caches" in globalThis ? await caches.open(RN) : null
  } catch {
    return null
  }
}
class PN {
  file = null;
  manifest = null;
  decoder = null;
  frame = null;
  desideredFrame = 0;
  enabled = !0;
  framesByTimestamp = new Map;
  canvas;
  ctx;
  hardwareAcceleration;
  config = null;
  decodingFrame = null;
  isDecoding = !1;
  deferredLoading = kN();
  cache = null;
  chunkFirstFrame = [];
  loadedChunks = new Set;
  loadingChunks = new Set;
  retryAt = new Map;
  abortControllers = new Set;
  direction = 1;
  frameWaiters = new Map;
  loading;
  constructor(t, n) {
    this.loading = this.deferredLoading.promise, this.canvas = n.canvas;
    const r = n.canvas.getContext("2d");
    if (!r) throw new Error("Canvas 2D context unavailable");
    this.ctx = r, this.hardwareAcceleration = n.hardwareAcceleration ?? "prefer-hardware", this.file = t, this.init().catch(i => {
      console.error("ActiveFrame init failed:", this.file, i), this.deferredLoading.reject(i), this.file && dy(this.file)
    })
  }
  async init() {
    if (!this.file) return;
    const [t, n] = await Promise.all([this.loadManifest(this.file), LN()]);
    if (this.enabled) {
      if (this.manifest = t, this.cache = n, t.frames.forEach((r, i) => {
          this.framesByTimestamp.set(r.t, i), this.chunkFirstFrame[r.c] === void 0 && (this.chunkFirstFrame[r.c] = i)
        }), this.removeStaleChunks(), await this.initDecoder(), !this.enabled) {
        this.decoder?.close(), this.decoder = null;
        return
      }
      await this.loadChunk(0), this.pump(), this.deferredLoading.resolve()
    }
  }
  async loadManifest(t) {
    const n = await fetch(t);
    if (!n.ok) throw new Error(`Manifest request failed: ${n.status}`);
    return await n.json()
  }
  chunkUrl(t) {
    return new URL(this.manifest.chunks[t].file, this.file).href
  }
  async removeStaleChunks() {
    if (!this.cache || !this.manifest?.chunks.length) return;
    const t = new Set(this.manifest.chunks.map((i, s) => this.chunkUrl(s))),
      n = this.chunkUrl(0),
      r = n.slice(0, n.lastIndexOf("/") + 1);
    try {
      for (const i of await this.cache.keys()) i.url.startsWith(r) && !t.has(i.url) && await this.cache.delete(i)
    } catch {}
  }
  chunkOf(t) {
    return this.manifest?.frames[t]?.c ?? 0
  }
  nextChunkToLoad() {
    if (!this.manifest) return null;
    const t = this.chunkOf(this.desideredFrame),
      n = Date.now();
    let r = null,
      i = 1 / 0;
    for (let s = 0; s < this.manifest.chunks.length; s++) {
      if (this.loadedChunks.has(s) || this.loadingChunks.has(s) || (this.retryAt.get(s) ?? 0) > n) continue;
      const o = (s - t) * this.direction,
        a = o >= 0 ? o : -o * 2;
      a < i && (i = a, r = s)
    }
    return r
  }
  pump() {
    for (; this.loadingChunks.size < xN;) {
      const t = this.nextChunkToLoad();
      if (t === null) return;
      this.loadChunk(t)
    }
  }
  async loadChunk(t) {
    if (!this.manifest || this.loadedChunks.has(t) || this.loadingChunks.has(t)) return;
    const n = this.chunkUrl(t),
      r = new AbortController;
    this.loadingChunks.add(t), this.abortControllers.add(r);
    try {
      const i = await this.cache?.match(n).catch(() => {});
      let s;
      if (i) s = await i.arrayBuffer();
      else {
        const o = t === this.chunkOf(this.desideredFrame),
          a = await fetch(n, {
            signal: r.signal,
            priority: o ? "high" : "low",
            cache: this.cache ? "no-store" : "default"
          });
        if (!a.ok) throw new Error(`Chunk request failed: ${a.status}`);
        s = await a.arrayBuffer(), this.cache?.put(n, new Response(s, {
          headers: {
            "Content-Type": "application/octet-stream"
          }
        })).catch(() => {})
      }
      if (!this.manifest) return;
      this.attachChunk(t, s)
    } catch (i) {
      if (r.signal.aborted || !this.file) return;
      console.error("ActiveFrame chunk failed:", n, i), this.retryAt.set(t, Date.now() + gy), setTimeout(() => this.pump(), gy)
    } finally {
      this.loadingChunks.delete(t), this.abortControllers.delete(r), this.pump()
    }
  }
  attachChunk(t, n) {
    const r = this.manifest.frames;
    for (let i = this.chunkFirstFrame[t]; i < r.length && r[i].c === t; i++) {
      const s = r[i];
      s.data = new Uint8Array(n, s.o, s.l)
    }
    this.loadedChunks.add(t), this.retryAt.delete(t), this.file && this.manifest && this.loadedChunks.size >= this.manifest.chunks.length && dy(this.file), !this.isDecoding && this.desideredFrame !== this.frame && this.decodeLoop()
  }
  decodeDescription(t) {
    const n = atob(t),
      r = new Uint8Array(n.length);
    for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
    return r
  }
  async initDecoder() {
    if (!this.manifest) return;
    const t = {
        codec: this.manifest.codec,
        codedWidth: this.manifest.width,
        codedHeight: this.manifest.height,
        colorSpace: {
          primaries: "bt709",
          transfer: "bt709",
          matrix: "bt709",
          fullRange: !1
        },
        description: this.decodeDescription(this.manifest.description)
      },
      n = [{
        ...t,
        hardwareAcceleration: this.hardwareAcceleration,
        optimizeForLatency: !0
      }, {
        ...t,
        hardwareAcceleration: this.hardwareAcceleration
      }, {
        ...t,
        optimizeForLatency: !0
      }, {
        ...t
      }];
    this.config = null;
    for (const r of n)
      if ((await VideoDecoder.isConfigSupported(r)).supported) {
        this.config = r;
        break
      } if (!this.config) throw new Error("Decoder not supported");
    this.decoder = new VideoDecoder({
      output: this.outputFrame.bind(this),
      error: r => console.error("Decoder error:", r)
    }), this.decoder.configure(this.config)
  }
  drawCover(t) {
    const {
      width: n,
      height: r
    } = this.canvas, i = t.displayWidth ?? t.codedWidth, s = t.displayHeight ?? t.codedHeight, o = Math.max(n / i, r / s), a = i * o, l = s * o;
    this.ctx.imageSmoothingEnabled = !0, this.ctx.imageSmoothingQuality = "high", this.ctx.drawImage(t, 0, 0, i, s, (n - a) / 2, (r - l) / 2, a, l)
  }
  outputFrame(t) {
    if (!this.enabled) {
      t.close();
      return
    }
    const n = this.framesByTimestamp.get(t.timestamp);
    if (n === void 0 || n !== this.decodingFrame) {
      t.close();
      return
    }
    this.frame = n;
    try {
      this.drawCover(t)
    } finally {
      this.notifyFrame(n), t.close()
    }
  }
  notifyFrame(t) {
    if (t == null) return;
    const n = this.frameWaiters.get(t);
    n && (this.frameWaiters.delete(t), n.forEach(r => r()))
  }
  whenFrame(t, n = 2500) {
    return this.frame === t ? Promise.resolve() : new Promise(r => {
      const i = this.frameWaiters.get(t) ?? [],
        s = () => r();
      i.push(s), this.frameWaiters.set(t, i), setTimeout(() => {
        const o = this.frameWaiters.get(t);
        o && (this.frameWaiters.set(t, o.filter(a => a !== s)), r())
      }, n)
    })
  }
  resize(t, n) {
    this.canvas.width = t, this.canvas.height = n, this.redraw()
  }
  redraw() {
    if (this.frame === null) return;
    const t = this.frame;
    this.frame = null, this.setFrame(t)
  }
  setFrame(t) {
    if (!this.manifest || !this.decoder) return;
    t = Math.round(Number(t));
    const n = Math.max(0, this.manifest.totalFrames - 1);
    t = Math.min(Math.max(t, 0), n), t !== this.desideredFrame && (this.direction = t > this.desideredFrame ? 1 : -1), this.desideredFrame = t, this.pump(), this.enabled && (this.isDecoding || this.decodeLoop())
  }
  resolveTarget() {
    const t = this.manifest,
      n = this.desideredFrame,
      r = this.chunkOf(n);
    if (this.loadedChunks.has(r)) return n;
    for (let i = 1; i < t.chunks.length; i++) {
      const s = r - i,
        o = r + i;
      if (s >= 0 && this.loadedChunks.has(s)) return this.chunkFirstFrame[s + 1] - 1;
      if (o < t.chunks.length && this.loadedChunks.has(o)) return this.chunkFirstFrame[o]
    }
    return null
  }
  async decodeLoop() {
    this.isDecoding = !0;
    try {
      for (; this.enabled && this.decoder && this.manifest;) {
        const t = this.resolveTarget();
        if (t === null || t === this.frame || (this.decodingFrame = t, this.decodeFromKeyFrame(t), await this.decoder.flush(), this.frame !== t)) break
      }
    } catch {} finally {
      this.isDecoding = !1
    }
  }
  decodeFromKeyFrame(t) {
    if (!this.manifest || !this.decoder) return;
    const n = this.manifest.frames;
    let r = t;
    for (; r > 0 && n[r]?.ty !== "key";) r--;
    for (let i = r; i <= t; i++) {
      const s = n[i];
      if (!s?.data) break;
      this.decoder.decode(new EncodedVideoChunk({
        type: s.ty,
        timestamp: s.t,
        data: s.data
      }))
    }
  }
  destroy() {
    this.frameWaiters.forEach(t => t.forEach(n => n())), this.frameWaiters.clear(), this.abortControllers.forEach(t => t.abort()), this.abortControllers.clear(), this.decoder?.close(), this.decoder = null, this.manifest = null, this.file = null, this.enabled = !1, this.framesByTimestamp.clear(), this.loadedChunks.clear(), this.loadingChunks.clear(), this.retryAt.clear()
  }
}
const ON = "activeframe-v1",
  IN = new Set(["home", "services", "about_v2", "career"]);
let Qf = null;

function MN(e, t) {
  return ti(`${e}_${t}.json`)
}

function Th() {
  return typeof window < "u" && window.innerWidth >= 1024 && "VideoDecoder" in window
}

function bA() {
  return typeof navigator > "u" ? !1 : /Windows/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)
}

function NN() {
  return bA() ? "prefer-software" : "prefer-hardware"
}

function DN() {
  return Qf || (Qf = (async () => {
    if (typeof VideoDecoder > "u") return null;
    const e = bA() ? [
      ["h264", ["avc1.640028", "avc1.640033", "avc1.42c033"]]
    ] : [
      ["h265", ["hvc1.1.6.L120.90", "hvc1.1.6.L120.B0", "hvc1.1.6.L123.90"]],
      ["h264", ["avc1.640028", "avc1.640033"]]
    ];
    for (const [t, n] of e)
      for (const r of n)
        if ((await VideoDecoder.isConfigSupported({
            codec: r
          })).supported) return t;
    return null
  })()), Qf
}

function FN(e) {
  const t = e.split("/").pop() ?? "";
  return IN.has(t) ? ti(`/posters/${t}.jpg`) : ""
}

function BN(e) {
  switch (String(e ?? "").split("___")[0]) {
    case "index":
      return ["/sequences/home"];
    case "services":
      return ["/sequences/services"];
    case "about":
      return ["/sequences/about_v2"];
    case "career":
      return ["/sequences/career"];
    default:
      return []
  }
}
async function UN(e) {
  try {
    if (!Th()) return;
    const t = await DN();
    if (!t) return;
    const n = new URL(MN(e, t), location.href).href,
      r = await fetch(n, {
        cache: "no-cache"
      });
    if (!r.ok) return;
    const s = (await r.json()).chunks[0];
    if (!s) return;
    const o = new URL(s.file, n).href;
    let a = null;
    try {
      a = "caches" in globalThis ? await caches.open(ON) : null
    } catch {
      a = null
    }
    if (a && await a.match(o)) return;
    const l = await fetch(o, {
      priority: "low",
      cache: a ? "no-store" : "default"
    });
    if (!l.ok) return;
    const c = await l.arrayBuffer();
    await a?.put(o, new Response(c, {
      headers: {
        "Content-Type": "application/octet-stream"
      }
    })).catch(() => {})
  } catch {}
}
class tB {
  loading;
  manifest = null;
  engine;
  constructor(t, n) {
    n.canvas.width = n.width, n.canvas.height = n.height, this.engine = new PN(new URL(t, location.href).href, {
      canvas: n.canvas,
      hardwareAcceleration: NN()
    }), this.loading = this.engine.loading.then(() => {
      this.manifest = this.engine.manifest
    })
  }
  get enabled() {
    return this.engine.enabled
  }
  set enabled(t) {
    const n = this.engine.enabled;
    this.engine.enabled = t, t && !n && this.engine.setFrame(this.engine.desideredFrame)
  }
  setFrame(t) {
    this.engine.setFrame(t)
  }
  whenFrame(t, n = 2500) {
    return this.engine.whenFrame(t, n)
  }
  resize(t, n) {
    this.engine.resize(t, n)
  }
  destroy() {
    this.engine.destroy(), this.manifest = null
  }
}
const HN = Je(() => {
    if (!Th()) return;
    const e = Tt(),
      t = n => {
        if (Th())
          for (const r of BN(n)) UN(r)
      };
    t(e.currentRoute.value.name), e.afterEach(n => {
      t(n.name)
    })
  }),
  WN = () => {
    document.documentElement.style.setProperty("--_100svh", `${window.innerHeight}px`)
  },
  jN = Je(() => (WN(), {
    provide: {}
  })),
  $N = Je({
    name: "i18n:plugin:ssg-detect",
    dependsOn: ["i18n:plugin", "i18n:plugin:route-locale-detect"],
    enforce: "post",
    setup(e) {}
  }),
  VN = [tk, ok, wL, ZL, eP, tP, nP, rP, iP, sP, hP, RP, AM, SM, EM, kM, xM, LM, OM, MM, DM, jM, cN, hN, SN, EN, CN, HN, jN, $N],
  zN = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.12/dist/unicornStudio.umd.js",
  qN = 1024,
  GN = 6e3,
  KN = 15e3,
  YN = 2;
let uo = null,
  La = null,
  _c = null,
  my = !1;
const Jf = new Set,
  Cu = () => window.innerWidth >= qN,
  kh = () => !!(window.UnicornStudio?.addScene || window.UnicornStudio?.init),
  XN = () => {
    const e = performance.getEntriesByType("resource");
    let t = 0;
    for (const n of e) n.responseEnd === 0 && (n.name.startsWith("ws:") || n.name.startsWith("wss:") || (t += 1));
    return t
  },
  QN = () => _c || (_c = new Promise(e => {
    const t = () => {
      let n = performance.now();
      const r = n;
      let i = null;
      try {
        i = new PerformanceObserver(o => {
          for (const a of o.getEntries()) a.duration >= 50 && (n = performance.now())
        }), i.observe({
          type: "longtask",
          buffered: !0
        })
      } catch {
        i = null
      }
      const s = window.setInterval(() => {
        const o = performance.now();
        XN() > YN && (n = o);
        const a = o - n >= GN,
          l = o - r >= KN;
        !a && !l || (window.clearInterval(s), i?.disconnect(), e())
      }, 200)
    };
    document.readyState === "complete" ? t() : window.addEventListener("load", t, {
      once: !0
    })
  }), _c),
  JN = () => new Promise(e => {
    const t = r => {
      r || (La = null), e(r)
    };
    if (!Cu()) {
      t(!1);
      return
    }
    if (kh()) {
      t(!0);
      return
    }
    const n = document.createElement("script");
    n.src = zN, n.async = !0, n.addEventListener("load", () => t(kh()), {
      once: !0
    }), n.addEventListener("error", () => {
      n.remove(), t(!1)
    }, {
      once: !0
    }), document.head.appendChild(n)
  }),
  Zf = () => Cu() ? kh() ? Promise.resolve(!0) : La || (La = QN().then(() => JN()), La) : Promise.resolve(!1),
  wA = () => {
    const e = Se("unicorn-ready", () => !1),
      t = p => {
        if (!p) return null;
        const m = window.UnicornStudio?.scenes;
        return m?.length ? m.find(v => v.element === p) ?? m.find(v => !!v.element && p.contains(v.element)) ?? m.find(v => {
          const y = p.querySelector("canvas");
          return !!y && !!v.element?.contains?.(y)
        }) ?? null : null
      },
      n = (p = !1) => [...document.querySelectorAll("[data-us-project], [data-us-project-src]")].filter(m => !(m.getAttribute("data-us-initialized") || !p && m.hasAttribute("data-us-defer"))),
      r = (p, m) => {
        if (!m.addScene) return Promise.resolve(null);
        p.setAttribute("data-us-initialized", "true");
        const v = p.getAttribute("data-us-project-src"),
          y = p.getAttribute("data-us-project");
        return m.addScene({
          element: p,
          projectId: v ? null : y,
          filePath: v,
          dpi: Number(p.getAttribute("data-us-dpi")) || void 0,
          scale: Number(p.getAttribute("data-us-scale")) || void 0,
          fps: Number(p.getAttribute("data-us-fps")) || void 0,
          production: p.getAttribute("data-us-production"),
          lazyLoad: p.getAttribute("data-us-lazyload"),
          fixed: p.getAttribute("data-us-fixed")
        }).then(_ => (i(_), _)).catch(_ => (p.removeAttribute("data-us-initialized"), console.error("Unicorn addScene error:", _), null))
      },
      i = p => {
        !p || p.destroyed || Se("preloader-done").value || (p.paused = !0, Jf.add(p))
      },
      s = () => {
        for (const p of Jf)
          if (!p.destroyed) {
            p.paused = !1;
            try {
              p.refresh ? p.refresh() : p.resize?.()
            } catch (m) {
              console.error("Unicorn refresh error:", m)
            }
          } Jf.clear()
      };
    if (!my) {
      my = !0;
      const p = Se("preloader-done");
      p.value || setTimeout(() => {
        if (p.value) {
          s();
          return
        }
        const m = Qe(p, v => {
          v && (m(), s())
        })
      }, 0)
    }
    const o = async () => {
      if (!Cu() || !await Zf()) return;
      const m = window.UnicornStudio;
      if (!m?.addScene && !m?.init) return;
      if (uo) {
        await uo, n().length && await o();
        return
      }
      const v = (async () => {
        await ur();
        const y = n();
        if (!y.length) {
          e.value = !0;
          return
        }
        m.addScene ? await Promise.all(y.map(_ => r(_, m))) : m.init && await m.init(), e.value = !0
      })().finally(() => {
        uo = null
      });
      uo = v, await v
    }, a = async p => {
      if (!Cu() || !p || p.getAttribute("data-us-initialized") || !await Zf()) return;
      const v = window.UnicornStudio;
      v?.addScene && (uo && await uo, !p.getAttribute("data-us-initialized") && await r(p, v))
    }, l = p => {
      if (!p) return;
      const m = t(p);
      if (!m) {
        p.removeAttribute("data-us-initialized");
        return
      }
      try {
        m.destroy?.()
      } catch (_) {
        console.error("Unicorn destroy error:", _)
      }
      const v = window.UnicornStudio?.scenes;
      if (!v?.length) return;
      const y = v.indexOf(m);
      y !== -1 && v.splice(y, 1)
    }, c = () => {
      const p = window.UnicornStudio;
      if (p) {
        try {
          typeof p.destroy == "function" ? p.destroy() : p.scenes?.length && [...p.scenes].forEach(m => m.destroy?.())
        } catch (m) {
          console.error("Unicorn destroyAll error:", m)
        }
        p.scenes && (p.scenes.length = 0), document.querySelectorAll("[data-us-initialized]").forEach(m => m.removeAttribute("data-us-initialized")), e.value = !1
      }
    }, u = (p, m) => {
      const v = t(p);
      v && (v.paused = m)
    }, f = p => {
      const m = p.getBoundingClientRect();
      if (m.width < 1 || m.height < 1) return !1;
      const v = window.innerHeight || document.documentElement.clientHeight,
        y = window.innerWidth || document.documentElement.clientWidth;
      return m.bottom > -120 && m.top < v + 120 && m.right > 0 && m.left < y
    }, h = p => {
      const m = t(p);
      if (!m || m.destroyed) return;
      const v = m.paused !== !1;
      if (m.paused = !1, !!v) {
        try {
          m.refresh ? m.refresh() : m.resize?.()
        } catch (y) {
          console.error("Unicorn refresh error:", y)
        }
        window.UnicornStudio?.setScroll?.(window.scrollY || window.pageYOffset || 0)
      }
    };
    return {
      unicornReady: e,
      ensureUnicornScript: Zf,
      initUnicorn: o,
      initUnicornEl: a,
      getScene: t,
      destroyScene: l,
      destroyAllScenes: c,
      setScenePaused: u,
      bindSceneScrollPause: (p, m, v) => {
        if (!p || !m) return () => {};
        const y = () => u(p, !1),
          _ = () => u(p, !0),
          b = {
            onEnter: y,
            onEnterBack: y,
            onLeave: _,
            onLeaveBack: _,
            ...v
          },
          w = Te.create({
            trigger: m,
            start: "top bottom",
            end: "bottom top",
            ...b
          });
        return w.isActive ? b.onEnter?.(w) : b.onLeaveBack?.(w), () => {
          w.kill()
        }
      },
      bindSceneInView: p => {
        if (!p) return () => {};
        let m = 0;
        const v = () => {
            const b = t(p);
            !b || b.destroyed || (f(p) ? h(p) : b.paused = !0)
          },
          y = () => {
            m || (m = requestAnimationFrame(() => {
              m = 0, v()
            }))
          },
          _ = new IntersectionObserver(y, {
            rootMargin: "120px 0px"
          });
        return _.observe(p), window.addEventListener("scroll", y, {
          passive: !0
        }), y(), () => {
          _.disconnect(), window.removeEventListener("scroll", y), m && cancelAnimationFrame(m)
        }
      }
    }
  },
  Rh = () => Ae().$device,
  ZN = 1024;
let _y = !1;

function af() {
  const e = Se("viewport-desktop", () => !Rh().isMobile),
    t = Se("viewport-mobile", () => Rh().isMobile),
    n = () => {
      const r = window.innerWidth < ZN;
      e.value = !r, t.value = r
    };
  return Bn(() => {
    n(), !_y && (_y = !0, window.addEventListener("resize", n))
  }), {
    isDesktop: e,
    isMobile: t
  }
}
const eD = mt({
    __name: "GlobalBg",
    setup(e) {
      const {
        locale: t
      } = Pi(), n = Tl(), r = Se("transition-done"), {
        destroyScene: i,
        initUnicornEl: s,
        bindSceneScrollPause: o,
        setScenePaused: a
      } = wA(), l = et(), c = et(!1), u = et(!1), {
        isDesktop: f
      } = af();
      let h = null;
      const d = {
          hero: !1,
          projects: !1,
          locations: !1,
          page: !1
        },
        g = () => {
          h?.(), h = null, i(l.value), u.value = !1
        },
        p = () => {
          !f.value && c.value && g(), c.value = f.value
        },
        m = L => {
          const T = L.replace(/^\/(?:en|pl)(?=\/|$)/, "");
          return T ? T.length > 1 ? T.replace(/\/+$/, "") : T : "/"
        },
        v = L => m(L) === "/",
        y = L => {
          const T = m(L);
          return !!(T === "/lets-talk" || T.startsWith("/lets-talk/") || T === "/feed" || T.startsWith("/feed/") || /^\/career\/[^/]+/.test(T))
        },
        _ = () => {
          const L = l.value;
          !L || !u.value || a(L, d.hero || d.projects || d.locations || d.page)
        },
        b = () => {
          d.hero = !1, d.projects = !1, d.locations = !1, d.page = !1
        },
        w = (L, T, O, B) => {
          const P = l.value;
          if (!P) return () => {};
          const W = G => {
            d[T] = G, _()
          };
          return o(P, L, {
            start: B,
            end: "bottom top",
            id: O,
            onEnter: () => W(!0),
            onEnterBack: () => W(!0),
            onLeave: () => W(!1),
            onLeaveBack: () => W(!1)
          })
        },
        S = () => {
          if (h?.(), h = null, !l.value || !u.value) return;
          if (b(), y(n.path)) {
            d.page = !0, _();
            return
          }
          if (!v(n.path)) {
            _();
            return
          }
          const T = [],
            O = document.querySelector(".main-page section.hero"),
            B = document.querySelector(".main-page section.projects"),
            P = document.querySelector(".main-page .locations-industries-wrap");
          O && T.push(w(O, "hero", `${Pc}global-bg-hero`, "top bottom")), B && T.push(w(B, "projects", `${Pc}global-bg-projects`, "top top")), P && T.push(w(P, "locations", `${Pc}global-bg-locations`, "top top")), h = () => {
            T.forEach(W => W())
          }, _()
        },
        A = async () => {
          await ur(), c.value && (await s(l.value), c.value && (u.value = !0, await ur(), r.value && S()))
        };
      return Bn(() => {
        p(), window.addEventListener("resize", p), A()
      }), Qe(c, L => {
        L && A()
      }), Qe(t, async () => {
        g(), await A()
      }), Qe(r, async L => {
        if (!L) {
          h?.(), h = null, u.value && a(l.value, !0);
          return
        }
        await ur(), S(), Te.refresh()
      }, {
        flush: "sync"
      }), Mi(() => {
        window.removeEventListener("resize", p), g()
      }), (L, T) => re(c) ? (me(), Be("div", {
        key: 0,
        ref_key: "unicornEl",
        ref: l,
        "data-us-project": "jpjqlfaa3VEwMnWFwjzY",
        "data-us-production": "true",
        "data-us-fps": "30",
        "data-us-scale": "1",
        "data-us-dpi": "0.75",
        class: Yn(["unicorn-global-bg", {
          "is-visible": re(u)
        }])
      }, null, 2)) : En("", !0)
    }
  }),
  tn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, i] of t) n[r] = i;
    return n
  },
  tD = Object.assign(tn(eD, [
    ["__scopeId", "data-v-88b1bb08"]
  ]), {
    __name: "CommonGlobalBg"
  }),
  nD = {
    key: 0,
    class: "background"
  },
  rD = {
    class: "text-wrap"
  },
  iD = {
    class: "text-1"
  },
  sD = {
    class: "text-2"
  },
  oD = mt({
    __name: "Default",
    props: {
      text: {},
      white: {
        type: Boolean
      },
      border: {
        type: Boolean
      },
      withoutBg: {
        type: Boolean
      },
      typography: {},
      transparent: {
        type: Boolean
      }
    },
    setup(e) {
      const t = et(),
        n = et(!1);
      let r = null,
        i = null,
        s = null,
        o = null;
      const {
        isMobile: a
      } = af(), {
        durIn: l,
        durOut: c
      } = Se("common-vars").value, u = () => {
        if (!t.value) return;
        const d = t.value.querySelector(".text-1"),
          g = t.value.querySelector(".text-2");
        if (!d || !g) return;
        r = new Go(d, {
          type: "chars",
          mask: "chars",
          charsClass: "char",
          smartWrap: !0,
          aria: "none"
        }), i = new Go(g, {
          type: "chars",
          mask: "chars",
          charsClass: "char",
          smartWrap: !0,
          aria: "none"
        });
        const p = r.chars,
          m = i.chars;
        s = ue.timeline({
          paused: !0
        }), s.to(p, {
          xPercent: -100,
          stagger: .1
        }, 0), ue.set(m, {
          visibility: "visible"
        }), s.fromTo(m, {
          xPercent: 100
        }, {
          xPercent: 0,
          stagger: .1
        }, .4)
      };
      Bn(() => {
        document.fonts.ready.then(() => {
          u()
        })
      });
      const f = () => {
          a.value || (n.value = !0, o && o.kill(), o = ue.to(s, {
            progress: 1,
            duration: l + .8,
            ease: "Out",
            overwrite: !0
          }))
        },
        h = () => {
          a.value || (n.value = !1, o && o.kill(), o = ue.to(s, {
            progress: 0,
            duration: c,
            ease: "Out",
            overwrite: !0
          }))
        };
      return (d, g) => (me(), Be("span", {
        ref_key: "btnTemplate",
        ref: t,
        class: Yn(["btn-template", [{
          white: e.white,
          border: e.border,
          withoutBg: e.withoutBg,
          transparent: e.transparent,
          hovered: re(n)
        }, e.typography || "l1"]]),
        onMouseenter: f,
        onMouseleave: h
      }, [e.withoutBg ? En("", !0) : (me(), Be("span", nD)), te("span", rD, [te("span", iD, Pt(e.text), 1), te("span", sD, Pt(e.text), 1)])], 34))
    }
  }),
  aD = Object.assign(tn(oD, [
    ["__scopeId", "data-v-5369c8a2"]
  ]), {
    __name: "CommonButtonDefault"
  }),
  lD = mt({
    name: "NuxtLinkLocale",
    props: {
      ...d_.props,
      locale: {
        type: String,
        default: void 0,
        required: !1
      }
    },
    setup(e, {
      slots: t
    }) {
      const n = tA(),
        r = be(() => {
          const a = e.to || e.href || "";
          return typeof a == "string" && Ni(a, {
            acceptRelative: !0
          })
        }),
        i = be(() => {
          const a = e.to ?? e.href,
            l = a != null ? n(a, e.locale) : a;
          return l && We(e.to) && (l.state = e.to?.state), a != null ? l : a
        }),
        s = be(() => {
          if (e.external) return !0;
          const a = e.to || e.href || "";
          return We(a) ? !1 : a === "" || r.value
        }),
        o = () => {
          const a = {
            ...e
          };
          return s.value || (a.to = i.value), delete a.href, delete a.locale, a
        };
      return () => Vt(d_, o(), t.default)
    }
  }),
  cD = mt({
    __name: "Chevron",
    props: {
      white: {
        type: Boolean
      },
      direction: {}
    },
    setup(e) {
      return (t, n) => (me(), Be("svg", {
        class: Yn(["icon", [e.direction, {
          white: e.white
        }]]),
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [...n[0] || (n[0] = [te("path", {
        d: "M6.58426 6.00035L4.10938 3.52546L4.81648 2.81836L7.99846 6.00035L4.81648 9.1823L4.10938 8.4752L6.58426 6.00035Z",
        fill: "#201805"
      }, null, -1)])], 2))
    }
  }),
  AA = Object.assign(tn(cD, [
    ["__scopeId", "data-v-29547f97"]
  ]), {
    __name: "IconChevron"
  }),
  uD = {
    key: 0,
    class: "arrow"
  },
  fD = {
    class: "text-wrap"
  },
  dD = {
    class: "text"
  },
  hD = mt({
    __name: "Template",
    props: {
      text: {},
      white: {
        type: Boolean
      },
      arrow: {
        type: Boolean
      }
    },
    setup(e) {
      return (t, n) => {
        const r = AA;
        return me(), Be("span", {
          class: Yn(["link-template l2", {
            white: e.white
          }])
        }, [e.arrow ? (me(), Be("span", uD, [we(r, {
          white: e.white
        }, null, 8, ["white"])])) : En("", !0), te("span", fD, [te("span", dD, Pt(e.text), 1), n[0] || (n[0] = te("span", {
          class: "line-1"
        }, null, -1)), n[1] || (n[1] = te("span", {
          class: "line-2"
        }, null, -1))])], 2)
      }
    }
  }),
  Qp = Object.assign(tn(hD, [
    ["__scopeId", "data-v-49acb149"]
  ]), {
    __name: "CommonLinkTemplate"
  }),
  pD = {},
  gD = {
    class: "icon",
    viewBox: "0 0 41 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function mD(e, t) {
  return me(), Be("svg", gD, [...t[0] || (t[0] = [te("path", {
    d: "M18.6816 47.9999H29.4473L29.4465 47.9993C29.4415 43.672 29.4365 35.5387 29.4515 31.2114C29.4548 30.4018 29.4498 29.6891 29.4453 29.0584L29.4453 29.0575C29.4278 26.5704 29.4193 25.3576 29.9662 24.4957C30.4866 23.6755 31.51 23.173 33.5074 22.1923C34.2583 21.8236 35.1469 21.3873 36.1981 20.8412C38.518 19.6406 39.9357 17.9855 40.0701 15.6895C40.097 15.2267 40.1214 9.66034 40.1406 5.28098C40.1525 2.55545 40.1625 0.289679 40.1697 0H29.0835L29.0835 21.5626C29.0835 23.2459 27.7144 24.8125 26.7393 25.3136C22.269 27.6108 20.2733 28.3728 19.3825 29.8165C18.6517 31.0009 18.6644 32.6441 18.6644 35.9703C18.6709 36.6363 18.678 37.3706 18.6759 38.1855C18.6715 39.7953 18.6768 48 18.6768 48L18.6816 47.9999Z",
    fill: "currentColor"
  }, null, -1), te("path", {
    d: "M0.0171886 47.9972H10.7829L10.7821 47.9966L10.7812 47.2816C10.7766 43.3026 10.7729 40.173 10.787 36.0872C10.7904 35.2772 10.7854 34.5643 10.7809 33.9333C10.7634 31.4462 10.7549 30.2334 11.3018 29.3715C11.8222 28.5513 12.8456 28.0488 14.843 27.0681C15.5939 26.6994 16.4825 26.2631 17.5337 25.717C19.8536 24.5163 21.2713 22.8613 21.4057 20.5653C21.4324 20.1052 21.4567 12.7822 21.4758 7.00557C21.488 3.35452 21.498 0.321196 21.5053 0.028756L10.4191 0.028755L10.4191 26.4384C10.4191 28.1217 9.05002 29.6883 8.07493 30.1894C3.60456 32.4866 1.60889 33.2486 0.718067 34.6923C-0.0127572 35.8767 1.52964e-05 37.5199 1.44897e-05 40.8461C0.00648295 41.5121 0.0136155 42.2464 0.0114446 43.0613C0.00705894 44.6711 0.0124262 47.9973 0.0124262 47.9973L0.0171886 47.9972Z",
    fill: "currentColor"
  }, null, -1)])])
}
const _D = Object.assign(tn(pD, [
  ["render", mD]
]), {
  __name: "IconLogoSmall"
});

function ea(e) {
  const {
    locale: t
  } = Pi(), n = be(() => `${e}:${t.value}`), {
    data: r
  } = NL(n.value);
  return {
    data: r
  }
}
const yD = {
    key: 0,
    class: "two-round-photos"
  },
  vD = {
    class: "photo1",
    viewBox: "0 0 42 48",
    fill: "none"
  },
  bD = ["id"],
  wD = ["href"],
  AD = ["fill"],
  SD = {
    class: "logo"
  },
  ED = mt({
    __name: "TwoRoundPhotos",
    setup(e) {
      const {
        data: t
      } = ea("common"), n = k1();
      return (r, i) => {
        const s = _D;
        return re(t) ? (me(), Be("div", yD, [(me(), Be("svg", vD, [te("defs", null, [te("pattern", {
          id: re(n),
          patternUnits: "userSpaceOnUse",
          width: "42",
          height: "48"
        }, [te("image", {
          href: re(t).forInquiriesImage.thumbnail || re(t).forInquiriesImage.small || re(t).forInquiriesImage.original,
          width: "42",
          height: "48",
          preserveAspectRatio: "xMidYMid slice"
        }, null, 8, wD)], 8, bD)]), te("path", {
          d: "M24 0C30.8485 0 37.0268 2.86867 41.3994 7.46973C38.0052 12.1025 36 17.8168 36 24C36 30.1829 38.0055 35.8966 41.3994 40.5293C37.0268 45.1306 30.8487 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0Z",
          fill: `url(#${re(n)})`
        }, null, 8, AD)])), te("div", SD, [we(s)])])) : En("", !0)
      }
    }
  }),
  CD = Object.assign(tn(ED, [
    ["__scopeId", "data-v-a24e8721"]
  ]), {
    __name: "CommonTwoRoundPhotos"
  });

function TD(e) {
  if (!e) return "";
  const t = e.replace(/[^\d+]/g, "");
  return t ? `tel:${t}` : ""
}
const kD = {
    key: 0,
    class: "inquiries"
  },
  RD = {
    class: "inquiries-text"
  },
  xD = {
    class: "title l2"
  },
  LD = ["href"],
  PD = ["href"],
  OD = mt({
    __name: "Inquiries",
    props: {
      white: {
        type: Boolean
      },
      withPhoto: {
        type: Boolean
      }
    },
    setup(e) {
      const {
        data: t
      } = ea("common");
      return (n, r) => {
        const i = Qp,
          s = CD;
        return re(t) ? (me(), Be("div", kD, [te("div", RD, [te("p", xD, Pt(re(t)?.forInquiriesTitle), 1), te("a", {
          class: "link link-1",
          href: `mailto:${re(t)?.mail}`
        }, [we(i, {
          text: re(t)?.mail,
          arrow: "",
          white: e.white
        }, null, 8, ["text", "white"])], 8, LD), te("a", {
          class: "link",
          href: re(TD)(re(t)?.phoneNumber)
        }, [we(i, {
          text: re(t)?.phoneNumber,
          arrow: "",
          white: e.white
        }, null, 8, ["text", "white"])], 8, PD)]), e.withPhoto ? (me(), Rn(s, {
          key: 0,
          class: "inquiries-photos"
        })) : En("", !0)])) : En("", !0)
      }
    }
  }),
  ID = Object.assign(tn(OD, [
    ["__scopeId", "data-v-55c315ea"]
  ]), {
    __name: "CommonInquiries"
  }),
  MD = mt({
    __name: "Gradient",
    props: {
      top: {
        type: Boolean
      }
    },
    setup(e) {
      return (t, n) => (me(), Be("div", {
        class: Yn(["gradient", {
          top: e.top
        }])
      }, null, 2))
    }
  }),
  SA = Object.assign(tn(MD, [
    ["__scopeId", "data-v-dcb0411e"]
  ]), {
    __name: "CommonGradient"
  }),
  ND = () => ({
    open: () => {
      Vs(!0);
      const n = ue.timeline({
        onComplete() {
          ue.set(".menu-wrap", {
            pointerEvents: "auto"
          })
        }
      });
      return n.set(".menu-wrap", {
        autoAlpha: 1
      }), n.to(".menu-wrap .menu-bg", {
        opacity: 1
      }), n.fromTo(".menu-wrap .menu", {
        opacity: 0
      }, {
        opacity: 1
      }, "<"), n.fromTo(".menu-wrap .nav-link .text-1 .char", {
        xPercent: 100
      }, {
        xPercent: 0,
        duration: .7,
        ease: "Out"
      }), n.fromTo(".menu-wrap .inquiries-photos, .menu-wrap .cta-mob, .wrap-mob-lang", {
        y: "3.333rem",
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: .7,
        ease: "Out",
        force3D: !0
      }, "<"), n.fromTo(".menu-wrap .menu-foot .line", {
        yPercent: 105
      }, {
        yPercent: 0,
        duration: .7,
        ease: "Out",
        force3D: !0
      }, "<"), n
    },
    close: () => {
      Vs(!1);
      const n = ue.timeline();
      return n.set(".menu-wrap", {
        pointerEvents: "none"
      }), n.to(".menu-wrap .nav-link .btn-template:not(.hovered) .text-1 .char", {
        xPercent: 100,
        ease: "In"
      }), n.to(".menu-wrap .inquiries-photos, .menu-wrap .cta-mob, .wrap-mob-lang", {
        opacity: 0,
        y: "3.333rem",
        ease: "In"
      }, "<"), n.to(".menu-wrap .menu-foot .line", {
        yPercent: 105,
        ease: "In"
      }, "<"), n.to(".menu-wrap .menu-bg", {
        opacity: 0
      }), n.to(".menu-wrap .menu", {
        opacity: 0
      }, "<"), n.set(".menu-wrap", {
        autoAlpha: 0
      }), n
    }
  });
async function DD(e, t = {}) {
  await document.fonts.ready;
  const n = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e,
    {
      durIn: r,
      durOut: i,
      delayReveal: s
    } = Se("common-vars").value,
    {
      stagger: o = 0,
      ...a
    } = t,
    l = ue.timeline({
      paused: !0
    }),
    c = ue.timeline({
      paused: !0
    });
  return n.forEach((u, f) => {
    ue.set(u, {
      opacity: 0,
      y: "3.333rem"
    });
    const h = ue.timeline();
    h.to(u, {
      opacity: 1,
      y: 0,
      duration: r,
      delay: s,
      ease: "Out",
      ...a
    });
    const d = ue.timeline();
    d.to(u, {
      opacity: 0,
      y: "3.333rem",
      duration: i,
      ease: "In",
      ...a
    });
    const g = f * o;
    l.add(h, g), c.add(d, g)
  }), {
    in: l,
    out: c
  }
}

function FD(e) {
  const t = [];
  return e.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li").forEach(n => {
    const r = (n.textContent || "").replace(/[\s\u00a0]/g, ""),
      i = n.querySelector("img, video, svg, iframe, picture");
    r || i || (n.classList.add("split-gap"), t.push(n))
  }), t
}
async function Jp(e, t = {}) {
  await document.fonts.ready;
  const n = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e,
    r = ue.timeline({
      paused: !0
    }),
    i = ue.timeline({
      paused: !0
    }),
    s = [];
  return n.forEach(o => {
    const a = FD(o),
      l = new Go(o, {
        type: "lines",
        mask: "lines",
        linesClass: "line",
        ignore: a,
        aria: "none"
      });
    s.push(l);
    const {
      lines: c
    } = l;
    if (!c.length) {
      ue.set(o, {
        opacity: 1
      });
      return
    }
    ue.set(c, {
      yPercent: 120
    }), ue.set(o, {
      opacity: 1
    });
    const u = ue.timeline();
    u.to(c, {
      yPercent: 0,
      duration: 1.2,
      ease: "Out",
      delay: .3,
      stagger: .05,
      ...t
    });
    const f = ue.timeline();
    f.to(c, {
      yPercent: -120,
      duration: .8,
      ease: "In",
      stagger: .03,
      ...t
    }), r.add(u, 0), i.add(f, 0)
  }), {
    in: r,
    out: i,
    revert() {
      r.kill(), i.kill(), s.forEach(o => o.revert())
    }
  }
}
const BD = {
    class: "menu-bg"
  },
  UD = ["src"],
  HD = {
    class: "nav"
  },
  WD = {
    key: 0,
    class: "wrap-mob-lang"
  },
  jD = {
    class: "l2"
  },
  $D = {
    class: "lang"
  },
  VD = {
    class: "lang-current"
  },
  zD = {
    class: "lang-btn l2"
  },
  qD = {
    class: "lang-list"
  },
  GD = ["onClick"],
  KD = {
    class: "lang-text"
  },
  YD = {
    class: "menu-foot"
  },
  XD = ["href"],
  QD = mt({
    __name: "Menu",
    setup(e) {
      const {
        t
      } = Pi(), {
        data: n
      } = ea("common"), {
        unicornReady: r,
        setScenePaused: i,
        destroyScene: s,
        initUnicornEl: o
      } = wA(), a = et(), {
        locale: l,
        locales: c,
        setLocaleCookie: u
      } = Pi(), f = Dn().public.localizationEnabled, h = Yp(), d = Se("header-state"), g = be(() => d.value.white), p = Se("menu-prev-white", () => null), m = Se("menu-unicorn-warm", () => !1), {
        close: v
      } = ND(), {
        isDesktop: y
      } = af(), _ = Tt(), b = Tl(), w = be(() => d.value.isMenuOpen);
      let S = null;
      const A = H => {
          if (H === l.value) return;
          const q = h(H);
          u(H), window.location.assign(q)
        },
        L = H => H === "/" ? H : H.replace(/\/+$/, ""),
        T = () => {
          d.value.isMenuOpen && (d.value.isMenuOpen = !1, p.value !== null && (d.value.white = p.value, p.value = null), v())
        },
        O = H => {
          const q = L(_.resolve(H).path),
            K = L(b.path);
          q === K && T()
        },
        B = et(),
        P = async () => {
          const H = B.value,
            q = H.querySelector(".inquiries-photos"),
            K = H.querySelectorAll(".inquiries .title, .inquiries .link, .privacy");
          await DD(q), await Jp(K)
        }, W = Dn().public.hideFeedAndCareer, G = [{
          text: t("projects"),
          link: "/projects"
        }, {
          text: t("services"),
          link: "/services"
        }, {
          text: t("about"),
          link: "/about"
        }, {
          text: t("career"),
          link: "/career"
        }, {
          text: t("feed"),
          link: "/feed"
        }, {
          text: t("contact"),
          link: "/contact"
        }].filter(H => !W || H.link !== "/career" && H.link !== "/feed"), X = async () => {
          const H = a.value;
          !y.value || !H || (H.getAttribute("data-us-initialized") || (S || (S = o(H).finally(() => {
            S = null
          })), await S), H.getAttribute("data-us-initialized") && i(H, !w.value))
        };
      return Qe(w, H => {
        if (y.value) {
          if (H) {
            X();
            return
          }
          i(a.value, !0)
        }
      }), Qe(m, H => {
        !H || w.value || X()
      }), Bn(() => {
        P()
      }), Mi(() => {
        s(a.value)
      }), (H, q) => {
        const K = aD,
          Z = lD,
          I = AA,
          ie = ID,
          ce = SA;
        return me(), Be("div", {
          ref_key: "menuWrap",
          ref: B,
          class: Yn(["menu-wrap", {
            open: re(w)
          }])
        }, [te("div", BD, [re(y) ? (me(), Be("div", {
          key: 0,
          ref_key: "unicornEl",
          ref: a,
          "data-us-project": "DqLVmZ3FOXF6RlOQzqvr",
          "data-us-production": "true",
          "data-us-fps": "30",
          "data-us-scale": "1",
          "data-us-dpi": "0.75",
          "data-us-defer": "",
          class: Yn(["unicorn-bg", {
            "is-visible": re(r)
          }])
        }, null, 2)) : (me(), Be("img", {
          key: 1,
          class: "inner-media",
          draggable: "false",
          src: ("publicUrl" in H ? H.publicUrl : re(ti))("/images/mob-bg.jpg"),
          alt: "",
          width: "674",
          height: "1484",
          decoding: "async"
        }, null, 8, UD))]), te("div", {
          class: "menu",
          onClick: fE(T, ["self"])
        }, [te("nav", HD, [(me(!0), Be(pt, null, $c(re(G), ({
          text: ve,
          link: pe
        }, xe) => (me(), Rn(Z, {
          key: xe,
          to: pe,
          class: "nav-link",
          onClick: Me => O(pe)
        }, {
          default: Ao(() => [we(K, {
            text: ve,
            typography: "h1-light",
            "without-bg": "",
            white: ""
          }, null, 8, ["text"])]),
          _: 2
        }, 1032, ["to", "onClick"]))), 128)), re(f) ? (me(), Be("div", WD, [te("p", jD, Pt(re(l) === "pl" ? "język" : "language"), 1), te("div", $D, [te("div", VD, [te("button", zD, Pt(re(l)?.toUpperCase()), 1), we(I, {
          white: re(g),
          class: "lang-arrow"
        }, null, 8, ["white"])]), te("div", qD, [(me(!0), Be(pt, null, $c(re(c), ve => (me(), Be("button", {
          key: ve.code,
          class: Yn([{
            active: re(l) === ve.code
          }, "lang-item l1"]),
          onClick: pe => A(ve.code)
        }, [te("span", KD, Pt(ve.name), 1)], 10, GD))), 128))])])])) : En("", !0)]), te("div", YD, [we(ie, {
          class: "menu-inquiries",
          white: "",
          "with-photo": ""
        }), re(n)?.policyPrivacy ? (me(), Be("a", {
          key: 0,
          href: re(n).policyPrivacy,
          class: "privacy l2",
          target: "_blank",
          rel: "noopener noreferrer"
        }, Pt(H.$t("privacy_policy")), 9, XD)) : En("", !0)]), we(ce, {
          class: "menu-gradient"
        })])], 2)
      }
    }
  }),
  JD = Object.assign(tn(QD, [
    ["__scopeId", "data-v-848913e4"]
  ]), {
    __name: "CommonMenu"
  }),
  ZD = {
    class: "preloader"
  },
  e2 = {
    class: "content"
  },
  t2 = {
    class: "video-logo"
  },
  n2 = ["src"],
  r2 = {
    class: "footer"
  },
  i2 = {
    class: "footer-head"
  },
  s2 = {
    class: "left"
  },
  o2 = {
    class: "l2 descr"
  },
  a2 = {
    class: "right"
  },
  l2 = {
    class: "l2 percent"
  },
  c2 = {
    key: 0,
    class: "l2 loading"
  },
  u2 = {
    key: 0,
    class: "media-wrap"
  },
  f2 = ["src", "width", "height", "fetchpriority"],
  d2 = 1.5,
  yy = 1.1,
  vy = .06,
  h2 = mt({
    __name: "Preloader",
    setup(e) {
      const t = Se("preloader-done"),
        {
          data: n
        } = ea("common"),
        r = et([]),
        i = et(0),
        s = Tl(),
        o = String(s.name).includes("index"),
        a = String(s.name).includes("services__");
      let l = null;
      const c = et(null);
      Bn(() => {
        const f = c.value;
        if (f) {
          f.disablePictureInPicture = !0, f.pause();
          const h = () => {
            if (f.paused) try {
              f.currentTime = 0
            } catch {}
          };
          f.readyState >= 1 ? h() : f.addEventListener("loadedmetadata", h, {
            once: !0
          })
        }
        setTimeout(() => {
          u()
        }, 100)
      }), Zs(() => {
        l?.kill()
      });
      const u = async () => {
        if (o) {
          const A = (n.value?.preloaderImages ?? []).flatMap(T => {
              const B = window.innerWidth < 1024 ? "medium" : "large",
                P = T[B] || T.medium || T.small || T.original;
              if (!P) return [];
              const W = T.widths?.[B] || T.widths?.medium || T.width,
                G = T.width && T.height && W ? Math.round(T.height * W / T.width) : T.height;
              return [{
                src: P,
                width: W,
                height: G
              }]
            }),
            L = FN("/sequences/home") || ti("/posters/home.jpg");
          r.value = [...A, {
            src: L,
            width: 1600,
            height: 900
          }], await ur()
        }
        const f = document.querySelector(".preloader"),
          h = f?.querySelector(".content"),
          d = f?.querySelector(".video-logo"),
          g = f?.querySelector(".footer"),
          p = f?.querySelector(".progress"),
          m = document?.querySelector("section.hero"),
          v = f?.querySelector(".media-wrap"),
          y = f ? [...f.querySelectorAll(".media-item")] : [],
          _ = await Jp(".preloader .left, .preloader .right"),
          b = localStorage.getItem("visited"),
          w = y.length ? yy + (y.length - 1) * vy : d2,
          S = ue.timeline({
            delay: .1,
            onStart() {
              setTimeout(() => window.scrollTo(0, 0), 1e3)
            },
            onComplete() {
              const A = a && window.innerWidth >= 1024;
              o ? setTimeout(() => {
                Vs(!1)
              }, 1550) : A || Vs(!1), t.value = !0
            }
          });
        if ((!b || o) && (ue.set(h, {
            opacity: 1
          }), ue.set(d, {
            opacity: 0
          }), ue.set(g, {
            opacity: 0
          }), S.to(d, {
            opacity: 1,
            duration: .5,
            onStart() {
              const A = c.value;
              if (A) {
                try {
                  A.currentTime = 0
                } catch {}
                A.play()?.catch(() => {})
              }
            }
          }), S.addLabel("reveal", "<+=2"), S.to(g, {
            opacity: 1,
            duration: .4
          }, "reveal"), S.to(i, {
            value: 100,
            snap: "value",
            duration: w,
            ease: "power3.out"
          }, "reveal"), S.to(p, {
            scaleX: 1,
            duration: w,
            ease: "power3.out"
          }, "reveal"), S.add(() => {
            _.in.play(0)
          }, "reveal"), S.addLabel("land", `reveal+=${w}`), S.add(() => {
            _.out.pause(0)
          }, "land"), S.add(_.out, "land"), S.to(h, {
            opacity: 0,
            duration: .4
          }, "land"), localStorage.setItem("visited", "1")), l = S, o && v && y.length) {
          const A = () => window.innerHeight / 2 + y[0].offsetHeight / 2 + 48;
          ue.set(y, {
            y: A,
            visibility: "hidden"
          });
          const L = y[y.length - 1]?.querySelector("img");
          L && ue.set(L, {
            scale: 1.3,
            transformOrigin: "center"
          }), S.add(() => {
            ue.set(y, {
              visibility: "visible"
            }), y.forEach((T, O) => {
              ue.to(T, {
                y: 0,
                duration: yy,
                delay: O * vy,
                ease: "power3.out",
                overwrite: "auto"
              })
            })
          }, "reveal"), S.addLabel("expand", "land"), S.to(v, {
            width: "100vw",
            height: "100vh",
            duration: 1.15,
            ease: "power3.inOut"
          }, "expand"), L && S.to(L, {
            scale: 1,
            duration: 1.15,
            ease: "power3.inOut"
          }, "expand"), S.add(() => {
            m && ue.set(m, {
              opacity: 1
            })
          })
        } else o ? S.add(() => {
          m && ue.set(m, {
            opacity: 1
          })
        }) : S.fromTo(f, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }, {
          clipPath: " polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "power2.inOut"
        })
      };
      return (f, h) => {
        const d = SA;
        return me(), Be("div", ZD, [te("div", e2, [te("div", t2, [te("video", {
          ref_key: "logoVideo",
          ref: c,
          class: "inner-media",
          muted: "",
          preload: "metadata",
          playsinline: "",
          autoplay: "",
          src: ("withVideoFrame" in f ? f.withVideoFrame : re(HM))("/videos/preloader-optimized.mp4")
        }, [...h[0] || (h[0] = [te("track", {
          kind: "captions",
          srclang: "en",
          label: "English",
          src: "/captions/silent.vtt",
          default: ""
        }, null, -1)])], 8, n2)]), te("div", r2, [te("div", i2, [te("div", s2, [h[1] || (h[1] = te("p", {
          class: "l2 copyright"
        }, "hilight®", -1)), te("p", o2, Pt(f.$t("creative_architecture_strategy_studio")), 1)]), te("div", a2, [te("p", l2, Pt(re(i)) + "%", 1), f.$t("loading") ? (me(), Be("p", c2, Pt(f.$t("loading")), 1)) : En("", !0)])]), h[2] || (h[2] = te("div", {
          class: "footer-foot"
        }, [te("div", {
          class: "progress"
        })], -1))])]), re(o) && re(r).length ? (me(), Be("div", u2, [(me(!0), Be(pt, null, $c(re(r), (g, p) => (me(), Be("div", {
          key: `${g.src}-${p}`,
          class: "media-item"
        }, [te("img", {
          src: ("publicUrl" in f ? f.publicUrl : re(ti))(g.src),
          alt: "",
          role: "presentation",
          width: g.width || void 0,
          height: g.height || void 0,
          decoding: "async",
          draggable: "false",
          fetchpriority: p === re(r).length - 1 ? "high" : "low"
        }, null, 8, f2), p === re(r).length - 1 ? (me(), Rn(d, {
          key: 0
        })) : En("", !0)]))), 128))])) : En("", !0)])
      }
    }
  }),
  p2 = Object.assign(tn(h2, [
    ["__scopeId", "data-v-9807801a"]
  ]), {
    __name: "CommonPreloader"
  }),
  g2 = {},
  m2 = {
    class: "transition-loader"
  };

function _2(e, t) {
  return me(), Be("div", m2, [...t[0] || (t[0] = [te("div", {
    class: "overlay"
  }, null, -1)])])
}
const y2 = Object.assign(tn(g2, [
    ["render", _2],
    ["__scopeId", "data-v-2927d57c"]
  ]), {
    __name: "CommonLoader"
  }),
  EA = (e = "RouteProvider") => mt({
    name: e,
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
    setup(t) {
      const n = t.renderKey,
        r = t.route,
        i = {};
      for (const s in t.route) Object.defineProperty(i, s, {
        get: () => n === t.renderKey ? t.route[s] : r[s],
        enumerable: !0
      });
      return Ns($u, mi(i)), () => t.vnode ? Vt(t.vnode, {
        ref: t.vnodeRef
      }) : t.vnode
    }
  }),
  v2 = EA(),
  by = new WeakMap,
  b2 = mt({
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
    setup(e, {
      attrs: t,
      slots: n,
      expose: r
    }) {
      const i = Ae(),
        s = et(),
        o = Zt($u, null);
      let a;
      r({
        pageRef: s
      });
      const l = Zt(cT, null);
      let c;
      const u = i.deferHydration();
      if (i.isHydrating) {
        const h = i.hooks.hookOnce("app:error", u);
        Tt().beforeEach(h)
      }
      e.pageKey && Qe(() => e.pageKey, (h, d) => {
        h !== d && i.callHook("page:loading:start")
      });
      let f = !1;
      {
        const h = Tt().beforeResolve(() => {
          f = !1
        });
        Mi(() => {
          h()
        })
      }
      return () => Vt(Wv, {
        name: e.name,
        route: e.route,
        ...t
      }, {
        default: h => {
          const d = A2(o, h.route, h.Component),
            g = o && o.matched.length === h.route.matched.length;
          if (!h.Component) {
            if (c && !g) return c;
            u();
            return
          }
          if (c && l && !l.isCurrent(h.route)) return c;
          if (d && o && (!l || l?.isCurrent(o))) return g ? c : null;
          const p = Md(h, e.pageKey),
            m = S2(o, h.route, h.Component);
          !i.isHydrating && a === p && !m && ur(() => {
            f = !0, i.callHook("page:loading:end")
          }), a = p;
          const v = !!(e.transition ?? h.route.meta.pageTransition ?? Wg),
            y = v && w2([e.transition, h.route.meta.pageTransition, Wg, {
              onAfterLeave() {
                delete i._runningTransition, i.callHook("page:transition:finish", h.Component)
              }
            }]),
            _ = e.keepalive ?? h.route.meta.keepalive ?? wC;
          return c = _R(v && y, mR(_, Vt(I0, {
            suspensible: !0,
            onPending: () => {
              v && (i._runningTransition = !0), i.callHook("page:start", h.Component)
            },
            onResolve: () => {
              ur(() => i.callHook("page:finish", h.Component).then(() => {
                if (delete i._runningTransition, !f && !m) return f = !0, i.callHook("page:loading:end")
              }).finally(u))
            }
          }, {
            default: () => {
              const b = {
                key: p || void 0,
                vnode: n.default ? E2(n.default, h) : h.Component,
                route: h.route,
                renderKey: p || void 0,
                trackRootNodes: v,
                vnodeRef: s
              };
              if (!_) return Vt(v2, b);
              const w = h.Component.type,
                S = w;
              let A = by.get(S);
              return A || (A = EA(w.name || w.__name), by.set(S, A)), Vt(A, b)
            }
          }))).default(), c
        }
      })
    }
  });

function w2(e) {
  const t = [];
  for (const n of e) n && t.push({
    ...n,
    onAfterLeave: n.onAfterLeave ? hp(n.onAfterLeave) : void 0
  });
  return ju(...t)
}

function A2(e, t, n) {
  if (!e) return !1;
  const r = t.matched.findIndex(i => i.components?.default === n?.type);
  return !r || r === -1 ? !1 : t.matched.slice(0, r).some((i, s) => i.components?.default !== e.matched[s]?.components?.default) || n && Md({
    route: t,
    Component: n
  }) !== Md({
    route: e,
    Component: n
  })
}

function S2(e, t, n) {
  return e ? t.matched.findIndex(i => i.components?.default === n?.type) < t.matched.length - 1 : !1
}

function E2(e, t) {
  const n = e(t);
  return n.length === 1 ? Vt(n[0]) : Vt(pt, void 0, n)
}
const C2 = {},
  T2 = {
    class: "icon",
    viewBox: "0 0 33 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function k2(e, t) {
  return me(), Be("svg", T2, [...t[0] || (t[0] = [te("circle", {
    cx: "16.5",
    cy: "16.5",
    r: "16",
    stroke: "white"
  }, null, -1), te("path", {
    d: "M27.8145 5.18274L5.18704 27.8102",
    stroke: "white"
  }, null, -1)])])
}
const R2 = Object.assign(tn(C2, [
    ["render", k2]
  ]), {
    __name: "IconCancellation"
  }),
  x2 = {},
  L2 = {
    class: "icon",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

function P2(e, t) {
  return me(), Be("svg", L2, [...t[0] || (t[0] = [te("path", {
    d: "M-6.99382e-07 16L16 16M16 16L32 16M16 16L16 32M16 16L16 1.20797e-06",
    stroke: "white"
  }, null, -1)])])
}
const O2 = Object.assign(tn(x2, [
  ["render", P2]
]), {
  __name: "IconPlus2"
});

function I2() {
  const {
    t: e,
    locale: t
  } = Pi();
  return be(() => t.value === "pl" ? "politykę prywatności" : e("privacy_policy"))
}

function M2(e) {
  const t = Se("preloader-done"),
    n = Se("transition-done");
  Qe(n, r => {
    r && e()
  }), Qe(t, r => {
    r && e()
  })
}
const N2 = {
    class: "left"
  },
  D2 = {
    class: "cookie-title l2"
  },
  F2 = {
    class: "cookie-text l2"
  },
  B2 = ["href"],
  U2 = {
    class: "right"
  },
  H2 = ["aria-label"],
  W2 = ["aria-label"],
  j2 = mt({
    __name: "Cookie",
    setup(e) {
      const {
        data: t
      } = ea("common"), n = I2(), r = Se("cookie-state"), i = Se("cookie-reopen", () => !1), s = Se("preloader-done"), o = Se("transition-done"), a = et(), l = () => {
        !a.value || r.value.seen || ue.to(a.value, {
          y: 0,
          yPercent: 0,
          duration: 1.2,
          ease: "Out"
        })
      };
      Bn(() => {
        if (i.value) i.value = !1, r.value.seen = !1;
        else {
          const d = localStorage.getItem("cookie");
          d && Object.assign(r.value, JSON.parse(d))
        }
        s.value && o.value && l()
      }), M2(l);
      const c = () => {
          localStorage.setItem("cookie", JSON.stringify(r.value))
        },
        u = d => {
          ue.to(a.value, {
            yPercent: 200,
            duration: .8,
            ease: "In",
            onComplete: () => {
              r.value.agreed = d, r.value.seen = !0, c()
            }
          })
        },
        f = () => u(!0),
        h = () => u(!1);
      return (d, g) => {
        const p = Qp,
          m = R2,
          v = O2;
        return me(), Be("div", {
          ref_key: "cookieRef",
          ref: a,
          class: Yn(["cookie", {
            white: re(r).white
          }])
        }, [te("div", N2, [te("p", D2, Pt(d.$t("cookie")), 1), te("p", F2, [te("span", null, Pt(d.$t("by_continue_to_use_this_website_you_agree_to_our")), 1), re(t)?.policyPrivacy ? (me(), Be("a", {
          key: 0,
          href: re(t).policyPrivacy,
          target: "_blank",
          rel: "noopener noreferrer"
        }, [we(p, {
          text: re(n),
          white: re(r).white
        }, null, 8, ["text", "white"])], 8, B2)) : En("", !0)])]), te("div", U2, [te("button", {
          class: "btn-cancel",
          "aria-label": d.$t("decline_cookies"),
          onClick: h
        }, [we(m, {
          class: "cancel-icon"
        })], 8, H2), te("button", {
          class: "btn-agree",
          "aria-label": d.$t("accept_cookies"),
          onClick: f
        }, [we(v, {
          class: "plus-icon"
        })], 8, W2)])], 2)
      }
    }
  }),
  $2 = Object.assign(tn(j2, [
    ["__scopeId", "data-v-a0b74373"]
  ]), {
    __name: "CommonCookie"
  }),
  V2 = {},
  z2 = {
    id: "rotate-plash",
    class: "rotate-plash"
  },
  q2 = {
    class: "container"
  },
  G2 = ["src"],
  K2 = ["src"];

function Y2(e, t) {
  return me(), Be("div", z2, [te("div", q2, [te("img", {
    src: ("publicUrl" in e ? e.publicUrl : re(ti))("/images/common/landscape-cover_text.svg"),
    alt: "",
    class: "cover-text"
  }, null, 8, G2), te("img", {
    src: ("publicUrl" in e ? e.publicUrl : re(ti))("/images/common/landscape-cover_circle.svg"),
    alt: "",
    class: "cover-phone"
  }, null, 8, K2), (me(), Be(pt, null, $c(4, n => te("div", {
    key: n,
    class: Yn(`square n${n}`)
  }, null, 2)), 64))])])
}
const X2 = Object.assign(tn(V2, [
    ["render", Y2],
    ["__scopeId", "data-v-88f7fc95"]
  ]), {
    __name: "CommonRotatePlash"
  }),
  Q2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAEMuMjoyKkM6NjpLR0NPZKZsZFxcZMySmnmm8dT++u3U6eX//////////+Xp////////////////////////////2wBDAUdLS2RXZMRsbMT//+n/////////////////////////////////////////////////////////////////////wAARCALQAeADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAOBAAAgIABQIEBgEEAQMEAwAAAAECEQMSITFRE0FSYXGRBCIyQoGhFFNiscHRIzPwQ3KC4SSS8f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A2ADKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAQpAAAAEKQKEKQCMw9zb2OYG8NqMk26R262D/wCI4qEml57B4M/CyDt18Hj9BY+E9nX4OPSn4ZDozf2sDGI7xpNbEzNadhNOM2nukYNI0ptbDO7MpW6NUoXdNgFNrbSyazkordukRuzr8NGs2I/t0XqBceSjUI7R+Vf7ODepZyubM3qBbFiKc5pLds1ODhNxe6AlmuDB0WwGuzOaOj2OaIr2AAIAAAAQCggAoIAKCACggAoIAKCACggAoIAAAAAAAAAAAAAAAQAAAABAAoQEAktjCNSMgdupeX5fp8x/JkvsS/Jwsgg9Evi39sfcL4t94fs89WGknoIGJLPiSlySCWZOW16k7lzMqLiyUsRuGi7C4OLv5X5GGyMC7uz0Y3/Swo4a3W/qzHw0E555fTBW/XsYxZOc3YHN/UahFOTzbEf1DawIm7NXbtmUVasCo2tjKNLYDUvpMI1L6TK3A9YAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAABABCkChGCMDL3MyehSPcDJewBUFvqZkbZJLQDHYDsRAAjSSy33N4EFPFV/THVgdJ/8AR+HUfufzP/R5Dt8RNzm2zlQEf1B7s018xlrUqC2N4auSM1obw90RcbkqaIu/qXE7EW7Iqv6TKNPZmUVHrABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm5QAIAAAAEAAUIUgEMy2NGJAQS3ZYq2SV5ne4GQBdalRd0JOo0TMSTsDK2HmNaLG+4A7wXT+Ht7z/AMHLDg8TEUV33N48s86jolt6AcmTQ36+5lgR/UQr3/JGwBqGxEWOzA6T2Mrdll9Jlb/gir2ZEUiKj1goIAAAgKAICgCAoAgKQAAAAAAAAAAAAAAAAAAAAAAAACAAAAAqAACEKQCGHubZjuBuGibObbbtnWK+TU5PcASVUAVGQarQJcAZo0nSLpm/BGnJxhHdkHTBWTClid5aL07mUt3WtWdMVJtQjtHRHO689AJaa077nNpljF6WNUyiP6id2V/URgEaiQLcDf2kXb0HYLsFUiKZQR7QARQAAAAAAAQAAAAACFAEKAAAAAAAQFIAAAAAAAAAAIAAAAABUAAEIygDD2Mrc1LYkV8wHRr5WvI4Pc9DejZwKIAAilRkpFPu/Bv4dZVLFfbSPqc5Xst2dcVZIRwuFr6lRzbu6b1CVNNu0RLXTubS3vtrRBi2m3XfUw2t9jbfzPTcytVSKHcy2HeYAQ0jJpAVFXYiKgKZ4NGQPaACKAAAAAAAAAAAAAgAAAAAAAAAAAAAgAAAAAAAAAAEKQAAAqApAICgDnLcJ0HuZb1A05XFo5lDKIAAiggeiCumArm5vaGv5MSeaTb7nSS6WBGH3PVnIIWWUvMyyEFc2zN62QpQ7l7sUHuBmior2ZEBSohUBowaRlAewAEVQQoAAAAAAAAAAAAAAAAQAAAAAAAAAAEBQBAUgAABQAACFAEAAEIymZbAZGQj2FsCvDSSdnNm7smXzAyDWRcjIuSoyawYqeKr+mOrJKKirs6RXTwP7p6/gDGLNzxGzBWvmouXzCssyby+YyLkIwDeRcky+YEe5HuzbjruRx13Ay3oImsvmMtJAQqJwEBpbMyjSe5lAewAEUAAApABQQoAAAAAAAAAAAAAAAAAABAAAAAAAAAABUBQBAAAIUgAxI0Ye4GMS3SSMU+GdG9Rb5A50+GKfDOlvkqZRyp8MsU72Z1DdK7IMKDnixh+WMeTniaJ0jeHccOWI/qnovQxb5KjnTvZlp8M1bzr0Lb5AxT4Yp8M3b5FvkDFPhkp8M6W+Rb5Aw072Yad7M3bvcW+WBzp8MU+Gbt8sSbpasDGV8MZXwy5nyxmfLAgRVqyID2AAigAAAAAAAKCACggAoAAAAAAAAAAAAAAAAAAAAAAABAAAAAEBADOZuT0OfYCAAAVEAGzMk5SjBbyZpbDC0U8V/8AtiAxZJyyx+mOiMAFE+9ehSfevQoAAAQAAO4HcBAS2XqCS2XqFZAARY9yIse5UuQPUACKAAAAAAAAAAAAAFmYYinddjVHH4f7vUDsAAKAAAAAAAAAAJZSUUAAAICkAAAAAAIS7ZSVQGJ7GWaluYYAAAAAUG3WWO70OmLUcuGtor9nON5k06aGrdvcAAAJ969CmfvXoaAAEAAAIdwO4AElsvUpJbL1CsgcGkuQgkUHXDw7+aWkV3IroCgCFAAEKAAAAAAAAABx+H3l6nYxg/R+WBsAAAAAAInpruBQT9eREr2fmEaBIvQtgAG63D2AAiYsCgzdS9SvyYDuUzFvuLp1YVogWupQIZZozLYDD7mDT2MgAAUACkFWiI13KQCAAqMr6zRlfWaAEKQKAAIdwO4AElsvUoAylyaB1w8NJZ56R/yRTDw1WaekUZxcbqaR0guxMXFeI6WkVsjmgPYAAAAAAAAAAAIAKCCwKYwfo/LNWYg6h+QOgJYsCi0Zb0MqVaAabSZTm3b07iUq2A1J6qifSzLfDGa3qEacqdmrpb2jnN7ET0oDraehHLSjCl3Qu9e4Eto2pZo3wc27b07jYDaets1drRnLNpuFKgOietIsnb9DinbTNJ6+vYDcJabm7tHJPt2NphVMzehWzEmBlgAAQoKIUACkAIBCkKjK+pmjK+pmgBCkAAAB3A7hgQpDvGEcOOfE/C5IpCCjHPibf5OWJiPEeuiWyJiYjxJW9uyM/wDIRQgFuFemxZAQWxZAUWxZABbFkAFsWQAWxZAAswtvybMLWAGk7QujCdMt2BZStGLZXsZ7gG2RuzTMNaaBGrdVwRbkTfcqdXZRpO/UjZnYdgNWyp6EtJa7mU3ugNX3I9UE6J3ZAutK1LuJaukiXUeOxRbp0heqfYx+S3QG1I0pOjDrRp68FWpBpsy3qWidwqgECKCFAAAKAAAAConcDuABCkAAAAyblq2doxjhRzT1l2RFIxjhxzz37I5Yk3N2+RKTlK3uZey9SiF7fkLb8mkm06IIlb0OkYqL8wko7cC9QNgAAAAABQIAAAAAAAAYj9JtmIgZaF+Zpsy0mEL1phkrS0AC/ZWvW+DLF6gTuE+zDIUa0Sr/AMZm6Yvt2MtAdMyehlrUkXpRZWBL11NebOfBsA7b3IwyLXQAi6WQJBGrKmrTZhM0vMK3aewJF63Qe4FsBF0bAhS0tu4dXoBAdFFVsMq4A5g6ZVwMq4A5g6ZY8DKuCK5dwbaWeq7FyrgDmQ6ZVwSVLtqUYCVuipW6R2SWGuZ/4IJUcFW9Z9lwcpNydt2zbVu3qyZVwBgktl6nTKuCSitPUokY2m3tZ0ezol6P1F6P1IHcnPqUyv8AbA6gAAAABewoEAgbplAEDBQDHYPYDLlSOealoakzk35BG7tlWphOmbzaAHaZOxG7dC6ApGO9dmW0/UDDYXey1aruSql5FELwbcUvOzOi37ARLVd2JVWrKlqrItX81UBKSXmW7QtPQSpbIIlajugtEKt32AJXqw9tmy1uRvhgRFRPQrAqY3IO+m4G7LwZbaeosK29aKq0vcxmKnaoDrmrR7kUrRzzWE61YHW9LH1I53dWbbShwQROtjfY53tyaT5Aj/7i9DRPvXoJOvUKknRlJt6bhJydLVnVJYapfV3fABJYa5l/gyABAUgAktl6opJbL1QE59S/8k/5H/IGuTK2/LNcmFt7gdgAABVqKAUGh2F2QZe5IvWjUl34MablGpchEb4L21AdiN6CzN7gSXkcmdZbHN72ES9UabdmHqrRtax0ZREzS13d6GXo7pp2VSV6oCp9n7it2TZ7WaXN6EGd1Qvsaa1vYm+oEWqrgqr0In+S1SvTUCSfzeRKDau0FuUXtrv2MvXQr3epmX+Qi7FSbaS082YVvY0n2Ar9fwZp8GtDL3aQFpf+dx2J3Ltq9wHFrQltEbbKlon2AqK9HRFe5ZO47VQE1RU9TKepQNJlbsxqW1wBpbFcm2Y7lA3G2zS1aJF0qEnogqydSsyk5Olq2IxcnSOqqKqP5ZFNIKo792ZKAICkAAAASWy9UUktl6oDC/2P+Qth/wAgbRhbL8m0YWy/IHYAADSdmQQVs5qSz0b7HJ/K772B1bMt6WZuyO9Si2LMrzdhvXQI1m15Mt8C9bI1avuBW+TMksveyvYVWxRzTrc3Tb0GW9O6LFSQGZd2xHVPQ0/mRFXABUvq9zaad1vwYmno90RXFWQbZGirWt6uhTt3oBnZ0h5dg17haLUCNdwlrya30Y2KMutasw9yvcLe+4Qy6eY0S8+Stq6Rlgae25ErZWGqQFpa99TMrT1Rq1WqMralbANqxGkr5K0VatMCb3Y9TTf+CadwJWl7E7m2TSmBL0rYpN9R2/2BexSJ+Q8wNp0ixTm9DKvujcXpXYK1eX5Y7d3yUzvWhqyKAAAAAIAABJbL1KSX0r1Awuw/5C7ADce5hbL8m4fcYXb8gdM0eRmjyZyS8h05eQG80eRnjyY6cvIdOXl7gbzJ9zLqyZJeXuMsgM9hd6GnAw12CNaEexndl15AmrEHSprRmq1vYzL1A06vRGYtJU6vsx20JLXVlHSqWxlruiJ6dy7f8kETd3vRVTemjCfdBaOwKr2MytSqipvcW++gETa1Lab8yvlajKtewF3/AOTLTQTa1Luv9gZDell/RJaxdboDBVtoRhIqD+rceodE3A2+RrtwIu9LDWgCtLW417UmRaC7Ardsq2MpGo0nrqgDflqX/AbS2RF8wDbcjNXdJ/kzSQEpeuhVr6GfQ1bALcvJE23ZW9KAq22CehnWrNLhgbT8zWZcnNa6GsrIrVrkZlyTKxkYFtb2LXJMj8hkb4CrmXJMy5JkfkMj8gLa5JJpxWvcZH5e5HBrj3Ai7AuXzXuTK+V7gahKm/MyuwS1C7AdgQoAAACMoAm5mUNdO5oUBzUSS0Ztxa21FJoDF9uTMlZtoztuEY2NJ3QdPbciuijVW2F5a+pFYWgFy8C3pvoVau3Ypu9CDKWupXS1RdkZ1Aqdyrk1vqjHfzKl5gXvaGbXRIrRnWqA09Wr19DLajstf9F2VdzElvqArvEPTcsdFZHqUZYorRO4GkvIrTfoWNuLZFV0ESqWuhPwakt+/BleQGk9bLd7ErsVJICNJ03uFqtDVUk2tzO2qAS033M7lap6kbAum5G7Iy7MCrbQvfQJOtCt0ArQq2MX7C3W4HRM0jmmzavuFbsES0KQUpAAIUgUMz+lepok/pj6gc1sionBV/sDUFuzMdkbjszEdkB0AAAAAUEKAGwAAjXJQBlrTkw1+Tr21I0gOD+VlVPDtb9zbT9fwZcNNNPQIify6+5ZJLVGbqsy2Z0uMnowJlb2M3lkbyyT2tLsHqrWq8wInm2GVd9yK4U90v0VSUtewUcXVo55mnsdqruznJU3II3mi1dE2Qw1cb8y1rq9wqfnUz+DTST4I9gjLVMFkTsBlrUi1ddzbV7Gfu7/AIKEXroa7hLTYvcCPcrqtNAmKtgF5hvvWvkGwtdmBezd/gxbrc03oZAnYbgLV6IAvMq1Zcr2YS1pK7ALRfoj7lT5XkE8uz/QGFRonmyvt6BGkzafJyR0W3kFazG0ZSrUtOtFoQW+w7CgAIWyBQk/pXqUmJ9K9QMcBf7HAj/sDcdmYj2Oi2MLsBqxYpClwBbFkoUgLYslCvIC2haIloKAtoWZaIgN2i2YoVowNmYpNHV4ao5RinG2QHBN2zLw0acURxrUoys8VSdoik82sdDS/ZavYDF/M7VqiRjUtNmaUNdiuOm4FW+unBhyTnT9DTTrzOU1bzII6YLSbirs65bTTPKpNao9EWpK09GFYktKlshemmh0eHa5OcFTaaAzWo7G5JPSLsy+AjK38hWugqyoBdRSW4Hr6GlEDBa2NyhS1e5kCNWNEtC+aI1b0YGdxVG6pE2AzV8ItcENR03KI3T0Jq/KjT1dZUg40vMCOmrf/wDRS3/2ZW3kKA1HamGq2ZFqaVa6tADa2XBmOyOirZK2gi7Lgqd6mW6rRahaatEVsNakdqtN9UYcd271A2Q5ONVvqSvNhXcmJsvU4taPVlh2AvBY9vUnBY9gNmF2NmF29ANgAAAADIGAKiFIAkRFkRAUq2IVAd3t+DjD6D0Pb8HDAi8TDeWtHWpBGiNHXo4nhj7k6GJ4V7grjToanb+POtaS9R/Hk0mqaZRy8mxW1I6fx8S9l7lWBi+Fe4HKn31I4uqqzv0ZWk2rYeDi8Rf5IPG4KLb7GYyadx0PY8DEe8F7nGeE8OWWWl7FRI43i0Yu5N3vqc5x4RIXEDf0660E71s04rppdzFaJXQGv8F0vyNrCeSDVfNoWeDKCzSSr1A5PSOhpPTYkl8mY6YkenhRm2reyQHObzaPcVrVDDg8RrLrI7dHF8K9wOWpPuzN/g6YkJ4cM7SpHPDi53tpyA1lsT1O7wZpbKvU5zw5qSjLRvYDnWtsrWnOhr6m23ojNtvRVwBlIWr1RXq9qKot8P8AIGLdCn3Ru1V0jO5RL7Gkgot7BVQGloaUjGt13Nww23VASKd2dYr82ajCK0km7OiUa20XJBmOFy9f8HPEw/maT9VR6M0ezMtxbXkB5cZJSWr24OZ2+LmrS/ZwTtgVv5X6Fh29DD7m4hV4NR7GV2NQ7fkDXJiPb0N8mY9vQDQBSCAACMBgoqIUgCWxlGpGUBTUTJqPcD0vb8HHAbhhvK6t2dnt+Dl8LHqYcszaqVEFeJieJk6uJ4jo8Bf1CdCP9QDHWxOb/BOtNKk0l6HXoRSbzNhYEJRTtq0By62J4i9XEr6jf8ePjCwI/wBQox1p2npaHWxPEdOjBSS1d2H8PHx0Qc+rieJmJzlNVLVHb+Ov6hV8PHvOyjxyVROadqu6PY8FTWIlo4vQ8ajU2gjrNpRVcGIpeVkcvIsdN32A9GaSjSdUSWJKcfmfudMLDjiYalddmZxsOMIfVdugrgt67MxLNKSi3ajojso5YWn+WTIpYkEt3uEaw24L5dH3Zp4s2qbOz+Hivuon8ePjA4Ys28PLLazOFJYcXWubuX4lRi1GMrfc18PgxlmUtkrsCRxJLS9jEpPEeaRcTJFtQleu/Y1gww5UnOSrWqCufakqRHtueroJrdv1MRwoPd6hHnoqWtno6MLpzdojwV9sgPO1Yccr+bTyOuIopvp68jChFybxG9u/YDkrZqKvZHV4S1cZJrzEMOOkm0BcOOV7JnV6xarQ5uVrai59raAKLUueGaam6S25sw53pE1BtKmqYFjFp3KiOPzVJ3Zc/kmc54nfZgYxo3K29Eu7OGyNOV7mQG6NxM6GluBpdiw+30JHYse3oFb7MxH/AEb+1mI/6A2CggjIysjAjCK9iFFIABJERXsQCmo9zJqPcD0vY55UlS0R0exhkGHFcEyrg0zLAlVtoHru7BLKFI0oWtEZs6JJxVuS9HQEytLukTJ/izWWHdzf/wAiZMP+73IJ09LrQw9Njo4xrRy9LMTi1VoBbrdmMSkra1NrYxixuKfDKOc3mlaVEW1gv2lR1+HacnF1rtZv4mEVh+lHl76Gs0sRpNtgbUpZaRvCioy10kah8q21Rzk28G+7IrUseK2uRzliYkttEaw8K92jbwV3CPNRU/lrM64PQ4RqqJSWiSCsQSbSWlHfpvsmcnhqS00NKE2v+60BrJNPSyOLvbcP5NZTlJerI6kllzP1ZBapvTYrmsjXfsjLUnK6deoaXbbkouFG61d9yNx15C2daEuvMImlOnp3LG0nl23Zm+DVacAWFyjbdI0oxTtvQyrfyqjai6bAukV+zDm272LlbSvTzObazNLbzA23oZlrHdM5ynS0ZnOAaI13LeoRQS0NL6i6ZfwI7sitVUfwWO/4K1UPwI7v8AV/SzMd/wAGn9DMx3YHShRpItEVzkZZuRl7BGWAwUB2AewEexCvYgFNR7mUaj3A9L2MM23oc2yCMyysjYEIWyWUDpaUVd7HO/I9OH9C9AOOfD8X6ClhvaVv0OrkYnK0QRKyYjyxy72TNRvSX1Rso5bIWmmtTU4Ri6XfU4O0+4GpRpXujNJmk3VrVd0WKa84sDhJalh9cfU6zgndHKio9SXytPRvRE0tQS2JgxeWUntFaWdMKCi1NO+fUikYxSpGqsws162i68hF6bfc4vc7RlWbU5xrM2FFoi58J/f+i2r07Gs7Ay6caaZpRSSVtcaDNm3DeJ4lSIJS5sz8qet+h0cml80a9Djact7soPy2My8jca9QtV2tBHNJpGo4bcqe6OiTcKknSNKK7J662AjGpK4v1LNxytPU2ttdzDeS22mBW5RUqqVI8mInm2cfI6TnNSdaKznOTlu3oBz3FUa2MyehQ3NqqOcXqasDf2v0EO5Fsawtfcmq6T0iFvL1GJvH1Edn6gWX0GI7s6tWjnDdgdoO3Rpo5wdStKzbm/A/dEGJHNlnN+B+5zcn4GUaZDOZ+BjM/CwNrYdjOd+FjO/CwNfL3TKnhreD9zm5N/Ywm+GB2zYa+xUR4uGm6w/2c5NKNnOwPT/Iv7P2Oqn9n7PPfkXN5AdupH+n+xng/wD0zjn8gnb4A69SHaC9ydWPg/ZwjvJ+ZpAdViLwI31E19N+VnFFsDXUhf0fs11IeE4YiWeMvc18t6S/QG24J6xl7l6yT0T9zlN3IIDt1Yydyhb9Q5wWqw7/ACckaToC9XDWvTp82ailfkzz4ySpJ9+DeDOqiwOt3tqiQhHOlLZmums9xdeQlFtZWBMSaWC1F6t6+gwZpRbZhqnkavhllhLpuUXpWq8yo6OcM1uKt+ZM0PD+zh8Rrk0a07iT+VJAdXiYfaF/kZ4v/wBNe5xRtEV3w8j0jFJsjkk2pQpmIujU38qbYQzR7x/Yz4a1pe5wnKLi9XdcGUqSQHp6yeiTXnYzKV/LscEdEwOyytbV3JFxS0W/czGr1K5YcZPMm6a2A3aejCl27GMVqnTp3qcIyafPegPW8S0mtb5OdpSvLT8mZc8yV9ip21aVIDWWFXk09SZcLwr3KlmTXKPI3aKPQ8PCfav/AJHLFwoKDcZbdjlJIKKsDKepuyuEa2MIDotmbwd0vM5xekjWDKpJk1XbF3iI/SjOJLNRqO0QOpxgdU1T1OcewFui5g2pKnbJkAjdmTTilu9TLpeL2AgJmj5jMuf2BQTMuf2LvZMCgqVvaQy676XQGJq0ku7J035GsVZXFX3CvYDOSXkMkvI3rrqNddV7BGOnLyNKDSvQ0k29zWVtewHl2TXmbRlRzYzgu8qNxw805JSaSAEm6ialg5Y2pyMYkMsYvM3YFfzKu72J0pRk7ezRmD/6kfU9E180vRf5KOMtJtFQx/8AuN+hmKcpxVtWIOhly+dEhBznKOdqjfTyTg3LNbA54ms0zbhOMFNql2ZnHVTfqzpjN/xlr3QG71tuqSOlqTv7ls+TjF51B9noyuEsPRW1uRXROLn/AHIy5OTqLWZftEUuouylyYeLljlf6A18SouGHON70zjNZb0pHpzLHw8iq0rjXY4r/tYllRmOxpGlgRpfMzlGLln+ZrKQdW6RcNqfw01JW1qeZOUq+Znowl/+PJebKMP4eSzPMqizMn8x6J/9rF9WeSHnbA7I0iywlGKactfM1/H4xJEHPEk1HTcTTlKVOjnNNSlHM3To7YazSn6lGEnG7d2Zu5nolCot+RwlFQnTvt3INo0h07WkpL8klhzjFvO9BBqEmsZa/LTPMdIJvEjcm7tHT+Mq2/ZR58rk0oqztD4ab3aRqCUVSO0GBz/jWtZ/on8OPjl7HobpWZUswHD+NGKfzPUxKEYLRtnpkkcMSlaoDEW2WzKBFWTEWYkWLA9Cm+0Tcnso6N7vg5WxZKOyUIrSi/L5HnsWB3lGMotUjGDFKU3VJ0znYU2tmUb+JSah/wC460uDjiSzQg/7kdbANxW9HBzWSNLXNZ1lWVuux5U9ANYsupO70Rn8soAn5Y/JQKLHKn82Z+h1hi4cU0lPU4gDUcsfiOom6u6aMxbirrVtlNwjmg/JgYeJJrZHPEbdWj0dLzHRT5KjyxTzWdVNp2kd1gpL6R0f7f0B5cSTk36iDaknR6Oik3aHRQHnjak3yVvb1O/S8x0bq2/YDz4jutDU5SnhqHZHpyR8KJKEaukgOODJpU+zR6G01ueSEvmb5Z1U63AziLK3JHK7lb1OkpXLyMSi4teFgeyPyRc6UaXY8snadpanowpRxINcbllhxkqX6A4ZvIxD5b72eiWHlq09R013deoHkimnt3O0JOMWvNlxJQhovm9DEcWKu4v8Aak24tcnPLls6PHjXywbfmSPxErWaKpcAdFLRKjanLgRlGatSXuXNFNJO2+yA87hNym8vezrhwat86ndR5S1NKMYxS008gOE1LJL0MTwpTm7dVR6qXl7ESpt6a+QGIppUTET6bOy9SvUDyKDzRaT+o9LhKmVq633vcSvK99gPKmdIHJM6QutQNyfyv0MQeiN7okcNLawDZ5sWWp68qGWPC9gPFdEzep70kWo8AfOza3R0hiuto+x7ajwZyR4XsIPOAQyqkFgAQuWW9P8ke12vcqNz0wcJ/3I9XTPDi41ww4RX0uz1rHUldV6soY0MuDN32PCj2YmIppQtas80oqU3laSvuQZBciW84jKvEgqA0ox5NQwHPZiDnZbPQvhYpa5mx/Gj/d7iI89np+F1zIy8CC3v3NQcMPSLYHopeRyx8qgnpuYnjVFZdbdXwcsRzjFydNFGs2m52wXbPPhuDwldZr7nRS8NAeiWr3M5f7jyRxJSxqk9LOixdX3b2A75P7hkXJYRagk3b9DVeaA55PU8/xE8qyd+563l7yR5pYfw8nblJtgeVW3saTe1M9McbDjFRSdIP4iPhYHlp3dHWMrpSXyvc6fyP7f2P5H9oGfho5cSUWtdj0W4N1SOP8AIf8A4iwxM7q9fQDM4/8AUjOUnK3TsYkJS+l2uGaxleG63TsRkppNEHlnhyT1iZ6cn2PaNS0jzQ+Hk9W0jt/Hw2u5uyoDi/hoZkuXR6sLAhh4biktd2YW+eWijsdYSbw03uwGTz/RJRa9C35mZN1uBLLaJTFSStagatFzLg552XOwN5vIkn8r07GMzLYHngqRuzFU2uGLIromXMc7AR0zDMYsqYG8xcxzstlG7LZzsWBwc4doyfqyqcP6f7KsKXBpYcuEAWJBbQDxX9uhem+7XsXp+bA5TcsSNNujCwa2s9GReb/JVGPhA4dG1q6NLCS+49CUUvoRVl4/QHmcOJKydLzb/B600+zLQHi6Pr7FWC/Cz1Ol3LBuril7gcsP4XvP2O3TXZtehfn/ALR8/K9gJ0lzL3HSj/d7lqXi/QqXjYHOWBf00vUz/GfiR2y/3SOU5Vom/cDzy+Fp/X+jP8Z+I7W+TWyA8/8AF/u/Q/jPxnc7YcO7A8q+EXfFXsbh8PGE1LqXT8J6wBnOuH7HPGUsRJJOjq5Jd0TPHxL3A838eXBV8PNNM9HVh4kR4sPEBz6L8MR0H4Ym+vh8v2J/Jh5gZ6D8MCPBa+yLNfyY+Fj+SvAwM9J/00VYck7UEh/J/s/Y/kvwfsDOInHVqjivkna+l7naXxDap4aaPPO7+WLS4A9CZbR5FiTSpxZerPwv2A9GhqLPOp4j+xs7YScpXNVHgDeV4mi+nu+TrUuEFJJUloM4Eyy8jMk9jecjkmAvyJfkQgFklLyfJyk5ReqZ0G+4HLP5Mjxa59jTjTJl8gObxE5Fsrwosz0X2bRBqwY6eItmMuIuyYG0W9Tnc1vBjO+8X7AdbFnLqeT9h1EFdLDZz6i5GdchHqBafAZRkFBAFjQaeYEBbXDGZeEBryTV92RsWBTGZxladByS3M3eoV1WO19STNrGg920eYAetTi9pIp4hma7sEeic+yOTMZnyXMwjoo0GY6j8h1PIo7YcLds66rakcY/ERX2s1/JhwwLJz7S9kcnGTets6/yMPz9h/Iw+X7AcXB8MZHwzt18Pn9Drw5A4qIynbrw5HXgBwyjI32Z2ePEnVT7gY6cuCrDZeouUXqLxICdF+RVg8snV/uHUXIGulBbsqhhnPPHkmePIHaoL7ULXZI5dReZM6A6NvyM2zOfyGYDeopmczGZga/I05M2UC6CgChRpIiKEZa1JRtpEIrNCkaIBKGUpQM5RlNX5DQDOUjguDYA5PDXCMSw9NEj0EoDWYgIQACBVIDE5T2jH8sCyko7ui7mYwp5pay5NN0AMTmlotWSUm9FojFAG7dsm22goUAzvui5k+5mhlA1ZLM5fMU+QNWNzOvCJb4A6WDnm8mXOgN2DKkuRmQGgSy2AACAqT4BdOR3AgKwBAAVAtWQAWgLAAqIANAza5LmXIGimVJefsXN5MDSKYzPg0m3uwNFM6d2M0VsBqy2YzoZ/IDVhPkxbfYfMB1pckpGE5WauwLSFIg0a2AtDKZVJ6aGrAZWMrOeLjPDpLdnnliSl9UmwPU5RW8kR4keTyaeYTQHsBARSyWCAUWQgFszKV6FMPcACAAAABAAAAAEAAAABS4GVcAFEyx4LlXn7gAMq5fuK82AA/LLryyAC6+Jk1urBPuQRdeRrywAGvLFvlggF9/cacfsgA1a8KLnXgj7GABvqPwx9hnfCMADed+RM78jIA3nfkOo/IwAOnUfCHVfCOYA69WXCHWlwjkUDp1ZcIdaXCOYA6dWXCHVlwjmAPUKHZAotD8kFkHlxZZsRv8ABzKyEApAB7AUASiGiCCAtAKlnOTp6nWjLinugOWZcomePKOuSPAyR4Kjlnjyhnjyjr048IdOPhQHHPHlDPHlHbpx4Q6cfCBxzR5QzR5R26cfCOnHwoDjmjyiZo8o7dOPCHTjwBxzR5QzR5R26cfCh04+FAcc0eUM0eUdunHwodOPhQHHNHlDNHlHbpx8KHTj4UBxzR5QzR5R26UfCh048IDjmjyhmjyjt04+FDpR8KA45o8oZo2tUdulHwonSjwgOWZcoZlyjr0o+FElgJrTQDlmXKGZcov8WXjNQ+Hy/U8wGcy5RM0eUdulHwodKHhQHHNHlDNHlHbpQ8KHSh4UBxzR5QzR5R26MPCh0o+FAcc0eUM0eUdulHwodKPhQHHNHlDNHlHbpR8KJ0oeFAcs0eUXNHlHXow8KHRh4UByzR5QzR8SOvRj4UXoR8KA454+JBSjyjt0IeFF6EOEByVvZWayS8LOscOEXob0AFolotgKJL6X6GvwSX0P0A8JCkIAAA91GlBlSfBfmKM9N+RMkuDpqKfIHPI+CUdGvNmXQGKBQBAUAShRQBKFFFAShRa8xS5AzQo1oX5eAMUKN2uyFvgDFFo183AyyAzQymsjLkXdgYrzFLk3liWo8Ac9B+DssvAsI45XwXJLg6WZbYVhxrcULJZUWiULFgKAAUBBYApBYFoJEsqZBaXBcqZE4lzpAFBLZFy+Q6gzgKfkRpmlJFzAcqkXK+DpmZLYGFFmkq7FtkbrcC35C2ZeJFdyPGitgNavuDm/iOEYfxEmBwejaIWTuTfJCAAAPqA55/IZ2VHQmpzzvklvkK27JS5M77sUBdORoKQ0Aliy6cF/AGdRTNWWwMUxlZsWBnIVQRbRMwFyRLS4M5hmA3oDNiwNA5dfD8SNqWlgWhlJmGYC0i6GHJvuS2Bu0iZkYpivMDTkS7GgsDLRCtkKgQoAgACgAIAKkXKgMA03FLcy5rsgFFUTGdjPLlgd1GK3/Yc4LujztkA7vGgtjLx+EcQB1eNLhIy8Wb7mABpyb7shAADAIrLMs20ZaKjDJZqjLQFsGdULA+jRcrOgA55GXIbFgZUC5ULJYFpEtE1FAW0Sy5SUBLBSMBYsgAy5Yl/Ko0aV1qCAaBBQF0M4s8uG2u+iLTOWNh4knUV8qA4wjnmkeyzlgYMoW5Kn2O1AK8xSGVjK+QGgtDL5jKAbRl0ay+YygYBrIMgGAakqMlAAACFACg1QslsgjIUlAQFoUBkFIAolFAEFFFAZBqhQGQaolAQFoUBBRaFAZcSZTpQog5OJlwO9Eoo9OYZiUKAuYWKLTAWLFGkgIil0KBmmKKAM0KNCgMUKN0KAxQryN0KAwLNUiUgJmQzBomX8AXMwpEolAazDMjOopsDWZDMTIy5GATKMgyoCpoNoUhoBzk7MmpGQAomVcFKAAsgCgLKIKKAJQooIM0KNADFCjbIBmhRoUBmhRogEoUUAQUUoGaGU0AM5S0UAZoUaKB1otIEpgNBZaFASwWkKAhQUCFBABbISwNWSyEA1YM2LA0DNkzAbshnMVSArQpEtiwN0DNiwNCzNkzKwN2LMZrLYFIy2RsDEjNGmyAQFBQIUAQUXYEEoFBRAAAoFFAZKAQQFoAAUlAQUaoAZBogCgAABQBAUAdQYzrkZ9QNgxnr0GdgbFnNydByA6WSzFhsDebzFmBYG7JZlE1A3YswUC2SwAAAKgWyDsQWyWAAslgBQqJRUgLYsVQAWGy6ADGoKyAAAUAAQAWgBAUAQDUdgAFAAgAEAWhQVCgWqAlFplQAmUUaSsUBmgbGgGErLlNaACZBlKG0B4/nvdMuaffX8mhoQZzy8LHU/tZXWhGUa6y7jqx5IhQGliLlMqxFyc8q4Cw4vsB1Ulr5FzLk5dNeaJ01zKxR2st6bnDI+0mXJPxCju6vcWcFHEf3I1lxeUKOv6LWpxrF/tFY1bR9xR3S18hpfJwzYq3j+x1J5ryMDvoRnDqz0+RjqS8LA7kOPUl4X7DquvpYHZFOKxX3T9g8Vt/S0B20Xct66HFY2usX7E6vCfsB33Bw6y4fsOtvuwO4OPWROtYHV6mTHV4J1tf8AIHUHLq67MvVA6FOSxdf/AKDxeP8AAHWwcVi8ph4r4A7NhNHDqSvRFUp+G0B2sdtjlc9XSLnns0gOqQpcnHPOtGhcvIDtSF0cPmvVi5cgds2lkckctWMr5YHW0W1oc1Gu7LkTeqsDWdLfQLEjyTKuBl8gK8VdtTKxXroNOAQXqSdaMZ5eEV5FQGbnetDNLk1QoDNyvcO3u2a0stIDzWae5EpeFPzs1Gb8AEUWXIVYiX2yX4NLFhfHqgM5OTSgOrF/ch1FygLlolIZvMjvkAyoUWtEArzLotGTL2BAUki5l2MO/wAkaZRvOTOYrXZly0gNWyeZFYV2BaX5Ap7inuBbQuzOndkzRTA0NTOdcaGXNgdBeu5yt8jUDo5mXMwCittgAAKBQAIXUCIFAENKFkW51XYCLDSNUW1wRyZBGjLNb9yaMCC/NFoegESLS7glsDVIacmdwBu0hmRjUU+QNZuA5uzKiaUQIm3wW+zLSJou6AqYJmjyMy7X7AWxZLvZMnzLt+wLYTfJmUml2T82Zcu9xA7P4bC4a/JH8LDtKS/J3BR5/wCO19OKzL+HxKpTv1PUAPJ0cWqaiydHEpp4cX5nsAHh6WIlrhP3GVr/ANKafqe8AeDbfOvwFNXTlKvQ9wpcIQeJYlJ/9T3Q6jf3x9tz2ZYv7UZeHDwL2EHleJK9JQKsSfEfc9DwsLvBGXg4PhRIOKnNukl/+xVOTT+TVeZvo4XhfuR4OH2T9ywY6j8BOr/azfRh5+5OhHl+4gx1ZPkjn6nToLtJk6CX3MQc8y8xmXmdOh/cyr4eXaT9gOWZcjMjsvhp+JD+NPxr2A5ZlyX5fEjr0sRfdH2Dw8Txx9gMLIvuDnBbB4M/EvYnRlygMuS5CkuTXRnf1L2HTnzH2AzmXJbXJelLlew6UuV7ATMuULXJelPxL2HSl4l7AS1yMy5NdKXiXsVYMn936AzFq/8A6N5o+fsVYEvH+jSwJf1H7AYzpc+wz+vsdOhL+o/YdB/1JEHO/wC1+wv+1nT+Ou85F/jx5l7lHPXwslvw/s6/x4f3e4/j4fD9wOdvhL8k1XePuduhh+H9joYfgQg45tdZRI5JffH8I9KwoL7UVQS7IQeXMvG/Ytrmb9EeqvItAeWn2jiMZZ/0n+WemhQHmyYn9OP5ZVDE8MEeihQHDp4njS9EXpS74j/COtCgOXSXeUn+R0Y8N/k60QDHTgvtRaS2SNUTKBooAApHJIznQGwc3icIznYHYja5OWZ8ksI6ZkTPwjFgo1mZLb7kspBAUUBBRpJGkBhRfBcjNgDKw13NZI8AWBaS7CzNiwqtmRYAEaFktgGiDUFQIloUR2/IAUUAShRQBKNRRDSYGqKRFIoUAAALAChYsBQBQiFAAAAAAAICgCUKKAJQooAlCikA/9k=";

function J2(e) {
  const t = ni({});
  return r0(() => {
    const n = Ae().$nuxtSiteConfig.get(ju({
      resolveRefs: !0
    }, e));
    t && n && Object.assign(t, n)
  }), delete t._priority, t
}

function Z2() {
  return ju(Dn().public["nuxt-schema-org"], {
    scriptAttributes: {}
  })
}

function eF(e) {
  const t = Z2(),
    n = Ae();
  let r = e;
  at(e) && (r = () => n.runWithContext(() => Er(e)));
  const i = {
    type: "application/ld+json",
    key: "schema-org-graph",
    nodes: r,
    tagPriority: "high",
    ...t.scriptAttributes
  };
  if (t?.reactive) return kl({
    script: [i]
  })
}

function CA(e, t) {
  e || (e = {});
  const n = at(e) ? e.value : e;
  return n._resolver = t, e
}

function nB(e) {
  return CA(e, "breadcrumb")
}

function tF(e) {
  return CA(e, "organization")
}
const nF = {
    class: "wrapper"
  },
  rF = ["src"],
  iF = mt({
    __name: "app",
    async setup(e) {
      let t, n;
      const {
        locale: r
      } = Pi(), i = bM({
        seo: !0
      });
      kl(() => ({
        htmlAttrs: {
          lang: i.value.htmlAttrs?.lang
        },
        link: [...i.value.link || []],
        meta: [...i.value.meta || []]
      }));
      const {
        isMobile: s
      } = Rh(), o = {
        common: "/api/strapi/common"
      };

      function a(y) {
        const _ = be(() => `${y}:${r.value}`);
        return IL(_, () => $fetch(o[y], {
          query: {
            locale: r.value
          }
        }), {
          server: !0,
          lazy: !1,
          watch: [r]
        })
      } [t, n] = K1(() => Promise.all([a("common")])), await t, n();
      const {
        data: l
      } = ea("common"), c = J2();

      function u(y) {
        if (!y) return;
        const _ = y.match(/^(.*)\s*,\s*(\d{2}-\d{3})\s*$/);
        return !_?.[1] || !_[2] ? {
          streetAddress: y,
          addressLocality: "Warsaw"
        } : {
          streetAddress: _[1].trim(),
          addressLocality: "Warsaw",
          postalCode: _[2]
        }
      }
      eF([tF({
        name: c.name || "HILIGHT",
        description: c.description,
        logo: ti("/apple-touch-icon.png"),
        email: l.value?.mail,
        telephone: l.value?.phoneNumber,
        address: u(l.value?.address),
        sameAs: [l.value?.instagramLink, l.value?.facebookLink, l.value?.linkedinLink, l.value?.behanceLink, l.value?.pinterestLink, l.value?.youtubeLink].filter(y => !!y)
      })]);
      const f = Se("preloader-done", () => !1);
      Se("common-vars", () => ({
        dur: .4,
        durIn: 1.2,
        durOut: .8,
        delayReveal: .3
      })), Se("header-state", () => ({
        onlyBtnWhite: !1,
        white: !1,
        instant: !1,
        isMenuOpen: !1
      }));
      const h = Se("cookie-state", () => ({
          agreed: !1,
          seen: !1,
          white: !1
        })),
        d = String(Dn().public.cookiebotId || ""),
        g = Se("cookiebot-fallback", () => !1),
        p = be(() => !d || g.value),
        m = Se("transition-done", () => !0),
        v = Se("project-card-expand", () => !1);
      return Qe(m, async y => {
        if (!y) return;
        const _ = document.querySelector(".project-expand");
        if (!_) {
          v.value = !1;
          return
        }
        const b = document.querySelector(".project-page .hero .photo img, .project-page .hero .photo video");
        b instanceof HTMLImageElement && b.getAttribute("src") && !b.complete ? await new Promise(w => {
          b.addEventListener("load", () => w(), {
            once: !0
          }), b.addEventListener("error", () => w(), {
            once: !0
          })
        }) : b instanceof HTMLVideoElement && b.readyState < 2 && await new Promise(w => {
          b.addEventListener("loadeddata", () => w(), {
            once: !0
          }), b.addEventListener("error", () => w(), {
            once: !0
          })
        }), await new Promise(w => requestAnimationFrame(() => w())), _.remove(), v.value = !1
      }), Bn(() => {
        s && document.body.classList.add("mobile-device")
      }), Se("contact-form", () => ({
        open: !1,
        step: "personal_info",
        previousSteps: [],
        vacancySkipToStep: null,
        currentScreenNumber: 1,
        chosenForm: "",
        totalSteps: 5,
        personalInfo: {
          name: "",
          email: "",
          phone: "",
          agreement: !1
        },
        startProject: {
          type: "",
          area: "",
          about: "",
          file: null
        },
        joinTeam: {
          position: "",
          find: "",
          about: "",
          file: null
        },
        media: {
          name: "",
          magazine: "",
          website: "",
          message: ""
        },
        greeting: {
          message: ""
        }
      })), (y, _) => {
        const b = tD,
          w = PL,
          S = JD,
          A = p2,
          L = y2,
          T = b2,
          O = $2,
          B = X2;
        return me(), Be("div", nF, [te("img", {
          class: "lcp-anchor",
          src: re(Q2),
          alt: "",
          role: "presentation",
          width: "480",
          height: "720",
          draggable: "false",
          style: {
            position: "fixed",
            top: "2px",
            left: "2px",
            width: "calc(100% - 4px)",
            height: "calc(100% - 4px)",
            "object-fit": "cover",
            opacity: "0.002",
            "pointer-events": "none"
          },
          onload: "requestAnimationFrame(() => requestAnimationFrame(() => (this.style.objectPosition = '50% 49.9%')))"
        }, null, 8, rF), we(w, null, {
          default: Ao(() => [we(b)]),
          _: 1
        }), we(S), re(f) ? En("", !0) : (me(), Rn(A, {
          key: 0
        })), we(L), we(T), we(w, null, {
          default: Ao(() => [re(p) && !re(h).seen ? (me(), Rn(O, {
            key: 0
          })) : En("", !0)]),
          _: 1
        }), we(w, null, {
          default: Ao(() => [(me(), Rn(S1, {
            to: "body"
          }, [we(B)]))]),
          _: 1
        })])
      }
    }
  }),
  sF = tn(iF, [
    ["__scopeId", "data-v-4c01e6de"]
  ]);
async function oF(e, t = {}) {
  await document.fonts.ready;
  const n = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e,
    r = ue.timeline({
      paused: !0
    }),
    i = ue.timeline({
      paused: !0
    });
  return n.forEach(s => {
    const {
      chars: o
    } = new Go(s, {
      type: "chars,words",
      mask: "chars",
      charsClass: "char",
      wordsClass: "word",
      smartWrap: !0,
      aria: "none"
    });
    if (!o.length) {
      ue.set(s, {
        opacity: 1
      });
      return
    }
    t.hyphenate !== !1 && lF(s), o.forEach(h => {
      const d = h.parentElement;
      d && (d.style.paddingTop = "0.12em", d.style.paddingBottom = "0.12em", d.style.marginTop = "-0.12em", d.style.marginBottom = "-0.12em")
    });
    const a = s.querySelectorAll(".word-shy");
    ue.set(o, {
      xPercent: 120
    }), ue.set(a, {
      opacity: 0
    }), ue.set(s, {
      opacity: 1
    });
    const l = t.delay ?? .3,
      c = t.stagger ?? .01,
      u = ue.timeline();
    u.to(o, {
      xPercent: 0,
      duration: 1.2,
      delay: l,
      ease: "Out",
      stagger: c
    }), a.forEach(h => {
      const d = h.previousElementSibling?.querySelector(".char:last-child"),
        g = d ? o.indexOf(d) : 0;
      u.to(h, {
        opacity: 1,
        duration: .35,
        ease: "Out"
      }, l + Math.max(g, 0) * c + .35)
    });
    const f = ue.timeline();
    f.to(o, {
      xPercent: -120,
      duration: .8,
      ease: "In",
      stagger: c
    }), a.length && f.to(a, {
      opacity: 0,
      duration: .2,
      ease: "In"
    }, 0), r.add(u, 0), i.add(f, 0)
  }), {
    in: r,
    out: i
  }
}
const aF = 10,
  _a = 3;

function lF(e) {
  const t = getComputedStyle(e),
    n = parseFloat(t.fontSize) || 16,
    r = parseFloat(t.letterSpacing),
    i = Number.isFinite(r) ? `${r/n}em` : t.letterSpacing;
  e.querySelectorAll(".word").forEach(s => {
    const o = s.textContent || "",
      a = o.match(new RegExp("\\p{L}", "gu"));
    if (!a || a.length < aF) return;
    const l = [...s.children];
    if (l.length !== o.length) return;
    const c = cF(o);
    if (!c.length) return;
    const u = [];
    let f = 0;
    for (const h of c) u.push(l.slice(f, h)), f = h;
    u.push(l.slice(f)), s.style.display = "inline", s.style.letterSpacing = "0", s.replaceChildren(), u.forEach((h, d) => {
      const g = document.createElement("span");
      if (g.style.display = "inline-block", g.style.whiteSpace = "nowrap", g.style.letterSpacing = i, h.forEach(p => g.appendChild(p)), s.appendChild(g), d < u.length - 1) {
        const p = document.createElement("span");
        p.className = "word-shy", p.textContent = "­", p.setAttribute("aria-hidden", "true"), s.appendChild(p)
      }
    })
  })
}
const ya = "aeiouyąęó";

function cF(e) {
  const t = e.toLowerCase().match(new RegExp(`[^${ya}]*[${ya}]+(?:[^${ya}]*$|[^${ya}](?=[^${ya}]))?`, "gi"));
  if (!t || t.length < 2) return [];
  const n = [...t],
    r = [];
  let i = 0;
  for (; i < n.length;) {
    let a = n[i];
    a.length < _a && i + 1 < n.length && (a += n[++i]), r.push(a), i++
  }
  r.length > 1 && r[r.length - 1].length < _a && (r[r.length - 2] += r.pop());
  const s = [];
  let o = 0;
  for (let a = 0; a < r.length - 1; a++) o += r[a].length, s.push(o);
  return s.filter((a, l, c) => a >= _a && e.length - a >= _a && (l === 0 || a - c[l - 1] >= _a))
}
const uF = Vh(() => jt(() => import("./DsGG8dP5.js"), [], import.meta.url).then(e => e.default || e)),
  fF = Vh(() => jt(() => import("./BOQKAkvh.js"), [], import.meta.url).then(e => e.default || e)),
  dF = Vh(() => jt(() => import("./BbuOhD1-.js"), [], import.meta.url).then(e => e.default || e)),
  hF = {
    class: "error-page"
  },
  pF = {
    class: "hero"
  },
  gF = {
    class: "error-lines-wrap"
  },
  mF = {
    class: "content"
  },
  _F = {
    class: "text-1 l2"
  },
  yF = {
    class: "text-1-txt2"
  },
  vF = {
    class: "body"
  },
  bF = {
    class: "title-top h2-light"
  },
  wF = {
    class: "title-top-word-1"
  },
  AF = {
    class: "title-top-word-2"
  },
  SF = {
    class: "logo error-logo"
  },
  EF = {
    class: "title-bot h2-light"
  },
  CF = {
    class: "title-bot-word-1"
  },
  TF = {
    class: "title-bot-word-2"
  },
  kF = {
    class: "text-2"
  },
  RF = {
    class: "text-2-title l2"
  },
  xF = {
    class: "text-2-link"
  },
  LF = ["href"],
  wy = 18,
  PF = 10,
  OF = 24,
  IF = 10,
  MF = mt({
    __name: "error",
    props: {
      error: {}
    },
    setup(e) {
      const {
        isDesktop: t
      } = af(), n = eA();
      let r = [],
        i = null,
        s = null,
        o = null;
      const a = f => {
          const {
            innerWidth: h,
            innerHeight: d
          } = window, g = (f.clientX / h - .5) * 2, p = (f.clientY / d - .5) * 2;
          r.forEach(({
            el: m,
            factor: v
          }) => {
            ue.to(m, {
              x: g * wy * v,
              y: p * wy * v,
              ease: "power2.out",
              duration: 2
            })
          }), o?.(g * PF), i?.(g * OF), s?.(Math.abs(g) * IF + Math.max(0, p) * 50)
        },
        l = () => {
          r.forEach(({
            el: f
          }) => {
            ue.to(f, {
              x: 0,
              y: 0,
              ease: "power2.out",
              duration: 2
            })
          }), o?.(0), i?.(0), s?.(0)
        },
        c = () => {
          const f = document.querySelector(".logo-svg"),
            h = document.querySelector(".error-light");
          f && (r = [{
            el: f.querySelector(".path2"),
            factor: .25
          }, {
            el: f.querySelector(".path3"),
            factor: .5
          }, {
            el: f.querySelector(".path4"),
            factor: .75
          }, {
            el: f.querySelector(".path5"),
            factor: 1
          }, {
            el: f.querySelector(".path6"),
            factor: 1.25
          }, {
            el: document.querySelector(".error-lines"),
            factor: 1.5
          }].filter(d => d.el)), h && (i = ue.quickTo(h, "x", {
            duration: 1.5,
            ease: "power2.out"
          }), s = ue.quickTo(h, "y", {
            duration: 1,
            ease: "power2.out"
          }), o = ue.quickTo(h, "rotation", {
            duration: 1.5,
            ease: "power2.out"
          })), window.addEventListener("mousemove", a), window.addEventListener("mouseleave", l)
        },
        u = async () => {
          const f = document.querySelectorAll(".title-top-word-1, .title-top-word-2, .title-bot-word-1, .title-bot-word-2"),
            h = document.querySelectorAll(".text-1-txt, .text-1-txt2, .text-2-title, .text-2-link"),
            d = await oF(f, {
              stagger: .05
            }),
            g = await Jp(h),
            p = ue.timeline({
              delay: .2
            });
          p.to(".hero", {
            opacity: 1,
            duration: .1
          }), p.add(d.in.play()), p.add(g.in.play(), "<"), p.from(".error-lines, .error-light", {
            opacity: 0,
            stagger: .1
          }, "<50%")
        };
      return Bn(() => {
        t.value && c(), u()
      }), Mi(() => {
        t.value && (window.removeEventListener("mousemove", a), window.removeEventListener("mouseleave", l))
      }), (f, h) => {
        const d = uF,
          g = fF,
          p = dF,
          m = Qp;
        return me(), Be("main", hF, [te("div", pF, [te("div", gF, [we(d, {
          class: "error-lines"
        })]), we(g, {
          class: "error-light"
        }), te("div", mF, [te("div", _F, [h[0] || (h[0] = te("p", {
          class: "text-1-txt"
        }, "hilight®", -1)), te("p", yF, Pt(f.$t("sorry_this_page_doesnt_exist")), 1)]), te("div", vF, [te("h1", bF, [te("div", wF, Pt(f.$t("nothing")), 1), te("div", AF, Pt(f.$t("found")), 1)]), te("div", SF, [we(p, {
          class: "logo-svg"
        })]), te("h2", EF, [te("div", CF, Pt(f.$t("wrong")), 1), te("div", TF, Pt(f.$t("address")), 1)])]), te("div", kF, [te("p", RF, Pt(f.$t("error_404")), 1), te("div", xF, [te("a", {
          href: re(n)("/")
        }, [we(m, {
          text: f.$t("back_to_home"),
          white: "",
          arrow: ""
        }, null, 8, ["text"])], 8, LF)])])])])])
      }
    }
  }),
  NF = tn(MF, [
    ["__scopeId", "data-v-7e424d6d"]
  ]),
  DF = {
    key: 0
  },
  Ay = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null,
        n = Ae(),
        r = n.deferHydration();
      if (n.isHydrating) {
        const c = n.hooks.hookOnce("app:error", r);
        Tt().beforeEach(c)
      }
      const i = !1;
      Ns($u, Tl()), n.hooks.callHookWith(c => c.map(u => u()), "vue:setup");
      const s = Vu(),
        o = !1,
        a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
      h0((c, u, f) => {
        if (n.hooks.callHook("vue:error", c, u, f).catch(h => console.error("[nuxt] Error in `vue:error` hook", h)), a.test(navigator.userAgent)) return n.hooks.callHook("app:error", c), console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, c), !1;
        if (hv(c) && (c.fatal || c.unhandled)) return n.runWithContext(() => As(c)), !1
      });
      const l = !1;
      return (c, u) => (me(), Rn(I0, {
        onResolve: re(r)
      }, {
        default: Ao(() => [re(o) ? (me(), Be("div", DF)) : re(s) ? (me(), Rn(re(NF), {
          key: 1,
          error: re(s)
        }, null, 8, ["error"])) : re(l) ? (me(), Rn(re(t), {
          key: 2,
          context: re(l)
        }, null, 8, ["context"])) : re(i) ? (me(), Rn(q1(re(i)), {
          key: 3
        })) : (me(), Rn(re(sF), {
          key: 4
        }))]),
        _: 1
      }, 8, ["onResolve"]))
    }
  };
let Sy;
{
  let e;
  Sy = async function() {
    if (e) return e;
    const n = !!(window.__NUXT__?.serverRendered ?? document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true"),
      r = n ? mE(Ay) : gE(Ay),
      i = kC({
        vueApp: r
      });
    async function s(o) {
      await i.callHook("app:error", o), i.payload.error ||= Ci(o)
    }
    r.config.errorHandler = s, i.hook("app:suspense:resolve", () => {
      r.config.errorHandler === s && (r.config.errorHandler = void 0)
    }), !n && jg.id && i.hook("app:suspense:resolve", () => {
      document.getElementById(jg.id)?.remove()
    });
    try {
      await LC(i, VN)
    } catch (o) {
      s(o)
    }
    try {
      await i.hooks.callHook("app:created", r), await i.hooks.callHook("app:beforeMount", r), r.mount(EC), await i.hooks.callHook("app:mounted", r), await ur()
    } catch (o) {
      s(o)
    }
    return r
  }, e = Sy().catch(t => {
    throw console.error("Error while mounting app:", t), t
  })
}
export {
  Sr as $, ur as A, Zs as B, Vs as C, Qp as D, AA as E, pt as F, ea as G, K1 as H, ti as I, ES as J, q1 as K, lD as L, Pi as M, Tl as N, wA as O, Se as P, IL as Q, As as R, Te as S, S1 as T, KF as U, DD as V, eA as W, Ih as X, Td as Y, Et as Z, SA as _, Jp as a, YR as a$, HM as a0, Go as a1, CD as a2, TD as a3, oA as a4, fE as a5, Tt as a6, at as a7, FF as a8, VF as a9, Zt as aA, Ns as aB, ID as aC, $F as aD, Dn as aE, eB as aF, Jr as aG, Yp as aH, ND as aI, eF as aJ, nB as aK, Fn as aL, Ub as aM, Lt as aN, xn as aO, QR as aP, JR as aQ, cb as aR, fb as aS, ub as aT, XR as aU, un as aV, qR as aW, mb as aX, cr as aY, hb as aZ, KR as a_, ni as aa, _D as ab, a_ as ac, GF as ad, Er as ae, Ty as af, jF as ag, jt as ah, YF as ai, Vh as aj, UF as ak, Th as al, UN as am, DN as an, tB as ao, MN as ap, HF as aq, WF as ar, US as as, BF as at, qF as au, I2 as av, zF as aw, QF as ax, ZF as ay, JF as az, M2 as b, ZR as b0, lb as b1, jd as b2, Ha as b3, Oe as b4, as as b5, ts as b6, Kr as b7, Jd as b8, Ut as b9, Sn as ba, Tn as bb, Zo as bc, Be as c, mt as d, te as e, we as f, B0 as g, En as h, PL as i, Rn as j, re as k, be as l, ue as m, tn as n, me as o, Bn as p, oF as q, et as r, Mi as s, Pt as t, af as u, Yn as v, Ao as w, Qe as x, $c as y, aD as z
};