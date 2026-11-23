/* https://hilight.design/_nuxt/C2pv1RTM.js */
import {
  ac as z,
  l as V,
  aa as $,
  ad as L,
  Q as Y,
  ae as _,
  af as P,
  d as x,
  u as T,
  c as p,
  o as m,
  r as j,
  e as B,
  k as I,
  I as Q,
  m as h,
  n as q,
  p as X,
  s as N,
  F as G,
  y as K,
  a0 as S
} from "#entry";
const W = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
  Z = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998],
  H = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  b = [];
class J {
  _data = new E;
  _hash = new E([...W]);
  _nDataBytes = 0;
  _minBufferSize = 0;
  finalize(s) {
    s && this._append(s);
    const t = this._nDataBytes * 8,
      e = this._data.sigBytes * 8;
    return this._data.words[e >>> 5] |= 128 << 24 - e % 32, this._data.words[(e + 64 >>> 9 << 4) + 14] = Math.floor(t / 4294967296), this._data.words[(e + 64 >>> 9 << 4) + 15] = t, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash
  }
  _doProcessBlock(s, t) {
    const e = this._hash.words;
    let a = e[0],
      o = e[1],
      i = e[2],
      r = e[3],
      c = e[4],
      n = e[5],
      d = e[6],
      f = e[7];
    for (let l = 0; l < 64; l++) {
      if (l < 16) b[l] = s[t + l] | 0;
      else {
        const w = b[l - 15],
          v = (w << 25 | w >>> 7) ^ (w << 14 | w >>> 18) ^ w >>> 3,
          k = b[l - 2],
          M = (k << 15 | k >>> 17) ^ (k << 13 | k >>> 19) ^ k >>> 10;
        b[l] = v + b[l - 7] + M + b[l - 16]
      }
      const g = c & n ^ ~c & d,
        y = a & o ^ a & i ^ o & i,
        R = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22),
        D = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25),
        A = f + D + g + Z[l] + b[l],
        F = R + y;
      f = d, d = n, n = c, c = r + A | 0, r = i, i = o, o = a, a = A + F | 0
    }
    e[0] = e[0] + a | 0, e[1] = e[1] + o | 0, e[2] = e[2] + i | 0, e[3] = e[3] + r | 0, e[4] = e[4] + c | 0, e[5] = e[5] + n | 0, e[6] = e[6] + d | 0, e[7] = e[7] + f | 0
  }
  _append(s) {
    typeof s == "string" && (s = E.fromUtf8(s)), this._data.concat(s), this._nDataBytes += s.sigBytes
  }
  _process(s) {
    let t, e = this._data.sigBytes / 64;
    s ? e = Math.ceil(e) : e = Math.max((e | 0) - this._minBufferSize, 0);
    const a = e * 16,
      o = Math.min(a * 4, this._data.sigBytes);
    if (a) {
      for (let i = 0; i < a; i += 16) this._doProcessBlock(this._data.words, i);
      t = this._data.words.splice(0, a), this._data.sigBytes -= o
    }
    return new E(t, o)
  }
}
class E {
  words;
  sigBytes;
  constructor(s, t) {
    s = this.words = s || [], this.sigBytes = t === void 0 ? s.length * 4 : t
  }
  static fromUtf8(s) {
    const t = unescape(encodeURIComponent(s)),
      e = t.length,
      a = [];
    for (let o = 0; o < e; o++) a[o >>> 2] |= (t.charCodeAt(o) & 255) << 24 - o % 4 * 8;
    return new E(a, e)
  }
  toBase64() {
    const s = [];
    for (let t = 0; t < this.sigBytes; t += 3) {
      const e = this.words[t >>> 2] >>> 24 - t % 4 * 8 & 255,
        a = this.words[t + 1 >>> 2] >>> 24 - (t + 1) % 4 * 8 & 255,
        o = this.words[t + 2 >>> 2] >>> 24 - (t + 2) % 4 * 8 & 255,
        i = e << 16 | a << 8 | o;
      for (let r = 0; r < 4 && t * 8 + r * 6 < this.sigBytes * 8; r++) s.push(H.charAt(i >>> 6 * (3 - r) & 63))
    }
    return s.join("")
  }
  concat(s) {
    if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4)
      for (let t = 0; t < s.sigBytes; t++) {
        const e = s.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
        this.words[this.sigBytes + t >>> 2] |= e << 24 - (this.sigBytes + t) % 4 * 8
      } else
        for (let t = 0; t < s.sigBytes; t += 4) this.words[this.sigBytes + t >>> 2] = s.words[t >>> 2];
    this.sigBytes += s.sigBytes
  }
}

function ee(u) {
  return new J().finalize(u).toBase64()
}

function C(u) {
  return ee(z(u))
}

function pe(u, s, t) {
  const [e = {}, a] = typeof s == "string" ? [{}, s] : [s, t], o = V(() => _(u)), i = V(() => _(e.key) || "$f" + C([a, typeof o.value == "string" ? o.value : "", ...te(e)]));
  if (!e.baseURL && typeof o.value == "string" && o.value[0] === "/" && o.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const {
    server: r,
    lazy: c,
    default: n,
    transform: d,
    pick: f,
    watch: l,
    immediate: g,
    getCachedData: y,
    deep: R,
    dedupe: D,
    ...A
  } = e, F = $({
    ...L,
    ...A,
    cache: typeof e.cache == "boolean" ? void 0 : e.cache
  }), w = {
    server: r,
    lazy: c,
    default: n,
    transform: d,
    pick: f,
    immediate: g,
    getCachedData: y,
    deep: R,
    dedupe: D,
    watch: l === !1 ? [] : [...l || [], F]
  };
  let v;
  return Y(l === !1 ? i.value : i, () => {
    v?.abort?.(new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError")), v = typeof AbortController < "u" ? new AbortController : {};
    const M = _(e.timeout);
    let U;
    return M && (U = setTimeout(() => v.abort(new DOMException("Request aborted due to timeout.", "AbortError")), M), v.signal.onabort = () => clearTimeout(U)), (e.$fetch || globalThis.$fetch)(o.value, {
      signal: v.signal,
      ...F
    }).finally(() => {
      clearTimeout(U)
    })
  }, w)
}

function te(u) {
  const s = [_(u.method)?.toUpperCase() || "GET", _(u.baseURL)];
  for (const t of [u.params || u.query]) {
    const e = _(t);
    if (!e) continue;
    const a = {};
    for (const [o, i] of Object.entries(e)) a[_(o)] = _(i);
    s.push(a)
  }
  if (u.body) {
    const t = _(u.body);
    if (!t) s.push(C(t));
    else if (t instanceof ArrayBuffer) s.push(C(Object.fromEntries([...new Uint8Array(t).entries()].map(([e, a]) => [e, a.toString()]))));
    else if (t instanceof FormData) {
      const e = {};
      for (const a of t.entries()) {
        const [o, i] = a;
        e[o] = i instanceof File ? i.name : i
      }
      s.push(C(e))
    } else if (P(t)) s.push(C($(t)));
    else try {
      s.push(C(t))
    } catch {
      console.warn("[useFetch] Failed to hash body", t)
    }
  }
  return s
}
const se = ["src"],
  O = 20,
  ae = x({
    __name: "Qrcode",
    setup(u) {
      const s = j(null),
        t = j(null),
        {
          isMobile: e
        } = T();
      let a = null,
        o = !1;
      const i = () => {
          e.value || h.to(s.value, {
            width: "11rem",
            duration: .6,
            ease: "power3.out",
            onComplete() {
              o = !0
            }
          })
        },
        r = n => {
          if (e.value || !o) return;
          const d = s.value,
            f = t.value;
          if (!d || !f) return;
          const l = d.getBoundingClientRect(),
            g = (n.clientX - l.left) / l.width,
            y = (n.clientY - l.top) / l.height,
            R = h.utils.mapRange(0, 1, -O, O, g),
            D = h.utils.mapRange(0, 1, O, -O, y);
          a?.kill(), a = h.to(f, {
            rotateX: D,
            rotateY: R,
            transformPerspective: 800,
            transformOrigin: "center center",
            duration: .35,
            ease: "power2.out"
          })
        },
        c = () => {
          e.value || (a?.kill(), h.set(s.value, {
            pointerEvents: "none"
          }), h.to(s.value, {
            width: "3.5rem",
            duration: .7,
            ease: "elastic.out(1, 0.6)",
            onComplete() {
              h.set(s.value, {
                pointerEvents: "auto"
              }), o = !1
            }
          }), h.to(t.value, {
            rotateX: 0,
            rotateY: 0,
            duration: .7
          }))
        };
      return (n, d) => (m(), p("div", {
        ref_key: "wrapRef",
        ref: s,
        class: "code-wrap",
        onMouseenter: i,
        onMousemove: r,
        onMouseleave: c
      }, [B("div", {
        ref_key: "codeRef",
        ref: t,
        class: "code"
      }, [B("img", {
        draggable: "false",
        src: ("publicUrl" in n ? n.publicUrl : I(Q))("/images/code.svg"),
        alt: ""
      }, null, 8, se)], 512)], 544))
    }
  }),
  me = Object.assign(q(ae, [
    ["__scopeId", "data-v-0fec3abf"]
  ]), {
    __name: "CommonQrcode"
  }),
  oe = ["href", "aria-label"],
  ne = {
    class: "card"
  },
  re = {
    class: "card__face card__face--front"
  },
  ie = ["src"],
  ce = ["src"],
  le = {
    class: "card__face card__face--back"
  },
  ue = ["src"],
  de = ["src"],
  fe = x({
    __name: "InstagramCarousel",
    props: {
      data: {}
    },
    setup(u) {
      const {
        isDesktop: s
      } = T(), t = j(), e = (r, c) => {
        const n = 360 / r;
        return Array.from({
          length: r
        }, (d, f) => `rotateY(${f*n}deg) translateZ(${c}px)`)
      }, a = r => {
        const c = r.closest(".scene"),
          n = s.value ? 300 : 160,
          d = Number(c?.dataset.radius) || n,
          f = r.querySelectorAll(".carousel__cell"),
          l = e(f.length, d);
        f.forEach((g, y) => {
          g.style.transform = `
    translate(-50%, -50%)
    ${l[y]??""}
  `
        })
      };
      let o = null;
      const i = r => {
        o = h.to(r, {
          rotationY: "-=360",
          duration: 20,
          ease: "none",
          repeat: -1
        })
      };
      return X(() => {
        a(t.value), i(t.value)
      }), N(() => {
        o?.kill()
      }), (r, c) => (m(), p("div", {
        ref_key: "carouselRef",
        ref: t,
        class: "carousel"
      }, [(m(!0), p(G, null, K(u.data, (n, d) => (m(), p("a", {
        key: d,
        class: "carousel__cell",
        href: n.permalink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": n.caption || "Instagram"
      }, [B("div", ne, [B("div", re, [n.type === "VIDEO" && n.video ? (m(), p("video", {
        key: 0,
        class: "card__media",
        src: ("withVideoFrame" in r ? r.withVideoFrame : I(S))(n.video || n.image),
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "metadata"
      }, [...c[0] || (c[0] = [B("track", {
        kind: "captions",
        srclang: "en",
        label: "English",
        src: "/captions/silent.vtt",
        default: ""
      }, null, -1)])], 8, ie)) : (m(), p("img", {
        key: 1,
        class: "card__media",
        src: n.image,
        alt: "",
        draggable: "false"
      }, null, 8, ce))]), B("div", le, [n.type === "VIDEO" && n.video ? (m(), p("video", {
        key: 0,
        class: "card__media",
        src: ("withVideoFrame" in r ? r.withVideoFrame : I(S))(n.video || n.image),
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "metadata"
      }, [...c[1] || (c[1] = [B("track", {
        kind: "captions",
        srclang: "en",
        label: "English",
        src: "/captions/silent.vtt",
        default: ""
      }, null, -1)])], 8, ue)) : (m(), p("img", {
        key: 1,
        class: "card__media",
        src: n.image,
        alt: "",
        draggable: "false"
      }, null, 8, de))])])], 8, oe))), 128))], 512))
    }
  }),
  ge = Object.assign(q(fe, [
    ["__scopeId", "data-v-3213abe1"]
  ]), {
    __name: "CommonInstagramCarousel"
  });
export {
  me as _, ge as a, pe as u
};