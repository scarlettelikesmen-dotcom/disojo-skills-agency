/* https://ab-sl.ru/_nuxt/DXpihNzX.js */
import {
  d as Wh,
  p as jh,
  G as Xh,
  z as qh,
  o as gi,
  c as yi,
  a as Ct,
  n as Zn,
  F as Yh,
  r as Zh,
  e as $l,
  t as Ea,
  f as Ql,
  s as Jh,
  _ as $h
} from "./DROVP5M4.js";
import {
  u as Qh
} from "./DFRH1ql4.js";
const Kh = globalThis.setInterval;
Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52));
Number.isInteger === void 0 && (Number.isInteger = function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e
});
Math.sign === void 0 && (Math.sign = function(e) {
  return e < 0 ? -1 : e > 0 ? 1 : +e
});
"name" in Function.prototype || Object.defineProperty(Function.prototype, "name", {
  get: function() {
    return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
  }
});
Object.assign === void 0 && (Object.assign = function(e) {
  if (e == null) throw new TypeError("Cannot convert undefined or null to object");
  for (var t = Object(e), n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    if (r != null)
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
  }
  return t
});
var ef = "115",
  Dn = {
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  },
  On = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  },
  tf = 0,
  Kl = 1,
  nf = 2,
  Nu = 1,
  rf = 2,
  Ri = 3,
  ga = 0,
  ht = 1,
  ya = 2,
  Fu = 1,
  Un = 0,
  Pi = 1,
  ec = 2,
  tc = 3,
  nc = 4,
  af = 5,
  Ur = 100,
  of = 101,
  sf = 102,
  rc = 103,
  ic = 104,
  lf = 200,
  cf = 201,
  uf = 202,
  hf = 203,
  Bu = 204,
  Uu = 205,
  ff = 206,
  df = 207,
  pf = 208,
  vf = 209,
  mf = 210,
  gf = 0,
  yf = 1,
  xf = 2,
  Ds = 3,
  _f = 4,
  bf = 5,
  Mf = 6,
  wf = 7,
  Yo = 0,
  Sf = 1,
  Ef = 2,
  ao = 0,
  Dl = 1,
  Tf = 2,
  Af = 3,
  Lf = 4,
  Rf = 5,
  Ol = 300,
  Il = 301,
  Nl = 302,
  zu = 303,
  Fl = 304,
  Gu = 305,
  xa = 306,
  Bl = 307,
  lo = 1e3,
  Tt = 1001,
  co = 1002,
  lt = 1003,
  Os = 1004,
  Is = 1005,
  ft = 1006,
  Hu = 1007,
  Zo = 1008,
  Jo = 1009,
  Cf = 1010,
  Pf = 1011,
  uo = 1012,
  Df = 1013,
  oo = 1014,
  In = 1015,
  ho = 1016,
  Of = 1017,
  If = 1018,
  Nf = 1019,
  Di = 1020,
  Ff = 1021,
  zn = 1022,
  $t = 1023,
  Bf = 1024,
  Uf = 1025,
  zf = $t,
  jr = 1026,
  Fi = 1027,
  Gf = 1028,
  Hf = 1029,
  Vf = 1030,
  kf = 1031,
  Wf = 1032,
  jf = 1033,
  ac = 33776,
  oc = 33777,
  sc = 33778,
  lc = 33779,
  cc = 35840,
  uc = 35841,
  hc = 35842,
  fc = 35843,
  Xf = 36196,
  dc = 37492,
  pc = 37496,
  qf = 37808,
  Yf = 37809,
  Zf = 37810,
  Jf = 37811,
  $f = 37812,
  Qf = 37813,
  Kf = 37814,
  ed = 37815,
  td = 37816,
  nd = 37817,
  rd = 37818,
  id = 37819,
  ad = 37820,
  od = 37821,
  sd = 36492,
  ld = 37840,
  cd = 37841,
  ud = 37842,
  hd = 37843,
  fd = 37844,
  dd = 37845,
  pd = 37846,
  vd = 37847,
  md = 37848,
  gd = 37849,
  yd = 37850,
  xd = 37851,
  _d = 37852,
  bd = 37853,
  Md = 2200,
  wd = 2201,
  Sd = 2202,
  fo = 2300,
  so = 2301,
  ts = 2302,
  qr = 2400,
  Gr = 2401,
  po = 2402,
  Ed = 0,
  Ot = 3e3,
  Ul = 3001,
  Vu = 3007,
  zl = 3002,
  Td = 3003,
  ku = 3004,
  Wu = 3005,
  ju = 3006,
  Ad = 3200,
  Ld = 3201,
  di = 0,
  Rd = 1,
  ns = 7680,
  Cd = 519,
  $o = 35044,
  Bi = 35048;

function Qt() {}
Object.assign(Qt.prototype, {
  addEventListener: function(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    var n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t)
  },
  hasEventListener: function(e, t) {
    if (this._listeners === void 0) return !1;
    var n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1
  },
  removeEventListener: function(e, t) {
    if (this._listeners !== void 0) {
      var n = this._listeners,
        r = n[e];
      if (r !== void 0) {
        var i = r.indexOf(t);
        i !== -1 && r.splice(i, 1)
      }
    }
  },
  dispatchEvent: function(e) {
    if (this._listeners !== void 0) {
      var t = this._listeners,
        n = t[e.type];
      if (n !== void 0) {
        e.target = this;
        for (var r = n.slice(0), i = 0, a = r.length; i < a; i++) r[i].call(this, e)
      }
    }
  }
});
var dt = [];
for (var xi = 0; xi < 256; xi++) dt[xi] = (xi < 16 ? "0" : "") + xi.toString(16);
var Te = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  generateUUID: function() {
    var e = Math.random() * 4294967295 | 0,
      t = Math.random() * 4294967295 | 0,
      n = Math.random() * 4294967295 | 0,
      r = Math.random() * 4294967295 | 0,
      i = dt[e & 255] + dt[e >> 8 & 255] + dt[e >> 16 & 255] + dt[e >> 24 & 255] + "-" + dt[t & 255] + dt[t >> 8 & 255] + "-" + dt[t >> 16 & 15 | 64] + dt[t >> 24 & 255] + "-" + dt[n & 63 | 128] + dt[n >> 8 & 255] + "-" + dt[n >> 16 & 255] + dt[n >> 24 & 255] + dt[r & 255] + dt[r >> 8 & 255] + dt[r >> 16 & 255] + dt[r >> 24 & 255];
    return i.toUpperCase()
  },
  clamp: function(e, t, n) {
    return Math.max(t, Math.min(n, e))
  },
  euclideanModulo: function(e, t) {
    return (e % t + t) % t
  },
  mapLinear: function(e, t, n, r, i) {
    return r + (e - t) * (i - r) / (n - t)
  },
  lerp: function(e, t, n) {
    return (1 - n) * e + n * t
  },
  smoothstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e))
  },
  smootherstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10))
  },
  randInt: function(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1))
  },
  randFloat: function(e, t) {
    return e + Math.random() * (t - e)
  },
  randFloatSpread: function(e) {
    return e * (.5 - Math.random())
  },
  degToRad: function(e) {
    return e * Te.DEG2RAD
  },
  radToDeg: function(e) {
    return e * Te.RAD2DEG
  },
  isPowerOfTwo: function(e) {
    return (e & e - 1) === 0 && e !== 0
  },
  ceilPowerOfTwo: function(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
  },
  floorPowerOfTwo: function(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
  },
  setQuaternionFromProperEuler: function(e, t, n, r, i) {
    var a = Math.cos,
      o = Math.sin,
      s = a(n / 2),
      l = o(n / 2),
      c = a((t + r) / 2),
      u = o((t + r) / 2),
      h = a((t - r) / 2),
      f = o((t - r) / 2),
      d = a((r - t) / 2),
      p = o((r - t) / 2);
    i === "XYX" ? e.set(s * u, l * h, l * f, s * c) : i === "YZY" ? e.set(l * f, s * u, l * h, s * c) : i === "ZXZ" ? e.set(l * h, l * f, s * u, s * c) : i === "XZX" ? e.set(s * u, l * p, l * d, s * c) : i === "YXY" ? e.set(l * d, s * u, l * p, s * c) : i === "ZYZ" ? e.set(l * p, l * d, s * u, s * c) : console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.")
  }
};

function H(e, t) {
  this.x = e || 0, this.y = t || 0
}
Object.defineProperties(H.prototype, {
  width: {
    get: function() {
      return this.x
    },
    set: function(e) {
      this.x = e
    }
  },
  height: {
    get: function() {
      return this.y
    },
    set: function(e) {
      this.y = e
    }
  }
});
Object.assign(H.prototype, {
  isVector2: !0,
  set: function(e, t) {
    return this.x = e, this.y = t, this
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this
  },
  setX: function(e) {
    return this.x = e, this
  },
  setY: function(e) {
    return this.y = e, this
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
    return this
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y)
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this
  },
  multiply: function(e) {
    return this.x *= e.x, this.y *= e.y, this
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e)
  },
  applyMatrix3: function(e) {
    var t = this.x,
      n = this.y,
      r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y
  },
  cross: function(e) {
    return this.x * e.y - this.y * e.x
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y)
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1)
  },
  angle: function() {
    var e = Math.atan2(-this.y, -this.x) + Math.PI;
    return e
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e))
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e)
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
  },
  lerpVectors: function(e, t, n) {
    return this.subVectors(t, e).multiplyScalar(n).add(e)
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
  },
  rotateAround: function(e, t) {
    var n = Math.cos(t),
      r = Math.sin(t),
      i = this.x - e.x,
      a = this.y - e.y;
    return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this
  }
});

function gt() {
  this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}
Object.assign(gt.prototype, {
  isMatrix3: !0,
  set: function(e, t, n, r, i, a, o, s, l) {
    var c = this.elements;
    return c[0] = e, c[1] = r, c[2] = o, c[3] = t, c[4] = i, c[5] = s, c[6] = n, c[7] = a, c[8] = l, this
  },
  identity: function() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
  },
  clone: function() {
    return new this.constructor().fromArray(this.elements)
  },
  copy: function(e) {
    var t = this.elements,
      n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
  },
  extractBasis: function(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
  },
  setFromMatrix4: function(e) {
    var t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
  },
  multiply: function(e) {
    return this.multiplyMatrices(this, e)
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this)
  },
  multiplyMatrices: function(e, t) {
    var n = e.elements,
      r = t.elements,
      i = this.elements,
      a = n[0],
      o = n[3],
      s = n[6],
      l = n[1],
      c = n[4],
      u = n[7],
      h = n[2],
      f = n[5],
      d = n[8],
      p = r[0],
      v = r[3],
      m = r[6],
      g = r[1],
      x = r[4],
      w = r[7],
      S = r[2],
      b = r[5],
      T = r[8];
    return i[0] = a * p + o * g + s * S, i[3] = a * v + o * x + s * b, i[6] = a * m + o * w + s * T, i[1] = l * p + c * g + u * S, i[4] = l * v + c * x + u * b, i[7] = l * m + c * w + u * T, i[2] = h * p + f * g + d * S, i[5] = h * v + f * x + d * b, i[8] = h * m + f * w + d * T, this
  },
  multiplyScalar: function(e) {
    var t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
  },
  determinant: function() {
    var e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      l = e[7],
      c = e[8];
    return t * a * c - t * o * l - n * i * c + n * o * s + r * i * l - r * a * s
  },
  getInverse: function(e, t) {
    t !== void 0 && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
    var n = e.elements,
      r = this.elements,
      i = n[0],
      a = n[1],
      o = n[2],
      s = n[3],
      l = n[4],
      c = n[5],
      u = n[6],
      h = n[7],
      f = n[8],
      d = f * l - c * h,
      p = c * u - f * s,
      v = h * s - l * u,
      m = i * d + a * p + o * v;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    var g = 1 / m;
    return r[0] = d * g, r[1] = (o * h - f * a) * g, r[2] = (c * a - o * l) * g, r[3] = p * g, r[4] = (f * i - o * u) * g, r[5] = (o * s - c * i) * g, r[6] = v * g, r[7] = (a * u - h * i) * g, r[8] = (l * i - a * s) * g, this
  },
  transpose: function() {
    var e, t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
  },
  getNormalMatrix: function(e) {
    return this.setFromMatrix4(e).getInverse(this).transpose()
  },
  transposeIntoArray: function(e) {
    var t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
  },
  setUvTransform: function(e, t, n, r, i, a, o) {
    var s = Math.cos(i),
      l = Math.sin(i);
    this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -r * l, r * s, -r * (-l * a + s * o) + o + t, 0, 0, 1)
  },
  scale: function(e, t) {
    var n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
  },
  rotate: function(e) {
    var t = Math.cos(e),
      n = Math.sin(e),
      r = this.elements,
      i = r[0],
      a = r[3],
      o = r[6],
      s = r[1],
      l = r[4],
      c = r[7];
    return r[0] = t * i + n * s, r[3] = t * a + n * l, r[6] = t * o + n * c, r[1] = -n * i + t * s, r[4] = -n * a + t * l, r[7] = -n * o + t * c, this
  },
  translate: function(e, t) {
    var n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
  },
  equals: function(e) {
    for (var t = this.elements, n = e.elements, r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    var n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
  }
});
var _r, ur = {
    getDataURL: function(e) {
      var t;
      if (typeof HTMLCanvasElement > "u") return e.src;
      if (e instanceof HTMLCanvasElement) t = e;
      else {
        _r === void 0 && (_r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), _r.width = e.width, _r.height = e.height;
        var n = _r.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = _r
      }
      return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
    }
  },
  Pd = 0;

function Ze(e, t, n, r, i, a, o, s, l, c) {
  Object.defineProperty(this, "id", {
    value: Pd++
  }), this.uuid = Te.generateUUID(), this.name = "", this.image = e !== void 0 ? e : Ze.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = t !== void 0 ? t : Ze.DEFAULT_MAPPING, this.wrapS = n !== void 0 ? n : Tt, this.wrapT = r !== void 0 ? r : Tt, this.magFilter = i !== void 0 ? i : ft, this.minFilter = a !== void 0 ? a : Zo, this.anisotropy = l !== void 0 ? l : 1, this.format = o !== void 0 ? o : $t, this.internalFormat = null, this.type = s !== void 0 ? s : Jo, this.offset = new H(0, 0), this.repeat = new H(1, 1), this.center = new H(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new gt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c !== void 0 ? c : Ot, this.version = 0, this.onUpdate = null
}
Ze.DEFAULT_IMAGE = void 0;
Ze.DEFAULT_MAPPING = Ol;
Ze.prototype = Object.assign(Object.create(Qt.prototype), {
  constructor: Ze,
  isTexture: !0,
  updateMatrix: function() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    var n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (this.image !== void 0) {
      var r = this.image;
      if (r.uuid === void 0 && (r.uuid = Te.generateUUID()), !t && e.images[r.uuid] === void 0) {
        var i;
        if (Array.isArray(r)) {
          i = [];
          for (var a = 0, o = r.length; a < o; a++) i.push(ur.getDataURL(r[a]))
        } else i = ur.getDataURL(r);
        e.images[r.uuid] = {
          uuid: r.uuid,
          url: i
        }
      }
      n.image = r.uuid
    }
    return t || (e.textures[this.uuid] = n), n
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  },
  transformUv: function(e) {
    if (this.mapping !== Ol) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case lo:
        e.x = e.x - Math.floor(e.x);
        break;
      case Tt:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case co:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case lo:
        e.y = e.y - Math.floor(e.y);
        break;
      case Tt:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case co:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break
    }
    return this.flipY && (e.y = 1 - e.y), e
  }
});
Object.defineProperty(Ze.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++
  }
});

function Ye(e, t, n, r) {
  this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = r !== void 0 ? r : 1
}
Object.defineProperties(Ye.prototype, {
  width: {
    get: function() {
      return this.z
    },
    set: function(e) {
      this.z = e
    }
  },
  height: {
    get: function() {
      return this.w
    },
    set: function(e) {
      this.w = e
    }
  }
});
Object.assign(Ye.prototype, {
  isVector4: !0,
  set: function(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this
  },
  setX: function(e) {
    return this.x = e, this
  },
  setY: function(e) {
    return this.y = e, this
  },
  setZ: function(e) {
    return this.z = e, this
  },
  setW: function(e) {
    return this.w = e, this
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
    return this
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z, this.w)
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
  },
  applyMatrix4: function(e) {
    var t = this.x,
      n = this.y,
      r = this.z,
      i = this.w,
      a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e)
  },
  setAxisAngleFromQuaternion: function(e) {
    this.w = 2 * Math.acos(e.w);
    var t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
  },
  setAxisAngleFromRotationMatrix: function(e) {
    var t, n, r, i, a = .01,
      o = .1,
      s = e.elements,
      l = s[0],
      c = s[4],
      u = s[8],
      h = s[1],
      f = s[5],
      d = s[9],
      p = s[2],
      v = s[6],
      m = s[10];
    if (Math.abs(c - h) < a && Math.abs(u - p) < a && Math.abs(d - v) < a) {
      if (Math.abs(c + h) < o && Math.abs(u + p) < o && Math.abs(d + v) < o && Math.abs(l + f + m - 3) < o) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      var g = (l + 1) / 2,
        x = (f + 1) / 2,
        w = (m + 1) / 2,
        S = (c + h) / 4,
        b = (u + p) / 4,
        T = (d + v) / 4;
      return g > x && g > w ? g < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(g), r = S / n, i = b / n) : x > w ? x < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(x), n = S / r, i = T / r) : w < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(w), n = b / i, r = T / i), this.set(n, r, i, t), this
    }
    var D = Math.sqrt((v - d) * (v - d) + (u - p) * (u - p) + (h - c) * (h - c));
    return Math.abs(D) < .001 && (D = 1), this.x = (v - d) / D, this.y = (u - p) / D, this.z = (h - c) / D, this.w = Math.acos((l + f + m - 1) / 2), this
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1)
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e)
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
  },
  lerpVectors: function(e, t, n) {
    return this.subVectors(t, e).multiplyScalar(n).add(e)
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
  }
});

function zt(e, t, n) {
  this.width = e, this.height = t, this.scissor = new Ye(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ye(0, 0, e, t), n = n || {}, this.texture = new Ze(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ft, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !0, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null
}
zt.prototype = Object.assign(Object.create(Qt.prototype), {
  constructor: zt,
  isWebGLRenderTarget: !0,
  setSize: function(e, t) {
    (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.texture.image.width = e, this.texture.image.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
});

function vc(e, t, n) {
  zt.call(this, e, t, n), this.samples = 4
}
vc.prototype = Object.assign(Object.create(zt.prototype), {
  constructor: vc,
  isWebGLMultisampleRenderTarget: !0,
  copy: function(e) {
    return zt.prototype.copy.call(this, e), this.samples = e.samples, this
  }
});

function yt(e, t, n, r) {
  this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = r !== void 0 ? r : 1
}
Object.assign(yt, {
  slerp: function(e, t, n, r) {
    return n.copy(e).slerp(t, r)
  },
  slerpFlat: function(e, t, n, r, i, a, o) {
    var s = n[r + 0],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      h = i[a + 0],
      f = i[a + 1],
      d = i[a + 2],
      p = i[a + 3];
    if (u !== p || s !== h || l !== f || c !== d) {
      var v = 1 - o,
        m = s * h + l * f + c * d + u * p,
        g = m >= 0 ? 1 : -1,
        x = 1 - m * m;
      if (x > Number.EPSILON) {
        var w = Math.sqrt(x),
          S = Math.atan2(w, m * g);
        v = Math.sin(v * S) / w, o = Math.sin(o * S) / w
      }
      var b = o * g;
      if (s = s * v + h * b, l = l * v + f * b, c = c * v + d * b, u = u * v + p * b, v === 1 - o) {
        var T = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
        s *= T, l *= T, c *= T, u *= T
      }
    }
    e[t] = s, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u
  }
});
Object.defineProperties(yt.prototype, {
  x: {
    get: function() {
      return this._x
    },
    set: function(e) {
      this._x = e, this._onChangeCallback()
    }
  },
  y: {
    get: function() {
      return this._y
    },
    set: function(e) {
      this._y = e, this._onChangeCallback()
    }
  },
  z: {
    get: function() {
      return this._z
    },
    set: function(e) {
      this._z = e, this._onChangeCallback()
    }
  },
  w: {
    get: function() {
      return this._w
    },
    set: function(e) {
      this._w = e, this._onChangeCallback()
    }
  }
});
Object.assign(yt.prototype, {
  isQuaternion: !0,
  set: function(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._w)
  },
  copy: function(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
  },
  setFromEuler: function(e, t) {
    if (!(e && e.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    var n = e._x,
      r = e._y,
      i = e._z,
      a = e.order,
      o = Math.cos,
      s = Math.sin,
      l = o(n / 2),
      c = o(r / 2),
      u = o(i / 2),
      h = s(n / 2),
      f = s(r / 2),
      d = s(i / 2);
    return a === "XYZ" ? (this._x = h * c * u + l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u - h * f * d) : a === "YXZ" ? (this._x = h * c * u + l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u + h * f * d) : a === "ZXY" ? (this._x = h * c * u - l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u - h * f * d) : a === "ZYX" ? (this._x = h * c * u - l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u + h * f * d) : a === "YZX" ? (this._x = h * c * u + l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u - h * f * d) : a === "XZY" && (this._x = h * c * u - l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u + h * f * d), t !== !1 && this._onChangeCallback(), this
  },
  setFromAxisAngle: function(e, t) {
    var n = t / 2,
      r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this
  },
  setFromRotationMatrix: function(e) {
    var t = e.elements,
      n = t[0],
      r = t[4],
      i = t[8],
      a = t[1],
      o = t[5],
      s = t[9],
      l = t[2],
      c = t[6],
      u = t[10],
      h = n + o + u,
      f;
    return h > 0 ? (f = .5 / Math.sqrt(h + 1), this._w = .25 / f, this._x = (c - s) * f, this._y = (i - l) * f, this._z = (a - r) * f) : n > o && n > u ? (f = 2 * Math.sqrt(1 + n - o - u), this._w = (c - s) / f, this._x = .25 * f, this._y = (r + a) / f, this._z = (i + l) / f) : o > u ? (f = 2 * Math.sqrt(1 + o - n - u), this._w = (i - l) / f, this._x = (r + a) / f, this._y = .25 * f, this._z = (s + c) / f) : (f = 2 * Math.sqrt(1 + u - n - o), this._w = (a - r) / f, this._x = (i + l) / f, this._y = (s + c) / f, this._z = .25 * f), this._onChangeCallback(), this
  },
  setFromUnitVectors: function(e, t) {
    var n = 1e-6,
      r = e.dot(t) + 1;
    return r < n ? (r = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = r) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = r)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = r), this.normalize()
  },
  angleTo: function(e) {
    return 2 * Math.acos(Math.abs(Te.clamp(this.dot(e), -1, 1)))
  },
  rotateTowards: function(e, t) {
    var n = this.angleTo(e);
    if (n === 0) return this;
    var r = Math.min(1, t / n);
    return this.slerp(e, r), this
  },
  inverse: function() {
    return this.conjugate()
  },
  conjugate: function() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
  },
  dot: function(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
  },
  lengthSq: function() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
  },
  length: function() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
  },
  normalize: function() {
    var e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
  },
  premultiply: function(e) {
    return this.multiplyQuaternions(e, this)
  },
  multiplyQuaternions: function(e, t) {
    var n = e._x,
      r = e._y,
      i = e._z,
      a = e._w,
      o = t._x,
      s = t._y,
      l = t._z,
      c = t._w;
    return this._x = n * c + a * o + r * l - i * s, this._y = r * c + a * s + i * o - n * l, this._z = i * c + a * l + n * s - r * o, this._w = a * c - n * o - r * s - i * l, this._onChangeCallback(), this
  },
  slerp: function(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    var n = this._x,
      r = this._y,
      i = this._z,
      a = this._w,
      o = a * e._w + n * e._x + r * e._y + i * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
    var s = 1 - o * o;
    if (s <= Number.EPSILON) {
      var l = 1 - t;
      return this._w = l * a + t * this._w, this._x = l * n + t * this._x, this._y = l * r + t * this._y, this._z = l * i + t * this._z, this.normalize(), this._onChangeCallback(), this
    }
    var c = Math.sqrt(s),
      u = Math.atan2(c, o),
      h = Math.sin((1 - t) * u) / c,
      f = Math.sin(t * u) / c;
    return this._w = a * h + this._w * f, this._x = n * h + this._x * f, this._y = r * h + this._y * f, this._z = i * h + this._z * f, this._onChangeCallback(), this
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
  },
  fromBufferAttribute: function(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this
  },
  _onChangeCallback: function() {}
});
var rs = new M,
  mc = new yt;

function M(e, t, n) {
  this.x = e || 0, this.y = t || 0, this.z = n || 0
}
Object.assign(M.prototype, {
  isVector3: !0,
  set: function(e, t, n) {
    return this.x = e, this.y = t, this.z = n, this
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this
  },
  setX: function(e) {
    return this.x = e, this
  },
  setY: function(e) {
    return this.y = e, this
  },
  setZ: function(e) {
    return this.z = e, this
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e)
    }
    return this
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e)
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z)
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this
  },
  multiplyVectors: function(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
  },
  applyEuler: function(e) {
    return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(mc.setFromEuler(e))
  },
  applyAxisAngle: function(e, t) {
    return this.applyQuaternion(mc.setFromAxisAngle(e, t))
  },
  applyMatrix3: function(e) {
    var t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this
  },
  applyNormalMatrix: function(e) {
    return this.applyMatrix3(e).normalize()
  },
  applyMatrix4: function(e) {
    var t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements,
      a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
    return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this
  },
  applyQuaternion: function(e) {
    var t = this.x,
      n = this.y,
      r = this.z,
      i = e.x,
      a = e.y,
      o = e.z,
      s = e.w,
      l = s * t + a * r - o * n,
      c = s * n + o * t - i * r,
      u = s * r + i * n - a * t,
      h = -i * t - a * n - o * r;
    return this.x = l * s + h * -i + c * -o - u * -a, this.y = c * s + h * -a + u * -i - l * -o, this.z = u * s + h * -o + l * -a - c * -i, this
  },
  project: function(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
  },
  unproject: function(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
  },
  transformDirection: function(e) {
    var t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements;
    return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize()
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e)
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1)
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e)
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
  },
  lerpVectors: function(e, t, n) {
    return this.subVectors(t, e).multiplyScalar(n).add(e)
  },
  cross: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
  },
  crossVectors: function(e, t) {
    var n = e.x,
      r = e.y,
      i = e.z,
      a = t.x,
      o = t.y,
      s = t.z;
    return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this
  },
  projectOnVector: function(e) {
    var t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    var n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n)
  },
  projectOnPlane: function(e) {
    return rs.copy(this).projectOnVector(e), this.sub(rs)
  },
  reflect: function(e) {
    return this.sub(rs.copy(e).multiplyScalar(2 * this.dot(e)))
  },
  angleTo: function(e) {
    var t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    var n = this.dot(e) / t;
    return Math.acos(Te.clamp(n, -1, 1))
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e))
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
  },
  setFromSpherical: function(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
  },
  setFromSphericalCoords: function(e, t, n) {
    var r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this
  },
  setFromCylindrical: function(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
  },
  setFromCylindricalCoords: function(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
  },
  setFromMatrixPosition: function(e) {
    var t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this
  },
  setFromMatrixScale: function(e) {
    var t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this
  },
  setFromMatrixColumn: function(e, t) {
    return this.fromArray(e.elements, t * 4)
  },
  setFromMatrix3Column: function(e, t) {
    return this.fromArray(e.elements, t * 3)
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
  }
});
var br = new M,
  Xt = new De,
  Dd = new M(0, 0, 0),
  Od = new M(1, 1, 1),
  An = new M,
  Ta = new M,
  Pt = new M;

function De() {
  this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}
Object.assign(De.prototype, {
  isMatrix4: !0,
  set: function(e, t, n, r, i, a, o, s, l, c, u, h, f, d, p, v) {
    var m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = r, m[1] = i, m[5] = a, m[9] = o, m[13] = s, m[2] = l, m[6] = c, m[10] = u, m[14] = h, m[3] = f, m[7] = d, m[11] = p, m[15] = v, this
  },
  identity: function() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
  },
  clone: function() {
    return new De().fromArray(this.elements)
  },
  copy: function(e) {
    var t = this.elements,
      n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
  },
  copyPosition: function(e) {
    var t = this.elements,
      n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
  },
  extractBasis: function(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
  },
  makeBasis: function(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
  },
  extractRotation: function(e) {
    var t = this.elements,
      n = e.elements,
      r = 1 / br.setFromMatrixColumn(e, 0).length(),
      i = 1 / br.setFromMatrixColumn(e, 1).length(),
      a = 1 / br.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
  },
  makeRotationFromEuler: function(e) {
    e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    var t = this.elements,
      n = e.x,
      r = e.y,
      i = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      s = Math.cos(r),
      l = Math.sin(r),
      c = Math.cos(i),
      u = Math.sin(i);
    if (e.order === "XYZ") {
      var h = a * c,
        f = a * u,
        d = o * c,
        p = o * u;
      t[0] = s * c, t[4] = -s * u, t[8] = l, t[1] = f + d * l, t[5] = h - p * l, t[9] = -o * s, t[2] = p - h * l, t[6] = d + f * l, t[10] = a * s
    } else if (e.order === "YXZ") {
      var v = s * c,
        m = s * u,
        g = l * c,
        x = l * u;
      t[0] = v + x * o, t[4] = g * o - m, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -o, t[2] = m * o - g, t[6] = x + v * o, t[10] = a * s
    } else if (e.order === "ZXY") {
      var v = s * c,
        m = s * u,
        g = l * c,
        x = l * u;
      t[0] = v - x * o, t[4] = -a * u, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * c, t[9] = x - v * o, t[2] = -a * l, t[6] = o, t[10] = a * s
    } else if (e.order === "ZYX") {
      var h = a * c,
        f = a * u,
        d = o * c,
        p = o * u;
      t[0] = s * c, t[4] = d * l - f, t[8] = h * l + p, t[1] = s * u, t[5] = p * l + h, t[9] = f * l - d, t[2] = -l, t[6] = o * s, t[10] = a * s
    } else if (e.order === "YZX") {
      var w = a * s,
        S = a * l,
        b = o * s,
        T = o * l;
      t[0] = s * c, t[4] = T - w * u, t[8] = b * u + S, t[1] = u, t[5] = a * c, t[9] = -o * c, t[2] = -l * c, t[6] = S * u + b, t[10] = w - T * u
    } else if (e.order === "XZY") {
      var w = a * s,
        S = a * l,
        b = o * s,
        T = o * l;
      t[0] = s * c, t[4] = -u, t[8] = l * c, t[1] = w * u + T, t[5] = a * c, t[9] = S * u - b, t[2] = b * u - S, t[6] = o * c, t[10] = T * u + w
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
  },
  makeRotationFromQuaternion: function(e) {
    return this.compose(Dd, e, Od)
  },
  lookAt: function(e, t, n) {
    var r = this.elements;
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), An.crossVectors(n, Pt), An.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), An.crossVectors(n, Pt)), An.normalize(), Ta.crossVectors(Pt, An), r[0] = An.x, r[4] = Ta.x, r[8] = Pt.x, r[1] = An.y, r[5] = Ta.y, r[9] = Pt.y, r[2] = An.z, r[6] = Ta.z, r[10] = Pt.z, this
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this)
  },
  multiplyMatrices: function(e, t) {
    var n = e.elements,
      r = t.elements,
      i = this.elements,
      a = n[0],
      o = n[4],
      s = n[8],
      l = n[12],
      c = n[1],
      u = n[5],
      h = n[9],
      f = n[13],
      d = n[2],
      p = n[6],
      v = n[10],
      m = n[14],
      g = n[3],
      x = n[7],
      w = n[11],
      S = n[15],
      b = r[0],
      T = r[4],
      D = r[8],
      N = r[12],
      C = r[1],
      B = r[5],
      I = r[9],
      F = r[13],
      U = r[2],
      z = r[6],
      O = r[10],
      k = r[14],
      j = r[3],
      J = r[7],
      W = r[11],
      Z = r[15];
    return i[0] = a * b + o * C + s * U + l * j, i[4] = a * T + o * B + s * z + l * J, i[8] = a * D + o * I + s * O + l * W, i[12] = a * N + o * F + s * k + l * Z, i[1] = c * b + u * C + h * U + f * j, i[5] = c * T + u * B + h * z + f * J, i[9] = c * D + u * I + h * O + f * W, i[13] = c * N + u * F + h * k + f * Z, i[2] = d * b + p * C + v * U + m * j, i[6] = d * T + p * B + v * z + m * J, i[10] = d * D + p * I + v * O + m * W, i[14] = d * N + p * F + v * k + m * Z, i[3] = g * b + x * C + w * U + S * j, i[7] = g * T + x * B + w * z + S * J, i[11] = g * D + x * I + w * O + S * W, i[15] = g * N + x * F + w * k + S * Z, this
  },
  multiplyScalar: function(e) {
    var t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
  },
  determinant: function() {
    var e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      i = e[12],
      a = e[1],
      o = e[5],
      s = e[9],
      l = e[13],
      c = e[2],
      u = e[6],
      h = e[10],
      f = e[14],
      d = e[3],
      p = e[7],
      v = e[11],
      m = e[15];
    return d * (+i * s * u - r * l * u - i * o * h + n * l * h + r * o * f - n * s * f) + p * (+t * s * f - t * l * h + i * a * h - r * a * f + r * l * c - i * s * c) + v * (+t * l * u - t * o * f - i * a * u + n * a * f + i * o * c - n * l * c) + m * (-r * o * c - t * s * u + t * o * h + r * a * u - n * a * h + n * s * c)
  },
  transpose: function() {
    var e = this.elements,
      t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
  },
  setPosition: function(e, t, n) {
    var r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this
  },
  getInverse: function(e, t) {
    t !== void 0 && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
    var n = this.elements,
      r = e.elements,
      i = r[0],
      a = r[1],
      o = r[2],
      s = r[3],
      l = r[4],
      c = r[5],
      u = r[6],
      h = r[7],
      f = r[8],
      d = r[9],
      p = r[10],
      v = r[11],
      m = r[12],
      g = r[13],
      x = r[14],
      w = r[15],
      S = d * x * h - g * p * h + g * u * v - c * x * v - d * u * w + c * p * w,
      b = m * p * h - f * x * h - m * u * v + l * x * v + f * u * w - l * p * w,
      T = f * g * h - m * d * h + m * c * v - l * g * v - f * c * w + l * d * w,
      D = m * d * u - f * g * u - m * c * p + l * g * p + f * c * x - l * d * x,
      N = i * S + a * b + o * T + s * D;
    if (N === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var C = 1 / N;
    return n[0] = S * C, n[1] = (g * p * s - d * x * s - g * o * v + a * x * v + d * o * w - a * p * w) * C, n[2] = (c * x * s - g * u * s + g * o * h - a * x * h - c * o * w + a * u * w) * C, n[3] = (d * u * s - c * p * s - d * o * h + a * p * h + c * o * v - a * u * v) * C, n[4] = b * C, n[5] = (f * x * s - m * p * s + m * o * v - i * x * v - f * o * w + i * p * w) * C, n[6] = (m * u * s - l * x * s - m * o * h + i * x * h + l * o * w - i * u * w) * C, n[7] = (l * p * s - f * u * s + f * o * h - i * p * h - l * o * v + i * u * v) * C, n[8] = T * C, n[9] = (m * d * s - f * g * s - m * a * v + i * g * v + f * a * w - i * d * w) * C, n[10] = (l * g * s - m * c * s + m * a * h - i * g * h - l * a * w + i * c * w) * C, n[11] = (f * c * s - l * d * s - f * a * h + i * d * h + l * a * v - i * c * v) * C, n[12] = D * C, n[13] = (f * g * o - m * d * o + m * a * p - i * g * p - f * a * x + i * d * x) * C, n[14] = (m * c * o - l * g * o - m * a * u + i * g * u + l * a * x - i * c * x) * C, n[15] = (l * d * o - f * c * o + f * a * u - i * d * u - l * a * p + i * c * p) * C, this
  },
  scale: function(e) {
    var t = this.elements,
      n = e.x,
      r = e.y,
      i = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this
  },
  getMaxScaleOnAxis: function() {
    var e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r))
  },
  makeTranslation: function(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
  },
  makeRotationX: function(e) {
    var t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
  },
  makeRotationY: function(e) {
    var t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
  },
  makeRotationZ: function(e) {
    var t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
  },
  makeRotationAxis: function(e, t) {
    var n = Math.cos(t),
      r = Math.sin(t),
      i = 1 - n,
      a = e.x,
      o = e.y,
      s = e.z,
      l = i * a,
      c = i * o;
    return this.set(l * a + n, l * o - r * s, l * s + r * o, 0, l * o + r * s, c * o + n, c * s - r * a, 0, l * s - r * o, c * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this
  },
  makeScale: function(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
  },
  makeShear: function(e, t, n) {
    return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this
  },
  compose: function(e, t, n) {
    var r = this.elements,
      i = t._x,
      a = t._y,
      o = t._z,
      s = t._w,
      l = i + i,
      c = a + a,
      u = o + o,
      h = i * l,
      f = i * c,
      d = i * u,
      p = a * c,
      v = a * u,
      m = o * u,
      g = s * l,
      x = s * c,
      w = s * u,
      S = n.x,
      b = n.y,
      T = n.z;
    return r[0] = (1 - (p + m)) * S, r[1] = (f + w) * S, r[2] = (d - x) * S, r[3] = 0, r[4] = (f - w) * b, r[5] = (1 - (h + m)) * b, r[6] = (v + g) * b, r[7] = 0, r[8] = (d + x) * T, r[9] = (v - g) * T, r[10] = (1 - (h + p)) * T, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this
  },
  decompose: function(e, t, n) {
    var r = this.elements,
      i = br.set(r[0], r[1], r[2]).length(),
      a = br.set(r[4], r[5], r[6]).length(),
      o = br.set(r[8], r[9], r[10]).length(),
      s = this.determinant();
    s < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], Xt.copy(this);
    var l = 1 / i,
      c = 1 / a,
      u = 1 / o;
    return Xt.elements[0] *= l, Xt.elements[1] *= l, Xt.elements[2] *= l, Xt.elements[4] *= c, Xt.elements[5] *= c, Xt.elements[6] *= c, Xt.elements[8] *= u, Xt.elements[9] *= u, Xt.elements[10] *= u, t.setFromRotationMatrix(Xt), n.x = i, n.y = a, n.z = o, this
  },
  makePerspective: function(e, t, n, r, i, a) {
    a === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    var o = this.elements,
      s = 2 * i / (t - e),
      l = 2 * i / (n - r),
      c = (t + e) / (t - e),
      u = (n + r) / (n - r),
      h = -(a + i) / (a - i),
      f = -2 * a * i / (a - i);
    return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
  },
  makeOrthographic: function(e, t, n, r, i, a) {
    var o = this.elements,
      s = 1 / (t - e),
      l = 1 / (n - r),
      c = 1 / (a - i),
      u = (t + e) * s,
      h = (n + r) * l,
      f = (a + i) * c;
    return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
  },
  equals: function(e) {
    for (var t = this.elements, n = e.elements, r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    var n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
  }
});
var gc = new De,
  yc = new yt;

function pi(e, t, n, r) {
  this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = r || pi.DefaultOrder
}
pi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
pi.DefaultOrder = "XYZ";
Object.defineProperties(pi.prototype, {
  x: {
    get: function() {
      return this._x
    },
    set: function(e) {
      this._x = e, this._onChangeCallback()
    }
  },
  y: {
    get: function() {
      return this._y
    },
    set: function(e) {
      this._y = e, this._onChangeCallback()
    }
  },
  z: {
    get: function() {
      return this._z
    },
    set: function(e) {
      this._z = e, this._onChangeCallback()
    }
  },
  order: {
    get: function() {
      return this._order
    },
    set: function(e) {
      this._order = e, this._onChangeCallback()
    }
  }
});
Object.assign(pi.prototype, {
  isEuler: !0,
  set: function(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._order = r || this._order, this._onChangeCallback(), this
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._order)
  },
  copy: function(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
  },
  setFromRotationMatrix: function(e, t, n) {
    var r = Te.clamp,
      i = e.elements,
      a = i[0],
      o = i[4],
      s = i[8],
      l = i[1],
      c = i[5],
      u = i[9],
      h = i[2],
      f = i[6],
      d = i[10];
    return t = t || this._order, t === "XYZ" ? (this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(f, c), this._z = 0)) : t === "YXZ" ? (this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, a), this._z = 0)) : t === "ZXY" ? (this._x = Math.asin(r(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, a))) : t === "ZYX" ? (this._y = Math.asin(-r(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, c))) : t === "YZX" ? (this._z = Math.asin(r(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : t === "XZY" ? (this._z = Math.asin(-r(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, n !== !1 && this._onChangeCallback(), this
  },
  setFromQuaternion: function(e, t, n) {
    return gc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(gc, t, n)
  },
  setFromVector3: function(e, t) {
    return this.set(e.x, e.y, e.z, t || this._order)
  },
  reorder: function(e) {
    return yc.setFromEuler(this), this.setFromQuaternion(yc, e)
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
  },
  fromArray: function(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
  },
  toVector3: function(e) {
    return e ? e.set(this._x, this._y, this._z) : new M(this._x, this._y, this._z)
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this
  },
  _onChangeCallback: function() {}
});

function Gl() {
  this.mask = 1
}
Object.assign(Gl.prototype, {
  set: function(e) {
    this.mask = 1 << e | 0
  },
  enable: function(e) {
    this.mask |= 1 << e | 0
  },
  enableAll: function() {
    this.mask = -1
  },
  toggle: function(e) {
    this.mask ^= 1 << e | 0
  },
  disable: function(e) {
    this.mask &= ~(1 << e | 0)
  },
  disableAll: function() {
    this.mask = 0
  },
  test: function(e) {
    return (this.mask & e.mask) !== 0
  }
});
var Id = 0,
  xc = new M,
  Mr = new yt,
  pn = new De,
  Aa = new M,
  _i = new M,
  Nd = new M,
  Fd = new yt,
  _c = new M(1, 0, 0),
  bc = new M(0, 1, 0),
  Mc = new M(0, 0, 1),
  Bd = {
    type: "added"
  },
  Ud = {
    type: "removed"
  };

function Q() {
  Object.defineProperty(this, "id", {
    value: Id++
  }), this.uuid = Te.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Q.DefaultUp.clone();
  var e = new M,
    t = new pi,
    n = new yt,
    r = new M(1, 1, 1);

  function i() {
    n.setFromEuler(t, !1)
  }

  function a() {
    t.setFromQuaternion(n, void 0, !1)
  }
  t._onChange(i), n._onChange(a), Object.defineProperties(this, {
    position: {
      configurable: !0,
      enumerable: !0,
      value: e
    },
    rotation: {
      configurable: !0,
      enumerable: !0,
      value: t
    },
    quaternion: {
      configurable: !0,
      enumerable: !0,
      value: n
    },
    scale: {
      configurable: !0,
      enumerable: !0,
      value: r
    },
    modelViewMatrix: {
      value: new De
    },
    normalMatrix: {
      value: new gt
    }
  }), this.matrix = new De, this.matrixWorld = new De, this.matrixAutoUpdate = Q.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Gl, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
}
Q.DefaultUp = new M(0, 1, 0);
Q.DefaultMatrixAutoUpdate = !0;
Q.prototype = Object.assign(Object.create(Qt.prototype), {
  constructor: Q,
  isObject3D: !0,
  onBeforeRender: function() {},
  onAfterRender: function() {},
  applyMatrix4: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
  },
  applyQuaternion: function(e) {
    return this.quaternion.premultiply(e), this
  },
  setRotationFromAxisAngle: function(e, t) {
    this.quaternion.setFromAxisAngle(e, t)
  },
  setRotationFromEuler: function(e) {
    this.quaternion.setFromEuler(e, !0)
  },
  setRotationFromMatrix: function(e) {
    this.quaternion.setFromRotationMatrix(e)
  },
  setRotationFromQuaternion: function(e) {
    this.quaternion.copy(e)
  },
  rotateOnAxis: function(e, t) {
    return Mr.setFromAxisAngle(e, t), this.quaternion.multiply(Mr), this
  },
  rotateOnWorldAxis: function(e, t) {
    return Mr.setFromAxisAngle(e, t), this.quaternion.premultiply(Mr), this
  },
  rotateX: function(e) {
    return this.rotateOnAxis(_c, e)
  },
  rotateY: function(e) {
    return this.rotateOnAxis(bc, e)
  },
  rotateZ: function(e) {
    return this.rotateOnAxis(Mc, e)
  },
  translateOnAxis: function(e, t) {
    return xc.copy(e).applyQuaternion(this.quaternion), this.position.add(xc.multiplyScalar(t)), this
  },
  translateX: function(e) {
    return this.translateOnAxis(_c, e)
  },
  translateY: function(e) {
    return this.translateOnAxis(bc, e)
  },
  translateZ: function(e) {
    return this.translateOnAxis(Mc, e)
  },
  localToWorld: function(e) {
    return e.applyMatrix4(this.matrixWorld)
  },
  worldToLocal: function(e) {
    return e.applyMatrix4(pn.getInverse(this.matrixWorld))
  },
  lookAt: function(e, t, n) {
    e.isVector3 ? Aa.copy(e) : Aa.set(e, t, n);
    var r = this.parent;
    this.updateWorldMatrix(!0, !1), _i.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pn.lookAt(_i, Aa, this.up) : pn.lookAt(Aa, _i, this.up), this.quaternion.setFromRotationMatrix(pn), r && (pn.extractRotation(r.matrixWorld), Mr.setFromRotationMatrix(pn), this.quaternion.premultiply(Mr.inverse()))
  },
  add: function(e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Bd)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
  },
  remove: function(e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
      return this
    }
    var n = this.children.indexOf(e);
    return n !== -1 && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent(Ud)), this
  },
  attach: function(e) {
    return this.updateWorldMatrix(!0, !1), pn.getInverse(this.matrixWorld), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), pn.multiply(e.parent.matrixWorld)), e.applyMatrix4(pn), e.updateWorldMatrix(!1, !1), this.add(e), this
  },
  getObjectById: function(e) {
    return this.getObjectByProperty("id", e)
  },
  getObjectByName: function(e) {
    return this.getObjectByProperty("name", e)
  },
  getObjectByProperty: function(e, t) {
    if (this[e] === t) return this;
    for (var n = 0, r = this.children.length; n < r; n++) {
      var i = this.children[n],
        a = i.getObjectByProperty(e, t);
      if (a !== void 0) return a
    }
  },
  getWorldPosition: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new M), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
  },
  getWorldQuaternion: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new yt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(_i, e, Nd), e
  },
  getWorldScale: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new M), this.updateMatrixWorld(!0), this.matrixWorld.decompose(_i, Fd, e), e
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new M), this.updateMatrixWorld(!0);
    var t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize()
  },
  raycast: function() {},
  traverse: function(e) {
    e(this);
    for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].traverse(e)
  },
  traverseVisible: function(e) {
    if (this.visible !== !1) {
      e(this);
      for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e)
    }
  },
  traverseAncestors: function(e) {
    var t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e))
  },
  updateMatrix: function() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
  },
  updateMatrixWorld: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e)
  },
  updateWorldMatrix: function(e, t) {
    var n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0)
      for (var r = this.children, i = 0, a = r.length; i < a; i++) r[i].updateWorldMatrix(!1, !0)
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string",
      n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    var r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON());

    function i(m, g) {
      return m[g.uuid] === void 0 && (m[g.uuid] = g.toJSON(e)), g.uuid
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = i(e.geometries, this.geometry);
      var a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        var o = a.shapes;
        if (Array.isArray(o))
          for (var s = 0, l = o.length; s < l; s++) {
            var c = o[s];
            i(e.shapes, c)
          } else i(e.shapes, o)
      }
    }
    if (this.material !== void 0)
      if (Array.isArray(this.material)) {
        for (var u = [], s = 0, l = this.material.length; s < l; s++) u.push(i(e.materials, this.material[s]));
        r.material = u
      } else r.material = i(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (var s = 0; s < this.children.length; s++) r.children.push(this.children[s].toJSON(e).object)
    }
    if (t) {
      var h = v(e.geometries),
        f = v(e.materials),
        d = v(e.textures),
        p = v(e.images),
        o = v(e.shapes);
      h.length > 0 && (n.geometries = h), f.length > 0 && (n.materials = f), d.length > 0 && (n.textures = d), p.length > 0 && (n.images = p), o.length > 0 && (n.shapes = o)
    }
    return n.object = r, n;

    function v(m) {
      var g = [];
      for (var x in m) {
        var w = m[x];
        delete w.metadata, g.push(w)
      }
      return g
    }
  },
  clone: function(e) {
    return new this.constructor().copy(this, e)
  },
  copy: function(e, t) {
    if (t === void 0 && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (var n = 0; n < e.children.length; n++) {
        var r = e.children[n];
        this.add(r.clone())
      }
    return this
  }
});

function _n() {
  Q.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
    detail: this
  }))
}
_n.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: _n,
  isScene: !0,
  copy: function(e, t) {
    return Q.prototype.copy.call(this, e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return this.background !== null && (t.object.background = this.background.toJSON(e)), this.environment !== null && (t.object.environment = this.environment.toJSON(e)), this.fog !== null && (t.object.fog = this.fog.toJSON()), t
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
});
var vn = [new M, new M, new M, new M, new M, new M, new M, new M],
  bi = new M,
  is = new dn,
  wr = new M,
  Sr = new M,
  Er = new M,
  Ln = new M,
  Rn = new M,
  Jn = new M,
  Mi = new M,
  La = new M,
  Ra = new M,
  $n = new M;

function dn(e, t) {
  this.min = e !== void 0 ? e : new M(1 / 0, 1 / 0, 1 / 0), this.max = t !== void 0 ? t : new M(-1 / 0, -1 / 0, -1 / 0)
}
Object.assign(dn.prototype, {
  isBox3: !0,
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this
  },
  setFromArray: function(e) {
    for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.length; s < l; s += 3) {
      var c = e[s],
        u = e[s + 1],
        h = e[s + 2];
      c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > o && (o = h)
    }
    return this.min.set(t, n, r), this.max.set(i, a, o), this
  },
  setFromBufferAttribute: function(e) {
    for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.count; s < l; s++) {
      var c = e.getX(s),
        u = e.getY(s),
        h = e.getZ(s);
      c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > o && (o = h)
    }
    return this.min.set(t, n, r), this.max.set(i, a, o), this
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this
  },
  setFromCenterAndSize: function(e, t) {
    var n = bi.copy(t).multiplyScalar(.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
  },
  setFromObject: function(e) {
    return this.makeEmpty(), this.expandByObject(e)
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new M), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new M), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this
  },
  expandByObject: function(e) {
    e.updateWorldMatrix(!1, !1);
    var t = e.geometry;
    t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), is.copy(t.boundingBox), is.applyMatrix4(e.matrixWorld), this.union(is));
    for (var n = e.children, r = 0, i = n.length; r < i; r++) this.expandByObject(n[r]);
    return this
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new M), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
  },
  intersectsSphere: function(e) {
    return this.clampPoint(e.center, bi), bi.distanceToSquared(e.center) <= e.radius * e.radius
  },
  intersectsPlane: function(e) {
    var t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
  },
  intersectsTriangle: function(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Mi), La.subVectors(this.max, Mi), wr.subVectors(e.a, Mi), Sr.subVectors(e.b, Mi), Er.subVectors(e.c, Mi), Ln.subVectors(Sr, wr), Rn.subVectors(Er, Sr), Jn.subVectors(wr, Er);
    var t = [0, -Ln.z, Ln.y, 0, -Rn.z, Rn.y, 0, -Jn.z, Jn.y, Ln.z, 0, -Ln.x, Rn.z, 0, -Rn.x, Jn.z, 0, -Jn.x, -Ln.y, Ln.x, 0, -Rn.y, Rn.x, 0, -Jn.y, Jn.x, 0];
    return !as(t, wr, Sr, Er, La) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !as(t, wr, Sr, Er, La)) ? !1 : (Ra.crossVectors(Ln, Rn), t = [Ra.x, Ra.y, Ra.z], as(t, wr, Sr, Er, La))
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new M), t.copy(e).clamp(this.min, this.max)
  },
  distanceToPoint: function(e) {
    var t = bi.copy(e).clamp(this.min, this.max);
    return t.sub(e).length()
  },
  getBoundingSphere: function(e) {
    return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = this.getSize(bi).length() * .5, e
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this
  },
  applyMatrix4: function(e) {
    return this.isEmpty() ? this : (vn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), vn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), vn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), vn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), vn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), vn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), vn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), vn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(vn), this)
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max)
  }
});

function as(e, t, n, r, i) {
  var a, o;
  for (a = 0, o = e.length - 3; a <= o; a += 3) {
    $n.fromArray(e, a);
    var s = i.x * Math.abs($n.x) + i.y * Math.abs($n.y) + i.z * Math.abs($n.z),
      l = t.dot($n),
      c = n.dot($n),
      u = r.dot($n);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > s) return !1
  }
  return !0
}
var zd = new dn;

function Yn(e, t) {
  this.center = e !== void 0 ? e : new M, this.radius = t !== void 0 ? t : 0
}
Object.assign(Yn.prototype, {
  set: function(e, t) {
    return this.center.copy(e), this.radius = t, this
  },
  setFromPoints: function(e, t) {
    var n = this.center;
    t !== void 0 ? n.copy(t) : zd.setFromPoints(e).getCenter(n);
    for (var r = 0, i = 0, a = e.length; i < a; i++) r = Math.max(r, n.distanceToSquared(e[i]));
    return this.radius = Math.sqrt(r), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.center.copy(e.center), this.radius = e.radius, this
  },
  empty: function() {
    return this.radius <= 0
  },
  containsPoint: function(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius
  },
  distanceToPoint: function(e) {
    return e.distanceTo(this.center) - this.radius
  },
  intersectsSphere: function(e) {
    var t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t
  },
  intersectsBox: function(e) {
    return e.intersectsSphere(this)
  },
  intersectsPlane: function(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius
  },
  clampPoint: function(e, t) {
    var n = this.center.distanceToSquared(e);
    return t === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new M), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
  },
  getBoundingBox: function(e) {
    return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new dn), e.set(this.center, this.center), e.expandByScalar(this.radius), e
  },
  applyMatrix4: function(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
  },
  translate: function(e) {
    return this.center.add(e), this
  },
  equals: function(e) {
    return e.center.equals(this.center) && e.radius === this.radius
  }
});
var mn = new M,
  os = new M,
  Ca = new M,
  Cn = new M,
  ss = new M,
  Pa = new M,
  ls = new M;

function vi(e, t) {
  this.origin = e !== void 0 ? e : new M, this.direction = t !== void 0 ? t : new M(0, 0, -1)
}
Object.assign(vi.prototype, {
  set: function(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Ray: .at() target is now required"), t = new M), t.copy(this.direction).multiplyScalar(e).add(this.origin)
  },
  lookAt: function(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this
  },
  recast: function(e) {
    return this.origin.copy(this.at(e, mn)), this
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new M), t.subVectors(e, this.origin);
    var n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
  },
  distanceToPoint: function(e) {
    return Math.sqrt(this.distanceSqToPoint(e))
  },
  distanceSqToPoint: function(e) {
    var t = mn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (mn.copy(this.direction).multiplyScalar(t).add(this.origin), mn.distanceToSquared(e))
  },
  distanceSqToSegment: function(e, t, n, r) {
    os.copy(e).add(t).multiplyScalar(.5), Ca.copy(t).sub(e).normalize(), Cn.copy(this.origin).sub(os);
    var i = e.distanceTo(t) * .5,
      a = -this.direction.dot(Ca),
      o = Cn.dot(this.direction),
      s = -Cn.dot(Ca),
      l = Cn.lengthSq(),
      c = Math.abs(1 - a * a),
      u, h, f, d;
    if (c > 0)
      if (u = a * s - o, h = a * o - s, d = i * c, u >= 0)
        if (h >= -d)
          if (h <= d) {
            var p = 1 / c;
            u *= p, h *= p, f = u * (u + a * h + 2 * o) + h * (a * u + h + 2 * s) + l
          } else h = i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + l;
    else h = -i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + l;
    else h <= -d ? (u = Math.max(0, -(-a * i + o)), h = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + h * (h + 2 * s) + l) : h <= d ? (u = 0, h = Math.min(Math.max(-i, -s), i), f = h * (h + 2 * s) + l) : (u = Math.max(0, -(a * i + o)), h = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + h * (h + 2 * s) + l);
    else h = a > 0 ? -i : i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + l;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), r && r.copy(Ca).multiplyScalar(h).add(os), f
  },
  intersectSphere: function(e, t) {
    mn.subVectors(e.center, this.origin);
    var n = mn.dot(this.direction),
      r = mn.dot(mn) - n * n,
      i = e.radius * e.radius;
    if (r > i) return null;
    var a = Math.sqrt(i - r),
      o = n - a,
      s = n + a;
    return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t)
  },
  intersectsSphere: function(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius
  },
  distanceToPlane: function(e) {
    var t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    var n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null
  },
  intersectPlane: function(e, t) {
    var n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t)
  },
  intersectsPlane: function(e) {
    var t = e.distanceToPoint(this.origin);
    if (t === 0) return !0;
    var n = e.normal.dot(this.direction);
    return n * t < 0
  },
  intersectBox: function(e, t) {
    var n, r, i, a, o, s, l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      u = 1 / this.direction.z,
      h = this.origin;
    return l >= 0 ? (n = (e.min.x - h.x) * l, r = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l), c >= 0 ? (i = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c) : (i = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c), n > a || i > r || ((i > n || n !== n) && (n = i), (a < r || r !== r) && (r = a), u >= 0 ? (o = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t)
  },
  intersectsBox: function(e) {
    return this.intersectBox(e, mn) !== null
  },
  intersectTriangle: function(e, t, n, r, i) {
    ss.subVectors(t, e), Pa.subVectors(n, e), ls.crossVectors(ss, Pa);
    var a = this.direction.dot(ls),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1
    } else if (a < 0) o = -1, a = -a;
    else return null;
    Cn.subVectors(this.origin, e);
    var s = o * this.direction.dot(Pa.crossVectors(Cn, Pa));
    if (s < 0) return null;
    var l = o * this.direction.dot(ss.cross(Cn));
    if (l < 0 || s + l > a) return null;
    var c = -o * Cn.dot(ls);
    return c < 0 ? null : this.at(c / a, i)
  },
  applyMatrix4: function(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
  },
  equals: function(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction)
  }
});
var cs = new M,
  Gd = new M,
  Hd = new gt;

function nn(e, t) {
  this.normal = e !== void 0 ? e : new M(1, 0, 0), this.constant = t !== void 0 ? t : 0
}
Object.assign(nn.prototype, {
  isPlane: !0,
  set: function(e, t) {
    return this.normal.copy(e), this.constant = t, this
  },
  setComponents: function(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this
  },
  setFromNormalAndCoplanarPoint: function(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this
  },
  setFromCoplanarPoints: function(e, t, n) {
    var r = cs.subVectors(n, t).cross(Gd.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this
  },
  normalize: function() {
    var e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this
  },
  negate: function() {
    return this.constant *= -1, this.normal.negate(), this
  },
  distanceToPoint: function(e) {
    return this.normal.dot(e) + this.constant
  },
  distanceToSphere: function(e) {
    return this.distanceToPoint(e.center) - e.radius
  },
  projectPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new M), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
  },
  intersectLine: function(e, t) {
    t === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new M);
    var n = e.delta(cs),
      r = this.normal.dot(n);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : void 0;
    var i = -(e.start.dot(this.normal) + this.constant) / r;
    if (!(i < 0 || i > 1)) return t.copy(n).multiplyScalar(i).add(e.start)
  },
  intersectsLine: function(e) {
    var t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0
  },
  intersectsBox: function(e) {
    return e.intersectsPlane(this)
  },
  intersectsSphere: function(e) {
    return e.intersectsPlane(this)
  },
  coplanarPoint: function(e) {
    return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new M), e.copy(this.normal).multiplyScalar(-this.constant)
  },
  applyMatrix4: function(e, t) {
    var n = t || Hd.getNormalMatrix(e),
      r = this.coplanarPoint(cs).applyMatrix4(e),
      i = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(i), this
  },
  translate: function(e) {
    return this.constant -= e.dot(this.normal), this
  },
  equals: function(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant
  }
});
var Zt = new M,
  yn = new M,
  us = new M,
  gn = new M,
  Tr = new M,
  Ar = new M,
  wc = new M,
  hs = new M,
  fs = new M,
  ds = new M;

function pt(e, t, n) {
  this.a = e !== void 0 ? e : new M, this.b = t !== void 0 ? t : new M, this.c = n !== void 0 ? n : new M
}
Object.assign(pt, {
  getNormal: function(e, t, n, r) {
    r === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new M), r.subVectors(n, t), Zt.subVectors(e, t), r.cross(Zt);
    var i = r.lengthSq();
    return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0)
  },
  getBarycoord: function(e, t, n, r, i) {
    Zt.subVectors(r, t), yn.subVectors(n, t), us.subVectors(e, t);
    var a = Zt.dot(Zt),
      o = Zt.dot(yn),
      s = Zt.dot(us),
      l = yn.dot(yn),
      c = yn.dot(us),
      u = a * l - o * o;
    if (i === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), i = new M), u === 0) return i.set(-2, -1, -1);
    var h = 1 / u,
      f = (l * s - o * c) * h,
      d = (a * c - o * s) * h;
    return i.set(1 - f - d, d, f)
  },
  containsPoint: function(e, t, n, r) {
    return pt.getBarycoord(e, t, n, r, gn), gn.x >= 0 && gn.y >= 0 && gn.x + gn.y <= 1
  },
  getUV: function(e, t, n, r, i, a, o, s) {
    return this.getBarycoord(e, t, n, r, gn), s.set(0, 0), s.addScaledVector(i, gn.x), s.addScaledVector(a, gn.y), s.addScaledVector(o, gn.z), s
  },
  isFrontFacing: function(e, t, n, r) {
    return Zt.subVectors(n, t), yn.subVectors(e, t), Zt.cross(yn).dot(r) < 0
  }
});
Object.assign(pt.prototype, {
  set: function(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
  },
  setFromPointsAndIndices: function(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
  },
  getArea: function() {
    return Zt.subVectors(this.c, this.b), yn.subVectors(this.a, this.b), Zt.cross(yn).length() * .5
  },
  getMidpoint: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new M), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
  },
  getNormal: function(e) {
    return pt.getNormal(this.a, this.b, this.c, e)
  },
  getPlane: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new nn), e.setFromCoplanarPoints(this.a, this.b, this.c)
  },
  getBarycoord: function(e, t) {
    return pt.getBarycoord(e, this.a, this.b, this.c, t)
  },
  getUV: function(e, t, n, r, i) {
    return pt.getUV(e, this.a, this.b, this.c, t, n, r, i)
  },
  containsPoint: function(e) {
    return pt.containsPoint(e, this.a, this.b, this.c)
  },
  isFrontFacing: function(e) {
    return pt.isFrontFacing(this.a, this.b, this.c, e)
  },
  intersectsBox: function(e) {
    return e.intersectsTriangle(this)
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new M);
    var n = this.a,
      r = this.b,
      i = this.c,
      a, o;
    Tr.subVectors(r, n), Ar.subVectors(i, n), hs.subVectors(e, n);
    var s = Tr.dot(hs),
      l = Ar.dot(hs);
    if (s <= 0 && l <= 0) return t.copy(n);
    fs.subVectors(e, r);
    var c = Tr.dot(fs),
      u = Ar.dot(fs);
    if (c >= 0 && u <= c) return t.copy(r);
    var h = s * u - c * l;
    if (h <= 0 && s >= 0 && c <= 0) return a = s / (s - c), t.copy(n).addScaledVector(Tr, a);
    ds.subVectors(e, i);
    var f = Tr.dot(ds),
      d = Ar.dot(ds);
    if (d >= 0 && f <= d) return t.copy(i);
    var p = f * l - s * d;
    if (p <= 0 && l >= 0 && d <= 0) return o = l / (l - d), t.copy(n).addScaledVector(Ar, o);
    var v = c * d - f * u;
    if (v <= 0 && u - c >= 0 && f - d >= 0) return wc.subVectors(i, r), o = (u - c) / (u - c + (f - d)), t.copy(r).addScaledVector(wc, o);
    var m = 1 / (v + p + h);
    return a = p * m, o = h * m, t.copy(n).addScaledVector(Tr, a).addScaledVector(Ar, o)
  },
  equals: function(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
  }
});
var Xu = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
  qt = {
    h: 0,
    s: 0,
    l: 0
  },
  Da = {
    h: 0,
    s: 0,
    l: 0
  };

function oe(e, t, n) {
  return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
}

function ps(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e
}

function vs(e) {
  return e < .04045 ? e * .0773993808 : Math.pow(e * .9478672986 + .0521327014, 2.4)
}

function ms(e) {
  return e < .0031308 ? e * 12.92 : 1.055 * Math.pow(e, .41666) - .055
}
Object.assign(oe.prototype, {
  isColor: !0,
  r: 1,
  g: 1,
  b: 1,
  set: function(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this
  },
  setScalar: function(e) {
    return this.r = e, this.g = e, this.b = e, this
  },
  setHex: function(e) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this
  },
  setRGB: function(e, t, n) {
    return this.r = e, this.g = t, this.b = n, this
  },
  setHSL: function(e, t, n) {
    if (e = Te.euclideanModulo(e, 1), t = Te.clamp(t, 0, 1), n = Te.clamp(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      var r = n <= .5 ? n * (1 + t) : n + t - n * t,
        i = 2 * n - r;
      this.r = ps(i, r, e + 1 / 3), this.g = ps(i, r, e), this.b = ps(i, r, e - 1 / 3)
    }
    return this
  },
  setStyle: function(e) {
    function t(h) {
      h !== void 0 && parseFloat(h) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
    }
    var n;
    if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
      var r, i = n[1],
        a = n[2];
      switch (i) {
        case "rgb":
        case "rgba":
          if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, t(r[5]), this;
          if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, t(r[5]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
            var o = parseFloat(r[1]) / 360,
              s = parseInt(r[2], 10) / 100,
              l = parseInt(r[3], 10) / 100;
            return t(r[5]), this.setHSL(o, s, l)
          }
          break
      }
    } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
      var c = n[1],
        u = c.length;
      if (u === 3) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
      if (u === 6) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
    }
    return e && e.length > 0 ? this.setColorName(e) : this
  },
  setColorName: function(e) {
    var t = Xu[e];
    return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this
  },
  clone: function() {
    return new this.constructor(this.r, this.g, this.b)
  },
  copy: function(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this
  },
  copyGammaToLinear: function(e, t) {
    return t === void 0 && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
  },
  copyLinearToGamma: function(e, t) {
    t === void 0 && (t = 2);
    var n = t > 0 ? 1 / t : 1;
    return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
  },
  convertGammaToLinear: function(e) {
    return this.copyGammaToLinear(this, e), this
  },
  convertLinearToGamma: function(e) {
    return this.copyLinearToGamma(this, e), this
  },
  copySRGBToLinear: function(e) {
    return this.r = vs(e.r), this.g = vs(e.g), this.b = vs(e.b), this
  },
  copyLinearToSRGB: function(e) {
    return this.r = ms(e.r), this.g = ms(e.g), this.b = ms(e.b), this
  },
  convertSRGBToLinear: function() {
    return this.copySRGBToLinear(this), this
  },
  convertLinearToSRGB: function() {
    return this.copyLinearToSRGB(this), this
  },
  getHex: function() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0
  },
  getHexString: function() {
    return ("000000" + this.getHex().toString(16)).slice(-6)
  },
  getHSL: function(e) {
    e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
      h: 0,
      s: 0,
      l: 0
    });
    var t = this.r,
      n = this.g,
      r = this.b,
      i = Math.max(t, n, r),
      a = Math.min(t, n, r),
      o, s, l = (a + i) / 2;
    if (a === i) o = 0, s = 0;
    else {
      var c = i - a;
      switch (s = l <= .5 ? c / (i + a) : c / (2 - i - a), i) {
        case t:
          o = (n - r) / c + (n < r ? 6 : 0);
          break;
        case n:
          o = (r - t) / c + 2;
          break;
        case r:
          o = (t - n) / c + 4;
          break
      }
      o /= 6
    }
    return e.h = o, e.s = s, e.l = l, e
  },
  getStyle: function() {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")"
  },
  offsetHSL: function(e, t, n) {
    return this.getHSL(qt), qt.h += e, qt.s += t, qt.l += n, this.setHSL(qt.h, qt.s, qt.l), this
  },
  add: function(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this
  },
  addColors: function(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
  },
  addScalar: function(e) {
    return this.r += e, this.g += e, this.b += e, this
  },
  sub: function(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
  },
  multiply: function(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
  },
  multiplyScalar: function(e) {
    return this.r *= e, this.g *= e, this.b *= e, this
  },
  lerp: function(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
  },
  lerpHSL: function(e, t) {
    this.getHSL(qt), e.getHSL(Da);
    var n = Te.lerp(qt.h, Da.h, t),
      r = Te.lerp(qt.s, Da.s, t),
      i = Te.lerp(qt.l, Da.l, t);
    return this.setHSL(n, r, i), this
  },
  equals: function(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
  },
  toJSON: function() {
    return this.getHex()
  }
});
oe.NAMES = Xu;

function vo(e, t, n, r, i, a) {
  this.a = e, this.b = t, this.c = n, this.normal = r && r.isVector3 ? r : new M, this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new oe, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = a !== void 0 ? a : 0
}
Object.assign(vo.prototype, {
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
    for (var t = 0, n = e.vertexNormals.length; t < n; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
    for (var t = 0, n = e.vertexColors.length; t < n; t++) this.vertexColors[t] = e.vertexColors[t].clone();
    return this
  }
});
var Vd = 0;

function Me() {
  Object.defineProperty(this, "id", {
    value: Vd++
  }), this.uuid = Te.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = Pi, this.side = ga, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Bu, this.blendDst = Uu, this.blendEquation = Ur, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ds, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Cd, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ns, this.stencilZFail = ns, this.stencilZPass = ns, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
}
Me.prototype = Object.assign(Object.create(Qt.prototype), {
  constructor: Me,
  isMaterial: !0,
  onBeforeCompile: function() {},
  setValues: function(e) {
    if (e !== void 0)
      for (var t in e) {
        var n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue
        }
        if (t === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === Fu;
          continue
        }
        var r = this[t];
        if (r === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n
      }
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    var n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, this.combine !== void 0 && (n.combine = this.combine), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Pi && (n.blending = this.blending), this.flatShading === !0 && (n.flatShading = this.flatShading), this.side !== ga && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (n.morphTargets = !0), this.morphNormals === !0 && (n.morphNormals = !0), this.skinning === !0 && (n.skinning = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);

    function r(o) {
      var s = [];
      for (var l in o) {
        var c = o[l];
        delete c.metadata, s.push(c)
      }
      return s
    }
    if (t) {
      var i = r(e.textures),
        a = r(e.images);
      i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a)
    }
    return n
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    var t = e.clippingPlanes,
      n = null;
    if (t !== null) {
      var r = t.length;
      n = new Array(r);
      for (var i = 0; i !== r; ++i) n[i] = t[i].clone()
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
});
Object.defineProperty(Me.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++
  }
});

function Ht(e) {
  Me.call(this), this.type = "MeshBasicMaterial", this.color = new oe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Yo, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e)
}
Ht.prototype = Object.create(Me.prototype);
Ht.prototype.constructor = Ht;
Ht.prototype.isMeshBasicMaterial = !0;
Ht.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
};
var We = new M;

function we(e, t, n) {
  if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
  this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = $o, this.updateRange = {
    offset: 0,
    count: -1
  }, this.version = 0
}
Object.defineProperty(we.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++
  }
});
Object.assign(we.prototype, {
  isBufferAttribute: !0,
  onUploadCallback: function() {},
  setUsage: function(e) {
    return this.usage = e, this
  },
  copy: function(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
  },
  copyAt: function(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (var r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
    return this
  },
  copyArray: function(e) {
    return this.array.set(e), this
  },
  copyColorsArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new oe), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b
    }
    return this
  },
  copyVector2sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new H), t[n++] = a.x, t[n++] = a.y
    }
    return this
  },
  copyVector3sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new M), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z
    }
    return this
  },
  copyVector4sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new Ye), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w
    }
    return this
  },
  applyMatrix3: function(e) {
    for (var t = 0, n = this.count; t < n; t++) We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.applyMatrix3(e), this.setXYZ(t, We.x, We.y, We.z);
    return this
  },
  applyMatrix4: function(e) {
    for (var t = 0, n = this.count; t < n; t++) We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.applyMatrix4(e), this.setXYZ(t, We.x, We.y, We.z);
    return this
  },
  applyNormalMatrix: function(e) {
    for (var t = 0, n = this.count; t < n; t++) We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.applyNormalMatrix(e), this.setXYZ(t, We.x, We.y, We.z);
    return this
  },
  transformDirection: function(e) {
    for (var t = 0, n = this.count; t < n; t++) We.x = this.getX(t), We.y = this.getY(t), We.z = this.getZ(t), We.transformDirection(e), this.setXYZ(t, We.x, We.y, We.z);
    return this
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this
  },
  getX: function(e) {
    return this.array[e * this.itemSize]
  },
  setX: function(e, t) {
    return this.array[e * this.itemSize] = t, this
  },
  getY: function(e) {
    return this.array[e * this.itemSize + 1]
  },
  setY: function(e, t) {
    return this.array[e * this.itemSize + 1] = t, this
  },
  getZ: function(e) {
    return this.array[e * this.itemSize + 2]
  },
  setZ: function(e, t) {
    return this.array[e * this.itemSize + 2] = t, this
  },
  getW: function(e) {
    return this.array[e * this.itemSize + 3]
  },
  setW: function(e, t) {
    return this.array[e * this.itemSize + 3] = t, this
  },
  setXY: function(e, t, n) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
  },
  setXYZ: function(e, t, n, r) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this
  },
  setXYZW: function(e, t, n, r, i) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this
  },
  clone: function() {
    return new this.constructor(this.array, this.itemSize).copy(this)
  },
  toJSON: function() {
    return {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    }
  }
});

function Ns(e, t, n) {
  we.call(this, new Int8Array(e), t, n)
}
Ns.prototype = Object.create(we.prototype);
Ns.prototype.constructor = Ns;

function Fs(e, t, n) {
  we.call(this, new Uint8Array(e), t, n)
}
Fs.prototype = Object.create(we.prototype);
Fs.prototype.constructor = Fs;

function Bs(e, t, n) {
  we.call(this, new Uint8ClampedArray(e), t, n)
}
Bs.prototype = Object.create(we.prototype);
Bs.prototype.constructor = Bs;

function Us(e, t, n) {
  we.call(this, new Int16Array(e), t, n)
}
Us.prototype = Object.create(we.prototype);
Us.prototype.constructor = Us;

function Ui(e, t, n) {
  we.call(this, new Uint16Array(e), t, n)
}
Ui.prototype = Object.create(we.prototype);
Ui.prototype.constructor = Ui;

function zs(e, t, n) {
  we.call(this, new Int32Array(e), t, n)
}
zs.prototype = Object.create(we.prototype);
zs.prototype.constructor = zs;

function zi(e, t, n) {
  we.call(this, new Uint32Array(e), t, n)
}
zi.prototype = Object.create(we.prototype);
zi.prototype.constructor = zi;

function ne(e, t, n) {
  we.call(this, new Float32Array(e), t, n)
}
ne.prototype = Object.create(we.prototype);
ne.prototype.constructor = ne;

function Gs(e, t, n) {
  we.call(this, new Float64Array(e), t, n)
}
Gs.prototype = Object.create(we.prototype);
Gs.prototype.constructor = Gs;

function qu() {
  this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
}
Object.assign(qu.prototype, {
  computeGroups: function(e) {
    for (var t, n = [], r = void 0, i = e.faces, a = 0; a < i.length; a++) {
      var o = i[a];
      o.materialIndex !== r && (r = o.materialIndex, t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), t = {
        start: a * 3,
        materialIndex: r
      })
    }
    t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), this.groups = n
  },
  fromGeometry: function(e) {
    var t = e.faces,
      n = e.vertices,
      r = e.faceVertexUvs,
      i = r[0] && r[0].length > 0,
      a = r[1] && r[1].length > 0,
      o = e.morphTargets,
      s = o.length,
      l;
    if (s > 0) {
      l = [];
      for (var c = 0; c < s; c++) l[c] = {
        name: o[c].name,
        data: []
      };
      this.morphTargets.position = l
    }
    var u = e.morphNormals,
      h = u.length,
      f;
    if (h > 0) {
      f = [];
      for (var c = 0; c < h; c++) f[c] = {
        name: u[c].name,
        data: []
      };
      this.morphTargets.normal = f
    }
    var d = e.skinIndices,
      p = e.skinWeights,
      v = d.length === n.length,
      m = p.length === n.length;
    n.length > 0 && t.length === 0 && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
    for (var c = 0; c < t.length; c++) {
      var g = t[c];
      this.vertices.push(n[g.a], n[g.b], n[g.c]);
      var x = g.vertexNormals;
      if (x.length === 3) this.normals.push(x[0], x[1], x[2]);
      else {
        var w = g.normal;
        this.normals.push(w, w, w)
      }
      var S = g.vertexColors;
      if (S.length === 3) this.colors.push(S[0], S[1], S[2]);
      else {
        var b = g.color;
        this.colors.push(b, b, b)
      }
      if (i === !0) {
        var T = r[0][c];
        T !== void 0 ? this.uvs.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new H, new H, new H))
      }
      if (a === !0) {
        var T = r[1][c];
        T !== void 0 ? this.uvs2.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new H, new H, new H))
      }
      for (var D = 0; D < s; D++) {
        var N = o[D].vertices;
        l[D].data.push(N[g.a], N[g.b], N[g.c])
      }
      for (var D = 0; D < h; D++) {
        var C = u[D].vertexNormals[c];
        f[D].data.push(C.a, C.b, C.c)
      }
      v && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), m && this.skinWeights.push(p[g.a], p[g.b], p[g.c])
    }
    return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this
  }
});

function Yu(e) {
  if (e.length === 0) return -1 / 0;
  for (var t = e[0], n = 1, r = e.length; n < r; ++n) e[n] > t && (t = e[n]);
  return t
}
var kd = 1,
  en = new De,
  gs = new Q,
  Lr = new M,
  Dt = new dn,
  wi = new dn,
  ot = new M;

function se() {
  Object.defineProperty(this, "id", {
    value: kd += 2
  }), this.uuid = Te.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
    start: 0,
    count: 1 / 0
  }, this.userData = {}
}
se.prototype = Object.assign(Object.create(Qt.prototype), {
  constructor: se,
  isBufferGeometry: !0,
  getIndex: function() {
    return this.index
  },
  setIndex: function(e) {
    Array.isArray(e) ? this.index = new(Yu(e) > 65535 ? zi : Ui)(e, 1) : this.index = e
  },
  getAttribute: function(e) {
    return this.attributes[e]
  },
  setAttribute: function(e, t) {
    return this.attributes[e] = t, this
  },
  deleteAttribute: function(e) {
    return delete this.attributes[e], this
  },
  addGroup: function(e, t, n) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n !== void 0 ? n : 0
    })
  },
  clearGroups: function() {
    this.groups = []
  },
  setDrawRange: function(e, t) {
    this.drawRange.start = e, this.drawRange.count = t
  },
  applyMatrix4: function(e) {
    var t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    var n = this.attributes.normal;
    if (n !== void 0) {
      var r = new gt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0
    }
    var i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
  },
  rotateX: function(e) {
    return en.makeRotationX(e), this.applyMatrix4(en), this
  },
  rotateY: function(e) {
    return en.makeRotationY(e), this.applyMatrix4(en), this
  },
  rotateZ: function(e) {
    return en.makeRotationZ(e), this.applyMatrix4(en), this
  },
  translate: function(e, t, n) {
    return en.makeTranslation(e, t, n), this.applyMatrix4(en), this
  },
  scale: function(e, t, n) {
    return en.makeScale(e, t, n), this.applyMatrix4(en), this
  },
  lookAt: function(e) {
    return gs.lookAt(e), gs.updateMatrix(), this.applyMatrix4(gs.matrix), this
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Lr).negate(), this.translate(Lr.x, Lr.y, Lr.z), this
  },
  setFromObject: function(e) {
    var t = e.geometry;
    if (e.isPoints || e.isLine) {
      var n = new ne(t.vertices.length * 3, 3),
        r = new ne(t.colors.length * 3, 3);
      if (this.setAttribute("position", n.copyVector3sArray(t.vertices)), this.setAttribute("color", r.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
        var i = new ne(t.lineDistances.length, 1);
        this.setAttribute("lineDistance", i.copyArray(t.lineDistances))
      }
      t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone())
    } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
    return this
  },
  setFromPoints: function(e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.push(i.x, i.y, i.z || 0)
    }
    return this.setAttribute("position", new ne(t, 3)), this
  },
  updateFromObject: function(e) {
    var t = e.geometry;
    if (e.isMesh) {
      var n = t.__directGeometry;
      if (t.elementsNeedUpdate === !0 && (n = void 0, t.elementsNeedUpdate = !1), n === void 0) return this.fromGeometry(t);
      n.verticesNeedUpdate = t.verticesNeedUpdate, n.normalsNeedUpdate = t.normalsNeedUpdate, n.colorsNeedUpdate = t.colorsNeedUpdate, n.uvsNeedUpdate = t.uvsNeedUpdate, n.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = n
    }
    var r;
    return t.verticesNeedUpdate === !0 && (r = this.attributes.position, r !== void 0 && (r.copyVector3sArray(t.vertices), r.needsUpdate = !0), t.verticesNeedUpdate = !1), t.normalsNeedUpdate === !0 && (r = this.attributes.normal, r !== void 0 && (r.copyVector3sArray(t.normals), r.needsUpdate = !0), t.normalsNeedUpdate = !1), t.colorsNeedUpdate === !0 && (r = this.attributes.color, r !== void 0 && (r.copyColorsArray(t.colors), r.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (r = this.attributes.uv, r !== void 0 && (r.copyVector2sArray(t.uvs), r.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, r !== void 0 && (r.copyArray(t.lineDistances), r.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
  },
  fromGeometry: function(e) {
    return e.__directGeometry = new qu().fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
  },
  fromDirectGeometry: function(e) {
    var t = new Float32Array(e.vertices.length * 3);
    if (this.setAttribute("position", new we(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
      var n = new Float32Array(e.normals.length * 3);
      this.setAttribute("normal", new we(n, 3).copyVector3sArray(e.normals))
    }
    if (e.colors.length > 0) {
      var r = new Float32Array(e.colors.length * 3);
      this.setAttribute("color", new we(r, 3).copyColorsArray(e.colors))
    }
    if (e.uvs.length > 0) {
      var i = new Float32Array(e.uvs.length * 2);
      this.setAttribute("uv", new we(i, 2).copyVector2sArray(e.uvs))
    }
    if (e.uvs2.length > 0) {
      var a = new Float32Array(e.uvs2.length * 2);
      this.setAttribute("uv2", new we(a, 2).copyVector2sArray(e.uvs2))
    }
    this.groups = e.groups;
    for (var o in e.morphTargets) {
      for (var s = [], l = e.morphTargets[o], c = 0, u = l.length; c < u; c++) {
        var h = l[c],
          f = new ne(h.data.length * 3, 3);
        f.name = h.name, s.push(f.copyVector3sArray(h.data))
      }
      this.morphAttributes[o] = s
    }
    if (e.skinIndices.length > 0) {
      var d = new ne(e.skinIndices.length * 4, 4);
      this.setAttribute("skinIndex", d.copyVector4sArray(e.skinIndices))
    }
    if (e.skinWeights.length > 0) {
      var p = new ne(e.skinWeights.length * 4, 4);
      this.setAttribute("skinWeight", p.copyVector4sArray(e.skinWeights))
    }
    return e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new dn);
    var e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          Dt.setFromBufferAttribute(i), this.morphTargetsRelative ? (ot.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(ot), ot.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(ot)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max))
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new Yn);
    var e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e) {
      var n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          wi.setFromBufferAttribute(a), this.morphTargetsRelative ? (ot.addVectors(Dt.min, wi.min), Dt.expandByPoint(ot), ot.addVectors(Dt.max, wi.max), Dt.expandByPoint(ot)) : (Dt.expandByPoint(wi.min), Dt.expandByPoint(wi.max))
        }
      Dt.getCenter(n);
      for (var o = 0, r = 0, i = e.count; r < i; r++) ot.fromBufferAttribute(e, r), o = Math.max(o, n.distanceToSquared(ot));
      if (t)
        for (var r = 0, i = t.length; r < i; r++)
          for (var a = t[r], s = this.morphTargetsRelative, l = 0, c = a.count; l < c; l++) ot.fromBufferAttribute(a, l), s && (Lr.fromBufferAttribute(e, l), ot.add(Lr)), o = Math.max(o, n.distanceToSquared(ot));
      this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
    }
  },
  computeFaceNormals: function() {},
  computeVertexNormals: function() {
    var e = this.index,
      t = this.attributes;
    if (t.position) {
      var n = t.position.array;
      if (t.normal === void 0) this.setAttribute("normal", new we(new Float32Array(n.length), 3));
      else
        for (var r = t.normal.array, i = 0, a = r.length; i < a; i++) r[i] = 0;
      var o = t.normal.array,
        s, l, c, u = new M,
        h = new M,
        f = new M,
        d = new M,
        p = new M;
      if (e)
        for (var v = e.array, i = 0, a = e.count; i < a; i += 3) s = v[i + 0] * 3, l = v[i + 1] * 3, c = v[i + 2] * 3, u.fromArray(n, s), h.fromArray(n, l), f.fromArray(n, c), d.subVectors(f, h), p.subVectors(u, h), d.cross(p), o[s] += d.x, o[s + 1] += d.y, o[s + 2] += d.z, o[l] += d.x, o[l + 1] += d.y, o[l + 2] += d.z, o[c] += d.x, o[c + 1] += d.y, o[c + 2] += d.z;
      else
        for (var i = 0, a = n.length; i < a; i += 9) u.fromArray(n, i), h.fromArray(n, i + 3), f.fromArray(n, i + 6), d.subVectors(f, h), p.subVectors(u, h), d.cross(p), o[i] = d.x, o[i + 1] = d.y, o[i + 2] = d.z, o[i + 3] = d.x, o[i + 4] = d.y, o[i + 5] = d.z, o[i + 6] = d.x, o[i + 7] = d.y, o[i + 8] = d.z;
      this.normalizeNormals(), t.normal.needsUpdate = !0
    }
  },
  merge: function(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
      return
    }
    t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
    var n = this.attributes;
    for (var r in n)
      if (e.attributes[r] !== void 0)
        for (var i = n[r], a = i.array, o = e.attributes[r], s = o.array, l = o.itemSize * t, c = Math.min(s.length, a.length - l), u = 0, h = l; u < c; u++, h++) a[h] = s[u];
    return this
  },
  normalizeNormals: function() {
    for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++) ot.x = e.getX(t), ot.y = e.getY(t), ot.z = e.getZ(t), ot.normalize(), e.setXYZ(t, ot.x, ot.y, ot.z)
  },
  toNonIndexed: function() {
    function e(v, m) {
      for (var g = v.array, x = v.itemSize, w = new g.constructor(m.length * x), S = 0, b = 0, T = 0, D = m.length; T < D; T++) {
        S = m[T] * x;
        for (var N = 0; N < x; N++) w[b++] = g[S++]
      }
      return new we(w, x)
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
    var t = new se,
      n = this.index.array,
      r = this.attributes;
    for (var i in r) {
      var a = r[i],
        o = e(a, n);
      t.setAttribute(i, o)
    }
    var s = this.morphAttributes;
    for (i in s) {
      for (var l = [], c = s[i], u = 0, h = c.length; u < h; u++) {
        var a = c[u],
          o = e(a, n);
        l.push(o)
      }
      t.morphAttributes[i] = l
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    for (var f = this.groups, u = 0, d = f.length; u < d; u++) {
      var p = f[u];
      t.addGroup(p.start, p.count, p.materialIndex)
    }
    return t
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      var t = this.parameters;
      for (var n in t) t[n] !== void 0 && (e[n] = t[n]);
      return e
    }
    e.data = {
      attributes: {}
    };
    var r = this.index;
    r !== null && (e.data.index = {
      type: r.array.constructor.name,
      array: Array.prototype.slice.call(r.array)
    });
    var i = this.attributes;
    for (var n in i) {
      var a = i[n],
        o = a.toJSON();
      a.name !== "" && (o.name = a.name), e.data.attributes[n] = o
    }
    var s = {},
      l = !1;
    for (var n in this.morphAttributes) {
      for (var c = this.morphAttributes[n], u = [], h = 0, f = c.length; h < f; h++) {
        var a = c[h],
          o = a.toJSON();
        a.name !== "" && (o.name = a.name), u.push(o)
      }
      u.length > 0 && (s[n] = u, l = !0)
    }
    l && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    var d = this.groups;
    d.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(d)));
    var p = this.boundingSphere;
    return p !== null && (e.data.boundingSphere = {
      center: p.center.toArray(),
      radius: p.radius
    }), e
  },
  clone: function() {
    return new se().copy(this)
  },
  copy: function(e) {
    var t, n, r;
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
    var i = e.index;
    i !== null && this.setIndex(i.clone());
    var a = e.attributes;
    for (t in a) {
      var o = a[t];
      this.setAttribute(t, o.clone())
    }
    var s = e.morphAttributes;
    for (t in s) {
      var l = [],
        c = s[t];
      for (n = 0, r = c.length; n < r; n++) l.push(c[n].clone());
      this.morphAttributes[t] = l
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    var u = e.groups;
    for (n = 0, r = u.length; n < r; n++) {
      var h = u[n];
      this.addGroup(h.start, h.count, h.materialIndex)
    }
    var f = e.boundingBox;
    f !== null && (this.boundingBox = f.clone());
    var d = e.boundingSphere;
    return d !== null && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
});
var Sc = new De,
  Qn = new vi,
  ys = new Yn,
  Kn = new M,
  er = new M,
  tr = new M,
  xs = new M,
  _s = new M,
  bs = new M,
  Oa = new M,
  Ia = new M,
  Na = new M,
  Hr = new H,
  Vr = new H,
  kr = new H,
  Oi = new M,
  Fa = new M;

function et(e, t) {
  Q.call(this), this.type = "Mesh", this.geometry = e !== void 0 ? e : new se, this.material = t !== void 0 ? t : new Ht, this.updateMorphTargets()
}
et.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: et,
  isMesh: !0,
  copy: function(e) {
    return Q.prototype.copy.call(this, e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this
  },
  updateMorphTargets: function() {
    var e = this.geometry,
      t, n, r;
    if (e.isBufferGeometry) {
      var i = e.morphAttributes,
        a = Object.keys(i);
      if (a.length > 0) {
        var o = i[a[0]];
        if (o !== void 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = o.length; t < n; t++) r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t
      }
    } else {
      var s = e.morphTargets;
      s !== void 0 && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
  },
  raycast: function(e, t) {
    var n = this.geometry,
      r = this.material,
      i = this.matrixWorld;
    if (r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ys.copy(n.boundingSphere), ys.applyMatrix4(i), e.ray.intersectsSphere(ys) !== !1 && (Sc.getInverse(i), Qn.copy(e.ray).applyMatrix4(Sc), !(n.boundingBox !== null && Qn.intersectsBox(n.boundingBox) === !1)))) {
      var a;
      if (n.isBufferGeometry) {
        var o, s, l, c = n.index,
          u = n.attributes.position,
          h = n.morphAttributes.position,
          f = n.morphTargetsRelative,
          d = n.attributes.uv,
          p = n.attributes.uv2,
          v = n.groups,
          m = n.drawRange,
          g, x, w, S, b, T, D, N;
        if (c !== null)
          if (Array.isArray(r))
            for (g = 0, w = v.length; g < w; g++)
              for (b = v[g], T = r[b.materialIndex], D = Math.max(b.start, m.start), N = Math.min(b.start + b.count, m.start + m.count), x = D, S = N; x < S; x += 3) o = c.getX(x), s = c.getX(x + 1), l = c.getX(x + 2), a = Ba(this, T, e, Qn, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(x / 3), a.face.materialIndex = b.materialIndex, t.push(a));
          else
            for (D = Math.max(0, m.start), N = Math.min(c.count, m.start + m.count), g = D, w = N; g < w; g += 3) o = c.getX(g), s = c.getX(g + 1), l = c.getX(g + 2), a = Ba(this, r, e, Qn, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(g / 3), t.push(a));
        else if (u !== void 0)
          if (Array.isArray(r))
            for (g = 0, w = v.length; g < w; g++)
              for (b = v[g], T = r[b.materialIndex], D = Math.max(b.start, m.start), N = Math.min(b.start + b.count, m.start + m.count), x = D, S = N; x < S; x += 3) o = x, s = x + 1, l = x + 2, a = Ba(this, T, e, Qn, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(x / 3), a.face.materialIndex = b.materialIndex, t.push(a));
          else
            for (D = Math.max(0, m.start), N = Math.min(u.count, m.start + m.count), g = D, w = N; g < w; g += 3) o = g, s = g + 1, l = g + 2, a = Ba(this, r, e, Qn, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(g / 3), t.push(a))
      } else if (n.isGeometry) {
        var C, B, I, F = Array.isArray(r),
          U = n.vertices,
          z = n.faces,
          O, k = n.faceVertexUvs[0];
        k.length > 0 && (O = k);
        for (var j = 0, J = z.length; j < J; j++) {
          var W = z[j],
            Z = F ? r[W.materialIndex] : r;
          if (Z !== void 0 && (C = U[W.a], B = U[W.b], I = U[W.c], a = Zu(this, Z, e, Qn, C, B, I, Oi), a)) {
            if (O && O[j]) {
              var re = O[j];
              Hr.copy(re[0]), Vr.copy(re[1]), kr.copy(re[2]), a.uv = pt.getUV(Oi, C, B, I, Hr, Vr, kr, new H)
            }
            a.face = W, a.faceIndex = j, t.push(a)
          }
        }
      }
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this)
  }
});

function Zu(e, t, n, r, i, a, o, s) {
  var l;
  if (t.side === ht ? l = r.intersectTriangle(o, a, i, !0, s) : l = r.intersectTriangle(i, a, o, t.side !== ya, s), l === null) return null;
  Fa.copy(s), Fa.applyMatrix4(e.matrixWorld);
  var c = n.ray.origin.distanceTo(Fa);
  return c < n.near || c > n.far ? null : {
    distance: c,
    point: Fa.clone(),
    object: e
  }
}

function Ba(e, t, n, r, i, a, o, s, l, c, u, h) {
  Kn.fromBufferAttribute(i, c), er.fromBufferAttribute(i, u), tr.fromBufferAttribute(i, h);
  var f = e.morphTargetInfluences;
  if (t.morphTargets && a && f) {
    Oa.set(0, 0, 0), Ia.set(0, 0, 0), Na.set(0, 0, 0);
    for (var d = 0, p = a.length; d < p; d++) {
      var v = f[d],
        m = a[d];
      v !== 0 && (xs.fromBufferAttribute(m, c), _s.fromBufferAttribute(m, u), bs.fromBufferAttribute(m, h), o ? (Oa.addScaledVector(xs, v), Ia.addScaledVector(_s, v), Na.addScaledVector(bs, v)) : (Oa.addScaledVector(xs.sub(Kn), v), Ia.addScaledVector(_s.sub(er), v), Na.addScaledVector(bs.sub(tr), v)))
    }
    Kn.add(Oa), er.add(Ia), tr.add(Na)
  }
  var g = Zu(e, t, n, r, Kn, er, tr, Oi);
  if (g) {
    s && (Hr.fromBufferAttribute(s, c), Vr.fromBufferAttribute(s, u), kr.fromBufferAttribute(s, h), g.uv = pt.getUV(Oi, Kn, er, tr, Hr, Vr, kr, new H)), l && (Hr.fromBufferAttribute(l, c), Vr.fromBufferAttribute(l, u), kr.fromBufferAttribute(l, h), g.uv2 = pt.getUV(Oi, Kn, er, tr, Hr, Vr, kr, new H));
    var x = new vo(c, u, h);
    pt.getNormal(Kn, er, tr, x.normal), g.face = x
  }
  return g
}
var Wd = 0,
  tn = new De,
  Ms = new Q,
  Ua = new M;

function Se() {
  Object.defineProperty(this, "id", {
    value: Wd += 2
  }), this.uuid = Te.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
    []
  ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
}
Se.prototype = Object.assign(Object.create(Qt.prototype), {
  constructor: Se,
  isGeometry: !0,
  applyMatrix4: function(e) {
    for (var t = new gt().getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++) {
      var i = this.vertices[n];
      i.applyMatrix4(e)
    }
    for (var n = 0, r = this.faces.length; n < r; n++) {
      var a = this.faces[n];
      a.normal.applyMatrix3(t).normalize();
      for (var o = 0, s = a.vertexNormals.length; o < s; o++) a.vertexNormals[o].applyMatrix3(t).normalize()
    }
    return this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
  },
  rotateX: function(e) {
    return tn.makeRotationX(e), this.applyMatrix4(tn), this
  },
  rotateY: function(e) {
    return tn.makeRotationY(e), this.applyMatrix4(tn), this
  },
  rotateZ: function(e) {
    return tn.makeRotationZ(e), this.applyMatrix4(tn), this
  },
  translate: function(e, t, n) {
    return tn.makeTranslation(e, t, n), this.applyMatrix4(tn), this
  },
  scale: function(e, t, n) {
    return tn.makeScale(e, t, n), this.applyMatrix4(tn), this
  },
  lookAt: function(e) {
    return Ms.lookAt(e), Ms.updateMatrix(), this.applyMatrix4(Ms.matrix), this
  },
  fromBufferGeometry: function(e) {
    var t = this,
      n = e.index !== null ? e.index.array : void 0,
      r = e.attributes;
    if (r.position === void 0) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
    var i = r.position.array,
      a = r.normal !== void 0 ? r.normal.array : void 0,
      o = r.color !== void 0 ? r.color.array : void 0,
      s = r.uv !== void 0 ? r.uv.array : void 0,
      l = r.uv2 !== void 0 ? r.uv2.array : void 0;
    l !== void 0 && (this.faceVertexUvs[1] = []);
    for (var c = 0; c < i.length; c += 3) t.vertices.push(new M().fromArray(i, c)), o !== void 0 && t.colors.push(new oe().fromArray(o, c));

    function u(g, x, w, S) {
      var b = o === void 0 ? [] : [t.colors[g].clone(), t.colors[x].clone(), t.colors[w].clone()],
        T = a === void 0 ? [] : [new M().fromArray(a, g * 3), new M().fromArray(a, x * 3), new M().fromArray(a, w * 3)],
        D = new vo(g, x, w, T, b, S);
      t.faces.push(D), s !== void 0 && t.faceVertexUvs[0].push([new H().fromArray(s, g * 2), new H().fromArray(s, x * 2), new H().fromArray(s, w * 2)]), l !== void 0 && t.faceVertexUvs[1].push([new H().fromArray(l, g * 2), new H().fromArray(l, x * 2), new H().fromArray(l, w * 2)])
    }
    var h = e.groups;
    if (h.length > 0)
      for (var c = 0; c < h.length; c++)
        for (var f = h[c], d = f.start, p = f.count, v = d, m = d + p; v < m; v += 3) n !== void 0 ? u(n[v], n[v + 1], n[v + 2], f.materialIndex) : u(v, v + 1, v + 2, f.materialIndex);
    else if (n !== void 0)
      for (var c = 0; c < n.length; c += 3) u(n[c], n[c + 1], n[c + 2]);
    else
      for (var c = 0; c < i.length / 3; c += 3) u(c, c + 1, c + 2);
    return this.computeFaceNormals(), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ua).negate(), this.translate(Ua.x, Ua.y, Ua.z), this
  },
  normalize: function() {
    this.computeBoundingSphere();
    var e = this.boundingSphere.center,
      t = this.boundingSphere.radius,
      n = t === 0 ? 1 : 1 / t,
      r = new De;
    return r.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1), this.applyMatrix4(r), this
  },
  computeFaceNormals: function() {
    for (var e = new M, t = new M, n = 0, r = this.faces.length; n < r; n++) {
      var i = this.faces[n],
        a = this.vertices[i.a],
        o = this.vertices[i.b],
        s = this.vertices[i.c];
      e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), i.normal.copy(e)
    }
  },
  computeVertexNormals: function(e) {
    e === void 0 && (e = !0);
    var t, n, r, i, a, o;
    for (o = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++) o[t] = new M;
    if (e) {
      var s, l, c, u = new M,
        h = new M;
      for (r = 0, i = this.faces.length; r < i; r++) a = this.faces[r], s = this.vertices[a.a], l = this.vertices[a.b], c = this.vertices[a.c], u.subVectors(c, l), h.subVectors(s, l), u.cross(h), o[a.a].add(u), o[a.b].add(u), o[a.c].add(u)
    } else
      for (this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++) a = this.faces[r], o[a.a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
    for (t = 0, n = this.vertices.length; t < n; t++) o[t].normalize();
    for (r = 0, i = this.faces.length; r < i; r++) {
      a = this.faces[r];
      var f = a.vertexNormals;
      f.length === 3 ? (f[0].copy(o[a.a]), f[1].copy(o[a.b]), f[2].copy(o[a.c])) : (f[0] = o[a.a].clone(), f[1] = o[a.b].clone(), f[2] = o[a.c].clone())
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0)
  },
  computeFlatVertexNormals: function() {
    var e, t, n;
    for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
      n = this.faces[e];
      var r = n.vertexNormals;
      r.length === 3 ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone())
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0)
  },
  computeMorphNormals: function() {
    var e, t, n, r, i;
    for (n = 0, r = this.faces.length; n < r; n++)
      for (i = this.faces[n], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; e < t; e++) i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
    var a = new Se;
    for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
      if (!this.morphNormals[e]) {
        this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
        var o = this.morphNormals[e].faceNormals,
          s = this.morphNormals[e].vertexNormals,
          c, u;
        for (n = 0, r = this.faces.length; n < r; n++) c = new M, u = {
          a: new M,
          b: new M,
          c: new M
        }, o.push(c), s.push(u)
      }
      var l = this.morphNormals[e];
      a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
      var c, u;
      for (n = 0, r = this.faces.length; n < r; n++) i = this.faces[n], c = l.faceNormals[n], u = l.vertexNormals[n], c.copy(i.normal), u.a.copy(i.vertexNormals[0]), u.b.copy(i.vertexNormals[1]), u.c.copy(i.vertexNormals[2])
    }
    for (n = 0, r = this.faces.length; n < r; n++) i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new dn), this.boundingBox.setFromPoints(this.vertices)
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new Yn), this.boundingSphere.setFromPoints(this.vertices)
  },
  merge: function(e, t, n) {
    if (!(e && e.isGeometry)) {
      console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
      return
    }
    var r, i = this.vertices.length,
      a = this.vertices,
      o = e.vertices,
      s = this.faces,
      l = e.faces,
      c = this.colors,
      u = e.colors;
    n === void 0 && (n = 0), t !== void 0 && (r = new gt().getNormalMatrix(t));
    for (var h = 0, f = o.length; h < f; h++) {
      var d = o[h],
        p = d.clone();
      t !== void 0 && p.applyMatrix4(t), a.push(p)
    }
    for (var h = 0, f = u.length; h < f; h++) c.push(u[h].clone());
    for (h = 0, f = l.length; h < f; h++) {
      var v = l[h],
        m, g, x, w = v.vertexNormals,
        S = v.vertexColors;
      m = new vo(v.a + i, v.b + i, v.c + i), m.normal.copy(v.normal), r !== void 0 && m.normal.applyMatrix3(r).normalize();
      for (var b = 0, T = w.length; b < T; b++) g = w[b].clone(), r !== void 0 && g.applyMatrix3(r).normalize(), m.vertexNormals.push(g);
      m.color.copy(v.color);
      for (var b = 0, T = S.length; b < T; b++) x = S[b], m.vertexColors.push(x.clone());
      m.materialIndex = v.materialIndex + n, s.push(m)
    }
    for (var h = 0, f = e.faceVertexUvs.length; h < f; h++) {
      var D = e.faceVertexUvs[h];
      this.faceVertexUvs[h] === void 0 && (this.faceVertexUvs[h] = []);
      for (var b = 0, T = D.length; b < T; b++) {
        for (var N = D[b], C = [], B = 0, I = N.length; B < I; B++) C.push(N[B].clone());
        this.faceVertexUvs[h].push(C)
      }
    }
  },
  mergeMesh: function(e) {
    if (!(e && e.isMesh)) {
      console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e);
      return
    }
    e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix)
  },
  mergeVertices: function() {
    var e = {},
      t = [],
      n = [],
      r, i, a = 4,
      o = Math.pow(10, a),
      s, l, c, u, h, f;
    for (s = 0, l = this.vertices.length; s < l; s++) r = this.vertices[s], i = Math.round(r.x * o) + "_" + Math.round(r.y * o) + "_" + Math.round(r.z * o), e[i] === void 0 ? (e[i] = s, t.push(this.vertices[s]), n[s] = t.length - 1) : n[s] = n[e[i]];
    var d = [];
    for (s = 0, l = this.faces.length; s < l; s++) {
      c = this.faces[s], c.a = n[c.a], c.b = n[c.b], c.c = n[c.c], u = [c.a, c.b, c.c];
      for (var p = 0; p < 3; p++)
        if (u[p] === u[(p + 1) % 3]) {
          d.push(s);
          break
        }
    }
    for (s = d.length - 1; s >= 0; s--) {
      var v = d[s];
      for (this.faces.splice(v, 1), h = 0, f = this.faceVertexUvs.length; h < f; h++) this.faceVertexUvs[h].splice(v, 1)
    }
    var m = this.vertices.length - t.length;
    return this.vertices = t, m
  },
  setFromPoints: function(e) {
    this.vertices = [];
    for (var t = 0, n = e.length; t < n; t++) {
      var r = e[t];
      this.vertices.push(new M(r.x, r.y, r.z || 0))
    }
    return this
  },
  sortFacesByMaterialIndex: function() {
    for (var e = this.faces, t = e.length, n = 0; n < t; n++) e[n]._id = n;

    function r(c, u) {
      return c.materialIndex - u.materialIndex
    }
    e.sort(r);
    var i = this.faceVertexUvs[0],
      a = this.faceVertexUvs[1],
      o, s;
    i && i.length === t && (o = []), a && a.length === t && (s = []);
    for (var n = 0; n < t; n++) {
      var l = e[n]._id;
      o && o.push(i[l]), s && s.push(a[l])
    }
    o && (this.faceVertexUvs[0] = o), s && (this.faceVertexUvs[1] = s)
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "Geometry",
        generator: "Geometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.parameters !== void 0) {
      var t = this.parameters;
      for (var n in t) t[n] !== void 0 && (e[n] = t[n]);
      return e
    }
    for (var r = [], i = 0; i < this.vertices.length; i++) {
      var a = this.vertices[i];
      r.push(a.x, a.y, a.z)
    }
    for (var o = [], s = [], l = {}, c = [], u = {}, h = [], f = {}, i = 0; i < this.faces.length; i++) {
      var d = this.faces[i],
        p = !0,
        v = !1,
        m = this.faceVertexUvs[0][i] !== void 0,
        g = d.normal.length() > 0,
        x = d.vertexNormals.length > 0,
        w = d.color.r !== 1 || d.color.g !== 1 || d.color.b !== 1,
        S = d.vertexColors.length > 0,
        b = 0;
      if (b = C(b, 0, 0), b = C(b, 1, p), b = C(b, 2, v), b = C(b, 3, m), b = C(b, 4, g), b = C(b, 5, x), b = C(b, 6, w), b = C(b, 7, S), o.push(b), o.push(d.a, d.b, d.c), o.push(d.materialIndex), m) {
        var T = this.faceVertexUvs[0][i];
        o.push(F(T[0]), F(T[1]), F(T[2]))
      }
      if (g && o.push(B(d.normal)), x) {
        var D = d.vertexNormals;
        o.push(B(D[0]), B(D[1]), B(D[2]))
      }
      if (w && o.push(I(d.color)), S) {
        var N = d.vertexColors;
        o.push(I(N[0]), I(N[1]), I(N[2]))
      }
    }

    function C(U, z, O) {
      return O ? U | 1 << z : U & ~(1 << z)
    }

    function B(U) {
      var z = U.x.toString() + U.y.toString() + U.z.toString();
      return l[z] !== void 0 || (l[z] = s.length / 3, s.push(U.x, U.y, U.z)), l[z]
    }

    function I(U) {
      var z = U.r.toString() + U.g.toString() + U.b.toString();
      return u[z] !== void 0 || (u[z] = c.length, c.push(U.getHex())), u[z]
    }

    function F(U) {
      var z = U.x.toString() + U.y.toString();
      return f[z] !== void 0 || (f[z] = h.length / 2, h.push(U.x, U.y)), f[z]
    }
    return e.data = {}, e.data.vertices = r, e.data.normals = s, c.length > 0 && (e.data.colors = c), h.length > 0 && (e.data.uvs = [h]), e.data.faces = o, e
  },
  clone: function() {
    return new Se().copy(this)
  },
  copy: function(e) {
    var t, n, r, i, a, o;
    this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
      []
    ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
    var s = e.vertices;
    for (t = 0, n = s.length; t < n; t++) this.vertices.push(s[t].clone());
    var l = e.colors;
    for (t = 0, n = l.length; t < n; t++) this.colors.push(l[t].clone());
    var c = e.faces;
    for (t = 0, n = c.length; t < n; t++) this.faces.push(c[t].clone());
    for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
      var u = e.faceVertexUvs[t];
      for (this.faceVertexUvs[t] === void 0 && (this.faceVertexUvs[t] = []), r = 0, i = u.length; r < i; r++) {
        var h = u[r],
          f = [];
        for (a = 0, o = h.length; a < o; a++) {
          var d = h[a];
          f.push(d.clone())
        }
        this.faceVertexUvs[t].push(f)
      }
    }
    var p = e.morphTargets;
    for (t = 0, n = p.length; t < n; t++) {
      var v = {};
      if (v.name = p[t].name, p[t].vertices !== void 0)
        for (v.vertices = [], r = 0, i = p[t].vertices.length; r < i; r++) v.vertices.push(p[t].vertices[r].clone());
      if (p[t].normals !== void 0)
        for (v.normals = [], r = 0, i = p[t].normals.length; r < i; r++) v.normals.push(p[t].normals[r].clone());
      this.morphTargets.push(v)
    }
    var m = e.morphNormals;
    for (t = 0, n = m.length; t < n; t++) {
      var g = {};
      if (m[t].vertexNormals !== void 0)
        for (g.vertexNormals = [], r = 0, i = m[t].vertexNormals.length; r < i; r++) {
          var x = m[t].vertexNormals[r],
            w = {};
          w.a = x.a.clone(), w.b = x.b.clone(), w.c = x.c.clone(), g.vertexNormals.push(w)
        }
      if (m[t].faceNormals !== void 0)
        for (g.faceNormals = [], r = 0, i = m[t].faceNormals.length; r < i; r++) g.faceNormals.push(m[t].faceNormals[r].clone());
      this.morphNormals.push(g)
    }
    var S = e.skinWeights;
    for (t = 0, n = S.length; t < n; t++) this.skinWeights.push(S[t].clone());
    var b = e.skinIndices;
    for (t = 0, n = b.length; t < n; t++) this.skinIndices.push(b[t].clone());
    var T = e.lineDistances;
    for (t = 0, n = T.length; t < n; t++) this.lineDistances.push(T[t]);
    var D = e.boundingBox;
    D !== null && (this.boundingBox = D.clone());
    var N = e.boundingSphere;
    return N !== null && (this.boundingSphere = N.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
  },
  dispose: function() {
    this.dispatchEvent({
      type: "dispose"
    })
  }
});
class jd extends Se {
  constructor(t, n, r, i, a, o) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: n,
      depth: r,
      widthSegments: i,
      heightSegments: a,
      depthSegments: o
    }, this.fromBufferGeometry(new Qo(t, n, r, i, a, o)), this.mergeVertices()
  }
}
class Qo extends se {
  constructor(t, n, r, i, a, o) {
    super(), this.type = "BoxBufferGeometry", this.parameters = {
      width: t,
      height: n,
      depth: r,
      widthSegments: i,
      heightSegments: a,
      depthSegments: o
    };
    var s = this;
    t = t || 1, n = n || 1, r = r || 1, i = Math.floor(i) || 1, a = Math.floor(a) || 1, o = Math.floor(o) || 1;
    var l = [],
      c = [],
      u = [],
      h = [],
      f = 0,
      d = 0;
    p("z", "y", "x", -1, -1, r, n, t, o, a, 0), p("z", "y", "x", 1, -1, r, n, -t, o, a, 1), p("x", "z", "y", 1, 1, t, r, n, i, o, 2), p("x", "z", "y", 1, -1, t, r, -n, i, o, 3), p("x", "y", "z", 1, -1, t, n, r, i, a, 4), p("x", "y", "z", -1, -1, t, n, -r, i, a, 5), this.setIndex(l), this.setAttribute("position", new ne(c, 3)), this.setAttribute("normal", new ne(u, 3)), this.setAttribute("uv", new ne(h, 2));

    function p(v, m, g, x, w, S, b, T, D, N, C) {
      var B = S / D,
        I = b / N,
        F = S / 2,
        U = b / 2,
        z = T / 2,
        O = D + 1,
        k = N + 1,
        j = 0,
        J = 0,
        W, Z, re = new M;
      for (Z = 0; Z < k; Z++) {
        var Pe = Z * I - U;
        for (W = 0; W < O; W++) {
          var Ue = W * B - F;
          re[v] = Ue * x, re[m] = Pe * w, re[g] = z, c.push(re.x, re.y, re.z), re[v] = 0, re[m] = 0, re[g] = T > 0 ? 1 : -1, u.push(re.x, re.y, re.z), h.push(W / D), h.push(1 - Z / N), j += 1
        }
      }
      for (Z = 0; Z < N; Z++)
        for (W = 0; W < D; W++) {
          var Le = f + W + O * Z,
            ye = f + W + O * (Z + 1),
            V = f + (W + 1) + O * (Z + 1),
            Oe = f + (W + 1) + O * Z;
          l.push(Le, ye, Oe), l.push(ye, V, Oe), J += 6
        }
      s.addGroup(d, J, C), d += J, f += j
    }
  }
}

function Yr(e) {
  var t = {};
  for (var n in e) {
    t[n] = {};
    for (var r in e[n]) {
      var i = e[n][r];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
    }
  }
  return t
}

function mt(e) {
  for (var t = {}, n = 0; n < e.length; n++) {
    var r = Yr(e[n]);
    for (var i in r) t[i] = r[i]
  }
  return t
}
var Xd = {
    clone: Yr,
    merge: mt
  },
  qd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Yd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;

function At(e) {
  Me.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = qd, this.fragmentShader = Yd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
    derivatives: !1,
    fragDepth: !1,
    drawBuffers: !1,
    shaderTextureLOD: !1
  }, this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
}
At.prototype = Object.create(Me.prototype);
At.prototype.constructor = At;
At.prototype.isShaderMaterial = !0;
At.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Yr(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
};
At.prototype.toJSON = function(e) {
  var t = Me.prototype.toJSON.call(this, e);
  t.uniforms = {};
  for (var n in this.uniforms) {
    var r = this.uniforms[n],
      i = r.value;
    i && i.isTexture ? t.uniforms[n] = {
      type: "t",
      value: i.toJSON(e).uuid
    } : i && i.isColor ? t.uniforms[n] = {
      type: "c",
      value: i.getHex()
    } : i && i.isVector2 ? t.uniforms[n] = {
      type: "v2",
      value: i.toArray()
    } : i && i.isVector3 ? t.uniforms[n] = {
      type: "v3",
      value: i.toArray()
    } : i && i.isVector4 ? t.uniforms[n] = {
      type: "v4",
      value: i.toArray()
    } : i && i.isMatrix3 ? t.uniforms[n] = {
      type: "m3",
      value: i.toArray()
    } : i && i.isMatrix4 ? t.uniforms[n] = {
      type: "m4",
      value: i.toArray()
    } : t.uniforms[n] = {
      value: i
    }
  }
  Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
  var a = {};
  for (var o in this.extensions) this.extensions[o] === !0 && (a[o] = !0);
  return Object.keys(a).length > 0 && (t.extensions = a), t
};

function bn() {
  Q.call(this), this.type = "Camera", this.matrixWorldInverse = new De, this.projectionMatrix = new De, this.projectionMatrixInverse = new De
}
bn.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: bn,
  isCamera: !0,
  copy: function(e, t) {
    return Q.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new M), this.updateMatrixWorld(!0);
    var t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize()
  },
  updateMatrixWorld: function(e) {
    Q.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
  },
  updateWorldMatrix: function(e, t) {
    Q.prototype.updateWorldMatrix.call(this, e, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
  },
  clone: function() {
    return new this.constructor().copy(this)
  }
});

function st(e, t, n, r) {
  bn.call(this), this.type = "PerspectiveCamera", this.fov = e !== void 0 ? e : 50, this.zoom = 1, this.near = n !== void 0 ? n : .1, this.far = r !== void 0 ? r : 2e3, this.focus = 10, this.aspect = t !== void 0 ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
}
st.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: st,
  isPerspectiveCamera: !0,
  copy: function(e, t) {
    return bn.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
  },
  setFocalLength: function(e) {
    var t = .5 * this.getFilmHeight() / e;
    this.fov = Te.RAD2DEG * 2 * Math.atan(t), this.updateProjectionMatrix()
  },
  getFocalLength: function() {
    var e = Math.tan(Te.DEG2RAD * .5 * this.fov);
    return .5 * this.getFilmHeight() / e
  },
  getEffectiveFOV: function() {
    return Te.RAD2DEG * 2 * Math.atan(Math.tan(Te.DEG2RAD * .5 * this.fov) / this.zoom)
  },
  getFilmWidth: function() {
    return this.filmGauge * Math.min(this.aspect, 1)
  },
  getFilmHeight: function() {
    return this.filmGauge / Math.max(this.aspect, 1)
  },
  setViewOffset: function(e, t, n, r, i, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
  },
  updateProjectionMatrix: function() {
    var e = this.near,
      t = e * Math.tan(Te.DEG2RAD * .5 * this.fov) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      i = -.5 * r,
      a = this.view;
    if (this.view !== null && this.view.enabled) {
      var o = a.fullWidth,
        s = a.fullHeight;
      i += a.offsetX * r / o, t -= a.offsetY * n / s, r *= a.width / o, n *= a.height / s
    }
    var l = this.filmOffset;
    l !== 0 && (i += e * l / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
  }
});
var Rr = 90,
  Cr = 1;

function Gi(e, t, n, r) {
  Q.call(this), this.type = "CubeCamera";
  var i = new st(Rr, Cr, e, t);
  i.up.set(0, -1, 0), i.lookAt(new M(1, 0, 0)), this.add(i);
  var a = new st(Rr, Cr, e, t);
  a.up.set(0, -1, 0), a.lookAt(new M(-1, 0, 0)), this.add(a);
  var o = new st(Rr, Cr, e, t);
  o.up.set(0, 0, 1), o.lookAt(new M(0, 1, 0)), this.add(o);
  var s = new st(Rr, Cr, e, t);
  s.up.set(0, 0, -1), s.lookAt(new M(0, -1, 0)), this.add(s);
  var l = new st(Rr, Cr, e, t);
  l.up.set(0, -1, 0), l.lookAt(new M(0, 0, 1)), this.add(l);
  var c = new st(Rr, Cr, e, t);
  c.up.set(0, -1, 0), c.lookAt(new M(0, 0, -1)), this.add(c), r = r || {
    format: zn,
    magFilter: ft,
    minFilter: ft
  }, this.renderTarget = new Zr(n, r), this.renderTarget.texture.name = "CubeCamera", this.update = function(u, h) {
    this.parent === null && this.updateMatrixWorld();
    var f = u.getRenderTarget(),
      d = this.renderTarget,
      p = d.texture.generateMipmaps;
    d.texture.generateMipmaps = !1, u.setRenderTarget(d, 0), u.render(h, i), u.setRenderTarget(d, 1), u.render(h, a), u.setRenderTarget(d, 2), u.render(h, o), u.setRenderTarget(d, 3), u.render(h, s), u.setRenderTarget(d, 4), u.render(h, l), d.texture.generateMipmaps = p, u.setRenderTarget(d, 5), u.render(h, c), u.setRenderTarget(f)
  }, this.clear = function(u, h, f, d) {
    for (var p = u.getRenderTarget(), v = this.renderTarget, m = 0; m < 6; m++) u.setRenderTarget(v, m), u.clear(h, f, d);
    u.setRenderTarget(p)
  }
}
Gi.prototype = Object.create(Q.prototype);
Gi.prototype.constructor = Gi;

function Zr(e, t, n) {
  Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), zt.call(this, e, e, t)
}
Zr.prototype = Object.create(zt.prototype);
Zr.prototype.constructor = Zr;
Zr.prototype.isWebGLCubeRenderTarget = !0;
Zr.prototype.fromEquirectangularTexture = function(e, t) {
  this.texture.type = t.type, this.texture.format = t.format, this.texture.encoding = t.encoding;
  var n = new _n,
    r = {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "	vWorldDirection = transformDirection( position, modelMatrix );", "	#include <begin_vertex>", "	#include <project_vertex>", "}"].join(`
`),
      fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "	vec3 direction = normalize( vWorldDirection );", "	vec2 sampleUV;", "	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "	gl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join(`
`)
    },
    i = new At({
      type: "CubemapFromEquirect",
      uniforms: Yr(r.uniforms),
      vertexShader: r.vertexShader,
      fragmentShader: r.fragmentShader,
      side: ht,
      blending: Un
    });
  i.uniforms.tEquirect.value = t;
  var a = new et(new Qo(5, 5, 5), i);
  n.add(a);
  var o = new Gi(1, 10, 1);
  return o.renderTarget = this, o.renderTarget.texture.name = "CubeCameraTexture", o.update(e, n), a.geometry.dispose(), a.material.dispose(), this
};

function Jr(e, t, n, r, i, a, o, s, l, c, u, h) {
  Ze.call(this, null, a, o, s, l, c, r, i, u, h), this.image = {
    data: e || null,
    width: t || 1,
    height: n || 1
  }, this.magFilter = l !== void 0 ? l : lt, this.minFilter = c !== void 0 ? c : lt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
}
Jr.prototype = Object.create(Ze.prototype);
Jr.prototype.constructor = Jr;
Jr.prototype.isDataTexture = !0;
var Pr = new Yn,
  za = new M;

function _a(e, t, n, r, i, a) {
  this.planes = [e !== void 0 ? e : new nn, t !== void 0 ? t : new nn, n !== void 0 ? n : new nn, r !== void 0 ? r : new nn, i !== void 0 ? i : new nn, a !== void 0 ? a : new nn]
}
Object.assign(_a.prototype, {
  set: function(e, t, n, r, i, a) {
    var o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this
  },
  setFromProjectionMatrix: function(e) {
    var t = this.planes,
      n = e.elements,
      r = n[0],
      i = n[1],
      a = n[2],
      o = n[3],
      s = n[4],
      l = n[5],
      c = n[6],
      u = n[7],
      h = n[8],
      f = n[9],
      d = n[10],
      p = n[11],
      v = n[12],
      m = n[13],
      g = n[14],
      x = n[15];
    return t[0].setComponents(o - r, u - s, p - h, x - v).normalize(), t[1].setComponents(o + r, u + s, p + h, x + v).normalize(), t[2].setComponents(o + i, u + l, p + f, x + m).normalize(), t[3].setComponents(o - i, u - l, p - f, x - m).normalize(), t[4].setComponents(o - a, u - c, p - d, x - g).normalize(), t[5].setComponents(o + a, u + c, p + d, x + g).normalize(), this
  },
  intersectsObject: function(e) {
    var t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Pr)
  },
  intersectsSprite: function(e) {
    return Pr.center.set(0, 0, 0), Pr.radius = .7071067811865476, Pr.applyMatrix4(e.matrixWorld), this.intersectsSphere(Pr)
  },
  intersectsSphere: function(e) {
    for (var t = this.planes, n = e.center, r = -e.radius, i = 0; i < 6; i++) {
      var a = t[i].distanceToPoint(n);
      if (a < r) return !1
    }
    return !0
  },
  intersectsBox: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++) {
      var r = t[n];
      if (za.x = r.normal.x > 0 ? e.max.x : e.min.x, za.y = r.normal.y > 0 ? e.max.y : e.min.y, za.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(za) < 0) return !1
    }
    return !0
  },
  containsPoint: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0) return !1;
    return !0
  }
});
var te = {
  common: {
    diffuse: {
      value: new oe(15658734)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    uvTransform: {
      value: new gt
    },
    uv2Transform: {
      value: new gt
    },
    alphaMap: {
      value: null
    }
  },
  specularmap: {
    specularMap: {
      value: null
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    refractionRatio: {
      value: .98
    },
    maxMipLevel: {
      value: 0
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalScale: {
      value: new H(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 25e-5
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2e3
    },
    fogColor: {
      value: new oe(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotShadowMap: {
      value: []
    },
    spotShadowMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    }
  },
  points: {
    diffuse: {
      value: new oe(15658734)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    uvTransform: {
      value: new gt
    }
  },
  sprite: {
    diffuse: {
      value: new oe(15658734)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new H(.5, .5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    uvTransform: {
      value: new gt
    }
  }
};

function Ju() {
  var e = null,
    t = !1,
    n = null;

  function r(i, a) {
    t !== !1 && (n(i, a), e.requestAnimationFrame(r))
  }
  return {
    start: function() {
      t !== !0 && n !== null && (e.requestAnimationFrame(r), t = !0)
    },
    stop: function() {
      t = !1
    },
    setAnimationLoop: function(i) {
      n = i
    },
    setContext: function(i) {
      e = i
    }
  }
}

function Zd(e, t) {
  var n = t.isWebGL2,
    r = new WeakMap;

  function i(c, u) {
    var h = c.array,
      f = c.usage,
      d = e.createBuffer();
    e.bindBuffer(u, d), e.bufferData(u, h, f), c.onUploadCallback();
    var p = 5126;
    return h instanceof Float32Array ? p = 5126 : h instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : h instanceof Uint16Array ? p = 5123 : h instanceof Int16Array ? p = 5122 : h instanceof Uint32Array ? p = 5125 : h instanceof Int32Array ? p = 5124 : h instanceof Int8Array ? p = 5120 : h instanceof Uint8Array && (p = 5121), {
      buffer: d,
      type: p,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    }
  }

  function a(c, u, h) {
    var f = u.array,
      d = u.updateRange;
    e.bindBuffer(h, c), d.count === -1 ? e.bufferSubData(h, 0, f) : (n ? e.bufferSubData(h, d.offset * f.BYTES_PER_ELEMENT, f, d.offset, d.count) : e.bufferSubData(h, d.offset * f.BYTES_PER_ELEMENT, f.subarray(d.offset, d.offset + d.count)), d.count = -1)
  }

  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), r.get(c)
  }

  function s(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    var u = r.get(c);
    u && (e.deleteBuffer(u.buffer), r.delete(c))
  }

  function l(c, u) {
    c.isInterleavedBufferAttribute && (c = c.data);
    var h = r.get(c);
    h === void 0 ? r.set(c, i(c, u)) : h.version < c.version && (a(h.buffer, c, u), h.version = c.version)
  }
  return {
    get: o,
    remove: s,
    update: l
  }
}

function mo(e, t, n, r) {
  Se.call(this), this.type = "PlaneGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: r
  }, this.fromBufferGeometry(new $r(e, t, n, r)), this.mergeVertices()
}
mo.prototype = Object.create(Se.prototype);
mo.prototype.constructor = mo;

function $r(e, t, n, r) {
  se.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: r
  }, e = e || 1, t = t || 1;
  var i = e / 2,
    a = t / 2,
    o = Math.floor(n) || 1,
    s = Math.floor(r) || 1,
    l = o + 1,
    c = s + 1,
    u = e / o,
    h = t / s,
    f, d, p = [],
    v = [],
    m = [],
    g = [];
  for (d = 0; d < c; d++) {
    var x = d * h - a;
    for (f = 0; f < l; f++) {
      var w = f * u - i;
      v.push(w, -x, 0), m.push(0, 0, 1), g.push(f / o), g.push(1 - d / s)
    }
  }
  for (d = 0; d < s; d++)
    for (f = 0; f < o; f++) {
      var S = f + l * d,
        b = f + l * (d + 1),
        T = f + 1 + l * (d + 1),
        D = f + 1 + l * d;
      p.push(S, b, D), p.push(b, T, D)
    }
  this.setIndex(p), this.setAttribute("position", new ne(v, 3)), this.setAttribute("normal", new ne(m, 3)), this.setAttribute("uv", new ne(g, 2))
}
$r.prototype = Object.create(se.prototype);
$r.prototype.constructor = $r;
var Jd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  $d = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Qd = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,
  Kd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,
  ep = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  tp = "vec3 transformed = vec3( position );",
  np = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  rp = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,
  ip = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  ap = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  op = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  sp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  lp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  cp = `#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,
  up = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,
  hp = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,
  fp = `#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,
  dp = `#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}`,
  pp = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);
    } else if (face == 1.0) {
      uv = vec2(direction.x, -direction.z) / abs(direction.y);
    } else if (face == 2.0) {
      uv = direction.xy / abs(direction.z);
    } else if (face == 3.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);
    } else if (face == 4.0) {
      uv = direction.xz / abs(direction.y);
    } else {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);
    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`,
  vp = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  mp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  gp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  yp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  xp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  _p = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  bp = `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,
  Mp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		vec2 sampleUV;
		reflectVec = normalize( reflectVec );
		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
		vec4 envColor = texture2D( envMap, sampleUV );
	#elif defined( ENVMAP_TYPE_SPHERE )
		reflectVec = normalize( reflectVec );
		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  wp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Sp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Ep = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Tp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) { 
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Ap = `#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`,
  Lp = `#ifdef USE_FOG
	varying float fogDepth;
#endif`,
  Rp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Cp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Pp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
  Dp = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,
  Op = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Ip = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
  Np = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
		struct PointLightShadow {
			float shadowBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,
  Fp = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_SPHERE )
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,
  Bp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Up = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  zp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Gp = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  Hp = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,
  Vp = `struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  kp = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Wp = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,
  jp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Xp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  qp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Yp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Zp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Jp = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
  $p = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Qp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Kp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ev = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  tv = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  nv = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,
  rv = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,
  iv = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += morphTarget4 * morphTargetInfluences[ 4 ];
	transformed += morphTarget5 * morphTargetInfluences[ 5 ];
	transformed += morphTarget6 * morphTargetInfluences[ 6 ];
	transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,
  av = `#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  ov = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,
  sv = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,
  lv = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  cv = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,
  uv = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  hv = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  fv = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  dv = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  pv = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  vv = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  mv = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  gv = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  yv = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  xv = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  _v = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  bv = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Mv = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  wv = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
  Sv = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ev = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Tv = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Av = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Lv = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Rv = `#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );
}`,
  Cv = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Pv = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Dv = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Ov = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  Iv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Nv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  Fv = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  Bv = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Uv = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  zv = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Gv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Hv = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Vv = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  kv = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Wv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  jv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV;
	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Xv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  qv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Yv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Zv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Jv = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  $v = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Qv = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Kv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  em = `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  tm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  nm = `#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  rm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  im = `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  am = `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  om = `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  sm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
  lm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  cm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  um = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  hm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  fm = `#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  dm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  pm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Ne = {
    alphamap_fragment: Jd,
    alphamap_pars_fragment: $d,
    alphatest_fragment: Qd,
    aomap_fragment: Kd,
    aomap_pars_fragment: ep,
    begin_vertex: tp,
    beginnormal_vertex: np,
    bsdfs: rp,
    bumpmap_pars_fragment: ip,
    clipping_planes_fragment: ap,
    clipping_planes_pars_fragment: op,
    clipping_planes_pars_vertex: sp,
    clipping_planes_vertex: lp,
    color_fragment: cp,
    color_pars_fragment: up,
    color_pars_vertex: hp,
    color_vertex: fp,
    common: dp,
    cube_uv_reflection_fragment: pp,
    defaultnormal_vertex: vp,
    displacementmap_pars_vertex: mp,
    displacementmap_vertex: gp,
    emissivemap_fragment: yp,
    emissivemap_pars_fragment: xp,
    encodings_fragment: _p,
    encodings_pars_fragment: bp,
    envmap_fragment: Mp,
    envmap_common_pars_fragment: wp,
    envmap_pars_fragment: Sp,
    envmap_pars_vertex: Ep,
    envmap_physical_pars_fragment: Fp,
    envmap_vertex: Tp,
    fog_vertex: Ap,
    fog_pars_vertex: Lp,
    fog_fragment: Rp,
    fog_pars_fragment: Cp,
    gradientmap_pars_fragment: Pp,
    lightmap_fragment: Dp,
    lightmap_pars_fragment: Op,
    lights_lambert_vertex: Ip,
    lights_pars_begin: Np,
    lights_toon_fragment: Bp,
    lights_toon_pars_fragment: Up,
    lights_phong_fragment: zp,
    lights_phong_pars_fragment: Gp,
    lights_physical_fragment: Hp,
    lights_physical_pars_fragment: Vp,
    lights_fragment_begin: kp,
    lights_fragment_maps: Wp,
    lights_fragment_end: jp,
    logdepthbuf_fragment: Xp,
    logdepthbuf_pars_fragment: qp,
    logdepthbuf_pars_vertex: Yp,
    logdepthbuf_vertex: Zp,
    map_fragment: Jp,
    map_pars_fragment: $p,
    map_particle_fragment: Qp,
    map_particle_pars_fragment: Kp,
    metalnessmap_fragment: ev,
    metalnessmap_pars_fragment: tv,
    morphnormal_vertex: nv,
    morphtarget_pars_vertex: rv,
    morphtarget_vertex: iv,
    normal_fragment_begin: av,
    normal_fragment_maps: ov,
    normalmap_pars_fragment: sv,
    clearcoat_normal_fragment_begin: lv,
    clearcoat_normal_fragment_maps: cv,
    clearcoat_pars_fragment: uv,
    packing: hv,
    premultiplied_alpha_fragment: fv,
    project_vertex: dv,
    dithering_fragment: pv,
    dithering_pars_fragment: vv,
    roughnessmap_fragment: mv,
    roughnessmap_pars_fragment: gv,
    shadowmap_pars_fragment: yv,
    shadowmap_pars_vertex: xv,
    shadowmap_vertex: _v,
    shadowmask_pars_fragment: bv,
    skinbase_vertex: Mv,
    skinning_pars_vertex: wv,
    skinning_vertex: Sv,
    skinnormal_vertex: Ev,
    specularmap_fragment: Tv,
    specularmap_pars_fragment: Av,
    tonemapping_fragment: Lv,
    tonemapping_pars_fragment: Rv,
    uv_pars_fragment: Cv,
    uv_pars_vertex: Pv,
    uv_vertex: Dv,
    uv2_pars_fragment: Ov,
    uv2_pars_vertex: Iv,
    uv2_vertex: Nv,
    worldpos_vertex: Fv,
    background_frag: Bv,
    background_vert: Uv,
    cube_frag: zv,
    cube_vert: Gv,
    depth_frag: Hv,
    depth_vert: Vv,
    distanceRGBA_frag: kv,
    distanceRGBA_vert: Wv,
    equirect_frag: jv,
    equirect_vert: Xv,
    linedashed_frag: qv,
    linedashed_vert: Yv,
    meshbasic_frag: Zv,
    meshbasic_vert: Jv,
    meshlambert_frag: $v,
    meshlambert_vert: Qv,
    meshmatcap_frag: Kv,
    meshmatcap_vert: em,
    meshtoon_frag: tm,
    meshtoon_vert: nm,
    meshphong_frag: rm,
    meshphong_vert: im,
    meshphysical_frag: am,
    meshphysical_vert: om,
    normal_frag: sm,
    normal_vert: lm,
    points_frag: cm,
    points_vert: um,
    shadow_frag: hm,
    shadow_vert: fm,
    sprite_frag: dm,
    sprite_vert: pm
  },
  xn = {
    basic: {
      uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.fog]),
      vertexShader: Ne.meshbasic_vert,
      fragmentShader: Ne.meshbasic_frag
    },
    lambert: {
      uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.fog, te.lights, {
        emissive: {
          value: new oe(0)
        }
      }]),
      vertexShader: Ne.meshlambert_vert,
      fragmentShader: Ne.meshlambert_frag
    },
    phong: {
      uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, {
        emissive: {
          value: new oe(0)
        },
        specular: {
          value: new oe(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: Ne.meshphong_vert,
      fragmentShader: Ne.meshphong_frag
    },
    standard: {
      uniforms: mt([te.common, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.roughnessmap, te.metalnessmap, te.fog, te.lights, {
        emissive: {
          value: new oe(0)
        },
        roughness: {
          value: .5
        },
        metalness: {
          value: .5
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: Ne.meshphysical_vert,
      fragmentShader: Ne.meshphysical_frag
    },
    toon: {
      uniforms: mt([te.common, te.specularmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.gradientmap, te.fog, te.lights, {
        emissive: {
          value: new oe(0)
        },
        specular: {
          value: new oe(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: Ne.meshtoon_vert,
      fragmentShader: Ne.meshtoon_frag
    },
    matcap: {
      uniforms: mt([te.common, te.bumpmap, te.normalmap, te.displacementmap, te.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: Ne.meshmatcap_vert,
      fragmentShader: Ne.meshmatcap_frag
    },
    points: {
      uniforms: mt([te.points, te.fog]),
      vertexShader: Ne.points_vert,
      fragmentShader: Ne.points_frag
    },
    dashed: {
      uniforms: mt([te.common, te.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: Ne.linedashed_vert,
      fragmentShader: Ne.linedashed_frag
    },
    depth: {
      uniforms: mt([te.common, te.displacementmap]),
      vertexShader: Ne.depth_vert,
      fragmentShader: Ne.depth_frag
    },
    normal: {
      uniforms: mt([te.common, te.bumpmap, te.normalmap, te.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: Ne.normal_vert,
      fragmentShader: Ne.normal_frag
    },
    sprite: {
      uniforms: mt([te.sprite, te.fog]),
      vertexShader: Ne.sprite_vert,
      fragmentShader: Ne.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new gt
        },
        t2D: {
          value: null
        }
      },
      vertexShader: Ne.background_vert,
      fragmentShader: Ne.background_frag
    },
    cube: {
      uniforms: mt([te.envmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: Ne.cube_vert,
      fragmentShader: Ne.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: Ne.equirect_vert,
      fragmentShader: Ne.equirect_frag
    },
    distanceRGBA: {
      uniforms: mt([te.common, te.displacementmap, {
        referencePosition: {
          value: new M
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1e3
        }
      }]),
      vertexShader: Ne.distanceRGBA_vert,
      fragmentShader: Ne.distanceRGBA_frag
    },
    shadow: {
      uniforms: mt([te.lights, te.fog, {
        color: {
          value: new oe(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: Ne.shadow_vert,
      fragmentShader: Ne.shadow_frag
    }
  };
xn.physical = {
  uniforms: mt([xn.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatNormalScale: {
      value: new H(1, 1)
    },
    clearcoatNormalMap: {
      value: null
    },
    sheen: {
      value: new oe(0)
    },
    transparency: {
      value: 0
    }
  }]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};

function vm(e, t, n, r) {
  var i = new oe(0),
    a = 0,
    o, s, l = null,
    c = 0,
    u = null;

  function h(d, p, v, m) {
    var g = p.background,
      x = e.xr,
      w = x.getSession && x.getSession();
    if (w && w.environmentBlendMode === "additive" && (g = null), g === null ? f(i, a) : g && g.isColor && (f(g, 1), m = !0), (e.autoClear || m) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), g && (g.isCubeTexture || g.isWebGLCubeRenderTarget || g.mapping === xa)) {
      s === void 0 && (s = new et(new Qo(1, 1, 1), new At({
        type: "BackgroundCubeMaterial",
        uniforms: Yr(xn.cube.uniforms),
        vertexShader: xn.cube.vertexShader,
        fragmentShader: xn.cube.fragmentShader,
        side: ht,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })), s.geometry.deleteAttribute("normal"), s.geometry.deleteAttribute("uv"), s.onBeforeRender = function(b, T, D) {
        this.matrixWorld.copyPosition(D.matrixWorld)
      }, Object.defineProperty(s.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value
        }
      }), n.update(s));
      var S = g.isWebGLCubeRenderTarget ? g.texture : g;
      s.material.uniforms.envMap.value = S, s.material.uniforms.flipEnvMap.value = S.isCubeTexture ? -1 : 1, (l !== g || c !== S.version || u !== e.toneMapping) && (s.material.needsUpdate = !0, l = g, c = S.version, u = e.toneMapping), d.unshift(s, s.geometry, s.material, 0, 0, null)
    } else g && g.isTexture && (o === void 0 && (o = new et(new $r(2, 2), new At({
      type: "BackgroundMaterial",
      uniforms: Yr(xn.background.uniforms),
      vertexShader: xn.background.vertexShader,
      fragmentShader: xn.background.fragmentShader,
      side: ga,
      depthTest: !1,
      depthWrite: !1,
      fog: !1
    })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
      get: function() {
        return this.uniforms.t2D.value
      }
    }), n.update(o)), o.material.uniforms.t2D.value = g, g.matrixAutoUpdate === !0 && g.updateMatrix(), o.material.uniforms.uvTransform.value.copy(g.matrix), (l !== g || c !== g.version || u !== e.toneMapping) && (o.material.needsUpdate = !0, l = g, c = g.version, u = e.toneMapping), d.unshift(o, o.geometry, o.material, 0, 0, null))
  }

  function f(d, p) {
    t.buffers.color.setClear(d.r, d.g, d.b, p, r)
  }
  return {
    getClearColor: function() {
      return i
    },
    setClearColor: function(d, p) {
      i.set(d), a = p !== void 0 ? p : 1, f(i, a)
    },
    getClearAlpha: function() {
      return a
    },
    setClearAlpha: function(d) {
      a = d, f(i, a)
    },
    render: h
  }
}

function mm(e, t, n, r) {
  var i = r.isWebGL2,
    a;

  function o(c) {
    a = c
  }

  function s(c, u) {
    e.drawArrays(a, c, u), n.update(u, a)
  }

  function l(c, u, h, f) {
    if (f !== 0) {
      var d, p;
      if (i) d = e, p = "drawArraysInstanced";
      else if (d = t.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", d === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return
      }
      d[p](a, u, h, f), n.update(h, a, f)
    }
  }
  this.setMode = o, this.render = s, this.renderInstances = l
}

function gm(e, t, n) {
  var r;

  function i() {
    if (r !== void 0) return r;
    var T = t.get("EXT_texture_filter_anisotropic");
    return T !== null ? r = e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : r = 0, r
  }

  function a(T) {
    if (T === "highp") {
      if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
      T = "mediump"
    }
    return T === "mediump" && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
  }
  var o = typeof WebGL2RenderingContext < "u" && e instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && e instanceof WebGL2ComputeRenderingContext,
    s = n.precision !== void 0 ? n.precision : "highp",
    l = a(s);
  l !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", l, "instead."), s = l);
  var c = n.logarithmicDepthBuffer === !0,
    u = e.getParameter(34930),
    h = e.getParameter(35660),
    f = e.getParameter(3379),
    d = e.getParameter(34076),
    p = e.getParameter(34921),
    v = e.getParameter(36347),
    m = e.getParameter(36348),
    g = e.getParameter(36349),
    x = h > 0,
    w = o || !!t.get("OES_texture_float"),
    S = x && w,
    b = o ? e.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    getMaxAnisotropy: i,
    getMaxPrecision: a,
    precision: s,
    logarithmicDepthBuffer: c,
    maxTextures: u,
    maxVertexTextures: h,
    maxTextureSize: f,
    maxCubemapSize: d,
    maxAttributes: p,
    maxVertexUniforms: v,
    maxVaryings: m,
    maxFragmentUniforms: g,
    vertexTextures: x,
    floatFragmentTextures: w,
    floatVertexTextures: S,
    maxSamples: b
  }
}

function ym() {
  var e = this,
    t = null,
    n = 0,
    r = !1,
    i = !1,
    a = new nn,
    o = new gt,
    s = {
      value: null,
      needsUpdate: !1
    };
  this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, h, f) {
    var d = u.length !== 0 || h || n !== 0 || r;
    return r = h, t = c(u, f, 0), n = u.length, d
  }, this.beginShadows = function() {
    i = !0, c(null)
  }, this.endShadows = function() {
    i = !1, l()
  }, this.setState = function(u, h, f, d, p, v) {
    if (!r || u === null || u.length === 0 || i && !f) i ? c(null) : l();
    else {
      var m = i ? 0 : n,
        g = m * 4,
        x = p.clippingState || null;
      s.value = x, x = c(u, d, g, v);
      for (var w = 0; w !== g; ++w) x[w] = t[w];
      p.clippingState = x, this.numIntersection = h ? this.numPlanes : 0, this.numPlanes += m
    }
  };

  function l() {
    s.value !== t && (s.value = t, s.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
  }

  function c(u, h, f, d) {
    var p = u !== null ? u.length : 0,
      v = null;
    if (p !== 0) {
      if (v = s.value, d !== !0 || v === null) {
        var m = f + p * 4,
          g = h.matrixWorldInverse;
        o.getNormalMatrix(g), (v === null || v.length < m) && (v = new Float32Array(m));
        for (var x = 0, w = f; x !== p; ++x, w += 4) a.copy(u[x]).applyMatrix4(g, o), a.normal.toArray(v, w), v[w + 3] = a.constant
      }
      s.value = v, s.needsUpdate = !0
    }
    return e.numPlanes = p, e.numIntersection = 0, v
  }
}

function xm(e) {
  var t = {};
  return {
    get: function(n) {
      if (t[n] !== void 0) return t[n];
      var r;
      switch (n) {
        case "WEBGL_depth_texture":
          r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          r = e.getExtension(n)
      }
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = r, r
    }
  }
}

function _m(e, t, n) {
  var r = new WeakMap,
    i = new WeakMap;

  function a(u) {
    var h = u.target,
      f = r.get(h);
    f.index !== null && t.remove(f.index);
    for (var d in f.attributes) t.remove(f.attributes[d]);
    h.removeEventListener("dispose", a), r.delete(h);
    var p = i.get(f);
    p && (t.remove(p), i.delete(f)), n.memory.geometries--
  }

  function o(u, h) {
    var f = r.get(h);
    return f || (h.addEventListener("dispose", a), h.isBufferGeometry ? f = h : h.isGeometry && (h._bufferGeometry === void 0 && (h._bufferGeometry = new se().setFromObject(u)), f = h._bufferGeometry), r.set(h, f), n.memory.geometries++, f)
  }

  function s(u) {
    var h = u.index,
      f = u.attributes;
    h !== null && t.update(h, 34963);
    for (var d in f) t.update(f[d], 34962);
    var p = u.morphAttributes;
    for (var d in p)
      for (var v = p[d], m = 0, g = v.length; m < g; m++) t.update(v[m], 34962)
  }

  function l(u) {
    var h = [],
      f = u.index,
      d = u.attributes.position,
      p = 0;
    if (f !== null) {
      var v = f.array;
      p = f.version;
      for (var m = 0, g = v.length; m < g; m += 3) {
        var x = v[m + 0],
          w = v[m + 1],
          S = v[m + 2];
        h.push(x, w, w, S, S, x)
      }
    } else {
      var v = d.array;
      p = d.version;
      for (var m = 0, g = v.length / 3 - 1; m < g; m += 3) {
        var x = m + 0,
          w = m + 1,
          S = m + 2;
        h.push(x, w, w, S, S, x)
      }
    }
    var b = new(Yu(h) > 65535 ? zi : Ui)(h, 1);
    b.version = p, t.update(b, 34963);
    var T = i.get(u);
    T && t.remove(T), i.set(u, b)
  }

  function c(u) {
    var h = i.get(u);
    if (h) {
      var f = u.index;
      f !== null && h.version < f.version && l(u)
    } else l(u);
    return i.get(u)
  }
  return {
    get: o,
    update: s,
    getWireframeAttribute: c
  }
}

function bm(e, t, n, r) {
  var i = r.isWebGL2,
    a;

  function o(f) {
    a = f
  }
  var s, l;

  function c(f) {
    s = f.type, l = f.bytesPerElement
  }

  function u(f, d) {
    e.drawElements(a, d, s, f * l), n.update(d, a)
  }

  function h(f, d, p, v) {
    if (v !== 0) {
      var m, g;
      if (i) m = e, g = "drawElementsInstanced";
      else if (m = t.get("ANGLE_instanced_arrays"), g = "drawElementsInstancedANGLE", m === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return
      }
      m[g](a, p, s, d * l, v), n.update(p, a, v)
    }
  }
  this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = h
}

function Mm(e) {
  var t = {
      geometries: 0,
      textures: 0
    },
    n = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };

  function r(a, o, s) {
    switch (s = s || 1, n.calls++, o) {
      case 4:
        n.triangles += s * (a / 3);
        break;
      case 1:
        n.lines += s * (a / 2);
        break;
      case 3:
        n.lines += s * (a - 1);
        break;
      case 2:
        n.lines += s * a;
        break;
      case 0:
        n.points += s * a;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break
    }
  }

  function i() {
    n.frame++, n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: i,
    update: r
  }
}

function wm(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1])
}

function Sm(e) {
  var t = {},
    n = new Float32Array(8);

  function r(i, a, o, s) {
    var l = i.morphTargetInfluences,
      c = l === void 0 ? 0 : l.length,
      u = t[a.id];
    if (u === void 0) {
      u = [];
      for (var h = 0; h < c; h++) u[h] = [h, 0];
      t[a.id] = u
    }
    for (var f = o.morphTargets && a.morphAttributes.position, d = o.morphNormals && a.morphAttributes.normal, h = 0; h < c; h++) {
      var p = u[h];
      p[1] !== 0 && (f && a.deleteAttribute("morphTarget" + h), d && a.deleteAttribute("morphNormal" + h))
    }
    for (var h = 0; h < c; h++) {
      var p = u[h];
      p[0] = h, p[1] = l[h]
    }
    u.sort(wm);
    for (var v = 0, h = 0; h < 8; h++) {
      var p = u[h];
      if (p) {
        var m = p[0],
          g = p[1];
        if (g) {
          f && a.setAttribute("morphTarget" + h, f[m]), d && a.setAttribute("morphNormal" + h, d[m]), n[h] = g, v += g;
          continue
        }
      }
      n[h] = 0
    }
    var x = a.morphTargetsRelative ? 1 : 1 - v;
    s.getUniforms().setValue(e, "morphTargetBaseInfluence", x), s.getUniforms().setValue(e, "morphTargetInfluences", n)
  }
  return {
    update: r
  }
}

function Em(e, t, n, r) {
  var i = new WeakMap;

  function a(s) {
    var l = r.render.frame,
      c = s.geometry,
      u = t.get(s, c);
    return i.get(u) !== l && (c.isGeometry && u.updateFromObject(s), t.update(u), i.set(u, l)), s.isInstancedMesh && n.update(s.instanceMatrix, 34962), u
  }

  function o() {
    i = new WeakMap
  }
  return {
    update: a,
    dispose: o
  }
}

function kn(e, t, n, r, i, a, o, s, l, c) {
  e = e !== void 0 ? e : [], t = t !== void 0 ? t : Il, o = o !== void 0 ? o : zn, Ze.call(this, e, t, n, r, i, a, o, s, l, c), this.flipY = !1
}
kn.prototype = Object.create(Ze.prototype);
kn.prototype.constructor = kn;
kn.prototype.isCubeTexture = !0;
Object.defineProperty(kn.prototype, "images", {
  get: function() {
    return this.image
  },
  set: function(e) {
    this.image = e
  }
});

function Hi(e, t, n, r) {
  Ze.call(this, null), this.image = {
    data: e || null,
    width: t || 1,
    height: n || 1,
    depth: r || 1
  }, this.magFilter = lt, this.minFilter = lt, this.wrapR = Tt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
}
Hi.prototype = Object.create(Ze.prototype);
Hi.prototype.constructor = Hi;
Hi.prototype.isDataTexture2DArray = !0;

function Vi(e, t, n, r) {
  Ze.call(this, null), this.image = {
    data: e || null,
    width: t || 1,
    height: n || 1,
    depth: r || 1
  }, this.magFilter = lt, this.minFilter = lt, this.wrapR = Tt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
}
Vi.prototype = Object.create(Ze.prototype);
Vi.prototype.constructor = Vi;
Vi.prototype.isDataTexture3D = !0;
var $u = new Ze,
  Tm = new Hi,
  Am = new Vi,
  Qu = new kn,
  Ec = [],
  Tc = [],
  Ac = new Float32Array(16),
  Lc = new Float32Array(9),
  Rc = new Float32Array(4);

function mi(e, t, n) {
  var r = e[0];
  if (r <= 0 || r > 0) return e;
  var i = t * n,
    a = Ec[i];
  if (a === void 0 && (a = new Float32Array(i), Ec[i] = a), t !== 0) {
    r.toArray(a, 0);
    for (var o = 1, s = 0; o !== t; ++o) s += n, e[o].toArray(a, s)
  }
  return a
}

function Vt(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] !== t[n]) return !1;
  return !0
}

function It(e, t) {
  for (var n = 0, r = t.length; n < r; n++) e[n] = t[n]
}

function Ku(e, t) {
  var n = Tc[t];
  n === void 0 && (n = new Int32Array(t), Tc[t] = n);
  for (var r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
  return n
}

function Lm(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
}

function Rm(e, t) {
  var n = this.cache;
  if (t.x !== void 0)(n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Vt(n, t)) return;
    e.uniform2fv(this.addr, t), It(n, t)
  }
}

function Cm(e, t) {
  var n = this.cache;
  if (t.x !== void 0)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else if (t.r !== void 0)(n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
  else {
    if (Vt(n, t)) return;
    e.uniform3fv(this.addr, t), It(n, t)
  }
}

function Pm(e, t) {
  var n = this.cache;
  if (t.x !== void 0)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Vt(n, t)) return;
    e.uniform4fv(this.addr, t), It(n, t)
  }
}

function Dm(e, t) {
  var n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (Vt(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), It(n, t)
  } else {
    if (Vt(n, r)) return;
    Rc.set(r), e.uniformMatrix2fv(this.addr, !1, Rc), It(n, r)
  }
}

function Om(e, t) {
  var n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (Vt(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), It(n, t)
  } else {
    if (Vt(n, r)) return;
    Lc.set(r), e.uniformMatrix3fv(this.addr, !1, Lc), It(n, r)
  }
}

function Im(e, t) {
  var n = this.cache,
    r = t.elements;
  if (r === void 0) {
    if (Vt(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), It(n, t)
  } else {
    if (Vt(n, r)) return;
    Ac.set(r), e.uniformMatrix4fv(this.addr, !1, Ac), It(n, r)
  }
}

function Nm(e, t, n) {
  var r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTexture2D(t || $u, i)
}

function Fm(e, t, n) {
  var r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Tm, i)
}

function Bm(e, t, n) {
  var r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Am, i)
}

function Um(e, t, n) {
  var r = this.cache,
    i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTextureCube(t || Qu, i)
}

function zm(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
}

function Gm(e, t) {
  var n = this.cache;
  Vt(n, t) || (e.uniform2iv(this.addr, t), It(n, t))
}

function Hm(e, t) {
  var n = this.cache;
  Vt(n, t) || (e.uniform3iv(this.addr, t), It(n, t))
}

function Vm(e, t) {
  var n = this.cache;
  Vt(n, t) || (e.uniform4iv(this.addr, t), It(n, t))
}

function km(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t)
}

function Wm(e) {
  switch (e) {
    case 5126:
      return Lm;
    case 35664:
      return Rm;
    case 35665:
      return Cm;
    case 35666:
      return Pm;
    case 35674:
      return Dm;
    case 35675:
      return Om;
    case 35676:
      return Im;
    case 5124:
    case 35670:
      return zm;
    case 35667:
    case 35671:
      return Gm;
    case 35668:
    case 35672:
      return Hm;
    case 35669:
    case 35673:
      return Vm;
    case 5125:
      return km;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Nm;
    case 35679:
    case 36299:
    case 36307:
      return Bm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Um;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fm
  }
}

function jm(e, t) {
  e.uniform1fv(this.addr, t)
}

function Xm(e, t) {
  e.uniform1iv(this.addr, t)
}

function qm(e, t) {
  e.uniform2iv(this.addr, t)
}

function Ym(e, t) {
  e.uniform3iv(this.addr, t)
}

function Zm(e, t) {
  e.uniform4iv(this.addr, t)
}

function Jm(e, t) {
  var n = mi(t, this.size, 2);
  e.uniform2fv(this.addr, n)
}

function $m(e, t) {
  var n = mi(t, this.size, 3);
  e.uniform3fv(this.addr, n)
}

function Qm(e, t) {
  var n = mi(t, this.size, 4);
  e.uniform4fv(this.addr, n)
}

function Km(e, t) {
  var n = mi(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n)
}

function eg(e, t) {
  var n = mi(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n)
}

function tg(e, t) {
  var n = mi(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n)
}

function ng(e, t, n) {
  var r = t.length,
    i = Ku(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a) n.safeSetTexture2D(t[a] || $u, i[a])
}

function rg(e, t, n) {
  var r = t.length,
    i = Ku(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a) n.safeSetTextureCube(t[a] || Qu, i[a])
}

function ig(e) {
  switch (e) {
    case 5126:
      return jm;
    case 35664:
      return Jm;
    case 35665:
      return $m;
    case 35666:
      return Qm;
    case 35674:
      return Km;
    case 35675:
      return eg;
    case 35676:
      return tg;
    case 5124:
    case 35670:
      return Xm;
    case 35667:
    case 35671:
      return qm;
    case 35668:
    case 35672:
      return Ym;
    case 35669:
    case 35673:
      return Zm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ng;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return rg
  }
}

function ag(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.setValue = Wm(t.type)
}

function eh(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = ig(t.type)
}
eh.prototype.updateCache = function(e) {
  var t = this.cache;
  e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), It(t, e)
};

function th(e) {
  this.id = e, this.seq = [], this.map = {}
}
th.prototype.setValue = function(e, t, n) {
  for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
    var o = r[i];
    o.setValue(e, t[o.id], n)
  }
};
var ws = /([\w\d_]+)(\])?(\[|\.)?/g;

function Cc(e, t) {
  e.seq.push(t), e.map[t.id] = t
}

function og(e, t, n) {
  var r = e.name,
    i = r.length;
  for (ws.lastIndex = 0;;) {
    var a = ws.exec(r),
      o = ws.lastIndex,
      s = a[1],
      l = a[2] === "]",
      c = a[3];
    if (l && (s = s | 0), c === void 0 || c === "[" && o + 2 === i) {
      Cc(n, c === void 0 ? new ag(s, e, t) : new eh(s, e, t));
      break
    } else {
      var u = n.map,
        h = u[s];
      h === void 0 && (h = new th(s), Cc(n, h)), n = h
    }
  }
}

function Gn(e, t) {
  this.seq = [], this.map = {};
  for (var n = e.getProgramParameter(t, 35718), r = 0; r < n; ++r) {
    var i = e.getActiveUniform(t, r),
      a = e.getUniformLocation(t, i.name);
    og(i, a, this)
  }
}
Gn.prototype.setValue = function(e, t, n, r) {
  var i = this.map[t];
  i !== void 0 && i.setValue(e, n, r)
};
Gn.prototype.setOptional = function(e, t, n) {
  var r = t[n];
  r !== void 0 && this.setValue(e, n, r)
};
Gn.upload = function(e, t, n, r) {
  for (var i = 0, a = t.length; i !== a; ++i) {
    var o = t[i],
      s = n[o.id];
    s.needsUpdate !== !1 && o.setValue(e, s.value, r)
  }
};
Gn.seqWithValue = function(e, t) {
  for (var n = [], r = 0, i = e.length; r !== i; ++r) {
    var a = e[r];
    a.id in t && n.push(a)
  }
  return n
};

function Pc(e, t, n) {
  var r = e.createShader(t);
  return e.shaderSource(r, n), e.compileShader(r), r
}
var sg = 0;

function lg(e) {
  for (var t = e.split(`
`), n = 0; n < t.length; n++) t[n] = n + 1 + ": " + t[n];
  return t.join(`
`)
}

function nh(e) {
  switch (e) {
    case Ot:
      return ["Linear", "( value )"];
    case Ul:
      return ["sRGB", "( value )"];
    case zl:
      return ["RGBE", "( value )"];
    case ku:
      return ["RGBM", "( value, 7.0 )"];
    case Wu:
      return ["RGBM", "( value, 16.0 )"];
    case ju:
      return ["RGBD", "( value, 256.0 )"];
    case Vu:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case Td:
      return ["LogLuv", "( value )"];
    default:
      throw new Error("unsupported encoding: " + e)
  }
}

function Dc(e, t, n) {
  var r = e.getShaderParameter(t, 35713),
    i = e.getShaderInfoLog(t).trim();
  if (r && i === "") return "";
  var a = e.getShaderSource(t);
  return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + `
` + i + lg(a)
}

function Si(e, t) {
  var n = nh(t);
  return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
}

function cg(e, t) {
  var n = nh(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
}

function ug(e, t) {
  var n;
  switch (t) {
    case Dl:
      n = "Linear";
      break;
    case Tf:
      n = "Reinhard";
      break;
    case Af:
      n = "Uncharted2";
      break;
    case Lf:
      n = "OptimizedCineon";
      break;
    case Rf:
      n = "ACESFilmic";
      break;
    default:
      throw new Error("unsupported toneMapping: " + t)
  }
  return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
}

function hg(e) {
  var t = [e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || e.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
  return t.filter(Ci).join(`
`)
}

function fg(e) {
  var t = [];
  for (var n in e) {
    var r = e[n];
    r !== !1 && t.push("#define " + n + " " + r)
  }
  return t.join(`
`)
}

function dg(e, t) {
  for (var n = {}, r = e.getProgramParameter(t, 35721), i = 0; i < r; i++) {
    var a = e.getActiveAttrib(t, i),
      o = a.name;
    n[o] = e.getAttribLocation(t, o)
  }
  return n
}

function Ci(e) {
  return e !== ""
}

function Oc(e, t) {
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}

function Ic(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}
var pg = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Hs(e) {
  return e.replace(pg, vg)
}

function vg(e, t) {
  var n = Ne[t];
  if (n === void 0) throw new Error("Can not resolve #include <" + t + ">");
  return Hs(n)
}
var mg = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  gg = /#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;

function Nc(e) {
  return e.replace(gg, rh).replace(mg, yg)
}

function yg(e, t, n, r) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), rh(e, t, n, r)
}

function rh(e, t, n, r) {
  for (var i = "", a = parseInt(t); a < parseInt(n); a++) i += r.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  return i
}

function Fc(e) {
  var t = "precision " + e.precision + ` float;
precision ` + e.precision + " int;";
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t
}

function xg(e) {
  var t = "SHADOWMAP_TYPE_BASIC";
  return e.shadowMapType === Nu ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === rf ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === Ri && (t = "SHADOWMAP_TYPE_VSM"), t
}

function _g(e) {
  var t = "ENVMAP_TYPE_CUBE";
  if (e.envMap) switch (e.envMapMode) {
    case Il:
    case Nl:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case xa:
    case Bl:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
    case zu:
    case Fl:
      t = "ENVMAP_TYPE_EQUIREC";
      break;
    case Gu:
      t = "ENVMAP_TYPE_SPHERE";
      break
  }
  return t
}

function bg(e) {
  var t = "ENVMAP_MODE_REFLECTION";
  if (e.envMap) switch (e.envMapMode) {
    case Nl:
    case Fl:
      t = "ENVMAP_MODE_REFRACTION";
      break
  }
  return t
}

function Mg(e) {
  var t = "ENVMAP_BLENDING_NONE";
  if (e.envMap) switch (e.combine) {
    case Yo:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case Sf:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case Ef:
      t = "ENVMAP_BLENDING_ADD";
      break
  }
  return t
}

function wg(e, t, n) {
  var r = e.getContext(),
    i = n.defines,
    a = n.vertexShader,
    o = n.fragmentShader,
    s = xg(n),
    l = _g(n),
    c = bg(n),
    u = Mg(n),
    h = e.gammaFactor > 0 ? e.gammaFactor : 1,
    f = n.isWebGL2 ? "" : hg(n),
    d = fg(i),
    p = r.createProgram(),
    v, m;
  if (n.isRawShaderMaterial ? (v = [d].filter(Ci).join(`
`), v.length > 0 && (v += `
`), m = [f, d].filter(Ci).join(`
`), m.length > 0 && (m += `
`)) : (v = [Fc(n), "#define SHADER_NAME " + n.shaderName, d, n.instancing ? "#define USE_INSTANCING" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + h, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + s : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ci).join(`
`), m = [f, Fc(n), "#define SHADER_NAME " + n.shaderName, d, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + h, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + s : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== ao ? "#define TONE_MAPPING" : "", n.toneMapping !== ao ? Ne.tonemapping_pars_fragment : "", n.toneMapping !== ao ? ug("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.outputEncoding || n.mapEncoding || n.matcapEncoding || n.envMapEncoding || n.emissiveMapEncoding || n.lightMapEncoding ? Ne.encodings_pars_fragment : "", n.mapEncoding ? Si("mapTexelToLinear", n.mapEncoding) : "", n.matcapEncoding ? Si("matcapTexelToLinear", n.matcapEncoding) : "", n.envMapEncoding ? Si("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMapEncoding ? Si("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMapEncoding ? Si("lightMapTexelToLinear", n.lightMapEncoding) : "", n.outputEncoding ? cg("linearToOutputTexel", n.outputEncoding) : "", n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", `
`].filter(Ci).join(`
`)), a = Hs(a), a = Oc(a, n), a = Ic(a, n), o = Hs(o), o = Oc(o, n), o = Ic(o, n), a = Nc(a), o = Nc(o), n.isWebGL2 && !n.isRawShaderMaterial) {
    var g = !1,
      x = /^\s*#version\s+300\s+es\s*\n/;
    n.isShaderMaterial && a.match(x) !== null && o.match(x) !== null && (g = !0, a = a.replace(x, ""), o = o.replace(x, "")), v = [`#version 300 es
`, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + v, m = [`#version 300 es
`, "#define varying in", g ? "" : "out highp vec4 pc_fragColor;", g ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + m
  }
  var w = v + a,
    S = m + o,
    b = Pc(r, 35633, w),
    T = Pc(r, 35632, S);
  if (r.attachShader(p, b), r.attachShader(p, T), n.index0AttributeName !== void 0 ? r.bindAttribLocation(p, 0, n.index0AttributeName) : n.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"), r.linkProgram(p), e.debug.checkShaderErrors) {
    var D = r.getProgramInfoLog(p).trim(),
      N = r.getShaderInfoLog(b).trim(),
      C = r.getShaderInfoLog(T).trim(),
      B = !0,
      I = !0;
    if (r.getProgramParameter(p, 35714) === !1) {
      B = !1;
      var F = Dc(r, b, "vertex"),
        U = Dc(r, T, "fragment");
      console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(p, 35715), "gl.getProgramInfoLog", D, F, U)
    } else D !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", D) : (N === "" || C === "") && (I = !1);
    I && (this.diagnostics = {
      runnable: B,
      programLog: D,
      vertexShader: {
        log: N,
        prefix: v
      },
      fragmentShader: {
        log: C,
        prefix: m
      }
    })
  }
  r.detachShader(p, b), r.detachShader(p, T), r.deleteShader(b), r.deleteShader(T);
  var z;
  this.getUniforms = function() {
    return z === void 0 && (z = new Gn(r, p)), z
  };
  var O;
  return this.getAttributes = function() {
    return O === void 0 && (O = dg(r, p)), O
  }, this.destroy = function() {
    r.deleteProgram(p), this.program = void 0
  }, this.name = n.shaderName, this.id = sg++, this.cacheKey = t, this.usedTimes = 1, this.program = p, this.vertexShader = b, this.fragmentShader = T, this
}

function Sg(e, t, n) {
  var r = [],
    i = n.isWebGL2,
    a = n.logarithmicDepthBuffer,
    o = n.floatVertexTextures,
    s = n.precision,
    l = n.maxVertexUniforms,
    c = n.vertexTextures,
    u = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    },
    h = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"];

  function f(v, m) {
    var g;
    if (m) {
      var x = xn[m];
      g = {
        name: v.type,
        uniforms: Xd.clone(x.uniforms),
        vertexShader: x.vertexShader,
        fragmentShader: x.fragmentShader
      }
    } else g = {
      name: v.type,
      uniforms: v.uniforms,
      vertexShader: v.vertexShader,
      fragmentShader: v.fragmentShader
    };
    return g
  }

  function d(v) {
    var m = v.skeleton,
      g = m.bones;
    if (o) return 1024;
    var x = l,
      w = Math.floor((x - 20) / 4),
      S = Math.min(w, g.length);
    return S < g.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + g.length + " bones. This GPU supports " + S + "."), 0) : S
  }

  function p(v) {
    var m;
    return v ? v.isTexture ? m = v.encoding : v.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), m = v.texture.encoding) : m = Ot, m
  }
  this.getParameters = function(v, m, g, x, w, S, b) {
    var T = x.fog,
      D = v.isMeshStandardMaterial ? x.environment : null,
      N = v.envMap || D,
      C = u[v.type],
      B = b.isSkinnedMesh ? d(b) : 0;
    v.precision !== null && (s = n.getMaxPrecision(v.precision), s !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", s, "instead."));
    var I = f(v, C);
    v.onBeforeCompile(I, e);
    var F = e.getRenderTarget(),
      U = {
        isWebGL2: i,
        shaderID: C,
        shaderName: I.name,
        uniforms: I.uniforms,
        vertexShader: I.vertexShader,
        fragmentShader: I.fragmentShader,
        defines: v.defines,
        isRawShaderMaterial: v.isRawShaderMaterial,
        isShaderMaterial: v.isShaderMaterial,
        precision: s,
        instancing: b.isInstancedMesh === !0,
        supportsVertexTextures: c,
        outputEncoding: F !== null ? p(F.texture) : e.outputEncoding,
        map: !!v.map,
        mapEncoding: p(v.map),
        matcap: !!v.matcap,
        matcapEncoding: p(v.matcap),
        envMap: !!N,
        envMapMode: N && N.mapping,
        envMapEncoding: p(N),
        envMapCubeUV: !!N && (N.mapping === xa || N.mapping === Bl),
        lightMap: !!v.lightMap,
        lightMapEncoding: p(v.lightMap),
        aoMap: !!v.aoMap,
        emissiveMap: !!v.emissiveMap,
        emissiveMapEncoding: p(v.emissiveMap),
        bumpMap: !!v.bumpMap,
        normalMap: !!v.normalMap,
        objectSpaceNormalMap: v.normalMapType === Rd,
        tangentSpaceNormalMap: v.normalMapType === di,
        clearcoatMap: !!v.clearcoatMap,
        clearcoatRoughnessMap: !!v.clearcoatRoughnessMap,
        clearcoatNormalMap: !!v.clearcoatNormalMap,
        displacementMap: !!v.displacementMap,
        roughnessMap: !!v.roughnessMap,
        metalnessMap: !!v.metalnessMap,
        specularMap: !!v.specularMap,
        alphaMap: !!v.alphaMap,
        gradientMap: !!v.gradientMap,
        sheen: !!v.sheen,
        combine: v.combine,
        vertexTangents: v.normalMap && v.vertexTangents,
        vertexColors: v.vertexColors,
        vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.displacementMap,
        uvsVertexOnly: !(v.map || v.bumpMap || v.normalMap || v.specularMap || v.alphaMap || v.emissiveMap || v.roughnessMap || v.metalnessMap || v.clearcoatNormalMap) && !!v.displacementMap,
        fog: !!T,
        useFog: v.fog,
        fogExp2: T && T.isFogExp2,
        flatShading: v.flatShading,
        sizeAttenuation: v.sizeAttenuation,
        logarithmicDepthBuffer: a,
        skinning: v.skinning && B > 0,
        maxBones: B,
        useVertexTexture: o,
        morphTargets: v.morphTargets,
        morphNormals: v.morphNormals,
        maxMorphTargets: e.maxMorphTargets,
        maxMorphNormals: e.maxMorphNormals,
        numDirLights: m.directional.length,
        numPointLights: m.point.length,
        numSpotLights: m.spot.length,
        numRectAreaLights: m.rectArea.length,
        numHemiLights: m.hemi.length,
        numDirLightShadows: m.directionalShadowMap.length,
        numPointLightShadows: m.pointShadowMap.length,
        numSpotLightShadows: m.spotShadowMap.length,
        numClippingPlanes: w,
        numClipIntersection: S,
        dithering: v.dithering,
        shadowMapEnabled: e.shadowMap.enabled && g.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: v.toneMapped ? e.toneMapping : ao,
        physicallyCorrectLights: e.physicallyCorrectLights,
        premultipliedAlpha: v.premultipliedAlpha,
        alphaTest: v.alphaTest,
        doubleSided: v.side === ya,
        flipSided: v.side === ht,
        depthPacking: v.depthPacking !== void 0 ? v.depthPacking : !1,
        index0AttributeName: v.index0AttributeName,
        extensionDerivatives: v.extensions && v.extensions.derivatives,
        extensionFragDepth: v.extensions && v.extensions.fragDepth,
        extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
        extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
        rendererExtensionFragDepth: i || t.get("EXT_frag_depth") !== null,
        rendererExtensionDrawBuffers: i || t.get("WEBGL_draw_buffers") !== null,
        rendererExtensionShaderTextureLod: i || t.get("EXT_shader_texture_lod") !== null,
        onBeforeCompile: v.onBeforeCompile
      };
    return U
  }, this.getProgramCacheKey = function(v) {
    var m = [];
    if (v.shaderID ? m.push(v.shaderID) : (m.push(v.fragmentShader), m.push(v.vertexShader)), v.defines !== void 0)
      for (var g in v.defines) m.push(g), m.push(v.defines[g]);
    if (v.isRawShaderMaterial === void 0) {
      for (var x = 0; x < h.length; x++) m.push(v[h[x]]);
      m.push(e.outputEncoding), m.push(e.gammaFactor)
    }
    return m.push(v.onBeforeCompile.toString()), m.join()
  }, this.acquireProgram = function(v, m) {
    for (var g, x = 0, w = r.length; x < w; x++) {
      var S = r[x];
      if (S.cacheKey === m) {
        g = S, ++g.usedTimes;
        break
      }
    }
    return g === void 0 && (g = new wg(e, m, v), r.push(g)), g
  }, this.releaseProgram = function(v) {
    if (--v.usedTimes === 0) {
      var m = r.indexOf(v);
      r[m] = r[r.length - 1], r.pop(), v.destroy()
    }
  }, this.programs = r
}

function Eg() {
  var e = new WeakMap;

  function t(a) {
    var o = e.get(a);
    return o === void 0 && (o = {}, e.set(a, o)), o
  }

  function n(a) {
    e.delete(a)
  }

  function r(a, o, s) {
    e.get(a)[o] = s
  }

  function i() {
    e = new WeakMap
  }
  return {
    get: t,
    remove: n,
    update: r,
    dispose: i
  }
}

function Tg(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
}

function Ag(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
}

function Bc() {
  var e = [],
    t = 0,
    n = [],
    r = [],
    i = {
      id: -1
    };

  function a() {
    t = 0, n.length = 0, r.length = 0
  }

  function o(h, f, d, p, v, m) {
    var g = e[t];
    return g === void 0 ? (g = {
      id: h.id,
      object: h,
      geometry: f,
      material: d,
      program: d.program || i,
      groupOrder: p,
      renderOrder: h.renderOrder,
      z: v,
      group: m
    }, e[t] = g) : (g.id = h.id, g.object = h, g.geometry = f, g.material = d, g.program = d.program || i, g.groupOrder = p, g.renderOrder = h.renderOrder, g.z = v, g.group = m), t++, g
  }

  function s(h, f, d, p, v, m) {
    var g = o(h, f, d, p, v, m);
    (d.transparent === !0 ? r : n).push(g)
  }

  function l(h, f, d, p, v, m) {
    var g = o(h, f, d, p, v, m);
    (d.transparent === !0 ? r : n).unshift(g)
  }

  function c(h, f) {
    n.length > 1 && n.sort(h || Tg), r.length > 1 && r.sort(f || Ag)
  }

  function u() {
    for (var h = t, f = e.length; h < f; h++) {
      var d = e[h];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.program = null, d.group = null
    }
  }
  return {
    opaque: n,
    transparent: r,
    init: a,
    push: s,
    unshift: l,
    finish: u,
    sort: c
  }
}

function Lg() {
  var e = new WeakMap;

  function t(i) {
    var a = i.target;
    a.removeEventListener("dispose", t), e.delete(a)
  }

  function n(i, a) {
    var o = e.get(i),
      s;
    return o === void 0 ? (s = new Bc, e.set(i, new WeakMap), e.get(i).set(a, s), i.addEventListener("dispose", t)) : (s = o.get(a), s === void 0 && (s = new Bc, o.set(a, s))), s
  }

  function r() {
    e = new WeakMap
  }
  return {
    get: n,
    dispose: r
  }
}

function Rg() {
  var e = {};
  return {
    get: function(t) {
      if (e[t.id] !== void 0) return e[t.id];
      var n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            direction: new M,
            color: new oe
          };
          break;
        case "SpotLight":
          n = {
            position: new M,
            direction: new M,
            color: new oe,
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          n = {
            position: new M,
            color: new oe,
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new M,
            skyColor: new oe,
            groundColor: new oe
          };
          break;
        case "RectAreaLight":
          n = {
            color: new oe,
            position: new M,
            halfWidth: new M,
            halfHeight: new M
          };
          break
      }
      return e[t.id] = n, n
    }
  }
}

function Cg() {
  var e = {};
  return {
    get: function(t) {
      if (e[t.id] !== void 0) return e[t.id];
      var n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H
          };
          break;
        case "SpotLight":
          n = {
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H
          };
          break;
        case "PointLight":
          n = {
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new H,
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break
      }
      return e[t.id] = n, n
    }
  }
}
var Pg = 0;

function Dg(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0)
}

function Og() {
  for (var e = new Rg, t = Cg(), n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    }, r = 0; r < 9; r++) n.probe.push(new M);
  var i = new M,
    a = new De,
    o = new De;

  function s(l, c, u) {
    for (var h = 0, f = 0, d = 0, p = 0; p < 9; p++) n.probe[p].set(0, 0, 0);
    var v = 0,
      m = 0,
      g = 0,
      x = 0,
      w = 0,
      S = 0,
      b = 0,
      T = 0,
      D = u.matrixWorldInverse;
    l.sort(Dg);
    for (var p = 0, N = l.length; p < N; p++) {
      var C = l[p],
        B = C.color,
        I = C.intensity,
        F = C.distance,
        U = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight) h += B.r * I, f += B.g * I, d += B.b * I;
      else if (C.isLightProbe)
        for (var z = 0; z < 9; z++) n.probe[z].addScaledVector(C.sh.coefficients[z], I);
      else if (C.isDirectionalLight) {
        var O = e.get(C);
        if (O.color.copy(C.color).multiplyScalar(C.intensity), O.direction.setFromMatrixPosition(C.matrixWorld), i.setFromMatrixPosition(C.target.matrixWorld), O.direction.sub(i), O.direction.transformDirection(D), C.castShadow) {
          var k = C.shadow,
            j = t.get(C);
          j.shadowBias = k.bias, j.shadowRadius = k.radius, j.shadowMapSize = k.mapSize, n.directionalShadow[v] = j, n.directionalShadowMap[v] = U, n.directionalShadowMatrix[v] = C.shadow.matrix, S++
        }
        n.directional[v] = O, v++
      } else if (C.isSpotLight) {
        var O = e.get(C);
        if (O.position.setFromMatrixPosition(C.matrixWorld), O.position.applyMatrix4(D), O.color.copy(B).multiplyScalar(I), O.distance = F, O.direction.setFromMatrixPosition(C.matrixWorld), i.setFromMatrixPosition(C.target.matrixWorld), O.direction.sub(i), O.direction.transformDirection(D), O.coneCos = Math.cos(C.angle), O.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), O.decay = C.decay, C.castShadow) {
          var k = C.shadow,
            j = t.get(C);
          j.shadowBias = k.bias, j.shadowRadius = k.radius, j.shadowMapSize = k.mapSize, n.spotShadow[g] = j, n.spotShadowMap[g] = U, n.spotShadowMatrix[g] = C.shadow.matrix, T++
        }
        n.spot[g] = O, g++
      } else if (C.isRectAreaLight) {
        var O = e.get(C);
        O.color.copy(B).multiplyScalar(I), O.position.setFromMatrixPosition(C.matrixWorld), O.position.applyMatrix4(D), o.identity(), a.copy(C.matrixWorld), a.premultiply(D), o.extractRotation(a), O.halfWidth.set(C.width * .5, 0, 0), O.halfHeight.set(0, C.height * .5, 0), O.halfWidth.applyMatrix4(o), O.halfHeight.applyMatrix4(o), n.rectArea[x] = O, x++
      } else if (C.isPointLight) {
        var O = e.get(C);
        if (O.position.setFromMatrixPosition(C.matrixWorld), O.position.applyMatrix4(D), O.color.copy(C.color).multiplyScalar(C.intensity), O.distance = C.distance, O.decay = C.decay, C.castShadow) {
          var k = C.shadow,
            j = t.get(C);
          j.shadowBias = k.bias, j.shadowRadius = k.radius, j.shadowMapSize = k.mapSize, j.shadowCameraNear = k.camera.near, j.shadowCameraFar = k.camera.far, n.pointShadow[m] = j, n.pointShadowMap[m] = U, n.pointShadowMatrix[m] = C.shadow.matrix, b++
        }
        n.point[m] = O, m++
      } else if (C.isHemisphereLight) {
        var O = e.get(C);
        O.direction.setFromMatrixPosition(C.matrixWorld), O.direction.transformDirection(D), O.direction.normalize(), O.skyColor.copy(C.color).multiplyScalar(I), O.groundColor.copy(C.groundColor).multiplyScalar(I), n.hemi[w] = O, w++
      }
    }
    n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = d;
    var J = n.hash;
    (J.directionalLength !== v || J.pointLength !== m || J.spotLength !== g || J.rectAreaLength !== x || J.hemiLength !== w || J.numDirectionalShadows !== S || J.numPointShadows !== b || J.numSpotShadows !== T) && (n.directional.length = v, n.spot.length = g, n.rectArea.length = x, n.point.length = m, n.hemi.length = w, n.directionalShadow.length = S, n.directionalShadowMap.length = S, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = T, n.spotShadowMap.length = T, n.directionalShadowMatrix.length = S, n.pointShadowMatrix.length = b, n.spotShadowMatrix.length = T, J.directionalLength = v, J.pointLength = m, J.spotLength = g, J.rectAreaLength = x, J.hemiLength = w, J.numDirectionalShadows = S, J.numPointShadows = b, J.numSpotShadows = T, n.version = Pg++)
  }
  return {
    setup: s,
    state: n
  }
}

function Uc() {
  var e = new Og,
    t = [],
    n = [];

  function r() {
    t.length = 0, n.length = 0
  }

  function i(l) {
    t.push(l)
  }

  function a(l) {
    n.push(l)
  }

  function o(l) {
    e.setup(t, n, l)
  }
  var s = {
    lightsArray: t,
    shadowsArray: n,
    lights: e
  };
  return {
    init: r,
    state: s,
    setupLights: o,
    pushLight: i,
    pushShadow: a
  }
}

function Ig() {
  var e = new WeakMap;

  function t(i) {
    var a = i.target;
    a.removeEventListener("dispose", t), e.delete(a)
  }

  function n(i, a) {
    var o;
    return e.has(i) === !1 ? (o = new Uc, e.set(i, new WeakMap), e.get(i).set(a, o), i.addEventListener("dispose", t)) : e.get(i).has(a) === !1 ? (o = new Uc, e.get(i).set(a, o)) : o = e.get(i).get(a), o
  }

  function r() {
    e = new WeakMap
  }
  return {
    get: n,
    dispose: r
  }
}

function hr(e) {
  Me.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Ad, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
}
hr.prototype = Object.create(Me.prototype);
hr.prototype.constructor = hr;
hr.prototype.isMeshDepthMaterial = !0;
hr.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
};

function fr(e) {
  Me.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new M, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
}
fr.prototype = Object.create(Me.prototype);
fr.prototype.constructor = fr;
fr.prototype.isMeshDistanceMaterial = !0;
fr.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
};
var Ng = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,
  Fg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;

function ih(e, t, n) {
  var r = new _a,
    i = new H,
    a = new H,
    o = new Ye,
    s = [],
    l = [],
    c = {},
    u = {
      0: ht,
      1: ga,
      2: ya
    },
    h = new At({
      defines: {
        SAMPLE_RATE: 2 / 8,
        HALF_SAMPLE_RATE: 1 / 8
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new H
        },
        radius: {
          value: 4
        }
      },
      vertexShader: Fg,
      fragmentShader: Ng
    }),
    f = h.clone();
  f.defines.HORIZONAL_PASS = 1;
  var d = new se;
  d.setAttribute("position", new we(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
  var p = new et(d, h),
    v = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Nu, this.render = function(b, T, D) {
    if (v.enabled !== !1 && !(v.autoUpdate === !1 && v.needsUpdate === !1) && b.length !== 0) {
      var N = e.getRenderTarget(),
        C = e.getActiveCubeFace(),
        B = e.getActiveMipmapLevel(),
        I = e.state;
      I.setBlending(Un), I.buffers.color.setClear(1, 1, 1, 1), I.buffers.depth.setTest(!0), I.setScissorTest(!1);
      for (var F = 0, U = b.length; F < U; F++) {
        var z = b[F],
          O = z.shadow;
        if (O === void 0) {
          console.warn("THREE.WebGLShadowMap:", z, "has no shadow.");
          continue
        }
        i.copy(O.mapSize);
        var k = O.getFrameExtents();
        if (i.multiply(k), a.copy(O.mapSize), (i.x > n || i.y > n) && (console.warn("THREE.WebGLShadowMap:", z, "has shadow exceeding max texture size, reducing"), i.x > n && (a.x = Math.floor(n / k.x), i.x = a.x * k.x, O.mapSize.x = a.x), i.y > n && (a.y = Math.floor(n / k.y), i.y = a.y * k.y, O.mapSize.y = a.y)), O.map === null && !O.isPointLightShadow && this.type === Ri) {
          var j = {
            minFilter: ft,
            magFilter: ft,
            format: $t
          };
          O.map = new zt(i.x, i.y, j), O.map.texture.name = z.name + ".shadowMap", O.mapPass = new zt(i.x, i.y, j), O.camera.updateProjectionMatrix()
        }
        if (O.map === null) {
          var j = {
            minFilter: lt,
            magFilter: lt,
            format: $t
          };
          O.map = new zt(i.x, i.y, j), O.map.texture.name = z.name + ".shadowMap", O.camera.updateProjectionMatrix()
        }
        e.setRenderTarget(O.map), e.clear();
        for (var J = O.getViewportCount(), W = 0; W < J; W++) {
          var Z = O.getViewport(W);
          o.set(a.x * Z.x, a.y * Z.y, a.x * Z.z, a.y * Z.w), I.viewport(o), O.updateMatrices(z, W), r = O.getFrustum(), S(T, D, O.camera, z, this.type)
        }!O.isPointLightShadow && this.type === Ri && m(O, D)
      }
      v.needsUpdate = !1, e.setRenderTarget(N, C, B)
    }
  };

  function m(b, T) {
    var D = t.update(p);
    h.uniforms.shadow_pass.value = b.map.texture, h.uniforms.resolution.value = b.mapSize, h.uniforms.radius.value = b.radius, e.setRenderTarget(b.mapPass), e.clear(), e.renderBufferDirect(T, null, D, h, p, null), f.uniforms.shadow_pass.value = b.mapPass.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, e.setRenderTarget(b.map), e.clear(), e.renderBufferDirect(T, null, D, f, p, null)
  }

  function g(b, T, D) {
    var N = b << 0 | T << 1 | D << 2,
      C = s[N];
    return C === void 0 && (C = new hr({
      depthPacking: Ld,
      morphTargets: b,
      skinning: T
    }), s[N] = C), C
  }

  function x(b, T, D) {
    var N = b << 0 | T << 1 | D << 2,
      C = l[N];
    return C === void 0 && (C = new fr({
      morphTargets: b,
      skinning: T
    }), l[N] = C), C
  }

  function w(b, T, D, N, C, B) {
    var I = b.geometry,
      F = null,
      U = g,
      z = b.customDepthMaterial;
    if (D.isPointLight === !0 && (U = x, z = b.customDistanceMaterial), z === void 0) {
      var O = !1;
      T.morphTargets === !0 && (I.isBufferGeometry === !0 ? O = I.morphAttributes && I.morphAttributes.position && I.morphAttributes.position.length > 0 : I.isGeometry === !0 && (O = I.morphTargets && I.morphTargets.length > 0));
      var k = !1;
      b.isSkinnedMesh === !0 && (T.skinning === !0 ? k = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b));
      var j = b.isInstancedMesh === !0;
      F = U(O, k, j)
    } else F = z;
    if (e.localClippingEnabled && T.clipShadows === !0 && T.clippingPlanes.length !== 0) {
      var J = F.uuid,
        W = T.uuid,
        Z = c[J];
      Z === void 0 && (Z = {}, c[J] = Z);
      var re = Z[W];
      re === void 0 && (re = F.clone(), Z[W] = re), F = re
    }
    return F.visible = T.visible, F.wireframe = T.wireframe, B === Ri ? F.side = T.shadowSide !== null ? T.shadowSide : T.side : F.side = T.shadowSide !== null ? T.shadowSide : u[T.side], F.clipShadows = T.clipShadows, F.clippingPlanes = T.clippingPlanes, F.clipIntersection = T.clipIntersection, F.wireframeLinewidth = T.wireframeLinewidth, F.linewidth = T.linewidth, D.isPointLight === !0 && F.isMeshDistanceMaterial === !0 && (F.referencePosition.setFromMatrixPosition(D.matrixWorld), F.nearDistance = N, F.farDistance = C), F
  }

  function S(b, T, D, N, C) {
    if (b.visible !== !1) {
      var B = b.layers.test(T.layers);
      if (B && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && C === Ri) && (!b.frustumCulled || r.intersectsObject(b))) {
        b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, b.matrixWorld);
        var I = t.update(b),
          F = b.material;
        if (Array.isArray(F))
          for (var U = I.groups, z = 0, O = U.length; z < O; z++) {
            var k = U[z],
              j = F[k.materialIndex];
            if (j && j.visible) {
              var J = w(b, j, N, D.near, D.far, C);
              e.renderBufferDirect(D, null, I, J, b, k)
            }
          } else if (F.visible) {
            var J = w(b, F, N, D.near, D.far, C);
            e.renderBufferDirect(D, null, I, J, b, null)
          }
      }
      for (var W = b.children, Z = 0, re = W.length; Z < re; Z++) S(W[Z], T, D, N, C)
    }
  }
}

function Bg(e, t, n) {
  var r = n.isWebGL2;

  function i() {
    var P = !1,
      ee = new Ye,
      he = null,
      Ie = new Ye(0, 0, 0, 0);
    return {
      setMask: function(de) {
        he !== de && !P && (e.colorMask(de, de, de, de), he = de)
      },
      setLocked: function(de) {
        P = de
      },
      setClear: function(de, He, Xe, nt, Et) {
        Et === !0 && (de *= nt, He *= nt, Xe *= nt), ee.set(de, He, Xe, nt), Ie.equals(ee) === !1 && (e.clearColor(de, He, Xe, nt), Ie.copy(ee))
      },
      reset: function() {
        P = !1, he = null, Ie.set(-1, 0, 0, 0)
      }
    }
  }

  function a() {
    var P = !1,
      ee = null,
      he = null,
      Ie = null;
    return {
      setTest: function(de) {
        de ? _e(2929) : Fe(2929)
      },
      setMask: function(de) {
        ee !== de && !P && (e.depthMask(de), ee = de)
      },
      setFunc: function(de) {
        if (he !== de) {
          if (de) switch (de) {
            case gf:
              e.depthFunc(512);
              break;
            case yf:
              e.depthFunc(519);
              break;
            case xf:
              e.depthFunc(513);
              break;
            case Ds:
              e.depthFunc(515);
              break;
            case _f:
              e.depthFunc(514);
              break;
            case bf:
              e.depthFunc(518);
              break;
            case Mf:
              e.depthFunc(516);
              break;
            case wf:
              e.depthFunc(517);
              break;
            default:
              e.depthFunc(515)
          } else e.depthFunc(515);
          he = de
        }
      },
      setLocked: function(de) {
        P = de
      },
      setClear: function(de) {
        Ie !== de && (e.clearDepth(de), Ie = de)
      },
      reset: function() {
        P = !1, ee = null, he = null, Ie = null
      }
    }
  }

  function o() {
    var P = !1,
      ee = null,
      he = null,
      Ie = null,
      de = null,
      He = null,
      Xe = null,
      nt = null,
      Et = null;
    return {
      setTest: function(Qe) {
        P || (Qe ? _e(2960) : Fe(2960))
      },
      setMask: function(Qe) {
        ee !== Qe && !P && (e.stencilMask(Qe), ee = Qe)
      },
      setFunc: function(Qe, bt, Lt) {
        (he !== Qe || Ie !== bt || de !== Lt) && (e.stencilFunc(Qe, bt, Lt), he = Qe, Ie = bt, de = Lt)
      },
      setOp: function(Qe, bt, Lt) {
        (He !== Qe || Xe !== bt || nt !== Lt) && (e.stencilOp(Qe, bt, Lt), He = Qe, Xe = bt, nt = Lt)
      },
      setLocked: function(Qe) {
        P = Qe
      },
      setClear: function(Qe) {
        Et !== Qe && (e.clearStencil(Qe), Et = Qe)
      },
      reset: function() {
        P = !1, ee = null, he = null, Ie = null, de = null, He = null, Xe = null, nt = null, Et = null
      }
    }
  }
  var s = new i,
    l = new a,
    c = new o,
    u = e.getParameter(34921),
    h = new Uint8Array(u),
    f = new Uint8Array(u),
    d = new Uint8Array(u),
    p = {},
    v = null,
    m = null,
    g = null,
    x = null,
    w = null,
    S = null,
    b = null,
    T = null,
    D = null,
    N = !1,
    C = null,
    B = null,
    I = null,
    F = null,
    U = null,
    z = e.getParameter(35661),
    O = !1,
    k = 0,
    j = e.getParameter(7938);
  j.indexOf("WebGL") !== -1 ? (k = parseFloat(/^WebGL\ ([0-9])/.exec(j)[1]), O = k >= 1) : j.indexOf("OpenGL ES") !== -1 && (k = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(j)[1]), O = k >= 2);
  var J = null,
    W = {},
    Z = new Ye,
    re = new Ye;

  function Pe(P, ee, he) {
    var Ie = new Uint8Array(4),
      de = e.createTexture();
    e.bindTexture(P, de), e.texParameteri(P, 10241, 9728), e.texParameteri(P, 10240, 9728);
    for (var He = 0; He < he; He++) e.texImage2D(ee + He, 0, 6408, 1, 1, 0, 6408, 5121, Ie);
    return de
  }
  var Ue = {};
  Ue[3553] = Pe(3553, 3553, 1), Ue[34067] = Pe(34067, 34069, 6), s.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), _e(2929), l.setFunc(Ds), $e(!1), E(Kl), _e(2884), je(Un);

  function Le() {
    for (var P = 0, ee = h.length; P < ee; P++) h[P] = 0
  }

  function ye(P) {
    V(P, 0)
  }

  function V(P, ee) {
    if (h[P] = 1, f[P] === 0 && (e.enableVertexAttribArray(P), f[P] = 1), d[P] !== ee) {
      var he = r ? e : t.get("ANGLE_instanced_arrays");
      he[r ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, ee), d[P] = ee
    }
  }

  function Oe() {
    for (var P = 0, ee = f.length; P !== ee; ++P) f[P] !== h[P] && (e.disableVertexAttribArray(P), f[P] = 0)
  }

  function _e(P) {
    p[P] !== !0 && (e.enable(P), p[P] = !0)
  }

  function Fe(P) {
    p[P] !== !1 && (e.disable(P), p[P] = !1)
  }

  function ve(P) {
    return v !== P ? (e.useProgram(P), v = P, !0) : !1
  }
  var X = {
    [Ur]: 32774,
    [of]: 32778,
    [sf]: 32779
  };
  if (r) X[rc] = 32775, X[ic] = 32776;
  else {
    var Ae = t.get("EXT_blend_minmax");
    Ae !== null && (X[rc] = Ae.MIN_EXT, X[ic] = Ae.MAX_EXT)
  }
  var ze = {
    [lf]: 0,
    [cf]: 1,
    [uf]: 768,
    [Bu]: 770,
    [mf]: 776,
    [pf]: 774,
    [ff]: 772,
    [hf]: 769,
    [Uu]: 771,
    [vf]: 775,
    [df]: 773
  };

  function je(P, ee, he, Ie, de, He, Xe, nt) {
    if (P === Un) {
      m && (Fe(3042), m = !1);
      return
    }
    if (m || (_e(3042), m = !0), P !== af) {
      if (P !== g || nt !== N) {
        if ((x !== Ur || b !== Ur) && (e.blendEquation(32774), x = Ur, b = Ur), nt) switch (P) {
          case Pi:
            e.blendFuncSeparate(1, 771, 1, 771);
            break;
          case ec:
            e.blendFunc(1, 1);
            break;
          case tc:
            e.blendFuncSeparate(0, 0, 769, 771);
            break;
          case nc:
            e.blendFuncSeparate(0, 768, 0, 770);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break
        } else switch (P) {
          case Pi:
            e.blendFuncSeparate(770, 771, 1, 771);
            break;
          case ec:
            e.blendFunc(770, 1);
            break;
          case tc:
            e.blendFunc(0, 769);
            break;
          case nc:
            e.blendFunc(0, 768);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break
        }
        w = null, S = null, T = null, D = null, g = P, N = nt
      }
      return
    }
    de = de || ee, He = He || he, Xe = Xe || Ie, (ee !== x || de !== b) && (e.blendEquationSeparate(X[ee], X[de]), x = ee, b = de), (he !== w || Ie !== S || He !== T || Xe !== D) && (e.blendFuncSeparate(ze[he], ze[Ie], ze[He], ze[Xe]), w = he, S = Ie, T = He, D = Xe), g = P, N = null
  }

  function _t(P, ee) {
    P.side === ya ? Fe(2884) : _e(2884);
    var he = P.side === ht;
    ee && (he = !he), $e(he), P.blending === Pi && P.transparent === !1 ? je(Un) : je(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.premultipliedAlpha), l.setFunc(P.depthFunc), l.setTest(P.depthTest), l.setMask(P.depthWrite), s.setMask(P.colorWrite);
    var Ie = P.stencilWrite;
    c.setTest(Ie), Ie && (c.setMask(P.stencilWriteMask), c.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), c.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), $(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits)
  }

  function $e(P) {
    C !== P && (P ? e.frontFace(2304) : e.frontFace(2305), C = P)
  }

  function E(P) {
    P !== tf ? (_e(2884), P !== B && (P === Kl ? e.cullFace(1029) : P === nf ? e.cullFace(1028) : e.cullFace(1032))) : Fe(2884), B = P
  }

  function A(P) {
    P !== I && (O && e.lineWidth(P), I = P)
  }

  function $(P, ee, he) {
    P ? (_e(32823), (F !== ee || U !== he) && (e.polygonOffset(ee, he), F = ee, U = he)) : Fe(32823)
  }

  function q(P) {
    P ? _e(3089) : Fe(3089)
  }

  function Re(P) {
    P === void 0 && (P = 33984 + z - 1), J !== P && (e.activeTexture(P), J = P)
  }

  function ce(P, ee) {
    J === null && Re();
    var he = W[J];
    he === void 0 && (he = {
      type: void 0,
      texture: void 0
    }, W[J] = he), (he.type !== P || he.texture !== ee) && (e.bindTexture(P, ee || Ue[P]), he.type = P, he.texture = ee)
  }

  function L() {
    var P = W[J];
    P !== void 0 && P.type !== void 0 && (e.bindTexture(P.type, null), P.type = void 0, P.texture = void 0)
  }

  function K() {
    try {
      e.compressedTexImage2D.apply(e, arguments)
    } catch (P) {
      console.error("THREE.WebGLState:", P)
    }
  }

  function ue() {
    try {
      e.texImage2D.apply(e, arguments)
    } catch (P) {
      console.error("THREE.WebGLState:", P)
    }
  }

  function ie() {
    try {
      e.texImage3D.apply(e, arguments)
    } catch (P) {
      console.error("THREE.WebGLState:", P)
    }
  }

  function ae(P) {
    Z.equals(P) === !1 && (e.scissor(P.x, P.y, P.z, P.w), Z.copy(P))
  }

  function me(P) {
    re.equals(P) === !1 && (e.viewport(P.x, P.y, P.z, P.w), re.copy(P))
  }

  function le() {
    for (var P = 0; P < f.length; P++) f[P] === 1 && (e.disableVertexAttribArray(P), f[P] = 0);
    p = {}, J = null, W = {}, v = null, g = null, C = null, B = null, s.reset(), l.reset(), c.reset()
  }
  return {
    buffers: {
      color: s,
      depth: l,
      stencil: c
    },
    initAttributes: Le,
    enableAttribute: ye,
    enableAttributeAndDivisor: V,
    disableUnusedAttributes: Oe,
    enable: _e,
    disable: Fe,
    useProgram: ve,
    setBlending: je,
    setMaterial: _t,
    setFlipSided: $e,
    setCullFace: E,
    setLineWidth: A,
    setPolygonOffset: $,
    setScissorTest: q,
    activeTexture: Re,
    bindTexture: ce,
    unbindTexture: L,
    compressedTexImage2D: K,
    texImage2D: ue,
    texImage3D: ie,
    scissor: ae,
    viewport: me,
    reset: le
  }
}

function Ug(e, t, n, r, i, a, o) {
  var s = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    u = i.maxTextureSize,
    h = i.maxSamples,
    f = new WeakMap,
    d, p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null
  } catch {}

  function v(E, A) {
    return p ? new OffscreenCanvas(E, A) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
  }

  function m(E, A, $, q) {
    var Re = 1;
    if ((E.width > q || E.height > q) && (Re = q / Math.max(E.width, E.height)), Re < 1 || A === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        var ce = A ? Te.floorPowerOfTwo : Math.floor,
          L = ce(Re * E.width),
          K = ce(Re * E.height);
        d === void 0 && (d = v(L, K));
        var ue = $ ? v(L, K) : d;
        ue.width = L, ue.height = K;
        var ie = ue.getContext("2d");
        return ie.drawImage(E, 0, 0, L, K), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + L + "x" + K + ")."), ue
      } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E
  }

  function g(E) {
    return Te.isPowerOfTwo(E.width) && Te.isPowerOfTwo(E.height)
  }

  function x(E) {
    return s ? !1 : E.wrapS !== Tt || E.wrapT !== Tt || E.minFilter !== lt && E.minFilter !== ft
  }

  function w(E, A) {
    return E.generateMipmaps && A && E.minFilter !== lt && E.minFilter !== ft
  }

  function S(E, A, $, q) {
    e.generateMipmap(E);
    var Re = r.get(A);
    Re.__maxMipLevel = Math.log(Math.max($, q)) * Math.LOG2E
  }

  function b(E, A, $) {
    if (s === !1) return A;
    if (E !== null) {
      if (e[E] !== void 0) return e[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'")
    }
    var q = A;
    return A === 6403 && ($ === 5126 && (q = 33326), $ === 5131 && (q = 33325), $ === 5121 && (q = 33321)), A === 6407 && ($ === 5126 && (q = 34837), $ === 5131 && (q = 34843), $ === 5121 && (q = 32849)), A === 6408 && ($ === 5126 && (q = 34836), $ === 5131 && (q = 34842), $ === 5121 && (q = 32856)), (q === 33325 || q === 33326 || q === 34842 || q === 34836) && t.get("EXT_color_buffer_float"), q
  }

  function T(E) {
    return E === lt || E === Os || E === Is ? 9728 : 9729
  }

  function D(E) {
    var A = E.target;
    A.removeEventListener("dispose", D), C(A), A.isVideoTexture && f.delete(A), o.memory.textures--
  }

  function N(E) {
    var A = E.target;
    A.removeEventListener("dispose", N), B(A), o.memory.textures--
  }

  function C(E) {
    var A = r.get(E);
    A.__webglInit !== void 0 && (e.deleteTexture(A.__webglTexture), r.remove(E))
  }

  function B(E) {
    var A = r.get(E),
      $ = r.get(E.texture);
    if (E) {
      if ($.__webglTexture !== void 0 && e.deleteTexture($.__webglTexture), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
        for (var q = 0; q < 6; q++) e.deleteFramebuffer(A.__webglFramebuffer[q]), A.__webglDepthbuffer && e.deleteRenderbuffer(A.__webglDepthbuffer[q]);
      else e.deleteFramebuffer(A.__webglFramebuffer), A.__webglDepthbuffer && e.deleteRenderbuffer(A.__webglDepthbuffer), A.__webglMultisampledFramebuffer && e.deleteFramebuffer(A.__webglMultisampledFramebuffer), A.__webglColorRenderbuffer && e.deleteRenderbuffer(A.__webglColorRenderbuffer), A.__webglDepthRenderbuffer && e.deleteRenderbuffer(A.__webglDepthRenderbuffer);
      r.remove(E.texture), r.remove(E)
    }
  }
  var I = 0;

  function F() {
    I = 0
  }

  function U() {
    var E = I;
    return E >= l && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + l), I += 1, E
  }

  function z(E, A) {
    var $ = r.get(E);
    if (E.isVideoTexture && Ae(E), E.version > 0 && $.__version !== E.version) {
      var q = E.image;
      if (q === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      else if (q.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ue($, E, A);
        return
      }
    }
    n.activeTexture(33984 + A), n.bindTexture(3553, $.__webglTexture)
  }

  function O(E, A) {
    var $ = r.get(E);
    if (E.version > 0 && $.__version !== E.version) {
      Ue($, E, A);
      return
    }
    n.activeTexture(33984 + A), n.bindTexture(35866, $.__webglTexture)
  }

  function k(E, A) {
    var $ = r.get(E);
    if (E.version > 0 && $.__version !== E.version) {
      Ue($, E, A);
      return
    }
    n.activeTexture(33984 + A), n.bindTexture(32879, $.__webglTexture)
  }

  function j(E, A) {
    if (E.image.length === 6) {
      var $ = r.get(E);
      if (E.version > 0 && $.__version !== E.version) {
        Pe($, E), n.activeTexture(33984 + A), n.bindTexture(34067, $.__webglTexture), e.pixelStorei(37440, E.flipY);
        for (var q = E && (E.isCompressedTexture || E.image[0].isCompressedTexture), Re = E.image[0] && E.image[0].isDataTexture, ce = [], L = 0; L < 6; L++) !q && !Re ? ce[L] = m(E.image[L], !1, !0, c) : ce[L] = Re ? E.image[L].image : E.image[L];
        var K = ce[0],
          ue = g(K) || s,
          ie = a.convert(E.format),
          ae = a.convert(E.type),
          me = b(E.internalFormat, ie, ae);
        re(34067, E, ue);
        var le;
        if (q) {
          for (var L = 0; L < 6; L++) {
            le = ce[L].mipmaps;
            for (var P = 0; P < le.length; P++) {
              var ee = le[P];
              E.format !== $t && E.format !== zn ? ie !== null ? n.compressedTexImage2D(34069 + L, P, me, ee.width, ee.height, 0, ee.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + L, P, me, ee.width, ee.height, 0, ie, ae, ee.data)
            }
          }
          $.__maxMipLevel = le.length - 1
        } else {
          le = E.mipmaps;
          for (var L = 0; L < 6; L++)
            if (Re) {
              n.texImage2D(34069 + L, 0, me, ce[L].width, ce[L].height, 0, ie, ae, ce[L].data);
              for (var P = 0; P < le.length; P++) {
                var ee = le[P],
                  he = ee.image[L].image;
                n.texImage2D(34069 + L, P + 1, me, he.width, he.height, 0, ie, ae, he.data)
              }
            } else {
              n.texImage2D(34069 + L, 0, me, ie, ae, ce[L]);
              for (var P = 0; P < le.length; P++) {
                var ee = le[P];
                n.texImage2D(34069 + L, P + 1, me, ie, ae, ee.image[L])
              }
            } $.__maxMipLevel = le.length
        }
        w(E, ue) && S(34067, E, K.width, K.height), $.__version = E.version, E.onUpdate && E.onUpdate(E)
      } else n.activeTexture(33984 + A), n.bindTexture(34067, $.__webglTexture)
    }
  }

  function J(E, A) {
    n.activeTexture(33984 + A), n.bindTexture(34067, r.get(E).__webglTexture)
  }
  var W = {
      [lo]: 10497,
      [Tt]: 33071,
      [co]: 33648
    },
    Z = {
      [lt]: 9728,
      [Os]: 9984,
      [Is]: 9986,
      [ft]: 9729,
      [Hu]: 9985,
      [Zo]: 9987
    };

  function re(E, A, $) {
    $ ? (e.texParameteri(E, 10242, W[A.wrapS]), e.texParameteri(E, 10243, W[A.wrapT]), (E === 32879 || E === 35866) && e.texParameteri(E, 32882, W[A.wrapR]), e.texParameteri(E, 10240, Z[A.magFilter]), e.texParameteri(E, 10241, Z[A.minFilter])) : (e.texParameteri(E, 10242, 33071), e.texParameteri(E, 10243, 33071), (E === 32879 || E === 35866) && e.texParameteri(E, 32882, 33071), (A.wrapS !== Tt || A.wrapT !== Tt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(E, 10240, T(A.magFilter)), e.texParameteri(E, 10241, T(A.minFilter)), A.minFilter !== lt && A.minFilter !== ft && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
    var q = t.get("EXT_texture_filter_anisotropic");
    if (q) {
      if (A.type === In && t.get("OES_texture_float_linear") === null || A.type === ho && (s || t.get("OES_texture_half_float_linear")) === null) return;
      (A.anisotropy > 1 || r.get(A).__currentAnisotropy) && (e.texParameterf(E, q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(A.anisotropy, i.getMaxAnisotropy())), r.get(A).__currentAnisotropy = A.anisotropy)
    }
  }

  function Pe(E, A) {
    E.__webglInit === void 0 && (E.__webglInit = !0, A.addEventListener("dispose", D), E.__webglTexture = e.createTexture(), o.memory.textures++)
  }

  function Ue(E, A, $) {
    var q = 3553;
    A.isDataTexture2DArray && (q = 35866), A.isDataTexture3D && (q = 32879), Pe(E, A), n.activeTexture(33984 + $), n.bindTexture(q, E.__webglTexture), e.pixelStorei(37440, A.flipY), e.pixelStorei(37441, A.premultiplyAlpha), e.pixelStorei(3317, A.unpackAlignment);
    var Re = x(A) && g(A.image) === !1,
      ce = m(A.image, Re, !1, u),
      L = g(ce) || s,
      K = a.convert(A.format),
      ue = a.convert(A.type),
      ie = b(A.internalFormat, K, ue);
    re(q, A, L);
    var ae, me = A.mipmaps;
    if (A.isDepthTexture) ie = 6402, s ? A.type === In ? ie = 36012 : A.type === oo ? ie = 33190 : A.type === Di ? ie = 35056 : ie = 33189 : A.type === In && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), A.format === jr && ie === 6402 && A.type !== uo && A.type !== oo && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), A.type = uo, ue = a.convert(A.type)), A.format === Fi && ie === 6402 && (ie = 34041, A.type !== Di && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), A.type = Di, ue = a.convert(A.type))), n.texImage2D(3553, 0, ie, ce.width, ce.height, 0, K, ue, null);
    else if (A.isDataTexture)
      if (me.length > 0 && L) {
        for (var le = 0, P = me.length; le < P; le++) ae = me[le], n.texImage2D(3553, le, ie, ae.width, ae.height, 0, K, ue, ae.data);
        A.generateMipmaps = !1, E.__maxMipLevel = me.length - 1
      } else n.texImage2D(3553, 0, ie, ce.width, ce.height, 0, K, ue, ce.data), E.__maxMipLevel = 0;
    else if (A.isCompressedTexture) {
      for (var le = 0, P = me.length; le < P; le++) ae = me[le], A.format !== $t && A.format !== zn ? K !== null ? n.compressedTexImage2D(3553, le, ie, ae.width, ae.height, 0, ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, le, ie, ae.width, ae.height, 0, K, ue, ae.data);
      E.__maxMipLevel = me.length - 1
    } else if (A.isDataTexture2DArray) n.texImage3D(35866, 0, ie, ce.width, ce.height, ce.depth, 0, K, ue, ce.data), E.__maxMipLevel = 0;
    else if (A.isDataTexture3D) n.texImage3D(32879, 0, ie, ce.width, ce.height, ce.depth, 0, K, ue, ce.data), E.__maxMipLevel = 0;
    else if (me.length > 0 && L) {
      for (var le = 0, P = me.length; le < P; le++) ae = me[le], n.texImage2D(3553, le, ie, K, ue, ae);
      A.generateMipmaps = !1, E.__maxMipLevel = me.length - 1
    } else n.texImage2D(3553, 0, ie, K, ue, ce), E.__maxMipLevel = 0;
    w(A, L) && S(q, A, ce.width, ce.height), E.__version = A.version, A.onUpdate && A.onUpdate(A)
  }

  function Le(E, A, $, q) {
    var Re = a.convert(A.texture.format),
      ce = a.convert(A.texture.type),
      L = b(A.texture.internalFormat, Re, ce);
    n.texImage2D(q, 0, L, A.width, A.height, 0, Re, ce, null), e.bindFramebuffer(36160, E), e.framebufferTexture2D(36160, $, q, r.get(A.texture).__webglTexture, 0), e.bindFramebuffer(36160, null)
  }

  function ye(E, A, $) {
    if (e.bindRenderbuffer(36161, E), A.depthBuffer && !A.stencilBuffer) {
      var q = 33189;
      if ($) {
        var Re = A.depthTexture;
        Re && Re.isDepthTexture && (Re.type === In ? q = 36012 : Re.type === oo && (q = 33190));
        var ce = X(A);
        e.renderbufferStorageMultisample(36161, ce, q, A.width, A.height)
      } else e.renderbufferStorage(36161, q, A.width, A.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, E)
    } else if (A.depthBuffer && A.stencilBuffer) {
      if ($) {
        var ce = X(A);
        e.renderbufferStorageMultisample(36161, ce, 35056, A.width, A.height)
      } else e.renderbufferStorage(36161, 34041, A.width, A.height);
      e.framebufferRenderbuffer(36160, 33306, 36161, E)
    } else {
      var L = a.convert(A.texture.format),
        K = a.convert(A.texture.type),
        q = b(A.texture.internalFormat, L, K);
      if ($) {
        var ce = X(A);
        e.renderbufferStorageMultisample(36161, ce, q, A.width, A.height)
      } else e.renderbufferStorage(36161, q, A.width, A.height)
    }
    e.bindRenderbuffer(36161, null)
  }

  function V(E, A) {
    var $ = A && A.isWebGLCubeRenderTarget;
    if ($) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(36160, E), !(A.depthTexture && A.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!r.get(A.depthTexture).__webglTexture || A.depthTexture.image.width !== A.width || A.depthTexture.image.height !== A.height) && (A.depthTexture.image.width = A.width, A.depthTexture.image.height = A.height, A.depthTexture.needsUpdate = !0), z(A.depthTexture, 0);
    var q = r.get(A.depthTexture).__webglTexture;
    if (A.depthTexture.format === jr) e.framebufferTexture2D(36160, 36096, 3553, q, 0);
    else if (A.depthTexture.format === Fi) e.framebufferTexture2D(36160, 33306, 3553, q, 0);
    else throw new Error("Unknown depthTexture format")
  }

  function Oe(E) {
    var A = r.get(E),
      $ = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture) {
      if ($) throw new Error("target.depthTexture not supported in Cube render targets");
      V(A.__webglFramebuffer, E)
    } else if ($) {
      A.__webglDepthbuffer = [];
      for (var q = 0; q < 6; q++) e.bindFramebuffer(36160, A.__webglFramebuffer[q]), A.__webglDepthbuffer[q] = e.createRenderbuffer(), ye(A.__webglDepthbuffer[q], E, !1)
    } else e.bindFramebuffer(36160, A.__webglFramebuffer), A.__webglDepthbuffer = e.createRenderbuffer(), ye(A.__webglDepthbuffer, E, !1);
    e.bindFramebuffer(36160, null)
  }

  function _e(E) {
    var A = r.get(E),
      $ = r.get(E.texture);
    E.addEventListener("dispose", N), $.__webglTexture = e.createTexture(), o.memory.textures++;
    var q = E.isWebGLCubeRenderTarget === !0,
      Re = E.isWebGLMultisampleRenderTarget === !0,
      ce = g(E) || s;
    if (s && E.texture.format === zn && (E.texture.type === In || E.texture.type === ho) && (E.texture.format = $t, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), q) {
      A.__webglFramebuffer = [];
      for (var L = 0; L < 6; L++) A.__webglFramebuffer[L] = e.createFramebuffer()
    } else if (A.__webglFramebuffer = e.createFramebuffer(), Re)
      if (s) {
        A.__webglMultisampledFramebuffer = e.createFramebuffer(), A.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, A.__webglColorRenderbuffer);
        var K = a.convert(E.texture.format),
          ue = a.convert(E.texture.type),
          ie = b(E.texture.internalFormat, K, ue),
          ae = X(E);
        e.renderbufferStorageMultisample(36161, ae, ie, E.width, E.height), e.bindFramebuffer(36160, A.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, A.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), E.depthBuffer && (A.__webglDepthRenderbuffer = e.createRenderbuffer(), ye(A.__webglDepthRenderbuffer, E, !0)), e.bindFramebuffer(36160, null)
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    if (q) {
      n.bindTexture(34067, $.__webglTexture), re(34067, E.texture, ce);
      for (var L = 0; L < 6; L++) Le(A.__webglFramebuffer[L], E, 36064, 34069 + L);
      w(E.texture, ce) && S(34067, E.texture, E.width, E.height), n.bindTexture(34067, null)
    } else n.bindTexture(3553, $.__webglTexture), re(3553, E.texture, ce), Le(A.__webglFramebuffer, E, 36064, 3553), w(E.texture, ce) && S(3553, E.texture, E.width, E.height), n.bindTexture(3553, null);
    E.depthBuffer && Oe(E)
  }

  function Fe(E) {
    var A = E.texture,
      $ = g(E) || s;
    if (w(A, $)) {
      var q = E.isWebGLCubeRenderTarget ? 34067 : 3553,
        Re = r.get(A).__webglTexture;
      n.bindTexture(q, Re), S(q, A, E.width, E.height), n.bindTexture(q, null)
    }
  }

  function ve(E) {
    if (E.isWebGLMultisampleRenderTarget)
      if (s) {
        var A = r.get(E);
        e.bindFramebuffer(36008, A.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, A.__webglFramebuffer);
        var $ = E.width,
          q = E.height,
          Re = 16384;
        E.depthBuffer && (Re |= 256), E.stencilBuffer && (Re |= 1024), e.blitFramebuffer(0, 0, $, q, 0, 0, $, q, Re, 9728), e.bindFramebuffer(36160, A.__webglMultisampledFramebuffer)
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
  }

  function X(E) {
    return s && E.isWebGLMultisampleRenderTarget ? Math.min(h, E.samples) : 0
  }

  function Ae(E) {
    var A = o.render.frame;
    f.get(E) !== A && (f.set(E, A), E.update())
  }
  var ze = !1,
    je = !1;

  function _t(E, A) {
    E && E.isWebGLRenderTarget && (ze === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), ze = !0), E = E.texture), z(E, A)
  }

  function $e(E, A) {
    E && E.isWebGLCubeRenderTarget && (je === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), je = !0), E = E.texture), E && E.isCubeTexture || Array.isArray(E.image) && E.image.length === 6 ? j(E, A) : J(E, A)
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = F, this.setTexture2D = z, this.setTexture2DArray = O, this.setTexture3D = k, this.setTextureCube = j, this.setTextureCubeDynamic = J, this.setupRenderTarget = _e, this.updateRenderTargetMipmap = Fe, this.updateMultisampleRenderTarget = ve, this.safeSetTexture2D = _t, this.safeSetTextureCube = $e
}

function zg(e, t, n) {
  var r = n.isWebGL2;

  function i(a) {
    var o;
    if (a === Jo) return 5121;
    if (a === Of) return 32819;
    if (a === If) return 32820;
    if (a === Nf) return 33635;
    if (a === Cf) return 5120;
    if (a === Pf) return 5122;
    if (a === uo) return 5123;
    if (a === Df) return 5124;
    if (a === oo) return 5125;
    if (a === In) return 5126;
    if (a === ho) return r ? 5131 : (o = t.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (a === Ff) return 6406;
    if (a === zn) return 6407;
    if (a === $t) return 6408;
    if (a === Bf) return 6409;
    if (a === Uf) return 6410;
    if (a === jr) return 6402;
    if (a === Fi) return 34041;
    if (a === Gf) return 6403;
    if (a === Hf) return 36244;
    if (a === Vf) return 33319;
    if (a === kf) return 33320;
    if (a === Wf) return 36248;
    if (a === jf) return 36249;
    if (a === ac || a === oc || a === sc || a === lc)
      if (o = t.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (a === ac) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (a === oc) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (a === sc) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (a === lc) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT
      } else return null;
    if (a === cc || a === uc || a === hc || a === fc)
      if (o = t.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (a === cc) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === uc) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === hc) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === fc) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
      } else return null;
    if (a === Xf) return o = t.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if ((a === dc || a === pc) && (o = t.get("WEBGL_compressed_texture_etc"), o !== null)) {
      if (a === dc) return o.COMPRESSED_RGB8_ETC2;
      if (a === pc) return o.COMPRESSED_RGBA8_ETC2_EAC
    }
    if (a === qf || a === Yf || a === Zf || a === Jf || a === $f || a === Qf || a === Kf || a === ed || a === td || a === nd || a === rd || a === id || a === ad || a === od || a === ld || a === cd || a === ud || a === hd || a === fd || a === dd || a === pd || a === vd || a === md || a === gd || a === yd || a === xd || a === _d || a === bd) return o = t.get("WEBGL_compressed_texture_astc"), o !== null ? a : null;
    if (a === sd) return o = t.get("EXT_texture_compression_bptc"), o !== null ? a : null;
    if (a === Di) return r ? 34042 : (o = t.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
  }
  return {
    convert: i
  }
}

function Vs(e) {
  st.call(this), this.cameras = e || []
}
Vs.prototype = Object.assign(Object.create(st.prototype), {
  constructor: Vs,
  isArrayCamera: !0
});

function ki() {
  Q.call(this), this.type = "Group"
}
ki.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: ki,
  isGroup: !0
});

function ah(e, t) {
  var n = this,
    r = null,
    i = 1,
    a = null,
    o = "local-floor",
    s = null,
    l = [],
    c = new Map,
    u = new st;
  u.layers.enable(1), u.viewport = new Ye;
  var h = new st;
  h.layers.enable(2), h.viewport = new Ye;
  var f = new Vs([u, h]);
  f.layers.enable(1), f.layers.enable(2);
  var d = null,
    p = null;
  this.enabled = !1, this.isPresenting = !1, this.getController = function(B) {
    var I = l[B];
    return I === void 0 && (I = {}, l[B] = I), I.targetRay === void 0 && (I.targetRay = new ki, I.targetRay.matrixAutoUpdate = !1, I.targetRay.visible = !1), I.targetRay
  }, this.getControllerGrip = function(B) {
    var I = l[B];
    return I === void 0 && (I = {}, l[B] = I), I.grip === void 0 && (I.grip = new ki, I.grip.matrixAutoUpdate = !1, I.grip.visible = !1), I.grip
  };

  function v(B) {
    var I = c.get(B.inputSource);
    I && (I.targetRay && I.targetRay.dispatchEvent({
      type: B.type
    }), I.grip && I.grip.dispatchEvent({
      type: B.type
    }))
  }

  function m() {
    c.forEach(function(B, I) {
      B.targetRay && (B.targetRay.dispatchEvent({
        type: "disconnected",
        data: I
      }), B.targetRay.visible = !1), B.grip && (B.grip.dispatchEvent({
        type: "disconnected",
        data: I
      }), B.grip.visible = !1)
    }), c.clear(), e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), C.stop(), n.isPresenting = !1, n.dispatchEvent({
      type: "sessionend"
    })
  }

  function g(B) {
    a = B, C.setContext(r), C.start(), n.isPresenting = !0, n.dispatchEvent({
      type: "sessionstart"
    })
  }
  this.setFramebufferScaleFactor = function(B) {
    i = B, n.isPresenting == !0 && console.warn("WebXRManager: Cannot change framebuffer scale while presenting VR content")
  }, this.setReferenceSpaceType = function(B) {
    o = B
  }, this.getReferenceSpace = function() {
    return a
  }, this.getSession = function() {
    return r
  }, this.setSession = function(B) {
    if (r = B, r !== null) {
      r.addEventListener("select", v), r.addEventListener("selectstart", v), r.addEventListener("selectend", v), r.addEventListener("squeeze", v), r.addEventListener("squeezestart", v), r.addEventListener("squeezeend", v), r.addEventListener("end", m);
      var I = t.getContextAttributes(),
        F = {
          antialias: I.antialias,
          alpha: I.alpha,
          depth: I.depth,
          stencil: I.stencil,
          framebufferScaleFactor: i
        },
        U = new XRWebGLLayer(r, t, F);
      r.updateRenderState({
        baseLayer: U
      }), r.requestReferenceSpace(o).then(g), r.addEventListener("inputsourceschange", x)
    }
  };

  function x(B) {
    for (var I = r.inputSources, F = 0; F < l.length; F++) c.set(I[F], l[F]);
    for (var F = 0; F < B.removed.length; F++) {
      var U = B.removed[F],
        z = c.get(U);
      z && (z.targetRay && z.targetRay.dispatchEvent({
        type: "disconnected",
        data: U
      }), z.grip && z.grip.dispatchEvent({
        type: "disconnected",
        data: U
      }), c.delete(U))
    }
    for (var F = 0; F < B.added.length; F++) {
      var U = B.added[F],
        z = c.get(U);
      z && (z.targetRay && z.targetRay.dispatchEvent({
        type: "connected",
        data: U
      }), z.grip && z.grip.dispatchEvent({
        type: "connected",
        data: U
      }))
    }
  }
  var w = new M,
    S = new M;

  function b(B, I, F) {
    w.setFromMatrixPosition(I.matrixWorld), S.setFromMatrixPosition(F.matrixWorld);
    var U = w.distanceTo(S),
      z = I.projectionMatrix.elements,
      O = F.projectionMatrix.elements,
      k = z[14] / (z[10] - 1),
      j = z[14] / (z[10] + 1),
      J = (z[9] + 1) / z[5],
      W = (z[9] - 1) / z[5],
      Z = (z[8] - 1) / z[0],
      re = (O[8] + 1) / O[0],
      Pe = k * Z,
      Ue = k * re,
      Le = U / (-Z + re),
      ye = Le * -Z;
    I.matrixWorld.decompose(B.position, B.quaternion, B.scale), B.translateX(ye), B.translateZ(Le), B.matrixWorld.compose(B.position, B.quaternion, B.scale), B.matrixWorldInverse.getInverse(B.matrixWorld);
    var V = k + Le,
      Oe = j + Le,
      _e = Pe - ye,
      Fe = Ue + (U - ye),
      ve = J * j / Oe * V,
      X = W * j / Oe * V;
    B.projectionMatrix.makePerspective(_e, Fe, ve, X, V, Oe)
  }

  function T(B, I) {
    I === null ? B.matrixWorld.copy(B.matrix) : B.matrixWorld.multiplyMatrices(I.matrixWorld, B.matrix), B.matrixWorldInverse.getInverse(B.matrixWorld)
  }
  this.getCamera = function(B) {
    f.near = h.near = u.near = B.near, f.far = h.far = u.far = B.far, (d !== f.near || p !== f.far) && (r.updateRenderState({
      depthNear: f.near,
      depthFar: f.far
    }), d = f.near, p = f.far);
    var I = B.parent,
      F = f.cameras;
    T(f, I);
    for (var U = 0; U < F.length; U++) T(F[U], I);
    B.matrixWorld.copy(f.matrixWorld);
    for (var z = B.children, U = 0, O = z.length; U < O; U++) z[U].updateMatrixWorld(!0);
    return b(f, u, h), f
  };
  var D = null;

  function N(B, I) {
    if (s = I.getViewerPose(a), s !== null) {
      var F = s.views,
        U = r.renderState.baseLayer;
      e.setFramebuffer(U.framebuffer);
      for (var z = 0; z < F.length; z++) {
        var O = F[z],
          k = U.getViewport(O),
          j = f.cameras[z];
        j.matrix.fromArray(O.transform.matrix), j.projectionMatrix.fromArray(O.projectionMatrix), j.viewport.set(k.x, k.y, k.width, k.height), z === 0 && f.matrix.copy(j.matrix)
      }
    }
    for (var J = r.inputSources, z = 0; z < l.length; z++) {
      var W = l[z],
        Z = J[z],
        re = null,
        Pe = null;
      Z && (W.targetRay && (re = I.getPose(Z.targetRaySpace, a), re !== null && (W.targetRay.matrix.fromArray(re.transform.matrix), W.targetRay.matrix.decompose(W.targetRay.position, W.targetRay.rotation, W.targetRay.scale))), W.grip && Z.gripSpace && (Pe = I.getPose(Z.gripSpace, a), Pe !== null && (W.grip.matrix.fromArray(Pe.transform.matrix), W.grip.matrix.decompose(W.grip.position, W.grip.rotation, W.grip.scale)))), W.targetRay && (W.targetRay.visible = re !== null), W.grip && (W.grip.visible = Pe !== null)
    }
    D && D(B, I)
  }
  var C = new Ju;
  C.setAnimationLoop(N), this.setAnimationLoop = function(B) {
    D = B
  }, this.dispose = function() {}
}
Object.assign(ah.prototype, Qt.prototype);

function Hl(e) {
  e = e || {};
  var t = e.canvas !== void 0 ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
    n = e.context !== void 0 ? e.context : null,
    r = e.alpha !== void 0 ? e.alpha : !1,
    i = e.depth !== void 0 ? e.depth : !0,
    a = e.stencil !== void 0 ? e.stencil : !0,
    o = e.antialias !== void 0 ? e.antialias : !1,
    s = e.premultipliedAlpha !== void 0 ? e.premultipliedAlpha : !0,
    l = e.preserveDrawingBuffer !== void 0 ? e.preserveDrawingBuffer : !1,
    c = e.powerPreference !== void 0 ? e.powerPreference : "default",
    u = e.failIfMajorPerformanceCaveat !== void 0 ? e.failIfMajorPerformanceCaveat : !1,
    h = null,
    f = null;
  this.domElement = t, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = Ot, this.physicallyCorrectLights = !1, this.toneMapping = Dl, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
  var d = this,
    p = !1,
    v = null,
    m = 0,
    g = 0,
    x = null,
    w = null,
    S = -1,
    b = {
      geometry: null,
      program: null,
      wireframe: !1
    },
    T = null,
    D = null,
    N = new Ye,
    C = new Ye,
    B = null,
    I = t.width,
    F = t.height,
    U = 1,
    z = null,
    O = null,
    k = new Ye(0, 0, I, F),
    j = new Ye(0, 0, I, F),
    J = !1,
    W = new _a,
    Z = new ym,
    re = !1,
    Pe = !1,
    Ue = new De,
    Le = new M;

  function ye() {
    return x === null ? U : 1
  }
  var V;
  try {
    var Oe = {
      alpha: r,
      depth: i,
      stencil: a,
      antialias: o,
      premultipliedAlpha: s,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: u,
      xrCompatible: !0
    };
    if (t.addEventListener("webglcontextlost", me, !1), t.addEventListener("webglcontextrestored", le, !1), V = n || t.getContext("webgl", Oe) || t.getContext("experimental-webgl", Oe), V === null) throw t.getContext("webgl") !== null ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    V.getShaderPrecisionFormat === void 0 && (V.getShaderPrecisionFormat = function() {
      return {
        rangeMin: 1,
        rangeMax: 1,
        precision: 1
      }
    })
  } catch (y) {
    throw console.error("THREE.WebGLRenderer: " + y.message), y
  }
  var _e, Fe, ve, X, Ae, ze, je, _t, $e, E, A, $, q, Re, ce, L, K;

  function ue() {
    _e = new xm(V), Fe = new gm(V, _e, e), Fe.isWebGL2 === !1 && (_e.get("WEBGL_depth_texture"), _e.get("OES_texture_float"), _e.get("OES_texture_half_float"), _e.get("OES_texture_half_float_linear"), _e.get("OES_standard_derivatives"), _e.get("OES_element_index_uint"), _e.get("ANGLE_instanced_arrays")), _e.get("OES_texture_float_linear"), K = new zg(V, _e, Fe), ve = new Bg(V, _e, Fe), ve.scissor(C.copy(j).multiplyScalar(U).floor()), ve.viewport(N.copy(k).multiplyScalar(U).floor()), X = new Mm, Ae = new Eg, ze = new Ug(V, _e, ve, Ae, Fe, K, X), je = new Zd(V, Fe), _t = new _m(V, je, X), $e = new Em(V, _t, je, X), Re = new Sm(V), E = new Sg(d, _e, Fe), A = new Lg, $ = new Ig, q = new vm(d, ve, $e, s), ce = new mm(V, _e, X, Fe), L = new bm(V, _e, X, Fe), X.programs = E.programs, d.capabilities = Fe, d.extensions = _e, d.properties = Ae, d.renderLists = A, d.state = ve, d.info = X
  }
  ue();
  var ie = new ah(d, V);
  this.xr = ie;
  var ae = new ih(d, $e, Fe.maxTextureSize);
  this.shadowMap = ae, this.getContext = function() {
    return V
  }, this.getContextAttributes = function() {
    return V.getContextAttributes()
  }, this.forceContextLoss = function() {
    var y = _e.get("WEBGL_lose_context");
    y && y.loseContext()
  }, this.forceContextRestore = function() {
    var y = _e.get("WEBGL_lose_context");
    y && y.restoreContext()
  }, this.getPixelRatio = function() {
    return U
  }, this.setPixelRatio = function(y) {
    y !== void 0 && (U = y, this.setSize(I, F, !1))
  }, this.getSize = function(y) {
    return y === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), y = new H), y.set(I, F)
  }, this.setSize = function(y, _, R) {
    if (ie.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return
    }
    I = y, F = _, t.width = Math.floor(y * U), t.height = Math.floor(_ * U), R !== !1 && (t.style.width = y + "px", t.style.height = _ + "px"), this.setViewport(0, 0, y, _)
  }, this.getDrawingBufferSize = function(y) {
    return y === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), y = new H), y.set(I * U, F * U).floor()
  }, this.setDrawingBufferSize = function(y, _, R) {
    I = y, F = _, U = R, t.width = Math.floor(y * R), t.height = Math.floor(_ * R), this.setViewport(0, 0, y, _)
  }, this.getCurrentViewport = function(y) {
    return y === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), y = new Ye), y.copy(N)
  }, this.getViewport = function(y) {
    return y.copy(k)
  }, this.setViewport = function(y, _, R, G) {
    y.isVector4 ? k.set(y.x, y.y, y.z, y.w) : k.set(y, _, R, G), ve.viewport(N.copy(k).multiplyScalar(U).floor())
  }, this.getScissor = function(y) {
    return y.copy(j)
  }, this.setScissor = function(y, _, R, G) {
    y.isVector4 ? j.set(y.x, y.y, y.z, y.w) : j.set(y, _, R, G), ve.scissor(C.copy(j).multiplyScalar(U).floor())
  }, this.getScissorTest = function() {
    return J
  }, this.setScissorTest = function(y) {
    ve.setScissorTest(J = y)
  }, this.setOpaqueSort = function(y) {
    z = y
  }, this.setTransparentSort = function(y) {
    O = y
  }, this.getClearColor = function() {
    return q.getClearColor()
  }, this.setClearColor = function() {
    q.setClearColor.apply(q, arguments)
  }, this.getClearAlpha = function() {
    return q.getClearAlpha()
  }, this.setClearAlpha = function() {
    q.setClearAlpha.apply(q, arguments)
  }, this.clear = function(y, _, R) {
    var G = 0;
    (y === void 0 || y) && (G |= 16384), (_ === void 0 || _) && (G |= 256), (R === void 0 || R) && (G |= 1024), V.clear(G)
  }, this.clearColor = function() {
    this.clear(!0, !1, !1)
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1)
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0)
  }, this.dispose = function() {
    t.removeEventListener("webglcontextlost", me, !1), t.removeEventListener("webglcontextrestored", le, !1), A.dispose(), $.dispose(), Ae.dispose(), $e.dispose(), ie.dispose(), Et.stop(), this.forceContextLoss()
  };

  function me(y) {
    y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0
  }

  function le() {
    console.log("THREE.WebGLRenderer: Context Restored."), p = !1, ue()
  }

  function P(y) {
    var _ = y.target;
    _.removeEventListener("dispose", P), ee(_)
  }

  function ee(y) {
    he(y), Ae.remove(y)
  }

  function he(y) {
    var _ = Ae.get(y).program;
    y.program = void 0, _ !== void 0 && E.releaseProgram(_)
  }

  function Ie(y, _) {
    y.render(function(R) {
      d.renderBufferImmediate(R, _)
    })
  }
  this.renderBufferImmediate = function(y, _) {
    ve.initAttributes();
    var R = Ae.get(y);
    y.hasPositions && !R.position && (R.position = V.createBuffer()), y.hasNormals && !R.normal && (R.normal = V.createBuffer()), y.hasUvs && !R.uv && (R.uv = V.createBuffer()), y.hasColors && !R.color && (R.color = V.createBuffer());
    var G = _.getAttributes();
    y.hasPositions && (V.bindBuffer(34962, R.position), V.bufferData(34962, y.positionArray, 35048), ve.enableAttribute(G.position), V.vertexAttribPointer(G.position, 3, 5126, !1, 0, 0)), y.hasNormals && (V.bindBuffer(34962, R.normal), V.bufferData(34962, y.normalArray, 35048), ve.enableAttribute(G.normal), V.vertexAttribPointer(G.normal, 3, 5126, !1, 0, 0)), y.hasUvs && (V.bindBuffer(34962, R.uv), V.bufferData(34962, y.uvArray, 35048), ve.enableAttribute(G.uv), V.vertexAttribPointer(G.uv, 2, 5126, !1, 0, 0)), y.hasColors && (V.bindBuffer(34962, R.color), V.bufferData(34962, y.colorArray, 35048), ve.enableAttribute(G.color), V.vertexAttribPointer(G.color, 3, 5126, !1, 0, 0)), ve.disableUnusedAttributes(), V.drawArrays(4, 0, y.count), y.count = 0
  };
  var de = new _n;
  this.renderBufferDirect = function(y, _, R, G, Y, xe) {
    _ === null && (_ = de);
    var fe = Y.isMesh && Y.matrixWorld.determinant() < 0,
      Be = ba(y, _, G, Y);
    ve.setMaterial(G, fe);
    var Ee = !1;
    (b.geometry !== R.id || b.program !== Be.id || b.wireframe !== (G.wireframe === !0)) && (b.geometry = R.id, b.program = Be.id, b.wireframe = G.wireframe === !0, Ee = !0), (G.morphTargets || G.morphNormals) && (Re.update(Y, R, G, Be), Ee = !0);
    var Ce = R.index,
      Je = R.attributes.position;
    if (Ce === null) {
      if (Je === void 0 || Je.count === 0) return
    } else if (Ce.count === 0) return;
    var ke = 1;
    G.wireframe === !0 && (Ce = _t.getWireframeAttribute(R), ke = 2);
    var Ge, pe = ce;
    Ce !== null && (Ge = je.get(Ce), pe = L, pe.setIndex(Ge)), Ee && (He(Y, R, G, Be), Ce !== null && V.bindBuffer(34963, Ge.buffer));
    var be = Ce !== null ? Ce.count : Je.count,
      Kt = R.drawRange.start * ke,
      ut = R.drawRange.count * ke,
      xr = xe !== null ? xe.start * ke : 0,
      Rt = xe !== null ? xe.count * ke : 1 / 0,
      Mt = Math.max(Kt, xr),
      Ko = Math.min(be, Kt + ut, xr + Rt) - 1,
      Sa = Math.max(0, Ko - Mt + 1);
    if (Sa !== 0) {
      if (Y.isMesh) G.wireframe === !0 ? (ve.setLineWidth(G.wireframeLinewidth * ye()), pe.setMode(1)) : pe.setMode(4);
      else if (Y.isLine) {
        var es = G.linewidth;
        es === void 0 && (es = 1), ve.setLineWidth(es * ye()), Y.isLineSegments ? pe.setMode(1) : Y.isLineLoop ? pe.setMode(2) : pe.setMode(3)
      } else Y.isPoints ? pe.setMode(0) : Y.isSprite && pe.setMode(4);
      Y.isInstancedMesh ? pe.renderInstances(R, Mt, Sa, Y.count) : R.isInstancedBufferGeometry ? pe.renderInstances(R, Mt, Sa, R.maxInstancedCount) : pe.render(Mt, Sa)
    }
  };

  function He(y, _, R, G) {
    if (!(Fe.isWebGL2 === !1 && (y.isInstancedMesh || _.isInstancedBufferGeometry) && _e.get("ANGLE_instanced_arrays") === null)) {
      ve.initAttributes();
      var Y = _.attributes,
        xe = G.getAttributes(),
        fe = R.defaultAttributeValues;
      for (var Be in xe) {
        var Ee = xe[Be];
        if (Ee >= 0) {
          var Ce = Y[Be];
          if (Ce !== void 0) {
            var Je = Ce.normalized,
              ke = Ce.itemSize,
              Ge = je.get(Ce);
            if (Ge === void 0) continue;
            var pe = Ge.buffer,
              be = Ge.type,
              Kt = Ge.bytesPerElement;
            if (Ce.isInterleavedBufferAttribute) {
              var ut = Ce.data,
                xr = ut.stride,
                Rt = Ce.offset;
              ut && ut.isInstancedInterleavedBuffer ? (ve.enableAttributeAndDivisor(Ee, ut.meshPerAttribute), _.maxInstancedCount === void 0 && (_.maxInstancedCount = ut.meshPerAttribute * ut.count)) : ve.enableAttribute(Ee), V.bindBuffer(34962, pe), V.vertexAttribPointer(Ee, ke, be, Je, xr * Kt, Rt * Kt)
            } else Ce.isInstancedBufferAttribute ? (ve.enableAttributeAndDivisor(Ee, Ce.meshPerAttribute), _.maxInstancedCount === void 0 && (_.maxInstancedCount = Ce.meshPerAttribute * Ce.count)) : ve.enableAttribute(Ee), V.bindBuffer(34962, pe), V.vertexAttribPointer(Ee, ke, be, Je, 0, 0)
          } else if (Be === "instanceMatrix") {
            var Ge = je.get(y.instanceMatrix);
            if (Ge === void 0) continue;
            var pe = Ge.buffer,
              be = Ge.type;
            ve.enableAttributeAndDivisor(Ee + 0, 1), ve.enableAttributeAndDivisor(Ee + 1, 1), ve.enableAttributeAndDivisor(Ee + 2, 1), ve.enableAttributeAndDivisor(Ee + 3, 1), V.bindBuffer(34962, pe), V.vertexAttribPointer(Ee + 0, 4, be, !1, 64, 0), V.vertexAttribPointer(Ee + 1, 4, be, !1, 64, 16), V.vertexAttribPointer(Ee + 2, 4, be, !1, 64, 32), V.vertexAttribPointer(Ee + 3, 4, be, !1, 64, 48)
          } else if (fe !== void 0) {
            var Mt = fe[Be];
            if (Mt !== void 0) switch (Mt.length) {
              case 2:
                V.vertexAttrib2fv(Ee, Mt);
                break;
              case 3:
                V.vertexAttrib3fv(Ee, Mt);
                break;
              case 4:
                V.vertexAttrib4fv(Ee, Mt);
                break;
              default:
                V.vertexAttrib1fv(Ee, Mt)
            }
          }
        }
      }
      ve.disableUnusedAttributes()
    }
  }
  this.compile = function(y, _) {
    f = $.get(y, _), f.init(), y.traverse(function(G) {
      G.isLight && (f.pushLight(G), G.castShadow && f.pushShadow(G))
    }), f.setupLights(_);
    var R = {};
    y.traverse(function(G) {
      if (G.material)
        if (Array.isArray(G.material))
          for (var Y = 0; Y < G.material.length; Y++) G.material[Y].uuid in R || (Ut(G.material[Y], y, G), R[G.material[Y].uuid] = !0);
        else G.material.uuid in R || (Ut(G.material, y, G), R[G.material.uuid] = !0)
    })
  };
  var Xe = null;

  function nt(y) {
    ie.isPresenting || Xe && Xe(y)
  }
  var Et = new Ju;
  Et.setAnimationLoop(nt), typeof window < "u" && Et.setContext(window), this.setAnimationLoop = function(y) {
    Xe = y, ie.setAnimationLoop(y), Et.start()
  }, this.render = function(y, _) {
    var R, G;
    if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), R = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), G = arguments[3]), !(_ && _.isCamera)) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return
    }
    if (!p) {
      b.geometry = null, b.program = null, b.wireframe = !1, S = -1, T = null, y.autoUpdate === !0 && y.updateMatrixWorld(), _.parent === null && _.updateMatrixWorld(), ie.enabled && ie.isPresenting && (_ = ie.getCamera(_)), f = $.get(y, _), f.init(), y.onBeforeRender(d, y, _, R || x), Ue.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse), W.setFromProjectionMatrix(Ue), Pe = this.localClippingEnabled, re = Z.init(this.clippingPlanes, Pe, _), h = A.get(y, _), h.init(), Qe(y, _, 0, d.sortObjects), h.finish(), d.sortObjects === !0 && h.sort(z, O), re && Z.beginShadows();
      var Y = f.state.shadowsArray;
      ae.render(Y, y, _), f.setupLights(_), re && Z.endShadows(), this.info.autoReset && this.info.reset(), R !== void 0 && this.setRenderTarget(R), q.render(h, y, _, G);
      var xe = h.opaque,
        fe = h.transparent;
      if (y.overrideMaterial) {
        var Be = y.overrideMaterial;
        xe.length && bt(xe, y, _, Be), fe.length && bt(fe, y, _, Be)
      } else xe.length && bt(xe, y, _), fe.length && bt(fe, y, _);
      y.onAfterRender(d, y, _), x !== null && (ze.updateRenderTargetMipmap(x), ze.updateMultisampleRenderTarget(x)), ve.buffers.depth.setTest(!0), ve.buffers.depth.setMask(!0), ve.buffers.color.setMask(!0), ve.setPolygonOffset(!1), h = null, f = null
    }
  };

  function Qe(y, _, R, G) {
    if (y.visible !== !1) {
      var Y = y.layers.test(_.layers);
      if (Y) {
        if (y.isGroup) R = y.renderOrder;
        else if (y.isLOD) y.autoUpdate === !0 && y.update(_);
        else if (y.isLight) f.pushLight(y), y.castShadow && f.pushShadow(y);
        else if (y.isSprite) {
          if (!y.frustumCulled || W.intersectsSprite(y)) {
            G && Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ue);
            var xe = $e.update(y),
              fe = y.material;
            fe.visible && h.push(y, xe, fe, R, Le.z, null)
          }
        } else if (y.isImmediateRenderObject) G && Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ue), h.push(y, null, y.material, R, Le.z, null);
        else if ((y.isMesh || y.isLine || y.isPoints) && (y.isSkinnedMesh && y.skeleton.frame !== X.render.frame && (y.skeleton.update(), y.skeleton.frame = X.render.frame), !y.frustumCulled || W.intersectsObject(y))) {
          G && Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ue);
          var xe = $e.update(y),
            fe = y.material;
          if (Array.isArray(fe))
            for (var Be = xe.groups, Ee = 0, Ce = Be.length; Ee < Ce; Ee++) {
              var Je = Be[Ee],
                ke = fe[Je.materialIndex];
              ke && ke.visible && h.push(y, xe, ke, R, Le.z, Je)
            } else fe.visible && h.push(y, xe, fe, R, Le.z, null)
        }
      }
      for (var Ge = y.children, Ee = 0, Ce = Ge.length; Ee < Ce; Ee++) Qe(Ge[Ee], _, R, G)
    }
  }

  function bt(y, _, R, G) {
    for (var Y = 0, xe = y.length; Y < xe; Y++) {
      var fe = y[Y],
        Be = fe.object,
        Ee = fe.geometry,
        Ce = G === void 0 ? fe.material : G,
        Je = fe.group;
      if (R.isArrayCamera) {
        D = R;
        for (var ke = R.cameras, Ge = 0, pe = ke.length; Ge < pe; Ge++) {
          var be = ke[Ge];
          Be.layers.test(be.layers) && (ve.viewport(N.copy(be.viewport)), f.setupLights(be), Lt(Be, _, be, Ee, Ce, Je))
        }
      } else D = null, Lt(Be, _, R, Ee, Ce, Je)
    }
  }

  function Lt(y, _, R, G, Y, xe) {
    if (y.onBeforeRender(d, _, R, G, Y, xe), f = $.get(_, D || R), y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), y.isImmediateRenderObject) {
      var fe = ba(R, _, Y, y);
      ve.setMaterial(Y), b.geometry = null, b.program = null, b.wireframe = !1, Ie(y, fe)
    } else d.renderBufferDirect(R, _, G, Y, y, xe);
    y.onAfterRender(d, _, R, G, Y, xe), f = $.get(_, D || R)
  }

  function Ut(y, _, R) {
    var G = Ae.get(y),
      Y = f.state.lights,
      xe = f.state.shadowsArray,
      fe = Y.state.version,
      Be = E.getParameters(y, Y.state, xe, _, Z.numPlanes, Z.numIntersection, R),
      Ee = E.getProgramCacheKey(Be),
      Ce = G.program,
      Je = !0;
    if (Ce === void 0) y.addEventListener("dispose", P);
    else if (Ce.cacheKey !== Ee) he(y);
    else if (G.lightsStateVersion !== fe) G.lightsStateVersion = fe, Je = !1;
    else {
      if (Be.shaderID !== void 0) return;
      Je = !1
    }
    Je && (Ce = E.acquireProgram(Be, Ee), G.program = Ce, G.uniforms = Be.uniforms, G.environment = y.isMeshStandardMaterial ? _.environment : null, G.outputEncoding = d.outputEncoding, y.program = Ce);
    var ke = Ce.getAttributes();
    if (y.morphTargets) {
      y.numSupportedMorphTargets = 0;
      for (var Ge = 0; Ge < d.maxMorphTargets; Ge++) ke["morphTarget" + Ge] >= 0 && y.numSupportedMorphTargets++
    }
    if (y.morphNormals) {
      y.numSupportedMorphNormals = 0;
      for (var Ge = 0; Ge < d.maxMorphNormals; Ge++) ke["morphNormal" + Ge] >= 0 && y.numSupportedMorphNormals++
    }
    var pe = G.uniforms;
    (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (G.numClippingPlanes = Z.numPlanes, G.numIntersection = Z.numIntersection, pe.clippingPlanes = Z.uniform), G.fog = _.fog, G.needsLights = kh(y), G.lightsStateVersion = fe, G.needsLights && (pe.ambientLightColor.value = Y.state.ambient, pe.lightProbe.value = Y.state.probe, pe.directionalLights.value = Y.state.directional, pe.directionalLightShadows.value = Y.state.directionalShadow, pe.spotLights.value = Y.state.spot, pe.spotLightShadows.value = Y.state.spotShadow, pe.rectAreaLights.value = Y.state.rectArea, pe.pointLights.value = Y.state.point, pe.pointLightShadows.value = Y.state.pointShadow, pe.hemisphereLights.value = Y.state.hemi, pe.directionalShadowMap.value = Y.state.directionalShadowMap, pe.directionalShadowMatrix.value = Y.state.directionalShadowMatrix, pe.spotShadowMap.value = Y.state.spotShadowMap, pe.spotShadowMatrix.value = Y.state.spotShadowMatrix, pe.pointShadowMap.value = Y.state.pointShadowMap, pe.pointShadowMatrix.value = Y.state.pointShadowMatrix);
    var be = G.program.getUniforms(),
      Kt = Gn.seqWithValue(be.seq, pe);
    G.uniformsList = Kt
  }

  function ba(y, _, R, G) {
    ze.resetTextureUnits();
    var Y = _.fog,
      xe = R.isMeshStandardMaterial ? _.environment : null,
      fe = Ae.get(R),
      Be = f.state.lights;
    if (re && (Pe || y !== T)) {
      var Ee = y === T && R.id === S;
      Z.setState(R.clippingPlanes, R.clipIntersection, R.clipShadows, y, fe, Ee)
    }
    R.version === fe.__version ? (fe.program === void 0 || R.fog && fe.fog !== Y || fe.environment !== xe || fe.needsLights && fe.lightsStateVersion !== Be.state.version || fe.numClippingPlanes !== void 0 && (fe.numClippingPlanes !== Z.numPlanes || fe.numIntersection !== Z.numIntersection) || fe.outputEncoding !== d.outputEncoding) && Ut(R, _, G) : (Ut(R, _, G), fe.__version = R.version);
    var Ce = !1,
      Je = !1,
      ke = !1,
      Ge = fe.program,
      pe = Ge.getUniforms(),
      be = fe.uniforms;
    if (ve.useProgram(Ge.program) && (Ce = !0, Je = !0, ke = !0), R.id !== S && (S = R.id, Je = !0), Ce || T !== y) {
      if (pe.setValue(V, "projectionMatrix", y.projectionMatrix), Fe.logarithmicDepthBuffer && pe.setValue(V, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)), T !== y && (T = y, Je = !0, ke = !0), R.isShaderMaterial || R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshStandardMaterial || R.envMap) {
        var Kt = pe.map.cameraPosition;
        Kt !== void 0 && Kt.setValue(V, Le.setFromMatrixPosition(y.matrixWorld))
      }(R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial) && pe.setValue(V, "isOrthographic", y.isOrthographicCamera === !0), (R.isMeshPhongMaterial || R.isMeshToonMaterial || R.isMeshLambertMaterial || R.isMeshBasicMaterial || R.isMeshStandardMaterial || R.isShaderMaterial || R.skinning) && pe.setValue(V, "viewMatrix", y.matrixWorldInverse)
    }
    if (R.skinning) {
      pe.setOptional(V, G, "bindMatrix"), pe.setOptional(V, G, "bindMatrixInverse");
      var ut = G.skeleton;
      if (ut) {
        var xr = ut.bones;
        if (Fe.floatVertexTextures) {
          if (ut.boneTexture === void 0) {
            var Rt = Math.sqrt(xr.length * 4);
            Rt = Te.ceilPowerOfTwo(Rt), Rt = Math.max(Rt, 4);
            var Mt = new Float32Array(Rt * Rt * 4);
            Mt.set(ut.boneMatrices);
            var Ko = new Jr(Mt, Rt, Rt, $t, In);
            ut.boneMatrices = Mt, ut.boneTexture = Ko, ut.boneTextureSize = Rt
          }
          pe.setValue(V, "boneTexture", ut.boneTexture, ze), pe.setValue(V, "boneTextureSize", ut.boneTextureSize)
        } else pe.setOptional(V, ut, "boneMatrices")
      }
    }
    return (Je || fe.receiveShadow !== G.receiveShadow) && (fe.receiveShadow = G.receiveShadow, pe.setValue(V, "receiveShadow", G.receiveShadow)), Je && (pe.setValue(V, "toneMappingExposure", d.toneMappingExposure), pe.setValue(V, "toneMappingWhitePoint", d.toneMappingWhitePoint), fe.needsLights && Vh(be, ke), Y && R.fog && Oh(be, Y), R.isMeshBasicMaterial ? jt(be, R) : R.isMeshLambertMaterial ? (jt(be, R), Ih(be, R)) : R.isMeshToonMaterial ? (jt(be, R), Fh(be, R)) : R.isMeshPhongMaterial ? (jt(be, R), Nh(be, R)) : R.isMeshStandardMaterial ? (jt(be, R, xe), R.isMeshPhysicalMaterial ? Bh(be, R, xe) : Jl(be, R, xe)) : R.isMeshMatcapMaterial ? (jt(be, R), Uh(be, R)) : R.isMeshDepthMaterial ? (jt(be, R), zh(be, R)) : R.isMeshDistanceMaterial ? (jt(be, R), Gh(be, R)) : R.isMeshNormalMaterial ? (jt(be, R), Hh(be, R)) : R.isLineBasicMaterial ? (Ma(be, R), R.isLineDashedMaterial && wa(be, R)) : R.isPointsMaterial ? yr(be, R) : R.isSpriteMaterial ? Dh(be, R) : R.isShadowMaterial && (be.color.value.copy(R.color), be.opacity.value = R.opacity), be.ltc_1 !== void 0 && (be.ltc_1.value = te.LTC_1), be.ltc_2 !== void 0 && (be.ltc_2.value = te.LTC_2), Gn.upload(V, fe.uniformsList, be, ze), R.isShaderMaterial && (R.uniformsNeedUpdate = !1)), R.isShaderMaterial && R.uniformsNeedUpdate === !0 && (Gn.upload(V, fe.uniformsList, be, ze), R.uniformsNeedUpdate = !1), R.isSpriteMaterial && pe.setValue(V, "center", G.center), pe.setValue(V, "modelViewMatrix", G.modelViewMatrix), pe.setValue(V, "normalMatrix", G.normalMatrix), pe.setValue(V, "modelMatrix", G.matrixWorld), Ge
  }

  function jt(y, _, R) {
    y.opacity.value = _.opacity, _.color && y.diffuse.value.copy(_.color), _.emissive && y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (y.map.value = _.map), _.alphaMap && (y.alphaMap.value = _.alphaMap), _.specularMap && (y.specularMap.value = _.specularMap);
    var G = _.envMap || R;
    G && (y.envMap.value = G, y.flipEnvMap.value = G.isCubeTexture ? -1 : 1, y.reflectivity.value = _.reflectivity, y.refractionRatio.value = _.refractionRatio, y.maxMipLevel.value = Ae.get(G).__maxMipLevel), _.lightMap && (y.lightMap.value = _.lightMap, y.lightMapIntensity.value = _.lightMapIntensity), _.aoMap && (y.aoMap.value = _.aoMap, y.aoMapIntensity.value = _.aoMapIntensity);
    var Y;
    _.map ? Y = _.map : _.specularMap ? Y = _.specularMap : _.displacementMap ? Y = _.displacementMap : _.normalMap ? Y = _.normalMap : _.bumpMap ? Y = _.bumpMap : _.roughnessMap ? Y = _.roughnessMap : _.metalnessMap ? Y = _.metalnessMap : _.alphaMap ? Y = _.alphaMap : _.emissiveMap && (Y = _.emissiveMap), Y !== void 0 && (Y.isWebGLRenderTarget && (Y = Y.texture), Y.matrixAutoUpdate === !0 && Y.updateMatrix(), y.uvTransform.value.copy(Y.matrix));
    var xe;
    _.aoMap ? xe = _.aoMap : _.lightMap && (xe = _.lightMap), xe !== void 0 && (xe.isWebGLRenderTarget && (xe = xe.texture), xe.matrixAutoUpdate === !0 && xe.updateMatrix(), y.uv2Transform.value.copy(xe.matrix))
  }

  function Ma(y, _) {
    y.diffuse.value.copy(_.color), y.opacity.value = _.opacity
  }

  function wa(y, _) {
    y.dashSize.value = _.dashSize, y.totalSize.value = _.dashSize + _.gapSize, y.scale.value = _.scale
  }

  function yr(y, _) {
    y.diffuse.value.copy(_.color), y.opacity.value = _.opacity, y.size.value = _.size * U, y.scale.value = F * .5, _.map && (y.map.value = _.map), _.alphaMap && (y.alphaMap.value = _.alphaMap);
    var R;
    _.map ? R = _.map : _.alphaMap && (R = _.alphaMap), R !== void 0 && (R.matrixAutoUpdate === !0 && R.updateMatrix(), y.uvTransform.value.copy(R.matrix))
  }

  function Dh(y, _) {
    y.diffuse.value.copy(_.color), y.opacity.value = _.opacity, y.rotation.value = _.rotation, _.map && (y.map.value = _.map), _.alphaMap && (y.alphaMap.value = _.alphaMap);
    var R;
    _.map ? R = _.map : _.alphaMap && (R = _.alphaMap), R !== void 0 && (R.matrixAutoUpdate === !0 && R.updateMatrix(), y.uvTransform.value.copy(R.matrix))
  }

  function Oh(y, _) {
    y.fogColor.value.copy(_.color), _.isFog ? (y.fogNear.value = _.near, y.fogFar.value = _.far) : _.isFogExp2 && (y.fogDensity.value = _.density)
  }

  function Ih(y, _) {
    _.emissiveMap && (y.emissiveMap.value = _.emissiveMap)
  }

  function Nh(y, _) {
    y.specular.value.copy(_.specular), y.shininess.value = Math.max(_.shininess, 1e-4), _.emissiveMap && (y.emissiveMap.value = _.emissiveMap), _.bumpMap && (y.bumpMap.value = _.bumpMap, y.bumpScale.value = _.bumpScale, _.side === ht && (y.bumpScale.value *= -1)), _.normalMap && (y.normalMap.value = _.normalMap, y.normalScale.value.copy(_.normalScale), _.side === ht && y.normalScale.value.negate()), _.displacementMap && (y.displacementMap.value = _.displacementMap, y.displacementScale.value = _.displacementScale, y.displacementBias.value = _.displacementBias)
  }

  function Fh(y, _) {
    y.specular.value.copy(_.specular), y.shininess.value = Math.max(_.shininess, 1e-4), _.gradientMap && (y.gradientMap.value = _.gradientMap), _.emissiveMap && (y.emissiveMap.value = _.emissiveMap), _.bumpMap && (y.bumpMap.value = _.bumpMap, y.bumpScale.value = _.bumpScale, _.side === ht && (y.bumpScale.value *= -1)), _.normalMap && (y.normalMap.value = _.normalMap, y.normalScale.value.copy(_.normalScale), _.side === ht && y.normalScale.value.negate()), _.displacementMap && (y.displacementMap.value = _.displacementMap, y.displacementScale.value = _.displacementScale, y.displacementBias.value = _.displacementBias)
  }

  function Jl(y, _, R) {
    y.roughness.value = _.roughness, y.metalness.value = _.metalness, _.roughnessMap && (y.roughnessMap.value = _.roughnessMap), _.metalnessMap && (y.metalnessMap.value = _.metalnessMap), _.emissiveMap && (y.emissiveMap.value = _.emissiveMap), _.bumpMap && (y.bumpMap.value = _.bumpMap, y.bumpScale.value = _.bumpScale, _.side === ht && (y.bumpScale.value *= -1)), _.normalMap && (y.normalMap.value = _.normalMap, y.normalScale.value.copy(_.normalScale), _.side === ht && y.normalScale.value.negate()), _.displacementMap && (y.displacementMap.value = _.displacementMap, y.displacementScale.value = _.displacementScale, y.displacementBias.value = _.displacementBias), (_.envMap || R) && (y.envMapIntensity.value = _.envMapIntensity)
  }

  function Bh(y, _, R) {
    Jl(y, _, R), y.reflectivity.value = _.reflectivity, y.clearcoat.value = _.clearcoat, y.clearcoatRoughness.value = _.clearcoatRoughness, _.sheen && y.sheen.value.copy(_.sheen), _.clearcoatMap && (y.clearcoatMap.value = _.clearcoatMap), _.clearcoatRoughnessMap && (y.clearcoatRoughnessMap.value = _.clearcoatRoughnessMap), _.clearcoatNormalMap && (y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), y.clearcoatNormalMap.value = _.clearcoatNormalMap, _.side === ht && y.clearcoatNormalScale.value.negate()), y.transparency.value = _.transparency
  }

  function Uh(y, _) {
    _.matcap && (y.matcap.value = _.matcap), _.bumpMap && (y.bumpMap.value = _.bumpMap, y.bumpScale.value = _.bumpScale, _.side === ht && (y.bumpScale.value *= -1)), _.normalMap && (y.normalMap.value = _.normalMap, y.normalScale.value.copy(_.normalScale), _.side === ht && y.normalScale.value.negate()), _.displacementMap && (y.displacementMap.value = _.displacementMap, y.displacementScale.value = _.displacementScale, y.displacementBias.value = _.displacementBias)
  }

  function zh(y, _) {
    _.displacementMap && (y.displacementMap.value = _.displacementMap, y.displacementScale.value = _.displacementScale, y.displacementBias.value = _.displacementBias)
  }

  function Gh(y, _) {
    _.displacementMap && (y.displacementMap.value = _.displacementMap, y.displacementScale.value = _.displacementScale, y.displacementBias.value = _.displacementBias), y.referencePosition.value.copy(_.referencePosition), y.nearDistance.value = _.nearDistance, y.farDistance.value = _.farDistance
  }

  function Hh(y, _) {
    _.bumpMap && (y.bumpMap.value = _.bumpMap, y.bumpScale.value = _.bumpScale, _.side === ht && (y.bumpScale.value *= -1)), _.normalMap && (y.normalMap.value = _.normalMap, y.normalScale.value.copy(_.normalScale), _.side === ht && y.normalScale.value.negate()), _.displacementMap && (y.displacementMap.value = _.displacementMap, y.displacementScale.value = _.displacementScale, y.displacementBias.value = _.displacementBias)
  }

  function Vh(y, _) {
    y.ambientLightColor.needsUpdate = _, y.lightProbe.needsUpdate = _, y.directionalLights.needsUpdate = _, y.directionalLightShadows.needsUpdate = _, y.pointLights.needsUpdate = _, y.pointLightShadows.needsUpdate = _, y.spotLights.needsUpdate = _, y.spotLightShadows.needsUpdate = _, y.rectAreaLights.needsUpdate = _, y.hemisphereLights.needsUpdate = _
  }

  function kh(y) {
    return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0
  }
  this.setFramebuffer = function(y) {
    v !== y && x === null && V.bindFramebuffer(36160, y), v = y
  }, this.getActiveCubeFace = function() {
    return m
  }, this.getActiveMipmapLevel = function() {
    return g
  }, this.getRenderTarget = function() {
    return x
  }, this.setRenderTarget = function(y, _, R) {
    x = y, m = _, g = R, y && Ae.get(y).__webglFramebuffer === void 0 && ze.setupRenderTarget(y);
    var G = v,
      Y = !1;
    if (y) {
      var xe = Ae.get(y).__webglFramebuffer;
      y.isWebGLCubeRenderTarget ? (G = xe[_ || 0], Y = !0) : y.isWebGLMultisampleRenderTarget ? G = Ae.get(y).__webglMultisampledFramebuffer : G = xe, N.copy(y.viewport), C.copy(y.scissor), B = y.scissorTest
    } else N.copy(k).multiplyScalar(U).floor(), C.copy(j).multiplyScalar(U).floor(), B = J;
    if (w !== G && (V.bindFramebuffer(36160, G), w = G), ve.viewport(N), ve.scissor(C), ve.setScissorTest(B), Y) {
      var fe = Ae.get(y.texture);
      V.framebufferTexture2D(36160, 36064, 34069 + (_ || 0), fe.__webglTexture, R || 0)
    }
  }, this.readRenderTargetPixels = function(y, _, R, G, Y, xe, fe) {
    if (!(y && y.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return
    }
    var Be = Ae.get(y).__webglFramebuffer;
    if (y.isWebGLCubeRenderTarget && fe !== void 0 && (Be = Be[fe]), Be) {
      var Ee = !1;
      Be !== w && (V.bindFramebuffer(36160, Be), Ee = !0);
      try {
        var Ce = y.texture,
          Je = Ce.format,
          ke = Ce.type;
        if (Je !== $t && K.convert(Je) !== V.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return
        }
        if (ke !== Jo && K.convert(ke) !== V.getParameter(35738) && !(ke === In && (Fe.isWebGL2 || _e.get("OES_texture_float") || _e.get("WEBGL_color_buffer_float"))) && !(ke === ho && (Fe.isWebGL2 ? _e.get("EXT_color_buffer_float") : _e.get("EXT_color_buffer_half_float")))) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return
        }
        V.checkFramebufferStatus(36160) === 36053 ? _ >= 0 && _ <= y.width - G && R >= 0 && R <= y.height - Y && V.readPixels(_, R, G, Y, K.convert(Je), K.convert(ke), xe) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
      } finally {
        Ee && V.bindFramebuffer(36160, w)
      }
    }
  }, this.copyFramebufferToTexture = function(y, _, R) {
    R === void 0 && (R = 0);
    var G = Math.pow(2, -R),
      Y = Math.floor(_.image.width * G),
      xe = Math.floor(_.image.height * G),
      fe = K.convert(_.format);
    ze.setTexture2D(_, 0), V.copyTexImage2D(3553, R, fe, y.x, y.y, Y, xe, 0), ve.unbindTexture()
  }, this.copyTextureToTexture = function(y, _, R, G) {
    var Y = _.image.width,
      xe = _.image.height,
      fe = K.convert(R.format),
      Be = K.convert(R.type);
    ze.setTexture2D(R, 0), _.isDataTexture ? V.texSubImage2D(3553, G || 0, y.x, y.y, Y, xe, fe, Be, _.image.data) : V.texSubImage2D(3553, G || 0, y.x, y.y, fe, Be, _.image), ve.unbindTexture()
  }, this.initTexture = function(y) {
    ze.setTexture2D(y, 0), ve.unbindTexture()
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
    detail: this
  }))
}

function ks(e, t) {
  this.name = "", this.color = new oe(e), this.density = t !== void 0 ? t : 25e-5
}
Object.assign(ks.prototype, {
  isFogExp2: !0,
  clone: function() {
    return new ks(this.color, this.density)
  },
  toJSON: function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    }
  }
});

function Ws(e, t, n) {
  this.name = "", this.color = new oe(e), this.near = t !== void 0 ? t : 1, this.far = n !== void 0 ? n : 1e3
}
Object.assign(Ws.prototype, {
  isFog: !0,
  clone: function() {
    return new Ws(this.color, this.near, this.far)
  },
  toJSON: function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    }
  }
});

function Wn(e, t) {
  this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = $o, this.updateRange = {
    offset: 0,
    count: -1
  }, this.version = 0
}
Object.defineProperty(Wn.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++
  }
});
Object.assign(Wn.prototype, {
  isInterleavedBuffer: !0,
  onUploadCallback: function() {},
  setUsage: function(e) {
    return this.usage = e, this
  },
  copy: function(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
  },
  copyAt: function(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (var r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
    return this
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this
  }
});
var nr = new M;

function go(e, t, n, r) {
  this.data = e, this.itemSize = t, this.offset = n, this.normalized = r === !0
}
Object.defineProperties(go.prototype, {
  count: {
    get: function() {
      return this.data.count
    }
  },
  array: {
    get: function() {
      return this.data.array
    }
  }
});
Object.assign(go.prototype, {
  isInterleavedBufferAttribute: !0,
  applyMatrix4: function(e) {
    for (var t = 0, n = this.data.count; t < n; t++) nr.x = this.getX(t), nr.y = this.getY(t), nr.z = this.getZ(t), nr.applyMatrix4(e), this.setXYZ(t, nr.x, nr.y, nr.z);
    return this
  },
  setX: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset] = t, this
  },
  setY: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 1] = t, this
  },
  setZ: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 2] = t, this
  },
  setW: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 3] = t, this
  },
  getX: function(e) {
    return this.data.array[e * this.data.stride + this.offset]
  },
  getY: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 1]
  },
  getZ: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 2]
  },
  getW: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 3]
  },
  setXY: function(e, t, n) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
  },
  setXYZ: function(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this
  },
  setXYZW: function(e, t, n, r, i) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this
  }
});

function dr(e) {
  Me.call(this), this.type = "SpriteMaterial", this.color = new oe(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e)
}
dr.prototype = Object.create(Me.prototype);
dr.prototype.constructor = dr;
dr.prototype.isSpriteMaterial = !0;
dr.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
};
var Dr, Ei = new M,
  Or = new M,
  Ir = new M,
  Nr = new H,
  Ti = new H,
  oh = new De,
  Ga = new M,
  Ai = new M,
  Ha = new M,
  zc = new H,
  Ss = new H,
  Gc = new H;

function js(e) {
  if (Q.call(this), this.type = "Sprite", Dr === void 0) {
    Dr = new se;
    var t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
      n = new Wn(t, 5);
    Dr.setIndex([0, 1, 2, 0, 2, 3]), Dr.setAttribute("position", new go(n, 3, 0, !1)), Dr.setAttribute("uv", new go(n, 2, 3, !1))
  }
  this.geometry = Dr, this.material = e !== void 0 ? e : new dr, this.center = new H(.5, .5)
}
js.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: js,
  isSprite: !0,
  raycast: function(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Or.setFromMatrixScale(this.matrixWorld), oh.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ir.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Or.multiplyScalar(-Ir.z);
    var n = this.material.rotation,
      r, i;
    n !== 0 && (i = Math.cos(n), r = Math.sin(n));
    var a = this.center;
    Va(Ga.set(-.5, -.5, 0), Ir, a, Or, r, i), Va(Ai.set(.5, -.5, 0), Ir, a, Or, r, i), Va(Ha.set(.5, .5, 0), Ir, a, Or, r, i), zc.set(0, 0), Ss.set(1, 0), Gc.set(1, 1);
    var o = e.ray.intersectTriangle(Ga, Ai, Ha, !1, Ei);
    if (!(o === null && (Va(Ai.set(-.5, .5, 0), Ir, a, Or, r, i), Ss.set(0, 1), o = e.ray.intersectTriangle(Ga, Ha, Ai, !1, Ei), o === null))) {
      var s = e.ray.origin.distanceTo(Ei);
      s < e.near || s > e.far || t.push({
        distance: s,
        point: Ei.clone(),
        uv: pt.getUV(Ei, Ga, Ai, Ha, zc, Ss, Gc, new H),
        face: null,
        object: this
      })
    }
  },
  clone: function() {
    return new this.constructor(this.material).copy(this)
  },
  copy: function(e) {
    return Q.prototype.copy.call(this, e), e.center !== void 0 && this.center.copy(e.center), this
  }
});

function Va(e, t, n, r, i, a) {
  Nr.subVectors(e, n).addScalar(.5).multiply(r), i !== void 0 ? (Ti.x = a * Nr.x - i * Nr.y, Ti.y = i * Nr.x + a * Nr.y) : Ti.copy(Nr), e.copy(t), e.x += Ti.x, e.y += Ti.y, e.applyMatrix4(oh)
}
var ka = new M,
  Hc = new M;

function yo() {
  Q.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
    levels: {
      enumerable: !0,
      value: []
    }
  }), this.autoUpdate = !0
}
yo.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: yo,
  isLOD: !0,
  copy: function(e) {
    Q.prototype.copy.call(this, e, !1);
    for (var t = e.levels, n = 0, r = t.length; n < r; n++) {
      var i = t[n];
      this.addLevel(i.object.clone(), i.distance)
    }
    return this.autoUpdate = e.autoUpdate, this
  },
  addLevel: function(e, t) {
    t === void 0 && (t = 0), t = Math.abs(t);
    for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++);
    return n.splice(r, 0, {
      distance: t,
      object: e
    }), this.add(e), this
  },
  getCurrentLevel: function() {
    return this._currentLevel
  },
  getObjectForDistance: function(e) {
    var t = this.levels;
    if (t.length > 0) {
      for (var n = 1, r = t.length; n < r && !(e < t[n].distance); n++);
      return t[n - 1].object
    }
    return null
  },
  raycast: function(e, t) {
    var n = this.levels;
    if (n.length > 0) {
      ka.setFromMatrixPosition(this.matrixWorld);
      var r = e.ray.origin.distanceTo(ka);
      this.getObjectForDistance(r).raycast(e, t)
    }
  },
  update: function(e) {
    var t = this.levels;
    if (t.length > 1) {
      ka.setFromMatrixPosition(e.matrixWorld), Hc.setFromMatrixPosition(this.matrixWorld);
      var n = ka.distanceTo(Hc) / e.zoom;
      t[0].object.visible = !0;
      for (var r = 1, i = t.length; r < i && n >= t[r].distance; r++) t[r - 1].object.visible = !1, t[r].object.visible = !0;
      for (this._currentLevel = r - 1; r < i; r++) t[r].object.visible = !1
    }
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
      var a = n[r];
      t.object.levels.push({
        object: a.object.uuid,
        distance: a.distance
      })
    }
    return t
  }
});

function Xs(e, t) {
  e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), et.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new De, this.bindMatrixInverse = new De
}
Xs.prototype = Object.assign(Object.create(et.prototype), {
  constructor: Xs,
  isSkinnedMesh: !0,
  bind: function(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
  },
  pose: function() {
    this.skeleton.pose()
  },
  normalizeSkinWeights: function() {
    for (var e = new Ye, t = this.geometry.attributes.skinWeight, n = 0, r = t.count; n < r; n++) {
      e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
      var i = 1 / e.manhattanLength();
      i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w)
    }
  },
  updateMatrixWorld: function(e) {
    et.prototype.updateMatrixWorld.call(this, e), this.bindMode === "attached" ? this.bindMatrixInverse.getInverse(this.matrixWorld) : this.bindMode === "detached" ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this)
  }
});
var Vc = new De,
  Gg = new De;

function qs(e, t) {
  if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(this.bones.length * 16), this.frame = -1, t === void 0) this.calculateInverses();
  else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
  else {
    console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
    for (var n = 0, r = this.bones.length; n < r; n++) this.boneInverses.push(new De)
  }
}
Object.assign(qs.prototype, {
  calculateInverses: function() {
    this.boneInverses = [];
    for (var e = 0, t = this.bones.length; e < t; e++) {
      var n = new De;
      this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n)
    }
  },
  pose: function() {
    var e, t, n;
    for (t = 0, n = this.bones.length; t < n; t++) e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
    for (t = 0, n = this.bones.length; t < n; t++) e = this.bones[t], e && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
  },
  update: function() {
    for (var e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = e.length; i < a; i++) {
      var o = e[i] ? e[i].matrixWorld : Gg;
      Vc.multiplyMatrices(o, t[i]), Vc.toArray(n, i * 16)
    }
    r !== void 0 && (r.needsUpdate = !0)
  },
  clone: function() {
    return new qs(this.bones, this.boneInverses)
  },
  getBoneByName: function(e) {
    for (var t = 0, n = this.bones.length; t < n; t++) {
      var r = this.bones[t];
      if (r.name === e) return r
    }
  },
  dispose: function() {
    this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = void 0)
  }
});

function kc() {
  Q.call(this), this.type = "Bone"
}
kc.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: kc,
  isBone: !0
});
var Wc = new De,
  jc = new De,
  Fr = [],
  Li = new et;

function Ys(e, t, n) {
  et.call(this, e, t), this.instanceMatrix = new we(new Float32Array(n * 16), 16), this.count = n, this.frustumCulled = !1
}
Ys.prototype = Object.assign(Object.create(et.prototype), {
  constructor: Ys,
  isInstancedMesh: !0,
  getMatrixAt: function(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16)
  },
  raycast: function(e, t) {
    var n = this.matrixWorld,
      r = this.count;
    if (Li.geometry = this.geometry, Li.material = this.material, Li.material !== void 0)
      for (var i = 0; i < r; i++) this.getMatrixAt(i, Wc), jc.multiplyMatrices(n, Wc), Li.matrixWorld = jc, Li.raycast(e, Fr), Fr.length > 0 && (Fr[0].instanceId = i, Fr[0].object = this, t.push(Fr[0]), Fr.length = 0)
  },
  setMatrixAt: function(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16)
  },
  updateMorphTargets: function() {}
});

function at(e) {
  Me.call(this), this.type = "LineBasicMaterial", this.color = new oe(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e)
}
at.prototype = Object.create(Me.prototype);
at.prototype.constructor = at;
at.prototype.isLineBasicMaterial = !0;
at.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
};
var Xc = new M,
  qc = new M,
  Yc = new De,
  Wa = new vi,
  ja = new Yn;

function kt(e, t, n) {
  n === 1 && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Q.call(this), this.type = "Line", this.geometry = e !== void 0 ? e : new se, this.material = t !== void 0 ? t : new at
}
kt.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: kt,
  isLine: !0,
  computeLineDistances: function() {
    var e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        for (var t = e.attributes.position, n = [0], r = 1, i = t.count; r < i; r++) Xc.fromBufferAttribute(t, r - 1), qc.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Xc.distanceTo(qc);
        e.setAttribute("lineDistance", new ne(n, 1))
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry) {
      var a = e.vertices,
        n = e.lineDistances;
      n[0] = 0;
      for (var r = 1, i = a.length; r < i; r++) n[r] = n[r - 1], n[r] += a[r - 1].distanceTo(a[r])
    }
    return this
  },
  raycast: function(e, t) {
    var n = this.geometry,
      r = this.matrixWorld,
      i = e.params.Line.threshold;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ja.copy(n.boundingSphere), ja.applyMatrix4(r), ja.radius += i, e.ray.intersectsSphere(ja) !== !1) {
      Yc.getInverse(r), Wa.copy(e.ray).applyMatrix4(Yc);
      var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a,
        s = new M,
        l = new M,
        c = new M,
        u = new M,
        h = this && this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        var f = n.index,
          d = n.attributes,
          p = d.position.array;
        if (f !== null)
          for (var v = f.array, m = 0, g = v.length - 1; m < g; m += h) {
            var x = v[m],
              w = v[m + 1];
            s.fromArray(p, x * 3), l.fromArray(p, w * 3);
            var S = Wa.distanceSqToSegment(s, l, u, c);
            if (!(S > o)) {
              u.applyMatrix4(this.matrixWorld);
              var b = e.ray.origin.distanceTo(u);
              b < e.near || b > e.far || t.push({
                distance: b,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: m,
                face: null,
                faceIndex: null,
                object: this
              })
            }
          } else
            for (var m = 0, g = p.length / 3 - 1; m < g; m += h) {
              s.fromArray(p, 3 * m), l.fromArray(p, 3 * m + 3);
              var S = Wa.distanceSqToSegment(s, l, u, c);
              if (!(S > o)) {
                u.applyMatrix4(this.matrixWorld);
                var b = e.ray.origin.distanceTo(u);
                b < e.near || b > e.far || t.push({
                  distance: b,
                  point: c.clone().applyMatrix4(this.matrixWorld),
                  index: m,
                  face: null,
                  faceIndex: null,
                  object: this
                })
              }
            }
      } else if (n.isGeometry)
        for (var T = n.vertices, D = T.length, m = 0; m < D - 1; m += h) {
          var S = Wa.distanceSqToSegment(T[m], T[m + 1], u, c);
          if (!(S > o)) {
            u.applyMatrix4(this.matrixWorld);
            var b = e.ray.origin.distanceTo(u);
            b < e.near || b > e.far || t.push({
              distance: b,
              point: c.clone().applyMatrix4(this.matrixWorld),
              index: m,
              face: null,
              faceIndex: null,
              object: this
            })
          }
        }
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this)
  }
});
var Xa = new M,
  qa = new M;

function ct(e, t) {
  kt.call(this, e, t), this.type = "LineSegments"
}
ct.prototype = Object.assign(Object.create(kt.prototype), {
  constructor: ct,
  isLineSegments: !0,
  computeLineDistances: function() {
    var e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        for (var t = e.attributes.position, n = [], r = 0, i = t.count; r < i; r += 2) Xa.fromBufferAttribute(t, r), qa.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Xa.distanceTo(qa);
        e.setAttribute("lineDistance", new ne(n, 1))
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry)
      for (var a = e.vertices, n = e.lineDistances, r = 0, i = a.length; r < i; r += 2) Xa.copy(a[r]), qa.copy(a[r + 1]), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Xa.distanceTo(qa);
    return this
  }
});

function Zs(e, t) {
  kt.call(this, e, t), this.type = "LineLoop"
}
Zs.prototype = Object.assign(Object.create(kt.prototype), {
  constructor: Zs,
  isLineLoop: !0
});

function pr(e) {
  Me.call(this), this.type = "PointsMaterial", this.color = new oe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e)
}
pr.prototype = Object.create(Me.prototype);
pr.prototype.constructor = pr;
pr.prototype.isPointsMaterial = !0;
pr.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
};
var Zc = new De,
  Js = new vi,
  Ya = new Yn,
  Za = new M;

function $s(e, t) {
  Q.call(this), this.type = "Points", this.geometry = e !== void 0 ? e : new se, this.material = t !== void 0 ? t : new pr, this.updateMorphTargets()
}
$s.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: $s,
  isPoints: !0,
  raycast: function(e, t) {
    var n = this.geometry,
      r = this.matrixWorld,
      i = e.params.Points.threshold;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ya.copy(n.boundingSphere), Ya.applyMatrix4(r), Ya.radius += i, e.ray.intersectsSphere(Ya) !== !1) {
      Zc.getInverse(r), Js.copy(e.ray).applyMatrix4(Zc);
      var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        o = a * a;
      if (n.isBufferGeometry) {
        var s = n.index,
          l = n.attributes,
          c = l.position.array;
        if (s !== null)
          for (var u = s.array, h = 0, f = u.length; h < f; h++) {
            var d = u[h];
            Za.fromArray(c, d * 3), Es(Za, d, o, r, e, t, this)
          } else
            for (var h = 0, p = c.length / 3; h < p; h++) Za.fromArray(c, h * 3), Es(Za, h, o, r, e, t, this)
      } else
        for (var v = n.vertices, h = 0, p = v.length; h < p; h++) Es(v[h], h, o, r, e, t, this)
    }
  },
  updateMorphTargets: function() {
    var e = this.geometry,
      t, n, r;
    if (e.isBufferGeometry) {
      var i = e.morphAttributes,
        a = Object.keys(i);
      if (a.length > 0) {
        var o = i[a[0]];
        if (o !== void 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = o.length; t < n; t++) r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t
      }
    } else {
      var s = e.morphTargets;
      s !== void 0 && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this)
  }
});

function Es(e, t, n, r, i, a, o) {
  var s = Js.distanceSqToPoint(e);
  if (s < n) {
    var l = new M;
    Js.closestPointToPoint(e, l), l.applyMatrix4(r);
    var c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    a.push({
      distance: c,
      distanceToRay: Math.sqrt(s),
      point: l,
      index: t,
      face: null,
      object: o
    })
  }
}

function Jc(e, t, n, r, i, a, o, s, l) {
  Ze.call(this, e, t, n, r, i, a, o, s, l), this.format = o !== void 0 ? o : zn, this.minFilter = a !== void 0 ? a : ft, this.magFilter = i !== void 0 ? i : ft, this.generateMipmaps = !1
}
Jc.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: Jc,
  isVideoTexture: !0,
  update: function() {
    var e = this.image;
    e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
  }
});

function Wi(e, t, n, r, i, a, o, s, l, c, u, h) {
  Ze.call(this, null, a, o, s, l, c, r, i, u, h), this.image = {
    width: t,
    height: n
  }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
}
Wi.prototype = Object.create(Ze.prototype);
Wi.prototype.constructor = Wi;
Wi.prototype.isCompressedTexture = !0;

function xo(e, t, n, r, i, a, o, s, l) {
  Ze.call(this, e, t, n, r, i, a, o, s, l), this.needsUpdate = !0
}
xo.prototype = Object.create(Ze.prototype);
xo.prototype.constructor = xo;
xo.prototype.isCanvasTexture = !0;

function _o(e, t, n, r, i, a, o, s, l, c) {
  if (c = c !== void 0 ? c : jr, c !== jr && c !== Fi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
  n === void 0 && c === jr && (n = uo), n === void 0 && c === Fi && (n = Di), Ze.call(this, null, r, i, a, o, s, c, n, l), this.image = {
    width: e,
    height: t
  }, this.magFilter = o !== void 0 ? o : lt, this.minFilter = s !== void 0 ? s : lt, this.flipY = !1, this.generateMipmaps = !1
}
_o.prototype = Object.create(Ze.prototype);
_o.prototype.constructor = _o;
_o.prototype.isDepthTexture = !0;

function bo(e) {
  se.call(this), this.type = "WireframeGeometry";
  var t = [],
    n, r, i, a, o, s = [0, 0],
    l = {},
    c, u, h, f, d = ["a", "b", "c"],
    p;
  if (e && e.isGeometry) {
    var v = e.faces;
    for (n = 0, i = v.length; n < i; n++) {
      var m = v[n];
      for (r = 0; r < 3; r++) u = m[d[r]], h = m[d[(r + 1) % 3]], s[0] = Math.min(u, h), s[1] = Math.max(u, h), f = s[0] + "," + s[1], l[f] === void 0 && (l[f] = {
        index1: s[0],
        index2: s[1]
      })
    }
    for (f in l) c = l[f], p = e.vertices[c.index1], t.push(p.x, p.y, p.z), p = e.vertices[c.index2], t.push(p.x, p.y, p.z)
  } else if (e && e.isBufferGeometry) {
    var g, x, w, S, b, T, D, N;
    if (p = new M, e.index !== null) {
      for (g = e.attributes.position, x = e.index, w = e.groups, w.length === 0 && (w = [{
          start: 0,
          count: x.count,
          materialIndex: 0
        }]), a = 0, o = w.length; a < o; ++a)
        for (S = w[a], b = S.start, T = S.count, n = b, i = b + T; n < i; n += 3)
          for (r = 0; r < 3; r++) u = x.getX(n + r), h = x.getX(n + (r + 1) % 3), s[0] = Math.min(u, h), s[1] = Math.max(u, h), f = s[0] + "," + s[1], l[f] === void 0 && (l[f] = {
            index1: s[0],
            index2: s[1]
          });
      for (f in l) c = l[f], p.fromBufferAttribute(g, c.index1), t.push(p.x, p.y, p.z), p.fromBufferAttribute(g, c.index2), t.push(p.x, p.y, p.z)
    } else
      for (g = e.attributes.position, n = 0, i = g.count / 3; n < i; n++)
        for (r = 0; r < 3; r++) D = 3 * n + r, p.fromBufferAttribute(g, D), t.push(p.x, p.y, p.z), N = 3 * n + (r + 1) % 3, p.fromBufferAttribute(g, N), t.push(p.x, p.y, p.z)
  }
  this.setAttribute("position", new ne(t, 3))
}
bo.prototype = Object.create(se.prototype);
bo.prototype.constructor = bo;

function Mo(e, t, n) {
  Se.call(this), this.type = "ParametricGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  }, this.fromBufferGeometry(new ji(e, t, n)), this.mergeVertices()
}
Mo.prototype = Object.create(Se.prototype);
Mo.prototype.constructor = Mo;

function ji(e, t, n) {
  se.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  };
  var r = [],
    i = [],
    a = [],
    o = [],
    s = 1e-5,
    l = new M,
    c = new M,
    u = new M,
    h = new M,
    f = new M,
    d, p;
  e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
  var v = t + 1;
  for (d = 0; d <= n; d++) {
    var m = d / n;
    for (p = 0; p <= t; p++) {
      var g = p / t;
      e(g, m, c), i.push(c.x, c.y, c.z), g - s >= 0 ? (e(g - s, m, u), h.subVectors(c, u)) : (e(g + s, m, u), h.subVectors(u, c)), m - s >= 0 ? (e(g, m - s, u), f.subVectors(c, u)) : (e(g, m + s, u), f.subVectors(u, c)), l.crossVectors(h, f).normalize(), a.push(l.x, l.y, l.z), o.push(g, m)
    }
  }
  for (d = 0; d < n; d++)
    for (p = 0; p < t; p++) {
      var x = d * v + p,
        w = d * v + p + 1,
        S = (d + 1) * v + p + 1,
        b = (d + 1) * v + p;
      r.push(x, w, b), r.push(w, S, b)
    }
  this.setIndex(r), this.setAttribute("position", new ne(i, 3)), this.setAttribute("normal", new ne(a, 3)), this.setAttribute("uv", new ne(o, 2))
}
ji.prototype = Object.create(se.prototype);
ji.prototype.constructor = ji;

function wo(e, t, n, r) {
  Se.call(this), this.type = "PolyhedronGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: r
  }, this.fromBufferGeometry(new Nt(e, t, n, r)), this.mergeVertices()
}
wo.prototype = Object.create(Se.prototype);
wo.prototype.constructor = wo;

function Nt(e, t, n, r) {
  se.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: r
  }, n = n || 1, r = r || 0;
  var i = [],
    a = [];
  o(r), l(n), c(), this.setAttribute("position", new ne(i, 3)), this.setAttribute("normal", new ne(i.slice(), 3)), this.setAttribute("uv", new ne(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();

  function o(g) {
    for (var x = new M, w = new M, S = new M, b = 0; b < t.length; b += 3) f(t[b + 0], x), f(t[b + 1], w), f(t[b + 2], S), s(x, w, S, g)
  }

  function s(g, x, w, S) {
    var b = Math.pow(2, S),
      T = [],
      D, N;
    for (D = 0; D <= b; D++) {
      T[D] = [];
      var C = g.clone().lerp(w, D / b),
        B = x.clone().lerp(w, D / b),
        I = b - D;
      for (N = 0; N <= I; N++) N === 0 && D === b ? T[D][N] = C : T[D][N] = C.clone().lerp(B, N / I)
    }
    for (D = 0; D < b; D++)
      for (N = 0; N < 2 * (b - D) - 1; N++) {
        var F = Math.floor(N / 2);
        N % 2 === 0 ? (h(T[D][F + 1]), h(T[D + 1][F]), h(T[D][F])) : (h(T[D][F + 1]), h(T[D + 1][F + 1]), h(T[D + 1][F]))
      }
  }

  function l(g) {
    for (var x = new M, w = 0; w < i.length; w += 3) x.x = i[w + 0], x.y = i[w + 1], x.z = i[w + 2], x.normalize().multiplyScalar(g), i[w + 0] = x.x, i[w + 1] = x.y, i[w + 2] = x.z
  }

  function c() {
    for (var g = new M, x = 0; x < i.length; x += 3) {
      g.x = i[x + 0], g.y = i[x + 1], g.z = i[x + 2];
      var w = v(g) / 2 / Math.PI + .5,
        S = m(g) / Math.PI + .5;
      a.push(w, 1 - S)
    }
    d(), u()
  }

  function u() {
    for (var g = 0; g < a.length; g += 6) {
      var x = a[g + 0],
        w = a[g + 2],
        S = a[g + 4],
        b = Math.max(x, w, S),
        T = Math.min(x, w, S);
      b > .9 && T < .1 && (x < .2 && (a[g + 0] += 1), w < .2 && (a[g + 2] += 1), S < .2 && (a[g + 4] += 1))
    }
  }

  function h(g) {
    i.push(g.x, g.y, g.z)
  }

  function f(g, x) {
    var w = g * 3;
    x.x = e[w + 0], x.y = e[w + 1], x.z = e[w + 2]
  }

  function d() {
    for (var g = new M, x = new M, w = new M, S = new M, b = new H, T = new H, D = new H, N = 0, C = 0; N < i.length; N += 9, C += 6) {
      g.set(i[N + 0], i[N + 1], i[N + 2]), x.set(i[N + 3], i[N + 4], i[N + 5]), w.set(i[N + 6], i[N + 7], i[N + 8]), b.set(a[C + 0], a[C + 1]), T.set(a[C + 2], a[C + 3]), D.set(a[C + 4], a[C + 5]), S.copy(g).add(x).add(w).divideScalar(3);
      var B = v(S);
      p(b, C + 0, g, B), p(T, C + 2, x, B), p(D, C + 4, w, B)
    }
  }

  function p(g, x, w, S) {
    S < 0 && g.x === 1 && (a[x] = g.x - 1), w.x === 0 && w.z === 0 && (a[x] = S / 2 / Math.PI + .5)
  }

  function v(g) {
    return Math.atan2(g.z, -g.x)
  }

  function m(g) {
    return Math.atan2(-g.y, Math.sqrt(g.x * g.x + g.z * g.z))
  }
}
Nt.prototype = Object.create(se.prototype);
Nt.prototype.constructor = Nt;

function So(e, t) {
  Se.call(this), this.type = "TetrahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Xi(e, t)), this.mergeVertices()
}
So.prototype = Object.create(Se.prototype);
So.prototype.constructor = So;

function Xi(e, t) {
  var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
    r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
  Nt.call(this, n, r, e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  }
}
Xi.prototype = Object.create(Nt.prototype);
Xi.prototype.constructor = Xi;

function Eo(e, t) {
  Se.call(this), this.type = "OctahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Qr(e, t)), this.mergeVertices()
}
Eo.prototype = Object.create(Se.prototype);
Eo.prototype.constructor = Eo;

function Qr(e, t) {
  var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
    r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
  Nt.call(this, n, r, e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  }
}
Qr.prototype = Object.create(Nt.prototype);
Qr.prototype.constructor = Qr;

function To(e, t) {
  Se.call(this), this.type = "IcosahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new qi(e, t)), this.mergeVertices()
}
To.prototype = Object.create(Se.prototype);
To.prototype.constructor = To;

function qi(e, t) {
  var n = (1 + Math.sqrt(5)) / 2,
    r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1],
    i = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
  Nt.call(this, r, i, e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  }
}
qi.prototype = Object.create(Nt.prototype);
qi.prototype.constructor = qi;

function Ao(e, t) {
  Se.call(this), this.type = "DodecahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Yi(e, t)), this.mergeVertices()
}
Ao.prototype = Object.create(Se.prototype);
Ao.prototype.constructor = Ao;

function Yi(e, t) {
  var n = (1 + Math.sqrt(5)) / 2,
    r = 1 / n,
    i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r],
    a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
  Nt.call(this, i, a, e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  }
}
Yi.prototype = Object.create(Nt.prototype);
Yi.prototype.constructor = Yi;

function Lo(e, t, n, r, i, a) {
  Se.call(this), this.type = "TubeGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: r,
    closed: i
  }, a !== void 0 && console.warn("THREE.TubeGeometry: taper has been removed.");
  var o = new Kr(e, t, n, r, i);
  this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
}
Lo.prototype = Object.create(Se.prototype);
Lo.prototype.constructor = Lo;

function Kr(e, t, n, r, i) {
  se.call(this), this.type = "TubeBufferGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: r,
    closed: i
  }, t = t || 64, n = n || 1, r = r || 8, i = i || !1;
  var a = e.computeFrenetFrames(t, i);
  this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
  var o = new M,
    s = new M,
    l = new H,
    c = new M,
    u, h, f = [],
    d = [],
    p = [],
    v = [];
  m(), this.setIndex(v), this.setAttribute("position", new ne(f, 3)), this.setAttribute("normal", new ne(d, 3)), this.setAttribute("uv", new ne(p, 2));

  function m() {
    for (u = 0; u < t; u++) g(u);
    g(i === !1 ? t : 0), w(), x()
  }

  function g(S) {
    c = e.getPointAt(S / t, c);
    var b = a.normals[S],
      T = a.binormals[S];
    for (h = 0; h <= r; h++) {
      var D = h / r * Math.PI * 2,
        N = Math.sin(D),
        C = -Math.cos(D);
      s.x = C * b.x + N * T.x, s.y = C * b.y + N * T.y, s.z = C * b.z + N * T.z, s.normalize(), d.push(s.x, s.y, s.z), o.x = c.x + n * s.x, o.y = c.y + n * s.y, o.z = c.z + n * s.z, f.push(o.x, o.y, o.z)
    }
  }

  function x() {
    for (h = 1; h <= t; h++)
      for (u = 1; u <= r; u++) {
        var S = (r + 1) * (h - 1) + (u - 1),
          b = (r + 1) * h + (u - 1),
          T = (r + 1) * h + u,
          D = (r + 1) * (h - 1) + u;
        v.push(S, b, D), v.push(b, T, D)
      }
  }

  function w() {
    for (u = 0; u <= t; u++)
      for (h = 0; h <= r; h++) l.x = u / t, l.y = h / r, p.push(l.x, l.y)
  }
}
Kr.prototype = Object.create(se.prototype);
Kr.prototype.constructor = Kr;
Kr.prototype.toJSON = function() {
  var e = se.prototype.toJSON.call(this);
  return e.path = this.parameters.path.toJSON(), e
};

function Ro(e, t, n, r, i, a, o) {
  Se.call(this), this.type = "TorusKnotGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: r,
    p: i,
    q: a
  }, o !== void 0 && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Zi(e, t, n, r, i, a)), this.mergeVertices()
}
Ro.prototype = Object.create(Se.prototype);
Ro.prototype.constructor = Ro;

function Zi(e, t, n, r, i, a) {
  se.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: r,
    p: i,
    q: a
  }, e = e || 1, t = t || .4, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, a = a || 3;
  var o = [],
    s = [],
    l = [],
    c = [],
    u, h, f = new M,
    d = new M,
    p = new M,
    v = new M,
    m = new M,
    g = new M,
    x = new M;
  for (u = 0; u <= n; ++u) {
    var w = u / n * i * Math.PI * 2;
    for (I(w, i, a, e, p), I(w + .01, i, a, e, v), g.subVectors(v, p), x.addVectors(v, p), m.crossVectors(g, x), x.crossVectors(m, g), m.normalize(), x.normalize(), h = 0; h <= r; ++h) {
      var S = h / r * Math.PI * 2,
        b = -t * Math.cos(S),
        T = t * Math.sin(S);
      f.x = p.x + (b * x.x + T * m.x), f.y = p.y + (b * x.y + T * m.y), f.z = p.z + (b * x.z + T * m.z), s.push(f.x, f.y, f.z), d.subVectors(f, p).normalize(), l.push(d.x, d.y, d.z), c.push(u / n), c.push(h / r)
    }
  }
  for (h = 1; h <= n; h++)
    for (u = 1; u <= r; u++) {
      var D = (r + 1) * (h - 1) + (u - 1),
        N = (r + 1) * h + (u - 1),
        C = (r + 1) * h + u,
        B = (r + 1) * (h - 1) + u;
      o.push(D, N, B), o.push(N, C, B)
    }
  this.setIndex(o), this.setAttribute("position", new ne(s, 3)), this.setAttribute("normal", new ne(l, 3)), this.setAttribute("uv", new ne(c, 2));

  function I(F, U, z, O, k) {
    var j = Math.cos(F),
      J = Math.sin(F),
      W = z / U * F,
      Z = Math.cos(W);
    k.x = O * (2 + Z) * .5 * j, k.y = O * (2 + Z) * J * .5, k.z = O * Math.sin(W) * .5
  }
}
Zi.prototype = Object.create(se.prototype);
Zi.prototype.constructor = Zi;

function Co(e, t, n, r, i) {
  Se.call(this), this.type = "TorusGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: r,
    arc: i
  }, this.fromBufferGeometry(new Ji(e, t, n, r, i)), this.mergeVertices()
}
Co.prototype = Object.create(Se.prototype);
Co.prototype.constructor = Co;

function Ji(e, t, n, r, i) {
  se.call(this), this.type = "TorusBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: r,
    arc: i
  }, e = e || 1, t = t || .4, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || Math.PI * 2;
  var a = [],
    o = [],
    s = [],
    l = [],
    c = new M,
    u = new M,
    h = new M,
    f, d;
  for (f = 0; f <= n; f++)
    for (d = 0; d <= r; d++) {
      var p = d / r * i,
        v = f / n * Math.PI * 2;
      u.x = (e + t * Math.cos(v)) * Math.cos(p), u.y = (e + t * Math.cos(v)) * Math.sin(p), u.z = t * Math.sin(v), o.push(u.x, u.y, u.z), c.x = e * Math.cos(p), c.y = e * Math.sin(p), h.subVectors(u, c).normalize(), s.push(h.x, h.y, h.z), l.push(d / r), l.push(f / n)
    }
  for (f = 1; f <= n; f++)
    for (d = 1; d <= r; d++) {
      var m = (r + 1) * f + d - 1,
        g = (r + 1) * (f - 1) + d - 1,
        x = (r + 1) * (f - 1) + d,
        w = (r + 1) * f + d;
      a.push(m, g, w), a.push(g, x, w)
    }
  this.setIndex(a), this.setAttribute("position", new ne(o, 3)), this.setAttribute("normal", new ne(s, 3)), this.setAttribute("uv", new ne(l, 2))
}
Ji.prototype = Object.create(se.prototype);
Ji.prototype.constructor = Ji;
var Hg = {
  triangulate: function(e, t, n) {
    n = n || 2;
    var r = t && t.length,
      i = r ? t[0] * n : e.length,
      a = sh(e, 0, i, n, !0),
      o = [];
    if (!a || a.next === a.prev) return o;
    var s, l, c, u, h, f, d;
    if (r && (a = Xg(e, t, a, n)), e.length > 80 * n) {
      s = c = e[0], l = u = e[1];
      for (var p = n; p < i; p += n) h = e[p], f = e[p + 1], h < s && (s = h), f < l && (l = f), h > c && (c = h), f > u && (u = f);
      d = Math.max(c - s, u - l), d = d !== 0 ? 1 / d : 0
    }
    return Qi(a, o, n, s, l, d), o
  }
};

function sh(e, t, n, r, i) {
  var a, o;
  if (i === ny(e, t, n, r) > 0)
    for (a = t; a < n; a += r) o = $c(a, e[a], e[a + 1], o);
  else
    for (a = n - r; a >= t; a -= r) o = $c(a, e[a], e[a + 1], o);
  return o && lr(o, o.next) && (ea(o), o = o.next), o
}

function $i(e, t) {
  if (!e) return e;
  t || (t = e);
  var n = e,
    r;
  do
    if (r = !1, !n.steiner && (lr(n, n.next) || vt(n.prev, n, n.next) === 0)) {
      if (ea(n), n = t = n.prev, n === n.next) break;
      r = !0
    } else n = n.next; while (r || n !== t);
  return t
}

function Qi(e, t, n, r, i, a, o) {
  if (e) {
    !o && a && Jg(e, r, i, a);
    for (var s = e, l, c; e.prev !== e.next;) {
      if (l = e.prev, c = e.next, a ? kg(e, r, i, a) : Vg(e)) {
        t.push(l.i / n), t.push(e.i / n), t.push(c.i / n), ea(e), e = c.next, s = c.next;
        continue
      }
      if (e = c, e === s) {
        o ? o === 1 ? (e = Wg(e, t, n), Qi(e, t, n, r, i, a, 2)) : o === 2 && jg(e, t, n, r, i, a) : Qi($i(e), t, n, r, i, a, 1);
        break
      }
    }
  }
}

function Vg(e) {
  var t = e.prev,
    n = e,
    r = e.next;
  if (vt(t, n, r) >= 0) return !1;
  for (var i = e.next.next; i !== e.prev;) {
    if (Wr(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && vt(i.prev, i, i.next) >= 0) return !1;
    i = i.next
  }
  return !0
}

function kg(e, t, n, r) {
  var i = e.prev,
    a = e,
    o = e.next;
  if (vt(i, a, o) >= 0) return !1;
  for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, l = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, c = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, h = Qs(s, l, t, n, r), f = Qs(c, u, t, n, r), d = e.prevZ, p = e.nextZ; d && d.z >= h && p && p.z <= f;) {
    if (d !== e.prev && d !== e.next && Wr(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0 || (d = d.prevZ, p !== e.prev && p !== e.next && Wr(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0)) return !1;
    p = p.nextZ
  }
  for (; d && d.z >= h;) {
    if (d !== e.prev && d !== e.next && Wr(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0) return !1;
    d = d.prevZ
  }
  for (; p && p.z <= f;) {
    if (p !== e.prev && p !== e.next && Wr(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0) return !1;
    p = p.nextZ
  }
  return !0
}

function Wg(e, t, n) {
  var r = e;
  do {
    var i = r.prev,
      a = r.next.next;
    !lr(i, a) && lh(i, r, r.next, a) && Ki(i, a) && Ki(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), ea(r), ea(r.next), r = e = a), r = r.next
  } while (r !== e);
  return r
}

function jg(e, t, n, r, i, a) {
  var o = e;
  do {
    for (var s = o.next.next; s !== o.prev;) {
      if (o.i !== s.i && Kg(o, s)) {
        var l = ch(o, s);
        o = $i(o, o.next), l = $i(l, l.next), Qi(o, t, n, r, i, a), Qi(l, t, n, r, i, a);
        return
      }
      s = s.next
    }
    o = o.next
  } while (o !== e)
}

function Xg(e, t, n, r) {
  var i = [],
    a, o, s, l, c;
  for (a = 0, o = t.length; a < o; a++) s = t[a] * r, l = a < o - 1 ? t[a + 1] * r : e.length, c = sh(e, s, l, r, !1), c === c.next && (c.steiner = !0), i.push(Qg(c));
  for (i.sort(qg), a = 0; a < i.length; a++) Yg(i[a], n), n = $i(n, n.next);
  return n
}

function qg(e, t) {
  return e.x - t.x
}

function Yg(e, t) {
  if (t = Zg(e, t), t) {
    var n = ch(t, e);
    $i(n, n.next)
  }
}

function Zg(e, t) {
  var n = t,
    r = e.x,
    i = e.y,
    a = -1 / 0,
    o;
  do {
    if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
      var s = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (s <= r && s > a) {
        if (a = s, s === r) {
          if (i === n.y) return n;
          if (i === n.next.y) return n.next
        }
        o = n.x < n.next.x ? n : n.next
      }
    }
    n = n.next
  } while (n !== t);
  if (!o) return null;
  if (r === a) return o.prev;
  var l = o,
    c = o.x,
    u = o.y,
    h = 1 / 0,
    f;
  for (n = o.next; n !== l;) r >= n.x && n.x >= c && r !== n.x && Wr(i < u ? r : a, i, c, u, i < u ? a : r, i, n.x, n.y) && (f = Math.abs(i - n.y) / (r - n.x), (f < h || f === h && n.x > o.x) && Ki(n, e) && (o = n, h = f)), n = n.next;
  return o
}

function Jg(e, t, n, r) {
  var i = e;
  do i.z === null && (i.z = Qs(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== e);
  i.prevZ.nextZ = null, i.prevZ = null, $g(i)
}

function $g(e) {
  var t, n, r, i, a, o, s, l, c = 1;
  do {
    for (n = e, e = null, a = null, o = 0; n;) {
      for (o++, r = n, s = 0, t = 0; t < c && (s++, r = r.nextZ, !!r); t++);
      for (l = c; s > 0 || l > 0 && r;) s !== 0 && (l === 0 || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, l--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
      n = r
    }
    a.nextZ = null, c *= 2
  } while (o > 1);
  return e
}

function Qs(e, t, n, r, i) {
  return e = 32767 * (e - n) * i, t = 32767 * (t - r) * i, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1
}

function Qg(e) {
  var t = e,
    n = e;
  do(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next; while (t !== e);
  return n
}

function Wr(e, t, n, r, i, a, o, s) {
  return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0
}

function Kg(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !ey(e, t) && Ki(e, t) && Ki(t, e) && ty(e, t)
}

function vt(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
}

function lr(e, t) {
  return e.x === t.x && e.y === t.y
}

function lh(e, t, n, r) {
  return lr(e, n) && lr(t, r) || lr(e, r) && lr(n, t) ? !0 : vt(e, t, n) > 0 != vt(e, t, r) > 0 && vt(n, r, e) > 0 != vt(n, r, t) > 0
}

function ey(e, t) {
  var n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && lh(n, n.next, e, t)) return !0;
    n = n.next
  } while (n !== e);
  return !1
}

function Ki(e, t) {
  return vt(e.prev, e, e.next) < 0 ? vt(e, t, e.next) >= 0 && vt(e, e.prev, t) >= 0 : vt(e, t, e.prev) < 0 || vt(e, e.next, t) < 0
}

function ty(e, t) {
  var n = e,
    r = !1,
    i = (e.x + t.x) / 2,
    a = (e.y + t.y) / 2;
  do n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next; while (n !== e);
  return r
}

function ch(e, t) {
  var n = new Ks(e.i, e.x, e.y),
    r = new Ks(t.i, t.x, t.y),
    i = e.next,
    a = t.prev;
  return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r
}

function $c(e, t, n, r) {
  var i = new Ks(e, t, n);
  return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
}

function ea(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
}

function Ks(e, t, n) {
  this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
}

function ny(e, t, n, r) {
  for (var i = 0, a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
  return i
}
var Hn = {
  area: function(e) {
    for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
    return n * .5
  },
  isClockWise: function(e) {
    return Hn.area(e) < 0
  },
  triangulateShape: function(e, t) {
    var n = [],
      r = [],
      i = [];
    Qc(e), Kc(n, e);
    var a = e.length;
    t.forEach(Qc);
    for (var o = 0; o < t.length; o++) r.push(a), a += t[o].length, Kc(n, t[o]);
    for (var s = Hg.triangulate(n, r), o = 0; o < s.length; o += 3) i.push(s.slice(o, o + 3));
    return i
  }
};

function Qc(e) {
  var t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop()
}

function Kc(e, t) {
  for (var n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y)
}

function ei(e, t) {
  Se.call(this), this.type = "ExtrudeGeometry", this.parameters = {
    shapes: e,
    options: t
  }, this.fromBufferGeometry(new Mn(e, t)), this.mergeVertices()
}
ei.prototype = Object.create(Se.prototype);
ei.prototype.constructor = ei;
ei.prototype.toJSON = function() {
  var e = Se.prototype.toJSON.call(this),
    t = this.parameters.shapes,
    n = this.parameters.options;
  return uh(t, n, e)
};

function Mn(e, t) {
  se.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
    shapes: e,
    options: t
  }, e = Array.isArray(e) ? e : [e];
  for (var n = this, r = [], i = [], a = 0, o = e.length; a < o; a++) {
    var s = e[a];
    l(s)
  }
  this.setAttribute("position", new ne(r, 3)), this.setAttribute("uv", new ne(i, 2)), this.computeVertexNormals();

  function l(c) {
    var u = [],
      h = t.curveSegments !== void 0 ? t.curveSegments : 12,
      f = t.steps !== void 0 ? t.steps : 1,
      d = t.depth !== void 0 ? t.depth : 100,
      p = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
      v = t.bevelThickness !== void 0 ? t.bevelThickness : 6,
      m = t.bevelSize !== void 0 ? t.bevelSize : v - 2,
      g = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
      x = t.bevelSegments !== void 0 ? t.bevelSegments : 3,
      w = t.extrudePath,
      S = t.UVGenerator !== void 0 ? t.UVGenerator : ry;
    t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), d = t.amount);
    var b, T = !1,
      D, N, C, B;
    w && (b = w.getSpacedPoints(f), T = !0, p = !1, D = w.computeFrenetFrames(f, !1), N = new M, C = new M, B = new M), p || (x = 0, v = 0, m = 0, g = 0);
    var I, F, U, z = c.extractPoints(h),
      O = z.shape,
      k = z.holes,
      j = !Hn.isClockWise(O);
    if (j)
      for (O = O.reverse(), F = 0, U = k.length; F < U; F++) I = k[F], Hn.isClockWise(I) && (k[F] = I.reverse());
    var J = Hn.triangulateShape(O, k),
      W = O;
    for (F = 0, U = k.length; F < U; F++) I = k[F], O = O.concat(I);

    function Z(ae, me, le) {
      return me || console.error("THREE.ExtrudeGeometry: vec does not exist"), me.clone().multiplyScalar(le).add(ae)
    }
    var re, Pe, Ue, Le, ye, V = O.length,
      Oe, _e = J.length;

    function Fe(ae, me, le) {
      var P, ee, he, Ie = ae.x - me.x,
        de = ae.y - me.y,
        He = le.x - ae.x,
        Xe = le.y - ae.y,
        nt = Ie * Ie + de * de,
        Et = Ie * Xe - de * He;
      if (Math.abs(Et) > Number.EPSILON) {
        var Qe = Math.sqrt(nt),
          bt = Math.sqrt(He * He + Xe * Xe),
          Lt = me.x - de / Qe,
          Ut = me.y + Ie / Qe,
          ba = le.x - Xe / bt,
          jt = le.y + He / bt,
          Ma = ((ba - Lt) * Xe - (jt - Ut) * He) / (Ie * Xe - de * He);
        P = Lt + Ie * Ma - ae.x, ee = Ut + de * Ma - ae.y;
        var wa = P * P + ee * ee;
        if (wa <= 2) return new H(P, ee);
        he = Math.sqrt(wa / 2)
      } else {
        var yr = !1;
        Ie > Number.EPSILON ? He > Number.EPSILON && (yr = !0) : Ie < -Number.EPSILON ? He < -Number.EPSILON && (yr = !0) : Math.sign(de) === Math.sign(Xe) && (yr = !0), yr ? (P = -de, ee = Ie, he = Math.sqrt(nt)) : (P = Ie, ee = de, he = Math.sqrt(nt / 2))
      }
      return new H(P / he, ee / he)
    }
    for (var ve = [], X = 0, Ae = W.length, ze = Ae - 1, je = X + 1; X < Ae; X++, ze++, je++) ze === Ae && (ze = 0), je === Ae && (je = 0), ve[X] = Fe(W[X], W[ze], W[je]);
    var _t = [],
      $e, E = ve.concat();
    for (F = 0, U = k.length; F < U; F++) {
      for (I = k[F], $e = [], X = 0, Ae = I.length, ze = Ae - 1, je = X + 1; X < Ae; X++, ze++, je++) ze === Ae && (ze = 0), je === Ae && (je = 0), $e[X] = Fe(I[X], I[ze], I[je]);
      _t.push($e), E = E.concat($e)
    }
    for (re = 0; re < x; re++) {
      for (Ue = re / x, Le = v * Math.cos(Ue * Math.PI / 2), Pe = m * Math.sin(Ue * Math.PI / 2) + g, X = 0, Ae = W.length; X < Ae; X++) ye = Z(W[X], ve[X], Pe), ce(ye.x, ye.y, -Le);
      for (F = 0, U = k.length; F < U; F++)
        for (I = k[F], $e = _t[F], X = 0, Ae = I.length; X < Ae; X++) ye = Z(I[X], $e[X], Pe), ce(ye.x, ye.y, -Le)
    }
    for (Pe = m + g, X = 0; X < V; X++) ye = p ? Z(O[X], E[X], Pe) : O[X], T ? (C.copy(D.normals[0]).multiplyScalar(ye.x), N.copy(D.binormals[0]).multiplyScalar(ye.y), B.copy(b[0]).add(C).add(N), ce(B.x, B.y, B.z)) : ce(ye.x, ye.y, 0);
    var A;
    for (A = 1; A <= f; A++)
      for (X = 0; X < V; X++) ye = p ? Z(O[X], E[X], Pe) : O[X], T ? (C.copy(D.normals[A]).multiplyScalar(ye.x), N.copy(D.binormals[A]).multiplyScalar(ye.y), B.copy(b[A]).add(C).add(N), ce(B.x, B.y, B.z)) : ce(ye.x, ye.y, d / f * A);
    for (re = x - 1; re >= 0; re--) {
      for (Ue = re / x, Le = v * Math.cos(Ue * Math.PI / 2), Pe = m * Math.sin(Ue * Math.PI / 2) + g, X = 0, Ae = W.length; X < Ae; X++) ye = Z(W[X], ve[X], Pe), ce(ye.x, ye.y, d + Le);
      for (F = 0, U = k.length; F < U; F++)
        for (I = k[F], $e = _t[F], X = 0, Ae = I.length; X < Ae; X++) ye = Z(I[X], $e[X], Pe), T ? ce(ye.x, ye.y + b[f - 1].y, b[f - 1].x + Le) : ce(ye.x, ye.y, d + Le)
    }
    $(), q();

    function $() {
      var ae = r.length / 3;
      if (p) {
        var me = 0,
          le = V * me;
        for (X = 0; X < _e; X++) Oe = J[X], L(Oe[2] + le, Oe[1] + le, Oe[0] + le);
        for (me = f + x * 2, le = V * me, X = 0; X < _e; X++) Oe = J[X], L(Oe[0] + le, Oe[1] + le, Oe[2] + le)
      } else {
        for (X = 0; X < _e; X++) Oe = J[X], L(Oe[2], Oe[1], Oe[0]);
        for (X = 0; X < _e; X++) Oe = J[X], L(Oe[0] + V * f, Oe[1] + V * f, Oe[2] + V * f)
      }
      n.addGroup(ae, r.length / 3 - ae, 0)
    }

    function q() {
      var ae = r.length / 3,
        me = 0;
      for (Re(W, me), me += W.length, F = 0, U = k.length; F < U; F++) I = k[F], Re(I, me), me += I.length;
      n.addGroup(ae, r.length / 3 - ae, 1)
    }

    function Re(ae, me) {
      var le, P;
      for (X = ae.length; --X >= 0;) {
        le = X, P = X - 1, P < 0 && (P = ae.length - 1);
        var ee = 0,
          he = f + x * 2;
        for (ee = 0; ee < he; ee++) {
          var Ie = V * ee,
            de = V * (ee + 1),
            He = me + le + Ie,
            Xe = me + P + Ie,
            nt = me + P + de,
            Et = me + le + de;
          K(He, Xe, nt, Et)
        }
      }
    }

    function ce(ae, me, le) {
      u.push(ae), u.push(me), u.push(le)
    }

    function L(ae, me, le) {
      ue(ae), ue(me), ue(le);
      var P = r.length / 3,
        ee = S.generateTopUV(n, r, P - 3, P - 2, P - 1);
      ie(ee[0]), ie(ee[1]), ie(ee[2])
    }

    function K(ae, me, le, P) {
      ue(ae), ue(me), ue(P), ue(me), ue(le), ue(P);
      var ee = r.length / 3,
        he = S.generateSideWallUV(n, r, ee - 6, ee - 3, ee - 2, ee - 1);
      ie(he[0]), ie(he[1]), ie(he[3]), ie(he[1]), ie(he[2]), ie(he[3])
    }

    function ue(ae) {
      r.push(u[ae * 3 + 0]), r.push(u[ae * 3 + 1]), r.push(u[ae * 3 + 2])
    }

    function ie(ae) {
      i.push(ae.x), i.push(ae.y)
    }
  }
}
Mn.prototype = Object.create(se.prototype);
Mn.prototype.constructor = Mn;
Mn.prototype.toJSON = function() {
  var e = se.prototype.toJSON.call(this),
    t = this.parameters.shapes,
    n = this.parameters.options;
  return uh(t, n, e)
};
var ry = {
  generateTopUV: function(e, t, n, r, i) {
    var a = t[n * 3],
      o = t[n * 3 + 1],
      s = t[r * 3],
      l = t[r * 3 + 1],
      c = t[i * 3],
      u = t[i * 3 + 1];
    return [new H(a, o), new H(s, l), new H(c, u)]
  },
  generateSideWallUV: function(e, t, n, r, i, a) {
    var o = t[n * 3],
      s = t[n * 3 + 1],
      l = t[n * 3 + 2],
      c = t[r * 3],
      u = t[r * 3 + 1],
      h = t[r * 3 + 2],
      f = t[i * 3],
      d = t[i * 3 + 1],
      p = t[i * 3 + 2],
      v = t[a * 3],
      m = t[a * 3 + 1],
      g = t[a * 3 + 2];
    return Math.abs(s - u) < .01 ? [new H(o, 1 - l), new H(c, 1 - h), new H(f, 1 - p), new H(v, 1 - g)] : [new H(s, 1 - l), new H(u, 1 - h), new H(d, 1 - p), new H(m, 1 - g)]
  }
};

function uh(e, t, n) {
  if (n.shapes = [], Array.isArray(e))
    for (var r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      n.shapes.push(a.uuid)
    } else n.shapes.push(e.uuid);
  return t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n
}

function Po(e, t) {
  Se.call(this), this.type = "TextGeometry", this.parameters = {
    text: e,
    parameters: t
  }, this.fromBufferGeometry(new ta(e, t)), this.mergeVertices()
}
Po.prototype = Object.create(Se.prototype);
Po.prototype.constructor = Po;

function ta(e, t) {
  t = t || {};
  var n = t.font;
  if (!(n && n.isFont)) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Se;
  var r = n.generateShapes(e, t.size);
  t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), Mn.call(this, r, t), this.type = "TextBufferGeometry"
}
ta.prototype = Object.create(Mn.prototype);
ta.prototype.constructor = ta;

function Do(e, t, n, r, i, a, o) {
  Se.call(this), this.type = "SphereGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: r,
    phiLength: i,
    thetaStart: a,
    thetaLength: o
  }, this.fromBufferGeometry(new vr(e, t, n, r, i, a, o)), this.mergeVertices()
}
Do.prototype = Object.create(Se.prototype);
Do.prototype.constructor = Do;

function vr(e, t, n, r, i, a, o) {
  se.call(this), this.type = "SphereBufferGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: r,
    phiLength: i,
    thetaStart: a,
    thetaLength: o
  }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), r = r !== void 0 ? r : 0, i = i !== void 0 ? i : Math.PI * 2, a = a !== void 0 ? a : 0, o = o !== void 0 ? o : Math.PI;
  var s = Math.min(a + o, Math.PI),
    l, c, u = 0,
    h = [],
    f = new M,
    d = new M,
    p = [],
    v = [],
    m = [],
    g = [];
  for (c = 0; c <= n; c++) {
    var x = [],
      w = c / n,
      S = 0;
    for (c == 0 && a == 0 ? S = .5 / t : c == n && s == Math.PI && (S = -.5 / t), l = 0; l <= t; l++) {
      var b = l / t;
      f.x = -e * Math.cos(r + b * i) * Math.sin(a + w * o), f.y = e * Math.cos(a + w * o), f.z = e * Math.sin(r + b * i) * Math.sin(a + w * o), v.push(f.x, f.y, f.z), d.copy(f).normalize(), m.push(d.x, d.y, d.z), g.push(b + S, 1 - w), x.push(u++)
    }
    h.push(x)
  }
  for (c = 0; c < n; c++)
    for (l = 0; l < t; l++) {
      var T = h[c][l + 1],
        D = h[c][l],
        N = h[c + 1][l],
        C = h[c + 1][l + 1];
      (c !== 0 || a > 0) && p.push(T, D, C), (c !== n - 1 || s < Math.PI) && p.push(D, N, C)
    }
  this.setIndex(p), this.setAttribute("position", new ne(v, 3)), this.setAttribute("normal", new ne(m, 3)), this.setAttribute("uv", new ne(g, 2))
}
vr.prototype = Object.create(se.prototype);
vr.prototype.constructor = vr;

function Oo(e, t, n, r, i, a) {
  Se.call(this), this.type = "RingGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: r,
    thetaStart: i,
    thetaLength: a
  }, this.fromBufferGeometry(new na(e, t, n, r, i, a)), this.mergeVertices()
}
Oo.prototype = Object.create(Se.prototype);
Oo.prototype.constructor = Oo;

function na(e, t, n, r, i, a) {
  se.call(this), this.type = "RingBufferGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: r,
    thetaStart: i,
    thetaLength: a
  }, e = e || .5, t = t || 1, i = i !== void 0 ? i : 0, a = a !== void 0 ? a : Math.PI * 2, n = n !== void 0 ? Math.max(3, n) : 8, r = r !== void 0 ? Math.max(1, r) : 1;
  var o = [],
    s = [],
    l = [],
    c = [],
    u, h = e,
    f = (t - e) / r,
    d = new M,
    p = new H,
    v, m;
  for (v = 0; v <= r; v++) {
    for (m = 0; m <= n; m++) u = i + m / n * a, d.x = h * Math.cos(u), d.y = h * Math.sin(u), s.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / t + 1) / 2, p.y = (d.y / t + 1) / 2, c.push(p.x, p.y);
    h += f
  }
  for (v = 0; v < r; v++) {
    var g = v * (n + 1);
    for (m = 0; m < n; m++) {
      u = m + g;
      var x = u,
        w = u + n + 1,
        S = u + n + 2,
        b = u + 1;
      o.push(x, w, b), o.push(w, S, b)
    }
  }
  this.setIndex(o), this.setAttribute("position", new ne(s, 3)), this.setAttribute("normal", new ne(l, 3)), this.setAttribute("uv", new ne(c, 2))
}
na.prototype = Object.create(se.prototype);
na.prototype.constructor = na;

function Io(e, t, n, r) {
  Se.call(this), this.type = "LatheGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: r
  }, this.fromBufferGeometry(new ra(e, t, n, r)), this.mergeVertices()
}
Io.prototype = Object.create(Se.prototype);
Io.prototype.constructor = Io;

function ra(e, t, n, r) {
  se.call(this), this.type = "LatheBufferGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: r
  }, t = Math.floor(t) || 12, n = n || 0, r = r || Math.PI * 2, r = Te.clamp(r, 0, Math.PI * 2);
  var i = [],
    a = [],
    o = [],
    s, l = 1 / t,
    c = new M,
    u = new H,
    h, f;
  for (h = 0; h <= t; h++) {
    var d = n + h * l * r,
      p = Math.sin(d),
      v = Math.cos(d);
    for (f = 0; f <= e.length - 1; f++) c.x = e[f].x * p, c.y = e[f].y, c.z = e[f].x * v, a.push(c.x, c.y, c.z), u.x = h / t, u.y = f / (e.length - 1), o.push(u.x, u.y)
  }
  for (h = 0; h < t; h++)
    for (f = 0; f < e.length - 1; f++) {
      s = f + h * e.length;
      var m = s,
        g = s + e.length,
        x = s + e.length + 1,
        w = s + 1;
      i.push(m, g, w), i.push(g, x, w)
    }
  if (this.setIndex(i), this.setAttribute("position", new ne(a, 3)), this.setAttribute("uv", new ne(o, 2)), this.computeVertexNormals(), r === Math.PI * 2) {
    var S = this.attributes.normal.array,
      b = new M,
      T = new M,
      D = new M;
    for (s = t * e.length * 3, h = 0, f = 0; h < e.length; h++, f += 3) b.x = S[f + 0], b.y = S[f + 1], b.z = S[f + 2], T.x = S[s + f + 0], T.y = S[s + f + 1], T.z = S[s + f + 2], D.addVectors(b, T).normalize(), S[f + 0] = S[s + f + 0] = D.x, S[f + 1] = S[s + f + 1] = D.y, S[f + 2] = S[s + f + 2] = D.z
  }
}
ra.prototype = Object.create(se.prototype);
ra.prototype.constructor = ra;

function ti(e, t) {
  Se.call(this), this.type = "ShapeGeometry", typeof t == "object" && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
    shapes: e,
    curveSegments: t
  }, this.fromBufferGeometry(new ni(e, t)), this.mergeVertices()
}
ti.prototype = Object.create(Se.prototype);
ti.prototype.constructor = ti;
ti.prototype.toJSON = function() {
  var e = Se.prototype.toJSON.call(this),
    t = this.parameters.shapes;
  return hh(t, e)
};

function ni(e, t) {
  se.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
    shapes: e,
    curveSegments: t
  }, t = t || 12;
  var n = [],
    r = [],
    i = [],
    a = [],
    o = 0,
    s = 0;
  if (Array.isArray(e) === !1) c(e);
  else
    for (var l = 0; l < e.length; l++) c(e[l]), this.addGroup(o, s, l), o += s, s = 0;
  this.setIndex(n), this.setAttribute("position", new ne(r, 3)), this.setAttribute("normal", new ne(i, 3)), this.setAttribute("uv", new ne(a, 2));

  function c(u) {
    var h, f, d, p = r.length / 3,
      v = u.extractPoints(t),
      m = v.shape,
      g = v.holes;
    for (Hn.isClockWise(m) === !1 && (m = m.reverse()), h = 0, f = g.length; h < f; h++) d = g[h], Hn.isClockWise(d) === !0 && (g[h] = d.reverse());
    var x = Hn.triangulateShape(m, g);
    for (h = 0, f = g.length; h < f; h++) d = g[h], m = m.concat(d);
    for (h = 0, f = m.length; h < f; h++) {
      var w = m[h];
      r.push(w.x, w.y, 0), i.push(0, 0, 1), a.push(w.x, w.y)
    }
    for (h = 0, f = x.length; h < f; h++) {
      var S = x[h],
        b = S[0] + p,
        T = S[1] + p,
        D = S[2] + p;
      n.push(b, T, D), s += 3
    }
  }
}
ni.prototype = Object.create(se.prototype);
ni.prototype.constructor = ni;
ni.prototype.toJSON = function() {
  var e = se.prototype.toJSON.call(this),
    t = this.parameters.shapes;
  return hh(t, e)
};

function hh(e, t) {
  if (t.shapes = [], Array.isArray(e))
    for (var n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.shapes.push(i.uuid)
    } else t.shapes.push(e.uuid);
  return t
}

function No(e, t) {
  se.call(this), this.type = "EdgesGeometry", this.parameters = {
    thresholdAngle: t
  }, t = t !== void 0 ? t : 1;
  var n = [],
    r = Math.cos(Te.DEG2RAD * t),
    i = [0, 0],
    a = {},
    o, s, l, c = ["a", "b", "c"],
    u;
  e.isBufferGeometry ? (u = new Se, u.fromBufferGeometry(e)) : u = e.clone(), u.mergeVertices(), u.computeFaceNormals();
  for (var h = u.vertices, f = u.faces, d = 0, p = f.length; d < p; d++)
    for (var v = f[d], m = 0; m < 3; m++) o = v[c[m]], s = v[c[(m + 1) % 3]], i[0] = Math.min(o, s), i[1] = Math.max(o, s), l = i[0] + "," + i[1], a[l] === void 0 ? a[l] = {
      index1: i[0],
      index2: i[1],
      face1: d,
      face2: void 0
    } : a[l].face2 = d;
  for (l in a) {
    var g = a[l];
    if (g.face2 === void 0 || f[g.face1].normal.dot(f[g.face2].normal) <= r) {
      var x = h[g.index1];
      n.push(x.x, x.y, x.z), x = h[g.index2], n.push(x.x, x.y, x.z)
    }
  }
  this.setAttribute("position", new ne(n, 3))
}
No.prototype = Object.create(se.prototype);
No.prototype.constructor = No;

function ri(e, t, n, r, i, a, o, s) {
  Se.call(this), this.type = "CylinderGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: r,
    heightSegments: i,
    openEnded: a,
    thetaStart: o,
    thetaLength: s
  }, this.fromBufferGeometry(new jn(e, t, n, r, i, a, o, s)), this.mergeVertices()
}
ri.prototype = Object.create(Se.prototype);
ri.prototype.constructor = ri;

function jn(e, t, n, r, i, a, o, s) {
  se.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: r,
    heightSegments: i,
    openEnded: a,
    thetaStart: o,
    thetaLength: s
  };
  var l = this;
  e = e !== void 0 ? e : 1, t = t !== void 0 ? t : 1, n = n || 1, r = Math.floor(r) || 8, i = Math.floor(i) || 1, a = a !== void 0 ? a : !1, o = o !== void 0 ? o : 0, s = s !== void 0 ? s : Math.PI * 2;
  var c = [],
    u = [],
    h = [],
    f = [],
    d = 0,
    p = [],
    v = n / 2,
    m = 0;
  g(), a === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(c), this.setAttribute("position", new ne(u, 3)), this.setAttribute("normal", new ne(h, 3)), this.setAttribute("uv", new ne(f, 2));

  function g() {
    var w, S, b = new M,
      T = new M,
      D = 0,
      N = (t - e) / n;
    for (S = 0; S <= i; S++) {
      var C = [],
        B = S / i,
        I = B * (t - e) + e;
      for (w = 0; w <= r; w++) {
        var F = w / r,
          U = F * s + o,
          z = Math.sin(U),
          O = Math.cos(U);
        T.x = I * z, T.y = -B * n + v, T.z = I * O, u.push(T.x, T.y, T.z), b.set(z, N, O).normalize(), h.push(b.x, b.y, b.z), f.push(F, 1 - B), C.push(d++)
      }
      p.push(C)
    }
    for (w = 0; w < r; w++)
      for (S = 0; S < i; S++) {
        var k = p[S][w],
          j = p[S + 1][w],
          J = p[S + 1][w + 1],
          W = p[S][w + 1];
        c.push(k, j, W), c.push(j, J, W), D += 6
      }
    l.addGroup(m, D, 0), m += D
  }

  function x(w) {
    var S, b, T, D = new H,
      N = new M,
      C = 0,
      B = w === !0 ? e : t,
      I = w === !0 ? 1 : -1;
    for (b = d, S = 1; S <= r; S++) u.push(0, v * I, 0), h.push(0, I, 0), f.push(.5, .5), d++;
    for (T = d, S = 0; S <= r; S++) {
      var F = S / r,
        U = F * s + o,
        z = Math.cos(U),
        O = Math.sin(U);
      N.x = B * O, N.y = v * I, N.z = B * z, u.push(N.x, N.y, N.z), h.push(0, I, 0), D.x = z * .5 + .5, D.y = O * .5 * I + .5, f.push(D.x, D.y), d++
    }
    for (S = 0; S < r; S++) {
      var k = b + S,
        j = T + S;
      w === !0 ? c.push(j, j + 1, k) : c.push(j + 1, j, k), C += 3
    }
    l.addGroup(m, C, w === !0 ? 1 : 2), m += C
  }
}
jn.prototype = Object.create(se.prototype);
jn.prototype.constructor = jn;

function Fo(e, t, n, r, i, a, o) {
  ri.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: r,
    openEnded: i,
    thetaStart: a,
    thetaLength: o
  }
}
Fo.prototype = Object.create(ri.prototype);
Fo.prototype.constructor = Fo;

function Bo(e, t, n, r, i, a, o) {
  jn.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeBufferGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: r,
    openEnded: i,
    thetaStart: a,
    thetaLength: o
  }
}
Bo.prototype = Object.create(jn.prototype);
Bo.prototype.constructor = Bo;

function Uo(e, t, n, r) {
  Se.call(this), this.type = "CircleGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: r
  }, this.fromBufferGeometry(new ia(e, t, n, r)), this.mergeVertices()
}
Uo.prototype = Object.create(Se.prototype);
Uo.prototype.constructor = Uo;

function ia(e, t, n, r) {
  se.call(this), this.type = "CircleBufferGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: r
  }, e = e || 1, t = t !== void 0 ? Math.max(3, t) : 8, n = n !== void 0 ? n : 0, r = r !== void 0 ? r : Math.PI * 2;
  var i = [],
    a = [],
    o = [],
    s = [],
    l, c, u = new M,
    h = new H;
  for (a.push(0, 0, 0), o.push(0, 0, 1), s.push(.5, .5), c = 0, l = 3; c <= t; c++, l += 3) {
    var f = n + c / t * r;
    u.x = e * Math.cos(f), u.y = e * Math.sin(f), a.push(u.x, u.y, u.z), o.push(0, 0, 1), h.x = (a[l] / e + 1) / 2, h.y = (a[l + 1] / e + 1) / 2, s.push(h.x, h.y)
  }
  for (l = 1; l <= t; l++) i.push(l, l + 1, 0);
  this.setIndex(i), this.setAttribute("position", new ne(a, 3)), this.setAttribute("normal", new ne(o, 3)), this.setAttribute("uv", new ne(s, 2))
}
ia.prototype = Object.create(se.prototype);
ia.prototype.constructor = ia;
var wt = Object.freeze({
  __proto__: null,
  WireframeGeometry: bo,
  ParametricGeometry: Mo,
  ParametricBufferGeometry: ji,
  TetrahedronGeometry: So,
  TetrahedronBufferGeometry: Xi,
  OctahedronGeometry: Eo,
  OctahedronBufferGeometry: Qr,
  IcosahedronGeometry: To,
  IcosahedronBufferGeometry: qi,
  DodecahedronGeometry: Ao,
  DodecahedronBufferGeometry: Yi,
  PolyhedronGeometry: wo,
  PolyhedronBufferGeometry: Nt,
  TubeGeometry: Lo,
  TubeBufferGeometry: Kr,
  TorusKnotGeometry: Ro,
  TorusKnotBufferGeometry: Zi,
  TorusGeometry: Co,
  TorusBufferGeometry: Ji,
  TextGeometry: Po,
  TextBufferGeometry: ta,
  SphereGeometry: Do,
  SphereBufferGeometry: vr,
  RingGeometry: Oo,
  RingBufferGeometry: na,
  PlaneGeometry: mo,
  PlaneBufferGeometry: $r,
  LatheGeometry: Io,
  LatheBufferGeometry: ra,
  ShapeGeometry: ti,
  ShapeBufferGeometry: ni,
  ExtrudeGeometry: ei,
  ExtrudeBufferGeometry: Mn,
  EdgesGeometry: No,
  ConeGeometry: Fo,
  ConeBufferGeometry: Bo,
  CylinderGeometry: ri,
  CylinderBufferGeometry: jn,
  CircleGeometry: Uo,
  CircleBufferGeometry: ia,
  BoxGeometry: jd,
  BoxBufferGeometry: Qo
});

function ii(e) {
  Me.call(this), this.type = "ShadowMaterial", this.color = new oe(0), this.transparent = !0, this.setValues(e)
}
ii.prototype = Object.create(Me.prototype);
ii.prototype.constructor = ii;
ii.prototype.isShadowMaterial = !0;
ii.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this
};

function Xn(e) {
  At.call(this, e), this.type = "RawShaderMaterial"
}
Xn.prototype = Object.create(At.prototype);
Xn.prototype.constructor = Xn;
Xn.prototype.isRawShaderMaterial = !0;

function wn(e) {
  Me.call(this), this.defines = {
    STANDARD: ""
  }, this.type = "MeshStandardMaterial", this.color = new oe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new oe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = di, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(e)
}
wn.prototype = Object.create(Me.prototype);
wn.prototype.constructor = wn;
wn.prototype.isMeshStandardMaterial = !0;
wn.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.defines = {
    STANDARD: ""
  }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.vertexTangents = e.vertexTangents, this
};

function ai(e) {
  wn.call(this), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new H(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, this.sheen = null, this.transparency = 0, this.setValues(e)
}
ai.prototype = Object.create(wn.prototype);
ai.prototype.constructor = ai;
ai.prototype.isMeshPhysicalMaterial = !0;
ai.prototype.copy = function(e) {
  return wn.prototype.copy.call(this, e), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.reflectivity = e.reflectivity, e.sheen ? this.sheen = (this.sheen || new oe).copy(e.sheen) : this.sheen = null, this.transparency = e.transparency, this
};

function mr(e) {
  Me.call(this), this.type = "MeshPhongMaterial", this.color = new oe(16777215), this.specular = new oe(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new oe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = di, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Yo, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
}
mr.prototype = Object.create(Me.prototype);
mr.prototype.constructor = mr;
mr.prototype.isMeshPhongMaterial = !0;
mr.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
};

function oi(e) {
  Me.call(this), this.defines = {
    TOON: ""
  }, this.type = "MeshToonMaterial", this.color = new oe(16777215), this.specular = new oe(1118481), this.shininess = 30, this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new oe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = di, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
}
oi.prototype = Object.create(Me.prototype);
oi.prototype.constructor = oi;
oi.prototype.isMeshToonMaterial = !0;
oi.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
};

function si(e) {
  Me.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = di, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
}
si.prototype = Object.create(Me.prototype);
si.prototype.constructor = si;
si.prototype.isMeshNormalMaterial = !0;
si.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
};

function li(e) {
  Me.call(this), this.type = "MeshLambertMaterial", this.color = new oe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new oe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Yo, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
}
li.prototype = Object.create(Me.prototype);
li.prototype.constructor = li;
li.prototype.isMeshLambertMaterial = !0;
li.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
};

function ci(e) {
  Me.call(this), this.defines = {
    MATCAP: ""
  }, this.type = "MeshMatcapMaterial", this.color = new oe(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = di, this.normalScale = new H(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
}
ci.prototype = Object.create(Me.prototype);
ci.prototype.constructor = ci;
ci.prototype.isMeshMatcapMaterial = !0;
ci.prototype.copy = function(e) {
  return Me.prototype.copy.call(this, e), this.defines = {
    MATCAP: ""
  }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
};

function ui(e) {
  at.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
}
ui.prototype = Object.create(at.prototype);
ui.prototype.constructor = ui;
ui.prototype.isLineDashedMaterial = !0;
ui.prototype.copy = function(e) {
  return at.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
};
var iy = Object.freeze({
    __proto__: null,
    ShadowMaterial: ii,
    SpriteMaterial: dr,
    RawShaderMaterial: Xn,
    ShaderMaterial: At,
    PointsMaterial: pr,
    MeshPhysicalMaterial: ai,
    MeshStandardMaterial: wn,
    MeshPhongMaterial: mr,
    MeshToonMaterial: oi,
    MeshNormalMaterial: si,
    MeshLambertMaterial: li,
    MeshDepthMaterial: hr,
    MeshDistanceMaterial: fr,
    MeshBasicMaterial: Ht,
    MeshMatcapMaterial: ci,
    LineDashedMaterial: ui,
    LineBasicMaterial: at,
    Material: Me
  }),
  it = {
    arraySlice: function(e, t, n) {
      return it.isTypedArray(e) ? new e.constructor(e.subarray(t, n !== void 0 ? n : e.length)) : e.slice(t, n)
    },
    convertArray: function(e, t, n) {
      return !e || !n && e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e)
    },
    isTypedArray: function(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView)
    },
    getKeyframeOrder: function(e) {
      function t(a, o) {
        return e[a] - e[o]
      }
      for (var n = e.length, r = new Array(n), i = 0; i !== n; ++i) r[i] = i;
      return r.sort(t), r
    },
    sortedArray: function(e, t, n) {
      for (var r = e.length, i = new e.constructor(r), a = 0, o = 0; o !== r; ++a)
        for (var s = n[a] * t, l = 0; l !== t; ++l) i[o++] = e[s + l];
      return i
    },
    flattenJSON: function(e, t, n, r) {
      for (var i = 1, a = e[0]; a !== void 0 && a[r] === void 0;) a = e[i++];
      if (a !== void 0) {
        var o = a[r];
        if (o !== void 0)
          if (Array.isArray(o))
            do o = a[r], o !== void 0 && (t.push(a.time), n.push.apply(n, o)), a = e[i++]; while (a !== void 0);
          else if (o.toArray !== void 0)
          do o = a[r], o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), a = e[i++]; while (a !== void 0);
        else
          do o = a[r], o !== void 0 && (t.push(a.time), n.push(o)), a = e[i++]; while (a !== void 0)
      }
    },
    subclip: function(e, t, n, r, i) {
      i = i || 30;
      var a = e.clone();
      a.name = t;
      for (var o = [], s = 0; s < a.tracks.length; ++s) {
        for (var l = a.tracks[s], c = l.getValueSize(), u = [], h = [], f = 0; f < l.times.length; ++f) {
          var d = l.times[f] * i;
          if (!(d < n || d >= r)) {
            u.push(l.times[f]);
            for (var p = 0; p < c; ++p) h.push(l.values[f * c + p])
          }
        }
        u.length !== 0 && (l.times = it.convertArray(u, l.times.constructor), l.values = it.convertArray(h, l.values.constructor), o.push(l))
      }
      a.tracks = o;
      for (var v = 1 / 0, s = 0; s < a.tracks.length; ++s) v > a.tracks[s].times[0] && (v = a.tracks[s].times[0]);
      for (var s = 0; s < a.tracks.length; ++s) a.tracks[s].shift(-1 * v);
      return a.resetDuration(), a
    }
  };

function Gt(e, t, n, r) {
  this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n
}
Object.assign(Gt.prototype, {
  evaluate: function(e) {
    var t = this.parameterPositions,
      n = this._cachedIndex,
      r = t[n],
      i = t[n - 1];
    e: {
      t: {
        var a;n: {
          r: if (!(e < r)) {
            for (var o = n + 2;;) {
              if (r === void 0) {
                if (e < i) break r;
                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, i)
              }
              if (n === o) break;
              if (i = r, r = t[++n], e < r) break t
            }
            a = t.length;
            break n
          }if (!(e >= i)) {
            var s = t[1];
            e < s && (n = 2, i = s);
            for (var o = n - 2;;) {
              if (i === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, r);
              if (n === o) break;
              if (r = i, i = t[--n - 1], e >= i) break t
            }
            a = n, n = 0;
            break n
          }
          break e
        }
        for (; n < a;) {
          var l = n + a >>> 1;
          e < t[l] ? a = l : n = l + 1
        }
        if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0,
        this.beforeStart_(0, e, r);
        if (r === void 0) return n = t.length,
        this._cachedIndex = n,
        this.afterEnd_(n - 1, i, e)
      }
      this._cachedIndex = n,
      this.intervalChanged_(n, i, r)
    }
    return this.interpolate_(n, i, e, r)
  },
  settings: null,
  DefaultSettings_: {},
  getSettings_: function() {
    return this.settings || this.DefaultSettings_
  },
  copySampleValue_: function(e) {
    for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0; a !== r; ++a) t[a] = n[i + a];
    return t
  },
  interpolate_: function() {
    throw new Error("call to abstract method")
  },
  intervalChanged_: function() {}
});
Object.assign(Gt.prototype, {
  beforeStart_: Gt.prototype.copySampleValue_,
  afterEnd_: Gt.prototype.copySampleValue_
});

function el(e, t, n, r) {
  Gt.call(this, e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
}
el.prototype = Object.assign(Object.create(Gt.prototype), {
  constructor: el,
  DefaultSettings_: {
    endingStart: qr,
    endingEnd: qr
  },
  intervalChanged_: function(e, t, n) {
    var r = this.parameterPositions,
      i = e - 2,
      a = e + 1,
      o = r[i],
      s = r[a];
    if (o === void 0) switch (this.getSettings_().endingStart) {
      case Gr:
        i = e, o = 2 * t - n;
        break;
      case po:
        i = r.length - 2, o = t + r[i] - r[i + 1];
        break;
      default:
        i = e, o = n
    }
    if (s === void 0) switch (this.getSettings_().endingEnd) {
      case Gr:
        a = e, s = 2 * n - t;
        break;
      case po:
        a = 1, s = n + r[1] - r[0];
        break;
      default:
        a = e - 1, s = t
    }
    var l = (n - t) * .5,
      c = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (s - n), this._offsetPrev = i * c, this._offsetNext = a * c
  },
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, f = this._weightNext, d = (n - t) / (r - t), p = d * d, v = p * d, m = -h * v + 2 * h * p - h * d, g = (1 + h) * v + (-1.5 - 2 * h) * p + (-.5 + h) * d + 1, x = (-1 - f) * v + (1.5 + f) * p + .5 * d, w = f * v - f * p, S = 0; S !== o; ++S) i[S] = m * a[c + S] + g * a[l + S] + x * a[s + S] + w * a[u + S];
    return i
  }
});

function zo(e, t, n, r) {
  Gt.call(this, e, t, n, r)
}
zo.prototype = Object.assign(Object.create(Gt.prototype), {
  constructor: zo,
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = (n - t) / (r - t), u = 1 - c, h = 0; h !== o; ++h) i[h] = a[l + h] * u + a[s + h] * c;
    return i
  }
});

function tl(e, t, n, r) {
  Gt.call(this, e, t, n, r)
}
tl.prototype = Object.assign(Object.create(Gt.prototype), {
  constructor: tl,
  interpolate_: function(e) {
    return this.copySampleValue_(e - 1)
  }
});

function xt(e, t, n, r) {
  if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
  if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
  this.name = e, this.times = it.convertArray(t, this.TimeBufferType), this.values = it.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation)
}
Object.assign(xt, {
  toJSON: function(e) {
    var t = e.constructor,
      n;
    if (t.toJSON !== void 0) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: it.convertArray(e.times, Array),
        values: it.convertArray(e.values, Array)
      };
      var r = e.getInterpolation();
      r !== e.DefaultInterpolation && (n.interpolation = r)
    }
    return n.type = e.ValueTypeName, n
  }
});
Object.assign(xt.prototype, {
  constructor: xt,
  TimeBufferType: Float32Array,
  ValueBufferType: Float32Array,
  DefaultInterpolation: so,
  InterpolantFactoryMethodDiscrete: function(e) {
    return new tl(this.times, this.values, this.getValueSize(), e)
  },
  InterpolantFactoryMethodLinear: function(e) {
    return new zo(this.times, this.values, this.getValueSize(), e)
  },
  InterpolantFactoryMethodSmooth: function(e) {
    return new el(this.times, this.values, this.getValueSize(), e)
  },
  setInterpolation: function(e) {
    var t;
    switch (e) {
      case fo:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case so:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ts:
        t = this.InterpolantFactoryMethodSmooth;
        break
    }
    if (t === void 0) {
      var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this
    }
    return this.createInterpolant = t, this
  },
  getInterpolation: function() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return fo;
      case this.InterpolantFactoryMethodLinear:
        return so;
      case this.InterpolantFactoryMethodSmooth:
        return ts
    }
  },
  getValueSize: function() {
    return this.values.length / this.times.length
  },
  shift: function(e) {
    if (e !== 0)
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n) t[n] += e;
    return this
  },
  scale: function(e) {
    if (e !== 1)
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n) t[n] *= e;
    return this
  },
  trim: function(e, t) {
    for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e;) ++i;
    for (; a !== -1 && n[a] > t;) --a;
    if (++a, i !== 0 || a !== r) {
      i >= a && (a = Math.max(a, 1), i = a - 1);
      var o = this.getValueSize();
      this.times = it.arraySlice(n, i, a), this.values = it.arraySlice(this.values, i * o, a * o)
    }
    return this
  },
  validate: function() {
    var e = !0,
      t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    var n = this.times,
      r = this.values,
      i = n.length;
    i === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    for (var a = null, o = 0; o !== i; o++) {
      var s = n[o];
      if (typeof s == "number" && isNaN(s)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
        break
      }
      if (a !== null && a > s) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
        break
      }
      a = s
    }
    if (r !== void 0 && it.isTypedArray(r))
      for (var o = 0, l = r.length; o !== l; ++o) {
        var c = r[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break
        }
      }
    return e
  },
  optimize: function() {
    for (var e = it.arraySlice(this.times), t = it.arraySlice(this.values), n = this.getValueSize(), r = this.getInterpolation() === ts, i = 1, a = e.length - 1, o = 1; o < a; ++o) {
      var s = !1,
        l = e[o],
        c = e[o + 1];
      if (l !== c && (o !== 1 || l !== l[0]))
        if (r) s = !0;
        else
          for (var u = o * n, h = u - n, f = u + n, d = 0; d !== n; ++d) {
            var p = t[u + d];
            if (p !== t[h + d] || p !== t[f + d]) {
              s = !0;
              break
            }
          }
      if (s) {
        if (o !== i) {
          e[i] = e[o];
          for (var v = o * n, m = i * n, d = 0; d !== n; ++d) t[m + d] = t[v + d]
        }++i
      }
    }
    if (a > 0) {
      e[i] = e[a];
      for (var v = a * n, m = i * n, d = 0; d !== n; ++d) t[m + d] = t[v + d];
      ++i
    }
    return i !== e.length ? (this.times = it.arraySlice(e, 0, i), this.values = it.arraySlice(t, 0, i * n)) : (this.times = e, this.values = t), this
  },
  clone: function() {
    var e = it.arraySlice(this.times, 0),
      t = it.arraySlice(this.values, 0),
      n = this.constructor,
      r = new n(this.name, e, t);
    return r.createInterpolant = this.createInterpolant, r
  }
});

function nl(e, t, n) {
  xt.call(this, e, t, n)
}
nl.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: nl,
  ValueTypeName: "bool",
  ValueBufferType: Array,
  DefaultInterpolation: fo,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
});

function rl(e, t, n, r) {
  xt.call(this, e, t, n, r)
}
rl.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: rl,
  ValueTypeName: "color"
});

function aa(e, t, n, r) {
  xt.call(this, e, t, n, r)
}
aa.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: aa,
  ValueTypeName: "number"
});

function il(e, t, n, r) {
  Gt.call(this, e, t, n, r)
}
il.prototype = Object.assign(Object.create(Gt.prototype), {
  constructor: il,
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = (n - t) / (r - t), c = s + o; s !== c; s += 4) yt.slerpFlat(i, 0, a, s - o, a, s, l);
    return i
  }
});

function Go(e, t, n, r) {
  xt.call(this, e, t, n, r)
}
Go.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: Go,
  ValueTypeName: "quaternion",
  DefaultInterpolation: so,
  InterpolantFactoryMethodLinear: function(e) {
    return new il(this.times, this.values, this.getValueSize(), e)
  },
  InterpolantFactoryMethodSmooth: void 0
});

function al(e, t, n, r) {
  xt.call(this, e, t, n, r)
}
al.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: al,
  ValueTypeName: "string",
  ValueBufferType: Array,
  DefaultInterpolation: fo,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
});

function oa(e, t, n, r) {
  xt.call(this, e, t, n, r)
}
oa.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: oa,
  ValueTypeName: "vector"
});

function Jt(e, t, n) {
  this.name = e, this.tracks = n, this.duration = t !== void 0 ? t : -1, this.uuid = Te.generateUUID(), this.duration < 0 && this.resetDuration()
}

function ay(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return aa;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return oa;
    case "color":
      return rl;
    case "quaternion":
      return Go;
    case "bool":
    case "boolean":
      return nl;
    case "string":
      return al
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
}

function oy(e) {
  if (e.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  var t = ay(e.type);
  if (e.times === void 0) {
    var n = [],
      r = [];
    it.flattenJSON(e.keys, n, r, "value"), e.times = n, e.values = r
  }
  return t.parse !== void 0 ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
}
Object.assign(Jt, {
  parse: function(e) {
    for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i) t.push(oy(n[i]).scale(r));
    return new Jt(e.name, e.duration, t)
  },
  toJSON: function(e) {
    for (var t = [], n = e.tracks, r = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid
      }, i = 0, a = n.length; i !== a; ++i) t.push(xt.toJSON(n[i]));
    return r
  },
  CreateFromMorphTargetSequence: function(e, t, n, r) {
    for (var i = t.length, a = [], o = 0; o < i; o++) {
      var s = [],
        l = [];
      s.push((o + i - 1) % i, o, (o + 1) % i), l.push(0, 1, 0);
      var c = it.getKeyframeOrder(s);
      s = it.sortedArray(s, 1, c), l = it.sortedArray(l, 1, c), !r && s[0] === 0 && (s.push(i), l.push(l[0])), a.push(new aa(".morphTargetInfluences[" + t[o].name + "]", s, l).scale(1 / n))
    }
    return new Jt(e, -1, a)
  },
  findByName: function(e, t) {
    var n = e;
    if (!Array.isArray(e)) {
      var r = e;
      n = r.geometry && r.geometry.animations || r.animations
    }
    for (var i = 0; i < n.length; i++)
      if (n[i].name === t) return n[i];
    return null
  },
  CreateClipsFromMorphTargetSequences: function(e, t, n) {
    for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
      var s = e[a],
        l = s.name.match(i);
      if (l && l.length > 1) {
        var c = l[1],
          u = r[c];
        u || (r[c] = u = []), u.push(s)
      }
    }
    var h = [];
    for (var c in r) h.push(Jt.CreateFromMorphTargetSequence(c, r[c], t, n));
    return h
  },
  parseAnimation: function(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    for (var n = function(w, S, b, T, D) {
        if (b.length !== 0) {
          var N = [],
            C = [];
          it.flattenJSON(b, N, C, T), N.length !== 0 && D.push(new w(S, N, C))
        }
      }, r = [], i = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], l = 0; l < s.length; l++) {
      var c = s[l].keys;
      if (!(!c || c.length === 0))
        if (c[0].morphTargets) {
          for (var u = {}, h = 0; h < c.length; h++)
            if (c[h].morphTargets)
              for (var f = 0; f < c[h].morphTargets.length; f++) u[c[h].morphTargets[f]] = -1;
          for (var d in u) {
            for (var p = [], v = [], f = 0; f !== c[h].morphTargets.length; ++f) {
              var m = c[h];
              p.push(m.time), v.push(m.morphTarget === d ? 1 : 0)
            }
            r.push(new aa(".morphTargetInfluence[" + d + "]", p, v))
          }
          a = u.length * o
        } else {
          var g = ".bones[" + t[l].name + "]";
          n(oa, g + ".position", c, "pos", r), n(Go, g + ".quaternion", c, "rot", r), n(oa, g + ".scale", c, "scl", r)
        }
    }
    if (r.length === 0) return null;
    var x = new Jt(i, a, r);
    return x
  }
});
Object.assign(Jt.prototype, {
  resetDuration: function() {
    for (var e = this.tracks, t = 0, n = 0, r = e.length; n !== r; ++n) {
      var i = this.tracks[n];
      t = Math.max(t, i.times[i.times.length - 1])
    }
    return this.duration = t, this
  },
  trim: function() {
    for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this
  },
  validate: function() {
    for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e
  },
  optimize: function() {
    for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this
  },
  clone: function() {
    for (var e = [], t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new Jt(this.name, this.duration, e)
  }
});
var hi = {
  enabled: !1,
  files: {},
  add: function(e, t) {
    this.enabled !== !1 && (this.files[e] = t)
  },
  get: function(e) {
    if (this.enabled !== !1) return this.files[e]
  },
  remove: function(e) {
    delete this.files[e]
  },
  clear: function() {
    this.files = {}
  }
};

function fh(e, t, n) {
  var r = this,
    i = !1,
    a = 0,
    o = 0,
    s = void 0,
    l = [];
  this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(c) {
    o++, i === !1 && r.onStart !== void 0 && r.onStart(c, a, o), i = !0
  }, this.itemEnd = function(c) {
    a++, r.onProgress !== void 0 && r.onProgress(c, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad())
  }, this.itemError = function(c) {
    r.onError !== void 0 && r.onError(c)
  }, this.resolveURL = function(c) {
    return s ? s(c) : c
  }, this.setURLModifier = function(c) {
    return s = c, this
  }, this.addHandler = function(c, u) {
    return l.push(c, u), this
  }, this.removeHandler = function(c) {
    var u = l.indexOf(c);
    return u !== -1 && l.splice(u, 2), this
  }, this.getHandler = function(c) {
    for (var u = 0, h = l.length; u < h; u += 2) {
      var f = l[u],
        d = l[u + 1];
      if (f.global && (f.lastIndex = 0), f.test(c)) return d
    }
    return null
  }
}
var sy = new fh;

function Ve(e) {
  this.manager = e !== void 0 ? e : sy, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = ""
}
Object.assign(Ve.prototype, {
  load: function() {},
  parse: function() {},
  setCrossOrigin: function(e) {
    return this.crossOrigin = e, this
  },
  setPath: function(e) {
    return this.path = e, this
  },
  setResourcePath: function(e) {
    return this.resourcePath = e, this
  }
});
var Yt = {};

function sn(e) {
  Ve.call(this, e)
}
sn.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: sn,
  load: function(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this,
      a = hi.get(e);
    if (a !== void 0) return i.manager.itemStart(e), setTimeout(function() {
      t && t(a), i.manager.itemEnd(e)
    }, 0), a;
    if (Yt[e] !== void 0) {
      Yt[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      return
    }
    var o = /^data:(.*?)(;base64)?,(.*)$/,
      s = e.match(o);
    if (s) {
      var l = s[1],
        c = !!s[2],
        u = s[3];
      u = decodeURIComponent(u), c && (u = atob(u));
      try {
        var h, f = (this.responseType || "").toLowerCase();
        switch (f) {
          case "arraybuffer":
          case "blob":
            for (var d = new Uint8Array(u.length), p = 0; p < u.length; p++) d[p] = u.charCodeAt(p);
            f === "blob" ? h = new Blob([d.buffer], {
              type: l
            }) : h = d.buffer;
            break;
          case "document":
            var v = new DOMParser;
            h = v.parseFromString(u, l);
            break;
          case "json":
            h = JSON.parse(u);
            break;
          default:
            h = u;
            break
        }
        setTimeout(function() {
          t && t(h), i.manager.itemEnd(e)
        }, 0)
      } catch (x) {
        setTimeout(function() {
          r && r(x), i.manager.itemError(e), i.manager.itemEnd(e)
        }, 0)
      }
    } else {
      Yt[e] = [], Yt[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      var m = new XMLHttpRequest;
      m.open("GET", e, !0), m.addEventListener("load", function(x) {
        var w = this.response,
          S = Yt[e];
        if (delete Yt[e], this.status === 200 || this.status === 0) {
          this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), hi.add(e, w);
          for (var b = 0, T = S.length; b < T; b++) {
            var D = S[b];
            D.onLoad && D.onLoad(w)
          }
          i.manager.itemEnd(e)
        } else {
          for (var b = 0, T = S.length; b < T; b++) {
            var D = S[b];
            D.onError && D.onError(x)
          }
          i.manager.itemError(e), i.manager.itemEnd(e)
        }
      }, !1), m.addEventListener("progress", function(x) {
        for (var w = Yt[e], S = 0, b = w.length; S < b; S++) {
          var T = w[S];
          T.onProgress && T.onProgress(x)
        }
      }, !1), m.addEventListener("error", function(x) {
        var w = Yt[e];
        delete Yt[e];
        for (var S = 0, b = w.length; S < b; S++) {
          var T = w[S];
          T.onError && T.onError(x)
        }
        i.manager.itemError(e), i.manager.itemEnd(e)
      }, !1), m.addEventListener("abort", function(x) {
        var w = Yt[e];
        delete Yt[e];
        for (var S = 0, b = w.length; S < b; S++) {
          var T = w[S];
          T.onError && T.onError(x)
        }
        i.manager.itemError(e), i.manager.itemEnd(e)
      }, !1), this.responseType !== void 0 && (m.responseType = this.responseType), this.withCredentials !== void 0 && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
      for (var g in this.requestHeader) m.setRequestHeader(g, this.requestHeader[g]);
      m.send(null)
    }
    return i.manager.itemStart(e), m
  },
  setResponseType: function(e) {
    return this.responseType = e, this
  },
  setWithCredentials: function(e) {
    return this.withCredentials = e, this
  },
  setMimeType: function(e) {
    return this.mimeType = e, this
  },
  setRequestHeader: function(e) {
    return this.requestHeader = e, this
  }
});

function eu(e) {
  Ve.call(this, e)
}
eu.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: eu,
  load: function(e, t, n, r) {
    var i = this,
      a = new sn(i.manager);
    a.setPath(i.path), a.load(e, function(o) {
      t(i.parse(JSON.parse(o)))
    }, n, r)
  },
  parse: function(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = Jt.parse(e[n]);
      t.push(r)
    }
    return t
  }
});

function tu(e) {
  Ve.call(this, e)
}
tu.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: tu,
  load: function(e, t, n, r) {
    var i = this,
      a = [],
      o = new Wi;
    o.image = a;
    var s = new sn(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer");

    function l(f) {
      s.load(e[f], function(d) {
        var p = i.parse(d, !0);
        a[f] = {
          width: p.width,
          height: p.height,
          format: p.format,
          mipmaps: p.mipmaps
        }, c += 1, c === 6 && (p.mipmapCount === 1 && (o.minFilter = ft), o.format = p.format, o.needsUpdate = !0, t && t(o))
      }, n, r)
    }
    if (Array.isArray(e))
      for (var c = 0, u = 0, h = e.length; u < h; ++u) l(u);
    else s.load(e, function(f) {
      var d = i.parse(f, !0);
      if (d.isCubemap)
        for (var p = d.mipmaps.length / d.mipmapCount, v = 0; v < p; v++) {
          a[v] = {
            mipmaps: []
          };
          for (var m = 0; m < d.mipmapCount; m++) a[v].mipmaps.push(d.mipmaps[v * d.mipmapCount + m]), a[v].format = d.format, a[v].width = d.width, a[v].height = d.height
        } else o.image.width = d.width, o.image.height = d.height, o.mipmaps = d.mipmaps;
      d.mipmapCount === 1 && (o.minFilter = ft), o.format = d.format, o.needsUpdate = !0, t && t(o)
    }, n, r);
    return o
  }
});

function nu(e) {
  Ve.call(this, e)
}
nu.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: nu,
  load: function(e, t, n, r) {
    var i = this,
      a = new Jr,
      o = new sn(this.manager);
    return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(e, function(s) {
      var l = i.parse(s);
      l && (l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width, a.image.height = l.height, a.image.data = l.data), a.wrapS = l.wrapS !== void 0 ? l.wrapS : Tt, a.wrapT = l.wrapT !== void 0 ? l.wrapT : Tt, a.magFilter = l.magFilter !== void 0 ? l.magFilter : ft, a.minFilter = l.minFilter !== void 0 ? l.minFilter : ft, a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.format !== void 0 && (a.format = l.format), l.type !== void 0 && (a.type = l.type), l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps, a.minFilter = Zo), l.mipmapCount === 1 && (a.minFilter = ft), a.needsUpdate = !0, t && t(a, l))
    }, n, r), a
  }
});

function sa(e) {
  Ve.call(this, e)
}
sa.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: sa,
  load: function(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this,
      a = hi.get(e);
    if (a !== void 0) return i.manager.itemStart(e), setTimeout(function() {
      t && t(a), i.manager.itemEnd(e)
    }, 0), a;
    var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

    function s() {
      o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), hi.add(e, this), t && t(this), i.manager.itemEnd(e)
    }

    function l(c) {
      o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), r && r(c), i.manager.itemError(e), i.manager.itemEnd(e)
    }
    return o.addEventListener("load", s, !1), o.addEventListener("error", l, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(e), o.src = e, o
  }
});

function ol(e) {
  Ve.call(this, e)
}
ol.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: ol,
  load: function(e, t, n, r) {
    var i = new kn,
      a = new sa(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    var o = 0;

    function s(c) {
      a.load(e[c], function(u) {
        i.images[c] = u, o++, o === 6 && (i.needsUpdate = !0, t && t(i))
      }, void 0, r)
    }
    for (var l = 0; l < e.length; ++l) s(l);
    return i
  }
});

function Ho(e) {
  Ve.call(this, e)
}
Ho.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: Ho,
  load: function(e, t, n, r) {
    var i = new Ze,
      a = new sa(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      i.image = o;
      var s = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0;
      i.format = s ? zn : $t, i.needsUpdate = !0, t !== void 0 && t(i)
    }, n, r), i
  }
});

function ge() {
  this.type = "Curve", this.arcLengthDivisions = 200
}
Object.assign(ge.prototype, {
  getPoint: function() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null
  },
  getPointAt: function(e, t) {
    var n = this.getUtoTmapping(e);
    return this.getPoint(n, t)
  },
  getPoints: function(e) {
    e === void 0 && (e = 5);
    for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t
  },
  getSpacedPoints: function(e) {
    e === void 0 && (e = 5);
    for (var t = [], n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t
  },
  getLength: function() {
    var e = this.getLengths();
    return e[e.length - 1]
  },
  getLengths: function(e) {
    if (e === void 0 && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = !1;
    var t = [],
      n, r = this.getPoint(0),
      i, a = 0;
    for (t.push(0), i = 1; i <= e; i++) n = this.getPoint(i / e), a += n.distanceTo(r), t.push(a), r = n;
    return this.cacheArcLengths = t, t
  },
  updateArcLengths: function() {
    this.needsUpdate = !0, this.getLengths()
  },
  getUtoTmapping: function(e, t) {
    var n = this.getLengths(),
      r = 0,
      i = n.length,
      a;
    t ? a = t : a = e * n[i - 1];
    for (var o = 0, s = i - 1, l; o <= s;)
      if (r = Math.floor(o + (s - o) / 2), l = n[r] - a, l < 0) o = r + 1;
      else if (l > 0) s = r - 1;
    else {
      s = r;
      break
    }
    if (r = s, n[r] === a) return r / (i - 1);
    var c = n[r],
      u = n[r + 1],
      h = u - c,
      f = (a - c) / h,
      d = (r + f) / (i - 1);
    return d
  },
  getTangent: function(e) {
    var t = 1e-4,
      n = e - t,
      r = e + t;
    n < 0 && (n = 0), r > 1 && (r = 1);
    var i = this.getPoint(n),
      a = this.getPoint(r),
      o = a.clone().sub(i);
    return o.normalize()
  },
  getTangentAt: function(e) {
    var t = this.getUtoTmapping(e);
    return this.getTangent(t)
  },
  computeFrenetFrames: function(e, t) {
    var n = new M,
      r = [],
      i = [],
      a = [],
      o = new M,
      s = new De,
      l, c, u;
    for (l = 0; l <= e; l++) c = l / e, r[l] = this.getTangentAt(c), r[l].normalize();
    i[0] = new M, a[0] = new M;
    var h = Number.MAX_VALUE,
      f = Math.abs(r[0].x),
      d = Math.abs(r[0].y),
      p = Math.abs(r[0].z);
    for (f <= h && (h = f, n.set(1, 0, 0)), d <= h && (h = d, n.set(0, 1, 0)), p <= h && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]), l = 1; l <= e; l++) i[l] = i[l - 1].clone(), a[l] = a[l - 1].clone(), o.crossVectors(r[l - 1], r[l]), o.length() > Number.EPSILON && (o.normalize(), u = Math.acos(Te.clamp(r[l - 1].dot(r[l]), -1, 1)), i[l].applyMatrix4(s.makeRotationAxis(o, u))), a[l].crossVectors(r[l], i[l]);
    if (t === !0)
      for (u = Math.acos(Te.clamp(i[0].dot(i[e]), -1, 1)), u /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (u = -u), l = 1; l <= e; l++) i[l].applyMatrix4(s.makeRotationAxis(r[l], u * l)), a[l].crossVectors(r[l], i[l]);
    return {
      tangents: r,
      normals: i,
      binormals: a
    }
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
  },
  fromJSON: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this
  }
});

function Wt(e, t, n, r, i, a, o, s) {
  ge.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
}
Wt.prototype = Object.create(ge.prototype);
Wt.prototype.constructor = Wt;
Wt.prototype.isEllipseCurve = !0;
Wt.prototype.getPoint = function(e, t) {
  for (var n = t || new H, r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0;) i += r;
  for (; i > r;) i -= r;
  i < Number.EPSILON && (a ? i = 0 : i = r), this.aClockwise === !0 && !a && (i === r ? i = -r : i = i - r);
  var o = this.aStartAngle + e * i,
    s = this.aX + this.xRadius * Math.cos(o),
    l = this.aY + this.yRadius * Math.sin(o);
  if (this.aRotation !== 0) {
    var c = Math.cos(this.aRotation),
      u = Math.sin(this.aRotation),
      h = s - this.aX,
      f = l - this.aY;
    s = h * c - f * u + this.aX, l = h * u + f * c + this.aY
  }
  return n.set(s, l)
};
Wt.prototype.copy = function(e) {
  return ge.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
};
Wt.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
};
Wt.prototype.fromJSON = function(e) {
  return ge.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
};

function la(e, t, n, r, i, a) {
  Wt.call(this, e, t, n, n, r, i, a), this.type = "ArcCurve"
}
la.prototype = Object.create(Wt.prototype);
la.prototype.constructor = la;
la.prototype.isArcCurve = !0;

function Vl() {
  var e = 0,
    t = 0,
    n = 0,
    r = 0;

  function i(a, o, s, l) {
    e = a, t = s, n = -3 * a + 3 * o - 2 * s - l, r = 2 * a - 2 * o + s + l
  }
  return {
    initCatmullRom: function(a, o, s, l, c) {
      i(o, s, c * (s - a), c * (l - o))
    },
    initNonuniformCatmullRom: function(a, o, s, l, c, u, h) {
      var f = (o - a) / c - (s - a) / (c + u) + (s - o) / u,
        d = (s - o) / u - (l - o) / (u + h) + (l - s) / h;
      f *= u, d *= u, i(o, s, f, d)
    },
    calc: function(a) {
      var o = a * a,
        s = o * a;
      return e + t * a + n * o + r * s
    }
  }
}
var Ja = new M,
  Ts = new Vl,
  As = new Vl,
  Ls = new Vl;

function Ft(e, t, n, r) {
  ge.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = r || .5
}
Ft.prototype = Object.create(ge.prototype);
Ft.prototype.constructor = Ft;
Ft.prototype.isCatmullRomCurve3 = !0;
Ft.prototype.getPoint = function(e, t) {
  var n = t || new M,
    r = this.points,
    i = r.length,
    a = (i - (this.closed ? 0 : 1)) * e,
    o = Math.floor(a),
    s = a - o;
  this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2, s = 1);
  var l, c, u, h;
  if (this.closed || o > 0 ? l = r[(o - 1) % i] : (Ja.subVectors(r[0], r[1]).add(r[0]), l = Ja), c = r[o % i], u = r[(o + 1) % i], this.closed || o + 2 < i ? h = r[(o + 2) % i] : (Ja.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), h = Ja), this.curveType === "centripetal" || this.curveType === "chordal") {
    var f = this.curveType === "chordal" ? .5 : .25,
      d = Math.pow(l.distanceToSquared(c), f),
      p = Math.pow(c.distanceToSquared(u), f),
      v = Math.pow(u.distanceToSquared(h), f);
    p < 1e-4 && (p = 1), d < 1e-4 && (d = p), v < 1e-4 && (v = p), Ts.initNonuniformCatmullRom(l.x, c.x, u.x, h.x, d, p, v), As.initNonuniformCatmullRom(l.y, c.y, u.y, h.y, d, p, v), Ls.initNonuniformCatmullRom(l.z, c.z, u.z, h.z, d, p, v)
  } else this.curveType === "catmullrom" && (Ts.initCatmullRom(l.x, c.x, u.x, h.x, this.tension), As.initCatmullRom(l.y, c.y, u.y, h.y, this.tension), Ls.initCatmullRom(l.z, c.z, u.z, h.z, this.tension));
  return n.set(Ts.calc(s), As.calc(s), Ls.calc(s)), n
};
Ft.prototype.copy = function(e) {
  ge.prototype.copy.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone())
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
};
Ft.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray())
  }
  return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
};
Ft.prototype.fromJSON = function(e) {
  ge.prototype.fromJSON.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new M().fromArray(r))
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
};

function ru(e, t, n, r, i) {
  var a = (r - t) * .5,
    o = (i - n) * .5,
    s = e * e,
    l = e * s;
  return (2 * n - 2 * r + a + o) * l + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n
}

function ly(e, t) {
  var n = 1 - e;
  return n * n * t
}

function cy(e, t) {
  return 2 * (1 - e) * e * t
}

function uy(e, t) {
  return e * e * t
}

function Ii(e, t, n, r) {
  return ly(e, t) + cy(e, n) + uy(e, r)
}

function hy(e, t) {
  var n = 1 - e;
  return n * n * n * t
}

function fy(e, t) {
  var n = 1 - e;
  return 3 * n * n * e * t
}

function dy(e, t) {
  return 3 * (1 - e) * e * e * t
}

function py(e, t) {
  return e * e * e * t
}

function Ni(e, t, n, r, i) {
  return hy(e, t) + fy(e, n) + dy(e, r) + py(e, i)
}

function ln(e, t, n, r) {
  ge.call(this), this.type = "CubicBezierCurve", this.v0 = e || new H, this.v1 = t || new H, this.v2 = n || new H, this.v3 = r || new H
}
ln.prototype = Object.create(ge.prototype);
ln.prototype.constructor = ln;
ln.prototype.isCubicBezierCurve = !0;
ln.prototype.getPoint = function(e, t) {
  var n = t || new H,
    r = this.v0,
    i = this.v1,
    a = this.v2,
    o = this.v3;
  return n.set(Ni(e, r.x, i.x, a.x, o.x), Ni(e, r.y, i.y, a.y, o.y)), n
};
ln.prototype.copy = function(e) {
  return ge.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
};
ln.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
};
ln.prototype.fromJSON = function(e) {
  return ge.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
};

function Sn(e, t, n, r) {
  ge.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new M, this.v1 = t || new M, this.v2 = n || new M, this.v3 = r || new M
}
Sn.prototype = Object.create(ge.prototype);
Sn.prototype.constructor = Sn;
Sn.prototype.isCubicBezierCurve3 = !0;
Sn.prototype.getPoint = function(e, t) {
  var n = t || new M,
    r = this.v0,
    i = this.v1,
    a = this.v2,
    o = this.v3;
  return n.set(Ni(e, r.x, i.x, a.x, o.x), Ni(e, r.y, i.y, a.y, o.y), Ni(e, r.z, i.z, a.z, o.z)), n
};
Sn.prototype.copy = function(e) {
  return ge.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
};
Sn.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
};
Sn.prototype.fromJSON = function(e) {
  return ge.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
};

function Bt(e, t) {
  ge.call(this), this.type = "LineCurve", this.v1 = e || new H, this.v2 = t || new H
}
Bt.prototype = Object.create(ge.prototype);
Bt.prototype.constructor = Bt;
Bt.prototype.isLineCurve = !0;
Bt.prototype.getPoint = function(e, t) {
  var n = t || new H;
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
};
Bt.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t)
};
Bt.prototype.getTangent = function() {
  var e = this.v2.clone().sub(this.v1);
  return e.normalize()
};
Bt.prototype.copy = function(e) {
  return ge.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
};
Bt.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
};
Bt.prototype.fromJSON = function(e) {
  return ge.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
};

function cn(e, t) {
  ge.call(this), this.type = "LineCurve3", this.v1 = e || new M, this.v2 = t || new M
}
cn.prototype = Object.create(ge.prototype);
cn.prototype.constructor = cn;
cn.prototype.isLineCurve3 = !0;
cn.prototype.getPoint = function(e, t) {
  var n = t || new M;
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
};
cn.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t)
};
cn.prototype.copy = function(e) {
  return ge.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
};
cn.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
};
cn.prototype.fromJSON = function(e) {
  return ge.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
};

function un(e, t, n) {
  ge.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new H, this.v1 = t || new H, this.v2 = n || new H
}
un.prototype = Object.create(ge.prototype);
un.prototype.constructor = un;
un.prototype.isQuadraticBezierCurve = !0;
un.prototype.getPoint = function(e, t) {
  var n = t || new H,
    r = this.v0,
    i = this.v1,
    a = this.v2;
  return n.set(Ii(e, r.x, i.x, a.x), Ii(e, r.y, i.y, a.y)), n
};
un.prototype.copy = function(e) {
  return ge.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
};
un.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
};
un.prototype.fromJSON = function(e) {
  return ge.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
};

function En(e, t, n) {
  ge.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new M, this.v1 = t || new M, this.v2 = n || new M
}
En.prototype = Object.create(ge.prototype);
En.prototype.constructor = En;
En.prototype.isQuadraticBezierCurve3 = !0;
En.prototype.getPoint = function(e, t) {
  var n = t || new M,
    r = this.v0,
    i = this.v1,
    a = this.v2;
  return n.set(Ii(e, r.x, i.x, a.x), Ii(e, r.y, i.y, a.y), Ii(e, r.z, i.z, a.z)), n
};
En.prototype.copy = function(e) {
  return ge.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
};
En.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
};
En.prototype.fromJSON = function(e) {
  return ge.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
};

function hn(e) {
  ge.call(this), this.type = "SplineCurve", this.points = e || []
}
hn.prototype = Object.create(ge.prototype);
hn.prototype.constructor = hn;
hn.prototype.isSplineCurve = !0;
hn.prototype.getPoint = function(e, t) {
  var n = t || new H,
    r = this.points,
    i = (r.length - 1) * e,
    a = Math.floor(i),
    o = i - a,
    s = r[a === 0 ? a : a - 1],
    l = r[a],
    c = r[a > r.length - 2 ? r.length - 1 : a + 1],
    u = r[a > r.length - 3 ? r.length - 1 : a + 2];
  return n.set(ru(o, s.x, l.x, c.x, u.x), ru(o, s.y, l.y, c.y, u.y)), n
};
hn.prototype.copy = function(e) {
  ge.prototype.copy.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone())
  }
  return this
};
hn.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray())
  }
  return e
};
hn.prototype.fromJSON = function(e) {
  ge.prototype.fromJSON.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new H().fromArray(r))
  }
  return this
};
var sl = Object.freeze({
  __proto__: null,
  ArcCurve: la,
  CatmullRomCurve3: Ft,
  CubicBezierCurve: ln,
  CubicBezierCurve3: Sn,
  EllipseCurve: Wt,
  LineCurve: Bt,
  LineCurve3: cn,
  QuadraticBezierCurve: un,
  QuadraticBezierCurve3: En,
  SplineCurve: hn
});

function Bn() {
  ge.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
}
Bn.prototype = Object.assign(Object.create(ge.prototype), {
  constructor: Bn,
  add: function(e) {
    this.curves.push(e)
  },
  closePath: function() {
    var e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Bt(t, e))
  },
  getPoint: function(e) {
    for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
      if (n[r] >= t) {
        var i = n[r] - t,
          a = this.curves[r],
          o = a.getLength(),
          s = o === 0 ? 0 : 1 - i / o;
        return a.getPointAt(s)
      }
      r++
    }
    return null
  },
  getLength: function() {
    var e = this.getCurveLengths();
    return e[e.length - 1]
  },
  updateArcLengths: function() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
  },
  getCurveLengths: function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e
  },
  getSpacedPoints: function(e) {
    e === void 0 && (e = 40);
    for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t
  },
  getPoints: function(e) {
    e = e || 12;
    for (var t = [], n, r = 0, i = this.curves; r < i.length; r++)
      for (var a = i[r], o = a && a.isEllipseCurve ? e * 2 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), l = 0; l < s.length; l++) {
        var c = s[l];
        n && n.equals(c) || (t.push(c), n = c)
      }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t
  },
  copy: function(e) {
    ge.prototype.copy.call(this, e), this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(r.clone())
    }
    return this.autoClose = e.autoClose, this
  },
  toJSON: function() {
    var e = ge.prototype.toJSON.call(this);
    e.autoClose = this.autoClose, e.curves = [];
    for (var t = 0, n = this.curves.length; t < n; t++) {
      var r = this.curves[t];
      e.curves.push(r.toJSON())
    }
    return e
  },
  fromJSON: function(e) {
    ge.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(new sl[r.type]().fromJSON(r))
    }
    return this
  }
});

function rn(e) {
  Bn.call(this), this.type = "Path", this.currentPoint = new H, e && this.setFromPoints(e)
}
rn.prototype = Object.assign(Object.create(Bn.prototype), {
  constructor: rn,
  setFromPoints: function(e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
    return this
  },
  moveTo: function(e, t) {
    return this.currentPoint.set(e, t), this
  },
  lineTo: function(e, t) {
    var n = new Bt(this.currentPoint.clone(), new H(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this
  },
  quadraticCurveTo: function(e, t, n, r) {
    var i = new un(this.currentPoint.clone(), new H(e, t), new H(n, r));
    return this.curves.push(i), this.currentPoint.set(n, r), this
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    var o = new ln(this.currentPoint.clone(), new H(e, t), new H(n, r), new H(i, a));
    return this.curves.push(o), this.currentPoint.set(i, a), this
  },
  splineThru: function(e) {
    var t = [this.currentPoint.clone()].concat(e),
      n = new hn(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this
  },
  arc: function(e, t, n, r, i, a) {
    var o = this.currentPoint.x,
      s = this.currentPoint.y;
    return this.absarc(e + o, t + s, n, r, i, a), this
  },
  absarc: function(e, t, n, r, i, a) {
    return this.absellipse(e, t, n, n, r, i, a), this
  },
  ellipse: function(e, t, n, r, i, a, o, s) {
    var l = this.currentPoint.x,
      c = this.currentPoint.y;
    return this.absellipse(e + l, t + c, n, r, i, a, o, s), this
  },
  absellipse: function(e, t, n, r, i, a, o, s) {
    var l = new Wt(e, t, n, r, i, a, o, s);
    if (this.curves.length > 0) {
      var c = l.getPoint(0);
      c.equals(this.currentPoint) || this.lineTo(c.x, c.y)
    }
    this.curves.push(l);
    var u = l.getPoint(1);
    return this.currentPoint.copy(u), this
  },
  copy: function(e) {
    return Bn.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this
  },
  toJSON: function() {
    var e = Bn.prototype.toJSON.call(this);
    return e.currentPoint = this.currentPoint.toArray(), e
  },
  fromJSON: function(e) {
    return Bn.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this
  }
});

function cr(e) {
  rn.call(this, e), this.uuid = Te.generateUUID(), this.type = "Shape", this.holes = []
}
cr.prototype = Object.assign(Object.create(rn.prototype), {
  constructor: cr,
  getPointsHoles: function(e) {
    for (var t = [], n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
    return t
  },
  extractPoints: function(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    }
  },
  copy: function(e) {
    rn.prototype.copy.call(this, e), this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(r.clone())
    }
    return this
  },
  toJSON: function() {
    var e = rn.prototype.toJSON.call(this);
    e.uuid = this.uuid, e.holes = [];
    for (var t = 0, n = this.holes.length; t < n; t++) {
      var r = this.holes[t];
      e.holes.push(r.toJSON())
    }
    return e
  },
  fromJSON: function(e) {
    rn.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(new rn().fromJSON(r))
    }
    return this
  }
});

function Ke(e, t) {
  Q.call(this), this.type = "Light", this.color = new oe(e), this.intensity = t !== void 0 ? t : 1, this.receiveShadow = void 0
}
Ke.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Ke,
  isLight: !0,
  copy: function(e) {
    return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t
  }
});

function ll(e, t, n) {
  Ke.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Q.DefaultUp), this.updateMatrix(), this.groundColor = new oe(t)
}
ll.prototype = Object.assign(Object.create(Ke.prototype), {
  constructor: ll,
  isHemisphereLight: !0,
  copy: function(e) {
    return Ke.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
  }
});

function Tn(e) {
  this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new H(512, 512), this.map = null, this.mapPass = null, this.matrix = new De, this._frustum = new _a, this._frameExtents = new H(1, 1), this._viewportCount = 1, this._viewports = [new Ye(0, 0, 1, 1)]
}
Object.assign(Tn.prototype, {
  _projScreenMatrix: new De,
  _lightPositionWorld: new M,
  _lookTarget: new M,
  getViewportCount: function() {
    return this._viewportCount
  },
  getFrustum: function() {
    return this._frustum
  },
  updateMatrices: function(e) {
    var t = this.camera,
      n = this.matrix,
      r = this._projScreenMatrix,
      i = this._lookTarget,
      a = this._lightPositionWorld;
    a.setFromMatrixPosition(e.matrixWorld), t.position.copy(a), i.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(i), t.updateMatrixWorld(), r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(r), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
  },
  getViewport: function(e) {
    return this._viewports[e]
  },
  getFrameExtents: function() {
    return this._frameExtents
  },
  copy: function(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  toJSON: function() {
    var e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
  }
});

function cl() {
  Tn.call(this, new st(50, 1, .5, 500))
}
cl.prototype = Object.assign(Object.create(Tn.prototype), {
  constructor: cl,
  isSpotLightShadow: !0,
  updateMatrices: function(e) {
    var t = this.camera,
      n = Te.RAD2DEG * 2 * e.angle,
      r = this.mapSize.width / this.mapSize.height,
      i = e.distance || t.far;
    (n !== t.fov || r !== t.aspect || i !== t.far) && (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), Tn.prototype.updateMatrices.call(this, e)
  }
});

function ul(e, t, n, r, i, a) {
  Ke.call(this, e, t), this.type = "SpotLight", this.position.copy(Q.DefaultUp), this.updateMatrix(), this.target = new Q, Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * Math.PI
    },
    set: function(o) {
      this.intensity = o / Math.PI
    }
  }), this.distance = n !== void 0 ? n : 0, this.angle = r !== void 0 ? r : Math.PI / 3, this.penumbra = i !== void 0 ? i : 0, this.decay = a !== void 0 ? a : 1, this.shadow = new cl
}
ul.prototype = Object.assign(Object.create(Ke.prototype), {
  constructor: ul,
  isSpotLight: !0,
  copy: function(e) {
    return Ke.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
  }
});

function hl() {
  Tn.call(this, new st(90, 1, .5, 500)), this._frameExtents = new H(4, 2), this._viewportCount = 6, this._viewports = [new Ye(2, 1, 1, 1), new Ye(0, 1, 1, 1), new Ye(3, 1, 1, 1), new Ye(1, 1, 1, 1), new Ye(3, 0, 1, 1), new Ye(1, 0, 1, 1)], this._cubeDirections = [new M(1, 0, 0), new M(-1, 0, 0), new M(0, 0, 1), new M(0, 0, -1), new M(0, 1, 0), new M(0, -1, 0)], this._cubeUps = [new M(0, 1, 0), new M(0, 1, 0), new M(0, 1, 0), new M(0, 1, 0), new M(0, 0, 1), new M(0, 0, -1)]
}
hl.prototype = Object.assign(Object.create(Tn.prototype), {
  constructor: hl,
  isPointLightShadow: !0,
  updateMatrices: function(e, t) {
    t === void 0 && (t = 0);
    var n = this.camera,
      r = this.matrix,
      i = this._lightPositionWorld,
      a = this._lookTarget,
      o = this._projScreenMatrix;
    i.setFromMatrixPosition(e.matrixWorld), n.position.copy(i), a.copy(n.position), a.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(a), n.updateMatrixWorld(), r.makeTranslation(-i.x, -i.y, -i.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o)
  }
});

function fl(e, t, n, r) {
  Ke.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * 4 * Math.PI
    },
    set: function(i) {
      this.intensity = i / (4 * Math.PI)
    }
  }), this.distance = n !== void 0 ? n : 0, this.decay = r !== void 0 ? r : 1, this.shadow = new hl
}
fl.prototype = Object.assign(Object.create(Ke.prototype), {
  constructor: fl,
  isPointLight: !0,
  copy: function(e) {
    return Ke.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
  }
});

function ca(e, t, n, r, i, a) {
  bn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e !== void 0 ? e : -1, this.right = t !== void 0 ? t : 1, this.top = n !== void 0 ? n : 1, this.bottom = r !== void 0 ? r : -1, this.near = i !== void 0 ? i : .1, this.far = a !== void 0 ? a : 2e3, this.updateProjectionMatrix()
}
ca.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: ca,
  isOrthographicCamera: !0,
  copy: function(e, t) {
    return bn.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this
  },
  setViewOffset: function(e, t, n, r, i, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
  },
  updateProjectionMatrix: function() {
    var e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2,
      i = n - e,
      a = n + e,
      o = r + t,
      s = r - t;
    if (this.view !== null && this.view.enabled) {
      var l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        c = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      i += l * this.view.offsetX, a = i + l * this.view.width, o -= c * this.view.offsetY, s = o - c * this.view.height
    }
    this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t
  }
});

function dl() {
  Tn.call(this, new ca(-5, 5, 5, -5, .5, 500))
}
dl.prototype = Object.assign(Object.create(Tn.prototype), {
  constructor: dl,
  isDirectionalLightShadow: !0,
  updateMatrices: function(e) {
    Tn.prototype.updateMatrices.call(this, e)
  }
});

function pl(e, t) {
  Ke.call(this, e, t), this.type = "DirectionalLight", this.position.copy(Q.DefaultUp), this.updateMatrix(), this.target = new Q, this.shadow = new dl
}
pl.prototype = Object.assign(Object.create(Ke.prototype), {
  constructor: pl,
  isDirectionalLight: !0,
  copy: function(e) {
    return Ke.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
  }
});

function vl(e, t) {
  Ke.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
}
vl.prototype = Object.assign(Object.create(Ke.prototype), {
  constructor: vl,
  isAmbientLight: !0
});

function ml(e, t, n, r) {
  Ke.call(this, e, t), this.type = "RectAreaLight", this.width = n !== void 0 ? n : 10, this.height = r !== void 0 ? r : 10
}
ml.prototype = Object.assign(Object.create(Ke.prototype), {
  constructor: ml,
  isRectAreaLight: !0,
  copy: function(e) {
    return Ke.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this
  },
  toJSON: function(e) {
    var t = Ke.prototype.toJSON.call(this, e);
    return t.object.width = this.width, t.object.height = this.height, t
  }
});

function gl(e) {
  Ve.call(this, e), this.textures = {}
}
gl.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: gl,
  load: function(e, t, n, r) {
    var i = this,
      a = new sn(i.manager);
    a.setPath(i.path), a.load(e, function(o) {
      t(i.parse(JSON.parse(o)))
    }, n, r)
  },
  parse: function(e) {
    var t = this.textures;

    function n(l) {
      return t[l] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", l), t[l]
    }
    var r = new iy[e.type];
    if (e.uuid !== void 0 && (r.uuid = e.uuid), e.name !== void 0 && (r.name = e.name), e.color !== void 0 && r.color.setHex(e.color), e.roughness !== void 0 && (r.roughness = e.roughness), e.metalness !== void 0 && (r.metalness = e.metalness), e.sheen !== void 0 && (r.sheen = new oe().setHex(e.sheen)), e.emissive !== void 0 && r.emissive.setHex(e.emissive), e.specular !== void 0 && r.specular.setHex(e.specular), e.shininess !== void 0 && (r.shininess = e.shininess), e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = e.clearcoatRoughness), e.fog !== void 0 && (r.fog = e.fog), e.flatShading !== void 0 && (r.flatShading = e.flatShading), e.blending !== void 0 && (r.blending = e.blending), e.combine !== void 0 && (r.combine = e.combine), e.side !== void 0 && (r.side = e.side), e.opacity !== void 0 && (r.opacity = e.opacity), e.transparent !== void 0 && (r.transparent = e.transparent), e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest), e.depthTest !== void 0 && (r.depthTest = e.depthTest), e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (r.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (r.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (r.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (r.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (r.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (r.rotation = e.rotation), e.linewidth !== 1 && (r.linewidth = e.linewidth), e.dashSize !== void 0 && (r.dashSize = e.dashSize), e.gapSize !== void 0 && (r.gapSize = e.gapSize), e.scale !== void 0 && (r.scale = e.scale), e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (r.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (r.polygonOffsetUnits = e.polygonOffsetUnits), e.skinning !== void 0 && (r.skinning = e.skinning), e.morphTargets !== void 0 && (r.morphTargets = e.morphTargets), e.morphNormals !== void 0 && (r.morphNormals = e.morphNormals), e.dithering !== void 0 && (r.dithering = e.dithering), e.vertexTangents !== void 0 && (r.vertexTangents = e.vertexTangents), e.visible !== void 0 && (r.visible = e.visible), e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped), e.userData !== void 0 && (r.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? r.vertexColors = e.vertexColors > 0 : r.vertexColors = e.vertexColors), e.uniforms !== void 0)
      for (var i in e.uniforms) {
        var a = e.uniforms[i];
        switch (r.uniforms[i] = {}, a.type) {
          case "t":
            r.uniforms[i].value = n(a.value);
            break;
          case "c":
            r.uniforms[i].value = new oe().setHex(a.value);
            break;
          case "v2":
            r.uniforms[i].value = new H().fromArray(a.value);
            break;
          case "v3":
            r.uniforms[i].value = new M().fromArray(a.value);
            break;
          case "v4":
            r.uniforms[i].value = new Ye().fromArray(a.value);
            break;
          case "m3":
            r.uniforms[i].value = new gt().fromArray(a.value);
          case "m4":
            r.uniforms[i].value = new De().fromArray(a.value);
            break;
          default:
            r.uniforms[i].value = a.value
        }
      }
    if (e.defines !== void 0 && (r.defines = e.defines), e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader), e.extensions !== void 0)
      for (var o in e.extensions) r.extensions[o] = e.extensions[o];
    if (e.shading !== void 0 && (r.flatShading = e.shading === 1), e.size !== void 0 && (r.size = e.size), e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (r.map = n(e.map)), e.matcap !== void 0 && (r.matcap = n(e.matcap)), e.alphaMap !== void 0 && (r.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale), e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      var s = e.normalScale;
      Array.isArray(s) === !1 && (s = [s, s]), r.normalScale = new H().fromArray(s)
    }
    return e.displacementMap !== void 0 && (r.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (r.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (r.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (r.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)), e.envMap !== void 0 && (r.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (r.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (r.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (r.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (r.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (r.clearcoatNormalScale = new H().fromArray(e.clearcoatNormalScale)), r
  },
  setTextures: function(e) {
    return this.textures = e, this
  }
});
var dh = {
  decodeText: function(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    for (var t = "", n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t))
    } catch {
      return t
    }
  },
  extractUrlBase: function(e) {
    var t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.substr(0, t + 1)
  }
};

function yl() {
  se.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
}
yl.prototype = Object.assign(Object.create(se.prototype), {
  constructor: yl,
  isInstancedBufferGeometry: !0,
  copy: function(e) {
    return se.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  toJSON: function() {
    var e = se.prototype.toJSON.call(this);
    return e.maxInstancedCount = this.maxInstancedCount, e.isInstancedBufferGeometry = !0, e
  }
});

function xl(e, t, n, r) {
  typeof n == "number" && (r = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), we.call(this, e, t, n), this.meshPerAttribute = r || 1
}
xl.prototype = Object.assign(Object.create(we.prototype), {
  constructor: xl,
  isInstancedBufferAttribute: !0,
  copy: function(e) {
    return we.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
  },
  toJSON: function() {
    var e = we.prototype.toJSON.call(this);
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
  }
});

function _l(e) {
  Ve.call(this, e)
}
_l.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: _l,
  load: function(e, t, n, r) {
    var i = this,
      a = new sn(i.manager);
    a.setPath(i.path), a.load(e, function(o) {
      t(i.parse(JSON.parse(o)))
    }, n, r)
  },
  parse: function(e) {
    var t = e.isInstancedBufferGeometry ? new yl : new se,
      n = e.data.index;
    if (n !== void 0) {
      var r = new Rs[n.type](n.array);
      t.setIndex(new we(r, 1))
    }
    var i = e.data.attributes;
    for (var a in i) {
      var o = i[a],
        r = new Rs[o.type](o.array),
        s = o.isInstancedBufferAttribute ? xl : we,
        l = new s(r, o.itemSize, o.normalized);
      o.name !== void 0 && (l.name = o.name), t.setAttribute(a, l)
    }
    var c = e.data.morphAttributes;
    if (c)
      for (var a in c) {
        for (var u = c[a], h = [], f = 0, d = u.length; f < d; f++) {
          var o = u[f],
            r = new Rs[o.type](o.array),
            l = new we(r, o.itemSize, o.normalized);
          o.name !== void 0 && (l.name = o.name), h.push(l)
        }
        t.morphAttributes[a] = h
      }
    var p = e.data.morphTargetsRelative;
    p && (t.morphTargetsRelative = !0);
    var v = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (v !== void 0)
      for (var f = 0, m = v.length; f !== m; ++f) {
        var g = v[f];
        t.addGroup(g.start, g.count, g.materialIndex)
      }
    var x = e.data.boundingSphere;
    if (x !== void 0) {
      var w = new M;
      x.center !== void 0 && w.fromArray(x.center), t.boundingSphere = new Yn(w, x.radius)
    }
    return e.name && (t.name = e.name), e.userData && (t.userData = e.userData), t
  }
});
var Rs = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray: typeof Uint8ClampedArray < "u" ? Uint8ClampedArray : Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};

function bl(e) {
  Ve.call(this, e)
}
bl.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: bl,
  load: function(e, t, n, r) {
    var i = this,
      a = this.path === "" ? dh.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || a;
    var o = new sn(i.manager);
    o.setPath(this.path), o.load(e, function(s) {
      var l = null;
      try {
        l = JSON.parse(s)
      } catch (u) {
        r !== void 0 && r(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return
      }
      var c = l.metadata;
      if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry") {
        console.error("THREE.ObjectLoader: Can't load " + e);
        return
      }
      i.parse(l, t)
    }, n, r)
  },
  parse: function(e, t) {
    var n = this.parseShape(e.shapes),
      r = this.parseGeometries(e.geometries, n),
      i = this.parseImages(e.images, function() {
        t !== void 0 && t(s)
      }),
      a = this.parseTextures(e.textures, i),
      o = this.parseMaterials(e.materials, a),
      s = this.parseObject(e.object, r, o);
    return e.animations && (s.animations = this.parseAnimations(e.animations)), (e.images === void 0 || e.images.length === 0) && t !== void 0 && t(s), s
  },
  parseShape: function(e) {
    var t = {};
    if (e !== void 0)
      for (var n = 0, r = e.length; n < r; n++) {
        var i = new cr().fromJSON(e[n]);
        t[i.uuid] = i
      }
    return t
  },
  parseGeometries: function(e, t) {
    var n = {};
    if (e !== void 0)
      for (var r = new _l, i = 0, a = e.length; i < a; i++) {
        var o, s = e[i];
        switch (s.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            o = new wt[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
            break;
          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            o = new wt[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
            break;
          case "CircleGeometry":
          case "CircleBufferGeometry":
            o = new wt[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
            break;
          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            o = new wt[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
            break;
          case "ConeGeometry":
          case "ConeBufferGeometry":
            o = new wt[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
            break;
          case "SphereGeometry":
          case "SphereBufferGeometry":
            o = new wt[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
            break;
          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            o = new wt[s.type](s.radius, s.detail);
            break;
          case "RingGeometry":
          case "RingBufferGeometry":
            o = new wt[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
            break;
          case "TorusGeometry":
          case "TorusBufferGeometry":
            o = new wt[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
            break;
          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            o = new wt[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
            break;
          case "TubeGeometry":
          case "TubeBufferGeometry":
            o = new wt[s.type](new sl[s.path.type]().fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
            break;
          case "LatheGeometry":
          case "LatheBufferGeometry":
            o = new wt[s.type](s.points, s.segments, s.phiStart, s.phiLength);
            break;
          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            o = new wt[s.type](s.vertices, s.indices, s.radius, s.details);
            break;
          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            for (var h = [], l = 0, c = s.shapes.length; l < c; l++) {
              var u = t[s.shapes[l]];
              h.push(u)
            }
            o = new wt[s.type](h, s.curveSegments);
            break;
          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            for (var h = [], l = 0, c = s.shapes.length; l < c; l++) {
              var u = t[s.shapes[l]];
              h.push(u)
            }
            var f = s.options.extrudePath;
            f !== void 0 && (s.options.extrudePath = new sl[f.type]().fromJSON(f)), o = new wt[s.type](h, s.options);
            break;
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = r.parse(s);
            break;
          case "Geometry":
            console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
            break;
          default:
            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
            continue
        }
        o.uuid = s.uuid, s.name !== void 0 && (o.name = s.name), o.isBufferGeometry === !0 && s.userData !== void 0 && (o.userData = s.userData), n[s.uuid] = o
      }
    return n
  },
  parseMaterials: function(e, t) {
    var n = {},
      r = {};
    if (e !== void 0) {
      var i = new gl;
      i.setTextures(t);
      for (var a = 0, o = e.length; a < o; a++) {
        var s = e[a];
        if (s.type === "MultiMaterial") {
          for (var l = [], c = 0; c < s.materials.length; c++) {
            var u = s.materials[c];
            n[u.uuid] === void 0 && (n[u.uuid] = i.parse(u)), l.push(n[u.uuid])
          }
          r[s.uuid] = l
        } else n[s.uuid] === void 0 && (n[s.uuid] = i.parse(s)), r[s.uuid] = n[s.uuid]
      }
    }
    return r
  },
  parseAnimations: function(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n],
        i = Jt.parse(r);
      r.uuid !== void 0 && (i.uuid = r.uuid), t.push(i)
    }
    return t
  },
  parseImages: function(e, t) {
    var n = this,
      r = {};

    function i(v) {
      return n.manager.itemStart(v), o.load(v, function() {
        n.manager.itemEnd(v)
      }, void 0, function() {
        n.manager.itemError(v), n.manager.itemEnd(v)
      })
    }
    if (e !== void 0 && e.length > 0) {
      var a = new fh(t),
        o = new sa(a);
      o.setCrossOrigin(this.crossOrigin);
      for (var s = 0, l = e.length; s < l; s++) {
        var c = e[s],
          u = c.url;
        if (Array.isArray(u)) {
          r[c.uuid] = [];
          for (var h = 0, f = u.length; h < f; h++) {
            var d = u[h],
              p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.resourcePath + d;
            r[c.uuid].push(i(p))
          }
        } else {
          var p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.resourcePath + c.url;
          r[c.uuid] = i(p)
        }
      }
    }
    return r
  },
  parseTextures: function(e, t) {
    function n(l, c) {
      return typeof l == "number" ? l : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", l), c[l])
    }
    var r = {};
    if (e !== void 0)
      for (var i = 0, a = e.length; i < a; i++) {
        var o = e[i];
        o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
        var s;
        Array.isArray(t[o.image]) ? s = new kn(t[o.image]) : s = new Ze(t[o.image]), s.needsUpdate = !0, s.uuid = o.uuid, o.name !== void 0 && (s.name = o.name), o.mapping !== void 0 && (s.mapping = n(o.mapping, vy)), o.offset !== void 0 && s.offset.fromArray(o.offset), o.repeat !== void 0 && s.repeat.fromArray(o.repeat), o.center !== void 0 && s.center.fromArray(o.center), o.rotation !== void 0 && (s.rotation = o.rotation), o.wrap !== void 0 && (s.wrapS = n(o.wrap[0], iu), s.wrapT = n(o.wrap[1], iu)), o.format !== void 0 && (s.format = o.format), o.type !== void 0 && (s.type = o.type), o.encoding !== void 0 && (s.encoding = o.encoding), o.minFilter !== void 0 && (s.minFilter = n(o.minFilter, au)), o.magFilter !== void 0 && (s.magFilter = n(o.magFilter, au)), o.anisotropy !== void 0 && (s.anisotropy = o.anisotropy), o.flipY !== void 0 && (s.flipY = o.flipY), o.premultiplyAlpha !== void 0 && (s.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (s.unpackAlignment = o.unpackAlignment), r[o.uuid] = s
      }
    return r
  },
  parseObject: function(e, t, n) {
    var r;

    function i(m) {
      return t[m] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", m), t[m]
    }

    function a(m) {
      if (m !== void 0) {
        if (Array.isArray(m)) {
          for (var g = [], x = 0, w = m.length; x < w; x++) {
            var S = m[x];
            n[S] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", S), g.push(n[S])
          }
          return g
        }
        return n[m] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", m), n[m]
      }
    }
    switch (e.type) {
      case "Scene":
        r = new _n, e.background !== void 0 && Number.isInteger(e.background) && (r.background = new oe(e.background)), e.fog !== void 0 && (e.fog.type === "Fog" ? r.fog = new Ws(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (r.fog = new ks(e.fog.color, e.fog.density)));
        break;
      case "PerspectiveCamera":
        r = new st(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (r.focus = e.focus), e.zoom !== void 0 && (r.zoom = e.zoom), e.filmGauge !== void 0 && (r.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (r.filmOffset = e.filmOffset), e.view !== void 0 && (r.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        r = new ca(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (r.zoom = e.zoom), e.view !== void 0 && (r.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        r = new vl(e.color, e.intensity);
        break;
      case "DirectionalLight":
        r = new pl(e.color, e.intensity);
        break;
      case "PointLight":
        r = new fl(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        r = new ml(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        r = new ul(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        r = new ll(e.color, e.groundColor, e.intensity);
        break;
      case "SkinnedMesh":
        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
      case "Mesh":
        var o = i(e.geometry),
          s = a(e.material);
        r = new et(o, s);
        break;
      case "InstancedMesh":
        var o = i(e.geometry),
          s = a(e.material),
          l = e.count,
          c = e.instanceMatrix;
        r = new Ys(o, s, l), r.instanceMatrix = new we(new Float32Array(c.array), 16);
        break;
      case "LOD":
        r = new yo;
        break;
      case "Line":
        r = new kt(i(e.geometry), a(e.material), e.mode);
        break;
      case "LineLoop":
        r = new Zs(i(e.geometry), a(e.material));
        break;
      case "LineSegments":
        r = new ct(i(e.geometry), a(e.material));
        break;
      case "PointCloud":
      case "Points":
        r = new $s(i(e.geometry), a(e.material));
        break;
      case "Sprite":
        r = new js(a(e.material));
        break;
      case "Group":
        r = new ki;
        break;
      default:
        r = new Q
    }
    if (r.uuid = e.uuid, e.name !== void 0 && (r.name = e.name), e.matrix !== void 0 ? (r.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (r.matrixAutoUpdate = e.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (e.position !== void 0 && r.position.fromArray(e.position), e.rotation !== void 0 && r.rotation.fromArray(e.rotation), e.quaternion !== void 0 && r.quaternion.fromArray(e.quaternion), e.scale !== void 0 && r.scale.fromArray(e.scale)), e.castShadow !== void 0 && (r.castShadow = e.castShadow), e.receiveShadow !== void 0 && (r.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (r.shadow.bias = e.shadow.bias), e.shadow.radius !== void 0 && (r.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && r.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (r.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (r.visible = e.visible), e.frustumCulled !== void 0 && (r.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (r.renderOrder = e.renderOrder), e.userData !== void 0 && (r.userData = e.userData), e.layers !== void 0 && (r.layers.mask = e.layers), e.children !== void 0)
      for (var u = e.children, h = 0; h < u.length; h++) r.add(this.parseObject(u[h], t, n));
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (r.autoUpdate = e.autoUpdate);
      for (var f = e.levels, d = 0; d < f.length; d++) {
        var p = f[d],
          v = r.getObjectByProperty("uuid", p.object);
        v !== void 0 && r.addLevel(v, p.distance)
      }
    }
    return r
  }
});
var vy = {
    UVMapping: Ol,
    CubeReflectionMapping: Il,
    CubeRefractionMapping: Nl,
    EquirectangularReflectionMapping: zu,
    EquirectangularRefractionMapping: Fl,
    SphericalReflectionMapping: Gu,
    CubeUVReflectionMapping: xa,
    CubeUVRefractionMapping: Bl
  },
  iu = {
    RepeatWrapping: lo,
    ClampToEdgeWrapping: Tt,
    MirroredRepeatWrapping: co
  },
  au = {
    NearestFilter: lt,
    NearestMipmapNearestFilter: Os,
    NearestMipmapLinearFilter: Is,
    LinearFilter: ft,
    LinearMipmapNearestFilter: Hu,
    LinearMipmapLinearFilter: Zo
  };

function ou(e) {
  typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), Ve.call(this, e), this.options = void 0
}
ou.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: ou,
  setOptions: function(t) {
    return this.options = t, this
  },
  load: function(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this,
      a = hi.get(e);
    if (a !== void 0) return i.manager.itemStart(e), setTimeout(function() {
      t && t(a), i.manager.itemEnd(e)
    }, 0), a;
    fetch(e).then(function(o) {
      return o.blob()
    }).then(function(o) {
      return i.options === void 0 ? createImageBitmap(o) : createImageBitmap(o, i.options)
    }).then(function(o) {
      hi.add(e, o), t && t(o), i.manager.itemEnd(e)
    }).catch(function(o) {
      r && r(o), i.manager.itemError(e), i.manager.itemEnd(e)
    }), i.manager.itemStart(e)
  }
});

function ph() {
  this.type = "ShapePath", this.color = new oe, this.subPaths = [], this.currentPath = null
}
Object.assign(ph.prototype, {
  moveTo: function(e, t) {
    return this.currentPath = new rn, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this
  },
  lineTo: function(e, t) {
    return this.currentPath.lineTo(e, t), this
  },
  quadraticCurveTo: function(e, t, n, r) {
    return this.currentPath.quadraticCurveTo(e, t, n, r), this
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this
  },
  splineThru: function(e) {
    return this.currentPath.splineThru(e), this
  },
  toShapes: function(e, t) {
    function n(O) {
      for (var k = [], j = 0, J = O.length; j < J; j++) {
        var W = O[j],
          Z = new cr;
        Z.curves = W.curves, k.push(Z)
      }
      return k
    }

    function r(O, k) {
      for (var j = k.length, J = !1, W = j - 1, Z = 0; Z < j; W = Z++) {
        var re = k[W],
          Pe = k[Z],
          Ue = Pe.x - re.x,
          Le = Pe.y - re.y;
        if (Math.abs(Le) > Number.EPSILON) {
          if (Le < 0 && (re = k[Z], Ue = -Ue, Pe = k[W], Le = -Le), O.y < re.y || O.y > Pe.y) continue;
          if (O.y === re.y) {
            if (O.x === re.x) return !0
          } else {
            var ye = Le * (O.x - re.x) - Ue * (O.y - re.y);
            if (ye === 0) return !0;
            if (ye < 0) continue;
            J = !J
          }
        } else {
          if (O.y !== re.y) continue;
          if (Pe.x <= O.x && O.x <= re.x || re.x <= O.x && O.x <= Pe.x) return !0
        }
      }
      return J
    }
    var i = Hn.isClockWise,
      a = this.subPaths;
    if (a.length === 0) return [];
    if (t === !0) return n(a);
    var o, s, l, c = [];
    if (a.length === 1) return s = a[0], l = new cr, l.curves = s.curves, c.push(l), c;
    var u = !i(a[0].getPoints());
    u = e ? !u : u;
    var h = [],
      f = [],
      d = [],
      p = 0,
      v;
    f[p] = void 0, d[p] = [];
    for (var m = 0, g = a.length; m < g; m++) s = a[m], v = s.getPoints(), o = i(v), o = e ? !o : o, o ? (!u && f[p] && p++, f[p] = {
      s: new cr,
      p: v
    }, f[p].s.curves = s.curves, u && p++, d[p] = []) : d[p].push({
      h: s,
      p: v[0]
    });
    if (!f[0]) return n(a);
    if (f.length > 1) {
      for (var x = !1, w = [], S = 0, b = f.length; S < b; S++) h[S] = [];
      for (var S = 0, b = f.length; S < b; S++)
        for (var T = d[S], D = 0; D < T.length; D++) {
          for (var N = T[D], C = !0, B = 0; B < f.length; B++) r(N.p, f[B].p) && (S !== B && w.push({
            froms: S,
            tos: B,
            hole: D
          }), C ? (C = !1, h[B].push(N)) : x = !0);
          C && h[S].push(N)
        }
      w.length > 0 && (x || (d = h))
    }
    for (var I, m = 0, F = f.length; m < F; m++) {
      l = f[m].s, c.push(l), I = d[m];
      for (var U = 0, z = I.length; U < z; U++) l.holes.push(I[U].h)
    }
    return c
  }
});

function vh(e) {
  this.type = "Font", this.data = e
}
Object.assign(vh.prototype, {
  isFont: !0,
  generateShapes: function(e, t) {
    t === void 0 && (t = 100);
    for (var n = [], r = my(e, t, this.data), i = 0, a = r.length; i < a; i++) Array.prototype.push.apply(n, r[i].toShapes());
    return n
  }
});

function my(e, t, n) {
  for (var r = Array.from ? Array.from(e) : String(e).split(""), i = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, l = 0, c = 0; c < r.length; c++) {
    var u = r[c];
    if (u === `
`) s = 0, l -= a;
    else {
      var h = gy(u, i, s, l, n);
      s += h.offsetX, o.push(h.path)
    }
  }
  return o
}

function gy(e, t, n, r, i) {
  var a = i.glyphs[e] || i.glyphs["?"];
  if (!a) {
    console.error('THREE.Font: character "' + e + '" does not exists in font family ' + i.familyName + ".");
    return
  }
  var o = new ph,
    s, l, c, u, h, f, d, p;
  if (a.o)
    for (var v = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), m = 0, g = v.length; m < g;) {
      var x = v[m++];
      switch (x) {
        case "m":
          s = v[m++] * t + n, l = v[m++] * t + r, o.moveTo(s, l);
          break;
        case "l":
          s = v[m++] * t + n, l = v[m++] * t + r, o.lineTo(s, l);
          break;
        case "q":
          c = v[m++] * t + n, u = v[m++] * t + r, h = v[m++] * t + n, f = v[m++] * t + r, o.quadraticCurveTo(h, f, c, u);
          break;
        case "b":
          c = v[m++] * t + n, u = v[m++] * t + r, h = v[m++] * t + n, f = v[m++] * t + r, d = v[m++] * t + n, p = v[m++] * t + r, o.bezierCurveTo(h, f, d, p, c, u);
          break
      }
    }
  return {
    offsetX: a.ha * t,
    path: o
  }
}

function su(e) {
  Ve.call(this, e)
}
su.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: su,
  load: function(e, t, n, r) {
    var i = this,
      a = new sn(this.manager);
    a.setPath(this.path), a.load(e, function(o) {
      var s;
      try {
        s = JSON.parse(o)
      } catch {
        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), s = JSON.parse(o.substring(65, o.length - 2))
      }
      var l = i.parse(s);
      t && t(l)
    }, n, r)
  },
  parse: function(e) {
    return new vh(e)
  }
});
var $a, mh = {
  getContext: function() {
    return $a === void 0 && ($a = new(window.AudioContext || window.webkitAudioContext)), $a
  },
  setContext: function(e) {
    $a = e
  }
};

function Ml(e) {
  Ve.call(this, e)
}
Ml.prototype = Object.assign(Object.create(Ve.prototype), {
  constructor: Ml,
  load: function(e, t, n, r) {
    var i = new sn(this.manager);
    i.setResponseType("arraybuffer"), i.setPath(this.path), i.load(e, function(a) {
      var o = a.slice(0),
        s = mh.getContext();
      s.decodeAudioData(o, function(l) {
        t(l)
      })
    }, n, r)
  }
});

function kl() {
  this.coefficients = [];
  for (var e = 0; e < 9; e++) this.coefficients.push(new M)
}
Object.assign(kl.prototype, {
  isSphericalHarmonics3: !0,
  set: function(e) {
    for (var t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this
  },
  zero: function() {
    for (var e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this
  },
  getAt: function(e, t) {
    var n = e.x,
      r = e.y,
      i = e.z,
      a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(.282095), t.addScaledVector(a[1], .488603 * r), t.addScaledVector(a[2], .488603 * i), t.addScaledVector(a[3], .488603 * n), t.addScaledVector(a[4], 1.092548 * (n * r)), t.addScaledVector(a[5], 1.092548 * (r * i)), t.addScaledVector(a[6], .315392 * (3 * i * i - 1)), t.addScaledVector(a[7], 1.092548 * (n * i)), t.addScaledVector(a[8], .546274 * (n * n - r * r)), t
  },
  getIrradianceAt: function(e, t) {
    var n = e.x,
      r = e.y,
      i = e.z,
      a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(.886227), t.addScaledVector(a[1], 2 * .511664 * r), t.addScaledVector(a[2], 2 * .511664 * i), t.addScaledVector(a[3], 2 * .511664 * n), t.addScaledVector(a[4], 2 * .429043 * n * r), t.addScaledVector(a[5], 2 * .429043 * r * i), t.addScaledVector(a[6], .743125 * i * i - .247708), t.addScaledVector(a[7], 2 * .429043 * n * i), t.addScaledVector(a[8], .429043 * (n * n - r * r)), t
  },
  add: function(e) {
    for (var t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this
  },
  addScaledSH: function(e, t) {
    for (var n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this
  },
  scale: function(e) {
    for (var t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this
  },
  lerp: function(e, t) {
    for (var n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
    return this
  },
  equals: function(e) {
    for (var t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
    return !0
  },
  copy: function(e) {
    return this.set(e.coefficients)
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = this.coefficients, r = 0; r < 9; r++) n[r].fromArray(e, t + r * 3);
    return this
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    for (var n = this.coefficients, r = 0; r < 9; r++) n[r].toArray(e, t + r * 3);
    return e
  }
});
Object.assign(kl, {
  getBasisAt: function(e, t) {
    var n = e.x,
      r = e.y,
      i = e.z;
    t[0] = .282095, t[1] = .488603 * r, t[2] = .488603 * i, t[3] = .488603 * n, t[4] = 1.092548 * n * r, t[5] = 1.092548 * r * i, t[6] = .315392 * (3 * i * i - 1), t[7] = 1.092548 * n * i, t[8] = .546274 * (n * n - r * r)
  }
});

function on(e, t) {
  Ke.call(this, void 0, t), this.sh = e !== void 0 ? e : new kl
}
on.prototype = Object.assign(Object.create(Ke.prototype), {
  constructor: on,
  isLightProbe: !0,
  copy: function(e) {
    return Ke.prototype.copy.call(this, e), this.sh.copy(e.sh), this.intensity = e.intensity, this
  },
  toJSON: function(e) {
    var t = Ke.prototype.toJSON.call(this, e);
    return t
  }
});

function lu(e, t, n) {
  on.call(this, void 0, n);
  var r = new oe().set(e),
    i = new oe().set(t),
    a = new M(r.r, r.g, r.b),
    o = new M(i.r, i.g, i.b),
    s = Math.sqrt(Math.PI),
    l = s * Math.sqrt(.75);
  this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l)
}
lu.prototype = Object.assign(Object.create(on.prototype), {
  constructor: lu,
  isHemisphereLightProbe: !0,
  copy: function(e) {
    return on.prototype.copy.call(this, e), this
  },
  toJSON: function(e) {
    var t = on.prototype.toJSON.call(this, e);
    return t
  }
});

function cu(e, t) {
  on.call(this, void 0, t);
  var n = new oe().set(e);
  this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
}
cu.prototype = Object.assign(Object.create(on.prototype), {
  constructor: cu,
  isAmbientLightProbe: !0,
  copy: function(e) {
    return on.prototype.copy.call(this, e), this
  },
  toJSON: function(e) {
    var t = on.prototype.toJSON.call(this, e);
    return t
  }
});
var uu = new De,
  hu = new De;

function yy() {
  this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new st, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new st, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
    focus: null,
    fov: null,
    aspect: null,
    near: null,
    far: null,
    zoom: null,
    eyeSep: null
  }
}
Object.assign(yy.prototype, {
  update: function(e) {
    var t = this._cache,
      n = t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep;
    if (n) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep;
      var r = e.projectionMatrix.clone(),
        i = t.eyeSep / 2,
        a = i * t.near / t.focus,
        o = t.near * Math.tan(Te.DEG2RAD * t.fov * .5) / t.zoom,
        s, l;
      hu.elements[12] = -i, uu.elements[12] = i, s = -o * t.aspect + a, l = o * t.aspect + a, r.elements[0] = 2 * t.near / (l - s), r.elements[8] = (l + s) / (l - s), this.cameraL.projectionMatrix.copy(r), s = -o * t.aspect - a, l = o * t.aspect - a, r.elements[0] = 2 * t.near / (l - s), r.elements[8] = (l + s) / (l - s), this.cameraR.projectionMatrix.copy(r)
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(hu), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(uu)
  }
});

function gh(e) {
  this.autoStart = e !== void 0 ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
}
Object.assign(gh.prototype, {
  start: function() {
    this.startTime = (typeof performance > "u" ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
  },
  stop: function() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1
  },
  getElapsedTime: function() {
    return this.getDelta(), this.elapsedTime
  },
  getDelta: function() {
    var e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      var t = (typeof performance > "u" ? Date : performance).now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
    }
    return e
  }
});
var rr = new M,
  fu = new yt,
  xy = new M,
  ir = new M;

function du() {
  Q.call(this), this.type = "AudioListener", this.context = mh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new gh
}
du.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: du,
  getInput: function() {
    return this.gain
  },
  removeFilter: function() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
  },
  getFilter: function() {
    return this.filter
  },
  setFilter: function(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
  },
  getMasterVolume: function() {
    return this.gain.gain.value
  },
  setMasterVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
  },
  updateMatrixWorld: function(e) {
    Q.prototype.updateMatrixWorld.call(this, e);
    var t = this.context.listener,
      n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(rr, fu, xy), ir.set(0, 0, -1).applyQuaternion(fu), t.positionX) {
      var r = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(rr.x, r), t.positionY.linearRampToValueAtTime(rr.y, r), t.positionZ.linearRampToValueAtTime(rr.z, r), t.forwardX.linearRampToValueAtTime(ir.x, r), t.forwardY.linearRampToValueAtTime(ir.y, r), t.forwardZ.linearRampToValueAtTime(ir.z, r), t.upX.linearRampToValueAtTime(n.x, r), t.upY.linearRampToValueAtTime(n.y, r), t.upZ.linearRampToValueAtTime(n.z, r)
    } else t.setPosition(rr.x, rr.y, rr.z), t.setOrientation(ir.x, ir.y, ir.z, n.x, n.y, n.z)
  }
});

function ua(e) {
  Q.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._pausedAt = 0, this.filters = []
}
ua.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: ua,
  getOutput: function() {
    return this.gain
  },
  setNodeSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
  },
  setMediaElementSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
  },
  setMediaStreamSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
  },
  setBuffer: function(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
  },
  play: function(e) {
    if (e === void 0 && (e = 0), this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return
    }
    this._startedAt = this.context.currentTime + e;
    var t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
  },
  pause: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return
    }
    return this.isPlaying === !0 && (this._pausedAt += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this
  },
  stop: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return
    }
    return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this
  },
  connect: function() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput())
    } else this.source.connect(this.getOutput());
    return this
  },
  disconnect: function() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput())
    } else this.source.disconnect(this.getOutput());
    return this
  },
  getFilters: function() {
    return this.filters
  },
  setFilters: function(e) {
    return e || (e = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
  },
  setDetune: function(e) {
    if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
  },
  getDetune: function() {
    return this.detune
  },
  getFilter: function() {
    return this.getFilters()[0]
  },
  setFilter: function(e) {
    return this.setFilters(e ? [e] : [])
  },
  setPlaybackRate: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this
  },
  getPlaybackRate: function() {
    return this.playbackRate
  },
  onEnded: function() {
    this.isPlaying = !1
  },
  getLoop: function() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
  },
  setLoop: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this
  },
  setLoopStart: function(e) {
    return this.loopStart = e, this
  },
  setLoopEnd: function(e) {
    return this.loopEnd = e, this
  },
  getVolume: function() {
    return this.gain.gain.value
  },
  setVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
  }
});
var ar = new M,
  pu = new yt,
  _y = new M,
  or = new M;

function vu(e) {
  ua.call(this, e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
}
vu.prototype = Object.assign(Object.create(ua.prototype), {
  constructor: vu,
  getOutput: function() {
    return this.panner
  },
  getRefDistance: function() {
    return this.panner.refDistance
  },
  setRefDistance: function(e) {
    return this.panner.refDistance = e, this
  },
  getRolloffFactor: function() {
    return this.panner.rolloffFactor
  },
  setRolloffFactor: function(e) {
    return this.panner.rolloffFactor = e, this
  },
  getDistanceModel: function() {
    return this.panner.distanceModel
  },
  setDistanceModel: function(e) {
    return this.panner.distanceModel = e, this
  },
  getMaxDistance: function() {
    return this.panner.maxDistance
  },
  setMaxDistance: function(e) {
    return this.panner.maxDistance = e, this
  },
  setDirectionalCone: function(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this
  },
  updateMatrixWorld: function(e) {
    if (Q.prototype.updateMatrixWorld.call(this, e), !(this.hasPlaybackControl === !0 && this.isPlaying === !1)) {
      this.matrixWorld.decompose(ar, pu, _y), or.set(0, 0, 1).applyQuaternion(pu);
      var t = this.panner;
      if (t.positionX) {
        var n = this.context.currentTime + this.listener.timeDelta;
        t.positionX.linearRampToValueAtTime(ar.x, n), t.positionY.linearRampToValueAtTime(ar.y, n), t.positionZ.linearRampToValueAtTime(ar.z, n), t.orientationX.linearRampToValueAtTime(or.x, n), t.orientationY.linearRampToValueAtTime(or.y, n), t.orientationZ.linearRampToValueAtTime(or.z, n)
      } else t.setPosition(ar.x, ar.y, ar.z), t.setOrientation(or.x, or.y, or.z)
    }
  }
});

function yh(e, t) {
  this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t !== void 0 ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
}
Object.assign(yh.prototype, {
  getFrequencyData: function() {
    return this.analyser.getByteFrequencyData(this.data), this.data
  },
  getAverageFrequency: function() {
    for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++) e += t[n];
    return e / t.length
  }
});

function xh(e, t, n) {
  this.binding = e, this.valueSize = n;
  var r = Float64Array,
    i;
  switch (t) {
    case "quaternion":
      i = this._slerp;
      break;
    case "string":
    case "bool":
      r = Array, i = this._select;
      break;
    default:
      i = this._lerp
  }
  this.buffer = new r(n * 4), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
}
Object.assign(xh.prototype, {
  accumulate: function(e, t) {
    var n = this.buffer,
      r = this.valueSize,
      i = e * r + r,
      a = this.cumulativeWeight;
    if (a === 0) {
      for (var o = 0; o !== r; ++o) n[i + o] = n[o];
      a = t
    } else {
      a += t;
      var s = t / a;
      this._mixBufferRegion(n, i, 0, s, r)
    }
    this.cumulativeWeight = a
  },
  apply: function(e) {
    var t = this.valueSize,
      n = this.buffer,
      r = e * t + t,
      i = this.cumulativeWeight,
      a = this.binding;
    if (this.cumulativeWeight = 0, i < 1) {
      var o = t * 3;
      this._mixBufferRegion(n, r, o, 1 - i, t)
    }
    for (var s = t, l = t + t; s !== l; ++s)
      if (n[s] !== n[s + t]) {
        a.setValue(n, r);
        break
      }
  },
  saveOriginalState: function() {
    var e = this.binding,
      t = this.buffer,
      n = this.valueSize,
      r = n * 3;
    e.getValue(t, r);
    for (var i = n, a = r; i !== a; ++i) t[i] = t[r + i % n];
    this.cumulativeWeight = 0
  },
  restoreOriginalState: function() {
    var e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e)
  },
  _select: function(e, t, n, r, i) {
    if (r >= .5)
      for (var a = 0; a !== i; ++a) e[t + a] = e[n + a]
  },
  _slerp: function(e, t, n, r) {
    yt.slerpFlat(e, t, e, t, e, n, r)
  },
  _lerp: function(e, t, n, r, i) {
    for (var a = 1 - r, o = 0; o !== i; ++o) {
      var s = t + o;
      e[s] = e[s] * a + e[n + o] * r
    }
  }
});
var Wl = "\\[\\]\\.:\\/",
  by = new RegExp("[" + Wl + "]", "g"),
  jl = "[^" + Wl + "]",
  My = "[^" + Wl.replace("\\.", "") + "]",
  wy = /((?:WC+[\/:])*)/.source.replace("WC", jl),
  Sy = /(WCOD+)?/.source.replace("WCOD", My),
  Ey = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", jl),
  Ty = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", jl),
  Ay = new RegExp("^" + wy + Sy + Ey + Ty + "$"),
  Ly = ["material", "materials", "bones"];

function _h(e, t, n) {
  var r = n || St.parseTrackName(t);
  this._targetGroup = e, this._bindings = e.subscribe_(t, r)
}
Object.assign(_h.prototype, {
  getValue: function(e, t) {
    this.bind();
    var n = this._targetGroup.nCachedObjects_,
      r = this._bindings[n];
    r !== void 0 && r.getValue(e, t)
  },
  setValue: function(e, t) {
    for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t)
  },
  bind: function() {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
  },
  unbind: function() {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
  }
});

function St(e, t, n) {
  this.path = t, this.parsedPath = n || St.parseTrackName(t), this.node = St.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
}
Object.assign(St, {
  Composite: _h,
  create: function(e, t, n) {
    return e && e.isAnimationObjectGroup ? new St.Composite(e, t, n) : new St(e, t, n)
  },
  sanitizeNodeName: function(e) {
    return e.replace(/\s/g, "_").replace(by, "")
  },
  parseTrackName: function(e) {
    var t = Ay.exec(e);
    if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    var n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6]
      },
      r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      var i = n.nodeName.substring(r + 1);
      Ly.indexOf(i) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = i)
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n
  },
  findNode: function(e, t) {
    if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      var n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n
    }
    if (e.children) {
      var r = function(a) {
          for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s.name === t || s.uuid === t) return s;
            var l = r(s.children);
            if (l) return l
          }
          return null
        },
        i = r(e.children);
      if (i) return i
    }
    return null
  }
});
Object.assign(St.prototype, {
  _getValue_unavailable: function() {},
  _setValue_unavailable: function() {},
  BindingType: {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  },
  Versioning: {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  },
  GetterByBindingType: [function(t, n) {
    t[n] = this.node[this.propertyName]
  }, function(t, n) {
    for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) t[n++] = r[i]
  }, function(t, n) {
    t[n] = this.resolvedProperty[this.propertyIndex]
  }, function(t, n) {
    this.resolvedProperty.toArray(t, n)
  }],
  SetterByBindingTypeAndVersioning: [
    [function(t, n) {
      this.targetObject[this.propertyName] = t[n]
    }, function(t, n) {
      this.targetObject[this.propertyName] = t[n], this.targetObject.needsUpdate = !0
    }, function(t, n) {
      this.targetObject[this.propertyName] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0
    }],
    [function(t, n) {
      for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) r[i] = t[n++]
    }, function(t, n) {
      for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) r[i] = t[n++];
      this.targetObject.needsUpdate = !0
    }, function(t, n) {
      for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i) r[i] = t[n++];
      this.targetObject.matrixWorldNeedsUpdate = !0
    }],
    [function(t, n) {
      this.resolvedProperty[this.propertyIndex] = t[n]
    }, function(t, n) {
      this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.needsUpdate = !0
    }, function(t, n) {
      this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0
    }],
    [function(t, n) {
      this.resolvedProperty.fromArray(t, n)
    }, function(t, n) {
      this.resolvedProperty.fromArray(t, n), this.targetObject.needsUpdate = !0
    }, function(t, n) {
      this.resolvedProperty.fromArray(t, n), this.targetObject.matrixWorldNeedsUpdate = !0
    }]
  ],
  getValue: function(t, n) {
    this.bind(), this.getValue(t, n)
  },
  setValue: function(t, n) {
    this.bind(), this.setValue(t, n)
  },
  bind: function() {
    var e = this.node,
      t = this.parsedPath,
      n = t.objectName,
      r = t.propertyName,
      i = t.propertyIndex;
    if (e || (e = St.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return
    }
    if (n) {
      var a = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return
          }
          e = e.skeleton.bones;
          for (var o = 0; o < e.length; o++)
            if (e[o].name === a) {
              a = o;
              break
            } break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return
          }
          e = e[n]
      }
      if (a !== void 0) {
        if (e[a] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return
        }
        e = e[a]
      }
    }
    var s = e[r];
    if (s === void 0) {
      var l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + r + " but it wasn't found.", e);
      return
    }
    var c = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? c = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (c = this.Versioning.MatrixWorldNeedsUpdate);
    var u = this.BindingType.Direct;
    if (i !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return
          }
          for (var o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
            if (e.geometry.morphAttributes.position[o].name === i) {
              i = o;
              break
            }
        } else {
          if (!e.geometry.morphTargets) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
            return
          }
          for (var o = 0; o < this.node.geometry.morphTargets.length; o++)
            if (e.geometry.morphTargets[o].name === i) {
              i = o;
              break
            }
        }
      }
      u = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i
    } else s.fromArray !== void 0 && s.toArray !== void 0 ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (u = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][c]
  },
  unbind: function() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
  }
});
Object.assign(St.prototype, {
  _getValue_unbound: St.prototype.getValue,
  _setValue_unbound: St.prototype.setValue
});

function Ry() {
  this.uuid = Te.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
  var e = {};
  this._indicesByUUID = e;
  for (var t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
  this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
  var r = this;
  this.stats = {
    objects: {
      get total() {
        return r._objects.length
      },
      get inUse() {
        return this.total - r.nCachedObjects_
      }
    },
    get bindingsPerObject() {
      return r._bindings.length
    }
  }
}
Object.assign(Ry.prototype, {
  isAnimationObjectGroup: !0,
  add: function() {
    for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, l = void 0, c = 0, u = arguments.length; c !== u; ++c) {
      var h = arguments[c],
        f = h.uuid,
        d = r[f];
      if (d === void 0) {
        d = t++, r[f] = d, e.push(h);
        for (var p = 0, v = s; p !== v; ++p) o[p].push(new St(h, i[p], a[p]))
      } else if (d < n) {
        l = e[d];
        var m = --n,
          g = e[m];
        r[g.uuid] = d, e[d] = g, r[f] = m, e[m] = h;
        for (var p = 0, v = s; p !== v; ++p) {
          var x = o[p],
            w = x[m],
            S = x[d];
          x[d] = w, S === void 0 && (S = new St(h, i[p], a[p])), x[m] = S
        }
      } else e[d] !== l && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
    }
    this.nCachedObjects_ = n
  },
  remove: function() {
    for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, a = 0, o = arguments.length; a !== o; ++a) {
      var s = arguments[a],
        l = s.uuid,
        c = n[l];
      if (c !== void 0 && c >= t) {
        var u = t++,
          h = e[u];
        n[h.uuid] = c, e[c] = h, n[l] = u, e[u] = s;
        for (var f = 0, d = i; f !== d; ++f) {
          var p = r[f],
            v = p[u],
            m = p[c];
          p[c] = v, p[u] = m
        }
      }
    }
    this.nCachedObjects_ = t
  },
  uncache: function() {
    for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
      var l = arguments[o],
        c = l.uuid,
        u = r[c];
      if (u !== void 0)
        if (delete r[c], u < n) {
          var h = --n,
            f = e[h],
            d = --t,
            p = e[d];
          r[f.uuid] = u, e[u] = f, r[p.uuid] = h, e[h] = p, e.pop();
          for (var v = 0, m = a; v !== m; ++v) {
            var g = i[v],
              x = g[h],
              w = g[d];
            g[u] = x, g[h] = w, g.pop()
          }
        } else {
          var d = --t,
            p = e[d];
          r[p.uuid] = u, e[u] = p, e.pop();
          for (var v = 0, m = a; v !== m; ++v) {
            var g = i[v];
            g[u] = g[d], g.pop()
          }
        }
    }
    this.nCachedObjects_ = n
  },
  subscribe_: function(e, t) {
    var n = this._bindingsIndicesByPath,
      r = n[e],
      i = this._bindings;
    if (r !== void 0) return i[r];
    var a = this._paths,
      o = this._parsedPaths,
      s = this._objects,
      l = s.length,
      c = this.nCachedObjects_,
      u = new Array(l);
    r = i.length, n[e] = r, a.push(e), o.push(t), i.push(u);
    for (var h = c, f = s.length; h !== f; ++h) {
      var d = s[h];
      u[h] = new St(d, e, t)
    }
    return u
  },
  unsubscribe_: function(e) {
    var t = this._bindingsIndicesByPath,
      n = t[e];
    if (n !== void 0) {
      var r = this._paths,
        i = this._parsedPaths,
        a = this._bindings,
        o = a.length - 1,
        s = a[o],
        l = e[o];
      t[l] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop()
    }
  }
});

function bh(e, t, n) {
  this._mixer = e, this._clip = t, this._localRoot = n || null;
  for (var r = t.tracks, i = r.length, a = new Array(i), o = {
      endingStart: qr,
      endingEnd: qr
    }, s = 0; s !== i; ++s) {
    var l = r[s].createInterpolant(null);
    a[s] = l, l.settings = o
  }
  this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = wd, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
}
Object.assign(bh.prototype, {
  play: function() {
    return this._mixer._activateAction(this), this
  },
  stop: function() {
    return this._mixer._deactivateAction(this), this.reset()
  },
  reset: function() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
  },
  isRunning: function() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this)
  },
  isScheduled: function() {
    return this._mixer._isActiveAction(this)
  },
  startAt: function(e) {
    return this._startTime = e, this
  },
  setLoop: function(e, t) {
    return this.loop = e, this.repetitions = t, this
  },
  setEffectiveWeight: function(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
  },
  getEffectiveWeight: function() {
    return this._effectiveWeight
  },
  fadeIn: function(e) {
    return this._scheduleFading(e, 0, 1)
  },
  fadeOut: function(e) {
    return this._scheduleFading(e, 1, 0)
  },
  crossFadeFrom: function(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      var r = this._clip.duration,
        i = e._clip.duration,
        a = i / r,
        o = r / i;
      e.warp(1, a, t), this.warp(o, 1, t)
    }
    return this
  },
  crossFadeTo: function(e, t, n) {
    return e.crossFadeFrom(this, t, n)
  },
  stopFading: function() {
    var e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
  },
  setEffectiveTimeScale: function(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
  },
  getEffectiveTimeScale: function() {
    return this._effectiveTimeScale
  },
  setDuration: function(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping()
  },
  syncWith: function(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
  },
  halt: function(e) {
    return this.warp(this._effectiveTimeScale, 0, e)
  },
  warp: function(e, t, n) {
    var r = this._mixer,
      i = r.time,
      a = this._timeScaleInterpolant,
      o = this.timeScale;
    a === null && (a = r._lendControlInterpolant(), this._timeScaleInterpolant = a);
    var s = a.parameterPositions,
      l = a.sampleValues;
    return s[0] = i, s[1] = i + n, l[0] = e / o, l[1] = t / o, this
  },
  stopWarping: function() {
    var e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
  },
  getMixer: function() {
    return this._mixer
  },
  getClip: function() {
    return this._clip
  },
  getRoot: function() {
    return this._localRoot || this._mixer._root
  },
  _update: function(e, t, n, r) {
    if (!this.enabled) {
      this._updateWeight(e);
      return
    }
    var i = this._startTime;
    if (i !== null) {
      var a = (e - i) * n;
      if (a < 0 || n === 0) return;
      this._startTime = null, t = n * a
    }
    t *= this._updateTimeScale(e);
    var o = this._updateTime(t),
      s = this._updateWeight(e);
    if (s > 0)
      for (var l = this._interpolants, c = this._propertyBindings, u = 0, h = l.length; u !== h; ++u) l[u].evaluate(o), c[u].accumulate(r, s)
  },
  _updateWeight: function(e) {
    var t = 0;
    if (this.enabled) {
      t = this.weight;
      var n = this._weightInterpolant;
      if (n !== null) {
        var r = n.evaluate(e)[0];
        t *= r, e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1))
      }
    }
    return this._effectiveWeight = t, t
  },
  _updateTimeScale: function(e) {
    var t = 0;
    if (!this.paused) {
      t = this.timeScale;
      var n = this._timeScaleInterpolant;
      if (n !== null) {
        var r = n.evaluate(e)[0];
        t *= r, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t)
      }
    }
    return this._effectiveTimeScale = t, t
  },
  _updateTime: function(e) {
    var t = this.time + e,
      n = this._clip.duration,
      r = this.loop,
      i = this._loopCount,
      a = r === Sd;
    if (e === 0) return i === -1 ? t : a && (i & 1) === 1 ? n - t : t;
    if (r === Md) {
      i === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (t >= n) t = n;
        else if (t < 0) t = 0;
        else {
          this.time = t;
          break e
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
        this.time = t,
        this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        })
      }
    } else {
      if (i === -1 && (e >= 0 ? (i = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), t >= n || t < 0) {
        var o = Math.floor(t / n);
        t -= n * o, i += Math.abs(o);
        var s = this.repetitions - i;
        if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this.time = t, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e > 0 ? 1 : -1
        });
        else {
          if (s === 1) {
            var l = e < 0;
            this._setEndings(l, !l, a)
          } else this._setEndings(!1, !1, a);
          this._loopCount = i, this.time = t, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          })
        }
      } else this.time = t;
      if (a && (i & 1) === 1) return n - t
    }
    return t
  },
  _setEndings: function(e, t, n) {
    var r = this._interpolantSettings;
    n ? (r.endingStart = Gr, r.endingEnd = Gr) : (e ? r.endingStart = this.zeroSlopeAtStart ? Gr : qr : r.endingStart = po, t ? r.endingEnd = this.zeroSlopeAtEnd ? Gr : qr : r.endingEnd = po)
  },
  _scheduleFading: function(e, t, n) {
    var r = this._mixer,
      i = r.time,
      a = this._weightInterpolant;
    a === null && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
    var o = a.parameterPositions,
      s = a.sampleValues;
    return o[0] = i, s[0] = t, o[1] = i + e, s[1] = n, this
  }
});

function mu(e) {
  this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
}
mu.prototype = Object.assign(Object.create(Qt.prototype), {
  constructor: mu,
  _bindAction: function(e, t) {
    var n = e._localRoot || this._root,
      r = e._clip.tracks,
      i = r.length,
      a = e._propertyBindings,
      o = e._interpolants,
      s = n.uuid,
      l = this._bindingsByRootAndName,
      c = l[s];
    c === void 0 && (c = {}, l[s] = c);
    for (var u = 0; u !== i; ++u) {
      var h = r[u],
        f = h.name,
        d = c[f];
      if (d !== void 0) a[u] = d;
      else {
        if (d = a[u], d !== void 0) {
          d._cacheIndex === null && (++d.referenceCount, this._addInactiveBinding(d, s, f));
          continue
        }
        var p = t && t._propertyBindings[u].binding.parsedPath;
        d = new xh(St.create(n, f, p), h.ValueTypeName, h.getValueSize()), ++d.referenceCount, this._addInactiveBinding(d, s, f), a[u] = d
      }
      o[u].resultBuffer = d.buffer
    }
  },
  _activateAction: function(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        var t = (e._localRoot || this._root).uuid,
          n = e._clip.uuid,
          r = this._actionsByClip[n];
        this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t)
      }
      for (var i = e._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
        var s = i[a];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState())
      }
      this._lendAction(e)
    }
  },
  _deactivateAction: function(e) {
    if (this._isActiveAction(e)) {
      for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
        var i = t[n];
        --i.useCount === 0 && (i.restoreOriginalState(), this._takeBackBinding(i))
      }
      this._takeBackAction(e)
    }
  },
  _initMemoryManager: function() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    var e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length
        },
        get inUse() {
          return e._nActiveActions
        }
      },
      bindings: {
        get total() {
          return e._bindings.length
        },
        get inUse() {
          return e._nActiveBindings
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length
        },
        get inUse() {
          return e._nActiveControlInterpolants
        }
      }
    }
  },
  _isActiveAction: function(e) {
    var t = e._cacheIndex;
    return t !== null && t < this._nActiveActions
  },
  _addInactiveAction: function(e, t, n) {
    var r = this._actions,
      i = this._actionsByClip,
      a = i[t];
    if (a === void 0) a = {
      knownActions: [e],
      actionByRoot: {}
    }, e._byClipCacheIndex = 0, i[t] = a;
    else {
      var o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e)
    }
    e._cacheIndex = r.length, r.push(e), a.actionByRoot[n] = e
  },
  _removeInactiveAction: function(e) {
    var t = this._actions,
      n = t[t.length - 1],
      r = e._cacheIndex;
    n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
    var i = e._clip.uuid,
      a = this._actionsByClip,
      o = a[i],
      s = o.knownActions,
      l = s[s.length - 1],
      c = e._byClipCacheIndex;
    l._byClipCacheIndex = c, s[c] = l, s.pop(), e._byClipCacheIndex = null;
    var u = o.actionByRoot,
      h = (e._localRoot || this._root).uuid;
    delete u[h], s.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e)
  },
  _removeInactiveBindingsForAction: function(e) {
    for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
      var i = t[n];
      --i.referenceCount === 0 && this._removeInactiveBinding(i)
    }
  },
  _lendAction: function(e) {
    var t = this._actions,
      n = e._cacheIndex,
      r = this._nActiveActions++,
      i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
  },
  _takeBackAction: function(e) {
    var t = this._actions,
      n = e._cacheIndex,
      r = --this._nActiveActions,
      i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
  },
  _addInactiveBinding: function(e, t, n) {
    var r = this._bindingsByRootAndName,
      i = r[t],
      a = this._bindings;
    i === void 0 && (i = {}, r[t] = i), i[n] = e, e._cacheIndex = a.length, a.push(e)
  },
  _removeInactiveBinding: function(e) {
    var t = this._bindings,
      n = e.binding,
      r = n.rootNode.uuid,
      i = n.path,
      a = this._bindingsByRootAndName,
      o = a[r],
      s = t[t.length - 1],
      l = e._cacheIndex;
    s._cacheIndex = l, t[l] = s, t.pop(), delete o[i], Object.keys(o).length === 0 && delete a[r]
  },
  _lendBinding: function(e) {
    var t = this._bindings,
      n = e._cacheIndex,
      r = this._nActiveBindings++,
      i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
  },
  _takeBackBinding: function(e) {
    var t = this._bindings,
      n = e._cacheIndex,
      r = --this._nActiveBindings,
      i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
  },
  _lendControlInterpolant: function() {
    var e = this._controlInterpolants,
      t = this._nActiveControlInterpolants++,
      n = e[t];
    return n === void 0 && (n = new zo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n
  },
  _takeBackControlInterpolant: function(e) {
    var t = this._controlInterpolants,
      n = e.__cacheIndex,
      r = --this._nActiveControlInterpolants,
      i = t[r];
    e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i
  },
  _controlInterpolantsResultBuffer: new Float32Array(1),
  clipAction: function(e, t) {
    var n = t || this._root,
      r = n.uuid,
      i = typeof e == "string" ? Jt.findByName(n, e) : e,
      a = i !== null ? i.uuid : e,
      o = this._actionsByClip[a],
      s = null;
    if (o !== void 0) {
      var l = o.actionByRoot[r];
      if (l !== void 0) return l;
      s = o.knownActions[0], i === null && (i = s._clip)
    }
    if (i === null) return null;
    var c = new bh(this, i, t);
    return this._bindAction(c, s), this._addInactiveAction(c, a, r), c
  },
  existingAction: function(e, t) {
    var n = t || this._root,
      r = n.uuid,
      i = typeof e == "string" ? Jt.findByName(n, e) : e,
      a = i ? i.uuid : e,
      o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[r] || null
  },
  stopAllAction: function() {
    var e = this._actions,
      t = this._nActiveActions,
      n = this._bindings,
      r = this._nActiveBindings;
    this._nActiveActions = 0, this._nActiveBindings = 0;
    for (var i = 0; i !== t; ++i) e[i].reset();
    for (var i = 0; i !== r; ++i) n[i].useCount = 0;
    return this
  },
  update: function(e) {
    e *= this.timeScale;
    for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
      var s = t[o];
      s._update(r, e, i, a)
    }
    for (var l = this._bindings, c = this._nActiveBindings, o = 0; o !== c; ++o) l[o].apply(a);
    return this
  },
  setTime: function(e) {
    this.time = 0;
    for (var t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e)
  },
  getRoot: function() {
    return this._root
  },
  uncacheClip: function(e) {
    var t = this._actions,
      n = e.uuid,
      r = this._actionsByClip,
      i = r[n];
    if (i !== void 0) {
      for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
        var l = a[o];
        this._deactivateAction(l);
        var c = l._cacheIndex,
          u = t[t.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = c, t[c] = u, t.pop(), this._removeInactiveBindingsForAction(l)
      }
      delete r[n]
    }
  },
  uncacheRoot: function(e) {
    var t = e.uuid,
      n = this._actionsByClip;
    for (var r in n) {
      var i = n[r].actionByRoot,
        a = i[t];
      a !== void 0 && (this._deactivateAction(a), this._removeInactiveAction(a))
    }
    var o = this._bindingsByRootAndName,
      s = o[t];
    if (s !== void 0)
      for (var l in s) {
        var c = s[l];
        c.restoreOriginalState(), this._removeInactiveBinding(c)
      }
  },
  uncacheAction: function(e, t) {
    var n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n))
  }
});

function wl(e) {
  typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
}
wl.prototype.clone = function() {
  return new wl(this.value.clone === void 0 ? this.value : this.value.clone())
};

function gu(e, t, n) {
  Wn.call(this, e, t), this.meshPerAttribute = n || 1
}
gu.prototype = Object.assign(Object.create(Wn.prototype), {
  constructor: gu,
  isInstancedInterleavedBuffer: !0,
  copy: function(e) {
    return Wn.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
  }
});

function Mh(e, t, n, r) {
  this.ray = new vi(e, t), this.near = n || 0, this.far = r || 1 / 0, this.camera = null, this.layers = new Gl, this.params = {
    Mesh: {},
    Line: {
      threshold: 1
    },
    LOD: {},
    Points: {
      threshold: 1
    },
    Sprite: {}
  }, Object.defineProperties(this.params, {
    PointCloud: {
      get: function() {
        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
      }
    }
  })
}

function yu(e, t) {
  return e.distance - t.distance
}

function Sl(e, t, n, r) {
  if (e.layers.test(t.layers) && e.raycast(t, n), r === !0)
    for (var i = e.children, a = 0, o = i.length; a < o; a++) Sl(i[a], t, n, !0)
}
Object.assign(Mh.prototype, {
  set: function(e, t) {
    this.ray.set(e, t)
  },
  setFromCamera: function(e, t) {
    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type.")
  },
  intersectObject: function(e, t, n) {
    var r = n || [];
    return Sl(e, this, r, t), r.sort(yu), r
  },
  intersectObjects: function(e, t, n) {
    var r = n || [];
    if (Array.isArray(e) === !1) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), r;
    for (var i = 0, a = e.length; i < a; i++) Sl(e[i], this, r, t);
    return r.sort(yu), r
  }
});

function El(e, t, n) {
  return this.radius = e !== void 0 ? e : 1, this.phi = t !== void 0 ? t : 0, this.theta = n !== void 0 ? n : 0, this
}
Object.assign(El.prototype, {
  set: function(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
  },
  makeSafe: function() {
    var e = 1e-6;
    return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this
  },
  setFromVector3: function(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z)
  },
  setFromCartesianCoords: function(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Te.clamp(t / this.radius, -1, 1))), this
  }
});

function Cy(e, t, n) {
  return this.radius = e !== void 0 ? e : 1, this.theta = t !== void 0 ? t : 0, this.y = n !== void 0 ? n : 0, this
}
Object.assign(Cy.prototype, {
  set: function(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this
  },
  setFromVector3: function(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z)
  },
  setFromCartesianCoords: function(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this
  }
});
var xu = new H;

function wh(e, t) {
  this.min = e !== void 0 ? e : new H(1 / 0, 1 / 0), this.max = t !== void 0 ? t : new H(-1 / 0, -1 / 0)
}
Object.assign(wh.prototype, {
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this
  },
  setFromCenterAndSize: function(e, t) {
    var n = xu.copy(t).multiplyScalar(.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new H), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getSize() target is now required"), e = new H), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new H), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new H), t.copy(e).clamp(this.min, this.max)
  },
  distanceToPoint: function(e) {
    var t = xu.copy(e).clamp(this.min, this.max);
    return t.sub(e).length()
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max)
  }
});
var _u = new M,
  Qa = new M;

function Sh(e, t) {
  this.start = e !== void 0 ? e : new M, this.end = t !== void 0 ? t : new M
}
Object.assign(Sh.prototype, {
  set: function(e, t) {
    return this.start.copy(e), this.end.copy(t), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  },
  copy: function(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new M), e.addVectors(this.start, this.end).multiplyScalar(.5)
  },
  delta: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .delta() target is now required"), e = new M), e.subVectors(this.end, this.start)
  },
  distanceSq: function() {
    return this.start.distanceToSquared(this.end)
  },
  distance: function() {
    return this.start.distanceTo(this.end)
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Line3: .at() target is now required"), t = new M), this.delta(t).multiplyScalar(e).add(this.start)
  },
  closestPointToPointParameter: function(e, t) {
    _u.subVectors(e, this.start), Qa.subVectors(this.end, this.start);
    var n = Qa.dot(Qa),
      r = Qa.dot(_u),
      i = r / n;
    return t && (i = Te.clamp(i, 0, 1)), i
  },
  closestPointToPoint: function(e, t, n) {
    var r = this.closestPointToPointParameter(e, t);
    return n === void 0 && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new M), this.delta(n).multiplyScalar(r).add(this.start)
  },
  applyMatrix4: function(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
  },
  equals: function(e) {
    return e.start.equals(this.start) && e.end.equals(this.end)
  }
});

function Vo(e) {
  Q.call(this), this.material = e, this.render = function() {}
}
Vo.prototype = Object.create(Q.prototype);
Vo.prototype.constructor = Vo;
Vo.prototype.isImmediateRenderObject = !0;
var bu = new M;

function ha(e, t) {
  Q.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
  for (var n = new se, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, a = 1, o = 32; i < o; i++, a++) {
    var s = i / o * Math.PI * 2,
      l = a / o * Math.PI * 2;
    r.push(Math.cos(s), Math.sin(s), 1, Math.cos(l), Math.sin(l), 1)
  }
  n.setAttribute("position", new ne(r, 3));
  var c = new at({
    fog: !1,
    toneMapped: !1
  });
  this.cone = new ct(n, c), this.add(this.cone), this.update()
}
ha.prototype = Object.create(Q.prototype);
ha.prototype.constructor = ha;
ha.prototype.dispose = function() {
  this.cone.geometry.dispose(), this.cone.material.dispose()
};
ha.prototype.update = function() {
  this.light.updateMatrixWorld();
  var e = this.light.distance ? this.light.distance : 1e3,
    t = e * Math.tan(this.light.angle);
  this.cone.scale.set(t, t, e), bu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(bu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
};
var Pn = new M,
  Ka = new De,
  Cs = new De;

function Eh(e) {
  var t = [];
  e && e.isBone && t.push(e);
  for (var n = 0; n < e.children.length; n++) t.push.apply(t, Eh(e.children[n]));
  return t
}

function fi(e) {
  for (var t = Eh(e), n = new se, r = [], i = [], a = new oe(0, 0, 1), o = new oe(0, 1, 0), s = 0; s < t.length; s++) {
    var l = t[s];
    l.parent && l.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b))
  }
  n.setAttribute("position", new ne(r, 3)), n.setAttribute("color", new ne(i, 3));
  var c = new at({
    vertexColors: !0,
    depthTest: !1,
    depthWrite: !1,
    toneMapped: !1,
    transparent: !0
  });
  ct.call(this, n, c), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
}
fi.prototype = Object.create(ct.prototype);
fi.prototype.constructor = fi;
fi.prototype.isSkeletonHelper = !0;
fi.prototype.updateMatrixWorld = function(e) {
  var t = this.bones,
    n = this.geometry,
    r = n.getAttribute("position");
  Cs.getInverse(this.root.matrixWorld);
  for (var i = 0, a = 0; i < t.length; i++) {
    var o = t[i];
    o.parent && o.parent.isBone && (Ka.multiplyMatrices(Cs, o.matrixWorld), Pn.setFromMatrixPosition(Ka), r.setXYZ(a, Pn.x, Pn.y, Pn.z), Ka.multiplyMatrices(Cs, o.parent.matrixWorld), Pn.setFromMatrixPosition(Ka), r.setXYZ(a + 1, Pn.x, Pn.y, Pn.z), a += 2)
  }
  n.getAttribute("position").needsUpdate = !0, Q.prototype.updateMatrixWorld.call(this, e)
};

function fa(e, t, n) {
  this.light = e, this.light.updateMatrixWorld(), this.color = n;
  var r = new vr(t, 4, 2),
    i = new Ht({
      wireframe: !0,
      fog: !1,
      toneMapped: !1
    });
  et.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
}
fa.prototype = Object.create(et.prototype);
fa.prototype.constructor = fa;
fa.prototype.dispose = function() {
  this.geometry.dispose(), this.material.dispose()
};
fa.prototype.update = function() {
  this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
};
var Py = new M,
  Mu = new oe,
  wu = new oe;

function da(e, t, n) {
  Q.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
  var r = new Qr(t);
  r.rotateY(Math.PI * .5), this.material = new Ht({
    wireframe: !0,
    fog: !1,
    toneMapped: !1
  }), this.color === void 0 && (this.material.vertexColors = !0);
  var i = r.getAttribute("position"),
    a = new Float32Array(i.count * 3);
  r.setAttribute("color", new we(a, 3)), this.add(new et(r, this.material)), this.update()
}
da.prototype = Object.create(Q.prototype);
da.prototype.constructor = da;
da.prototype.dispose = function() {
  this.children[0].geometry.dispose(), this.children[0].material.dispose()
};
da.prototype.update = function() {
  var e = this.children[0];
  if (this.color !== void 0) this.material.color.set(this.color);
  else {
    var t = e.geometry.getAttribute("color");
    Mu.copy(this.light.color), wu.copy(this.light.groundColor);
    for (var n = 0, r = t.count; n < r; n++) {
      var i = n < r / 2 ? Mu : wu;
      t.setXYZ(n, i.r, i.g, i.b)
    }
    t.needsUpdate = !0
  }
  e.lookAt(Py.setFromMatrixPosition(this.light.matrixWorld).negate())
};

function Tl(e, t, n, r) {
  e = e || 10, t = t || 10, n = new oe(n !== void 0 ? n : 4473924), r = new oe(r !== void 0 ? r : 8947848);
  for (var i = t / 2, a = e / t, o = e / 2, s = [], l = [], c = 0, u = 0, h = -o; c <= t; c++, h += a) {
    s.push(-o, 0, h, o, 0, h), s.push(h, 0, -o, h, 0, o);
    var f = c === i ? n : r;
    f.toArray(l, u), u += 3, f.toArray(l, u), u += 3, f.toArray(l, u), u += 3, f.toArray(l, u), u += 3
  }
  var d = new se;
  d.setAttribute("position", new ne(s, 3)), d.setAttribute("color", new ne(l, 3));
  var p = new at({
    vertexColors: !0,
    toneMapped: !1
  });
  ct.call(this, d, p)
}
Tl.prototype = Object.assign(Object.create(ct.prototype), {
  constructor: Tl,
  copy: function(e) {
    return ct.prototype.copy.call(this, e), this.geometry.copy(e.geometry), this.material.copy(e.material), this
  },
  clone: function() {
    return new this.constructor().copy(this)
  }
});

function Al(e, t, n, r, i, a) {
  e = e || 10, t = t || 16, n = n || 8, r = r || 64, i = new oe(i !== void 0 ? i : 4473924), a = new oe(a !== void 0 ? a : 8947848);
  var o = [],
    s = [],
    l, c, u, h, f, d, p;
  for (h = 0; h <= t; h++) u = h / t * (Math.PI * 2), l = Math.sin(u) * e, c = Math.cos(u) * e, o.push(0, 0, 0), o.push(l, 0, c), p = h & 1 ? i : a, s.push(p.r, p.g, p.b), s.push(p.r, p.g, p.b);
  for (h = 0; h <= n; h++)
    for (p = h & 1 ? i : a, d = e - e / n * h, f = 0; f < r; f++) u = f / r * (Math.PI * 2), l = Math.sin(u) * d, c = Math.cos(u) * d, o.push(l, 0, c), s.push(p.r, p.g, p.b), u = (f + 1) / r * (Math.PI * 2), l = Math.sin(u) * d, c = Math.cos(u) * d, o.push(l, 0, c), s.push(p.r, p.g, p.b);
  var v = new se;
  v.setAttribute("position", new ne(o, 3)), v.setAttribute("color", new ne(s, 3));
  var m = new at({
    vertexColors: !0,
    toneMapped: !1
  });
  ct.call(this, v, m)
}
Al.prototype = Object.create(ct.prototype);
Al.prototype.constructor = Al;
var Su = new M,
  eo = new M,
  Eu = new M;

function pa(e, t, n) {
  Q.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, t === void 0 && (t = 1);
  var r = new se;
  r.setAttribute("position", new ne([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
  var i = new at({
    fog: !1,
    toneMapped: !1
  });
  this.lightPlane = new kt(r, i), this.add(this.lightPlane), r = new se, r.setAttribute("position", new ne([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new kt(r, i), this.add(this.targetLine), this.update()
}
pa.prototype = Object.create(Q.prototype);
pa.prototype.constructor = pa;
pa.prototype.dispose = function() {
  this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
};
pa.prototype.update = function() {
  Su.setFromMatrixPosition(this.light.matrixWorld), eo.setFromMatrixPosition(this.light.target.matrixWorld), Eu.subVectors(eo, Su), this.lightPlane.lookAt(eo), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(eo), this.targetLine.scale.z = Eu.length()
};
var to = new M,
  tt = new bn;

function ko(e) {
  var t = new se,
    n = new at({
      color: 16777215,
      vertexColors: !0,
      toneMapped: !1
    }),
    r = [],
    i = [],
    a = {},
    o = new oe(16755200),
    s = new oe(16711680),
    l = new oe(43775),
    c = new oe(16777215),
    u = new oe(3355443);
  h("n1", "n2", o), h("n2", "n4", o), h("n4", "n3", o), h("n3", "n1", o), h("f1", "f2", o), h("f2", "f4", o), h("f4", "f3", o), h("f3", "f1", o), h("n1", "f1", o), h("n2", "f2", o), h("n3", "f3", o), h("n4", "f4", o), h("p", "n1", s), h("p", "n2", s), h("p", "n3", s), h("p", "n4", s), h("u1", "u2", l), h("u2", "u3", l), h("u3", "u1", l), h("c", "t", c), h("p", "c", u), h("cn1", "cn2", u), h("cn3", "cn4", u), h("cf1", "cf2", u), h("cf3", "cf4", u);

  function h(d, p, v) {
    f(d, v), f(p, v)
  }

  function f(d, p) {
    r.push(0, 0, 0), i.push(p.r, p.g, p.b), a[d] === void 0 && (a[d] = []), a[d].push(r.length / 3 - 1)
  }
  t.setAttribute("position", new ne(r, 3)), t.setAttribute("color", new ne(i, 3)), ct.call(this, t, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
}
ko.prototype = Object.create(ct.prototype);
ko.prototype.constructor = ko;
ko.prototype.update = function() {
  var e = this.geometry,
    t = this.pointMap,
    n = 1,
    r = 1;
  tt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), rt("c", t, e, tt, 0, 0, -1), rt("t", t, e, tt, 0, 0, 1), rt("n1", t, e, tt, -n, -r, -1), rt("n2", t, e, tt, n, -r, -1), rt("n3", t, e, tt, -n, r, -1), rt("n4", t, e, tt, n, r, -1), rt("f1", t, e, tt, -n, -r, 1), rt("f2", t, e, tt, n, -r, 1), rt("f3", t, e, tt, -n, r, 1), rt("f4", t, e, tt, n, r, 1), rt("u1", t, e, tt, n * .7, r * 1.1, -1), rt("u2", t, e, tt, -n * .7, r * 1.1, -1), rt("u3", t, e, tt, 0, r * 2, -1), rt("cf1", t, e, tt, -n, 0, 1), rt("cf2", t, e, tt, n, 0, 1), rt("cf3", t, e, tt, 0, -r, 1), rt("cf4", t, e, tt, 0, r, 1), rt("cn1", t, e, tt, -n, 0, -1), rt("cn2", t, e, tt, n, 0, -1), rt("cn3", t, e, tt, 0, -r, -1), rt("cn4", t, e, tt, 0, r, -1), e.getAttribute("position").needsUpdate = !0
};

function rt(e, t, n, r, i, a, o) {
  to.set(i, a, o).unproject(r);
  var s = t[e];
  if (s !== void 0)
    for (var l = n.getAttribute("position"), c = 0, u = s.length; c < u; c++) l.setXYZ(s[c], to.x, to.y, to.z)
}
var no = new dn;

function gr(e, t) {
  this.object = e, t === void 0 && (t = 16776960);
  var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
    r = new Float32Array(24),
    i = new se;
  i.setIndex(new we(n, 1)), i.setAttribute("position", new we(r, 3)), ct.call(this, i, new at({
    color: t,
    toneMapped: !1
  })), this.matrixAutoUpdate = !1, this.update()
}
gr.prototype = Object.create(ct.prototype);
gr.prototype.constructor = gr;
gr.prototype.update = function(e) {
  if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && no.setFromObject(this.object), !no.isEmpty()) {
    var t = no.min,
      n = no.max,
      r = this.geometry.attributes.position,
      i = r.array;
    i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = t.x, i[4] = n.y, i[5] = n.z, i[6] = t.x, i[7] = t.y, i[8] = n.z, i[9] = n.x, i[10] = t.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = t.z, i[15] = t.x, i[16] = n.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = n.x, i[22] = t.y, i[23] = t.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
  }
};
gr.prototype.setFromObject = function(e) {
  return this.object = e, this.update(), this
};
gr.prototype.copy = function(e) {
  return ct.prototype.copy.call(this, e), this.object = e.object, this
};
gr.prototype.clone = function() {
  return new this.constructor().copy(this)
};

function Wo(e, t) {
  this.type = "Box3Helper", this.box = e, t = t || 16776960;
  var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
    r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],
    i = new se;
  i.setIndex(new we(n, 1)), i.setAttribute("position", new ne(r, 3)), ct.call(this, i, new at({
    color: t,
    toneMapped: !1
  })), this.geometry.computeBoundingSphere()
}
Wo.prototype = Object.create(ct.prototype);
Wo.prototype.constructor = Wo;
Wo.prototype.updateMatrixWorld = function(e) {
  var t = this.box;
  t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), Q.prototype.updateMatrixWorld.call(this, e))
};

function jo(e, t, n) {
  this.type = "PlaneHelper", this.plane = e, this.size = t === void 0 ? 1 : t;
  var r = n !== void 0 ? n : 16776960,
    i = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
    a = new se;
  a.setAttribute("position", new ne(i, 3)), a.computeBoundingSphere(), kt.call(this, a, new at({
    color: r,
    toneMapped: !1
  }));
  var o = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
    s = new se;
  s.setAttribute("position", new ne(o, 3)), s.computeBoundingSphere(), this.add(new et(s, new Ht({
    color: r,
    opacity: .2,
    transparent: !0,
    depthWrite: !1,
    toneMapped: !1
  })))
}
jo.prototype = Object.create(kt.prototype);
jo.prototype.constructor = jo;
jo.prototype.updateMatrixWorld = function(e) {
  var t = -this.plane.constant;
  Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.children[0].material.side = t < 0 ? ht : ga, this.lookAt(this.plane.normal), Q.prototype.updateMatrixWorld.call(this, e)
};
var Tu = new M,
  ro, Ps;

function qn(e, t, n, r, i, a) {
  Q.call(this), e === void 0 && (e = new M(0, 0, 1)), t === void 0 && (t = new M(0, 0, 0)), n === void 0 && (n = 1), r === void 0 && (r = 16776960), i === void 0 && (i = .2 * n), a === void 0 && (a = .2 * i), ro === void 0 && (ro = new se, ro.setAttribute("position", new ne([0, 0, 0, 0, 1, 0], 3)), Ps = new jn(0, .5, 1, 5, 1), Ps.translate(0, -.5, 0)), this.position.copy(t), this.line = new kt(ro, new at({
    color: r,
    toneMapped: !1
  })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new et(Ps, new Ht({
    color: r,
    toneMapped: !1
  })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, a)
}
qn.prototype = Object.create(Q.prototype);
qn.prototype.constructor = qn;
qn.prototype.setDirection = function(e) {
  if (e.y > .99999) this.quaternion.set(0, 0, 0, 1);
  else if (e.y < -.99999) this.quaternion.set(1, 0, 0, 0);
  else {
    Tu.set(e.z, 0, -e.x).normalize();
    var t = Math.acos(e.y);
    this.quaternion.setFromAxisAngle(Tu, t)
  }
};
qn.prototype.setLength = function(e, t, n) {
  t === void 0 && (t = .2 * e), n === void 0 && (n = .2 * t), this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix()
};
qn.prototype.setColor = function(e) {
  this.line.material.color.set(e), this.cone.material.color.set(e)
};
qn.prototype.copy = function(e) {
  return Q.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this
};
qn.prototype.clone = function() {
  return new this.constructor().copy(this)
};

function Ll(e) {
  e = e || 1;
  var t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
    n = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],
    r = new se;
  r.setAttribute("position", new ne(t, 3)), r.setAttribute("color", new ne(n, 3));
  var i = new at({
    vertexColors: !0,
    toneMapped: !1
  });
  ct.call(this, r, i)
}
Ll.prototype = Object.create(ct.prototype);
Ll.prototype.constructor = Ll;
var Xr = 4,
  Vn = 8,
  an = Math.pow(2, Vn),
  Th = [.125, .215, .35, .446, .526, .582],
  Ah = Vn - Xr + 1 + Th.length,
  zr = 20,
  fn = {
    [Ot]: 0,
    [Ul]: 1,
    [zl]: 2,
    [ku]: 3,
    [Wu]: 4,
    [ju]: 5,
    [Vu]: 6
  },
  Xl = new ca,
  Xo = Ny(zr),
  Nn = null,
  Fn = null,
  {
    _lodPlanes: va,
    _sizeLods: Au,
    _sigmas: io
  } = Dy(),
  qo = null,
  qe = null,
  Rl = null,
  sr = (1 + Math.sqrt(5)) / 2,
  Br = 1 / sr,
  Lu = [new M(1, 1, 1), new M(-1, 1, 1), new M(1, 1, -1), new M(-1, 1, -1), new M(0, sr, Br), new M(0, sr, -Br), new M(Br, 0, sr), new M(-Br, 0, sr), new M(sr, Br, 0), new M(-sr, Br, 0)];

function Ru(e) {
  qe = e, Cl(Xo)
}
Ru.prototype = {
  constructor: Ru,
  fromScene: function(e, t = 0, n = .1, r = 100) {
    Rl = qe.getRenderTarget();
    var i = Cu();
    return Oy(e, n, r, i), t > 0 && Lh(i, 0, 0, t), Ou(i), Pu(i), i
  },
  fromEquirectangular: function(e) {
    return e.magFilter = lt, e.minFilter = lt, e.generateMipmaps = !1, this.fromCubemap(e)
  },
  fromCubemap: function(e) {
    Rl = qe.getRenderTarget();
    var t = Cu(e);
    return Iy(e, t), Ou(t), Pu(t), t
  },
  compileCubemapShader: function() {
    Fn == null && (Fn = Ch(), Cl(Fn))
  },
  compileEquirectangularShader: function() {
    Nn == null && (Nn = Rh(), Cl(Nn))
  },
  dispose: function() {
    Xo.dispose(), Fn?.dispose(), Nn?.dispose();
    for (var e = 0; e < va.length; e++) va[e].dispose()
  }
};

function Dy() {
  for (var e = [], t = [], n = [], r = Vn, i = 0; i < Ah; i++) {
    var a = Math.pow(2, r);
    t.push(a);
    var o = 1 / a;
    i > Vn - Xr ? o = Th[i - Vn + Xr - 1] : i == 0 && (o = 0), n.push(o);
    for (var s = 1 / (a - 1), l = -s / 2, c = 1 + s / 2, u = [l, l, c, l, c, c, l, l, c, c, l, c], h = 6, f = 6, d = 3, p = 2, v = 1, m = new Float32Array(d * f * h), g = new Float32Array(p * f * h), x = new Float32Array(v * f * h), w = 0; w < h; w++) {
      var S = w % 3 * 2 / 3 - 1,
        b = w > 2 ? 0 : -1,
        T = [S, b, 0, S + 2 / 3, b, 0, S + 2 / 3, b + 1, 0, S, b, 0, S + 2 / 3, b + 1, 0, S, b + 1, 0];
      m.set(T, d * f * w), g.set(u, p * f * w);
      var D = [w, w, w, w, w, w];
      x.set(D, v * f * w)
    }
    var N = new se;
    N.setAttribute("position", new we(m, d)), N.setAttribute("uv", new we(g, p)), N.setAttribute("faceIndex", new we(x, v)), e.push(N), r > Xr && r--
  }
  return {
    _lodPlanes: e,
    _sizeLods: t,
    _sigmas: n
  }
}

function Cu(e) {
  var t = {
      magFilter: lt,
      minFilter: lt,
      generateMipmaps: !1,
      type: e ? e.type : Jo,
      format: e ? e.format : zf,
      encoding: e ? e.encoding : zl,
      depthBuffer: !1,
      stencilBuffer: !1
    },
    n = Du(t);
  return n.depthBuffer = !e, qo = Du(t), n
}

function Pu(e) {
  qo.dispose(), qe.setRenderTarget(Rl), e.scissorTest = !1, e.setSize(e.width, e.height)
}

function Oy(e, t, n, r) {
  var i = 90,
    a = 1,
    o = new st(i, a, t, n),
    s = [1, 1, 1, 1, -1, 1],
    l = [1, 1, -1, -1, -1, 1],
    c = qe.outputEncoding,
    u = qe.toneMapping,
    h = qe.toneMappingExposure,
    f = qe.getClearColor(),
    d = qe.getClearAlpha();
  qe.toneMapping = Dl, qe.toneMappingExposure = 1, qe.outputEncoding = Ot, e.scale.z *= -1;
  var p = e.background;
  if (p && p.isColor) {
    p.convertSRGBToLinear();
    var v = Math.max(p.r, p.g, p.b),
      m = Math.min(Math.max(Math.ceil(Math.log2(v)), -128), 127);
    p = p.multiplyScalar(Math.pow(2, -m));
    var g = (m + 128) / 255;
    qe.setClearColor(p, g), e.background = null
  }
  for (var x = 0; x < 6; x++) {
    var w = x % 3;
    w == 0 ? (o.up.set(0, s[x], 0), o.lookAt(l[x], 0, 0)) : w == 1 ? (o.up.set(0, 0, s[x]), o.lookAt(0, l[x], 0)) : (o.up.set(0, s[x], 0), o.lookAt(0, 0, l[x])), ql(r, w * an, x > 2 ? an : 0, an, an), qe.setRenderTarget(r), qe.render(e, o)
  }
  qe.toneMapping = u, qe.toneMappingExposure = h, qe.outputEncoding = c, qe.setClearColor(f, d), e.scale.z *= -1
}

function Iy(e, t) {
  var n = new _n;
  e.isCubeTexture ? Fn == null && (Fn = Ch()) : Nn == null && (Nn = Rh());
  var r = e.isCubeTexture ? Fn : Nn;
  n.add(new et(va[0], r));
  var i = r.uniforms;
  i.envMap.value = e, e.isCubeTexture || i.texelSize.value.set(1 / e.image.width, 1 / e.image.height), i.inputEncoding.value = fn[e.encoding], i.outputEncoding.value = fn[e.encoding], ql(t, 0, 0, 3 * an, 2 * an), qe.setRenderTarget(t), qe.render(n, Xl)
}

function Cl(e) {
  var t = new _n;
  t.add(new et(va[0], e)), qe.compile(t, Xl)
}

function Du(e) {
  var t = new zt(3 * an, 3 * an, e);
  return t.texture.mapping = xa, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t
}

function ql(e, t, n, r, i) {
  e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i)
}

function Ou(e) {
  var t = qe.autoClear;
  qe.autoClear = !1;
  for (var n = 1; n < Ah; n++) {
    var r = Math.sqrt(io[n] * io[n] - io[n - 1] * io[n - 1]),
      i = Lu[(n - 1) % Lu.length];
    Lh(e, n - 1, n, r, i)
  }
  qe.autoClear = t
}

function Lh(e, t, n, r, i) {
  Iu(e, qo, t, n, r, "latitudinal", i), Iu(qo, e, n, n, r, "longitudinal", i)
}

function Iu(e, t, n, r, i, a, o) {
  a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
  var s = 3,
    l = new _n;
  l.add(new et(va[r], Xo));
  var c = Xo.uniforms,
    u = Au[n] - 1,
    h = isFinite(i) ? Math.PI / (2 * u) : 2 * Math.PI / (2 * zr - 1),
    f = i / h,
    d = isFinite(i) ? 1 + Math.floor(s * f) : zr;
  d > zr && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zr}`);
  for (var p = [], v = 0, m = 0; m < zr; ++m) {
    var w = m / f,
      g = Math.exp(-w * w / 2);
    p.push(g), m == 0 ? v += g : m < d && (v += 2 * g)
  }
  for (var m = 0; m < p.length; m++) p[m] = p[m] / v;
  c.envMap.value = e.texture, c.samples.value = d, c.weights.value = p, c.latitudinal.value = a === "latitudinal", o && (c.poleAxis.value = o), c.dTheta.value = h, c.mipInt.value = Vn - n, c.inputEncoding.value = fn[e.texture.encoding], c.outputEncoding.value = fn[e.texture.encoding];
  var x = Au[r],
    w = 3 * Math.max(0, an - 2 * x),
    S = (r === 0 ? 0 : 2 * an) + 2 * x * (r > Vn - Xr ? r - Vn + Xr : 0);
  ql(t, w, S, 3 * x, 2 * x), qe.setRenderTarget(t), qe.render(l, Xl)
}

function Ny(e) {
  var t = new Float32Array(e),
    n = new M(0, 1, 0),
    r = new Xn({
      defines: {
        n: e
      },
      uniforms: {
        envMap: {
          value: null
        },
        samples: {
          value: 1
        },
        weights: {
          value: t
        },
        latitudinal: {
          value: !1
        },
        dTheta: {
          value: 0
        },
        mipInt: {
          value: 0
        },
        poleAxis: {
          value: n
        },
        inputEncoding: {
          value: fn[Ot]
        },
        outputEncoding: {
          value: fn[Ot]
        }
      },
      vertexShader: Yl(),
      fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform int samples;
uniform float weights[n];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

${Zl()}

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

vec3 getSample(float theta, vec3 axis) {
	float cosTheta = cos(theta);
	// Rodrigues' axis-angle rotation
	vec3 sampleDirection = vOutputDirection * cosTheta
		+ cross(axis, vOutputDirection) * sin(theta)
		+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);
	return bilinearCubeUV(envMap, sampleDirection, mipInt);
}

void main() {
	vec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);
	if (all(equal(axis, vec3(0.0))))
		axis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);
	axis = normalize(axis);
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb += weights[0] * getSample(0.0, axis);
	for (int i = 1; i < n; i++) {
		if (i >= samples)
			break;
		float theta = dTheta * float(i);
		gl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);
		gl_FragColor.rgb += weights[i] * getSample(theta, axis);
	}
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
      blending: Un,
      depthTest: !1,
      depthWrite: !1
    });
  return r.type = "SphericalGaussianBlur", r
}

function Rh() {
  var e = new H(1, 1),
    t = new Xn({
      uniforms: {
        envMap: {
          value: null
        },
        texelSize: {
          value: e
        },
        inputEncoding: {
          value: fn[Ot]
        },
        outputEncoding: {
          value: fn[Ot]
        }
      },
      vertexShader: Yl(),
      fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${Zl()}

#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494

void main() {
	gl_FragColor = vec4(0.0);
	vec3 outputDirection = normalize(vOutputDirection);
	vec2 uv;
	uv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;
	uv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;
	vec2 f = fract(uv / texelSize - 0.5);
	uv -= f * texelSize;
	vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x += texelSize.x;
	vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.y += texelSize.y;
	vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x -= texelSize.x;
	vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	vec3 tm = mix(tl, tr, f.x);
	vec3 bm = mix(bl, br, f.x);
	gl_FragColor.rgb = mix(tm, bm, f.y);
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
      blending: Un,
      depthTest: !1,
      depthWrite: !1
    });
  return t.type = "EquirectangularToCubeUV", t
}

function Ch() {
  var e = new Xn({
    uniforms: {
      envMap: {
        value: null
      },
      inputEncoding: {
        value: fn[Ot]
      },
      outputEncoding: {
        value: fn[Ot]
      }
    },
    vertexShader: Yl(),
    fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${Zl()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
    blending: Un,
    depthTest: !1,
    depthWrite: !1
  });
  return e.type = "CubemapToCubeUV", e
}

function Yl() {
  return `
precision mediump float;
precision mediump int;
attribute vec3 position;
attribute vec2 uv;
attribute float faceIndex;
varying vec3 vOutputDirection;
vec3 getDirection(vec2 uv, float face) {
	uv = 2.0 * uv - 1.0;
	vec3 direction = vec3(uv, 1.0);
	if (face == 0.0) {
		direction = direction.zyx;
		direction.z *= -1.0;
	} else if (face == 1.0) {
		direction = direction.xzy;
		direction.z *= -1.0;
	} else if (face == 3.0) {
		direction = direction.zyx;
		direction.x *= -1.0;
	} else if (face == 4.0) {
		direction = direction.xzy;
		direction.y *= -1.0;
	} else if (face == 5.0) {
		direction.xz *= -1.0;
	}
	return direction;
}
void main() {
	vOutputDirection = getDirection(uv, faceIndex);
	gl_Position = vec4( position, 1.0 );
}
	`
}

function Zl() {
  return `
uniform int inputEncoding;
uniform int outputEncoding;

#include <encodings_pars_fragment>

vec4 inputTexelToLinear(vec4 value){
	if(inputEncoding == 0){
		return value;
	}else if(inputEncoding == 1){
		return sRGBToLinear(value);
	}else if(inputEncoding == 2){
		return RGBEToLinear(value);
	}else if(inputEncoding == 3){
		return RGBMToLinear(value, 7.0);
	}else if(inputEncoding == 4){
		return RGBMToLinear(value, 16.0);
	}else if(inputEncoding == 5){
		return RGBDToLinear(value, 256.0);
	}else{
		return GammaToLinear(value, 2.2);
	}
}

vec4 linearToOutputTexel(vec4 value){
	if(outputEncoding == 0){
		return value;
	}else if(outputEncoding == 1){
		return LinearTosRGB(value);
	}else if(outputEncoding == 2){
		return LinearToRGBE(value);
	}else if(outputEncoding == 3){
		return LinearToRGBM(value, 7.0);
	}else if(outputEncoding == 4){
		return LinearToRGBM(value, 16.0);
	}else if(outputEncoding == 5){
		return LinearToRGBD(value, 256.0);
	}else{
		return LinearToGamma(value, 2.2);
	}
}

vec4 envMapTexelToLinear(vec4 color) {
	return inputTexelToLinear(color);
}
	`
}
ge.create = function(e, t) {
  return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(ge.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
};
Object.assign(Bn.prototype, {
  createPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getPoints(e);
    return this.createGeometry(t)
  },
  createSpacedPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getSpacedPoints(e);
    return this.createGeometry(t)
  },
  createGeometry: function(e) {
    console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    for (var t = new Se, n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.vertices.push(new M(i.x, i.y, i.z || 0))
    }
    return t
  }
});
Object.assign(rn.prototype, {
  fromPoints: function(e) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
  }
});
Object.create(Ft.prototype);
Object.create(Ft.prototype);

function Ph(e) {
  console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Ft.call(this, e), this.type = "catmullrom"
}
Ph.prototype = Object.create(Ft.prototype);
Object.assign(Ph.prototype, {
  initFromArray: function() {
    console.error("THREE.Spline: .initFromArray() has been removed.")
  },
  getControlPointsArray: function() {
    console.error("THREE.Spline: .getControlPointsArray() has been removed.")
  },
  reparametrizeByArcLength: function() {
    console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
  }
});
Tl.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
};
fi.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
};
Object.assign(Ve.prototype, {
  extractUrlBase: function(e) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), dh.extractUrlBase(e)
  }
});
Ve.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
  }
};
Object.assign(bl.prototype, {
  setTexturePath: function(e) {
    return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e)
  }
});
Object.assign(wh.prototype, {
  center: function(e) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
  },
  empty: function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
  },
  size: function(e) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
  }
});
Object.assign(dn.prototype, {
  center: function(e) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
  },
  empty: function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
  },
  size: function(e) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
  }
});
_a.prototype.setFromMatrix = function(e) {
  return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e)
};
Sh.prototype.center = function(e) {
  return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
};
Object.assign(Te, {
  random16: function() {
    return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
  },
  nearestPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Te.floorPowerOfTwo(e)
  },
  nextPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Te.ceilPowerOfTwo(e)
  }
});
Object.assign(gt.prototype, {
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
  }
});
Object.assign(De.prototype, {
  extractPosition: function(e) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
  },
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
  },
  getPosition: function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new M().setFromMatrixColumn(this, 3)
  },
  setRotationFromQuaternion: function(e) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
  },
  multiplyToArray: function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
  },
  multiplyVector4: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
  },
  rotateAxis: function(e) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
  },
  crossVector: function(e) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
  },
  translate: function() {
    console.error("THREE.Matrix4: .translate() has been removed.")
  },
  rotateX: function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.")
  },
  rotateY: function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.")
  },
  rotateZ: function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.")
  },
  rotateByAxis: function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
  },
  makeFrustum: function(e, t, n, r, i, a) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, r, n, i, a)
  }
});
nn.prototype.isIntersectionLine = function(e) {
  return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
};
yt.prototype.multiplyVector3 = function(e) {
  return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
};
Object.assign(vi.prototype, {
  isIntersectionBox: function(e) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
  },
  isIntersectionPlane: function(e) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
  }
});
Object.assign(pt.prototype, {
  area: function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
  },
  barycoordFromPoint: function(e, t) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t)
  },
  midpoint: function(e) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e)
  },
  normal: function(e) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e)
  },
  plane: function(e) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e)
  }
});
Object.assign(pt, {
  barycoordFromPoint: function(e, t, n, r, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), pt.getBarycoord(e, t, n, r, i)
  },
  normal: function(e, t, n, r) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), pt.getNormal(e, t, n, r)
  }
});
Object.assign(cr.prototype, {
  extractAllPoints: function(e) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
  },
  extrude: function(e) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ei(this, e)
  },
  makeGeometry: function(e) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new ti(this, e)
  }
});
Object.assign(H.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
  }
});
Object.assign(M.prototype, {
  setEulerFromRotationMatrix: function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
  },
  setEulerFromQuaternion: function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
  },
  getPositionFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
  },
  getScaleFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
  },
  getColumnFromMatrix: function(e, t) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
  },
  applyProjection: function(e) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
  },
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
  }
});
Object.assign(Ye.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
  }
});
Object.assign(Se.prototype, {
  computeTangents: function() {
    console.error("THREE.Geometry: .computeTangents() has been removed.")
  },
  computeLineDistances: function() {
    console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e)
  }
});
Object.assign(Q.prototype, {
  getChildByName: function(e) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
  },
  renderDepth: function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
  },
  translate: function(e, t) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
  },
  getWorldRotation: function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e)
  }
});
Object.defineProperties(Q.prototype, {
  eulerOrder: {
    get: function() {
      return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
    },
    set: function(e) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
    }
  },
  useQuaternion: {
    get: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    }
  }
});
Object.assign(et.prototype, {
  setDrawMode: function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
  }
});
Object.defineProperties(et.prototype, {
  drawMode: {
    get: function() {
      return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), Ed
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
    }
  }
});
Object.defineProperties(yo.prototype, {
  objects: {
    get: function() {
      return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
    }
  }
});
Object.defineProperty(qs.prototype, "useVertexTexture", {
  get: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.")
  },
  set: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.")
  }
});
Xs.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.")
};
Object.defineProperty(ge.prototype, "__arcLengthDivisions", {
  get: function() {
    return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
  },
  set: function(e) {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e
  }
});
st.prototype.setLens = function(e, t) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), t !== void 0 && (this.filmGauge = t), this.setFocalLength(e)
};
Object.defineProperties(Ke.prototype, {
  onlyShadow: {
    set: function() {
      console.warn("THREE.Light: .onlyShadow has been removed.")
    }
  },
  shadowCameraFov: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
    }
  },
  shadowCameraLeft: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
    }
  },
  shadowCameraRight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
    }
  },
  shadowCameraTop: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
    }
  },
  shadowCameraBottom: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
    }
  },
  shadowCameraNear: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
    }
  },
  shadowCameraFar: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
    }
  },
  shadowCameraVisible: {
    set: function() {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
    }
  },
  shadowBias: {
    set: function(e) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
    }
  },
  shadowDarkness: {
    set: function() {
      console.warn("THREE.Light: .shadowDarkness has been removed.")
    }
  },
  shadowMapWidth: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
    }
  },
  shadowMapHeight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
    }
  }
});
Object.defineProperties(we.prototype, {
  length: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
    }
  },
  dynamic: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === Bi
    },
    set: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(Bi)
    }
  }
});
Object.assign(we.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Bi : $o), this
  },
  copyIndicesArray: function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
  },
  setArray: function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
  }
});
Object.assign(se.prototype, {
  addIndex: function(e) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
  },
  addAttribute: function(e, t) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new we(arguments[1], arguments[2]))) : e === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t)
  },
  addDrawCall: function(e, t, n) {
    n !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
  },
  clearDrawCalls: function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
  },
  computeTangents: function() {
    console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
  },
  computeOffsets: function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
  },
  removeAttribute: function(e) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e)
  },
  applyMatrix: function(e) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e)
  }
});
Object.defineProperties(se.prototype, {
  drawcalls: {
    get: function() {
      return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
    }
  },
  offsets: {
    get: function() {
      return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
    }
  }
});
Object.defineProperties(Mh.prototype, {
  linePrecision: {
    get: function() {
      return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold
    },
    set: function(e) {
      console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = e
    }
  }
});
Object.defineProperties(Wn.prototype, {
  dynamic: {
    get: function() {
      return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === Bi
    },
    set: function(e) {
      console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(e)
    }
  }
});
Object.assign(Wn.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Bi : $o), this
  },
  setArray: function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
  }
});
Object.assign(Mn.prototype, {
  getArrays: function() {
    console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
  },
  addShapeList: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
  },
  addShape: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
  }
});
Object.defineProperties(wl.prototype, {
  dynamic: {
    set: function() {
      console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
    }
  },
  onUpdate: {
    value: function() {
      return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
    }
  }
});
Object.defineProperties(Me.prototype, {
  wrapAround: {
    get: function() {
      console.warn("THREE.Material: .wrapAround has been removed.")
    },
    set: function() {
      console.warn("THREE.Material: .wrapAround has been removed.")
    }
  },
  overdraw: {
    get: function() {
      console.warn("THREE.Material: .overdraw has been removed.")
    },
    set: function() {
      console.warn("THREE.Material: .overdraw has been removed.")
    }
  },
  wrapRGB: {
    get: function() {
      return console.warn("THREE.Material: .wrapRGB has been removed."), new oe
    }
  },
  shading: {
    get: function() {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = e === Fu
    }
  },
  stencilMask: {
    get: function() {
      return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e
    }
  }
});
Object.defineProperties(mr.prototype, {
  metal: {
    get: function() {
      return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
    },
    set: function() {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
    }
  }
});
Object.defineProperties(At.prototype, {
  derivatives: {
    get: function() {
      return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
    },
    set: function(e) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
    }
  }
});
Object.assign(Hl.prototype, {
  clearTarget: function(e, t, n, r) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, r)
  },
  animate: function(e) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e)
  },
  getCurrentRenderTarget: function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
  },
  getMaxAnisotropy: function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
  },
  getPrecision: function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
  },
  resetGLState: function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
  },
  supportsFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
  },
  supportsHalfFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
  },
  supportsStandardDerivatives: function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
  },
  supportsCompressedTextureS3TC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
  },
  supportsCompressedTexturePVRTC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
  },
  supportsBlendMinMax: function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
  },
  supportsVertexTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
  },
  supportsInstancedArrays: function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
  },
  enableScissorTest: function(e) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
  },
  initMaterial: function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
  },
  addPrePlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
  },
  addPostPlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
  },
  updateShadowMap: function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
  },
  setFaceCulling: function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
  },
  allocTextureUnit: function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
  },
  setTexture: function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
  },
  setTexture2D: function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
  },
  setTextureCube: function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
  },
  getActiveMipMapLevel: function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
  }
});
Object.defineProperties(Hl.prototype, {
  shadowMapEnabled: {
    get: function() {
      return this.shadowMap.enabled
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
    }
  },
  shadowMapType: {
    get: function() {
      return this.shadowMap.type
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
    }
  },
  shadowMapCullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
    }
  },
  context: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
    }
  },
  vr: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
    }
  },
  gammaInput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
    }
  },
  gammaOutput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = e === !0 ? Ul : Ot
    }
  }
});
Object.defineProperties(ih.prototype, {
  cullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
    }
  },
  renderReverseSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
    }
  },
  renderSingleSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
    }
  }
});
Object.defineProperties(zt.prototype, {
  wrapS: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
    }
  },
  wrapT: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
    }
  },
  magFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
    }
  },
  minFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
    }
  },
  anisotropy: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
    }
  },
  offset: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
    }
  },
  repeat: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
    }
  },
  format: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
    }
  },
  type: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
    }
  },
  generateMipmaps: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
    }
  }
});
Object.defineProperties(ua.prototype, {
  load: {
    value: function(e) {
      console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
      var t = this,
        n = new Ml;
      return n.load(e, function(r) {
        t.setBuffer(r)
      }), this
    }
  },
  startTime: {
    set: function() {
      console.warn("THREE.Audio: .startTime is now .play( delay ).")
    }
  }
});
yh.prototype.getData = function() {
  return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
};
Gi.prototype.updateCubeMap = function(e, t) {
  return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
};
ur.crossOrigin = void 0;
ur.loadTexture = function(e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  var i = new Ho;
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  return t && (a.mapping = t), a
};
ur.loadTextureCube = function(e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  var i = new ol;
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  return t && (a.mapping = t), a
};
ur.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
};
ur.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
  detail: {
    revision: ef
  }
}));
var ma = function(e, t) {
  t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.enabled = !0, this.target = new M, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }, this.mouseButtons = {
    LEFT: Dn.ROTATE,
    MIDDLE: Dn.DOLLY,
    RIGHT: Dn.PAN
  }, this.touches = {
    ONE: On.ROTATE,
    TWO: On.DOLLY_PAN
  }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
    return c.phi
  }, this.getAzimuthalAngle = function() {
    return c.theta
  }, this.saveState = function() {
    n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
  }, this.reset = function() {
    n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(r), n.update(), s = o.NONE
  }, this.update = (function() {
    var L = new M,
      K = new yt().setFromUnitVectors(e.up, new M(0, 1, 0)),
      ue = K.clone().inverse(),
      ie = new M,
      ae = new yt;
    return function() {
      var le = n.object.position;
      return L.copy(le).sub(n.target), L.applyQuaternion(K), c.setFromVector3(L), n.autoRotate && s === o.NONE && C(D()), n.enableDamping ? (c.theta += u.theta * n.dampingFactor, c.phi += u.phi * n.dampingFactor) : (c.theta += u.theta, c.phi += u.phi), c.theta = Math.max(n.minAzimuthAngle, Math.min(n.maxAzimuthAngle, c.theta)), c.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, c.phi)), c.makeSafe(), c.radius *= h, c.radius = Math.max(n.minDistance, Math.min(n.maxDistance, c.radius)), n.enableDamping === !0 ? n.target.addScaledVector(f, n.dampingFactor) : n.target.add(f), L.setFromSpherical(c), L.applyQuaternion(ue), le.copy(n.target).add(L), n.object.lookAt(n.target), n.enableDamping === !0 ? (u.theta *= 1 - n.dampingFactor, u.phi *= 1 - n.dampingFactor, f.multiplyScalar(1 - n.dampingFactor)) : (u.set(0, 0, 0), f.set(0, 0, 0)), h = 1, d || ie.distanceToSquared(n.object.position) > l || 8 * (1 - ae.dot(n.object.quaternion)) > l ? (n.dispatchEvent(r), ie.copy(n.object.position), ae.copy(n.object.quaternion), d = !1, !0) : !1
    }
  })(), this.dispose = function() {
    n.domElement.removeEventListener("contextmenu", ce, !1), n.domElement.removeEventListener("mousedown", je, !1), n.domElement.removeEventListener("wheel", E, !1), n.domElement.removeEventListener("touchstart", $, !1), n.domElement.removeEventListener("touchend", Re, !1), n.domElement.removeEventListener("touchmove", q, !1), document.removeEventListener("mousemove", _t, !1), document.removeEventListener("mouseup", $e, !1), n.domElement.removeEventListener("keydown", A, !1)
  };
  var n = this,
    r = {
      type: "change"
    },
    i = {
      type: "start"
    },
    a = {
      type: "end"
    },
    o = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    },
    s = o.NONE,
    l = 1e-6,
    c = new El,
    u = new El,
    h = 1,
    f = new M,
    d = !1,
    p = new H,
    v = new H,
    m = new H,
    g = new H,
    x = new H,
    w = new H,
    S = new H,
    b = new H,
    T = new H;

  function D() {
    return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed
  }

  function N() {
    return Math.pow(.95, n.zoomSpeed)
  }

  function C(L) {
    u.theta -= L
  }
  this.rotateLeft = C, this.setLeftRotation = L => {
    console.log(u.theta, u), u.theta = L
  };

  function B(L) {
    u.phi -= L
  }
  this.rotateUp = B;
  var I = (function() {
      var L = new M;
      return function(ue, ie) {
        L.setFromMatrixColumn(ie, 0), L.multiplyScalar(-ue), f.add(L)
      }
    })(),
    F = (function() {
      var L = new M;
      return function(ue, ie) {
        n.screenSpacePanning === !0 ? L.setFromMatrixColumn(ie, 1) : (L.setFromMatrixColumn(ie, 0), L.crossVectors(n.object.up, L)), L.multiplyScalar(ue), f.add(L)
      }
    })(),
    U = (function() {
      var L = new M;
      return function(ue, ie) {
        var ae = n.domElement;
        if (n.object.isPerspectiveCamera) {
          var me = n.object.position;
          L.copy(me).sub(n.target);
          var le = L.length();
          le *= Math.tan(n.object.fov / 2 * Math.PI / 180), I(2 * ue * le / ae.clientHeight, n.object.matrix), F(2 * ie * le / ae.clientHeight, n.object.matrix)
        } else n.object.isOrthographicCamera ? (I(ue * (n.object.right - n.object.left) / n.object.zoom / ae.clientWidth, n.object.matrix), F(ie * (n.object.top - n.object.bottom) / n.object.zoom / ae.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
      }
    })();

  function z(L) {
    n.object.isPerspectiveCamera ? h /= L : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * L)), n.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
  }

  function O(L) {
    n.object.isPerspectiveCamera ? h *= L : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / L)), n.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
  }

  function k(L) {
    p.set(L.clientX, L.clientY)
  }

  function j(L) {
    S.set(L.clientX, L.clientY)
  }

  function J(L) {
    g.set(L.clientX, L.clientY)
  }

  function W(L) {
    v.set(L.clientX, L.clientY), m.subVectors(v, p).multiplyScalar(n.rotateSpeed);
    var K = n.domElement;
    C(2 * Math.PI * m.x / K.clientHeight), B(2 * Math.PI * m.y / K.clientHeight), p.copy(v), n.update()
  }

  function Z(L) {
    b.set(L.clientX, L.clientY), T.subVectors(b, S), T.y > 0 ? z(N()) : T.y < 0 && O(N()), S.copy(b), n.update()
  }

  function re(L) {
    x.set(L.clientX, L.clientY), w.subVectors(x, g).multiplyScalar(n.panSpeed), U(w.x, w.y), g.copy(x), n.update()
  }

  function Pe(L) {
    L.deltaY < 0 ? O(N()) : L.deltaY > 0 && z(N()), n.update()
  }

  function Ue(L) {
    var K = !1;
    switch (L.keyCode) {
      case n.keys.UP:
        U(0, n.keyPanSpeed), K = !0;
        break;
      case n.keys.BOTTOM:
        U(0, -n.keyPanSpeed), K = !0;
        break;
      case n.keys.LEFT:
        U(n.keyPanSpeed, 0), K = !0;
        break;
      case n.keys.RIGHT:
        U(-n.keyPanSpeed, 0), K = !0;
        break
    }
    K && (L.preventDefault(), n.update())
  }

  function Le(L) {
    if (L.touches.length == 1) p.set(L.touches[0].pageX, L.touches[0].pageY);
    else {
      var K = .5 * (L.touches[0].pageX + L.touches[1].pageX),
        ue = .5 * (L.touches[0].pageY + L.touches[1].pageY);
      p.set(K, ue)
    }
  }

  function ye(L) {
    if (L.touches.length == 1) g.set(L.touches[0].pageX, L.touches[0].pageY);
    else {
      var K = .5 * (L.touches[0].pageX + L.touches[1].pageX),
        ue = .5 * (L.touches[0].pageY + L.touches[1].pageY);
      g.set(K, ue)
    }
  }

  function V(L) {
    var K = L.touches[0].pageX - L.touches[1].pageX,
      ue = L.touches[0].pageY - L.touches[1].pageY,
      ie = Math.sqrt(K * K + ue * ue);
    S.set(0, ie)
  }

  function Oe(L) {
    n.enableZoom && V(L), n.enablePan && ye(L)
  }

  function _e(L) {
    n.enableZoom && V(L), n.enableRotate && Le(L)
  }

  function Fe(L) {
    if (L.touches.length == 1) v.set(L.touches[0].pageX, L.touches[0].pageY);
    else {
      var K = .5 * (L.touches[0].pageX + L.touches[1].pageX),
        ue = .5 * (L.touches[0].pageY + L.touches[1].pageY);
      v.set(K, ue)
    }
    m.subVectors(v, p).multiplyScalar(n.rotateSpeed);
    var ie = n.domElement;
    C(2 * Math.PI * m.x / ie.clientHeight), B(2 * Math.PI * m.y / ie.clientHeight), p.copy(v)
  }

  function ve(L) {
    if (L.touches.length == 1) x.set(L.touches[0].pageX, L.touches[0].pageY);
    else {
      var K = .5 * (L.touches[0].pageX + L.touches[1].pageX),
        ue = .5 * (L.touches[0].pageY + L.touches[1].pageY);
      x.set(K, ue)
    }
    w.subVectors(x, g).multiplyScalar(n.panSpeed), U(w.x, w.y), g.copy(x)
  }

  function X(L) {
    var K = L.touches[0].pageX - L.touches[1].pageX,
      ue = L.touches[0].pageY - L.touches[1].pageY,
      ie = Math.sqrt(K * K + ue * ue);
    b.set(0, ie), T.set(0, Math.pow(b.y / S.y, n.zoomSpeed)), z(T.y), S.copy(b)
  }

  function Ae(L) {
    n.enableZoom && X(L), n.enablePan && ve(L)
  }

  function ze(L) {
    n.enableZoom && X(L), n.enableRotate && Fe(L)
  }

  function je(L) {
    if (n.enabled !== !1) {
      L.preventDefault(), n.domElement.focus ? n.domElement.focus() : window.focus();
      var K;
      switch (L.button) {
        case 0:
          K = n.mouseButtons.LEFT;
          break;
        case 1:
          K = n.mouseButtons.MIDDLE;
          break;
        case 2:
          K = n.mouseButtons.RIGHT;
          break;
        default:
          K = -1
      }
      switch (K) {
        case Dn.DOLLY:
          if (n.enableZoom === !1) return;
          j(L), s = o.DOLLY;
          break;
        case Dn.ROTATE:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enablePan === !1) return;
            J(L), s = o.PAN
          } else {
            if (n.enableRotate === !1) return;
            k(L), s = o.ROTATE
          }
          break;
        case Dn.PAN:
          if (L.ctrlKey || L.metaKey || L.shiftKey) {
            if (n.enableRotate === !1) return;
            k(L), s = o.ROTATE
          } else {
            if (n.enablePan === !1) return;
            J(L), s = o.PAN
          }
          break;
        default:
          s = o.NONE
      }
      s !== o.NONE && (document.addEventListener("mousemove", _t, !1), document.addEventListener("mouseup", $e, !1), n.dispatchEvent(i))
    }
  }

  function _t(L) {
    if (n.enabled !== !1) switch (L.preventDefault(), s) {
      case o.ROTATE:
        if (n.enableRotate === !1) return;
        W(L);
        break;
      case o.DOLLY:
        if (n.enableZoom === !1) return;
        Z(L);
        break;
      case o.PAN:
        if (n.enablePan === !1) return;
        re(L);
        break
    }
  }

  function $e(L) {
    n.enabled !== !1 && (document.removeEventListener("mousemove", _t, !1), document.removeEventListener("mouseup", $e, !1), n.dispatchEvent(a), s = o.NONE)
  }

  function E(L) {
    n.enabled === !1 || n.enableZoom === !1 || s !== o.NONE && s !== o.ROTATE || (L.preventDefault(), L.stopPropagation(), n.dispatchEvent(i), Pe(L), n.dispatchEvent(a))
  }

  function A(L) {
    n.enabled === !1 || n.enableKeys === !1 || n.enablePan === !1 || Ue(L)
  }

  function $(L) {
    if (n.enabled !== !1) {
      switch (L.preventDefault(), L.touches.length) {
        case 1:
          switch (n.touches.ONE) {
            case On.ROTATE:
              if (n.enableRotate === !1) return;
              Le(L), s = o.TOUCH_ROTATE;
              break;
            case On.PAN:
              if (n.enablePan === !1) return;
              ye(L), s = o.TOUCH_PAN;
              break;
            default:
              s = o.NONE
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case On.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Oe(L), s = o.TOUCH_DOLLY_PAN;
              break;
            case On.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              _e(L), s = o.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = o.NONE
          }
          break;
        default:
          s = o.NONE
      }
      s !== o.NONE && n.dispatchEvent(i)
    }
  }

  function q(L) {
    if (n.enabled !== !1) switch (L.preventDefault(), L.stopPropagation(), s) {
      case o.TOUCH_ROTATE:
        if (n.enableRotate === !1) return;
        Fe(L), n.update();
        break;
      case o.TOUCH_PAN:
        if (n.enablePan === !1) return;
        ve(L), n.update();
        break;
      case o.TOUCH_DOLLY_PAN:
        if (n.enableZoom === !1 && n.enablePan === !1) return;
        Ae(L), n.update();
        break;
      case o.TOUCH_DOLLY_ROTATE:
        if (n.enableZoom === !1 && n.enableRotate === !1) return;
        ze(L), n.update();
        break;
      default:
        s = o.NONE
    }
  }

  function Re(L) {
    n.enabled !== !1 && (n.dispatchEvent(a), s = o.NONE)
  }

  function ce(L) {
    n.enabled !== !1 && L.preventDefault()
  }
  n.domElement.addEventListener("contextmenu", ce, !1), n.domElement.addEventListener("mousedown", je, !1), n.domElement.addEventListener("wheel", E, !1), n.domElement.addEventListener("touchstart", $, !1), n.domElement.addEventListener("touchend", Re, !1), n.domElement.addEventListener("touchmove", q, !1), n.domElement.addEventListener("keydown", A, !1), n.domElement.tabIndex === -1 && (n.domElement.tabIndex = 0), this.update()
};
ma.prototype = Object.create(Qt.prototype);
ma.prototype.constructor = ma;
var Pl = function(e, t) {
  ma.call(this, e, t), this.mouseButtons.LEFT = Dn.PAN, this.mouseButtons.RIGHT = Dn.ROTATE, this.touches.ONE = On.PAN, this.touches.TWO = On.DOLLY_ROTATE
};
Pl.prototype = Object.create(Qt.prototype);
Pl.prototype.constructor = Pl;
console.warn = () => {};
console.error = () => {};

function Fy() {
  const e = document.querySelector("[fs-3dglobe-element='container']"),
    t = {
      url: e.getAttribute("fs-3dglobe-img") || "https://cdn.finsweet.com/files/globe/earthmap1k.jpg"
    },
    n = document.createElement("div");
  n.className = "fs-3dglobe-container", e.appendChild(n);
  const r = document.createElement("canvas");
  r.className = "canvas-3dglobe-container", n.appendChild(r);
  const i = [].slice.call(document.querySelectorAll("[fs-3dglobe-element='tooltip']")),
    a = [].slice.call(document.querySelectorAll("[fs-3dglobe-element='pin']")),
    o = new Hl({
      canvas: r,
      alpha: !0
    }),
    s = new st(60, 2, .1, 10);
  o.setPixelRatio(window.devicePixelRatio), s.position.z = 2;
  const l = new ma(s, r);
  l.enableDamping = !0, l.enablePan = !1, l.minDistance = 1.2, l.maxDistance = 4, l.autoRotate = !0, l.autoRotateSpeed = .2, l.enableZoom = !1, l.dampingFactor = .01, l.update();
  const c = new _n;
  o.setClearColor(0, 0);
  let u, h = !1;
  const f = Uy("[fs-3dglobe-element='list'] .w-dyn-item"),
    d = new Ho().load(t.url, N);
  d.needsUpdate = !0;
  const p = new vr(1, 64, 32),
    v = new Ht({
      map: d,
      side: ya
    }),
    m = new et(p, v);
  c.add(m), v.map.needsUpdate = !0, (function() {
    const F = 1.5 * Math.PI,
      U = Math.PI,
      z = new Q,
      O = new Q;
    z.add(O);
    const k = new Q;
    k.position.z = 1, O.add(k);
    const j = document.createElement("div");
    j.className = "fs-3dglobe-labels", n.appendChild(j);
    for (const [J, W] of f.entries()) {
      const {
        lat: Z,
        lon: re,
        name: Pe,
        url: Ue
      } = W;
      z.rotation.y = Te.degToRad(re) + F, O.rotation.x = Te.degToRad(Z) + U, k.updateWorldMatrix(!0, !1);
      const Le = new M;
      k.getWorldPosition(Le), W.position = Le;
      const ye = document.createElement("div"),
        V = document.createElement("div");
      ye.className = "map-container", V.innerHTML = i[J]?.outerHTML || By({
        url: Ue,
        name: Pe
      }), V.className = "fs-3dglobe-info-box", ye.style.cursor = "pointer";
      const Oe = document.createElement("div");
      if (Oe.className = "fs-3dglobe-arrow-box", a[J]) Oe.appendChild(a[J]);
      else {
        const _e = document.createElement("div");
        _e.className = "fs-3dglobe-arrow_box", Oe.appendChild(_e)
      }
      ye.appendChild(Oe), ye.appendChild(V), j.appendChild(ye), W.elem = ye
    }
    C()
  })();
  const g = new M,
    x = new M,
    w = new M,
    S = new gt,
    b = 20,
    T = -.08;
  let D = !0;

  function N() {
    if (D) {
      if (h = void 0, u = requestAnimationFrame(N), (function(F) {
          const U = F.domElement,
            z = U.clientWidth,
            O = U.clientHeight,
            k = U.width !== z || U.height !== O;
          return k && F.setSize(z, O, !1), k
        })(o)) {
        const F = o.domElement;
        s.aspect = F.clientWidth / F.clientHeight, s.updateProjectionMatrix()
      }
      l.update(), (function() {
        const F = b * b;
        S.getNormalMatrix(s.matrixWorldInverse), s.getWorldPosition(w);
        for (const U of f) {
          const {
            position: z,
            elem: O,
            area: k
          } = U;
          if (k < F) {
            O.style.opacity = ".009", O.style.display = "none";
            continue
          }
          if (g.copy(z), g.applyMatrix3(S), x.copy(z), x.applyMatrix4(s.matrixWorldInverse).normalize(), g.dot(x) > T) {
            O.style.opacity = ".009", O.style.display = "none";
            continue
          }
          O.style.opacity = "1", O.style.display = "", g.copy(z), g.project(s);
          const j = (.5 * g.x + .5) * r.clientWidth,
            J = (-.5 * g.y + .5) * r.clientHeight;
          O.style.transform = `translate(-50%, -50%) translate(${j}px,${J}px)`, O.style.zIndex = 1e5 * (.5 * -g.z + .5) | 0
        }
      })(), o.render(c, s)
    }
  }

  function C() {
    h || (cancelAnimationFrame(u), h = !0, u = requestAnimationFrame(N))
  }
  N(), l.addEventListener("change", C), window.addEventListener("resize", C);

  function B() {
    if (!f[0]) return;
    const F = f[0].position,
      U = Math.atan2(F.y, Math.sqrt(F.x * F.x + F.z * F.z)),
      z = Math.atan2(-F.x, F.z);
    !l.rotateUp || !l.rotateLeft || (l.rotateUp(U), l.rotateLeft(z))
  }

  function I() {
    D = !1, window.cancelAnimationFrame(u), l.removeEventListener("change", C), window.removeEventListener("resize", C), l.dispose(), o.dispose(), d.dispose(), v.dispose(), p.dispose(), e.removeChild(n)
  }
  return {
    destroy: I,
    rotateGlobeToFirstPoint: B
  }
}

function By({
  url: e,
  name: t,
  location: n = "N/A",
  role: r = "N/A"
}) {
  return `

  <div style=" border: 1px solid #dadce0; border-radius: 8px; overflow: hidden;">
    <div class="caption">
      <img src="https://danb.me/blog/images/2022/ruby/ruby_07.webp" style="height: 200px; max-width:600px;" />
    </div>
    <div style="padding:5px 10px">
      <div>
        <strong>${t}</strong>
      </div>
      <div>Javascript, Node.js</div>
      <div>${n}</div>
    </div>
  </div>
 `
}

function Uy(e) {
  return [].slice.call(document.querySelectorAll(e)).map(t => ({
    name: (t.querySelector("[fs-3dglobe-element='name'") || {}).textContent,
    lat: (t.querySelector("[fs-3dglobe-element='lat'") || {}).textContent,
    lon: (t.querySelector("[fs-3dglobe-element='lon'") || {}).textContent,
    url: (t.querySelector("[fs-3dglobe-element='url'") || {}).textContent
  }))
}
const zy = {
    class: "globe-wrapper"
  },
  Gy = ["fs-3dglobe-img"],
  Hy = {
    class: "w-dyn-list"
  },
  Vy = {
    "fs-3dglobe-element": "list",
    role: "list",
    class: "w-dyn-items"
  },
  ky = ["href", "onMouseenter"],
  Wy = ["onMouseenter"],
  jy = {
    "fs-3dglobe-element": "lat",
    class: "lat"
  },
  Xy = {
    "fs-3dglobe-element": "lon",
    class: "lon"
  },
  qy = {
    name: "MainGlobe"
  },
  Yy = Wh({
    ...qy,
    props: {
      points: {},
      light: {
        type: Boolean
      },
      changeCoords: {
        type: Boolean
      },
      rotateToPoint: {
        type: Boolean
      }
    },
    emits: ["changeCoords"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        r = t,
        {
          isDesktop: i
        } = jh(),
        a = Ql(0),
        o = Ql([]);
      let s, l;
      const c = Jh(() => {
        const h = n.points?.[a.value];
        return {
          lat: h?.latitude ?? 0,
          lon: h?.longitude ?? 0
        }
      });

      function u() {
        if (i.value) return clearInterval(l);
        clearInterval(l), l = Kh(() => {
          a.value = a.value === o.value.length - 1 ? 0 : a.value + 1
        }, 5e3)
      }
      return Xh(c, () => {
        r("changeCoords", c)
      }), Qh(() => {
        s || (s = Fy()), r("changeCoords", c), n.rotateToPoint && s.rotateGlobeToFirstPoint(), n.changeCoords && (window.addEventListener("resize", u), u())
      }), qh(() => {
        s && (s.destroy(), s = null), n.changeCoords && window.removeEventListener("resize", u)
      }), (h, f) => (gi(), yi("section", zy, [Ct("div", {
        "fs-3dglobe-img": e.light ? "/images/globe-map-light.svg" : "/images/globe-map.svg",
        "fs-3dglobe-element": "container",
        class: Zn(["globe-container", {
          light: e.light
        }])
      }, null, 10, Gy), Ct("div", Hy, [Ct("div", Vy, [(gi(!0), yi(Yh, null, Zh(e.points, (d, p) => (gi(), yi("div", {
        key: p,
        role: "listitem",
        class: "w-dyn-item"
      }, [d?.link ? (gi(), yi("a", {
        key: 0,
        ref_for: !0,
        ref_key: "pins",
        ref: o,
        "fs-3dglobe-element": "pin",
        class: Zn(["pin", {
          active: $l(a) === p && e.changeCoords
        }]),
        href: d?.link,
        onMouseenter: v => a.value = p
      }, [Ct("p", {
        class: Zn(["l1 pin-title", {
          dark: e.light
        }])
      }, Ea(d.title), 3), Ct("div", {
        class: Zn(["pin-icon", {
          dark: e.light
        }])
      }, [...f[0] || (f[0] = [Ct("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
      }, [Ct("path", {
        d: "M3.41421 12.5858C2.15428 13.8457 0 12.9534 0 11.1716V2C0 0.895431 0.895431 0 2 0H11.1716C12.9534 0 13.8457 2.15428 12.5858 3.41421L3.41421 12.5858Z"
      })], -1)])], 2)], 42, ky)) : (gi(), yi("div", {
        key: 1,
        ref_for: !0,
        ref_key: "pins",
        ref: o,
        "fs-3dglobe-element": "pin",
        class: Zn(["pin", {
          active: $l(a) === p && e.changeCoords
        }]),
        onMouseenter: v => a.value = p
      }, [Ct("p", {
        class: Zn(["l1 pin-title", {
          dark: e.light
        }])
      }, Ea(d.title), 3), Ct("div", {
        class: Zn(["pin-icon", {
          dark: e.light
        }])
      }, [...f[1] || (f[1] = [Ct("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
      }, [Ct("path", {
        d: "M3.41421 12.5858C2.15428 13.8457 0 12.9534 0 11.1716V2C0 0.895431 0.895431 0 2 0H11.1716C12.9534 0 13.8457 2.15428 12.5858 3.41421L3.41421 12.5858Z"
      })], -1)])], 2)], 42, Wy)), Ct("div", jy, Ea(d?.latitude), 1), Ct("div", Xy, Ea(d?.longitude), 1)]))), 128))])])]))
    }
  }),
  $y = $h(Yy, [
    ["__scopeId", "data-v-8b3a29cf"]
  ]);
export {
  $y as _, Kh as s
};