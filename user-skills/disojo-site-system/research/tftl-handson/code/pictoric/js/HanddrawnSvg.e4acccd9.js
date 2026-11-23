/* https://pictoric.com.ua/_nuxt/HanddrawnSvg.e4acccd9.js */
var D = Object.defineProperty;
var M = (i, t, s) => t in i ? D(i, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : i[t] = s;
var u = (i, t, s) => (M(i, typeof t != "symbol" ? t + "" : t, s), s);
import {
  ak as T,
  j as b,
  G as R,
  Q as j,
  B as F,
  d as U,
  o as $,
  b as E,
  c as O,
  r as L,
  X as H,
  v as P,
  _ as I
} from "./entry.6cb2d70d.js";
class d {
  constructor(t, s) {
    u(this, "words");
    u(this, "sigBytes");
    t = this.words = t || [], this.sigBytes = s === void 0 ? t.length * 4 : s
  }
  toString(t) {
    return (t || K).stringify(this)
  }
  concat(t) {
    if (this.clamp(), this.sigBytes % 4)
      for (let s = 0; s < t.sigBytes; s++) {
        const e = t.words[s >>> 2] >>> 24 - s % 4 * 8 & 255;
        this.words[this.sigBytes + s >>> 2] |= e << 24 - (this.sigBytes + s) % 4 * 8
      } else
        for (let s = 0; s < t.sigBytes; s += 4) this.words[this.sigBytes + s >>> 2] = t.words[s >>> 2];
    return this.sigBytes += t.sigBytes, this
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4)
  }
  clone() {
    return new d([...this.words])
  }
}
const K = {
    stringify(i) {
      const t = [];
      for (let s = 0; s < i.sigBytes; s++) {
        const e = i.words[s >>> 2] >>> 24 - s % 4 * 8 & 255;
        t.push((e >>> 4).toString(16), (e & 15).toString(16))
      }
      return t.join("")
    }
  },
  X = {
    stringify(i) {
      const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        s = [];
      for (let e = 0; e < i.sigBytes; e += 3) {
        const n = i.words[e >>> 2] >>> 24 - e % 4 * 8 & 255,
          o = i.words[e + 1 >>> 2] >>> 24 - (e + 1) % 4 * 8 & 255,
          a = i.words[e + 2 >>> 2] >>> 24 - (e + 2) % 4 * 8 & 255,
          r = n << 16 | o << 8 | a;
        for (let f = 0; f < 4 && e * 8 + f * 6 < i.sigBytes * 8; f++) s.push(t.charAt(r >>> 6 * (3 - f) & 63))
      }
      return s.join("")
    }
  },
  q = {
    parse(i) {
      const t = i.length,
        s = [];
      for (let e = 0; e < t; e++) s[e >>> 2] |= (i.charCodeAt(e) & 255) << 24 - e % 4 * 8;
      return new d(s, t)
    }
  },
  G = {
    parse(i) {
      return q.parse(unescape(encodeURIComponent(i)))
    }
  };
class Q {
  constructor() {
    u(this, "_data", new d);
    u(this, "_nDataBytes", 0);
    u(this, "_minBufferSize", 0);
    u(this, "blockSize", 512 / 32)
  }
  reset() {
    this._data = new d, this._nDataBytes = 0
  }
  _append(t) {
    typeof t == "string" && (t = G.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
  }
  _doProcessBlock(t, s) {}
  _process(t) {
    let s, e = this._data.sigBytes / (this.blockSize * 4);
    t ? e = Math.ceil(e) : e = Math.max((e | 0) - this._minBufferSize, 0);
    const n = e * this.blockSize,
      o = Math.min(n * 4, this._data.sigBytes);
    if (n) {
      for (let a = 0; a < n; a += this.blockSize) this._doProcessBlock(this._data.words, a);
      s = this._data.words.splice(0, n), this._data.sigBytes -= o
    }
    return new d(s, o)
  }
}
class J extends Q {
  update(t) {
    return this._append(t), this._process(), this
  }
  finalize(t) {
    t && this._append(t)
  }
}
const W = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
  N = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998],
  _ = [];
class V extends J {
  constructor() {
    super(...arguments);
    u(this, "_hash", new d([...W]))
  }
  reset() {
    super.reset(), this._hash = new d([...W])
  }
  _doProcessBlock(s, e) {
    const n = this._hash.words;
    let o = n[0],
      a = n[1],
      r = n[2],
      f = n[3],
      h = n[4],
      p = n[5],
      y = n[6],
      B = n[7];
    for (let c = 0; c < 64; c++) {
      if (c < 16) _[c] = s[e + c] | 0;
      else {
        const l = _[c - 15],
          v = (l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3,
          m = _[c - 2],
          C = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
        _[c] = v + _[c - 7] + C + _[c - 16]
      }
      const k = h & p ^ ~h & y,
        x = o & a ^ o & r ^ a & r,
        w = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22),
        S = (h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25),
        g = B + S + k + N[c] + _[c],
        z = w + x;
      B = y, y = p, p = h, h = f + g | 0, f = r, r = a, a = o, o = g + z | 0
    }
    n[0] = n[0] + o | 0, n[1] = n[1] + a | 0, n[2] = n[2] + r | 0, n[3] = n[3] + f | 0, n[4] = n[4] + h | 0, n[5] = n[5] + p | 0, n[6] = n[6] + y | 0, n[7] = n[7] + B | 0
  }
  finalize(s) {
    super.finalize(s);
    const e = this._nDataBytes * 8,
      n = this._data.sigBytes * 8;
    return this._data.words[n >>> 5] |= 128 << 24 - n % 32, this._data.words[(n + 64 >>> 9 << 4) + 14] = Math.floor(e / 4294967296), this._data.words[(n + 64 >>> 9 << 4) + 15] = e, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash
  }
}

function Y(i) {
  return new V().finalize(i).toString(X)
}

function Z(i, t = {}) {
  const s = typeof i == "string" ? i : T(i, t);
  return Y(s).slice(0, 10)
}

function A(i, t, s) {
  const [e = {}, n] = typeof t == "string" ? [{}, t] : [t, s], o = e.key || Z([n, b(e.baseURL), typeof i == "string" ? i : "", b(e.params || e.query)]);
  if (!o || typeof o != "string") throw new TypeError("[nuxt] [useFetch] key must be a string: " + o);
  if (!i) throw new Error("[nuxt] [useFetch] request is missing.");
  const a = o === n ? "$f" + o : o,
    r = F(() => {
      let l = i;
      return typeof l == "function" && (l = l()), b(l)
    });
  if (!e.baseURL && typeof r.value == "string" && r.value.startsWith("//")) throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const {
    server: f,
    lazy: h,
    default: p,
    transform: y,
    pick: B,
    watch: c,
    immediate: k,
    ...x
  } = e, w = R({
    ...x,
    cache: typeof e.cache == "boolean" ? void 0 : e.cache
  }), S = {
    server: f,
    lazy: h,
    default: p,
    transform: y,
    pick: B,
    immediate: k,
    watch: c === !1 ? [] : [w, r, ...c || []]
  };
  let g;
  return j(a, () => {
    var v;
    return (v = g == null ? void 0 : g.abort) == null || v.call(g), g = typeof AbortController < "u" ? new AbortController : {}, typeof r.value == "string" && r.value.startsWith("/"), (e.$fetch || globalThis.$fetch)(r.value, {
      signal: g.signal,
      ...w
    })
  }, S)
}
const tt = ["innerHTML"],
  st = U({
    __name: "HanddrawnSvg",
    props: {
      svgLink: {},
      trigger: {}
    },
    setup(i) {
      const t = i,
        s = L(),
        e = L("");
      async function n() {
        await H();
        try {
          const {
            data: a
          } = await A(t.svgLink, "$pUbxg8zX5e");
          e.value = await a.value.text(), await H(), o()
        } catch (a) {
          console.log(a)
        }
      }

      function o() {
        var a, r;
        s.value && P.from(s.value, {
          scrollTrigger: {
            trigger: ((a = t.trigger) == null ? void 0 : a.el) || s.value,
            start: ((r = t.trigger) == null ? void 0 : r.start) || "top bottom"
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "default-ease"
        })
      }
      return $(() => {
        t.svgLink && t.svgLink.endsWith(".svg") && n()
      }), (a, r) => (E(), O("div", {
        ref_key: "iconWrapper",
        ref: s,
        class: "loaded-icon-wrapper",
        innerHTML: b(e)
      }, null, 8, tt))
    }
  });
const it = I(st, [
  ["__scopeId", "data-v-36bc22b0"]
]);
export {
  it as _
};