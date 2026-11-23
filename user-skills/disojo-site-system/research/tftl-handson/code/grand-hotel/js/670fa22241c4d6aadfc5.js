/* https://grand-hotel.com.ua/_nuxt/js/670fa22241c4d6aadfc5.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4], {
    10: function(t, r, n) {
      "use strict";
      var e = n(18),
        o = n(46),
        f = n(31),
        c = n(21),
        y = n(47),
        h = n(37),
        l = n(108),
        v = n(43),
        d = n(168),
        w = n(494),
        A = f.Symbol,
        T = A && A.prototype;
      if (o && h(A) && (!("description" in T) || void 0 !== A().description)) {
        var I = {},
          x = function() {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : v(arguments[0]),
              r = l(T, this) ? new A(t) : void 0 === t ? A() : A(t);
            return "" === t && (I[r] = !0), r
          };
        w(x, A), x.prototype = T, T.constructor = x;
        var E = "Symbol(description detection)" === String(A("description detection")),
          R = c(T.valueOf),
          U = c(T.toString),
          B = /^Symbol\((.*)\)[^)]+$/,
          m = c("".replace),
          L = c("".slice);
        d(T, "description", {
          configurable: !0,
          get: function() {
            var symbol = R(this);
            if (y(I, symbol)) return "";
            var t = U(symbol),
              desc = E ? L(t, 7, -1) : m(t, B, "$1");
            return "" === desc ? void 0 : desc
          }
        }), e({
          global: !0,
          constructor: !0,
          forced: !0
        }, {
          Symbol: x
        })
      }
    },
    1003: function(t, r, n) {
      "use strict";
      var e = n(1004);
      t.exports = Math.fround || function(t) {
        return e(t, 1.1920928955078125e-7, 34028234663852886e22, 11754943508222875e-54)
      }
    },
    1004: function(t, r, n) {
      "use strict";
      var e = n(1005),
        o = n(1006),
        f = Math.abs;
      t.exports = function(t, r, n, c) {
        var y = +t,
          h = f(y),
          s = e(y);
        if (h < c) return s * o(h / c / r) * c * r;
        var a = (1 + r / 2220446049250313e-31) * h,
          l = a - (a - h);
        return l > n || l != l ? s * (1 / 0) : s * l
      }
    },
    1005: function(t, r, n) {
      "use strict";
      t.exports = Math.sign || function(t) {
        var r = +t;
        return 0 === r || r != r ? r : r < 0 ? -1 : 1
      }
    },
    1006: function(t, r, n) {
      "use strict";
      var e = 4503599627370496;
      t.exports = function(t) {
        return t + e - e
      }
    },
    1007: function(t, r, n) {
      "use strict";
      var e = Array,
        o = Math.abs,
        f = Math.pow,
        c = Math.floor,
        y = Math.log,
        h = Math.LN2;
      t.exports = {
        pack: function(t, r, n) {
          var l, v, d, w = e(n),
            A = 8 * n - r - 1,
            T = (1 << A) - 1,
            I = T >> 1,
            rt = 23 === r ? f(2, -24) - f(2, -77) : 0,
            x = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
            E = 0;
          for ((t = o(t)) != t || t === 1 / 0 ? (v = t != t ? 1 : 0, l = T) : (l = c(y(t) / h), t * (d = f(2, -l)) < 1 && (l--, d *= 2), (t += l + I >= 1 ? rt / d : rt * f(2, 1 - I)) * d >= 2 && (l++, d /= 2), l + I >= T ? (v = 0, l = T) : l + I >= 1 ? (v = (t * d - 1) * f(2, r), l += I) : (v = t * f(2, I - 1) * f(2, r), l = 0)); r >= 8;) w[E++] = 255 & v, v /= 256, r -= 8;
          for (l = l << r | v, A += r; A > 0;) w[E++] = 255 & l, l /= 256, A -= 8;
          return w[E - 1] |= 128 * x, w
        },
        unpack: function(t, r) {
          var n, e = t.length,
            o = 8 * e - r - 1,
            c = (1 << o) - 1,
            y = c >> 1,
            h = o - 7,
            l = e - 1,
            v = t[l--],
            d = 127 & v;
          for (v >>= 7; h > 0;) d = 256 * d + t[l--], h -= 8;
          for (n = d & (1 << -h) - 1, d >>= -h, h += r; h > 0;) n = 256 * n + t[l--], h -= 8;
          if (0 === d) d = 1 - y;
          else {
            if (d === c) return n ? NaN : v ? -1 / 0 : 1 / 0;
            n += f(2, r), d -= y
          }
          return (v ? -1 : 1) * n * f(2, d - r)
        }
      }
    },
    1008: function(t, r, n) {
      "use strict";
      var e = n(31),
        o = n(25),
        f = n(231),
        c = n(932).NATIVE_ARRAY_BUFFER_VIEWS,
        y = e.ArrayBuffer,
        h = e.Int8Array;
      t.exports = !c || !o((function() {
        h(1)
      })) || !o((function() {
        new h(-1)
      })) || !f((function(t) {
        new h, new h(null), new h(1.5), new h(t)
      }), !0) || o((function() {
        return 1 !== new h(new y(2), 1, void 0).length
      }))
    },
    1009: function(t, r, n) {
      "use strict";
      var e = n(39),
        o = Math.floor;
      t.exports = Number.isInteger || function(t) {
        return !e(t) && isFinite(t) && o(t) === t
      }
    },
    1010: function(t, r, n) {
      "use strict";
      var e = n(111),
        o = RangeError;
      t.exports = function(t) {
        var r = e(t);
        if (r < 0) throw new o("The argument can't be less than 0");
        return r
      }
    },
    1011: function(t, r, n) {
      "use strict";
      var e = Math.round;
      t.exports = function(t) {
        var r = e(t);
        return r < 0 ? 0 : r > 255 ? 255 : 255 & r
      }
    },
    1012: function(t, r, n) {
      "use strict";
      var e = n(44),
        o = n(29),
        f = n(501),
        c = n(76),
        y = n(91),
        h = n(223),
        l = n(172),
        v = n(496),
        d = n(1013),
        w = n(932).aTypedArrayConstructor,
        A = n(968);
      t.exports = function(source) {
        var i, t, r, n, T, I, x, E, R = f(this),
          U = c(source),
          B = arguments.length,
          m = B > 1 ? arguments[1] : void 0,
          L = void 0 !== m,
          F = l(U);
        if (F && !v(F))
          for (E = (x = h(U, F)).next, U = []; !(I = o(E, x)).done;) U.push(I.value);
        for (L && B > 2 && (m = e(m, arguments[2])), t = y(U), r = new(w(R))(t), n = d(r), i = 0; t > i; i++) T = L ? m(U[i], i) : U[i], r[i] = n ? A(T) : +T;
        return r
      }
    },
    1013: function(t, r, n) {
      "use strict";
      var e = n(110);
      t.exports = function(t) {
        var r = e(t);
        return "BigInt64Array" === r || "BigUint64Array" === r
      }
    },
    1014: function(t, r, n) {
      "use strict";
      var e = n(91);
      t.exports = function(t, r, n) {
        for (var o = 0, f = arguments.length > 2 ? n : e(r), c = new t(f); f > o;) c[o] = r[o++];
        return c
      }
    },
    1015: function(t, r, n) {
      "use strict";
      var e = n(18),
        o = n(31);
      e({
        global: !0,
        forced: o.globalThis !== o
      }, {
        globalThis: o
      })
    },
    1017: function(t, r) {
      t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
          enumerable: !0,
          get: function() {
            return t.l
          }
        }), Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function() {
            return t.i
          }
        }), t.webpackPolyfill = 1), t
      }
    },
    921: function(t, r, n) {
      "use strict";
      var e = n(18),
        o = n(31),
        f = n(945),
        c = n(222),
        y = "ArrayBuffer",
        h = f[y];
      e({
        global: !0,
        constructor: !0,
        forced: o[y] !== h
      }, {
        ArrayBuffer: h
      }), c(y)
    },
    922: function(t, r, n) {
      "use strict";
      var e = n(18),
        o = n(171),
        f = n(25),
        c = n(945),
        y = n(42),
        h = n(220),
        l = n(92),
        v = c.ArrayBuffer,
        d = c.DataView,
        w = d.prototype,
        A = o(v.prototype.slice),
        T = o(w.getUint8),
        I = o(w.setUint8);
      e({
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: f((function() {
          return !new v(2).slice(1, void 0).byteLength
        }))
      }, {
        slice: function(t, r) {
          if (A && void 0 === r) return A(y(this), t);
          for (var n = y(this).byteLength, e = h(t, n), o = h(void 0 === r ? n : r, n), f = new v(l(o - e)), c = new d(this), w = new d(f), x = 0; e < o;) I(w, x++, T(c, e++));
          return f
        }
      })
    },
    923: function(t, r, n) {
      "use strict";
      n(931)("Float32", (function(t) {
        return function(data, r, n) {
          return t(this, data, r, n)
        }
      }))
    },
    924: function(t, r, n) {
      "use strict";
      n(931)("Uint16", (function(t) {
        return function(data, r, n) {
          return t(this, data, r, n)
        }
      }))
    },
    925: function(t, r, n) {
      "use strict";
      var e = n(932),
        o = n(966),
        f = n(968),
        c = n(110),
        y = n(29),
        h = n(21),
        l = n(25),
        v = e.aTypedArray,
        d = e.exportTypedArrayMethod,
        w = h("".slice);
      d("fill", (function(t) {
        var r = arguments.length;
        v(this);
        var n = "Big" === w(c(this), 0, 3) ? f(t) : +t;
        return y(o, this, n, r > 1 ? arguments[1] : void 0, r > 2 ? arguments[2] : void 0)
      }), l((function() {
        var t = 0;
        return new Int8Array(2).fill({
          valueOf: function() {
            return t++
          }
        }), 1 !== t
      })))
    },
    926: function(t, r, n) {
      "use strict";
      var e = n(31),
        o = n(29),
        f = n(932),
        c = n(91),
        y = n(967),
        h = n(76),
        l = n(25),
        v = e.RangeError,
        d = e.Int8Array,
        w = d && d.prototype,
        A = w && w.set,
        T = f.aTypedArray,
        I = f.exportTypedArrayMethod,
        x = !l((function() {
          var t = new Uint8ClampedArray(2);
          return o(A, t, {
            length: 1,
            0: 3
          }, 1), 3 !== t[1]
        })),
        E = x && f.NATIVE_ARRAY_BUFFER_VIEWS && l((function() {
          var t = new d(2);
          return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
        }));
      I("set", (function(t) {
        T(this);
        var r = y(arguments.length > 1 ? arguments[1] : void 0, 1),
          n = h(t);
        if (x) return o(A, this, n, r);
        var e = this.length,
          f = c(n),
          l = 0;
        if (f + r > e) throw new v("Wrong length");
        for (; l < f;) this[r + l] = n[l++]
      }), !x || E)
    },
    927: function(t, r, n) {
      "use strict";
      var e = n(31),
        o = n(171),
        f = n(25),
        c = n(49),
        y = n(232),
        h = n(932),
        l = n(506),
        v = n(507),
        d = n(126),
        w = n(508),
        A = h.aTypedArray,
        T = h.exportTypedArrayMethod,
        I = e.Uint16Array,
        x = I && o(I.prototype.sort),
        E = !(!x || f((function() {
          x(new I(2), null)
        })) && f((function() {
          x(new I(2), {})
        }))),
        R = !!x && !f((function() {
          if (d) return d < 74;
          if (l) return l < 67;
          if (v) return !0;
          if (w) return w < 602;
          var t, r, n = new I(516),
            e = Array(516);
          for (t = 0; t < 516; t++) r = t % 4, n[t] = 515 - t, e[t] = t - 2 * r + 3;
          for (x(n, (function(a, b) {
              return (a / 4 | 0) - (b / 4 | 0)
            })), t = 0; t < 516; t++)
            if (n[t] !== e[t]) return !0
        }));
      T("sort", (function(t) {
        return void 0 !== t && c(t), R ? x(this, t) : y(A(this), function(t) {
          return function(r, n) {
            return void 0 !== t ? +t(r, n) || 0 : n != n ? -1 : r != r ? 1 : 0 === r && 0 === n ? 1 / r > 0 && 1 / n < 0 ? 1 : -1 : r > n
          }
        }(t))
      }), !R || E)
    },
    928: function(t, r, n) {
      "use strict";
      var e = n(31),
        o = n(229),
        f = n(932),
        c = n(25),
        y = n(170),
        h = e.Int8Array,
        l = f.aTypedArray,
        v = f.exportTypedArrayMethod,
        d = [].toLocaleString,
        w = !!h && c((function() {
          d.call(new h(1))
        }));
      v("toLocaleString", (function() {
        return o(d, w ? y(l(this)) : l(this), y(arguments))
      }), c((function() {
        return [1, 2].toLocaleString() !== new h([1, 2]).toLocaleString()
      })) || !c((function() {
        h.prototype.toLocaleString.call([1, 2])
      })))
    },
    931: function(t, r, n) {
      "use strict";
      var e = n(18),
        o = n(31),
        f = n(29),
        c = n(46),
        y = n(1008),
        h = n(932),
        l = n(945),
        v = n(123),
        d = n(124),
        w = n(94),
        A = n(1009),
        T = n(92),
        I = n(965),
        x = n(967),
        E = n(1011),
        R = n(225),
        U = n(47),
        B = n(110),
        m = n(39),
        L = n(226),
        F = n(97),
        O = n(108),
        _ = n(169),
        S = n(128).f,
        M = n(1012),
        V = n(502).forEach,
        P = n(222),
        N = n(168),
        C = n(60),
        W = n(125),
        Y = n(1014),
        D = n(74),
        k = n(224),
        j = D.get,
        G = D.set,
        J = D.enforce,
        $ = C.f,
        z = W.f,
        H = o.RangeError,
        K = l.ArrayBuffer,
        Q = K.prototype,
        X = l.DataView,
        Z = h.NATIVE_ARRAY_BUFFER_VIEWS,
        tt = h.TYPED_ARRAY_TAG,
        nt = h.TypedArray,
        et = h.TypedArrayPrototype,
        it = h.isTypedArray,
        ot = "BYTES_PER_ELEMENT",
        ut = "Wrong length",
        ft = function(t, r) {
          N(t, r, {
            configurable: !0,
            get: function() {
              return j(this)[r]
            }
          })
        },
        ct = function(t) {
          var r;
          return O(Q, t) || "ArrayBuffer" === (r = B(t)) || "SharedArrayBuffer" === r
        },
        at = function(t, r) {
          return it(t) && !L(r) && r in t && A(+r) && r >= 0
        },
        st = function(t, r) {
          return r = R(r), at(t, r) ? d(2, t[r]) : z(t, r)
        },
        yt = function(t, r, n) {
          return r = R(r), !(at(t, r) && m(n) && U(n, "value")) || U(n, "get") || U(n, "set") || n.configurable || U(n, "writable") && !n.writable || U(n, "enumerable") && !n.enumerable ? $(t, r, n) : (t[r] = n.value, t)
        };
      c ? (Z || (W.f = st, C.f = yt, ft(et, "buffer"), ft(et, "byteOffset"), ft(et, "byteLength"), ft(et, "length")), e({
        target: "Object",
        stat: !0,
        forced: !Z
      }, {
        getOwnPropertyDescriptor: st,
        defineProperty: yt
      }), t.exports = function(t, r, n) {
        var c = t.match(/\d+/)[0] / 8,
          h = t + (n ? "Clamped" : "") + "Array",
          l = "get" + t,
          d = "set" + t,
          A = o[h],
          R = A,
          U = R && R.prototype,
          B = {},
          L = function(t, r) {
            $(t, r, {
              get: function() {
                return function(t, r) {
                  var data = j(t);
                  return data.view[l](r * c + data.byteOffset, !0)
                }(this, r)
              },
              set: function(t) {
                return function(t, r, e) {
                  var data = j(t);
                  data.view[d](r * c + data.byteOffset, n ? E(e) : e, !0)
                }(this, r, t)
              },
              enumerable: !0
            })
          };
        Z ? y && (R = r((function(t, data, r, n) {
          return v(t, U), k(m(data) ? ct(data) ? void 0 !== n ? new A(data, x(r, c), n) : void 0 !== r ? new A(data, x(r, c)) : new A(data) : it(data) ? Y(R, data) : f(M, R, data) : new A(I(data)), t, R)
        })), _ && _(R, nt), V(S(A), (function(t) {
          t in R || w(R, t, A[t])
        })), R.prototype = U) : (R = r((function(t, data, r, n) {
          v(t, U);
          var e, o, y, h = 0,
            l = 0;
          if (m(data)) {
            if (!ct(data)) return it(data) ? Y(R, data) : f(M, R, data);
            e = data, l = x(r, c);
            var d = data.byteLength;
            if (void 0 === n) {
              if (d % c) throw new H(ut);
              if ((o = d - l) < 0) throw new H(ut)
            } else if ((o = T(n) * c) + l > d) throw new H(ut);
            y = o / c
          } else y = I(data), e = new K(o = y * c);
          for (G(t, {
              buffer: e,
              byteOffset: l,
              byteLength: o,
              length: y,
              view: new X(e)
            }); h < y;) L(t, h++)
        })), _ && _(R, nt), U = R.prototype = F(et)), U.constructor !== R && w(U, "constructor", R), J(U).TypedArrayConstructor = R, tt && w(U, tt, h);
        var O = R !== A;
        B[h] = R, e({
          global: !0,
          constructor: !0,
          forced: O,
          sham: !Z
        }, B), ot in R || w(R, ot, c), ot in U || w(U, ot, c), P(h)
      }) : t.exports = function() {}
    },
    932: function(t, r, n) {
      "use strict";
      var e, o, f, c = n(964),
        y = n(46),
        h = n(31),
        l = n(37),
        v = n(39),
        d = n(47),
        w = n(110),
        A = n(112),
        T = n(94),
        I = n(56),
        x = n(168),
        E = n(108),
        R = n(221),
        U = n(169),
        B = n(38),
        m = n(176),
        L = n(74),
        F = L.enforce,
        O = L.get,
        _ = h.Int8Array,
        S = _ && _.prototype,
        M = h.Uint8ClampedArray,
        V = M && M.prototype,
        P = _ && R(_),
        N = S && R(S),
        C = Object.prototype,
        W = h.TypeError,
        Y = B("toStringTag"),
        D = m("TYPED_ARRAY_TAG"),
        k = "TypedArrayConstructor",
        j = c && !!U && "Opera" !== w(h.opera),
        G = !1,
        J = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8
        },
        $ = {
          BigInt64Array: 8,
          BigUint64Array: 8
        },
        z = function(t) {
          var r = R(t);
          if (v(r)) {
            var n = O(r);
            return n && d(n, k) ? n[k] : z(r)
          }
        },
        H = function(t) {
          if (!v(t)) return !1;
          var r = w(t);
          return d(J, r) || d($, r)
        };
      for (e in J)(f = (o = h[e]) && o.prototype) ? F(f)[k] = o : j = !1;
      for (e in $)(f = (o = h[e]) && o.prototype) && (F(f)[k] = o);
      if ((!j || !l(P) || P === Function.prototype) && (P = function() {
          throw new W("Incorrect invocation")
        }, j))
        for (e in J) h[e] && U(h[e], P);
      if ((!j || !N || N === C) && (N = P.prototype, j))
        for (e in J) h[e] && U(h[e].prototype, N);
      if (j && R(V) !== N && U(V, N), y && !d(N, Y))
        for (e in G = !0, x(N, Y, {
            configurable: !0,
            get: function() {
              return v(this) ? this[D] : void 0
            }
          }), J) h[e] && T(h[e], D, e);
      t.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: j,
        TYPED_ARRAY_TAG: G && D,
        aTypedArray: function(t) {
          if (H(t)) return t;
          throw new W("Target is not a typed array")
        },
        aTypedArrayConstructor: function(t) {
          if (l(t) && (!U || E(P, t))) return t;
          throw new W(A(t) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(t, r, n, e) {
          if (y) {
            if (n)
              for (var o in J) {
                var f = h[o];
                if (f && d(f.prototype, t)) try {
                  delete f.prototype[t]
                } catch (n) {
                  try {
                    f.prototype[t] = r
                  } catch (t) {}
                }
              }
            N[t] && !n || I(N, t, n ? r : j && S[t] || r, e)
          }
        },
        exportTypedArrayStaticMethod: function(t, r, n) {
          var e, o;
          if (y) {
            if (U) {
              if (n)
                for (e in J)
                  if ((o = h[e]) && d(o, t)) try {
                    delete o[t]
                  } catch (t) {}
              if (P[t] && !n) return;
              try {
                return I(P, t, n ? r : j && P[t] || r)
              } catch (t) {}
            }
            for (e in J) !(o = h[e]) || o[t] && !n || I(o, t, r)
          }
        },
        getTypedArrayConstructor: z,
        isView: function(t) {
          if (!v(t)) return !1;
          var r = w(t);
          return "DataView" === r || d(J, r) || d($, r)
        },
        isTypedArray: H,
        TypedArray: P,
        TypedArrayPrototype: N
      }
    },
    933: function(t, r, n) {
      "use strict";
      n(931)("Int32", (function(t) {
        return function(data, r, n) {
          return t(this, data, r, n)
        }
      }))
    },
    934: function(t, r, n) {
      "use strict";
      n(931)("Uint32", (function(t) {
        return function(data, r, n) {
          return t(this, data, r, n)
        }
      }))
    },
    937: function(t, r, n) {
      "use strict";
      n(931)("Uint8", (function(t) {
        return function(data, r, n) {
          return t(this, data, r, n)
        }
      }))
    },
    938: function(t, r, n) {
      "use strict";
      n(1015)
    },
    945: function(t, r, n) {
      "use strict";
      var e = n(31),
        o = n(21),
        f = n(46),
        c = n(964),
        y = n(127),
        h = n(94),
        l = n(168),
        v = n(178),
        d = n(25),
        w = n(123),
        A = n(111),
        T = n(92),
        I = n(965),
        x = n(1003),
        E = n(1007),
        R = n(221),
        U = n(169),
        B = n(966),
        m = n(170),
        L = n(224),
        F = n(494),
        O = n(95),
        _ = n(74),
        S = y.PROPER,
        M = y.CONFIGURABLE,
        V = "ArrayBuffer",
        P = "DataView",
        N = "prototype",
        C = "Wrong index",
        W = _.getterFor(V),
        Y = _.getterFor(P),
        D = _.set,
        k = e[V],
        j = k,
        G = j && j[N],
        J = e[P],
        $ = J && J[N],
        z = Object.prototype,
        H = e.Array,
        K = e.RangeError,
        Q = o(B),
        X = o([].reverse),
        Z = E.pack,
        tt = E.unpack,
        nt = function(t) {
          return [255 & t]
        },
        et = function(t) {
          return [255 & t, t >> 8 & 255]
        },
        it = function(t) {
          return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        },
        ot = function(t) {
          return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        },
        ut = function(t) {
          return Z(x(t), 23, 4)
        },
        ft = function(t) {
          return Z(t, 52, 8)
        },
        ct = function(t, r, n) {
          l(t[N], r, {
            configurable: !0,
            get: function() {
              return n(this)[r]
            }
          })
        },
        at = function(view, t, r, n) {
          var e = Y(view),
            o = I(r),
            f = !!n;
          if (o + t > e.byteLength) throw new K(C);
          var c = e.bytes,
            y = o + e.byteOffset,
            h = m(c, y, y + t);
          return f ? h : X(h)
        },
        st = function(view, t, r, n, e, o) {
          var f = Y(view),
            c = I(r),
            y = n(+e),
            h = !!o;
          if (c + t > f.byteLength) throw new K(C);
          for (var l = f.bytes, v = c + f.byteOffset, i = 0; i < t; i++) l[v + i] = y[h ? i : t - i - 1]
        };
      if (c) {
        var yt = S && k.name !== V;
        d((function() {
          k(1)
        })) && d((function() {
          new k(-1)
        })) && !d((function() {
          return new k, new k(1.5), new k(NaN), 1 !== k.length || yt && !M
        })) ? yt && M && h(k, "name", V) : ((j = function(t) {
          return w(this, G), L(new k(I(t)), this, j)
        })[N] = G, G.constructor = j, F(j, k)), U && R($) !== z && U($, z);
        var ht = new J(new j(2)),
          pt = o($.setInt8);
        ht.setInt8(0, 2147483648), ht.setInt8(1, 2147483649), !ht.getInt8(0) && ht.getInt8(1) || v($, {
          setInt8: function(t, r) {
            pt(this, t, r << 24 >> 24)
          },
          setUint8: function(t, r) {
            pt(this, t, r << 24 >> 24)
          }
        }, {
          unsafe: !0
        })
      } else G = (j = function(t) {
        w(this, G);
        var r = I(t);
        D(this, {
          type: V,
          bytes: Q(H(r), 0),
          byteLength: r
        }), f || (this.byteLength = r, this.detached = !1)
      })[N], $ = (J = function(t, r, n) {
        w(this, $), w(t, G);
        var e = W(t),
          o = e.byteLength,
          c = A(r);
        if (c < 0 || c > o) throw new K("Wrong offset");
        if (c + (n = void 0 === n ? o - c : T(n)) > o) throw new K("Wrong length");
        D(this, {
          type: P,
          buffer: t,
          byteLength: n,
          byteOffset: c,
          bytes: e.bytes
        }), f || (this.buffer = t, this.byteLength = n, this.byteOffset = c)
      })[N], f && (ct(j, "byteLength", W), ct(J, "buffer", Y), ct(J, "byteLength", Y), ct(J, "byteOffset", Y)), v($, {
        getInt8: function(t) {
          return at(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
          return at(this, 1, t)[0]
        },
        getInt16: function(t) {
          var r = at(this, 2, t, arguments.length > 1 && arguments[1]);
          return (r[1] << 8 | r[0]) << 16 >> 16
        },
        getUint16: function(t) {
          var r = at(this, 2, t, arguments.length > 1 && arguments[1]);
          return r[1] << 8 | r[0]
        },
        getInt32: function(t) {
          return ot(at(this, 4, t, arguments.length > 1 && arguments[1]))
        },
        getUint32: function(t) {
          return ot(at(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0
        },
        getFloat32: function(t) {
          return tt(at(this, 4, t, arguments.length > 1 && arguments[1]), 23)
        },
        getFloat64: function(t) {
          return tt(at(this, 8, t, arguments.length > 1 && arguments[1]), 52)
        },
        setInt8: function(t, r) {
          st(this, 1, t, nt, r)
        },
        setUint8: function(t, r) {
          st(this, 1, t, nt, r)
        },
        setInt16: function(t, r) {
          st(this, 2, t, et, r, arguments.length > 2 && arguments[2])
        },
        setUint16: function(t, r) {
          st(this, 2, t, et, r, arguments.length > 2 && arguments[2])
        },
        setInt32: function(t, r) {
          st(this, 4, t, it, r, arguments.length > 2 && arguments[2])
        },
        setUint32: function(t, r) {
          st(this, 4, t, it, r, arguments.length > 2 && arguments[2])
        },
        setFloat32: function(t, r) {
          st(this, 4, t, ut, r, arguments.length > 2 && arguments[2])
        },
        setFloat64: function(t, r) {
          st(this, 8, t, ft, r, arguments.length > 2 && arguments[2])
        }
      });
      O(j, V), O(J, P), t.exports = {
        ArrayBuffer: j,
        DataView: J
      }
    },
    964: function(t, r, n) {
      "use strict";
      t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    },
    965: function(t, r, n) {
      "use strict";
      var e = n(111),
        o = n(92),
        f = RangeError;
      t.exports = function(t) {
        if (void 0 === t) return 0;
        var r = e(t),
          n = o(r);
        if (r !== n) throw new f("Wrong length or index");
        return n
      }
    },
    966: function(t, r, n) {
      "use strict";
      var e = n(76),
        o = n(220),
        f = n(91);
      t.exports = function(t) {
        for (var r = e(this), n = f(r), c = arguments.length, y = o(c > 1 ? arguments[1] : void 0, n), h = c > 2 ? arguments[2] : void 0, l = void 0 === h ? n : o(h, n); l > y;) r[y++] = t;
        return r
      }
    },
    967: function(t, r, n) {
      "use strict";
      var e = n(1010),
        o = RangeError;
      t.exports = function(t, r) {
        var n = e(t);
        if (n % r) throw new o("Wrong offset");
        return n
      }
    },
    968: function(t, r, n) {
      "use strict";
      var e = n(498),
        o = TypeError;
      t.exports = function(t) {
        var r = e(t, "number");
        if ("number" == typeof r) throw new o("Can't convert number to bigint");
        return BigInt(r)
      }
    },
    979: function(t, r, n) {
      "use strict";
      n(931)("Int8", (function(t) {
        return function(data, r, n) {
          return t(this, data, r, n)
        }
      }))
    },
    980: function(t, r, n) {
      "use strict";
      n(931)("Int16", (function(t) {
        return function(data, r, n) {
          return t(this, data, r, n)
        }
      }))
    }
  }
]);