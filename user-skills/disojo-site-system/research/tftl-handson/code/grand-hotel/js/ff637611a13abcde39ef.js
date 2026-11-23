/* https://grand-hotel.com.ua/_nuxt/js/ff637611a13abcde39ef.js */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1], {
    26: function(e, t, r) {
      "use strict";
      r(990)
    },
    27: function(e, t, r) {
      "use strict";
      var n = r(18),
        o = r(29);
      n({
        target: "URL",
        proto: !0,
        enumerable: !0
      }, {
        toJSON: function() {
          return o(URL.prototype.toString, this)
        }
      })
    },
    990: function(e, t, r) {
      "use strict";
      r(991);
      var n, o = r(18),
        h = r(46),
        f = r(505),
        c = r(31),
        l = r(44),
        m = r(21),
        v = r(56),
        d = r(168),
        w = r(123),
        P = r(47),
        S = r(500),
        y = r(992),
        U = r(170),
        k = r(497).codeAt,
        L = r(995),
        R = r(43),
        H = r(95),
        B = r(230),
        A = r(504),
        x = r(74),
        C = x.set,
        O = x.getterFor("URL"),
        z = A.URLSearchParams,
        j = A.getState,
        I = c.URL,
        F = c.TypeError,
        $ = c.parseInt,
        E = Math.floor,
        J = Math.pow,
        M = m("".charAt),
        N = m(/./.exec),
        T = m([].join),
        D = m(1..toString),
        G = m([].pop),
        K = m([].push),
        Q = m("".replace),
        V = m([].shift),
        W = m("".split),
        X = m("".slice),
        Y = m("".toLowerCase),
        Z = m([].unshift),
        _ = "Invalid scheme",
        ee = "Invalid host",
        te = "Invalid port",
        re = /[a-z]/i,
        ne = /[\d+-.a-z]/i,
        se = /\d/,
        ae = /^0x/i,
        ie = /^[0-7]+$/,
        oe = /^\d+$/,
        ue = /^[\da-f]+$/i,
        he = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
        fe = /[\0\t\n\r #/:<>?@[\\\]^|]/,
        ce = /^[\u0000-\u0020]+/,
        le = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
        pe = /[\t\n\r]/g,
        ge = function(e) {
          var t, r, n, o;
          if ("number" == typeof e) {
            for (t = [], r = 0; r < 4; r++) Z(t, e % 256), e = E(e / 256);
            return T(t, ".")
          }
          if ("object" == typeof e) {
            for (t = "", n = function(e) {
                for (var t = null, r = 1, n = null, o = 0, h = 0; h < 8; h++) 0 !== e[h] ? (o > r && (t = n, r = o), n = null, o = 0) : (null === n && (n = h), ++o);
                return o > r ? n : t
              }(e), r = 0; r < 8; r++) o && 0 === e[r] || (o && (o = !1), n === r ? (t += r ? ":" : "::", o = !0) : (t += D(e[r], 16), r < 7 && (t += ":")));
            return "[" + t + "]"
          }
          return e
        },
        me = {},
        ve = S({}, me, {
          " ": 1,
          '"': 1,
          "<": 1,
          ">": 1,
          "`": 1
        }),
        de = S({}, ve, {
          "#": 1,
          "?": 1,
          "{": 1,
          "}": 1
        }),
        we = S({}, de, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1
        }),
        Pe = function(e, t) {
          var code = k(e, 0);
          return code > 32 && code < 127 && !P(t, e) ? e : encodeURIComponent(e)
        },
        be = {
          ftp: 21,
          file: null,
          http: 80,
          https: 443,
          ws: 80,
          wss: 443
        },
        Se = function(e, t) {
          var r;
          return 2 === e.length && N(re, M(e, 0)) && (":" === (r = M(e, 1)) || !t && "|" === r)
        },
        ye = function(e) {
          var t;
          return e.length > 1 && Se(X(e, 0, 2)) && (2 === e.length || "/" === (t = M(e, 2)) || "\\" === t || "?" === t || "#" === t)
        },
        Ue = function(e) {
          return "." === e || "%2e" === Y(e)
        },
        ke = {},
        Le = {},
        Re = {},
        He = {},
        qe = {},
        Be = {},
        Ae = {},
        xe = {},
        Ce = {},
        Oe = {},
        ze = {},
        je = {},
        Ie = {},
        Fe = {},
        $e = {},
        Ee = {},
        Je = {},
        Me = {},
        Ne = {},
        Te = {},
        De = {},
        Ge = function(e, t, base) {
          var r, n, o, h = R(e);
          if (t) {
            if (n = this.parse(h)) throw new F(n);
            this.searchParams = null
          } else {
            if (void 0 !== base && (r = new Ge(base, !0)), n = this.parse(h, null, r)) throw new F(n);
            (o = j(new z)).bindURL(this), this.searchParams = o
          }
        };
      Ge.prototype = {
        type: "URL",
        parse: function(input, e, base) {
          var t, r, o, h, f, c = this,
            l = e || ke,
            m = 0,
            v = "",
            d = !1,
            w = !1,
            S = !1;
          for (input = R(input), e || (c.scheme = "", c.username = "", c.password = "", c.host = null, c.port = null, c.path = [], c.query = null, c.fragment = null, c.cannotBeABaseURL = !1, input = Q(input, ce, ""), input = Q(input, le, "$1")), input = Q(input, pe, ""), t = y(input); m <= t.length;) {
            switch (r = t[m], l) {
              case ke:
                if (!r || !N(re, r)) {
                  if (e) return _;
                  l = Re;
                  continue
                }
                v += Y(r), l = Le;
                break;
              case Le:
                if (r && (N(ne, r) || "+" === r || "-" === r || "." === r)) v += Y(r);
                else {
                  if (":" !== r) {
                    if (e) return _;
                    v = "", l = Re, m = 0;
                    continue
                  }
                  if (e && (c.isSpecial() !== P(be, v) || "file" === v && (c.includesCredentials() || null !== c.port) || "file" === c.scheme && !c.host)) return;
                  if (c.scheme = v, e) return void(c.isSpecial() && be[c.scheme] === c.port && (c.port = null));
                  v = "", "file" === c.scheme ? l = Fe : c.isSpecial() && base && base.scheme === c.scheme ? l = He : c.isSpecial() ? l = xe : "/" === t[m + 1] ? (l = qe, m++) : (c.cannotBeABaseURL = !0, K(c.path, ""), l = Ne)
                }
                break;
              case Re:
                if (!base || base.cannotBeABaseURL && "#" !== r) return _;
                if (base.cannotBeABaseURL && "#" === r) {
                  c.scheme = base.scheme, c.path = U(base.path), c.query = base.query, c.fragment = "", c.cannotBeABaseURL = !0, l = De;
                  break
                }
                l = "file" === base.scheme ? Fe : Be;
                continue;
              case He:
                if ("/" !== r || "/" !== t[m + 1]) {
                  l = Be;
                  continue
                }
                l = Ce, m++;
                break;
              case qe:
                if ("/" === r) {
                  l = Oe;
                  break
                }
                l = Me;
                continue;
              case Be:
                if (c.scheme = base.scheme, r === n) c.username = base.username, c.password = base.password, c.host = base.host, c.port = base.port, c.path = U(base.path), c.query = base.query;
                else if ("/" === r || "\\" === r && c.isSpecial()) l = Ae;
                else if ("?" === r) c.username = base.username, c.password = base.password, c.host = base.host, c.port = base.port, c.path = U(base.path), c.query = "", l = Te;
                else {
                  if ("#" !== r) {
                    c.username = base.username, c.password = base.password, c.host = base.host, c.port = base.port, c.path = U(base.path), c.path.length--, l = Me;
                    continue
                  }
                  c.username = base.username, c.password = base.password, c.host = base.host, c.port = base.port, c.path = U(base.path), c.query = base.query, c.fragment = "", l = De
                }
                break;
              case Ae:
                if (!c.isSpecial() || "/" !== r && "\\" !== r) {
                  if ("/" !== r) {
                    c.username = base.username, c.password = base.password, c.host = base.host, c.port = base.port, l = Me;
                    continue
                  }
                  l = Oe
                } else l = Ce;
                break;
              case xe:
                if (l = Ce, "/" !== r || "/" !== M(v, m + 1)) continue;
                m++;
                break;
              case Ce:
                if ("/" !== r && "\\" !== r) {
                  l = Oe;
                  continue
                }
                break;
              case Oe:
                if ("@" === r) {
                  d && (v = "%40" + v), d = !0, o = y(v);
                  for (var i = 0; i < o.length; i++) {
                    var k = o[i];
                    if (":" !== k || S) {
                      var L = Pe(k, we);
                      S ? c.password += L : c.username += L
                    } else S = !0
                  }
                  v = ""
                } else if (r === n || "/" === r || "?" === r || "#" === r || "\\" === r && c.isSpecial()) {
                  if (d && "" === v) return "Invalid authority";
                  m -= y(v).length + 1, v = "", l = ze
                } else v += r;
                break;
              case ze:
              case je:
                if (e && "file" === c.scheme) {
                  l = Ee;
                  continue
                }
                if (":" !== r || w) {
                  if (r === n || "/" === r || "?" === r || "#" === r || "\\" === r && c.isSpecial()) {
                    if (c.isSpecial() && "" === v) return ee;
                    if (e && "" === v && (c.includesCredentials() || null !== c.port)) return;
                    if (h = c.parseHost(v)) return h;
                    if (v = "", l = Je, e) return;
                    continue
                  }
                  "[" === r ? w = !0 : "]" === r && (w = !1), v += r
                } else {
                  if ("" === v) return ee;
                  if (h = c.parseHost(v)) return h;
                  if (v = "", l = Ie, e === je) return
                }
                break;
              case Ie:
                if (!N(se, r)) {
                  if (r === n || "/" === r || "?" === r || "#" === r || "\\" === r && c.isSpecial() || e) {
                    if ("" !== v) {
                      var H = $(v, 10);
                      if (H > 65535) return te;
                      c.port = c.isSpecial() && H === be[c.scheme] ? null : H, v = ""
                    }
                    if (e) return;
                    l = Je;
                    continue
                  }
                  return te
                }
                v += r;
                break;
              case Fe:
                if (c.scheme = "file", "/" === r || "\\" === r) l = $e;
                else {
                  if (!base || "file" !== base.scheme) {
                    l = Me;
                    continue
                  }
                  switch (r) {
                    case n:
                      c.host = base.host, c.path = U(base.path), c.query = base.query;
                      break;
                    case "?":
                      c.host = base.host, c.path = U(base.path), c.query = "", l = Te;
                      break;
                    case "#":
                      c.host = base.host, c.path = U(base.path), c.query = base.query, c.fragment = "", l = De;
                      break;
                    default:
                      ye(T(U(t, m), "")) || (c.host = base.host, c.path = U(base.path), c.shortenPath()), l = Me;
                      continue
                  }
                }
                break;
              case $e:
                if ("/" === r || "\\" === r) {
                  l = Ee;
                  break
                }
                base && "file" === base.scheme && !ye(T(U(t, m), "")) && (Se(base.path[0], !0) ? K(c.path, base.path[0]) : c.host = base.host), l = Me;
                continue;
              case Ee:
                if (r === n || "/" === r || "\\" === r || "?" === r || "#" === r) {
                  if (!e && Se(v)) l = Me;
                  else if ("" === v) {
                    if (c.host = "", e) return;
                    l = Je
                  } else {
                    if (h = c.parseHost(v)) return h;
                    if ("localhost" === c.host && (c.host = ""), e) return;
                    v = "", l = Je
                  }
                  continue
                }
                v += r;
                break;
              case Je:
                if (c.isSpecial()) {
                  if (l = Me, "/" !== r && "\\" !== r) continue
                } else if (e || "?" !== r)
                  if (e || "#" !== r) {
                    if (r !== n && (l = Me, "/" !== r)) continue
                  } else c.fragment = "", l = De;
                else c.query = "", l = Te;
                break;
              case Me:
                if (r === n || "/" === r || "\\" === r && c.isSpecial() || !e && ("?" === r || "#" === r)) {
                  if (".." === (f = Y(f = v)) || "%2e." === f || ".%2e" === f || "%2e%2e" === f ? (c.shortenPath(), "/" === r || "\\" === r && c.isSpecial() || K(c.path, "")) : Ue(v) ? "/" === r || "\\" === r && c.isSpecial() || K(c.path, "") : ("file" === c.scheme && !c.path.length && Se(v) && (c.host && (c.host = ""), v = M(v, 0) + ":"), K(c.path, v)), v = "", "file" === c.scheme && (r === n || "?" === r || "#" === r))
                    for (; c.path.length > 1 && "" === c.path[0];) V(c.path);
                  "?" === r ? (c.query = "", l = Te) : "#" === r && (c.fragment = "", l = De)
                } else v += Pe(r, de);
                break;
              case Ne:
                "?" === r ? (c.query = "", l = Te) : "#" === r ? (c.fragment = "", l = De) : r !== n && (c.path[0] += Pe(r, me));
                break;
              case Te:
                e || "#" !== r ? r !== n && ("'" === r && c.isSpecial() ? c.query += "%27" : c.query += "#" === r ? "%23" : Pe(r, me)) : (c.fragment = "", l = De);
                break;
              case De:
                r !== n && (c.fragment += Pe(r, ve))
            }
            m++
          }
        },
        parseHost: function(input) {
          var e, t, r;
          if ("[" === M(input, 0)) {
            if ("]" !== M(input, input.length - 1)) return ee;
            if (e = function(input) {
                var e, t, r, n, o, h, f, address = [0, 0, 0, 0, 0, 0, 0, 0],
                  c = 0,
                  l = null,
                  m = 0,
                  v = function() {
                    return M(input, m)
                  };
                if (":" === v()) {
                  if (":" !== M(input, 1)) return;
                  m += 2, l = ++c
                }
                for (; v();) {
                  if (8 === c) return;
                  if (":" !== v()) {
                    for (e = t = 0; t < 4 && N(ue, v());) e = 16 * e + $(v(), 16), m++, t++;
                    if ("." === v()) {
                      if (0 === t) return;
                      if (m -= t, c > 6) return;
                      for (r = 0; v();) {
                        if (n = null, r > 0) {
                          if (!("." === v() && r < 4)) return;
                          m++
                        }
                        if (!N(se, v())) return;
                        for (; N(se, v());) {
                          if (o = $(v(), 10), null === n) n = o;
                          else {
                            if (0 === n) return;
                            n = 10 * n + o
                          }
                          if (n > 255) return;
                          m++
                        }
                        address[c] = 256 * address[c] + n, 2 != ++r && 4 !== r || c++
                      }
                      if (4 !== r) return;
                      break
                    }
                    if (":" === v()) {
                      if (m++, !v()) return
                    } else if (v()) return;
                    address[c++] = e
                  } else {
                    if (null !== l) return;
                    m++, l = ++c
                  }
                }
                if (null !== l)
                  for (h = c - l, c = 7; 0 !== c && h > 0;) f = address[c], address[c--] = address[l + h - 1], address[l + --h] = f;
                else if (8 !== c) return;
                return address
              }(X(input, 1, -1)), !e) return ee;
            this.host = e
          } else if (this.isSpecial()) {
            if (input = L(input), N(he, input)) return ee;
            if (e = function(input) {
                var e, t, r, n, o, h, f, c = W(input, ".");
                if (c.length && "" === c[c.length - 1] && c.length--, (e = c.length) > 4) return input;
                for (t = [], r = 0; r < e; r++) {
                  if ("" === (n = c[r])) return input;
                  if (o = 10, n.length > 1 && "0" === M(n, 0) && (o = N(ae, n) ? 16 : 8, n = X(n, 8 === o ? 1 : 2)), "" === n) h = 0;
                  else {
                    if (!N(10 === o ? oe : 8 === o ? ie : ue, n)) return input;
                    h = $(n, o)
                  }
                  K(t, h)
                }
                for (r = 0; r < e; r++)
                  if (h = t[r], r === e - 1) {
                    if (h >= J(256, 5 - e)) return null
                  } else if (h > 255) return null;
                for (f = G(t), r = 0; r < t.length; r++) f += t[r] * J(256, 3 - r);
                return f
              }(input), null === e) return ee;
            this.host = e
          } else {
            if (N(fe, input)) return ee;
            for (e = "", t = y(input), r = 0; r < t.length; r++) e += Pe(t[r], me);
            this.host = e
          }
        },
        cannotHaveUsernamePasswordPort: function() {
          return !this.host || this.cannotBeABaseURL || "file" === this.scheme
        },
        includesCredentials: function() {
          return "" !== this.username || "" !== this.password
        },
        isSpecial: function() {
          return P(be, this.scheme)
        },
        shortenPath: function() {
          var path = this.path,
            e = path.length;
          !e || "file" === this.scheme && 1 === e && Se(path[0], !0) || path.length--
        },
        serialize: function() {
          var e = this,
            t = e.scheme,
            r = e.username,
            n = e.password,
            o = e.host,
            h = e.port,
            path = e.path,
            f = e.query,
            c = e.fragment,
            output = t + ":";
          return null !== o ? (output += "//", e.includesCredentials() && (output += r + (n ? ":" + n : "") + "@"), output += ge(o), null !== h && (output += ":" + h)) : "file" === t && (output += "//"), output += e.cannotBeABaseURL ? path[0] : path.length ? "/" + T(path, "/") : "", null !== f && (output += "?" + f), null !== c && (output += "#" + c), output
        },
        setHref: function(e) {
          var t = this.parse(e);
          if (t) throw new F(t);
          this.searchParams.update()
        },
        getOrigin: function() {
          var e = this.scheme,
            t = this.port;
          if ("blob" === e) try {
            return new Ke(e.path[0]).origin
          } catch (e) {
            return "null"
          }
          return "file" !== e && this.isSpecial() ? e + "://" + ge(this.host) + (null !== t ? ":" + t : "") : "null"
        },
        getProtocol: function() {
          return this.scheme + ":"
        },
        setProtocol: function(e) {
          this.parse(R(e) + ":", ke)
        },
        getUsername: function() {
          return this.username
        },
        setUsername: function(e) {
          var t = y(R(e));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.username = "";
            for (var i = 0; i < t.length; i++) this.username += Pe(t[i], we)
          }
        },
        getPassword: function() {
          return this.password
        },
        setPassword: function(e) {
          var t = y(R(e));
          if (!this.cannotHaveUsernamePasswordPort()) {
            this.password = "";
            for (var i = 0; i < t.length; i++) this.password += Pe(t[i], we)
          }
        },
        getHost: function() {
          var e = this.host,
            t = this.port;
          return null === e ? "" : null === t ? ge(e) : ge(e) + ":" + t
        },
        setHost: function(e) {
          this.cannotBeABaseURL || this.parse(e, ze)
        },
        getHostname: function() {
          var e = this.host;
          return null === e ? "" : ge(e)
        },
        setHostname: function(e) {
          this.cannotBeABaseURL || this.parse(e, je)
        },
        getPort: function() {
          var e = this.port;
          return null === e ? "" : R(e)
        },
        setPort: function(e) {
          this.cannotHaveUsernamePasswordPort() || ("" === (e = R(e)) ? this.port = null : this.parse(e, Ie))
        },
        getPathname: function() {
          var path = this.path;
          return this.cannotBeABaseURL ? path[0] : path.length ? "/" + T(path, "/") : ""
        },
        setPathname: function(e) {
          this.cannotBeABaseURL || (this.path = [], this.parse(e, Je))
        },
        getSearch: function() {
          var e = this.query;
          return e ? "?" + e : ""
        },
        setSearch: function(e) {
          "" === (e = R(e)) ? this.query = null: ("?" === M(e, 0) && (e = X(e, 1)), this.query = "", this.parse(e, Te)), this.searchParams.update()
        },
        getSearchParams: function() {
          return this.searchParams.facade
        },
        getHash: function() {
          var e = this.fragment;
          return e ? "#" + e : ""
        },
        setHash: function(e) {
          "" !== (e = R(e)) ? ("#" === M(e, 0) && (e = X(e, 1)), this.fragment = "", this.parse(e, De)) : this.fragment = null
        },
        update: function() {
          this.query = this.searchParams.serialize() || null
        }
      };
      var Ke = function(e) {
          var t = w(this, Qe),
            base = B(arguments.length, 1) > 1 ? arguments[1] : void 0,
            r = C(t, new Ge(e, !1, base));
          h || (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
        },
        Qe = Ke.prototype,
        Ve = function(e, t) {
          return {
            get: function() {
              return O(this)[e]()
            },
            set: t && function(e) {
              return O(this)[t](e)
            },
            configurable: !0,
            enumerable: !0
          }
        };
      if (h && (d(Qe, "href", Ve("serialize", "setHref")), d(Qe, "origin", Ve("getOrigin")), d(Qe, "protocol", Ve("getProtocol", "setProtocol")), d(Qe, "username", Ve("getUsername", "setUsername")), d(Qe, "password", Ve("getPassword", "setPassword")), d(Qe, "host", Ve("getHost", "setHost")), d(Qe, "hostname", Ve("getHostname", "setHostname")), d(Qe, "port", Ve("getPort", "setPort")), d(Qe, "pathname", Ve("getPathname", "setPathname")), d(Qe, "search", Ve("getSearch", "setSearch")), d(Qe, "searchParams", Ve("getSearchParams")), d(Qe, "hash", Ve("getHash", "setHash"))), v(Qe, "toJSON", (function() {
          return O(this).serialize()
        }), {
          enumerable: !0
        }), v(Qe, "toString", (function() {
          return O(this).serialize()
        }), {
          enumerable: !0
        }), I) {
        var We = I.createObjectURL,
          Xe = I.revokeObjectURL;
        We && v(Ke, "createObjectURL", l(We, I)), Xe && v(Ke, "revokeObjectURL", l(Xe, I))
      }
      H(Ke, "URL"), o({
        global: !0,
        constructor: !0,
        forced: !f,
        sham: !h
      }, {
        URL: Ke
      })
    },
    991: function(e, t, r) {
      "use strict";
      var n = r(497).charAt,
        o = r(43),
        h = r(74),
        f = r(499),
        c = r(227),
        l = "String Iterator",
        m = h.set,
        v = h.getterFor(l);
      f(String, "String", (function(e) {
        m(this, {
          type: l,
          string: o(e),
          index: 0
        })
      }), (function() {
        var e, t = v(this),
          r = t.string,
          o = t.index;
        return o >= r.length ? c(void 0, !0) : (e = n(r, o), t.index += e.length, c(e, !1))
      }))
    },
    992: function(e, t, r) {
      "use strict";
      var n = r(44),
        o = r(29),
        h = r(76),
        f = r(993),
        c = r(496),
        l = r(228),
        m = r(91),
        v = r(994),
        d = r(223),
        w = r(172),
        P = Array;
      e.exports = function(e) {
        var t = h(e),
          r = l(this),
          S = arguments.length,
          y = S > 1 ? arguments[1] : void 0,
          U = void 0 !== y;
        U && (y = n(y, S > 2 ? arguments[2] : void 0));
        var k, L, R, H, B, A, x = w(t),
          C = 0;
        if (!x || this === P && c(x))
          for (k = m(t), L = r ? new this(k) : P(k); k > C; C++) A = U ? y(t[C], C) : t[C], v(L, C, A);
        else
          for (L = r ? new this : [], B = (H = d(t, x)).next; !(R = o(B, H)).done; C++) A = U ? f(H, y, [R.value, C], !0) : R.value, v(L, C, A);
        return L.length = C, L
      }
    },
    993: function(e, t, r) {
      "use strict";
      var n = r(42),
        o = r(177);
      e.exports = function(e, t, r, h) {
        try {
          return h ? t(n(r)[0], r[1]) : t(r)
        } catch (t) {
          o(e, "throw", t)
        }
      }
    },
    994: function(e, t, r) {
      "use strict";
      var n = r(46),
        o = r(60),
        h = r(124);
      e.exports = function(object, e, t) {
        n ? o.f(object, e, h(0, t)) : object[e] = t
      }
    },
    995: function(e, t, r) {
      "use strict";
      var n = r(21),
        o = 2147483647,
        h = /[^\0-\u007E]/,
        f = /[.\u3002\uFF0E\uFF61]/g,
        c = "Overflow: input needs wider integers to process",
        l = RangeError,
        m = n(f.exec),
        v = Math.floor,
        d = String.fromCharCode,
        w = n("".charCodeAt),
        P = n([].join),
        S = n([].push),
        y = n("".replace),
        U = n("".split),
        k = n("".toLowerCase),
        L = function(e) {
          return e + 22 + 75 * (e < 26)
        },
        R = function(e, t, r) {
          var n = 0;
          for (e = r ? v(e / 700) : e >> 1, e += v(e / t); e > 455;) e = v(e / 35), n += 36;
          return v(n + 36 * e / (e + 38))
        },
        H = function(input) {
          var output = [];
          input = function(e) {
            for (var output = [], t = 0, r = e.length; t < r;) {
              var n = w(e, t++);
              if (n >= 55296 && n <= 56319 && t < r) {
                var o = w(e, t++);
                56320 == (64512 & o) ? S(output, ((1023 & n) << 10) + (1023 & o) + 65536) : (S(output, n), t--)
              } else S(output, n)
            }
            return output
          }(input);
          var i, e, t = input.length,
            r = 128,
            n = 0,
            h = 72;
          for (i = 0; i < input.length; i++)(e = input[i]) < 128 && S(output, d(e));
          var f = output.length,
            m = f;
          for (f && S(output, "-"); m < t;) {
            var y = o;
            for (i = 0; i < input.length; i++)(e = input[i]) >= r && e < y && (y = e);
            var U = m + 1;
            if (y - r > v((o - n) / U)) throw new l(c);
            for (n += (y - r) * U, r = y, i = 0; i < input.length; i++) {
              if ((e = input[i]) < r && ++n > o) throw new l(c);
              if (e === r) {
                for (var q = n, k = 36;;) {
                  var H = k <= h ? 1 : k >= h + 26 ? 26 : k - h;
                  if (q < H) break;
                  var B = q - H,
                    A = 36 - H;
                  S(output, d(L(H + B % A))), q = v(B / A), k += 36
                }
                S(output, d(L(q))), h = R(n, U, m === f), n = 0, m++
              }
            }
            n++, r++
          }
          return P(output, "")
        };
      e.exports = function(input) {
        var i, label, e = [],
          t = U(y(k(input), f, "."), ".");
        for (i = 0; i < t.length; i++) label = t[i], S(e, m(h, label) ? "xn--" + H(label) : label);
        return P(e, ".")
      }
    }
  }
]);